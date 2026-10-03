/* ===== Exercicis de 1r-3r i 5è-6è (bilingüe CA/ES) ===== */
const F = 'font-family="Lexend,sans-serif" font-weight="800"';
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;
const fmtD = x => { const neg = x < 0; let [i, f] = String(+Math.abs(x).toFixed(3)).split('.'); return (neg ? '−' : '') + fmt(+i) + (f ? ',' + f : ''); };
const fmtDf = (x, d) => { let [i, f] = Math.abs(x).toFixed(d).split('.'); return (x < 0 ? '−' : '') + fmt(+i) + (f ? ',' + f : ''); };
const ninp = (q, ans, o = {}) => inp(q, ans, { neg: true, ...o });
const dinp = (q, ans, o = {}) => inp(q, +ans.toFixed(3), { dec: true, ...o });
const emRow = (em, n, out = 0) => `<span class="emrow">${Array(n).fill(0).map((_, i) => `<span class="${i >= n - out ? 'out' : ''}" style="animation-delay:${i * 40}ms">${em}</span>`).join('')}</span>`;
const sup = n => String(n).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('');
const HOW = () => L('Quant fa?', '¿Cuánto es?');

/* --- Visuals --- */
function blocksSVG(n) {
  // Blocs de base 10 amb volum: cara del davant amb degradat, tapa clara i costat fosc (fondària D)
  const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10, c = 10, H = 10 * c, D = 5, Y = 4 + D;
  const K = { h: ['url(#gBlue)', '#A9E0FB', '#1A72A4', '#15628F'], t: ['url(#gGreen)', '#AEEFC4', '#1F8A48', '#1B7A40'], u: ['url(#gOrange)', '#FFDDB0', '#D4691A', '#B65A14'] };
  let x = 4, s = '', k = 0;
  const box = (x0, y0, w, hh, [front, top, side, edge], gx, gy) => {
    let p = `<polygon points="${x0},${y0} ${x0 + D},${y0 - D} ${x0 + w + D},${y0 - D} ${x0 + w},${y0}" fill="${top}"/>`
      + `<polygon points="${x0 + w},${y0} ${x0 + w + D},${y0 - D} ${x0 + w + D},${y0 + hh - D} ${x0 + w},${y0 + hh}" fill="${side}"/>`
      + `<rect x="${x0}" y="${y0}" width="${w}" height="${hh}" fill="${front}"/>`;
    let gl = '', gs = '';
    for (let i = 1; i < gx; i++) { gl += `M${x0 + i * c} ${y0}v${hh}`; gs += `M${x0 + i * c} ${y0}l${D} ${-D}`; }
    for (let j = 1; j < gy; j++) { gl += `M${x0} ${y0 + j * c}h${w}`; gs += `M${x0 + w} ${y0 + j * c}l${D} ${-D}`; }
    if (gl) p += `<path d="${gl}" stroke="rgba(255,255,255,.55)" stroke-width="1"/><path d="${gs}" stroke="rgba(0,0,0,.18)" stroke-width="1"/>`;
    p += `<path d="M${x0} ${y0}h${w}l${D} ${-D}h${-w}z M${x0 + w} ${y0}l${D} ${-D}v${hh}l${-D} ${D}z M${x0} ${y0}h${w}v${hh}h${-w}z" fill="none" stroke="${edge}" stroke-width="1.3" stroke-linejoin="round"/>`;
    return `<g class="blk" style="animation-delay:${(k++) * 60}ms">${p}</g>`;
  };
  for (let i = 0; i < h; i++) { s += box(x, Y, H, H, K.h, 10, 10); x += H + D + 9; }
  for (let i = 0; i < t; i++) { s += box(x, Y, c, H, K.t, 1, 10); x += c + D + 4; }
  if (t && u) x += 6;
  for (let i = 0; i < u; i++) { const col = Math.floor(i / 5), row = i % 5; s += box(x + col * (c + D + 4), Y + H - (row + 1) * (c + D + 2) + D + 2, c, c, K.u, 1, 1); }
  if (u) x += Math.ceil(u / 5) * (c + D + 4);
  const W = x + 2;
  return `<svg viewBox="0 0 ${W} ${H + D + 10}" class="blocks" style="width:${Math.round(Math.min(W * 2.4, 400))}px"><g filter="url(#vsh)">${s}</g></svg>`;
}
function rulerSVG(a, b, max) {
  // Regle de plàstic groc amb bisell i un llapis de veritat (goma, virolla, fusta i mina) que va del «a» al «b»
  const px = 24, W = max * px + 44, X = i => 22 + i * px, x0 = X(a), x1 = X(b), len = x1 - x0, cone = Math.min(18, len * .32), fer = 6, er = Math.min(11, len * .2);
  const ry = 58, rh = 58;
  let s = `<svg viewBox="0 0 ${W} 122" class="ruler" style="width:${Math.round(Math.min(W * 1.25, 460))}px">`;
  s += `<g stroke="#A895BC" stroke-width="2" stroke-dasharray="3 3"><line x1="${x0}" y1="40" x2="${x0}" y2="${ry}"/><line x1="${x1}" y1="40" x2="${x1}" y2="${ry}"/></g>`;
  // llapis
  const bx = x0 + er + fer, bw = x1 - cone - bx;
  s += `<g class="pencil" filter="url(#vsh)">`
    + `<rect x="${bx}" y="14" width="${bw}" height="9" fill="#FFE27A"/><rect x="${bx}" y="23" width="${bw}" height="8" fill="#FFC93C"/><rect x="${bx}" y="31" width="${bw}" height="9" fill="#E9A600"/>`
    + `<polygon points="${x1 - cone},14 ${x1},27 ${x1 - cone},40" fill="url(#gWood)"/><polygon points="${x1 - cone * .36},22.4 ${x1},27 ${x1 - cone * .36},31.6" fill="#3A2A4A"/>`
    + `<path d="M${x0 + er} 14 h${fer} v26 h${-fer} z" fill="#C9CED6"/><path d="M${x0 + er + 2} 14v26 M${x0 + er + 4} 14v26" stroke="#9AA3AF" stroke-width="1"/>`
    + `<path d="M${x0 + er} 14 h${-er + 4} a4 4 0 0 0 -4 4 v18 a4 4 0 0 0 4 4 h${er - 4} z" fill="#FF7AA8"/>`
    + `<rect x="${x0}" y="15" width="${len - cone}" height="4" rx="2" fill="#fff" opacity=".45"/></g>`;
  // regle
  s += `<g filter="url(#vsh)"><rect x="6" y="${ry}" width="${W - 12}" height="${rh}" rx="9" fill="url(#gRuler)" stroke="#D6A53A" stroke-width="2"/></g>`;
  s += `<rect x="8" y="${ry + rh - 9}" width="${W - 16}" height="7" rx="4" fill="#F2CC6A" opacity=".55"/><rect x="10" y="${ry + 2.5}" width="${W - 20}" height="4" rx="2" fill="#fff" opacity=".7"/>`;
  for (let i = 0; i <= max * 2; i++) {
    const x = 22 + i * px / 2, big = i % 2 === 0;
    s += `<line x1="${x}" y1="${ry}" x2="${x}" y2="${ry + (big ? 18 : 10)}" stroke="#7A5A10" stroke-width="${big ? 2.2 : 1.3}" stroke-linecap="round"/>`;
    if (big) s += `<text x="${x}" y="${ry + 37}" text-anchor="middle" font-size="16" ${F} fill="#6B4E0C">${i / 2}</text>`;
  }
  return s + `<text x="${W - 15}" y="${ry + rh - 8}" text-anchor="end" font-size="12" ${F} fill="#A07B20">cm</text></svg>`;
}
function thermoSVG(t) {
  // Termòmetre de vidre muntat sobre una placa: escala en tinta fosca (EXV_DK) perquè la placa és clara als dos temes
  const y = v => 22 + (30 - v) * 4, by = y(-10) + 30;
  let s = `<svg viewBox="0 0 132 236" class="thermo"><g filter="url(#vsh)"><rect x="16" y="3" width="104" height="229" rx="22" fill="url(#gPaper)" stroke="#DCCFEA" stroke-width="2"/></g>`;
  for (let v = -10; v <= 30; v++) {
    const big = v % 5 === 0, z = v === 0, col = z ? '#1C84C6' : EXV_DK;
    s += `<line x1="66" y1="${y(v)}" x2="${big ? 79 : 72}" y2="${y(v)}" stroke="${col}" stroke-width="${big ? 2.2 : 1.1}" stroke-linecap="round"${big || z ? '' : ' stroke-opacity=".6"'}/>`;
    if (big) s += `<text x="82" y="${y(v) + 5}" font-size="14" ${F} fill="${col}">${v < 0 ? '−' + (-v) : v}</text>`;
  }
  s += `<rect x="38" y="10" width="24" height="${by - 10}" rx="12" fill="url(#gGlass)" stroke="#BDB0D2" stroke-width="2.5"/>`;
  s += `<rect class="merc" x="44.5" y="${y(t)}" width="11" height="${by - y(t)}" rx="5.5" fill="url(#gRed)"/>`;
  s += `<circle cx="50" cy="${by}" r="19" fill="url(#gRed)" stroke="#BDB0D2" stroke-width="3"/><circle cx="50" cy="${by}" r="19" fill="none" stroke="#B8262D" stroke-opacity=".35" stroke-width="1.5"/>`;
  s += `<ellipse cx="43.5" cy="${by - 7}" rx="5.5" ry="4" fill="#fff" opacity=".6"/><rect x="41.5" y="16" width="3.5" height="${by - 40}" rx="1.75" fill="#fff" opacity=".7"/>`;
  return s + '</svg>';
}
function barsSVG(labels, vals, title) {
  const max = Math.max(...vals), top = Math.ceil((max + 1) / 2) * 2, W = 320, H = 218, x0 = 40, y0 = 174, bh = 140, bw = 44, gap = (W - x0 - 10 - labels.length * bw) / labels.length;
  const GR = ['gOrange', 'gBlue', 'gGreen', 'gPink', 'gPurple', 'gTeal'];
  let s = `<svg viewBox="0 0 ${W} ${H}" class="bars"><text x="${W / 2}" y="17" text-anchor="middle" font-size="15" ${F} fill="${INK}">${title}</text>`;
  for (let v = 0; v <= top; v++) { const yy = y0 - v / top * bh; s += `<line x1="${x0}" y1="${yy}" x2="${W - 6}" y2="${yy}" stroke="rgba(138,79,176,${v % 2 ? .13 : .24})" stroke-width="1.5"/><text x="${x0 - 7}" y="${yy + 4.5}" text-anchor="end" font-size="${v % 2 ? 12 : 14}" ${F} fill="#8A7B99">${v}</text>`; }
  labels.forEach((l, i) => {
    const x = x0 + gap / 2 + i * (bw + gap), hh = vals[i] / top * bh, r = Math.min(8, hh / 2), yt = y0 - hh;
    if (hh > 0) s += `<g class="bar" style="animation-delay:${i * 90}ms;transform-origin:${x}px ${y0}px"><g filter="url(#vsh)"><path d="M${x} ${y0}V${yt + r}Q${x} ${yt} ${x + r} ${yt}H${x + bw - r}Q${x + bw} ${yt} ${x + bw} ${yt + r}V${y0}Z" fill="url(#${GR[i % GR.length]})"/></g>`
      + `<rect x="${x + 6}" y="${yt + 5}" width="7" height="${Math.max(0, hh - 11)}" rx="3.5" fill="#fff" opacity=".35"/></g>`;
    s += `<text x="${x + bw / 2}" y="${y0 + 28}" text-anchor="middle" font-size="${l.length > 3 ? 14 : 22}" ${F} fill="${INK}">${l}</text>`;
  });
  return s + `<line x1="${x0}" y1="${y0}" x2="${W - 6}" y2="${y0}" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - bh - 6}" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-opacity=".5"/></svg>`;
}
function angleSVG(deg) {
  const vx = deg > 100 ? 140 : 60, vy = 148, r1 = 150, r2 = 130, a = deg * Math.PI / 180, f = v => v.toFixed(1);
  const ex = vx + r2 * Math.cos(a), ey = vy - r2 * Math.sin(a), ar = 40;
  let s = `<svg viewBox="0 0 260 168" class="vsvg wide">`;
  if (deg === 90) s += `<path d="M${vx} ${vy} H${vx + 30} V${vy - 30} H${vx} Z" fill="url(#gOrange)" fill-opacity=".42" stroke="#FF9A3C" stroke-width="3" stroke-linejoin="round"/><circle cx="${vx + 15}" cy="${vy - 15}" r="3" fill="#F07F22"/>`;
  else s += `<path d="M${vx} ${vy} L${vx + ar} ${vy} A${ar} ${ar} 0 0 0 ${f(vx + ar * Math.cos(a))} ${f(vy - ar * Math.sin(a))} Z" fill="url(#gOrange)" fill-opacity=".42"/><path d="M${vx + ar} ${vy} A${ar} ${ar} 0 0 0 ${f(vx + ar * Math.cos(a))} ${f(vy - ar * Math.sin(a))}" fill="none" stroke="#FF9A3C" stroke-width="3.5" stroke-linecap="round"/>`;
  s += `<g filter="url(#vsh)"><line x1="${vx}" y1="${vy}" x2="${Math.min(250, vx + r1)}" y2="${vy}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
  s += `<g class="ray" style="transform-origin:${vx}px ${vy}px"><line x1="${vx}" y1="${vy}" x2="${f(ex)}" y2="${f(ey)}" stroke="#602B7A" stroke-width="6" stroke-linecap="round"/></g></g>`;
  return s + `<circle cx="${vx}" cy="${vy}" r="7.5" fill="#FF9A3C" stroke="#fff" stroke-width="2.5"/></svg>`;
}
function gridSVG(w, h) {
  // Quadrets com a rajoles (amb una junta petita): es compten millor i fan més de «peça»
  const c = 26, W = w * c, H = h * c, tile = (x, y) => `<rect x="${x + 1.5}" y="${y + 1.5}" width="${c - 3}" height="${c - 3}" rx="4" fill="url(#gTeal)" stroke="#1E9C88" stroke-width="1"/><rect x="${x + 4}" y="${y + 3.5}" width="${c - 8}" height="${(c - 3) * .38}" rx="3" fill="url(#gShine)" opacity=".75"/>`;
  let s = `<svg viewBox="0 0 ${W + 64} ${H + 8}" class="vsvg wide"><g filter="url(#vsh)">`;
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) s += tile(4 + i * c, 4 + j * c);
  return s + `</g><g filter="url(#vsh)">${tile(W + 22, H / 2 - c / 2 - 8)}</g><text x="${W + 22 + c / 2}" y="${H / 2 + 28}" text-anchor="middle" font-size="15" ${F} fill="${INK}">= 1</text></svg>`;
}
function triSVG(b, h) {
  const sc = Math.min(190 / b, 112 / h), W = b * sc, H = h * sc, x = (260 - W) / 2, y = 14, px = x + W * .35, f = v => v.toFixed(1);
  return `<svg viewBox="0 0 260 170" class="vsvg wide"><polygon points="${f(x)},${f(y + H)} ${f(x + W)},${f(y + H)} ${f(px)},${y}" fill="url(#gTeal)" stroke="#12806F" stroke-width="3.5" stroke-linejoin="round" filter="url(#vsh)"/>
  <line x1="${f(px)}" y1="${y}" x2="${f(px)}" y2="${f(y + H)}" stroke="${INK}" stroke-width="2.2" stroke-dasharray="6 5" stroke-linecap="round"/><path d="M${f(px)} ${f(y + H - 11)}h11v11" fill="none" stroke="${EXV_DK}" stroke-width="2" stroke-linejoin="round"/>
  ${exvPill(x + W / 2, y + H + 19, `${b} cm`, 15)}${exvPill(px, y + H * .58, `${h} cm`, 15)}</svg>`;
}
function cubesSVG(a, b, c, labels) {
  const s = 22, ix = (x, y) => (x - y) * s * .87, iy = (x, y, z) => (x + y) * s * .5 - z * s, cubes = [], gt = exvId('ct'), gl = exvId('cl'), gr = exvId('cr');
  for (let z = 0; z < c; z++) for (let y = 0; y < b; y++) for (let x = 0; x < a; x++) cubes.push([x, y, z]);
  cubes.sort((p, q) => (p[0] + p[1]) - (q[0] + q[1]) || p[2] - q[2]);
  const ox = b * s * .87 + 30, oy = c * s + 20;
  const P = (x, y, z) => `${(ox + ix(x, y)).toFixed(1)},${(oy + iy(x, y, z)).toFixed(1)}`;
  let out = '';
  cubes.forEach(([x, y, z], i) => {
    out += `<g class="cube" style="animation-delay:${i * 35}ms" stroke="#15628F" stroke-width="1.3" stroke-linejoin="round"><polygon points="${P(x, y, z + 1)} ${P(x + 1, y, z + 1)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}" fill="url(#${gt})"/>`;
    out += `<polygon points="${P(x, y + 1, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}" fill="url(#${gl})"/>`;
    out += `<polygon points="${P(x + 1, y, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x + 1, y, z + 1)}" fill="url(#${gr})"/></g>`;
  });
  const W = ox + a * s * .87 + 40, H = oy + (a + b) * s * .5 + 30;
  let lab = '';
  if (labels) {
    const m = (p, q) => { const [x1, y1] = p.split(',').map(Number), [x2, y2] = q.split(',').map(Number); return [(x1 + x2) / 2, (y1 + y2) / 2]; };
    const [ax, ay] = m(P(0, b, 0), P(a, b, 0)), [bx, by] = m(P(a, 0, 0), P(a, b, 0)), [cx, cy] = m(P(a, 0, 0), P(a, 0, c));
    lab = exvPill(ax - 14, ay + 22, `${a} cm`, 14) + exvPill(bx + 30, by + 14, `${b} cm`, 14) + exvPill(cx + 32, cy, `${c} cm`, 14);
  }
  const defs = `<defs><linearGradient id="${gt}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#CDEFFF"/><stop offset="1" stop-color="#8FD6FA"/></linearGradient>${exvGrad(gl, '#3FAEE6', .12, -.05)}${exvGrad(gr, '#1F84BD', .02, -.14)}</defs>`;
  return `<svg viewBox="0 0 ${W + 30} ${H}" class="cubes">${defs}<g filter="url(#vsh2)">${out}</g>${lab}</svg>`;
}

/* --- Generadors --- */
Object.assign(EX, {
  'g.count': (L_, A) => {
    const max = +A || 10, [em, nm] = pickEm(), n = ri(Math.min(3, max), max), r = n % 5;
    // de 5 en 5 només quan hi ha almenys dues files plenes (la graella és de 5 en 5)
    const fives = [...Array(Math.floor(n / 5))].map((_, i) => 5 * (i + 1)).join(', '), ones = [...Array(n)].map((_, i) => i + 1).join(', ');
    const ex = n >= 10 ? L(`Compta-les de 5 en 5 (cada fila en té 5): ${fives}${r ? ` i ${r} més` : ''}. N'hi ha ${n}.`, `Cuéntalas de 5 en 5 (cada fila tiene 5): ${fives}${r ? ` y ${r} más` : ''}. Hay ${n}.`)
      : n > 5 ? L(`Una fila plena en té 5 i ${r === 1 ? 'en sobra' : 'en sobren'} ${r}: 5 + ${r} = ${n}.`, `Una fila llena tiene 5 y ${r === 1 ? 'sobra' : 'sobran'} ${r}: 5 + ${r} = ${n}.`)
      : L(`Compta-les d'una en una: ${ones}. N'hi ha ${n}.`, `Cuéntalas de una en una: ${ones}. Hay ${n}.`);
    return inp(L(`Quantes ${nm} hi ha?`, `¿Cuántas ${nm} hay?`), n, { vis: emGrid(em, n, 5), ex });
  },
  'g.next': (L_, A) => {
    const max = +A || 20, v = L_ >= 3 ? ri(0, 2) : ri(0, 1);
    if (v === 2) { const n = ri(1, max - 1); return inp(L(`Quin número va <b>entre</b> ${fmt(n - 1)} i ${fmt(n + 1)}?`, `¿Qué número va <b>entre</b> ${fmt(n - 1)} y ${fmt(n + 1)}?`), n, { vis: `<div class="seq"><span>${fmt(n - 1)}</span>${BOX}<span>${fmt(n + 1)}</span></div>`, ex: `${fmt(n - 1)}, ${fmt(n)}, ${fmt(n + 1)}.` }); }
    const after = v === 0, n = after ? ri(0, max - 1) : ri(1, max), ans = after ? n + 1 : n - 1;
    return inp(L(`Quin número va just <b>${after ? 'després' : 'abans'}</b> de ${fmt(n)}?`, `¿Qué número va justo <b>${after ? 'después' : 'antes'}</b> de ${fmt(n)}?`), ans, { vis: `<div class="seq">${after ? `<span>${fmt(n)}</span>${BOX}` : `${BOX}<span>${fmt(n)}</span>`}</div>`, ex: after ? L(`Després de ${fmt(n)} ve ${fmt(ans)}.`, `Después de ${fmt(n)} viene ${fmt(ans)}.`) : L(`Abans de ${fmt(n)} hi ha ${fmt(ans)}.`, `Antes de ${fmt(n)} está ${fmt(ans)}.`) });
  },
  'g.cmp': (L_, A) => {
    const max = +A || 20, x = ri(0, max); let y;
    if (Math.random() < .15) y = x; else if (max >= 100 && Math.random() < .5) { y = Math.min(max, x - x % 10 + ri(0, 9)); } else y = ri(0, max);
    const sym = x < y ? '<' : x > y ? '>' : '=';
    return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${fmt(x)}</span>${BOX}<span>${fmt(y)}</span></div>`, ex: x === y ? L('Són iguals!', '¡Son iguales!') : L(`${fmt(Math.max(x, y))} és més gran que ${fmt(Math.min(x, y))}. La boca del cocodril sempre s'obre cap al més gran! 🐊`, `${fmt(Math.max(x, y))} es mayor que ${fmt(Math.min(x, y))}. ¡La boca del cocodrilo siempre se abre hacia el mayor! 🐊`) });
  },
  'g.blocks': (L_, A) => {
    const max = +A || 100, n = ri(max <= 20 ? 10 : max <= 100 ? 11 : 101, max - 1), h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10;
    const parts = [h && nCen(h), t && nDes(t), u && nUni(u)].filter(Boolean).join(', ');
    if (L_ >= 3 && max <= 100 && Math.random() < .4) return inp(L(`Quantes <b>desenes</b> té el número ${n}?`, `¿Cuántas <b>decenas</b> tiene el número ${n}?`), t, { vis: blocksSVG(n), ex: L(`${n} té ${nDes(t)} i ${nUni(u)}. Cada barra és una desena.`, `${n} tiene ${nDes(t)} y ${nUni(u)}. Cada barra es una decena.`) });
    return inp(L('Quin número formen els blocs?', '¿Qué número forman los bloques?'), n, { vis: `<div class="stack">${blocksSVG(n)}<div class="legend">${max > 100 ? L('Placa = 100 · ', 'Placa = 100 · ') : ''}${L('Barra = 10 · Cub = 1', 'Barra = 10 · Cubo = 1')}</div></div>`, ex: `${parts} → ${fmt(n)}.` });
  },
  'g.words': (L_, A) => {
    const max = +A || 100, n = ri(max > 100 ? 101 : 11, max - 1);
    if (Math.random() < .5) return inp(L('Escriu amb xifres:', 'Escribe con cifras:'), n, { vis: `<div class="words">${numToCa(n)}</div>`, ex: `«${numToCa(n)}» = ${fmt(n)}` });
    return mc(L('Com es llegeix aquest número?', '¿Cómo se lee este número?'), numToCa(n), variants(n).map(numToCa), { vis: bigNum(fmt(n)), list: true, ex: L(`${fmt(n)} es llegeix «${numToCa(n)}».`, `${fmt(n)} se lee «${numToCa(n)}».`) });
  },
  'g.add': (L_, A) => {
    const max = +A || 20; let x, y;
    if (max <= 10) {
      x = ri(1, max - 1); y = ri(1, max - x);
      if (L_ <= 1) { const [em] = pickEm(); return inp(L("Quantes n'hi ha en total?", '¿Cuántas hay en total?'), x + y, { vis: `<div class="plus">${emRow(em, x)}<b>+</b>${emRow(em, y)}</div>`, ex: `${x} + ${y} = ${x + y}.` }); }
      return inp(HOW(), x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: L(`Comença pel més gran (${Math.max(x, y)}) i compta ${Math.min(x, y)} més: ${x + y}.`, `Empieza por el mayor (${Math.max(x, y)}) y cuenta ${Math.min(x, y)} más: ${x + y}.`) });
    }
    if (max <= 20) {
      if (L_ >= 5) { x = ri(2, 12); const s = ri(x + 2, 20); return inp(L('Quin número falta?', '¿Qué número falta?'), s - x, { vis: eqv(`${x} + ${BOX} = ${s}`), ex: L(`De ${x} a ${s} hi ha ${s - x}: ${x} + ${s - x} = ${s}.`, `De ${x} a ${s} hay ${s - x}: ${x} + ${s - x} = ${s}.`) }); }
      if (L_ >= 3) { x = ri(5, 9); y = ri(11 - x, 9); return inp(HOW(), x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: L(`Fes desena: ${x} + ${10 - x} = 10, i 10 + ${y - (10 - x)} = ${x + y}.`, `Haz decena: ${x} + ${10 - x} = 10, y 10 + ${y - (10 - x)} = ${x + y}.`) }); }
      x = ri(10, 15); y = ri(1, 19 - x); if (Math.random() < .5) [x, y] = [y, x];
      return inp(HOW(), x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `${x} + ${y} = ${x + y}.` });
    }
    if (L_ <= 1) { x = ri(1, 7) * 10; y = ri(1, 9 - x / 10) * 10; return inp(HOW(), x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: `${nDes(x / 10)} + ${nDes(y / 10)} = ${nDes((x + y) / 10)} = ${x + y}.` }); }
    if (L_ === 3) { x = ri(15, 68); y = ri(12, 100 - x); return inp(HOW(), x + y, { vis: eqv(`${x} + ${y} = ${BOX}`), ex: L(`Primer les desenes i després les unitats: ${x} + ${y} = ${x + y}.`, `Primero las decenas y después las unidades: ${x} + ${y} = ${x + y}.`) }); }   // a 1r, com a molt 100
    if (L_ <= 2) return EX['a.add'](1);
    if (L_ === 4) { x = ri(15, 68); y = ri(12, 99 - x); return inp(L('Fes la suma:', 'Haz la suma:'), x + y, { vis: colOp(x, y, '+'), ex: L(`Suma les unitats i després les desenes (sense oblidar les que et portes): ${x} + ${y} = ${x + y}.`, `Suma las unidades y después las decenas (sin olvidar las que te llevas): ${x} + ${y} = ${x + y}.`) }); }
    return EX['a.missing'](1);
  },
  'g.sub': (L_, A) => {
    const max = +A || 20; let x, y;
    if (max <= 10) {
      x = ri(3, 10); y = ri(1, x - 1);
      if (L_ <= 1) { const [em, nm] = pickEm(); return inp(L(`Hi havia ${x} ${nm} i se n'han anat ${y}. Quantes en queden?`, `Había ${x} ${nm} y se han ido ${y}. ¿Cuántas quedan?`), x - y, { vis: emRow(em, x, y), ex: `${x} − ${y} = ${x - y}.` }); }
      return inp(HOW(), x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: L(`Compta enrere ${y} des del ${x}: ${x - y}.`, `Cuenta hacia atrás ${y} desde el ${x}: ${x - y}.`) });
    }
    if (max <= 20) {
      if (L_ >= 5) { x = ri(11, 20); const r = ri(2, x - 2); return inp(L('Quin número falta?', '¿Qué número falta?'), x - r, { vis: eqv(`${x} − ${BOX} = ${r}`), ex: L(`Quant hi ha del ${r} al ${x}? ${x} − ${r} = ${x - r}.`, `¿Cuánto hay del ${r} al ${x}? ${x} − ${r} = ${x - r}.`) }); }
      if (L_ >= 3) { x = ri(11, 18); y = ri(x - 9, 9); return inp(HOW(), x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: L(`Baixa fins a 10: ${x} − ${x - 10} = 10, i 10 − ${y - (x - 10)} = ${x - y}.`, `Baja hasta 10: ${x} − ${x - 10} = 10, y 10 − ${y - (x - 10)} = ${x - y}.`) }); }
      x = ri(11, 19); y = ri(1, x - 10); return inp(HOW(), x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `${x} − ${y} = ${x - y}.` });
    }
    if (L_ <= 1) { x = ri(3, 9) * 10; y = ri(1, x / 10 - 1) * 10; return inp(HOW(), x - y, { vis: eqv(`${x} − ${y} = ${BOX}`), ex: `${nDes(x / 10)} − ${nDes(y / 10)} = ${nDes((x - y) / 10)} = ${x - y}.` }); }
    if (L_ <= 3) return EX['a.sub'](L_ === 2 ? 1 : 2);
    if (L_ === 4) { x = ri(41, 98); y = ri(12, x - 10); return inp(L('Fes la resta:', 'Haz la resta:'), x - y, { vis: colOp(x, y, '−'), ex: L(`Si a les unitats no en tens prou, demana una desena. Comprova-ho: ${x - y} + ${y} = ${x}.`, `Si en las unidades no tienes bastante, pide una decena. Compruébalo: ${x - y} + ${y} = ${x}.`) }); }
    return EX['a.missing'](1);
  },
  'g.double': (L_, A) => {
    const n = ri(1, +A || 10);
    if (Math.random() < .5) return inp(L(`Quin és el <b>doble</b> de ${n}?`, `¿Cuál es el <b>doble</b> de ${n}?`), 2 * n, { vis: n <= 6 ? `<div class="plus">${emRow('🍪', n)}<b>+</b>${emRow('🍪', n)}</div>` : '', ex: L(`El doble és sumar-lo dues vegades: ${n} + ${n} = ${2 * n}.`, `El doble es sumarlo dos veces: ${n} + ${n} = ${2 * n}.`) });
    return inp(L(`Quina és la <b>meitat</b> de ${2 * n}?`, `¿Cuál es la <b>mitad</b> de ${2 * n}?`), n, { ex: L(`La meitat és partir en dues parts iguals: ${n} + ${n} = ${2 * n}, així que la meitat és ${n}.`, `La mitad es partir en dos partes iguales: ${n} + ${n} = ${2 * n}, así que la mitad es ${n}.`) });
  },
  'g.repeat': L_ => {
    const g = ri(2, 5), k = ri(2, L_ <= 1 ? 5 : 6), [em, nm] = pickEm();
    const vis = `<div class="groups">${Array(g).fill(0).map((_, i) => `<span class="grp" style="animation-delay:${i * 90}ms">${Array(k).fill(em).join('')}</span>`).join('')}</div>`;
    if (Math.random() < .5) return inp(L(`Hi ha ${g} grups de ${k} ${nm}. Quantes ${nm} hi ha en total?`, `Hay ${g} grupos de ${k} ${nm}. ¿Cuántas ${nm} hay en total?`), g * k, { vis, ex: L(`${Array(g).fill(k).join(' + ')} = ${g * k}. És el mateix que ${g} × ${k}.`, `${Array(g).fill(k).join(' + ')} = ${g * k}. Es lo mismo que ${g} × ${k}.`) });
    return mc(L(`Quina multiplicació és igual a ${Array(g).fill(k).join(' + ')}?`, `¿Qué multiplicación es igual a ${Array(g).fill(k).join(' + ')}?`), `${g} × ${k}`, [`${g} + ${k}`, `${g + 1} × ${k}`, `${g} × ${k + 1}`], { vis, ex: L(`Sumem el ${k} ${g} vegades: ${g} × ${k} = ${g * k}.`, `Sumamos el ${k} ${g} veces: ${g} × ${k} = ${g * k}.`) });
  },
  'g.table': (L_, A) => {
    const t = pick((A || '2-5-10').split('-').map(Number)), b = ri(1, 10), p = t * b, sw = Math.random() < .5, x = sw ? b : t, y = sw ? t : b;
    if (Math.random() < .3) return mc(HOW(), p, [p + t, Math.max(1, p - t), x + y, p + 1], { vis: eqv(`${x} × ${y}`), ex: mulTip(t, b) });
    return inp(HOW(), p, { vis: eqv(`${x} × ${y} = ${BOX}`), ex: mulTip(t, b) });
  },
  'g.clock': (L_, A) => clockEx(A || 'o'),
  'g.coins': (L_, A) => {
    const max = (+A || 10) * 100, pool = max <= 1000 ? [100, 200, 500] : max <= 2000 ? [100, 200, 500, 1000] : [100, 200, 500, 1000, 2000];
    let cs, tot;
    do { cs = [...Array(ri(2, 4))].map(() => pick(pool)).sort((a, b) => b - a); tot = cs.reduce((a, b) => a + b, 0); } while (tot > max);
    return inp(L('Quants euros hi ha?', '¿Cuántos euros hay?'), tot / 100, { unit: '€', vis: moneyVis(cs), ex: `${cs.map(c => c / 100).join(' + ')} = ${tot / 100} €.` });
  },
  'g.ruler': (L_, A) => {
    const max = +A || 10;
    if (L_ >= 3) { const s = ri(1, 4), e = ri(s + 2, max); return inp(L('Quant fa el llapis? Compte: no comença al zero!', '¿Cuánto mide el lápiz? Cuidado: ¡no empieza en el cero!'), e - s, { unit: 'cm', vis: rulerSVG(s, e, max), ex: L(`Va del ${s} al ${e}: ${e} − ${s} = ${e - s} cm.`, `Va del ${s} al ${e}: ${e} − ${s} = ${e - s} cm.`) }); }
    const e = ri(2, max);
    return inp(L('Quant fa el llapis?', '¿Cuánto mide el lápiz?'), e, { unit: 'cm', vis: rulerSVG(0, e, max), ex: L(`Comença al 0 i acaba al ${e}: fa ${e} cm.`, `Empieza en el 0 y acaba en el ${e}: mide ${e} cm.`) });
  },
  'g.shape': (L_, A) => shapeEx(A === 'simple' ? SHP.filter(s => ['triangle', 'quadrat', 'rectangle', 'cercle'].includes(s[0])) : SHP),
  'g.seq': (L_, A) => {
    const step = A === 'tens' ? 10 : +A || 2, start = step === 10 ? ri(0, 4) * 10 + (L_ >= 3 ? ri(1, 9) : 0) : ri(0, 20);
    const arr = [0, 1, 2, 3, 4].map(i => start + i * step), miss = L_ <= 1 ? 4 : ri(1, 4);
    return inp(L('Quin número falta?', '¿Qué número falta?'), arr[miss], { vis: `<div class="seq">${arr.map((v, i) => i === miss ? BOX : `<span style="animation-delay:${i * 80}ms">${v}</span>`).join('')}</div>`, ex: L(`Comptem de ${step} en ${step}: ${arr.join(', ')}.`, `Contamos de ${step} en ${step}: ${arr.join(', ')}.`) });
  },
  'g.prob': (L_, A) => {
    const lim = L_ <= 2 ? 10 : 20, N = nomP(), { em, nm, Q } = pickShare();
    let M = nomP(); for (let t = 0; t < 20 && M.c === N.c; t++) M = nomP();   // dues persones diferents
    if (A === 'mul') { const k = pick([2, 5, 10]), g = ri(2, 6); return inp(L(`En una capsa hi ha ${k} ${nm}. ${Q} ${nm} hi ha en ${g} capses?`, `En una caja hay ${k} ${nm}. ¿${Q} ${nm} hay en ${g} cajas?`), g * k, { long: true, ex: L(`${g} capses de ${k}: ${g} × ${k} = ${g * k}.`, `${g} cajas de ${k}: ${g} × ${k} = ${g * k}.`) }); }
    if (A === 'sub') { const x = ri(30, 90), y = ri(10, x - 5); return inp(L(`A l'excursió hi van ${x} nens i nenes. ${y} tornen amb autobús i la resta, caminant. Quants tornen caminant?`, `A la excursión van ${x} niños y niñas. ${y} vuelven en autobús y el resto, andando. ¿Cuántos vuelven andando?`), x - y, { long: true, ex: L(`«La resta» vol dir restar: ${x} − ${y} = ${x - y}.`, `«El resto» quiere decir restar: ${x} − ${y} = ${x - y}.`) }); }
    if (A === 'cmp') { const x = ri(4, lim), y = ri(1, x - 1); return inp(L(`${N.C} té ${x} ${nm} i ${M.c} en té ${y}. ${Q} ${nm} més té ${N.c}?`, `${N.C} tiene ${x} ${nm} y ${M.c} tiene ${y}. ¿${Q} ${nm} más tiene ${N.c}?`), x - y, { long: true, ex: L(`Per saber quantes més, restem: ${x} − ${y} = ${x - y}.`, `Para saber cuántas más, restamos: ${x} − ${y} = ${x - y}.`) }); }
    if (A === 'less') { const x = ri(4, lim), y = ri(1, x - 1); return inp(L(`${N.C} té ${x} ${nm} i en regala ${y}. ${Q} ${nm} li queden?`, `${N.C} tiene ${x} ${nm} y regala ${y}. ¿${Q} ${nm} le quedan?`), x - y, { long: true, vis: lim <= 10 ? emRow(em, x, y) : '', ex: L(`Regalar vol dir treure: ${x} − ${y} = ${x - y}.`, `Regalar quiere decir quitar: ${x} − ${y} = ${x - y}.`) }); }
    const x = ri(2, lim - 2), y = ri(1, lim - x);   // des de 2: «té 1 galetes» no es pot dir
    return inp(L(`${N.C} té ${x} ${nm} i n'hi donen ${y} més. ${Q} ${nm} té ara?`, `${N.C} tiene ${x} ${nm} y le dan ${y} más. ¿${Q} ${nm} tiene ahora?`), x + y, { long: true, vis: lim <= 10 ? `<div class="plus">${emRow(em, x)}<b>+</b>${emRow(em, y)}</div>` : '', ex: L(`Li'n donen més: sumem. ${x} + ${y} = ${x + y}.`, `Le dan más: sumamos. ${x} + ${y} = ${x + y}.`) });
  },

  'dec.read': L_ => {
    let i, d1, d2; do { i = ri(1, 9); d1 = ri(0, 9); d2 = ri(1, 9); } while (new Set([i, d1, d2]).size < 3);
    const x = i + d1 / 10 + d2 / 100, s = fmtDf(x, 2), c = d1 * 10 + d2, v = Math.random();
    const un = n => n === 1 ? L('unitat', 'unidad') : L('unitats', 'unidades'), dc = n => n === 1 ? L('dècima', 'décima') : L('dècimes', 'décimas'), ce = n => n === 1 ? L('centèsima', 'centésima') : L('centèsimes', 'centésimas'), y_ = L('i', 'y');
    if (v < .4) { const pl = pick([[L('dècimes', 'décimas'), d1], [L('centèsimes', 'centésimas'), d2], [L('unitats', 'unidades'), i]]); return mc(L(`Quina xifra hi ha a les <b>${pl[0]}</b>?`, `¿Qué cifra hay en las <b>${pl[0]}</b>?`), pl[1], [i, d1, d2], { big: true, vis: bigNum(s), ex: L(`A ${s}: ${i} ${un(i)}, ${d1} ${dc(d1)} i ${d2} ${ce(d2)}. Després de la coma, primer van les dècimes.`, `En ${s}: ${i} ${un(i)}, ${d1} ${dc(d1)} y ${d2} ${ce(d2)}. Después de la coma, primero van las décimas.`) }); }
    if (v < .7 || L_ <= 1) return mc(L('Com es llegeix?', '¿Cómo se lee?'), `${i} ${un(i)} ${y_} ${c} ${ce(c)}`, [`${i} ${un(i)} ${y_} ${d2 * 10 + d1} ${ce(d2 * 10 + d1)}`, `${c} ${un(c)} ${y_} ${i} ${ce(i)}`, `${i} ${un(i)} ${y_} ${d1} ${dc(d1)}`], { vis: bigNum(s), list: true, ex: L(`${s} = ${i} ${un(i)} i ${c} ${ce(c)} (dues xifres després de la coma → centèsimes).`, `${s} = ${i} ${un(i)} y ${c} ${ce(c)} (dos cifras después de la coma → centésimas).`) });
    return dinp(L(`Escriu el número: <b>${i} ${un(i)}, ${d1} ${dc(d1)} i ${d2} ${ce(d2)}</b>`, `Escribe el número: <b>${i} ${un(i)}, ${d1} ${dc(d1)} y ${d2} ${ce(d2)}</b>`), x, { ex: L(`${i} ${un(i)} → ${i}; ${d1} ${dc(d1)} → 0,${d1}; ${d2} ${ce(d2)} → 0,0${d2}. Total: ${s}.`, `${i} ${un(i)} → ${i}; ${d1} ${dc(d1)} → 0,${d1}; ${d2} ${ce(d2)} → 0,0${d2}. Total: ${s}.`) });
  },
  'dec.cmp': L_ => {
    const i = ri(0, 9), a = i + ri(1, 9) / 10; let b = Math.random() < .15 ? a : i + ri(1, 99) / 100;
    if (Math.abs(a - b) < 1e-9) b = a;
    const sym = a < b - 1e-9 ? '<' : a > b + 1e-9 ? '>' : '=', sa = fmtDf(a, 1), sb = b === a ? fmtDf(b, 2) : fmtD(b);
    return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${sa}</span>${BOX}<span>${sb}</span></div>`, ex: L(`Truc: posa el mateix nombre de decimals. ${fmtDf(a, 2)} ${sym} ${fmtDf(b, 2)}.`, `Truco: pon el mismo número de decimales. ${fmtDf(a, 2)} ${sym} ${fmtDf(b, 2)}.`) });
  },
  'dec.order': L_ => {
    const i = ri(0, 9), set = new Set(); while (set.size < 4) set.add(+(i + (Math.random() < .5 ? ri(1, 9) / 10 : ri(1, 99) / 100)).toFixed(2));
    const vals = [...set], ans = vals.slice().sort((x, y) => x - y);
    return { type: 'order', q: L('Toca els números de <b>més petit a més gran</b>:', 'Toca los números de <b>menor a mayor</b>:'), items: shuffle(vals), show: fmtD, ans, ex: L(`Amb dos decimals tots: ${ans.map(v => fmtDf(v, 2)).join(' < ')}.`, `Con dos decimales todos: ${ans.map(v => fmtDf(v, 2)).join(' < ')}.`) };
  },
  'dec.add': L_ => {
    const d = L_ <= 2 ? 1 : 2, m = 10 ** d, A_ = ri(L_ <= 2 ? 11 : 105, L_ <= 3 ? 99 * m / 10 : 999 * m / 10), B = ri(5, A_ - 1), add = Math.random() < .5;
    const r = add ? A_ + B : A_ - B, sa = fmtDf(A_ / m, d), sb = fmtDf(B / m, d);
    return dinp(add ? L('Fes la suma:', 'Haz la suma:') : L('Fes la resta:', 'Haz la resta:'), r / m, { vis: colOp(sa, sb, add ? '+' : '−'), ex: L(`Posa les comes una sota l'altra i opera com sempre: ${sa} ${add ? '+' : '−'} ${sb} = ${fmtDf(r / m, d)}.`, `Pon las comas una debajo de la otra y opera como siempre: ${sa} ${add ? '+' : '−'} ${sb} = ${fmtDf(r / m, d)}.`) });
  },
  'dec.x10': L_ => {
    // el resultat ha de tenir com a molt 3 decimals (el que admet el teclat): amb 2 decimals, dividir només entre 10
    const dd = pick([1, 2]), x = ri(1, 999) / 10 ** dd, mul = L_ < 3 || Math.random() < .5, k = mul ? ri(1, 3) : ri(1, 3 - dd), m = 10 ** k, r = mul ? x * m : x / m;
    return dinp(HOW(), r, { vis: eqv(`${fmtD(x)} ${mul ? '×' : '÷'} ${fmt(m)} = ${BOX}`), ex: L(`${mul ? 'Multiplicar' : 'Dividir'} per ${fmt(m)} és moure la coma ${['', 'un lloc', 'dos llocs', 'tres llocs'][k]} cap a ${mul ? 'la dreta' : "l'esquerra"}: ${fmtD(r)}.`, `${mul ? 'Multiplicar' : 'Dividir'} por ${fmt(m)} es mover la coma ${['', 'un lugar', 'dos lugares', 'tres lugares'][k]} hacia la ${mul ? 'derecha' : 'izquierda'}: ${fmtD(r)}.`) });
  },
  'dec.mul': L_ => {
    if (L_ <= 2 || Math.random() < .5) { const a = ri(5, 99) / 10, b = ri(2, 9), r = a * b; return dinp(L('Fes la multiplicació:', 'Haz la multiplicación:'), r, { vis: eqv(`${fmtD(a)} × ${b} = ${BOX}`), ex: L(`Multiplica sense la coma (${Math.round(a * 10)} × ${b} = ${Math.round(r * 10)}) i després posa-hi un decimal: ${fmtD(r)}.`, `Multiplica sin la coma (${Math.round(a * 10)} × ${b} = ${Math.round(r * 10)}) y después pon un decimal: ${fmtD(r)}.`) }); }
    const q = ri(11, 99) / 10, b = ri(2, 6), a = +(q * b).toFixed(1);
    return dinp(L('Fes la divisió:', 'Haz la división:'), q, { vis: eqv(`${fmtD(a)} ÷ ${b} = ${BOX}`), ex: L(`Divideix com sempre i, quan arribis a la coma, posa-la al resultat: ${fmtD(a)} ÷ ${b} = ${fmtD(q)}. Comprova-ho: ${fmtD(q)} × ${b} = ${fmtD(a)}.`, `Divide como siempre y, cuando llegues a la coma, ponla en el resultado: ${fmtD(a)} ÷ ${b} = ${fmtD(q)}. Compruébalo: ${fmtD(q)} × ${b} = ${fmtD(a)}.`) });
  },
  'div2': L_ => {
    const d = ri(11, 25), q = ri(2, L_ >= 4 ? 40 : 15), a = d * q;
    return inp(L('Fes la divisió:', 'Haz la división:'), q, { vis: eqv(`${fmt(a)} ÷ ${d} = ${BOX}`), ex: L(`Estima: ${d} és a prop de ${Math.round(d / 10) * 10}, i prova. Comprova-ho: ${d} × ${q} = ${fmt(a)}.`, `Estima: ${d} está cerca de ${Math.round(d / 10) * 10}, y prueba. Compruébalo: ${d} × ${q} = ${fmt(a)}.`) });
  },
  'ops': L_ => {
    const a = ri(2, 9), b = ri(2, 9), c = ri(2, 9), d = ri(2, 6), P1 = L('Primer', 'Primero'), D = L('Després', 'Después');
    const T = [
      [`${a} + ${b} × ${c}`, a + b * c, `${P1} ${L('la multiplicació', 'la multiplicación')}: ${b} × ${c} = ${b * c}. ${D}: ${a} + ${b * c} = ${a + b * c}.`],
      [`(${a} + ${b}) × ${c}`, (a + b) * c, `${P1} ${L('el parèntesi', 'el paréntesis')}: ${a} + ${b} = ${a + b}. ${D}: ${a + b} × ${c} = ${(a + b) * c}.`],
      [`${a * c + 10} − ${a} × ${c}`, 10, `${P1} ${L('la multiplicació', 'la multiplicación')}: ${a} × ${c} = ${a * c}. ${D}: ${a * c + 10} − ${a * c} = 10.`],
      [`${a} × ${b} − ${c} × ${d}`, a * b - c * d, `${P1} ${L('les dues multiplicacions', 'las dos multiplicaciones')}: ${a * b} ${L('i', 'y')} ${c * d}. ${D}: ${a * b} − ${c * d} = ${a * b - c * d}.`],
      [`${a} + ${b * d} ÷ ${d}`, a + b, `${P1} ${L('la divisió', 'la división')}: ${b * d} ÷ ${d} = ${b}. ${D}: ${a} + ${b} = ${a + b}.`]
    ].filter(t => t[1] >= 0);
    const [e, ans, ex] = pick(T.slice(0, Math.max(2, Math.min(T.length, L_ + 1))));
    return inp(L('Quant fa? Recorda: primer parèntesis, després × i ÷, i al final + i −.', '¿Cuánto es? Recuerda: primero paréntesis, después × y ÷, y al final + y −.'), ans, { vis: eqv(`${e} = ${BOX}`), ex });
  },

  'mult.mul': L_ => {
    const k = ri(3, 9), c = k * ri(2, L_ >= 3 ? 12 : 10), dis = new Set();
    while (dis.size < 3) { const v = c + ri(-k + 1, k - 1); if (v > 0 && v % k) dis.add(v); }
    return mc(L(`Quin d'aquests números és <b>múltiple de ${k}</b>?`, `¿Cuál de estos números es <b>múltiplo de ${k}</b>?`), c, [...dis], { big: true, ex: L(`${c} = ${k} × ${c / k}: surt a la taula del ${k}. Els altres no.`, `${c} = ${k} × ${c / k}: sale en la tabla del ${k}. Los otros no.`) });
  },
  'mult.div': L_ => {
    const n = pick([12, 16, 18, 20, 24, 30, 36, 40, 42, 48]), divs = []; for (let i = 1; i <= n; i++) if (n % i === 0) divs.push(i);
    if (L_ >= 4 && Math.random() < .5) return inp(L(`Quants <b>divisors</b> té el ${n}?`, `¿Cuántos <b>divisores</b> tiene el ${n}?`), divs.length, { ex: L(`Els divisors de ${n} són: ${divs.join(', ')}. En total, ${divs.length}.`, `Los divisores de ${n} son: ${divs.join(', ')}. En total, ${divs.length}.`) });
    const d = pick(divs.filter(x => x > 1 && x < n)), non = []; for (let i = 2; i < n; i++) if (n % i) non.push(i);
    return mc(L(`Quin és <b>divisor</b> de ${n}?`, `¿Cuál es <b>divisor</b> de ${n}?`), d, shuffle(non), { big: true, ex: L(`${n} ÷ ${d} = ${n / d}, i és exacta. Els divisors de ${n} són: ${divs.join(', ')}.`, `${n} ÷ ${d} = ${n / d}, y es exacta. Los divisores de ${n} son: ${divs.join(', ')}.`) });
  },
  'mult.prime': L_ => {
    const P_ = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], C = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 57, 63];
    const p = pick(P_.slice(L_ <= 3 ? 0 : 4)), cs = shuffle(C).slice(0, 3), c = cs[0], f = [3, 5, 7].find(x => c % x === 0);
    return mc(L('Quin és un nombre <b>primer</b>?', '¿Cuál es un número <b>primo</b>?'), p, cs, { big: true, ex: L(`Un nombre primer només es pot dividir per 1 i per ell mateix. ${p} és primer. En canvi, ${c} = ${f} × ${c / f}.`, `Un número primo solo se puede dividir entre 1 y entre sí mismo. ${p} es primo. En cambio, ${c} = ${f} × ${c / f}.`) });
  },
  'mult.crit': L_ => {
    const k = pick([2, 3, 5, 10, 9].slice(0, L_ >= 4 ? 5 : 4)), yes = Math.random() < .5; let n;
    do n = ri(100, 9999); while ((n % k === 0) !== yes);
    const ds = String(n).split('').reduce((a, b) => a + +b, 0), f = fmt(n), u = n % 10;
    const rule = L({ 2: `Divisible per 2: acaba en xifra parella. ${f} acaba en ${u}.`, 5: `Divisible per 5: acaba en 0 o en 5. ${f} acaba en ${u}.`, 10: `Divisible per 10: acaba en 0. ${f} acaba en ${u}.`, 3: `Divisible per 3: la suma de xifres és múltiple de 3. Aquí sumen ${ds}.`, 9: `Divisible per 9: la suma de xifres és múltiple de 9. Aquí sumen ${ds}.` }, { 2: `Divisible por 2: acaba en cifra par. ${f} acaba en ${u}.`, 5: `Divisible por 5: acaba en 0 o en 5. ${f} acaba en ${u}.`, 10: `Divisible por 10: acaba en 0. ${f} acaba en ${u}.`, 3: `Divisible por 3: la suma de cifras es múltiplo de 3. Aquí suman ${ds}.`, 9: `Divisible por 9: la suma de cifras es múltiplo de 9. Aquí suman ${ds}.` })[k];
    return mc(L(`El número <b>${f}</b> és divisible per <b>${k}</b>?`, `¿El número <b>${f}</b> es divisible entre <b>${k}</b>?`), yes ? L('Sí', 'Sí') : 'No', [yes ? 'No' : 'Sí'], { big: true, ex: rule });
  },

  'fr.eq': L_ => {
    let a, b; do { b = ri(2, 6); a = ri(1, b - 1); } while (gcd(a, b) > 1);
    const k = ri(2, L_ >= 4 ? 6 : 4), up = Math.random() < .5, col = pick(COLS);
    const vis = `<div class="stack">${eqv(`${frac(a, b)} = ${up ? frac(BOX, b * k) : frac(a * k, BOX)}`)}${L_ <= 2 ? `${barSVG(a, b, col)}` : ''}</div>`;
    return inp(L('Completa la fracció equivalent:', 'Completa la fracción equivalente:'), up ? a * k : b * k, { vis, ex: L(`Multipliquem dalt i baix pel mateix número (${k}): ${a}/${b} = ${a * k}/${b * k}.`, `Multiplicamos arriba y abajo por el mismo número (${k}): ${a}/${b} = ${a * k}/${b * k}.`) });
  },
  'fr.addS': L_ => {
    const d = ri(4, 12), add = L_ <= 2 || Math.random() < .5; let a = ri(1, d - 2), b = ri(1, d - 1 - a);
    if (!add && a < b) [a, b] = [b, a]; if (!add && a === b) a++;
    const r = add ? a + b : a - b;
    return mc(HOW(), frac(r, d), [frac(r, 2 * d), frac(r + 1, d), frac(add ? a * b : a + b, d), frac(r + 2, d)].filter(x => x !== frac(r, d)).slice(0, 3), { vis: eqv(`${frac(a, d)} ${add ? '+' : '−'} ${frac(b, d)}`), big: true, ex: L(`Amb el mateix denominador, ${add ? 'sumem' : 'restem'} els numeradors: ${a} ${add ? '+' : '−'} ${b} = ${r}. El denominador (${d}) no canvia!`, `Con el mismo denominador, ${add ? 'sumamos' : 'restamos'} los numeradores: ${a} ${add ? '+' : '−'} ${b} = ${r}. ¡El denominador (${d}) no cambia!`) });
  },
  'fr.addD': L_ => {
    const pairs = L_ <= 3 ? [[2, 4], [2, 6], [3, 6], [4, 8], [3, 9], [5, 10], [2, 8]] : [[2, 3], [3, 4], [2, 5], [4, 6], [3, 5], [4, 10]];
    const [d1, d2] = shuffle(pick(pairs)), m = lcm(d1, d2), a = ri(1, d1 - 1), b = ri(1, d2 - 1), A_ = a * m / d1, B = b * m / d2;
    const add = L_ <= 2 || A_ <= B ? true : Math.random() < .5, r = add ? A_ + B : A_ - B;
    if (r <= 0) return EX['fr.addD'](L_);
    // cap distractor pot valdre el mateix que la resposta (4/10 − 1/5 = 2/10, i 3/15 també és 1/5)
    return mc(HOW(), frac(r, m), [[add ? a + b : Math.abs(a - b), d1 + d2], [r + 1, m], [r, m * 2], [r + 2, m], [Math.max(1, r - 1), m]].filter(([n, dd]) => n * m !== r * dd).slice(0, 3).map(([n, dd]) => frac(n, dd)), { vis: eqv(`${frac(a, d1)} ${add ? '+' : '−'} ${frac(b, d2)}`), big: true, ex: L(`Primer, el mateix denominador (${m}): ${a}/${d1} = ${A_}/${m} i ${b}/${d2} = ${B}/${m}. Després: ${A_} ${add ? '+' : '−'} ${B} = ${r} → ${r}/${m}.`, `Primero, el mismo denominador (${m}): ${a}/${d1} = ${A_}/${m} y ${b}/${d2} = ${B}/${m}. Después: ${A_} ${add ? '+' : '−'} ${B} = ${r} → ${r}/${m}.`) });
  },
  'fr.simp': L_ => {
    let p, q; do { q = ri(2, 9); p = ri(1, q - 1); } while (gcd(p, q) > 1);
    const k = ri(2, L_ >= 4 ? 8 : 5), n = p * k, d = q * k, h = k > 2 && k % 2 === 0 ? 2 : 1;
    return mc(L('Simplifica la fracció fins al final:', 'Simplifica la fracción hasta el final:'), frac(p, q), [frac(n / h, d / h), frac(p + 1, q), frac(p, q + 1), frac(q, p)].filter(x => x !== frac(p, q)), { vis: bigNum(frac(n, d)), big: true, ex: L(`Dividim dalt i baix per ${k}: ${n} ÷ ${k} = ${p} i ${d} ÷ ${k} = ${q}. Resultat: ${p}/${q}.`, `Dividimos arriba y abajo entre ${k}: ${n} ÷ ${k} = ${p} y ${d} ÷ ${k} = ${q}. Resultado: ${p}/${q}.`) });
  },

  'geo.angle': L_ => {
    if (L_ >= 5 && Math.random() < .6) { const A_ = ri(30, 80), B = ri(30, 150 - A_); return inp(L(`En un triangle, dos angles fan <b>${A_}°</b> i <b>${B}°</b>. Quant fa el tercer?`, `En un triángulo, dos ángulos miden <b>${A_}°</b> y <b>${B}°</b>. ¿Cuánto mide el tercero?`), 180 - A_ - B, { unit: '°', ex: L(`Els tres angles d'un triangle sempre sumen 180°: 180 − ${A_} − ${B} = ${180 - A_ - B}°.`, `Los tres ángulos de un triángulo siempre suman 180°: 180 − ${A_} − ${B} = ${180 - A_ - B}°.`) }); }
    if (L_ >= 3 && Math.random() < .5) { const [nm, d] = pick([[L('recte', 'recto'), 90], [L('pla', 'llano'), 180]]); return inp(L(`Quants graus fa un angle <b>${nm}</b>?`, `¿Cuántos grados mide un ángulo <b>${nm}</b>?`), d, { unit: '°', vis: angleSVG(d), ex: d === 90 ? L("Un angle recte fa 90°, com la cantonada d'un full.", 'Un ángulo recto mide 90°, como la esquina de una hoja.') : L('Un angle pla fa 180°: els dos costats formen una línia recta.', 'Un ángulo llano mide 180°: los dos lados forman una línea recta.') }); }
    const types = [['agut', ri(20, 70)], ['recte', 90], ['obtús', ri(110, 160)], ['pla', 180]], [id, deg] = pick(types);
    const NM = { agut: ['agut', 'agudo'], recte: ['recte', 'recto'], 'obtús': ['obtús', 'obtuso'], pla: ['pla', 'llano'] };
    const ex = L({ agut: 'Un angle agut és més tancat que un recte: fa menys de 90°.', recte: "Un angle recte fa exactament 90°, com la cantonada d'un full.", 'obtús': 'Un angle obtús és més obert que un recte però no arriba a pla: entre 90° i 180°.', pla: 'Un angle pla fa 180°: els costats formen una línia recta.' }, { agut: 'Un ángulo agudo es más cerrado que uno recto: mide menos de 90°.', recte: 'Un ángulo recto mide exactamente 90°, como la esquina de una hoja.', 'obtús': 'Un ángulo obtuso es más abierto que uno recto pero no llega a llano: entre 90° y 180°.', pla: 'Un ángulo llano mide 180°: los lados forman una línea recta.' })[id];
    return mc(L("Quin tipus d'angle és?", '¿Qué tipo de ángulo es?'), tx(NM[id]), types.filter(t => t[0] !== id).map(t => tx(NM[t[0]])), { vis: angleSVG(deg), ex });
  },
  'geo.area': L_ => {
    if (L_ <= 2) { const w = ri(2, 8), h = ri(2, 5); return inp(L('Quants quadrets ocupa? Aquesta és la seva <b>àrea</b>.', '¿Cuántos cuadraditos ocupa? Esta es su <b>área</b>.'), w * h, { unit: L('quadrets', 'cuadraditos'), vis: gridSVG(w, h), ex: L(`Hi ha ${h} files de ${w} quadrets: ${w} × ${h} = ${w * h}.`, `Hay ${h} filas de ${w} cuadraditos: ${w} × ${h} = ${w * h}.`) }); }
    if (L_ <= 4 || Math.random() < .4) { const w = ri(3, 15), h = Math.random() < .2 ? w : ri(2, 10), sq = w === h; return inp(L(`Quina és l'<b>àrea</b> d'aquest ${sq ? 'quadrat' : 'rectangle'}?`, `¿Cuál es el <b>área</b> de este ${sq ? 'cuadrado' : 'rectángulo'}?`), w * h, { unit: 'cm²', vis: rectSVG(w, h, `${w} cm`, `${h} cm`), ex: L(`Àrea = base × altura = ${w} × ${h} = ${w * h} cm².`, `Área = base × altura = ${w} × ${h} = ${w * h} cm².`) }); }
    const b = ri(3, 14); let h = ri(2, 10); if (b * h % 2) h++;
    return inp(L("Quina és l'<b>àrea</b> d'aquest triangle?", '¿Cuál es el <b>área</b> de este triángulo?'), b * h / 2, { unit: 'cm²', vis: triSVG(b, h), ex: L(`Àrea del triangle = base × altura ÷ 2 = ${b} × ${h} ÷ 2 = ${b * h / 2} cm². És la meitat d'un rectangle!`, `Área del triángulo = base × altura ÷ 2 = ${b} × ${h} ÷ 2 = ${b * h / 2} cm². ¡Es la mitad de un rectángulo!`) });
  },
  'vol': L_ => {
    if (L_ <= 2) { const a = ri(2, 4), b = ri(1, 3), c = ri(1, 2); return inp(L('Quants cubs hi ha en total? (també els que no es veuen)', '¿Cuántos cubos hay en total? (también los que no se ven)'), a * b * c, { vis: cubesSVG(a, b, c), ex: L(`Cada pis té ${a} × ${b} = ${a * b} cubs, i hi ha ${c} ${c === 1 ? 'pis' : 'pisos'}: ${a * b} × ${c} = ${a * b * c}.`, `Cada piso tiene ${a} × ${b} = ${a * b} cubos, y hay ${c} ${c === 1 ? 'piso' : 'pisos'}: ${a * b} × ${c} = ${a * b * c}.`) }); }
    if (L_ >= 5 && Math.random() < .4) { const s = ri(2, 6), m = Math.min(s, 3); return inp(L(`Quin és el volum d'un <b>cub</b> de ${s} cm de costat?`, `¿Cuál es el volumen de un <b>cubo</b> de ${s} cm de lado?`), s ** 3, { unit: 'cm³', vis: cubesSVG(m, m, m), ex: L(`Volum del cub = costat × costat × costat = ${s} × ${s} × ${s} = ${s ** 3} cm³.`, `Volumen del cubo = lado × lado × lado = ${s} × ${s} × ${s} = ${s ** 3} cm³.`) }); }
    const a = ri(2, 5), b = ri(2, 4), c = ri(1, 3);
    return inp(L("Quin és el <b>volum</b> d'aquest prisma?", '¿Cuál es el <b>volumen</b> de este prisma?'), a * b * c, { unit: 'cm³', vis: cubesSVG(a, b, c, true), ex: L(`Volum = llarg × ample × alt = ${a} × ${b} × ${c} = ${a * b * c} cm³.`, `Volumen = largo × ancho × alto = ${a} × ${b} × ${c} = ${a * b * c} cm³.`) });
  },

  'int': L_ => {
    if (L_ <= 1) { const t = ri(-10, 25); return ninp(L('Quina temperatura marca el termòmetre?', '¿Qué temperatura marca el termómetro?'), t, { unit: '°C', vis: thermoSVG(t), ex: t < 0 ? L(`El líquid és per sota del 0: fa ${fmt(t)} °C (sota zero).`, `El líquido está por debajo del 0: hace ${fmt(t)} °C (bajo cero).`) : L(`Marca ${t} °C.`, `Marca ${t} °C.`) }); }
    if (L_ === 2) {
      if (Math.random() < .5) { const x = ri(-12, 12); let y = ri(-12, 12); if (Math.random() < .1) y = x; const sym = x < y ? '<' : x > y ? '>' : '='; return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${fmt(x)}</span>${BOX}<span>${fmt(y)}</span></div>`, ex: L('A la recta numèrica, més a la dreta vol dir més gran.', 'En la recta numérica, más a la derecha quiere decir mayor.') + (x < 0 && y < 0 ? L(' Amb negatius, com més lluny del 0, més petit!', ' ¡Con negativos, cuanto más lejos del 0, más pequeño!') : '') }); }
      const set = new Set(); while (set.size < 4) set.add(ri(-15, 15)); const vals = [...set], ans = vals.slice().sort((a, b) => a - b);
      return { type: 'order', q: L('Ordena de <b>més petit a més gran</b>:', 'Ordena de <b>menor a mayor</b>:'), items: shuffle(vals), show: fmt, ans, ex: ans.map(fmt).join(' < ') };
    }
    if (L_ === 3) { const t = ri(-8, 12), d = ri(2, 12), up = Math.random() < .5, r = up ? t + d : t - d; return ninp(L(`Al matí fa <b>${fmt(t)} °C</b>. Després la temperatura ${up ? 'puja' : 'baixa'} <b>${d} graus</b>. Quina temperatura fa?`, `Por la mañana hace <b>${fmt(t)} °C</b>. Después la temperatura ${up ? 'sube' : 'baja'} <b>${d} grados</b>. ¿Qué temperatura hace?`), r, { unit: '°C', vis: thermoSVG(t), ex: `${fmt(t)} ${up ? '+' : '−'} ${d} = ${fmt(r)} °C.` }); }
    if (L_ === 4 || Math.random() < .5) { const a = ri(-9, 9), b = ri(2, 12), add = Math.random() < .5, r = add ? a + b : a - b; return ninp(HOW(), r, { vis: eqv(`${a < 0 ? '(' + fmt(a) + ')' : a} ${add ? '+' : '−'} ${b} = ${BOX}`), ex: L(`Imagina la recta numèrica: surts del ${fmt(a)} i ${add ? 'avances' : 'retrocedeixes'} ${b}: arribes al ${fmt(r)}.`, `Imagina la recta numérica: sales del ${fmt(a)} y ${add ? 'avanzas' : 'retrocedes'} ${b}: llegas al ${fmt(r)}.`) }); }
    const p = ri(20, 60), s = ri(5, Math.min(30, p - 1)), r = -p + s;   // continua sota l'aigua
    return ninp(L(`Un submarí és a <b>${fmt(-p)} m</b> i puja <b>${s} m</b>. A quina altura és ara?`, `Un submarino está a <b>${fmt(-p)} m</b> y sube <b>${s} m</b>. ¿A qué altura está ahora?`), r, { unit: 'm', ex: `${fmt(-p)} + ${s} = ${fmt(r)} m.` });
  },
  'pow': L_ => {
    const v = L_ <= 1 ? 0 : L_ === 2 ? 1 : L_ === 3 ? 2 : L_ === 4 ? 3 : ri(0, 4);
    if (v === 0) { const a = ri(2, 10); return inp(HOW(), a * a, { vis: `<div class="stack">${eqv(`${a}² = ${BOX}`)}${a <= 6 ? emGrid('🟪', a * a, a) : ''}</div>`, ex: L(`${a}² = ${a} × ${a} = ${a * a}. Per això es diu «al quadrat».`, `${a}² = ${a} × ${a} = ${a * a}. Por eso se dice «al cuadrado».`) }); }
    if (v === 1) { const a = ri(2, 5); return inp(HOW(), a ** 3, { vis: eqv(`${a}³ = ${BOX}`), ex: `${a}³ = ${a} × ${a} × ${a} = ${a ** 3}.` }); }
    if (v === 2) { const k = ri(2, 6); if (Math.random() < .5) return inp(HOW(), 10 ** k, { vis: eqv(`10${sup(k)} = ${BOX}`), ex: L(`10${sup(k)} és un 1 seguit de ${k} zeros: ${fmt(10 ** k)}.`, `10${sup(k)} es un 1 seguido de ${k} ceros: ${fmt(10 ** k)}.`) }); return inp(HOW(), 2 ** k, { vis: eqv(`2${sup(k)} = ${BOX}`), ex: `${Array(k).fill(2).join(' × ')} = ${2 ** k}.` }); }
    if (v === 3) { const a = ri(2, 12); return inp(HOW(), a, { vis: eqv(`√${a * a} = ${BOX}`), ex: L(`Quin número multiplicat per ell mateix fa ${a * a}? ${a} × ${a} = ${a * a}, per tant √${a * a} = ${a}.`, `¿Qué número multiplicado por sí mismo da ${a * a}? ${a} × ${a} = ${a * a}, por lo tanto √${a * a} = ${a}.`) }); }
    const a = ri(2, 6), k = ri(3, 5);
    return mc(L("Com s'escriu com a potència?", '¿Cómo se escribe como potencia?'), `${a}${sup(k)}`, [...(k ** a === a ** k ? [`${a}${sup(k - 1)}`] : [`${k}${sup(a)}`]), `${a * k}`, `${a}${sup(k + 1)}`], { vis: eqv(Array(k).fill(a).join(' × ')), big: true, ex: L(`El ${a} es multiplica ${k} vegades: ${a}${sup(k)}. El ${a} és la base i el ${k}, l'exponent.`, `El ${a} se multiplica ${k} veces: ${a}${sup(k)}. El ${a} es la base y el ${k}, el exponente.`) });
  },
  'pct': L_ => {
    const P_ = pick(L_ <= 1 ? [50, 10, 25] : L_ <= 3 ? [10, 20, 25, 50, 75] : [5, 10, 15, 20, 25, 30, 50, 75]), step = 100 / gcd(P_, 100), q = step * ri(Math.max(1, Math.ceil(20 / step)), Math.max(2, Math.floor(400 / step))), v = q * P_ / 100;
    const tip = L({ 50: `El 50% és la meitat: ${q} ÷ 2 = ${v}.`, 25: `El 25% és la quarta part: ${q} ÷ 4 = ${v}.`, 10: `El 10% és dividir per 10: ${q} ÷ 10 = ${v}.`, 75: `El 75% són tres quarts: ${q} ÷ 4 × 3 = ${v}.` }, { 50: `El 50% es la mitad: ${q} ÷ 2 = ${v}.`, 25: `El 25% es la cuarta parte: ${q} ÷ 4 = ${v}.`, 10: `El 10% es dividir entre 10: ${q} ÷ 10 = ${v}.`, 75: `El 75% son tres cuartos: ${q} ÷ 4 × 3 = ${v}.` })[P_] || `${P_}% ${L('de', 'de')} ${q} = ${q} × ${P_} ÷ 100 = ${v}.`;
    if (L_ >= 5 && Math.random() < .6) return inp(L(`Una bicicleta costa <b>${q} €</b> i té un <b>${P_}% de descompte</b>. Quant costa ara?`, `Una bicicleta cuesta <b>${q} €</b> y tiene un <b>${P_}% de descuento</b>. ¿Cuánto cuesta ahora?`), q - v, { unit: '€', long: true, ex: tip + L(` Llavors ${q} − ${v} = ${q - v} €.`, ` Entonces ${q} − ${v} = ${q - v} €.`) });
    return inp(L(`Quant és el <b>${P_}%</b> de ${fmt(q)}?`, `¿Cuánto es el <b>${P_}%</b> de ${fmt(q)}?`), v, { vis: `<div class="pctbar"><div style="width:${P_}%"></div><span>${P_}%</span></div>`, ex: tip });
  },
  'prop': L_ => {
    const T = [
      () => { const a = ri(2, 5), p = ri(2, 6), b = ri(a + 1, 10); return [L(`${a} llibretes costen ${a * p} €. Quant costen ${b} llibretes?`, `${a} libretas cuestan ${a * p} €. ¿Cuánto cuestan ${b} libretas?`), b * p, L(`Primer, 1 llibreta: ${a * p} ÷ ${a} = ${p} €. Després: ${b} × ${p} = ${b * p} €.`, `Primero, 1 libreta: ${a * p} ÷ ${a} = ${p} €. Después: ${b} × ${p} = ${b * p} €.`), '€']; },
      () => { const a = pick([2, 4]), g = pick([50, 100, 150]), b = pick([6, 8, 10, 12]); return [L(`Per fer un pastís per a ${a} persones calen ${a * g} g de farina. Quanta farina cal per a ${b} persones?`, `Para hacer un pastel para ${a} personas hacen falta ${a * g} g de harina. ¿Cuánta harina hace falta para ${b} personas?`), b * g, L(`Per a 1 persona: ${a * g} ÷ ${a} = ${g} g. Per a ${b}: ${b} × ${g} = ${fmt(b * g)} g.`, `Para 1 persona: ${a * g} ÷ ${a} = ${g} g. Para ${b}: ${b} × ${g} = ${fmt(b * g)} g.`), 'g']; },
      () => { const s = pick([2, 5, 10, 20]), c = ri(3, 12); return [L(`En un mapa, 1 cm són ${s} km de veritat. Dues ciutats estan a ${c} cm al mapa. Quants km les separen?`, `En un mapa, 1 cm son ${s} km de verdad. Dos ciudades están a ${c} cm en el mapa. ¿Cuántos km las separan?`), s * c, L(`Cada centímetre són ${s} km: ${c} × ${s} = ${s * c} km.`, `Cada centímetro son ${s} km: ${c} × ${s} = ${s * c} km.`), 'km']; },
      () => { const v = pick([60, 80, 90, 100, 120]), h = ri(2, 5); return [L(`Un tren fa ${v} km cada hora. Quants km fa en ${h} hores?`, `Un tren recorre ${v} km cada hora. ¿Cuántos km recorre en ${h} horas?`), v * h, `${h} × ${v} = ${v * h} km.`, 'km']; }
    ];
    const [q, a, ex, u] = pick(T)();
    return inp(q, a, { unit: u, long: true, ex });
  },
  'stat': L_ => {
    const sets = [
      [L('Fruita preferida de la classe', 'Fruta preferida de la clase'), ['🍎', '🍌', '🍓', '🍊'], L(['poma', 'plàtan', 'maduixa', 'taronja'], ['manzana', 'plátano', 'fresa', 'naranja'])],
      [L('Llibres llegits cada dia', 'Libros leídos cada día'), L(['dl', 'dt', 'dc', 'dj', 'dv'], ['lu', 'ma', 'mi', 'ju', 'vi']), L(['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres'], ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'])],
      [L('Esport preferit', 'Deporte preferido'), ['⚽', '🏀', '🏊', '🚴'], L(['futbol', 'bàsquet', 'natació', 'bicicleta'], ['fútbol', 'baloncesto', 'natación', 'bicicleta'])]
    ];
    const [title, labels, names] = pick(sets), n = labels.length; let vals;
    do { vals = labels.map(() => ri(1, 10)); } while (new Set(vals).size < n - 1 || vals.filter(v => v === Math.max(...vals)).length > 1);
    const v = L_ <= 1 ? 0 : L_ === 2 ? 1 : L_ === 3 ? 2 : L_ === 4 ? pick([3, 4]) : ri(0, 4), vis = barsSVG(labels, vals, title);
    if (v === 0) { const i = ri(0, n - 1); return inp(L(`Segons el gràfic, quant val <b>${names[i]}</b>?`, `Según el gráfico, ¿cuánto vale <b>${names[i]}</b>?`), vals[i], { vis, ex: L(`La barra de ${names[i]} arriba fins al ${vals[i]}.`, `La barra de ${names[i]} llega hasta el ${vals[i]}.`) }); }
    if (v === 1) { const mx = Math.max(...vals), i = vals.indexOf(mx); return mc(L('Quina és la <b>moda</b> (el que més es repeteix)?', '¿Cuál es la <b>moda</b> (lo que más se repite)?'), names[i], names.filter((_, j) => j !== i), { vis, ex: L(`La moda és la barra més alta: ${names[i]} (${mx}).`, `La moda es la barra más alta: ${names[i]} (${mx}).`) }); }
    if (v === 2) { let s = vals.reduce((a, b) => a + b, 0); while (s % n) { vals[n - 1]++; s++; } if (vals[n - 1] > 12) return EX['stat'](L_); return inp(L('Quina és la <b>mitjana</b>?', '¿Cuál es la <b>media</b>?'), s / n, { vis: barsSVG(labels, vals, title), ex: L(`Sumem tots els valors (${vals.join(' + ')} = ${s}) i dividim entre ${n}: ${s} ÷ ${n} = ${s / n}.`, `Sumamos todos los valores (${vals.join(' + ')} = ${s}) y dividimos entre ${n}: ${s} ÷ ${n} = ${s / n}.`) }); }
    if (v === 3) { const mx = Math.max(...vals), mn = Math.min(...vals); return inp(L('Quin és el <b>rang</b> (el més gran menys el més petit)?', '¿Cuál es el <b>rango</b> (el mayor menos el menor)?'), mx - mn, { vis, ex: `${mx} − ${mn} = ${mx - mn}.` }); }
    const i = vals.indexOf(Math.max(...vals)), j = vals.indexOf(Math.min(...vals));
    return inp(L(`Quants més té <b>${names[i]}</b> que <b>${names[j]}</b>?`, `¿Cuántos más tiene <b>${names[i]}</b> que <b>${names[j]}</b>?`), vals[i] - vals[j], { vis, ex: `${vals[i]} − ${vals[j]} = ${vals[i] - vals[j]}.` });
  },
  'p.dec': L_ => {
    const T = [
      () => { const n = ri(2, 5), p = pick([150, 175, 225, 250, 320, 480]); return [L(`Compres ${n} entrepans de ${eur(p)} cadascun. Quant pagues?`, `Compras ${n} bocadillos de ${eur(p)} cada uno. ¿Cuánto pagas?`), n * p / 100, `${n} × ${fmtDf(p / 100, 2)} = ${fmtD(n * p / 100)} €.`]; },
      () => { const t = pick([1000, 2000, 5000]), p = ri(30, t / 10) * 5; return [L(`Tens ${eur(t)} i compres un llibre de ${eur(p)}. Quant et queda?`, `Tienes ${eur(t)} y compras un libro de ${eur(p)}. ¿Cuánto te queda?`), (t - p) / 100, `${fmtDf(t / 100, 2)} − ${fmtDf(p / 100, 2)} = ${fmtD((t - p) / 100)} €.`]; },
      () => { const n = ri(2, 6), b = pick([1.5, 0.75, 1.25, 2.5, 0.5]); return [L(`Una ampolla té ${fmtD(b)} litres. Quants litres hi ha en ${n} ampolles?`, `Una botella tiene ${fmtD(b)} litros. ¿Cuántos litros hay en ${n} botellas?`), n * b, `${n} × ${fmtD(b)} = ${fmtD(n * b)} l.`, 'l']; },
      () => { const n = pick([2, 4, 5]), q = ri(3, 12) + pick([0, .5, .25]); return [L(`${n} amics paguen a parts iguals un sopar de ${fmtD(n * q)} €. Quant paga cadascú?`, `${n} amigos pagan a partes iguales una cena de ${fmtD(n * q)} €. ¿Cuánto paga cada uno?`), q, `${fmtD(n * q)} ÷ ${n} = ${fmtD(q)} €.`]; }
    ];
    const [q, a, ex, u] = pick(T)();
    return dinp(q, a, { unit: u || '€', long: true, ex });
  }
});
