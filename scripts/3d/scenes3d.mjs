/* ===== Numi Tech · il·lustracions 3D estàtiques (es generen una vegada amb scripts/3d/render-scenes.mjs) =====
   · island(): l'illa de cada unitat de l'inici, amb el camí de les sessions; també retorna on queda cada parada a la
     imatge (en %) perquè l'app hi posi els botons.
   · scene(): escenes de les històries (l'illa, el poble, el taller, el moll…) amb en Bit.
   · cover(): la portada de cada curs.
   Fa servir les peces d'en Bit de bit3d.mjs perquè tot tingui el mateix estil. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mats, geos, texs } from './bit3d.mjs';

const rnd = s => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
const mesh = (g, m, p, s, r) => { const x = new THREE.Mesh(g, m); x.castShadow = true; x.receiveShadow = true; if (p) x.position.set(...p); if (s != null) Array.isArray(s) ? x.scale.set(...s) : x.scale.setScalar(s); if (r) x.rotation.set(...r); return x; };
const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .8, ...o });

function setup(W, H, bg) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: !bg, preserveDrawingBuffer: true });
  r.setSize(W, H); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.12;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const sc = new THREE.Scene();
  if (bg) { const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256); bg.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, 4, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; sc.background = t; }
  sc.add(new THREE.HemisphereLight('#D6F0FF', '#6B8F4E', 1.15));
  const sun = new THREE.DirectionalLight('#FFF1D6', 2.4); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0004; sun.shadow.normalBias = .02;
  Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: .5, far: 60 }); sun.position.set(7, 14, 9); sc.add(sun, sun.target);
  return { r, sc, sun };
}
function sea(sc, w, d, y = -1.05) {
  const g = new THREE.PlaneGeometry(w, d, 80, 80); g.rotateX(-Math.PI / 2);
  const pa = g.attributes.position, cols = new Float32Array(pa.count * 3), near = new THREE.Color('#8EE6F5'), far = new THREE.Color('#2F97D8'), c = new THREE.Color();
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), z = pa.getZ(i); pa.setY(i, Math.sin(x * 1.6) * .05 + Math.cos(z * 1.3) * .05); const dd = Math.hypot(x / 1.2, z) - 3.2; c.copy(near).lerp(far, Math.min(1, Math.max(0, dd / 4))); cols.set([c.r, c.g, c.b], i * 3); }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3)); g.computeVertexNormals();
  const m = mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .2, metalness: .05, flatShading: true }), [0, y, 0]); m.castShadow = false; sc.add(m);
}
// una illa arrodonida de forma orgànica, amb capes de terra
function islandBody(sc, rx, rz, seed) {
  const R = rnd(seed), sh = new THREE.Shape(), n = 40;
  for (let i = 0; i <= n; i++) { const a = i / n * Math.PI * 2, k = 1 + (R() - .5) * .08; const x = Math.cos(a) * rx * k, z = Math.sin(a) * rz * k; i ? sh.lineTo(x, z) : sh.moveTo(x, z); }
  const M = mats();
  [[.5, M.grassSide, 0], [.45, M.dirt, -.45], [.35, M.dirt2, -.85], [.3, M.dirt3, -1.15]].forEach(([h, m, y], i) => {
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: true, bevelThickness: .08, bevelSize: .12 - i * .02, bevelSegments: 3 }); g.rotateX(Math.PI / 2);
    const s = 1 - i * .04; const o = mesh(g, m, [0, y, 0], [s, 1, s]); sc.add(o);
  });
  const beach = new THREE.ExtrudeGeometry(sh, { depth: .5, bevelEnabled: true, bevelThickness: .1, bevelSize: .2, bevelSegments: 4 }); beach.rotateX(Math.PI / 2);
  sc.add(mesh(beach, M.sand, [0, -.62, 0], [1.1, 1, 1.1]));
  const foam = new THREE.ShapeGeometry(sh, 40); foam.rotateX(Math.PI / 2);
  const fm = new THREE.Mesh(foam, new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .45, side: THREE.DoubleSide })); fm.position.y = -.98; fm.scale.set(1.2, 1, 1.2); sc.add(fm);
  const top = new THREE.ExtrudeGeometry(sh, { depth: .05, bevelEnabled: true, bevelThickness: .03, bevelSize: .06, bevelSegments: 3 }); top.rotateX(Math.PI / 2);
  sc.add(mesh(top, std('#8FD36C'), [0, .02, 0]));
  return sh;
}
function tree(sc, x, z, s, R) {
  const M = mats(), G = geos(), t = new THREE.Group(); t.position.set(x, 0, z); t.scale.setScalar(s); t.rotation.y = R() * 6;
  t.add(mesh(G.cyl, M.trunk, [0, .2, 0], [.07, .4, .07]));
  [[0, .6, 0, .26, M.leaf2], [-.13, .46, .06, .2, M.leaf1], [.14, .48, -.04, .21, M.leaf1], [.02, .43, .14, .18, M.leaf3]].forEach(([a, b, c, r, m]) => t.add(mesh(G.ico, m, [a, b, c], r)));
  sc.add(t);
}
function rock(sc, x, z, s, R) { const M = mats(), G = geos(); sc.add(mesh(G.dode, M.rock, [x, .14 * s, z], [.3 * s, .22 * s, .26 * s], [R(), R() * 3, 0])); }
function house(sc, x, z, rot, roofCol) {
  const M = mats(), G = geos(), h = new THREE.Group(); h.position.set(x, 0, z); h.rotation.y = rot;
  h.add(mesh(new RoundedBoxGeometry(.6, .42, .52, 2, .03), M.wall, [0, .21, 0]));
  h.add(mesh(G.cone4, roofCol ? std(roofCol, { flatShading: true }) : M.roof, [0, .58, 0], [.52, .34, .46], [0, Math.PI / 4, 0]));
  h.add(mesh(G.box, M.door, [0, .13, .262], [.14, .26, .02]));
  [-.19, .19].forEach(xx => h.add(mesh(G.box, M.winOn, [xx, .25, .262], [.12, .12, .02])));
  sc.add(h);
}
function lamp(sc, x, z, col) { const g = geos(); sc.add(mesh(g.cyl, std('#44507A'), [x, .35, z], [.03, .7, .03])); const b = mesh(g.sph, new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 1.2 }), [x, .74, z], .08); sc.add(b); }
function crystal(sc, x, z, col, s = 1) { const m = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: .35, roughness: .2, metalness: .3, flatShading: true }); sc.add(mesh(new THREE.OctahedronGeometry(.16 * s, 0), m, [x, .2 * s, z], [1, 1.6, 1])); }
function flag(sc, x, z, col, h = 1.3) {
  const g = geos(); sc.add(mesh(g.cyl, std('#5B4636'), [x, h / 2, z], [.03, h, .03]));
  const cl = new THREE.PlaneGeometry(.55, .34, 8, 3); cl.translate(.275, 0, 0); const p = cl.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 6) * .04);
  cl.computeVertexNormals(); sc.add(mesh(cl, new THREE.MeshStandardMaterial({ color: col, side: THREE.DoubleSide, roughness: .7 }), [x + .02, h - .2, z]));
}
// camí: una cinta de sorra que segueix la corba de les parades
function road(sc, curve) {
  const N = 200, pts = curve.getSpacedPoints(N), pos = [], idx = [];
  for (let i = 0; i <= N; i++) { const p = pts[i], t = curve.getTangentAt(i / N), nx = -t.z, nz = t.x, l = Math.hypot(nx, nz) || 1, w = .32; pos.push(p.x + nx / l * w, .135, p.z + nz / l * w, p.x - nx / l * w, .135, p.z - nz / l * w); if (i) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, std('#F2D9A0', { side: THREE.DoubleSide })); m.receiveShadow = true; sc.add(m);
  // vora més fosca
  const g2 = g.clone(); const p2 = g2.attributes.position; for (let i = 0; i < p2.count; i++) p2.setY(i, .125);
  const m2 = new THREE.Mesh(g2, std('#D9B670', { side: THREE.DoubleSide })); m2.scale.set(1.035, 1, 1.035); m2.receiveShadow = true; sc.add(m2);
}
function palm(sc, x, z, R) {
  const t = new THREE.Group(); t.position.set(x, -.12, z); t.rotation.y = R() * 6;
  for (let i = 0; i < 6; i++) t.add(mesh(geos().cyl, mats().trunk, [i * .03, .1 + i * .16, 0], [.05 - i * .004, .17, .05 - i * .004], [0, 0, -.1]));
  for (let i = 0; i < 6; i++) { const f = mesh(new THREE.SphereGeometry(1, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), std('#3E9E3A', { flatShading: true, side: THREE.DoubleSide }), [.18, 1.05, 0], [.5, .08, .14]); const g = new THREE.Group(); g.position.set(.18, 1.02, 0); f.position.set(.42, -.08, 0); f.rotation.z = -.35; g.add(f); g.rotation.y = i / 6 * Math.PI * 2; t.add(g); }
  sc.add(t);
}
// temes de les unitats (accessoris que surten a l'illa)
const THEME = {
  algo: (sc, R, spot) => { for (let i = 0; i < 4; i++) { const [x, z] = spot(); rock(sc, x, z, .8 + R() * .4, R); } },
  loop: (sc, R, spot) => { for (let i = 0; i < 6; i++) { const [x, z] = spot(); crystal(sc, x, z, ['#8B5CF6', '#3D8BFF', '#3CC47C'][i % 3], .9); } },
  llum: (sc, R, spot) => { for (let i = 0; i < 5; i++) { const [x, z] = spot(); lamp(sc, x, z, ['#FFC531', '#EF5A5A', '#3D8BFF', '#3CC47C', '#E5489A'][i]); } },
  sensor: (sc, R, spot) => { for (let i = 0; i < 6; i++) { const [x, z] = spot(); sc.add(mesh(new RoundedBoxGeometry(.5, .35, .18, 2, .04), std('#9AA3B5'), [x, .18, z], 1, [0, R() * 3, 0])); } },
  ciutat: (sc, R, spot) => { for (let i = 0; i < 5; i++) { const [x, z] = spot(); house(sc, x, z, R() * 6, ['#E2574C', '#3D8BFF', '#F08A24', '#8B5CF6', '#1FA463'][i]); } },
  fruita: (sc, R, spot) => { const G = geos(); for (let i = 0; i < 7; i++) { const [x, z] = spot(); tree(sc, x, z, .75, R); sc.add(mesh(G.sph, std('#FF6B5B', { roughness: .4 }), [x + .12, .55, z + .12], .06)); } },
  cova: (sc, R, spot) => { for (let i = 0; i < 6; i++) { const [x, z] = spot(); rock(sc, x, z, 1.3 + R() * .6, R); } },
  trofeu: (sc, R, spot) => { const [x, z] = spot(); const g = geos(), gold = mats().gold; sc.add(mesh(g.cyl, std('#5B4636'), [x, .12, z], [.25, .24, .25]), mesh(new THREE.CylinderGeometry(.2, .08, .35, 16), gold, [x, .45, z]), mesh(g.sph, gold, [x, .66, z], .12)); for (let i = 0; i < 4; i++) { const [a, b] = spot(); flag(sc, a, b, ['#EF5A5A', '#3D8BFF', '#FFC531', '#3CC47C'][i], 1); } }
};
export const THEMES = Object.keys(THEME);

export function island({ n = 4, seed = 1, theme = 'algo', color = '#2F5BEA', W = 900, H = 1125 } = {}) {
  const { r, sc } = setup(W, H, [[0, '#7FD3F5'], [1, '#4CB2EA']]);
  const R = rnd(seed), rx = 3.0, rz = 3.9;
  sea(sc, 40, 40); islandBody(sc, rx, rz, seed);
  // parades: de dalt (lluny) a baix (a prop), en zig-zag
  const P = []; for (let i = 0; i < n; i++) { const t = n === 1 ? .5 : i / (n - 1); P.push(new THREE.Vector3((i % 2 ? 1 : -1) * (1.25 + R() * .25), 0, -rz * .72 + t * rz * 1.44)); }
  const curve = new THREE.CatmullRomCurve3([P[0].clone().add(new THREE.Vector3(0, 0, -.6)), ...P, P[n - 1].clone().add(new THREE.Vector3(0, 0, .6))], false, 'catmullrom', .5);
  road(sc, curve);
  P.forEach(p => { sc.add(mesh(new THREE.CylinderGeometry(.5, .56, .22, 40), std('#E9E2CF'), [p.x, .14, p.z])); sc.add(mesh(new THREE.CylinderGeometry(.44, .44, .04, 40), std('#FFFFFF', { roughness: .5 }), [p.x, .26, p.z])); sc.add(mesh(new THREE.TorusGeometry(.47, .045, 8, 48), std(color, { emissive: color, emissiveIntensity: .3 }), [p.x, .25, p.z], 1, [Math.PI / 2, 0, 0])); });
  // llocs lliures per a les coses (lluny del camí i de les parades)
  const pts = curve.getSpacedPoints(80);
  const spot = () => { for (let k = 0; k < 60; k++) { const a = R() * Math.PI * 2, rr = Math.sqrt(R()) * .86, x = Math.cos(a) * rx * rr, z = Math.sin(a) * rz * rr; if (pts.every(p => Math.hypot(p.x - x, p.z - z) > .75) && P.every(p => Math.hypot(p.x - x, p.z - z) > 1)) return [x, z]; } return [rx * .8, 0]; };
  for (let i = 0; i < 13; i++) { const [x, z] = spot(); tree(sc, x, z, .75 + R() * .45, R); }
  const FL = ['#FF8FB1', '#FFFFFF', '#FFD54A', '#B79CFF'];
  for (let i = 0; i < 10; i++) { const [x, z] = spot(); for (let k = 0; k < 5; k++) sc.add(mesh(geos().sph, std(FL[(i + k) % 4], { roughness: .5 }), [x + (R() - .5) * .5, .1, z + (R() - .5) * .5], .055)); }
  for (let i = 0; i < 8; i++) { const [x, z] = spot(); sc.add(mesh(geos().ico, std('#5FA841', { flatShading: true }), [x, .08, z], [.18, .12, .18])); }
  // palmeres a la platja
  for (let i = 0, k = 0; i < 4 && k < 40; k++) { const a = R() * Math.PI * 2, x = Math.cos(a) * rx * 1.02, z = Math.sin(a) * rz * 1.02; if (z > rz * .2 || P.some(p => Math.hypot(p.x - x, p.z - z) < 1.6)) continue; palm(sc, x, z, R); i++; }
  (THEME[theme] || THEME.algo)(sc, R, spot);
  const [fx, fz] = [0, -rz * .95]; flag(sc, fx, fz, color, 1.5);
  // càmera de 3/4 des de davant
  const cam = new THREE.PerspectiveCamera(30, W / H, .1, 100); cam.position.set(0, 11.2, 11.6); cam.lookAt(0, -.1, .45);
  r.render(sc, cam);
  const nodes = P.map(p => { const v = new THREE.Vector3(p.x, .26, p.z).project(cam); return [+((v.x + 1) / 2 * 100).toFixed(2), +((1 - v.y) / 2 * 100).toFixed(2)]; });
  const url = r.domElement.toDataURL('image/webp', .86); r.dispose(); return { url, nodes };
}

// escenes de les històries (16:9)
export function scene(kind = 'illa') {
  const W = 1600, H = 900, { r, sc } = setup(W, H, kind === 'taller' ? [[0, '#FFE2BD'], [1, '#FFC98F']] : [[0, '#8FD7FF'], [.7, '#D7F2FF'], [1, '#EAF8FF']]);
  const R = rnd(kind.length * 97 + 3);
  if (kind === 'taller') {
    sc.add(mesh(new THREE.BoxGeometry(30, .2, 12), std('#C98A4B'), [0, -.1, 0]));
    sc.add(mesh(new THREE.BoxGeometry(30, 10, .2), std('#FFF1DC'), [0, 5, -4]));
    sc.add(mesh(new RoundedBoxGeometry(4.2, 2.6, .12, 2, .06), std('#FFFFFF'), [-3.2, 3.2, -3.85]));
    [['#3D7BF4', 1.4], ['#EF5A5A', 2.4], ['#3D7BF4', 1.8], ['#F08A24', 1.2]].forEach(([c, w], i) => sc.add(mesh(new RoundedBoxGeometry(w, .32, .06, 2, .05), std(c), [-4.7 + w / 2, 4 - i * .5, -3.75])));
    sc.add(mesh(new RoundedBoxGeometry(3.4, .14, 1.6, 2, .05), std('#A86A33'), [2.6, 1.05, -1.4]), mesh(geos().box, std('#7A4A1E'), [1.2, .5, -1.4], [.12, 1, .12]), mesh(geos().box, std('#7A4A1E'), [4, .5, -1.4], [.12, 1, .12]));
    sc.add(mesh(new THREE.TorusGeometry(.32, .06, 10, 30), std('#20306A'), [3, 1.5, -1.3], 1, [-.4, 0, 0]));
  } else {
    sea(sc, 60, 40, -.9);
    islandBody(sc, 6.5, 3.2, 11);
    for (let i = 0; i < 6; i++) tree(sc, -5.5 + R() * 2 + (i > 2 ? 9 : 0), -1.6 + R() * 2.2, 1 + R() * .4, R);
    if (kind === 'poble') { house(sc, -2.6, -1.4, .3, '#E2574C'); house(sc, -1.2, -1.9, -.2, '#3D8BFF'); house(sc, 2.4, -1.6, .1, '#F08A24'); }
    if (kind === 'moll') { sc.add(mesh(new THREE.BoxGeometry(2.4, .12, .9), std('#B57536'), [3.6, .05, .9])); [[3.0, .3], [3.5, .25], [4.1, .3]].forEach(([x, s]) => sc.add(mesh(geos().box, new THREE.MeshStandardMaterial({ map: texs().crate }), [x, .15 + s / 2, .9], s))); }
    if (kind === 'lab') { [-2.6, -1.2, 2.2].forEach((x, i) => lamp(sc, x, -1.8, ['#3D8BFF', '#3CC47C', '#FFC531'][i])); }
    if (kind === 'illa') { crystal(sc, 2.6, -1.8, '#8B5CF6'); crystal(sc, 3.1, -1.4, '#3D8BFF', .8); flag(sc, 3.8, -1.9, '#EF5A5A'); }
  }
  const cam = new THREE.PerspectiveCamera(30, W / H, .1, 100); cam.position.set(0, 2.6, 9); cam.lookAt(0, 1.1, -1);
  r.render(sc, cam); const url = r.domElement.toDataURL('image/webp', .86); r.dispose(); return url;
}
