// Crides a l'API de Stripe (format x-www-form-urlencoded amb claus niades), compartides per pay.js, profe.js i login.js
import { sql, cleanCode } from './_lib.js';
export const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
export const stripeMode = () => !STRIPE_KEY ? null : /^(sk|rk)_live_/.test(STRIPE_KEY) ? 'live' : 'test';
function form(o, pre = '', out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue;
    const key = pre ? `${pre}[${k}]` : k;
    if (typeof v === 'object') form(v, key, out); else out.append(key, String(v));
  }
  return out;
}
export async function stripe(path, data, method = data ? 'POST' : 'GET') {
  const r = await fetch('https://api.stripe.com/v1/' + path, {
    method, headers: { authorization: 'Bearer ' + STRIPE_KEY, ...(data ? { 'content-type': 'application/x-www-form-urlencoded' } : {}) },
    body: data ? form(data) : undefined
  });
  const j = await r.json();
  if (!r.ok) { const e = new Error((j.error && j.error.message) || 'stripe'); e.status = r.status; throw e; }
  return j;
}

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
    await sql`UPDATE mates.alumnes SET pla = 'premium', pla_fins = ${endDate(periodEnd(s))}, stripe_customer = ${cust}, stripe_sub = ${s.id},
      pla_periode = ${per}, stripe_status = ${s.status}, pla_cancel = ${cancel}, pla_des = COALESCE(pla_des, CURRENT_DATE) WHERE code = ${code}`;
  } else if (['canceled', 'unpaid', 'incomplete_expired'].includes(s.status)) {
    // s'acaba ara mateix: o ja s'ha esgotat el període pagat o s'ha tornat els diners (si ja s'havia acabat abans, no l'allarguem)
    await sql`UPDATE mates.alumnes SET pla_fins = LEAST(COALESCE(pla_fins, CURRENT_DATE), CURRENT_DATE - 1), stripe_sub = NULL, stripe_status = ${s.status}, pla_cancel = false WHERE code = ${code} AND stripe_sub = ${s.id}`;
  }
}

// el que veu l'app de la subscripció: període, data de renovació (o de fi, si està cancel·lada) i si està cancel·lada
export function subOf(a) {
  if (!a || !a.stripe_sub || a.pla !== 'premium' || !a.pla_fins) return null;
  const fins = new Date(a.pla_fins); if (isNaN(fins)) return null;
  return { periode: a.pla_periode || 'mes', renova: new Date(fins.getTime() - GRACE * 864e5).toISOString().slice(0, 10), cancel: !!a.pla_cancel, pendent: a.stripe_status === 'past_due' };
}

// Cancel·la (al final del període pagat) o reactiva a Stripe TOTES les subscripcions vives d'un alumne i ho comprova
// tornant-les a llegir de Stripe. Només torna ok si Stripe confirma que cap no es tornarà a cobrar (o, en reactivar, que sí).
export async function setCancel(code, resume) {
  const a = (await sql`SELECT stripe_sub, stripe_customer FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a || (!a.stripe_sub && !a.stripe_customer)) return { error: 'sense subscripció' };
  const ids = new Set(a.stripe_sub ? [a.stripe_sub] : []);
  if (!resume && a.stripe_customer) {
    const l = await stripe(`subscriptions?customer=${encodeURIComponent(a.stripe_customer)}&status=all&limit=100`);
    l.data.filter(s => LIVE.includes(s.status) && (s.id === a.stripe_sub || cleanCode(s.metadata && s.metadata.code) === code)).forEach(s => ids.add(s.id));
  }
  if (!ids.size) return { error: 'sense subscripció' };
  for (const id of ids) await stripe('subscriptions/' + id, { cancel_at_period_end: resume ? 'false' : 'true' });
  const subs = await Promise.all([...ids].map(id => stripe('subscriptions/' + id)));
  for (const s of subs) await applySub(s, code);
  const ok = subs.every(s => resume ? LIVE.includes(s.status) && !s.cancel_at_period_end && !s.cancel_at : s.status === 'canceled' || s.cancel_at_period_end || s.cancel_at);
  return ok ? { ok: true, n: subs.length } : { error: 'no confirmat' };
}
