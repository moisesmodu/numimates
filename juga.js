/* ===== Numi Mates · batalla per a convidats (/juga) =====
   El docent crea una «batalla per a convidats» al panell i la projecta. Qualsevol hi entra des d'aquí amb el codi de la
   pissarra i un nom (sense compte) i tria un personatge. Les preguntes són les mateixes que a l'app (mateix motor i mateixa
   llavor): 10 iguals per a tothom; guanya qui n'encerta més i, si hi ha empat, qui ha trigat menys.
   Aquesta pàgina no carrega app.js: només el motor d'exercicis (ex*.js, curriculum.js, fun.js) i els personatges. */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } }, del: k => { try { localStorage.removeItem(k); } catch (e) { } } };
let LS = null;   // estat de la pregunta en curs (també el fan servir els exercicis de graella d'ex5.js)
let SOUND = store.get('numi-juga-so') !== '0';
const SFX = makeSFX(() => SOUND);
LANG = (() => { const q = new URLSearchParams(location.search).get('l'); if (q === 'ca' || q === 'es') return q; return store.get('numi-juga-lang') || (/^es/.test(navigator.language || '') ? 'es' : 'ca'); })();
document.documentElement.lang = LANG;
document.title = L('Juga · Batalla de mates · Numi Mates', 'Juega · Batalla de mates · Numi Mates');
document.body.insertAdjacentHTML('afterbegin', DEFS);
const app = $('#app');
let BQ = 10;   // preguntes de la batalla (10 o 20): es posa amb l'estat
const CHARS = ['numi', 'guida', 'vuit', 'tuga', 'flama', 'estel', 'cavaller'];
const G = { code: '', tok: '', name: '', comp: store.get('numi-juga-comp') || 'numi', st: null, screen: '', poll: null, endAt: null, at: 0 };

/* ---------- utilitats ---------- */
const secs = ms => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const ordN = n => L(n + ({ 1: 'r', 2: 'n', 3: 'r', 4: 't' }[n] || 'è'), n + 'º');
const mmss = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const normCode = c => { let s = String(c || '').toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, ''); const m = s.match(/^([A-Z]+)-?(\d{4})$/); return m ? m[1] + '-' + m[2] : s.slice(0, 14); };
const tokKey = c => 'numi-juga:' + c;
const ERR = e => ({
  'no-existeix': L("Aquest codi no existeix. Mira'l bé a la pissarra!", '¡Ese código no existe! Míralo bien en la pizarra.'),
  caducada: L('Aquesta batalla ja ha acabat.', 'Esta batalla ya ha terminado.'),
  'començada': L('La batalla ja ha començat. Espera la pròxima!', 'La batalla ya ha empezado. ¡Espera la próxima!'),
  plena: L('La batalla és plena.', 'La batalla está llena.'),
  nom: L('Escriu el teu nom (almenys 2 lletres).', 'Escribe tu nombre (al menos 2 letras).'),
  massa: L('Massa intents. Espera una estona.', 'Demasiados intentos. Espera un rato.'),
  fora: L("Ja no ets a la sala. Torna-hi a entrar amb el codi.", 'Ya no estás en la sala. Vuelve a entrar con el código.')
})[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
async function api(action, extra = {}) {
  const r = await fetch('/api/juga', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action, bcode: G.code, tok: G.tok, ...extra }) });
  return r.json();
}
const meP = () => G.st && G.st.players.find(p => p.me);
const av = (id, mood = 'idle', cls = '') => `<span class="jg-av ${cls}">${charSVG(CHARS.includes(id) ? id : 'numi', mood)}</span>`;

/* ---------- motor: les mateixes preguntes que a l'app (battle.js · battlePlan, app.js · genEx) ---------- */
function seeded(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function withSeed(seed, fn) { const r = Math.random; Math.random = seeded(seed); try { return fn(); } finally { Math.random = r; } }
function genEx(sk, lv, seen, mix) {
  const [name, arg] = sk.split(':'); let e;
  for (let t = 0; t < 10; t++) { e = EX[name](lv, arg); if (mix) e = remix(e); e.sk = sk; e.L = lv; const key = e.q + (e.vis || '') + (e.items || '') + (e.fixed || '') + (e.need || ''); if (!seen.has(key)) { seen.add(key); break; } }
  return e;
}
function battlePlan(st) {
  const c = COURSES[st.course], units = st.unit != null && c.units[st.unit] ? [c.units[st.unit]] : c.units;
  return withSeed(st.seed, () => {
    const pool = [];
    units.forEach(u => u.lessons.slice(0, 10).forEach(l => l.sk.forEach(s => pool.push([s, l.L]))));
    const plan = []; for (let i = 0; i < BQ; i++) plan.push(pick(pool));
    plan.sort((a, b) => a[1] - b[1]);
    const seen = new Set(); return plan.map(([s, lv]) => genEx(s, lv, seen, true));
  });
}

/* ---------- bucle de consulta: un de sol, el ritme depèn de la pantalla ---------- */
function poll(ms) {
  clearTimeout(G.poll);
  G.poll = setTimeout(async () => {
    let st; try { st = await api('state'); } catch (e) { return poll(ms); }
    if (st.error === 'fora') { store.del(tokKey(G.code)); G.tok = ''; return renderJoin('fora'); }
    if (st.error) return poll(ms);
    G.st = st; G.at = Date.now(); if (st.msLeft != null) G.endAt = Date.now() + st.msLeft;
    route(true);
  }, ms);
}
// decideix la pantalla segons l'estat; si ja s'hi és, només refresca el que canvia
function route(fromPoll) {
  const st = G.st, me = meP(); BQ = st.nq || 10;
  if (!me) { store.del(tokKey(G.code)); G.tok = ''; return renderJoin('fora'); }
  if (st.over) { if (G.screen !== 'result') { if (G.screen === 'play') LS = null; renderResult(); } return; }
  if (me.finished) { if (G.screen !== 'wait') renderWait(); else updWait(); return poll(2000); }
  if (st.status === 'lobby') { if (G.screen !== 'lobby') renderLobby(); else updLobby(); return poll(1500); }
  if (st.startIn > 0 && G.screen !== 'play') { if (G.screen !== 'count') renderCount(); return poll(2500); }
  if (G.screen !== 'play') startPlay(); else updRace();
  poll(3000);
}

/* ---------- 1. Entrar: codi, nom i personatge ---------- */
function renderJoin(err) {
  G.screen = 'join'; clearTimeout(G.poll); LS = null;
  const name = store.get('numi-juga-nom') || '';
  app.innerHTML = `<section class="jg-card jg-join jpop">
    <img class="jg-logo" src="img/brand/logo-blanc.svg" alt="Numi Mates">
    <h1>${L('Batalla de mates', 'Batalla de mates')}</h1>
    <p class="jg-sub">${L("Escriu el codi de la pissarra i el teu nom. No cal compte!", '¡Escribe el código de la pizarra y tu nombre. No hace falta cuenta!')}</p>
    <label class="jg-f"><span>${L('Codi de la batalla', 'Código de la batalla')}</span><input id="jc" value="${esc(G.code)}" placeholder="ZEUS-1234" maxlength="14" autocapitalize="characters" autocomplete="off" spellcheck="false" inputmode="text"></label>
    <label class="jg-f"><span>${L('El teu nom', 'Tu nombre')}</span><input id="jn" value="${esc(name)}" placeholder="${L('Com et dius?', '¿Cómo te llamas?')}" maxlength="18" autocomplete="nickname" enterkeyhint="go"></label>
    <div class="jg-f"><span>${L('Tria el teu personatge', 'Elige tu personaje')}</span><div class="jg-avs" role="radiogroup">${CHARS.map(id => `<button type="button" class="jg-avb ${id === G.comp ? 'on' : ''}" role="radio" aria-checked="${id === G.comp}" aria-label="${esc(CH[id].name)}" onclick="pickAv('${id}')">${charSVG(id, id === G.comp ? 'happy' : 'idle')}</button>`).join('')}</div></div>
    <p class="jg-err" id="je" role="alert">${err ? ERR(err) : ''}</p>
    <button class="jg-cta" id="jgo" onclick="join()">${L('ENTRA A LA BATALLA', 'ENTRA EN LA BATALLA')}</button>
    <div class="jg-foot"><button class="jg-lang" onclick="setLang('${LANG === 'es' ? 'ca' : 'es'}')">${LANG === 'es' ? 'Català' : 'Castellano'}</button><a href="https://numimates.com" target="_blank" rel="noopener">numimates.com</a></div>
  </section>`;
  $('#jn').addEventListener('keydown', e => { if (e.key === 'Enter') join(); });
  $('#jc').addEventListener('keydown', e => { if (e.key === 'Enter') $('#jn').focus(); });
  (G.code ? $('#jn') : $('#jc')).focus();
}
function pickAv(id) {
  G.comp = id; store.set('numi-juga-comp', id); SFX.tap();
  $$('.jg-avb').forEach(b => { const on = b.getAttribute('aria-label') === CH[id].name; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); b.innerHTML = charSVG(CHARS[$$('.jg-avb').indexOf(b)], on ? 'happy' : 'idle'); });
}
function setLang(l) { LANG = l; store.set('numi-juga-lang', l); document.documentElement.lang = l; if (G.screen === 'join') { G.code = normCode($('#jc')?.value || G.code); renderJoin(); } else route(); }
async function join() {
  const code = normCode($('#jc').value), name = $('#jn').value.trim(), b = $('#jgo'), e = $('#je');
  if (!code) { e.textContent = ERR('no-existeix'); return $('#jc').focus(); }
  if (name.length < 2) { e.textContent = ERR('nom'); return $('#jn').focus(); }
  b.disabled = true; e.textContent = ''; SFX.tap();
  G.code = code;
  let r; try { r = await api('join', { name, companion: G.comp }); } catch (x) { r = {}; }
  b.disabled = false;
  if (!r.tok) { SFX.ko(); e.textContent = ERR(r.error); return; }
  G.tok = r.tok; G.name = r.name; G.st = r.state;
  store.set('numi-juga-nom', name); store.set(tokKey(code), JSON.stringify({ tok: r.tok, name: r.name, comp: G.comp }));
  history.replaceState(null, '', location.pathname + '?c=' + encodeURIComponent(code));
  SFX.coin && SFX.coin(); route();
}

/* ---------- 2. Sala d'espera ---------- */
const chip = p => `<span class="jg-chip ${p.me ? 'me' : ''}">${av(p.companion, p.me ? 'happy' : 'idle')}<b>${esc(p.name)}</b></span>`;
function renderLobby() {
  G.screen = 'lobby'; const st = G.st, me = meP();
  app.innerHTML = `<section class="jg-lobby">
    <div class="jg-hero">${av(me.companion, 'happy', 'big bob')}</div>
    <h1>${L(`Ja ets dins, ${esc(me.name)}!`, `¡Ya estás dentro, ${esc(me.name)}!`)}</h1>
    <p class="jg-sub wait">${L('Esperant que la profe comenci la batalla', 'Esperando a que la profe empiece la batalla')}<i class="dots"><b>.</b><b>.</b><b>.</b></i></p>
    <div class="jg-tag">${esc(st.title || L('Batalla de mates', 'Batalla de mates'))} · <span class="mono">${st.code}</span></div>
    <div class="jg-count" id="jcnt"></div>
    <div class="jg-chips" id="jpl"></div>
    <div class="jg-tips"><b>${L('Com es juga', 'Cómo se juega')}</b><span>${L(`${BQ} preguntes, les mateixes per a tothom. Guanya qui n'encerta més i, si hi ha empat, el més ràpid.`, `${BQ} preguntas, las mismas para todos. Gana quien acierta más y, si hay empate, el más rápido.`)}</span></div>
  </section>`;
  updLobby();
}
function updLobby() {
  const st = G.st, pl = [...st.players].sort((a, b) => (b.me ? 1 : 0) - (a.me ? 1 : 0)), el = $('#jpl'); if (!el) return;
  const seen = new Set($$('.jg-chip', el).map(c => c.dataset.k));
  el.innerHTML = pl.map(p => chip(p).replace('class="jg-chip', `data-k="${esc(p.name)}" class="jg-chip ${seen.size && !seen.has(p.name) ? 'new' : ''}`)).join('');
  $('#jcnt').innerHTML = `<b>${st.players.length}</b> ${st.players.length === 1 ? L('jugador a la sala', 'jugador en la sala') : L('jugadors a la sala', 'jugadores en la sala')}`;
}

/* ---------- 3. Compte enrere ---------- */
function renderCount() {
  G.screen = 'count'; const t0 = Date.now() + Math.max(0, G.st.startIn || 0);
  app.innerHTML = `<section class="jg-countdown"><h1>${L('Preparats?', '¿Preparados?')}</h1><div class="jg-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/></svg><b id="jcd">…</b></div></section>`;
  let last = null;
  const iv = setInterval(() => {
    const el = $('#jcd'); if (!el || G.screen !== 'count') return clearInterval(iv);
    const left = Math.ceil((t0 - Date.now()) / 1000);
    if (left <= 0) { clearInterval(iv); el.textContent = L('JA!', '¡YA!'); el.className = 'go'; SFX.win && SFX.win(); return setTimeout(() => { if (G.screen === 'count') startPlay(); }, 600); }
    if (left !== last) { last = left; el.textContent = left; el.className = ''; void el.offsetWidth; el.className = 'jpop'; SFX.tap(); }
  }, 100);
}

/* ---------- 4. Jugar ---------- */
function startPlay() {
  const st = G.st, me = meP(), done = Math.min(me.done || 0, BQ);
  // si havia recarregat a mitja partida, continua on era (no es poden repetir les preguntes)
  LS = { queue: battlePlan(st).slice(done), done, ok: me.correct || 0, ms: me.ms || 0, res: Array(done).fill(null), q0: 0, state: 'ask', cur: null };
  G.screen = 'play'; nextQ();
}
function nextQ() {
  if (!LS) return;
  if (LS.done >= BQ) return finishPlay();
  LS.cur = LS.queue.shift(); LS.sel = null; LS.input = ''; LS.order = []; LS.gsel = new Set(); LS.state = 'ask';
  renderQ();
}
const padHTML = (extra) => `<div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="key('${n}')">${n}</button>`).join('')}<button class="pk-del" onclick="key('del')" aria-label="⌫">⌫</button><button onclick="key('0')">0</button>${extra ? `<button class="pk-x" onclick="key('${extra}')">${extra}</button>` : `<button class="pk-ok" onclick="key('ok')" aria-label="OK">✓</button>`}</div>`;
const showOf = e => e.show || fmt;
function ansHTML(e) {
  if (e.type === 'grid') return tapGridHTML(e);
  if (e.type === 'choice' && e.balloon) return `<div class="balloons">${e.opts.map((o, i) => `<button class="bln b${i}" style="--d:${i * .35}s;--c:${['#FF6FA3', '#36A9E1', '#3CC46A', '#FF9A3C'][i]}" onclick="pickOpt(${i})"><span>${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice' && e.tf) return `<div class="opts tfopts">${e.opts.map((o, i) => `<button class="opt tf${i}" onclick="pickOpt(${i})"><span class="ov">${o}</span></button>`).join('')}</div>`;
  if (e.type === 'choice') {
    const len = o => String(o).replace(/<[^>]+>/g, '').length, long = !e.pics && (e.list || e.opts.some(o => len(o) > 10));
    return `<div class="opts ${e.pics ? 'pics' : ''} ${e.big && !long && e.opts.every(o => len(o) <= 9) ? 'big' : ''} ${long ? 'list' : ''}">${e.opts.map((o, i) => `<button class="opt" style="animation-delay:${80 + i * 60}ms" onclick="pickOpt(${i})"><span class="k">${i + 1}</span><span class="ov">${o}</span></button>`).join('')}</div>`;
  }
  if (e.type === 'input') return `<div class="inbox" id="inbox"><span id="inval" class="ph">?</span>${e.unit ? `<span class="iu">${e.unit}</span>` : ''}</div>${padHTML(e.dec ? ',' : e.neg ? '−' : null)}`;
  return `<div class="oslots" id="oslots"><span class="ohint">${L('Toca els números en ordre', 'Toca los números en orden')}</span></div><div class="obank" id="obank">${e.items.map((v, i) => `<button class="chipn" data-i="${i}" onclick="ordTap(${i})">${showOf(e)(v)}</button>`).join('')}</div>`;
}
function renderQ() {
  const e = LS.cur, needBtn = e.type !== 'choice' && e.type !== 'input';   // les opcions es comproven en tocar-les; el teclat ja té ✓
  app.innerHTML = `<section class="jg-play">
    <header class="jg-top"><div class="jg-dots" style="--n:${BQ}">${[...Array(BQ).keys()].map(i => `<i class="${i < LS.res.length ? (LS.res[i] === true ? 'k' : LS.res[i] === false ? 'x' : 'd') : i === LS.done ? 'cur' : ''}"></i>`).join('')}</div>
      <span class="jg-qn">${LS.done + 1}<small>/${BQ}</small></span><span class="jg-clock" id="jclk"></span><button class="jg-snd" onclick="toggleSound()" aria-label="${L('So', 'Sonido')}">${SOUND ? '🔊' : '🔇'}</button></header>
    <div class="jg-grid"><aside class="jg-side"><p class="jg-sideh">${L('Rànquing en directe', 'Ranking en directo')}</p><div class="jg-race" id="jrace"></div></aside>
    <div class="jg-qcard">
      <div class="jg-qt">${e.q}</div>
      ${e.vis ? `<div class="l-vis">${e.vis}</div>` : ''}
      <div class="l-ans">${ansHTML(e)}</div>
      ${needBtn ? `<button class="jg-cta" id="chk" disabled onclick="check()">${L('COMPROVA', 'COMPRUEBA')}</button>` : '<button id="chk" hidden disabled></button>'}
    </div></div>
    <div class="jg-fb" id="jfb" aria-live="polite"></div>
  </section>`;
  LS.q0 = Date.now(); updRace(); clock();
}
function clock() { const el = $('#jclk'); if (!el || !G.endAt) return; el.textContent = '⏱ ' + mmss(G.endAt - Date.now()); el.classList.toggle('low', G.endAt - Date.now() < 30000); }
setInterval(() => { if (G.screen === 'play') clock(); }, 500);
const DESK = matchMedia("(min-width: 980px)");
function updRace() {
  const el = $('#jrace'); if (!el || !G.st) return;
  const rows = [...G.st.players].sort((a, b) => b.correct - a.correct || b.done - a.done || a.ms - b.ms), me = rows.find(p => p.me);
  if (me && LS) { me.done = LS.done; me.correct = LS.ok; }
  // al mòbil, els 3 primers i tu; a l'ordinador (columna lateral), els 10 primers
  const top = rows.slice(0, DESK.matches ? 10 : 3); if (me && !top.includes(me)) top.push(me);
  el.innerHTML = top.map(p => `<div class="lane ${p.me ? 'me' : ''}"><span class="ln">${esc(p.me ? L('Tu', 'Tú') : p.name)}</span><span class="track"><i class="fill" style="width:${p.done / BQ * 100}%"></i><span class="runner" style="left:${p.done / BQ * 100}%">${charSVG(p.companion || 'numi', p.done >= BQ ? 'happy' : 'idle')}</span></span><b class="sc">${p.correct}</b></div>`).join('');
}
function toggleSound() { SOUND = !SOUND; store.set('numi-juga-so', SOUND ? '1' : '0'); const b = $('.jg-snd'); if (b) b.textContent = SOUND ? '🔊' : '🔇'; }
function pickOpt(i) { if (!LS || LS.state !== 'ask') return; LS.sel = i; SFX.tap(); $$('.opt,.bln').forEach((b, j) => b.classList.toggle('sel', j === i)); check(); }
function inputShow(s) { if (!s) return '?'; const neg = s.startsWith('−'), body = neg ? s.slice(1) : s, [i, f] = body.split(','); return (neg ? '−' : '') + (i ? fmt(+i) : (f !== undefined ? '0' : '')) + (f !== undefined ? ',' + f : ''); }
const inputVal = s => parseFloat(s.replace('−', '-').replace(',', '.'));
function key(k) {
  if (!LS) return;
  if (k === 'ok') return check();
  if (LS.state !== 'ask' || LS.cur.type !== 'input') return;
  let s = LS.input;
  if (k === 'del') s = s.slice(0, -1);
  else if (k === ',') { if (!s.includes(',')) s = (s === '' || s === '−' ? s + '0' : s) + ','; }
  else if (k === '−') s = s.startsWith('−') ? s.slice(1) : '−' + s;
  else if (s.replace(/[−,]/g, '').length < 10) { if (s === '0') s = ''; if (s === '−0') s = '−'; s += k; }
  LS.input = s; SFX.tap();
  const el = $('#inval'); el.textContent = inputShow(s); el.classList.toggle('ph', !s); el.classList.remove('typed'); void el.offsetWidth; el.classList.add('typed');
  $('#chk').disabled = !/\d/.test(s);
}
// teclat físic (ordinador): xifres, coma, esborrar i Enter
document.addEventListener('keydown', ev => {
  if (G.screen !== 'play' || !LS || ev.target.tagName === 'INPUT') return;
  if (/^[0-9]$/.test(ev.key)) key(ev.key);
  else if (ev.key === 'Backspace') key('del');
  else if ((ev.key === ',' || ev.key === '.') && LS.cur && LS.cur.dec) key(',');
  else if (ev.key === '-' && LS.cur && LS.cur.neg) key('−');
  else if (ev.key === 'Enter') check();
  else if (/^[1-4]$/.test(ev.key) && LS.cur && LS.cur.type === 'choice') pickOpt(+ev.key - 1);
});
function ordTap(i) { if (!LS || LS.state !== 'ask' || LS.order.includes(i)) return; LS.order.push(i); SFX.tap(); renderOrder(); }
function ordRemove(p) { if (!LS || LS.state !== 'ask') return; LS.order.splice(p, 1); renderOrder(); }
function renderOrder() {
  const e = LS.cur;
  $('#oslots').innerHTML = LS.order.length ? LS.order.map((i, p) => `<button class="chipn pop-in" onclick="ordRemove(${p})">${showOf(e)(e.items[i])}</button>`).join('') : `<span class="ohint">${L('Toca els números en ordre', 'Toca los números en orden')}</span>`;
  $$('#obank .chipn').forEach(b => b.classList.toggle('used', LS.order.includes(+b.dataset.i)));
  $('#chk').disabled = LS.order.length < e.items.length;
}
function ansText(e) {
  if (e.type === 'grid') return e.need ? L(`${e.need} caselles pintades`, `${e.need} casillas pintadas`) : gridSolSVG(e);
  if (e.type === 'choice') return e.opts[e.ans];
  if (e.type === 'input') return (e.dec ? fmtD(e.ans) : fmt(e.ans)) + (e.unit ? ' ' + e.unit : '');
  const s = showOf(e); return e.ans.map(s).join(e.ans[0] > e.ans[1] ? ' > ' : ' < ');
}
function isRight(e) {
  if (e.type === 'grid') return gridRight(e);
  if (e.type === 'choice') return LS.sel === e.ans;
  if (e.type === 'input') return Math.abs(inputVal(LS.input) - e.ans) < 1e-6;
  return LS.order.map(i => e.items[i]).join() === e.ans.join();
}
const ready = e => e.type === 'grid' ? LS.gsel && LS.gsel.size > 0 : e.type === 'choice' ? LS.sel != null : e.type === 'input' ? /\d/.test(LS.input) : LS.order.length === e.items.length;
const PRAISE = () => L(['Molt bé!', 'Genial!', 'Correcte!', 'Fantàstic!', 'Ben fet!', 'Increïble!', 'Així es fa!'], ['¡Muy bien!', '¡Genial!', '¡Correcto!', '¡Fantástico!', '¡Bien hecho!', '¡Increíble!', '¡Así se hace!']);
function check() {
  if (!LS || LS.state !== 'ask') return;
  const e = LS.cur; if (!ready(e)) return;
  const ok = isRight(e);
  LS.state = 'fb'; LS.ms += Math.min(120000, Date.now() - LS.q0); if (ok) LS.ok++; LS.done++; LS.res.push(ok);
  if (e.type === 'choice') $$('.opt,.bln').forEach((b, i) => { b.disabled = true; if (i === e.ans) b.classList.add('right'); else if (i === LS.sel) b.classList.add(e.balloon ? 'popped' : 'wrong'); });
  if (e.type === 'input') $('#inbox').classList.add(ok ? 'right' : 'wrong');
  if (e.type === 'order') $('#oslots').classList.add(ok ? 'right' : 'wrong');
  if (e.type === 'grid') $('#tgrid').classList.add(ok ? 'right' : 'wrong');
  $$('.pad button, #chk').forEach(b => b.disabled = true);
  const fb = $('#jfb');
  fb.className = 'jg-fb show ' + (ok ? 'ok' : 'ko');
  fb.innerHTML = ok ? `<b>✔ ${pick(PRAISE())}</b>` : `<b>${L('Era', 'Era')}:</b> <span>${ansText(e)}</span>`;
  ok ? SFX.ok() : SFX.ko();
  const dot = $$('.jg-dots i')[LS.done - 1]; if (dot) dot.className = ok ? 'k' : 'x';
  updRace();
  api('progress', { done: LS.done, correct: LS.ok, ms: LS.ms }).then(st => { if (st && !st.error) { G.st = st; if (st.msLeft != null) G.endAt = Date.now() + st.msLeft; } }).catch(() => { });
  setTimeout(nextQ, ok ? 850 : 1700);
}
async function finishPlay() {
  const body = { done: BQ, correct: LS.ok, ms: LS.ms, finished: true }; LS = null; G.screen = 'sending';
  app.innerHTML = `<section class="jg-countdown"><div class="jg-hero">${av(G.comp, 'happy', 'big bob')}</div><h1>${L('Fet!', '¡Hecho!')}</h1></section>`;
  let st = null;
  for (let t = 0; t < 4 && !st; t++) { try { const r = await api('progress', body); if (!r.error) st = r; else if (r.error === 'no-començada') st = await api('state'); } catch (e) { await new Promise(r => setTimeout(r, 1000)); } }
  if (!st || st.error) { G.screen = ''; return poll(1000); }
  G.st = st; route();
}

/* ---------- 5. Esperant la resta i resultats ---------- */
function renderWait() {
  G.screen = 'wait'; const me = meP();
  app.innerHTML = `<section class="jg-wait">
    <div class="jg-hero">${av(me.companion, 'happy', 'big bob')}</div>
    <h1>${L('Fet!', '¡Hecho!')} <span class="jg-score">${me.correct}/${BQ}</span></h1>
    <p class="jg-sub">${L(`Temps: ${secs(me.ms)}. Esperant que acabin els altres`, `Tiempo: ${secs(me.ms)}. Esperando a que terminen los demás`)}<i class="dots"><b>.</b><b>.</b><b>.</b></i></p>
    <div class="jg-board" id="jbd"></div></section>`;
  updWait();
}
function updWait() {
  const el = $('#jbd'); if (!el) return;
  const rows = [...G.st.players].sort((a, b) => b.correct - a.correct || b.done - a.done || a.ms - b.ms);
  el.innerHTML = rows.slice(0, 12).map((p, i) => `<div class="jg-row ${p.me ? 'me' : ''}"><span class="n">${i + 1}</span>${av(p.companion, p.finished ? 'happy' : 'idle')}<b>${esc(p.name)}</b><span class="bar"><i style="width:${p.done / BQ * 100}%"></i></span><span class="sc">${p.finished ? '✔ ' : ''}${p.correct}/${BQ}</span></div>`).join('')
    + (rows.length > 12 && !rows.slice(0, 12).some(p => p.me) ? `<div class="jg-row me"><span class="n">${rows.findIndex(p => p.me) + 1}</span>${av(G.comp, 'happy')}<b>${esc(meP().name)}</b><span class="bar"><i style="width:100%"></i></span><span class="sc">${meP().correct}/${BQ}</span></div>` : '');
}
function renderResult() {
  G.screen = 'result'; clearTimeout(G.poll);
  const st = G.st, me = meP(), rank = st.players.filter(p => p.pos).sort((a, b) => a.pos - b.pos), n = rank.length;
  const pod = [rank[1], rank[0], rank[2]];
  const head = !me || !me.pos ? L('Batalla acabada', 'Batalla terminada') : me.pos === 1 && n > 1 ? L('Has guanyat!', '¡Has ganado!') : L(`Has quedat ${ordN(me.pos)}`, `Has quedado ${ordN(me.pos)}`);
  app.innerHTML = `<section class="jg-result">
    <p class="jg-kick">${esc(st.title || L('Batalla de mates', 'Batalla de mates'))}</p>
    <h1>${head}</h1>
    ${me && me.pos ? `<p class="jg-sub">${L(`${me.best.correct} de ${BQ} encerts en ${secs(me.best.ms)}`, `${me.best.correct} de ${BQ} aciertos en ${secs(me.best.ms)}`)}${n > 1 ? ' · ' + L(`${n} jugadors`, `${n} jugadores`) : ''}</p>` : ''}
    ${n ? `<div class="jg-pod">${pod.map((p, i) => p ? `<div class="ps s${p.pos} ${p.me ? 'me' : ''}" style="--d:${[.45, .9, .2][i]}s"><div class="pc">${p.pos === 1 ? '<span class="crown" aria-hidden="true">👑</span>' : ''}${charSVG(p.companion || 'numi', 'happy')}</div><b>${esc(p.name)}</b><small>${p.best.correct}/${BQ} · ${secs(p.best.ms)}</small><div class="step"><span>${p.pos}</span></div></div>` : '<div class="ps empty"></div>').join('')}</div>` : ''}
    ${n > 3 ? `<div class="jg-board">${rank.slice(3, 15).map(p => `<div class="jg-row ${p.me ? 'me' : ''}"><span class="n">${p.pos}</span>${av(p.companion, 'idle')}<b>${esc(p.name)}</b><span class="sc">${p.best.correct}/${BQ} · ${secs(p.best.ms)}</span></div>`).join('')}
      ${me && me.pos > 15 ? `<div class="jg-row me"><span class="n">${me.pos}</span>${av(me.companion, 'happy')}<b>${esc(me.name)}</b><span class="sc">${me.best.correct}/${BQ} · ${secs(me.best.ms)}</span></div>` : ''}</div>` : ''}
    <div class="jg-more"><b>${L('Vols seguir practicant?', '¿Quieres seguir practicando?')}</b><span>${L('Amb Numi Mates, les mates de primària pas a pas i jugant.', 'Con Numi Mates, las mates de primaria paso a paso y jugando.')}</span><a class="jg-cta sm" href="https://numimates.com" target="_blank" rel="noopener">${L('Coneix Numi Mates', 'Conoce Numi Mates')}</a></div>
    <button class="jg-ghost" onclick="again()">${L('Jugar una altra batalla', 'Jugar otra batalla')}</button>
  </section>`;
  SFX.win && SFX.win();
  if (me && me.pos && me.pos <= 3) confetti(me.pos === 1 ? 180 : 90);
}
function again() { store.del(tokKey(G.code)); G.tok = ''; G.code = ''; G.st = null; history.replaceState(null, '', location.pathname); renderJoin(); }
function confetti(n) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div'); box.className = 'jg-confetti'; box.setAttribute('aria-hidden', 'true');
  const col = ['#FFD84D', '#FF6FA3', '#36A9E1', '#3CC46A', '#B98AE0', '#FF9A3C'];
  box.innerHTML = Array.from({ length: n }, () => `<i style="left:${Math.random() * 100}%;background:${col[Math.floor(Math.random() * col.length)]};--dx:${(Math.random() * 2 - 1) * 120}px;--r:${Math.random() * 720}deg;animation-delay:${Math.random() * .6}s;animation-duration:${2.2 + Math.random() * 1.6}s"></i>`).join('');
  document.body.appendChild(box); setTimeout(() => box.remove(), 4800);
}

/* ---------- arrencada: ?c=CODI; si aquest dispositiu ja era a la batalla, hi torna ---------- */
(async () => {
  G.code = normCode(new URLSearchParams(location.search).get('c') || '');
  const saved = G.code ? (() => { try { return JSON.parse(store.get(tokKey(G.code)) || 'null'); } catch (e) { return null; } })() : null;
  if (saved && saved.tok) {
    G.tok = saved.tok; G.name = saved.name; G.comp = saved.comp || G.comp;
    try { const st = await api('state'); if (!st.error) { G.st = st; if (st.msLeft != null) G.endAt = Date.now() + st.msLeft; return route(); } } catch (e) { }
    store.del(tokKey(G.code)); G.tok = '';
  }
  renderJoin();
})();
