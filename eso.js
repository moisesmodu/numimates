/* ===== Eines d'ESO (Numi Pro) =====
   · Prepara l'examen: l'alumne tria els temes i el dia de l'examen; cada dia una sessió de repàs del que li costa més,
     i els últims dies, un simulacre amb nota orientativa (sense ajudes).
   · Fitxes: el resum de cada unitat (claus, vocabulari, exemples i errors típics) a partir de la teoria, per repassar o imprimir.
   · Contrarellotge: 2 minuts per encertar tantes preguntes com puguis d'un tema; rècord per tema.
   Fa servir el motor de lliçons de sempre (mode 'train') amb marques pròpies a LS (expr, sim, crono). */
const esoCurs = c => COURSES[c] ? tx(COURSES[c].long) : '';   // «Nivell 8», com a tota l'app
const daysTo = d => Math.round((new Date(d + 'T12:00') - new Date(today() + 'T12:00')) / 864e5);
const dayAdd = n => { const d = new Date(); d.setDate(d.getDate() + n); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const fDay = d => new Date(d + 'T12:00').toLocaleDateString(LANG === 'es' ? 'es-ES' : 'ca-ES', { weekday: 'long', day: 'numeric', month: 'long' });

// habilitats d'unes unitats, amb més pes a les que costen (com l'entrenament intel·ligent)
function esoPool(c, uis) {
  const pool = [];
  uis.forEach(ui => { const u = COURSES[c] && COURSES[c].units[ui]; if (u) u.lessons.forEach(l => l.sk.forEach(s => pool.push([s, l.L]))); });
  return pool;
}
function esoPlan(pool, n) {
  const w = pool.map(([s]) => { const [c, t] = (P.stats.sk || {})[s] || [0, 0]; return 1 + 4 * (1 - (c + 1) / (t + 2)); });
  const sum = w.reduce((a, b) => a + b, 0), plan = [];
  for (let i = 0; i < n; i++) { let r = Math.random() * sum, j = 0; while (j < w.length - 1 && r > w[j]) { r -= w[j]; j++; } plan.push(pool[j]); }
  return plan;
}

/* ---------- Prepara l'examen ---------- */
function examCard() {
  if (!IS_PRO || !P) return '';
  const ex = P.examen;
  if (!ex) return `<button class="tcard exprep" onclick="examSetup()"><span class="ti">📅</span><span><b>${L('Tens un examen de mates?', '¿Tienes un examen de mates?')}</b><small>${L("Digues-me els temes i el dia, i et preparo un pla de repàs fins a l'examen.", 'Dime los temas y el día, y te preparo un plan de repaso hasta el examen.')}</small></span><span class="tgo">›</span></button>`;
  const n = daysTo(ex.d), c = COURSES[ex.c], temes = ex.u.map(ui => tx(c.units[ui].title)).join(' · ');
  if (n < 0) return `<div class="excard"><div class="exhead"><span class="ti">📝</span><div><b>${L("Com t'ha anat l'examen?", '¿Cómo te ha ido el examen?')}</b><small>${esc(temes)}</small></div></div>
    <div class="exbtns">${[['be', L('Bé', 'Bien'), '😄'], ['regular', L('Regular', 'Regular'), '😐'], ['malament', L('Malament', 'Mal'), '😣']].map(([k, t, e]) => `<button class="btn ghost" onclick="examDone('${k}')">${e} ${t}</button>`).join('')}</div></div>`;
  const tot = Math.max(1, daysTo(ex.d) + Object.keys(ex.s || {}).filter(d => d < today()).length + 1), fets = Object.keys(ex.s || {}).length, avui = (ex.s || {})[today()] || 0;
  const quan = n === 0 ? L('és avui!', '¡es hoy!') : n === 1 ? L('és demà', 'es mañana') : L(`d'aquí a ${n} dies`, `dentro de ${n} días`);
  const dots = [...Array(Math.min(tot, 14)).keys()].map(i => `<i class="${i < fets ? 'on' : ''}"></i>`).join('');
  return `<div class="excard"><div class="exhead"><span class="ti">📅</span><div><b>${L('Examen', 'Examen')} ${quan}</b><small>${esoCurs(ex.c)} · ${esc(temes)}</small></div><button class="link exedit" onclick="examSetup()">${L('Canvia', 'Cambia')}</button></div>
    <div class="exdots" title="${L('Sessions fetes', 'Sesiones hechas')}">${dots}</div><p class="exinfo">${L(`${fets} ${fets === 1 ? 'sessió feta' : 'sessions fetes'}`, `${fets} ${fets === 1 ? 'sesión hecha' : 'sesiones hechas'}`)}${ex.sim != null ? ` · ${L('millor simulacre', 'mejor simulacro')}: <b>${String(ex.sim).replace('.', ',')}</b>` : ''}</p>
    <div class="exbtns"><button class="btn" onclick="examGo(false)">${avui ? L('UNA ALTRA SESSIÓ', 'OTRA SESIÓN') : L("SESSIÓ D'AVUI · 10", 'SESIÓN DE HOY · 10')}</button>${n <= 2 ? `<button class="btn gold" onclick="examGo(true)">${L('SIMULACRE · 12', 'SIMULACRO · 12')}</button>` : ''}</div></div>`;
}
let EXS = null;
function examSetup() {
  const ex = P.examen;
  EXS = { c: ex ? ex.c : P.course, u: new Set(ex ? ex.u : []), d: ex ? ex.d : dayAdd(7) };
  examModal();
}
function examModal() {
  const c = COURSES[EXS.c];
  modal(`<div class="sheet exsheet"><h3>${L("Prepara l'examen", 'Prepara el examen')}</h3><p>${L("Tria els temes que entren i el dia. Cada dia et proposaré una sessió de repàs del que et costa més i, els últims dies, un simulacre.", 'Elige los temas que entran y el día. Cada día te propondré una sesión de repaso de lo que más te cuesta y, los últimos días, un simulacro.')}</p>
    <label class="lbl">${L('Curs', 'Curso')}</label><div class="exsel">${VAR.courses.map(i => `<button class="${i === EXS.c ? 'on' : ''}" onclick="EXS.c=${i};EXS.u=new Set();examModal()">${esoCurs(i)}</button>`).join('')}</div>
    <label class="lbl">${L('Temes', 'Temas')}</label><div class="exunits">${c.units.map((u, i) => `<label class="exu ${EXS.u.has(i) ? 'on' : ''}"><input type="checkbox" ${EXS.u.has(i) ? 'checked' : ''} onchange="this.checked?EXS.u.add(${i}):EXS.u.delete(${i});this.parentNode.classList.toggle('on',this.checked)"><span>${i + 1}</span>${tx(u.title)}</label>`).join('')}</div>
    <label class="lbl" for="exd">${L("Dia de l'examen", 'Día del examen')}</label><input id="exd" class="nm" type="date" min="${today()}" max="${dayAdd(60)}" value="${EXS.d}" onchange="EXS.d=this.value">
    <p class="err" id="exerr"></p><button class="btn big" onclick="examSave()">${L('FES-ME EL PLA', 'HAZME EL PLAN')}</button>${P.examen ? `<button class="link redt" onclick="P.examen=null;save();closeModal();renderHome()">${L("Esborra l'examen", 'Borra el examen')}</button>` : ''}</div>`);
}
function examSave() {
  if (!EXS.u.size) return $('#exerr').textContent = L('Tria almenys un tema.', 'Elige al menos un tema.');
  if (!EXS.d || daysTo(EXS.d) < 0) return $('#exerr').textContent = L("Posa el dia de l'examen.", 'Pon el día del examen.');
  const same = P.examen && P.examen.c === EXS.c && P.examen.d === EXS.d;
  P.examen = { c: EXS.c, u: [...EXS.u].sort((a, b) => a - b), d: EXS.d, ini: same ? P.examen.ini : today(), s: same ? P.examen.s : {}, sim: same ? P.examen.sim : null };
  save(); closeModal(); renderHome(); SFX.win && SFX.win();
  toast(L(`Pla fet: examen el ${fDay(EXS.d)}. Una sessió cada dia i ho tindràs a punt!`, `Plan hecho: examen el ${fDay(EXS.d)}. ¡Una sesión cada día y lo tendrás a punto!`));
}
function examGo(sim) {
  const ex = P.examen; if (!ex) return;
  const pool = esoPool(ex.c, ex.u); if (!pool.length) return;
  startRun({ mode: 'train', expr: true, sim, ui: null, li: null, plan: esoPlan(pool, sim ? 12 : 10), color: '#7C46B4' });
  if (sim) { LS.helps = HINTS; renderLesson(); }
}
function examDone(k) {
  P.examHist = (P.examHist || []).concat({ d: P.examen.d, c: P.examen.c, u: P.examen.u, com: k, sim: P.examen.sim }).slice(-20);
  P.examen = null; save(); renderHome();
  toast(k === 'be' ? L('Genial! La feina de cada dia es nota 💪', '¡Genial! El trabajo de cada día se nota 💪') : L('Ànims! Mira què ha fallat i ho repassem junts.', '¡Ánimo! Mira qué ha fallado y lo repasamos juntos.'));
}

/* ---------- Contrarellotge ---------- */
const CRONO_S = 120;
function cronoSetup() {
  const us = UNITS_().map((u, i) => ({ u, i })).filter(({ i }) => unitOpen(i) && trainPool(i).length), B = P.stats.bests || {};
  if (!us.length) return toast(L('Primer fes alguna lliçó del camí!', '¡Primero haz alguna lección del camino!'));
  modal(`<div class="sheet"><h3>⏱️ ${L('Contrarellotge', 'Contrarreloj')}</h3><p>${L('2 minuts per encertar tantes preguntes com puguis. Si falles, veuràs la resposta i continues.', '2 minutos para acertar tantas preguntas como puedas. Si fallas, verás la respuesta y sigues.')}</p>
    <div class="crlist">${us.map(({ u, i }) => `<button class="ucard" style="--uc:${u.color}" onclick="cronoGo(${i})"><span><b>${tx(u.title)}</b><small>${L('Unitat', 'Unidad')} ${i + 1}</small></span><span class="grec">🏆 ${B['crono-' + u.id] || 0}</span></button>`).join('')}</div></div>`);
}
let CRT = null;
function cronoGo(ui) {
  const pool = trainPool(ui); if (!pool.length) return;
  const u = UNITS_()[ui];
  startRun({ mode: 'train', crono: { t0: Date.now(), key: 'crono-' + u.id, title: tx(u.title) }, ui: null, li: null, plan: esoPlan(pool, 60), color: u.color });
  LS.helps = HINTS; renderLesson();
  clearInterval(CRT); CRT = setInterval(cronoTick, 250);
}
function cronoLeft() { return LS && LS.crono ? Math.max(0, CRONO_S - (Date.now() - LS.crono.t0) / 1000) : 0; }
function cronoTick() {
  if (!LS || !LS.crono) { clearInterval(CRT); return; }
  const s = cronoLeft(), el = $('#crono');
  const t = Math.ceil(s);
  if (el) { el.textContent = `${Math.floor(t / 60)}:${pad(t % 60)}`; el.classList.toggle('hurry', s <= 15); }
  if (s <= 0) cronoEnd();
}
function cronoEnd() {
  clearInterval(CRT); if (!LS || !LS.crono) return;
  const k = LS.crono.key, score = LS.done, title = L('Temps!|¡Tiempo!', 'Temps!|¡Tiempo!');
  LS = null;
  const B = P.stats.bests, rec = score > (B[k] || 0); if (rec) B[k] = score;
  P.stats.games++; misEvent('game');
  reward({ mode: 'game', title, score, record: rec, best: B[k], xp: Math.max(2, score * 2), gems: Math.floor(score / 2), chest: 0, perfect: false });
}

/* ---------- Fitxes de cada unitat ---------- */
function fitxa(c, ui, back) {
  const u = COURSES[c].units[ui], T = THEORY[u.id]; if (!T) return toast(L('Aquesta unitat encara no té fitxa.', 'Esta unidad todavía no tiene ficha.'));
  VIEW = 'fitxa'; LS = null;
  const li = a => (a || []).map(x => `<li>${tx(x)}</li>`).join('');
  const exs = (T.parts || []).filter(p => p.ex && p.ex.length).map(p => `<div class="fxex"><b>${tx(p.t)}</b>${p.ex.map(x => `<span>${tx(x)}</span>`).join('')}</div>`).join('');
  app.innerHTML = shell(`<div class="fitxa" style="--uc:${u.color}"><button class="link fxback" onclick="go('${back || 'home'}')">‹ ${L('Tornar', 'Volver')}</button>
    <div class="fxhead"><small>${esoCurs(c)} · ${L('UNITAT', 'UNIDAD')} ${ui + 1}</small><h1>${tx(u.title)}</h1><p>${tx(u.desc)}</p></div>
    ${T.recap ? `<section><h2>🔑 ${L("El que t'has de saber", 'Lo que tienes que saber')}</h2><ul class="fxkeys">${li(T.recap)}</ul></section>` : ''}
    ${T.words && T.words.length ? `<section><h2>📖 ${L('Vocabulari', 'Vocabulario')}</h2><dl class="fxwords">${T.words.map(([w, d]) => `<dt>${tx(w)}</dt><dd>${tx(d)}</dd>`).join('')}</dl></section>` : ''}
    ${exs ? `<section><h2>✏️ ${L('Exemples resolts', 'Ejemplos resueltos')}</h2>${exs}</section>` : ''}
    ${T.mistakes && T.mistakes.length ? `<section><h2>⚠️ ${L('Errors típics', 'Errores típicos')}</h2><ul class="fxerr">${T.mistakes.map(m => Array.isArray(m) ? `<li><span class="fxno">✗ ${tx(m[0])}</span><span class="fxyes">✓ ${tx(m[1])}</span></li>` : `<li>${tx(m)}</li>`).join('')}</ul></section>` : ''}
    ${T.tip ? `<section class="fxtip"><b>💡 ${L('Consell', 'Consejo')}</b> ${tx(T.tip)}</section>` : ''}
    <div class="fxbtns"><button class="btn" onclick="closeModal();startTrain(${c === P.course ? ui : 'undefined'})" ${c === P.course && unitOpen(ui) && trainPool(ui).length ? '' : 'hidden'}>${L('PRACTICA AQUEST TEMA', 'PRACTICA ESTE TEMA')}</button><button class="btn ghost" onclick="window.print()">🖨️ ${L('IMPRIMEIX', 'IMPRIME')}</button></div></div>`);
  window.scrollTo(0, 0);
}
function fitxesList() {
  const c = P.course, us = COURSES[c].units;
  modal(`<div class="sheet"><h3>📄 ${L('Fitxes de', 'Fichas de')} ${esoCurs(c)}</h3><p>${L("El resum de cada tema: claus, vocabulari, exemples resolts i errors típics. Les pots imprimir.", 'El resumen de cada tema: claves, vocabulario, ejemplos resueltos y errores típicos. Las puedes imprimir.')}</p>
    <div class="crlist">${us.map((u, i) => THEORY[u.id] ? `<button class="ucard" style="--uc:${u.color}" onclick="closeModal();fitxa(${c},${i},'train')"><span><b>${tx(u.title)}</b><small>${L('Unitat', 'Unidad')} ${i + 1}</small></span><span class="tgo">›</span></button>` : '').join('')}</div></div>`);
}
function esoTools() {
  if (!IS_PRO) return '';
  return `<h2 class="h2">🎓 ${L("Eines d'ESO", 'Herramientas de ESO')}</h2>
    <button class="tcard exprep" onclick="examSetup()"><span class="ti">📅</span><span><b>${L("Prepara l'examen", 'Prepara el examen')}</b><small>${P.examen ? L(`Examen el ${fDay(P.examen.d)}.`, `Examen el ${fDay(P.examen.d)}.`) : L('Temes i dia: et faig un pla de repàs amb simulacre final.', 'Temas y día: te hago un plan de repaso con simulacro final.')}</small></span><span class="tgo">›</span></button>
    <button class="tcard" onclick="cronoSetup()"><span class="ti">⏱️</span><span><b>${L('Contrarellotge', 'Contrarreloj')}</b><small>${L('2 minuts, un tema: quantes n’encertes?', '2 minutos, un tema: ¿cuántas aciertas?')}</small></span><span class="tgo">›</span></button>
    <button class="tcard" onclick="fitxesList()"><span class="ti">📄</span><span><b>${L('Fitxes dels temes', 'Fichas de los temas')}</b><small>${L('Claus, exemples i errors típics de cada unitat.', 'Claves, ejemplos y errores típicos de cada unidad.')}</small></span><span class="tgo">›</span></button>`;
}

/* ---------- Enganxades al motor de sempre ---------- */
let EXFLAG = null;
{
  const fr = finishRun;
  finishRun = function () {
    if (LS && LS.crono) return cronoEnd();
    if (LS && LS.expr && P.examen) {
      const ex = P.examen; ex.s = ex.s || {}; ex.s[today()] = (ex.s[today()] || 0) + 1;
      EXFLAG = { sim: !!LS.sim };
      if (LS.sim) { const nota = Math.round(Math.max(0, LS.total - LS.miss) / LS.total * 100) / 10; EXFLAG.nota = nota; ex.sim = Math.max(ex.sim || 0, nota); }
    }
    return fr();
  };
  const rw = reward;
  reward = function (R) {
    if (EXFLAG && R.mode === 'train') {
      const n = P.examen ? daysTo(P.examen.d) : 99, nota = EXFLAG.nota != null ? String(EXFLAG.nota).replace('.', ',') : null;
      R.sub = EXFLAG.sim ? L(`Nota orientativa del simulacre: <b>${nota}</b>. ${EXFLAG.nota >= 5 ? 'Vas bé! Repassa el que has fallat i demà, a totes.' : 'Encara hi ha temps: fes les sessions de repàs i torna-ho a provar.'}`, `Nota orientativa del simulacro: <b>${nota}</b>. ${EXFLAG.nota >= 5 ? '¡Vas bien! Repasa lo que has fallado y mañana, a por todas.' : 'Aún hay tiempo: haz las sesiones de repaso y vuelve a probarlo.'}`)
        : n > 0 ? L(`Sessió de repàs feta. Queden ${n} ${n === 1 ? 'dia' : 'dies'} per a l'examen.`, `Sesión de repaso hecha. Quedan ${n} ${n === 1 ? 'día' : 'días'} para el examen.`) : L('Sessió feta. Molta sort a l\'examen! 🍀', 'Sesión hecha. ¡Mucha suerte en el examen! 🍀');
      EXFLAG = null;
    }
    return rw(R);
  };
  const rl = renderLesson;
  renderLesson = function () {
    rl();
    if (LS && LS.crono) {
      const cb = $('#combo'); if (cb) { const t = Math.ceil(cronoLeft()); cb.outerHTML = `<div class="crono" id="crono">${Math.floor(t / 60)}:${pad(t % 60)}</div>`; }
    } else if (LS && LS.sim) {
      const top = $('.l-top'); if (top) top.insertAdjacentHTML('afterend', `<div class="simtag">📝 ${L('Simulacre · sense ajudes', 'Simulacro · sin ayudas')}</div>`);
    }
  };
  const ck = check;
  check = function () {
    const wasAsk = LS && LS.state === 'ask';
    ck();
    // a la contrarellotge, si l'encerta passa sola a la següent
    if (wasAsk && LS && LS.crono && LS.state === 'fb' && $('#foot') && $('#foot').classList.contains('ok')) setTimeout(() => { if (LS && LS.crono && LS.state === 'fb') nextEx(); }, 450);
  };
}

// app.js pinta la primera pantalla abans que es carregui aquest fitxer: la tornem a pintar amb les eines d'ESO
if (P && IS_PRO && VIEW === 'home') renderHome();
