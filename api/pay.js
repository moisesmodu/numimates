/* Numi Mates Premium amb Stripe (una sola funció per no passar de les 12 del pla Hobby).
   POST /api/pay?a=checkout {code, pla:'mes'|'any'} → URL de Stripe Checkout per a aquest alumne
   GET  /api/pay?a=info                             → preus i enllaç del portal (la família hi entra amb el seu correu)
   POST /api/pay?a=hook                             → avisos de Stripe. No ens fiem del cos: tornem a demanar l'esdeveniment
                                                      a Stripe amb la clau secreta, així un avís inventat no pot activar res. */
import { sql, body, cleanCode, ok, blocked, fail, note, tooMany } from './_lib.js';

import { STRIPE_KEY as KEY, stripe, stripeMode, applySub, subOf, setCancel } from './_stripe.js';
const LOOKUP = { mes: 'numi_premium_mes', any: 'numi_premium_any' };
const ORIGINS = ['https://app.numimates.com', 'https://mates-numi.vercel.app', 'http://localhost:5176', 'http://127.0.0.1:5176'];

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
    const s = await stripe('subscriptions/' + o.subscription);
    await applySub(s, o.client_reference_id);
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
  const a = (await sql`SELECT name, active, grup_id, pla, pla_fins, stripe_customer, stripe_sub FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a) { await fail(req, 'pagament'); return ok(res, { error: 'no trobat' }, 404); }
  if (!a.active) return ok(res, { error: 'baixa' }, 410);
  if (a.grup_id) return ok(res, { error: 'escola' }, 409);
  // en mode prova només es pot provar a posta (?provapagament): les famílies no han d'arribar a un pagament de prova
  if (stripeMode() !== 'live' && b.prova !== true) return ok(res, { error: 'no configurat' }, 503);
  if (a.stripe_sub && a.pla === 'premium' && a.pla_fins && new Date(a.pla_fins) >= new Date(new Date().toISOString().slice(0, 10))) return ok(res, { error: 'ja' }, 409);
  const origin = ORIGINS.includes(req.headers.origin) ? req.headers.origin : ORIGINS[0];
  const P = await prices();
  const s = await stripe('checkout/sessions', {
    mode: 'subscription',
    line_items: { 0: { price: P[pla].id, quantity: 1 } },
    client_reference_id: code,
    metadata: { code },
    subscription_data: { metadata: { code }, description: 'Numi Mates Premium · ' + String(a.name || '').slice(0, 60) },
    customer: a.stripe_customer || undefined,
    allow_promotion_codes: 'true',
    billing_address_collection: 'auto',
    locale: b.lang === 'es' ? 'es' : 'auto',
    custom_text: { submit: { message: b.lang === 'es'
      ? 'Se renueva automáticamente y puedes cancelarlo cuando quieras. Condiciones: numimates.com/condicions'
      : "Es renova automàticament i el pots cancel·lar quan vulguis. Condicions: numimates.com/condicions" } },
    success_url: origin + '/?premium=ok',
    cancel_url: origin + '/?premium=cancel'
  });
  await note(req, 'pagament'); // màxim 20 pagaments començats per hora i IP
  return ok(res, { url: s.url });
}

// cancel·lar (al final del període pagat) o desfer-ho, des de la mateixa app (sense passar pel portal de Stripe)
async function cancel(req, res, resume) {
  const b = body(req), code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'pagament', 20, 60)) return tooMany(res);
  const a = (await sql`SELECT 1 FROM mates.alumnes WHERE code = ${code} AND active`)[0];
  if (!a) { await fail(req, 'pagament'); return ok(res, { error: 'no trobat' }, 404); }
  const c = await setCancel(code, resume);
  if (c.error === 'sense subscripció') return ok(res, { error: c.error }, 409);
  if (c.error) return ok(res, { error: 'stripe' }, 502);
  await note(req, 'pagament');
  const r = (await sql`SELECT stripe_sub, pla, pla_fins, pla_periode, pla_cancel, stripe_status FROM mates.alumnes WHERE code = ${code}`)[0];
  return ok(res, { ok: true, sub: subOf(r), verificat: true });
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
    return ok(res, { error: 'acció' }, 400);
  } catch (e) {
    console.error('pay', a, e.message);
    // si Stripe torna un error, que ho reintenti (els avisos es reenvien sols)
    return ok(res, { error: 'stripe' }, 502);
  }
}
