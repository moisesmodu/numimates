/* ===== Numi Tech · Tech 3D: el renderitzador del taller 3D (three.js + three-bvh-csg) =====
   Font de tech-model3d.js (es genera amb `node scripts/3d/build-model.mjs`; three, three-mesh-bvh i three-bvh-csg van
   empaquetats a dins: la CSP de l'app només deixa carregar codi del mateix domini). Contracte: scripts/TECH-3D.md.
   API: ok() · create(el, opts) → { set, mode, select, target, view, fit, measure, snapshot, stl, dispose } · thumb(model, w, h)

   ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   FORMES CANÒNIQUES (la mateixa definició que han de fer servir m3Inside / m3In del motor)
   Unitats mm, z amunt. Per a una peça { t, s:[sx,sy,sz], p, r, top, w, n, m }:
     a = sx/2, b = sy/2, h = sz/2. La forma «local» viu dins la caixa [-a,a] × [-b,b] × [-h,h] (centre a l'origen).
   Posició i gir (sense `m`):  world = p + M · local,  M = Rz(rz) · Ry(ry) · Rx(rx)   (graus; gira primer al voltant de X,
     després de Y, després de Z, eixos fixos que passen pel centre; és el rotate([rx,ry,rz]) d'OpenSCAD i l'Euler 'ZYX'
     de three.js).  Inversa:  local = Rx(-rx) · Ry(-ry) · Rz(-rz) · (world - p).
     Rx(θ) = [[1,0,0],[0,c,-s],[0,s,c]] · Ry(θ) = [[c,0,s],[0,1,0],[-s,0,c]] · Rz(θ) = [[c,-s,0],[s,c,0],[0,0,1]]
   Amb `m` (16 nombres, columnes com three.js Matrix4.elements):  world = m · [local, 1]  (substitueix p i r).
   Pertinença d'un punt local (x, y, z):
     box    |x| ≤ a, |y| ≤ b, |z| ≤ h
     cyl    (x/a)² + (y/b)² ≤ 1, |z| ≤ h                                         (eix z, el·lipse a × b)
     sph    (x/a)² + (y/b)² + (z/h)² ≤ 1
     cone   |z| ≤ h, t = (z + h) / (2h), k = 1 - (1 - top)·t, (x/a)² + (y/b)² ≤ k²   (base a baix; top per defecte 0)
     pyr    |z| ≤ h, t = (z + h) / (2h), |x| ≤ a(1 - t), |y| ≤ b(1 - t)              (punta al centre de dalt)
     wedge  |x| ≤ a, |y| ≤ b, z ≥ -h, x/a + z/h ≤ 0      (perfil en xz: (-a,-h), (a,-h), (-a,h); alt a x mínima)
     torus  q = min(1, sz / min(sx, sy)), ρ = √((x/a)² + (y/b)²), ((ρ - (1 - q)) / q)² + (z/h)² ≤ 1
            (anell al pla xy; per a sx = sy: radi exterior a, radi del tub h)
     tube   cyl  i, si w < min(a,b):  (x/(a-w))² + (y/(b-w))² ≥ 1        (paret w mm, per defecte w = 2)
     hex    |z| ≤ h, |y| ≤ b, |x|/a + |y|/(2b) ≤ 1    (vèrtexs (±a,0), (±a/2,±b): cara plana a ±y)
     star   |z| ≤ h i (x,y) dins el polígon P (parell-senar). n puntes (per defecte 5, de 3 a 12):
            P_k = (r_k cos θ_k, r_k sin θ_k), θ_k = 90° + k·180°/n, r_k = 1 (k parell) o 0.5 (k senar), k = 0 … 2n-1
     heart  |z| ≤ h i (x,y) dins el polígon H: H_k = (16 sin³t, 13 cos t − 5 cos 2t − 2 cos 3t − cos 4t),
            t = k·6° (k = 0 … 59)   (la punta a -y, els lòbuls a +y)
     star i heart: el polígon unitari s'escala i es desplaça eix per eix perquè la seva caixa (mín/màx dels vèrtexs)
            sigui exactament [-a,a] × [-b,b]:  X = -a + (x - xmin)/(xmax - xmin)·2a,  Y = -b + (y - ymin)/(ymax - ymin)·2b.
   Les corbes (cyl, cone, sph, torus, tube) es dibuixen amb polígons inscrits de 24 a 64 costats (segons la mida).
   En edició les sòlides tenen una vora arrodonida de 0,15-0,6 mm (només de dibuix: les mides exteriors són exactes);
   la CSG, el mode resultat, les miniatures i l'STL fan servir les formes vives. A la CSG els forats creixen 0,02 mm.
   ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   LA VISTA: v = create(el, opts)
     opts: { plate: 200, snap: 1 (mm), snapRot: 15 (°), quality: 'auto'|'high'|'mid'|'low', mode: 'edit'|'result',
             editable: true, bg: 'studio'|'workshop', view: 'iso', spin: false (gir de vitrina), intro: true (caiguda),
             onPick(id|null), onMove(id, canvi), onDone(id, tipus) }
     onMove(id, { p })     moure sobre la placa (amb snap) o la fletxa d'alçada
     onMove(id, { r })     girar amb un anell (passos de snapRot; Maj = 1°). r en graus, normalitzat a (-180, 180]
     onMove(id, { s, p })  escalar amb un tirador: la cara (o cantonada) oposada es queda quieta, per això canvia p
     onDone(id, 'move'|'lift'|'rot'|'scale') en deixar anar. La vista en fa una vista prèvia però no toca el model del
     motor: el motor aplica el canvi i torna a cridar set() (si no ho fa, la vista es queda amb la vista prèvia).
     Les peces amb `m` es poden seleccionar (halo) però no tenen tiradors. Tocar el buit → onPick(null); doble toc → fit().
     select(id | [ids] | null) · view('iso'|'front'|'back'|'left'|'right'|'top', instant?) · fit(instant?)
     measure(on): cotes de la peça seleccionada (en els seus eixos) o de tot el model, i l'alçada sobre la placa
     snapshot(w, h, { clean: true }) → PNG (sense tiradors) · stl() → ArrayBuffer (sòlid tancat de debò, mm, z amunt)
     thumb(model, w, h, { bg: 'studio'|'workshop'|'none', view, margin }) → Promise<dataURL> (un sol context WebGL)
     Sense WebGL, create() torna una vista buida ({ ok: false }) que no peta i amb un stl() que funciona (CSG en JS pur).
   ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODEL → ARBRE CSG (còpia privada de m3Tree; Nivell 1, semàntica de Tinkercad):
     dins de cada grup g:  G = diff(union(sòlides del grup), union(forats del grup))   (un grup només de forats és un forat)
     arrel:  diff(union(sòlides sense grup + grups sòlids), union(forats sense grup + grups de forats))
   ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { Brush, Evaluator, HalfEdgeMap, ADDITION, SUBTRACTION, INTERSECTION } from 'three-bvh-csg';
import { MeshBVH } from 'three-mesh-bvh';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const D2R = Math.PI / 180;
const num = (v, d) => (typeof v === 'number' && isFinite(v) ? v : d);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* =====================================================================================================================
   1. Formes: contorns i malles (BufferGeometry no indexada amb position + normal, en coordenades locals)
   ===================================================================================================================== */
function fitBox(pts, a, b) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return pts.map(([x, y]) => [-a + (x - x0) / (x1 - x0) * 2 * a, -b + (y - y0) / (y1 - y0) * 2 * b]);
}
export function starPoly(n, a, b) {
  n = clamp(Math.round(num(n, 5)), 3, 12); const P = [];
  for (let k = 0; k < 2 * n; k++) { const t = Math.PI / 2 + k * Math.PI / n, r = k % 2 ? .5 : 1; P.push([r * Math.cos(t), r * Math.sin(t)]); }
  return fitBox(P, a, b);
}
export function heartPoly(a, b) {
  const P = [];
  for (let k = 0; k < 60; k++) { const t = k * 6 * D2R, s = Math.sin(t); P.push([16 * s * s * s, 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)]); }
  return fitBox(P, a, b);
}
const hexPoly = (a, b) => [[a, 0], [a / 2, b], [-a / 2, b], [-a, 0], [-a / 2, -b], [a / 2, -b]];
const ellPoly = (a, b, N) => { const P = []; for (let i = 0; i < N; i++) { const t = i / N * Math.PI * 2; P.push([a * Math.cos(t), b * Math.sin(t)]); } return P; };
const area2 = P => { let s = 0; for (let i = 0; i < P.length; i++) { const [x0, y0] = P[i], [x1, y1] = P[(i + 1) % P.length]; s += x0 * y1 - x1 * y0; } return s; };
const ccw = P => (area2(P) < 0 ? P.slice().reverse() : P);

// petit constructor de triangles (posició + normal per vèrtex)
class TriBuf {
  constructor() { this.p = []; this.n = []; }
  tri(a, b, c, na, nb, nc) {
    this.p.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    if (!na) { const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1; na = nb = nc = [nx / l, ny / l, nz / l]; }
    this.n.push(na[0], na[1], na[2], nb[0], nb[1], nb[2], nc[0], nc[1], nc[2]);
  }
  quad(a, b, c, d, na, nb, nc, nd) { this.tri(a, b, c, na, nb, nc); this.tri(a, c, d, na, nc, nd); }
  geo() { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3)); return g; }
}
const nrm = v => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };

// tapes d'un polígon (CCW) a l'altura z (up: normal +z)
function cap(B, P, z, up, tris) {
  for (const [i, j, k] of tris) {
    const A = [P[i][0], P[i][1], z], Bq = [P[j][0], P[j][1], z], C = [P[k][0], P[k][1], z], n = [0, 0, up ? 1 : -1];
    up ? B.tri(A, Bq, C, n, n, n) : B.tri(A, C, Bq, n, n, n);
  }
}
const triang = P => THREE.ShapeUtils.triangulateShape(P.map(([x, y]) => new THREE.Vector2(x, y)), []);
// normals laterals d'un prisma: suaus si el gir entre arestes és petit, plans a les arestes vives
function sideNormals(P, crease = 32) {
  const N = P.length, en = [];
  for (let i = 0; i < N; i++) { const [x0, y0] = P[i], [x1, y1] = P[(i + 1) % N], l = Math.hypot(x1 - x0, y1 - y0) || 1; en.push([(y1 - y0) / l, -(x1 - x0) / l]); }
  const cosC = Math.cos(crease * D2R), vn = [];   // per a cada aresta i: normal a l'inici i al final
  for (let i = 0; i < N; i++) {
    const prev = en[(i + N - 1) % N], cur = en[i], next = en[(i + 1) % N];
    const s0 = prev[0] * cur[0] + prev[1] * cur[1] > cosC ? nrm([prev[0] + cur[0], prev[1] + cur[1], 0]) : [cur[0], cur[1], 0];
    const s1 = next[0] * cur[0] + next[1] * cur[1] > cosC ? nrm([next[0] + cur[0], next[1] + cur[1], 0]) : [cur[0], cur[1], 0];
    vn.push([s0, s1]);
  }
  return vn;
}
function prism(P, h, smooth = true) {
  P = ccw(P); const B = new TriBuf(), tris = triang(P), N = P.length, vn = sideNormals(P, smooth ? 32 : 0);
  cap(B, P, -h, false, tris); cap(B, P, h, true, tris);
  for (let i = 0; i < N; i++) {
    const [x0, y0] = P[i], [x1, y1] = P[(i + 1) % N], [n0, n1] = vn[i];
    B.quad([x0, y0, -h], [x1, y1, -h], [x1, y1, h], [x0, y0, h], n0, n1, n1, n0);
  }
  return B.geo();
}
// con / tronc el·líptic (k = fracció de dalt) i piràmide
function cone(a, b, h, k, N) {
  const B = new TriBuf(), P = ellPoly(a, b, N), tris = [];
  for (let i = 1; i < N - 1; i++) tris.push([0, i, i + 1]);
  cap(B, P, -h, false, tris); if (k > 1e-4) cap(B, P.map(([x, y]) => [x * k, y * k]), h, true, tris);
  const nz = (1 - k) / (2 * h), nn = t => nrm([Math.cos(t) / a, Math.sin(t) / b, nz]);
  for (let i = 0; i < N; i++) {
    const t0 = i / N * Math.PI * 2, t1 = (i + 1) / N * Math.PI * 2, [x0, y0] = P[i], [x1, y1] = P[(i + 1) % N], n0 = nn(t0), n1 = nn(t1);
    if (k > 1e-4) B.quad([x0, y0, -h], [x1, y1, -h], [x1 * k, y1 * k, h], [x0 * k, y0 * k, h], n0, n1, n1, n0);
    else B.tri([x0, y0, -h], [x1, y1, -h], [0, 0, h], n0, n1, nn((t0 + t1) / 2));
  }
  return B.geo();
}
function pyr(a, b, h) {
  const B = new TriBuf(), c = [[a, -b], [a, b], [-a, b], [-a, -b]].map(([x, y]) => [x, y, -h]), T = [0, 0, h];
  B.tri(c[0], c[2], c[1]); B.tri(c[0], c[3], c[2]);
  for (let i = 0; i < 4; i++) B.tri(c[(i + 3) % 4], c[i], T);
  return B.geo();
}
function box(a, b, h) {
  const B = new TriBuf(), v = (x, y, z) => [x * a, y * b, z * h];
  B.quad(v(-1, -1, -1), v(-1, 1, -1), v(1, 1, -1), v(1, -1, -1)); B.quad(v(-1, -1, 1), v(1, -1, 1), v(1, 1, 1), v(-1, 1, 1));
  B.quad(v(-1, -1, -1), v(1, -1, -1), v(1, -1, 1), v(-1, -1, 1)); B.quad(v(1, 1, -1), v(-1, 1, -1), v(-1, 1, 1), v(1, 1, 1));
  B.quad(v(1, -1, -1), v(1, 1, -1), v(1, 1, 1), v(1, -1, 1)); B.quad(v(-1, 1, -1), v(-1, -1, -1), v(-1, -1, 1), v(-1, 1, 1));
  return B.geo();
}
function wedge(a, b, h) {
  const B = new TriBuf(), A0 = [-a, -b, -h], B0 = [a, -b, -h], C0 = [-a, -b, h], A1 = [-a, b, -h], B1 = [a, b, -h], C1 = [-a, b, h];
  B.quad(A0, A1, B1, B0); B.quad(A1, A0, C0, C1); B.quad(B0, B1, C1, C0); B.tri(A0, B0, C0); B.tri(A1, C1, B1);
  return B.geo();
}
function sph(a, b, h, N) {
  const B = new TriBuf(), M = Math.max(8, N >> 1), pt = (i, j) => { const t = i / N * Math.PI * 2, f = -Math.PI / 2 + j / M * Math.PI, cf = Math.cos(f), sf = Math.sin(f);
    return [[a * cf * Math.cos(t), b * cf * Math.sin(t), h * sf], nrm([cf * Math.cos(t) / a, cf * Math.sin(t) / b, sf / h])]; };
  for (let j = 0; j < M; j++) for (let i = 0; i < N; i++) {
    const [p00, n00] = pt(i, j), [p10, n10] = pt(i + 1, j), [p11, n11] = pt(i + 1, j + 1), [p01, n01] = pt(i, j + 1);
    if (j === 0) B.tri([0, 0, -h], p11, p01, [0, 0, -1], n11, n01);
    else if (j === M - 1) B.tri(p00, p10, [0, 0, h], n00, n10, [0, 0, 1]);
    else B.quad(p00, p10, p11, p01, n00, n10, n11, n01);
  }
  return B.geo();
}
function torus(a, b, h, sx, sy, sz, N) {
  const q = Math.min(.995, sz / Math.min(sx, sy)), c = 1 - q, M = Math.max(12, Math.round(N * .4)), B = new TriBuf();
  const pt = (i, j) => { const t = i / N * Math.PI * 2, f = j / M * Math.PI * 2, r = c + q * Math.cos(f), ct = Math.cos(t), st = Math.sin(t);
    return [[a * r * ct, b * r * st, h * Math.sin(f)], nrm([Math.cos(f) * ct / (q * a), Math.cos(f) * st / (q * b), Math.sin(f) / h])]; };
  for (let j = 0; j < M; j++) for (let i = 0; i < N; i++) {
    const [p00, n00] = pt(i, j), [p10, n10] = pt(i + 1, j), [p11, n11] = pt(i + 1, j + 1), [p01, n01] = pt(i, j + 1);
    B.quad(p00, p10, p11, p01, n00, n10, n11, n01);
  }
  return B.geo();
}
function tube(a, b, h, w, N) {
  const ia = a - w, ib = b - w; if (ia < .05 || ib < .05) return prism(ellPoly(a, b, N), h);
  const B = new TriBuf(), O = ellPoly(a, b, N), I = ellPoly(ia, ib, N), up = [0, 0, 1], dn = [0, 0, -1];
  const no = t => nrm([Math.cos(t) / a, Math.sin(t) / b, 0]), ni = t => nrm([-Math.cos(t) / ia, -Math.sin(t) / ib, 0]);
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N, t0 = i / N * Math.PI * 2, t1 = (i + 1) / N * Math.PI * 2;
    const o0 = O[i], o1 = O[j], i0 = I[i], i1 = I[j];
    B.quad([o0[0], o0[1], h], [o1[0], o1[1], h], [i1[0], i1[1], h], [i0[0], i0[1], h], up, up, up, up);
    B.quad([o0[0], o0[1], -h], [i0[0], i0[1], -h], [i1[0], i1[1], -h], [o1[0], o1[1], -h], dn, dn, dn, dn);
    B.quad([o0[0], o0[1], -h], [o1[0], o1[1], -h], [o1[0], o1[1], h], [o0[0], o0[1], h], no(t0), no(t1), no(t1), no(t0));
    B.quad([i1[0], i1[1], -h], [i0[0], i0[1], -h], [i0[0], i0[1], h], [i1[0], i1[1], h], ni(t1), ni(t0), ni(t0), ni(t1));
  }
  return B.geo();
}
const TYPES = ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'torus', 'tube', 'star', 'heart', 'hex'];
// mides i paràmetres normalitzats d'una peça (el que determina la forma local)
function dims(q) {
  const s = Array.isArray(q.s) ? q.s : [20, 20, 20], x = Math.abs(num(s[0], 20));
  return [Math.max(.05, x), Math.max(.05, Math.abs(num(s[1], x))), Math.max(.05, Math.abs(num(s[2], x)))];
}
function shapeKey(q, seg) {
  const [sx, sy, sz] = dims(q), t = TYPES.includes(q.t) ? q.t : 'box';
  return t + ':' + sx.toFixed(3) + ',' + sy.toFixed(3) + ',' + sz.toFixed(3) + (t === 'cone' ? ',' + clamp(num(q.top, 0), 0, 1).toFixed(3) : '') +
    (t === 'tube' ? ',' + num(q.w, 2).toFixed(3) : '') + (t === 'star' ? ',' + clamp(Math.round(num(q.n, 5)), 3, 12) : '') + '/' + seg;
}
// N: costats de les corbes (adaptat a la mida perquè les peces petites no tinguin triangles inútils)
const segFor = (q, seg) => { const [sx, sy] = dims(q); return Math.max(24, Math.min(seg, Math.round(Math.max(sx, sy) * .9 + 20) & ~3)); };
export function shapeGeometry(q, seg = 64) {
  const [sx, sy, sz] = dims(q), a = sx / 2, b = sy / 2, h = sz / 2, N = segFor(q, seg);
  switch (q.t) {
    case 'cyl': return prism(ellPoly(a, b, N), h);
    case 'sph': return sph(a, b, h, N);
    case 'cone': return cone(a, b, h, clamp(num(q.top, 0), 0, 1), N);
    case 'pyr': return pyr(a, b, h);
    case 'wedge': return wedge(a, b, h);
    case 'torus': return torus(a, b, h, sx, sy, sz, N);
    case 'tube': return tube(a, b, h, Math.max(.2, num(q.w, 2)), N);
    case 'star': return prism(starPoly(q.n, a, b), h, false);
    case 'heart': return prism(heartPoly(a, b), h);
    case 'hex': return prism(hexPoly(a, b), h, false);
    default: return box(a, b, h);
  }
}
/* Malles «de taller» per al mode edició: les mateixes formes amb una vora arrodonida molt petita (0,2-0,6 mm) que agafa
   la llum com un objecte de veritat. Les mides exteriors són exactes; la CSG, l'STL i el mode resultat fan servir les vives. */
function inset(L, d) {   // desplaça un llaç cap a l'esquerra (cap a dins si és antihorari) d mm, amb biaix limitat a les puntes
  const N = L.length, out = [];
  for (let i = 0; i < N; i++) {
    const [x0, y0] = L[(i + N - 1) % N], [x1, y1] = L[i], [x2, y2] = L[(i + 1) % N];
    let ax = x1 - x0, ay = y1 - y0, bx = x2 - x1, by = y2 - y1; const la = Math.hypot(ax, ay) || 1, lb = Math.hypot(bx, by) || 1;
    const n1 = [-ay / la, ax / la], n2 = [-by / lb, bx / lb]; let mx = n1[0] + n2[0], my = n1[1] + n2[1]; const ml = Math.hypot(mx, my) || 1; mx /= ml; my /= ml;
    const k = Math.min(3, 1 / Math.max(.2, mx * n1[0] + my * n1[1])); out.push([x1 + mx * d * k, y1 + my * d * k]);
  }
  return out;
}
function bevelPrism(outer, holes, h, rb, smooth = true, steps = 3) {
  outer = ccw(outer); holes = holes.map(H => ccw(H).slice().reverse());
  const B = new TriBuf(), loops = [outer, ...holes];
  rb = Math.min(rb, h * .45);
  const ring = (L, k, top) => { const f = k / steps * Math.PI / 2, d = rb * (1 - Math.cos(f)), z = top ? h - rb + rb * Math.sin(f) : -h + rb - rb * Math.sin(f); return { P: d > 1e-6 ? inset(L, d) : L, z, c: Math.cos(f), s: Math.sin(f) * (top ? 1 : -1) }; };
  for (const L of loops) {
    const N = L.length, vn = sideNormals(L, smooth ? 32 : 0);   // normals cap a fora del material
    const R = [], T = [];
    for (let k = 0; k <= steps; k++) { R.push(ring(L, k, false)); T.push(ring(L, k, true)); }
    const band = (A, Bq) => { for (let i = 0; i < N; i++) { const j = (i + 1) % N, [n0, n1] = vn[i];
      const nA0 = nrm([n0[0] * A.c, n0[1] * A.c, A.s]), nA1 = nrm([n1[0] * A.c, n1[1] * A.c, A.s]), nB0 = nrm([n0[0] * Bq.c, n0[1] * Bq.c, Bq.s]), nB1 = nrm([n1[0] * Bq.c, n1[1] * Bq.c, Bq.s]);
      B.quad([A.P[i][0], A.P[i][1], A.z], [A.P[j][0], A.P[j][1], A.z], [Bq.P[j][0], Bq.P[j][1], Bq.z], [Bq.P[i][0], Bq.P[i][1], Bq.z], nA0, nA1, nB1, nB0); } };
    for (let k = steps; k > 0; k--) band(R[k], R[k - 1]);
    band(R[0], T[0]);
    for (let k = 0; k < steps; k++) band(T[k], T[k + 1]);
  }
  // tapes (amb els forats) a ±h
  const cO = inset(outer, rb), cH = holes.map(H => inset(H, rb));
  const tris = THREE.ShapeUtils.triangulateShape(cO.map(([x, y]) => new THREE.Vector2(x, y)), cH.map(H => H.map(([x, y]) => new THREE.Vector2(x, y))));
  const all = [...cO, ...cH.flat()], up = [0, 0, 1], dn = [0, 0, -1];
  for (const [i, j, k] of tris) { const A = all[i], Bq = all[j], C = all[k]; B.tri([A[0], A[1], h], [Bq[0], Bq[1], h], [C[0], C[1], h], up, up, up); B.tri([A[0], A[1], -h], [C[0], C[1], -h], [Bq[0], Bq[1], -h], dn, dn, dn); }
  return B.geo();
}
function roundBox(a, b, h, r, n = 3) {
  // cada cara és una graella; cada punt es projecta sobre «caixa interior + esfera de radi r». La graella va espaiada
  // amb tan(θ) prop de les vores perquè dues cares veïnes es trobin exactament a 45° (sense escletxes)
  const B = new TriBuf(), E = [a, b, h], A = E.map(e => e - r);
  const G = A.map(Ai => { const g = [-Ai - r]; for (let k = n - 1; k >= 1; k--) g.push(-Ai - r * Math.tan(k / n * Math.PI / 4)); g.push(-Ai, Ai); for (let k = 1; k < n; k++) g.push(Ai + r * Math.tan(k / n * Math.PI / 4)); g.push(Ai + r); return g; });
  const P = c => { const q = c.map((t, i) => clamp(t, -A[i], A[i])), d = [c[0] - q[0], c[1] - q[1], c[2] - q[2]], l = Math.hypot(d[0], d[1], d[2]) || 1, nn = [d[0] / l, d[1] / l, d[2] / l]; return [[q[0] + nn[0] * r, q[1] + nn[1] * r, q[2] + nn[2] * r], nn]; };
  for (let ax = 0; ax < 3; ax++) for (const sg of [1, -1]) {
    const i = (ax + 1) % 3, j = (ax + 2) % 3, U = G[i], V = G[j];
    const pt = (u, v) => { const c = [0, 0, 0]; c[ax] = sg * E[ax]; c[i] = u; c[j] = v; return P(c); };
    for (let x = 0; x < U.length - 1; x++) for (let y = 0; y < V.length - 1; y++) {
      const q0 = pt(U[x], V[y]), q1 = pt(U[x + 1], V[y]), q2 = pt(U[x + 1], V[y + 1]), q3 = pt(U[x], V[y + 1]);
      if (sg > 0) B.quad(q0[0], q1[0], q2[0], q3[0], q0[1], q1[1], q2[1], q3[1]); else B.quad(q0[0], q3[0], q2[0], q1[0], q0[1], q3[1], q2[1], q1[1]);
    }
  }
  return B.geo();
}
export function displayGeometry(q, seg = 64) {
  const [sx, sy, sz] = dims(q), a = sx / 2, b = sy / 2, h = sz / 2, N = segFor(q, seg), m = Math.min(sx, sy, sz), rb = clamp(m * .035, .15, .6);
  switch (q.t) {
    case 'box': case undefined: return roundBox(a, b, h, Math.min(rb, a * .4, b * .4, h * .4));
    case 'cyl': return bevelPrism(ellPoly(a, b, N), [], h, rb);
    case 'tube': { const w = Math.max(.2, num(q.w, 2)); return a - w < .05 || b - w < .05 ? bevelPrism(ellPoly(a, b, N), [], h, rb) : bevelPrism(ellPoly(a, b, N), [ellPoly(a - w, b - w, N)], h, Math.min(rb, w * .3)); }
    case 'hex': return bevelPrism(hexPoly(a, b), [], h, rb, false);
    case 'star': return bevelPrism(starPoly(q.n, a, b), [], h, rb * .55, false);
    case 'heart': return bevelPrism(heartPoly(a, b), [], h, rb * .5);
    default: return shapeGeometry(q, seg);
  }
}
/* Variants «fines» per a la CSG: quan una peça s'ha de foradar amb molts forats (una placa amb 50 forats), les cares
   grans es parteixen en triangles d'uns L mm. Així cada triangle només el talla un forat i la CSG va centenars de vegades
   més de pressa (el tallador de triangles és quadràtic amb el nombre de talls). La forma és exactament la mateixa. */
function densify(L, d) { const out = []; for (let i = 0; i < L.length; i++) { const A = L[i], B = L[(i + 1) % L.length], n = Math.max(1, Math.ceil(Math.hypot(B[0] - A[0], B[1] - A[1]) / d)); for (let k = 0; k < n; k++) out.push([A[0] + (B[0] - A[0]) * k / n, A[1] + (B[1] - A[1]) * k / n]); } return out; }
function pip(P, x, y) { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const a = P[i], b = P[j]; if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; }
const segD2 = (x, y, A, B) => { const dx = B[0] - A[0], dy = B[1] - A[1], l = dx * dx + dy * dy || 1, t = clamp(((x - A[0]) * dx + (y - A[1]) * dy) / l, 0, 1), ex = A[0] + dx * t - x, ey = A[1] + dy * t - y; return ex * ex + ey * ey; };
// tapa amb punts interiors (Steiner) cada d mm: triangles petits a tota la cara
function capFine(outer, holes, d) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity; for (const [x, y] of outer) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  const loops = [outer, ...holes], st = [], m2 = (d * .55) ** 2;
  for (let y = y0 + d / 2; y < y1; y += d) for (let x = x0 + d / 2 + ((Math.round((y - y0) / d) % 2) * d / 2); x < x1; x += d) {
    if (!pip(outer, x, y) || holes.some(H => pip(H, x, y))) continue;
    let ok = true; for (const L of loops) { for (let i = 0; i < L.length && ok; i++) if (segD2(x, y, L[i], L[(i + 1) % L.length]) < m2) ok = false; if (!ok) break; }
    if (ok) st.push([[x, y]]);
  }
  const V = v => v.map(([x, y]) => new THREE.Vector2(x, y)), tris = THREE.ShapeUtils.triangulateShape(V(outer), [...holes.map(V), ...st.map(V)]);
  return { all: [...outer, ...holes.flat(), ...st.flat()], tris };
}
function prismFine(outer, holes, h, d, smooth = true) {
  outer = ccw(densify(outer, d)); holes = holes.map(H => ccw(densify(H, d)).slice().reverse());
  const B = new TriBuf(), nz = Math.max(1, Math.ceil(2 * h / d)), up = [0, 0, 1], dn = [0, 0, -1];
  const { all, tris } = capFine(outer, holes, d);
  for (const [i, j, k] of tris) { const A = all[i], Bq = all[j], C = all[k]; B.tri([A[0], A[1], h], [Bq[0], Bq[1], h], [C[0], C[1], h], up, up, up); B.tri([A[0], A[1], -h], [C[0], C[1], -h], [Bq[0], Bq[1], -h], dn, dn, dn); }
  for (const L of [outer, ...holes]) {
    const N = L.length, vn = sideNormals(L, smooth ? 32 : 0);
    for (let i = 0; i < N; i++) { const [x0, y0] = L[i], [x1, y1] = L[(i + 1) % N], [n0, n1] = vn[i];
      for (let k = 0; k < nz; k++) { const za = -h + 2 * h * k / nz, zb = -h + 2 * h * (k + 1) / nz; B.quad([x0, y0, za], [x1, y1, za], [x1, y1, zb], [x0, y0, zb], n0, n1, n1, n0); } }
  }
  return B.geo();
}
function boxFine(a, b, h, d) {
  const B = new TriBuf(), E = [a, b, h], n = E.map(e => Math.max(1, Math.ceil(2 * e / d)));
  for (let ax = 0; ax < 3; ax++) for (const sg of [1, -1]) {
    const i = (ax + 1) % 3, j = (ax + 2) % 3, nn = [0, 0, 0]; nn[ax] = sg;
    const P = (u, v) => { const c = [0, 0, 0]; c[ax] = sg * E[ax]; c[i] = -E[i] + 2 * E[i] * u / n[i]; c[j] = -E[j] + 2 * E[j] * v / n[j]; return c; };
    for (let u = 0; u < n[i]; u++) for (let v = 0; v < n[j]; v++) { const q0 = P(u, v), q1 = P(u + 1, v), q2 = P(u + 1, v + 1), q3 = P(u, v + 1); if (sg > 0) B.quad(q0, q1, q2, q3, nn, nn, nn, nn); else B.quad(q0, q3, q2, q1, nn, nn, nn, nn); }
  }
  return B.geo();
}
export function fineGeometry(q, seg = 64, d = 4) {
  const [sx, sy, sz] = dims(q), a = sx / 2, b = sy / 2, h = sz / 2, N = segFor(q, seg);
  switch (q.t) {
    case 'cyl': return prismFine(ellPoly(a, b, N), [], h, d);
    case 'tube': { const w = Math.max(.2, num(q.w, 2)); return a - w < .05 || b - w < .05 ? prismFine(ellPoly(a, b, N), [], h, d) : prismFine(ellPoly(a, b, N), [ellPoly(a - w, b - w, N)], h, d); }
    case 'hex': return prismFine(hexPoly(a, b), [], h, d, false);
    case 'star': return prismFine(starPoly(q.n, a, b), [], h, d, false);
    case 'heart': return prismFine(heartPoly(a, b), [], h, d);
    case 'box': case undefined: return boxFine(a, b, h, d);
    default: return null;   // sph, torus, cone, pyr i wedge: es queden com són
  }
}
// matriu local → món d'una peça
const _e = new THREE.Euler(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _one = new THREE.Vector3(1, 1, 1);
export function partMatrix(q, out = new THREE.Matrix4()) {
  if (Array.isArray(q.m) && q.m.length === 16 && q.m.every(x => typeof x === 'number' && isFinite(x))) return out.fromArray(q.m);
  const p = Array.isArray(q.p) ? q.p : [0, 0, 0], r = Array.isArray(q.r) ? q.r : [0, 0, 0];
  _e.set(num(r[0], 0) * D2R, num(r[1], 0) * D2R, num(r[2], 0) * D2R, 'ZYX');
  return out.compose(_v.set(num(p[0], 0), num(p[1], 0), num(p[2], 0)), _q.setFromEuler(_e), _one);
}

/* =====================================================================================================================
   2. Model → arbre CSG
   ===================================================================================================================== */
export function treeOf(model) {
  if (!model) return null;
  if (model.tree) return model.tree;
  if (model.op || model.prim) return model;
  // un programa del Nivell 2 ({ prog } o { src }): el converteix el motor (tech-model.js, global m3Tree)
  if (model.prog != null || model.src != null) { try { return typeof globalThis.m3Tree === 'function' ? globalThis.m3Tree(model) : null; } catch (e) { return null; } }
  const parts = (model.parts || []).filter(q => q && typeof q === 'object' && q.s);
  if (!parts.length) return null;
  const U = kids => (kids.length === 1 ? kids[0] : { op: 'union', kids });
  const D = (sol, hol) => (hol.length ? { op: 'diff', kids: [U(sol), U(hol)] } : U(sol));
  const sol = [], hol = [], groups = new Map();
  for (const q of parts) {
    if (q.g != null && q.g !== '') { if (!groups.has(q.g)) groups.set(q.g, { s: [], h: [] }); groups.get(q.g)[q.hole ? 'h' : 's'].push({ prim: q }); }
    else (q.hole ? hol : sol).push({ prim: q });
  }
  for (const G of groups.values()) { if (G.s.length) sol.push(D(G.s, G.h)); else hol.push(U(G.h)); }
  if (!sol.length) return null;
  return D(sol, hol);
}
// fulles de l'arbre amb el seu signe (neg: és a la part que es resta d'una diferència)
export function leavesOf(tree, out = [], neg = false) {
  if (!tree) return out;
  if (tree.prim) { out.push({ q: tree.prim, neg }); return out; }
  (tree.kids || []).forEach((k, i) => leavesOf(k, out, tree.op === 'diff' && i > 0 ? !neg : neg));
  return out;
}
// llista plana de peces per al mode edició (model.parts tal qual; d'un arbre, les fulles)
export function partsOf(model) {
  if (!model) return [];
  if (model.parts) return model.parts.filter(q => q && typeof q === 'object' && q.s).map((q, i) => ({ q, id: q.id != null ? String(q.id) : '#' + i, hole: !!q.hole }));
  return leavesOf(treeOf(model)).map(({ q, neg }, i) => ({ q, id: q.id != null ? String(q.id) : '#' + i, hole: neg || !!q.hole }));
}

/* =====================================================================================================================
   3. CSG (three-bvh-csg). Cada fulla és un Brush amb la malla ja col·locada al món.
      · Per dibuixar no cal fer la unió de les sòlides (dues peces opaques que se superposen es veuen igual que la seva
        unió): cada node dona una llista de «trossos» que es poden superposar, i a cada tros només se li resten els forats
        que el toquen. Cada resultat es desa amb una clau (què és i què se li ha restat): si es mou una peça, només es
        recalculen els trossos que toca. Per a l'STL sí que es fa la unió de veritat (stlGeometry) i es tanquen les juntes.
      · els forats es fan 0,02 mm més grans i les sòlides 0,004 mm: així les cares que coincideixen (un forat que travessa
        just una peça, dues caixes apilades) no deixen pells ni forats.
   ===================================================================================================================== */
const EPS_S = 0, EPS_H = .02;
const GEO = new Map();   // forma → geometria local (compartida; mai es modifica)
const DGEO = new Map();
function dispGeo(q, seg) {
  const k = 'D' + shapeKey(q, seg); let g = DGEO.get(k);
  if (!g) { try { g = displayGeometry(q, seg); } catch (e) { g = shapeGeometry(q, seg); } g.computeBoundingBox(); g.computeBoundingSphere(); DGEO.set(k, g); if (DGEO.size > 300) { const f = DGEO.keys().next().value; DGEO.get(f).dispose(); DGEO.delete(f); } }
  return g;
}
function localGeo(q, seg) {
  const k = shapeKey(q, seg); let g = GEO.get(k);
  if (!g) { g = shapeGeometry(q, seg); g.computeBoundingBox(); GEO.set(k, g); if (GEO.size > 400) { const f = GEO.keys().next().value; GEO.get(f).dispose(); GEO.delete(f); } }
  return g;
}
// Brush amb BVH «targetLeafSize» (la versió de three-bvh-csg encara fa servir l'opció antiga i omple la consola d'avisos)
class CBrush extends Brush {
  prepareGeometry() {
    const g = this.geometry, idx = g.index, pa = g.attributes.position;
    const hash = `${g.uuid}_${idx ? idx.uuid + '_' + idx.version : '-'}_${pa.uuid}_${pa.count}_${pa.version}`;
    if (this._hash === hash) return; this._hash = hash;
    g.boundsTree = new MeshBVH(g, { targetLeafSize: 3, maxDepth: 64, indirect: true });
    if (!g.halfEdges) g.halfEdges = new HalfEdgeMap();
    g.halfEdges.updateFrom(g);
    const n = (idx ? idx.count : pa.count) / 3 | 0;
    if (!g.groupIndices || g.groupIndices.length !== n) g.groupIndices = new Uint16Array(n);
    const gi = g.groupIndices; gi.fill(0);
    g.groups.forEach((gr, i) => { for (let t = gr.start / 3, e = Math.min(n, (gr.start + gr.count) / 3); t < e; t++) gi[t] = i; });
  }
}
const _m = new THREE.Matrix4(), _s = new THREE.Matrix4();
function placedGeo(q, eps, seg, fine) {
  const [sx, sy, sz] = dims(q); let g = null;
  if (fine) { try { g = fineGeometry(q, seg, fine); } catch (e) { g = null; } }
  if (!g) g = localGeo(q, seg).clone();
  partMatrix(q, _m);
  // creixement mínim (eps) en coordenades locals; si la matriu fa de mirall, es gira l'ordre dels triangles
  if (eps) { _s.makeScale((sx + 2 * eps) / sx, (sy + 2 * eps) / sy, (sz + 2 * eps) / sz); _m.multiply(_s); }
  g.applyMatrix4(_m);
  if (_m.determinant() < 0) flipWinding(g);
  g.computeBoundingBox(); return g;
}
function flipWinding(g) {
  const P = g.attributes.position.array, N = g.attributes.normal.array;
  for (let i = 0; i < P.length; i += 9) for (let k = 0; k < 3; k++) { let t = P[i + 3 + k]; P[i + 3 + k] = P[i + 6 + k]; P[i + 6 + k] = t; t = N[i + 3 + k]; N[i + 3 + k] = N[i + 6 + k]; N[i + 6 + k] = t; }
  g.attributes.position.needsUpdate = g.attributes.normal.needsUpdate = true;
}
const touch = (A, B, e = 1e-3) => A.min.x <= B.max.x + e && A.max.x >= B.min.x - e && A.min.y <= B.max.y + e && A.max.y >= B.min.y - e && A.min.z <= B.max.z + e && A.max.z >= B.min.z - e;
function triCount(g) { const n = g.index ? g.index.count : g.attributes.position.count; return Math.min(n, g.drawRange.count) / 3 | 0; }
// geometria sense drawRange ni índexs (el que surt de la CSG fa servir drawRange)
function compact(g) {
  const P = g.attributes.position.array, N = g.attributes.normal.array, s = g.drawRange.start, e = Math.min(g.attributes.position.count, s + g.drawRange.count);
  const o = new THREE.BufferGeometry(); o.setAttribute('position', new THREE.BufferAttribute(P.slice(s * 3, e * 3), 3)); o.setAttribute('normal', new THREE.BufferAttribute(N.slice(s * 3, e * 3), 3));
  for (const gr of g.groups) { const a = Math.max(gr.start, s), b = Math.min(e, gr.start + gr.count); if (b > a) o.addGroup(a - s, b - a, gr.materialIndex); }
  o.computeBoundingBox(); return o;
}
// ajunta geometries (sense CSG: per a trossos que no es toquen). mats: un material per geometria o llistes per grups
function concat(list) {
  let n = 0; for (const { g } of list) n += g.attributes.position.count;
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3), out = new THREE.BufferGeometry(), mats = [];
  let o = 0;
  for (const { g, mat } of list) {
    const c = g.attributes.position.count, mm = [].concat(mat);
    P.set(g.attributes.position.array.subarray(0, c * 3), o * 3); N.set(g.attributes.normal.array.subarray(0, c * 3), o * 3);
    const groups = g.groups.length ? g.groups : [{ start: 0, count: c, materialIndex: 0 }];
    for (const gr of groups) { const m = mm[gr.materialIndex || 0] ?? mm[0]; let k = mats.indexOf(m); if (k < 0) { k = mats.length; mats.push(m); } out.addGroup(o + gr.start, Math.min(gr.count, c - gr.start), k); }
    o += c;
  }
  out.setAttribute('position', new THREE.BufferAttribute(P, 3)); out.setAttribute('normal', new THREE.BufferAttribute(N, 3)); out.computeBoundingBox();
  return { g: out, mat: mats };
}
export class CSG {
  // matFor(peça, negativa, peça base) → material (o qualsevol valor que identifiqui el color)
  constructor(o = {}) { this.ev = new Evaluator(); this.ev.attributes = ['position', 'normal']; this.ev.useGroups = true; this.seg = o.seg || 64; this.matFor = o.matFor || (() => null); this.cache = new Map(); this.gen = 0; this.ops = 0; }
  memo(key, make) { let e = this.cache.get(key); if (!e) { e = make(); e.key = key; this.cache.set(key, e); } e.gen = this.gen; return e; }
  brush(p) { if (!p.brush) { p.brush = new CBrush(p.g, p.mat); p.brush.updateMatrixWorld(); } return p.brush; }
  op(A, B, op) {
    this.ops++;
    const r = this.ev.evaluate(this.brush(A), this.brush(B), op, new CBrush());
    const g = compact(r.geometry); r.geometry.dispose(); return { g, mat: r.material };
  }
  // tros = { g (geometria al món), mat, key }
  leaf(q, neg, base, fine) {
    const mat = this.matFor(q, neg, base), eps = neg ? EPS_H : EPS_S;
    const key = 'L' + JSON.stringify([q.t, q.s, q.p, q.r, q.m, q.top, q.w, q.n, eps, this.seg, mat && mat.uuid ? mat.uuid : String(mat)]) + (fine ? '~' + fine : '');
    const e = this.memo(key, () => ({ g: placedGeo(q, eps, this.seg, fine), mat })); e.src = { q, neg, base }; return e;
  }
  // si una fulla grossa s'ha de foradar amb molts trossos petits, es fa servir la seva variant fina
  refine(a, Bs) {
    if (!a.src || a.key.includes('~')) return a;
    let tris = 0, mn = Infinity; for (const b of Bs) { tris += b.g.attributes.position.count / 3; const sz = b.g.boundingBox.getSize(_v); mn = Math.min(mn, Math.max(Math.min(sz.x, sz.y, sz.z), .5)); }
    const big = a.g.boundingBox.getSize(_v), area = big.x * big.y + big.y * big.z + big.x * big.z, ta = a.g.attributes.position.count / 3;
    if (Bs.length < 4 && tris < 300) return a;
    const d = Math.round(clamp(Math.max(mn * 1.1, Math.sqrt(area / 6000)), 1.5, 12) * 2) / 2;   // com a molt ~12.000 triangles
    if (area / (d * d) < ta * 1.5) return a;   // ja és prou fina
    const f = this.leaf(a.src.q, a.src.neg, a.src.base, d); return f.g.attributes.position.count ? f : a;
  }
  // resta a cada tros els trossos de B que el toquen (els de B que no es toquen entre ells van junts en una sola operació)
  minus(A, B) {
    const out = [];
    for (let a of A) {
      const Bs = B.filter(b => touch(a.g.boundingBox, b.g.boundingBox));
      if (Bs.length) a = this.refine(a, Bs);
      for (const pack of packs(Bs)) {
        const pk = pack.length === 1 ? pack[0] : this.memo('U' + pack.map(b => b.key).join('|'), () => concat(pack));
        const ka = a, kb = pk;
        a = this.memo('(' + ka.key + ')-(' + kb.key + ')', () => this.op(ka, kb, SUBTRACTION));
        if (!a.g.attributes.position.count) break;
      }
      if (a.g.attributes.position.count) out.push(a);
    }
    return out;
  }
  inter(A, B) {
    const out = [];
    for (const a of A) for (const b of B) if (touch(a.g.boundingBox, b.g.boundingBox)) { const r = this.memo('(' + a.key + ')&(' + b.key + ')', () => this.op(a, b, INTERSECTION)); if (r.g.attributes.position.count) out.push(r); }
    return out;
  }
  // node → llista de trossos (es poden superposar: és una unió implícita)
  node(t, neg = false, base = null) {
    if (!t) return [];
    if (t.prim) return [this.leaf(t.prim, neg, base)];
    const kids = (t.kids || []).filter(Boolean);
    if (!kids.length) return [];
    if (t.op === 'diff') {
      const b0 = base || firstLeaf(kids[0]), A = this.node(kids[0], neg, base);
      const B = kids.slice(1).flatMap(k => this.node(k, !neg, b0));
      return A.length && B.length ? this.minus(A, B) : A;
    }
    if (t.op === 'inter') { let A = this.node(kids[0], neg, base); for (const k of kids.slice(1)) { if (!A.length) break; A = this.inter(A, this.node(k, neg, base)); } return A; }
    return kids.flatMap(k => this.node(k, neg, base));
  }
  // trossos del resultat d'un model (per dibuixar)
  pieces(model) {
    this.gen++; this.ops = 0; let P = [];
    try { P = this.node(treeOf(model)); this.failed = false; }
    catch (e) {   // si la CSG falla (geometria impossible), almenys es veuen les peces sòlides sense retallar
      this.failed = true; if (typeof console !== 'undefined') console.warn('m3 csg', e);
      try { P = leavesOf(treeOf(model)).filter(l => !l.neg).map(l => this.leaf(l.q, false, null)); } catch (e2) { P = []; }
    }
    return P;
  }
  // allibera el que no s'ha fet servir en les últimes `keep` avaluacions
  sweep(keep = 1) { for (const [k, e] of this.cache) if (this.gen - e.gen >= keep) { e.g.dispose(); if (e.brush) e.brush.geometry = null; this.cache.delete(k); } }
  // resultat per dibuixar: una geometria amb grups per material
  run(model) { const t0 = now(); const P = this.pieces(model), r = P.length ? concat(P) : { g: new THREE.BufferGeometry(), mat: [] }; this.sweep(2); r.ms = now() - t0; r.ops = this.ops; return r; }
  // sòlid tancat per a l'STL: unió de veritat dels trossos que es toquen, juntes en T reparades
  solid(model) {
    const P = this.pieces(model).map(p => ({ g: p.g, mat: p.mat, key: p.key }));
    // unió per rondes (aparellant veïns que es toquen): molt més ràpid que anar fent créixer un sol tros
    let list = P.slice();
    for (let changed = true; changed;) {
      changed = false; const used = new Set(), next = [];
      const cen = list.map(p => p.g.boundingBox.getCenter(new THREE.Vector3()));
      for (let i = 0; i < list.length; i++) {
        if (used.has(i)) continue; let best = -1, bd = Infinity;
        for (let j = i + 1; j < list.length; j++) if (!used.has(j) && touch(list[i].g.boundingBox, list[j].g.boundingBox)) { const d = cen[i].distanceToSquared(cen[j]); if (d < bd) { bd = d; best = j; } }
        if (best < 0) { next.push(list[i]); used.add(i); continue; }
        const A = list[i], Bq = list[best], r = this.op(A, Bq, ADDITION); if (A.tmp) A.g.dispose(); if (Bq.tmp) Bq.g.dispose();
        r.tmp = true; next.push(r); used.add(i); used.add(best); changed = true;
      }
      list = next;
    }
    const out = list.length ? concat(list).g : new THREE.BufferGeometry();
    list.forEach(p => p.tmp && p.g.dispose()); this.sweep(2);
    return out.attributes.position ? weldTJunctions(out) : out;
  }
  dispose() { for (const e of this.cache.values()) e.g.dispose(); this.cache.clear(); }
}
const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
const firstLeaf = t => (t.prim ? t.prim : t.kids && t.kids.length ? firstLeaf(t.kids[0]) : null);
// agrupa trossos en paquets que no es toquen entre ells (cada paquet es pot restar d'una sola vegada)
function packs(list) {
  const out = [];
  for (const b of list) { const p = out.find(pk => pk.every(o => !touch(o.g.boundingBox, b.g.boundingBox, .01))); p ? p.push(b) : out.push([b]); }
  return out;
}
// Repara les juntes en T (un vèrtex d'un triangle que cau al mig de l'aresta d'un altre): parteix el triangle
// perquè totes les arestes tinguin parella i la malla sigui estanca de veritat (el que demanen els programes de laminat).
// Tot es fa amb índexs enters: vèrtexs soldats a 1 µm, arestes amb clau numèrica.
function weldTJunctions(g, tol = 1e-3) {
  const src = g.attributes.position.array, V = [], vid = new Map(), q = v => Math.round(v / tol);
  const idOf = (x, y, z) => { const k = q(x) + ',' + q(y) + ',' + q(z); let i = vid.get(k); if (i === undefined) { i = V.length / 3; vid.set(k, i); V.push(x, y, z); } return i; };
  let T = []; for (let i = 0; i < src.length; i += 3) T.push(idOf(src[i], src[i + 1], src[i + 2]));
  const vx = i => V[i * 3], vy = i => V[i * 3 + 1], vz = i => V[i * 3 + 2];
  for (let pass = 0; pass < 4; pass++) {
    const E = edgeCounts(T), open = [];
    for (const [k, c] of E) if (c) { const b = k % 4194304, a = (k - b) / 4194304; open.push([a, b]); }
    if (!open.length) break;
    // vèrtexs candidats (els de les arestes obertes) en una graella d'1 mm; cada aresta oberta recorre les seves cel·les (DDA)
    const cand = new Set(); open.forEach(([a, b]) => { cand.add(a); cand.add(b); });
    const cell = 1, grid = new Map(), e2 = tol * 3, ck = (x, y, z) => x + ',' + y + ',' + z;
    for (const id of cand) { const x = vx(id), y = vy(id), z = vz(id), ks = new Set(); for (const dx of [-e2, e2]) for (const dy of [-e2, e2]) for (const dz of [-e2, e2]) ks.add(ck(Math.floor((x + dx) / cell), Math.floor((y + dy) / cell), Math.floor((z + dz) / cell)));
      for (const k of ks) { let c = grid.get(k); if (!c) grid.set(k, c = []); c.push(id); } }
    const onEdge = (a, b) => {
      const A = [vx(a), vy(a), vz(a)], d = [vx(b) - A[0], vy(b) - A[1], vz(b) - A[2]], L2 = d[0] * d[0] + d[1] * d[1] + d[2] * d[2]; if (L2 < 1e-12) return [];
      const res = [], seen = new Set(), c = A.map(v => Math.floor(v / cell)), c1 = [vx(b), vy(b), vz(b)].map(v => Math.floor(v / cell));
      const st = d.map(Math.sign), tM = [0, 1, 2].map(i => (d[i] ? ((c[i] + (st[i] > 0 ? 1 : 0)) * cell - A[i]) / d[i] : Infinity)), tD = d.map(v => (v ? cell / Math.abs(v) : Infinity));
      for (let guard = 0; guard < 100000; guard++) {
        for (const id of grid.get(ck(c[0], c[1], c[2])) || []) {
          if (id === a || id === b || seen.has(id)) continue; seen.add(id);
          const w0 = vx(id) - A[0], w1 = vy(id) - A[1], w2 = vz(id) - A[2], t = (w0 * d[0] + w1 * d[1] + w2 * d[2]) / L2; if (t <= 1e-6 || t >= 1 - 1e-6) continue;
          const ex = w0 - d[0] * t, ey = w1 - d[1] * t, ez = w2 - d[2] * t; if (ex * ex + ey * ey + ez * ez < tol * tol * 4) res.push([t, id]);
        }
        if (c[0] === c1[0] && c[1] === c1[1] && c[2] === c1[2]) break;
        const k = tM[0] < tM[1] ? (tM[0] < tM[2] ? 0 : 2) : (tM[1] < tM[2] ? 1 : 2); if (tM[k] > 1 + 1e-9) break; c[k] += st[k]; tM[k] += tD[k];
      }
      return res.sort((u, v) => u[0] - v[0]).map(r => r[1]);
    };
    const split = new Map(); for (const [a, b] of open) { const sl = onEdge(a, b); if (sl.length) { split.set(a * 4194304 + b, sl); split.set(b * 4194304 + a, sl.slice().reverse()); } }
    if (!split.size) break;
    const out = [];
    for (let t = 0; t < T.length; t += 3) {
      const tri = [T[t], T[t + 1], T[t + 2]]; let poly = [];
      for (let e = 0; e < 3; e++) { const a = tri[e], b = tri[(e + 1) % 3]; poly.push(a); const sl = split.get(a * 4194304 + b); if (sl) poly.push(...sl); }
      if (poly.length === 3) { out.push(...tri); continue; }
      // si només hi ha punts nous en una aresta, ventall des del vèrtex del davant; si n'hi ha en més d'una, des del centre
      // (així no surt cap triangle de gruix zero)
      const sp = [0, 1, 2].filter(e => split.has(tri[e] * 4194304 + tri[(e + 1) % 3]));
      if (sp.length === 1) { const s0 = poly.indexOf(tri[(sp[0] + 2) % 3]); poly = poly.slice(s0).concat(poly.slice(0, s0)); for (let i = 1; i < poly.length - 1; i++) out.push(poly[0], poly[i], poly[i + 1]); }
      else { const c = V.length / 3; V.push((vx(tri[0]) + vx(tri[1]) + vx(tri[2])) / 3, (vy(tri[0]) + vy(tri[1]) + vy(tri[2])) / 3, (vz(tri[0]) + vz(tri[1]) + vz(tri[2])) / 3); for (let i = 0; i < poly.length; i++) out.push(c, poly[i], poly[(i + 1) % poly.length]); }
    }
    T = out;
  }
  // neteja: triangles degenerats, parells repetits i llenques girades al revés (només si milloren la malla)
  let T2 = dedupeTris(T); if (T2 !== T && openCount(T2) <= openCount(T)) T = T2;
  if (openCount(T)) { const T3 = flipSlivers(T, V); if (T3 !== T && openCount(T3) < openCount(T)) T = T3; }
  const P = new Float32Array(T.length * 3); for (let i = 0; i < T.length; i++) { P[i * 3] = V[T[i] * 3]; P[i * 3 + 1] = V[T[i] * 3 + 1]; P[i * 3 + 2] = V[T[i] * 3 + 2]; }
  const o = new THREE.BufferGeometry(); o.setAttribute('position', new THREE.BufferAttribute(P, 3)); o.computeVertexNormals(); o.computeBoundingBox(); return o;
}
// arestes amb signe: +1 per a a→b (a < b), −1 per a b→a; clau numèrica (fins a 4 milions de vèrtexs)
function edgeCounts(T) {
  const E = new Map();
  for (let t = 0; t < T.length; t += 3) for (let e = 0; e < 3; e++) { const a = T[t + e], b = T[t + (e + 1) % 3]; if (a === b) continue; const k = a < b ? a * 4194304 + b : b * 4194304 + a; E.set(k, (E.get(k) || 0) + (a < b ? 1 : -1)); }
  return E;
}
function openCount(T) { let n = 0; for (const c of edgeCounts(T).values()) if (c) n++; return n; }
function dedupeTris(T) {
  const M = new Map(), keep = new Uint8Array(T.length / 3).fill(1);
  for (let t = 0; t < T.length / 3; t++) {
    const a = T[t * 3], b = T[t * 3 + 1], c = T[t * 3 + 2];
    if (a === b || b === c || a === c) { keep[t] = 0; continue; }
    const s = [a, b, c].sort((x, y) => x - y), k = s.join(','), m = [a, b, c].indexOf(s[0]), par = [a, b, c][(m + 1) % 3] === s[1] ? 1 : -1;
    const prev = M.get(k); if (!prev || !prev.length) { M.set(k, [[t, par]]); continue; }
    const opp = prev.findIndex(([, p2]) => p2 === -par);
    if (opp >= 0) { keep[t] = 0; keep[prev[opp][0]] = 0; prev.splice(opp, 1); } else keep[t] = 0;
  }
  if (keep.every(Boolean)) return T;
  const out = []; for (let t = 0; t < keep.length; t++) if (keep[t]) out.push(T[t * 3], T[t * 3 + 1], T[t * 3 + 2]); return out;
}
// triangles petits girats al revés (la CSG en deixa algun on dues cares coincideixen): si les tres arestes van en el
// mateix sentit que les dels veïns, es gira el triangle
function flipSlivers(T, V) {
  const E = edgeCounts(T), out = T.slice(); let n = 0;
  const key = (a, b) => (a < b ? a * 4194304 + b : b * 4194304 + a), sg = (a, b) => (a < b ? 1 : -1);
  for (let t = 0; t < T.length; t += 3) {
    const k = [out[t], out[t + 1], out[t + 2]]; if (k[0] === k[1] || k[1] === k[2] || k[0] === k[2]) continue;
    if (![0, 1, 2].every(e => E.get(key(k[e], k[(e + 1) % 3])) * sg(k[e], k[(e + 1) % 3]) === 2)) continue;
    for (let e = 0; e < 3; e++) { const a = k[e], b = k[(e + 1) % 3]; E.set(key(a, b), E.get(key(a, b)) - 2 * sg(a, b)); }
    out[t + 1] = k[2]; out[t + 2] = k[1]; n++;
  }
  return n ? out : T;
}

/* =====================================================================================================================
   4. STL binari (mm, z amunt) i comprovació d'estanqueïtat
   ===================================================================================================================== */
export function stlOf(geometry) {
  const P = geometry.attributes.position.array, n = P.length / 9 | 0, buf = new ArrayBuffer(84 + n * 50), dv = new DataView(buf);
  const head = 'Numi Tech 3D - STL binari en mm (z amunt)';
  for (let i = 0; i < 80; i++) dv.setUint8(i, i < head.length ? head.charCodeAt(i) : 32);
  dv.setUint32(80, n, true);
  let o = 84;
  for (let t = 0; t < n; t++) {
    const i = t * 9, ax = P[i], ay = P[i + 1], az = P[i + 2], bx = P[i + 3], by = P[i + 4], bz = P[i + 5], cx = P[i + 6], cy = P[i + 7], cz = P[i + 8];
    const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1;
    dv.setFloat32(o, nx / l, true); dv.setFloat32(o + 4, ny / l, true); dv.setFloat32(o + 8, nz / l, true); o += 12;
    for (let k = 0; k < 9; k++) { dv.setFloat32(o, P[i + k], true); o += 4; }
    dv.setUint16(o, 0, true); o += 2;
  }
  return buf;
}
// arestes que no tenen parella (0 = malla tancada). Per a proves.
export function openEdges(geometry, tol = 1e-3) {
  const P = geometry.attributes.position.array, key = i => Math.round(P[i] / tol) + ',' + Math.round(P[i + 1] / tol) + ',' + Math.round(P[i + 2] / tol), E = new Map();
  for (let i = 0; i < P.length; i += 9) {
    const k = [key(i), key(i + 3), key(i + 6)];
    for (let e = 0; e < 3; e++) { const a = k[e], b = k[(e + 1) % 3]; if (a === b) continue; const id = a < b ? a + '|' + b : b + '|' + a, d = a < b ? 1 : -1; E.set(id, (E.get(id) || 0) + d); }
  }
  let open = 0; for (const v of E.values()) if (v !== 0) open++;
  return open;
}

/* =====================================================================================================================
   5. Peces de l'escena: materials, textures i la placa d'impressió
   ===================================================================================================================== */
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const UI = { sel: '#FFB21E', ghost: '#3D8BFF', ax: ['#F0443A', '#1FB45A', '#2F7BFF'], ink: '#14204A', hole: '#9AA4B6' };
const DEF_C = '#7C5CFF';
const safeColor = c => { const k = new THREE.Color(DEF_C); try { if (typeof c === 'string' && c) k.set(c); } catch (e) { } return k; };
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
// soroll suau que es repeteix (per a la textura del PEI i el gra de la fusta)
function noiseTex(n = 256, seed = 7) {
  let s = seed; const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const t = canvasTex(n, n, (g, w, h) => {
    const im = g.createImageData(w, h), d = im.data, grid = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) grid[i] = rnd();
    // dues octaves de soroll de valor + gra fi
    const smp = (x, y, k) => { const X = Math.floor(x / k), Y = Math.floor(y / k), fx = x / k - X, fy = y / k - Y, m = w / k, v = (a, b) => grid[((b % m + m) % m) * 131 % (w * h) + ((a % m + m) % m) * 17 % w];
      const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy); return (v(X, Y) * (1 - sx) + v(X + 1, Y) * sx) * (1 - sy) + (v(X, Y + 1) * (1 - sx) + v(X + 1, Y + 1) * sx) * sy; };
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const v = smp(x, y, 16) * .35 + smp(x, y, 4) * .35 + grid[y * w + x] * .3, i = (y * w + x) * 4; d[i] = d[i + 1] = d[i + 2] = v * 255; d[i + 3] = 255; }
    g.putImageData(im, 0, 0);
  }, false);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
// fons d'estudi (degradat amb una llum suau al mig, amb gra perquè no es vegin bandes)
const BG = {
  studio: { stops: [[0, '#F8FAFE'], [.5, '#E7ECF5'], [1, '#C7D0E0']], glow: 'rgba(255,255,255,.65)', floor: '#C9D1E0' },
  workshop: { stops: [[0, '#F3EBE1'], [.55, '#DDCDB9'], [1, '#B49B80']], glow: 'rgba(255,248,236,.6)', floor: '#B9A184' }
};
function bgTex(kind) {
  const B = BG[kind] || BG.studio;
  return canvasTex(256, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); B.stops.forEach(([k, c]) => gr.addColorStop(k, c)); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const rg = g.createRadialGradient(w * .5, h * .36, 0, w * .5, h * .36, h * .55); rg.addColorStop(0, B.glow); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.fillRect(0, 0, w, h);
    const im = g.getImageData(0, 0, w, h), d = im.data; for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - .5) * 3; d[i] += n; d[i + 1] += n; d[i + 2] += n; } g.putImageData(im, 0, 0);
  });
}
// estudi infinit: cúpula amb el degradat de la paret i el terra (es veu l'horitzó quan baixes la càmera)
const DOME = { studio: ['#F4F7FC', '#E9EEF6', '#EDF1F7', '#DDE3EE'], workshop: ['#F6EEE4', '#E3D3C0', '#BCA387', '#B39A7E'] };
function domeMesh(kind) {
  const C = (DOME[kind] || DOME.studio).map(c => new THREE.Color(c));
  const m = new THREE.ShaderMaterial({
    uniforms: { uTop: { value: C[0] }, uHor: { value: C[1] }, uLow: { value: C[2] }, uFloor: { value: C[3] }, uRes: { value: new THREE.Vector2(1, 1) } },
    vertexShader: 'varying vec3 vD; void main(){ vD = (modelMatrix * vec4(position, 1.)).xyz - cameraPosition; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position.z = gl_Position.w * .99999; }',
    fragmentShader: `uniform vec3 uTop, uHor, uLow, uFloor; uniform vec2 uRes; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); float e = d.z;
        vec3 c = e > 0. ? mix(uHor, uTop, pow(clamp(e, 0., 1.), .55)) : mix(uLow, uFloor, smoothstep(0., -.35, e));
        c = mix(c, uHor, (1. - smoothstep(0., .06, abs(e))) * .5);
        vec2 q = gl_FragCoord.xy / uRes - .5; c *= 1. - .1 * smoothstep(.25, .85, length(q * vec2(1.1, 1.)));
        gl_FragColor = vec4(c, 1.); }`,
    side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false
  });
  const d = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), m); d.renderOrder = -10; d.frustumCulled = false; d.userData.fx = 1; d.userData.dome = 1; return d;
}
const radialTex = () => canvasTex(128, 128, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(0,0,0,1)'); r.addColorStop(.45, 'rgba(0,0,0,.55)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });

// trossos de shader compartits
const GLSL_PW_V = ['#include <common>', '#include <common>\nvarying vec3 vPw;', '#include <worldpos_vertex>', '#include <worldpos_vertex>\nvPw = (modelMatrix * vec4(transformed, 1.0)).xyz;'];
const GLSL_GRID = `
float pgrid(vec2 uv, float lw) {
  vec4 dd = vec4(dFdx(uv), dFdy(uv)); vec2 d = vec2(length(dd.xz), length(dd.yw));
  vec2 tw = vec2(lw), dw = clamp(tw, d, vec2(.5)), aa = d * 1.5;
  vec2 g = 1. - abs(fract(uv) * 2. - 1.);
  vec2 g2 = smoothstep(dw + aa, dw - aa, g); g2 *= clamp(tw / dw, 0., 1.); g2 = mix(g2, tw, clamp(d * 2. - 1., 0., 1.));
  return mix(g2.x, 1., g2.y);
}
float pline(float x, float w) { float d = fwidth(x); float dw = max(w, d); return smoothstep(dw * .5 + d, dw * .5 - d, abs(x)) * clamp(w / dw, 0., 1.); }`;
function patchVS(sh) { sh.vertexShader = sh.vertexShader.replace(GLSL_PW_V[0], GLSL_PW_V[1]).replace(GLSL_PW_V[2], GLSL_PW_V[3]); }

// la placa: full de PEI texturat (fosc, amb quadrícula fina, regle i eixos) sobre un llit d'alumini
const PLATE = { base: '#2E323B', rough: .66, line: '#E9EEF8', a1: .07, a10: .24, a50: .4, edge: '#1C1F25' };
function plateDecals(P, M, TAB, k) {
  const E = P / 2 + M + TAB, n = Math.round(2 * E * k);
  return canvasTex(n, n, (g) => {
    const X = x => (x + E) * k, Y = y => (E - y) * k, half = P / 2;
    g.clearRect(0, 0, n, n); g.lineCap = 'round';
    // regle a les vores de davant i de l'esquerra (marques cada 10 mm, números cada 50)
    g.strokeStyle = 'rgba(233,238,248,.62)'; g.fillStyle = 'rgba(233,238,248,.62)'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `700 ${2.5 * k}px Lexend, system-ui, sans-serif`;
    for (let v = -half; v <= half + 1e-6; v += 10) {
      const big = Math.abs(v % 50) < 1e-6, L = big ? 2.4 : 1.3; g.lineWidth = (big ? .32 : .22) * k;
      g.beginPath(); g.moveTo(X(v), Y(-half - .6)); g.lineTo(X(v), Y(-half - .6 - L)); g.stroke();
      g.beginPath(); g.moveTo(X(-half - .6), Y(v)); g.lineTo(X(-half - .6 - L), Y(v)); g.stroke();
      if (big && Math.abs(v) < half - 1) { g.fillText(String(v), X(v), Y(-half - 4.9)); g.save(); g.translate(X(-half - 4.9), Y(v)); g.rotate(-Math.PI / 2); g.fillText(String(v), 0, 0); g.restore(); }
    }
    // eixos X i Y a l'origen
    const ar = (x0, y0, x1, y1, c, t) => { g.strokeStyle = c; g.fillStyle = c; g.lineWidth = .55 * k; g.beginPath(); g.moveTo(X(x0), Y(y0)); g.lineTo(X(x1), Y(y1)); g.stroke();
      const a = Math.atan2(-(y1 - y0), x1 - x0), s = 2.6 * k; g.beginPath(); g.moveTo(X(x1) + Math.cos(a) * s * .3, Y(y1) + Math.sin(a) * s * .3); g.lineTo(X(x1) - Math.cos(a - .45) * s, Y(y1) - Math.sin(a - .45) * s); g.lineTo(X(x1) - Math.cos(a + .45) * s, Y(y1) - Math.sin(a + .45) * s); g.closePath(); g.fill();
      g.font = `800 ${3.4 * k}px Lexend, system-ui, sans-serif`; g.fillText(t, X(x1) + Math.cos(a) * 4.2 * k, Y(y1) + Math.sin(a) * 4.2 * k); };
    const c0 = -half + 7; ar(c0, c0, c0 + 14, c0, 'rgba(255,110,100,.9)', 'X'); ar(c0, c0, c0, c0 + 14, 'rgba(90,225,140,.9)', 'Y');
    g.fillStyle = 'rgba(233,238,248,.8)'; g.beginPath(); g.arc(X(c0), Y(c0), .9 * k, 0, 7); g.fill();
    // pestanya: el nom de la placa gravat
    g.fillStyle = 'rgba(233,238,248,.5)'; g.font = `800 ${3.1 * k}px Lexend, system-ui, sans-serif`; g.fillText('numi · 3D', X(0), Y(-half - M - TAB * .48));
    g.font = `600 ${2 * k}px Lexend, system-ui, sans-serif`; g.fillStyle = 'rgba(233,238,248,.42)'; g.fillText(`${P} × ${P} mm`, X(half - 14), Y(-half - 4.9));
  });
}
function roundRect(sh, x0, y0, x1, y1, r) {
  sh.moveTo(x0 + r, y0); sh.lineTo(x1 - r, y0); sh.quadraticCurveTo(x1, y0, x1, y0 + r); sh.lineTo(x1, y1 - r); sh.quadraticCurveTo(x1, y1, x1 - r, y1);
  sh.lineTo(x0 + r, y1); sh.quadraticCurveTo(x0, y1, x0, y1 - r); sh.lineTo(x0, y0 + r); sh.quadraticCurveTo(x0, y0, x0 + r, y0); return sh;
}
function makePlate(P, q, bg) {
  const G = new THREE.Group(), M = 7, TAB = 8, S = P / 2 + M, R = 9, tw = 40, f = 3, rr = 5;
  // contorn del full amb la pestanya de davant
  const sh = new THREE.Shape(); sh.moveTo(-S + R, -S); sh.lineTo(-tw / 2 - f, -S); sh.quadraticCurveTo(-tw / 2, -S, -tw / 2, -S - f); sh.lineTo(-tw / 2, -S - TAB + rr);
  sh.quadraticCurveTo(-tw / 2, -S - TAB, -tw / 2 + rr, -S - TAB); sh.lineTo(tw / 2 - rr, -S - TAB); sh.quadraticCurveTo(tw / 2, -S - TAB, tw / 2, -S - TAB + rr); sh.lineTo(tw / 2, -S - f);
  sh.quadraticCurveTo(tw / 2, -S, tw / 2 + f, -S); sh.lineTo(S - R, -S); sh.quadraticCurveTo(S, -S, S, -S + R); sh.lineTo(S, S - R); sh.quadraticCurveTo(S, S, S - R, S);
  sh.lineTo(-S + R, S); sh.quadraticCurveTo(-S, S, -S, S - R); sh.lineTo(-S, -S + R); sh.quadraticCurveTo(-S, -S, -S + R, -S);
  const sg = new THREE.ExtrudeGeometry(sh, { depth: .7, bevelEnabled: true, bevelThickness: .3, bevelSize: .4, bevelSegments: 3, curveSegments: 14 });
  const nt = noiseTex(256, 11); nt.repeat.set(1 / 18, 1 / 18);
  const decal = plateDecals(P, M, TAB, q === 'low' ? 5 : 8);
  const top = new THREE.MeshPhysicalMaterial({ color: PLATE.base, roughness: PLATE.rough, metalness: 0, roughnessMap: nt, bumpMap: nt, bumpScale: .45, clearcoat: .18, clearcoatRoughness: .6, sheen: .25, sheenRoughness: .7, sheenColor: new THREE.Color('#8A93A8') });
  const E = P / 2 + M + TAB, line = new THREE.Color(PLATE.line);
  top.onBeforeCompile = sh2 => {
    patchVS(sh2);
    Object.assign(sh2.uniforms, { uHalf: { value: P / 2 }, uE: { value: E }, uDecal: { value: decal }, uLine: { value: line }, uA: { value: new THREE.Vector3(PLATE.a1, PLATE.a10, PLATE.a50) },
      uAx: { value: new THREE.Color(UI.ax[0]) }, uAy: { value: new THREE.Color(UI.ax[1]) } });
    sh2.fragmentShader = sh2.fragmentShader.replace('#include <common>', `#include <common>
varying vec3 vPw; uniform float uHalf, uE; uniform sampler2D uDecal; uniform vec3 uLine, uA, uAx, uAy;${GLSL_GRID}`).replace('#include <map_fragment>', `#include <map_fragment>
if (vPw.z > -.05) {
  vec2 p = vPw.xy; float inP = step(abs(p.x), uHalf + .3) * step(abs(p.y), uHalf + .3);
  float g1 = pgrid(p, .07), g10 = pgrid(p / 10., .028), g50 = pgrid(p / 50., .0095);
  float a = max(max(g1 * uA.x, g10 * uA.y), g50 * uA.z) * inP;
  diffuseColor.rgb = mix(diffuseColor.rgb, uLine, a);
  float ax = pline(p.y, .5) * step(abs(p.x), uHalf), ay = pline(p.x, .5) * step(abs(p.y), uHalf);
  diffuseColor.rgb = mix(diffuseColor.rgb, uAx, ax * .55); diffuseColor.rgb = mix(diffuseColor.rgb, uAy, ay * .55);
  vec4 dc = texture2D(uDecal, p / (2. * uE) + .5); diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb, dc.a);
}`);
  };
  const side = new THREE.MeshPhysicalMaterial({ color: PLATE.edge, roughness: .45, metalness: .2, clearcoat: .3 });
  const sheet = new THREE.Mesh(sg, [top, side]); sheet.position.z = -1.0; sheet.receiveShadow = true; G.add(sheet);
  // llit d'alumini raspallat amb cargols a les cantonades i la capa calefactora a sota
  const bs = new THREE.Shape(); roundRect(bs, -S - 6, -S - 6, S + 6, S + 6, R + 5);
  const bg2 = new THREE.ExtrudeGeometry(bs, { depth: 3, bevelEnabled: true, bevelThickness: .6, bevelSize: .6, bevelSegments: 3, curveSegments: 14 });
  const alu = new THREE.MeshPhysicalMaterial({ color: '#A9B1BD', metalness: .8, roughness: .42 });
  const bed = new THREE.Mesh(bg2, alu); bed.position.z = -1.0 - .3 - 4.2 + .6; bed.receiveShadow = true; bed.castShadow = true; G.add(bed);
  const scr = new THREE.CylinderGeometry(2.4, 2.4, 1.1, 24); scr.rotateX(Math.PI / 2);
  const scrM = new THREE.MeshPhysicalMaterial({ color: '#8A92A0', metalness: .9, roughness: .25 }), hexM = new THREE.MeshStandardMaterial({ color: '#2A2E36', roughness: .6 });
  const hx = new THREE.CylinderGeometry(1.1, 1.1, .3, 6); hx.rotateX(Math.PI / 2);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) { const x = sx * (S + 2.3), y = sy * (S + 2.3); const m1 = new THREE.Mesh(scr, scrM); m1.position.set(x, y, -1.3 + .2); m1.castShadow = true; G.add(m1); const m2 = new THREE.Mesh(hx, hexM); m2.position.set(x, y, -1.3 + .8); G.add(m2); }
  const hs = new THREE.Shape(); roundRect(hs, -S - 2, -S - 2, S + 2, S + 2, R + 2);
  const heat = new THREE.Mesh(new THREE.ExtrudeGeometry(hs, { depth: 2.2, bevelEnabled: false, curveSegments: 10 }), new THREE.MeshStandardMaterial({ color: '#1E2127', roughness: .8 }));
  heat.position.z = bed.position.z - .6 - 2.2; G.add(heat);
  const bottom = heat.position.z;
  // terra: ombra suau i una taca d'oclusió (estudi) o el banc de fusta (taller)
  const floorZ = bottom - .05;
  if (bg === 'workshop') {
    const wood = canvasTex(1024, 1024, (g, w, h) => {
      let s = 3; const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
      const pw = w / 5;
      for (let i = 0; i < 5; i++) { const base = [[199, 150, 98], [186, 136, 86], [206, 160, 108], [192, 143, 92], [180, 130, 82]][i]; g.fillStyle = `rgb(${base})`; g.fillRect(i * pw, 0, pw, h);
        for (let k = 0; k < 70; k++) { const x = i * pw + rnd() * pw, a = .05 + rnd() * .12; g.strokeStyle = `rgba(${90 + rnd() * 40},${55 + rnd() * 25},${25},${a})`; g.lineWidth = .6 + rnd() * 2.2; g.beginPath(); g.moveTo(x, 0);
          for (let y = 0; y <= h; y += 64) g.lineTo(x + Math.sin(y * .01 + k) * 3 + (rnd() - .5) * 2, y); g.stroke(); }
        g.fillStyle = 'rgba(60,35,15,.35)'; g.fillRect(i * pw, 0, 2, h); }
    });
    wood.wrapS = wood.wrapT = THREE.RepeatWrapping; wood.repeat.set(3, 3);
    const tbl = new THREE.Mesh(new THREE.PlaneGeometry(1500, 1500), new THREE.MeshStandardMaterial({ map: wood, roughness: .62, roughnessMap: nt, metalness: 0 }));
    tbl.position.z = floorZ; tbl.receiveShadow = true; G.add(tbl);
  } else {
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(P * 4, P * 4), new THREE.ShadowMaterial({ color: '#1B2440', opacity: .16, transparent: true, depthWrite: false })); sc.position.z = floorZ; sc.receiveShadow = true; sc.userData.fx = 1; G.add(sc);
  }
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(2 * S * 1.32, 2 * S * 1.32), new THREE.MeshBasicMaterial({ map: radialTex(), color: '#0E1630', transparent: true, opacity: bg === 'workshop' ? .5 : .32, depthWrite: false }));
  blob.position.z = floorZ + .02; blob.userData.fx = 1; blob.renderOrder = -1; G.add(blob);
  G.userData = { S, bottom, floorZ, dispose() { G.traverse(o => { if (o.geometry) o.geometry.dispose(); [].concat(o.material || []).forEach(m => { for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose(); m.dispose(); }); }); decal.dispose(); nt.dispose(); } };
  return G;
}

// materials de les peces: PLA brillant (amb un vernís suau), forats ratllats translúcids, fantasma blau
function plaMaterial(c, U) {
  const m = new THREE.MeshPhysicalMaterial({ color: safeColor(c), roughness: .36, metalness: 0, clearcoat: .5, clearcoatRoughness: .2, specularIntensity: .6, ior: 1.45 });
  // al mode resultat, les capes d'impressió (0,2 mm) es veuen quan t'hi acostes
  m.onBeforeCompile = sh => {
    patchVS(sh); sh.uniforms.uLayers = U.layers;
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vPw; uniform float uLayers;')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
if (uLayers > 0.) { float zl = vPw.z / .2; float fw = fwidth(zl); float k = uLayers * clamp(1. - fw * 1.6, 0., 1.);
  if (k > 0.) { float s = sin(zl * 6.2831853); vec3 upV = normalize((viewMatrix * vec4(0., 0., 1., 0.)).xyz); float side = 1. - abs(dot(normal, upV));
    normal = normalize(normal + upV * s * .22 * k * side); } }`);
  };
  m.customProgramCacheKey = () => 'pla';
  return m;
}
function holeMaterials() {
  const mk = (front) => {
    const m = new THREE.MeshStandardMaterial({ color: front ? '#8C96A8' : '#6E7789', roughness: .55, metalness: 0, transparent: true, opacity: front ? .58 : .3, depthWrite: false, side: front ? THREE.FrontSide : THREE.BackSide });
    m.onBeforeCompile = sh => {
      patchVS(sh);
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vPw;').replace('#include <map_fragment>', `#include <map_fragment>
{ float s = (vPw.x + vPw.y + vPw.z) / 3.2; float f = abs(fract(s) - .5) * 2.; float w = fwidth(s) * 2.;
  float st = smoothstep(.5 - w, .5 + w, f); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.96, .97, 1.), st * ${front ? '.7' : '.35'}); diffuseColor.a *= mix(1., 1.3, st); }`);
    };
    m.customProgramCacheKey = () => 'hole' + front;
    return m;
  };
  return { front: mk(true), back: mk(false) };
}
function ghostMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(UI.ghost) }, uA: { value: 1 } }, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }',
    fragmentShader: `uniform vec3 uC; uniform float uA; varying vec3 vN; varying vec3 vV;
      void main(){ vec3 n = normalize(vN), v = normalize(vV); float f = 1. - abs(dot(n, v)); float a = (gl_FrontFacing ? .1 + .5 * pow(f, 2.4) : .05) * uA;
        gl_FragColor = vec4(uC * (gl_FrontFacing ? 1.05 + .4 * f : .8), a); }`
  });
}
// tipus de línia amb gruix en píxels (anells, cotes, contorns)
function lineMat(color, width, o = {}) {
  const m = new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, transparent: true, opacity: o.opacity ?? 1, depthTest: o.depthTest ?? true, depthWrite: false, dashed: !!o.dashed, dashSize: o.dash || 2, gapSize: o.gap || 1.6, worldUnits: false });
  return m;
}
function segs(positions, mat) { const g = new LineSegmentsGeometry(); g.setPositions(positions); const l = new LineSegments2(g, mat); if (mat.dashed) l.computeLineDistances(); l.userData.fx = 1; return l; }
const EDGES = new Map();
function edgesFor(geo, key, angle = 24) {
  let e = EDGES.get(key + '/' + angle);
  if (!e) { const eg = new THREE.EdgesGeometry(geo, angle); e = Array.from(eg.attributes.position.array); eg.dispose(); EDGES.set(key + '/' + angle, e); if (EDGES.size > 300) EDGES.delete(EDGES.keys().next().value); }
  return e;
}
// passades: el GTAO i el halo no han de veure els elements d'ajuda (línies, tiradors, fantasma, forats translúcids)
const isFx = o => o.userData.fx || o.isLine2 || o.isLineSegments2 || o.isSprite || o.isLine || o.isPoints || (o.material && !Array.isArray(o.material) && o.material.transparent && o.material.depthWrite === false);
class AOPass extends GTAOPass {
  // en pantalles retina l'AO es calcula a resolució CSS (és suau de natura): estalvia 3/4 de la feina
  setSize(w, h) { const k = this.aoScale || 1; super.setSize(Math.max(1, Math.round(w * k)), Math.max(1, Math.round(h * k))); }
  _overrideVisibility() { const c = this._visibilityCache; this.scene.traverse(o => { if (o.visible && (isFx(o) || o.userData.noAO)) { o.visible = false; c.push(o); } }); }
}
// halo de selecció: silueta de les peces seleccionades (capa 2) → desenfocada → anell de color per fora (barreja normal,
// es veu igual sobre el fons clar que sobre la placa fosca; també es veu la vora que queda darrere d'altres peces)
const HALO_LAYER = 2;
class HaloPass extends Pass {
  constructor(scene, camera, color) {
    super(); this.scene = scene; this.camera = camera; this.needsSwap = false; this.active = false;
    const o = { type: THREE.UnsignedByteType }; this.mask = new THREE.WebGLRenderTarget(4, 4, o); this.b1 = new THREE.WebGLRenderTarget(2, 2, o); this.b2 = this.b1.clone();
    this.maskMat = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide });
    this.blur = new THREE.ShaderMaterial({ uniforms: { tMap: { value: null }, uDir: { value: new THREE.Vector2() } }, depthTest: false, depthWrite: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
      fragmentShader: `uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
        void main(){ float w0 = .2270, w1 = .1946, w2 = .1216, w3 = .0541, w4 = .0162;
          float s = texture2D(tMap, vUv).r * w0 + (texture2D(tMap, vUv + uDir).r + texture2D(tMap, vUv - uDir).r) * w1 + (texture2D(tMap, vUv + 2. * uDir).r + texture2D(tMap, vUv - 2. * uDir).r) * w2
            + (texture2D(tMap, vUv + 3. * uDir).r + texture2D(tMap, vUv - 3. * uDir).r) * w3 + (texture2D(tMap, vUv + 4. * uDir).r + texture2D(tMap, vUv - 4. * uDir).r) * w4;
          gl_FragColor = vec4(s, s, s, 1.); }` });
    this.comp = new THREE.ShaderMaterial({ uniforms: { tMask: { value: this.mask.texture }, tBlur: { value: this.b2.texture }, uC: { value: new THREE.Color(color) }, uK: { value: new THREE.Color('#2A1A00') } },
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.NormalBlending,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
      fragmentShader: `uniform sampler2D tMask, tBlur; uniform vec3 uC, uK; varying vec2 vUv;
        void main(){ float m = texture2D(tMask, vUv).r, b = texture2D(tBlur, vUv).r; float o = (1. - m);
          float ring = clamp(b * 3.2, 0., 1.) * o, glow = clamp(b * 1.4, 0., 1.) * o;
          vec3 c = mix(uK, uC, smoothstep(.0, .55, b)); gl_FragColor = vec4(mix(uC, c, .25), max(ring * .95, glow * .5)); }` });
    this.q = new FullScreenQuad(null);
  }
  setSize(w, h) { this.mask.setSize(w, h); const hw = Math.max(1, w >> 1), hh = Math.max(1, h >> 1); this.b1.setSize(hw, hh); this.b2.setSize(hw, hh); this.px = [1 / hw, 1 / hh]; }
  render(r, wb, rb) {
    if (!this.active) return;
    const cam = this.camera, L = cam.layers.mask, bg = this.scene.background, ov = this.scene.overrideMaterial, ac = r.autoClear, cc = r.getClearColor(new THREE.Color()), ca = r.getClearAlpha();
    cam.layers.set(HALO_LAYER); this.scene.background = null; this.scene.overrideMaterial = this.maskMat; r.autoClear = false;
    r.setRenderTarget(this.mask); r.setClearColor(0x000000, 1); r.clear(); r.render(this.scene, cam);
    cam.layers.mask = L; this.scene.background = bg; this.scene.overrideMaterial = ov;
    const k = 1.35 * (window.devicePixelRatio > 1.4 ? 1.4 : 1);
    this.blur.uniforms.tMap.value = this.mask.texture; this.blur.uniforms.uDir.value.set(this.px[0] * k, 0); this.q.material = this.blur; r.setRenderTarget(this.b1); r.clear(); this.q.render(r);
    this.blur.uniforms.tMap.value = this.b1.texture; this.blur.uniforms.uDir.value.set(0, this.px[1] * k); r.setRenderTarget(this.b2); r.clear(); this.q.render(r);
    this.q.material = this.comp; r.setRenderTarget(this.renderToScreen ? null : rb); this.q.render(r);
    r.autoClear = ac; r.setClearColor(cc, ca);
  }
  dispose() { this.mask.dispose(); this.b1.dispose(); this.b2.dispose(); this.blur.dispose(); this.comp.dispose(); this.maskMat.dispose(); this.q.dispose(); }
}

/* =====================================================================================================================
   6. La vista: create(el, opts)
   ===================================================================================================================== */
// encaix de càmera sobre punts reals (no sobre la caixa): centre de la silueta i mida F (mitja alçada al punt de mira)
function fitPoints(P, az, el, fov, asp, m) {
  const ce = Math.cos(el), o = [ce * Math.cos(az), ce * Math.sin(az), Math.sin(el)], r = [-Math.sin(az), Math.cos(az), 0], u = [o[1] * r[2] - o[2] * r[1], o[2] * r[0] - o[0] * r[2], o[0] * r[1] - o[1] * r[0]], t = Math.tan(fov * D2R / 2);
  const n = P.length / 3; if (!n) return null;
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  const X = new Float32Array(n), Y = new Float32Array(n), Zc = new Float32Array(n);
  for (let i = 0; i < n; i++) { const a = P[i * 3], b = P[i * 3 + 1], c = P[i * 3 + 2]; X[i] = a * r[0] + b * r[1] + c * r[2]; Y[i] = a * u[0] + b * u[1] + c * u[2]; Zc[i] = a * o[0] + b * o[1] + c * o[2];
    x0 = Math.min(x0, X[i]); x1 = Math.max(x1, X[i]); y0 = Math.min(y0, Y[i]); y1 = Math.max(y1, Y[i]); z0 = Math.min(z0, Zc[i]); z1 = Math.max(z1, Zc[i]); }
  let xm = (x0 + x1) / 2, ym = (y0 + y1) / 2; const zm = (z0 + z1) / 2; let F = 0;
  for (let it = 0; it < 3; it++) {
    F = 0; for (let i = 0; i < n; i++) { const z = (Zc[i] - zm) * t; F = Math.max(F, Math.abs(Y[i] - ym) / m + z, Math.abs(X[i] - xm) / (m * asp) + z); }
    // recentra amb perspectiva: on cauen de debò els extrems a la pantalla
    const D = F / t; let a0 = Infinity, a1 = -Infinity, b0 = Infinity, b1 = -Infinity;
    for (let i = 0; i < n; i++) { const d = (D - (Zc[i] - zm)) * t, nx = (X[i] - xm) / (d * asp), ny = (Y[i] - ym) / d; a0 = Math.min(a0, nx); a1 = Math.max(a1, nx); b0 = Math.min(b0, ny); b1 = Math.max(b1, ny); }
    xm += (a0 + a1) / 2 * F * asp * .9; ym += (b0 + b1) / 2 * F * .9;
  }
  return { c: new THREE.Vector3(r[0] * xm + u[0] * ym + o[0] * zm, r[1] * xm + u[1] * ym + o[1] * zm, r[2] * xm + u[2] * ym + o[2] * zm), F };
}
function geoPoints(list, max = 60000) {   // [{g, M}] → posicions al món (amb salt si n'hi ha moltes)
  let n = 0; for (const { g } of list) n += g.attributes.position.count; const st = Math.max(1, Math.ceil(n / max)), out = [], v = new THREE.Vector3();
  for (const { g, M } of list) { const a = g.attributes.position; for (let i = 0; i < a.count; i += st) { v.fromBufferAttribute(a, i); if (M) v.applyMatrix4(M); out.push(v.x, v.y, v.z); } }
  return out;
}
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGL2RenderingContext && c.getContext('webgl2')); } catch (e) { return false; } }
const clone = o => (o ? JSON.parse(JSON.stringify(o)) : null);
const fmt = v => String(Math.round(v * 10) / 10).replace('.', ',').replace('-', '−');
const norm180 = a => { a = ((a + 180) % 360 + 360) % 360 - 180; return Math.abs(a) < 1e-9 ? 0 : a === -180 ? 180 : a; };
const VIEWS = { iso: [-52, 28], front: [-90, 0], back: [90, 0], right: [0, 0], left: [180, 0], top: [-90, 90], bottom: [-90, -90] };
const FOV_ISO = 30, FOV_AX = 16;
function detectQuality(R, want) {
  if (want === 'high' || want === 'low' || want === 'mid') return want;
  let ren = ''; try { const gl = R.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info'); ren = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : ''; } catch (e) { }
  const ua = navigator.userAgent || '', mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  const weak = /SwiftShader|llvmpipe|softpipe|Mali-[4T]|Adreno \(TM\) [2-5]\d\d|PowerVR|Intel.*HD Graphics [2-5]\d{2,3}\b/i.test(ren) || (navigator.deviceMemory && navigator.deviceMemory <= 2) || (mobile && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  return weak ? 'low' : mobile ? 'mid' : 'high';
}
const QL = { high: { dpr: 2, ao: true, sh: 2048, seg: 64 }, mid: { dpr: 1.6, ao: true, sh: 2048, seg: 56 }, low: { dpr: 1.25, ao: false, sh: 1024, seg: 40 } };

export function create(el, opts = {}) {
  try { return makeView(el, opts); }
  catch (e) { if (typeof console !== 'undefined') console.warn('m3 view', e); return stubView(opts); }
}
// sense WebGL: no es dibuixa res, però stl() continua funcionant (la CSG és JavaScript pur)
function stubView() {
  let model = null; const f = () => { };
  return { ok: false, set(m) { model = clone(m); }, mode: f, select: f, target: f, view: f, fit: f, measure: f, snapshot: () => '', resize: f, dispose: f,
    stl() { const c = new CSG(); const g = c.solid(model); c.dispose(); return stlOf(g.attributes.position ? g : new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([], 3))); } };
}

function makeView(el, opts) {
  const O = Object.assign({ plate: 200, snap: 1, snapRot: 15, quality: 'auto', mode: 'edit', editable: true, bg: 'studio', intro: true, view: 'iso', spin: false }, opts);
  const PL = Math.max(60, num(O.plate, 200));
  const R = new THREE.WebGLRenderer({ antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance', preserveDrawingBuffer: false });
  let QN = detectQuality(R, O.quality), Q = QL[QN];
  R.outputColorSpace = THREE.SRGBColorSpace; R.toneMapping = THREE.NeutralToneMapping; R.toneMappingExposure = 1.0;
  R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFShadowMap; R.shadowMap.autoUpdate = false;   // les ombres només es refan si canvia el model (no en girar la càmera)
  const cv = R.domElement; cv.className = 'm3c'; Object.assign(cv.style, { display: 'block', width: '100%', height: '100%', touchAction: 'none', outline: 'none', cursor: 'default' });
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
  el.appendChild(cv);
  const hud = document.createElement('div'); hud.className = 'm3hud';
  Object.assign(hud.style, { position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', pointerEvents: 'none', overflow: 'hidden', fontFamily: 'Lexend, system-ui, sans-serif' });
  el.appendChild(hud);

  // escena, entorn i llums (z amunt, mil·límetres)
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(FOV_ISO, 1, 1, 6000); cam.up.set(0, 0, 1);
  const bgT = bgTex(O.bg), dome = domeMesh(O.bg); scene.add(dome); dome.onBeforeRender = (r, sc, c) => { dome.position.copy(c.position); dome.scale.setScalar(c.far * .9); dome.updateMatrixWorld(); r.getDrawingBufferSize(dome.material.uniforms.uRes.value); };
  const pm = new THREE.PMREMGenerator(R), room = new RoomEnvironment(), envRT = pm.fromScene(room, .035); room.dispose(); pm.dispose();
  scene.environment = envRT.texture; scene.environmentIntensity = O.bg === 'workshop' ? .55 : .6; scene.environmentRotation.set(Math.PI / 2, 0, 0);
  if (O.bg === 'workshop') scene.fog = new THREE.Fog(BG.workshop.floor, PL * 3.2, PL * 8);
  const key = new THREE.DirectionalLight(O.bg === 'workshop' ? '#FFE9CC' : '#FFF5E8', 3.1);
  key.position.set(-PL * .55, -PL * 1.15, PL * 2.1); key.castShadow = true; key.shadow.mapSize.set(Q.sh, Q.sh);
  const SR = PL / 2 + 40; Object.assign(key.shadow.camera, { left: -SR, right: SR, top: SR, bottom: -SR, near: PL * .5, far: PL * 5 }); key.shadow.camera.updateProjectionMatrix();
  key.shadow.bias = -.0002; key.shadow.normalBias = .35; key.shadow.radius = 3; key.shadow.intensity = .85;
  const rim = new THREE.DirectionalLight('#DCE8FF', .75); rim.position.set(PL * .9, PL * 1.3, PL * .9);
  const hemi = new THREE.HemisphereLight('#F4F8FF', '#9A8E80', .3); hemi.position.set(0, 0, 1);
  scene.add(key, rim, hemi);
  const plate = makePlate(PL, QN, O.bg); scene.add(plate);
  const partsG = new THREE.Group(), resG = new THREE.Group(), ghostG = new THREE.Group(), gizG = new THREE.Group(), measG = new THREE.Group(), fxG = new THREE.Group();
  scene.add(partsG, resG, ghostG, fxG);
  // els tiradors i les cotes es dibuixen a part, per sobre de tot (també del halo i de l'AO)
  const over = new THREE.Scene(); over.add(gizG, measG);

  // postprocessat: MSAA → GTAO → halo de selecció → to i color
  // MSAA en un búfer de mitja precisió si l'aparell el pot pintar (si no, 8 bits i sense AO)
  const HF = R.extensions.has('EXT_color_buffer_float') || R.extensions.has('EXT_color_buffer_half_float');
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: HF ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: R.capabilities.maxSamples >= 4 ? 4 : 0 });
  if (!HF) { Q = Object.assign({}, Q, { ao: false }); }
  const composer = new EffectComposer(R, rt);
  composer.addPass(new RenderPass(scene, cam));
  const ao = new AOPass(scene, cam, 4, 4);
  ao.updateGtaoMaterial({ radius: 15, distanceExponent: 1.1, thickness: 10, distanceFallOff: 1, scale: 1.7, samples: QN === 'high' ? 16 : 10, screenSpaceRadius: false });
  ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 7, rings: 2, samples: QN === 'high' ? 16 : 8 });
  ao.blendIntensity = 1; ao.enabled = Q.ao; composer.addPass(ao);
  const sel = new HaloPass(scene, cam, UI.sel); composer.addPass(sel);
  const overPass = new RenderPass(over, cam); overPass.clear = false; overPass.clearDepth = true; composer.addPass(overPass);
  composer.addPass(new OutputPass());

  // estat
  const U = { layers: { value: 0 } };
  const MATS = new Map(); const mat = c => { const k = safeColor(c).getHexString(); let m = MATS.get(k); if (!m) { m = plaMaterial('#' + k, U); MATS.set(k, m); } return m; };
  const HM = holeMaterials(), GM = ghostMaterial(), HE = lineMat('#4A5468', 1.3, { opacity: .7 }), HX = lineMat('#4A5468', 1, { opacity: .22, depthTest: false }), GE = lineMat(UI.ghost, 1.6, { opacity: .7 });
  // la còpia de la peça seleccionada: un reflex suau del color de selecció a les vores (el halo de fora el fa l'OutlinePass)
  const proxyMat = new THREE.ShaderMaterial({ uniforms: { uC: { value: new THREE.Color(UI.sel) } }, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform vec3 uC; varying vec3 vN; varying vec3 vV; void main(){ float f = 1. - abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(uC, .05 + .4 * pow(f, 2.5)); }' });
  const S = { cv: 1, cvSh: 0, resIntro: true, model: null, map: new Map(), order: [], sel: [], mode: O.mode === 'result' ? 'result' : 'edit', measure: false, first: true, resDirty: true, lastRes: 0, ghost: null, drag: null, hover: null, W: 1, H: 1, alive: true, dirty: true, lost: false, userCam: false };
  const csgR = new CSG({ seg: Q.seg, matFor: (q, neg, base) => mat(neg ? (base && base.c) || q.c : q.c) });
  const csgG = new CSG({ seg: Q.seg, matFor: () => GM });
  const resMesh = new THREE.Mesh(new THREE.BufferGeometry(), []); resMesh.castShadow = resMesh.receiveShadow = true; resG.add(resMesh);

  /* ---------- càmera: òrbita al voltant d'un punt, amb esmorteïment, inèrcia i límits ---------- */
  const cur = { az: VIEWS.iso[0] * D2R, el: VIEWS.iso[1] * D2R, F: 70, fov: FOV_ISO, t: new THREE.Vector3(0, 0, 10) };
  const goal = { az: cur.az, el: cur.el, F: cur.F, fov: cur.fov, t: cur.t.clone() };
  const LIM = { elMin: -12 * D2R, elMax: 90 * D2R, Fmin: 6, Fmax: PL * 1.05 };
  let vel = { az: 0, el: 0 }, fly = 0;
  const basis = (az, el) => { const ce = Math.cos(el), o = new THREE.Vector3(ce * Math.cos(az), ce * Math.sin(az), Math.sin(el)), r = new THREE.Vector3(-Math.sin(az), Math.cos(az), 0), u = new THREE.Vector3().crossVectors(o, r); return { o, r, u }; };
  const _mb = new THREE.Matrix4();
  function applyCam() {
    const { o, r, u } = basis(cur.az, cur.el), t = Math.tan(cur.fov * D2R / 2), D = cur.F / t;
    cam.position.copy(cur.t).addScaledVector(o, D); _mb.makeBasis(r, u, o); cam.quaternion.setFromRotationMatrix(_mb);
    cam.fov = cur.fov; cam.aspect = S.W / S.H; cam.near = Math.max(.5, D * .03); cam.far = D + PL * 6; cam.updateProjectionMatrix(); cam.updateMatrixWorld(true);
  }
  function camStep(dt) {
    if (vel.az || vel.el) { goal.az += vel.az * dt; goal.el = clamp(goal.el + vel.el * dt, LIM.elMin, LIM.elMax); const k = Math.exp(-dt * 4.2); vel.az *= k; vel.el *= k; if (Math.abs(vel.az) + Math.abs(vel.el) < .02) vel.az = vel.el = 0; }
    const k = 1 - Math.exp(-dt * (fly ? 6 : 18)); let moving = !!(vel.az || vel.el);
    for (const p of ['az', 'el', 'F', 'fov']) { const d = goal[p] - cur[p]; if (Math.abs(d) > (p === 'F' ? 1e-3 : 1e-4)) { cur[p] += d * k; moving = true; } else cur[p] = goal[p]; }
    if (cur.t.distanceToSquared(goal.t) > 1e-6) { cur.t.lerp(goal.t, k); moving = true; } else cur.t.copy(goal.t);
    if (!moving) fly = 0;
    applyCam(); return moving;
  }
  // mida F (mitja alçada visible al punt de mira) perquè una caixa hi càpiga sencera
  function solveF(box, az, el, fov, m = .8) {
    const { o, r, u } = basis(az, el), t = Math.tan(fov * D2R / 2), c = box.getCenter(new THREE.Vector3()), asp = S.W / S.H; let F = 0;
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
      const v = new THREE.Vector3(x - c.x, y - c.y, z - c.z); F = Math.max(F, Math.max(Math.abs(v.dot(u)), Math.abs(v.dot(r)) / asp) / m + v.dot(o) * t);
    }
    return clamp(F, LIM.Fmin, LIM.Fmax);
  }
  function sceneBox() {
    const b = new THREE.Box3();
    for (const e of S.map.values()) b.union(worldBox(e));
    if (S.ghost) b.union(S.ghost.box);
    if (b.isEmpty()) b.set(new THREE.Vector3(-45, -45, 0), new THREE.Vector3(45, 45, 20));
    const c = b.getCenter(new THREE.Vector3()), sz = b.getSize(new THREE.Vector3()), mn = 46;
    b.expandByVector(new THREE.Vector3(Math.max(0, mn - sz.x) / 2, Math.max(0, mn - sz.y) / 2, Math.max(0, 12 - sz.z) / 2));
    if (b.min.z < 0 && c.z > 0) b.min.z = Math.min(b.min.z, 0);
    return b;
  }
  function fit(instant) {
    const L = []; for (const e of S.map.values()) L.push({ g: e.mesh.geometry, M: e.M }); if (S.ghost) L.push({ g: S.ghost.g });
    const P = geoPoints(L), f = P.length ? fitPoints(P, goal.az, goal.el, goal.fov, S.W / S.H, .82) : null;
    if (f) { goal.t.copy(f.c); goal.F = clamp(Math.max(f.F, 26), LIM.Fmin, LIM.Fmax); }
    else { const b = sceneBox(); goal.t.copy(b.getCenter(new THREE.Vector3())); goal.F = solveF(b, goal.az, goal.el, goal.fov); }
    if (instant) { Object.assign(cur, { az: goal.az, el: goal.el, F: goal.F, fov: goal.fov }); cur.t.copy(goal.t); } else fly = 1;
    wake();
  }
  function view(name, instant) {
    const v = VIEWS[name] || VIEWS.iso; S.viewName = VIEWS[name] ? name : 'iso';
    let az = v[0] * D2R; while (az - cur.az > Math.PI) az -= 2 * Math.PI; while (az - cur.az < -Math.PI) az += 2 * Math.PI;
    goal.az = az; goal.el = clamp(v[1] * D2R, LIM.elMin, LIM.elMax); goal.fov = S.viewName === 'iso' ? FOV_ISO : FOV_AX; vel.az = vel.el = 0;
    fit(instant);
  }

  /* ---------- peces del mode edició ---------- */
  const _M = new THREE.Matrix4(), _T = new THREE.Matrix4();
  function entry(id) {
    const mesh = new THREE.Mesh(undefined, mat(DEF_C)); mesh.matrixAutoUpdate = false; mesh.castShadow = mesh.receiveShadow = true;
    const e = { id, mesh, M: new THREE.Matrix4(), key: '', back: null, edges: null, anim: null, proxy: null }; mesh.userData.e = e; partsG.add(mesh); return e;
  }
  function placeEntry(e) {
    S.cv++; let M = e.M;
    if (e.anim && e.anim.t < 1) { const t = Math.max(0, e.anim.t), dz = dropZ(t) * e.anim.h; _T.makeTranslation(0, 0, dz); M = _M.multiplyMatrices(_T, e.M); }
    const vis = !(e.anim && e.anim.t < 0); for (const o of [e.mesh, e.back, e.edges]) if (o) o.visible = vis;
    for (const o of [e.mesh, e.back, e.edges, e.proxy]) if (o) { o.matrix.copy(M); o.matrixWorld.copy(M); }
  }
  // caiguda amb rebot petit: baixa (accelerant) fins a t = .62, rebota un 9 % i torna a tocar
  const dropZ = t => (t < .62 ? 1 - (t / .62) ** 2 : (() => { const u = (t - .62) / .38; return .09 * 4 * u * (1 - u); })());
  function updateEntry(e, q, hole) {
    e.q = q; e.hole = hole; e.fixed = Array.isArray(q.m) && q.m.length === 16;
    const k = shapeKey(q, Q.seg) + (hole ? '|H' : '|S');
    if (k !== e.key) { e.key = k; e.mesh.geometry = hole ? localGeo(q, Q.seg) : dispGeo(q, Q.seg); if (e.edges) { e.edges.removeFromParent(); e.edges.geometry.dispose(); e.edges = null; } if (e.back) e.back.geometry = e.mesh.geometry; if (e.proxy) e.proxy.geometry = e.mesh.geometry; }
    partMatrix(q, e.M);
    if (hole) {
      e.mesh.material = HM.front; e.mesh.castShadow = false; e.mesh.renderOrder = 4;
      if (!e.back) { e.back = new THREE.Mesh(e.mesh.geometry, HM.back); e.back.matrixAutoUpdate = false; e.back.renderOrder = 3; partsG.add(e.back); }
      if (!e.edges) { const E = edgesFor(e.mesh.geometry, k); e.edges = segs(E, HE); e.edges.matrixAutoUpdate = false; e.edges.renderOrder = 5; partsG.add(e.edges);
        const xr = segs(E, HX); xr.matrixAutoUpdate = false; xr.renderOrder = 5; e.edges.add(xr); }
    } else {
      e.mesh.material = mat(q.c); e.mesh.castShadow = true; e.mesh.renderOrder = 0;
      if (e.back) { e.back.removeFromParent(); e.back = null; } if (e.edges) { e.edges.removeFromParent(); e.edges.geometry.dispose(); e.edges = null; }
    }
    placeEntry(e);
  }
  function dropEntry(e) { for (const o of [e.mesh, e.back, e.edges, e.proxy]) if (o) o.removeFromParent(); if (e.edges) e.edges.geometry.dispose(); }
  function set(model) {
    S.model = clone(model) || { parts: [] };
    const list = partsOf(S.model), seen = new Set(), animOK = !REDUCED && O.intro !== false;
    let i = 0;
    for (const { q, id, hole } of list) {
      if (seen.has(id)) continue; seen.add(id);
      let e = S.map.get(id);
      if (!e) { e = entry(id); S.map.set(id, e); if (animOK && !(S.drag && S.drag.id === id)) e.anim = { t: -(S.first ? Math.min(i * .07, .9) : 0), h: S.first ? 34 : 46 }; }
      updateEntry(e, q, hole); i++;
    }
    for (const [id, e] of S.map) if (!seen.has(id)) { dropEntry(e); S.map.delete(id); }
    S.order = list.map(x => x.id);
    if (S.sel.some(id => !S.map.has(id))) setSel(S.sel.filter(id => S.map.has(id)), false);
    if (S.first) { S.first = false; if (!S.userCam) view(S.viewName || O.view || 'iso', true); }
    S.resDirty = true; syncSel(); wake();
  }
  function setMode(m) { S.cv++; S.mode = m === 'result' ? 'result' : 'edit'; U.layers.value = S.mode === 'result' ? 1 : 0; S.resDirty = true; syncMode(); wake(); }
  function syncMode() { partsG.visible = S.mode === 'edit'; resG.visible = S.mode === 'result'; }
  function computeResult() {
    const r = csgR.run(S.model); resMesh.geometry.dispose(); resMesh.geometry = r.g; resMesh.material = r.mat; S.cv++;
    S.resDirty = false; S.lastRes = performance.now(); S.resMs = r.ms;
    // primera aparició en mode resultat: el sòlid sencer cau i rebota una mica
    if (S.resIntro && r.g.attributes.position && r.g.attributes.position.count) { S.resIntro = false; if (!REDUCED && O.intro !== false && S.mode === 'result') S.resAnim = { t: 0 }; }
  }

  /* ---------- fantasma (objectiu) ---------- */
  function target(model) {
    ghostG.children.slice().forEach(o => { o.removeFromParent(); if (o.geometry) o.geometry.dispose(); });
    S.ghost = null;
    if (model && treeOf(model)) {
      const r = csgG.run(model); if (r.g.attributes.position) {
        const m = new THREE.Mesh(r.g, GM); m.renderOrder = 2; m.userData.fx = 1; ghostG.add(m);
        const w = weldTJunctions(r.g), eg = new THREE.EdgesGeometry(w, 22), ed = segs(Array.from(eg.attributes.position.array), GE); w.dispose(); eg.dispose(); ed.renderOrder = 2; ghostG.add(ed);
        S.ghost = { box: r.g.boundingBox.clone(), g: r.g };
      }
    }
    if (!S.userCam && !S.first) fit(); wake();
  }

  /* ---------- selecció: halo (OutlinePass sobre una còpia invisible) + tiradors ---------- */
  function setSel(ids, user) {
    ids = [].concat(ids == null ? [] : ids).map(String).filter(id => S.map.has(id));
    const same = ids.length === S.sel.length && ids.every((x, i) => x === S.sel[i]);
    S.sel = ids; syncSel();
    if (user && !same && O.onPick) O.onPick(ids.length ? ids[0] : null);
    wake();
  }
  function syncSel() {
    for (const e of S.map.values()) { const on = S.sel.includes(e.id); if (on && !e.proxy) { e.proxy = new THREE.Mesh(e.mesh.geometry, proxyMat); e.proxy.matrixAutoUpdate = false; e.proxy.userData.noAO = 1; e.proxy.userData.fx = 1; e.proxy.castShadow = false; e.proxy.renderOrder = 6; e.proxy.layers.enable(HALO_LAYER); fxG.add(e.proxy); placeEntry(e); } else if (!on && e.proxy) { e.proxy.removeFromParent(); e.proxy = null; } }
    sel.active = S.sel.length > 0;
  }
  const selE = () => (S.sel.length === 1 ? S.map.get(S.sel[0]) : null);

  /* ---------- tiradors (gizmo) ---------- */
  const hTex = canvasTex(64, 64, (g, w) => { g.shadowColor = 'rgba(10,20,50,.45)'; g.shadowBlur = 6; g.shadowOffsetY = 2; g.fillStyle = '#FFFFFF'; g.strokeStyle = UI.ink; g.lineWidth = 6;
    const r = 10, x = 12, y = 10, s = 40; g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + s, y, x + s, y + s, r); g.arcTo(x + s, y + s, x, y + s, r); g.arcTo(x, y + s, x, y, r); g.arcTo(x, y, x + s, y, r); g.closePath(); g.fill(); g.shadowColor = 'transparent'; g.stroke(); });
  const hTexOn = canvasTex(64, 64, (g, w) => { g.shadowColor = 'rgba(10,20,50,.45)'; g.shadowBlur = 6; g.shadowOffsetY = 2; g.fillStyle = UI.sel; g.strokeStyle = UI.ink; g.lineWidth = 6;
    const r = 10, x = 12, y = 10, s = 40; g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + s, y, x + s, y + s, r); g.arcTo(x + s, y + s, x, y + s, r); g.arcTo(x, y + s, x, y, r); g.arcTo(x, y, x + s, y, r); g.closePath(); g.fill(); g.shadowColor = 'transparent'; g.stroke(); });
  const HDEF = [[1, 1, -1], [-1, 1, -1], [-1, -1, -1], [1, -1, -1], [1, 0, -1], [-1, 0, -1], [0, 1, -1], [0, -1, -1], [0, 0, 1]];
  const handles = HDEF.map((ax, i) => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: hTex, depthTest: false, depthWrite: false, sizeAttenuation: false, transparent: true })); sp.renderOrder = 20; sp.userData = { fx: 1, ax, px: i < 4 ? 15 : i === 8 ? 15 : 12 }; gizG.add(sp); return sp; });
  const arrow = new THREE.Group(); { const cone = new THREE.ConeGeometry(.42, .9, 28); cone.rotateX(Math.PI / 2); cone.translate(0, 0, .95); const sh = new THREE.CylinderGeometry(.09, .09, .55, 12); sh.rotateX(Math.PI / 2); sh.translate(0, 0, .25);
    const am = new THREE.MeshBasicMaterial({ color: UI.ink, depthTest: false, depthWrite: false, transparent: true }); arrow.add(new THREE.Mesh(cone, am), new THREE.Mesh(sh, am)); arrow.children.forEach(c => { c.renderOrder = 19; c.userData.fx = 1; }); arrow.userData = { mat: am }; gizG.add(arrow); }
  const ringPts = (() => { const a = []; for (let i = 0; i < 96; i++) { const t0 = i / 96 * Math.PI * 2, t1 = (i + 1) / 96 * Math.PI * 2; a.push(Math.cos(t0), Math.sin(t0), 0, Math.cos(t1), Math.sin(t1), 0); } return a; })();
  const rings = UI.ax.map((c, i) => { const r = segs(ringPts, lineMat(c, 2.2, { depthTest: false })); r.material.transparent = false; r.renderOrder = 18; r.matrixAutoUpdate = false; r.userData.i = i; gizG.add(r); return r; });
  const tickPts = (() => { const a = []; for (let i = 0; i < 24; i++) { const t = i / 24 * Math.PI * 2, k = i % 6 ? .94 : .9; a.push(Math.cos(t) * k, Math.sin(t) * k, 0, Math.cos(t), Math.sin(t), 0); } return a; })();
  const ticks = segs(tickPts, lineMat(UI.ink, 1.6, { depthTest: false })); ticks.material.transparent = false; ticks.matrixAutoUpdate = false; ticks.renderOrder = 18; ticks.visible = false; gizG.add(ticks);
  const sectorG = new THREE.BufferGeometry(); sectorG.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3 * 3 * 64), 3));
  const sector = new THREE.Mesh(sectorG, new THREE.MeshBasicMaterial({ color: UI.sel, transparent: true, opacity: .28, depthTest: false, depthWrite: false, side: THREE.DoubleSide })); sector.matrixAutoUpdate = false; sector.renderOrder = 17; sector.visible = false; sector.userData.fx = 1; gizG.add(sector);
  // petjada a la placa mentre s'arrossega
  const foot = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: UI.sel, transparent: true, opacity: .2, depthWrite: false })); foot.userData.fx = 1; foot.visible = false; foot.renderOrder = 1; fxG.add(foot);
  const footL = segs([-.5, -.5, 0, .5, -.5, 0, .5, -.5, 0, .5, .5, 0, .5, .5, 0, -.5, .5, 0, -.5, .5, 0, -.5, -.5, 0], lineMat(UI.sel, 2, { opacity: .95 })); footL.visible = false; fxG.add(footL);
  gizG.visible = false;
  const G = { rot: new THREE.Matrix4(), c: new THREE.Vector3(), a: 0, b: 0, h: 0, R: 10, n: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()], rq: [new THREE.Quaternion(), new THREE.Quaternion(), new THREE.Quaternion()] };
  const pxWorld = p => { const d = _v1.copy(p).applyMatrix4(cam.matrixWorldInverse).z; return Math.abs(d) * 2 * Math.tan(cam.fov * D2R / 2) / S.H; };
  const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q1 = new THREE.Quaternion(), Z = new THREE.Vector3(0, 0, 1);
  function gizFrame(e) {
    const q = e.q, [sx, sy, sz] = dims(q); G.a = sx / 2; G.b = sy / 2; G.h = sz / 2;
    G.rot.extractRotation(e.M); G.c.setFromMatrixPosition(e.M);
    const r = (Array.isArray(q.r) ? q.r : [0, 0, 0]).map(v => num(v, 0) * D2R);
    G.n[2].set(0, 0, 1); G.n[1].set(0, 1, 0).applyAxisAngle(Z, r[2]);
    G.n[0].set(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), r[1]).applyAxisAngle(Z, r[2]);
    for (let i = 0; i < 3; i++) G.rq[i].setFromUnitVectors(Z, G.n[i]);
  }
  const hWorld = (ax, out) => out.set(ax[0] * G.a, ax[1] * G.b, ax[2] * G.h).applyMatrix4(G.rot).add(G.c);
  function updateGizmo() {
    const e = selE(), on = !!(e && O.editable && !e.fixed && !e.anim);
    gizG.visible = on; if (!on) return;
    gizFrame(e);
    const t = Math.tan(cam.fov * D2R / 2), dr = S.drag;
    // si la peça es veu petita, només les cantonades i el de dalt (els tiradors del mig taparien la peça)
    // (i si és diminuta, cap tirador d'escala: cal acostar-s'hi; els anells i la fletxa sí que hi són)
    const c0 = toScreen(hWorld(HDEF[0], _v1)), c2 = toScreen(hWorld(HDEF[2], _v2)), c8 = toScreen(hWorld(HDEF[8], _v3)), sz = Math.max(Math.hypot(c0[0] - c2[0], c0[1] - c2[1]), Math.hypot(c0[0] - c8[0], c0[1] - c8[1]));
    const small = sz < 130, tiny = sz < (S.touch ? 80 : 56);
    handles.forEach((sp, i) => { hWorld(sp.userData.ax, sp.position); const k = sp.userData.px * 2 * t / S.H; sp.scale.set(k, k, 1); sp.material.map = S.hover === sp || (dr && dr.h === sp) ? hTexOn : hTex; sp.visible = (!dr || dr.h === sp) && !tiny && !(small && i >= 4 && i < 8); });
    // fletxa d'alçada: damunt la caixa del món
    const wb = worldBox(e), top = new THREE.Vector3(G.c.x, G.c.y, wb.max.z), pw = pxWorld(top);
    arrow.position.copy(top).add(new THREE.Vector3(0, 0, 24 * pw)); arrow.scale.setScalar(26 * pw); arrow.userData.mat.color.set(S.hover === arrow || (dr && dr.h === arrow) ? UI.sel : UI.ink);
    arrow.visible = !dr || dr.h === arrow;
    const rad = Math.hypot(G.a, G.b, G.h) + 16 * pxWorld(G.c); G.R = rad;
    rings.forEach((r, i) => { r.matrix.compose(G.c, G.rq[i], new THREE.Vector3(rad, rad, rad)); r.matrixWorld.copy(r.matrix); const hot = S.hover === r || (dr && dr.h === r); r.material.linewidth = hot ? 4.2 : 2.2; r.visible = !dr || dr.h === r; });
    if (dr && dr.k === 'rot') { ticks.visible = sector.visible = true; ticks.matrix.compose(G.c, G.rq[dr.i], new THREE.Vector3(rad, rad, rad)); ticks.matrixWorld.copy(ticks.matrix); sector.matrix.copy(ticks.matrix); sector.matrixWorld.copy(ticks.matrix); }
    else ticks.visible = sector.visible = false;
  }
  function worldBox(e) { const g = e.mesh.geometry; if (!g.boundingBox) g.computeBoundingBox(); return g.boundingBox.clone().applyMatrix4(e.M); }
  function toScreen(v) { _v3.copy(v).project(cam); return [(_v3.x + 1) / 2 * S.W, (1 - _v3.y) / 2 * S.H, _v3.z]; }
  // què hi ha sota el dit dins el gizmo (es mira en píxels de pantalla)
  function gizPick(x, y, touch) {
    if (!gizG.visible) return null; const tol = touch ? 22 : 12; let best = null, bd = 1e9;
    const take = (o, d) => { if (d < bd) { bd = d; best = o; } };
    for (const sp of handles) { if (!sp.visible) continue; const [sx, sy, sz] = toScreen(sp.position); if (sz > 1) continue; const d = Math.hypot(sx - x, sy - y) - sp.userData.px * .5; if (d < tol) take(sp, d); }
    { const a = toScreen(arrow.position), b = toScreen(_v1.copy(arrow.position).add(_v2.set(0, 0, arrow.scale.z * 1.4))); const d = segDist(x, y, a, b) - 5; if (d < tol) take(arrow, d); }
    for (const r of rings) { let m = 1e9, P0 = null; for (let i = 0; i <= 64; i++) { const t = i / 64 * Math.PI * 2, P1 = toScreen(_v1.set(Math.cos(t), Math.sin(t), 0).applyMatrix4(r.matrix)); if (P0) m = Math.min(m, segDist(x, y, P0, P1)); P0 = P1; }
      if (m < tol * .8) take(r, m + 2); }
    gizPick.d = bd; return best;
  }
  const segDist = (x, y, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1, t = clamp(((x - a[0]) * dx + (y - a[1]) * dy) / L, 0, 1); return Math.hypot(a[0] + dx * t - x, a[1] + dy * t - y); };
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function rayAt(x, y) { ndc.set(x / S.W * 2 - 1, -(y / S.H) * 2 + 1); ray.setFromCamera(ndc, cam); return ray.ray; }
  function planeHit(x, y, n, p) { const r = rayAt(x, y), den = r.direction.dot(n); if (Math.abs(den) < 1e-6) return null; const t = _v2.copy(p).sub(r.origin).dot(n) / den; return t > 0 ? r.origin.clone().addScaledVector(r.direction, t) : null; }
  function pickPart(x, y) {
    rayAt(x, y); const objs = []; for (const id of S.order) { const e = S.map.get(id); if (e) objs.push(e.mesh); }
    const hits = ray.intersectObjects(objs, false);
    const h = S.mode === 'result' ? hits.find(x => !x.object.userData.e.hole) || hits[0] : hits[0];   // en el resultat els forats no es veuen
    return h ? { e: h.object.userData.e, point: h.point } : null;
  }

  /* ---------- arrossegar: moure, alçada, girar, escalar ---------- */
  const snapV = v => { const s = num(O.snap, 1); return s > 0 ? Math.round(v / s) * s : v; };
  const r3 = v => Math.round(v * 1000) / 1000;
  function startDrag(kind, e, x, y, h, point) {
    const q = e.q, d = { k: kind, id: e.id, e, h, x0: x, y0: y, p0: (q.p || [0, 0, 0]).map(v => num(v, 0)), s0: dims(q).slice(), r0: (q.r || [0, 0, 0]).map(v => num(v, 0)), last: '' };
    gizFrame(e); d.rot = G.rot.clone(); d.rotT = G.rot.clone().transpose(); d.c = G.c.clone();
    const cd = cam.getWorldDirection(new THREE.Vector3()), hor = new THREE.Vector3(cd.x, cd.y, 0);
    if (kind === 'move') {
      d.vert = Math.abs(cd.z) < .26; d.n = d.vert ? hor.normalize() : Z.clone(); d.pp = point.clone(); d.hit0 = planeHit(x, y, d.n, d.pp) || point.clone();
      if (d.vert) { d.r = basis(cur.az, cur.el).r; }
    } else if (kind === 'lift') {
      d.top = hor.lengthSq() < 1e-4; d.n = d.top ? null : hor.normalize(); d.pp = d.c.clone(); d.hit0 = d.top ? null : planeHit(x, y, d.n, d.pp); d.pw = pxWorld(d.c);
    } else if (kind === 'rot') {
      d.i = h.userData.i; d.n = G.n[d.i].clone(); d.u = new THREE.Vector3(1, 0, 0).applyQuaternion(G.rq[d.i]); d.v = new THREE.Vector3(0, 1, 0).applyQuaternion(G.rq[d.i]);
      d.acc = 0; d.prev = ringAngle(d, x, y); d.a0 = d.prev ?? 0;
    } else if (kind === 'scale') {
      d.ax = h.userData.ax; const zl = new THREE.Vector3(0, 0, 1).applyMatrix4(d.rot);
      if (d.ax[2] === 1) { const n = cd.clone().addScaledVector(zl, -cd.dot(zl)); d.n = n.lengthSq() > 1e-4 ? n.normalize() : basis(cur.az, cur.el).u; d.pp = d.c.clone(); }
      else { d.n = zl; d.pp = hWorld(d.ax, new THREE.Vector3()); }
    }
    d.last = JSON.stringify(kind === 'rot' ? { r: d.r0 } : kind === 'scale' ? { s: d.s0, p: d.p0 } : { p: d.p0 });
    S.drag = d; vel.az = vel.el = 0; wake();
  }
  function ringAngle(d, x, y) {
    const r = rayAt(x, y); if (Math.abs(r.direction.dot(d.n)) < .14) return null;
    const p = planeHit(x, y, d.n, d.c); if (!p) return null; p.sub(d.c); return Math.atan2(p.dot(d.v), p.dot(d.u));
  }
  function dragMove(x, y, ev) {
    const d = S.drag, e = d.e; let out = null, label = '';
    if (d.k === 'move') {
      const hp = planeHit(x, y, d.n, d.pp); if (!hp) return; const dv = hp.sub(d.hit0);
      let dx, dy; if (d.vert) { const s = dv.dot(d.r); dx = d.r.x * s; dy = d.r.y * s; if (Math.abs(d.r.x) > .92) dy = 0; if (Math.abs(d.r.y) > .92) dx = 0; } else { dx = dv.x; dy = dv.y; }
      if (!ev.altKey) { dx = snapV(dx); dy = snapV(dy); }
      const lim = PL * .75, p = [r3(clamp(d.p0[0] + dx, -lim, lim)), r3(clamp(d.p0[1] + dy, -lim, lim)), d.p0[2]];
      out = { p }; label = `x ${fmt(p[0])}  ·  y ${fmt(p[1])}`;
    } else if (d.k === 'lift') {
      let dz; if (d.top) dz = -(y - d.y0) * d.pw; else { const hp = planeHit(x, y, d.n, d.pp); if (!hp || !d.hit0) return; dz = hp.z - d.hit0.z; }
      if (!ev.altKey) dz = snapV(dz);
      const p = [d.p0[0], d.p0[1], r3(clamp(d.p0[2] + dz, -PL * .5, PL * 1.5))]; out = { p };
      const wb = worldBox(e), bot = wb.min.z + (p[2] - num(e.q.p && e.q.p[2], 0)); label = `↑ ${fmt(bot)} mm`;
    } else if (d.k === 'rot') {
      const a = ringAngle(d, x, y);
      if (a == null) { const dd = ((x - (d.lx ?? d.x0)) - (y - (d.ly ?? d.y0))) * .012; d.acc += dd; }
      else if (d.prev != null) { let da = a - d.prev; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI; d.acc += da; }
      d.prev = a; d.lx = x; d.ly = y;
      const st = ev.shiftKey ? 1 : num(O.snapRot, 15), deg = Math.round(d.acc / D2R / st) * st;
      const r = d.r0.slice(); r[d.i] = norm180(d.r0[d.i] + deg); out = { r }; label = `${deg > 0 ? '+' : deg < 0 ? '−' : ''}${Math.abs(deg)}°`;
      // sector de l'angle girat (en el pla de l'anell, unitats del radi)
      const P = sector.geometry.attributes.position.array, n = 64, a0 = d.a0, a1 = d.a0 + deg * D2R; P.fill(0);
      for (let i = 0; i < n; i++) { const t0 = a0 + (a1 - a0) * i / n, t1 = a0 + (a1 - a0) * (i + 1) / n; P.set([0, 0, 0, Math.cos(t0) * .88, Math.sin(t0) * .88, 0, Math.cos(t1) * .88, Math.sin(t1) * .88, 0], i * 9); }
      sector.geometry.attributes.position.needsUpdate = true; sector.geometry.computeBoundingSphere(); sector.material.color.set(UI.ax[d.i]);
    } else if (d.k === 'scale') {
      const hp = planeHit(x, y, d.n, d.pp); if (!hp) return;
      const L = hp.sub(d.c).applyMatrix4(d.rotT), s = d.s0.slice(), c = [0, 0, 0], mn = Math.max(.5, num(O.snap, 1));
      for (let k = 0; k < 3; k++) { const sg = d.ax[k]; if (!sg) continue; const opp = -sg * d.s0[k] / 2, v = (k === 0 ? L.x : k === 1 ? L.y : L.z); let sz = (v - opp) * sg; sz = ev.altKey ? sz : snapV(sz); sz = Math.max(mn, sz); s[k] = r3(sz); c[k] = opp + sg * sz / 2; }
      if (ev.shiftKey && d.ax[0] && d.ax[1]) { const k0 = Math.max(s[0] / d.s0[0], s[1] / d.s0[1]); for (let k = 0; k < 2; k++) { s[k] = r3(Math.max(mn, snapV(d.s0[k] * k0))); c[k] = -d.ax[k] * d.s0[k] / 2 + d.ax[k] * s[k] / 2; } }
      const dc = new THREE.Vector3(...c).applyMatrix4(d.rot), p = [r3(d.p0[0] + dc.x), r3(d.p0[1] + dc.y), r3(d.p0[2] + dc.z)];
      out = { s, p }; label = d.ax[2] ? `${fmt(s[2])} mm` : d.ax[0] && d.ax[1] ? `${fmt(s[0])} × ${fmt(s[1])} mm` : `${fmt(d.ax[0] ? s[0] : s[1])} mm`;
    }
    if (!out) return;
    const sig = JSON.stringify(out);
    if (sig !== d.last) {
      d.last = sig; d.moved = true;
      Object.assign(e.q, out); updateEntry(e, e.q, e.hole); syncSel(); S.resDirty = true;   // vista prèvia immediata
      if (O.onMove) O.onMove(e.id, clone(out));
    }
    hudDrag(label, x, y); wake();
  }
  function endDrag() {
    const d = S.drag; S.drag = null; hudDrag(null); foot.visible = footL.visible = false;
    if (d && d.moved && O.onDone) O.onDone(d.id, d.k);
    S.resDirty = true; wake();
  }

  /* ---------- gestos: un dit gira, dos dits fan zoom i desplacen, tocar selecciona ---------- */
  const PT = new Map(); let GS = null, lastTap = 0;
  const loc = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  function onDown(e) {
    if (S.lost) return; try { cv.setPointerCapture(e.pointerId); } catch (_) { }
    const [x, y] = loc(e); PT.set(e.pointerId, { x, y }); vel.az = vel.el = 0; fly = 0; S.lastUser = performance.now();
    if (PT.size === 2) { if (GS && (GS.k === 'drag')) return; const [a, b] = [...PT.values()]; GS = { k: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, m0: [(a.x + b.x) / 2, (a.y + b.y) / 2], F0: goal.F, t0: goal.t.clone() }; return; }
    if (PT.size > 2) return;
    const touch = e.pointerType !== 'mouse'; if (S.touch !== touch) { S.touch = touch; wake(); }
    if (e.button === 2 || e.button === 1) { GS = { k: 'pan', x, y, lx: x, ly: y, moved: false }; return; }
    let h = O.editable ? gizPick(x, y, touch) : null;
    const hit = pickPart(x, y);
    if (!h && !hit && (e.shiftKey || e.ctrlKey || e.metaKey)) { GS = { k: 'pan', x, y, lx: x, ly: y, moved: false }; return; }
    // amb el dit, si toques el cos de la peça seleccionada i no just a sobre d'un tirador, mous la peça
    if (h && touch && hit && S.sel.includes(hit.e.id) && gizPick.d > 6) h = null;
    if (h) { GS = { k: 'giz', h, x0: x, y0: y, moved: false }; S.hover = h; wake(); return; }
    if (hit) GS = { k: 'part', e: hit.e, point: hit.point, x0: x, y0: y, lx: x, ly: y, moved: false, can: O.editable && !hit.e.fixed && (e.pointerType === 'mouse' || S.sel.includes(hit.e.id)) };
    else GS = { k: 'orbit', x0: x, y0: y, lx: x, ly: y, lt: performance.now(), moved: false };
  }
  function onMove(e) {
    const P = PT.get(e.pointerId), [x, y] = loc(e);
    if (!P) { if (e.pointerType === 'mouse') hover(x, y); return; }
    P.x = x; P.y = y;
    if (!GS) return;
    if (GS.k === 'pinch') {
      if (PT.size < 2) return; const [a, b] = [...PT.values()], d = Math.hypot(a.x - b.x, a.y - b.y) || 1, m = [(a.x + b.x) / 2, (a.y + b.y) / 2];
      goal.F = clamp(GS.F0 * GS.d0 / d, LIM.Fmin, LIM.Fmax);
      const { r, u } = basis(goal.az, goal.el), k = 2 * goal.F / S.H; goal.t.copy(GS.t0).addScaledVector(r, -(m[0] - GS.m0[0]) * k).addScaledVector(u, (m[1] - GS.m0[1]) * k); clampT(); S.userCam = true; wake(); return;
    }
    const thr = e.pointerType === 'mouse' ? 3 : 7;
    if (GS.k === 'giz') {
      if (!GS.moved && Math.hypot(x - GS.x0, y - GS.y0) < thr) return;
      if (!GS.moved) { GS.moved = true; const k = GS.h === arrow ? 'lift' : rings.includes(GS.h) ? 'rot' : 'scale'; startDrag(k, selE(), GS.x0, GS.y0, GS.h); GS.k = 'drag'; }
    }
    if (GS.k === 'part') {
      if (Math.hypot(x - GS.x0, y - GS.y0) < thr) return;
      if (GS.can) { if (!S.sel.includes(GS.e.id)) setSel(GS.e.id, true); startDrag('move', GS.e, GS.x0, GS.y0, null, GS.point); GS.k = 'drag'; }
      else GS = { k: 'orbit', x0: GS.x0, y0: GS.y0, lx: GS.lx, ly: GS.ly, lt: performance.now(), moved: true };
    }
    if (GS.k === 'drag') { if (S.drag) dragMove(x, y, e); return; }
    if (GS.k === 'orbit') {
      if (!GS.moved && Math.hypot(x - GS.x0, y - GS.y0) < thr) return; GS.moved = true; S.userCam = true;
      const dx = x - GS.lx, dy = y - GS.ly, now = performance.now(), dt = Math.max(1, now - GS.lt) / 1000, k = (e.pointerType === 'mouse' ? 5.2 : 5.4) / Math.max(320, Math.min(S.W, S.H) * 1.6);
      const daz = -dx * k * 1.1, del = dy * k; goal.az += daz; goal.el = clamp(goal.el + del, LIM.elMin, LIM.elMax);
      if (goal.fov !== FOV_ISO) { goal.fov = FOV_ISO; S.viewName = 'iso'; }
      GS.vaz = (GS.vaz || 0) * .5 + daz / dt * .5; GS.vel = (GS.vel || 0) * .5 + del / dt * .5;
      GS.lx = x; GS.ly = y; GS.lt = now; wake(); return;
    }
    if (GS.k === 'pan') { const dx = x - GS.lx, dy = y - GS.ly; GS.lx = x; GS.ly = y; GS.moved = GS.moved || Math.hypot(x - GS.x, y - GS.y) > thr; pan(dx, dy); }
  }
  function pan(dx, dy) { const { r, u } = basis(goal.az, goal.el), k = 2 * goal.F / S.H; goal.t.addScaledVector(r, -dx * k).addScaledVector(u, dy * k); clampT(); S.userCam = true; wake(); }
  function clampT() { const L = PL * .6; goal.t.x = clamp(goal.t.x, -L, L); goal.t.y = clamp(goal.t.y, -L, L); goal.t.z = clamp(goal.t.z, -20, PL * .6); }
  function onUp(e) {
    const had = PT.has(e.pointerId); PT.delete(e.pointerId); try { cv.releasePointerCapture(e.pointerId); } catch (_) { }
    if (!had || !GS) return;
    if (GS.k === 'pinch') { if (PT.size === 1) { const [p] = [...PT.values()]; GS = { k: 'orbit', x0: p.x, y0: p.y, lx: p.x, ly: p.y, lt: performance.now(), moved: true }; } else GS = null; return; }
    if (PT.size) return;
    const g = GS; GS = null;
    if (g.k === 'drag') { endDrag(); S.hover = null; return; }
    if (g.k === 'giz') { S.hover = null; wake(); return; }
    if (g.k === 'part' && !g.moved) { setSel(g.e.id, true); return; }
    if (g.k === 'orbit' && g.moved) { if (performance.now() - g.lt < 60) { vel.az = clamp(g.vaz || 0, -9, 9); vel.el = clamp(g.vel || 0, -5, 5); } return; }
    if ((g.k === 'orbit' || g.k === 'pan') && !g.moved) {
      const t = performance.now(); if (t - lastTap < 320) { fit(); lastTap = 0; } else lastTap = t;
      setSel([], true);
    }
  }
  function onWheel(e) {
    e.preventDefault(); const [x, y] = loc(e); let dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1); if (e.ctrlKey) dy *= 2.2;
    zoomAt(x, y, Math.exp(clamp(dy, -240, 240) * .0016)); S.userCam = true; fly = 0; S.lastUser = performance.now();
  }
  function zoomAt(x, y, f) {
    const F1 = clamp(goal.F * f, LIM.Fmin, LIM.Fmax), k = 1 - F1 / goal.F, { r, u } = basis(goal.az, goal.el), asp = S.W / S.H;
    const ox = (x / S.W * 2 - 1) * goal.F * asp, oy = (1 - y / S.H * 2) * goal.F;
    goal.t.addScaledVector(r, ox * k).addScaledVector(u, oy * k); goal.F = F1; clampT(); wake();
  }
  function hover(x, y) {
    if (S.drag || GS) return;
    const h = O.editable ? gizPick(x, y, false) : null; let cur2 = 'default';
    if (h) cur2 = h === arrow ? 'ns-resize' : rings.includes(h) ? 'grab' : 'nwse-resize';
    else { const p = pickPart(x, y); if (p) cur2 = O.editable && !p.e.fixed ? 'move' : 'pointer'; }
    if (S.hover !== h) { S.hover = h; wake(); }
    cv.style.cursor = cur2;
  }
  cv.addEventListener('pointerdown', onDown); cv.addEventListener('pointermove', onMove); cv.addEventListener('pointerup', onUp); cv.addEventListener('pointercancel', onUp);
  cv.addEventListener('pointerleave', () => { if (!GS && S.hover) { S.hover = null; wake(); } });
  cv.addEventListener('wheel', onWheel, { passive: false }); cv.addEventListener('contextmenu', e => e.preventDefault());
  cv.addEventListener('webglcontextlost', e => { e.preventDefault(); S.lost = true; });
  cv.addEventListener('webglcontextrestored', () => { S.lost = false; S.resDirty = true; S.cv++; wake(); });

  /* ---------- etiquetes HTML (cotes i valors mentre s'arrossega) ---------- */
  const tagCSS = { position: 'absolute', left: '0', top: '0', transform: 'translate(-50%,-50%)', padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,255,255,.95)', color: UI.ink,
    font: '800 12.5px/1.25 Lexend, system-ui, sans-serif', whiteSpace: 'nowrap', boxShadow: '0 2px 10px rgba(20,32,74,.2)', letterSpacing: '.01em', display: 'none', willChange: 'transform' };
  const mkTag = (o = {}) => { const d = document.createElement('div'); Object.assign(d.style, tagCSS, o); hud.appendChild(d); return d; };
  const dimTags = [UI.ax[0], UI.ax[1], UI.ax[2], '#E07A10'].map(c => mkTag({ border: `2px solid ${c}` }));
  const dragTag = mkTag({ background: UI.ink, color: '#fff', padding: '5px 11px', fontSize: '13px', transform: 'translate(14px,-130%)' });
  function hudDrag(text, x, y) { if (!text) { dragTag.style.display = 'none'; return; } dragTag.textContent = text; dragTag.style.display = 'block'; dragTag.style.left = x + 'px'; dragTag.style.top = y + 'px'; }
  const measLines = UI.ax.map(c => { const l = segs([0, 0, 0, 1, 0, 0], lineMat(c, 2.2, { depthTest: false })); l.material.transparent = false; l.renderOrder = 16; measG.add(l); return l; }), measLine = measLines[0];
  const liftLine = segs([0, 0, 0, 0, 0, 1], lineMat('#E07A10', 1.8, { opacity: .95, depthTest: false, dashed: true, dash: 1.6, gap: 1.2 })); liftLine.renderOrder = 16; measG.add(liftLine);
  let measKey = '';
  function updateMeasure() {
    const show = S.measure && S.map.size > 0; measG.visible = show;
    if (!show) { dimTags.forEach(t => (t.style.display = 'none')); return; }
    const e = selE(); let L = [], tags = [];
    // caixa a mesurar: la peça (en els seus eixos) o, si no n'hi ha cap de seleccionada, tot el model (eixos del món)
    let frame, a, b, h, vals;
    if (e && !e.fixed) { gizFrame(e); frame = G.rot.clone().setPosition(G.c); a = G.a; b = G.b; h = G.h; vals = dims(e.q); }
    else { const bx = new THREE.Box3(); for (const id of (S.sel.length ? S.sel : [...S.map.keys()])) { const en = S.map.get(id); if (en && !en.hole) bx.union(worldBox(en)); } if (bx.isEmpty()) { measG.visible = false; dimTags.forEach(t => (t.style.display = 'none')); return; }
      const c = bx.getCenter(new THREE.Vector3()), sz = bx.getSize(new THREE.Vector3()); frame = new THREE.Matrix4().makeTranslation(c.x, c.y, c.z); a = sz.x / 2; b = sz.y / 2; h = sz.z / 2; vals = [sz.x, sz.y, sz.z]; }
    const W = (x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(frame), off = 5 + 14 * pxWorld(W(0, 0, 0)), tk = 2.2 * pxWorld(W(0, 0, 0)) * 3;
    const LL = [[], [], []], seg = (k, p, q) => LL[k].push(p.x, p.y, p.z, q.x, q.y, q.z);
    // x: aresta de davant · y: aresta de la dreta · z: cantonada de davant a la dreta (amb línies de referència i topalls)
    const x0 = W(-a, -b - off, -h), x1 = W(a, -b - off, -h); seg(0, x0, x1); seg(0, W(-a, -b, -h), W(-a, -b - off - tk, -h)); seg(0, W(a, -b, -h), W(a, -b - off - tk, -h));
    const y0 = W(a + off, -b, -h), y1 = W(a + off, b, -h); seg(1, y0, y1); seg(1, W(a, -b, -h), W(a + off + tk, -b, -h)); seg(1, W(a, b, -h), W(a + off + tk, b, -h));
    const z0 = W(a + off * .7, -b - off * .7, -h), z1 = W(a + off * .7, -b - off * .7, h); seg(2, z0, z1); for (const zz of [-h, h]) seg(2, W(a + off * .7 - tk * .5, -b - off * .7 + tk * .5, zz), W(a + off * .7 + tk * .5, -b - off * .7 - tk * .5, zz));
    L = LL.flat();
    tags.push([x0.clone().add(x1).multiplyScalar(.5), `${fmt(vals[0])} mm`], [y0.clone().add(y1).multiplyScalar(.5), `${fmt(vals[1])} mm`], [z0.clone().add(z1).multiplyScalar(.5), `${fmt(vals[2])} mm`]);
    const k = JSON.stringify(L.map(v => Math.round(v * 100)));
    if (k !== measKey) { measKey = k; LL.forEach((P, i) => measLines[i].geometry.setPositions(P)); }
    // distància a la placa (si la peça està enlairada)
    const wb = e ? worldBox(e) : null;
    if (wb && wb.min.z > .05) { const c = new THREE.Vector3(wb.min.x, wb.min.y, 0); liftLine.visible = true; liftLine.geometry.setPositions([c.x, c.y, 0, c.x, c.y, wb.min.z]); liftLine.computeLineDistances(); tags.push([new THREE.Vector3(c.x, c.y, wb.min.z / 2), `↑ ${fmt(wb.min.z)} mm`]); }
    else liftLine.visible = false;
    // posicions a la pantalla; si dues etiquetes es trepitgen, se separen en vertical
    const pos = dimTags.map((t, i) => { const g = tags[i]; if (!g) return null; const [sx, sy, sz] = toScreen(g[0]); if (sz > 1) return null; t.textContent = g[1]; t.style.display = 'block'; const w = t.offsetWidth || 64, h = t.offsetHeight || 22; return { t, x: clamp(sx, w / 2 + 4, S.W - w / 2 - 4), y: sy, w, h }; });
    const P = pos.filter(Boolean).sort((a, b) => a.y - b.y);
    for (let it = 0; it < 4; it++) for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) { const A = P[i], B = P[j], ox = (A.w + B.w) / 2 + 4 - Math.abs(A.x - B.x), oy = (A.h + B.h) / 2 + 3 - Math.abs(A.y - B.y); if (ox > 0 && oy > 0) { A.y -= oy / 2; B.y += oy / 2; } }
    dimTags.forEach((t, i) => { const q = pos[i]; if (!q) { t.style.display = 'none'; return; } t.style.transform = `translate(${q.x}px,${clamp(q.y, 14, S.H - 14)}px) translate(-50%,-50%)`; });
  }

  /* ---------- mida, bucle de dibuix i qualitat adaptativa ---------- */
  function resize() {
    const r = el.getBoundingClientRect(), w = Math.max(2, Math.round(r.width)), h = Math.max(2, Math.round(r.height));
    if (w === S.W && h === S.H && R.getPixelRatio() === dprNow()) return;
    S.W = w; S.H = h; const dpr = dprNow(); R.setPixelRatio(dpr); R.setSize(w, h, false); composer.setPixelRatio(dpr); composer.setSize(w, h);
    for (const m of [HE, HX, GE, ...measLines.map(l => l.material), liftLine.material, footL.material, ticks.material, ...rings.map(x => x.material)]) m.resolution.set(w, h);
    if (!S.userCam && !S.drag && !S.first) fit(true);   // mentre l'alumne no hagi mogut la càmera, el model sempre hi cap
    applyCam(); wake();
  }
  const dprNow = () => { const d = Math.min(Q.dpr, window.devicePixelRatio || 1); ao.aoScale = d > 1.3 ? 1 / d : 1; return d; };
  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(() => resize()) : null; if (ro) ro.observe(el);
  function wake() { S.dirty = true; }
  let raf = 0, last = performance.now(), slow = 0, frames = 0, gone = 0;
  function frame() {
    if (!S.alive) return; raf = requestAnimationFrame(frame);
    if (!el.isConnected) { if (++gone > 90) dispose(); return; } gone = 0;
    const now = performance.now(), dt = Math.min(.05, (now - last) / 1000); last = now;
    if (S.lost || S.W < 4) return;
    // gir lent de vitrina (targetes i diapositives): s'atura mentre l'alumne toca la vista i torna al cap d'una estona
    if (O.spin && !REDUCED && !GS && !S.drag && now - (S.lastUser || 0) > 3500) { goal.az += dt * .32; }
    let active = camStep(dt) || (O.spin && !REDUCED);
    for (const e of S.map.values()) if (e.anim) { e.anim.t += dt / .52; if (e.anim.t >= 1) e.anim = null; placeEntry(e); active = true; }
    if (S.resAnim) { S.resAnim.t += dt / .6; if (S.resAnim.t >= 1) S.resAnim = null; resMesh.position.z = S.resAnim ? dropZ(S.resAnim.t) * 36 : 0; active = true; S.cv++; }
    if (S.mode === 'result' && S.resDirty && now - S.lastRes > (S.drag ? 45 : 0)) computeResult();
    if (!active && !S.dirty) return;
    S.dirty = false; render();
    // si el dibuix continu va lent, es baixa la qualitat (primer l'AO, després la resolució)
    if (active && O.quality === 'auto') { frames++; if (dt > .034) slow++; if (frames >= 45) { if (slow > 30) degrade(); frames = slow = 0; } }
  }
  function degrade() {
    if (QN === 'high') { QN = 'mid'; ao.enabled = false; }
    else if (QN === 'mid') { QN = 'low'; ao.enabled = false; Q = Object.assign({}, Q, { dpr: Math.min(Q.dpr, 1.25) }); resize(); }
  }
  function render() {
    updateGizmo(); updateMeasure();
    const dr = S.drag;
    if (dr && (dr.k === 'move' || dr.k === 'lift')) { const wb = worldBox(dr.e), c = wb.getCenter(new THREE.Vector3()), sz = wb.getSize(new THREE.Vector3()); for (const f of [foot, footL]) { f.visible = true; f.position.set(c.x, c.y, .08); f.scale.set(Math.max(1, sz.x), Math.max(1, sz.y), 1); } }
    if (S.cv !== S.cvSh) { S.cvSh = S.cv; R.shadowMap.needsUpdate = true; }
    composer.render();
  }

  /* ---------- API pública ---------- */
  function snapshot(w = 640, h = 400, o = {}) {
    const W0 = S.W, H0 = S.H, d0 = R.getPixelRatio(), gv = gizG.visible, mv = measG.visible, sl = sel.active, fv = fxG.visible;
    try {
      if (o.clean !== false) { gizG.visible = false; measG.visible = false; sel.active = false; fxG.visible = false; }
      for (const e of S.map.values()) if (e.anim) { e.anim = null; placeEntry(e); } S.resAnim = null; resMesh.position.z = 0;
      R.setPixelRatio(1); R.setSize(w, h, false); composer.setPixelRatio(1); composer.setSize(w, h); S.W = w; S.H = h; applyCam();
      if (S.mode === 'result' && S.resDirty) computeResult();
      updateMeasure(); if (o.clean !== false) measG.visible = false;
      R.shadowMap.needsUpdate = true; composer.render(); return cv.toDataURL(o.type || 'image/png', o.q ?? .92);
    } catch (e) { return ''; }
    finally { gizG.visible = gv; measG.visible = mv; sel.active = sl; fxG.visible = fv; R.setPixelRatio(d0); R.setSize(W0, H0, false); composer.setPixelRatio(d0); composer.setSize(W0, H0); S.W = W0; S.H = H0; applyCam(); wake(); }
  }
  function stl() { const g = csgR.solid(S.model); const b = stlOf(g.attributes.position ? g : new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([], 3))); g.dispose(); return b; }
  function dispose() {
    if (!S.alive) return; S.alive = false; cancelAnimationFrame(raf); if (ro) ro.disconnect();
    for (const e of S.map.values()) dropEntry(e); S.map.clear(); csgR.dispose(); csgG.dispose();
    const shared = new Set([...GEO.values(), ...DGEO.values()]);   // les formes es comparteixen entre vistes: no es toquen
    for (const sc of [scene, over]) sc.traverse(o => { if (o.geometry && !shared.has(o.geometry)) o.geometry.dispose(); if (o.material && o.material.isSpriteMaterial) o.material.dispose(); });
    plate.userData.dispose(); MATS.forEach(m => m.dispose()); [HM.front, HM.back, GM, HE, HX, GE, proxyMat].forEach(m => m.dispose()); hTex.dispose(); hTexOn.dispose(); bgT.dispose(); envRT.dispose();
    composer.dispose(); rt.dispose(); ao.dispose(); sel.dispose(); R.dispose(); try { R.forceContextLoss(); } catch (e) { }
    cv.remove(); hud.remove();
  }
  syncMode(); U.layers.value = S.mode === 'result' ? 1 : 0;
  resize(); view(O.view || 'iso', true); raf = requestAnimationFrame(frame);
  const api = {
    ok: true,
    set(m) { set(m); return api; },
    mode(m) { if (m == null) return S.mode; setMode(m); return api; },
    select(id) { if (id === undefined) return S.sel.length ? S.sel[0] : null; setSel(id, false); return api; },
    target(m) { target(m); return api; },
    view(n, instant) { view(n, instant); return api; },
    fit(instant) { fit(instant); return api; },
    measure(on) { S.measure = on === undefined ? !S.measure : !!on; wake(); return api; },
    snapshot, stl, dispose, resize() { S.W = 0; resize(); return api; },
    get quality() { return QN; }, get csgMs() { return S.resMs; }, _dbg: () => ({ ao, sel, composer, scene, R, key, cam, S, wake, scr: v => toScreen(new THREE.Vector3(...v)), hs: () => handles.map(h => toScreen(h.position)), arrow: () => toScreen(arrow.position), ring: (i, t) => toScreen(new THREE.Vector3(Math.cos(t), Math.sin(t), 0).applyMatrix4(rings[i].matrix)) }), get camera() { return { az: cur.az / D2R, el: cur.el / D2R, F: cur.F, fov: cur.fov, t: cur.t.toArray() }; }
  };
  if (O.model) set(O.model); if (O.target) target(O.target);
  return api;
}

/* =====================================================================================================================
   7. Miniatures: thumb(model, w, h, {bg: 'studio'|'none', view}) → dataURL. Un sol context WebGL per a totes.
   ===================================================================================================================== */
let TH = null; const THC = new Map(); let thQ = Promise.resolve();
function thumbRig() {
  const R = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true });
  R.outputColorSpace = THREE.SRGBColorSpace; R.toneMapping = THREE.NeutralToneMapping; R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFShadowMap; R.setPixelRatio(1);
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(FOV_ISO, 1, 1, 6000); cam.up.set(0, 0, 1);
  const pm = new THREE.PMREMGenerator(R), room = new RoomEnvironment(); scene.environment = pm.fromScene(room, .035).texture; room.dispose(); pm.dispose();
  scene.environmentRotation.set(Math.PI / 2, 0, 0); scene.environmentIntensity = .95;
  const key = new THREE.DirectionalLight('#FFF5E8', 2.3); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -.0002; key.shadow.normalBias = .3; key.shadow.radius = 3; key.shadow.intensity = .8;
  const rim = new THREE.DirectionalLight('#DCE8FF', .75), hemi = new THREE.HemisphereLight('#F4F8FF', '#9A8E80', .35); hemi.position.set(0, 0, 1);
  scene.add(key, key.target, rim, hemi);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({ color: '#1B2440', opacity: .2, transparent: true, depthWrite: false })); shadow.receiveShadow = true; scene.add(shadow);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: radialTex(), color: '#0E1630', transparent: true, opacity: .22, depthWrite: false })); scene.add(blob);
  const mesh = new THREE.Mesh(new THREE.BufferGeometry(), []); mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh);
  const MATS = new Map(), U = { layers: { value: 0 } }, mat = c => { const k = safeColor(c).getHexString(); if (!MATS.has(k)) MATS.set(k, plaMaterial('#' + k, U)); return MATS.get(k); };
  const csg = new CSG({ seg: 64, matFor: (q, neg, base) => mat(neg ? (base && base.c) || q.c : q.c) });
  const HF = R.extensions.has('EXT_color_buffer_float') || R.extensions.has('EXT_color_buffer_half_float');
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: HF ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: R.capabilities.maxSamples >= 4 ? 4 : 0 }), comp = new EffectComposer(R, rt);
  comp.addPass(new RenderPass(scene, cam)); const ao = new AOPass(scene, cam, 4, 4); ao.enabled = HF;
  ao.updateGtaoMaterial({ radius: 15, distanceExponent: 1.1, thickness: 10, scale: 1.7, samples: 16 }); ao.updatePdMaterial({ radius: 7, rings: 2, samples: 16 }); ao.blendIntensity = 1; comp.addPass(ao); comp.addPass(new OutputPass());
  const bgs = {};
  return { R, scene, cam, key, rim, shadow, blob, mesh, csg, comp, bgs };
}
export function thumb(model, w = 320, h = 240, o = {}) {
  const k = JSON.stringify([model, w, h, o]); if (THC.has(k)) return Promise.resolve(THC.get(k));
  const job = thQ.then(() => {
    if (!ok()) return '';
    try {
      if (!TH) TH = thumbRig();
      const T = TH, r = T.csg.run(model); T.csg.sweep(1);
      T.mesh.geometry.dispose(); T.mesh.geometry = r.g; T.mesh.material = r.mat;
      const box = r.g.boundingBox && !r.g.boundingBox.isEmpty() ? r.g.boundingBox.clone() : new THREE.Box3(new THREE.Vector3(-10, -10, 0), new THREE.Vector3(10, 10, 10));
      const c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3()), rad = Math.max(sz.x, sz.y, sz.z, 4);
      const zf = box.min.z; T.shadow.position.set(c.x, c.y, zf - .01); T.shadow.scale.set(rad * 6, rad * 6, 1); T.blob.position.set(c.x, c.y, zf - .005); T.blob.scale.set(Math.max(sz.x, sz.y) * 1.6 + 6, Math.max(sz.x, sz.y) * 1.6 + 6, 1);
      T.key.position.set(c.x - rad * 1.2, c.y - rad * 2.4, c.z + rad * 4.2); T.key.target.position.copy(c); T.rim.position.set(c.x + rad * 2, c.y + rad * 3, c.z + rad * 2);
      const sc = T.key.shadow.camera; Object.assign(sc, { left: -rad * 2, right: rad * 2, top: rad * 2, bottom: -rad * 2, near: rad * .5, far: rad * 12 }); sc.updateProjectionMatrix();
      T.R.setSize(w, h, false); T.comp.setSize(w, h);
      const v = VIEWS[o.view] || VIEWS.iso, az = v[0] * D2R, el = v[1] * D2R, fov = o.view && o.view !== 'iso' ? FOV_AX : FOV_ISO;
      const ce = Math.cos(el), dir = new THREE.Vector3(ce * Math.cos(az), ce * Math.sin(az), Math.sin(el)), rr = new THREE.Vector3(-Math.sin(az), Math.cos(az), 0), u = new THREE.Vector3().crossVectors(dir, rr), t = Math.tan(fov * D2R / 2);
      const P = r.g.attributes.position ? geoPoints([{ g: r.g }], 30000) : [], f = P.length ? fitPoints(P, az, el, fov, w / h, o.margin || .86) : { c, F: rad };
      const F = Math.max(f.F, 2), D = F / t; T.cam.position.copy(f.c).addScaledVector(dir, D); T.cam.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(rr, u, dir)); T.cam.fov = fov; T.cam.aspect = w / h; T.cam.near = Math.max(.5, D * .03); T.cam.far = D * 4 + 500; T.cam.updateProjectionMatrix(); T.cam.updateMatrixWorld(true);
      const bgk = o.bg === 'none' ? 'none' : o.bg === 'workshop' ? 'workshop' : 'studio';
      if (bgk === 'none') { T.scene.background = null; T.R.setClearColor(0x000000, 0); } else T.scene.background = T.bgs[bgk] || (T.bgs[bgk] = bgTex(bgk));
      T.comp.render();
      const url = T.R.domElement.toDataURL(bgk === 'none' ? 'image/png' : 'image/webp', .9);
      THC.set(k, url); if (THC.size > 80) THC.delete(THC.keys().next().value);
      return url;
    } catch (e) { if (typeof console !== 'undefined') console.warn('m3 thumb', e); return ''; }
  });
  thQ = job.catch(() => { }); return job;
}
// per a proves (Node): les peces internes de la reparació de malles
export const _mesh = { weldTJunctions, openCount, edgeCounts };
