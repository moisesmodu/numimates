/* ===== Currículum (Decret 175/2022): espai, pensament computacional i atzar (CA/ES) ===== */
const ARW = { U: '↑', D: '↓', Lf: '←', R: '→' };
const MOV = { U: [-1, 0], D: [1, 0], Lf: [0, -1], R: [0, 1] };
const COLL = ['A', 'B', 'C', 'D', 'E', 'F'];
function gridHTML(n, cells, coords, path) {
  let h = `<div class="cgridw"><div class="cg" style="grid-template-columns:${coords ? '26px ' : ''}repeat(${n},1fr)">`;
  if (coords) { h += '<span></span>'; for (let c = 0; c < n; c++) h += `<span class="cgl">${COLL[c]}</span>`; }
  for (let r = 0; r < n; r++) {
    if (coords) h += `<span class="cgl">${r + 1}</span>`;
    for (let c = 0; c < n; c++) { const k = r + ',' + c; h += `<span class="cgc ${path && path.has(k) ? 'trail' : ''}" style="animation-delay:${(r * n + c) * 18}ms">${cells[k] || ''}</span>`; }
  }
  return h + '</div></div>';
}
const cmdHTML = (cmds, miss) => `<div class="cmds">${cmds.map((c, i) => i === miss ? `<span class="cmd q">?</span>` : `<span class="cmd" style="animation-delay:${i * 90}ms">${ARW[c]}</span>`).join('')}</div>`;
function walk(n, start, len) {
  for (let t = 0; t < 200; t++) {
    let [r, c] = start; const cmds = [], seen = new Set([r + ',' + c]);
    for (let i = 0; i < len; i++) {
      const opts = Object.keys(MOV).filter(k => { const [dr, dc] = MOV[k], nr = r + dr, nc = c + dc; return nr >= 0 && nr < n && nc >= 0 && nc < n && !seen.has(nr + ',' + nc); });
      if (!opts.length) break;
      const k = pick(opts); r += MOV[k][0]; c += MOV[k][1]; seen.add(r + ',' + c); cmds.push(k);
    }
    if (cmds.length === len && (r !== start[0] || c !== start[1])) return { cmds, end: [r, c], seen };
  }
  return null;
}
const SOLIDS = { cub: ['cub', 'cubo', 6, 8, 12], esfera: ['esfera', 'esfera', 0, 0, 0], cilindre: ['cilindre', 'cilindro', 0, 0, 0], con: ['con', 'cono', 0, 1, 0], piramide: ['piràmide', 'pirámide', 5, 5, 8], prisma: ['prisma', 'prisma', 5, 6, 9] };
function solidSVG(k) {
  // Cossos amb volum: cada cara amb el seu degradat, les arestes amagades amb traç discontinu (ajuden a comptar cares,
  // vèrtexs i arestes) i una ombra al terra. Els degradats porten id únic: hi pot haver més d'un cos alhora.
  const id = exvId('so'), G = (n, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}${n}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`, U = n => `url(#${id}${n})`;
  const hid = (d, col) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" stroke-opacity=".6"/>`;
  const shadow = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * .16}" fill="rgba(43,26,56,.14)"/>`;
  const S = {
    cub: () => {
      const e = '#15628F';
      return `<defs>${G('f', '#6CC6F5', '#1E86BE')}${G('t', '#CDEFFF', '#8FD6FA', 1, 1)}${G('r', '#1F84BD', '#155F8C')}</defs>${shadow(80, 110, 50)}`
        + `<g stroke="${e}" stroke-width="2.8" stroke-linejoin="round"><polygon points="32,46 92,46 92,106 32,106" fill="${U('f')}"/><polygon points="32,46 56,26 116,26 92,46" fill="${U('t')}"/><polygon points="92,46 116,26 116,86 92,106" fill="${U('r')}"/></g>`
        + hid('M56 86 L32 106 M56 86 H116 M56 86 V26', e) + `<polygon points="37,51 70,51 37,84" fill="#fff" opacity=".22"/>`;
    },
    esfera: () => `<defs><radialGradient id="${id}s" cx=".36" cy=".3" r=".75"><stop offset="0" stop-color="#F1DFFF"/><stop offset=".45" stop-color="#B07BE0"/><stop offset="1" stop-color="#5E2585"/></radialGradient></defs>${shadow(75, 112, 40)}`
      + `<circle cx="75" cy="62" r="46" fill="url(#${id}s)" stroke="#4E1D68" stroke-width="2.8"/>`
      + `<path d="M29 62 A46 13 0 0 0 121 62" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.2"/>${hid('M29 62 A46 13 0 0 1 121 62', '#fff')}`
      + `<ellipse cx="58" cy="40" rx="13" ry="8" transform="rotate(-30 58 40)" fill="#fff" opacity=".55"/>`,
    cilindre: () => {
      const e = '#1B7A40';
      return `<defs><linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2E9E58"/><stop offset=".35" stop-color="#8BE8AE"/><stop offset="1" stop-color="#1E7A43"/></linearGradient>${G('t', '#C9F5D8', '#8BE3AA')}</defs>${shadow(75, 112, 44)}`
        + `<path d="M39 30 V100 A36 11 0 0 0 111 100 V30 Z" fill="${U('b')}" stroke="${e}" stroke-width="2.8" stroke-linejoin="round"/>`
        + hid('M39 100 A36 11 0 0 1 111 100', e)
        + `<ellipse cx="75" cy="30" rx="36" ry="11" fill="${U('t')}" stroke="${e}" stroke-width="2.8"/><rect x="49" y="44" width="7" height="50" rx="3.5" fill="#fff" opacity=".3"/>`;
    },
    con: () => {
      const e = '#B65A14';
      return `<defs><linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F28A2E"/><stop offset=".38" stop-color="#FFC98A"/><stop offset="1" stop-color="#D9661A"/></linearGradient></defs>${shadow(75, 112, 44)}`
        + `<path d="M37 98 L75 14 L113 98 A38 12 0 0 1 37 98 Z" fill="${U('b')}" stroke="${e}" stroke-width="2.8" stroke-linejoin="round"/>`
        + hid('M37 98 A38 12 0 0 1 113 98', e) + `<circle cx="75" cy="14" r="3.5" fill="${e}"/>`;
    },
    piramide: () => {
      const e = '#A87400';
      return `<defs>${G('f', '#FFE48A', '#F5B400')}${G('r', '#E8A400', '#B98300')}</defs>${shadow(78, 112, 52)}`
        + `<g stroke="${e}" stroke-width="2.8" stroke-linejoin="round"><polygon points="28,96 88,108 74,14" fill="${U('f')}"/><polygon points="88,108 124,86 74,14" fill="${U('r')}"/></g>`
        + hid('M28 96 L62 76 L124 86 M62 76 L74 14', e) + `<polygon points="36,94 70,24 56,98" fill="#fff" opacity=".2"/>`;
    },
    prisma: () => {
      const e = '#A3295A';
      return `<defs>${G('f', '#FFC2D8', '#FF7AA8')}${G('r', '#F05C95', '#B8336B', 1, 1)}</defs>${shadow(75, 110, 54)}`
        + `<g stroke="${e}" stroke-width="2.8" stroke-linejoin="round"><polygon points="78,104 126,78 98,26 50,52" fill="${U('r')}"/><polygon points="22,104 78,104 50,52" fill="${U('f')}"/></g>`
        + hid('M22 104 L70 78 L126 78 M70 78 L98 26', e) + `<polygon points="31,99 50,62 56,99" fill="#fff" opacity=".25"/>`;
    },
  };
  return `<svg viewBox="0 0 150 125" class="vsvg wide solid">${S[k]()}</svg>`;
}
const BALL = { r: '🔴', b: '🔵', g: '🟢', y: '🟡' };
const BN = { r: ['vermella', 'roja'], b: ['blava', 'azul'], g: ['verda', 'verde'], y: ['groga', 'amarilla'] };
const tally = n => `<span class="tally">${Array(Math.floor(n / 5)).fill('<i class="t5">||||</i>').join('')}${'|'.repeat(n % 5)}</span>`;

Object.assign(EX, {
  /* Orientació (sentit espacial) */
  'e.dir': L_ => {
    const set = shuffle(['🍎', '🐱', '⚽', '🌸', '🚗', '🎈', '🐶', '⭐']).slice(0, L_ <= 1 ? 4 : 5);
    if (L_ <= 2 || Math.random() < .5) {
      const i = ri(1, set.length - 2), right = Math.random() < .5, ans = set[right ? i + 1 : i - 1];
      return mc(L(`Què hi ha just ${right ? 'a la <b>dreta</b>' : "a l'<b>esquerra</b>"} de ${set[i]}?`, `¿Qué hay justo a la <b>${right ? 'derecha' : 'izquierda'}</b> de ${set[i]}?`), ans, set.filter(x => x !== ans && x !== set[i]), { big: true, vis: `<div class="seq em row">${set.map(x => `<span>${x}</span>`).join('')}</div>`, ex: L(`${right ? 'A la dreta' : "A l'esquerra"} de ${set[i]} hi ha ${ans}. Recorda: la mà dreta és la que fas servir per escriure (si ets dretà/ana)!`, `A la ${right ? 'derecha' : 'izquierda'} de ${set[i]} está ${ans}.`) });
    }
    const cells = {}, pos = shuffle([...Array(9).keys()]).slice(0, 5); pos.forEach((p, i) => cells[Math.floor(p / 3) + ',' + p % 3] = set[i]);
    const cands = pos.filter(p => Math.floor(p / 3) > 0 && cells[(Math.floor(p / 3) - 1) + ',' + p % 3]);
    if (!cands.length) return EX['e.dir'](1);
    const p = pick(cands), r = Math.floor(p / 3), c = p % 3, below = cells[r + ',' + c], above = cells[(r - 1) + ',' + c];
    return mc(L(`Què hi ha just <b>a sobre</b> de ${below}?`, `¿Qué hay justo <b>encima</b> de ${below}?`), above, Object.values(cells).filter(x => x !== above && x !== below), { big: true, vis: gridHTML(3, cells), ex: L(`Just a sobre de ${below} hi ha ${above}.`, `Justo encima de ${below} está ${above}.`) });
  },
  'e.coord': L_ => {
    const n = L_ <= 2 ? 4 : 5, items = shuffle(['🍎', '🐱', '⚽', '🌸', '🚗', '🎈', '🐶', '⭐', '🏰', '🐙']).slice(0, L_ <= 2 ? 4 : 6), cells = {}, where = {};
    const pos = shuffle([...Array(n * n).keys()]).slice(0, items.length);
    items.forEach((it, i) => { const r = Math.floor(pos[i] / n), c = pos[i] % n; cells[r + ',' + c] = it; where[it] = COLL[c] + (r + 1); });
    const it = pick(items);
    if (Math.random() < .5) return mc(L(`A quina casella és ${it}?`, `¿En qué casilla está ${it}?`), where[it], items.filter(x => x !== it).map(x => where[x]).concat([where[it][0] + (+where[it].slice(1) % n + 1)]), { big: true, vis: gridHTML(n, cells, true), ex: L(`Primer la lletra de la columna i després el número de la fila: ${it} és a ${where[it]}.`, `Primero la letra de la columna y después el número de la fila: ${it} está en ${where[it]}.`) });
    return mc(L(`Què hi ha a la casella <b>${where[it]}</b>?`, `¿Qué hay en la casilla <b>${where[it]}</b>?`), it, items.filter(x => x !== it), { big: true, vis: gridHTML(n, cells, true), ex: L(`Busca la columna ${where[it][0]} i baixa fins a la fila ${where[it].slice(1)}: hi ha ${it}.`, `Busca la columna ${where[it][0]} y baja hasta la fila ${where[it].slice(1)}: está ${it}.`) });
  },
  'e.sym': L_ => {
    if (L_ >= 3 && Math.random() < .5) {
      const f = pick([['quadrat', 'cuadrado', 4, 'quadrat'], ['rectangle', 'rectángulo', 2, 'rectangle'], ['triangle equilàter', 'triángulo equilátero', 3, 'triangle'], ['hexàgon regular', 'hexágono regular', 6, 'hexàgon'], ['pentàgon regular', 'pentágono regular', 5, 'pentàgon']]);
      const sides = { quadrat: 4, rectangle: 4, triangle: 3, 'hexàgon': 6, 'pentàgon': 5 }[f[3]];
      return inp(L(`Quants <b>eixos de simetria</b> té un ${f[0]}?`, `¿Cuántos <b>ejes de simetría</b> tiene un ${f[1]}?`), f[2], { vis: shapeSVG(f[3], sides, pick(COLS)), ex: L(`Un ${f[0]} té ${f[2]} eixos de simetria: són les línies que el parteixen en dues meitats iguals, com un mirall.`, `Un ${f[1]} tiene ${f[2]} ejes de simetría: son las líneas que lo parten en dos mitades iguales, como un espejo.`) });
    }
    const yes = pick(['A', 'H', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y']), no = shuffle(['F', 'G', 'J', 'L', 'N', 'P', 'R', 'S', 'Z']).slice(0, 3);
    return mc(L('Quina lletra té un <b>eix de simetria</b> vertical (com un mirall al mig)?', '¿Qué letra tiene un <b>eje de simetría</b> vertical (como un espejo en el medio)?'), yes, no, { big: true, vis: `<div class="mirror">🪞</div>`, ex: L(`Si dobleguem la ${yes} per la meitat, les dues parts coincideixen. Amb ${no.join(', ')} no passa.`, `Si doblamos la ${yes} por la mitad, las dos partes coinciden. Con ${no.join(', ')} no pasa.`) });
  },
  'e.solid': L_ => {
    const k = pick(Object.keys(SOLIDS)), S = SOLIDS[k], nm = L(S[0], S[1]);
    if (L_ <= 2 || Math.random() < .4) return mc(L('Com es diu aquest cos geomètric?', '¿Cómo se llama este cuerpo geométrico?'), nm, shuffle(Object.keys(SOLIDS).filter(x => x !== k)).map(x => L(SOLIDS[x][0], SOLIDS[x][1])), { vis: solidSVG(k), ex: L(`És ${k === 'esfera' || k === 'piramide' ? 'una' : 'un'} ${nm}.`, `Es ${k === 'esfera' || k === 'piramide' ? 'una' : 'un'} ${nm}.`) });
    if (L_ <= 3) { const q = pick([['rod', L('Quin d\'aquests cossos pot <b>rodolar</b> i no té cap vèrtex ni cap cara plana?', '¿Cuál de estos cuerpos puede <b>rodar</b> y no tiene ningún vértice ni cara plana?'), 'esfera'], ['api', L('Quin cos té <b>6 cares quadrades</b> iguals?', '¿Qué cuerpo tiene <b>6 caras cuadradas</b> iguales?'), 'cub'], ['punta', L('Quin cos té una base rodona i una <b>punta</b>?', '¿Qué cuerpo tiene una base redonda y una <b>punta</b>?'), 'con']]);
      const a = L(SOLIDS[q[2]][0], SOLIDS[q[2]][1]); return mc(q[1], a, shuffle(Object.keys(SOLIDS).filter(x => x !== q[2])).map(x => L(SOLIDS[x][0], SOLIDS[x][1])), { ex: L(`La resposta és: ${a}.`, `La respuesta es: ${a}.`) }); }
    const kk = pick(['cub', 'piramide', 'prisma']), T = SOLIDS[kk], fem = kk === 'piramide';
    const w = pick([[2, L('Quantes <b>cares</b>', '¿Cuántas <b>caras</b>')], [3, L('Quants <b>vèrtexs</b>', '¿Cuántos <b>vértices</b>')], [4, L('Quantes <b>arestes</b>', '¿Cuántas <b>aristas</b>')]]);
    return inp(L(`${w[1]} té ${fem ? 'aquesta' : 'aquest'} ${T[0]}?`, `${w[1]} tiene ${fem ? 'esta' : 'este'} ${T[1]}?`), T[w[0]], { vis: solidSVG(kk), ex: L(`${cap(T[0])}: ${T[2]} cares, ${T[3]} vèrtexs i ${T[4]} arestes.`, `${cap(T[1])}: ${T[2]} caras, ${T[3]} vértices y ${T[4]} aristas.`) });
  },

  /* Pensament computacional (sentit algebraic) */
  'pc.robot': L_ => {
    const n = L_ <= 2 ? 4 : 5, len = Math.min(2 + L_, 7), start = [ri(0, n - 1), ri(0, n - 1)], w = walk(n, start, len);
    if (!w) return EX['pc.robot'](L_);
    const cells = { [start[0] + ',' + start[1]]: '🤖' };
    if (L_ >= 3 && Math.random() < .5) {
      cells[w.end[0] + ',' + w.end[1]] = '🏁';
      const miss = ri(0, w.cmds.length - 1), ans = ARW[w.cmds[miss]];
      return mc(L('Quina ordre falta perquè el robot arribi a 🏁?', '¿Qué orden falta para que el robot llegue a 🏁?'), ans, Object.values(ARW).filter(x => x !== ans), { big: true, vis: `<div class="stack">${gridHTML(n, cells)}${cmdHTML(w.cmds, miss)}</div>`, ex: L(`L'ordre que falta és ${ans}. Segueix el camí casella a casella: ${w.cmds.map(c => ARW[c]).join(' ')}.`, `La orden que falta es ${ans}. Sigue el camino casilla a casilla: ${w.cmds.map(c => ARW[c]).join(' ')}.`) });
    }
    const marks = shuffle(['🍎', '⭐', '🎈', '🍪']), endK = w.end[0] + ',' + w.end[1], others = [];
    for (const [dr, dc] of shuffle([[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]])) { const r = w.end[0] + dr, c = w.end[1] + dc, k = r + ',' + c; if (r >= 0 && r < n && c >= 0 && c < n && !cells[k] && k !== endK && others.length < 3) others.push(k); }
    cells[endK] = marks[0]; others.forEach((k, i) => cells[k] = marks[i + 1]);
    return mc(L("El robot segueix aquestes ordres. On arriba?", 'El robot sigue estas órdenes. ¿Dónde llega?'), marks[0], marks.slice(1, others.length + 1), { big: true, vis: `<div class="stack">${gridHTML(n, cells)}${cmdHTML(w.cmds)}</div>`, ex: L(`Fes-ho pas a pas amb el dit: ${w.cmds.map(c => ARW[c]).join(' ')} → arriba a ${marks[0]}. Així pensen els programadors!`, `Hazlo paso a paso con el dedo: ${w.cmds.map(c => ARW[c]).join(' ')} → llega a ${marks[0]}. ¡Así piensan los programadores!`) });
  },
  'pc.loop': L_ => {
    const s = ri(1, 9), k = ri(2, L_ <= 2 ? 4 : 5);
    if (L_ <= 2) { const a = ri(2, 5); return loopEx(s, k, [`n = n + ${a}`], s + a * k); }
    if (L_ === 3) { const a = ri(3, 9); if (Math.random() < .5) return loopEx(s, k, [`n = n + ${a}`], s + a * k); const st = a * k + ri(1, 9); return loopEx(st, k, [`n = n − ${a}`], st - a * k); }
    if (L_ === 4) { const kk = Math.min(k, 4); return loopEx(s, kk, ['n = n × 2'], s * 2 ** kk); }
    const a = ri(1, 4); let r = s; for (let i = 0; i < 3; i++) r = r * 2 + a;
    return loopEx(s, 3, ['n = n × 2', `n = n + ${a}`], r);
  },
  /* Atzar i dades (sentit estocàstic) */
  'at.prob': L_ => {
    if (L_ <= 2) {
      const cols = shuffle(['r', 'b', 'g', 'y']), inBag = cols.slice(0, ri(1, 2)), bag = []; inBag.forEach(c => { for (let i = 0; i < ri(2, 4); i++) bag.push(c); });
      const t = Math.random() < .35 && inBag.length === 1 ? inBag[0] : Math.random() < .5 ? pick(inBag) : cols[3];
      const cnt = bag.filter(x => x === t).length, ans = cnt === bag.length ? L('Segur', 'Seguro') : cnt === 0 ? L('Impossible', 'Imposible') : L('Possible', 'Posible');
      return mc(L(`Treus una bola de la bossa sense mirar. Que surti una bola <b>${BN[t][0]}</b> ${BALL[t]} és…`, `Sacas una bola de la bolsa sin mirar. Que salga una bola <b>${BN[t][1]}</b> ${BALL[t]} es…`), ans, [], { fixed: [L('Segur', 'Seguro'), L('Possible', 'Posible'), L('Impossible', 'Imposible')], vis: `<div class="bag">${shuffle(bag).map(c => `<span>${BALL[c]}</span>`).join('')}</div>`, ex: cnt === bag.length ? L('Totes les boles són d\'aquest color: és segur!', 'Todas las bolas son de ese color: ¡es seguro!') : cnt === 0 ? L('No hi ha cap bola d\'aquest color: és impossible!', 'No hay ninguna bola de ese color: ¡es imposible!') : L(`Hi ha ${cnt} boles d'aquest color entre ${bag.length}: pot sortir, però no és segur.`, `Hay ${cnt} bolas de ese color entre ${bag.length}: puede salir, pero no es seguro.`) });
    }
    if (L_ === 3) {
      const [a, b, c] = shuffle(['r', 'b', 'g']), na = ri(4, 6), nb = ri(1, 3), nc = ri(1, 3), bag = [...Array(na).fill(a), ...Array(nb).fill(b), ...Array(nc).fill(c)];
      return mc(L('De quin color és <b>més probable</b> treure una bola?', '¿De qué color es <b>más probable</b> sacar una bola?'), BALL[a], [BALL[b], BALL[c]], { big: true, vis: `<div class="bag">${shuffle(bag).map(x => `<span>${BALL[x]}</span>`).join('')}</div>`, ex: L(`Hi ha més boles ${({ r: 'vermelles', b: 'blaves', g: 'verdes', y: 'grogues' })[a]} (${na}), per tant és el color més probable.`, `Hay más bolas ${BN[a][1] === 'azul' ? 'azules' : BN[a][1] + 's'} (${na}), por lo tanto es el color más probable.`) });
    }
    if (Math.random() < .5) {
      const q = pick([[L('un 6', 'un 6'), 1], [L('un número parell', 'un número par'), 3], [L('un número més gran que 4', 'un número mayor que 4'), 2], [L('un 1 o un 2', 'un 1 o un 2'), 2], [L('un número més petit que 5', 'un número menor que 5'), 4]]);
      const ks = shuffle([1, 2, 3, 4, 5].filter(x => x !== q[1])).slice(0, 3);
      return mc(L(`Llances un dau. Quina és la probabilitat de treure <b>${q[0]}</b>?`, `Lanzas un dado. ¿Cuál es la probabilidad de sacar <b>${q[0]}</b>?`), frac(q[1], 6), ks.map(x => frac(x, 6)), { big: true, vis: `<div class="dice">🎲</div>`, ex: L(`Un dau té 6 cares i n'hi ha ${q[1]} que compleixen la condició: ${q[1]}/6 (casos favorables / casos possibles).`, `Un dado tiene 6 caras y hay ${q[1]} que cumplen la condición: ${q[1]}/6 (casos favorables / casos posibles).`) });
    }
    let r_, t_; do { r_ = ri(1, 4); t_ = r_ + ri(4, 6); } while (gcd(r_, t_) > 1);
    const bag = [...Array(r_).fill('r'), ...Array(t_ - r_).fill('b')], ks = new Set(); while (ks.size < 3) { const x = ri(1, t_ - 1); if (x !== r_) ks.add(x); }
    return mc(L('Quina és la probabilitat de treure una bola <b>vermella</b> 🔴?', '¿Cuál es la probabilidad de sacar una bola <b>roja</b> 🔴?'), frac(r_, t_), [...ks].map(x => frac(x, t_)), { big: true, vis: `<div class="bag">${shuffle(bag).map(x => `<span>${BALL[x]}</span>`).join('')}</div>`, ex: L(`Hi ha ${r_} ${r_ === 1 ? 'bola vermella' : 'boles vermelles'} de ${t_} en total: ${r_}/${t_}.`, `Hay ${r_} ${r_ === 1 ? 'bola roja' : 'bolas rojas'} de ${t_} en total: ${r_}/${t_}.`) });
  },
  'at.tally': L_ => {
    const cats = shuffle([['🍎', 'poma', 'manzana'], ['🍌', 'plàtan', 'plátano'], ['🍓', 'maduixa', 'fresa'], ['🍊', 'taronja', 'naranja']]).slice(0, 3);
    let vals; do { vals = cats.map(() => ri(2, L_ <= 1 ? 9 : 14)); } while (new Set(vals).size < 3);
    const vis = `<div class="tallyt"><div class="tth">${L('Fruita preferida', 'Fruta preferida')}</div>${cats.map((c, i) => `<div class="ttr"><span>${c[0]}</span>${tally(vals[i])}</div>`).join('')}</div>`;
    const v = L_ <= 1 ? 0 : ri(0, 2);
    if (v === 0) { const i = ri(0, 2); return inp(L(`Quants vots té ${cats[i][0]}?`, `¿Cuántos votos tiene ${cats[i][0]}?`), vals[i], { vis, ex: L(`Cada grup ratllat són 5. ${cats[i][0]}: ${vals[i]} vots.`, `Cada grupo tachado son 5. ${cats[i][0]}: ${vals[i]} votos.`) }); }
    if (v === 1) { const s = vals.reduce((a, b) => a + b, 0); return inp(L('Quants vots hi ha en total?', '¿Cuántos votos hay en total?'), s, { vis, ex: `${vals.join(' + ')} = ${s}.` }); }
    const mx = Math.max(...vals), w = cats[vals.indexOf(mx)];
    return mc(L('Quina fruita ha guanyat?', '¿Qué fruta ha ganado?'), w[0], cats.filter(c => c !== w).map(c => c[0]), { big: true, vis, ex: L(`${w[0]} té més vots: ${mx}.`, `${w[0]} tiene más votos: ${mx}.`) });
  }
});
function loopEx(s, k, ops, r) {
  const code = `<div class="code"><div class="blk ev">🚩 ${L('quan comenci', 'al empezar')}</div><div class="blk">n = ${s}</div><div class="blk loop">${L('repeteix', 'repite')} ${k} ${L('vegades', 'veces')}${ops.map(o => `<div class="blk in">${o}</div>`).join('')}</div><div class="blk">${L('digues', 'di')} n</div></div>`;
  return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), r, { vis: code, ex: L(`Comencem amb n = ${s} i repetim ${k} vegades (${ops.join(', ')}). Al final, n = ${r}. Els bucles estalvien feina als programadors!`, `Empezamos con n = ${s} y repetimos ${k} veces (${ops.join(', ')}). Al final, n = ${r}. ¡Los bucles ahorran trabajo a los programadores!`) });
}

/* ===== Mapa del currículum: a quin «sentit» pertany cada habilitat ===== */
const SENT = {
  num: ['Sentit numèric', 'Sentido numérico', '🔢'], mes: ['Sentit de la mesura', 'Sentido de la medida', '📏'], esp: ['Sentit espacial', 'Sentido espacial', '📐'],
  alg: ['Sentit algebraic i pensament computacional', 'Sentido algebraico y pensamiento computacional', '🧩'], est: ['Sentit estocàstic', 'Sentido estocástico', '🎲']
};
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
const unitSents = u => [...new Set(u.lessons.filter(l => l.core !== false && !l.vis && (l.tier || 1) === 1).slice(0, 5).flatMap(l => l.sk.map(skillSent)))];
