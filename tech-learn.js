/* ===== Numi Tech · teoria animada i escenes =====
   · Pas «learn» (fase Descobreix): targetes com les de Numi Mates (learn.js), cadascuna amb una animació del concepte
     (TANI) o una demostració en directe d'en Bit executant un programa (el bloc que s'executa s'il·lumina).
   · tScene(): escenes il·lustrades per a les històries (cel, mar, l'illa, en Numi i en Bit).
   Totes les animacions són CSS (l'estat de repòs és el final: amb «reduir moviment» es veu el resultat). */

/* ---------- Demostració en directe: un mini món que executa un programa en bucle ---------- */
let TDEMO = null;
function tDemoStop() { if (TDEMO) { clearTimeout(TDEMO.t); TDEMO = null; } }
// programa d'una demostració: text (TQ) o blocs; pot tenir funcions (fns) i botons premuts (press: 'AB', amb evs)
const tDemoProg = d => { const p = TQ(d.prog); let n = 0; const tag = l => (l || []).forEach(b => { b._d = ++n; tag(b.b); tag(b.e); });
  const fns = d.fns ? TQF(d.fns) : null, evs = d.evs ? TQF(d.evs) : null; tag(p); Object.values(fns || {}).forEach(tag); Object.values(evs || {}).forEach(tag); return { p, fns, evs }; };
function tDemoChips(list) {
  return (list || []).map(b => { const ch = `<span class="tdb c-${BIT_CAT[b.k]}" data-d="${b._d}"><span class="tbi">${BIT_ICO[b.k]}</span><span>${bitLabel(b)}</span></span>`;
    return b.b ? `<span class="tdc c-${BIT_CAT[b.k]}">${ch}<span class="tdin">${tDemoChips(b.b)}</span>${b.e ? `<span class="tdelse">${L('Si no', 'Si no')}</span><span class="tdin">${tDemoChips(b.e)}</span>` : ''}</span>` : ch; }).join('');
}
function tDemoHTML(d) { BIT_FNCTX = d.fnName || null; BIT_VCTX = (d.w && d.w.vname) || null; try { return tDemoHTML_(d); } finally { BIT_FNCTX = null; BIT_VCTX = null; } }
function tDemoHTML_(d) {
  const W = bitWorld(d.w), S = bitSim(W), P = d._p = tDemoProg(d);
  const extra = [...Object.entries(P.fns || {}).map(([f, l]) => `<span class="tdfn"><b>${BIT_ICO.call}${L('Funció', 'Función')} ${d.fnName && d.fnName[f] ? tx(d.fnName[f]) : f}</b>${tDemoChips(l)}</span>`),
    ...Object.entries(P.evs || {}).map(([e, l]) => `<span class="tdfn ev"><b><span class="tevk sm">${e}</span>${L(`Quan premo ${e}`, `Al pulsar ${e}`)}</b>${tDemoChips(l)}</span>`)].join('');
  return `<div class="tdemo"><div class="tdw">${bitSVG(W, S)}<div class="thud">${bitHudHTML(W, S, false)}</div></div><div class="tdprog">${P.evs ? `<span class="tdfn ev"><b>${L('Quan comença', 'Al empezar')}</b>${tDemoChips(P.p)}</span>` : tDemoChips(P.p)}${extra}</div></div>`;
}
function tDemoStart(el, d) {
  tDemoStop();
  const box = el.querySelector('.tdemo'); if (!box) return;
  const me = TDEMO = { t: 0 }, P = d._p || tDemoProg(d);
  const reset = () => { const W = bitWorld(d.w), S = bitSim(W); me.W = W; me.S = S; me.prev = null;
    me.gen = d.press ? bitEvGen(W, S, P.p, P.fns, P.evs, d.press) : bitRun(W, S, P.p, P.fns);
    box.querySelector('.tdw').innerHTML = bitSVG(W, S) + `<div class="thud">${bitHudHTML(W, S, false)}</div>`; box.querySelectorAll('.tdb').forEach(b => b.classList.remove('now', 'did')); box.querySelectorAll('.tevk').forEach(b => b.classList.remove('hit')); };
  const step = () => {
    if (TDEMO !== me || !document.body.contains(box)) return;
    let r; do { r = me.gen.next(); } while (!r.done && !r.value.act && !r.value.press && !me.S.crash && !(r.value.b && r.value.b.b));
    if (r.done || me.S.crash) {
      if (!me.S.crash && !bitMiss(me.W, me.S)) { const sp = box.querySelector('.bsp'); if (sp) { sp.classList.remove('walk', 'turn'); void sp.getBoundingClientRect(); sp.classList.add('yay'); } }
      me.t = setTimeout(() => { if (TDEMO !== me) return; reset(); me.t = setTimeout(step, 900); }, 1900); return; }
    if (r.value.press) { box.querySelectorAll('.tdfn.ev .tevk').forEach(k => k.classList.toggle('hit', k.textContent === r.value.press)); me.t = setTimeout(step, 700); return; }
    const b = r.value.b, chips = box.querySelectorAll('.tdb');
    chips.forEach(c => { if (c.classList.contains('now')) { c.classList.remove('now'); c.classList.add('did'); } });
    const c = box.querySelector(`.tdb[data-d="${b._d}"]`); if (c) c.classList.add('now');
    if (r.value.act) { const svg = box.querySelector('.bitw'); bitPaintState(svg, me.W, me.S, me.prev); me.prev = { x: me.S.x, y: me.S.y, d: me.S.d, carry: me.S.carry, led: me.S.led };
      const hud = box.querySelector('.thud'); if (hud) hud.innerHTML = bitHudHTML(me.W, me.S, ['add', 'sub', 'setv'].includes(b.k) || me.S.v !== 0);
      if (b.k === 'note') bitSnd('note', b.n);
      if (me.S.crash) { const sp = svg.querySelector('.bsp'); sp && sp.classList.add('hit'); } }
    me.t = setTimeout(step, r.value.act ? (d.speed || 850) : 450);
  };
  reset(); me.t = setTimeout(step, 900);
}

/* ---------- Animacions de concepte (SVG + CSS, en bucle) ---------- */
const tA = (t, cls = 'ta-pop') => `class="ta ${cls}" style="--t:${t}s"`;
// una etiqueta amb dues «class» (p. ex. class="tat s" ${tA(…)}) en fa una de sola: si no, el navegador ignora la segona i no s'anima
const tCls = b => b.replace(/<([a-zA-Z]+)([^<>]*?)\sclass="([^"]*)"([^<>]*?)\sclass="([^"]*)"/g, '<$1$2 class="$3 $5"$4');
const tSvg = (h, body, cls = '') => `<svg class="tani ${cls}" viewBox="0 0 320 ${h}" aria-hidden="true">${typeof bitDefs === 'function' ? bitDefs() : ''}${tCls(body)}</svg>`;
// en Bit en petit (vista de cara o d'esquena…), per posar-lo dins d'una animació
const tBitMini = (x, y, d = 2, s = 1, extra = '') => `<g transform="translate(${x} ${y}) scale(${s})" ${extra}>${bitBot(d)}</g>`;
const tCard = (x, y, w, h, n, txt, t, col = '#2F5BEA') => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${n ? `<circle cx="${x + 20}" cy="${y + h / 2}" r="12" fill="${col}"/><text x="${x + 20}" y="${y + h / 2 + 5}" text-anchor="middle" class="tat w">${n}</text>` : ''}<text x="${x + (n ? 40 : 14)}" y="${y + h / 2 + 5}" class="tat">${txt}</text></g>`;
const TANI = {
  // un algorisme és una llista de passos en ordre (la recepta)
  algo() {
    const st = [L('Trenca els ous', 'Casca los huevos'), L('Bat-los', 'Bátelos'), L('Posa-hi sucre', 'Añade azúcar'), L('Al forn!', '¡Al horno!')];
    return tSvg(214, `<rect x="16" y="10" width="170" height="194" rx="18" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><text x="101" y="36" text-anchor="middle" class="tat b">${L('RECEPTA', 'RECETA')}</text>
      ${st.map((s, i) => tCard(26, 46 + i * 38, 150, 30, i + 1, s, .3 + i * .55, '#F08A24')).join('')}
      <g ${tA(2.7, 'ta-in')}><path d="M196 110h30" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/><path d="M222 100l12 10-12 10" fill="none" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(3.1)}><circle cx="276" cy="104" r="34" fill="#FFE9C7"/><path d="M252 112h48l-6 22h-36z" fill="#C98A4B" stroke="#7A4A1E" stroke-width="2.5" stroke-linejoin="round"/><path d="M256 112q20 -26 40 0" fill="#F7C873" stroke="#B57536" stroke-width="2.5"/><path d="M268 96q4 -8 0 -14M280 94q4 -8 0 -14" stroke="#B9B9B9" stroke-width="2.5" fill="none" stroke-linecap="round" class="ta-steam"/></g>
      <text x="276" y="166" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('resultat', 'resultado')}</text>`);
  },
  // l'ordre importa: mitjó i sabata
  order() {
    const sock = (x, y) => `<path d="M${x} ${y}h16v22q0 10 10 10h10v12h-26q-10 0 -10 -10z" fill="#8B5CF6" stroke="#5B35B5" stroke-width="2.5" stroke-linejoin="round"/><path d="M${x} ${y + 6}h16" stroke="#fff" stroke-width="3"/>`;
    const shoe = (x, y) => `<path d="M${x} ${y + 18}q0 -18 14 -18h6q4 12 18 14q12 2 12 12v8h-50z" fill="#EF5A5A" stroke="#A9302A" stroke-width="2.5" stroke-linejoin="round"/><path d="M${x} ${y + 32}h50" stroke="#fff" stroke-width="3"/>`;
    return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="12" width="146" height="190" rx="18" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/>
      <text x="83" y="38" text-anchor="middle" class="tat s">1. ${L('mitjó', 'calcetín')} · 2. ${L('sabata', 'zapato')}</text></g>
      <g ${tA(.6)}>${sock(52, 60)}</g><g ${tA(1.1)}>${shoe(44, 116)}</g><g ${tA(1.6)}><circle cx="83" cy="180" r="14" fill="#3CC47C"/><path d="M76 180l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.2, 'ta-in')}><rect x="164" y="12" width="146" height="190" rx="18" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2"/>
      <text x="237" y="38" text-anchor="middle" class="tat s">1. ${L('sabata', 'zapato')} · 2. ${L('mitjó', 'calcetín')}</text></g>
      <g ${tA(2.6)}>${shoe(212, 86)}</g><g ${tA(3.1, 'ta-wob')}>${sock(222, 60)}</g><g ${tA(3.6)}><circle cx="237" cy="180" r="14" fill="#EF5A5A"/><path d="M231 174l12 12M243 174l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>`);
  },
  // girar no mou de casella
  turn() {
    const tile = `<rect x="110" y="48" width="100" height="100" rx="18" fill="#F2DDA9" stroke="#E2BE76" stroke-width="2"/>`;
    return tSvg(214, `${tile}<ellipse cx="160" cy="150" rx="70" ry="10" fill="#0B2A12" opacity=".08"/>
      <g class="ta-turnbot" transform="translate(160 134) scale(1.25)"><g class="tv tv0">${bitBot(2)}</g><g class="tv tv1">${bitBot(1)}</g><g class="tv tv2">${bitBot(0)}</g><g class="tv tv3">${bitBot(3)}</g></g>
      <path d="M96 70 A70 40 0 0 0 96 130" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M90 124l6 10l8 -8" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="160" y="190" text-anchor="middle" class="tat b">${L('Gira… però és a la mateixa casella', 'Gira… pero está en la misma casilla')}</text>`, 'loop4');
  },
  // la dreta d'un i de l'altre: cara a cara
  mirror() {
    // un nen d'esquena (com tu) i un de cara: tots dos aixequen la mà DRETA
    const kid = (x, front, col, lab, t) => { const side = front ? -1 : 1;
      return `<g transform="translate(${x} 156)"><ellipse cy="2" rx="30" ry="6" fill="#0B1838" opacity=".08"/>
      <path d="M-7 -22v22M7 -22v22" stroke="#34405E" stroke-width="9" stroke-linecap="round"/><rect x="-19" y="-74" width="38" height="56" rx="13" fill="${col}"/>
      <path d="M${-side * 19} -64l${-side * 12} 26" stroke="${col}" stroke-width="10" stroke-linecap="round"/>
      <g class="ta-raise" style="--t:${t}s"><path d="M${side * 19} -66l${side * 16} -32" stroke="${col}" stroke-width="10" stroke-linecap="round"/><circle cx="${side * 36}" cy="-100" r="7" fill="#FFD9B8"/></g>
      <circle cy="-94" r="21" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2.5"/>${front ? `<path d="M-21 -98q21 -28 42 0q-6 -16 -21 -16q-15 0 -21 16z" fill="#6B3F20"/><circle cx="-7" cy="-93" r="2.6" fill="#2B1A38"/><circle cx="7" cy="-93" r="2.6" fill="#2B1A38"/><path d="M-6 -85q6 5 12 0" stroke="#2B1A38" stroke-width="2.4" fill="none" stroke-linecap="round"/>` : `<path d="M-21 -92q0 -26 21 -24q21 -2 21 24q-3 10 -21 12q-18 -2 -21 -12z" fill="#6B3F20"/>`}
      <text y="22" text-anchor="middle" class="tat s">${lab}</text>
      <g ${tA(t + .3, 'ta-in')}><rect x="${side * 36 - 34}" y="-142" width="68" height="24" rx="12" fill="${col}"/><text x="${side * 36}" y="-125" text-anchor="middle" class="tat w s">${L('dreta', 'derecha')}</text></g></g>`; };
    return tSvg(214, `<rect x="0" y="158" width="320" height="8" rx="4" fill="#E3E9FA"/>${kid(74, false, '#2F5BEA', L("d'esquena", 'de espaldas'), .4)}${kid(246, true, '#F08A24', L('de cara', 'de cara'), 1.4)}
      <text x="160" y="206" text-anchor="middle" class="tat b" ${tA(2.4, 'ta-fade')}>${L('A la pantalla, a costats diferents!', '¡En la pantalla, en lados diferentes!')}</text>`);
  },
  // un bug: la lupa recorre el programa i el troba
  bug() {
    const ks = ['fwd', 'fwd', 'right', 'fwd'], y0 = 22;
    const blk = (k, i) => `<g transform="translate(16 ${y0 + i * 40})"><rect width="196" height="32" rx="9" fill="${i === 2 ? '#EF5A5A' : '#3D7BF4'}" class="${i === 2 ? 'ta-bugblk' : ''}"/><g transform="translate(6 4)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="36" y="21" class="tat w">${bitLabel({ k })}</text></g>`;
    return tSvg(214, `${ks.map(blk).join('')}
      <g class="ta-lupa"><circle cx="0" cy="0" r="22" fill="#E8F4FF" fill-opacity=".55" stroke="#20306A" stroke-width="5"/><path d="M16 16l18 18" stroke="#20306A" stroke-width="8" stroke-linecap="round"/></g>
      <g transform="translate(262 102)"><g ${tA(2.4)}><ellipse rx="16" ry="12" fill="#3B3B3B"/><circle cx="-14" cy="-6" r="7" fill="#3B3B3B"/><path d="M-6 -12l-4 -10M2 -12l4 -10M-10 12l-6 8M10 12l6 8M0 12v10" stroke="#3B3B3B" stroke-width="3" stroke-linecap="round"/><circle cx="-16" cy="-8" r="2" fill="#fff"/></g></g>
      <text x="270" y="170" text-anchor="middle" class="tat s" ${tA(2.6, 'ta-fade')}>bug!</text>`, 'loop5');
  },
  // descompondre: un problema gran es parteix en trossos
  decompose() {
    const parts = [L('Anar a la caixa', 'Ir a la caja'), L('Agafar-la', 'Cogerla'), L('Anar a la casa', 'Ir a la casa'), L('Deixar-la', 'Dejarla')];
    return tSvg(220, `<g ${tA(.2)}><rect x="70" y="10" width="180" height="56" rx="16" fill="#1B2B6B"/><text x="160" y="44" text-anchor="middle" class="tat w b">${L('Repartir una caixa', 'Repartir una caja')}</text></g>
      ${parts.map((p, i) => { const x = 8 + (i % 2) * 158, y = 96 + Math.floor(i / 2) * 60; return `<path d="M160 66 L${x + 75} ${y}" stroke="#C9D6FB" stroke-width="3" ${tA(.9 + i * .35, 'ta-fade')}/>`; }).join('')}
      ${parts.map((p, i) => { const x = 8 + (i % 2) * 158, y = 96 + Math.floor(i / 2) * 60; return tCard(x, y, 150, 46, i + 1, p, 1 + i * .35, ['#3D7BF4', '#F08A24', '#3D7BF4', '#F08A24'][i]); }).join('')}`);
  },
  // tipus d'error
  bugtypes() {
    const it = [[L('Falta un bloc', 'Falta un bloque'), '#F2B21B'], [L('Sobra un bloc', 'Sobra un bloque'), '#F08A24'], [L('Un bloc equivocat', 'Un bloque equivocado'), '#EF5A5A'], [L("Els blocs en mal ordre", 'Los bloques en mal orden'), '#8B5CF6']];
    return tSvg(206, it.map(([t, c], i) => `<g ${tA(.3 + i * .45, 'ta-in')}><rect x="24" y="${8 + i * 49}" width="272" height="42" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="48" cy="${29 + i * 49}" r="13" fill="${c}"/><text x="48" y="${34 + i * 49}" text-anchor="middle" class="tat w">${i + 1}</text><text x="72" y="${34 + i * 49}" class="tat">${t}</text></g>`).join(''));
  },
  // pas a pas: un bloc cada vegada
  step() {
    return tSvg(190, `${[0, 1, 2, 3].map(i => `<g transform="translate(${30 + i * 70} 40)"><rect width="56" height="56" rx="14" fill="#E8EEFF" stroke="#C9D6FB" stroke-width="2"/><path class="ta-foot" style="--t:${.4 + i * .7}s" d="M22 40c-6 0 -8 -8 -6 -16s8 -14 12 -10s2 12 0 18s-2 8 -6 8z" fill="#2F5BEA"/></g>`).join('')}
      <text x="160" y="140" text-anchor="middle" class="tat b">${L('Un bloc… pausa… un altre bloc…', 'Un bloque… pausa… otro bloque…')}</text><text x="160" y="166" text-anchor="middle" class="tat s">${L('com a càmera lenta', 'como a cámara lenta')}</text>`);
  },
  // planificar: llista que es va marcant
  plan() {
    const it = [L('Què ha de fer en Bit?', '¿Qué tiene que hacer Bit?'), L('Partir-ho en trossos', 'Partirlo en trozos'), L('Passar-ho a blocs', 'Pasarlo a bloques'), L('Provar-ho i millorar-ho', 'Probarlo y mejorarlo')];
    return tSvg(214, `<rect x="40" y="8" width="240" height="198" rx="18" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><rect x="132" y="0" width="56" height="18" rx="6" fill="#C98A4B"/>
      ${it.map((t, i) => `<g transform="translate(62 ${40 + i * 42})"><rect width="24" height="24" rx="6" fill="#fff" stroke="#C9B48A" stroke-width="2"/><path ${tA(.5 + i * .7, 'ta-draw')} pathLength="1" d="M5 12l5 5l9 -11" stroke="#3CC47C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="36" y="18" class="tat s">${t}</text></g>`).join('')}`);
  },
  // ---------- Robot, unitat 2 ----------
  // repeticions de cada dia: aplaudir, pujar escales, la tornada d'una cançó
  u2life() {
    const card = (x, i, art, lab, n) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${x}" y="12" width="96" height="156" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      ${art}<text x="${x + 48}" y="152" text-anchor="middle" class="tat s">${lab}</text>
      <g transform="translate(${x + 78} 14)"><rect x="-22" y="-12" width="44" height="26" rx="13" fill="#1FA463" stroke="#fff" stroke-width="2.5"/><text y="6" text-anchor="middle" class="tat w s">×${n}</text></g></g>`;
    // mans que aplaudeixen
    const hand = s => `<g><animateTransform attributeName="transform" type="translate" values="0 0;${-s * 9} 0;0 0" dur=".7s" repeatCount="indefinite"/><g transform="translate(${s * 18} 0) rotate(${s * 12})"><rect x="-11" y="-24" width="22" height="40" rx="11" fill="#FFD9B8" stroke="#C98A5E" stroke-width="2.4"/><rect x="${s > 0 ? 6 : -14}" y="-12" width="8" height="18" rx="4" fill="#FFD9B8" stroke="#C98A5E" stroke-width="2.2"/></g></g>`;
    const clap = `<g transform="translate(56 82)">${hand(-1)}${hand(1)}<g fill="#F2B21B"><path d="M0 -40v-10M-14 -36l-6 -8M14 -36l6 -8"><animate attributeName="opacity" values="0;1;0" dur=".7s" repeatCount="indefinite"/></path></g><path d="M0 -40v-10M-14 -36l-6 -8M14 -36l6 -8" stroke="#F2B21B" stroke-width="4" stroke-linecap="round"><animate attributeName="opacity" values="1;0;1" dur=".7s" repeatCount="indefinite"/></path></g>`;
    // escala amb una pilota que puja graó a graó
    const st = [0, 1, 2, 3].map(k => `<rect x="${126 + k * 16}" y="${110 - k * 16}" width="${64 - k * 16}" height="16" rx="3" fill="url(#bwWood)" stroke="#8A5A33" stroke-width="1.8"/>`).join('');
    const stairs = `${st}<g><animateMotion dur="2.6s" repeatCount="indefinite" path="M134 100 L134 84 L150 84 L150 68 L166 68 L166 52 L182 52 L182 36 L182 36" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/><circle r="8" fill="#3D7BF4" stroke="#20306A" stroke-width="2.2"/><circle cx="-2.5" cy="-2.5" r="2.4" fill="#fff" opacity=".8"/></g>`;
    // notes de la tornada que salten
    const note = (x, y, d, c) => `<g transform="translate(${x} ${y})"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="1.2s" begin="${d}s" repeatCount="indefinite"/><path d="M6 -26v26" stroke="${c}" stroke-width="3.4"/><ellipse cx="0" cy="0" rx="7.5" ry="5.6" fill="${c}" transform="rotate(-20)"/><path d="M6 -26q10 4 9 14" stroke="${c}" stroke-width="3.4" fill="none" stroke-linecap="round"/></g></g>`;
    const song = `${note(238, 92, 0, '#14A3B8')}${note(262, 76, .4, '#E5489A')}${note(286, 92, .8, '#8B5CF6')}<path d="M232 112q32 14 64 0" stroke="#C9D6FB" stroke-width="3" fill="none" stroke-dasharray="5 6" class="ta-dash"/>`;
    return tSvg(214, `${card(8, 0, clap, L('Aplaudir', 'Aplaudir'), 3)}${card(112, 1, stairs, L('Escales', 'Escaleras'), 4)}${card(216, 2, song, L('Cançó', 'Canción'), 2)}
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.9, 'ta-fade')}>${L('Repetim coses cada dia!', '¡Repetimos cosas cada día!')}</text>`);
  },
  // molts blocs iguals (cansa) contra un sol bucle
  u2tired() {
    const ico = (k, x, y, s) => `<g transform="translate(${x} ${y})" color="#fff"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const blk = (x, y, w, i) => `<g ${tA(.2 + i * .22, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="19" rx="6" fill="#3D7BF4"/>${ico('fwd', x + 4, y + 2, 15)}<text x="${x + 24}" y="${y + 14.5}" class="tat w s">${L('Endavant', 'Adelante')}</text></g>`;
    const left = Array.from({ length: 7 }, (_, i) => blk(12, 34 + i * 21, 100, i)).join('');
    return tSvg(214, `<text x="62" y="22" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Sense bucle', 'Sin bucle')}</text><text x="232" y="22" text-anchor="middle" class="tat s">${L('Amb bucle', 'Con bucle')}</text>
      ${left}
      <g ${tA(1.9, 'ta-pop')}><rect x="18" y="186" width="88" height="24" rx="12" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="62" y="203" text-anchor="middle" class="tat s" style="fill:#C0392B">7 ${L('blocs', 'bloques')}</text></g>
      <g ${tA(2.3, 'ta-in')}><path d="M118 112h16" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M131 102l10 10-10 10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.6, 'ta-pop')}><rect x="148" y="70" width="168" height="30" rx="9" fill="#1FA463"/>${ico('rep', 153, 76, 18)}<text x="175" y="90" class="tat w s" style="font-size:12.5px">${L('Repeteix', 'Repite')} <tspan font-weight="900">7</tspan> ${L('vegades', 'veces')}</text>
        <rect x="148" y="96" width="16" height="44" fill="#1FA463"/><rect x="148" y="128" width="86" height="14" rx="6" fill="#1FA463"/>
        <rect x="166" y="102" width="118" height="22" rx="6" fill="#3D7BF4"/>${ico('fwd', 170, 105, 16)}<text x="191" y="118" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <g ${tA(3.2, 'ta-pop')}><rect x="188" y="186" width="88" height="24" rx="12" fill="#E7F7EE" stroke="#1FA463" stroke-width="2"/><text x="232" y="203" text-anchor="middle" class="tat s" style="fill:#147A47">2 ${L('blocs', 'bloques')} ✓</text></g>`);
  },
  // un bucle per dins: fa el bloc, torna a dalt i compta una volta més
  u2loop() {
    const ico = (k, x, y, s) => `<g transform="translate(${x} ${y})" color="#fff"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const T = [.145, .364, .582], kt = (a, b) => `0;${a};${b};1`;
    const num = (n, a, b) => `<text x="0" y="10" text-anchor="middle" font-size="28" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#147A47" opacity="0">${n}<animate attributeName="opacity" values="0;1;0;0" keyTimes="${kt(a, b)}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`;
    const X = i => 74 + i * 44;
    const tiles = [0, 1, 2, 3].map(i => `<rect x="${X(i)}" y="128" width="38" height="38" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.6"/>`).join('');
    const tick = [1, 2, 3].map(i => `<g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;${(T[i - 1] + .09).toFixed(3)};.97" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><circle cx="${X(i) + 19}" cy="184" r="10" fill="#1FA463"/><text x="${X(i) + 19}" y="189" text-anchor="middle" class="tat w s">${i}</text></g>`).join('');
    const flash = `<rect x="50" y="56" width="132" height="26" rx="7" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;.6;0;.6;0;.6;0;0" keyTimes="0;.145;.2;.364;.42;.582;.64;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`;
    return tSvg(214, `<g ${tA(.1, 'ta-fade')}><rect x="32" y="12" width="182" height="30" rx="9" fill="#1FA463"/>${ico('rep', 38, 18, 18)}<text x="62" y="32" class="tat w s">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="32" y="38" width="16" height="58" fill="#1FA463"/><rect x="32" y="88" width="100" height="14" rx="6" fill="#1FA463"/>
        <rect x="50" y="56" width="132" height="26" rx="7" fill="#3D7BF4"/>${ico('fwd', 55, 60, 18)}<text x="78" y="74" class="tat w s">${L('Endavant', 'Adelante')}</text>${flash}</g>
      <path d="M24 94 C8 94 8 28 24 28" fill="none" stroke="#1FA463" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M18 22l8 6l-8 6" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="translate(270 54)"><circle r="28" fill="#fff" stroke="#1FA463" stroke-width="3.5" filter="url(#bwSh)"/>${num(1, T[0], T[1])}${num(2, T[1], T[2])}${num(3, T[2], .945)}</g>
      <text x="270" y="104" text-anchor="middle" class="tat s">${L('volta', 'vuelta')}</text>
      ${tiles}${tick}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;44 0;44 0;88 0;88 0;132 0;132 0;0 0" keyTimes="0;.145;.236;.364;.455;.582;.673;.97;1" dur="5.5s" repeatCount="indefinite"/>${tBitMini(X(0) + 19, 160, 1, .6)}</g>
      <text x="288" y="152" text-anchor="middle" class="tat s" style="fill:#147A47" opacity="0">${L('Fi!', '¡Fin!')}<animate attributeName="opacity" values="0;1;0" keyTimes="0;.72;.97" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>
      <text x="160" y="210" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Fa el bloc de dins i torna a començar', 'Hace el bloque de dentro y vuelve a empezar')}</text>`);
  },
  // un patró: el mateix tros, una vegada i una altra
  u2pattern() {
    const sh = (k, cx, cy, s = 1) => k === 0 ? `<circle cx="${cx}" cy="${cy}" r="${12 * s}" fill="#EF5A5A" stroke="#A9302A" stroke-width="2.4"/>`
      : k === 1 ? `<rect x="${cx - 11 * s}" y="${cy - 11 * s}" width="${22 * s}" height="${22 * s}" rx="${4 * s}" fill="#FFC531" stroke="#B98A00" stroke-width="2.4"/>`
        : `<path d="M${cx} ${cy - 13 * s}L${cx + 13 * s} ${cy + 10 * s}H${cx - 13 * s}Z" fill="#3D8BFF" stroke="#1F5CB8" stroke-width="2.4" stroke-linejoin="round"/>`;
    const row = Array.from({ length: 9 }, (_, i) => `<g ${tA(.2 + i * .18, 'ta-pop')}>${sh(i % 3, 26 + i * 33.5, 48)}</g>`).join('');
    const br = [0, 1, 2].map(g => { const x0 = 12 + g * 100.5, x1 = x0 + 94; return `<g ${tA(2 + g * .35, 'ta-fade')}><path d="M${x0} 72v8h${x1 - x0}v-8" fill="none" stroke="#1FA463" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${(x0 + x1) / 2}" cy="96" r="12" fill="#1FA463"/><text x="${(x0 + x1) / 2}" y="101" text-anchor="middle" class="tat w s">${g + 1}</text></g>`; }).join('');
    const ico = `<g transform="translate(58 138)" color="#fff"><svg width="18" height="18" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    return tSvg(214, `${row}${br}
      <g ${tA(3.3, 'ta-pop')}><rect x="52" y="132" width="216" height="30" rx="9" fill="#1FA463"/>${ico}<text x="82" y="152" class="tat w s">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="52" y="158" width="16" height="40" fill="#1FA463"/><rect x="52" y="190" width="110" height="14" rx="6" fill="#1FA463"/>
        <rect x="72" y="164" width="120" height="26" rx="7" fill="#fff" stroke="#A8E0C0" stroke-width="2"/>${sh(0, 98, 177, .75)}${sh(1, 132, 177, .75)}${sh(2, 166, 177, .75)}</g>
      <text x="284" y="186" text-anchor="middle" class="tat b" style="fill:#147A47" ${tA(3.8, 'ta-fade')}>${L('patró!', '¡patrón!')}</text>`);
  },
  // l'escala: el programa llarg té el mateix tros 3 vegades
  u2stairs() {
    const ico = (k, x, y, s, c = '#fff') => `<g transform="translate(${x} ${y})" color="${c}"><svg width="${s}" height="${s}" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const cells = [[0, 4], [1, 4], [1, 3], [2, 3], [2, 2], [3, 2], [3, 1]], C = 30, X0 = 10, Y0 = 34;
    const cx = c => X0 + c * C + C / 2, cy = r => Y0 + r * C + C / 2;
    const tiles = cells.map(([c, r], i) => `<rect x="${X0 + c * C + 1.5}" y="${Y0 + r * C + 1.5}" width="${C - 3}" height="${C - 3}" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>${i ? `<rect x="${X0 + c * C + 4}" y="${Y0 + r * C + 4}" width="${C - 8}" height="${C - 8}" rx="5" fill="#1FA463" fill-opacity=".3" ${tA(.6 + Math.floor((i - 1) / 2) * .6, 'ta-fade')}/>` : ''}`).join('');
    const path = cells.map(([c, r], i) => `${i ? 'L' : 'M'}${cx(c)} ${cy(r) + 10}`).join(' ');
    const seq = ['fwd', 'left', 'fwd', 'right'];
    const rows = [0, 1, 2].map(r => `<g ${tA(.6 + r * .6, 'ta-in')}>${seq.map((k, j) => `<rect x="${150 + j * 31}" y="${30 + r * 38}" width="27" height="27" rx="7" fill="#3D7BF4"/>${ico(k, 154 + j * 31, 34 + r * 38, 19)}`).join('')}
      <circle cx="292" cy="${43.5 + r * 38}" r="12" fill="#1FA463"/><text x="292" y="${48.5 + r * 38}" text-anchor="middle" class="tat w s">${r + 1}</text></g>`).join('');
    return tSvg(214, `${tiles}<g><animateMotion dur="5.5s" repeatCount="indefinite" path="${path}" keyPoints="0;0;1;1" keyTimes="0;.1;.75;1" calcMode="linear"/>${tBitMini(0, 0, 1, .42)}</g>
      <path d="M140 34v104" stroke="#DCE4FA" stroke-width="2"/>${rows}
      <g ${tA(2.6, 'ta-pop')}><rect x="146" y="150" width="170" height="28" rx="9" fill="#1FA463"/>${ico('rep', 151, 155, 18)}<text x="172" y="169" class="tat w s" style="font-size:12.5px">${L('Repeteix', 'Repite')} <tspan font-weight="900">3</tspan> ${L('vegades', 'veces')}</text>
        <rect x="146" y="174" width="12" height="30" fill="#1FA463"/><rect x="146" y="198" width="70" height="10" rx="5" fill="#1FA463"/>
        ${seq.map((k, j) => `<rect x="${166 + j * 25}" y="${178 + 0}" width="22" height="20" rx="5" fill="#3D7BF4"/>${ico(k, 169 + j * 25, 180, 16)}`).join('')}</g>`);
  },
  // el llapis: pinta cada casella on entra en Bit (la de sortida, no)
  u2pen() {
    const X = i => 11 + i * 50, arr = [.145, .273, .4, .527, .655];
    const tiles = [0, 1, 2, 3, 4, 5].map(i => `<rect x="${X(i)}" y="84" width="44" height="44" rx="11" fill="url(#bwSand)" stroke="${i ? '#E2BE76' : '#20306A'}" stroke-width="${i ? 1.6 : 2.4}" ${i ? '' : 'stroke-dasharray="6 5"'}/>`).join('');
    const paint = [1, 2, 3, 4, 5].map(i => `<rect x="${X(i) + 5}" y="89" width="34" height="34" rx="8" fill="#8B5CF6" opacity="0"><animate attributeName="opacity" values="0;.92;0" keyTimes="0;${arr[i - 1]};.945" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`).join('');
    const pencil = `<g transform="translate(-15 -4) rotate(-38)"><rect x="-3.5" y="-34" width="7" height="27" rx="1.5" fill="#FFC531" stroke="#B98A00" stroke-width="1.6"/><rect x="-3.5" y="-38" width="7" height="6" rx="1.5" fill="#F48FB1" stroke="#B98A00" stroke-width="1.4"/><path d="M-3.5 -7L0 2L3.5 -7Z" fill="#F6DCA8" stroke="#B98A00" stroke-width="1.4" stroke-linejoin="round"/><circle cy="0" r="1.6" fill="#8B5CF6"/></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-fade')}><rect x="104" y="12" width="112" height="28" rx="14" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2"/><text x="160" y="31" text-anchor="middle" class="tat s" style="fill:#5B35B5">✏️ ${L('Llapis posat', 'Lápiz puesto')}</text></g>
      ${tiles}${paint}
      <text x="${X(0) + 22}" y="148" text-anchor="middle" class="tat s">${L('sortida', 'salida')}</text>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;50 0;50 0;100 0;100 0;150 0;150 0;200 0;200 0;250 0;250 0;0 0" keyTimes="0;.073;.145;.2;.273;.327;.4;.455;.527;.582;.655;.945;1" dur="5.5s" repeatCount="indefinite"/>
        <g transform="translate(${X(0) + 22} 122)">${pencil}${bitBot(1)}</g></g>
      <text x="160" y="180" text-anchor="middle" class="tat b" ${tA(1.2, 'ta-fade')}>${L('Pinta les caselles on entra', 'Pinta las casillas donde entra')}</text>
      <text x="160" y="204" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3.8, 'ta-fade')}>${L('La casella de sortida no es pinta', 'La casilla de salida no se pinta')}</text>`, '');
  },
  // compte: «Pinta» no mou en Bit (cal alternar Endavant i Pinta)
  u2paint() {
    const X = i => 64 + i * 50, cols = ['#EF5A5A', '#FFC531', '#3CC47C', '#3D8BFF'];
    const band = (y, ok, title) => `<rect x="8" y="${y}" width="304" height="94" rx="16" fill="#fff" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2" filter="url(#bwSh)"/>
      <circle cx="34" cy="${y + 52}" r="15" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M27 ${y + 52}l5 5l9 -10" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M28 ${y + 46}l12 12M40 ${y + 46}l-12 12" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>`}
      <text x="64" y="${y + 22}" class="tat s">${title}</text>
      ${[0, 1, 2, 3, 4].map(i => `<rect x="${X(i)}" y="${y + 34}" width="42" height="42" rx="10" fill="url(#bwSand)" stroke="${i ? '#E2BE76' : '#20306A'}" stroke-width="${i ? 1.5 : 2.2}" ${!i && ok ? 'stroke-dasharray="6 5"' : ''}/>`).join('')}`;
    // a dalt: en Bit es queda quiet i la mateixa casella canvia de color
    const top = `<rect x="${X(0) + 5}" y="47" width="32" height="32" rx="8" fill="#EF5A5A" opacity="0"><animate attributeName="opacity" values="0;.92;.92" keyTimes="0;.15;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="fill" values="#EF5A5A;#FFC531;#3CC47C;#3CC47C" keyTimes="0;.33;.52;1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
      ${tBitMini(X(0) + 21, 80, 1, .5)}<text x="304" y="28" text-anchor="end" class="tat s" style="fill:#C0392B" ${tA(2.6, 'ta-fade')}>${L('No es mou!', '¡No se mueve!')}</text>`;
    // a sota: Endavant, Pinta… cada casella d'un color
    const arr = [.18, .36, .54, .72];
    const bot = [1, 2, 3, 4].map(i => `<rect x="${X(i) + 5}" y="153" width="32" height="32" rx="8" fill="${cols[i - 1]}" opacity="0"><animate attributeName="opacity" values="0;.92;0" keyTimes="0;${arr[i - 1]};.96" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`).join('')
      + `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;50 0;50 0;100 0;100 0;150 0;150 0;200 0;200 0;0 0" keyTimes="0;.1;.16;.28;.34;.46;.52;.64;.7;.96;1" dur="5.5s" repeatCount="indefinite"/>${tBitMini(X(0) + 21, 186, 1, .5)}</g>`;
    return tSvg(214, `${band(6, false, L('Pinta, Pinta, Pinta', 'Pinta, Pinta, Pinta'))}${top}${band(112, true, L('Endavant, Pinta, Endavant…', 'Adelante, Pinta, Adelante…'))}${bot}`);
  },
  // un mosaic es fa rajola a rajola i es descompon en files (A, B, A, B)
  u2rows() {
    const P = ['ryry', 'uuuu', 'ryry', 'uuuu'], S = 26, G = 3, X0 = 16, Y0 = 26;
    let k = 0; const tiles = [];
    P.forEach((row, r) => { const order = r % 2 ? [3, 2, 1, 0] : [0, 1, 2, 3]; order.forEach(c => { tiles.push(`<rect x="${X0 + c * (S + G)}" y="${Y0 + r * (S + G)}" width="${S}" height="${S}" rx="6" fill="${BIT_COL[row[c]]}" stroke="#fff" stroke-width="1.5" ${tA(.2 + k * .1, 'ta-pop')}/>`); k++; }); });
    const lab = r => r % 2 ? 'B' : 'A', lc = r => r % 2 ? '#3D8BFF' : '#E5489A';
    const right = P.map((row, r) => `<g ${tA(2.2 + r * .3, 'ta-in')}><rect x="160" y="${18 + r * 36}" width="156" height="30" rx="9" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${[...row].map((ch, c) => `<rect x="${174 + c * 24}" y="${23 + r * 36}" width="20" height="20" rx="5" fill="${BIT_COL[ch]}"/>`).join('')}
      <circle cx="292" cy="${33 + r * 36}" r="11" fill="${lc(r)}"/><text x="292" y="${38 + r * 36}" text-anchor="middle" class="tat w s">${lab(r)}</text></g>`).join('');
    const ico = `<g transform="translate(168 172)" color="#fff"><svg width="18" height="18" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    return tSvg(214, `<rect x="${X0 - 6}" y="${Y0 - 6}" width="${4 * (S + G) + 9}" height="${4 * (S + G) + 9}" rx="10" fill="#E8EEFF"/>${tiles.join('')}
      <text x="${X0 + 56}" y="166" text-anchor="middle" class="tat b">${L('Fila a fila', 'Fila a fila')}</text>
      <g ${tA(2, 'ta-in')}><path d="M140 82h14" stroke="#1FA463" stroke-width="4" stroke-linecap="round"/><path d="M151 75l7 7-7 7" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      ${right}
      <g ${tA(3.6, 'ta-pop')}><rect x="160" y="166" width="156" height="30" rx="10" fill="#1FA463"/>${ico}<text x="192" y="186" class="tat w s" style="font-size:12.5px">A + B, ${L('2 vegades', '2 veces')}</text></g>`);
  },
  // ---------- Robot, unitat 3 ----------
  // el bloc «Llum»: cada bloc encén un color, un darrere l'altre (el programa i en Bit, sincronitzats)
  u3light() {
    const C = { r: '#EF5A5A', y: '#FFC531', g: '#3CC47C', u: '#3D8BFF' }, ks = ['r', 'y', 'g', 'u'], D = 4.8;
    const ico = BIT_ICO.light.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const fillA = `<animate attributeName="fill" values="${ks.map(k => C[k]).join(';')}" keyTimes="0;.25;.5;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
    const chip = (k, i) => `<g transform="translate(176 ${26 + i * 44})"><rect width="132" height="34" rx="10" fill="#E5489A" filter="url(#bwSh)"/><g transform="translate(7 5)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${ico}</svg></g>
      <text x="38" y="23" class="tat w">${L('Llum', 'Luz')}</text><circle cx="110" cy="17" r="10" fill="${C[k]}" stroke="#fff" stroke-width="3"/></g>`;
    return tSvg(222, `<rect x="10" y="12" width="150" height="178" rx="20" fill="#FFF0F7" stroke="#F7C3DD" stroke-width="2"/>
      <circle cx="85" cy="70" r="46" opacity=".22">${fillA}</circle>
      <g transform="translate(85 180) scale(1.6)">${bitBot(2)}
        <circle cy="-65" r="10" opacity=".45">${fillA}<animate attributeName="r" values="8;12;8" dur="1.2s" repeatCount="indefinite"/></circle>
        <circle cy="-65" r="4.4" stroke="#20306A" stroke-width="2.2">${fillA}</circle><circle cy="-19" r="5" stroke="#20306A" stroke-width="2.2">${fillA}</circle></g>
      ${ks.map(chip).join('')}
      <g><rect x="172" y="22" width="140" height="42" rx="13" fill="none" stroke="#20306A" stroke-width="3.5"/><path d="M164 37l7 6l-7 6z" fill="#20306A"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 44;0 88;0 132" keyTimes="0;.25;.5;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
      <text x="160" y="212" text-anchor="middle" class="tat b">${L('1 bloc Llum = 1 color', '1 bloque Luz = 1 color')}</text>`);
  },
  // llums que donen missatges: el semàfor i el far del port
  u3traffic() {
    const D = 6, lamp = (cy, on, off, vals, kt) => `<circle cx="66" cy="${cy}" r="15" fill="${off}" stroke="#151B33" stroke-width="2"><animate attributeName="fill" values="${vals.map(v => v ? on : off).join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>`;
    const lab = (y, t, vals, kt, col) => `<g><rect x="96" y="${y - 15}" width="66" height="24" rx="12" fill="${col}"/><text x="129" y="${y + 2}" text-anchor="middle" class="tat w s">${t}</text><animate attributeName="opacity" values="${vals.map(v => v ? 1 : .18).join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>`;
    const kt = '0;.45;.62', blink = { values: '1;.15;1;.15;.15', beam: '.55;.08;.55;.08;.08', kt: '0;.12;.24;.36;1' };
    const wave = y => `<path d="M176 ${y} ${Array.from({ length: 10 }, () => 'q7 -5 14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`;
    return tSvg(222, `<rect x="62" y="134" width="8" height="58" rx="3" fill="#8C93A6"/><ellipse cx="66" cy="192" rx="26" ry="6" fill="#0B2A12" opacity=".12"/>
      <rect x="40" y="12" width="52" height="124" rx="16" fill="#2A3557" filter="url(#bwSh)"/>
      ${lamp(38, '#EF5A5A', '#5A2B33', [0, 0, 1], kt)}${lamp(74, '#FFC531', '#5A4A22', [0, 1, 0], kt)}${lamp(110, '#3CC47C', '#1F4A35', [1, 0, 0], kt)}
      ${lab(38, L('Para', 'Para'), [0, 0, 1], kt, '#EF5A5A')}${lab(74, L('Compte!', '¡Ojo!'), [0, 1, 0], kt, '#E09A00')}${lab(110, L('Passa', 'Pasa'), [1, 0, 0], kt, '#2FA866')}
      <text x="80" y="214" text-anchor="middle" class="tat s">${L('El semàfor', 'El semáforo')}</text>
      <rect x="170" y="150" width="146" height="50" rx="14" fill="#4FB4E8"/>${wave(166)}${wave(182)}
      <path d="M212 164q4 -22 34 -24q30 2 34 24z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/>
      <path d="M232 146l4 -86h20l4 86z" fill="#fff" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M235.4 128h21.2l.9 18h-23zM237 94h18l.8 17h-19.6zM238.5 62h15l.7 15h-16.4z" fill="#EF5A5A"/>
      <rect x="230" y="54" width="32" height="7" rx="3" fill="#20306A"/>
      <g opacity=".15"><path d="M246 44L178 18L178 70Z M246 44L314 18L314 70Z" fill="#FFE680"/><animate attributeName="opacity" values="${blink.beam}" keyTimes="${blink.kt}" calcMode="discrete" dur="3s" repeatCount="indefinite"/></g>
      <rect x="236" y="34" width="20" height="20" rx="4" fill="#BDEBFF" stroke="#20306A" stroke-width="2"/>
      <circle cx="246" cy="44" r="7" fill="#FFD54A"><animate attributeName="opacity" values="${blink.values}" keyTimes="${blink.kt}" calcMode="discrete" dur="3s" repeatCount="indefinite"/></circle>
      <path d="M232 34L246 22L260 34Z" fill="#EF5A5A" stroke="#8E2A22" stroke-width="2" stroke-linejoin="round"/>
      <g transform="translate(296 176)"><path d="M-14 0h28l-5 8h-18z" fill="#B57536"/><path d="M0 0v-18l11 14z" fill="#fff" stroke="#8E6A3A" stroke-width="1.5"/></g>
      <text x="246" y="214" text-anchor="middle" class="tat s">${L('El far del port', 'El faro del puerto')}</text>`);
  },
  // un bucle amb dos llums que s'alternen: pampallugues
  u3blink() {
    const C = { y: '#FFC531', u: '#3D8BFF' }, D = 4.8, kt = '0;.125;.25;.375;.5;.625;.75';
    const icoL = BIT_ICO.light.replace(/^<svg[^>]*>|<\/svg>$/g, ''), icoR = BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const fillA = `<animate attributeName="fill" values="${[C.y, C.u, C.y, C.u, C.y, C.u, C.u].join(';')}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
    const chip = (k, y) => `<g transform="translate(30 ${y})"><rect width="136" height="30" rx="9" fill="#E5489A"/><g transform="translate(6 4)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${icoL}</svg></g><text x="34" y="20.5" class="tat w s">${L('Llum', 'Luz')}</text><circle cx="116" cy="15" r="9" fill="${C[k]}" stroke="#fff" stroke-width="3"/></g>`;
    const num = (n, a, b) => `<text x="234" y="54" text-anchor="middle" class="tat b" opacity="0">${n}<animate attributeName="opacity" values="${a ? '0;1;0' : '1;0'}" keyTimes="${a ? `0;${a};${b}` : `0;${b}`}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></text>`;
    const dots = ['y', 'u', 'y', 'u', 'y', 'u'].map((k, i) => `<circle cx="${26 + i * 27}" cy="186" r="10" fill="${C[k]}" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"${i ? ` opacity="0"><animate attributeName="opacity" values="0;1" keyTimes="0;${(i * .125).toFixed(3)}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>` : '/>'}`).join('');
    return tSvg(222, `<path d="M12 40a12 12 0 0 1 12 -12h170a12 12 0 0 1 12 12v12a12 12 0 0 1 -12 12h-168v72h56a10 10 0 0 1 10 10v2a10 10 0 0 1 -10 10h-58a12 12 0 0 1 -12 -12z" fill="#1FA463" filter="url(#bwSh)"/>
      <g transform="translate(18 34)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${icoR}</svg></g><text x="48" y="52" class="tat w s">${L('Repeteix 3 vegades', 'Repite 3 veces')}</text>
      ${chip('y', 70)}${chip('u', 106)}
      <g><rect x="26" y="66" width="144" height="38" rx="12" fill="none" stroke="#20306A" stroke-width="3"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 36;0 0;0 36;0 0;0 36;0 0" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0" keyTimes="0;.75" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
      <circle cx="234" cy="48" r="16" fill="#fff" stroke="#1FA463" stroke-width="3"/>${num(1, 0, .25)}${num(2, .25, .5)}${num(3, .5, 1)}
      ${dots}
      <circle cx="272" cy="96" r="40" opacity=".25">${fillA}</circle>
      <g transform="translate(272 184) scale(1.3)">${bitBot(2)}<circle cy="-65" r="11" opacity=".5">${fillA}</circle><circle cy="-65" r="4.4" stroke="#20306A" stroke-width="2.2">${fillA}</circle><circle cy="-19" r="5" stroke="#20306A" stroke-width="2.2">${fillA}</circle></g>
      <text x="160" y="214" text-anchor="middle" class="tat b">${L('Groc i blau, 3 vegades: parpelleja!', 'Amarillo y azul, 3 veces: ¡parpadea!')}</text>`);
  },
  // les set notes: un xilòfon que en Bit toca de la més greu a la més aguda
  u3notes() {
    const N = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'], col = ['#EF5A5A', '#F08A24', '#FFC531', '#3CC47C', '#14A3B8', '#3D7BF4', '#8B5CF6'], D = 5.6;
    const bx = i => 28 + i * 40, bh = i => 128 - i * 9, by = i => 104 - bh(i) / 2, th = i => .45 + i * .55;
    const kt = a => a.map(v => (v / D).toFixed(4)).join(';');
    const bars = N.map((n, i) => `<g><rect x="${bx(i)}" y="${by(i)}" width="34" height="${bh(i)}" rx="9" fill="${col[i]}" stroke="${exvMixT(col[i], -.28)}" stroke-width="2.5" filter="url(#bwSh)"/>
      <rect x="${bx(i) + 6}" y="${by(i) + 7}" width="7" height="${bh(i) - 14}" rx="3.5" fill="#fff" opacity=".3"/><circle cx="${bx(i) + 17}" cy="${by(i) + 10}" r="3" fill="#fff" opacity=".85"/><circle cx="${bx(i) + 17}" cy="${by(i) + bh(i) - 10}" r="3" fill="#fff" opacity=".85"/>
      <rect x="${bx(i)}" y="${by(i)}" width="34" height="${bh(i)}" rx="9" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;0;.8;0;0" keyTimes="${kt([0, th(i) - .01, th(i), th(i) + .35, D])}" dur="${D}s" repeatCount="indefinite"/></rect>
      <text x="${bx(i) + 17}" y="188" text-anchor="middle" class="tat s">${n}</text>
      <g transform="translate(${bx(i) + 20} ${by(i) - 8})" opacity="0"><g fill="${exvMixT(col[i], -.2)}"><ellipse cx="-3" cy="0" rx="5.5" ry="4" transform="rotate(-20 -3 0)"/><rect x="1.6" y="-18" width="2.6" height="18"/><path d="M4.2 -18q7 2 6.5 10q-2 -4.5 -6.5 -4.5z"/></g>
        <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="${kt([0, th(i), th(i) + .05, th(i) + .9, D])}" dur="${D}s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="translate" values="${bx(i) + 20} ${by(i) - 8};${bx(i) + 20} ${by(i) - 8};${bx(i) + 26} ${by(i) - 30};${bx(i) + 26} ${by(i) - 30}" keyTimes="${kt([0, th(i), th(i) + .9, D])}" dur="${D}s" repeatCount="indefinite"/></g></g>`).join('');
    const pts = [[0, bx(0) + 17, 72]];
    N.forEach((_, i) => { pts.push([th(i) - .22, bx(i) + 17, 72]); pts.push([th(i), bx(i) + 17, 92]); });
    pts.push([th(6) + .4, bx(6) + 17, 72], [D - .3, bx(0) + 17, 72], [D, bx(0) + 17, 72]);
    return tSvg(220, `<path d="M18 54L302 80" stroke="#9A6538" stroke-width="10" stroke-linecap="round"/><path d="M18 156L302 130" stroke="#9A6538" stroke-width="10" stroke-linecap="round"/>
      ${bars}
      <g><g transform="rotate(25)"><rect x="-3" y="-54" width="6" height="54" rx="3" fill="#8A5A33"/><circle r="10" fill="#FFE3B0" stroke="#7A4A1E" stroke-width="2.5"/></g>
        <animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' ' + p[2]).join(';')}" keyTimes="${kt(pts.map(p => p[0]))}" dur="${D}s" repeatCount="indefinite"/></g>
      <text x="24" y="212" class="tat s">${L('més greu', 'más grave')}</text><path d="M112 207h96" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M204 201l8 6l-8 6" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="296" y="212" text-anchor="end" class="tat s">${L('més aguda', 'más aguda')}</text>`);
  },
  // l'ordre de les notes canvia la melodia: do-mi-sol puja, sol-mi-do baixa
  u3melody() {
    const C = { do: '#EF5A5A', mi: '#FFC531', sol: '#14A3B8' }, H = { do: 0, mi: 1, sol: 2 };
    const card = (x0, seq, t0, lab, up) => {
      const px = i => x0 + 30 + i * 44, py = n => 150 - H[n] * 38;
      const steps = seq.map((n, i) => `<rect x="${px(i) - 19}" y="${py(n) + 16}" width="38" height="${166 - py(n) - 16}" rx="7" fill="#F2DDA9" stroke="#E2BE76" stroke-width="2"/>`).join('');
      const notes = seq.map((n, i) => `<g ${tA(t0 + i * .6)}><path d="M${px(i) + 12} ${py(n)}v-30" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M${px(i) + 12} ${py(n) - 30}q10 4 9 15" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><circle cx="${px(i)}" cy="${py(n)}" r="15" fill="${C[n]}" stroke="${exvMixT(C[n], -.3)}" stroke-width="2.5"/><text x="${px(i)}" y="${py(n) + 5}" text-anchor="middle" class="tat s ${n === 'mi' ? '' : 'w'}">${n}</text></g>`).join('');
            return `<g ${tA(t0 - .2, 'ta-in')}><rect x="${x0}" y="8" width="148" height="194" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="${x0 + 74}" y="34" text-anchor="middle" class="tat b">${seq.join(' · ')}</text>${steps}</g>${notes}
        <g ${tA(t0 + 1.8, 'ta-fade')}><text x="${x0 + 64}" y="192" text-anchor="middle" class="tat b" style="fill:#C2307A">${lab}</text>
          <path d="${up ? `M${x0 + 102} 194l16 -16m-10 0h10v10` : `M${x0 + 102} 178l16 16m-10 0h10v-10`}" fill="none" stroke="#C2307A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    };
    return tSvg(212, card(8, ['do', 'mi', 'sol'], .4, L('puja!', '¡sube!'), true) + card(164, ['sol', 'mi', 'do'], 2.8, L('baixa!', '¡baja!'), false));
  },
  // un esdeveniment: passa una cosa i el programa reacciona
  u3event() {
    const D = 5.6, k = a => a.map(v => (v / D).toFixed(4)).join(';');
    const show = t => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="${k([0, t, t + .15, D - .35, D])}" dur="${D}s" repeatCount="indefinite"/>`;
    const press = t => `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 4;0 0;0 0" keyTimes="${k([0, t - .25, t, t + .3, D])}" dur="${D}s" repeatCount="indefinite"/>`;
    const row = (i, trig, ttxt, res, rtxt) => { const y = 46 + i * 58, t = .7 + i * 1.5;
      return `<g transform="translate(0 ${y})"><rect x="8" y="0" width="304" height="50" rx="15" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(34 25)">${trig(t)}</g><text x="58" y="30" class="tat s">${ttxt}</text>
        <g opacity="0">${show(t)}<path d="M162 25h18" stroke="#E5489A" stroke-width="4" stroke-linecap="round"/><path d="M177 18l8 7l-8 7" fill="none" stroke="#E5489A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <g transform="translate(206 25)">${res}</g><text x="226" y="30" class="tat s">${rtxt}</text></g></g>`; };
    const bell = t => `<rect x="-14" y="-16" width="28" height="32" rx="7" fill="#E8EEFF" stroke="#9FB2E6" stroke-width="2"/><g>${press(t)}<circle r="8" fill="#F2B21B" stroke="#B57A00" stroke-width="2"/></g>`;
    const ring = `<path d="M-9 6q0 -16 9 -16q9 0 9 16z" fill="#FFC531" stroke="#B57A00" stroke-width="2" stroke-linejoin="round"/><circle cy="8" r="3" fill="#B57A00"/><path d="M-13 -8q-3 6 0 12M13 -8q3 6 0 12" fill="none" stroke="#E5489A" stroke-width="2.5" stroke-linecap="round"/>`;
    const sw = t => `<rect x="-11" y="-17" width="22" height="34" rx="6" fill="#fff" stroke="#9FB2E6" stroke-width="2.5"/><rect x="-5" y="-10" width="10" height="11" rx="3" fill="#20306A"><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 9;0 9;0 0" keyTimes="${k([0, t - .05, t, D - .35, D])}" dur="${D}s" repeatCount="indefinite"/></rect>`;
    const bulb = `<circle cy="-3" r="16" fill="#FFE680" opacity=".55"/><path d="M0 -15a10 10 0 0 0 -6 18v4h12v-4a10 10 0 0 0 -6 -18z" fill="#FFD54A" stroke="#B57A00" stroke-width="2"/><rect x="-5" y="8" width="10" height="5" rx="2" fill="#8C93A6"/>`;
    const pole = t => `<rect x="-11" y="-16" width="22" height="32" rx="5" fill="#FFC531" stroke="#B57A00" stroke-width="2"/><g>${press(t)}<circle cy="2" r="6" fill="#20306A"/></g>`;
    const walk = `<rect x="-12" y="-17" width="24" height="34" rx="6" fill="#1B2440"/><g fill="#3CC47C" stroke="#3CC47C" stroke-width="3" stroke-linecap="round"><circle cy="-9" r="3.4" stroke="none"/><path d="M0 -4v8M0 4l-5 8M0 4l5 7M0 -3l-6 5M0 -3l6 4" fill="none"/></g>`;
    return tSvg(226, `<rect x="8" y="6" width="146" height="30" rx="15" fill="#1B2B6B"/><text x="81" y="26" text-anchor="middle" class="tat w s">${L('Quan passa…', 'Cuando pasa…')}</text>
      <rect x="166" y="6" width="146" height="30" rx="15" fill="#E5489A"/><text x="239" y="26" text-anchor="middle" class="tat w s">${L('…reacciona!', '…¡reacciona!')}</text>
      ${row(0, bell, L('El timbre', 'El timbre'), ring, L('Ding-dong!', '¡Din-don!'))}
      ${row(1, sw, L("L'interruptor", 'El interruptor'), bulb, L("S'encén!", '¡Se enciende!'))}
      ${row(2, pole, L('El polsador', 'El pulsador'), walk, L('Passa!', '¡Pasa!'))}`);
  },
  // els botons A i B: cada botó té els seus blocs; sense prémer, en Bit espera
  u3buttons() {
    const D = 6, k = a => a.map(v => (v / D).toFixed(4)).join(';'), tA1 = 1.1, tA2 = 2.5, tB = 3.9;
    const ico = n => BIT_ICO[n].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const card = (y, key, lab, kk, glow) => `<g transform="translate(6 ${y})"><rect width="170" height="70" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      <rect width="170" height="70" rx="14" fill="none" stroke="#E5489A" stroke-width="4" opacity="0"><animate attributeName="opacity" values="${glow.v}" keyTimes="${glow.k}" dur="${D}s" repeatCount="indefinite"/></rect>
      <circle cx="22" cy="20" r="12" fill="#1B2440"/><text x="22" y="25" text-anchor="middle" class="tat w s">${key}</text><text x="42" y="25" class="tat s">${L('Quan premo', 'Al pulsar')} ${key}</text>
      <g transform="translate(10 36)"><rect width="150" height="26" rx="8" fill="#3D7BF4"/><g transform="translate(5 3)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${ico(kk)}</svg></g><text x="30" y="18" class="tat w s">${lab}</text></g></g>`;
    const glow = ts => ({ v: '0;' + ts.map(() => '0;1;0').join(';') + ';0', k: k([0, ...ts.flatMap(t => [t - .05, t, t + .7]), D]) });
    const tile = i => `<rect x="${186 + i * 44}" y="98" width="40" height="40" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`;
    const key = (x, key, ts) => `<g transform="translate(${x} 192)"><circle r="17" fill="#0A0C16" cy="3"/><g><circle r="17" fill="#2A2F45"/><text y="6" text-anchor="middle" class="tat w b">${key}</text><animateTransform attributeName="transform" type="translate" values="0 0;${ts.map(() => '0 0;0 3;0 0').join(';')};0 0" keyTimes="${k([0, ...ts.flatMap(t => [t - .1, t, t + .25]), D])}" dur="${D}s" repeatCount="indefinite"/></g></g>`;
    const bx = i => 206 + i * 44;
    return tSvg(226, `${card(16, 'A', L('Endavant', 'Adelante'), 'fwd', glow([tA1, tA2]))}${card(100, 'B', L('Gira a la dreta', 'Gira a la derecha'), 'right', glow([tB]))}
      <text x="250" y="34" text-anchor="middle" class="tat s">${L('En Bit espera…', 'Bit espera…')}</text><text x="250" y="54" text-anchor="middle" class="tat s">${L('…fins que prems!', '…¡hasta que pulsas!')}</text>
      ${[0, 1, 2].map(tile).join('')}
      <g><g opacity="1"><g transform="scale(.82)">${bitBot(1)}</g><animate attributeName="opacity" values="1;0;1" keyTimes="0;${(tB / D).toFixed(4)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
        <g opacity="0"><g transform="scale(.82)">${bitBot(2)}</g><animate attributeName="opacity" values="0;1;0" keyTimes="0;${(tB / D).toFixed(4)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></g>
        <animateTransform attributeName="transform" type="translate" values="${bx(0)} 132;${bx(0)} 132;${bx(1)} 132;${bx(1)} 132;${bx(2)} 132;${bx(2)} 132;${bx(0)} 132" keyTimes="${k([0, tA1, tA1 + .5, tA2, tA2 + .5, D - .3, D])}" dur="${D}s" repeatCount="indefinite"/></g>
      <rect x="192" y="166" width="116" height="52" rx="22" fill="#D9DEEA"/>${key(224, 'A', [tA1, tA2])}${key(276, 'B', [tB])}`);
  },
  // la coreografia: un pas de ball (gir, llum i nota) que es repeteix
  u3dance() {
    const views = [[2, 'r'], [3, 'y'], [0, 'g'], [1, 'u']];
    const ico = n => BIT_ICO[n].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (y, kk, col, lab, extra) => `<g transform="translate(178 ${y})"><rect width="132" height="28" rx="8" fill="${col}"/><g transform="translate(5 4)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${ico(kk)}</svg></g><text x="30" y="19" class="tat w s">${lab}</text>${extra || ''}</g>`;
    const note = (x, d, c) => `<g opacity="0"><g fill="${c}"><ellipse cx="-3" cy="0" rx="5.5" ry="4" transform="rotate(-20 -3 0)"/><rect x="1.6" y="-17" width="2.6" height="17"/><path d="M4.2 -17q7 2 6.5 10q-2 -4.5 -6.5 -4.5z"/></g>
      <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="${d}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="${x} 92;${x + 8} 40" dur="2.4s" begin="${d}s" repeatCount="indefinite"/></g>`;
    const conf = (x, d, c) => `<rect width="7" height="7" rx="1.5" fill="${c}"><animateTransform attributeName="transform" type="translate" values="${x} -10;${x + 10} 200" dur="3.2s" begin="${d}s" repeatCount="indefinite"/></rect>`;
    return tSvg(226, `<rect x="6" y="6" width="160" height="214" rx="20" fill="#2B1F55"/>
      <path d="M22 6L52 196H106Z" fill="#FFE680" opacity=".16"><animate attributeName="opacity" values=".08;.24;.08" dur="2.4s" repeatCount="indefinite"/></path><path d="M150 6L66 196H120Z" fill="#FF9BC8" opacity=".16"><animate attributeName="opacity" values=".24;.08;.24" dur="2.4s" repeatCount="indefinite"/></path>
      ${conf(30, 0, '#FFC531')}${conf(70, 1.1, '#3CC47C')}${conf(120, .5, '#3D8BFF')}${conf(140, 2, '#EF5A5A')}${conf(96, 2.6, '#FF9BC8')}
      <ellipse cx="86" cy="196" rx="66" ry="14" fill="#E5489A"/><ellipse cx="86" cy="192" rx="66" ry="14" fill="#F77DB8"/>
      <g transform="translate(86 192) scale(1.45)">${views.map(([d, c], i) => `<g class="tv tv${i}">${bitBot(d, c)}</g>`).join('')}</g>
      ${note(118, 0, '#FFC531')}${note(44, 1.2, '#7DF3FF')}
      <path d="M172 18a10 10 0 0 1 10 -10h120a10 10 0 0 1 10 10v16a10 10 0 0 1 -10 10h-112v104h40a8 8 0 0 1 8 8a8 8 0 0 1 -8 8h-48a10 10 0 0 1 -10 -10z" fill="#1FA463" filter="url(#bwSh)"/>
      <g transform="translate(178 14)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${ico('rep')}</svg></g><text x="204" y="31" class="tat w s">${L('Repeteix', 'Repite')}</text><rect x="272" y="14" width="30" height="22" rx="7" fill="#fff"/><text x="287" y="30" text-anchor="middle" class="tat s">4</text>
      ${chip(52, 'right', '#3D7BF4', L('Gira', 'Gira'))}${chip(84, 'light', '#E5489A', L('Llum', 'Luz'), '<circle cx="114" cy="14" r="8" fill="#FFC531" stroke="#fff" stroke-width="2.5"/>')}${chip(116, 'note', '#14A3B8', L('Nota mi', 'Nota mi'))}
      <text x="242" y="194" text-anchor="middle" class="tat b">${L('Un pas de ball', 'Un paso de baile')}</text><text x="242" y="214" text-anchor="middle" class="tat s">${L('que es repeteix', 'que se repite')}</text>`, 'loop4');
  },
  // ---------- Robot, unitat 4 ----------
  // què és un sensor: els ulls, la porta automàtica i el sensor d'aparcament
  u4sensor() {
    const D = 'dur="4s" repeatCount="indefinite"';
    const card = (x, t, lab, art) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="12" width="96" height="156" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${art}<text x="${x + 48}" y="156" text-anchor="middle" class="tat s">${lab}</text></g>`;
    const eye = `<g transform="translate(58 78)"><ellipse rx="32" ry="20" fill="#fff" stroke="#14204A" stroke-width="3"/>
      <g><animateTransform attributeName="transform" type="translate" values="-8 0;8 0;8 0;-8 0;-8 0" keyTimes="0;.3;.5;.8;1" ${D}/><circle r="12" fill="#3D7BF4"/><circle r="5.5" fill="#14204A"/><circle cx="-3" cy="-4" r="2.4" fill="#fff"/></g>
      <ellipse rx="33" ry="0" cy="-1" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"><animate attributeName="ry" values="0;0;21;0;0" keyTimes="0;.62;.66;.7;1" ${D}/></ellipse>
      <path d="M-30 -26q30 -14 60 0" stroke="#14204A" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
    const door = `<defs><clipPath id="u4door"><rect x="122" y="40" width="68" height="84"/></clipPath></defs>
      <rect x="118" y="36" width="76" height="92" rx="6" fill="#E8EEFF" stroke="#9FB2E6" stroke-width="3"/>
      <circle cx="156" cy="30" r="5" fill="#EF5A5A"><animate attributeName="fill" values="#EF5A5A;#EF5A5A;#3CC47C;#3CC47C;#EF5A5A" keyTimes="0;.28;.3;.8;1" ${D}/></circle>
      <g transform="translate(156 112)"><g><animateTransform attributeName="transform" type="translate" values="34 0;0 0;0 0;0 -20;0 -20;34 0" keyTimes="0;.3;.5;.65;.99;1" ${D}/>
        <animate attributeName="opacity" values="1;1;1;0;0;1" keyTimes="0;.3;.5;.65;.99;1" ${D}/>
        <circle cy="-36" r="8" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/><rect x="-9" y="-27" width="18" height="24" rx="7" fill="#F08A24"/><path d="M-5 -4v8M5 -4v8" stroke="#34405E" stroke-width="4" stroke-linecap="round"/></g></g>
      <g clip-path="url(#u4door)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-30 0;-30 0;0 0" keyTimes="0;.32;.45;.82;1" ${D}/><rect x="122" y="40" width="34" height="84" fill="#BFE6FF" fill-opacity=".85" stroke="#7FB3D9" stroke-width="2"/></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;30 0;30 0;0 0" keyTimes="0;.32;.45;.82;1" ${D}/><rect x="156" y="40" width="34" height="84" fill="#BFE6FF" fill-opacity=".85" stroke="#7FB3D9" stroke-width="2"/></g></g>`;
    const car = `<rect x="276" y="44" width="12" height="84" rx="3" fill="#C9443A"/><path d="M276 64h12M276 86h12M276 108h12" stroke="#F6B7AE" stroke-width="2"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;26 0;26 0;0 0" keyTimes="0;.55;.85;1" ${D}/>
        <path d="M222 112v-16q0 -6 6 -6h8l8 -10h14q5 0 7 5l4 11v16z" fill="#3D7BF4" stroke="#1D4FB8" stroke-width="2.5" stroke-linejoin="round"/><circle cx="232" cy="114" r="6" fill="#2A3557"/><circle cx="256" cy="114" r="6" fill="#2A3557"/></g>
      ${[0, 1, 2].map(i => `<path d="M${262 + i * 4} ${76 - i * 4}q8 ${12 + i * 4} 0 ${24 + i * 8}" stroke="#F2B21B" stroke-width="3" fill="none" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0;1;0;1;0;0" keyTimes="0;${(.3 + i * .08).toFixed(2)};${(.4 + i * .08).toFixed(2)};.62;.7;.84;1" ${D}/><animateTransform attributeName="transform" type="translate" values="0 0;26 0;26 0;0 0" keyTimes="0;.55;.85;1" ${D}/></path>`).join('')}
      <text x="254" y="64" text-anchor="middle" class="tat s" opacity="0">bip!<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.5;.8;1" ${D}/></text>`;
    return tSvg(214, `${card(10, .2, L('ulls', 'ojos'), eye)}${card(112, .6, L('porta', 'puerta'), door)}${card(214, 1, L('aparcament', 'aparcamiento'), car)}
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.6, 'ta-fade')}>${L('Un sensor nota el món', 'Un sensor nota el mundo')}</text>`);
  },
  // el sensor d'en Bit mira la casella del davant: lliure o obstacle
  u4beam() {
    const D = 'dur="5.5s" repeatCount="indefinite"', half = (a, b) => `values="${a};${a};${b};${b};${a}" keyTimes="0;.47;.5;.97;1" calcMode="discrete"`;
    const tile = x => `<rect x="${x}" y="74" width="104" height="92" rx="16" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>`;
    return tSvg(214, `${tile(30)}${tile(186)}
      <path d="M104 116 L198 92 L198 150 Z" fill="#3CC47C" opacity=".32"><animate attributeName="fill" ${half('#3CC47C', '#EF5A5A')} ${D}/></path>
      <path d="M104 116 L198 92 M104 116 L198 150" stroke="#3CC47C" stroke-width="2.5" stroke-dasharray="5 5" class="ta-dash"><animate attributeName="stroke" ${half('#3CC47C', '#EF5A5A')} ${D}/></path>
      ${tBitMini(80, 156, 1, 1.25)}
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.48;.52;.95;1" ${D}/><g transform="translate(238 152) scale(1.35)"><ellipse cx="2" cy="0" rx="22" ry="6" fill="#0B2A12" opacity=".25"/><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2"/></g></g>
      <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.46;.48;.98;1" ${D}/><rect x="182" y="16" width="112" height="38" rx="19" fill="#3CC47C"/><path d="M232 54l6 8l6 -8z" fill="#3CC47C"/><text x="238" y="41" text-anchor="middle" class="tat w b">${L('Lliure!', '¡Libre!')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.49;.51;.97;1" ${D}/><rect x="172" y="16" width="132" height="38" rx="19" fill="#EF5A5A"/><path d="M232 54l6 8l6 -8z" fill="#EF5A5A"/><text x="238" y="41" text-anchor="middle" class="tat w b">${L('Obstacle!', '¡Obstáculo!')}</text></g>
      <text x="160" y="200" text-anchor="middle" class="tat s">${L('Només mira la casella del davant', 'Solo mira la casilla de delante')}</text>`);
  },
  // el bloc «Si…»: una pregunta; si la resposta és sí fa els blocs de dins, si és no se'ls salta
  u4if() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const yes = 'M100 58 L182 58 L182 88 L250 88 L250 130 L250 168 L166 168', no = 'M100 58 L100 168 L100 168';
    return tSvg(222, `<path d="M40 58 L100 20 L160 58 L100 96 Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round" ${tA(.2)}/>
      <text x="100" y="64" text-anchor="middle" class="tat b" ${tA(.2)}>${L('Obstacle?', '¿Obstáculo?')}</text>
      <g ${tA(.7, 'ta-fade')}><path d="M160 58H180V70" stroke="#1FA463" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M174 66l6 8l6 -8" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="172" y="48" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text></g>
      <g ${tA(.9)}><rect x="186" y="70" width="128" height="38" rx="11" fill="#3D7BF4"/><text x="250" y="95" text-anchor="middle" class="tat w s">${L('Gira a la dreta', 'Gira a la derecha')}</text></g>
      <g ${tA(1.2, 'ta-fade')}><path d="M250 108V168H170" stroke="#9FB2E6" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M176 162l-8 6l8 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.4, 'ta-fade')}><path d="M100 96V144" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><path d="M94 138l6 8l6 -8" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="84" y="126" text-anchor="middle" class="tat s">no</text></g>
      <g ${tA(1.6)}><rect x="40" y="150" width="124" height="38" rx="11" fill="#3D7BF4"/><text x="102" y="175" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <circle r="8" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${yes}" keyPoints="0;0;1;1" keyTimes="0;.32;.5;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.32;.5;.52;1" ${D}/></circle>
      <circle r="8" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${no}" keyPoints="0;0;1;1" keyTimes="0;.62;.8;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.6;.62;.8;.82;1" ${D}/></circle>
      <text x="160" y="212" text-anchor="middle" class="tat s" opacity="0">${L('Hi ha una roca: sí → gira i avança', 'Hay una roca: sí → gira y avanza')}<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.33;.55;.58;1" ${D}/></text>
      <text x="160" y="212" text-anchor="middle" class="tat s" opacity="0">${L('No hi ha res: no → només avança', 'No hay nada: no → solo avanza')}<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.6;.63;.88;.92;1" ${D}/></text>`);
  },
  // el sensor de color mira el terra on és en Bit
  u4color() {
    const D = 'dur="6s" repeatCount="indefinite"', cs = ['r', 'g', 'y', 'u'], xs = [52, 124, 196, 268];
    const names = [L('vermell!', '¡rojo!'), L('verd!', '¡verde!'), L('groc!', '¡amarillo!'), L('blau!', '¡azul!')], ink = ['#C9302A', '#1E8A4E', '#B07A00', '#1F5FD0'];
    const kt = '0;.2;.25;.45;.5;.7;.75;1';
    const shown = i => { const v = [0, 0, 0, 0, 0, 0, 0, 0]; const on = [[0, 1], [2, 3], [4, 5], [6, 7]][i]; on.forEach(k => v[k] = 1); return v.join(';'); };
    return tSvg(214, `<text x="160" y="28" text-anchor="middle" class="tat b">${L('Mira el terra que trepitja', 'Mira el suelo que pisa')}</text>
      ${cs.map((c, i) => `<rect x="${xs[i] - 32}" y="112" width="64" height="62" rx="14" fill="${BIT_COL[c]}" stroke="#14204A" stroke-opacity=".15" stroke-width="2"/><rect x="${xs[i] - 24}" y="118" width="48" height="9" rx="4.5" fill="#fff" opacity=".35"/>
        <rect x="${xs[i] - 36}" y="108" width="72" height="70" rx="17" fill="none" stroke="#14204A" stroke-width="3" opacity="0"><animate attributeName="opacity" values="${shown(i)}" keyTimes="${kt}" calcMode="discrete" ${D}/></rect>`).join('')}
      <g><animateTransform attributeName="transform" type="translate" values="${xs.map(x => `${x} 0;${x} 0`).join(';')}" keyTimes="${kt}" ${D}/>
        <path d="M-10 150 L10 150 L18 166 L-18 166 Z" fill="#fff" opacity=".55"/>${tBitMini(0, 156, 1, .95)}
        ${names.map((n, i) => `<g opacity="0"><animate attributeName="opacity" values="${shown(i)}" keyTimes="${kt}" calcMode="discrete" ${D}/><rect x="-52" y="40" width="104" height="34" rx="17" fill="#fff" stroke="${ink[i]}" stroke-width="3"/><text y="63" text-anchor="middle" class="tat b" fill="${ink[i]}" style="fill:${ink[i]}">${n}</text></g>`).join('')}</g>
      <text x="160" y="204" text-anchor="middle" class="tat s">${L('sensor de color', 'sensor de color')}</text>`);
  },
  // si… si no…: si plou, paraigua; si no, gorra (diagrama de decisió)
  u4else() {
    const D = 'dur="6s" repeatCount="indefinite"', A = 'keyTimes="0;.04;.46;.5;1"', B = 'keyTimes="0;.5;.54;.96;1"';
    const umb = `<path d="M24 150Q60 106 96 150Q87 143 78 150Q69 143 60 150Q51 143 42 150Q33 143 24 150Z" fill="#E5489A" stroke="#A3236A" stroke-width="2.5" stroke-linejoin="round"/><path d="M60 150V174q0 8 -8 8" stroke="#14204A" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
    const cap = `<path d="M236 160Q236 128 262 128Q288 128 288 160Z" fill="#3D7BF4" stroke="#1D4FB8" stroke-width="2.5"/><path d="M284 158h18q6 0 6 5h-28z" fill="#1D4FB8"/><circle cx="262" cy="127" r="4" fill="#1D4FB8"/>`;
    const card = (x, art, lab, k) => `<g><rect x="${x}" y="110" width="100" height="84" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g opacity=".25"><animate attributeName="opacity" values=".25;1;1;.25;.25" ${k} ${D}/>${art}</g><text x="${x + 50}" y="212" text-anchor="middle" class="tat s">${lab}</text></g>`;
    return tSvg(222, `<path d="M106 50L160 14L214 50L160 86Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/><text x="160" y="56" text-anchor="middle" class="tat b">${L('Plou?', '¿Llueve?')}</text>
      <path d="M106 50H60V104" stroke="#C9D6FB" stroke-width="4" fill="none" stroke-linecap="round"><animate attributeName="stroke" values="#C9D6FB;#1FA463;#1FA463;#C9D6FB;#C9D6FB" ${A} ${D}/></path>
      <path d="M214 50H260V104" stroke="#C9D6FB" stroke-width="4" fill="none" stroke-linecap="round"><animate attributeName="stroke" values="#C9D6FB;#C9D6FB;#EF5A5A;#EF5A5A;#C9D6FB" ${B} ${D}/></path>
      <text x="80" y="40" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text><text x="240" y="40" text-anchor="middle" class="tat s">${L('si no', 'si no')}</text>
      ${card(10, umb, L('paraigua', 'paraguas'), A)}${card(210, cap, L('gorra', 'gorra'), B)}
      <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" ${A} ${D}/><g transform="translate(160 132)"><ellipse rx="26" ry="13" fill="#B9C4DA"/><ellipse cx="-14" cy="-6" rx="13" ry="11" fill="#B9C4DA"/><ellipse cx="10" cy="-10" rx="15" ry="13" fill="#B9C4DA"/>
        ${[-14, 0, 14].map((x, i) => `<path d="M${x} 18v8" stroke="#3D8BFF" stroke-width="3.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 -4;0 14" dur="${(.8 + i * .15).toFixed(2)}s" repeatCount="indefinite"/></path>`).join('')}</g></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" ${B} ${D}/><g transform="translate(160 138)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" dur="2s" repeatCount="indefinite"/>${[...Array(8).keys()].map(i => `<rect x="-2" y="-30" width="4" height="9" rx="2" fill="#FFC531" transform="rotate(${i * 45})"/>`).join('')}</g><circle r="16" fill="#FFD54A" stroke="#F5A623" stroke-width="2"/></g></g>`);
  },
  // les condicions dels costats: l'esquerra i la dreta són les d'en Bit
  u4sides() {
    const D = 'dur="6s" repeatCount="indefinite"', A = 'values="1;1;0;0;1" keyTimes="0;.48;.5;.98;1" calcMode="discrete"', B = 'values="0;0;1;1;0" keyTimes="0;.48;.5;.98;1" calcMode="discrete"';
    const tile = (x, y) => `<rect x="${x}" y="${y}" width="68" height="64" rx="14" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>`;
    const pill = (x, t, col) => `<rect x="${x - 50}" y="54" width="100" height="30" rx="15" fill="${col}"/><text x="${x}" y="74" text-anchor="middle" class="tat w s">${t}</text>`;
    const beam = `<path d="M128 132H88M192 132H232" stroke="#F2B21B" stroke-width="3.5" stroke-dasharray="6 6" class="ta-dash"/><path d="M94 126l-8 6l8 6M226 126l8 6l-8 6" fill="none" stroke="#F2B21B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    return tSvg(214, `<text x="160" y="26" text-anchor="middle" class="tat b">${L("L'esquerra i la dreta d'en Bit", 'La izquierda y la derecha de Bit')}</text>
      ${tile(126, 100)}${tile(54, 100)}${tile(198, 100)}${beam}
      <g><animate attributeName="opacity" ${A} ${D}/>${tBitMini(160, 156, 0, 1.05)}${pill(88, L('esquerra', 'izquierda'), '#8B5CF6')}${pill(232, L('dreta', 'derecha'), '#F08A24')}
        <path d="M160 92v-12" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M154 86l6 -8l6 8" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="198" text-anchor="middle" class="tat s">${L('En Bit mira amunt', 'Bit mira arriba')}</text></g>
      <g opacity="0"><animate attributeName="opacity" ${B} ${D}/>${tBitMini(160, 156, 2, 1.05)}${pill(88, L('dreta', 'derecha'), '#F08A24')}${pill(232, L('esquerra', 'izquierda'), '#8B5CF6')}
        <path d="M160 168v12" stroke="#14204A" stroke-width="3" stroke-linecap="round"/><path d="M154 174l6 8l6 -8" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="198" text-anchor="middle" class="tat s">${L('En Bit mira avall: tot canvia!', 'Bit mira abajo: ¡todo cambia!')}</text></g>`);
  },
  // estratègia del laberint: la mà dreta sempre a la paret
  u4maze() {
    const M = ['>##.#', '..#.#', '#.#.#', '#.#.#', '####F'], c = 32, ox = 14, oy = 20, P = (x, y) => `${ox + x * c + c / 2} ${oy + y * c + c / 2}`;
    const route = `M${P(0, 0)} L${P(2, 0)} L${P(2, 4)} L${P(0, 4)} L${P(0, 2)} L${P(0, 4)} L${P(4, 4)}`;
    const cells = M.map((r, y) => [...r].map((ch, x) => { const X = ox + x * c, Y = oy + y * c;
      return ch === '.' ? `<rect x="${X + 1}" y="${Y + 1}" width="${c - 2}" height="${c - 2}" rx="8" fill="url(#bwLeaf)"/><circle cx="${X + 11}" cy="${Y + 10}" r="4" fill="#C9F2A6" opacity=".5"/>` : `<rect x="${X + 1}" y="${Y + 1}" width="${c - 2}" height="${c - 2}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`; }).join('')).join('');
    const D = 'dur="7s" repeatCount="indefinite"';
    return tSvg(214, `<rect x="${ox - 6}" y="${oy - 6}" width="${5 * c + 12}" height="${5 * c + 12}" rx="14" fill="#3E8E3A"/>${cells}
      <g transform="translate(${P(4, 4)})"><path d="M-6 10V-12" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M-5 -12h16l-5 6l5 6h-16z" fill="#EF5A5A"/></g>
      <path d="${route}" fill="none" stroke="#3D7BF4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1" pathLength="1" stroke-dashoffset="1" opacity=".55"><animate attributeName="stroke-dashoffset" values="1;0;0" keyTimes="0;.85;1" ${D}/></path>
      <g><animateMotion path="${route}" rotate="auto" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear" ${D}/><circle r="10" fill="#fff" stroke="#14204A" stroke-width="3"/><path d="M-3 -5l7 5l-7 5" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cy="13" r="5" fill="#FFB3C7" stroke="#C2577A" stroke-width="2"/></g>
      <g ${tA(.4, 'ta-in')}><rect x="194" y="40" width="118" height="132" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(253 82)"><path d="M-14 14v-22q0 -5 5 -5t5 5v-8q0 -5 5 -5t5 5v6q0 -5 5 -5t5 5v8q0 -5 4 -5t4 5v18q0 12 -14 12h-6q-12 0 -18 -14l-6 -10q-2 -5 3 -6q4 -1 7 4z" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2.4" stroke-linejoin="round"/></g>
        <text x="253" y="130" text-anchor="middle" class="tat b">${L('Mà dreta', 'Mano derecha')}</text><text x="253" y="152" text-anchor="middle" class="tat s">${L('a la paret!', '¡en la pared!')}</text></g>`);
  },
  // el mateix programa a totes les illes
  u4isles() {
    const isl = (x, i, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="84" width="92" height="104" rx="16" fill="#E3F4FF" stroke="#BFE0F7" stroke-width="2"/>
      <text x="${x + 46}" y="106" text-anchor="middle" class="tat s">${L('Illa', 'Isla')} ${i + 1}</text>
      <path d="M${x + 12} 152q34 -30 68 0l-6 14q-28 8 -56 0z" fill="#9A6538"/><path d="M${x + 12} 152q34 -30 68 0q-34 10 -68 0z" fill="#7CC456"/>
      ${tBitMini(x + 46, 150, 2, .5)}</g><g ${tA(t + .9)}><circle cx="${x + 82}" cy="90" r="14" fill="#3CC47C" stroke="#fff" stroke-width="3"/><path d="M${x + 75} 90l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    return tSvg(214, `<g ${tA(.1)}><rect x="66" y="8" width="188" height="44" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      <rect x="78" y="20" width="20" height="20" rx="5" fill="#1FA463"/><rect x="102" y="20" width="20" height="20" rx="5" fill="#F2B21B"/><rect x="126" y="20" width="20" height="20" rx="5" fill="#3D7BF4"/><text x="200" y="36" text-anchor="middle" class="tat s">${L('un programa', 'un programa')}</text></g>
      ${[58, 160, 262].map((x, i) => `<path d="M160 54L${x} 80" stroke="#C9D6FB" stroke-width="3" ${tA(.5 + i * .9, 'ta-fade')}/>`).join('')}
      ${isl(12, 0, .5)}${isl(114, 1, 1.4)}${isl(216, 2, 2.3)}
      <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('El mateix programa, a totes les illes', 'El mismo programa, en todas las islas')}</text>`);
  },
  // ---------- Robot, unitat 5 ----------
  // una funció és una ordre nova feta d'altres ordres: «Para taula» = estovalles, plats, gots i coberts
  u5recipe() {
    const st = [L('Estovalles', 'Mantel'), L('Plats', 'Platos'), L('Gots', 'Vasos'), L('Coberts', 'Cubiertos')];
    return tSvg(214, `<g ${tA(.2)}><rect x="14" y="14" width="146" height="50" rx="14" fill="#8B5CF6" filter="url(#bwSh)"/><g transform="translate(24 27)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="56" y="45" class="tat w b">${L('Para taula', 'Pon la mesa')}</text></g>
      <path d="M87 68v12" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" ${tA(.6, 'ta-fade')}/><path d="M80 76l7 8l7 -8" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(.6, 'ta-fade')}/>
      <rect x="14" y="88" width="146" height="118" rx="14" fill="#fff" stroke="#E4DAFB" stroke-width="2" filter="url(#bwSh)" ${tA(.7, 'ta-fade')}/>
      ${st.map((s, i) => `<g ${tA(.9 + i * .5, 'ta-in')}><circle cx="36" cy="${110 + i * 27}" r="10" fill="#8B5CF6"/><text x="36" y="${115 + i * 27}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="54" y="${115 + i * 27}" class="tat s">${s}</text></g>`).join('')}
      <rect x="176" y="150" width="10" height="46" rx="3" fill="#8A5A33"/><rect x="298" y="150" width="10" height="46" rx="3" fill="#8A5A33"/>
      <rect x="170" y="134" width="144" height="20" rx="6" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/>
      <g ${tA(.9, 'ta-fade')}><path d="M174 136h136l-6 16h-124z" fill="#FFE1E1" stroke="#EF5A5A" stroke-width="2" stroke-linejoin="round"/><path d="M196 137v14M222 137v14M248 137v14M274 137v14" stroke="#F7A9A9" stroke-width="3"/></g>
      ${[206, 278].map(x => `<g ${tA(1.4)}><ellipse cx="${x}" cy="130" rx="22" ry="8" fill="#fff" stroke="#AEB8D2" stroke-width="2"/><ellipse cx="${x}" cy="129" rx="13" ry="4.5" fill="#EEF2FB"/></g>`).join('')}
      ${[232, 304].map(x => `<g ${tA(1.9)}><path d="M${x - 7} 100h14l-2 26h-10z" fill="#CFEFFF" stroke="#4B9FD5" stroke-width="2" stroke-linejoin="round"/><path d="M${x - 5} 112h10" stroke="#7CC6F2" stroke-width="3"/></g>`).join('')}
      ${[180, 252].map(x => `<g ${tA(2.4)}><path d="M${x} 110v22M${x - 3} 110v8M${x + 3} 110v8M${x - 3} 118h6" stroke="#7A8299" stroke-width="2.4" stroke-linecap="round"/></g>`).join('')}
      <g ${tA(2.9)}><circle cx="296" cy="72" r="15" fill="#3CC47C"/><path d="M289 72l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.9, 'ta-fade')}><text x="236" y="80" text-anchor="middle" class="tat s">${L('Fet!', '¡Hecho!')}</text></g>
      <g ${tA(.3, 'ta-fade')}><text x="242" y="40" text-anchor="middle" class="tat s">${L('Una ordre…', 'Una orden…')}</text></g>
      <g ${tA(1.2, 'ta-fade')}><text x="242" y="208" text-anchor="middle" class="tat s">${L('…molts passos', '…muchos pasos')}</text></g>`);
  },
  // posar nom a un grup de blocs: quatre blocs es tanquen dins d'una funció i queden com un sol bloc
  u5pack() {
    const ks = ['fwd', 'left', 'fwd', 'right'];
    const chip = (k, x, y, t) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="50" height="50" rx="12" fill="#3D7BF4" filter="url(#bwSh)"/><g transform="translate(${x + 10} ${y + 10})" color="#fff"><svg width="30" height="30" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g></g>`;
    return tSvg(214, `<rect x="30" y="10" width="260" height="74" rx="18" fill="#8B5CF6" fill-opacity=".1" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="9 7" ${tA(1.4, 'ta-fade')}/>
      ${ks.map((k, i) => chip(k, 44 + i * 60, 22, .2 + i * .3)).join('')}
      <g ${tA(1.6)}><rect x="236" y="0" width="68" height="24" rx="12" fill="#8B5CF6"/><text x="270" y="17" text-anchor="middle" class="tat w s">${L('escala', 'escalera')}</text></g>
      <g ${tA(2.1, 'ta-fade')}><path d="M160 94v18" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round"/><path d="M150 106l10 11l10 -11" fill="none" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.5)}><rect x="58" y="126" width="204" height="48" rx="13" fill="#8B5CF6" filter="url(#bwSh)"/><rect x="58" y="126" width="204" height="10" rx="5" fill="#fff" opacity=".16"/><g transform="translate(72 138)" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="108" y="157" class="tat w b">${L('Funció escala', 'Función escalera')}</text></g>
      <g ${tA(3, 'ta-fade')}><text x="160" y="202" text-anchor="middle" class="tat s">${L('4 blocs → 1 bloc amb nom', '4 bloques → 1 bloque con nombre')}</text></g>`);
  },
  // cridar una funció: en Bit va a la funció, en fa tots els blocs i torna on era
  u5call() {
    const ico = k => BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (k, x, y, col = '#3D7BF4') => `<rect x="${x}" y="${y}" width="46" height="44" rx="11" fill="${col}"/><g transform="translate(${x + 10} ${y + 9})" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${ico(k)}</svg></g>`;
    const xs = [16, 72, 16, 72, 128, 184, 212, 212], ys = [38, 38, 132, 132, 132, 132, 38, 38], ws = [46, 130, 46, 46, 46, 46, 46, 46];
    const kt = '0;.13;.27;.4;.53;.66;.8;1';
    return tSvg(220, `<text x="16" y="22" class="tat s b">${L('Programa', 'Programa')}</text>
      <rect x="8" y="30" width="262" height="60" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
      ${chip('fwd', 16, 38)}<rect x="72" y="38" width="130" height="44" rx="11" fill="#8B5CF6"/><g transform="translate(82 47)" color="#fff"><svg width="26" height="26" viewBox="0 0 24 24">${ico('call')}</svg></g><text x="114" y="66" class="tat w s">${L('escala', 'escalera')}</text>${chip('fwd', 212, 38)}
      <text x="16" y="120" class="tat s b" style="fill:#6D3FD8">${L('Funció escala', 'Función escalera')}</text>
      <rect x="8" y="124" width="234" height="60" rx="14" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2.5"/>
      <path d="M140 86Q150 104 150 126" fill="none" stroke="#8B5CF6" stroke-width="3.5" stroke-dasharray="6 5" class="ta-dash"/><text x="158" y="112" class="tat s" style="fill:#6D3FD8">${L('va', 'va')}</text>
      <path d="M210 128Q232 108 234 86" fill="none" stroke="#1FA463" stroke-width="3.5" stroke-dasharray="6 5" class="ta-dash"/><text x="242" y="112" class="tat s" style="fill:#14804A">${L('torna', 'vuelve')}</text>
      ${chip('fwd', 16, 132)}${chip('left', 72, 132)}${chip('fwd', 128, 132)}${chip('right', 184, 132)}
      <rect x="16" y="38" width="46" height="44" rx="12" fill="none" stroke="#FFC531" stroke-width="5"><animate attributeName="x" values="${xs.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="y" values="${ys.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="width" values="${ws.join(';')}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></rect>
      ${tBitMini(286, 192, 2, .95)}
      <text x="160" y="212" text-anchor="middle" class="tat s">${L('Va a la funció, la fa i torna', 'Va a la función, la hace y vuelve')}</text>`);
  },
  // una funció dins d'un bucle: Repeteix 3 vegades «escala» i en Bit puja tres esglaons
  u5loopfn() {
    const kt = '0;.16;.3;.42;.56;.68;.82;1';
    return tSvg(220, `<g ${tA(.2, 'ta-in')}><rect x="8" y="44" width="180" height="112" rx="16" fill="#1FA463" filter="url(#bwSh)"/><g transform="translate(18 52)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="46" y="69" class="tat w s">${L('Repeteix 3 vegades', 'Repite 3 veces')}</text>
        <rect x="18" y="80" width="160" height="62" rx="12" fill="#E7F7EE"/></g>
      <g ${tA(.6)}><rect x="30" y="91" width="136" height="40" rx="11" fill="#8B5CF6"/><g transform="translate(40 99)" color="#fff"><svg width="24" height="24" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="70" y="117" class="tat w s">${L('escala', 'escalera')}</text></g>
      ${[0, 1, 2].map(i => `<g ${tA(1.7 + i * 1.35)}><circle cx="${60 + i * 38}" cy="182" r="15" fill="#8B5CF6"/><text x="${60 + i * 38}" y="188" text-anchor="middle" class="tat w b">${i + 1}</text></g>`).join('')}
      <path d="M196 204H226V164H256V124H286V84H316V204Z" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M196 204H226V164H256V124H286V84H316" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(.9, 'ta-draw')}/>
      <g transform="translate(312 84)"><path d="M0 0V-34" stroke="#5B4636" stroke-width="3.5"/><path d="M1 -34q10 -3 18 3q-8 5 -18 6z" fill="#EF5A5A"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="210 202;210 202;241 162;241 162;271 122;271 122;299 82;299 82" keyTimes="${kt}" dur="5.5s" repeatCount="indefinite"/>${tBitMini(0, 0, 1, .62)}</g>`);
  },
  // un error dins de la funció surt cada vegada que la crides… i s'arregla en un sol lloc
  u5bugfn() {
    const ico = k => BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '');
    const chip = (k, x, col, extra = '') => `<g ${extra}><rect x="${x}" y="36" width="44" height="34" rx="9" fill="${col}"/><g transform="translate(${x + 11} ${41})" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${ico(k)}</svg></g></g>`;
    const panel = (x, i) => `<g transform="translate(${x} 100)"><rect width="92" height="84" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><path d="M14 70H34V50H54V30H76" fill="none" stroke="#E2BE76" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <g ${tA(.8 + i * .4)}><circle cx="62" cy="58" r="13" fill="#EF5A5A"/><path d="M56 52l12 12M68 52l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>
      <g ${tA(3 + i * .3)}><circle cx="62" cy="58" r="14" fill="#3CC47C"/><path d="M55 58l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="22" y="22" class="tat s">${i + 1}a</text></g>`;
    return tSvg(220, `<rect x="10" y="8" width="300" height="72" rx="16" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2.5"/>
      <text x="22" y="28" class="tat s b" style="fill:#6D3FD8">${L('Funció escala', 'Función escalera')}</text>
      ${chip('fwd', 22, '#3D7BF4')}${chip('right', 72, '#EF5A5A')}${chip('left', 72, '#3D7BF4', tA(2.6))}${chip('fwd', 122, '#3D7BF4')}${chip('right', 172, '#3D7BF4')}
      <g ${tA(.5, 'ta-wob')}><rect x="232" y="38" width="66" height="30" rx="15" fill="#EF5A5A"/><text x="265" y="58" text-anchor="middle" class="tat w s">bug!</text></g>
      <g ${tA(2.3, 'ta-wob')}><g transform="translate(104 86) rotate(-25) scale(.8)"><rect x="-4" y="-2" width="8" height="34" rx="3" fill="#8C93A6"/><path d="M-11 -12a11 11 0 1 0 22 0l-6 0l0 6l-10 0l0 -6z" fill="#8C93A6"/></g></g>
      ${[14, 114, 214].map(panel).join('')}
      <text x="160" y="210" text-anchor="middle" class="tat s" opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.14;.46;.5;1" dur="5.5s" repeatCount="indefinite"/>${L("L'error surt les 3 vegades", 'El error sale las 3 veces')}</text>
      <text x="160" y="210" text-anchor="middle" class="tat s" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.52;.56;.94;1" dur="5.5s" repeatCount="indefinite"/>${L("L'arregles un cop i van bé les 3!", '¡Lo arreglas una vez y van bien las 3!')}</text>`);
  },
  // pocs blocs: el mateix camí amb 12 blocs o amb una funció (6 blocs)
  u5short() {
    const bar = (x, y, w, col, t) => `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="${col}" ${tA(t, 'ta-in')}/>`;
    const left = Array.from({ length: 12 }, (_, i) => bar(26, 40 + i * 13, 96, '#3D7BF4', .2 + i * .1)).join('');
    const right = bar(200, 40, 96, '#1FA463', 1.8) + bar(214, 53, 82, '#8B5CF6', 1.9) + `<rect x="192" y="76" width="112" height="70" rx="12" fill="#F3EEFF" stroke="#8B5CF6" stroke-width="2" ${tA(2.1, 'ta-fade')}/>` + [0, 1, 2, 3].map(i => bar(204, 86 + i * 14, 88, '#3D7BF4', 2.2 + i * .15)).join('');
    return tSvg(214, `<text x="74" y="26" text-anchor="middle" class="tat s b">${L('Sense funció', 'Sin función')}</text><text x="248" y="26" text-anchor="middle" class="tat s b" style="fill:#6D3FD8">${L('Amb funció', 'Con función')}</text>
      <rect x="16" y="32" width="116" height="164" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${left}
      <rect x="186" y="32" width="124" height="122" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${right}
      <g ${tA(1.5)}><circle cx="159" cy="110" r="17" fill="#FFC531"/><path d="M152 110h12M159 103l7 7l-7 7" fill="none" stroke="#14204A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.4)}><text x="74" y="212" text-anchor="middle" class="tat b">${L('12 blocs', '12 bloques')}</text></g>
      <g ${tA(2.9)}><rect x="200" y="164" width="96" height="34" rx="17" fill="#3CC47C"/><text x="248" y="187" text-anchor="middle" class="tat w b">${L('6 blocs', '6 bloques')}</text></g>`);
  },
  // dues funcions: «puja» i «baixa», combinades en l'ordre que calgui
  u5two() {
    const seq = ['A', 'B', 'A', 'A', 'B'], nm = { A: L('puja', 'sube'), B: L('baixa', 'baja') }, col = { A: '#8B5CF6', B: '#E5489A' };
    const card = (x, f, d, t) => `<g ${tA(t)}><rect x="${x}" y="10" width="146" height="56" rx="14" fill="${col[f]}" filter="url(#bwSh)"/><path d="${d}" transform="translate(${x + 12} 20)" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="${x + 54}" y="34" class="tat w s">${L('Funció', 'Función')} ${f}</text><text x="${x + 54}" y="54" class="tat w b">${nm[f]}</text></g>`;
    let px = 22, py = 192; const pts = [[px, py]];
    seq.forEach(f => { px += 54; py += f === 'A' ? -32 : 32; pts.push([px, py]); });
    return tSvg(220, `${card(10, 'A', 'M2 34H14V22H26V10H36', .2)}${card(164, 'B', 'M2 8H14V20H26V32H36', .6)}
      ${seq.map((f, i) => `<g ${tA(1.1 + i * .3)}><rect x="${12 + i * 60}" y="80" width="56" height="30" rx="9" fill="${col[f]}"/><text x="${40 + i * 60}" y="100" text-anchor="middle" class="tat w s">${nm[f]}</text></g>`).join('')}
      <path d="M${pts.map(p => p.join(' ')).join(' L')}" fill="none" stroke="#E2BE76" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>
      ${seq.map((f, i) => `<path d="M${pts[i].join(' ')} L${pts[i + 1].join(' ')}" fill="none" stroke="${col[f]}" stroke-width="5" stroke-linecap="round" pathLength="1" ${tA(2.7 + i * .2, 'ta-draw')}/>`).join('')}
      ${pts.slice(1).map(([x, y], i) => `<g ${tA(2.8 + i * .2)}><circle cx="${x}" cy="${y}" r="8" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/></g>`).join('')}
      <g ${tA(3.8)}>${tBitMini(pts[5][0], pts[5][1] - 8, 1, .5)}</g>`);
  },
  // planificar amb funcions: mira què es repeteix, posa-hi nom i el programa es llegeix com una història
  u5plan() {
    const box = (x, y) => `<g transform="translate(${x} ${y}) scale(.72)"><path d="M-15 -26h30l0 26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M-15 -26l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -26V0M-15 -13H15" stroke="#F6DCA8" stroke-width="3.2"/></g>`;
    const home = (x, y) => `<g transform="translate(${x} ${y}) scale(.7)"><rect x="-19" y="-30" width="38" height="30" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2.4"/><path d="M-24 -28L0 -48L24 -28Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/><rect x="-5" y="-17" width="10" height="17" rx="2" fill="#B07A3E"/></g>`;
    const row = (i) => { const y = 54 + i * 56; return `<g ${tA(.2 + i * .35, 'ta-in')}><rect x="10" y="${y - 44}" width="150" height="50" rx="13" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="${y - 12}" class="tat b" style="fill:#8B5CF6">${i + 1}</text>${box(52, y - 6)}<path d="M72 ${y - 18}h34" stroke="#3D7BF4" stroke-width="3.5" stroke-dasharray="5 5" stroke-linecap="round"/><path d="M102 ${y - 24}l7 6l-7 6" fill="none" stroke="#3D7BF4" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>${home(132, y - 4)}</g>`; };
    const prog = [['call', L('porta-la', 'llévala')], ['right', L('Gira', 'Gira')], ['call', L('porta-la', 'llévala')], ['right', L('Gira', 'Gira')], ['call', L('porta-la', 'llévala')]];
    return tSvg(220, `${[0, 1, 2].map(row).join('')}
      <path d="M166 12q10 0 10 12v54q0 10 8 10q-8 0 -8 10v54q0 12 -10 12" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" ${tA(1.4, 'ta-fade')}/>
      ${prog.map(([k, t], i) => `<g ${tA(1.9 + i * .3)}><rect x="${k === 'call' ? 190 : 204}" y="${12 + i * 34}" width="${k === 'call' ? 122 : 86}" height="28" rx="9" fill="${k === 'call' ? '#8B5CF6' : '#3D7BF4'}"/><g transform="translate(${k === 'call' ? 196 : 210} ${16 + i * 34})" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="${k === 'call' ? 222 : 236}" y="${31 + i * 34}" class="tat w s">${t}</text></g>`).join('')}
      <g ${tA(3.4, 'ta-fade')}><text x="160" y="212" text-anchor="middle" class="tat s">${L('Què es repeteix? Posa-hi nom!', '¿Qué se repite? ¡Ponle nombre!')}</text></g>`);
  },
  // la funció comença on és en Bit: la mateixa «porta-la» cap a la dreta o cap avall
  u5where() {
    const box = (x, y) => `<g transform="translate(${x} ${y}) scale(.62)"><path d="M-15 -26h30l0 26h-30z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M-15 -26l5 -6h30l-5 6z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -26V0M-15 -13H15" stroke="#F6DCA8" stroke-width="3.2"/></g>`;
    const home = (x, y) => `<g transform="translate(${x} ${y}) scale(.6)"><rect x="-19" y="-30" width="38" height="30" rx="3" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="2.4"/><path d="M-24 -28L0 -48L24 -28Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="2.4" stroke-linejoin="round"/><rect x="-5" y="-17" width="10" height="17" rx="2" fill="#B07A3E"/></g>`;
    const panel = (x0, down, t) => { const C = 32, gx = x0 + 11, gy = 12, cell = (i) => down ? [gx + C, gy + i * C] : [gx + i * C, gy + C * 1.5], pts = [0, 1, 2, 3].map(cell);
      return `<g ${tA(t, 'ta-in')}><rect x="${x0}" y="0" width="150" height="204" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="${gx}" y="${gy}" width="${4 * C}" height="${4 * C}" rx="10" fill="url(#bwGrass)"/>
        ${pts.map(([px, py]) => `<rect x="${px + 2}" y="${py + 2}" width="${C - 4}" height="${C - 4}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('')}
        <path d="M${pts[0][0] + C / 2} ${pts[0][1] + C / 2} L${pts[3][0] + C / 2} ${pts[3][1] + C / 2}" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/>
        ${box(pts[1][0] + C / 2, pts[1][1] + C - 6)}${home(pts[3][0] + C / 2, pts[3][1] + C - 4)}
        ${tBitMini(pts[0][0] + C / 2, pts[0][1] + C - 4, down ? 2 : 1, .5)}
        <text x="${x0 + 75}" y="${gy + 4 * C + 18}" text-anchor="middle" class="tat s">${down ? L('mira avall ↓', 'mira abajo ↓') : L('mira a la dreta →', 'mira a la derecha →')}</text></g>`; };
    return tSvg(230, `${panel(6, false, .2)}${panel(164, true, .8)}
      ${[6, 164].map((x, i) => `<g ${tA(1.5 + i * .4)}><rect x="${x + 14}" y="166" width="122" height="30" rx="10" fill="#8B5CF6"/><g transform="translate(${x + 20} 170)" color="#fff"><svg width="22" height="22" viewBox="0 0 24 24">${BIT_ICO.call.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g><text x="${x + 48}" y="186" class="tat w s">${L('porta-la', 'llévala')}</text></g>`).join('')}
      <g ${tA(2.4, 'ta-fade')}><text x="160" y="224" text-anchor="middle" class="tat s">${L('Mateixa funció, des d\'on és en Bit', 'Misma función, desde donde está Bit')}</text></g>`);
  },
  // ---------- Robot, unitat 6 ----------
  // una variable és una capsa amb nom que recorda un número (i el número canvia: 0, 1, 2, 3)
  u6box() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const ts = [0, 1.3, 2.4, 3.5];
    const plus = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="15" fill="#E0533F" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">+1</text></g>`;
    return tSvg(214, `
      <ellipse cx="98" cy="184" rx="78" ry="8" fill="#0B2A12" opacity=".1"/>
      <path d="M30 78h136v104h-136z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <path d="M30 78l-14 -22h136l14 22z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <path d="M166 78l14 -22v104l-14 22z" fill="#A86A33" stroke="#7A4A1E" stroke-width="3" stroke-linejoin="round"/>
      <rect x="58" y="90" width="80" height="62" rx="14" fill="#fff" stroke="#E0533F" stroke-width="4"/>
      ${sw([0, 1, 2, 3].map(n => `<text x="98" y="139" text-anchor="middle" font-size="46" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#E0533F">${n}</text>`), ts)}
      <rect x="44" y="158" width="108" height="20" rx="10" fill="#E0533F"/><text x="98" y="173" text-anchor="middle" class="tat w s">${L('comptador', 'contador')}</text>
      ${plus(36, 40, 1.3)}${plus(98, 30, 2.4)}${plus(160, 40, 3.5)}
      <g ${tA(.5, 'ta-in')}><rect x="200" y="20" width="110" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="212" y="30" width="86" height="38" rx="8" fill="#14204A"/>
        ${sw(['2', '3'].map(n => `<text x="236" y="58" text-anchor="middle" font-size="24" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#FFC531">${n}</text>`), [0, 2.4])}
        <text x="255" y="57" text-anchor="middle" font-size="20" font-weight="900" fill="#FFC531">:</text><text x="274" y="58" text-anchor="middle" font-size="24" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#FFC531">1</text>
        <text x="255" y="88" text-anchor="middle" class="tat s">${L('marcador', 'marcador')}</text></g>
      <g ${tA(1, 'ta-in')}><rect x="200" y="110" width="110" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g transform="translate(222 124)"><path d="M6 0c6 0 8 8 7 15s-4 12 -8 12s-6 -4 -6 -11s1 -16 7 -16z" fill="#3D7BF4"/><path d="M20 12c5 0 7 7 6 13s-4 10 -7 10s-5 -4 -5 -10s1 -13 6 -13z" fill="#3D7BF4" opacity=".7"/></g>
        ${sw(['348', '349', '350', '351'].map(n => `<text x="278" y="152" text-anchor="middle" font-size="20" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#3D7BF4">${n}</text>`), ts)}
        <text x="255" y="178" text-anchor="middle" class="tat s">${L('passes', 'pasos')}</text></g>
      <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(.2, 'ta-fade')}>${L('un nom a fora, un número a dins', 'un nombre fuera, un número dentro')}</text>`);
  },
  // els tres blocs de la variable: suma, resta i posa
  u6ops() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const tile = (x, y, n, col = '#E0533F') => `<rect x="${x}" y="${y}" width="46" height="46" rx="12" fill="#fff" stroke="${col}" stroke-width="3.5"/><text x="${x + 23}" y="${y + 33}" text-anchor="middle" font-size="26" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}">${n}</text>`;
    const rows = [[L('Suma 2', 'Suma 2'), 3, 5, 'M8 0h10M13 -5v10'], [L('Resta 1', 'Resta 1'), 5, 4, 'M8 0h10'], [L('Posa a 0', 'Pon a 0'), 4, 0, 'M8 -3h10M8 3h10']];
    return tSvg(214, rows.map(([t, a, b, ico], i) => { const y = 10 + i * 68, t0 = .3 + i * 1.4;
      return `<g ${tA(t0, 'ta-in')}><rect x="8" y="${y}" width="304" height="58" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="18" y="${y + 11}" width="120" height="36" rx="11" fill="#E0533F"/><g transform="translate(22 ${y + 29})"><rect x="2" y="-11" width="22" height="22" rx="6" fill="#fff" opacity=".25"/><path d="${ico}" transform="translate(-0 0)" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="${52}" y="${y + 34}" class="tat w">${t}</text>
        ${tile(162, y + 6, a, '#9AA6C8')}
        <path d="M216 ${y + 29}h26" stroke="#E0533F" stroke-width="4" stroke-linecap="round"/><path d="M236 ${y + 21}l9 8l-9 8" fill="none" stroke="#E0533F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(t0 + .7)}>${tile(256, y + 6, b)}</g>`; }).join(''));
  },
  // compte! sumar no és posar: de 4, «Suma 1» fa 5, però «Posa a 1» fa 1
  u6setadd() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const big = (x, n, col) => `<text x="${x}" y="128" text-anchor="middle" font-size="50" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}">${n}</text>`;
    const col = (x, bg, line, title, after, t, erase) => `<g ${tA(.2 + (x > 100 ? .5 : 0), 'ta-in')}><rect x="${x}" y="10" width="146" height="164" rx="18" fill="${bg}" stroke="${line}" stroke-width="2"/>
        <rect x="${x + 14}" y="22" width="118" height="32" rx="10" fill="#E0533F"/><text x="${x + 73}" y="43" text-anchor="middle" class="tat w s">${title}</text>
        <rect x="${x + 33}" y="70" width="80" height="76" rx="16" fill="#fff" stroke="#E0533F" stroke-width="4"/></g>
      ${erase ? sw([big(x + 73, 4, '#9AA6C8'), big(x + 73, 4, '#9AA6C8') + `<path d="M${x + 42} 112l60 -22M${x + 42} 92l60 22" stroke="#EF5A5A" stroke-width="6" stroke-linecap="round"/>`, big(x + 73, after, '#E0533F')], [0, t - 1, t])
        : sw([big(x + 73, 4, '#9AA6C8'), big(x + 73, after, '#E0533F')], [0, t]) + `<g ${tA(t - .6)}><circle cx="${x + 122}" cy="74" r="15" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><text x="${x + 122}" y="79" text-anchor="middle" class="tat w s">+1</text></g>`}`;
    return tSvg(214, `${col(10, '#E7F7EE', '#A8E0C0', L('Suma 1', 'Suma 1'), 5, 2.2, false)}${col(164, '#FDEBEB', '#F4B7B7', L('Posa a 1', 'Pon a 1'), 1, 3.4, true)}
      <text x="83" y="166" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>4 + 1 = 5</text><text x="237" y="166" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L("el 4 s'esborra", 'el 4 se borra')}</text>
      <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4, 'ta-fade')}>${L('Posar esborra el que hi havia!', '¡Poner borra lo que había!')}</text>`);
  },
  // compte! «Suma 1» dins del «Si» (compta estrelles) o a fora (compta passes)
  u6inside() {
    const fs = 'style="font-size:12.5px"';
    const blk = (x, y, w, h, col, txt, dark) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="${col}"/><text x="${x + 9}" y="${y + h / 2 + 4.5}" class="tat s${dark ? '' : ' w'}" ${fs}>${txt}</text>`;
    const prog = (x, inside, ok, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="8" width="148" height="114" rx="12" fill="#1FA463"/><text x="${x + 10}" y="25" class="tat w s" ${fs}>${L('Repeteix 6', 'Repite 6')}</text>
      <rect x="${x + 7}" y="32" width="134" height="83" rx="9" fill="#fff" opacity=".93"/>
      ${blk(x + 12, 37, 88, 22, '#3D7BF4', L('Endavant', 'Adelante'))}
      ${inside ? `<rect x="${x + 12}" y="63" width="124" height="47" rx="7" fill="#F2B21B"/><text x="${x + 20}" y="79" class="tat s" ${fs}>${L('Si hi ha estrella', 'Si hay estrella')}</text><rect x="${x + 22}" y="85" width="110" height="21" rx="6" fill="#FFF3C4"/>${blk(x + 25, 86, 70, 19, '#E0533F', L('Suma 1', 'Suma 1'))}`
        : `${blk(x + 12, 63, 124, 22, '#F2B21B', L('Si hi ha estrella', 'Si hay estrella'), true)}${blk(x + 12, 89, 70, 22, '#E0533F', L('Suma 1', 'Suma 1'))}`}
      <circle cx="${x + 138}" cy="16" r="12" fill="${ok ? '#3CC47C' : '#EF5A5A'}" stroke="#fff" stroke-width="2.5"/>${ok ? `<path d="M${x + 132} 16l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 133} 11l10 10M${x + 143} 11l-10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
    const strip = (x, all, t) => [0, 1, 2, 3, 4, 5].map(i => { const star = [0, 2, 3].includes(i), cx = x + 14 + i * 24;
      return `<rect x="${cx - 11}" y="142" width="22" height="22" rx="5" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>${star ? `<path transform="translate(${cx} 153) scale(.55)" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>` : ''}
        ${all || star ? `<g ${tA(t + i * .35)}><rect x="${cx - 10}" y="125" width="20" height="13" rx="6.5" fill="#E0533F"/><text x="${cx}" y="135.5" text-anchor="middle" class="tat w" style="font-size:10px">+1</text></g>` : ''}`; }).join('');
    const res = (x, txt, ok, t) => `<g ${tA(t)}><rect x="${x + 14}" y="172" width="120" height="32" rx="12" fill="#fff" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="3"/><text x="${x + 74}" y="193" text-anchor="middle" class="tat s">${txt}</text></g>`;
    return tSvg(210, `${prog(6, false, false, .2)}${prog(166, true, true, .5)}${strip(6, true, 1.2)}${strip(166, false, 1.2)}
      ${res(6, L('compta 6 passes', 'cuenta 6 pasos'), false, 3.4)}${res(166, L('compta 3 estrelles', 'cuenta 3 estrellas'), true, 3.7)}`);
  },
  // un número fix només serveix per a una illa; el «Si» compta a totes
  u6islands() {
    const star = (cx, cy, s = .6) => `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>`;
    const isle = (y, stars, lab, t) => `<g ${tA(t, 'ta-in')}><rect x="6" y="${y}" width="156" height="50" rx="14" fill="#4FB4E8"/><rect x="12" y="${y + 6}" width="144" height="38" rx="10" fill="url(#bwGrass)"/>
      ${[0, 1, 2, 3, 4].map(i => `<rect x="${17 + i * 27}" y="${y + 11}" width="24" height="28" rx="6" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>${stars.includes(i) ? star(29 + i * 27, y + 25) : ''}`).join('')}
      <rect x="10" y="${y - 12}" width="54" height="20" rx="10" fill="#14204A"/><text x="37" y="${y + 3}" text-anchor="middle" class="tat w s" style="font-size:12px">${lab}</text></g>`;
    const res = (x, y, n, ok, t) => `<g ${tA(t)}><rect x="${x}" y="${y + 6}" width="66" height="38" rx="12" fill="#fff" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="3"/><text x="${x + 22}" y="${y + 32}" text-anchor="middle" font-size="20" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#14204A">${n}</text>
      <circle cx="${x + 49}" cy="${y + 25}" r="10" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M${x + 44} ${y + 25}l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 45} ${y + 21}l8 8M${x + 53} ${y + 21}l-8 8" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="170" y="6" width="66" height="34" rx="10" fill="#E0533F"/><text x="203" y="28" text-anchor="middle" class="tat w s">${L('Suma 3', 'Suma 3')}</text>
        <rect x="244" y="6" width="70" height="34" rx="10" fill="#F2B21B"/><text x="252" y="28" class="tat s" style="font-size:12.5px">${L('Si', 'Si')}</text>${star(276, 22, .55)}<text x="288" y="28" class="tat s" style="font-size:12.5px">+1</text></g>
      ${isle(64, [0, 2, 3], L('Illa 1', 'Isla 1'), .4)}${res(170, 60, 3, true, 1.2)}${res(246, 60, 3, true, 1.6)}
      ${isle(140, [2], L('Illa 2', 'Isla 2'), 2.2)}${res(170, 136, 3, false, 3)}${res(246, 136, 1, true, 3.4)}
      <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(4, 'ta-fade')}>${L('El «Si» compta; el número fix, no', 'El «Si» cuenta; el número fijo, no')}</text>`);
  },
  // punts que valen diferent: estrella +2, caixa +5
  u6points() {
    const sw = (items, ts) => items.map((h, i) => { const a = (ts[i] / 5.5).toFixed(3), b = ((ts[i + 1] ?? 5.5) / 5.5).toFixed(3);
      return `<g visibility="${i ? 'hidden' : 'visible'}"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="${i ? `0;${a};${b}` : `0;${b}`}" values="${i ? 'hidden;visible;hidden' : 'visible;hidden'}"/>${h}</g>`; }).join('');
    const star = (cx, cy, s = .8) => `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2"/>`;
    const box = (cx, by, s = 1) => `<g transform="translate(${cx} ${by}) scale(${s})"><path d="M-13 -22h26v22h-26z" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M-13 -22l4 -5h26l-4 5z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -22V0M-13 -11H13" stroke="#F6DCA8" stroke-width="3"/></g>`;
    const cx = i => 40 + i * 60, X = [0, 1, 2, 3, 4].map(cx);
    const pop = (i, t, txt, col) => `<g ${tA(t)}><rect x="${cx(i) - 22}" y="96" width="44" height="26" rx="13" fill="${col}" stroke="#fff" stroke-width="2.5" filter="url(#bwSh)"/><text x="${cx(i)}" y="114" text-anchor="middle" class="tat w s">${txt}</text></g>`;
    const kt = '0;0.12;0.18;0.30;0.36;0.48;0.54;0.66;1';
    const vals = [X[0], X[0], X[1], X[1], X[2], X[2], X[3], X[3], X[3]].map(x => `${x} 182`).join(';');
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="10" y="8" width="132" height="76" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="76" y="30" text-anchor="middle" class="tat s">${L('marcador', 'marcador')}</text>
        ${sw([0, 2, 7, 9].map(n => `<text x="76" y="72" text-anchor="middle" font-size="36" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="#E0533F">${n}</text>`), [0, .99, 1.98, 2.97])}</g>
      <g ${tA(.4, 'ta-in')}><rect x="156" y="8" width="156" height="76" rx="16" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>${star(180, 32, .7)}<text x="198" y="38" class="tat s">= 2 ${L('punts', 'puntos')}</text>${box(180, 72, .8)}<text x="198" y="68" class="tat s">= 5 ${L('punts', 'puntos')}</text></g>
      <rect x="8" y="150" width="304" height="46" rx="14" fill="url(#bwGrass)"/>${X.map(x => `<rect x="${x - 26}" y="154" width="52" height="38" rx="9" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('')}
      ${star(X[1], 172)}${box(X[2], 188)}${star(X[3], 172)}
      ${pop(1, .99, '+2', '#E0533F')}${pop(2, 1.98, '+5', '#E0533F')}${pop(3, 2.97, '+2', '#E0533F')}
      <g><animateTransform attributeName="transform" type="translate" dur="5.5s" repeatCount="indefinite" keyTimes="${kt}" values="${vals}"/>${tBitMini(0, 0, 1, .62)}</g>`);
  },
  // compte! «el comptador valgui 3» vol dir exactament 3: saltant de 2 en 2, no hi arriba mai
  u6jump() {
    const x = i => 26 + i * 30;
    const line = (y, step, t0, lab) => { const hops = []; for (let v = 0; v + step <= 6; v += step) hops.push(v);
      return `<g ${tA(t0, 'ta-in')}><rect x="10" y="${y - 70}" width="96" height="28" rx="9" fill="#E0533F"/><text x="58" y="${y - 51}" text-anchor="middle" class="tat w s">${lab}</text>
        <path d="M${x(0) - 8} ${y}H${x(8) + 6}" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/>
        ${[...Array(9).keys()].map(i => `${i === 3 ? `<circle cx="${x(i)}" cy="${y}" r="13" fill="#FFF3C4" stroke="#F2B21B" stroke-width="3"/>` : `<path d="M${x(i)} ${y - 6}v12" stroke="#9AA6C8" stroke-width="2.5"/>`}<text x="${x(i)}" y="${y + 28}" text-anchor="middle" class="tat s">${i}</text>`).join('')}</g>
        ${hops.slice(0, 3).map((v, k) => { const a = (t0 + .6 + k * .55) / 5.5, b = a + .07;
          return `<path pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1" d="M${x(v)} ${y - 4}Q${(x(v) + x(v + step)) / 2} ${y - 30 - step * 8} ${x(v + step)} ${y - 4}" fill="none" stroke="#E0533F" stroke-width="3.5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="5.5s" repeatCount="indefinite" keyTimes="0;${a.toFixed(3)};${b.toFixed(3)};.96;1" values="1;1;0;0;1"/></path>
            <circle cx="${x(v + step)}" cy="${y}" r="5" fill="#E0533F" visibility="hidden"><animate attributeName="visibility" dur="5.5s" repeatCount="indefinite" calcMode="discrete" keyTimes="0;${b.toFixed(3)};.96" values="hidden;visible;hidden"/></circle>`; }).join('')}`; };
    const bulb = (cx, cy, on, t) => `<g transform="translate(${cx} ${cy})"><path d="M0 -20a14 14 0 0 0 -8 25.5V12h16V5.5A14 14 0 0 0 0 -20z" fill="#E3E8F4" stroke="#9AA6C8" stroke-width="2.5"/><rect x="-7" y="14" width="14" height="5" rx="2" fill="#9AA6C8"/>
      ${on ? `<g ${tA(t)}><path d="M0 -20a14 14 0 0 0 -8 25.5V12h16V5.5A14 14 0 0 0 0 -20z" fill="#3CC47C" stroke="#1FA463" stroke-width="2.5"/><circle r="26" cy="-4" fill="#3CC47C" opacity=".18"/></g>` : `<g ${tA(t)}><circle cx="15" cy="-16" r="9" fill="#EF5A5A"/><path d="M11 -20l8 8M19 -20l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>`}</g>`;
    return tSvg(214, `${line(84, 1, .2, L('Suma 1', 'Suma 1'))}${bulb(294, 64, true, 2.1)}<text x="196" y="26" class="tat s" ${tA(2.2, 'ta-fade')}>${L('val 3: llum!', 'vale 3: ¡luz!')}</text>
      ${line(186, 2, 2.6, L('Suma 2', 'Suma 2'))}${bulb(294, 166, false, 4.4)}<text x="164" y="128" class="tat s" ${tA(4.4, 'ta-fade')}>${L('es salta el 3!', '¡se salta el 3!')}</text>`);
  },
  // projecte: quatre preguntes abans de programar amb una variable
  u6plan() {
    const it = [[L('Què vull comptar?', '¿Qué quiero contar?'), L('fruites', 'frutas')], [L('Amb què comença?', '¿Con qué empieza?'), '0'], [L('Quan suma? Quant?', '¿Cuándo suma? ¿Cuánto?'), '+1 · +5'], [L('Quant val al final?', '¿Cuánto vale al final?'), '14']];
    return tSvg(214, `<rect x="14" y="10" width="292" height="198" rx="18" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><rect x="132" y="2" width="56" height="18" rx="6" fill="#C98A4B"/>
      ${it.map(([q, a], i) => { const y = 34 + i * 44, t = .4 + i * .95;
        return `<g ${tA(t, 'ta-in')}><circle cx="40" cy="${y + 13}" r="12" fill="#E0533F"/><text x="40" y="${y + 18}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="60" y="${y + 18}" class="tat s">${q}</text></g>
          <g ${tA(t + .5)}><rect x="222" y="${y}" width="74" height="27" rx="13.5" fill="#fff" stroke="#E0533F" stroke-width="2.5"/><text x="259" y="${y + 19}" text-anchor="middle" class="tat s" style="fill:#E0533F">${a}</text></g>`; }).join('')}`);
  },
  // ---------- Robot, unitat 7 ----------
  // a la vida diària: menjar FINS QUE el plat és buit (no comptes les cullerades: mires el plat)
  u7eat() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = (a, b = 5.3) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .2)};${k(b)};${k(b + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const hide = a => `<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;${k(a)};${k(a + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const bites = [1.0, 2.0, 3.0, 4.0];
    const pcs = [[58, 128], [78, 136], [96, 127], [76, 121]];
    const piece = ([x, y], i) => `<g>${hide(bites[i] + .1)}<circle cx="${x}" cy="${y}" r="9.5" fill="#F5C45E" stroke="#C98A12" stroke-width="2"/><circle cx="${x - 3}" cy="${y - 3}" r="2.6" fill="#FFF3C4"/></g>`;
    // la cullera baixa al plat i puja amb un tros, quatre vegades
    const sp = []; bites.forEach(b => sp.push([b - .35, 0, -34], [b - .05, 0, 0], [b + .3, 0, -34]));
    const all = [[0, 0, -34], ...sp, [D, 0, -34]];
    const spoonMv = `<animateTransform attributeName="transform" type="translate" values="${all.map(p => p[1] + ' ' + p[2]).join(';')}" keyTimes="${all.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const pulse = bites.map(b => `${k(b - .1)};${k(b)};${k(b + .3)}`).join(';');
    return tSvg(214, `<text x="160" y="24" text-anchor="middle" class="tat b">${L('Menja fins que el plat sigui buit', 'Come hasta que el plato esté vacío')}</text>
      <g ${tA(.1, 'ta-in')}><ellipse cx="78" cy="150" rx="66" ry="12" fill="#0B2A12" opacity=".08"/><ellipse cx="78" cy="132" rx="62" ry="26" fill="#fff" stroke="#C9D6FB" stroke-width="3"/><ellipse cx="78" cy="130" rx="44" ry="15" fill="#EEF3FF"/></g>
      ${pcs.map(piece).join('')}
      <g>${spoonMv}<g transform="translate(92 112)"><path d="M8 -6 L44 -40" stroke="#9AA6C4" stroke-width="6" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="15" ry="9" fill="#C9D3EA" stroke="#7D8AAD" stroke-width="2.5" transform="rotate(-40)"/></g></g>
      <g opacity="0">${show(4.35)}<circle cx="78" cy="130" r="18" fill="#3CC47C"/><path d="M70 130l6 6l10 -12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(.3, 'ta-pop')}><rect x="150" y="44" width="164" height="104" rx="16" fill="#1FA463" filter="url(#bwSh)"/>
        <text x="164" y="68" class="tat w s">${L('Repeteix fins que', 'Repite hasta que')}</text><text x="164" y="88" class="tat w s">${L('el plat sigui buit', 'el plato esté vacío')}</text>
        <rect x="166" y="100" width="136" height="36" rx="10" fill="#fff"/><rect x="166" y="100" width="136" height="36" rx="10" fill="none" stroke="#F08A24" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;${bites.map(() => '0;1;0').join(';')};0" keyTimes="0;${pulse};1" dur="5.5s" repeatCount="indefinite"/></rect>
        <text x="234" y="123" text-anchor="middle" class="tat s">${L('una cullerada', 'una cucharada')}</text></g>
      <g ${tA(.6, 'ta-in')}><rect x="150" y="160" width="68" height="34" rx="17" fill="#F2B21B"/><text x="184" y="182" text-anchor="middle" class="tat s">${L('Buit?', '¿Vacío?')}</text></g>
      <g opacity="0">${show(.7, 4.15)}<rect x="222" y="160" width="94" height="34" rx="17" fill="#EF5A5A"/><text x="269" y="182" text-anchor="middle" class="tat w s">${L('No: una més', 'No: otra más')}</text></g>
      <g opacity="0">${show(4.3)}<rect x="222" y="160" width="94" height="34" rx="17" fill="#3CC47C"/><text x="269" y="182" text-anchor="middle" class="tat w s">${L('Sí: para!', '¡Sí: para!')}</text></g>`);
  },
  // com funciona per dins: ABANS de cada volta, en Bit pregunta si ja hi ha arribat
  u7check() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const pulses = (list, v1 = 1) => { const t = [0], v = [0]; list.forEach(([a, b]) => { t.push(a, a + .12, b, b + .12); v.push(0, v1, v1, 0); }); t.push(D); v.push(0); return `<animate attributeName="opacity" values="${v.join(';')}" keyTimes="${t.map(k).join(';')}" dur="5.5s" repeatCount="indefinite"/>`; };
    const steps = [1.0, 2.0, 3.0, 4.0], ask = [[.55, .95], [1.55, 1.95], [2.55, 2.95], [3.55, 3.95]];
    const tiles = [0, 1, 2, 3, 4].map(i => `<rect x="${18 + i * 58}" y="36" width="54" height="42" rx="10" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.5"/>`).join('');
    const pts = [[0, 0], ...steps.flatMap((s, i) => [[s, i * 58], [s + .35, (i + 1) * 58]]), [D, 232]];
    const botMv = `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const flag = `<g transform="translate(272 74)"><path d="M0 0V-38" stroke="#7A4A1E" stroke-width="3.5" stroke-linecap="round"/><path d="M0 -38l22 7l-22 8z" fill="#EF5A5A"/></g>`;
    return tSvg(220, `${tiles}${flag}
      <g>${botMv}${tBitMini(45, 74, 1, .62)}
        <g opacity="0">${pulses(ask)}<rect x="27" y="4" width="38" height="26" rx="13" fill="#F2B21B"/><text x="46" y="22" text-anchor="middle" class="tat s">${L('No', 'No')}</text></g>
        <g opacity="0">${pulses([[4.45, 5.3]])}<rect x="23" y="4" width="46" height="26" rx="13" fill="#3CC47C"/><text x="46" y="22" text-anchor="middle" class="tat w s">${L('Sí!', '¡Sí!')}</text></g></g>
      <g ${tA(.2, 'ta-in')}><rect x="48" y="104" width="150" height="38" rx="19" fill="#F2B21B" filter="url(#bwSh)"/><text x="123" y="128" text-anchor="middle" class="tat s">${L('Hi he arribat?', '¿He llegado?')}</text></g>
      <rect x="48" y="104" width="150" height="38" rx="19" fill="none" stroke="#14204A" stroke-width="3" opacity="0">${pulses([...ask, [4.45, 5.3]])}</rect>
      <g ${tA(.5, 'ta-in')}><path d="M198 123h28" stroke="#14204A" stroke-width="3"/><path d="M222 117l8 6l-8 6" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/><text x="212" y="113" text-anchor="middle" class="tat s">${L('no', 'no')}</text>
        <rect x="232" y="104" width="82" height="38" rx="12" fill="#3D7BF4" filter="url(#bwSh)"/><text x="273" y="128" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text>
        <path d="M273 142v20H123v-12" fill="none" stroke="#14204A" stroke-width="3" stroke-dasharray="6 5" class="ta-dash"/><path d="M117 154l6 -9l6 9" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/></g>
      <rect x="232" y="104" width="82" height="38" rx="12" fill="none" stroke="#F08A24" stroke-width="4" opacity="0">${pulses(steps.map(s => [s, s + .4]))}</rect>
      <g ${tA(.8, 'ta-in')}><path d="M48 123H22v58" fill="none" stroke="#14204A" stroke-width="3"/><path d="M16 175l6 8l6 -8" fill="none" stroke="#14204A" stroke-width="3" stroke-linejoin="round"/><text x="34" y="157" class="tat s">${L('sí', 'sí')}</text>
        <rect x="6" y="186" width="96" height="30" rx="15" fill="#EF5A5A"/><text x="54" y="206" text-anchor="middle" class="tat w s">${L('Para!', '¡Para!')}</text></g>
      <rect x="6" y="186" width="96" height="30" rx="15" fill="none" stroke="#14204A" stroke-width="3" opacity="0">${pulses([[4.5, 5.3]])}</rect>
      <text x="214" y="182" text-anchor="middle" class="tat s" style="font-size:12.5px" ${tA(1.1, 'ta-fade')}>${L('Pregunta abans de cada volta', 'Pregunta antes de cada vuelta')}</text>`);
  },
  // compte! un bucle que no s'acaba mai: dins només hi ha «Gira» i la bandera no s'acosta
  u7inf() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const win = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .05)};${k(b)};${k(b + .05)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const nums = [1, 2, 3, 4, 5, 6, 7].map((n, i) => `<text x="76" y="44" text-anchor="middle" class="tat b" opacity="0">${win(.3 + i * .55, .3 + (i + 1) * .55 - .05)}${n}</text>`).join('');
    return tSvg(212, `<rect x="22" y="70" width="108" height="100" rx="18" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/>
      <g transform="translate(76 150) scale(1.1)"><g class="tv tv0">${bitBot(2)}</g><g class="tv tv1">${bitBot(1)}</g><g class="tv tv2">${bitBot(0)}</g><g class="tv tv3">${bitBot(3)}</g></g>
      <path d="M18 92 A66 40 0 0 0 18 150" fill="none" stroke="#E0533F" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/><path d="M12 144l6 10l8 -8" fill="none" stroke="#E0533F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="36" y="22" width="80" height="30" rx="15" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${nums}
      <text x="76" y="45" text-anchor="middle" class="tat b" style="font-size:24px" opacity="0">${win(4.15, 5.35)}∞</text>
      <g ${tA(.2, 'ta-pop')}><rect x="150" y="16" width="164" height="92" rx="16" fill="#1FA463" filter="url(#bwSh)"/><text x="162" y="38" class="tat w s">${L('Repeteix fins que', 'Repite hasta que')}</text><text x="162" y="56" class="tat w s">${L('arribis a la bandera', 'llegues a la bandera')}</text>
        <rect x="164" y="66" width="136" height="32" rx="9" fill="#3D7BF4"/><text x="232" y="87" text-anchor="middle" class="tat w s">${L('Gira a la dreta', 'Gira a la derecha')}</text></g>
      <g ${tA(.9, 'ta-in')}><rect x="242" y="124" width="62" height="48" rx="12" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="2"/><path d="M262 164V132" stroke="#7A4A1E" stroke-width="3.5" stroke-linecap="round"/><path d="M262 132l20 6l-20 7z" fill="#EF5A5A"/>
        <path d="M136 148H236" stroke="#9AA6C4" stroke-width="3" stroke-dasharray="5 6"/><circle cx="188" cy="148" r="13" fill="#EF5A5A"/><path d="M182 142l12 12M194 142l-12 12" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>
      <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(1.6, 'ta-fade')}>${L('La condició no es compleix mai!', '¡La condición no se cumple nunca!')}</text>`, 'loop4');
  },
  // el mateix programa a tres illes amb camins de llargades diferents
  u7tide() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const rows = [[82, 3], [132, 6], [182, 4]], T = 34, X0 = 66, st = .55;
    const row = ([y, n], r) => {
      const tiles = [...Array(n + 1).keys()].map(i => `<rect x="${X0 + i * T}" y="${y - 18}" width="${T - 3}" height="34" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.4"/>`).join('');
      const fx = X0 + n * T + 10;
      const pts = [[0, 0], ...[...Array(n).keys()].flatMap(i => [[.5 + i * st, i * T], [.5 + i * st + .38, (i + 1) * T]]), [D, n * T]];
      const mvb = `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
      const end = .5 + n * st;
      return `<text x="8" y="${y + 5}" class="tat s">${L('Illa', 'Isla')} ${r + 1}</text>${tiles}<g transform="translate(${fx} ${y + 12})"><path d="M0 0V-28" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M0 -28l16 5l-16 6z" fill="#EF5A5A"/></g>
        <g>${mvb}${tBitMini(X0 + 15, y + 14, 1, .4)}</g>
        <g opacity="0">${show(end)}<circle cx="${fx + 26}" cy="${y - 12}" r="11" fill="#3CC47C"/><path d="M${fx + 21} ${y - 12}l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    };
    return tSvg(222, `<g ${tA(.1, 'ta-pop')}><rect x="16" y="6" width="288" height="40" rx="14" fill="#1FA463" filter="url(#bwSh)"/><text x="160" y="31" text-anchor="middle" class="tat w s">${L('Repeteix fins que arribis: Endavant', 'Repite hasta que llegues: Adelante')}</text></g>
      ${rows.map(row).join('')}
      <text x="160" y="216" text-anchor="middle" class="tat b" opacity="0">${show(4.1)}${L('Un sol programa per a les tres illes!', '¡Un solo programa para las tres islas!')}</text>`);
  },
  // quan va millor cada bucle: si saps el número, «Repeteix N vegades»; si no, «Repeteix fins que…»
  u7vs() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const stairs = [0, 1, 2, 3, 4].map(i => `<rect x="${22 + i * 24}" y="${180 - (i + 1) * 16}" width="24" height="${(i + 1) * 16}" fill="${i % 2 ? '#C98A4B' : '#B57536'}"/><text x="${34 + i * 24}" y="${174 - (i + 1) * 16}" text-anchor="middle" class="tat s" opacity="0">${show(.9 + i * .55)}${i + 1}</text>`).join('');
    const water = `<clipPath id="u7glass"><path d="M214 108h56l-7 76h-42z"/></clipPath><g clip-path="url(#u7glass)"><rect x="200" y="184" width="84" height="80" fill="#4FB4E8"><animate attributeName="y" values="184;184;122;122" keyTimes="0;${k(.9)};${k(3.6)};1" dur="5.5s" repeatCount="indefinite"/></rect></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="148" height="198" rx="18" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/><text x="82" y="32" text-anchor="middle" class="tat s">${L('Saps el número?', '¿Sabes el número?')}</text>
        <rect x="14" y="42" width="136" height="34" rx="10" fill="#1FA463"/><text x="82" y="64" text-anchor="middle" class="tat w s" style="font-size:12.5px">${L('Repeteix 5 vegades', 'Repite 5 veces')}</text></g>
      ${stairs}<text x="82" y="198" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L('5 graons', '5 peldaños')}</text>
      <g ${tA(.4, 'ta-in')}><rect x="164" y="8" width="148" height="198" rx="18" fill="#FFF3E6" stroke="#F7C99A" stroke-width="2"/><text x="238" y="32" text-anchor="middle" class="tat s">${L('No el saps?', '¿No lo sabes?')}</text>
        <rect x="170" y="42" width="136" height="34" rx="10" fill="#1FA463"/><text x="238" y="64" text-anchor="middle" class="tat w s" style="font-size:12.5px">${L('Repeteix fins que…', 'Repite hasta que…')}</text></g>
      ${water}<path d="M214 108h56l-7 76h-42z" fill="none" stroke="#7D8AAD" stroke-width="3" stroke-linejoin="round"/><path d="M206 122h72" stroke="#E0533F" stroke-width="2.5" stroke-dasharray="5 4"/>
      <g opacity="0">${show(3.7)}<rect x="262" y="88" width="44" height="26" rx="13" fill="#3CC47C"/><text x="284" y="106" text-anchor="middle" class="tat w s">${L('ple!', '¡lleno!')}</text></g>
      <text x="238" y="198" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('fins que sigui ple', 'hasta que esté lleno')}</text>`);
  },
  // compte! el gir va DESPRÉS del bucle, no a dins
  u7inside() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const show = a => `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${k(a)};${k(a + .2)};${k(5.25)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const topBit = `<rect x="-12" y="-12" width="24" height="24" rx="8" fill="#fff" stroke="#20306A" stroke-width="2.4"/><rect x="2" y="-8" width="8" height="16" rx="3" fill="#16235A"/><circle cx="7" cy="-3.5" r="1.8" fill="#7DF3FF"/><circle cx="7" cy="3.5" r="1.8" fill="#7DF3FF"/>`;
    const strip = x0 => [0, 1, 2, 3].map(i => `<rect x="${x0 + i * 28}" y="161" width="26" height="28" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.3"/>`).join('') + `<circle cx="${x0 + 4 * 28 + 11}" cy="175" r="11" fill="url(#bwRock)" stroke="#737B90" stroke-width="1.5"/>`;
    const mvT = pts => `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const mvR = pts => `<animateTransform attributeName="transform" type="rotate" values="${pts.map(p => p[1]).join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    const panel = (x, ok) => `<rect x="${x}" y="8" width="150" height="198" rx="18" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2"/>
      <circle cx="${x + 24}" cy="30" r="13" fill="${ok ? '#3CC47C' : '#EF5A5A'}"/>${ok ? `<path d="M${x + 18} 30l5 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 19} 25l10 10M${x + 29} 25l-10 10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>`}
      <text x="${x + 44}" y="35" class="tat s">${ok ? L('Gir després', 'Giro después') : L('Gir a dins', 'Giro dentro')}</text>
      <rect x="${x + 6}" y="48" width="138" height="${ok ? 66 : 96}" rx="11" fill="#1FA463"/><text x="${x + 14}" y="68" class="tat w s" style="font-size:12.5px">${L('Fins que obstacle', 'Hasta obstáculo')}</text>
      <rect x="${x + 22}" y="76" width="110" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 77}" y="95" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text>
      ${ok ? `<rect x="${x + 10}" y="122" width="130" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 75}" y="141" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>`
        : `<rect x="${x + 22}" y="108" width="110" height="28" rx="8" fill="#3D7BF4"/><text x="${x + 77}" y="127" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>`}`;
    return tSvg(214, `${panel(8, false)}${panel(162, true)}${strip(16)}${strip(170)}
      <g>${mvT([[0, 0], [.6, 0], [1.0, 28], [D, 28]])}<g transform="translate(29 175)"><g>${mvR([[0, 0], [1.2, 0], [1.5, 90], [D, 90]])}${topBit}</g></g></g>
      <g opacity="0">${show(1.8)}<circle cx="57" cy="148" r="13" fill="#EF5A5A"/><text x="57" y="154" text-anchor="middle" class="tat w b">?!</text></g>
      <g>${mvT([[0, 0], [.6, 0], [1.2, 28], [1.8, 56], [2.4, 84], [D, 84]])}<g transform="translate(183 175)"><g>${mvR([[0, 0], [2.7, 0], [3.0, 90], [D, 90]])}${topBit}</g></g></g>
      <g opacity="0">${show(3.2)}<circle cx="267" cy="148" r="12" fill="#3CC47C"/><path d="M261 148l5 5l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // seguir un camí que gira: a cada volta en Bit DECIDEIX (si hi ha obstacle, gira; si no, avança)
  u7follow() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const pulses = list => { const t = [0], v = [0]; list.forEach(([a, b]) => { t.push(a, a + .08, b, b + .08); v.push(0, 1, 1, 0); }); t.push(D); v.push(0); return `<animate attributeName="opacity" values="${v.join(';')}" keyTimes="${t.map(k).join(';')}" dur="5.5s" repeatCount="indefinite"/>`; };
    const cells = [[30, 40], [60, 40], [90, 40], [120, 40], [150, 40], [150, 70], [150, 100], [150, 130], [150, 160], [120, 160], [90, 160], [60, 160], [60, 130], [60, 100]];
    const tiles = cells.map(([x, y]) => `<rect x="${x - 14}" y="${y - 14}" width="28" height="28" rx="7" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`).join('');
    const trees = [[100, 100], [110, 128], [30, 120], [30, 180], [24, 70], [96, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="url(#bwLeaf)"/>`).join('');
    // camí: 120 + 120 + 90 + 60 = 390 (pauses als revolts, quan en Bit gira)
    const L1 = 120 / 390, L2 = 240 / 390, L3 = 330 / 390;
    const kt = [0, .3, 1.5, 1.8, 3.0, 3.3, 4.1, 4.4, 4.9, D], kp = [0, 0, L1, L1, L2, L2, L3, L3, 1, 1];
    const topBit = `<rect x="-11" y="-11" width="22" height="22" rx="7" fill="#fff" stroke="#20306A" stroke-width="2.4"/><rect x="2" y="-7" width="7" height="14" rx="3" fill="#16235A"/><circle cx="6.5" cy="-3" r="1.7" fill="#7DF3FF"/><circle cx="6.5" cy="3" r="1.7" fill="#7DF3FF"/>`;
    const move = [[.3, 1.5], [1.8, 3.0], [3.3, 4.1], [4.4, 4.9]], turn = [[1.5, 1.8], [3.0, 3.3], [4.1, 4.4]];
    return tSvg(220, `<rect x="6" y="16" width="174" height="188" rx="16" fill="url(#bwGrass)" opacity=".85"/>${tiles}${trees}
      <g transform="translate(60 100)"><path d="M0 8V-18" stroke="#7A4A1E" stroke-width="3" stroke-linecap="round"/><path d="M0 -18l15 5l-15 6z" fill="#EF5A5A"/></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" calcMode="linear" keyTimes="${kt.map(k).join(';')}" keyPoints="${kp.join(';')}" path="M30 40H150V160H60V100"/>${topBit}</g>
      <g ${tA(.2, 'ta-pop')}><rect x="186" y="16" width="130" height="188" rx="16" fill="#1FA463" filter="url(#bwSh)"/><text x="196" y="38" class="tat w s">${L('Fins que arribis:', 'Hasta que llegues:')}</text>
        <rect x="194" y="50" width="114" height="66" rx="10" fill="#F2B21B"/><text x="202" y="70" class="tat s">${L('Si obstacle:', 'Si obstáculo:')}</text><rect x="202" y="78" width="98" height="28" rx="8" fill="#3D7BF4"/><text x="251" y="97" text-anchor="middle" class="tat w s">${L('Gira', 'Gira')}</text>
        <rect x="194" y="124" width="114" height="66" rx="10" fill="#F2B21B"/><text x="202" y="144" class="tat s">${L('Si no:', 'Si no:')}</text><rect x="202" y="152" width="98" height="28" rx="8" fill="#3D7BF4"/><text x="251" y="171" text-anchor="middle" class="tat w s">${L('Endavant', 'Adelante')}</text></g>
      <rect x="198" y="74" width="106" height="36" rx="10" fill="none" stroke="#fff" stroke-width="4" opacity="0">${pulses(turn)}</rect>
      <rect x="198" y="148" width="106" height="36" rx="10" fill="none" stroke="#fff" stroke-width="4" opacity="0">${pulses(move)}</rect>
      <g opacity="0">${pulses([[4.95, 5.35]])}<circle cx="60" cy="72" r="13" fill="#3CC47C"/><path d="M54 72l5 5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // el rescat a la cova: fins que trobi la caixa, l'agafa, mitja volta i fins a la sortida
  u7cave() {
    const D = 5.5, k = t => Math.max(0, Math.min(1, t / D)).toFixed(4);
    const win = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${k(a)};${k(a + .15)};${k(b)};${k(b + .15)};1" dur="5.5s" repeatCount="indefinite"/>`;
    const tiles = [0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${44 + i * 34}" y="150" width="32" height="34" rx="7" fill="url(#bwSand)" stroke="#C9A35E" stroke-width="1.2" opacity=".95"/>`).join('');
    const crys = [[96, 70, '#B79CFF'], [150, 52, '#7DF3FF'], [214, 66, '#FF8FB1'], [262, 96, '#7DF3FF'], [70, 112, '#FFD54A']].map(([x, y, c], i) => `<path d="M${x} ${y - 12}l6 10l-6 12l-6 -12z" fill="${c}"><animate attributeName="opacity" values=".35;1;.35" dur="${1.6 + i * .3}s" repeatCount="indefinite"/></path>`).join('');
    const mv = pts => `<animateTransform attributeName="transform" type="translate" values="${pts.map(p => p[1] + ' 0').join(';')}" keyTimes="${pts.map(p => k(p[0])).join(';')}" dur="5.5s" repeatCount="indefinite"/>`;
    return tSvg(220, `<path d="M4 214V120Q4 18 160 14Q316 18 316 120V214Z" fill="#6B5444"/><path d="M26 214V128Q30 42 160 38Q290 42 294 128V214Z" fill="#2E2430"/>${crys}${[[70, 64, 18], [118, 44, 22], [182, 42, 16], [236, 52, 24], [276, 84, 14]].map(([x, y, h]) => `<path d="M${x - 7} ${y - 4}L${x} ${y + h}L${x + 7} ${y - 4}Z" fill="#4A3A3E"/>`).join('')}
      <path d="M26 214V184H294V214Z" fill="#3A2E38"/>${tiles}
      <g ${tA(.1, 'ta-pop')}><g transform="translate(46 150)"><path d="M-2 0L14 -26L30 0Z" fill="#EF5A5A" stroke="#A9302A" stroke-width="2" stroke-linejoin="round"/><path d="M10 0L14 -10L18 0Z" fill="#7A2620"/></g></g>
      <g opacity="0">${win(.05, 2.4)}<g transform="translate(266 178)"><rect x="-11" y="-20" width="22" height="18" rx="3" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -20V-2M-11 -11H11" stroke="#F6DCA8" stroke-width="2.5"/></g></g>
      <g opacity="0">${win(4.65, 5.3)}<g transform="translate(60 178)"><rect x="-11" y="-20" width="22" height="18" rx="3" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/><path d="M0 -20V-2M-11 -11H11" stroke="#F6DCA8" stroke-width="2.5"/></g></g>
      <g opacity="0">${win(.05, 2.45)}<g>${mv([[0, 0], [.4, 0], [2.2, 170], [D, 170]])}${tBitMini(80, 180, 1, .55)}</g></g>
      <g opacity="0">${win(2.45, 4.6)}<g>${mv([[0, 170], [2.8, 170], [4.4, 0], [D, 0]])}<g transform="translate(80 180) scale(.55)">${bitBot(3, null, true)}</g></g></g>
      <g opacity="0">${win(4.6, 5.3)}${tBitMini(80, 180, 2, .55)}</g>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(.2, 2.3)}${L('Fins que trobi la caixa…', 'Hasta que encuentre la caja…')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(2.4, 2.85)}${L('Agafa-la i mitja volta', 'Cógela y media vuelta')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(2.9, 4.5)}${L('Fins que hi hagi la paret…', 'Hasta que haya la pared…')}</text>
      <text x="160" y="208" text-anchor="middle" class="tat w s" opacity="0">${win(4.6, 5.3)}${L('Rescatada!', '¡Rescatada!')}</text>`);
  },
  // ---------- Robot, unitat 8 ----------
  // la caixa d'eines del curs: totes les eines que s'han après, una per unitat
  u8tools() {
    const ico = (k, x, y, c) => k === 'ev' ? `<rect x="${x}" y="${y}" width="20" height="20" rx="6" fill="#fff"/><text x="${x + 10}" y="${y + 15}" text-anchor="middle" font-size="14" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${c}">A</text>`
      : `<g transform="translate(${x} ${y})" color="${k === 'if' ? '#3A2600' : '#fff'}"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g>`;
    const it = [['fwd', L('Ordres', 'Órdenes'), '#3D7BF4'], ['rep', L('Bucles', 'Bucles'), '#1FA463'], ['light', L('Llums i notes', 'Luces y notas'), '#E5489A'], ['ev', L('Botons', 'Botones'), '#F08A24'],
      ['if', L('Si… si no…', 'Si… si no…'), '#F2B21B'], ['call', L('Funcions', 'Funciones'), '#8B5CF6'], ['add', L('Variables', 'Variables'), '#E0533F'], ['until', L('Fins que…', 'Hasta que…'), '#14A3B8']];
    const chip = ([k, t, c], i) => { const x = i % 2 ? 164 : 8, y = 10 + Math.floor(i / 2) * 40;
      return `<g ${tA(.5 + i * .32)}><rect x="${x}" y="${y}" width="148" height="32" rx="10" fill="${c}" filter="url(#bwSh)"/><rect x="${x + 5}" y="${y + 5}" width="22" height="22" rx="6" fill="#fff" fill-opacity=".22"/>${ico(k, x + 6, y + 6, c)}
        <text x="${x + 34}" y="${y + 21}" class="tat s${k === 'if' ? '' : ' w'}">${t}</text></g>`; };
    return tSvg(222, `<g ${tA(.1, 'ta-in')}><path d="M56 180h208l-9 -11h-190z" fill="#EDBB7A" stroke="#7A4A1E" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="62" y="180" width="196" height="36" rx="8" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2.5"/><path d="M62 190h196" stroke="#7A4A1E" stroke-width="2" opacity=".35"/>
        <rect x="66" y="184" width="10" height="10" rx="2" fill="#C9CED9"/><rect x="244" y="184" width="10" height="10" rx="2" fill="#C9CED9"/>
        <text x="160" y="207" text-anchor="middle" class="tat w s">${L("La teva caixa d'eines", 'Tu caja de herramientas')}</text></g>
      ${it.map(chip).join('')}
      <g ${tA(3.3)}>${tBitMini(290, 216, 2, .5)}</g>`);
  },
  // un bon repte: objectiu, obstacles, al punt i amb solució (es marca a la llista i al mapa)
  u8good() {
    const C = 34, X0 = 10, Y0 = 36, cx = x => X0 + x * C + C / 2, cy = y => Y0 + y * C + C / 2;
    const sand = (x, y) => `<rect x="${X0 + x * C + 2}" y="${Y0 + y * C + 2}" width="${C - 4}" height="${C - 4}" rx="8" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1.2"/>`;
    const pond = (x, y) => `<rect x="${X0 + x * C + 2}" y="${Y0 + y * C + 2}" width="${C - 4}" height="${C - 4}" rx="9" fill="url(#bwPond)"/><path d="M${X0 + x * C + 8} ${Y0 + y * C + 17}q4 -3 8 0t8 0" stroke="#BDEBFF" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    const rock = (x, y) => `<g transform="translate(${cx(x)} ${cy(y) + 12}) scale(.62)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="2.4"/></g>`;
    const ring = (x, y, c, t) => `<circle ${tA(t)} cx="${cx(x)}" cy="${cy(y)}" r="16" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4"/>`;
    const items = [[L('Un objectiu', 'Un objetivo'), '#EF5A5A'], [L('Obstacles', 'Obstáculos'), '#737B90'], [L('Al punt', 'En su punto'), '#F2B21B'], [L('Té solució', 'Tiene solución'), '#3CC47C']];
    return tSvg(200, `<rect x="6" y="32" width="144" height="144" rx="14" fill="url(#bwGrass)" stroke="#6DB64A" stroke-width="2"/>
      ${[[2, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 0]].map(([x, y]) => sand(x, y)).join('')}${pond(3, 1)}${pond(3, 2)}${rock(1, 0)}${rock(0, 3)}${rock(3, 3)}
      <g transform="translate(${cx(2)} ${cy(1)}) scale(.75)"><path d="M0 -16L4.8 -6L16 -4.8L7.6 2.8L10 14L0 8.4L-10 14L-7.6 2.8L-16 -4.8L-4.8 -6Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/></g>
      <g transform="translate(${cx(3) - 4} ${cy(0) + 13})"><rect x="0" y="-28" width="3" height="28" rx="1.5" fill="#5B4636"/><path d="M3 -27q8 -3 16 2q-6 4 1 9q-9 -2 -17 1z" fill="#EF5A5A" stroke="#A9302A" stroke-width="1.4" stroke-linejoin="round"/></g>
      ${tBitMini(cx(0), cy(2) + 14, 1, .42)}
      ${ring(3, 0, '#EF5A5A', .5)}${ring(2, 1, '#EF5A5A', .6)}${ring(1, 0, '#737B90', 1.4)}${ring(3, 1, '#737B90', 1.5)}${ring(3, 2, '#737B90', 1.6)}${ring(0, 2, '#F2B21B', 2.3)}
      <path ${tA(3.2, 'ta-draw')} pathLength="1" d="M${cx(0)} ${cy(2)}H${cx(2)}V${cy(0)}H${cx(3) - 8}" fill="none" stroke="#1FA463" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
      <text x="160" y="22" class="tat b">${L('Un bon repte té…', 'Un buen reto tiene…')}</text>
      ${items.map(([t, c], i) => { const y = 36 + i * 40, tt = .5 + i * .9;
        return `<g ${tA(tt, 'ta-in')}><rect x="160" y="${y}" width="154" height="32" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="178" cy="${y + 16}" r="11" fill="${c}"/>
          <text x="196" y="${y + 21}" class="tat s">${t}</text></g><path ${tA(tt + .35, 'ta-draw')} pathLength="1" d="M172.5 ${y + 16}l4 4l7 -8" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`; }).join('')}`);
  },
  // massa fàcil, al punt o impossible: l'agulla del mesurador es mou i s'atura al mig
  u8level() {
    const cx = 160, cy = 126, R = 88, P = a => `${(cx + R * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(cy - R * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
    const arc = (a0, a1, c) => `<path d="M${P(a0)} A${R} ${R} 0 0 1 ${P(a1)}" fill="none" stroke="${c}" stroke-width="26"/>`;
    const S = 17, cell = (x, y, k) => `<rect x="${x}" y="${y}" width="${S - 2}" height="${S - 2}" rx="4" fill="${k === 'w' ? '#3FA6E6' : 'url(#bwSand)'}" stroke="${k === 'w' ? '#2A86CF' : '#E2BE76'}" stroke-width="1"/>`;
    const flag = (x, y) => `<g transform="translate(${x} ${y})"><rect x="0" y="-14" width="2" height="14" fill="#5B4636"/><path d="M2 -14l9 3l-9 4z" fill="#EF5A5A"/></g>`;
    const rock = (x, y) => `<g transform="translate(${x} ${y}) scale(.36)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="3"/></g>`;
    const card = (x, body) => `<rect x="${x}" y="158" width="94" height="44" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${body}`;
    return tSvg(208, `${arc(180, 122, '#9DB8FF')}${arc(122, 58, '#3CC47C')}${arc(58, 0, '#EF5A5A')}
      <path d="M${P(180)} A${R} ${R} 0 0 1 ${P(0)}" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="2 10" opacity=".7"/>
      <text x="160" y="22" text-anchor="middle" class="tat b">${L('Al punt!', '¡En su punto!')}</text>
      <text x="60" y="150" text-anchor="middle" class="tat s">${L('Massa fàcil', 'Demasiado fácil')}</text><text x="262" y="150" text-anchor="middle" class="tat s">${L('Impossible', 'Imposible')}</text>
      <g><animateTransform attributeName="transform" type="rotate" values="-74 ${cx} ${cy};72 ${cx} ${cy};-34 ${cx} ${cy};12 ${cx} ${cy};0 ${cx} ${cy};0 ${cx} ${cy}" keyTimes="0;.2;.38;.5;.58;1" dur="5.5s" repeatCount="indefinite"/>
        <path d="M${cx - 5} ${cy} L${cx} ${cy - 70} L${cx + 5} ${cy} Z" fill="#20306A"/></g><circle cx="${cx}" cy="${cy}" r="11" fill="#20306A"/><circle cx="${cx}" cy="${cy}" r="4" fill="#FFC531"/>
      ${card(14, `${cell(32, 172)}${cell(49, 172)}${tBitMini(39.5, 186, 1, .24)}${flag(53, 185)}`)}
      ${card(113, `${cell(122, 165)}${cell(139, 165)}${cell(156, 165)}${cell(156, 182)}${cell(173, 182)}${rock(147, 197)}${tBitMini(129.5, 179, 1, .22)}${flag(177, 196)}`)}
      ${card(212, `${cell(233, 162, 'w')}${cell(250, 162, 'w')}${cell(267, 162, 'w')}${cell(250, 180)}${rock(241, 195)}${rock(276, 195)}${flag(254, 194)}`)}
      <rect ${tA(3.2)} x="111" y="156" width="98" height="48" rx="12" fill="none" stroke="#3CC47C" stroke-width="4"/>
      <g ${tA(3.4)}><circle cx="207" cy="158" r="11" fill="#3CC47C"/><path d="M202 158l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
  },
  // primer l'esbós en paper (es dibuixa el camí amb el llapis) i després a la pantalla
  u8paper() {
    const pc = (x, y) => [37 + 26 * x, 53 + 26 * y], sc = (x, y) => [215 + 22 * x, 53 + 22 * y];
    const grid = [0, 1, 2, 3, 4].map(i => `<path d="M${24 + i * 26} 40V144M24 ${40 + i * 26}H128" stroke="#B9C2DA" stroke-width="1.5"/>`).join('');
    const wave = (x, y) => { const [a, b] = pc(x, y); return `<path d="M${a - 9} ${b - 3}q3 -3 6 0t6 0t6 0M${a - 9} ${b + 4}q3 -3 6 0t6 0t6 0" stroke="#3D8BFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>`; };
    const rk = (x, y) => { const [a, b] = pc(x, y); return `<path d="M${a - 8} ${b + 4}q-2 -11 8 -12q10 1 8 12z" fill="none" stroke="#5A6178" stroke-width="2" stroke-linejoin="round"/>`; };
    const screen = { '0,0': 'w', '2,0': 's', '3,0': 'f', '1,1': 'r', '2,1': 's', '2,2': 's', '3,2': 'r', '0,3': 's', '1,3': 's', '2,3': 's', '3,3': 'w' };
    const scell = (x, y) => { const k = screen[x + ',' + y], [a, b] = sc(x, y);
      if (k === 'w') return `<rect x="${a - 10}" y="${b - 10}" width="20" height="20" rx="5" fill="url(#bwPond)"/>`;
      if (k === 's' || k === 'f') return `<rect x="${a - 10}" y="${b - 10}" width="20" height="20" rx="5" fill="url(#bwSand)" stroke="#E2BE76" stroke-width="1"/>${k === 'f' ? `<rect x="${a - 4}" y="${b - 9}" width="2" height="16" fill="#5B4636"/><path d="M${a - 2} ${b - 9}l9 3l-9 4z" fill="#EF5A5A"/>` : ''}`;
      if (k === 'r') return `<g transform="translate(${a} ${b + 8}) scale(.42)"><path d="M-21 -2Q-24 -24 -6 -31Q12 -36 20 -18Q25 -4 16 -1L-14 0Q-20 0 -21 -2Z" fill="url(#bwRock)" stroke="#5E667A" stroke-width="3"/></g>`;
      return ''; };
    const [bx, by] = pc(0, 3), [fx, fy] = pc(3, 0);
    return tSvg(206, `<g transform="rotate(-4 76 98)"><g ${tA(.1, 'ta-in')}><rect x="12" y="24" width="128" height="148" rx="6" fill="#FFFDF5" stroke="#E6DCC0" stroke-width="2" filter="url(#bwSh)"/>${grid}
        ${wave(0, 0)}${wave(3, 3)}${rk(1, 1)}${rk(3, 2)}<path d="M${fx - 3} ${fy + 8}V${fy - 9}l10 4l-10 4" stroke="#EF5A5A" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
        <path d="M${bx - 8} ${by - 7}L${bx + 8} ${by}L${bx - 8} ${by + 7}Z" fill="none" stroke="#20306A" stroke-width="2.4" stroke-linejoin="round"/>
        <text x="76" y="162" text-anchor="middle" class="tat s">${L('el meu esbós', 'mi boceto')}</text></g>
        <path ${tA(.8, 'ta-draw')} pathLength="1" d="M${bx + 9} ${by}H${pc(2, 3)[0]}V${fy}H${fx - 8}" stroke="#3D7BF4" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(1.5, 'ta-in')}><g transform="translate(${fx - 4} ${fy + 2}) rotate(-35)"><rect x="0" y="-4" width="34" height="8" rx="2" fill="#FFC531" stroke="#B9850E" stroke-width="1.4"/><rect x="34" y="-4" width="7" height="8" rx="2" fill="#FF8FB1"/><path d="M0 -4L-8 0L0 4Z" fill="#F5D7A1" stroke="#B9850E" stroke-width="1.2"/><path d="M-8 0l3 -1.4v2.8z" fill="#20306A"/></g></g></g>
      <g ${tA(2, 'ta-in')}><path d="M150 100h22" stroke="#20306A" stroke-width="5" stroke-linecap="round"/><path d="M168 91l10 9l-10 9" fill="none" stroke="#20306A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.5)}><rect x="186" y="30" width="126" height="112" rx="12" fill="#20306A" filter="url(#bwSh)"/><rect x="194" y="38" width="110" height="96" rx="6" fill="url(#bwGrass)"/>
        ${[0, 1, 2, 3].flatMap(y => [0, 1, 2, 3].map(x => scell(x, y))).join('')}${tBitMini(sc(0, 3)[0], sc(0, 3)[1] + 9, 1, .3)}
        <rect x="241" y="142" width="16" height="12" fill="#2B3F86"/><rect x="222" y="153" width="54" height="7" rx="3.5" fill="#20306A"/></g>
      <g ${tA(3.3)}><circle cx="306" cy="34" r="13" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><path d="M300 34l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="76" y="194" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>1. ${L('En paper', 'En papel')}</text><text x="249" y="184" text-anchor="middle" class="tat s" ${tA(2.7, 'ta-fade')}>2. ${L('A la pantalla', 'En la pantalla')}</text>`);
  },
  // el cicle del programador/a: dissenya → programa → prova → millora → i torna-hi (en Bit fa la volta)
  u8cycle() {
    const cx = 160, cy = 110, R = 80;
    const st = [[L('Dissenya', 'Diseña'), '#20306A', cx, cy - R], [L('Programa', 'Programa'), '#3D7BF4', cx + R, cy], [L('Prova', 'Prueba'), '#1FA463', cx, cy + R], [L('Millora', 'Mejora'), '#F08A24', cx - R, cy]];
    const arrow = a => { const r = a * Math.PI / 180; return `<path d="M-6 -6L6 0L-6 6Z" fill="#9FB2E6" transform="translate(${(cx + R * Math.sin(r)).toFixed(1)} ${(cy - R * Math.cos(r)).toFixed(1)}) rotate(${a})"/>`; };
    return tSvg(220, `<circle class="ta-dash" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#C9D6FB" stroke-width="4" stroke-dasharray="6 6"/>${[45, 135, 225, 315].map(arrow).join('')}
      <g><animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="5.5s" repeatCount="indefinite"/>
        <path d="M${cx - 14} ${cy - 6}a15 15 0 0 1 25 -6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/><path d="M${cx + 13} ${cy - 18}l-1 8l-8 -2" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M${cx + 14} ${cy + 6}a15 15 0 0 1 -25 6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/><path d="M${cx - 13} ${cy + 18}l1 -8l8 2" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx} ${cy + R} A${R} ${R} 0 0 1 ${cx} ${cy - R}"/>${tBitMini(0, 10, 2, .45)}</g>
      ${st.map(([t, c, x, y], i) => `<g ${tA(.2 + i * .7)}><rect x="${x - 58}" y="${y - 17}" width="116" height="34" rx="17" fill="#fff" stroke="${c}" stroke-width="3" filter="url(#bwSh)"/><circle cx="${x - 40}" cy="${y}" r="12" fill="${c}"/>
        <text x="${x - 40}" y="${y + 5}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="${x - 22}" y="${y + 5}" class="tat s">${t}</text></g>`).join('')}`);
  },
  // un programa llarg que es repeteix es converteix en un bucle curt
  u8shrink() {
    const chip = (k, x, y, t, cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="30" height="30" rx="8" fill="#3D7BF4"/><g transform="translate(${x + 5} ${y + 5})" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${BIT_ICO[k].replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg></g></g>`;
    const rep = BIT_ICO.rep.replace(/^<svg[^>]*>|<\/svg>$/g, '');
    return tSvg(214, `<text x="14" y="22" class="tat s">${L('Sense bucle', 'Sin bucle')}</text>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => chip(i % 2 ? 'right' : 'fwd', 14 + i * 37, 30, .2 + i * .15)).join('')}
      ${[0, 1, 2, 3].map(i => `<path ${tA(1.7, 'ta-fade')} d="M${16 + i * 74} 66v6h63v-6" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
      <text x="306" y="92" text-anchor="end" class="tat s" ${tA(1.5, 'ta-fade')}>8 ${L('blocs', 'bloques')}</text>
      <g ${tA(2.2, 'ta-in')}><path d="M160 84v22" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M151 100l9 10l9 -10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(2.6)}><rect x="40" y="120" width="200" height="34" rx="10" fill="#1FA463" filter="url(#bwSh)"/><g transform="translate(47 127)" color="#fff"><svg width="20" height="20" viewBox="0 0 24 24">${rep}</svg></g>
        <text x="74" y="142" class="tat w s">${L('Repeteix 4 vegades', 'Repite 4 veces')}</text><rect x="40" y="148" width="16" height="48" fill="#1FA463"/><rect x="40" y="192" width="120" height="14" rx="7" fill="#1FA463"/></g>
      ${chip('fwd', 64, 157, 2.9, 'ta-pop')}${chip('right', 100, 157, 3.1, 'ta-pop')}
      <g ${tA(3.5)}><path d="M262 150L266.8 160L278 161.2L269.6 168.8L272 180L262 174.4L252 180L254.4 168.8L246 161.2L257.2 160Z" fill="url(#bwStar)" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/>
        <text x="262" y="200" text-anchor="middle" class="tat b">3 ${L('blocs', 'bloques')}</text></g>`);
  },
  // comentaris: un que no ajuda i un d'amable i útil (què t'agrada + com millorar-lo)
  u8feedback() {
    const kid = (x, y, col, happy) => `<g transform="translate(${x} ${y})"><path d="M-17 22q0 -18 17 -18q17 0 17 18z" fill="${col}"/><circle cy="-8" r="15" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/>
      <path d="M-15 -11q15 -22 30 0q-4 -12 -15 -12q-11 0 -15 12z" fill="#6B3F20"/><circle cx="-5" cy="-7" r="2" fill="#2B1A38"/><circle cx="5" cy="-7" r="2" fill="#2B1A38"/>
      ${happy ? '<path d="M-6 0q6 6 12 0" stroke="#2B1A38" stroke-width="2.2" fill="none" stroke-linecap="round"/>' : '<path d="M-5 2h10" stroke="#2B1A38" stroke-width="2.2" stroke-linecap="round"/>'}</g>`;
    return tSvg(206, `<g ${tA(.3, 'ta-in')}>${kid(32, 34, '#2F5BEA', false)}<path d="M64 30l-10 6l10 2z" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2" stroke-linejoin="round"/>
        <rect x="62" y="12" width="200" height="40" rx="16" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2"/><text x="80" y="37" class="tat s">${L('Això està malament.', 'Esto está mal.')}</text></g>
      <g ${tA(1, 'ta-wob')}><circle cx="286" cy="32" r="15" fill="#EF5A5A"/><path d="M280 26l12 12M292 26l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>
      <g ${tA(1.7, 'ta-in')}>${kid(32, 112, '#F08A24', true)}<path d="M64 108l-10 6l10 2z" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2" stroke-linejoin="round"/>
        <rect x="62" y="74" width="250" height="70" rx="18" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/></g>
      <text x="80" y="102" class="tat s" ${tA(2.1, 'ta-fade')}>${L("M'agrada molt el revolt!", '¡Me gusta mucho la curva!')}</text>
      <text x="80" y="126" class="tat s" ${tA(2.6, 'ta-fade')}>${L('I si hi poses una estrella?', '¿Y si pones una estrella?')}</text>
      <g ${tA(3.1)}><circle cx="300" cy="76" r="14" fill="#3CC47C" stroke="#fff" stroke-width="2.5"/><path d="M294 76l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(3.6)}><rect x="8" y="160" width="134" height="32" rx="16" fill="#3CC47C" filter="url(#bwSh)"/><text x="75" y="181" text-anchor="middle" class="tat w s">1 · ${L("Què t'agrada", 'Qué te gusta')}</text></g>
      <g ${tA(4)}><rect x="150" y="160" width="162" height="32" rx="16" fill="#3D7BF4" filter="url(#bwSh)"/><text x="231" y="181" text-anchor="middle" class="tat w s">2 · ${L('Com millorar-lo', 'Cómo mejorarlo')}</text></g>`);
  },
  // el viatge del curs: vuit illes, una per unitat, i en Bit les recorre fins al diploma
  u8journey() {
    const U = [[L('Ordres', 'Órdenes'), '#2F6BFF'], [L('Bucles', 'Bucles'), '#20A464'], [L('Llums', 'Luces'), '#E5489A'], [L('Sensors', 'Sensores'), '#E8A317'], [L('Funcions', 'Funciones'), '#8B5CF6'], [L('Variables', 'Variables'), '#14A3B8'], [L('Fins que', 'Hasta que'), '#F08A24'], [L('Projecte', 'Proyecto'), '#20306A']];
    const pos = [[44, 58], [120, 58], [196, 58], [272, 58], [272, 146], [196, 146], [120, 146], [44, 146]], when = [.1, .56, 1.12, 1.68, 2.72, 3.28, 3.84, 4.4];
    const road = 'M44 58H272C318 58 318 146 272 146H44';
    const isle = ([t, c], i) => { const [x, y] = pos[i];
      return `<ellipse cx="${x}" cy="${y + 7}" rx="31" ry="11" fill="#9A6538"/><ellipse cx="${x}" cy="${y}" rx="31" ry="12" fill="url(#bwGrass)" stroke="#6DB64A" stroke-width="2"/><g transform="translate(${x - 19} ${y + 2})"><path d="M-1.5 0V-8h3V0z" fill="#8A5A33"/><circle cx="-4" cy="-11" r="5.5" fill="url(#bwLeaf)"/><circle cx="4" cy="-12" r="5.5" fill="url(#bwLeaf)"/><circle cy="-17" r="6.5" fill="url(#bwLeaf2)"/></g>
        <rect x="${x - 36}" y="${y + 20}" width="72" height="21" rx="10.5" fill="#fff" fill-opacity=".95"/><text x="${x}" y="${y + 35}" text-anchor="middle" class="tat s">${t}</text>
        <g ${tA(when[i])}><circle cx="${x + 24}" cy="${y - 12}" r="11" fill="${c}" stroke="#fff" stroke-width="2.5"/><text x="${x + 24}" y="${y - 7}" text-anchor="middle" class="tat w s">${i + 1}</text></g>`; };
    return tSvg(200, `<rect x="0" y="0" width="320" height="200" rx="20" fill="url(#bwSea)"/>
      ${[30, 104, 182].map((y, i) => `<path d="M${-10 + i * 24} ${y} ${Array.from({ length: 12 }, () => 'q7 -5 14 0t14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2" stroke-linecap="round" opacity=".5"/>`).join('')}
      <path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="6" stroke-linecap="round" stroke-dasharray="9 8" class="ta-dash"/>
      ${U.map(isle).join('')}
      <g ${tA(4.5)}><g transform="translate(84 112) scale(1.15)"><rect x="-16" y="-12" width="32" height="22" rx="4" fill="#FFF8E6" stroke="#C98A4B" stroke-width="2"/><path d="M-10 -4h20M-10 2h14" stroke="#C9B48A" stroke-width="2" stroke-linecap="round"/><circle cx="11" cy="8" r="6" fill="#EF5A5A"/><path d="M8 13l-2 7l5 -3l5 3l-2 -7" fill="#EF5A5A"/></g></g>
      <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/>${tBitMini(0, 2, 2, .38)}</g>`);
  }
};

/* ---------- Pas «learn»: targetes de teoria ---------- */
if (typeof TSTEP !== 'undefined') TSTEP.learn = function (st) {
  let i = 0, seen = 0;
  const cards = st.cards;
  const draw = (dir = 0) => {
    tDemoStop();
    const c = cards[i];
    typeof roboDemoStop === 'function' && roboDemoStop();
    const media = c.robo && typeof roboDemoHTML === 'function' ? roboDemoHTML(c.robo) : c.media && typeof TMEDIA !== 'undefined' && TMEDIA[c.media.k] ? TMEDIA[c.media.k].html(c.media) : c.demo ? tDemoHTML(c.demo) : c.anim && TANI[c.anim] ? `<div class="tanibox">${TANI[c.anim]()}</div>` : c.w ? (() => { const W = bitWorld(c.w); return `<div class="tart">${bitSVG(W, bitSim(W))}</div>`; })() : '';
    $('#tsb').innerHTML = `<div class="tlearn2 ${dir > 0 ? 'fwd' : dir < 0 ? 'back' : ''}">
      <div class="tldots">${cards.map((_, k) => `<button class="${k === i ? 'on' : k <= seen ? 'seen' : ''}" onclick="TLRN.go(${k})" aria-label="${k + 1}"></button>`).join('')}</div>
      <article class="tlc">${c.k ? `<span class="tlk">${tval(c.k)}</span>` : ''}<h2>${tval(c.t)}</h2>${media}<div class="tlx">${tval(c.x)}</div>
        ${c.tip ? `<div class="tltip"><span>💡</span><div>${tval(c.tip)}</div></div>` : ''}
        ${c.bad ? `<div class="tlmist"><div class="bad"><b>✗</b><span>${tval(c.bad)}</span></div><div class="good"><b>✓</b><span>${tval(c.good)}</span></div></div>` : ''}</article>
      <div class="tlnav"><button class="btn ghost" ${i ? '' : 'disabled'} onclick="TLRN.go(${i - 1})" aria-label="${L('Anterior', 'Anterior')}">‹</button><span>${i + 1} / ${cards.length}</span><button class="btn ghost" ${i < cards.length - 1 ? '' : 'disabled'} onclick="TLRN.go(${i + 1})" aria-label="${L('Següent', 'Siguiente')}">›</button></div></div>`;
    if (c.demo) tDemoStart($('#tsb'), c.demo);
    if (c.robo && typeof roboDemoStart === 'function') roboDemoStart($('#tsb'), c.robo);
    if (c.media && typeof TMEDIA !== 'undefined' && TMEDIA[c.media.k] && TMEDIA[c.media.k].start) TMEDIA[c.media.k].start($('#tsb'), c.media);
    const last = i === cards.length - 1;
    tFoot(last ? L('Ho he entès!', '¡Lo he entendido!') : L('Següent', 'Siguiente'), last ? () => { tDemoStop(); typeof roboDemoStop === 'function' && roboDemoStop(); addXPsafe(3); tNext(); } : () => TLRN.go(i + 1));
    const b = document.querySelector('.tsbody'); if (b) b.scrollTop = 0;
  };
  window.TLRN = { go(k) { if (k < 0 || k >= cards.length) return; const d = k - i; i = k; seen = Math.max(seen, k); SFX.tap && SFX.tap(); draw(d); } };
  draw();
  // lliscar amb el dit
  const el = $('#tsb'); let x0 = null;
  el.ontouchstart = e => { x0 = e.touches[0].clientX; };
  el.ontouchend = e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 60 && !e.target.closest('.tdemo')) TLRN.go(i + (dx < 0 ? 1 : -1)); };
};

/* ---------- Escenes il·lustrades per a les històries ---------- */
const TSCENE3 = { illa: 1, poble: 1, taller: 1, moll: 1, lab: 1 };
function tScene(kind, who, mood) {
  const sky = kind === 'taller' ? ['#FFE9C7', '#FFD0A1'] : ['#9FDBFF', '#D9F2FF'];
  const clouds = kind === 'taller' ? '' : [[60, 40, 1], [250, 28, .8], [170, 60, .6]].map(([x, y, s], i) => `<g class="tcloud" style="--d:${-i * 7}s"><g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="26" ry="11" fill="#fff"/><ellipse cx="-14" cy="-6" rx="14" ry="11" fill="#fff"/><ellipse cx="10" cy="-9" rx="16" ry="13" fill="#fff"/></g></g>`).join('');
  const sun = kind === 'taller' ? '' : `<g transform="translate(286 40)"><g class="tsunr">${[...Array(10).keys()].map(i => `<rect x="-2" y="-34" width="4" height="10" rx="2" fill="#FFC531" transform="rotate(${i * 36})"/>`).join('')}</g><circle r="18" fill="#FFD54A"/><circle r="18" fill="none" stroke="#F5A623" stroke-width="2"/></g>`;
  let land = '';
  if (kind === 'taller') land = `<rect x="0" y="120" width="320" height="80" fill="#C98A4B"/><rect x="0" y="120" width="320" height="8" fill="#A86A33"/>
      <rect x="18" y="20" width="110" height="70" rx="8" fill="#fff" stroke="#E2BE76" stroke-width="3"/>${[0, 1, 2].map(k => `<rect x="30" y="${32 + k * 18}" width="${[60, 80, 50][k]}" height="10" rx="5" fill="${['#3D7BF4', '#EF5A5A', '#3D7BF4'][k]}"/>`).join('')}
      <g class="tbugwalk"><ellipse cx="0" cy="0" rx="9" ry="7" fill="#3B3B3B"/><circle cx="-8" cy="-3" r="4" fill="#3B3B3B"/><path d="M-3 -6l-2 -6M2 -6l2 -6" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/></g>`;
  else land = `<path d="M0 150 Q80 140 160 146 T320 146 V200 H0Z" fill="#4FB4E8"/><path class="twv" d="M-40 158 ${Array.from({ length: 16 }, () => 'q7 -5 14 0t14 0').join(' ')}" fill="none" stroke="#C9F1FF" stroke-width="2.5" opacity=".7"/>
      <path d="M40 152 Q160 92 290 152 Z" fill="#8FD16A"/><path d="M40 152 Q160 110 290 152 Z" fill="#7CC456"/><path d="M52 152 Q160 160 280 152 L270 170 Q160 178 64 170Z" fill="#9A6538"/>
      ${kind === 'moll' ? `<rect x="226" y="134" width="70" height="8" fill="#B57536"/><rect x="232" y="142" width="5" height="20" fill="#8A5A33"/><rect x="286" y="142" width="5" height="20" fill="#8A5A33"/><g transform="translate(250 132)"><rect x="-10" y="-16" width="20" height="16" rx="2" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/></g><g transform="translate(274 132)"><rect x="-9" y="-14" width="18" height="14" rx="2" fill="url(#bwWood)" stroke="#7A4A1E" stroke-width="2"/></g>`
        : `<g transform="translate(250 136)"><path d="M0 0V-34" stroke="#8A5A33" stroke-width="5" stroke-linecap="round"/><g class="tpalm"><path d="M0 -34q-20 -4 -28 8M0 -34q20 -6 28 6M0 -34q-8 -16 -24 -14M0 -34q10 -18 26 -12" stroke="#3E8E3A" stroke-width="7" fill="none" stroke-linecap="round"/></g></g>`}
      ${kind === 'poble' ? [70, 108].map((x, k) => `<g transform="translate(${x} 138)"><rect x="-13" y="-20" width="26" height="20" fill="url(#bwWall)" stroke="#8E6A3A" stroke-width="1.5"/><path d="M-17 -18L0 -32L17 -18Z" fill="url(#bwRoof)" stroke="#8E2A22" stroke-width="1.5"/><rect x="-3" y="-11" width="6" height="11" fill="#B07A3E"/></g>`).join('') : ''}`;
  const numi = who !== 'bit' ? `<svg x="${who === 'both' ? 40 : 98}" y="56" width="100" height="100" viewBox="0 0 120 120">${charSVG('numi', mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  const bit = who === 'bit' || who === 'both' ? `<svg x="${who === 'both' ? 170 : 116}" y="${who === 'both' ? 62 : 50}" width="${who === 'both' ? 78 : 92}" height="${who === 'both' ? 96 : 112}" viewBox="-64 -78 128 156">${bitChar(mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  // fons en 3D (renderitzat) per a les escenes que en tenen; en Bit i en Numi a sobre, amb la cara que toca
  if (TSCENE3[kind]) return `<div class="tscene t3 k-${kind}"><img src="img/tech/scenes/${kind}.webp" alt="" width="1600" height="900" decoding="async"><svg class="tsact" viewBox="0 0 320 180" aria-hidden="true">${bitDefs()}<g class="tactors">${numi}${bit}</g></svg></div>`;
  return `<div class="tscene k-${kind}"><svg viewBox="0 0 320 180" aria-hidden="true">${bitDefs()}<defs><linearGradient id="tsky-${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#tsky-${kind})"/>${sun}${clouds}${land}<g class="tactors">${numi}${bit}</g></svg></div>`;
}
