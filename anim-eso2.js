/* ===== Teoria animada · ESO, unitats noves (theory7.js) =====
   Mateix contracte que anim.js i anim-eso.js; fa servir les eines d'AE (anim-eso.js s'ha de carregar abans). */
(() => {
  const A = AE, { M, chip, chipW, rect, tt, inout, out, line, dot, mark, ic, mrow, NL, hop, PL, curve, pt, rline, trm, arc, qarrow, arrowHead, UC, RED, GRN, INK, LN, GRY, YEL, SOFT, nf, sg, r1, scene, FF } = A;
  const pts = a => a.map(v => v.map(r1).join(',')).join(' ');
  const MONO = 'font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"';
  const colC = c => c === 'y' ? YEL : c === 'r' ? RED : c === 'g' ? '#5FC98B' : c === 'k' ? '#D9CCE6' : c === 'b' ? '#36A9E1' : c === 'w' ? '#fff' : UC;

  /* ---------- blocs nous per a eRows ---------- */
  const oldBlk = A.blk;
  A.blk = (b, reg) => {
    // fitxes d'àlgebra: [tipus, quantitat, t] amb tipus x, u (unitat) o n (unitat negativa)
    if (b.p === 'tiles') {
      let s = '', x = b.x; const y = b.y;
      b.items.forEach(([k, n, t]) => {
        for (let i = 0; i < n; i++) {
          if (k === 'x') { s += `<g ${tt(t + .08 * i)}><rect x="${r1(x)}" y="${y - 30}" width="16" height="30" rx="4" fill="${UC}" stroke="${INK}" stroke-width="1.3"/>${M(x + 8, y - 10, 'x', { fs: 12, fill: '#fff' })}</g>`; x += 20; }
          else { s += `<g ${tt(t + .08 * i)}><rect x="${r1(x)}" y="${y - 14}" width="14" height="14" rx="3" fill="${k === 'n' ? RED : YEL}" stroke="${INK}" stroke-width="1.1"/>${k === 'n' ? `<line x1="${r1(x + 3)}" x2="${r1(x + 11)}" y1="${y - 7}" y2="${y - 7}" stroke="#fff" stroke-width="2"/>` : ''}</g>`; x += 18; }
        }
        x += 12;
      });
      return s;
    }
    // punts que apareixen un a un ([x, y, t])
    if (b.p === 'dots') return b.pts.map(([x, y, t, c]) => dot(x, y, t, { r: b.r || 6, fill: c === 'y' ? YEL : UC })).join('');
    // quadrícula de 100 amb n caselles pintades (per files)
    if (b.p === 'h100') {
      const { x, y, c = 12, n, t = 0, dt = .02, col = UC } = b; let s = `<rect x="${x}" y="${y}" width="${10 * c}" height="${10 * c}" fill="#fff" stroke="${INK}" stroke-width="2" ${tt(t, 'a-fade')}/>`;
      for (let i = 0; i < n; i++) s += `<rect x="${r1(x + (i % 10) * c + 1)}" y="${r1(y + Math.floor(i / 10) * c + 1)}" width="${c - 2}" height="${c - 2}" rx="2" fill="${col}" ${tt(t + .2 + dt * i, 'a-fade')}/>`;
      let g = ''; for (let i = 1; i < 10; i++) g += `<line x1="${x + i * c}" x2="${x + i * c}" y1="${y}" y2="${y + 10 * c}" stroke="${LN}" stroke-width=".8"/><line y1="${y + i * c}" y2="${y + i * c}" x1="${x}" x2="${x + 10 * c}" stroke="${LN}" stroke-width=".8"/>`;
      return s + `<g ${tt(t, 'a-fade')}>${g}</g>`;
    }
    // rectangle de w × h caselles, amb etiquetes (que poden canviar)
    if (b.p === 'rgrid') {
      const { x, y, c = 12, w, h, t = 0, lw, lh, lw2, lh2, t2, col = UC } = b;
      let s = `<rect x="${x}" y="${y}" width="${w * c}" height="${h * c}" fill="${col}" fill-opacity=".8" stroke="${INK}" stroke-width="2" ${tt(t, 'ae-gy')}/>`;
      let g = ''; for (let i = 1; i < w; i++) g += `<line x1="${x + i * c}" x2="${x + i * c}" y1="${y}" y2="${y + h * c}" stroke="#fff" stroke-width="1"/>`; for (let j = 1; j < h; j++) g += `<line y1="${y + j * c}" y2="${y + j * c}" x1="${x}" x2="${x + w * c}" stroke="#fff" stroke-width="1"/>`;
      s += `<g ${tt(t + .4, 'a-fade')}>${g}</g>`;
      const top = (txt, tt1) => M(x + w * c / 2, y - 7, txt, { fs: 13, t: tt1 }), left = (txt, tt1) => M(x - 7, y + h * c / 2 + 5, txt, { fs: 13, a: 'e', t: tt1 });
      if (lw) s += lw2 ? inout(t, t2, top(lw)) + top(`{u|${lw2}}`, t2) : top(lw, t);
      if (lh) s += lh2 ? inout(t, t2, left(lh)) + left(`{u|${lh2}}`, t2) : left(lh, t);
      return s;
    }
    // n preguntes: ok encerts (verd) i la resta errors (vermell)
    if (b.p === 'qgrid') {
      const { x, y, n, ok, t = 0, dt = .05, sz = 13 } = b; let s = '';
      for (let i = 0; i < n; i++) { const good = i < ok; s += `<g ${tt(t + dt * i)}><rect x="${r1(x + i * (sz + 2))}" y="${y}" width="${sz}" height="${sz}" rx="3" fill="${good ? GRN : RED}"/>${good ? `<path d="M${r1(x + i * (sz + 2) + 3)},${y + 7} l3,3 l5,-6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` : `<path d="M${r1(x + i * (sz + 2) + 3.5)},${y + 3.5} l6,6 M${r1(x + i * (sz + 2) + 9.5)},${y + 3.5} l-6,6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}</g>`; }
      return s;
    }
    // n punts agrupats de g en g (divisió entera i residu)
    if (b.p === 'groups') {
      const { x, y, n, g, t = 0, tg, sp = 13 } = b; let s = ''; const ng = Math.floor(n / g);
      for (let i = 0; i < n; i++) { const k = Math.floor(i / g), gx = x + k * (g * sp + 12) + (i % g) * sp; s += `<circle cx="${r1(gx + sp / 2)}" cy="${y}" r="5" fill="${k < ng ? UC : RED}" ${tt(t + .04 * i)}/>`; }
      for (let k = 0; k < ng; k++) s += `<rect x="${r1(x + k * (g * sp + 12) - 2)}" y="${y - 10}" width="${g * sp + 4}" height="20" rx="10" fill="none" stroke="${UC}" stroke-width="2" ${tt(tg + .2 * k, 'a-pop')}/>`;
      return s;
    }
    // quadrícula de persones/objectes: n caselles i k amb icona
    if (b.p === 'icons') {
      const { x, y, n, k, icon, cols = 10, sz = 22, t = 0, tk, dt = .12 } = b; let s = '';
      for (let i = 0; i < n; i++) { const cx = x + (i % cols) * (sz + 4) + sz / 2, cy = y + Math.floor(i / cols) * (sz + 4) + sz / 2; s += `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${sz / 2 - 1}" fill="#fff" stroke="${LN}" stroke-width="2" ${tt(t + .02 * i, 'a-fade')}/>`; if (i < k) s += ic(icon, cx, cy, sz - 2, tk + dt * i); }
      return s;
    }
    // recta numèrica amb un segment [a, b] (extrems plens o buits)
    if (b.p === 'nl' && b.seg) {
      const N = A.NL(b); let s = N.s; const [a, c, ca, cb, t, col = UC] = b.seg;
      s += `<line x1="${r1(N.X(a))}" x2="${r1(N.X(c))}" y1="${N.y}" y2="${N.y}" stroke="${col}" stroke-width="7" stroke-opacity=".75" stroke-linecap="round" pathLength="1" ${tt(t, 'a-draw', 'animation-duration:.6s')}/>`;
      s += dot(N.X(a), N.y, t, { fill: col, r: 7, open: !ca }) + dot(N.X(c), N.y, t + .5, { fill: col, r: 7, open: !cb });
      (b.pts || []).forEach(q => { s += dot(N.X(q[0]), N.y, q[1], q[2] || {}); if (q[3]) s += chip(N.X(q[0]), N.y - 16, q[3], q[1] + .1, { fs: 13, ...(q[4] || {}) }); });
      (b.band || []).forEach(([u, v, tb]) => { s += `<rect x="${r1(N.X(u))}" y="${N.y - 10}" width="${r1(N.X(v) - N.X(u))}" height="20" rx="4" fill="${YEL}" fill-opacity=".55" ${tt(tb, 'a-fade')}/>`; });
      return s;
    }
    if (b.p === 'nl' && b.band) {
      const nb = { ...b, band: null }, s = A.blk(nb, reg), N = A.NL(b);
      return b.band.map(([u, v, tb]) => `<rect x="${r1(N.X(u))}" y="${N.y - 11}" width="${r1(N.X(v) - N.X(u))}" height="22" rx="4" fill="${YEL}" fill-opacity=".6" ${tt(tb, 'a-fade')}/>`).join('') + s;
    }
    return oldBlk(b, reg);
  };

  /* ---------- elements nous per al pla ---------- */
  const oldPI = A.planeItems;
  A.planeItems = (P, items) => {
    let s = '';
    const rest = [];
    items.forEach(o => {
      const t = o.t ?? 0, col = o.col === 'y' ? '#E0A800' : o.col === 'r' ? RED : o.col === 'g' ? GRN : o.col === 'k' ? INK : UC;
      if (o.k === 'fn') {
        const f = o.f === 'exp' ? (x => o.a * Math.pow(o.b, x)) : o.f === 'recip' ? (x => o.c / x) : null;
        if (o.f === 'recip') s += curve(P, f, t, { col, dur: .9, from: 1e-3, to: P.xb, n: 400 }) + curve(P, f, t + .6, { col, dur: .9, from: P.xa, to: -1e-3, n: 400 });
        else s += curve(P, f, t, { col, dur: o.dur || 1.1, from: o.from ?? P.xa, to: o.to ?? P.xb, w: o.w || 3 });
      } else if (o.k === 'vec') {
        const [x1, y1, x2, y2] = o.p, X1 = P.X(x1), Y1 = P.Y(y1), X2 = P.X(x2), Y2 = P.Y(y2), ang = Math.atan2(Y2 - Y1, X2 - X1), L = Math.hypot(X2 - X1, Y2 - Y1);
        s += `<line x1="${r1(X1)}" y1="${r1(Y1)}" x2="${r1(X2 - 8 * Math.cos(ang))}" y2="${r1(Y2 - 8 * Math.sin(ang))}" stroke="${col}" stroke-width="${o.w || 3.2}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ' pathLength="1"'} ${tt(t, o.dash ? 'a-fade' : 'a-draw', 'animation-duration:.5s')}/><g ${tt(t + .4, 'a-fade')}>${arrowHead(X2, Y2, ang, 11, col)}</g>`;
        if (o.lab) { const mx = (X1 + X2) / 2, my = (Y1 + Y2) / 2, nx = -(Y2 - Y1) / L, ny = (X2 - X1) / L, d = o.ld ?? 14; s += chip(mx + nx * d, my + ny * d + 4, o.lab, t + .4, { fs: o.fs || 12, st: o.st || 'o' }); }
      } else if (o.k === 'orect') {
        s += `<rect x="${r1(P.X(0))}" y="${r1(P.Y(o.y))}" width="${r1(P.X(o.x) - P.X(0))}" height="${r1(P.Y(0) - P.Y(o.y))}" fill="${col}" fill-opacity=".16" stroke="${col}" stroke-width="2"${o.dash ? ' stroke-dasharray="5 4"' : ''} ${tt(t, 'a-fade')}/>` + (o.lab ? M((P.X(0) + P.X(o.x)) / 2, (P.Y(0) + P.Y(o.y)) / 2 + 5, o.lab, { fs: 12, t: t + .2, fill: INK }) : '');
      } else if (o.k === 'bar') {
        s += `<rect x="${r1(P.X(o.x1))}" y="${r1(P.Y(o.y))}" width="${r1(P.X(o.x2) - P.X(o.x1))}" height="${r1(P.Y(0) - P.Y(o.y))}" fill="${col}" fill-opacity=".85" stroke="${INK}" stroke-width="1.6" ${tt(t, 'ae-gy')}/>`;
      } else if (o.k === 'rangle') {
        const q = [P.X(o.x), P.Y(o.y)], v = o.m.map(m => { const dx = P.X(1) - P.X(0), dy = P.Y(m) - P.Y(0), L = Math.hypot(dx, dy); return [dx / L * 11, dy / L * 11]; });
        s += `<path d="M${r1(q[0] + v[0][0])},${r1(q[1] + v[0][1])} L${r1(q[0] + v[0][0] + v[1][0])},${r1(q[1] + v[0][1] + v[1][1])} L${r1(q[0] + v[1][0])},${r1(q[1] + v[1][1])}" fill="none" stroke="${INK}" stroke-width="2" ${tt(t, 'a-fade')}/>`;
      } else if (o.k === 'scatter') {
        o.pts.forEach(([x, y], i) => { s += dot(P.X(x), P.Y(y), t + (o.dt ?? .06) * i, { r: o.r || 4.5, fill: col }); });
      } else rest.push(o);
    });
    return s + oldPI(P, rest);
  };

  // cercle en sectors: angles en graus en sentit horari des de dalt
  const sect = (cx, cy, r, a0, a1) => { const p = a => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return a1 - a0 >= 359.99 ? `M${r1(cx - r)},${cy} A${r},${r} 0 1 1 ${r1(cx + r)},${cy} A${r},${r} 0 1 1 ${r1(cx - r)},${cy} Z` : `M${cx},${cy} L${r1(x0)},${r1(y0)} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${r1(x1)},${r1(y1)} Z`; };
  const polarP = (cx, cy, r, a) => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)];

  // fila de codi amb colors (paraules clau, números i textos)
  const KW = /^(for|in|range|if|elif|else|while|print|and|or|not|True|False)$/;
  const codeLine = (x, y, s, fs, extra = '') => {
    const ind = /^ */.exec(s)[0].length, cw = fs * .6; let out = '';
    s.slice(ind).split(/(\s+|"[^"]*"|\b\d+\b|[A-Za-z_]+)/).filter(Boolean).forEach(tk => { const c = /^"/.test(tk) ? '#FF9FB8' : /^\d+$/.test(tk) ? '#7FE0C6' : KW.test(tk) ? YEL : '#F3ECF8'; out += `<tspan fill="${c}">${A.esc(tk)}</tspan>`; });
    return `<text x="${r1(x + ind * cw)}" y="${r1(y)}" font-size="${fs}" font-weight="700" ${MONO} xml:space="preserve"${extra}>${out}</text>`;
  };

  Object.assign(SCN, {
    // model de barres: quantitats com a trossos de barra (problemes de text)
    eBarModel({ rows, unit, x0 = 76, at, h, braces = [], strikes = [], relabel = [], chips = [], vlines = [], add = [], overlays = [] }) {
      let s = ''; const pos = [];
      rows.forEach((R, ri) => {
        let x = x0 + (R.dx || 0) * unit; pos[ri] = [];
        if (R.lab) s += M(x0 - 10, R.y + 5, R.lab, { fs: 13, a: 'e', t: R.t, fill: INK });
        R.segs.forEach((g, si) => {
          const w = g.v * unit, tg = g.t ?? R.t + .12 * si, fill = colC(g.c);
          pos[ri][si] = [x, w];
          s += `<rect x="${r1(x + 1)}" y="${R.y - 13}" width="${r1(w - 2)}" height="26" rx="5" fill="${g.dash ? '#fff' : fill}" stroke="${g.dash ? RED : INK}" stroke-width="${g.dash ? 2 : 1.4}"${g.dash ? ' stroke-dasharray="4 3"' : ''} ${tt(tg, 'a-grow')}/>`;
          const rl = relabel.find(q => q[0] === ri && q[1] === si), lab = g.lab ?? '';
          const txt = (l, o) => M(x + w / 2, R.y + 5, l, { fs: g.fs || 13, fill: g.dash ? RED : g.c === 'y' || g.c === 'g' || g.c === 'k' || g.c === 'w' ? INK : '#fff', ...o });
          if (rl) s += inout(tg + .2, rl[3], txt(lab)) + txt(rl[2], { t: rl[3] }); else if (lab) s += txt(lab, { t: tg + .2 });
          x += w;
        });
      });
      overlays.forEach(([ri, a, b, t, lab]) => { const x = x0 + a * unit, w = (b - a) * unit, y = rows[ri].y; s += `<g ${tt(t, 'a-fade')}><rect x="${r1(x)}" y="${y - 15}" width="${r1(w)}" height="30" rx="5" fill="#fff" fill-opacity=".85" stroke="${RED}" stroke-width="2.2" stroke-dasharray="5 3"/>${M(x + w / 2, y + 5, lab, { fs: 11.5, fill: RED })}</g>`; });
      strikes.forEach(([ri, si, t]) => { const [x, w] = pos[ri][si], y = rows[ri].y; s += `<g ${tt(t, 'a-fade')}><rect x="${r1(x + 1)}" y="${y - 13}" width="${r1(w - 2)}" height="26" rx="5" fill="#fff" opacity=".75"/><line x1="${r1(x + 3)}" y1="${y + 11}" x2="${r1(x + w - 3)}" y2="${y - 11}" stroke="${RED}" stroke-width="3" stroke-linecap="round"/></g>`; });
      braces.forEach(({ row, a, b, lab, t, below = true, col = UC }) => {
        const xa = x0 + a * unit, xb = x0 + b * unit, m = (xa + xb) / 2, y = rows[row].y + (below ? 17 : -17), d = below ? 1 : -1;
        s += `<g ${tt(t, 'a-fade')}><path d="M${r1(xa)},${y} q0,${5 * d} 5,${5 * d} H${r1(m - 5)} q5,0 5,${5 * d} q0,${-5 * d} 5,${-5 * d} H${r1(xb - 5)} q5,0 5,${-5 * d}" fill="none" stroke="${col}" stroke-width="2"/></g>` + M(m, y + (below ? 25 : -14), lab, { fs: 13, t: t + .1, fill: col === UC ? UC : col });
      });
      vlines.forEach(([v, t, lab]) => { const x = x0 + v * unit; s += line(x, rows[0].y - 22, x, rows[rows.length - 1].y + 22, t, { col: GRN, w: 2, dash: '5 4' }) + (lab ? M(x, rows[0].y - 26, lab, { fs: 11, wt: 7, fill: GRN, t }) : ''); });
      chips.forEach(([x, y, txt, t, st = 'o', fs = 13]) => { s += chip(x, y, txt, t, { fs, st }); });
      add.forEach(b => { s += A.blk(b, []); });
      return { html: scene(h, s), at };
    },
    // monedes de dos tipus
    eCoins({ n, a, b, total, at }) {
      const x = (total - n * b) / (a - b), sp = 19.5, x0 = 160 - (n - 1) * sp / 2, y = 44; let s = '';
      const coin = (cx, v, gold) => `<circle cx="${r1(cx)}" cy="${y}" r="9" fill="${gold ? '#F2C14E' : '#CFC6D8'}" stroke="${INK}" stroke-width="1.6"/>${M(cx, y + 4, v, { fs: 9, wt: 8 })}`;
      for (let i = 0; i < n; i++) { const cx = x0 + i * sp; s += inout(.2 + .04 * i, 3.0 + .05 * i, coin(cx, '?', false), 'a-pop') + `<g ${tt(3.0 + .05 * i)}>${coin(cx, `${i < x ? a : b}€`, i < x)}</g>`; }
      s += M(160, 18, `${n} monedes · ${total} €`, { fs: 12, wt: 7, fill: GRY, t: .2 });
      s += chip(90, 84, `{u|x} de ${a} €`, 1.2, { fs: 13 }) + chip(232, 84, `{u|${n} − x} d'${b} €`, 1.4, { fs: 13 });
      s += A.mrow({ s: `${a}x + (${n} − x) = ${total} → {y|x = ${x}}`, y: 130, fs: 16, t: 2.2 }).svg;
      const xa = x0 - 9, xb = x0 + (x - 1) * sp + 9, xc = x0 + x * sp - 9, xd = x0 + (n - 1) * sp + 9;
      s += `<g ${tt(3.5, 'a-fade')}><path d="M${r1(xa)},${y + 14} q0,5 5,5 H${r1((xa + xb) / 2 - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(xb - 5)} q5,0 5,-5 M${r1(xc)},${y + 14} q0,5 5,5 H${r1((xc + xd) / 2 - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(xd - 5)} q5,0 5,-5" fill="none" stroke="${UC}" stroke-width="2"/></g>`;
      s += chip(160, 180, `${x} × ${a} = ${x * a} · ${n - x} × ${b} = ${(n - x) * b} → ${x * a + (n - x) * b} € ✓`, 3.8, { fs: 12.5, st: 'y' });
      return { html: scene(198, s), at };
    },
    // rectangle amb costats x i x + d i el perímetre desplegat
    eRectP({ w0, d, P, at, u = 16, unit = 9 }) {
      const x = (P - 2 * d) / 4, W = (x + d) * u, H = x * u, rx = 160 - W / 2, ry = 22;
      let s = `<rect x="${r1(rx)}" y="${ry}" width="${r1(W)}" height="${r1(H)}" rx="3" fill="${UC}" fill-opacity=".12" stroke="${INK}" stroke-width="2.4" ${tt(.2, 'a-fade')}/>`;
      s += `<rect x="${r1(rx)}" y="${ry}" width="${r1(W)}" height="${r1(H)}" rx="3" fill="none" stroke="${RED}" stroke-width="4" pathLength="1" ${tt(.6, 'a-draw', 'animation-duration:1s')}/>` + chip(rx + W + 34, ry + 12, `P = ${P}`, 1.0, { fs: 13, st: 'r' });
      const lab = (xx, yy, a, bb, t, t2, anc = 'm') => inout(t, t2, M(xx, yy, a, { fs: 14, a: anc })) + M(xx, yy, `{u|${bb}}`, { fs: 14, t: t2, a: anc });
      s += lab(rx + W / 2, ry - 6, `x + ${d}`, nf(x + d), 1.3, 3.8) + lab(rx + W / 2, ry + H + 17, `x + ${d}`, nf(x + d), 1.4, 3.8) + lab(rx - 7, ry + H / 2 + 5, 'x', nf(x), 1.3, 3.8, 'e') + lab(rx + W + 7, ry + H / 2 + 5, 'x', nf(x), 1.4, 3.8, 's');
      void w0;
      // perímetre desplegat: x | x + d | x | x + d
      const segs = [], by = ry + H + 66;
      const order = [['x', x, 'u'], ['x', x, 'u'], [String(d), d, 'y'], ['x', x, 'u'], ['x', x, 'u'], [String(d), d, 'y']]; void order;
      let bx = 160 - P * unit / 2;
      [['x', x, 'u', 0], ['x', x, 'u', 1], [String(d), d, 'y', 1], ['x', x, 'u', 2], ['x', x, 'u', 3], [String(d), d, 'y', 3]].forEach(([l, v, c, side], i) => {
        const w = v * unit, t = 1.9 + .12 * side;
        s += `<rect x="${r1(bx + 1)}" y="${by - 13}" width="${r1(w - 2)}" height="26" rx="4" fill="${colC(c)}" stroke="${INK}" stroke-width="1.3" ${tt(t, 'a-grow')}/>` + M(bx + w / 2, by + 5, l, { fs: 13, fill: c === 'y' ? INK : '#fff', t: t + .1 });
        bx += w;
      });
      void segs;
      const x0 = 160 - P * unit / 2;
      s += `<g ${tt(2.4, 'a-fade')}><path d="M${r1(x0)},${by - 17} q0,-5 5,-5 H${r1(160 - 5)} q5,0 5,-5 q0,5 5,5 H${r1(x0 + P * unit - 5)} q5,0 5,5" fill="none" stroke="${RED}" stroke-width="2"/></g>` + M(160, by - 30, `${P}`, { fs: 13, fill: RED, t: 2.5 });
      s += chip(160, by + 38, `4x + ${2 * d} = ${P} → 4x = ${P - 2 * d} → x = ${nf(x)}`, 2.9, { fs: 13 });
      return { html: scene(by + 56, s), at };
    },
    // dades que cauen a les seves columnes (freqüència absoluta)
    eFreq({ data, vals, hl, at }) {
      const n = data.length, sp = 26, x0 = 160 - (n - 1) * sp / 2, cx = v => 160 + (vals.indexOf(v) - (vals.length - 1) / 2) * 62, by = 186, cnt = {};
      let s = `<line x1="40" x2="280" y1="${by + 14}" y2="${by + 14}" stroke="${INK}" stroke-width="2" ${tt(.9, 'a-fade')}/>`;
      vals.forEach(v => { s += M(cx(v), by + 32, String(v), { fs: 14, t: .9 }); });
      const card = (x, y, v, f = '#fff', c = INK) => `<rect x="${r1(x - 11)}" y="${r1(y - 11)}" width="22" height="22" rx="6" fill="${f}" stroke="${INK}" stroke-width="1.6"/>${M(x, y + 5, String(v), { fs: 13, fill: c })}`;
      data.forEach((v, i) => {
        const k = cnt[v] = (cnt[v] || 0) + 1, fx = cx(v), fy = by - (k - 1) * 24, sx = x0 + i * sp, sy = 30, t = 1.0 + .14 * i;
        s += `<g opacity=".35" ${tt(.15 + .04 * i, 'a-fade')}>${card(sx, sy, v)}</g>`;
        s += `<g ${tt(.15 + .04 * i, 'a-fade')}>${trm(card(fx, fy, v, v === hl ? UC : '#fff', v === hl ? '#fff' : INK), t, sx - fx, sy - fy, 0, 0, 0, .6)}</g>`;
      });
      const k = cnt[hl], hx = cx(hl);
      s += `<rect x="${hx - 17}" y="${by - (k - 1) * 24 - 17}" width="34" height="${k * 24 + 10}" rx="9" fill="none" stroke="${YEL}" stroke-width="3.5" ${tt(2.5, 'a-fade')}/>` + chip(hx + 62, by - (k - 1) * 12, `${k} vegades`, 2.6, { fs: 13, st: 'y' });
      return { html: scene(224, s), at };
    },
    // gràfics de sectors
    ePie({ pies, chips = [], rows = [], at, h = 210 }) {
      let s = '';
      pies.forEach(Q => {
        const { cx, cy, r, t = 0 } = Q;
        s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="2.2" ${tt(t, 'a-fade')}/>`;
        let a = Q.start || 0;
        (Q.parts || []).forEach(p => {
          const a1 = a + p.v, m = polarP(cx, cy, r * .6, (a + a1) / 2);
          s += `<path d="${sect(cx, cy, r, a, a1)}" fill="${colC(p.c)}" stroke="#fff" stroke-width="2" ${tt(p.t, 'a-fade')}/>`;
          if (p.q) s += inout(p.t, p.tq, M(m[0], m[1] + 5, '?', { fs: 16 })) + M(m[0], m[1] + 5, p.lab, { fs: p.fs || 13, t: p.tq, fill: p.c === 'y' || p.c === 'g' ? INK : '#fff' });
          else if (p.lab) s += M(m[0], m[1] + 5, p.lab, { fs: p.fs || 13, t: p.t + .1, fill: p.c === 'y' || p.c === 'g' || p.c === 'k' ? INK : '#fff' });
          if (p.right) { const u = polarP(cx, cy, 12, a), w = polarP(cx, cy, 12, a1), c2 = [u[0] + w[0] - cx, u[1] + w[1] - cy]; s += `<path d="M${r1(u[0])},${r1(u[1])} L${r1(c2[0])},${r1(c2[1])} L${r1(w[0])},${r1(w[1])}" fill="none" stroke="${INK}" stroke-width="2" ${tt(p.right, 'a-fade')}/>`; }
          a = a1;
        });
        if (Q.slices) {
          const { n, t: ts, fill = 0, ft, col = 'u', dt = .06, from = 0 } = Q.slices, d = 360 / n;
          for (let i = 0; i < fill; i++) s += `<path d="${sect(cx, cy, r, from + i * d, from + (i + 1) * d)}" fill="${colC(col)}" ${tt(ft + dt * i, 'a-fade')}/>`;
          let g = ''; for (let i = 0; i < n; i++) { const p = polarP(cx, cy, r, i * d); g += `<line x1="${cx}" y1="${cy}" x2="${r1(p[0])}" y2="${r1(p[1])}" stroke="${INK}" stroke-opacity=".35" stroke-width=".8"/>`; }
          s += `<g ${tt(ts, 'a-fade')}>${g}</g><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${INK}" stroke-width="2.2"/>`;
        }
      });
      chips.forEach(([x, y, txt, t, st = 'o', fs = 13]) => { s += chip(x, y, txt, t, { fs, st }); });
      rows.forEach(R => { s += A.mrow({ fs: 15, ...R }).svg; });
      return { html: scene(h, s), at };
    },
    // programa pas a pas: la línia que s'executa, les variables (capses) i el que s'escriu
    eCode({ code, x0 = 8, y0 = 10, lh = 22, fs = 12.5, w = 192, vars = [], vx = 262, steps = [], outY, at, add = [], hist, h }) {
      const H = code.length * lh + 12, ly = i => y0 + 6 + lh * (i + 1) - 7;
      let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${H}" rx="10" fill="${INK}" ${tt(.05, 'a-fade')}/>`;
      if (outY != null) s += `<g ${tt(.1, 'a-fade')}><rect x="${x0}" y="${outY - 15}" width="${320 - 2 * x0}" height="30" rx="8" fill="#3A2A48"/><text x="${x0 + 10}" y="${outY + 5}" font-size="14" font-weight="700" fill="${GRY}" ${MONO}>&gt;</text></g>`;
      const st = steps.filter(q => q.l != null && !q.nohl);
      st.forEach((q, i) => { const nx = st[i + 1]; const r = `<rect x="${x0 + 4}" y="${r1(ly(q.l) - lh + 7)}" width="${w - 8}" height="${lh - 2}" rx="5" fill="${UC}" fill-opacity=".55"/>`; s += nx ? inout(q.t, nx.t, r, 'a-fade') : `<g ${tt(q.t, 'a-fade')}>${r}</g>`; });
      code.forEach((c, i) => { s += `<g ${tt(.1 + .05 * i, 'a-fade')}>${codeLine(x0 + 10, ly(i), c, fs)}</g>`; });
      const cur = {}, vy = j => y0 + 22 + j * 52;
      vars.forEach((v, j) => { s += `<g ${tt(.1, 'a-fade')}><text x="${vx - 26}" y="${vy(j) + 5}" text-anchor="end" font-size="15" font-weight="800" fill="${INK}" ${MONO}>${v}</text><rect x="${vx - 20}" y="${vy(j) - 16}" width="64" height="32" rx="8" fill="#fff" stroke="${UC}" stroke-width="2.2"/></g>`; });
      const hv = {};
      steps.forEach((q, i) => {
        Object.entries(q.set || {}).forEach(([v, val]) => {
          const j = vars.indexOf(v), nxt = steps.slice(i + 1).find(r => r.set && v in r.set), el = M(vx + 12, vy(j) + 6, String(val), { fs: 16, fill: UC });
          s += nxt ? inout(q.t, nxt.t, el, 'a-pop') : `<g ${tt(q.t)}>${el}</g>`;
          (hv[v] = hv[v] || []).push([val, q.t]);
          cur[v] = val;
        });
        if (q.note != null) s += `<g ${tt(q.t + .15, 'a-fade')}><text x="${r1(x0 + w - 8)}" y="${r1(ly(q.l))}" text-anchor="end" font-size="${fs - 1}" font-weight="700" fill="#9FE2A8" ${MONO}>${A.esc(q.note)}</text></g>`;
        if (q.mark != null) s += mark(x0 + w + 12, ly(q.l) - 4, q.mark, q.t + .1, 9);
        if (q.skip) s += `<rect x="${x0 + 4}" y="${r1(ly(q.l) - lh + 7)}" width="${w - 8}" height="${lh - 2}" rx="5" fill="${INK}" opacity=".7" ${tt(q.t, 'a-fade')}/>`;
        if (q.out != null) s += `<g ${tt(q.t)}>${codeLine(x0 + 28, outY + 5, q.out, 14)}</g>`;
      });
      if (hist) {
        const [v, hx, hy] = hist, list = hv[v] || []; let str = `${v}: `;
        s += M(hx, hy, str, { fs: 14, a: 's', t: .1, fill: GRY });
        list.forEach(([val, t], k) => { const piece = (k ? ' → ' : '') + val, x = hx + A.mw(str, 14); s += M(x, hy, k === list.length - 1 ? `{u|${piece}}` : piece, { fs: 14, a: 's', t: t + .1 }); str += piece; });
      }
      add.forEach(b => { s += A.blk(b, []); });
      return { html: scene(h || Math.max(y0 + H + 8, (outY || 0) + 20), s), at };
    },
    // circuits: «and» amb interruptors en sèrie, «or» en paral·lel
    eCircuit({ a, b, la, lb, at }) {
      const sw = (x, y, on, t, lab, up = false) => {
        const c = on ? GRN : RED; let g = `<circle cx="${x}" cy="${y}" r="3.5" fill="${INK}"/><circle cx="${x + 30}" cy="${y}" r="3.5" fill="${INK}"/>`;
        g += on ? `<line x1="${x}" y1="${y}" x2="${x + 30}" y2="${y}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>` : `<line x1="${x}" y1="${y}" x2="${x + 26}" y2="${y - 14}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
        g += M(x + 15, up ? y - 16 : y + 22, lab, { fs: 11, fill: c });
        return `<g ${tt(t)}>${g}</g>`;
      };
      const lamp = (x, y, on, t) => `<g ${tt(t)}><circle cx="${x}" cy="${y}" r="13" fill="${on ? YEL : '#E6DEEE'}" stroke="${INK}" stroke-width="2"/>${on ? [0, 45, 90, 135, 180, 225, 270, 315].map(d => { const p = polarP(x, y, 17, d), q = polarP(x, y, 23, d); return `<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(q[0])}" y2="${r1(q[1])}" stroke="#E0A800" stroke-width="2.4" stroke-linecap="round"/>`; }).join('') : ''}</g>`;
      let s = A.mrow({ s: `a = ${a}, b = ${b}`, y: 22, fs: 16, t: .1 }).svg;
      // sèrie (and)
      const y1 = 84; s += M(18, 56, 'and', { fs: 15, a: 's', fill: UC, t: .8 });
      s += `<path d="M20,${y1} H40 M76,${y1} H100 M136,${y1} H148" stroke="${INK}" stroke-width="2.4" fill="none" ${tt(.8, 'a-fade')}/>` + sw(40, y1, a > 4, 1.0, la) + sw(100, y1, b > 4, 1.3, lb) + lamp(162, y1, a > 4 && b > 4, 1.8);
      s += chip(250, y1 + 4, `→ {${a > 4 && b > 4 ? 'g' : 'r'}|${a > 4 && b > 4 ? 'True' : 'False'}}`, 2.0, { fs: 14 });
      // paral·lel (or)
      const y2 = 150, y3 = 196; s += M(18, 134, 'or', { fs: 15, a: 's', fill: UC, t: 2.6 });
      s += `<path d="M20,${(y2 + y3) / 2} H40 V${y2} H70 M100,${y2} H130 V${(y2 + y3) / 2} H148 M40,${y2} V${y3} H70 M100,${y3} H130 V${(y2 + y3) / 2}" stroke="${INK}" stroke-width="2.4" fill="none" ${tt(2.6, 'a-fade')}/>` + sw(70, y2, a > 4, 2.7, la, true) + sw(70, y3, b > 4, 2.8, lb) + lamp(162, (y2 + y3) / 2, a > 4 || b > 4, 3.2);
      s += chip(250, (y2 + y3) / 2 + 4, `→ {${a > 4 || b > 4 ? 'g' : 'r'}|${a > 4 || b > 4 ? 'True' : 'False'}}`, 3.3, { fs: 14 });
      return { html: scene(224, s), at };
    }
  });
})();
(() => {
  const A = AE, { M, chip, chipW, rect, tt, inout, out, line, dot, mark, ic, mrow, NL, PL, curve, trm, arrowHead, UC, RED, GRN, INK, LN, GRY, YEL, nf, sg, r1, scene } = A;
  const pts = a => a.map(v => v.map(r1).join(',')).join(' ');
  const rad = d => d * Math.PI / 180, P = (V, r, a) => [V[0] + r * Math.cos(rad(a)), V[1] - r * Math.sin(rad(a))];
  const tick = (p, q, n, t) => { const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], L = Math.hypot(q[0] - p[0], q[1] - p[1]), ux = (q[0] - p[0]) / L, uy = (q[1] - p[1]) / L; let g = ''; for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 4; g += `<line x1="${r1(m[0] + ux * o - uy * 6)}" y1="${r1(m[1] + uy * o + ux * 6)}" x2="${r1(m[0] + ux * o + uy * 6)}" y2="${r1(m[1] + uy * o - ux * 6)}" stroke="${RED}" stroke-width="2.2" stroke-linecap="round"/>`; } return `<g ${tt(t, 'a-fade')}>${g}</g>`; };
  const angArc = (V, r, s0, d, col, t, lab, lr) => { const p = P(V, r, s0), q = P(V, r, s0 + d), m = P(V, lr || r + 13, s0 + d / 2); return `<g ${tt(t, 'a-fade')}><path d="M${r1(V[0])},${r1(V[1])} L${r1(p[0])},${r1(p[1])} A${r},${r} 0 ${d > 180 ? 1 : 0} 0 ${r1(q[0])},${r1(q[1])} Z" fill="${col}" fill-opacity=".85" stroke="${INK}" stroke-width="1.2"/></g>` + (lab ? M(m[0], m[1] + 4, lab, { fs: 12, t: t + .1 }) : ''); };
  const cards = (x0, y, vals, t, sp = 36) => vals.map((v, i) => `<g ${tt(t + .06 * i)}><rect x="${x0 + i * sp}" y="${y - 22}" width="30" height="34" rx="7" fill="#fff" stroke="${INK}" stroke-width="2"/>${M(x0 + i * sp + 15, y + 2, nf(v), { fs: 16 })}</g>`).join('');
  const hlCard = (x0, y, i, v, t, col = UC, sp = 36) => `<g ${tt(t, 'a-fade')}><rect x="${x0 + i * sp}" y="${y - 22}" width="30" height="34" rx="7" fill="${col}" stroke="${INK}" stroke-width="2"/>${M(x0 + i * sp + 15, y + 2, nf(v), { fs: 16, fill: col === YEL ? INK : '#fff' })}</g>`;
  const brace = (xa, xb, y, t, lab, col = UC, up = false) => { const m = (xa + xb) / 2, d = up ? -1 : 1; return `<g ${tt(t, 'a-fade')}><path d="M${r1(xa)},${y} q0,${5 * d} 5,${5 * d} H${r1(m - 5)} q5,0 5,${5 * d} q0,${-5 * d} 5,${-5 * d} H${r1(xb - 5)} q5,0 5,${-5 * d}" fill="none" stroke="${col}" stroke-width="2"/></g>` + (lab ? M(m, y + (up ? -16 : 26), lab, { fs: 12.5, t: t + .1, fill: col === UC ? UC : col }) : ''); };
  // generador pseudoaleatori fix (sempre el mateix dibuix)
  const rng = seed => () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  Object.assign(SCN, {
    // complementari (90°) i suplementari (180°)
    eAngles({ a, at }) {
      const V1 = [40, 150], V2 = [205, 150], R = 34; let s = '';
      s += line(V1[0], V1[1], V1[0] + 110, V1[1], .2, { w: 3 }) + line(V1[0], V1[1], V1[0], V1[1] - 110, .3, { w: 3 }) + `<path d="M${V1[0] + 12},${V1[1]} v-12 h-12" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(.4, 'a-fade')}/>`;
      const q1 = P(V1, 115, a); s += line(V1[0], V1[1], q1[0], q1[1], .6, { w: 3, col: UC });
      s += angArc(V1, R, 0, a, UC, .9, a + '°', 50) + angArc(V1, R + 12, a, 90 - a, YEL, 1.3, `{r|${90 - a}°}`, 64);
      s += chip(78, 188, `${a}° + {r|${90 - a}°} = 90°`, 1.6, { fs: 11.5 });
      s += line(V2[0] - 100, V2[1], V2[0] + 100, V2[1], 2.2, { w: 3 });
      const q2 = P(V2, 105, a); s += line(V2[0], V2[1], q2[0], q2[1], 2.4, { w: 3, col: UC });
      s += angArc(V2, R, 0, a, UC, 2.7, a + '°', 52) + angArc(V2, R - 8, a, 180 - a, YEL, 3.1, `{r|${180 - a}°}`, 46);
      s += chip(V2[0] + 20, 188, `${a}° + {r|${180 - a}°} = 180°`, 3.4, { fs: 11.5 });
      return { html: scene(200, s), at };
    },
    // triangle isòsceles (costats) i triangle rectangle (angles)
    eTriClass({ at }) {
      let s = ''; const u = 16;
      // 5, 5 i 7
      const B0 = [22, 118], B1 = [22 + 7 * u, 118], hh = Math.sqrt(25 - 12.25) * u, T0 = [22 + 3.5 * u, 118 - hh];
      s += `<polygon points="${pts([B0, B1, T0])}" fill="${UC}" fill-opacity=".15" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" ${tt(.2, 'a-fade')}/>`;
      s += M((B0[0] + T0[0]) / 2 - 12, (B0[1] + T0[1]) / 2, '5', { fs: 13, t: .4 }) + M((B1[0] + T0[0]) / 2 + 12, (B1[1] + T0[1]) / 2, '5', { fs: 13, t: .4 }) + M((B0[0] + B1[0]) / 2, 136, '7', { fs: 13, t: .4 });
      s += tick(B0, T0, 1, .9) + tick(B1, T0, 1, 1.0) + chip(78, 164, 'isòsceles', 1.3, { fs: 13, st: 'f' });
      // 30°, 60° i 90°
      const C = [182, 132], L = 118, A0 = C, A1 = [C[0] + L, C[1]], A2 = [C[0] + L, C[1] - L * Math.tan(rad(30))];
      s += `<polygon points="${pts([A0, A1, A2])}" fill="${YEL}" fill-opacity=".2" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" ${tt(1.8, 'a-fade')}/>`;
      s += `<path d="M${r1(A1[0] - 12)},${A1[1]} v-12 h12" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(2.2, 'a-fade')}/>` + M(A1[0] - 20, A1[1] - 18, '90°', { fs: 12, t: 2.2, a: 'e' });
      s += M(A0[0] + 40, A0[1] - 6, '30°', { fs: 12, t: 2.1 }) + M(A2[0] - 14, A2[1] + 26, '60°', { fs: 12, t: 2.1, a: 'e' });
      s += chip(C[0] + 60, 164, 'rectangle', 2.8, { fs: 13, st: 'f' });
      return { html: scene(180, s), at };
    },
    // rombe: 4 costats iguals, cap angle recte
    eRhombus({ at }) {
      const c = [150, 96], a = 60, sd = 88, p0 = [c[0] - sd * Math.cos(rad(a / 2)), c[1]], p1 = [c[0], c[1] - sd * Math.sin(rad(a / 2))], p2 = [c[0] + sd * Math.cos(rad(a / 2)), c[1]], p3 = [c[0], c[1] + sd * Math.sin(rad(a / 2))];
      let s = `<polygon points="${pts([p0, p1, p2, p3])}" fill="${UC}" fill-opacity=".15" stroke="${INK}" stroke-width="2.8" stroke-linejoin="round" ${tt(.2, 'a-fade')}/>`;
      [[p0, p1], [p1, p2], [p2, p3], [p3, p0]].forEach(([p, q], i) => { s += tick(p, q, 1, .7 + .15 * i); });
      s += angArc(p0, 20, -a / 2, a, YEL, 1.5, '60°', 36) + angArc(p1, 16, 180 + a / 2, 180 - a, '#5FC98B', 1.7, '120°', 32);
      s += chip(262, 60, 'cap angle de 90°', 1.9, { fs: 11.5, st: 'r' });
      // quadrat al costat, descartat
      s += `<g ${tt(1.2, 'a-fade')}><rect x="24" y="150" width="40" height="40" fill="#fff" stroke="${GRY}" stroke-width="2"/><path d="M24,162 h12 v-12" fill="none" stroke="${GRY}" stroke-width="1.5"/></g>` + A.inout(1.2, 2.4, M(44, 206, 'quadrat?', { fs: 11, wt: 7, fill: GRY })) + `<line x1="18" y1="194" x2="70" y2="146" stroke="${RED}" stroke-width="3" ${tt(2.3, 'a-fade')}/>`;
      s += chip(150, 196, 'és un {u|rombe}', 2.6, { fs: 15, st: 'y' });
      return { html: scene(214, s), at };
    },
    // polígon de n costats: triangles des d'un vèrtex i angle de cada vèrtex
    ePolyAngles({ n, at }) {
      const c = [104, 108], R = 84, V = Array.from({ length: n }, (_, i) => P(c, R, 90 + 180 / n + 360 * i / n)), cl = [UC, YEL, '#5FC98B', '#FF8FB1', '#36A9E1', '#FF9A3C'];
      let s = `<polygon points="${pts(V)}" fill="#fff" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" ${tt(.1, 'a-fade')}/>`;
      for (let k = 1; k < n - 1; k++) { const tk = .5 + .35 * (k - 1), g = [V[0], V[k], V[k + 1]], m = [(g[0][0] + g[1][0] + g[2][0]) / 3, (g[0][1] + g[1][1] + g[2][1]) / 3]; s += `<polygon points="${pts(g)}" fill="${cl[(k - 1) % cl.length]}" fill-opacity=".75" stroke="${INK}" stroke-width="1.6" ${tt(tk, 'a-fade')}/>` + M(m[0], m[1] + 4, '180°', { fs: 11, t: tk + .1, fill: INK }); }
      s += chip(250, 70, `${n - 2} × 180° = {u|${(n - 2) * 180}°}`, .5 + .35 * (n - 2) + .1, { fs: 13 });
      const ai = (n - 2) * 180 / n, t2 = 2.6;
      V.forEach((v, i) => { const prev = V[(i - 1 + n) % n], dir = Math.atan2(-(prev[1] - v[1]), prev[0] - v[0]) * 180 / Math.PI; s += `<path d="M${r1(v[0])},${r1(v[1])} L${r1(P(v, 13, dir)[0])},${r1(P(v, 13, dir)[1])} A13,13 0 0 1 ${r1(P(v, 13, dir - ai)[0])},${r1(P(v, 13, dir - ai)[1])} Z" fill="${RED}" fill-opacity=".8" ${tt(t2 + .08 * i, 'a-fade')}/>`; });
      s += chip(250, 130, `${(n - 2) * 180}° ÷ ${n} = {u|${nf(ai)}°}`, t2 + .6, { fs: 13, st: 'y' });
      return { html: scene(200, s), at };
    },
    // freqüències acumulades com a barres que s'apilen
    eCumFreq({ vals, freq, more, at }) {
      const cl = [UC, YEL, '#9B8CF0', '#FF8FB1'], tot = freq.reduce((a, b) => a + b, 0), u = 150 / tot, bw = 34, x0 = 128, by = 180, X = i => x0 + i * 46;
      let s = `<g ${tt(.1, 'a-fade')}><rect x="10" y="20" width="96" height="${24 + 24 * vals.length}" rx="8" fill="#fff" stroke="${LN}" stroke-width="2"/><line x1="58" x2="58" y1="20" y2="${44 + 24 * vals.length}" stroke="${LN}" stroke-width="2"/><line x1="10" x2="106" y1="44" y2="44" stroke="${LN}" stroke-width="2"/></g>` + M(34, 37, 'germ.', { fs: 11, wt: 7, fill: GRY, t: .1 }) + M(82, 37, 'freq.', { fs: 11, wt: 7, fill: GRY, t: .1 });
      vals.forEach((v, i) => { s += M(34, 62 + 24 * i, String(v), { fs: 14, t: .2 + .1 * i }) + M(82, 62 + 24 * i, String(freq[i]), { fs: 14, t: .2 + .1 * i, fill: INK }) + `<rect x="64" y="${50 + 24 * i}" width="12" height="12" rx="3" fill="${cl[i]}" ${tt(.2 + .1 * i)}/>`; });
      s += `<line x1="${x0 - 8}" x2="${X(vals.length - 1) + bw + 8}" y1="${by}" y2="${by}" stroke="${INK}" stroke-width="2" ${tt(.6, 'a-fade')}/>`;
      let acc = 0;
      vals.forEach((v, i) => {
        const t = .9 + .4 * i; let y = by;
        for (let j = 0; j <= i; j++) { const hh = freq[j] * u; s += `<rect x="${X(i)}" y="${r1(y - hh)}" width="${bw}" height="${r1(hh - 1)}" rx="3" fill="${cl[j]}" ${tt(t + (j === i ? .15 : 0), j === i ? 'ae-gy' : 'a-fade')}/>`; y -= hh; }
        acc += freq[i];
        s += M(X(i) + bw / 2, y - 6, String(acc), { fs: 14, t: t + .3 }) + M(X(i) + bw / 2, by + 16, `≤ ${v}`, { fs: 12, wt: 7, fill: GRY, t });
      });
      // més de «more»: el que queda per sobre de l'acumulada de «more»
      const k = vals.indexOf(more), cm = freq.slice(0, k + 1).reduce((a, b) => a + b, 0), xl = X(vals.length - 1);
      s += `<rect x="${xl - 3}" y="${r1(by - tot * u - 3)}" width="${bw + 6}" height="${r1((tot - cm) * u + 4)}" rx="5" fill="none" stroke="${RED}" stroke-width="3" ${tt(2.8, 'a-fade')}/>` + chip(xl - 30, by + 36, `més de ${more}: ${tot} − ${cm} = {r|${tot - cm}}`, 3.0, { fs: 12.5, st: 'r' });
      return { html: scene(228, s), at };
    },
    // punts sobre rectes numèriques: rang (i mitjana) de cada sèrie
    eDots({ a, b, lab = 1, series, mean, unit = '', at, h, chips = [] }) {
      let s = '';
      series.forEach(S => {
        const N = NL({ y: S.y, a, b, tick: 1, lab, t: S.t, x0: 44, x1: 296, fs: 11 }), cnt = {}; s += N.s;
        if (S.name) s += M(30, S.y + 5, S.name, { fs: 15, t: S.t, fill: UC });
        S.data.forEach((v, i) => { const k = cnt[v] = (cnt[v] || 0) + 1, ex = v === Math.min(...S.data) || v === Math.max(...S.data); s += dot(N.X(v), S.y - 12 - (k - 1) * 13, S.t + .2 + .12 * i, { r: 5.5, fill: ex && S.rt ? RED : UC }); });
        if (S.rt != null) { const mn = Math.min(...S.data), mx = Math.max(...S.data); s += `<g ${tt(S.rt, 'a-fade')}><path d="M${r1(N.X(mn))},${S.y + 30} v6 H${r1(N.X(mx))} v-6" fill="none" stroke="${RED}" stroke-width="2.2"/></g>` + M((N.X(mn) + N.X(mx)) / 2, S.y + 50, S.rl || `${mx} − ${mn} = ${mx - mn}${unit}`, { fs: 13, fill: RED, t: S.rt + .1 }); }
      });
      chips.forEach(([x, y, txt, t, st = 'o', fs = 13]) => { s += chip(x, y, txt, t, { fs, st }); });
      if (mean) { const X = v => 44 + (v - a) / (b - a) * 252; s += line(X(mean.v), series[0].y - 50, X(mean.v), series[series.length - 1].y + 8, mean.t, { col: GRN, w: 2, dash: '5 4' }) + M(X(mean.v), series[0].y - 54, `mitjana ${nf(mean.v)}`, { fs: 11, wt: 7, fill: GRN, t: mean.t }); }
      return { html: scene(h, s), at };
    },
    // preu per unitat de dos paquets
    eUnitCmp({ packs, at, u = ' €' }) {
      let s = ''; const cup = (x, y, t) => `<g ${tt(t)}><path d="M${x - 8},${y - 12} h16 l-2,22 h-12 Z" fill="#fff" stroke="${INK}" stroke-width="1.6"/><rect x="${x - 9}" y="${y - 15}" width="18" height="5" rx="2" fill="${UC}"/></g>`;
      packs.forEach(([n, p], i) => {
        const y = 36 + i * 66, t = .2 + 1.2 * i, one = p / n;
        for (let k = 0; k < n; k++) s += cup(22 + k * 22, y, t + .05 * k);
        s += M(22 + n * 22 + 6, y + 5, `= ${nf(p, 2)}${u}`, { fs: 15, a: 's', t: t + .3 });
        s += chip(262, y + 4, `÷ ${n} = {u|${nf(one, 2)}${u}}`, t + .7, { fs: 13 });
      });
      // comparació d'una unitat
      const W = 300, mx = Math.max(...packs.map(([n, p]) => p / n)), bu = 170 / mx;
      packs.forEach(([n, p], i) => { const one = p / n, y = 168 + i * 26, best = one === Math.min(...packs.map(([a, b]) => b / a)); s += M(70, y + 5, `paquet de ${n}`, { fs: 10.5, wt: 7, fill: GRY, a: 'e', t: 2.6 }) + `<rect x="76" y="${y - 9}" width="${r1(one * bu)}" height="18" rx="4" fill="${best ? GRN : RED}" ${tt(2.7 + .2 * i, 'a-grow')}/>` + M(80 + one * bu, y + 5, `${nf(one, 2)}${u}`, { fs: 12, a: 's', t: 2.9 }) + (best ? mark(80 + one * bu + 52, y, true, 3.3, 9) : ''); });
      void W;
      return { html: scene(208, s), at };
    },
    // taula d'edats en diversos moments
    eAgeTable({ cols, rows, ratios = [], eq, tr, at, res, cw = 86, h = 218 }) {
      const x0 = 320 - cols.length * cw - 8, y0 = 22, rh = 40; let s = '';
      s += `<g ${tt(.1, 'a-fade')}>` + cols.map((c, j) => M(x0 + j * cw + cw / 2, y0, c, { fs: 11.5, wt: 7, fill: GRY })).join('') + '</g>';
      rows.forEach((R, i) => {
        const y = y0 + 18 + i * rh; s += M(x0 - 8, y + 20, R.name, { fs: 13, a: 'e', t: .2, fill: INK });
        R.ex.forEach((e, j) => {
          const cx = x0 + j * cw + cw / 2, box = `<rect x="${cx - 38}" y="${y + 2}" width="76" height="28" rx="7" fill="${i ? '#FFF6DA' : '#F3ECF8'}" stroke="${i ? '#E0A800' : UC}" stroke-width="1.8"/>`;
          s += `<g ${tt(.3 + .15 * j + .1 * i, 'a-fade')}>${box}</g>` + (R.v ? inout(.4 + .15 * j + .1 * i, tr, M(cx, y + 21, e, { fs: 14 })) + M(cx, y + 21, `{u|${R.v[j]}}`, { fs: 15, t: tr + .1 * j }) : M(cx, y + 21, e, { fs: 14, t: .4 + .15 * j }));
        });
      });
      ratios.forEach(([j, lab, t]) => { const cx = x0 + j * cw + cw / 2; s += chip(cx, y0 + 18 + rows.length * rh + 18, lab, t, { fs: 12.5, st: 'r' }); });
      (eq || []).forEach(([txt, y, t, fs = 14]) => { s += A.mrow({ s: txt, y, fs, t }).svg; });
      if (res) s += chip(160, res[1], res[0], res[2], { fs: 13, st: 'y' });
      return { html: scene(h, s), at };
    },
    // quartils amb les dades ordenades
    eQuart({ d, at }) {
      const n = d.length, sp = 38, x0 = 160 - (n * sp - 8) / 2, y = 64, mi = (n - 1) / 2, lo = d.slice(0, mi), hi = d.slice(mi + 1);
      let s = cards(x0, y, d, .2, sp);
      s += hlCard(x0, y, mi, d[mi], 1.1, UC, sp) + chip(x0 + mi * sp + 15, y - 36, `Me = ${nf(d[mi])}`, 1.2, { fs: 12.5 });
      const q1i = (lo.length - 1) / 2, q3i = mi + 1 + (hi.length - 1) / 2;
      s += brace(x0, x0 + mi * sp - 8, y + 18, 1.7, 'meitat de sota', GRY) + brace(x0 + (mi + 1) * sp, x0 + n * sp - 8, y + 18, 1.7, 'meitat de dalt', GRY);
      s += hlCard(x0, y, q1i, d[q1i], 2.2, YEL, sp) + hlCard(x0, y, q3i, d[q3i], 2.4, YEL, sp) + chip(x0 + q1i * sp + 15, y + 72, `Q1 = ${nf(d[q1i])}`, 2.3, { fs: 12.5, st: 'y' }) + chip(x0 + q3i * sp + 15, y + 72, `Q3 = ${nf(d[q3i])}`, 2.5, { fs: 12.5, st: 'y' });
      s += `<g ${tt(3.1, 'a-fade')}><path d="M${r1(x0 + q1i * sp + 15)},${y + 88} v10 H${r1(x0 + q3i * sp + 15)} v-10" fill="none" stroke="${RED}" stroke-width="2.4"/></g>` + chip(160, y + 126, `${nf(d[q3i])} − ${nf(d[q1i])} = {r|${nf(d[q3i] - d[q1i])}}`, 3.2, { fs: 14 });
      return { html: scene(206, s), at };
    },
    // diagrama de caixa
    eBox({ q1, me, q3, a, b, at }) {
      const N = NL({ y: 170, a, b, tick: 1, lab: 1, t: .1, x0: 30, x1: 290, big: [q1, me, q3] }), X = N.X, y0 = 76, y1 = 136;
      let s = N.s + `<rect x="${r1(X(q1))}" y="${y0}" width="${r1(X(q3) - X(q1))}" height="${y1 - y0}" rx="4" fill="${UC}" fill-opacity=".25" stroke="${INK}" stroke-width="2.4" ${tt(.4, 'a-grow')}/>`;
      s += line(X(me), y0, X(me), y1, 1.0, { w: 4, col: RED }) + M(X(me), y1 + 16, `Me = ${nf(me)}`, { fs: 12, fill: RED, t: 1.0 });
      s += M(X(q1), y0 - 8, `Q1 = ${nf(q1)}`, { fs: 12, t: .6 }) + M(X(q3), y0 - 8, `Q3 = ${nf(q3)}`, { fs: 12, t: .6 });
      [q1, q3].forEach(v => { s += line(X(v), y1, X(v), 164, .6, { col: GRY, w: 1.4, dash: '3 3' }); });
      s += chip((X(q1) + X(q3)) / 2, (y0 + y1) / 2 + 12, '50 %', 1.9, { fs: 15, st: 'f' });
      s += `<rect x="30" y="${y0}" width="${r1(X(q1) - 30)}" height="${y1 - y0}" rx="4" fill="${YEL}" fill-opacity=".4" ${tt(2.7, 'a-fade')}/>` + chip((30 + X(q1)) / 2, (y0 + y1) / 2 + 12, '25 %', 2.8, { fs: 14, st: 'y' });
      s += `<rect x="${r1(X(q3))}" y="${y0}" width="${r1(290 - X(q3))}" height="${y1 - y0}" rx="4" fill="${YEL}" fill-opacity=".4" ${tt(2.9, 'a-fade')}/>` + chip((X(q3) + 290) / 2, (y0 + y1) / 2 + 12, '25 %', 3.0, { fs: 14, st: 'y' });
      return { html: scene(200, s), at };
    },
    // variància com a quadrats de les distàncies a la mitjana
    eVariance({ d, a, b, at }) {
      const n = d.length, m = d.reduce((x, y) => x + y, 0) / n, N = NL({ y: 176, a, b, tick: 1, lab: 1, t: .1, x0: 30, x1: 250, big: [m] }), X = N.X, u = X(1) - X(0), cnt = {};
      let s = N.s;
      d.forEach((v, i) => { const k = cnt[v] = (cnt[v] || 0) + 1; s += dot(X(v), 176 - 12 - (k - 1) * 13, .3 + .15 * i, { r: 6 }); });
      s += line(X(m), 40, X(m), 190, .9, { col: GRN, w: 2.2, dash: '5 4' }) + M(X(m), 34, `mitjana ${nf(m)}`, { fs: 11.5, wt: 7, fill: GRN, t: .9 });
      let v2 = 0; const tq = 1.5;
      d.forEach((v, i) => { const dv = v - m; v2 += dv * dv; if (!dv) return; const x0 = Math.min(X(v), X(m)), sz = Math.abs(dv) * u; s += `<rect x="${r1(x0)}" y="${r1(176 - 30 - sz)}" width="${r1(sz)}" height="${r1(sz)}" fill="${dv < 0 ? RED : UC}" fill-opacity=".35" stroke="${dv < 0 ? RED : UC}" stroke-width="2" ${tt(tq + .3 * i, 'ae-gy')}/>` + M(x0 + sz / 2, 176 - 30 - sz / 2 + 5, `(${sg(dv)})² = ${dv * dv}`, { fs: 11.5, t: tq + .3 * i + .2 }); });
      const vr = v2 / n, sd = Math.sqrt(vr);
      s += chip(160, 214, `(${d.map(v => `${nf((v - m) ** 2)}`).join(' + ')}) ÷ ${n} = {u|${nf(vr)}}`, 2.6, { fs: 12.5 });
      const sx = 268, ss = sd * u; s += `<rect x="${r1(sx)}" y="${r1(146 - ss)}" width="${r1(ss)}" height="${r1(ss)}" fill="${YEL}" stroke="${INK}" stroke-width="1.8" ${tt(3.3, 'ae-gy')}/>` + M(sx + ss / 2, 146 - ss / 2 + 5, nf(vr), { fs: 12, t: 3.4 }) + M(sx + ss / 2, 162, `σ ≈ ${nf(Math.round(sd * 100) / 100)}`, { fs: 11.5, fill: UC, t: 3.6 });
      return { html: scene(228, s), at };
    },
    // tres gràfiques: paràbola, recta i hipèrbola
    eFnTypes({ at }) {
      let s = ''; const labs = ['paràbola', 'lineal', 'prop. inversa'], fs = [x => x * x - 2, x => .7 * x + .5, x => 1.5 / x];
      [0, 1, 2].forEach(i => {
        const t = .3 + 1.0 * i, P = PL({ x0: 12 + i * 104, y0: 30, xr: [-3, 3], yr: [-3, 3], u: 14.5, t, lx: 9, ly: 9, names: false });
        s += P.s + (i === 2 ? curve(P, fs[i], t + .2, { dur: .6, from: .01, to: 3, n: 200 }) + curve(P, fs[i], t + .5, { dur: .6, from: -3, to: -.01, n: 200 }) : curve(P, fs[i], t + .2, { dur: .8 }));
        s += chip(12 + i * 104 + 43.5, 146, labs[i], t + .6, { fs: 12, st: i === 2 ? 'y' : 'o' });
        s += M(12 + i * 104 + 43.5, 170, ['forma de U', 'línia recta', 'dues branques'][i], { fs: 11, wt: 7, fill: GRY, t: t + .5 });
      });
      return { html: scene(182, s), at };
    },
    // núvols de punts amb una correlació r exacta
    eScatter({ plots, at, h }) {
      let s = '';
      plots.forEach(Q => {
        const { x, y, w = 92, hh = 92, r, t, lab, xl, yl, n = 14, seed = 7, arrow } = Q, R = rng(seed);
        let z1 = Array.from({ length: n }, (_, i) => i - (n - 1) / 2 + (R() - .5) * .8), z2 = Array.from({ length: n }, () => R() - .5);
        const mean = v => v.reduce((a, b) => a + b, 0) / v.length, cen = v => { const m = mean(v); return v.map(q => q - m); }, dotp = (u, v) => u.reduce((a, q, i) => a + q * v[i], 0);
        z1 = cen(z1); z2 = cen(z2); const k = dotp(z2, z1) / dotp(z1, z1); z2 = z2.map((q, i) => q - k * z1[i]);
        const nrm = v => { const L = Math.sqrt(dotp(v, v) / v.length); return v.map(q => q / L); }; z1 = nrm(z1); z2 = nrm(z2);
        const ys = z1.map((q, i) => r * q + Math.sqrt(1 - r * r) * z2[i]);
        const X = v => x + 8 + (v + 2.1) / 4.2 * (w - 16), Y = v => y + hh - 8 - (v + 2.6) / 5.2 * (hh - 16);
        s += `<g ${tt(t, 'a-fade')}><rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="6" fill="#fff" stroke="${LN}" stroke-width="2"/><path d="M${x + 4},${y + 6} V${y + hh - 4} H${x + w - 4}" fill="none" stroke="${INK}" stroke-width="1.6"/></g>`;
        z1.forEach((q, i) => { s += dot(X(q), Y(ys[i]), t + .2 + .04 * i, { r: 3.6 }); });
        if (arrow) s += `<g ${tt(t + .9, 'a-fade')}>${line(X(-1.9), Y(r * -1.9), X(1.9), Y(r * 1.9), null, { col: arrow === 'r' ? RED : GRN, w: 2.6 })}${arrowHead(X(1.9), Y(r * 1.9), Math.atan2(Y(r * 1.9) - Y(r * -1.9), X(1.9) - X(-1.9)), 8, arrow === 'r' ? RED : GRN)}</g>`;
        if (xl) s += M(x + w / 2, y + hh + 14, xl, { fs: 10.5, wt: 7, fill: GRY, t });
        if (yl) s += `<g ${tt(t, 'a-fade')}>${M(x - 6, y + hh / 2, yl, { fs: 10.5, wt: 7, fill: GRY })}</g>`.replace('<text', `<text transform="rotate(-90 ${x - 6} ${y + hh / 2})"`);
        if (lab) s += chip(x + w / 2, y + hh + (xl ? 38 : 20), lab, t + 1.0, { fs: 12, st: Q.st || 'o' });
      });
      return { html: scene(h, s), at };
    },
    // simulació: la freqüència relativa de sisos s'acosta a 1/6
    eSim({ n = 6000, step = 100, seed = 2026, at }) {
      const R = rng(seed); let six = 0; const ptsv = [];
      for (let i = 1; i <= n; i++) { if (Math.floor(R() * 6) + 1 === 6) six++; if (i % step === 0) ptsv.push([i, six / i]); }
      const P = PL({ x0: 44, y0: 30, xr: [0, 6], yr: [0, 3], ux: 40, uy: 40, t: .1, lx: 99, ly: 99, names: false, fs: 9.5 });
      const X = v => P.X(v / 1000), Y = v => P.Y(v * 10);
      let s = P.s;
      for (let k = 1; k <= 6; k++) s += M(P.X(k), P.oy + 14, nf(k * 1000), { fs: 9.5, wt: 7, fill: GRY, t: .1 });
      for (let k = 1; k <= 3; k++) s += M(P.ox - 5, P.Y(k) + 4, nf(k / 10), { fs: 9.5, wt: 7, fill: GRY, a: 'e', t: .1 });
      let d = ''; ptsv.forEach(([i, f], k) => { d += `${k ? 'L' : 'M'}${r1(X(i))},${r1(Y(f))} `; });
      s += `<path d="${d}" fill="none" stroke="${UC}" stroke-width="2.4" stroke-linejoin="round" pathLength="1" ${tt(.3, 'a-draw', 'animation-duration:1.6s;animation-timing-function:linear')}/>`;
      s += line(P.x0, Y(1 / 6), P.x0 + P.W, Y(1 / 6), 2.0, { col: RED, w: 2, dash: '6 4' }) + chip(P.x0 + P.W - 30, Y(1 / 6) - 14, '[1/6]', 2.1, { fs: 12, st: 'r' });
      s += M(P.x0 + P.W / 2, P.y0 + P.H + 30, 'tirades', { fs: 11, wt: 7, fill: GRY, t: .1 }) + M(P.x0 + 4, 16, 'freqüència relativa de sisos', { fs: 11, wt: 7, fill: GRY, a: 's', t: .1 });
      s += chip(160, 214, `esperats 1.000 · han sortit {u|${nf(six)}}`, 3.0, { fs: 13, st: 'y' });
      return { html: scene(226, s), at };
    },
    // barres apilades (capital, interessos, depreciació…)
    eStack({ cols, scale, by = 186, bw = 40, at, chips = [], refs = [], h = 214 }) {
      let s = `<line x1="10" x2="310" y1="${by}" y2="${by}" stroke="${INK}" stroke-width="2" ${tt(.05, 'a-fade')}/>`;
      cols.forEach(C => {
        let y = by;
        if (C.base) { s += `<rect x="${C.x}" y="${y - C.base[0]}" width="${bw}" height="${C.base[0] - 1}" rx="4" fill="${UC}" ${tt(C.t, 'ae-gy')}/>` + M(C.x + bw / 2, y - C.base[0] / 2 + 5, C.base[1], { fs: 11, fill: '#fff', t: C.t + .1 }) + `<path d="M${C.x - 3},${y - C.base[0] + 12} l${bw + 6},-6 M${C.x - 3},${y - C.base[0] + 18} l${bw + 6},-6" stroke="#fff" stroke-width="3" ${tt(C.t, 'a-fade')}/>`; y -= C.base[0]; }
        (C.segs || []).forEach(g => { const hh = g.v * (C.scale ?? scale); s += `<rect x="${C.x}" y="${r1(y - hh)}" width="${bw}" height="${r1(Math.max(1.5, hh - 1))}" rx="3" fill="${g.c === 'r' ? RED : g.c === 'u' ? UC : g.c === 'g' ? '#5FC98B' : YEL}" stroke="${INK}" stroke-width=".8" ${tt(g.t ?? C.t, 'ae-gy')}/>` + (g.lab ? M(C.x + bw / 2, y - hh / 2 + 4, g.lab, { fs: 10.5, t: (g.t ?? C.t) + .1, fill: g.c === 'u' || g.c === 'r' ? '#fff' : INK }) : ''); y -= hh; });
        if (C.top) s += M(C.x + bw / 2, y - 6, C.top, { fs: 12, t: C.tt ?? C.t + .3 });
        if (C.lab) s += M(C.x + bw / 2, by + 15, C.lab, { fs: 11, wt: 7, fill: GRY, t: C.t });
      });
      refs.forEach(([v, t, lab, x0 = 10, x1 = 310, la = 'e']) => { const y = by - v * scale; s += line(x0, y, x1, y, t, { col: RED, w: 2, dash: '6 4' }) + (lab ? M(la === 's' ? x0 + 2 : x1, y - 5, lab, { fs: 11, wt: 7, fill: RED, a: la, t }) : ''); });
      chips.forEach(([x, y, txt, t, st = 'o', fs = 12.5]) => { s += chip(x, y, txt, t, { fs, st }); });
      return { html: scene(h, s), at };
    },
    // conjunts de nombres niats: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ
    eSets({ items, at }) {
      const box = (x, y, w, hh, lab, t, f) => `<g ${tt(t, 'a-fade')}><rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="14" fill="${f}" stroke="${INK}" stroke-width="1.8"/>${M(x + 12, y + 18, lab, { fs: 15, a: 's', fill: INK })}</g>`;
      let s = box(8, 8, 304, 196, 'ℝ', .1, '#FAF7FC') + box(16, 32, 204, 166, 'ℚ', .2, '#F3ECF8') + box(24, 56, 120, 136, 'ℤ', .3, '#E9DDF3') + box(32, 80, 68, 106, 'ℕ', .4, '#DCCBEB');
      s += `<g ${tt(.5, 'a-fade')}><rect x="226" y="32" width="78" height="166" rx="14" fill="#FFF6DA" stroke="#E0A800" stroke-width="1.8" stroke-dasharray="5 4"/>${M(265, 50, 'irracionals', { fs: 11, wt: 7, fill: '#B98900' })}</g>`;
      items.forEach(([txt, x, y, t]) => { s += `<g ${tt(t - .4, 'a-fade')}><g ${tt(t, 'a-move', `--fx:${r1(160 - x)}px;--fy:${r1(-y + 16)}px;animation-duration:.8s`)}>${chip(x, y, txt, null, { fs: 12, st: 'o' })}</g></g>`; });
      return { html: scene(212, s), at };
    }
  });
})();
/* ================= configuració dels conceptes de theory7.js ================= */
Object.assign(TANIM, {
  'c7-9': [
    { k: 'eRows', h: 222, rows: [
      { s: "{b|el triple d'un nombre}   {b|menys 4}", y: 32, fs: 14, t: .2 },
      { s: '{u|3x} {r|− 4}', y: 96, fs: 28, t: 1.2, g: { 0: { from: '0.0' }, 1: { from: '0.1' } } },
      { s: 'Resultat: {y|3x − 4}', y: 208, fs: 17, t: 2.3 }
    ], add: [{ p: 'tiles', x: 88, y: 168, items: [['x', 3, 1.5], ['n', 4, 1.9]] }], at: [.3, 1.5, 2.4] },
    { k: 'eBarModel', unit: 8, x0: 70, h: 222, at: [.8, 1.4, 3.0, 4.0], rows: [
      { lab: 'Júlia', y: 32, t: .3, segs: [{ v: 13, lab: 'x', c: 'u' }] },
      { lab: 'Pau', y: 72, t: .5, segs: [{ v: 13, lab: 'x', c: 'u' }, { v: 4, lab: '4', c: 'y' }] },
      { lab: 'junts', y: 132, t: 1.6, segs: [{ v: 13, lab: 'x', c: 'u', t: 1.6 }, { v: 13, lab: 'x', c: 'u', t: 1.75 }, { v: 4, lab: '4', c: 'y', t: 1.9 }] }
    ], braces: [{ row: 2, a: 0, b: 30, lab: '30', t: 2.1 }], strikes: [[2, 2, 2.6]],
      relabel: [[0, 0, '13', 3.6], [1, 0, '13', 3.6], [2, 0, '13', 3.6], [2, 1, '13', 3.6]],
      chips: [[160, 204, '2x = 26 → x = {u|13}', 2.9, 'y', 14], [260, 76, '= {u|17}', 3.8]] },
    { k: 'eCoins', n: 15, a: 2, b: 1, total: 22, at: [.5, 1.5, 2.4, 3.9] },
    { k: 'eRectP', d: 3, P: 26, at: [.6, 1.4, 2.9, 3.9] }
  ],
  'c7-10': [
    { k: 'eFreq', data: [1, 0, 2, 1, 1, 3, 0, 1, 2, 1], vals: [0, 1, 2, 3], hl: 1, at: [.6, 2.7, 3.2] },
    { k: 'eRows', h: 222, rows: [
      { s: '8 ÷ 20 = {u|0,4}', y: 130, t: 1.6, fs: 17 },
      { s: '0,4 × 100 = {y|40 %}', x: 226, y: 186, t: 3.0, fs: 16 }
    ], add: [
      { p: 'icons', x: 20, y: 22, n: 20, k: 8, icon: 'basketball', cols: 10, sz: 24, t: .1, tk: .5, dt: .08 },
      { p: 'h100', x: 50, y: 148, c: 7, n: 40, t: 2.2, dt: .015 }
    ], at: [.9, 1.7, 3.1] },
    { k: 'ePie', h: 204, at: [1.0, 1.8, 2.9], pies: [{ cx: 96, cy: 102, r: 80, t: .1, parts: [
      { v: 162, c: 'u', lab: '45 %', t: .3 }, { v: 108, c: 'y', lab: '30 %', t: .6 }, { v: 90, c: 'g', q: true, lab: '25 %', t: .9, tq: 2.0, right: 2.6 }
    ] }], chips: [[240, 40, 'futbol 45 %', .3], [240, 76, 'bàsquet 30 %', .6, 'y'], [240, 112, 'natació ?', .9, 'k'], [240, 112, 'natació {u|25 %}', 2.0], [240, 158, '100 − 45 − 30 = {u|25}', 1.6, 'y', 12], [240, 190, 'un quart del cercle', 2.7, 'k', 11.5]] },
    { k: 'ePie', h: 226, at: [1.1, 2.1, 3.5], pies: [
      { cx: 66, cy: 90, r: 50, t: .2, parts: [{ v: 90, c: 'u', lab: '90°', t: .5, right: .9 }] },
      { cx: 226, cy: 90, r: 72, t: 1.5, slices: { n: 40, t: 1.6, fill: 12, ft: 2.6, dt: .06, col: 'y' } }
    ], chips: [[66, 170, '25 % de 360° = {u|90°}', 1.0, 'o', 12], [226, 184, '360 ÷ 40 = 9° per alumne', 2.0, 'o', 11.5], [226, 214, '12 × 9 = {u|108°}', 3.4, 'y', 13]] }
  ],
  'c7-11': [
    { k: 'eCode', code: ['a = 5', 'b = a * 3', 'a = b - 4'], vars: ['a', 'b'], hist: ['a', 16, 114], h: 128, at: [.4, 1.4, 2.4], steps: [
      { l: 0, t: .3, set: { a: 5 } }, { l: 1, t: 1.2, set: { b: 15 }, note: '# 5 * 3' }, { l: 2, t: 2.2, set: { a: 11 }, note: '# 15 - 4' }] },
    { k: 'eCode', code: ['n = 7', 'if n > 5:', '    print("gran")'], vars: ['n'], outY: 114, at: [.4, 1.3, 2.4], steps: [
      { l: 0, t: .3, set: { n: 7 } }, { l: 1, t: 1.2, mark: true, note: '# 7 > 5: True' }, { l: 2, t: 2.2, out: 'gran' }] },
    { k: 'eCode', code: ['s = 0', 'for i in range(1, 5):', '    s = s + i'], vars: ['i', 's'], hist: ['s', 16, 114], h: 160, at: [.4, 1.0, 3.3],
      add: [{ p: 'chip', x: 160, y: 146, s: '1 + 2 + 3 + 4 = {u|10}', t: 3.2, fs: 13, st: 'y' }],
      steps: [{ l: 0, t: .3, set: { s: 0 } }, ...[1, 2, 3, 4].flatMap(k => [{ l: 1, t: .8 + .62 * (k - 1), set: { i: k } }, { l: 2, t: 1.1 + .62 * (k - 1), set: { s: k * (k + 1) / 2 } }])] },
    { k: 'eCode', code: ['x = 3', 'for k in range(3):', '    x = x * 2', 'print(x)'], vars: ['x'], hist: ['x', 16, 134], outY: 162, at: [.5, 2.5, 3.0],
      steps: [{ l: 0, t: .3, set: { x: 3 } }, ...[0, 1, 2].flatMap(k => [{ l: 1, t: .8 + .6 * k }, { l: 2, t: 1.05 + .6 * k, set: { x: 3 * 2 ** (k + 1) } }]), { l: 3, t: 2.8, out: '24' }] }
  ],
  'c7-12': [
    { k: 'eRows', h: 222, rows: [
      { s: '[7/20] = 7 ÷ 20', x: 226, y: 40, t: .3, fs: 17 },
      { s: '= [35/100]', x: 226, y: 88, t: 1.2, fs: 17 },
      { s: '= {y|0,35}', x: 226, y: 128, t: 1.9, fs: 20 },
      { s: '[1/3] = 1 ÷ 3 = {u|0,333…}', y: 172, t: 2.8, fs: 16 }
    ], add: [
      { p: 'h100', x: 16, y: 18, c: 12, n: 35, t: .3, dt: .02 },
      { p: 'chip', x: 290, y: 70, s: '× 5', t: 1.0, fs: 12, st: 'f' },
      { p: 'chip', x: 160, y: 208, s: '10 = 3 × {u|3} + {r|1} → sempre sobra 1', t: 3.3, fs: 12, st: 'k' }
    ], at: [.6, 2.0, 3.4] },
    { k: 'eRows', h: 204, rows: [
      { s: '= {y|60 %}', x: 240, a: 's', y: 48, t: 1.0, fs: 16 },
      { s: '= [40/100] = {y|[2/5]}', x: 238, a: 's', y: 106, t: 2.1, fs: 14 },
      { s: '= 1,5 = {y|[3/2]}', x: 190, y: 150, t: 3.2, fs: 15 }
    ], add: [
      { p: 'svg', s: '<line x1="230" x2="230" y1="16" y2="196" stroke="#2B1A38" stroke-width="1.6" stroke-dasharray="4 4" class="an a-fade" style="--t:.20s"/><text x="230" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#8E829A" font-family="Lexend,sans-serif" class="an a-fade" style="--t:.20s">100 %</text>' },
      { p: 'fbar', x: 70, y: 30, w: 160, d: 10, n: 6, t: .3, lab: '0,6' },
      { p: 'fbar', x: 70, y: 88, w: 160, d: 5, n: 2, t: 1.5, lab: '40 %' },
      { p: 'fbar', x: 70, y: 162, w: 240, d: 3, n: 3, t: 2.6, lab: '150 %' }
    ], at: [1.1, 2.3, 3.4] },
    { k: 'eRows', h: 222, rows: [
      { s: 'De petit a gran: {u|35 %} < {u|0,38} < {u|[2/5]}', y: 206, t: 3.0, fs: 15 }
    ], add: [
      { p: 'chip', x: 60, y: 30, s: '[2/5]', t: .2, fs: 15 }, { p: 'chip', x: 160, y: 30, s: '0,38', t: .3, fs: 15 }, { p: 'chip', x: 260, y: 30, s: '35 %', t: .4, fs: 15 },
      { p: 'm', x: 60, y: 60, s: '↓', fs: 14, t: 1.0 }, { p: 'm', x: 160, y: 60, s: '↓', fs: 14, t: 1.0 }, { p: 'm', x: 260, y: 60, s: '↓', fs: 14, t: 1.0 },
      { p: 'chip', x: 60, y: 84, s: '0,40', t: 1.1, fs: 15, st: 'y' }, { p: 'chip', x: 160, y: 84, s: '0,38', t: 1.2, fs: 15, st: 'y' }, { p: 'chip', x: 260, y: 84, s: '0,35', t: 1.3, fs: 15, st: 'y' },
      { p: 'nl', y: 162, a: .3, b: .45, tick: .01, lab: .05, x0: 30, x1: 290, t: 1.8, fs: 11, pts: [[.35, 2.1], [.38, 2.3], [.4, 2.5]] },
      { p: 'chip', x: 116.7, y: 140, s: '35 %', t: 2.2, fs: 12 }, { p: 'chip', x: 168.7, y: 116, s: '0,38', t: 2.4, fs: 12 }, { p: 'chip', x: 203.3, y: 140, s: '[2/5]', t: 2.6, fs: 12 }
    ], at: [.5, 1.5, 3.1] },
    { k: 'eRows', h: 200, rows: [], at: [1.4, 2.4, 3.0], add: [
      { p: 'nl', y: 130, a: 0, b: 2, tick: .25, lab: 1, x0: 30, x1: 290, t: .1, big: [1], hops: [[0, .25, .5, { lab: '[1/4]', fs: 11 }], [.25, .5, .7], [.5, .75, .9], [.75, 1, 1.1], [1, 1.25, 1.8, { col: '#E0A800' }], [1.25, 1.5, 2.0, { col: '#E0A800' }], [1.5, 1.75, 2.2, { col: '#E0A800' }]], pts: [[1.75, 2.6, { fill: '#FFC93C', stroke: '#2B1A38' }]] },
      { p: 'svg', s: '' },
      { p: 'chip', x: 95, y: 184, s: "del 0 a l'1: 4 parts", t: 1.3, fs: 11.5, st: 'k' },
      { p: 'chip', x: 246, y: 60, s: '1 + [3/4] = {u|[7/4]} = 1,75', t: 2.8, fs: 13, st: 'y' }
    ] }
  ],
  'c7-13': [
    { k: 'eAngles', a: 35, at: [1.8, 3.5] },
    { k: 'eTriClass', at: [1.4, 3.0] },
    { k: 'eRhombus', at: [1.8, 2.8] },
    { k: 'ePolyAngles', n: 6, at: [2.1, 3.3] }
  ],
  'c8-9': [
    { k: 'eBarModel', unit: 12, x0: 16, h: 222, at: [.9, 1.9, 3.4], rows: [
      { y: 52, t: .3, segs: [0, 1, 2, 3, 4].map(() => ({ v: 3, lab: 'x', c: 'u' })).concat([{ v: 2, lab: '+2', c: 'g' }]) },
      { y: 118, t: .9, segs: [0, 1, 2, 3, 4, 5, 6].map(() => ({ v: 3, lab: 'x', c: 'u' })) }
    ], overlays: [[1, 17, 21, 1.5, 'falten 4']], vlines: [[17, 1.8, 'diners']],
      braces: [{ row: 1, a: 15, b: 21, lab: '2x = 2 + 4 = 6', t: 2.6, col: '#E4574B' }],
      chips: [[70, 26, '5x + 2', 1.2, 'o', 13], [70, 92, '7x − 4', 1.4, 'o', 13], [160, 204, 'x = {u|3 €}', 3.3, 'y', 15]] },
    { k: 'eAgeTable', cols: ['ara', "d'aquí a x anys"], cw: 100, h: 226, tr: 3.8, at: [.6, 1.4, 2.4, 3.4], rows: [
      { name: 'pare', ex: ['40', '40 + x'], v: ['40', '45'] }, { name: 'fill', ex: ['10', '10 + x'], v: ['10', '15'] }
    ], ratios: [[1, 'el triple', 1.4]], eq: [['40 + x = 3(10 + x)', 164, 2.2, 15], ['40 + x = 30 + 3x → 10 = 2x → {y|x = 5}', 190, 3.2, 13.5]], res: ['45 = 3 × 15 ✓', 214, 4.1] },
    { k: 'eHeadsLegs', heads: 20, legs: 56, at: [.5, 1.4, 2.2, 4.4], lines: [[106, 'caps: {u|x} + {u|y} = 20', 1.2], [136, 'potes: 2x + 4y = 56', 2.0], [166, '16 potes de més ÷ 2 = {u|8} conills', 2.8, 'y', 12]] },
    { k: 'eRows', h: 222, fs: 16, rows: [
      { s: 'x + y = 20 → x = {u|20 − y}', y: 30, t: .2 },
      { s: '2{u|(20 − y)} + 4y = 56', y: 76, t: 1.2, g: { 0: { from: '0.0' } } },
      { s: '40 − 2y + 4y = 56 → {y|2y = 16} → {y|y = 8}', y: 118, t: 2.0, fs: 14.5 },
      { s: 'x = 20 − 8 = {u|12}', y: 154, t: 2.7, fs: 15 },
      { s: '12 + 8 = 20 caps · 24 + 32 = {y|56 potes} ✓', y: 204, t: 3.4, fs: 13.5 }
    ], add: [{ p: 'svg', s: '' }], at: [.4, 2.3, 3.5] }
  ],
  'c8-10': [
    { k: 'eCumFreq', vals: [0, 1, 2, 3], freq: [4, 9, 5, 2], more: 1, at: [.7, 2.4, 3.1] },
    { k: 'eDots', a: 12, b: 26, lab: 2, unit: ' °C', h: 180, at: [1.1, 2.1], series: [{ data: [14, 18, 21, 16, 25, 19], y: 110, t: .2, rt: 1.8 }] },
    { k: 'eDots', a: 0, b: 10, lab: 1, h: 222, at: [1.2, 2.6, 3.4], mean: { v: 5, t: 1.4 }, chips: [[262, 30, 'A: més regular', 3.2, 'y', 12]], series: [
      { name: 'A', data: [5, 6, 5, 4], y: 72, t: .2, rt: 2.0, rl: 'rang: 6 − 4 = 2' },
      { name: 'B', data: [1, 9, 2, 8], y: 152, t: .7, rt: 2.4, rl: 'rang: 9 − 1 = 8' }
    ] },
    { k: 'ePie', h: 204, at: [1.2, 2.4], pies: [{ cx: 106, cy: 104, r: 86, t: .1, slices: { n: 60, t: .3, fill: 15, ft: .9, dt: .04, col: 'u' } }],
      chips: [[256, 50, '360° → 60', .4], [256, 92, '90° → ?', 1.1, 'k'], [256, 92, '90° → {u|15}', 2.3], [256, 140, '60 × 90 ÷ 360', 1.8, 'y', 12]] }
  ],
  'c8-11': [
    { k: 'ePlane', x0: 56, y0: 14, xr: [-1, 5], yr: [-1, 8], u: 20, h: 206, at: [1.8, 2.5], items: [
      { k: 'line', m: 1, n: 3, t: .3 }, { k: 'vec', p: [2, 0, 2, 5], t: 1.0, col: 'y' }, { k: 'vec', p: [2, 5, 0, 5], t: 1.6, col: 'y', dash: '5 4' },
      { k: 'pt', x: 2, y: 5, t: 2.2, lab: '(2, 5)', lp: 'e', st: 'y', r: 6.5 }, { k: 'cm', px: 262, py: 150, s: 'x = 2 → y = 5', t: 1.8, fs: 12.5 }
    ] },
    { k: 'ePlane', x0: 56, y0: 14, xr: [-1, 4], yr: [-2, 7], u: 20, h: 206, at: [.6, 2.3, 3.1], items: [
      { k: 'pt', x: 0, y: -1, t: .4 }, { k: 'slope', p: [0, -1], run: 3, rise: 6, t: 1.0, steps: true },
      { k: 'line', m: 2, n: -1, t: 2.6, w: 2.5 },
      { k: 'cm', px: 250, py: 60, s: '(0, −1): n = −1', t: .6, fs: 12 }, { k: 'cm', px: 250, py: 100, s: 'puja 2 per pas', t: 2.2, fs: 12 }, { k: 'cm', px: 250, py: 150, s: 'y = 2x − 1', t: 3.0, fs: 14, st: 'y' }
    ] },
    { k: 'ePlane', x0: 50, y0: 14, xr: [-1, 5], yr: [-1, 5], u: 26, h: 190, at: [.6, 1.6, 2.6], items: [
      { k: 'pt', x: 0, y: 1, t: .3, lab: '(0, 1)', lp: 'nw' }, { k: 'pt', x: 3, y: 3, t: .5, lab: '(3, 3)', lp: 'e' },
      { k: 'slope', p: [0, 1], run: 3, rise: 2, t: 1.2, rl: 'x: +3', ul: 'y: +2' },
      { k: 'line', m: 2 / 3, n: 1, t: 2.0, w: 2.5 }, { k: 'cm', px: 262, py: 100, s: 'pendent = {u|[2/3]}', t: 2.5, fs: 13, st: 'y' }
    ] },
    { k: 'ePlane', x0: 58, y0: 18, xr: [0, 20], yr: [0, 1000], ux: 11, uy: .17, grid: 5, gy: 200, lx: 5, ly: 200, fs: 9.5, names: false, h: 216, at: [1.3, 2.5], items: [
      { k: 'seg', p: [0, 0, 10, 800], t: .4, w: 3.5 }, { k: 'slope', p: [0, 0], run: 10, rise: 800, t: 1.1, rl: '10 min', ul: '800 m' },
      { k: 'cm', px: 226, py: 156, s: '800 ÷ 10 = {u|80} m/min', t: 2.4, fs: 12.5, st: 'y' },
      { k: 'm', px: 278, py: 210, s: 'temps (min)', fs: 10.5, a: 'e', fill: '#8E829A', t: .1 }, { k: 'm', px: 66, py: 12, s: 'distància (m)', fs: 10.5, a: 's', fill: '#8E829A', t: .1 }
    ] }
  ],
  'c8-12': [
    { k: 'eRows', h: 214, fs: 17, rows: [
      { s: '2 + 3 * {b|2 ** 2}', y: 124, t: 2.2, br: [[0, 0, '= 4', 2.6]] },
      { s: '= 2 + {b|3 × 4} = 2 + 12 = {y|14}', y: 196, t: 3.0, g: { 1: { t: 3.5 } } }
    ], add: [
      { p: 'groups', x: 22, y: 30, n: 17, g: 5, t: .2, tg: .9 },
      { p: 'chip', x: 96, y: 72, s: '17 // 5 = {u|3}', t: 1.3, fs: 13 }, { p: 'chip', x: 250, y: 72, s: '17 % 5 = {r|2}', t: 1.6, fs: 13 }
    ], at: [1.7, 3.6] },
    { k: 'eCircuit', a: 5, b: 2, la: 'a > 4', lb: 'b > 4', at: [.4, 2.1, 3.4] },
    { k: 'eCode', code: ['nota = 7', 'if nota >= 9:', '    print("Excel·lent")', 'elif nota >= 7:', '    print("Notable")', 'elif nota >= 5:', '    print("Aprovat")'], fs: 12, lh: 20, w: 182, vars: ['nota'], vx: 274, outY: 184, at: [.4, 1.8, 3.0], steps: [
      { l: 0, t: .3, set: { nota: 7 } }, { l: 1, t: 1.0, mark: false }, { l: 3, t: 1.6, mark: true }, { l: 4, t: 2.2, out: 'Notable' }, { l: 5, t: 2.8, skip: true, nohl: true }, { l: 6, t: 2.8, skip: true, nohl: true }] },
    { k: 'eCode', code: ['n = 50', 'while n > 10:', '    n = n - 15', 'print(n)'], vars: ['n'], hist: ['n', 16, 134], outY: 164, at: [.5, 2.8, 3.6], steps: [
      { l: 0, t: .3, set: { n: 50 } }, { l: 1, t: .8, mark: true }, { l: 2, t: 1.1, set: { n: 35 } }, { l: 1, t: 1.5, mark: true }, { l: 2, t: 1.8, set: { n: 20 } },
      { l: 1, t: 2.2, mark: true }, { l: 2, t: 2.5, set: { n: 5 } }, { l: 1, t: 2.9, mark: false }, { l: 3, t: 3.4, out: '5' }] }
  ],
  'c8-13': [
    { k: 'ePct', max: 380, W: 220, h: 144, at: [.4, 1.4, 1.9], items: [
      { k: 'up', y: 42, base: 300, pct: 21, t: .2, lab: 'mòbil sense IVA', idx: '× 1,21' },
      { k: 'row', s: 'IVA: 300 × 0,21 = {y|63 €}', y: 122, t: 1.2 }
    ] },
    { k: 'eBarModel', unit: 1.05, x0: 34, h: 204, at: [.8, 2.1], rows: [{ y: 58, t: .3, segs: [{ v: 200, lab: '100 % = ?', c: 'u' }, { v: 42, lab: '21 %', c: 'y' }] }],
      braces: [{ row: 0, a: 0, b: 242, lab: 'amb IVA: 242 € = 121 %', t: .8 }], relabel: [[0, 0, '100 % = 200 €', 2.0]],
      chips: [[160, 148, '242 ÷ 1,21 = {u|200 €}', 1.8, 'y', 14], [160, 186, 'no: 242 − 21 % de 242 = 191,18 €', 2.6, 'r', 11.5]] },
    { k: 'ePct', max: 2100, W: 230, h: 144, at: [.4, 1.3, 1.8], items: [
      { k: 'down', y: 42, base: 2000, pct: 15, t: .2, lab: 'sou brut 2.000 €', idx: '' },
      { k: 'row', s: 'retenció: 2.000 × 0,15 = {r|300 €}', y: 122, t: 1.1, fs: 14 }
    ] },
    { k: 'eUnitCmp', packs: [[6, 2.4], [4, 1.8]], at: [.9, 2.1, 3.4] }
  ],
  'c9-9': [
    { k: 'eRows', h: 200, fs: 16, rows: [
      { s: 'x {g|+ y} = 20', x: 20, a: 's', y: 36, t: .6, st: { 0: 1.8 } },
      { s: '3x {r|− y} = 36', x: 20, a: 's', y: 68, t: .9, st: { 0: 1.8 } },
      { s: 'sumem: 4x = 56 → {y|x = 14}', x: 20, a: 's', y: 108, t: 2.0 }
    ], add: [
      { p: 'chip', x: 262, y: 32, s: '+3 per encert', t: .2, fs: 12, st: 'g' }, { p: 'chip', x: 262, y: 64, s: '−1 per error', t: .3, fs: 12, st: 'R' },
      { p: 'qgrid', x: 11, y: 136, n: 20, ok: 14, t: 2.8, dt: .05 },
      { p: 'chip', x: 160, y: 184, s: '14 × 3 − 6 × 1 = 42 − 6 = {u|36} ✓', t: 3.6, fs: 12.5, st: 'y' }
    ], at: [.5, 1.2, 2.3] },
    { k: 'eAgeTable', cols: ['fa 5 anys', 'ara', "d'aquí a 5"], tr: 2.8, h: 222, at: [.6, 1.9, 3.0], rows: [
      { name: 'mare', ex: ['x − 5', 'x', 'x + 5'], v: ['30', '35', '40'] }, { name: 'filla', ex: ['y − 5', 'y', 'y + 5'], v: ['10', '15', '20'] }
    ], ratios: [[0, '× 3', 1.2], [2, '× 2', 1.4]], eq: [['x − 5 = 3(y − 5) i x + 5 = 2(y + 5)', 172, 1.8, 13]], res: ['30 = 3 × 10 ✓ · 40 = 2 × 20 ✓', 206, 3.4] },
    { k: 'eRows', h: 214, fs: 16, rows: [
      { s: 'x(x + 3) = 40', x: 156, a: 's', y: 42, t: .9 },
      { s: '{u|x^2 + 3x − 40 = 0}', x: 156, a: 's', y: 80, t: 1.6, fs: 15 },
      { s: 'x = {y|5} o x = {r|−8}', x: 156, a: 's', y: 120, t: 2.4, st: { 1: 3.0 } }
    ], add: [
      { p: 'rgrid', x: 30, y: 34, c: 13, w: 8, h: 5, t: .3, lw: 'x + 3', lh: 'x', lw2: '8', lh2: '5', t2: 3.2 },
      { p: 'm', x: 82, y: 72, s: '40 cm²', fs: 14, fill: '#fff', t: .9 },
      { p: 'chip', x: 160, y: 162, s: 'una longitud no pot ser negativa', t: 3.0, fs: 11.5, st: 'r' },
      { p: 'chip', x: 160, y: 198, s: 'ample {u|5 cm} · llarg 8 cm', t: 3.4, fs: 13, st: 'y' }
    ], at: [.6, 1.7, 2.5, 3.4] },
    { k: 'eRows', h: 206, fs: 16, rows: [
      { s: 'x(x + 1) = 56', x: 140, a: 's', y: 56, t: .8 },
      { s: 'x = {y|7} o x = {r|−8}', x: 140, a: 's', y: 100, t: 1.8, st: { 1: 2.6 } },
      { s: 'x = 7: 7 · 8 = {u|56} ✓', y: 190, t: 3.0, fs: 15 }
    ], add: [
      { p: 'rgrid', x: 22, y: 40, c: 11, w: 8, h: 7, t: .3, lw: 'x + 1', lh: 'x', lw2: '8', lh2: '7', t2: 2.8 },
      { p: 'm', x: 66, y: 84, s: '56', fs: 16, fill: '#fff', t: .8 },
      { p: 'chip', x: 228, y: 140, s: '−8 no és positiu', t: 2.6, fs: 12, st: 'r' }
    ], at: [.6, 2.0, 3.1] }
  ],
  'c9-10': [
    { k: 'ePlane', x0: 44, y0: 26, xr: [150, 180], yr: [0, 10], ux: 8, uy: 14, grid: 5, gy: 2, lx: 10, ly: 2, names: false, h: 222, at: [.8, 2.0, 2.8], items: [
      { k: 'bar', x1: 160, x2: 170, y: 8, t: .3 }, { k: 'chip', x: 165, y: 4, s: '8 alumnes', t: .8, fs: 11.5, dy: 0 },
      { k: 'chip', x: 165, y: 10, s: '\\[160, 170)', t: .5, fs: 12, dy: -14, st: 'k' },
      { k: 'pt', x: 160, y: 0, t: 1.0, r: 5 }, { k: 'pt', x: 170, y: 0, t: 1.1, r: 5, open: true },
      { k: 'vline', x: 165, t: 1.6, col: 'r', lab: '165' },
      { k: 'cm', px: 160, py: 200, s: '(160 + 170) ÷ 2 = {u|165}', t: 1.9, fs: 12.5, st: 'y' },
      { k: 'cm', px: 250, py: 70, s: '165 × 8', t: 2.6, fs: 12 }
    ] },
    { k: 'eQuart', d: [2, 4, 4, 6, 7, 9, 9], at: [.7, 2.6, 3.3] },
    { k: 'eBox', q1: 4, me: 6, q3: 7, a: 0, b: 10, at: [1.1, 2.0, 2.9] },
    { k: 'eVariance', d: [4, 6, 8, 6], a: 3, b: 9, at: [1.0, 2.7, 3.7] }
  ],
  'c9-11': [
    { k: 'eRectArea', r1: [12, 2], r2: [6, 4], sx: 30, sy: 10, hu: 'h', wu: 'aixetes', au: '', known: true, at: [.8, 2.6, 3.4], chips: [[160, 52, 'k = {u|24}', 3.3, 'o', 14]] },
    { k: 'ePlane', x0: 150, y0: 16, xr: [0, 7], yr: [0, 10], u: 16.5, lx: 1, ly: 2, h: 206, at: [.6, 1.7, 3.0], items: [
      { k: 'table', px: 18, py: 20, head: ['x', 'y'], rows: [[2, 9], [3, 6], [6, '?', 3, 3.0]], t: .3, dt: .3 },
      { k: 'orect', x: 2, y: 9, t: 1.0, lab: '18' }, { k: 'orect', x: 3, y: 6, t: 1.4, col: 'y' }, { k: 'orect', x: 6, y: 3, t: 2.6, col: 'g', dash: true },
      { k: 'pt', x: 2, y: 9, t: 1.0, r: 4.5 }, { k: 'pt', x: 3, y: 6, t: 1.4, r: 4.5, col: 'y' }, { k: 'pt', x: 6, y: 3, t: 2.8, r: 5, col: 'g' },
      { k: 'cm', px: 58, py: 150, s: 'k = 2 × 9 = {u|18}', t: 1.6, fs: 12 }, { k: 'cm', px: 58, py: 186, s: '18 ÷ 6 = {y|3}', t: 2.8, fs: 12.5 }
    ] },
    { k: 'ePlane', x0: 36, y0: 12, xr: [-7, 7], yr: [-7, 7], u: 12, lx: 2, ly: 2, h: 196, at: [2.0, 3.0], items: [
      { k: 'fn', f: 'recip', c: 6, t: .3 },
      { k: 'pt', x: 1, y: 6, t: 1.3, r: 4.5 }, { k: 'pt', x: 2, y: 3, t: 1.45, r: 4.5 }, { k: 'pt', x: 3, y: 2, t: 1.6, r: 4.5 }, { k: 'pt', x: 6, y: 1, t: 1.75, r: 4.5 },
      { k: 'pt', x: -2, y: -3, t: 2.8, r: 5, col: 'y' },
      { k: 'cm', px: 262, py: 40, s: '(1, 6)', t: 1.3, fs: 12 }, { k: 'cm', px: 262, py: 68, s: '(2, 3)', t: 1.45, fs: 12 }, { k: 'cm', px: 262, py: 96, s: '(3, 2)', t: 1.6, fs: 12 }, { k: 'cm', px: 262, py: 124, s: '(6, 1)', t: 1.75, fs: 12 },
      { k: 'cm', px: 262, py: 168, s: '(−2, −3)', t: 2.8, fs: 12, st: 'y' }
    ] },
    { k: 'eFnTypes', at: [1.0, 2.0, 3.0] }
  ],
  'c9-12': [
    { k: 'eRows', h: 204, fs: 16, rows: [
      { s: '[7/20]: 20 = {g|2^2 × 5}', x: 16, a: 's', y: 42, t: .2 },
      { s: '0,35', x: 252, y: 46, t: 1.0, fs: 18 },
      { s: '[5/11]: {r|11}', x: 16, a: 's', y: 108, t: 1.4 },
      { s: '0,{uo|45}45…', x: 252, y: 112, t: 2.2, fs: 18 },
      { s: '[1/6]: 6 = {g|2} × {r|3}', x: 16, a: 's', y: 174, t: 2.6 },
      { s: '0,1{uo|6}66…', x: 252, y: 178, t: 3.4, fs: 18 }
    ], add: [
      { p: 'chip', x: 252, y: 20, s: 'exacte', t: 1.0, fs: 11, st: 'g' }, { p: 'chip', x: 252, y: 86, s: 'periòdic pur', t: 2.2, fs: 11 }, { p: 'chip', x: 252, y: 152, s: 'periòdic mixt', t: 3.4, fs: 11, st: 'y' }
    ], at: [1.2, 2.4, 3.6] },
    { k: 'eRows', h: 212, fs: 18, rows: [
      { s: '0,45 = [45/100] = {y|[9/20]}', y: 42, t: .3 },
      { s: '1,{uo|27}27… = [127 − 1/99]', y: 112, t: 1.4, br: [[0, 0, 'període de 2 xifres → 99', 1.8]] },
      { s: '= [126/99] = {y|[14/11]}', y: 190, t: 2.6 }
    ], add: [{ p: 'chip', x: 282, y: 26, s: '÷ 5', t: .9, fs: 12, st: 'f' }, { p: 'chip', x: 282, y: 172, s: '÷ 9', t: 3.0, fs: 12, st: 'f' }], at: [.9, 2.2, 3.2] },
    { k: 'eRows', h: 196, fs: 22, rows: [
      { s: '0,{k|1}{uo|6}66…', y: 44, t: .2 },
      { s: '[16 − 1/90] = [15/90] = {y|[1/6]}', y: 160, t: 1.8, fs: 19, g: { 0: { t: 2.8 } } }
    ], add: [
      { p: 'chip', x: 92, y: 96, s: 'no periòdica: 1 xifra → un 0', t: .8, fs: 11, st: 'k' },
      { p: 'chip', x: 240, y: 96, s: 'període: 1 xifra → un 9', t: 1.2, fs: 11 }
    ], at: [.9, 2.2, 3.0] },
    { k: 'eCode', code: ['c = 0', 'for i in range(1, 4):', '    for j in range(i):', '        c = c + 1'], vars: ['i', 'c'], h: 210, at: [.5, 2.8, 3.6],
      steps: [{ l: 0, t: .3, set: { c: 0 } }, { l: 1, t: .7, set: { i: 1 } }, { l: 3, t: 1.0, set: { c: 1 } }, { l: 1, t: 1.4, set: { i: 2 } }, { l: 3, t: 1.7, set: { c: 2 } }, { l: 3, t: 2.0, set: { c: 3 } },
        { l: 1, t: 2.4, set: { i: 3 } }, { l: 3, t: 2.7, set: { c: 4 } }, { l: 3, t: 3.0, set: { c: 5 } }, { l: 3, t: 3.3, set: { c: 6 } }],
      add: [
        { p: 'dots', pts: [[40, 138, 1.0], [40, 164, 1.7], [62, 164, 2.0], [40, 190, 2.7], [62, 190, 3.0], [84, 190, 3.3]] },
        { p: 'm', x: 104, y: 143, s: 'i = 1: 1', fs: 12, a: 's', t: 1.0 }, { p: 'm', x: 104, y: 169, s: 'i = 2: 2', fs: 12, a: 's', t: 2.0 }, { p: 'm', x: 104, y: 195, s: 'i = 3: 3', fs: 12, a: 's', t: 3.3 },
        { p: 'chip', x: 246, y: 170, s: 'c = {u|6}', t: 3.5, fs: 15, st: 'y' }
      ] }
  ],
  'c10-8': [
    { k: 'eScatter', h: 190, at: [1.4, 2.8, 3.6], plots: [
      { x: 30, y: 20, w: 110, hh: 110, r: .85, t: .3, xl: "hores d'estudi", yl: 'nota', arrow: 'g', lab: 'positiva', st: 'g', seed: 3 },
      { x: 186, y: 20, w: 110, hh: 110, r: -.85, t: 1.6, xl: 'hores de mòbil', yl: 'hores de son', arrow: 'r', lab: 'negativa', st: 'R', seed: 11 }
    ] },
    { k: 'eScatter', h: 170, at: [1.3, 2.5, 3.7], plots: [
      { x: 12, y: 16, w: 92, hh: 92, r: .95, t: .3, arrow: 'g', lab: 'r = 0,95 forta', st: 'g', seed: 5 },
      { x: 114, y: 16, w: 92, hh: 92, r: -.5, t: 1.5, arrow: 'r', lab: 'r = −0,5 feble', seed: 9 },
      { x: 216, y: 16, w: 92, hh: 92, r: .03, t: 2.7, lab: 'r = 0,03 nul·la', st: 'k', seed: 21 }
    ] },
    { k: 'ePlane', x0: 44, y0: 14, xr: [0, 10], yr: [0, 10], ux: 22, uy: 17, lx: 2, ly: 2, names: false, h: 212, at: [1.3, 2.0, 2.7], items: [
      { k: 'scatter', pts: [[1, 3.2], [2, 4.9], [3, 4.4], [4, 5.9], [5, 5.6], [6, 7.1], [7, 6.9], [8, 8.3], [9, 8.1]], t: .2, dt: .07 },
      { k: 'line', m: .6, n: 3, t: 1.0, col: 'r' }, { k: 'chip', x: 8.4, y: 9.4, s: 'y = 0,6x + 3', t: 1.2, fs: 11.5, st: 'r' },
      { k: 'pt', x: 5, y: 6, t: 2.3, guides: true, col: 'y', lab: 'nota 6', lp: 'nw', st: 'y', r: 6.5 },
      { k: 'm', px: 264, py: 206, s: 'hores', fs: 10.5, a: 'e', fill: '#8E829A', t: .1 }, { k: 'm', px: 54, py: 10, s: 'nota', fs: 10.5, a: 's', fill: '#8E829A', t: .1 }
    ] },
    { k: 'eSim', at: [1.2, 2.2, 3.1] }
  ],
  'c10-9': [
    { k: 'ePlane', x0: 150, y0: 12, xr: [0, 4], yr: [0, 50], ux: 36, uy: 3.6, gy: 10, lx: 1, ly: 10, h: 214, at: [.4, 1.9, 3.1], items: [
      { k: 'table', px: 16, py: 22, head: ['x', 'f(x)'], rows: [[0, 3], [1, 6], [2, 12], [4, 48]], t: .5, dt: .45 },
      { k: 'pt', x: 0, y: 3, t: .8, r: 4.5 }, { k: 'pt', x: 1, y: 6, t: 1.25, r: 4.5 }, { k: 'pt', x: 2, y: 12, t: 1.7, r: 4.5 },
      { k: 'fn', f: 'exp', a: 3, b: 2, t: 2.2, from: 0, to: 4 }, { k: 'pt', x: 4, y: 48, t: 2.9, lab: '(4, 48)', lp: 'w', st: 'y' },
      { k: 'cm', px: 56, py: 174, s: 'f(x) = 3 · 2^x', t: .2, fs: 13 }, { k: 'cm', px: 56, py: 204, s: '×2 cada pas', t: 1.8, fs: 11.5, st: 'y' }
    ] },
    { k: 'eRows', h: 222, rows: [
      { s: 'Al cap de 4 h: 500 · 2^4 = {y|8.000}', y: 110, t: 2.2, fs: 15 }
    ], add: [{ p: 'seq', x0: 10, y: 60, terms: [500, 1000, 2000, 4000, 8000], op: '×2', t: .3, dt: .4, bw: 52, gap: 10, fs: 13, sub: ['0 h', '1 h', '2 h', '3 h', '4 h'], bars: { y: 212, h: 86, max: 8000 } }], at: [.6, 2.3, 2.9] },
    { k: 'ePlane', x0: 30, y0: 14, xr: [-7, 4], yr: [-4, 4], ux: 24, uy: 20, lx: 1, ly: 1, h: 214, at: [1.5, 2.2, 3.0], items: [
      { k: 'poly', c: [.25, 1, -2], from: -6, to: -2, t: .3, col: 'r', dur: .6 }, { k: 'poly', c: [.25, 1, -2], from: -2, to: 3, t: .9, col: 'g', dur: .6 },
      { k: 'pt', x: -6, y: 1, t: .3, r: 4.5, col: 'r' }, { k: 'pt', x: 3, y: 3.25, t: 1.5, r: 4.5, col: 'g' },
      { k: 'pt', x: -2, y: -3, t: 2.6, col: 'y', lab: 'mínim', lp: 'e', st: 'y', r: 6.5 },
      { k: 'cm', px: 92, py: 200, s: 'decreixent (−6, −2)', t: 1.8, fs: 11.5, st: 'r' }, { k: 'cm', px: 234, py: 200, s: 'creixent (−2, 3)', t: 2.0, fs: 11.5, st: 'o' }
    ] },
    { k: 'ePlane', x0: 40, y0: 14, xr: [0, 4], yr: [0, 16], ux: 34, uy: 11, gy: 2, lx: 1, ly: 4, h: 208, at: [1.0, 2.0, 3.0], items: [
      { k: 'fn', f: 'exp', a: 1, b: 2, t: .3, from: 0, to: 4 }, { k: 'scatter', pts: [[0, 1], [1, 2], [2, 4], [3, 8], [4, 16]], t: .4, dt: .12 },
      { k: 'line', m: 2, n: 0, t: 1.3, col: 'y' }, { k: 'scatter', pts: [[0, 0], [1, 2], [2, 4], [3, 6], [4, 8]], t: 1.4, dt: .12, col: 'y' },
      { k: 'cm', px: 246, py: 40, s: '2^x: 1, 2, 4, 8, 16', t: .8, fs: 11.5 }, { k: 'cm', px: 246, py: 80, s: '2x: 0, 2, 4, 6, 8', t: 1.8, fs: 11.5, st: 'y' },
      { k: 'cm', px: 246, py: 140, s: "l'exponencial guanya", t: 2.8, fs: 11.5, st: 'f' }
    ] }
  ],
  'c10-10': [
    { k: 'eStack', scale: .8, bw: 44, at: [.6, 2.4, 3.2], cols: [
      { x: 40, t: .3, base: [70, '1.000 €'], lab: 'inici', top: '1.000 €' },
      { x: 130, t: 1.0, base: [70, '1.000 €'], segs: [{ v: 50, c: 'y', lab: '+50', t: 1.2 }], lab: 'any 1', top: '1.050 €', tt: 1.5 },
      { x: 220, t: 1.8, base: [70, '1.000 €'], segs: [{ v: 50, c: 'y', lab: '+50', t: 2.0 }, { v: 50, c: 'y', lab: '+50', t: 2.2 }, { v: 2.5, c: 'r', t: 2.5 }], lab: 'any 2', top: '1.102,50 €', tt: 2.6 }
    ], chips: [[92, 20, '+2,50: interessos dels interessos', 2.7, 'r', 10.5], [92, 46, 'interessos: {u|102,50 €}', 3.1, 'y', 12]] },
    { k: 'eStack', scale: .4, bw: 34, by: 196, h: 218, at: [.5, 2.7, 3.5], cols: [
      ...[1, 2, 3].map(y => ({ x: 26 + (y - 1) * 42, t: .3 + .3 * y, segs: Array.from({ length: y }, () => ({ v: 100, c: 'y' })), lab: 'any ' + y, top: AE.nf(100 * y) })),
      { x: 180, t: 1.5, segs: [{ v: 100, c: 'u' }], lab: 'any 1', top: '100' },
      { x: 222, t: 1.8, segs: [{ v: 100, c: 'u' }, { v: 100, c: 'u' }, { v: 10, c: 'r', t: 2.1 }], lab: 'any 2', top: '210' },
      { x: 264, t: 2.1, segs: [{ v: 100, c: 'u' }, { v: 100, c: 'u' }, { v: 100, c: 'u' }, { v: 10, c: 'r', t: 2.4 }, { v: 21, c: 'r', t: 2.5 }], lab: 'any 3', top: '331' }
    ], chips: [[72, 18, 'simple: 1.000 + {u|300}', 2.2, 'o', 11.5], [236, 18, 'compost: 1.000 + {u|331}', 2.6, 'o', 11.5], [236, 44, 'diferència: {r|31 €}', 3.4, 'r', 11.5]] },
    { k: 'eStack', scale: .056, bw: 40, by: 196, h: 218, at: [.6, 2.4, 3.0], cols: [
      { x: 30, t: .3, segs: [{ v: 2000, c: 'u' }], lab: 'inici', top: '2.000' },
      { x: 100, t: 1.0, segs: [{ v: 2200, c: 'u' }], lab: 'any 1', top: '2.200' },
      { x: 170, t: 1.6, segs: [{ v: 2420, c: 'u' }], lab: 'any 2', top: '2.420' },
      { x: 240, t: 2.2, segs: [{ v: 2662, c: 'y' }], lab: 'any 3', top: '2.662' }
    ], refs: [[2500, 1.2, '2.500 €', 10, 300, 's']], chips: [[160, 16, 'al cap de {u|3 anys} passa de 2.500 €', 3.0, 'y', 12]] },
    { k: 'eStack', scale: 120, bw: 11, h: 222, at: [1.8, 2.6, 4.0], cols: [
      ...Array.from({ length: 13 }, (_, k) => ({ x: 12 + k * 13, t: .3 + .1 * k, segs: [{ v: 1.01 ** k, c: 'u' }], top: k === 12 ? '1,1268' : null, tt: 1.7 })),
      { x: 212, t: 2.9, scale: .0072, segs: [{ v: 20000, c: 'y' }], top: '20.000', lab: 'ara' },
      { x: 252, t: 3.3, scale: .0072, segs: [{ v: 17000, c: 'y' }], top: '17.000', lab: '1 any' },
      { x: 292, t: 3.7, scale: .0072, segs: [{ v: 14450, c: 'y' }], top: '14.450', lab: '2 anys' }
    ], refs: [[1.12, 2.1, '12 % (simple)', 8, 184, 's']], chips: [[96, 206, '1,01^{12} = 1,1268 → {u|TAE ≈ 12,68 %}', 2.4, 'o', 11], [96, 20, '12 mesos a l’1 %', .3, 'k', 11], [256, 206, '× 0,85 cada any', 3.2, 'y', 11]] }
  ],
  'c10-11': [
    { k: 'ePlane', x0: 30, y0: 14, xr: [-1, 5], yr: [-3, 3], u: 26, h: 190, at: [.6, 1.9, 2.9], items: [
      { k: 'pt', x: 1, y: 2, t: .3, lab: 'A(1, 2)', lp: 'w' }, { k: 'pt', x: 4, y: -2, t: .5, lab: 'B(4, −2)', lp: 'e', col: 'r' },
      { k: 'vec', p: [1, 2, 4, 2], t: 1.3, col: 'y', dash: '5 4' }, { k: 'chip', x: 2.5, y: 2, s: '+3', t: 1.5, fs: 12, st: 'y', dy: -12 },
      { k: 'vec', p: [4, 2, 4, -2], t: 1.6, col: 'r', dash: '5 4' }, { k: 'chip', x: 4, y: 0, s: '−4', t: 1.8, fs: 12, st: 'r', dx: 20 },
      { k: 'vec', p: [1, 2, 4, -2], t: 2.3, w: 3.6 },
      { k: 'cm', px: 256, py: 70, s: '(4 − 1, −2 − 2)', t: 1.8, fs: 12 }, { k: 'cm', px: 256, py: 120, s: 'AB = {u|(3, −4)}', t: 2.8, fs: 13, st: 'y' }
    ] },
    { k: 'ePlane', x0: 34, y0: 14, xr: [-1, 4], yr: [-5, 1], u: 26, h: 190, at: [1.3, 2.5], items: [
      { k: 'seg', p: [0, 0, 3, 0], t: .6, col: 'y', w: 3, dash: '5 4' }, { k: 'seg', p: [3, 0, 3, -4], t: .8, col: 'r', w: 3, dash: '5 4' },
      { k: 'chip', x: 1.5, y: 0, s: '3', t: .9, fs: 12, st: 'y', dy: -12 }, { k: 'chip', x: 3, y: -2, s: '4', t: 1.0, fs: 12, st: 'r', dx: 16 },
      { k: 'vec', p: [0, 0, 3, -4], t: .3, w: 3.6 },
      { k: 'cm', px: 250, py: 60, s: '√(3^2 + 4^2) = √(9 + 16)', t: 1.2, fs: 11.5 }, { k: 'cm', px: 250, py: 110, s: '= √25 = {u|5}', t: 2.4, fs: 14, st: 'y' },
      { k: 'chip', x: 1.5, y: -2, s: '5', t: 2.6, fs: 13, st: 'f', dx: -14 }
    ] },
    { k: 'ePlane', x0: 24, y0: 18, xr: [-1, 7], yr: [-2, 8], u: 20, h: 224, at: [1.4, 3.2], items: [
      { k: 'seg', p: [2, 5, 6, -1], t: .3, col: 'k', w: 2.4 }, { k: 'pt', x: 2, y: 5, t: .3, lab: 'A', lp: 'e', r: 5 }, { k: 'pt', x: 6, y: -1, t: .4, lab: 'B', lp: 'e', r: 5 },
      { k: 'pt', x: 4, y: 2, t: 1.1, col: 'y', r: 6.5 },
      { k: 'vec', p: [0, 0, 2, 6], t: 2.0 }, { k: 'vec', p: [2, 6, 0, 7], t: 2.5, col: 'r' }, { k: 'vec', p: [0, 0, 0, 7], t: 3.0, col: 'y', w: 3.6 },
      { k: 'cm', px: 250, py: 40, s: 'M = {y|(4, 2)}', t: 1.3, fs: 13 }, { k: 'cm', px: 250, py: 96, s: '2u = (2, 6)', t: 2.1, fs: 12 }, { k: 'cm', px: 250, py: 128, s: '−v = (−2, 1)', t: 2.6, fs: 12, st: 'r' }, { k: 'cm', px: 250, py: 168, s: '2u − v = {u|(0, 7)}', t: 3.1, fs: 12.5, st: 'y' }
    ] },
    { k: 'ePlane', x0: 30, y0: 12, xr: [-1, 5], yr: [-1, 7], u: 23, h: 206, at: [1.2, 2.6, 3.4], items: [
      { k: 'pt', x: 1, y: 3, t: .3, lab: 'P(1, 3)', lp: 'w' }, { k: 'line', m: 2, n: 1, t: .8 }, { k: 'line', m: -.5, n: 4, t: 1.8, col: 'y' },
      { k: 'rangle', x: 1.2, y: 3.4, m: [2, -.5], t: 2.4 },
      { k: 'cm', px: 250, py: 44, s: 'y − 3 = 2(x − 1)', t: 1.0, fs: 12 }, { k: 'cm', px: 250, py: 80, s: 'y = 2x + 1', t: 1.4, fs: 12 }, { k: 'cm', px: 250, py: 116, s: 'y = −½x + 4', t: 2.0, fs: 12, st: 'y' },
      { k: 'cm', px: 250, py: 160, s: '2 × (−½) = −1', t: 2.6, fs: 12 }, { k: 'cm', px: 250, py: 194, s: '{u|perpendiculars}', t: 3.2, fs: 12.5, st: 'y' }
    ] }
  ],
  'c10-12': [
    { k: 'eSets', at: [1.2, 2.2, 3.0], items: [['√49 = 7', 66, 150, .8], ['−3', 122, 172, 1.4], ['[2/5] = 0,4', 182, 124, 1.8], ['√2', 265, 124, 2.6]] },
    { k: 'eRows', h: 222, rows: [
      { s: '√10 ≈ 3,16227766…', y: 34, t: .2, fs: 18 },
      { s: '0,{uo|3}33… = {g|[1/3]}', y: 170, t: 1.8, fs: 18 }
    ], add: [
      { p: 'chip', x: 160, y: 66, s: 'cap període → {r|irracional}', t: 1.0, fs: 12.5 },
      { p: 'nl', y: 118, a: 3, b: 4, tick: .1, lab: 1, x0: 40, x1: 280, t: .6, pts: [[3.1623, 1.0, {}, '√10', { st: 'y' }]] },
      { p: 'chip', x: 160, y: 208, s: 'té període → {g|racional}', t: 2.6, fs: 12.5 }
    ], at: [1.3, 2.7] },
    { k: 'eRows', h: 212, rows: [
      { s: '−2 ≤ x < 5 → {y|\\[−2, 5)}', y: 28, t: .2, fs: 17 },
      { s: 'x ≤ 1 → {y|(−∞, 1]}', y: 140, t: 2.6, fs: 17 }
    ], add: [
      { p: 'nl', y: 92, a: -4, b: 7, tick: 1, lab: 1, x0: 30, x1: 290, t: .6, fs: 11, seg: [-2, 5, true, false, 1.0] },
      { p: 'chip', x: 77, y: 64, s: 'ple: hi entra', t: 1.6, fs: 11, st: 'g' }, { p: 'chip', x: 243, y: 64, s: 'buit: no hi entra', t: 1.8, fs: 11, st: 'r' },
      { p: 'nl', y: 186, a: -4, b: 7, tick: 1, lab: 1, x0: 30, x1: 290, t: 2.8, fs: 11, ray: [1, -1, true, 3.0] }
    ], at: [.5, 1.9, 3.1] },
    { k: 'eRows', h: 184, rows: [], at: [1.2, 2.2, 3.2], add: [
      { p: 'nl', y: 56, a: 1, b: 2, tick: .1, lab: 1, x0: 30, x1: 290, t: .2, fs: 11, labs: [1, 1.4, 1.5, 2], band: [[1.4, 1.5, 1.0]] },
      { p: 'chip', x: 84, y: 22, s: '1,4^2 = 1,96 < 2', t: .6, fs: 12 }, { p: 'chip', x: 232, y: 22, s: '1,5^2 = 2,25 > 2', t: .9, fs: 12 },
      { p: 'svg', s: '<path d="M134,70 L30,124 M160,70 L290,124" stroke="#8E829A" stroke-width="1.5" stroke-dasharray="4 4" fill="none" class="an a-fade" style="--t:1.80s"/>' },
      { p: 'nl', y: 140, a: 1.4, b: 1.5, tick: .01, lab: .05, x0: 30, x1: 290, t: 2.0, fs: 11, pts: [[1.41421, 2.8, { fill: '#FFC93C', stroke: '#2B1A38' }, '√2 ≈ 1,41', { st: 'y' }]] }
    ] }
  ]
});
/* @@END2 */
