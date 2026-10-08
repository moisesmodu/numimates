/* ===== Tres apps, un sol motor =====
   Numi Mates (primària) · Numi Pro (ESO) · Numi Ment (adults). Cada una té la seva adreça, nom, icona i manifest
   (app.numimates.com, pro.numimates.com, ment.numimates.com) i es podrà publicar a les botigues per separat;
   per dins comparteixen codi, servidor, comptes, Premium i panell.
   · A la seva adreça, cada app és sempre la mateixa variant. Si s'hi obre un perfil d'una altra (p. ex. un alumne
     que ha acabat primària), se li proposa passar a la seva app amb el mateix usuari (appHandoff).
   · En local i a les previsualitzacions no hi ha adreça pròpia: mana el perfil, i per provar-ne una: ?v=pro · ?v=ment · ?v=mates */
const VARIANTS = {
  // primària: nivells 1–6
  mates: { id: 'mates', name: 'Numi Mates', logo: 'img/brand/logo-horitzontal.svg', theme: '#602B7A', courses: [0, 1, 2, 3, 4, 5], chat: false,
    apple: 'apple-touch-icon.png', manifest: 'manifest.webmanifest', url: 'https://app.numimates.com',
    tag: 'Matemàtiques de primària|Matemáticas de primaria' },
  // ESO: nivells 7–10 (1r a 4t d'ESO) i el 6 com a repàs
  pro: { id: 'pro', name: 'Numi Pro', logo: 'img/brand/logo-pro-negatiu.svg', theme: '#14111F', courses: [5, 6, 7, 8, 9], chat: true,
    apple: 'img/brand/apple-touch-icon-pro.png', manifest: 'manifest-pro.webmanifest', url: 'https://pro.numimates.com',
    tag: "Matemàtiques d'ESO|Matemáticas de ESO" },
  ment: { id: 'ment', name: 'Numi Ment', logo: 'img/brand/logo-ment.svg', theme: '#177E6E', courses: [], chat: true,
    apple: 'img/brand/apple-touch-icon-ment.png', manifest: 'manifest-ment.webmanifest', url: 'https://ment.numimates.com',
    tag: 'Entrena la ment cada dia|Entrena la mente cada día' },
  // programació, robòtica i projectes digitals (pantalles pròpies: tech.js)
  tech: { id: 'tech', name: 'Numi Tech', logo: 'img/brand/logo-tech.svg', theme: '#1B2B6B', courses: [], chat: true,
    apple: 'img/brand/apple-touch-icon-tech.png', manifest: 'manifest-tech.webmanifest', url: 'https://tech.numimates.com',
    tag: 'Programació i robòtica|Programación y robótica' }
};
const ESO_FROM = 6, ESO_AGE = 12;   // índex del nivell 7 (1r d'ESO) i edat a partir de la qual es va a Numi Pro
// l'app que toca per l'adreça (null en local i previsualitzacions)
const HOST_VAR = (() => {
  const h = location.hostname;
  // en local es pot simular l'adreça d'una app: ?host=pro · ?host=ment · ?host=mates · ?host=cap
  if (/^(localhost|127\.0\.0\.1)$/.test(h)) { try { const t = new URLSearchParams(location.search).get('host'); if (t) t === 'cap' ? sessionStorage.removeItem('numi_host') : sessionStorage.setItem('numi_host', t); return VARIANTS[sessionStorage.getItem('numi_host')] ? sessionStorage.getItem('numi_host') : null; } catch (e) { return null; } }
  return h === 'pro.numimates.com' ? 'pro' : h === 'ment.numimates.com' ? 'ment' : h === 'tech.numimates.com' ? 'tech' : /^(app\.)?numimates\.com$/.test(h) ? 'mates' : null; })();
const VAR_TEST = HOST_VAR ? null : (() => {
  try {
    const q = new URLSearchParams(location.search).get('v');
    if (q && VARIANTS[q]) q === 'mates' ? localStorage.removeItem('numi_v') : localStorage.setItem('numi_v', q);
    return VARIANTS[localStorage.getItem('numi_v')] ? localStorage.getItem('numi_v') : null;
  } catch (e) { return null; }
})();
let VAR = VARIANTS.mates, IS_PRO = false, IS_MENT = false, IS_TECH = false;
// l'app «natural» d'un perfil: Ment si s'hi va donar d'alta; Pro si és d'ESO o ja hi ha arribat; si no, Mates
const natOf = p => !p ? 'mates' : p.variant === 'ment' ? 'ment' : p.variant === 'tech' ? 'tech' : (p.variant === 'pro' || (p.maxCourse ?? p.course ?? 0) >= ESO_FROM) ? 'pro' : 'mates';
const varOf = p => HOST_VAR || VAR_TEST || natOf(p);
// un compte pot tenir apps addicionals (state.apps, les dona l'administrador al panell): també hi pot entrar
const appMismatch = p => !!(HOST_VAR && p && p.id !== 'tmp' && natOf(p) !== HOST_VAR && !(Array.isArray(p.apps) && p.apps.includes(HOST_VAR))
  && !(HOST_VAR === 'tech' && p.classe && p.classe.opts && ['tech', 'both'].includes(p.classe.opts.app)));   // un grup amb Numi Tech també hi dona accés
function setVariant(id) {
  const o = VARIANTS[HOST_VAR || VAR_TEST || id] || VARIANTS.mates;
  if (o === VAR && document.documentElement.dataset.v === o.id) return false;
  VAR = o; IS_PRO = o.id === 'pro'; IS_MENT = o.id === 'ment'; IS_TECH = o.id === 'tech';
  document.documentElement.dataset.v = o.id;
  // aspecte propi (Numi Pro: fosc, generat de style.css amb scripts/theme-pro.py; Numi Ment: ment.css); una sola vegada
  if (IS_PRO && !document.getElementById('th-pro')) ['theme-pro.css', 'theme-pro-extra.css'].forEach((f, i) => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = f; if (!i) l.id = 'th-pro'; document.head.appendChild(l); });
  if (IS_MENT && !document.getElementById('th-ment')) { ['SchibstedGrotesk'].forEach(f => { const l = document.createElement('link'); l.rel = 'preload'; l.as = 'font'; l.type = 'font/woff2'; l.crossOrigin = 'anonymous'; l.href = `fonts/${f}-normal-latin.woff2`; document.head.appendChild(l); }); const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'ment.css'; l.id = 'th-ment'; document.head.appendChild(l); }
  if (IS_TECH) for (const n of ['tech', 'tech-robo', 'tech-stage', 'tech-web', 'tech-dig', 'tech-model']) if (!document.getElementById('th-' + n)) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = n + '.css'; l.id = 'th-' + n; document.head.appendChild(l); }
  // nom, color, icona i manifest de l'app (per instal·lar-la al mòbil amb el seu nom i la seva icona)
  document.title = `${o.name} · ${typeof tx === 'function' ? tx(o.tag) : o.tag.split('|')[0]}`;
  const set = (sel, attr, v) => { const e = document.querySelector(sel); if (e) e.setAttribute(attr, v); };
  set('meta[name=theme-color]', 'content', o.theme); set('meta[name=apple-mobile-web-app-title]', 'content', o.name);
  set('link[rel=manifest]', 'href', o.manifest); set('link[rel=apple-touch-icon]', 'href', o.apple);
  if (typeof xatSync === 'function') xatSync();
  return true;
}
setVariant(varOf(null));

const appLogo = id => id === 'pro' ? 'img/brand/logo-pro.svg' : id === 'ment' ? 'img/brand/logo-ment.svg' : id === 'tech' ? 'img/brand/logo-tech.svg' : 'img/brand/logo-horitzontal.svg';
// un perfil d'una altra app: li proposem obrir la seva, on entra amb el mateix usuari o codi
function appHandoff() {
  VIEW = 'handoff';
  const t = VARIANTS[natOf(P)], ja = t.id === 'pro' && P.variant !== 'pro';
  app.innerHTML = `<div class="scr varsplash handoff"><img class="onb-logo" src="${appLogo(t.id)}" alt="${t.name}">
    <h1>${ja ? L("Ja ets a l'ESO! 🎉", '¡Ya estás en la ESO! 🎉') : L(`El teu compte és de ${t.name}`, `Tu cuenta es de ${t.name}`)}</h1>
    <p class="sub">${ja ? L(`Les mates d'ESO tenen la seva pròpia app, <b>${t.name}</b>. Hi continues amb tot el teu progrés.`, `Las mates de ESO tienen su propia app, <b>${t.name}</b>. Sigues allí con todo tu progreso.`) : L(`Obre <b>${t.name}</b> per continuar amb tot el teu progrés.`, `Abre <b>${t.name}</b> para continuar con todo tu progreso.`)}</p>
    ${P.username ? `<div class="codecard big"><div><small>${L('Hi entres amb el teu usuari', 'Entras con tu usuario')}</small><b>${esc(P.username)}</b></div></div>` : P.code ? `<div class="codecard big"><div><small>${L('Hi entres amb el teu codi', 'Entras con tu código')}</small><b>${P.code}</b></div></div>` : ''}
    <a class="btn big" href="${t.url}">${L('OBRE', 'ABRE')} ${t.name.toUpperCase()}</a>
    <button class="link" onclick="renderProfiles()">${L("Canvia d'usuari", 'Cambiar de usuario')}</button></div>`;
}
// a l'alta tria una etapa que és d'una altra app
function stageHandoff(id) {
  const t = VARIANTS[id];
  app.innerHTML = `<div class="scr varsplash handoff"><img class="onb-logo" src="${appLogo(id)}" alt="${t.name}">
    <h1>${id === 'tech' ? L('Per programar tenim Numi Tech', 'Para programar tenemos Numi Tech') : id === 'pro' ? L("Per a l'ESO tenim Numi Pro", 'Para la ESO tenemos Numi Pro') : id === 'ment' ? L('Per a adults tenim Numi Ment', 'Para adultos tenemos Numi Ment') : L('Per a primària tenim Numi Mates', 'Para primaria tenemos Numi Mates')}</h1>
    <p class="sub">${id === 'tech' ? L('Programació, robòtica i projectes digitals, amb sessions com una classe.', 'Programación, robótica y proyectos digitales, con sesiones como una clase.') : id === 'pro' ? L("El temari d'institut, preparació d'exàmens i en Numi com a assistent.", 'El temario del instituto, preparación de exámenes y Numi como asistente.') : id === 'ment' ? L('Deu minuts al dia de jocs per mantenir la ment activa.', 'Diez minutos al día de juegos para mantener la mente activa.') : L('Les mates de 1r a 6è, pas a pas i jugant.', 'Las mates de 1.º a 6.º, paso a paso y jugando.')}</p>
    <a class="btn big" href="${t.url}">${L('OBRE', 'ABRE')} ${t.name.toUpperCase()}</a>
    <button class="link" onclick="ONB.stage=null;ONB.variant=null;onb(1)">${L('Tornar', 'Volver')}</button></div>`;
}
