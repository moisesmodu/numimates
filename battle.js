/* ---------- Batalles de mates ----------
   Duel 1 contra 1 (cadascú juga quan pot, 48 h) i partida de grup (fins a 10, tots alhora).
   Tothom rep les mateixes preguntes: surten de la llavor de la batalla. Són 10, excepte a les batalles del docent,
   que en poden tenir de 5 a 30 (st.nq) i, si ell ho tria, arriben a cada alumne en un ordre diferent (st.oseed).
   Guanya qui n'encerta més; si hi ha empat, qui ha trigat menys (només compta el temps de pensar). */
const BQ = 10, BCAP = 5, DUEL_COST = 10;
let BT = null;
function seeded(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function withSeed(seed, fn) { const r = Math.random; Math.random = seeded(seed); try { return fn(); } finally { Math.random = r; } }
const bq = st => (st && st.nq) || BQ;
// barreja estable (la mateixa cada vegada per al mateix jugador: si recarrega, continua on era)
function shuffleSeeded(arr, seed) { const r = seeded(seed), a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function battlePlan(st) {
  const c = COURSES[st.course], units = st.unit != null && c.units[st.unit] ? [c.units[st.unit]] : c.units, n = bq(st);
  const plan = withSeed(st.seed, () => {
    const pool = [];
    units.forEach(u => u.lessons.slice(0, 10).forEach(l => l.sk.forEach(s => pool.push([s, l.L]))));
    const plan = []; for (let i = 0; i < n; i++) plan.push(pick(pool));
    plan.sort((a, b) => a[1] - b[1]);
    const seen = new Set(); return plan.map(([s, lv]) => genEx(s, lv, seen, true));
  });
  return st.oseed ? shuffleSeeded(plan, st.oseed) : plan;
}
const ordN = n => L(n + ({ 1: 'r', 2: 'n', 3: 'r', 4: 't' }[n] || 'è'), n + 'º');
const secs = ms => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const bApi = (action, extra = {}) => api('battle', { action, code: P.code, name: P.name, companion: P.companion, ...extra });
const cardById = id => STK.find(s => s[0] === id);
const BERR = e => ({ premium: L('Les batalles són del pla Premium (o de la teva escola).', 'Las batallas son del plan Premium (o de tu escuela).'), 'no-existeix': L("Aquest codi no existeix. Revisa'l!", 'Ese código no existe. ¡Revísalo!'), caducada: L('Aquesta batalla ja ha acabat.', 'Esta batalla ya ha terminado.'), 'començada': L('Aquesta partida ja ha començat.', 'Esta partida ya ha empezado.'), plena: L('Aquesta batalla ja és plena.', 'Esta batalla ya está llena.'), massa: L('Has creat moltes batalles. Espera una estona.', 'Has creado muchas batallas. Espera un rato.'), sols: L('Cal almenys un altre jugador.', 'Hace falta al menos otro jugador.'), 'altra-classe': L('Aquesta batalla és d\'una altra classe.', 'Esta batalla es de otra clase.'), intents: L('Ja has fet tots els intents.', 'Ya has hecho todos los intentos.') })[e] || L('No hi ha connexió. Torna-ho a provar.', 'No hay conexión. Vuelve a intentarlo.');
// Bucle de consulta lligat a la pantalla: s'atura sol quan canvies de pantalla
// Només un bucle per clau: en repintar la pantalla no se n'engega un altre (abans es multiplicaven)
const BLOOPS = new Set();
function bLoop(key, fn, every = 2000) {
  if (BLOOPS.has(key)) return; BLOOPS.add(key);
  const live = () => !!document.querySelector(`[data-bk="${key}"]`);
  const tick = async () => { if (!live()) return BLOOPS.delete(key); try { await fn(live); } catch (e) { } if (live()) setTimeout(tick, every); else BLOOPS.delete(key); };
  setTimeout(tick, every);
}

/* ---------- Escenari d'arena (només visual): estadi 3D renderitzat (img/games), focus de llum, espurnes i grades ----------
   A Numi Mates la foto de l'estadi i les espurnes es veuen (mates-games.css); a la resta d'apps queden amagades i es veu l'escenari antic. */
const arenaBG = (tone = '') => `<div class="arena-bg ${tone}" aria-hidden="true"><i class="mg-photo"></i><i class="beam b1"></i><i class="beam b2"></i><i class="beam b3"></i><i class="stars"></i><i class="crowd"></i><i class="floor"></i><i class="mg-haze"></i><i class="mg-sparks">${'<i></i>'.repeat(14)}</i></div>`;
const vsBolt = () => `<div class="vsx" aria-hidden="true"><i class="mg-vsring"></i><svg viewBox="0 0 64 64"><defs><linearGradient id="vsg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6C8"/><stop offset=".45" stop-color="#FFD24A"/><stop offset="1" stop-color="#FF7A2C"/></linearGradient></defs><path d="M38 2 14 36h14l-6 26 28-38H34z" fill="url(#vsg)" stroke="#7A2E00" stroke-width="1.5" stroke-linejoin="round"/><path d="M36 6 20 32h9" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/></svg><b>VS</b></div>`;
// cursa de la batalla: un carril per jugador (tu sempre el primer), amb el company que avança
function raceHTML(st) {
  const me = { name: P.name, companion: P.companion, done: LS ? LS.done : 0, me: true };
  const ps = [me, ...st.players.filter(p => !p.me).sort((a, b) => b.done - a.done).slice(0, 4)];
  return ps.map(p => `<div class="lane ${p.me ? 'me' : ''}"><span class="ln">${esc(p.me ? L('Tu', 'Tú') : p.name)}</span><span class="track"><i class="fill" style="width:${Math.min(100, p.done / bq(st) * 100)}%"></i><span class="runner" style="left:${Math.min(100, p.done / bq(st) * 100)}%">${charSVG(p.companion || 'numi', p.done >= bq(st) ? 'happy' : 'idle')}</span><i class="flag">🏁</i></span></div>`).join('');
}
// podi en tres graons (2n · 1r · 3r) amb els personatges a dalt
function podium3(rank, n = BQ) {
  const top = [rank[1], rank[0], rank[2]];
  return `<div class="pod3">${top.map((p, i) => p ? `<div class="pst s${p.pos} ${p.me ? 'me' : ''}" style="--d:${[.35, .7, .15][i]}s">${p.pos === 1 ? '<i class="mg-spot" aria-hidden="true"></i>' : ''}<div class="pch">${p.pos === 1 ? '<i class="mg-rays" aria-hidden="true"></i><span class="crown">👑</span>' : ''}${charSVG(p.companion || 'numi', 'happy')}</div><b>${esc(p.name)}</b><small>${p.correct}/${n} · ${secs(p.ms)}</small><div class="step"><span>${p.pos}</span></div></div>` : '<div class="pst empty"></div>').join('')}</div>`;
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
  const wins = (P.stats && P.stats.bwins) || 0;
  app.innerHTML = shell(`<div data-bk="hub"><div class="bhero">${arenaBG()}<div class="bh-chars"><span class="bh-a">${meC('happy')}</span>${vsBolt()}<span class="bh-b">${charSVG(P.companion === 'cavaller' ? 'numi' : 'cavaller', 'happy')}</span></div>
      <h1>${L('Batalles de mates', 'Batallas de mates')}</h1><p>${L("Les mateixes 10 preguntes per a tothom. Guanya qui n'encerta més i, si hi ha empat, <b>el més ràpid</b>.", 'Las mismas 10 preguntas para todos. Gana quien acierta más y, si hay empate, <b>el más rápido</b>.')}</p>
      ${wins ? `<span class="bh-wins">🏆 ${wins} ${wins === 1 ? L('victòria', 'victoria') : L('victòries', 'victorias')}</span>` : ''}</div>
    <div id="bclasse"></div>
    <button class="tcard lliga" onclick="go('league')"><span class="ti">🏆</span><span><b>${L('Lliga Numi', 'Liga Numi')}</b><small>${L('Rànquing de la setmana i del mes. Els 3 primers de cada mes guanyen premi.', 'Ranking de la semana y del mes. Los 3 primeros de cada mes ganan premio.')}</small></span></button>
    <button class="tcard duel" onclick="newBattle('duel')"><span class="ti">⚔️</span><span><b>${L('Duel 1 contra 1', 'Duelo 1 contra 1')}</b><small>${L('Reta un amic amb un codi. Cadascú juga quan pot i qui guanya s\'emporta els diamants.', 'Reta a un amigo con un código. Cada uno juega cuando puede y quien gana se lleva los diamantes.')}</small></span><span class="bcost">${DUEL_COST} 💎</span></button>
    <button class="tcard party" onclick="newBattle('party')"><span class="ti">🏟️</span><span><b>${L('Partida de grup', 'Partida de grupo')}</b><small>${L('Fins a 10 jugadors. Tothom comença alhora!', 'Hasta 10 jugadores. ¡Todos empiezan a la vez!')}</small></span></button>
    <div class="joinbox"><input id="bcin" class="nm" placeholder="${L('Codi: ZEUS-1234', 'Código: ZEUS-1234')}" aria-label="${L('Tens un codi de batalla?', '¿Tienes un código de batalla?')}" maxlength="12" autocapitalize="characters" onkeydown="if(event.key==='Enter')joinBattle(this.value)"><button class="btn" onclick="joinBattle($('#bcin').value)">${L('ENTRA', 'ENTRA')}</button></div>
    <h2 class="h2">${L('Premis', 'Premios')}</h2>${battleRewardsHTML()}
    <h2 class="h2">${L('Les meves batalles', 'Mis batallas')}</h2><div id="bmine"><p class="empty">…</p></div></div>`, 'train');
  loadMine(); loadClasse();
}
// batalles en directe i competicions que el docent ha obert per a la classe
const kindLabel = st => st.kind === 'classe' ? '📺 ' + L('BATALLA DE CLASSE', 'BATALLA DE CLASE') : st.kind === 'comp' ? '🏆 ' + L('COMPETICIÓ', 'COMPETICIÓN') : st.kind === 'duel' ? '⚔️ ' + L('DUEL', 'DUELO') + ` · ${DUEL_COST} 💎` : '🏟️ ' + L('PARTIDA DE GRUP', 'PARTIDA DE GRUPO');
const dayMonth = d => new Date(d).toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long' });
async function loadClasse() {
  if (!P.classe) return;
  let r; try { r = await bApi('classe'); } catch (e) { return; }
  const el = $('#bclasse'); if (!el || !r.list || !r.list.length) return;
  el.innerHTML = `<h2 class="h2">🏫 ${L('De la teva classe', 'De tu clase')}</h2>` + r.list.map(st => {
    const me = st.players.find(p => p.me);
    if (st.kind === 'classe') return `<button class="tcard party" onclick="joinBattle('${st.code}')"><span class="ti">📺</span><span><b>${esc(st.title || L('Batalla de classe', 'Batalla de clase'))}</b><small>${st.over ? L('Acabada: mira la classificació', 'Terminada: mira la clasificación') : st.status === 'live' ? L('Ja ha començat', 'Ya ha empezado') : L(`${st.players.length} a la sala · entra-hi i espera que la profe comenci`, `${st.players.length} en la sala · entra y espera a que la profe empiece`)}</small></span></button>`;
    const left = me ? (me.finished ? st.triesLeft : (st.tries || 1) - (me.tries || 0)) : st.tries;
    return `<button class="tcard lliga" onclick="openComp('${st.code}')"><span class="ti">🏆</span><span><b>${esc(st.title || L('Competició', 'Competición'))}</b><small>${st.over ? L('Acabada: mira la classificació', 'Terminada: mira la clasificación') : L(`Fins al ${dayMonth(st.endsAt)} · ${me && me.best ? `el teu millor: ${me.best.correct}/${bq(st)} · ` : ''}${left} ${left === 1 ? 'intent' : 'intents'}`, `Hasta el ${dayMonth(st.endsAt)} · ${me && me.best ? `tu mejor: ${me.best.correct}/${bq(st)} · ` : ''}${left} ${left === 1 ? 'intento' : 'intentos'}`)}${me && me.pos ? ` · ${ordN(me.pos)}` : ''}</small></span></button>`;
  }).join('');
}
// competició: entrar-hi, jugar, veure la classificació i tornar-hi mentre quedin intents
async function openComp(bcode) {
  let st; try { st = await bApi('join', { bcode }); } catch (e) { return toast(BERR()); }
  if (st.error) { SFX.ko(); return toast(BERR(st.error)); }
  const me = st.players.find(p => p.me);
  if (!st.over && !me.finished) { BT = { st }; return startBattle(); }
  scrComp(st);
}
function scrComp(st) {
  BT = { st };
  const me = st.players.find(p => p.me), rank = st.players.filter(p => p.pos).sort((a, b) => a.pos - b.pos);
  app.innerHTML = `<div class="scr"><div class="burst ${me && me.pos === 1 ? 'gold' : ''}"></div><div class="bkind">${kindLabel(st)}</div><h1>${esc(st.title || L('Competició', 'Competición'))}</h1>
    <p class="sub">${st.over ? L('Competició acabada.', 'Competición terminada.') : L(`Oberta fins al ${dayMonth(st.endsAt)}. Compta el teu millor intent.`, `Abierta hasta el ${dayMonth(st.endsAt)}. Cuenta tu mejor intento.`)}${me && me.best ? ` ${L(`El teu millor: <b>${me.best.correct}/${bq(st)}</b> en ${secs(me.best.ms)}.`, `Tu mejor: <b>${me.best.correct}/${bq(st)}</b> en ${secs(me.best.ms)}.`)}` : ''}</p>
    <div class="podium">${rank.slice(0, 10).map(p => `<div class="prow ${p.me ? 'me' : ''} p${p.pos}"><span class="ppos">${['🥇', '🥈', '🥉'][p.pos - 1] || p.pos}</span><span class="pc">${charSVG(p.companion || 'numi', 'happy')}</span><b>${esc(p.name)}</b><span>${p.best.correct}/${bq(st)} · ${secs(p.best.ms)}</span></div>`).join('')}</div>
    ${!st.over && st.triesLeft > 0 ? `<button class="btn big" onclick="retryComp()">${L(`TORNA-HI (${st.triesLeft} ${st.triesLeft === 1 ? 'intent' : 'intents'})`, `OTRA VEZ (${st.triesLeft} ${st.triesLeft === 1 ? 'intento' : 'intentos'})`)}</button>` : ''}
    ${st.over && !(P.bclaim || {})[st.code] && me && me.best ? `<button class="btn big gold" onclick="claimBattle()">🎁 ${L('RECULL EL PREMI', 'RECOGE EL PREMIO')}</button>` : ''}
    <button class="btn big ghost" onclick="go('battles')">${L('TORNA A LES BATALLES', 'VOLVER A LAS BATALLAS')}</button></div>`;
  if (me && me.pos === 1 && st.over) { SFX.win(); confetti(160); }
}
async function retryComp() {
  let st; try { st = await bApi('retry', { bcode: BT.st.code }); } catch (e) { return toast(BERR()); }
  if (st.error) return toast(BERR(st.error));
  BT = { st }; startBattle();
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
    <small>${p.finished ? `✅ ${p.correct}/${bq(st)}` : p.done ? `${p.done}/${bq(st)}…` : p.isHost ? '👑' : ''}</small></div>`;
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
  else action = st.host ? `<button class="btn big" id="bstart" onclick="startParty()" ${st.players.length < 2 ? 'disabled' : ''}>${L('COMENÇA LA PARTIDA', 'EMPEZAR LA PARTIDA')}</button><p class="sub small">${L(`${st.players.length} de ${st.max} jugadors. Quan hi siguin tots, comença!`, `${st.players.length} de ${st.max} jugadores. ¡Cuando estén todos, empieza!`)}</p>` : `<p class="sub">⏳ ${st.kind === 'classe' ? L('Esperant que la profe comenci la batalla…', 'Esperando a que la profe empiece la batalla…') : L("Esperant que l'amfitrió comenci…", 'Esperando a que el anfitrión empiece…')}</p>`;
  app.innerHTML = `<div class="scr blobby arena" data-bk="${key}">${arenaBG(duel ? 'red' : '')}<button class="xbtn bx" onclick="go('battles')" aria-label="${L('Surt', 'Salir')}">✕</button>
    <div class="bkind">${kindLabel(st)} · ${tx(COURSES[st.course].long).toUpperCase()}</div>${st.title ? `<h2 class="h2" style="margin:6px 0 0;text-align:center">${esc(st.title)}</h2>` : ''}
    <div class="bcode"><small>${L('Codi de la batalla', 'Código de la batalla')}</small><b>${st.code}</b></div>
    ${st.kind === 'classe' ? '' : `<button class="btn sm gold" onclick="shareBattle('${st.code}','${st.kind}')">📨 ${L('ENVIA EL CODI', 'ENVIAR EL CÓDIGO')}</button>`}
    <div class="bplayers ${duel ? 'vs' : ''}" id="bpls">${duel ? `${playerChip(me, st)}${vsBolt()}${others[0] ? playerChip(others[0], st) : `<div class="bpl ghost"><div class="bpc q">?</div><b>${L('Rival', 'Rival')}</b><small>${L('encara no ha entrat', 'aún no ha entrado')}</small></div>`}` : st.players.map(p => playerChip(p, st)).join('')}</div>
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
  app.innerHTML = `<div class="scr arena bcd" data-bk="cd${st.code}">${arenaBG('gold')}<h1>${L('Preparats?', '¿Preparados?')}</h1><div class="bring"><i class="mg-rays" aria-hidden="true"></i><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="mg-r0" cx="60" cy="60" r="58"/><circle cx="60" cy="60" r="54"/><circle class="mg-r1" cx="60" cy="60" r="47"/></svg><i class="mg-wave" id="bwave" aria-hidden="true"></i><div class="bcount" id="bcount">…</div></div><div class="bcd-pl">${st.players.slice(0, 8).map(p => `<span>${charSVG(p.companion || 'numi', 'happy')}<b>${esc(p.name)}</b></span>`).join('')}</div></div>`;
  let last = null;
  const iv = setInterval(() => {
    const left = Math.ceil((t0 - Date.now()) / 1000), el = $('#bcount');
    if (!el) return clearInterval(iv);
    if (left <= 0) { clearInterval(iv); el.textContent = L('JA!', '¡YA!'); el.classList.add('go'); mgCdWave(true); SFX.win && SFX.win(); return setTimeout(startBattle, 650); }
    if (left !== last) { last = left; el.textContent = left; el.classList.remove('pop-in'); void el.offsetWidth; el.classList.add('pop-in'); SFX.tap(); mgCdWave(); }
  }, 100);
}

// ona de llum que s'expandeix a cada número del compte enrere (Web Animations: no força cap reflow)
function mgCdWave(big) {
  const w = $('#bwave'); if (!w || REDUCED || !w.animate) return;
  w.animate([{ transform: 'scale(.35)', opacity: .95 }, { transform: `scale(${big ? 2.6 : 1.7})`, opacity: 0 }], { duration: big ? 900 : 750, easing: 'cubic-bezier(.15,.7,.3,1)' });
}

/* Jugar */
function startBattle() {
  const st = BT.st; closeModal();
  if (st.kind === 'duel') { P.bpaid = P.bpaid || {}; if (!P.bpaid[st.code]) { if (P.gems < DUEL_COST) return noGems(); P.gems -= DUEL_COST; P.bpaid[st.code] = 1; save(); toast(`−${DUEL_COST} 💎`); } }
  // si ja havia començat (ha tancat l'app a mitja partida), continua on era: no es poden repetir les preguntes per millorar el temps
  const me = st.players.find(p => p.me) || {}, n = bq(st), done = Math.min(me.done || 0, n);
  LS = { mode: 'battle', bcode: st.code, kind: st.kind, color: st.kind === 'duel' ? '#C0392B' : '#1F7A8C', seen: new Set(), mix: true, queue: battlePlan(st).slice(done), total: n, done, miss: 0, combo: 0, maxCombo: 0, gold: 0, t0: Date.now(), res: [], bOk: me.correct || 0, bMs: me.ms || 0, q0: 0 };
  nextEx();
  const run = async () => { if (!LS || LS.bcode !== st.code) return; try { const n = await bApi('state', { bcode: st.code }); if (!n.error) { BT.st = n; battleStrip(); } } catch (e) { } setTimeout(run, 3000); };
  setTimeout(run, 3000);
}
// marcador en directe (només visual): encerts, una bola per pregunta i la posició provisional
const mgBPips = {};
function mgBattleHUD(st) {
  if (!LS || LS.mode !== 'battle') return '';
  const ok = LS.bOk || 0, pos = 1 + st.players.filter(p => !p.me && (p.correct || 0) > ok).length, res = mgBPips[LS.bcode] || [];
  const pips = [...Array(BQ).keys()].map(i => `<i class="${i < LS.done ? (res[i] === true ? 'ok' : res[i] === false ? 'ko' : 'dn') : i === LS.done ? 'now' : ''}"></i>`).join('');
  return `<div class="bhud"><div class="bh-sc"><span class="bh-av">${meC('happy')}</span><b id="bhok">${ok}</b><small>${L('encerts', 'aciertos')}</small></div><div class="bh-pips">${pips}</div>${st.players.length > 1 ? `<div class="bh-pos"><small>${L('posició', 'posición')}</small><b>${ordN(pos)}</b></div>` : ''}</div>`;
}
function battleStrip() {
  const el = $('#bstrip'); if (!el || !BT) return;
  el.classList.add('race'); el.innerHTML = mgBattleHUD(BT.st) + `<div class="lanes">${raceHTML(BT.st)}</div>`;
  // a Numi Mates la pregunta es juga dins de l'estadi
  const les = el.closest('.lesson');
  if (les && mgMates() && !les.classList.contains('bmode')) { les.classList.add('bmode', BT.st.kind === 'duel' ? 'bduel' : 'bparty'); les.insertAdjacentHTML('afterbegin', arenaBG(BT.st.kind === 'duel' ? 'red' : '')); }
}
function battleAnswer(ok) {
  LS.bMs += Math.min(120000, Date.now() - LS.q0); if (ok) LS.bOk++;
  bApi('progress', { bcode: LS.bcode, done: LS.done, correct: LS.bOk, ms: LS.bMs }).catch(() => { });
  (mgBPips[LS.bcode] = mgBPips[LS.bcode] || [])[LS.done - 1] = ok;
  mgBattleFX(ok);
}
// efecte de cada resposta a la batalla: el marcador salta i la targeta s'il·lumina (verd o vermell)
function mgBattleFX(ok) {
  battleStrip();
  const les = $('.lesson.bmode'); if (!les) return;
  les.classList.remove('bfx-ok', 'bfx-ko'); void les.offsetWidth; les.classList.add(ok ? 'bfx-ok' : 'bfx-ko');
  const b = $('#bhok'); if (ok && b && !REDUCED) { b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.7)', color: '#7CFFB0' }, { transform: 'scale(1)' }], { duration: 520, easing: 'cubic-bezier(.2,1.6,.4,1)' }); floatTxt(b, '+1', 'gain bplus'); }
}
async function finishBattle() {
  const code = LS.bcode, body = { bcode: code, done: LS.total, correct: LS.bOk, ms: LS.bMs, finished: true };
  P.stats.games++; LS = null; save();
  let st = null;
  for (let t = 0; t < 3 && !st; t++) { try { const r = await bApi('progress', body); if (!r.error) st = r; } catch (e) { await new Promise(r => setTimeout(r, 1000)); } }
  if (!st) { toast(BERR()); return go('battles'); }
  scrBattleWait(st);
}
function quitBattle() {
  ask(L('Si surts ara, la batalla compta com a acabada amb el que portes. Segur?', 'Si sales ahora, la batalla cuenta como terminada con lo que llevas. ¿Seguro?'), L('SURT', 'SALIR'), L('CONTINUA', 'CONTINÚA'), async () => {
    const b = { bcode: LS.bcode, done: LS.total, correct: LS.bOk, ms: LS.bMs + (LS.total - LS.done) * 30000, finished: true }; LS = null;
    try { await bApi('progress', b); } catch (e) { } go('battles');
  });
}

/* Resultats */
function scrBattleWait(st) {
  if (st.kind === 'comp') return scrComp(st);
  BT = { st };
  if (st.over) return scrBattleResult(st);
  const me = st.players.find(p => p.me), key = 'wait' + st.code;
  app.innerHTML = `<div class="scr arena" data-bk="${key}">${arenaBG()}<div class="rchar big tapme">${meC('think')}</div><h1>${L('Fet!', '¡Hecho!')} <span class="bscore">${me.correct}/${bq(st)}</span></h1>
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
  app.innerHTML = `<div class="scr arena bres">${arenaBG(win ? 'gold' : '')}
    <div class="cheer"><div class="saybubble">${win ? L(`Ho has aconseguit, ${esc(P.name)}!`, `¡Lo has conseguido, ${esc(P.name)}!`) : L('Molt ben jugat! La pròxima és teva.', '¡Muy bien jugado! La próxima es tuya.')}</div><div class="rchar dance tapme">${meC('happy')}</div></div>
    <h1 class="mg-title ${win ? 'win' : ''}">${win ? L('Has guanyat!', '¡Has ganado!') : me.pos ? L(`Has quedat ${ordN(me.pos)}`, `Has quedado ${ordN(me.pos)}`) : L('Batalla acabada', 'Batalla terminada')}</h1>
    ${tie ? `<p class="sub">⏱️ ${L("Empat d'encerts: guanya el més ràpid!", '¡Empate de aciertos: gana el más rápido!')}</p>` : ''}
    ${rank.length > 1 ? podium3(rank, bq(st)) : ''}<div class="podium">${rank.slice(rank.length > 1 ? 3 : 0).map(p => `<div class="prow ${p.me ? 'me' : ''} p${p.pos}"><span class="ppos">${['🥇', '🥈', '🥉'][p.pos - 1] || p.pos}</span><span class="pc">${charSVG(p.companion || 'numi', 'happy')}</span><b>${esc(p.name)}</b><span class="psc">${p.correct}/${bq(st)}</span><span class="pt">${secs(p.ms)}</span></div>`).join('')}</div>
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
  const R = { mode: 'battle', win, title: win ? L('Victòria!|¡Victoria!', 'Victòria!|¡Victoria!') : L('Batalla acabada|Batalla terminada', 'Batalla acabada|Batalla terminada'), score: me.correct, xp: 15 + (win ? 10 : 0), gems: 0, chest: 0, perfect: false };
  R.sub = L(`${me.correct} de ${bq(st)} encerts en ${secs(me.ms)}`, `${me.correct} de ${bq(st)} aciertos en ${secs(me.ms)}`);
  if (capped) R.sub += L(` · Avui ja has cobrat ${BCAP} premis de batalla: demà més!`, ` · Hoy ya has cobrado ${BCAP} premios de batalla: ¡mañana más!`);
  else {
    // A les batalles només es guanyen diamants
    R.gems = st.kind === 'duel' ? (win ? 30 : 0) : ([50, 30, 20][me.pos - 1] || 10);
  }
  reward(R);
}
// Enllaç directe: mates-numi.vercel.app/?b=ZEUS-1234
(() => { const b = new URLSearchParams(location.search).get('b'); if (!b) return; history.replaceState(null, '', location.pathname); if (P) setTimeout(() => joinBattle(b), 400); })();

/* ---------- Efectes de recompensa de Numi Mates (només aspecte; la lògica és a app.js) ----------
   Confeti amb paper que gira en 3D, cintes i guspires daurades; un anell de llum quan encertes;
   i a la pantalla de resultats els diamants i les estrelles volen fins al seu marcador.
   Només a Numi Mates: les altres apps fan servir els efectes de sempre. Amb «menys moviment» no es fa res. */
(() => {
  if (typeof confetti !== 'function') return;
  const LOW = (navigator.hardwareConcurrency || 4) <= 4 || (navigator.deviceMemory || 4) <= 2;
  const base = { confetti, sparkle, comboBanner, scrResult };
  const PAL = [['#FFE07A', '#C98A00'], ['#FFD24A', '#B87800'], ['#B57BFF', '#5B2A86'], ['#FF7AA8', '#B8336A'], ['#5FD3B3', '#1F8A6E'], ['#5CC8FF', '#1F6FB0'], ['#FF9A3C', '#B8561A'], ['#FFFFFF', '#C9B8E0']];
  confetti = function (n = 140) {
    if (!mgMates() || REDUCED) return base.confetti(n);
    const c = document.createElement('canvas'), dpr = Math.min(2, devicePixelRatio || 1); c.className = 'confetti'; document.body.appendChild(c);
    const ctx = c.getContext('2d'), W = c.width = innerWidth * dpr, H = c.height = innerHeight * dpr;
    n = Math.round(Math.min(260, n) * (LOW ? .7 : 1));
    // cada peça: posició, velocitat (px de pantalla per fotograma a 60 Hz), forma, color de cara i de revers, gir i aleteig
    const ps = [], add = (x, y, vx, vy) => {
      const k = Math.random(), col = PAL[k < .35 ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * PAL.length)];
      ps.push({ x, y, vx: vx * dpr, vy: vy * dpr, t: k < .12 ? 2 : k < .22 ? 1 : k < .3 ? 3 : 0, w: (5 + Math.random() * 6) * dpr, h: (8 + Math.random() * 9) * dpr, c: col, a: Math.random() * 6, va: (Math.random() - .5) * .25, f: Math.random() * 6, vf: .12 + Math.random() * .22, wb: Math.random() * 6 });
    };
    const cx = W / 2, cy = H * .38;
    if (n >= 150) { const k = Math.round(n * .28); for (let i = 0; i < k; i++) { const vy = -(12 + Math.random() * 11); add(0, H * .92, 4 + Math.random() * 8, vy); add(W, H * .92, -(4 + Math.random() * 8), vy); } n -= k * 2; }
    for (let i = 0; i < n; i++) add(cx + (Math.random() - .5) * W * .2, cy, (Math.random() - .5) * 13, -(5 + Math.random() * 13));
    let last = performance.now(), age = 0;
    (function loop(t) {
      const dt = Math.min(2.2, (t - last) / 16.7); last = t; age += dt;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H);
      if (age < 22) { const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * .5), o = (1 - age / 22) * .5; g.addColorStop(0, `rgba(255,244,200,${o})`); g.addColorStop(1, 'rgba(255,244,200,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
      let alive = 0;
      for (const p of ps) {
        p.vy += .36 * dpr * dt; p.vx *= Math.pow(.985, dt); p.vy *= Math.pow(p.vy < 0 ? .985 : p.t === 1 ? .9 : .93, dt);
        p.x += (p.vx + Math.sin(age * .08 + p.wb) * 1.2 * dpr) * dt; p.y += p.vy * dt; p.a += p.va * dt; p.f += p.vf * dt;
        if (p.y > H + 40 || p.x < -60 || p.x > W + 60) continue; alive++;
        const fl = Math.cos(p.f), ca = Math.cos(p.a), sa = Math.sin(p.a);
        ctx.setTransform(ca, sa, -sa * fl, ca * fl, p.x, p.y);
        ctx.fillStyle = fl > 0 ? p.c[0] : p.c[1];
        if (p.t === 0) ctx.fillRect(-p.w / 2, -p.h / 4, p.w, p.h / 2);
        else if (p.t === 1) ctx.fillRect(-p.w * .18, -p.h * 1.2, p.w * .36, p.h * 2.4);
        else if (p.t === 3) { ctx.beginPath(); ctx.arc(0, 0, p.w * .42, 0, 6.3); ctx.fill(); }
        else { const r = p.w * .75, tw = .55 + .45 * Math.sin(age * .3 + p.wb); ctx.globalAlpha = tw; ctx.fillStyle = '#FFF3B0'; ctx.beginPath(); for (let i = 0; i < 8; i++) { const rr = i % 2 ? r * .32 : r, aa = i * Math.PI / 4; ctx.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); } ctx.fill(); ctx.globalAlpha = 1; }
      }
      if (alive && age < 260) requestAnimationFrame(loop); else c.remove();
    })(last);
  };
  // anell de llum i estrelles al voltant de la resposta correcta
  sparkle = function (el, n) {
    base.sparkle(el, n);
    if (!mgMates() || REDUCED || !el) return;
    const r = el.getBoundingClientRect(), d = document.createElement('i'); d.className = 'mg-ring';
    d.style.cssText = `left:${r.left - 4}px;top:${r.top - 4}px;width:${r.width + 8}px;height:${r.height + 8}px`;
    document.body.appendChild(d); setTimeout(() => d.remove(), 800);
  };
  comboBanner = function (n) {
    base.comboBanner(n);
    const b = document.body.lastElementChild;
    if (mgMates() && b && b.classList.contains('combobanner')) { b.insertAdjacentHTML('afterbegin', '<i class="mg-cbr" aria-hidden="true"></i>'); if (n >= 10) b.classList.add('mega'); }
  };
  // pantalla de resultats: a les batalles, dins de l'estadi; i els premis volen fins al seu marcador
  scrResult = function (R) {
    base.scrResult(R);
    if (!mgMates()) return;
    const s = $('#app > .scr'); if (!s) return;
    s.classList.add('mg-res');
    if (R.mode === 'battle') { s.classList.add('arena', 'mg-bres'); s.insertAdjacentHTML('afterbegin', arenaBG(R.win ? 'gold' : '')); }
    if (REDUCED) return;
    const from = s.querySelector('.rchar') || s.querySelector('h1');
    setTimeout(() => {
      if (!document.body.contains(s)) return;
      if (R.gems > 0) fly(from, s.querySelector('.rs.gem'), 'img/ic/diamond.webp', Math.min(12, 3 + Math.round(R.gems / 5)));
      if (R.xp > 0) fly(from, s.querySelector('.rs.xp'), 'img/ic/star.webp', Math.min(10, 3 + Math.round(R.xp / 10)));
    }, 450);
  };
  function fly(fromEl, toEl, src, n) {
    if (!fromEl || !toEl || !document.body.animate) return;
    const a = fromEl.getBoundingClientRect(), b = toEl.getBoundingClientRect();
    const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, dx = b.left + b.width / 2 - x0, dy = b.top + b.height * .35 - y0;
    for (let i = 0; i < n; i++) {
      const im = document.createElement('img'); im.src = src; im.alt = ''; im.className = 'mg-coin'; im.style.left = x0 + 'px'; im.style.top = y0 + 'px';
      document.body.appendChild(im);
      const ang = Math.random() * Math.PI * 2, r = 50 + Math.random() * 60, mx = Math.cos(ang) * r, my = Math.sin(ang) * r * .7 - 40, rot = (Math.random() - .5) * 120;
      const an = im.animate([
        { transform: 'translate(0,0) scale(.2) rotate(0deg)', opacity: 0 },
        { transform: `translate(${mx}px,${my}px) scale(1.15) rotate(${rot}deg)`, opacity: 1, offset: .32 },
        { transform: `translate(${mx * .6}px,${my - 10}px) scale(1) rotate(${rot * 1.3}deg)`, opacity: 1, offset: .5 },
        { transform: `translate(${dx}px,${dy}px) scale(.5) rotate(${rot * 2}deg)`, opacity: .9 }
      ], { duration: 1050, delay: i * 70, easing: 'cubic-bezier(.45,0,.35,1)', fill: 'both' });
      an.onfinish = () => { im.remove(); toEl.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.1)', filter: 'brightness(1.4)' }, { transform: 'scale(1)' }], { duration: 240 }); };
    }
  }
})();
