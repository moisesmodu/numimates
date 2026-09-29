/* ---------- Batalles de mates ----------
   Duel 1 contra 1 (cadascú juga quan pot, 48 h) i partida de grup (fins a 10, tots alhora).
   Tothom rep les mateixes 10 preguntes: surten de la llavor de la batalla.
   Guanya qui n'encerta més; si hi ha empat, qui ha trigat menys (només compta el temps de pensar). */
const BQ = 10, BCAP = 5, DUEL_COST = 10;
let BT = null;
function seeded(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function withSeed(seed, fn) { const r = Math.random; Math.random = seeded(seed); try { return fn(); } finally { Math.random = r; } }
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
const ordN = n => L(n + ({ 1: 'r', 2: 'n', 3: 'r', 4: 't' }[n] || 'è'), n + 'º');
const secs = ms => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const bApi = (action, extra = {}) => api('battle', { action, code: P.code, name: P.name, companion: P.companion, ...extra });
const cardById = id => STK.find(s => s[0] === id);
const BERR = e => ({ 'no-existeix': L("Aquest codi no existeix. Revisa'l!", 'Ese código no existe. ¡Revísalo!'), caducada: L('Aquesta batalla ja ha acabat.', 'Esta batalla ya ha terminado.'), 'començada': L('Aquesta partida ja ha començat.', 'Esta partida ya ha empezado.'), plena: L('Aquesta batalla ja és plena.', 'Esta batalla ya está llena.'), massa: L('Has creat moltes batalles. Espera una estona.', 'Has creado muchas batallas. Espera un rato.'), sols: L('Cal almenys un altre jugador.', 'Hace falta al menos otro jugador.') })[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
// Bucle de consulta lligat a la pantalla: s'atura sol quan canvies de pantalla
// Només un bucle per clau: en repintar la pantalla no se n'engega un altre (abans es multiplicaven)
const BLOOPS = new Set();
function bLoop(key, fn, every = 2000) {
  if (BLOOPS.has(key)) return; BLOOPS.add(key);
  const live = () => !!document.querySelector(`[data-bk="${key}"]`);
  const tick = async () => { if (!live()) return BLOOPS.delete(key); try { await fn(live); } catch (e) { } if (live()) setTimeout(tick, every); else BLOOPS.delete(key); };
  setTimeout(tick, every);
}

function battleRewardsHTML() {
  return `<div class="brules">
    <div><b>⚔️ ${L('Duel', 'Duelo')}</b> ${L(`Entrar costa ${DUEL_COST} 💎. Qui guanya s'emporta 30 💎. Si ningú accepta el duel, et tornem els ${DUEL_COST} 💎.`, `Entrar cuesta ${DUEL_COST} 💎. Quien gana se lleva 30 💎. Si nadie acepta el duelo, te devolvemos los ${DUEL_COST} 💎.`)}</div>
    <div><b>🏟️ ${L('Partida de grup', 'Partida de grupo')}</b> ${L('1r: 50 💎 · 2n: 30 💎 · 3r: 20 💎 · la resta: 10 💎.', '1º: 50 💎 · 2º: 30 💎 · 3º: 20 💎 · el resto: 10 💎.')}</div>
    <div><b>🏆 ${L('Carta de Nike', 'Carta de Nike')}</b> ${L('La deessa de la victòria es compra a la botiga amb els diamants de les batalles.', 'La diosa de la victoria se compra en la tienda con los diamantes de las batallas.')}</div>
    <div class="bfine">${L(`Tothom rep 15 XP per jugar. Premis de batalla: fins a ${BCAP} al dia.`, `Todos reciben 15 XP por jugar. Premios de batalla: hasta ${BCAP} al día.`)}</div></div>`;
}
function renderBattles() {
  VIEW = 'battles';
  if (!P.code) { toast(L('Per jugar batalles cal connexió a internet.', 'Para jugar batallas hace falta conexión a internet.')); return go('train'); }
  app.innerHTML = shell(`<div data-bk="hub"><h1 class="ph1">${L('Batalles de mates', 'Batallas de mates')}</h1>
    <p class="lead">${L("Tothom té les mateixes 10 preguntes. Guanya qui n'encerta més i, si hi ha empat, <b>el més ràpid</b>.", 'Todos tienen las mismas 10 preguntas. Gana quien acierta más y, si hay empate, <b>el más rápido</b>.')}</p>
    <button class="tcard duel" onclick="newBattle('duel')"><span class="ti">⚔️</span><span><b>${L('Duel 1 contra 1', 'Duelo 1 contra 1')}</b><small>${L('Reta un amic amb un codi. Cadascú juga quan pot i qui guanya s\'emporta els diamants.', 'Reta a un amigo con un código. Cada uno juega cuando puede y quien gana se lleva los diamantes.')}</small></span><span class="bcost">${DUEL_COST} 💎</span></button>
    <button class="tcard party" onclick="newBattle('party')"><span class="ti">🏟️</span><span><b>${L('Partida de grup', 'Partida de grupo')}</b><small>${L('Fins a 10 jugadors. Tothom comença alhora!', 'Hasta 10 jugadores. ¡Todos empiezan a la vez!')}</small></span></button>
    <div class="joinbox"><input id="bcin" class="nm" placeholder="${L('Tens un codi? ZEUS-1234', '¿Tienes un código? ZEUS-1234')}" maxlength="12" autocapitalize="characters" onkeydown="if(event.key==='Enter')joinBattle(this.value)"><button class="btn" onclick="joinBattle($('#bcin').value)">${L('ENTRA', 'ENTRA')}</button></div>
    <h2 class="h2">${L('Premis', 'Premios')}</h2>${battleRewardsHTML()}
    <h2 class="h2">${L('Les meves batalles', 'Mis batallas')}</h2><div id="bmine"><p class="empty">…</p></div></div>`, 'train');
  loadMine();
}
async function loadMine() {
  let r; try { r = await bApi('mine'); } catch (e) { return; }
  const el = $('#bmine'); if (!el) return;
  const list = (r.list || []).filter(Boolean); list.forEach(duelRefund);
  el.innerHTML = list.length ? list.map(st => {
    const me = st.players.find(p => p.me), others = st.players.filter(p => !p.me).map(p => esc(p.name)).join(', ') || L('esperant rival…', 'esperando rival…');
    const tag = st.over ? (me.pos === 1 ? `<span class="btag win">🏆 ${L('Guanyada', 'Ganada')}</span>` : `<span class="btag">${ordN(me.pos)}</span>`) : st.expired ? `<span class="btag">${L('Caducada', 'Caducada')}</span>` : me.finished ? `<span class="btag wait">⏳ ${L('Esperant', 'Esperando')}</span>` : `<span class="btag go">▶ ${L('Per jugar', 'Por jugar')}</span>`;
    const claim = st.over && !(P.bclaim || {})[st.code] ? `<span class="btag gift">🎁</span>` : '';
    return `<button class="ucard bitem" onclick="openBattle('${st.code}')"><span class="bic">${st.kind === 'duel' ? '⚔️' : '🏟️'}</span><span><b>${st.code}</b><small>${tx(COURSES[st.course].long)} · ${L('amb', 'con')} ${others}</small></span>${claim}${tag}</button>`;
  }).join('') : `<p class="empty">${L('Encara no has jugat cap batalla. Crea un duel i envia el codi a un amic!', 'Todavía no has jugado ninguna batalla. ¡Crea un duelo y envía el código a un amigo!')}</p>`;
}

/* Crear i entrar */
function newBattle(kind) { if (classOff('batalles')) return toast(L('El teu docent ha desactivat les batalles per a la classe.', 'Tu docente ha desactivado las batallas para la clase.'));
  if (kind === 'duel' && P.gems < DUEL_COST) return noGems();
  const top = Math.max(P.maxCourse || 0, P.course);
  modal(`<div class="sheet"><h3>${kind === 'duel' ? L('Nou duel', 'Nuevo duelo') : L('Nova partida de grup', 'Nueva partida de grupo')}</h3>
    <p>${L('De quin nivell seran les preguntes?', '¿De qué nivel serán las preguntas?')}</p>
    <div class="cgrid">${COURSES.slice(0, top + 1).map((c, i) => `<button class="cbtn ${i === P.course ? 'on' : ''}" onclick="closeModal();createBattle('${kind}',${i})"><b>${tx(c.name)}</b><small>${tx(c.grade)}</small></button>`).join('')}</div>
    <button class="btn ghost big" onclick="closeModal()">${L('TORNA', 'VOLVER')}</button></div>`);
}
async function createBattle(kind, course) {
  toast(L('Creant la batalla…', 'Creando la batalla…'));
  let st; try { st = await bApi('create', { kind, course }); } catch (e) { return toast(BERR()); }
  if (st.error) return toast(BERR(st.error));
  SFX.win(); scrLobby(st);
}
async function joinBattle(raw) { if (classOff('batalles')) return toast(L('El teu docent ha desactivat les batalles per a la classe.', 'Tu docente ha desactivado las batallas para la clase.'));
  const bcode = String(raw || '').toUpperCase().replace(/\s+/g, '').replace(/^([A-Z]+)(\d{4})$/, '$1-$2');
  if (!/^[A-Z]{2,8}-\d{4}$/.test(bcode)) return toast(L('El codi és com ZEUS-1234.', 'El código es como ZEUS-1234.'));
  let st; try { st = await bApi('join', { bcode }); } catch (e) { return toast(BERR()); }
  if (st.error) { SFX.ko(); return toast(BERR(st.error)); }
  const me = st.players.find(p => p.me);
  if (st.kind === 'duel' && !me.done && !me.finished && !(P.bpaid || {})[st.code] && P.gems < DUEL_COST) return noGems();
  scrLobby(st);
}
function noGems() { SFX.ko(); toast(L(`Un duel costa ${DUEL_COST} 💎. Fes una lliçó i en guanyaràs!`, `Un duelo cuesta ${DUEL_COST} 💎. ¡Haz una lección y ganarás!`)); }
// Si un duel caduca sense rival, es tornen els diamants
function duelRefund(st) {
  P.bpaid = P.bpaid || {};
  if (st.kind !== 'duel' || !st.expired || st.players.length > 1 || P.bpaid[st.code] !== 1) return;
  P.bpaid[st.code] = 2; P.gems += DUEL_COST; save(); toast(L(`Ningú ha acceptat el duel ${st.code}: et tornem ${DUEL_COST} 💎`, `Nadie ha aceptado el duelo ${st.code}: te devolvemos ${DUEL_COST} 💎`));
}
async function openBattle(bcode) { if (classOff('batalles')) return toast(L('El teu docent ha desactivat les batalles per a la classe.', 'Tu docente ha desactivado las batallas para la clase.')); let st; try { st = await bApi('state', { bcode }); } catch (e) { return toast(BERR()); } if (st.error) return toast(BERR(st.error)); scrLobby(st); }
function shareBattle(code, kind) {
  const url = location.origin + '/?b=' + code;
  const t = kind === 'duel' ? L(`T'hi atreveixes? Et repto a un duel de mates a Numi Mates! Codi: ${code}`, '¿Te atreves? ¡Te reto a un duelo de mates en Numi Mates! Código: ' + code) : L(`Partida de mates a Numi Mates! Entra amb el codi ${code}`, `¡Partida de mates en Numi Mates! Entra con el código ${code}`);
  if (navigator.share) navigator.share({ text: t, url }).catch(() => { });
  else window.open('https://wa.me/?text=' + encodeURIComponent(t + ' ' + url), '_blank', 'noopener');
}

/* Sala d'espera / versus */
function playerChip(p, st) {
  return `<div class="bpl ${p.me ? 'me' : ''}"><div class="bpc">${charSVG(p.companion || 'numi', p.finished ? 'happy' : 'idle')}</div><b>${esc(p.name)}${p.me ? ` <small>(${L('tu', 'tú')})</small>` : ''}</b>
    <small>${p.finished ? `✅ ${p.correct}/${BQ}` : p.done ? `${p.done}/${BQ}…` : p.isHost ? '👑' : ''}</small></div>`;
}
function scrLobby(st) {
  BT = { st };
  const me = st.players.find(p => p.me);
  if (me.finished || st.over) return scrBattleWait(st);
  const duel = st.kind === 'duel', others = st.players.filter(p => !p.me);
  const key = 'lob' + st.code;
  let action;
  if (duel) action = `<button class="btn big" onclick="startBattle()">${(P.bpaid || {})[st.code] ? L('JUGA ARA', 'JUGAR AHORA') : L(`JUGA (${DUEL_COST} 💎)`, `JUGAR (${DUEL_COST} 💎)`)}</button><p class="sub small">${others.length ? L('Tens 48 hores per jugar.', 'Tienes 48 horas para jugar.') : L("No cal esperar: juga ara i el teu rival tindrà les mateixes preguntes quan entri.", 'No hace falta esperar: juega ahora y tu rival tendrá las mismas preguntas cuando entre.')}</p>`;
  else if (st.status === 'live') action = `<p class="sub">${L('Comencem!', '¡Empezamos!')}</p>`;
  else action = st.host ? `<button class="btn big" id="bstart" onclick="startParty()" ${st.players.length < 2 ? 'disabled' : ''}>${L('COMENÇA LA PARTIDA', 'EMPEZAR LA PARTIDA')}</button><p class="sub small">${L(`${st.players.length} de ${st.max} jugadors. Quan hi siguin tots, comença!`, `${st.players.length} de ${st.max} jugadores. ¡Cuando estén todos, empieza!`)}</p>` : `<p class="sub">⏳ ${L("Esperant que l'amfitrió comenci…", 'Esperando a que el anfitrión empiece…')}</p>`;
  app.innerHTML = `<div class="scr blobby" data-bk="${key}"><button class="xbtn bx" onclick="go('battles')" aria-label="${L('Surt', 'Salir')}">✕</button>
    <div class="bkind">${duel ? '⚔️ ' + L('DUEL', 'DUELO') + ` · ${DUEL_COST} 💎` : '🏟️ ' + L('PARTIDA DE GRUP', 'PARTIDA DE GRUPO')} · ${tx(COURSES[st.course].long).toUpperCase()}</div>
    <div class="bcode"><small>${L('Codi de la batalla', 'Código de la batalla')}</small><b>${st.code}</b></div>
    <button class="btn sm gold" onclick="shareBattle('${st.code}','${st.kind}')">📨 ${L('ENVIA EL CODI', 'ENVIAR EL CÓDIGO')}</button>
    <div class="bplayers ${duel ? 'vs' : ''}" id="bpls">${duel ? `${playerChip(me, st)}<div class="vsx">VS</div>${others[0] ? playerChip(others[0], st) : `<div class="bpl ghost"><div class="bpc q">?</div><b>${L('Rival', 'Rival')}</b><small>${L('encara no ha entrat', 'aún no ha entrado')}</small></div>`}` : st.players.map(p => playerChip(p, st)).join('')}</div>
    ${action}</div>`;
  if (!duel && st.status === 'live') return partyCountdown(st);
  bLoop(key, async live => {
    const n = await bApi('state', { bcode: st.code }); if (n.error || !live()) return;
    if (!duel && n.status === 'live') { BT.st = n; return partyCountdown(n); }
    if (n.players.length !== BT.st.players.length || n.players.some((p, i) => p.done !== BT.st.players[i]?.done || p.card !== BT.st.players[i]?.card)) { BT.st = n; scrLobby(n); }
  }, 2000);
}
async function startParty() {
  const b = $('#bstart'); if (b) b.disabled = true;
  let st; try { st = await bApi('start', { bcode: BT.st.code }); } catch (e) { return toast(BERR()); }
  if (st.error) { if (b) b.disabled = false; return toast(BERR(st.error)); }
  partyCountdown(st);
}
function partyCountdown(st) {
  BT.st = st;
  const t0 = Date.now() + Math.max(0, st.startIn || 0);
  app.innerHTML = `<div class="scr" data-bk="cd${st.code}"><div class="burst gold"></div><h1>${L('Preparats?', '¿Preparados?')}</h1><div class="bcount" id="bcount">…</div><p class="sub">${st.players.map(p => esc(p.name)).join(' · ')}</p></div>`;
  let last = null;
  const iv = setInterval(() => {
    const left = Math.ceil((t0 - Date.now()) / 1000), el = $('#bcount');
    if (!el) return clearInterval(iv);
    if (left <= 0) { clearInterval(iv); return startBattle(); }
    if (left !== last) { last = left; el.textContent = left; el.classList.remove('pop-in'); void el.offsetWidth; el.classList.add('pop-in'); SFX.tap(); }
  }, 100);
}

/* Jugar */
function startBattle() {
  const st = BT.st; closeModal();
  if (st.kind === 'duel') { P.bpaid = P.bpaid || {}; if (!P.bpaid[st.code]) { if (P.gems < DUEL_COST) return noGems(); P.gems -= DUEL_COST; P.bpaid[st.code] = 1; save(); toast(`−${DUEL_COST} 💎`); } }
  // si ja havia començat (ha tancat l'app a mitja partida), continua on era: no es poden repetir les preguntes per millorar el temps
  const me = st.players.find(p => p.me) || {}, done = Math.min(me.done || 0, BQ);
  LS = { mode: 'battle', bcode: st.code, kind: st.kind, color: st.kind === 'duel' ? '#C0392B' : '#1F7A8C', seen: new Set(), mix: true, queue: battlePlan(st).slice(done), total: BQ, done, miss: 0, combo: 0, maxCombo: 0, gold: 0, t0: Date.now(), res: [], bOk: me.correct || 0, bMs: me.ms || 0, q0: 0 };
  nextEx();
  const run = async () => { if (!LS || LS.bcode !== st.code) return; try { const n = await bApi('state', { bcode: st.code }); if (!n.error) { BT.st = n; battleStrip(); } } catch (e) { } setTimeout(run, 3000); };
  setTimeout(run, 3000);
}
function battleStrip() {
  const el = $('#bstrip'); if (!el || !BT) return;
  const ps = BT.st.players.filter(p => !p.me).sort((a, b) => b.done - a.done).slice(0, 4);
  el.innerHTML = ps.map(p => `<span class="bsp"><b>${esc(p.name)}</b><i style="width:${p.done / BQ * 100}%"></i></span>`).join('');
}
function battleAnswer(ok) {
  LS.bMs += Math.min(120000, Date.now() - LS.q0); if (ok) LS.bOk++;
  bApi('progress', { bcode: LS.bcode, done: LS.done, correct: LS.bOk, ms: LS.bMs }).catch(() => { });
}
async function finishBattle() {
  const code = LS.bcode, body = { bcode: code, done: BQ, correct: LS.bOk, ms: LS.bMs, finished: true };
  P.stats.games++; LS = null; save();
  let st = null;
  for (let t = 0; t < 3 && !st; t++) { try { const r = await bApi('progress', body); if (!r.error) st = r; } catch (e) { await new Promise(r => setTimeout(r, 1000)); } }
  if (!st) { toast(BERR()); return go('battles'); }
  scrBattleWait(st);
}
function quitBattle() {
  ask(L('Si surts ara, la batalla compta com a acabada amb el que portes. Segur?', 'Si sales ahora, la batalla cuenta como terminada con lo que llevas. ¿Seguro?'), L('SURT', 'SALIR'), L('CONTINUA', 'CONTINÚA'), async () => {
    const b = { bcode: LS.bcode, done: BQ, correct: LS.bOk, ms: LS.bMs + (BQ - LS.done) * 30000, finished: true }; LS = null;
    try { await bApi('progress', b); } catch (e) { } go('battles');
  });
}

/* Resultats */
function scrBattleWait(st) {
  BT = { st };
  if (st.over) return scrBattleResult(st);
  const me = st.players.find(p => p.me), key = 'wait' + st.code;
  app.innerHTML = `<div class="scr" data-bk="${key}"><div class="rchar big tapme">${meC('think')}</div><h1>${L('Fet!', '¡Hecho!')} ${me.correct}/${BQ}</h1>
    <p class="sub">${L(`Temps: ${secs(me.ms)}. Esperant la resta de jugadors…`, `Tiempo: ${secs(me.ms)}. Esperando al resto de jugadores…`)}</p>
    <div class="bplayers">${st.players.map(p => playerChip(p, st)).join('')}</div>
    ${st.kind === 'duel' ? `<p class="sub small">${L("Quan el teu rival jugui, veuràs qui ha guanyat a «Les meves batalles».", 'Cuando tu rival juegue, verás quién ha ganado en «Mis batallas».')}</p><button class="btn sm gold" onclick="shareBattle('${st.code}','duel')">📨 ${L('RECORDA-LI EL CODI', 'RECUÉRDALE EL CÓDIGO')}</button>` : ''}
    <button class="btn big ghost" onclick="go('battles')">${L('TORNA A LES BATALLES', 'VOLVER A LAS BATALLAS')}</button></div>`;
  bLoop(key, async live => { const n = await bApi('state', { bcode: st.code }); if (n.error || !live()) return; if (n.over) scrBattleResult(n); else if (n.players.some((p, i) => p.done !== st.players[i]?.done || n.players.length !== st.players.length)) scrBattleWait(n); }, 2500);
}
function scrBattleResult(st) {
  const rank = st.players.filter(p => p.pos).sort((a, b) => a.pos - b.pos), me = st.players.find(p => p.me), win = me.pos === 1 && rank.length > 1;
  const tie = rank.length > 1 && rank[0].correct === rank[1].correct;
  const claimed = (P.bclaim || {})[st.code];
  app.innerHTML = `<div class="scr"><div class="burst ${win ? 'gold' : ''}"></div>
    <div class="cheer"><div class="saybubble">${win ? L(`Ho has aconseguit, ${esc(P.name)}!`, `¡Lo has conseguido, ${esc(P.name)}!`) : L('Molt ben jugat! La pròxima és teva.', '¡Muy bien jugado! La próxima es tuya.')}</div><div class="rchar dance tapme">${meC('happy')}</div></div>
    <h1>${win ? L('Has guanyat!', '¡Has ganado!') : me.pos ? L(`Has quedat ${ordN(me.pos)}`, `Has quedado ${ordN(me.pos)}`) : L('Batalla acabada', 'Batalla terminada')}</h1>
    ${tie ? `<p class="sub">⏱️ ${L("Empat d'encerts: guanya el més ràpid!", '¡Empate de aciertos: gana el más rápido!')}</p>` : ''}
    <div class="podium">${rank.map(p => `<div class="prow ${p.me ? 'me' : ''} p${p.pos}"><span class="ppos">${['🥇', '🥈', '🥉'][p.pos - 1] || p.pos}</span><span class="pc">${charSVG(p.companion || 'numi', 'happy')}</span><b>${esc(p.name)}</b><span class="psc">${p.correct}/${BQ}</span><span class="pt">${secs(p.ms)}</span></div>`).join('')}</div>
    ${claimed ? `<button class="btn big" onclick="go('battles')">${L('CONTINUA', 'CONTINÚA')}</button>` : `<button class="btn big gold" onclick="claimBattle()">🎁 ${L('RECULL EL PREMI', 'RECOGE EL PREMIO')}</button>`}</div>`;
  SFX.win(); if (win) confetti(220);
}
function claimBattle() {
  const st = BT.st; P.bclaim = P.bclaim || {};
  if (P.bclaim[st.code]) return go('battles');
  const me = st.players.find(p => p.me), n = st.players.filter(p => p.pos).length, win = me.pos === 1 && n > 1;
  P.bclaim[st.code] = today();
  if (!P.bday || P.bday.d !== today()) P.bday = { d: today(), n: 0 };
  const capped = P.bday.n >= BCAP; P.bday.n++;
  if (win) P.stats.bwins = (P.stats.bwins || 0) + 1;
  const R = { mode: 'battle', title: win ? L('Victòria!|¡Victoria!', 'Victòria!|¡Victoria!') : L('Batalla acabada|Batalla terminada', 'Batalla acabada|Batalla terminada'), score: me.correct, xp: 15 + (win ? 10 : 0), gems: 0, chest: 0, perfect: false };
  R.sub = L(`${me.correct} de ${BQ} encerts en ${secs(me.ms)}`, `${me.correct} de ${BQ} aciertos en ${secs(me.ms)}`);
  if (capped) R.sub += L(` · Avui ja has cobrat ${BCAP} premis de batalla: demà més!`, ` · Hoy ya has cobrado ${BCAP} premios de batalla: ¡mañana más!`);
  else {
    // A les batalles només es guanyen diamants
    R.gems = st.kind === 'duel' ? (win ? 30 : 0) : ([50, 30, 20][me.pos - 1] || 10);
  }
  reward(R);
}
// Enllaç directe: mates-numi.vercel.app/?b=ZEUS-1234
(() => { const b = new URLSearchParams(location.search).get('b'); if (!b) return; history.replaceState(null, '', location.pathname); if (P) setTimeout(() => joinBattle(b), 400); })();
