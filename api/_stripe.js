// Crides a l'API de Stripe (format x-www-form-urlencoded amb claus niades), compartides per pay.js, profe.js i login.js
import { sql, cleanCode, consentCols } from './_lib.js';
// STRIPE_LIVE_KEY = clau real del compte NUMI MATES (la posa el Moisés); si no hi és, la de proves de la integració de Vercel
export const STRIPE_KEY = process.env.STRIPE_LIVE_KEY || process.env.STRIPE_SECRET_KEY;
export const stripeMode = () => !STRIPE_KEY ? null : /^(sk|rk)_live_/.test(STRIPE_KEY) ? 'live' : 'test';
function form(o, pre = '', out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue;
    const key = pre ? `${pre}[${k}]` : k;
    if (typeof v === 'object') form(v, key, out); else out.append(key, String(v));
  }
  return out;
}
// ver: versió de l'API per a una crida concreta (p. ex. per llegir payment_intent de les factures, que les versions noves ja no hi posen)
export async function stripe(path, data, method = data ? 'POST' : 'GET', ver = null) {
  const r = await fetch('https://api.stripe.com/v1/' + path, {
    method, headers: { authorization: 'Bearer ' + STRIPE_KEY, ...(data ? { 'content-type': 'application/x-www-form-urlencoded' } : {}), ...(ver ? { 'stripe-version': ver } : {}) },
    body: data ? form(data) : undefined
  });
  const j = await r.json();
  if (!r.ok) { const e = new Error((j.error && j.error.message) || 'stripe'); e.status = r.status; throw e; }
  return j;
}

export const DESIST_DAYS = 14;
const GRACE = 3; // dies de marge si la renovació tarda (reintents de cobrament)
const periodEnd = s => s.current_period_end || (s.items && s.items.data && s.items.data[0] && s.items.data[0].current_period_end) || 0;
const endDate = ts => new Date((ts + GRACE * 86400) * 1000).toISOString().slice(0, 10);
export const LIVE = ['active', 'trialing', 'past_due'];

// deixa l'alumne com diu la subscripció de Stripe (idempotent: es pot cridar tantes vegades com calgui)
export async function applySub(s, code) {
  code = cleanCode(code || (s.metadata && s.metadata.code));
  if (!code) return;
  const cust = typeof s.customer === 'string' ? s.customer : s.customer && s.customer.id;
  const it = s.items && s.items.data && s.items.data[0], iv = it && it.price && it.price.recurring && it.price.recurring.interval;
  const per = iv === 'year' ? 'any' : iv === 'month' ? 'mes' : null, cancel = !!(s.cancel_at_period_end || s.cancel_at);
  if (LIVE.includes(s.status) && periodEnd(s)) {
    await consentCols();
    await sql`UPDATE mates.alumnes SET pla = 'premium', pla_fins = ${endDate(periodEnd(s))}, stripe_customer = ${cust}, stripe_sub = ${s.id},
      pla_periode = ${per}, stripe_status = ${s.status}, pla_cancel = ${cancel}, pla_des = COALESCE(pla_des, CURRENT_DATE),
      pla_inici = ${new Date((s.start_date || Date.now() / 1000) * 1000).toISOString().slice(0, 10)} WHERE code = ${code}`;
  } else if (['canceled', 'unpaid', 'incomplete_expired'].includes(s.status)) {
    // s'acaba ara mateix: o ja s'ha esgotat el període pagat o s'ha tornat els diners (si ja s'havia acabat abans, no l'allarguem)
    await sql`UPDATE mates.alumnes SET pla_fins = LEAST(COALESCE(pla_fins, CURRENT_DATE), CURRENT_DATE - 1), stripe_sub = NULL, stripe_status = ${s.status}, pla_cancel = false WHERE code = ${code} AND stripe_sub = ${s.id}`;
  }
}

// el que veu l'app de la subscripció: període, data de renovació (o de fi, si està cancel·lada) i si està cancel·lada
export function subOf(a) {
  if (!a || !a.stripe_sub || a.pla !== 'premium' || !a.pla_fins) return null;
  const fins = new Date(a.pla_fins); if (isNaN(fins)) return null;
  // desistiment possible: dins dels 14 dies des de l'inici de la subscripció
  const ini = a.pla_inici ? new Date(a.pla_inici) : null, des = ini && !isNaN(ini) && Date.now() - ini.getTime() <= (DESIST_DAYS + 1) * 864e5 ? new Date(ini.getTime() + DESIST_DAYS * 864e5).toISOString().slice(0, 10) : null;
  return { periode: a.pla_periode || 'mes', renova: new Date(fins.getTime() - GRACE * 864e5).toISOString().slice(0, 10), cancel: !!a.pla_cancel, pendent: a.stripe_status === 'past_due', desist: des };
}

// Cancel·la (al final del període pagat) o reactiva a Stripe TOTES les subscripcions vives d'un alumne i ho comprova
// tornant-les a llegir de Stripe. Només torna ok si Stripe confirma que cap no es tornarà a cobrar (o, en reactivar, que sí).
export async function setCancel(code, resume) {
  const a = (await sql`SELECT stripe_sub, stripe_customer FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a) return { error: 'sense subscripció' };
  const ids = new Set(a.stripe_sub ? [a.stripe_sub] : []);
  if (!resume && a.stripe_customer) {
    const l = await stripe(`subscriptions?customer=${encodeURIComponent(a.stripe_customer)}&status=all&limit=100`).catch(e => { if (/No such customer/i.test(e.message)) return { data: [] }; throw e; });
    l.data.filter(s => LIVE.includes(s.status) && (s.id === a.stripe_sub || cleanCode(s.metadata && s.metadata.code) === code)).forEach(s => ids.add(s.id));
  }
  if (!resume) {
    // i qualsevol altra subscripció que porti el codi de l'alumne, encara que sigui d'un altre client de Stripe
    try { const f = await stripe(`subscriptions/search?limit=100&query=${encodeURIComponent(`metadata['code']:'${code}'`)}`); f.data.filter(s => LIVE.includes(s.status)).forEach(s => ids.add(s.id)); } catch (e) { }
  }
  if (!ids.size) return { error: 'sense subscripció' };
  // una subscripció de proves no existeix al compte real (o al revés): es dona per acabada
  const gone = [];
  for (const id of ids) {
    try { await stripe('subscriptions/' + id, { cancel_at_period_end: resume ? 'false' : 'true' }); }
    catch (e) { if (!/No such subscription/i.test(e.message)) throw e; gone.push(id); }
  }
  if (gone.length) { await sql`UPDATE mates.alumnes SET stripe_sub = NULL, stripe_status = 'canceled', pla_cancel = false, pla_fins = LEAST(COALESCE(pla_fins, CURRENT_DATE), CURRENT_DATE - 1) WHERE code = ${code} AND stripe_sub = ANY(${gone})`; gone.forEach(id => ids.delete(id)); }
  if (!ids.size) return resume ? { error: 'sense subscripció' } : { ok: true, n: 0 };
  const subs = await Promise.all([...ids].map(id => stripe('subscriptions/' + id)));
  for (const s of subs) await applySub(s, code);
  const ok = subs.every(s => resume ? LIVE.includes(s.status) && !s.cancel_at_period_end && !s.cancel_at : s.status === 'canceled' || s.cancel_at_period_end || s.cancel_at);
  return ok ? { ok: true, n: subs.length } : { error: 'no confirmat' };
}

export const HOOK_EVENTS = ['checkout.session.completed', 'invoice.paid', 'customer.subscription.updated', 'customer.subscription.deleted', 'charge.refunded', 'charge.dispute.created'];
// el webhook ha de rebre tots els avisos que fem servir (si se n'hi afegeixen de nous, el cron els hi posa sol)
export async function ensureHookEvents() {
  if (!STRIPE_KEY) return null;
  const HOOK = 'https://app.numimates.com/api/pay?a=hook';
  const h = (await stripe('webhook_endpoints?limit=100')).data.find(x => x.url === HOOK);
  if (!h || HOOK_EVENTS.every(e => h.enabled_events.includes(e) || h.enabled_events.includes('*'))) return false;
  await stripe('webhook_endpoints/' + h.id, { enabled_events: Object.fromEntries([...new Set([...h.enabled_events, ...HOOK_EVENTS])].map((v, i) => [i, v])) });
  return true;
}

// Desistiment (14 dies, art. 102 TRLGDCU): es cancel·la la subscripció ARA i es tornen tots els pagaments que se n'han fet.
// Només dins dels 14 dies des de la contractació. Torna { ok, refunded } o { error }.
export async function desist(code) {
  const a = (await sql`SELECT stripe_sub FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a || !a.stripe_sub) return { error: 'sense subscripció' };
  const s = await stripe('subscriptions/' + a.stripe_sub);
  if (Date.now() / 1000 - s.start_date > DESIST_DAYS * 86400) return { error: 'termini' };
  // pagaments de la subscripció (la versió fixa de l'API dona el payment_intent de cada factura)
  const invs = (await stripe(`invoices?subscription=${encodeURIComponent(s.id)}&status=paid&limit=20`, null, 'GET', '2024-06-20')).data;
  return { ok: true, refunded: await refundAndCancel(s, code, 'desistiment') };
}
// torna tots els pagaments d'una subscripció i la cancel·la ara mateix (desistiment, o una segona subscripció del mateix alumne)
export async function refundAndCancel(s, code, motiu) {
  const invs = (await stripe(`invoices?subscription=${encodeURIComponent(s.id)}&status=paid&limit=20`, null, 'GET', '2024-06-20')).data;
  let refunded = 0;
  for (const inv of invs) {
    if (!inv.payment_intent || !inv.amount_paid) continue;
    try { const r = await stripe('refunds', { payment_intent: inv.payment_intent, reason: motiu === 'duplicat' ? 'duplicate' : 'requested_by_customer', metadata: { code, motiu } }); refunded += r.amount; }
    catch (e) { if (!/already been refunded|has been charged back/i.test(e.message)) throw e; }
  }
  const c = s.status === 'canceled' ? s : await stripe('subscriptions/' + s.id, null, 'DELETE');
  await applySub(c, code);
  return refunded;
}
// la subscripció d'un cobrament (per als avisos de devolucions i disputes)
export async function subOfCharge(chargeId) {
  const ch = await stripe('charges/' + encodeURIComponent(chargeId), null, 'GET', '2024-06-20');
  if (!ch.invoice) return null;
  const inv = await stripe('invoices/' + encodeURIComponent(ch.invoice), null, 'GET', '2024-06-20');
  return inv.subscription ? { sub: await stripe('subscriptions/' + inv.subscription), charge: ch } : null;
}

// Prepara el compte: producte, preus (IVA inclòs), portal de la família i webhook. Idempotent; mateixa lògica que scripts/stripe-setup.mjs,
// però s'executa al servidor (acció d'administrador) perquè la clau real no hagi de sortir mai de Vercel.
export async function setupStripe() {
  const APP = 'https://app.numimates.com', WEB = 'https://numimates.com', HOOK = APP + '/api/pay?a=hook';
  const EVENTS = HOOK_EVENTS;
  const arr = a => Object.fromEntries(a.map((v, i) => [i, v])), log = [];
  let prices = (await stripe('prices?active=true&lookup_keys[]=numi_premium_mes&lookup_keys[]=numi_premium_any&expand[]=data.product')).data;
  let product = prices[0] && prices[0].product;
  if (!product) { product = await stripe('products', { name: 'Numi Mates Premium', description: 'Lliçons sense límit, batalles de mates i la ruta de temporada.', statement_descriptor: 'NUMI MATES', url: WEB }); log.push('producte ' + product.id); }
  for (const w of [{ k: 'numi_premium_mes', a: 499, i: 'month', n: 'Mensual' }, { k: 'numi_premium_any', a: 4900, i: 'year', n: 'Anual' }]) {
    const have = prices.find(p => p.lookup_key === w.k);
    if (have && have.unit_amount === w.a) continue;
    const p = await stripe('prices', { product: product.id, currency: 'eur', unit_amount: w.a, recurring: { interval: w.i }, tax_behavior: 'inclusive', nickname: w.n, lookup_key: w.k, transfer_lookup_key: 'true' });
    log.push('preu ' + w.n + ' ' + p.id);
  }
  prices = (await stripe('prices?active=true&lookup_keys[]=numi_premium_mes&lookup_keys[]=numi_premium_any')).data;
  const portal = {
    business_profile: { headline: 'Numi Mates Premium', privacy_policy_url: WEB + '/privacitat', terms_of_service_url: WEB + '/condicions' },
    default_return_url: APP, login_page: { enabled: 'true' },
    features: {
      invoice_history: { enabled: 'true' }, payment_method_update: { enabled: 'true' },
      customer_update: { enabled: 'true', allowed_updates: arr(['email', 'address', 'name']) },
      subscription_cancel: { enabled: 'true', mode: 'at_period_end' },
      subscription_update: { enabled: 'true', default_allowed_updates: arr(['price']), proration_behavior: 'create_prorations', products: { 0: { product: product.id, prices: arr(prices.map(p => p.id)) } } }
    }
  };
  const confs = (await stripe('billing_portal/configurations?active=true&limit=20')).data;
  const conf = confs.find(c => c.login_page && c.login_page.enabled) || confs.find(c => c.is_default);
  const saved = conf ? await stripe('billing_portal/configurations/' + conf.id, portal) : await stripe('billing_portal/configurations', portal);
  const hooks = (await stripe('webhook_endpoints?limit=100')).data, h = hooks.find(x => x.url === HOOK);
  if (h) await stripe('webhook_endpoints/' + h.id, { enabled_events: arr(EVENTS), disabled: 'false' });
  else { const n = await stripe('webhook_endpoints', { url: HOOK, enabled_events: arr(EVENTS), description: 'Numi Mates: activa Premium' }); log.push('webhook ' + n.id); }
  return { mode: stripeMode(), product: product.id, prices: prices.map(p => p.lookup_key + ' ' + p.unit_amount), portal: saved.login_page && saved.login_page.url, log };
}
