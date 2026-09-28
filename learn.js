/* ---------- «Aprèn»: una mica de teoria a l'inici de cada unitat ----------
   Targetes que es passen lliscant: què aprendrem, la idea clau (THEORY, a theory.js),
   dos exemples resolts creats amb els mateixos generadors dels exercicis i el truc del Cavaller. */
let LRN = null;
function learnCards(ui) {
  const u = UNITS_()[ui], T = (typeof THEORY !== 'undefined' && THEORY[u.id]) || null, cards = [];
  const base = u.lessons.filter(l => l.core && (l.tier || 1) === 1);
  cards.push(`<div class="lcard"><div class="lchar">${charSVG(u.guide, 'happy')}</div><small class="lk">${L('UNITAT', 'UNIDAD')} ${ui + 1} · ${L('QUÈ APRENDREM', 'QUÉ APRENDEREMOS')}</small>
    <h2>${tx(u.title)}</h2><p class="ld">${tx(u.desc)}</p><ul class="llist">${base.map(l => `<li>${tx(l.t)}</li>`).join('')}</ul></div>`);
  if (T) cards.push(`<div class="lcard"><small class="lk">💡 ${L('LA IDEA CLAU', 'LA IDEA CLAVE')}</small><p class="lidea">${tx(T.idea)}</p>
    ${T.steps && T.steps.length ? `<ol class="lsteps">${T.steps.map(s => `<li>${tx(s)}</li>`).join('')}</ol>` : ''}</div>`);
  // exemples resolts: sempre correctes perquè surten dels generadors
  const seen = new Set(), picks = shuffle(base).slice(0, 2);
  picks.forEach((l, k) => {
    let e; try { e = genEx(pick(l.sk), Math.max(1, l.L - 1), seen, false); } catch (err) { return; }
    cards.push(`<div class="lcard"><small class="lk">✏️ ${L('EXEMPLE RESOLT', 'EJEMPLO RESUELTO')} ${k + 1} · ${tx(l.t)}</small>
      <div class="lq">${e.q}</div>${e.vis ? `<div class="l-vis lvis">${e.vis}</div>` : ''}
      <div class="lans"><span>${L('Resposta', 'Respuesta')}:</span> <b>${ansText(e)}</b></div>${e.ex ? `<div class="lex">${e.ex}</div>` : ''}</div>`);
  });
  if (T && T.tip) cards.push(`<div class="lcard"><div class="lchar">${charSVG('cavaller', 'happy')}</div><small class="lk">🛡️ ${L('EL TRUC DEL CAVALLER', 'EL TRUCO DEL CABALLERO')}</small><p class="lidea">${tx(T.tip)}</p></div>`);
  return cards;
}
function showLearn(ui, then) {
  const u = UNITS_()[ui];
  LRN = { ui, i: 0, cards: learnCards(ui), then: then || null, uid: u.id };
  renderLearn();
}
function renderLearn() {
  const n = LRN.cards.length, last = LRN.i === n - 1, u = UNITS_()[LRN.ui];
  app.innerHTML = `<div class="lesson learn" style="--uc:${u.color}"><div class="l-top"><button class="xbtn" onclick="closeLearn(false)" aria-label="${L('Surt', 'Salir')}">✕</button>
    <div class="ldots">${LRN.cards.map((_, k) => `<i class="${k === LRN.i ? 'on' : k < LRN.i ? 'done' : ''}"></i>`).join('')}</div><span class="lstep">📖</span></div>
    <div class="lwrap" id="lwrap">${LRN.cards[LRN.i]}</div>
    <div class="l-foot"><div class="fwrap lnav">${LRN.i ? `<button class="btn ghost" onclick="learnGo(-1)">‹ ${L('ENRERE', 'ATRÁS')}</button>` : '<span></span>'}
      <button class="btn" onclick="${last ? 'closeLearn(true)' : 'learnGo(1)'}">${last ? (LRN.then ? L('COMENÇA LA LLIÇÓ', 'EMPIEZA LA LECCIÓN') : L('ENTESOS!', '¡ENTENDIDO!')) : L('SEGÜENT', 'SIGUIENTE') + ' ›'}</button></div></div></div>`;
  const w = $('#lwrap'); let x0 = null;
  w.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  w.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) learnGo(dx < 0 ? 1 : -1); });
}
function learnGo(d) { const j = LRN.i + d; if (j < 0 || j >= LRN.cards.length) return; LRN.i = j; SFX.tap(); renderLearn(); }
function closeLearn(done) {
  const r = LRN; LRN = null;
  P.learned = P.learned || {};
  if (done && (!P.learned[r.uid] || P.learned[r.uid] === 'skip')) { P.learned[r.uid] = today(); addXP(5); save(); toast(L('📖 Teoria llegida: +5 XP', '📖 Teoría leída: +5 XP')); }
  else if (!P.learned[r.uid]) { P.learned[r.uid] = 'skip'; save(); }
  if (done && r.then) return r.then();
  go('home');
}
