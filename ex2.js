/* ===== Exercicis nous: 1r-3r i 5è-6è ===== */
const F = 'font-family="Nunito,sans-serif" font-weight="800"';
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;
const fmtD = x => { const neg = x < 0; let [i, f] = String(+Math.abs(x).toFixed(3)).split('.'); return (neg ? '−' : '') + fmt(+i) + (f ? ',' + f : ''); };
const fmtDf = (x, d) => { let [i, f] = Math.abs(x).toFixed(d).split('.'); return (x < 0 ? '−' : '') + fmt(+i) + (f ? ',' + f : ''); };
const ninp = (q, ans, o = {}) => inp(q, ans, { neg: true, ...o });
const dinp = (q, ans, o = {}) => inp(q, +ans.toFixed(3), { dec: true, ...o });
const emRow = (em, n, out = 0) => `<span class="emrow">${Array(n).fill(0).map((_, i) => `<span class="${i >= n - out ? 'out' : ''}">${em}</span>`).join('')}</span>`;
const sup = n => String(n).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('');

/* --- Visuals nous --- */
function blocksSVG(n) {
  const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10, c = 9, H = 10 * c;
  let x = 4, s = '';
  const grid = (x0, w, hgt) => { let p = ''; for (let i = 1; i < w / c; i++) p += `M${x0 + i * c} 4v${hgt}`; for (let j = 1; j < hgt / c; j++) p += `M${x0} ${4 + j * c}h${w}`; return p; };
  for (let i = 0; i < h; i++) { s += `<rect x="${x}" y="4" width="${H}" height="${H}" rx="2" fill="url(#gBlue)" stroke="#1B6FA3" stroke-width="1.5"/><path d="${grid(x, H, H)}" stroke="rgba(255,255,255,.45)" stroke-width="1"/>`; x += H + 10; }
  for (let i = 0; i < t; i++) { s += `<rect x="${x}" y="4" width="${c}" height="${H}" rx="2" fill="url(#gGreen)" stroke="#1F8A48" stroke-width="1.5"/><path d="${grid(x, c, H)}" stroke="rgba(255,255,255,.5)" stroke-width="1"/>`; x += c + 5; }
  if (t && u) x += 6;
  for (let i = 0; i < u; i++) { const col = Math.floor(i / 5), row = i % 5; s += `<rect x="${x + col * (c + 4)}" y="${4 + H - (row + 1) * (c + 3) + 3}" width="${c}" height="${c}" rx="1.5" fill="url(#gOrange)" stroke="#C4661A" stroke-width="1.2"/>`; }
  if (u) x += Math.ceil(u / 5) * (c + 4);
  const W = x + 4;
  return `<svg viewBox="0 0 ${W} ${H + 8}" class="blocks" style="width:${Math.min(W * 2.3, 360)}px">${s}</svg>`;
}
function rulerSVG(a, b, max) {
  const px = 22, W = max * px + 40, x0 = 20 + a * px, x1 = 20 + b * px;
  let s = `<svg viewBox="0 0 ${W} 118" class="ruler" style="width:${Math.min(W * 1.2, 400)}px">`;
  s += `<line x1="${x0}" y1="42" x2="${x0}" y2="54" stroke="#B9A6CB" stroke-width="2" stroke-dasharray="3 3"/><line x1="${x1}" y1="42" x2="${x1}" y2="54" stroke="#B9A6CB" stroke-width="2" stroke-dasharray="3 3"/>`;
  s += `<rect x="${x0}" y="16" width="${x1 - x0 - 18}" height="22" rx="3" fill="url(#gYellow)"/><rect x="${x0}" y="16" width="${x1 - x0 - 18}" height="6" rx="3" fill="rgba(255,255,255,.35)"/>`;
  s += `<polygon points="${x1 - 18},16 ${x1},27 ${x1 - 18},38" fill="#F6D7A7"/><polygon points="${x1 - 6},23.5 ${x1},27 ${x1 - 6},30.5" fill="${INK}"/><rect x="${x0}" y="16" width="12" height="22" rx="3" fill="#FF7AA8"/><rect x="${x0 + 12}" y="16" width="5" height="22" fill="#D9D9D9"/>`;
  s += `<rect x="6" y="54" width="${W - 12}" height="56" rx="8" fill="url(#gRuler)" stroke="#D9A93A" stroke-width="2"/>`;
  for (let i = 0; i <= max * 2; i++) { const x = 20 + i * px / 2, big = i % 2 === 0; s += `<line x1="${x}" y1="54" x2="${x}" y2="${big ? 72 : 64}" stroke="#7A5A10" stroke-width="${big ? 2 : 1.2}"/>`; if (big) s += `<text x="${x}" y="90" text-anchor="middle" font-size="13" ${F} fill="#7A5A10">${i / 2}</text>`; }
  return s + `<text x="${W - 16}" y="104" text-anchor="end" font-size="11" ${F} fill="#A07B20">cm</text></svg>`;
}
function thermoSVG(t) {
  const y = v => 16 + (30 - v) * 4;
  let s = `<svg viewBox="0 0 130 210" class="thermo">`;
  for (let v = -10; v <= 30; v++) { const big = v % 5 === 0; s += `<line x1="62" y1="${y(v)}" x2="${big ? 76 : 70}" y2="${y(v)}" stroke="${v === 0 ? '#1C84C6' : INK}" stroke-width="${big ? 2 : 1}"/>`; if (big) s += `<text x="80" y="${y(v) + 4}" font-size="12" ${F} fill="${v === 0 ? '#1C84C6' : INK}">${v < 0 ? '−' + (-v) : v}</text>`; }
  s += `<rect x="38" y="8" width="22" height="${y(-10) - 8 + 14}" rx="11" fill="#fff" stroke="#CFC3DB" stroke-width="3"/>`;
  s += `<rect x="44" y="${y(t)}" width="10" height="${y(-10) - y(t) + 20}" rx="5" fill="url(#gRed)"/>`;
  s += `<circle cx="49" cy="${y(-10) + 30}" r="17" fill="url(#gRed)" stroke="#CFC3DB" stroke-width="3"/><circle cx="44" cy="${y(-10) + 25}" r="5" fill="rgba(255,255,255,.5)"/>`;
  return s + '</svg>';
}
function barsSVG(labels, vals, title) {
  const max = Math.max(...vals), top = Math.ceil((max + 1) / 2) * 2, W = 320, H = 210, x0 = 34, y0 = 170, bw = 44, gap = (W - x0 - 10 - labels.length * bw) / labels.length;
  let s = `<svg viewBox="0 0 ${W} ${H}" class="bars"><text x="${W / 2}" y="16" text-anchor="middle" font-size="13" ${F} fill="${INK}">${title}</text>`;
  for (let v = 0; v <= top; v++) { const yy = y0 - v / top * 140; s += `<line x1="${x0}" y1="${yy}" x2="${W - 6}" y2="${yy}" stroke="${v % 2 ? '#F4EEF8' : '#E6DCEF'}" stroke-width="1.5"/><text x="${x0 - 6}" y="${yy + 4}" text-anchor="end" font-size="${v % 2 ? 9 : 11}" ${F} fill="#8A7B99">${v}</text>`; }
  labels.forEach((l, i) => {
    const x = x0 + gap / 2 + i * (bw + gap), hh = vals[i] / top * 140;
    s += `<rect x="${x}" y="${y0 - hh}" width="${bw}" height="${hh}" rx="6" fill="${COLS[i % COLS.length]}"/><rect x="${x + 5}" y="${y0 - hh + 4}" width="8" height="${Math.max(0, hh - 10)}" rx="4" fill="rgba(255,255,255,.3)"/>`;
    s += `<text x="${x + bw / 2}" y="${y0 + 26}" text-anchor="middle" font-size="${l.length > 3 ? 13 : 22}" ${F} fill="${INK}">${l}</text>`;
  });
  return s + `<line x1="${x0}" y1="${y0}" x2="${W - 6}" y2="${y0}" stroke="${INK}" stroke-width="2"/></svg>`;
}
function angleSVG(deg) {
  const vx = deg > 100 ? 140 : 60, vy = 150, r1 = 150, r2 = 130, a = deg * Math.PI / 180;
  const ex = vx + r2 * Math.cos(a), ey = vy - r2 * Math.sin(a), ar = 34;
  let s = `<svg viewBox="0 0 260 170" class="vsvg wide">`;
  if (deg === 90) s += `<path d="M${vx + 26} ${vy} V${vy - 26} H${vx}" fill="rgba(255,154,60,.25)" stroke="#FF9A3C" stroke-width="3"/>`;
  else s += `<path d="M${vx} ${vy} L${vx + ar} ${vy} A${ar} ${ar} 0 ${deg > 180 ? 1 : 0} 0 ${vx + ar * Math.cos(a)} ${vy - ar * Math.sin(a)} Z" fill="rgba(255,154,60,.25)" stroke="#FF9A3C" stroke-width="3"/>`;
  s += `<line x1="${vx}" y1="${vy}" x2="${Math.min(250, vx + r1)}" y2="${vy}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`;
  s += `<line x1="${vx}" y1="${vy}" x2="${ex}" y2="${ey}" stroke="#602B7A" stroke-width="5" stroke-linecap="round"/><circle cx="${vx}" cy="${vy}" r="6" fill="${INK}"/>`;
  return s + '</svg>';
}
function gridSVG(w, h) {
  const c = 24, W = w * c + 8, H = h * c + 8;
  let s = `<svg viewBox="0 0 ${W + 60} ${H + 8}" class="vsvg wide"><rect x="4" y="4" width="${W - 8}" height="${H - 8}" fill="url(#gTeal)" rx="3"/>`;
  for (let i = 0; i <= w; i++) s += `<line x1="${4 + i * c}" y1="4" x2="${4 + i * c}" y2="${H - 4}" stroke="#fff" stroke-width="2"/>`;
  for (let j = 0; j <= h; j++) s += `<line x1="4" y1="${4 + j * c}" x2="${W - 4}" y2="${4 + j * c}" stroke="#fff" stroke-width="2"/>`;
  return s + `<rect x="${W + 14}" y="${H / 2 - 12}" width="24" height="24" fill="url(#gTeal)" stroke="#fff" stroke-width="2"/><text x="${W + 26}" y="${H / 2 + 30}" text-anchor="middle" font-size="11" ${F} fill="#8A7B99">= 1</text></svg>`;
}
function triSVG(b, h) {
  const sc = Math.min(180 / b, 110 / h), W = b * sc, H = h * sc, x = 30, y = 20, px = x + W * .35;
  return `<svg viewBox="0 0 260 170" class="vsvg wide"><polygon points="${x},${y + H} ${x + W},${y + H} ${px},${y}" fill="url(#gTeal)" stroke="#12806F" stroke-width="3" stroke-linejoin="round"/>
  <line x1="${px}" y1="${y}" x2="${px}" y2="${y + H}" stroke="${INK}" stroke-width="2" stroke-dasharray="5 4"/><path d="M${px} ${y + H - 10}h10v10" fill="none" stroke="${INK}" stroke-width="1.5"/>
  <text x="${x + W / 2}" y="${y + H + 22}" text-anchor="middle" font-size="15" ${F} fill="${INK}">${b} cm</text><text x="${px + 8}" y="${y + H / 2}" font-size="15" ${F} fill="${INK}">${h} cm</text></svg>`;
}
function cubesSVG(a, b, c, labels) {
  const s = 20, ix = (x, y) => (x - y) * s * .87, iy = (x, y, z) => (x + y) * s * .5 - z * s, cubes = [];
  for (let z = 0; z < c; z++) for (let y = 0; y < b; y++) for (let x = 0; x < a; x++) cubes.push([x, y, z]);
  cubes.sort((p, q) => (p[0] + p[1]) - (q[0] + q[1]) || p[2] - q[2]);
  const ox = b * s * .87 + 30, oy = c * s + 20;
  const P = (x, y, z) => `${(ox + ix(x, y)).toFixed(1)},${(oy + iy(x, y, z)).toFixed(1)}`;
  let out = '';
  cubes.forEach(([x, y, z]) => {
    out += `<polygon points="${P(x, y, z + 1)} ${P(x + 1, y, z + 1)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}" fill="#8FD8FF" stroke="#1B6FA3" stroke-width="1.2"/>`;
    out += `<polygon points="${P(x, y + 1, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}" fill="#36A9E1" stroke="#1B6FA3" stroke-width="1.2"/>`;
    out += `<polygon points="${P(x + 1, y, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x + 1, y, z + 1)}" fill="#1E86BE" stroke="#1B6FA3" stroke-width="1.2"/>`;
  });
  const W = ox + a * s * .87 + 40, H = oy + (a + b) * s * .5 + 30;
  let lab = '';
  if (labels) {
    const m = (p, q) => { const [x1, y1] = p.split(',').map(Number), [x2, y2] = q.split(',').map(Number); return [(x1 + x2) / 2, (y1 + y2) / 2]; };
    const [ax, ay] = m(P(0, b, 0), P(a, b, 0)), [bx, by] = m(P(a, 0, 0), P(a, b, 0)), [cx, cy] = m(P(a, 0, 0), P(a, 0, c));
    lab = `<text x="${ax - 10}" y="${ay + 22}" font-size="14" ${F} fill="${INK}">${a} cm</text><text x="${bx + 8}" y="${by + 16}" font-size="14" ${F} fill="${INK}">${b} cm</text><text x="${cx + 8}" y="${cy}" font-size="14" ${F} fill="${INK}">${c} cm</text>`;
  }
  return `<svg viewBox="0 0 ${W + 30} ${H}" class="cubes">${out}${lab}</svg>`;
}

/* --- Generadors --- */
const TXT_SHARE = () => { const [em, nm, g] = pick(SHARE); return { em, nm, Q: g === 'f' ? 'Quantes' : 'Quants' }; };
Object.assign(EX, {
  'g.count': (L, A) => {
    const max = +A || 10, [em, nm] = pick(EMS), n = ri(Math.min(3, max), max);
    return inp(`Quantes ${nm} hi ha?`, n, { vis: emGrid(em, n, 5), ex: `Compta-les de 5 en 5: 5, 10… N'hi ha ${n}.` });
  },
  'g.next': (L, A) => {
    const max = +A || 20, v = L >= 3 ? ri(0, 2) : ri(0, 1);
    if (v === 2) { const n = ri(1, max - 1); return inp(`Quin número va <b>entre</b> ${fmt(n - 1)} i ${fmt(n + 1)}?`, n, { vis: `<div class="seq"><span>${fmt(n - 1)}</span>${BOX}<span>${fmt(n + 1)}</span></div>`, ex: `${fmt(n - 1)}, ${fmt(n)}, ${fmt(n + 1)}.` }); }
    const after = v === 0, n = after ? ri(0, max - 1) : ri(1, max), ans = after ? n + 1 : n - 1;
    return inp(`Quin número va just <b>${after ? 'després' : 'abans'}</b> de ${fmt(n)}?`, ans, { vis: `<div class="seq">${after ? `<span>${fmt(n)}</span>${BOX}` : `${BOX}<span>${fmt(n)}</span>`}</div>`, ex: after ? `Després de ${fmt(n)} ve ${fmt(ans)}.` : `Abans de ${fmt(n)} hi ha ${fmt(ans)}.` });
  },
  'g.cmp': (L, A) => {
    const max = +A || 20, x = ri(0, max); let y;
    if (Math.random() < .15) y = x; else if (max >= 100 && Math.random() < .5) { y = Math.min(max, x - x % 10 + ri(0, 9)); } else y = ri(0, max);
    const sym = x < y ? '<' : x > y ? '>' : '=';
    return mc('Quin signe hi va?', sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${fmt(x)}</span>${BOX}<span>${fmt(y)}</span></div>`, ex: x === y ? 'Són iguals!' : `${fmt(Math.max(x, y))} és més gran que ${fmt(Math.min(x, y))}. La boca del cocodril sempre s'obre cap al més gran! 🐊` });
  },
  'g.blocks': (L, A) => {
    const max = +A || 100, n = ri(max <= 20 ? 10 : max <= 100 ? 11 : 101, max - 1), h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    const parts = [h && `${h} centenes`, t && `${t} desenes`, u && `${u} unitats`].filter(Boolean).join(', ');
    if (L >= 3 && max <= 100 && Math.random() < .4) return inp(`Quantes <b>desenes</b> té el número ${n}?`, t, { vis: blocksSVG(n), ex: `${n} té ${t} desenes i ${u} unitats. Cada barra és una desena.` });
    return inp('Quin número formen els blocs?', n, { vis: `<div class="stack">${blocksSVG(n)}<div class="legend">${max > 100 ? 'Placa = 100 · ' : ''}Barra = 10 · Cub = 1</div></div>`, ex: `${parts} → ${fmt(n)}.` });
  },
  'g.words': (L, A) => {
    const max = +A || 100, n = ri(max > 100 ? 101 : 11, max - 1);
    if (Math.random() < .5) return inp('Escriu amb xifres:', n, { vis: `<div class="words">${numToCa(n)}</div>`, ex: `«${numToCa(n)}» = ${fmt(n)}` });
    return mc('Com es llegeix aquest número?', numToCa(n), variants(n).map(numToCa), { vis: bigNum(fmt(n)), list: true, ex: `${fmt(n)} es llegeix «${numToCa(n)}».` });
  },
  'g.add': (L, A) => {
    const max = +A || 20; let x, y;
    if (max <= 10) {
      x = ri(1, max - 1); y = ri(1, max - x);
      if (L <= 1) { const [em] = pick(EMS); return inp("Quantes n'hi ha en total?", x + y, { vis: `<div class="plus">${emRow(em, x)}<b>+</b>${emRow(em, y)}</div>`, ex: `${x} + ${y} = ${x + y}.` }); }
      return inp('Quant fa?', x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `Comença pel més gran (${Math.max(x, y)}) i compta ${Math.min(x, y)} més: ${x + y}.` });
    }
    if (max <= 20) {
      if (L >= 5) { x = ri(2, 12); const s = ri(x + 2, 20); return inp('Quin número falta?', s - x, { vis: eqv(`${x} + ${BOX} = ${s}`), ex: `De ${x} a ${s} hi ha ${s - x}: ${x} + ${s - x} = ${s}.` }); }
      if (L >= 3) { x = ri(5, 9); y = ri(11 - x, 9); return inp('Quant fa?', x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `Fes desena: ${x} + ${10 - x} = 10, i 10 + ${y - (10 - x)} = ${x + y}.` }); }
      x = ri(10, 15); y = ri(1, 19 - x); if (Math.random() < .5) [x, y] = [y, x];
      return inp('Quant fa?', x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `${x} + ${y} = ${x + y}.` });
    }
    if (L <= 1) { x = ri(1, 7) * 10; y = ri(1, 9 - x / 10) * 10; return inp('Quant fa?', x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `${x / 10} desenes + ${y / 10} desenes = ${(x + y) / 10} desenes = ${x + y}.` }); }
    if (L <= 3) return EX['a.add'](L === 2 ? 1 : 2);
    if (L === 4) { x = ri(15, 68); y = ri(12, 99 - x); return inp('Fes la suma:', x + y, { vis: colOp(x, y, '+'), ex: `Suma les unitats i després les desenes (sense oblidar les que et portes): ${x} + ${y} = ${x + y}.` }); }
    return EX['a.missing'](1);
  },
  'g.sub': (L, A) => {
    const max = +A || 20; let x, y;
    if (max <= 10) {
      x = ri(3, 10); y = ri(1, x - 1);
      if (L <= 1) { const [em, nm] = pick(EMS); return inp(`Hi havia ${x} ${nm} i se n'han anat ${y}. Quantes en queden?`, x - y, { vis: emRow(em, x, y), ex: `${x} − ${y} = ${x - y}.` }); }
      return inp('Quant fa?', x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `Compta enrere ${y} des del ${x}: ${x - y}.` });
    }
    if (max <= 20) {
      if (L >= 5) { x = ri(11, 20); const r = ri(2, x - 2); return inp('Quin número falta?', x - r, { vis: eqv(`${x} − ${BOX} = ${r}`), ex: `Quant hi ha del ${r} al ${x}? ${x} − ${r} = ${x - r}.` }); }
      if (L >= 3) { x = ri(11, 18); y = ri(x - 9, 9); return inp('Quant fa?', x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `Baixa fins a 10: ${x} − ${x - 10} = 10, i 10 − ${y - (x - 10)} = ${x - y}.` }); }
      x = ri(11, 19); y = ri(1, x - 10); return inp('Quant fa?', x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `${x} − ${y} = ${x - y}.` });
    }
    if (L <= 1) { x = ri(3, 9) * 10; y = ri(1, x / 10 - 1) * 10; return inp('Quant fa?', x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `${x / 10} desenes − ${y / 10} desenes = ${(x - y) / 10} desenes = ${x - y}.` }); }
    if (L <= 3) return EX['a.sub'](L === 2 ? 1 : 2);
    if (L === 4) { x = ri(41, 98); y = ri(12, x - 10); return inp('Fes la resta:', x - y, { vis: colOp(x, y, '−'), ex: `Si a les unitats no en tens prou, demana una desena. Comprova-ho: ${x - y} + ${y} = ${x}.` }); }
    return EX['a.missing'](1);
  },
  'g.double': (L, A) => {
    const n = ri(1, +A || 10);
    if (Math.random() < .5) return inp(`Quin és el <b>doble</b> de ${n}?`, 2 * n, { vis: n <= 6 ? `<div class="plus">${emRow('🍪', n)}<b>+</b>${emRow('🍪', n)}</div>` : '', ex: `El doble és sumar-lo dues vegades: ${n} + ${n} = ${2 * n}.` });
    return inp(`Quina és la <b>meitat</b> de ${2 * n}?`, n, { ex: `La meitat és partir en dues parts iguals: ${n} + ${n} = ${2 * n}, així que la meitat és ${n}.` });
  },
  'g.repeat': L => {
    const g = ri(2, 5), k = ri(2, L <= 1 ? 5 : 6), [em, nm] = pick(EMS);
    const vis = `<div class="groups">${Array(g).fill(`<span class="grp">${Array(k).fill(em).join('')}</span>`).join('')}</div>`;
    if (Math.random() < .5) return inp(`Hi ha ${g} grups de ${k} ${nm}. Quantes ${nm} hi ha en total?`, g * k, { vis, ex: `${Array(g).fill(k).join(' + ')} = ${g * k}. És el mateix que ${g} × ${k}.` });
    return mc(`Quina multiplicació és igual a ${Array(g).fill(k).join(' + ')}?`, `${g} × ${k}`, [`${g} + ${k}`, `${g + 1} × ${k}`, `${g} × ${k + 1}`], { vis, ex: `Sumem el ${k} ${g} vegades: ${g} × ${k} = ${g * k}.` });
  },
  'g.table': (L, A) => {
    const t = pick((A || '2-5-10').split('-').map(Number)), b = ri(1, 10), p = t * b, sw = Math.random() < .5, x = sw ? b : t, y = sw ? t : b;
    if (Math.random() < .3) return mc('Quant fa?', p, [p + t, Math.max(1, p - t), x + y, p + 1], { vis: eqv(`${x} × ${y}`), ex: mulTip(t, b) });
    return inp('Quant fa?', p, { vis: eqv(`${x} × ${y} = ${BOX}`), ex: mulTip(t, b) });
  },
  'g.clock': (L, A) => clockEx(A || 'o'),
  'g.coins': (L, A) => {
    const max = (+A || 10) * 100, pool = max <= 1000 ? [100, 200, 500] : max <= 2000 ? [100, 200, 500, 1000] : [100, 200, 500, 1000, 2000];
    let cs, tot;
    do { cs = [...Array(ri(2, 4))].map(() => pick(pool)).sort((a, b) => b - a); tot = cs.reduce((a, b) => a + b, 0); } while (tot > max);
    return inp('Quants euros hi ha?', tot / 100, { unit: '€', vis: moneyVis(cs), ex: `${cs.map(c => c / 100).join(' + ')} = ${tot / 100} €.` });
  },
  'g.ruler': (L, A) => {
    const max = +A || 10;
    if (L >= 3) { const s = ri(1, 4), e = ri(s + 2, max); return inp('Quant fa el llapis? Compte: no comença al zero!', e - s, { unit: 'cm', vis: rulerSVG(s, e, max), ex: `Va del ${s} al ${e}: ${e} − ${s} = ${e - s} cm.` }); }
    const e = ri(2, max);
    return inp('Quant fa el llapis?', e, { unit: 'cm', vis: rulerSVG(0, e, max), ex: `Comença al 0 i acaba al ${e}: fa ${e} cm.` });
  },
  'g.shape': (L, A) => shapeEx(A === 'simple' ? SHP.filter(s => ['triangle', 'quadrat', 'rectangle', 'cercle'].includes(s[0])) : SHP),
  'g.seq': (L, A) => {
    const step = A === 'tens' ? 10 : +A || 2, start = step === 10 ? ri(0, 4) * 10 + (L >= 3 ? ri(1, 9) : 0) : ri(0, 20);
    const arr = [0, 1, 2, 3, 4].map(i => start + i * step), miss = L <= 1 ? 4 : ri(1, 4);
    return inp('Quin número falta?', arr[miss], { vis: `<div class="seq">${arr.map((v, i) => i === miss ? BOX : `<span>${v}</span>`).join('')}</div>`, ex: `Comptem de ${step} en ${step}: ${arr.join(', ')}.` });
  },
  'g.prob': (L, A) => {
    const lim = L <= 2 ? 10 : 20, N = nomP(), M = nomP(), { em, nm, Q } = TXT_SHARE();
    if (A === 'mul') { const k = pick([2, 5, 10]), g = ri(2, 6); return inp(`En una capsa hi ha ${k} ${nm}. ${Q} ${nm} hi ha en ${g} capses?`, g * k, { long: true, ex: `${g} capses de ${k}: ${g} × ${k} = ${g * k}.` }); }
    if (A === 'sub') { const x = ri(30, 90), y = ri(10, x - 5); return inp(`A l'excursió hi van ${x} nens i nenes. ${y} tornen amb autobús i la resta, caminant. Quants tornen caminant?`, x - y, { long: true, ex: `«La resta» vol dir restar: ${x} − ${y} = ${x - y}.` }); }
    if (A === 'cmp') { const x = ri(4, lim), y = ri(1, x - 1); return inp(`${N.C} té ${x} ${nm} i ${M.c} en té ${y}. ${Q} ${nm} més té ${N.c}?`, x - y, { long: true, ex: `Per saber quantes més, restem: ${x} − ${y} = ${x - y}.` }); }
    if (A === 'less') { const x = ri(4, lim), y = ri(1, x - 1); return inp(`${N.C} té ${x} ${nm} i en regala ${y}. ${Q} ${nm} li queden?`, x - y, { long: true, vis: lim <= 10 ? emRow(em, x, y) : '', ex: `Regalar vol dir treure: ${x} − ${y} = ${x - y}.` }); }
    const x = ri(1, lim - 2), y = ri(1, lim - x);
    return inp(`${N.C} té ${x} ${nm} i n'hi donen ${y} més. ${Q} ${nm} té ara?`, x + y, { long: true, vis: lim <= 10 ? `<div class="plus">${emRow(em, x)}<b>+</b>${emRow(em, y)}</div>` : '', ex: `Li'n donen més: sumem. ${x} + ${y} = ${x + y}.` });
  },

  /* ---- Decimals ---- */
  'dec.read': L => {
    let i, d1, d2; do { i = ri(1, 9); d1 = ri(0, 9); d2 = ri(1, 9); } while (new Set([i, d1, d2]).size < 3);
    const x = i + d1 / 10 + d2 / 100, s = fmtDf(x, 2), c = d1 * 10 + d2, v = Math.random();
    const un = n => n === 1 ? 'unitat' : 'unitats', ce = n => n === 1 ? 'centèsima' : 'centèsimes';
    if (v < .4) { const pl = pick([['dècimes', d1], ['centèsimes', d2], ['unitats', i]]); return mc(`Quina xifra hi ha a les <b>${pl[0]}</b>?`, pl[1], [i, d1, d2], { big: true, vis: bigNum(s), ex: `A ${s}: ${i} unitats, ${d1} dècimes i ${d2} centèsimes. Després de la coma, primer van les dècimes.` }); }
    if (v < .7 || L <= 1) return mc('Com es llegeix?', `${i} ${un(i)} i ${c} ${ce(c)}`, [`${i} ${un(i)} i ${d2 * 10 + d1} ${ce(d2 * 10 + d1)}`, `${c} ${un(c)} i ${i} ${ce(i)}`, `${i} ${un(i)} i ${d1} dècimes`], { vis: bigNum(s), list: true, ex: `${s} = ${i} ${un(i)} i ${c} ${ce(c)} (dues xifres després de la coma → centèsimes).` });
    return dinp(`Escriu el número: <b>${i} ${un(i)}, ${d1} dècimes i ${d2} centèsimes</b>`, x, { ex: `${i} unitats → ${i}; ${d1} dècimes → 0,${d1}; ${d2} centèsimes → 0,0${d2}. Total: ${s}.` });
  },
  'dec.cmp': L => {
    const i = ri(0, 9), a = i + ri(1, 9) / 10; let b = Math.random() < .15 ? a : i + ri(1, 99) / 100;
    if (Math.abs(a - b) < 1e-9) b = a;
    const sym = a < b - 1e-9 ? '<' : a > b + 1e-9 ? '>' : '=', sa = fmtDf(a, 1), sb = b === a ? fmtDf(b, 2) : fmtD(b);
    return mc('Quin signe hi va?', sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${sa}</span>${BOX}<span>${sb}</span></div>`, ex: `Truc: posa el mateix nombre de decimals. ${fmtDf(a, 2)} ${sym} ${fmtDf(b, 2)}.` });
  },
  'dec.order': L => {
    const i = ri(0, 9), set = new Set(); while (set.size < 4) set.add(+(i + (Math.random() < .5 ? ri(1, 9) / 10 : ri(1, 99) / 100)).toFixed(2));
    const vals = [...set], ans = vals.slice().sort((x, y) => x - y);
    return { type: 'order', q: 'Toca els números de <b>més petit a més gran</b>:', items: shuffle(vals), labels: null, show: fmtD, ans, ex: `Amb dos decimals tots: ${ans.map(v => fmtDf(v, 2)).join(' < ')}.` };
  },
  'dec.add': L => {
    const d = L <= 2 ? 1 : 2, m = 10 ** d, A = ri(L <= 2 ? 11 : 105, L <= 3 ? 99 * m / 10 : 999 * m / 10), B = ri(5, A - 1), add = Math.random() < .5;
    const r = add ? A + B : A - B, sa = fmtDf(A / m, d), sb = fmtDf(B / m, d);
    return dinp(`Fes ${add ? 'la suma' : 'la resta'}:`, r / m, { vis: colOp(sa, sb, add ? '+' : '−'), ex: `Posa les comes una sota l'altra i opera com sempre: ${sa} ${add ? '+' : '−'} ${sb} = ${fmtDf(r / m, d)}.` });
  },
  'dec.x10': L => {
    const x = ri(1, 999) / pick([10, 100]), m = pick([10, 100, 1000]), mul = L < 3 || Math.random() < .5, k = String(m).length - 1;
    const r = mul ? x * m : x / m;
    return dinp('Quant fa?', r, { vis: eqv(`${fmtD(x)} ${mul ? '×' : '÷'} ${fmt(m)} = ${BOX}`), ex: `${mul ? 'Multiplicar' : 'Dividir'} per ${fmt(m)} és moure la coma ${['', 'un lloc', 'dos llocs', 'tres llocs'][k]} cap a la ${mul ? 'dreta' : 'esquerra'}: ${fmtD(r)}.` });
  },
  'dec.mul': L => {
    if (L <= 2 || Math.random() < .5) { const a = ri(5, 99) / 10, b = ri(2, 9), r = a * b; return dinp('Fes la multiplicació:', r, { vis: eqv(`${fmtD(a)} × ${b} = ${BOX}`), ex: `Multiplica sense la coma (${Math.round(a * 10)} × ${b} = ${Math.round(r * 10)}) i després posa-hi un decimal: ${fmtD(r)}.` }); }
    const q = ri(11, 99) / 10, b = ri(2, 6), a = +(q * b).toFixed(1);
    return dinp('Fes la divisió:', q, { vis: eqv(`${fmtD(a)} ÷ ${b} = ${BOX}`), ex: `Divideix com sempre i, quan arribis a la coma, posa-la al resultat: ${fmtD(a)} ÷ ${b} = ${fmtD(q)}. Comprova-ho: ${fmtD(q)} × ${b} = ${fmtD(a)}.` });
  },
  'div2': L => {
    const d = ri(11, 25), q = ri(2, L >= 4 ? 40 : 15), a = d * q;
    return inp('Fes la divisió:', q, { vis: eqv(`${fmt(a)} ÷ ${d} = ${BOX}`), ex: `Estima: ${d} és a prop de ${Math.round(d / 10) * 10}, i prova. Comprova-ho: ${d} × ${q} = ${fmt(a)}.` });
  },
  'ops': L => {
    const a = ri(2, 9), b = ri(2, 9), c = ri(2, 9), d = ri(2, 6);
    const T = [
      [`${a} + ${b} × ${c}`, a + b * c, `Primer la multiplicació: ${b} × ${c} = ${b * c}. Després: ${a} + ${b * c} = ${a + b * c}.`],
      [`(${a} + ${b}) × ${c}`, (a + b) * c, `Primer el parèntesi: ${a} + ${b} = ${a + b}. Després: ${a + b} × ${c} = ${(a + b) * c}.`],
      [`${a * c + 10} − ${a} × ${c}`, 10, `Primer la multiplicació: ${a} × ${c} = ${a * c}. Després: ${a * c + 10} − ${a * c} = 10.`],
      [`${a} × ${b} − ${c} × ${d}`, a * b - c * d, `Primer les dues multiplicacions: ${a * b} i ${c * d}. Després: ${a * b} − ${c * d} = ${a * b - c * d}.`],
      [`${a} + ${b * d} ÷ ${d}`, a + b, `Primer la divisió: ${b * d} ÷ ${d} = ${b}. Després: ${a} + ${b} = ${a + b}.`]
    ].filter(t => t[1] >= 0);
    const [e, ans, ex] = pick(T.slice(0, Math.max(2, Math.min(T.length, L + 1))));
    return inp('Quant fa? Recorda: primer parèntesis, després × i ÷, i al final + i −.', ans, { vis: eqv(`${e} = ${BOX}`), ex });
  },

  /* ---- Múltiples i divisors ---- */
  'mult.mul': L => {
    const k = ri(3, 9), c = k * ri(2, L >= 3 ? 12 : 10), dis = new Set();
    while (dis.size < 3) { const v = c + ri(-k + 1, k - 1); if (v > 0 && v % k) dis.add(v); }
    return mc(`Quin d'aquests números és <b>múltiple de ${k}</b>?`, c, [...dis], { big: true, ex: `${c} = ${k} × ${c / k}: surt a la taula del ${k}. Els altres no.` });
  },
  'mult.div': L => {
    const n = pick([12, 16, 18, 20, 24, 30, 36, 40, 42, 48]), divs = []; for (let i = 1; i <= n; i++) if (n % i === 0) divs.push(i);
    if (L >= 4 && Math.random() < .5) return inp(`Quants <b>divisors</b> té el ${n}?`, divs.length, { ex: `Els divisors de ${n} són: ${divs.join(', ')}. En total, ${divs.length}.` });
    const d = pick(divs.filter(x => x > 1 && x < n)), non = []; for (let i = 2; i < n; i++) if (n % i) non.push(i);
    return mc(`Quin és <b>divisor</b> de ${n}?`, d, shuffle(non), { big: true, ex: `${n} ÷ ${d} = ${n / d}, i és exacta. Els divisors de ${n} són: ${divs.join(', ')}.` });
  },
  'mult.prime': L => {
    const P = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], C = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 57, 63];
    const p = pick(P.slice(L <= 3 ? 0 : 4)), cs = shuffle(C).slice(0, 3), c = cs[0], f = [3, 5, 7].find(x => c % x === 0);
    return mc('Quin és un nombre <b>primer</b>?', p, cs, { big: true, ex: `Un nombre primer només es pot dividir per 1 i per ell mateix. ${p} és primer. En canvi, ${c} = ${f} × ${c / f}.` });
  },
  'mult.crit': L => {
    const k = pick([2, 3, 5, 10, 9].slice(0, L >= 4 ? 5 : 4)), yes = Math.random() < .5; let n;
    do n = ri(100, 9999); while ((n % k === 0) !== yes);
    const ds = String(n).split('').reduce((a, b) => a + +b, 0);
    const rule = { 2: `Divisible per 2: acaba en xifra parella. ${fmt(n)} acaba en ${n % 10}.`, 5: `Divisible per 5: acaba en 0 o en 5. ${fmt(n)} acaba en ${n % 10}.`, 10: `Divisible per 10: acaba en 0. ${fmt(n)} acaba en ${n % 10}.`, 3: `Divisible per 3: la suma de xifres és múltiple de 3. Aquí sumen ${ds}.`, 9: `Divisible per 9: la suma de xifres és múltiple de 9. Aquí sumen ${ds}.` }[k];
    return mc(`El número <b>${fmt(n)}</b> és divisible per <b>${k}</b>?`, yes ? 'Sí' : 'No', [yes ? 'No' : 'Sí'], { big: true, ex: rule });
  },

  /* ---- Fraccions avançades ---- */
  'fr.eq': L => {
    let a, b; do { b = ri(2, 6); a = ri(1, b - 1); } while (gcd(a, b) > 1);
    const k = ri(2, L >= 4 ? 6 : 4), up = Math.random() < .5, col = pick(COLS);
    const vis = `<div class="stack">${eqv(`${frac(a, b)} = ${up ? frac(BOX, b * k) : frac(a * k, BOX)}`)}${L <= 2 ? `<div class="pies">${barSVG(a, b, col)}</div>` : ''}</div>`;
    return inp('Completa la fracció equivalent:', up ? a * k : b * k, { vis, ex: `Multipliquem dalt i baix pel mateix número (${k}): ${a}/${b} = ${a * k}/${b * k}.` });
  },
  'fr.addS': L => {
    const d = ri(4, 12), add = L <= 2 || Math.random() < .5; let a = ri(1, d - 2), b = ri(1, d - 1 - a);
    if (!add && a < b) [a, b] = [b, a]; if (!add && a === b) a++;
    const r = add ? a + b : a - b;
    return mc(`Quant fa?`, frac(r, d), [frac(r, 2 * d), frac(r + 1, d), frac(add ? a * b : a + b, d)].filter(x => x !== frac(r, d)), { vis: eqv(`${frac(a, d)} ${add ? '+' : '−'} ${frac(b, d)}`), big: true, ex: `Amb el mateix denominador, ${add ? 'sumem' : 'restem'} els numeradors: ${a} ${add ? '+' : '−'} ${b} = ${r}. El denominador (${d}) no canvia!` });
  },
  'fr.addD': L => {
    const pairs = L <= 3 ? [[2, 4], [2, 6], [3, 6], [4, 8], [3, 9], [5, 10], [2, 8]] : [[2, 3], [3, 4], [2, 5], [4, 6], [3, 5], [4, 10]];
    const [d1, d2] = shuffle(pick(pairs)), m = lcm(d1, d2), a = ri(1, d1 - 1), b = ri(1, d2 - 1), A = a * m / d1, B = b * m / d2;
    const add = L <= 2 || A <= B ? true : Math.random() < .5, r = add ? A + B : A - B;
    if (r <= 0) return EX['fr.addD'](L);
    return mc('Quant fa?', frac(r, m), [frac(add ? a + b : Math.abs(a - b), d1 + d2), frac(r + 1, m), frac(r, m * 2)], { vis: eqv(`${frac(a, d1)} ${add ? '+' : '−'} ${frac(b, d2)}`), big: true, ex: `Primer, el mateix denominador (${m}): ${a}/${d1} = ${A}/${m} i ${b}/${d2} = ${B}/${m}. Després: ${A} ${add ? '+' : '−'} ${B} = ${r} → ${r}/${m}.` });
  },
  'fr.simp': L => {
    let p, q; do { q = ri(2, 9); p = ri(1, q - 1); } while (gcd(p, q) > 1);
    const k = ri(2, L >= 4 ? 8 : 5), n = p * k, d = q * k;
    return mc(`Simplifica la fracció fins al final:`, frac(p, q), [frac(n / (k > 2 && k % 2 === 0 ? 2 : 1), d / (k > 2 && k % 2 === 0 ? 2 : 1)), frac(p + 1, q), frac(p, q + 1), frac(q, p)].filter(x => x !== frac(p, q)), { vis: bigNum(frac(n, d)), big: true, ex: `Dividim dalt i baix per ${k}: ${n} ÷ ${k} = ${p} i ${d} ÷ ${k} = ${q}. Resultat: ${p}/${q}.` });
  },

  /* ---- Geometria ---- */
  'geo.angle': L => {
    if (L >= 5 && Math.random() < .6) { const A = ri(30, 80), B = ri(30, 150 - A); return inp(`En un triangle, dos angles fan <b>${A}°</b> i <b>${B}°</b>. Quant fa el tercer?`, 180 - A - B, { unit: '°', ex: `Els tres angles d'un triangle sempre sumen 180°: 180 − ${A} − ${B} = ${180 - A - B}°.` }); }
    if (L >= 3 && Math.random() < .5) { const [nm, d] = pick([['recte', 90], ['pla', 180]]); return inp(`Quants graus fa un angle <b>${nm}</b>?`, d, { unit: '°', vis: angleSVG(d), ex: d === 90 ? 'Un angle recte fa 90°, com la cantonada d\'un full.' : 'Un angle pla fa 180°: els dos costats formen una línia recta.' }); }
    const types = [['agut', ri(20, 70)], ['recte', 90], ['obtús', ri(110, 160)], ['pla', 180]], [nm, deg] = pick(types);
    const ex = { agut: 'Un angle agut és més tancat que un recte: fa menys de 90°.', recte: 'Un angle recte fa exactament 90°, com la cantonada d\'un full.', obtús: 'Un angle obtús és més obert que un recte però no arriba a pla: entre 90° i 180°.', pla: 'Un angle pla fa 180°: els costats formen una línia recta.' }[nm];
    return mc("Quin tipus d'angle és?", nm, types.map(t => t[0]).filter(x => x !== nm), { vis: angleSVG(deg), ex });
  },
  'geo.area': L => {
    if (L <= 2) { const w = ri(2, 8), h = ri(2, 5); return inp("Quants quadrets ocupa? Aquesta és la seva <b>àrea</b>.", w * h, { unit: 'quadrets', vis: gridSVG(w, h), ex: `Hi ha ${h} files de ${w} quadrets: ${w} × ${h} = ${w * h}.` }); }
    if (L <= 4 || Math.random() < .4) { const w = ri(3, 15), h = Math.random() < .2 ? w : ri(2, 10); return inp(`Quina és l'<b>àrea</b> d'aquest ${w === h ? 'quadrat' : 'rectangle'}?`, w * h, { unit: 'cm²', vis: rectSVG(w, h, `${w} cm`, `${h} cm`), ex: `Àrea = base × altura = ${w} × ${h} = ${w * h} cm².` }); }
    const b = ri(3, 14); let h = ri(2, 10); if (b * h % 2) h++;
    return inp("Quina és l'<b>àrea</b> d'aquest triangle?", b * h / 2, { unit: 'cm²', vis: triSVG(b, h), ex: `Àrea del triangle = base × altura ÷ 2 = ${b} × ${h} ÷ 2 = ${b * h / 2} cm². És la meitat d'un rectangle!` });
  },
  'vol': L => {
    if (L <= 2) { const a = ri(2, 4), b = ri(1, 3), c = ri(1, 2); return inp('Quants cubs hi ha en total? (també els que no es veuen)', a * b * c, { vis: cubesSVG(a, b, c), ex: `Cada pis té ${a} × ${b} = ${a * b} cubs, i hi ha ${c} ${c === 1 ? 'pis' : 'pisos'}: ${a * b} × ${c} = ${a * b * c}.` }); }
    if (L >= 5 && Math.random() < .4) { const s = ri(2, 6); return inp(`Quin és el volum d'un <b>cub</b> de ${s} cm de costat?`, s ** 3, { unit: 'cm³', vis: cubesSVG(Math.min(s, 3), Math.min(s, 3), Math.min(s, 3)), ex: `Volum del cub = costat × costat × costat = ${s} × ${s} × ${s} = ${s ** 3} cm³.` }); }
    const a = ri(2, 5), b = ri(2, 4), c = ri(1, 3);
    return inp("Quin és el <b>volum</b> d'aquest prisma?", a * b * c, { unit: 'cm³', vis: cubesSVG(a, b, c, true), ex: `Volum = llarg × ample × alt = ${a} × ${b} × ${c} = ${a * b * c} cm³.` });
  },

  /* ---- Enters, potències, percentatges ---- */
  'int': L => {
    if (L <= 1) { const t = ri(-10, 25); return ninp('Quina temperatura marca el termòmetre?', t, { unit: '°C', vis: thermoSVG(t), ex: t < 0 ? `El líquid és per sota del 0: fa ${fmt(t)} °C (sota zero).` : `Marca ${t} °C.` }); }
    if (L === 2) {
      if (Math.random() < .5) { const x = ri(-12, 12); let y = ri(-12, 12); if (Math.random() < .1) y = x; const sym = x < y ? '<' : x > y ? '>' : '='; return mc('Quin signe hi va?', sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${fmt(x)}</span>${BOX}<span>${fmt(y)}</span></div>`, ex: `A la recta numèrica, més a la dreta vol dir més gran. ${x < 0 && y < 0 ? 'Amb negatius, com més lluny del 0, més petit!' : ''}` }); }
      const set = new Set(); while (set.size < 4) set.add(ri(-15, 15)); const vals = [...set], ans = vals.slice().sort((a, b) => a - b);
      return { type: 'order', q: 'Ordena de <b>més petit a més gran</b>:', items: shuffle(vals), show: fmt, ans, ex: ans.map(fmt).join(' < ') };
    }
    if (L === 3) { const t = ri(-8, 12), d = ri(2, 12), up = Math.random() < .5, r = up ? t + d : t - d; return ninp(`Al matí fa <b>${fmt(t)} °C</b>. Després la temperatura ${up ? 'puja' : 'baixa'} <b>${d} graus</b>. Quina temperatura fa?`, r, { unit: '°C', vis: thermoSVG(t), ex: `${fmt(t)} ${up ? '+' : '−'} ${d} = ${fmt(r)} °C.` }); }
    if (L === 4 || Math.random() < .5) { const a = ri(-9, 9), b = ri(2, 12), add = Math.random() < .5, r = add ? a + b : a - b; return ninp('Quant fa?', r, { vis: eqv(`${a < 0 ? '(' + fmt(a) + ')' : a} ${add ? '+' : '−'} ${b} = ${BOX}`), ex: `Imagina la recta numèrica: surts del ${fmt(a)} i ${add ? 'avances' : 'retrocedeixes'} ${b}: arribes al ${fmt(r)}.` }); }
    const p = ri(20, 60), s = ri(5, 30), r = -p + s;
    return ninp(`Un submarí és a <b>${fmt(-p)} m</b> i puja <b>${s} m</b>. A quina altura és ara?`, r, { unit: 'm', ex: `${fmt(-p)} + ${s} = ${fmt(r)} m (encara és sota l'aigua${r >= 0 ? '… o ja no!' : ''}).` });
  },
  'pow': L => {
    const v = L <= 1 ? 0 : L === 2 ? 1 : L === 3 ? 2 : L === 4 ? 3 : ri(0, 4);
    if (v === 0) { const a = ri(2, 10); return inp('Quant fa?', a * a, { vis: `<div class="stack">${eqv(`${a}² = ${BOX}`)}${a <= 6 ? emGrid('🟪', a * a, a) : ''}</div>`, ex: `${a}² = ${a} × ${a} = ${a * a}. Per això es diu «al quadrat».` }); }
    if (v === 1) { const a = ri(2, 5); return inp('Quant fa?', a ** 3, { vis: eqv(`${a}³ = ${BOX}`), ex: `${a}³ = ${a} × ${a} × ${a} = ${a ** 3}.` }); }
    if (v === 2) { if (Math.random() < .5) { const k = ri(2, 6); return inp('Quant fa?', 10 ** k, { vis: eqv(`10${sup(k)} = ${BOX}`), ex: `10${sup(k)} és un 1 seguit de ${k} zeros: ${fmt(10 ** k)}.` }); } const k = ri(2, 6); return inp('Quant fa?', 2 ** k, { vis: eqv(`2${sup(k)} = ${BOX}`), ex: `${Array(k).fill(2).join(' × ')} = ${2 ** k}.` }); }
    if (v === 3) { const a = ri(2, 12); return inp('Quant fa?', a, { vis: eqv(`√${a * a} = ${BOX}`), ex: `Quin número multiplicat per ell mateix fa ${a * a}? ${a} × ${a} = ${a * a}, per tant √${a * a} = ${a}.` }); }
    const a = ri(2, 6), k = ri(3, 5);
    return mc('Com s\'escriu com a potència?', `${a}${sup(k)}`, [`${k}${sup(a)}`, `${a * k}`, `${a}${sup(k + 1)}`], { vis: eqv(Array(k).fill(a).join(' × ')), big: true, ex: `El ${a} es multiplica ${k} vegades: ${a}${sup(k)}. El ${a} és la base i el ${k}, l'exponent.` });
  },
  'pct': L => {
    const P = pick(L <= 1 ? [50, 10, 25] : L <= 3 ? [10, 20, 25, 50, 75] : [5, 10, 15, 20, 25, 30, 50, 75]), step = 100 / gcd(P, 100), q = step * ri(Math.max(1, Math.ceil(20 / step)), Math.max(2, Math.floor(400 / step))), v = q * P / 100;
    const tip = { 50: `El 50% és la meitat: ${q} ÷ 2 = ${v}.`, 25: `El 25% és la quarta part: ${q} ÷ 4 = ${v}.`, 10: `El 10% és dividir per 10: ${q} ÷ 10 = ${v}.`, 75: `El 75% són tres quarts: ${q} ÷ 4 × 3 = ${v}.` }[P] || `El ${P}% de ${q} = ${q} × ${P} ÷ 100 = ${v}.`;
    if (L >= 5 && Math.random() < .6) return inp(`Una bicicleta costa <b>${q} €</b> i té un <b>${P}% de descompte</b>. Quant costa ara?`, q - v, { unit: '€', long: true, ex: `${tip} Llavors ${q} − ${v} = ${q - v} €.` });
    return inp(`Quant és el <b>${P}%</b> de ${fmt(q)}?`, v, { vis: `<div class="pctbar"><div style="width:${P}%"></div><span>${P}%</span></div>`, ex: tip });
  },
  'prop': L => {
    const T = [
      () => { const a = ri(2, 5), p = ri(2, 6), b = ri(a + 1, 10); return [`${a} llibretes costen ${a * p} €. Quant costen ${b} llibretes?`, b * p, `Primer, 1 llibreta: ${a * p} ÷ ${a} = ${p} €. Després: ${b} × ${p} = ${b * p} €.`, '€']; },
      () => { const a = pick([2, 4]), g = pick([50, 100, 150]), b = pick([6, 8, 10, 12]); return [`Per fer un pastís per a ${a} persones calen ${a * g} g de farina. Quanta farina cal per a ${b} persones?`, b * g, `Per a 1 persona: ${a * g} ÷ ${a} = ${g} g. Per a ${b}: ${b} × ${g} = ${fmt(b * g)} g.`, 'g']; },
      () => { const s = pick([2, 5, 10, 20]), c = ri(3, 12); return [`En un mapa, 1 cm són ${s} km de veritat. Dues ciutats estan a ${c} cm al mapa. Quants km les separen?`, s * c, `Cada centímetre són ${s} km: ${c} × ${s} = ${s * c} km.`, 'km']; },
      () => { const v = pick([60, 80, 90, 100, 120]), h = ri(2, 5); return [`Un tren fa ${v} km cada hora. Quants km fa en ${h} hores?`, v * h, `${h} × ${v} = ${v * h} km.`, 'km']; }
    ];
    const [q, a, ex, u] = pick(T)();
    return inp(q, a, { unit: u, long: true, ex });
  },
  'stat': L => {
    const sets = [
      ['Fruita preferida de la classe', ['🍎', '🍌', '🍓', '🍊'], ['poma', 'plàtan', 'maduixa', 'taronja']],
      ['Llibres llegits cada dia', ['dl', 'dt', 'dc', 'dj', 'dv'], ['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres']],
      ['Esport preferit', ['⚽', '🏀', '🏊', '🚴'], ['futbol', 'bàsquet', 'natació', 'bicicleta']]
    ];
    const [title, labels, names] = pick(sets), n = labels.length; let vals;
    do { vals = labels.map(() => ri(1, 10)); } while (new Set(vals).size < n - 1 || vals.filter(v => v === Math.max(...vals)).length > 1);
    const v = L <= 1 ? 0 : L === 2 ? 1 : L === 3 ? 2 : L === 4 ? pick([3, 4]) : ri(0, 4);
    const vis = barsSVG(labels, vals, title);
    if (v === 0) { const i = ri(0, n - 1); return inp(`Segons el gràfic, quant val <b>${names[i]}</b>?`, vals[i], { vis, ex: `La barra de ${names[i]} arriba fins al ${vals[i]}.` }); }
    if (v === 1) { const mx = Math.max(...vals), i = vals.indexOf(mx); return mc('Quina és la <b>moda</b> (el que més es repeteix)?', names[i], names.filter((_, j) => j !== i), { vis, ex: `La moda és la barra més alta: ${names[i]} (${mx}).` }); }
    if (v === 2) { let s = vals.reduce((a, b) => a + b, 0); while (s % n) { vals[n - 1]++; s++; } if (vals[n - 1] > 12) return EX['stat'](L); return inp('Quina és la <b>mitjana</b>?', s / n, { vis: barsSVG(labels, vals, title), ex: `Sumem tots els valors (${vals.join(' + ')} = ${s}) i dividim entre ${n}: ${s} ÷ ${n} = ${s / n}.` }); }
    if (v === 3) { const mx = Math.max(...vals), mn = Math.min(...vals); return inp('Quin és el <b>rang</b> (el més gran menys el més petit)?', mx - mn, { vis, ex: `${mx} − ${mn} = ${mx - mn}.` }); }
    const i = vals.indexOf(Math.max(...vals)), j = vals.indexOf(Math.min(...vals));
    return inp(`Quants més té <b>${names[i]}</b> que <b>${names[j]}</b>?`, vals[i] - vals[j], { vis, ex: `${vals[i]} − ${vals[j]} = ${vals[i] - vals[j]}.` });
  },
  'p.dec': L => {
    const T = [
      () => { const n = ri(2, 5), p = pick([150, 175, 225, 250, 320, 480]); return [`Compres ${n} entrepans de ${eur(p)} cadascun. Quant pagues?`, n * p / 100, `${n} × ${fmtDf(p / 100, 2)} = ${fmtD(n * p / 100)} €.`]; },
      () => { const t = pick([1000, 2000, 5000]), p = ri(30, t / 10) * 5; return [`Tens ${eur(t)} i compres un llibre de ${eur(p)}. Quant et queda?`, (t - p) / 100, `${fmtDf(t / 100, 2)} − ${fmtDf(p / 100, 2)} = ${fmtD((t - p) / 100)} €.`]; },
      () => { const n = ri(2, 6), b = pick([1.5, 0.75, 1.25, 2.5, 0.5]); return [`Una ampolla té ${fmtD(b)} litres. Quants litres hi ha en ${n} ampolles?`, n * b, `${n} × ${fmtD(b)} = ${fmtD(n * b)} litres.`, 'l']; },
      () => { const n = pick([2, 4, 5]), q = ri(3, 12) + pick([0, .5, .25]); return [`${n} amics paguen a parts iguals un sopar de ${fmtD(n * q)} €. Quant paga cadascú?`, n * q / n, `${fmtD(n * q)} ÷ ${n} = ${fmtD(q)} €.`]; }
    ];
    const [q, a, ex, u] = pick(T)();
    return dinp(q, a, { unit: u || '€', long: true, ex });
  }
});
