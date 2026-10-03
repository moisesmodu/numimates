/* ===== Activitats visuals (idea d'Innovamat: raonar amb figures, no només amb números) =====
   Construccions de cubs, plànols, desplegaments del cub, figures que giren, el mirall (graella
   per pintar), pinta la part, balances, sèries de figures i el laberint del robot.
   L'argument de cada habilitat és el nivell de l'alumne (1-10): 'v.cubes:4'. */
const VCOL = ['#FF6FA3', '#36A9E1', '#3CC46A', '#FF9A3C', '#8A4FB0', '#22B5A0'];
const lvN = a => Math.max(1, Math.min(10, +a || 4));
// dibuixos amb volum: cada color de VCOL té el seu degradat compartit (chars.js DEFS); ids únics per als degradats propis
const VGR5 = { '#FF6FA3': 'gPink', '#36A9E1': 'gBlue', '#3CC46A': 'gGreen', '#FF9A3C': 'gOrange', '#8A4FB0': 'gPurple', '#22B5A0': 'gTeal' };
const vgf5 = c => VGR5[c] ? `url(#${VGR5[c]}) ${c}` : c;   // el color pla queda de reserva (i distingeix les fitxes)
let vuid5 = 0;
const vlg5 = (id, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;

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
  // rajoles brillants: degradat del color, contorn net, ombra suau i un reflex a dalt de cada cara
  return `<svg class="vpic" viewBox="-4 -4 ${W * s + 8} ${H * s + 11}" style="width:${W * s + 8}px"><g filter="url(#vsh)">${cells.map(([x, y]) => `<rect x="${x * s}" y="${y * s}" width="${s}" height="${s}" rx="${(s * .17).toFixed(1)}" fill="${vgf5(color)}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>`).join('')}</g>${cells.map(([x, y]) => `<rect x="${(x * s + s * .2).toFixed(1)}" y="${(y * s + s * .15).toFixed(1)}" width="${(s * .6).toFixed(1)}" height="${(s * .2).toFixed(1)}" rx="${(s * .1).toFixed(1)}" fill="#fff" opacity=".45"/>`).join('')}</svg>`;
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
  const P = (x, y, z) => [(x - y) * s * .866, (x + y) * s * .5 - z * s], f1 = p => p[0].toFixed(1) + ',' + p[1].toFixed(1);
  const id = 'vi5' + (++vuid5), nx = h.length, ny = h[0].length;
  const pts = []; const poly = (ps, f, st = INK, sw = 1.4) => { ps = ps.map(p => P(...p)); pts.push(...ps); return `<polygon points="${ps.map(f1).join(' ')}" fill="${f}" stroke="${st}" stroke-width="${sw}" stroke-linejoin="round"/>`; };
  // reflex a les dues arestes del fons de la cara de dalt (una mica cap endins): el cub sembla tallat i brillant
  const glint = (x, y, z) => { const c = P(x + .5, y + .5, z + 1), q = [[x, y + 1, z + 1], [x, y, z + 1], [x + 1, y, z + 1]].map(p => { const r = P(...p); return [r[0] + (c[0] - r[0]) * .2, r[1] + (c[1] - r[1]) * .2]; }); return `<polyline points="${q.map(f1).join(' ')}" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>`; };
  // estora del terra: totes les caselles (també les buides) amb un cantell, perquè es vegi on hi ha columnes i on no
  let mat = poly([[nx, 0, 0], [nx, ny, 0], [nx, ny, -.22], [nx, 0, -.22]], '#B9A6CC', '#9C86B3', 1) + poly([[0, ny, 0], [nx, ny, 0], [nx, ny, -.22], [0, ny, -.22]], '#A48DBB', '#8E77A6', 1);
  for (let x = 0; x < nx; x++) for (let y = 0; y < ny; y++) mat += poly([[x, y, 0], [x + 1, y, 0], [x + 1, y + 1, 0], [x, y + 1, 0]], '#EFE8F6', '#C9B8DA', 1.1);
  const body = cubes.map(([x, y, z]) => poly([[x, y, z + 1], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], `url(#${id}t)`) + poly([[x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x + 1, y, z + 1]], `url(#${id}r)`) + poly([[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], `url(#${id}l)`) + glint(x, y, z)).join('');
  const defs = `<defs>${vlg5(id + 't', '#FFF1B8', '#FFD050', 1, 1)}${vlg5(id + 'r', '#FBB25A', '#EC8A2A')}${vlg5(id + 'l', '#E5843A', '#C55E1C')}</defs>`;
  const X = pts.map(p => p[0]), Y = pts.map(p => p[1]), x0 = Math.min(...X) - 4, y0 = Math.min(...Y) - 4, w = Math.max(...X) - x0 + 4, hh = Math.max(...Y) - y0 + 8;
  return `<svg class="vpic iso" viewBox="${x0.toFixed(1)} ${y0.toFixed(1)} ${w.toFixed(1)} ${hh.toFixed(1)}" style="width:${Math.round(Math.min(260, w * 2.2))}px">${defs}<g filter="url(#vsh)">${mat}${body}</g></svg>`;
}
// Plànol amb números, dibuixat en rombe perquè tingui la mateixa orientació que la construcció
function planSVG(h, s = 22) {
  const P = (x, y) => [(x - y) * s * .866, (x + y) * s * .5], f1 = p => p[0].toFixed(1) + ',' + p[1].toFixed(1), nx = h.length, ny = h[0].length, T = 5;
  // una placa amb gruix (cantells lila) i les caselles a sobre; el número va en tinta fosca fixa (sobre clar en tots dos temes)
  const dn = p => [p[0], p[1] + T];
  let body = `<polygon points="${[P(nx, 0), P(nx, ny), dn(P(nx, ny)), dn(P(nx, 0))].map(f1).join(' ')}" fill="#B9A6CC" stroke="#8E77A6" stroke-width="1" stroke-linejoin="round"/><polygon points="${[P(0, ny), P(nx, ny), dn(P(nx, ny)), dn(P(0, ny))].map(f1).join(' ')}" fill="#A48DBB" stroke="#8E77A6" stroke-width="1" stroke-linejoin="round"/>`, pts = [dn(P(nx, ny)), dn(P(nx, 0)), dn(P(0, ny))];
  h.forEach((col, x) => col.forEach((v, y) => {
    const ps = [P(x, y), P(x + 1, y), P(x + 1, y + 1), P(x, y + 1)]; pts.push(...ps);
    const c = P(x + .5, y + .5);
    body += `<polygon points="${ps.map(f1).join(' ')}" fill="${v ? 'url(#gRuler)' : '#F1ECF5'}" stroke="#6B4F85" stroke-width="1.3" stroke-linejoin="round"/>${v ? `<text x="${c[0].toFixed(1)}" y="${(c[1] + 5.5).toFixed(1)}" text-anchor="middle" font-size="15" ${F} fill="#2B1A39">${v}</text>` : ''}`;
  }));
  const X = pts.map(p => p[0]), Y = pts.map(p => p[1]), x0 = Math.min(...X) - 3, y0 = Math.min(...Y) - 3, w = Math.max(...X) - x0 + 3, hh = Math.max(...Y) - y0 + 6;
  return `<svg class="vpic" viewBox="${x0.toFixed(1)} ${y0.toFixed(1)} ${w.toFixed(1)} ${hh.toFixed(1)}" style="width:${Math.round(w * 1.55)}px"><g filter="url(#vsh)">${body}</g></svg>`;
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
  const W = e.cols * s, H = e.rows * s, fx = new Set(e.fixed || []), an = new Set(e.ans);
  // quadern: fons lila amb vora, caselles arrodonides amb degradat (lila = ja hi era, verd = les que calia pintar)
  return `<svg class="vpic sol" viewBox="-4 -4 ${W + 8} ${H + 8}" style="width:${W + 8}px"><rect x="-3" y="-3" width="${W + 6}" height="${H + 6}" rx="5" fill="#EFE7F6" stroke="#CDBEDD" stroke-width="1.2"/>${[...Array(e.rows * e.cols).keys()].map(i => { const x = i % e.cols, y = Math.floor(i / e.cols), on = fx.has(i) || an.has(i); return `<rect x="${x * s + .8}" y="${y * s + .8}" width="${s - 1.6}" height="${s - 1.6}" rx="2.6" fill="${on ? (fx.has(i) ? 'url(#gPurple)' : 'url(#gGreen)') : '#fff'}" stroke="${on ? 'none' : '#D9CCE6'}"/>`; }).join('')}${e.axis === 'v' ? `<line x1="${W / 2}" y1="-2" x2="${W / 2}" y2="${H + 2}" stroke="#E0343B" stroke-width="2.4" stroke-linecap="round"/>` : e.axis === 'h' ? `<line x1="-2" y1="${H / 2}" x2="${W + 2}" y2="${H / 2}" stroke="#E0343B" stroke-width="2.4" stroke-linecap="round"/>` : ''}</svg>`;
}

/* --- Balances --- */
// figures amb volum: degradat del color, contorn i un reflex blanc (la forma i el color no canvien)
const VSHP = {
  c: (x, y, f) => `<circle cx="${x}" cy="${y - 11}" r="11" fill="${vgf5(f)}" stroke="${INK}" stroke-width="1.6"/><ellipse cx="${x - 4}" cy="${y - 15.5}" rx="4.2" ry="2.6" transform="rotate(-35 ${x - 4} ${y - 15.5})" fill="#fff" opacity=".6"/>`,
  t: (x, y, f) => `<polygon points="${x - 12},${y} ${x + 12},${y} ${x},${y - 22}" fill="${vgf5(f)}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M${x - 2.2} ${y - 16.5} L${x - 6.2} ${y - 9}" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>`,
  s: (x, y, f) => `<rect x="${x - 10}" y="${y - 20}" width="20" height="20" rx="4" fill="${vgf5(f)}" stroke="${INK}" stroke-width="1.6"/><rect x="${x - 6.5}" y="${y - 17.2}" width="13" height="4" rx="2" fill="#fff" opacity=".55"/>`
};
const VSHN = { c: ['cercle', 'círculo', '●'], t: ['triangle', 'triángulo', '▲'], s: ['quadrat', 'cuadrado', '■'] };
// pesa de metall amb nansa i el número en blanc
const vwgt5 = (x, y, n, g) => `<path d="M${x - 6} ${y - 20} Q${x - 6} ${y - 28} ${x} ${y - 28} Q${x + 6} ${y - 28} ${x + 6} ${y - 20}" fill="none" stroke="#5E6B78" stroke-width="3.2" stroke-linecap="round"/><path d="M${x - 15} ${y} L${x + 15} ${y} L${x + 11.5} ${y - 21} L${x - 11.5} ${y - 21} Z" fill="url(#${g})" stroke="#4A5562" stroke-width="1.6" stroke-linejoin="round"/><path d="M${x - 8.5} ${y - 18} L${x + 8.5} ${y - 18}" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".45"/><text x="${x}" y="${y - 5.5}" text-anchor="middle" font-size="${String(n).length > 1 ? 13.5 : 15}" ${F} fill="#fff">${n}</text>`;
function panItems(items, cx, y, g) {
  const k = items.length > 3 ? 1.05 : 1.2, w = 25 * k, x0 = cx - (items.length - 1) * w / 2;
  return items.map((it, i) => { const x = x0 + i * w; return `<g transform="translate(${x.toFixed(1)} ${y}) scale(${k})">${it.n != null ? vwgt5(0, 0, it.n, g) : VSHP[it.s](0, 0, it.f)}</g>`; }).join('');
}
function balanceSVG(left, right) {
  const id = 'vb5' + (++vuid5), B = 36, Y = 110, PW = 54;
  // plat penjat: fils, bol de metall i, a sobre, el que s'hi posa (amb ombra)
  const pan = (cx, items) => `<path d="M${cx} ${B + 3} L${cx - PW + 5} ${Y} M${cx} ${B + 3} L${cx + PW - 5} ${Y}" stroke="#9C88B5" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M${cx - PW} ${Y} Q${cx} ${Y + 28} ${cx + PW} ${Y} Z" fill="url(#${id}p)" stroke="#6B4F85" stroke-width="1.6" stroke-linejoin="round"/><path d="M${cx - PW} ${Y} L${cx + PW} ${Y}" stroke="#5E4A75" stroke-width="3.2" stroke-linecap="round"/><g filter="url(#vsh)">${panItems(items, cx, Y - 1, id + 'm')}</g>`;
  return `<svg class="vpic bal" viewBox="0 0 280 150" style="width:280px"><defs>${vlg5(id + 'p', '#F6F1FA', '#C3AFD7')}${vlg5(id + 'm', '#B9C3CE', '#6E7A87')}</defs>
    <ellipse cx="140" cy="145" rx="44" ry="3.6" fill="#2B1A38" opacity=".13"/>
    <rect x="134.5" y="${B}" width="11" height="100" rx="5" fill="url(#gPurple)" stroke="#4E1D68" stroke-width="1.4"/><rect x="137" y="${B + 8}" width="3" height="84" rx="1.5" fill="#fff" opacity=".35"/>
    <path d="M112 144 L168 144 Q171 144 169 141 L159 130 Q157 128 153 128 L127 128 Q123 128 121 130 L111 141 Q109 144 112 144 Z" fill="url(#gWood)" stroke="#A87437" stroke-width="1.5" stroke-linejoin="round"/>
    ${pan(58, left)}${pan(222, right)}
    <path d="M140 ${B - 4} L140 ${B - 19}" stroke="#5E4A75" stroke-width="3" stroke-linecap="round"/><circle cx="140" cy="${B - 20}" r="3.6" fill="url(#gGold)" stroke="#B07A00" stroke-width="1"/>
    <rect x="16" y="${B - 5}" width="248" height="10" rx="5" fill="url(#gPurple)" stroke="#4E1D68" stroke-width="1.5"/><rect x="24" y="${B - 3.2}" width="232" height="2.8" rx="1.4" fill="#fff" opacity=".4"/>
    <circle cx="58" cy="${B}" r="4" fill="url(#gGold)" stroke="#B07A00" stroke-width="1"/><circle cx="222" cy="${B}" r="4" fill="url(#gGold)" stroke="#B07A00" stroke-width="1"/>
    <circle cx="140" cy="${B}" r="8.5" fill="url(#gGold)" stroke="#B07A00" stroke-width="1.5"/><circle cx="137.4" cy="${B - 2.6}" r="2.6" fill="#fff" opacity=".7"/></svg>`;
}

/* --- Sèries de figures --- */
function tileSVG(t, s = 46) {
  const c = s / 2; let inner = '';
  if (t.k === 'arrow') inner = `<g transform="rotate(${t.r} ${c} ${c})"><path d="M${c} 8 L${s - 12} ${c} L${c + 5} ${c} L${c + 5} ${s - 8} L${c - 5} ${s - 8} L${c - 5} ${c} L12 ${c} Z" fill="${vgf5(t.f)}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M${c - 2} 13 L${c - 7.5} ${c - 3}" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".55"/></g>`;
  else if (t.k === 'dots') inner = [...Array(t.n).keys()].map(i => { const x = 9 + (i % 3) * 14, y = 9 + Math.floor(i / 3) * 14; return `<circle cx="${x}" cy="${y}" r="5.2" fill="${vgf5(t.f)}" stroke="${INK}" stroke-opacity=".35" stroke-width="1"/><circle cx="${x - 1.7}" cy="${y - 1.8}" r="1.6" fill="#fff" opacity=".75"/>`; }).join('');
  else inner = VSHP[t.s](c, c + 11, t.f);
  // fitxa de cartró: cantell lila a sota (com un botó) i cara blanca
  return `<svg class="vtile" viewBox="0 0 ${s} ${s}" style="width:${s}px"><rect x="1" y="3.5" width="${s - 2}" height="${s - 4.5}" rx="9" fill="#D3C3E3"/><rect x="1" y="1" width="${s - 2}" height="${s - 4.5}" rx="9" fill="url(#gPaper)" stroke="#E0D3EC" stroke-width="1.2"/>${inner}</svg>`;
}
const tkey = t => JSON.stringify(t);

/* --- Laberint --- */
function mazeSVG(w, h, rock, st, go, s = 34) {
  // tauler de joc: marc verd amb cantell, caselles d'herba, roques amb volum, el robot a la sortida i la bandera a l'arribada
  const id = 'vm5' + (++vuid5), W = w * s, H = h * s, k = (s / 27).toFixed(3);
  let b = `<defs>${vlg5(id + 'r', '#CFC3B9', '#7F6D60', .5, 1)}${vlg5(id + 'g', '#F3FCEC', '#DDF2CF')}${vlg5(id + 'h', '#E6F7DA', '#CDEBBA')}</defs>`;
  b += `<g filter="url(#vsh)"><rect x="-7" y="-4" width="${W + 14}" height="${H + 13}" rx="13" fill="#4F8F2C"/><rect x="-7" y="-7" width="${W + 14}" height="${H + 14}" rx="13" fill="url(#gLime)" stroke="#5E9E35" stroke-width="1.5"/></g>`;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, X = x * s, Y = y * s, cx = X + s / 2, cy = Y + s / 2;
    const f = i === st ? '#CFEAFB' : i === go ? '#FFF0B3' : `url(#${id}${(x + y) % 2 ? 'h' : 'g'})`;
    b += `<rect x="${X + 1.4}" y="${Y + 2.6}" width="${s - 2.8}" height="${s - 2.8}" rx="6" fill="#8CC56A" opacity=".55"/><rect x="${X + 1.4}" y="${Y + 1.4}" width="${s - 2.8}" height="${s - 2.8}" rx="6" fill="${f}"/>`;
    if (rock.has(i)) b += `<ellipse cx="${cx}" cy="${(cy + s * .3).toFixed(1)}" rx="${(s * .34).toFixed(1)}" ry="${(s * .08).toFixed(1)}" fill="#2B1A38" opacity=".2"/><path d="M${(cx - s * .36).toFixed(1)} ${(cy + s * .26).toFixed(1)} Q${(cx - s * .4).toFixed(1)} ${(cy - s * .12).toFixed(1)} ${(cx - s * .1).toFixed(1)} ${(cy - s * .3).toFixed(1)} Q${(cx + s * .22).toFixed(1)} ${(cy - s * .38).toFixed(1)} ${(cx + s * .36).toFixed(1)} ${(cy - s * .02).toFixed(1)} Q${(cx + s * .42).toFixed(1)} ${(cy + s * .24).toFixed(1)} ${(cx + s * .3).toFixed(1)} ${(cy + s * .28).toFixed(1)} Z" fill="url(#${id}r)" stroke="#5F4F44" stroke-width="1.4" stroke-linejoin="round"/><ellipse cx="${(cx - s * .1).toFixed(1)}" cy="${(cy - s * .12).toFixed(1)}" rx="${(s * .11).toFixed(1)}" ry="${(s * .06).toFixed(1)}" transform="rotate(-25 ${(cx - s * .1).toFixed(1)} ${(cy - s * .12).toFixed(1)})" fill="#fff" opacity=".5"/>`;
  }
  const at = i => `translate(${(i % w) * s + s / 2} ${Math.floor(i / w) * s + s / 2}) scale(${k})`;
  const bot = `<g transform="${at(st)}"><ellipse cx="0" cy="12" rx="9" ry="2.2" fill="#2B1A38" opacity=".2"/><path d="M0 -9 V-12.5" stroke="#5E4A75" stroke-width="1.8" stroke-linecap="round"/><circle cx="0" cy="-13.5" r="2.4" fill="url(#gRed)" stroke="#B0262C" stroke-width=".8"/><rect x="-6.5" y="3" width="13" height="8" rx="2.5" fill="url(#gBlue)" stroke="#2B1A39" stroke-width="1.3"/><rect x="-9.5" y="-9" width="19" height="13.5" rx="4.5" fill="url(#gBlue)" stroke="#2B1A39" stroke-width="1.4"/><rect x="-6.8" y="-6.4" width="13.6" height="8.4" rx="3" fill="#EAF6FF"/><circle cx="-3" cy="-2.4" r="1.7" fill="#2B1A39"/><circle cx="3" cy="-2.4" r="1.7" fill="#2B1A39"/><path d="M-2 .3 Q0 1.6 2 .3" stroke="#2B1A39" stroke-width="1" fill="none" stroke-linecap="round"/></g>`;
  const flag = `<g transform="${at(go)}"><ellipse cx="-3" cy="11.5" rx="7" ry="2" fill="#2B1A38" opacity=".22"/><path d="M-4 11 V-11" stroke="#5E4A75" stroke-width="2.4" stroke-linecap="round"/><path d="M-3 -11 L10 -6.5 L-3 -2 Z" fill="url(#gRed)" stroke="#B0262C" stroke-width="1.2" stroke-linejoin="round"/><circle cx="-4" cy="-11.8" r="2" fill="url(#gGold)" stroke="#B07A00" stroke-width=".6"/></g>`;
  return `<svg class="vpic" viewBox="-9 -9 ${W + 18} ${H + 24}" style="width:${W + 18}px">${b}${bot}${flag}</svg>`;
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
    // la resposta es plega si i només si NO és la variant «NO es pot plegar»
    const right = netSet(!neg, 1)[0], wrong = netSet(neg, 3);
    return mc(neg ? L('Quin d\'aquests desplegaments <b>NO</b> es pot plegar per fer un cub?', '¿Cuál de estos desarrollos <b>NO</b> se puede plegar para hacer un cubo?') : L('Quin d\'aquests desplegaments es pot plegar per fer un <b>cub</b>?', '¿Cuál de estos desarrollos se puede plegar para hacer un <b>cubo</b>?'), polySVG(right, col, 19), wrong.map(p => polySVG(p, col, 19)), { pics: true, vis: `<div class="bigemo">🎲</div>`, ex: L('Imagina que plegues les cares: en un cub cada cara ha de quedar en un lloc diferent. Si dues cares es trepitgen o hi ha un bloc de 2 × 2, no funciona.', 'Imagina que pliegas las caras: en un cubo cada cara tiene que quedar en un sitio diferente. Si dos caras se pisan o hay un bloque de 2 × 2, no funciona.') });
  },
  'v.rot': (L_, a) => {
    const n = lvN(a), sz = n <= 3 ? 4 : n <= 6 ? 5 : 6, col = pick(VCOL);
    let p; for (let g = 0; g < 200; g++) { p = growPoly(sz, 4, 4); if (canonR(p) !== canonR(pmir(p))) break; }
    const R = rots(p), k = ri(1, 3), right = R[k], mk = new Set([pkey(right)]), wrong = [];
    shuffle(rots(pmir(p))).forEach(m => { const kk = pkey(m); if (!mk.has(kk) && wrong.length < 3) { mk.add(kk); wrong.push(m); } });
    return mc(L('Quina figura és <b>la mateixa</b>, només girada? (Les altres estan girades com en un mirall.)', '¿Qué figura es <b>la misma</b>, solo girada? (Las otras están giradas como en un espejo.)'), polySVG(right, col, 19), wrong.map(m => polySVG(m, col, 19)), { pics: true, vis: polySVG(p, col, 28), ex: L(`La figura correcta és l'original girada ${k * 90}°. Les altres només surten si la gires del revés, com en un mirall.`, `La figura correcta es la original girada ${k * 90}°. Las otras solo salen si le das la vuelta, como en un espejo.`) });
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
      const d = n <= 2 ? 1 : ri(1, 2), s0 = d === 2 ? 1 : ri(1, 2), f = pick(VCOL);   // la fitxa en mostra com a molt 9
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
