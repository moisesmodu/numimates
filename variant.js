/* ===== Variants de Numi: una sola app, tres públics =====
   Numi Mates (primària) · Numi Pro (ESO) · Numi Ment (adults). Mateix backend, comptes, Premium i panell.
   La variant surt del domini (pro.numimates.com, ment.numimates.com); per provar-la: ?v=pro · ?v=ment · ?v=mates */
const VARIANTS = {
  mates: { id: 'mates', name: 'Numi Mates', logo: 'img/brand/logo-horitzontal.svg', theme: '#602B7A', courses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ages: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], chat: false,
    tag: 'Matemàtiques de 6 a 16 anys|Matemáticas de 6 a 16 años' },
  // ESO: nivells 7–10 (1r a 4t d'ESO) i el 6 com a repàs
  pro: { id: 'pro', name: 'Numi Pro', logo: 'img/brand/logo-pro-negatiu.svg', theme: '#14111F', courses: [5, 6, 7, 8, 9], ages: [12, 13, 14, 15, 16], chat: true,
    tag: "Matemàtiques d'ESO|Matemáticas de ESO" },
  ment: { id: 'ment', name: 'Numi Ment', logo: 'img/brand/logo-ment.svg', theme: '#1F9E8A', courses: [], ages: [], chat: true,
    tag: 'Entrena la ment cada dia|Entrena la mente cada día' }
};
const VAR = (() => {
  const h = location.hostname, q = new URLSearchParams(location.search).get('v');
  let v = /^pro\./.test(h) ? 'pro' : /^ment\./.test(h) ? 'ment' : null;
  if (!v) {
    try { if (q && VARIANTS[q]) q === 'mates' ? localStorage.removeItem('numi_v') : localStorage.setItem('numi_v', q); v = localStorage.getItem('numi_v'); } catch (e) { v = q; }
  }
  const o = VARIANTS[v] || VARIANTS.mates;
  document.documentElement.dataset.v = o.id;
  // aspecte propi de la variant (Numi Pro: fosc, generat de style.css amb scripts/theme-pro.py)
  if (o.id === 'pro') ['theme-pro.css', 'theme-pro-extra.css'].forEach(f => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = f; document.head.appendChild(l); });
  if (o.id !== 'mates') {
    document.title = `${o.name} · ${o.tag.split('|')[0]}`;
    const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = o.theme;
    const t = document.querySelector('meta[name=apple-mobile-web-app-title]'); if (t) t.content = o.name;
  }
  return o;
})();
const IS_PRO = VAR.id === 'pro', IS_MENT = VAR.id === 'ment';
