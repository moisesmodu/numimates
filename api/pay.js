/* Numi Mates Premium amb Stripe (una sola funció per no passar de les 12 del pla Hobby).
   POST /api/pay?a=checkout {code, pla:'mes'|'any'} → URL de Stripe Checkout per a aquest alumne
   GET  /api/pay?a=info                             → preus i enllaç del portal (la família hi entra amb el seu correu)
   POST /api/pay?a=hook                             → avisos de Stripe. No ens fiem del cos: tornem a demanar l'esdeveniment
                                                      a Stripe amb la clau secreta, així un avís inventat no pot activar res. */
import { sql, body, cleanCode, ok, blocked, fail, note, tooMany, alumneStrict, adultOnly, consentCols } from './_lib.js';

import { famOf } from './_auth.js';
import { STRIPE_KEY as KEY, stripe, stripeMode, applySub, subOf, setCancel, desist, refundAndCancel, subOfCharge, LIVE, DESIST_DAYS } from './_stripe.js';
import { MAIL_OK, sendMail } from './_mail.js';
const LOOKUP = { mes: 'numi_premium_mes', any: 'numi_premium_any' };
const APPNAME = new Proxy({ pro: 'Numi Pro', ment: 'Numi Ment' }, { get: (o, k) => o[k] || 'Numi Mates' });
const ORIGINS = ['https://app.numimates.com', 'https://pro.numimates.com', 'https://ment.numimates.com', 'https://mates-numi.vercel.app', 'http://localhost:5176', 'http://127.0.0.1:5176']
  .filter(o => process.env.VERCEL_ENV !== 'production' || !/localhost|127\.0\.0\.1/.test(o));

let PRICES = null, PORTAL = null;
async function prices() {
  if (PRICES) return PRICES;
  const q = Object.values(LOOKUP).map(k => 'lookup_keys[]=' + k).join('&');
  const r = await stripe('prices?active=true&' + q);
  const by = Object.fromEntries(r.data.map(p => [p.lookup_key, p]));
  if (!by[LOOKUP.mes] || !by[LOOKUP.any]) throw new Error('preus');
  return (PRICES = { mes: by[LOOKUP.mes], any: by[LOOKUP.any] });
}
async function portal() {
  if (PORTAL !== null) return PORTAL;
  const r = await stripe('billing_portal/configurations?active=true&limit=20');
  const c = r.data.find(x => x.login_page && x.login_page.enabled && x.login_page.url);
  return (PORTAL = c ? c.login_page.url : '');
}

async function hook(req, res) {
  const id = String(body(req).id || '');
  if (!/^evt_[A-Za-z0-9]{8,80}$/.test(id)) return ok(res, { error: 'event' }, 400);
  if (await blocked(req, 'stripe-hook', 300, 15)) return tooMany(res);
  let ev;
  try { ev = await stripe('events/' + id); } catch (e) { await fail(req, 'stripe-hook'); return ok(res, { error: 'event' }, 400); }
  const o = ev.data.object;
  if (ev.type === 'checkout.session.completed' && o.mode === 'subscription' && o.subscription) {
    const s = await stripe('subscriptions/' + o.subscription), code = cleanCode(o.client_reference_id);
    // dues compres alhora per al mateix alumne (l'app i la zona de famílies): la segona es cancel·la i es torna
    const prev = (await sql`SELECT stripe_sub FROM mates.alumnes WHERE code = ${code}`)[0];
    if (prev && prev.stripe_sub && prev.stripe_sub !== s.id) {
      const old = await stripe('subscriptions/' + prev.stripe_sub).catch(() => null);
      if (old && LIVE.includes(old.status) && !old.cancel_at_period_end) { await refundAndCancel(s, code, 'duplicat'); return ok(res, { ok: true, duplicat: true }); }
    }
    await applySub(s, code);
    // el sí (o el no) a rebre novetats queda al client de Stripe; els enviaments a «Clients de Premium» només van als que han dit que sí
    const cus = typeof o.customer === 'string' ? o.customer : o.customer && o.customer.id;
    if (cus) await stripe('customers/' + cus, { metadata: { promo: (o.metadata && o.metadata.promo) === '1' ? '1' : '0' } }).catch(e => console.error('promo', e.message));
    await confirmMail(o, s, code).catch(e => console.error('confirmació', e.message));
  } else if (ev.type === 'charge.refunded' || ev.type === 'charge.dispute.created') {
    // devolució total o disputa (retrocessió): la subscripció s'acaba ara i Premium es treu
    const chargeId = ev.type === 'charge.refunded' ? o.id : o.charge;
    if (ev.type === 'charge.dispute.created' || o.refunded) {
      const x = await subOfCharge(typeof chargeId === 'string' ? chargeId : chargeId.id);
      if (x) { const code = cleanCode(x.sub.metadata && x.sub.metadata.code); const c = x.sub.status === 'canceled' ? x.sub : await stripe('subscriptions/' + x.sub.id, null, 'DELETE'); await applySub(c, code); if (ev.type === 'charge.dispute.created') console.error('DISPUTA', code, x.charge.id); }
    }
  } else if (ev.type === 'invoice.paid' || ev.type === 'invoice.payment_succeeded') {
    const sid = o.subscription || (o.parent && o.parent.subscription_details && o.parent.subscription_details.subscription);
    if (sid) await applySub(await stripe('subscriptions/' + (typeof sid === 'string' ? sid : sid.id)));
  } else if (ev.type === 'customer.subscription.updated' || ev.type === 'customer.subscription.deleted') {
    await applySub(await stripe('subscriptions/' + o.id));
  }
  return ok(res, { ok: true });
}

async function checkout(req, res) {
  const b = body(req), code = cleanCode(b.code), pla = b.pla === 'any' ? 'any' : 'mes';
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'pagament', 20, 60)) return tooMany(res);
  await consentCols();
  const a = (await sql`SELECT name, active, grup_id, pla, pla_fins, stripe_customer, stripe_sub, consent, survey, state FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a) { await fail(req, 'pagament'); return ok(res, { error: 'no trobat' }, 404); }
  if (!a.active) return ok(res, { error: 'baixa' }, 410);
  if (a.grup_id) return ok(res, { error: 'escola' }, 409);
  // qui paga: la família que té aquest fill a la seva zona (enllaç per correu) o, si no és menor, l'app amb la clau del dispositiu.
  // Un menor de 14 anys no pot contractar res des de l'app: ho ha de fer un adult (art. 30 LCD i capacitat per contractar).
  const fam = famOf(b.tok), okFam = fam && (await sql`SELECT 1 FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${code}`.catch(() => [])).length;
  if (!okFam) {
    if (adultOnly(a)) return ok(res, { error: 'adult' }, 403);
    if (!(await alumneStrict(req, res, code))) return;
  }
  // en mode prova només es pot provar a posta (?provapagament): les famílies no han d'arribar a un pagament de prova
  if (stripeMode() !== 'live' && b.prova !== true) return ok(res, { error: 'no configurat' }, 503);
  if (a.stripe_sub && a.pla === 'premium' && a.pla_fins && new Date(a.pla_fins) >= new Date(new Date().toISOString().slice(0, 10))) return ok(res, { error: 'ja' }, 409);
  const origin = ORIGINS.includes(req.headers.origin) ? req.headers.origin : ORIGINS[0];
  const P = await prices();
  const params = {
    mode: 'subscription',
    line_items: { 0: { price: P[pla].id, quantity: 1 } },
    client_reference_id: code,
    metadata: { code, lang: b.lang === 'es' ? 'es' : 'ca', promo: b.promo === true ? '1' : '0' },   // novetats: només amb la casella marcada
    subscription_data: { metadata: { code }, description: APPNAME[(a.state || {}).variant] + ' Premium' },   // sense el nom de l'alumne: a Stripe no li cal
    customer: a.stripe_customer || undefined,
    allow_promotion_codes: 'true',
    billing_address_collection: 'auto',
    locale: b.lang === 'es' ? 'es' : 'auto',
    custom_text: { submit: { message: b.lang === 'es'
      ? `Al confirmar contratas ${APPNAME[(a.state || {}).variant]} Premium con obligación de pago. Se renueva automáticamente y lo puedes cancelar cuando quieras desde la app. Tienes 14 días para desistir con reembolso íntegro. Condiciones: numimates.com/es/condiciones`
      : `En confirmar contractes ${APPNAME[(a.state || {}).variant]} Premium amb obligació de pagament. Es renova automàticament i el pots cancel·lar quan vulguis des de l'app. Tens 14 dies per desistir-ne amb el reemborsament íntegre. Condicions: numimates.com/condicions` } },
    success_url: origin + (b.ret === 'families' ? '/families?premium=ok' : '/?premium=ok'),
    cancel_url: origin + (b.ret === 'families' ? '/families?premium=cancel' : '/?premium=cancel')
  };
  let s;
  // un client creat en proves no existeix al compte real: en aquest cas, Checkout en crea un de nou
  try { s = await stripe('checkout/sessions', params); }
  catch (e) { if (!params.customer || !/No such customer/i.test(e.message)) throw e; delete params.customer; s = await stripe('checkout/sessions', params); }
  await note(req, 'pagament'); // màxim 20 pagaments començats per hora i IP
  return ok(res, { url: s.url });
}

// cancel·lar (al final del període pagat) o desfer-ho, des de la mateixa app (sense passar pel portal de Stripe)
async function cancel(req, res, resume) {
  const b = body(req), code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'pagament', 20, 60)) return tooMany(res);
  await consentCols();
  const a = (await sql`SELECT 1 FROM mates.alumnes WHERE code = ${code} AND active`)[0];
  if (!a) { await fail(req, 'pagament'); return ok(res, { error: 'no trobat' }, 404); }
  // ho pot fer la família que té aquest fill a la seva zona, o l'app de l'alumne des d'un dispositiu amb la clau del compte
  const fam = famOf(b.tok), okFam = fam && (await sql`SELECT 1 FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${code}`.catch(() => [])).length;
  if (!okFam && !(await alumneStrict(req, res, code))) return;
  const c = await setCancel(code, resume);
  if (c.error === 'sense subscripció') return ok(res, { error: c.error }, 409);
  if (c.error) return ok(res, { error: 'stripe' }, 502);
  await note(req, 'pagament');
  const r = (await sql`SELECT stripe_sub, pla, pla_fins, pla_periode, pla_cancel, stripe_status, pla_inici FROM mates.alumnes WHERE code = ${code}`)[0];
  return ok(res, { ok: true, sub: subOf(r), verificat: true });
}

// Desistiment des de l'app (adult o ≥14 amb la clau del dispositiu) o des de la zona de famílies: cancel·la i retorna
async function desistir(req, res) {
  const b = body(req), code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'pagament', 20, 60)) return tooMany(res);
  await consentCols();
  const a = (await sql`SELECT consent, grup_id, pla, survey, state FROM mates.alumnes WHERE code = ${code} AND active`)[0];
  if (!a) { await fail(req, 'pagament'); return ok(res, { error: 'no trobat' }, 404); }
  const fam = famOf(b.tok), okFam = fam && (await sql`SELECT 1 FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${code}`.catch(() => [])).length;
  if (!okFam) { if (adultOnly(a)) return ok(res, { error: 'adult' }, 403); if (!(await alumneStrict(req, res, code))) return; }
  const cus = (await sql`SELECT stripe_customer, name, state->>'variant' AS variant FROM mates.alumnes WHERE code = ${code}`)[0] || {};
  const r = await desist(code);
  if (r.error === 'sense subscripció') return ok(res, { error: r.error }, 409);
  if (r.error === 'termini') return ok(res, { error: 'termini' }, 409);
  await note(req, 'pagament');
  // acusament de recepció del desistiment en un suport durador (art. 106 TRLGDCU)
  if (MAIL_OK() && cus.stripe_customer) {
    try {
      const c = await stripe('customers/' + encodeURIComponent(cus.stripe_customer));
      if (c && c.email) {
        const es = b.lang === 'es', app = APPNAME[cus.variant], eur = ((r.refunded || 0) / 100).toFixed(2).replace('.', ',') + ' €';
        const quan = new Date().toLocaleString(es ? 'es-ES' : 'ca-ES', { timeZone: 'Europe/Madrid', dateStyle: 'long', timeStyle: 'short' }), kid = String(cus.name || '').split(' ')[0].replace(/[<>&"']/g, '');
        const p1 = es ? `Hemos recibido tu desistimiento de <b>${app} Premium</b>${kid ? ` (${kid})` : ''} el ${quan}. Premium se ha cancelado y te devolvemos <b>${eur}</b> en la misma tarjeta (puede tardar unos días en aparecer).` : `Hem rebut el teu desistiment de <b>${app} Premium</b>${kid ? ` (${kid})` : ''} el ${quan}. Premium s'ha cancel·lat i et tornem <b>${eur}</b> a la mateixa targeta (pot trigar uns dies a aparèixer).`;
        const p2 = es ? 'No hace falta que hagas nada más. Si tienes cualquier duda, responde a este correo.' : 'No cal que facis res més. Si tens cap dubte, respon aquest correu.';
        const sign = es ? 'El equipo de Numi Mates' : "L'equip de Numi Mates";
        await sendMail({ to: c.email, subject: es ? `Desistimiento recibido: ${app} Premium` : `Desistiment rebut: ${app} Premium`,
          html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#2B1A38"><p style="font-size:22px;font-weight:800;color:#602B7A;margin:0 0 20px">numi mates</p><p style="font-size:16px;line-height:1.5">${p1}</p><p style="font-size:15px;line-height:1.5">${p2}</p><p style="font-size:14px;margin-top:24px">${sign}</p></div>`,
          text: `${p1.replace(/<[^>]+>/g, '')}\n\n${p2}\n\n${sign}` });
      }
    } catch (e) { console.error('desistiment correu', e.message); }
  }
  return ok(res, { ok: true, refunded: r.refunded });
}

// Confirmació del contracte en un suport durador (art. 98.7 TRLGDCU): correu amb el que s'ha contractat, el preu,
// la renovació, com cancel·lar-ho i el desistiment de 14 dies. Un sol correu per compra.
let CONF = null;
export async function confirmMail(o, s, code) {
  const to = o.customer_details && o.customer_details.email;
  if (!MAIL_OK() || !to) return;
  await (CONF || (CONF = sql`CREATE TABLE IF NOT EXISTS mates.pagaments_conf (session text PRIMARY KEY, created timestamptz NOT NULL DEFAULT now())`.catch(e => { CONF = null; throw e; })));
  if (!(await sql`INSERT INTO mates.pagaments_conf (session) VALUES (${o.id}) ON CONFLICT DO NOTHING RETURNING 1`).length) return;
  const a = (await sql`SELECT name, state FROM mates.alumnes WHERE code = ${code}`)[0] || {};
  const es = (o.metadata && o.metadata.lang) === 'es', app = APPNAME[(a.state || {}).variant], it = s.items.data[0], any = it.price.recurring.interval === 'year';
  const preu = (it.price.unit_amount / 100).toFixed(2).replace('.', ',').replace(',00', '') + ' €', fi = new Date(s.start_date * 1000 + DESIST_DAYS * 864e5).toLocaleDateString(es ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  const kid = String(a.name || '').split(' ')[0].replace(/[<>&"']/g, '');
  const cond = es ? 'https://numimates.com/es/condiciones' : 'https://numimates.com/condicions';
  const T = es ? {
    subject: `Confirmación: ${app} Premium`, hi: 'Hola,', p1: `Gracias. Has contratado <b>${app} Premium</b>${kid ? ` para <b>${kid}</b>` : ''}: <b>${preu} ${any ? 'al año' : 'al mes'}</b>, IVA incluido.`,
    li: [`Se renueva automáticamente cada ${any ? 'año' : 'mes'} hasta que lo canceles.`, 'Lo puedes cancelar cuando quieras desde la app (Perfil → Mi plan) o desde la zona de familias (app.numimates.com/families). Seguirás teniendo Premium hasta el final del periodo pagado.', `<b>Derecho de desistimiento:</b> tienes 14 días naturales (hasta el ${fi}) para desistir sin dar ninguna razón, con el reembolso íntegro. Lo puedes hacer con el botón «Desistir» de la app o de la zona de familias, o escribiéndonos a hola@numimates.com (también con el formulario de las condiciones).`],
    p2: `Condiciones de contratación: <a href="${cond}">${cond}</a>`, sign: 'El equipo de Numi Mates'
  } : {
    subject: `Confirmació: ${app} Premium`, hi: 'Hola,', p1: `Gràcies. Has contractat <b>${app} Premium</b>${kid ? ` per a <b>${kid}</b>` : ''}: <b>${preu} ${any ? "a l'any" : 'al mes'}</b>, IVA inclòs.`,
    li: [`Es renova automàticament cada ${any ? 'any' : 'mes'} fins que el cancel·lis.`, "El pots cancel·lar quan vulguis des de l'app (Perfil → El meu pla) o des de la zona de famílies (app.numimates.com/families). Continuaràs tenint Premium fins al final del període pagat.", `<b>Dret de desistiment:</b> tens 14 dies naturals (fins al ${fi}) per desistir sense donar cap motiu, amb el reemborsament íntegre. Ho pots fer amb el botó «Desisteix» de l'app o de la zona de famílies, o escrivint-nos a hola@numimates.com (també amb el formulari de les condicions).`],
    p2: `Condicions de contractació: <a href="${cond}">${cond}</a>`, sign: "L'equip de Numi Mates"
  };
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#2B1A38"><p style="font-size:22px;font-weight:800;color:#602B7A;margin:0 0 20px">numi mates</p>
    <p style="font-size:16px;line-height:1.5">${T.hi}</p><p style="font-size:16px;line-height:1.5">${T.p1}</p><ul style="font-size:15px;line-height:1.55;padding-left:20px">${T.li.map(x => `<li style="margin-bottom:8px">${x}</li>`).join('')}</ul>
    <p style="font-size:14px;line-height:1.5">${T.p2}</p><p style="font-size:14px;margin-top:24px">${T.sign}</p></div>`;
  await sendMail({ to, subject: T.subject, html, text: [T.hi, T.p1, ...T.li, T.p2, T.sign].join('\n\n').replace(/<[^>]+>/g, '') });
}

async function info(req, res) {
  const P = await prices();
  return ok(res, { mes: P.mes.unit_amount, any: P.any.unit_amount, portal: await portal(), mode: stripeMode() });
}

export default async function handler(req, res) {
  if (!KEY) return ok(res, { error: 'no configurat' }, 503);
  const a = String((req.query && req.query.a) || '');
  try {
    if (a === 'hook' && req.method === 'POST') return await hook(req, res);
    if (a === 'checkout' && req.method === 'POST') return await checkout(req, res);
    if (a === 'info') return await info(req, res);
    if ((a === 'cancel' || a === 'resume') && req.method === 'POST') return await cancel(req, res, a === 'resume');
    if (a === 'desist' && req.method === 'POST') return await desistir(req, res);
    return ok(res, { error: 'acció' }, 400);
  } catch (e) {
    console.error('pay', a, e.message);
    // si Stripe torna un error, que ho reintenti (els avisos es reenvien sols)
    return ok(res, { error: 'stripe' }, 502);
  }
}
