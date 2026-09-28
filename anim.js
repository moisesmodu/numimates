/* ===== Teoria animada · escenes que expliquen l'exemple pas a pas =====
   Cada concepte de la teoria (THEORY[uid].parts[i]) pot tenir una escena a TANIM[uid][i].
   Una escena retorna { html, at }: el dibuix SVG animat amb CSS i els segons en què ha d'aparèixer
   cada línia de l'exemple, perquè el text i el dibuix vagin sincronitzats. Tot és codi: els números
   i les formes són exactes, i amb «moviment reduït» es veu directament el resultat final. */
const TANIM = {
  'c3-5': [{ k: 'frac', d: 4, n: 1, pizza: true }, { k: 'frac', d: 5, n: 3 }, { k: 'fracCmp', ds: [2, 3, 4] }, { k: 'share', total: 12, g: 2 }],
  'c4-3': [{ k: 'groups', g: 3, n: 5 }, { k: 'arrMinus', r: 10, c: 7 }, { k: 'shift', n: 34 }, { k: 'area', a: 30, b: 6, m: 4 }]
};
const AN_INK = '#2B1A38', AN_F = 'font-family="Lexend,sans-serif"';
// element que apareix (pop, fade, draw, fill) a l'instant t
const at_ = (t, cls = 'a-pop') => `class="an ${cls}" style="--t:${t.toFixed(2)}s"`;
const anSvg = (w, h, body) => `<svg class="scene" viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-hidden="true">${body}</svg>`;
const fracTxt = (n, d, x, y, t, s = 30) => `<g ${at_(t)}><text x="${x}" y="${y - 4}" text-anchor="middle" font-size="${s}" font-weight="900" fill="${AN_INK}" ${AN_F}>${n}</text><line x1="${x - s * .55}" x2="${x + s * .55}" y1="${y + 4}" y2="${y + 4}" stroke="${AN_INK}" stroke-width="3" stroke-linecap="round"/><text x="${x}" y="${y + s + 6}" text-anchor="middle" font-size="${s}" font-weight="900" fill="${AN_INK}" ${AN_F}>${d}</text></g>`;
const tag = (x, y, txt, t, fs = 16) => `<g ${at_(t)}><rect x="${x - txt.length * fs * .31 - 10}" y="${y - fs - 4}" width="${txt.length * fs * .62 + 20}" height="${fs + 14}" rx="${(fs + 14) / 2}" fill="#fff" stroke="var(--uc)" stroke-width="2"/><text x="${x}" y="${y + 1}" text-anchor="middle" font-size="${fs}" font-weight="900" fill="${AN_INK}" ${AN_F}>${txt}</text></g>`;
const sector = (cx, cy, r, a0, a1) => { const p = a => [cx + r * Math.cos(a), cy + r * Math.sin(a)].map(v => v.toFixed(1)); const [x0, y0] = p(a0), [x1, y1] = p(a1); return `M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1},${y1} Z`; };

const SCN = {
  // una pizza o una barra que es parteix en d parts iguals i se n'acoloreixen n
  frac({ d, n, pizza }) {
    let s = '', t = .3;
    if (pizza) {
      const cx = 115, cy = 88, r = 66, A = k => -Math.PI / 2 + 2 * Math.PI * k / d;
      s += `<circle cx="${cx}" cy="${cy}" r="${r + 5}" fill="#E7A94B"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD27A"/>`;
      [[-30, -25], [22, -38], [35, 18], [-12, 30], [-40, 8], [8, -8]].forEach(([x, y]) => s += `<circle cx="${cx + x}" cy="${cy + y}" r="7" fill="#E4574B" opacity=".9"/>`);
      for (let k = 0; k < n; k++) s += `<path d="${sector(cx, cy, r, A(k), A(k + 1))}" fill="var(--uc)" opacity=".82" ${at_(t + .45 * d * .5 + .2 + .45 * k, 'a-fill')}/>`;
      for (let k = 0; k < d; k++) { const [x, y] = [cx + r * Math.cos(A(k)), cy + r * Math.sin(A(k))]; s += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#fff" stroke-width="4" stroke-linecap="round" pathLength="1" ${at_(t + .22 * k, 'a-draw')}/>`; }
      const tc = t + .22 * d + .1, tf = tc + .45 * n + .3;
      return { html: anSvg(320, 176, s + fracTxt(n, d, 250, 72, tf)), at: [tc, tf + .2] };
    }
    const x0 = 24, w = 200, y0 = 58, h = 56, pw = w / d;
    s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="10" fill="#fff" stroke="${AN_INK}" stroke-width="3"/>`;
    for (let k = 0; k < n; k++) s += `<rect x="${(x0 + k * pw + 2).toFixed(1)}" y="${y0 + 2}" width="${(pw - 4).toFixed(1)}" height="${h - 4}" rx="7" fill="var(--uc)" opacity=".85" ${at_(t + .25 * d + .3 + .4 * k, 'a-fill')}/>`;
    for (let k = 1; k < d; k++) s += `<line x1="${(x0 + k * pw).toFixed(1)}" x2="${(x0 + k * pw).toFixed(1)}" y1="${y0}" y2="${y0 + h}" stroke="${AN_INK}" stroke-width="3" pathLength="1" ${at_(t + .25 * k, 'a-draw')}/>`;
    const tf = t + .25 * d + .3 + .4 * n;
    s += tag(x0 + w / 2, y0 - 16, `${n} de ${d}`, tf - .2, 14);
    return { html: anSvg(320, 150, s + fracTxt(n, d, 272, 64, tf + .2)), at: [tf, tf + .6, tf + 1.4] };
  },
  // mitjos, terços i quarts: com més parts, més petit el tros
  fracCmp({ ds }) {
    let s = ''; const x0 = 70, w = 220, h = 34, at = [];
    ds.forEach((d, i) => {
      const y = 14 + i * 50, t = .3 + i * .8, pw = w / d;
      s += `<g ${at_(t, 'a-fade')}><rect x="${x0}" y="${y}" width="${w}" height="${h}" rx="8" fill="#fff" stroke="${AN_INK}" stroke-width="2.5"/>`;
      for (let k = 1; k < d; k++) s += `<line x1="${x0 + k * pw}" x2="${x0 + k * pw}" y1="${y}" y2="${y + h}" stroke="${AN_INK}" stroke-width="2.5"/>`;
      s += `</g><rect x="${x0 + 2}" y="${y + 2}" width="${pw - 4}" height="${h - 4}" rx="6" fill="var(--uc)" opacity=".85" ${at_(t + .35, 'a-grow')}/>`;
      s += `<text x="${x0 - 14}" y="${y + 24}" text-anchor="end" font-size="20" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(t)}>1/${d}</text>`;
      at.push(t + .45);
    });
    const tg = .3 + ds.length * .8 + .2;
    s += `<line x1="${x0 + w / ds[ds.length - 1]}" x2="${x0 + w / ds[ds.length - 1]}" y1="6" y2="${14 + ds.length * 50}" stroke="#E4574B" stroke-width="2.5" stroke-dasharray="5 5" ${at_(tg, 'a-fade')}/>`;
    at.push(tg + .3);
    return { html: anSvg(320, 14 + ds.length * 50 + 4, s), at };
  },
  // repartir: els caramels van d'un en un a cada plat
  share({ total, g }) {
    let s = ''; const W = 320, px = k => (k + .5) * W / g, py = 150, t0 = .5, dt = .16, per = Math.ceil(total / g), cols = Math.min(per, 3), sz = 24;
    for (let k = 0; k < g; k++) s += `<ellipse cx="${px(k)}" cy="${py + 14}" rx="${Math.min(66, W / g / 2 - 8)}" ry="16" fill="#F3ECF8" stroke="var(--uc)" stroke-width="2.5"/>`;
    for (let i = 0; i < total; i++) {
      const k = i % g, j = Math.floor(i / g), fx = px(k) + ((j % cols) - (cols - 1) / 2) * 27, fy = py - 4 - Math.floor(j / cols) * 22;
      const sx = W / 2 + ((i % 6) - 2.5) * 26, sy = 24 + Math.floor(i / 6) * 24;
      s += `<image href="img/ic/candy.webp" x="${(fx - sz / 2).toFixed(1)}" y="${(fy - sz / 2).toFixed(1)}" width="${sz}" height="${sz}" class="an a-move" style="--t:${(t0 + i * dt).toFixed(2)}s;--fx:${(sx - fx).toFixed(1)}px;--fy:${(sy - fy).toFixed(1)}px"/>`;
    }
    const te = t0 + total * dt + .3;
    for (let k = 0; k < g; k++) s += tag(px(k), 62, `1/${g}`, te, 18) + tag(px(k), py + 52, `${total / g}`, te + .3, 18);
    return { html: anSvg(W, 206, s), at: [.2, te + .5, te + 1.3] };
  },
  // grups iguals: 3 bosses de 5 caramels → 5 + 5 + 5
  groups({ g, n }) {
    let s = ''; const W = 320, bx = k => (k + .5) * W / g, at = [.2];
    for (let k = 0; k < g; k++) {
      const t = .3 + k * .9;
      s += `<rect x="${bx(k) - 46}" y="18" width="92" height="96" rx="18" fill="#F3ECF8" stroke="var(--uc)" stroke-width="2.5" ${at_(t, 'a-fade')}/>`;
      for (let i = 0; i < n; i++) s += `<image href="img/ic/candy.webp" x="${bx(k) - 34 + (i % 3) * 24}" y="${30 + Math.floor(i / 3) * 30}" width="22" height="22" ${at_(t + .15 + i * .1)}/>`;
      s += tag(bx(k), 146, k ? `+ ${n} = ${n * (k + 1)}` : String(n), t + .15 + n * .1 + .1, 16);
    }
    const te = .3 + g * .9 + .3; at.push(te, te + .8);
    return { html: anSvg(W, 164, s), at };
  },
  // 9 × 7 = 10 × 7 − 7: una fila de més i després la traiem
  arrMinus({ r, c }) {
    let s = ''; const sp = 12.5, x0 = 22, y0 = 12;
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) s += `<circle cx="${x0 + j * sp}" cy="${y0 + i * sp}" r="4.6" fill="var(--uc)" ${at_(.2 + i * .09)}/>`;
    const t1 = .2 + r * .09 + .3, t2 = t1 + 1;
    s += `<g ${at_(t2, 'a-fade')}><rect x="${x0 - 8}" y="${y0 + (r - 1) * sp - 8}" width="${(c - 1) * sp + 16}" height="16" rx="8" fill="#fff" opacity=".85" stroke="#E4574B" stroke-width="2"/><line x1="${x0 - 10}" x2="${x0 + (c - 1) * sp + 10}" y1="${y0 + (r - 1) * sp}" y2="${y0 + (r - 1) * sp}" stroke="#E4574B" stroke-width="3" stroke-linecap="round"/></g>`;
    s += tag(225, 50, `${r} × ${c} = ${r * c}`, t1, 17) + tag(225, 100, `− ${c} = ${(r - 1) * c}`, t2 + .3, 17);
    return { html: anSvg(320, y0 + r * sp + 6, s), at: [0, t1, t2 + .3, t2 + 1] };
  },
  // ×10 i ×100: les xifres salten de columna i entren zeros
  shift({ n }) {
    const cols = ['M', 'C', 'D', 'U'], cw = 52, x0 = 60, cx = i => x0 + i * cw + cw / 2, dig = String(n).split(''), rows = [[0, .2], [1, 1.1], [2, 2.5]];
    let s = cols.map((h, i) => `<text x="${cx(i)}" y="20" text-anchor="middle" font-size="14" font-weight="900" fill="var(--uc)" ${AN_F}>${h}</text>`).join('');
    s += `<rect x="${x0}" y="28" width="${cw * 4}" height="${rows.length * 40 + 4}" rx="10" fill="#FAF7FC" stroke="#E6DEEE" stroke-width="2"/>` + cols.slice(1).map((_, i) => `<line x1="${x0 + (i + 1) * cw}" x2="${x0 + (i + 1) * cw}" y1="28" y2="${32 + rows.length * 40}" stroke="#E6DEEE" stroke-width="2"/>`).join('');
    rows.forEach(([k, t], ri) => {
      const y = 60 + ri * 40, lab = ['', '× 10', '× 100'][k];
      if (lab) s += `<text x="${x0 - 10}" y="${y}" text-anchor="end" font-size="15" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(t)}>${lab}</text>`;
      dig.forEach((d, i) => { const from = 4 - dig.length + i, to = from - k; s += `<text x="${cx(to)}" y="${y}" text-anchor="middle" font-size="24" font-weight="900" fill="${AN_INK}" ${AN_F} class="an a-move" style="--t:${(t + .15).toFixed(2)}s;--fx:${(cx(from) - cx(to)).toFixed(1)}px;--fy:${ri ? -40 : 0}px">${d}</text>`; });
      for (let z = 0; z < k; z++) s += `<text x="${cx(3 - z)}" y="${y}" text-anchor="middle" font-size="24" font-weight="900" fill="#E4574B" ${AN_F} ${at_(t + .75 + z * .2)}>0</text>`;
    });
    return { html: anSvg(320, 40 + rows.length * 40, s), at: [1.3, 2.9, 3.6] };
  },
  // 36 × 4 = 30 × 4 + 6 × 4: el rectangle es parteix en dos
  area({ a, b, m }) {
    const x0 = 34, y0 = 34, W = 250, H = 84, wa = W * a / (a + b);
    let s = `<rect x="${x0}" y="${y0}" width="${W}" height="${H}" rx="8" fill="#fff" stroke="${AN_INK}" stroke-width="3" ${at_(.1, 'a-fade')}/>`;
    s += `<text x="${x0 + W / 2}" y="${y0 - 10}" text-anchor="middle" font-size="17" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(.2)}>${a + b}</text><text x="${x0 - 10}" y="${y0 + H / 2 + 6}" text-anchor="end" font-size="17" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(.2)}>${m}</text>`;
    s += `<rect x="${x0 + 2}" y="${y0 + 2}" width="${wa - 3}" height="${H - 4}" rx="6" fill="var(--uc)" opacity=".8" ${at_(1.4, 'a-grow')}/><rect x="${x0 + wa + 1.5}" y="${y0 + 2}" width="${W - wa - 3.5}" height="${H - 4}" rx="6" fill="#FFC93C" ${at_(2.1, 'a-grow')}/>`;
    s += `<line x1="${x0 + wa}" x2="${x0 + wa}" y1="${y0 - 4}" y2="${y0 + H + 4}" stroke="${AN_INK}" stroke-width="3" stroke-dasharray="6 5" ${at_(.8, 'a-fade')}/>`;
    s += `<text x="${x0 + wa / 2}" y="${y0 + H + 22}" text-anchor="middle" font-size="15" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(.9)}>${a}</text><text x="${x0 + wa + (W - wa) / 2}" y="${y0 + H + 22}" text-anchor="middle" font-size="15" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(.9)}>${b}</text>`;
    s += `<text x="${x0 + wa / 2}" y="${y0 + H / 2 + 7}" text-anchor="middle" font-size="20" font-weight="900" fill="#fff" ${AN_F} ${at_(1.7)}>${a * m}</text><text x="${x0 + wa + (W - wa) / 2}" y="${y0 + H / 2 + 7}" text-anchor="middle" font-size="18" font-weight="900" fill="${AN_INK}" ${AN_F} ${at_(2.4)}>${b * m}</text>`;
    return { html: anSvg(320, y0 + H + 32, s), at: [.2, 1.6, 2.3, 3] };
  }
};
// personatges guia animats (vídeos curts en bucle fets amb Higgsfield a partir de les il·lustracions de l'app)
const CHAR_CLIP = ['numi', 'estel', 'flama', 'guida', 'tuga', 'vuit', 'cavaller'];
// vídeo d'entrada de la unitat (una situació real del tema, sense números que s'hagin de comptar)
const HOOK_CLIP = new Set(['c1-1', 'c1-2', 'c1-3', 'c1-4', 'c1-5', 'c1-6', 'c1-7', 'c1-8', 'c2-1', 'c2-2', 'c2-3', 'c2-4', 'c2-5', 'c2-6', 'c2-7', 'c3-1', 'c3-2', 'c3-3', 'c3-4', 'c3-5', 'c3-6', 'c3-7', 'c3-8', 'c3-9', 'c4-1', 'c4-2', 'c4-3', 'c4-4', 'c4-5', 'c4-6', 'c4-7', 'c4-8', 'c4-9', 'c4-10', 'c5-1', 'c5-2', 'c5-3', 'c5-4', 'c5-5', 'c5-6', 'c5-7', 'c5-8', 'c5-9', 'c6-1', 'c6-2', 'c6-3', 'c6-4', 'c6-5', 'c6-6', 'c6-7', 'c6-8', 'c6-9', 'c7-1', 'c7-2', 'c7-3', 'c7-4', 'c7-5', 'c7-6', 'c7-7', 'c7-8', 'c8-1', 'c8-2', 'c8-3', 'c8-4', 'c8-5', 'c8-6', 'c8-7', 'c8-8', 'c9-1', 'c9-2', 'c9-3', 'c9-4', 'c9-5', 'c9-6', 'c9-7', 'c9-8', 'c10-1', 'c10-2', 'c10-3', 'c10-4', 'c10-5', 'c10-6', 'c10-7']);
const hookClip = uid => HOOK_CLIP.has(uid) ? `<video class="lhookv" src="img/anim/hook-${uid}.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>` : '';
const charClip = (id, mood = 'happy') => CHAR_CLIP.includes(id) ? `<video class="lvid" src="img/anim/${id}.mp4" poster="img/chars/${id}-happy.webp" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>` : charSVG(id, mood);
function animScene(uid, i) { const a = (TANIM[uid] || [])[i]; if (!a || !SCN[a.k]) return null; try { return SCN[a.k](a); } catch (e) { return null; } }
