/* ===== Variants de Numi: una sola app, tres públics =====
   Numi Mates (primària) · Numi Pro (ESO) · Numi Ment (adults). Mateixa adreça, comptes, Premium i panell.
   La variant la decideix el perfil: en triar l'edat (12 anys o més → Numi Pro) i, als perfils antics,
   haver arribat als nivells d'ESO. Per provar-ne una a mà: ?v=pro · ?v=ment · ?v=mates (treu la prova) */
const VARIANTS = {
  mates: { id: 'mates', name: 'Numi Mates', logo: 'img/brand/logo-horitzontal.svg', theme: '#602B7A', courses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], chat: false,
    tag: 'Matemàtiques de 6 a 16 anys|Matemáticas de 6 a 16 años' },
  // ESO: nivells 7–10 (1r a 4t d'ESO) i el 6 com a repàs
  pro: { id: 'pro', name: 'Numi Pro', logo: 'img/brand/logo-pro-negatiu.svg', theme: '#14111F', courses: [5, 6, 7, 8, 9], chat: true,
    tag: "Matemàtiques d'ESO|Matemáticas de ESO" },
  ment: { id: 'ment', name: 'Numi Ment', logo: 'img/brand/logo-ment.svg', theme: '#1F9E8A', courses: [], chat: true,
    tag: 'Entrena la ment cada dia|Entrena la mente cada día' }
};
const ESO_FROM = 6, ESO_AGE = 12;   // índex del nivell 7 (1r d'ESO) i edat a partir de la qual es va a Numi Pro
const ESO_LONG = { 5: '6è de primària|6.º de primaria', 6: "1r d'ESO|1.º de ESO", 7: "2n d'ESO|2.º de ESO", 8: "3r d'ESO|3.º de ESO", 9: "4t d'ESO|4.º de ESO" };
const VAR_TEST = (() => {
  try {
    const q = new URLSearchParams(location.search).get('v');
    if (q && VARIANTS[q]) q === 'mates' ? localStorage.removeItem('numi_v') : localStorage.setItem('numi_v', q);
    return VARIANTS[localStorage.getItem('numi_v')] ? localStorage.getItem('numi_v') : null;
  } catch (e) { return null; }
})();
let VAR = VARIANTS.mates, IS_PRO = false, IS_MENT = false;
const varOf = p => VAR_TEST || (!p ? 'mates' : p.variant === 'ment' ? 'ment' : (p.variant === 'pro' || (p.maxCourse ?? p.course ?? 0) >= ESO_FROM) ? 'pro' : 'mates');
const TITLE0 = document.title, THEME0 = (document.querySelector('meta[name=theme-color]') || {}).content;
function setVariant(id) {
  const o = VARIANTS[VAR_TEST || id] || VARIANTS.mates;
  // a Numi Pro els nivells es diuen pel curs (2n d'ESO en lloc de «Nivell 8»)
  if (typeof COURSES !== 'undefined') COURSES.forEach((c, i) => { c.long0 = c.long0 || c.long; c.long = o.id === 'pro' && ESO_LONG[i] ? ESO_LONG[i] : c.long0; });
  if (o === VAR && document.documentElement.dataset.v === o.id) return false;
  VAR = o; IS_PRO = o.id === 'pro'; IS_MENT = o.id === 'ment';
  document.documentElement.dataset.v = o.id;
  // aspecte propi (Numi Pro: fosc, generat de style.css amb scripts/theme-pro.py); es carrega una sola vegada
  if (IS_PRO && !document.getElementById('th-pro')) ['theme-pro.css', 'theme-pro-extra.css'].forEach((f, i) => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = f; if (!i) l.id = 'th-pro'; document.head.appendChild(l); });
  document.title = o.id === 'mates' ? TITLE0 : `${o.name} · ${o.tag.split('|')[0]}`;
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = o.id === 'mates' ? THEME0 : o.theme;
  if (typeof xatSync === 'function') xatSync();
  return true;
}
setVariant(VAR_TEST || 'mates');
