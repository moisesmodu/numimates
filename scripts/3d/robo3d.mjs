/* ===== Numi Tech · Robòtica: l'arena i el Maqueen Lite V5 en 3D (three.js) =====
   Font de tech-robo3d.js (es genera amb `node scripts/3d/build-robo.mjs`; three.js va empaquetat a dins).
   · Escena: una aula (entorn PMREM procedural: finestrals, fluorescents, pissarra, armaris) i una taula de fusta envernissada
     amb el tapet de vinil (quadrícula, regle en cm, zones i la cinta aïllant negra, que brilla), el marc de contraplacat,
     blocs de pi, llaunes, pilotes, caixes de cartró, el focus de llum, el dohyo de sumo i, fora del tapet, el portàtil,
     el rotlle de cinta i el regle.
   · El Maqueen Lite V5 (makeBot): placa negra amb serigrafia i pistes, rodes grogues amb pneumàtic de tacs, motors N20,
     portapiles, bola de suport, mòdul d'ultrasons (els «ulls»), brunzidor, la micro:bit V2 amb la matriu 5 × 5 que mostra
     el que fa el programa (drawMicrobit; els números de més d'una xifra s'hi desplacen, com a la de veritat), els llums
     RGB del cotxe, els 4 RGB de sota i els 3 sensors de línia, que s'encenen (a sobre i a terra) quan veuen negre.
   · Es veu què passa: el con dels ultrasons amb els polsos i el punt on rebota, els raigs dels sensors de línia, el rastre,
     la pols en xocar, l'espurna dels punts de control, les notes del brunzidor, el confeti de la missió complerta i, a
     l'aspirador, la pols del terra que es neteja.
   · Càmeres: «General» (3/4 en perspectiva: busca l'angle que enquadra tota la missió i acosta més el robot; entra amb un
     escombrat des del robot), «Seguint» (darrere del robot, suau) i 'top' (planta). S'arrossega per girar-la.
   · Qualitat adaptativa: alta (GTAO + bloom), mitjana (bloom), baixa (mòbils i GPU per programari: sense postprocés,
     ombres de 1024). Si el ritme baixa, es rebaixa sola. window.__r3q = 'high' | 'mid' | 'low' (o ?r3q=…) la força.
   · L'API la fan servir tech-robo.js i present.js: create(contenidor, W, S, opcions) → { sync(S), reset(W, S), setMode(m),
     dispose(), snapshot() }; i diorama.mjs i maqueen-portrait.mjs: makeBot(), drawMicrobit().
   · Les unitats són centímetres: el robot fa 8,1 × 8,5 cm, com el de veritat. La simulació és la de tech-robo.js. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const COL = { red: '#FF3B30', green: '#2BD45A', yellow: '#FFD60A', blue: '#2F7BFF', purple: '#C43BFF', cyan: '#2EE6F0', white: '#FFFFFF', orange: '#FF9F0A' };
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const AUTO = typeof navigator !== 'undefined' && !!navigator.webdriver;   // captures automàtiques: sense escombrat d'entrada
let INTRO_DONE = false;
const PI = Math.PI, TAU = PI * 2;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const damp = (k, dt) => 1 - Math.exp(-k * dt);
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const angD = (a, b) => { let d = (b - a) % TAU; if (d > PI) d -= TAU; if (d < -PI) d += TAU; return d; };
function rng(seed) { let s = (seed >>> 0) || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } };

/* ---------- utilitats: textures dibuixades, materials, soroll ---------- */
function cnv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function toTex(c, o = {}) { const t = new THREE.CanvasTexture(c); if (!o.data) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (o.wrap) t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
function ctex(w, h, draw, o) { const c = cnv(w, h); draw(c.getContext('2d'), w, h); return toTex(c, o); }
const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .7, metalness: 0, ...o });
const glowMat = (map, c = '#fff', o = 0) => new THREE.MeshBasicMaterial({ map, color: c, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
// soroll de valor que es repeteix (px, py cel·les per tessel·la): per a textures sense costures
function noise2(seed, px = 256, py = 256) {
  const R = rng(seed), P = new Uint8Array(512), G = new Float32Array(256); for (let i = 0; i < 256; i++) { P[i] = i; G[i] = R(); }
  for (let i = 255; i > 0; i--) { const j = Math.floor(R() * (i + 1)); const t = P[i]; P[i] = P[j]; P[j] = t; } for (let i = 0; i < 256; i++) P[i + 256] = P[i];
  const v = (x, y) => G[P[P[((x % px) + px) % px & 255] + (((y % py) + py) % py & 255)]];
  return (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), w = yf * yf * (3 - 2 * yf);
    const a = v(xi, yi), b = v(xi + 1, yi), c = v(xi, yi + 1), d = v(xi + 1, yi + 1); return a + (b - a) * u + (c - a) * w + (a - b - c + d) * u * w; };
}
const hex3 = h => { const c = new THREE.Color(h); return [c.r * 255, c.g * 255, c.b * 255]; };
// fusta: veta al llarg de x, anells i nusos suaus; torna { map, bump } (el relleu, al canal R)
function woodCanvas({ w, h, seed = 3, base, dark, rings = 9, warp = 1, contrast = .55, fine = .16 }) {
  const c = cnv(w, h), g = c.getContext('2d'), img = g.createImageData(w, h), d = img.data, b = cnv(w, h), bg = b.getContext('2d'), bimg = bg.createImageData(w, h), bd = bimg.data;
  const n1 = noise2(seed, 3, 6), n2 = noise2(seed + 1, 12, 48), n3 = noise2(seed + 2, 96, 384), B = hex3(base), D = hex3(dark);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const u = x / w, v = y / h, wv = n1(u * 3, v * 6), t = v * rings + wv * warp + n2(u * 12, v * 48) * .22;
    const band = Math.pow(.5 + .5 * Math.sin(t * TAU), 2.4), fn = n3(u * 96, v * 384), k = clamp(band * contrast + (fn - .5) * fine + (wv - .5) * .3, 0, 1), i = (y * w + x) * 4;
    d[i] = B[0] + (D[0] - B[0]) * k; d[i + 1] = B[1] + (D[1] - B[1]) * k; d[i + 2] = B[2] + (D[2] - B[2]) * k; d[i + 3] = 255;
    const hh = 255 * (1 - k * .8 - fn * .2); bd[i] = bd[i + 1] = bd[i + 2] = hh; bd[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); bg.putImageData(bimg, 0, 0); return { c, b };
}
// UV en cm (projecció de caixa): la textura no s'estira, sigui quina sigui la mida
function boxUV(geo, su, sv = su, alongZ = false) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let a, b; if (ay >= ax && ay >= az) { a = alongZ ? z : x; b = alongZ ? x : z; } else if (ax >= az) { a = z; b = y; } else { a = x; b = y; }
    uv.setXY(i, a / su, b / sv); }
  uv.needsUpdate = true; return geo;
}
// ajunta peces pel material (menys crides de dibuix)
function prep(g) { if (g.index) g = g.toNonIndexed(); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); g.clearGroups(); return g; }
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _p = new THREE.Vector3();
class Kit {
  constructor() { this.map = new Map(); }
  add(geo, mat, p = [0, 0, 0], r = [0, 0, 0], s = 1) { _m4.compose(_p.set(...p), _q.setFromEuler(_e.set(...r)), Array.isArray(s) ? _s.set(...s) : _s.setScalar(s)); const g = prep(geo.clone()).applyMatrix4(_m4); geo.dispose(); if (!this.map.has(mat)) this.map.set(mat, []); this.map.get(mat).push(g); return this; }
  build(parent, o = {}) { const out = []; for (const [mat, list] of this.map) { const geo = list.length > 1 ? mergeGeometries(list) : list[0]; if (list.length > 1) list.forEach(g => g.dispose()); const m = new THREE.Mesh(geo, mat); m.castShadow = o.cast !== false; m.receiveShadow = o.recv !== false; parent.add(m); out.push(m); } this.map.clear(); return out; }
}
const mesh = (g, m, o = {}) => { const x = new THREE.Mesh(g, m); x.castShadow = o.cast !== false; x.receiveShadow = o.recv !== false; if (o.p) x.position.set(...o.p); if (o.r) x.rotation.set(...o.r); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); return x; };
const decal = (w, h, mat, y = .03) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.rotation.x = -PI / 2; m.position.y = y; m.renderOrder = 2; m.userData.noAO = true; return m; };

/* ---------- textures comunes (es fan una sola vegada) ---------- */
let _T = null;
function TX() {
  if (_T) return _T;
  const T = _T = {};
  T.glow = ctex(128, 128, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.25, 'rgba(255,255,255,.55)'); r.addColorStop(.6, 'rgba(255,255,255,.12)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  T.blob = ctex(128, 128, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(0,0,0,.9)'); r.addColorStop(.45, 'rgba(0,0,0,.55)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  T.spark = ctex(64, 64, (g, w) => { const c = w / 2; const r = g.createRadialGradient(c, c, 0, c, c, c); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.2, 'rgba(255,255,255,.5)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); g.fillStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.moveTo(c, 2); g.lineTo(c + 3, c - 3); g.lineTo(w - 2, c); g.lineTo(c + 3, c + 3); g.lineTo(c, w - 2); g.lineTo(c - 3, c + 3); g.lineTo(2, c); g.lineTo(c - 3, c - 3); g.closePath(); g.fill(); });
  T.puff = ctex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,.85)'); r.addColorStop(.5, 'rgba(255,255,255,.35)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  T.ring = ctex(128, 128, (g, w) => { const c = w / 2, r = g.createRadialGradient(c, c, c * .6, c, c, c); r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(.7, 'rgba(255,255,255,1)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  T.note = ctex(64, 64, (g, w) => { g.fillStyle = '#fff'; g.shadowColor = 'rgba(255,255,255,.9)'; g.shadowBlur = 6; g.font = '900 50px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('♪', w / 2, w / 2 + 2); });
  T.pow = ctex(128, 128, (g, w) => { const c = w / 2; g.beginPath(); for (let i = 0; i < 18; i++) { const a = i / 18 * TAU - PI / 2, r = i % 2 ? c * .46 : c * (.86 + (i % 4 === 0 ? .1 : 0)); i ? g.lineTo(c + Math.cos(a) * r, c + Math.sin(a) * r) : g.moveTo(c + Math.cos(a) * r, c + Math.sin(a) * r); } g.closePath();
    g.fillStyle = '#FFD23A'; g.fill(); g.lineWidth = 7; g.strokeStyle = '#FF7A1A'; g.lineJoin = 'round'; g.stroke(); g.fillStyle = '#FFF6C8'; g.beginPath(); g.arc(c, c, c * .26, 0, 7); g.fill(); });
  T.dash = ctex(64, 4, (g, w, h) => { g.fillStyle = '#fff'; g.fillRect(0, 0, w * .58, h); }, { wrap: true });
  // fusta de la taula (faig envernissat), blocs de pi i contraplacat de bedoll
  const tw = woodCanvas({ w: 1024, h: 512, seed: 11, base: '#D8BD9C', dark: '#B08F6C', rings: 23, warp: .9, contrast: .3, fine: .14 });
  T.table = toTex(tw.c, { wrap: true }); T.tableB = toTex(tw.b, { wrap: true, data: true });
  const pw = woodCanvas({ w: 256, h: 256, seed: 5, base: '#EBD3AC', dark: '#C9A06C', rings: 7, warp: 1.3, contrast: .5, fine: .16 });
  T.pine = toTex(pw.c, { wrap: true }); T.pineB = toTex(pw.b, { wrap: true, data: true });
  const bw = woodCanvas({ w: 256, h: 128, seed: 8, base: '#EBD3A8', dark: '#C9A576', rings: 4, warp: .8, contrast: .35, fine: .1 });
  T.ply = toTex(bw.c, { wrap: true });
  T.plyEdge = ctex(8, 128, (g, w, h) => { const n = 9; for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? '#D8B985' : '#EDD6AC'; g.fillRect(0, i * h / n, w, h / n); g.fillStyle = 'rgba(120,85,40,.5)'; g.fillRect(0, i * h / n, w, 1.2); } }, { wrap: true });
  // cartró, malla dels ultrasons, pols de l'aspirador
  T.card = ctex(256, 256, (g, w, h) => { g.fillStyle = '#C99560'; g.fillRect(0, 0, w, h); const R = rng(4); for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${R() < .5 ? '90,60,30' : '240,210,160'},${.05 + R() * .08})`; g.fillRect(R() * w, R() * h, 1 + R() * 3, 1); }
    g.fillStyle = 'rgba(220,190,130,.75)'; g.fillRect(w * .4, 0, w * .2, h); g.fillStyle = 'rgba(255,255,255,.15)'; g.fillRect(w * .4, 0, 3, h); g.strokeStyle = 'rgba(60,40,20,.55)'; g.lineWidth = 3; g.beginPath(); g.moveTo(30, 70); g.lineTo(30, 30); g.lineTo(20, 40); g.moveTo(30, 30); g.lineTo(40, 40); g.moveTo(52, 70); g.lineTo(52, 30); g.lineTo(42, 40); g.moveTo(52, 30); g.lineTo(62, 40); g.stroke(); });
  T.mesh = ctex(128, 128, (g, w) => { g.fillStyle = '#23262C'; g.fillRect(0, 0, w, w); g.fillStyle = 'rgba(160,168,180,.55)'; for (let y = 0; y < w; y += 4) for (let x = (y / 4 % 2) * 2; x < w; x += 4) g.fillRect(x, y, 2, 2); const r = g.createRadialGradient(w / 2, w / 2, w * .1, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(0,0,0,0)'); r.addColorStop(1, 'rgba(0,0,0,.6)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  T.dust = ctex(256, 256, (g, w) => { const R = rng(9); g.fillStyle = 'rgb(120,112,100)'; g.fillRect(0, 0, w, w); for (let i = 0; i < 2600; i++) { const v = 90 + R() * 90; g.fillStyle = `rgba(${v},${v - 6},${v - 14},${.3 + R() * .5})`; g.beginPath(); g.arc(R() * w, R() * w, .5 + R() * 1.6, 0, 7); g.fill(); } }, { wrap: true });
  // entorn fals (barat) per als metalls quan no hi ha PMREM, i el fons de degradat
  T.fakeEnv = ctex(256, 128, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#FFFFFF'); gr.addColorStop(.35, '#E9E6DF'); gr.addColorStop(.5, '#CFC8BC'); gr.addColorStop(.62, '#9C968D'); gr.addColorStop(1, '#6E6A64'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = '#FFFFFF'; for (let i = 0; i < 6; i++) g.fillRect(i * w / 6 + 6, 8, w / 6 - 14, 6); g.fillStyle = '#F4F8FF'; for (let i = 0; i < 3; i++) g.fillRect(w * .62 + i * 22, 34, 16, 26); });
  T.fakeEnv.mapping = THREE.EquirectangularReflectionMapping;
  T.bg = ctex(4, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#DCDAD4'); gr.addColorStop(.55, '#BDB7AD'); gr.addColorStop(1, '#8F8A82'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
  return T;
}

const TXset = () => TX()._set || (TX()._set = new Set(Object.values(TX())));

/* ---------- l'aula: entorn procedural per als reflexos i el fons (en metres; la càmera és a la taula) ---------- */
function classroomEnv(r) {
  const sc = new THREE.Scene(), geo = new THREE.BoxGeometry(1, 1, 1), mats = [];
  const lam = c => { const m = new THREE.MeshLambertMaterial({ color: c }); mats.push(m); return m; };
  const emi = (c, k) => { const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k) }); mats.push(m); return m; };
  const box = (m, x, y, z, sx, sy, sz) => { const b = new THREE.Mesh(geo, m); b.position.set(x, y, z); b.scale.set(sx, sy, sz); sc.add(b); return b; };
  const F = -.85, C = 2.5;
  const room = box(lam('#E4E4E0'), 0, (F + C) / 2, 0, 11, C - F, 9); room.material.side = THREE.BackSide;
  box(lam('#9B968F'), 0, F + .005, 0, 10.9, .01, 8.9);                       // terra de linòleum
  box(lam('#F6F4EF'), 0, C - .01, 0, 10.9, .01, 8.9);                        // sostre
  for (const x of [-3.2, 0, 3.2]) for (const z of [-2.6, 0, 2.6]) box(emi('#FFFFFF', 8), x, C - .03, z, 1.25, .02, .32);   // fluorescents
  for (const z of [-3.1, -.7, 1.7]) { box(emi('#E2EDFF', 6.5), -5.47, 1.05, z, .02, 1.7, 2.0);   // finestrals (a l'esquerra) amb els travessers
    box(lam('#F3EFE7'), -5.43, 1.05, z, .05, 1.7, .07); box(lam('#F3EFE7'), -5.43, 1.32, z, .05, .07, 2.0); box(lam('#E5E0D6'), -5.35, .17, z, .2, .06, 2.1); }
  box(emi('#FFF1DC', 1.8), -4.1, F + .012, -.7, 2.2, .01, 6);                // la clapa de sol a terra
  box(lam('#2F4C40'), .4, 1.1, -4.47, 3.9, 1.3, .04); box(lam('#B48C5C'), .4, .42, -4.42, 4.0, .06, .12);   // pissarra
  box(lam('#C6965E'), 5.47, 1.25, -1.2, .04, 1.1, 2.3);                     // suro amb fulls de colors
  const R = rng(21), pc = ['#FF6B6B', '#FFC531', '#3D8BFF', '#3CC47C', '#FFFFFF', '#C084FC'];
  for (let i = 0; i < 9; i++) box(lam(pc[i % pc.length]), 5.44, .9 + R() * .7, -2.1 + R() * 1.9, .02, .26, .2);
  for (let i = 0; i < 5; i++) box(lam(pc[(i + 2) % pc.length]), -1.6 + i * .9, 1.95, -4.46, .5, .36, .02);   // cartells sobre la pissarra
  for (let i = 0; i < 4; i++) { box(lam(['#4A7BE0', '#F2B33D', '#E25B5B', '#45B97A'][i]), -2.4 + i * 1.6, F + .45, 4.25, 1.5, .9, .5); box(lam('#F2EEE4'), -2.4 + i * 1.6, F + .92, 4.25, 1.52, .04, .52); }   // armaris
  for (const [x, z] of [[-2.6, -1.8], [2.6, -1.8], [-2.6, 1.8], [2.6, 1.8], [0, -3.2], [3.6, 0]]) { box(lam('#D9BC90'), x, -.05, z, 1.3, .04, .7); box(lam('#8D96A8'), x, F + .4, z, 1.2, .8, .05); box(lam(pc[Math.floor(R() * 4)]), x, F + .45, z + .55, .42, .05, .42); }
  sc.add(new THREE.HemisphereLight('#FFFFFF', '#9A948C', 1.6));
  const pl = new THREE.PointLight('#FFFFFF', 30, 0, 1.6); pl.position.set(0, 2.0, 0); sc.add(pl);
  const pm = new THREE.PMREMGenerator(r), rt = pm.fromScene(sc, .03, .1, 50); pm.dispose(); geo.dispose(); mats.forEach(m => m.dispose());
  return rt;
}

/* ---------- El Maqueen Lite V5 ---------- */
const BOT = { PT: 2.5, WR: 2.1, WX: 3.5, MB: [0, 3.06, 1.4], US: -3.55 };
function pcbShape() {
  const s = new THREE.Shape(), w = 4.05, f = 4.25, rf = 1.6, rb = .8, nx = 2.85, nz = 2.45;
  s.moveTo(-w + rf, -f); s.lineTo(w - rf, -f); s.quadraticCurveTo(w, -f, w, -f + rf); s.lineTo(w, -nz); s.lineTo(nx + .15, -nz); s.quadraticCurveTo(nx, -nz, nx, -nz + .15); s.lineTo(nx, nz - .15); s.quadraticCurveTo(nx, nz, nx + .15, nz); s.lineTo(w, nz);
  s.lineTo(w, f - rb); s.quadraticCurveTo(w, f, w - rb, f); s.lineTo(-w + rb, f); s.quadraticCurveTo(-w, f, -w, f - rb); s.lineTo(-w, nz); s.lineTo(-nx - .15, nz); s.quadraticCurveTo(-nx, nz, -nx, nz - .15); s.lineTo(-nx, -nz + .15); s.quadraticCurveTo(-nx, -nz, -nx - .15, -nz); s.lineTo(-w, -nz);
  s.lineTo(-w, -f + rf); s.quadraticCurveTo(-w, -f, -w + rf, -f); return s;
}
function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
// la placa vista des de dalt: (0,0) al centre del robot, el davant a dalt; en cm
function pcbTexture(other) {
  const k = 120, c = cnv(Math.round(8.1 * k), Math.round(8.5 * k)), g = c.getContext('2d'), R = rng(other ? 77 : 7);
  g.setTransform(k, 0, 0, k, 4.05 * k, 4.25 * k);
  g.fillStyle = other ? '#3B1626' : '#0D1A15'; g.fillRect(-4.1, -4.3, 8.2, 8.6);
  const gr = g.createLinearGradient(-4, -4, 4, 4); gr.addColorStop(0, 'rgba(255,255,255,.035)'); gr.addColorStop(1, 'rgba(0,0,0,.08)'); g.fillStyle = gr; g.fillRect(-4.1, -4.3, 8.2, 8.6);
  // pistes de coure sota la màscara
  g.strokeStyle = other ? 'rgba(255,140,170,.10)' : 'rgba(80,200,140,.11)'; g.lineWidth = .055; g.lineCap = 'round'; g.lineJoin = 'round';
  for (let i = 0; i < 46; i++) { let x = -2.7 + R() * 5.4, y = -4 + R() * 8; g.beginPath(); g.moveTo(x, y); for (let j = 0; j < 4; j++) { const d = R() < .5, l = .3 + R() * 1.4, s = R() < .5 ? -1 : 1; if (d) { x += l * s; } else y += l * s; if (R() < .4) { x += .25 * s; y += .25; } g.lineTo(clamp(x, -2.8, 2.8), clamp(y, -4.1, 4.1)); } g.stroke(); }
  g.fillStyle = 'rgba(220,180,90,.8)'; for (let i = 0; i < 34; i++) { const x = -2.7 + R() * 5.4, y = -3.9 + R() * 7.8; g.beginPath(); g.arc(x, y, .055, 0, 7); g.fill(); }
  // serigrafia (el text es dibuixa a escala de píxel: les mides de lletra de menys d'1 px no surten bé)
  const ink = '#E9EEF0'; g.fillStyle = ink; g.strokeStyle = ink; g.lineWidth = .035;
  const txt = (t, x, y, sz, wt = 700, it = '') => { g.save(); g.setTransform(1, 0, 0, 1, (x + 4.05) * k, (y + 4.25) * k); g.font = `${it} ${wt} ${Math.round(sz * k)}px "Lexend","Arial Rounded MT Bold",system-ui,sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = ink; g.fillText(t, 0, 0); g.restore(); };
  txt('maqueen', 0, -1.56, .6, 800, 'italic'); txt(other ? 'LEADER' : 'LITE · V5', 0, -1.0, .24, 700);
  [['L', -1.25], ['M', 0], ['R', 1.25]].forEach(([t, x]) => { txt(t, x, -2.6, .24); g.strokeRect(x - .24, -3.1, .48, .3); });
  txt('P1', 3.45, 2.55, .24); txt('P2', -3.45, 2.55, .24); txt('ON', -2.2, -1.02, .2); txt('M2', 2.4, -2.2, .22); txt('M1', -2.4, -2.2, .22); txt('RGB', -2.45, -3.45, .18); txt('RGB', 2.45, -3.45, .18); txt('+', 2.85, -2.05, .3);
  g.strokeRect(-1.25, -3.78, 2.5, .44); g.beginPath(); g.arc(2.15, -1.52, .62, 0, 7); g.stroke(); g.strokeRect(-2.62, -1.78, .84, .52);
  g.strokeRect(-2.85, -.75, 5.7, 3.9); g.beginPath(); g.moveTo(-2.4, 3.6); g.lineTo(2.4, 3.6); g.stroke();
  // forats de subjecció i coixinets daurats
  g.fillStyle = '#D9AE55'; for (const [x, y] of [[-3.45, -2.75], [3.45, -2.75], [-3.4, 3.75], [3.4, 3.75]]) { g.beginPath(); g.arc(x, y, .26, 0, 7); g.fill(); g.fillStyle = '#060807'; g.beginPath(); g.arc(x, y, .14, 0, 7); g.fill(); g.fillStyle = '#D9AE55'; }
  for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { g.fillRect(s * 3.45 - .1, 2.85 + i * .27, .2, .2); }
  return toTex(c);
}
function usTexture() {
  const k = 110, c = cnv(Math.round(4.5 * k), Math.round(2.0 * k)), g = c.getContext('2d');
  g.setTransform(k, 0, 0, k, 0, 0); g.fillStyle = '#1C58C6'; g.fillRect(0, 0, 4.5, 2); const gr = g.createLinearGradient(0, 0, 0, 2); gr.addColorStop(0, 'rgba(255,255,255,.08)'); gr.addColorStop(1, 'rgba(0,0,20,.15)'); g.fillStyle = gr; g.fillRect(0, 0, 4.5, 2);
  g.strokeStyle = 'rgba(120,180,255,.25)'; g.lineWidth = .05; g.beginPath(); g.moveTo(.4, 1.8); g.lineTo(1.6, 1.8); g.lineTo(2, 1.4); g.moveTo(4.1, 1.75); g.lineTo(3, 1.75); g.stroke();
  g.fillStyle = '#EEF3FF'; g.font = '800 .3px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('T', .28, .35); g.fillText('R', 4.22, .35); g.font = '700 .17px system-ui'; g.fillText('VCC  TRIG  ECHO  GND', 2.25, 1.82); g.fillText('ULTRASONIC', 2.25, .2);
  g.fillStyle = '#D9AE55'; for (const [x, y] of [[.2, 1.8], [4.3, 1.8]]) { g.beginPath(); g.arc(x, y, .13, 0, 7); g.fill(); }
  return toTex(c);
}
// la micro:bit V2, vista de dalt (5,2 × 4,2 cm): el logo al davant, el connector darrere
function mbBase(w, h) {
  const c = cnv(w, h), g = c.getContext('2d'), k = w / 5.2; g.setTransform(k, 0, 0, k, 0, 0);
  g.fillStyle = '#131417'; g.fillRect(0, 0, 5.2, 4.2); const gr = g.createLinearGradient(0, 0, 5.2, 4.2); gr.addColorStop(0, 'rgba(255,255,255,.05)'); gr.addColorStop(1, 'rgba(0,0,0,.1)'); g.fillStyle = gr; g.fillRect(0, 0, 5.2, 4.2);
  g.strokeStyle = 'rgba(255,255,255,.05)'; g.lineWidth = .04; for (let i = 0; i < 14; i++) { g.beginPath(); g.moveTo(.3 + i * .35, 3.3); g.lineTo(.3 + i * .35, 3.0 - (i % 3) * .3); g.lineTo(1.2 + i * .2, 2.9 - (i % 4) * .4); g.stroke(); }
  // logo tàctil (V2) i el LED del micròfon
  g.strokeStyle = '#D6AA52'; g.lineWidth = .1; roundRect(g, 2.15, .27, .9, .48, .24); g.stroke(); g.fillStyle = '#D6AA52'; g.beginPath(); g.arc(2.38, .51, .08, 0, 7); g.arc(2.82, .51, .08, 0, 7); g.fill();
  g.fillStyle = '#2B1B12'; g.fillRect(3.25, .42, .1, .14);
  // botons A i B
  for (const [x, t] of [[.5, 'A'], [4.7, 'B']]) { g.fillStyle = '#2A2C31'; roundRect(g, x - .3, 1.65, .6, .6, .06); g.fill(); g.fillStyle = '#4B4E55'; g.fillRect(x - .3, 1.65, .6, .05); g.fillStyle = '#F2F2F2'; g.font = '800 .3px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, x, 1.38); }
  // connector de vora: els cinc coixinets grossos i les tires
  g.fillStyle = '#D9AE55'; for (let i = 0; i < 5; i++) { const x = .42 + i * 1.09; roundRect(g, x - .3, 3.45, .6, .75, .12); g.fill(); }
  g.fillStyle = '#131417'; for (let i = 0; i < 5; i++) { g.beginPath(); g.arc(.42 + i * 1.09, 3.75, .17, 0, 7); g.fill(); }
  g.fillStyle = '#C79A45'; for (let i = 0; i < 20; i++) { const x = .72 + i * .2 + Math.floor(i / 4) * .29; if (x < 4.9) g.fillRect(x, 3.95, .08, .25); }
  g.fillStyle = '#EDEDED'; g.font = '700 .17px system-ui'; g.textAlign = 'center'; ['0', '1', '2', '3V', 'GND'].forEach((t, i) => g.fillText(t, .42 + i * 1.09, 3.33));
  return c;
}
// lletres de 5 × 5 de la micro:bit per als números (es desplacen d'esquerra a dreta com a showNumber)
const DIG = { 0: '01100 10010 10010 10010 01100', 1: '00100 01100 00100 00100 01110', 2: '11100 00010 01100 10000 11110', 3: '11110 00010 00100 10010 01100', 4: '00110 01010 10010 11111 00010',
  5: '11111 10000 11110 00001 11110', 6: '00010 00100 01110 10001 01110', 7: '11111 00010 00100 01000 10000', 8: '01110 10001 01110 10001 01110', 9: '01110 10001 01110 00100 01000', '-': '00000 00000 01110 00000 00000' };
function numCols(s) { const cols = []; for (const ch of String(s)) { const gl = (DIG[ch] || DIG['-']).split(' '); for (let x = 0; x < 5; x++) cols.push(gl.map(r => r[x]).join('')); cols.push('00000'); } return cols; }
function numRows(num, off = 0) {
  const s = String(num); if (s.length < 2) return DIG[s] || DIG['-'];
  const cols = numCols(s), all = ['00000', '00000', '00000', '00000', '00000', ...cols], n = all.length, o = ((off % n) + n) % n, rows = ['', '', '', '', ''];
  for (let x = 0; x < 5; x++) { const c = all[(o + x) % n]; for (let y = 0; y < 5; y++) rows[y] += c[y]; } return rows.join(' ');
}
export function drawMicrobit(T, rows, num, off = 0) {
  const g = T.c.getContext('2d'), w = T.c.width, h = T.c.height, k = w / 5.2;
  if (!T.base || T.base.width !== w) T.base = mbBase(w, h);
  g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(T.base, 0, 0);
  const e = T.e && T.e.getContext('2d'); if (e) { e.setTransform(1, 0, 0, 1, 0, 0); e.fillStyle = '#000'; e.fillRect(0, 0, w, h); }
  const r = num != null ? numRows(num, off).split(' ') : rows ? rows.split(' ') : null;
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) {
    const on = r ? r[y] && r[y][x] === '1' : false, cx = (1.56 + x * .52) * k, cy = (.91 + y * .52) * k, lw = .15 * k, lh = .26 * k;
    if (on) { const gr = g.createRadialGradient(cx, cy, 1, cx, cy, .34 * k); gr.addColorStop(0, 'rgba(255,70,50,.95)'); gr.addColorStop(1, 'rgba(255,30,20,0)'); g.fillStyle = gr; g.fillRect(cx - .34 * k, cy - .34 * k, .68 * k, .68 * k); g.fillStyle = '#FFD2C8'; g.fillRect(cx - lw / 2, cy - lh / 2, lw, lh);
      if (e) { const ge = e.createRadialGradient(cx, cy, 1, cx, cy, .3 * k); ge.addColorStop(0, 'rgba(255,60,40,1)'); ge.addColorStop(.45, 'rgba(255,30,20,.45)'); ge.addColorStop(1, 'rgba(255,20,10,0)'); e.fillStyle = ge; e.fillRect(cx - .3 * k, cy - .3 * k, .6 * k, .6 * k); e.fillStyle = '#FF9078'; e.fillRect(cx - lw / 2, cy - lh / 2, lw, lh); } }
    else { g.fillStyle = '#5D4943'; g.fillRect(cx - lw / 2, cy - lh / 2, lw, lh); g.fillStyle = 'rgba(255,230,210,.25)'; g.fillRect(cx - lw / 2, cy - lh / 2, lw, lh * .3); }
  }
  T.tex.needsUpdate = true; if (T.etex) T.etex.needsUpdate = true;
}
const BM = {};
function botMats(other) {
  const key = other ? 'o' : 'm'; if (BM[key]) return BM[key]; const T = TX();
  return BM[key] = keepMats({
    pcbTop: std('#ffffff', { map: (() => { const t = pcbTexture(other); t.repeat.set(1 / 8.1, -1 / 8.5); t.offset.set(.5, .5); return t; })(), roughness: .48, metalness: 0, envMapIntensity: .55 }),
    pcbEdge: std('#2C2A22', { roughness: .65 }), black: std('#18191D', { roughness: .5 }), rubber: std('#141416', { roughness: .88 }), dark: std('#0B0B0D', { roughness: .8 }),
    yellow: std(other ? '#FF7A1A' : '#FFC20E', { roughness: .36 }), alu: std('#D5D9E0', { roughness: .3, metalness: 1 }), steel: std('#C4CAD3', { roughness: .18, metalness: 1 }),
    gold: std('#E2B45A', { roughness: .26, metalness: 1 }), white: std('#F1F2F4', { roughness: .4 }), clear: std('#E8F2FF', { roughness: .08, metalness: 0, emissive: '#223040', emissiveIntensity: .3 }),
    us: std('#1C58C6', { roughness: .45 }), usFace: std('#ffffff', { map: usTexture(), roughness: .45 }), mesh: std('#ffffff', { map: T.mesh, roughness: .75, metalness: .2 }),
    bat: std('#3466D6', { roughness: .4, metalness: .3 })
  });
}
function keepMats(M) { for (const m of Object.values(M)) m.userData.keep = true; return M; }
function makeWheel(M) {
  const pivot = new THREE.Group(), kit = new Kit(), ri = 1.4, ro = 1.98, hw = .46, b = .14;
  const prof = [[ri, -hw], [ro - b, -hw], [ro - .03, -hw + .04], [ro, -hw + b], [ro, hw - b], [ro - .03, hw - .04], [ro - b, hw], [ri, hw]].map(([r, y]) => new THREE.Vector2(r, y));
  kit.add(new THREE.LatheGeometry(prof, 40), M.rubber, [0, 0, 0], [0, 0, PI / 2]);
  const lug = new THREE.BoxGeometry(.4, .16, .3), N = 18;
  for (let i = 0; i < N; i++) for (const s of [-1, 1]) { const a = (i + (s > 0 ? .5 : 0)) / N * TAU; kit.add(lug.clone(), M.rubber, [s * .22, Math.cos(a) * 2.03, Math.sin(a) * 2.03], [a, 0, 0]); }
  lug.dispose();
  kit.add(new THREE.CylinderGeometry(ri + .02, ri + .02, .84, 32, 1, true), M.yellow, [0, 0, 0], [0, 0, PI / 2]);
  kit.add(new THREE.TorusGeometry(ri - .05, .09, 6, 28), M.yellow, [.4, 0, 0], [0, PI / 2, 0]);
  kit.add(new THREE.CylinderGeometry(ri - .05, ri - .05, .1, 32), M.dark, [-.05, 0, 0], [0, 0, PI / 2]);
  for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; kit.add(new THREE.BoxGeometry(.22, 1.05, .3), M.yellow, [.26, Math.cos(a) * .82, Math.sin(a) * .82], [a, 0, 0]); }
  kit.add(new THREE.CylinderGeometry(.45, .5, .72, 20), M.yellow, [.04, 0, 0], [0, 0, PI / 2]);
  kit.add(new THREE.CylinderGeometry(.16, .16, .1, 12), M.steel, [.42, 0, 0], [0, 0, PI / 2]);
  const inner = new THREE.Group(); kit.build(inner); pivot.add(inner); pivot.userData.inner = inner; return pivot;
}
export function makeBot(other) {
  const M = botMats(other), T = TX(), bot = new THREE.Group(), body = new THREE.Group(); bot.add(body); bot.name = 'maqueen';
  const kit = new Kit(), PT = BOT.PT;
  // placa (8,1 × 8,5 cm) amb els forats de les rodes
  const pcbG = new THREE.ExtrudeGeometry(pcbShape(), { depth: .16, bevelEnabled: true, bevelThickness: .025, bevelSize: .025, bevelSegments: 1, curveSegments: 10 }); pcbG.rotateX(PI / 2);
  body.add(mesh(pcbG, [M.pcbTop, M.pcbEdge], { p: [0, PT - .025, 0] }));
  // a sota: portapiles, motors N20 amb reductora, bola de suport, sensors de línia
  kit.add(new RoundedBoxGeometry(4.9, 1.1, 3.1, 2, .16), M.black, [0, 1.6, 2.5]);
  for (const z of [1.55, 2.5, 3.45]) kit.add(new THREE.CylinderGeometry(.46, .46, 4.5, 16), M.bat, [0, 1.3, z], [0, 0, PI / 2]);
  for (const s of [-1, 1]) { kit.add(new THREE.CylinderGeometry(.52, .52, 1.5, 18), M.alu, [s * 1.0, 1.6, 0], [0, 0, PI / 2]); kit.add(new THREE.BoxGeometry(1.0, 1.2, 1.2), M.gold, [s * 2.25, 1.72, 0]); kit.add(new THREE.CylinderGeometry(.14, .14, .55, 8), M.steel, [s * 2.95, BOT.WR, 0], [0, 0, PI / 2]); kit.add(new THREE.BoxGeometry(.18, .3, 1.0), M.black, [s * 1.85, 2.15, 0]); }
  kit.add(new THREE.CylinderGeometry(.72, .6, 1.25, 18), M.black, [0, 1.68, -2.9]); kit.add(new THREE.SphereGeometry(.56, 18, 12), M.steel, [0, .56, -2.9]); kit.add(new THREE.TorusGeometry(.6, .08, 8, 18), M.black, [0, 1.0, -2.9], [PI / 2, 0, 0]);
  for (const x of [-1.25, 0, 1.25]) { kit.add(new THREE.BoxGeometry(.5, .3, .5), M.black, [x, PT - .33, -3.6]); kit.add(new THREE.SphereGeometry(.09, 8, 6), M.clear, [x - .12, PT - .5, -3.6]); kit.add(new THREE.SphereGeometry(.09, 8, 6), M.dark, [x + .12, PT - .5, -3.6]); }
  // a sobre: brunzidor, interruptor, pont H, capçals P1/P2, sòcol de la micro:bit, capçal dels ultrasons, sensors de llum
  kit.add(new THREE.CylinderGeometry(.55, .55, .5, 24), M.black, [2.15, PT + .25, -1.52]); kit.add(new THREE.CylinderGeometry(.12, .12, .02, 10), M.dark, [2.15, PT + .51, -1.52]);
  kit.add(new THREE.BoxGeometry(.7, .32, .42), M.white, [-2.2, PT + .16, -1.52]); kit.add(new THREE.BoxGeometry(.16, .18, .2), M.black, [-2.34, PT + .4, -1.52]);
  for (const x of [-1.9, 1.9]) { kit.add(new THREE.BoxGeometry(.66, .12, .36), M.black, [x, PT + .06, -2.55]); for (let i = 0; i < 4; i++) for (const s of [-1, 1]) kit.add(new THREE.BoxGeometry(.06, .04, .08), M.steel, [x - .24 + i * .16, PT + .02, -2.55 + s * .22]); }
  for (const s of [-1, 1]) { kit.add(new THREE.BoxGeometry(.28, .26, .82), M.black, [s * 3.45, PT + .13, 3.12]); for (let i = 0; i < 3; i++) kit.add(new THREE.BoxGeometry(.065, .62, .065), M.gold, [s * 3.45, PT + .42, 2.85 + i * .27]); }
  kit.add(new RoundedBoxGeometry(5.8, .8, .92, 2, .08), M.black, [0, PT + .4, 3.75]); kit.add(new THREE.BoxGeometry(5.4, .1, .2), M.dark, [0, PT + .58, 3.36]);
  kit.add(new THREE.CylinderGeometry(.2, .2, .48, 10), M.black, [0, PT + .24, -.45]);
  kit.add(new THREE.BoxGeometry(2.2, .3, .3), M.black, [0, PT + .15, BOT.US]); for (let i = 0; i < 4; i++) kit.add(new THREE.BoxGeometry(.06, .45, .06), M.gold, [-.75 + i * .5, PT + .45, BOT.US]);
  for (const s of [-1, 1]) { kit.add(new THREE.CylinderGeometry(.2, .2, .22, 14), M.clear, [s * 3.2, PT + .11, -3.8]); kit.add(new THREE.SphereGeometry(.2, 14, 8, 0, TAU, 0, PI / 2), M.clear, [s * 3.2, PT + .22, -3.8]); kit.add(new THREE.BoxGeometry(.5, .1, .5), M.white, [s * 2.45, PT + .05, -3.9]); }
  for (const x of [-1.25, 0, 1.25]) kit.add(new THREE.BoxGeometry(.34, .08, .2), M.white, [x, PT + .04, -2.95]);
  // mòdul d'ultrasons (els «ulls»): placa blava dreta, dos transductors amb malla, el cristall
  const UY = 3.85, UZ = BOT.US;
  const usG = new THREE.BoxGeometry(4.5, 2.0, .14); body.add(mesh(usG, [M.us, M.us, M.us, M.us, M.us, M.usFace], { p: [0, UY, UZ] }));
  for (const x of [-1.25, 1.25]) { kit.add(new THREE.CylinderGeometry(.8, .8, .8, 30, 1, true), M.alu, [x, UY, UZ - .47], [PI / 2, 0, 0]); kit.add(new THREE.TorusGeometry(.76, .06, 8, 30), M.alu, [x, UY, UZ - .87]); kit.add(new THREE.CylinderGeometry(.82, .82, .06, 30), M.alu, [x, UY, UZ - .1], [PI / 2, 0, 0]); }
  kit.add(new RoundedBoxGeometry(.8, .34, .24, 2, .1), M.steel, [0, UY + .62, UZ - .17]); kit.add(new THREE.BoxGeometry(.5, .3, .12), M.black, [0, UY - .55, UZ - .12]);
  kit.build(body);
  for (const x of [-1.25, 1.25]) { const f = mesh(new THREE.CircleGeometry(.72, 30), M.mesh, { p: [x, UY, UZ - .86], r: [0, PI, 0], cast: false }); body.add(f); }
  // rodes de 4,2 cm (grogues, amb pneumàtic de tacs) als forats de la placa
  const wheels = [-1, 1].map(s => { const wv = makeWheel(M); wv.position.set(s * BOT.WX, BOT.WR, 0); if (s < 0) wv.userData.inner.rotation.y = PI; body.add(wv); return wv; });
  // la micro:bit amb la matriu de LEDs (i un llenç d'emissió només amb els LEDs encesos)
  const mbT = { c: cnv(520, 420), e: cnv(520, 420) }; mbT.tex = toTex(mbT.c); mbT.etex = toTex(mbT.e);
  const mbMat = new THREE.MeshStandardMaterial({ map: mbT.tex, emissiveMap: mbT.etex, emissive: '#ffffff', emissiveIntensity: 2.4, roughness: .42, metalness: 0, envMapIntensity: .5 });
  const ms = new THREE.Shape(), mw = 2.6, md = 2.1; ms.moveTo(-mw + .3, -md); ms.lineTo(mw - .3, -md); ms.quadraticCurveTo(mw, -md, mw, -md + .3); ms.lineTo(mw, md); ms.lineTo(-mw, md); ms.lineTo(-mw, -md + .3); ms.quadraticCurveTo(-mw, -md, -mw + .3, -md);
  const mbG = new THREE.ExtrudeGeometry(ms, { depth: .1, bevelEnabled: false, curveSegments: 6 }); mbG.rotateX(PI / 2);
  mbT.tex.repeat.set(1 / 5.2, -1 / 4.2); mbT.tex.offset.set(.5, .5); mbT.etex.repeat.copy(mbT.tex.repeat); mbT.etex.offset.copy(mbT.tex.offset);
  const mbEdge = std('#111214', { roughness: .5 }), mb = mesh(mbG, [mbMat, mbEdge], { p: [BOT.MB[0], BOT.MB[1] + .05, BOT.MB[2]] }); body.add(mb);
  const bk = new Kit(); for (const x of [-2.1, 2.1]) { bk.add(new THREE.CylinderGeometry(.19, .19, .14, 16), M.black, [x, BOT.MB[1] + .12, BOT.MB[2] - .1]); } bk.build(body);
  drawMicrobit(mbT, null);
  // llums RGB del cotxe (cantonades del davant) amb la clapa de llum a terra
  const heads = [-1, 1].map(s => { const mat = new THREE.MeshStandardMaterial({ color: '#DADFE8', emissive: '#000000', roughness: .15 }); const h = mesh(new THREE.SphereGeometry(.26, 16, 10, 0, TAU, 0, PI / 2), mat, { p: [s * 2.45, PT + .1, -3.9] });
    const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow, color: '#ffffff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); gl.scale.setScalar(3.4); gl.position.y = .15; gl.userData.noAO = true; h.add(gl); body.add(h);
    const pool = decal(9, 14, glowMat(T.glow), .035); pool.position.set(s * 2.6, .035, -10.5); bot.add(pool); return { h, mat, gl, pool }; });
  // 4 RGB de sota
  const unders = [[-2.6, -2.4], [-2.6, 2.4], [2.6, 2.4], [2.6, -2.4]].map(([x, z]) => { const m = decal(10, 10, glowMat(T.glow), .03); m.position.x = x; m.position.z = z; bot.add(m); return m; });
  // sensors de línia: punt a terra, raig i LED indicador a sobre (s'encenen sobre negre)
  const lineS = [-1.25, 0, 1.25].map(x => { const dot = decal(2.2, 2.2, glowMat(T.glow, '#2EE6F0'), .04); dot.position.x = x; dot.position.z = -3.6; bot.add(dot);
    const ray = new THREE.Mesh(new THREE.CylinderGeometry(.09, .22, PT - .5, 8, 1, true), new THREE.MeshBasicMaterial({ color: '#2EE6F0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); ray.position.set(x, (PT - .5) / 2, -3.6); ray.userData.noAO = true; bot.add(ray);
    const lm = new THREE.MeshStandardMaterial({ color: '#BFD8FF', emissive: '#2EE6F0', emissiveIntensity: 0, roughness: .2 }), led = mesh(new THREE.BoxGeometry(.2, .1, .14), lm, { p: [x, PT + .09, -2.95], cast: false }); body.add(led);
    return { dot, ray, led, lm }; });
  // ombra de contacte (oclusió) sota el robot
  const shadow = decal(11, 12, new THREE.MeshBasicMaterial({ map: T.blob, color: '#000', transparent: true, opacity: .5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), .015); shadow.renderOrder = 1; bot.add(shadow);
  bot.traverse(o => { if (o.isMesh && (o.material.transparent || o.userData.noAO)) o.castShadow = false; });
  return { bot, body, wheels, mbT, mbMat, heads, unders, under: unders[0], underM: unders[0].material, lineS, lineDots: lineS.map(l => l.dot), shadow, mx: null };
}

/* ---------- peces de l'arena ---------- */
function canMesh(o, i) {
  const g = new THREE.Group(), r = o.r, H = 9, T = TX();
  const cols = [['#E8312C', '#FFFFFF'], ['#1E6FE0', '#FFD23A'], ['#22A55B', '#FFFFFF'], ['#F2A21C', '#2B2B2B']][i % 4];
  const lab = ctex(512, 256, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, cols[0]); gr.addColorStop(1, new THREE.Color(cols[0]).multiplyScalar(.72).getStyle()); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.fillStyle = cols[1]; c.beginPath(); c.moveTo(0, h * .62); for (let x = 0; x <= w; x += 8) c.lineTo(x, h * .6 + Math.sin(x / w * TAU * 2) * 18); c.lineTo(w, h * .74); for (let x = w; x >= 0; x -= 8) c.lineTo(x, h * .72 + Math.sin(x / w * TAU * 2) * 18); c.fill();
    c.font = '900 italic 64px "Lexend",system-ui,sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = cols[1]; for (const x of [w * .25, w * .75]) c.fillText('NUMI', x, h * .36);
    c.fillStyle = 'rgba(255,255,255,.18)'; for (let k = 0; k < 18; k++) { c.beginPath(); c.arc((k * 97) % w, 30 + (k * 53) % 70, 4 + (k % 4) * 2, 0, 7); c.fill(); } });
  const body = std('#ffffff', { map: lab, roughness: .3, metalness: .55 }), alu = std('#DCE0E6', { roughness: .22, metalness: 1 });
  g.add(mesh(new THREE.CylinderGeometry(r, r, H - 1.6, 36, 1, true), body, { p: [0, H / 2, 0] }));
  const prof = [[0, H - .1], [r * .78, H - .1], [r * .83, H + .05], [r * .88, H - .2], [r, H - .9]].map(([a, b]) => new THREE.Vector2(a, b));
  const bot = [[r, .8], [r, .9], [r * .9, .15], [r * .8, 0], [r * .5, .25], [0, .3]].map(([a, b]) => new THREE.Vector2(a, b));
  g.add(mesh(new THREE.LatheGeometry(prof, 36), alu), mesh(new THREE.LatheGeometry(bot, 36), alu));
  g.add(mesh(new RoundedBoxGeometry(1.4, .08, .8, 1, .04), alu, { p: [r * .3, H + .06, 0] }));
  const sh = decal(r * 3.2, r * 3.2, new THREE.MeshBasicMaterial({ map: T.blob, color: '#000', transparent: true, opacity: .45, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), .02); g.add(sh);
  return g;
}
function ballMesh(o) {
  const g = new THREE.Group(), T = TX(), tex = ctex(256, 128, (c, w, h) => { c.fillStyle = '#FF7A12'; c.fillRect(0, 0, w, h); c.strokeStyle = '#FFE7C4'; c.lineWidth = 7; c.beginPath(); for (let x = 0; x <= w; x += 4) c.lineTo(x, h / 2 + Math.sin(x / w * TAU * 2) * h * .22); c.stroke(); });
  g.add(mesh(new THREE.SphereGeometry(o.r, 32, 20), std('#ffffff', { map: tex, roughness: .42 }), { p: [0, o.r, 0] }));
  g.add(decal(o.r * 2.8, o.r * 2.8, new THREE.MeshBasicMaterial({ map: T.blob, color: '#000', transparent: true, opacity: .4, depthWrite: false }), .02)); return g;
}
function boxMesh(o) { const g = new THREE.Group(), T = TX(); g.add(mesh(new RoundedBoxGeometry(o.r * 2, o.r * 2, o.r * 2, 2, .25), std('#ffffff', { map: T.card, roughness: .85 }), { p: [0, o.r, 0] })); g.add(decal(o.r * 3, o.r * 3, new THREE.MeshBasicMaterial({ map: T.blob, color: '#000', transparent: true, opacity: .35, depthWrite: false }), .02)); return g; }
// el portàtil, el rotlle de cinta i el regle (fora del tapet: només decoren)
function props(par, w, h) {
  const T = TX(), kit = new Kit(), grey = std('#A7AEBB', { roughness: .35, metalness: .8 }), dark = std('#22252B', { roughness: .5 }), tape = std('#141518', { roughness: .32 }), card = std('#C9A87A', { roughness: .9 });
  // portàtil amb MakeCode a la pantalla
  const lp = new THREE.Group(); lp.position.set(-w / 2 + 22, 0, -h / 2 - 34); lp.rotation.y = .32;
  kit.add(new RoundedBoxGeometry(32, 1.4, 22, 2, .5), grey, [0, .7, 0]); kit.add(new THREE.BoxGeometry(28, .1, 10), dark, [0, 1.42, -3.5]); kit.add(new THREE.BoxGeometry(10, .08, 6.5), dark, [0, 1.42, 6]);
  kit.add(new RoundedBoxGeometry(32, 21, .8, 2, .35), grey, [0, 11.2, -13.3], [-.22, 0, 0]); kit.build(lp);
  const scr = ctex(512, 320, (g, W, H) => { g.fillStyle = '#F4F6FB'; g.fillRect(0, 0, W, H); g.fillStyle = '#3454D1'; g.fillRect(0, 0, W, 26); g.fillStyle = '#E9ECF5'; g.fillRect(0, 26, 120, H); const bc = ['#1E90FF', '#00A65A', '#FFAB19', '#E63022', '#9C27B0', '#00A4A6'];
    for (let i = 0; i < 9; i++) { g.fillStyle = bc[i % 6]; roundRect(g, 10, 36 + i * 30, 98, 22, 5); g.fill(); }
    const blk = (x, y, w, c) => { g.fillStyle = c; roundRect(g, x, y, w, 26, 6); g.fill(); g.fillStyle = 'rgba(255,255,255,.85)'; g.fillRect(x + 10, y + 10, w * .5, 6); };
    blk(150, 50, 170, '#1E90FF'); blk(166, 80, 230, '#E63022'); blk(166, 110, 150, '#00A65A'); blk(166, 140, 210, '#E63022'); blk(150, 176, 120, '#1E90FF'); blk(150, 230, 200, '#FFAB19'); blk(166, 260, 160, '#9C27B0');
    g.fillStyle = '#7C88A5'; g.fillRect(W - 120, 40, 104, 104); g.fillStyle = '#1A1A1A'; g.fillRect(W - 112, 48, 88, 88); g.fillStyle = '#FF3B30'; [[1, 1], [3, 1], [0, 3], [4, 3], [1, 4], [2, 4], [3, 4]].forEach(([x, y]) => g.fillRect(W - 106 + x * 16, 54 + y * 16, 10, 10)); });
  const sm = new THREE.MeshStandardMaterial({ map: scr, emissiveMap: scr, emissive: '#ffffff', emissiveIntensity: .9, roughness: .2 });
  const s = mesh(new THREE.PlaneGeometry(29.5, 18.5), sm, { p: [0, 11.29, -12.88], r: [-.22, 0, 0], cast: false }); lp.add(s); par.add(lp);
  // rotlle de cinta aïllant
  const tp = new THREE.Group(); tp.position.set(w / 2 + 16, 0, -h / 2 + 10);
  const tk = new Kit(); tk.add(new THREE.LatheGeometry([[2.6, 0], [4.6, 0], [4.7, .1], [4.7, 1.8], [4.6, 1.9], [2.6, 1.9]].map(([a, b]) => new THREE.Vector2(a, b)), 40), tape); tk.add(new THREE.CylinderGeometry(2.6, 2.6, 1.9, 32, 1, true), card, [0, .95, 0]); tk.build(tp);
  tp.add(mesh(new THREE.BoxGeometry(14, .06, 1.9), tape, { p: [-9, .03, 3.6], r: [0, .25, 0] })); par.add(tp);
  // regle de 30 cm davant del tapet
  const ru = ctex(1024, 64, (g, W, H) => { g.fillStyle = '#F5D547'; g.fillRect(0, 0, W, H); g.fillStyle = '#2A2410'; for (let i = 0; i <= 300; i++) { const x = 12 + i * (W - 24) / 300, l = i % 10 === 0 ? 26 : i % 5 === 0 ? 18 : 10; g.fillRect(x - .7, 0, 1.4, l); if (i % 10 === 0) { g.font = '700 16px system-ui'; g.textAlign = 'center'; g.fillText(String(i / 10), x, 46); } } });
  par.add(mesh(new RoundedBoxGeometry(31, .25, 3.2, 1, .1), std('#ffffff', { map: ru, roughness: .4 }), { p: [w / 2 - 30, .12, h / 2 + 12], r: [0, -.06, 0] }));
  const pen = new Kit(); pen.add(new THREE.CylinderGeometry(.38, .38, 15, 6), std('#2F7BFF', { roughness: .45 }), [0, 0, 0], [0, 0, PI / 2]); pen.add(new THREE.ConeGeometry(.38, 1.6, 6), std('#E8C9A0', { roughness: .8 }), [-8.3, 0, 0], [0, 0, PI / 2]); pen.add(new THREE.ConeGeometry(.12, .5, 6), dark, [-9, 0, 0], [0, 0, PI / 2]);
  const pg = new THREE.Group(); pen.build(pg); pg.position.set(w / 2 + 14, .38, h / 2 - 6); pg.rotation.y = 1.1; par.add(pg);
}

/* ---------- el con dels ultrasons (amb polsos que surten del sensor) ---------- */
function coneMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uC: { value: new THREE.Color('#12B9D4') }, uA: { value: 1 }, uK: { value: 1 }, uR0: { value: 1.3 }, uR1: { value: 5 }, uD: { value: 50 } },
    vertexShader: `uniform float uR0, uR1, uD; varying float vT; varying vec3 vN; varying vec3 vV;
      void main(){ float t = position.y + .5; vT = t; vec3 p = vec3(position.x * mix(uR0, uR1, t), position.z * mix(uR0, uR1, t), -t * uD);
        vec4 mv = modelViewMatrix * vec4(p, 1.); vV = -mv.xyz; vN = normalize(normalMatrix * vec3(normal.x, normal.z, 0.)); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uT, uA, uD, uK; uniform vec3 uC; varying float vT; varying vec3 vN; varying vec3 vV;
      void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float body = .35 + .65 * f;
        float ph = fract(vT * uD / 12. - uT * 1.1); float ring = smoothstep(.0, .08, ph) * smoothstep(.3, .08, ph);
        float a = (body * (1. - vT * .6) * .36 + ring * .26 * (1. - vT * .6)) * uA * smoothstep(0., 5. / uD, vT) * smoothstep(1., 1. - 1.5 / uD, vT);
        gl_FragColor = vec4(uC * (1.05 + ring * .5) / uK, min(1., a * uK));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide
  });
}
// el GTAO no ha de veure els halos, les clapes de llum ni les espurnes
class AOPass extends GTAOPass {
  _overrideVisibility() { super._overrideVisibility(); const c = this._visibilityCache; this.scene.traverse(o => { const m = o.material; if (o.visible && !c.includes(o) && (o.isSprite || o.userData.noAO || (m && m.transparent && m.depthWrite === false))) { o.visible = false; c.push(o); } }); }
}
const TIERS = { low: { dpr: 1.5, sh: 1024, rad: 2, post: false, gk: 1 }, mid: { dpr: 1.5, sh: 2048, rad: 3, post: true, bloom: true, gk: 4 }, high: { dpr: 2, sh: 2048, rad: 3, post: true, bloom: true, ao: true, gk: 4 } };
const ORDER = ['low', 'mid', 'high'];

export function create(el, W, S, opt = {}) {
  const T = TX();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: !!opt.shot, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NeutralToneMapping; const EXP = 1, ENVI = .48, SUNI = 3.5, HEMI = .25, BGI = .75; renderer.toneMappingExposure = EXP;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap; renderer.shadowMap.autoUpdate = false;
  const cv = renderer.domElement; cv.className = 'b3c'; cv.style.touchAction = 'pan-y'; el.appendChild(cv);
  // una vinyeta suau (com una foto): fa que la mirada vagi al centre de la missió
  const vig = document.createElement('div'); vig.className = 'b3v'; vig.setAttribute('aria-hidden', 'true'); vig.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;border-radius:inherit;background:radial-gradient(ellipse 75% 70% at 50% 46%,rgba(0,0,0,0) 58%,rgba(20,14,8,.2) 100%)'; el.appendChild(vig);
  // la qualitat: per programari (SwiftShader…) o pantalla tàctil petita → baixa
  let gpu = ''; try { const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info'); gpu = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)); } catch (e) { }
  const soft = /swiftshader|llvmpipe|software|basic render/i.test(gpu);
  let force = opt.quality || (typeof window !== 'undefined' && window.__r3q) || null; try { force = force || new URLSearchParams(location.search).get('r3q'); } catch (e) { }
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches, small = Math.min(screen.width || 1e4, screen.height || 1e4) < 820;
  let tier = TIERS[force] ? force : soft ? 'low' : coarse ? (small ? 'low' : 'mid') : 'high';
  if (!TIERS[force]) { const cap = lsGet('numi-r3q'); if (TIERS[cap] && ORDER.indexOf(cap) < ORDER.indexOf(tier)) tier = cap; }
  // el postprocés necessita poder pintar en coma flotant
  const hdrOK = renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float'); if (!hdrOK) tier = 'low';
  const pinned = !!TIERS[force] || soft || !hdrOK;
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(34, 1.6, .5, 4000);
  const envRT = classroomEnv(renderer); scene.environment = envRT.texture; scene.background = envRT.texture; scene.backgroundBlurriness = .3; scene.backgroundIntensity = BGI; scene.environmentIntensity = ENVI;
  const hemi = new THREE.HemisphereLight('#F2F7FF', '#8F8A82', HEMI); scene.add(hemi);
  // el sol entra pel finestral: un focus llunyà amb la silueta dels vidres (la missió queda dins d'un vidre, al sol)
  const sun = new THREE.SpotLight('#FFF6E8', SUNI, 0, .3, 0, 0); sun.castShadow = true; sun.shadow.bias = -.00012; sun.shadow.normalBias = .04; sun.shadow.intensity = .85; scene.add(sun, sun.target);
  const cookie = cnv(1024, 1024); sun.map = toTex(cookie);
  const fx = new THREE.Group(); scene.add(fx);
  let world = null, st = null, R = null, lead = null, alive = true, raf = 0, last = 0, TT = 0, lastS = S;
  let mode = opt.mode || 'over', composer = null, aoPass = null, bloomPass = null, GK = 1;
  const drag = { yaw: 0, pitch: 0, on: false, x: 0, y: 0, y0: 0, p0: 0 };
  const camS = { pos: new THREE.Vector3(), tgt: new THREE.Vector3(), fov: 34, ok: false, rate: 6 }, intro = { t: -1, from: null };
  const chase = { h: 0, ok: false }, shake = { t: 0, a: 0 };
  const P3 = (x, y) => new THREE.Vector3(x - st.W.w / 2, 0, y - st.W.h / 2);

  /* ---- qualitat: píxels, ombres i postprocés ---- */
  function applyTier() {
    const q = TIERS[tier], dpr = Math.min(q.dpr, window.devicePixelRatio || 1, soft && !TIERS[force] ? 1 : 9);
    renderer.setPixelRatio(dpr);
    if (sun.shadow.mapSize.x !== q.sh) { sun.shadow.mapSize.set(q.sh, q.sh); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    sun.shadow.radius = q.rad; renderer.shadowMap.needsUpdate = true; GK = q.gk; if (R) R.mbMat.emissiveIntensity = 2.4 * GK; if (lead) { lead.mbMat.emissiveIntensity = 2.4 * GK; lead.heads.forEach(H => H.mat.emissiveIntensity = 2.2 * GK); } if (st && lastS) sync(lastS);
    if (composer) { composer.dispose(); composer.renderTarget1.dispose(); composer.renderTarget2.dispose(); if (aoPass) aoPass.dispose(); if (bloomPass) bloomPass.dispose(); composer = aoPass = bloomPass = null; }
    if (q.post) {
      const sz = renderer.getDrawingBufferSize(new THREE.Vector2()), rt = new THREE.WebGLRenderTarget(Math.max(1, sz.x), Math.max(1, sz.y), { type: THREE.HalfFloatType, samples: 4 });
      composer = new EffectComposer(renderer, rt); composer.addPass(new RenderPass(scene, cam));
      if (q.ao) { aoPass = new AOPass(scene, cam, sz.x, sz.y); aoPass.updateGtaoMaterial({ radius: 3.2, distanceExponent: 1.4, thickness: 2.5, scale: 1.05, samples: 12 }); aoPass.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 }); aoPass.blendIntensity = .85; composer.addPass(aoPass); }
      if (q.bloom) { bloomPass = new UnrealBloomPass(new THREE.Vector2(sz.x / 2, sz.y / 2), .5, .5, 3.2); composer.addPass(bloomPass); }
      composer.addPass(new OutputPass());
    }
    fit(true); if (st) applyLook();
  }
  // si va lenta, baixa un graó (i se'n recorda)
  const perf = { n: 0, buf: [], skip: 90 };
  function watch(dtMs) {
    if (pinned || document.hidden || dtMs > 250) return;
    if (perf.skip > 0) { perf.skip--; return; }
    perf.buf.push(dtMs); if (perf.buf.length < 50) return;
    const m = perf.buf.slice().sort((a, b) => a - b)[25]; perf.buf.length = 0;
    const lim = tier === 'high' ? 23 : tier === 'mid' ? 27 : 1e9;
    if (m > lim) { tier = ORDER[ORDER.indexOf(tier) - 1]; lsSet('numi-r3q', tier); perf.skip = 90; applyTier(); }
    else if (tier === 'low' && m > 40 && renderer.getPixelRatio() > 1) { renderer.setPixelRatio(1); fit(true); perf.skip = 90; }
  }

  /* ---- el món ---- */
  const sigOf = W0 => JSON.stringify([W0.w, W0.h, W0.lines, W0.walls, W0.zones, W0.objs, W0.ring, W0.lamp, W0.leader && W0.leader.path, W0.border, W0.bot, W0.marks, W0.dark, (W0.goal || []).map(g => g.k + (g.pts ? JSON.stringify(g.pts) : ''))]);
  function disposeTree(o) { const keep = TXset(); o.traverse(x => { if (x.geometry) x.geometry.dispose(); const ms = x.material ? [].concat(x.material) : []; for (const m of ms) { if (m.userData.keep) continue; for (const k of ['map', 'emissiveMap', 'roughnessMap', 'bumpMap', 'alphaMap']) if (m[k] && !keep.has(m[k])) m[k].dispose(); m.dispose(); } }); }
  function build(W0, S0) {
    if (world) { scene.remove(world); if (R) world.remove(R.bot); disposeTree(world); }
    world = new THREE.Group(); scene.add(world);
    const { w, h } = W0, ring = !!W0.ring, border = W0.border && !ring, big = border || ring, base = 0;
    st = { W: W0, sig: sigOf(W0), objs: [], cps: -1, dark: null, darkV: S0.dark ? 1 : 0, hits: S0.hits || 0, cpsN: S0.cps || 0, won: null, sound: null, trailRef: null, trailN: 0, cover: -1, mxKey: null, fallR: 0, base };
    // la taula: gran amb vora (i coses a sobre); sense vora s'acaba on s'acaba el tapet
    const mg = big ? [85, 85, 70, 100] : [.8, .8, .8, .8], tw = w + mg[0] + mg[1], td = h + mg[2] + mg[3], tcx = (mg[1] - mg[0]) / 2, tcz = (mg[2] - mg[3]) / 2;
    const tG = boxUV(new RoundedBoxGeometry(tw, 3.2, td, 3, .9), 140, 70);
    st.tMats = { hi: new THREE.MeshPhysicalMaterial({ color: '#ffffff', map: T.table, bumpMap: T.tableB, bumpScale: .6, roughness: .55, clearcoat: .3, clearcoatRoughness: .3, metalness: 0, envMapIntensity: .7 }), lo: std('#ffffff', { map: T.table, roughness: .55 }) };
    world.add(st.table = mesh(tG, st.tMats.hi, { p: [tcx, (ring ? -4 : -.12) - 1.6, tcz], cast: !big }));
    if (!big) { const lg = new Kit(), lm = std('#7D8597', { roughness: .35, metalness: .85 }); for (const sx of [-1, 1]) for (const sz of [-1, 1]) lg.add(new THREE.BoxGeometry(3, 72, 3), lm, [sx * (w / 2 - 4), base - 39, sz * (h / 2 - 4)]); lg.build(world); }
    // el tapet (vinil): color + aspror/relleu (la cinta és més llisa i fa una mica de gruix)
    const k = Math.min(tier === 'low' ? 8 : 10, (tier === 'low' ? 1600 : 2048) / Math.max(w, h)), mc = cnv(Math.round(w * k), Math.round(h * k)), ac = cnv(mc.width, mc.height);
    st.mat = { c: mc, a: ac, k, tex: toTex(mc), aux: toTex(ac, { data: true }) };
    paintMat(S0);
    if (ring) {
      const dG = new THREE.CylinderGeometry(W0.ring.r, W0.ring.r + .3, 4, 96, 1), uv = dG.attributes.uv, pp = dG.attributes.position;
      for (let i = 0; i < pp.count; i++) if (pp.getY(i) > 1.99) uv.setXY(i, (W0.ring.x + pp.getX(i)) / w, 1 - (W0.ring.y + pp.getZ(i)) / h);
      const top = new THREE.MeshStandardMaterial({ map: st.mat.tex, roughnessMap: st.mat.aux, roughness: 1 }), side = std('#16181D', { roughness: .45 });
      world.add(mesh(dG, [side, top, side], { p: [W0.ring.x - w / 2, -2, W0.ring.y - h / 2] }));
    } else {
      const vin = std('#ECEAE3', { roughness: .8 }), top = st.matTop = new THREE.MeshStandardMaterial({ map: st.mat.tex, roughnessMap: st.mat.aux, bumpMap: st.mat.aux, bumpScale: .9, roughness: 1, metalness: 0, envMapIntensity: .55 });
      world.add(mesh(new THREE.BoxGeometry(w, .12, h), [vin, vin, top, vin, vin, vin], { p: [0, -.06, 0], cast: false }));
    }
    // el marc: taulons de contraplacat de 18 mm (amb el cantell de capes a dalt)
    if (border) {
      const bk = new Kit(), cap = new Kit(), t = 1.8, H = 6, ply = std('#ffffff', { map: T.ply, roughness: .62 }), edge = std('#ffffff', { map: T.plyEdge, roughness: .7 });
      for (const [x, z, a, b, along] of [[0, -h / 2 - t / 2, w + 2 * t, t, 0], [0, h / 2 + t / 2, w + 2 * t, t, 0], [-w / 2 - t / 2, 0, t, h, 1], [w / 2 + t / 2, 0, t, h, 1]]) {
        bk.add(boxUV(new RoundedBoxGeometry(a, H, b, 2, .18), 60, 30, !!along), ply, [x, H / 2, z]);
        const pg = new THREE.PlaneGeometry(a, b), uv = pg.attributes.uv; for (let i = 0; i < uv.count; i++) { const u = uv.getX(i), v = uv.getY(i); uv.setXY(i, along ? v * b / 8 : u * a / 8, along ? u : v); }
        cap.add(pg, edge, [x, H + .002, z], [-PI / 2, 0, 0]);
      }
      bk.build(world); cap.build(world, { cast: false });
    }
    // parets: blocs de pi de 8 cm d'alt
    if (W0.walls.length) { const wk = new Kit(), pine = std('#ffffff', { map: T.pine, bumpMap: T.pineB, bumpScale: .5, roughness: .62 }); for (const r of W0.walls) wk.add(boxUV(new RoundedBoxGeometry(r[2], 8, r[3], 2, .45), 50, 50, r[3] > r[2]), pine, [r[0] + r[2] / 2 - w / 2, 4, r[1] + r[3] / 2 - h / 2]); wk.build(world); }
    // objectes (llaunes, pilotes, caixes)
    S0.objs.forEach((o, i) => { const g = o.kind === 'box' ? boxMesh(o) : o.kind === 'ball' ? ballMesh(o) : canMesh(o, i); const gr = new THREE.Group(); gr.add(g); world.add(gr); st.objs.push({ g: gr, inner: g, fall: 0, out: false }); });
    // focus de llum (amb la clapa de llum a terra)
    st.lamp = null;
    if (S0.lamp) { const lg = new THREE.Group(), lp = P3(S0.lamp.x, S0.lamp.y), lk = new Kit(), met = std('#2E3340', { roughness: .4, metalness: .6 }), chrome = std('#D9DEE6', { roughness: .15, metalness: 1 }); lg.position.copy(lp);
      lk.add(new THREE.CylinderGeometry(2.6, 3.0, .9, 28), met, [0, .45, 0]); lk.add(new THREE.CylinderGeometry(.32, .32, 9, 12), chrome, [0, 5.3, 0]); lk.add(new THREE.CylinderGeometry(1.1, .5, 1.1, 20), met, [0, 9.4, 0]); lk.add(new THREE.TorusGeometry(1.75, .1, 8, 28), chrome, [0, 11.1, 0], [PI / 2, 0, 0]); lk.build(lg);
      const bulbM = new THREE.MeshStandardMaterial({ color: '#FFF6DA', emissive: '#FFD27A', emissiveIntensity: 3, roughness: .3 }); lg.add(mesh(new THREE.SphereGeometry(1.7, 24, 16), bulbM, { p: [0, 11.1, 0], cast: false }));
      const pl = new THREE.PointLight('#FFD58A', 1400, 160, 2); pl.position.set(0, 11.1, 0); lg.add(pl);
      const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow, color: '#FFE09A', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .9 })); gl.scale.setScalar(16); gl.position.y = 11.1; gl.userData.noAO = true; lg.add(gl);
      const pool = decal(70, 70, glowMat(T.glow, '#FFC870', .5), .05); lg.add(pool);
      world.add(lg); st.lamp = { bulbM, pl, gl, pool, k: S0.lamp.on ? 1 : 0 }; }
    // pols del terra (aspirador): desapareix on el robot ha netejat
    st.dust = null;
    if ((W0.goal || []).some(g => g.k === 'cover')) { const dc = cnv(Math.floor(w / 5), Math.floor(h / 5)), dt = toTex(dc, { data: true }); dt.magFilter = dt.minFilter = THREE.LinearFilter; dt.generateMipmaps = false;
      const dm = new THREE.MeshBasicMaterial({ map: T.dust, color: '#C9C0B0', alphaMap: dt, transparent: true, opacity: .42, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      T.dust.repeat.set(w / 40, h / 40); const dd = decal(Math.floor(w / 5) * 5, Math.floor(h / 5) * 5, dm, .012); dd.position.set(Math.floor(w / 5) * 2.5 - w / 2, .012, Math.floor(h / 5) * 2.5 - h / 2); world.add(dd); st.dust = { c: dc, t: dt }; }
    if (big && !ring) props(world, w, h);
    // l'altre robot (el líder)
    lead = S0.lead ? makeBot(true) : null; if (lead) { world.add(lead.bot); drawMicrobit(lead.mbT, '00100 01110 11011 01110 00100'); lead.mbMat.emissiveIntensity = 2.4 * GK; lead.heads.forEach(H => { H.mat.color.set(COL.red); H.mat.emissive.set(COL.red); H.mat.emissiveIntensity = 2.2 * GK; H.gl.material.color.set(COL.red); H.gl.material.opacity = .9; H.pool.material.color.set(COL.red); H.pool.material.opacity = .35; }); }
    // en Maqueen
    if (!R) { R = makeBot(false); R.halo = decal(20, 20, new THREE.MeshBasicMaterial({ map: T.ring, color: '#3D7BFF', transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), .02); R.bot.add(R.halo); } world.add(R.bot); R.vis = null; R.wa = [0, 0]; R.t = null; R.jolt = 0; R.fall = 0;
    // con dels ultrasons i el punt on rebota; rastre
    const cg = new THREE.CylinderGeometry(1, 1, 1, 36, 12, true); st.cone = new THREE.Mesh(cg, coneMaterial()); st.cone.frustumCulled = false; st.cone.userData.noAO = true; st.cone.renderOrder = 3; world.add(st.cone);
    st.ping = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow, color: '#7FF6FF', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .9 })); st.ping.userData.noAO = true; world.add(st.ping);
    const MAXT = 6000, tg = new THREE.BufferGeometry(), tp = new Float32Array(MAXT * 6), tu = new Float32Array(MAXT * 4), ti = new Uint16Array((MAXT - 1) * 6);
    for (let i = 0; i < MAXT - 1; i++) ti.set([i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2], i * 6);
    tg.setAttribute('position', new THREE.BufferAttribute(tp, 3)); tg.setAttribute('uv', new THREE.BufferAttribute(tu, 2)); tg.setIndex(new THREE.BufferAttribute(ti, 1)); tg.setDrawRange(0, 0);
    st.trail = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: new THREE.Color('#2F5BEA').multiplyScalar(1.2), map: T.dash, transparent: true, opacity: .6, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })); st.trail.frustumCulled = false; st.trail.renderOrder = 1; st.trail.userData.noAO = true; st.trail.max = MAXT; world.add(st.trail);
    // les ombres: el sol entra pels finestrals (de l'esquerra i una mica del fons)
    const DS = 1100, ext = Math.hypot(tw, td) / 2 + 30; sun.position.set(-1.35, 1.75, -.75).normalize().multiplyScalar(DS); sun.target.position.set(tcx * .5, 0, tcz * .5); sun.angle = Math.atan(ext / DS) * 1.05;
    sun.shadow.camera.near = DS - ext * 1.5; sun.shadow.camera.far = DS + ext * 1.5; sun.shadow.camera.updateProjectionMatrix(); sun.updateMatrixWorld(); sun.target.updateMatrixWorld(); sun.shadow.updateMatrices(sun);
    paintCookie(w, h, big); renderer.shadowMap.needsUpdate = true;
    poi(W0, S0); clearFx(); fit(true); applyLook();
    sync(S0, true);
  }
  // baixa: sense IBL ni fons PMREM (cars per píxel); els metalls i el robot fan servir un entorn fals barat
  let hemiBase = HEMI, expBase = EXP, envBase = ENVI;
  function applyLook() {
    const lo = tier === 'low'; scene.environment = lo ? null : envRT.texture; scene.background = lo ? T.bg : envRT.texture; hemiBase = lo ? HEMI + .95 : HEMI; expBase = lo ? EXP : EXP * .86; envBase = lo ? ENVI : ENVI * .68;
    if (st && st.table) { st.table.material = lo ? st.tMats.lo : st.tMats.hi; if (st.matTop) { const b = lo ? null : st.mat.aux; if (st.matTop.bumpMap !== b) { st.matTop.bumpMap = b; st.matTop.needsUpdate = true; } } }
    scene.traverse(o => { if (!o.isMesh || (st && o === st.table)) return; for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial && (m.metalness > .5 || m.roughness < .45)) { const want = lo ? T.fakeEnv : null; if (m.envMap !== want) { m.envMap = want; m.needsUpdate = true; } } });
  }
  // la llum del finestral sobre la taula: vidres (paral·lelograms una mica girats) i l'ombra dels travessers
  function paintCookie(w, h, big) {
    const N = cookie.width, g = cookie.getContext('2d'), M = sun.shadow.matrix, v4 = new THREE.Vector4();
    const uv = (x, z) => { v4.set(x, 0, z, 1).applyMatrix4(M); return [v4.x / v4.w * N, (1 - v4.y / v4.w) * N]; };
    g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = 'rgb(34,32,30)'; g.fillRect(0, 0, N, N);
    const a = -.09, ca = Math.cos(a), sa = Math.sin(a), sk = .1, mg = big ? 11 : 4, mul = 10, bx = (w / 2 + mg) * Math.abs(ca) + (h / 2 + mg) * Math.abs(sa), bz = (w / 2 + mg) * Math.abs(sa) + (h / 2 + mg) * Math.abs(ca);
    const PW = 2 * bx + 2 * bz * sk, PD = 2 * bz, X = (u, v) => [u * ca - v * sa, u * sa + v * ca];
    for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
      const u0 = -PW / 2 + i * (PW + mul), v0 = -PD / 2 + j * (PD + mul), cs = [[u0, v0], [u0 + PW, v0], [u0 + PW, v0 + PD], [u0, v0 + PD]].map(([u, v]) => uv(...X(u + (v + PD / 2) * sk - (j * (PD + mul)) * sk, v)));
      g.save(); g.shadowColor = i || j ? 'rgb(236,232,226)' : '#fff'; g.shadowBlur = 10; g.shadowOffsetX = N * 2; g.fillStyle = '#000'; g.beginPath(); cs.forEach((p, k) => k ? g.lineTo(p[0] - N * 2, p[1]) : g.moveTo(p[0] - N * 2, p[1])); g.closePath(); g.fill(); g.restore();
    }
    sun.map.needsUpdate = true;
  }
  // pinta el tapet: vinil, quadrícula i regle; les zones, la cinta i les marques (les de tech-robo.js), i el relleu
  function paintMat(S) {
    const { c, a, k } = st.mat, W0 = st.W, g = c.getContext('2d'), x = a.getContext('2d');
    if (typeof roboPaintFloorItems === 'function') {
      g.setTransform(k, 0, 0, k, 0, 0); g.fillStyle = W0.ring ? '#2B3142' : '#F9F9F6'; g.fillRect(0, 0, W0.w, W0.h);
      const R0 = rng(3); for (let i = 0; i < W0.w * W0.h / 6; i++) { g.fillStyle = R0() < .5 ? 'rgba(0,0,0,.025)' : 'rgba(255,255,255,.05)'; g.fillRect(R0() * W0.w, R0() * W0.h, .12 + R0() * .3, .12); }
      if (!W0.ring) {
        g.strokeStyle = 'rgba(40,60,120,.14)'; g.lineWidth = .18; for (let i = 10; i < W0.w; i += 10) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, W0.h); g.stroke(); } for (let i = 10; i < W0.h; i += 10) { g.beginPath(); g.moveTo(0, i); g.lineTo(W0.w, i); g.stroke(); }
        g.fillStyle = 'rgba(40,60,120,.28)'; for (let i = 0; i <= W0.w; i++) { const l = i % 10 === 0 ? 1.6 : i % 5 === 0 ? 1.0 : .55; g.fillRect(i - .05, 0, .1, l); g.fillRect(i - .05, W0.h - l, .1, l); }
        for (let i = 0; i <= W0.h; i++) { const l = i % 10 === 0 ? 1.6 : i % 5 === 0 ? 1.0 : .55; g.fillRect(0, i - .05, l, .1); g.fillRect(W0.w - l, i - .05, l, .1); }
        g.font = '700 1.25px Lexend,system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'top'; for (let i = 10; i < W0.w; i += 10) g.fillText(String(i), i, W0.h - 3.2);
        // ombra suau al peu dels blocs i del marc
        g.save(); g.shadowColor = 'rgba(30,20,10,.45)'; g.shadowBlur = 1.6 * k; g.fillStyle = '#000'; for (const r of W0.walls) g.fillRect(r[0] + .4, r[1] + .4, r[2] - .8, r[3] - .8); g.restore();
        if (W0.border) { const e = 1.6; for (const [x0, y0, x1, y1, ww, hh] of [[0, 0, 0, e, W0.w, e], [0, W0.h, 0, W0.h - e, W0.w, -e], [0, 0, e, 0, e, W0.h], [W0.w, 0, W0.w - e, 0, -e, W0.h]]) { const gr = g.createLinearGradient(x0, y0, x1, y1); gr.addColorStop(0, 'rgba(40,28,15,.28)'); gr.addColorStop(1, 'rgba(40,28,15,0)'); g.fillStyle = gr; g.fillRect(Math.min(x0, x0 + ww), Math.min(y0, y0 + hh), Math.abs(ww), Math.abs(hh)); } }
      }
      // ombra de la cinta (fa gruix)
      g.save(); g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = 'rgba(0,0,0,.18)'; for (const l of W0.lines) { g.lineWidth = l.w + .35; g.beginPath(); l.p.forEach((p, i) => i ? g.lineTo(p[0] + .12, p[1] + .15) : g.moveTo(p[0] + .12, p[1] + .15)); if (l.closed) g.closePath(); g.stroke(); } g.restore();
      roboPaintFloorItems(g, W0, S, {});
      // la cinta: una mica de textura i la vora que brilla
      g.save(); g.lineCap = 'round'; g.lineJoin = 'round'; for (const l of W0.lines) { g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = l.w * .82; g.setLineDash([.6, .9, 1.4, .7]); g.beginPath(); l.p.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); if (l.closed) g.closePath(); g.stroke(); } g.restore();
    } else if (typeof roboFloorPaint === 'function') roboFloorPaint(g, W0, S, k);
    // aspror (G) i relleu (R): el vinil és mat; la cinta, llisa i més alta
    x.setTransform(1, 0, 0, 1, 0, 0); x.fillStyle = 'rgb(0,205,0)'; x.fillRect(0, 0, a.width, a.height); x.setTransform(k, 0, 0, k, 0, 0); x.lineCap = 'round'; x.lineJoin = 'round';
    if (W0.ring) { x.strokeStyle = 'rgb(0,120,0)'; x.lineWidth = 2; x.beginPath(); x.arc(W0.ring.x, W0.ring.y, W0.ring.r - 1, 0, 7); x.stroke(); }
    for (const z of W0.zones) { x.fillStyle = 'rgb(0,175,0)'; x.beginPath(); if (z.r) x.rect(z.r[0], z.r[1], z.r[2], z.r[3]); else x.arc(z.c[0], z.c[1], z.c[2], 0, 7); x.fill(); }
    x.strokeStyle = 'rgb(255,70,0)'; for (const l of W0.lines) { x.lineWidth = l.w; x.beginPath(); l.p.forEach((p, i) => i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1])); if (l.closed) x.closePath(); x.stroke(); }
    st.mat.tex.needsUpdate = true; st.mat.aux.needsUpdate = true;
  }
  // punts que la càmera «General» ha d'enquadrar: el robot, les zones, la cinta, les parets, els objectes…
  function poi(W0, S0) {
    const { w, h } = W0, xs = [], zs = [], tall = [], add = (x, y, r = 0) => { xs.push(x - r, x + r); zs.push(y - r, y + r); };
    add(W0.bot[0], W0.bot[1], 7);
    for (const z of W0.zones) z.r ? (add(z.r[0], z.r[1]), add(z.r[0] + z.r[2], z.r[1] + z.r[3])) : add(z.c[0], z.c[1], z.c[2]);
    for (const l of W0.lines) l.p.forEach(p => add(p[0], p[1], 2));
    for (const r of W0.walls) { add(r[0], r[1]); add(r[0] + r[2], r[1] + r[3]); tall.push([r[0] + r[2] / 2, r[1] + r[3] / 2, 8]); }
    for (const o of S0.objs) { add(o.x, o.y, o.r + 2); tall.push([o.x, o.y, 9]); }
    if (W0.lamp) { add(W0.lamp.x, W0.lamp.y, 6); tall.push([W0.lamp.x, W0.lamp.y, 13]); }
    if (W0.ring) add(W0.ring.x, W0.ring.y, W0.ring.r + 2);
    if (W0.leader) W0.leader.path.forEach(p => add(p[0], p[1], 6));
    for (const p of Object.values(W0.marks || {})) add(p[0], p[1], 5);
    for (const g of W0.goal || []) if (g.pts) g.pts.forEach(p => add(p[0], p[1], 4));
    const full = (W0.goal || []).some(g => g.k === 'cover') || xs.length < 4;
    let x0 = full ? 0 : Math.min(...xs) - 9, x1 = full ? w : Math.max(...xs) + 9, z0 = full ? 0 : Math.min(...zs) - 9, z1 = full ? h : Math.max(...zs) + 9;
    const lo = W0.border ? -2 : 0; x0 = clamp(x0, lo, w); x1 = clamp(x1, 0, w - lo); z0 = clamp(z0, lo, h); z1 = clamp(z1, 0, h - lo);
    const mw = Math.min(w - 2 * lo, Math.max(50, w * .7)), mh = Math.min(h - 2 * lo, Math.max(36, h * .7));
    if (x1 - x0 < mw) { const c = clamp((x0 + x1) / 2, lo + mw / 2, w - lo - mw / 2); x0 = c - mw / 2; x1 = c + mw / 2; } if (z1 - z0 < mh) { const c = clamp((z0 + z1) / 2, lo + mh / 2, h - lo - mh / 2); z0 = c - mh / 2; z1 = c + mh / 2; }
    const pts = []; for (const x of [x0, x1]) for (const z of [z0, z1]) for (const y of [0, W0.border ? 6 : 2]) pts.push(new THREE.Vector3(x - w / 2, y, z - h / 2));
    for (const [x, z, y] of tall) pts.push(new THREE.Vector3(x - w / 2, y, z - h / 2));
    st.poi = pts; st.box = [x0 - w / 2, z0 - h / 2, x1 - w / 2, z1 - h / 2]; st.view = null;
  }

  /* ---- la càmera ---- */
  const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
  // enquadra exactament els punts amb una orientació fixa: torna on posar la càmera
  function frame(yaw, pitch, fov, aspect, pts, mx = .93, my = .9) {
    _f.set(-Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch)); _r.crossVectors(_f, UP).normalize(); _u.crossVectors(_r, _f);
    const tv = Math.tan(fov * PI / 360), a = mx * tv * aspect, b = my * tv;
    let A1 = -1e9, B1 = 1e9, A2 = -1e9, B2 = 1e9;
    for (const p of pts) { const px = p.dot(_r), py = p.dot(_u), pz = p.dot(_f); A1 = Math.max(A1, px - a * pz); B1 = Math.min(B1, px + a * pz); A2 = Math.max(A2, py - b * pz); B2 = Math.min(B2, py + b * pz); }
    const cz = Math.min((B1 - A1) / (2 * a), (B2 - A2) / (2 * b)), cx = (A1 + B1) / 2, cy = (A2 + B2) / 2;
    const C = new THREE.Vector3().addScaledVector(_r, cx).addScaledVector(_u, cy).addScaledVector(_f, cz);
    const f = _f.clone(); return { C, f, cz, depth: p => p.dot(f) - cz };
  }
  // tria l'angle: tota la missió a la vista i el robot tan gran com es pugui, sense deformar massa la perspectiva
  function chooseView() {
    const asp = cam.aspect, b = st.box, rp = P3(st.W.bot[0], st.W.bot[1]), ctr = new THREE.Vector3((b[0] + b[2]) / 2, 0, (b[1] + b[3]) / 2);
    let best = null;
    const hb = st.W.bot[2] * PI / 180, hx = Math.sin(hb), hz = -Math.cos(hb), lim = 2.4 + clamp((420 - (fit.w || 420)) / 250, 0, 1) * .9;
    for (let yaw = -.8; yaw <= .801; yaw += .08) for (const pitch of [.68, .76, .84, .92, 1.0]) for (const fov of [30, 36, 42]) {
      const F = frame(yaw, pitch, fov, asp, st.poi), dR = F.depth(rp), far = Math.max(...st.poi.map(F.depth)), near = Math.max(1, Math.min(...st.poi.map(F.depth)));
      if (far / near > lim) continue;
      const al = Math.max(0, -Math.sin(yaw) * hx - Math.cos(yaw) * hz), px = 1 / (dR * Math.tan(fov * PI / 360)), sc = px * (1 - .3 * Math.abs(yaw)) * (1 + .18 * al) * (1 - .9 * (pitch - .84) ** 2) * (fov === 36 ? 1.02 : 1);
      if (!best || sc > best.sc) best = { sc, yaw, pitch, fov };
    }
    if (!best) best = { yaw: 0, pitch: 1.0, fov: 34 };
    st.view = best; st.ctr = ctr;
  }
  function overPose(yawOff = 0, pitchOff = 0) {
    const v = st.view, pts = R && R.vis ? st.poi.concat([new THREE.Vector3(R.vis.x - 6, 0, R.vis.z - 6), new THREE.Vector3(R.vis.x + 6, 6, R.vis.z + 6)]) : st.poi;
    const yaw = v.yaw + yawOff, pitch = clamp(v.pitch + pitchOff, .3, 1.45), F = frame(yaw, pitch, v.fov, cam.aspect, pts);
    return { pos: F.C, tgt: F.C.clone().addScaledVector(F.f, F.depth(st.ctr)), fov: v.fov };
  }
  function topPose() { const F = frame(0, 1.5, 30, cam.aspect, st.poi.map(p => new THREE.Vector3(p.x, 0, p.z))); return { pos: F.C, tgt: F.C.clone().addScaledVector(F.f, F.depth(st.ctr)), fov: 30 }; }
  function chasePose(dt) {
    const v = R.vis; if (!chase.ok) { chase.h = v.h; chase.ok = true; } chase.h += angD(chase.h, v.h) * damp(3, dt);
    const fx = Math.sin(chase.h + drag.yaw), fz = -Math.cos(chase.h + drag.yaw), bp = new THREE.Vector3(v.x, v.y, v.z);
    return { pos: bp.clone().add(new THREE.Vector3(-fx * 27, 17 + drag.pitch * 20, -fz * 27)), tgt: bp.clone().add(new THREE.Vector3(fx * 14, 1.5, fz * 14)), fov: 46 };
  }
  function fit(force) {
    if (!st) return; const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width || 0), hpx = Math.max(140, r.height || 0);
    if (!force && Math.abs(wpx - (fit.w || 0)) < 1 && Math.abs(hpx - (fit.h || 0)) < 1) return; fit.w = wpx; fit.h = hpx;
    renderer.setSize(wpx, hpx, false); cam.aspect = wpx / hpx; cam.updateProjectionMatrix();
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(wpx, hpx); }
    chooseView(); if (frames < 3) camS.ok = false;
  }
  // l'entrada: primer el robot de prop (de cara, una mica de costat) i la càmera s'enlaira fins a veure tota la missió
  function startIntro() {
    if (REDUCED || AUTO || opt.shot || mode !== 'over') return; const first = !INTRO_DONE; INTRO_DONE = true;
    intro.t = 0; intro.wait = first ? .6 : .1; intro.len = first ? 2.8 : 1.3;
    const v = R.vis, a = v.h + .75, tgt = new THREE.Vector3(v.x, 3, v.z), d = first ? 19 : 34;
    intro.from = { tgt, pos: tgt.clone().add(new THREE.Vector3(Math.sin(a) * d, first ? 6.5 : 14, -Math.cos(a) * d)), fov: 38 };
  }
  const orbit = p => { const d = p.pos.clone().sub(p.tgt), r = d.length(); return { yaw: Math.atan2(d.x, d.z), pitch: Math.asin(clamp(d.y / r, -1, 1)), r }; };
  function updateCam(dt) {
    if (!st || !st.view || !R || !R.vis) return;
    let want = mode === 'chase' ? chasePose(dt) : mode === 'top' ? topPose() : overPose(drag.yaw + (REDUCED || AUTO ? 0 : Math.sin(TT * .23) * .022), drag.pitch);
    if (intro.t >= 0 && mode === 'over') {
      if (intro.wait > 0) intro.wait -= dt; else intro.t += dt / intro.len;
      const k = ease(Math.min(1, Math.max(0, intro.t))), A = orbit(intro.from), B = orbit(want), tgt = intro.from.tgt.clone().lerp(want.tgt, k);
      const yaw = A.yaw + angD(A.yaw, B.yaw) * k, pitch = A.pitch + (B.pitch - A.pitch) * k, r = Math.exp(Math.log(A.r) + (Math.log(B.r) - Math.log(A.r)) * k);
      want = { tgt, pos: tgt.clone().add(new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch) * r, Math.sin(pitch) * r, Math.cos(yaw) * Math.cos(pitch) * r)), fov: intro.from.fov + (want.fov - intro.from.fov) * k };
      if (intro.t >= 1) intro.t = -1; camS.pos.copy(want.pos); camS.tgt.copy(want.tgt); camS.fov = want.fov; camS.ok = true;
    } else if (!camS.ok) { camS.pos.copy(want.pos); camS.tgt.copy(want.tgt); camS.fov = want.fov; camS.ok = true; }
    else { const kk = damp(drag.on ? 18 : camS.rate, dt); camS.pos.lerp(want.pos, kk); camS.tgt.lerp(want.tgt, kk); camS.fov += (want.fov - camS.fov) * kk; camS.rate = Math.min(8, camS.rate + dt * 2); }
    cam.position.copy(camS.pos); if (shake.t > 0) { shake.t -= dt; const a = shake.a * Math.max(0, shake.t) * 4; cam.position.x += (Math.random() - .5) * a; cam.position.y += (Math.random() - .5) * a; }
    if (Math.abs(cam.fov - camS.fov) > .01) { cam.fov = camS.fov; cam.updateProjectionMatrix(); } cam.lookAt(camS.tgt);
  }

  /* ---- efectes: confeti, espurnes, pols, notes, ones ---- */
  const CONF = 170, cfG = new THREE.PlaneGeometry(1.2, .7), cfM = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false }), conf = new THREE.InstancedMesh(cfG, cfM, CONF);
  conf.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(CONF * 3), 3); conf.count = 0; conf.frustumCulled = false; conf.userData.noAO = true; fx.add(conf);
  const cfP = []; const _o = new THREE.Object3D(), _c = new THREE.Color(), CFC = ['#FF3B30', '#FFD60A', '#2BD45A', '#2F7BFF', '#C43BFF', '#2EE6F0', '#FF9F0A', '#FFFFFF'];
  const SPN = 90, spG = new THREE.BufferGeometry(), spPos = new Float32Array(SPN * 3), spCol = new Float32Array(SPN * 3);
  spG.setAttribute('position', new THREE.BufferAttribute(spPos, 3)); spG.setAttribute('color', new THREE.BufferAttribute(spCol, 3));
  const spark = new THREE.Points(spG, new THREE.PointsMaterial({ size: 2.6, map: T.spark, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })); spark.frustumCulled = false; fx.add(spark);
  const spP = []; let sprites = [];
  function clearFx() { cfP.length = 0; conf.count = 0; spP.length = 0; spG.setDrawRange(0, 0); sprites.forEach(s => { fx.remove(s.o); s.o.material.dispose(); if (s.o.geometry && s.o.isMesh) s.o.geometry.dispose(); }); sprites = []; }
  function burstConfetti(at) {
    const n = REDUCED ? 60 : CONF; cfP.length = 0;
    for (let i = 0; i < n; i++) { const a = Math.random() * TAU, sp = 18 + Math.random() * 46; cfP.push({ p: at.clone().add(new THREE.Vector3(0, 6, 0)), v: new THREE.Vector3(Math.cos(a) * sp, 80 + Math.random() * 90, Math.sin(a) * sp), r: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6), w: new THREE.Vector3(Math.random() * 14 - 7, Math.random() * 14 - 7, Math.random() * 14 - 7), t: 0, life: 3.2 + Math.random() * 1.6, land: false });
      conf.setColorAt(i, _c.set(CFC[i % CFC.length])); }
    conf.count = n; conf.instanceColor.needsUpdate = true;
  }
  function burstSparks(at, n, col, up = 30, spread = 14) { for (let i = 0; i < n; i++) { const a = Math.random() * TAU, r = Math.random() * spread; spP.push({ p: at.clone().add(new THREE.Vector3(Math.cos(a) * r * .3, 1 + Math.random() * 3, Math.sin(a) * r * .3)), v: new THREE.Vector3(Math.cos(a) * r, up * (.4 + Math.random()), Math.sin(a) * r), t: 0, life: .7 + Math.random() * .9, c: new THREE.Color(col || CFC[i % 7]) }); } while (spP.length > SPN) spP.shift(); }
  function addSprite(map, col, at, o = {}) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, color: col, transparent: true, depthWrite: false, blending: o.add === false ? THREE.NormalBlending : THREE.AdditiveBlending, opacity: o.op ?? 1 })); s.position.copy(at); s.scale.setScalar(o.s || 2); s.userData.noAO = true; fx.add(s); sprites.push({ o: s, t: 0, life: o.life || 1, v: o.v || new THREE.Vector3(), g: o.grow || 0, s0: o.s || 2, op: o.op ?? 1 }); }
  function addRing(at, col, r1 = 18, life = .9) { const m = decal(2, 2, glowMat(T.ring, col, .9), .06); m.position.copy(at); m.position.y = st.base + .06; fx.add(m); sprites.push({ o: m, t: 0, life, ring: r1, op: .9 }); }
  const floorY = (x, z) => { const W0 = st.W; if (W0.ring) return Math.hypot(x - (W0.ring.x - W0.w / 2), z - (W0.ring.y - W0.h / 2)) <= W0.ring.r ? 0 : -4; return Math.abs(x) <= W0.w / 2 + (W0.border ? 90 : 0) && Math.abs(z) <= W0.h / 2 + (W0.border ? 70 : 0) ? 0 : -75; };
  function updateFx(dt) {
    if (cfP.length) { let alive2 = 0; cfP.forEach((c, i) => { c.t += dt; if (!c.land) { c.v.y -= 260 * dt; c.v.multiplyScalar(Math.exp(-1.6 * dt)); c.p.addScaledVector(c.v, dt); c.r.x += c.w.x * dt; c.r.y += c.w.y * dt; c.r.z += c.w.z * dt; c.p.x += Math.sin(c.t * 7 + i) * dt * 6; const fy = floorY(c.p.x, c.p.z); if (c.p.y < fy + .05) { c.p.y = fy + .05; c.land = true; c.r.set(-PI / 2, Math.random() * 6, 0); } }
        const s = c.t > c.life ? Math.max(0, 1 - (c.t - c.life) / .8) : 1; if (s > 0) alive2++; _o.position.copy(c.p); _o.rotation.copy(c.r); _o.scale.setScalar(s); _o.updateMatrix(); conf.setMatrixAt(i, _o.matrix); });
      conf.instanceMatrix.needsUpdate = true; if (!alive2) { cfP.length = 0; conf.count = 0; } }
    if (spP.length) { for (let i = spP.length - 1; i >= 0; i--) { const s = spP[i]; s.t += dt; if (s.t > s.life) { spP.splice(i, 1); continue; } s.v.y -= 25 * dt; s.p.addScaledVector(s.v, dt); }
      spP.forEach((s, i) => { spPos.set([s.p.x, s.p.y, s.p.z], i * 3); const k = (1 - s.t / s.life) * (.6 + .4 * Math.sin(s.t * 30 + i)); spCol.set([s.c.r * k, s.c.g * k, s.c.b * k], i * 3); });
      spG.attributes.position.needsUpdate = true; spG.attributes.color.needsUpdate = true; spG.setDrawRange(0, spP.length); } else spG.setDrawRange(0, 0);
    for (let i = sprites.length - 1; i >= 0; i--) { const s = sprites[i]; s.t += dt; const k = s.t / s.life; if (k >= 1) { fx.remove(s.o); s.o.material.dispose(); if (s.o.isMesh) s.o.geometry.dispose(); sprites.splice(i, 1); continue; }
      if (s.ring) { s.o.scale.setScalar(1 + s.ring * ease(k)); s.o.material.opacity = s.op * (1 - k); } else if (s.pop) { s.o.scale.setScalar(s.s0 * (k < .25 ? k / .25 * 1.2 : 1.2 - (k - .25) * .4)); s.o.material.opacity = s.op * (1 - Math.max(0, (k - .5) * 2)); s.o.material.rotation = s.rot + k * .5; } else { s.o.position.addScaledVector(s.v, dt); s.o.scale.setScalar(s.s0 * (1 + s.g * k)); s.o.material.opacity = s.op * (1 - k * k) * Math.min(1, s.t * 10); } }
  }
  function onWin() {
    const v = R.vis, at = new THREE.Vector3(v.x, v.y, v.z); burstConfetti(at); burstSparks(at, 40, null, 40, 22); addRing(at, '#FFD60A', 26, 1.1); addRing(at, '#2BD45A', 16, .8);
    const zg = (st.W.goal || []).find(g => g.k === 'zone' || g.k === 'push'), z = zg && st.W.zones.find(q => q.id === zg.id);
    if (z) { const [cx, cy, zw, zh] = z.r ? [z.r[0] + z.r[2] / 2, z.r[1] + z.r[3] / 2, z.r[2], z.r[3]] : [z.c[0], z.c[1], z.c[2] * 2, z.c[2] * 2]; const m = decal(zw * 1.5, zh * 1.5, glowMat(T.glow, '#7CFFB0', .8), .07); m.position.set(cx - st.W.w / 2, st.base + .07, cy - st.W.h / 2); fx.add(m); sprites.push({ o: m, t: 0, life: 1.6, v: new THREE.Vector3(), g: .1, s0: 1, op: .8 }); }
  }
  function onBump(S) {
    const W0 = st.W; let best = null, bd = 1e9;
    for (const r of [...W0.walls, ...W0.bwalls]) { const cx = clamp(S.x, r[0], r[0] + r[2]), cy = clamp(S.y, r[1], r[1] + r[3]), d = Math.hypot(S.x - cx, S.y - cy); if (d < bd) { bd = d; best = [cx, cy]; } }
    if (S.lead) { const d = Math.hypot(S.lead.x - S.x, S.lead.y - S.y) - 4.3; if (d < bd) { bd = d; best = [(S.x + S.lead.x) / 2, (S.y + S.lead.y) / 2]; } }
    if (!best || bd > 8) best = [S.x + Math.sin(S.h * PI / 180) * 4.4, S.y - Math.cos(S.h * PI / 180) * 4.4];
    const at = P3(best[0], best[1]); at.y = st.base;
    for (let i = 0; i < 8; i++) { const a = Math.random() * TAU; addSprite(T.puff, '#B39A78', at.clone().add(new THREE.Vector3(Math.cos(a), 1 + Math.random() * 2, Math.sin(a))), { add: false, op: .5, s: 1.6 + Math.random() * 1.6, grow: 1.8, life: .55 + Math.random() * .35, v: new THREE.Vector3(Math.cos(a) * 9, 4 + Math.random() * 6, Math.sin(a) * 9) }); }
    addSprite(T.pow, '#FFFFFF', at.clone().add(new THREE.Vector3(0, 4.5, 0)), { add: false, op: 1, s: 7, life: .6 }); const pw = sprites[sprites.length - 1]; pw.pop = true; pw.rot = Math.random() * .6 - .3; pw.o.renderOrder = 5;
    for (let i = 0; i < 10; i++) { const a = i / 10 * TAU + Math.random() * .4; addSprite(T.spark, i % 2 ? '#FFB020' : '#FF5A36', at.clone().add(new THREE.Vector3(0, 2.5, 0)), { add: false, op: 1, s: 2 + Math.random(), grow: -.4, life: .55 + Math.random() * .25, v: new THREE.Vector3(Math.cos(a) * 26, 8 + Math.random() * 14, Math.sin(a) * 26) }); }
    const rg = decal(2, 2, new THREE.MeshBasicMaterial({ map: T.ring, color: '#FF8A2A', transparent: true, opacity: .9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), .06); rg.position.set(at.x, st.base + .06, at.z); fx.add(rg); sprites.push({ o: rg, t: 0, life: .45, ring: 5, op: .9 });
    R.jolt = 1; if (!REDUCED) { shake.t = .25; shake.a = .5; }
  }

  /* ---- l'estat de la simulació → el dibuix ---- */
  function sync(S, hard) {
    if (!st || !R) return; lastS = S; const W0 = st.W, base = st.base;
    const p = P3(S.x, S.y), hr = S.h * PI / 180;
    if (hard || !R.vis || Math.hypot(R.vis.x - p.x, R.vis.z - p.z) > 15) { R.vis = { x: p.x, y: base, z: p.z, h: hr }; R.t = S.t; R.fall = 0; chase.ok = false; }
    R.tgt = { x: p.x, z: p.z, h: hr };
    // les rodes giren el que ha avançat cada una (temps de simulació)
    const dts = R.t != null && S.t > R.t ? Math.min(.5, S.t - R.t) : 0; R.t = S.t;
    if (dts > 0) { R.wa[0] += (S.vl || 0) * dts / 2.1; R.wa[1] += (S.vr || 0) * dts / 2.1; }
    R.wheels[0].rotation.x = -R.wa[0]; R.wheels[1].rotation.x = -R.wa[1];
    // la matriu de LEDs
    const key = S.mxN != null ? 'n' + S.mxN : S.mx || ''; if (key !== R.mx) { R.mx = key; R.numT0 = TT; R.numOff = -1; if (S.mxN == null || String(S.mxN).length < 2) drawMicrobit(R.mbT, S.mx, S.mxN); }
    // llums del cotxe, de sota i sensors de línia
    ['L', 'R'].forEach((k, i) => { const c = S.car && S.car[k], H = R.heads[i]; H.mat.color.set(c ? COL[c] : '#DADFE8'); H.mat.emissive.set(c ? COL[c] : '#000000'); H.mat.emissiveIntensity = c ? 3 * GK : 0; H.gl.material.color.set(c ? COL[c] : '#fff'); H.gl.material.opacity = c ? .95 : 0; H.pool.material.color.set(c ? COL[c] : '#fff'); H.pool.material.opacity = c ? (S.dark ? .75 : .38) : 0; });
    (S.under || []).forEach((c, i) => { const m = R.unders[i]; if (!m) return; m.material.color.set(c ? COL[c] : '#fff'); m.material.opacity = c ? (S.dark ? .9 : .55) : 0; });
    if (typeof roboLine === 'function') ['L', 'M', 'R'].forEach((k, i) => { const on = roboLine(W0, S, k).black, L0 = R.lineS[i]; L0.dot.material.opacity = on ? .9 : 0; L0.ray.material.opacity = on ? .3 : 0; L0.lm.emissiveIntensity = on ? 3.2 * GK : 0; L0.lm.color.set(on ? '#DFFBFF' : '#9DB4D8'); });
    // objectes, el líder, el focus i la nit
    S.objs.forEach((o, i) => { const O = st.objs[i]; if (!O) return; const q = P3(o.x, o.y); O.g.position.x = q.x; O.g.position.z = q.z; if (o.out && !O.out) { O.out = true; O.fall = .001; O.dir = Math.atan2(q.x - (W0.ring ? W0.ring.x - W0.w / 2 : 0), q.z - (W0.ring ? W0.ring.y - W0.h / 2 : 0)); } if (!o.out && O.out) { O.out = false; O.fall = 0; O.g.position.y = 0; O.inner.rotation.set(0, 0, 0); } O.g.visible = !o.gone || o.out; if (o.moved) renderer.shadowMap.needsUpdate = true; });
    if (lead && S.lead) { const q = P3(S.lead.x, S.lead.y); lead.bot.position.set(q.x, base, q.z); lead.bot.rotation.y = -S.lead.h * PI / 180; lead.wa = (lead.wa || 0) + (W0.leader ? (W0.leader.speed || 10) * dts / 2.1 : 0); lead.wheels.forEach(wv => wv.rotation.x = -lead.wa); }
    if (st.lamp && S.lamp) st.lamp.on = S.lamp.on;
    st.darkT = S.dark ? 1 : 0;
    if (st.cps !== S.cps) { if (st.cps >= 0 && S.cps > st.cps) { const cg = (W0.goal || []).find(g => g.k === 'cps'), pt = cg && cg.pts[S.cps - 1]; if (pt) { const at = P3(pt[0], pt[1]); at.y = base; burstSparks(at, 18, '#3CC47C', 26, 10); addRing(at, '#3CC47C', 7, .7); } } st.cps = S.cps; paintMat(S); }
    if (S.hits > st.hits) onBump(S); st.hits = S.hits || 0;
    if (S.sound && S.sound !== st.sound) { st.sound = S.sound; const at = new THREE.Vector3(R.vis.x, R.vis.y + 5, R.vis.z); addSprite(T.note, ['#FFD60A', '#2EE6F0', '#C43BFF', '#FF6B6B'][Math.floor(Math.random() * 4)], at, { s: 2.6, life: 1.3, v: new THREE.Vector3(Math.random() * 4 - 2, 9, Math.random() * 4 - 2), grow: .2 }); }
    if (hard) { st.won = null; st.wonS = S; st.sound = S.sound; clearFx(); }
    // el rastre (una cinta discontínua a terra)
    const tr = S.trail || [], tg = st.trail.geometry, pa = tg.attributes.position.array, ua = tg.attributes.uv.array;
    if (tr !== st.trailRef || tr.length < st.trailN) { st.trailRef = tr; st.trailN = 0; st.trailL = 0; }
    const n = Math.min(tr.length, st.trail.max);
    if (n > st.trailN) { for (let i = Math.max(0, st.trailN - 1); i < n; i++) { const a = tr[Math.max(0, i - 1)], b = tr[Math.min(n - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, nx = -dy / l * .45, ny = dx / l * .45, x = tr[i][0] - W0.w / 2, z = tr[i][1] - W0.h / 2;
        if (i > 0 && i >= st.trailN) st.trailL += Math.hypot(tr[i][0] - tr[i - 1][0], tr[i][1] - tr[i - 1][1]);
        pa.set([x + nx, base + .025, z + ny, x - nx, base + .025, z - ny], i * 6); const u = (i >= st.trailN || i === 0) ? st.trailL / 2.6 : ua[i * 4]; ua.set([u, 0, u, 1], i * 4); }
      st.trailN = n; tg.attributes.position.needsUpdate = true; tg.attributes.uv.needsUpdate = true; }
    tg.setDrawRange(0, Math.max(0, n - 1) * 6); st.trail.visible = n > 1;
    // la pols (aspirador)
    if (st.dust && S.cover && S.cover.size !== st.cover) { st.cover = S.cover.size; const g = st.dust.c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, st.dust.c.width, st.dust.c.height); g.fillStyle = '#000'; for (const k of S.cover) { const [i, j] = k.split(',').map(Number); g.fillRect(i, j, 1, 1); } st.dust.t.needsUpdate = true; }
    renderer.shadowMap.needsUpdate = true;
  }
  // el con: des del davant dels transductors fins on rebota
  const _v = new THREE.Vector3();
  function updateSensors(dt) {
    const S = lastS, d = typeof roboDist === 'function' ? roboDist(st.W, S) : 500, v = R.vis, u = st.cone.material.uniforms; u.uT.value = TT;
    if (d < 500 && !R.fall) { const fx0 = Math.sin(v.h), fz0 = -Math.cos(v.h), L = Math.max(.5, d - .1); st.cone.visible = true; st.cone.position.set(v.x + fx0 * 4.42, v.y + 3.85, v.z + fz0 * 4.42); st.cone.rotation.set(0, -v.h, 0);
      u.uD.value = L; u.uR0.value = 1.25; u.uR1.value = Math.tan(8 * PI / 180) * L + 1.25; cam.getWorldDirection(_v); const ax = Math.abs(_v.x * fx0 + _v.z * fz0) * Math.cos(Math.asin(clamp(-_v.y, -1, 1)));
      u.uA.value = (S.dark ? 1.3 : 1) * (1 - .55 * ax * ax); u.uK.value = composer ? 1.6 : 1;
      // (la geometria va de y −0,5 a 0,5 i el shader la posa al llarg de −z, endavant)
      st.ping.visible = true; st.ping.position.set(v.x + fx0 * (4.42 + L), v.y + 3.85, v.z + fz0 * (4.42 + L)); st.ping.scale.setScalar(2.2 + Math.sin(TT * 9) * .5); }
    else { st.cone.visible = false; st.ping.visible = false; }
  }
  function updateBot(dt) {
    const v = R.vis, t = R.tgt; if (!v || !t) return; const k = damp(38, dt);
    if (Math.abs(t.x - v.x) + Math.abs(t.z - v.z) + Math.abs(angD(v.h, t.h)) > .002) renderer.shadowMap.needsUpdate = true;
    v.x += (t.x - v.x) * k; v.z += (t.z - v.z) * k; v.h += angD(v.h, t.h) * k;
    // caure del dohyo o de la taula
    const S = lastS, W0 = st.W, off = W0.ring ? S.out : !W0.border && (S.x < -1 || S.y < -1 || S.x > W0.w + 1 || S.y > W0.h + 1);
    if (off) { R.fall = Math.min(1, R.fall + dt * 1.8); v.y = st.base - (W0.ring ? 4 : 74) * ease(R.fall); } else { R.fall = 0; v.y = st.base; }
    R.bot.position.set(v.x, v.y, v.z); R.bot.rotation.y = -v.h;
    R.jolt = Math.max(0, R.jolt - dt * 2.6); R.body.rotation.x = R.fall ? R.fall * .9 : Math.sin(R.jolt * 22) * R.jolt * .09; R.body.position.y = R.jolt * .25;
    R.shadow.visible = !R.fall;
    // números que es desplacen per la matriu
    const s = lastS; if (s.mxN != null && String(s.mxN).length > 1) { const off2 = Math.floor((TT - (R.numT0 || 0)) / .13); if (off2 !== R.numOff) { R.numOff = off2; drawMicrobit(R.mbT, null, s.mxN, off2); } }
    // objectes que cauen del dohyo
    for (const O of st.objs) if (O.fall > 0 && O.fall < 1) { O.fall = Math.min(1, O.fall + dt * 2.2); const e = O.fall; O.g.position.y = -(W0.ring ? 4 : 3) * Math.min(1, e * e * 1.6); O.inner.rotation.set(Math.min(PI / 2, e * 2.2) * Math.cos(O.dir || 0), 0, -Math.min(PI / 2, e * 2.2) * Math.sin(O.dir || 0)); renderer.shadowMap.needsUpdate = true; }
    // el focus i la nit (transicions suaus)
    if (st.lamp) { const L0 = st.lamp; L0.k += ((L0.on ? 1 : 0) - L0.k) * damp(8, dt); L0.bulbM.emissiveIntensity = (.2 + 3.2 * L0.k) * GK; L0.pl.intensity = 1400 * L0.k * (1 + st.darkV * .6); L0.gl.material.opacity = .9 * L0.k; L0.pool.material.opacity = .5 * L0.k * (.5 + st.darkV * .6); }
    st.darkV += ((st.darkT || 0) - st.darkV) * damp(3, dt); const n = st.darkV;
    hemi.intensity = hemiBase * (1 - n * .8); sun.intensity = SUNI * (1 - n * .93); scene.environmentIntensity = envBase * (1 - n * .8); scene.backgroundIntensity = BGI * (1 - n * .8); renderer.toneMappingExposure = expBase * (1 - n * .1);
  }

  /* ---- arrossegar per girar la càmera ---- */
  cv.addEventListener('pointerdown', e => { drag.on = true; drag.x = e.clientX; drag.y = e.clientY; drag.y0 = drag.yaw; drag.p0 = drag.pitch; drag.mouse = e.pointerType === 'mouse'; intro.t = -1; try { cv.setPointerCapture(e.pointerId); } catch (er) { } });
  cv.addEventListener('pointermove', e => { if (!drag.on) return; drag.yaw = clamp(drag.y0 - (e.clientX - drag.x) * .006, -1.1, 1.1); if (drag.mouse) drag.pitch = clamp(drag.p0 + (e.clientY - drag.y) * .004, -.45, .4); });
  const up = () => { drag.on = false; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  const ro = new ResizeObserver(() => st && fit()); ro.observe(el);
  let idleN = 0, frames = 0;
  function loop(now) {
    if (!alive) return; if (!el.isConnected) return dispose(); raf = requestAnimationFrame(loop);
    const dtMs = last ? now - last : 16, dt = Math.min(.1, dtMs / 1000); last = now; TT += dt; watch(dtMs);
    if (!drag.on) { drag.yaw *= Math.exp(-dt * 2.2); drag.pitch *= Math.exp(-dt * 2.2); }
    updateBot(dt); updateSensors(dt); updateFx(dt);
    // missió complerta: el confeti (quan la simulació ja ho dona per bo)
    const S = lastS; if (st && st.W.goal && st.W.goal.length && S && S.doneT !== undefined && st.won !== S && st.wonS === S) { if (!st.wonAt) st.wonAt = TT; if (TT - st.wonAt > .2 && (typeof roboEval !== 'function' || !roboEval(st.W, S).length)) { st.won = S; st.wonAt = 0; onWin(); } }
    updateCam(dt);
    // si el robot es veu petit (pantalla petita), un anell suau al voltant perquè es trobi d'una ullada
    if (R && R.vis && fit.h) { _v.set(R.vis.x, R.vis.y + 2, R.vis.z).project(cam); const a0 = _v.y; _v.set(R.vis.x, R.vis.y + 10.5, R.vis.z).project(cam); const px = Math.abs(_v.y - a0) * fit.h / 2, want = R.fall ? 0 : Math.max(clamp((25 - px) / 12, 0, 1), st.darkV * .8) * (.42 + Math.sin(TT * 2.4) * .08); R.halo.material.opacity += (want - R.halo.material.opacity) * damp(4, dt); }
    // en mòbils, si no passa res, a mig ritme
    if (tier === 'low' && !cfP.length && !spP.length && !sprites.length && intro.t < 0 && !drag.on && !(S && (Math.abs(S.vl) > .05 || Math.abs(S.vr) > .05)) && ++idleN % 2) return;
    if (composer) composer.render(dt); else renderer.render(scene, cam); frames++;
  }
  function dispose() { if (!alive) return; alive = false; cancelAnimationFrame(raf); ro.disconnect(); if (world) disposeTree(world); clearFx(); cfG.dispose(); cfM.dispose(); spG.dispose(); envRT.dispose(); if (composer) { composer.dispose(); if (aoPass) aoPass.dispose(); if (bloomPass) bloomPass.dispose(); } renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) { } cv.remove(); vig.remove(); }
  build(W, S); applyTier(); startIntro(); raf = requestAnimationFrame(loop);
  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (alive && st) paintMat(lastS); });
  return {
    sync, dispose,
    setMode(m) { mode = m === 'chase' ? 'chase' : m === 'top' ? 'top' : 'over'; chase.ok = false; intro.t = -1; camS.rate = 2.2; },
    reset(W2, S2) { if (!st || sigOf(W2) !== st.sig) { build(W2, S2); camS.rate = 2; } else { st.W = W2; st.cps = -1; st.hits = S2.hits || 0; sync(S2, true); } },
    snapshot() { if (composer) composer.render(0); else renderer.render(scene, cam); return cv.toDataURL('image/png'); },
    get view() { return st && st.view; }, get quality() { return tier; }, set quality(q) { if (TIERS[q] && (hdrOK || q === "low")) { tier = q; applyTier(); } }
  };
}
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGL2RenderingContext && c.getContext('webgl2')); } catch (e) { return false; } }   // three.js r186 només fa servir WebGL 2
