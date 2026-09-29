/* ===== Teoria animada · ESO (1r a 4t d'ESO: c7, c8, c9 i c10) =====
   Mateix contracte que anim.js: TANIM[uid][i] és la configuració de l'escena del concepte i i
   SCN[tipus](config) retorna { html, at } (at[k] = segon en què surt la línia k de l'exemple).
   Tot el que és propi d'aquest fitxer viu dins d'AE (un sol nom global) per no xocar amb altres fitxers
   d'escenes. Les classes CSS noves (ae-*) s'injecten una sola vegada. L'estat base de cada element és
   l'estat final, així amb «moviment reduït» es veu directament el resultat. */
const AE = (() => {
  const INK = '#2B1A38', UC = 'var(--uc)', YEL = '#FFC93C', RED = '#E4574B', GRN = '#2E9E5B', GRY = '#8E829A', SOFT = '#F3ECF8', LN = '#E6DEEE';
  const FF = 'font-family="Lexend,sans-serif"';
  if (typeof document !== 'undefined' && document.head && !document.getElementById('ae-css')) {
    const st = document.createElement('style'); st.id = 'ae-css';
    st.textContent = `.ae-gy{animation-name:aeGY;transform-box:fill-box;transform-origin:50% 100%;animation-timing-function:ease-out;animation-duration:.6s}
.ae-gyt{animation-name:aeGY;transform-box:fill-box;transform-origin:50% 0;animation-timing-function:ease-out;animation-duration:.6s}
.ae-gxr{animation-name:aGrowX;transform-box:fill-box;transform-origin:100% 50%;animation-timing-function:ease-out;animation-duration:.6s}
.ae-out{opacity:0;animation-name:aeOut;animation-duration:.35s;animation-timing-function:ease-in}
.ae-tr{animation-name:aeTR;animation-duration:.9s;animation-timing-function:cubic-bezier(.45,0,.3,1)}
.ae-lin{animation-timing-function:linear}
.ae-fx{animation-name:aeFX;transform-box:fill-box;transform-origin:50% 50%;animation-duration:.6s;animation-timing-function:ease-in-out}
.ae-fy{animation-name:aeFY;transform-box:fill-box;transform-origin:50% 50%;animation-duration:.7s;animation-timing-function:ease-in-out}
.ae-bump{animation-name:aeBump;transform-box:fill-box;transform-origin:50% 50%;animation-duration:.6s;animation-timing-function:ease-in-out}
@keyframes aeGY{from{transform:scaleY(0)}}
@keyframes aeOut{from{opacity:1}to{opacity:0}}
@keyframes aeTR{from{transform:translate(var(--fx,0px),var(--fy,0px)) rotate(var(--r,0deg))}}
@keyframes aeFX{from{transform:scaleX(-1)}}
@keyframes aeFY{from{transform:scaleY(-1)}}
@keyframes aeBump{0%,100%{transform:none}45%{transform:scale(1.35)}}`;
    document.head.appendChild(st);
  }
  // amplades de les lletres de Lexend (pes 700 i 800), mesurades al navegador, en mil·lèsimes d'em
  const WCH = " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+−-×÷·=()[]{},.:;/√π±≈≠≤≥<>°%€∞αβ→←↑↓?!'\"àèéíòóúçïüÀÈÉÍÒÓÚÇ²³⁴⁵⁶⁷⁸⁹⁰¹⁻⁺ⁿₙ₁₂∈∪∩|✓✗…ᵃᵇᵐ@#&*_";
  const WT = {
    7: '8w,ir,fl,f8,gf,ie,gk,g3,fd,gn,g1,ib,ia,f5,i6,ga,ax,il,hn,8v,8s,he,8g,qq,hn,ht,ib,ia,cn,dr,b2,hu,gt,n6,gu,h8,fa,ja,jh,ja,lg,hx,h6,lq,ln,ff,ih,kj,gx,oe,mf,mk,ie,mk,ji,hm,i7,l9,js,rl,jl,j5,iz,gl,g4,cg,es,gl,75,hb,au,au,bo,bo,bv,bv,7z,75,75,83,gj,f9,f9,ht,f9,f9,f9,f9,el,em,es,qw,iv,jt,gz,fg,rs,rs,k3,k3,ew,8l,70,d9,ib,ga,ga,81,ht,ht,hu,f5,81,hu,ja,hx,hx,ff,mk,mk,l9,ja,a4,9w,7q,7q,7q,7q,7q,7q,7q,83,4n,84,8i,aw,7q,7q,g0,er,er,8u,l8,fv,kg,az,c2,hj,qt,ke,lk,c8,j3',
    8: '9e,jl,gd,f8,h7,ix,gx,gd,fi,gv,gc,in,in,fa,if,ga,ax,iu,i5,9e,9e,i4,94,r9,i5,i4,in,in,da,dy,b9,ia,h8,nl,he,hq,g4,j8,jp,jh,lr,ib,hd,lw,lw,ge,ir,km,h1,ok,ml,mx,ir,mx,jl,hq,j7,ll,jr,rj,jt,ji,ja,gn,g4,d4,fe,gl,7i,i1,b4,b4,bv,bv,c1,c1,88,7i,7i,8g,h0,f9,f9,ij,f9,f9,f9,f9,em,em,es,si,ja,jt,gz,fg,rs,rs,k3,k3,f7,9j,7k,e3,in,ga,ga,8m,i4,i4,ia,fa,8m,ia,j8,ib,ib,ge,mx,mx,ll,jh,ad,a2,7q,7q,7q,7q,7q,7q,7q,87,4n,84,8i,bh,7q,7q,g0,er,er,9y,l8,fv,m4,az,c2,hj,qt,l4,m1,cw,j1'
  };
  const WM = {}; for (const k in WT) { const v = WT[k].split(','); WM[k] = {}; [...WCH].forEach((c, i) => { WM[k][c] = parseInt(v[i], 36) / 1000; }); WM[k]['\u2009'] = .17; WM[k]['\u200a'] = .09; }
  const tw = (s, fs, wt = 8) => { let w = 0; for (const c of String(s)) w += WM[wt][c] ?? .6; return w * fs; };
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // atributs d'animació: element que apareix a l'instant t
  const tt = (t, cls = 'a-pop', st = '') => `class="an ${cls}" style="--t:${(+t).toFixed(2)}s${st ? ';' + st : ''}"`;
  // element que es veu entre t1 i t2 (després s'esvaeix)
  const inout = (t1, t2, inner, cls = 'a-fade') => `<g ${tt(t2, 'ae-out')}><g ${tt(t1, cls)}>${inner}</g></g>`;
  const out = (t, inner) => `<g ${tt(t, 'ae-out')}>${inner}</g>`;
  // números en català: 1.234,5 i el signe menys de debò
  const nf = (v, d) => {
    const neg = v < 0 && Math.abs(v) > 1e-9; let s = d == null ? String(+Math.abs(v).toFixed(6)) : Math.abs(v).toFixed(d);
    let [i, f] = s.split('.'); if (i.length > 3) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (neg ? '−' : '') + i + (f ? ',' + f : '');
  };
  const sg = v => v < 0 ? '−' + nf(-v) : nf(v); // amb signe menys
  const ps = v => v < 0 ? `(${sg(v)})` : nf(v); // negatius entre parèntesis
  const scene = (h, body) => `<svg class="scene" viewBox="0 0 320 ${Math.round(h)}" width="100%" role="img" aria-hidden="true">${body}</svg>`;

  /* ---------- text matemàtic ----------
     Marques dins del text: {u|…} grup en color de la unitat, {r|…} vermell, {g|…} verd, {k|…} gris, {y|…} fons groc,
     {b|…} requadre, {f|…} requadre ple, {p|…} grup sense estil (per moure'l o assenyalar-lo), es poden combinar ({ub|…}).
     x^2 o x^{−3} superíndex, a_1 o a_{20} subíndex, [2/3] fracció apilada, \x caràcter literal. */
  function parse(s) {
    s = String(s); const o = []; let g = -1, gi = 0, st = '', buf = '', i = 0;
    const push = () => { if (buf) o.push({ k: 't', s: buf, g, st }); buf = ''; };
    const grab = () => { let v; if (s[i + 1] === '{') { const j = s.indexOf('}', i + 2); v = s.slice(i + 2, j); i = j + 1; } else { v = s[i + 1]; i += 2; } return v; };
    while (i < s.length) {
      const c = s[i];
      if (c === '\\') { buf += s[i + 1]; i += 2; continue; }
      if (c === '{') { const m = /^\{([a-z]*)\|/.exec(s.slice(i)); if (m) { push(); st = m[1]; g = gi++; i += m[0].length; continue; } }
      if (c === '}' && g >= 0) { push(); g = -1; st = ''; i++; continue; }
      if (c === '^' || c === '_') { push(); const k = c === '^' ? 'sup' : 'sub'; o.push({ k, s: grab(), g, st }); continue; }
      if (c === '[') { push(); const j = s.indexOf(']', i), p = s.slice(i + 1, j), k = p.indexOf('/'); o.push({ k: 'frac', n: p.slice(0, k), d: p.slice(k + 1), g, st }); i = j + 1; continue; }
      buf += c; i++;
    }
    push(); return { toks: o, ng: gi };
  }
  function lay(s, fs, wt = 8) {
    const { toks, ng } = parse(s); let x = 0, fr = false; const it = [];
    for (const t of toks) {
      if (t.k === 't') { const w = tw(t.s, fs, wt); it.push({ ...t, x, w, fs }); x += w; }
      else if (t.k === 'frac') { fr = true; const f = fs * .8, n = lay(t.n, f, wt), d = lay(t.d, f, wt), w = Math.max(n.w, d.w) + fs * .3; it.push({ ...t, x: x + fs * .08, w, fs, nl: n, dl: d }); x += w + fs * .16; }
      else { const f = fs * .64, w = tw(t.s, f, wt); it.push({ ...t, x: x + fs * .02, w, fs: f }); x += w + fs * .06; }
    }
    return { it, w: x, ng, fr };
  }
  const txt = (x, y, s, fs, fill, wt = 8, extra = '') => {
    const m = /^ +/.exec(s); if (m) { x += tw(m[0], fs, wt); s = s.slice(m[0].length); } s = s.replace(/ +$/, ''); if (!s) return '';
    return `<text x="${r1(x)}" y="${r1(y)}" font-size="${r1(fs)}" font-weight="${wt * 100}" fill="${fill}" ${FF}${extra}>${esc(s)}</text>`;
  };
  function itemSvg(t, ox, y, fill, wt) {
    if (t.k === 't') return txt(ox + t.x, y, t.s, t.fs, fill, wt);
    if (t.k === 'sup') return txt(ox + t.x, y - t.fs * .62, t.s, t.fs, fill, wt);
    if (t.k === 'sub') return txt(ox + t.x, y + t.fs * .35, t.s, t.fs, fill, wt);
    const cx = ox + t.x + t.w / 2, ab = y - t.fs * .3, f = t.fs * .8;
    return `<line x1="${r1(ox + t.x)}" x2="${r1(ox + t.x + t.w)}" y1="${r1(ab)}" y2="${r1(ab)}" stroke="${fill}" stroke-width="${r1(t.fs * .09)}" stroke-linecap="round"/>`
      + t.nl.it.map(u => itemSvg(u, cx - t.nl.w / 2, ab - t.fs * .16, fill, wt)).join('') + t.dl.it.map(u => itemSvg(u, cx - t.dl.w / 2, ab + t.fs * .16 + f * .72, fill, wt)).join('');
  }
  // text matemàtic d'una sola peça (sense grups): x és el centre (a='m'), l'inici (a='s') o el final (a='e')
  const colOf = (st, def) => !st ? def : st.includes('u') ? UC : st.includes('r') ? RED : st.includes('g') ? GRN : st.includes('k') ? GRY : def;
  function M(x, y, s, o = {}) {
    const { fs = 16, fill = INK, wt = 8, a = 'm', t, cls = 'a-pop' } = o, L = lay(s, fs, wt), x0 = a === 'm' ? x - L.w / 2 : a === 'e' ? x - L.w : x;
    const b = L.it.map(u => itemSvg(u, x0, y, colOf(u.st, fill), wt)).join('');
    return t == null ? b : `<g ${tt(t, cls)}>${b}</g>`;
  }
  const mw = (s, fs = 16, wt = 8) => lay(s, fs, wt).w;
  const bbox = (L, x0, y, fs, its) => { const a = Math.min(...its.map(u => u.x)), b = Math.max(...its.map(u => u.x + u.w)), fr = its.some(u => u.k === 'frac'); return { x0: x0 + a, x1: x0 + b, cx: x0 + (a + b) / 2, y0: y - fs * (fr ? 1.08 : .8), y1: y + fs * (fr ? .52 : .24), cy: y - fs * (fr ? .28 : .28) }; };
  const arrowHead = (x, y, ang, sz = 7, fill = INK) => { const p = (a, r) => `${r1(x + r * Math.cos(a))},${r1(y + r * Math.sin(a))}`; return `<path d="M${r1(x)},${r1(y)} L${p(ang + Math.PI - .45, sz)} L${p(ang + Math.PI + .45, sz)} Z" fill="${fill}"/>`; };
  // fletxa corbada d'(x1,y1) a (x2,y2); h>0 fa panxa cap amunt
  function arc(x1, y1, x2, y2, h, t, o = {}) {
    const { col = UC, w = 2.5, lab, fs = 13, labCol, dur = .45, lo = 0 } = o, cx = (x1 + x2) / 2, cy = Math.min(y1, y2) - h;
    const ang = Math.atan2(y2 - cy, x2 - cx);
    let s = `<path d="M${r1(x1)},${r1(y1)} Q${r1(cx)},${r1(cy)} ${r1(x2)},${r1(y2)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" pathLength="1" ${tt(t, 'a-draw', `animation-duration:${dur}s`)}/>`;
    s += `<g ${tt(t + dur * .8, 'a-fade')}>${arrowHead(x2, y2, ang, 7, col)}</g>`;
    if (lab) s += M(cx, (y1 + y2) / 2 - h / 2 - 5 - lo, lab, { fs, fill: labCol || col, t: t + dur * .5 });
    return s;
  }
  // fletxa corba amb punt de control lliure
  const qarrow = (x1, y1, cx, cy, x2, y2, t, o = {}) => { const { col = UC, w = 2.4, dur = .45 } = o; return `<path d="M${r1(x1)},${r1(y1)} Q${r1(cx)},${r1(cy)} ${r1(x2)},${r1(y2)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" pathLength="1" ${tt(t, 'a-draw', `animation-duration:${dur}s`)}/><g ${tt(t + dur * .8, 'a-fade')}>${arrowHead(x2, y2, Math.atan2(y2 - cy, x2 - cx), 7, col)}</g>`; };
  // una fila de text matemàtic amb grups que es poden moure, marcar, ratllar o enllaçar
  // o = { s, x, y, fs, a, t, cls, g:{i:{t, from, cls}}, st:{i:t}, arcs:[[i,j,t,lab]], br:[[i,j,lab,t]], out }
  function mrow(o, reg) {
    const { s, fs = 18, t = 0, cls = 'a-fade', wt = 8, fill = INK } = o;
    let { x = 160, y, a = 'm' } = o;
    if (o.after != null) { const q = reg[o.after]; x = q.x0 + q.w + (o.gap ?? tw(' ', fs, wt)); y = y ?? q.y; a = 's'; }
    const L = lay(s, fs, wt), x0 = a === 'm' ? x - L.w / 2 : a === 'e' ? x - L.w : x, G = [];
    for (let g = 0; g < L.ng; g++) G.push(bbox(L, x0, y, fs, L.it.filter(u => u.g === g)));
    const base = L.it.filter(u => u.g < 0).map(u => itemSvg(u, x0, y, fill, wt)).join('');
    let svg = '';
    G.forEach((b, g) => {
      const its = L.it.filter(u => u.g === g), st = its[0].st, go = (o.g || {})[g] || {}, gt = go.t ?? t; b.t = gt;
      const col = st.includes('f') ? '#fff' : st.includes('u') ? UC : st.includes('r') ? RED : st.includes('g') ? GRN : st.includes('k') ? GRY : fill;
      let inner = '';
      if (st.includes('y')) inner += `<rect x="${r1(b.x0 - 3)}" y="${r1(b.y0 - 2)}" width="${r1(b.x1 - b.x0 + 6)}" height="${r1(b.y1 - b.y0 + 4)}" rx="7" fill="${YEL}"/>`;
      if (st.includes('f')) inner += `<rect x="${r1(b.x0 - 3)}" y="${r1(b.y0 - 3)}" width="${r1(b.x1 - b.x0 + 6)}" height="${r1(b.y1 - b.y0 + 6)}" rx="8" fill="${UC}"/>`;
      if (st.includes('b')) inner += `<rect x="${r1(b.x0 - 3)}" y="${r1(b.y0 - 3)}" width="${r1(b.x1 - b.x0 + 6)}" height="${r1(b.y1 - b.y0 + 6)}" rx="8" fill="#fff" stroke="${UC}" stroke-width="2.2"/>`;
      inner += its.map(u => itemSvg(u, x0, y, col, wt)).join('');
      if (go.from) {
        const src = typeof go.from === 'string' ? (() => { if (go.from[0] === 'B') { const [r, k] = go.from.slice(1).split('.'); return reg[+r].BR[+k]; } const [r, k] = go.from.split('.'), q = r === '' ? G[+k] : reg[+r].G[+k]; return [q.cx, q.cy, q.t]; })() : go.from;
        svg += `<g ${tt(src[2] ?? 0, 'a-fade')}><g class="an a-move" style="--t:${gt.toFixed(2)}s;--fx:${r1(src[0] - b.cx)}px;--fy:${r1(src[1] - b.cy)}px">${inner}</g></g>`;
      } else if (go.cls && gt > t) svg += `<g ${tt(t, cls)}><g ${tt(gt, go.cls)}>${inner}</g></g>`;
      else svg += `<g ${tt(gt, go.cls || (go.t == null ? cls : 'a-pop'))}>${inner}</g>`;
      const stt = (o.st || {})[g] ?? (st.includes('s') ? gt + .6 : null);
      if (st.includes('o')) svg += `<line x1="${r1(b.x0)}" x2="${r1(b.x1)}" y1="${r1(b.y0 + 1)}" y2="${r1(b.y0 + 1)}" stroke="${col}" stroke-width="2" stroke-linecap="round" ${tt(gt, 'a-fade')}/>`;
      if (stt != null) svg += `<line x1="${r1(b.x0 - 3)}" y1="${r1(b.y1 - 2)}" x2="${r1(b.x1 + 3)}" y2="${r1(b.y0 + 2)}" stroke="${RED}" stroke-width="2.6" stroke-linecap="round" pathLength="1" ${tt(stt, 'a-draw')}/>`;
    });
    (o.arcs || []).forEach(([i, j, at, lab, h = 16]) => { const p = G[i], q = G[j]; svg += arc(p.cx, p.y0 - 2, q.cx, q.y0 - 2, h, at, { lab, w: 2 }); });
    const BR = [];
    (o.br || []).forEach(([i, j, lab, at, col = UC]) => {
      const p = G[i], q = G[j], xa = p.x0, xb = q.x1, yb = Math.max(p.y1, q.y1) + 3, m = (xa + xb) / 2;
      BR.push([m, yb + 10 + fs * .72 - fs * .74 * .3, at]);
      svg += `<g ${tt(at, 'a-fade')}><path d="M${r1(xa)},${r1(yb)} q0,5 5,5 H${r1(m - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(xb - 5)} q5,0 5,-5" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round"/>${lab ? M(m, yb + 10 + fs * .72, lab, { fs: fs * .74, fill: col === UC ? UC : col }) : ''}</g>`;
    });
    if (base) svg += `<g ${tt(t, cls)}>${base}</g>`;
    if (o.out != null) svg = out(o.out, svg);
    const R = { svg, G, BR, x0, w: L.w, y, fs, t }; if (reg) reg.push(R); return R;
  }
  // etiqueta arrodonida amb text matemàtic, centrada a x (y = línia base)
  function chip(x, y, s, t, o = {}) {
    const { fs = 14, st = 'o', cls = 'a-pop', wt = 8, a = 'm' } = o, L = lay(s, fs, wt), p = fs * .62, w = L.w + p * 2, h = fs * (L.fr ? 2.35 : 1.6);
    const x0 = a === 'm' ? x - w / 2 : a === 's' ? x : x - w, top = y - fs * (L.fr ? 1.32 : 1.12);
    const bg = { o: ['#fff', UC, INK], f: [UC, UC, '#fff'], y: [YEL, YEL, INK], r: ['#fff', RED, RED], g: [GRN, GRN, '#fff'], k: ['#fff', LN, INK], R: [RED, RED, '#fff'] }[st];
    const body = `<rect x="${r1(x0)}" y="${r1(top)}" width="${r1(w)}" height="${r1(h)}" rx="${r1(Math.min(h / 2, 12))}" fill="${bg[0]}" stroke="${bg[1]}" stroke-width="2"/>` + L.it.map(u => itemSvg(u, x0 + p, y, 'fgR'.includes(st) ? bg[2] : st === 'y' && u.st && u.st.includes('u') ? INK : colOf(u.st, bg[2]), wt)).join('');
    return t == null ? body : `<g ${tt(t, cls)}>${body}</g>`;
  }
  const chipW = (s, fs = 14, wt = 8) => lay(s, fs, wt).w + fs * 1.24;
  const ic = (n, x, y, s, t, cls = 'a-pop') => `<image href="img/ic/${n}.webp" x="${r1(x - s / 2)}" y="${r1(y - s / 2)}" width="${s}" height="${s}"${t == null ? '' : ' ' + tt(t, cls)}/>`;
  const T = (x, y, s, o = {}) => M(x, y, s, { fs: 12, wt: 7, fill: GRY, ...o });
  const mark = (x, y, ok, t, sz = 11) => `<g ${tt(t)}><circle cx="${r1(x)}" cy="${r1(y)}" r="${sz}" fill="${ok ? GRN : RED}"/>${ok ? `<path d="M${r1(x - sz * .45)},${r1(y)} l${r1(sz * .32)},${r1(sz * .34)} l${r1(sz * .58)},${r1(-sz * .66)}" fill="none" stroke="#fff" stroke-width="${r1(sz * .26)}" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${r1(x - sz * .38)},${r1(y - sz * .38)} l${r1(sz * .76)},${r1(sz * .76)} M${r1(x + sz * .38)},${r1(y - sz * .38)} l${r1(-sz * .76)},${r1(sz * .76)}" stroke="#fff" stroke-width="${r1(sz * .26)}" stroke-linecap="round"/>`}</g>`;
  const dot = (x, y, t, o = {}) => { const { r = 5, fill = UC, stroke = '#fff', cls = 'a-pop', open = false } = o; return `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${open ? '#fff' : fill}" stroke="${open ? fill : stroke}" stroke-width="${open ? 2.6 : 2}"${t == null ? '' : ' ' + tt(t, cls)}/>`; };
  const line = (x1, y1, x2, y2, t, o = {}) => { const { col = INK, w = 2.5, cls = 'a-draw', dash, dur, cap = 'round', op } = o; return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${col}" stroke-width="${w}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}${op ? ` opacity="${op}"` : ''}${cls === 'a-draw' && !dash ? ' pathLength="1"' : ''}${t == null ? '' : ' ' + tt(t, dash && cls === 'a-draw' ? 'a-fade' : cls, dur ? `animation-duration:${dur}s` : '')}/>`; };
  const rect = (x, y, w, h, t, o = {}) => { const { fill = UC, stroke = 'none', sw = 2, rx = 4, cls = 'a-pop', op, st = '' } = o; return `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${op != null ? ` opacity="${op}"` : ''}${t == null ? '' : ' ' + tt(t, cls, st)}/>`; };
  // element que va d'on era (ox, oy, angle r0) a on és ara, girant al voltant del punt (px, py) final
  const trm = (inner, t, dx, dy, deg, px, py, dur = .9) => `<g class="an ae-tr" style="--t:${t.toFixed(2)}s;--fx:${r1(dx)}px;--fy:${r1(dy)}px;--r:${r1(deg)}deg;transform-origin:${r1(px)}px ${r1(py)}px;animation-duration:${dur}s">${inner}</g>`;

  /* ---------- recta numèrica ---------- */
  function NL(o) {
    const { x0 = 22, x1 = 298, y, a, b, tick = 1, lab = 1, t = 0, fs = 12, labs, big = [], arrow = true } = o;
    const X = v => x0 + (v - a) / (b - a) * (x1 - x0);
    let s = `<line x1="${x0 - 8}" x2="${x1 + 8}" y1="${y}" y2="${y}" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>`;
    if (arrow) s += arrowHead(x1 + 12, y, 0, 8) + arrowHead(x0 - 12, y, Math.PI, 8);
    const eps = 1e-9;
    for (let v = a; v <= b + eps; v += tick) { const k = Math.abs(v / lab - Math.round(v / lab)) < 1e-6; s += `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${y - (k ? 6 : 4)}" y2="${y + (k ? 6 : 4)}" stroke="${INK}" stroke-width="${k ? 2 : 1.4}"/>`; }
    const L = labs || (() => { const r = []; for (let v = Math.ceil(a / lab - eps) * lab; v <= b + eps; v += lab) r.push(+v.toFixed(6)); return r; })();
    L.forEach(v => { s += M(X(v), y + fs + 9, nf(v), { fs: big.includes(v) ? fs + 2 : fs, wt: 7, fill: big.includes(v) ? INK : GRY }); });
    return { s: `<g ${tt(t, 'a-fade')}>${s}</g>`, X, y };
  }
  // salt sobre la recta
  const hop = (N, v1, v2, t, o = {}) => { const { h = Math.min(34, 10 + Math.abs(N.X(v2) - N.X(v1)) * .28), below = false, ...r } = o; const y = N.y + (below ? 8 : -8); return below ? arcDown(N.X(v1), y, N.X(v2), y, h, t, r) : arc(N.X(v1), y, N.X(v2), y, h, t, r); };
  function arcDown(x1, y1, x2, y2, h, t, o = {}) {
    const { col = UC, w = 2.5, lab, fs = 13, dur = .45 } = o, cx = (x1 + x2) / 2, cy = Math.max(y1, y2) + h, ang = Math.atan2(y2 - cy, x2 - cx);
    let s = `<path d="M${r1(x1)},${r1(y1)} Q${r1(cx)},${r1(cy)} ${r1(x2)},${r1(y2)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" pathLength="1" ${tt(t, 'a-draw', `animation-duration:${dur}s`)}/>`;
    s += `<g ${tt(t + dur * .8, 'a-fade')}>${arrowHead(x2, y2, ang, 7, col)}</g>`;
    if (lab) s += M(cx, (y1 + y2) / 2 + h / 2 + fs + 3, lab, { fs, fill: col, t: t + dur * .5 });
    return s;
  }

  /* ---------- pla cartesià ---------- */
  function PL(o) {
    const { x0, y0, xr, yr, u = 16, ux = u, uy = u, t = 0, grid = 1, gy = grid, lx = 1, ly = 1, fs = 10, names = true, skip = [] } = o;
    const [xa, xb] = xr, [ya, yb] = yr, X = v => x0 + (v - xa) * ux, Y = v => y0 + (yb - v) * uy, W = (xb - xa) * ux, H = (yb - ya) * uy;
    let s = `<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(W)}" height="${r1(H)}" fill="#fff" rx="3"/>`;
    for (let v = Math.ceil(xa / grid) * grid; v <= xb + 1e-9; v += grid) s += `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${r1(y0)}" y2="${r1(y0 + H)}" stroke="${LN}" stroke-width="1"/>`;
    for (let v = Math.ceil(ya / gy) * gy; v <= yb + 1e-9; v += gy) s += `<line y1="${r1(Y(v))}" y2="${r1(Y(v))}" x1="${r1(x0)}" x2="${r1(x0 + W)}" stroke="${LN}" stroke-width="1"/>`;
    const ox = xa <= 0 && xb >= 0 ? X(0) : x0, oy = ya <= 0 && yb >= 0 ? Y(0) : y0 + H;
    s += `<line x1="${r1(x0 - 4)}" x2="${r1(x0 + W + 6)}" y1="${r1(oy)}" y2="${r1(oy)}" stroke="${INK}" stroke-width="1.8"/>` + arrowHead(x0 + W + 9, oy, 0, 7);
    s += `<line y1="${r1(y0 + H + 4)}" y2="${r1(y0 - 6)}" x1="${r1(ox)}" x2="${r1(ox)}" stroke="${INK}" stroke-width="1.8"/>` + arrowHead(ox, y0 - 9, -Math.PI / 2, 7);
    const lab = (v, st) => Math.abs(v / st - Math.round(v / st)) < 1e-6 && Math.abs(v) > 1e-9 && !skip.includes(v);
    for (let v = Math.ceil(xa); v <= xb + 1e-9; v++) if (lab(v, lx)) s += `<line x1="${r1(X(v))}" x2="${r1(X(v))}" y1="${r1(oy - 3)}" y2="${r1(oy + 3)}" stroke="${INK}" stroke-width="1.4"/>` + M(X(v), oy + fs + 4, nf(v), { fs, wt: 7, fill: GRY });
    for (let v = Math.ceil(ya); v <= yb + 1e-9; v++) if (lab(v, ly)) s += `<line y1="${r1(Y(v))}" y2="${r1(Y(v))}" x1="${r1(ox - 3)}" x2="${r1(ox + 3)}" stroke="${INK}" stroke-width="1.4"/>` + M(ox - 5, Y(v) + fs * .36, nf(v), { fs, wt: 7, fill: GRY, a: 'e' });
    if (names) s += M(x0 + W + 7, oy - 7, 'x', { fs: 12, wt: 8, fill: INK }) + M(ox + 9, y0 - 2, 'y', { fs: 12, wt: 8, fill: INK });
    return { s: `<g ${tt(t, 'a-fade')}>${s}</g>`, X, Y, x0, y0, W, H, xa, xb, ya, yb, ox, oy };
  }
  // corba y = f(x) dins del requadre del pla (es talla on surt)
  function curve(P, f, t, o = {}) {
    const { col = UC, w = 3, dur = 1.1, from = P.xa, to = P.xb, n = 160, dash } = o, pts = [];
    for (let i = 0; i <= n; i++) { const x = from + (to - from) * i / n; pts.push([x, f(x)]); }
    let d = '', pen = false;
    const inside = y => y >= P.ya - 1e-9 && y <= P.yb + 1e-9, clampY = (p, q) => { const yl = q[1] > P.yb ? P.yb : P.ya, k = (yl - p[1]) / (q[1] - p[1]); return [p[0] + (q[0] - p[0]) * k, yl]; };
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], ins = inside(p[1]);
      if (ins) { if (!pen) { const q = i > 0 ? clampY(p, pts[i - 1]) : p; d += `M${r1(P.X(q[0]))},${r1(P.Y(q[1]))} `; pen = true; if (i > 0) d += `L${r1(P.X(p[0]))},${r1(P.Y(p[1]))} `; } else d += `L${r1(P.X(p[0]))},${r1(P.Y(p[1]))} `; }
      else if (pen) { const q = clampY(pts[i - 1], p); d += `L${r1(P.X(q[0]))},${r1(P.Y(q[1]))} `; pen = false; }
    }
    return `<path d="${d.trim()}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${dash}"` : ' pathLength="1"'} ${tt(t, dash ? 'a-fade' : 'a-draw', `animation-duration:${dur}s`)}/>`;
  }
  // punt (x, y) amb guies discontínues cap als eixos
  function pt(P, x, y, t, o = {}) {
    const { col = UC, lab, lp = 'ne', guides = false, r = 5.5, fs = 12, st = 'o', open } = o, px = P.X(x), py = P.Y(y);
    let s = '';
    if (guides) s += `<g ${tt(t - .35, 'a-fade')}>${line(px, P.oy, px, py, null, { col: GRY, w: 1.6, dash: '4 4' })}${line(P.ox, py, px, py, null, { col: GRY, w: 1.6, dash: '4 4' })}</g>`;
    s += dot(px, py, t, { fill: col, r, open });
    if (lab) { const w = chipW(lab, fs), dx = lp.includes('e') ? w / 2 + 7 : lp.includes('w') ? -w / 2 - 7 : 0, dy = lp.includes('n') ? -10 : lp.includes('s') ? 20 : 5; s += chip(px + dx, py + dy, lab, t + .15, { fs, st }); }
    return s;
  }
  // recta y = m x + n retallada al requadre
  const rline = (P, m, n, t, o = {}) => curve(P, x => m * x + n, t, { n: 2, ...o });

  return { INK, UC, YEL, RED, GRN, GRY, SOFT, LN, FF, tw, r1, esc, tt, inout, out, nf, sg, ps, scene, parse, lay, M, mw, mrow, chip, chipW, ic, T, mark, dot, line, rect, arc, arcDown, qarrow, arrowHead, trm, NL, hop, PL, curve, pt, rline, txt, colOf };
})();

/* ---------- escena genèrica: files d'expressions que es transformen + blocs de dibuix ----------
   rows: files de text matemàtic (vegeu mrow); add: blocs extra ({p:'nl'|'svg'|'chip'|...}); at: temps de cada línia */
(() => {
  const A = AE;
  Object.assign(SCN, {
    eRows(c) {
      const reg = []; let s = '';
      (c.pre || []).forEach(b => { s += A.blk(b, reg); });
      c.rows.forEach(r => { const R = A.mrow({ fs: c.fs || 18, ...r }, reg); s += R.svg; });
      (c.add || []).forEach(b => { s += A.blk(b, reg); });
      return { html: A.scene(c.h, s), at: c.at };
    }
  });
  // blocs de dibuix reutilitzables dins d'eRows
  A.blk = (b, reg) => {
    if (b.p === 'svg') return b.s;
    if (b.p === 'chip') return A.chip(b.x, b.y, b.s, b.t, b);
    if (b.p === 'm') return A.M(b.x, b.y, b.s, b);
    if (b.p === 'mark') return A.mark(b.x, b.y, b.ok, b.t, b.sz);
    if (b.p === 'nl') {
      const N = A.NL(b); let s = N.s;
      if (b.jumps) { const { from, step, n, t0, dt, h = 12, lab } = b.jumps; b.hops = (b.hops || []).concat(Array.from({ length: n }, (_, i) => [from + i * step, from + (i + 1) * step, t0 + dt * i, { h, dur: Math.max(.15, dt * 1.2), w: 2, lab: lab && i === 0 ? lab : '' }])); }
      if (b.ray) {
        const [v, dir, closed, t, col = A.UC] = b.ray, xe = dir > 0 ? (b.x1 ?? 298) + 12 : (b.x0 ?? 22) - 12, x = N.X(v);
        s += `<line x1="${A.r1(x)}" x2="${A.r1(xe - dir * 8)}" y1="${N.y}" y2="${N.y}" stroke="${col}" stroke-width="7" stroke-linecap="round" stroke-opacity=".75" pathLength="1" ${A.tt(t, 'a-draw', 'animation-duration:.7s')}/><g ${A.tt(t + .6, 'a-fade')}>${A.arrowHead(xe + dir * 2, N.y, dir > 0 ? 0 : Math.PI, 12, col)}</g>`;
        s += A.dot(x, N.y, t, { fill: col, r: 7, open: !closed });
      }
      (b.hops || []).forEach(h => { s += A.hop(N, h[0], h[1], h[2], h[3] || {}); });
      (b.pts || []).forEach(q => { s += A.dot(N.X(q[0]), N.y, q[1], q[2] || {}); if (q[3]) s += A.chip(N.X(q[0]), N.y - 16, q[3], q[1] + .1, { fs: 13, ...(q[4] || {}) }); });
      return s;
    }
    return '';
  };
})();
/* ---------- nombres enters ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, UC, RED, GRN, INK, LN, GRY } = A;
  Object.assign(SCN, {
    // regla dels signes: cada operació cau a la casella (signe del 1r, signe del 2n)
    eSignGrid({ items }) {
      const x0 = 46, cw = 134, y0 = 34, rh = 62, cnt = [[0, 0], [0, 0]], at = [];
      let s = M(24, 22, '1r', { fs: 10, wt: 7, fill: GRY }) + M(40, 12, '2n', { fs: 10, wt: 7, fill: GRY });
      ['+', '−'].forEach((g, j) => {
        s += `<circle cx="${x0 + cw * j + cw / 2}" cy="18" r="11" fill="#fff" stroke="${INK}" stroke-width="2"/>` + M(x0 + cw * j + cw / 2, 24, g, { fs: 17 });
        s += `<circle cx="24" cy="${y0 + rh * j + rh / 2}" r="11" fill="#fff" stroke="${INK}" stroke-width="2"/>` + M(24, y0 + rh * j + rh / 2 + 6, g, { fs: 17 });
        [0, 1].forEach(i => {
          const pos = i === j;
          s += rect(x0 + cw * j + 2, y0 + rh * i + 2, cw - 4, rh - 4, null, { fill: '#fff', stroke: LN, rx: 10 });
          s += `<g opacity=".16">${M(x0 + cw * j + cw / 2, y0 + rh * i + rh / 2 + 22, pos ? '+' : '−', { fs: 64, fill: pos ? GRN : RED })}</g>`;
        });
      });
      items.forEach(([e, r], k) => {
        const nums = e.match(/[+−]?\d+/g), i = nums[0][0] === '−' ? 1 : 0, j = nums[1][0] === '−' ? 1 : 0, t = .35 + 1.35 * k, sl = cnt[i][j]++;
        const n = items.filter(([e2]) => { const q = e2.match(/[+−]?\d+/g); return (q[0][0] === '−' ? 1 : 0) === i && (q[1][0] === '−' ? 1 : 0) === j; }).length;
        s += inout(t, t + 1.2, rect(x0 + cw * j + 2, 4, cw - 4, 28, null, { fill: UC, op: .18, rx: 8 }) + rect(8, y0 + rh * i + 2, 34, rh - 4, null, { fill: UC, op: .18, rx: 8 }));
        const cy = y0 + rh * i + (n > 1 ? 24 + sl * 26 : rh / 2 + 5);
        s += chip(x0 + cw * j + cw / 2, cy, `${e} = {${r[0] === '−' ? 'r' : 'g'}|${r}}`, t + .2, { fs: 12, st: 'k' });
        at.push(t + .75);
      });
      return { html: A.scene(y0 + rh * 2 + 4, s), at };
    }
  });
})();

/* ---------- divisibilitat ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, line, dot, mark, NL, hop, mrow, UC, RED, GRN, INK, LN, GRY, YEL, SOFT, nf, r1, arc } = A;
  Object.assign(SCN, {
    // múltiples (salts sobre la recta) i divisors (els rectangles que es poden fer amb n punts)
    eMultDiv({ m, j: k, n }) {
      const N = NL({ y: 46, a: 0, b: m * k, tick: 1, lab: m, t: .1, big: [m * k] }); let s = N.s;
      for (let j = 0; j < k; j++) { s += hop(N, j * m, (j + 1) * m, .35 + .38 * j, { lab: '+' + m, fs: 11 }); s += A.dot(N.X((j + 1) * m), 46, .7 + .38 * j, { r: 4.5 }); }
      const t1 = .45 + .38 * k;
      s += chip(160, 96, `${m} × ${k} = ${m * k}`, t1 + .2, { fs: 14, st: 'y' });
      const pairs = []; for (let a = 1; a * a <= n; a++) if (n % a === 0) pairs.push([a, n / a]);
      const sp = 10.5, gap = 22, wid = pairs.map(([a, b]) => b * sp), tot = wid.reduce((u, v) => u + v, 0) + gap * (pairs.length - 1);
      let x = 160 - tot / 2; const t2 = t1 + 1;
      pairs.forEach(([a, b], i) => {
        const t = t2 + .5 * i, yb = 168;
        for (let r = 0; r < a; r++) for (let c = 0; c < b; c++) s += `<circle cx="${r1(x + c * sp + sp / 2)}" cy="${r1(yb - r * sp)}" r="3.8" fill="${UC}" ${tt(t + .02 * (r * b + c))}/>`;
        s += M(x + b * sp / 2, 190, `${a} × ${b}`, { fs: 13, t: t + .3 });
        x += b * sp + gap;
      });
      const t3 = t2 + .5 * pairs.length + .4, ds = [...pairs.map(p => p[0]), ...pairs.map(p => p[1]).reverse()].filter((v, i, q) => q.indexOf(v) === i);
      s += chip(160, 216, `Divisors de ${n}: {u|${ds.join(', ')}}`, t3, { fs: 13.5 });
      return { html: A.scene(226, s), at: [t1 - .2, t1 + .5, t3 + .2] };
    },
    // criteris de divisibilitat mirant les xifres
    eDivCrit({ n, d = 3 }) {
      const D = String(n).split(''), fs = 42, sw = 30, x0 = 34, y = 76, cx = i => x0 + i * sw + sw / 2, L = D.length;
      let s = D.map((c, i) => M(cx(i), y, c, { fs, t: .15 + .08 * i })).join('');
      const last = +D[L - 1], sum = D.reduce((u, c) => u + +c, 0);
      // 1) per 2: l'última xifra
      s += inout(.6, 2.9, `<circle cx="${cx(L - 1)}" cy="${y - 15}" r="21" fill="none" stroke="${UC}" stroke-width="3"/>`, 'a-pop');
      s += chip(232, 40, '÷ 2', .9, { fs: 15 }) + mark(282, 35, last % 2 === 0, 1.05);
      // 2) per 3: la suma de xifres
      s += `<g ${tt(1.6, 'a-fade')}><path d="M${cx(0) - 12},${y + 10} q0,6 6,6 H${cx(1) - 6} q6,0 6,6 q0,-6 6,-6 H${cx(L - 1) + 6} q6,0 6,-6" fill="none" stroke="${UC}" stroke-width="2.4"/></g>`;
      s += M(cx(1), y + 42, D.join(' + ') + ` = {u|${sum}}`, { fs: 16, t: 1.8 });
      s += chip(232, 90, '÷ 3', 2.2, { fs: 15 }) + mark(282, 85, sum % 3 === 0, 2.35);
      // 3) per 5: acaba en 0 o en 5?
      s += `<circle cx="${cx(L - 1)}" cy="${y - 15}" r="21" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 4" ${tt(2.9, 'a-pop')}/>`;
      s += chip(232, 140, '÷ 5', 3.1, { fs: 15 }) + mark(282, 135, last === 0 || last === 5, 3.25);
      // 4) comprovació: n en 3 parts iguals
      const q = n / d, bw = 270, bx = 25, by = 172;
      for (let i = 0; i < d; i++) s += rect(bx + i * bw / d + 1.5, by, bw / d - 3, 24, 3.9 + .25 * i, { fill: i % 2 ? YEL : UC, rx: 6, cls: 'a-grow' }) + M(bx + (i + .5) * bw / d, by + 17, nf(q), { fs: 14, fill: i % 2 ? INK : '#fff', t: 4.1 + .25 * i });
      s += M(160, 216, `${nf(n)} ÷ ${d} = {u|${nf(q)}}`, { fs: 14, t: 4.3 + .25 * d });
      return { html: A.scene(224, s), at: [1.1, 2.4, 3.3, 4.8] };
    },
    // arbre de factors primers (i l'escala de divisions al costat)
    eFactorTree({ n }) {
      const f = []; let v = n; for (let p = 2; v > 1;) if (v % p === 0) { f.push(p); v /= p; } else p++;
      let s = '', x = 92, y = 26; const dy = 40, dx = 30, T = i => .45 + .8 * i, lx = 252;
      const node = (x, y, v, t, prime) => prime ? `<circle cx="${x}" cy="${y - 6}" r="15" fill="${UC}" ${tt(t)}/>` + M(x, y, nf(v), { fs: 15, fill: '#fff', t }) : `<circle cx="${x}" cy="${y - 6}" r="17" fill="#fff" stroke="${INK}" stroke-width="2.4" ${tt(t)}/>` + M(x, y, nf(v), { fs: 15, t });
      s += node(x, y, n, .1, f.length === 1);
      // escala de divisions (com a l'exemple)
      s += `<line x1="${lx}" x2="${lx}" y1="12" y2="${22 + f.length * 30}" stroke="${INK}" stroke-width="2.2" ${tt(.1, 'a-fade')}/>` + M(lx - 10, 30, nf(n), { fs: 15, a: 'e', t: .1 });
      let cur = n;
      f.forEach((p, i) => {
        const t = T(i), nxt = cur / p;
        s += M(lx + 10, 30 + 30 * i, String(p), { fs: 15, a: 's', fill: UC, t: t + .2 }) + M(lx - 10, 60 + 30 * i, nf(nxt), { fs: 15, a: 'e', t: t + .45, fill: nxt === 1 ? GRY : INK });
        if (i < f.length - 1) {
          const ny = y + dy;
          s += line(x, y + 11, x - dx, ny - 20, t) + line(x, y + 11, x + dx, ny - 20, t);
          s += M(x - dx / 2 - 13, y + 25, '÷' + p, { fs: 11, wt: 7, fill: GRY, t: t + .1 });
          s += node(x - dx, ny, p, t + .3, true) + node(x + dx, ny, nxt, t + .45, i === f.length - 2);
          x += dx; y = ny;
        }
        cur = nxt;
      });
      const tl = T(f.length), cnt = {}; f.forEach(p => cnt[p] = (cnt[p] || 0) + 1);
      const expr = Object.keys(cnt).map(p => `{u|${p}${cnt[p] > 1 ? '^' + cnt[p] : ''}}`).join(' × ');
      s += mrow({ s: `${nf(n)} = ${expr}`, x: 150, y: 206, fs: 22, t: tl }).svg;
      // línies de l'exemple: 1a = dues primeres divisions, 2a = les altres, 3a = el producte
      return { html: A.scene(216, s), at: [T(1) + .5, T(f.length - 1) + .5, tl + .2] };
    },
    // m.c.d. i m.c.m. amb un diagrama de Venn dels factors primers (i els busos que coincideixen)
    eVenn({ a, b, fa, fb, bus }) {
      const ca = [...fa], cb = [...fb], com = []; ca.slice().forEach(p => { const j = cb.indexOf(p); if (j >= 0) { com.push(p); cb.splice(j, 1); ca.splice(ca.indexOf(p), 1); } });
      const cy = 74, r = 60, xa = 118, xb = 202;
      let s = `<circle cx="${xa}" cy="${cy}" r="${r}" fill="${UC}" fill-opacity=".08" stroke="${UC}" stroke-width="2.5" ${tt(.1, 'a-fade')}/><circle cx="${xb}" cy="${cy}" r="${r}" fill="${YEL}" fill-opacity=".12" stroke="#E0A800" stroke-width="2.5" ${tt(.25, 'a-fade')}/>`;
      s += chip(xa - 42, 18, nf(a), .1, { fs: 15, st: 'f' }) + chip(xb + 42, 18, nf(b), .25, { fs: 15, st: 'y' });
      const put = (arr, x, t) => arr.map((p, i) => `<circle cx="${x}" cy="${r1(cy - (arr.length - 1) * 15 + i * 30 - 5)}" r="13" fill="#fff" stroke="${INK}" stroke-width="2" ${tt(t + .12 * i)}/>` + M(x, cy - (arr.length - 1) * 15 + i * 30, String(p), { fs: 15, t: t + .12 * i })).join('');
      s += put(ca, xa - 32, .6) + put(com, 160, .75) + put(cb, xb + 32, 1.2);
      // m.c.d.: la part comuna
      const lens = `M160,${r1(cy - Math.sqrt(r * r - 42 * 42))} A${r},${r} 0 0 1 160,${r1(cy + Math.sqrt(r * r - 42 * 42))} A${r},${r} 0 0 1 160,${r1(cy - Math.sqrt(r * r - 42 * 42))} Z`;
      s += `<path d="${lens}" fill="${UC}" fill-opacity=".35" ${tt(2.1, 'a-fade')}/>`;
      const g = com.reduce((u, v) => u * v, 1), l = fa.concat(cb).reduce((u, v) => u * v, 1);
      s += chip(70, 158, `m.c.d. = {u|${nf(g)}}`, 2.3, { fs: 13.5 });
      // m.c.m.: tot el que hi ha als dos cercles
      s += `<path d="M${xa},${cy - r} A${r},${r} 0 1 0 ${xa},${cy + r} M${xb},${cy - r} A${r},${r} 0 1 1 ${xb},${cy + r}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-dasharray="7 5" ${tt(3.2, 'a-fade')}/>`;
      s += chip(250, 158, `m.c.m. = {u|${nf(l)}}`, 3.4, { fs: 13.5 });
      let at = [1.5, 2.5, 3.6];
      if (bus) {
        const N = NL({ y: 196, a: 0, b: l, tick: 1, lab: a === 12 ? 6 : 1, t: 4.1, labs: [0, a, b, 2 * a, l].filter((v, i, q) => q.indexOf(v) === i && v <= l).sort((u, v) => u - v), fs: 11, big: [l], arrow: false });
        s += N.s;
        for (let v = a; v <= l; v += a) s += `<circle cx="${r1(N.X(v))}" cy="185" r="5.5" fill="${UC}" stroke="#fff" stroke-width="1.5" ${tt(4.3 + v / l * .7)}/>`;
        for (let v = b; v <= l; v += b) s += `<circle cx="${r1(N.X(v))}" cy="174" r="5.5" fill="#E0A800" stroke="#fff" stroke-width="1.5" ${tt(4.4 + v / l * .7)}/>`;
        s += M(24, 188, 'cada ' + a, { fs: 10, wt: 7, fill: UC, a: 's', t: 4.3 }) + M(24, 176, 'cada ' + b, { fs: 10, wt: 7, fill: '#B98900', a: 's', t: 4.4 });
        s += `<circle cx="${r1(N.X(l))}" cy="180" r="13" fill="none" stroke="${RED}" stroke-width="2.5" ${tt(5.3)}/>`;
        at.push(5.4);
      }
      return { html: A.scene(bus ? 222 : 172, s), at };
    }
  });
  /* ---------- blocs de fraccions, quadrats i notació científica (per a eRows) ---------- */
  const oldBlk = A.blk;
  A.blk = (b, reg) => {
    // barra partida en d parts amb n pintades; sub: la tornem a partir en L parts; g: agrupem de g en g
    if (b.p === 'fbar') {
      const { x = 70, y, w = 220, h = 26, d, n, t = 0, col = UC, lab, sub, st, lab2, g, gt, out } = b, pw = w / d;
      let s = `<g ${tt(t, 'a-fade')}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#fff" stroke="${INK}" stroke-width="2.2"/>`;
      for (let k = 0; k < n; k++) s += `<rect x="${r1(x + k * pw + 1.5)}" y="${y + 1.5}" width="${r1(pw - 3)}" height="${h - 3}" rx="4" fill="${col}"/>`;
      for (let k = 1; k < d; k++) s += `<line x1="${r1(x + k * pw)}" x2="${r1(x + k * pw)}" y1="${y}" y2="${y + h}" stroke="${INK}" stroke-width="2.2"/>`;
      s += '</g>';
      if (sub) { const q = w / sub; for (let k = 1; k < sub; k++) if (Math.abs(k * q / pw - Math.round(k * q / pw)) > 1e-6) s += `<line x1="${r1(x + k * q)}" x2="${r1(x + k * q)}" y1="${y + 2}" y2="${y + h - 2}" stroke="${INK}" stroke-width="1.2" stroke-dasharray="3 2" ${tt(st + .04 * k, 'a-fade')}/>`; }
      if (g) { for (let k = g; k < d; k += g) s += `<line x1="${r1(x + k * pw)}" x2="${r1(x + k * pw)}" y1="${y - 5}" y2="${y + h + 5}" stroke="${RED}" stroke-width="3.2" stroke-linecap="round" pathLength="1" ${tt(gt + .12 * k / g, 'a-draw')}/>`; }
      if (lab) s += lab2 ? A.inout(t, st, M(x - 12, y + h / 2 + 5, lab, { fs: 17, a: 'e' }), 'a-pop') + M(x - 12, y + h / 2 + 5, lab2, { fs: 17, a: 'e', fill: UC, t: st + .1 }) : M(x - 12, y + h / 2 + 5, lab, { fs: 17, a: 'e', t });
      return out != null ? A.out(out, s) : s;
    }
    // barra de resultat: trossos de colors que hi van entrant, i opcionalment trossos que es treuen
    if (b.p === 'fseg') {
      const { x = 70, y, w = 220, h = 26, d, segs = [], cross, lab, labT, t = 0, out } = b, pw = w / d;
      let s = `<g ${tt(t, 'a-fade')}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#fff" stroke="${INK}" stroke-width="2.2"/>`;
      for (let k = 1; k < d; k++) s += `<line x1="${r1(x + k * pw)}" x2="${r1(x + k * pw)}" y1="${y}" y2="${y + h}" stroke="${INK}" stroke-width="1.4"/>`;
      s += '</g>';
      segs.forEach(([k0, c, col, ts]) => { for (let k = k0; k < k0 + c; k++) s += `<rect x="${r1(x + k * pw + 1.5)}" y="${y + 1.5}" width="${r1(pw - 3)}" height="${h - 3}" rx="3" fill="${col === 'y' ? YEL : col === 'r' ? RED : UC}" ${tt(ts + .07 * (k - k0), 'a-pop')}/>`; });
      if (cross) { const [k0, c, ts] = cross; for (let k = k0; k < k0 + c; k++) s += `<g ${tt(ts + .12 * (k - k0), 'a-pop')}><rect x="${r1(x + k * pw + 1.5)}" y="${y + 1.5}" width="${r1(pw - 3)}" height="${h - 3}" rx="3" fill="#fff" opacity=".82"/><path d="M${r1(x + k * pw + 4)},${y + 5} L${r1(x + (k + 1) * pw - 4)},${y + h - 5}" stroke="${RED}" stroke-width="2.6" stroke-linecap="round"/></g>`; }
      for (let k = 1; k < d; k++) s += `<line x1="${r1(x + k * pw)}" x2="${r1(x + k * pw)}" y1="${y}" y2="${y + h}" stroke="${INK}" stroke-width="1.4" ${tt(t, 'a-fade')}/>`;
      if (lab) s += M(x - 12, y + h / 2 + 5, lab, { fs: 17, a: 'e', t: labT ?? t, fill: INK });
      return out != null ? A.out(out, s) : s;
    }
    // model d'àrea: a/b de c/d. Columnes = segona fracció, files = primera
    if (b.p === 'farea') {
      const { x, y, w, h, fr, fc, t = 0, lab, labT, out } = b, [nr, dr] = fr, [nc, dc] = fc, cw = w / dc, rh = h / dr;
      let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#fff" stroke="${INK}" stroke-width="2.2" ${tt(t, 'a-fade')}/>`;
      s += `<rect x="${x + 1.5}" y="${y + 1.5}" width="${r1(cw * nc - 3)}" height="${h - 3}" rx="3" fill="${YEL}" ${tt(t + .4, 'a-grow')}/>`;
      s += `<rect x="${x + 1.5}" y="${y + 1.5}" width="${r1(cw * nc - 3)}" height="${r1(rh * nr - 3)}" rx="3" fill="${UC}" ${tt(t + 1.3, 'ae-gyt')}/>`;
      for (let k = 1; k < dc; k++) s += `<line x1="${r1(x + k * cw)}" x2="${r1(x + k * cw)}" y1="${y}" y2="${y + h}" stroke="${INK}" stroke-width="1.6" ${tt(t + .2, 'a-fade')}/>`;
      for (let k = 1; k < dr; k++) s += `<line y1="${r1(y + k * rh)}" y2="${r1(y + k * rh)}" x1="${x}" x2="${x + w}" stroke="${INK}" stroke-width="1.6" ${tt(t + 1.1, 'a-fade')}/>`;
      s += M(x + cw * nc / 2, y - 7, `[${nc}/${dc}]`, { fs: 14, t: t + .5 }) + M(x - 8, y + rh * nr / 2 + 8, `[${nr}/${dr}]`, { fs: 14, a: 'e', fill: UC, t: t + 1.4 });
      if (lab) s += M(x + w + 10, y + h / 2 + 8, lab, { fs: 17, a: 's', t: labT ?? t + 2 });
      return out != null ? A.out(out, s) : s;
    }
    // quadrícula de n × n; fill: k × k pintat; extra: caselles de més en groc
    if (b.p === 'sq') {
      const { x, y, c = 10, n, t = 0, k = n, t2, extra = 0, t3, lab, labT, col = UC, side, out } = b;
      let s = `<rect x="${x}" y="${y}" width="${n * c}" height="${n * c}" fill="${k === n ? col : '#fff'}" fill-opacity="${k === n ? .8 : 1}" stroke="${INK}" stroke-width="2" ${tt(t, 'a-fade')}/>`;
      if (k < n) s += `<rect x="${x}" y="${y + (n - k) * c}" width="${k * c}" height="${k * c}" fill="${col}" fill-opacity=".8" ${tt(t2 ?? t, 'a-fade')}/>`;
      for (let e = 0; e < extra; e++) s += `<rect x="${x + k * c}" y="${y + (n - k) * c + e * c}" width="${c}" height="${c}" fill="${YEL}" stroke="${INK}" stroke-width="1" ${tt(t3 ?? t, 'a-pop')}/>`;
      let gl = ''; for (let i = 1; i < n; i++) gl += `<line x1="${x + i * c}" x2="${x + i * c}" y1="${y}" y2="${y + n * c}" stroke="#fff" stroke-opacity=".7" stroke-width="1"/><line y1="${y + i * c}" y2="${y + i * c}" x1="${x}" x2="${x + n * c}" stroke="#fff" stroke-opacity=".7" stroke-width="1"/>`;
      s += `<g ${tt(t, 'a-fade')}>${gl}</g><rect x="${x}" y="${y}" width="${n * c}" height="${n * c}" fill="none" stroke="${INK}" stroke-width="2"/>`;
      if (side) s += M(x + n * c / 2, y - 6, side, { fs: 13, t, fill: INK });
      if (lab) s += M(x + n * c / 2, y + n * c + 18, lab, { fs: 13, t: labT ?? t + .3 });
      return out != null ? A.out(out, s) : s;
    }
    // notació científica: la coma salta de xifra en xifra
    if (b.p === 'sci') {
      const { x = 160, y, m, e, dir = 'in', t = 0, fs = 22, res, resX, resY, hopT = .2, out } = b;
      const S = e >= 0 ? m.padEnd(Math.max(m.length, e + 1), '0') : '0'.repeat(-e) + m;
      const sciP = e >= 0 ? 1 : -e + 1, numP = e >= 0 ? e + 1 : 1, p0 = dir === 'in' ? numP : sciP, p1 = dir === 'in' ? sciP : numP;
      const sw = fs * .7, x0 = x - S.length * sw / 2, bx = p => x0 + p * sw, st = p1 > p0 ? 1 : -1, H = Math.abs(p1 - p0);
      const pad = i => dir === 'out' && (e >= 0 ? i >= m.length : i < -e);
      const insig = i => dir === 'in' && (e >= 0 ? i >= m.length : i < -e);
      let s = '';
      [...S].forEach((c, i) => {
        const tp = pad(i) ? t + .3 + hopT * (Math.abs((e >= 0 ? i + 1 : i) - p0) - .5) : t;
        if (insig(i)) s += A.inout(t, t + .4 + H * hopT + .3, M(bx(i) + sw / 2, y, c, { fs }), 'a-fade') + M(bx(i) + sw / 2, y, c, { fs, fill: GRY, t: t + .4 + H * hopT + .3, cls: 'a-fade' });
        else s += M(bx(i) + sw / 2, y, c, { fs, fill: pad(i) ? RED : INK, t: tp, cls: pad(i) ? 'a-pop' : 'a-fade' });
      });
      const comma = p => `<text x="${r1(bx(p))}" y="${r1(y + fs * .12)}" text-anchor="middle" font-size="${fs}" font-weight="900" fill="${UC}" ${A.FF}>,</text>`;
      for (let k = 0; k <= H; k++) {
        const p = p0 + st * k, t1 = t + .3 + k * hopT, show = p > 0 && p < S.length;
        if (k < H) { if (show) s += A.inout(t1, t1 + hopT, comma(p), 'a-fade'); s += `<path d="M${r1(bx(p))},${r1(y - fs * .95)} q${r1(st * sw / 2)},-9 ${r1(st * sw)},0" fill="none" stroke="${UC}" stroke-width="2" pathLength="1" ${tt(t1 + .02, 'a-draw', 'animation-duration:.18s')}/>`; }
        else if (show) s += `<g ${tt(t1, 'a-pop')}>${comma(p)}</g>`;
      }
      s += M(x0 + (p0 + p1) / 2 * sw, y - fs * .95 - 12, `${H} ${H === 1 ? 'lloc' : 'llocs'} ${st < 0 ? '←' : '→'}`, { fs: 11.5, wt: 7, fill: UC, t: t + .4 + H * hopT });
      if (res) s += M(resX ?? x, resY ?? y + 32, res, { fs: fs * .82, t: t + .6 + H * hopT, fill: INK });
      return out != null ? A.out(out, s) : s;
    }
    return oldBlk(b, reg);
  };
})();

/* ---------- potències ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, line, mrow, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  // cub isomètric de n × n × n que s'apila capa a capa
  const cube = (cx, by, n, u, t0, dt) => {
    const c = Math.cos(Math.PI / 6), sn = .5, P = (x, y, z) => [cx + (x - y) * c * u, by - (x + y) * sn * u - z * u], pp = (...q) => q.map(v => v.map(r1).join(',')).join(' ');
    let s = '';
    for (let z = 0; z < n; z++) {
      const t = t0 + dt * z; let g = '';
      g += `<polygon points="${pp(P(0, 0, z), P(0, n, z), P(0, n, z + 1), P(0, 0, z + 1))}" style="fill:color-mix(in srgb,${UC} 80%,#000)" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`;
      g += `<polygon points="${pp(P(0, 0, z), P(n, 0, z), P(n, 0, z + 1), P(0, 0, z + 1))}" style="fill:${UC}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`;
      g += `<polygon points="${pp(P(0, 0, z + 1), P(n, 0, z + 1), P(n, n, z + 1), P(0, n, z + 1))}" style="fill:color-mix(in srgb,${UC} 45%,#fff)" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`;
      if (n > 1) for (let i = 1; i < n; i++) {
        const w = n > 4 ? .5 : 1;
        g += `<line x1="${r1(P(i, 0, z)[0])}" y1="${r1(P(i, 0, z)[1])}" x2="${r1(P(i, 0, z + 1)[0])}" y2="${r1(P(i, 0, z + 1)[1])}" stroke="${INK}" stroke-width="${w}"/><line x1="${r1(P(0, i, z)[0])}" y1="${r1(P(0, i, z)[1])}" x2="${r1(P(0, i, z + 1)[0])}" y2="${r1(P(0, i, z + 1)[1])}" stroke="${INK}" stroke-width="${w}"/>`;
        g += `<line x1="${r1(P(i, 0, z + 1)[0])}" y1="${r1(P(i, 0, z + 1)[1])}" x2="${r1(P(i, n, z + 1)[0])}" y2="${r1(P(i, n, z + 1)[1])}" stroke="${INK}" stroke-width="${w}"/><line x1="${r1(P(0, i, z + 1)[0])}" y1="${r1(P(0, i, z + 1)[1])}" x2="${r1(P(n, i, z + 1)[0])}" y2="${r1(P(n, i, z + 1)[1])}" stroke="${INK}" stroke-width="${w}"/>`;
      }
      s += `<g ${tt(t, 'a-move', `--fx:0px;--fy:-${r1(u * 1.5)}px`)}>${g}</g>`;
    }
    return s;
  };
  // fitxes d'un factor (base b)
  const fch = (x, y, b, t, col = 'u', w = 22, cls = 'a-pop', extra = '') => `<g${t == null ? '' : ' ' + tt(t, cls, extra)}><rect x="${r1(x - w / 2)}" y="${r1(y - 13)}" width="${w}" height="24" rx="6" fill="${col === 'y' ? YEL : col === 'w' ? '#fff' : UC}" stroke="${col === 'w' ? UC : 'none'}" stroke-width="2"/>${M(x, y + 5, String(b), { fs: 14, fill: col === 'u' ? '#fff' : INK })}</g>`;
  A.fch = fch;
  Object.assign(SCN, {
    // quadrats i cubs dibuixats de debò
    ePowShapes({ items }) {
      let s = '', x = 14; const at = [], H = 176;
      items.forEach(o => {
        if (o.sq) {
          const n = o.sq, c = Math.min(13, 66 / n), w = n * c, y0 = 128 - w;
          for (let r = 0; r < n; r++) s += `<rect x="${r1(x)}" y="${r1(y0 + r * c)}" width="${r1(w)}" height="${r1(c)}" fill="${UC}" fill-opacity=".8" ${tt(o.t + .18 * r, 'a-grow')}/>`;
          let gl = ''; for (let i = 1; i < n; i++) gl += `<line x1="${r1(x + i * c)}" x2="${r1(x + i * c)}" y1="${r1(y0)}" y2="128" stroke="#fff" stroke-width="1.2"/><line y1="${r1(y0 + i * c)}" y2="${r1(y0 + i * c)}" x1="${r1(x)}" x2="${r1(x + w)}" stroke="#fff" stroke-width="1.2"/>`;
          s += `<g ${tt(o.t + .18 * n, 'a-fade')}>${gl}</g><rect x="${r1(x)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(w)}" fill="none" stroke="${INK}" stroke-width="2" ${tt(o.t, 'a-fade')}/>`;
          s += M(x + w / 2, y0 - 7, String(n), { fs: 12, wt: 7, fill: GRY, t: o.t }) + M(x - 7, y0 + w / 2 + 4, String(n), { fs: 12, wt: 7, fill: GRY, t: o.t, a: 'e' });
          s += chip(x + w / 2, 160, o.lab, o.t + .2 + .18 * n, { fs: 14, st: 'y' });
          at.push(o.t + .3 + .18 * n); x += w + 36;
        } else {
          const n = o.cube, u = Math.min(20, 44 / n), c = Math.cos(Math.PI / 6), wid = 2 * n * c * u, dt = Math.min(.4, 1.2 / n);
          s += cube(x + wid / 2, 132, n, u, o.t, dt);
          s += M(x + wid * .25 - 6, 132 - n * u * .25 + 12, String(n), { fs: 12, wt: 7, fill: GRY, t: o.t + dt * n });
          s += chip(x + wid / 2, 160, o.lab, o.t + dt * n + .2, { fs: 14, st: 'y' });
          at.push(o.t + dt * n + .3); x += wid + 34;
        }
      });
      return { html: A.scene(H, s), at };
    },
    // factors que s'ajunten (producte), es cancel·len (quocient) o es repeteixen (potència d'una potència)
    eFactors({ items, h, at: AT }) {
      let s = ''; const at = [];
      items.forEach(o => {
        const { k, b, m, n, y, t, res, x = 150, lab, w = String(b).length > 1 ? 30 : 22 } = o, g = w + 4;
        if (k === 'mul') {
          const tot = m + n, x0 = x - tot * g / 2, gx = 22;
          for (let i = 0; i < m; i++) s += fch(x0 + i * g + g / 2, y, b, t + .06 * i, 'u', w);
          s += inout(t + .3, t + 1.1, M(x0 + m * g + gx / 2, y + 5, '×', { fs: 16 }));
          const mv = `--fx:${gx}px;--fy:0px;animation-duration:.6s`;
          let bg = ''; for (let i = 0; i < n; i++) bg += `<g ${tt(t + .35 + .06 * i)}>${fch(x0 + (m + i) * g + g / 2, y, b, null, 'y', w)}</g>`;
          bg += M(x0 + (m + n / 2) * g, y - 19, `${b}^${n}`, { fs: 13, fill: '#B98900', t: t + .5 });
          s += `<g ${tt(t + 1.1, 'ae-tr', mv)}>${bg}</g>`;
          s += M(x0 + m * g / 2, y - 19, `${b}^${m}`, { fs: 13, fill: UC, t: t + .2 });
          if (!o.nobr) s += `<g ${tt(t + 1.6, 'a-fade')}><path d="M${r1(x0 + 2)},${y + 16} q0,5 5,5 H${r1(x - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(x0 + tot * g - 7)} q5,0 5,-5" fill="none" stroke="${INK}" stroke-width="2"/></g>` + M(x, y + 42, `${tot} factors`, { fs: 12, wt: 7, fill: GRY, t: t + 1.7 });
          s += M(x0 + tot * g + 12, y + 6, res, { fs: 17, a: 's', t: t + 2 });
          at.push(t + 1.9);
        } else if (k === 'div') {
          const W = Math.max(m, n, 1) * g, x0 = x - W / 2, c = Math.min(m, n);
          const nx = i => x - m * g / 2 + i * g + g / 2, dx = i => x - n * g / 2 + i * g + g / 2;
          for (let i = 0; i < m; i++) s += fch(nx(i), y - 16, b, t + .05 * i, 'u', w);
          if (!m) s += M(x, y - 9, '1', { fs: 17, t });
          s += `<line x1="${r1(x0 - 4)}" x2="${r1(x0 + W + 4)}" y1="${y + 2}" y2="${y + 2}" stroke="${INK}" stroke-width="2.4" stroke-linecap="round" ${tt(t, 'a-fade')}/>`;
          for (let i = 0; i < n; i++) s += fch(dx(i), y + 22, b, t + .25 + .05 * i, 'u', w);
          for (let i = 0; i < c; i++) { const tc = t + .9 + .28 * i; s += line(nx(i) - 9, y - 6, nx(i) + 9, y - 26, tc, { col: RED, w: 3 }) + line(dx(i) - 9, y + 32, dx(i) + 9, y + 12, tc + .08, { col: RED, w: 3 }); }
          if (lab) s += M(x0 - 14, y + 8, lab, { fs: 16, a: 'e', t });
          s += M(x0 + W + 14, y + 8, res, { fs: 17, a: 's', t: t + 1 + .28 * c });
          at.push(t + 1.1 + .28 * c);
        } else if (k === 'pow') {
          const gw = m * g + 14, x0 = x - n * (gw + 8) / 2;
          for (let j = 0; j < n; j++) {
            const gx = x0 + j * (gw + 8), tj = t + .3 * j;
            s += M(gx + 3, y + 7, '(', { fs: 22, t: tj, fill: GRY }) + M(gx + gw - 3, y + 7, ')', { fs: 22, t: tj, fill: GRY });
            for (let i = 0; i < m; i++) s += fch(gx + 7 + i * g + g / 2, y, b, tj + .05 * i, 'u', w);
            s += M(gx + gw / 2, y - 19, `${b}^${m}`, { fs: 13, fill: UC, t: tj + .15 });
          }
          s += `<g ${tt(t + .4 + .3 * n, 'a-fade')}><path d="M${r1(x0 + 2)},${y + 16} q0,5 5,5 H${r1(x0 + n * (gw + 8) / 2 - 9)} q5,0 5,5 q0,-5 5,-5 H${r1(x0 + n * (gw + 8) - 15)} q5,0 5,-5" fill="none" stroke="${INK}" stroke-width="2"/></g>` + M(x0 + n * (gw + 8) / 2 - 4, y + 42, `${n} × ${m} = ${n * m} factors`, { fs: 12, wt: 7, fill: GRY, t: t + .5 + .3 * n });
          s += M(x0 + n * (gw + 8) + 6, y + 6, res, { fs: 17, a: 's', t: t + .8 + .3 * n });
          at.push(t + .9 + .3 * n);
        } else if (k === 'row') { s += mrow({ ...o, fs: o.fs || 17 }).svg; at.push(o.at ?? t + .2); }
      });
      return { html: A.scene(h, s), at: AT || at };
    }
  });
})();

/* ---------- àlgebra: fitxes i balança ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, mrow, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  const TD = { x: [12, 30, 'u'], a: [12, 30, 'u'], b: [12, 21, 'y'], 1: [12, 12, 'k'] };
  const tile = (v, neg, x, yb) => { const [w, h, c] = TD[v], f = neg ? RED : c === 'u' ? UC : c === 'y' ? YEL : '#8E829A'; return `<rect x="${r1(x - w / 2)}" y="${r1(yb - h)}" width="${w}" height="${h}" rx="3" fill="${f}" stroke="${INK}" stroke-width="1.2"/>` + (neg ? `<line x1="${r1(x - 3)}" x2="${r1(x + 3)}" y1="${r1(yb - h / 2)}" y2="${r1(yb - h / 2)}" stroke="#fff" stroke-width="2"/>` : ''); };
  Object.assign(SCN, {
    // termes semblants amb fitxes: les del mateix tipus s'ajunten i un positiu amb un negatiu fan zero
    eTiles({ rows, at }) {
      let s = '';
      rows.forEach(R => {
        const { y, t, tm, terms, groups } = R, sp = 15, gap = 20, tl = [];
        terms.forEach((q, i) => { for (let k = 0; k < q.n; k++) tl.push({ v: q.v, neg: q.neg, term: i }); });
        // posicions inicials: terme a terme
        let w = 0; terms.forEach((q, i) => { w += q.n * sp + (i ? gap : 0); });
        let x = 160 - w / 2 + sp / 2; const tx0 = [];
        terms.forEach((q, i) => { if (i) x += gap; tx0.push(x); tl.filter(u => u.term === i).forEach(u => { u.x0 = x; x += sp; }); x -= sp; x += sp; });
        terms.forEach((q, i) => { const xs = tl.filter(u => u.term === i).map(u => u.x0); s += A.inout(t + .15 * i, tm, M((xs[0] + xs[xs.length - 1]) / 2, y + 18, q.lab, { fs: 14 }), 'a-fade'); });
        // posicions finals: per grups, i les parelles que s'anul·len al final del grup
        let W = 0; groups.forEach((g, i) => { W += tl.filter(u => u.v === g.v).length * sp + (i ? gap + 6 : 0); });
        x = 160 - W / 2 + sp / 2; const zeros = [];
        groups.forEach((g, gi) => {
          if (gi) x += gap + 6;
          const pos = tl.filter(u => u.v === g.v && !u.neg), neg = tl.filter(u => u.v === g.v && u.neg), c = Math.min(pos.length, neg.length);
          const surv = pos.slice(0, pos.length - c).concat(neg.slice(c)), xs = x;
          surv.forEach(u => { u.x1 = x; x += sp; });
          const xe = x - sp;
          for (let k = 0; k < c; k++) { const p = pos[pos.length - c + k], q = neg[k]; p.x1 = x; x += sp; q.x1 = x; x += sp; p.z = q.z = 1; zeros.push(x - sp * 1.5); }
          s += M(surv.length ? (xs + xe) / 2 : xs, y + 18, g.lab, { fs: 15, fill: UC, t: tm + 1.3 });
        });
        tl.forEach((u, i) => {
          const body = `<g ${tt(t + .15 * u.term + .03 * i)}>${tile(u.v, u.neg, u.x1, y)}</g>`;
          const mv = `<g ${tt(tm, 'ae-tr', `--fx:${r1(u.x0 - u.x1)}px;--fy:0px;animation-duration:.8s`)}>${body}</g>`;
          s += u.z ? out(tm + 1.3, mv) : mv;
        });
        zeros.forEach(zx => { s += A.inout(tm + .95, tm + 1.9, chip(zx, y - 36, '0', null, { fs: 12, st: 'r' }), 'a-pop'); });
        if (R.lab) s += M(20, y - 6, R.lab, { fs: 13, wt: 7, fill: GRY, a: 's', t });
      });
      return { html: A.scene(rows[rows.length - 1].y + 30, s), at };
    },
    // balança: el que fas a un costat ho fas a l'altre
    eBalance({ phases, at, h = 204 }) {
      let s = '';
      const PY = 150, cxs = [82, 238];
      // estructura fixa de la balança
      s += `<g ${tt(.05, 'a-fade')}><path d="M160,${PY + 6} L142,${PY + 44} H178 Z" fill="${INK}"/><rect x="118" y="${PY + 42}" width="84" height="7" rx="3.5" fill="${INK}"/><rect x="24" y="${PY + 2}" width="272" height="7" rx="3.5" fill="${INK}"/>`;
      cxs.forEach(cx => { s += `<rect x="${cx - 3}" y="${PY - 4}" width="6" height="8" fill="${INK}"/><rect x="${cx - 66}" y="${PY - 7}" width="132" height="6" rx="3" fill="${GRY}"/>`; });
      s += `<circle cx="160" cy="${PY + 22}" r="9" fill="#fff"/>` + M(160, PY + 27, '=', { fs: 15 }) + '</g>';
      const XS = 27, XP = 30, US = 14, UP = 16.5, UR = 7;
      const lay = (side, cx) => {
        const B = [], xs = side.x || 0, us = side.u || 0, ns = side.n || 0, xr = Math.ceil(xs / 4);
        for (let i = 0; i < xs; i++) { const r = Math.floor(i / 4), c = i % 4, inr = Math.min(4, xs - r * 4); B.push({ k: 'x', x: cx + (c - (inr - 1) / 2) * XP, y: PY - 7 - r * XP - XS, w: XS, h: XS }); }
        const base = PY - 7 - xr * XP; let i = 0;
        const at = () => { const r = Math.floor(i / UR), c = i % UR; i++; return { x: cx + (c - (UR - 1) / 2) * UP, y: base - r * UP - US, w: US, h: US }; };
        for (let j = 0; j < us; j++) B.push({ k: 'u', ...at() }); for (let j = 0; j < ns; j++) B.push({ k: 'n', ...at() });
        B.next = at;
        return B;
      };
      const blk = (b, xv) => b.k === 'x' ? `<rect x="${r1(b.x - XS / 2)}" y="${r1(b.y)}" width="${XS}" height="${XS}" rx="6" fill="${UC}" stroke="${INK}" stroke-width="1.4"/>` + M(b.x, b.y + XS * .7, xv ?? 'x', { fs: xv ? 15 : 17, fill: '#fff' })
        : `<rect x="${r1(b.x - US / 2)}" y="${r1(b.y)}" width="${US}" height="${US}" rx="3" fill="${b.k === 'n' ? RED : YEL}" stroke="${INK}" stroke-width="1.2"/>` + (b.k === 'n' ? `<line x1="${r1(b.x - 4)}" x2="${r1(b.x + 4)}" y1="${r1(b.y + US / 2)}" y2="${r1(b.y + US / 2)}" stroke="#fff" stroke-width="2"/>` : '');
      const cross = b => `<path d="M${r1(b.x - b.w / 2 - 1)},${r1(b.y - 1)} L${r1(b.x + b.w / 2 + 1)},${r1(b.y + b.h + 1)} M${r1(b.x + b.w / 2 + 1)},${r1(b.y - 1)} L${r1(b.x - b.w / 2 - 1)},${r1(b.y + b.h + 1)}" stroke="${RED}" stroke-width="2.4" stroke-linecap="round"/>`;
      phases.forEach(P => {
        const { t0, dur = 1.5, states, steps = [], eqs, end, xv } = P;
        let ph = '';
        states.forEach((st, i) => {
          const T0 = t0 + i * dur, T1 = i < states.length - 1 ? t0 + (i + 1) * dur : null, tm = T0 + .55, step = steps[i];
          let g = '';
          [st.L, st.R].forEach((side, si) => {
            const B = lay(side, cxs[si]); let marks = '';
            const last = (k, n) => B.filter(b => b.k === k).slice(-n);
            B.forEach(b => { g += blk(b, i === states.length - 1 && xv != null ? nf(xv) : null); });
            if (step && step.op === 'rm') { (step.u ? last('u', step.u) : []).concat(step.x ? last('x', step.x) : []).forEach(b => { marks += cross(b); }); }
            if (step && step.op === 'add') {
              const nb = []; for (let j = 0; j < step.u; j++) nb.push({ k: 'u', ...B.next() });
              const negs = B.filter(b => b.k === 'n'), c = Math.min(negs.length, step.u);
              marks += nb.map(b => blk(b) + `<rect x="${r1(b.x - US / 2 - 1)}" y="${r1(b.y - 1)}" width="${US + 2}" height="${US + 2}" rx="3" fill="none" stroke="${GRN}" stroke-width="2"/>`).join('');
              if (c) marks += `<g ${tt(tm + .45, 'a-fade')}>${negs.slice(0, c).concat(nb.slice(0, c)).map(cross).join('')}</g>`;
            }
            if (step && step.op === 'div') {
              const xs = B.filter(b => b.k === 'x'), us = B.filter(b => b.k === 'u');
              xs.slice(xs.length / step.d).concat(us.slice(us.length / step.d)).forEach(b => { marks += `<rect x="${r1(b.x - b.w / 2 - 1)}" y="${r1(b.y - 1)}" width="${b.w + 2}" height="${b.h + 2}" rx="3" fill="#fff" opacity=".78"/>`; });
            }
            if (marks) g += `<g ${tt(tm, 'a-fade')}>${marks}</g>`;
          });
          if (eqs && eqs[i]) g += A.M(160, 28, eqs[i], { fs: 20 });
          if (step && step.lab) g += chip(160, 56, step.lab, T0 + .35, { fs: 13, st: step.op === 'add' ? 'g' : step.op === 'div' ? 'f' : step.op === 'none' ? 'y' : 'R' });
          const Ti = i ? T0 + .25 : T0;
          ph += T1 == null ? `<g ${tt(Ti, 'a-fade')}>${g}</g>` : inout(Ti, T1, g);
        });
        s += end != null ? out(end, ph) : ph;
      });
      return { html: A.scene(h, s), at };
    }
  });
})();

/* ---------- percentatges i proporcionalitat ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  const bar = (x, y, w, h, fill, t, cls = 'a-grow', st = '') => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(Math.max(0, w))}" height="${h}" rx="5" fill="${fill}"${t == null ? '' : ' ' + tt(t, cls, st)}/>`;
  Object.assign(SCN, {
    // barres de percentatge a la mateixa escala: part d'un total, augment, descompte i percentatge invers
    ePct({ max, items, h, at, x0 = 22, W = 250 }) {
      let s = ''; const S = v => v / max * W;
      items.forEach(o => {
        const { k, y, t, u = ' €', bh = 26 } = o;
        if (k === 'part') {
          const w = S(o.total), n = 10, pw = w / n, sel = o.pct / 10;
          s += bar(x0, y, w, bh, '#fff', t, 'a-fade') + `<rect x="${x0}" y="${y}" width="${r1(w)}" height="${bh}" rx="5" fill="none" stroke="${INK}" stroke-width="2" ${tt(t, 'a-fade')}/>`;
          s += M(x0 + w + 6, y + bh / 2 + 5, nf(o.total) + u, { fs: 14, a: 's', t });
          for (let i = 1; i < n; i++) s += `<line x1="${r1(x0 + i * pw)}" x2="${r1(x0 + i * pw)}" y1="${y}" y2="${y + bh}" stroke="${INK}" stroke-width="1.3" ${tt(t + .5 + .04 * i, 'a-fade')}/>`;
          s += M(x0 + pw / 2, y - 6, '10 %', { fs: 10.5, wt: 7, fill: GRY, t: t + .8 });
          for (let i = 0; i < sel; i++) s += `<rect x="${r1(x0 + i * pw + 1.5)}" y="${y + 1.5}" width="${r1(pw - 3)}" height="${bh - 3}" rx="3" fill="${UC}" ${tt(t + 1.1 + .2 * i)}/>`;
          s += `<g ${tt(t + 1.2 + .2 * sel, 'a-fade')}><path d="M${x0 + 1},${y + bh + 3} q0,5 5,5 H${r1(x0 + sel * pw / 2 - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(x0 + sel * pw - 6)} q5,0 5,-5" fill="none" stroke="${UC}" stroke-width="2"/></g>`;
          s += chip(Math.max(x0 + sel * pw / 2, x0 + 44), y + bh + 30, `${o.pct} % = {u|${nf(o.res)}${u}}`, t + 1.35 + .2 * sel, { fs: 13 });
        } else if (k === 'up' || k === 'down') {
          const wb = S(o.base), wd = S(o.base * o.pct / 100), up = k === 'up', fin = up ? o.base * (1 + o.pct / 100) : o.base * (1 - o.pct / 100);
          s += bar(x0, y, wb, bh, UC, t) + M(x0 + 8, y + bh / 2 + 5, nf(o.base) + u, { fs: 13, fill: '#fff', a: 's', t: t + .3 });
          if (o.lab) s += M(x0, y - 22, o.lab, { fs: 11.5, wt: 7, fill: GRY, a: 's', t });
          if (up) s += bar(x0 + wb, y, wd, bh, YEL, t + .9) + M(x0 + wb + wd / 2, y - 6, `+${o.pct} %`, { fs: 12, fill: '#B98900', t: t + 1 });
          else s += `<g ${tt(t + .9, 'a-fade')}><rect x="${r1(x0 + wb - wd)}" y="${y}" width="${r1(wd)}" height="${bh}" rx="5" fill="#fff" opacity=".85"/><path d="M${r1(x0 + wb - wd)},${y} l${r1(wd)},${bh} M${r1(x0 + wb)},${y} l${r1(-wd)},${bh}" stroke="${RED}" stroke-width="2.2"/></g>` + M(x0 + wb - wd / 2, y - 6, `−${o.pct} %`, { fs: 12, fill: RED, t: t + 1 });
          s += M(x0 + (up ? wb + wd : wb) + 8, y + bh / 2 + 5, `= {u|${nf(fin, o.dec)}${u}}`, { fs: 15, a: 's', t: t + 1.4 });
          if (o.idx) s += M(x0 + (up ? wb + wd : wb) + 8, y + bh + 14, o.idx, { fs: 11, wt: 7, fill: GRY, a: 's', t: t + 1.6 });
        } else if (k === 'rev') {
          // coneixem el final (p % de l'original): el partim en p parts de 1 % ... de 10 en 10 i hi afegim el que falta
          const orig = o.fin / (o.pct / 100), wo = S(orig), wf = S(o.fin), n = 20, pw = wo / n, kf = Math.round(o.pct / 5);
          s += bar(x0, y, wf, bh, UC, t) + M(x0 + 8, y + bh / 2 + 5, `${nf(o.fin)}${u} = ${o.pct} %`, { fs: 12.5, fill: '#fff', a: 's', t: t + .3 });
          for (let i = 1; i < kf; i++) s += `<line x1="${r1(x0 + i * pw)}" x2="${r1(x0 + i * pw)}" y1="${y + bh - 6}" y2="${y + bh}" stroke="#fff" stroke-width="1.2" ${tt(t + .6, 'a-fade')}/>`;
          s += `<rect x="${r1(x0 + wf)}" y="${y}" width="${r1(wo - wf)}" height="${bh}" rx="5" fill="#fff" stroke="${UC}" stroke-width="2" stroke-dasharray="4 3" ${tt(t + 1.1, 'a-grow')}/>` + M(x0 + wf + (wo - wf) / 2, y + bh / 2 + 5, `${100 - o.pct} %`, { fs: 11, wt: 7, fill: UC, t: t + 1.3 });
          s += `<g ${tt(t + 1.8, 'a-fade')}><path d="M${x0 + 1},${y + bh + 3} q0,5 5,5 H${r1(x0 + wo / 2 - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(x0 + wo - 6)} q5,0 5,-5" fill="none" stroke="${INK}" stroke-width="2"/></g>`;
          s += chip(x0 + wo / 2, y + bh + 30, `100 % = ${nf(o.fin)} ÷ ${nf(o.pct / 100, 2)} = {u|${nf(orig)}${u}}`, t + 2, { fs: 13 });
        } else if (k === 'row') s += A.mrow({ fs: 15, ...o }).svg;
        else if (k === 'svg') s += o.s;
      });
      return { html: A.scene(h, s), at };
    },
    // repartiment proporcional: el total es parteix en parts iguals i cadascú en rep les seves
    eShare({ total, parts, u = ' €', at, names }) {
      const P = parts.reduce((a, b) => a + b, 0), x0 = 20, W = 280, pw = W / P, cols = [UC, YEL, '#5FC98B', '#FF8FB1'], y = 64, bh = 34, un = total / P;
      let s = chip(160, 24, `${nf(total)}${u}`, .15, { fs: 16, st: 'y' });
      s += `<rect x="${x0}" y="${y}" width="${W}" height="${bh}" rx="7" fill="#fff" stroke="${INK}" stroke-width="2.2" ${tt(.35, 'a-fade')}/>`;
      for (let i = 1; i < P; i++) s += `<line x1="${r1(x0 + i * pw)}" x2="${r1(x0 + i * pw)}" y1="${y}" y2="${y + bh}" stroke="${INK}" stroke-width="1.6" ${tt(1 + .05 * i, 'a-fade')}/>`;
      s += M(160, y + bh + 17, `${P} parts iguals`, { fs: 12, wt: 7, fill: GRY, t: 1.1 });
      let k = 0;
      parts.forEach((p, j) => {
        const tj = 1.6 + .45 * j;
        for (let i = 0; i < p; i++, k++) s += `<rect x="${r1(x0 + k * pw + 2)}" y="${y + 2}" width="${r1(pw - 4)}" height="${bh - 4}" rx="4" fill="${cols[j]}" ${tt(tj + .05 * i)}/>` + M(x0 + (k + .5) * pw, y + bh / 2 + 5, nf(un), { fs: P > 12 ? 10 : 12, fill: j === 1 ? INK : '#fff', t: tj + .1 + .05 * i });
      });
      const t2 = 1.6 + .45 * parts.length + .3; k = 0;
      parts.forEach((p, j) => {
        const xa = x0 + k * pw, xb = x0 + (k + p) * pw, m = (xa + xb) / 2, tj = t2 + .4 * j, yb = y + bh + 26;
        s += `<g ${tt(tj, 'a-fade')}><path d="M${r1(xa + 2)},${yb} q0,6 6,6 H${r1(m - 6)} q6,0 6,6 q0,-6 6,-6 H${r1(xb - 8)} q6,0 6,-6" fill="none" stroke="${j === 1 ? '#D9A400' : cols[j]}" stroke-width="2.4"/></g>`;
        s += M(m, yb + 30, `${p} × ${nf(un)}`, { fs: 12, wt: 7, fill: GRY, t: tj + .1 }) + chip(m, yb + 55, nf(p * un) + u, tj + .2, { fs: 14, st: j === 1 ? 'y' : 'o' });
        if (names) s += M(m, yb + 76, names[j], { fs: 11, wt: 7, fill: GRY, t: tj + .2 });
        k += p;
      });
      return { html: A.scene(names ? 224 : 208, s), at };
    },
    // proporcionalitat directa amb entrades: el preu d'una i després el de les que vulguis
    eUnitRate({ n1, v1, n2, u = ' €' }) {
      const one = v1 / n1, tk = (x, y, t) => `<g ${tt(t)}><path d="M${x - 15},${y - 10} h30 v6 a4,4 0 0 0 0,8 v6 h-30 v-6 a4,4 0 0 0 0,-8 Z" fill="${UC}" stroke="${INK}" stroke-width="1.4"/><path d="M${x - 5},${y - 9} v18" stroke="#fff" stroke-width="1.4" stroke-dasharray="2 2"/><circle cx="${x + 5}" cy="${y}" r="3" fill="#fff"/></g>`;
      let s = ''; const sp = 36, row = (n, y, t) => { let r = ''; const x0 = 118 - (n - 1) * sp / 2; for (let i = 0; i < n; i++) r += tk(x0 + i * sp, y, t + .08 * i); return r; };
      s += row(n1, 30, .2) + M(240, 36, `= {u|${nf(v1)}${u}}`, { fs: 17, a: 's', t: .6 });
      s += A.qarrow(52, 46, 30, 76, 90, 104, 1.2) + M(22, 80, `÷ ${n1}`, { fs: 13, fill: UC, a: 's', t: 1.3 });
      s += row(1, 116, 1.5) + M(240, 122, `= {u|${nf(one, 2)}${u}}`, { fs: 17, a: 's', t: 1.7 });
      s += A.qarrow(96, 132, 40, 150, 30, 182, 2.3) + M(22, 166, `× ${n2}`, { fs: 13, fill: UC, a: 's', t: 2.5 });
      s += row(n2, 196, 2.7) + M(250, 202, `= {y|${nf(n2 * one)}${u}}`, { fs: 17, a: 's', t: 3.3 });
      return { html: A.scene(218, s), at: [.7, 1.8, 3.4] };
    }
  });
})();

/* ---------- pla cartesià genèric (punts, rectes, paràboles, pendents) ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, dot, mark, PL, curve, pt, rline, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1, arrowHead } = A;
  const arw = (x1, y1, x2, y2, t, col = UC) => `<g ${tt(t, 'a-fade')}>${line(x1, y1, x2 - Math.sign(x2 - x1) * 5, y2 - Math.sign(y2 - y1) * 5, null, { col, w: 2.6 })}${arrowHead(x2, y2, Math.atan2(y2 - y1, x2 - x1), 8, col)}</g>`;
  A.planeItems = (P, items) => {
    let s = '';
    items.forEach(o => {
      const t = o.t ?? 0, col = o.col === 'y' ? '#E0A800' : o.col === 'r' ? RED : o.col === 'g' ? GRN : o.col === 'k' ? INK : UC;
      if (o.k === 'pt') {
        if (o.walk) { s += arw(P.X(0), P.Y(0), P.X(o.x), P.Y(0), t - 1, col) + chip((P.X(0) + P.X(o.x)) / 2, P.Y(0) + (o.y < 0 ? -8 : 17), `${Math.abs(o.x)} ${o.x < 0 ? '←' : '→'}`, t - .9, { fs: 10.5, st: 'o' }); s += arw(P.X(o.x), P.Y(0), P.X(o.x), P.Y(o.y), t - .5, col) + chip(P.X(o.x) + (o.x < 0 ? -18 : 18), (P.Y(0) + P.Y(o.y)) / 2 + 4, `${Math.abs(o.y)} ${o.y < 0 ? '↓' : '↑'}`, t - .4, { fs: 10.5, st: 'o' }); }
        s += pt(P, o.x, o.y, t, { col: o.col === 'y' ? '#E0A800' : col, lab: o.lab, lp: o.lp || 'ne', guides: o.guides, open: o.open, st: o.st || 'o', fs: o.fs || 12, r: o.r || 5.5 });
      } else if (o.k === 'quad') {
        const x0 = o.q === 1 || o.q === 4 ? P.X(0) : P.x0, x1 = o.q === 1 || o.q === 4 ? P.x0 + P.W : P.X(0), y0 = o.q <= 2 ? P.y0 : P.Y(0), y1 = o.q <= 2 ? P.Y(0) : P.y0 + P.H;
        const lx = o.q === 1 || o.q === 4 ? x1 - 16 : x0 + 16, ly = o.q <= 2 ? y0 + 17 : y1 - 7;
        s += `<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(x1 - x0)}" height="${r1(y1 - y0)}" fill="${col}" fill-opacity=".14" ${tt(t, 'a-fade')}/>` + (o.lab ? M(lx, ly, o.lab, { fs: 14, fill: col, t }) : '');
      } else if (o.k === 'line') s += rline(P, o.m, o.n, t, { col, dur: o.dur || .8, dash: o.dash, w: o.w || 3 });
      else if (o.k === 'poly') { const [a, b, c] = o.c; s += curve(P, x => a * x * x + b * x + c, t, { col, dur: o.dur || 1.2, from: o.from ?? P.xa, to: o.to ?? P.xb, w: o.w || 3 }); }
      else if (o.k === 'seg') { const [x1, y1, x2, y2] = o.p; s += line(P.X(x1), P.Y(y1), P.X(x2), P.Y(y2), t, { col, w: o.w || 2.4, dash: o.dash }); }
      else if (o.k === 'vline') s += line(P.X(o.x), P.y0, P.X(o.x), P.y0 + P.H, t, { col, w: 2, dash: '5 4' }) + (o.lab ? M(P.X(o.x) + 4, P.y0 + 11, o.lab, { fs: 11, wt: 7, fill: col, a: 's', t }) : '');
      else if (o.k === 'hline') s += line(P.x0, P.Y(o.y), P.x0 + P.W, P.Y(o.y), t, { col, w: 2, dash: '5 4' }) + (o.lab ? M(o.la === 's' ? P.x0 + 3 : P.x0 + P.W - 3, P.Y(o.y) - 5, o.lab, { fs: 11, wt: 7, fill: col, a: o.la || 'e', t }) : '');
      else if (o.k === 'slope') {
        // triangle de pendent: avança run i puja rise (o esglaons d'1 en 1)
        const [x, y] = o.p, { run, rise } = o, st = o.steps ? run : 1;
        for (let i = 0; i < st; i++) {
          const xa = x + i * run / st, ya = y + i * rise / st, xb = xa + run / st, yb = ya + rise / st, ti = t + .5 * i;
          s += line(P.X(xa), P.Y(ya), P.X(xb), P.Y(ya), ti, { col: '#E0A800', w: 2.6 }) + line(P.X(xb), P.Y(ya), P.X(xb), P.Y(yb), ti + .22, { col: RED, w: 2.6 });
          if (o.steps) s += M((P.X(xa) + P.X(xb)) / 2, P.Y(ya) + 12, '1', { fs: 10, wt: 7, fill: '#B98900', t: ti }) + M(P.X(xb) + 4, (P.Y(ya) + P.Y(yb)) / 2 + 4, (rise / st > 0 ? '+' : '') + nf(rise / st), { fs: 10.5, wt: 8, fill: RED, a: 's', t: ti + .22 });
        }
        if (!o.steps) s += M((P.X(x) + P.X(x + run)) / 2, P.Y(y) + (rise > 0 ? 14 : -6), (o.rl || nf(run)), { fs: 12, fill: '#B98900', t }) + M(P.X(x + run) + 5, (P.Y(y) + P.Y(y + rise)) / 2 + 4, (o.ul || nf(rise)), { fs: 12, fill: RED, a: 's', t: t + .22 });
      }
      else if (o.k === 'chip') s += chip(P.X(o.x) + (o.dx || 0), P.Y(o.y) + (o.dy || 0), o.s, t, { fs: o.fs || 12.5, st: o.st || 'o' });
      else if (o.k === 'mark') s += mark(P.X(o.x) + (o.dx || 0), P.Y(o.y) + (o.dy || 0), o.ok, t, 9);
      else if (o.k === 'm') s += M(o.px, o.py, o.s, { fs: o.fs || 15, a: o.a || 'm', t, fill: o.fill || INK });
      else if (o.k === 'cm') s += chip(o.px, o.py, o.s, t, { fs: o.fs || 13, st: o.st || 'o' });
      else if (o.k === 'mk') s += mark(o.px, o.py, o.ok, t, o.sz || 10);
      else if (o.k === 'svg') s += o.s;
      else if (o.k === 'blk') s += A.blk(o.b, []);
      else if (o.k === 'table') {
        const { px, py, head, rows, dt = .35, cw = 40, rh = 25 } = o;
        s += `<g ${tt(t, 'a-fade')}><rect x="${px}" y="${py}" width="${cw * 2}" height="${rh * (rows.length + 1)}" rx="8" fill="#fff" stroke="${LN}" stroke-width="2"/><line x1="${px + cw}" x2="${px + cw}" y1="${py}" y2="${py + rh * (rows.length + 1)}" stroke="${LN}" stroke-width="2"/><line x1="${px}" x2="${px + 2 * cw}" y1="${py + rh}" y2="${py + rh}" stroke="${LN}" stroke-width="2"/>${M(px + cw / 2, py + rh - 8, head[0], { fs: 13, fill: GRY })}${M(px + cw * 1.5, py + rh - 8, head[1], { fs: 13, fill: GRY })}</g>`;
        const cs = v => typeof v === 'number' ? A.sg(v) : v;
        rows.forEach(([a, b, rv, tr], i) => { const yy = py + rh * (i + 2) - 8, bv = M(px + cw * 1.5, yy, `{u|${cs(b)}}`, { fs: 14 }); s += M(px + cw / 2, yy, cs(a), { fs: 14, t: t + .15 + dt * i }) + (rv != null ? A.inout(t + .3 + dt * i, tr, bv, 'a-pop') + M(px + cw * 1.5, yy, `{y|${cs(rv)}}`, { fs: 14, t: tr }) : `<g ${tt(t + .3 + dt * i)}>${bv}</g>`); });
      }
    });
    return s;
  };
  Object.assign(SCN, {
    ePlane(c) {
      const P = PL({ x0: 40, y0: 14, u: 18, t: .05, fs: 10, ...c }); let s = P.s + A.planeItems(P, c.items);
      if (c.rows) { const reg = []; c.rows.forEach(r => { s += A.mrow({ fs: 15, ...r }, reg).svg; }); }
      return { html: A.scene(c.h, s), at: c.at };
    }
  });
})();

/* ---------- geometria plana ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, dot, trm, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  const rad = d => d * Math.PI / 180, P = (V, r, a) => [V[0] + r * Math.cos(rad(a)), V[1] - r * Math.sin(rad(a))];
  const wedge = (V, r, s0, d, fill) => { const p = P(V, r, s0), q = P(V, r, s0 + d); return `<path d="M${r1(V[0])},${r1(V[1])} L${r1(p[0])},${r1(p[1])} A${r},${r} 0 ${d > 180 ? 1 : 0} 0 ${r1(q[0])},${r1(q[1])} Z" fill="${fill}" stroke="${INK}" stroke-width="1.4"/>`; };
  A.wedge = wedge; A.polar = P;
  Object.assign(SCN, {
    // els tres angles d'un triangle s'arrenquen i fan un angle pla (180°)
    eTriAngles({ a, b }) {
      const c = 180 - a - b, L = 140, V0 = [28, 150], V1 = [28 + L, 150], ac = L * Math.sin(rad(b)) / Math.sin(rad(c)), V2 = P(V0, ac, a), Q = [252, 150], R = 26;
      const W = [[V0, 0, a, UC, a + '°', 180 - a], [V1, 180 - b, b, YEL, b + '°', 0], [V2, 180 + a, c, RED, '?', b]];
      let s = `<polygon points="${[V0, V1, V2].map(v => v.map(r1).join(',')).join(' ')}" fill="#fff" stroke="${INK}" stroke-width="3" stroke-linejoin="round" ${tt(.15, 'a-fade')}/>`;
      W.forEach(([V, s0, d, col, lab], i) => {
        const tw = i < 2 ? .5 + .3 * i : 1.1, m = P(V, R + 16, s0 + d / 2);
        s += `<g ${tt(tw, 'a-fade')}>${wedge(V, R, s0, d, col)}</g>`;
        s += i < 2 ? M(m[0], m[1] + 5, lab, { fs: 14, t: tw + .1 }) : A.inout(tw, 3.0, M(m[0], m[1] + 5, '?', { fs: 15, fill: RED })) + M(m[0], m[1] + 5, c + '°', { fs: 14, fill: RED, t: 3.0 });
      });
      // còpies que viatgen fins a la recta
      s += line(Q[0] - 46, Q[1], Q[0] + 46, Q[1], 1.6, { w: 3 });
      W.forEach(([V, s0, d, col], i) => { s += `<g ${tt(i < 2 ? .5 + .3 * i : 1.1, 'a-fade')}>${trm(wedge(Q, R, W[i][5], d, col), 1.9 + .35 * i, V[0] - Q[0], V[1] - Q[1], W[i][5] - s0, Q[0], Q[1], 1)}</g>`; });
      s += `<path d="M${Q[0] - R - 8},${Q[1]} A${R + 8},${R + 8} 0 0 1 ${Q[0] + R + 8},${Q[1]}" fill="none" stroke="${INK}" stroke-width="1.6" stroke-dasharray="3 3" ${tt(3.1, 'a-fade')}/>` + chip(Q[0], Q[1] - R - 20, '180°', 3.1, { fs: 13, st: 'y' });
      s += M(Q[0], Q[1] + 22, `${a}° + ${b}° + {r|${c}°}`, { fs: 12, t: 3.3 });
      const all = s;
      // equilàter
      const E0 = [100, 172], E1 = [220, 172], E2 = P(E0, 120, 60);
      let e = `<polygon points="${[E0, E1, E2].map(v => v.map(r1).join(',')).join(' ')}" fill="#fff" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
      [[E0, 0], [E1, 120], [E2, 240]].forEach(([V, s0], i) => { e += wedge(V, 22, s0, 60, [UC, YEL, RED][i]); const m = P(V, 40, s0 + 30); e += M(m[0], m[1] + 5, '60°', { fs: 13 }); });
      e += chip(260, 70, '180° ÷ 3', null, { fs: 13, st: 'y' });
      return { html: A.scene(186, out(4.2, all) + `<g ${tt(4.4, 'a-fade')}>${e}</g>`), at: [1.1, 3.2, 4.7] };
    },
    // àrees sobre quadrícula: el triangle és mig rectangle i dos trapezis fan un paral·lelogram
    eAreaPoly({ tri: [b, h], trap: [B, bb, th], u = 11 }) {
      const O1 = [50, 112], O2 = [50 + (b + 2.5) * u, 112], p1 = (x, y) => [O1[0] + x * u, O1[1] - y * u], p2 = (x, y) => [O2[0] + x * u, O2[1] - y * u];
      const poly = (pts, f, st = INK, extra = '') => `<polygon points="${pts.map(v => v.map(r1).join(',')).join(' ')}" fill="${f}" stroke="${st}" stroke-width="2.4" stroke-linejoin="round"${extra}/>`;
      const grid = (p, w, hh, t) => { let g = ''; for (let i = 0; i <= w; i++) g += `<line x1="${r1(p(i, 0)[0])}" x2="${r1(p(i, hh)[0])}" y1="${r1(p(i, 0)[1])}" y2="${r1(p(i, hh)[1])}" stroke="${LN}" stroke-width="1"/>`; for (let j = 0; j <= hh; j++) g += `<line x1="${r1(p(0, j)[0])}" x2="${r1(p(w, j)[0])}" y1="${r1(p(0, j)[1])}" y2="${r1(p(w, j)[1])}" stroke="${LN}" stroke-width="1"/>`; return `<g ${tt(t, 'a-fade')}>${g}</g>`; };
      let s = grid(p1, b, h, .05);
      // triangle: mig rectangle b × h
      s += `<g ${tt(.2, 'a-fade')}>${poly([p1(0, 0), p1(b, 0), p1(0, h)], UC)}</g>`;
      s += `<rect x="${O1[0]}" y="${O1[1] - h * u}" width="${b * u}" height="${h * u}" fill="none" stroke="${INK}" stroke-width="1.8" stroke-dasharray="5 4" ${tt(.6, 'a-fade')}/>`;
      s += M(O1[0] + b * u / 2, O1[1] + 16, `b = ${b}`, { fs: 12, t: .6 }) + M(O1[0] - 5, O1[1] - h * u / 2 + 4, `h = ${h}`, { fs: 12, t: .6, a: 'e' });
      const mc = p1(b / 2, h / 2);
      s += trm(poly([p1(b, h), p1(0, h), p1(b, 0)], YEL, INK, ' fill-opacity=".85"'), 1.3, 0, 0, 180, mc[0], mc[1], 1);
      s += chip(O1[0] + b * u / 2, O1[1] + 42, `A = {u|${nf(b * h / 2)}} cm²`, 2.2, { fs: 13 });
      // trapezi: amb una còpia girada fa un paral·lelogram de base B + b
      const d = (B - bb) / 2, W = B + bb + d * 0;
      s += grid(p2, B + bb + (B - bb) / 2 * 0 + d, th, 2.6);
      s += `<g ${tt(2.8, 'a-fade')}>${poly([p2(0, 0), p2(B, 0), p2(d + bb, th), p2(d, th)], UC)}</g>`;
      s += M(O2[0] + B * u / 2, O2[1] + 16, `B = ${B}`, { fs: 12, t: 3.0 }) + M(O2[0] + (d + bb / 2) * u, O2[1] - th * u - 6, `b = ${bb}`, { fs: 12, t: 3.0 });
      s += line(O2[0] + d * u, O2[1], O2[0] + d * u, O2[1] - th * u, 3.0, { col: RED, w: 2, dash: '4 3' }) + M(O2[0] + d * u + 4, O2[1] - th * u / 2 + 4, `h = ${th}`, { fs: 11.5, a: 's', fill: RED, t: 3.1 });
      const mt = p2((B + d + bb) / 2, th / 2);
      s += trm(poly([p2(B + d + bb, th), p2(d + bb, th), p2(B, 0), p2(B + bb, 0)], YEL, INK, ' fill-opacity=".85"'), 3.6, 0, 0, 180, mt[0], mt[1], 1);
      s += M(O2[0] + (B + bb) * u / 2, O2[1] + 30, `${B} + ${bb} = ${B + bb}`, { fs: 12, fill: '#B98900', t: 4.4 });
      s += chip(O2[0] + (B + bb) * u / 2 + 6, O2[1] + 54, `A = {u|${nf((B + bb) * th / 2)}} cm²`, 4.8, { fs: 13 });
      void W;
      return { html: A.scene(180, s), at: [.8, 2.3, 3.2, 4.9] };
    },
    // circumferència que roda (L = 2πr) i àrea com a π quadrats de costat r
    eCircle({ r1: ra, r2: rb }) {
      const s1 = 7, R = ra * s1, C = 2 * Math.PI * R, cx0 = 40, cy = 16 + R, by = cy + R, cx1 = cx0 + C;
      let p1 = `<line x1="${cx0 - 10}" x2="${r1(cx1 + 12)}" y1="${r1(by)}" y2="${r1(by)}" stroke="${LN}" stroke-width="2"/>`;
      p1 += `<line x1="${cx0}" x2="${r1(cx1)}" y1="${r1(by)}" y2="${r1(by)}" stroke="${UC}" stroke-width="4" stroke-linecap="round" pathLength="1" ${tt(.8, 'a-draw ae-lin', 'animation-duration:1.8s;animation-timing-function:linear')}/>`;
      const wheel = `<circle cx="${r1(cx1)}" cy="${r1(cy)}" r="${R}" fill="#fff" stroke="${INK}" stroke-width="3"/><line x1="${r1(cx1)}" y1="${r1(cy)}" x2="${r1(cx1 + R)}" y2="${r1(cy)}" stroke="${INK}" stroke-width="2"/>${M(cx1 + R / 2, cy - 5, `r = ${ra}`, { fs: 11 })}<circle cx="${r1(cx1)}" cy="${r1(by)}" r="5" fill="${RED}"/>`;
      p1 += `<g ${tt(.1, 'a-fade')}><g class="an ae-tr" style="--t:.80s;--fx:${r1(-C)}px;--fy:0px;--r:-360deg;transform-origin:${r1(cx1)}px ${r1(cy)}px;animation-duration:1.8s;animation-timing-function:linear">${wheel}</g></g>`;
      p1 += M((cx0 + cx1) / 2, by + 20, `L = 2 × 3,14 × ${ra} = {u|${nf(2 * 3.14 * ra)} cm}`, { fs: 13, t: 2.7 });
      // àrea
      const s2 = 15, Rb = rb * s2, cx = 24 + Rb, cy2 = 132, sq = (x, y, t, f = UC, k = 1) => `<g ${tt(t)}><rect x="${r1(x)}" y="${r1(y)}" width="${r1(Rb * k)}" height="${r1(Rb)}" fill="${f}" fill-opacity=".75" stroke="${INK}" stroke-width="1.5"/>${k === 1 ? Array.from({ length: rb - 1 }, (_, i) => `<line x1="${r1(x + (i + 1) * s2)}" x2="${r1(x + (i + 1) * s2)}" y1="${r1(y)}" y2="${r1(y + Rb)}" stroke="#fff" stroke-width="1"/><line y1="${r1(y + (i + 1) * s2)}" y2="${r1(y + (i + 1) * s2)}" x1="${r1(x)}" x2="${r1(x + Rb)}" stroke="#fff" stroke-width="1"/>`).join('') : ''}</g>`;
      let p2 = `<circle cx="${r1(cx)}" cy="${cy2}" r="${Rb}" fill="${UC}" fill-opacity=".18" stroke="${INK}" stroke-width="3" ${tt(3.6, 'a-fade')}/>` + line(cx, cy2, cx + Rb, cy2, 3.8, { w: 2 }) + M(cx + Rb / 2, cy2 + 14, `r = ${rb}`, { fs: 11, t: 3.9 });
      p2 += sq(cx, cy2 - Rb, 4.2) + M(cx + Rb / 2, cy2 - Rb / 2 + 5, 'r²', { fs: 13, fill: '#fff', t: 4.3 });
      const x0 = cx + Rb + 22;
      for (let i = 0; i < 3; i++) p2 += sq(x0 + i * (Rb + 6), cy2 - Rb, 4.8 + .25 * i) + M(x0 + i * (Rb + 6) + Rb / 2, cy2 - Rb / 2 + 5, String(rb * rb), { fs: 14, fill: '#fff', t: 4.9 + .25 * i });
      p2 += sq(x0 + 3 * (Rb + 6), cy2 - Rb, 5.6, YEL, .14);
      p2 += M(x0 + 1.6 * (Rb + 6), cy2 - Rb - 8, `3,14 vegades r² = 3,14 × ${rb * rb}`, { fs: 11.5, wt: 7, fill: GRY, t: 5 });
      p2 += chip(x0 + 1.6 * (Rb + 6), cy2 + 30, `A = {u|${nf(3.14 * rb * rb, 2)} cm²}`, 5.8, { fs: 14 });
      return { html: A.scene(186, out(3.3, p1) + p2), at: [2.8, 4.9, 6] };
    }
  });
})();

/* ---------- estadística i probabilitat ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, dot, mark, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  Object.assign(SCN, {
    // mitjana: les barres s'anivellen passant blocs de les altes a les baixes
    eMeanLevel({ data, at }) {
      const n = data.length, u = 13, bw = 30, gap = 18, x0 = 160 - (n * bw + (n - 1) * gap) / 2, by = 178, mean = data.reduce((a, b) => a + b, 0) / n;
      const X = i => x0 + i * (bw + gap); let s = '';
      const exc = [], def = [];
      data.forEach((v, i) => { for (let k = mean; k < v; k++) exc.push([i, k]); for (let k = v; k < mean; k++) def.push([i, k]); });
      data.forEach((v, i) => {
        const t = .2 + .15 * i; let g = '';
        for (let k = 0; k < v; k++) if (!exc.some(([a, b]) => a === i && b === k)) g += `<rect x="${X(i)}" y="${by - (k + 1) * u}" width="${bw}" height="${u - 1.5}" rx="2.5" fill="${UC}"/>`;
        s += `<g ${tt(t, 'ae-gy')}>${g}</g>` + M(X(i) + bw / 2, by + 16, String(v), { fs: 14, t });
      });
      exc.forEach(([i, k], j) => { const [di, dk] = def[j], tm = 2.9 + .3 * j; s += `<g ${tt(.2 + .15 * i, 'a-fade')}>${A.trm(`<rect x="${X(di)}" y="${by - (dk + 1) * u}" width="${bw}" height="${u - 1.5}" rx="2.5" fill="${YEL}" stroke="${INK}" stroke-width="1.2"/>`, tm, X(i) - X(di), (dk - k) * u, 0, 0, 0, .7)}</g>`; });
      s += chip(160, 22, `${data.join(' + ')} = {u|${data.reduce((a, b) => a + b, 0)}}`, 1.4, { fs: 13.5 });
      s += line(x0 - 12, by - mean * u, X(n - 1) + bw + 12, by - mean * u, 2.4, { col: RED, w: 2.2, dash: '6 4' }) + chip(X(n - 1) + bw + 12, by - mean * u + 5, nf(mean), 2.5, { fs: 13, st: 'R', a: 's' });
      return { html: A.scene(by + 24, s), at };
    },
    // barres amb la mitjana; després s'ordenen i es marca la mediana
    eBarsStats({ data, max, at, tm = 1.4, ts, tmed, meanLab, medLab, H = 118 }) {
      const n = data.length, bw = Math.min(34, 196 / (n + (n - 1) * .4)), gap = bw * .4, x0 = 30, by = 176, X = i => x0 + i * (bw + gap), Hv = v => v / max * H;
      const ord = data.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]), pos = []; ord.forEach(([, i], j) => { pos[i] = j; });
      const mean = data.reduce((a, b) => a + b, 0) / n, sd = ord.map(q => q[0]), med = n % 2 ? sd[(n - 1) / 2] : (sd[n / 2 - 1] + sd[n / 2]) / 2;
      let s = `<line x1="${x0 - 8}" x2="${X(n - 1) + bw + 8}" y1="${by}" y2="${by}" stroke="${INK}" stroke-width="2" ${tt(.05, 'a-fade')}/>`;
      data.forEach((v, i) => {
        const t = .2 + .12 * i, mid = tmed != null && (n % 2 ? pos[i] === (n - 1) / 2 : pos[i] === n / 2 - 1 || pos[i] === n / 2), xb = ts != null ? X(pos[i]) : X(i);
        let g = `<rect x="${r1(xb)}" y="${r1(by - Hv(v))}" width="${r1(bw)}" height="${r1(Hv(v))}" rx="4" fill="${UC}" ${tt(t, 'ae-gy')}/>` + M(xb + bw / 2, by - Hv(v) - 5, nf(v), { fs: 13, t: t + .2 });
        if (mid) g += `<rect x="${r1(xb - 2)}" y="${r1(by - Hv(v) - 2)}" width="${r1(bw + 4)}" height="${r1(Hv(v) + 2)}" rx="5" fill="none" stroke="${YEL}" stroke-width="4" ${tt(tmed, 'a-fade')}/>`;
        s += ts != null ? `<g ${tt(ts, 'ae-tr', `--fx:${r1(X(i) - X(pos[i]))}px;--fy:0px;animation-duration:.9s`)}>${g}</g>` : g;
      });
      s += line(x0 - 8, by - Hv(mean), X(n - 1) + bw + 8, by - Hv(mean), tm, { col: RED, w: 2.2, dash: '6 4' }) + chip(X(n - 1) + bw + 12, by - Hv(mean) + 5, meanLab || nf(mean, 2), tm + .1, { fs: 12.5, st: 'R', a: 's' });
      if (tmed != null) s += chip(X(n - 1) + bw + 12, by - Hv(med) + 24 + (Math.abs(Hv(med) - Hv(mean)) < 22 ? 12 : 0), medLab || `Me = ${nf(med)}`, tmed + .2, { fs: 12.5, st: 'y', a: 's' });
      return { html: A.scene(by + 8, s), at };
    },
    // cartes que s'ordenen: mediana (la del mig) i moda (la que es repeteix)
    eSortCards({ rows, at }) {
      let s = '';
      rows.forEach(R => {
        const { d, y, t, ts, tm, show, res } = R, n = d.length, cw = 30, sp = 36, x0 = 22, sd = d.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]), pos = []; sd.forEach(([, i], j) => { pos[i] = j; });
        d.forEach((v, i) => {
          const j = ts != null ? pos[i] : i, mid = show === 'med' && (n % 2 ? j === (n - 1) / 2 : j === n / 2 - 1 || j === n / 2), md = show === 'mode' && d.filter(w => w === v).length > 1;
          let g = `<rect x="${x0 + j * sp}" y="${y - 22}" width="${cw}" height="36" rx="7" fill="#fff" stroke="${INK}" stroke-width="2"/>` + M(x0 + j * sp + cw / 2, y + 3, String(v), { fs: 17 });
          if (mid || md) g += `<g ${tt(tm, 'a-fade')}><rect x="${x0 + j * sp}" y="${y - 22}" width="${cw}" height="36" rx="7" fill="${mid ? UC : YEL}" stroke="${INK}" stroke-width="2"/>${M(x0 + j * sp + cw / 2, y + 3, String(v), { fs: 17, fill: mid ? '#fff' : INK })}</g>`;
          g = `<g ${tt(t + .06 * i)}>${g}</g>`;
          s += ts != null ? `<g ${tt(ts, 'ae-tr', `--fx:${(i - j) * sp}px;--fy:0px;animation-duration:.8s`)}>${g}</g>` : g;
        });
        s += chip(x0 + n * sp + 14, y + 3, res, tm + .3, { fs: 14, st: show === 'mode' ? 'y' : 'o', a: 's' });
      });
      return { html: A.scene(rows[rows.length - 1].y + 24, s), at };
    },
    // dau: casos favorables sobre possibles
    eDice({ fav, at }) {
      const pip = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
      const face = (x, y, v, f, pc = INK, sz = 40) => `<rect x="${x - sz / 2}" y="${y - sz / 2}" width="${sz}" height="${sz}" rx="9" fill="${f}" stroke="${INK}" stroke-width="2.2"/>` + pip[v].map(([a, b]) => `<circle cx="${r1(x + a * sz * .26)}" cy="${r1(y + b * sz * .26)}" r="${r1(sz * .085)}" fill="${pc}"/>`).join('');
      let s = ''; const X = v => 160 + (v - 3.5) * 48;
      for (let v = 1; v <= 6; v++) s += `<g ${tt(.15 + .08 * v)}>${face(X(v), 40, v, '#fff')}</g>`;
      fav.forEach((v, i) => { s += `<g ${tt(1.1 + .3 * i)}>${face(X(v), 40, v, UC, '#fff')}</g>`; });
      s += chip(160, 94, `${fav.length} de 6`, 2.1, { fs: 14, st: 'y' });
      const bx = 50, bw = 220; s += `<rect x="${bx}" y="118" width="${bw}" height="26" rx="6" fill="#fff" stroke="${INK}" stroke-width="2" ${tt(2.7, 'a-fade')}/>`;
      for (let i = 1; i < 6; i++) s += `<line x1="${r1(bx + i * bw / 6)}" x2="${r1(bx + i * bw / 6)}" y1="118" y2="144" stroke="${INK}" stroke-width="1.3" ${tt(2.7, 'a-fade')}/>`;
      for (let i = 0; i < fav.length; i++) s += `<rect x="${r1(bx + i * bw / 6 + 1.5)}" y="119.5" width="${r1(bw / 6 - 3)}" height="23" rx="4" fill="${UC}" ${tt(2.9 + .12 * i)}/>`;
      s += `<line x1="160" x2="160" y1="112" y2="150" stroke="${RED}" stroke-width="3" ${tt(3.4, 'a-fade')}/>` + chip(160, 174, `P = [${fav.length}/6] = [1/2] = 50 %`, 3.5, { fs: 14 });
      return { html: A.scene(196, s), at };
    },
    // arbre de dues monedes: 4 casos igual de probables
    eCoinTree({ hl = [], at, legend, res }) {
      const coin = (x, y, c, t) => `<g ${tt(t)}><circle cx="${x}" cy="${y}" r="13" fill="${c === 'C' ? YEL : '#D9CCE6'}" stroke="${INK}" stroke-width="2"/>${M(x, y + 5, c, { fs: 13 })}</g>`;
      let s = '', R = [46, 106]; const x1 = 78, x2 = 136, xl = 176;
      if (legend) s += coin(28, 20, 'C', .1) + M(46, 25, 'cara', { fs: 12, a: 's', wt: 7, fill: GRY, t: .1 }) + coin(98, 20, 'X', .2) + M(116, 25, 'creu', { fs: 12, a: 's', wt: 7, fill: GRY, t: .2 });
      const y0 = legend ? 124 : 100, ys1 = [y0 - 46, y0 + 46], ys2 = [y0 - 69, y0 - 23, y0 + 23, y0 + 69], L = ['CC', 'CX', 'XC', 'XX'];
      s += `<circle cx="24" cy="${y0}" r="6" fill="${INK}" ${tt(.3)}/>`;
      ys1.forEach((y, i) => { s += line(30, y0, x1 - 14, y, .45) + coin(x1, y, 'CX'[i], .7); });
      ys2.forEach((y, j) => { const p = ys1[j >> 1]; s += line(x1 + 14, p, x2 - 14, y, 1 + .1 * j) + coin(x2, y, 'CX'[j % 2], 1.2 + .1 * j); s += `<g ${tt(1.5 + .1 * j)}><rect x="${xl - 4}" y="${y - 13}" width="46" height="26" rx="8" fill="#fff" stroke="${LN}" stroke-width="2"/>${M(xl + 19, y + 5, L[j], { fs: 14 })}</g>`; });
      hl.forEach(({ leaves, t, lab }) => { leaves.forEach(j => { s += `<g ${tt(t)}><rect x="${xl - 4}" y="${ys2[j] - 13}" width="46" height="26" rx="8" fill="${UC}"/>${M(xl + 19, ys2[j] + 5, L[j], { fs: 14, fill: '#fff' })}</g>`; }); if (lab) s += chip(Math.max(xl + 50 + A.chipW(lab, 13) / 2, 250), (ys2[leaves[0]] + ys2[leaves[leaves.length - 1]]) / 2 + 5, lab, t + .3, { fs: 13, st: 'y' }); });
      void R; void res;
      return { html: A.scene(y0 + 88, s), at };
    }
  });
})();

/* ---------- Pitàgores, Tales i cossos geomètrics ---------- */
(() => {
  const A = AE, { M, chip, chipW, rect, tt, inout, out, line, dot, trm, ic, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  const pts = a => a.map(v => v.map(r1).join(',')).join(' ');
  // quadrat sobre un segment p→q (cap a la banda de n), amb quadrícula d'unitats
  const sqOn = (p, q, units, fill, t, cls = 'a-fade') => {
    const dx = q[0] - p[0], dy = q[1] - p[1], nx = -dy, ny = dx, P4 = [p, q, [q[0] + nx, q[1] + ny], [p[0] + nx, p[1] + ny]];
    let g = `<polygon points="${pts(P4)}" fill="${fill}" fill-opacity=".8" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`;
    for (let i = 1; i < units; i++) { const f = i / units; g += `<line x1="${r1(p[0] + dx * f)}" y1="${r1(p[1] + dy * f)}" x2="${r1(p[0] + dx * f + nx)}" y2="${r1(p[1] + dy * f + ny)}" stroke="#fff" stroke-opacity=".6" stroke-width=".8"/><line x1="${r1(p[0] + nx * f)}" y1="${r1(p[1] + ny * f)}" x2="${r1(q[0] + nx * f)}" y2="${r1(q[1] + ny * f)}" stroke="#fff" stroke-opacity=".6" stroke-width=".8"/>`; }
    return { s: `<g ${tt(t, cls)}>${g}</g>`, c: [(p[0] + q[0]) / 2 + nx / 2, (p[1] + q[1]) / 2 + ny / 2] };
  };
  Object.assign(SCN, {
    // Pitàgores amb els quadrats sobre els costats: els dels catets sumen el de la hipotenusa
    ePyth({ a, b, at, leg }) {
      const c = Math.hypot(a, b), sx = Math.min(300 / (a + 2 * b), 206 / (2 * a + b)), s = Math.min(sx, 11);
      const Cx = 10 + b * s + (300 - (a + 2 * b) * s) / 2, Cy = 8 + (a + b) * s, C = [Cx, Cy], B = [Cx + a * s, Cy], Av = [Cx, Cy - b * s];
      let o = `<polygon points="${pts([C, B, Av])}" fill="#fff" stroke="${INK}" stroke-width="3" stroke-linejoin="round" ${tt(.15, 'a-fade')}/><path d="M${Cx},${Cy - 10} h10 v10" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(.15, 'a-fade')}/>`;
      o += M((Cx + B[0]) / 2, Cy - 6, nf(a), { fs: 13, t: .4 }) + M(Cx + 8, (Cy + Av[1]) / 2 + 4, nf(b), { fs: 13, t: .5, a: 's' });
      const q1 = sqOn(C, B, a, UC, 1.0), q2 = sqOn(Av, C, b, YEL, 1.6), q3 = sqOn(B, Av, Math.round(c) === c ? c : 0, '#FF8FB1', 2.5);
      o += q1.s + M(q1.c[0], q1.c[1] + 5, `${nf(a)}^2 = {u|${nf(a * a)}}`, { fs: 13, t: 1.2 }).replace(/fill="var\(--uc\)"/g, 'fill="#fff"');
      o += q2.s + M(q2.c[0], q2.c[1] + 5, `${nf(b)}^2 = ${nf(b * b)}`, { fs: 13, t: 1.8 });
      o += q3.s + M(q3.c[0], q3.c[1] + 5, `${nf(a * a)} + ${nf(b * b)} = ${nf(a * a + b * b)}`, { fs: 12.5, t: 2.7 });
      const mh = [(Av[0] + B[0]) / 2 - 10, (Av[1] + B[1]) / 2 - 6];
      o += chip(mh[0], mh[1], nf(c), 3.3, { fs: 14, st: 'y' });
      const H = Cy + a * s + 6;
      if (leg) {
        // segona part: un catet a partir de la hipotenusa (h² − c² = b²)
        const [L, d, t0] = leg, h = Math.sqrt(L * L - d * d), q = Math.min(8, 250 / (L + d + h + 6)), y0 = 40;
        let p = '', x = 160 - (L + d + h) * q / 2 - 24;
        const sq = (n, t, f, lab) => { const r = `<g ${tt(t)}><rect x="${r1(x)}" y="${r1(y0 + (L - n) * q)}" width="${r1(n * q)}" height="${r1(n * q)}" rx="3" fill="${f}" stroke="${INK}" stroke-width="1.6"/></g>` + M(x + n * q / 2, y0 + L * q + 18, lab, { fs: 13, t: t + .1 }); x += n * q; return r; };
        p += sq(L, t0 + .2, '#FF8FB1', `${L}^2 = ${L * L}`) + M(x + 12, y0 + L * q / 2 + 6, '−', { fs: 20, t: t0 + .5 }); x += 24;
        p += sq(d, t0 + .5, YEL, `${d}^2 = ${d * d}`) + M(x + 12, y0 + L * q / 2 + 6, '=', { fs: 20, t: t0 + .8 }); x += 24;
        p += sq(h, t0 + .9, UC, `{u|${nf(h * h)}}`);
        p += chip(160, y0 + L * q + 56, `√${nf(h * h)} = {u|${nf(h)}}`, t0 + 1.3, { fs: 15, st: 'y' });
        return { html: A.scene(H, out(t0, o) + p), at: at || [.6, 2.8, 3.5, t0 + 1.4] };
      }
      return { html: A.scene(H, o), at: at || [.6, 2.8, 3.5] };
    },
    // escala recolzada a la paret: la hipotenusa i els quadrats que es resten
    eLadder({ L, d, h, at, hyp, unit = 'm' }) {
      const s = Math.min(150 / h, 100 / d), wx = 300, gy = 196, fx = wx - d * s, ty = gy - h * s;
      let o = `<g ${tt(.1, 'a-fade')}><rect x="${wx}" y="${ty - 14}" width="14" height="${gy - ty + 14}" fill="#E9DFF1" stroke="${INK}" stroke-width="2"/><line x1="${fx - 34}" x2="${wx + 14}" y1="${gy}" y2="${gy}" stroke="${INK}" stroke-width="3"/></g>`;
      const nr = Math.max(4, Math.round(L * s / 16)), ux = (wx - fx) / L / s, uy = (gy - ty) / L / s;
      let ld = `<line x1="${r1(fx - 4)}" y1="${gy}" x2="${r1(wx - 4)}" y2="${r1(ty)}" stroke="#B98900" stroke-width="4" stroke-linecap="round"/><line x1="${r1(fx + 5)}" y1="${gy}" x2="${r1(wx + 1)}" y2="${r1(ty + 7)}" stroke="#B98900" stroke-width="4" stroke-linecap="round"/>`;
      for (let i = 1; i < nr; i++) { const f = i / nr, x = fx + (wx - fx) * f, y = gy + (ty - gy) * f; ld += `<line x1="${r1(x - 4)}" y1="${r1(y)}" x2="${r1(x + 4)}" y2="${r1(y + 4)}" stroke="#B98900" stroke-width="2.5"/>`; }
      o += `<g ${tt(.4, 'a-fade')}>${ld}</g>`; void ux; void uy;
      o += chip((fx + wx) / 2 - 12, (gy + ty) / 2 - 6, `${nf(L)} ${unit}`, .7, { fs: 13 }) + M((fx + wx) / 2, gy + 16, `${nf(d)} ${unit}`, { fs: 13, t: .9 });
      o += A.inout(1.0, 3.4, M(wx - 8, (gy + ty) / 2 + 4, '?', { fs: 18, fill: RED, a: 'e' }), 'a-pop') + chip(wx - 30, (gy + ty) / 2 + 30, `${nf(h)} ${unit}`, 3.4, { fs: 14, st: 'y' });
      const t0 = hyp ? 1.9 : 1.5;
      if (hyp) o += `<line x1="${r1(fx)}" y1="${gy}" x2="${r1(wx)}" y2="${r1(ty)}" stroke="${RED}" stroke-width="7" stroke-opacity=".35" stroke-linecap="round" ${tt(1.4, 'a-fade')}/>` + chip(fx - 34, gy - 26, 'hipotenusa', 1.5, { fs: 11.5, st: 'r' });
      // quadrats: L² − d² = h²
      const q = Math.min(11, 138 / (L + d + h)), y0 = 26, sq = (x, n, t, f, lab) => `<g ${tt(t)}><rect x="${r1(x)}" y="${y0}" width="${r1(n * q)}" height="${r1(n * q)}" rx="3" fill="${f}" stroke="${INK}" stroke-width="1.6"/></g>` + M(x + n * q / 2, y0 + n * q + 15, lab, { fs: 12.5, t: t + .1 });
      let x = 12; o += sq(x, L, t0, UC, `${nf(L)}^2 = ${nf(L * L)}`); x += L * q + 6; o += M(x + 5, y0 + L * q / 2 + 6, '−', { fs: 18, t: t0 + .4 }); x += 16;
      o += sq(x, d, t0 + .4, RED, `${nf(d * d)}`); x += d * q + 6; o += M(x + 5, y0 + L * q / 2 + 6, '=', { fs: 18, t: t0 + .8 }); x += 16;
      o += sq(x, h, t0 + .9, YEL, `{u|${nf(h * h)}}`);
      return { html: A.scene(gy + 22, o), at: at || [1.1, t0 + 1.2, 3.5] };
    },
    // Tales amb ombres: mateixa hora, mateix angle del sol → triangles semblants
    eShadow({ pole, ps, ts, obj = 'tree', at }) {
      const H = ts * pole / ps, bw = obj === 'tree' ? 0 : 46, s = Math.min((270 - bw) / (ps + ts + 1.4), 178 / H), gy = 206, px = 16, tx = px + (ps + 1.4) * s + bw, k = ts / ps;
      let o = ic('sun', 290, 22, 30, .1) + `<line x1="4" x2="316" y1="${gy}" y2="${gy}" stroke="${INK}" stroke-width="3" ${tt(.1, 'a-fade')}/>`;
      // pal i la seva ombra
      o += `<polygon points="${pts([[px, gy], [px, gy - pole * s], [px + ps * s, gy]])}" fill="${UC}" fill-opacity=".25" ${tt(.5, 'a-fade')}/>`;
      o += line(px, gy, px, gy - pole * s, .2, { w: 4 }) + line(px, gy, px + ps * s, gy, .45, { col: '#6B5A7B', w: 6 }) + line(px, gy - pole * s, px + ps * s, gy, .6, { col: '#E0A800', w: 1.8, dash: '5 4' });
      o += M(px + 5, gy - pole * s / 2, `${nf(pole)} m`, { fs: 11.5, a: 's', t: .5 }) + M(px + ps * s / 2, gy + 16, `${nf(ps)} m`, { fs: 11.5, t: .5 });
      // objecte gran i la seva ombra
      const top = gy - H * s;
      const shape = obj === 'tree' ? `<rect x="${r1(tx - 5)}" y="${r1(top + H * s * .45)}" width="10" height="${r1(H * s * .55)}" fill="#8B5E3C"/><ellipse cx="${r1(tx)}" cy="${r1(top + H * s * .28)}" rx="${r1(Math.max(18, H * s * .2))}" ry="${r1(H * s * .28)}" fill="#3CC46A" stroke="${INK}" stroke-width="1.5"/>`
        : `<rect x="${r1(tx - 34)}" y="${r1(top)}" width="34" height="${r1(H * s)}" fill="#D9CCE6" stroke="${INK}" stroke-width="2"/>` + Array.from({ length: Math.floor(H * s / 16) }, (_, i) => `<rect x="${r1(tx - 27)}" y="${r1(top + 6 + i * 16)}" width="8" height="8" fill="#fff"/><rect x="${r1(tx - 14)}" y="${r1(top + 6 + i * 16)}" width="8" height="8" fill="#fff"/>`).join('');
      o += `<g ${tt(1.0, 'a-fade')}>${shape}</g>`;
      o += `<polygon points="${pts([[tx, gy], [tx, top], [tx + ts * s, gy]])}" fill="${YEL}" fill-opacity=".25" ${tt(1.3, 'a-fade')}/>`;
      o += line(tx, gy, tx + ts * s, gy, 1.2, { col: '#6B5A7B', w: 6 }) + line(tx, top, tx + ts * s, gy, 1.35, { col: '#E0A800', w: 1.8, dash: '5 4' });
      o += M(tx + ts * s / 2, gy + 16, `${nf(ts)} m`, { fs: 11.5, t: 1.2 });
      // la raó: l'ombra gran conté k ombres petites
      for (let i = 1; i < Math.round(k); i++) o += `<line x1="${r1(tx + i * ps * s)}" x2="${r1(tx + i * ps * s)}" y1="${gy - 7}" y2="${gy + 5}" stroke="${UC}" stroke-width="2.5" ${tt(2.0 + .08 * i, 'a-pop')}/>`;
      o += chip(tx + ts * s / 2, gy - 18, `× ${nf(k)}`, 2.3, { fs: 13, st: 'f' });
      // alçada: k vegades el pal
      for (let i = 1; i < Math.round(k); i++) o += `<line x1="${r1(tx + 4)}" x2="${r1(tx + 16)}" y1="${r1(gy - i * pole * s)}" y2="${r1(gy - i * pole * s)}" stroke="${RED}" stroke-width="2.5" ${tt(3.0 + .08 * i, 'a-pop')}/>`;
      o += line(tx + 10, gy, tx + 10, top, 2.9, { col: RED, w: 2.5 }) + chip(tx + 12 + chipW(`${nf(H)} m`, 14) / 2, top + 16, `${nf(H)} m`, 3.4, { fs: 14, st: 'y' });
      return { html: A.scene(gy + 22, o), at: at || [.6, 1.4, 2.4, 3.5] };
    }
  });
  // cossos: prisma de cubets, cilindre de capes, con dins del cilindre, esfera, semicercle, desenvolupament del cilindre
  const iso = (cx, by, u) => (x, y, z) => [cx + (x - y) * .866 * u, by - (x + y) * .5 * u - z * u];
  A.body = (o) => {
    const { k, x, y, t } = o; let s = '';
    if (k === 'prism') {
      const { a, b, c, u = 12 } = o, P = iso(x, y, u);
      for (let z = 0; z < c; z++) {
        let g = `<polygon points="${pts([P(0, 0, z), P(0, b, z), P(0, b, z + 1), P(0, 0, z + 1)])}" style="fill:color-mix(in srgb,${UC} 78%,#000)" stroke="${INK}" stroke-width="1.2"/><polygon points="${pts([P(0, 0, z), P(a, 0, z), P(a, 0, z + 1), P(0, 0, z + 1)])}" style="fill:${UC}" stroke="${INK}" stroke-width="1.2"/><polygon points="${pts([P(0, 0, z + 1), P(a, 0, z + 1), P(a, b, z + 1), P(0, b, z + 1)])}" style="fill:color-mix(in srgb,${UC} 40%,#fff)" stroke="${INK}" stroke-width="1.2"/>`;
        for (let i = 1; i < a; i++) g += `<line x1="${r1(P(i, 0, z)[0])}" y1="${r1(P(i, 0, z)[1])}" x2="${r1(P(i, 0, z + 1)[0])}" y2="${r1(P(i, 0, z + 1)[1])}" stroke="${INK}" stroke-width=".8"/><line x1="${r1(P(i, 0, z + 1)[0])}" y1="${r1(P(i, 0, z + 1)[1])}" x2="${r1(P(i, b, z + 1)[0])}" y2="${r1(P(i, b, z + 1)[1])}" stroke="${INK}" stroke-width=".8"/>`;
        for (let j = 1; j < b; j++) g += `<line x1="${r1(P(0, j, z)[0])}" y1="${r1(P(0, j, z)[1])}" x2="${r1(P(0, j, z + 1)[0])}" y2="${r1(P(0, j, z + 1)[1])}" stroke="${INK}" stroke-width=".8"/><line x1="${r1(P(0, j, z + 1)[0])}" y1="${r1(P(0, j, z + 1)[1])}" x2="${r1(P(a, j, z + 1)[0])}" y2="${r1(P(a, j, z + 1)[1])}" stroke="${INK}" stroke-width=".8"/>`;
        s += `<g ${tt(t + .45 * z, 'a-move', `--fx:0px;--fy:-${u * 2}px`)}>${g}</g>`;
      }
      s += M(P(a / 2, 0, 0)[0] + 6, P(a / 2, 0, 0)[1] + 16, `${a}`, { fs: 12, wt: 7, fill: GRY, t }) + M(P(0, b / 2, 0)[0] - 8, P(0, b / 2, 0)[1] + 16, `${b}`, { fs: 12, wt: 7, fill: GRY, t }) + M(P(a, 0, c / 2)[0] + 8, P(a, 0, c / 2)[1] + 4, `${c}`, { fs: 12, wt: 7, fill: GRY, a: 's', t: t + .45 * c });
    } else if (k === 'cyl' || k === 'cone') {
      const { r, h, u = 14, fillT } = o, rx = r * u, ry = rx * .32, H = h * u;
      if (k === 'cyl') {
        for (let z = 0; z < h; z++) { const yb = y - z * u; s += `<g ${tt(t + .3 * z, 'a-move', `--fx:0px;--fy:-${u * 2}px`)}><path d="M${r1(x - rx)},${r1(yb)} A${r1(rx)},${r1(ry)} 0 0 0 ${r1(x + rx)},${r1(yb)} V${r1(yb - u)} A${r1(rx)},${r1(ry)} 0 0 1 ${r1(x - rx)},${r1(yb - u)} Z" style="fill:${UC}" stroke="${INK}" stroke-width="1.2"/><ellipse cx="${r1(x)}" cy="${r1(yb - u)}" rx="${r1(rx)}" ry="${r1(ry)}" style="fill:color-mix(in srgb,${UC} 45%,#fff)" stroke="${INK}" stroke-width="1.2"/></g>`; }
        s += line(x, y - H, x + rx, y - H, t + .3 * h, { w: 1.8 }) + M(x + rx / 2, y - H - 5, `r = ${r}`, { fs: 11, t: t + .3 * h }) + M(x + rx + 6, y - H / 2, `h = ${h}`, { fs: 11, a: 's', t: t + .3 * h });
      } else {
        s += `<g ${tt(t, 'a-fade')}><path d="M${r1(x - rx)},${r1(y)} A${r1(rx)},${r1(ry)} 0 0 0 ${r1(x + rx)},${r1(y)} V${r1(y - H)} M${r1(x - rx)},${r1(y)} V${r1(y - H)}" fill="none" stroke="${GRY}" stroke-width="1.6" stroke-dasharray="4 3"/><ellipse cx="${r1(x)}" cy="${r1(y - H)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${GRY}" stroke-width="1.6" stroke-dasharray="4 3"/></g>`;
        s += `<g ${tt(t + .3, 'a-fade')}><path d="M${r1(x - rx)},${r1(y)} A${r1(rx)},${r1(ry)} 0 0 0 ${r1(x + rx)},${r1(y)} L${r1(x)},${r1(y - H)} Z" style="fill:${UC}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(rx)}" ry="${r1(ry)}" style="fill:color-mix(in srgb,${UC} 45%,#fff)" stroke="${INK}" stroke-width="1.4"/></g>`;
        s += line(x, y, x + rx, y, t + .6, { w: 1.8 }) + M(x + rx / 2, y + ry + 12, `r = ${r}`, { fs: 11, t: t + .6 }) + line(x, y, x, y - H, t + .6, { col: RED, w: 1.8, dash: '3 3' }) + M(x + rx + 6, y - H / 2, `h = ${h}`, { fs: 11, a: 's', t: t + .6 });
        if (fillT != null) s += chip(x, y - H - 16, '1/3 del cilindre', fillT, { fs: 11, st: 'y' });
      }
    } else if (k === 'sphere') {
      const { r, u = 14 } = o, R = r * u;
      s += `<g ${tt(t)}><circle cx="${x}" cy="${y}" r="${R}" style="fill:color-mix(in srgb,${UC} 55%,#fff)" stroke="${INK}" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="${R}" ry="${r1(R * .3)}" fill="none" stroke="${INK}" stroke-width="1.3" stroke-dasharray="4 3"/><circle cx="${r1(x - R * .35)}" cy="${r1(y - R * .4)}" r="${r1(R * .18)}" fill="#fff" opacity=".6"/></g>`;
      s += line(x, y, x + R, y, t + .3, { w: 1.8 }) + M(x + R / 2, y - 5, `r = ${r}`, { fs: 11, t: t + .3 });
    } else if (k === 'semi') {
      const { r, u = 14 } = o, R = r * u;
      s += `<path d="M${x - R},${y} A${R},${R} 0 0 1 ${x + R},${y} Z" style="fill:${UC}" fill-opacity=".85" stroke="${INK}" stroke-width="2" ${tt(t, 'ae-gy')}/><path d="M${x - R},${y} A${R},${R} 0 0 0 ${x + R},${y}" fill="none" stroke="${GRY}" stroke-width="1.5" stroke-dasharray="4 3" ${tt(t, 'a-fade')}/>`;
      s += line(x, y, x + R, y, t + .3, { w: 1.8, col: '#fff' }) + M(x + R / 2, y + 14, `r = ${r}`, { fs: 11, t: t + .3 });
    } else if (k === 'net') {
      // desenvolupament del cilindre: dues bases i un rectangle de 2πr × h
      const { r, h, u = 9 } = o, R = r * u, W = 2 * Math.PI * r * u, H = h * u;
      s += `<circle cx="${r1(x + W / 2)}" cy="${r1(y - H - R)}" r="${R}" style="fill:color-mix(in srgb,${UC} 45%,#fff)" stroke="${INK}" stroke-width="1.8" ${tt(t)}/><circle cx="${r1(x + W / 2)}" cy="${r1(y + R)}" r="${R}" style="fill:color-mix(in srgb,${UC} 45%,#fff)" stroke="${INK}" stroke-width="1.8" ${tt(t + .15)}/>`;
      s += `<rect x="${r1(x)}" y="${r1(y - H)}" width="${r1(W)}" height="${r1(H)}" style="fill:${UC}" stroke="${INK}" stroke-width="1.8" ${tt(t + .5, 'a-grow')}/>`;
      s += M(x + W / 2, y - H / 2 + 5, `2π × ${r} × ${h} = {y|${2 * r * h}π}`, { fs: 12.5, fill: '#fff', t: t + 1.1 }) + M(x + W / 2 + R + 6, y - H - R + 5, `π × ${r}^2 = ${r * r}π`, { fs: 11.5, a: 's', t: t + .3 }) + M(x + W / 2 + R + 6, y + R + 5, `${r * r}π`, { fs: 11.5, a: 's', t: t + .4 });
      s += M(x + W / 2, y + 14, '', { fs: 11 }) + M(x - 6, y - H / 2 + 4, `h = ${h}`, { fs: 11, a: 'e', t: t + .6 });
    }
    return s;
  };
  Object.assign(SCN, {
    eVol({ items, h, at }) {
      let s = ''; items.forEach(o => { s += o.k === 'm' ? M(o.x, o.y, o.s, { fs: o.fs || 13, t: o.t, a: o.a || 'm' }) : o.k === 'chip' ? chip(o.x, o.y, o.s, o.t, { fs: o.fs || 13, st: o.st || 'o' }) : A.body(o); });
      return { html: A.scene(h, s), at };
    }
  });
})();

/* ---------- més estadística, probabilitat i funcions ---------- */
(() => {
  const A = AE, { M, chip, chipW, rect, tt, inout, out, line, dot, mark, ic, mrow, UC, RED, GRN, INK, LN, GRY, YEL, nf, sg, r1 } = A;
  Object.assign(SCN, {
    // el valor que falta: el total ha de ser mitjana × nombre de dades
    eMissing({ mean, n, have, at, lab = 'x' }) {
      const T = mean * n, sum = have.reduce((a, b) => a + b, 0), miss = T - sum, x0 = 20, W = 280, u = W / T, cols = [UC, '#5FC98B', '#FF8FB1', '#36A9E1'];
      let s = chip(160, 22, `${mean} × ${n} = {u|${T}}`, 1.0, { fs: 14 });
      for (let i = 0; i < n; i++) s += `<rect x="${r1(x0 + i * mean * u + 1)}" y="44" width="${r1(mean * u - 2)}" height="24" rx="5" fill="#fff" stroke="${UC}" stroke-width="2" ${tt(.3 + .15 * i)}/>` + M(x0 + (i + .5) * mean * u, 61, String(mean), { fs: 13, fill: UC, t: .35 + .15 * i });
      let x = x0;
      have.forEach((v, i) => { s += `<rect x="${r1(x + 1)}" y="96" width="${r1(v * u - 2)}" height="28" rx="5" fill="${cols[i % 4]}" ${tt(1.8 + .3 * i, 'a-grow')}/>` + M(x + v * u / 2, 115, String(v), { fs: 14, fill: '#fff', t: 1.95 + .3 * i }); x += v * u; });
      const ts = 1.9 + .3 * have.length;
      s += `<g ${tt(ts, 'a-fade')}><path d="M${x0 + 1},128 q0,5 5,5 H${r1(x0 + sum * u / 2 - 5)} q5,0 5,5 q0,-5 5,-5 H${r1(x - 6)} q5,0 5,-5" fill="none" stroke="${INK}" stroke-width="2"/></g>` + M(x0 + sum * u / 2, 154, `${have.join(' + ')} = ${sum}`, { fs: 13, t: ts + .1 });
      s += `<rect x="${r1(x + 1)}" y="96" width="${r1(miss * u - 2)}" height="28" rx="5" fill="${YEL}" stroke="${INK}" stroke-width="2" stroke-dasharray="5 3" ${tt(ts + .6, 'a-grow')}/>` + A.inout(ts + .7, ts + 1.4, M(x + miss * u / 2, 116, lab, { fs: 15 })) + M(x + miss * u / 2, 116, `{u|${miss}}`, { fs: 16, t: ts + 1.4 });
      s += chip(x + miss * u / 2 - 10, 180, `${T} − ${sum} = {u|${miss}}`, ts + 1.4, { fs: 14, st: 'y' });
      return { html: A.scene(196, s), at };
    },
    // dos daus: la taula de 36 casos
    eDiceGrid({ steps, at, head = '6 × 6 = {u|36} casos', ht = 1.1, chips = [] }) {
      const c = 23, x0 = 36, y0 = 30; let s = head ? chip(236, 24, head, ht, { fs: 13 }) : '';
      for (let i = 1; i <= 6; i++) s += M(x0 + (i - .5) * c, y0 - 8, String(i), { fs: 12, fill: UC, t: .1 }) + M(x0 - 9, y0 + (i - .5) * c + 4, String(i), { fs: 12, fill: '#B98900', t: .1 });
      s += M(x0 + 3 * c, y0 - 22, '2n dau', { fs: 10, wt: 7, fill: GRY, t: .1 }) + `<g ${tt(.1, 'a-fade')}>${M(x0 - 22, y0 + 3 * c, '1r dau', { fs: 10, wt: 7, fill: GRY })}</g>`.replace('<text', `<text transform="rotate(-90 ${x0 - 22} ${y0 + 3 * c})"`);
      for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) s += `<g ${tt(.2 + .025 * (i * 6 + j), 'a-fade')}><rect x="${x0 + (j - 1) * c + 1}" y="${y0 + (i - 1) * c + 1}" width="${c - 2}" height="${c - 2}" rx="4" fill="#fff" stroke="${LN}" stroke-width="1.5"/>${M(x0 + (j - .5) * c, y0 + (i - .5) * c + 4, String(i + j), { fs: 10.5, wt: 7, fill: GRY })}</g>`;
      const sets = { sum: v => (i, j) => i + j === v, no6: () => (i, j) => i < 6 && j < 6, has6: () => (i, j) => i === 6 || j === 6 };
      steps.forEach(({ set, v, col, t, lab, ly, out: to }) => {
        const f = sets[set](v); let g = '', k = 0;
        for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (f(i, j)) { g += `<g ${tt(t + .04 * k++)}><rect x="${x0 + (j - 1) * c + 1}" y="${y0 + (i - 1) * c + 1}" width="${c - 2}" height="${c - 2}" rx="4" fill="${col === 'y' ? YEL : col === 'r' ? RED : col === 'k' ? '#CFC6D8' : UC}"/>${M(x0 + (j - .5) * c, y0 + (i - .5) * c + 4, String(i + j), { fs: 10.5, wt: 8, fill: col === 'y' || col === 'k' ? INK : '#fff' })}</g>`; }
        s += to != null ? out(to, g) : g;
        if (lab) s += chip(236, ly, lab, t + .04 * k + .1, { fs: 13, st: col === 'y' ? 'y' : 'o' });
      });
      chips.forEach(([txt, y, t, st = 'o']) => { s += chip(236, y, txt, t, { fs: 13, st }); });
      return { html: A.scene(y0 + 6 * c + 12, s), at };
    },
    // màquina de funcions: entra x, surt f(x)
    eMachine({ f, runs, at }) {
      const mx = 160, my = 58; let s = `<g ${tt(.1)}><rect x="${mx - 62}" y="${my - 30}" width="124" height="56" rx="14" fill="${UC}" stroke="${INK}" stroke-width="2.5"/><circle cx="${mx - 44}" cy="${my - 16}" r="5" fill="#fff" opacity=".5"/><circle cx="${mx + 44}" cy="${my + 14}" r="5" fill="#fff" opacity=".5"/>${M(mx, my + 7, `f(x) = ${f}`, { fs: 15, fill: '#fff' })}</g>`;
      s += `<path d="M22,${my} H${mx - 62}" stroke="${LN}" stroke-width="3" stroke-dasharray="5 4" ${tt(.1, 'a-fade')}/><path d="M${mx + 62},${my} H298" stroke="${LN}" stroke-width="3" stroke-dasharray="5 4" ${tt(.1, 'a-fade')}/>`;
      // taula
      const tx = 116, ty = 130; s += `<g ${tt(.2, 'a-fade')}><rect x="${tx}" y="${ty - 20}" width="88" height="${24 + runs.length * 28}" rx="8" fill="#fff" stroke="${LN}" stroke-width="2"/><line x1="${tx + 44}" x2="${tx + 44}" y1="${ty - 20}" y2="${ty + 4 + runs.length * 28}" stroke="${LN}" stroke-width="2"/><line x1="${tx}" x2="${tx + 88}" y1="${ty + 4}" y2="${ty + 4}" stroke="${LN}" stroke-width="2"/>${M(tx + 22, ty - 2, 'x', { fs: 13, fill: GRY })}${M(tx + 66, ty - 2, 'f(x)', { fs: 13, fill: GRY })}</g>`;
      runs.forEach((r, i) => {
        const t = r.t, y = ty + 26 + i * 28;
        s += A.inout(t, t + .9, `<g class="an a-move" style="--t:${t.toFixed(2)}s;--fx:-70px;--fy:0px">${chip(mx - 80, my + 5, nf(r.x), null, { fs: 15, st: 'y' })}</g>`, 'a-fade');
        s += A.inout(t + .9, t + 2.1, M(mx, my + 44, r.calc, { fs: 13 }), 'a-fade');
        const oc = `<g ${tt(t + 1.3, 'a-fade')}><g ${tt(t + 1.3, 'a-move', '--fx:-80px;--fy:0px')}>${chip(mx + 100, my + 5, sg(r.y), null, { fs: 15, st: 'f' })}</g></g>`;
        s += runs[i + 1] ? out(runs[i + 1].t, oc) : oc;
        s += M(tx + 22, y, sg(r.x), { fs: 15, t: t + .3 }) + M(tx + 66, y, `{u|${sg(r.y)}}`, { fs: 15, t: t + 1.6 });
      });
      return { html: A.scene(ty + 16 + runs.length * 28, s), at };
    },
    // gallines i conills: si tots fossin gallines, falten potes; cada conill en posa 2 més
    eHeadsLegs({ heads, legs, a = 2, b = 4, ia = 'chick', ib = 'rabbit', at, lines }) {
      const y = (legs - a * heads) / (b - a), sz = 26, per = 10;
      let s = '';
      for (let i = 0; i < heads; i++) {
        const cx = 160 + ((i % per) - (per - 1) / 2) * 29, cy = 30 + Math.floor(i / per) * 32, k = i >= heads - y;
        s += k ? A.inout(.2 + .04 * i, 3.4 + .07 * (i - heads + y), ic(ia, cx, cy, sz), 'a-pop') + ic(ib, cx, cy, sz, 3.4 + .07 * (i - heads + y)) : ic(ia, cx, cy, sz, .2 + .04 * i);
      }
      if (lines) lines.forEach(([yy, txt, t, st = 'o', fs = 12.5]) => { s += chip(160, yy, txt, t, { fs, st }); });
      else {
        s += chip(160, 106, `${heads} caps: si tots fossin gallines → ${heads} × ${a} = ${heads * a} potes`, 1.3, { fs: 11.5 });
        s += chip(160, 136, `${legs} − ${heads * a} = {r|${legs - heads * a}} potes de més`, 2.1, { fs: 12.5 });
        s += chip(160, 166, `cada conill en té ${b - a} més → ${legs - heads * a} ÷ ${b - a} = {u|${y}}`, 2.7, { fs: 12.5, st: 'y' });
      }
      s += chip(100, 200, `${heads - y} gallines`, 4.1, { fs: 13, st: 'o' }) + chip(222, 200, `${y} conills`, 4.2, { fs: 13, st: 'f' });
      return { html: A.scene(214, s), at };
    }
  });
})();

/* ---------- polinomis, proporcions i rectangles ---------- */
(() => {
  const A = AE, { M, chip, rect, tt, inout, out, line, mrow, UC, RED, GRN, INK, LN, GRY, YEL, nf, r1 } = A;
  const term = (c, k, first) => { if (c === 0) return first ? '0' : ''; const sgn = c < 0 ? '−' : first ? '' : '+', a = Math.abs(c), v = k === 0 ? String(a) : (a === 1 ? '' : a) + (k === 1 ? 'x' : 'x^' + k); return first ? sgn + v : sgn + ' ' + v; };
  Object.assign(SCN, {
    // polinomis en columnes: cada columna és un grau i només s'operen termes semblants
    ePolyCols({ P, Q, ops = ['+'], names = ['P', 'Q'], at, mid }) {
      const n = P.length, cx = [128, 196, 262], deg = i => n - 1 - i, sy = mid ? 134 : 112;
      let s = '';
      cx.slice(0, n).forEach((x, i) => { s += `<rect x="${x - 32}" y="8" width="64" height="${ops.length > 1 ? 190 : sy + 4}" rx="10" fill="${i % 2 ? YEL : UC}" fill-opacity=".1" ${tt(.05, 'a-fade')}/>` + M(x, 22, deg(i) ? (deg(i) === 1 ? 'x' : 'x^' + deg(i)) : 'nombres', { fs: 11, wt: 7, fill: GRY, t: .05 }); });
      const row = (cs, y, t, lab, col, per) => { let r = lab ? M(58, y, lab, { fs: 15, a: 'e', t, fill: GRY }) : ''; cs.forEach((c, i) => { r += M(cx[i], y, `{${col}|${term(c, deg(i), i === 0)}}`, { fs: 17, t: per ? t + .25 * i : t }); }); return r; };
      const nm = names || ['', ''];
      s += row(P, 48, .2, names ? nm[0] + ' =' : '', 'p') + row(Q, 76, 1.0, names ? nm[1] + ' =' : '+', 'p');
      s += line(70, 88, 296, 88, 1.8, { w: 2 }) + (names ? M(22, 76, ops[0], { fs: 15, t: 1.8, a: 's' }) : '');
      const S = P.map((c, i) => c + Q[i]);
      if (mid) P.forEach((c, i) => { s += M(cx[i], 108, `${A.sg(c)} ${Q[i] < 0 ? '−' : '+'} ${nf(Math.abs(Q[i]))}`, { fs: 12.5, fill: GRY, t: 2.0 + .25 * i }); });
      s += row(S, sy, mid ? 3.0 : 2.2, names ? nm[0] + ' ' + ops[0] + ' ' + nm[1] + ' =' : '=', 'u', true);
      if (ops[1]) {
        const nQ = Q.map(c => -c), D = P.map((c, i) => c - Q[i]);
        s += row(nQ, 152, 3.4, '−' + names[1] + ' =', 'r', true) + M(170, 138, `restar ${names[1]} = sumar el seu oposat`, { fs: 10.5, wt: 7, fill: RED, t: 3.4 });
        s += line(70, 164, 296, 164, 4.3, { w: 2 }) + row(D, 190, 4.5, names[0] + ' − ' + names[1] + ' =', 'u', true);
      }
      return { html: A.scene(ops[1] ? 204 : sy + 16, s), at };
    },
    // directa: el doble i el doble; inversa: rectangles amb la mateixa àrea
    eDirInv({ d, inv, du = ['kg', '€'], iu = ['aixetes', 'h'], at }) {
      let s = '';
      // directa: dues barres que es dupliquen
      const bu = 11;
      d.forEach(([k, e], i) => {
        const y = 22 + i * 34, t = .2 + .7 * i;
        s += `<rect x="20" y="${y}" width="${k * bu}" height="13" rx="4" fill="${UC}" ${tt(t, 'a-grow')}/>` + M(24 + k * bu, y + 11, `${k} ${du[0]}`, { fs: 12, a: 's', t: t + .1 });
        s += `<rect x="20" y="${y + 15}" width="${e * bu}" height="13" rx="4" fill="${YEL}" ${tt(t + .2, 'a-grow')}/>` + M(24 + e * bu, y + 26, `${e} ${du[1]}`, { fs: 12, a: 's', t: t + .3 });
      });
      s += chip(250, 46, '{u|×2} i {u|×2}', 1.4, { fs: 13 }) + chip(250, 76, 'directa', 1.7, { fs: 14, st: 'f' });
      // inversa: aixetes × hores = sempre la mateixa feina
      const u = 11, y0 = 208;
      inv.forEach(([a, h], i) => {
        const x = 20 + i * 100, t = 2.5 + .7 * i;
        let g = `<rect x="${x}" y="${y0 - h * u}" width="${a * u}" height="${h * u}" fill="${i ? '#5FC98B' : UC}" stroke="${INK}" stroke-width="2"/>`;
        for (let p = 1; p < a; p++) g += `<line x1="${x + p * u}" x2="${x + p * u}" y1="${y0 - h * u}" y2="${y0}" stroke="#fff" stroke-width="1"/>`;
        for (let q = 1; q < h; q++) g += `<line x1="${x}" x2="${x + a * u}" y1="${y0 - q * u}" y2="${y0 - q * u}" stroke="#fff" stroke-width="1"/>`;
        s += `<g ${tt(t, 'ae-gy')}>${g}</g>` + M(x + a * u + 6, y0 - h * u / 2 + 4, `${h} ${iu[1]}`, { fs: 12, a: 's', t: t + .2 }) + M(x + a * u / 2, y0 - h * u - 6, `${a} ${iu[0]}`, { fs: 11, wt: 7, fill: GRY, t: t + .2 });
      });
      s += chip(250, 150, `${inv[0][0]} × ${inv[0][1]} = ${inv[1][0]} × ${inv[1][1]}`, 3.6, { fs: 13 }) + chip(250, 182, 'inversa', 3.9, { fs: 14, st: 'f' });
      return { html: A.scene(214, s), at };
    },
    // proporcionalitat inversa: rectangles velocitat × temps amb la mateixa àrea (la distància)
    eRectArea({ r1: R1, r2: R2, sx, sy, hu, wu, au, at, known, chips = [] }) {
      const y0 = 190; let s = '';
      [R1, R2].forEach(([h, w], i) => {
        const x = i ? 44 + R1[1] * sx + 40 : 44, t = i ? 2.4 : .2, W = w * sx, H = h * sy;
        s += `<rect x="${x}" y="${r1(y0 - H)}" width="${r1(W)}" height="${r1(H)}" rx="4" fill="${i ? YEL : UC}" stroke="${INK}" stroke-width="2" ${tt(t, i ? 'a-grow' : 'ae-gy')}/>`;
        s += M(x - 6, y0 - H / 2 + 4, `${h}`, { fs: 13, a: 'e', t: t + .2 }) + M(x - 6, y0 - H / 2 + 17, hu, { fs: 9.5, wt: 7, fill: GRY, a: 'e', t: t + .2 });
        s += i && !known ? A.inout(t + .2, t + 1.1, M(x + W / 2, y0 + 17, '?', { fs: 15, fill: RED })) + M(x + W / 2, y0 + 17, `{u|${w} ${wu}}`, { fs: 14, t: t + 1.1 }) : M(x + W / 2, y0 + 17, `${w} ${wu}`, { fs: 14, t: t + .2 });
        for (let k = 1; k < w; k++) s += `<line x1="${r1(x + k * sx)}" x2="${r1(x + k * sx)}" y1="${r1(y0 - H)}" y2="${y0}" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 3" ${tt(t + .5, 'a-fade')}/>`;
        s += M(x + W / 2, y0 - H / 2 + 5, `${h * w} ${au}`, { fs: 14, fill: i ? INK : '#fff', t: i ? t + .8 : 1.4 });
      });
      s += chip(160, 22, `${R1[0]} × ${R1[1]} = ${R1[0] * R1[1]} ${au}`, 1.5, { fs: 13, st: 'y' });
      chips.forEach(([x, y, txt, t, st = 'o', fs = 13]) => { s += chip(x, y, txt, t, { fs, st }); });
      return { html: A.scene(212, s), at };
    }
  });
})();

/* ---------- 3r i 4t d'ESO: àlgebra visual, successions, trigonometria i probabilitat ---------- */
(() => {
  const A = AE, { M, chip, chipW, rect, tt, inout, out, line, dot, mark, ic, mrow, UC, RED, GRN, INK, LN, GRY, YEL, nf, sg, r1, arrowHead } = A;
  const oldBlk = A.blk;
  A.blk = (b, reg) => {
    // model d'àrea d'un producte de binomis: cada casella és un producte parcial
    if (b.p === 'amodel') {
      const { x, y, rs, cs, cells, t = 0, dt = .35, fs = 14 } = b; let s = '', yy = y;
      const W = cs.reduce((a, c) => a + c[1], 0), H = rs.reduce((a, r) => a + r[1], 0);
      s += `<rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#fff" stroke="${INK}" stroke-width="2.4" ${tt(t, 'a-fade')}/>`;
      let xx = x; cs.forEach(([l, w], j) => { s += M(xx + w / 2, y - 7, l, { fs, t: t + .1, fill: UC }); xx += w; });
      rs.forEach(([l, h], i) => {
        s += M(x - 7, yy + h / 2 + 5, l, { fs, a: 'e', t: t + .1, fill: '#B98900' }); xx = x;
        cs.forEach(([, w], j) => {
          const lab = cells[i][j], neg = lab[0] === '−', f = /x\^2|x²/.test(lab) ? UC : /x/.test(lab) ? YEL : '#5FC98B', tc = t + .5 + dt * (i * cs.length + j);
          s += `<rect x="${r1(xx + 1.5)}" y="${r1(yy + 1.5)}" width="${r1(w - 3)}" height="${r1(h - 3)}" rx="3" fill="${neg ? RED : f}" fill-opacity="${neg ? .75 : .85}" ${tt(tc, 'a-fade')}/>` + M(xx + w / 2, yy + h / 2 + 5, lab, { fs: Math.min(fs, h * .55 + 4), fill: neg || f === UC ? '#fff' : INK, t: tc + .1 });
          xx += w;
        });
        yy += h;
      });
      return s;
    }
    // busquem dos nombres amb un producte i una suma donats
    if (b.p === 'pairs') {
      const { x = 20, y, pairs, sum, t = 0, dt = .4, fs = 14, cw = [96, 64] } = b; let s = `<g ${tt(t, 'a-fade')}>${M(x + cw[0] / 2, y, 'r · s', { fs: 12, wt: 7, fill: GRY })}${M(x + cw[0] + cw[1] / 2, y, 'r + s', { fs: 12, wt: 7, fill: GRY })}</g>`;
      pairs.forEach(([p, q], i) => {
        const yy = y + 26 + 24 * i, ti = t + .3 + dt * i, ok = p + q === sum;
        s += M(x + cw[0] / 2, yy, `${sg(p)} · ${A.ps(q)} = ${sg(p * q)}`, { fs, t: ti }) + M(x + cw[0] + cw[1] / 2, yy, `{${ok ? 'u' : 'k'}|${sg(p + q)}}`, { fs, t: ti + .15 }) + mark(x + cw[0] + cw[1] + 14, yy - 5, ok, ti + .25, 8);
        if (ok) s += `<rect x="${x - 4}" y="${yy - 18}" width="${cw[0] + cw[1] + 34}" height="24" rx="8" fill="none" stroke="${YEL}" stroke-width="3" ${tt(ti + .3, 'a-fade')}/>`;
      });
      return s;
    }
    // successió: caselles amb els salts entre terme i terme (i barres a escala, si cal)
    if (b.p === 'seq') {
      const { x0 = 20, y, terms, op, t = 0, dt = .45, hl = [], sub, bw = 42, gap = 16, bars, next = [], nextT, fs = 16 } = b, X = i => x0 + i * (bw + gap);
      let s = '';
      terms.forEach((v, i) => {
        const nx = next.includes(i), ti = nx ? (nextT != null ? [].concat(nextT)[next.indexOf(i)] ?? [].concat(nextT)[0] : t + dt * i + .3) : t + dt * i;
        s += `<g ${tt(ti)}><rect x="${X(i)}" y="${y - 20}" width="${bw}" height="30" rx="8" fill="${nx ? YEL : hl.includes(i) ? UC : '#fff'}" stroke="${nx ? INK : UC}" stroke-width="2" ${nx ? 'stroke-dasharray="4 3"' : ''}/>${M(X(i) + bw / 2, y + 1, nf(v), { fs: String(v).length > 3 ? fs - 3 : fs, fill: hl.includes(i) ? '#fff' : INK })}</g>`;
        if (sub && sub[i]) s += M(X(i) + bw / 2, y + 26, sub[i], { fs: 12, fill: GRY, t: (b.subT ?? ti) });
        if (i) s += A.arc(X(i - 1) + bw / 2 + 4, y - 22, X(i) + bw / 2 - 4, y - 22, 12, ti - .2, { lab: Array.isArray(op) ? op[i - 1] : op, fs: 11.5, w: 2, dur: .3 });
        if (bars) { const { y: by, h, max } = bars, hh = Math.max(1, v / max * h); s += `<rect x="${X(i) + 8}" y="${r1(by - hh)}" width="${bw - 16}" height="${r1(hh)}" rx="3" fill="${nx ? YEL : UC}" fill-opacity=".85" ${tt(ti + .1, 'ae-gy')}/>`; }
      });
      if (bars) s += `<line x1="${x0 - 4}" x2="${X(terms.length - 1) + bw + 4}" y1="${bars.y}" y2="${bars.y}" stroke="${INK}" stroke-width="1.6" ${tt(t, 'a-fade')}/>`;
      return s;
    }
    return oldBlk(b, reg);
  };
  const pts = a => a.map(v => v.map(r1).join(',')).join(' ');
  Object.assign(SCN, {
    // és rectangle? triangles dibuixats amb les seves mides i els quadrats comparats
    ePythCheck({ tris, at }) {
      let s = '';
      tris.forEach(([a, b, c], k) => {
        const t = .2 + 2.4 * k, u = 9.5, x0 = 22 + 156 * k, by = 96, cosC = (a * a + b * b - c * c) / (2 * a * b), ang = Math.acos(cosC);
        const P0 = [x0, by], P1 = [x0 + a * u, by], P2 = [x0 + b * u * Math.cos(ang), by - b * u * Math.sin(ang)];
        const right = Math.abs(cosC) < 1e-9;
        s += `<polygon points="${pts([P0, P1, P2])}" fill="${right ? UC : RED}" fill-opacity=".15" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" ${tt(t, 'a-fade')}/>`;
        s += M((P0[0] + P1[0]) / 2, by + 15, nf(a), { fs: 13, t }) + M((P0[0] + P2[0]) / 2 - 10, (P0[1] + P2[1]) / 2, nf(b), { fs: 13, t, a: 'e' }) + M((P1[0] + P2[0]) / 2 + 8, (P1[1] + P2[1]) / 2, `{u|${nf(c)}}`, { fs: 13, t, a: 's' });
        if (right) s += `<path d="M${r1(P0[0] + 9)},${by} v-9 h-9" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(t + 1.6, 'a-fade')}/>`;
        else s += `<path d="M${r1(P0[0] + 12)},${by} A12,12 0 0 0 ${r1(P0[0] + 12 * Math.cos(ang))},${r1(by - 12 * Math.sin(ang))}" fill="none" stroke="${RED}" stroke-width="2" ${tt(t + 1.6, 'a-fade')}/>`;
        // barres: a² + b² contra c²
        const bx = x0 - 6, bu = 1.3, y1 = 142, y2 = 170;
        s += `<rect x="${bx}" y="${y1}" width="${r1(a * a * bu)}" height="18" rx="3" fill="${UC}" ${tt(t + .6, 'a-grow')}/><rect x="${r1(bx + a * a * bu)}" y="${y1}" width="${r1(b * b * bu)}" height="18" rx="3" fill="${YEL}" ${tt(t + .9, 'a-grow')}/>`;
        s += M(bx, y1 - 4, `${a * a} + ${b * b} = ${a * a + b * b}`, { fs: 11.5, a: 's', t: t + .9 });
        s += `<rect x="${bx}" y="${y2}" width="${r1(c * c * bu)}" height="18" rx="3" fill="#FF8FB1" ${tt(t + 1.2, 'a-grow')}/>` + M(bx, y2 + 32, `${nf(c)}^2 = ${c * c}`, { fs: 11.5, a: 's', t: t + 1.3 });
        s += mark(x0 + 132, y2 + 26, right, t + 1.6, 10) + chip(x0 + 66, 20, right ? 'rectangle' : 'no és rectangle', t + 1.7, { fs: 12, st: right ? 'g' : 'R' });
      });
      return { html: A.scene(212, s), at };
    },
    // menús: cada primer es pot combinar amb cada segon i cada postres
    eMenu({ cols, at, dice = true }) {
      const cx = [34, 96, 158], cl = [UC, YEL, '#5FC98B']; let s = '';
      const ys = n => Array.from({ length: n }, (_, i) => 108 + (i - (n - 1) / 2) * 34);
      cols.forEach(([n, lab], j) => { s += M(cx[j], 22, lab, { fs: 11, wt: 7, fill: GRY, t: .1 + .15 * j }); ys(n).forEach((y, i) => { s += `<g ${tt(.2 + .15 * j + .06 * i)}><circle cx="${cx[j]}" cy="${y}" r="12" fill="${cl[j]}" stroke="${INK}" stroke-width="1.8"/>${M(cx[j], y + 5, String(i + 1), { fs: 12, fill: j === 1 ? INK : '#fff' })}</g>`; }); });
      let k = 0;
      ys(cols[0][0]).forEach((ya, i) => ys(cols[1][0]).forEach((yb, j) => { s += line(cx[0] + 12, ya, cx[1] - 12, yb, 1.1 + .05 * k++, { col: GRY, w: 1.2, dur: .2 }); }));
      k = 0; ys(cols[1][0]).forEach(yb => ys(cols[2][0]).forEach(yc => { s += line(cx[1] + 12, yb, cx[2] - 12, yc, 1.9 + .05 * k++, { col: GRY, w: 1.2, dur: .2 }); }));
      const [a, b, c] = cols.map(q => q[0]);
      s += chip(96, 196, `${a} × ${b} × ${c} = {u|${a * b * c}}`, 2.6, { fs: 14, st: 'o' });
      if (dice) {
        const x0 = 208, y0 = 44, cc = 15; let g = '';
        for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) g += `<rect x="${x0 + j * cc + 1}" y="${y0 + i * cc + 1}" width="${cc - 2}" height="${cc - 2}" rx="3" fill="${(i + j) % 2 ? UC : YEL}" fill-opacity=".7" ${tt(3.4 + .02 * (i * 6 + j))}/>`;
        s += g + M(x0 + 45, 32, 'dau 1 × dau 2', { fs: 11, wt: 7, fill: GRY, t: 3.3 }) + chip(x0 + 45, 164, `6 × 6 = {u|36}`, 4.3, { fs: 14 });
      }
      return { html: A.scene(212, s), at };
    },
    // bossa: extraccions sense retorn (la segona té una bola menys)
    eBag({ a, b, ca = 'r', cb = 'b', naS = 'vermella', naP = 'vermelles', at, res }) {
      const colOf = c => c === 'r' ? RED : c === 'b' ? '#36A9E1' : c === 'w' ? '#fff' : INK;
      const N = a + b, balls = [], per = 5, bx = 22, by = 44, bw = 128;
      for (let i = 0; i < N; i++) { const r = Math.floor(i / per), c = i % per; balls.push({ x: bx + 16 + c * 24, y: by + 18 + r * 24, col: i < a ? ca : cb }); }
      let s = `<path d="M${bx},${by - 10} v${r1(Math.ceil(N / per) * 24 + 16)} q0,12 12,12 h${bw - 24} q12,0 12,-12 v${-r1(Math.ceil(N / per) * 24 + 16)}" fill="#F7F2FB" stroke="${INK}" stroke-width="2.4" ${tt(.1, 'a-fade')}/>`;
      const ball = (x, y, c) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="10" fill="${colOf(c)}" stroke="${INK}" stroke-width="1.8"/>`;
      const slot = [[210, 60], [270, 60]], T = [1.3, 3.0];
      balls.forEach((q, i) => {
        const k = i === 0 ? 0 : i === 1 ? 1 : -1;
        if (k < 0) s += `<g ${tt(.2 + .04 * i)}>${ball(q.x, q.y, q.col)}</g>`;
        else s += `<g ${tt(.2 + .04 * i)}>${A.trm(ball(slot[k][0], slot[k][1], q.col), T[k] + .4, q.x - slot[k][0], q.y - slot[k][1], 0, 0, 0, .7)}</g>`;
      });
      s += M(210, 36, '1a', { fs: 12, wt: 7, fill: GRY, t: T[0] }) + M(270, 36, '2a', { fs: 12, wt: 7, fill: GRY, t: T[1] });
      // recompte abans de cada extracció
      s += inout(T[0] - .2, T[1] - .2, M(bx + bw / 2, by + Math.ceil(N / per) * 24 + 34, `${a} ${a > 1 ? naP : naS} de ${N}`, { fs: 12.5, fill: INK }));
      s += M(bx + bw / 2, by + Math.ceil(N / per) * 24 + 34, `queden ${a - 1} ${a - 1 === 1 ? naS : naP} de ${N - 1}`, { fs: 12.5, t: T[1] - .2 });
      s += chip(210, 100, `[${a}/${N}]`, T[0] + 1, { fs: 15, st: 'o' }) + chip(270, 100, `[${a - 1}/${N - 1}]`, T[1] + 1, { fs: 15, st: 'o' }) + M(240, 106, '×', { fs: 16, t: T[1] + 1 });
      s += chip(214, 158, res[0], 4.6, { fs: 14, st: 'o' });
      if (res[1]) s += chip(214, 194, res[1], 5.4, { fs: 14, st: 'y' });
      return { html: A.scene(212, s), at };
    },
    // combinacions: tries ordenades i després les ordenacions de cada grup
    eCombo({ n, r: k, at }) {
      const L = 'ABCDEFGH'.slice(0, n).split(''), cl = [UC, YEL, '#5FC98B', '#FF8FB1', '#36A9E1', '#FF9A3C'];
      const pc = (x, y, i, t, r = 13) => `<g ${t == null ? '' : tt(t)}><circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${cl[i]}" stroke="${INK}" stroke-width="1.8"/>${M(x, y + 5, L[i], { fs: 13, fill: i === 1 ? INK : '#fff' })}</g>`;
      let s = ''; L.forEach((_, i) => { s += pc(40 + i * 34, 26, i, .1 + .06 * i); });
      // tres caselles: 6 × 5 × 4
      const sx = i => 60 + i * 58, cnt = Array.from({ length: k }, (_, i) => n - i);
      cnt.forEach((c, i) => { const t = .8 + .5 * i; s += `<rect x="${sx(i) - 22}" y="58" width="44" height="40" rx="8" fill="#fff" stroke="${UC}" stroke-width="2" ${tt(t)}/>` + M(sx(i), 84, String(c), { fs: 17, fill: UC, t: t + .1 }) + (i ? M(sx(i) - 29, 84, '×', { fs: 14, t }) : ''); });
      const P = cnt.reduce((a, b) => a * b, 1), f = Array.from({ length: k }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
      s += M(sx(k - 1) + 34, 84, `= {u|${P}}`, { fs: 17, a: 's', t: 2.2 }) + M(160, 116, 'amb ordre', { fs: 11, wt: 7, fill: GRY, t: 2.2 });
      // les ordenacions d'un mateix grup (A, B, C)
      const perm = arr => arr.length <= 1 ? [arr] : arr.flatMap((v, i) => perm(arr.filter((_, j) => j !== i)).map(p => [v, ...p]));
      perm([0, 1, 2].slice(0, k)).forEach((p, j) => { const x = 30 + (j % 3) * 62, y = 140 + Math.floor(j / 3) * 30, t = 3.0 + .15 * j; p.forEach((i, q) => { s += pc(x + q * 18, y, i, t, 8.5).replace(/font-size="13"/, 'font-size="10"'); }); });
      s += chip(160, 206, `el mateix grup ${f} vegades → ${P} ÷ ${f} = {u|${P / f}}`, 4.2, { fs: 12.5, st: 'y' });
      s += chip(262, 152, `P = [1/${P / f}]`, 5.2, { fs: 14 });
      return { html: A.scene(222, s), at };
    },
    // interès simple: cada any el mateix interès (barres que creixen iguals)
    eInterest({ C, r, years, at }) {
      const I = C * r / 100; let s = `<rect x="20" y="30" width="96" height="140" rx="8" fill="${UC}" ${tt(.2, 'ae-gy')}/>` + M(68, 104, `${nf(C)} €`, { fs: 15, fill: '#fff', t: .5 }) + M(68, 190, 'capital', { fs: 11, wt: 7, fill: GRY, t: .3 });
      s += chip(204, 22, `${nf(r)} % de ${nf(C)} = {u|${nf(I)} €} cada any`, .9, { fs: 12.5 });
      const bw = 30, x0 = 140, u = 110 / (I * years);
      for (let y = 1; y <= years; y++) {
        const x = x0 + (y - 1) * 42, t = 1.6 + .45 * (y - 1);
        for (let k = 0; k < y; k++) s += `<rect x="${x}" y="${r1(170 - (k + 1) * I * u)}" width="${bw}" height="${r1(I * u - 2)}" rx="3" fill="${k === y - 1 ? YEL : '#F3D98A'}" stroke="${INK}" stroke-width="1" ${tt(t + .06 * k, k === y - 1 ? 'a-pop' : 'a-fade')}/>`;
        s += M(x + bw / 2, 186, `any ${y}`, { fs: 10.5, wt: 7, fill: GRY, t }) + M(x + bw / 2, 170 - y * I * u - 5, nf(I * y), { fs: 11.5, t: t + .2 });
      }
      s += line(x0 - 6, 170, x0 + years * 42, 170, 1.5, { w: 1.6 });
      s += chip(160, 210, `${nf(C)} + ${nf(I * years)} = {y|${nf(C + I * years)} €}`, 4.2, { fs: 14 });
      return { html: A.scene(222, s), at };
    },
    // trigonometria al triangle 3-4-5 (i a la circumferència de radi 1)
    eTrig({ mode, at }) {
      let s = '';
      if (mode === 'ramp') {
        const L = 8, ang = 30, u = 22, x0 = 30, by = 150, P1 = [x0 + L * u * Math.cos(ang * Math.PI / 180), by], P2 = [P1[0], by - L * u * Math.sin(ang * Math.PI / 180)];
        s += `<line x1="10" x2="310" y1="${by}" y2="${by}" stroke="${INK}" stroke-width="2.5" ${tt(.1, 'a-fade')}/>`;
        s += `<polygon points="${pts([[x0, by], P1, P2])}" fill="${UC}" fill-opacity=".14" stroke="none" ${tt(.2, 'a-fade')}/>` + line(x0, by, P2[0], P2[1], .2, { col: UC, w: 5 }) + line(P1[0], by, P2[0], P2[1], 1.4, { col: RED, w: 3, dash: '6 4' });
        s += `<path d="M${x0 + 34},${by} A34,34 0 0 0 ${r1(x0 + 34 * Math.cos(Math.PI / 6))},${r1(by - 34 * Math.sin(Math.PI / 6))}" fill="none" stroke="${INK}" stroke-width="2" ${tt(.5, 'a-fade')}/>` + M(x0 + 48, by - 7, '30°', { fs: 13, a: 's', t: .5 });
        s += `<path d="M${r1(P1[0] - 11)},${by} v-11 h11" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(1.4, 'a-fade')}/>`;
        s += chip((x0 + P2[0]) / 2 - 30, (by + P2[1]) / 2 - 16, '8 m · hipotenusa', 1.0, { fs: 12 }) + chip(P1[0] + 70, by - 18, 'altura · oposat', 1.6, { fs: 11.5, st: 'r' });
        s += chip(160, 186, 'altura = 8 × sin 30° = 8 × 0,5', 2.4, { fs: 13 }) + A.inout(1.6, 3.4, M(P1[0] + 10, (by + P2[1]) / 2 + 4, '?', { fs: 17, fill: RED, a: 's' })) + chip(P1[0] + 26, (by + P2[1]) / 2 + 4, '4 m', 3.4, { fs: 14, st: 'y' });
        return { html: A.scene(200, s), at };
      }
      const u = 30, x0 = 34, by = 150, B = [x0 + 4 * u, by], Cc = [B[0], by - 3 * u], O = [x0, by];
      s += `<polygon points="${pts([O, B, Cc])}" fill="#fff" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" ${tt(.1, 'a-fade')}/><path d="M${B[0] - 11},${by} v-11 h11" fill="none" stroke="${INK}" stroke-width="1.6" ${tt(.1, 'a-fade')}/>`;
      const al = Math.atan2(3, 4);
      s += `<path d="M${x0 + 26},${by} A26,26 0 0 0 ${r1(x0 + 26 * Math.cos(al))},${r1(by - 26 * Math.sin(al))}" fill="none" stroke="${INK}" stroke-width="2" ${tt(.3, 'a-fade')}/>` + M(x0 + 36, by - 7, 'α', { fs: 15, a: 's', t: .3 });
      const lab = (p, q, txt, t, d, col) => M((p[0] + q[0]) / 2 + d[0], (p[1] + q[1]) / 2 + d[1], txt, { fs: 14, t, fill: col || INK });
      const opp = [B, Cc, [B[0] + 40, by - 30]], adj = [O, B, [x0 + 2 * u, by + 36]], hyp = [O, Cc, [x0 + 30, by - 70]];
      const hi = (seg, col, t, txt) => line(seg[0][0], seg[0][1], seg[1][0], seg[1][1], t, { col, w: 6, cls: 'a-draw' }) + (txt ? chip(seg[2][0], seg[2][1], txt, t + .3, { fs: 11.5, st: col === RED ? 'r' : col === UC ? 'o' : 'y' }) : '');
      s += lab(B, Cc, '3', .4, [10, 5]) + lab(O, B, '4', .4, [0, 18]) + lab(O, Cc, '5', .4, [-10, -2]);
      if (mode === 'sin') {
        s += hi(opp, RED, 1.2, 'oposat') + hi(hyp, UC, 1.8, 'hipotenusa');
        s += chip(258, 50, 'sin α = [3/5]', 2.4, { fs: 15 }) + chip(258, 100, '= {u|0,6}', 2.8, { fs: 16, st: 'y' });
      } else if (mode === 'cos') {
        s += hi(adj, '#E0A800', .9, 'contigu') + hi(hyp, UC, 1.3, '');
        s += chip(86, 36, 'cos α = [4/5] = {u|0,8}', 1.6, { fs: 14 });
        // circumferència de radi 1: el mateix triangle dividit entre 5
        const R = 88, cx = 214, cy = 150, px = cx + .8 * R, py = cy - .6 * R;
        s += `<path d="M${cx + R},${cy} A${R},${R} 0 0 0 ${cx},${cy - R}" fill="none" stroke="${UC}" stroke-width="2.4" ${tt(2.5, 'a-fade')}/>` + line(cx - 6, cy, cx + R + 10, cy, 2.5, { w: 1.6 }) + line(cx, cy + 6, cx, cy - R - 10, 2.5, { w: 1.6 });
        s += `<polygon points="${pts([[cx, cy], [px, cy], [px, py]])}" fill="${UC}" fill-opacity=".15" stroke="${INK}" stroke-width="2" ${tt(2.8, 'a-fade')}/>` + dot(px, py, 2.9, { r: 5 });
        s += M((cx + px) / 2, cy + 15, '0,8', { fs: 12, fill: '#B98900', t: 3.0 }) + M(px + 5, (cy + py) / 2 + 4, '0,6', { fs: 12, fill: RED, a: 's', t: 3.0 }) + M((cx + px) / 2 - 12, (cy + py) / 2 - 4, '1', { fs: 12, fill: UC, t: 3.0 });
        s += chip(cx + 36, 30, '0,36 + 0,64 = {u|1}', 3.3, { fs: 12.5, st: 'y' });
      } else if (mode === 'tan') {
        s += hi(opp, RED, .9, '') + hi(adj, '#E0A800', 1.3, 'contigu');
        s += chip(250, 40, 'tan α = [3/4] = {u|0,75}', 1.7, { fs: 14 });
        // pendent: per cada 1 que avança, puja 0,75
        const st = 4; for (let i = 0; i < st; i++) { const xa = x0 + i * u, ya = by - i * .75 * u, t = 2.4 + .3 * i; s += line(xa, ya, xa + u, ya, t, { col: '#E0A800', w: 2 }) + line(xa + u, ya, xa + u, ya - .75 * u, t + .12, { col: RED, w: 2 }); }
        s += chip(250, 88, 'avança 1, puja 0,75', 3.0, { fs: 12 }) + chip(250, 132, '0,6 ÷ 0,8 = 0,75', 3.8, { fs: 13, st: 'y' });
      }
      return { html: A.scene(200, s), at };
    }
  });
})();

/* ================= configuració de cada concepte ================= */
Object.assign(TANIM, {
  'c7-1': [
    { k: 'eSignGrid', items: [['(+6) × (−2)', '−12'], ['(−3) × (−4)', '+12'], ['(−20) ÷ 4', '−5'], ['(−18) ÷ (−6)', '+3']] },
    { k: 'eRows', h: 196, fs: 19, rows: [
      { s: '5 − {b|3 × (−2)}', x: 62, a: 's', y: 38, t: .2, br: [[0, 0, '1r: {r|−6}', 1.0]] },
      { s: '5 − {u|(−6)}', x: 62, a: 's', y: 116, t: 1.8, g: { 0: { from: [0, 0, 1.0] } } },
      { s: '= 5 + 6 = {y|11}', after: 1, t: 2.5 }
    ], add: [{ p: 'nl', y: 162, a: 0, b: 12, x0: 24, x1: 296, t: 2.9, big: [5, 11], hops: [[5, 11, 3.3, { lab: '+6' }]], pts: [[5, 3.1], [11, 3.8, { fill: '#FFC93C', stroke: '#2B1A38' }]] }],
      at: [.3, 1.2, 2.7] },
    { k: 'eRows', h: 176, fs: 16.5, rows: [
      { s: '5 − {b|(2 − 7)}', x: 24, a: 's', y: 34, t: .2 },
      { s: '= 5 − {u|(−5)}', after: 0, t: .9, g: { 0: { from: '0.0' } } },
      { s: '= {y|10}', after: 1, t: 1.5 },
      { s: '5 {u|−}({p|2} {p|− 7})', x: 24, a: 's', y: 96, t: 2.2, arcs: [[0, 1, 2.5, '', 13], [0, 2, 2.7, '', 17]] },
      { s: '= 5 {r|− 2} {g|+ 7} = {y|10}', after: 3, t: 3.2, g: { 0: { from: '3.1' }, 1: { from: '3.2' } } },
      { s: '{u|−}({p|4} {p|− 9})', x: 24, a: 's', y: 156, t: 4.1, arcs: [[0, 1, 4.4, '', 13], [0, 2, 4.6, '', 17]] },
      { s: '= {r|−4} {g|+ 9} = {y|5}', after: 5, t: 5.1, g: { 0: { from: '5.1' }, 1: { from: '5.2' } } }
    ], at: [1.6, 3.5, 5.4] },
    { k: 'eRows', h: 222, fs: 18, rows: [
      { s: '{p|(−2)}{p|(−2)}{p|(−2)}{p|(−2)} = {y|16}', y: 36, t: .2, g: { 4: { t: 1.7 } }, br: [[0, 1, '{g|+4}', .8], [2, 3, '{g|+4}', 1.2]] },
      { s: '{p|(−2)}{p|(−2)}{p|(−2)} = {y|−8}', y: 110, t: 2.3, g: { 3: { t: 3.5 } }, br: [[0, 1, '{g|+4}', 2.8], [2, 2, '{r|−2}', 3.1, '#E4574B']] },
      { s: '{b|(−3)}\u2009^2 = 9', x: 82, y: 182, t: 4.2, br: [[0, 0, 'base −3', 4.5]] },
      { s: '−{b|3}\u2009^2 = {y|−9}', x: 232, y: 182, t: 4.9, br: [[0, 0, 'base 3', 5.2]] }
    ], at: [1.8, 3.6, 5.3] }
  ],
  'c7-2': [
    { k: 'eMultDiv', m: 6, j: 4, n: 12 },
    { k: 'eDivCrit', n: 312 },
    { k: 'eFactorTree', n: 60 },
    { k: 'eVenn', a: 12, b: 18, fa: [2, 2, 3], fb: [2, 3, 3], bus: true }
  ],
  'c7-3': [
    { k: 'eRows', h: 150, rows: [], add: [
      { p: 'fbar', x: 84, y: 22, w: 216, d: 18, n: 12, t: .2, lab: '[12/18]', g: 6, gt: 1.3 },
      { p: 'chip', x: 192, y: 78, s: 'grups de 6', t: 1.6, fs: 13, st: 'r' },
      { p: 'fbar', x: 84, y: 102, w: 216, d: 3, n: 2, t: 2.6, lab: '[2/3]' }
    ], at: [.8, 1.9, 3] },
    { k: 'eRows', h: 150, rows: [], add: [
      { p: 'fbar', x: 84, y: 14, w: 216, d: 4, n: 1, t: .2, lab: '[1/4]', sub: 12, st: 1.1, lab2: '[3/12]', out: 3.6 },
      { p: 'fbar', x: 84, y: 52, w: 216, d: 6, n: 1, col: '#FFC93C', t: .4, lab: '[1/6]', sub: 12, st: 1.3, lab2: '[2/12]', out: 3.6 },
      { p: 'fseg', x: 84, y: 108, w: 216, d: 12, t: 1.9, segs: [[0, 3, 'u', 2.1], [3, 2, 'y', 2.5]], lab: '[5/12]', labT: 2.9, out: 3.6 },
      { p: 'fbar', x: 84, y: 14, w: 216, d: 6, n: 5, t: 3.8, lab: '[5/6]', sub: 12, st: 4.4, lab2: '[10/12]' },
      { p: 'fbar', x: 84, y: 52, w: 216, d: 4, n: 1, col: '#E4574B', t: 4, lab: '[1/4]', sub: 12, st: 4.6, lab2: '[3/12]' },
      { p: 'fseg', x: 84, y: 108, w: 216, d: 12, t: 5.1, segs: [[0, 10, 'u', 5.2]], cross: [7, 3, 5.8], lab: '[7/12]', labT: 6.3 }
    ], at: [1.3, 2.9, 6.3] },
    { k: 'eRows', h: 222, fs: 20, rows: [
      { s: '[2/3] ÷ {p|[4/5]} = [2/3] × {u|[5/4]}', y: 162, t: 3, g: { 1: { t: 3.5, cls: 'ae-fy' } } },
      { s: '= [10/12] = {y|[5/6]}', y: 212, t: 4.6, g: { 0: { t: 5.2 } } }
    ], add: [{ p: 'farea', x: 70, y: 24, w: 120, h: 78, fr: [2, 3], fc: [3, 5], t: .2, lab: '= [6/15] = {u|[2/5]}', labT: 2 }],
      at: [2.1, 3.9, 5.3] },
    { k: 'eRows', h: 212, rows: [], add: [
      { p: 'm', x: 160, y: 22, s: '[1/2] + {u|[1/3] × [3/4]}', fs: 18, t: .1 },
      { p: 'farea', x: 70, y: 60, w: 120, h: 66, fr: [1, 3], fc: [3, 4], t: .6, lab: '= [3/12] = {u|[1/4]}', labT: 2.4 },
      { p: 'fbar', x: 84, y: 142, w: 216, d: 2, n: 1, t: 3.2, lab: '[1/2]', sub: 4, st: 3.7, lab2: '[2/4]' },
      { p: 'fseg', x: 84, y: 180, w: 216, d: 4, t: 4.1, segs: [[0, 2, 'u', 4.2], [2, 1, 'y', 4.6]], lab: '[3/4]', labT: 5 }
    ], at: [.3, 2.5, 5.1] }
  ],
  'c7-4': [
    { k: 'ePowShapes', items: [{ sq: 5, t: .2, lab: '5^2 = 25' }, { cube: 2, t: 1.9, lab: '2^3 = 8' }, { cube: 10, t: 3.4, lab: '10^3 = 1.000' }] },
    { k: 'eFactors', h: 150, items: [{ k: 'mul', b: 2, m: 3, n: 4, y: 58, t: .3, res: '= 2^7' }, { k: 'row', s: '2^7 = 2·2·2·2·2·2·2 = {y|128}', y: 136, t: 3, fs: 16 }], at: [.9, 2.3, 3.2] },
    { k: 'eFactors', h: 196, items: [{ k: 'div', b: 3, m: 5, n: 2, y: 58, x: 112, t: .3, res: '= 3^3 = {y|27}' }, { k: 'div', b: 5, m: 3, n: 3, y: 150, x: 112, t: 2.7, res: '= 5^0 = {y|1}' }], at: [1.4, 2.1, 4.7] },
    { k: 'eRows', h: 212, fs: 16, rows: [
      { s: '8 × 8 = {u|64}', x: 206, y: 50, t: .6 },
      { s: '7 × 7 = 49', x: 206, y: 96, t: 2.0 },
      { s: '49 < {y|50} < 64', x: 206, y: 128, t: 2.5 }
    ], add: [
      { p: 'sq', x: 24, y: 30, c: 11, n: 8, t: .2, side: '8', out: 1.8 },
      { p: 'sq', x: 24, y: 30, c: 11, n: 8, k: 7, t: 1.8, t2: 1.9, extra: 1, t3: 2.5, lab: '49 + 1 = 50', labT: 2.6 },
      { p: 'nl', x0: 40, x1: 280, y: 190, a: 7, b: 8, tick: .1, lab: 1, t: 3.1, big: [7, 8], pts: [[7.0711, 3.6, {}, '√50', { st: 'y' }]] }
    ], at: [.9, 2.7, 3.8] }
  ],
  'c7-5': [
    { k: 'eRows', h: 214, fs: 19, rows: [
      { s: '{f|x = 4}', x: 62, y: 36, t: .2 },
      { s: '3{b|x} + 2', x: 200, y: 36, t: .2 },
      { s: '3 × {u|4} + 2', x: 36, a: 's', y: 94, t: 1.0, g: { 0: { from: '0.0' } } },
      { s: '= 12 + 2', after: 2, t: 1.7 },
      { s: '= {y|14}', after: 3, t: 2.3 },
      { s: '{f|a = −2}', x: 62, y: 146, t: 3.0 },
      { s: '5{b|a} − 1', x: 200, y: 146, t: 3.0 },
      { s: '5 × {u|(−2)} − 1', x: 36, a: 's', y: 202, t: 3.7, g: { 0: { from: '5.0' } } },
      { s: '= {y|−11}', after: 7, t: 4.4 }
    ], at: [.3, 2.4, 4.6] },
    { k: 'eTiles', at: [2.4, 3.1, 5.2], rows: [
      { y: 70, t: .2, tm: 1.2, terms: [{ v: 'x', n: 5, lab: '5x' }, { v: 'x', n: 2, lab: '+2x' }, { v: '1', n: 3, neg: true, lab: '−3' }], groups: [{ v: 'x', lab: '7x' }, { v: '1', lab: '−3' }] },
      { y: 172, t: 2.7, tm: 3.8, terms: [{ v: 'a', n: 4, lab: '4a' }, { v: 'b', n: 3, lab: '+3b' }, { v: 'a', n: 1, neg: true, lab: '−a' }, { v: 'b', n: 1, lab: '+b' }], groups: [{ v: 'a', lab: '3a' }, { v: 'b', lab: '4b' }] }
    ] },
    { k: 'eBalance', at: [1.6, 3.9, 6.2], phases: [
      { t0: .2, dur: 1.3, end: 2.4, eqs: ['x + 7 = 12', 'x = {u|5}'], states: [{ L: { x: 1, u: 7 }, R: { u: 12 } }, { L: { x: 1 }, R: { u: 5 } }], steps: [{ op: 'rm', u: 7, lab: '−7 als dos costats' }] },
      { t0: 2.5, dur: 1.3, end: 4.7, eqs: ['x − 4 = 9', 'x = {u|13}'], states: [{ L: { x: 1, n: 4 }, R: { u: 9 } }, { L: { x: 1 }, R: { u: 13 } }], steps: [{ op: 'add', u: 4, lab: '+4 als dos costats' }] },
      { t0: 4.8, dur: 1.3, eqs: ['3x = 21', 'x = {u|7}'], states: [{ L: { x: 3 }, R: { u: 21 } }, { L: { x: 1 }, R: { u: 7 } }], steps: [{ op: 'div', d: 3, lab: '÷ 3 als dos costats' }] }
    ] },
    { k: 'eBalance', at: [.4, 1.7, 3.1, 4.5], phases: [
      { t0: .2, dur: 1.4, xv: 4, eqs: ['2x + 3 = 11', '2x = 8', 'x = {u|4}', '2 × {u|4} + 3 = 11'], states: [{ L: { x: 2, u: 3 }, R: { u: 11 } }, { L: { x: 2 }, R: { u: 8 } }, { L: { x: 1 }, R: { u: 4 } }, { L: { x: 2, u: 3 }, R: { u: 11 } }], steps: [{ op: 'rm', u: 3, lab: '−3 als dos costats' }, { op: 'div', d: 2, lab: '÷ 2 als dos costats' }, { op: 'none', lab: 'comprovem: x = 4' }] }
    ] }
  ],
  'c7-6': [
    { k: 'ePct', max: 150, W: 226, h: 216, at: [2.0, 2.6, 4.9], items: [
      { k: 'part', y: 30, total: 150, pct: 20, res: 30, t: .2 },
      { k: 'row', s: '150 × 0,20 = {u|30}', x: 214, y: 94, t: 2.4 },
      { k: 'part', y: 142, total: 70, pct: 10, res: 7, t: 3.2 }
    ] },
    { k: 'ePct', max: 90, W: 216, h: 208, at: [1.6, 3.4, 4.0], items: [
      { k: 'up', y: 34, base: 80, pct: 10, t: .2, lab: 'augment del 10 %', idx: '× 1,10' },
      { k: 'down', y: 116, base: 60, pct: 25, t: 2.0, lab: 'descompte del 25 %', idx: '× 0,75' },
      { k: 'row', s: '60 − {r|15} = {u|45 €}', y: 192, t: 3.8 }
    ] },
    { k: 'eUnitRate', n1: 4, v1: 30, n2: 6 },
    { k: 'eShare', total: 50, parts: [2, 3, 5], at: [.4, 2.0, 3.6, 4.4] }
  ],
  'c7-7': [
    { k: 'eTriAngles', a: 50, b: 70 },
    { k: 'eAreaPoly', tri: [6, 4], trap: [8, 4, 5] },
    { k: 'eCircle', r1: 5, r2: 3 },
    { k: 'ePlane', x0: 36, y0: 16, xr: [-5, 5], yr: [-3, 3], u: 24, h: 184, at: [1.4, 2.6, 3.2], items: [
      { k: 'pt', x: 3, y: -2, t: 1.2, walk: true, lab: 'A(3, −2)', lp: 'w' },
      { k: 'pt', x: -4, y: 1, t: 2.4, walk: true, lab: 'B(−4, 1)', lp: 'n', col: 'y' },
      { k: 'quad', q: 4, t: 2.9, lab: '4t' }, { k: 'quad', q: 2, t: 3.1, lab: '2n', col: 'y' }
    ] }
  ],
  'c7-8': [
    { k: 'eMeanLevel', data: [6, 7, 5, 9, 8], at: [1.0, 1.6, 3.9] },
    { k: 'eSortCards', at: [1.6, 3.0, 3.8, 5.2], rows: [
      { d: [9, 2, 5], y: 34, t: .1, ts: .6, tm: 1.3, show: 'med', res: 'Me = {u|5}' },
      { d: [3, 8, 4, 10], y: 96, t: 2.1, ts: 2.6, tm: 3.4, show: 'med', res: '(4 + 8) ÷ 2 = {u|6}' },
      { d: [3, 4, 4, 7], y: 158, t: 4.4, tm: 4.9, show: 'mode', res: 'Mo = 4' }
    ] },
    { k: 'eDice', fav: [2, 4, 6], at: [.5, 2.2, 3.7] },
    { k: 'eCoinTree', at: [1.7, 2.6, 3.8], hl: [{ leaves: [0], t: 2.3, lab: '[1/4]' }, { leaves: [1, 2], t: 3.4, lab: '[2/4] = [1/2]' }] }
  ],
  'c8-1': [
    { k: 'eRows', h: 214, fs: 19, rows: [
      { s: '5 − 3 × {b|(2 − 6)}', x: 60, a: 's', y: 36, t: .2, br: [[0, 0, '1r: {r|−4}', .9]] },
      { s: '5 − {p|3 ×} {u|(−4)}', x: 60, a: 's', y: 118, t: 1.6, g: { 1: { from: 'B0.0' } }, br: [[0, 1, '2n: {r|−12}', 2.3]] },
      { s: '5 − {u|(−12)}', x: 60, a: 's', y: 198, t: 3.0, g: { 0: { from: 'B1.0' } } },
      { s: '= 5 + 12 = {y|17}', after: 2, t: 3.6 }
    ], at: [.3, 1.1, 2.5, 3.9] },
    { k: 'eRows', h: 222, fs: 19, rows: [
      { s: '{p|(−3)}{p|(−3)} = {y|9}', y: 36, t: .2, g: { 2: { t: 1.2 } }, br: [[0, 1, '{g|+9}', .8]] },
      { s: '{p|(−2)}{p|(−2)}{p|(−2)} = {y|−8}', y: 108, t: 1.9, g: { 3: { t: 3.1 } }, br: [[0, 1, '{g|+4}', 2.4], [2, 2, '{r|−2}', 2.7, '#E4574B']] },
      { s: '{r|−}({b|3 × 3}) = {y|−9}', y: 180, t: 3.8, g: { 2: { t: 4.6 } }, br: [[1, 1, 'només el 3 va al quadrat', 4.2]] }
    ], at: [1.3, 3.2, 4.7] },
    { k: 'eRows', h: 230, rows: [], add: [
      { p: 'm', x: 160, y: 22, s: '[2/3] − {u|[1/2] × [4/5]}', fs: 18, t: .1 },
      { p: 'farea', x: 70, y: 66, w: 120, h: 48, fr: [1, 2], fc: [4, 5], t: .5, lab: '= [4/10] = {u|[2/5]}', labT: 2.2 },
      { p: 'fbar', x: 84, y: 130, w: 216, d: 3, n: 2, t: 3.0, lab: '[2/3]', sub: 15, st: 3.6, lab2: '[10/15]' },
      { p: 'fbar', x: 84, y: 164, w: 216, d: 5, n: 2, col: '#E4574B', t: 3.2, lab: '[2/5]', sub: 15, st: 3.8, lab2: '[6/15]' },
      { p: 'fseg', x: 84, y: 198, w: 216, d: 15, t: 4.6, segs: [[0, 10, 'u', 4.7]], cross: [4, 6, 5.2], lab: '[4/15]', labT: 6 }
    ], at: [.3, 2.3, 4.0, 6.1] },
    { k: 'eRows', h: 214, fs: 19, rows: [
      { s: '(−[2/3])^3 = {r|−}[8/27]', y: 40, t: .2, g: { 0: { t: .8 } } },
      { s: '(−[1/2])^2 × 8 − 3', y: 100, t: 1.6 },
      { s: '= {u|[1/4]} × 8 − 3', y: 152, t: 2.6 },
      { s: '= {u|2} − 3 = {y|−1}', y: 202, t: 3.6 }
    ], add: [
      { p: 'chip', x: 270, y: 40, s: 'senar → −', t: 1.0, fs: 11.5, st: 'r' },
      { p: 'chip', x: 270, y: 100, s: 'parell → +', t: 2.0, fs: 11.5, st: 'g' }
    ], at: [1.0, 1.8, 2.8, 3.9] }
  ],
  'c8-2': [
    { k: 'eFactors', h: 226, at: [1.9, 3.8, 6.0], items: [
      { k: 'mul', b: 2, m: 3, n: 4, y: 34, x: 140, t: .2, w: 18, res: '= 2^7 = {u|128}', nobr: true },
      { k: 'div', b: 5, m: 6, n: 4, y: 104, x: 120, t: 2.0, res: '= 5^2 = {u|25}' },
      { k: 'pow', b: 3, m: 2, n: 3, y: 180, x: 124, t: 4.3, w: 20, res: '= 3^6 = {u|729}' }
    ] },
    { k: 'eFactors', h: 226, at: [1.9, 3.9, 4.4, 5.4], items: [
      { k: 'div', b: 2, m: 3, n: 3, y: 40, x: 150, t: .2, res: '= 2^0 = {y|1}', lab: '2^3 ÷ 2^3' },
      { k: 'div', b: 2, m: 2, n: 5, y: 120, x: 150, t: 2.2, res: '= 2^{−3}', lab: '2^2 ÷ 2^5' },
      { k: 'row', s: '2^{−3} = [1/2^3] = {y|[1/8]}', x: 250, y: 186, t: 4.2, fs: 15 },
      { k: 'row', s: '10^{−2} = [1/10^2] = [1/100] = {y|0,01}', x: 160, y: 218, t: 5.2, fs: 15 }
    ] },
    { k: 'eRows', h: 212, rows: [], at: [.3, 1.6, 2.9, 4.9], add: [
      { p: 'svg', s: '<image href="img/ic/sun.webp" x="18" y="10" width="30" height="30"/>' },
      { p: 'm', x: 56, y: 30, s: 'Terra–Sol', fs: 13, a: 's', fill: '#8E829A', t: .1 },
      { p: 'sci', m: '15', e: 8, dir: 'in', x: 160, y: 72, t: .5, res: '= {u|1,5 × 10^8} km', resY: 108 },
      { p: 'sci', m: '32', e: -4, dir: 'in', x: 160, y: 164, t: 3.3, res: '= {u|3,2 × 10^{−4}}', resY: 200 }
    ] },
    { k: 'eRows', h: 228, rows: [
      { s: '12^2 = 144 → √144 = {u|12}', x: 196, y: 134, t: 2.8, fs: 15 },
      { s: '7^2 = 49 < {y|50} < 64 = 8^2', x: 196, y: 168, t: 3.7, fs: 14 }
    ], add: [
      { p: 'sci', m: '32', e: 4, dir: 'out', x: 86, y: 44, t: .2, fs: 20, res: '= {u|32.000}', resX: 232, resY: 44 },
      { p: 'sci', m: '7', e: -3, dir: 'out', x: 86, y: 92, t: 1.4, fs: 20, res: '= {u|0,007}', resX: 232, resY: 92 },
      { p: 'sq', x: 24, y: 110, c: 4.5, n: 12, t: 2.6, side: '12' },
      { p: 'nl', x0: 40, x1: 290, y: 206, a: 7, b: 8, tick: .1, lab: 1, t: 4.1, big: [7, 8], pts: [[7.0711, 4.5, {}, '√50 ≈ 7,07', { st: 'y' }]] }
    ], at: [1.3, 2.5, 3.1, 4.0, 4.7] }
  ],
  'c8-3': [
    { k: 'eDirInv', d: [[3, 6], [6, 12]], inv: [[2, 6], [4, 3]], at: [.9, 1.8, 3.2, 4.1] },
    { k: 'eRectArea', r1: [60, 3], r2: [90, 2], sx: 44, sy: 1.5, hu: 'km/h', wu: 'h', au: 'km', at: [.7, 1.6, 3.6] },
    { k: 'ePct', max: 44, W: 220, h: 200, at: [.4, 1.7, 2.4, 4.3], items: [
      { k: 'down', y: 38, base: 40, pct: 20, t: .2, lab: 'jaqueta de 40 €', idx: '× 0,80' },
      { k: 'rev', y: 116, fin: 32, pct: 80, t: 2.2 }
    ] },
    { k: 'eShare', total: 90, parts: [2, 3, 4], at: [.4, 1.2, 2.0, 3.8] }
  ],
  'c8-4': [
    { k: 'eRows', h: 222, fs: 19, rows: [
      { s: '{u|3}({p|x} {p|+ 2})', x: 44, a: 's', y: 44, t: .2, arcs: [[0, 1, .6, '', 14], [0, 2, .8, '', 18]] },
      { s: '= {u|3x} {u|+ 6}', after: 0, t: 1.2, g: { 0: { from: '0.1' }, 1: { from: '0.2' } } },
      { s: '{u|−2}({p|x} {p|− 5})', x: 44, a: 's', y: 104, t: 1.9, arcs: [[0, 1, 2.2, '', 14], [0, 2, 2.4, '', 18]] },
      { s: '= {u|−2x} {g|+ 10}', after: 2, t: 2.8, g: { 0: { from: '2.1' }, 1: { from: '2.2' } } },
      { s: '4 {u|−}({p|x} {p|− 3})', x: 44, a: 's', y: 164, t: 3.5, arcs: [[0, 1, 3.8, '', 14], [0, 2, 4.0, '', 18]] },
      { s: '= 4 {r|− x} {g|+ 3}', after: 4, t: 4.4, g: { 0: { from: '4.1' }, 1: { from: '4.2' } } },
      { s: '= {y|7 − x}', x: 160, a: 's', y: 210, t: 5.2 }
    ], at: [1.4, 3.0, 4.6, 5.4] },
    { k: 'eRows', h: 186, fs: 19, rows: [
      { s: '{f|x = −1}', x: 62, y: 36, t: .2 },
      { s: '2{b|x}^2 − 3{b|x}', x: 204, y: 36, t: .2 },
      { s: '2 × {u|(−1)}^2 − 3 × {u|(−1)}', y: 100, t: 1.0, g: { 0: { from: '0.0' }, 1: { from: '0.0' } }, br: [[0, 0, '= 1', 1.8], [1, 1, '−3 × (−1) = +3', 2.1]] },
      { s: '= 2 × 1 {g|+ 3} = {y|5}', y: 176, t: 2.8 }
    ], at: [.3, 1.3, 3.0] },
    { k: 'eBalance', h: 204, at: [.4, 1.7, 4.3, 5.6], phases: [
      { t0: .2, dur: 1.3, eqs: ['3(x − 2) = x + 8', '3x − 6 = x + 8', '2x − 6 = 8', '2x = 14', 'x = {u|7}'],
        states: [{ L: { x: 3, n: 6 }, R: { x: 1, u: 8 } }, { L: { x: 3, n: 6 }, R: { x: 1, u: 8 } }, { L: { x: 2, n: 6 }, R: { u: 8 } }, { L: { x: 2 }, R: { u: 14 } }, { L: { x: 1 }, R: { u: 7 } }],
        steps: [{ op: 'none', lab: 'treiem el parèntesi' }, { op: 'rm', x: 1, lab: '−x als dos costats' }, { op: 'add', u: 6, lab: '+6 als dos costats' }, { op: 'div', d: 2, lab: '÷ 2' }] }
    ] },
    { k: 'ePolyCols', P: [3, 2, -1], Q: [1, -5, 4], ops: ['+', '−'], at: [.4, 1.2, 3.0, 5.2] }
  ],
  'c8-5': [
    { k: 'ePlane', x0: 36, y0: 12, xr: [0, 10], yr: [-2, 10], ux: 20, uy: 15, grid: 1, lx: 2, ly: 2, h: 208, at: [1.3, 2.3, 3.5], items: [
      { k: 'line', m: -1, n: 10, t: .3 }, { k: 'chip', x: 1.6, y: 9.6, s: 'x + y = 10', t: .6, fs: 11.5 },
      { k: 'line', m: 1, n: -2, t: .8, col: 'y' }, { k: 'chip', x: 8.6, y: 8.2, s: 'x − y = 2', t: 1.1, fs: 11.5, st: 'y' },
      { k: 'pt', x: 6, y: 4, t: 1.8, lab: '(6, 4)', lp: 'e', r: 6.5 }, { k: 'mark', x: 6, y: 4, ok: true, t: 2.2, dx: 0, dy: -18 },
      { k: 'pt', x: 7, y: 3, t: 3.0, lab: '(7, 3)', lp: 'e', col: 'r', open: true }, { k: 'mark', x: 7, y: 3, ok: false, t: 3.4, dx: 0, dy: 20 }
    ] },
    { k: 'ePlane', x0: 200, y0: 16, xr: [0, 20], yr: [0, 20], u: 5.4, grid: 5, lx: 10, ly: 10, fs: 9.5, h: 196, at: [.3, 1.1, 2.4, 3.4], items: [
      { k: 'line', m: -1, n: 20, t: 1.0 }, { k: 'line', m: 1, n: -6, t: 1.3, col: 'y' },
      { k: 'vline', x: 13, t: 2.4, col: 'r' }, { k: 'pt', x: 13, y: 7, t: 3.3, lab: '(13, 7)', lp: 'n', r: 6 }
    ], rows: [
      { s: 'x {g|+ y} = 20', x: 20, a: 's', y: 40, t: .6, st: { 0: 1.7 } },
      { s: 'x {r|− y} = 6', x: 20, a: 's', y: 74, t: .9, st: { 0: 1.7 } },
      { s: '2x = 26 → x = {u|13}', x: 20, a: 's', y: 124, t: 1.9 },
      { s: 'y = 20 − 13 = {y|7}', x: 20, a: 's', y: 170, t: 3.0 }
    ] },
    { k: 'ePlane', x0: 206, y0: 26, xr: [0, 6], yr: [0, 5], u: 17, lx: 1, ly: 1, h: 212, at: [.3, 1.3, 2.4, 3.4, 4.3], items: [
      { k: 'line', m: -2 / 3, n: 4, t: .5 }, { k: 'line', m: -1, n: 5, t: .8, col: 'y' }, { k: 'pt', x: 3, y: 2, t: 4.1, lab: '(3, 2)', lp: 'n' }
    ], rows: [
      { s: '2x + 3y = 12', x: 16, a: 's', y: 34, t: .2 },
      { s: 'x + y = 5', x: 16, a: 's', y: 64, t: .3 },
      { s: '{u|2x + 2y = 10}', x: 16, a: 's', y: 102, t: 1.1 },
      { s: 'restem: {u|y = 2}', x: 16, a: 's', y: 144, t: 2.2 },
      { s: 'x + 2 = 5 → {u|x = 3}', x: 16, a: 's', y: 184, t: 3.2 }
    ] },
    { k: 'eHeadsLegs', heads: 20, legs: 56, at: [.5, 1.4, 2.9, 4.4] }
  ],
  'c8-6': [
    { k: 'ePlane', x0: 36, y0: 16, xr: [-5, 5], yr: [-3, 3], u: 24, h: 184, at: [1.4, 2.6, 3.2], items: [
      { k: 'pt', x: 3, y: -2, t: 1.2, walk: true, lab: 'A(3, −2)', lp: 'w' },
      { k: 'pt', x: -4, y: 1, t: 2.4, walk: true, lab: 'B(−4, 1)', lp: 'n', col: 'y' },
      { k: 'quad', q: 4, t: 2.9, lab: '4t' }, { k: 'quad', q: 2, t: 3.1, lab: '2n', col: 'y' }
    ] },
    { k: 'eMachine', f: '3x − 2', runs: [{ x: 4, calc: '3 × 4 − 2 = 10', y: 10, t: .6 }, { x: -1, calc: '3 × (−1) − 2 = −5', y: -5, t: 2.8 }], at: [.3, 2.3, 4.5] },
    { k: 'ePlane', x0: 36, y0: 14, xr: [-1, 5], yr: [-1, 10], u: 17, lx: 1, ly: 2, h: 214, at: [.7, 2.0, 2.9, 4.5], items: [
      { k: 'pt', x: 1, y: 3, t: .3, lab: '(1, 3)', lp: 'e' }, { k: 'pt', x: 4, y: 9, t: .5, lab: '(4, 9)', lp: 'e' },
      { k: 'slope', p: [1, 3], run: 3, rise: 6, t: 1.0, steps: true },
      { k: 'line', m: 2, n: 1, t: 2.4, w: 2.5 },
      { k: 'cm', px: 250, py: 60, s: 'puja 6, avança 3', t: 1.9, fs: 12 }, { k: 'cm', px: 250, py: 92, s: 'm = 6 ÷ 3 = {u|2}', t: 2.6, fs: 13, st: 'y' },
      { k: 'line', m: -2, n: 5, t: 3.4, col: 'r', w: 2.5 }, { k: 'pt', x: 0, y: 5, t: 4.0, col: 'r', lab: 'n = 5', lp: 'w' },
      { k: 'cm', px: 250, py: 150, s: 'y = −2x + 5', t: 3.6, fs: 12.5, st: 'r' }, { k: 'cm', px: 250, py: 180, s: 'm = −2: baixa', t: 4.2, fs: 12 }
    ] },
    { k: 'ePlane', x0: 176, y0: 14, xr: [-2, 4], yr: [-4, 6], u: 16, lx: 1, ly: 2, h: 222, at: [.4, 2.4, 3.6, 4.8], items: [
      { k: 'table', px: 30, py: 14, head: ['x', 'y'], rows: [[-1, -3], [0, -1], [1, 1], [2, 3]], t: .6, dt: .35 },
      { k: 'pt', x: -1, y: -3, t: 1.0 }, { k: 'pt', x: 0, y: -1, t: 1.35 }, { k: 'pt', x: 1, y: 1, t: 1.7 }, { k: 'pt', x: 2, y: 3, t: 2.05 },
      { k: 'line', m: 2, n: -1, t: 2.3 }, { k: 'chip', x: 0.2, y: 5.2, s: 'y = 2x − 1', t: 2.5, fs: 11.5 },
      { k: 'pt', x: 3, y: 5, t: 3.3, col: 'g' }, { k: 'cm', px: 80, py: 170, s: '(3, 5): 2·3 − 1 = 5', t: 3.4, fs: 12 }, { k: 'mk', px: 152, py: 165, ok: true, t: 3.6 },
      { k: 'pt', x: 2, y: 4, t: 4.5, col: 'r', open: true }, { k: 'cm', px: 80, py: 204, s: '(2, 4): 2·2 − 1 = 3', t: 4.6, fs: 12 }, { k: 'mk', px: 152, py: 199, ok: false, t: 4.8 }
    ] }
  ],
  'c8-7': [
    { k: 'ePyth', a: 6, b: 8 },
    { k: 'eLadder', L: 13, d: 5, h: 12 },
    { k: 'eShadow', pole: 2, ps: 3, ts: 12 },
    { k: 'eVol', h: 196, at: [.6, 2.2, 3.0, 4.3, 5.0], items: [
      { k: 'prism', a: 4, b: 5, c: 3, x: 80, y: 150, u: 13, t: .3 },
      { k: 'chip', x: 80, y: 186, s: '20 × 3 = {u|60} cm³', t: 2.0, fs: 13 },
      { k: 'cyl', r: 2, h: 5, x: 236, y: 150, u: 17, t: 2.9 },
      { k: 'chip', x: 236, y: 186, s: '3,14 × 4 × 5 ≈ {u|62,8}', t: 4.5, fs: 12.5 }
    ] }
  ],
  'c8-8': [
    { k: 'eBarsStats', data: [7, 2, 9, 4, 12, 6], max: 12, tm: 1.4, ts: 2.6, tmed: 3.8, meanLab: '≈ 6,67', medLab: 'Me = 6,5', at: [.9, 1.6, 3.2, 4.1] },
    { k: 'eMissing', mean: 7, n: 4, have: [6, 8, 5], at: [.4, 1.2, 2.9, 3.9] },
    { k: 'eCoinTree', legend: true, at: [.4, 1.7, 2.6, 3.5], hl: [{ leaves: [1, 2], t: 2.3, lab: '2 de 4' }, { leaves: [1, 2], t: 3.2, lab: 'P = [2/4] = [1/2]' }] },
    { k: 'eDiceGrid', at: [1.3, 2.6, 3.4, 4.5], steps: [
      { set: 'sum', v: 7, t: 1.8, lab: 'suma 7: {u|6}', ly: 60 },
      { set: 'sum', v: 7, t: 3.2, col: 'u', lab: '[6/36] = {u|[1/6]}', ly: 100 },
      { set: 'sum', v: 12, t: 4.2, col: 'y', lab: 'suma 12: [1/36]', ly: 146 }
    ] }
  ],
  'c9-1': [
    { k: 'eFactors', h: 222, at: [1.9, 3.4, 5.0], items: [
      { k: 'div', b: 5, m: 2, n: 2, y: 36, x: 150, t: .2, res: '= 5^0 = {y|1}', lab: '5^2 ÷ 5^2' },
      { k: 'div', b: 2, m: 0, n: 2, y: 110, x: 150, t: 2.2, res: '= [1/4]', lab: '2^{−2} =' },
      { k: 'div', b: 10, m: 0, n: 3, y: 184, x: 118, t: 3.8, w: 28, res: '= [1/1.000]', lab: '10^{−3} =' },
      { k: 'row', s: '= {y|0,001}', x: 282, y: 192, t: 4.9, fs: 17 }
    ] },
    { k: 'eRows', h: 196, rows: [], at: [2.0, 2.5, 4.3, 4.9], add: [
      { p: 'sci', m: '32', e: 7, dir: 'in', x: 160, y: 50, t: .2, res: '= {u|3,2 × 10^7}', resY: 86 },
      { p: 'sci', m: '45', e: -4, dir: 'in', x: 160, y: 146, t: 3.2, res: '= {u|4,5 × 10^{−4}}', resY: 182 }
    ] },
    { k: 'eRows', h: 222, fs: 18, rows: [
      { s: '({u|5} × {y|10^3}) × ({u|4} × {y|10^2})', y: 32, t: .2 },
      { s: '= ({u|5} × {u|4}) × {y|10^{3+2}}', y: 78, t: 1.2, g: { 0: { from: '0.0' }, 1: { from: '0.2' }, 2: { from: '0.1' } } },
      { s: '= {u|20} × {y|10^5}', y: 124, t: 2.2 },
      { s: '{u|20} = 2 × {r|10} → 10^5 × {r|10} = 10^6', y: 168, t: 3.0, fs: 15 },
      { s: '= {y|2 × 10^6}', y: 210, t: 3.8 }
    ], at: [.4, 2.4, 3.2, 4.0] },
    { k: 'eRows', h: 226, fs: 15, rows: [
      { s: '5 < {y|√30} < 6', x: 214, y: 104, t: 1.8, fs: 16 },
      { s: '√72 = √(36 × 2)', x: 150, a: 's', y: 150, t: 2.8 },
      { s: '= √36 × √2', x: 150, a: 's', y: 182, t: 3.4 },
      { s: '= {y|6√2}', x: 150, a: 's', y: 214, t: 4.2, fs: 17 }
    ], add: [
      { p: 'sq', x: 24, y: 22, c: 11, n: 6, k: 5, t: .2, t2: .3, extra: 5, t3: .8, lab: '25 + 5 = 30', labT: 1.0 },
      { p: 'nl', x0: 130, x1: 296, y: 56, a: 5, b: 6, tick: .1, lab: 1, t: 1.3, big: [5, 6], pts: [[5.4772, 1.6, {}, '√30 ≈ 5,48', { st: 'y' }]] },
      { p: 'sq', x: 22, y: 138, c: 8, n: 6, t: 2.6, lab: '36', labT: 2.7 },
      { p: 'sq', x: 76, y: 138, c: 8, n: 6, t: 2.8, col: '#FFC93C', lab: '36', labT: 2.9 }
    ], at: [1.9, 3.5, 4.3] }
  ],
  'c9-2': [
    { k: 'ePolyCols', P: [2, 3, -1], Q: [1, -5, 4], names: null, mid: true, at: [1.2, 2.6, 3.8] },
    { k: 'eRows', h: 196, fs: 18, rows: [
      { s: '{f|x = −2}', x: 60, y: 36, t: .2 },
      { s: 'P(x) = {b|x}^2 − 3{b|x} + 1', x: 200, y: 36, t: .2 },
      { s: 'P(−2) = {u|(−2)}^2 − 3 × {u|(−2)} + 1', y: 100, t: 1.0, g: { 0: { from: '0.0' }, 1: { from: '0.0' } }, br: [[0, 0, '= 4', 1.8], [1, 1, '−3 × (−2) = +6', 2.1]] },
      { s: '= 4 {g|+ 6} + 1 = {y|11}', y: 180, t: 2.8 }
    ], at: [.3, 1.3, 3.0] },
    { k: 'eRows', h: 200, fs: 18, rows: [
      { s: '{u|3x}({p|2x} {p|− 5})', x: 26, a: 's', y: 38, t: .2, arcs: [[0, 1, .6, '', 14], [0, 2, .8, '', 18]] },
      { s: '= {u|6x^2} {r|− 15x}', after: 0, t: 1.2, g: { 0: { from: '0.1' }, 1: { from: '0.2' } } },
      { s: 'x^2 {r|− 2x} + 3x {r|− 6}', x: 176, a: 's', y: 130, t: 3.2, fs: 16 },
      { s: '= {y|x^2 + x − 6}', x: 176, a: 's', y: 168, t: 4.1, fs: 17 }
    ], add: [{ p: 'amodel', x: 60, y: 92, rs: [['x', 58], ['+3', 32]], cs: [['x', 58], ['−2', 26]], cells: [['x^2', '−2x'], ['3x', '−6']], t: 1.8, dt: .3 }],
      at: [1.4, 3.4, 4.3] },
    { k: 'eRows', h: 226, fs: 16, rows: [
      { s: '(x + 5)^2', x: 226, y: 42, t: .2, fs: 18 },
      { s: '= x^2 + {y|5x + 5x} + 25', x: 226, y: 84, t: 1.6, fs: 15 },
      { s: '= x^2 + {y|10x} + 25', x: 226, y: 118, t: 2.4 },
      { s: '(x − 3)^2 = x^2 {r|− 6x} + 9', y: 176, t: 3.3 },
      { s: '(x + 4)(x − 4) = x^2 {k|+ 4x − 4x} − 16', y: 212, t: 4.2, fs: 15, st: { 0: 4.8 } }
    ], add: [{ p: 'amodel', x: 26, y: 22, rs: [['x', 70], ['+5', 42]], cs: [['x', 70], ['+5', 42]], cells: [['x^2', '5x'], ['5x', '25']], t: .2, dt: .3 }],
      at: [1.9, 2.6, 3.5, 4.9] }
  ],
  'c9-3': [
    { k: 'eBalance', h: 204, at: [.4, 2.0, 3.0, 4.4], phases: [
      { t0: .2, dur: 1.3, eqs: ['5x + 3 = 2x + 15', '3x + 3 = 15', '3x = 12', 'x = {u|4}'],
        states: [{ L: { x: 5, u: 3 }, R: { x: 2, u: 15 } }, { L: { x: 3, u: 3 }, R: { u: 15 } }, { L: { x: 3 }, R: { u: 12 } }, { L: { x: 1 }, R: { u: 4 } }],
        steps: [{ op: 'rm', x: 2, lab: '−2x als dos costats' }, { op: 'rm', u: 3, lab: '−3 als dos costats' }, { op: 'div', d: 3, lab: '÷ 3' }] }
    ] },
    { k: 'ePlane', x0: 70, y0: 14, xr: [-3, 3], yr: [-1, 9], ux: 30, uy: 19, lx: 1, ly: 2, h: 222, at: [.5, 1.5, 2.4, 3.1], items: [
      { k: 'poly', c: [1, 0, 0], t: .3 }, { k: 'chip', x: 2.2, y: 8.6, s: 'y = x^2', t: .9, fs: 12, dx: 34 },
      { k: 'hline', y: 4, t: 1.3, col: 'r', lab: 'x^2 = 4', la: 's' },
      { k: 'pt', x: -2, y: 4, t: 2.2, guides: true, col: 'r' }, { k: 'pt', x: 2, y: 4, t: 2.2, guides: true, col: 'r' },
      { k: 'chip', x: -2, y: 0, s: 'x = −2', t: 2.9, fs: 12.5, st: 'y', dy: 22 }, { k: 'chip', x: 2, y: 0, s: 'x = 2', t: 2.9, fs: 12.5, st: 'y', dy: 22 }
    ] },
    { k: 'ePlane', x0: 40, y0: 12, xr: [-6, 4], yr: [-16, 4], ux: 24, uy: 9.5, gy: 2, lx: 1, ly: 4, h: 214, at: [.6, 1.9, 3.1], items: [
      { k: 'poly', c: [1, 2, -15], t: .3 }, { k: 'chip', x: -1, y: -12, s: '(x − 3)(x + 5)', t: .9, fs: 12, dy: 0 },
      { k: 'pt', x: 3, y: 0, t: 1.6, col: 'r', lab: 'x = 3', lp: 'ne', st: 'y' },
      { k: 'pt', x: -5, y: 0, t: 2.8, col: 'r', lab: 'x = −5', lp: 'ne', st: 'y' }
    ] },
    { k: 'eRows', h: 228, fs: 16, rows: [
      { s: 'x^2 + 2x − 15 = 0', y: 22, t: .1, fs: 18 },
      { s: '(x − 3)(x + 5) = 0', y: 194, t: 3.4, fs: 17 },
      { s: 'x = {y|3} o x = {y|−5}', y: 222, t: 4.2, fs: 17 }
    ], add: [
      { p: 'chip', x: 160, y: 50, s: 'r · s = {u|−15} i r + s = {u|−2}', t: .6, fs: 12.5 },
      { p: 'pairs', x: 70, y: 76, pairs: [[1, -15], [-1, 15], [3, -5], [-3, 5]], sum: -2, t: 1.0, dt: .45 }
    ], at: [.3, 2.9, 3.6, 4.4] }
  ],
  'c9-4': [
    { k: 'ePlane', x0: 40, y0: 12, xr: [0, 10], yr: [0, 10], ux: 20, uy: 17, lx: 2, ly: 2, h: 206, at: [.8, 2.0, 3.1, 3.8], items: [
      { k: 'line', m: -1, n: 10, t: .3 }, { k: 'chip', x: 1.8, y: 9.4, s: 'x + y = 10', t: .6, fs: 11.5 },
      { k: 'line', m: 1, n: -4, t: .6, col: 'y' }, { k: 'chip', x: 8.2, y: 5.6, s: 'x − y = 4', t: .9, fs: 11.5, st: 'y' },
      { k: 'pt', x: 6, y: 4, t: 1.5, col: 'r', open: true, lab: '(6, 4)', lp: 'w' }, { k: 'mark', x: 6, y: 4, ok: false, t: 1.9, dx: 0, dy: -20 },
      { k: 'pt', x: 7, y: 3, t: 2.7, lab: '(7, 3)', lp: 'e' }, { k: 'mark', x: 7, y: 3, ok: true, t: 3.0, dx: 0, dy: 22 }
    ] },
    { k: 'ePlane', x0: 214, y0: 24, xr: [0, 4], yr: [0, 6], u: 22, h: 212, at: [.4, 1.3, 2.5, 3.6], items: [
      { k: 'line', m: -1.5, n: 6, t: .4 }, { k: 'line', m: 1, n: 1, t: .7, col: 'y' }, { k: 'pt', x: 2, y: 3, t: 3.7, lab: '(2, 3)', lp: 'e', st: 'y' }
    ], rows: [
      { s: '3x {g|+ 2y} = 12', x: 14, a: 's', y: 34, t: .2, st: { 0: 2.0 } },
      { s: 'x − y = −1', x: 14, a: 's', y: 64, t: .3 },
      { s: '× 2: {u|2x} {r|− 2y} = {u|−2}', x: 14, a: 's', y: 102, t: 1.1, st: { 1: 2.0 } },
      { s: 'sumem: {u|5x = 10}', x: 14, a: 's', y: 142, t: 2.2 },
      { s: '→ {u|x = 2}', x: 14, a: 's', y: 166, t: 2.5 },
      { s: '2 − y = −1 → {u|y = 3}', x: 14, a: 's', y: 200, t: 3.3 }
    ] },
    { k: 'eRows', h: 214, fs: 19, rows: [
      { s: '2x − 3 > 7', y: 30, t: .2 },
      { s: '2x > 10', y: 64, t: 1.0 },
      { s: '{y|x > 5}', y: 98, t: 1.8 }
    ], add: [
      { p: 'chip', x: 250, y: 64, s: '+3', t: .8, fs: 12, st: 'g' }, { p: 'chip', x: 250, y: 98, s: '÷ 2', t: 1.6, fs: 12, st: 'f' },
      { p: 'nl', y: 158, a: 0, b: 10, x0: 30, x1: 280, tick: 1, lab: 1, t: 2.0, big: [5], ray: [5, 1, false, 2.3] },
      { p: 'mark', x: 160, y: 196, ok: false, t: 3.8, sz: 9 }, { p: 'm', x: 172, y: 201, s: 'el 5 no', fs: 12, a: 's', t: 3.8, fill: '#E4574B' },
      { p: 'chip', x: 190, y: 134, s: '5,1 ✓', t: 3.2, fs: 11.5, st: 'g' }, { p: 'chip', x: 274, y: 134, s: '100 ✓', t: 3.5, fs: 11.5, st: 'g' }
    ], at: [.3, 1.1, 2.3, 3.8] },
    { k: 'eRows', h: 222, fs: 19, rows: [
      { s: '−3x > 12', y: 30, t: .2 },
      { s: 'x {p|<} 12 ÷ (−3)', y: 70, t: 1.0, g: { 0: { t: 1.7, cls: 'ae-fx' } } },
      { s: '{y|x < −4}', y: 132, t: 2.4 }
    ], add: [
      { p: 'chip', x: 160, y: 102, s: 'dividim per un negatiu: el signe es gira', t: 1.3, fs: 11.5, st: 'r' },
      { p: 'nl', y: 178, a: -8, b: 0, x0: 30, x1: 290, tick: 1, lab: 1, t: 2.6, big: [-4], ray: [-4, -1, false, 2.9], pts: [[-5, 3.6, { fill: '#2E9E5B' }]] },
      { p: 'chip', x: 130, y: 218, s: 'x = −5: −3 · (−5) = 15 > 12 ✓', t: 3.8, fs: 12, st: 'g' }
    ], at: [.3, 1.8, 2.6, 4.0] }
  ],
  'c9-5': [
    { k: 'eRows', h: 214, rows: [], at: [1.4, 2.4, 3.2], add: [
      { p: 'seq', x0: 23, y: 58, terms: [3, 7, 11, 15, 19], op: '+4', t: .2, dt: .35, next: [4], nextT: 3.0, sub: ['a_1', 'a_2', 'a_3', 'a_4', 'a_5'], subT: 2.2, bars: { y: 200, h: 96, max: 19 } }
    ] },
    { k: 'eRows', h: 214, rows: [], at: [1.4, 1.9, 2.9], add: [
      { p: 'seq', x0: 23, y: 58, terms: [20, 17, 14, 11, 8], op: '−3', t: .2, dt: .35, next: [4], nextT: 2.7, bars: { y: 200, h: 96, max: 20 } },
      { p: 'chip', x: 160, y: 104, s: 'd = 17 − 20 = {r|−3}', t: 1.7, fs: 13.5, st: 'o' }
    ] },
    { k: 'eRows', h: 214, fs: 17, rows: [
      { s: 'a_n = 3 + {u|(n − 1)} × 4 = {y|4n − 1}', y: 94, t: 1.3 }
    ], at: [.9, 1.6, 4.9], add: [
      { p: 'seq', x0: 50, y: 42, terms: [3, 7, 11, 15], op: '+4', t: .1, dt: .2, bw: 38, gap: 14 },
      { p: 'nl', y: 168, a: 0, b: 80, x0: 22, x1: 296, tick: 4, lab: 20, t: 2.0, fs: 11, jumps: { from: 3, step: 4, n: 19, t0: 2.3, dt: .12, h: 9 }, pts: [[3, 2.2], [79, 4.7, { fill: '#FFC93C', stroke: '#2B1A38' }]] },
      { p: 'chip', x: 40, y: 142, s: 'a_1', t: 2.2, fs: 11.5 },
      { p: 'chip', x: 236, y: 132, s: '19 salts de 4 → a_{20} = {u|79}', t: 4.7, fs: 12.5, st: 'y' }
    ] },
    { k: 'eRows', h: 214, rows: [], at: [1.4, 1.8, 3.0, 4.2], add: [
      { p: 'seq', x0: 12, y: 58, terms: [2, 6, 18, 54, 162, 486], op: '×3', t: .2, dt: .3, bw: 40, gap: 12, fs: 15, next: [4, 5], nextT: [2.8, 3.8], sub: ['a_1', '', '', '', '', 'a_6'], subT: 3.8, bars: { y: 204, h: 100, max: 486 } },
      { p: 'chip', x: 90, y: 118, s: 'r = 6 ÷ 2 = {u|3}', t: 1.6, fs: 13 },
      { p: 'chip', x: 96, y: 150, s: 'a_6 = 2 × 3^5 = 2 × 243 = {y|486}', t: 4.0, fs: 12.5 }
    ] }
  ],
  'c9-6': [
    { k: 'ePlane', x0: 60, y0: 14, xr: [-1, 4], yr: [-1, 10], u: 17, lx: 1, ly: 2, h: 214, at: [.5, 1.7, 2.9], items: [
      { k: 'line', m: 3, n: 1, t: .3 }, { k: 'chip', x: 3.2, y: 9.5, s: 'y = 3x + 1', t: .6, fs: 11.5, dx: 26 },
      { k: 'pt', x: 2, y: 7, t: 1.3, guides: true, lab: '(2, 7)', lp: 'e' }, { k: 'cm', px: 250, py: 80, s: '3 · 2 + 1 = 7', t: 1.5, fs: 12.5 }, { k: 'mk', px: 250, py: 106, ok: true, t: 1.7 },
      { k: 'pt', x: 1, y: 5, t: 2.4, col: 'r', open: true, lab: '(1, 5)', lp: 'w' }, { k: 'pt', x: 1, y: 4, t: 2.7, col: 'g', r: 4 },
      { k: 'cm', px: 250, py: 150, s: '3 · 1 + 1 = 4 ≠ 5', t: 2.6, fs: 12.5, st: 'r' }, { k: 'mk', px: 250, py: 176, ok: false, t: 2.8 }
    ] },
    { k: 'ePlane', x0: 50, y0: 14, xr: [-1, 4], yr: [-1, 8], u: 20, lx: 1, ly: 1, h: 206, at: [.5, 1.9, 3.2, 3.9], items: [
      { k: 'pt', x: 1, y: 3, t: .3, lab: '(1, 3)', lp: 'nw' }, { k: 'pt', x: 3, y: 7, t: .5, lab: '(3, 7)', lp: 'e' },
      { k: 'slope', p: [1, 3], run: 2, rise: 4, t: 1.0, rl: 'avança 2', ul: 'puja 4' },
      { k: 'cm', px: 250, py: 70, s: 'm = 4 ÷ 2 = {u|2}', t: 1.8, fs: 13 },
      { k: 'line', m: 2, n: 1, t: 2.5, w: 2.5 }, { k: 'pt', x: 0, y: 1, t: 3.0, col: 'y', lab: 'n = 1', lp: 'w' },
      { k: 'cm', px: 250, py: 150, s: 'y = 2x + 1', t: 3.7, fs: 14, st: 'y' }
    ] },
    { k: 'ePlane', x0: 50, y0: 14, xr: [-2, 5], yr: [-2, 9], ux: 26, uy: 17, lx: 1, ly: 2, h: 212, at: [.6, 1.7, 2.8], items: [
      { k: 'poly', c: [1, -4, 3], t: .3 }, { k: 'chip', x: 4.4, y: 7.6, s: 'f(x)', t: .9, fs: 11.5, dx: 16 },
      { k: 'pt', x: -1, y: 8, t: 1.5, guides: true, lab: 'f(−1) = 8', lp: 'e' },
      { k: 'pt', x: 0, y: 3, t: 2.6, col: 'y', lab: '(0, 3)', lp: 'e', st: 'y' }
    ] },
    { k: 'ePlane', x0: 50, y0: 14, xr: [-2, 5], yr: [-2, 9], ux: 26, uy: 17, lx: 1, ly: 2, h: 212, at: [.5, 1.6, 2.5, 3.1], items: [
      { k: 'poly', c: [1, -4, 3], t: .3 },
      { k: 'pt', x: 0, y: 3, t: 1.0, r: 4.5 }, { k: 'pt', x: 4, y: 3, t: 1.1, r: 4.5 }, { k: 'seg', p: [0, 3, 4, 3], t: 1.1, col: 'k', w: 1.6, dash: '4 3' },
      { k: 'vline', x: 2, t: 1.4, col: 'r', lab: 'x = 2' },
      { k: 'pt', x: 2, y: -1, t: 2.4, col: 'y', lab: 'V(2, −1)', lp: 'e', st: 'y', r: 6.5 }
    ] }
  ],
  'c9-7': [
    { k: 'eLadder', L: 5, d: 3, h: 4, hyp: true, at: [1.0, 1.7, 3.1, 3.6] },
    { k: 'ePythCheck', tris: [[6, 8, 10], [5, 6, 8]], at: [1.3, 2.0, 3.7, 4.4] },
    { k: 'eShadow', pole: 2, ps: 3, ts: 15 },
    { k: 'eVol', h: 214, at: [.8, 2.0, 3.0, 4.0], items: [
      { k: 'cone', r: 3, h: 4, x: 80, y: 152, u: 14, t: .3, fillT: 1.2 },
      { k: 'chip', x: 80, y: 200, s: '9π × 4 ÷ 3 ≈ {u|37,68} cm³', t: 1.8, fs: 12 },
      { k: 'sphere', r: 3, x: 236, y: 110, u: 14, t: 2.8 },
      { k: 'chip', x: 236, y: 200, s: '[4/3] × 3,14 × 27 ≈ {u|113,04}', t: 3.8, fs: 11.5 }
    ] }
  ],
  'c9-8': [
    { k: 'eMenu', cols: [[3, '1r plat'], [4, '2n plat'], [2, 'postres']], at: [.8, 2.8, 4.4] },
    { k: 'eDiceGrid', head: '', at: [1.1, 1.8, 2.9, 4.0], steps: [
      { set: 'sum', v: 7, t: .5, out: 2.3 }, { set: 'no6', col: 'k', t: 2.4 }, { set: 'has6', col: 'r', t: 3.4 }
    ], chips: [['suma 7: {u|6} casos', 40, 1.0], ['[6/36] = {u|[1/6]}', 78, 1.7], ['cap 6: 5 × 5 = 25', 120, 2.8], ['1 − [25/36] = {r|[11/36]}', 160, 3.9, 'y']] },
    { k: 'eBag', a: 3, b: 2, ca: 'r', cb: 'b', naS: 'vermella', naP: 'vermelles', res: ['[3/5] × [2/4] = [6/20]', '= {u|[3/10]}'], at: [.5, 3.3, 5.5] },
    { k: 'eBarsStats', data: [10, 3, 9, 5, 8, 1], max: 10, tm: 1.3, ts: 2.4, tmed: 3.6, meanLab: '6', medLab: 'Me = 6,5', at: [.9, 1.5, 3.1, 3.9] }
  ],
  'c10-1': [
    { k: 'ePlane', x0: 40, y0: 16, xr: [0, 5], yr: [-1, 6], ux: 44, uy: 25, lx: 1, ly: 1, h: 212, at: [.5, 1.5, 2.6, 3.4], items: [
      { k: 'poly', c: [1, -5, 6], t: .3 }, { k: 'chip', x: 1.2, y: 5.2, s: 'y = x^2 − 5x + 6', t: .8, fs: 11.5, dx: 40 },
      { k: 'chip', x: 3.3, y: 3.3, s: 'Δ = 1 > 0 → 2 solucions', t: 1.3, fs: 11.5, st: 'y' },
      { k: 'vline', x: 2.5, t: 2.1, col: 'y', lab: '5 ÷ 2' },
      { k: 'svg', s: '' },
      { k: 'pt', x: 2, y: 0, t: 2.9, col: 'r', lab: 'x₂ = 2', lp: 'sw' }, { k: 'pt', x: 3, y: 0, t: 3.2, col: 'r', lab: 'x₁ = 3', lp: 'se' },
      { k: 'chip', x: 2.5, y: 2.1, s: '(5 ± 1) ÷ 2', t: 2.4, fs: 12 }
    ] },
    { k: 'ePlane', x0: 196, y0: 64, xr: [0, 7], yr: [-3, 6], ux: 16, uy: 12, lx: 1, ly: 3, fs: 9, t: 2.6, h: 226, at: [.3, 1.0, 2.4, 3.6], items: [
      { k: 'poly', c: [1, -7, 10], t: 2.8 }, { k: 'pt', x: 2, y: 0, t: 3.3, col: 'r', r: 5 }, { k: 'pt', x: 5, y: 0, t: 3.4, col: 'r', r: 5 },
      { k: 'blk', b: { p: 'pairs', x: 10, y: 92, pairs: [[1, 10], [2, 5]], sum: 7, t: 1.1, dt: .5, cw: [88, 48] } }
    ], rows: [
      { s: 'x^2 − 7x + 10 = 0', y: 26, t: .1, fs: 18 },
      { s: 'sumen {u|7}, multipliquen {u|10}', x: 96, y: 60, t: .8, fs: 13 },
      { s: '(x − 2)(x − 5) = 0', x: 96, y: 184, t: 3.0, fs: 15 },
      { s: 'x = {y|2} i x = {y|5}', x: 96, y: 214, t: 3.5, fs: 16 }
    ] },
    { k: 'eRows', h: 226, fs: 16, rows: [
      { s: '2x − 3 < 7 → 2x < 10 → {y|x < 5}', y: 24, t: .2 },
      { s: '−3x ≥ 12 → x {p|≤} 12 ÷ (−3)', y: 110, t: 2.0, g: { 0: { t: 2.8, cls: 'ae-fx' } } },
      { s: '{y|x ≤ −4} → (−∞, −4]', y: 166, t: 3.6 }
    ], add: [
      { p: 'nl', y: 62, a: -6, b: 6, x0: 30, x1: 290, tick: 1, lab: 2, t: .6, big: [5], ray: [5, -1, false, .9], labs: [-6, -4, -2, 0, 2, 4, 5, 6] },
      { p: 'chip', x: 160, y: 138, s: 'dividim per −3: el signe es gira', t: 2.4, fs: 11.5, st: 'r' },
      { p: 'nl', y: 198, a: -6, b: 6, x0: 30, x1: 290, tick: 1, lab: 2, t: 3.4, big: [-4], ray: [-4, -1, true, 3.8] }
    ], at: [1.0, 2.9, 4.2] },
    { k: 'ePlane', x0: 194, y0: 30, xr: [0, 9], yr: [0, 9], u: 12.5, lx: 3, ly: 3, h: 180, at: [.5, 1.9, 2.8, 3.6], items: [
      { k: 'line', m: -1, n: 9, t: .4 }, { k: 'line', m: 1, n: -3, t: .7, col: 'y' }, { k: 'pt', x: 6, y: 3, t: 3.4, lab: '(6, 3)', lp: 'n', st: 'y' }
    ], rows: [
      { s: 'x {g|+ y} = 9', x: 16, a: 's', y: 40, t: .2, st: { 0: 1.5 } },
      { s: 'x {r|− y} = 3', x: 16, a: 's', y: 70, t: .3, st: { 0: 1.5 } },
      { s: 'sumem: 2x = 12', x: 16, a: 's', y: 112, t: 1.3 },
      { s: '→ {u|x = 6}', x: 16, a: 's', y: 138, t: 1.8 },
      { s: '6 + y = 9 → {u|y = 3}', x: 16, a: 's', y: 172, t: 2.6 }
    ] }
  ],
  'c10-2': [
    { k: 'ePlane', x0: 60, y0: 14, xr: [-1, 4], yr: [0, 10], u: 18, lx: 1, ly: 2, h: 212, at: [.6, 1.9, 3.1, 3.7], items: [
      { k: 'pt', x: 1, y: 5, t: .3, lab: '(1, 5)', lp: 'nw' }, { k: 'pt', x: 3, y: 9, t: .5, lab: '(3, 9)', lp: 'e' },
      { k: 'slope', p: [1, 5], run: 2, rise: 4, t: 1.0, rl: '2', ul: '4' },
      { k: 'cm', px: 250, py: 60, s: 'm = 4 ÷ 2 = {u|2}', t: 1.8, fs: 13 },
      { k: 'line', m: 2, n: 3, t: 2.4, w: 2.5 }, { k: 'pt', x: 0, y: 3, t: 3.0, col: 'y', lab: 'n = 3', lp: 'w' },
      { k: 'cm', px: 250, py: 140, s: 'y = 2x + 3', t: 3.6, fs: 14, st: 'y' }
    ] },
    { k: 'ePlane', x0: 40, y0: 12, xr: [-3, 4], yr: [-5, 6], ux: 24, uy: 17, lx: 1, ly: 1, h: 206, at: [.5, 1.9, 2.6], items: [
      { k: 'poly', c: [1, -2, -3], t: .3 },
      { k: 'pt', x: -2, y: 5, t: 1.6, guides: true, lab: '(−2, 5)', lp: 'e' },
      { k: 'cm', px: 262, py: 50, s: '(−2)^2 = 4', t: 1.2, fs: 12.5 }, { k: 'cm', px: 262, py: 84, s: '−2 × (−2) = +4', t: 1.7, fs: 12 }, { k: 'cm', px: 262, py: 120, s: '4 + 4 − 3 = {u|5}', t: 2.3, fs: 13, st: 'y' }
    ] },
    { k: 'ePlane', x0: 40, y0: 12, xr: [-3, 4], yr: [-5, 6], ux: 24, uy: 17, lx: 1, ly: 1, h: 206, at: [.5, 1.5, 2.4, 3.1], items: [
      { k: 'poly', c: [1, -2, -3], t: .3 },
      { k: 'vline', x: 1, t: 1.2, col: 'r', lab: 'x = 1' },
      { k: 'pt', x: 1, y: -4, t: 2.2, col: 'y', lab: 'V(1, −4)', lp: 'e', st: 'y', r: 6.5 },
      { k: 'cm', px: 268, py: 60, s: 'x = [2/2] = 1', t: 1.4, fs: 12.5 }, { k: 'cm', px: 268, py: 100, s: 'f(1) = −4', t: 2.3, fs: 12.5 }, { k: 'cm', px: 268, py: 140, s: 'mínim', t: 3.0, fs: 13, st: 'f' }
    ] },
    { k: 'ePlane', x0: 40, y0: 12, xr: [-3, 4], yr: [-5, 6], ux: 24, uy: 17, lx: 1, ly: 1, h: 206, at: [.5, 1.4, 2.4, 2.9], items: [
      { k: 'poly', c: [1, -2, -3], t: .3 },
      { k: 'pt', x: 0, y: -3, t: 1.2, col: 'y', lab: '(0, −3)', lp: 'e', st: 'y' },
      { k: 'pt', x: -1, y: 0, t: 2.2, col: 'r', lab: '(−1, 0)', lp: 'nw' }, { k: 'pt', x: 3, y: 0, t: 2.5, col: 'r', lab: '(3, 0)', lp: 'ne' },
      { k: 'cm', px: 270, py: 150, s: 'eix y: x = 0', t: 1.2, fs: 12 }, { k: 'cm', px: 270, py: 184, s: 'eix x: y = 0', t: 2.1, fs: 12, st: 'r' }
    ] }
  ],
  'c10-3': [
    { k: 'ePct', max: 240, W: 210, h: 214, at: [.4, 1.8, 3.6, 4.2], items: [
      { k: 'up', y: 40, base: 200, pct: 10, t: .3, lab: '200 €, puja un 10 %', idx: '× 1,1' },
      { k: 'down', y: 122, base: 220, pct: 10, t: 2.1, lab: '220 €, baixa un 10 %', idx: '× 0,9' },
      { k: 'svg', s: '<line x1="197" x2="197" y1="26" y2="160" stroke="#2B1A38" stroke-width="1.6" stroke-dasharray="4 4" class="an a-fade" style="--t:3.40s"/><text x="197" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#8E829A" font-family="Lexend,sans-serif" class="an a-fade" style="--t:3.40s">200 €</text>' },
      { k: 'row', s: '1,1 × 0,9 = 0,99 → {r|1 % menys}', y: 204, t: 3.9 }
    ] },
    { k: 'ePct', max: 84, W: 240, h: 170, at: [.5, 1.4, 2.4, 3.3], items: [
      { k: 'row', s: 'inicial × 0,85 = 68', x: 160, y: 24, t: 1.2, fs: 14 },
      { k: 'rev', y: 52, fin: 68, pct: 85, t: .3 },
      { k: 'row', s: 'comprova: 80 × 0,85 = {u|68 €}', y: 156, t: 3.1, fs: 14 }
    ] },
    { k: 'eInterest', C: 2000, r: 3, years: 4, at: [.9, 3.2, 4.3] },
    { k: 'eShare', total: 900, parts: [2, 3, 4], at: [.4, 1.2, 3.8, 4.4] }
  ],
  'c10-4': [
    { k: 'eTrig', mode: 'sin', at: [.3, 1.4, 2.6] },
    { k: 'eTrig', mode: 'cos', at: [.3, 1.8, 3.4] },
    { k: 'eTrig', mode: 'tan', at: [.3, 1.9, 3.9] },
    { k: 'eTrig', mode: 'ramp', at: [.5, 1.7, 2.5, 3.5] }
  ],
  'c10-5': [
    { k: 'ePyth', a: 5, b: 12, leg: [10, 6, 4.2] },
    { k: 'eVol', h: 226, at: [.5, 1.5, 2.2, 4.7], items: [
      { k: 'net', r: 2, h: 5, x: 34, y: 150, u: 9, t: .3 },
      { k: 'chip', x: 100, y: 212, s: '8π + 20π = 28π ≈ {u|87,96} cm²', t: 2.0, fs: 12 },
      { k: 'cyl', r: 2, h: 5, x: 250, y: 160, u: 14, t: 2.7 },
      { k: 'chip', x: 250, y: 212, s: '20π ≈ {u|62,83} cm³', t: 4.5, fs: 12 }
    ] },
    { k: 'eVol', h: 222, at: [.8, 1.4, 3.1, 3.9, 4.6], items: [
      { k: 'semi', r: 4, x: 76, y: 92, u: 13, t: .3 },
      { k: 'chip', x: 76, y: 128, s: '[π · 4^2/2] = 8π ≈ {u|25,13}', t: 1.2, fs: 12 },
      { k: 'sphere', r: 6, x: 240, y: 76, u: 10, t: 2.2 },
      { k: 'chip', x: 102, y: 176, s: 'A = 4π · 6^2 = 144π', t: 3.0, fs: 12.5 },
      { k: 'chip', x: 102, y: 210, s: 'V = [4/3]π · 6^3 = 288π', t: 3.8, fs: 12.5 },
      { k: 'chip', x: 256, y: 176, s: '≈ 452,39 cm²', t: 4.5, fs: 12.5, st: 'y' }, { k: 'chip', x: 256, y: 210, s: '≈ {u|904,78} cm³', t: 4.6, fs: 12.5, st: 'y' }
    ] },
    { k: 'eShadow', pole: 1, ps: .8, ts: 12, obj: 'building' }
  ],
  'c10-6': [
    { k: 'eRows', h: 226, fs: 16, rows: [
      { s: '= x^2 + {y|6x} + 9', x: 150, a: 's', y: 66, t: 1.7 },
      { s: '(x − 3)^2 = x^2 {r|− 6x} + 9', y: 150, t: 2.4 },
      { s: '(x + 4)(x − 4) = x^2 {k|+ 4x − 4x} − 16', y: 184, t: 3.2, fs: 15, st: { 0: 3.7 } },
      { s: '21 × 19 = 20^2 − 1^2 = 400 − 1 = {y|399}', y: 218, t: 4.2, fs: 15 }
    ], add: [{ p: 'amodel', x: 30, y: 20, rs: [['x', 62], ['+3', 32]], cs: [['x', 62], ['+3', 32]], cells: [['x^2', '3x'], ['3x', '9']], t: .2, dt: .3 }],
      at: [1.8, 2.6, 3.8, 4.4] },
    { k: 'eRows', h: 226, fs: 16, rows: [
      { s: 'a_{20} = 5 + 19 × 3 = {y|62}', x: 20, a: 's', y: 94, t: 1.6 },
      { s: 'a_6 = 3 × 2^5 = 3 × 32 = {y|96}', y: 218, t: 4.4 }
    ], at: [1.3, 2.0, 3.0, 4.6], add: [
      { p: 'seq', x0: 20, y: 44, terms: [5, 8, 11], op: '+3', t: .2, dt: .35, bw: 38, gap: 14 },
      { p: 'chip', x: 230, y: 44, s: 'd = {u|3}', t: 1.2, fs: 13 },
      { p: 'seq', x0: 10, y: 160, terms: [3, 6, 12, 24, 48, 96], op: '×2', t: 2.2, dt: .3, bw: 40, gap: 12, next: [3, 4, 5], nextT: [3.6, 3.8, 4.0], sub: ['a_1', '', '', '', '', 'a_6'], subT: 4.0 },
      { p: 'chip', x: 270, y: 94, s: 'r = {u|2}', t: 2.9, fs: 13 }
    ] },
    { k: 'eFactors', h: 228, at: [1.9, 3.1, 5.2, 5.8], items: [
      { k: 'mul', b: 2, m: 3, n: 4, y: 30, x: 140, t: .2, w: 18, res: '= 2^7 = {u|128}', nobr: true },
      { k: 'pow', b: 2, m: 3, n: 2, y: 88, x: 120, t: 2.0, w: 20, res: '= 2^6 = {u|64}' },
      { k: 'div', b: 2, m: 3, n: 5, y: 164, x: 110, t: 3.6, res: '= 2^{−2} = {y|[1/4]}' },
      { k: 'row', s: 'comprova: 8 ÷ 32 = [1/4]', x: 160, y: 220, t: 5.6, fs: 13 }
    ] },
    { k: 'eRows', h: 222, rows: [
      { s: '({u|6} × {y|10^5}) × ({u|3} × {y|10^4}) = {u|18} × {y|10^9}', y: 156, t: 3.4, fs: 15 },
      { s: '= {u|1,8} × 10 × 10^9 = {y|1,8 × 10^{10}}', y: 204, t: 4.4, fs: 15 }
    ], add: [
      { p: 'sci', m: '35', e: 5, dir: 'in', x: 96, y: 40, fs: 18, t: .2, res: '= {u|3,5 × 10^5}', resX: 236, resY: 40 },
      { p: 'sci', m: '72', e: -4, dir: 'in', x: 96, y: 100, fs: 18, t: 1.9, res: '= {u|7,2 × 10^{−4}}', resX: 236, resY: 100 }
    ], at: [1.6, 3.1, 3.8, 4.8] }
  ],
  'c10-7': [
    { k: 'eBarsStats', data: [3, 5, 7, 9, 21], max: 21, tm: 1.3, tmed: 2.4, meanLab: '9', medLab: 'Me = 7', at: [.8, 1.5, 2.6] },
    { k: 'eMissing', mean: 6, n: 4, have: [4, 5, 8], at: [.4, 1.2, 2.9, 4.3] },
    { k: 'eBag', a: 4, b: 6, ca: 'w', cb: 'k', naS: 'blanca', naP: 'blanques', res: ['[4/10] × [3/9] = [12/90]', '= {u|[2/15]} ≈ 0,13'], at: [.5, 4.1, 4.7, 5.5] },
    { k: 'eCombo', n: 6, r: 3, at: [.6, 2.3, 4.3, 5.3] }
  ]
});
/* @@END */
