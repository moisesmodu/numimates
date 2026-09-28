/* ---------- «Aprèn»: la teoria de l'inici de cada unitat ----------
   Targetes que es passen lliscant. Amb la teoria completa (theory.js: hook, parts, words, mistakes,
   recap, tip) surten: què aprendrem i per a què serveix → un concepte per targeta amb el seu exemple →
   un exercici resolt tal com surt a les lliçons → paraules clau → errors típics i el truc del Cavaller →
   resum → «Comprova-ho» (2 preguntes ràpides). Amb la teoria antiga (idea, steps, tip) surt la versió curta. */
let LRN = null;
function learnCards(ui) {
  const u = UNITS_()[ui], T = (typeof THEORY !== 'undefined' && THEORY[u.id]) || null, cards = [];
  const base = u.lessons.filter(l => l.core && (l.tier || 1) === 1);
  const full = T && T.parts && T.parts.length;
  // 1. portada de la unitat
  const hk = typeof hookClip === 'function' ? hookClip(u.id) : '';
  cards.push(() => `<div class="lcard">${hk ? `<div class="lhook">${hk}<div class="lchar mini">${charClip(u.guide)}</div></div>` : `<div class="lchar">${typeof charClip === 'function' ? charClip(u.guide) : charSVG(u.guide, 'happy')}</div>`}<small class="lk">${L('UNITAT', 'UNIDAD')} ${ui + 1} · ${L('QUÈ APRENDREM', 'QUÉ APRENDEREMOS')}</small>
    <h2>${tx(u.title)}</h2>${full && T.hook ? `<p class="lhook">${tx(T.hook)}</p>` : `<p class="ld">${tx(u.desc)}</p>`}
    ${full ? `<ol class="lidx">${T.parts.map((p, i) => `<li><button onclick="learnJump(${i + 1})"><b>${i + 1}</b>${tx(p.t)}</button></li>`).join('')}</ol>`
      : `<ul class="llist">${base.map(l => `<li>${tx(l.t)}</li>`).join('')}</ul>`}</div>`);
  if (full) {
    // 2. un concepte per targeta
    // si el concepte té escena animada (anim.js), el dibuix i les línies de l'exemple surten sincronitzats
    T.parts.forEach((p, i) => cards.push(() => { const sc = typeof animScene === 'function' ? animScene(u.id, i) : null, tl = k => sc.at[k] ?? sc.at[sc.at.length - 1] + .5 * (k - sc.at.length + 1);
      return `<div class="lcard"><small class="lk">${L('CONCEPTE', 'CONCEPTO')} ${i + 1} ${L('DE', 'DE')} ${T.parts.length}</small>
      <h2>${tx(p.t)}</h2><p class="lidea">${tx(p.x)}</p>
      ${sc ? `<div class="lanim" data-loop="${(Math.max(...sc.at) + 2.6).toFixed(1)}">${sc.html}</div>` : ''}
      ${p.ex && p.ex.length ? `<div class="lexbox"><small>${L('EXEMPLE', 'EJEMPLO')}</small>${p.ex.map((l, k) => `<div class="${k === p.ex.length - 1 ? 'res' : ''}${sc ? ' an a-line' : ''}"${sc ? ` style="--t:${tl(k).toFixed(2)}s"` : ''}>${tx(l)}</div>`).join('')}</div>` : ''}</div>`; }));
  } else if (T) {
    cards.push(() => `<div class="lcard"><small class="lk">💡 ${L('LA IDEA CLAU', 'LA IDEA CLAVE')}</small><p class="lidea">${tx(T.idea)}</p>
      ${T.steps && T.steps.length ? `<ol class="lsteps">${T.steps.map(s => `<li>${tx(s)}</li>`).join('')}</ol>` : ''}</div>`);
  }
  // 3. exercicis resolts, fets amb els mateixos generadors de les lliçons (sempre correctes)
  const seen = new Set(), picks = shuffle(base).slice(0, full ? 1 : 2);
  picks.forEach((l, k) => {
    let e; try { e = genEx(pick(l.sk), Math.max(1, l.L - 1), seen, false); } catch (err) { return; }
    cards.push(() => `<div class="lcard"><small class="lk">✏️ ${full ? L('AIXÍ SURT A LES LLIÇONS', 'ASÍ SALE EN LAS LECCIONES') : L('EXEMPLE RESOLT', 'EJEMPLO RESUELTO') + ' ' + (k + 1)} · ${tx(l.t)}</small>
      <div class="lq">${e.q}</div>${e.vis ? `<div class="l-vis lvis">${e.vis}</div>` : ''}
      <div class="lans"><span>${L('Resposta', 'Respuesta')}:</span> <b>${ansText(e)}</b></div>${e.ex ? `<div class="lex">${e.ex}</div>` : ''}</div>`);
  });
  if (full) {
    // 4. paraules clau
    if (T.words && T.words.length) cards.push(() => `<div class="lcard"><small class="lk">📖 ${L('PARAULES CLAU', 'PALABRAS CLAVE')}</small>
      <dl class="lwords">${T.words.map(([w, d]) => `<div><dt>${tx(w)}</dt><dd>${tx(d)}</dd></div>`).join('')}</dl></div>`);
    // 5. errors típics i el truc del Cavaller
    cards.push(() => `<div class="lcard"><small class="lk">🛡️ ${L('COMPTE AMB AQUESTS ERRORS', 'CUIDADO CON ESTOS ERRORES')}</small>
      ${(T.mistakes || []).map(([bad, good]) => `<div class="lmist"><p class="bad"><i>✕</i>${tx(bad)}</p><p class="good"><i>✓</i>${tx(good)}</p></div>`).join('')}
      ${T.tip ? `<div class="ltip"><div class="lchar sm">${typeof charClip === 'function' ? charClip('cavaller') : charSVG('cavaller', 'happy')}</div><p><small>${L('EL TRUC DEL CAVALLER', 'EL TRUCO DEL CABALLERO')}</small>${tx(T.tip)}</p></div>` : ''}</div>`);
    // 6. resum
    if (T.recap && T.recap.length) cards.push(() => `<div class="lcard"><small class="lk">✅ ${L('RECORDA', 'RECUERDA')}</small><h2>${L('En resum', 'En resumen')}</h2>
      <ul class="lrecap">${T.recap.map(r => `<li>${tx(r)}</li>`).join('')}</ul></div>`);
    // 7. comprova-ho: dues preguntes ràpides
    const qs = learnChecks(base, seen);
    if (qs.length) { LRN_Q = qs; cards.push(() => `<div class="lcard"><small class="lk">🎯 ${L('COMPROVA-HO', 'COMPRUÉBALO')}</small><h2>${L('Ho has entès?', '¿Lo has entendido?')}</h2>
      ${LRN_Q.map((q, i) => `<div class="lchk"><div class="lq">${q.e.q}</div>${q.e.vis ? `<div class="l-vis lvis">${q.e.vis}</div>` : ''}
        <div class="lopts">${q.opts.map((o, k) => `<button class="${q.picked == null ? '' : k === q.ans ? 'ok' : k === q.picked ? 'ko' : 'off'}" ${q.picked != null ? 'disabled' : ''} onclick="learnPick(${i},${k})">${o}</button>`).join('')}</div>
        ${q.picked != null ? `<p class="lfb ${q.picked === q.ans ? 'ok' : 'ko'}">${q.picked === q.ans ? L('Molt bé!', '¡Muy bien!') : L('Gairebé!', '¡Casi!')} ${q.e.ex || ''}</p>` : ''}</div>`).join('')}</div>`); }
  } else if (T && T.tip) cards.push(() => `<div class="lcard"><div class="lchar">${charSVG('cavaller', 'happy')}</div><small class="lk">🛡️ ${L('EL TRUC DEL CAVALLER', 'EL TRUCO DEL CABALLERO')}</small><p class="lidea">${tx(T.tip)}</p></div>`);
  return cards;
}
// preguntes de tria: si l'exercici és de resposta numèrica, en fem 4 opcions
let LRN_Q = [];
function learnChecks(base, seen) {
  const out = [];
  for (let t = 0; t < 40 && out.length < 2; t++) {
    const l = pick(base); let e;
    try { e = genEx(pick(l.sk), Math.max(1, l.L), seen, false); } catch (err) { continue; }
    if (e.type === 'choice' && e.opts && e.opts.length >= 2 && e.opts.length <= 4 && !e.tf) out.push({ e, opts: e.opts, ans: e.ans, picked: null });
    else if (e.type === 'input' && Number.isInteger(e.ans) && !e.dec && !e.neg && typeof numDis === 'function') {
      const vals = shuffle([e.ans, ...numDis(e.ans)]).slice(0, 4); if (!vals.includes(e.ans)) continue;
      const opts = vals.map(v => fmt(v) + (e.unit ? ' ' + e.unit : '')); out.push({ e, opts, ans: vals.indexOf(e.ans), picked: null });
    }
  }
  return out;
}
function learnPick(i, k) {
  const q = LRN_Q[i]; if (!q || q.picked != null) return;
  q.picked = k; if (k === q.ans) { SFX.ok(); } else SFX.ko();
  renderLearn(true);
}
function showLearn(ui, then) {
  const u = UNITS_()[ui]; LRN_Q = [];
  LRN = { ui, i: 0, cards: learnCards(ui), then: then || null, uid: u.id };
  renderLearn();
}
function renderLearn(keep) {
  const n = LRN.cards.length, last = LRN.i === n - 1, u = UNITS_()[LRN.ui], c = LRN.cards[LRN.i];
  const sy = keep ? ($('#lwrap') || {}).scrollTop || 0 : 0;
  app.innerHTML = `<div class="lesson learn" style="--uc:${u.color}"><div class="l-top"><button class="xbtn" onclick="closeLearn(false)" aria-label="${L('Surt', 'Salir')}">✕</button>
    <div class="ldots">${LRN.cards.map((_, k) => `<i class="${k === LRN.i ? 'on' : k < LRN.i ? 'done' : ''}" onclick="learnJump(${k})"></i>`).join('')}</div><span class="lstep">📖</span></div>
    <div class="lwrap" id="lwrap">${typeof c === 'function' ? c() : c}</div>
    <div class="l-foot"><div class="fwrap lnav">${LRN.i ? `<button class="btn ghost" onclick="learnGo(-1)">‹ ${L('ENRERE', 'ATRÁS')}</button>` : '<span></span>'}
      <button class="btn" onclick="${last ? 'closeLearn(true)' : 'learnGo(1)'}">${last ? (LRN.then ? L('COMENÇA LA LLIÇÓ', 'EMPIEZA LA LECCIÓN') : L('ENTESOS!', '¡ENTENDIDO!')) : L('SEGÜENT', 'SIGUIENTE') + ' ›'}</button></div></div></div>`;
  const w = $('#lwrap'); w.scrollTop = sy; let x0 = null;
  clearInterval(renderLearn.loop); const an = $('.lanim');
  if (an) renderLearn.loop = setInterval(() => { const sv = $('.lanim .scene'); if (!sv || !LRN) return clearInterval(renderLearn.loop); sv.replaceWith(sv.cloneNode(true)); }, +an.dataset.loop * 1000);
  w.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  w.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) learnGo(dx < 0 ? 1 : -1); });
}
function learnGo(d) { const j = LRN.i + d; if (j < 0 || j >= LRN.cards.length) return; LRN.i = j; SFX.tap(); renderLearn(); }
function learnJump(j) { if (!LRN || j < 0 || j >= LRN.cards.length || j === LRN.i) return; LRN.i = j; SFX.tap(); renderLearn(); }
function closeLearn(done) {
  const r = LRN; LRN = null; clearInterval(renderLearn.loop);
  P.learned = P.learned || {};
  if (done && (!P.learned[r.uid] || P.learned[r.uid] === 'skip')) { P.learned[r.uid] = today(); addXP(5); save(); toast(L('📖 Teoria llegida: +5 XP', '📖 Teoría leída: +5 XP')); }
  else if (!P.learned[r.uid]) { P.learned[r.uid] = 'skip'; save(); }
  if (done && r.then) return r.then();
  go('home');
}
// teclat: fletxes per passar targetes
document.addEventListener('keydown', e => { if (!LRN || e.target.tagName === 'INPUT') return; if (e.key === 'ArrowRight') learnGo(1); else if (e.key === 'ArrowLeft') learnGo(-1); });
