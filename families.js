/* Zona de famílies de Numi Mates (app.numimates.com/families)
   L'adult entra amb un enllaç que rep per correu, afegeix els fills amb el seu codi (i en dona l'autorització)
   i en veu el progrés: ratxa, lliçons, encerts, dies actius, portes del Cavaller i sentits matemàtics.
   També hi pot activar o cancel·lar Premium. Les dades surten de /api/account?f=… (api/_familia.js). */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { } } };
const sess = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) { } } };
let LANG = (() => { const q = new URLSearchParams(location.search).get('l'); if (q === 'ca' || q === 'es') return q; return store.get('numi-fam-lang') || (/^es/.test(navigator.language || '') ? 'es' : 'ca'); })();
const L = (ca, es) => LANG === 'es' ? es : ca, tx = s => String(s || '').split('|')[LANG === 'es' ? 1 : 0] || String(s || '').split('|')[0];
let TOK = store.get('numi-fam'), D = null, VIEW = 'home', KID = null, PAY_OK;

const api = (f, data) => fetch('/api/account?f=' + f, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, tok: TOK, lang: LANG }) })
  .then(r => r.json().then(j => ({ status: r.status, ...j }))).catch(() => ({ status: 0, error: 'xarxa' }));
const ERR = s => s === 429 ? L("Massa intents seguits. Espera una estona i torna-ho a provar.", 'Demasiados intentos seguidos. Espera un rato y vuelve a intentarlo.') : L("No s'ha pogut fer. Comprova la connexió i torna-ho a provar.", 'No se ha podido hacer. Comprueba la conexión y vuelve a intentarlo.');
function toast(t) { const d = document.createElement('div'); d.className = 'toast'; d.innerHTML = t; document.body.appendChild(d); setTimeout(() => d.remove(), 3600); }
function modal(html) { closeModal(); document.body.insertAdjacentHTML('beforeend', `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal" role="dialog" aria-modal="true"><button class="mx" onclick="closeModal()" aria-label="${L('Tanca', 'Cierra')}">×</button>${html}</div></div>`); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() { const m = $('.modal-bg'); if (m) m.remove(); }
function setLang(l) { LANG = l; store.set('numi-fam-lang', l); document.documentElement.lang = l; render(); }

/* ---------- dates i textos ---------- */
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const TODAY = iso(new Date());
const daysAgo = d => d ? Math.round((new Date(TODAY + 'T12:00') - new Date(String(d).slice(0, 10) + 'T12:00')) / 864e5) : null;
const ago = d => { const n = daysAgo(d); return n == null ? L('encara no ha començat', 'aún no ha empezado') : n <= 0 ? L('avui', 'hoy') : n === 1 ? L('ahir', 'ayer') : L(`fa ${n} dies`, `hace ${n} días`); };
const dayLong = d => new Date(String(d).slice(0, 10) + 'T12:00').toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long' });
const COURSE = ['1r de primària|1.º de primaria', '2n de primària|2.º de primaria', '3r de primària|3.º de primaria', '4t de primària|4.º de primaria', '5è de primària|5.º de primaria', '6è de primària|6.º de primaria', "1r d'ESO|1.º de ESO", "2n d'ESO|2.º de ESO", "3r d'ESO|3.º de ESO", "4t d'ESO|4.º de ESO"];
const WD = { ca: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'], es: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'] };
const img = n => `img/ic/${n}.webp`;
const av = k => `img/chars/${/^[a-z]+$/.test(k.companion) ? k.companion : 'numi'}-happy.webp`;

/* ---------- el que es calcula de cada alumne (mateixos criteris que el panell del docent) ---------- */
const SENT = { num: 'Nombres|Números', mes: 'Mesura|Medida', esp: 'Espai|Espacio', alg: 'Àlgebra i codi|Álgebra y código', est: 'Dades i atzar|Datos y azar' };
function skillSent(sk) {
  const n = sk.split(':')[0];
  if (/^v\.(balance|pattern|maze)$/.test(n)) return 'alg';
  if (n === 'v.frac') return 'num';
  if (/^v\./.test(n)) return 'esp';
  if (/^(me\.clock|me\.units|me\.money|me\.perim|g\.clock|g\.coins|g\.ruler|geo\.area|me\.cal|me\.time|me\.smd)$/.test(n)) return 'mes';
  if (/^(me\.shape|g\.shape|geo\.angle|vol|e\.|geo\.pyth|geo\.thales|trig|geo\.tri|geo\.quad|geo\.lines|geo\.poly)/.test(n)) return 'esp';
  if (/^(geo\.circle|geo\.vol2)$/.test(n)) return 'mes';
  if (/^(l\.|g\.seq|pc\.|g\.repeat|alg\.|fn\.|seq\.)/.test(n)) return 'alg';
  if (/^(stat|at\.|prob2)/.test(n)) return 'est';
  return 'num';
}
function sents(k) {
  const s = {}; Object.keys(SENT).forEach(x => s[x] = { c: 0, t: 0 });
  Object.entries(k.sk || {}).forEach(([key, v]) => { if (['sprint', 'flash', 'chain'].includes(key) || !Array.isArray(v)) return; const o = s[skillSent(key)]; o.c += +v[0] || 0; o.t += +v[1] || 0; });
  Object.values(s).forEach(o => o.pct = o.t ? Math.round(100 * o.c / o.t) : null);
  return s;
}
function curUnit(k) {
  const pre = 'c' + ((k.course | 0) + 1) + '-', ids = Object.keys(UNIT_T).filter(id => id.startsWith(pre)).sort((a, b) => a.split('-')[1] - b.split('-')[1]);
  if (!ids.length) return null;
  const st = id => (k.prog[id] && Array.isArray(k.prog[id].stars)) ? k.prog[id].stars : null;
  const done = id => { const s = st(id); return !!(s && s[s.length - 1] >= 2); };
  const id = ids.find(i => !done(i) && st(i) && st(i).some(x => x > 0)) || ids.find(i => !done(i)) || ids[ids.length - 1];
  const s = st(id) || [];
  return { id, n: id.split('-')[1], t: tx(UNIT_T[id]), pct: s.length ? Math.round(100 * s.filter(x => x > 0).length / s.length) : 0 };
}
const week = k => { const set = new Set(k.days || []); return Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return { on: set.has(iso(d)), wd: WD[LANG][d.getDay()], today: i === 6 }; }); };
const acc = k => k.answers ? Math.round(100 * k.correct / k.answers) + ' %' : '—';
// idees per ajudar a casa, segons el sentit on més li costa (o el numèric si encara hi ha poques dades)
const TIPS = {
  num: ["Al supermercat, demaneu-li que calculi quant costaran dues coses juntes abans d'arribar a la caixa.|En el súper, pedidle que calcule cuánto costarán dos cosas juntas antes de llegar a la caja.", "Jugueu a endevinar números: un pensa un número i l'altre el troba fent preguntes de «més gran o més petit».|Jugad a adivinar números: uno piensa un número y el otro lo encuentra con preguntas de «mayor o menor»."],
  mes: ["Quan cuineu, deixeu-li mesurar els ingredients: grams, litres i mitges tasses.|Cuando cocinéis, dejadle medir los ingredientes: gramos, litros y medias tazas.", "Pregunteu-li quant falta per a una hora concreta: «si ara són les 5 i quart, quant queda per a les 6?».|Preguntadle cuánto falta para una hora concreta: «si ahora son las 5 y cuarto, ¿cuánto queda para las 6?»."],
  esp: ["Busqueu formes pel carrer: quants triangles, rectangles o cercles trobeu de camí a l'escola?|Buscad formas por la calle: ¿cuántos triángulos, rectángulos o círculos encontráis camino del cole?", "Feu-li explicar un camí amb girs: «dues a la dreta, una endavant…». És geometria de veritat.|Pedidle que explique un camino con giros: «dos a la derecha, una adelante…». Es geometría de verdad."],
  alg: ["Proposeu-li sèries: 2, 4, 8… quin ve després? Que en faci una per a vosaltres.|Proponedle series: 2, 4, 8… ¿cuál sigue? Que invente una para vosotros.", "Amagueu un número en una suma («quant he de sumar a 7 per fer 12?»): és la primera equació.|Esconded un número en una suma («¿cuánto tengo que sumar a 7 para hacer 12?»): es la primera ecuación."],
  est: ["Feu un petit recompte a casa (fruites, colors de cotxes…) i mireu junts quin surt més.|Haced un pequeño recuento en casa (frutas, colores de coches…) y mirad juntos cuál sale más.", "Amb un dau, pregunteu-li què és més fàcil que surti: un 6 o un número parell.|Con un dado, preguntadle qué es más fácil que salga: un 6 o un número par."]
};

/* ---------- vistes ---------- */
function render() {
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === LANG));
  $('#who').textContent = D && TOK ? D.email : L('Famílies', 'Familias');
  const app = $('#app');
  if (!TOK || !D) return app.innerHTML = VIEW === 'sent' ? vSent() : vEntry();
  if (VIEW === 'kid' && D.kids.some(k => k.code === KID)) return app.innerHTML = vKid(D.kids.find(k => k.code === KID)) + foot();
  if (VIEW === 'add' || !D.kids.length) return app.innerHTML = vAdd() + foot();
  app.innerHTML = vHome() + foot();
}
const foot = () => `<div class="foot">${TOK ? `<button class="link" onclick="logout()">${L('Tanca la sessió', 'Cerrar sesión')}</button>` : ''}<a href="https://numimates.com/privacitat?l=${LANG}" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a><a href="https://numimates.com/condicions?l=${LANG}" target="_blank" rel="noopener">${L('Condicions', 'Condiciones')}</a></div>`;
const consentBox = id => `<label class="ok"><input type="checkbox" id="${id}" onchange="formOk()"> <span>${L("Sóc el pare, la mare o el tutor legal i autoritzo que faci servir Numi Mates (cal si té menys de 14 anys).", 'Soy el padre, la madre o el tutor legal y autorizo que use Numi Mates (hace falta si tiene menos de 14 años).')} <a href="https://numimates.com/privacitat?l=${LANG}" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a></span></label>`;
let ENTRY = 'new';
function vEntry() {
  if (ENTRY === 'mail') return `<h1>${L('Entra a la zona de famílies', 'Entra en la zona de familias')}</h1><p class="sub">${L("Escriu el correu amb què vas entrar i t'hi enviarem un enllaç.", 'Escribe el correo con el que entraste y te enviaremos un enlace.')}</p>
    <div class="card"><label class="field"><span>${L('El teu correu', 'Tu correo')}</span><input id="fm" type="email" autocomplete="email" inputmode="email" oninput="formOk()"></label>
    <p class="err" id="fe"></p><button class="btn" id="fg" disabled onclick="sendLink()">${L("ENVIA'M L'ENLLAÇ", 'ENVÍAME EL ENLACE')}</button></div>
    <p class="note"><button class="link" onclick="ENTRY='new';render()">${L('És la primera vegada? Afegeix el teu fill o filla', '¿Es la primera vez? Añade a tu hijo o hija')}</button></p>${foot()}`;
  return `<h1>${L('Segueix com avança a mates', 'Sigue cómo avanza en mates')}</h1>
    <p class="sub">${L("Afegeix el perfil del teu fill o filla amb el codi que surt a l'app (Perfil → El meu compte).", 'Añade el perfil de tu hijo o hija con el código que sale en la app (Perfil → Mi cuenta).')}</p>
    <div class="card"><label class="field"><span>${L("Codi o usuari de l'alumne", 'Código o usuario del alumno')}</span><input id="fc" class="code" autocomplete="off" autocapitalize="characters" spellcheck="false" oninput="formOk()"></label>
      <label class="field"><span>${L('El teu correu', 'Tu correo')}</span><input id="fm" type="email" autocomplete="email" inputmode="email" oninput="formOk()"></label>
      ${consentBox('fk')}<p class="err" id="fe"></p>
      <button class="btn" id="fg" disabled onclick="sendLink()">${L('AFEGEIX', 'AÑADIR')}</button></div>
    <p class="note">${L("T'enviarem un enllaç per entrar, sense contrasenya. Només veuràs el progrés: no pots canviar res del seu compte.", 'Te enviaremos un enlace para entrar, sin contraseña. Solo verás el progreso: no puedes cambiar nada de su cuenta.')}<br><br><button class="link" onclick="ENTRY='mail';render()">${L('Ja hi havia entrat: envia-me un enllaç', 'Ya había entrado: envíame un enlace')}</button></p>${foot()}`;
}
function formOk() {
  const m = $('#fm'), c = $('#fc'), k = $('#fk'), g = $('#fg') || $('#ag'), mailOk = !m || /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(m.value.trim());
  if (g) g.disabled = !(mailOk && (!c || c.value.trim().length >= 4) && (!k || k.checked));
}
let SENT_TO = '', DEV = '';
async function sendLink() {
  const g = $('#fg'), e = $('#fe'), email = $('#fm').value.trim(), code = $('#fc') ? $('#fc').value.trim() : '';
  g.disabled = true; e.textContent = '';
  const r = await api('link', code ? { email, code, consent: true } : { email });
  if (r.ok) { SENT_TO = email; DEV = r.dev || ''; VIEW = 'sent'; return render(); }
  g.disabled = false;
  e.textContent = r.error === 'no trobat' ? L("No trobem aquest codi. El trobareu a l'app: Perfil → El meu compte.", 'No encontramos este código. Lo encontraréis en la app: Perfil → Mi cuenta.')
    : r.error === 'correu' ? L('Revisa el correu: no sembla correcte.', 'Revisa el correo: no parece correcto.')
    : r.error === 'correu-off' ? L("Encara estem preparant l'enviament de correus. Torna-ho a provar d'aquí a uns dies.", 'Todavía estamos preparando el envío de correos. Vuelve a intentarlo en unos días.')
    : ERR(r.status);
}
const vSent = () => `<div class="card done"><img src="${img('envelope')}" alt=""><h1>${L('Mira el correu', 'Mira tu correo')}</h1>
  <p class="sub">${L(`Si hi ha un compte per a <b>${esc(SENT_TO)}</b>, t'hi hem enviat un enllaç per entrar. Caduca d'aquí a 30 minuts.`, `Si hay una cuenta para <b>${esc(SENT_TO)}</b>, te hemos enviado un enlace para entrar. Caduca en 30 minutos.`)}</p>
  ${DEV ? `<a class="btn gold" href="${esc(DEV)}" >${L('ENTRA (ENLLAÇ DE PROVA)', 'ENTRAR (ENLACE DE PRUEBA)')}</a>` : ''}
  <button class="btn ghost" onclick="VIEW='home';render()">${L('TORNA', 'VOLVER')}</button></div>${foot()}`;

function kidCard(k) {
  const u = curUnit(k), w = week(k);
  return `<div class="card tap" onclick="openKid('${esc(k.code)}')" role="button" tabindex="0">
    <div class="kid"><img class="av" src="${av(k)}" alt=""><div><b>${esc(k.name)} ${pill(k)}</b><small>${tx(COURSE[k.course] || '')} · ${k.last_day ? L('última vegada', 'última vez') + ' ' + ago(k.last_day) : L('encara no ha començat', 'aún no ha empezado')}</small></div></div>
    <div class="row3"><div class="stat"><img src="${img('fire')}" alt=""><b>${k.streak}</b><span>${L('dies seguits', 'días seguidos')}</span></div><div class="stat"><img src="${img('books')}" alt=""><b>${k.lessons}</b><span>${L('lliçons fetes', 'lecciones hechas')}</span></div><div class="stat"><img src="${img('target')}" alt=""><b>${acc(k)}</b><span>${L("d'encerts", 'de aciertos')}</span></div></div>
    <div class="week">${w.map(d => `<i class="${d.on ? 'on' : ''} ${d.today ? 'today' : ''}" title="${d.wd}"></i>`).join('')}</div><div class="wd">${w.map(d => `<span>${d.wd}</span>`).join('')}</div>
    ${u ? `<div class="unit"><span>${L('Unitat', 'Unidad')} ${u.n} · ${esc(u.t)}</span><div class="bar"><i style="width:${u.pct}%"></i></div></div>` : ''}
    <div class="more">${L('Veure el detall', 'Ver el detalle')} ›</div></div>`;
}
const pill = k => `<span class="pill ${k.pla}">${k.pla === 'premium' ? 'PREMIUM' : k.pla === 'escola' ? L('ESCOLA', 'ESCUELA') : L('GRATUÏT', 'GRATUITO')}</span>`;
const vHome = () => `<h1>${L('Hola!', '¡Hola!')}</h1>${D.kids.map(kidCard).join('')}<button class="add" onclick="VIEW='add';render()">+ ${L('Afegeix un altre fill o filla', 'Añade otro hijo o hija')}</button>`;
const vAdd = () => `${D.kids.length ? `<button class="back" onclick="VIEW='home';render()">‹ ${L('Tornar', 'Volver')}</button>` : ''}<h1>${D.kids.length ? L('Afegeix un altre fill o filla', 'Añade otro hijo o hija') : L('Afegeix el teu fill o filla', 'Añade a tu hijo o hija')}</h1>
  <p class="sub">${L("Amb el codi que surt a l'app (Perfil → El meu compte).", 'Con el código que sale en la app (Perfil → Mi cuenta).')}</p>
  <div class="card"><label class="field"><span>${L("Codi o usuari de l'alumne", 'Código o usuario del alumno')}</span><input id="fc" class="code" autocomplete="off" autocapitalize="characters" spellcheck="false" oninput="formOk()"></label>
  ${consentBox('fk')}<p class="err" id="fe"></p><button class="btn" id="ag" disabled onclick="addKid()">${L('AFEGEIX', 'AÑADIR')}</button></div>`;
async function addKid() {
  const g = $('#ag'), e = $('#fe'); g.disabled = true; e.textContent = '';
  const r = await api('add', { code: $('#fc').value.trim(), consent: true });
  if (r.kids) { D = r; VIEW = 'home'; render(); return toast(L('Perfil afegit.', 'Perfil añadido.')); }
  g.disabled = false; e.textContent = r.error === 'no trobat' ? L("No trobem aquest codi. El trobareu a l'app: Perfil → El meu compte.", 'No encontramos este código. Lo encontraréis en la app: Perfil → Mi cuenta.') : ERR(r.status);
}

function vKid(k) {
  const s = sents(k), w = week(k), active = w.filter(d => d.on).length;
  const ex = Object.entries(k.exams || {}).map(([uid, x]) => ({ uid, ...x })).filter(x => UNIT_T[x.uid]).sort((a, b) => String(b.d || '').localeCompare(String(a.d || ''))).slice(0, 5);
  const withData = Object.entries(s).filter(([, o]) => o.t >= 20), weak = withData.sort((a, b) => a[1].pct - b[1].pct)[0], tk = weak ? weak[0] : 'num';
  const tips = TIPS[tk], tip = tx(tips[new Date().getDate() % tips.length]);
  return `<button class="back" onclick="VIEW='home';render()">‹ ${L('Tornar', 'Volver')}</button>
    <div class="kid" style="margin:8px 0 4px"><img class="av" src="${av(k)}" alt=""><div><b>${esc(k.name)} ${pill(k)}</b><small>${tx(COURSE[k.course] || '')} · ${L(`${active} dies de 7 aquesta setmana`, `${active} días de 7 esta semana`)}</small></div></div>
    <h2>${L('Portes del Cavaller', 'Puertas del Caballero')}</h2>
    <div class="card doors">${ex.length ? ex.map(x => { const pass = (x.best || 0) >= 75, n = Math.round((x.best || 0) * 12 / 100); return `<div class="door"><span>${L('Unitat', 'Unidad')} ${x.uid.split('-')[1]} · ${esc(tx(UNIT_T[x.uid]))}</span><b class="sc ${pass ? 'g' : 'r'}">${n}/12${pass ? '' : ' · ' + L('la tornarà a fer', 'la repetirá')}</b></div>`; }).join('')
      : `<p class="empty">${L("Encara no ha arribat a cap porta. La porta és la prova del final de cada unitat: 12 preguntes, i cal encertar-ne 9.", 'Aún no ha llegado a ninguna puerta. La puerta es la prueba del final de cada unidad: 12 preguntas, y hay que acertar 9.')}</p>`}</div>
    <h2>${L('On va bé i on li costa', 'Dónde va bien y dónde le cuesta')}</h2>
    <div class="card sent">${Object.entries(s).map(([key, o]) => `<div>${tx(SENT[key])}${o.t >= 20 ? `<span class="bar"><i class="${o.pct >= 80 ? '' : o.pct >= 60 ? 'warn' : 'crit'}" style="width:${o.pct}%"></i></span><b>${o.pct} %</b>` : `<span class="bar"></span><span class="few">${L('poques dades', 'pocos datos')}</span>`}</div>`).join('')}</div>
    <div class="tip"><img src="img/chars/guida-happy.webp" alt=""><p><b>${L('A casa:', 'En casa:')}</b> ${esc(tip)}</p></div>
    ${planBox(k)}
    <p class="note"><button class="link" onclick="removeKid('${esc(k.code)}')">${L('Treu aquest perfil de la zona de famílies', 'Quitar este perfil de la zona de familias')}</button></p>`;
}
function planBox(k) {
  const S = k.sub;
  if (k.pla === 'escola') return `<div class="card plan"><span>${L("Pla d'escola", 'Plan de escuela')}<small>${k.grup ? esc(k.grup) + ' · ' : ''}${L('Premium inclòs', 'Premium incluido')}</small></span></div>`;
  if (k.pla === 'premium' && S) return `<div class="card plan"><span>${S.periode === 'any' ? L('Premium anual', 'Premium anual') : L('Premium mensual', 'Premium mensual')}<small>${S.cancel ? L(`Cancel·lada: Premium fins al ${dayLong(S.renova)}`, `Cancelada: Premium hasta el ${dayLong(S.renova)}`) : S.pendent ? L('No s\'ha pogut cobrar la renovació: revisa la targeta', 'No se ha podido cobrar la renovación: revisa la tarjeta') : L(`Es renova el ${dayLong(S.renova)}`, `Se renueva el ${dayLong(S.renova)}`)}</small></span>
    ${S.cancel ? `<button class="btn gold sm" onclick="subDo('${esc(k.code)}',true)">${L('REACTIVA', 'REACTIVAR')}</button>` : `<button class="btn ghost sm redt" onclick="subCancel('${esc(k.code)}',1)">${L('CANCEL·LA', 'CANCELAR')}</button>`}</div>`;
  if (k.pla === 'premium') return `<div class="card plan"><span>Premium<small>${L("Activat per l'equip de Numi Mates", 'Activado por el equipo de Numi Mates')}</small></span></div>`;
  return `<div class="card"><div class="plan"><span>${L('Pla gratuït', 'Plan gratuito')}<small>${L('1 lliçó nova al dia', '1 lección nueva al día')}</small></span></div>
    <p class="sub" style="margin:10px 0 0">${L('Amb Premium: lliçons sense límit, batalles de mates i la ruta de temporada.', 'Con Premium: lecciones sin límite, batallas de mates y la ruta de temporada.')}</p>
    <div id="plans-${esc(k.code)}">${PAY_OK === false ? payOff() : plansHtml(k)}</div></div>`;
}
const plansHtml = k => `<div class="plans"><button onclick="buy('${esc(k.code)}','mes')"><b>${L('Mensual', 'Mensual')}</b><span>4,99 €</span><small>${L('al mes', 'al mes')}</small></button><button class="best" onclick="buy('${esc(k.code)}','any')"><i>${L('Estalvia un 18 %', 'Ahorra un 18 %')}</i><b>${L('Anual', 'Anual')}</b><span>49 €</span><small>${L("a l'any", 'al año')}</small></button></div><p class="note" style="margin-top:6px">${L('IVA inclòs · Es cancel·la quan vulgueu', 'IVA incluido · Se cancela cuando queráis')}</p>`;
const payOff = () => `<p class="note">${L('Aviat es podrà activar des d\'aquí. Mentrestant, escriviu-nos a <b>hola@numimates.com</b>.', 'Pronto se podrá activar desde aquí. Mientras tanto, escribidnos a <b>hola@numimates.com</b>.')}</p>`;
function openKid(code) { KID = code; VIEW = 'kid'; render(); window.scrollTo(0, 0); payCheck(); }

/* ---------- Premium ---------- */
const payTest = () => sess.get('numi-prova-pagament') === '1';
async function payCheck() {
  if (PAY_OK === undefined) { try { const r = await fetch('/api/pay?a=info'); const j = r.status === 503 ? {} : await r.json(); PAY_OK = !!j.mes && (j.mode === 'live' || payTest()); } catch (e) { return; } }
  if (PAY_OK === false) document.querySelectorAll('[id^="plans-"]').forEach(d => d.innerHTML = payOff());
}
function buy(code, pla) {
  const k = D.kids.find(x => x.code === code); if (!k) return;
  modal(`<h3>Numi Mates Premium</h3><p>${esc(k.name)} · ${pla === 'any' ? L("Anual · 49 € a l'any", 'Anual · 49 € al año') : L('Mensual · 4,99 € al mes', 'Mensual · 4,99 € al mes')}</p>
    <p style="font-size:13.5px">${L("Es paga amb targeta a la pàgina segura de Stripe. Es renova sol i es cancel·la quan vulgueu.", 'Se paga con tarjeta en la página segura de Stripe. Se renueva solo y se cancela cuando queráis.')}</p>
    <label class="ok" style="text-align:left"><input type="checkbox" onchange="$('#bg').disabled=!this.checked"> <span>${L('Accepto les', 'Acepto las')} <a href="https://numimates.com/condicions?l=${LANG}" target="_blank" rel="noopener">${L('condicions de contractació', 'condiciones de contratación')}</a>.</span></label>
    <p class="err" id="be"></p><button class="btn gold" id="bg" disabled onclick="payGo('${esc(code)}','${pla === 'any' ? 'any' : 'mes'}')">${L('CONTINUA AL PAGAMENT', 'CONTINUAR AL PAGO')}</button><button class="btn ghost" onclick="closeModal()">${L('ARA NO', 'AHORA NO')}</button>`);
}
async function payGo(code, pla) {
  const b = $('#bg'), e = $('#be'); b.disabled = true; e.textContent = '';
  try {
    const r = await fetch('/api/pay?a=checkout', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code, pla, lang: LANG, prova: payTest(), ret: 'families' }) }).then(x => x.json().then(j => ({ status: x.status, ...j })));
    if (r.url && /^https:\/\/checkout\.stripe\.com\//.test(r.url)) { sess.set('numi-fam-pay', code); location.href = r.url; return; }
    e.textContent = r.error === 'escola' ? L("Aquest perfil és d'una classe: ja té Premium amb l'escola.", 'Este perfil es de una clase: ya tiene Premium con la escuela.') : r.error === 'ja' ? L('Aquest perfil ja té Premium.', 'Este perfil ya tiene Premium.') : r.status === 503 ? L('Encara no es pot pagar des d\'aquí. Escriviu-nos a hola@numimates.com.', 'Todavía no se puede pagar desde aquí. Escribidnos a hola@numimates.com.') : ERR(r.status);
  } catch (x) { e.textContent = ERR(); }
  b.disabled = false;
}
// cancel·lar: doble confirmació (què passarà → confirmació final). Es cancel·la a Stripe al final del període pagat.
function subCancel(code, step) {
  const k = D.kids.find(x => x.code === code); if (!k || !k.sub) return;
  if (step === 1) return modal(`<h3>${L('Voleu cancel·lar Premium?', '¿Queréis cancelar Premium?')}</h3><p>${L(`No es cobrarà cap més quota. ${esc(k.name)} té Premium fins al <b>${dayLong(k.sub.renova)}</b> i després passa al pla gratuït sense perdre cap progrés.`, `No se cobrará ninguna cuota más. ${esc(k.name)} tiene Premium hasta el <b>${dayLong(k.sub.renova)}</b> y después pasa al plan gratuito sin perder ningún progreso.`)}</p>
    <button class="btn" onclick="closeModal()">${L('NO, EL MANTENIM', 'NO, LO MANTENEMOS')}</button><button class="btn ghost redt" onclick="subCancel('${esc(code)}',2)">${L('SÍ, VULL CANCEL·LAR', 'SÍ, QUIERO CANCELAR')}</button>`);
  modal(`<h3>${L('Confirma la cancel·lació', 'Confirma la cancelación')}</h3><p>Numi Mates Premium · <b>${esc(k.name)}</b></p><p class="err" id="se"></p>
    <button class="btn red" id="sg" onclick="subDo('${esc(code)}',false)">${L('CANCEL·LA LA SUBSCRIPCIÓ', 'CANCELAR LA SUSCRIPCIÓN')}</button><button class="btn ghost" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button>`);
}
async function subDo(code, resume) {
  const b = $('#sg'); if (b) b.disabled = true;
  const r = await fetch('/api/pay?a=' + (resume ? 'resume' : 'cancel'), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code }) }).then(x => x.json().then(j => ({ status: x.status, ...j }))).catch(() => ({ status: 0 }));
  if (r.ok) { closeModal(); await refresh(); return toast(resume ? L('Subscripció reactivada.', 'Suscripción reactivada.') : L("Cancel·lada a Stripe: no es farà cap més cobrament.", 'Cancelada en Stripe: no se hará ningún cobro más.')); }
  const m = r.status === 502 ? L("Stripe no ho ha confirmat, així que no s'ha fet. Torna-ho a provar o escriu a hola@numimates.com.", 'Stripe no lo ha confirmado, así que no se ha hecho. Vuelve a intentarlo o escribe a hola@numimates.com.') : ERR(r.status);
  if ($('#se')) $('#se').textContent = m; else toast(m);
  if (b) b.disabled = false;
}
function removeKid(code) {
  const k = D.kids.find(x => x.code === code); if (!k) return;
  modal(`<h3>${L(`Treure ${esc(k.name)}?`, `¿Quitar a ${esc(k.name)}?`)}</h3><p>${L("Deixareu de veure'n el progrés aquí. El seu compte i el progrés no es toquen, i el podreu tornar a afegir amb el codi.", 'Dejaréis de ver su progreso aquí. Su cuenta y su progreso no se tocan, y lo podréis volver a añadir con el código.')}</p>
    <button class="btn red" onclick="removeGo('${esc(code)}')">${L('TREU EL PERFIL', 'QUITAR EL PERFIL')}</button><button class="btn ghost" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button>`);
}
async function removeGo(code) { const r = await api('remove', { code }); closeModal(); if (r.kids) { D = r; VIEW = 'home'; render(); } else toast(ERR(r.status)); }

/* ---------- sessió ---------- */
async function refresh() {
  const r = await api('data', {});
  if (r.status === 401) { logout(true); return; }
  if (r.kids) { D = r; render(); }
}
function logout(quiet) { TOK = null; D = null; store.set('numi-fam', null); VIEW = 'home'; ENTRY = 'mail'; render(); if (!quiet) toast(L('Sessió tancada.', 'Sesión cerrada.')); }
async function boot() {
  const q = new URLSearchParams(location.search);
  if (q.has('provapagament')) sess.set('numi-prova-pagament', '1');
  const pay = q.get('premium');
  if (q.toString()) history.replaceState(null, '', location.pathname + location.hash);
  const t = (location.hash.match(/^#t=([A-Za-z0-9_-]{20,80})$/) || [])[1];
  if (t) {
    history.replaceState(null, '', location.pathname);
    const r = await api('enter', { token: t });
    if (r.tok) { TOK = r.tok; store.set('numi-fam', TOK); }
    else { render(); return toast(L("Aquest enllaç ja no serveix: caduca als 30 minuts i només es pot fer servir una vegada. Demana'n un altre.", 'Este enlace ya no sirve: caduca a los 30 minutos y solo se puede usar una vez. Pide otro.')); }
  }
  if (!TOK) return render();
  $('#app').innerHTML = `<p class="note">${L('Carregant…', 'Cargando…')}</p>`;
  await refresh();
  if (pay === 'cancel') toast(L("Pagament cancel·lat: no s'ha cobrat res.", 'Pago cancelado: no se ha cobrado nada.'));
  if (pay === 'ok') {
    const code = sess.get('numi-fam-pay'); sess.set('numi-fam-pay', null);
    toast(L('Gràcies! Estem activant Premium…', '¡Gracias! Estamos activando Premium…'));
    for (let i = 0; i < 10 && D && code && !(D.kids.find(k => k.code === code) || {}).sub; i++) { await new Promise(r => setTimeout(r, 2500)); await refresh(); }
    if (code && D && (D.kids.find(k => k.code === code) || {}).sub) toast(L('Premium activat!', '¡Premium activado!'));
  }
}
document.documentElement.lang = LANG;
// si la pàgina ja era oberta i s'hi obre un enllaç d'entrada nou (#t=…), també s'ha de fer servir
addEventListener('hashchange', () => { if (/^#t=/.test(location.hash)) boot(); });
boot();
