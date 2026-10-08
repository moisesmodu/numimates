/* ===== Numi Tech · Tech 3D: el motor del taller 3D (Nivell 1 «amb el dit» i Nivell 2 «amb codi») =====
   Contracte: scripts/TECH-3D.md. Aquest fitxer és un script global (prefix m3 / M3) i la part de càlcul funciona també
   a Node (vm), sense navegador, perquè el validador pugui comprovar les solucions dels reptes:
   · El MODEL: peces { id, t, s:[x,y,z], p:[x,y,z] (centre), r:[rx,ry,rz] (graus), m? (matriu 4×4), c, hole, g, top, w, n }.
     m3Tree(model) el converteix en un arbre CSG { op: 'union'|'diff'|'inter', kids } / { prim }.
   · PERTINENÇA: m3Inside(peça, x, y, z) i m3In(arbre, x, y, z) són la font de veritat. Les formes canòniques (centrades a
     l'origen, dins la caixa s) són les mateixes que dibuixa el renderitzador (tech-model3d.js, font scripts/3d/model3d.mjs).
     Gir: primer X, després Y, després Z, al voltant del centre de la peça i d'eixos fixos → R = Rz · Ry · Rx
     (com rotate([x, y, z]) d'OpenSCAD; a three.js és Euler(rx, ry, rz, 'ZYX')).
   · COMPROVACIONS: es «voxelitza» l'arbre en una quadrícula adaptativa (cada fulla només recorre les cel·les de la seva
     caixa) i se'n treuen el volum, la caixa, la base, les peces connectades, la simetria, els forats i el gruix de paret.
     Amb això m3Check(model, checks) marca cada comprovació en directe (< 30 ms en un model típic).
   · NIVELL 2: un llenguatge propi (blocs ⇄ text estil OpenSCAD en català/castellà), amb analitzador d'expressions sense
     eval, avaluador → arbre CSG (girs i moviments al voltant de l'origen amb la matriu m), sortida en text i en .scad.
   · INTERFÍCIE: editor de peces (M3ED), editor de blocs i codi (M3PG), vista 3D (tech-model3d.js, càrrega diferida) amb
     una vista isomètrica en SVG si no hi ha WebGL, tipus de pas (m3look, m3build, m3code, m3predict, m3spot, m3fix,
     m3free), demos (TMEDIA.model), portafoli (TPORT.model) i validació (TVALID). */

/* ---------- Text bilingüe (també a Node, on potser no hi ha L ni tx) ---------- */
const m3L = (ca, es) => typeof L === 'function' ? L(ca, es) : ca;
const m3T = v => v == null ? '' : typeof v === 'function' ? v() : typeof tx === 'function' ? tx(v) : String(v).split('|')[0];
const m3Esc = s => typeof esc === 'function' ? esc(s) : String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const m3Clone = o => JSON.parse(JSON.stringify(o, (k, v) => k[0] === '_' ? undefined : v));
const m3R = (v, d = 2) => { const k = 10 ** d; return Math.round(v * k) / k; };

/* ---------- Matrius 4 × 4 (ordre de columnes, com three.js Matrix4.elements) ---------- */
const M3M = {
  id: () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  mul(a, b) { const o = new Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; },
  t: (x, y, z) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1],
  s: (x, y, z) => [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1],
  rx(d) { const a = d * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]; },
  ry(d) { const a = d * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]; },
  rz(d) { const a = d * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; },
  // gir d'Euler: primer X, després Y, després Z (eixos fixos) → Rz · Ry · Rx
  rot(r) { r = r || [0, 0, 0]; return M3M.mul(M3M.rz(r[2] || 0), M3M.mul(M3M.ry(r[1] || 0), M3M.rx(r[0] || 0))); },
  // inversa d'una matriu afí (la fila de baix és 0 0 0 1)
  inv(m) {
    const a = m[0], b = m[4], c = m[8], d = m[1], e = m[5], f = m[9], g = m[2], h = m[6], i = m[10];
    const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, det = a * A + b * B + c * C;
    if (!det || !isFinite(det)) return null;
    const r = [A / det, B / det, C / det, 0, -(b * i - c * h) / det, (a * i - c * g) / det, -(a * h - b * g) / det, 0, (b * f - c * e) / det, -(a * f - c * d) / det, (a * e - b * d) / det, 0, 0, 0, 0, 1];
    const tx0 = m[12], ty0 = m[13], tz0 = m[14];
    r[12] = -(r[0] * tx0 + r[4] * ty0 + r[8] * tz0); r[13] = -(r[1] * tx0 + r[5] * ty0 + r[9] * tz0); r[14] = -(r[2] * tx0 + r[6] * ty0 + r[10] * tz0);
    return r;
  },
  ap: (m, x, y, z) => [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]],
  // la matriu d'una peça del Nivell 1: moure al centre p i girar r (al voltant del centre)
  part: pr => pr.m ? pr.m : M3M.mul(M3M.t(...(pr.p || [0, 0, 0])), M3M.rot(pr.r)),
  // angles d'Euler (X, després Y, després Z) d'una matriu de gir pura
  euler(m) {
    const r20 = m[2], r21 = m[6], r22 = m[10], r10 = m[1], r00 = m[0];
    const ry = Math.asin(Math.max(-1, Math.min(1, -r20))); let rx, rz;
    if (Math.abs(r20) < 0.99999) { rx = Math.atan2(r21, r22); rz = Math.atan2(r10, r00); } else { rx = Math.atan2(-m[9], m[5]); rz = 0; }
    const d = v => { let a = m3R(v * 180 / Math.PI, 2); if (Object.is(a, -0)) a = 0; if (a <= -180) a += 360; return a; };
    return [d(rx), d(ry), d(rz)];
  }
};

/* ---------- Formes canòniques ----------
   Totes centrades a l'origen i dins la caixa de mides s (a, b, c són les meitats). */
const M3_TYPES = ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'torus', 'tube', 'star', 'heart', 'hex'];
// el cor: la corba clàssica x = 16 sin³t, y = 13 cos t − 5 cos 2t − 2 cos 3t − cos 4t (t = k · 6°, k = 0 … 59),
// normalitzada a la caixa [-1, 1]² (punta avall, a −y; els dos lòbuls a dalt): els mateixos punts que heartPoly del renderitzador
const M3_HEART = (() => {
  const N = 60, pts = [];
  for (let k = 0; k < N; k++) { const t = k * 6 * Math.PI / 180, s = Math.sin(t); pts.push([16 * s * s * s, 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)]); }
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return pts.map(([x, y]) => [m3R((x - (x0 + x1) / 2) / ((x1 - x0) / 2), 5), m3R((y - (y0 + y1) / 2) / ((y1 - y0) / 2), 5)]);
})();
// l'estrella de n puntes: puntes a radi 1 (la primera a +y), entrants a radi 0,5; després es normalitza a la caixa [-1, 1]²
// (la caixa de l'estrella de 5 puntes no és centrada: es desplaça perquè la caixa s quedi plena)
const M3_STARS = {};
function m3StarPts(n) {
  n = Math.max(3, Math.min(12, Math.round(n || 5)));
  if (M3_STARS[n]) return M3_STARS[n];
  const pts = []; for (let k = 0; k < 2 * n; k++) { const a = Math.PI / 2 + k * Math.PI / n, r = k % 2 ? 0.5 : 1; pts.push([r * Math.cos(a), r * Math.sin(a)]); }
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return (M3_STARS[n] = pts.map(([x, y]) => [m3R((x - (x0 + x1) / 2) / ((x1 - x0) / 2), 5), m3R((y - (y0 + y1) / 2) / ((y1 - y0) / 2), 5)]));
}
// màscara 2D (256 × 256) d'un polígon normalitzat a [-1, 1]²: la pertinença es mira d'un cop d'ull
const M3_MASK = new Map();
function m3Mask(key, P) { if (M3_MASK.has(key)) return M3_MASK.get(key); const N = 256, m = new Uint8Array(N * N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) m[j * N + i] = m3Pip(P, (i + .5) / N * 2 - 1, (j + .5) / N * 2 - 1) ? 1 : 0;
  const f = (x, y) => { const i = Math.floor((x + 1) / 2 * N), j = Math.floor((y + 1) / 2 * N); return i >= 0 && j >= 0 && i < N && j < N && m[j * N + i] === 1; }; M3_MASK.set(key, f); return f; }
function m3Pip(P, x, y) { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const a = P[i], b = P[j]; if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; }
// funció de pertinença de la forma canònica (coordenades locals)
function m3ShapeFn(t, a, b, c, pr) {
  const E = 1e-9; a = Math.max(a, E); b = Math.max(b, E); c = Math.max(c, E);
  switch (t) {
    case 'box': return (x, y, z) => x >= -a && x <= a && y >= -b && y <= b && z >= -c && z <= c;
    case 'cyl': return (x, y, z) => z >= -c && z <= c && (x / a) * (x / a) + (y / b) * (y / b) <= 1;
    case 'sph': return (x, y, z) => (x / a) * (x / a) + (y / b) * (y / b) + (z / c) * (z / c) <= 1;
    case 'cone': { const top = Math.max(0, Math.min(1, pr.top ?? 0)); return (x, y, z) => { if (z < -c || z > c) return false; const k = 1 - (z + c) / (2 * c) * (1 - top); return (x / a) * (x / a) + (y / b) * (y / b) <= k * k; }; }
    case 'pyr': return (x, y, z) => { if (z < -c || z > c) return false; const k = 1 - (z + c) / (2 * c); return Math.abs(x) <= a * k && Math.abs(y) <= b * k; };
    case 'wedge': return (x, y, z) => x >= -a && x <= a && y >= -b && y <= b && z >= -c && z <= -c + 2 * c * (1 - (x + a) / (2 * a));
    // anell: q = min(1, sz / min(sx, sy)), ρ = √((x/a)² + (y/b)²), ((ρ − (1 − q)) / q)² + (z/h)² ≤ 1 (igual que el renderitzador)
    case 'torus': { const q = Math.min(1, (2 * c) / Math.min(2 * a, 2 * b)); return (x, y, z) => { const r = Math.sqrt((x / a) * (x / a) + (y / b) * (y / b)), u = (r - (1 - q)) / q; return u * u + (z / c) * (z / c) <= 1; }; }
    case 'tube': { const w = Math.max(0.2, pr.w ?? 2), ia = a - w, ib = b - w; return (x, y, z) => { if (z < -c || z > c) return false; const o = (x / a) * (x / a) + (y / b) * (y / b); if (o > 1) return false; return !(ia > 0 && ib > 0 && (x / ia) * (x / ia) + (y / ib) * (y / ib) < 1); }; }
    case 'star': { const n = Math.max(3, Math.min(12, Math.round(pr.n ?? 5))), F = m3Mask('star' + n, m3StarPts(n)); return (x, y, z) => z >= -c && z <= c && x >= -a && x <= a && y >= -b && y <= b && F(x / a, y / b); }
    case 'heart': { const F = m3Mask('heart', M3_HEART); return (x, y, z) => z >= -c && z <= c && x >= -a && x <= a && y >= -b && y <= b && F(x / a, y / b); }
    case 'hex': return (x, y, z) => { if (z < -c || z > c) return false; const u = Math.abs(x) / a, v = Math.abs(y) / b; return v <= 1 && u + v / 2 <= 1; };
  }
  return () => false;
}
// vèrtexs que defineixen la caixa d'una forma (per calcular la caixa exacta després de girar)
function m3ShapeVerts(t, a, b, c, pr) {
  const Q = (P, k = 1) => P.flatMap(([x, y]) => [[x * a * k, y * b * k, -c], [x * a * k, y * b * k, c]]);
  switch (t) {
    case 'pyr': return [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c], [0, 0, c]];
    case 'wedge': return [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c], [-a, -b, c], [-a, b, c]];
    case 'hex': return Q([[1, 0], [.5, 1], [-.5, 1], [-1, 0], [-.5, -1], [.5, -1]]);
    case 'star': return Q(m3StarPts(pr.n ?? 5));
    case 'heart': return Q(M3_HEART);
  }
  return [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c], [-a, -b, c], [a, -b, c], [a, b, c], [-a, b, c]];
}
// caixa (AABB) exacta d'una peça ja transformada: el·lipses i el·lipsoides amb fórmula, la resta pels vèrtexs
function m3PrimBox(t, a, b, c, M, pr) {
  const out = [1e9, 1e9, 1e9, -1e9, -1e9, -1e9], cen = [M[12], M[13], M[14]];
  const add = (x, y, z) => { if (x < out[0]) out[0] = x; if (y < out[1]) out[1] = y; if (z < out[2]) out[2] = z; if (x > out[3]) out[3] = x; if (y > out[4]) out[4] = y; if (z > out[5]) out[5] = z; };
  const col = k => [M[k * 4], M[k * 4 + 1], M[k * 4 + 2]], X = col(0), Y = col(1), Z = col(2);
  if (t === 'sph') { for (let i = 0; i < 3; i++) { const e = Math.sqrt((X[i] * a) ** 2 + (Y[i] * b) ** 2 + (Z[i] * c) ** 2); add(...cen.map((v, j) => j === i ? v - e : v)); add(...cen.map((v, j) => j === i ? v + e : v)); } return out; }
  if (t === 'cyl' || t === 'tube' || t === 'cone' || t === 'torus') {
    const ends = t === 'cone' ? [[-c, 1], [c, Math.max(0, Math.min(1, pr.top ?? 0))]] : [[-c, 1], [c, 1]];
    for (const [zz, k] of ends) { const o = [cen[0] + Z[0] * zz, cen[1] + Z[1] * zz, cen[2] + Z[2] * zz];
      const e = [0, 1, 2].map(i => Math.sqrt((X[i] * a * k) ** 2 + (Y[i] * b * k) ** 2)); add(o[0] - e[0], o[1] - e[1], o[2] - e[2]); add(o[0] + e[0], o[1] + e[1], o[2] + e[2]); }
    return out;
  }
  for (const [x, y, z] of m3ShapeVerts(t, a, b, c, pr)) add(...M3M.ap(M, x, y, z));
  return out;
}
// una peça «compilada»: la funció de pertinença, la matriu inversa (món → local) i la caixa
function m3Comp(pr) {
  const s = pr.s || [20, 20, 20], a = Math.abs(s[0]) / 2, b = Math.abs(s[1] ?? s[0]) / 2, c = Math.abs(s[2] ?? s[0]) / 2, t = M3_TYPES.includes(pr.t) ? pr.t : 'box';
  const M = M3M.part(pr), inv = M3M.inv(M);
  if (!inv) return null;
  return { pr, t, a, b, c, M, inv, f: m3ShapeFn(t, a, b, c, pr), box: m3PrimBox(t, a, b, c, M, pr) };
}
// un punt (mm) és dins d'una peça?
function m3Inside(pr, x, y, z) {
  const cp = m3Comp(pr); if (!cp) return false;
  const I = cp.inv; return cp.f(I[0] * x + I[4] * y + I[8] * z + I[12], I[1] * x + I[5] * y + I[9] * z + I[13], I[2] * x + I[6] * y + I[10] * z + I[14]);
}

/* ---------- Del model a l'arbre CSG ----------
   Nivell 1 (semàntica de Tinkercad): totes les peces sòlides se sumen i tots els forats es resten; dins d'un grup g, els
   forats del grup només resten a les peces del grup. Arbre: diff(union(sòlides sense grup, grup1, grup2…), union(forats
   sense grup)), on cada grup és diff(union(sòlides del grup), union(forats del grup)). */
function m3Tree(model) {
  if (!model) return null;
  if (model.tree !== undefined) return model.tree;
  if (model.op || model.prim) return model;
  if (model.prog != null || model.src != null) { const r = m3Run(model.prog ?? model.src, model.over ? { over: model.over } : {}); return r.tree; }
  const parts = (model.parts || []).filter(p => p && p.s);
  if (!parts.length) return null;
  const leaf = p => ({ prim: p });
  const U = l => l.length === 1 ? l[0] : { op: 'union', kids: l };
  const D = (sol, hol) => !sol.length ? null : !hol.length ? U(sol) : { op: 'diff', kids: [U(sol), U(hol)] };
  const groups = {}, top = [], holes = [];
  for (const p of parts) { if (p.g != null && p.g !== '') (groups[p.g] = groups[p.g] || []).push(p); else (p.hole ? holes : top).push(leaf(p)); }
  // un grup només de forats és un forat
  for (const g of Object.keys(groups)) { const l = groups[g], so = l.filter(p => !p.hole).map(leaf), ho = l.filter(p => p.hole).map(leaf); if (so.length) top.push(D(so, ho)); else holes.push(U(ho)); }
  return D(top, holes);
}
// un punt és dins del sòlid que descriu l'arbre?
function m3In(tree, x, y, z) {
  if (!tree) return false;
  if (tree.prim) return m3Inside(tree.prim, x, y, z);
  const k = tree.kids || [];
  if (tree.op === 'diff') { if (!k.length || !m3In(k[0], x, y, z)) return false; for (let i = 1; i < k.length; i++) if (m3In(k[i], x, y, z)) return false; return true; }
  if (tree.op === 'inter') { if (!k.length) return false; for (const n of k) if (!m3In(n, x, y, z)) return false; return true; }
  for (const n of k) if (m3In(n, x, y, z)) return true; return false;
}
// les fulles (peces) d'un arbre, amb la informació de si resten (estan dins d'una part que es treu)
function m3Leaves(tree, out = [], neg = false) {
  if (!tree) return out;
  if (tree.prim) { out.push({ prim: tree.prim, neg }); return out; }
  (tree.kids || []).forEach((k, i) => m3Leaves(k, out, tree.op === 'diff' && i > 0 ? !neg : neg));
  return out;
}
// l'arbre compilat (cada fulla amb la seva peça compilada) i la caixa analítica del resultat
function m3Compile(tree) {
  if (!tree) return null;
  if (tree.prim) { const cp = m3Comp(tree.prim); return cp ? { cp, box: cp.box } : null; }
  const kids = (tree.kids || []).map(m3Compile);
  if (tree.op === 'diff') { if (!kids[0]) return null; return { op: 'diff', kids: kids.filter((k, i) => i === 0 || k), box: kids[0].box }; }
  const ks = kids.filter(Boolean); if (!ks.length) return null;
  if (tree.op === 'inter') { if (ks.length < kids.length) return null; const b = ks.reduce((o, k) => [Math.max(o[0], k.box[0]), Math.max(o[1], k.box[1]), Math.max(o[2], k.box[2]), Math.min(o[3], k.box[3]), Math.min(o[4], k.box[4]), Math.min(o[5], k.box[5])], [-1e9, -1e9, -1e9, 1e9, 1e9, 1e9]); if (b[0] > b[3] || b[1] > b[4] || b[2] > b[5]) return null; return { op: 'inter', kids: ks, box: b }; }
  return { op: 'union', kids: ks, box: ks.reduce((o, k) => [Math.min(o[0], k.box[0]), Math.min(o[1], k.box[1]), Math.min(o[2], k.box[2]), Math.max(o[3], k.box[3]), Math.max(o[4], k.box[4]), Math.max(o[5], k.box[5])], [1e9, 1e9, 1e9, -1e9, -1e9, -1e9]) };
}

/* ---------- Voxels: una quadrícula de cel·les on cada fulla només pinta les de la seva caixa ---------- */
// quadrícula per a una caixa [x0,y0,z0,x1,y1,z1] amb un pressupost de cel·les (o una mida de cel·la h)
function m3Grid(box, o = {}) {
  const pad = o.pad ?? 1, W = Math.max(box[3] - box[0], 0.01), D = Math.max(box[4] - box[1], 0.01), H = Math.max(box[5] - box[2], 0.01);
  let h = o.h || Math.cbrt(W * D * H / (o.cells || 160000)); h = Math.max(o.hmin ?? 0.2, Math.min(o.hmax ?? 8, h));
  if (!o.h) { for (let k = 0; k < 6 && (Math.ceil(W / h) + 2 * pad) * (Math.ceil(D / h) + 2 * pad) * (Math.ceil(H / h) + 2 * pad) > (o.cells || 160000) * 1.25; k++) h *= 1.1; }
  const nx = Math.ceil(W / h) + 2 * pad, ny = Math.ceil(D / h) + 2 * pad, nz = o.flat ? 1 : Math.ceil(H / h) + 2 * pad;
  // les vores de les cel·les coincideixen amb el mínim de la caixa: així el volum d'una caixa surt gairebé exacte
  if (o.center) { const c = [(box[0] + box[3]) / 2, (box[1] + box[4]) / 2, (box[2] + box[5]) / 2]; return { nx, ny, nz, h, ox: c[0] - nx * h / 2, oy: c[1] - ny * h / 2, oz: c[2] - nz * h / 2, n: nx * ny * nz }; }
  return { nx, ny, nz, h, ox: box[0] - pad * h, oy: box[1] - pad * h, oz: o.flat ? o.z - h / 2 : box[2] - pad * h, n: nx * ny * nz };
}
// pinta una fulla: op 1 = afegeix (OR), op 2 = treu (AND NOT)
function m3PaintLeaf(cp, G, arr, op) {
  const { nx, ny, nz, h, ox, oy, oz } = G, B = cp.box, I = cp.inv, f = cp.f;
  const i0 = Math.max(0, Math.floor((B[0] - ox) / h)), i1 = Math.min(nx - 1, Math.floor((B[3] - ox) / h));
  const j0 = Math.max(0, Math.floor((B[1] - oy) / h)), j1 = Math.min(ny - 1, Math.floor((B[4] - oy) / h));
  const k0 = Math.max(0, Math.floor((B[2] - oz) / h)), k1 = Math.min(nz - 1, Math.floor((B[5] - oz) / h));
  if (i0 > i1 || j0 > j1 || k0 > k1) return;
  const dx0 = I[0] * h, dx1 = I[1] * h, dx2 = I[2] * h, x0 = ox + (i0 + .5) * h;
  for (let k = k0; k <= k1; k++) { const z = oz + (k + .5) * h;
    for (let j = j0; j <= j1; j++) { const y = oy + (j + .5) * h;
      let lx = I[0] * x0 + I[4] * y + I[8] * z + I[12], ly = I[1] * x0 + I[5] * y + I[9] * z + I[13], lz = I[2] * x0 + I[6] * y + I[10] * z + I[14];
      let idx = (k * ny + j) * nx + i0;
      if (op === 1) { for (let i = i0; i <= i1; i++, idx++, lx += dx0, ly += dx1, lz += dx2) if (!arr[idx] && f(lx, ly, lz)) arr[idx] = 1; }
      else { for (let i = i0; i <= i1; i++, idx++, lx += dx0, ly += dx1, lz += dx2) if (arr[idx] && f(lx, ly, lz)) arr[idx] = 0; }
    } }
}
function m3Apply(node, G, arr, op) {
  if (!node) return;
  if (node.cp) return m3PaintLeaf(node.cp, G, arr, op);
  if (node.op === 'union') { for (const k of node.kids) m3Apply(k, G, arr, op); return; }
  const g = m3EvalNode(node, G);
  if (op === 1) { for (let i = 0; i < arr.length; i++) if (g[i]) arr[i] = 1; } else { for (let i = 0; i < arr.length; i++) if (g[i]) arr[i] = 0; }
}
function m3EvalNode(node, G) {
  const arr = new Uint8Array(G.n);
  if (!node) return arr;
  if (node.cp || node.op === 'union') { m3Apply(node, G, arr, 1); return arr; }
  if (node.op === 'diff') { m3Apply(node.kids[0], G, arr, 1); for (let i = 1; i < node.kids.length; i++) m3Apply(node.kids[i], G, arr, 2); return arr; }
  if (node.op === 'inter') { m3Apply(node.kids[0], G, arr, 1); for (let i = 1; i < node.kids.length; i++) { const g = m3EvalNode(node.kids[i], G); for (let j = 0; j < arr.length; j++) if (arr[j] && !g[j]) arr[j] = 0; } return arr; }
  return arr;
}
// voxelitza un arbre (o un arbre ja compilat) en una quadrícula
function m3Vox(tree, o = {}) {
  const C = tree && (tree.cp || tree.op && tree.box) ? tree : m3Compile(tree);
  if (!C && !o.box) return null;
  const G = m3Grid(o.box || C.box, o); G.g = C ? m3EvalNode(C, G) : new Uint8Array(G.n); return G;
}

/* ---------- Anàlisi del sòlid (volum, caixa, base, connexió, simetria, forats, parets) ---------- */
// l'arbre «positiu»: cada diferència es queda només amb la primera part (per saber què han tret els forats)
function m3Pos(t) { if (!t || t.prim) return t; if (t.op === 'diff') return m3Pos(t.kids[0]); return { op: t.op, kids: (t.kids || []).map(m3Pos) }; }
// extensió real ocupada de la quadrícula: [i0,j0,k0,i1,j1,k1] (índexs de cel·la) o null si és buida
function m3Ext(G) {
  const { nx, ny, nz, g } = G; let i0 = nx, j0 = ny, k0 = nz, i1 = -1, j1 = -1, k1 = -1, n = 0;
  for (let k = 0, idx = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++, idx++) if (g[idx]) { n++; if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j; if (k < k0) k0 = k; if (k > k1) k1 = k; }
  return n ? { i0, j0, k0, i1, j1, k1, n } : null;
}
// peces separades (connexió per cares, 6 veïns); les «molles» de menys de 2 cel·les no compten
function m3Comps(G) {
  const { nx, ny, nz, g } = G, seen = new Uint8Array(G.n), st = new Int32Array(G.n), sizes = [];
  for (let s = 0; s < G.n; s++) { if (!g[s] || seen[s]) continue; let top = 0, cnt = 0; st[top++] = s; seen[s] = 1;
    while (top) { const c = st[--top]; cnt++; const i = c % nx, j = ((c - i) / nx) % ny, k = (c - i - j * nx) / (nx * ny);
      if (i > 0 && g[c - 1] && !seen[c - 1]) { seen[c - 1] = 1; st[top++] = c - 1; } if (i < nx - 1 && g[c + 1] && !seen[c + 1]) { seen[c + 1] = 1; st[top++] = c + 1; }
      if (j > 0 && g[c - nx] && !seen[c - nx]) { seen[c - nx] = 1; st[top++] = c - nx; } if (j < ny - 1 && g[c + nx] && !seen[c + nx]) { seen[c + nx] = 1; st[top++] = c + nx; }
      const L2 = nx * ny; if (k > 0 && g[c - L2] && !seen[c - L2]) { seen[c - L2] = 1; st[top++] = c - L2; } if (k < nz - 1 && g[c + L2] && !seen[c + L2]) { seen[c + L2] = 1; st[top++] = c + L2; } }
    sizes.push(cnt); }
  return sizes.filter(n => n >= 2).sort((a, b) => b - a);
}
// un punt és dins de l'arbre compilat? (amb la caixa de cada fulla per descartar ràpid)
function m3InC(n, x, y, z) {
  if (!n) return false; const B = n.box; if (x < B[0] || y < B[1] || z < B[2] || x > B[3] || y > B[4] || z > B[5]) return false;
  if (n.cp) { const I = n.cp.inv; return n.cp.f(I[0] * x + I[4] * y + I[8] * z + I[12], I[1] * x + I[5] * y + I[9] * z + I[13], I[2] * x + I[6] * y + I[10] * z + I[14]); }
  const k = n.kids;
  if (n.op === 'diff') { if (!m3InC(k[0], x, y, z)) return false; for (let i = 1; i < k.length; i++) if (m3InC(k[i], x, y, z)) return false; return true; }
  if (n.op === 'inter') { for (const c of k) if (!m3InC(c, x, y, z)) return false; return true; }
  for (const c of k) if (m3InC(c, x, y, z)) return true; return false;
}
// parets primes (aproximat): a la quadrícula, el gruix de cada cel·la és el tram de sòlid més curt dels tres eixos; on
// és a prop del mínim, es mesura de debò amb un raig fi (subcel·la). Torna el volum (mm³) on el gruix és < min.
function m3Thin(C, G, min) {
  const { nx, ny, nz, g, h } = G, L2 = nx * ny, run = new Float32Array(G.n).fill(1e9), ax = new Uint8Array(G.n);
  const pass = (n1, step, starts, a) => { for (const s of starts) { let t = 0; while (t < n1) { const i = s + t * step; if (!g[i]) { t++; continue; } let e = t; while (e < n1 && g[s + e * step]) e++; const len = (e - t) * h; for (let q = t; q < e; q++) { const j = s + q * step; if (len < run[j]) { run[j] = len; ax[j] = a; } } t = e; } } };
  const sx = [], sy = [], sz = []; for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) sx.push((k * ny + j) * nx);
  for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) sy.push(k * L2 + i); for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) sz.push(j * nx + i);
  pass(nx, 1, sx, 0); pass(ny, nx, sy, 1); pass(nz, L2, sz, 2);
  const cand = []; for (let i = 0; i < G.n; i++) if (g[i] && run[i] <= min + 2 * h) cand.push(i);
  if (!cand.length) return 0;
  const stride = Math.max(1, Math.floor(cand.length / 2500)), d = min / 24; let tested = 0, thin = 0;
  for (let q = 0; q < cand.length; q += stride) { const c = cand[q], i = c % nx, j = ((c - i) / nx) % ny, k = (c - i - j * nx) / L2, a = ax[c];
    const p = [G.ox + (i + .5) * h, G.oy + (j + .5) * h, G.oz + (k + .5) * h]; if (!m3InC(C, p[0], p[1], p[2])) continue; tested++;
    let len = 0; for (const sg of [1, -1]) { const v = p.slice(); for (let s = d; s < min * 1.05 && len < min; s += d) { v[a] = p[a] + sg * s; if (!m3InC(C, v[0], v[1], v[2])) break; len += d; } }
    if (len + d < min) thin++; }
  return tested ? thin / tested * (cand.length * h * h * h) : 0;
}
// l'anàlisi d'un arbre: es calcula el que cal i es guarda (A.vol(), A.box(), A.comps()…)
function m3An(tree, o = {}) {
  const C = m3Compile(tree), A = { tree, C, empty: !C, o };
  const memo = (k, f) => () => (k in A._m ? A._m[k] : (A._m[k] = f()));
  A._m = {};
  A.G = memo('G', () => C ? m3Vox(C, { cells: o.cells || 160000 }) : null);
  A.ext = memo('ext', () => A.G() ? m3Ext(A.G()) : null);
  A.vol = memo('vol', () => { const G = A.G(), e = A.ext(); return e ? e.n * G.h ** 3 / 1000 : 0; });   // cm³
  // caixa del resultat: l'analítica si quadra amb els vòxels (és exacta), si no la dels vòxels
  A.box = memo('box', () => { const G = A.G(), e = A.ext(); if (!e) return null; const h = G.h, v = [G.ox + e.i0 * h, G.oy + e.j0 * h, G.oz + e.k0 * h, G.ox + (e.i1 + 1) * h, G.oy + (e.j1 + 1) * h, G.oz + (e.k1 + 1) * h], b = C.box;
    return v.map((x, i) => Math.abs(x - b[i]) <= 1.6 * h ? b[i] : x); });
  A.size = memo('size', () => { const b = A.box(); return b ? [b[3] - b[0], b[4] - b[1], b[5] - b[2]] : [0, 0, 0]; });
  A.comps = memo('comps', () => A.G() ? m3Comps(A.G()) : []);
  // àrea de la base: tall horitzontal 0,2 mm per sobre del punt més baix
  A.base = memo('base', () => { const b = A.box(); if (!b) return 0; const W = b[3] - b[0], D = b[4] - b[1], hx = Math.max(0.2, Math.min(2, Math.sqrt(W * D / 60000)));
    const G = m3Grid([b[0], b[1], b[2], b[3], b[4], b[2] + 0.4], { h: hx, flat: true, z: b[2] + 0.2 }); const g = m3EvalNode(C, G); let n = 0; for (let i = 0; i < g.length; i++) n += g[i]; return n * hx * hx; });
  // simetria respecte del pla que passa pel centre de la caixa (eix 'x' → mirall x ↔ −x)
  A.sym = ax => memo('sym' + ax, () => { const b = A.box(); if (!b) return 0; const G = m3Grid(b, { cells: o.cells || 160000, center: true }), g = m3EvalNode(C, G), { nx, ny, nz } = G; let both = 0, any = 0;
    for (let k = 0, idx = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++, idx++) { const a = g[idx], m = ax === 'y' ? g[(k * ny + ny - 1 - j) * nx + i] : ax === 'z' ? g[((nz - 1 - k) * ny + j) * nx + i] : g[(k * ny + j) * nx + nx - 1 - i];
      if (a || m) { any++; if (a && m) both++; } }
    return any ? both / any : 0; })();
  // forats: cel·les que els forats han tret i que queden envoltades de sòlid en almenys 4 de les 6 direccions
  A.holes = memo('holes', () => { const G = A.G(); if (!G) return { removed: 0, hole: 0 };
    const base = m3EvalNode(m3Compile(m3Pos(tree)), G), g = G.g, { nx, ny, nz } = G, cnt = new Uint8Array(G.n); let removed = 0;
    for (let i = 0; i < G.n; i++) if (base[i] && !g[i]) { removed++; cnt[i] = 1; }
    if (!removed) return { removed: 0, hole: 0 };
    const enc = new Uint8Array(G.n);
    const scan = (n0, n1, step, starts) => { for (const s of starts) { let seen = 0; for (let t = 0, i = s; t < n1; t++, i += step) { if (g[i]) seen = 1; else if (cnt[i] && seen) enc[i]++; } seen = 0; for (let t = n1 - 1, i = s + step * (n1 - 1); t >= 0; t--, i -= step) { if (g[i]) seen = 1; else if (cnt[i] && seen) enc[i]++; } } };
    const L2 = nx * ny, sx = [], sy = [], sz = [];
    for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) sx.push((k * ny + j) * nx);
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) sy.push(k * L2 + i);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) sz.push(j * nx + i);
    scan(0, nx, 1, sx); scan(0, ny, nx, sy); scan(0, nz, L2, sz);
    let hole = 0; for (let i = 0; i < G.n; i++) if (cnt[i] && enc[i] >= 4) hole++;
    return { removed: removed * G.h ** 3, hole: hole * G.h ** 3, frac: hole / removed }; });
  // parets primes: el que es perd en «obrir» el sòlid (erosió + dilatació) amb un cub del gruix mínim
  A.thin = min => memo('thin' + min, () => { const G = A.G(); if (!G) return { thin: 0, h: 1 }; return { thin: m3Thin(C, G, min), h: G.h }; })();
  return A;
}
// IoU (semblança de volum) entre dos arbres, a la mateixa quadrícula
function m3Iou(ta, tb, o = {}) {
  const A = m3Compile(ta), B = m3Compile(tb);
  if (!A || !B) return !A && !B ? 1 : 0;
  const box = [0, 1, 2].map(i => Math.min(A.box[i], B.box[i])).concat([3, 4, 5].map(i => Math.max(A.box[i], B.box[i])));
  const G = m3Grid(box, { cells: o.cells || 200000 }), a = m3EvalNode(A, G), b = m3EvalNode(B, G); let i = 0, u = 0;
  for (let k = 0; k < G.n; k++) { if (a[k] && b[k]) i++; if (a[k] || b[k]) u++; }
  return u ? i / u : 1;
}
function m3Volume(model, o) { return m3An(m3Tree(model), o).vol(); }
function m3BBox(model, o) { return m3An(m3Tree(model), o).box(); }

/* ---------- Comprovacions dels reptes ----------
   { k: 'match', target, th: 0.85 } · { k: 'size', ax, v, tol } · { k: 'fit', box: [x,y,z] } · { k: 'onplate' } · { k: 'flatbase', min }
   { k: 'hole' } · { k: 'count', t?, min?, max?, hole? } · { k: 'vol', min?, max? } (cm³) · { k: 'one' } · { k: 'sym', ax, th? } · { k: 'wall', min }
   { k: 'uses', b } (Nivell 2) · { k: 'param', v, vals } (Nivell 2) · extres: { k: 'colors', min } · { k: 'part', t?, s?, at?, base?, tol? }
   · { k: 'zmax', v } (alçada màxima) · { k: 'nohole' }. Els números poden ser expressions amb les variables del programa ('mida + 4'). */
const M3_TN = { box: ['caixa', 'caja'], cyl: ['cilindre', 'cilindro'], sph: ['esfera', 'esfera'], cone: ['con', 'cono'], pyr: ['piràmide', 'pirámide'], wedge: ['falca', 'cuña'], torus: ['anell', 'anillo'], tube: ['tub', 'tubo'], star: ['estrella', 'estrella'], heart: ['cor', 'corazón'], hex: ['prisma hexagonal', 'prisma hexagonal'] };
const M3_BN = { diff: ['resta', 'resta'], union: ['uneix', 'une'], inter: ['interseca', 'interseca'], rep: ['repeteix', 'repite'], def: ['defineix', 'define'], call: ['un mòdul teu', 'un módulo tuyo'], var: ['una variable', 'una variable'], mou: ['mou', 'mueve'], gira: ['gira', 'gira'], escala: ['escala', 'escala'], color: ['color', 'color'] };
// a «count» i «part», t és el tipus de peça (contracte); el text de la comprovació va a txt (o a t si no és un tipus)
const m3CkShape = c => c.shape || (M3_TYPES.includes(c.t) ? c.t : null);
const m3CkLabel = c => c.txt || (c.t && !M3_TYPES.includes(c.t) ? c.t : null) || m3CheckTxt(c);
function m3CheckTxt(c) {
  const B = (ca, es) => ca + '|' + es, ax = (c.ax || 'x').toUpperCase(), n = v => typeof v === 'number' ? String(v).replace('.', ',') : String(v);
  switch (c.k) {
    case 'match': return B("S'assembla al model fantasma", 'Se parece al modelo fantasma');
    case 'size': return B(`Mida total en ${ax}: ${n(c.v)} mm`, `Medida total en ${ax}: ${n(c.v)} mm`);
    case 'fit': return B(`Cap dins d'una caixa de ${c.box.map(n).join(' × ')} mm`, `Cabe dentro de una caja de ${c.box.map(n).join(' × ')} mm`);
    case 'onplate': return B('Toca la placa i no hi ha res per sota', 'Toca la placa y no hay nada por debajo');
    case 'flatbase': return B(`Té una base plana (almenys ${n(c.min || 100)} mm²)`, `Tiene una base plana (al menos ${n(c.min || 100)} mm²)`);
    case 'hole': return B('Té almenys un forat', 'Tiene al menos un agujero');
    case 'nohole': return B('No té cap forat', 'No tiene ningún agujero');
    case 'count': { const T = m3CkShape(c), w = T ? M3_TN[T] || [T, T] : ['peces', 'piezas'], pl = T ? [w[0] + (/[aeiouà]$/.test(w[0]) ? 's' : 'es'), w[1] + 's'] : w;
      if (c.min != null && c.max != null && c.min === c.max) return B(`Exactament ${c.min} ${c.min === 1 ? w[0] : pl[0]}`, `Exactamente ${c.min} ${c.min === 1 ? w[1] : pl[1]}`);
      if (c.max != null && c.min == null) return B(`Com a molt ${c.max} ${pl[0]}`, `Como mucho ${c.max} ${pl[1]}`);
      return B(`Almenys ${c.min ?? 1} ${(c.min ?? 1) === 1 ? w[0] : pl[0]}`, `Al menos ${c.min ?? 1} ${(c.min ?? 1) === 1 ? w[1] : pl[1]}`); }
    case 'vol': return c.min != null && c.max != null ? B(`Volum entre ${n(c.min)} i ${n(c.max)} cm³`, `Volumen entre ${n(c.min)} y ${n(c.max)} cm³`) : c.max != null ? B(`Volum de com a molt ${n(c.max)} cm³`, `Volumen de como mucho ${n(c.max)} cm³`) : B(`Volum d'almenys ${n(c.min)} cm³`, `Volumen de al menos ${n(c.min)} cm³`);
    case 'one': return B('És una sola peça (res solt)', 'Es una sola pieza (nada suelto)');
    case 'sym': return B(`És simètric (mirall en ${ax})`, `Es simétrico (espejo en ${ax})`);
    case 'wall': return B(`Cap paret més prima de ${n(c.min)} mm`, `Ninguna pared más fina de ${n(c.min)} mm`);
    case 'uses': { const w = M3_BN[c.b] || [c.b, c.b]; return B(`El programa fa servir «${w[0]}»`, `El programa usa «${w[1]}»`); }
    case 'param': return B(`Funciona amb ${c.v} = ${c.vals.map(n).join(', ')}`, `Funciona con ${c.v} = ${c.vals.map(n).join(', ')}`);
    case 'colors': return B(`Almenys ${c.min} colors diferents`, `Al menos ${c.min} colores distintos`);
    case 'zmax': return B(`Fa com a molt ${n(c.v)} mm d'alçada`, `Mide como mucho ${n(c.v)} mm de alto`);
    case 'part': { const T = m3CkShape(c), w = T ? M3_TN[T] || [T, T] : ['peça', 'pieza'], fem = !T || ['sph', 'pyr', 'wedge', 'star', 'box'].includes(T); return B(`Hi ha ${T && /^[aeiou]/.test(w[0]) ? "l'" : fem ? 'la ' : 'el '}${w[0]}${c.s ? ` de ${c.s.map(n).join(' × ')} mm` : ''}${c.at ? ` a (${c.at.map(v => v == null ? '·' : n(v)).join(', ')})` : ''}`, `Está ${fem ? 'la' : 'el'} ${w[1]}${c.s ? ` de ${c.s.map(n).join(' × ')} mm` : ''}${c.at ? ` en (${c.at.map(v => v == null ? '·' : n(v)).join(', ')})` : ''}`); }
  }
  return B(c.k, c.k);
}
// normalitza un model: { parts } | { tree } | { prog | src } (Nivell 2) → { tree, prog?, run? }
function m3Norm(model, o = {}) {
  if (model == null) return { tree: null };
  if (typeof model === 'string') model = { src: model };
  if (model.prog != null || model.src != null) { const run = m3Run(model.prog ?? model.src, { over: o.over || model.over }); return { tree: run.tree, run, prog: run.prog, parts: null }; }
  return { tree: m3Tree(model), parts: model.parts || null };
}
// un número d'una comprovació: pot ser una expressió amb les variables del programa
function m3Num(v, env) { if (typeof v === 'number') return v; if (v == null) return v; try { return m3Expr(m3ExprParse(String(v)), env || {}); } catch (e) { return NaN; } }
function m3CheckOne(N, A, c, o) {
  const env = (N.run && N.run.env) || {}, num = v => m3Num(v, env);
  switch (c.k) {
    case 'match': { if (!c.target) return false; const T = m3Norm(c.target, { over: o.over }); return m3Iou(N.tree, T.tree, { cells: o.cells }) >= (c.th ?? 0.85); }
    case 'size': { if (A.empty) return false; const i = 'xyz'.indexOf(c.ax || 'x'), v = num(c.v); return Math.abs(A.size()[i] - v) <= (num(c.tol) ?? 1) + 1e-6; }
    case 'fit': { if (A.empty) return false; const s = A.size(), bx = c.box.map(num); return s.every((v, i) => v <= bx[i] + 0.05); }
    case 'zmax': { if (A.empty) return false; return A.box()[5] <= num(c.v) + 0.05; }
    case 'onplate': { if (A.empty) return false; const z = A.box()[2], tol = Math.max(0.3, 0.6 * A.G().h); return Math.abs(z) <= tol; }
    case 'flatbase': { if (A.empty) return false; const z = A.box()[2]; return Math.abs(z) <= Math.max(0.3, 0.6 * A.G().h) && A.base() >= (num(c.min) ?? 100) - 1e-6; }
    case 'hole': { if (A.empty) return false; const H = A.holes(); return H.hole > 0 && H.frac >= 0.08 && H.hole >= Math.max(1, 3 * A.G().h ** 3); }
    case 'nohole': { if (A.empty) return false; const H = A.holes(); return !(H.hole > 0 && H.frac >= 0.08 && H.hole >= Math.max(1, 3 * A.G().h ** 3)); }
    case 'count': { let L = m3Leaves(N.tree).map(x => ({ ...x.prim, hole: x.prim.hole || x.neg })); if (N.parts) L = N.parts; const T = m3CkShape(c); if (T) L = L.filter(p => p.t === T); if (c.hole != null) L = L.filter(p => !!p.hole === !!c.hole); const n = L.length; return n >= (num(c.min) ?? (c.max != null ? 0 : 1)) && (c.max == null || n <= num(c.max)); }
    case 'vol': { if (A.empty) return false; const v = A.vol(); return (c.min == null || v >= num(c.min) - 1e-9) && (c.max == null || v <= num(c.max) + 1e-9); }
    case 'one': { if (A.empty) return false; return A.comps().length === 1; }
    case 'sym': { if (A.empty) return false; return A.sym(c.ax || 'x') >= (c.th ?? 0.9); }
    case 'wall': { if (A.empty) return false; const t = A.thin(num(c.min) ?? 1.2); return t.thin <= Math.max(3 * t.h ** 3, 0.01 * A.vol() * 1000); }
    case 'colors': { const L = N.parts ? N.parts.filter(p => !p.hole) : m3Leaves(N.tree).filter(x => !x.neg).map(x => x.prim); return new Set(L.map(p => String(p.c || '').toLowerCase())).size >= (c.min ?? 2); }
    case 'part': { const tol = num(c.tol) ?? 1, L = N.parts ? N.parts : m3Leaves(N.tree).map(x => x.prim);
      const T = m3CkShape(c); return L.some(p => { if (T && p.t !== T) return false; if (c.hole != null && !!p.hole !== !!c.hole) return false; const cp = m3Comp(p); if (!cp) return false; const b = cp.box;
        if (c.s && !c.s.every((v, i) => Math.abs((b[i + 3] - b[i]) - num(v)) <= tol)) return false;
        if (c.at && !c.at.every((v, i) => v == null || Math.abs((b[i] + b[i + 3]) / 2 - num(v)) <= tol)) return false;
        if (c.base != null && Math.abs(b[2] - num(c.base)) > tol) return false; return true; }); }
    case 'uses': return !!(N.run && N.run.used && N.run.used.has(c.b));
    case 'param': { if (!N.run) return false; const rest = (o.all || []).filter(x => x !== c && x.k !== 'param' && x.k !== 'uses' && !(x.k === 'match' && typeof x.target !== 'string' && !(x.target && (x.target.src || x.target.prog))));
      const src = N.run.src; for (const v of c.vals) { const N2 = m3Norm({ src }, { over: { [c.v]: v } }); if (N2.run.err) return false; const A2 = m3An(N2.tree, { cells: o.cells }); for (const x of rest) if (!m3CheckOne(N2, A2, x, { ...o, over: { [c.v]: v } })) return false; } return true; }
  }
  return false;
}
// marca totes les comprovacions d'un model → [{ ok, t, k }]
function m3Check(model, checks, o = {}) {
  const N = model && model.tree !== undefined && model.run ? model : m3Norm(model), A = m3An(N.tree, { cells: o.cells });
  return (checks || []).map(c => { let ok = false; try { ok = !!m3CheckOne(N, A, c, { ...o, all: checks }); } catch (e) { ok = false; } return { ok, k: c.k, t: m3CkLabel(c) }; });
}

/* =====================================================================================================================
   Nivell 2: el llenguatge (blocs ⇄ text). Un programa és una llista d'instruccions (l'AST); el text és estil OpenSCAD:
     mida = 30
     resta {
       cub(mida, mida, mida)
       repeteix i de 0 a 3 { gira(0, 0, i * 90) mou(mida / 2, 0, 0) cilindre(8, mida + 2) }
     }
   Instruccions de l'AST (les expressions es guarden com a text i es calculen amb un analitzador propi, sense eval):
     { k: 'set', v, e } · { k: 'prim', t: 'cub'|'cil'|'esf'|'con'|'pir'|'tub'|'anell'|'prisma'|'falca'|'estrella'|'cor', a: [exprs], c?: centrat }
     { k: 'mou'|'gira'|'escala', a: [x, y, z], b: [...] } · { k: 'color', a: ['vermell' | '#hex'], b } · { k: 'uneix'|'resta'|'interseca', b }
     { k: 'rep', v: 'i', a: [de, a, pas?], b } · { k: 'def', n, ps: [...], b } · { k: 'call', n, a } · { k: 'rem', t } (comentari)
   Com a OpenSCAD: mou/gira/escala/color afecten la instrucció (o el bloc) que ve just després; els girs són al voltant de
   l'ORIGEN; «cub» té una cantonada a l'origen (si no és «centrat») i les formes rodones tenen la base a z = 0 (l'esfera,
   centrada). «repeteix i de 0 a 3» fa i = 0, 1, 2, 3. Límits: 400 peces i 10.000 voltes.
   ===================================================================================================================== */
const M3_LIM = { parts: 400, iters: 10000, depth: 24 };
// paraules clau (català i castellà) → nom intern
const M3_KW = {
  cub: 'cub', cubo: 'cub', cilindre: 'cil', cilindro: 'cil', esfera: 'esf', con: 'con', cono: 'con', piramide: 'pir', 'piràmide': 'pir', 'pirámide': 'pir',
  tub: 'tub', tubo: 'tub', anell: 'anell', anillo: 'anell', prisma: 'prisma', falca: 'falca', 'cuña': 'falca', cuna: 'falca', estrella: 'estrella', cor: 'cor', 'corazón': 'cor', corazon: 'cor',
  mou: 'mou', mueve: 'mou', gira: 'gira', escala: 'escala', color: 'color', uneix: 'uneix', une: 'uneix', resta: 'resta', interseca: 'interseca',
  repeteix: 'rep', repite: 'rep', defineix: 'def', define: 'def'
};
const M3_PRIMS = ['cub', 'cil', 'esf', 'con', 'pir', 'tub', 'anell', 'prisma', 'falca', 'estrella', 'cor'];
const M3_TR = ['mou', 'gira', 'escala', 'color'], M3_BOOL = ['uneix', 'resta', 'interseca'];
// noms (per escriure el text en la llengua de l'alumne/a) i arguments de cada primitiva
const M3_W = { cub: ['cub', 'cubo'], cil: ['cilindre', 'cilindro'], esf: ['esfera', 'esfera'], con: ['con', 'cono'], pir: ['piramide', 'piramide'], tub: ['tub', 'tubo'], anell: ['anell', 'anillo'], prisma: ['prisma', 'prisma'],
  falca: ['falca', 'cuña'], estrella: ['estrella', 'estrella'], cor: ['cor', 'corazón'], mou: ['mou', 'mueve'], gira: ['gira', 'gira'], escala: ['escala', 'escala'], color: ['color', 'color'], uneix: ['uneix', 'une'], resta: ['resta', 'resta'],
  interseca: ['interseca', 'interseca'], rep: ['repeteix', 'repite'], def: ['defineix', 'define'], de: ['de', 'de'], a: ['a', 'a'], pas: ['pas', 'paso'], centrat: ['centrat', 'centrado'] };
const m3W = (k, lang) => { const w = M3_W[k]; return w ? w[(lang || (typeof LANG !== 'undefined' ? LANG : 'ca')) === 'es' ? 1 : 0] : k; };
const M3_ARGS = { cub: [['amplada', 'anchura'], ['fondària', 'fondo'], ['alçada', 'altura']], cil: [['diàmetre', 'diámetro'], ['alçada', 'altura']], esf: [['diàmetre', 'diámetro']], con: [['diàmetre', 'diámetro'], ['alçada', 'altura'], ['diàmetre de dalt', 'diámetro de arriba']],
  pir: [['amplada', 'anchura'], ['fondària', 'fondo'], ['alçada', 'altura']], tub: [['diàmetre', 'diámetro'], ['alçada', 'altura'], ['paret', 'pared']], anell: [['diàmetre', 'diámetro'], ['gruix', 'grosor']], prisma: [['diàmetre', 'diámetro'], ['alçada', 'altura']],
  falca: [['amplada', 'anchura'], ['fondària', 'fondo'], ['alçada', 'altura']], estrella: [['diàmetre', 'diámetro'], ['alçada', 'altura'], ['puntes', 'puntas']], cor: [['amplada', 'anchura'], ['alçada', 'altura']] };
const M3_ARGN = { cub: [1, 3], cil: [2, 2], esf: [1, 1], con: [2, 3], pir: [3, 3], tub: [3, 3], anell: [2, 2], prisma: [2, 2], falca: [3, 3], estrella: [2, 3], cor: [2, 2] };
// colors amb nom
const M3_COLN = { vermell: '#E8453C', rojo: '#E8453C', taronja: '#F5893A', naranja: '#F5893A', groc: '#F7C531', amarillo: '#F7C531', verd: '#2FB36D', verde: '#2FB36D', blau: '#3D7BF4', azul: '#3D7BF4', lila: '#8B5CF6', morado: '#8B5CF6',
  rosa: '#EC5FA8', blanc: '#F3F3EE', blanco: '#F3F3EE', negre: '#2A2F3A', negro: '#2A2F3A', gris: '#9AA3B5', 'marró': '#A0683A', 'marrón': '#A0683A', marro: '#A0683A', marron: '#A0683A', cel: '#5BC0EB', celeste: '#5BC0EB' };
const M3_COLS = [['vermell', 'rojo'], ['taronja', 'naranja'], ['groc', 'amarillo'], ['verd', 'verde'], ['blau', 'azul'], ['lila', 'morado'], ['rosa', 'rosa'], ['cel', 'celeste'], ['marró', 'marrón'], ['blanc', 'blanco'], ['gris', 'gris'], ['negre', 'negro']];
const m3ColHex = c => !c ? null : /^#[0-9a-f]{6}$/i.test(c) ? c.toUpperCase() : M3_COLN[String(c).toLowerCase()] || null;
const m3ColName = c => { const h = m3ColHex(c); const p = M3_COLS.find(([a]) => M3_COLN[a] === h); return p ? m3L(p[0], p[1]) : c; };
const M3_FN = { sin: 1, cos: 1, tan: 1, sqrt: 1, arrel: 1, raiz: 1, abs: 1, min: 2, max: 2, round: 1, arrodoneix: 1, redondea: 1, floor: 1, ceil: 1 };
// error amable amb la línia: { ln, t: "ca|es" }
function m3Err(ln, ca, es) { const e = new Error(ca); e.m3 = { ln, t: (ln ? `Línia ${ln}: ` : '') + ca + '|' + (ln ? `Línea ${ln}: ` : '') + es }; return e; }
const m3ErrTxt = e => e && e.m3 ? m3T(e.m3.t) : e ? String(e.message || e) : '';
// la paraula clau més semblant (per als errors «Volies dir…?»)
function m3Near(w, list) { const d = (a, b) => { const m = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) m[0][j] = j; for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return m[a.length][b.length]; };
  let best = null, bd = 3; for (const k of list) { const v = d(w.toLowerCase(), k.toLowerCase()); if (v < bd) { bd = v; best = k; } } return best; }

/* ---------- Tokens ---------- */
function m3Lex(src) {
  const T = [], s = String(src || ''); let i = 0, ln = 1;
  const isId = c => /[A-Za-z_À-ÿ·]/.test(c), isIdN = c => /[A-Za-z0-9_À-ÿ·]/.test(c);
  while (i < s.length) {
    const c = s[i];
    if (c === '\n') { T.push({ k: 'nl', ln, at: i }); ln++; i++; continue; }
    if (/\s/.test(c)) { i++; continue; }
    if (c === '/' && s[i + 1] === '/') { const e = s.indexOf('\n', i); const txt = s.slice(i + 2, e < 0 ? s.length : e).trim(); T.push({ k: 'rem', v: txt, ln, at: i }); i = e < 0 ? s.length : e; continue; }
    if (c === '/' && s[i + 1] === '*') { const e = s.indexOf('*/', i + 2); const body = s.slice(i, e < 0 ? s.length : e + 2); ln += (body.match(/\n/g) || []).length; i = e < 0 ? s.length : e + 2; continue; }
    if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(s[i + 1]))) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; const v = s.slice(i, j); if ((v.match(/\./g) || []).length > 1) throw m3Err(ln, `el número «${v}» té massa punts.`, `el número «${v}» tiene demasiados puntos.`); T.push({ k: 'num', v: +v, ln, at: i, end: j }); i = j; continue; }
    if (c === '#' && /[0-9a-f]{6}/i.test(s.slice(i + 1, i + 7))) { T.push({ k: 'str', v: s.slice(i, i + 7), ln, at: i, end: i + 7 }); i += 7; continue; }
    if (c === '"' || c === "'" || c === '«') { const q = c === '«' ? '»' : c, e = s.indexOf(q, i + 1); if (e < 0 || s.slice(i, e).includes('\n')) throw m3Err(ln, 'falten unes cometes per tancar el text.', 'faltan unas comillas para cerrar el texto.'); T.push({ k: 'str', v: s.slice(i + 1, e), ln, at: i, end: e + 1 }); i = e + 1; continue; }
    if (isId(c)) { let j = i; while (j < s.length && isIdN(s[j])) j++; T.push({ k: 'id', v: s.slice(i, j), ln, at: i, end: j }); i = j; continue; }
    if ('(){},;=+-*/%^!'.includes(c)) { T.push({ k: c, ln, at: i, end: i + 1 }); i++; continue; }
    if (c === '×' || c === '·') { T.push({ k: '*', ln, at: i, end: i + 1 }); i++; continue; }
    if (c === '÷' || c === ':') { T.push({ k: '/', ln, at: i, end: i + 1 }); i++; continue; }
    if (c === '−' || c === '–') { T.push({ k: '-', ln, at: i, end: i + 1 }); i++; continue; }
    throw m3Err(ln, `no entenc el símbol «${c}».`, `no entiendo el símbolo «${c}».`);
  }
  T.push({ k: 'eof', ln, at: s.length });
  return T;
}

/* ---------- Expressions: text → arbre (sense eval) ---------- */
const M3_XC = new Map();
function m3ExprParse(src, ln0) {
  const key = String(src); if (M3_XC.has(key)) return M3_XC.get(key);
  const T = m3Lex(key).filter(t => t.k !== 'nl'); let p = 0;
  const ln = ln0 || 0, pk = () => T[p], eat = k => { if (T[p].k === k) return T[p++]; return null; };
  const need = (k, what) => { if (!eat(k)) throw m3Err(ln, `a l'expressió «${key}» falta ${what}.`, `en la expresión «${key}» falta ${what}.`); };
  const prim = () => {
    const t = pk();
    if (eat('-')) return { neg: prim() };
    if (eat('+')) return prim();
    if (t.k === 'num') { p++; return { n: t.v }; }
    if (eat('(')) { const e = add(); need(')', 'tancar un parèntesi «)»'); return e; }
    if (t.k === 'id') { p++; const nm = t.v.toLowerCase();
      if (pk().k === '(') { if (!M3_FN[nm]) throw m3Err(ln, `no conec la funció «${t.v}». Pots fer servir sin, cos, min, max, abs, arrel i arrodoneix.`, `no conozco la función «${t.v}». Puedes usar sin, cos, min, max, abs, raiz y redondea.`); p++; const args = []; if (pk().k !== ')') { args.push(add()); while (eat(',')) args.push(add()); } need(')', 'tancar un parèntesi «)»'); return { f: nm, args }; }
      if (nm === 'pi') return { n: Math.PI };
      return { v: t.v }; }
    if (t.k === 'eof') throw m3Err(ln, `l'expressió «${key}» s'acaba massa d'hora: hi falta un número o una variable.`, `la expresión «${key}» termina demasiado pronto: falta un número o una variable.`);
    throw m3Err(ln, `a l'expressió «${key}» no entenc «${t.v ?? t.k}».`, `en la expresión «${key}» no entiendo «${t.v ?? t.k}».`);
  };
  const pow = () => { const a = prim(); if (eat('^')) return { op: '^', a, b: pow() }; return a; };
  const mul = () => { let a = pow(); for (;;) { const t = pk(); if (t.k === '*' || t.k === '/' || t.k === '%') { p++; a = { op: t.k, a, b: pow() }; } else return a; } };
  const add = () => { let a = mul(); for (;;) { const t = pk(); if (t.k === '+' || t.k === '-') { p++; a = { op: t.k, a, b: mul() }; } else return a; } };
  const e = add();
  if (pk().k !== 'eof') throw m3Err(ln, `a l'expressió «${key}» sobra «${pk().v ?? pk().k}».`, `en la expresión «${key}» sobra «${pk().v ?? pk().k}».`);
  if (M3_XC.size > 2000) M3_XC.clear(); M3_XC.set(key, e);
  return e;
}
function m3Expr(e, env, ln) {
  if (e.n !== undefined) return e.n;
  if (e.v !== undefined) { const v = env[e.v]; if (typeof v !== 'number') { if (v === undefined && env[e.v.toLowerCase()] !== undefined) return env[e.v.toLowerCase()]; throw m3Err(ln, `la variable «${e.v}» no existeix (encara). Crea-la abans d'usar-la, per exemple: ${e.v} = 20`, `la variable «${e.v}» no existe (todavía). Créala antes de usarla, por ejemplo: ${e.v} = 20`); } return v; }
  if (e.neg) return -m3Expr(e.neg, env, ln);
  if (e.f) { const a = e.args.map(x => m3Expr(x, env, ln)), R = Math.PI / 180, F = M3_FN[e.f];
    if (a.length !== F) throw m3Err(ln, `«${e.f}» necessita ${F} ${F === 1 ? 'número' : 'números'}.`, `«${e.f}» necesita ${F} ${F === 1 ? 'número' : 'números'}.`);
    switch (e.f) { case 'sin': return m3R(Math.sin(a[0] * R), 12); case 'cos': return m3R(Math.cos(a[0] * R), 12); case 'tan': return m3R(Math.tan(a[0] * R), 12); case 'sqrt': case 'arrel': case 'raiz': return Math.sqrt(Math.max(0, a[0])); case 'abs': return Math.abs(a[0]);
      case 'min': return Math.min(a[0], a[1]); case 'max': return Math.max(a[0], a[1]); case 'round': case 'arrodoneix': case 'redondea': return Math.round(a[0]); case 'floor': return Math.floor(a[0]); case 'ceil': return Math.ceil(a[0]); } }
  const A = m3Expr(e.a, env, ln), B = m3Expr(e.b, env, ln);
  switch (e.op) { case '+': return A + B; case '-': return A - B; case '*': return A * B; case '^': return A ** B; case '%': return B ? A % B : NaN;
    case '/': if (!B) throw m3Err(ln, 'no es pot dividir per zero.', 'no se puede dividir por cero.'); return A / B; }
  return NaN;
}
const m3ExprVars = (e, out = new Set()) => { if (!e) return out; if (e.v !== undefined) out.add(e.v); if (e.neg) m3ExprVars(e.neg, out); if (e.args) e.args.forEach(x => m3ExprVars(x, out)); if (e.a) { m3ExprVars(e.a, out); m3ExprVars(e.b, out); } return out; };

/* ---------- Instruccions: text → AST ---------- */
function m3Parse(src) {
  const T = m3Lex(src), s = String(src || ''); let p = 0;
  const pk = (o = 0) => { let q = p, n = 0; for (;;) { if (T[q].k === 'nl') { q++; continue; } if (n === o) return T[q]; n++; q++; } };
  const skip = () => { while (T[p].k === 'nl' || T[p].k === ';') p++; };
  const next = () => { skip(); return T[p++]; };
  const kw = t => t && t.k === 'id' ? M3_KW[t.v.toLowerCase()] || null : null;
  // un ! just després d'una instrucció la marca com a «equivocada» (pas m3spot)
  const bang = () => { if (T[p].k === '!') { p++; return { x: 1 }; } return {}; };
  // una expressió: el text tal com l'ha escrit (fins a la coma o el parèntesi del mateix nivell)
  const expr = (stop, paren) => { if (paren) skip(); const a = T[p]; let d = 0, last = null;
    while (T[p].k !== 'eof') { const t = T[p]; if (t.k === 'nl') { if (d === 0 && !paren) break; p++; continue; } if (d === 0 && stop.includes(t.k)) break; if (t.k === '(') d++; if (t.k === ')') { if (d === 0) break; d--; } if (t.k === '{' || t.k === '}' || t.k === ';' || t.k === '!') break; last = t; p++; }
    if (!last) throw m3Err(a.ln, `aquí hi falta un número o una variable.`, `aquí falta un número o una variable.`);
    if (T.slice(T.indexOf(a), T.indexOf(last) + 1).some(t => t.k === 'id' && M3_KW[t.v.toLowerCase()] && !M3_FN[t.v.toLowerCase()])) { const w = T.slice(T.indexOf(a), T.indexOf(last) + 1).find(t => t.k === 'id' && M3_KW[t.v.toLowerCase()]); throw m3Err(w.ln, `«${w.v}» no pot anar dins d'un càlcul: potser falta acabar la línia d'abans (per exemple, mida = 20).`, `«${w.v}» no puede ir dentro de un cálculo: quizá falta terminar la línea anterior (por ejemplo, medida = 20).`); }
    const txt = s.slice(a.at, last.end).replace(/\s+/g, ' ').trim(); m3ExprParse(txt, a.ln); return txt; };
  const args = (name, ln) => { const t = next(); if (!t || t.k !== '(') throw m3Err(ln, `després de «${name}» hi ha d'anar un parèntesi «(».`, `después de «${name}» tiene que ir un paréntesis «(».`);
    const out = []; let cen = false; skip(); if (T[p].k === ')') { p++; return { a: out, cen }; }
    for (;;) { skip(); const t2 = T[p]; if (t2.k === 'id' && /^centra(t|do|da)$/i.test(t2.v)) { cen = true; p++; } else if (t2.k === 'str') { out.push(t2.v); p++; } else out.push(expr([',', ')'], true));
      skip(); const c = T[p++]; if (c.k === ')') break; if (c.k !== ',') throw m3Err(c.ln, `a «${name}(…)» falta una coma o tancar el parèntesi «)».`, `en «${name}(…)» falta una coma o cerrar el paréntesis «)».`); }
    return { a: out, cen }; };
  const block = (ln, what) => { const o = next(); if (!o || o.k !== '{') throw m3Err(o ? o.ln : ln, `després de «${what}» hi ha d'anar una clau «{».`, `después de «${what}» tiene que ir una llave «{».`); const b = list('}', ln, what); return b; };
  const body = (ln, what) => { skip(); if (T[p].k === '{') { p++; return list('}', ln, what); } const st = T[p].k === 'eof' || T[p].k === '}' ? null : stmt(); if (!st) throw m3Err(ln, `després de «${what}(…)» hi ha d'anar la forma o el bloc { } que vols ${what === m3W('color') ? 'pintar' : 'transformar'}.`, `después de «${what}(…)» tiene que ir la forma o el bloque { } que quieres ${what === m3W('color') ? 'pintar' : 'transformar'}.`); return [st]; };
  const list = (end, ln0, what) => { const out = []; for (;;) { skip(); const t = T[p]; if (t.k === 'eof') { if (end) throw m3Err(ln0, `falta una clau «}» per tancar el bloc «${what}» d'aquesta línia.`, `falta una llave «}» para cerrar el bloque «${what}» de esta línea.`); return out; } if (t.k === '}') { if (!end) throw m3Err(t.ln, 'aquesta clau «}» sobra: no tanca cap bloc.', 'esta llave «}» sobra: no cierra ningún bloque.'); p++; return out; } const st = stmt(); if (st) out.push(st); } };
  const stmt = () => {
    skip(); const t = T[p];
    if (t.k === 'rem') { p++; return { k: 'rem', t: t.v, ln: t.ln }; }
    if (t.k !== 'id') throw m3Err(t.ln, `no entenc «${t.v ?? t.k}». Una instrucció comença amb una forma (cub, cilindre…), una transformació (mou, gira…) o una variable (mida = 20).`, `no entiendo «${t.v ?? t.k}». Una instrucción empieza con una forma (cubo, cilindro…), una transformación (mueve, gira…) o una variable (medida = 20).`);
    const k = kw(t), ln = t.ln;
    if (pk(1).k === '=' && !(k && pk(1).k === '(')) { p++; next(); if (M3_KW[t.v.toLowerCase()]) throw m3Err(ln, `«${t.v}» és una paraula del llenguatge: tria un altre nom per a la variable.`, `«${t.v}» es una palabra del lenguaje: elige otro nombre para la variable.`); const e = expr([]); return { k: 'set', v: t.v, e, ln, ...bang() }; }
    p++;
    if (k && M3_PRIMS.includes(k)) { const { a, cen } = args(t.v, ln); const [mn, mx] = M3_ARGN[k]; if (a.length < mn || a.length > mx || (k === 'cub' && a.length === 2)) throw m3Err(ln, `«${t.v}» necessita ${k === 'cub' ? '1 número (un cub) o 3 (amplada, fondària, alçada)' : mn === mx ? mn + ' números (' + M3_ARGS[k].map(x => x[0]).join(', ') + ')' : `${mn} o ${mx} números (${M3_ARGS[k].map(x => x[0]).join(', ')})`}.`, `«${t.v}» necesita ${k === 'cub' ? '1 número (un cubo) o 3 (anchura, fondo, altura)' : mn === mx ? mn + ' números (' + M3_ARGS[k].map(x => x[1]).join(', ') + ')' : `${mn} o ${mx} números (${M3_ARGS[k].map(x => x[1]).join(', ')})`}.`); return { k: 'prim', t: k, a, ...(cen ? { c: true } : {}), ln, ...bang() }; }
    if (k && M3_TR.includes(k)) { const { a } = args(t.v, ln);
      if (k === 'color') { if (a.length !== 1 || !m3ColHex(a[0])) throw m3Err(ln, `«color» necessita un color: ${M3_COLS.slice(0, 6).map(c => c[0]).join(', ')}… o un codi com #FF8800.`, `«color» necesita un color: ${M3_COLS.slice(0, 6).map(c => c[1]).join(', ')}… o un código como #FF8800.`); }
      else if (!(a.length === 3 || (k === 'escala' && a.length === 1))) throw m3Err(ln, `«${t.v}» necessita 3 números (x, y, z)${k === 'escala' ? ' o 1 (la mateixa escala per a tot)' : ''}.`, `«${t.v}» necesita 3 números (x, y, z)${k === 'escala' ? ' o 1 (la misma escala para todo)' : ''}.`);
      const x = bang(); return { k, a, ...x, b: body(ln, t.v), ln }; }
    if (k && M3_BOOL.includes(k)) { const x = bang(); return { k, ...x, b: block(ln, t.v), ln }; }
    if (k === 'rep') { const v = next(); if (!v || v.k !== 'id' || M3_KW[v.v.toLowerCase()]) throw m3Err(ln, `després de «${t.v}» va el nom del comptador, per exemple: ${t.v} i de 0 a 3 { … }`, `después de «${t.v}» va el nombre del contador, por ejemplo: ${t.v} i de 0 a 3 { … }`);
      const d = next(); if (!d || d.k !== 'id' || !/^(de|des de|desde)$/i.test(d.v)) throw m3Err(ln, `escriu-ho així: ${t.v} ${v.v} de 0 a 3 { … }`, `escríbelo así: ${t.v} ${v.v} de 0 a 3 { … }`);
      const a0 = expr(['id']); const aa = next(); if (!aa || aa.k !== 'id' || !/^(a|fins|hasta)$/i.test(aa.v)) throw m3Err(ln, `escriu-ho així: ${t.v} ${v.v} de 0 a 3 { … }`, `escríbelo así: ${t.v} ${v.v} de 0 a 3 { … }`);
      const a1 = expr(['id']); const a = [a0, a1]; skip(); if (T[p].k === 'id' && /^(pas|paso)$/i.test(T[p].v)) { p++; a.push(expr([])); }
      const x = bang(); return { k: 'rep', v: v.v, a, ...x, b: body(ln, t.v), ln }; }
    if (k === 'def') { const n = next(); if (!n || n.k !== 'id' || M3_KW[n.v.toLowerCase()]) throw m3Err(ln, `després de «${t.v}» va el nom del mòdul, per exemple: ${t.v} torre(alçada) { … }`, `después de «${t.v}» va el nombre del módulo, por ejemplo: ${t.v} torre(altura) { … }`);
      const o = next(); const ps = []; if (!o || o.k !== '(') throw m3Err(ln, `al mòdul «${n.v}» li falta el parèntesi amb els paràmetres: ${t.v} ${n.v}() { … }`, `al módulo «${n.v}» le falta el paréntesis con los parámetros: ${t.v} ${n.v}() { … }`);
      for (;;) { const q = next(); if (q.k === ')') break; if (q.k === ',') continue; if (q.k !== 'id') throw m3Err(q.ln, `els paràmetres del mòdul «${n.v}» han de ser noms separats per comes.`, `los parámetros del módulo «${n.v}» tienen que ser nombres separados por comas.`); ps.push(q.v); }
      const x = bang(); return { k: 'def', n: n.v, ps, ...x, b: block(ln, n.v), ln }; }
    if (!k && pk().k === '(') { const { a } = args(t.v, ln); return { k: 'call', n: t.v, a, ln, ...bang() }; }
    const near = m3Near(t.v, Object.keys(M3_KW));
    throw m3Err(ln, `no conec «${t.v}».${near ? ` Volies dir «${near}»?` : ''}`, `no conozco «${t.v}».${near ? ` ¿Querías decir «${near}»?` : ''}`);
  };
  return list(null, 1, '');
}

/* ---------- AST → text (en la llengua de l'alumne/a) ---------- */
function m3Print(prog, o = {}) {
  const lang = o.lang, out = []; let ln = 1;
  const A = a => a.map(x => typeof x === 'string' && (m3ColHex(x) && !/^[\d.]/.test(x)) && !/^[A-Za-zÀ-ÿ_]\w*$/.test(x) ? `"${x}"` : x).join(', ');
  const head = st => {
    switch (st.k) {
      case 'set': return `${st.v} = ${st.e}`;
      case 'prim': return `${m3W(st.t, lang)}(${st.a.join(', ')}${st.c ? (st.a.length ? ', ' : '') + m3W('centrat', lang) : ''})`;
      case 'color': { const c = String(st.a[0]), pr = M3_COLS.find(x => x.includes(c.toLowerCase())); return `color("${pr ? pr[(lang || (typeof LANG !== 'undefined' ? LANG : 'ca')) === 'es' ? 1 : 0] : c}")`; }
      case 'mou': case 'gira': case 'escala': return `${m3W(st.k, lang)}(${st.a.join(', ')})`;
      case 'uneix': case 'resta': case 'interseca': return m3W(st.k, lang);
      case 'rep': return `${m3W('rep', lang)} ${st.v} ${m3W('de', lang)} ${st.a[0]} ${m3W('a', lang)} ${st.a[1]}${st.a[2] ? ` ${m3W('pas', lang)} ${st.a[2]}` : ''}`;
      case 'def': return `${m3W('def', lang)} ${st.n}(${st.ps.join(', ')})`;
      case 'call': return `${st.n}(${A(st.a)})`;
      case 'rem': return `// ${st.t}`;
    }
    return '';
  };
  const inl = st => st.k === 'prim' || st.k === 'call' || ((M3_TR.includes(st.k)) && st.b.length === 1 && inl(st.b[0]));
  const lineOf = st => { st.ln = ln; let s = head(st); if (M3_TR.includes(st.k) && st.b.length === 1 && inl(st.b[0])) s += ' ' + lineOf(st.b[0]); return s; };
  const W = (l, d) => { for (const st of l) { const pad = '  '.repeat(d);
    if (st.b && !(M3_TR.includes(st.k) && st.b.length === 1 && inl(st.b[0]))) { st.ln = ln; out.push(pad + head(st) + ' {'); ln++; W(st.b, d + 1); out.push(pad + '}'); ln++; }
    else { out.push(pad + lineOf(st)); ln++; } } };
  W(prog || [], 0);
  return out.join('\n');
}
// el programa en OpenSCAD (per exportar-lo i obrir-lo amb l'OpenSCAD de veritat)
function m3Scad(prog) {
  const id = n => String(n).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/·/g, '').replace(/[^A-Za-z0-9_]/g, '_');
  const X = e => { const t = m3ExprParse(e); const w = (x, p = 0) => { if (x.n !== undefined) return String(m3R(x.n, 6)); if (x.v !== undefined) return id(x.v); if (x.neg) return '-' + w(x.neg, 9);
      if (x.f) { const f = { arrel: 'sqrt', raiz: 'sqrt', arrodoneix: 'round', redondea: 'round' }[x.f] || x.f; return `${f}(${x.args.map(a => w(a)).join(', ')})`; }
      const P = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, '^': 3 }[x.op], s = x.op === '^' ? `pow(${w(x.a)}, ${w(x.b)})` : `${w(x.a, P)} ${x.op} ${w(x.b, P + (x.op === '-' || x.op === '/' ? 1 : 0))}`; return P < p && x.op !== '^' ? `(${s})` : s; };
    return w(t); };
  const pts = P => `[${P.map(([x, y]) => `[${x}, ${y}]`).join(', ')}]`;
  const prim = st => { const a = st.a.map(X), c = st.c;
    switch (st.t) {
      case 'cub': return a.length === 1 ? `cube(${a[0]}${c ? ', center = true' : ''});` : `cube([${a.join(', ')}]${c ? ', center = true' : ''});`;
      case 'cil': return `cylinder(h = ${a[1]}, d = ${a[0]}${c ? ', center = true' : ''});`;
      case 'esf': return `sphere(d = ${a[0]});`;
      case 'con': return `cylinder(h = ${a[1]}, d1 = ${a[0]}, d2 = ${a[2] || 0}${c ? ', center = true' : ''});`;
      case 'prisma': return `cylinder(h = ${a[1]}, d = ${a[0]}, $fn = 6${c ? ', center = true' : ''});`;
      case 'pir': return `${c ? `translate([0, 0, -(${a[2]}) / 2]) ` : ''}linear_extrude(height = ${a[2]}, scale = 0) square([${a[0]}, ${a[1]}], center = true);`;
      case 'tub': return `${c ? `translate([0, 0, -(${a[1]}) / 2]) ` : ''}difference() { cylinder(h = ${a[1]}, d = ${a[0]}); translate([0, 0, -1]) cylinder(h = ${a[1]} + 2, d = ${a[0]} - 2 * ${a[2]}); }`;
      case 'anell': return `translate([0, 0, ${c ? 0 : `(${a[1]}) / 2`}]) rotate_extrude() translate([(${a[0]} - ${a[1]}) / 2, 0]) circle(d = ${a[1]});`;
      case 'falca': return `${c ? `translate([-(${a[0]}) / 2, -(${a[1]}) / 2, -(${a[2]}) / 2]) ` : ''}translate([0, ${a[1]}, 0]) rotate([90, 0, 0]) linear_extrude(height = ${a[1]}) polygon([[0, 0], [${a[0]}, 0], [0, ${a[2]}]]);`;
      case 'estrella': return `${c ? `translate([0, 0, -(${a[1]}) / 2]) ` : ''}linear_extrude(height = ${a[1]}) scale([(${a[0]}) / 2, (${a[0]}) / 2]) polygon(${pts(m3StarPts(st.a[2] ? m3Num(st.a[2]) : 5))});`;
      case 'cor': return `${c ? `translate([0, 0, -(${a[1]}) / 2]) ` : ''}linear_extrude(height = ${a[1]}) scale([(${a[0]}) / 2, (${a[0]}) / 2]) polygon(${pts(M3_HEART)});`;
    } return ''; };
  const out = ['// Fet amb Numi Tech · Tech 3D (Nivell 2)', '$fn = 64;', '']; const W = (l, d) => { for (const st of l) { const pad = '  '.repeat(d);
    if (st.k === 'rem') out.push(`${pad}// ${st.t}`);
    else if (st.k === 'set') out.push(`${pad}${id(st.v)} = ${X(st.e)};`);
    else if (st.k === 'prim') out.push(pad + prim(st));
    else if (st.k === 'call') out.push(`${pad}${id(st.n)}(${st.a.map(X).join(', ')});`);
    else { const h = st.k === 'mou' ? `translate([${st.a.map(X).join(', ')}])` : st.k === 'gira' ? `rotate([${st.a.map(X).join(', ')}])` : st.k === 'escala' ? `scale(${st.a.length === 1 ? X(st.a[0]) : `[${st.a.map(X).join(', ')}]`})` : st.k === 'color' ? `color("${m3ColHex(st.a[0])}")`
        : st.k === 'uneix' ? 'union()' : st.k === 'resta' ? 'difference()' : st.k === 'interseca' ? 'intersection()' : st.k === 'rep' ? `for (${id(st.v)} = [${X(st.a[0])} : ${st.a[2] ? X(st.a[2]) + ' : ' : ''}${X(st.a[1])}])` : st.k === 'def' ? `module ${id(st.n)}(${st.ps.map(id).join(', ')})` : '';
      out.push(`${pad}${h} {`); W(st.b, d + 1); out.push(`${pad}}`); } } };
  W(prog || [], 0); return out.join('\n') + '\n';
}

/* ---------- Avaluar el programa → arbre CSG ---------- */
function m3Run(src, o = {}) {
  const res = { prog: null, tree: null, env: {}, used: new Set(), err: null, n: 0, it: 0, src: null, warn: null };
  try {
    res.prog = typeof src === 'string' ? m3Parse(src) : src || [];
    res.src = typeof src === 'string' ? src : m3Print(res.prog, { lang: 'ca' });
    const mods = {}, over = o.over || {}, glob = Object.create(null); Object.assign(glob, over);
    let pid = 0;
    const leafOf = (st, M, col, sz, extra, neg) => { if (++res.n > M3_LIM.parts) throw m3Err(st.ln, `el programa fa més de ${M3_LIM.parts} peces. Revisa els bucles: potser repeteixes massa vegades.`, `el programa hace más de ${M3_LIM.parts} piezas. Revisa los bucles: quizá repites demasiadas veces.`);
      if (sz.some(v => !(v > 0))) throw m3Err(st.ln, `les mides de «${m3W(st.t)}» han de ser més grans que 0 (ara són ${sz.map(v => m3R(v, 2)).join(', ')}).`, `las medidas de «${m3W(st.t)}» tienen que ser mayores que 0 (ahora son ${sz.map(v => m3R(v, 2)).join(', ')}).`);
      return { prim: { id: 'q' + (++pid), t: extra.t, s: sz.map(v => m3R(v, 4)), m: M.map(v => m3R(v, 9)), c: col || '#D63F8C', ...(extra.top != null ? { top: extra.top } : {}), ...(extra.w != null ? { w: extra.w } : {}), ...(extra.n != null ? { n: extra.n } : {}), ...(neg ? { hole: true } : {}), ln: st.ln, sid: st._id } }; };
    const U = l => { const k = l.filter(Boolean); return !k.length ? null : k.length === 1 ? k[0] : { op: 'union', kids: k }; };
    const ev = (list, env, M, col, depth, neg) => { const out = [];
      for (const st of list) { const x = one(st, env, M, col, depth, neg); if (x) out.push(x); }
      return out; };
    const num = (e, env, ln) => { const v = m3Expr(m3ExprParse(e, ln), env, ln); if (!isFinite(v)) throw m3Err(ln, `el resultat de «${e}» no és un número vàlid.`, `el resultado de «${e}» no es un número válido.`); return v; };
    const one = (st, env, M, col, depth, neg) => {
      if (depth > M3_LIM.depth) throw m3Err(st.ln, 'hi ha massa mòduls un dins de l\'altre (potser un mòdul es crida a si mateix).', 'hay demasiados módulos uno dentro de otro (quizá un módulo se llama a sí mismo).');
      switch (st.k) {
        case 'rem': return null;
        case 'set': { res.used.add('var'); const v = env === glob && st.v in over ? over[st.v] : num(st.e, env, st.ln); env[st.v] = v; if (env === glob) res.env[st.v] = v; return null; }
        case 'def': res.used.add('def'); mods[st.n.toLowerCase()] = st; return null;
        case 'prim': { res.used.add(st.t); const a = st.a.map(e => num(e, env, st.ln)), c = !!st.c;
          let s, off, ex = {};
          switch (st.t) {
            case 'cub': s = a.length === 1 ? [a[0], a[0], a[0]] : a; off = c ? [0, 0, 0] : [s[0] / 2, s[1] / 2, s[2] / 2]; ex.t = 'box'; break;
            case 'falca': s = a; off = c ? [0, 0, 0] : [s[0] / 2, s[1] / 2, s[2] / 2]; ex.t = 'wedge'; break;
            case 'esf': s = [a[0], a[0], a[0]]; off = [0, 0, 0]; ex.t = 'sph'; break;
            case 'cil': s = [a[0], a[0], a[1]]; ex.t = 'cyl'; break;
            case 'con': { const d2 = a[2] || 0; if (d2 > a[0]) { s = [d2, d2, a[1]]; ex = { t: 'cone', top: a[0] / d2, flip: true }; } else { s = [a[0], a[0], a[1]]; ex = { t: 'cone', top: a[0] ? d2 / a[0] : 0 }; } break; }
            case 'pir': s = a; ex.t = 'pyr'; break;
            case 'tub': s = [a[0], a[0], a[1]]; ex = { t: 'tube', w: a[2] }; if (!(a[2] > 0) || a[2] * 2 >= a[0]) throw m3Err(st.ln, `la paret del tub ha de ser més gran que 0 i més petita que la meitat del diàmetre.`, `la pared del tubo tiene que ser mayor que 0 y menor que la mitad del diámetro.`); break;
            case 'anell': s = [a[0], a[0], a[1]]; ex.t = 'torus'; if (a[1] * 2 > a[0]) throw m3Err(st.ln, "el gruix de l'anell no pot ser més gran que la meitat del diàmetre.", 'el grosor del anillo no puede ser mayor que la mitad del diámetro.'); break;
            case 'prisma': s = [a[0], a[0] * Math.sqrt(3) / 2, a[1]]; ex.t = 'hex'; break;
            case 'estrella': s = [a[0], a[0], a[1]]; ex = { t: 'star', n: Math.max(3, Math.min(12, Math.round(a[2] || 5))) }; break;
            case 'cor': s = [a[0], a[0], a[1]]; ex.t = 'heart'; break;
          }
          if (!off) off = c ? [0, 0, 0] : [0, 0, s[2] / 2];
          let MM = M3M.mul(M, M3M.t(...off)); if (ex.flip) { MM = M3M.mul(MM, M3M.rx(180)); delete ex.flip; }
          return leafOf(st, MM, col, s, ex, neg); }
        case 'mou': case 'gira': case 'escala': { res.used.add(st.k); const a = st.a.map(e => num(e, env, st.ln));
          const T = st.k === 'mou' ? M3M.t(...a) : st.k === 'gira' ? M3M.rot(a) : a.length === 1 ? M3M.s(a[0], a[0], a[0]) : M3M.s(...a);
          if (st.k === 'escala' && (a.length === 1 ? !a[0] : a.some(v => !v))) throw m3Err(st.ln, "«escala» amb un 0 aplana la forma del tot: fes servir números diferents de 0.", '«escala» con un 0 aplana del todo la forma: usa números distintos de 0.');
          return U(ev(st.b, env, M3M.mul(M, T), col, depth, neg)); }
        case 'color': res.used.add('color'); return U(ev(st.b, env, M, m3ColHex(st.a[0]) || col, depth, neg));
        case 'uneix': res.used.add('union'); return U(ev(st.b, env, M, col, depth, neg));
        case 'resta': { res.used.add('diff'); const k = st.b.map(x => one(x, env, M, col, depth, false)), first = k.findIndex(Boolean); if (first < 0) return null;
          const kids = [k[first], ...k.slice(first + 1).filter(Boolean).map(x => m3Neg(x))]; return kids.length === 1 ? kids[0] : { op: 'diff', kids }; }
        case 'interseca': { res.used.add('inter'); const k = ev(st.b, env, M, col, depth, neg); return !k.length ? null : k.length === 1 ? k[0] : { op: 'inter', kids: k }; }
        case 'rep': { res.used.add('rep'); const a0 = num(st.a[0], env, st.ln), a1 = num(st.a[1], env, st.ln), stp = st.a[2] ? num(st.a[2], env, st.ln) : (a1 >= a0 ? 1 : -1);
          if (!stp || (a1 - a0) / stp < 0 && Math.abs(a1 - a0) > 1e-9) { if (!stp) throw m3Err(st.ln, 'el pas del bucle no pot ser 0.', 'el paso del bucle no puede ser 0.'); return null; }
          const out = []; for (let v = a0, n = 0; stp > 0 ? v <= a1 + 1e-9 : v >= a1 - 1e-9; v = a0 + (++n) * stp) {
            if (++res.it > M3_LIM.iters) throw m3Err(st.ln, `el bucle fa més de ${M3_LIM.iters} voltes. Revisa els números de «${m3W('rep')}».`, `el bucle da más de ${M3_LIM.iters} vueltas. Revisa los números de «${m3W('rep')}».`);
            const e2 = Object.create(env); e2[st.v] = m3R(v, 9); out.push(...ev(st.b, e2, M, col, depth, neg)); }
          return U(out); }
        case 'call': { res.used.add('call'); const d = mods[st.n.toLowerCase()];
          if (!d) { const nk = m3Near(st.n, Object.keys(M3_KW)); if (nk && !Object.keys(mods).length) throw m3Err(st.ln, `no conec «${st.n}». Volies dir «${nk}»?`, `no conozco «${st.n}». ¿Querías decir «${nk}»?`); const near = m3Near(st.n, Object.keys(mods)); throw m3Err(st.ln, `no hi ha cap mòdul que es digui «${st.n}».${near ? ` Volies dir «${near}»?` : ` Primer l'has de definir: ${m3W('def')} ${st.n}() { … }`}`, `no hay ningún módulo que se llame «${st.n}».${near ? ` ¿Querías decir «${near}»?` : ` Primero tienes que definirlo: ${m3W('def', 'es')} ${st.n}() { … }`}`); }
          if (st.a.length !== d.ps.length) throw m3Err(st.ln, `el mòdul «${d.n}» necessita ${d.ps.length} ${d.ps.length === 1 ? 'valor' : 'valors'} (${d.ps.join(', ') || 'cap'}) i n'hi has posat ${st.a.length}.`, `el módulo «${d.n}» necesita ${d.ps.length} ${d.ps.length === 1 ? 'valor' : 'valores'} (${d.ps.join(', ') || 'ninguno'}) y le has puesto ${st.a.length}.`);
          const e2 = Object.create(glob); d.ps.forEach((p, i) => { e2[p] = num(st.a[i], env, st.ln); });
          return U(ev(d.b, e2, M, col, depth + 1, neg)); }
      }
      return null;
    };
    // els mòduls es poden definir en qualsevol lloc del programa (com a OpenSCAD)
    const hoist = l => l.forEach(st => { if (st.k === 'def') mods[st.n.toLowerCase()] = st; });
    hoist(res.prog);
    res.tree = U(ev(res.prog, glob, M3M.id(), null, 0, false));
    for (const k of Object.keys(over)) if (!(k in res.env)) res.env[k] = over[k];
  } catch (e) { res.err = e.m3 || { ln: 0, t: String(e.message || e) + '|' + String(e.message || e) }; res.tree = null; if (!e.m3 && typeof console !== 'undefined' && o.debug) console.error(e); }
  return res;
}
// marca com a «forat» (només per dibuixar-les translúcides) les fulles d'una part que es resta
function m3Neg(t) { if (!t) return t; if (t.prim) return { prim: { ...t.prim, hole: true } }; return { op: t.op, kids: t.kids.map(m3Neg) }; }

/* =====================================================================================================================
   La vista 3D. m3View(el, opts) torna de seguida un objecte amb l'API del renderitzador ({ set, mode, select, target,
   view, fit, measure, snapshot, stl, dispose }): mentre es carrega tech-model3d.js (o si no hi ha WebGL) dibuixa una vista
   isomètrica en un canvas 2D amb les mateixes formes; quan el mòdul és a punt, el canvi és transparent.
   ===================================================================================================================== */
let M3_3D = null, M3_3DP = null;
function m3Load() {
  if (M3_3DP) return M3_3DP;
  if (typeof window === 'undefined' || window.__m3flat || (typeof REDUCED !== 'undefined' && REDUCED === 'force2d')) return (M3_3DP = Promise.resolve(null));
  return (M3_3DP = import('./tech-model3d.js').then(m => (M3_3D = m && m.ok && m.ok() ? m : null)).catch(() => (M3_3D = null)));
}
// colors: '#RRGGBB' → [r, g, b] i al revés
const m3Rgb = h => { h = m3ColHex(h) || '#7C5CFF'; return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; };
// malla senzilla (cares en coordenades locals) per al dibuix 2D
function m3Mesh(pr, q = 1) {
  const s = pr.s || [20, 20, 20], a = Math.abs(s[0]) / 2, b = Math.abs(s[1]) / 2, c = Math.abs(s[2]) / 2, F = [], t = pr.t;
  const N = Math.max(12, Math.round(28 * q)), ring = (k, z, n = N) => Array.from({ length: n }, (_, i) => { const u = i / n * Math.PI * 2; return [a * k * Math.cos(u), b * k * Math.sin(u), z]; });
  const prism = P => { const lo = P.map(([x, y]) => [x * a, y * b, -c]), hi = P.map(([x, y]) => [x * a, y * b, c]); F.push(lo.slice().reverse(), hi); for (let i = 0; i < P.length; i++) { const j = (i + 1) % P.length; F.push([lo[i], lo[j], hi[j], hi[i]]); } };
  const loft = (A, B, capA, capB) => { for (let i = 0; i < A.length; i++) { const j = (i + 1) % A.length; F.push([A[i], A[j], B[j], B[i]]); } if (capA) F.push(A.slice().reverse()); if (capB) F.push(B.slice()); };
  switch (t) {
    case 'cyl': loft(ring(1, -c), ring(1, c), true, true); break;
    case 'cone': { const k = Math.max(0, Math.min(1, pr.top ?? 0)); if (k < 0.02) { const A = ring(1, -c); for (let i = 0; i < N; i++) F.push([A[i], A[(i + 1) % N], [0, 0, c]]); F.push(A.slice().reverse()); } else loft(ring(1, -c), ring(k, c), true, true); break; }
    case 'sph': { const R = Math.max(6, Math.round(12 * q)), lat = i => -Math.PI / 2 + i / R * Math.PI; for (let i = 0; i < R; i++) for (let j = 0; j < N; j++) { const P = (ii, jj) => { const la = lat(ii), lo = jj / N * Math.PI * 2; return [a * Math.cos(la) * Math.cos(lo), b * Math.cos(la) * Math.sin(lo), c * Math.sin(la)]; }; F.push([P(i, j), P(i, j + 1), P(i + 1, j + 1), P(i + 1, j)]); } break; }
    case 'pyr': { const B = [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c]], A = [0, 0, c]; F.push(B.slice().reverse()); for (let i = 0; i < 4; i++) F.push([B[i], B[(i + 1) % 4], A]); break; }
    case 'wedge': { const P = [[-a, -c], [a, -c], [-a, c]]; const L0 = P.map(([x, z]) => [x, -b, z]), L1 = P.map(([x, z]) => [x, b, z]); F.push(L0, L1.slice().reverse()); for (let i = 0; i < 3; i++) { const j = (i + 1) % 3; F.push([L0[j], L0[i], L1[i], L1[j]]); } break; }
    case 'torus': { const q2 = Math.min(1, (2 * c) / Math.min(2 * a, 2 * b)), R = Math.max(6, Math.round(10 * q)); const P = (i, j) => { const u = i / N * Math.PI * 2, v = j / R * Math.PI * 2, r = (1 - q2) + q2 * Math.cos(v); return [a * r * Math.cos(u), b * r * Math.sin(u), c * Math.sin(v)]; };
      for (let i = 0; i < N; i++) for (let j = 0; j < R; j++) F.push([P(i, j), P(i + 1, j), P(i + 1, j + 1), P(i, j + 1)]); break; }
    case 'tube': { const w = Math.max(0.2, pr.w ?? 2), ka = Math.max(0.05, (a - w) / a), kb = Math.max(0.05, (b - w) / b), inn = z => Array.from({ length: N }, (_, i) => { const u = i / N * Math.PI * 2; return [(a * ka) * Math.cos(u), (b * kb) * Math.sin(u), z]; });
      const o0 = ring(1, -c), o1 = ring(1, c), i0 = inn(-c), i1 = inn(c); loft(o0, o1); for (let i = 0; i < N; i++) { const j = (i + 1) % N; F.push([i1[i], i1[j], i0[j], i0[i]], [o1[i], o1[j], i1[j], i1[i]], [o0[j], o0[i], i0[i], i0[j]]); } break; }
    case 'star': prism(m3StarPts(pr.n ?? 5)); break;
    case 'heart': prism(M3_HEART); break;
    case 'hex': prism([[1, 0], [.5, 1], [-.5, 1], [-1, 0], [-.5, -1], [.5, -1]]); break;
    default: { const V = [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c], [-a, -b, c], [a, -b, c], [a, b, c], [-a, b, c]]; for (const f of [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]]) F.push(f.map(i => V[i])); }
  }
  return F;
}
// les peces d'un model per dibuixar (amb si són forats): { parts } tal qual; d'un arbre, les fulles
function m3DrawParts(model) {
  if (!model) return [];
  if (model.parts) return model.parts.filter(p => p && p.s).map(p => ({ q: p, hole: !!p.hole }));
  return m3Leaves(m3Tree(model)).map(x => ({ q: x.prim, hole: x.neg || !!x.prim.hole }));
}
const M3_VIEWS = { iso: [35, 28], front: [0, 0.01], back: [180, 0.01], right: [90, 0.01], left: [-90, 0.01], top: [0, 89.9] };
// la vista isomètrica en canvas 2D (sense WebGL, i també per a les miniatures)
function m3Flat(el, o = {}) {
  const cv = document.createElement('canvas'); cv.className = 'm3cv2'; el.appendChild(cv);
  const S = { model: null, mode: o.mode || 'edit', sel: new Set(), tgt: null, yaw: 35, pitch: 28, sc: 4, cx: 0, cy: 0, cz: 10, meas: false, faces: [], drag: null, ptr: new Map(), anim: 0, dead: false };
  const cam = () => { const y = S.yaw * Math.PI / 180, p = S.pitch * Math.PI / 180, c = [Math.cos(p) * Math.sin(y), -Math.cos(p) * Math.cos(y), Math.sin(p)];
    const r = [Math.cos(y), Math.sin(y), 0]; return { c, r, u: [c[1] * r[2] - c[2] * r[1], c[2] * r[0] - c[0] * r[2], c[0] * r[1] - c[1] * r[0]] }; };
  const size = () => { const r = el.getBoundingClientRect(); return [Math.max(40, r.width), Math.max(40, r.height)]; };
  const proj = (C, W, H) => P => { const d = [P[0] - S.cx, P[1] - S.cy, P[2] - S.cz]; return [W / 2 + (d[0] * C.r[0] + d[1] * C.r[1] + d[2] * C.r[2]) * S.sc, H / 2 - (d[0] * C.u[0] + d[1] * C.u[1] + d[2] * C.u[2]) * S.sc, d[0] * C.c[0] + d[1] * C.c[1] + d[2] * C.c[2]]; };
  const L = (() => { const v = [0.45, -0.7, 0.95], l = Math.hypot(...v); return v.map(x => x / l); })();
  const build = () => {
    const F = [], add = (list, ghost) => { for (const { q, hole } of list) { const cp = m3Comp(q); if (!cp) continue; const col = m3Rgb(q.c), M = cp.M;
      for (const f of m3Mesh(q, ghost ? 0.6 : 1)) { const P = f.map(v => M3M.ap(M, v[0], v[1], v[2])); let nx = 0, ny = 0, nz = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]); }
        const l = Math.hypot(nx, ny, nz) || 1;
        F.push({ P, n: [nx / l, ny / l, nz / l], col, id: q.id != null ? String(q.id) : null, hole, ghost }); } } };
    add(m3DrawParts(S.model), false); if (S.tgt) add(m3DrawParts(S.tgt), true); S.faces = F;
  };
  const draw = () => {
    if (S.dead) return; const [W, H] = size(), dpr = Math.min(2, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
    const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#F4F1FF'); bg.addColorStop(1, '#DCE3F6'); g.fillStyle = bg; g.fillRect(0, 0, W, H);
    const C = cam(), pj = proj(C, W, H), pl = (o.plate || 200) / 2;
    // la placa: vidre amb quadrícula cada 10 mm (més marcada cada 50)
    if (S.pitch > 0.5) { const Q = [[-pl, -pl, 0], [pl, -pl, 0], [pl, pl, 0], [-pl, pl, 0]].map(pj); g.beginPath(); Q.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath();
      g.fillStyle = '#FAFBFF'; g.fill(); g.save(); g.clip(); for (let v = -pl; v <= pl; v += 10) { const strong = Math.abs(v) % 50 < 1e-6; g.strokeStyle = v === 0 ? 'rgba(124,92,255,.45)' : strong ? 'rgba(80,100,160,.3)' : 'rgba(80,100,160,.12)'; g.lineWidth = strong ? 1.2 : .8;
        let a = pj([v, -pl, 0]), b = pj([v, pl, 0]); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); a = pj([-pl, v, 0]); b = pj([pl, v, 0]); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
      g.restore(); g.strokeStyle = 'rgba(80,100,160,.35)'; g.lineWidth = 1.5; g.beginPath(); Q.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath(); g.stroke();
      // ombres suaus de les peces sòlides
      g.fillStyle = 'rgba(27,43,107,.10)'; for (const { q, hole } of m3DrawParts(S.model)) { if (hole) continue; const cp = m3Comp(q); if (!cp || cp.box[2] > 40) continue; const b = cp.box, e = 1.5; const R = [[b[0] - e, b[1] - e, 0], [b[3] + e, b[1] - e, 0], [b[3] + e, b[4] + e, 0], [b[0] - e, b[4] + e, 0]].map(pj); g.beginPath(); R.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath(); g.fill(); } }
    const vis = [];
    // sense descartar cares (el sentit dels polígons no importa): la normal es gira cap a la càmera i s'ordena per fondària
    for (const f of S.faces) { const d = f.n[0] * C.c[0] + f.n[1] * C.c[1] + f.n[2] * C.c[2]; const Q = f.P.map(pj); let z = 0; for (const p of Q) z += p[2]; vis.push({ f, Q, z: z / Q.length, d, s: d < 0 ? -1 : 1 }); }
    vis.sort((a, b) => a.z - b.z);
    const res = S.mode === 'result';
    for (const { f, Q, s: sg } of vis) {
      if (res && f.hole) continue;
      const lam = Math.max(0, sg * (f.n[0] * L[0] + f.n[1] * L[1] + f.n[2] * L[2])), k = 0.56 + 0.44 * lam, sel = f.id != null && S.sel.has(f.id);
      const [r, gg, b] = f.hole ? [150, 160, 185] : f.col, sh = v => Math.max(0, Math.min(255, Math.round(v * k + (1 - k) * 18)));
      g.beginPath(); Q.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath();
      if (f.ghost) { g.fillStyle = 'rgba(124,92,255,.10)'; g.fill(); g.strokeStyle = 'rgba(124,92,255,.35)'; g.lineWidth = .6; g.stroke(); continue; }
      if (f.hole) { g.fillStyle = `rgba(${sh(r)},${sh(gg)},${sh(b)},.28)`; g.fill(); g.strokeStyle = 'rgba(90,100,130,.45)'; g.lineWidth = .7; g.stroke(); continue; }
      g.fillStyle = `rgb(${sh(r)},${sh(gg)},${sh(b)})`; g.fill(); g.strokeStyle = sel ? '#FFC531' : `rgba(${sh(r * .7)},${sh(gg * .7)},${sh(b * .7)},.55)`; g.lineWidth = sel ? 2 : .6; g.stroke();
    }
    // cotes de la peça seleccionada
    if (S.meas && S.sel.size) { const ps = m3DrawParts(S.model).filter(x => S.sel.has(String(x.q.id))); if (ps.length) { const B = ps.map(x => m3Comp(x.q)).filter(Boolean).reduce((o, c) => [Math.min(o[0], c.box[0]), Math.min(o[1], c.box[1]), Math.min(o[2], c.box[2]), Math.max(o[3], c.box[3]), Math.max(o[4], c.box[4]), Math.max(o[5], c.box[5])], [1e9, 1e9, 1e9, -1e9, -1e9, -1e9]);
      const lab = (A, Bp, txt, col) => { const a = pj(A), b = pj(Bp); g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; g.font = '800 12px Lexend, system-ui, sans-serif'; const w = g.measureText(txt).width + 10; g.fillStyle = col; g.beginPath(); g.roundRect ? g.roundRect(m[0] - w / 2, m[1] - 10, w, 20, 10) : g.rect(m[0] - w / 2, m[1] - 10, w, 20); g.fill(); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, m[0], m[1] + 1); };
      const f = v => m3R(v, 1).toString().replace('.', ',') + ' mm';
      lab([B[0], B[1] - 4, B[2]], [B[3], B[1] - 4, B[2]], f(B[3] - B[0]), '#E5484D'); lab([B[3] + 4, B[1], B[2]], [B[3] + 4, B[4], B[2]], f(B[4] - B[1]), '#22A06B'); lab([B[3] + 4, B[1] - 4, B[2]], [B[3] + 4, B[1] - 4, B[5]], f(B[5] - B[2]), '#2F5BEA'); } }
    S.vis = vis;
  };
  const fit = () => { const pts = S.faces.flatMap(f => f.P); const [W, H] = size(); if (!pts.length) { S.cx = 0; S.cy = 0; S.cz = 10; S.sc = Math.min(W, H) / 120; return; }
    const B = pts.reduce((o, p) => [Math.min(o[0], p[0]), Math.min(o[1], p[1]), Math.min(o[2], p[2]), Math.max(o[3], p[0]), Math.max(o[4], p[1]), Math.max(o[5], p[2])], [1e9, 1e9, 1e9, -1e9, -1e9, -1e9]);
    const m = 12; B[0] = Math.min(B[0], -m); B[1] = Math.min(B[1], -m); B[3] = Math.max(B[3], m); B[4] = Math.max(B[4], m); B[2] = Math.min(B[2], 0);
    S.cx = (B[0] + B[3]) / 2; S.cy = (B[1] + B[4]) / 2; S.cz = (B[2] + B[5]) / 2;
    const C = cam(), corners = []; for (const x of [B[0], B[3]]) for (const y of [B[1], B[4]]) for (const z of [B[2], B[5]]) corners.push([x - S.cx, y - S.cy, z - S.cz]);
    let w = 0, h = 0; for (const d of corners) { w = Math.max(w, Math.abs(d[0] * C.r[0] + d[1] * C.r[1] + d[2] * C.r[2])); h = Math.max(h, Math.abs(d[0] * C.u[0] + d[1] * C.u[1] + d[2] * C.u[2])); }
    S.sc = Math.max(0.3, Math.min(W / 2 / (w * 1.18 || 1), H / 2 / (h * 1.25 || 1))); };
  const tween = (yaw, pitch) => { const y0 = S.yaw, p0 = S.pitch; let dy = yaw - y0; while (dy > 180) dy -= 360; while (dy < -180) dy += 360; const t0 = performance.now(), me = ++S.anim;
    const st = now => { if (me !== S.anim || S.dead) return; const k = Math.min(1, (now - t0) / 380), e = 1 - (1 - k) ** 3; S.yaw = y0 + dy * e; S.pitch = p0 + (pitch - p0) * e; fit(); draw(); if (k < 1) requestAnimationFrame(st); };
    requestAnimationFrame(st); };
  // tocar, arrossegar una peça (en el pla), girar la càmera, zoom amb la roda o amb dos dits
  const pick = (x, y) => { for (let i = (S.vis || []).length - 1; i >= 0; i--) { const { f, Q } = S.vis[i]; if (f.ghost || f.id == null || (S.mode === 'result' && f.hole)) continue; if (m3Pip(Q, x, y)) return f.id; } return null; };
  const rel = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  cv.addEventListener('pointerdown', e => { const [x, y] = rel(e); S.ptr.set(e.pointerId, [x, y]); cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
    if (S.ptr.size === 2) { const [a, b] = [...S.ptr.values()]; S.drag = { pinch: Math.hypot(a[0] - b[0], a[1] - b[1]), sc: S.sc }; return; }
    const id = pick(x, y); if (o.onPick) o.onPick(id);
    const q = id != null && o.editable !== false && S.mode === 'edit' && m3DrawParts(S.model).find(z => String(z.q.id) === id);
    S.drag = q && !q.q.m ? { id, x, y, p0: (q.q.p || [0, 0, 0]).slice(), moved: false } : { orbit: true, x, y, yaw: S.yaw, pitch: S.pitch }; });
  cv.addEventListener('pointermove', e => { if (!S.drag) return; const [x, y] = rel(e); S.ptr.set(e.pointerId, [x, y]); const D = S.drag;
    if (D.pinch) { const [a, b] = [...S.ptr.values()]; if (b) { S.sc = Math.max(0.3, Math.min(60, D.sc * Math.hypot(a[0] - b[0], a[1] - b[1]) / D.pinch)); draw(); } return; }
    if (D.orbit) { S.yaw = D.yaw - (x - D.x) * 0.5; S.pitch = Math.max(-5, Math.min(89.9, D.pitch + (y - D.y) * 0.4)); S.anim++; draw(); return; }
    const C = cam(), dX = (x - D.x) / S.sc, dY = -(y - D.y) / S.sc; let wx, wy, wz = 0;
    const det = C.r[0] * C.u[1] - C.r[1] * C.u[0];
    if (Math.abs(det) > 0.25) { wx = (dX * C.u[1] - dY * C.r[1]) / det; wy = (dY * C.r[0] - dX * C.u[0]) / det; } else { wx = dX * C.r[0]; wy = dX * C.r[1]; wz = dY; }
    const sn = o.snap || 1, p = [D.p0[0] + wx, D.p0[1] + wy, D.p0[2] + wz].map((v, i) => i < 2 || wz ? Math.round(v / sn) * sn : v); if (Math.abs(x - D.x) + Math.abs(y - D.y) > 3) D.moved = true;
    if (D.moved && o.onMove) o.onMove(D.id, p); });
  const up = e => { S.ptr.delete(e.pointerId); const D = S.drag; if (!S.ptr.size) S.drag = null; if (D && D.id && D.moved && o.onDone) o.onDone(); };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); S.sc = Math.max(0.3, Math.min(60, S.sc * (e.deltaY < 0 ? 1.12 : 1 / 1.12))); draw(); }, { passive: false });
  let ro = null; if (typeof ResizeObserver === 'function') { ro = new ResizeObserver(() => { fit(); draw(); }); ro.observe(el); }
  const V = {
    flat: true,
    set(m) { const first = !S.model; S.model = m; build(); if (first) fit(); draw(); },
    mode(m) { S.mode = m; draw(); }, select(id) { S.sel = new Set([].concat(id == null ? [] : id).map(String)); draw(); },
    target(m) { S.tgt = m; build(); draw(); }, view(v) { const w = M3_VIEWS[v] || M3_VIEWS.iso; tween(w[0], w[1]); }, fit() { fit(); draw(); }, measure(on) { S.meas = !!on; draw(); },
    snapshot(w, h) { const c2 = document.createElement('canvas'); c2.width = w; c2.height = h; const g = c2.getContext('2d'); g.drawImage(cv, 0, 0, w, h); return c2.toDataURL('image/png'); },
    stl() { return null; }, redraw() { draw(); }, dispose() { S.dead = true; ro && ro.disconnect(); cv.remove(); }
  };
  if (o.view && M3_VIEWS[o.view]) { S.yaw = M3_VIEWS[o.view][0]; S.pitch = M3_VIEWS[o.view][1]; }
  return V;
}
// miniatura sense WebGL (canvas 2D) → dataURL
function m3FlatThumb(model, w = 240, h = 180, o = {}) {
  if (typeof document === 'undefined') return '';
  const box = document.createElement('div'); box.style.cssText = `position:fixed;left:-9999px;top:0;width:${w}px;height:${h}px`; document.body.appendChild(box);
  const V = m3Flat(box, { mode: o.mode || 'result', view: o.view, editable: false }); V.set(model); V.fit(); V.redraw();
  const cv = box.querySelector('canvas'); let url = ''; try { url = cv.toDataURL('image/png'); } catch (e) { } V.dispose(); box.remove(); return url;
}
// miniatura bona (WebGL si n'hi ha); torna una promesa amb el dataURL
async function m3Thumb(model, w = 240, h = 180, o = {}) {
  const M = await m3Load();
  if (M && M.thumb) { try { const u = await M.thumb(model, w, h, o); if (u) return u; } catch (e) { } }
  return m3FlatThumb(model, w, h, o);
}
// la vista: comença en 2D i passa a 3D quan el mòdul és a punt (i conserva l'estat)
function m3View(el, o = {}) {
  const st = { model: null, mode: o.mode || 'edit', sel: null, tgt: null, view: o.view || 'iso', meas: false, dead: false };
  let cur = m3Flat(el, o); el.classList.add('m3flat');
  const replay = v => { if (st.model) v.set(st.model); v.mode(st.mode); if (st.tgt) v.target(st.tgt); if (st.sel != null) v.select(st.sel); if (st.meas) v.measure(true); if (st.view && st.view !== 'iso') v.view(st.view); v.fit && v.fit(); };
  const W = {
    get is3d() { return !cur.flat; }, get inner() { return cur; },
    set(m) { st.model = m; cur.set(m); }, mode(m) { st.mode = m; cur.mode(m); }, select(id) { st.sel = id; cur.select(id); }, target(m) { st.tgt = m; cur.target(m); },
    view(v) { st.view = v; cur.view(v); }, fit() { cur.fit(); }, measure(on) { st.meas = on; cur.measure(on); }, snapshot(w, h) { return cur.snapshot(w, h); }, stl() { return cur.stl(); },
    dispose() { st.dead = true; cur.dispose(); },
    // torna a encaixar el model si l'alumne/a encara no ha mogut la càmera i la caixa del model ha canviat prou
    refit(box) { if (st.dead || st.user || !box) return; const k = box.map(v => Math.round(v)), o = st.box; st.box = k; if (!o) return; const sz = b => Math.max(b[3] - b[0], b[4] - b[1], b[5] - b[2], 10);
      if (Math.abs(sz(k) - sz(o)) / sz(o) > 0.25 || k.some((v, i) => Math.abs(v - o[i]) > 0.35 * sz(o))) cur.fit && cur.fit(); }
  };
  if (!o.flat) m3Load().then(M => { if (!M || st.dead || !el.isConnected) return; let v; try { v = M.create(el, { plate: 200, snap: 1, quality: 'auto', mode: st.mode, editable: true, bg: 'studio', intro: !window.__shot, ...o }); } catch (e) { return; }
    if (!v) return; const old = cur; cur = v; old.dispose(); el.classList.remove('m3flat'); el.classList.add('m3gl'); replay(v); if (o.onReady) o.onReady(W); });
  // si la vista canvia de mida (la pantalla es recol·loca) i l'alumne/a encara no ha mogut la càmera, es torna a encaixar el model
  const user = () => { st.user = true; }; el.addEventListener('pointerdown', user, true); el.addEventListener('wheel', user, { capture: true, passive: true });
  if (typeof ResizeObserver === 'function') { let last = null, t = 0; const ro = new ResizeObserver(() => { const r = el.getBoundingClientRect(), k = [Math.round(r.width), Math.round(r.height)]; if (last && Math.abs(k[0] - last[0]) < 4 && Math.abs(k[1] - last[1]) < 4) return; const first = !last; last = k; if (first) return;
      clearTimeout(t); t = setTimeout(() => { if (!st.dead && !st.user && cur.fit) cur.fit(true); }, 140); }); ro.observe(el); const d0 = W.dispose; W.dispose = () => { ro.disconnect(); d0(); }; }
  setTimeout(() => { if (!st.dead && !st.user && cur && cur.fit && !cur.flat) cur.fit(true); }, 450);
  return W;
}

/* =====================================================================================================================
   Icones de les formes (dibuix «3D» amb tres tons de cada color)
   ===================================================================================================================== */
const m3Shade = (hex, k) => { const [r, g, b] = m3Rgb(hex), f = v => Math.max(0, Math.min(255, Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k)))); return `rgb(${f(r)},${f(g)},${f(b)})`; };
function m3Ico(t, col = '#7C5CFF', hole = false) {
  const L = m3Shade(col, .38), M = col, D = m3Shade(col, -.32), S = m3Shade(col, -.5), id = 'm3g' + t + col.slice(1) + (hole ? 'h' : '');
  const grad = `<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${D}"/><stop offset=".45" stop-color="${M}"/><stop offset="1" stop-color="${S}"/></linearGradient><radialGradient id="${id}r" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="${L}"/><stop offset=".55" stop-color="${M}"/><stop offset="1" stop-color="${S}"/></radialGradient>${hole ? `<pattern id="${id}p" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" fill="#C9D1E4"/><rect width="2.2" height="5" fill="#A9B4CF"/></pattern>` : ''}</defs>`;
  const g = hole ? `url(#${id}p)` : `url(#${id})`, st = hole ? ' stroke="#8792B0" stroke-width="1.4" stroke-dasharray="3 2"' : '';
  const sh = `<ellipse cx="24" cy="42.5" rx="15" ry="3.2" fill="#1B2B6B" opacity=".14"/>`;
  let body = '';
  switch (t) {
    case 'cyl': body = `<path d="M10 14v20a14 5.5 0 0 0 28 0V14z" fill="${g}"${st}/><ellipse cx="24" cy="14" rx="14" ry="5.5" fill="${hole ? '#DCE2F0' : L}"${st}/>`; break;
    case 'sph': body = `<circle cx="24" cy="23" r="15" fill="${hole ? g : `url(#${id}r)`}"${st}/><ellipse cx="19" cy="16" rx="5" ry="3" fill="#fff" opacity="${hole ? 0 : .45}"/>`; break;
    case 'cone': body = `<path d="M24 6L38 34a14 5 0 0 1-28 0z" fill="${g}"${st}/><path d="M10 34a14 5 0 0 0 28 0" fill="none" stroke="${D}" stroke-width="1" opacity=".6"/>`; break;
    case 'pyr': body = `<path d="M24 6L8 32l14 6z" fill="${hole ? g : L}"${st}/><path d="M24 6l-2 32 18-8z" fill="${hole ? g : D}"${st}/>`; break;
    case 'wedge': body = `<path d="M7 32l16 8 18-9-34 1z" fill="${hole ? g : S}"/><path d="M7 14v18l16 8V22z" fill="${hole ? g : M}"${st}/><path d="M7 14l16 8 18 9-18-17z" fill="${hole ? '#DCE2F0' : L}"${st}/><path d="M23 22v18l18-9z" fill="${hole ? g : D}"${st}/>`; break;
    case 'torus': body = `<path fill-rule="evenodd" d="M24 13c9 0 16 4.5 16 10.5S33 34 24 34 8 29.5 8 23.5 15 13 24 13zm0 6c-4.5 0-8 2-8 4.5s3.5 4.5 8 4.5 8-2 8-4.5-3.5-4.5-8-4.5z" fill="${hole ? g : `url(#${id}r)`}"${st}/>`; break;
    case 'tube': body = `<path d="M10 14v20a14 5.5 0 0 0 28 0V14z" fill="${g}"${st}/><ellipse cx="24" cy="14" rx="14" ry="5.5" fill="${hole ? '#DCE2F0' : L}"${st}/><ellipse cx="24" cy="14" rx="9" ry="3.4" fill="${S}"/>`; break;
    case 'star': { const P = m3StarPts(5).map(([x, y]) => [24 + x * 16, 22 - y * 15]), pp = (dy) => P.map(([x, y]) => `${x.toFixed(1)},${(y + dy).toFixed(1)}`).join(' ');
      body = `<polygon points="${pp(5)}" fill="${hole ? '#A9B4CF' : S}"/><polygon points="${pp(0)}" fill="${hole ? g : `url(#${id}r)`}"${st}/>`; break; }
    case 'heart': { const P = M3_HEART.map(([x, y]) => [24 + x * 15, 22 - y * 14]), pp = dy => P.map(([x, y]) => `${x.toFixed(1)},${(y + dy).toFixed(1)}`).join(' ');
      body = `<polygon points="${pp(5)}" fill="${hole ? '#A9B4CF' : S}"/><polygon points="${pp(0)}" fill="${hole ? g : `url(#${id}r)`}"${st}/>`; break; }
    case 'hex': body = `<path d="M9 20v10l8 6h14l8-6V20z" fill="${g}"${st}/><path d="M9 20l8-6h14l8 6-8 6H17z" fill="${hole ? '#DCE2F0' : L}"${st}/>`; break;
    default: body = `<path d="M24 6l16 8-16 8-16-8z" fill="${hole ? '#DCE2F0' : L}"${st}/><path d="M8 14v18l16 8V22z" fill="${hole ? g : M}"${st}/><path d="M40 14v18l-16 8V22z" fill="${hole ? g : D}"${st}/>`;
  }
  return `<svg class="m3ico" viewBox="0 0 48 48" aria-hidden="true">${grad}${sh}${body}</svg>`;
}
// petites icones de la interfície
const M3I = {
  iso: '<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3l8 4.5-8 4.5-8-4.5z" fill="currentColor" opacity=".35"/></svg>',
  front: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" opacity=".35" stroke="currentColor" stroke-width="1.8"/><path d="M9 19v2M15 19v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  top: '<svg viewBox="0 0 24 24"><path d="M12 4l8 4-8 4-8-4z" fill="currentColor" opacity=".35" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 14v6M9 17l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 24 24"><path d="M9 4l8 4v12l-8-4z" fill="currentColor" opacity=".35" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 12h4M5 10l2 2-2 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fit: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',
  undo: '<svg viewBox="0 0 24 24"><path d="M9 7H4V2M4 7a9 9 0 1 1-1 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  redo: '<svg viewBox="0 0 24 24"><path d="M15 7h5V2M20 7a9 9 0 1 0 1 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/></svg>',
  ruler: '<svg viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(-30 12 12)"/><path d="M7.5 9.5l1.2 2M11 7.5l1.2 2M14.5 5.5l1.2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" transform="rotate(0)"/></svg>',
  dl: '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 19h16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dup: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  del: '<svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg>',
  hole: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2.4"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" opacity=".45"/></svg>',
  mirror: '<svg viewBox="0 0 24 24"><path d="M12 2v20" stroke="currentColor" stroke-width="2" stroke-dasharray="2.5 2"/><path d="M9 6L3 18h6zM15 6l6 12h-6z" fill="currentColor" opacity=".8"/></svg>',
  align: '<svg viewBox="0 0 24 24"><path d="M4 3v18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="7" y="5" width="13" height="5" rx="1.5" fill="currentColor"/><rect x="7" y="14" width="8" height="5" rx="1.5" fill="currentColor" opacity=".6"/></svg>',
  group: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/><rect x="6.5" y="6.5" width="6" height="6" rx="1.2" fill="currentColor"/><circle cx="15" cy="15" r="3.4" fill="currentColor" opacity=".6"/></svg>',
  multi: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="11" y="3" width="10" height="10" rx="2" fill="currentColor" opacity=".4" stroke="currentColor" stroke-width="2"/><path d="M16 16v6M13 19h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><path d="M9 7a3 3 0 0 1 6 0v3M7 10h10v9H7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  ghost: '<svg viewBox="0 0 24 24"><path d="M5 20V11a7 7 0 0 1 14 0v9l-2.3-1.6L14.3 20 12 18.4 9.7 20l-2.4-1.6z" fill="currentColor" opacity=".5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="9.5" cy="11" r="1.3" fill="currentColor"/><circle cx="14.5" cy="11" r="1.3" fill="currentColor"/></svg>',
  snap: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM4 12h16M12 4v16" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  blocks: '<svg viewBox="0 0 24 24"><path d="M3 5h8l1 2h9v5H3zM3 14h12l1 2h5v4H3z" fill="currentColor"/></svg>'
};
const M3_PAL = ['#7C5CFF', '#FF8A3D', '#2FB36D', '#3D7BF4', '#F7C531', '#EC5FA8', '#5BC0EB', '#E8453C'];
const M3_SWATCH = ['#7C5CFF', '#D63F8C', '#E8453C', '#FF8A3D', '#F7C531', '#2FB36D', '#14A3B8', '#3D7BF4', '#1B2B6B', '#A0683A', '#F3F3EE', '#9AA3B5'];
const M3_DEF = { box: [20, 20, 20], cyl: [20, 20, 20], sph: [20, 20, 20], cone: [20, 20, 24], pyr: [20, 20, 20], wedge: [20, 20, 20], torus: [30, 30, 8], tube: [24, 24, 20], star: [30, 30, 6], heart: [30, 30, 6], hex: [20, 17.3, 12] };
const m3TName = t => m3T((M3_TN[t] || [t, t]).join('|')).replace(/^./, c => c.toUpperCase());
const M3_SHORT = { hex: ['Hexàgon', 'Hexágono'] };
const m3PName = (t, hole) => hole ? (t === 'cyl' ? m3L('Forat rodó', 'Agujero red.') : m3L('Forat', 'Agujero')) : M3_SHORT[t] ? m3L(...M3_SHORT[t]) : m3TName(t);

/* =====================================================================================================================
   Editor del Nivell 1 (M3ED): peces a la placa amb el dit i amb números (mm)
   ===================================================================================================================== */
let M3E = null;
function m3edMake(st, o = {}) {
  const parts = m3Clone((o.parts || (st.start && st.start.parts) || [])).map((p, i) => ({ id: p.id || 'a' + (i + 1), t: p.t || 'box', s: (p.s || M3_DEF[p.t] || [20, 20, 20]).slice(), p: (p.p || [0, 0, (p.s || [20, 20, 20])[2] / 2]).slice(), r: (p.r || [0, 0, 0]).slice(), c: p.c || M3_PAL[i % M3_PAL.length], hole: !!p.hole, g: p.g ?? null, ...(p.top != null ? { top: p.top } : {}), ...(p.w != null ? { w: p.w } : {}), ...(p.n != null ? { n: p.n } : {}) }));
  const pal = st.palette || ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'hex', 'tube', 'torus', 'star', 'heart', 'hbox', 'hcyl'];
  M3E = { st, parts, sel: [], multi: false, tab: 'size', lock: false, mode: 'edit', view: st.view || 'iso', snap: st.snap || 1, meas: false, ghost: true, U: [], R: [], V: null, res: [], solved: false, tries: 0, hint: false,
    onDone: o.onDone || null, ro: !!o.ro, pal, nid: parts.reduce((n, p) => Math.max(n, +(String(p.id).match(/\d+/) || [0])[0]), 0), lastDup: null, cT: 0 };
  return M3E;
}
const m3edP = id => M3E.parts.find(p => String(p.id) === String(id));
const m3edSelP = () => M3E.sel.map(m3edP).filter(Boolean);
const m3edBox = ps => ps.map(p => m3Comp(p)).filter(Boolean).reduce((o, c) => [Math.min(o[0], c.box[0]), Math.min(o[1], c.box[1]), Math.min(o[2], c.box[2]), Math.max(o[3], c.box[3]), Math.max(o[4], c.box[4]), Math.max(o[5], c.box[5])], [1e9, 1e9, 1e9, -1e9, -1e9, -1e9]);
const m3Fmt = v => (Math.abs(v) < 1e-9 ? 0 : m3R(v, 1)).toString().replace('.', m3L(',', ','));
// la vista principal (barra d'eines a sobre i a sota del 3D)
function m3VpHTML(o = {}) {
  const vb = (v, ico, t) => `<button class="m3vb ${M3E && M3E.view === v ? 'on' : ''}" data-v="${v}" onclick="m3SetView('${v}')" title="${t}" aria-label="${t}">${ico}</button>`;
  return `<div class="m3vp ${o.cls || ''}" id="m3vp"><div class="m3vt"><div class="m3seg">${vb('iso', M3I.iso, m3L('Perspectiva', 'Perspectiva'))}${vb('front', M3I.front, m3L('Davant (alçat)', 'Delante (alzado)'))}${vb('top', M3I.top, m3L('Dalt (planta)', 'Arriba (planta)'))}${vb('right', M3I.right, m3L('Costat (perfil)', 'Lado (perfil)'))}</div>
      <span class="m3sp"></span>${o.right || ''}</div>${o.bottom ? `<div class="m3vbb">${o.bottom}</div>` : ''}<p class="tsay m3say" id="tsay" aria-live="polite"></p></div>`;
}
function m3edHTML() {
  const E = M3E, st = E.st, ro = E.ro;
  const right = `${st.target ? `<button class="m3vb ${E.ghost ? 'on' : ''}" id="m3gh" onclick="m3edGhost()" title="${m3L('Mostra el fantasma (el model que has de fer)', 'Muestra el fantasma (el modelo que tienes que hacer)')}">${M3I.ghost}</button>` : ''}
    <button class="m3vb ${E.mode === 'result' ? 'on' : ''}" id="m3mo" onclick="m3edMode()" title="${m3L('Mira el resultat final (amb els forats fets)', 'Mira el resultado final (con los agujeros hechos)')}">${M3I.eye}<span class="m3vl">${m3L('Resultat', 'Resultado')}</span></button>
    ${ro ? '' : `<button class="m3vb" id="m3un" onclick="m3edUndo()" title="${m3L('Desfés', 'Deshacer')}" aria-label="${m3L('Desfés', 'Deshacer')}" disabled>${M3I.undo}</button><button class="m3vb" id="m3re" onclick="m3edRedo()" title="${m3L('Refés', 'Rehacer')}" aria-label="${m3L('Refés', 'Rehacer')}" disabled>${M3I.redo}</button>`}`;
  const bottom = `<button class="m3vb" onclick="M3E.V&&M3E.V.fit()" title="${m3L('Centra la vista', 'Centra la vista')}" aria-label="${m3L('Centra la vista', 'Centra la vista')}">${M3I.fit}</button>
    <button class="m3vb ${E.meas ? 'on' : ''}" id="m3me" onclick="m3edMeas()" title="${m3L('Mesures (mm)', 'Medidas (mm)')}" aria-label="${m3L('Mesures', 'Medidas')}">${M3I.ruler}</button>
    ${ro ? '' : `<button class="m3chip" id="m3sn" onclick="m3edSnap()" title="${m3L('Pas de la quadrícula', 'Paso de la cuadrícula')}">${M3I.snap}<b>${E.snap}</b> mm</button>`}<span class="m3sp"></span>
    ${st.stl !== false && (st.k === 'm3free' || st.stl) ? `<button class="m3chip" onclick="m3edSTL()" title="${m3L('Descarrega el fitxer STL per imprimir-lo', 'Descarga el archivo STL para imprimirlo')}">${M3I.dl}<b>STL</b></button>` : ''}`;
  return `<div class="tstage m3stage m3ed ${ro ? 'ro' : ''}" id="m3st">${m3VpHTML({ right, bottom })}
    <div class="m3ck" id="m3ck">${m3CkHTML(st.checks, E.res)}</div>
    ${ro ? '' : `<div class="m3in" id="m3in">${m3edInsp()}</div><div class="m3pl" id="m3pl">${m3edPal()}</div>`}</div>`;
}
function m3CkHTML(checks, res) {
  if (!checks || !checks.length) return '';
  return `<ul class="m3cks">${checks.map((c, i) => { const ok = res && res[i] && res[i].ok; return `<li class="${ok ? 'ok' : ''}" data-i="${i}"><span class="m3cb">${ok ? TIC.ok : ''}</span><span>${m3T(m3CkLabel(c))}</span></li>`; }).join('')}</ul>`;
}
function m3edPal() {
  const E = M3E;
  return `<div class="m3palh"><b>${m3L('Formes', 'Formas')}</b><small>${m3L('toca per afegir', 'toca para añadir')}</small></div><div class="m3pals">${E.pal.map(k => { const hole = /^h(box|cyl)$/.test(k), t = hole ? k.slice(1) : k;
    return `<button class="m3pb ${hole ? 'hole' : ''}" onclick="m3edAdd('${k}')" title="${hole ? m3L('Forat', 'Agujero') + ' · ' + m3TName(t) : m3TName(t)}">${m3Ico(t, hole ? '#9AA3B5' : '#7C5CFF', hole)}<span>${m3PName(t, hole)}</span></button>`; }).join('')}</div>`;
}
// l'inspector: la peça seleccionada (mides, posició, gir, color) i les eines
function m3edInsp() {
  const E = M3E, ps = m3edSelP();
  if (!ps.length) return `<div class="m3emp"><span class="m3empi">${m3Ico('box', '#7C5CFF')}</span><p>${E.parts.length ? m3L('<b>Toca una peça</b> per moure-la, girar-la o canviar-ne les mides. O afegeix-ne una de la paleta.', '<b>Toca una pieza</b> para moverla, girarla o cambiar sus medidas. O añade una de la paleta.') : m3L('<b>Afegeix una forma</b> de la paleta: apareixerà al mig de la placa.', '<b>Añade una forma</b> de la paleta: aparecerá en el centro de la placa.')}</p>
      ${E.parts.length > 1 ? `<button class="m3tb" onclick="m3edAll()">${M3I.multi}<span>${m3L('Totes', 'Todas')}</span></button>` : ''}</div>`;
  const one = ps.length === 1 ? ps[0] : null, B = m3edBox(ps), grp = ps.length > 1 && ps.every(p => p.g != null && p.g === ps[0].g) && E.parts.filter(p => p.g === ps[0].g).length === ps.length;
  const name = one ? `${m3Ico(one.t, one.hole ? '#9AA3B5' : one.c, one.hole)}<b>${one.hole ? m3L('Forat', 'Agujero') + ' · ' : ''}${m3TName(one.t)}</b>` : `${M3I.group}<b>${grp ? m3L('Grup', 'Grupo') : m3L(`${ps.length} peces`, `${ps.length} piezas`)}</b>`;
  const tabs = [['size', m3L('Mida', 'Medida') + ' <small>mm</small>'], ['pos', m3L('Posició', 'Posición') + ' <small>mm</small>'], ['rot', m3L('Gir', 'Giro') + ' <small>°</small>'], ['col', m3L('Color', 'Color')]];
  const f = (key, ax, v, unit, dis) => `<label class="m3f a${ax}"><span class="m3ax">${'XYZ'[ax]}</span><button type="button" onclick="m3edNudge('${key}',${ax},-1)" ${dis ? 'disabled' : ''} aria-label="−">−</button><input inputmode="decimal" value="${dis ? '—' : m3Fmt(v)}" ${dis ? 'disabled' : ''} onfocus="this.select()" onkeydown="if(event.key==='Enter')this.blur()" onchange="m3edVal('${key}',${ax},this.value)"><em>${unit}</em><button type="button" onclick="m3edNudge('${key}',${ax},1)" ${dis ? 'disabled' : ''} aria-label="+">+</button></label>`;
  let body = '';
  if (E.tab === 'size') body = `<div class="m3fs">${[0, 1, 2].map(i => f('s', i, one ? one.s[i] : B[i + 3] - B[i], 'mm', !one)).join('')}</div>${one ? `<button class="m3lk ${E.lock ? 'on' : ''}" onclick="M3E.lock=!M3E.lock;m3edDraw()" title="${m3L('Proporcional: canvien totes les mides alhora', 'Proporcional: cambian todas las medidas a la vez')}">${M3I.lock}<span>${m3L('Proporcional', 'Proporcional')}</span></button>` : `<p class="m3fn">${m3L('Les mides es canvien peça a peça.', 'Las medidas se cambian pieza a pieza.')}</p>`}`;
  else if (E.tab === 'pos') body = `<div class="m3fs">${f('p', 0, (B[0] + B[3]) / 2, 'mm')}${f('p', 1, (B[1] + B[4]) / 2, 'mm')}${f('p', 2, B[2], 'mm')}</div><p class="m3fn">${m3L('x i y: el centre · z: l\'alçada de la base sobre la placa', 'x e y: el centro · z: la altura de la base sobre la placa')}</p>`;
  else if (E.tab === 'rot') body = `<div class="m3fs">${[0, 1, 2].map(i => f('r', i, one ? one.r[i] : 0, '°', !one && false)).join('')}</div><p class="m3fn">${m3L('Cada toc gira 15°', 'Cada toque gira 15°')}${one ? '' : ' · ' + m3L('el grup gira al voltant del seu centre', 'el grupo gira alrededor de su centro')}</p>`;
  else body = `<div class="m3sw">${M3_SWATCH.map(c => `<button style="--c:${c}" class="${ps.every(p => String(p.c).toUpperCase() === c) ? 'on' : ''}" onclick="m3edCol('${c}')" aria-label="${c}"></button>`).join('')}</div>`;
  const tool = (fn, ico, t, cls = '', dis = false) => `<button class="m3tb ${cls}" onclick="${fn}" title="${t}" aria-label="${t}" ${dis ? 'disabled' : ''}>${ico}<span>${t}</span></button>`;
  const allHole = ps.every(p => p.hole);
  return `<div class="m3ih"><span class="m3inm">${name}</span><span class="m3tools">${tool('m3edDup()', M3I.dup, m3L('Duplica', 'Duplica'))}${tool('m3edHole()', M3I.hole, allHole ? m3L('Sòlid', 'Sólido') : m3L('Forat', 'Agujero'), allHole ? 'on' : '')}${tool("m3edPop('mir')", M3I.mirror, m3L('Mirall', 'Espejo'))}${tool("m3edPop('ali')", M3I.align, m3L('Alinea', 'Alinea'))}
      ${tool('m3edMulti()', M3I.multi, m3L('Selecciona\'n més', 'Selecciona más'), E.multi ? 'on' : '')}${ps.length > 1 || grp ? tool('m3edGroup()', M3I.group, grp ? m3L('Desagrupa', 'Desagrupa') : m3L('Agrupa', 'Agrupa'), grp ? 'on' : '') : ''}${tool('m3edDel()', M3I.del, m3L('Esborra', 'Borra'), 'del')}</span></div>
    <div class="m3tabs">${tabs.map(([k, t]) => `<button class="${E.tab === k ? 'on' : ''}" onclick="M3E.tab='${k}';m3edDraw()">${t}</button>`).join('')}</div><div class="m3body">${body}</div><div class="m3pop" id="m3pop" hidden></div>`;
}
function m3edDraw() {
  const E = M3E; if (!E) return;
  const i = document.getElementById('m3in'); if (i) { const a = document.activeElement, keep = a && a.closest && a.closest('#m3in') && a.tagName === 'INPUT'; if (!keep) i.innerHTML = m3edInsp(); }
  const u = document.getElementById('m3un'), r = document.getElementById('m3re'); if (u) u.disabled = !E.U.length; if (r) r.disabled = !E.R.length;
}
// muntar: la vista 3D (o 2D) i les comprovacions
function m3edMount() {
  const E = M3E, el = document.getElementById('m3vp'); if (!el) return;
  E.V = m3View(el, { mode: E.mode, editable: !E.ro, snap: E.snap, view: E.view,
    onPick: id => m3edPick(id),
    onMove: (id, p) => m3edMoved(id, p),
    onDone: () => m3edMoveEnd() });
  E.V.set({ parts: E.parts }); if (E.st.target && E.ghost) E.V.target(E.st.target); if (E.view !== 'iso') E.V.view(E.view);
  m3edCheck(true);
  if (!E.ro && typeof document !== 'undefined' && !m3edMount.keys) { m3edMount.keys = 1; document.addEventListener('keydown', m3edKey); }
}
function m3edKey(e) {
  const E = M3E; if (!E || E.ro || !document.getElementById('m3st') || /INPUT|TEXTAREA/.test((e.target || {}).tagName || '')) return;
  const k = e.key, c = e.ctrlKey || e.metaKey;
  if (c && k.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? m3edRedo() : m3edUndo(); return; }
  if (c && k.toLowerCase() === 'y') { e.preventDefault(); m3edRedo(); return; }
  if (!E.sel.length) return;
  if (c && k.toLowerCase() === 'd') { e.preventDefault(); m3edDup(); return; }
  if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); m3edDel(); return; }
  const mv = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [1, 1], ArrowDown: [1, -1], PageUp: [2, 1], PageDown: [2, -1] }[k];
  if (mv) { e.preventDefault(); const d = (e.shiftKey ? 10 : 1) * mv[1]; m3edSet(() => m3edSelP().forEach(p => { p.p[mv[0]] = m3R(p.p[mv[0]] + d, 3); })); }
}
// un canvi: es desa per desfer, es redibuixa i es tornen a mirar les comprovacions
function m3edSet(fn, o = {}) {
  const E = M3E; if (!E || E.ro) return;
  const before = JSON.stringify(E.parts); fn(); const after = JSON.stringify(E.parts);
  if (before !== after) { E.U.push(before); if (E.U.length > 80) E.U.shift(); E.R = []; E.tries++; }
  m3edSync(o);
}
function m3edSync(o = {}) {
  const E = M3E; if (E.V) { E.V.set({ parts: E.parts }); E.V.select(E.sel.length ? (E.sel.length === 1 ? E.sel[0] : E.sel) : null); const B = E.parts.length ? m3edBox(E.parts) : null; if (B && E.V.refit) E.V.refit(B); }
  m3edDraw(); clearTimeout(E.cT); E.cT = setTimeout(() => m3edCheck(), o.now ? 0 : 140);
}
function m3edUndo() { const E = M3E; if (!E.U.length) return; E.R.push(JSON.stringify(E.parts)); E.parts = JSON.parse(E.U.pop()); E.sel = E.sel.filter(id => m3edP(id)); SFX.tap && SFX.tap(); m3edSync(); }
function m3edRedo() { const E = M3E; if (!E.R.length) return; E.U.push(JSON.stringify(E.parts)); E.parts = JSON.parse(E.R.pop()); E.sel = E.sel.filter(id => m3edP(id)); SFX.tap && SFX.tap(); m3edSync(); }
// seleccionar (una peça d'un grup selecciona tot el grup; amb «selecciona'n més» se'n van afegint)
function m3edPick(id) {
  const E = M3E; if (!E) return; if (E.ro && !E.onPickRo) return; if (E.onPickRo) return E.onPickRo(id);
  const p = id != null && m3edP(id); let ids = p ? (p.g != null ? E.parts.filter(q => q.g === p.g).map(q => String(q.id)) : [String(p.id)]) : [];
  if (E.multi && p) { const on = ids.every(x => E.sel.includes(x)); E.sel = on ? E.sel.filter(x => !ids.includes(x)) : [...new Set([...E.sel, ...ids])]; }
  else if (!p && E.multi) return; else E.sel = ids;
  if (E.V) E.V.select(E.sel.length ? (E.sel.length === 1 ? E.sel[0] : E.sel) : null);
  document.getElementById('m3pop') && (document.getElementById('m3pop').hidden = true); m3edDraw();
}
function m3edAll() { M3E.sel = M3E.parts.map(p => String(p.id)); M3E.V && M3E.V.select(M3E.sel); m3edDraw(); }
function m3edMulti() { M3E.multi = !M3E.multi; m3edDraw(); if (M3E.multi) m3Say(m3L('Toca les altres peces que vulguis afegir a la selecció.', 'Toca las otras piezas que quieras añadir a la selección.')); }
// arrossegar a la vista: la peça es mou (i, si és d'un grup, tot el grup)
function m3edMoved(id, p) {
  const E = M3E, q = m3edP(id); if (!q || E.ro) return;
  if (!E.drag) E.drag = JSON.stringify(E.parts);
  // el renderitzador envia el canvi ({ p } | { r } | { s, p }); la vista 2D, la posició nova
  const patch = Array.isArray(p) ? { p } : p || {}, grp = q.g != null ? E.parts.filter(x => x.g === q.g) : [q];
  if (patch.p) { const d = [patch.p[0] - q.p[0], patch.p[1] - q.p[1], patch.p[2] - q.p[2]]; grp.forEach(x => { x.p = x.p.map((v, i) => m3R(v + d[i], 3)); }); }
  if (patch.r) q.r = patch.r.map(v => m3R(v, 2)); if (patch.s) q.s = patch.s.map(v => m3R(v, 3));
  if (!E.sel.includes(String(id))) { E.sel = grp.map(x => String(x.id)); }
  if (E.V && (!E.V.is3d || (grp.length > 1 && patch.p))) E.V.set({ parts: E.parts });
  m3edDraw();
}
function m3edMoveEnd() { const E = M3E; if (!E || !E.drag) return; if (E.drag !== JSON.stringify(E.parts)) { E.U.push(E.drag); E.R = []; E.tries++; } E.drag = null; m3edSync(); }
// afegir una forma de la paleta: al centre de la placa, sense trepitjar les altres
function m3edAdd(k) {
  const E = M3E, hole = /^h(box|cyl)$/.test(k), t = hole ? k.slice(1) : k, s = (M3_DEF[t] || [20, 20, 20]).slice();
  const used = E.parts.map(p => m3Comp(p)).filter(Boolean).map(c => c.box);
  let x = 0, y = 0; for (let n = 0; n < 40; n++) { const ring = Math.ceil(Math.sqrt(n)), ang = n * 2.4, cx = n ? Math.round(Math.cos(ang) * ring * (s[0] + 6) / 5) * 5 : 0, cy = n ? Math.round(Math.sin(ang) * ring * (s[1] + 6) / 5) * 5 : 0;
    if (!used.some(b => cx + s[0] / 2 > b[0] + .5 && cx - s[0] / 2 < b[3] - .5 && cy + s[1] / 2 > b[1] + .5 && cy - s[1] / 2 < b[4] - .5)) { x = cx; y = cy; break; } }
  const id = 'a' + (++E.nid), c = hole ? '#9AA3B5' : M3_PAL[(E.parts.filter(p => !p.hole).length) % M3_PAL.length];
  const p = { id, t, s, p: [x, y, s[2] / 2], r: [0, 0, 0], c, hole, g: null, ...(t === 'tube' ? { w: 2 } : {}), ...(t === 'star' ? { n: 5 } : {}), ...(t === 'cone' ? { top: 0 } : {}) };
  m3edSet(() => { E.parts.push(p); E.sel = [id]; }); SFX.tap && SFX.tap();
}
// camps numèrics
function m3edVal(key, ax, raw) {
  const v = parseFloat(String(raw).replace(',', '.')); if (!isFinite(v)) return m3edDraw();
  const E = M3E, ps = m3edSelP(); if (!ps.length) return;
  m3edSet(() => {
    // en canviar una mida, la base es queda on era (la peça no s'enfonsa a la placa)
    if (key === 's') { const p = ps[0], nv = Math.max(0.5, Math.min(400, v)), z0 = m3edBox([p])[2]; if (E.lock) { const k = nv / p.s[ax]; p.s = p.s.map(x => m3R(Math.max(0.5, x * k), 3)); } else p.s[ax] = m3R(nv, 3);
      p.p[2] = m3R(p.p[2] + z0 - m3edBox([p])[2], 3); }
    else if (key === 'p') { const B = m3edBox(ps), cur = ax === 2 ? B[2] : (B[ax] + B[ax + 3]) / 2, d = v - cur; ps.forEach(p => { p.p[ax] = m3R(p.p[ax] + d, 3); }); }
    else if (key === 'r') { if (ps.length === 1) { const p = ps[0], z0 = m3edBox([p])[2]; p.r[ax] = m3R(((v % 360) + 540) % 360 - 180, 2); p.p[2] = m3R(p.p[2] + z0 - m3edBox([p])[2], 3); } }
  });
}
function m3edNudge(key, ax, dir) {
  const E = M3E, ps = m3edSelP(); if (!ps.length) return;
  // girar no enfonsa la peça: la base es queda a la mateixa alçada
  if (key === 'r') { const d = 15 * dir; return m3edSet(() => { if (ps.length === 1) { const p = ps[0], z0 = m3edBox([p])[2]; p.r[ax] = m3R((((p.r[ax] + d) % 360) + 540) % 360 - 180, 2); p.p[2] = m3R(p.p[2] + z0 - m3edBox([p])[2], 3); } else m3edRotGroup(ps, ax, d); }); }
  const st = E.snap;
  if (key === 's') { const p = ps[0], z0 = m3edBox([p])[2]; return m3edSet(() => { const nv = Math.max(st > 1 ? st : 1, Math.round((p.s[ax] + dir * st) / st) * st); if (E.lock) { const k = nv / p.s[ax]; p.s = p.s.map(x => m3R(Math.max(0.5, x * k), 3)); } else p.s[ax] = nv;
      const z1 = m3edBox([p])[2]; p.p[2] = m3R(p.p[2] + (z0 - z1), 3); }); }   // la base no es mou
  if (key === 'p') { const B = m3edBox(ps), cur = ax === 2 ? B[2] : (B[ax] + B[ax + 3]) / 2, nv = Math.round((cur + dir * st) / st) * st, d = nv - cur; m3edSet(() => ps.forEach(p => { p.p[ax] = m3R(p.p[ax] + d, 3); })); }
}
// girar un grup de peces al voltant del seu centre (amb matrius: cada peça es mou i es gira)
function m3edRotGroup(ps, ax, d) {
  const B = m3edBox(ps), c = [(B[0] + B[3]) / 2, (B[1] + B[4]) / 2, (B[2] + B[5]) / 2], Rm = [M3M.rx, M3M.ry, M3M.rz][ax](d);
  ps.forEach(p => { const v = M3M.ap(Rm, p.p[0] - c[0], p.p[1] - c[1], p.p[2] - c[2]); p.p = [m3R(v[0] + c[0], 3), m3R(v[1] + c[1], 3), m3R(v[2] + c[2], 3)]; p.r = M3M.euler(M3M.mul(Rm, M3M.rot(p.r))); });
  const B2 = m3edBox(ps), dz = B[2] - B2[2]; ps.forEach(p => { p.p[2] = m3R(p.p[2] + dz, 3); });
}
function m3edCol(c) { m3edSet(() => m3edSelP().forEach(p => { p.c = c; if (p.hole) p.hole = false; })); SFX.tap && SFX.tap(); }
function m3edHole() { const ps = m3edSelP(), all = ps.every(p => p.hole); m3edSet(() => ps.forEach(p => { p.hole = !all; if (!all) p.c0 = p.c; else if (p.c0) { p.c = p.c0; delete p.c0; } })); SFX.tap && SFX.tap(); }
function m3edDel() { const E = M3E, ids = new Set(E.sel); m3edSet(() => { E.parts = E.parts.filter(p => !ids.has(String(p.id))); E.sel = []; }); SFX.ko && SFX.ko(); }
// duplicar: la còpia surt al costat; si després la mous i tornes a duplicar, la nova repeteix el mateix moviment
function m3edDup() {
  const E = M3E, ps = m3edSelP(); if (!ps.length) return;
  const B = m3edBox(ps), L = E.lastDup && E.lastDup.ids.join() === E.sel.join() ? E.lastDup : null;
  let d = [m3R(B[3] - B[0] + 5, 3), 0, 0];
  if (L) { const now = m3edBox(ps); d = [0, 1, 2].map(i => m3R(now[i] - L.box[i], 3)); if (d.every(v => Math.abs(v) < 1e-6)) d = L.d; }
  const map = {}, ng = {}, copies = ps.map(p => { const id = 'a' + (++E.nid); map[p.id] = id; const g = p.g != null ? (ng[p.g] = ng[p.g] || 'g' + (++E.nid)) : null; return { ...m3Clone(p), id, g, p: p.p.map((v, i) => m3R(v + d[i], 3)) }; });
  m3edSet(() => { E.parts.push(...copies); E.sel = copies.map(p => p.id); });
  E.lastDup = { ids: E.sel.slice(), box: m3edBox(copies), d }; SFX.tap && SFX.tap();
  m3Say(m3L('Còpia feta! Si la mous i tornes a duplicar, la següent còpia farà el mateix moviment.', '¡Copia hecha! Si la mueves y vuelves a duplicar, la siguiente copia hará el mismo movimiento.'));
}
function m3edGroup() {
  const E = M3E, ps = m3edSelP(), grp = ps.length > 1 && ps.every(p => p.g != null && p.g === ps[0].g);
  m3edSet(() => { if (grp) ps.forEach(p => { p.g = null; }); else { const g = 'g' + (++E.nid); ps.forEach(p => { p.g = g; }); } });
  m3Say(grp ? m3L('Grup desfet: ara cada peça va per lliure.', 'Grupo deshecho: ahora cada pieza va por libre.') : m3L('Grup fet! Ara les peces es mouen juntes i els forats del grup només foraden el grup.', '¡Grupo hecho! Ahora las piezas se mueven juntas y los agujeros del grupo solo agujerean el grupo.'));
}
// mirall respecte del centre de la selecció: posició reflectida i gir R' = S·R·S (més el gir que torna la forma)
function m3edMirror(ax) {
  const ps = m3edSelP(); if (!ps.length) return;
  const B = m3edBox(ps), c = (B[ax] + B[ax + 3]) / 2, S = ax === 0 ? M3M.s(-1, 1, 1) : M3M.s(1, -1, 1);
  m3edSet(() => ps.forEach(p => { p.p[ax] = m3R(2 * c - p.p[ax], 3); let R = M3M.mul(S, M3M.mul(M3M.rot(p.r), S));
    if (ax === 0 && p.t === 'wedge') R = M3M.mul(R, M3M.rz(180)); if (ax === 1 && (p.t === 'heart' || p.t === 'star')) R = M3M.mul(R, M3M.rx(180));
    p.r = M3M.euler(R); }));
  SFX.tap && SFX.tap();
}
// alinear: una peça → a la placa; diverses → entre elles (a l'esquerra, al centre, a la dreta…)
function m3edAlign(ax, w) {
  const E = M3E, ps = m3edSelP(); if (!ps.length) return;
  m3edSet(() => {
    if (ps.length === 1 || E.sel.every(id => { const p = m3edP(id); return p && p.g != null && p.g === ps[0].g; })) { const B = m3edBox(ps);
      if (w === 'plate') ps.forEach(p => { p.p[0] = m3R(p.p[0] - (B[0] + B[3]) / 2, 3); p.p[1] = m3R(p.p[1] - (B[1] + B[4]) / 2, 3); });
      else if (w === 'floor') ps.forEach(p => { p.p[2] = m3R(p.p[2] - B[2], 3); });
      else if (w === 'on') { const others = E.parts.filter(p => !ps.includes(p)).map(p => m3Comp(p)).filter(Boolean).map(c => c.box).filter(b => b[0] < B[3] && b[3] > B[0] && b[1] < B[4] && b[4] > B[1]); const top = others.length ? Math.max(...others.map(b => b[5])) : 0; ps.forEach(p => { p.p[2] = m3R(p.p[2] + top - B[2], 3); }); }
      return; }
    const B = m3edBox(ps), tgt = w === 'min' ? B[ax] : w === 'max' ? B[ax + 3] : (B[ax] + B[ax + 3]) / 2;
    const units = {}; ps.forEach(p => { const k = p.g != null ? 'g' + p.g : 'p' + p.id; (units[k] = units[k] || []).push(p); });
    Object.values(units).forEach(u => { const b = m3edBox(u), cur = w === 'min' ? b[ax] : w === 'max' ? b[ax + 3] : (b[ax] + b[ax + 3]) / 2; u.forEach(p => { p.p[ax] = m3R(p.p[ax] + tgt - cur, 3); }); });
  });
  document.getElementById('m3pop').hidden = true; SFX.tap && SFX.tap();
}
function m3edPop(k) {
  const el = document.getElementById('m3pop'); if (!el) return; if (!el.hidden && el.dataset.k === k) { el.hidden = true; return; }
  const ps = m3edSelP(), many = ps.length > 1 && !ps.every(p => p.g != null && p.g === ps[0].g), b = (fn, t, ico = '') => `<button onclick="${fn}">${ico}<span>${t}</span></button>`;
  el.dataset.k = k;
  el.innerHTML = k === 'mir' ? `<b>${m3L('Mirall', 'Espejo')}</b><div class="m3pr">${b('m3edMirror(0);document.getElementById(\'m3pop\').hidden=true', m3L('Esquerra ↔ dreta (x)', 'Izquierda ↔ derecha (x)'), '⇆ ')}${b('m3edMirror(1);document.getElementById(\'m3pop\').hidden=true', m3L('Davant ↔ darrere (y)', 'Delante ↔ detrás (y)'), '⇅ ')}</div>`
    : many ? `<b>${m3L('Alinea les peces', 'Alinea las piezas')}</b>${[0, 1, 2].map(ax => `<div class="m3pr"><span class="m3ax a${ax}">${'XYZ'[ax]}</span>${b(`m3edAlign(${ax},'min')`, ax === 2 ? m3L('A baix', 'Abajo') : ax === 1 ? m3L('Davant', 'Delante') : m3L('Esquerra', 'Izquierda'))}${b(`m3edAlign(${ax},'mid')`, m3L('Centre', 'Centro'))}${b(`m3edAlign(${ax},'max')`, ax === 2 ? m3L('A dalt', 'Arriba') : ax === 1 ? m3L('Darrere', 'Detrás') : m3L('Dreta', 'Derecha'))}</div>`).join('')}`
    : `<b>${m3L('Alinea', 'Alinea')}</b><div class="m3pr col">${b("m3edAlign(0,'plate')", m3L('Al centre de la placa', 'Al centro de la placa'), '⌖ ')}${b("m3edAlign(2,'floor')", m3L('A terra (z = 0)', 'Al suelo (z = 0)'), '⤓ ')}${b("m3edAlign(2,'on')", m3L('A sobre de la peça de sota', 'Encima de la pieza de debajo'), '⬒ ')}</div>`;
  el.hidden = false;
}
function m3edMode() { const E = M3E; E.mode = E.mode === 'edit' ? 'result' : 'edit'; E.V && E.V.mode(E.mode); const b = document.getElementById('m3mo'); if (b) b.classList.toggle('on', E.mode === 'result'); SFX.tap && SFX.tap(); }
function m3edGhost() { const E = M3E; E.ghost = !E.ghost; E.V && E.V.target(E.ghost ? E.st.target : null); const b = document.getElementById('m3gh'); if (b) b.classList.toggle('on', E.ghost); }
function m3edMeas() { const E = M3E; E.meas = !E.meas; E.V && E.V.measure(E.meas); const b = document.getElementById('m3me'); if (b) b.classList.toggle('on', E.meas); }
function m3edSnap() { const E = M3E; E.snap = E.snap === 1 ? 5 : E.snap === 5 ? 10 : 1; const b = document.getElementById('m3sn'); if (b) b.querySelector('b').textContent = E.snap; if (E.V && E.V.snap) E.V.snap(E.snap); toast && toast(m3L(`Pas de la quadrícula: ${E.snap} mm`, `Paso de la cuadrícula: ${E.snap} mm`)); }
function m3SetView(v) { const S = M3E || M3P; if (S) S.view = v; const V = (M3E && M3E.V) || (M3P && M3P.V) || (M3VW && M3VW.V); V && V.view(v); document.querySelectorAll('#m3vp .m3vb[data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === v)); SFX.tap && SFX.tap(); }
// el missatge flotant: els avisos neutres i els errors s'amaguen sols al cap d'una estona (no tapen el model)
function m3Say(html, cls = '') { const e = document.getElementById('tsay'); if (!e) return; e.className = 'tsay m3say ' + cls; e.innerHTML = html; clearTimeout(m3Say.t);
  if (cls !== 'ok' && html) m3Say.t = setTimeout(() => { if (e.innerHTML === html) { e.classList.add('out'); setTimeout(() => { if (e.classList.contains('out')) { e.innerHTML = ''; e.className = 'tsay m3say'; } }, 400); } }, cls === 'bad' ? 9000 : 6500); }
// les comprovacions en directe
function m3edCheck(first) {
  const E = M3E; if (!E) return; const st = E.st, cks = st.checks || [];
  const res = E.res = m3Check({ parts: E.parts }, cks);
  m3CkUpdate(res, first);
  if (E.ro || !cks.length) return;
  const all = res.every(r => r.ok);
  if (all && !E.solved && !first) { E.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(80); m3Say(st.done ? m3T(st.done) : m3L('Molt bé! El model compleix tot el que demana el repte.', '¡Muy bien! El modelo cumple todo lo que pide el reto.'), 'ok'); m3Stars(E.hint, E.parts.length, st.sol && st.sol.parts ? st.sol.parts.length : 0); E.onDone && E.onDone(); }
  else if (E.solved && !all) { E.solved = false; E.onUndone && E.onUndone(); }
}
function m3CkUpdate(res, first) {
  const ul = document.querySelector('#m3ck .m3cks'); if (!ul) return;
  [...ul.children].forEach((li, i) => { const ok = !!(res[i] && res[i].ok), was = li.classList.contains('ok'); li.classList.toggle('ok', ok); if (ok) li.classList.remove('bad'); li.querySelector('.m3cb').innerHTML = ok ? TIC.ok : ''; if (ok && !was && !first) { li.classList.remove('pop'); void li.offsetWidth; li.classList.add('pop'); SFX.tap && SFX.tap(); } });
}
// estrelles: resolt · sense pista · sense peces de més
function m3Stars(hint, used, best) {
  if (typeof tStarSave !== 'function' || typeof TSS === 'undefined' || !TSS) return;
  const s2 = !hint, s3 = !best || used <= best, n = 1 + s2 + s3; tStarSave(n);
  const y = document.getElementById('tsay'); if (y && !y.querySelector('.tstars')) y.insertAdjacentHTML('beforeend', `<span class="tstars" aria-label="${n} ${m3L('estrelles', 'estrellas')}">${[1, s2, s3].map(x => `<i class="${x ? 'on' : ''}">★</i>`).join('')}</span>`);
}
// exportar STL (el renderitzador el fa del sòlid final, en mm)
function m3Download(name, data, type) { try { const b = new Blob([data], { type }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 800); return true; } catch (e) { return false; } }
const m3FileName = (t, ext) => (String(m3T(t) || 'model').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase() || 'model') + '.' + ext;
async function m3STL(model, name) {
  const M = await m3Load();
  if (!M) { toast(m3L('Per fer el fitxer STL cal un navegador amb 3D (WebGL).', 'Para hacer el archivo STL hace falta un navegador con 3D (WebGL).')); return false; }
  let v = null, box = null; try { box = document.createElement('div'); box.style.cssText = 'position:fixed;left:-9999px;top:0;width:64px;height:64px'; document.body.appendChild(box); v = M.create(box, { mode: 'result', editable: false, quality: 'low' }); v.set(model); const buf = await v.stl(); if (!buf) throw 0; m3Download(name || 'model.stl', buf, 'model/stl'); toast(m3L('Fitxer STL descarregat!', '¡Archivo STL descargado!')); return true; }
  catch (e) { toast(m3L("No s'ha pogut fer el fitxer STL.", 'No se ha podido hacer el archivo STL.')); return false; } finally { try { v && v.dispose(); } catch (e) { } box && box.remove(); }
}
async function m3edSTL() { const E = M3E; if (!E) return; const buf = E.V && E.V.is3d ? await E.V.stl() : null; if (buf) { m3Download(m3FileName(E.st.name || (typeof TSS !== 'undefined' && TSS && TSS.s.t), 'stl'), buf, 'model/stl'); toast(m3L('Fitxer STL descarregat!', '¡Archivo STL descargado!')); } else m3STL({ parts: E.parts }, m3FileName(E.st.name || 'model', 'stl')); }

/* =====================================================================================================================
   Editor del Nivell 2 (M3PG): blocs tàctils (tocar per inserir, com els editors de Robòtica) i pestanya «Codi»
   ===================================================================================================================== */
let M3P = null, M3P_ID = 0, M3VW = null;
const M3_CAT = { cub: 'shp', cil: 'shp', esf: 'shp', con: 'shp', pir: 'shp', tub: 'shp', anell: 'shp', prisma: 'shp', falca: 'shp', estrella: 'shp', cor: 'shp', prim: 'shp', mou: 'tr', gira: 'tr', escala: 'tr', color: 'col', uneix: 'bool', resta: 'bool', interseca: 'bool', rep: 'loop', def: 'fn', call: 'fn', set: 'var', var: 'var', rem: 'rem' };
const M3_PT = { cub: 'box', cil: 'cyl', esf: 'sph', con: 'cone', pir: 'pyr', tub: 'tube', anell: 'torus', prisma: 'hex', falca: 'wedge', estrella: 'star', cor: 'heart' };
const M3_BI = {
  mou: '<svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M21 12l-3-3M21 12l-3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  gira: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-3-6.2M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  escala: '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="10" height="10" rx="2" fill="currentColor" opacity=".5"/><path d="M11 13l9-9M14 4h6v6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  color: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.6-1-2.6S14 15 15.5 15H18a3 3 0 0 0 3-3c0-5-4-9-9-9z" fill="currentColor"/><circle cx="7.5" cy="11" r="1.6" fill="#fff"/><circle cx="10" cy="7" r="1.6" fill="#fff"/><circle cx="15" cy="7.5" r="1.6" fill="#fff"/></svg>',
  uneix: '<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="6" fill="currentColor"/><circle cx="15" cy="12" r="6" fill="currentColor"/></svg>',
  resta: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9 6a6 6 0 1 1 0 12A6 6 0 0 1 9 6zm6 0a6 6 0 0 0-3 .8 6 6 0 0 1 0 10.4A6 6 0 1 0 15 6z" fill="currentColor"/><circle cx="15" cy="12" r="5.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 1.6"/></svg>',
  interseca: '<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="15" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 6.8a6 6 0 0 1 0 10.4 6 6 0 0 1 0-10.4z" fill="currentColor"/></svg>',
  rep: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M18 2v5h-5M6 22v-5h5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  def: '<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 13h7v7h-7z" fill="currentColor"/><path d="M13 4h7v7h-7zM4 13h7v7H4z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  call: '<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7zM4 13h7v7H4z" fill="currentColor"/></svg>',
  set: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 10.5h8M8 13.5h8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  rem: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" fill="currentColor"/></svg>'
};
const m3pIco = k => M3_PT[k] ? m3Ico(M3_PT[k], '#ffffff') : (M3_BI[k] || '');
// un bloc nou de la paleta
function m3pNew(k, P) {
  const vars = m3pVars(), v0 = (P && P.st.vars && P.st.vars[0]) || vars[0] || m3L('mida', 'medida');
  const D = { cub: ['20', '20', '20'], cil: ['20', '20'], esf: ['20'], con: ['20', '30'], pir: ['20', '20', '20'], tub: ['20', '20', '2'], anell: ['30', '6'], prisma: ['20', '10'], falca: ['20', '20', '20'], estrella: ['30', '5'], cor: ['30', '5'] };
  if (D[k]) return { k: 'prim', t: k, a: D[k].slice() };
  switch (k) {
    case 'mou': return { k, a: ['10', '0', '0'], b: [] }; case 'gira': return { k, a: ['0', '0', '45'], b: [] }; case 'escala': return { k, a: ['2', '1', '1'], b: [] };
    case 'color': return { k, a: [m3L('blau', 'azul')], b: [] }; case 'uneix': case 'resta': case 'interseca': return { k, b: [] };
    case 'rep': return { k, v: 'i', a: ['0', '3'], b: [] }; case 'def': return { k, n: (P && P.st.defName) || m3L('peça', 'pieza'), ps: [], b: [] };
    case 'call': { const d = m3pDefs()[0]; return { k, n: d ? d.n : m3L('peça', 'pieza'), a: d ? d.ps.map(() => '10') : [] }; }
    case 'var': case 'set': return { k: 'set', v: v0, e: '20' }; case 'rem': return { k: 'rem', t: m3L('nota', 'nota') };
  }
  return null;
}
const m3pWalk = (l, f, par = null) => (l || []).forEach(s => { f(s, l, par); if (s.b) m3pWalk(s.b, f, s); });
function m3pVars() { const out = []; if (!M3P) return out; m3pWalk(M3P.prog, s => { if (s.k === 'set' && !out.includes(s.v)) out.push(s.v); }); (M3P.st.vars || []).forEach(v => { if (!out.includes(v)) out.push(v); }); return out; }
function m3pDefs() { const out = []; if (!M3P) return out; m3pWalk(M3P.prog, s => { if (s.k === 'def') out.push(s); }); return out; }
// noms que es poden fer servir en un camp: variables, comptadors dels bucles que l'envolten i paràmetres del mòdul
function m3pScope(id) { const out = new Set(m3pVars()); const path = []; const find = (l, stack) => { for (const s of l) { if (s._id === id) { path.push(...stack); return true; } if (s.b && find(s.b, [...stack, s])) return true; } return false; }; find(M3P.prog, []);
  path.forEach(s => { if (s.k === 'rep') out.add(s.v); if (s.k === 'def') s.ps.forEach(p => out.add(p)); }); return [...out]; }
function m3pMake(st, o = {}) {
  const src = o.prog != null ? o.prog : st.start != null ? st.start : '';
  let prog = []; try { prog = typeof src === 'string' ? m3Parse(m3Loc(src)) : m3Clone(src); } catch (e) { prog = []; }
  M3P = { st, prog, sel: null, cur: null, tab: o.tab || (st.tab === 'code' ? 'code' : 'blocks'), text: '', err: null, run: null, res: [], V: null, solved: false, ro: !!o.ro, spot: !!o.spot, mode: 'edit', view: st.view || 'iso', ghost: true, tries: 0, hint: false, onDone: o.onDone || null, lists: [], ids: {} };
  M3P.cur = { l: M3P.prog, i: M3P.prog.length };
  return M3P;
}
// un programa bilingüe: "codi en català|código en castellano"
const m3Loc = v => typeof v === 'string' && v.includes('|') ? m3T(v) : v;
function m3pIndex() { const P = M3P; P.lists = []; P.ids = {}; const walk = l => { P.lists.push(l); for (const s of l) { if (!s._id) s._id = ++M3P_ID; P.ids[s._id] = { s, l }; if (s.b) walk(s.b); } }; walk(P.prog); }
const m3pLid = l => M3P.lists.indexOf(l);
function m3pLabel(s, ro) {
  const f = (path, txt, cls = '') => ro ? `<b class="m3v ${cls}">${txt}</b>` : `<button class="m3v ${cls}" onclick="event.stopPropagation();m3pField(${s._id},'${path}')">${txt}</button>`;
  const ex = e => m3Esc(String(e)).replace(/\*/g, '×').replace(/\//g, '÷');
  const w = k => `<span class="m3k">${m3W(k)}</span>`, sm = t => `<small>${t}</small>`;
  switch (s.k) {
    case 'prim': { const A = M3_ARGS[s.t] || [], a = s.a; let body;
      if (s.t === 'cub') body = a.length === 1 ? `${f('a.0', ex(a[0]))}${sm('mm')}` : `${f('a.0', ex(a[0]))}${sm('×')}${f('a.1', ex(a[1]))}${sm('×')}${f('a.2', ex(a[2]))}`;
      else body = a.map((x, i) => `${sm(m3T(A[i].join('|')))}${f('a.' + i, ex(x))}`).join('');
      return `${w(s.t)}${body}${s.t !== 'esf' ? (ro ? (s.c ? `<b class="m3v on">${m3W('centrat')}</b>` : '') : `<button class="m3v m3tg ${s.c ? 'on' : ''}" onclick="event.stopPropagation();m3pCen(${s._id})">${m3W('centrat')}</button>`) : ''}`; }
    case 'set': return `${f('v', m3Esc(s.v), 'm3nm')}<span class="m3k">=</span>${f('e', ex(s.e))}`;
    case 'mou': case 'gira': case 'escala': return `${w(s.k)}${s.a.length === 1 ? f('a.0', ex(s.a[0])) : s.a.map((x, i) => `${sm('xyz'[i])}${f('a.' + i, ex(x) + (s.k === 'gira' ? '°' : ''))}`).join('')}`;
    case 'color': return `${w('color')}${f('a.0', `<i class="m3dot" style="background:${m3ColHex(s.a[0]) || '#888'}"></i>${m3Esc(m3ColName(s.a[0]))}`)}`;
    case 'uneix': return `${w('uneix')}${sm(m3L('tot junt en una peça', 'todo junto en una pieza'))}`;
    case 'resta': return `${w('resta')}${sm(m3L('al primer, treu-li els altres', 'al primero, quítale los demás'))}`;
    case 'interseca': return `${w('interseca')}${sm(m3L('només la part comuna', 'solo la parte común'))}`;
    case 'rep': return `${w('rep')}${f('v', m3Esc(s.v), 'm3nm')}${sm(m3W('de'))}${f('a.0', ex(s.a[0]))}${sm(m3W('a'))}${f('a.1', ex(s.a[1]))}${s.a[2] ? `${sm(m3W('pas'))}${f('a.2', ex(s.a[2]))}` : ''}`;
    case 'def': return `${w('def')}${f('n', m3Esc(s.n), 'm3nm')}${sm('(')}${f('ps', s.ps.length ? m3Esc(s.ps.join(', ')) : '—')}${sm(')')}`;
    case 'call': return `${f('n', m3Esc(s.n), 'm3nm')}${sm('(')}${s.a.map((x, i) => f('a.' + i, ex(x))).join(sm(','))}${sm(')')}`;
    case 'rem': return `<span class="m3k">//</span>${f('t', m3Esc(s.t), 'm3rm')}`;
  }
  return s.k;
}
function m3pBlock(s, ro) {
  const P = M3P, cont = !!s.b, sel = P.sel === s, cat = M3_CAT[s.k === 'prim' ? s.t : s.k] || 'shp';
  return `<div class="tb m3b c-${cat}${sel ? ' sel' : ''}${cont ? ' cont' : ''}${s._err ? ' err' : ''}" id="mb${s._id}"><div class="tbh" ${ro && !P.spot ? '' : `onclick="m3pSel(${s._id})"`}><span class="tbi">${m3pIco(s.k === 'prim' ? s.t : s.k)}</span><span class="tbl">${m3pLabel(s, ro)}</span></div>
    ${cont ? `<div class="tbin">${m3pList(s.b, ro)}</div><div class="tbend"></div>` : ''}</div>${sel && !ro ? m3pTools(s) : ''}`;
}
function m3pSlot(l, i) { const on = M3P.cur && M3P.cur.l === l && M3P.cur.i === i; return `<button class="tslot${on ? ' on' : ''}" onclick="m3pCur(${m3pLid(l)},${i})" aria-label="${m3L('Posa els blocs aquí', 'Pon los bloques aquí')}">${on ? `<span>${m3L('els blocs nous van aquí', 'los bloques nuevos van aquí')}</span>` : ''}</button>`; }
function m3pList(l, ro) { if (ro) return l.map(s => m3pBlock(s, true)).join('') || ''; return l.map((s, i) => m3pSlot(l, i) + m3pBlock(s)).join('') + m3pSlot(l, l.length); }
function m3pTools(s) {
  return `<div class="tbtools"><button onclick="m3pMove(-1)" ${!m3pMoveTo(s, -1) ? 'disabled' : ''} aria-label="${m3L('Puja', 'Sube')}">↑</button><button onclick="m3pMove(1)" ${!m3pMoveTo(s, 1) ? 'disabled' : ''} aria-label="${m3L('Baixa', 'Baja')}">↓</button>
    <button class="wide" onclick="m3pDup()">${m3L('Duplica', 'Duplica')}</button>${s.b && s.b.length ? `<button class="wide" onclick="m3pUnwrap()">${m3L('Treu-ne el contingut', 'Saca su contenido')}</button>` : ''}<button class="del" onclick="m3pDel()">${m3L('Esborra', 'Borra')}</button></div>`;
}
function m3pPalette() {
  const P = M3P, keys = P.st.blocks || ['cub', 'cil', 'esf', 'con', 'mou', 'gira', 'color', 'resta', 'uneix'];
  return `<div class="tpal m3pal">${keys.map(k => { const s = m3pNew(k, P); if (!s) return ''; s._id = 0; const cat = M3_CAT[s.k === 'prim' ? s.t : s.k] || 'shp';
    return `<button class="tb m3b c-${cat} tpb" onclick="m3pIns('${k}')"><span class="tbi">${m3pIco(s.k === 'prim' ? s.t : s.k)}</span><span class="tbl">${m3pPalLabel(s)}</span></button>`; }).join('')}</div>`;
}
const m3pPalLabel = s => s.k === 'prim' ? `<span class="m3k">${m3W(s.t)}</span>` : s.k === 'set' ? `<span class="m3k">${m3L('variable', 'variable')}</span>` : s.k === 'call' ? `<span class="m3k">${m3L('usa el mòdul', 'usa el módulo')}</span>` : s.k === 'rem' ? `<span class="m3k">// ${m3L('nota', 'nota')}</span>` : `<span class="m3k">${m3W(s.k)}</span>${s.b ? '<small>{ }</small>' : ''}`;
function m3pCode() {
  m3pIndex(); const P = M3P, ro = P.ro, txt = P.st.text;
  const tabs = txt ? `<div class="m3tabs2"><button class="${P.tab === 'blocks' ? 'on' : ''}" onclick="m3pTab('blocks')">${M3I.blocks}${m3L('Blocs', 'Bloques')}</button><button class="${P.tab === 'code' ? 'on' : ''}" onclick="m3pTab('code')">${M3I.code}${m3L('Codi', 'Código')}</button></div>` : `<b>${m3L('Programa', 'Programa')}</b>`;
  const head = `<div class="tphead m3ph">${tabs}<span class="tphr"><button class="tclr m3sc" onclick="m3pScadDl()" title="${m3L('Descarrega el programa per a OpenSCAD (.scad)', 'Descarga el programa para OpenSCAD (.scad)')}">${M3I.code}<span>.scad</span></button>${!ro && P.prog.length && P.tab === 'blocks' ? `<button class="tclr" onclick="m3pClear()" aria-label="${m3L('Buida el programa', 'Vacía el programa')}"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 14H7zM9 3h6l1 2h4v2H4V5h4z" fill="currentColor"/></svg></button>` : ''}</span></div>`;
  if (P.tab === 'code') return `${head}<div class="m3cw"><div class="m3ln" id="m3ln"></div><div class="m3ar"><pre class="m3hl" id="m3hl" aria-hidden="true"></pre><textarea id="m3ta" class="m3ta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" ${ro ? 'readonly' : ''}></textarea></div></div><p class="m3err" id="m3err"></p>${ro ? '' : m3pSnips()}`;
  return `${head}<div class="tprog m3prog" id="m3prog">${m3pList(P.prog, ro) || (ro ? '<p class="tempty">—</p>' : '')}</div><p class="m3err" id="m3err"></p>${ro ? '' : m3pPalette()}`;
}
// fragments per escriure al mòbil (pestanya «Codi»): [clau, text que s'insereix]
const M3_SNIPS = [['cub', 'cub(20, 20, 20)'], ['cil', 'cilindre(10, 20)'], ['esf', 'esfera(20)'], ['mou', 'mou(10, 0, 0) '], ['gira', 'gira(0, 0, 45) '], ['resta', 'resta {\n  \n}'], ['uneix', 'uneix {\n  \n}'], ['rep', 'repeteix i de 0 a 3 {\n  \n}'], [null, '{ }'], [null, '+'], [null, '*'], [null, '/']];
const m3pSnipLoc = ([k, x]) => !k ? x : x.replace(/^[a-z]+/, m3W(k));
function m3pSnips() { return `<div class="m3snips">${M3_SNIPS.map((x, i) => `<button onclick="m3pSnip(${i})">${m3Esc(m3pSnipLoc(x).split('\n')[0].trim() + (x[1].includes('{\n') ? ' }' : ''))}</button>`).join('')}</div>`; }
function m3pSnip(i) { const ta = document.getElementById('m3ta'); if (!ta) return; let t = m3pSnipLoc(M3_SNIPS[i]);
  const a = ta.selectionStart, b = ta.selectionEnd, line = ta.value.slice(0, a).split('\n').pop(), ind = (line.match(/^\s*/) || [''])[0]; t = t.replace(/\n/g, '\n' + ind);
  ta.value = ta.value.slice(0, a) + t + ta.value.slice(b); const c = t.indexOf('\n' + ind + '  \n'); const pos = c >= 0 ? a + c + ind.length + 3 : a + t.length; ta.selectionStart = ta.selectionEnd = pos; ta.focus(); ta.dispatchEvent(new Event('input')); SFX.tap && SFX.tap(); }
function m3pHTML() {
  const P = M3P, st = P.st;
  const right = `${st.target ? `<button class="m3vb ${P.ghost ? 'on' : ''}" id="m3gh" onclick="m3pGhost()" title="${m3L('Mostra el fantasma (el model que has de fer)', 'Muestra el fantasma (el modelo que tienes que hacer)')}">${M3I.ghost}</button>` : ''}<button class="m3vb ${P.mode === 'result' ? 'on' : ''}" id="m3mo" onclick="m3pMode()" title="${m3L('Mira el resultat final (amb les restes fetes)', 'Mira el resultado final (con las restas hechas)')}">${M3I.eye}<span class="m3vl">${m3L('Resultat', 'Resultado')}</span></button>`;
  const bottom = `<button class="m3vb" onclick="M3P.V&&M3P.V.fit()" title="${m3L('Centra la vista', 'Centra la vista')}" aria-label="${m3L('Centra la vista', 'Centra la vista')}">${M3I.fit}</button><button class="m3vb" id="m3me" onclick="m3pMeas()" title="${m3L('Mesures (mm)', 'Medidas (mm)')}" aria-label="${m3L('Mesures', 'Medidas')}">${M3I.ruler}</button><span class="m3sp"></span>${st.k === 'm3free' || st.stl ? `<button class="m3chip" onclick="m3pSTL()">${M3I.dl}<b>STL</b></button>` : ''}`;
  return `<div class="tstage m3stage m3pg ${P.ro ? 'ro' : ''} ${P.spot ? 'spot' : ''}" id="m3st">${m3VpHTML({ right, bottom })}<div class="m3ck" id="m3ck">${m3CkHTML(st.checks, P.res)}</div><div class="tcode m3cd" id="m3cd">${m3pCode()}</div></div>`;
}
function m3pDraw() {
  const c = document.getElementById('m3cd'); if (!c) return; const sc = document.getElementById('m3prog'), top = sc ? sc.scrollTop : 0;
  c.innerHTML = m3pCode(); const s2 = document.getElementById('m3prog'); if (s2) s2.scrollTop = top;
  if (M3P.tab === 'code') m3pTextMount(); else m3pErrShow();
}
// executar el programa (cada canvi): el 3D i les comprovacions
function m3pRun(o = {}) {
  const P = M3P; if (!P) return;
  if (P.tab === 'blocks') m3Print(P.prog);   // numera les línies (per als errors)
  P.run = m3Run(P.prog); P.err = P.run.err;
  m3pWalk(P.prog, s => { s._err = !!(P.err && P.err.ln && s.ln === P.err.ln); });
  if (!P.err && P.V) { P.V.set({ tree: P.run.tree }); m3pSelSync(); const C = m3Compile(P.run.tree); if (C && P.V.refit) P.V.refit(C.box); }
  if (P.err && P.V && !P.lastOk) P.V.set({ tree: null });
  if (!P.err) P.lastOk = true;
  m3pErrShow();
  clearTimeout(P.cT); P.cT = setTimeout(() => m3pCheck(o.first), o.first ? 0 : 160);
}
function m3pErrShow() { const e = document.getElementById('m3err'), P = M3P; if (!e) return; e.innerHTML = P.err ? `⚠️ ${m3Esc(m3T(P.err.t))}` : ''; document.querySelectorAll('.m3b.err').forEach(x => x.classList.remove('err')); if (P.err && P.tab === 'blocks') m3pWalk(P.prog, s => { if (s._err) { const el = document.getElementById('mb' + s._id); if (el) el.classList.add('err'); } }); }
function m3pCheck(first) {
  const P = M3P; if (!P) return; const st = P.st, cks = st.checks || [];
  if (P.err) { P.res = cks.map(c => ({ ok: false })); m3CkUpdate(P.res, true); if (P.solved) P.solved = false; return; }
  const res = P.res = m3Check({ tree: P.run.tree, run: P.run, prog: P.prog, parts: null }, cks); m3CkUpdate(res, first);
  if (P.ro || !cks.length) return;
  const all = res.every(r => r.ok);
  if (all && !P.solved && !first) { P.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(80); m3Say(st.done ? m3T(st.done) : m3L('Molt bé! El programa fa el model que demana el repte.', '¡Muy bien! El programa hace el modelo que pide el reto.'), 'ok');
    let best = 0, used = 0; try { const cnt = l => { let n = 0; m3pWalk(l, s => { if (s.k !== 'rem') n++; }); return n; }; best = st.sol ? cnt(m3Parse(m3Loc(st.sol))) : 0; used = cnt(P.prog); } catch (e) { } m3Stars(P.hint, used, best); P.onDone && P.onDone(); }
  else if (P.solved && !all) P.solved = false;
}
// el bloc seleccionat il·lumina les seves peces al 3D (i tocar una peça selecciona el seu bloc)
function m3pSelSync() {
  const P = M3P; if (!P.V || !P.run || !P.run.tree) return; if (!P.sel) return P.V.select(null);
  const ids = new Set(); m3pWalk([P.sel], s => ids.add(s._id));
  const sel = m3Leaves(P.run.tree).filter(x => ids.has(x.prim.sid)).map(x => x.prim.id); P.V.select(sel.length ? sel : null);
}
function m3pPick(id) {
  const P = M3P; if (!P || !P.run || !P.run.tree || id == null) return; const leaf = m3Leaves(P.run.tree).find(x => String(x.prim.id) === String(id)); if (!leaf) return;
  if (P.spot) return m3pSel(leaf.prim.sid);
  if (P.tab !== 'blocks' || P.ro) { const e = document.getElementById('m3ta'); if (e && leaf.prim.ln) { const L2 = e.value.split('\n'); let a = 0; for (let i = 0; i < leaf.prim.ln - 1; i++) a += L2[i].length + 1; e.focus(); e.selectionStart = a; e.selectionEnd = a + (L2[leaf.prim.ln - 1] || '').length; } return; }
  m3pIndex(); const ix = P.ids[leaf.prim.sid]; if (ix) { P.sel = ix.s; P.cur = { l: ix.l, i: ix.l.indexOf(ix.s) + 1 }; m3pDraw(); m3pSelSync(); const el = document.getElementById('mb' + ix.s._id); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' }); }
}
function m3pMount() {
  const P = M3P, el = document.getElementById('m3vp'); if (!el) return;
  P.V = m3View(el, { mode: P.mode, editable: false, view: P.view, onPick: id => m3pPick(id) });
  if (P.st.target && P.ghost) P.V.target(m3TargetModel(P.st.target));
  if (P.view !== 'iso') P.V.view(P.view);
  if (P.tab === 'code') m3pTextMount();
  m3pRun({ first: true });
}
// una opció o un objectiu: programa (text o { prog }) o model ({ parts } | { tree } | { model })
const m3OptModel = o => typeof o === 'string' || (o && (o.prog || o.src)) ? m3TargetModel(o) : m3TargetModel(o && o.model ? o.model : o);
const m3TargetModel = t => !t ? null : typeof t === 'string' ? (() => { const r = m3Run(m3Loc(t)); return r.err ? null : { tree: r.tree }; })() : t.src || t.prog ? (() => { const r = m3Run(m3Loc(t.src || t.prog)); return r.err ? null : { tree: r.tree }; })() : t;
// editar els blocs
function m3pChanged() { const P = M3P; P.tries++; P.solved = P.solved && true; m3pDraw(); m3pRun(); }
function m3pIns(k) {
  const P = M3P; if (P.ro) return; const s = m3pNew(k, P); if (!s) return;
  const { l, i } = P.cur; l.splice(i, 0, s); P.cur = s.b ? { l: s.b, i: 0 } : { l, i: i + 1 }; P.sel = null; SFX.tap && SFX.tap(); m3pUndoPush(); m3pChanged();
}
function m3pCur(li, i) { const P = M3P; P.cur = { l: P.lists[li], i }; P.sel = null; m3pDraw(); m3pSelSync(); }
function m3pSel(id) {
  const P = M3P; m3pIndex(); const ix = P.ids[id]; if (!ix) return;
  if (P.spot) return P.onSpot && P.onSpot(ix.s);
  if (P.ro) return;
  P.sel = P.sel === ix.s ? null : ix.s; P.cur = { l: ix.l, i: ix.l.indexOf(ix.s) + 1 }; m3pDraw(); m3pSelSync();
}
function m3pParent(l) { for (const ix of Object.values(M3P.ids)) if (ix.s.b === l) return ix; return null; }
function m3pMoveTo(s, d) {
  const P = M3P, ix = P.ids[s._id]; if (!ix) return null; const l = ix.l, i = l.indexOf(s), nb = l[i + d];
  if (nb && nb.b) return { l: nb.b, i: d > 0 ? 0 : nb.b.length };
  if (nb) return { l, i: i + d };
  const par = m3pParent(l); if (!par) return null;
  const j = par.l.indexOf(par.s); return { l: par.l, i: d > 0 ? j + 1 : j };
}
function m3pMove(d) { const P = M3P, s = P.sel; if (!s) return; const ix = P.ids[s._id], to = m3pMoveTo(s, d); if (!to) return; m3pUndoPush(); ix.l.splice(ix.l.indexOf(s), 1); to.l.splice(to.i, 0, s); P.cur = { l: to.l, i: to.i + 1 }; m3pChanged(); }
function m3pDel() { const P = M3P, s = P.sel; if (!s) return; const ix = P.ids[s._id], i = ix.l.indexOf(s); m3pUndoPush(); ix.l.splice(i, 1); P.sel = null; P.cur = { l: ix.l, i }; SFX.ko && SFX.ko(); m3pChanged(); }
function m3pDup() { const P = M3P, s = P.sel; if (!s) return; const ix = P.ids[s._id], c = m3Clone(s); m3pUndoPush(); ix.l.splice(ix.l.indexOf(s) + 1, 0, c); P.sel = null; P.cur = { l: ix.l, i: ix.l.indexOf(s) + 2 }; SFX.tap && SFX.tap(); m3pChanged(); }
function m3pUnwrap() { const P = M3P, s = P.sel; if (!s || !s.b) return; const ix = P.ids[s._id], i = ix.l.indexOf(s); m3pUndoPush(); ix.l.splice(i, 1, ...s.b); P.sel = null; P.cur = { l: ix.l, i }; m3pChanged(); }
function m3pClear() { const P = M3P; if (!P.prog.length) return; m3pUndoPush(); P.prog.splice(0); P.sel = null; P.cur = { l: P.prog, i: 0 }; m3pChanged(); }
function m3pCen(id) { const P = M3P, ix = P.ids[id]; if (!ix) return; m3pUndoPush(); ix.s.c = !ix.s.c; if (!ix.s.c) delete ix.s.c; SFX.tap && SFX.tap(); m3pChanged(); }
// desfer (blocs)
function m3pUndoPush() { const P = M3P; (P.U = P.U || []).push(JSON.stringify(m3Clone(P.prog))); if (P.U.length > 60) P.U.shift(); }
function m3pUndo() { const P = M3P; if (!P.U || !P.U.length) return; P.prog = JSON.parse(P.U.pop()); P.sel = null; P.cur = { l: P.prog, i: P.prog.length }; m3pChanged(); }
// tocar un camp d'un bloc: un selector (número o expressió, variable, color, nom…)
function m3pField(id, path) {
  const P = M3P, ix = P.ids[id]; if (!ix || P.ro) return; const s = ix.s, key = path.split('.')[0], idx = +path.split('.')[1];
  const cur = key === 'a' ? s.a[idx] : s[key], scope = m3pScope(id);
  const done = v => { m3pUndoPush(); if (key === 'a') s.a[idx] = v; else s[key] = v; closeModal(); SFX.tap && SFX.tap(); m3pChanged(); };
  if (s.k === 'color') {
    modal(`<div class="sheet card m3pick"><h3>${m3L('Tria un color', 'Elige un color')}</h3><div class="m3cols">${M3_COLS.map(([ca, es]) => { const n = m3L(ca, es); return `<button data-v="${m3Esc(n)}" class="${m3ColHex(cur) === M3_COLN[ca] ? 'on' : ''}"><i class="m3dot" style="background:${M3_COLN[ca]}"></i>${m3Esc(n)}</button>`; }).join('')}</div><button class="btn ghost big" onclick="closeModal()">${m3L('Tanca', 'Cierra')}</button></div>`, true);
    document.querySelectorAll('.m3cols button').forEach(b => b.onclick = () => done(b.dataset.v)); return; }
  const isName = key === 'v' || key === 'n' || key === 'ps' || key === 't';
  const title = key === 'v' ? (s.k === 'rep' ? m3L('Nom del comptador', 'Nombre del contador') : m3L('Nom de la variable', 'Nombre de la variable')) : key === 'n' ? m3L('Nom del mòdul', 'Nombre del módulo') : key === 'ps' ? m3L('Paràmetres (separats per comes)', 'Parámetros (separados por comas)') : key === 't' ? m3L('Nota', 'Nota') : m3L('Un número o un càlcul', 'Un número o un cálculo');
  const chips = isName ? (key === 'v' && s.k === 'set' ? m3pVars() : key === 'n' && s.k === 'call' ? m3pDefs().map(d => d.n) : []) : scope;
  const keys = isName ? [] : ['7', '8', '9', '+', '4', '5', '6', '−', '1', '2', '3', '×', '0', '.', '( )', '÷'];
  modal(`<div class="sheet card m3pick"><h3>${title}</h3><div class="m3exp"><input id="m3xi" value="${m3Esc(key === 'ps' ? (s.ps || []).join(', ') : cur ?? '')}" autocomplete="off" autocapitalize="off" spellcheck="false" ${isName ? '' : 'inputmode="decimal"'}><button class="btn" id="m3xok">OK</button></div><p class="m3xe" id="m3xe"></p>
    ${chips.length ? `<p class="rpk">${isName ? m3L('Els que ja tens:', 'Los que ya tienes:') : m3L('Variables que pots fer servir:', 'Variables que puedes usar:')}</p><div class="m3chips">${chips.map(v => `<button data-c="${m3Esc(v)}">${m3Esc(v)}</button>`).join('')}</div>` : ''}
    ${keys.length ? `<div class="m3keys">${keys.map(k => `<button data-k="${k}">${k}</button>`).join('')}<button data-k="⌫" class="bk">⌫</button></div>` : ''}<button class="btn ghost big" onclick="closeModal()">${m3L('Tanca', 'Cierra')}</button></div>`, true);
  const inp = document.getElementById('m3xi'), er = document.getElementById('m3xe');
  const val = () => { const v = inp.value.trim().replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'); if (isName) { if (key === 't') return v || null; if (key === 'ps') return v ? v.split(',').map(x => x.trim()).filter(Boolean) : [];
      return /^[A-Za-zÀ-ÿ_][A-Za-z0-9À-ÿ_·]*$/.test(v) && !M3_KW[v.toLowerCase()] ? v : null; }
    try { const e = m3ExprParse(v); const un = [...m3ExprVars(e)].filter(x => !scope.includes(x)); if (un.length) { er.textContent = m3L(`Aquí no hi ha cap variable «${un[0]}».`, `Aquí no hay ninguna variable «${un[0]}».`); return null; } return v; } catch (e) { er.textContent = m3ErrTxt(e).replace(/^Lín(i|e)a 0: /, ''); return null; } };
  inp.oninput = () => { er.textContent = ''; if (!isName) val(); };
  const ok = () => { const v = val(); if (v == null) { if (isName && !er.textContent) er.textContent = key === 'ps' ? '' : m3L('Fes servir lletres (sense espais ni símbols) i que no sigui una paraula del llenguatge.', 'Usa letras (sin espacios ni símbolos) y que no sea una palabra del lenguaje.'); return; } if (key === 'ps') { m3pUndoPush(); s.ps = v; closeModal(); m3pChanged(); return; } done(v); };
  document.getElementById('m3xok').onclick = ok; inp.onkeydown = e => { if (e.key === 'Enter') ok(); };
  const ins = t => { const a = inp.selectionStart ?? inp.value.length, b = inp.selectionEnd ?? a; inp.value = inp.value.slice(0, a) + t + inp.value.slice(b); const p = a + (t === '()' ? 1 : t.length); inp.focus(); inp.setSelectionRange(p, p); inp.oninput(); };
  document.querySelectorAll('.m3pick [data-c]').forEach(b => b.onclick = () => { if (isName) { inp.value = b.dataset.c; ok(); } else ins((inp.value && !/[\s(+\-*/×÷−]$/.test(inp.value.slice(0, inp.selectionStart ?? 0)) ? ' + ' : '') + b.dataset.c); });
  document.querySelectorAll('.m3pick [data-k]').forEach(b => b.onclick = () => { const k = b.dataset.k; if (k === '⌫') { const a = inp.selectionStart ?? inp.value.length; if (a > 0) { inp.value = inp.value.slice(0, a - 1) + inp.value.slice(a); inp.setSelectionRange(a - 1, a - 1); } inp.focus(); inp.oninput(); return; } ins(k === '( )' ? '()' : /[+−×÷]/.test(k) ? ` ${k} ` : k); });
  setTimeout(() => { inp.focus(); inp.select(); }, 60);
}
// pestanya «Codi»: text amb colors, números de línia i la línia de l'error marcada
function m3HL(src) {
  const kws = new Set(Object.keys(M3_KW).concat(['de', 'a', 'pas', 'paso', 'centrat', 'centrado'])), e = m3Esc(src);
  return e.split('\n').map(line => { const c = line.indexOf('//'); const code = c >= 0 ? line.slice(0, c) : line, rem = c >= 0 ? `<i class="m3hc">${line.slice(c)}</i>` : '';
    return code.replace(/(&quot;[^&]*&quot;|#[0-9a-fA-F]{6})|([A-Za-zÀ-ÿ_][\wÀ-ÿ·]*)|(\d+(?:\.\d+)?)/g, (m, s, w, n) => s ? `<i class="m3hs">${s}</i>` : n ? `<i class="m3hn">${n}</i>` : kws.has(w.toLowerCase()) ? `<i class="${M3_PRIMS.includes(M3_KW[w.toLowerCase()]) ? 'm3hp' : 'm3hk'}">${w}</i>` : `<i class="m3hi">${w}</i>`) + rem; }).join('\n');
}
function m3pTextMount() {
  const P = M3P, ta = document.getElementById('m3ta'); if (!ta) return;
  if (!P.text || P.textFor !== P.prog) { P.text = m3Print(P.prog); P.textFor = P.prog; }
  ta.value = P.text;
  const hl = document.getElementById('m3hl'), lnE = document.getElementById('m3ln');
  const sync = () => { const v = ta.value, eln = P.err && P.err.ln; hl.innerHTML = m3HL(v) + '\n'; lnE.innerHTML = v.split('\n').map((_, i) => `<i class="${eln === i + 1 ? 'e' : ''}">${i + 1}</i>`).join(''); hl.scrollTop = ta.scrollTop; hl.scrollLeft = ta.scrollLeft; lnE.scrollTop = ta.scrollTop; };
  ta.oninput = () => { P.text = ta.value; sync(); clearTimeout(P.tT); P.tT = setTimeout(() => { m3pFromText(); sync(); }, 320); };
  ta.onscroll = () => { hl.scrollTop = ta.scrollTop; hl.scrollLeft = ta.scrollLeft; lnE.scrollTop = ta.scrollTop; };
  ta.onkeydown = e => { if (e.key === 'Tab') { e.preventDefault(); const a = ta.selectionStart; ta.value = ta.value.slice(0, a) + '  ' + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = a + 2; ta.dispatchEvent(new Event('input')); }
    if (e.key === 'Enter') { const a = ta.selectionStart, line = ta.value.slice(0, a).split('\n').pop(), ind = (line.match(/^\s*/) || [''])[0] + (/\{\s*$/.test(line) ? '  ' : ''); e.preventDefault(); ta.value = ta.value.slice(0, a) + '\n' + ind + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = a + 1 + ind.length; ta.dispatchEvent(new Event('input')); } };
  sync(); m3pErrShow();
}
function m3pFromText() {
  const P = M3P; let prog;
  try { prog = m3Parse(P.text); } catch (e) { P.err = e.m3 || { ln: 0, t: String(e.message) + '|' + String(e.message) }; m3pErrShow(); P.res = (P.st.checks || []).map(() => ({ ok: false })); m3CkUpdate(P.res, true); P.solved = false; return; }
  P.prog = prog; P.textFor = prog; P.cur = { l: prog, i: prog.length }; P.sel = null; P.tries++; m3pRun();
}
function m3pTab(t) {
  const P = M3P; if (P.tab === t) return;
  if (t === 'blocks' && P.tab === 'code') { try { const prog = m3Parse(P.text); P.prog = prog; P.textFor = prog; } catch (e) { toast(m3L("Arregla l'error del codi abans de tornar als blocs.", 'Arregla el error del código antes de volver a los bloques.')); return; } P.cur = { l: P.prog, i: P.prog.length }; }
  if (t === 'code') { P.text = m3Print(P.prog); P.textFor = P.prog; }
  P.tab = t; P.sel = null; SFX.tap && SFX.tap(); m3pDraw(); m3pRun();
}
function m3pMode() { const P = M3P; P.mode = P.mode === 'edit' ? 'result' : 'edit'; P.V && P.V.mode(P.mode); const b = document.getElementById('m3mo'); if (b) b.classList.toggle('on', P.mode === 'result'); SFX.tap && SFX.tap(); }
function m3pGhost() { const P = M3P; P.ghost = !P.ghost; P.V && P.V.target(P.ghost ? m3TargetModel(P.st.target) : null); const b = document.getElementById('m3gh'); if (b) b.classList.toggle('on', P.ghost); }
function m3pMeas() { const P = M3P; P.meas = !P.meas; P.V && P.V.measure(P.meas); const b = document.getElementById('m3me'); if (b) b.classList.toggle('on', P.meas); }
function m3pScadDl() { const P = M3P; if (!P) return; let prog = P.prog; if (P.tab === 'code') { try { prog = m3Parse(P.text); } catch (e) { return toast(m3ErrTxt(e)); } }
  const code = m3Scad(prog);
  modal(`<div class="sheet card m3scad"><h3>${m3L('El teu programa en OpenSCAD', 'Tu programa en OpenSCAD')}</h3><p class="mut">${m3L("És el mateix model escrit en el llenguatge d'<b>OpenSCAD</b>, un programa de disseny 3D amb codi que fan servir enginyers i makers. Obre el fitxer .scad amb OpenSCAD per continuar-lo.", 'Es el mismo modelo escrito en el lenguaje de <b>OpenSCAD</b>, un programa de diseño 3D con código que usan ingenieros y makers. Abre el archivo .scad con OpenSCAD para continuarlo.')}</p><pre class="rcode">${m3Esc(code)}</pre>
    <div class="rmcb"><button class="btn" id="m3scd">${M3I.dl} ${m3L('Descarrega el .scad', 'Descarga el .scad')}</button><button class="btn ghost" onclick="closeModal()">${m3L('Tanca', 'Cierra')}</button></div></div>`, true);
  document.getElementById('m3scd').onclick = () => { m3Download(m3FileName(P.st.name || (typeof TSS !== 'undefined' && TSS && TSS.s.t) || 'model', 'scad'), code, 'text/plain'); };
}
async function m3pSTL() { const P = M3P; if (!P || P.err || !P.run || !P.run.tree) return toast(m3L('Primer cal que el programa funcioni.', 'Primero hace falta que el programa funcione.')); const buf = P.V && P.V.is3d ? await P.V.stl() : null; const name = m3FileName(P.st.name || (typeof TSS !== 'undefined' && TSS && TSS.s.t) || 'model', 'stl'); if (buf) { m3Download(name, buf, 'model/stl'); toast(m3L('Fitxer STL descarregat!', '¡Archivo STL descargado!')); } else m3STL({ tree: P.run.tree }, name); }

/* =====================================================================================================================
   Tipus de pas (TSTEP), demos (TMEDIA.model), portafoli (TPORT.model) i validació (TVALID)
   · m3look   { q, model, view?, lock?, mode?, opts?: ["ca|es" | { model, view? }], a, pick?: id|[ids], ex, yes }
   · m3build  { q, start?: { parts }, palette?, target?: model, checks, hint, sol: { parts }, done? }      (Nivell 1)
   · m3fix    { q, start: { parts } (amb l'error), checks, hint, sol, fix?: [ids] }                          (Nivell 1)
   · m3code   { q, start?: prog, blocks?: [...], text?: true, target?: model|prog, checks, hint, sol: prog }   (Nivell 2)
   · m3predict{ q, prog, opts: [prog | model], a, ex }                                                      (Nivell 2)
   · m3spot   { q, prog (amb ! després de la instrucció equivocada), target?, ex, yes }                     (Nivell 2)
   · m3free   { q, name, crit, checks?, start?, palette? | blocks?, text?, sol? }  → es desa a «Projectes»
   Programes: text amb les paraules en català (o "codi en català|código en castellano"); l'app els mostra en blocs i en la
   llengua de l'alumne/a. Opcions de m3predict: { prog: '…' } (o un model). A m3spot, un ! just després de la instrucció
   equivocada: mou(20, 20, 70)! esfera(20) marca el mou; cilindre(20, 3)! marca el cilindre.
   Peces: p és el CENTRE de la caixa (una caixa de 20 mm d'alt sobre la placa té p.z = 10); a l'editor, la z que es veu és
   l'alçada de la base. Comprovacions: el text és t ("ca|es"); a count i part, t és el tipus de peça i el text va a txt.
   ===================================================================================================================== */
const m3IsL2 = st => st.lvl === 2 || (st.lvl !== 1 && (typeof st.start === 'string' || typeof st.sol === 'string' || !!st.blocks || (typeof TSS !== 'undefined' && TSS && TSS.c && TSS.c.id === 'modelpro')));
function m3Stage(st, html) {
  const host = typeof bitChar === 'function' ? bitChar('idle') : charSVG('numi', 'idle');
  const q = st.q ? `<div class="tsq2"><span class="tsqc">${host}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = q + html; $('#tsb').classList.add('wide');
}
// el botó de pista: primer la pista, després (si cal) una solució
function m3HintBtn(st, apply) {
  if (document.getElementById('thint') || !(st.hint || st.sol)) return;
  const f = document.getElementById('tsf'); if (!f) return; const b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = m3L('Una pista', 'Una pista');
  b.onclick = () => { const S = M3E || M3P; if (S) S.hint = true; if (st.hint && !b.dataset.k) { b.dataset.k = 1; m3Say(`💡 ${tval(st.hint)}`); if (st.sol) b.textContent = m3L('Mostra una solució', 'Muestra una solución'); else b.remove(); return; }
    if (st.sol) { apply(); m3Say(m3L('Aquí tens una solució. Mira-la de tots els costats i compara-la amb la teva.', 'Aquí tienes una solución. Mírala desde todos los lados y compárala con la tuya.')); b.remove(); } };
  f.insertBefore(b, f.firstChild);
}
function m3HintWatch(st, apply) { const t0 = Date.now(); clearInterval(m3HintWatch.t); m3HintWatch.t = setInterval(() => { const S = M3E || M3P; if (!document.getElementById('m3st') || !S) return clearInterval(m3HintWatch.t); if (S.solved) return; if (Date.now() - t0 > 75000 || S.tries >= 24) { m3HintBtn(st, apply); clearInterval(m3HintWatch.t); } }, 1500); }
if (typeof window !== 'undefined') (window.TSTOPS = window.TSTOPS || []).push(() => { clearInterval(m3HintWatch.t); [M3E, M3P, M3VW].forEach(S => { if (S && S.V) { try { S.V.dispose(); } catch (e) { } S.V = null; } }); M3E = M3P = M3VW = null; m3MediaStop(); });
// desar al portafoli: el model (o el programa) i una miniatura petita
async function m3SaveProj(st, d) {
  const t = TS_(), model = d.prog != null ? (() => { const r = m3Run(d.prog); return { tree: r.tree }; })() : { parts: d.parts };
  let thumb = ''; try { thumb = await m3Thumb(model, 240, 180); thumb = await m3Small(thumb, 200, 150); } catch (e) { }
  const item = { id: 'pj' + Date.now().toString(36), kind: 'model', sid: TSS.id, t: d.name || st.name || TSS.s.t, lvl: d.prog != null ? 2 : 1, thumb, d: today() };
  if (d.prog != null) item.prog = d.prog; else item.model = { parts: m3Clone(d.parts) };
  t.port.push(item); if (t.port.length > 60) t.port.shift(); save(); toast(m3L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
  return item;
}
// miniatura comprimida (webp) perquè el portafoli no pesi
function m3Small(url, w, h) { return new Promise(res => { if (!url || typeof Image === 'undefined') return res(url); const im = new Image(); im.onload = () => { try { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); g.fillStyle = '#EEF1FB'; g.fillRect(0, 0, w, h); const k = Math.min(w / im.width, h / im.height), iw = im.width * k, ih = im.height * k; g.drawImage(im, (w - iw) / 2, (h - ih) / 2, iw, ih); const o = c.toDataURL('image/webp', .72); res(o.startsWith('data:image/webp') ? o : c.toDataURL('image/jpeg', .75)); } catch (e) { res(url); } }; im.onerror = () => res(url); im.src = url; }); }
// demanar el nom abans de desar
function m3AskName(def, cb) {
  modal(`<div class="sheet card m3name"><h3>${m3L('Com es diu el teu projecte?', '¿Cómo se llama tu proyecto?')}</h3><input id="m3nm" class="nm" maxlength="32" value="${m3Esc(def || '')}" placeholder="${m3L('p. ex. La torre de colors', 'p. ej. La torre de colores')}"><button class="btn big" id="m3nok">${m3L('Desa-ho', 'Guárdalo')}</button><button class="btn ghost big" onclick="closeModal()">${m3L('Encara no', 'Aún no')}</button></div>`, true);
  const i = document.getElementById('m3nm'), go = () => { const v = i.value.trim(); closeModal(); cb(v || def); }; document.getElementById('m3nok').onclick = go; i.onkeydown = e => { if (e.key === 'Enter') go(); }; setTimeout(() => i.focus(), 60);
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.m3build = function (st) {
    m3edMake(st); M3E.onDone = () => tContinue(); M3E.onUndone = () => tFoot(m3L('Continua', 'Continúa'), tNext, false);
    m3Stage(st, m3edHTML()); m3edMount(); tFoot(m3L('Continua', 'Continúa'), tNext, false);
    const apply = () => { M3E.U.push(JSON.stringify(M3E.parts)); M3E.parts = m3Clone(st.sol.parts); M3E.sel = []; m3edSync({ now: true }); };
    m3HintWatch(st, apply);
  };
  TSTEP.m3fix = function (st) {
    TSTEP.m3build(st);
    if (st.fix) { M3E.sel = [].concat(st.fix).map(String); M3E.V && M3E.V.select(M3E.sel.length === 1 ? M3E.sel[0] : M3E.sel); m3edDraw(); }
    document.querySelectorAll('#m3ck .m3cks li:not(.ok)').forEach(li => li.classList.add('bad'));
  };
  TSTEP.m3code = function (st) {
    m3pMake(st); M3P.onDone = () => tContinue();
    m3Stage(st, m3pHTML()); m3pMount(); tFoot(m3L('Continua', 'Continúa'), tNext, false);
    const apply = () => { m3pUndoPush(); M3P.prog = m3Parse(m3Loc(st.sol)); M3P.text = ''; M3P.sel = null; M3P.cur = { l: M3P.prog, i: M3P.prog.length }; m3pDraw(); m3pRun(); };
    m3HintWatch(st, apply);
  };
  // projecte lliure (Nivell 1 o 2): amb criteris; quan es compleixen (si n'hi ha), es desa al portafoli
  TSTEP.m3free = function (st) {
    const L2 = m3IsL2(st), lab = TSS && TSS.lab;
    const ready = () => { const S = L2 ? M3P : M3E; if (!S) return false; if ((st.checks || []).length) return S.res.length && S.res.every(r => r.ok); return L2 ? !!(S.run && S.run.tree && !S.err) : S.parts.some(p => !p.hole); };
    const foot = () => { const ok = ready(); tFoot(lab ? m3L('Desa el projecte', 'Guarda el proyecto') : m3L('Desa-ho i continua', 'Guárdalo y continúa'), () => { if (!ready()) return;
        m3AskName(st.name ? m3T(st.name) : '', async name => { const S = L2 ? M3P : M3E, d = L2 ? { prog: S.tab === 'code' ? S.text : m3Print(S.prog, { lang: 'ca' }), name } : { parts: S.parts, name }; await m3SaveProj(st, d); addXPsafe(5);
          if (lab) { tStop(); TSS = null; go('projectes'); } else tNext(); }); }, ok); };
    if (L2) { m3pMake(st); M3P.onDone = () => foot(); m3Stage(st, m3pHTML()); m3pMount(); }
    else { m3edMake(st); M3E.onDone = () => foot(); m3Stage(st, m3edHTML()); m3edMount(); }
    foot();
    // sense comprovacions, el botó s'activa quan hi ha alguna cosa a la placa
    // el botó de desar s'activa quan es compleixen els criteris automàtics (o, si no n'hi ha, quan hi ha alguna peça)
    const S = L2 ? M3P : M3E; S.onUndone = () => foot();
    const iv = setInterval(() => { if (!document.getElementById('m3st') || (L2 ? M3P : M3E) !== S) return clearInterval(iv); const b = document.getElementById('tnext'); if (b && b.textContent && b.disabled === ready()) b.disabled = !ready(); }, 500);
  };
  // explorar un model: respondre una pregunta o trobar una peça girant la vista
  TSTEP.m3look = function (st) {
    const model = m3Norm(st.model).tree ? (st.model.parts ? st.model : st.model.tree ? st.model : { tree: m3Norm(st.model).tree }) : st.model;
    M3VW = { st, V: null, view: st.view || 'iso', found: false, tries: 0 };
    const pick = st.pick != null ? [].concat(st.pick).map(String) : null, hasOpts = !!(st.opts && st.opts.length);
    const optHTML = hasOpts ? `<div class="topts m3opts ${st.opts.some(o => o && typeof o === 'object') ? 'pics' : ''}">${(st.keep ? st.opts.map((_, i) => i) : shuffle(st.opts.map((_, i) => i))).map((i, k) => { const o = st.opts[i]; return `<button class="topt" data-i="${i}"><span class="tol">${'ABCDEF'[k]}</span>${o && typeof o === 'object' ? `<span class="m3oimg"><img alt="" data-oi="${i}"></span>${o.t ? `<span class="tot">${tval(o.t)}</span>` : ''}` : `<span class="tot">${tval(o)}</span>`}</button>`; }).join('')}</div>` : '';
    m3Stage(st, `<div class="tstage m3stage m3look ${hasOpts ? 'qa' : ''} ${st.lock ? 'lock' : ''}" id="m3st">${m3VpHTML({ right: st.mode === 'result' || !m3DrawParts(model).some(x => x.hole) ? '' : `<button class="m3vb" id="m3mo" onclick="m3lkMode()" title="${m3L('Mira el resultat final', 'Mira el resultado final')}">${M3I.eye}<span class="m3vl">${m3L('Resultat', 'Resultado')}</span></button>`, bottom: `<button class="m3vb" onclick="M3VW.V&&M3VW.V.fit()" aria-label="${m3L('Centra la vista', 'Centra la vista')}">${M3I.fit}</button>${pick ? `<span class="m3chip m3hunt">👆 ${m3L('Toca la peça quan la trobis', 'Toca la pieza cuando la encuentres')}</span>` : ''}` })}${st.lock ? '<div class="m3lockv" aria-hidden="true"></div>' : ''}<div class="m3qa">${optHTML}<div class="tfb" id="tfb"></div></div></div>`);
    if (st.lock) document.querySelector('#m3st .m3vt .m3seg').style.display = 'none';
    const el = document.getElementById('m3vp');
    M3VW.V = m3View(el, { mode: st.mode || 'edit', editable: false, view: M3VW.view, onPick: id => onPick(id) }); M3VW.V.set(model); if (M3VW.view !== 'iso') M3VW.V.view(M3VW.view);
    st.opts && st.opts.forEach((o, i) => { if (o && typeof o === 'object' && o.model) m3Thumb(o.model, 240, 180, { view: o.view }).then(u => { const im = document.querySelector(`img[data-oi="${i}"]`); if (im) im.src = u; }); });
    const fin = ok => { TSS.ready = true; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    M3VW.pick = id => onPick(id);
    const onPick = id => { if (!pick || TSS.ready || id == null) return; M3VW.V.select(id);
      if (pick.includes(String(id))) { M3VW.found = true; m3Say(`${st.yes ? tval(st.yes) : m3L('L\'has trobada!', '¡La has encontrado!')}${st.ex ? ' ' + tval(st.ex) : ''}`, 'ok'); typeof confetti === 'function' && confetti(40); fin(M3VW.tries === 0); }
      else { M3VW.tries++; SFX.ko && SFX.ko(); m3Say(st.no ? tval(st.no) : m3L('No és aquesta. Gira la vista (arrossega amb el dit) i busca per tots els costats.', 'No es esta. Gira la vista (arrastra con el dedo) y busca por todos los lados.'), 'bad'); } };
    if (hasOpts) {
      let sel = null; document.querySelectorAll('.m3opts .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; sel = +b.dataset.i; document.querySelectorAll('.m3opts .topt').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(m3L('Comprova', 'Comprueba'), check); });
      const check = () => { if (sel == null) return; const ok = sel === st.a; document.querySelectorAll('.m3opts .topt').forEach(x => { const i = +x.dataset.i; x.disabled = true; if (i === st.a) x.classList.add('ok'); else if (i === sel) x.classList.add('ko'); });
        $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? (st.yes ? tval(st.yes) : m3L('Molt bé!', '¡Muy bien!')) : m3L('No ben bé.', 'No exactamente.')}</b>${st.ex ? ' ' + tval(st.ex) : ''}</div>`; fin(ok); };
      tFoot(m3L('Comprova', 'Comprueba'), check, false);
    } else if (pick) tFoot(m3L('Troba la peça', 'Encuentra la pieza'), () => { }, false);
    else tContinue();
  };
  // quin model fa aquest programa? (opcions amb miniatures 3D) i després es veu el de veritat
  TSTEP.m3predict = function (st) {
    m3pMake({ ...st, start: st.prog, checks: null }, { ro: true, tab: st.text && st.tab === 'code' ? 'code' : 'blocks' });
    const order = st.keep ? st.opts.map((_, i) => i) : shuffle(st.opts.map((_, i) => i));
    m3Stage(st, `<div class="tstage m3stage m3pred" id="m3st"><div class="tcode m3cd" id="m3cd">${m3pCode()}</div><div class="m3pr2"><div class="topts m3opts pics" id="m3po">${order.map((i, k) => `<button class="topt" data-i="${i}"><span class="tol">${'ABCDEF'[k]}</span><span class="m3oimg"><img alt="" data-oi="${i}"></span></button>`).join('')}</div>
      ${m3VpHTML({ cls: 'm3hide', bottom: `<button class="m3vb" onclick="M3P.V&&M3P.V.fit()" aria-label="${m3L('Centra la vista', 'Centra la vista')}">${M3I.fit}</button>` })}<div class="tfb" id="tfb"></div></div></div>`);
    if (M3P.tab === 'code') m3pTextMount();
    st.opts.forEach((o, i) => { const m = m3OptModel(o); m3Thumb(m, 240, 180, { view: o && o.view }).then(u => { const im = document.querySelector(`img[data-oi="${i}"]`); if (im) im.src = u; }); });
    let sel = null;
    document.querySelectorAll('#m3po .topt').forEach(b => b.onclick = () => { if (TSS.ready) return; sel = +b.dataset.i; document.querySelectorAll('#m3po .topt').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(m3L('Executa el programa i comprova-ho', 'Ejecuta el programa y compruébalo'), check); });
    const check = () => { if (sel == null) return; TSS.ready = true; const ok = sel === st.a;
      document.querySelectorAll('#m3po .topt').forEach(x => { const i = +x.dataset.i; x.disabled = true; x.classList.add(i === st.a ? 'ok' : i === sel ? 'ko' : 'x'); });
      document.getElementById('m3st').classList.add('shown'); const vp = document.getElementById('m3vp'); vp.classList.remove('m3hide');
      M3P.V = m3View(vp, { mode: 'result', editable: false }); const r = m3Run(M3P.prog); M3P.V.set({ tree: r.tree });
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? m3L('Exacte!', '¡Exacto!') : m3L('No ben bé: mira què fa de veritat.', 'No exactamente: mira lo que hace de verdad.')}</b>${st.ex ? ' ' + tval(st.ex) : ''}</div>`;
      ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    tFoot(m3L('Tria una opció', 'Elige una opción'), check, false);
  };
  // troba la instrucció equivocada (el resultat es veu al costat del model que es volia)
  TSTEP.m3spot = function (st) {
    m3pMake({ ...st, start: st.prog, checks: null }, { ro: true, spot: true });
    m3Stage(st, m3pHTML()); m3pMount();
    if (st.target) { M3P.V.target(m3TargetModel(st.target)); }
    let bad = null; m3pWalk(M3P.prog, s => { if (s.x) bad = s; });
    // val tocar la instrucció marcada, una de les que hi ha a dins, o la que la porta a la mateixa línia (mou(…) cub(…))
    const inside = (a, b) => { let f = false; m3pWalk([a], q => { if (q === b) f = true; }); return f; };
    M3P.onSpot = s => { if (TSS.ready) return; TSS.ready = true; const ok = !!bad && (s === bad || inside(bad, s) || (inside(s, bad) && s.ln === bad.ln));
      const e = document.getElementById('mb' + s._id); if (e) e.classList.add(ok ? 'good' : 'err2'); if (!ok && bad) { const g = document.getElementById('mb' + bad._id); if (g) g.classList.add('good'); }
      m3Say(ok ? (st.yes ? tval(st.yes) : m3L('Molt bé! Aquesta és la instrucció que falla.', '¡Muy bien! Esta es la instrucción que falla.')) + (st.ex ? ' ' + tval(st.ex) : '') : (st.ex ? tval(st.ex) : m3L('No és aquesta: és la que està marcada en verd.', 'No es esta: es la que está marcada en verde.')), ok ? 'ok' : 'bad');
      ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    tFoot(m3L('Toca una instrucció', 'Toca una instrucción'), () => { }, false);
  };
}
// el catàleg de tipus d'exercici (?tipus=1, tech.js)
if (typeof TKIND !== 'undefined') Object.assign(TKIND, {
  m3look: ['Explora el model 3D', 'Explora el modelo 3D', 'Gira la vista i respon o troba la peça amagada.', 'Gira la vista y responde o encuentra la pieza escondida.'],
  m3build: ['Repte 3D (amb el dit)', 'Reto 3D (con el dedo)', 'Peces a la placa amb comprovacions en directe i fantasma.', 'Piezas en la placa con comprobaciones en directo y fantasma.'],
  m3fix: ['Arregla el model 3D', 'Arregla el modelo 3D', 'Un model amb un error (flota, mal mesurat…) per corregir.', 'Un modelo con un error (flota, mal medido…) para corregir.'],
  m3code: ['Repte 3D amb codi', 'Reto 3D con código', 'Blocs i text estil OpenSCAD amb comprovacions.', 'Bloques y texto estilo OpenSCAD con comprobaciones.'],
  m3predict: ['Predir el model 3D', 'Predecir el modelo 3D', 'Quin model fa aquest programa? Opcions en 3D.', '¿Qué modelo hace este programa? Opciones en 3D.'],
  m3spot: ['Troba la instrucció 3D', 'Encuentra la instrucción 3D', 'Toca la instrucció que fa que el model no surti bé.', 'Toca la instrucción que hace que el modelo no salga bien.'],
  m3free: ['Projecte 3D', 'Proyecto 3D', 'Disseny lliure amb criteris; es desa amb STL.', 'Diseño libre con criterios; se guarda con STL.']
});
function m3lkMode() { const S = M3VW; if (!S || !S.V) return; S.mode = S.mode === 'result' ? 'edit' : 'result'; S.V.mode(S.mode); const b = document.getElementById('m3mo'); if (b) b.classList.toggle('on', S.mode === 'result'); }
function m3pWalkAll(l, f) { (l || []).forEach(s => { f(s); if (s.b) m3pWalkAll(s.b, f); }); }

/* ---------- Demos a les targetes de teoria i a les diapositives ---------- */
const M3MD = [];
function m3MediaStop() { while (M3MD.length) { const v = M3MD.pop(); try { v.dispose(); } catch (e) { } } }
function m3MediaModel(m) { if (m.prog) { const r = m3Run(m3Loc(m.prog)); return { tree: r.tree }; } return m.model; }
if (typeof TMEDIA === 'undefined') var TMEDIA = {};
TMEDIA.model = {
  html: m => `<div class="m3media ${m.prog ? 'm3wc' : ''} ${m._slide ? 'm3slide' : ''}"><div class="m3mvp" data-m3m></div>${m.prog ? `<pre class="m3pre">${m3HL(m3Print(m3Parse(m3Loc(m.prog))))}</pre>` : ''}${m.cap ? `<p class="m3cap">${tval(m.cap)}</p>` : ''}</div>`,
  start: (el, m) => { m3MediaStop(); const box = el.querySelector('[data-m3m]'); if (!box) return; const V = m3View(box, { mode: m.mode || 'result', editable: false, view: m.view, spin: m.spin !== false, bg: 'studio' }); V.set(m3MediaModel(m)); if (m.view && m.view !== 'iso') V.view(m.view); if (m.target) V.target(m3TargetModel(m.target)); M3MD.push(V); },
  slide: m => TMEDIA.model.html({ ...m, _slide: 1 }), slideStart: (el, m) => TMEDIA.model.start(el, m), stop: () => m3MediaStop()
};
if (typeof window !== 'undefined') (window.TSTOPS = window.TSTOPS || []).push(() => m3MediaStop());

/* ---------- Portafoli ---------- */
if (typeof TPORT !== 'undefined') TPORT.model = {
  thumb: p => p.thumb ? `<img class="m3thumb" src="${p.thumb}" alt="">` : `<span class="m3thumb">${m3Ico('box', '#7C5CFF')}</span>`,
  open: p => { M3VW = { st: {}, V: null, p }; return `<div class="tsbody wide m3port"><div class="tstage m3stage m3look" id="m3st">${m3VpHTML({ bottom: `<button class="m3vb" onclick="M3VW.V&&M3VW.V.fit()" aria-label="${m3L('Centra la vista', 'Centra la vista')}">${M3I.fit}</button><span class="m3sp"></span><button class="m3chip" onclick="m3PortSTL()">${M3I.dl}<b>STL</b></button>${p.prog != null ? `<button class="m3chip" onclick="m3PortScad()">${M3I.code}<b>.scad</b></button>` : ''}` })}
      ${p.prog != null ? `<div class="m3qa"><pre class="m3pre">${m3HL(m3Print(m3Parse(p.prog)))}</pre></div>` : ''}</div></div>`; },
  mount: p => { const el = document.getElementById('m3vp'); if (!el) return; M3VW.V = m3View(el, { mode: 'result', editable: false }); M3VW.V.set(p.prog != null ? { tree: m3Run(p.prog).tree } : p.model); }
};
function m3PortSTL() { const p = M3VW && M3VW.p; if (!p) return; m3STL(p.prog != null ? { tree: m3Run(p.prog).tree } : p.model, m3FileName(p.t, 'stl')); }
function m3PortScad() { const p = M3VW && M3VW.p; if (!p || p.prog == null) return; m3Download(m3FileName(p.t, 'scad'), m3Scad(m3Parse(p.prog)), 'text/plain'); }
// laboratori («🧊 Taller 3D»): els passos de la sessió sintètica (ho integra tech-lab.js)
function m3LabSteps(kind) {
  return kind === 'modelpro' ? [{ k: 'm3free', ph: 'crea', lvl: 2, text: true, blocks: ['cub', 'cil', 'esf', 'con', 'pir', 'tub', 'anell', 'prisma', 'mou', 'gira', 'escala', 'color', 'uneix', 'resta', 'interseca', 'rep', 'var', 'def', 'call', 'rem'], q: m3L('<b>El teu taller de codi.</b> Construeix el que vulguis amb blocs o amb codi. Quan t\'agradi, desa el projecte.', '<b>Tu taller de código.</b> Construye lo que quieras con bloques o con código. Cuando te guste, guarda el proyecto.') }]
    : [{ k: 'm3free', ph: 'crea', lvl: 1, q: m3L('<b>El teu taller 3D.</b> Posa formes a la placa, mou-les, gira-les i fes forats. Quan t\'agradi, desa el projecte.', '<b>Tu taller 3D.</b> Pon formas en la placa, muévelas, gíralas y haz agujeros. Cuando te guste, guarda el proyecto.') }];
}

/* ---------- Validació sense navegador ---------- */
if (typeof TVALID === 'undefined') var TVALID = {};
{
  const tvs = (v, w) => { const out = []; if (v && typeof v === 'string' && !v.includes('|')) out.push(`${w}: text sense "ca|es"`); return out; };
  const progs = v => typeof v === 'string' && v.includes('|') ? v.split('|') : [v];
  const runOk = (src, w) => { const out = []; for (const s of progs(src)) { const r = m3Run(s); if (r.err) out.push(`${w}: ${String(r.err.t).split('|')[0]}`); else if (!r.tree) out.push(`${w}: el programa no fa cap peça`); } return out; };
  const model = (m, w) => { if (!m) return [`falta ${w}`]; if (typeof m === 'string') return runOk(m, w); if (m.parts) { const out = []; m.parts.forEach((p, i) => { if (!M3_TYPES.includes(p.t)) out.push(`${w}: la peça ${i + 1} té un tipus desconegut «${p.t}»`); if (!p.s || p.s.length !== 3 || p.s.some(v => !(v > 0))) out.push(`${w}: la peça ${i + 1} té mides incorrectes`); if (p.p && p.p.length !== 3) out.push(`${w}: la peça ${i + 1} té una posició incorrecta`); }); if (!m.parts.length) out.push(`${w}: el model no té peces`); return out; } if (m.tree || m.op || m.prim) return []; if (m.src || m.prog) return runOk(m.src || m.prog, w); return [`${w}: model desconegut`]; };
  const checksTxt = st => (st.checks || []).flatMap((c, i) => { const out = []; if (!c.k) out.push(`comprovació ${i + 1} sense k`); const lab = c.txt || (c.t && !M3_TYPES.includes(c.t) ? c.t : null); if (lab) out.push(...tvs(lab, `comprovació ${i + 1}`)); if (c.shape && !M3_TYPES.includes(c.shape)) out.push(`comprovació ${i + 1}: tipus de peça desconegut «${c.shape}»`); if (c.k === 'match') out.push(...model(c.target, `comprovació ${i + 1} (match)`)); return out; });
  const solves = (st, sol, w) => { const out = []; for (const s of (typeof sol === 'string' ? progs(sol) : [sol])) { const r = m3Check(typeof s === 'string' ? { src: s } : s, st.checks, { cells: 260000 }); r.forEach((x, i) => { if (!x.ok) out.push(`${w} no passa la comprovació ${i + 1} (${st.checks[i].k}${st.checks[i].ax ? ' ' + st.checks[i].ax : ''}: ${String(x.t).split('|')[0]})`); }); } return out; };
  const fails = (st, start, w) => { for (const s of (typeof start === 'string' ? progs(start) : [start])) { const r = m3Check(typeof s === 'string' ? { src: s } : s, st.checks, { cells: 260000 }); if (r.every(x => x.ok)) return [`${w} ja compleix totes les comprovacions`]; } return []; };
  TVALID.m3build = TVALID.m3fix = st => { const out = []; if (!st.checks || !st.checks.length) out.push('el repte no té comprovacions (checks)'); out.push(...checksTxt(st)); if (!st.sol) return out.concat('falta la solució (sol: { parts })'); out.push(...model(st.sol, 'sol'));
    if (!out.length) out.push(...solves(st, st.sol, 'la solució')); if (st.start) { out.push(...model(st.start, 'start')); if (!out.length) out.push(...fails(st, st.start, 'el model de partida (start)')); } else if (st.k === 'm3fix') out.push('m3fix necessita el model de partida (start) amb l\'error');
    if (st.target) out.push(...model(st.target, 'target')); if (!st.hint) out.push('repte sense pista (hint)'); if (st.palette) st.palette.forEach(k => { if (!M3_TYPES.includes(k) && !/^h(box|cyl)$/.test(k)) out.push(`forma de paleta desconeguda «${k}»`); });
    if (st.sol && st.sol.parts && st.palette) st.sol.parts.forEach(p => { if (!st.palette.includes(p.t) && !(p.hole && st.palette.includes('h' + p.t)) && !(st.start && st.start.parts.some(q => q.t === p.t))) out.push(`la solució fa servir «${p.t}», que no és a la paleta`); });
    return out; };
  const BLK = new Set(['cub', 'cil', 'esf', 'con', 'pir', 'tub', 'anell', 'prisma', 'falca', 'estrella', 'cor', 'mou', 'gira', 'escala', 'color', 'uneix', 'resta', 'interseca', 'rep', 'def', 'call', 'var', 'rem']);
  const usedBlocks = src => { const u = new Set(); m3pWalkAll(m3Parse(src), s => u.add(s.k === 'prim' ? s.t : s.k === 'set' ? 'var' : s.k)); return u; };
  TVALID.m3code = st => { const out = []; if (!st.checks || !st.checks.length) out.push('el repte no té comprovacions (checks)'); out.push(...checksTxt(st)); if (!st.sol) return out.concat('falta la solució (sol: programa)'); out.push(...runOk(st.sol, 'sol'));
    if (!out.length) out.push(...solves(st, st.sol, 'la solució')); if (st.start) { const r = progs(st.start).map(s => { try { m3Parse(s); return null; } catch (e) { return 'start: ' + m3ErrTxt(e); } }).filter(Boolean); out.push(...r); if (!r.length) out.push(...fails(st, st.start, 'el programa de partida (start)')); }
    if (st.blocks) { st.blocks.forEach(k => { if (!BLK.has(k)) out.push(`bloc de paleta desconegut «${k}»`); }); if (!st.text) for (const s of progs(st.sol)) { try { for (const k of usedBlocks(s)) if (!st.blocks.includes(k) && !(st.start && progs(st.start).some(x => usedBlocks(x).has(k)))) out.push(`la solució fa servir «${k}», que no és a la paleta (blocks)`); } catch (e) { } } }
    if (st.target) out.push(...model(st.target, 'target')); if (!st.hint) out.push('repte sense pista (hint)'); return [...new Set(out)]; };
  TVALID.m3look = st => { const out = [...model(st.model, 'model')]; if (st.pick != null) { const ids = new Set(m3DrawParts(typeof st.model === 'string' ? { tree: m3Run(st.model).tree } : st.model).map(x => String(x.q.id))); for (const id of [].concat(st.pick)) if (!ids.has(String(id))) out.push(`pick: no hi ha cap peça «${id}»`); }
    else { if (!st.opts || st.opts.length < 2) out.push('calen almenys 2 opcions (opts) o una peça per trobar (pick)'); else if (!(st.a >= 0 && st.a < st.opts.length)) out.push('resposta «a» fora de rang'); (st.opts || []).forEach((o, i) => { if (o && typeof o === 'object') out.push(...model(o.model, `opció ${i + 1}`)); }); }
    if (st.view && !M3_VIEWS[st.view]) out.push(`vista desconeguda «${st.view}»`); return out; };
  TVALID.m3predict = st => { const out = [...runOk(st.prog, 'prog')]; if (!st.opts || st.opts.length < 2) return out.concat('calen almenys 2 opcions'); if (!(st.a >= 0 && st.a < st.opts.length)) return out.concat('resposta «a» fora de rang');
    const T = o => typeof o === 'string' || o.prog || o.src ? m3Run(progs(typeof o === 'string' ? o : o.prog || o.src)[0]).tree : m3Tree(o.model || o);
    st.opts.forEach((o, i) => out.push(...(typeof o === 'string' || o.prog || o.src ? runOk(typeof o === 'string' ? o : o.prog || o.src, `opció ${i + 1}`) : model(o.model || o, `opció ${i + 1}`))));
    if (!out.length) { const real = m3Run(progs(st.prog)[0]).tree, ious = st.opts.map(o => m3Iou(real, T(o), { cells: 200000 }));
      if (ious[st.a] < 0.97) out.push(`l'opció correcta (${st.a + 1}) no és el que fa el programa (IoU ${ious[st.a].toFixed(2)})`);
      ious.forEach((v, i) => { if (i !== st.a && v >= 0.97) out.push(`l'opció ${i + 1} és igual que la correcta`); }); }
    return out; };
  TVALID.m3spot = st => { const out = []; for (const s of progs(st.prog)) { let n = 0; try { m3pWalkAll(m3Parse(s), q => { if (q.x) n++; }); if (n !== 1) out.push(`cal exactament 1 instrucció marcada amb ! (n'hi ha ${n})`); const r = m3Run(s.replace(/!/g, '')); if (r.err) out.push('prog: ' + String(r.err.t).split('|')[0]); } catch (e) { out.push('prog: ' + m3ErrTxt(e)); } }
    if (st.target) out.push(...model(st.target, 'target')); if (!st.ex) out.push('falta l\'explicació (ex)'); return [...new Set(out)]; };
  TVALID.m3free = st => { const out = []; if (!st.crit || !st.crit.length) out.push('el projecte necessita criteris (crit)'); out.push(...checksTxt(st)); if (st.checks && st.checks.length) { if (!st.sol) out.push('projecte amb comprovacions sense solució d\'exemple (sol)'); else out.push(...solves(st, st.sol, 'la solució d\'exemple')); } if (st.start) out.push(...model(st.start, 'start')); return out; };
  TVALID['media:model'] = m => m.prog ? runOk(m.prog, 'demo') : model(m.model, 'demo');
}

/* ---------- Resoldre el pas actual amb la solució (proves automàtiques: play.mjs) ---------- */
async function m3AutoSolve() {
  const st = TSS && TSS.st; if (!st) return 'no step'; const wait = ms => new Promise(r => setTimeout(r, ms));
  const click = sel => { const b = document.querySelector(sel); if (b && !b.disabled) { b.click(); return true; } return false; };
  if (st.k === 'm3build' || st.k === 'm3fix' || (st.k === 'm3free' && !m3IsL2(st))) {
    if (!M3E) return 'no editor'; if (st.sol) { M3E.parts = m3Clone(st.sol.parts); M3E.sel = []; m3edSync({ now: true }); } else if (!M3E.parts.length) m3edAdd('box');
    await wait(400); const ok = !(st.checks || []).length || M3E.res.every(r => r.ok); if (!ok) return 'FAIL ' + M3E.res.filter(r => !r.ok).map(r => m3T(r.t)).join(' / ');
    if (st.k === 'm3free') { const b = document.getElementById('tnext'); return b && !b.disabled ? 'ok' : 'FAIL no es pot desar'; } return document.getElementById('tnext') && !document.getElementById('tnext').disabled ? 'ok' : 'FAIL continua desactivat'; }
  if (st.k === 'm3code' || st.k === 'm3free') {
    if (!M3P) return 'no editor'; if (st.sol) { M3P.prog = m3Parse(m3Loc(st.sol)); M3P.text = ''; M3P.cur = { l: M3P.prog, i: M3P.prog.length }; m3pDraw(); m3pRun(); } else if (!M3P.prog.length) { m3pIns('cub'); }
    await wait(500); const ok = !(st.checks || []).length || M3P.res.every(r => r.ok); if (!ok) return 'FAIL ' + (M3P.err ? m3T(M3P.err.t) : M3P.res.filter(r => !r.ok).map((r, i) => m3T(r.t)).join(' / '));
    const b = document.getElementById('tnext'); return b && !b.disabled ? 'ok' : 'FAIL continua desactivat'; }
  if (st.k === 'm3look') {
    if (st.pick != null) { if (!M3VW || !M3VW.pick) return 'no view'; M3VW.pick([].concat(st.pick)[0]); }
    else { if (!click(`.m3opts .topt[data-i="${st.a}"]`)) return 'FAIL no option'; await wait(100); click('#tnext'); }
    await wait(250); return TSS.ready ? 'ok' : 'FAIL no resolt'; }
  if (st.k === 'm3predict') { if (!click(`#m3po .topt[data-i="${st.a}"]`)) return 'FAIL no option'; await wait(100); click('#tnext'); await wait(300); return TSS.ready ? 'ok' : 'FAIL'; }
  if (st.k === 'm3spot') { let bad = null; m3pWalk(M3P.prog, s => { if (s.x) bad = s; }); if (!bad) return 'FAIL no marcat'; m3pSel(bad._id); await wait(200); return TSS.ready ? 'ok' : 'FAIL'; }
  return 'skip';
}

/* ---------- Solucionari del professor (scripts/tech-sol.mjs): files dels passos 3D ---------- */
const M3_SOLK = { m3look: ['Explora el model', 'Explora el modelo'], m3build: ['Repte 3D', 'Reto 3D'], m3fix: ['Arregla el model', 'Arregla el modelo'], m3code: ['Repte de codi 3D', 'Reto de código 3D'], m3predict: ['Predir', 'Predecir'], m3spot: ['Troba la instrucció', 'Encuentra la instrucción'], m3free: ['Projecte', 'Proyecto'] };
function m3SolHTML(st) {
  const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`, ex = st.ex ? `<p class="soex">${tval(st.ex)}</p>` : '';
  const parts = m => ul((m.parts || []).map(p => `${p.hole ? m3L('Forat', 'Agujero') + ' · ' : ''}<b>${m3TName(p.t)}</b> ${p.s.map(m3Fmt).join(' × ')} mm · ${m3L('centre', 'centro')} (${(p.p || [0, 0, 0]).map(m3Fmt).join(', ')})${(p.r || []).some(v => v) ? ` · ${m3L('gir', 'giro')} ${p.r.map(v => m3Fmt(v) + '°').join(', ')}` : ''}`));
  const code = src => `<pre class="soprog m3so">${m3Esc(m3Print(m3Parse(m3Loc(src))))}</pre>`;
  const crit = () => st.crit && st.crit.length ? `<p class="soop">${m3L('Activitat oberta. Comproveu que:', 'Actividad abierta. Comprobad que:')}</p>${ul(st.crit.map(tval))}` : '';
  const one = m3L('És una solució possible: n\'hi pot haver d\'altres que també funcionin.', 'Es una solución posible: puede haber otras que también funcionen.');
  switch (st.k) {
    case 'm3look': return st.pick != null ? `<p class="soa">${m3L('La peça amagada', 'La pieza escondida')}: <b>${[].concat(st.pick).join(', ')}</b></p>${ex}` : `<p class="soa"><b>${typeof st.opts[st.a] === 'object' ? m3L('Opció', 'Opción') + ' ' + (st.a + 1) + (st.opts[st.a].t ? ': ' + tval(st.opts[st.a].t) : '') : tval(st.opts[st.a])}</b></p>${ex}`;
    case 'm3build': case 'm3fix': return st.sol ? parts(st.sol) + `<p class="soop">${one}</p>` : crit();
    case 'm3code': return st.sol ? code(st.sol) + `<p class="soop">${one}</p>` : crit();
    case 'm3predict': return `<p class="soa">${m3L('Resposta', 'Respuesta')}: <b>${m3L('opció', 'opción')} ${st.a + 1}</b></p>${ex}`;
    case 'm3spot': { let bad = null; m3pWalkAll(m3Parse(m3Loc(st.prog)), s => { if (s.x) bad = s; }); return `${bad ? `<p class="soa">${m3L('La instrucció', 'La instrucción')}: <code>${m3Esc(m3Print([{ ...bad, b: bad.b ? [] : undefined }]).split('\n')[0].replace(/\s*\{$/, ''))}</code> (${m3L('línia', 'línea')} ${bad.ln})</p>` : ''}${ex}`; }
    case 'm3free': return crit();
  }
  return null;
}
// afegeix les files dels passos 3D al solucionari que fa TSOLGEN() (o = { idSessió: [{ n, k, q, a }] })
function m3SolRows(o) {
  const strip = h => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), short = (h, n = 150) => { const t = strip(h); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t; };
  for (const C of TECH) for (const u of C.units) for (const s of (u.s || [])) { if (!s.steps) continue; const rows = o[s.id] || [];
    s.steps.forEach((st, i) => { if (!M3_SOLK[st.k]) return; let a = null; try { a = m3SolHTML(st); } catch (e) { a = `<p class="soop">(${m3Esc(e.message)})</p>`; } if (a == null) return; rows.push({ n: i + 1, k: m3T(M3_SOLK[st.k].join('|')), q: short(tval(st.q || st.name || '')), a }); });
    if (rows.length) o[s.id] = rows.sort((x, y) => x.n - y.n); }
  return o;
}
