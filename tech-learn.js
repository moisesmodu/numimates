/* ===== Numi Tech · teoria animada i escenes =====
   · Pas «learn» (fase Descobreix): targetes com les de Numi Mates (learn.js), cadascuna amb una animació del concepte
     (TANI) o una demostració en directe d'en Bit executant un programa (el bloc que s'executa s'il·lumina).
   · tScene(): escenes il·lustrades per a les històries (cel, mar, l'illa, en Numi i en Bit).
   Totes les animacions són CSS (l'estat de repòs és el final: amb «reduir moviment» es veu el resultat). */

/* ---------- Demostració en directe: un mini món que executa un programa en bucle ---------- */
let TDEMO = null;
function tDemoStop() { if (TDEMO) { clearTimeout(TDEMO.t); TDEMO = null; } }
function tDemoHTML(d) {
  const W = bitWorld(d.w), S = bitSim(W);
  return `<div class="tdemo"><div class="tdw">${bitSVG(W, S)}</div><div class="tdprog">${d.prog.map((b, i) => `<span class="tdb c-${BIT_CAT[b.k]}" data-i="${i}"><span class="tbi">${BIT_ICO[b.k]}</span><span>${bitLabel(b)}</span></span>`).join('')}</div></div>`;
}
function tDemoStart(el, d) {
  tDemoStop();
  const box = el.querySelector('.tdemo'); if (!box) return;
  const me = TDEMO = { t: 0 };
  const flat = d.prog;   // les demostracions són seqüències planes (els bucles es mostren amb TANI)
  const reset = () => { const W = bitWorld(d.w), S = bitSim(W); me.W = W; me.S = S; me.i = 0; me.prev = null; box.querySelector('.tdw').innerHTML = bitSVG(W, S); box.querySelectorAll('.tdb').forEach(b => b.classList.remove('now', 'did')); };
  const step = () => {
    if (TDEMO !== me || !document.body.contains(box)) return;
    if (me.i >= flat.length || me.S.crash) { me.t = setTimeout(() => { if (TDEMO !== me) return; reset(); me.t = setTimeout(step, 900); }, 1800); return; }
    const b = flat[me.i], chips = box.querySelectorAll('.tdb');
    chips.forEach((c, k) => { c.classList.toggle('now', k === me.i); c.classList.toggle('did', k < me.i); });
    bitDo(me.W, me.S, b);
    const svg = box.querySelector('.bitw'); bitPaintState(svg, me.W, me.S, me.prev); me.prev = { x: me.S.x, y: me.S.y, d: me.S.d, carry: me.S.carry, led: me.S.led };
    if (me.S.crash) { const sp = svg.querySelector('.bsp'); sp && sp.classList.add('hit'); }
    else if (me.i === flat.length - 1 && !bitMiss(me.W, me.S)) setTimeout(() => { const sp = svg.querySelector('.bsp'); if (sp) { sp.classList.remove('walk', 'turn'); void sp.getBoundingClientRect(); sp.classList.add('yay'); } }, 420);
    me.i++; me.t = setTimeout(step, d.speed || 850);
  };
  reset(); me.t = setTimeout(step, 900);
}

/* ---------- Animacions de concepte (SVG + CSS, en bucle) ---------- */
const tA = (t, cls = 'ta-pop') => `class="ta ${cls}" style="--t:${t}s"`;
const tSvg = (h, body, cls = '') => `<svg class="tani ${cls}" viewBox="0 0 320 ${h}" aria-hidden="true">${typeof bitDefs === 'function' ? bitDefs() : ''}${body}</svg>`;
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
  }
};

/* ---------- Pas «learn»: targetes de teoria ---------- */
if (typeof TSTEP !== 'undefined') TSTEP.learn = function (st) {
  let i = 0, seen = 0;
  const cards = st.cards;
  const draw = (dir = 0) => {
    tDemoStop();
    const c = cards[i];
    const media = c.demo ? tDemoHTML(c.demo) : c.anim && TANI[c.anim] ? `<div class="tanibox">${TANI[c.anim]()}</div>` : c.w ? (() => { const W = bitWorld(c.w); return `<div class="tart">${bitSVG(W, bitSim(W))}</div>`; })() : '';
    $('#tsb').innerHTML = `<div class="tlearn2 ${dir > 0 ? 'fwd' : dir < 0 ? 'back' : ''}">
      <div class="tldots">${cards.map((_, k) => `<button class="${k === i ? 'on' : k <= seen ? 'seen' : ''}" onclick="TLRN.go(${k})" aria-label="${k + 1}"></button>`).join('')}</div>
      <article class="tlc">${c.k ? `<span class="tlk">${tval(c.k)}</span>` : ''}<h2>${tval(c.t)}</h2>${media}<div class="tlx">${tval(c.x)}</div>
        ${c.tip ? `<div class="tltip"><span>💡</span><div>${tval(c.tip)}</div></div>` : ''}
        ${c.bad ? `<div class="tlmist"><div class="bad"><b>✗</b><span>${tval(c.bad)}</span></div><div class="good"><b>✓</b><span>${tval(c.good)}</span></div></div>` : ''}</article>
      <div class="tlnav"><button class="btn ghost" ${i ? '' : 'disabled'} onclick="TLRN.go(${i - 1})" aria-label="${L('Anterior', 'Anterior')}">‹</button><span>${i + 1} / ${cards.length}</span><button class="btn ghost" ${i < cards.length - 1 ? '' : 'disabled'} onclick="TLRN.go(${i + 1})" aria-label="${L('Següent', 'Siguiente')}">›</button></div></div>`;
    if (c.demo) tDemoStart($('#tsb'), c.demo);
    const last = i === cards.length - 1;
    tFoot(last ? L('Ho he entès!', '¡Lo he entendido!') : L('Següent', 'Siguiente'), last ? () => { tDemoStop(); addXPsafe(3); tNext(); } : () => TLRN.go(i + 1));
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
  return `<div class="tscene k-${kind}"><svg viewBox="0 0 320 180" aria-hidden="true">${bitDefs()}<defs><linearGradient id="tsky-${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#tsky-${kind})"/>${sun}${clouds}${land}<g class="tactors">${numi}${bit}</g></svg></div>`;
}
