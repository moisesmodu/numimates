/* ===== Teoria animada · part 2: 4t, 5è i 6è de primària (c4, c5 i c6) =====
   Escenes noves (tipus «p2…») i la configuració de cada concepte d'aquests cursos. Tot va dins d'una
   funció perquè els ajudants no xoquin amb els d'altres fitxers d'escenes. Cada escena rep `L`: la llista
   de fases (o de segons) en què surt cada línia de l'exemple, perquè el text i el dibuix vagin junts.
   L'estil base de cada element és l'estat final: amb «moviment reduït» es veu directament el resultat. */
(() => {
const INK = AN_INK, Y = '#FFC93C', RED = '#E4574B', BLUE = '#3D7BE0', PAL = '#F3ECF8', LN = '#E6DEEE', BG = '#FAF7FC', WH = '#fff', UC = 'var(--uc)', GRY = '#9A8FA6';
const r1 = v => { const x = Math.round(v * 10) / 10; return Object.is(x, -0) ? '0' : String(x); };
const TS = t => `--t:${(+t).toFixed(2)}s`;
const A = (t, cls = 'a-pop', more = '') => `class="an ${cls}${more ? ' ' + more : ''}" style="${TS(t)}"`;
// números a la catalana: punt de milers i coma decimal
const decs = v => { for (let d = 0; d < 4; d++) if (Math.abs(v * 10 ** d - Math.round(v * 10 ** d)) < 1e-7) return d; return 3; };
const nf = (v, d) => { if (d == null) d = decs(v); const neg = v < -1e-9; let [i, f] = Math.abs(v).toFixed(d).split('.'); if (i.length > 4 || (i.length === 4)) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); return (neg ? '−' : '') + i + (f ? ',' + f : ''); };
const tw = (s, fs) => String(s).replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '#').length * fs * .6;
const txt = (x, y, s, fs = 16, o = {}) => `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${o.a || 'middle'}" font-size="${fs}" font-weight="${o.w || 900}" fill="${o.c || INK}" ${AN_F}${o.op != null ? ` opacity="${o.op}"` : ''}${o.an ? ' ' + o.an : ''}>${s}</text>`;
const G = (an, inner) => `<g ${an}>${inner}</g>`;
const pop = (t, inner, cls = 'a-pop') => G(A(t, cls), inner);
const gone = (t, inner) => `<g class="an p2-out" style="${TS(t)}">${inner}</g>`;
const win = (t0, t1, inner, cls = 'a-pop') => t1 == null ? pop(t0, inner, cls) : gone(t1, pop(t0, inner, cls));
const move = (t, fx, fy, inner) => `<g class="an a-move" style="${TS(t)};--fx:${r1(fx)}px;--fy:${r1(fy)}px">${inner}</g>`;
const rot = (t, r, ox, oy, inner, r0 = 0) => `<g class="an p2-rot" style="${TS(t)};--r:${r}deg;--r0:${r0}deg;transform-origin:${r1(ox)}px ${r1(oy)}px">${inner}</g>`;
const rect = (x, y, w, h, o = {}) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(Math.max(0, w))}" height="${r1(Math.max(0, h))}" rx="${o.rx ?? 6}"${o.cls ? '' : ` fill="${o.f || WH}"`}${o.s ? ` stroke="${o.s}" stroke-width="${o.sw || 2}"` : ''}${o.da ? ` stroke-dasharray="${o.da}"` : ''}${o.op != null ? ` opacity="${o.op}"` : ''}${o.an ? ' ' + o.an : o.cls ? ` class="${o.cls}"` : ''}/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${o.s || INK}" stroke-width="${o.sw || 2.5}" stroke-linecap="round"${o.da ? ` stroke-dasharray="${o.da}"` : ''}${o.op != null ? ` opacity="${o.op}"` : ''}${o.an ? ' ' + o.an + (o.an.includes('a-draw') ? ' pathLength="1"' : '') : ''}/>`;
const path = (d, o = {}) => `<path d="${d}"${o.cls ? '' : ` fill="${o.f || 'none'}"`} stroke="${o.s || INK}" stroke-width="${o.sw ?? 2.5}" stroke-linecap="round" stroke-linejoin="round"${o.da ? ` stroke-dasharray="${o.da}"` : ''}${o.op != null ? ` opacity="${o.op}"` : ''}${o.an ? ' ' + o.an + (o.an.includes('a-draw') ? ' pathLength="1"' : '') : o.cls ? ` class="${o.cls}"` : ''}/>`;
const circ = (x, y, r, o = {}) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(r)}"${o.cls ? '' : ` fill="${o.f || UC}"`}${o.s ? ` stroke="${o.s}" stroke-width="${o.sw || 2}"` : ''}${o.da ? ` stroke-dasharray="${o.da}"` : ''}${o.op != null ? ` opacity="${o.op}"` : ''}${o.an ? ' ' + o.an : o.cls ? ` class="${o.cls}"` : ''}/>`;
const img = (n, x, y, s, an = '') => `<image href="img/ic/${n}.webp" x="${r1(x - s / 2)}" y="${r1(y - s / 2)}" width="${s}" height="${s}"${an ? ' ' + an : ''}/>`;
// etiqueta arrodonida centrada a (x, y)
const pill = (x, y, s, fs = 15, o = {}) => { const w = tw(s, fs) + (o.pad ?? 18), h = fs + 12; return rect(x - w / 2, y - h / 2, w, h, { rx: h / 2, f: o.f || WH, s: o.s || UC, sw: o.sw || 2 }) + txt(x, y + fs * .36, s, fs, { c: o.c || INK }); };
// fracció apilada amb la ratlla a l'altura y
const frac = (n, d, x, y, s = 20, c = INK) => { const w = Math.max(String(n).length, String(d).length) * s * .34 + 4; return txt(x, y - 4, n, s, { c }) + line(x - w, y + 1, x + w, y + 1, { s: c, sw: s > 16 ? 2.5 : 2 }) + txt(x, y + s * .78 + 4, d, s, { c }); };
// punta de fletxa a (x, y) que apunta cap a l'angle ang (graus, com l'SVG)
const head = (x, y, ang, s = 7, f = INK) => { const a = ang * Math.PI / 180, p = da => [x + s * Math.cos(a + da), y + s * Math.sin(a + da)]; const [x1, y1] = p(Math.PI * .8), [x2, y2] = p(-Math.PI * .8); return `<path d="M${r1(x)},${r1(y)} L${r1(x1)},${r1(y1)} L${r1(x2)},${r1(y2)} Z" fill="${f}"/>`; };
// salt en forma d'arc (amunt o avall) que es dibuixa a l'instant t
const hop = (x0, x1, y, h, t, c = UC, down = false) => { const xm = (x0 + x1) / 2, u = down ? 1 : -1, cy = y + u * h * 2; const ang = Math.atan2(y - cy, x1 - xm) * 180 / Math.PI; return path(`M${r1(x0)},${r1(y)} Q${r1(xm)},${r1(cy)} ${r1(x1)},${r1(y)}`, { s: c, sw: 2.5, an: A(t, 'a-draw') }) + pop(t + .3, head(x1, y, ang, 6.5, c)); };
const arrow = (x0, y0, x1, y1, t, c = INK, sw = 2.5) => { const ang = Math.atan2(y1 - y0, x1 - x0) * 180 / Math.PI; return line(x0, y0, x1 - 5 * Math.cos(ang * Math.PI / 180), y1 - 5 * Math.sin(ang * Math.PI / 180), { s: c, sw, an: A(t, 'a-draw') }) + pop(t + .25, head(x1, y1, ang, 7, c)); };
// clau horitzontal (dir 1: la punta cap avall) i vertical (dir 1: la punta cap a la dreta)
const brace = (x0, x1, y, dir = 1, h = 8) => { const m = (x0 + x1) / 2, q = h / 2; if (x1 - x0 < 2 * h + 2) return `M${r1(x0)},${r1(y)} v${r1(dir * q)} H${r1(x1)} v${r1(-dir * q)}`; return `M${r1(x0)},${r1(y)} q0,${r1(dir * q)} ${r1(q)},${r1(dir * q)} H${r1(m - q)} q${r1(q)},0 ${r1(q)},${r1(dir * q)} q0,${r1(-dir * q)} ${r1(q)},${r1(-dir * q)} H${r1(x1 - q)} q${r1(q)},0 ${r1(q)},${r1(-dir * q)}`; };
const vbrace = (y0, y1, x, dir = 1, h = 8) => { const m = (y0 + y1) / 2, q = h / 2; return `M${r1(x)},${r1(y0)} q${r1(dir * q)},0 ${r1(dir * q)},${r1(q)} V${r1(m - q)} q0,${r1(q)} ${r1(dir * q)},${r1(q)} q${r1(-dir * q)},0 ${r1(-dir * q)},${r1(q)} V${r1(y1 - q)} q0,${r1(q)} ${r1(-dir * q)},${r1(q)}`; };
const check = (x, y, t, c = '#2FA84F') => pop(t, circ(x, y, 11, { f: c }) + path(`M${r1(x - 5)},${r1(y)} l3.5,4 l6.5,-8`, { s: WH, sw: 3 }));
const PN = { 6: 'UMi', 5: 'CM', 4: 'DM', 3: 'UM', 2: 'C', 1: 'D', 0: 'U', '-1': 'd', '-2': 'c', '-3': 'm' };
// reparteix una amplada total entre parts proporcionals, amb un mínim perquè es puguin llegir
const split = (vals, W, min) => { const tot = vals.reduce((a, b) => a + b, 0); let ws = vals.map(v => W * v / tot); const small = ws.map(w => w < min); const fixed = small.reduce((a, s) => a + (s ? min : 0), 0), rest = vals.reduce((a, v, i) => a + (small[i] ? 0 : v), 0); return ws.map((w, i) => small[i] ? min : (W - fixed) * vals[i] / rest); };
const done = (h, body, ph, L) => ({ html: anSvg(320, Math.ceil(h), body), at: L.map(k => { const v = typeof k === 'number' ? k : ph[k]; if (!(v >= 0)) throw new Error('fase ' + k); return +v.toFixed(2); }) });
const digSplit = s => { const [i, f = ''] = String(s).replace(/\./g, '').split(','); return { i, f }; };
// cares d'un dau
const PIPS = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
const die = (x, y, v, s = 36, o = {}) => rect(x - s / 2, y - s / 2, s, s, { rx: s * .22, f: o.f || WH, s: o.s || INK, sw: 2.5, da: o.da }) + (PIPS[v] || []).map(([a, b]) => circ(x + a * s * .27, y + b * s * .27, s * .085, { f: o.pc || INK })).join('');

const S = {
  /* ---------- nombres ---------- */
  // taula de valor de posició: les xifres del número cauen a la seva columna i després es veu quant val cadascuna
  p2place({ n, cols, hi, L }) {
    const k = cols.length, cw = Math.min(46, 276 / k), x0 = (320 - cw * k) / 2, cx = i => x0 + cw * i + cw / 2;
    const dg = String(n).split(''), rh = k > 5 ? 18 : 20, ty = 64, tb = 96, yEnd = tb + 8 + k * rh, ph = { num: .2 };
    let s = '', under = '';
    const chs = nf(+n).split(''), cwid = c => c === '.' ? 9 : 17; let x = 160 - chs.reduce((a, c) => a + cwid(c), 0) / 2; const dx = [];
    chs.forEach(c => { const w = cwid(c); s += txt(x + w / 2, 30, c, 26, { an: A(.2) }); if (c !== '.') dx.push(x + w / 2); x += w; });
    s += cols.map((h, i) => txt(cx(i), ty - 8, h, 12, { c: UC })).join('');
    under += rect(x0, ty, cw * k, yEnd - ty, { rx: 10, f: BG, s: LN }) + line(x0 + 3, tb, x0 + cw * k - 3, tb, { s: LN, sw: 2 });
    for (let i = 1; i < k; i++) under += line(x0 + i * cw, ty, x0 + i * cw, yEnd, { s: LN, sw: 2 });
    const td = i => .8 + .22 * i; ph.cols = td(k - 1) + .55;
    dg.forEach((d, i) => s += move(td(i), dx[i] - cx(i), 30 - (tb - 9), txt(cx(i), tb - 9, d, 22)));
    const tv = i => ph.cols + .3 + .42 * i; ph.vals = tv(k - 1) + .45; ph.hi = ph.vals + .35; ph.end = ph.vals + .8;
    dg.forEach((d, i) => {
      const y = tb + 4 + (i + 1) * rh - 4; let r = '';
      if (d === '0') r = txt(cx(i), y, '0', 16, { c: GRY });
      else { r = txt(cx(i), y, d, 16); for (let j = i + 1; j < k; j++) r += txt(cx(j), y, '0', 16, { c: RED }); }
      if (i) r += txt(x0 - 9, y, '+', 14, { c: GRY });
      s += pop(tv(i), r, 'a-fade');
      if (hi === i) under += rect(x0 + 3, y - 15, cw * k - 6, rh, { rx: 6, f: Y, an: A(ph.hi, 'a-fade') }) + rect(x0 + i * cw + 3, ty + 3, cw - 6, tb - ty - 6, { rx: 6, f: Y, an: A(ph.hi, 'a-fade') });
    });
    return done(yEnd + 4, under + s, ph, L);
  },
  // un número gran partit en grups de tres xifres (milions · mil · unitats)
  p2groups3({ n, L }) {
    const ds = String(n).split(''), len = ds.length, G3 = Math.ceil(len / 3), gi = i => Math.floor((len - 1 - i) / 3), labs = [L_('unitats', 'unidades'), 'mil', L_('milions', 'millones')];
    const cw = 22, gap = 30, dotw = 10, y = 56, ph = { num: .2, split: 1.4 };
    const cx0 = [], cx1 = []; let w0 = 0, w1 = 0;
    ds.forEach((d, i) => { if (i && gi(i) !== gi(i - 1)) { w0 += dotw; w1 += gap; } cx0.push(w0 + cw / 2); cx1.push(w1 + cw / 2); w0 += cw; w1 += cw; });
    const o0 = 160 - w0 / 2, o1 = 160 - w1 / 2;
    let s = '', under = '';
    ds.forEach((d, i) => { s += move(1.0, o0 + cx0[i] - o1 - cx1[i], 0, txt(o1 + cx1[i], y, d, 28, { an: A(.2) })); if (i && gi(i) !== gi(i - 1)) s += gone(.9, txt(o0 + cx0[i] - cw / 2 - dotw / 2, y, '.', 28, { an: A(.2) })); });
    // claus i noms de cada grup, i els grups es llegeixen un darrere l'altre
    let t = 2.0;
    for (let g = G3 - 1; g >= 0; g--) {
      const idx = ds.map((_, i) => i).filter(i => gi(i) === g), xa = o1 + cx1[idx[0]] - cw / 2, xb = o1 + cx1[idx[idx.length - 1]] + cw / 2;
      s += path(brace(xa + 2, xb - 2, y + 12, 1, 10), { s: UC, sw: 2.5, an: A(1.5, 'a-draw') }) + txt((xa + xb) / 2, y + 44, labs[g] || '', 13, { c: UC, an: A(1.7) });
      under += win(t, g ? t + 1.05 : null, rect(xa - 3, y - 26, xb - xa + 6, 34, { rx: 8, f: Y }), 'a-fade');
      ph['g' + (G3 - 1 - g)] = t + .3; t += 1.1;
    }
    ph.all = t + .1;
    s += pop(t, pill(160, y + 88, nf(+n), 20, { f: Y, s: INK }));
    return done(y + 106, under + s, ph, L);
  },
  // comparar dos números: comptant-ne les xifres o xifra a xifra d'esquerra a dreta
  p2cmp({ pairs, L }) {
    let s = '', under = '', y = 6, t = .2; const ph = {};
    pairs.forEach((pr, pi) => {
      const P = `p${pi}`; ph[P] = t;
      const sign = pr.sign === '<' ? '&lt;' : '&gt;';
      if (pr.mode === 'count') {
        const cw = c => c === '.' ? 8 : 15, wa = [...pr.a].reduce((a, c) => a + cw(c), 0), wb = [...pr.b].reduce((a, c) => a + cw(c), 0), x0 = 160 - (wa + 44 + wb) / 2;
        const put = (str, xs, tc) => { let x = xs, k = 0, o = ''; [...str].forEach(c => { const w = cw(c); o += txt(x + w / 2, y + 24, c, 22, { an: A(t) }); if (c !== '.') { k++; o += txt(x + w / 2, y + 42, k, 10, { c: UC, an: A(tc + k * .06) }); } x += w; }); return [o, k]; };
        const [sa, ka] = put(pr.a, x0, t + .5), [sb, kb] = put(pr.b, x0 + wa + 44, t + .5 + ka * .06 + .2);
        const tn = t + .9 + (ka + kb) * .06;
        s += sa + sb + pop(tn, pill(x0 + wa / 2, y + 64, `${ka} ${L_('xifres', 'cifras')}`, 12)) + pop(tn + .2, pill(x0 + wa + 44 + wb / 2, y + 64, `${kb} ${L_('xifres', 'cifras')}`, 12));
        ph[P + 'n'] = tn + .4; ph[P + 'e'] = tn + .8;
        s += txt(x0 + wa + 22, y + 26, sign, 26, { c: RED, an: A(ph[P + 'e'] - .2) });
        y += 84; t = ph[P + 'e'] + .4; return;
      }
      const a = digSplit(pr.a), b = digSplit(pr.b), hiP = Math.max(a.i.length, b.i.length) - 1, nd = Math.max(a.f.length, b.f.length), cw = 27;
      const places = []; for (let p = hiP; p >= -nd; p--) places.push(p);
      const sepAfter = p => (p > 0 && p % 3 === 0) ? 8 : (p === 0 && nd) ? 10 : 0;
      let wtot = 0; const X = {}; places.forEach(p => { X[p] = wtot + cw / 2; wtot += cw + sepAfter(p); }); wtot -= sepAfter(-nd);
      const x0 = 160 - wtot / 2, px = p => x0 + X[p], yh = y + 12, ya = y + (pr.heads ? 44 : 28), yb = ya + 32;
      if (pr.heads) s += places.map(p => txt(px(p), yh, PN[p], 11, { c: UC, an: A(t) })).join('');
      const dig = (o, p) => p >= 0 ? o.i[o.i.length - 1 - p] : o.f[-p - 1];
      const pads = [];
      [[a, ya], [b, yb]].forEach(([o, yy]) => places.forEach(p => {
        let d = dig(o, p); const isPad = d == null && p < 0;
        if (d == null && !isPad) return;
        under += rect(px(p) - cw / 2 + 2, yy - 22, cw - 4, 29, { rx: 6, f: WH, s: LN, sw: 1.5, an: A(t, 'a-fade') });
        if (isPad) pads.push([p, yy]); else s += txt(px(p), yy, d, 22, { an: A(t) });
        const sa = sepAfter(p); if (sa && (dig(o, p - 1) != null || (p === 0 && nd))) s += txt(px(p) + cw / 2 + sa / 2, yy, p ? '.' : ',', 22, { an: A(t) });
      }));
      let tc = t + .7, j = 0;
      for (const p of places) {
        if (p < 0 && pads.length && ph[P + 'pad'] == null) { pads.forEach(([pp, yy]) => s += txt(px(pp), yy, '0', 22, { c: RED, an: A(tc) })); ph[P + 'pad'] = tc + .3; tc += .7; }
        const da = dig(a, p) ?? '0', db = dig(b, p) ?? '0';
        const fr = rect(px(p) - cw / 2 - 1, ya - 26, cw + 2, yb - ya + 36, { rx: 8, f: 'none', s: Y, sw: 3.5 });
        if (da === db) { under += win(tc, tc + .5, fr, 'a-fade'); s += txt(px(p), yb + 22, '=', 16, { c: GRY, an: A(tc + .2) }); ph[`${P}c${j}`] = tc + .3; tc += .5; j++; continue; }
        under += pop(tc, rect(px(p) - cw / 2 - 1, ya - 26, cw + 2, yb - ya + 36, { rx: 8, f: Y, op: .6 }), 'a-fade');
        s += pop(tc + .35, pill(px(p), yb + 28, `${da} ${+da < +db ? '&lt;' : '&gt;'} ${db}`, 13, { s: RED }));
        ph[`${P}c${j}`] = ph[P + 'd'] = tc + .5; break;
      }
      if (ph[P + 'pad'] == null) ph[P + 'pad'] = t + .3;
      ph[P + 'e'] = ph[P + 'd'] + .8;
      if (pr.fin !== false) { s += pop(ph[P + 'e'] - .2, pill(160, yb + 62, `${pr.a} ${sign} ${pr.b}`, 17, { f: Y, s: INK })); y = yb + 80; }
      else y = yb + 44;
      t = ph[P + 'e'] + .4;
    });
    return done(y, under + s, ph, L);
  },
  // arrodonir: el número sobre una recta, entre els dos rodons, i cap a quin s'acosta
  p2round({ num, lines, L }) {
    const ph = { num: .2 }; let s = '', under = '';
    const chs = [...num], cwid = c => /[.,]/.test(c) ? 9 : 17; let x = 160 - chs.reduce((a, c) => a + cwid(c), 0) / 2; const cxs = [];
    chs.forEach(c => { const w = cwid(c); cxs.push(x + w / 2); s += txt(x + w / 2, 32, c, 26, { an: A(.2) }); x += w; });
    let t = .8;
    lines.forEach((l, i) => {
      const y = 96 + i * 74, X = v => 40 + (v - l.lo) / (l.hi - l.lo) * 240, mid = (l.lo + l.hi) / 2;
      ph['l' + i] = t;
      let ax = line(X(l.lo) - 8, y, X(l.hi) + 8, y, { sw: 3 });
      for (let v = l.lo; v <= l.hi + 1e-9; v += l.step) ax += line(X(v), y - 5, X(v), y + 5, { s: GRY, sw: 1.5 });
      ax += line(X(l.lo), y - 9, X(l.lo), y + 9, { sw: 3 }) + line(X(l.hi), y - 9, X(l.hi), y + 9, { sw: 3 }) + line(X(mid), y - 14, X(mid), y + 9, { s: GRY, sw: 2, da: '3 3' });
      ax += txt(X(l.lo), y + 26, nf(l.lo), 13) + txt(X(l.hi), y + 26, nf(l.hi), 13) + txt(X(mid), y + 24, nf(mid), 11, { c: GRY });
      s += pop(t, ax, 'a-fade');
      const tp = t + .6, tdg = tp + .7, tg = tdg + .6, tr = tg + .55;
      s += pop(tp, path(`M${r1(X(l.v) - 6)},${r1(y - 16)} L${r1(X(l.v) + 6)},${r1(y - 16)} L${r1(X(l.v))},${r1(y - 4)} Z`, { f: UC, s: UC, sw: 1.5 }) + txt(X(l.v) - 4, y - 22, nf(l.v), 13, { c: UC, a: 'end' }));
      under += pop(tdg, circ(cxs[l.dig], 23, 15, { f: Y }));
      s += hop(X(l.v) + 3, X(l.res), y - 7, 17, tg, UC);
      under += pop(tr, rect(X(l.res) - tw(nf(l.res), 13) / 2 - 7, y + 12, tw(nf(l.res), 13) + 14, 20, { rx: 10, f: Y }), 'a-fade');
      s += pop(tr, circ(X(l.res), y, 6, { f: UC }));
      Object.assign(ph, { ['pt' + i]: tp + .3, ['dig' + i]: tdg + .3, ['go' + i]: tg + .4, ['res' + i]: tr + .3 });
      t = tr + .6;
    });
    return done(96 + (lines.length - 1) * 74 + 36, under + s, ph, L);
  },
  // salts sobre una recta numèrica (sumar i restar per trossos, sèries, múltiples, enters, temps)
  p2hops({ rows, L }) {
    let s = '', t = .2, top = 6; const ph = {};
    rows.forEach((r, i) => {
      const H = r.h || (rows.length > 1 ? 86 : 84), ly = top + H - 26, X = v => 28 + (v - r.min) / (r.max - r.min) * 264, lab = r.lab || r.pts.map(v => nf(v));
      const sh = r.show ?? 1, R = 'r' + i; ph[R] = t;
      let ax = line(X(r.min) - 4, ly, X(r.max) + 4, ly, { sw: 2.5 });
      if (r.unit) for (let v = Math.ceil(r.min); v <= r.max; v++) ax += line(X(v), ly - 4, X(v), ly + 4, { s: v === 0 ? INK : GRY, sw: v === 0 ? 2.5 : 1.5 }) + txt(X(v), ly + 17, nf(v), 11, { c: v === 0 ? INK : GRY });
      s += pop(t, ax, 'a-fade');
      const ptEl = (k, tt) => pop(tt, circ(X(r.pts[k]), ly, 5, { f: k ? UC : INK }) + (r.unit ? '' : line(X(r.pts[k]), ly - 6, X(r.pts[k]), ly + 6, { sw: 2 }) + txt(X(r.pts[k]), ly + 19, lab[k], 13)));
      for (let k = 0; k < Math.min(sh, r.pts.length); k++) s += ptEl(k, t + .1 * k);
      let tj = t + .5 + (sh - 1) * .1;
      for (let j = 0; j < r.pts.length - 1; j++) {
        const a = r.pts[j], b = r.pts[j + 1], dir = b > a ? 1 : -1, c = dir > 0 ? UC : RED, xa = X(a), xb = X(b);
        let dur;
        if (r.unit) { const n = Math.abs(b - a); for (let k = 0; k < n; k++) s += hop(X(a + dir * k), X(a + dir * (k + 1)), ly - 3, 7, tj + k * .15, c); dur = n * .15 + .35; }
        else { const hh = r.ah || Math.min(26, Math.max(10, Math.abs(xb - xa) * .3)); s += hop(xa, xb, ly - 4, hh, tj, c); dur = .45; }
        if (r.jl && r.jl[j]) { const hh = r.unit ? 7 : r.ah || Math.min(26, Math.max(10, Math.abs(xb - xa) * .3)); s += pop(tj + .2, pill((xa + xb) / 2, ly - 12 - hh - 12, r.jl[j], 12, { s: c, pad: 12 })); }
        if (r.cnt) s += txt((xa + xb) / 2, ly - 9, j + 1, 11, { c: GRY, an: A(tj + .3) });
        if (j + 1 >= sh) s += ptEl(j + 1, tj + dur - .05);
        ph[`${R}h${j}`] = tj + dur + .1; tj += dur + .3;
      }
      ph[R + 'e'] = tj;
      if (r.brace) { const x0 = X(r.pts[0]), x1 = X(r.pts[r.pts.length - 1]); s += path(brace(Math.min(x0, x1), Math.max(x0, x1), ly + 26, 1, 10), { s: UC, sw: 2.5, an: A(tj, 'a-draw') }) + pop(tj + .3, pill((x0 + x1) / 2, ly + 52, r.brace, 14, { f: Y, s: INK })); ph[R + 'e'] = tj + .5; }
      if (r.tag) { s += pop(tj, pill(r.tag.x || 160, ly + (r.tag.dy || 40), r.tag.s, 14, { f: Y, s: INK })); ph[R + 'e'] = tj + .3; }
      top += H + (r.brace ? 40 : 0) + (r.tag ? 30 : 0); t = ph[R + 'e'] + .35;
    });
    return done(top + 4, s, ph, L);
  },
  // sumes i restes en columna, xifra a xifra, amb les que en portem (també amb decimals)
  p2col({ ops, heads, L }) {
    const two = ops.length > 1, cw = two ? 21 : 28, fs = two ? 19 : 24, sep = two ? 7 : 9, st = two ? .45 : .72;
    let s = '', under = '', t = .2; const ph = {};
    ops.forEach((o, oi) => {
      const pa = digSplit(o.a), pb = digSplit(o.b), nd = Math.max(pa.f.length, pb.f.length);
      const va = +(pa.i + pa.f.padEnd(nd, '0')), vb = +(pb.i + pb.f.padEnd(nd, '0')), r = o.op === '+' ? va + vb : va - vb;
      const rs = String(r).padStart(nd + 1, '0'), ri = rs.slice(0, rs.length - nd), rf = rs.slice(rs.length - nd);
      const hiP = Math.max(pa.i.length, pb.i.length, ri.length) - 1, loP = -nd, cx0 = two ? (oi ? 244 : 84) : 172;
      const width = (hiP - loP + 1) * cw + (nd ? sep : 0), xR = cx0 + width / 2, X = p => xR - (p - loP) * cw - cw / 2 - (nd && p >= 0 ? sep : 0);
      const yH = 14, yC = 34, yA = 62, yB = 94, yL = 104, yR = 134, O = 'o' + oi;
      const dg = (pp, p) => p >= 0 ? pp.i[pp.i.length - 1 - p] : pp.f[-p - 1];
      if (heads) for (let p = hiP; p >= loP; p--) s += txt(X(p), yH, PN[p], 11, { c: UC, an: A(t) });
      const pads = [];
      [[pa, yA, t], [pb, yB, t + .15]].forEach(([pp, yy, tt]) => { for (let p = hiP; p >= loP; p--) { const d = dg(pp, p); if (d != null) s += txt(X(p), yy, d, fs, { an: A(tt) }); else if (p < 0) pads.push([p, yy]); } if (nd) s += txt(X(0) + cw / 2 + sep / 2, yy, ',', fs, { an: A(tt) }); });
      s += txt(X(hiP) - cw * .95, yB, o.op, fs, { an: A(t + .15) }) + rect(X(hiP) - cw * 1.35, yL, xR - X(hiP) + cw * 1.35, 3, { rx: 1.5, f: INK, an: A(t + .3, 'a-grow') });
      const tp = t + (two ? .6 : .75); pads.forEach(([p, yy]) => s += txt(X(p), yy, '0', fs, { c: RED, an: A(tp) }));
      ph[O + 'op'] = t + .4; ph[O + 'pad'] = pads.length ? tp + .3 : t + .5;
      let tc = pads.length ? tp + (two ? .45 : .55) : t + .7;
      const cur = {}; for (let p = hiP; p >= loP; p--) cur[p] = +(dg(pa, p) ?? (p < 0 ? 0 : NaN));
      const small = {}; let carry = 0;
      for (let p = loP; p <= hiP; p++) {
        const c = p - loP, db = +(dg(pb, p) ?? 0), x = X(p);
        under += win(tc, tc + st, rect(x - cw / 2 + 1, yC - 16, cw - 2, yR - yC + 24, { rx: 6, f: Y, op: .35 }), 'a-fade');
        let rd;
        if (o.op === '+') { const da = isNaN(cur[p]) ? 0 : cur[p], sm = da + db + carry; rd = sm % 10; if (sm >= 10) s += txt(X(p + 1), yC, '1', 13, { c: RED, an: A(tc + .38) }); carry = sm >= 10 ? 1 : 0; }
        else {
          if (cur[p] < db) {
            let q = p + 1; while (cur[q] === 0) q++;
            for (let m = q; m > p; m--) {
              cur[m] = m === q ? cur[m] - 1 : 9;
              s += line(X(m) - 7, yA + 3, X(m) + 7, yA - 19, { s: RED, sw: 2, an: A(tc + .05 + (q - m) * .08, 'a-draw') }) + txt(X(m), yC, cur[m], 13, { c: RED, an: A(tc + .15 + (q - m) * .08) });
              small[m] = true;
            }
            s += small[p] ? txt(X(p) - 8, yC, '1', 12, { c: RED, an: A(tc + .25) }) : txt(X(p) - cw * .42, yA - 12, '1', 12, { c: RED, an: A(tc + .25) });
            cur[p] += 10;
          }
          rd = cur[p] - db;
        }
        const show = p < 0 || p < ri.length;
        if (show) s += txt(x, yR, rd, fs, { c: INK, an: A(tc + .3) });
        if (p === 0 && nd) s += txt(X(0) + cw / 2 + sep / 2, yR, ',', fs, { an: A(tc + .28) });
        ph[`${O}c${c}`] = tc + .45; tc += st;
      }
      ph[O + 'res'] = tc + .1;
      under += pop(tc, rect(X(ri.length - 1) - cw / 2 - 2, yR - 24, xR - X(ri.length - 1) + cw / 2 + 4, 32, { rx: 9, f: Y, op: .75 }), 'a-fade');
      t = tc + (two ? .3 : .4);
    });
    return done(146, under + s, ph, L);
  },
  // la màquina al revés: endavant amb les operacions i enrere amb les contràries
  p2undo({ ops, end, L }) {
    const n = ops.length, xs = [...Array(n + 1)].map((_, i) => 44 + i * 232 / n), y1 = 50, y2 = 150, bw = 64, bh = 38;
    const inv = { '×': '÷', '÷': '×', '+': '−', '−': '+' }, ap = (o, v, k) => o === '×' ? v * k : o === '÷' ? v / k : o === '+' ? v + k : v - k;
    const vals = [end]; for (let j = n - 1; j >= 0; j--) vals.unshift(ap(inv[ops[j][0]], vals[0], ops[j][1]));
    const box = (x, y, v, o = {}) => rect(x - bw / 2, y - bh / 2, bw, bh, { rx: 12, f: o.f || WH, s: o.s || UC, sw: 2.5, da: o.da }) + (v === '' ? '' : txt(x, y + 7, v, 19, { c: o.c || INK }));
    let s = ''; const ph = {};
    const tb = .6 + .4 * n + .5, ta = k => tb + .7 + k * 1.15, tchk = ta(n - 1) + 1.3;
    s += win(.2, tchk, box(xs[0], y1, '?', { f: Y, s: INK }));
    s += pop(tchk, box(xs[0], y1, nf(vals[0]), { f: Y, s: INK })) + check(xs[0] + bw / 2 - 2, y1 - bh / 2 - 2, tchk + .3);
    for (let j = 0; j < n; j++) {
      const t = .45 + .4 * j;
      s += arrow(xs[j] + bw / 2 + 4, y1, xs[j + 1] - bw / 2 - 5, y1, t) + pop(t + .15, pill((xs[j] + xs[j + 1]) / 2, y1 - 30, `${ops[j][0]} ${nf(ops[j][1])}`, 14));
      s += pop(t + .3, j === n - 1 ? box(xs[n], y1, nf(end), { f: UC, s: UC, c: WH }) : box(xs[j + 1], y1, '', { da: '5 4' }));
    }
    ph.fwd = .6 + .4 * n + .1;
    s += move(tb, 0, y1 - y2, box(xs[n], y2, nf(end), { f: UC, s: UC, c: WH }));
    ph.bs = tb + .5;
    for (let k = 0; k < n; k++) {
      const j = n - 1 - k, t = ta(k);
      s += arrow(xs[j + 1] - bw / 2 - 4, y2, xs[j] + bw / 2 + 5, y2, t, RED) + pop(t + .15, pill((xs[j] + xs[j + 1]) / 2, y2 + 32, `${inv[ops[j][0]]} ${nf(ops[j][1])}`, 14, { s: RED }));
      s += pop(t + .55, box(xs[j], y2, nf(vals[j]), j === 0 ? { f: Y, s: INK } : {}));
      ph[`b${k}a`] = t + .3; ph['b' + k] = t + .75;
    }
    ph.chk = tchk + .4;
    return done(y2 + 52, s, ph, L);
  },
  /* ---------- multiplicar i dividir ---------- */
  // repartir d'un en un entre uns amics
  p2deal({ total, g: NG, who = ['boy', 'girl', 'child'], icon = 'candy', L }) {
    const px = k => (k + .5) * 320 / NG, per = total / NG, cols = per <= 4 ? 2 : 3, t0 = .9, dt = .19, sz = 22;
    let s = ''; const ph = { pile: .2 };
    for (let k = 0; k < NG; k++) s += pop(.2, `<ellipse cx="${r1(px(k))}" cy="140" rx="${Math.min(46, 160 / NG - 8)}" ry="10" fill="${PAL}" stroke="${UC}" stroke-width="2.5"/>` + img(who[k % who.length], px(k), 172, 46), 'a-fade');
    for (let i = 0; i < total; i++) {
      const k = i % NG, j = Math.floor(i / NG), fx = px(k) + ((j % cols) - (cols - 1) / 2) * 24, fy = 126 - Math.floor(j / cols) * 22;
      const sx = 160 + ((i % 6) - 2.5) * 26, sy = 20 + Math.floor(i / 6) * 24;
      s += move(t0 + i * dt, sx - fx, sy - fy, img(icon, fx, fy, sz));
    }
    const te = t0 + total * dt + .5;
    for (let k = 0; k < NG; k++) s += pop(te + k * .1, pill(px(k), 212, nf(per), 16, { f: Y, s: INK }));
    ph.r1 = t0 + NG * dt + .45; ph.end = te + .4;
    return done(228, s, ph, L);
  },
  // files iguals: comptar de n en n fins al total (i el que sobra)
  p2rows({ per, total, L }) {
    const nfull = Math.floor(total / per), rem = total % per, sp = 19, x0 = 84, y0 = 56, ry = r => y0 + r * 22, xl = x0 + per * sp + 4;
    let s = pop(.2, pill(x0 + (per - 1) * sp / 2, 20, nf(total), 17, { f: Y, s: INK })); const ph = { start: .3 };
    let tr = .8;
    for (let r = 0; r < nfull + (rem ? 1 : 0); r++) {
      const cnt = r < nfull ? per : rem;
      for (let j = 0; j < cnt; j++) s += circ(x0 + j * sp, ry(r), 7.5, { an: A(tr + j * .02) });
      if (r < nfull) s += txt(xl, ry(r) + 5, nf((r + 1) * per), 14, { a: 'start', an: A(tr + .15) });
      ph['r' + r] = tr + .3; tr += .36;
    }
    ph.full = tr + .1;
    let te = ph.full + .3;
    if (rem) {
      const yr = ry(nfull), tg = ph.full + .2;
      for (let j = rem; j < per; j++) s += circ(x0 + j * sp, yr, 7.5, { f: 'none', s: GRY, sw: 2, da: '3 3', an: A(tg) });
      s += txt(xl, yr + 5, nf((nfull + 1) * per), 14, { a: 'start', c: RED, an: A(tg + .15) }) + line(xl - 2, yr + 1, xl + tw(nf((nfull + 1) * per), 14) + 2, yr - 3, { s: RED, sw: 2.5, an: A(tg + .45, 'a-draw') });
      ph.ghost = tg + .6;
      const tm = ph.ghost + .8;
      for (let j = 0; j < rem; j++) s += circ(x0 + j * sp, yr, 10.5, { f: 'none', s: Y, sw: 4, an: A(tm + j * .06) });
      s += pop(tm + .3, pill(xl + 64, yr, nf(rem), 15, { f: Y, s: INK }));
      ph.rem = tm + .5; te = ph.rem + .6;
    }
    s += path(vbrace(ry(0) - 8, ry(nfull - 1) + 8, x0 - 16, -1, 10), { s: UC, sw: 2.5, an: A(te, 'a-draw') }) + pop(te + .25, pill(x0 - 44, (ry(0) + ry(nfull - 1)) / 2, nf(nfull), 17, { f: Y, s: INK }));
    ph.end = te + .5;
    return done(ry(nfull + (rem ? 1 : 0) - 1) + 16, s, ph, L);
  },
  // rectangle partit: multiplicar per parts (i dividir per parts)
  p2rect(o) {
    const x0 = 56, y0 = 34, W = 226; let s = '', under = ''; const ph = { box: .2 };
    if (o.mode === 'div') {
      const H = 72, tot = o.areas.reduce((a, b) => a + b, 0), ws = split(o.areas, W, 44), xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((a, b) => a + b, 0));
      s += rect(x0, y0, W, H, { rx: 8, f: 'none', s: INK, sw: 3, an: A(.2, 'a-fade') }) + txt(x0 - 12, y0 + H / 2 + 6, nf(o.h), 17, { a: 'end', an: A(.2) });
      s += win(.2, 1.0, txt(x0 + W / 2, y0 + H / 2 + 8, nf(tot), 22)) + win(.2, 3.2, txt(x0 + W / 2, y0 - 12, '?', 17));
      ph.split = 1.3;
      o.areas.forEach((a, i) => { under += rect(xs[i] + 2, y0 + 2, ws[i] - 4, H - 4, { rx: 6, f: i % 2 ? Y : UC, op: i % 2 ? 1 : .8, an: A(1.0 + i * .15, 'a-grow') }); s += txt(xs[i] + ws[i] / 2, y0 + H / 2 + 7, nf(a), 19, { c: i % 2 ? INK : WH, an: A(1.1 + i * .15) }); if (i) s += line(xs[i], y0 - 4, xs[i], y0 + H + 4, { da: '6 5', sw: 3, an: A(.9) }); });
      o.areas.forEach((a, i) => { const tt = 1.9 + i * .6; s += txt(xs[i] + ws[i] / 2, y0 + H + 22, nf(a / o.h), 16, { an: A(tt) }); ph['p' + i] = tt + .25; });
      s += path(brace(x0 + 2, x0 + W - 2, y0 - 6, -1, 10), { s: UC, sw: 2.5, an: A(3.2, 'a-draw') }) + pop(3.4, pill(x0 + W / 2, y0 - 22, nf(tot / o.h), 16, { f: Y, s: INK }));
      ph.tot = 3.6;
      return done(y0 + H + 34, under + s, ph, o.L);
    }
    const a = o.a, b = o.b, H = b.length > 1 ? 112 : 76, ws = split(a, W, 40), hs = split(b, H, 28);
    const xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((p, q) => p + q, 0)), ys = hs.map((_, i) => y0 + hs.slice(0, i).reduce((p, q) => p + q, 0));
    const sa = a.reduce((p, q) => p + q, 0), sb = b.reduce((p, q) => p + q, 0);
    s += rect(x0, y0, W, H, { rx: 8, f: 'none', s: INK, sw: 3, an: A(.2, 'a-fade') });
    s += txt(x0 + W / 2, y0 - 10, nf(sa), 16, { an: A(.2) }) + (b.length > 1 ? txt(x0 + W + 10, y0 + H / 2 + 6, nf(sb), 16, { a: 'start', an: A(.2) }) : txt(x0 - 10, y0 + H / 2 + 6, nf(sb), 16, { a: 'end', an: A(.2) }));
    ph.split = 1.1;
    a.forEach((v, i) => { if (a.length > 1) s += txt(xs[i] + ws[i] / 2, y0 + H + 20, nf(v), 15, { an: A(.9) }); if (i) s += line(xs[i], y0 - 4, xs[i], y0 + H + 4, { da: '6 5', sw: 3, an: A(.8) }); });
    b.forEach((v, i) => { if (b.length > 1) s += txt(x0 - 10, ys[i] + hs[i] / 2 + 6, nf(v), 15, { a: 'end', an: A(.9) }); if (i) s += line(x0 - 4, ys[i], x0 + W + 4, ys[i], { da: '6 5', sw: 3, an: A(.8) }); });
    const cells = []; b.forEach((bv, r) => a.forEach((av, c) => cells.push({ r, c, v: av * bv })));
    const order = o.order || cells.map((_, i) => i); let tot = 0;
    order.forEach((ci, k) => {
      const c = cells[ci], tt = 1.5 + k * .75, col = k % 2 ? Y : UC;
      under += rect(xs[c.c] + 2, ys[c.r] + 2, ws[c.c] - 4, hs[c.r] - 4, { rx: 6, f: col, op: k % 2 ? 1 : .8, an: A(tt, 'a-grow') });
      s += txt(xs[c.c] + ws[c.c] / 2, ys[c.r] + hs[c.r] / 2 + 6, nf(c.v), hs[c.r] < 34 ? 15 : 18, { c: k % 2 ? INK : WH, an: A(tt + .3) });
      ph['p' + k] = tt + .45; tot += c.v;
    });
    const tt = 1.5 + order.length * .75 + .2, yp = y0 + H + (a.length > 1 ? 46 : 26);
    s += pop(tt, pill(160, yp, `${order.map(ci => nf(cells[ci].v)).join(' + ')} = ${nf(tot)}`, 15, { f: Y, s: INK }));
    ph.tot = tt + .3;
    return done(yp + 18, under + s, ph, o.L);
  },
  // un bucle: la variable (una capsa amb nom) canvia a cada volta
  p2loop({ name: nm, v, op, L }) {
    const name = nm.includes('|') ? L_(...nm.split('|')) : nm;
    const n = v.length - 1, xs = v.map((_, i) => 40 + i * 240 / n), yc = 146, ph = { init: .2, loop: .9 };
    let s = '';
    // la capsa amb el nom i el valor
    s += pop(.2, rect(18, 40, 90, 54, { rx: 12, f: WH, s: INK, sw: 3 }) + pill(63, 24, name, 15, { f: UC, s: UC, c: WH, pad: 22 }));
    s += pop(.9, rect(128, 22, 176, 76, { rx: 14, cls: 'p2f1', s: UC, sw: 2.5 }) + img('repeat', 150, 44, 28) + txt(186, 51, `× ${n}`, 17, { a: 'start' }) + rect(140, 64, 152, 26, { rx: 8, f: WH }) + txt(216, 82, `${name} = ${name} ${op}`, 13));
    const tk = k => 1.7 + (k - 1) * 1.15;
    s += win(.2, tk(1) + .35, txt(63, 76, nf(v[0]), 24)) + pop(.2, pill(xs[0], yc, nf(v[0]), 16));
    for (let k = 1; k <= n; k++) {
      const t = tk(k);
      s += win(t, t + .9, rect(125, 19, 182, 82, { rx: 16, f: 'none', s: Y, sw: 4 }), 'a-fade');
      s += arrow(xs[k - 1] + 24, yc, xs[k] - 25, yc, t + .1, UC) + pop(t + .15, circ((xs[k - 1] + xs[k]) / 2, yc + 26, 9, { f: UC }) + txt((xs[k - 1] + xs[k]) / 2, yc + 30, k, 11, { c: WH })) + txt((xs[k - 1] + xs[k]) / 2, yc - 12, op, 12, { c: UC, an: A(t + .15) });
      s += pop(t + .4, pill(xs[k], yc, nf(v[k]), 16, k === n ? { f: Y, s: INK } : {}));
      s += win(t + .35, k === n ? null : tk(k + 1) + .35, txt(63, 76, nf(v[k]), 24));
      ph['t' + k] = t + .6;
    }
    ph.end = tk(n) + 1.0;
    s += pop(ph.end - .3, rect(14, 36, 98, 62, { rx: 14, f: 'none', s: Y, sw: 4 }), 'a-fade');
    return done(186, s, ph, L);
  },
  // parells i senars: les boletes es posen per parelles i es veu si en sobra una
  p2parity({ rows, L }) {
    let s = '', under = ''; const ph = {}; let t = .2;
    const dots = (x0, cy, n, tt, pairT, lone = true) => { let o = ''; for (let i = 0; i < n; i++) o += circ(x0 + Math.floor(i / 2) * 22, cy + (i % 2 ? 10 : -10), 7.5, { an: A(tt + i * .05) }); for (let c = 0; c < Math.floor(n / 2); c++) o += rect(x0 + c * 22 - 10.5, cy - 21, 21, 42, { rx: 10, f: 'none', s: UC, sw: 2, an: A(pairT + c * .08, 'a-fade') }); if (n % 2 && lone) o += circ(x0 + Math.floor(n / 2) * 22, cy - 10, 11, { f: 'none', s: RED, sw: 3, an: A(pairT + .3) }); return o; };
    rows.forEach((r, i) => {
      const cy = 36 + i * 66;
      if (r.num) {
        const ch = [...r.num], wd = c => c === '.' ? 7 : 14, W = ch.reduce((a, c) => a + wd(c), 0), xl = 62 + W / 2 - 7;
        under += pop(t + .3, circ(xl, cy - 7, 13, { f: Y }));
        s += txt(62, cy + 1, r.num, 23, { an: A(t) }) + dots(122, cy, r.n, t + .6, t + 1.1);
        const ev = r.n % 2 === 0; s += pop(t + 1.4, pill(276, cy, ev ? L_('parell', 'par') : L_('senar', 'impar'), 14, { f: ev ? Y : WH, s: ev ? INK : RED }));
        ph['r' + i] = t + 1.6; t += 1.8;
      } else {
        const [a, b] = r.sum, xa = 100, xb = xa + Math.ceil(a / 2) * 22 + 22, loneA = [xa + Math.floor(a / 2) * 22, cy - 10], xbl = xb + Math.floor(b / 2) * 22;
        s += txt(52, cy + 7, `${a} + ${b}`, 20, { an: A(t) });
        for (let k = 0; k < a - 1; k++) s += circ(xa + Math.floor(k / 2) * 22, cy + (k % 2 ? 10 : -10), 7.5, { an: A(t + .3 + k * .05) });
        s += txt(xb - 22, cy + 6, '+', 16, { c: GRY, an: A(t + .3) }) + dots(xb, cy, b, t + .45, t + .9, false);
        // la bola sola del primer grup va a fer parella amb la del segon
        s += move(t + 1.4, loneA[0] - xbl, loneA[1] - (cy + 10), circ(xbl, cy + 10, 7.5, { f: Y, s: INK, sw: 1.5, an: A(t + .3) }));
        s += rect(xbl - 10.5, cy - 21, 21, 42, { rx: 10, f: 'none', s: RED, sw: 2.5, an: A(t + 2.1, 'a-fade') }) + rect(xa - 10.5, cy - 21, 21, 42, { rx: 10, f: 'none', s: UC, sw: 2, an: A(t + .9, 'a-fade') });
        s += pop(t + 2.4, pill(282, cy, `${a + b} ${L_('parell', 'par')}`, 13, { f: Y, s: INK, pad: 14 }));
        ph['r' + i] = t + 2.6; t += 2.8;
      }
    });
    return done(36 + (rows.length - 1) * 66 + 34, under + s, ph, L);
  },
  // una balança en equilibri: traiem el mateix dels dos costats i descobrim quant val la caixa
  p2balance({ boxes, add, total, L }) {
    const bx = 80, cx2 = 240, py = 128, u = 14, ph = { s0: 1.0, s1: 2.6, s2: 4.3 }, val = (total - add) / boxes;
    let s = pop(.2, path(`M160,64 L160,200 M136,204 L184,204`, { sw: 5 }) + path(`M40,64 L280,64`, { sw: 5 }) + circ(160, 64, 7, { f: INK }) + path(`M${bx - 48},${py} L${bx},66 L${bx + 48},${py} M${cx2 - 48},${py} L${cx2},66 L${cx2 + 48},${py}`, { s: GRY, sw: 2 }) + path(`M${bx - 56},${py} Q${bx},${py + 22} ${bx + 56},${py} Z M${cx2 - 56},${py} Q${cx2},${py + 22} ${cx2 + 56},${py} Z`, { f: PAL, s: UC, sw: 2.5 }), 'a-fade');
    const unit = (x, y, an = '') => rect(x - u / 2, y - u / 2, u, u, { rx: 3, f: UC, an });
    // costat esquerre: caixes misterioses i unitats
    for (let k = 0; k < boxes; k++) { const x = bx - 38 + k * 30, y = py - 15; s += pop(.4, rect(x - 13, y - 13, 26, 26, { rx: 5, f: Y, s: INK, sw: 2 })); s += win(.4, 4.0, txt(x, y + 6, '?', 16)) + pop(4.0, txt(x, y + 6, nf(val), 16)); }
    const lx = k => bx + 18 + (k % 2) * 17, ly = k => py - 8 - Math.floor(k / 2) * 17;
    for (let k = 0; k < add; k++) s += gone(2.3, unit(lx(k), ly(k), A(.5 + k * .05)) + path(`M${lx(k) - 7},${ly(k) - 7} l14,14 M${lx(k) + 7},${ly(k) - 7} l-14,14`, { s: RED, sw: 2.5, an: A(1.6 + k * .06, 'a-fade') }));
    // costat dret: el total en unitats; en traiem tantes com a l'esquerra i les que queden es reparteixen
    const rx0 = k => cx2 - 34 + (k % 5) * 17, ry0 = k => py - 8 - Math.floor(k / 5) * 17;
    const rest = total - add, per = rest / boxes;
    for (let k = 0; k < total; k++) {
      if (k >= rest) { s += gone(2.3, unit(rx0(k), ry0(k), A(.6 + k * .04)) + path(`M${rx0(k) - 7},${ry0(k) - 7} l14,14 M${rx0(k) + 7},${ry0(k) - 7} l-14,14`, { s: RED, sw: 2.5, an: A(1.6 + (k - rest) * .06, 'a-fade') })); continue; }
      const grp = Math.floor(k / per), j = k % per, fx = cx2 - 40 + grp * 50 + (j % 2) * 16, fy = py - 8 - Math.floor(j / 2) * 16;
      s += move(3.3, rx0(k) - fx, ry0(k) - fy, unit(fx, fy, A(.6 + k * .04)));
    }
    for (let grp = 0; grp < boxes; grp++) s += pop(3.9, rect(cx2 - 49 + grp * 50, py - 33, 34, 34, { rx: 8, f: 'none', s: Y, sw: 3 }), 'a-fade');
    return done(212, s, ph, L);
  },
  /* ---------- fraccions ---------- */
  // una pizza partida en quarts: un quart i dos quarts (que són la meitat)
  p2pizza({ L }) {
    const cx = 100, cy = 96, R = 72, d = 4, Aa = k => -Math.PI / 2 + 2 * Math.PI * k / d;
    let s = circ(cx, cy, R + 6, { f: '#E7A94B' }) + circ(cx, cy, R, { f: '#FFD27A' });
    [[-34, -28], [24, -40], [38, 20], [-14, 34], [-44, 8], [10, -8]].forEach(([x, y]) => s += circ(cx + x, cy + y, 7.5, { f: RED, op: .9 }));
    const t1 = 1.6, t2 = 3.4;
    s += path(sector(cx, cy, R, Aa(0), Aa(1)), { f: UC, s: 'none', sw: 0, op: .85, an: A(t1, 'a-fill') }) + path(sector(cx, cy, R, Aa(1), Aa(2)), { f: UC, s: 'none', sw: 0, op: .85, an: A(t2, 'a-fill') });
    for (let k = 0; k < d; k++) s += line(cx, cy, cx + R * Math.cos(Aa(k)), cy + R * Math.sin(Aa(k)), { s: WH, sw: 4, an: A(.3 + .2 * k, 'a-draw') });
    s += line(cx, cy - R - 10, cx, cy + R + 10, { s: INK, sw: 2.5, da: '6 5', an: A(t2 + .6, 'a-fade') });
    s += win(t1 + .2, t2, frac(1, 4, 250, 90, 28)) + pop(t2 + .2, frac(2, 4, 222, 90, 26) + txt(252, 102, '=', 24) + frac(1, 2, 284, 90, 26));
    return done(180, s, { cut: 1.3, one: t1 + .5, two: t2 + .8 }, L);
  },
  // barres de fraccions que es tornen a partir (equivalents, simplificar, comparar)
  p2fbars({ bars, ex = [], W = 186, x0 = 20, lx = 280, fs = 18, L }) {
    let s = '', under = ''; const ph = {};
    bars.forEach((b, i) => {
      const y = b.y, bh = b.h || 26, st = b.st, ts = [b.t, ...(b.ts || [])], last = st.length - 1, B = 'b' + i;
      const [n0, d0] = st[0];
      under += rect(x0, y, W, bh, { rx: 6, f: WH, s: INK, sw: 2.5, an: A(b.t, 'a-fade') });
      under += rect(x0 + 1.5, y + 1.5, W * n0 / d0 - 3, bh - 3, { rx: 5, f: b.col || UC, op: .85, an: A(b.t + .25, 'a-grow') });
      // línies de partició: cada posició es veu des de la primera etapa que la té fins a l'última
      const pos = {}; st.forEach(([, d], j) => { for (let k = 1; k < d; k++) { const key = (k / d).toFixed(5); (pos[key] = pos[key] || []).push(j); } });
      Object.entries(pos).forEach(([key, js]) => { const j0 = Math.min(...js), j1 = Math.max(...js), x = x0 + W * +key; s += win(j0 ? ts[j0] + .1 : b.t, j1 < last ? ts[j1 + 1] : null, line(x, y + 1, x, y + bh - 1, { s: INK, sw: 2 }), 'a-fade'); });
      if (b.lab !== false) st.forEach(([n, d], j) => s += win(ts[j] + (j ? .25 : .3), j < last ? ts[j + 1] + .1 : null, b.tl ? txt(b.lx || lx, y + bh / 2 + 7, b.tl[j], (b.fs || fs) + 2) : frac(n, d, b.lx || lx, y + bh / 2, b.fs || fs)));
      (b.ops || []).forEach((op, j) => s += win(ts[j + 1] - .35, j + 1 < last ? ts[j + 2] : null, pill(x0 + W + 26, y + bh / 2, op, 12, { s: RED, c: RED, pad: 8 })));
      st.forEach((_, j) => ph[`${B}s${j}`] = ts[j] + .45);
      (b.br || []).forEach(r => s += path(brace(x0 + W * r.a + 2, x0 + W * r.b - 2, r.up ? y - 5 : y + bh + 5, r.up ? -1 : 1, 9), { s: r.c || UC, sw: 2.5, an: A(r.t, 'a-draw') }) + (r.s ? txt(x0 + W * (r.a + r.b) / 2, r.up ? y - 20 : y + bh + 32, r.s, 13, { c: r.c || UC, an: A(r.t + .25) }) : r.n ? pop(r.t + .25, frac(r.n, r.d, x0 + W * (r.a + r.b) / 2, r.up ? y - 40 : y + bh + 31, 14, r.c || INK)) : ''));
    });
    ex.forEach(e => {
      if (e.k === 'vline') s += pop(e.t, line(x0 + W * e.f, e.y0, x0 + W * e.f, e.y1, { s: RED, sw: 2.5, da: '5 4' }), 'a-fade');
      if (e.k === 'pill') s += pop(e.t, pill(e.x, e.y, e.s, e.fs || 15, { f: e.f || Y, s: INK }));
      if (e.k === 'check') s += check(e.x, e.y, e.t);
    });
    const h = Math.max(...bars.map(b => b.y + (b.h || 26) + (b.br && b.br.some(r => !r.up) ? 62 : 26)), ...ex.filter(e => e.y).map(e => e.y + 20));
    return done(h, under + s, ph, L);
  },
  // la fracció d'una quantitat: fem els grups iguals i n'agafem uns quants
  p2fracOf({ rows, cmp, L }) {
    let s = '', under = ''; const ph = {}; let t = .2, y = 8;
    const item = (ic, x, yy, sz) => ic === 'coin' ? circ(x, yy, sz * .46, { f: Y, s: '#D9A21B', sw: 1.5 }) + txt(x, yy + 3.5, '€', 9, { c: '#8A6200' }) : img(ic, x, yy, sz);
    rows.forEach((r, ri) => {
      const R = 'r' + ri, per = r.total / r.d, xl = rows.length > 1 ? 46 : 8, gwid = (312 - xl - (r.d - 1) * 8) / r.d, cols = Math.max(1, Math.min(per, Math.floor((gwid - 6) / 18))), nr = Math.ceil(per / cols), gh = nr * 18 + 10, sz = 17;
      if (rows.length > 1) s += pop(t, frac(r.n, r.d, 22, y + gh / 2, 15));
      const gx = k => xl + k * (gwid + 8);
      for (let k = 0; k < r.d; k++) {
        under += rect(gx(k), y, gwid, gh, { rx: 9, f: PAL, s: LN, sw: 2, an: A(t + k * .12, 'a-fade') });
        for (let j = 0; j < per; j++) s += pop(t + .1 + k * .12 + j * .03, item(r.icon, gx(k) + gwid / 2 + ((j % cols) - (cols - 1) / 2) * 18, y + 14 + Math.floor(j / cols) * 18, sz));
      }
      ph[R] = t + .2 + r.d * .12;
      const tOne = ph[R] + .5;
      for (let k = 0; k < r.n; k++) {
        const tk = tOne + k * .45;
        under += pop(tk, rect(gx(k) - 2, y - 2, gwid + 4, gh + 4, { rx: 10, f: Y, op: .9 }), 'a-fade');
        s += pop(tk + .15, pill(gx(k) + gwid / 2, y + gh + 16, nf(per), 13, k ? {} : { s: RED }));
      }
      ph[R + 'one'] = tOne + .3; ph[R + 'n'] = tOne + r.n * .45 + .1;
      let tt = ph[R + 'n'] + .3;
      if (r.n > 1) { s += path(brace(gx(0) + 2, gx(r.n - 1) + gwid - 2, y + gh + 30, 1, 10), { s: UC, sw: 2.5, an: A(tt, 'a-draw') }) + pop(tt + .25, pill((gx(0) + gx(r.n - 1) + gwid) / 2, y + gh + 56, nf(per * r.n), 16, { f: Y, s: INK })); tt += .5; y += gh + 72; }
      else y += gh + 34;
      ph[R + 'tot'] = tt; t = tt + .3;
    });
    if (cmp) { s += pop(t, pill(160, y + 12, cmp, 17, { f: Y, s: INK })); ph.cmp = t + .3; y += 34; }
    return done(y, under + s, ph, L);
  },
  /* ---------- mesura i geometria ---------- */
  // el rellotge: la busca gran fa quarts d'hora
  p2clock({ h = 5, mins, L }) {
    const cx = 96, cy = 100, R = 82, ph = {}, hiH = +L_(h + 1, h);
    let s = circ(cx, cy, R + 4, { f: INK }) + circ(cx, cy, R, { f: WH });
    const ts = mins.map((_, k) => 1.1 + k * 1.6);
    mins.forEach((m, k) => { const a0 = -Math.PI / 2 + 2 * Math.PI * (k ? mins[k - 1] : 0) / 60, a1 = -Math.PI / 2 + 2 * Math.PI * m / 60; s += `<path d="${sector(cx, cy, R - 4, a0, a1)}" ${A(ts[k] + .3, 'a-fill', 'p2f2')}/>`; });
    for (let k = 0; k < 60; k++) { const a = 2 * Math.PI * k / 60, big = k % 5 === 0; s += line(cx + (R - (big ? 10 : 5)) * Math.sin(a), cy - (R - (big ? 10 : 5)) * Math.cos(a), cx + (R - 2) * Math.sin(a), cy - (R - 2) * Math.cos(a), { s: big ? INK : GRY, sw: big ? 2.5 : 1 }); }
    for (let k = 1; k <= 12; k++) { const a = 2 * Math.PI * k / 12, x = cx + (R - 22) * Math.sin(a), y = cy - (R - 22) * Math.cos(a); if (k === hiH) s += circ(x, y, 11, { f: Y, an: A(.6) }); s += txt(x, y + 5, k, 14); }
    // agulla petita (hores) i gran (minuts), que giren a cada pas
    let hh = line(cx, cy, cx, cy - R * .5, { s: INK, sw: 6 }), mm = line(cx, cy, cx, cy - R + 14, { s: UC, sw: 4.5 });
    for (let k = mins.length - 1; k >= 0; k--) { const d = mins[k] - (k ? mins[k - 1] : 0); hh = rot(ts[k], d * .5, cx, cy, hh); mm = rot(ts[k], d * 6, cx, cy, mm); }
    s += `<g transform="rotate(${h * 30} ${cx} ${cy})">${hh}</g>` + mm + circ(cx, cy, 6, { f: INK });
    const dig = m => `${h}:${String(m).padStart(2, '0')}`;
    s += win(.2, ts[0] + .4, pill(250, 60, dig(0), 20, { s: INK }));
    mins.forEach((m, k) => { s += win(ts[k] + .4, k < mins.length - 1 ? ts[k + 1] + .4 : null, pill(250, 60, dig(m), 20, { f: Y, s: INK }) + frac(m / 15, 4, 238, 124, 20) + txt(266, 132, 'h', 18)); ph['q' + (k + 1)] = ts[k] + .7; });
    return done(190, s, ph, L);
  },
  // barres (model de cinta) per a problemes: parts, total, el que es treu i el que queda
  p2tape({ rows, L, h }) {
    let s = '', under = '';
    const FILL = { uc: UC, y: Y, w: WH, r: '#F7C6C1', l: '#E9E1F2' };
    rows.forEach(r => {
      const x0 = r.x0 ?? 30, W = r.W ?? 260, bh = r.bh ?? 30, y = r.y, tot = r.segs.reduce((a, g) => a + g.v, 0), ws = r.segs.map(g => W * g.v / tot);
      let x = x0; const xs = [];
      r.segs.forEach((g, i) => {
        xs.push(x); const w = ws[i];
        under += rect(x, y, w, bh, { rx: 4, f: FILL[g.c || 'l'], s: INK, sw: 2, an: A(g.t, 'a-grow') });
        if (g.x != null) s += pop(g.x, rect(x + 1, y + 1, w - 2, bh - 2, { rx: 3, f: WH, op: .55 }) + line(x + 4, y + 4, x + w - 4, y + bh - 4, { s: RED, sw: 3 }) + line(x + 4, y + bh - 4, x + w - 4, y + 4, { s: RED, sw: 3 }), 'a-fade');
        const lb = g.sw || (g.lab != null ? [[g.lab, (g.lt ?? g.t + .2)]] : []);
        lb.forEach(([tx, tt], k) => { const fsz = g.fs || 13, inside = tw(tx, fsz) < w - 4, yy = inside ? y + bh / 2 + fsz * .36 : y + bh + 16; s += win(tt, k < lb.length - 1 ? lb[k + 1][1] : null, txt(x + w / 2, yy, tx, fsz, { c: inside && g.c === 'uc' && g.x == null ? WH : INK })); });
        if (g.lab2) s += txt(x + w / 2, y + bh + 16, g.lab2, 12, { c: GRY, an: A(g.l2t) });
        x += w;
      });
      xs.push(x);
      if (r.tot) s += path(brace(x0 + 2, x0 + W - 2, y - 6, -1, 10), { s: INK, sw: 2.5, an: A(r.tot.t, 'a-draw') }) + (r.tot.sw ? r.tot.sw.map(([tx, tt], k) => win(tt, k < r.tot.sw.length - 1 ? r.tot.sw[k + 1][1] : null, txt(x0 + W / 2, y - 22, tx, 15))).join('') : txt(x0 + W / 2, y - 22, r.tot.lab, 15, { an: A(r.tot.t + .2) }));
      (r.br || []).forEach(b => { const xa = xs[b.a], xb = xs[b.b], yy = b.dn ? y + bh + (b.off ?? 6) : y - 6; s += path(brace(xa + 2, xb - 2, yy, b.dn ? 1 : -1, 10), { s: b.c || UC, sw: 2.5, an: A(b.t, 'a-draw') }) + pop(b.t + .25, pill(b.px ?? (xa + xb) / 2, b.dn ? yy + 26 : yy - 22, b.lab, 14, { f: b.f || Y, s: b.c || INK })); });
      (r.pills || []).forEach(q => s += pop(q.t, pill(q.x, q.y, q.s, q.fs || 15, { f: q.f || Y, s: INK })));
      (r.img || []).forEach(m => s += img(m.n, m.x, m.y, m.s || 26, A(m.t)));
    });
    return done(h, under + s, {}, L);
  },
  // perímetre (la vora es recorre costat a costat) i àrea (els quadrets s'omplen fila a fila)
  p2perim({ w, h, area, u: unit = 'cm', L }) {
    const u = Math.min(22, 200 / w, 110 / h), W = w * u, H = h * u, x0 = (320 - W) / 2, y0 = 26, ph = { shape: .2 };
    let s = '', under = '';
    under += rect(x0, y0, W, H, { rx: 2, f: WH, an: A(.2, 'a-fade') });
    let gr = ''; for (let i = 1; i < w; i++) gr += line(x0 + i * u, y0, x0 + i * u, y0 + H, { s: LN, sw: 1.5 }); for (let j = 1; j < h; j++) gr += line(x0, y0 + j * u, x0 + W, y0 + j * u, { s: LN, sw: 1.5 });
    s += pop(.2, gr + rect(x0, y0, W, H, { rx: 2, f: 'none', s: INK, sw: 2 }), 'a-fade');
    const sides = [[x0, y0, x0 + W, y0, w, x0 + W / 2, y0 - 8], [x0 + W, y0, x0 + W, y0 + H, h, x0 + W + 14, y0 + H / 2 + 5], [x0 + W, y0 + H, x0, y0 + H, w, x0 + W / 2, y0 + H + 20], [x0, y0 + H, x0, y0, h, x0 - 14, y0 + H / 2 + 5]];
    sides.forEach(([a, b, c, d, v, lx, ly], i) => { const t = .8 + i * .55; s += line(a, b, c, d, { s: UC, sw: 5, an: A(t, 'a-draw') }) + txt(lx, ly, `${v}`, 15, { a: i === 1 ? 'start' : i === 3 ? 'end' : 'middle', an: A(t + .25) }); ph['s' + i] = t + .35; });
    const tp = .8 + 4 * .55 + .2; ph.per = tp + .3;
    const py = y0 + H + 44;
    s += pop(tp, pill(area ? 90 : 160, py, `P = ${w + h + w + h} ${unit}`, 15, { f: Y, s: INK }));
    if (area) {
      const ta = tp + .7;
      for (let j = 0; j < h; j++) under += rect(x0 + 1, y0 + j * u + 1, W - 2, u - 2, { rx: 2, f: UC, op: .45, an: A(ta + j * .3, 'a-grow') });
      ph.area = ta + h * .3 + .4;
      s += pop(ph.area - .2, pill(232, py, `A = ${w * h} ${unit}²`, 15, { f: Y, s: INK }));
    }
    return done(py + 18, under + s, ph, L);
  },
  // quadrícula amb lletres i números: la columna, la fila i on es creuen
  p2grid({ cols = 'ABCD', rows = 4, c, r, L }) {
    const cs = 36, x0 = 64, y0 = 34, ci = cols.indexOf(c), ph = { ask: .2 };
    let s = '', under = '';
    under += rect(x0, y0, cs * cols.length, cs * rows, { rx: 6, f: WH, s: INK, sw: 2.5 });
    for (let i = 1; i < cols.length; i++) under += line(x0 + i * cs, y0, x0 + i * cs, y0 + rows * cs, { s: LN, sw: 2 });
    for (let j = 1; j < rows; j++) under += line(x0, y0 + j * cs, x0 + cols.length * cs, y0 + j * cs, { s: LN, sw: 2 });
    s += [...cols].map((l, i) => txt(x0 + i * cs + cs / 2, y0 - 9, l, 16, { c: i === ci ? UC : INK })).join('') + [...Array(rows)].map((_, j) => txt(x0 - 13, y0 + j * cs + cs / 2 + 6, j + 1, 16, { c: j === r - 1 ? UC : INK })).join('');
    const t1 = 1.0, t2 = 2.2, t3 = 3.4;
    under += pop(t1, rect(x0 + ci * cs + 2, y0 + 2, cs - 4, rows * cs - 4, { rx: 5, f: Y, op: .45 }), 'a-fade');
    under += pop(t2, rect(x0 + 2, y0 + (r - 1) * cs + 2, cols.length * cs - 4, cs - 4, { rx: 5, f: Y, op: .45 }), 'a-fade');
    under += pop(t3, rect(x0 + ci * cs + 2, y0 + (r - 1) * cs + 2, cs - 4, cs - 4, { rx: 5, f: UC }), 'a-fade');
    s += pop(t1, circ(x0 + ci * cs + cs / 2, y0 - 15, 12, { f: 'none', s: UC, sw: 2.5 }));
    s += gone(t3, move(t2, 0, -(r - 1) * cs - 4, pop(t1 + .2, img('magnifier', x0 + ci * cs + cs / 2 + 10, y0 + (r - 1) * cs + cs / 2 - 8, 26))));
    s += pop(t3, img('star', x0 + ci * cs + cs / 2, y0 + (r - 1) * cs + cs / 2, 26));
    const px = 262;
    s += pop(.2, rect(px - 34, 64, 68, 44, { rx: 12, f: WH, s: UC, sw: 2.5 }) + txt(px - 9, 94, c, 24) + txt(px + 9, 94, r, 24));
    under += pop(t1, rect(px - 21, 70, 22, 32, { rx: 6, f: Y }), 'a-fade') + pop(t2, rect(px - 1, 70, 22, 32, { rx: 6, f: Y }), 'a-fade');
    Object.assign(ph, { col: t1 + .3, row: t2 + .6, hit: t3 + .3 });
    return done(y0 + rows * cs + 12, under + s, ph, L);
  },
  // eixos de simetria: les línies on es pot doblegar la figura
  p2sym({ items, fold, L }) {
    let s = '', under = ''; const ph = {};
    const ax = (x1, y1, x2, y2, t) => pop(t, line(x1, y1, x2, y2, { s: RED, sw: 3, da: '7 5' }), 'a-fade');
    items.forEach((it, i) => {
      const { sh, x, y, a } = it, t0 = it.t ?? .2, gt = it.gt;
      let shape = '', axes = []; const e = 10;
      if (sh === 'square') { shape = rect(x - a / 2, y - a / 2, a, a, { rx: 3, cls: 'p2f2', s: UC, sw: 3 }); axes = [[[x, y - a / 2 - e, x, y + a / 2 + e], [x - a / 2 - e, y, x + a / 2 + e, y]], [[x - a / 2 - e * .7, y - a / 2 - e * .7, x + a / 2 + e * .7, y + a / 2 + e * .7], [x + a / 2 + e * .7, y - a / 2 - e * .7, x - a / 2 - e * .7, y + a / 2 + e * .7]]]; }
      if (sh === 'rect') { const b = a * .62; shape = rect(x - a / 2, y - b / 2, a, b, { rx: 3, cls: 'p2f2', s: UC, sw: 3 }); axes = [[[x, y - b / 2 - e, x, y + b / 2 + e], [x - a / 2 - e, y, x + a / 2 + e, y]]]; }
      if (sh === 'tri') { const R = a / Math.sqrt(3), rr = R / 2, P = [[x, y - R], [x - a / 2, y + rr], [x + a / 2, y + rr]]; shape = path(`M${P.map(p => p.map(r1).join(',')).join(' L')} Z`, { cls: 'p2f2', s: UC, sw: 3 }); axes = [P.map((p, k) => { const q = P[(k + 1) % 3], w = P[(k + 2) % 3], m = [(q[0] + w[0]) / 2, (q[1] + w[1]) / 2], dx = m[0] - p[0], dy = m[1] - p[1], l = Math.hypot(dx, dy); return [p[0] - dx / l * e, p[1] - dy / l * e, m[0] + dx / l * e, m[1] + dy / l * e]; })]; }
      if (sh === 'A') { shape = path(`M${x - a * .36},${y + a * .42} L${x},${y - a * .46} L${x + a * .36},${y + a * .42} M${x - a * .2},${y + a * .1} L${x + a * .2},${y + a * .1}`, { s: UC, sw: 8 }); axes = [[[x, y - a * .5 - e, x, y + a * .46 + e]]]; }
      s += pop(t0, shape, 'a-fade');
      if (fold && i === 0) s += gone(fold + 1.9, `<g class="an p2-fold" style="${TS(fold)};transform-origin:${x}px ${y}px">${rect(x, y - a / 2, a / 2, a, { rx: 3, f: UC, op: .55 })}</g>`);
      axes.forEach((grp, k) => { grp.forEach(l => s += ax(...l, gt[k])); ph[`i${i}g${k}`] = gt[k] + .3; });
      const n = axes.reduce((p, g) => p + g.length, 0), tc = it.ct ?? gt[gt.length - 1] + .5;
      s += pop(tc, pill(x, it.cy ?? y + a / 2 + 32, `${n}`, 16, { f: Y, s: INK }));
      ph['i' + i] = tc + .2;
    });
    const h = Math.max(...items.map(it => (it.cy ?? it.y + it.a / 2 + 32) + 18));
    return done(h, under + s, ph, L);
  },
  // cossos geomètrics: cares, vèrtexs i arestes
  p2solid({ items, count, L }) {
    let s = '', under = ''; const ph = {};
    items.forEach((it, i) => {
      const t = it.t ?? .2, g = solidGeom(it.sh, it.x, it.y, it.s, t);
      s += pop(t, g.svg, 'a-fade');
      if (count) {
        // cares, vèrtexs i arestes d'un en un
        const { tf, tv, te } = count, cx = 262;
        g.F.forEach((f, k) => under += win(tf + k * .45, tf + k * .45 + .5, path(`M${f.map(j => g.V[j].map(r1).join(',')).join(' L')} Z`, { f: Y, s: 'none', sw: 0, op: .75 }), 'a-fade'));
        g.F.forEach((f, k) => s += pop(tf + k * .45 + .1, txt(cx - 34 + k * 17, 38, k + 1, 12, { c: GRY })));
        s += pop(tf + g.F.length * .45 + .1, pill(cx, 60, `${g.F.length} ${L_('cares', 'caras')}`, 14, { f: Y, s: INK }));
        g.V.forEach((v, k) => s += pop(tv + k * .22, circ(v[0], v[1], 6, { f: Y, s: INK, sw: 2 })));
        s += pop(tv + g.V.length * .22 + .1, pill(cx, 104, `${g.V.length} ${L_('vèrtexs', 'vértices')}`, 14, { f: Y, s: INK }));
        g.E.forEach(([a, b, hid], k) => s += hid ? pop(te + k * .2, line(...g.V[a], ...g.V[b], { s: UC, sw: 3, da: '5 4' }), 'a-fade') : line(...g.V[a], ...g.V[b], { s: UC, sw: 4, an: A(te + k * .2, 'a-draw') }));
        s += pop(te + g.E.length * .2 + .1, pill(cx, 148, `${g.E.length} ${L_('arestes', 'aristas')}`, 14, { f: Y, s: INK }));
        Object.assign(ph, { show: t + .3, F: tf + g.F.length * .45 + .3, V: tv + g.V.length * .22 + .3, E: te + g.E.length * .2 + .3 });
      } else {
        const lines = it.sh === 'sphere' ? ['V 0', L_('roda', 'rueda')] : it.sh === 'cyl' ? ['2 bases', L_('roda', 'rueda')] : [`C ${g.F.length}`, `A ${g.E.length}`, `V ${g.V.length}`];
        lines.forEach((l, k) => s += txt(it.x, it.ly + k * 17, l, 13, { an: A(t + .3 + k * .08) }));
        ph['i' + i] = t + .5;
      }
    });
    const h = count ? 196 : Math.max(...items.map(it => it.ly + 2 * 17 + 8));
    return done(h, under + s, ph, L);
  },
  /* ---------- estadística i probabilitat ---------- */
  // gràfic de barres (amb diferència, la més alta, el total o el rang)
  p2bars({ bars, max, step = 1, lstep = 2, ex = [], unit = '', L }) {
    const n = bars.length, x0 = 42, x1 = 304, yb = 168, yt = 20, H = yb - yt, gx = i => x0 + (i + .5) * (x1 - x0) / n, bw = Math.min(46, (x1 - x0) / n * .56), Yv = v => yb - v / max * H;
    let s = '', under = ''; const ph = {};
    for (let v = step; v <= max; v += step) under += line(x0, Yv(v), x1, Yv(v), { s: LN, sw: 1.2 }) + (v % lstep === 0 ? txt(x0 - 6, Yv(v) + 4, v, 10, { a: 'end', c: GRY }) : '');
    under += line(x0, yt - 4, x0, yb, { sw: 2 }) + line(x0, yb, x1, yb, { sw: 2.5 }) + txt(x0 - 6, yb + 4, 0, 10, { a: 'end', c: GRY });
    bars.forEach((b, i) => {
      const t = .4 + .35 * i;
      s += rect(gx(i) - bw / 2, Yv(b.v), bw, yb - Yv(b.v), { rx: 5, f: b.c || UC, an: A(t, 'p2-gy') }) + txt(gx(i), Yv(b.v) - 7, `${nf(b.v)}${unit}`, 14, { an: A(t + .45) });
      if (b.ic) s += img(b.ic, gx(i), yb + 19, 28, A(.2)); else if (b.lab) s += txt(gx(i), yb + 22, b.lab, 13, { an: A(.2) });
      ph['b' + i] = t + .5;
    });
    ph.bars = .4 + .35 * n + .3;
    ex.forEach(e => {
      if (e.k === 'diff') { const vi = bars[e.i].v, vj = bars[e.j].v; s += pop(e.t, line(gx(e.j) - bw / 2, Yv(vj), gx(e.i) + bw / 2 + 6, Yv(vj), { s: RED, sw: 2.5, da: '5 4' }) + rect(gx(e.i) - bw / 2, Yv(vi), bw, Yv(vj) - Yv(vi), { rx: 4, f: Y, op: .9 }) + path(vbrace(Yv(vi) + 1, Yv(vj) - 1, gx(e.i) + bw / 2 + 5, 1, 8), { s: INK, sw: 2 }), 'a-fade') + pop(e.t + .3, pill(gx(e.i) + bw / 2 + 32, (Yv(vi) + Yv(vj)) / 2, e.s || nf(vi - vj), 14, { f: Y, s: INK })); }
      if (e.k === 'top') s += pop(e.t, img('crown', gx(e.i), Yv(bars[e.i].v) - 32, 26)) + pop(e.t, rect(gx(e.i) - bw / 2 - 3, Yv(bars[e.i].v) - 3, bw + 6, yb - Yv(bars[e.i].v) + 3, { rx: 7, f: 'none', s: Y, sw: 4 }), 'a-fade');
      if (e.k === 'sum') s += pop(e.t, pill(e.x, e.y, e.s, 15, { f: Y, s: INK }));
      if (e.k === 'range') { const vs = bars.map(b => b.v), mx = Math.max(...vs), mn = Math.min(...vs), xr = x1 - 2; s += pop(e.t, line(x0, Yv(mx), xr, Yv(mx), { s: RED, sw: 2, da: '5 4' }) + line(x0, Yv(mn), xr, Yv(mn), { s: RED, sw: 2, da: '5 4' }), 'a-fade') + arrow(xr, Yv(mn) - 2, xr, Yv(mx) + 2, e.t + .3, RED) + pop(e.t + .6, pill(e.x ?? xr - 36, e.y ?? (Yv(mx) + Yv(mn)) / 2, e.s, 14, { f: Y, s: INK })); bars.forEach((b, i) => { if (b.v === mx || b.v === mn) s += pop(e.t, rect(gx(i) - bw / 2 - 3, Yv(b.v) - 3, bw + 6, yb - Yv(b.v) + 3, { rx: 7, f: 'none', s: RED, sw: 3 }), 'a-fade'); }); }
    });
    return done(yb + 36, under + s, ph, L);
  },
  // diagrama de punts: cada dada baixa a la seva columna (moda i rang d'un cop d'ull)
  p2dots({ data, xs, mode, range, L }) {
    const n = data.length, cx = i => 160 + (i - (n - 1) / 2) * 34, yb = range ? 150 : 172, X = v => 60 + xs.indexOf(v) * (200 / (xs.length - 1));
    let s = '', under = ''; const ph = { data: .2 }, cnt = {};
    data.forEach((v, i) => s += pop(.2 + i * .06, rect(cx(i) - 14, 8, 28, 28, { rx: 8, f: WH, s: UC, sw: 2 }) + txt(cx(i), 29, v, 17)));
    s += pop(.2, line(40, yb, 280, yb, { sw: 2.5 }) + xs.map(v => line(X(v), yb - 4, X(v), yb + 4, { sw: 2 }) + txt(X(v), yb + 20, v, 15)).join(''), 'a-fade');
    data.forEach((v, i) => { const k = cnt[v] = (cnt[v] || 0) + 1, dy = yb - 14 - (k - 1) * 22, t = .9 + i * .32; s += move(t, cx(i) - X(v), 22 - dy, circ(X(v), dy, 9.5)); });
    ph.dots = .9 + n * .32 + .4;
    const mx = Math.max(...Object.values(cnt));
    if (mode) { const mv = +Object.keys(cnt).find(k => cnt[k] === mx); under += pop(mode, rect(X(mv) - 17, yb - 14 - (mx - 1) * 22 - 16, 34, (mx - 1) * 22 + 30, { rx: 14, f: Y }), 'a-fade'); s += pop(mode + .2, pill(X(mv) + 40, yb - 14 - (mx - 1) * 22, `× ${mx}`, 13, { s: INK })); ph.mode = mode + .4; }
    if (range) { const mn = Math.min(...data), mxv = Math.max(...data); s += path(brace(X(mn), X(mxv), yb + 28, 1, 10), { s: RED, sw: 2.5, an: A(range, 'a-draw') }) + pop(range + .25, pill((X(mn) + X(mxv)) / 2, yb + 54, `${mxv} − ${mn} = ${mxv - mn}`, 14, { f: Y, s: INK })); ph.range = range + .5; }
    return done(range ? yb + 72 : yb + 30, under + s, ph, L);
  },
  // probabilitat amb un dau: casos favorables sobre casos possibles
  p2dice({ fav, simp, imp, L }) {
    const dx = i => 32 + i * 51, y = 32, ph = { dice: .2 };
    let s = '', under = '';
    for (let v = 1; v <= 6; v++) s += pop(.2 + v * .07, die(dx(v - 1), y, v, 38));
    fav.forEach((v, k) => { const t = 1.0 + k * .35; under += pop(t, rect(dx(v - 1) - 24, y - 24, 48, 48, { rx: 12, f: Y }), 'a-fade'); s += pop(t + .1, circ(dx(v - 1), y + 34, 9, { f: UC }) + txt(dx(v - 1), y + 38, k + 1, 11, { c: WH })); });
    ph.fav = 1.0 + fav.length * .35 + .2;
    const bx = 34, bw = 186, by = 102, bh = 28, cw = bw / 6, tb = ph.fav + .4;
    under += pop(tb, rect(bx, by, bw, bh, { rx: 6, f: WH }), 'a-fade'); s += pop(tb, rect(bx, by, bw, bh, { rx: 6, f: 'none', s: INK, sw: 2.5 }), 'a-fade');
    ph.pos = tb + .6;
    const tf = ph.pos + .4;
    fav.forEach((_, k) => under += rect(bx + k * cw + 1.5, by + 1.5, cw - 3, bh - 3, { rx: 4, f: UC, op: .85, an: A(tf + k * .12, 'a-grow') }));
    s += win(tf + .3, simp ? tf + 1.5 : null, frac(fav.length, 6, 262, by + bh / 2, 20));
    ph.frac = tf + .6;
    // línies dels sisens; si se simplifica, les que sobren s'esborren
    for (let k = 1; k < 6; k++) { const keep = simp && (k % (6 / simp[1]) === 0); s += (simp && !keep ? gone(tf + 1.4, line(bx + k * cw, by + 1, bx + k * cw, by + bh - 1, { sw: 2 })) : line(bx + k * cw, by + 1, bx + k * cw, by + bh - 1, { sw: 2 })); }
    if (simp) { s += pop(tf + 1.5, frac(fav.length, 6, 246, by + bh / 2, 17) + txt(271, by + bh / 2 + 7, '=', 18) + frac(simp[0], simp[1], 294, by + bh / 2, 17)); ph.simp = tf + 1.8; }
    let h = by + bh + 24;
    if (imp) { const t = (ph.simp || ph.frac) + .5, yy = by + bh + 58; s += pop(t, rect(dx(0) - 19, yy - 19, 38, 38, { rx: 8, f: WH, s: GRY, sw: 2.5, da: '5 4' }) + txt(dx(0), yy + 8, '7', 22, { c: GRY }) + line(dx(0) - 22, yy + 22, dx(0) + 22, yy - 22, { s: RED, sw: 3 })) + pop(t + .4, pill(150, yy, `0/6 = 0`, 17, { s: RED })); ph.imp = t + .6; h = yy + 28; }
    return done(h, under + s, ph, L);
  },
  // la mitjana: les torres s'anivellen passant blocs de les altes a les baixes
  p2mean({ vals, L }) {
    const n = vals.length, sum = vals.reduce((a, b) => a + b, 0), m = sum / n, u = Number.isInteger(m) ? 1 : .5, mx = Math.max(...vals);
    const bw = 34, gap = 14, x0 = 150 - (n * bw + (n - 1) * gap) / 2, xc = i => x0 + i * (bw + gap), yb = 172, sc = Math.min(15, 126 / mx), Yl = lv => yb - lv * sc;
    let s = '', under = ''; const ph = {};
    const tc = i => .3 + i * .35; ph.cols = tc(n - 1) + .5;
    const tS = ph.cols + .3; ph.sum = tS + .4; const tL = tS + 1.1;
    // peces: les de sobre de la mitjana a les torres altes es mouen als forats de les baixes
    const blk = (i, lv, hg, an, o = {}) => rect(xc(i) + 1, Yl(lv + hg) + 1, bw - 2, sc * hg - 2, { rx: 3, f: o.f || UC, s: o.s, sw: o.sw, an });
    const movers = [], slots = [];
    vals.forEach((v, i) => {
      for (let lv = 0; lv < v - 1e-9; lv++) { const tt = tc(i) + lv * .04; if (lv + 1 <= m + 1e-9) s += blk(i, lv, 1, A(tt)); else if (lv < m - 1e-9) s += blk(i, lv, m - lv, A(tt)); }
      for (let lv = Math.max(m, 0); lv < v - 1e-9; lv += u) movers.push({ i, lv });
      for (let lv = v; lv < m - 1e-9; lv += u) slots.push({ i, lv });
      s += txt(xc(i) + bw / 2, yb + 18, nf(v), 14, { an: A(tc(i)) });
    });
    movers.sort((a, b) => b.lv - a.lv || a.i - b.i); slots.sort((a, b) => a.lv - b.lv || a.i - b.i);
    movers.forEach((p, k) => { const q = slots[k], tt = tL + k * .22; s += move(tt, xc(p.i) - xc(q.i), Yl(p.lv) - Yl(q.lv), pop(tc(p.i) + p.lv * .04, blk(q.i, q.lv, u, '', { f: Y, s: INK, sw: 1.2 }))); });
    ph.lev = tL + movers.length * .22 + .5;
    s += pop(tS, pill(160, 16, `${vals.map(v => nf(v)).join(' + ')} = ${nf(sum)}`, 14, { s: INK }));
    s += pop(ph.lev - .2, line(x0 - 12, Yl(m), x0 + n * (bw + gap) - gap + 12, Yl(m), { s: RED, sw: 2.5, da: '6 4' }), 'a-fade') + pop(ph.lev, pill(x0 + n * (bw + gap) - gap + 34, Yl(m), nf(m), 15, { f: Y, s: INK }));
    ph.end = ph.lev + .5;
    return done(yb + 26, under + s, ph, L);
  },
  // gent que s'asseu en taules: grups plens i els que sobren també necessiten taula
  p2tables({ n, per, L }) {
    const full = Math.floor(n / per), rem = n % per, NT = full + (rem ? 1 : 0), tx = k => 50 + (k % 4) * 73, ty = k => 96 + Math.floor(k / 4) * 64;
    const seat = (k, j) => [tx(k) + (j % 2 ? 12 : -12), ty(k) + (j < 2 ? -19 : 19)], crowd = i => [36 + (i % 15) * 17.5, 18 + Math.floor(i / 15) * 18];
    let s = ''; const ph = { start: .3 };
    const table = (k, da) => rect(tx(k) - 26, ty(k) - 10, 52, 20, { rx: 6, f: PAL, s: UC, sw: 2.5, da }) + [0, 1, 2, 3].map(j => circ(...seat(k, j), 7, { f: WH, s: LN, sw: 2 })).join('');
    for (let k = 0; k < full; k++) s += pop(.2, table(k), 'a-fade');
    if (rem) s += pop(3.6, table(full, '5 4'), 'a-fade');
    const tfill = k => 1.0 + k * .28;
    for (let i = 0; i < n; i++) {
      const [cx, cy] = crowd(i);
      if (i < full * per) { const k = Math.floor(i / per), [sx, sy] = seat(k, i % per); s += move(tfill(k), cx - sx, cy - sy, circ(sx, sy, 6.5, { an: A(.2) })); }
      else { const j = i - full * per, [sx, sy] = seat(full, j); s += move(4.0, cx - sx, cy - sy, circ(sx, sy, 6.5, { f: Y, s: INK, sw: 1.5, an: A(.2) }) + circ(sx, sy, 10, { f: 'none', s: RED, sw: 2.5, an: A(3.0) })); }
    }
    ph.rem = 3.2;
    ph.ext = 4.5;
    for (let k = 0; k < NT; k++) s += txt(tx(k), ty(k) + 5, k + 1, 13, { c: k === NT - 1 ? RED : INK, an: A(5.0 + k * .08) });
    s += pop(5.8, pill(290, 40, nf(NT), 18, { f: Y, s: INK }));
    ph.end = 6.0;
    return done(ty(NT - 1) + 32, s, ph, L);
  }
  ,
  /* ---------- decimals ---------- */
  // un decimal amb quadrícules de 100: unitats senceres, columnes (dècimes), quadrets (centèsimes) i monedes
  p2dec100({ v, L }) {
    const [ip, fp = '00'] = v.split(','), U = +ip, d = +fp[0], c = +(fp[1] || 0), gs = 60, cs = gs / 10, gap = 10, n = U + 1, x0 = 160 - (n * gs + (n - 1) * gap) / 2, y0 = 42, gx = k => x0 + k * (gs + gap);
    let s = '', under = ''; const ph = {}, GOLD = '#C98A00';
    s += txt(160, 28, `${ip},<tspan fill="${UC}">${fp[0]}</tspan><tspan fill="${GOLD}">${fp[1]}</tspan>`, 24, { an: A(.2) });
    const grid = (x, col) => { let o = ''; for (let k = 1; k < 10; k++) o += line(x + k * cs, y0, x + k * cs, y0 + gs, { s: col, sw: .8 }) + line(x, y0 + k * cs, x + gs, y0 + k * cs, { s: col, sw: .8 }); return o; };
    for (let k = 0; k < U; k++) s += pop(.5 + k * .35, rect(gx(k), y0, gs, gs, { rx: 2, f: UC, op: .85 }) + grid(gx(k), WH) + rect(gx(k), y0, gs, gs, { rx: 2, f: 'none', s: INK, sw: 1.5 }), 'a-fade');
    const xp = gx(U), tD = .5 + U * .35 + .3;
    under += pop(.4, rect(xp, y0, gs, gs, { rx: 2, f: WH }), 'a-fade');
    for (let k = 0; k < d; k++) under += rect(xp + k * cs, y0, cs, gs, { rx: 0, f: UC, op: .85, an: A(tD + k * .18, 'a-fade') });
    for (let k = 0; k < c; k++) under += rect(xp + d * cs, y0 + k * cs, cs, cs, { rx: 0, f: Y, an: A(tD + d * .18 + .2 + k * .1, 'a-fade') });
    s += pop(.4, grid(xp, '#CFC4DA') + rect(xp, y0, gs, gs, { rx: 2, f: 'none', s: INK, sw: 1.5 }), 'a-fade');
    const tL = tD + d * .18 + .3 + c * .1, tR = tL + 1.0;
    if (U) s += path(brace(gx(0) + 2, gx(U - 1) + gs - 2, y0 + gs + 6, 1, 8), { s: UC, sw: 2.5, an: A(tL, 'a-draw') }) + txt((gx(0) + gx(U - 1) + gs) / 2, y0 + gs + 30, `${U} U`, 14, { an: A(tL + .2) });
    s += win(tL, tR, txt(xp + gs / 2, y0 + gs + 22, `<tspan fill="${UC}">${d} d</tspan> + <tspan fill="${GOLD}">${c} c</tspan>`, 13)) + pop(tR, pill(xp + gs / 2, y0 + gs + 18, `${fp} c`, 13, { f: Y, s: INK }));
    ph.grid = tL + .3; ph.read = tR + .3;
    // en diners: monedes d'1 €, de 10 cèntims i d'1 cèntim
    const tM = tR + .9, my = 168; let cx = 22;
    for (let k = 0; k < U; k++) { s += pop(tM + k * .1, circ(cx + 14, my, 14, { f: Y, s: '#D9A21B', sw: 2 }) + txt(cx + 14, my + 3.5, '1 €', 10, { c: '#6B4700' })); cx += 32; }
    const mid0 = cx; cx += 10;
    for (let k = 0; k < d; k++) { s += pop(tM + .4 + k * .08, circ(cx + 11, my, 11, { f: '#F6DD8E', s: '#D9A21B', sw: 1.5 }) + txt(cx + 11, my + 3.5, '10', 9, { c: '#6B4700' })); cx += 24; }
    cx += 8;
    for (let k = 0; k < c; k++) { const col = k % 4, row = Math.floor(k / 4); s += pop(tM + .8 + k * .06, circ(cx + 8 + col * 17, my - 8 + row * 17, 7.5, { f: '#E8A87C', s: '#B8703F', sw: 1.2 }) + txt(cx + 8 + col * 17, my - 5 + row * 17, '1', 8, { c: '#5A2E10' })); }
    s += pop(tM + 1.2, pill((22 + mid0) / 2, my + 30, `${U} €`, 13, { f: Y, s: INK }) + pill((mid0 + 306) / 2, my + 30, `${fp} ${L_('cèntims', 'céntimos')}`, 13, { f: Y, s: INK }));
    ph.money = tM + 1.4;
    return done(my + 46, under + s, ph, L);
  },
  // multiplicar o dividir per 10, 100, 1.000: la coma salta tants llocs com zeros
  p2comma({ rows, L }) {
    let s = ''; const ph = {}, cw = 22, xc0 = 158;
    rows.forEach(([num, k, lab], i) => {
      const y = 30 + i * 42, T = .3 + i * 1.35, [ip, fp = ''] = num.split(','), ds = (ip + fp).split(''), p = ip.length, len = ds.length, p2 = p + k;
      const X = j => xc0 + (j - p) * cw + cw / 2, CX = pos => xc0 + (pos - p) * cw;
      s += txt(6, y + 7, lab, 13, { a: 'start', c: UC, an: A(T) });
      ds.forEach((d, j) => s += txt(X(j), y + 8, d, 22, { an: A(T) }));
      const zs = []; if (p2 > len) for (let j = len; j < p2; j++) zs.push(j); if (p2 <= 0) for (let j = p2 - 1; j < 0; j++) zs.push(j);
      zs.forEach((j, m) => s += txt(X(j), y + 8, '0', 22, { c: RED, an: A(T + .95 + m * .08) }));
      const cm = pop(T, move(T + .5, CX(p) - CX(p2), 0, txt(CX(p2), y + 10, ',', 26, { c: RED })));
      s += p2 >= len ? gone(T + 1.4, cm) : cm;
      for (let m = 0; m < Math.abs(k); m++) { const sg = Math.sign(k); s += hop(CX(p + sg * m), CX(p + sg * (m + 1)), y - 12, 6, T + .45 + m * .12, RED); }
      const val = +(ip + '.' + (fp || '0')) * 10 ** k, dec = Math.max(0, fp.length - k);
      s += pop(T + 1.1, pill(284, y + 2, nf(val, dec), 15, { f: Y, s: INK }));
      ph['r' + i] = T + 1.3;
    });
    return done(30 + (rows.length - 1) * 42 + 24, s, ph, L);
  },
  // multiplicar i dividir decimals: comptar decimals, posar la coma al quocient i treure la coma del divisor
  p2decmul({ L }) {
    let s = '', under = ''; const ph = {};
    const chars = (str, x0, y, t, fs = 20, o = {}) => { let x = x0, out = ''; const xs = []; [...str].forEach(ch => { const w = ch === ',' ? 7 : ch === ' ' ? 6 : fs * .62; xs.push(x + w / 2); if (ch !== ' ') out += txt(x + w / 2, y, ch, fs, { c: (o.red && ch === ',') ? RED : INK, an: A(t) }); x += w; }); return { out, xs, end: x }; };
    // 2,4 × 1,5: un decimal i un decimal
    const r1_ = chars('2,4 × 1,5', 24, 34, .2); s += r1_.out;
    [1, 7].forEach((ci, k) => { under += pop(.7 + k * .2, circ(r1_.xs[ci], 29, 9, { f: Y })); s += pop(.8 + k * .2, pill(r1_.xs[ci], 8, '1', 10, { s: RED, c: RED, pad: 8 })); });
    // 24 × 15 = 360 → la coma a 2 llocs de la dreta: 3,60 = 3,6
    const r2 = chars('24 × 15 = 360', 24, 80, 1.5); s += r2.out;
    const x3 = r2.xs[10], x6 = r2.xs[11], x0_ = r2.xs[12], e = x0_ + 7;
    s += hop(e, (x6 + x0_) / 2, 62, 6, 2.3, RED) + hop((x6 + x0_) / 2, (x3 + x6) / 2, 62, 6, 2.5, RED);
    s += txt((x3 + x6) / 2, 82, ',', 22, { c: RED, an: A(2.8) });
    s += pop(3.0, pill(258, 74, '3,60 = 3,6', 15, { f: Y, s: INK }));
    ph.a = 1.0; ph.b = 3.2;
    // 7,5 ÷ 3 = 2,5: la coma puja al quocient
    const yD = 134; s += pop(3.6, txt(52, yD, '7', 22) + txt(62, yD, ',', 22, { c: RED }) + txt(74, yD, '5', 22) + line(92, yD - 22, 92, yD + 8, { sw: 2.5 }) + line(92, yD + 8, 150, yD + 8, { sw: 2.5 }) + txt(104, yD, '3', 22, { a: 'start' }));
    s += pop(4.0, txt(104, yD + 32, '2', 22, { a: 'start', c: UC }) + txt(132, yD + 32, '5', 22, { c: UC }));
    s += path(`M62,${yD + 4} Q84,${yD + 30} 119,${yD + 32}`, { s: RED, sw: 2, an: A(4.2, 'a-draw') }) + txt(122, yD + 33, ',', 22, { c: RED, an: A(4.5) });
    s += pop(4.6, pill(250, yD + 12, '7,5 ÷ 3 = 2,5', 14, { f: Y, s: INK }));
    ph.c = 4.8;
    // 4,8 ÷ 0,6: × 10 als dos → 48 ÷ 6 = 8
    const yE = 206, r4 = chars('4,8 ÷ 0,6', 24, yE, 5.2, 20, { red: true }); s += r4.out;
    [[r4.xs[1], r4.xs[2]], [r4.xs[7], r4.xs[8]]].forEach(([a, b]) => s += hop(a, b + 8, yE - 18, 6, 5.5, RED));
    s += pop(6.0, pill(240, yE - 6, '48 ÷ 6 = 8', 15, { f: Y, s: INK }));
    ph.d = 6.3;
    return done(222, under + s, ph, L);
  },
  /* ---------- operacions ---------- */
  // divisió pas a pas: agafo xifres, quantes vegades hi cap, què sobra i baixo la següent
  p2longdiv({ dd, dv, prova, L }) {
    const D = String(dd).split('').map(Number), cw = 22, x0 = 40, X = i => x0 + i * cw, y0 = 44, rowY = r => y0 + r * 32, xl = X(D.length - 1) + cw / 2 + 12, ph = {};
    let s = '', under = '';
    s += D.map((d, i) => txt(X(i), y0, d, 24, { an: A(.2) })).join('');
    s += pop(.2, line(xl, y0 - 26, xl, y0 + 12, { sw: 3 }) + line(xl, y0 + 12, xl + 96, y0 + 12, { sw: 3 }) + txt(xl + 14, y0, nf(dv), 24, { a: 'start' }), 'a-fade');
    let e = 0, c = D[0]; while (c < dv && e < D.length - 1) { e++; c = c * 10 + D[e]; }
    const steps = [];
    for (;;) { const qd = Math.floor(c / dv), r = c - qd * dv; steps.push({ c, e, qd, r }); if (e === D.length - 1) break; e++; c = r * 10 + D[e]; }
    steps.forEach((st, k) => {
      const T = .8 + k * 1.35, len = String(st.c).length, xa = X(st.e - len + 1) - cw / 2 + 2, xb = X(st.e) + cw / 2 - 2, last = k === steps.length - 1;
      s += line(xa, rowY(k) + 7, xb, rowY(k) + 7, { s: UC, sw: 3, an: A(T, 'a-draw') });
      s += txt(xl + 16 + k * 18, y0 + 40, st.qd, 24, { a: 'start', c: INK, an: A(T + .35) });
      const rs = String(st.r);
      [...rs].forEach((ch, m) => s += txt(X(st.e - rs.length + 1 + m), rowY(k + 1), ch, 22, { c: !last && st.r === 0 ? GRY : INK, an: A(T + .7) }));
      if (!last) { const nx = X(st.e + 1); s += arrow(nx, y0 + 10, nx, rowY(k + 1) - 20, T + .9, GRY, 2) + txt(nx, rowY(k + 1), D[st.e + 1], 22, { an: A(T + 1.1) }); }
      ph['s' + k] = T + .95;
    });
    const tE = .8 + steps.length * 1.35, lst = steps[steps.length - 1], q = steps.map(x => x.qd).join('');
    under += pop(tE, rect(xl + 8, y0 + 16, q.length * 18 + 12, 32, { rx: 9, f: Y }), 'a-fade');
    s += txt(xl + 26 + q.length * 18, y0 + 38, L_('quocient', 'cociente'), 11, { a: 'start', c: UC, an: A(tE + .1) });
    const rx = X(lst.e) - (String(lst.r).length - 1) * cw / 2, ry = rowY(steps.length) - 8;
    s += pop(tE + .2, circ(rx, ry, 15, { f: 'none', s: RED, sw: 3 })) + txt(rx + 22, ry + 4, L_('residu', 'resto'), 11, { a: 'start', c: RED, an: A(tE + .3) });
    ph.end = tE + .4;
    let h = rowY(steps.length) + 18;
    if (prova) { s += pop(tE + .9, pill(206, h + 16, `${nf(dv)} × ${q} = ${nf(dd)}`, 15, { f: WH, s: INK })) + check(206 + tw(`${nf(dv)} × ${q} = ${nf(dd)}`, 15) / 2 + 22, h + 16, tE + 1.2); ph.prova = tE + 1.3; h += 36; }
    return done(h, under + s, ph, L);
  },
  // l'ordre de les operacions: es marca el que va primer i l'expressió es va fent petita
  p2expr({ rows, fs = 19, L }) {
    // a dalt, l'expressió tal com és (amb el que va primer subratllat); a sota, es va fent petita fins al resultat
    let s = ''; const ph = {}; let t = .2; const gapR = rows.length > 2 ? 66 : 76;
    rows.forEach((r, i) => {
      const y = 28 + i * gapR, y2 = y + 30, R = 'r' + i, step = rows.length > 2 ? .85 : 1.05;
      const lay = str => { const tk = str.split(' '), ws = tk.map(k => tw(k, fs) * .95); let W = 0; const xs = []; tk.forEach((k, j) => { if (j) W += (tk[j - 1] === '(' || k === ')') ? 3 : 10; xs.push(W + ws[j] / 2); W += ws[j]; }); return { tk, ws, xs: xs.map(x => x + 160 - W / 2) }; };
      const Ls = r.st.map(lay), T = r.st.map((_, j) => t + j * step);
      const ul = (ly, [a, b], yy, tt) => { const xa = ly.xs[a] - ly.ws[a] / 2 - 3, xb = ly.xs[b] + ly.ws[b] / 2 + 3; return rect(xa, yy + 6, xb - xa, 5, { rx: 2.5, f: UC, an: A(tt, 'a-grow') }); };
      s += pop(T[0], Ls[0].tk.map((k, m) => txt(Ls[0].xs[m], y, k, fs)).join(''), 'a-fade') + ul(Ls[0], r.rg[0], y, T[0] + .45);
      for (let j = 1; j < Ls.length; j++) {
        const ly = Ls[j], prev = Ls[j - 1], [a, b] = r.rg[j - 1], last = j === Ls.length - 1, py = j === 1 ? y : y2;
        let row = '';
        ly.tk.forEach((k, m) => {
          const el = txt(ly.xs[m], y2, k, fs), om = m < a ? m : m > a ? m + (b - a) : null;
          row += om == null ? pop(T[j] + .15, rect(ly.xs[m] - ly.ws[m] / 2 - 6, y2 - fs - 1, ly.ws[m] + 12, fs + 11, { rx: 9, f: last ? Y : '#FFE7A3' }) + el) : move(T[j], prev.xs[om] - ly.xs[m], py - y2, el);
        });
        if (!last) row += ul(ly, r.rg[j], y2, T[j] + .45);
        row += txt(ly.xs[0] - ly.ws[0] / 2 - (last ? 18 : 14), y2, '=', fs, { c: GRY });
        const g = pop(T[j], row, 'a-fade');
        s += last ? g : gone(T[j + 1], g);
        ph[`${R}s${j}`] = T[j] + .35;
      }
      ph[R + 's0'] = T[0] + .35;
      t = T[T.length - 1] + (rows.length > 2 ? .45 : .7);
    });
    return done(28 + (rows.length - 1) * gapR + 44, s, ph, L);
  },
  /* ---------- divisibilitat ---------- */
  // els divisors com a rectangles: totes les maneres de posar n quadrets en files iguals
  p2rects({ n, L }) {
    const pairs = []; for (let a = 1; a * a <= n; a++) if (n % a === 0) pairs.push([a, n / a]);
    const cs = 13, x0 = 76; let y = 14, s = ''; const ph = {};
    pairs.forEach(([a, b], k) => {
      const t = .3 + k * 1.0; let cells = '';
      for (let r = 0; r < a; r++) for (let c = 0; c < b; c++) cells += rect(x0 + c * cs, y + r * cs, cs, cs, { rx: 2, f: UC, s: WH, sw: 1.5 });
      s += pop(t, cells, 'a-fade') + txt(10, y + a * cs / 2 + 5, `${a} × ${b}`, 14, { a: 'start', an: A(t) });
      ph['a' + k] = t + .4; y += a * cs + 16;
    });
    ph.all = .3 + (pairs.length - 1) * 1.0 + .5;
    const ds = [...pairs.map(p => p[0]), ...pairs.map(p => p[1]).reverse()].filter((v, i, arr) => arr.indexOf(v) === i), td = ph.all + .5; y += 12;
    ds.forEach((d, i) => s += pop(td + i * .15, pill(160 + (i - (ds.length - 1) / 2) * 46, y, nf(d), 16, { f: Y, s: INK })));
    ph.div = td + ds.length * .15 + .2;
    return done(y + 18, s, ph, L);
  },
  // primers i compostos: el 13 només fa una fila; el 15 també es pot posar en 3 files de 5
  p2primes({ L }) {
    const cs = 11, x0 = 52; let s = ''; const ph = {};
    const cells = (x, y, a, b) => { let o = ''; for (let r = 0; r < a; r++) for (let c = 0; c < b; c++) o += rect(x + c * cs, y + r * cs, cs, cs, { rx: 2, f: UC, s: WH, sw: 1.5 }); return o; };
    s += txt(26, 30, '13', 19, { an: A(.2) }) + pop(.3, cells(x0, 18, 1, 13), 'a-fade') + txt(x0 + 13 * cs + 8, 29, '1 × 13', 12, { a: 'start', c: GRY, an: A(.5) }) + pop(.9, pill(286, 24, L_('primer', 'primo'), 13, { f: Y, s: INK }));
    s += txt(26, 64, '15', 19, { an: A(1.4) }) + pop(1.5, cells(x0, 52, 1, 15), 'a-fade') + txt(x0 + 15 * cs + 6, 63, '1 × 15', 12, { a: 'start', c: GRY, an: A(1.6) }) + pop(2.0, cells(x0, 70, 3, 5), 'a-fade') + txt(x0 + 5 * cs + 8, 91, '3 × 5', 12, { a: 'start', c: GRY, an: A(2.1) }) + pop(2.4, pill(282, 86, L_('compost', 'compuesto'), 13, { s: INK }));
    ph.r13 = 1.1; ph.r15 = 2.6;
    const PR = [2, 3, 5, 7, 11, 13, 17, 19], gx = v => 34 + ((v - 1) % 10) * 28, gy = v => 136 + Math.floor((v - 1) / 10) * 30;
    for (let v = 1; v <= 20; v++) { const k = PR.indexOf(v); s += txt(gx(v), gy(v) + 5, v, 13, { c: k < 0 ? GRY : INK, an: A(3.0 + v * .02) }); if (k >= 0) s += pop(3.6 + k * .18, circ(gx(v), gy(v), 12, { f: UC }) + txt(gx(v), gy(v) + 5, v, 13, { c: WH })); }
    ph.grid = 3.3; ph.pr = 3.6 + PR.length * .18 + .2;
    return done(190, s, ph, L);
  },
  // criteri del 3: sumem les xifres; criteri del 5: mirem l'última
  p2digsum({ n, m, n2, L }) {
    const ds = String(n).split(''), bx = i => 44 + i * 22, sum = ds.reduce((a, d) => a + +d, 0), row = 92;
    let s = '', under = ''; const ph = { ask: .4 };
    ds.forEach((d, i) => s += txt(bx(i), 40, d, 30, { an: A(.2) }));
    s += txt(bx(ds.length - 1) + 22, 38, `÷ ${m} ?`, 18, { a: 'start', c: GRY, an: A(.3) });
    ds.forEach((d, i) => { const x = 36 + i * 44; s += move(.8 + i * .22, bx(i) - x, 40 - row, txt(x, row, d, 24, { c: UC })); if (i) s += txt(x - 22, row - 1, '+', 20, { an: A(.9 + i * .22) }); });
    const xs = 36 + ds.length * 44; s += txt(xs - 22, row - 1, '=', 20, { an: A(1.6) });
    under += pop(1.8, circ(xs, row - 8, 17, { f: Y })); s += txt(xs, row, sum, 24, { an: A(1.8) });
    const ml = [3, 6, 9, 12, 15, 18].map(v => v * m / 3);
    ml.forEach((v, i) => s += pop(2.3 + i * .08, pill(36 + i * 42, 140, v, 14, v === sum ? { f: Y, s: INK } : { s: LN })));
    s += check(36 + ml.indexOf(sum) * 42 + 18, 126, 2.9);
    ph.mult = 3.1;
    s += pop(3.4, pill(236, 40, `${nf(n)} ÷ ${m} = ${nf(n / m)}`, 15, { f: Y, s: INK }));
    ph.yes = 3.7;
    const d2 = String(n2).split(''), y2 = 196;
    under += pop(4.3, circ(bx(d2.length - 1), y2 - 9, 16, { f: Y }));
    s += d2.map((d, i) => txt(bx(i), y2, d, 28, { an: A(4.0) })).join('') + pop(4.6, pill(226, y2 - 9, `${L_('acaba en', 'acaba en')} ${d2[d2.length - 1]} → ÷ 5`, 14, { s: INK })) + check(226 + tw(`acaba en 5 → ÷ 5`, 14) / 2 + 22, y2 - 9, 4.8);
    ph.five = 5.0;
    return done(214, under + s, ph, L);
  },
  // sumar i restar fraccions amb barres (i amb denominador comú)
  p2fsum({ rows, L }) {
    const bw = 84, bh = 22, xA = 8, xB = 120, xR = 228; let s = '', under = '', t = .2; const ph = {};
    const lines = (x, y, d, t0, t1, keep) => { let o = ''; for (let k = 1; k < d; k++) { if (keep && keep(k)) continue; o += win(t0, t1, line(x + bw * k / d, y + 1, x + bw * k / d, y + bh - 1, { s: INK, sw: 1.6 }), 'a-fade'); } return o; };
    rows.forEach((r, i) => {
      const y = 10 + i * 70, [a1, a2] = r.a, [b1, b2] = r.b, cd = r.cd || a2, A1 = a1 * cd / a2, B1 = b1 * cd / b2, Rn = r.op === '+' ? A1 + B1 : A1 - B1, R = 'r' + i;
      const T0 = t, T1 = r.cd ? T0 + .6 : T0, TR = T1 + (r.cd ? .6 : .8), TS = r.simp ? TR + .9 : null, fy = y + bh + 16;
      // A i B, amb les seves parts
      [[xA, a1, a2, A1, UC], [xB, b1, b2, B1, Y]].forEach(([x, n, d, n1, col]) => {
        under += rect(x, y, bw, bh, { rx: 5, f: WH, an: A(T0, 'a-fade') }) + rect(x + 1, y + 1, bw * n / d - 2, bh - 2, { rx: 4, f: col, op: col === Y ? 1 : .85, an: A(T0 + .15, 'a-grow') });
        s += lines(x, y, d, T0, null) + (cd !== d ? lines(x, y, cd, T1, null, k => (k * d) % cd === 0) : '') + rect(x, y, bw, bh, { rx: 5, f: 'none', s: INK, sw: 2, an: A(T0, 'a-fade') });
        s += win(T0 + .1, cd !== d ? T1 : null, frac(n, d, x + bw / 2, fy, 14)) + (cd !== d ? pop(T1, frac(n1, cd, x + bw / 2, fy, 14, RED)) : '');
      });
      s += txt(xA + bw + 14, y + 17, r.op, 20, { an: A(T0) }) + txt(xR - 12, y + 17, '=', 20, { an: A(TR) });
      // el resultat
      under += rect(xR, y, bw, bh, { rx: 5, f: WH, an: A(TR, 'a-fade') }) + rect(xR + 1, y + 1, bw * A1 / cd - 2, bh - 2, { rx: 4, f: UC, op: .85, an: A(TR + .15, 'a-grow') });
      if (r.op === '+') under += rect(xR + bw * A1 / cd, y + 1, bw * B1 / cd - 1, bh - 2, { rx: 3, f: Y, an: A(TR + .45, 'a-grow') });
      else s += pop(TR + .45, rect(xR + bw * Rn / cd, y + 1, bw * B1 / cd, bh - 2, { rx: 3, f: WH, op: .7 }) + line(xR + bw * Rn / cd + 3, y + 4, xR + bw * A1 / cd - 3, y + bh - 4, { s: RED, sw: 2.5 }) + line(xR + bw * Rn / cd + 3, y + bh - 4, xR + bw * A1 / cd - 3, y + 4, { s: RED, sw: 2.5 }), 'a-fade');
      const keepS = r.simp ? (k => (k * r.simp[1]) % cd === 0) : null;
      s += (r.simp ? lines(xR, y, cd, TR, TS, keepS) + lines(xR, y, cd, TR, null, k => !keepS(k)) : lines(xR, y, cd, TR, null)) + rect(xR, y, bw, bh, { rx: 5, f: 'none', s: INK, sw: 2, an: A(TR, 'a-fade') });
      s += win(TR + .6, TS, frac(Rn, cd, xR + bw / 2, fy, 14));
      if (r.simp) s += pop(TS, frac(r.simp[0], r.simp[1], xR + bw / 2, fy, 14, RED) + pill(xR + bw / 2 - 42, fy + 6, `÷ ${cd / r.simp[1]}`, 11, { s: RED, c: RED, pad: 8 }));
      Object.assign(ph, { [R]: T0 + .4, [R + 'cd']: T1 + .4, [R + 'res']: TR + .8, [R + 'simp']: (TS || TR) + .4 });
      t = (TS || TR) + .7;
    });
    return done(10 + rows.length * 70 - 6, under + s, ph, L);
  },
  /* ---------- angles, àrees i volums ---------- */
  // tipus d'angles: el costat gira i l'angle s'obre (agut, recte, obtús, pla)
  p2angle({ angs, L }) {
    const V = [160, 172], Rr = 112, ph = {}, T = angs.map((_, k) => .6 + k * 1.45), rad = d => d * Math.PI / 180;
    const type = a => a < 90 ? L_('agut', 'agudo') : a === 90 ? L_('recte', 'recto') : a < 180 ? L_('obtús', 'obtuso') : L_('pla', 'llano');
    let s = path(`M${V[0] - 96},${V[1]} A96,96 0 0 1 ${V[0] + 96},${V[1]}`, { s: '#EFE9F5', sw: 16 });
    for (let d = 0; d <= 180; d += 10) s += line(V[0] + 88 * Math.cos(rad(d)), V[1] - 88 * Math.sin(rad(d)), V[0] + (d % 30 ? 96 : 104) * Math.cos(rad(d)), V[1] - (d % 30 ? 96 : 104) * Math.sin(rad(d)), { s: GRY, sw: d % 30 ? 1 : 1.8 });
    s += txt(V[0] + 114, V[1] + 4, '0°', 10, { c: GRY }) + txt(V[0], V[1] - 110, '90°', 10, { c: GRY }) + txt(V[0] - 116, V[1] + 4, '180°', 10, { c: GRY });
    angs.forEach((a, k) => {
      const t1 = k < angs.length - 1 ? T[k + 1] + .5 : null;
      s += win(T[k] + .6, t1, a === 90 ? path(`M${V[0] + 20},${V[1]} v-20 h-20`, { s: UC, sw: 3 }) + `<path d="${sector(V[0], V[1], 20, -Math.PI / 2, 0)}" class="p2f2"/>` : `<path d="${sector(V[0], V[1], 38, -rad(a), 0)}" class="p2f2"/>`, 'a-fade');
      s += win(T[k] + .7, t1, txt(V[0] + 58 * Math.cos(rad(a / 2)), V[1] - 58 * Math.sin(rad(a / 2)) + 5, `${a}°`, 15, { c: INK }));
      s += win(T[k] + .8, t1, pill(V[0], 18, type(a), 14, { f: Y, s: INK }));
      ph['a' + k] = T[k] + 1.0;
    });
    let ray = line(V[0], V[1], V[0] + Rr, V[1], { s: UC, sw: 4.5 }) + circ(V[0] + Rr, V[1], 4, { f: UC });
    for (let k = angs.length - 1; k >= 0; k--) ray = rot(T[k], -(angs[k] - (k ? angs[k - 1] : 0)), V[0], V[1], ray);
    s += line(V[0], V[1], V[0] + Rr, V[1], { s: INK, sw: 4.5 }) + ray + circ(V[0], V[1], 5, { f: INK });
    return done(196, s, ph, L);
  },
  // els tres angles d'un triangle: els retallem i junts fan un angle pla (180°)
  p2tearoff({ A: a, B: b, L }) {
    const c = 180 - a - b, rad = d => d * Math.PI / 180, sA = Math.sin(rad(a)), sB = Math.sin(rad(b)), sC = Math.sin(rad(c));
    const base = Math.min(172, 100 * sC / (sA * sB)), Ax = 24, Ay = 116, Bx = Ax + base, AC = base * sB / sC, Cx = Ax + AC * Math.cos(rad(a)), Cy = Ay - AC * Math.sin(rad(a)), P = [234, 196], r = 26, PI = Math.PI;
    let s = ''; const ph = {};
    const wedge = (x, y, a0, a1, f, an = '') => `<path d="${sector(x, y, r, a0, a1)}" fill="${f}" stroke="${INK}" stroke-width="1.5"${an ? ' ' + an : ''}/>`;
    const lab = (x, y, a0, a1, tx, rr = r + 14) => txt(x + rr * Math.cos((a0 + a1) / 2), y + rr * Math.sin((a0 + a1) / 2) + 5, tx, 14);
    const CA = '#F29B8F', wA = [-rad(a), 0], wB = [PI, PI + rad(b)], wC = [rad(b), PI - rad(a)];
    s += path(`M${r1(Ax)},${r1(Ay)} L${r1(Bx)},${r1(Ay)} L${r1(Cx)},${r1(Cy)} Z`, { f: '#FBF8FD', s: INK, sw: 3, an: A(.2, 'a-draw') });
    s += pop(.7, wedge(Ax, Ay, ...wA, UC)) + pop(.8, wedge(Bx, Ay, ...wB, Y)) + pop(.9, wedge(Cx, Cy, ...wC, CA));
    s += pop(.8, lab(Ax, Ay, ...wA, `${a}°`, r + 18)) + pop(.9, lab(Bx, Ay, ...wB, `${b}°`, r + 18)) + win(1.0, 4.6, lab(Cx, Cy, ...wC, '?', r + 16)) + pop(4.6, lab(Cx, Cy, ...wC, `${c}°`, r + 18));
    s += pop(1.1, line(P[0] - 78, P[1], P[0] + 78, P[1], { sw: 3 }) + circ(P[0], P[1], 3.5, { f: INK }), 'a-fade');
    ph.s0 = 1.3;
    s += move(1.7, Ax - P[0], Ay - P[1], wedge(P[0], P[1], ...wA, UC)) + move(2.0, Bx - P[0], Ay - P[1], wedge(P[0], P[1], ...wB, Y));
    s += pop(2.4, lab(P[0], P[1], ...wA, `${a}°`)) + pop(2.5, lab(P[0], P[1], ...wB, `${b}°`));
    s += win(2.6, 3.9, pill(P[0], 136, `${a}° + ${b}° = ${a + b}°`, 14, { f: Y, s: INK }));
    ph.s1 = 2.9;
    s += pop(3.5, path(`M${P[0] - r - 8},${P[1]} A${r + 8},${r + 8} 0 0 1 ${P[0] + r + 8},${P[1]}`, { s: RED, sw: 2, da: '4 3' }), 'a-fade');
    s += move(3.8, Cx - P[0], Cy - P[1], rot(3.8, 0, P[0], P[1], wedge(P[0], P[1], PI + rad(b), 2 * PI - rad(a), CA), 180));
    s += pop(4.6, lab(P[0], P[1], PI + rad(b), 2 * PI - rad(a), `${c}°`, r + 16));
    s += pop(4.1, pill(P[0], 136, `180° − ${a + b}° = ${c}°`, 14, { f: Y, s: INK }));
    ph.s2 = 5.0;
    return done(206, s, ph, L);
  },
  // àrea del triangle: és la meitat del rectangle que té la mateixa base i altura
  p2tri({ b, h, ap, first = 'tri', u: unit = 'cm', L }) {
    const u = Math.min(20, 200 / b, 110 / h), W = b * u, H = h * u, x0 = (320 - W) / 2 - 12, y0 = 18, yB = y0 + H, xa = x0 + ap * W, ph = {};
    let s = '', under = '';
    const tR = first === 'rect' ? .2 : 1.4, tT = first === 'rect' ? 1.6 : .2, tH = 2.9, tA = 3.9;
    let gr = ''; for (let i = 1; i < b; i++) gr += line(x0 + i * u, y0, x0 + i * u, yB, { s: LN, sw: 1.2 }); for (let j = 1; j < h; j++) gr += line(x0, y0 + j * u, x0 + W, y0 + j * u, { s: LN, sw: 1.2 });
    under += pop(tR, `<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(W)}" height="${r1(H)}" class="p2f1"/>` + gr, 'a-fade');
    s += pop(tR, rect(x0, y0, W, H, { rx: 1, f: 'none', s: INK, sw: 2.5, da: '7 5' }), 'a-fade');
    under += pop(tH, path(`M${r1(x0)},${r1(yB)} L${r1(x0)},${r1(y0)} L${r1(xa)},${r1(y0)} Z M${r1(xa)},${r1(y0)} L${r1(x0 + W)},${r1(y0)} L${r1(x0 + W)},${r1(yB)} Z`, { f: '#DCD0EC', s: 'none', sw: 0 }), 'a-fade');
    s += pop(tT, path(`M${r1(x0)},${r1(yB)} L${r1(x0 + W)},${r1(yB)} L${r1(xa)},${r1(y0)} Z`, { f: UC, s: INK, sw: 3, op: .9 }), 'a-fade');
    s += pop(tT + .3, line(xa, y0 + 3, xa, yB - 3, { s: WH, sw: 2.5, da: '5 4' }) + path(`M${r1(xa)},${r1(yB - 12)} h10 v12`, { s: WH, sw: 2 }) + txt(xa + 7, y0 + H * .36, `${h} ${unit}`, 13, { a: 'start', c: WH }), 'a-fade');
    s += txt(x0 + W / 2, yB + 20, `${b} ${unit}`, 14, { an: A(Math.min(tR, tT)) }) + txt(x0 - 8, (y0 + yB) / 2 + 5, `${h}`, 14, { a: 'end', an: A(tR) });
    const py = yB + 46, rectS = `${b} × ${h} = ${b * h}${first === 'rect' ? ` ${unit}²` : ''}`, triS = first === 'rect' ? `${b} × ${h} ÷ 2 = ${b * h / 2} ${unit}²` : `${b * h} ÷ 2 = ${b * h / 2}`;
    s += win(tR + .3, tH, pill(160, py, rectS, 15, { s: INK })) + win(tH + .2, first === 'rect' ? null : tA, pill(160, py, triS, 15, { f: Y, s: INK }));
    s += txt(x0 + (W + ap * W) / 3, yB - H * .16, b * h / 2, 16, { c: WH, an: A(tH + .3) });
    if (first !== 'rect') s += pop(tA, pill(160, py, `A = ${b * h / 2} ${unit}²`, 16, { f: Y, s: INK }));
    Object.assign(ph, { tri: tT + .5, rect: tR + .5, half: tH + .5, area: tA + .3 });
    return done(py + 18, under + s, ph, L);
  },
  /* ---------- coordenades ---------- */
  p2coord({ p, alt, name = 'A', L }) {
    const u = 30, ox = 40, oy = 184, n = 5, X = v => ox + v * u, Yy = v => oy - v * u, GOLD = '#E5A400';
    let s = '', under = ''; const ph = { start: .4 };
    for (let k = 1; k <= n; k++) under += line(X(k), oy, X(k), Yy(n) - 6, { s: LN, sw: 1.2 }) + line(ox, Yy(k), X(n) + 6, Yy(k), { s: LN, sw: 1.2 });
    s += line(ox, oy, X(n) + 12, oy, { sw: 2.5 }) + head(X(n) + 16, oy, 0, 7) + line(ox, oy, ox, Yy(n) - 12, { sw: 2.5 }) + head(ox, Yy(n) - 16, -90, 7);
    for (let k = 0; k <= n; k++) s += txt(X(k), oy + 16, k, 11, { c: GRY }) + (k ? txt(ox - 9, Yy(k) + 4, k, 11, { c: GRY, a: 'end' }) : '');
    s += pop(.2, pill(262, 30, `${name} (<tspan fill="${UC}">${p[0]}</tspan>, <tspan fill="${GOLD}">${p[1]}</tspan>)`, 17, { s: INK }));
    s += line(ox, oy, X(p[0]), oy, { s: UC, sw: 5, an: A(.9, 'a-draw') });
    for (let k = 1; k <= p[0]; k++) s += txt(X(k) - u / 2, oy - 8, k, 11, { c: UC, an: A(.9 + k * .12) });
    s += line(X(p[0]), oy, X(p[0]), Yy(p[1]), { s: GOLD, sw: 5, an: A(2.0, 'a-draw') });
    for (let k = 1; k <= p[1]; k++) s += txt(X(p[0]) + 9, Yy(k) + u / 2 + 4, k, 11, { a: 'start', c: GOLD, an: A(2.0 + k * .15) });
    s += pop(2.6, circ(X(p[0]), Yy(p[1]), 7, { f: INK }) + txt(X(p[0]) + 12, Yy(p[1]) - 8, name, 15, { a: 'start' }));
    ph.x = .9 + p[0] * .12 + .3; ph.y = 2.9;
    if (alt) {
      s += pop(3.5, path(`M${ox},${oy} H${X(alt[0])} V${Yy(alt[1])}`, { s: RED, sw: 2.5, da: '5 4' }), 'a-fade') + pop(3.9, circ(X(alt[0]), Yy(alt[1]), 7, { f: WH, s: RED, sw: 3 }) + txt(X(alt[0]) - 10, Yy(alt[1]) - 6, `(${alt[0]}, ${alt[1]})`, 13, { a: 'end', c: RED }));
      s += pop(4.2, pill(262, 70, `(${alt[0]}, ${alt[1]}) ≠ (${p[0]}, ${p[1]})`, 13, { s: RED }));
      ph.alt = 4.4;
    }
    return done(200, under + s, ph, L);
  },
  /* ---------- probabilitat ---------- */
  // una bossa amb boles: casos possibles, casos favorables i la fracció
  p2bag({ red, blue, dado, L }) {
    const n = red + blue, pos = [[56, 92], [94, 90], [75, 118], [48, 134], [104, 132], [76, 146]];
    let s = '', under = ''; const ph = { bag: .6 };
    s += pop(.2, path('M30,64 Q14,160 76,164 Q138,160 122,64 Z', { f: PAL, s: UC, sw: 3 }) + path('M42,64 Q76,46 110,64', { s: UC, sw: 3 }) + path('M62,50 L76,40 L90,50', { s: UC, sw: 3 }), 'a-fade');
    for (let i = 0; i < n; i++) { const [x, y] = pos[i], col = i < red ? RED : BLUE; s += pop(.3 + i * .1, circ(x, y, 13, { f: col }) + circ(x - 4, y - 4, 3.5, { f: WH, op: .7 })); s += txt(x, y + 5, i + 1, 12, { c: WH, an: A(1.2 + i * .12) }); if (i < red) s += pop(2.4 + i * .15, circ(x, y, 17, { f: 'none', s: Y, sw: 4 })); }
    const fx = 214, fl = 98;
    s += pop(1.3, line(fx - 24, fl, fx + 24, fl, { sw: 3 }), 'a-fade') + txt(fx, fl + 34, n, 30, { an: A(1.2 + n * .12) }) + txt(fx + 32, fl + 26, L_('possibles', 'posibles'), 11, { a: 'start', c: GRY, an: A(1.3 + n * .12) });
    ph.pos = 1.5 + n * .12;
    s += txt(fx, fl - 8, red, 30, { c: RED, an: A(2.4 + red * .15) }) + txt(fx + 32, fl - 14, L_('favorables', 'favorables'), 11, { a: 'start', c: GRY, an: A(2.5 + red * .15) });
    ph.fav = 2.7 + red * .15;
    under += pop(3.4, rect(fx - 66, fl - 42, 94, 88, { rx: 14, f: Y, op: .55 }), 'a-fade'); s += txt(fx - 36, fl + 8, 'P =', 17, { a: 'end', an: A(3.4) });
    ph.p = 3.7;
    let h = 170;
    if (dado) {
      const yd = 196, dx = i => 22 + i * 30;
      for (let v = 1; v <= 6; v++) { if (v % 2 === 0) under += pop(4.3 + v * .08, rect(dx(v - 1) - 15, yd - 15, 30, 30, { rx: 8, f: Y }), 'a-fade'); s += pop(4.0 + v * .05, die(dx(v - 1), yd, v, 24)); }
      s += pop(5.0, frac(3, 6, 218, yd - 2, 17) + txt(242, yd + 5, '=', 18) + frac(1, 2, 266, yd - 2, 17));
      ph.die = 5.3; h = 224;
    }
    return done(h, under + s, ph, L);
  },
  /* ---------- nombres enters ---------- */
  // on hi ha negatius: termòmetre sota zero, plantes sota terra i el nivell del mar
  p2neg({ L }) {
    let s = ''; const ph = {};
    // termòmetre
    const ty = v => 96 - v * 10;
    s += pop(.2, rect(47, 30, 16, 128, { rx: 8, f: WH, s: INK, sw: 2.5 }) + circ(55, 164, 13, { f: RED, s: INK, sw: 2.5 }), 'a-fade');
    for (let v = -5; v <= 5; v++) s += line(63, ty(v), v % 5 ? 68 : 72, ty(v), { s: v ? GRY : INK, sw: v ? 1.2 : 2.5 }) + (v % 5 === 0 ? txt(76, ty(v) + 4, v < 0 ? `−${-v}` : v, 11, { a: 'start', c: v ? GRY : INK }) : '');
    s += rect(51, ty(0), 8, 164 - ty(0), { rx: 0, f: RED }) + rect(51, ty(0), 8, ty(-4) - ty(0), { rx: 0, f: WH, an: A(.6, 'p2-gyt') });
    s += pop(1.2, pill(58, 200, '−4 °C', 14, { f: Y, s: INK }));
    ph.p0 = 1.4;
    // edifici: plantes sobre i sota terra
    const fx = 138, fw = 50, fy = f => 90 - f * 22;
    s += pop(1.6, path(`M104,${fy(0) + 22} H214`, { s: '#8B5E34', sw: 4 }) + [2, 1, 0, -1, -2].map(f => rect(fx, fy(f), fw, 22, { rx: 2, f: f < 0 ? '#E4D8C8' : PAL, s: INK, sw: 1.5 }) + txt(fx + fw + 8, fy(f) + 15, f < 0 ? `−${-f}` : f, 11, { a: 'start', c: f ? GRY : INK })).join(''), 'a-fade');
    s += move(2.3, 0, fy(0) - fy(-2), pop(1.7, rect(fx + 16, fy(-2) + 3, 18, 16, { rx: 3, f: UC })));
    s += pop(2.8, pill(fx + fw / 2, 200, L_('planta −2', 'planta −2'), 14, { f: Y, s: INK }));
    ph.p1 = 3.0;
    // nivell del mar
    const sx = 262, sl = 96;
    s += pop(3.3, rect(226, sl, 76, 66, { rx: 4, f: '#CFE8F7' }) + path(`M226,${sl} q9.5,-7 19,0 t19,0 t19,0 t19,0`, { s: BLUE, sw: 3 }) + path(`M236,${sl} l20,-44 l16,24 l10,-12 l18,32`, { f: '#B9D9A8', s: INK, sw: 1.5 }) + line(222, sl, 306, sl, { s: INK, sw: 1.5, da: '4 3' }), 'a-fade');
    s += pop(3.8, pill(sx, 200, '0 m', 14, { f: Y, s: INK })) + txt(sx + 42, sl + 4, '0', 11, { a: 'end', c: INK, an: A(3.8) });
    ph.p2 = 4.1;
    return done(216, s, ph, L);
  },
  // la recta dels enters: a l'esquerra, més petit
  p2zline({ min, max, a, b, ord, L }) {
    const X = v => 22 + (v - min) / (max - min) * 276; let s = ''; const ph = {};
    const axis = (y, t) => { let o = line(X(min) - 6, y, X(max) + 6, y, { sw: 2.5 }); for (let v = min; v <= max; v++) o += line(X(v), y - 4, X(v), y + 4, { s: v ? GRY : INK, sw: v ? 1.3 : 2.5 }) + txt(X(v), y + 17, v < 0 ? `−${-v}` : v, 11, { c: v ? GRY : INK }); return pop(t, o, 'a-fade'); };
    const y1 = 58, y2 = 158;
    s += axis(y1, .2) + pop(.5, circ(X(a), y1, 7, { f: RED })) + pop(.7, circ(X(b), y1, 7, { f: UC }));
    s += path(`M${r1(X(b) - 8)},${y1 - 14} H${r1(X(a) + 8)}`, { s: RED, sw: 2.5, an: A(1.0, 'a-draw') }) + pop(1.3, head(X(a) + 4, y1 - 14, 180, 7, RED)) + txt((X(a) + X(b)) / 2, y1 - 22, L_('més a l\'esquerra', 'más a la izquierda'), 11, { c: RED, an: A(1.2) });
    ph.l0 = 1.4;
    s += pop(1.9, pill(230, y1 - 32, `${a < 0 ? '−' + -a : a} &lt; ${b < 0 ? '−' + -b : b}`, 16, { f: Y, s: INK }));
    ph.cmp = 2.1;
    s += axis(y2, 2.5);
    ord.forEach((v, k) => { s += pop(2.9 + k * .35, circ(X(v), y2, 7, { f: UC })); if (k) s += txt((X(ord[k - 1]) + X(v)) / 2, y2 - 10, '&lt;', 16, { c: RED, an: A(2.9 + k * .35) }); });
    s += arrow(X(min), y2 - 30, X(max), y2 - 30, 2.8, GRY, 2) + txt(X(max), y2 - 38, L_('més gran →', 'mayor →'), 11, { a: 'end', c: GRY, an: A(3.0) });
    ph.ord = 2.9 + ord.length * .35 + .2;
    return done(186, s, ph, L);
  },
  // termòmetres: pujar passant pel zero i la distància entre dues temperatures
  p2thermo({ from, up, a2, b2, L }) {
    const lo = -5, hi = 7, y = v => 176 - (v - lo) * 12, ph = {};
    let s = '';
    const tube = (x, t) => { let o = rect(x - 7, y(hi) - 6, 14, y(lo) - y(hi) + 12, { rx: 7, f: WH, s: INK, sw: 2.5 }) + circ(x, y(lo) + 16, 12, { f: RED, s: INK, sw: 2.5 }); for (let v = lo; v <= hi; v++) o += line(x - 7, y(v), x - (v ? 12 : 16), y(v), { s: v ? GRY : INK, sw: v ? 1.2 : 2.5 }) + txt(x - 16, y(v) + 3.5, v < 0 ? `−${-v}` : v, 9, { a: 'end', c: v ? GRY : INK }); return pop(t, o, 'a-fade'); };
    const x1 = 86, x2 = 234, to = from + up;
    s += tube(x1, .2) + rect(x1 - 3.5, y(from), 7, y(lo) + 6 - y(from), { rx: 0, f: RED, an: A(.2, 'a-fade') });
    s += rect(x1 - 3.5, y(0), 7, y(from) - y(0), { rx: 0, f: RED, an: A(1.0, 'p2-gy') }) + rect(x1 - 3.5, y(to), 7, y(0) - y(to), { rx: 0, f: RED, an: A(2.3, 'p2-gy') });
    s += path(vbrace(y(0) + 1, y(from) - 1, x1 + 11, 1, 8), { s: UC, sw: 2.5, an: A(1.4, 'a-draw') }) + pop(1.6, pill(x1 + 38, (y(0) + y(from)) / 2, `+${-from}`, 13, { s: UC }));
    s += path(vbrace(y(to) + 1, y(0) - 1, x1 + 11, 1, 8), { s: UC, sw: 2.5, an: A(2.7, 'a-draw') }) + pop(2.9, pill(x1 + 38, (y(0) + y(to)) / 2, `+${to}`, 13, { s: UC }));
    s += win(.4, 2.8, pill(x1, 14, `−${-from} °C`, 14, { s: INK })) + pop(2.8, pill(x1, 14, `${to} °C`, 14, { f: Y, s: INK }));
    Object.assign(ph, { l0: .6, l1: 1.8, l2: 3.1 });
    s += tube(x2, 3.4) + pop(3.7, circ(x2, y(a2), 5, { f: BLUE }) + circ(x2, y(b2), 5, { f: RED }));
    s += path(vbrace(y(0) + 1, y(a2) - 1, x2 + 11, 1, 8), { s: BLUE, sw: 2.5, an: A(4.0, 'a-draw') }) + pop(4.2, pill(x2 + 34, (y(0) + y(a2)) / 2, -a2, 13, { s: BLUE }));
    s += path(vbrace(y(b2) + 1, y(0) - 1, x2 + 11, 1, 8), { s: RED, sw: 2.5, an: A(4.5, 'a-draw') }) + pop(4.7, pill(x2 + 34, (y(0) + y(b2)) / 2, b2, 13, { s: RED }));
    s += pop(5.1, pill(x2, 14, `${-a2} + ${b2} = ${b2 - a2}`, 14, { f: Y, s: INK }));
    ph.r = 5.4;
    return done(206, s, ph, L);
  },
  /* ---------- potències i arrels ---------- */
  // un quadrat de n × n: el quadrat d'un número
  p2sq({ n, u: unit = 'cm', L }) {
    const cs = 20, W = n * cs, x0 = 150 - W / 2 + 20, y0 = 26; let s = '', under = ''; const ph = { ask: .5 };
    s += pop(.2, pill(44, 40, `${n}<tspan dy="-9" font-size="12">2</tspan>`, 22, { f: Y, s: INK, pad: 24 }));
    under += pop(.3, rect(x0, y0, W, W, { rx: 2, f: WH }), 'a-fade');
    for (let r = 0; r < n; r++) { under += rect(x0 + 1, y0 + r * cs + 1, W - 2, cs - 2, { rx: 2, f: UC, op: .7, an: A(.9 + r * .3, 'a-grow') }); s += txt(x0 + W + 8, y0 + r * cs + cs / 2 + 4, nf((r + 1) * n), 11, { a: 'start', c: GRY, an: A(1.1 + r * .3) }); }
    let gr = ''; for (let k = 1; k < n; k++) gr += line(x0 + k * cs, y0, x0 + k * cs, y0 + W, { s: WH, sw: 1.5 }) + line(x0, y0 + k * cs, x0 + W, y0 + k * cs, { s: WH, sw: 1.5 });
    s += gr + rect(x0, y0, W, W, { rx: 2, f: 'none', s: INK, sw: 2.5, an: A(.3, 'a-fade') });
    s += txt(x0 + W / 2, y0 - 8, `${n} ${unit}`, 13, { an: A(.4) }) + txt(x0 - 8, y0 + W / 2 + 4, `${n} ${unit}`, 13, { a: 'end', an: A(.4) });
    ph.fill = .9 + n * .3 + .2;
    s += pop(ph.fill + .3, pill(x0 + W / 2, y0 + W + 24, `${n} × ${n} = ${n * n} ${unit}²`, 15, { f: Y, s: INK }));
    ph.area = ph.fill + .6;
    return done(y0 + W + 42, under + s, ph, L);
  },
  // cubets apilats en perspectiva: capes de files × columnes
  p2cubes({ blocks, tags = [], L }) {
    let s = ''; const ph = {};
    blocks.forEach((bk, bi) => {
      const { a, b, c, sz: q, t, dt = .8 } = bk, cx = .866 * q, cy = .5 * q;
      const ox = bk.cx - (a - b) * cx / 2, oy = bk.cy - ((a + b) * cy - c * q) / 2;
      const P = (x, y, z) => [ox + (x - y) * cx, oy + (x + y) * cy - z * q].map(r1).join(',');
      for (let k = 0; k < c; k++) {
        const cubes = []; for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) cubes.push([i, j]);
        cubes.sort((p1, p2) => (p1[0] + p1[1]) - (p2[0] + p2[1]));
        cubes.forEach(([i, j]) => {
          const top = `M${P(i, j, k + 1)} L${P(i + 1, j, k + 1)} L${P(i + 1, j + 1, k + 1)} L${P(i, j + 1, k + 1)} Z`, rgt = `M${P(i + 1, j, k)} L${P(i + 1, j + 1, k)} L${P(i + 1, j + 1, k + 1)} L${P(i + 1, j, k + 1)} Z`, lft = `M${P(i, j + 1, k)} L${P(i + 1, j + 1, k)} L${P(i + 1, j + 1, k + 1)} L${P(i, j + 1, k + 1)} Z`;
          s += pop(t + k * dt + (i + j) * .025, `<path d="${lft}" class="p2f2" stroke="${INK}" stroke-width=".8" stroke-opacity=".55"/><path d="${rgt}" class="p2f3" stroke="${INK}" stroke-width=".8" stroke-opacity=".55"/><path d="${top}" class="p2f1" stroke="${INK}" stroke-width=".8" stroke-opacity=".55"/>`);
        });
        ph[`b${bi}k${k}`] = t + k * dt + (a + b) * .025 + .3;
      }
      if (bk.dims) { const [la, lb, lc] = bk.dims, tt = bk.dimt ?? t; const [x1, y1] = P(a / 2, b, 0).split(',').map(Number), [x2, y2] = P(a, b / 2, 0).split(',').map(Number), [x3, y3] = P(a, 0, c / 2).split(',').map(Number); s += txt(x1 - 8, y1 + 16, la, 13, { a: 'end', an: A(tt) }) + txt(x2 + 8, y2 + 16, lb, 13, { a: 'start', an: A(tt) }) + txt(x3 + 8, y3 + 4, lc, 13, { a: 'start', an: A(tt) }); }
      ph['b' + bi] = t + (c - 1) * dt + (a + b) * .025 + .4;
    });
    tags.forEach(g => s += win(g.t, g.end, pill(g.x, g.y, g.s, g.fs || 14, { f: g.f || Y, s: INK })));
    const h = Math.max(...blocks.map(bk => bk.h), ...tags.map(g => g.y + 18));
    return done(h, s, ph, L);
  },
  // potències de 10: l'exponent diu quants zeros hi ha darrere de l'1
  p2pow10({ rows, L }) {
    let s = ''; const ph = {};
    rows.forEach((r, i) => {
      const y = 34 + i * 44, T = .3 + i * 1.45, lead = String(r.m || 1), digs = lead + '0'.repeat(r.e), fm = nf(+digs);
      s += txt(14, y, `${r.m ? r.m + ' × ' : ''}10<tspan dy="-10" font-size="13">${r.e}</tspan>`, 20, { a: 'start', an: A(T) }) + txt(r.m ? 114 : 84, y, '→', 18, { c: GRY, an: A(T + .15) });
      let x = r.m ? 132 : 104, z = 0;
      [...fm].forEach((ch, k) => { const w = ch === '.' ? 7 : 15; const tt = ch === '.' ? T + .5 + z * .12 : k === 0 ? T + .3 : T + .5 + z * .12; s += txt(x + w / 2, y, ch, 22, { c: ch === '.' ? GRY : k === 0 ? INK : RED, an: A(tt) }); if (ch === '0' && k > 0) { z++; s += txt(x + w / 2, y + 13, z, 9, { c: UC, an: A(tt + .05) }); } x += w; });
      ph['r' + i] = T + .5 + r.e * .12 + .3;
    });
    return done(34 + (rows.length - 1) * 44 + 22, s, ph, L);
  },
  // arrel quadrada: el costat del quadrat que té aquella àrea
  p2root({ n, m, L }) {
    const r = Math.round(Math.sqrt(n)), cs = 11, x0 = 34, y0 = 34; let s = '', under = ''; const ph = {};
    const sq = (x, y, k, an, col = UC) => { let o = rect(x, y, k * cs, k * cs, { rx: 1, f: col, op: .75 }); for (let j = 1; j < k; j++) o += line(x + j * cs, y, x + j * cs, y + k * cs, { s: WH, sw: 1 }) + line(x, y + j * cs, x + k * cs, y + j * cs, { s: WH, sw: 1 }); return pop(an, o, 'a-fade'); };
    s += sq(x0, y0, r, .3) + pop(.5, pill(x0 + r * cs / 2, y0 + r * cs / 2, n, 16, { s: INK }));
    s += win(.6, 1.6, txt(x0 + r * cs / 2, y0 - 8, '?', 15) + txt(x0 - 8, y0 + r * cs / 2 + 5, '?', 15, { a: 'end' })) + pop(1.6, txt(x0 + r * cs / 2, y0 - 8, r, 15, { c: UC }) + txt(x0 - 8, y0 + r * cs / 2 + 5, r, 15, { a: 'end', c: UC }));
    s += pop(1.9, pill(x0 + r * cs / 2, y0 + r * cs + 24, `√${n} = ${r}`, 15, { f: Y, s: INK }));
    ph.q = .8; ph.a = 2.1;
    const lo = Math.floor(Math.sqrt(m)), x1 = 178, y1 = y0;
    s += pop(2.6, rect(x1, y1, (lo + 1) * cs, (lo + 1) * cs, { rx: 1, f: 'none', s: INK, sw: 2, da: '4 3' }), 'a-fade') + sq(x1, y1, lo, 2.6);
    s += pop(2.8, pill(x1 + lo * cs / 2, y1 + lo * cs / 2, lo * lo, 14, { s: INK })) + txt(x1 + (lo + 1) * cs + 6, y1 + (lo + 1) * cs - 2, (lo + 1) ** 2, 13, { a: 'start', an: A(2.9) });
    s += txt(x1 + lo * cs / 2, y1 - 8, lo, 13, { c: UC, an: A(2.8) }) + txt(x1 + (lo + 1) * cs + 6, y1 + 8, lo + 1, 13, { a: 'start', c: GRY, an: A(2.9) });
    ph.b = 3.2;
    for (let k = 0; k < m - lo * lo; k++) s += pop(3.7 + k * .1, rect(x1 + lo * cs + 1, y1 + k * cs + 1, cs - 2, cs - 2, { rx: 1, f: Y, s: INK, sw: 1 }));
    s += pop(4.1, pill(x1 + (lo + 1) * cs / 2, y1 + (lo + 1) * cs + 24, `${lo} &lt; √${m} &lt; ${lo + 1}`, 15, { f: Y, s: INK }));
    ph.c = 4.4;
    return done(y0 + r * cs + 44, under + s, ph, L);
  },
  /* ---------- percentatges i proporcions ---------- */
  // percentatges d'una quantitat amb barres partides
  p2pct({ total, rows, L }) {
    const x0 = 64, W = 180; let s = '', under = ''; const ph = {};
    s += path(brace(x0 + 2, x0 + W - 2, 24, -1, 8), { s: INK, sw: 2 }) + txt(x0 + W / 2, 12, nf(total), 13, { an: A(.2) });
    rows.forEach(([p, parts], i) => {
      const y = 32 + i * 42, T = .4 + i * 1.1, pw = W / parts;
      under += rect(x0, y, W, 24, { rx: 5, f: WH, an: A(T, 'a-fade') }) + rect(x0 + 1, y + 1, pw - 2, 22, { rx: 3, f: UC, op: .85, an: A(T + .5, 'a-grow') });
      let ln = ''; for (let k = 1; k < parts; k++) ln += line(x0 + k * pw, y + 2, x0 + k * pw, y + 22, { s: INK, sw: parts > 10 ? 1 : 1.6 });
      s += pop(T + .2, ln, 'a-fade') + rect(x0, y, W, 24, { rx: 5, f: 'none', s: INK, sw: 2, an: A(T, 'a-fade') }) + txt(x0 - 10, y + 17, `${p}%`, 15, { a: 'end', an: A(T) });
      s += pop(T + .8, pill(x0 + W + 36, y + 12, nf(total * p / 100), 15, { f: Y, s: INK }));
      ph['r' + i] = T + 1.0;
    });
    return done(32 + rows.length * 42, under + s, ph, L);
  },
  // taula de proporcionalitat: reduir a la unitat i després multiplicar
  p2ratio({ heads, cols, ops, L }) {
    const cx = [116, 196, 276], ry = [72, 150], ph = {}; let s = '';
    heads.forEach((h, r) => s += h.ic ? img(h.ic, 44, ry[r], 34, A(.2)) : pop(.2, pill(44, ry[r], h.s, 14, { s: INK })));
    const cell = (c, r, v, t) => pop(t, rect(cx[c] - 36, ry[r] - 18, 72, 36, { rx: 10, f: c === 1 ? Y : WH, s: UC, sw: 2 }) + txt(cx[c], ry[r] + 6, v, 16));
    const T = [.3, 1.7, 3.3];
    cols.forEach((col, c) => col.forEach((v, r) => s += cell(c, r, v, T[c] + r * .1)));
    ops.forEach((op, k) => {
      const t = T[k + 1] - .5;
      s += hop(cx[k] + 8, cx[k + 1] - 8, ry[0] - 20, 12, t, RED) + pop(t + .2, pill((cx[k] + cx[k + 1]) / 2, ry[0] - 48, op, 12, { s: RED, c: RED, pad: 10 }));
      s += hop(cx[k] + 8, cx[k + 1] - 8, ry[1] + 20, 12, t + .1, RED, true) + pop(t + .3, pill((cx[k] + cx[k + 1]) / 2, ry[1] + 48, op, 12, { s: RED, c: RED, pad: 10 }));
    });
    Object.assign(ph, { c0: .7, c1: 2.0, c2: 3.6 });
    return done(212, s, ph, L);
  },
  // escala d'un plànol: cada centímetre del dibuix són 200 cm de veritat
  p2scale({ e: k, cm, L }) {
    const px = 30, x0 = 30, y0 = 26; let s = ''; const ph = {};
    const wx1 = x0 + cm * px;
    s += pop(.2, rect(x0 - 4, y0, cm * px + 30, 64, { rx: 3, f: PAL, s: INK, sw: 3 }) + rect(x0 + 40, y0 + 20, 26, 20, { rx: 2, f: WH, s: GRY, sw: 1.5 }) + txt(x0 + cm * px + 34, y0 + 56, L_('plànol', 'plano'), 11, { a: 'start', c: GRY }), 'a-fade');
    s += pop(.4, pill(250, y0 + 14, `1:${k}`, 18, { f: Y, s: INK }));
    s += line(x0, y0 + 64, wx1, y0 + 64, { s: UC, sw: 6, an: A(.8, 'a-draw') });
    ph.plan = .9;
    const ry = y0 + 82;
    for (let c = 0; c <= cm; c++) s += pop(1.3 + c * .12, line(x0 + c * px, ry - 6, x0 + c * px, ry + 6, { sw: 2 }) + txt(x0 + c * px, ry + 20, c, 11, { c: GRY }));
    s += pop(1.3, line(x0, ry, wx1, ry, { sw: 2 }), 'a-fade') + txt(wx1 + 8, ry + 5, `${cm} cm`, 14, { a: 'start', an: A(1.8) });
    ph.cm = 2.0;
    const by = 164, bx0 = 30, bw = 260, sw = bw / cm;
    for (let c = 0; c < cm; c++) { s += path(`M${x0 + c * px},${ry + 26} L${bx0 + c * sw},${by - 4} M${x0 + (c + 1) * px},${ry + 26} L${bx0 + (c + 1) * sw},${by - 4}`, { s: RED, sw: 1.5, da: '3 3', op: .8, an: A(2.4 + c * .35, 'a-fade') }); s += rect(bx0 + c * sw, by, sw, 26, { rx: 3, f: c % 2 ? '#E9E1F2' : WH, s: INK, sw: 2, an: A(2.6 + c * .35, 'a-grow') }) + txt(bx0 + c * sw + sw / 2, by + 18, `${k} cm`, 12, { an: A(2.8 + c * .35) }); }
    s += pop(3.9, pill(160, by + 44, `${cm} × ${k} = ${cm * k} cm = ${cm * k / 100} m`, 15, { f: Y, s: INK }));
    ph.real = 4.1;
    return done(by + 62, s, ph, L);
  },
  // un cinema: files × seients, els que s'omplen i els que queden lliures
  p2seats({ rows: R, cols: C, taken, L }) {
    const cw = 11.5, ch = 10.5, x0 = 36, y0 = 28, px = 264; let s = '', under = ''; const ph = {};
    s += pop(.2, rect(x0 + 10, 8, C * cw - 20, 8, { rx: 4, f: INK, op: .75 }), 'a-fade');
    for (let r = 0; r < R; r++) { let row = ''; for (let c = 0; c < C; c++) row += rect(x0 + c * cw + 1.5, y0 + r * ch + 1, cw - 3, ch - 2, { rx: 3, f: WH, s: '#CFC4DA', sw: 1.2 }); s += pop(.3 + r * .06, row, 'a-fade'); }
    s += path(brace(x0, x0 + C * cw, y0 + R * ch + 4, 1, 8), { s: UC, sw: 2, an: A(1.2, 'a-draw') }) + txt(x0 + C * cw / 2, y0 + R * ch + 26, C, 13, { c: UC, an: A(1.3) });
    s += path(vbrace(y0, y0 + R * ch, x0 - 6, -1, 8), { s: UC, sw: 2, an: A(1.2, 'a-draw') }) + txt(x0 - 18, y0 + R * ch / 2 + 5, R, 13, { a: 'end', c: UC, an: A(1.3) });
    ph.grid = 1.4;
    s += pop(1.8, pill(px, 44, `${R} × ${C} = ${R * C}`, 12, { s: INK, pad: 10 }));
    ph.tot = 2.0;
    for (let i = 0; i < taken; i++) { const r = Math.floor(i / C), c = i % C; s += rect(x0 + c * cw + 1.5, y0 + r * ch + 1, cw - 3, ch - 2, { rx: 3, f: UC, an: A(2.5 + r * .2 + c * .004, 'a-fade') }); }
    const tE = 2.5 + Math.floor((taken - 1) / C) * .2 + .5;
    for (let i = taken; i < R * C; i++) { const r = Math.floor(i / C), c = i % C; under += rect(x0 + c * cw, y0 + r * ch, cw, ch, { rx: 3, f: Y, an: A(tE + .2, 'a-fade') }); }
    s += pop(tE + .5, pill(px, 140, `${R * C} − ${taken} = ${R * C - taken}`, 12, { f: Y, s: INK, pad: 10 })) + pop(tE, pill(px, 92, `${taken}`, 13, { f: UC, s: UC, c: WH }));
    ph.free = tE + .8;
    return done(y0 + R * ch + 36, under + s, ph, L);
  }
  ,
  /* ---------- unitats noves (theory6.js) ---------- */
  // un polígon amb les seves marques: costats, ratlletes de costats iguals, angles, paral·lels, eixos i el nom
  p2poly({ pts, fill = true, fc, t0 = .2, sides = [], ticks = [], arcs = [], par = [], axes = [], chip, inner, L }) {
    let s = '', under = ''; const ph = {}, n = pts.length, cx = pts.reduce((a, p) => a + p[0], 0) / n, cy = pts.reduce((a, p) => a + p[1], 0) / n;
    const P = i => pts[(i + n) % n], mid = i => [(P(i)[0] + P(i + 1)[0]) / 2, (P(i)[1] + P(i + 1)[1]) / 2];
    const dir = i => { const dx = P(i + 1)[0] - P(i)[0], dy = P(i + 1)[1] - P(i)[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
    const out = i => { const [ux, uy] = dir(i), [mx, my] = mid(i); let nx = -uy, ny = ux; if ((mx - cx) * nx + (my - cy) * ny < 0) { nx = -nx; ny = -ny; } return [nx, ny]; };
    const d = `M${pts.map(p => p.map(r1).join(',')).join(' L')} Z`;
    under += fc ? `<path d="${d}" fill="${fc}" ${A(t0, 'a-fade')}/>` : fill ? `<path d="${d}" ${A(t0, 'a-fade', 'p2f1')}/>` : '';
    s += path(d, { s: INK, sw: 3, an: A(t0, 'a-draw') });
    if (inner) s += inner;
    sides.forEach(q => { const [mx, my] = mid(q.i), [nx, ny] = out(q.i); s += txt(mx + nx * 18, my + ny * 18 + 5, q.s, 14, { an: A(q.t) }); });
    ticks.forEach(q => { const [mx, my] = mid(q.i), [ux, uy] = dir(q.i), [nx, ny] = [-uy, ux], k = q.n || 1; for (let j = 0; j < k; j++) { const o = (j - (k - 1) / 2) * 5; s += line(mx + ux * o - nx * 7, my + uy * o - ny * 7, mx + ux * o + nx * 7, my + uy * o + ny * 7, { s: q.c || RED, sw: 3, an: A(q.t, 'a-draw') }); } });
    par.forEach(q => { const [mx, my] = [P(q.i)[0] * .7 + P(q.i + 1)[0] * .3, P(q.i)[1] * .7 + P(q.i + 1)[1] * .3], [ux, uy] = dir(q.i), [nx, ny] = [-uy, ux], k = q.n || 1; let o = ''; for (let j = 0; j < k; j++) { const bx = mx + ux * (j * 7 - (k - 1) * 3.5), by = my + uy * (j * 7 - (k - 1) * 3.5); o += path(`M${r1(bx - ux * 6 + nx * 6)},${r1(by - uy * 6 + ny * 6)} L${r1(bx)},${r1(by)} L${r1(bx - ux * 6 - nx * 6)},${r1(by - uy * 6 - ny * 6)}`, { s: q.c || BLUE, sw: 3 }); } s += pop(q.t, o); });
    arcs.forEach(q => {
      const v = P(q.v), a1 = Math.atan2(P(q.v - 1)[1] - v[1], P(q.v - 1)[0] - v[0]), a2 = Math.atan2(P(q.v + 1)[1] - v[1], P(q.v + 1)[0] - v[0]);
      let a0 = a1, sw = a2 - a1; while (sw <= -Math.PI) sw += 2 * Math.PI; while (sw > Math.PI) sw -= 2 * Math.PI; if (sw < 0) { a0 = a2; sw = -sw; }
      const r = q.r || 20, bis = a0 + sw / 2;
      if (q.right) { const u1 = [Math.cos(a0), Math.sin(a0)], u2 = [Math.cos(a0 + sw), Math.sin(a0 + sw)], k = 14; s += pop(q.t, path(`M${r1(v[0] + u1[0] * k)},${r1(v[1] + u1[1] * k)} L${r1(v[0] + u1[0] * k + u2[0] * k)},${r1(v[1] + u1[1] * k + u2[1] * k)} L${r1(v[0] + u2[0] * k)},${r1(v[1] + u2[1] * k)}`, { f: q.hi ? Y : 'none', s: INK, sw: 2.5 }), 'a-fade'); }
      else s += pop(q.t, `<path d="${sector(v[0], v[1], r, a0, a0 + sw)}" fill="${q.hi ? Y : UC}" opacity="${q.hi ? 1 : .55}"/>`, 'a-fade');
      if (q.s) s += txt(v[0] + Math.cos(bis) * (r + 15), v[1] + Math.sin(bis) * (r + 15) + 5, q.s, 13, { an: A(q.t + .1) });
      if (q.ring) s += pop(q.ring, circ(v[0], v[1], r + 3, { f: 'none', s: Y, sw: 4 }));
    });
    axes.forEach(q => s += pop(q.t, line(...q.a, { s: RED, sw: 2.5, da: '7 5' }), 'a-fade'));
    if (chip) { const cs = chip.s.includes('|') ? L_(...chip.s.split('|')) : chip.s; s += pop(chip.t, pill(chip.x ?? 160, chip.y, cs, 16, { f: Y, s: INK })); ph.chip = chip.t + .3; }
    ph.shape = t0 + .5;
    const h = Math.max(...pts.map(p => p[1])) + 20, H = chip ? Math.max(h, chip.y + 20) : h;
    return done(H, under + s, ph, L);
  },
  // dues rectes: perpendiculars (fan una creu amb angles rectes) o paral·leles (sempre a la mateixa distància)
  p2lines({ mode, L }) {
    let s = ''; const ph = {};
    if (mode === 'perp') {
      const C = [160, 100];
      s += line(40, C[1], 280, C[1], { s: INK, sw: 4, an: A(.2, 'a-draw') }) + line(C[0], 20, C[0], 180, { s: UC, sw: 4, an: A(.6, 'a-draw') });
      s += pop(1.3, path(`M${C[0] + 18},${C[1]} v-18 h-18`, { f: Y, s: INK, sw: 2.5 }), 'a-fade') + txt(C[0] + 24, C[1] - 22, '90°', 14, { a: 'start', an: A(1.5) });
      s += pop(2.0, path(`M${C[0] - 12},${C[1]} v-12 h12 M${C[0] - 12},${C[1]} v12 h12 M${C[0] + 12},${C[1]} v12 h-12`, { s: GRY, sw: 1.8 }), 'a-fade');
      s += pop(2.4, pill(160, 204, L_('perpendiculars', 'perpendiculares'), 16, { f: Y, s: INK }));
      Object.assign(ph, { cut: .9, sq: 1.7, name: 2.6 });
      return done(222, s, ph, L);
    }
    const road = y => pop(.2, line(24, y, 296, y, { s: '#D9D2E3', sw: 22 }) + line(30, y, 290, y, { s: WH, sw: 2.5, da: '10 8' }), 'a-fade');
    s += road(62) + road(150) + pop(.5, img('car', 70, 62, 26) + img('cyclist', 230, 150, 26));
    for (let k = 0; k < 3; k++) { const x = 80 + k * 80; s += arrow(x, 76, x, 136, 1.2 + k * .3, Y, 3.5) + arrow(x, 136, x, 76, 1.2 + k * .3, Y, 3.5); }
    s += pop(2.4, pill(160, 204, L_('paral·lels', 'paralelas'), 16, { f: Y, s: INK }));
    Object.assign(ph, { two: .7, dist: 2.1, name: 2.6 });
    return done(222, s, ph, L);
  },
  // una recta partida en marques: quant val cada marca i on cau la que busquem
  p2marks({ lo, hi, n, mk: k, fmt, d, majors = [], L }) {
    const X = i => 30 + i * 260 / n, y = 104, step = (hi - lo) / n, dec = decs(step), ph = { line: .5 };
    const lab = v => fmt === 'frac' ? String(Math.round(v)) : nf(v);
    let s = pop(.2, line(22, y, 298, y, { sw: 3 }) + line(X(0), y - 12, X(0), y + 12, { sw: 3 }) + line(X(n), y - 12, X(n), y + 12, { sw: 3 }) + txt(X(0), y + 30, lab(lo), 15) + txt(X(n), y + 30, lab(hi), 15), 'a-fade');
    majors.forEach(v => { const i = Math.round((v - lo) / step); s += pop(.3, line(X(i), y - 12, X(i), y + 12, { sw: 3 }) + txt(X(i), y + 30, lab(v), 15), 'a-fade'); });
    for (let i = 1; i < n; i++) s += line(X(i), y - 7, X(i), y + 7, { s: INK, sw: 2, an: A(.6 + i * .07, 'a-draw') });
    const tH0 = .7 + n * .07 + .2 + .4 + .4 + .3;
    if (fmt !== 'frac') for (let i = 0; i < n; i++) { const g = txt((X(i) + X(i + 1)) / 2, y - 12, i + 1, 10, { c: GRY, an: A(.7 + i * .07) }); s += i < k ? gone(tH0 + i * .22, g) : g; }
    ph.marks = .7 + n * .07 + .2;
    const tS = ph.marks + .4;
    if (fmt !== 'frac') { s += path(brace(X(0) + 1, X(1) - 1, y + 40, 1, 8), { s: UC, sw: 2.5, an: A(tS, 'a-draw') }) + pop(tS + .2, pill(X(0) + 26, y + 64, nf(step, dec), 14, { s: UC })); }
    ph.step = tS + .4;
    const tH = ph.step + .3;
    for (let i = 0; i < k; i++) { s += hop(X(i), X(i + 1), y - 4, 12, tH + i * .22, RED); s += txt((X(i) + X(i + 1)) / 2, y - 22, i + 1, 11, { c: RED, an: A(tH + i * .22 + .2) }); }
    ph.hops = tH + k * .22 + .3;
    const tv = lo + k * step, tT = ph.hops + .2;
    s += pop(tT, path(`M${r1(X(k) - 8)},${y - 44} L${r1(X(k) + 8)},${y - 44} L${r1(X(k))},${y - 32} Z`, { f: UC, s: UC, sw: 1.5 }) + circ(X(k), y, 6, { f: UC }));
    s += pop(tT + .15, fmt === 'frac' ? rect(X(k) - 20, y - 98, 40, 50, { rx: 10, f: Y, s: INK, sw: 2 }) + frac(k, d, X(k), y - 72, 18) : pill(X(k), y - 60, nf(tv, dec), 17, { f: Y, s: INK }));
    ph.tgt = tT + .4;
    return done(y + (fmt !== 'frac' ? 84 : 46), s, ph, L);
  },
  // calendari: salts de setmana en setmana i els dies que sobren
  p2cal({ first = 0, days = 31, a, b, L }) {
    const cw = 38, chh = 26, x0 = 27, y0 = 38, pos = dd => { const i = first + dd - 1; return [x0 + (i % 7) * cw + cw / 2, y0 + Math.floor(i / 7) * chh + chh / 2]; };
    const H = L_('dl dt dc dj dv ds dg', 'L M X J V S D').split(' '), NAMES = L_('dilluns dimarts dimecres dijous divendres dissabte diumenge', 'lunes martes miércoles jueves viernes sábado domingo').split(' ');
    let s = '', under = ''; const ph = {}, wa = (first + a - 1) % 7, wb = (first + b - 1) % 7;
    s += H.map((h, i) => txt(x0 + i * cw + cw / 2, y0 - 10, h, 12, { c: i > 4 ? RED : UC })).join('');
    for (let dd = 1; dd <= days; dd++) { const [x, yy] = pos(dd); s += txt(x, yy + 5, dd, 14, { c: GRY }); }
    under += pop(.4, rect(x0 + wa * cw + 3, y0 - 24, cw - 6, 20, { rx: 6, f: Y, op: .7 }), 'a-fade');
    const [xa, ya] = pos(a), [xb, yb] = pos(b);
    under += pop(.4, circ(xa, ya, 12, { f: UC })); s += txt(xa, ya + 5, a, 14, { c: WH, an: A(.4) });
    s += pop(.7, circ(xb, yb, 13, { f: 'none', s: RED, sw: 2.5, da: '4 3' }));
    ph.ask = .8;
    let cur = a, t = 1.2; const weeks = Math.floor((b - a) / 7), rest = (b - a) % 7;
    for (let w = 0; w < weeks; w++) { const [x1, y1] = pos(cur), [x2, y2] = pos(cur + 7); s += arrow(x1 + 11, y1 + 6, x2 + 11, y2 - 6, t, UC) + txt(x1 + 15, (y1 + y2) / 2 + 4, '+7', 11, { a: 'start', c: UC, an: A(t + .2) }); under += pop(t + .3, circ(x2, y2, 12, { f: '#E9E1F2' })); cur += 7; t += .55; }
    for (let r = 0; r < rest; r++) { const [x1, y1] = pos(cur), [x2] = pos(cur + 1); s += hop(x1 + 4, x2 - 4, y1 - 9, 7, t, RED); cur++; t += .3; }
    const tJ = t; ph.jump = t + .3; t += .7;
    s += win(tJ, t, pill(160, y0 + 5 * chh + 22, `${b - a} = ${Array(weeks).fill(7).join(' + ')} + ${rest}`, 14, { s: INK }));
    under += pop(t, circ(xb, yb, 13, { f: Y }), 'a-fade') + pop(t, rect(x0 + wb * cw + 3, y0 - 24, cw - 6, 20, { rx: 6, f: Y }), 'a-fade');
    s += pop(t + .2, pill(160, y0 + 5 * chh + 22, `${NAMES[wa]} + ${rest} = ${NAMES[wb]}`, 14, { f: Y, s: INK }));
    ph.day = t + .5;
    return done(y0 + 5 * chh + 40, under + s, ph, L);
  },
  // condicions I / O: es marquen les figures que compleixen cada condició i queden les que compleixen les dues
  p2logic({ items, L }) {
    let s = '', under = ''; const ph = {}, X = i => 52 + (i % 4) * 72, Yc = i => 84 + Math.floor(i / 4) * 64, COL = { r: RED, b: BLUE };
    s += pop(.2, pill(160, 20, `${L_('vermelles', 'rojas')} <tspan fill="${UC}">${L_('I', 'Y')}</tspan> ${L_('quadrades', 'cuadradas')}`, 16, { s: INK }));
    const shape = (c, sh, x, y) => sh === 'sq' ? rect(x - 16, y - 16, 32, 32, { rx: 4, f: COL[c] }) : sh === 'ci' ? circ(x, y, 17, { f: COL[c] }) : path(`M${x},${y - 18} L${x + 18},${y + 14} L${x - 18},${y + 14} Z`, { f: COL[c], s: COL[c], sw: 2 });
    items.forEach(([c, sh], i) => {
      s += pop(.4 + i * .06, shape(c, sh, X(i), Yc(i)));
      if (c === 'r') s += pop(1.0 + i * .03, circ(X(i), Yc(i), 25, { f: 'none', s: RED, sw: 2.5, da: '4 3' }));
      if (sh === 'sq') s += pop(1.6 + i * .03, rect(X(i) - 29, Yc(i) - 29, 58, 58, { rx: 10, f: 'none', s: UC, sw: 2.5 }));
      if (c === 'r' && sh === 'sq') { under += pop(2.6, rect(X(i) - 32, Yc(i) - 32, 64, 64, { rx: 12, f: Y }), 'a-fade'); s += check(X(i) + 24, Yc(i) - 24, 2.8); }
      else s += pop(2.6, rect(X(i) - 30, Yc(i) - 30, 60, 60, { rx: 10, f: WH, op: .7 }), 'a-fade');
    });
    Object.assign(ph, { ask: .8, both: 2.0, only: 3.0 });
    return done(Yc(items.length - 1) + 40, under + s, ph, L);
  },
  // l'escala de les unitats: cada graó multiplica per 10 (o per 100 a la superfície)
  p2ladder({ units, from, to, v, f, L }) {
    const n = units.length, bw = 42, sx = i => 8 + i * 44, sy = i => 34 + i * 17, ph = {};
    let s = '', under = '';
    units.forEach((u, i) => { under += rect(sx(i), sy(i), bw, 24, { rx: 6, f: i === from ? UC : BG, s: i === to ? INK : LN, sw: 2, an: A(.2 + i * .05, 'a-fade') }); s += txt(sx(i) + bw / 2, sy(i) + 17, u, 12, { c: i === from ? WH : INK, an: A(.2 + i * .05) }); });
    s += pop(.7, pill(sx(from) + bw + 30, sy(from) - 8, `${nf(v)} ${units[from]}`, 13, { f: WH, s: UC }));
    under += pop(.9, rect(sx(to) - 3, sy(to) - 3, bw + 6, 30, { rx: 8, f: Y }), 'a-fade');
    ph.ask = 1.0;
    let t = 1.4;
    for (let i = from; i < to; i++) { const x1 = sx(i) + bw / 2, y1 = sy(i) + 26, x2 = sx(i + 1) + bw / 2 - 6, y2 = sy(i + 1) + 30; s += path(`M${r1(x1)},${r1(y1)} Q${r1(x1)},${r1(y2 + 14)} ${r1(x2)},${r1(y2 + 6)}`, { s: RED, sw: 2.5, an: A(t, 'a-draw') }) + txt(x1 - 2, y2 + 22, `× ${f}`, 11, { a: 'end', c: RED, an: A(t + .15) }); t += .45; }
    const tot = f ** (to - from);
    s += pop(t + .1, pill(250, 190, `× ${nf(tot)}`, 15, { s: RED, c: RED }));
    ph.hops = t + .3;
    s += pop(t + .7, pill(120, 190, `${nf(v)} ${units[from]} = ${nf(v * tot)} ${units[to]}`, 15, { f: Y, s: INK }));
    ph.res = t + 1.0;
    return done(208, under + s, ph, L);
  },
  // dos programes alhora: cada un fa les seves ordres i el temps total és el del que triga més
  p2gantt({ rows, L }) {
    const u = 34, x0 = 76, max = Math.max(...rows.map(r => r.n)), yb = 40 + rows.length * 58, ph = {};
    let s = '';
    rows.forEach((r, i) => { const y = 34 + i * 58; s += img(r.ic, 38, y + 16, 38, A(.2)); for (let k = 0; k < r.n; k++) s += rect(x0 + k * u + 1.5, y, u - 3, 32, { rx: 6, f: i ? Y : UC, an: A(.8 + k * .45, 'a-grow') }) + txt(x0 + k * u + u / 2, y + 21, k + 1, 12, { c: i ? INK : WH, an: A(.95 + k * .45) }); });
    s += pop(.3, line(x0, yb, x0 + max * u + 8, yb, { sw: 2 }) + [...Array(max + 1)].map((_, k) => line(x0 + k * u, yb - 4, x0 + k * u, yb + 4, { sw: 2 }) + txt(x0 + k * u, yb + 18, k, 11, { c: GRY })).join('') + txt(x0 + max * u + 14, yb + 18, 's', 11, { a: 'start', c: GRY }), 'a-fade');
    ph.go = .7; ph.par = .8 + (Math.min(...rows.map(r => r.n)) - 1) * .45 + .5;
    const te = .8 + max * .45 + .2;
    s += pop(te, line(x0 + max * u, 24, x0 + max * u, yb, { s: RED, sw: 2.5, da: '5 4' }), 'a-fade') + pop(te + .2, pill(x0 + max * u, yb + 40, `${max} s`, 16, { f: Y, s: INK }));
    ph.end = te + .5;
    return done(yb + 58, s, ph, L);
  },
  // dos robots que es mouen alhora per una quadrícula: pas a pas, fins que es troben
  p2robots({ L }) {
    const cs = 44, x0 = 50, y0 = 24, C = (c, r) => [x0 + c * cs + cs / 2, y0 + r * cs + cs / 2], ph = {};
    let s = '', under = '';
    for (let c = 0; c < 5; c++) for (let r = 0; r < 3; r++) under += rect(x0 + c * cs + 1, y0 + r * cs + 1, cs - 2, cs - 2, { rx: 6, f: (c + r) % 2 ? BG : WH, s: LN, sw: 1.5 });
    const bot = (c, r, col) => { const [x, y] = C(c, r); return circ(x, y, 19, { f: col }) + img('robot', x, y, 30); };
    const t1 = 1.2, t2 = 2.6;
    s += move(t1, -cs, 0, move(t2, -cs, 0, bot(2, 1, UC))) + move(t1, cs, 0, move(t2, cs, 0, bot(2, 1, Y)));
    const ord = (x, y, lab, arr, col) => pill(x, y, lab, 13, { f: col, s: INK }) + arr.map((a, k) => txt(x + 34 + k * 26, y + 6, a, 18)).join('');
    s += pop(.3, ord(64, 176, 'A', ['→', '→'], UC) + ord(196, 176, 'B', ['←', '←'], Y));
    s += win(t1 - .1, t2 - .1, rect(84, 160, 24, 32, { rx: 6, f: 'none', s: RED, sw: 2.5 }) + rect(216, 160, 24, 32, { rx: 6, f: 'none', s: RED, sw: 2.5 }), 'a-fade') + pop(t2 - .1, rect(110, 160, 24, 32, { rx: 6, f: 'none', s: RED, sw: 2.5 }) + rect(242, 160, 24, 32, { rx: 6, f: 'none', s: RED, sw: 2.5 }), 'a-fade');
    const [mx, my] = C(2, 1);
    s += pop(t2 + .8, circ(mx, my, 27, { f: 'none', s: RED, sw: 4 }) + img('star', mx + 20, my - 20, 22));
    Object.assign(ph, { s1: t1 + .6, s2: t2 + .6, meet: t2 + 1.1 });
    return done(198, under + s, ph, L);
  },
  // una quadrícula de 100: dècimes, centèsimes i percentatge
  p2grid100({ tenths, L }) {
    const cs = 14, x0 = 26, y0 = 22, W = cs * 10, ph = {};
    let s = '', under = '';
    under += rect(x0, y0, W, W, { rx: 2, f: WH });
    for (let c = 0; c < tenths; c++) under += rect(x0 + c * cs, y0, cs, W, { rx: 0, f: UC, op: .8, an: A(.4 + c * .2, 'a-fade') });
    let gr = ''; for (let k = 1; k < 10; k++) gr += line(x0 + k * cs, y0, x0 + k * cs, y0 + W, { s: '#CFC4DA', sw: 1 }) + line(x0, y0 + k * cs, x0 + W, y0 + k * cs, { s: '#CFC4DA', sw: 1 });
    s += gr + rect(x0, y0, W, W, { rx: 2, f: 'none', s: INK, sw: 2 });
    for (let c = 0; c < tenths; c++) s += txt(x0 + c * cs + cs / 2, y0 + W + 16, c + 1, 10, { c: UC, an: A(.4 + c * .2) });
    const xr = 240, t0 = .4 + tenths * .2;
    s += pop(t0, txt(xr, 58, nf(tenths / 10), 30));
    ph.dec = t0 + .3;
    s += pop(t0 + .8, frac(tenths * 10, 100, xr, 104, 22));
    ph.hund = t0 + 1.1;
    s += pop(t0 + 1.7, pill(xr, 164, `${nf(tenths / 10)} = ${tenths * 10} %`, 17, { f: Y, s: INK }));
    ph.pct = t0 + 2.0;
    return done(y0 + W + 26, under + s, ph, L);
  },
  // barres per ordenar nombres de tota mena: les passem a decimal i les posem en ordre
  p2sortbars({ rows, L }) {
    const x0 = 86, W = 150, bh = 24, gy = i => 26 + i * 50, order = rows.map((r, i) => i).sort((a, b) => rows[a].v - rows[b].v), ph = {};
    let s = '';
    rows.forEach((r, i) => {
      const j = order.indexOf(i), dy = gy(i) - gy(j);
      let g = rect(x0, gy(j), W, bh, { rx: 5, f: WH }) + rect(x0 + 1, gy(j) + 1, W * r.v - 2, bh - 2, { rx: 4, f: [UC, Y, '#8FD19E'][i % 3] });
      for (let k = 1; k < r.parts; k++) g += line(x0 + k * W / r.parts, gy(j) + 1, x0 + k * W / r.parts, gy(j) + bh - 1, { s: INK, sw: 1.2 });
      g += rect(x0, gy(j), W, bh, { rx: 5, f: 'none', s: INK, sw: 2 });
      g += (r.fr ? frac(r.fr[0], r.fr[1], 44, gy(j) + bh / 2, 15) : txt(44, gy(j) + bh / 2 + 6, r.s, 16));
      g += pop(1.4 + i * .2, pill(x0 + W + 40, gy(j) + bh / 2, nf(r.v, 2), 15, { f: Y, s: INK }));
      s += move(3.0, 0, dy, pop(.3 + i * .25, g, 'a-fade'));
    });
    ph.show = 1.0; ph.dec = 2.2;
    s += pop(4.0, pill(160, gy(rows.length - 1) + bh + 30, order.map(i => rows[i].lab).join(' &lt; '), 16, { f: Y, s: INK }));
    ph.ord = 4.3;
    return done(gy(rows.length - 1) + bh + 48, s, ph, L);
  },
  // la mediana: ordenem les dades i ens quedem amb la del mig
  p2median({ data, L }) {
    const n = data.length, sorted = [...data].sort((a, b) => a - b), x = i => 160 + (i - (n - 1) / 2) * 54, y1 = 40, y2 = 118, ph = { data: .6 };
    let s = '', under = '';
    const chip = (v, xx, yy, col = WH) => rect(xx - 20, yy - 18, 40, 36, { rx: 10, f: col, s: UC, sw: 2 }) + txt(xx, yy + 7, v, 18);
    data.forEach((v, i) => s += pop(.2 + i * .08, chip(v, x(i), y1)));
    const used = new Set();
    sorted.forEach((v, j) => { const i = data.findIndex((d, k) => d === v && !used.has(k)); used.add(i); s += move(1.0 + j * .15, x(i) - x(j), y1 - y2, chip(v, x(j), y2)); });
    ph.sorted = 1.0 + n * .15 + .5;
    let t = ph.sorted + .3;
    for (let k = 0; k < Math.floor(n / 2); k++) { [k, n - 1 - k].forEach(j => s += pop(t, line(x(j) - 16, y2 + 14, x(j) + 16, y2 - 14, { s: GRY, sw: 3 }) + rect(x(j) - 20, y2 - 18, 40, 36, { rx: 10, f: WH, op: .55 }), 'a-fade')); t += .45; }
    const m = Math.floor(n / 2);
    under += pop(t, rect(x(m) - 25, y2 - 23, 50, 46, { rx: 13, f: Y }), 'a-fade');
    s += arrow(x(m), y2 + 56, x(m), y2 + 26, t + .1, UC) + txt(x(m), y2 + 72, L_('mediana', 'mediana'), 13, { c: UC, an: A(t + .2) });
    ph.med = t + .4;
    return done(y2 + 82, under + s, ph, L);
  },
  // bucles dins de bucles: cada volta del de fora fa totes les voltes del de dins
  p2nested({ outer, inner, L }) {
    let s = ''; const ph = {};
    s += pop(.2, rect(10, 20, 150, 134, { rx: 14, cls: 'p2f1', s: UC, sw: 2.5 }) + img('repeat', 30, 40, 26) + txt(52, 47, `× ${outer}`, 17, { a: 'start' }) + rect(24, 62, 128, 80, { rx: 12, f: WH, s: UC, sw: 2.5 }) + img('repeat', 42, 82, 22) + txt(60, 88, `× ${inner}`, 15, { a: 'start' }) + rect(34, 100, 108, 30, { rx: 8, f: PAL }) + txt(88, 120, 'n = n + 1', 14));
    const cx = c => 200 + c * 30, cy = r => 44 + r * 36; let k = 0;
    for (let r = 0; r < outer; r++) { s += txt(cx(0) - 20, cy(r) + 5, r + 1, 12, { a: 'end', c: UC, an: A(.9 + r * inner * .17) }); for (let c = 0; c < inner; c++) { const t = .9 + k * .17; s += pop(t, circ(cx(c), cy(r), 12, { f: UC }) + txt(cx(c), cy(r) + 4.5, k + 1, 11, { c: WH })); k++; } }
    const te = .9 + k * .17 + .2;
    s += pop(te, pill(245, cy(outer - 1) + 40, `${outer} × ${inner} = ${outer * inner}`, 15, { f: Y, s: INK }));
    ph.code = .6; ph.times = te + .3;
    s += pop(te + .8, pill(85, 180, `n: 0 → ${outer * inner}`, 15, { f: Y, s: INK }));
    ph.n = te + 1.1;
    return done(198, s, ph, L);
  }
};
// geometria de cossos en perspectiva cavallera: vèrtexs, arestes (amagades amb ratlles) i cares
function solidGeom(sh, cx, cy, s, t = .9) {
  const dx = s * .45, dy = -s * .32, V = [], E = [], F = []; let svg = '';
  const P = pts => `M${pts.map(p => p.map(r1).join(',')).join(' L')} Z`;
  const face = (ids, cls) => `<path d="${P(ids.map(j => V[j]))}" class="${cls}"/>`;
  const edges = () => E.map(([a, b, h]) => line(...V[a], ...V[b], h ? { s: GRY, sw: 1.8, da: '4 4' } : { s: INK, sw: 2.5 })).join('');
  if (sh === 'cube') {
    const x = cx - (s + dx) / 2, y = cy + (s - dy) / 2;
    V.push([x, y], [x + s, y], [x + s, y - s], [x, y - s]); for (let k = 0; k < 4; k++) V.push([V[k][0] + dx, V[k][1] + dy]);
    E.push([0, 1], [1, 2], [2, 3], [3, 0], [4, 5, 1], [5, 6], [6, 7], [7, 4, 1], [0, 4, 1], [1, 5], [2, 6], [3, 7]);
    F.push([0, 1, 2, 3], [3, 2, 6, 7], [1, 5, 6, 2], [4, 5, 6, 7], [0, 1, 5, 4], [0, 3, 7, 4]);
    svg = face([0, 1, 2, 3], 'p2f2') + face([3, 2, 6, 7], 'p2f1') + face([1, 5, 6, 2], 'p2f3') + edges();
  } else if (sh === 'pyr') {
    const hgt = s * 1.0, x = cx - (s + dx) / 2, y = cy + (hgt - dy) / 2;
    V.push([x, y], [x + s, y], [x + s + dx, y + dy], [x + dx, y + dy]); V.push([x + s / 2 + dx / 2, y + dy / 2 - hgt]);
    E.push([0, 1], [1, 2], [2, 3, 1], [3, 0, 1], [0, 4], [1, 4], [2, 4], [3, 4, 1]);
    F.push([0, 1, 2, 3], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]);
    svg = face([0, 1, 4], 'p2f2') + face([1, 2, 4], 'p2f3') + edges();
  } else if (sh === 'prism') {
    const k = 1.5, x = cx - (s + dx * k) / 2, y = cy + (s * .82 - dy * k) / 2;
    V.push([x, y], [x + s, y], [x + s / 2, y - s * .82]); for (let j = 0; j < 3; j++) V.push([V[j][0] + dx * k, V[j][1] + dy * k]);
    E.push([0, 1], [1, 2], [2, 0], [3, 4, 1], [4, 5], [5, 3, 1], [0, 3, 1], [1, 4], [2, 5]);
    F.push([0, 1, 2], [3, 4, 5], [0, 1, 4, 3], [1, 4, 5, 2], [0, 2, 5, 3]);
    svg = face([0, 1, 2], 'p2f2') + face([1, 4, 5, 2], 'p2f3') + edges();
  } else if (sh === 'sphere') {
    const r = s * .6;
    svg = `<g class="an p2-roll" style="--t:${(t + .3).toFixed(2)}s;transform-origin:${r1(cx)}px ${r1(cy)}px">` + circ(cx, cy, r, { cls: 'p2f2', s: INK, sw: 2.5 }) + path(`M${r1(cx - r)},${r1(cy)} A${r1(r)},${r1(r * .3)} 0 0 0 ${r1(cx + r)},${r1(cy)}`, { s: INK, sw: 2 }) + path(`M${r1(cx - r)},${r1(cy)} A${r1(r)},${r1(r * .3)} 0 0 1 ${r1(cx + r)},${r1(cy)}`, { s: GRY, sw: 1.8, da: '4 4' }) + circ(cx - r * .35, cy - r * .4, r * .16, { f: WH, op: .8 }) + '</g>';
  } else if (sh === 'cyl') {
    const rx = s * .46, ry = s * .16, hh = s * 1.0, yt = cy - hh / 2, yb = cy + hh / 2;
    svg = `<path d="M${r1(cx - rx)},${r1(yt)} L${r1(cx - rx)},${r1(yb)} A${r1(rx)},${r1(ry)} 0 0 0 ${r1(cx + rx)},${r1(yb)} L${r1(cx + rx)},${r1(yt)} Z" class="p2f2"/>` + `<ellipse cx="${r1(cx)}" cy="${r1(yt)}" rx="${r1(rx)}" ry="${r1(ry)}" class="p2f1" stroke="${INK}" stroke-width="2.5"/>` + line(cx - rx, yt, cx - rx, yb) + line(cx + rx, yt, cx + rx, yb) + path(`M${r1(cx - rx)},${r1(yb)} A${r1(rx)},${r1(ry)} 0 0 0 ${r1(cx + rx)},${r1(yb)}`) + path(`M${r1(cx - rx)},${r1(yb)} A${r1(rx)},${r1(ry)} 0 0 1 ${r1(cx + rx)},${r1(yb)}`, { s: GRY, sw: 1.8, da: '4 4' });
  }
  return { V, E, F, svg };
}
const L_ = (ca, es) => typeof L === 'function' ? L(ca, es) : ca;
Object.assign(SCN, S);

/* ================= configuració de cada concepte ================= */
// vèrtexs d'un polígon regular, punt mig d'un costat i un eix allargat pels dos cantons
const REG = (n, cx, cy, R, a0) => [...Array(n)].map((_, k) => [cx + R * Math.cos(a0 + 2 * Math.PI * k / n), cy + R * Math.sin(a0 + 2 * Math.PI * k / n)]);
const MID = (P, k) => [(P[k % P.length][0] + P[(k + 1) % P.length][0]) / 2, (P[k % P.length][1] + P[(k + 1) % P.length][1]) / 2];
const AX = (p, q, e = 12) => { const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy); return [p[0] - dx / l * e, p[1] - dy / l * e, q[0] + dx / l * e, q[1] + dy / l * e]; };
Object.assign(TANIM, {
  'c4-1': [
    { k: 'p2place', n: 3407, cols: ['UM', 'C', 'D', 'U'], L: ['cols', 'vals', 'end'] },
    { k: 'p2place', n: 45308, cols: ['DM', 'UM', 'C', 'D', 'U'], L: ['num', 'cols', 'vals'] },
    { k: 'p2cmp', pairs: [{ a: '52.140', b: '52.410', sign: '<', heads: true }], L: ['p0', 'p0c1', 'p0d', 'p0e'] },
    { k: 'p2round', num: '7.620', lines: [{ lo: 7000, hi: 8000, v: 7620, step: 100, res: 8000, dig: 2 }], L: ['num', 'pt0', 'dig0', 'res0'] }
  ],
  'c4-2': [
    { k: 'p2hops', rows: [{ pts: [46, 66, 73], jl: ['+ 20', '+ 7'], min: 40, max: 80 }, { pts: [83, 63, 55], jl: ['− 20', '− 8'], min: 50, max: 90 }], L: ['r0h0', 'r0h1', 'r1h0', 'r1h1'] },
    { k: 'p2col', heads: true, ops: [{ a: '1358', b: '2475', op: '+' }], L: ['o0op', 'o0c0', 'o0c1', 'o0c3', 'o0res'] },
    { k: 'p2col', heads: true, ops: [{ a: '4742', b: '1358', op: '−' }], L: ['o0op', 'o0c0', 'o0c1', 'o0c3', 'o0res'] },
    { k: 'p2undo', ops: [['−', 150]], end: 320, L: ['fwd', 'b0a', 'b0', 'chk'] }
  ],
  'c4-4': [
    { k: 'p2deal', total: 12, g: 3, L: ['pile', 'r1', 'end'] },
    { k: 'p2rows', per: 8, total: 56, L: ['start', 'r2', 'full', 'end'] },
    { k: 'p2rows', per: 5, total: 29, L: ['start', 'ghost', 'rem', 'end'] },
    { k: 'p2rect', mode: 'div', h: 4, areas: [80, 16], L: ['box', 'split', 'p1', 'tot'] }
  ],
  'c4-5': [
    { k: 'p2hops', rows: [{ pts: [5, 9, 13, 17, 21], jl: ['+ 4', '+ 4', '+ 4', '+ 4'], min: 3, max: 23, show: 4, h: 96 }], L: ['r0', 'r0h1', 'r0h2', 'r0h3'] },
    { k: 'p2parity', rows: [{ num: '358', n: 8 }, { num: '7.415', n: 5 }, { sum: [3, 5] }], L: ['r0', 'r1', 'r2'] },
    { k: 'p2balance', boxes: 2, add: 4, total: 10, L: ['s0', 's1', 's2'] },
    { k: 'p2undo', ops: [['×', 3], ['+', 2]], end: 17, L: ['fwd', 'b0', 'b1'] }
  ],
  'c4-6': [
    { k: 'p2pizza', L: ['cut', 'one', 'two'] },
    { k: 'p2fbars', W: 260, x0: 30, bars: [{ y: 60, h: 34, lab: false, st: [[5, 8]], t: .3, br: [{ a: 0, b: 5 / 8, up: true, n: 5, d: 8, t: 1.4 }, { a: 5 / 8, b: 1, n: 3, d: 8, t: 2.4, c: RED }] }], L: [1.6, 2.8, 3.4] },
    { k: 'p2fracOf', rows: [{ n: 3, d: 4, total: 20, icon: 'cards' }], L: ['r0', 'r0one', 'r0n', 'r0tot'] },
    { k: 'p2fracOf', rows: [{ n: 1, d: 2, total: 12, icon: 'candy' }, { n: 1, d: 3, total: 12, icon: 'candy' }], cmp: '6 &gt; 4 → 1/2 &gt; 1/3', L: ['r0', 'r0tot', 'r1tot', 'cmp'] }
  ],
  'c4-7': [
    { k: 'p2clock', h: 5, mins: [15, 30, 45], L: ['q1', 'q2', 'q3'] },
    { k: 'p2hops', rows: [{ pts: [315, 360, 390], lab: ['5:15', '6:00', '6:30'], jl: ['45 min', '30 min'], min: 300, max: 400, brace: '75 min = 1 h 15 min', h: 90 }], L: ['r0', 'r0h0', 'r0h1', 'r0e'] },
    { k: 'p2tape', h: 120, rows: [{ y: 40, segs: [{ v: 100, lab: '1 m', t: .3 }, { v: 100, lab: '1 m', t: .5 }, { v: 100, lab: '1 m', t: .7 }, { v: 45, c: 'y', lab: '45 cm', t: .9 }], br: [{ a: 0, b: 3, dn: true, lab: '300 cm', t: 1.8 }], tot: { lab: '300 + 45 = 345 cm', t: 3.0 } }], L: [1.2, 2.2, 3.3] },
    { k: 'p2perim', w: 8, h: 5, L: ['shape', 's3', 'per'] }
  ],
  'c4-8': [
    { k: 'p2grid', c: 'C', r: 2, L: ['ask', 'col', 'row', 'hit'] },
    { k: 'p2sym', fold: .3, items: [{ sh: 'square', x: 160, y: 96, a: 120, t: .2, gt: [2.2, 3.4], cy: 196 }], L: [.4, 'i0g0', 'i0g1', 'i0'] },
    { k: 'p2solid', items: [{ sh: 'pyr', x: 112, y: 104, s: 122, t: .2 }], count: { tf: .9, tv: 3.4, te: 4.8 }, L: ['show', 'F', 'V', 'E'] },
    { k: 'p2loop', name: 'n', v: [3, 6, 12, 24], op: '× 2', L: ['init', 't1', 't2', 't3', 'end'] }
  ],
  'c4-9': [
    { k: 'p2bars', bars: [{ v: 8, ic: 'football' }, { v: 5, ic: 'basketball' }], max: 9, ex: [{ k: 'diff', i: 0, j: 1, t: 1.9 }], L: ['bars', 1.6, 2.3] },
    { k: 'p2dots', data: [2, 5, 3, 5, 1], xs: [1, 2, 3, 4, 5], mode: 3.0, range: 4.2, L: ['data', 'mode', 'range'] },
    { k: 'p2dice', fav: [2, 4, 6], simp: [1, 2], L: ['dice', 'fav', 'pos', 'simp'] },
    { k: 'p2mean', vals: [4, 7, 6, 3], L: ['cols', 'sum', 'lev', 'end'] }
  ],
  'c4-10': [
    { k: 'p2tape', h: 118, rows: [{ y: 44, segs: [{ v: 870, c: 'l', sw: [['?', 1.4], ['870', 3.4]], t: .3 }, { v: 380, c: 'uc', lab: '380', t: .5, x: 2.4 }], tot: { lab: '1.250', t: .3 }, img: [{ n: 'books', x: 290, y: 22, t: .2 }] }], L: [.8, 1.6, 2.6, 3.6] },
    { k: 'p2rect', a: [20, 4], b: [6], L: ['box', 'p1', 'tot'] },
    { k: 'p2tables', n: 30, per: 4, L: ['start', 'rem', 'ext', 'end'] },
    { k: 'p2tape', h: 130, rows: [{ y: 44, segs: [{ v: 12, c: 'uc', lab: '12 €', t: .3 }, { v: 12, c: 'uc', lab: '12 €', t: .5 }, { v: 12, c: 'uc', lab: '12 €', t: .7 }, { v: 14, c: 'y', sw: [['?', 2.4], ['14 €', 3.4]], t: .9 }], tot: { lab: '50 €', t: .9 }, br: [{ a: 0, b: 3, dn: true, lab: '3 × 12 = 36 €', t: 1.5 }, { a: 3, b: 4, dn: true, lab: '14 €', t: 2.6, f: WH, c: RED }] }], L: [1.0, 1.9, 3.0, 3.7] }
  ],
  'c5-1': [
    { k: 'p2place', n: 452318, cols: ['CM', 'DM', 'UM', 'C', 'D', 'U'], hi: 1, L: ['num', 'cols', 'vals', 'hi'] },
    { k: 'p2groups3', n: '3205040', L: ['split', 'g0', 'g1', 'g2', 'all'] },
    { k: 'p2cmp', pairs: [{ a: '1.250.000', b: '987.654', mode: 'count', sign: '>' }, { a: '345.912', b: '345.219', sign: '>', heads: true, fin: false }], L: ['p0n', 'p0e', 'p1c2', 'p1e'] },
    { k: 'p2round', num: '348.617', lines: [{ lo: 348000, hi: 349000, v: 348617, step: 100, res: 349000, dig: 4 }, { lo: 340000, hi: 350000, v: 348617, step: 1000, res: 350000, dig: 2 }], L: ['num', 'dig0', 'res0', 'res1'] }
  ],
  'c5-2': [
    { k: 'p2dec100', v: '3,47', L: ['grid', 'read', 'money'] },
    { k: 'p2cmp', pairs: [{ a: '2,5', b: '2,38', sign: '>', heads: true }], L: ['p0c0', 'p0pad', 'p0d', 'p0e'] },
    { k: 'p2col', heads: true, ops: [{ a: '12,6', b: '3,45', op: '+' }, { a: '5,2', b: '1,75', op: '−' }], L: ['o0pad', 'o0res', 'o1pad', 'o1res'] },
    { k: 'p2comma', rows: [['3,25', 1, '× 10'], ['3,25', 2, '× 100'], ['3,25', 3, '× 1.000'], ['48,6', -2, '÷ 100']], L: ['r0', 'r1', 'r2', 'r3'] }
  ],
  'c5-3': [
    { k: 'p2rect', a: [234], b: [20, 6], order: [1, 0], L: ['split', 'p0', 'p1', 'tot'] },
    { k: 'p2longdiv', dd: 875, dv: 4, L: ['s0', 's1', 's2', 'end'] },
    { k: 'p2longdiv', dd: 396, dv: 12, prova: true, L: ['s0', 's1', 'end', 'prova'] },
    { k: 'p2expr', rows: [{ st: ['20 − 3 × 4 + 6', '20 − 12 + 6', '14'], rg: [[2, 4], [0, 4]] }, { st: ['( 20 − 3 ) × 4', '17 × 4', '68'], rg: [[0, 4], [0, 2]] }], L: ['r0s0', 'r0s2', 'r1s0', 'r1s2'] }
  ],
  'c5-4': [
    { k: 'p2hops', rows: [{ pts: [0, 6, 12, 18, 24, 30, 36, 42], jl: Array(7).fill('+6'), min: 0, max: 42, cnt: true, h: 96, ah: 17, tag: { s: '6 × 7 = 42' } }], L: ['r0h2', 'r0h6', 'r0e'] },
    { k: 'p2rects', n: 18, L: ['a0', 'all', 'div'] },
    { k: 'p2primes', L: ['r13', 'r15', 'grid', 'pr'] },
    { k: 'p2digsum', n: 234, m: 3, n2: 235, L: ['ask', 'mult', 'yes', 'five'] }
  ],
  'c5-5': [
    { k: 'p2fbars', bars: [{ y: 30, st: [[2, 3], [8, 12]], ops: ['× 4'], t: .3, ts: [1.4] }, { y: 104, st: [[12, 18], [6, 9], [2, 3]], ops: ['÷ 2', '÷ 3'], t: 2.4, ts: [3.6, 4.8] }], ex: [{ k: 'check', x: 306, y: 98, t: 5.5 }], L: ['b0s1', 'b1s0', 'b1s2', 5.7] },
    { k: 'p2fbars', bars: [{ y: 30, st: [[3, 4], [6, 8]], ops: ['× 2'], t: .3, ts: [1.5] }, { y: 100, st: [[5, 8]], t: .6, col: Y }], ex: [{ k: 'vline', f: .75, y0: 20, y1: 136, t: 2.6 }, { k: 'pill', x: 116, y: 164, s: '3/4 &gt; 5/8', t: 3.4 }], L: [.9, 'b0s1', 2.9, 3.7] },
    { k: 'p2fsum', rows: [{ a: [2, 9], b: [5, 9], op: '+' }, { a: [7, 8], b: [3, 8], op: '−', simp: [1, 2] }], L: ['r0res', 'r1res', 'r1simp'] },
    { k: 'p2fracOf', rows: [{ n: 3, d: 5, total: 40, icon: 'cards' }], L: ['r0', 'r0one', 'r0tot'] }
  ],
  'c5-6': [
    { k: 'p2angle', angs: [35, 90, 120, 180], L: ['a0', 'a1', 'a2', 'a3'] },
    { k: 'p2tearoff', A: 50, B: 60, L: ['s0', 's1', 's2'] },
    { k: 'p2perim', w: 8, h: 5, area: true, L: ['shape', 'per', 'area'] },
    { k: 'p2tri', b: 10, h: 6, ap: .3, L: ['tri', 'rect', 'half', 'area'] }
  ],
  'c5-7': [
    { k: 'p2coord', p: [4, 2], alt: [2, 4], L: ['start', 'x', 'y', 'alt'] },
    { k: 'p2solid', items: [{ sh: 'cube', x: 44, y: 62, s: 48, ly: 124, t: .2 }, { sh: 'pyr', x: 122, y: 60, s: 50, ly: 124, t: 1.2 }, { sh: 'prism', x: 202, y: 62, s: 44, ly: 124, t: 2.2 }, { sh: 'sphere', x: 280, y: 64, s: 46, ly: 124, t: 3.2 }], L: ['i0', 'i1', 'i2', 'i3'] },
    { k: 'p2sym', items: [{ sh: 'rect', x: 44, y: 64, a: 62, gt: [.8], cy: 128 }, { sh: 'tri', x: 122, y: 70, a: 62, gt: [2.0], cy: 128 }, { sh: 'square', x: 200, y: 64, a: 52, gt: [3.0, 3.5], cy: 128 }, { sh: 'A', x: 278, y: 64, a: 60, gt: [4.6], cy: 128 }], L: ['i0', 'i1', 'i2', 'i3'] },
    { k: 'p2loop', name: 'n', v: [5, 9, 13, 17], op: '+ 4', L: ['init', 'loop', 't3', 'end'] }
  ],
  'c5-8': [
    { k: 'p2bars', bars: [{ v: 9, ic: 'football' }, { v: 5, ic: 'basketball' }, { v: 6, ic: 'swimmer' }], max: 11, ex: [{ k: 'top', i: 0, t: 1.9 }, { k: 'diff', i: 0, j: 1, t: 2.8 }, { k: 'sum', x: 236, y: 16, s: '9 + 5 + 6 = 20', t: 3.8 }], L: ['bars', 2.1, 3.1, 4.0] },
    { k: 'p2mean', vals: [7, 9, 6, 10, 8], L: ['cols', 'sum', 'lev', 'end'] },
    { k: 'p2bag', red: 3, blue: 2, L: ['bag', 'pos', 'fav', 'p'] },
    { k: 'p2dice', fav: [5, 6], simp: [1, 3], imp: true, L: ['fav', 'frac', 'simp', 'imp'] }
  ],
  'c5-9': [
    { k: 'p2tape', h: 112, rows: [{ y: 44, segs: [{ v: 18.75, c: 'uc', lab: '18,75 €', t: .3, x: 1.5 }, { v: 26.85, c: 'y', sw: [['?', 1.3], ['26,85 €', 2.8]], t: .5 }], tot: { lab: '45,60 €', t: .5 } }], L: [.9, 1.9, 3.0] },
    { k: 'p2tape', h: 136, rows: [{ y: 44, segs: [{ v: 7.5, c: 'uc', lab: '7,50', t: .3 }, { v: 7.5, c: 'uc', lab: '7,50', t: .45 }, { v: 7.5, c: 'uc', lab: '7,50', t: .6 }, { v: 27.5, c: 'y', sw: [['?', .9], ['27,50 €', 2.8]], t: .75 }], tot: { lab: '50 €', t: .75 }, br: [{ a: 0, b: 3, dn: true, lab: '22,50 €', t: 1.5 }, { a: 3, b: 4, dn: true, lab: '50 − 22,50', t: 2.5, f: WH, c: RED }] }], L: [1.0, 1.8, 3.0, 3.6] },
    { k: 'p2tape', h: 200, rows: [{ y: 44, x0: 48, W: 252, segs: Array.from({ length: 24 }, (_, k) => ({ v: 150, c: k % 2 ? 'l' : 'w', t: .3 + k * .03 })), tot: { lab: '24 × 150 = 3.600', t: 1.3 }, img: [{ n: 'pencil', x: 22, y: 59, t: .2 }] }, { y: 128, x0: 48, W: 252, segs: Array.from({ length: 18 }, (_, k) => ({ v: 200, c: k ? (k % 2 ? 'l' : 'w') : 'y', t: 2.3 + k * .04 })), tot: { lab: '3.600 ÷ 18', t: 2.5 }, br: [{ a: 0, b: 1, dn: true, lab: '200', t: 3.4, px: 62 }], img: [{ n: 'school', x: 22, y: 143, t: 2.2 }] }], L: [1.0, 1.6, 2.8, 3.7] },
    { k: 'p2tape', h: 136, rows: [{ y: 50, segs: [{ v: 26.85, c: 'y', sw: [['≈ 27', .3], ['26,85', 1.8]], t: .3 }, { v: 18.75, c: 'uc', sw: [['≈ 19', .4], ['18,75', 1.9]], t: .4 }], tot: { sw: [['≈ 46', .6], ['26,85 + 18,75 = 45,60', 2.1]], t: .5 }, br: [{ a: 0, b: 1, dn: true, lab: '26,85 €', t: 2.9 }] }], L: [.9, 2.4, 3.2] }
  ],
  'c6-1': [
    { k: 'p2neg', L: ['p0', 'p1', 'p2'] },
    { k: 'p2zline', min: -7, max: 5, a: -7, b: -2, ord: [-6, -2, 0, 3, 5], L: ['l0', 'cmp', 'ord'] },
    { k: 'p2thermo', from: -3, up: 8, a2: -4, b2: 6, L: ['l0', 'l1', 'l2', 'r'] },
    { k: 'p2hops', rows: [{ pts: [-4, 2], jl: ['+ 6'], min: -6, max: 4, unit: true, h: 68 }, { pts: [3, -2], jl: ['− 5'], min: -6, max: 4, unit: true, h: 68 }, { pts: [-2, -5], jl: ['− 3'], min: -6, max: 4, unit: true, h: 68 }], L: ['r0h0', 'r1h0', 'r2h0'] }
  ],
  'c6-2': [
    { k: 'p2sq', n: 6, L: ['ask', 'fill', 'area'] },
    { k: 'p2cubes', blocks: [{ a: 3, b: 3, c: 3, sz: 24, cx: 104, cy: 98, t: .4, dt: 1.0, h: 204 }, { a: 2, b: 2, c: 2, sz: 24, cx: 252, cy: 122, t: 4.0, dt: .5, h: 204 }], tags: [{ x: 104, y: 190, s: '3 × 3 = 9', t: 1.0, end: 3.0 }, { x: 104, y: 190, s: '9 × 3 = 27', t: 3.0 }, { x: 252, y: 190, s: '2 × 2 × 2 = 8', t: 5.0 }], L: [.4, 1.2, 3.2, 5.2] },
    { k: 'p2pow10', rows: [{ e: 2 }, { e: 4 }, { e: 6 }, { m: 5, e: 3 }], L: ['r0', 'r1', 'r2', 'r3'] },
    { k: 'p2root', n: 64, m: 50, L: ['q', 'a', 'b', 'c'] }
  ],
  'c6-3': [
    { k: 'p2col', heads: true, ops: [{ a: '12,5', b: '3,75', op: '+' }, { a: '8', b: '2,35', op: '−' }], L: ['o0pad', 'o0res', 'o1res'] },
    { k: 'p2comma', rows: [['3,25', 2, '× 100'], ['4,2', -1, '÷ 10'], ['7', -3, '÷ 1.000']], L: ['r0', 'r1', 'r2'] },
    { k: 'p2decmul', L: ['a', 'b', 'c', 'd'] },
    { k: 'p2expr', rows: [{ st: ['5 + 2 × 1,5', '5 + 3', '8'], rg: [[2, 4], [0, 2]] }, { st: ['( 5 + 2 ) × 1,5', '7 × 1,5', '10,5'], rg: [[0, 4], [0, 2]] }, { st: ['20 − 12 ÷ 4', '20 − 3', '17'], rg: [[2, 4], [0, 2]] }], L: ['r0s2', 'r1s2', 'r2s2'] }
  ],
  'c6-4': [
    { k: 'p2fbars', fs: 13, bars: [{ y: 10, h: 22, st: [[1, 2]], t: .2 }, { y: 44, h: 22, st: [[2, 4]], t: .5 }, { y: 78, h: 22, st: [[3, 6]], t: .8 }, { y: 112, h: 22, st: [[4, 8]], t: 1.1 }, { y: 162, h: 26, fs: 17, st: [[2, 5], [6, 15]], ops: ['× 3'], t: 2.4, ts: [3.5], col: Y }], ex: [{ k: 'vline', f: .5, y0: 4, y1: 140, t: 1.6 }], L: [1.9, 3.2, 4.0] },
    { k: 'p2fbars', bars: [{ y: 56, h: 34, st: [[12, 18], [2, 3]], ops: ['÷ 6'], t: .3, ts: [2.0], br: [{ a: 0, b: 1 / 3, up: true, s: '6', t: 1.0 }, { a: 1 / 3, b: 2 / 3, up: true, s: '6', t: 1.1 }, { a: 2 / 3, b: 1, up: true, s: '6', t: 1.2 }] }], L: [1.3, 1.8, 2.5] },
    { k: 'p2fsum', rows: [{ a: [1, 2], b: [1, 3], op: '+', cd: 6 }, { a: [3, 4], b: [1, 6], op: '−', cd: 12 }, { a: [1, 4], b: [5, 12], op: '+', cd: 12, simp: [2, 3] }], L: ['r0res', 'r1res', 'r2res', 'r2simp'] },
    { k: 'p2fracOf', rows: [{ n: 2, d: 5, total: 30, icon: 'coin' }], L: ['r0', 'r0one', 'r0tot'] }
  ],
  'c6-5': [
    { k: 'p2pct', total: 80, rows: [[50, 2], [25, 4], [10, 10], [5, 20]], L: ['r0', 'r1', 'r2', 'r3'] },
    { k: 'p2tape', h: 132, rows: [{ y: 40, segs: Array.from({ length: 10 }, (_, k) => ({ v: 6, c: k < 3 ? 'r' : 'l', lab: '6', t: .3 + k * .05, x: k < 3 ? 1.9 + k * .15 : null })), tot: { lab: '60 €', t: .4 }, br: [{ a: 0, b: 3, dn: true, lab: '30% = 18 €', t: 2.2, f: WH, c: RED }, { a: 3, b: 10, dn: true, lab: '60 − 18 = 42 €', t: 3.2 }] }], L: [.9, 2.5, 3.5] },
    { k: 'p2ratio', heads: [{ ic: 'person' }, { ic: 'cupcake' }], cols: [['4', '200 g'], ['1', '50 g'], ['6', '300 g']], ops: ['÷ 4', '× 6'], L: ['c0', 'c1', 'c2'] },
    { k: 'p2scale', e: 200, cm: 3, L: ['plan', 'cm', 'real'] }
  ],
  'c6-6': [
    { k: 'p2bars', bars: [{ v: 8, ic: 'apple' }, { v: 5, ic: 'banana' }, { v: 12, ic: 'strawberry' }], max: 15, ex: [{ k: 'top', i: 2, t: 2.0 }, { k: 'sum', x: 124, y: 18, s: '8 + 5 + 12 = 25', t: 3.0 }], L: [.3, 'bars', 2.2, 3.2] },
    { k: 'p2dots', data: [2, 0, 3, 2, 1, 2], xs: [0, 1, 2, 3], mode: 3.2, L: ['data', 'dots', 'mode'] },
    { k: 'p2mean', vals: [6, 8, 7, 9], L: ['cols', 'sum', 'lev'] },
    { k: 'p2bars', bars: [{ v: 12 }, { v: 18 }, { v: 9 }, { v: 15 }], unit: '°', max: 20, step: 2, lstep: 4, ex: [{ k: 'range', t: 2.2, s: '18 − 9 = 9', x: 206, y: 66 }], L: ['bars', 2.4, 3.0] }
  ],
  'c6-7': [
    { k: 'p2tearoff', A: 50, B: 75, L: ['s0', 's1', 's2'] },
    { k: 'p2tri', b: 8, h: 5, ap: .4, first: 'rect', L: ['rect', 'tri', 'half'] },
    { k: 'p2cubes', blocks: [{ a: 4, b: 3, c: 3, sz: 22, cx: 122, cy: 96, t: .3, dt: 1.1, h: 206 }, { a: 1, b: 1, c: 1, sz: 24, cx: 272, cy: 92, t: 3.4, h: 206 }], tags: [{ x: 122, y: 190, s: '4 × 3 = 12', t: 1.0, end: 2.7 }, { x: 122, y: 190, s: '12 × 3 = 36', t: 2.7 }, { x: 272, y: 136, s: '1 cm³', t: 3.6, f: WH }], L: [1.0, 2.9, 3.8] },
    { k: 'p2cubes', blocks: [{ a: 10, b: 5, c: 4, sz: 15, cx: 150, cy: 96, t: .6, dt: .9, h: 212, dims: ['10 cm', '5 cm', '4 cm'], dimt: .3 }], tags: [{ x: 160, y: 196, s: '10 × 5 = 50 cm²', t: 1.2, end: 3.7 }, { x: 160, y: 196, s: '50 × 4 = 200 cm³', t: 3.7 }], L: [.4, 1.4, 3.9] }
  ],
  'c6-8': [
    { k: 'p2coord', p: [4, 1], L: ['start', 'x', 'y'] },
    { k: 'p2solid', items: [{ sh: 'cube', x: 58, y: 64, s: 54, ly: 132, t: .2 }, { sh: 'pyr', x: 160, y: 62, s: 56, ly: 132, t: 1.2 }, { sh: 'cyl', x: 262, y: 66, s: 56, ly: 132, t: 3.0 }], L: ['i0', 1.4, 'i1', 'i2'] },
    { k: 'p2loop', name: 'punts|puntos', v: [0, 5, 10, 15], op: '+ 5', L: ['init', 'loop', 't3', 'end'] },
    { k: 'p2bag', red: 3, blue: 2, dado: true, L: ['bag', 'fav', 'p', 'die'] }
  ],
  'c6-9': [
    { k: 'p2tape', h: 130, rows: [{ y: 44, segs: [{ v: 2.4, c: 'uc', lab: '2,40', t: .3 }, { v: 2.4, c: 'uc', lab: '2,40', t: .45 }, { v: 2.4, c: 'uc', lab: '2,40', t: .6 }, { v: 2.8, c: 'y', sw: [['?', .8], ['2,80 €', 2.6]], t: .75 }], tot: { lab: '10 €', t: .75 }, br: [{ a: 0, b: 3, dn: true, lab: '3 × 2,40 = 7,20 €', t: 1.4 }, { a: 3, b: 4, dn: true, lab: '2,80 €', t: 2.6, f: WH, c: RED }] }], L: [1.0, 1.8, 2.9] },
    { k: 'p2seats', rows: 12, cols: 15, taken: 134, L: ['grid', 'tot', 'free'] },
    { k: 'p2ratio', heads: [{ ic: 'orange' }, { s: '€' }], cols: [['5 kg', '7,50 €'], ['1 kg', '1,50 €'], ['8 kg', '12 €']], ops: ['÷ 5', '× 8'], L: ['c0', 'c1', 'c2'] },
    { k: 'p2tape', h: 230, rows: [{ y: 40, x0: 50, W: 250, segs: Array.from({ length: 25 }, (_, k) => ({ v: 12, c: k ? (k % 2 ? 'l' : 'w') : 'uc', t: .3 + k * .025 })), tot: { lab: '300 €', t: .4 }, br: [{ a: 0, b: 1, dn: true, lab: '300 ÷ 25 = 12 €', t: 1.5, px: 118 }], img: [{ n: 'car', x: 24, y: 55, t: .2 }] }, { y: 156, x0: 50, W: 140, segs: Array.from({ length: 4 }, (_, k) => ({ v: 2, c: k ? 'y' : 'r', lab: '2 €', t: 2.3 + k * .06, x: k ? null : 2.9 })), tot: { lab: '8 €', t: 2.4 }, br: [{ a: 1, b: 4, dn: true, lab: '8 − 2 = 6 €', t: 3.2 }], img: [{ n: 'temple', x: 24, y: 171, t: 2.2 }], pills: [{ x: 258, y: 171, s: '12 + 6 = 18 €', t: 4.2, fs: 13 }] }], L: [.9, 1.8, 3.4, 4.4] }
  ],
  'c4-11': [
    { k: 'p2poly', pts: [[64, 116], [256, 116], [160, 44]], sides: [{ i: 0, s: '8 cm', t: .6 }, { i: 1, s: '5 cm', t: .8 }, { i: 2, s: '5 cm', t: 1.0 }], ticks: [{ i: 1, t: 1.8 }, { i: 2, t: 2.0 }], chip: { s: 'isòsceles|isósceles', t: 2.8, y: 166 }, L: [1.2, 2.2, 3.1] },
    { k: 'p2poly', pts: [[66, 140], [256, 140], [66, 30]], arcs: [{ v: 1, s: '30°', t: .8, r: 30 }, { v: 2, s: '60°', t: 1.0 }, { v: 0, s: '90°', right: true, t: 1.2, ring: 2.0 }], chip: { s: 'rectangle|rectángulo', t: 2.8, y: 178 }, L: [1.5, 2.2, 3.1] },
    { k: 'p2lines', mode: 'perp', L: ['cut', 'sq', 'name'] },
    { k: 'p2poly', pts: [[70, 150], [190, 150], [250, 46], [130, 46]], ticks: [0, 1, 2, 3].map(i => ({ i, t: .8 + i * .12 })), arcs: [{ v: 0, s: '60°', t: 1.4 }, { v: 1, s: '120°', t: 1.5 }], par: [{ i: 0, n: 1, t: 2.0 }, { i: 2, n: 1, t: 2.0 }, { i: 1, n: 2, t: 2.3 }, { i: 3, n: 2, t: 2.3 }], chip: { s: 'rombe|rombo', t: 3.0, y: 188 }, L: [1.6, 2.6, 3.3] }
  ],
  'c4-12': [
    { k: 'p2marks', lo: 40000, hi: 50000, n: 10, mk: 7, L: ['marks', 'step', 'tgt'] },
    { k: 'p2cal', first: 0, a: 3, b: 20, L: ['ask', 'jump', 'day'] },
    { k: 'p2hops', rows: [{ pts: [1000, 1020, 1045], lab: ['16:40', '17:00', '17:25'], jl: ['20 min', '25 min'], min: 990, max: 1055, brace: '20 + 25 = 45 min', h: 90 }], L: ['r0', 'r0h1', 'r0e'] },
    { k: 'p2logic', items: [['r', 'sq'], ['b', 'sq'], ['r', 'ci'], ['r', 'sq'], ['b', 'ci'], ['r', 'tr'], ['b', 'sq'], ['r', 'sq']], L: ['ask', 'both', 'only'] }
  ],
  'c5-10': [
    { k: 'p2ladder', units: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], from: 3, to: 5, v: 3, f: 10, L: ['ask', 'hops', 'res'] },
    { k: 'p2ladder', units: ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'], from: 0, to: 3, v: 1.5, f: 10, L: ['ask', 'hops', 'res'] },
    { k: 'p2ladder', units: ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'], from: 3, to: 4, v: 4, f: 100, L: ['ask', 'hops', 'res'] },
    { k: 'p2tape', h: 124, rows: [{ y: 44, segs: [{ v: 60, lab: '1 h = 60 min', t: .3 }, { v: 60, lab: '1 h = 60 min', t: .5 }, { v: 15, c: 'y', lab: '15', t: .7 }], br: [{ a: 0, b: 2, dn: true, lab: '2 × 60 = 120', t: 1.4 }], tot: { lab: '120 + 15 = 135 min', t: 2.4 } }], L: [.9, 1.8, 2.8] }
  ],
  'c5-11': [
    { k: 'p2lines', mode: 'par', L: ['two', 'dist', 'name'] },
    { k: 'p2poly', pts: [[90, 170], [220, 170], [90, 40]], arcs: [{ v: 0, s: '90°', right: true, t: .8 }, { v: 1, s: '45°', t: 1.0, r: 26 }, { v: 2, s: '45°', t: 1.2, r: 26 }], ticks: [{ i: 0, t: 1.8 }, { i: 2, t: 1.9 }], chip: { s: 'rectangle i isòsceles|rectángulo e isósceles', t: 2.7, y: 200 }, L: [1.4, 2.1, 3.0] },
    { k: 'p2poly', pts: REG(8, 160, 94, 76, Math.PI / 8), fc: RED, inner: txt(160, 105, 'STOP', 30, { c: WH }), ticks: [...Array(8)].map((_, i) => ({ i, t: .7 + i * .12, c: INK })), arcs: [...Array(8)].map((_, v) => ({ v, t: 1.9 + v * .1, r: 13, hi: true })), chip: { s: 'octàgon regular|octágono regular', t: 3.0, y: 200 }, L: [1.7, 2.8, 3.3] },
    { k: 'p2poly', pts: REG(6, 160, 94, 74, 0), ticks: [...Array(6)].map((_, i) => ({ i, t: 1.0 + i * .12, c: UC })), axes: [0, 1, 2].map(k => ({ a: AX(REG(6, 160, 94, 74, 0)[k], REG(6, 160, 94, 74, 0)[k + 3]), t: 2.0 + k * .2 })).concat([0, 1, 2].map(k => ({ a: AX(MID(REG(6, 160, 94, 74, 0), k), MID(REG(6, 160, 94, 74, 0), k + 3)), t: 2.6 + k * .2 }))), chip: { s: '6 eixos|6 ejes', t: 3.4, y: 196 }, L: [.8, 1.9, 3.6] }
  ],
  'c5-12': [
    { k: 'p2marks', lo: 2, hi: 3, n: 10, mk: 7, L: ['marks', 'step', 'tgt'] },
    { k: 'p2marks', lo: 2.3, hi: 2.4, n: 10, mk: 5, L: ['marks', 'step', 'tgt'] },
    { k: 'p2gantt', rows: [{ ic: 'cat', n: 4 }, { ic: 'dog', n: 6 }], L: ['go', 'par', 'end'] },
    { k: 'p2robots', L: ['s1', 's2', 'meet'] }
  ],
  'c6-10': [
    { k: 'p2fbars', W: 200, bars: [{ y: 30, st: [[2, 5]], t: .3 }, { y: 104, st: [[4, 10]], tl: ['0,4'], t: 1.3, col: Y }], ex: [{ k: 'pill', x: 120, y: 172, s: '2 ÷ 5 = 0,4', t: 1.8 }, { k: 'vline', f: .4, y0: 20, y1: 140, t: 2.4 }], L: [.8, 2.0, 2.7] },
    { k: 'p2grid100', tenths: 4, L: ['dec', 'hund', 'pct'] },
    { k: 'p2sortbars', rows: [{ fr: [3, 4], v: .75, parts: 4, lab: '3/4' }, { s: '70 %', v: .7, parts: 10, lab: '70 %' }, { s: '0,8', v: .8, parts: 10, lab: '0,8' }], L: ['show', 'dec', 'ord'] },
    { k: 'p2marks', lo: 0, hi: 2, n: 8, mk: 5, fmt: 'frac', d: 4, majors: [1], L: ['marks', 'hops', 'tgt'] }
  ],
  'c6-11': [
    { k: 'p2tape', h: 196, rows: [{ y: 40, W: 189, segs: [0, 1, 2, 3].map(k => ({ v: .6, c: 'l', lab: '0,60', lt: 1.4, t: .3 + k * .05 })), tot: { lab: '4 → 2,40 €', t: .3 } }, { y: 116, segs: [0, 1, 2, 3, 4, 5].map(k => ({ v: .55, c: 'y', lab: '0,55', lt: 1.5, t: .6 + k * .05 })), tot: { lab: '6 → 3,30 €', t: .6 }, pills: [{ x: 160, y: 178, s: '0,55 € &lt; 0,60 €', t: 2.4 }] }], L: [.9, 1.8, 2.6] },
    { k: 'p2tape', h: 140, rows: [{ y: 50, segs: [{ v: 200, c: 'l', lab: '200 €', t: .3 }, { v: 42, c: 'y', sw: [['21 %', .9], ['42 €', 1.8]], t: .9 }], br: [{ a: 1, b: 2, dn: true, lab: '200 × 21 ÷ 100 = 42 €', t: 1.8, px: 190 }], tot: { lab: '200 + 42 = 242 €', t: 2.6 } }], L: [1.0, 2.1, 2.9] },
    { k: 'p2tape', h: 206, rows: [{ y: 44, x0: 50, W: 200, segs: [{ v: 98, c: 'l', lab: '500 €', t: .3 }, { v: 2, c: 'y', t: .9 }], br: [{ a: 1, b: 2, lab: '2 % = 10 €', t: 1.1, px: 214 }], img: [{ n: 'chest', x: 26, y: 59, t: .2 }] }, { y: 128, x0: 50, W: 180, segs: [0, 1, 2].map(k => ({ v: 10, c: 'y', lab: '10 €', t: 1.6 + k * .35 })), br: [{ a: 0, b: 3, dn: true, lab: '3 × 10 = 30 €', t: 2.8 }], img: [{ n: 'calendar', x: 26, y: 143, t: 1.5 }] }], L: [.8, 1.6, 3.1] },
    { k: 'p2cubes', blocks: [{ a: 5, b: 3, c: 4, sz: 20, cx: 150, cy: 92, t: .6, dt: .7, h: 212, dims: ['5 dm', '3 dm', '4 dm'], dimt: .3 }], tags: [{ x: 160, y: 196, s: '5 × 3 × 4 = 60 dm³', t: 3.3, end: 4.3 }, { x: 160, y: 196, s: '60 dm³ = 60 l', t: 4.3 }], L: [.4, 3.5, 4.5] }
  ],
  'c6-12': [
    { k: 'p2hops', rows: [{ pts: [-3, 2], jl: ['+ 5'], min: -5, max: 4, unit: true, h: 90, tag: { s: '−3 + 5 = 2' } }], L: ['r0', 1.1, 'r0h0'] },
    { k: 'p2coord', p: [3, 5], L: ['start', 'x', 'y'] },
    { k: 'p2median', data: [9, 3, 21, 5, 7], L: ['data', 'sorted', 'med'] },
    { k: 'p2nested', outer: 3, inner: 4, L: ['code', 'times', 'n'] }
  ]
});

if (typeof document !== 'undefined' && !document.getElementById('p2-anim-css')) {
  const st = document.createElement('style'); st.id = 'p2-anim-css';
  st.textContent = `.p2-out{opacity:0;animation-name:p2Out;animation-duration:.3s;animation-timing-function:ease-in}
@keyframes p2Out{from{opacity:1}}
.p2-rot{transform:rotate(var(--r));animation-name:p2Rot;animation-duration:.8s;animation-timing-function:cubic-bezier(.35,1.1,.5,1)}
@keyframes p2Rot{from{transform:rotate(var(--r0))}}
.p2-gy{transform-box:fill-box;transform-origin:center bottom;animation-name:p2GrowY;animation-duration:.6s;animation-timing-function:ease-out}
@keyframes p2GrowY{from{transform:scaleY(0)}}
.p2-gyt{transform-box:fill-box;transform-origin:center top;animation-name:p2GrowY;animation-duration:.9s;animation-timing-function:ease-in-out}
.p2-pulse{animation-name:p2Pulse;animation-duration:.5s;animation-timing-function:ease-in-out}
@keyframes p2Pulse{50%{transform:scale(1.06)}}
.p2-blink{animation-name:p2Blink;animation-duration:.9s}
@keyframes p2Blink{from{opacity:0}30%{opacity:1}}
.p2-fold{animation-name:p2Fold;animation-duration:1.8s;animation-timing-function:ease-in-out}
@keyframes p2Fold{40%,62%{transform:scaleX(-1)}}
.p2-roll{animation-name:p2Roll;animation-duration:1.1s;animation-timing-function:ease-out}
@keyframes p2Roll{from{transform:translateX(-36px) rotate(-200deg)}}
.p2f1{fill:color-mix(in srgb,var(--uc) 16%,#fff)}.p2f2{fill:color-mix(in srgb,var(--uc) 42%,#fff)}.p2f3{fill:color-mix(in srgb,var(--uc) 72%,#fff)}`;
  document.head.appendChild(st);
}
})();
