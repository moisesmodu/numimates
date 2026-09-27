/* ===== Mates amb Numi — lògica de l'app ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Estat ---------- */
const SKEY = 'mates-numi-v1';
let DB; try { DB = JSON.parse(localStorage.getItem(SKEY)); } catch (e) { }
if (!DB || !DB.profiles) DB = { profiles: {}, current: null };
let P = DB.current && DB.profiles[DB.current] || null;
const save = () => { try { localStorage.setItem(SKEY, JSON.stringify(DB)); } catch (e) { } };
function freshProgress() {
  return { companion: 'numi', owned: ['numi'], accOwned: [], acc: {}, xp: 0, gems: 20, streak: 0, best: 0, lastDay: null, days: [], freeze: 0, daily: { d: today(), xp: 0 }, prog: {}, badges: [], stats: { answers: 0, correct: 0, perfect: 0, lessons: 0, trains: 0, combo: 0, bestCombo: 0, sprintBest: 0, sk: {} } };
}
function newProfile(name) {
  const id = 'p' + Date.now().toString(36);
  P = { id, name, goal: 20, sound: true, unlockAll: false, ...freshProgress() };
  DB.profiles[id] = P; DB.current = id; save();
}
const lvlOf = xp => Math.floor(Math.sqrt(xp / 20)) + 1;
const xpFor = l => 20 * (l - 1) ** 2;
function dailyRoll() { if (P.daily.d !== today()) P.daily = { d: today(), xp: 0 }; }
function addXP(x) { dailyRoll(); P.xp += x; P.daily.xp += x; }
function streakNow() {
  if (!P.lastDay) return 0;
  const d = dayDiff(P.lastDay, today());
  return d <= 1 || (d === 2 && P.freeze > 0) ? P.streak : 0;
}
function touchStreak() {
  const t = today();
  if (!P.days.includes(t)) { P.days.push(t); if (P.days.length > 120) P.days.shift(); }
  if (P.lastDay === t) return false;
  const d = P.lastDay ? dayDiff(P.lastDay, t) : 99;
  if (d === 1) P.streak++;
  else if (d === 2 && P.freeze > 0) { P.freeze--; P.streak++; }
  else P.streak = 1;
  P.lastDay = t; P.best = Math.max(P.best, P.streak);
  return true;
}
const prog = ui => (P.prog[UNITS[ui].id] ||= { stars: [0, 0, 0, 0, 0, 0] });
const unitOpen = ui => ui === 0 || P.unlockAll || prog(ui - 1).stars[5] > 0;
const lessonOpen = (ui, li) => unitOpen(ui) && (li === 0 || P.unlockAll || prog(ui).stars[li - 1] > 0);
const unitsDone = p => UNITS.filter(u => (p.prog[u.id]?.stars[5] || 0) > 0).length;
function currentNode() {
  for (let ui = 0; ui < UNITS.length; ui++) for (let li = 0; li < 6; li++) if (lessonOpen(ui, li) && !prog(ui).stars[li]) return [ui, li];
  return null;
}
function record(sk, ok) {
  const s = P.stats; s.answers++; if (ok) s.correct++;
  const a = s.sk[sk] ||= [0, 0]; a[1]++; if (ok) a[0]++;
  if (ok) { s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo); } else s.combo = 0;
}

/* ---------- So i confeti ---------- */
let AC;
function tone(f, d, t = 0, type = 'sine', v = .14) {
  if (!P || !P.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain(), n = AC.currentTime + t;
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, n); g.gain.exponentialRampToValueAtTime(v, n + .02); g.gain.exponentialRampToValueAtTime(.0001, n + d);
    o.connect(g).connect(AC.destination); o.start(n); o.stop(n + d + .05);
  } catch (e) { }
}
const SFX = {
  ok() { tone(660, .12); tone(990, .2, .09); },
  ko() { tone(200, .28, 0, 'triangle', .12); },
  tap() { tone(520, .05, 0, 'sine', .05); },
  win() { [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, i * .11)); },
  coin() { tone(988, .08); tone(1319, .18, .07); }
};
function confetti(n = 140) {
  if (REDUCED) return;
  const c = document.createElement('canvas'), dpr = devicePixelRatio || 1; c.className = 'confetti'; document.body.appendChild(c);
  const ctx = c.getContext('2d'), W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr;
  const cols = ['#602B7A', '#FFC93C', '#5FD3B3', '#FF7AA8', '#36A9E1', '#FF9A3C'];
  const ps = [...Array(n)].map(() => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .38, vx: (Math.random() - .5) * 20 * dpr, vy: (-Math.random() * 17 - 5) * dpr, r: (4 + Math.random() * 5) * dpr, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
  let f = 0;
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .5 * dpr; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
    if (++f < 160) requestAnimationFrame(loop); else c.remove();
  })();
}

/* ---------- Modals i avisos ---------- */
function modal(html, center) {
  closeModal();
  const d = document.createElement('div'); d.className = 'modal-bg' + (center ? ' center' : ''); d.innerHTML = html;
  d.addEventListener('click', e => { if (e.target === d && !center) closeModal(); });
  document.body.appendChild(d);
}
const closeModal = () => $$('.modal-bg').forEach(m => m.remove());
function ask(txt, yes, no, onYes) {
  modal(`<div class="sheet card"><p class="askt">${txt}</p><div class="row2"><button class="btn ghost" onclick="closeModal()">${no}</button><button class="btn red" id="askYes">${yes}</button></div></div>`, true);
  $('#askYes').onclick = () => { closeModal(); onYes(); };
}
function toast(t) {
  const d = document.createElement('div'); d.className = 'toast'; d.innerHTML = t; document.body.appendChild(d);
  setTimeout(() => d.classList.add('out'), 2300); setTimeout(() => d.remove(), 2700);
}

/* ---------- Navegació ---------- */
let LS = null, SP = null, FLOW = [];
function go(v) {
  LS = null; stopSprint(); closeModal();
  if (!P && v !== 'profiles') v = Object.keys(DB.profiles).length ? 'profiles' : 'onboard';
  ({ home: renderHome, train: renderTrain, shop: renderShop, badges: renderBadges, profile: renderProfile, profiles: renderProfiles, onboard: renderOnboard }[v] || renderHome)();
  if (v !== 'home') window.scrollTo(0, 0);
}
const NAV = [['home', '🗺️', 'Camí'], ['train', '🎯', 'Entrena'], ['shop', '🛍️', 'Botiga'], ['badges', '🏅', 'Medalles'], ['profile', '👤', 'Perfil']];
const nav = t => `<nav class="nav">${NAV.map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${i}</span><span>${l}</span></button>`).join('')}</nav>`;
const shell = (inner, tab) => `<div class="page">${topbar()}${inner}</div>${nav(tab)}`;
function topbar() {
  const s = streakNow();
  return `<header class="topbar"><button class="avatar" onclick="go('profiles')" title="Canvia d'alumne">${charSVG(P.companion, 'idle', P.acc)}</button>
  <div class="chips"><span class="chip ${s ? 'fire' : 'off'}" title="Ratxa de dies">🔥 ${s}</span><span class="chip gem" title="Cristalls">💎 ${P.gems}</span><span class="chip lvl" title="Nivell">⭐ ${lvlOf(P.xp)}</span></div></header>`;
}
const starsHTML = (n, cls = '') => `<span class="stars ${cls}">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">★</i>`).join('')}</span>`;

/* ---------- Camí (inici) ---------- */
function goalCard() {
  dailyRoll();
  const x = P.daily.xp, g = P.goal, pc = Math.min(100, Math.round(x / g * 100));
  const msg = x >= g ? "Objectiu d'avui complert! Ets un crac." : x === 0 ? `Hola, ${esc(P.name)}! Fem una lliçó?` : `Et falten ${g - x} XP per a l'objectiu d'avui.`;
  return `<div class="goal"><div class="gchar">${charSVG(P.companion, x >= g ? 'happy' : 'idle', P.acc)}</div><div class="gbody"><div class="gmsg">${msg}</div><div class="gbar"><div style="width:${pc}%"></div></div><div class="gnum">${x} / ${g} XP avui</div></div></div>`;
}
const OFF = [0, -54, -80, -54, 0, 54];
function unitHTML(u, ui) {
  const open = unitOpen(ui), st = prog(ui).stars, cur = currentNode();
  const nodes = [0, 1, 2, 3, 4, 5].map(li => {
    const isR = li === 5, done = st[li] > 0, can = lessonOpen(ui, li), isCur = cur && cur[0] === ui && cur[1] === li;
    const cls = !can ? 'locked' : isCur ? 'cur' : done ? (st[li] === 3 ? 'gold' : 'done') : 'open';
    const icon = isR ? (done ? '🏆' : can ? '🎁' : '🔒') : !can ? '🔒' : done ? '✔' : '★';
    return `<div class="nwrap" style="transform:translateX(${OFF[li]}px)">
      ${isCur ? `<div class="tip">${isR ? 'REPTE!' : 'COMENÇA'}</div>` : ''}
      <button class="node ${cls} ${isR ? 'rep' : ''}" onclick="openLesson(${ui},${li})" aria-label="${isR ? 'Repte final' : 'Lliçó ' + (li + 1)}">${icon}</button>
      ${done && !isR ? starsHTML(st[li], 'mini') : ''}</div>`;
  }).join('');
  return `<section class="unit ${open ? '' : 'closed'}" style="--uc:${u.color}">
    <div class="ubanner"><div class="utext"><div class="ukick">UNITAT ${ui + 1}</div><h2>${u.title}</h2><p>${open ? u.desc : '🔒 Supera el repte de la unitat anterior per obrir-la.'}</p></div><div class="uguide">${charSVG(u.guide, 'idle')}</div></div>
    <div class="path">${nodes}<div class="pguide ${ui % 2 ? 'l' : ''}">${charSVG(u.guide, open ? 'happy' : 'idle')}</div></div></section>`;
}
function renderHome() {
  app.innerHTML = shell(`${goalCard()}${UNITS.map(unitHTML).join('')}<div class="theend">🚧 Aviat, noves unitats. Continua practicant!</div>`, 'home');
  const c = $('.node.cur');
  if (c) setTimeout(() => c.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
}
function openLesson(ui, li) {
  if (!lessonOpen(ui, li)) { toast(li === 0 ? '🔒 Primer supera el repte de la unitat anterior.' : '🔒 Primer fes la lliçó anterior.'); SFX.ko(); return; }
  const u = UNITS[ui], isR = li === 5, st = prog(ui).stars[li];
  modal(`<div class="sheet" style="--uc:${u.color}"><div class="sk">UNITAT ${ui + 1} · ${isR ? 'REPTE FINAL' : 'LLIÇÓ ' + (li + 1) + ' DE 5'}</div>
    <h3>${isR ? 'Repte de ' + u.title.toLowerCase() : u.lessons[li].t}</h3>
    <p>${isR ? '10 exercicis barrejats de tota la unitat. Si el superes, obres un cofre ple de cristalls i la unitat següent!' : "8 exercicis. Si te n'equivoques algun, el tornaràs a practicar al final."}</p>
    ${st ? `<div class="sstars">${starsHTML(st)}</div>` : ''}
    <button class="btn big" style="--c:${u.color}" onclick="closeModal();startLesson(${ui},${li})">${st ? 'REPETEIX' : 'COMENÇA'}</button></div>`);
}

/* ---------- Motor de lliçons ---------- */
function genEx(sk, L, seen) {
  let e;
  for (let t = 0; t < 10; t++) {
    e = EX[sk](L); e.sk = sk; e.L = L;
    const key = e.q + (e.vis || '') + (e.items || '');
    if (!seen.has(key)) { seen.add(key); break; }
  }
  return e;
}
function startLesson(ui, li) {
  const u = UNITS[ui]; let plan = [];
  if (li === 5) { const sks = [...new Set(u.lessons.flatMap(l => l.sk))]; for (let i = 0; i < 10; i++) plan.push([sks[i % sks.length], i < 4 ? 4 : 5]); }
  else { const l = u.lessons[li]; for (let i = 0; i < 8; i++) plan.push([l.sk[i % l.sk.length], l.L]); }
  startRun({ mode: li === 5 ? 'repte' : 'lesson', ui, li, plan: shuffle(plan) });
}
function trainPool(ui) {
  const pool = [];
  UNITS.forEach((u, i) => {
    if ((ui != null && i !== ui) || !unitOpen(i)) return;
    const st = prog(i).stars;
    u.lessons.forEach((l, li) => { if (st[li] > 0 || P.unlockAll) l.sk.forEach(s => pool.push([s, l.L])); });
  });
  return pool;
}
function startTrain(ui) {
  const pool = trainPool(ui);
  if (!pool.length) { toast('Primer fes alguna lliçó del camí!'); return; }
  const w = pool.map(([s]) => { const [c, t] = P.stats.sk[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); });
  const sum = w.reduce((a, b) => a + b, 0), plan = [];
  for (let i = 0; i < 8; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.push(pool[j]); }
  startRun({ mode: 'train', ui: ui ?? null, li: null, plan });
}
function startRun(o) {
  closeModal();
  const seen = new Set();
  LS = { ...o, seen, queue: o.plan.map(([s, L]) => genEx(s, L, seen)), total: o.plan.length, done: 0, miss: 0, combo: 0, t0: Date.now() };
  nextEx();
}
function nextEx() {
  if (LS.done >= LS.total) return finishRun();
  LS.cur = LS.queue.shift(); LS.sel = null; LS.input = ''; LS.order = []; LS.state = 'ask';
  renderLesson();
}
function renderLesson() {
  const e = LS.cur, u = LS.ui != null ? UNITS[LS.ui] : null;
  app.innerHTML = `<div class="lesson" style="--uc:${u ? u.color : '#602B7A'}">
    <div class="l-top"><button class="xbtn" onclick="quitRun()" aria-label="Surt">✕</button>
      <div class="pbar"><div class="pfill" style="width:${LS.done / LS.total * 100}%"></div></div>
      <div class="combo ${LS.combo >= 2 ? 'on' : ''}" id="combo">🔥<b>${LS.combo}</b></div></div>
    <div class="l-body">
      ${e.retry ? '<div class="retry">🔁 Una altra oportunitat</div>' : ''}
      <div class="l-q ${e.long ? 'long' : ''}"><div class="buddy" id="buddy">${charSVG(P.companion, 'think', P.acc)}</div><div class="bubble">${e.q}</div></div>
      ${e.vis ? `<div class="l-vis">${e.vis}</div>` : ''}
      <div class="l-ans">${ansHTML(e)}</div>
    </div>
    <div class="l-foot" id="foot"><div class="fwrap"><div class="fb" id="fb"></div><button class="btn check" id="chk" onclick="check()" disabled>COMPROVA</button></div></div>
  </div>`;
}
function padHTML(fn) {
  return `<div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="${fn}('${n}')">${n}</button>`).join('')}<button class="pk-del" onclick="${fn}('del')" aria-label="Esborra">⌫</button><button onclick="${fn}('0')">0</button><button class="pk-ok" onclick="${fn}('ok')" aria-label="Comprova">✓</button></div>`;
}
function ansHTML(e) {
  if (e.type === 'choice') {
    const long = e.list || e.opts.some(o => String(o).replace(/<[^>]+>/g, '').length > 10);
    return `<div class="opts ${e.big && !long ? 'big' : ''} ${long ? 'list' : ''}">${e.opts.map((o, i) => `<button class="opt" onclick="pickOpt(${i})"><span class="k">${i + 1}</span><span class="ov">${o}</span></button>`).join('')}</div>`;
  }
  if (e.type === 'input') return `<div class="inbox" id="inbox"><span id="inval" class="ph">?</span>${e.unit ? `<span class="iu">${e.unit}</span>` : ''}</div>${padHTML('key')}`;
  return `<div class="oslots" id="oslots"><span class="ohint">Toca els números en ordre</span></div><div class="obank" id="obank">${e.items.map((v, i) => `<button class="chipn" data-i="${i}" onclick="ordTap(${i})">${fmt(v)}</button>`).join('')}</div>`;
}
function pickOpt(i) {
  if (!LS || LS.state !== 'ask') return;
  LS.sel = i; SFX.tap();
  $$('.opt').forEach((b, j) => b.classList.toggle('sel', j === i));
  $('#chk').disabled = false;
}
function key(k) {
  if (!LS) return;
  if (k === 'ok') return check();
  if (LS.state !== 'ask') return;
  if (k === 'del') LS.input = LS.input.slice(0, -1);
  else if (LS.input.length < 7) { if (LS.input === '0') LS.input = ''; LS.input += k; }
  SFX.tap();
  const el = $('#inval'); el.textContent = LS.input ? fmt(+LS.input) : '?'; el.classList.toggle('ph', !LS.input);
  $('#chk').disabled = !LS.input;
}
function ordTap(i) {
  if (!LS || LS.state !== 'ask' || LS.order.includes(i)) return;
  LS.order.push(i); SFX.tap(); renderOrder();
}
function ordRemove(p) { if (!LS || LS.state !== 'ask') return; LS.order.splice(p, 1); renderOrder(); }
function renderOrder() {
  const e = LS.cur;
  $('#oslots').innerHTML = LS.order.length ? LS.order.map((i, p) => `<button class="chipn" onclick="ordRemove(${p})">${fmt(e.items[i])}</button>`).join('') : '<span class="ohint">Toca els números en ordre</span>';
  $$('#obank .chipn').forEach(b => b.classList.toggle('used', LS.order.includes(+b.dataset.i)));
  $('#chk').disabled = LS.order.length < e.items.length;
}
const PRAISE = ['Molt bé!', 'Genial!', 'Correcte!', 'Fantàstic!', 'Ben fet!', 'Increïble!', 'Així es fa!', 'Perfecte!'];
const OOPS = ['Gairebé!', 'Ui, per poc!', 'No passa res!', 'Quasi quasi!'];
function ansText(e) {
  if (e.type === 'choice') return e.opts[e.ans];
  if (e.type === 'input') return fmt(e.ans) + (e.unit ? ' ' + e.unit : '');
  return e.ans.map(fmt).join(e.ans[0] > e.ans[1] ? ' > ' : ' < ');
}
function check() {
  if (!LS) return;
  if (LS.state === 'fb') return nextEx();
  const e = LS.cur; let ok;
  if (e.type === 'choice') { if (LS.sel == null) return; ok = LS.sel === e.ans; }
  else if (e.type === 'input') { if (!LS.input) return; ok = +LS.input === e.ans; }
  else { if (LS.order.length < e.items.length) return; ok = LS.order.map(i => e.items[i]).join() === e.ans.join(); }
  LS.state = 'fb';
  record(e.sk, ok);
  if (e.type === 'choice') $$('.opt').forEach((b, i) => { b.disabled = true; if (i === e.ans) b.classList.add('right'); else if (i === LS.sel) b.classList.add('wrong'); });
  if (e.type === 'input') $('#inbox').classList.add(ok ? 'right' : 'wrong');
  if (e.type === 'order') $('#oslots').classList.add(ok ? 'right' : 'wrong');
  $$('.pad button').forEach(b => { if (!b.classList.contains('pk-ok')) b.disabled = true; });
  const foot = $('#foot'), fb = $('#fb'), chk = $('#chk');
  foot.classList.add(ok ? 'ok' : 'ko');
  if (ok) {
    LS.done++; LS.combo++; SFX.ok();
    $('.pfill').style.width = (LS.done / LS.total * 100) + '%';
    fb.innerHTML = `<div class="fbh">✔ ${LS.combo >= 3 ? `Ratxa de ${LS.combo}! 🔥` : pick(PRAISE)}</div>${e.long || e.retry ? `<div class="exp">${e.ex || ''}</div>` : ''}`;
  } else {
    LS.miss++; LS.combo = 0; SFX.ko();
    const n = genEx(e.sk, e.L, LS.seen); n.retry = true; LS.queue.push(n);
    fb.innerHTML = `<div class="fbh">✖ ${pick(OOPS)}</div><div class="ans">Resposta correcta: <b>${ansText(e)}</b></div>${e.ex ? `<div class="exp">💡 ${e.ex}</div>` : ''}`;
  }
  $('#buddy').innerHTML = charSVG(P.companion, ok ? 'happy' : 'sad', P.acc);
  const cb = $('#combo'); cb.innerHTML = `🔥<b>${LS.combo}</b>`; cb.classList.toggle('on', LS.combo >= 2); if (ok && LS.combo >= 2) { cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); }
  chk.textContent = 'CONTINUA'; chk.disabled = false; chk.className = 'btn check ' + (ok ? 'okb' : 'kob');
  foot.scrollIntoView({ block: 'nearest' });
  save();
}
function quitRun() {
  ask("Segur que vols sortir? Perdràs el progrés d'aquesta lliçó.", 'SURT', 'CONTINUA AQUÍ', () => go('home'));
}

/* ---------- Final de lliçó i recompenses ---------- */
const BADGES = [
  ['first', '🚀', 'Primer pas', 'Completa la teva primera lliçó', p => p.stats.lessons >= 1],
  ['perfect', '💯', 'Perfecte!', 'Fes una lliçó sense cap error', p => p.stats.perfect >= 1],
  ['perfect10', '🎯', 'Punteria fina', 'Fes 10 lliçons perfectes', p => p.stats.perfect >= 10],
  ['combo10', '⚡', 'Imparable', 'Encerta 10 respostes seguides', p => p.stats.bestCombo >= 10],
  ['combo30', '🌪️', 'Huracà', 'Encerta 30 respostes seguides', p => p.stats.bestCombo >= 30],
  ['streak3', '🔥', 'Foc encès', 'Practica 3 dies seguits', p => p.best >= 3],
  ['streak7', '☄️', 'Setmana de foc', 'Practica 7 dies seguits', p => p.best >= 7],
  ['streak30', '🌋', 'Volcà', 'Practica 30 dies seguits', p => p.best >= 30],
  ['xp100', '⭐', '100 XP', "Aconsegueix 100 punts d'experiència", p => p.xp >= 100],
  ['xp500', '🌟', '500 XP', "Aconsegueix 500 punts d'experiència", p => p.xp >= 500],
  ['xp2000', '💫', '2.000 XP', "Aconsegueix 2.000 punts d'experiència", p => p.xp >= 2000],
  ['unit1', '🗺️', 'Primera unitat', "Supera el repte d'una unitat", p => unitsDone(p) >= 1],
  ['unit4', '🧭', 'Mig camí', 'Supera 4 unitats', p => unitsDone(p) >= 4],
  ['unit8', '👑', 'Tot el camí', 'Supera les 8 unitats', p => unitsDone(p) >= 8],
  ['friends3', '🤝', 'Bona colla', 'Aconsegueix 3 companys', p => p.owned.length >= 3],
  ['friends5', '🎉', 'Tota la colla', 'Aconsegueix els 5 companys', p => p.owned.length >= 5],
  ['style', '🎩', 'Amb estil', 'Aconsegueix un accessori', p => p.accOwned.length >= 1],
  ['train5', '🏋️', 'Entrenament', 'Fes 5 entrenaments', p => p.stats.trains >= 5],
  ['sprint15', '⏱️', 'Llampec', 'Fes 15 encerts en una contrarellotge', p => p.stats.sprintBest >= 15],
  ['sprint30', '🏎️', 'Supersònic', 'Fes 30 encerts en una contrarellotge', p => p.stats.sprintBest >= 30],
  ['ans500', '🧮', 'Calculadora humana', 'Respon 500 preguntes', p => p.stats.answers >= 500]
];
function checkBadges() {
  const nw = BADGES.filter(b => !P.badges.includes(b[0]) && b[4](P));
  nw.forEach(b => { P.badges.push(b[0]); P.gems += 10; });
  return nw;
}
function finishRun() {
  const R = { mode: LS.mode, ui: LS.ui, li: LS.li, secs: Math.round((Date.now() - LS.t0) / 1000), acc: Math.round(100 * LS.total / (LS.total + LS.miss)), perfect: LS.miss === 0, stars: 0, chest: 0 };
  if (R.mode === 'train') { R.xp = 8 + (R.perfect ? 4 : 0); R.gems = 3 + (R.perfect ? 2 : 0); P.stats.trains++; }
  else {
    R.xp = 10 + (R.perfect ? 5 : 0) + (R.mode === 'repte' ? 10 : 0); R.gems = 5 + (R.perfect ? 5 : 0);
    R.stars = R.perfect ? 3 : LS.miss <= 2 ? 2 : 1;
    const pr = prog(R.ui), first = !pr.stars[R.li];
    pr.stars[R.li] = Math.max(pr.stars[R.li], R.stars);
    if (R.mode === 'repte' && first) R.chest = ri(30, 50);
    P.stats.lessons++; if (R.perfect) P.stats.perfect++;
  }
  LS = null;
  reward(R);
}
function reward(R) {
  const lv0 = lvlOf(P.xp);
  addXP(R.xp); P.gems += R.gems + R.chest;
  R.streakUp = touchStreak();
  R.lvUp = lvlOf(P.xp) > lv0 ? lvlOf(P.xp) : 0;
  if (R.lvUp) P.gems += 10;
  R.newB = checkBadges();
  save();
  FLOW = [() => scrResult(R)];
  if (R.streakUp) FLOW.push(scrStreak);
  if (R.chest) FLOW.push(() => scrChest(R));
  if (R.lvUp) FLOW.push(() => scrLevel(R.lvUp));
  if (R.newB.length) FLOW.push(() => scrBadges(R.newB));
  flowNext();
}
function flowNext() { closeModal(); const f = FLOW.shift(); if (f) f(); else go('home'); }
function countUp() {
  $$('[data-count]').forEach(el => {
    const to = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now();
    (function step(t) { const k = Math.min(1, (t - t0) / 800); el.textContent = Math.round(to * (1 - (1 - k) ** 3)) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
  });
}
function scrResult(R) {
  const title = R.mode === 'sprint' ? 'Temps!' : R.perfect ? 'Lliçó perfecta!' : R.mode === 'train' ? 'Entrenament fet!' : 'Lliçó completada!';
  const sub = R.mode === 'sprint' ? (R.record ? '🏆 Nou rècord personal!' : `El teu rècord: ${P.stats.sprintBest}`) : R.perfect ? 'Ni un sol error. Ets imparable!' : 'Cada error és una oportunitat per aprendre.';
  const third = R.mode === 'sprint' ? `<div class="rs acc"><span>ENCERTS</span><b data-count="${R.score}">0</b></div>` : `<div class="rs acc"><span>PRECISIÓ</span><b data-count="${R.acc}" data-suf="%">0</b></div>`;
  app.innerHTML = `<div class="scr"><div class="rchar">${charSVG(P.companion, 'happy', P.acc)}</div>
    <h1>${title}</h1><p class="sub">${sub}</p>
    ${R.stars ? `<div class="bigstars">${[1, 2, 3].map(i => `<i class="${i <= R.stars ? 'on' : ''}" style="animation-delay:${.25 + i * .22}s">★</i>`).join('')}</div>` : ''}
    <div class="rstats"><div class="rs xp"><span>XP</span><b data-count="${R.xp}">0</b></div><div class="rs gem"><span>CRISTALLS</span><b data-count="${R.gems}">0</b></div>${third}</div>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  countUp(); SFX.win(); if (R.perfect || R.record) confetti();
}
function scrStreak() {
  const DOW = ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'], now = new Date(), wd = (now.getDay() + 6) % 7, days = [];
  for (let i = 0; i < 7; i++) { const d = new Date(now); d.setDate(now.getDate() - wd + i); const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; days.push(`<div class="wd ${P.days.includes(k) ? 'on' : ''} ${i === wd ? 'today' : ''}"><span>${DOW[i]}</span><i>${P.days.includes(k) ? '🔥' : ''}</i></div>`); }
  app.innerHTML = `<div class="scr"><div class="flame">🔥</div><div class="snum" data-count="${P.streak}">0</div>
    <h1>${P.streak === 1 ? 'Has encès la ratxa!' : `${P.streak} dies seguits!`}</h1>
    <p class="sub">${P.streak === 1 ? 'Torna demà per fer-la créixer.' : 'Practicar una mica cada dia és el gran secret.'}</p>
    <div class="week">${days.join('')}</div><button class="btn big orange" onclick="flowNext()">CONTINUA</button></div>`;
  countUp(); SFX.coin();
}
const chestSVG = () => `<svg viewBox="0 0 160 140" class="chestsvg"><ellipse cx="80" cy="130" rx="60" ry="7" fill="#000" opacity=".12"/>
  <rect x="22" y="64" width="116" height="62" rx="10" fill="#B86B2E"/><rect x="22" y="64" width="116" height="12" fill="#9A5522"/>
  <rect x="38" y="64" width="12" height="62" fill="#FFC93C"/><rect x="110" y="64" width="12" height="62" fill="#FFC93C"/>
  <g class="lid"><path d="M22 68 Q22 28 80 28 Q138 28 138 68Z" fill="#D07D3A"/><path d="M38 34 Q44 31 50 30 L50 68 L38 68Z" fill="#FFC93C"/><path d="M110 30 Q116 31 122 34 L122 68 L110 68Z" fill="#FFC93C"/></g>
  <rect x="69" y="58" width="22" height="26" rx="5" fill="#FFC93C" stroke="#E0A300" stroke-width="3"/><circle cx="80" cy="69" r="3.5" fill="#8A5A00"/></svg>`;
function scrChest(R) {
  const nx = UNITS[R.ui + 1];
  app.innerHTML = `<div class="scr"><h1>Repte superat!</h1><p class="sub">Toca el cofre per obrir-lo</p>
    <button class="chest wiggle" id="chest" onclick="openChest()" aria-label="Obre el cofre">${chestSVG()}</button>
    <div id="chestOut" class="chestout" hidden><div class="loot">+${R.chest} 💎</div>
    <p>${nx ? `Nova unitat desbloquejada: <b>${nx.title}</b>` : 'Has completat tot el camí! Ets una llegenda de les mates!'}</p>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div></div>`;
}
function openChest() {
  const c = $('#chest'); if (c.classList.contains('open')) return;
  c.classList.remove('wiggle'); c.classList.add('open'); SFX.win(); confetti(180);
  setTimeout(() => { $('#chestOut').hidden = false; }, 450);
}
function scrLevel(l) {
  app.innerHTML = `<div class="scr"><div class="lvbadge">${l}</div><h1>Has pujat al nivell ${l}!</h1><p class="sub">+10 💎 de regal. Continua així!</p><div class="rchar">${charSVG(P.companion, 'happy', P.acc)}</div><button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  SFX.win(); confetti(90);
}
function scrBadges(list) {
  app.innerHTML = `<div class="scr"><h1>${list.length > 1 ? 'Noves medalles!' : 'Nova medalla!'}</h1><p class="sub">Cada medalla et dona +10 💎</p>
    <div class="newb">${list.map(b => `<div class="badge on pop"><div class="bi">${b[1]}</div><b>${b[2]}</b><span>${b[3]}</span></div>`).join('')}</div>
    <button class="btn big" onclick="flowNext()">CONTINUA</button></div>`;
  SFX.coin();
}

/* ---------- Entrena ---------- */
function renderTrain() {
  const units = UNITS.map((u, i) => ({ u, i })).filter(({ i }) => unitOpen(i) && trainPool(i).length);
  app.innerHTML = shell(`<h1 class="ph1">Entrena</h1><p class="lead">Practica el que ja has après per no oblidar-ho.</p>
    <button class="tcard" onclick="startTrain()"><span class="ti">🧠</span><span><b>Entrenament intel·ligent</b><small>8 exercicis del que et costa més. Ideal per repassar.</small></span></button>
    <button class="tcard sp" onclick="startSprint()"><span class="ti">⏱️</span><span><b>Contrarellotge</b><small>60 segons de càlcul mental. El teu rècord: ${P.stats.sprintBest} encerts.</small></span></button>
    <h2 class="h2">Repassa una unitat</h2>
    ${units.length ? units.map(({ u, i }) => `<button class="ucard" style="--uc:${u.color}" onclick="startTrain(${i})"><span class="uic">${charSVG(u.guide, 'idle')}</span><span><b>${u.title}</b><small>Unitat ${i + 1}</small></span><span class="go">›</span></button>`).join('') : '<p class="empty">Quan acabis la primera lliçó del camí, aquí podràs repassar-la.</p>'}`, 'train');
}
function sprintQ() {
  const maxU = UNITS.reduce((m, u, i) => unitOpen(i) ? i : m, 0), kinds = ['add', 'sub', 'mul'];
  if (maxU >= 3) kinds.push('div');
  let a, b;
  switch (pick(kinds)) {
    case 'add': a = ri(10, 89); b = ri(2, maxU >= 1 ? 40 : 9); return { q: `${a} + ${b}`, ans: a + b };
    case 'sub': a = ri(20, 99); b = ri(2, Math.min(a - 1, maxU >= 1 ? 40 : 9)); return { q: `${a} − ${b}`, ans: a - b };
    case 'mul': a = ri(2, 10); b = ri(2, 10); return { q: `${a} × ${b}`, ans: a * b };
    default: b = ri(2, 10); a = ri(2, 10); return { q: `${a * b} ÷ ${b}`, ans: a };
  }
}
function startSprint() {
  SP = { t0: Date.now(), dur: 60000, score: 0, miss: 0, input: '', busy: false };
  app.innerHTML = `<div class="lesson sprint"><div class="l-top"><button class="xbtn" onclick="go('train')" aria-label="Surt">✕</button>
    <div class="pbar time"><div class="pfill" id="tbar" style="width:100%"></div></div><div class="combo on">✅<b id="sc">0</b></div></div>
    <div class="l-body"><div class="sq" id="sq"></div><div class="inbox" id="inbox"><span id="inval" class="ph">?</span></div>${padHTML('skey')}</div></div>`;
  nextSprint();
  SP.timer = setInterval(() => {
    const left = Math.max(0, 1 - (Date.now() - SP.t0) / SP.dur);
    $('#tbar').style.width = left * 100 + '%'; $('#tbar').classList.toggle('low', left < .2);
    if (left <= 0) endSprint();
  }, 100);
}
function nextSprint() { SP.cur = sprintQ(); SP.input = ''; SP.busy = false; $('#sq').textContent = SP.cur.q + ' = ?'; updSprint(); $('#inbox').className = 'inbox'; }
function updSprint() { const el = $('#inval'); el.textContent = SP.input || '?'; el.classList.toggle('ph', !SP.input); }
function skey(k) {
  if (!SP || SP.busy) return;
  const ansS = String(SP.cur.ans);
  if (k === 'del') { SP.input = SP.input.slice(0, -1); return updSprint(); }
  if (k !== 'ok') { SP.input += k; updSprint(); }
  if (SP.input === ansS) {
    SP.score++; record('sprint', true); SFX.ok(); $('#sc').textContent = SP.score; $('#inbox').classList.add('right');
    SP.busy = true; setTimeout(() => SP && nextSprint(), 220);
  } else if (k === 'ok' ? SP.input.length > 0 : SP.input.length >= ansS.length) {
    SP.miss++; record('sprint', false); SFX.ko(); $('#inbox').classList.add('wrong'); $('#inval').textContent = ansS;
    SP.busy = true; setTimeout(() => SP && nextSprint(), 900);
  }
}
function stopSprint() { if (SP && SP.timer) clearInterval(SP.timer); SP = null; }
function endSprint() {
  const score = SP.score; stopSprint();
  const record = score > P.stats.sprintBest; if (record) P.stats.sprintBest = score;
  reward({ mode: 'sprint', score, record, xp: Math.max(2, score), gems: Math.floor(score / 3), chest: 0, perfect: false });
}

/* ---------- Botiga ---------- */
function renderShop() {
  const comp = Object.keys(CH).map(id => {
    const c = CH[id], own = P.owned.includes(id), sel = P.companion === id;
    const btn = sel ? `<button class="btn sm ghost" disabled>AMB TU</button>` : own ? `<button class="btn sm" onclick="choose('${id}')">TRIA</button>` : `<button class="btn sm gold" ${P.gems < c.price ? 'disabled' : ''} onclick="buyChar('${id}')">💎 ${c.price}</button>`;
    return `<div class="item ${sel ? 'sel' : ''} ${own ? '' : 'nown'}"><div class="ipic">${charSVG(id, sel ? 'happy' : 'idle', own ? P.acc : null)}</div><div class="iname">${c.name}</div><div class="idesc">${c.desc}</div>${btn}</div>`;
  }).join('');
  const acc = Object.keys(ACC).map(id => {
    const a = ACC[id], own = P.accOwned.includes(id), on = P.acc[a.slot] === id;
    const btn = own ? `<button class="btn sm ${on ? 'ghost' : ''}" onclick="toggleAcc('${id}')">${on ? 'TREU' : 'POSA'}</button>` : `<button class="btn sm gold" ${P.gems < a.price ? 'disabled' : ''} onclick="buyAcc('${id}')">💎 ${a.price}</button>`;
    return `<div class="item ${on ? 'sel' : ''}"><div class="ipic">${charSVG(P.companion, 'idle', { [a.slot]: id })}</div><div class="iname">${a.name}</div>${btn}</div>`;
  }).join('');
  app.innerHTML = shell(`<h1 class="ph1">Botiga</h1><p class="lead">Guanya cristalls 💎 fent lliçons i canvia'ls per companys i accessoris.</p>
    <h2 class="h2">Companys</h2><div class="grid">${comp}</div>
    <h2 class="h2">Accessoris <small>per al teu company</small></h2><div class="grid">${acc}</div>
    <h2 class="h2">Ajudes</h2><div class="item wide"><div class="ipic big-emoji">🧊</div><div><div class="iname">Protector de ratxa</div><div class="idesc">Si un dia no pots practicar, la ratxa no s'apaga. En tens ${P.freeze} de 2.</div></div>
    <button class="btn sm gold" ${P.gems < 50 || P.freeze >= 2 ? 'disabled' : ''} onclick="buyFreeze()">💎 50</button></div>`, 'shop');
}
function buyChar(id) {
  const c = CH[id]; if (P.gems < c.price || P.owned.includes(id)) return;
  P.gems -= c.price; P.owned.push(id); P.companion = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(100); renderShop();
  modal(`<div class="sheet card cent"><div class="mchar">${charSVG(id, 'happy', P.acc)}</div><h3>${c.name} s'uneix a la colla!</h3><p>«${c.hello}»</p><button class="btn big" onclick="closeModal()">GENIAL!</button></div>`, true);
  nb.forEach(b => toast(`${b[1]} Nova medalla: <b>${b[2]}</b> (+10 💎)`));
}
function choose(id) { P.companion = id; save(); SFX.tap(); renderShop(); }
function buyAcc(id) {
  const a = ACC[id]; if (P.gems < a.price || P.accOwned.includes(id)) return;
  P.gems -= a.price; P.accOwned.push(id); P.acc[a.slot] = id;
  const nb = checkBadges(); save(); SFX.coin(); confetti(60); renderShop();
  toast(`${a.name} per al teu company! ✨`); nb.forEach(b => setTimeout(() => toast(`${b[1]} Nova medalla: <b>${b[2]}</b> (+10 💎)`), 900));
}
function toggleAcc(id) { const s = ACC[id].slot; if (P.acc[s] === id) delete P.acc[s]; else P.acc[s] = id; save(); SFX.tap(); renderShop(); }
function buyFreeze() { if (P.gems < 50 || P.freeze >= 2) return; P.gems -= 50; P.freeze++; save(); SFX.coin(); renderShop(); toast('🧊 Protector de ratxa preparat!'); }

/* ---------- Medalles ---------- */
function renderBadges() {
  const got = BADGES.filter(b => P.badges.includes(b[0])).length;
  app.innerHTML = shell(`<h1 class="ph1">Medalles</h1><p class="lead">N'has aconseguit <b>${got}</b> de ${BADGES.length}. Cada una val +10 💎.</p>
    <div class="bgrid">${BADGES.map(b => { const on = P.badges.includes(b[0]); return `<div class="badge ${on ? 'on' : ''}"><div class="bi">${on ? b[1] : '🔒'}</div><b>${b[2]}</b><span>${b[3]}</span></div>`; }).join('')}</div>`, 'badges');
}

/* ---------- Perfil ---------- */
function renderProfile() {
  const l = lvlOf(P.xp), a = xpFor(l), b = xpFor(l + 1), s = P.stats, acc = s.answers ? Math.round(100 * s.correct / s.answers) : 0;
  const rows = UNITS.map((u, i) => {
    const sks = new Set(u.lessons.flatMap(x => x.sk)); let c = 0, t = 0;
    sks.forEach(k => { const v = s.sk[k]; if (v) { c += v[0]; t += v[1]; } });
    const st = prog(i).stars, done = st.filter(x => x).length, pc = t ? Math.round(100 * c / t) : 0;
    return `<div class="urow" style="--uc:${u.color}"><div class="un"><b>${i + 1}. ${u.title}</b><small>${done}/6 fetes · ${t ? pc + '% d\'encerts' : 'encara no'}</small></div><div class="ubar"><div style="width:${done / 6 * 100}%"></div></div></div>`;
  }).join('');
  app.innerHTML = shell(`<div class="phead"><div class="pchar">${charSVG(P.companion, 'happy', P.acc)}</div><div><h1>${esc(P.name)}</h1><div class="plv">Nivell ${l} · ${P.xp} XP</div><div class="lbar"><div style="width:${Math.min(100, (P.xp - a) / (b - a) * 100)}%"></div></div><small class="mut">${b - P.xp} XP per al nivell ${l + 1}</small></div></div>
    <div class="sgrid">
      <div class="st"><b>🔥 ${streakNow()}</b><span>ratxa actual</span></div><div class="st"><b>🏆 ${P.best}</b><span>millor ratxa</span></div>
      <div class="st"><b>📚 ${s.lessons}</b><span>lliçons</span></div><div class="st"><b>🎯 ${acc}%</b><span>d'encerts</span></div>
      <div class="st"><b>💯 ${s.perfect}</b><span>perfectes</span></div><div class="st"><b>⚡ ${s.bestCombo}</b><span>millor ratxa d'encerts</span></div></div>
    <h2 class="h2">Progrés per unitat</h2><div class="urows">${rows}</div>
    <h2 class="h2">Ajustos</h2>
    <div class="set"><span>Objectiu diari</span><div class="seg">${[10, 20, 30, 50].map(g => `<button class="${P.goal === g ? 'on' : ''}" onclick="setGoal(${g})">${g} XP</button>`).join('')}</div></div>
    <div class="set"><span>Sons</span><button class="tog ${P.sound ? 'on' : ''}" onclick="P.sound=!P.sound;save();renderProfile()" aria-label="Sons"><i></i></button></div>
    <div class="set"><span>Mode mestre<small>Obre totes les unitats per treballar a classe.</small></span><button class="tog ${P.unlockAll ? 'on' : ''}" onclick="P.unlockAll=!P.unlockAll;save();renderProfile()" aria-label="Mode mestre"><i></i></button></div>
    <div class="row2 pbtns"><button class="btn ghost" onclick="go('profiles')">CANVIA D'ALUMNE</button><button class="btn ghost redt" onclick="resetP()">ESBORRA EL PROGRÉS</button></div>
    <p class="foot">Mates amb Numi · Algorithmics Lleida<br>El progrés es desa en aquest dispositiu.</p>`, 'profile');
}
function setGoal(g) { P.goal = g; save(); renderProfile(); }
function resetP() { ask(`Segur que vols esborrar tot el progrés de <b>${esc(P.name)}</b>? No es pot desfer.`, 'ESBORRA', 'CANCEL·LA', () => { Object.assign(P, freshProgress()); save(); go('home'); }); }

/* ---------- Alumnes ---------- */
function renderProfiles() {
  const ps = Object.values(DB.profiles);
  app.innerHTML = `<div class="page solo"><h1 class="ph1 c">Qui aprèn avui?</h1>
    <div class="plist">${ps.map(p => `<div class="pcard"><button class="pmain" onclick="switchP('${p.id}')"><span class="pav">${charSVG(p.companion, 'idle', p.acc)}</span><span><b>${esc(p.name)}</b><small>Nivell ${lvlOf(p.xp)} · 🔥 ${p.streak} · 💎 ${p.gems}</small></span></button><button class="pdel" onclick="delP('${p.id}')" aria-label="Esborra">🗑</button></div>`).join('')}</div>
    <button class="btn big" onclick="renderOnboard()">+ NOU ALUMNE</button></div>`;
}
function switchP(id) { P = DB.profiles[id]; DB.current = id; save(); go('home'); }
function delP(id) {
  ask(`Vols esborrar l'alumne <b>${esc(DB.profiles[id].name)}</b> i tot el seu progrés?`, 'ESBORRA', 'CANCEL·LA', () => {
    delete DB.profiles[id]; if (DB.current === id) { DB.current = null; P = null; } save();
    Object.keys(DB.profiles).length ? renderProfiles() : renderOnboard();
  });
}
function renderOnboard() {
  app.innerHTML = `<div class="page solo onb"><div class="onb-char">${charSVG('numi', 'happy')}</div>
    <div class="bubble big">Hola! Soc en <b>Numi</b>. T'acompanyaré pas a pas perquè les mates et surtin rodones. <b>Com et dius?</b></div>
    <input id="nm" class="nm" maxlength="16" placeholder="El teu nom" autocomplete="off" enterkeyhint="go">
    <button class="btn big" onclick="createP()">SOM-HI!</button>
    ${Object.keys(DB.profiles).length ? `<button class="link" onclick="renderProfiles()">Tornar</button>` : ''}</div>`;
  const i = $('#nm'); i.focus(); i.addEventListener('keydown', e => { if (e.key === 'Enter') createP(); });
}
function createP() {
  const n = $('#nm').value.trim();
  if (!n) { $('#nm').classList.add('shake'); setTimeout(() => $('#nm').classList.remove('shake'), 500); return; }
  newProfile(n); go('home');
  modal(`<div class="sheet card cent"><h3>Benvingut/da, ${esc(n)}!</h3>
    <ul class="how"><li><span>🗺️</span>Segueix el camí: cada lliçó en desbloqueja una altra.</li><li><span>⭐</span>Guanya XP i estrelles. Sense errors, 3 estrelles!</li><li><span>💎</span>Amb els cristalls, aconsegueix nous companys a la botiga.</li><li><span>🔥</span>Practica cada dia per fer créixer la ratxa.</li></ul>
    <button class="btn big" onclick="closeModal()">ENTESOS!</button></div>`, true);
}

/* ---------- Teclat ---------- */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (SP) { if (/^\d$/.test(e.key)) skey(e.key); else if (e.key === 'Backspace') skey('del'); else if (e.key === 'Enter') skey('ok'); return; }
  if (!LS || $('.modal-bg')) return;
  if (e.key === 'Enter') { e.preventDefault(); return check(); }
  if (LS.state !== 'ask') return;
  const t = LS.cur.type;
  if (t === 'input') { if (/^\d$/.test(e.key)) key(e.key); else if (e.key === 'Backspace') key('del'); }
  else if (t === 'choice') { const n = +e.key; if (n >= 1 && n <= LS.cur.opts.length) pickOpt(n - 1); }
  else if (t === 'order') { if (e.key === 'Backspace' && LS.order.length) ordRemove(LS.order.length - 1); else { const n = +e.key; if (n >= 1 && n <= LS.cur.items.length) ordTap(n - 1); } }
});

go(P ? 'home' : 'onboard');
