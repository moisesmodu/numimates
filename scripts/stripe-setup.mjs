// Prepara el compte de Stripe de Numi Mates (es pot tornar a executar: no duplica res).
// Ús: STRIPE_SECRET_KEY=... node scripts/stripe-setup.mjs
// Cal tornar-lo a executar quan el compte de prova passi a real (les claus i els objectes són diferents).
const KEY = process.env.STRIPE_SECRET_KEY;
if (!KEY) { console.error('Falta STRIPE_SECRET_KEY'); process.exit(1); }
const APP = 'https://app.numimates.com', WEB = 'https://numimates.com';
const HOOK = APP + '/api/pay?a=hook';
const EVENTS = ['checkout.session.completed', 'invoice.paid', 'customer.subscription.updated', 'customer.subscription.deleted'];

function form(o, pre = '', out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue;
    const key = pre ? `${pre}[${k}]` : k;
    if (typeof v === 'object') form(v, key, out); else out.append(key, String(v));
  }
  return out;
}
async function S(path, data) {
  const r = await fetch('https://api.stripe.com/v1/' + path, { method: data ? 'POST' : 'GET', headers: { authorization: 'Bearer ' + KEY }, body: data ? form(data) : undefined });
  const j = await r.json(); if (!r.ok) throw new Error(path + ': ' + (j.error && j.error.message)); return j;
}
const arr = a => Object.fromEntries(a.map((v, i) => [i, v]));

const mode = KEY.startsWith('sk_live') ? 'REAL' : 'PROVA';
console.log('Compte de Stripe en mode', mode);

// 1. producte i preus (IVA inclòs: el preu que veu la família és el final)
let prices = (await S('prices?active=true&lookup_keys[]=numi_premium_mes&lookup_keys[]=numi_premium_any&expand[]=data.product')).data;
let product = prices[0] && prices[0].product;
if (!product) {
  product = await S('products', { name: 'Numi Mates Premium', description: 'Lliçons sense límit, batalles de mates i la ruta de temporada.', statement_descriptor: 'NUMI MATES', url: WEB });
  console.log('Producte creat', product.id);
}
const want = [
  { lookup_key: 'numi_premium_mes', unit_amount: 499, interval: 'month', nickname: 'Mensual' },
  { lookup_key: 'numi_premium_any', unit_amount: 4900, interval: 'year', nickname: 'Anual' }
];
for (const w of want) {
  const have = prices.find(p => p.lookup_key === w.lookup_key);
  if (have && have.unit_amount === w.unit_amount) { console.log('Preu', w.nickname, 'ja hi és'); continue; }
  // un preu de Stripe no es pot canviar: se'n crea un de nou i s'hi passa la clau (transfer_lookup_key)
  const p = await S('prices', { product: product.id, currency: 'eur', unit_amount: w.unit_amount, recurring: { interval: w.interval }, tax_behavior: 'inclusive', nickname: w.nickname, lookup_key: w.lookup_key, transfer_lookup_key: 'true' });
  console.log('Preu creat', w.nickname, p.id);
}
prices = (await S('prices?active=true&lookup_keys[]=numi_premium_mes&lookup_keys[]=numi_premium_any')).data;

// 2. portal de la família: hi entra amb el seu correu (enllaç de Stripe), sense passar pel codi de l'alumne
const portal = {
  business_profile: { headline: 'Numi Mates Premium', privacy_policy_url: WEB + '/privacitat', terms_of_service_url: WEB + '/condicions' },
  default_return_url: APP,
  login_page: { enabled: 'true' },
  features: {
    invoice_history: { enabled: 'true' },
    payment_method_update: { enabled: 'true' },
    customer_update: { enabled: 'true', allowed_updates: arr(['email', 'address', 'name']) },
    subscription_cancel: { enabled: 'true', mode: 'at_period_end' },
    subscription_update: { enabled: 'true', default_allowed_updates: arr(['price']), proration_behavior: 'create_prorations', products: { 0: { product: product.id, prices: arr(prices.map(p => p.id)) } } }
  }
};
const confs = (await S('billing_portal/configurations?active=true&limit=20')).data;
const conf = confs.find(c => c.login_page && c.login_page.enabled) || confs.find(c => c.is_default);
const saved = conf ? await S('billing_portal/configurations/' + conf.id, portal) : await S('billing_portal/configurations', portal);
console.log('Portal', saved.id, '→', saved.login_page && saved.login_page.url);

// 3. avisos de Stripe cap a l'app (no cal secret: l'app torna a demanar cada esdeveniment a Stripe)
const hooks = (await S('webhook_endpoints?limit=100')).data;
const h = hooks.find(x => x.url === HOOK);
if (h) { await S('webhook_endpoints/' + h.id, { enabled_events: arr(EVENTS), disabled: 'false' }); console.log('Webhook actualitzat', h.id); }
else { const n = await S('webhook_endpoints', { url: HOOK, enabled_events: arr(EVENTS), description: 'Numi Mates: activa Premium' }); console.log('Webhook creat', n.id); }
console.log('Fet.');
