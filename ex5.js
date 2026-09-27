/* ===== Activitats visuals (idea d'Innovamat: raonar amb figures, no només amb números) =====
   Construccions de cubs, plànols, desplegaments del cub, figures que giren, el mirall (graella
   per pintar), pinta la part, balances, sèries de figures i el laberint del robot.
   L'argument de cada habilitat és el nivell de l'alumne (1-10): 'v.cubes:4'. */
const VCOL = ['#FF6FA3', '#36A9E1', '#3CC46A', '#FF9A3C', '#8A4FB0', '#22B5A0'];
const lvN = a => Math.max(1, Math.min(10, +a || 4));

/* --- Poliominós --- */
const pnorm = cells => { const mx = Math.min(...cells.map(c => c[0])), my = Math.min(...cells.map(c => c[1])); return cells.map(([x, y]) => [x - mx, y - my]).sort((a, b) => a[1] - b[1] || a[0] - b[0]); };
const pkey = cells => pnorm(cells).map(c => c.join(',')).join(';');
const prot = cells => cells.map(([x, y]) => [-y, x]);
const pmir = cells => cells.map(([x, y]) => [-x, y]);
const rots = cells => { const o = [cells]; for (let i = 0; i < 3; i++) o.push(prot(o[o.length - 1])); return o.map(pnorm); };
const canonR = cells => rots(cells).map(pkey).sort()[0];
const canonAll = cells => [...rots(cells), ...rots(pmir(cells))].map(pkey).sort()[0];
function growPoly(n, w, h) {
  const cells = [[ri(0, w - 1), ri(0, h - 1)]];
  for (let g = 0; cells.length < n && g < 400; g++) {
    const [x, y] = pick(cells), [dx, dy] = pick([[1, 0], [-1, 0], [0, 1], [0, -1]]), nx = x + dx, ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= w || ny >= h || cells.some(c => c[0] === nx && c[1] === ny)) continue;
    cells.push([nx, ny]);
  }
  return pnorm(cells);
}
function polySVG(cells, color, s = 20) {
  cells = pnorm(cells);
  const W = Math.max(...cells.map(c => c[0])) + 1, H = Math.max(...cells.map(c => c[1])) + 1;
  return `<svg class="vpic" viewBox="-2 -2 ${W * s + 4} ${H * s + 4}" style="width:${W * s + 4}px">${cells.map(([x, y]) => `<rect x="${x * s}" y="${y * s}" width="${s}" height="${s}" rx="2" fill="${color}" stroke="#2B1A38" stroke-width="1.5"/>`).join('')}</svg>`;
}

/* --- Desplegament del cub: el pleguem de debò fent rodar un dau --- */
function foldsToCube(cells) {
  const has = (x, y) => cells.some(c => c[0] === x && c[1] === y);
  for (const [x, y] of cells) if (has(x + 1, y) && has(x, y + 1) && has(x + 1, y + 1)) return false;
  const roll = { '1,0': ([x, y, z]) => [z, y, -x], '-1,0': ([x, y, z]) => [-z, y, x], '0,1': ([x, y, z]) => [x, z, -y], '0,-1': ([x, y, z]) => [x, -z, y] };
  const N0 = [[0, 0, -1], [0, 0, 1], [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0]];
  const seen = new Set([cells[0].join(',')]), q = [[cells[0], N0]], faces = new Set();
  while (q.length) {
    const [[x, y], N] = q.shift(); faces.add(N.findIndex(n => n[2] === -1));
    for (const d of Object.keys(roll)) { const [dx, dy] = d.split(',').map(Number), k = (x + dx) + ',' + (y + dy); if (!has(x + dx, y + dy) || seen.has(k)) continue; seen.add(k); q.push([[x + dx, y + dy], N.map(roll[d])]); }
  }
  return faces.size === 6;
}
function netSet(valid, n) {
  const out = [], keys = new Set();
  for (let g = 0; out.length < n && g < 3000; g++) { const p = growPoly(6, 5, 4), k = canonAll(p); if (keys.has(k) || foldsToCube(p) !== valid) continue; keys.add(k); out.push(p); }
  return out;
}

/* --- Construccions isomètriques (escala: més alt al fons, així no s'amaga cap cub) --- */
function stairs(nx, ny, maxh) {
  for (let g = 0; g < 50; g++) {
    const h = [];
    for (let x = 0; x < nx; x++) { h[x] = []; for (let y = 0; y < ny; y++) { const lim = Math.min(x ? h[x - 1][y] : maxh, y ? h[x][y - 1] : maxh); h[x][y] = ri(x + y === 0 ? Math.max(1, maxh - 1) : 0, lim); } }
    const tot = h.flat().reduce((a, b) => a + b, 0); if (tot >= 3) return h;
  }
  return [[2, 1], [1, 0]];
}
const csum = h => h.flat().reduce((a, b) => a + b, 0);
function isoSVG(h, s = 20) {
  const cubes = []; h.forEach((col, x) => col.forEach((hh, y) => { for (let z = 0; z < hh; z++) cubes.push([x, y, z]); }));
  cubes.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]) || a[2] - b[2]);
  const P = (x, y, z) => [(x - y) * s * .866, (x + y) * s * .5 - z * s];
  const pts = []; const poly = (ps, f) => { ps = ps.map(p => P(...p)); pts.push(...ps); return `<polygon points="${ps.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="${f}" stroke="#2B1A38" stroke-width="1.3" stroke-linejoin="round"/>`; };
  const body = cubes.map(([x, y, z]) => poly([[x, y, z + 1], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], '#FFD66B') + poly([[x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x + 1, y, z + 1]], '#F29A38') + poly([[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], '#D9702A')).join('');
  const X = pts.map(p => p[0]), Y = pts.map(p => p[1]), x0 = Math.min(...X) - 3, y0 = Math.min(...Y) - 3, w = Math.max(...X) - x0 + 3, hh = Math.max(...Y) - y0 + 3;
  return `<svg class="vpic iso" viewBox="${x0.toFixed(1)} ${y0.toFixed(1)} ${w.toFixed(1)} ${hh.toFixed(1)}" style="width:${Math.round(Math.min(260, w * 2.2))}px">${body}</svg>`;
}
// Plànol amb números, dibuixat en rombe perquè tingui la mateixa orientació que la construcció
function planSVG(h, s = 22) {
  const P = (x, y) => [(x - y) * s * .866, (x + y) * s * .5];
  let body = '', pts = [];
  h.forEach((col, x) => col.forEach((v, y) => {
    const ps = [P(x, y), P(x + 1, y), P(x + 1, y + 1), P(x, y + 1)]; pts.push(...ps);
    const c = P(x + .5, y + .5);
    body += `<polygon points="${ps.map(p => p.join(',')).join(' ')}" fill="${v ? '#FFF3C4' : '#F1ECF5'}" stroke="#2B1A38" stroke-width="1.2"/>${v ? `<text x="${c[0]}" y="${c[1] + 5}" text-anchor="middle" font-size="14" font-weight="900" fill="#2B1A38">${v}</text>` : ''}`;
  }));
  const X = pts.map(p => p[0]), Y = pts.map(p => p[1]), x0 = Math.min(...X) - 2, y0 = Math.min(...Y) - 2, w = Math.max(...X) - x0 + 2, hh = Math.max(...Y) - y0 + 2;
  return `<svg class="vpic" viewBox="${x0} ${y0} ${w} ${hh}" style="width:${Math.round(w * 1.3)}px">${body}</svg>`;
}

/* --- Graella per pintar (tipus d'exercici nou: 'grid') --- */
function tapGridHTML(e) {
  const sel = (LS && LS.gsel) || new Set();
  return `<div class="tgrid ${e.axis ? 'ax-' + e.axis : ''}" id="tgrid" style="--gc:${e.cols};--gr:${e.rows}">${[...Array(e.rows * e.cols).keys()].map(i => {
    const fx = e.fixed && e.fixed.includes(i), ed = !fx && (!e.edit || e.edit.includes(i));
    return `<button class="tg ${fx ? 'fx' : ''} ${sel.has(i) ? 'on' : ''} ${ed ? '' : 'ro'}" ${ed ? `onclick="gridTap(${i})"` : 'disabled'} aria-label="${L('Casella', 'Casilla')} ${i + 1}"></button>`;
  }).join('')}</div><div class="gcount" id="gcount">${e.need ? L(`Pintades: <b>${sel.size}</b>`, `Pintadas: <b>${sel.size}</b>`) : ''}</div>`;
}
function gridTap(i) {
  if (!LS || LS.state !== 'ask') return;
  LS.gsel = LS.gsel || new Set();
  LS.gsel.has(i) ? LS.gsel.delete(i) : LS.gsel.add(i);
  SFX.tap();
  const b = $$('#tgrid .tg')[i]; if (b) b.classList.toggle('on', LS.gsel.has(i));
  const c = $('#gcount'); if (c && LS.cur.need) c.innerHTML = L(`Pintades: <b>${LS.gsel.size}</b>`, `Pintadas: <b>${LS.gsel.size}</b>`);
  $('#chk').disabled = !LS.gsel.size;
}
const gridRight = e => { const s = LS.gsel || new Set(); return e.need ? s.size === e.need : s.size === e.ans.length && e.ans.every(i => s.has(i)); };
function gridSolSVG(e, s = 14) {
  return `<svg class="vpic sol" viewBox="0 0 ${e.cols * s} ${e.rows * s}" style="width:${e.cols * s}px">${[...Array(e.rows * e.cols).keys()].map(i => { const x = i % e.cols, y = Math.floor(i / e.cols), on = (e.fixed || []).includes(i) || e.ans.includes(i); return `<rect x="${x * s}" y="${y * s}" width="${s}" height="${s}" fill="${on ? ((e.fixed || []).includes(i) ? '#8A4FB0' : '#3CC46A') : '#fff'}" stroke="#B9A6CC"/>`; }).join('')}${e.axis === 'v' ? `<line x1="${e.cols * s / 2}" y1="0" x2="${e.cols * s / 2}" y2="${e.rows * s}" stroke="#D63C42" stroke-width="2"/>` : e.axis === 'h' ? `<line x1="0" y1="${e.rows * s / 2}" x2="${e.cols * s}" y2="${e.rows * s / 2}" stroke="#D63C42" stroke-width="2"/>` : ''}</svg>`;
}

/* --- Balances --- */
const VSHP = { c: (x, y, f) => `<circle cx="${x}" cy="${y - 11}" r="11" fill="${f}" stroke="#2B1A38" stroke-width="1.5"/>`, t: (x, y, f) => `<polygon points="${x - 12},${y} ${x + 12},${y} ${x},${y - 22}" fill="${f}" stroke="#2B1A38" stroke-width="1.5" stroke-linejoin="round"/>`, s: (x, y, f) => `<rect x="${x - 10}" y="${y - 20}" width="20" height="20" rx="3" fill="${f}" stroke="#2B1A38" stroke-width="1.5"/>` };
const VSHN = { c: ['cercle', 'círculo', '●'], t: ['triangle', 'triángulo', '▲'], s: ['quadrat', 'cuadrado', '■'] };
function panItems(items, cx, y) {
  const w = 26, x0 = cx - (items.length - 1) * w / 2;
  return items.map((it, i) => { const x = x0 + i * w; return it.n != null ? `<rect x="${x - 12}" y="${y - 22}" width="24" height="22" rx="4" fill="#9AA5B1" stroke="#2B1A38" stroke-width="1.5"/><text x="${x}" y="${y - 6}" text-anchor="middle" font-size="12" font-weight="900" fill="#fff">${it.n}</text>` : VSHP[it.s](x, y, it.f); }).join('');
}
function balanceSVG(left, right) {
  return `<svg class="vpic bal" viewBox="0 0 240 120" style="width:260px"><polygon points="112,112 128,112 120,40" fill="#B9A6CC"/><rect x="20" y="38" width="200" height="6" rx="3" fill="#6B4F85"/>
    <path d="M22 44 L10 88 M22 44 L60 88 M218 44 L180 88 M218 44 L230 88" stroke="#6B4F85" stroke-width="1.5"/><rect x="4" y="88" width="62" height="5" rx="2" fill="#6B4F85"/><rect x="174" y="88" width="62" height="5" rx="2" fill="#6B4F85"/>
    ${panItems(left, 35, 88)}${panItems(right, 205, 88)}<circle cx="120" cy="40" r="5" fill="#FFC93C" stroke="#6B4F85"/></svg>`;
}

/* --- Sèries de figures --- */
function tileSVG(t, s = 46) {
  const c = s / 2; let inner = '';
  if (t.k === 'arrow') inner = `<g transform="rotate(${t.r} ${c} ${c})"><path d="M${c} 8 L${s - 12} ${c} L${c + 5} ${c} L${c + 5} ${s - 8} L${c - 5} ${s - 8} L${c - 5} ${c} L12 ${c} Z" fill="${t.f}" stroke="#2B1A38" stroke-width="1.5" stroke-linejoin="round"/></g>`;
  else if (t.k === 'dots') inner = [...Array(t.n).keys()].map(i => `<circle cx="${9 + (i % 3) * 14}" cy="${9 + Math.floor(i / 3) * 14}" r="5" fill="${t.f}"/>`).join('');
  else inner = VSHP[t.s](c, c + 11, t.f);
  return `<svg class="vtile" viewBox="0 0 ${s} ${s}" style="width:${s}px"><rect x="1" y="1" width="${s - 2}" height="${s - 2}" rx="8" fill="#fff" stroke="#D9CCE6" stroke-width="1.5"/>${inner}</svg>`;
}
const tkey = t => JSON.stringify(t);

/* --- Laberint --- */
function mazeSVG(w, h, rock, st, go, s = 30) {
  let b = '';
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const i = y * w + x; b += `<rect x="${x * s}" y="${y * s}" width="${s}" height="${s}" fill="${rock.has(i) ? '#8C7A6B' : (x + y) % 2 ? '#EAF7EE' : '#F6FBF7'}" stroke="#CFE3D4"/>${rock.has(i) ? `<circle cx="${x * s + s / 2}" cy="${y * s + s / 2 + 2}" r="${s / 3}" fill="#A8978A"/>` : ''}`; }
  const em = (i, e) => `<text x="${(i % w) * s + s / 2}" y="${Math.floor(i / w) * s + s / 2 + 7}" text-anchor="middle" font-size="${s * .62}">${e}</text>`;
  return `<svg class="vpic" viewBox="0 0 ${w * s} ${h * s}" style="width:${w * s}px">${b}${em(st, '🤖')}${em(go, '🚩')}</svg>`;
}
function bfs(w, h, rock, st) {
  const d = Array(w * h).fill(-1), q = [st]; d[st] = 0;
  while (q.length) { const i = q.shift(), x = i % w, y = Math.floor(i / w); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy, j = ny * w + nx; if (nx < 0 || ny < 0 || nx >= w || ny >= h || rock.has(j) || d[j] >= 0) continue; d[j] = d[i] + 1; q.push(j); } }
  return d;
}
const nCk = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };

Object.assign(EX, {
  'v.cubes': (L_, a) => {
    const n = lvN(a), big = n >= 5 || L_ >= 4;
    const dims = n <= 2 ? [2, 2, 2] : big ? [3, 3, 3] : [pick([2, 3]), 2, 3];
    const h = stairs(...dims), tot = csum(h);
    if (n >= 5 && L_ >= 4 && Math.random() < .5) return inp(L('Quants cubs <b>falten</b> per tenir un cub gran de 3 × 3 × 3?', '¿Cuántos cubos <b>faltan</b> para tener un cubo grande de 3 × 3 × 3?'), 27 - tot, { vis: isoSVG(h), ex: L(`Un cub de 3 × 3 × 3 té 27 cubets. N'hi ha ${tot}, així que en falten 27 − ${tot} = ${27 - tot}.`, `Un cubo de 3 × 3 × 3 tiene 27 cubitos. Hay ${tot}, así que faltan 27 − ${tot} = ${27 - tot}.`) });
    return inp(L('Quants cubs té aquesta construcció? (Els cubs no suren: sota de cada cub n\'hi ha un altre o el terra.)', '¿Cuántos cubos tiene esta construcción? (Los cubos no flotan: debajo de cada cubo hay otro o el suelo.)'), tot, { vis: isoSVG(h), ex: L(`Compta columna a columna: ${h.flat().filter(v => v).join(' + ')} = ${tot} cubs.`, `Cuenta columna a columna: ${h.flat().filter(v => v).join(' + ')} = ${tot} cubos.`) });
  },
  'v.view': (L_, a) => {
    const n = lvN(a), h = stairs(n <= 3 ? 2 : 3, n <= 3 ? 2 : 3, 3), key = m => m.map(c => c.join('')).join('|');
    const cands = [], seen = new Set([key(h)]);
    const add = m => { const k = key(m); if (!seen.has(k) && cands.length < 3) { seen.add(k); cands.push(m); } };
    add(h[0].map((_, y) => h.map(col => col[y])));
    for (let g = 0; g < 40 && cands.length < 3; g++) { const m = h.map(c => c.slice()), x = ri(0, m.length - 1), y = ri(0, m[0].length - 1); m[x][y] = Math.max(0, m[x][y] + pick([-1, 1])); if (Math.random() < .5) { const x2 = ri(0, m.length - 1), y2 = ri(0, m[0].length - 1); [m[x][y], m[x2][y2]] = [m[x2][y2], m[x][y]]; } add(m); }
    return mc(L('Quin <b>plànol</b> correspon a la construcció? Cada número diu quants cubs hi ha a sobre d\'aquella casella.', '¿Qué <b>plano</b> corresponde a la construcción? Cada número dice cuántos cubos hay encima de esa casilla.'), planSVG(h), cands.map(m => planSVG(m)), { pics: true, vis: isoSVG(h), ex: L('Mira cada columna de la construcció i compta quants cubs té: és el número que va a la seva casella.', 'Mira cada columna de la construcción y cuenta cuántos cubos tiene: es el número que va en su casilla.') });
  },
  'v.net': (L_, a) => {
    const col = pick(VCOL), neg = lvN(a) >= 6 && Math.random() < .4;
    const good = netSet(!neg, neg ? 3 : 1), bad = netSet(neg, neg ? 1 : 3);
    const right = (neg ? bad : good)[0], wrong = neg ? good : bad;
    return mc(neg ? L('Quin d\'aquests desplegaments <b>NO</b> es pot plegar per fer un cub?', '¿Cuál de estos desarrollos <b>NO</b> se puede plegar para hacer un cubo?') : L('Quin d\'aquests desplegaments es pot plegar per fer un <b>cub</b>?', '¿Cuál de estos desarrollos se puede plegar para hacer un <b>cubo</b>?'), polySVG(right, col, 16), wrong.map(p => polySVG(p, col, 16)), { pics: true, vis: `<div class="bigemo">🎲</div>`, ex: L('Imagina que plegues les cares: en un cub cada cara ha de quedar en un lloc diferent. Si dues cares es trepitgen o hi ha un bloc de 2 × 2, no funciona.', 'Imagina que pliegas las caras: en un cubo cada cara tiene que quedar en un sitio diferente. Si dos caras se pisan o hay un bloque de 2 × 2, no funciona.') });
  },
  'v.rot': (L_, a) => {
    const n = lvN(a), sz = n <= 3 ? 4 : n <= 6 ? 5 : 6, col = pick(VCOL);
    let p; for (let g = 0; g < 200; g++) { p = growPoly(sz, 4, 4); if (canonR(p) !== canonR(pmir(p))) break; }
    const R = rots(p), k = ri(1, 3), right = R[k], mk = new Set([pkey(right)]), wrong = [];
    shuffle(rots(pmir(p))).forEach(m => { const kk = pkey(m); if (!mk.has(kk) && wrong.length < 3) { mk.add(kk); wrong.push(m); } });
    return mc(L('Quina figura és <b>la mateixa</b>, només girada? (Les altres estan girades com en un mirall.)', '¿Qué figura es <b>la misma</b>, solo girada? (Las otras están giradas como en un espejo.)'), polySVG(right, col, 16), wrong.map(m => polySVG(m, col, 16)), { pics: true, vis: polySVG(p, col, 22), ex: L(`La figura correcta és l'original girada ${k * 90}°. Les altres només surten si la gires del revés, com en un mirall.`, `La figura correcta es la original girada ${k * 90}°. Las otras solo salen si le das la vuelta, como en un espejo.`) });
  },
  'v.sym': (L_, a) => {
    const n = lvN(a), horiz = n >= 5 && Math.random() < .4;
    const hw = n <= 2 ? 2 : n <= 5 ? 3 : 4, rows = n <= 2 ? 3 : n <= 5 ? 4 : 5;
    const cols = hw * 2, R = horiz ? hw * 2 : rows, C = horiz ? rows : cols;
    const want = Math.min(hw * rows - 1, ri(3, 3 + Math.floor(n / 2)));
    const fixed = new Set(), idx = (x, y) => y * C + x;
    while (fixed.size < want) { if (horiz) fixed.add(idx(ri(0, C - 1), ri(0, hw - 1))); else fixed.add(idx(ri(0, hw - 1), ri(0, R - 1))); }
    const ans = [...fixed].map(i => { const x = i % C, y = Math.floor(i / C); return horiz ? idx(x, R - 1 - y) : idx(C - 1 - x, y); });
    const edit = [...Array(R * C).keys()].filter(i => horiz ? Math.floor(i / C) >= hw : i % C >= hw);
    return { type: 'grid', rows: R, cols: C, fixed: [...fixed], ans, edit, axis: horiz ? 'h' : 'v', q: L(`Pinta les caselles perquè el dibuix sigui <b>simètric</b> respecte a la línia vermella, com en un mirall.`, `Pinta las casillas para que el dibujo sea <b>simétrico</b> respecto a la línea roja, como en un espejo.`), ex: L('Cada casella pintada té la seva parella a la mateixa distància de la línia, a l\'altre costat.', 'Cada casilla pintada tiene su pareja a la misma distancia de la línea, al otro lado.') };
  },
  'v.frac': (L_, a) => {
    const n = lvN(a);
    let rows, cols, need, txt;
    if (n <= 2) { rows = 2; cols = pick([2, 3, 4]); need = rows * cols / 2; txt = [L('la <b>meitat</b>', 'la <b>mitad</b>')]; }
    else if (n <= 6) { const d = pick([3, 4, 5, 6, 8]), k = ri(1, d - 1); rows = 2; cols = d === 8 ? 4 : d; need = rows * cols * k / d; txt = [`<b>${k}/${d}</b>`]; }
    else { rows = 4; cols = 5; const p = pick([10, 15, 20, 25, 30, 35, 40, 45, 55, 60, 65, 70, 75, 80]); need = 20 * p / 100; txt = [`<b>${p} %</b>`]; }
    const tot = rows * cols;
    return { type: 'grid', rows, cols, need, ans: [...Array(need).keys()], q: L(`Pinta ${txt[0]} de les caselles.`, `Pinta ${txt[0]} de las casillas.`), ex: L(`Hi ha ${tot} caselles: ${txt[0].replace(/<[^>]+>/g, '')} de ${tot} són ${need}. Pots pintar les que vulguis!`, `Hay ${tot} casillas: ${txt[0].replace(/<[^>]+>/g, '')} de ${tot} son ${need}. ¡Puedes pintar las que quieras!`) };
  },
  'v.balance': (L_, a) => {
    const n = lvN(a), [A, B] = shuffle(['c', 't', 's']), fa = pick(VCOL), fb = pick(VCOL.filter(c => c !== fa));
    const it = (s, f, k) => Array(k).fill({ s, f });
    const nm = s => L(VSHN[s][0], VSHN[s][1]);
    if (n <= 2 || L_ <= 1) {
      const va = ri(1, n <= 2 ? 5 : 9), k = ri(2, n <= 2 ? 3 : 4);
      return inp(L(`La balança està en equilibri. Quant pesa cada <b>${nm(A)}</b>?`, `La balanza está en equilibrio. ¿Cuánto pesa cada <b>${nm(A)}</b>?`), va, { vis: '<div class="bals">' + balanceSVG(it(A, fa, k), [{ n: va * k }]) + '</div>', ex: L(`${k} ${nm(A)}s pesen ${va * k}: cadascun pesa ${va * k} ÷ ${k} = ${va}.`, `${k} ${nm(A)}s pesan ${va * k}: cada uno pesa ${va * k} ÷ ${k} = ${va}.`) });
    }
    if (n <= 5 || L_ <= 3) {
      const vb = ri(2, 8), va = ri(2, 9);
      return inp(L(`Les dues balances estan en equilibri. Quant pesa el <b>${nm(A)}</b>?`, `Las dos balanzas están en equilibrio. ¿Cuánto pesa el <b>${nm(A)}</b>?`), va, { vis: '<div class="bals">' + balanceSVG([{ s: A, f: fa }, { s: B, f: fb }], [{ n: va + vb }]) + balanceSVG(it(B, fb, 2), [{ n: 2 * vb }]) + '</div>', ex: L(`Dos ${nm(B)}s pesen ${2 * vb}, així que un pesa ${vb}. Llavors ${nm(A)} = ${va + vb} − ${vb} = ${va}.`, `Dos ${nm(B)}s pesan ${2 * vb}, así que uno pesa ${vb}. Entonces ${nm(A)} = ${va + vb} − ${vb} = ${va}.`) });
    }
    const va = ri(2, 9), vb = ri(1, 9);
    return inp(L(`Les dues balances estan en equilibri. Quant pesa el <b>${nm(A)}</b>?`, `Las dos balanzas están en equilibrio. ¿Cuánto pesa el <b>${nm(A)}</b>?`), va, { vis: '<div class="bals">' + balanceSVG([...it(A, fa, 2), { s: B, f: fb }], [{ n: 2 * va + vb }]) + balanceSVG([{ s: A, f: fa }, { s: B, f: fb }], [{ n: va + vb }]) + '</div>', ex: L(`La primera balança té un ${nm(A)} més que la segona i pesa ${2 * va + vb} − ${va + vb} = ${va} més. Aquest ${nm(A)} pesa ${va}. (És un sistema d'equacions!)`, `La primera balanza tiene un ${nm(A)} más que la segunda y pesa ${2 * va + vb} − ${va + vb} = ${va} más. Ese ${nm(A)} pesa ${va}. (¡Es un sistema de ecuaciones!)`) });
  },
  'v.pattern': (L_, a) => {
    const n = lvN(a), kind = pick(n <= 2 ? ['shape', 'dots'] : ['shape', 'arrow', 'dots']);
    let seq = [], right, wrong = [];
    if (kind === 'arrow') {
      const st = pick([45, 90]), r0 = pick([0, 90, 180, 270]), fs = n >= 4 ? shuffle(VCOL).slice(0, 2) : [pick(VCOL)];
      const T = i => ({ k: 'arrow', r: (r0 + st * i) % 360, f: fs[i % fs.length] });
      seq = [0, 1, 2, 3, 4].map(T); right = T(5);
      [{ ...right, r: (right.r + 90) % 360 }, { ...right, r: (right.r + 180) % 360 }, { ...right, r: (right.r + 270) % 360 }, { ...right, f: pick(VCOL.filter(c => c !== right.f)) }].forEach(t => wrong.push(t));
    } else if (kind === 'dots') {
      const d = n <= 2 ? 1 : ri(1, 2), s0 = ri(1, 2), f = pick(VCOL);
      const T = i => ({ k: 'dots', n: s0 + d * i, f });
      seq = [0, 1, 2, 3].map(T); right = T(4);
      [right.n - 1, right.n + 1, right.n + 2, right.n - 2, right.n + d + 1].filter(v => v > 0 && v <= 9 && v !== right.n).forEach(v => wrong.push({ k: 'dots', n: v, f }));
    } else {
      const sh = shuffle(['c', 't', 's']).slice(0, n <= 2 ? 2 : 3), fs = shuffle(VCOL).slice(0, n <= 3 ? 1 : 2);
      const T = i => ({ k: 'shape', s: sh[i % sh.length], f: fs[i % fs.length] });
      seq = [0, 1, 2, 3, 4].map(T); right = T(5);
      ['c', 't', 's'].forEach(s => VCOL.slice(0, 4).forEach(f => { if (s !== right.s || f !== right.f) wrong.push({ k: 'shape', s, f }); }));
      wrong = [...shuffle(wrong.filter(t => fs.includes(t.f))), ...shuffle(wrong.filter(t => !fs.includes(t.f)))];
    }
    const seen = new Set([tkey(right)]); wrong = wrong.filter(t => { const k = tkey(t); if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 3);
    return mc(L('Quina figura ve <b>després</b>?', '¿Qué figura va <b>después</b>?'), tileSVG(right), wrong.map(t => tileSVG(t)), { pics: true, vis: `<div class="vseq">${seq.map(t => tileSVG(t)).join('')}<span class="vq">?</span></div>`, ex: kind === 'arrow' ? L('La fletxa gira sempre el mateix angle a cada pas.', 'La flecha gira siempre el mismo ángulo en cada paso.') : kind === 'dots' ? L(`Cada vegada hi ha ${right.n - seq[3].n} punt${right.n - seq[3].n > 1 ? 's' : ''} més.`, `Cada vez hay ${right.n - seq[3].n} punto${right.n - seq[3].n > 1 ? 's' : ''} más.`) : L('Les formes i els colors es repeteixen cadascun amb el seu propi ritme.', 'Las formas y los colores se repiten cada uno con su propio ritmo.') });
  },
  'v.maze': (L_, a) => {
    const n = lvN(a);
    if (n >= 7 && L_ >= 3 && Math.random() < .5) {
      const w = ri(2, 4), h = ri(2, 3), none = new Set();
      return inp(L(`El robot només pot anar cap a la <b>dreta</b> o cap <b>avall</b>. Quants camins diferents té per arribar a la bandera?`, `El robot solo puede ir hacia la <b>derecha</b> o hacia <b>abajo</b>. ¿Cuántos caminos diferentes tiene para llegar a la bandera?`), nCk(w + h, h), { vis: mazeSVG(w + 1, h + 1, none, 0, (w + 1) * (h + 1) - 1), ex: L(`Ha de fer ${w} passos a la dreta i ${h} avall en algun ordre: hi ha ${nCk(w + h, h)} maneres (combinacions de ${w + h} en ${h}).`, `Tiene que dar ${w} pasos a la derecha y ${h} abajo en algún orden: hay ${nCk(w + h, h)} maneras (combinaciones de ${w + h} en ${h}).`) });
    }
    const w = n <= 2 ? 4 : n <= 5 ? 5 : 6, h = n <= 2 ? 4 : 5;
    for (let g = 0; g < 200; g++) {
      const rock = new Set(); const nr = Math.floor(w * h * (n <= 2 ? .18 : .26));
      while (rock.size < nr) rock.add(ri(0, w * h - 1));
      const st = 0, go = w * h - 1; rock.delete(st); rock.delete(go);
      const d = bfs(w, h, rock, st)[go];
      if (d < 0 || d === w + h - 2 && Math.random() < .6) continue;
      return inp(L('El robot 🤖 es mou d\'una casella a la del costat (no en diagonal) i no pot passar per les roques. Quants <b>passos</b> necessita com a mínim per arribar a la bandera?', 'El robot 🤖 se mueve de una casilla a la de al lado (no en diagonal) y no puede pasar por las rocas. ¿Cuántos <b>pasos</b> necesita como mínimo para llegar a la bandera?'), d, { vis: mazeSVG(w, h, rock, st, go), ex: L(`El camí més curt esquivant les roques té ${d} passos.`, `El camino más corto esquivando las rocas tiene ${d} pasos.`) });
    }
    return inp(L('Quants passos necessita el robot per arribar a la bandera?', '¿Cuántos pasos necesita el robot para llegar a la bandera?'), w + h - 2, { vis: mazeSVG(w, h, new Set(), 0, w * h - 1) });
  }
});

// Nom i tipus de cada activitat visual (per al temari)
const VIS = {
  'v.cubes': 'Construccions de cubs|Construcciones de cubos', 'v.view': 'Plànols de construccions|Planos de construcciones', 'v.net': 'Desplegaments del cub|Desarrollos del cubo',
  'v.rot': 'Figures que giren|Figuras que giran', 'v.sym': 'El mirall màgic|El espejo mágico', 'v.frac': 'Pinta la part|Pinta la parte', 'v.balance': 'Balances en equilibri|Balanzas en equilibrio',
  'v.pattern': 'Sèries de figures|Series de figuras', 'v.maze': 'El laberint del robot|El laberinto del robot'
};
const VIS_POOL = ci => ci <= 1 ? ['v.pattern', 'v.sym', 'v.cubes', 'v.maze', 'v.balance', 'v.frac'] : ci <= 5 ? ['v.cubes', 'v.sym', 'v.balance', 'v.pattern', 'v.maze', 'v.rot', 'v.frac', 'v.view', 'v.net'] : ['v.net', 'v.rot', 'v.balance', 'v.view', 'v.cubes', 'v.maze', 'v.frac', 'v.sym', 'v.pattern'];
