/* ===== Teoria animada · 1r, 2n i 3r de primària (c1, c2 i c3) =====
   Una escena per a cada concepte amb exemple (THEORY[uid].parts[i].ex). Cada escena dibuixa EXACTAMENT els
   números i els objectes de l'exemple, pas a pas, i `at[k]` diu quan surt la línia k del text (sincronitzat).
   Tot va dins una funció perquè els noms interns no xoquin amb altres fitxers d'escenes (anim-p2.js…).
   Tipus nous (SCN.p1…), genèrics i parametritzables: comptar, sumar i restar amb objectes que entren o marxen,
   recta numèrica amb salts, sèries, marcs de 10, blocs de desenes i centenes, taules de posició, operacions en
   columna, rellotge amb agulles que giren, monedes i bitllets, regle, formes, patrons, simetries, cossos,
   robot en quadrícula, recomptes amb ratlletes, gràfics de barres, balances, repartir i fer grups.
   L'estil base de cada element és l'estat final: amb «moviment reduït» es veu directament el resultat. */
(() => {
  if (typeof SCN === 'undefined' || typeof TANIM === 'undefined') return;
  // classes d'animació noves (una sola vegada): lliscar, saltar, desaparèixer, girar, créixer cap amunt, bategar, ressaltar
  if (typeof document !== 'undefined' && !document.getElementById('p1-anim-css')) {
    const st = document.createElement('style'); st.id = 'p1-anim-css';
    st.textContent = `.an.p1-sl{animation-name:p1Sl;animation-duration:.7s;animation-timing-function:cubic-bezier(.45,0,.25,1)}
@keyframes p1Sl{from{transform:translate(var(--fx),var(--fy))}}
.an.p1-hop{animation-name:p1Hop;animation-duration:.42s;animation-timing-function:ease-in-out}
@keyframes p1Hop{0%{transform:translate(var(--fx),0)}50%{transform:translate(calc(var(--fx) / 2),-15px)}100%{transform:none}}
.an.p1-out{opacity:0;animation-name:p1Out;animation-duration:.35s;animation-timing-function:ease-in}
@keyframes p1Out{from{opacity:1}to{opacity:0}}
.an.p1-away{opacity:0;animation-name:p1Away;animation-duration:.8s;animation-timing-function:ease-in}
@keyframes p1Away{from{opacity:1;transform:none}to{opacity:0;transform:translate(var(--fx),var(--fy))}}
.an.p1-id{animation-name:p1Id;animation-duration:var(--d,.8s);animation-timing-function:cubic-bezier(.45,0,.3,1)}
@keyframes p1Id{from{transform:none}}
.an.p1-gy{animation-name:p1Gy;transform-box:fill-box;transform-origin:center bottom;animation-duration:.7s;animation-timing-function:ease-out}
@keyframes p1Gy{from{transform:scaleY(0)}}
.an.p1-pul{animation-name:p1Pul;transform-box:fill-box;transform-origin:center;animation-duration:.45s;animation-timing-function:ease-in-out}
@keyframes p1Pul{50%{transform:scale(1.3)}}
.an.p1-hl{opacity:0;animation-name:p1Hl;animation-duration:var(--d,1.2s);animation-timing-function:linear}
@keyframes p1Hl{0%{opacity:0}12%,85%{opacity:.45}100%{opacity:0}}`;
    document.head.appendChild(st);
  }
  const INK = AN_INK, FF = AN_F, Y = '#FFC93C', YD = '#D99A00', RED = '#E4574B', UC = 'var(--uc)', SOFT = '#F3ECF8', OK = '#2FA84F', BLUE = '#3B8FE0', GRN = '#35B45F', W = 320;
  const Lc = (ca, es) => (typeof L === 'function' ? L(ca, es) : ca);
  const r1 = v => Math.round(v * 10) / 10;
  const th = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const tensW = d => d === 1 ? Lc('1 desena', '1 decena') : Lc(`${d} desenes`, `${d} decenas`);
  const unitsW = u => u === 1 ? Lc('1 unitat', '1 unidad') : Lc(`${u} unitats`, `${u} unidades`);
  // atributs d'animació: l'element apareix a l'instant t amb la classe cls
  const A = (t, cls = 'a-pop', st = '') => `class="an ${cls}" style="--t:${Math.max(0, t).toFixed(2)}s${st ? ';' + st : ''}"`;
  const G = (t, cls, inner, st) => `<g ${A(t, cls, st)}>${inner}</g>`;
  const T = (x, y, s, o = {}) => `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${o.a || 'middle'}" font-size="${o.fs || 18}" font-weight="${o.w || 900}" fill="${o.c || INK}"${o.op ? ` opacity="${o.op}"` : ''} ${FF}${o.t != null ? ' ' + A(o.t, o.cls || 'a-pop', o.st) : ''}>${s}</text>`;
  const IC = (n, cx, cy, sz, t, cls = 'a-pop', st) => `<image href="img/ic/${n}.webp" x="${r1(cx - sz / 2)}" y="${r1(cy - sz / 2)}" width="${sz}" height="${sz}"${t != null ? ' ' + A(t, cls, st) : ''}/>`;
  const SL = (t, fx, fy, inner, d) => G(t, 'p1-sl', inner, `--fx:${r1(fx)}px;--fy:${r1(fy)}px${d ? `;animation-duration:${d}s` : ''}`);
  const OUT = (t, inner) => G(t, 'p1-out', inner);
  const PUL = (t, inner) => G(t, 'p1-pul', inner);
  const AWAY = (t, fx, fy, inner) => G(t, 'p1-away', inner, `--fx:${r1(fx)}px;--fy:${r1(fy)}px`);
  const HL = (t, d, inner) => G(t, 'p1-hl', inner, `--d:${d}s`);
  const tw = (s, fs) => String(s).replace(/<[^>]+>/g, '').length * fs * .62;
  // pastilla amb text (y = centre)
  const pill = (x, y, s, t, o = {}) => { const fs = o.fs || 16, w = o.w || tw(s, fs) + 20, h = fs + 12; return `<g ${A(t, o.cls || 'a-pop')}><rect x="${r1(x - w / 2)}" y="${r1(y - h / 2)}" width="${r1(w)}" height="${h}" rx="${h / 2}" fill="${o.bg || '#fff'}" stroke="${o.sc || UC}" stroke-width="2"/><text x="${r1(x)}" y="${r1(y + fs * .36)}" text-anchor="middle" font-size="${fs}" font-weight="900" fill="${o.c || INK}" ${FF}>${s}</text></g>`; };
  // fitxa quadrada amb un número (y = centre)
  const tile = (x, y, s, t, o = {}) => { const fs = o.fs || 17, w = o.w || Math.max(40, tw(s, fs) + 14), h = o.h || 32; return `<g ${A(t, o.cls || 'a-pop')}><rect x="${r1(x - w / 2)}" y="${r1(y - h / 2)}" width="${r1(w)}" height="${h}" rx="9" fill="${o.bg || '#fff'}" stroke="${o.sc || UC}" stroke-width="2.5"${o.dash ? ' stroke-dasharray="5 4"' : ''}/><text x="${r1(x)}" y="${r1(y + fs * .36)}" text-anchor="middle" font-size="${fs}" font-weight="900" fill="${o.c || INK}" ${FF}>${s}</text></g>`; };
  // ✓ verd o ✕ vermell
  const mark = (x, y, t, ok = true, r = 11) => `<g ${A(t)}><circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${ok ? OK : RED}"/><path d="${ok ? `M${r1(x - r * .45)},${r1(y + r * .02)} l${r1(r * .3)},${r1(r * .33)} l${r1(r * .58)},${r1(-r * .66)}` : `M${r1(x - r * .36)},${r1(y - r * .36)} l${r1(r * .72)},${r1(r * .72)} M${r1(x + r * .36)},${r1(y - r * .36)} l${r1(-r * .72)},${r1(r * .72)}`}" stroke="#fff" stroke-width="${r1(r * .3)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  // cercle groc amb un número petit (per comptar)
  const badge = (x, y, n, r = 10) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${Y}" stroke="#fff" stroke-width="1.5"/><text x="${r1(x)}" y="${r1(y + r * .42)}" text-anchor="middle" font-size="${r1(r * 1.15)}" font-weight="900" fill="${INK}" ${FF}>${n}</text>`;
  const dot = (x, y, col, r = 8) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${col}" stroke="${INK}" stroke-width="1.3"/>`;
  // fletxa corba (corba de Bézier quadràtica) que es dibuixa i acaba amb punta
  const qArr = (x1, y1, cx, cy, x2, y2, t, o = {}) => {
    const col = o.c || UC, sw = o.sw || 2.5, d = o.d || .35, a = Math.atan2(y2 - cy, x2 - cx), hs = o.hs || 7;
    const h1 = [x2 - hs * Math.cos(a - .5), y2 - hs * Math.sin(a - .5)], h2 = [x2 - hs * Math.cos(a + .5), y2 - hs * Math.sin(a + .5)];
    let s = `<path d="M${r1(x1)},${r1(y1)} Q${r1(cx)},${r1(cy)} ${r1(x2)},${r1(y2)}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ' pathLength="1"'} ${A(t, o.dash ? 'a-fade' : 'a-draw', `animation-duration:${d}s`)}/>`;
    s += `<path d="M${r1(h1[0])},${r1(h1[1])} L${r1(x2)},${r1(y2)} L${r1(h2[0])},${r1(h2[1])}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" ${A(t + d * .85, 'a-fade')}/>`;
    if (o.lab != null) { const lx = (x1 + 2 * cx + x2) / 4 + (o.lx || 0), ly = (y1 + 2 * cy + y2) / 4 + (o.ly || 0); s += T(lx, ly, o.lab, { fs: o.fs || 13, c: o.lc || col, t: t + .15 }); }
    return s;
  };
  const sArr = (x1, y1, x2, y2, t, o) => qArr(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, x2, y2, t, o);
  // salt en arc sobre una recta (h > 0 per sobre, h < 0 per sota)
  const hop = (x1, x2, y, h, t, o = {}) => qArr(x1, y, (x1 + x2) / 2, y - 2 * h, x2, y, t, { ly: h > 0 ? -6 : 15, hs: 6, ...o });
  // blocs de base 10
  const cubeR = (x, y, s, c) => `<rect x="${r1(x)}" y="${r1(y)}" width="${s}" height="${s}" rx="${r1(s * .2)}" fill="${c}" stroke="${INK}" stroke-width="1.2"/>`;
  const rodR = (x, y, s, c) => { let r = `<rect x="${r1(x)}" y="${r1(y)}" width="${s}" height="${s * 10}" rx="${r1(s * .25)}" fill="${c}" stroke="${INK}" stroke-width="1.4"/>`; for (let k = 1; k < 10; k++) r += `<line x1="${r1(x)}" x2="${r1(x + s)}" y1="${r1(y + k * s)}" y2="${r1(y + k * s)}" stroke="${INK}" stroke-width=".7" opacity=".45"/>`; return r; };
  const flatR = (x, y, s, c) => { let r = `<rect x="${r1(x)}" y="${r1(y)}" width="${s * 10}" height="${s * 10}" rx="${r1(s * .3)}" fill="${c}" stroke="${INK}" stroke-width="1.4"/>`; for (let k = 1; k < 10; k++) r += `<line x1="${r1(x + k * s)}" x2="${r1(x + k * s)}" y1="${r1(y)}" y2="${r1(y + 10 * s)}" stroke="${INK}" stroke-width=".6" opacity=".35"/><line x1="${r1(x)}" x2="${r1(x + 10 * s)}" y1="${r1(y + k * s)}" y2="${r1(y + k * s)}" stroke="${INK}" stroke-width=".6" opacity=".35"/>`; return r; };
  const HUND = '#3CC46A';
  // un número en barres de 10 i cubs solts (columnes de 5), de baix a dalt
  const blkNum = (n, x, yb, s, t, o = {}) => {
    const d = Math.floor(n / 10), u = n % 10, g = o.g || 4, dt = o.dt || .12; let out = '', px = x; const rods = [];
    for (let k = 0; k < d; k++) { rods.push(px); out += G(t + k * dt, 'a-pop', rodR(px, yb - 10 * s, s, o.cd || UC)); px += s + g; }
    const ux = px + (d ? 4 : 0), uw = Math.ceil(u / 5) * (s + 2);
    for (let k = 0; k < u; k++) out += G(t + d * dt + .1 + k * .07, 'a-pop', cubeR(ux + Math.floor(k / 5) * (s + 2), yb - (k % 5 + 1) * (s + 1.5), s, o.cu || Y));
    return { s: out, w: u ? ux + uw - x : px - g - x, rods, ux, uw, te: t + d * dt + .1 + u * .07 };
  };
  // monedes i bitllets d'euro
  const BILLC = { 5: '#8FA487', 10: '#D9695C', 20: '#4F86D6', 50: '#EE9A45' };
  const bill = (x, y, v, w = 64, h = 34) => `<rect x="${r1(x - w / 2)}" y="${r1(y - h / 2)}" width="${w}" height="${h}" rx="5" fill="${BILLC[v]}" stroke="${INK}" stroke-width="1.5"/><rect x="${r1(x - w / 2 + 4)}" y="${r1(y - h / 2 + 4)}" width="${w - 8}" height="${h - 8}" rx="3" fill="none" stroke="#fff" stroke-width="1.2" opacity=".6"/><circle cx="${r1(x + w / 2 - 13)}" cy="${r1(y)}" r="${r1(h * .24)}" fill="#fff" opacity=".35"/><text x="${r1(x - 7)}" y="${r1(y + 5.5)}" text-anchor="middle" font-size="${w > 50 ? 15 : 12}" font-weight="900" fill="#fff" ${FF}>${v} €</text>`;
  const coin = (x, y, v, r = 17) => { const [o, i] = v === 2 ? ['#C7CCD4', '#F2C14E'] : ['#F2C14E', '#C7CCD4']; return `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${o}" stroke="${INK}" stroke-width="1.5"/><circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(r * .66)}" fill="${i}"/><text x="${r1(x)}" y="${r1(y + r * .27)}" text-anchor="middle" font-size="${r1(r * .72)}" font-weight="900" fill="${INK}" ${FF}>${v}€</text>`; };
  // línia de temps: cada pas [nom, durada] → instant en què comença
  const TL = (steps, t0 = .25) => { const e = {}; let t = t0; for (const [k, d] of steps) { e[k] = +t.toFixed(2); t += d; } e.end = t; return e; };
  const AT = (c, e) => c.L.map(k => e[k]);
  const S = {};

  // comptar: les coses surten, es toquen d'una en una amb el seu número i al final el total
  S.p1count = ({ ic, n }) => {
    const sp = Math.min(46, 280 / n), sz = Math.min(40, sp - 4), cx = k => W / 2 + (k - (n - 1) / 2) * sp, cy = 70, t1 = .3 + n * .1 + .5, dt = .5;
    let s = `<g ${A(.1, 'a-fade')}><rect x="16" y="${cy + sz / 2}" width="${W - 32}" height="12" rx="6" fill="#C98B4E"/><rect x="34" y="${cy + sz / 2 + 12}" width="10" height="46" rx="4" fill="#A86F3A"/><rect x="${W - 44}" y="${cy + sz / 2 + 12}" width="10" height="46" rx="4" fill="#A86F3A"/></g>`;
    for (let k = 0; k < n; k++) s += PUL(t1 + k * dt, IC(ic, cx(k), cy, sz, .3 + k * .1)) + G(t1 + k * dt, 'a-pop', badge(cx(k), cy - sz / 2 - 16, k + 1, 13));
    const t2 = t1 + n * dt + .2;
    s += `<g ${A(t2)}><rect x="${W / 2 - 44}" y="${cy + sz / 2 + 24}" width="88" height="40" rx="20" fill="#fff" stroke="${UC}" stroke-width="2.5"/>` + T(W / 2 - 14, cy + sz / 2 + 53, n, { fs: 26 }) + IC(ic, W / 2 + 18, cy + sz / 2 + 44, 26) + '</g>';
    return { html: anSvg(W, cy + sz / 2 + 74, s), at: [.3, t1, t2] };
  };

  // abans i després: una escala on pujar un graó és un més i baixar-ne un és un menys
  S.p1stairs = ({ n }) => {
    const sw = 56, x = k => 20 + k * sw, top = k => 176 - (k + 1) * 24, cx = k => x(k) + sw / 2, tA = 1.5, tD = 2.8, tO = 4.1;
    let s = '';
    for (let k = 0; k < 5; k++) {
      s += `<rect x="${x(k)}" y="${top(k)}" width="${sw - 3}" height="${184 - top(k)}" rx="8" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" ${A(.2 + k * .12, 'a-fade')}/>`;
      if (k === 1 || k === 3) s += `<rect x="${x(k) + 3}" y="${top(k) + 3}" width="${sw - 9}" height="${184 - top(k) - 6}" rx="6" fill="${Y}" ${A(k === 1 ? tA : tD, 'a-fill')}/>`;
      s += (k >= 1 && k <= 3 ? (t => PUL(tO + (k - 1) * .4, t)) : (t => t))(T(cx(k), top(k) + 24, n - 2 + k, { fs: 18, t: .25 + k * .12 }));
    }
    s += IC('child', cx(2), top(2) - 21, 42, .9);
    s += qArr(cx(2) - 22, top(2) - 34, cx(1) + 2, top(2) - 40, cx(1), top(1) - 8, tA, { c: RED, sw: 3.5, hs: 9, d: .45 }) + T(cx(1) - 18, top(2) - 30, '−1', { fs: 18, c: RED, t: tA + .3 });
    s += qArr(cx(2) + 22, top(2) - 34, cx(3) - 2, top(3) - 44, cx(3), top(3) - 8, tD, { c: OK, sw: 3.5, hs: 9, d: .45 }) + T(cx(3) - 26, top(3) - 40, '+1', { fs: 18, c: OK, t: tD + .3 });
    [0, 1, 2].forEach(j => s += pill(40 + j * 44, 22, n - 1 + j, tO + j * .4, { fs: 16, w: 38, bg: j === 1 ? '#fff' : Y, sc: j === 1 ? UC : Y }));
    return { html: anSvg(W, 190, s), at: [tA, tD, tO] };
  };

  // fer una desena: de les coses soltes en fem un grup de 10 i la resta queden soltes
  S.p1grp10 = ({ ic, n }) => {
    const u = n - 10, sz = 30, t1 = 1.3, dt = .08, bx = 16, by = 100, bw = 5 * 34 + 12, bh = 2 * 34 + 12;
    const fin = i => i < 10 ? [bx + 23 + (i % 5) * 34, by + 23 + Math.floor(i / 5) * 34] : [238 + ((i - 10) % 2) * 36, by + 23 + Math.floor((i - 10) / 2) * 34];
    const st = i => [28 + (i % 7) * 44 + ((i * 37) % 13) - 6, 26 + Math.floor(i / 7) * 40 + ((i * 53) % 11) - 5];
    let s = `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="14" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" ${A(t1 - .2, 'a-fade')}/>`;
    for (let i = 0; i < n; i++) { const [fx, fy] = fin(i), [sx, sy] = st(i); s += G(.2 + i * .05, 'a-fade', SL(t1 + i * dt, sx - fx, sy - fy, IC(ic, fx, fy, sz))); }
    const t2 = t1 + n * dt + .6, t3 = t2 + 1.2;
    s += pill(bx + bw / 2, by, '10', t2, { fs: 15 }) + pill(256, by, u, t2 + .2, { fs: 15 });
    s += pill(bx + bw / 2, by + bh + 20, Lc('1 desena', '1 decena'), t3, { fs: 14 }) + pill(256, by + bh + 20, unitsW(u), t3 + .3, { fs: 14 });
    return { html: anSvg(W, by + bh + 38, s), at: [.2, t1, t3] };
  };

  // comparar amb blocs: guanya qui té més desenes (pre: el número següent abans de comparar)
  S.p1cmpBlk = ({ a, b, pre }) => {
    const s0 = pre ? 9 : 11, yb = pre ? 186 : 148, yT = yb - 10 * s0 - 12;
    const e = TL(pre ? [['pre', 1.4], ['nums', 1.2], ['tens', 1.3], ['more', 1.1], ['sign', 1]] : [['nums', 1.4], ['tens', 1.4], ['sign', 1]]);
    let s = '', bg = '';
    if (pre) s += tile(112, 24, pre[0], e.pre) + sArr(138, 24, 180, 24, e.pre + .4, { lab: '+1', ly: -8 }) + tile(208, 24, pre[1], e.pre + .8, { bg: Y, sc: Y });
    const wA = blkNum(a, 0, yb, s0, 0).w, wB = blkNum(b, 0, yb, s0, 0).w, xa = 80 - wA / 2, xb = 240 - wB / 2;
    const BA = blkNum(a, xa, yb, s0, e.nums), BB = blkNum(b, xb, yb, s0, e.nums + .3);
    s += BA.s + BB.s + T(80, yT, a, { fs: 26, t: e.nums }) + T(240, yT, b, { fs: 26, t: e.nums + .3 });
    const da = Math.floor(a / 10), db = Math.floor(b / 10), rc = (B, d) => B.rods.length ? (B.rods[0] + B.rods[d - 1] + s0) / 2 : B.ux - s0 - 6;
    if (!db) s += `<rect x="${xb - s0 - 10}" y="${yb - 10 * s0}" width="${s0}" height="${10 * s0}" rx="3" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="4 3" ${A(e.tens, 'a-fade')}/>`;
    s += pill(rc(BA, da), yb + 20, tensW(da), e.tens, { fs: 13 }) + pill(db ? rc(BB, db) : xb - s0 / 2 - 10, yb + 20, tensW(db), e.tens + .3, { fs: 13, sc: db ? UC : RED });
    if (pre) for (let k = db; k < da; k++) bg += `<rect x="${BA.rods[k] - 4}" y="${yb - 10 * s0 - 4}" width="${s0 + 8}" height="${10 * s0 + 8}" rx="5" fill="${Y}" ${A(e.more, 'a-fill')}/>`;
    s += `<g ${A(e.sign)}><circle cx="160" cy="${yb - 5 * s0}" r="22" fill="${Y}"/>` + T(160, yb - 5 * s0 + 12, a > b ? '&gt;' : '&lt;', { fs: 34 }) + '</g>';
    return { html: anSvg(W, yb + 36, bg + s), at: pre ? [e.pre, e.tens, e.more, e.sign] : [e.nums, e.tens, e.sign] };
  };

  // sumar és ajuntar: el segon grup arriba, ho comptem tot i surt la suma
  S.p1join = (c) => {
    const { ic, a, b } = c, sz = c.sz || 34, sp = sz + 5, ca = c.ca || Math.min(a, 5), cb = c.cb || Math.min(b, 5);
    const rows = Math.max(Math.ceil(a / ca), Math.ceil(b / cb)), gy = 24 + sz / 2, XA = c.xa || 86, XB = c.xb || 236;
    const pos = (i, cols, X) => [X + ((i % cols) - (cols - 1) / 2) * sp, gy + Math.floor(i / cols) * sp];
    const cdt = Math.min(.26, 1.6 / (a + b));
    const D = { a: .5 + a * .06, b: 1.1, join: .5, nums: .8, plus: .8, q: .9, count: (a + b) * cdt + .3, eq: 1, tot: .8 };
    const e = TL(c.seq.map(k => [k, D[k]]));
    let s = '', bg = '';
    const hy = gy + (rows - 1) * sp + sz / 2;
    if (e.join != null) { const x1 = XA - ca * sp / 2 - 8, x2 = XB + cb * sp / 2 + 8; bg += `<rect x="${r1(x1)}" y="${r1(gy - sz / 2 - 9)}" width="${r1(x2 - x1)}" height="${r1(hy - gy + sz / 2 + 18)}" rx="20" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" stroke-dasharray="7 5" ${A(e.join, 'a-fade')}/>`; }
    for (let i = 0; i < a; i++) { const [x, y] = pos(i, ca, XA); s += IC(ic, x, y, sz, e.a + i * .06); }
    const [fx, fy] = c.from || [110, 0];
    for (let i = 0; i < b; i++) { const [x, y] = pos(i, cb, XB); s += G(e.b + i * .06, 'a-fade', SL(e.b + i * .06, fx, fy, IC(ic, x, y, sz), .8)); }
    if (e.count != null) for (let i = 0; i < a + b; i++) { const [x, y] = i < a ? pos(i, ca, XA) : pos(i - a, cb, XB); s += G(e.count + i * cdt, 'a-pop', badge(x + sz * .34, y - sz * .34, i + 1, 9)); }
    let py = hy + 24;
    if (e.nums != null) { s += pill(XA, py, a, e.nums, { fs: 16, w: 40 }) + pill(XB, py, b, e.nums + .25, { fs: 16, w: 40 }); py += 38; }
    if (e.plus != null) s += pill(W / 2, gy + (rows - 1) * sp / 2, '+', e.plus, { fs: 20, bg: Y, sc: Y, w: 30 });
    if (e.q != null) s += OUT(e.eq ?? e.tot, pill(W / 2, py, '?', e.q, { fs: 20, w: 44 }));
    if (e.eq != null) s += pill(W / 2, py, `${a} + ${b} = ${a + b}`, e.eq, { fs: 18, bg: Y, sc: Y });
    if (e.tot != null) { py += 40; s += `<g ${A(e.tot)}><rect x="${W / 2 - 42}" y="${py - 18}" width="84" height="36" rx="18" fill="#fff" stroke="${UC}" stroke-width="2.5"/>` + T(W / 2 - 13, py + 8, a + b, { fs: 22 }) + IC(ic, W / 2 + 22, py, 24) + '</g>'; }
    return { html: anSvg(W, py + 22, bg + s), at: AT(c, e) };
  };

  // restar és treure: unes coses se'n van (deixen el lloc buit) i comptem les que queden
  S.p1take = (c) => {
    const { ic, a, b } = c, sz = c.sz || 34, sp = sz + (c.gap ?? 6), cols = c.cols || a, rows = Math.ceil(a / cols), X0 = c.x || W / 2, gy = (c.y || 24) + sz / 2;
    const pos = i => [X0 + ((i % cols) - (cols - 1) / 2) * sp, gy + Math.floor(i / cols) * sp];
    const gone = c.gone || [...Array(b)].map((_, k) => a - b + k), gset = new Set(gone), rem = [...Array(a).keys()].filter(i => !gset.has(i));
    const D = { a: .5 + Math.min(a, 12) * .06, go: 1.3, minus: .9, count: (a - b) * .3 + .3, eq: 1, tot: 1.2 };
    const e = TL(c.seq.map(k => [k, D[k]]));
    let s = '', bg = '';
    if (c.mode === 'give') s += IC(c.friend, c.fx, c.fy, 46, e.a);
    for (let i = 0; i < a; i++) {
      const [x, y] = pos(i), ti = e.a + (a > 12 ? Math.floor(i / cols) * .15 : i * .06);
      if (!gset.has(i)) { s += IC(ic, x, y, sz, ti); continue; }
      const k = gone.indexOf(i), tg = e.go + k * (a > 12 ? .03 : .15);
      bg += `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(sz * .4)}" fill="none" stroke="${UC}" stroke-width="2" stroke-dasharray="4 3" opacity=".6" ${A(tg + .3, 'a-fade')}/>`;
      if (c.mode === 'give') { const dx = c.fx - 16 + (k % 2) * 32, dy = c.fy + 44 + Math.floor(k / 2) * 30; s += G(ti, 'a-fade', SL(tg, x - dx, y - dy, IC(ic, dx, dy, sz))); }
      else s += G(ti, 'a-fade', AWAY(tg, 0, c.mode === 'fly' ? -80 : 14, IC(ic, x, y, sz)));
    }
    if (e.count != null) rem.forEach((i, k) => { const [x, y] = pos(i); s += G(e.count + k * .3, 'a-pop', badge(x + sz * .34, y - sz * .34, k + 1, 9)); });
    let py = gy + (rows - 1) * sp + sz / 2 + 24;
    if (e.minus != null) { s += pill(X0, py, '−', e.minus, { fs: 22, bg: RED, sc: RED, c: '#fff', w: 40 }); py += 40; }
    if (e.tot != null) {
      const lastRows = [...new Set(rem.map(i => Math.floor(i / cols)))];
      lastRows.forEach((r, k) => { const cnt = rem.filter(i => Math.floor(i / cols) === r).length; s += pill(X0 + cols * sp / 2 + 20, gy + r * sp, cnt, e.tot + k * .25, { fs: 13, w: 32 }); });
    }
    const ex = c.totRight ? 100 : W / 2;
    if (e.eq != null) s += pill(ex, py, `${a} − ${b} = ${a - b}`, e.eq, { fs: 18, bg: Y, sc: Y });
    if (e.tot != null) s += `<g ${A(e.tot + .8)}><rect x="${250 - 40}" y="${py - 18}" width="80" height="36" rx="18" fill="#fff" stroke="${UC}" stroke-width="2.5"/>` + T(250 - 12, py + 8, a - b, { fs: 22 }) + IC(ic, 250 + 22, py, 22) + '</g>';
    return { html: anSvg(W, py + 22, bg + s), at: AT(c, e) };
  };

  // recta numèrica: el conill salta d'un en un (endavant per sumar, enrere per restar)
  S.p1nline = (c) => {
    const { lo, hi, start, n } = c, dir = Math.sign(n), m = Math.abs(n), x0 = 26, x1 = 294, u = (x1 - x0) / (hi - lo), X = v => x0 + (v - lo) * u, y = 124;
    const D = { q: 1, start: 1, hops: m * .5 + .5, brk: 1.2, eq: 1 };
    const e = TL(c.seq.map(k => [k, D[k]]));
    let bg = '', s = `<line x1="${x0 - 14}" x2="${x1 + 14}" y1="${y}" y2="${y}" stroke="${INK}" stroke-width="3" stroke-linecap="round" ${A(.1, 'a-fade')}/>`;
    for (let v = lo; v <= hi; v++) s += `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${y - 6}" y2="${y + 6}" stroke="${INK}" stroke-width="2.5" ${A(.1, 'a-fade')}/>` + T(X(v), y + 28, v, { fs: 16, w: 800, t: .15, cls: 'a-fade' });
    const t0 = e.start ?? e.q;
    bg += `<circle cx="${r1(X(start))}" cy="${y + 22}" r="14" fill="none" stroke="${UC}" stroke-width="3" ${A(t0)}/>`;
    if (c.target != null) bg += `<circle cx="${r1(X(c.target))}" cy="${y + 22}" r="14" fill="none" stroke="${UC}" stroke-width="2.5" stroke-dasharray="4 3" ${A(t0)}/>`;
    let rab = IC('rabbit', X(start + n), y - 21, 38);
    for (let k = 0; k < m; k++) {
      const a = start + dir * k, b = a + dir, tk = e.hops + k * .5;
      s += hop(X(a), X(b), y - 5, 17, tk);
      bg += `<circle cx="${r1(X(b))}" cy="${y + 22}" r="13" fill="${Y}" ${A(tk + .35)}/>`;
      rab = G(tk, 'p1-hop', rab, `--fx:${r1(-dir * u)}px`);
      s += T((X(a) + X(b)) / 2, y - 29, k + 1, { fs: 12, c: UC, t: c.cntAt ? e[c.cntAt] + k * .15 : tk + .3 });
    }
    s += G(t0, 'a-fade', rab);
    if (e.brk != null) { const xa = X(start), xb = X(start + n), l = Math.min(xa, xb), r = Math.max(xa, xb); s += `<path d="M${r1(l)},${y - 38} v-7 h${r1(r - l)} v7" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(e.brk + .6, 'a-draw')}/>` + pill((l + r) / 2, y - 60, m, e.brk + .8, { fs: 15, w: 36, bg: Y, sc: Y }); }
    s += OUT(e.eq, pill(W / 2, 22, c.q, e.q ?? .25, { fs: 17 })) + pill(W / 2, 22, c.eq, e.eq, { fs: 17, bg: Y, sc: Y });
    return { html: anSvg(W, y + 42, bg + s), at: AT(c, e) };
  };

  // sèries: fitxes que surten d'una en una, els salts entre elles, el número que falta
  S.p1seq = (c) => {
    const rows = c.rows, gap = 7, rowH = c.rowH || 64;
    const nT = r => r.v.length + (r.ext ? 1 : 0), maxN = Math.max(...rows.map(r => nT(r) + (r.dots ? .5 : 0)));
    const tw_ = Math.min(48, (W - 22 - gap * (maxN - 1)) / maxN), X = j => 12 + tw_ / 2 + j * (tw_ + gap), fs = tw_ < 40 ? 15 : 17;
    const steps = []; rows.forEach((r, i) => { steps.push(['r' + i, r.v.length * .08 + .3]); if (r.step) steps.push(['a' + i, (r.v.length - 1) * .12 + .3]); if (r.u) steps.push(['u' + i, 1]); if (r.q) steps.push(['q' + i, 1]); });
    rows.forEach((r, i) => { if (r.ext) steps.push(['x' + i, 1.3]); });
    const e = TL(steps);
    let s = '';
    rows.forEach((r, i) => {
      const y = 46 + i * rowH, n = r.v.length;
      const tl = (j, val, t, o = {}) => { const str = String(val), cx = X(j); let g = `<rect x="${r1(cx - tw_ / 2)}" y="${y - 16}" width="${r1(tw_)}" height="32" rx="9" fill="${o.bg || '#fff'}" stroke="${o.sc || UC}" stroke-width="2.5"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`;
        if (r.u && !o.dash) g += `<circle cx="${r1(cx + (str.length - 1) * fs * .31)}" cy="${y}" r="${r1(fs * .56)}" fill="${Y}" ${A(e['u' + i] + j * .12)}/>`;
        return G(t, 'a-pop', g + T(cx, y + fs * .36, str, { fs })); };
      r.v.forEach((v, j) => { const last = j === n - 1 && r.q; s += tl(j, last ? '?' : v, e['r' + i] + j * .08, last ? { dash: true } : {}); if (last) s += tl(j, v, e['q' + i], { bg: Y, sc: Y }); });
      if (r.dots) { const dd = T(X(n) - tw_ / 4, y + 6, '…', { fs: 20, t: e['r' + i] + n * .1 }); s += r.ext ? OUT(e['x' + i], dd) + T(X(n + 1) - tw_ / 4, y + 6, '…', { fs: 20, t: e['x' + i] + 1 }) : dd; }
      if (r.step) for (let j = 0; j < n - 1; j++) s += hop(X(j) + tw_ * .18, X(j + 1) - tw_ * .18, y - 18, 9, e['a' + i] + j * .12, { lab: r.step, fs: 11, hs: 5, sw: 2 });
      if (r.ext) { const te = e['x' + i]; s += hop(X(n - 1) + tw_ * .18, X(n) - tw_ * .18, y - 18, 9, te, { lab: r.step, fs: 11, hs: 5, sw: 2 }) + tl(n, r.ext.v, te + .9, { bg: Y, sc: Y });
        for (let j = 0; j <= n; j++) s += T(X(j), y + 29, j + 1, { fs: 11, c: UC, t: te + .15 + j * .1 }); }
    });
    const hasX = rows.some(r => r.ext);
    return { html: anSvg(W, 46 + (rows.length - 1) * rowH + 22 + (hasX ? 14 : 0), s), at: AT(c, e) };
  };

  // el marc de 10: primer completem (o buidem) la desena i després la resta
  S.p1tenFr = ({ a, b, op }) => {
    const cs = 26, fw = cs * 5, X1 = 22, X2 = 168, FY = 34, cell = (f, k) => [(f ? X2 : X1) + (k % 5) * cs + cs / 2, FY + Math.floor(k / 5) * cs + cs / 2], rr = cs * .36;
    let s = '', bg = '';
    for (const X of [X1, X2]) bg += `<g ${A(.15, 'a-fade')}><rect x="${X}" y="${FY}" width="${fw}" height="${2 * cs}" rx="6" fill="#fff" stroke="${INK}" stroke-width="2.5"/>` + [1, 2, 3, 4].map(k => `<line x1="${X + k * cs}" x2="${X + k * cs}" y1="${FY}" y2="${FY + 2 * cs}" stroke="${INK}" stroke-width="1.4"/>`).join('') + `<line x1="${X}" x2="${X + fw}" y1="${FY + cs}" y2="${FY + cs}" stroke="${INK}" stroke-width="1.4"/></g>`;
    if (op === '+') {
      const f = 10 - a, e = TL([['q', 1.7], ['split', 1.3], ['ten', 1.5], ['rest', 1.5], ['eq', 1]]), SY = 130;
      for (let k = 0; k < a; k++) { const [x, y] = cell(0, k); s += G(.3 + k * .07, 'a-pop', dot(x, y, UC, rr)); }
      const sx = j => W / 2 + (j - (b - 1) / 2) * 28 + (j >= f ? 12 : -12);
      for (let j = 0; j < b; j++) { const [tx, ty] = j < f ? cell(0, a + j) : cell(1, j - f), t = j < f ? e.ten + j * .2 : e.rest + (j - f) * .2; s += G(.9 + j * .08, 'a-fade', SL(t, sx(j) - tx, SY - ty, dot(tx, ty, Y, rr))); }
      const xm = (sx(f - 1) + sx(f)) / 2;
      s += `<line x1="${r1(xm)}" x2="${r1(xm)}" y1="${SY - 18}" y2="${SY + 18}" stroke="${RED}" stroke-width="3" stroke-dasharray="4 3" ${A(e.split, 'a-fade')}/>`;
      s += pill((sx(0) + sx(f - 1)) / 2, SY + 32, f, e.split + .2, { fs: 15, w: 34 }) + pill((sx(f) + sx(b - 1)) / 2, SY + 32, b - f, e.split + .4, { fs: 15, w: 34 });
      s += pill(X1 + fw / 2, 16, '10', e.ten + f * .2 + .5, { fs: 15, bg: Y, sc: Y }) + pill(X2 + fw / 2, 16, `10 + ${b - f} = ${a + b}`, e.rest + (b - f) * .2 + .5, { fs: 14 });
      s += pill(W / 2, SY + 70, `${a} + ${b} = ${a + b}`, e.eq, { fs: 18, bg: Y, sc: Y });
      return { html: anSvg(W, SY + 92, bg + s), at: [e.q, e.split, e.ten, e.rest, e.eq] };
    }
    const u = a - 10, r2 = b - u, e = TL([['q', 1.5], ['split', 1.4], ['first', 1.5], ['second', 1.5], ['eq', 1]]);
    for (let k = 0; k < 10; k++) { const [x, y] = cell(0, k), gone = k >= 10 - r2; s += gone ? G(.3 + k * .06, 'a-fade', AWAY(e.second + (k - 10 + r2) * .15, 0, -40, dot(x, y, UC, rr))) : G(.3 + k * .06, 'a-pop', dot(x, y, UC, rr)); if (gone) bg += `<circle cx="${x}" cy="${y}" r="${rr}" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="3 3" ${A(e.second + .4, 'a-fade')}/>`; }
    for (let k = 0; k < u; k++) { const [x, y] = cell(1, k); s += G(.9 + k * .06, 'a-fade', AWAY(e.first + k * .15, 0, -40, dot(x, y, UC, rr))); bg += `<circle cx="${x}" cy="${y}" r="${rr}" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="3 3" ${A(e.first + .4, 'a-fade')}/>`; }
    const by = FY + 2 * cs + 20;
    s += pill(X2 + (u * cs) / 2, by, u, e.split, { fs: 15, w: 34, sc: RED }) + pill(X1 + fw - (r2 * cs) / 2, by, r2, e.split + .3, { fs: 15, w: 34, sc: RED });
    s += pill(W / 2, 15, `${b} = ${u} + ${r2}`, e.split + .6, { fs: 14 });
    s += pill(X2 + fw / 2, by + 40, `${a} − ${u} = 10`, e.first + .6, { fs: 15 }) + pill(X1 + fw / 2, by + 40, `10 − ${r2} = ${a - b}`, e.second + .6, { fs: 15 });
    s += pill(W / 2, by + 80, `${a} − ${b} = ${a - b}`, e.eq, { fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, by + 100, bg + s), at: [e.q, e.split, e.first, e.second, e.eq] };
  };

  // el doble (un mirall) i la meitat (partir en dues parts iguals)
  S.p1dblHalf = ({ rows }) => {
    let s = '', t = .25, y = 30; const at = [], sp = 20;
    rows.forEach(r => {
      at.push(t);
      if (r.k === 'dbl') {
        const ax = W / 2, n = r.n; let Lg = '', Rg = '';
        for (let k = 0; k < n; k++) { Lg += G(t + k * .08, 'a-pop', dot(ax - 14 - k * sp, y, UC)); Rg += dot(ax - 14 - k * sp, y, Y); }
        const tf = t + n * .08 + .3;
        s += `<line x1="${ax}" x2="${ax}" y1="${y - 16}" y2="${y + 16}" stroke="${UC}" stroke-width="2" stroke-dasharray="4 4" ${A(t, 'a-fade')}/>` + Lg + G(tf, 'a-fade', G(tf, 'p1-id', Rg, `transform:scaleX(-1);transform-origin:${ax}px ${y}px;--d:.7s`));
        s += pill(ax, y + 31, `${n} + ${n} = ${2 * n}`, tf + .8, { fs: 15 });
        t = tf + 1.3;
      } else if (r.k === 'half') {
        const n = r.n, h = n / 2, gx = 12; let Lg = '', Rg = '';
        for (let k = 0; k < n; k++) { const d_ = G(t + k * .03, 'a-pop', dot(W / 2 + (k - (n - 1) / 2) * sp, y, UC)); if (k < h) Lg += d_; else Rg += d_; }
        const tc = t + n * .03 + .3, tr = tc + .9;
        s += `<line x1="${W / 2}" x2="${W / 2}" y1="${y - 17}" y2="${y + 17}" stroke="${RED}" stroke-width="3" stroke-dasharray="5 4" ${A(tc, 'a-fade')}/>`;
        s += G(tc + .3, 'p1-id', Lg, `transform:translateX(-${gx}px);--d:.5s`) + G(tc + .3, 'p1-id', Rg, `transform:translateX(${gx}px);--d:.5s`);
        s += pill(W / 2 - gx - h * sp / 2, y + 31, h, tr, { fs: 15, w: 36 }) + pill(W / 2 + gx + h * sp / 2, y + 31, h, tr + .15, { fs: 15, w: 36 });
        if (r.res) at.push(tr);
        t = tr + .8;
      } else {
        const n = r.n, bw = 118, bh = 30, x0 = W / 2 - bw - 1;
        s += G(t, 'a-grow', `<rect x="${x0}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="7" fill="${UC}"/>`) + T(x0 + bw / 2, y + 6, n, { fs: 16, c: '#fff', t: t + .3 });
        s += G(t + .6, 'a-fade', SL(t + .6, -bw, 0, `<rect x="${x0 + bw + 2}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="7" fill="${Y}"/>` + T(x0 + bw * 1.5 + 2, y + 6, n, { fs: 16 })));
        s += `<path d="M${x0},${y + bh / 2 + 4} v6 h${2 * bw + 2} v-6" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(t + 1.3, 'a-draw')}/>` + pill(W / 2, y + 36, `${n} + ${n} = ${2 * n}`, t + 1.5, { fs: 15 });
        t += 2.8;
      }
      y += 70;
    });
    return { html: anSvg(W, y - 70 + 52, s), at };
  };

  // comptar de 10 en 10: deu barres de 10 que, juntes, fan un quadrat de 100
  S.p1rods = () => {
    const s0 = 11, sp = 28, x = k => 22 + k * sp, yt = 50, tA = .25, tB = tA + 5 * .3 + .5, tC = tB + 5 * .3 + .7, px = k => 105 + k * s0;
    let s = '';
    for (let k = 0; k < 10; k++) { const t = (k < 5 ? tA : tB) + (k % 5) * .3; s += G(t, 'a-fade', SL(tC, x(k) - px(k), 0, rodR(px(k), yt, s0, UC))) + OUT(tC - .1, T(x(k) + s0 / 2, yt - 10, (k + 1) * 10, { fs: 13, t })); }
    s += `<rect x="${px(0) - 5}" y="${yt - 5}" width="${s0 * 10 + 10}" height="${s0 * 10 + 10}" rx="8" fill="none" stroke="${Y}" stroke-width="4" ${A(tC + .8, 'a-fade')}/>`;
    s += pill(W / 2, yt + 10 * s0 + 28, Lc('10 desenes = 100', '10 decenas = 100'), tC + .9, { fs: 15, bg: Y, sc: Y });
    return { html: anSvg(W, yt + 10 * s0 + 48, s), at: [tA, tB, tC + .9] };
  };

  // un número de dues xifres amb blocs: desenes i unitats, i com es llegeix
  S.p1blk = ({ n, word }) => {
    const d = Math.floor(n / 10), u = n % 10, s0 = 11, yb = 138, B = blkNum(n, 22, yb, s0, .25, { g: 5 });
    const rodsC = 22 + (d * (s0 + 5) - 5) / 2, unitsC = B.ux + B.uw / 2, t1 = B.te + .4, t2 = t1 + 1.5, t3 = t2 + 1.9;
    let s = B.s + pill(rodsC, yb + 20, tensW(d), t1, { fs: 13 }) + pill(unitsC, yb + 50, unitsW(u), t1 + .3, { fs: 13 });
    s += T(292, 44, d * 10, { a: 'end', fs: 26, c: UC, t: t2 }) + T(292, 78, `+ ${u}`, { a: 'end', fs: 26, c: YD, t: t2 + .35 });
    s += `<line x1="212" x2="296" y1="90" y2="90" stroke="${INK}" stroke-width="3" stroke-linecap="round" pathLength="1" ${A(t2 + .7, 'a-draw')}/>`;
    s += T(292, 128, `<tspan fill="${UC}">${d}</tspan><tspan fill="${YD}">${u}</tspan>`, { a: 'end', fs: 36, t: t2 + 1 });
    s += pill(240, 164, Lc(...word), t3, { fs: 12, bg: Y, sc: Y });
    return { html: anSvg(W, yb + 68, s), at: [t1, t2 + 1, t3] };
  };

  // sumar desenes: les barres s'ajunten i les comptem
  S.p1rodsAdd = ({ a, b }) => {
    const s0 = 11, sp = 18, yt = 58, xa = k => 24 + k * sp, xbI = k => 176 + k * sp, xbF = k => 24 + (a + k) * sp, e = TL([['q', 1.9], ['join', 2.6], ['res', 1]]);
    let s = '';
    for (let k = 0; k < a; k++) s += G(.25 + k * .15, 'a-pop', rodR(xa(k), yt, s0, UC));
    for (let k = 0; k < b; k++) s += G(.8 + k * .15, 'a-fade', SL(e.join, xbI(k) - xbF(k), 0, rodR(xbF(k), yt, s0, Y)));
    s += OUT(e.join, T(xa(0) + ((a - 1) * sp + s0) / 2, yt - 14, a * 10, { fs: 20, t: .4 }) + T(xbI(0) + ((b - 1) * sp + s0) / 2, yt - 14, b * 10, { fs: 20, t: 1 }) + T(146, yt + 62, '+', { fs: 30, c: UC, t: 1.2 }));
    for (let k = 0; k < a + b; k++) s += G(e.join + .8 + k * .18, 'a-pop', badge(xa(k) + s0 / 2, yt - 14, k + 1, 9));
    s += pill(240, 92, tensW(a + b), e.join + .9 + (a + b) * .18, { fs: 15 }) + pill(240, 140, (a + b) * 10, e.res, { fs: 24, bg: Y, sc: Y, w: 70 });
    return { html: anSvg(W, yt + 10 * s0 + 14, s), at: [e.q, e.join, e.res] };
  };

  // figures planes: els costats es dibuixen d'un en un i es compten (i els vèrtexs, si cal)
  const shapePts = (k, cx, cy, R) => {
    if (k === 'tri') return [[cx, cy - R], [cx + R * .98, cy + R * .72], [cx - R * .98, cy + R * .72]];
    if (k === 'sq') { const h = R * .8; return [[cx - h, cy - h], [cx + h, cy - h], [cx + h, cy + h], [cx - h, cy + h]]; }
    if (k === 'rect') { const w = R * 1.32, h = R * .66; return [[cx - w, cy - h], [cx + w, cy - h], [cx + w, cy + h], [cx - w, cy + h]]; }
    const off = -Math.PI / 2 + (k % 2 ? 0 : Math.PI / k); return [...Array(k)].map((_, j) => [cx + R * Math.cos(off + 2 * Math.PI * j / k), cy + R * Math.sin(off + 2 * Math.PI * j / k)]);
  };
  S.p1shapes = (c) => {
    let s = '', bg = '', t = .25; const st = [], dt0 = c.dt || .28;
    c.items.forEach(it => {
      const { k, x, y, R } = it; st.push(t); let cnt = 0;
      if (k === 'circ') {
        bg += `<circle cx="${x}" cy="${y}" r="${r1(R * .86)}" fill="${UC}" opacity=".16" ${A(t, 'a-fade')}/>`;
        s += `<circle cx="${x}" cy="${y}" r="${r1(R * .86)}" fill="none" stroke="${INK}" stroke-width="3.5" pathLength="1" transform="rotate(-90 ${x} ${y})" ${A(t, 'a-draw', `animation-duration:${c.fast ? .5 : .8}s`)}/>`;
        t += c.fast ? .55 : .9;
      } else {
        const P = shapePts(k, x, y, R), n = P.length, cxm = P.reduce((a, p) => a + p[0], 0) / n, cym = P.reduce((a, p) => a + p[1], 0) / n; cnt = n;
        bg += `<polygon points="${P.map(p => p.map(r1).join(',')).join(' ')}" fill="${UC}" opacity=".16" ${A(t, 'a-fade')}/>`;
        P.forEach((p, j) => {
          const q = P[(j + 1) % n], long = j % 2 === 0, col = k === 'rect' && c.rectCol ? (long ? UC : YD) : INK, tj = t + j * dt0;
          s += `<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(q[0])}" y2="${r1(q[1])}" stroke="${col}" stroke-width="${k === 'rect' && c.rectCol ? 4.5 : 3.5}" stroke-linecap="round" pathLength="1" ${A(tj, 'a-draw')}/>`;
          const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, vx = mx - cxm, vy = my - cym, vl = Math.hypot(vx, vy) || 1;
          if (c.num) s += G(tj + .25, 'a-pop', badge(mx + vx / vl * 13, my + vy / vl * 13, j + 1, 8));
          if (k === 'sq' && c.ticks) { const px_ = -(q[1] - p[1]), py_ = q[0] - p[0], pl = Math.hypot(px_, py_); s += `<line x1="${r1(mx - px_ / pl * 6)}" y1="${r1(my - py_ / pl * 6)}" x2="${r1(mx + px_ / pl * 6)}" y2="${r1(my + py_ / pl * 6)}" stroke="${RED}" stroke-width="3" stroke-linecap="round" ${A(t + n * dt0 + .1, 'a-fade')}/>`; }
        });
        if (c.vtx) P.forEach((p, j) => s += `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="5.5" fill="${RED}" stroke="#fff" stroke-width="1.5" ${A(t + n * dt0 + .15 + j * .15)}/>`);
        t += n * dt0 + (c.vtx ? n * .15 + .2 : 0) + (c.fast ? .15 : .35);
      }
      const lx = it.lx ?? x, ly = it.lyA ?? y + R + 22;
      if (c.vtx) s += G(t - .05, 'a-pop', `<rect x="${lx - 42}" y="${ly - 14}" width="84" height="28" rx="14" fill="#fff" stroke="${UC}" stroke-width="2"/><line x1="${lx - 33}" y1="${ly + 5}" x2="${lx - 22}" y2="${ly - 5}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` + T(lx - 11, ly + 5.5, cnt, { fs: 15 }) + `<circle cx="${lx + 12}" cy="${ly}" r="5" fill="${RED}"/>` + T(lx + 28, ly + 5.5, cnt, { fs: 15 }));
      else s += pill(lx, ly, it.lab ?? cnt, t - .05, { fs: 14, w: it.lab ? undefined : 30 });
      t += c.fast ? .1 : .25;
    });
    return { html: anSvg(W, c.h, bg + s), at: c.g.map(i => st[i]) };
  };

  // patrons de colors: el tros que es repeteix i el que ve després
  const PCOL = { r: RED, b: BLUE, g: GRN, y: Y };
  S.p1pattern = ({ seq, unit, next }) => {
    const n = seq.length + 1, sp = Math.min(42, 290 / n), x = j => W / 2 + (j - (n - 1) / 2) * sp, y = 40, R = Math.min(15, sp * .37);
    const bead = (cx, cy, col, r = R) => `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r}" fill="${col}" stroke="${INK}" stroke-width="2"/><circle cx="${r1(cx - r * .35)}" cy="${r1(cy - r * .35)}" r="${r1(r * .28)}" fill="#fff" opacity=".55"/>`;
    const tQ = .25 + seq.length * .28, tU = tQ + .6, reps = seq.length / unit, tN = tU + reps * .5 + 1;
    let s = seq.map((c_, j) => G(.25 + j * .28, 'a-pop', bead(x(j), y, PCOL[c_]))).join('');
    s += `<circle cx="${r1(x(n - 1))}" cy="${y}" r="${R}" fill="#fff" stroke="${UC}" stroke-width="2.5" stroke-dasharray="4 3" ${A(tQ)}/>` + OUT(tN, T(x(n - 1), y + 6, '?', { fs: 17, c: UC, t: tQ }));
    for (let r = 0; r < reps; r++) { const a = x(r * unit) - R, b = x((r + 1) * unit - 1) + R; s += `<path d="M${r1(a)},${y + R + 7} v8 h${r1(b - a)} v-8" fill="none" stroke="${UC}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${A(tU + r * .5, 'a-draw')}/>`; }
    // el tros que es repeteix, a part
    const bw = unit * 30 + 50, bx = W / 2 - bw / 2, by = y + R + 34;
    s += `<g ${A(tU + reps * .5, 'a-fade')}><rect x="${r1(bx)}" y="${by}" width="${r1(bw)}" height="36" rx="18" fill="#fff" stroke="${UC}" stroke-width="2"/>` + seq.slice(0, unit).map((c_, j) => bead(bx + 20 + j * 30, by + 18, PCOL[c_], 11)).join('') + IC('repeat', bx + bw - 22, by + 18, 24) + '</g>';
    s += G(tN, 'a-pop', bead(x(n - 1), y, PCOL[next])) + mark(x(n - 1) + R * .9, y - R * .9, tN + .4, true, 8);
    return { html: anSvg(W, by + 44, s), at: [.25, tU, tN] };
  };

  // rellotge: les agulles giren; opcions per llegir minuts de 5 en 5, quarts (sectors) i hora digital
  S.p1clock = (c) => {
    const cx = c.cx || 102, cy = 112, R = 88, rad = d => d * Math.PI / 180, P = (d, r) => [cx + r * Math.sin(rad(d)), cy - r * Math.cos(rad(d))];
    let base = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#fff" stroke="${INK}" stroke-width="4"/>`, hl = '', nums = '', s = '';
    for (let k = 0; k < 60; k++) { const [x1, y1] = P(k * 6, k % 5 ? R - 7 : R - 11), [x2, y2] = P(k * 6, R - 3); base += `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${INK}" stroke-width="${k % 5 ? 1 : 2.5}"/>`; }
    for (let h = 1; h <= 12; h++) { const [x, y] = P(h * 30, R - 25); nums += T(x, y + 5.5, h, { fs: 15, w: 800 }); }
    const hand = (len, w, col, d0) => `<line x1="${cx}" y1="${cy + 10}" x2="${cx}" y2="${cy - len}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" transform="rotate(${d0} ${cx} ${cy})"/>`;
    const rotG = (inner, t, dd, d) => G(t, 'p1-id', inner, `transform:rotate(${dd}deg);transform-origin:${cx}px ${cy}px;--d:${d.toFixed(2)}s`);
    let t = .3, mA = null, hA = null, mA0 = 0, hA0 = 0, mShow = null, hShow = null; const mR = [], hR = [], digs = [], at = [];
    c.ev.forEach(o => {
      at.push(t); let td = 0;
      if (o.h != null) { if (hA == null) { hA = hA0 = o.h; hShow = t; } else { const d = Math.max(.6, Math.abs(o.h - hA) / 140); hR.push([t, o.h - hA, d]); hA = o.h; td = Math.max(td, d); } }
      let tm = t; if (o.m0 != null && mA == null) { mA = mA0 = o.m0; mShow = t; tm = t + .5; }
      if (o.m != null) { if (mA == null) { mA = mA0 = o.m; mShow = t; } else { const d = Math.max(.6, Math.abs(o.m - mA) / 140); mR.push([tm, o.m - mA, d]);
        if (o.fives) for (let k = Math.round(mA / 30) + 1; k <= Math.round(o.m / 30); k++) { const [x, y] = P(k * 30, R + 14); s += T(x, y + 5, k * 5, { fs: 13, c: UC, t: tm + d * (k * 30 - mA) / (o.m - mA) }); }
        if (o.sec) { const [a0, a1, lab] = o.sec, pa = rad(a0 * 6 - 90), pb = rad(a1 * 6 - 90), [lx, ly] = P((a0 + a1) * 3, R * .36); hl += `<path d="${sector(cx, cy, R - 4, pa, pb)}" fill="${Y}" opacity=".55" ${A(tm + d * .5, 'a-fade')}/>`; if (lab) s += T(lx, ly + 6, lab, { fs: 16, c: INK, t: tm + d }); }
        mA = o.m; td = Math.max(td, d + tm - t); } }
      (o.hl || []).forEach(n => { const [x, y] = P(n * 30, R - 25); hl += `<circle cx="${r1(x)}" cy="${r1(y)}" r="12" fill="${Y}" ${A(t + td)}/>`; });
      if (o.dig) digs.push([o.dig, t + td]);
      if (o.lab) s += pill(cx + R + 58, cy + 44, o.lab, t + td + .2, { fs: 14 });
      t += td + (o.dur || 1.3);
    });
    const buildR = (inner, rots) => rots.reduce((acc, [tt, dd, d]) => rotG(acc, tt, dd, d), inner);
    if (hShow != null) s += G(hShow, 'a-fade', buildR(hand(R * .5, 7, INK, hA0), hR));
    if (mShow != null) s += G(mShow, 'a-fade', buildR(hand(R * .76, 5, UC, mA0), mR));
    s += `<circle cx="${cx}" cy="${cy}" r="6" fill="${INK}"/>`;
    const dx = cx + R + 58;
    if (c.ic) s += IC(c.ic, dx, 34, 44, .3);
    digs.forEach(([str, tt], i) => { const g = `<rect x="${dx - 46}" y="${cy - 26}" width="92" height="48" rx="12" fill="${INK}"/>` + T(dx, cy + 9, str, { fs: 26, c: '#fff' }); s += i < digs.length - 1 ? OUT(digs[i + 1][1], G(tt, 'a-pop', g)) : G(tt, 'a-pop', g); });
    return { html: anSvg(W, cy + R + 8, G(.1, 'a-fade', base) + hl + G(.1, 'a-fade', nums) + s), at };
  };

  // monedes i bitllets: de més gran a més petit, amb el total que va creixent
  S.p1money = (c) => {
    const items = c.items, wI = v => v >= 5 ? 66 : 38, gap = 10, tot = items.reduce((a, v) => a + wI(v), 0) + gap * (items.length - 1);
    let x = (W - tot) / 2; const X = items.map(v => { const cx = x + wI(v) / 2; x += wI(v) + gap; return cx; });
    const y = 34, runs = []; let run = 0; items.forEach(v => runs.push(run += v));
    let s = '', t = .25; const at = [];
    c.steps.forEach(([k, idx, fin]) => {
      at.push(t);
      if (k === 'g') { idx.forEach((i, j) => s += G(t + j * .3, 'a-pop', items[i] >= 5 ? bill(X[i], y, items[i]) : coin(X[i], y, items[i]))); t += idx.length * .3 + .8; }
      if (k === 'run') { idx.forEach((i, j) => { const tt = t + j * .55; if (i > 0) s += sArr(X[i - 1] + 17, y + 50, X[i] - 19, y + 50, tt - .1, { d: .25, hs: 5, sw: 2 }); s += G(tt, 'a-pop', `<circle cx="${r1(X[i])}" cy="${y + 50}" r="17" fill="${Y}"/>` + T(X[i], y + 56, runs[i], { fs: 15 })); }); t += idx.length * .55 + .6; }
      if (k === 'tot' || fin) { s += pill(W / 2, y + 100, `${runs[runs.length - 1]} €`, t - (fin ? .3 : 0), { fs: 22, bg: Y, sc: Y }); t += 1; }
    });
    return { html: anSvg(W, y + 124, s), at };
  };

  // regle: on comença i on acaba el llapis; els salts d'un centímetre; metres i una porta
  const pencilR = (xa, xb, y) => { const h = 16; return `<rect x="${r1(xa)}" y="${y - h / 2}" width="10" height="${h}" rx="3" fill="#F49AB0" stroke="${INK}" stroke-width="1.3"/><rect x="${r1(xa + 9)}" y="${y - h / 2}" width="6" height="${h}" fill="#B8BEC8" stroke="${INK}" stroke-width="1.3"/><rect x="${r1(xa + 15)}" y="${y - h / 2}" width="${r1(xb - xa - 35)}" height="${h}" fill="${Y}" stroke="${INK}" stroke-width="1.3"/><path d="M${r1(xb - 20)},${y - h / 2} L${r1(xb)},${y} L${r1(xb - 20)},${y + h / 2} Z" fill="#F2D2A2" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><path d="M${r1(xb - 7)},${r1(y - h * .18)} L${r1(xb)},${y} L${r1(xb - 7)},${r1(y + h * .18)} Z" fill="${INK}"/>`; };
  S.p1ruler = (c) => {
    const { a, b, max } = c, u = Math.min(28, 272 / max), x0 = (W - max * u) / 2, X = v => x0 + v * u, py = 30, ry = 50;
    const D = { pen: 1.5, gb: 1.2, hops: (b - a) * .3 + .7, len: 1.3, m1: 1.4, door: 1.4 }, e = TL(c.seq.map(k => [k, D[k]]));
    let bg = '', s = `<g ${A(.1, 'a-fade')}><rect x="${r1(x0 - 12)}" y="${ry}" width="${r1(max * u + 24)}" height="40" rx="6" fill="#FFE3A3" stroke="${INK}" stroke-width="2"/>`;
    for (let v = 0; v <= max; v++) { s += `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${ry}" y2="${ry + 14}" stroke="${INK}" stroke-width="2"/>` + T(X(v), ry + 31, v, { fs: 12, w: 800 }); if (v < max) s += `<line x1="${r1(X(v + .5))}" x2="${r1(X(v + .5))}" y1="${ry}" y2="${ry + 8}" stroke="${INK}" stroke-width="1.2"/>`; }
    s += '</g>';
    s += G(e.pen, 'a-fade', SL(e.pen, 0, -24, pencilR(X(a), X(b), py)));
    const guide = (v, t) => { bg += `<circle cx="${r1(X(v))}" cy="${ry + 26}" r="11" fill="${Y}" ${A(t)}/>`; return `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${py - 12}" y2="${ry + 14}" stroke="${RED}" stroke-width="2" stroke-dasharray="4 3" ${A(t, 'a-fade')}/>`; };
    s += guide(a, e.pen + .6) + guide(b, e.gb ?? e.pen + 1.1);
    let ly = ry + 64;
    if (e.hops != null) { for (let k = 0; k < b - a; k++) s += hop(X(a + k), X(a + k + 1), ry + 42, -9, e.hops + k * .3, { lab: k + 1, fs: 11, hs: 5, sw: 2 }); s += pill(W / 2, ry + 88, `${b} − ${a} = ${b - a}`, e.hops + (b - a) * .3 + .1, { fs: 15 }); ly = ry + 126; }
    s += pill((X(a) + X(b)) / 2, ly, `${b - a} cm`, e.len, { fs: 18, bg: Y, sc: Y });
    let H = ly + 22;
    if (c.door) {
      const dx = 262, dy = 128, sl = 46, sx = 244;
      s += G(e.m1, 'a-fade', `<rect x="${sx}" y="${dy + sl}" width="9" height="${sl}" rx="2" fill="${RED}"/>` + T(sx - 6, dy + sl * 1.5 + 5, '1 m', { fs: 13, a: 'end' }));
      s += pill(118, dy + sl * 1.5, '1 m = 100 cm', e.m1 + .4, { fs: 15 });
      s += G(e.door, 'a-fade', `<rect x="${sx}" y="${dy}" width="9" height="${sl}" rx="2" fill="${UC}"/>` + T(sx - 6, dy + sl * .5 + 5, '1 m', { fs: 13, a: 'end' }) + `<rect x="${dx}" y="${dy}" width="44" height="${2 * sl}" rx="3" fill="#B9824F" stroke="${INK}" stroke-width="2"/><rect x="${dx + 7}" y="${dy + 8}" width="30" height="30" rx="2" fill="none" stroke="${INK}" stroke-width="1.2" opacity=".5"/><rect x="${dx + 7}" y="${dy + 46}" width="30" height="36" rx="2" fill="none" stroke="${INK}" stroke-width="1.2" opacity=".5"/><circle cx="${dx + 36}" cy="${dy + 50}" r="3" fill="${Y}"/>`);
      s += pill(dx + 22, dy - 14, '2 m', e.door + .4, { fs: 15, bg: Y, sc: Y });
      H = dy + 2 * sl + 6;
    }
    return { html: anSvg(W, H, bg + s), at: AT(c, e) };
  };

  // dreta i esquerra en una fila
  S.p1lr = ({ ics }) => {
    const X = [70, 160, 250], y = 62, tR = 1.6, tL = 2.9;
    let bg = '', s = ics.map((n, i) => IC(n, X[i], y, 58, .25 + i * .3)).join('');
    bg += `<circle cx="${X[2]}" cy="${y}" r="36" fill="${Y}" opacity=".6" ${A(tR + .3)}/><circle cx="${X[0]}" cy="${y}" r="36" fill="${Y}" opacity=".6" ${A(tL + .3)}/>`;
    s += sArr(182, y + 52, 236, y + 52, tR, { sw: 4, hs: 9 }) + T(209, y + 78, Lc('dreta', 'derecha'), { fs: 14, c: UC, t: tR + .3 });
    s += sArr(138, y + 52, 84, y + 52, tL, { sw: 4, hs: 9 }) + T(111, y + 78, Lc('esquerra', 'izquierda'), { fs: 14, c: UC, t: tL + .3 });
    return { html: anSvg(W, y + 90, bg + s), at: [.25, tR, tL] };
  };

  // robot en una quadrícula: les fletxes del codi es fan una a una
  const arrowGl = (x, y, dir, col = INK, sz = 9) => { const ang = { R: 0, D: 90, L: 180, U: -90 }[dir]; return `<g transform="rotate(${ang} ${r1(x)} ${r1(y)})"><line x1="${r1(x - sz)}" y1="${r1(y)}" x2="${r1(x + sz - 2)}" y2="${r1(y)}" stroke="${col}" stroke-width="3.2" stroke-linecap="round"/><path d="M${r1(x + sz - 7)},${r1(y - 6)} L${r1(x + sz)},${r1(y)} L${r1(x + sz - 7)},${r1(y + 6)}" fill="none" stroke="${col}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g>`; };
  S.p1robot = (c) => {
    const cs = 42, gx = 14, gy = 26, cols = c.cols || 4, rows = c.rows || 3, CX = i => gx + i * cs + cs / 2, CY = j => gy + j * cs + cs / 2;
    const mv = { R: [1, 0], L: [-1, 0], U: [0, -1], D: [0, 1] }, moves = c.moves.split(''), path = [c.start];
    moves.forEach(m => { const [x, y] = path[path.length - 1]; path.push([x + mv[m][0], y + mv[m][1]]); });
    const [fx, fy] = path[path.length - 1];
    let bg = '', s = `<g ${A(.1, 'a-fade')}>`;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<rect x="${gx + i * cs}" y="${gy + j * cs}" width="${cs}" height="${cs}" fill="${(i + j) % 2 ? '#fff' : SOFT}" stroke="#D9CCE6" stroke-width="1.5"/>`;
    s += `<rect x="${gx}" y="${gy}" width="${cols * cs}" height="${rows * cs}" rx="4" fill="none" stroke="${UC}" stroke-width="2.5"/></g>`;
    s += IC(c.goal, CX(fx) + 11, CY(fy) - 9, 26, .3);
    const cardX = k => 212 + k * 34, cardY = 64;
    let e, tm = [];
    if (c.mode === 'plan') {
      e = { p0: .6, p1: 1.9, code: 3.2 };
      moves.forEach((m, k) => { const [x, y] = path[k], [x2, y2] = path[k + 1], t = k < c.split ? e.p0 + k * .5 : e.p1 + (k - c.split) * .5; s += sArr(CX(x) + (x2 - x) * 8, CY(y) + (y2 - y) * 8, CX(x2) - (x2 - x) * 10, CY(y2) - (y2 - y) * 10, t, { c: UC, sw: 3, hs: 7 }); });
      tm = moves.map((_, k) => e.code + .8 + k * .55);
    } else { e = { code: .3, g0: 1.6 }; e.g1 = e.g0 + c.split * .7 + .4; e.goal = e.g1 + (moves.length - c.split) * .7 + .4; tm = moves.map((_, k) => k < c.split ? e.g0 + k * .7 : e.g1 + (k - c.split) * .7); }
    moves.forEach((m, k) => { s += G(e.code + k * .2, 'a-pop', `<rect x="${cardX(k) - 15}" y="${cardY - 15}" width="30" height="30" rx="7" fill="#fff" stroke="${UC}" stroke-width="2.5"/>`); bg += ''; s += `<rect x="${cardX(k) - 13}" y="${cardY - 13}" width="26" height="26" rx="5" fill="${Y}" ${A(tm[k], 'a-fill')}/>` + G(e.code + k * .2, 'a-pop', arrowGl(cardX(k), cardY, m)); });
    let rob = IC('robot', CX(fx) - 3, CY(fy) + 3, 32);
    moves.forEach((m, k) => { rob = SL(tm[k], -mv[m][0] * cs, -mv[m][1] * cs, rob, .55); });
    s += G(.3, 'a-fade', rob);
    const tEnd = tm[tm.length - 1] + .7;
    s += IC('sparkles', CX(fx) - 14, CY(fy) - 14, 24, tEnd) + mark(cardX(moves.length - 1) + 20, cardY + 30, tEnd, true, 9);
    return { html: anSvg(W, gy + rows * cs + 10, bg + s), at: c.mode === 'plan' ? [e.p0, e.p1, e.code] : [e.code, e.g0, e.g1, tEnd] };
  };

  // bossa amb boles: segur i impossible
  const bagPath = (x, y, w, h) => `<path d="M${r1(x + w * .3)},${y} Q${r1(x + w * .5)},${r1(y + 10)} ${r1(x + w * .7)},${y} L${r1(x + w * .64)},${r1(y + 16)} Q${r1(x + w * 1.04)},${r1(y + h * .3)} ${r1(x + w)},${r1(y + h * .72)} Q${r1(x + w * .96)},${r1(y + h)} ${r1(x + w * .5)},${r1(y + h)} Q${r1(x + w * .04)},${r1(y + h)} ${x},${r1(y + h * .72)} Q${r1(x - w * .04)},${r1(y + h * .3)} ${r1(x + w * .36)},${r1(y + 16)} Z" fill="#E9D9F2" stroke="${UC}" stroke-width="3" stroke-linejoin="round"/><path d="M${r1(x + w * .34)},${r1(y + 14)} Q${r1(x + w * .5)},${r1(y + 22)} ${r1(x + w * .66)},${r1(y + 14)}" fill="none" stroke="${UC}" stroke-width="3" stroke-linecap="round"/>`;
  const ball = (x, y, col, r = 13) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${col}" stroke="${INK}" stroke-width="1.6"/><circle cx="${r1(x - r * .35)}" cy="${r1(y - r * .35)}" r="${r1(r * .28)}" fill="#fff" opacity=".55"/>`;
  S.p1bag = ({ n }) => {
    const tS = 1.7, tI = 3.2, BP = [[70, 100], [98, 98], [126, 101], [84, 126], [112, 127]];
    let s = G(.2, 'a-fade', bagPath(40, 50, 116, 110));
    BP.forEach(([x, y], k) => { s += k === n - 1 ? G(.4 + k * .15, 'a-pop', SL(tS, x - 232, y - 58, ball(232, 58, RED))) : G(.4 + k * .15, 'a-pop', ball(x, y, RED)); });
    s += mark(256, 40, tS + .6, true, 10) + pill(234, 94, Lc('segur', 'seguro'), tS + .7, { fs: 14 });
    s += `<g ${A(tI)}><circle cx="232" cy="134" r="13" fill="${GRN}" opacity=".35" stroke="${GRN}" stroke-width="2" stroke-dasharray="4 3"/></g>` + mark(256, 118, tI + .4, false, 10) + pill(234, 170, Lc('impossible', 'imposible'), tI + .5, { fs: 14, sc: RED });
    return { html: anSvg(W, 190, s), at: [.3, tS, tI] };
  };

  // recomptes amb ratlletes: 4 de dretes i la cinquena creuada
  const tallyG = (x, y, n, t, dt, h = 30) => { const sp = h * .3; let s = ''; for (let k = 0; k < Math.min(n, 4); k++) s += `<line x1="${r1(x + k * sp)}" x2="${r1(x + k * sp)}" y1="${y - h / 2}" y2="${y + h / 2}" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" pathLength="1" ${A(t + k * dt, 'a-draw')}/>`; if (n === 5) s += `<line x1="${x - 6}" y1="${y + h / 2 - 5}" x2="${r1(x + 3 * sp + 6)}" y2="${y - h / 2 + 5}" stroke="${RED}" stroke-width="3.5" stroke-linecap="round" pathLength="1" ${A(t + 4 * dt, 'a-draw')}/>`; return s; };
  S.p1tally = (c) => {
    let s = '', t = .25; const at = [];
    c.rows.forEach(r => {
      const y = r.y, groups = [], t0 = t; let left = r.n; while (left > 0) { groups.push(Math.min(5, left)); left -= 5; }
      at.push(t0);
      const th_ = r.h || 30, gw = th_ * .9 + 12, isz = Math.max(38, th_ * 1.1);
      let x = r.ic ? 30 + isz * .9 : 60; const gx = [];
      const dm = r.dt || (r.n > 8 ? .12 : .22);
      groups.forEach(gn => { gx.push(x); s += tallyG(x, y, gn, t + .2, dm, th_); t += gn * dm + .15; x += gw + 10; });
      t += .4;
      if (r.demo) { s += pill(x + 16, y, '4 + 1 = 5', t - .2, { fs: 15 }); t += .5; return; }
      at.push(t);
      groups.forEach((gn, k) => s += pill(gx[k] + (gn === 5 ? th_ * .45 : (gn - 1) * th_ * .15), y + th_ / 2 + 20, gn, t + k * .2, { fs: 14, w: 30 }));
      const tt = t + groups.length * .2 + .3, txt = groups.join(' + ') + ' = ' + r.n, w = tw(txt, 15) + 20, xr = gx[gx.length - 1] + gw + 10 + w / 2;
      s += xr + w / 2 < W - 4 ? pill(xr, y, txt, tt, { fs: 15, bg: Y, sc: Y }) : pill(W / 2, y + th_ / 2 + 56, txt, tt, { fs: 15, bg: Y, sc: Y });
      t = tt + 1;
      let icn = r.ic ? IC(r.ic, 12 + isz / 2, y, isz, t0) : '';
      if (r.fin) { at.push(t); icn = PUL(t, icn) + `<g ${A(t + .2)}><circle cx="${r1(12 + isz)}" cy="${r1(y - isz / 2)}" r="14" fill="${UC}"/>` + T(12 + isz, y - isz / 2 + 5, r.n, { fs: 15, c: '#fff' }) + '</g>'; t += 1; }
      s += icn;
    });
    return { html: anSvg(W, c.h, s), at: c.pick ? c.pick.map(i => at[i]) : at };
  };

  // quants més? una fila davant de l'altra: les parelles i les que sobren
  S.p1diffIc = ({ ic, a, b, ia, ib }) => {
    const sz = 24, sp = 27, x0 = 72, ya = 44, yb = 100, X = k => x0 + k * sp, t1 = 1.8, t2 = t1 + b * .15 + 1.5;
    let bg = '', s = IC(ia, 30, ya, 40, .2) + IC(ib, 30, yb, 40, .7);
    for (let k = 0; k < a; k++) s += IC(ic, X(k), ya, sz, .3 + k * .06);
    for (let k = 0; k < b; k++) s += IC(ic, X(k), yb, sz, .8 + k * .06) + `<line x1="${X(k)}" x2="${X(k)}" y1="${ya + 15}" y2="${yb - 15}" stroke="${UC}" stroke-width="2" stroke-dasharray="3 3" ${A(t1 + k * .15, 'a-fade')}/>`;
    for (let k = b; k < a; k++) bg += `<circle cx="${X(k)}" cy="${ya}" r="15" fill="${Y}" ${A(t1 + b * .15 + .3 + (k - b) * .15)}/>`;
    const xm = (X(b) + X(a - 1)) / 2;
    s += OUT(t2, pill(xm, ya + 32, '?', t1 + b * .15 + .6, { fs: 15, w: 30 })) + pill(xm, ya + 32, a - b, t2, { fs: 15, w: 30, bg: Y, sc: Y });
    s += pill(W / 2, 148, `${a} − ${b} = ${a - b}`, t2 + .2, { fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, 170, bg + s), at: [.2, t1, t2] };
  };

  // operacions en columna: columna a columna des de les unitats, amb les que ens portem o la desena que desfem
  S.p1colOp = (c) => {
    const { a, b, op } = c, add = op === '+', res = add ? a + b : a - b;
    const n = Math.max(String(a).length, String(b).length, String(res).length), heads = ['UM', 'C', 'D', 'U'].slice(4 - n);
    const cw = 42, x0 = 44, colX = j => x0 + j * cw + cw / 2, xR = x0 + n * cw, pX = (xR + 12 + 314) / 2;
    const dig = (v, j) => { const ch = String(v).padStart(n, ' ')[j]; return ch === ' ' ? null : +ch; };
    const yH = 16, yC = 46, yA = 84, yB = 122, yL = 134, yR = 172;
    const strike = (x, t) => `<line x1="${r1(x - 12)}" y1="${yA + 5}" x2="${r1(x + 12)}" y2="${yA - 25}" stroke="${RED}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(t, 'a-draw')}/>`;
    let s = '', bg = '';
    heads.forEach((h, j) => s += T(colX(j), yH, h, { fs: 13, c: UC, t: .1, cls: 'a-fade' }));
    for (let j = 0; j < n; j++) { const da = dig(a, j), db = dig(b, j); if (da != null) s += T(colX(j), yA, da, { fs: 30, t: .2 + j * .08 }); if (db != null) s += T(colX(j), yB, db, { fs: 30, t: .5 + j * .08 }); }
    s += T(x0 - 16, yB, add ? '+' : '−', { fs: 28, t: .6 }) + `<line x1="${x0 - 30}" x2="${xR + 4}" y1="${yL}" y2="${yL}" stroke="${INK}" stroke-width="3" stroke-linecap="round" ${A(.7, 'a-fade')}/>`;
    const e = { nums: .2 }, top = [...Array(n)].map((_, j) => dig(a, j) ?? 0), small = [...Array(n)].map(() => []), crossed = {};
    let t = 1, carry = 0;
    for (let st = 0; st < n; st++) {
      const j = n - 1 - st, db = dig(b, j) ?? 0;
      if (dig(a, j) == null && dig(b, j) == null && !carry) break;
      e['s' + st] = t;
      let dur, rd, txt, tr;
      if (add) {
        const sum = top[j] + db + carry; rd = sum % 10; txt = `${top[j]} + ${db}${carry ? ' + 1' : ''} = ${sum}`; tr = t + .45; dur = 1.3;
        carry = sum >= 10 ? 1 : 0;
        if (carry && j > 0) s += G(tr + .3, 'a-fade', SL(tr + .3, cw, yR - yC, T(colX(j - 1), yC + 6, 1, { fs: 17, c: RED }), .6));
      } else {
        if (top[j] < db) {
          e['f' + st] = t; const tb = t + .6, k = j - 1; e['b' + st] = tb;
          s += OUT(t + .55, mark(colX(j) + 17, yA - 26, t + .1, false, 8));
          if (!crossed[k]) { crossed[k] = 1; s += strike(colX(k), tb); }
          top[k] -= 1; small[k].push([top[k], tb + .2]);
          if (!crossed[j]) { crossed[j] = 1; s += strike(colX(j), tb + .25); }
          top[j] += 10; small[j].push([top[j], tb + .45]);
          tr = tb + .9; dur = 1.8;
        } else { tr = t + .45; dur = 1.2; }
        rd = top[j] - db; txt = `${top[j]} − ${db} = ${rd}`;
      }
      bg += HL(t, dur - .1, `<rect x="${r1(colX(j) - 19)}" y="${yC - 18}" width="38" height="${yR - yC + 28}" rx="10" fill="${Y}"/>`);
      s += T(colX(j), yR, rd, { fs: 30, c: UC, t: tr }) + pill(pX, yC + 6 + st * 38, txt, tr - .1, { fs: 14 });
      t += dur;
    }
    small.forEach((arr, j) => arr.forEach(([v, tin], i) => { const el = T(colX(j), yC + 6, v, { fs: 17, c: RED, t: tin }); s += i < arr.length - 1 ? OUT(arr[i + 1][1] - .05, el) : el; }));
    e.tot = +t.toFixed(2);
    bg += `<rect x="${x0 + 2}" y="${yR - 28}" width="${n * cw - 4}" height="36" rx="10" fill="${Y}" opacity=".5" ${A(t, 'a-fade')}/>`;
    let H = yR + 14;
    if (c.chk) { s += pill(W / 2 - 14, yR + 38, `${res} + ${b} = ${a}`, t + .2, { fs: 16 }) + mark(W / 2 + 76, yR + 38, t + .5, true, 11); H = yR + 58; }
    return { html: anSvg(W, H, bg + s), at: AT(c, e) };
  };

  // sumar per desenes i unitats (esquema de parts) i restar a la recta: primer les desenes, després les unitats
  S.p1decomp = ({ a, b, m, n }) => {
    const da = a - a % 10, db = b - b % 10, ua = a % 10, ub = b % 10, XA = 62, XB = 176, y0 = 22, y1 = 72;
    let bg = '', s = tile(XA, y0, a, .25) + T((XA + XB) / 2, y0 + 8, '+', { fs: 22, t: .3 }) + tile(XB, y0, b, .35);
    [[XA, da, ua], [XB, db, ub]].forEach(([X, d, u], i) => {
      s += `<path d="M${X - 8},${y0 + 16} L${X - 24},${y1 - 15} M${X + 8},${y0 + 16} L${X + 24},${y1 - 15}" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" fill="none" ${A(.9 + i * .2, 'a-fade')}/>`;
      s += tile(X - 26, y1, d, 1.1 + i * .2, { w: 40 }) + tile(X + 26, y1, u, 1.2 + i * .2, { w: 34, sc: YD, bg: '#FFF4D6' });
    });
    const tP = 1.8, tR = tP + 1.2;
    s += pill(84, 118, `${da} + ${db} = ${da + db}`, tP, { fs: 15 }) + pill(226, 118, `${ua} + ${ub} = ${ua + ub}`, tP + .4, { fs: 15, sc: YD });
    s += T(226, y0 + 8, '=', { fs: 22, t: tR }) + tile(268, y0, a + b, tR + .2, { bg: Y, sc: Y, w: 52 });
    const dn = n - n % 10, un = n % 10, lo = Math.floor((m - n) / 10) * 10, hi = Math.ceil((m + 1) / 10) * 10, ly = 192, X = v => 22 + (v - lo) * 276 / (hi - lo), tJ1 = tR + 1.1, tJ2 = tJ1 + 1.3;
    s += `<g ${A(tJ1 - .5, 'a-fade')}><line x1="14" x2="306" y1="${ly}" y2="${ly}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` + [...Array(hi - lo + 1)].map((_, k) => `<line x1="${r1(X(lo + k))}" x2="${r1(X(lo + k))}" y1="${ly - ((lo + k) % 10 ? 4 : 7)}" y2="${ly + ((lo + k) % 10 ? 4 : 7)}" stroke="${INK}" stroke-width="${(lo + k) % 10 ? 1.3 : 2.5}"/>`).join('') + '</g>';
    s += pill(46, 150, `${m} − ${n}`, tJ1 - .5, { fs: 14 });
    [[m, tJ1 - .5], [m - dn, tJ1 + .5], [m - n, tJ2 + .5]].forEach(([v, t], i) => { bg += `<circle cx="${r1(X(v))}" cy="${ly + 20}" r="13" fill="${i === 2 ? Y : SOFT}" ${A(t)}/>`; s += T(X(v), ly + 25, v, { fs: 14, t }); });
    s += hop(X(m), X(m - dn), ly - 6, 26, tJ1, { lab: `−${dn}`, fs: 14, c: UC }) + hop(X(m - dn), X(m - n), ly - 6, 12, tJ2, { lab: `−${un}`, fs: 14, c: RED });
    return { html: anSvg(W, ly + 36, bg + s), at: [.25, tR, tJ1, tJ2] };
  };

  // 10 unitats → 1 desena, 10 desenes → 1 centena, 10 centenes → 1 miler
  S.p1blocks10 = () => {
    const s0 = 9, yb = 150, t1 = .25, t2 = 1.9, t3 = 3.6, fx = 212, fw = 70, sh = 7, dx = 20, dy = -15;
    let s = '';
    for (let k = 0; k < 10; k++) s += G(t1 + k * .08, 'a-fade', SL(t1 + k * .08, 0, -26, cubeR(26, yb - (k + 1) * s0, s0, Y), .4));
    s += `<rect x="23" y="${yb - 10 * s0 - 3}" width="${s0 + 6}" height="${10 * s0 + 6}" rx="4" fill="none" stroke="${UC}" stroke-width="3" ${A(t1 + 1.1, 'a-fade')}/>` + pill(30, yb + 22, '10', t1 + 1.2, { fs: 15 });
    s += sArr(48, yb - 45, 70, yb - 45, t2 - .3, { sw: 3 });
    for (let k = 0; k < 10; k++) s += G(t2 + k * .1, 'a-pop', rodR(80 + k * s0, yb - 10 * s0, s0, UC));
    s += `<rect x="77" y="${yb - 10 * s0 - 3}" width="${10 * s0 + 6}" height="${10 * s0 + 6}" rx="5" fill="none" stroke="${Y}" stroke-width="3.5" ${A(t2 + 1.2, 'a-fade')}/>` + pill(125, yb + 22, '100', t2 + 1.3, { fs: 15 });
    s += sArr(180, yb - 45, 202, yb - 45, t3 - .3, { sw: 3 });
    for (let k = 0; k < 10; k++) {
      const yt = yb - (k + 1) * sh, P = pts => pts.map(p => p.map(r1).join(',')).join(' ');
      s += G(t3 + k * .1, 'a-fade', SL(t3 + k * .1, 0, -14, `<polygon points="${P([[fx + fw, yt], [fx + fw + dx, yt + dy], [fx + fw + dx, yt + sh + dy], [fx + fw, yt + sh]])}" fill="#2E9E55" stroke="${INK}" stroke-width="1"/><polygon points="${P([[fx, yt], [fx + dx, yt + dy], [fx + fw + dx, yt + dy], [fx + fw, yt]])}" fill="#7EDB9C" stroke="${INK}" stroke-width="1"/><rect x="${fx}" y="${yt}" width="${fw}" height="${sh}" fill="${HUND}" stroke="${INK}" stroke-width="1"/>`, .35));
    }
    s += pill(fx + fw / 2 + 8, yb + 22, '1.000', t3 + 1.3, { fs: 15, bg: Y, sc: Y });
    return { html: anSvg(W, yb + 40, s), at: [t1, t2, t3] };
  };

  // taula de posició: les xifres cauen a la seva columna; els zeros s'escriuen però no es diuen
  S.p1pvRows = (c) => {
    const heads = c.heads, nc = heads.length, cw = c.cw || 48, x0 = c.x0 || 24, colX = j => x0 + j * cw + cw / 2, rh = 50, y0 = 78, rows = c.rows;
    let bg = `<g ${A(.1, 'a-fade')}><rect x="${x0}" y="10" width="${nc * cw}" height="30" rx="10" fill="${SOFT}"/>` + heads.map((h, j) => T(colX(j), 31, h, { fs: 14, c: UC })).join('') + [...Array(nc - 1)].map((_, j) => `<line x1="${x0 + (j + 1) * cw}" x2="${x0 + (j + 1) * cw}" y1="44" y2="${y0 + (rows.length - 1) * rh + 14}" stroke="#E6DEEE" stroke-width="2"/>`).join('') + '</g>';
    let s = ''; const steps = [];
    rows.forEach((r, i) => { steps.push(['r' + i, nc * .2 + 1.2]); if (r.w) steps.push(['w' + i, 1]); });
    const e = TL(steps);
    rows.forEach((r, i) => {
      const y = y0 + i * rh, ds = String(r.v).padStart(nc, ' '), t0 = e['r' + i];
      [...ds].forEach((d, j) => { if (d === ' ') return; const tj = t0 + j * .2; if (d === '0') bg += `<circle cx="${colX(j)}" cy="${y - 10}" r="18" fill="none" stroke="${RED}" stroke-width="2.5" stroke-dasharray="4 3" ${A(t0 + nc * .2 + .2)}/>`; s += G(tj, 'a-fade', SL(tj, 0, -18, T(colX(j), y, d, { fs: 28 }), .4)); });
      if (r.sep) s += `<line x1="${x0 + r.sep * cw}" x2="${x0 + r.sep * cw}" y1="${y - 34}" y2="${y + 10}" stroke="${UC}" stroke-width="4" stroke-linecap="round" ${A(t0 + nc * .2 + .5, 'a-fade')}/>`;
      if (r.w) s += pill(x0 + nc * cw + (W - x0 - nc * cw) / 2, y - 10, th(r.v), e['w' + i], { fs: 18, bg: Y, sc: Y });
    });
    return { html: anSvg(W, y0 + (rows.length - 1) * rh + 22, bg + s), at: AT(c, e) };
  };

  // valor de posició amb blocs: 2 centenes, 4 desenes i 5 unitats
  S.p1pvBlk = ({ n }) => {
    const hc = Math.floor(n / 100), d = Math.floor(n / 10) % 10, u = n % 10, s0 = 7, yb = 136, tp = yb - 10 * s0;
    const wF = hc * (10 * s0 + 6) - 6, wR = d * (s0 + 4) - 4, wU = Math.ceil(u / 5) * (s0 + 2), tot = wF + 30 + wR + 38 + wU, xF = (W - tot) / 2, xRd = xF + wF + 30, xU = xRd + wR + 38;
    const cC = xF + wF / 2, cD = xRd + wR / 2, cU = xU + wU / 2, t0 = 2.3, t1 = 3.5, t2 = 5;
    let bg = `<circle cx="${r1(cC)}" cy="40" r="19" fill="${Y}" ${A(t2)}/>`, s = '';
    [['C', cC, hc], ['D', cD, d], ['U', cU, u]].forEach(([h, X, v], i) => s += T(X, 14, h, { fs: 13, c: UC, t: .1 }) + T(X, 51, v, { fs: 30, t: .2 + i * .15 }));
    for (let k = 0; k < hc; k++) s += G(.6 + k * .2, 'a-pop', flatR(xF + k * (10 * s0 + 6), tp, s0, HUND));
    for (let k = 0; k < d; k++) s += G(1.1 + k * .12, 'a-pop', rodR(xRd + k * (s0 + 4), tp, s0, UC));
    for (let k = 0; k < u; k++) s += G(1.7 + k * .08, 'a-pop', cubeR(xU + Math.floor(k / 5) * (s0 + 2), yb - (k % 5 + 1) * (s0 + 1.5), s0, Y));
    s += pill(cC, yb + 20, `${hc} C`, t0, { fs: 14 }) + pill(cD, yb + 20, `${d} D`, t0 + .2, { fs: 14 }) + pill(cU, yb + 20, `${u} U`, t0 + .4, { fs: 14 });
    s += PUL(t2 + .3, pill(cC, yb + 56, hc * 100, t1, { fs: 16 })) + T((cC + wF / 2 + xRd) / 2 + 2, yb + 62, '+', { fs: 18, t: t1 + .2 }) + pill(cD, yb + 56, d * 10, t1 + .3, { fs: 16 }) + T((xRd + wR + xU) / 2, yb + 62, '+', { fs: 18, t: t1 + .5 }) + pill(cU, yb + 56, u, t1 + .6, { fs: 16 });
    s += `<rect x="${r1(xF - 4)}" y="${tp - 4}" width="${r1(wF + 8)}" height="${10 * s0 + 8}" rx="6" fill="none" stroke="${Y}" stroke-width="4" ${A(t2 + .2, 'a-fade')}/>` + sArr(cC, 64, cC, tp - 8, t2 + .1, { c: YD, sw: 3, d: .3 });
    return { html: anSvg(W, yb + 76, bg + s), at: [t0, t1, t2] };
  };

  // comparar i ordenar números de tres xifres, i el número següent
  S.p1cmpOrder = ({ a, b, list, nx }) => {
    const e = TL([['c', 1.5], ['s', 1.2], ['l', 1.3], ['o', 1.5], ['n', 1]]), ya = 40, yo = 108, yn = 174;
    const big = (x, y, v, t) => String(v).split('').map((d, i, arr) => T(x + (i - (arr.length - 1) / 2) * 19, y, d, { fs: 30, t })).join('');
    let bg = `<circle cx="${80 - 19}" cy="${ya - 10}" r="17" fill="${Y}" ${A(e.c + .7)}/><circle cx="${240 - 19}" cy="${ya - 10}" r="17" fill="none" stroke="${UC}" stroke-width="2.5" ${A(e.c + .7)}/>`;
    let s = big(80, ya, a, e.c) + big(240, ya, b, e.c + .2) + T(80 - 19, ya + 22, 'C', { fs: 12, c: UC, t: e.c + .8 }) + T(240 - 19, ya + 22, 'C', { fs: 12, c: UC, t: e.c + .8 });
    s += `<g ${A(e.s)}><circle cx="160" cy="${ya - 10}" r="19" fill="${Y}"/>` + T(160, ya, a > b ? '&gt;' : '&lt;', { fs: 28 }) + '</g>';
    const P = [70, 160, 250], sorted = [...list].sort((x, y) => x - y);
    list.forEach((v, i) => { const f = sorted.indexOf(v); s += G(e.l + i * .2, 'a-fade', SL(e.o, P[i] - P[f], 0, tile(P[f], yo, v, e.l + i * .2, { w: 58, fs: 18 }), .8)); });
    s += T(115, yo + 7, '&lt;', { fs: 22, c: UC, t: e.o + .9 }) + T(205, yo + 7, '&lt;', { fs: 22, c: UC, t: e.o + 1.05 });
    s += tile(110, yn, nx, e.n, { w: 58, fs: 18 }) + sArr(142, yn, 178, yn, e.n + .3, { lab: '+1', ly: -8 }) + tile(210, yn, nx + 1, e.n + .6, { w: 58, fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, yn + 22, bg + s), at: [e.c, e.s, e.l, e.o, e.n] };
  };

  // comparar xifra a xifra, començant per l'esquerra
  S.p1cmpDig = ({ a, b }) => {
    const heads = ['UM', 'C', 'D', 'U'], cw = 46, x0 = 30, colX = j => x0 + j * cw + cw / 2, ya = 82, yb = 132, A_ = String(a), B_ = String(b);
    const f = [...A_].findIndex((d, j) => d !== B_[j]), e = TL([['n', 1.3], ['eq', f * .9 + .4], ['d', 1.5], ['r', 1]]);
    let bg = `<g ${A(.1, 'a-fade')}><rect x="${x0}" y="12" width="${4 * cw}" height="30" rx="10" fill="${SOFT}"/>` + heads.map((h, j) => T(colX(j), 33, h, { fs: 14, c: UC })).join('') + '</g>', s = '';
    for (let j = 0; j < 4; j++) s += T(colX(j), ya, A_[j], { fs: 28, t: .25 + j * .1 }) + T(colX(j), yb, B_[j], { fs: 28, t: .6 + j * .1 });
    for (let j = 0; j < f; j++) { const t = e.eq + j * .9; bg += HL(t, .85, `<rect x="${colX(j) - 20}" y="48" width="40" height="98" rx="10" fill="${Y}"/>`); s += T(colX(j), (ya + yb) / 2 - 3, '=', { fs: 20, c: OK, t: t + .2 }); }
    bg += `<rect x="${colX(f) - 20}" y="48" width="40" height="98" rx="10" fill="${Y}" opacity=".45" ${A(e.d, 'a-fade')}/><circle cx="${colX(f)}" cy="${ya - 10}" r="18" fill="none" stroke="${UC}" stroke-width="3" ${A(e.d + .3)}/>`;
    s += pill(268, (ya + yb) / 2 - 10, `${A_[f]} &gt; ${B_[f]}`, e.d + .5, { fs: 17, w: 76 });
    s += pill(W / 2, 176, `${th(a)} &gt; ${th(b)}`, e.r, { fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, 198, bg + s), at: [e.n, e.eq, e.d, e.r] };
  };

  // arrodonir: on queda el número a la recta i quin número rodó té més a prop
  S.p1round = ({ n }) => {
    const str = th(n), ch = [...str], cwid = x => x === '.' ? 9 : 19, totw = ch.reduce((a, x) => a + cwid(x), 0), cx = []; let x = W / 2 - totw / 2;
    ch.forEach(x_ => { cx.push(x + cwid(x_) / 2); x += cwid(x_); });
    const iU = ch.length - 1, iD = ch.length - 2, e = TL([['u', 1.6], ['up', 1.6], ['d', 1.6], ['down', 1]]);
    let bg = HL(e.u, e.d - e.u, `<circle cx="${r1(cx[iU])}" cy="18" r="15" fill="${Y}"/>`) + `<circle cx="${r1(cx[iD])}" cy="18" r="15" fill="${Y}" ${A(e.d)}/>`;
    let s = ch.map((x_, i) => T(cx[i], 29, x_, { fs: 30, t: .15 })).join('');
    const line = (y, lo, step, t, tgt, tA) => {
      const X = v => 34 + (v - lo) * 252 / (10 * step);
      let g = `<g ${A(t, 'a-fade')}><line x1="24" x2="296" y1="${y}" y2="${y}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
      for (let k = 0; k <= 10; k++) g += `<line x1="${r1(X(lo + k * step))}" x2="${r1(X(lo + k * step))}" y1="${y - (k === 5 ? 9 : 5)}" y2="${y + (k === 5 ? 9 : 5)}" stroke="${k === 5 ? RED : INK}" stroke-width="${k % 5 ? 1.5 : 2.5}"${k === 5 ? ' stroke-dasharray="3 2"' : ''}/>`;
      g += T(X(lo), y + 22, th(lo), { fs: 12, w: 800 }) + T(X(lo + 10 * step), y + 22, th(lo + 10 * step), { fs: 12, w: 800 }) + T(X(lo + 5 * step), y + 22, th(lo + 5 * step), { fs: 11, w: 700, c: RED }) + '</g>';
      g += `<g ${A(t + .4)}><path d="M${r1(X(n) - 6)},${y - 16} L${r1(X(n) + 6)},${y - 16} L${r1(X(n))},${y - 6} Z" fill="${UC}"/>` + T(X(n), y - 21, str, { fs: 12, c: UC }) + '</g>';
      g += qArr(X(n), y - 30, (X(n) + X(tgt)) / 2, y - 48, X(tgt), y - 8, tA, { c: UC, sw: 2.5 });
      bg += `<circle cx="${r1(X(tgt))}" cy="${y + 17}" r="0" fill="none"/>`;
      g += pill(Math.min(Math.max(X(tgt), 40), 280), y + 44, th(tgt), tA + .4, { fs: 15, bg: Y, sc: Y });
      return g;
    };
    const t10 = Math.round(n / 10) * 10, t100 = Math.round(n / 100) * 100;
    s += line(84, Math.floor(n / 10) * 10, 1, e.u, t10, e.up) + line(166, Math.floor(n / 100) * 100, 10, e.d, t100, e.down);
    return { html: anSvg(W, 226, bg + s), at: [e.u, e.up, e.d, e.down] };
  };

  // unitats de miler i valor de posició d'un número de 4 xifres
  S.p1pv4 = ({ n }) => {
    const ds = String(n).split('').map(Number), heads = ['UM', 'C', 'D', 'U'], cw = 66, x0 = 28, colX = j => x0 + j * cw + cw / 2, e = TL([['k', 1.9], ['d', 1.5], ['v', 1.7], ['h', 1]]);
    const mini = (x, y) => `<rect x="${x}" y="${y}" width="14" height="14" rx="2" fill="${HUND}" stroke="${INK}" stroke-width=".9"/><line x1="${x + 4.7}" x2="${x + 4.7}" y1="${y}" y2="${y + 14}" stroke="${INK}" stroke-width=".5" opacity=".5"/><line x1="${x + 9.3}" x2="${x + 9.3}" y1="${y}" y2="${y + 14}" stroke="${INK}" stroke-width=".5" opacity=".5"/>`;
    let bg = '', s = '';
    for (let k = 0; k < 10; k++) s += G(e.k + k * .08, 'a-pop', mini(14 + k * 16, 16));
    s += T(94, 50, '10 C', { fs: 12, c: UC, t: e.k + .8 }) + T(186, 29, '=', { fs: 20, t: e.k + .9 });
    const cx0 = 204, cy0 = 12, cs = 24, dd = 8;
    s += G(e.k + 1.1, 'a-pop', `<polygon points="${cx0},${cy0 + dd} ${cx0 + dd},${cy0} ${cx0 + cs + dd},${cy0} ${cx0 + cs},${cy0 + dd}" fill="#7EDB9C" stroke="${INK}" stroke-width="1"/><polygon points="${cx0 + cs},${cy0 + dd} ${cx0 + cs + dd},${cy0} ${cx0 + cs + dd},${cy0 + cs} ${cx0 + cs},${cy0 + cs + dd}" fill="#2E9E55" stroke="${INK}" stroke-width="1"/><rect x="${cx0}" y="${cy0 + dd}" width="${cs}" height="${cs}" fill="${HUND}" stroke="${INK}" stroke-width="1"/>`) + T(220, 58, '1 UM', { fs: 12, c: UC, t: e.k + 1.2 }) + pill(278, 30, '1.000', e.k + 1.3, { fs: 15, bg: Y, sc: Y });
    const yT = 70;
    bg += `<g ${A(e.d - .3, 'a-fade')}><rect x="${x0}" y="${yT}" width="${4 * cw}" height="30" rx="10" fill="${SOFT}"/>` + heads.map((h, j) => T(colX(j), yT + 21, h, { fs: 14, c: UC })).join('') + [1, 2, 3].map(j => `<line x1="${x0 + j * cw}" x2="${x0 + j * cw}" y1="${yT + 34}" y2="${yT + 118}" stroke="#E6DEEE" stroke-width="2"/>`).join('') + '</g>';
    bg += `<circle cx="${colX(0)}" cy="${yT + 55}" r="21" fill="${Y}" ${A(e.h)}/>`;
    ds.forEach((d, j) => { s += G(e.d + j * .2, 'a-fade', SL(e.d + j * .2, 0, -20, T(colX(j), yT + 66, d, { fs: 32 }), .4)); const v = th(d * 10 ** (3 - j)), el = T(colX(j), yT + 108, v, { fs: 16, c: j ? INK : UC, t: e.v + j * .3 }); s += j ? el : PUL(e.h + .3, el); if (j) s += T(x0 + j * cw, yT + 108, '+', { fs: 15, c: UC, t: e.v + j * .3 - .1 }); });
    s += sArr(colX(0), yT + 78, colX(0), yT + 92, e.h + .1, { c: YD, sw: 3, d: .25, hs: 6 });
    return { html: anSvg(W, yT + 124, bg + s), at: [e.k, e.d, e.v, e.h] };
  };

  // càlcul mental a la recta buida i estimació arrodonint
  S.p1mental = ({ a, b, c: cc, d }) => {
    const rb = Math.ceil(b / 10) * 10, ex = rb - b, e = TL([['j', 1.7], ['f', 1.6], ['est', 1.9], ['ex', 1]]), y = 62, XA = 36, XB = 282, XC = 226;
    let bg = '', s = `<line x1="16" x2="304" y1="${y}" y2="${y}" stroke="${INK}" stroke-width="3" stroke-linecap="round" ${A(.1, 'a-fade')}/>`;
    const mk = (x, v, t, hl) => { if (hl) bg += `<circle cx="${x}" cy="${y + 20}" r="15" fill="${Y}" ${A(t + .2)}/>`; return `<line x1="${x}" x2="${x}" y1="${y - 7}" y2="${y + 7}" stroke="${INK}" stroke-width="2.5" ${A(t, 'a-fade')}/>` + T(x, y + 25, v, { fs: 15, t }); };
    s += mk(XA, a, .2) + hop(XA, XB, y - 5, 26, e.j, { lab: `+${rb}`, fs: 14, d: .6 }) + mk(XB, a + rb, e.j + .5);
    s += hop(XB, XC, y + 5, -12, e.f, { lab: `−${ex}`, fs: 14, c: RED, ly: 14 }) + mk(XC, a + b, e.f + .4, true);
    const ry = 132, rnd = v => Math.round(v / 100) * 100;
    s += tile(38, ry, cc, e.est, { w: 50, fs: 16 }) + sArr(64, ry, 84, ry, e.est + .2, { hs: 5, sw: 2 }) + tile(110, ry, rnd(cc), e.est + .3, { w: 50, fs: 16, bg: '#FFF4D6', sc: YD });
    s += tile(190, ry, d, e.est + .1, { w: 50, fs: 16 }) + sArr(216, ry, 236, ry, e.est + .3, { hs: 5, sw: 2 }) + tile(262, ry, rnd(d), e.est + .4, { w: 50, fs: 16, bg: '#FFF4D6', sc: YD });
    s += pill(112, 180, `${rnd(cc)} + ${rnd(d)} = ${rnd(cc) + rnd(d)}`, e.est + .9, { fs: 16 });
    s += T(222, 186, '≈', { fs: 24, c: UC, t: e.ex }) + pill(268, 180, cc + d, e.ex + .2, { fs: 17, bg: Y, sc: Y, w: 60 });
    return { html: anSvg(W, 202, bg + s), at: [e.j, e.f, e.est, e.ex] };
  };

  // files i columnes: la mateixa graella girada dona el mateix total
  S.p1array = ({ r, c }) => {
    const sp = 22, lx = 30, ly = 64, ax = 236, ay = 104;
    let s = '', R = '';
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) s += G(.25 + i * .4 + j * .06, 'a-pop', dot(lx + j * sp, ly + i * sp, UC));
    const t1 = .25 + r * .4 + .4, t2 = t1 + 1.3, t3 = t2 + 2.1;
    s += pill(lx + (c - 1) * sp / 2, ly + r * sp + 14, `${r} × ${c} = ${r * c}`, t1, { fs: 15 });
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) R += dot(ax + (j - (c - 1) / 2) * sp, ay + (i - (r - 1) / 2) * sp, Y);
    s += G(t2 - .4, 'a-fade', G(t2, 'p1-id', R, `transform:rotate(90deg);transform-origin:${ax}px ${ay}px;--d:.9s`));
    s += pill(ax, ay + c * sp / 2 + 16, `${c} × ${r} = ${r * c}`, t2 + 1, { fs: 15 });
    s += T(170, ay + 8, '=', { fs: 28, c: UC, t: t3 }) + pill(lx + (c - 1) * sp / 2, ly + r * sp + 14, `${r} × ${c} = ${r * c}`, t3 + .1, { fs: 15, bg: Y, sc: Y }) + pill(ax, ay + c * sp / 2 + 16, `${c} × ${r} = ${r * c}`, t3 + .2, { fs: 15, bg: Y, sc: Y });
    return { html: anSvg(W, 194, s), at: [t1, t2 + 1, t3] };
  };

  // files de cadires: cada fila en té les mateixes
  const chair = (x, y, col) => `<rect x="${x - 9}" y="${y - 17}" width="18" height="12" rx="4" fill="${col}"/><rect x="${x - 8}" y="${y - 6}" width="3" height="6" fill="${col}"/><rect x="${x + 5}" y="${y - 6}" width="3" height="6" fill="${col}"/><rect x="${x - 11}" y="${y}" width="22" height="6" rx="2.5" fill="${col}"/><rect x="${x - 10}" y="${y + 5}" width="3.5" height="12" rx="1.5" fill="${col}"/><rect x="${x + 6.5}" y="${y + 5}" width="3.5" height="12" rx="1.5" fill="${col}"/>`;
  S.p1chairs = ({ r, c }) => {
    const sx = 36, sy = 44, x0 = 46, y0 = 56, t1 = .25 + r * .6 + .4, t2 = t1 + r * .6 + .6;
    let s = '';
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) s += G(.25 + i * .6 + j * .08, 'a-pop', chair(x0 + j * sx, y0 + i * sy, UC));
    for (let i = 0; i < r; i++) s += pill(262, y0 + i * sy, i ? `+ ${c} = ${c * (i + 1)}` : String(c), t1 + i * .6, { fs: 15 });
    s += `<path d="M${x0 - 12},30 v-6 h${(c - 1) * sx + 23} v6" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(t2, 'a-draw')}/>` + T(x0 + (c - 1) * sx / 2, 16, c, { fs: 15, c: UC, t: t2 + .2 });
    s += `<path d="M24,${y0 - 18} h-6 v${(r - 1) * sy + 36} h6" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(t2 + .3, 'a-draw')}/>` + T(10, y0 + (r - 1) * sy / 2 + 5, r, { fs: 15, c: UC, t: t2 + .5 });
    s += pill(W / 2, y0 + (r - 1) * sy + 44, `${r} × ${c} = ${r * c}`, t2 + .8, { fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, y0 + (r - 1) * sy + 64, s), at: [.25, t1, t2 + .8] };
  };

  // grups iguals: bosses, capses o oueres amb la mateixa quantitat
  const egg = (x, y) => `<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="8" ry="10" fill="#FFF3DC" stroke="#C9A36A" stroke-width="1.5"/>`;
  S.p1groups = (c) => {
    const { g, n, ic, box } = c, slot = W / g, bw = Math.min(92, slot - 10), cx = k => (k + .5) * slot, by = 14, bh = c.bh || 84, cols = c.cols || 2, isz = c.sz || 28, isp = c.isp || isz + 2;
    const e = TL([['grp', g * .75 + .3], ['sum', g * .5 + .6], ['mul', 1]]);
    let s = '';
    for (let k = 0; k < g; k++) {
      const t = e.grp + k * .75, x = cx(k), rows = Math.ceil(n / cols), iy0 = by + bh / 2 - (rows - 1) * isp / 2 + (box === 'bag' ? 6 : 0);
      if (box === 'bag') s += `<g ${A(t, 'a-fade')}><path d="M${r1(x - 16)},${by + 16} Q${r1(x - 16)},${by + 2} ${x},${by + 2} Q${r1(x + 16)},${by + 2} ${r1(x + 16)},${by + 16}" fill="none" stroke="${UC}" stroke-width="3"/><rect x="${r1(x - bw / 2)}" y="${by + 14}" width="${r1(bw)}" height="${bh - 14}" rx="14" fill="${SOFT}" stroke="${UC}" stroke-width="2.5"/></g>`;
      else s += `<g ${A(t, 'a-fade')}><rect x="${r1(x - bw / 2)}" y="${by}" width="${r1(bw)}" height="${bh}" rx="${box === 'carton' ? 10 : 6}" fill="${box === 'carton' ? '#E8D3B5' : SOFT}" stroke="${box === 'carton' ? '#B08A5A' : UC}" stroke-width="2.5"/></g>`;
      for (let i = 0; i < n; i++) { const ix = x + ((i % cols) - (cols - 1) / 2) * isp, iy = iy0 + Math.floor(i / cols) * isp; s += box === 'carton' ? G(t + .15 + i * .07, 'a-pop', egg(ix, iy)) : IC(ic, ix, iy, isz, t + .15 + i * .07); }
      s += pill(x, by + bh + 18, c.rep ? String(n) : k ? `+ ${n} = ${n * (k + 1)}` : String(n), e.sum + k * .5, { fs: 15 });
    }
    s += pill(W / 2, by + bh + 56, `${g} × ${n} = ${g * n}`, e.mul, { fs: 18, bg: Y, sc: Y });
    return { html: anSvg(W, by + bh + 76, s), at: [e.grp, e.sum, e.mul] };
  };

  // repartir d'un en un: cadascú rep el mateix
  S.p1deal = ({ n, g, kids, ic }) => {
    const slot = W / g, kx = k => (k + .5) * slot, ky = 100, py = 178, per = n / g, t1 = 1.3, dt = .22;
    let s = '';
    for (let k = 0; k < g; k++) s += IC(kids[k], kx(k), ky, 46, .25 + k * .15) + `<ellipse cx="${r1(kx(k))}" cy="${py}" rx="42" ry="11" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" ${A(.3 + k * .15, 'a-fade')}/>`;
    for (let i = 0; i < n; i++) {
      const k = i % g, j = Math.floor(i / g), fx = kx(k) + ((j % 2) - .5) * 26, fy = py - 8 - Math.floor(j / 2) * 20, sx = W / 2 + ((i % 6) - 2.5) * 28, sy = 22 + Math.floor(i / 6) * 26;
      s += G(.3 + i * .03, 'a-fade', SL(t1 + i * dt, sx - fx, sy - fy, IC(ic, fx, fy, 24), .5));
    }
    const te = t1 + n * dt + .4;
    for (let k = 0; k < g; k++) s += pill(kx(k), py + 30, per, te + k * .15, { fs: 16, w: 40, bg: Y, sc: Y });
    return { html: anSvg(W, py + 50, s), at: [.25, t1, te] };
  };

  // dividir amb la taula: files de d fins arribar al total
  S.p1arrDiv = ({ n, d }) => {
    const q = n / d, sp = 22, x0 = 46, y0 = 60, rh = 30, t1 = 1.3, dr = .8, t2 = t1 + (q - 1) * dr + .3, t3 = t2 + 1.5;
    let s = OUT(t3, pill(W / 2, 20, `${n} ÷ ${d} = ?`, .25, { fs: 17 })) + pill(W / 2, 20, `${n} ÷ ${d} = ${q}`, t3, { fs: 17, bg: Y, sc: Y });
    for (let k = 0; k < q; k++) {
      const y = y0 + k * rh, t = t1 + k * dr;
      for (let j = 0; j < d; j++) s += G(t + j * .05, 'a-pop', dot(x0 + j * sp, y, UC));
      const txt = `${k + 1} × ${d} = ${(k + 1) * d}`;
      s += k === q - 1 ? pill(246, y, txt, t + .3, { fs: 15, bg: Y, sc: Y }) : T(246, y + 5, txt, { fs: 14, t: t + .3, w: 800 });
    }
    s += `<path d="M${x0 - 14},${y0 - 10} h-6 v${(q - 1) * rh + 20} h6" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" pathLength="1" ${A(t3, 'a-draw')}/>` + T(x0 - 32, y0 + (q - 1) * rh / 2 + 6, q, { fs: 18, c: UC, t: t3 + .2 });
    return { html: anSvg(W, y0 + (q - 1) * rh + 22, s), at: [.25, t1, t2, t3] };
  };

  // fer grups iguals i veure quants en sobren (el residu); comprovar-ho multiplicant
  S.p1grpRem = (c) => {
    const { n, s: gs, ic } = c, q = Math.floor(n / gs), r = n % gs, nb = q + (c.extra ? 1 : 0), pc = c.pc || 10, psz = c.psz || 20, psp = psz + 4;
    const px = i => W / 2 + ((i % pc) - (Math.min(n, pc) - 1) / 2) * psp, py = i => 16 + psz / 2 + Math.floor(i / pc) * psp, pileH = Math.ceil(n / pc) * psp;
    const bw = Math.min(64, (W - 12) / nb - 8), bx = k => W / 2 + (k - (nb - 1) / 2) * (bw + 8), by = pileH + 30, bc = c.bc || (gs <= 4 ? 2 : 3), isz = Math.min(psz, (bw - 8) / bc - 2), isp = isz + 2, bh = Math.ceil(gs / bc) * isp + 12;
    const fin = i => { const k = Math.floor(i / gs), j = i % gs; return [bx(k) + ((j % bc) - (bc - 1) / 2) * isp, by + 6 + isz / 2 + Math.floor(j / bc) * isp]; };
    const D = { pile: .9, fill: q * gs * c.dt + .4, extra: 1.2, rem: 1, res: 1.2, chk1: 1, chk2: 1 }, e = TL(c.seq.map(k => [k, D[k]]));
    let bg = '', s = '';
    for (let k = 0; k < q; k++) { const x = bx(k); s += `<g ${A(e.fill - .3 + k * .05, 'a-fade')}><rect x="${r1(x - bw / 2)}" y="${by}" width="${r1(bw)}" height="${bh}" rx="8" fill="${c.env ? '#FFF8E8' : SOFT}" stroke="${UC}" stroke-width="2.2"/>${c.env ? `<path d="M${r1(x - bw / 2)},${by + 2} L${x},${by + 14} L${r1(x + bw / 2)},${by + 2}" fill="none" stroke="${UC}" stroke-width="1.8" stroke-linejoin="round"/>` : ''}</g>`; }
    for (let i = 0; i < n; i++) {
      if (i < q * gs) { const [fx, fy] = fin(i); s += G(.25 + i * .02, 'a-fade', SL(e.fill + i * c.dt, px(i) - fx, py(i) - fy, IC(ic, fx, fy, isz), .5)); }
      else { s += IC(ic, px(i), py(i), psz, .25 + i * .02); if (e.rem != null) bg += `<circle cx="${r1(px(i))}" cy="${r1(py(i))}" r="${psz * .62}" fill="none" stroke="${RED}" stroke-width="2.5" ${A(e.rem + (i - q * gs) * .15)}/>`; }
    }
    const y1 = by + bh + 22, y2 = y1 + 36, tF = e.fill + q * gs * c.dt + .3;
    if (e.extra != null) { const x = bx(q); s += `<g ${A(e.extra, 'a-fade')}><rect x="${r1(x - bw / 2)}" y="${by}" width="${r1(bw)}" height="${bh}" rx="8" fill="none" stroke="${RED}" stroke-width="2.2" stroke-dasharray="5 4"/>` + [...Array(gs)].map((_, j) => `<circle cx="${r1(x + ((j % bc) - (bc - 1) / 2) * isp)}" cy="${r1(by + 6 + isz / 2 + Math.floor(j / bc) * isp)}" r="${r1(isz * .4)}" fill="none" stroke="${RED}" stroke-width="1.5" stroke-dasharray="3 2"/>`).join('') + '</g>' + mark(x + bw / 2 - 4, by + 4, e.extra + .4, false, 10) + T(x, by - 6, `${gs} × ${q + 1} = ${gs * (q + 1)}`, { fs: 12, c: RED, t: e.extra + .3 }); s += pill(88, y1, `${gs} × ${q} = ${q * gs}`, tF, { fs: 15 }); }
    if (e.rem != null && c.remPill !== false) s += pill(e.extra != null ? 236 : W / 2, y1, `${n} − ${q * gs} = ${r}`, e.rem + .3, { fs: 15, sc: RED });
    if (e.res != null) { for (let k = 0; k < q; k++) s += G(e.res + k * .12, 'a-pop', badge(bx(k) - bw / 2 + 4, by + 2, k + 1, 10)); s += pill(W / 2, e.rem != null ? y2 : y1, r ? `${n} ÷ ${gs} = ${q} · ${Lc('sobren', 'sobran')} ${r}` : `${n} ÷ ${gs} = ${q}`, e.res + q * .12 + .2, { fs: 16, bg: Y, sc: Y }); }
    if (e.chk1 != null) { const yy = e.res != null && e.rem == null ? y2 : y1; s += pill(W / 2 - (r ? 0 : 14), yy, `${q} × ${gs} = ${q * gs}`, e.chk1, { fs: 16 }); if (!r) s += mark(W / 2 + 70, yy, e.chk1 + .5, true, 11); }
    if (e.chk2 != null) s += pill(W / 2 - 14, y2, `${q * gs} + ${r} = ${n}`, e.chk2, { fs: 16, bg: Y, sc: Y }) + mark(W / 2 + 70, y2, e.chk2 + .5, true, 11);
    return { html: anSvg(W, y2 + 22, bg + s), at: AT(c, e) };
  };

  // trucs per a les taules amb graelles de punts: doble del doble, un cop més, un cop menys
  S.p1dots3 = ({ a, b, c: cc }) => {
    const sp = 10, rr = 3.6, y0 = 26, gridD = (x, y, cols, rows, col, t, dt = .08) => { let g = ''; for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) g += G(t + i * dt, 'a-pop', `<circle cx="${r1(x + j * sp)}" cy="${r1(y + i * sp)}" r="${rr}" fill="${col}"/>`); return g; };
    let s = '';
    // A: a[0] × 4 → una fila, el doble (2 files), el doble del doble (4 files)
    const [am] = a, ax = 14, tA = .25;
    s += gridD(ax, y0, am, 1, UC, tA) + G(tA + .6, 'a-fade', SL(tA + .6, 0, -sp, gridD(ax, y0 + sp, am, 1, UC, 0, 0))) + G(tA + 1.6, 'a-fade', SL(tA + 1.6, 0, -2 * sp, gridD(ax, y0 + 2 * sp, am, 2, Y, 0, 0)));
    const bx1 = ax + (am - 1) * sp + 9;
    s += `<path d="M${bx1},${y0 - 4} h4 v${sp + 8} h-4" fill="none" stroke="${UC}" stroke-width="2" ${A(tA + 1.1, 'a-fade')}/>` + T(bx1 + 8, y0 + 9, am * 2, { fs: 12, c: UC, t: tA + 1.1, a: 'start' });
    s += `<path d="M${bx1},${y0 + 2 * sp - 4} h4 v${sp + 8} h-4" fill="none" stroke="${YD}" stroke-width="2" ${A(tA + 2.2, 'a-fade')}/>` + T(bx1 + 8, y0 + 2 * sp + 9, `+${am * 2}`, { fs: 12, c: YD, t: tA + 2.2, a: 'start' });
    s += pill(ax + (am - 1) * sp / 2 + 18, y0 + 56, `${am * 2} → ${am * 4}`, tA + 2.4, { fs: 13 });
    // B: m × k = m × (k − 1) + m
    const [bm, bk] = b, bxx = 128, tB = 3;
    s += gridD(bxx, y0, bm, bk - 1, UC, tB) + gridD(bxx, y0 + (bk - 1) * sp, bm, 1, Y, tB + .8);
    s += pill(bxx + (bm - 1) * sp / 2, y0 + bk * sp + 14, `${bm * (bk - 1)} + ${bm} = ${bm * bk}`, tB + 1.2, { fs: 13 });
    // C: m × k = m × (k + 1) − m
    const [cm, ck] = cc, cx0 = 232, tC = 4.5;
    s += gridD(cx0, y0, cm, ck + 1, UC, tC, .06);
    s += `<rect x="${cx0 - 6}" y="${r1(y0 + ck * sp - 6)}" width="${(cm - 1) * sp + 12}" height="12" rx="6" fill="#fff" opacity=".8" stroke="${RED}" stroke-width="2" ${A(tC + .9, 'a-fade')}/><line x1="${cx0 - 8}" x2="${cx0 + (cm - 1) * sp + 8}" y1="${y0 + ck * sp}" y2="${y0 + ck * sp}" stroke="${RED}" stroke-width="2.5" stroke-linecap="round" ${A(tC + .9, 'a-fade')}/>`;
    s += pill(cx0 + (cm - 1) * sp / 2, y0 + (ck + 1) * sp + 12, `${cm * (ck + 1)} − ${cm} = ${cm * ck}`, tC + 1.3, { fs: 13 });
    return { html: anSvg(W, y0 + (ck + 1) * sp + 32, s), at: [tA, tB, tC] };
  };

  // × 10 i × 100: les xifres salten de columna i entren zeros (dues taules)
  S.p1shift2 = ({ ns }) => {
    const cols = ['UM', 'C', 'D', 'U'], cw = 29, y0 = 56, rh = 36, X0 = [14, 190], cx = (ti, j) => X0[ti] + j * cw + cw / 2, times = [[.25, 1, 2.2], [.25, 3.4, 4.6]];
    let s = '';
    X0.forEach((x0, ti) => { s += `<g ${A(.1, 'a-fade')}>` + cols.map((h, j) => T(cx(ti, j), 20, h, { fs: 12, c: UC })).join('') + `<rect x="${x0}" y="28" width="${cw * 4}" height="${3 * rh + 4}" rx="9" fill="#FAF7FC" stroke="#E6DEEE" stroke-width="2"/>` + [1, 2, 3].map(j => `<line x1="${x0 + j * cw}" x2="${x0 + j * cw}" y1="28" y2="${32 + 3 * rh}" stroke="#E6DEEE" stroke-width="1.5"/>`).join('') + '</g>'; });
    ['', '× 10', '× 100'].forEach((lab, k) => { if (lab) s += T(W / 2, y0 + k * rh, lab, { fs: 14, t: Math.min(times[0][k], times[1][k]) - .1, w: 900, c: UC }); });
    ns.forEach((n, ti) => {
      const dg = String(n).split('');
      [0, 1, 2].forEach(k => {
        const y = y0 + k * rh, t = times[ti][k];
        dg.forEach((d, i) => { const from = 4 - dg.length + i, to = from - k; s += G(t, 'a-fade', SL(t + .1, cx(ti, from) - cx(ti, to), k ? -rh : 0, T(cx(ti, to), y, d, { fs: 22 }), .6)); });
        for (let z = 0; z < k; z++) s += T(cx(ti, 3 - z), y, 0, { fs: 22, c: RED, t: t + .7 + z * .2 });
      });
    });
    return { html: anSvg(W, y0 + 2 * rh + 16, s), at: [1, 2.2, 3.4, 4.6] };
  };

  // taules del 2, del 5 i del 10; i girar la graella (3 × 8 = 8 × 3)
  S.p1tab3 = ({ m, rot }) => {
    let s = '', bg = '';
    const sp = 13, tA = .25, tB = 1.7, tC = 3, tD = 4.3;
    for (let i = 0; i < 2; i++) for (let j = 0; j < m; j++) s += G(tA + i * .5 + j * .05, 'a-pop', `<circle cx="${22 + j * sp}" cy="${16 + i * 15}" r="5" fill="${i ? Y : UC}"/>`);
    s += pill(22 + m * sp + 38, 23, `${m} + ${m} = ${2 * m}`, tA + 1.1, { fs: 13 });
    const row = (y, step, t) => { for (let j = 0; j < m; j++) { const v = step * (j + 1), x = 30 + j * 40, str = String(v), last = j === m - 1; bg += `<circle cx="${r1(x + (str.length - 1) * 4.7)}" cy="${y}" r="7.5" fill="${Y}" ${A(t + j * .15 + .1)}/>`; s += G(t + j * .15, 'a-pop', `<rect x="${x - 17}" y="${y - 14}" width="34" height="28" rx="8" fill="${last ? 'none' : 'none'}" stroke="${UC}" stroke-width="${last ? 3 : 2}"/>`) + T(x, y + 5.5, v, { fs: 15, t: t + j * .15 }); } };
    row(66, 5, tB); row(106, 10, tC);
    const [r, c] = rot, dsp = 11, lx = 22, ly = 152, ax = 232, ay = 180;
    let Rg = '';
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) { s += G(tD + i * .15, 'a-pop', `<circle cx="${lx + j * dsp}" cy="${ly + i * dsp}" r="4" fill="${UC}"/>`); Rg += `<circle cx="${r1(ax + (j - (c - 1) / 2) * dsp)}" cy="${r1(ay + (i - (r - 1) / 2) * dsp)}" r="4" fill="${Y}" stroke="${INK}" stroke-width=".8"/>`; }
    s += T(lx + (c - 1) * dsp / 2, ly + r * dsp + 16, `${r} × ${c}`, { fs: 14, t: tD + .4 });
    s += G(tD + .5, 'a-fade', G(tD + .8, 'p1-id', Rg, `transform:rotate(90deg);transform-origin:${ax}px ${ay}px;--d:.9s`)) + T(ax + 42, ay + 5, `${c} × ${r}`, { fs: 14, t: tD + 1.7, a: 'start' });
    s += pill(150, ay - 4, `= ${r * c}`, tD + 1.8, { fs: 16, bg: Y, sc: Y });
    return { html: anSvg(W, 226, bg + s), at: [tA, tB, tC, tD] };
  };

  // pes, capacitat i diners (el canvi)
  S.p1units3 = ({ kg, ml, price, pay }) => {
    const wt = (x, y) => `<circle cx="${x}" cy="${y - 17}" r="6" fill="none" stroke="#4A4E59" stroke-width="3.5"/><path d="M${x - 18},${y + 17} L${x - 13},${y - 11} L${x + 13},${y - 11} L${x + 18},${y + 17} Z" fill="#5B5F6B" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><text x="${x}" y="${y + 10}" text-anchor="middle" font-size="12" font-weight="900" fill="#fff" ${FF}>1 kg</text>`;
    let s = '';
    for (let k = 0; k < kg; k++) s += G(.25 + k * .3, 'a-pop', wt(26 + k * 44, 38));
    s += pill(70, 84, `${kg} kg = ${th(kg * 1000)} g`, 1.2, { fs: 13 });
    const jx = 226, t1 = 1.9;
    s += `<g ${A(t1 - .2, 'a-fade')}><path d="M${jx - 22},12 L${jx + 22},12 L${jx + 25},80 Q${jx + 25},86 ${jx + 19},86 L${jx - 19},86 Q${jx - 25},86 ${jx - 25},80 Z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M${jx + 24},26 Q${jx + 40},30 ${jx + 26},58" fill="none" stroke="${INK}" stroke-width="2.5"/></g>`;
    s += G(t1 + .2, 'p1-gy', `<rect x="${jx - 21}" y="49" width="44" height="34" rx="3" fill="${BLUE}" opacity=".55"/>`);
    s += `<line x1="${jx - 26}" x2="${jx + 18}" y1="15" y2="15" stroke="${RED}" stroke-width="2" stroke-dasharray="3 2" ${A(t1, 'a-fade')}/><line x1="${jx - 26}" x2="${jx + 22}" y1="49" y2="49" stroke="${RED}" stroke-width="2" stroke-dasharray="3 2" ${A(t1 + .8, 'a-fade')}/>`;
    s += T(jx - 32, 20, '1 l', { fs: 13, a: 'end', t: t1 }) + T(jx - 32, 54, `${ml} ml`, { fs: 13, a: 'end', t: t1 + .9, c: BLUE });
    const t2 = 3.3, t3 = 4.9, yy = 150;
    s += IC('book', 46, yy - 4, 56, t2) + pill(46, yy + 40, `${price} €`, t2 + .2, { fs: 15 });
    s += G(t2 + .5, 'a-pop', bill(134, yy, pay)) + T(134, yy + 36, Lc('pago', 'pago'), { fs: 12, c: UC, t: t2 + .6 });
    s += sArr(172, yy, 196, yy, t3, { sw: 3 });
    const ch = pay - price, c5 = Math.floor(ch / 5), rest = ch % 5;
    s += (c5 ? G(t3 + .3, 'a-pop', bill(228, yy, 5, 50, 28)) : '') + (rest ? G(t3 + .5, 'a-pop', coin(282, yy, rest, 15)) : '');
    s += pill(248, yy + 40, `${pay} − ${price} = ${ch} €`, t3 + .8, { fs: 14, bg: Y, sc: Y });
    return { html: anSvg(W, yy + 60, s), at: [.25, t1, t2, t3] };
  };

  // perímetre: resseguim tota la vora i sumem els costats
  S.p1perim = ({ a, b }) => {
    const u = 32, x0 = 58, y0 = 36, w = a * u, h = b * u, t1 = 1.7, dt = .7, t2 = t1 + 4 * dt + .3;
    let s = `<g ${A(.15, 'a-fade')}>` + [...Array(a - 1)].map((_, k) => `<line x1="${x0 + (k + 1) * u}" x2="${x0 + (k + 1) * u}" y1="${y0}" y2="${y0 + h}" stroke="#E6DEEE" stroke-width="1.5"/>`).join('') + [...Array(b - 1)].map((_, k) => `<line x1="${x0}" x2="${x0 + w}" y1="${y0 + (k + 1) * u}" y2="${y0 + (k + 1) * u}" stroke="#E6DEEE" stroke-width="1.5"/>`).join('') + `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-width="3"/></g>`;
    const top = T(x0 + w / 2, y0 - 10, `${a} cm`, { fs: 15, t: .5 }), left = T(x0 - 8, y0 + h / 2 + 5, `${b} cm`, { fs: 15, a: 'end', t: .7 });
    s += PUL(t1 + .3, top) + PUL(t1 + 3 * dt + .3, left);
    const P = [[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0, y0 + h]];
    P.forEach((p, j) => { const q = P[(j + 1) % 4]; s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${Y}" stroke-width="7" stroke-linecap="round" pathLength="1" ${A(t1 + j * dt, 'a-draw', 'animation-duration:.55s')}/>`; });
    s += T(x0 + w + 8, y0 + h / 2 + 5, `${b} cm`, { fs: 15, a: 'start', t: t1 + dt + .3 }) + T(x0 + w / 2, y0 + h + 22, `${a} cm`, { fs: 15, t: t1 + 2 * dt + .3 });
    s += pill(W / 2, y0 + h + 52, `${a} + ${b} + ${a} + ${b} = ${2 * (a + b)} cm`, t2, { fs: 16, bg: Y, sc: Y });
    return { html: anSvg(W, y0 + h + 72, s), at: [.25, t1, t2] };
  };

  // coordenades: primer la columna (lletra), després la fila (número)
  S.p1coords = ({ col, row, n = 4 }) => {
    const cs = 38, gx = 60, gy = 44, ci = col.charCodeAt(0) - 65, CX = gx + ci * cs + cs / 2, CY = gy + (row - 1) * cs + cs / 2, t1 = 1.4, t2 = 2.8, t3 = 4.2;
    let bg = '', s = `<g ${A(.1, 'a-fade')}>`;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) s += `<rect x="${gx + i * cs}" y="${gy + j * cs}" width="${cs}" height="${cs}" fill="#fff" stroke="#D9CCE6" stroke-width="1.5"/>`;
    s += `<rect x="${gx}" y="${gy}" width="${n * cs}" height="${n * cs}" fill="none" stroke="${UC}" stroke-width="2.5" rx="3"/></g>`;
    for (let i = 0; i < n; i++) s += T(gx + i * cs + cs / 2, gy - 12, String.fromCharCode(65 + i), { fs: 16, t: .2 }) + T(gx - 14, gy + i * cs + cs / 2 + 6, i + 1, { fs: 16, t: .2 });
    bg += `<circle cx="${CX}" cy="${gy - 18}" r="13" fill="${Y}" ${A(t1)}/><circle cx="${gx - 14}" cy="${CY}" r="13" fill="${Y}" ${A(t2)}/>`;
    s += `<rect x="${gx + ci * cs + 2}" y="${gy + 2}" width="${cs - 4}" height="${n * cs - 4}" rx="6" fill="${UC}" opacity=".22" ${A(t1 + .2, 'a-fade')}/><rect x="${gx + 2}" y="${gy + (row - 1) * cs + 2}" width="${n * cs - 4}" height="${cs - 4}" rx="6" fill="${Y}" opacity=".45" ${A(t2 + .2, 'a-fade')}/>`;
    s += sArr(CX, gy + 4, CX, CY - 14, t2 + .1, { c: UC, sw: 3, hs: 7 });
    s += IC('star', CX, CY, 30, t3) + pill(262, 64, `${col}${row}`, .25, { fs: 20 }) + PUL(t3 + .3, pill(262, 64, `${col}${row}`, t3 + .1, { fs: 20, bg: Y, sc: Y }));
    return { html: anSvg(W, gy + n * cs + 10, bg + s), at: [.25, t1, t2, t3] };
  };

  // simetria: pleguem per l'eix i mirem si les dues meitats coincideixen
  const bflyWing = (cx, cy, col) => `<path d="M${cx - 3},${cy - 6} C${cx - 26},${cy - 64} ${cx - 78},${cy - 52} ${cx - 64},${cy - 12} C${cx - 58},${cy + 4} ${cx - 24},${cy + 4} ${cx - 3},${cy + 2} Z" fill="${col}" stroke="${INK}" stroke-width="2"/><path d="M${cx - 3},${cy + 6} C${cx - 36},${cy + 8} ${cx - 58},${cy + 44} ${cx - 34},${cy + 54} C${cx - 18},${cy + 60} ${cx - 8},${cy + 34} ${cx - 3},${cy + 12} Z" fill="${col}" stroke="${INK}" stroke-width="2"/><circle cx="${cx - 42}" cy="${cy - 26}" r="7" fill="#fff" opacity=".75"/><circle cx="${cx - 28}" cy="${cy + 32}" r="5" fill="#fff" opacity=".75"/>`;
  const seg = (x1, y1, x2, y2, col, w = 13) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  const figure = (k, cx, cy) => {
    if (k === 'bfly') return { ax: cx, full: bflyWing(cx, cy, UC) + `<g transform="translate(${2 * cx} 0) scale(-1 1)">${bflyWing(cx, cy, UC)}</g><ellipse cx="${cx}" cy="${cy + 4}" rx="6" ry="34" fill="${INK}"/><path d="M${cx - 2},${cy - 28} Q${cx - 10},${cy - 50} ${cx - 18},${cy - 54} M${cx + 2},${cy - 28} Q${cx + 10},${cy - 50} ${cx + 18},${cy - 54}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>`, half: bflyWing(cx, cy, Y) };
    if (k === 'A') return { ax: cx, full: seg(cx - 32, cy + 50, cx, cy - 50, INK) + seg(cx, cy - 50, cx + 32, cy + 50, INK) + seg(cx - 17, cy + 10, cx + 17, cy + 10, INK), half: seg(cx - 32, cy + 50, cx, cy - 50, Y) + seg(cx - 17, cy + 10, cx, cy + 10, Y) };
    const ax = cx + 3; return { ax, full: seg(cx - 22, cy - 50, cx - 22, cy + 50, INK) + seg(cx - 22, cy - 50, cx + 28, cy - 50, INK) + seg(cx - 22, cy, cx + 16, cy, INK), half: seg(cx - 22, cy - 50, cx - 22, cy + 50, Y) + seg(cx - 22, cy - 50, ax, cy - 50, Y) + seg(cx - 22, cy, ax, cy, Y) };
  };
  S.p1sym = (c) => {
    const { items } = c;
    const X = [86, 236], cy = 96, e = TL([['f0', 1.1], ['g0', 1.2], ['v0', .9], ['f1', 1], ['g1', 1.2], ['v1', 1]]);
    let s = '';
    items.forEach((k, i) => {
      const F = figure(k, X[i], cy), ok = k !== 'F';
      s += G(e['f' + i], 'a-fade', F.full) + `<line x1="${F.ax}" x2="${F.ax}" y1="${cy - 74}" y2="${cy + 74}" stroke="${RED}" stroke-width="2.5" stroke-dasharray="6 5" ${A(e['f' + i] + .3, 'a-fade')}/>`;
      s += G(e['g' + i], 'a-fade', G(e['g' + i] + .2, 'p1-id', `<g opacity=".78">${F.half}</g>`, `transform:scaleX(-1);transform-origin:${F.ax}px ${cy}px;--d:.9s`));
      s += mark(F.ax, cy + 90, e['v' + i], ok, 12);
    });
    return { html: anSvg(W, cy + 106, s), at: AT(c, e) };
  };

  // cossos geomètrics
  const cubeD = (x, y, sz, col, dice) => { const d = sz * .38, dy = d * .8; let g = `<polygon points="${x},${y} ${r1(x + d)},${r1(y - dy)} ${r1(x + sz + d)},${r1(y - dy)} ${x + sz},${y}" fill="#fff" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><polygon points="${x + sz},${y} ${r1(x + sz + d)},${r1(y - dy)} ${r1(x + sz + d)},${r1(y + sz - dy)} ${x + sz},${y + sz}" fill="#E4D6EE" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><rect x="${x}" y="${y}" width="${sz}" height="${sz}" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
    if (dice) { const p = (px, py) => `<circle cx="${r1(x + px * sz)}" cy="${r1(y + py * sz)}" r="${r1(sz * .08)}" fill="${INK}"/>`; g += p(.25, .25) + p(.75, .25) + p(.5, .5) + p(.25, .75) + p(.75, .75) + `<circle cx="${r1(x + sz / 2 + d / 2)}" cy="${r1(y - dy / 2)}" r="${r1(sz * .07)}" fill="${RED}"/>` + `<circle cx="${r1(x + sz + d * .3)}" cy="${r1(y + sz * .3 - dy * .3)}" r="${r1(sz * .06)}" fill="${INK}"/><circle cx="${r1(x + sz + d * .7)}" cy="${r1(y + sz * .7 - dy * .7)}" r="${r1(sz * .06)}" fill="${INK}"/>`; }
    return g; };
  const sphereD = (x, y, r, col) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="${INK}" stroke-width="2"/><path d="M${x - r},${y} Q${x},${y + r * .55} ${x + r},${y}" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/><circle cx="${r1(x - r * .38)}" cy="${r1(y - r * .38)}" r="${r1(r * .22)}" fill="#fff" opacity=".6"/>`;
  const cylD = (x, y, w, h, col) => `<path d="M${x - w / 2},${y - h / 2} L${x - w / 2},${y + h / 2} A${w / 2},${w * .18} 0 0 0 ${x + w / 2},${y + h / 2} L${x + w / 2},${y - h / 2}" fill="${col}" stroke="${INK}" stroke-width="2"/><rect x="${x - w / 2}" y="${y - h * .1}" width="${w}" height="${h * .3}" fill="${Y}" opacity=".9"/><ellipse cx="${x}" cy="${y - h / 2}" rx="${w / 2}" ry="${r1(w * .18)}" fill="#E8E8EE" stroke="${INK}" stroke-width="2"/>`;
  const coneD = (x, y, w, h, up) => up ? `<path d="M${x - w / 2},${y + h / 2} L${x},${y - h / 2} L${x + w / 2},${y + h / 2}" fill="#F2C57C" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><ellipse cx="${x}" cy="${y + h / 2}" rx="${w / 2}" ry="${r1(w * .16)}" fill="#E7B15E" stroke="${INK}" stroke-width="2"/>` : `<path d="M${x - w / 2},${y - h / 2} L${x},${y + h / 2} L${x + w / 2},${y - h / 2} Z" fill="#E7B96B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M${x - w * .3},${y - h * .3} L${x + w * .15},${y + h * .2} M${x - w * .05},${y - h * .45} L${x + w * .3},${y - h * .05} M${x + w * .3},${y - h * .3} L${x - w * .15},${y + h * .2}" stroke="#B9853A" stroke-width="1.5"/><ellipse cx="${x}" cy="${y - h / 2}" rx="${w / 2}" ry="${r1(w * .16)}" fill="#F5D59A" stroke="${INK}" stroke-width="2"/>`;
  const roll = (x, y, r, t) => G(t, 'a-fade', SL(t, -46, 0, G(t, 'p1-id', sphereD(x, y, r, '#FF8A65'), `transform:rotate(360deg);transform-origin:${x}px ${y}px;--d:.7s`), .7));
  S.p1solids = () => {
    const y = 84, e = [.25, 1.6, 2.9, 4.1];
    let s = G(e[0], 'a-pop', cubeD(20, y - 30, 50, UC, true)) + T(52, 132, Lc('cub', 'cubo'), { fs: 14, t: e[0] + .2 }) + pill(52, 160, Lc('6 cares', '6 caras'), e[0] + .5, { fs: 13 });
    s += roll(128, y, 26, e[1]) + T(128, 132, Lc('esfera', 'esfera'), { fs: 14, t: e[1] + .3 }) + pill(128, 160, Lc('rodola', 'rueda'), e[1] + .6, { fs: 13 });
    s += G(e[2], 'a-pop', cylD(204, y, 44, 58, '#DDE3EA')) + T(204, 132, Lc('cilindre', 'cilindro'), { fs: 14, t: e[2] + .2 });
    s += G(e[3], 'a-pop', coneD(280, y + 4, 46, 64, false)) + T(280, 132, Lc('con', 'cono'), { fs: 14, t: e[3] + .2 });
    return { html: anSvg(W, 178, s), at: e };
  };
  S.p1cube = () => {
    const f = [[30, 72], [110, 72], [110, 152], [30, 152]], D = [36, -30], b = f.map(([x, y]) => [x + D[0], y + D[1]]), P = pts => pts.map(p => p.join(',')).join(' ');
    let s = `<polygon points="${P([f[0], f[1], b[1], b[0]])}" fill="${UC}" opacity=".3" ${A(.25, 'a-fade')}/><polygon points="${P([f[1], b[1], b[2], f[2]])}" fill="${UC}" opacity=".5" ${A(.45, 'a-fade')}/><rect x="30" y="72" width="80" height="80" fill="${UC}" opacity=".18" ${A(.65, 'a-fade')}/>`;
    const edges = [[f[0], f[1]], [f[1], f[2]], [f[2], f[3]], [f[3], f[0]], [b[0], b[1]], [b[1], b[2]], [f[0], b[0]], [f[1], b[1]], [f[2], b[2]], [b[2], b[3], 1], [b[3], b[0], 1], [f[3], b[3], 1]], t1 = 1.2;
    edges.forEach(([p, q, hid], k) => s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${INK}" stroke-width="3" stroke-linecap="round"${hid ? ` stroke-dasharray="5 4" ${A(t1 + k * .1, 'a-fade')}` : ` pathLength="1" ${A(t1 + k * .1, 'a-draw')}`}/>`);
    const t2 = t1 + 12 * .1 + .3, vs = [...f, ...b];
    vs.forEach(([x, y], k) => s += `<circle cx="${x}" cy="${y}" r="5.5" fill="${RED}" stroke="#fff" stroke-width="1.5" ${A(t2 + k * .08)}/>`);
    s += pill(206, 60, Lc('6 cares', '6 caras'), .9, { fs: 14 }) + pill(206, 100, Lc('12 arestes', '12 aristas'), t1 + 12 * .1 + .1, { fs: 14 }) + pill(206, 140, Lc('8 vèrtexs', '8 vértices'), t2 + .75, { fs: 14 });
    const t3 = t2 + 1.2, t4 = t3 + 1.2;
    s += roll(284, 56, 22, t3) + T(284, 99, Lc('0 vèrtexs', '0 vértices'), { fs: 12, t: t3 + .6 });
    s += G(t4, 'a-pop', coneD(284, 160, 50, 64, true)) + `<ellipse cx="284" cy="192" rx="25" ry="8" fill="none" stroke="${Y}" stroke-width="4" ${A(t4 + .4, 'a-fade')}/>` + PUL(t4 + .8, G(t4 + .3, 'a-pop', `<circle cx="284" cy="128" r="5.5" fill="${RED}" stroke="#fff" stroke-width="1.5"/>`));
    return { html: anSvg(W, 206, s), at: [.25, t3, t4] };
  };

  // bucle: la mateixa ordre es repeteix i la variable va canviant
  S.p1loop = ({ n0, add, times }) => {
    const bx = 34, by = 58, t0 = .25, t1 = 1.1, t2 = 2.2, dt = 1.1;
    let s = T(bx + 40, by - 12, 'n', { fs: 18, c: UC, t: t0 }) + `<rect x="${bx}" y="${by}" width="80" height="64" rx="16" fill="#fff" stroke="${UC}" stroke-width="3" ${A(t0, 'a-fade')}/>`;
    s += `<g ${A(t1, 'a-fade')}><rect x="178" y="40" width="126" height="98" rx="16" fill="${SOFT}" stroke="${UC}" stroke-width="2.5"/>` + IC('repeat', 204, 70, 32) + T(260, 78, `× ${times}`, { fs: 22, c: UC }) + T(241, 120, `n = n + ${add}`, { fs: 15 }) + '</g>';
    const vals = [n0]; for (let k = 1; k <= times; k++) vals.push(n0 + k * add);
    vals.forEach((v, k) => { const tin = k ? t2 + (k - 1) * dt + .6 : t0 + .2, el = T(bx + 40, by + 44, v, { fs: 30, t: tin }); s += k < times ? OUT(t2 + k * dt + .6, el) : PUL(t2 + times * dt + .3, el); });
    for (let k = 1; k <= times; k++) { const t = t2 + (k - 1) * dt; s += AWAY(t + .15, -118, 0, pill(236, 96, `+${add}`, t, { fs: 16, bg: Y, sc: Y })) + G(t, 'a-pop', badge(196 + (k - 1) * 22, 156, k, 10)); }
    const ty = 196;
    vals.forEach((v, k) => { const x = 46 + k * 74, t = k ? t2 + (k - 1) * dt + .7 : t0 + .3; s += tile(x, ty, v, t, { w: 44, fs: 16, bg: k === times ? Y : '#fff', sc: k === times ? Y : UC }); if (k) s += sArr(x - 50, ty, x - 26, ty, t - .1, { hs: 5, sw: 2 }); });
    return { html: anSvg(W, ty + 22, s), at: [t0, t1, t2, t2 + times * dt + .3] };
  };

  // gràfic de barres: les barres creixen i les comparem
  S.p1bars = ({ bars }) => {
    const x0 = 46, y0 = 184, u = 15, top = 10, bw = 56, X = i => 110 + i * 90, e = [.4, 1.7, 3.2];
    let bg = '', s = `<g ${A(.1, 'a-fade')}>`;
    for (let v = 0; v <= top; v++) s += `<line x1="${x0}" x2="${x0 + 238}" y1="${y0 - v * u}" y2="${y0 - v * u}" stroke="#EEE6F4" stroke-width="1.2"/>` + T(x0 - 8, y0 - v * u + 4, v, { fs: 11, w: 700, a: 'end' });
    s += `<line x1="${x0}" x2="${x0}" y1="${y0 - top * u - 6}" y2="${y0}" stroke="${INK}" stroke-width="2.5"/><line x1="${x0}" x2="${x0 + 240}" y1="${y0}" y2="${y0}" stroke="${INK}" stroke-width="2.5"/></g>`;
    bars.forEach((b_, i) => {
      const t = e[i], h = b_.v * u, x = X(i);
      s += G(t, 'p1-gy', `<rect x="${x - bw / 2}" y="${y0 - h}" width="${bw}" height="${h}" rx="6" fill="${UC}"/>`) + IC(b_.ic, x, y0 + 17, 28, t);
      s += `<line x1="${x0}" x2="${x - bw / 2}" y1="${y0 - h}" y2="${y0 - h}" stroke="${RED}" stroke-width="2" stroke-dasharray="4 3" ${A(t + .7, 'a-fade')}/>`;
      bg += `<circle cx="${x0 - 12}" cy="${y0 - h}" r="10" fill="${Y}" ${A(t + .8)}/>`;
    });
    const [p, q] = bars, hp = p.v * u, hq = q.v * u, xp = X(0);
    s += `<rect x="${xp - bw / 2 + 3}" y="${y0 - hp + 3}" width="${bw - 6}" height="${hp - hq - 3}" rx="4" fill="${Y}" ${A(e[2], 'a-fill')}/>`;
    s += `<path d="M${xp + bw / 2 + 4},${y0 - hp} h5 v${hp - hq} h-5" fill="none" stroke="${INK}" stroke-width="2" ${A(e[2] + .2, 'a-fade')}/>` + pill(xp + bw / 2 + 22, y0 - (hp + hq) / 2, p.v - q.v, e[2] + .4, { fs: 15, w: 28, bg: Y, sc: Y });
    return { html: anSvg(W, y0 + 34, bg + s), at: e };
  };

  // moda i mitjana: les torres de cubs s'anivellen
  S.p1modeMean = ({ vals }) => {
    const cs = 19, gp = 2, base = 184, colX = i => 72 + i * 62, n = vals.length, sum = vals.reduce((a, v) => a + v, 0), mean = sum / n, mode = 2, t1 = 1.9, t2 = 3.2, t3 = 4.6;
    const cy = k => base - (k + 1) * (cs + gp), recv = [], don = [];
    vals.forEach((v, i) => { for (let k = v; k < mean; k++) recv.push([i, k]); for (let k = v - 1; k >= mean; k--) don.push([i, k]); });
    const moveTo = {}; don.forEach((d, m) => moveTo[d.join(',')] = [recv[m], m]);
    let bg = '', s = '', cnt = 0;
    vals.forEach((v, i) => {
      for (let k = 0; k < v; k++) {
        const key = `${i},${k}`, mv = moveTo[key], tA = .25 + i * .35 + k * .05, cube = x => `<rect x="${r1(x - cs / 2)}" y="${r1(0)}" width="${cs}" height="${cs}" rx="4" fill="${v === mode ? Y : UC}" stroke="${INK}" stroke-width="1.2"/>`;
        let el;
        const tp = t2 + (cnt++) * .06;
        if (mv) { const [[ri, rk], m] = mv; el = `<g transform="translate(0 ${r1(cy(rk))})">${SL(t3 + m * .3, colX(i) - colX(ri), cy(k) - cy(rk), PUL(tp, cube(colX(ri))), .6)}</g>`; }
        else el = `<g transform="translate(0 ${r1(cy(k))})">${PUL(tp, cube(colX(i)))}</g>`;
        s += G(tA, 'a-fade', el);
      }
      bg += `<circle cx="${colX(i)}" cy="${base + 16}" r="13" fill="${Y}" ${v === mode ? A(t1) : 'opacity="0"'}/>`;
      s += T(colX(i), base + 22, v, { fs: 17, t: .25 + i * .35 });
    });
    const ml = base - mean * (cs + gp) + gp / 2;
    s += `<line x1="40" x2="${colX(n - 1) + 24}" y1="${ml}" y2="${ml}" stroke="${RED}" stroke-width="2.5" stroke-dasharray="6 4" ${A(t3 + don.length * .3 + .4, 'a-fade')}/>`;
    s += pill(64, 22, `${Lc('moda', 'moda')}: ${mode}`, t1 + .3, { fs: 14 }) + OUT(t3, pill(64, 58, `= ${sum}`, t2 + cnt * .06 + .1, { fs: 15, bg: Y, sc: Y })) + pill(80, 58, `${sum} ÷ ${n} = ${mean}`, t3 + don.length * .3 + .5, { fs: 15, bg: Y, sc: Y });
    return { html: anSvg(W, base + 32, bg + s), at: [.25, t1, t2, t3] };
  };

  // probabilitat: de quin color n'hi ha més a la bossa
  S.p1prob = ({ cnt }) => {
    let s = G(.2, 'a-fade', bagPath(20, 44, 116, 124)), bg = '';
    const inBag = []; cnt.forEach(([c_, n]) => { for (let k = 0; k < n; k++) inBag.push(c_); });
    inBag.forEach((c_, k) => { const x = 46 + (k % 4) * 21 + (Math.floor(k / 4) % 2) * 10, y = 96 + Math.floor(k / 4) * 22; s += G(.3 + k * .05, 'a-pop', ball(x, y, PCOL[c_], 10)); });
    const ry = i => 38 + i * 38, t1 = 2.3, t2 = 3.4, t3 = 4.5;
    cnt.forEach(([c_, n], i) => {
      const t = i < 3 ? .9 + i * .35 : t3, y = ry(i);
      if (n) for (let k = 0; k < n; k++) s += G(t + k * .05, 'a-pop', ball(168 + k * 22, y, PCOL[c_], 10));
      else s += `<g ${A(t)}><circle cx="168" cy="${y}" r="10" fill="${Y}" opacity=".35" stroke="${YD}" stroke-width="2" stroke-dasharray="3 2"/></g>` + mark(196, y, t + .3, false, 9);
      s += T(304, y + 6, n, { fs: 17, a: 'end', t: t + .2 });
    });
    bg += `<rect x="152" y="${ry(0) - 16}" width="162" height="32" rx="16" fill="${Y}" opacity=".55" ${A(t1, 'a-fade')}/><rect x="152" y="${ry(2) - 16}" width="162" height="32" rx="16" fill="#D9E6F5" ${A(t2, 'a-fade')}/>`;
    s += pill(100, 196, Lc('més probable', 'más probable'), t1 + .2, { fs: 13, bg: Y, sc: Y }) + pill(232, 196, Lc('menys probable', 'menos probable'), t2 + .2, { fs: 13, bg: '#D9E6F5', sc: '#D9E6F5' });
    return { html: anSvg(W, 214, bg + s), at: [.25, t1, t2, t3] };
  };

  // balança: els dos costats han de valer igual
  const wbox = (x, y, v, col = '#fff', dash) => `<rect x="${x - 15}" y="${y - 14}" width="30" height="28" rx="6" fill="${col}" stroke="${dash ? UC : INK}" stroke-width="2"${dash ? ' stroke-dasharray="4 3"' : ''}/>` + T(x, y + 6.5, v, { fs: 17 });
  S.p1bal = ({ l, r, miss }) => {
    const px = 160, py = 64, hl = 108, ang = 9, dy = r1(hl * Math.sin(ang * Math.PI / 180)), tL = 1.1, tB = 2, tE = 3.5;
    const pan = (x, inner) => `<line x1="${x}" y1="${py}" x2="${x - 30}" y2="136" stroke="${INK}" stroke-width="1.5"/><line x1="${x}" y1="${py}" x2="${x + 30}" y2="136" stroke="${INK}" stroke-width="1.5"/><path d="M${x - 38},136 Q${x},156 ${x + 38},136 Z" fill="#fff" stroke="${INK}" stroke-width="2"/>` + inner;
    const tilt = (inner, sgn) => G(tL, 'p1-id', G(tE + .2, 'p1-id', inner, `transform:translateY(${-sgn * dy}px);--d:.8s`), `transform:translateY(${sgn * dy}px);--d:.6s`);
    let s = `<path d="M${px},${py} L${px - 20},188 L${px + 20},188 Z" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" stroke-linejoin="round"/><rect x="${px - 44}" y="186" width="88" height="8" rx="4" fill="${UC}"/>`;
    s += G(tL, 'p1-id', G(tE + .2, 'p1-id', `<rect x="${px - hl - 6}" y="${py - 4}" width="${2 * hl + 12}" height="8" rx="4" fill="${UC}"/>`, `transform:rotate(${ang}deg);transform-origin:${px}px ${py}px;--d:.8s`), `transform:rotate(${-ang}deg);transform-origin:${px}px ${py}px;--d:.6s`);
    const L_ = l.map((v, k) => G(.3 + k * .3, 'a-fade', SL(.3 + k * .3, 0, -40, wbox(px - hl - 16 + k * 32, 122, v), .5))).join('');
    const R_ = r.map((v, k) => G(tB + k * .3, 'a-fade', SL(tB + k * .3, 0, -40, wbox(px + hl - 16 + k * 32, 122, v), .5))).join('') + OUT(tE, G(tB + .3, 'a-fade', SL(tB + .3, 0, -40, wbox(px + hl + 16, 122, '?', '#fff', true), .5))) + G(tE, 'a-pop', wbox(px + hl + 16, 122, miss, Y));
    s += tilt(pan(px - hl, L_), 1) + tilt(pan(px + hl, R_), -1);
    s += `<circle cx="${px}" cy="${py}" r="6" fill="${INK}"/>`;
    const sl = l.reduce((a, v) => a + v, 0);
    s += pill(px - hl, 180, `${l.join(' + ')} = ${sl}`, tL + .2, { fs: 14 }) + pill(px + hl, 180, `${r.join(' + ')} + ${miss} = ${sl}`, tE + 1, { fs: 14, bg: Y, sc: Y }) + mark(px, py - 24, tE + 1.2, true, 11);
    return { html: anSvg(W, 202, s), at: [.3, tB, tE] };
  };
  // dues balances petites: treure el mateix dels dos costats i repartir en parts iguals
  S.p1bal2 = ({ add, tot, parts: k }) => {
    const bal = (cx, t) => `<g ${A(t, 'a-fade')}><path d="M${cx},46 L${cx - 14},150 L${cx + 14},150 Z" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" stroke-linejoin="round"/><rect x="${cx - 30}" y="148" width="60" height="7" rx="3.5" fill="${UC}"/><rect x="${cx - 56}" y="42" width="112" height="7" rx="3.5" fill="${UC}"/>` + [-1, 1].map(sg => { const x = cx + sg * 50; return `<line x1="${x}" y1="46" x2="${x - 20}" y2="112" stroke="${INK}" stroke-width="1.4"/><line x1="${x}" y1="46" x2="${x + 20}" y2="112" stroke="${INK}" stroke-width="1.4"/><path d="M${x - 26},112 Q${x},127 ${x + 26},112 Z" fill="#fff" stroke="${INK}" stroke-width="2"/>`; }).join('') + `<circle cx="${cx}" cy="46" r="5" fill="${INK}"/></g>`;
    const cub = (x, y, col = '#9BD2F2') => `<rect x="${r1(x)}" y="${r1(y)}" width="8" height="8" rx="1.5" fill="${col}" stroke="${INK}" stroke-width=".9"/>`;
    const grid = (x0, y0, n, cols, t, outT, outFrom) => { let g = ''; for (let i = 0; i < n; i++) { const c_ = cub(x0 + (i % cols) * 9, y0 - Math.floor(i / cols) * 9); g += i >= outFrom ? OUT(outT, G(outT - .6, 'a-fill', `<rect x="${r1(x0 + (i % cols) * 9 - 1)}" y="${r1(y0 - Math.floor(i / cols) * 9 - 1)}" width="10" height="10" rx="2" fill="${RED}"/>`) + c_) : c_; } return G(t, 'a-fade', g); };
    const c1 = 80, c2 = 240, t0 = .25, t1 = 1.6, t2 = 3.2, t3 = 4.4;
    let s = bal(c1, t0) + IC('apple', c1 - 66, 100, 20, t0);
    s += grid(c1 - 52, 102, add, 3, t0, t1 + .8, 0) + grid(c1 + 32, 102, tot, 4, t0, t1 + .8, tot - add);
    s += `<g ${A(t1 + 1)}><rect x="${c1 - 44}" y="170" width="88" height="30" rx="15" fill="${Y}"/>` + IC('apple', c1 - 24, 185, 20) + T(c1 + 10, 191, `= ${tot - add}`, { fs: 16 }) + '</g>';
    s += bal(c2, t2);
    for (let i = 0; i < k; i++) s += IC('pear', c2 - 50 + (i - 1) * 17, 100, 20, t2 + .2 + i * .1);
    const per = tot / k;
    for (let i = 0; i < tot; i++) { const row = Math.floor(i / per), col = i % per; s += G(t2 + .3, 'a-fade', cub(c2 + 32 + col * 9, 102 - row * 9)); }
    for (let i = 0; i < k; i++) { s += `<rect x="${c2 + 30}" y="${102 - i * 9 - 1}" width="${per * 9 + 1}" height="10" rx="3" fill="none" stroke="${[RED, OK, BLUE][i % 3]}" stroke-width="2" ${A(t3 + i * .3, 'a-fade')}/>`; s += G(t3 + i * .3, 'a-pop', badge(c2 - 50 + (i - 1) * 17, 84, per, 8)); }
    s += `<g ${A(t3 + 1.1)}><rect x="${c2 - 44}" y="170" width="88" height="30" rx="15" fill="${Y}"/>` + IC('pear', c2 - 24, 185, 20) + T(c2 + 10, 191, `= ${per}`, { fs: 16 }) + '</g>';
    return { html: anSvg(W, 210, s), at: [t0, t1, t2, t3] };
  };

  // dau (possible i impossible) i recompte de vots amb ratlletes
  S.p1dieTally = ({ a, b }) => {
    let s = G(.25, 'a-pop', cubeD(14, 30, 40, UC, true));
    for (let k = 1; k <= 6; k++) s += tile(88 + (k - 1) * 32, 40, k, .4 + k * .08, { w: 28, h: 28, fs: 15, bg: k === 6 ? Y : '#fff', sc: k === 6 ? Y : UC });
    s += mark(248, 22, 1.3, true, 9) + tile(292, 40, 7, 2.2, { w: 28, h: 28, fs: 15, dash: true, sc: RED }) + mark(306, 22, 2.5, false, 9);
    const t2 = 3.3, ya = 116, yb = 166;
    s += IC('cat', 30, ya, 38, t2) + IC('dog', 30, yb, 38, t2 + .2) + tallyG(70, ya, a, t2 + .3, .18, 36) + tallyG(70, yb, b, t2 + .4 + a * .18, .18, 36);
    const t3 = t2 + (a + b) * .18 + 1;
    s += pill(210, (ya + yb) / 2, `${a} &gt; ${b}`, t3, { fs: 18, bg: Y, sc: Y }) + IC('crown', 30, ya - 26, 24, t3 + .3);
    return { html: anSvg(W, 192, s), at: [.25, 2.2, t2, t3] };
  };

  // parells i senars: fer parelles
  S.p1parity = ({ a, b, num }) => {
    const sp = 28, x = k => 30 + k * sp, rowP = (n, y, t, ok) => {
      let g = ''; for (let k = 0; k < n; k++) g += IC('candy', x(k), y, 24, t + k * .08);
      for (let p = 0; p < Math.floor(n / 2); p++) g += `<ellipse cx="${x(2 * p) + sp / 2}" cy="${y}" rx="26" ry="16" fill="none" stroke="${UC}" stroke-width="2.5" ${A(t + n * .08 + .4 + p * .25, 'a-fade')}/>`;
      if (n % 2) g += `<circle cx="${x(n - 1)}" cy="${y}" r="15" fill="none" stroke="${RED}" stroke-width="2.5" stroke-dasharray="4 3" ${A(t + n * .08 + .5 + Math.floor(n / 2) * .25)}/>`;
      g += pill(262, y, ok ? Lc('parell', 'par') : Lc('senar', 'impar'), t + n * .08 + .9 + Math.floor(n / 2) * .25, { fs: 14, sc: ok ? OK : RED });
      return g; };
    const t1 = 2.1, t2 = 3.9, t3 = 5.1, y3 = 148;
    let bg = '', s = rowP(a, 34, .25, a % 2 === 0) + rowP(b, 88, t1, b % 2 === 0);
    [0, 2, 4, 6, 8].forEach((d, k) => s += tile(28 + k * 34, y3, d, t2 + k * .12, { w: 28, h: 30, fs: 16, sc: OK }));
    const ds = String(num);
    bg += `<circle cx="${r1(248 + 9.5)}" cy="${y3 - 1}" r="17" fill="${Y}" ${A(t3 + .3)}/>`;
    s += T(248, y3 + 11, ds, { fs: 32, t: t3 }) + mark(290, y3 - 16, t3 + .7, true, 10);
    return { html: anSvg(W, y3 + 24, bg + s), at: [.25, t1, t2, t3] };
  };

  // model de barres: la part que falta
  S.p1barPart = (c) => {
    const { whole, part } = c, x0 = 30, bw = 260, bh = 38, y1 = 22, y2 = 76, wp = bw * part / whole, e = TL(c.seq.map(k => [k, { q: 1.7, sub: 1.6, chk: 1.6, res: 1 }[k]]));
    let s = G(e.q, 'a-grow', `<rect x="${x0}" y="${y1}" width="${bw}" height="${bh}" rx="8" fill="${SOFT}" stroke="${UC}" stroke-width="2.5"/>`) + T(x0 + bw / 2, y1 + 26, whole, { fs: 20, t: e.q + .3 });
    s += G(e.q + .5, 'a-grow', `<rect x="${x0}" y="${y2}" width="${r1(wp - 2)}" height="${bh}" rx="8" fill="${UC}"/>`) + T(x0 + wp / 2, y2 + 26, part, { fs: 20, c: '#fff', t: e.q + .8 });
    s += `<rect x="${r1(x0 + wp + 2)}" y="${y2}" width="${r1(bw - wp - 2)}" height="${bh}" rx="8" fill="#fff" stroke="${UC}" stroke-width="2.5" stroke-dasharray="6 4" ${A(e.q + 1, 'a-fade')}/>`;
    s += `<rect x="${r1(x0 + wp + 4)}" y="${y2 + 2}" width="${r1(bw - wp - 6)}" height="${bh - 4}" rx="7" fill="${Y}" ${A(e.chk, 'a-fill')}/>`;
    s += OUT(e.sub + .4, T(x0 + wp + (bw - wp) / 2, y2 + 26, '?', { fs: 20, c: UC, t: e.q + 1.1 })) + T(x0 + wp + (bw - wp) / 2, y2 + 26, whole - part, { fs: 20, t: e.sub + .4 });
    s += pill(94, 146, `${whole} − ${part} = ${whole - part}`, e.sub, { fs: 15 });
    s += `<path d="M${x0},${y2 + bh + 6} v6 h${bw} v-6" fill="none" stroke="${UC}" stroke-width="2.5" stroke-linecap="round" ${A(e.chk + .2, 'a-fade')}/>` + pill(226, 146, `${part} + ${whole - part} = ${whole}`, e.chk + .4, { fs: 15 }) + mark(304, 146, e.chk + .9, true, 10);
    let H = 168;
    if (e.res != null) { s += pill(W / 2, 186, `? = ${whole - part}`, e.res, { fs: 18, bg: Y, sc: Y }); H = 206; }
    return { html: anSvg(W, H, s), at: AT(c, e) };
  };

  // quant més té un que l'altre: dues barres i la diferència
  S.p1barDiff = ({ a, b, ia, ib, u }) => {
    const x0 = 64, sc = 236 / a, ya = 44, yb = 100, bh = 34, e = TL([['bars', 1.6], ['q', 1.4], ['sub', 1.4], ['chk', 1.5], ['ans', 1]]), xd = x0 + b * sc, xe = x0 + a * sc;
    let s = IC(ia, 30, ya + bh / 2, 42, e.bars) + IC(ib, 30, yb + bh / 2, 42, e.bars + .4);
    s += G(e.bars, 'a-grow', `<rect x="${x0}" y="${ya}" width="${r1(a * sc)}" height="${bh}" rx="8" fill="${UC}"/>`) + T(x0 + a * sc / 2, ya + 23, `${a} ${u}`, { fs: 17, c: '#fff', t: e.bars + .4 });
    s += G(e.bars + .4, 'a-grow', `<rect x="${x0}" y="${yb}" width="${r1(b * sc)}" height="${bh}" rx="8" fill="${UC}" opacity=".75"/>`) + T(x0 + b * sc / 2, yb + 23, `${b} ${u}`, { fs: 17, c: '#fff', t: e.bars + .8 });
    s += `<line x1="${r1(xd)}" x2="${r1(xd)}" y1="${ya - 4}" y2="${yb + bh + 4}" stroke="${RED}" stroke-width="2" stroke-dasharray="4 3" ${A(e.q, 'a-fade')}/><rect x="${r1(xd + 2)}" y="${yb}" width="${r1(xe - xd - 2)}" height="${bh}" rx="8" fill="#fff" stroke="${UC}" stroke-width="2.5" stroke-dasharray="6 4" ${A(e.q, 'a-fade')}/>`;
    s += `<rect x="${r1(xd + 4)}" y="${yb + 2}" width="${r1(xe - xd - 6)}" height="${bh - 4}" rx="7" fill="${Y}" ${A(e.chk, 'a-fill')}/>`;
    s += OUT(e.sub, T((xd + xe) / 2, yb + 23, '?', { fs: 18, c: UC, t: e.q + .2 })) + T((xd + xe) / 2, yb + 23, a - b, { fs: 18, t: e.sub });
    s += pill(W / 2 - 74, 168, `${a} − ${b} = ${a - b}`, e.sub + .2, { fs: 15 }) + pill(W / 2 + 74, 168, `${b} + ${a - b} = ${a}`, e.chk + .3, { fs: 15 }) + mark(W / 2 + 74, 146, e.chk + .8, true, 9);
    s += `<path d="M${r1(xd)},${ya - 6} v-6 h${r1(xe - xd)} v6" fill="none" stroke="${YD}" stroke-width="2.5" stroke-linecap="round" ${A(e.ans, 'a-fade')}/>` + pill((xd + xe) / 2, ya - 22, `${a - b} ${u}`, e.ans + .2, { fs: 14, bg: Y, sc: Y });
    return { html: anSvg(W, 190, s), at: [e.bars, e.q, e.sub, e.chk, e.ans] };
  };

  // ===== unitats noves (theory6.js): recta per llegir, setmana, mesos, calendari, dies que falten, si… llavors… si no =====
  // llegir una recta: números escrits, quant val cada marca i on és la fletxa
  S.p1lineRead = (c) => {
    const { lo, hi, to } = c, n = c.n || 10, x0 = 26, x1 = 294, u = (x1 - x0) / n, st = (hi - lo) / n, X = v => x0 + (v - lo) / st * u, y = 118, big = hi >= 1000, fs = big ? 12 : 14;
    const from = c.from ?? lo, m = Math.round((to - from) / st);
    const D = { line: 1.2, arrow: .9, cnt: n * .12 + .5, step: 1.3, hl: 1.4, hops: m * .45 + .6, res: 1 }, e = TL(c.seq.map(k => [k, D[k]]));
    let bg = '', s = `<g ${A(e.line, 'a-fade')}><line x1="${x0 - 12}" x2="${x1 + 12}" y1="${y}" y2="${y}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` + [...Array(n + 1)].map((_, k) => `<line x1="${r1(x0 + k * u)}" x2="${r1(x0 + k * u)}" y1="${y - 8}" y2="${y + 8}" stroke="${INK}" stroke-width="2.5"/>`).join('') + '</g>';
    (c.labs || []).forEach(v => s += T(X(v), y + 27, th(v), { fs, w: 800, t: e.line }));
    if (c.hl != null) { bg += `<circle cx="${r1(X(c.hl))}" cy="${y + 22}" r="${big ? 20 : 15}" fill="${Y}" ${A(e.hl)}/>`; if (!(c.labs || []).includes(c.hl)) s += T(X(c.hl), y + 27, th(c.hl), { fs, w: 800, t: e.hl }); }
    const ta = e[c.arrowAt || 'arrow'] ?? e.line, tr = e.res ?? e.hops + m * .45 + .3;
    s += `<g ${A(ta)}><line x1="${r1(X(to))}" x2="${r1(X(to))}" y1="${y - 58}" y2="${y - 20}" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M${r1(X(to) - 8)},${y - 24} L${r1(X(to))},${y - 12} L${r1(X(to) + 8)},${y - 24} Z" fill="${RED}"/></g>`;
    s += OUT(tr, T(X(to), y - 66, '?', { fs: 20, c: RED, t: ta })) + pill(X(to), y - 76, th(to), tr, { fs: 16, bg: Y, sc: Y });
    if (e.cnt != null) for (let k = 0; k < n; k++) s += T(x0 + (k + .5) * u, y - 6, k + 1, { fs: 10, c: UC, t: e.cnt + k * .12 });
    if (e.step != null) s += pill(W / 2, y + 62, c.stepTxt, e.step, { fs: 15 });
    for (let k = 0; k < m; k++) {
      const a = from + k * st, b = a + st, tk = e.hops + k * .45;
      if (c.cnt) s += `<line x1="${r1(X(a) + 2)}" x2="${r1(X(b) - 2)}" y1="${y}" y2="${y}" stroke="${Y}" stroke-width="7" stroke-linecap="round" ${A(tk, 'a-grow')}/>`;
      else s += hop(X(a), X(b), y - 8, 12, tk, { hs: 5, sw: 2.2 });
      if (c.vals && k < m - 1) s += T(X(b), y + 27, th(b), { fs, w: 800, c: UC, t: tk + .3 });
    }
    if (c.vals || c.cnt) { bg += `<circle cx="${r1(X(to))}" cy="${y + 22}" r="${big ? 20 : 15}" fill="${Y}" ${A(tr)}/>`; s += T(X(to), y + 27, th(to), { fs, w: 900, t: tr }); }
    return { html: anSvg(W, e.step != null ? y + 82 : y + 40, bg + s), at: AT(c, e) };
  };

  // la setmana: avui, demà i ahir
  const WD = () => Lc('dl dt dc dj dv ds dg', 'L M X J V S D').split(' ');
  S.p1week = ({ today }) => {
    const tw_ = 40, gap = 2, x = k => 14 + tw_ / 2 + k * (tw_ + gap), y = 64, e = [.25, 1.8, 3.3], wd = WD();
    let bg = '', s = '';
    wd.forEach((d, k) => { const we = k >= 5; s += G(.25 + k * .1, 'a-pop', `<rect x="${r1(x(k) - tw_ / 2)}" y="${y - 22}" width="${tw_}" height="44" rx="10" fill="${we ? '#E9DDF3' : '#fff'}" stroke="${UC}" stroke-width="2.5"/>` + T(x(k), y + 6, d, { fs: 15 })); });
    bg += `<rect x="${r1(x(today) - tw_ / 2 - 3)}" y="${y - 25}" width="${tw_ + 6}" height="50" rx="12" fill="${Y}" ${A(e[0] + .8)}/>`;
    s += pill(x(today), y + 42, Lc('avui', 'hoy'), e[0] + .9, { fs: 14, bg: Y, sc: Y });
    s += qArr(x(today) + 6, y - 26, x(today + 1) - 2, y - 58, x(today + 1), y - 26, e[1], { c: OK, sw: 3, lab: '+1', ly: -6, fs: 14 }) + `<rect x="${r1(x(today + 1) - tw_ / 2 - 3)}" y="${y - 25}" width="${tw_ + 6}" height="50" rx="12" fill="none" stroke="${OK}" stroke-width="3" ${A(e[1] + .4)}/>` + pill(x(today + 1) + 14, y + 74, Lc('demà', 'mañana'), e[1] + .5, { fs: 14, sc: OK });
    s += qArr(x(today) - 6, y - 26, x(today - 1) + 2, y - 58, x(today - 1), y - 26, e[2], { c: RED, sw: 3, lab: '−1', ly: -6, fs: 14 }) + `<rect x="${r1(x(today - 1) - tw_ / 2 - 3)}" y="${y - 25}" width="${tw_ + 6}" height="50" rx="12" fill="none" stroke="${RED}" stroke-width="3" ${A(e[2] + .4)}/>` + pill(x(today - 1) - 14, y + 74, Lc('ahir', 'ayer'), e[2] + .5, { fs: 14, sc: RED });
    return { html: anSvg(W, y + 94, bg + s), at: e };
  };

  // els mesos de l'any i un full de calendari
  S.p1months = ({ cur, day }) => {
    const mn = Lc('gen febr març abr maig juny jul ag set oct nov des', 'ene feb mar abr may jun jul ago sep oct nov dic').split(' '), full = Lc('gener febrer març abril maig juny juliol agost setembre octubre novembre desembre', 'enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre').split(' ');
    const tw_ = 46, gap = 5, x = k => 10 + tw_ / 2 + (k % 6) * (tw_ + gap), y = k => 40 + Math.floor(k / 6) * 44, e = [.25, 2, 3.4], nx = (cur + 1) % 12;
    let bg = '', s = '';
    mn.forEach((m, k) => s += G(.2 + k * .08, 'a-pop', `<rect x="${r1(x(k) - tw_ / 2)}" y="${y(k) - 17}" width="${tw_}" height="34" rx="9" fill="#fff" stroke="${UC}" stroke-width="2.2"/>` + T(x(k), y(k) + 5, m, { fs: 13 })));
    bg += `<rect x="${r1(x(cur) - tw_ / 2 - 3)}" y="${y(cur) - 20}" width="${tw_ + 6}" height="40" rx="11" fill="${Y}" ${A(e[0] + 1.1)}/>`;
    s += qArr(x(cur) + 8, y(cur) - 18, x(nx) - 4, y(nx) - 34, x(nx), y(nx) - 19, e[1], { c: OK, sw: 3, lab: '+1', ly: -2, fs: 13 }) + `<rect x="${r1(x(nx) - tw_ / 2 - 3)}" y="${y(nx) - 20}" width="${tw_ + 6}" height="40" rx="11" fill="none" stroke="${OK}" stroke-width="3" ${A(e[1] + .4)}/>`;
    const lx = 110, ly = 116, lw = 100, lh = 96;
    s += `<g ${A(e[2])}><rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="10" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M${lx},${ly + 10} Q${lx},${ly} ${lx + 10},${ly} L${lx + lw - 10},${ly} Q${lx + lw},${ly} ${lx + lw},${ly + 10} L${lx + lw},${ly + 26} L${lx},${ly + 26} Z" fill="${RED}"/>` + T(lx + lw / 2, ly + 19, full[nx], { fs: 13, c: '#fff' }) + T(lx + lw / 2, ly + 76, day, { fs: 42 }) + '</g>';
    s += IC('flower', lx - 30, ly + 58, 40, e[2] + .4) + IC('book', lx + lw + 32, ly + 58, 40, e[2] + .6);
    return { html: anSvg(W, ly + lh + 8, bg + s), at: e };
  };

  // el full del calendari: files = setmanes, columnes = dies de la setmana
  S.p1cal = (c) => {
    const { start, days } = c, cw = 40, ch = 24, x0 = 20, hy = 20, gy = 34, wd = WD(), rows = Math.ceil((start + days) / 7);
    const pos = d => { const k = start + d - 1; return [x0 + (k % 7) * cw + cw / 2, gy + Math.floor(k / 7) * ch + ch / 2]; };
    let bg = `<g ${A(.1, 'a-fade')}><rect x="${x0}" y="${hy - 16}" width="${7 * cw}" height="24" rx="8" fill="${SOFT}"/></g>`, s = '';
    wd.forEach((d, k) => s += T(x0 + k * cw + cw / 2, hy + 1, d, { fs: 13, c: k >= 5 ? RED : UC, t: .1 }));
    s += `<g ${A(.15, 'a-fade')}>` + [...Array(rows + 1)].map((_, r) => `<line x1="${x0}" x2="${x0 + 7 * cw}" y1="${gy + r * ch}" y2="${gy + r * ch}" stroke="#E6DEEE" stroke-width="1.2"/>`).join('') + '</g>';
    for (let d = 1; d <= days; d++) { const [x, y] = pos(d); s += T(x, y + 5, d, { fs: 13, w: 700, t: .2 + d * .012, cls: 'a-fade' }); }
    let t = .25; const at = [];
    c.ev.forEach(o => {
      at.push(t);
      (o.ring || []).forEach((d, i) => { const [x, y] = pos(d); s += `<circle cx="${x}" cy="${y}" r="11.5" fill="none" stroke="${o.soft ? UC : RED}" stroke-width="${o.soft ? 2 : 3}"${o.soft ? ' stroke-dasharray="3 2"' : ''} ${A(t + .2 + i * .25)}/>`; });
      if (o.col != null) bg += `<rect x="${x0 + o.col * cw + 3}" y="${hy - 15}" width="${cw - 6}" height="${gy - hy + rows * ch + 12}" rx="9" fill="${Y}" opacity=".45" ${A(t, 'a-fade')}/>`;
      if (o.up != null) { const [x, y] = pos(o.up); s += sArr(x, y - 13, x, hy + 10, t + .3, { c: UC, sw: 3, hs: 7, d: .5 }); }
      if (o.head != null) bg += `<circle cx="${x0 + o.head * cw + cw / 2}" cy="${hy - 4}" r="13" fill="${Y}" ${A(t)}/>`;
      if (o.jump) { const [a, b] = o.jump, [xa, ya] = pos(a), [xb, yb] = pos(b); s += qArr(xa + 8, ya + 6, xa + 22, (ya + yb) / 2, xb + 8, yb - 8, t + .2, { c: OK, sw: 3, lab: `+${b - a}`, lx: 16, fs: 14 }); }
      if (o.pill) s += pill(W / 2, gy + rows * ch + 22, Lc(...o.pill), t + .3, { fs: 16, bg: Y, sc: Y });
      t += o.dur || 1.5;
    });
    return { html: anSvg(W, gy + rows * ch + 42, bg + s), at };
  };

  // una tira de dies: quants en falten o quin dia serà (també passant al mes següent)
  S.p1days = (c) => {
    const tiles = c.tiles, n = tiles.length, gap = 3, sepW = c.months ? 10 : 0, tw_ = Math.min(40, (W - 20 - gap * (n - 1) - sepW) / n);
    const brk = c.months ? c.months[0][1] : n; const X = k => 10 + tw_ / 2 + k * (tw_ + gap) + (k >= brk ? sepW : 0), y = 74;
    const { start, hops: m } = c, end = start + m, e = [.25, 1.8, 1.8 + m * .45 + .9];
    let bg = '', s = '';
    tiles.forEach((d, k) => s += G(.2 + k * .06, 'a-pop', `<rect x="${r1(X(k) - tw_ / 2)}" y="${y - 17}" width="${r1(tw_)}" height="34" rx="8" fill="#fff" stroke="${UC}" stroke-width="2.2"/>` + T(X(k), y + 6, d, { fs: 15 })));
    bg += `<rect x="${r1(X(start) - tw_ / 2 - 3)}" y="${y - 20}" width="${r1(tw_ + 6)}" height="40" rx="10" fill="${Y}" ${A(.9)}/>`;
    s += pill(X(start), y + 34, Lc('avui', 'hoy'), 1, { fs: 13, bg: Y, sc: Y });
    if (c.goal) s += IC(c.goal, X(end), y + 36, 30, 1.2);
    else s += OUT(e[2], T(X(end), y + 42, '?', { fs: 18, c: RED, t: 1.2 }));
    for (let k = 0; k < m; k++) { const tk = e[1] + k * .45; s += hop(X(start + k) + 3, X(start + k + 1) - 3, y - 19, 12, tk, { lab: k + 1, fs: 11, hs: 5, sw: 2.2 }); bg += `<rect x="${r1(X(start + k + 1) - tw_ / 2 + 2)}" y="${y - 15}" width="${r1(tw_ - 4)}" height="30" rx="7" fill="${Y}" opacity=".45" ${A(tk + .3, 'a-fade')}/>`; }
    s += `<rect x="${r1(X(end) - tw_ / 2 - 3)}" y="${y - 20}" width="${r1(tw_ + 6)}" height="40" rx="10" fill="none" stroke="${RED}" stroke-width="3" ${A(e[1] + m * .45)}/>`;
    let py = y + 70;
    if (c.months) c.months.forEach(([name, a, b], i) => { const xa = X(a) - tw_ / 2, xb = X(b - 1) + tw_ / 2; s += `<path d="M${r1(xa)},${y + 58} v6 h${r1(xb - xa)} v-6" fill="none" stroke="${UC}" stroke-width="2" ${A(.4 + i * .2, 'a-fade')}/>` + T((xa + xb) / 2, y + 80, Lc(...name), { fs: 13, c: UC, t: .4 + i * .2 }); });
    if (c.months) py = y + 106;
    if (c.sub) s += pill(W / 2, py, c.sub, e[1] + .2, { fs: 16 });
    s += pill(W / 2, py + (c.sub ? 38 : 0), Lc(...c.res), e[2], { fs: 17, bg: Y, sc: Y });
    return { html: anSvg(W, py + (c.sub ? 38 : 0) + 22, bg + s), at: e };
  };

  // si… llavors… si no: el programa mira la condició i només fa una de les dues branques
  S.p1ifelse = ({ n, lim: k, yes, no }) => {
    const e = [.25, 2.3, 3.7], dx = 160, dy = 88, dw = 66, dh = 30, lx = 66, rx = 254, oy = 164;
    let s = `<g ${A(.25)}><rect x="${dx - 48}" y="6" width="96" height="32" rx="10" fill="#fff" stroke="${UC}" stroke-width="2.5"/>` + T(dx, 28, `n = ${n}`, { fs: 17 }) + '</g>';
    s += sArr(dx, 40, dx, dy - dh - 4, .6, { c: INK, sw: 2.5, hs: 6 });
    s += `<g ${A(.9)}><path d="M${dx},${dy - dh} L${dx + dw},${dy} L${dx},${dy + dh} L${dx - dw},${dy} Z" fill="${SOFT}" stroke="${UC}" stroke-width="2.5" stroke-linejoin="round"/></g>`;
    s += OUT(e[1], T(dx, dy + 6, `n &gt; ${k} ?`, { fs: 16, t: 1 })) + T(dx, dy + 6, `${n} &gt; ${k}`, { fs: 16, t: e[1], c: OK });
    const br = (x, lab, t) => `<path d="M${dx + Math.sign(x - dx) * dw},${dy} L${x},${dy} L${x},${oy - 22}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" pathLength="1" ${A(t, 'a-draw', 'animation-duration:.5s')}/>` + T((dx + Math.sign(x - dx) * dw + x) / 2, dy - 8, lab, { fs: 13, c: UC, t: t + .2 });
    s += br(lx, Lc('sí', 'sí'), 1.3) + br(rx, 'no', 1.5);
    const out = (x, txt, t) => G(t, 'a-pop', `<rect x="${x - 50}" y="${oy - 18}" width="100" height="36" rx="18" fill="#fff" stroke="${UC}" stroke-width="2.5"/>` + T(x, oy + 6, `«${txt}»`, { fs: 16 }));
    s += PUL(e[2] + .6, out(lx, Lc(...yes), 1.7)) + out(rx, Lc(...no), 1.8);
    s += mark(dx + 40, dy - 30, e[1] + .3, true, 11);
    s += `<path d="M${dx - dw},${dy} L${lx},${dy} L${lx},${oy - 22}" fill="none" stroke="${Y}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round" pathLength="1" ${A(e[2], 'a-draw', 'animation-duration:.5s')}/>`;
    s += `<rect x="${lx - 47}" y="${oy - 15}" width="94" height="30" rx="15" fill="${Y}" opacity=".6" ${A(e[2] + .5, 'a-fade')}/>` + `<rect x="${rx - 50}" y="${oy - 18}" width="100" height="36" rx="18" fill="#fff" opacity=".7" ${A(e[2] + .5, 'a-fade')}/>`;
    s += IC('robot', lx + 64, oy - 8, 30, e[2] + .6);
    return { html: anSvg(W, oy + 26, s), at: e };
  };

  Object.assign(SCN, S);

  // ===== configuració de cada concepte: TANIM[uid][i] (i = índex a THEORY[uid].parts) =====
  const upTo = n => [...Array(n).keys()];
  Object.assign(TANIM, {
    // 1r · 1 Números fins al 20
    'c1-1': [
      { k: 'p1count', ic: 'apple', n: 6 },
      { k: 'p1stairs', n: 12 },
      { k: 'p1grp10', ic: 'cards', n: 14 },
      { k: 'p1cmpBlk', a: 15, b: 9 }
    ],
    // 1r · 2 Sumes fins al 20
    'c1-2': [
      { k: 'p1join', ic: 'apple', a: 3, b: 2, sz: 40, seq: ['a', 'b', 'join', 'count', 'eq'], L: ['a', 'join', 'eq'] },
      { k: 'p1nline', lo: 10, hi: 18, start: 13, n: 4, q: '4 + 13 = ?', eq: '4 + 13 = 17', seq: ['q', 'start', 'hops', 'eq'], L: ['q', 'start', 'hops', 'eq'] },
      { k: 'p1tenFr', a: 8, b: 5, op: '+' },
      { k: 'p1nline', lo: 2, hi: 10, start: 4, n: 5, target: 9, cntAt: 'brk', q: '4 + ? = 9', eq: '4 + 5 = 9', seq: ['q', 'hops', 'brk', 'eq'], L: ['q', 'hops', 'brk', 'eq'] }
    ],
    // 1r · 3 Restes fins al 20
    'c1-3': [
      { k: 'p1take', ic: 'balloon', a: 7, b: 2, sz: 34, mode: 'fly', y: 30, seq: ['a', 'go', 'count', 'eq'], L: ['a', 'count', 'eq'] },
      { k: 'p1nline', lo: 11, hi: 18, start: 17, n: -4, q: '17 − 4 = ?', eq: '17 − 4 = 13', seq: ['q', 'start', 'hops', 'eq'], L: ['q', 'start', 'hops', 'eq'] },
      { k: 'p1tenFr', a: 14, b: 6, op: '-' },
      { k: 'p1dblHalf', rows: [{ k: 'dbl', n: 4 }, { k: 'half', n: 8, res: true }] }
    ],
    // 1r · 4 Números fins al 100
    'c1-4': [
      { k: 'p1rods' },
      { k: 'p1blk', n: 47, word: ['quaranta-set', 'cuarenta y siete'] },
      { k: 'p1cmpBlk', a: 52, b: 47, pre: [39, 40] },
      { k: 'p1rodsAdd', a: 3, b: 4 }
    ],
    // 1r · 5 Formes i patrons
    'c1-5': [
      { k: 'p1shapes', num: true, ticks: true, rectCol: true, h: 214, g: [0, 1, 2, 3], items: [{ k: 'tri', x: 62, y: 62, R: 42, lx: 138, lyA: 62 }, { k: 'sq', x: 226, y: 60, R: 40, lx: 300, lyA: 60 }, { k: 'rect', x: 74, y: 166, R: 38, lab: '2 + 2', lx: 174, lyA: 166 }, { k: 'circ', x: 244, y: 166, R: 40, lab: '0', lx: 302, lyA: 166 }] },
      { k: 'p1shapes', vtx: true, h: 156, g: [0, 1, 2], items: [{ k: 'tri', x: 58, y: 66, R: 40 }, { k: 'sq', x: 160, y: 66, R: 40 }, { k: 'circ', x: 262, y: 66, R: 40 }] },
      { k: 'p1pattern', seq: ['r', 'b', 'r', 'b'], unit: 2, next: 'r' },
      { k: 'p1seq', rows: [{ v: [2, 4, 6, 8, 10], step: '+2' }, { v: [13, 23, 33, 43], step: '+10', u: true }], L: ['r0', 'r1', 'u1'] }
    ],
    // 1r · 6 Mesures i diners
    'c1-6': [
      { k: 'p1clock', ev: [{ m: 0, hl: [12] }, { h: 90, hl: [3] }, { dig: '3:00' }] },
      { k: 'p1money', items: [10, 5, 2, 2], steps: [['g', [0, 1]], ['g', [2, 3]], ['run', [0, 1, 2, 3]], ['tot']] },
      { k: 'p1ruler', a: 0, b: 8, max: 10, seq: ['pen', 'gb', 'len'], L: ['pen', 'gb', 'len'] },
      { k: 'p1ruler', a: 2, b: 9, max: 10, seq: ['pen', 'hops', 'len'], L: ['pen', 'hops', 'len'] }
    ],
    // 1r · 7 Orientació, codi i atzar
    'c1-7': [
      { k: 'p1lr', ics: ['apple', 'cat', 'football'] },
      { k: 'p1robot', start: [0, 2], moves: 'RRU', goal: 'flag', split: 2, mode: 'run' },
      { k: 'p1bag', n: 5 },
      { k: 'p1tally', h: 136, rows: [{ ic: 'banana', n: 8, y: 60, h: 46, fin: true }] }
    ],
    // 1r · 8 Problemes
    'c1-8': [
      { k: 'p1join', ic: 'cards', a: 6, b: 4, sz: 32, ca: 3, cb: 2, seq: ['a', 'b', 'nums', 'q', 'count', 'eq'], L: ['a', 'nums', 'q', 'eq'] },
      { k: 'p1join', ic: 'chick', a: 8, b: 5, sz: 30, ca: 4, cb: 3, xa: 78, xb: 244, from: [70, -60], seq: ['a', 'b', 'plus', 'count', 'eq'], L: ['a', 'plus', 'eq'] },
      { k: 'p1take', ic: 'apple', a: 12, b: 5, cols: 6, sz: 30, mode: 'give', friend: 'girl', fx: 278, fy: 34, x: 118, seq: ['a', 'go', 'minus', 'eq'], L: ['a', 'minus', 'eq'] },
      { k: 'p1diffIc', ic: 'cards', a: 9, b: 6, ia: 'girl', ib: 'boy' }
    ],
    // 2n · 1 Números fins al 1.000
    'c2-1': [
      { k: 'p1blocks10' },
      { k: 'p1pvRows', heads: ['C', 'D', 'U'], x0: 76, cw: 56, rows: [{ v: 347 }, { v: 508 }, { v: 990 }], L: ['r0', 'r1', 'r2'] },
      { k: 'p1pvBlk', n: 245 },
      { k: 'p1cmpOrder', a: 312, b: 298, list: [320, 298, 312], nx: 399 }
    ],
    // 2n · 2 Sumes i restes
    'c2-2': [
      { k: 'p1decomp', a: 34, b: 25, m: 58, n: 23 },
      { k: 'p1colOp', a: 38, b: 25, op: '+', L: ['nums', 's0', 's1', 'tot'] },
      { k: 'p1colOp', a: 52, b: 27, op: '-', L: ['f0', 'b0', 's1', 'tot'] },
      { k: 'p1barPart', whole: 40, part: 25, seq: ['q', 'sub', 'chk'], L: ['q', 'sub', 'chk'] }
    ],
    // 2n · 3 Comencem a multiplicar
    'c2-3': [
      { k: 'p1groups', g: 3, n: 4, ic: 'apple', box: 'bag', cols: 2, sz: 28 },
      { k: 'p1array', r: 2, c: 5 },
      { k: 'p1seq', rowH: 74, rows: [{ v: [2, 4, 6, 8, 10], step: '+2', dots: true }, { v: [5, 10, 15, 20, 25], step: '+5', dots: true, ext: { v: 30 } }, { v: [10, 20, 30, 40], step: '+10', dots: true }], L: ['r0', 'r1', 'r2', 'x1'] },
      { k: 'p1dblHalf', rows: [{ k: 'dbl', n: 7 }, { k: 'half', n: 14 }, { k: 'dblBar', n: 25 }] }
    ],
    // 2n · 4 Lògica
    'c2-4': [
      { k: 'p1pattern', seq: ['r', 'b', 'b', 'r', 'b', 'b'], unit: 3, next: 'r' },
      { k: 'p1parity', a: 6, b: 7, num: 74 },
      { k: 'p1seq', rows: [{ v: [3, 6, 9, 12, 15], step: '+3', q: true }, { v: [20, 18, 16, 14], step: '−2', q: true }], L: ['r0', 'a0', 'q0', 'r1'] },
      { k: 'p1bal', l: [3, 4], r: [5], miss: 2 }
    ],
    // 2n · 5 Mesures i formes
    'c2-5': [
      { k: 'p1clock', ev: [{ h: 90, m: 0, hl: [3, 12] }, { dig: '3:00' }, { m: 180, h: 105, hl: [6], sec: [0, 30, ''] }, { dig: '3:30' }] },
      { k: 'p1ruler', a: 0, b: 12, max: 13, door: true, seq: ['pen', 'len', 'm1', 'door'], L: ['pen', 'len', 'm1', 'door'] },
      { k: 'p1money', items: [20, 10, 5, 2], steps: [['g', [0, 1, 2, 3]], ['run', [0, 1]], ['run', [2, 3], 1]] },
      { k: 'p1shapes', fast: true, dt: .09, h: 218, g: [0, 1, 3, 6], items: [{ k: 'tri', x: 52, y: 52, R: 30 }, { k: 'sq', x: 150, y: 52, R: 30 }, { k: 'rect', x: 252, y: 52, R: 30 }, { k: 5, x: 44, y: 150, R: 30 }, { k: 6, x: 124, y: 150, R: 30 }, { k: 8, x: 204, y: 150, R: 30 }, { k: 'circ', x: 282, y: 150, R: 30 }] }
    ],
    // 2n · 6 Espai, codi i dades
    'c2-6': [
      { k: 'p1robot', start: [0, 2], moves: 'RRU', goal: 'chest', split: 2, mode: 'plan' },
      { k: 'p1sym', items: ['bfly', 'F'], L: ['f0', 'g0', 'v0', 'f1'] },
      { k: 'p1solids' },
      { k: 'p1dieTally', a: 5, b: 3 }
    ],
    // 2n · 7 Problemes
    'c2-7': [
      { k: 'p1join', ic: 'cards', a: 12, b: 7, sz: 24, ca: 4, cb: 4, xa: 84, xb: 236, seq: ['a', 'b', 'q', 'eq', 'tot'], L: ['a', 'q', 'eq', 'tot'] },
      { k: 'p1take', ic: 'candy', a: 45, b: 20, cols: 10, sz: 20, gap: 4, x: 140, gone: upTo(20), mode: 'eat', totRight: true, seq: ['a', 'go', 'eq', 'tot'], L: ['a', 'eq', 'tot'] },
      { k: 'p1groups', g: 3, n: 5, ic: 'pencil', box: 'box', cols: 3, sz: 26 },
      { k: 'p1barDiff', a: 30, b: 18, ia: 'girl', ib: 'boy', u: '€' }
    ],
    // 3r · 1 Números fins al 9.999
    'c3-1': [
      { k: 'p1pv4', n: 3752 },
      { k: 'p1pvRows', heads: ['UM', 'C', 'D', 'U'], x0: 20, cw: 46, rows: [{ v: 4608, sep: 1 }, { v: 3020, w: true }], L: ['r0', 'r1', 'w1'] },
      { k: 'p1cmpDig', a: 5382, b: 5328 },
      { k: 'p1round', n: 2748 }
    ],
    // 3r · 2 Sumes i restes
    'c3-2': [
      { k: 'p1colOp', a: 478, b: 256, op: '+', L: ['nums', 's0', 's1', 's2', 'tot'] },
      { k: 'p1colOp', a: 532, b: 178, op: '-', chk: true, L: ['nums', 's0', 's1', 's2', 'tot'] },
      { k: 'p1mental', a: 47, b: 29, c: 398, d: 205 },
      { k: 'p1barPart', whole: 40, part: 25, seq: ['q', 'sub', 'chk', 'res'], L: ['q', 'sub', 'chk', 'res'] }
    ],
    // 3r · 3 Les taules
    'c3-3': [
      { k: 'p1chairs', r: 3, c: 5 },
      { k: 'p1tab3', m: 7, rot: [3, 8] },
      { k: 'p1dots3', a: [6, 4], b: [8, 6], c: [7, 9] },
      { k: 'p1shift2', ns: [6, 25] }
    ],
    // 3r · 4 Dividir
    'c3-4': [
      { k: 'p1deal', n: 12, g: 3, kids: ['boy', 'girl', 'child'], ic: 'candy' },
      { k: 'p1arrDiv', n: 24, d: 6 },
      { k: 'p1grpRem', n: 14, s: 4, ic: 'candy', extra: true, pc: 7, psz: 22, dt: .15, seq: ['pile', 'fill', 'extra', 'rem', 'res'], L: ['pile', 'fill', 'rem', 'res'] },
      { k: 'p1grpRem', n: 23, s: 5, ic: 'candy', pc: 12, psz: 20, dt: .1, remPill: false, seq: ['pile', 'fill', 'rem', 'chk1', 'chk2'], L: ['pile', 'chk1', 'chk2'] }
    ],
    // 3r · 6 Mesures
    'c3-6': [
      { k: 'p1clock', ev: [{ h: 100, hl: [3] }, { m0: 0, m: 120, fives: true, hl: [4] }, { dig: '3:20' }] },
      { k: 'p1clock', cx: 160, ev: [{ m0: 0, m: 90, sec: [0, 15, '15'] }, { m: 180, sec: [15, 30, '30'] }, { m: 270, sec: [30, 45, '45'] }] },
      { k: 'p1units3', kg: 3, ml: 500, price: 13, pay: 20 },
      { k: 'p1perim', a: 5, b: 3 }
    ],
    // 3r · 7 Espai i pensament computacional
    'c3-7': [
      { k: 'p1coords', col: 'C', row: 2 },
      { k: 'p1sym', items: ['A', 'F'], L: ['f0', 'g0', 'f1', 'v1'] },
      { k: 'p1cube' },
      { k: 'p1loop', n0: 5, add: 4, times: 3 }
    ],
    // 3r · 8 Dades i atzar
    'c3-8': [
      { k: 'p1tally', h: 200, rows: [{ n: 5, y: 36, h: 34, demo: true }, { ic: 'apple', n: 13, y: 104, h: 36 }] },
      { k: 'p1bars', bars: [{ ic: 'football', v: 8 }, { ic: 'basketball', v: 5 }] },
      { k: 'p1modeMean', vals: [2, 5, 2, 7] },
      { k: 'p1prob', cnt: [['r', 6], ['b', 2], ['g', 1], ['y', 0]] }
    ],
    // 1r · 9 (nova) La recta, la setmana i els mesos
    'c1-9': [
      { k: 'p1lineRead', lo: 0, hi: 10, labs: [0, 10], hl: 5, from: 5, to: 8, vals: true, seq: ['line', 'hl', 'hops'], L: ['line', 'hl', 'hops'] },
      { k: 'p1lineRead', lo: 0, hi: 100, labs: [0, 100], hl: 50, from: 50, to: 70, vals: true, arrowAt: 'line', seq: ['line', 'hl', 'hops', 'res'], L: ['hl', 'hops', 'res'] },
      { k: 'p1week', today: 3 },
      { k: 'p1months', cur: 2, day: 23 }
    ],
    // 2n · 8 (nova) Rectes i calendari
    'c2-8': [
      { k: 'p1lineRead', lo: 300, hi: 400, labs: [300, 400], from: 300, to: 330, cnt: true, stepTxt: '1 marca = 10', arrowAt: 'line', seq: ['line', 'cnt', 'step', 'hops'], L: ['line', 'step', 'hops'] },
      { k: 'p1cal', start: 1, days: 30, ev: [{ ring: [17] }, { col: 3, up: 17 }, { head: 3, pill: ['dijous', 'jueves'] }] },
      { k: 'p1days', tiles: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], start: 1, hops: 7, goal: 'party', sub: '12 − 5 = 7', res: ['7 dies', '7 días'] },
      { k: 'p1cal', start: 6, days: 30, ev: [{ ring: [3], head: 1 }, { jump: [3, 10] }, { ring: [10, 17, 24], soft: false, col: 1 }] }
    ],
    // 3r · 9 Lògica i problemes
    'c3-9': [
      { k: 'p1seq', rows: [{ v: [3, 7, 11, 15, 19], step: '+4', q: true }], L: ['r0', 'a0', 'q0'] },
      { k: 'p1bal2', add: 5, tot: 12, parts: 3 },
      { k: 'p1groups', g: 4, n: 6, box: 'carton', cols: 3, isp: 20, rep: true, bh: 60 },
      { k: 'p1grpRem', n: 30, s: 5, ic: 'cards', env: true, pc: 15, psz: 18, dt: .08, seq: ['pile', 'fill', 'res', 'chk1'], L: ['pile', 'fill', 'res', 'chk1'] }
    ],
    // 3r · 10 (nova) Rectes, dates, 24 hores i decisions
    'c3-10': [
      { k: 'p1lineRead', lo: 2000, hi: 3000, labs: [2000, 3000], from: 2000, to: 2400, cnt: true, stepTxt: '1 marca = 100', arrowAt: 'line', seq: ['line', 'cnt', 'step', 'hops'], L: ['line', 'step', 'hops'] },
      { k: 'p1days', tiles: [26, 27, 28, 29, 30, 1, 2, 3, 4], months: [[['abril', 'abril'], 0, 5], [['maig', 'mayo'], 5, 9]], start: 2, hops: 5, res: ['3 de maig', '3 de mayo'] },
      { k: 'p1clock', ic: 'sun', ev: [{ h: 150, m: 0, hl: [5] }, { lab: '5 + 12 = 17' }, { dig: '17:00' }] },
      { k: 'p1ifelse', n: 7, lim: 5, yes: ['gran', 'grande'], no: ['petit', 'pequeño'] }
    ]
  });
})();
