// Crides a l'API de Stripe (format x-www-form-urlencoded amb claus niades), compartides per pay.js i profe.js
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
