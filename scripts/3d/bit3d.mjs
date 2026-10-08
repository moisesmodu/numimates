/* ===== Numi Tech · el món d'en Bit en 3D (three.js) =====
   Font del fitxer tech-3d.js (es genera amb `node scripts/3d/build.mjs`; three.js va empaquetat a dins, sense CDN,
   perquè la CSP de l'app només deixa carregar codi del mateix domini).
   · Una illa-diorama en temps real: caselles d'herba amb textura i brins que es mouen amb el vent (i s'aparten quan hi passa
     en Bit), lloses de pedra amb bisell al camí, penya-segat amb estrats, platja, mar amb ones, escuma i reflexos, llum
     d'entorn (cel HDR procedural → PMREM), ombres suaus, arbres, roques, flors i bolets de Kenney (CC0, img/tech/3d/bit/).
   · En Bit: s'aixafa i s'estira quan es mou, gira el cap abans que el cos, salta d'alegria, tremola quan xoca…
   · Partícules (espurnes, pols, esquitxos, fulles, confeti, notes), càmera amb entrada i seguiment suau.
   · Qualitat adaptativa: low / mid / high / ultra (bloom i oclusió ambiental només on l'aparell pot). Es pot forçar amb
     window.BIT3D_Q = 'low' | 'mid' | 'high' | 'ultra', amb ?b3q=… a l'adreça o amb opcions.quality.
   · L'API la fa servir tech-bot.js: Bit3D.create(contenidor, W, S, opcions) → { step, reset, react, fx, marks, dispose, snapshot }.
   · El motor de simulació (on és en Bit, què ha recollit…) és el mateix de sempre (tech-bot.js); aquí només es dibuixa. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const COL = { r: '#EF5A5A', g: '#3CC47C', y: '#FFC531', u: '#3D8BFF', p: '#8B5CF6' };
const rnd = (x, y, k = 0) => { let h = (x * 374761393 + y * 668265263 + k * 2246822519) >>> 0; h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const spring = (s, target, k, c, dt) => { const a = (target - s.x) * k - s.v * c; s.v += a * dt; s.x += s.v * dt; };
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const UT = { value: 0 };   // temps compartit per a l'aigua, el vent i les flors
// rellotge de les animacions (les proves el poden substituir amb window.BIT3D_NOW per fer captures en moments exactes)
const NOW = () => (typeof window !== 'undefined' && window.BIT3D_NOW ? window.BIT3D_NOW() : performance.now());

/* ---------- qualitat ---------- */
const TIERS = ['low', 'mid', 'high', 'ultra'];
const QC = {
  low: { pr: 1, shadow: 1024, sr: 2, post: 0, ao: 0, blades: .35, fx: .5, life: 0 },
  mid: { pr: 1.5, shadow: 1024, sr: 3, post: 0, ao: 0, blades: .75, fx: .8, life: 1 },
  high: { pr: 2, shadow: 2048, sr: 3.5, post: 1, ao: 0, blades: 1, fx: 1, life: 1 },
  ultra: { pr: 2, shadow: 2048, sr: 3.5, post: 1, ao: 1, blades: 1, fx: 1, life: 1 }
};
let GPU = null;
function probeGPU() {
  if (GPU) return GPU;
  GPU = { name: '', sw: false };
  try { const c = document.createElement('canvas'), gl = c.getContext('webgl2'); if (gl) { const e = gl.getExtension('WEBGL_debug_renderer_info'); GPU.name = String(gl.getParameter(e ? e.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || ''); const l = gl.getExtension('WEBGL_lose_context'); if (l) l.loseContext(); } } catch (e) { /* res */ }
  GPU.sw = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(GPU.name);
  return GPU;
}
function pickTier(opt) {
  let forced = opt.quality || (typeof window !== 'undefined' && window.BIT3D_Q);
  try { forced = forced || new URLSearchParams(location.search).get('b3q'); } catch (e) { /* res */ }
  if (TIERS.includes(forced)) return { tier: forced, forced: true };
  const nav = navigator, cores = nav.hardwareConcurrency || 4, mem = nav.deviceMemory || 4, ua = nav.userAgent || '';
  const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (nav.maxTouchPoints > 1 && /Macintosh/.test(ua)) || (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 900);
  const tier = probeGPU().sw ? 'low' : mobile ? (cores <= 4 || mem <= 2 ? 'low' : 'mid') : (cores <= 2 || mem <= 2 ? 'mid' : cores >= 8 ? 'ultra' : 'high');
  return { tier, forced: false };
}

/* ---------- materials, geometries i textures compartits (també els fan servir diorama.mjs i scenes3d.mjs) ---------- */
let M = null;
export function mats() {
  if (M) return M;
  const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .85, metalness: 0, ...o });
  const toy = (c, o = {}) => new THREE.MeshPhysicalMaterial({ color: c, roughness: .34, metalness: 0, clearcoat: .7, clearcoatRoughness: .2, ...o });
  M = {
    grassA: std('#8FD36C'), grassB: std('#84CB61'), grassSide: std('#6DB24C'), dirt: std('#A86E3E'), dirt2: std('#8E5A31'), dirt3: std('#74462A'),
    sand: std('#F3DDA6'), sandSide: std('#DDBA7A'), water: new THREE.MeshStandardMaterial({ color: '#43B3EC', roughness: .15, metalness: .1, transparent: true, opacity: .88 }),
    sea: new THREE.MeshStandardMaterial({ color: '#FFFFFF', vertexColors: true, roughness: .2, metalness: .05, flatShading: true }),
    trunk: std('#8A5A33', { flatShading: true }), leaf1: std('#4FAE45', { flatShading: true }), leaf2: std('#62C152', { flatShading: true }), leaf3: std('#3D9A3A', { flatShading: true }),
    fruit: std('#FF6B5B', { roughness: .5 }), rock: std('#A3ABBD', { flatShading: true }), rock2: std('#8A93A8', { flatShading: true }), moss: std('#7DBB55', { flatShading: true }),
    wall: std('#FFF4DF', { roughness: .9 }), roof: std('#E2574C', { flatShading: true, roughness: .7 }), roofD: std('#B83F37', { roughness: .7 }), door: std('#B07A3E'), win: std('#9ED3F2', { roughness: .15, metalness: .1 }),
    winOn: new THREE.MeshStandardMaterial({ color: '#FFE27A', emissive: '#FFB52E', emissiveIntensity: 1.6 }), frame: std('#FFFFFF', { roughness: .6 }),
    chimney: std('#B05A3C'), wood: std('#D29A5A'), woodD: std('#A86A33'), tape: std('#F6DCA8'),
    gold: new THREE.MeshPhysicalMaterial({ color: '#FFD23A', emissive: '#FFB000', emissiveIntensity: .6, roughness: .2, metalness: .45, clearcoat: 1, clearcoatRoughness: .08 }),
    pole: std('#5B4636', { roughness: .6 }), flag: new THREE.MeshStandardMaterial({ color: '#EF5A5A', side: THREE.DoubleSide, roughness: .75 }), flagOk: new THREE.MeshStandardMaterial({ color: '#3CC47C', side: THREE.DoubleSide, roughness: .75, emissive: '#1F8A50', emissiveIntensity: .25 }),
    stone: std('#9AA1B2', { flatShading: true }),
    body: toy('#F4F7FF'), bodyB: toy('#D3DFFF', { roughness: .4 }),
    visor: new THREE.MeshPhysicalMaterial({ color: '#111B44', roughness: .08, metalness: .2, clearcoat: 1, clearcoatRoughness: .04 }),
    eye: new THREE.MeshStandardMaterial({ color: '#8DF5FF', emissive: '#4FE6FF', emissiveIntensity: 1.9 }),
    wheel: std('#253052', { roughness: .72 }), hub: new THREE.MeshStandardMaterial({ color: '#AEB9DA', roughness: .28, metalness: .7 }), arm: toy('#20306A', { roughness: .45 }),
    hand: new THREE.MeshPhysicalMaterial({ color: '#FFC531', roughness: .32, metalness: .15, clearcoat: .8 }),
    flower: [std('#FF8FB1'), std('#FFFFFF'), std('#FFD54A'), std('#B79CFF')], flowerC: std('#F5A623'), tuft: std('#5FA841', { flatShading: true })
  };
  return M;
}
const G = {};   // geometries compartides
export function geos() {
  if (G.tile) return G;
  G.tile = new RoundedBoxGeometry(.96, .5, .96, 2, .06); G.sandTile = new RoundedBoxGeometry(.94, .5, .94, 2, .08);
  G.cyl = new THREE.CylinderGeometry(1, 1, 1, 12); G.ico = new THREE.IcosahedronGeometry(1, 1); G.dode = new THREE.DodecahedronGeometry(1, 0);
  G.box = new THREE.BoxGeometry(1, 1, 1); G.sph = new THREE.SphereGeometry(1, 18, 12); G.cone4 = new THREE.ConeGeometry(1, 1, 4); G.cone = new THREE.ConeGeometry(1, 1, 5);
  const s = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? .1 : .23; i ? s.lineTo(Math.cos(a) * r, Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, Math.sin(a) * r); } s.closePath();
  G.star = new THREE.ExtrudeGeometry(s, { depth: .07, bevelEnabled: true, bevelThickness: .03, bevelSize: .025, bevelSegments: 2 }); G.star.center();
  G.rbox = new RoundedBoxGeometry(1, 1, 1, 2, .07);
  G.grassTile = new RoundedBoxGeometry(.97, .24, .97, 2, .055).translate(0, -.12, 0);
  G.stoneTile = new RoundedBoxGeometry(.88, .16, .88, 2, .05).translate(0, -.08, 0);
  G.plane = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  // un bri d'herba: tira estreta que s'arqueja una mica (alçada 1, s'escala per instància)
  { const W = [.5, .4, .24], Y = [0, .4, .75], P = [], N = [], I = [];
    for (let i = 0; i < 3; i++) { const z = .18 * Y[i] * Y[i]; P.push(-W[i], Y[i], z, W[i], Y[i], z); N.push(0, .92, .38, 0, .92, .38); }
    P.push(0, 1, .18); N.push(0, .92, .38); I.push(0, 1, 2, 1, 3, 2, 2, 3, 4, 3, 5, 4, 4, 5, 6);
    G.blade = new THREE.BufferGeometry(); G.blade.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); G.blade.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); G.blade.setIndex(I); }
  Object.values(G).forEach(g => { g.userData.shared = true; });
  return G;
}
const mesh = (g, m, o = {}) => { const x = new THREE.Mesh(g, m); x.castShadow = o.cast !== false; x.receiveShadow = !!o.recv; if (o.p) x.position.set(...o.p); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); if (o.r) x.rotation.set(...o.r); return x; };
function canvasTex(w, h, draw, o = {}) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = o.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace; t.anisotropy = 4; if (o.wrap) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.userData.shared = true; return t; }
// dibuixa una cosa repetida a les vores (per a textures que fan mosaic sense costures)
const wrapDraw = (w, h, x, y, r, f) => { for (const dx of [-w, 0, w]) for (const dy of [-h, 0, h]) if (x + dx > -r && x + dx < w + r && y + dy > -r && y + dy < h + r) f(x + dx, y + dy); };
let TEX = null;
export function texs() {
  if (TEX) return TEX;
  const R = (() => { let s = 7; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; })();
  TEX = {
    crate: canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#D29A5A'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 42) { g.fillStyle = ['#D8A363', '#CB914F', '#D49C5B'][y / 42 % 3]; g.fillRect(0, y, w, 40); g.fillStyle = 'rgba(122,74,30,.55)'; g.fillRect(0, y + 40, w, 2);
        for (let i = 0; i < 14; i++) { g.strokeStyle = `rgba(140,86,40,${.12 + R() * .18})`; g.lineWidth = 1 + R(); g.beginPath(); const yy = y + 4 + R() * 32; g.moveTo(0, yy); g.bezierCurveTo(w * .3, yy + (R() - .5) * 6, w * .7, yy + (R() - .5) * 6, w, yy + (R() - .5) * 4); g.stroke(); } }
      g.strokeStyle = '#7A4A1E'; g.lineWidth = 22; g.strokeRect(11, 11, w - 22, h - 22); g.strokeStyle = '#9A6430'; g.lineWidth = 3; g.strokeRect(22, 22, w - 44, h - 44);
      g.save(); g.translate(w / 2, h / 2); g.rotate(Math.PI / 4); g.fillStyle = '#8A5626'; g.fillRect(-w * .7, -12, w * 1.4, 24); g.restore();
      g.fillStyle = '#5A3A1A'; for (const [x, y] of [[11, 11], [w - 11, 11], [11, h - 11], [w - 11, h - 11]]) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
    }),
    glow: canvasTex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,230,128,.9)'); r.addColorStop(1, 'rgba(255,230,128,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    dot: canvasTex(32, 32, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.6, 'rgba(255,255,255,.8)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    check: canvasTex(64, 64, (g) => { g.fillStyle = '#3CC47C'; g.beginPath(); g.arc(32, 32, 28, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 5; g.stroke(); g.lineWidth = 7; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(19, 33); g.lineTo(28, 42); g.lineTo(45, 23); g.stroke(); }),
    // ombra de contacte (fals AO sota arbres, roques, cases i en Bit)
    blob: canvasTex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(0,0,0,.62)'); r.addColorStop(.45, 'rgba(0,0,0,.34)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    // herba vista de dalt: taques i brins curts de molts verds (fa mosaic)
    grass: canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#86C95C'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 46; i++) { const x = R() * w, y = R() * h, r = 14 + R() * 40, c = R() < .5 ? '95,166,62' : '160,214,104'; wrapDraw(w, h, x, y, r, (a, b) => { const gr = g.createRadialGradient(a, b, 0, a, b, r); gr.addColorStop(0, `rgba(${c},.32)`); gr.addColorStop(1, `rgba(${c},0)`); g.fillStyle = gr; g.fillRect(a - r, b - r, r * 2, r * 2); }); }
      const C = ['#5FA83F', '#9AD86A', '#71BA4C', '#B2E37F', '#4E9636', '#7FC556'];
      g.lineCap = 'round';
      for (let i = 0; i < 2600; i++) { const x = R() * w, y = R() * h, l = 2.5 + R() * 6, a = R() * Math.PI * 2; g.strokeStyle = C[i % C.length]; g.globalAlpha = .35 + R() * .4; g.lineWidth = .8 + R() * 1.1; wrapDraw(w, h, x, y, 8, (p, q) => { g.beginPath(); g.moveTo(p, q); g.lineTo(p + Math.cos(a) * l, q + Math.sin(a) * l); g.stroke(); }); }
      g.globalAlpha = .55; for (let i = 0; i < 70; i++) { const x = R() * w, y = R() * h; g.fillStyle = R() < .5 ? '#D3F2A2' : '#5B9B3A'; wrapDraw(w, h, x, y, 3, (p, q) => { g.beginPath(); g.arc(p, q, 1 + R() * 1.4, 0, 7); g.fill(); }); }
      g.globalAlpha = 1;
    }, { wrap: true }),
    // pedra sorrenca de les lloses del camí: gra, taques i alguna esquerda
    stone: canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#E8D5AA'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 40; i++) { const x = R() * w, y = R() * h, r = 12 + R() * 46, c = R() < .55 ? '196,170,120' : '250,238,206'; wrapDraw(w, h, x, y, r, (a, b) => { const gr = g.createRadialGradient(a, b, 0, a, b, r); gr.addColorStop(0, `rgba(${c},.34)`); gr.addColorStop(1, `rgba(${c},0)`); g.fillStyle = gr; g.fillRect(a - r, b - r, r * 2, r * 2); }); }
      for (let i = 0; i < 4200; i++) { const x = R() * w, y = R() * h; g.fillStyle = ['#CDB283', '#F4E7C6', '#BFA273', '#E0C997', '#A98D60'][i % 5]; g.globalAlpha = .25 + R() * .45; g.fillRect(x, y, 1 + R() * 1.3, 1 + R() * 1.3); }
      g.globalAlpha = .45; g.strokeStyle = '#9C8058'; g.lineWidth = 1;
      for (let i = 0; i < 7; i++) { let x = R() * w, y = R() * h; const pts = [[x, y]]; let a = R() * 6.3; for (let k = 0; k < 7; k++) { a += (R() - .5) * 1.2; x += Math.cos(a) * 7; y += Math.sin(a) * 7; pts.push([x, y]); } for (const [dx, dy] of [[0, 0], [-w, 0], [w, 0], [0, -h], [0, h]]) { g.beginPath(); pts.forEach(([p, q], k) => k ? g.lineTo(p + dx, q + dy) : g.moveTo(p + dx, q + dy)); g.stroke(); } }
      g.globalAlpha = 1;
    }, { wrap: true }),
    // ombres de núvols (es multipliquen sobre el que hi ha a sota): blanc amb taques grises molt suaus
    cloud: canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#fff'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 9; i++) { const x = R() * w, y = R() * h; for (let k = 0; k < 5; k++) { const a = x + (R() - .5) * 60, b = y + (R() - .5) * 40, r = 26 + R() * 34; wrapDraw(w, h, a, b, r, (p, q) => { const gr = g.createRadialGradient(p, q, 0, p, q, r); gr.addColorStop(0, 'rgba(120,135,160,.16)'); gr.addColorStop(1, 'rgba(120,135,160,0)'); g.fillStyle = gr; g.fillRect(p - r, q - r, r * 2, r * 2); }); } } }, { wrap: true }),
    sand: canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#F6E1B0'; g.fillRect(0, 0, w, h); for (let i = 0; i < 2200; i++) { g.fillStyle = ['#E3C690', '#FFF3D6', '#D8B57E', '#EED4A0'][i % 4]; g.globalAlpha = .3 + R() * .5; g.fillRect(R() * w, R() * h, 1, 1); } g.globalAlpha = 1; }, { wrap: true }),
    // atles de partícules (8 formes blanques): 0 punt suau · 1 espurna · 2 cor · 3 confeti · 4 nota · 5 fulla · 6 gota · 7 anella
    atlas: canvasTex(512, 64, (g) => {
      const cell = (i, f) => { g.save(); g.translate(i * 64 + 32, 32); f(); g.restore(); };
      const rg = (r0, r1, a0) => { const r = g.createRadialGradient(0, 0, r0, 0, 0, r1); r.addColorStop(0, `rgba(255,255,255,${a0})`); r.addColorStop(1, 'rgba(255,255,255,0)'); return r; };
      cell(0, () => { g.fillStyle = rg(0, 30, 1); g.fillRect(-32, -32, 64, 64); });
      cell(1, () => { g.fillStyle = rg(0, 20, .9); g.fillRect(-32, -32, 64, 64); g.fillStyle = '#fff'; for (const r of [0, Math.PI / 2]) { g.save(); g.rotate(r); g.beginPath(); g.moveTo(-30, 0); g.quadraticCurveTo(0, -3, 30, 0); g.quadraticCurveTo(0, 3, -30, 0); g.fill(); g.restore(); } g.beginPath(); g.arc(0, 0, 5, 0, 7); g.fill(); });
      cell(2, () => { g.fillStyle = '#fff'; g.beginPath(); g.moveTo(0, 22); g.bezierCurveTo(-34, -2, -18, -30, 0, -12); g.bezierCurveTo(18, -30, 34, -2, 0, 22); g.fill(); });
      cell(3, () => { g.fillStyle = '#fff'; g.beginPath(); g.roundRect ? g.roundRect(-16, -9, 32, 18, 4) : g.rect(-16, -9, 32, 18); g.fill(); });
      cell(4, () => { g.fillStyle = '#fff'; g.font = '900 50px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('♪', 0, 2); });
      cell(5, () => { g.fillStyle = '#fff'; g.beginPath(); g.moveTo(-26, 0); g.quadraticCurveTo(0, -20, 26, 0); g.quadraticCurveTo(0, 20, -26, 0); g.fill(); });
      cell(6, () => { g.fillStyle = rg(8, 18, 1); g.beginPath(); g.arc(0, 0, 18, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(0, 0, 11, 0, 7); g.fill(); });
      cell(7, () => { g.strokeStyle = '#fff'; g.lineWidth = 4; g.beginPath(); g.arc(0, 0, 26, 0, 7); g.stroke(); });
    })
  };
  return TEX;
}
const markTex = (k, on) => canvasTex(128, 128, (g) => {
  g.fillStyle = 'rgba(16,24,64,.28)'; g.beginPath(); g.arc(64, 70, 54, 0, 7); g.fill();
  const gr = g.createLinearGradient(0, 10, 0, 118); gr.addColorStop(0, on ? '#FFE07A' : '#FFFFFF'); gr.addColorStop(1, on ? '#FFB21F' : '#E6ECFF'); g.fillStyle = gr; g.beginPath(); g.arc(64, 62, 52, 0, 7); g.fill();
  g.lineWidth = 8; g.strokeStyle = '#20306A'; g.stroke(); g.fillStyle = '#20306A'; g.font = '900 68px Lexend, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(k, 64, 67);
});

/* ---------- peces de Kenney (img/tech/3d/bit/nature.glb, ~75 kB, es baixa la primera vegada que es fa servir el món) ---------- */
const PACK_URL = (() => { try { return new URL('img/tech/3d/bit/nature.glb', import.meta.url).href; } catch (e) { return 'img/tech/3d/bit/nature.glb'; } })();
let PK = null, PKP = null, PKF = false;
function parsePack(buf) {
  const dv = new DataView(buf); if (dv.getUint32(0, true) !== 0x46546C67) throw new Error('glb');
  const jl = dv.getUint32(12, true), J = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 20, jl))), bo = 20 + jl + 8, out = {};
  const acc = i => { const a = J.accessors[i], v = J.bufferViews[a.bufferView], o = bo + (v.byteOffset || 0) + (a.byteOffset || 0);
    if (a.componentType === 5122) { const st = (v.byteStride || 6) / 2, src = new Int16Array(buf, o, (a.count - 1) * st + 3), r = new Float32Array(a.count * 3); for (let k = 0; k < a.count; k++) for (let c = 0; c < 3; c++) r[k * 3 + c] = Math.max(-1, src[k * st + c] / 32767); return r; }
    return a.componentType === 5125 ? new Uint32Array(buf.slice(o, o + a.count * 4)) : new Uint16Array(buf.slice(o, o + a.count * 2)); };
  for (const nd of J.nodes) {
    const t = nd.translation || [0, 0, 0], s = nd.scale || [1, 1, 1], parts = [];
    for (const p of J.meshes[nd.mesh].primitives) {
      const q = acc(p.attributes.POSITION); for (let k = 0; k < q.length; k += 3) { q[k] = q[k] * s[0] + t[0]; q[k + 1] = q[k + 1] * s[1] + t[1]; q[k + 2] = q[k + 2] * s[2] + t[2]; }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(q, 3)); g.setIndex(new THREE.BufferAttribute(acc(p.indices), 1)); g.computeVertexNormals(); g.computeBoundingSphere(); g.userData.shared = true;
      parts.push({ g, name: (J.materials[p.material] || {}).name || '_defaultMat' });
    }
    out[nd.name] = { parts, h: t[1] + s[1], r: Math.max(s[0], s[2]) };
  }
  return out;
}
export function preload() {
  return PKP || (PKP = (typeof fetch === 'function' ? fetch(PACK_URL) : Promise.reject(new Error('fetch'))).then(r => r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.status))).then(b => (PK = parsePack(b))).catch(() => { PK = null; PKF = true; return null; }));
}
// es comença a baixar tan bon punt es carrega el mòdul (el mòdul ja només es carrega quan cal el món 3D)
if (typeof window !== 'undefined' && typeof document !== 'undefined') setTimeout(() => { preload(); }, 0);
// els materials de Kenney són pastel; aquí els fem vius (la mateixa paleta que els dioramas)
const PAL = { grass: '#7CCB52', dirt: '#C98450', leafsGreen: '#4FB244', leafsDark: '#2F8F45', leafsFall: '#F29A2E', woodBark: '#8A5532', woodBarkDark: '#6B4430', wood: '#C9935A', woodInner: '#F0D2A2',
  stone: '#C3C9D4', colorRed: '#EF4F4F', colorPurple: '#9B6CF2', colorYellow: '#FFC531', colorWhite: '#FFF9EE', colorTan: '#E9C48E', _defaultMat: '#FFFFFF' };
const PMC = {};
// sway: quant es gronxa amb el vent (proporcional a l'alçada²), per a arbres, flors i herba
function swayPatch(m, amp, key) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = UT; sh.uniforms.uSway = { value: amp };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime, uSway;').replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 sroot = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
      #else
        vec2 sroot = vec2(modelMatrix[3][0], modelMatrix[3][2]);
      #endif
      float sph = sroot.x * 1.31 + sroot.y * 1.73, sy = max(position.y, 0.);
      transformed.xz += vec2(sin(uTime * 1.25 + sph) + .35 * sin(uTime * 2.7 + sph * 2.), sin(uTime * .97 + sph * 1.4 + 1.3)) * uSway * sy * sy;`);
  };
  m.customProgramCacheKey = () => 'bsway' + key;
  return m;
}
function packMat(name, sway) {
  const k = name + '|' + sway;
  if (PMC[k]) return PMC[k];
  const col = PAL[name] || '#FFFFFF', m = new THREE.MeshStandardMaterial({ name, color: col, roughness: name.startsWith('stone') ? .72 : .86, metalness: 0, flatShading: true });
  if (sway) { swayPatch(m, sway, 'm'); const d = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }); swayPatch(d, sway, 'd'); m.userData.depth = d; }
  return (PMC[k] = m);
}
// posa moltes còpies de peces de Kenney amb una InstancedMesh per peça i material (poques crides de dibuix)
const DUMMY = new THREE.Object3D(), TINT = new THREE.Color();
function scatter(list, parent) {
  const by = {};
  for (const it of list) if (PK && PK[it.n]) (by[it.n] = by[it.n] || []).push(it);
  for (const [n, arr] of Object.entries(by)) {
    for (const part of PK[n].parts) {
      const sw = arr[0].sway || 0, im = new THREE.InstancedMesh(part.g, packMat(part.name, sw), arr.length), tintable = /^(leafs|grass)/.test(part.name);
      const anyT = arr.some(a => a.tint || a.tintAll);
      arr.forEach((it, i) => {
        DUMMY.position.set(it.x, it.y, it.z); DUMMY.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0); DUMMY.scale.setScalar(it.s || 1); DUMMY.updateMatrix(); im.setMatrixAt(i, DUMMY.matrix);
        if (anyT) im.setColorAt(i, (tintable && it.tint) || it.tintAll || TINT.set(1, 1, 1));
      });
      if (im.material.userData.depth) im.customDepthMaterial = im.material.userData.depth;
      im.castShadow = arr[0].cast !== false; im.receiveShadow = true; im.computeBoundingSphere(); parent.add(im);
    }
  }
}

/* ---------- pegats de shaders ---------- */
// textura en coordenades del món (XZ): cada casella mostra un tros diferent; les cares de costat, més fosques
function worldUV(m, scale, key, side = .7) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uWS = { value: scale }; sh.uniforms.uSide = { value: side };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vWXZ; varying float vUp;').replace('#include <begin_vertex>', `#include <begin_vertex>
      { vec4 w4 = vec4(transformed, 1.), n4 = vec4(objectNormal, 0.);
        #ifdef USE_INSTANCING
          w4 = instanceMatrix * w4; n4 = instanceMatrix * n4;
        #endif
        vWXZ = (modelMatrix * w4).xz; vUp = normalize((modelMatrix * n4).xyz).y; }`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vWXZ; varying float vUp; uniform float uWS, uSide;').replace('#include <map_fragment>', `#ifdef USE_MAP
        diffuseColor *= texture2D(map, vWXZ * uWS);
      #endif
      diffuseColor.rgb *= mix(uSide, 1., smoothstep(.25, .85, vUp));`);
  };
  m.customProgramCacheKey = () => 'bwuv' + key;
  return m;
}
const GLSL_NOISE = `
  float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h21(i), h21(i + vec2(1., 0.)), f.x), mix(h21(i + vec2(0., 1.)), h21(i + vec2(1., 1.)), f.x), f.y); }`;
// el mar (i els estanys): color segons la distància a la costa, càustiques, escuma a la vora, línies d'onada, espurnes
function waterMat(U) {
  const m = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: .07, metalness: 0 });
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, U, { uTime: UT });
    const pars = `uniform float uTime, uDMax, uQ, uWave; uniform sampler2D uDist; uniform vec4 uBox; uniform vec3 uDeep, uMid, uShal, uSand, uFoamC; varying vec3 vWp; varying float vWa;
      float wv(vec2 p){ float t = uTime; return .028 * sin(p.x * .8 + t * 1.15) + .022 * sin(p.y * 1.05 - t * .95 + p.x * .35) + .010 * sin((p.x - p.y) * 2.1 + t * 1.8); }
      vec2 wvg(vec2 p){ float t = uTime, a = .0224 * cos(p.x * .8 + t * 1.15), b = .022 * cos(p.y * 1.05 - t * .95 + p.x * .35), c = .021 * cos((p.x - p.y) * 2.1 + t * 1.8); return vec2(a + b * .35 + c, b * 1.05 - c); }
      float wdist(vec2 p){ return texture2D(uDist, (p - uBox.xy) * uBox.zw + .5).r; }` + GLSL_NOISE;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\n' + pars).replace('#include <begin_vertex>', `#include <begin_vertex>
      vWa = smoothstep(.0, 1.3, wdist(position.xz)) * uWave;
      transformed.y += wv(position.xz) * vWa;
      vWp = transformed;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\n' + pars + `
      vec2 det(vec2 p){ float t = uTime; vec2 g = vec2(0.);
        g += vec2(.6, .8) * cos(dot(p, vec2(.6, .8)) * 6.3 + t * 2.1) * .05;
        g += vec2(-.7, .7) * cos(dot(p, vec2(-.7, .7)) * 8.7 - t * 2.6) * .04;
        g += vec2(.95, -.3) * cos(dot(p, vec2(.95, -.3)) * 12.1 + t * 3.1) * .03;
        g += vec2(-.2, -.98) * cos(dot(p, vec2(-.2, -.98)) * 15.3 - t * 3.7) * .02; return g; }
      float caus(vec2 p, float t){ vec2 q = mod(p * 1.6, 6.2832) - 250., i = q; float c = 1., k = .005;
        for (int n = 0; n < 3; n++) { float tt = t * .45 * (1. - 3.5 / float(n + 1)); i = q + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x)); c += 1. / length(vec2(q.x / (sin(i.x + tt) / k), q.y / (cos(i.y + tt) / k))); }
        c /= 3.; c = 1.17 - pow(c, 1.4); return clamp(pow(abs(c), 8.), 0., 1.); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 wp2 = vWp.xz; float wd = wdist(wp2), wn = vn(wp2 * 2.3 + vec2(uTime * .07, -uTime * .05));
        float wsh = 1. - smoothstep(0., 2.3, wd);
        vec3 wc = mix(uMid, uShal, wsh * wsh); wc = mix(wc, uDeep, smoothstep(2., 6.5, wd)); wc = mix(wc, uSand, (1. - smoothstep(0., .3, wd)) * .55);
        if (uQ > .5) wc += vec3(.85, 1., 1.) * caus(wp2, uTime) * (1. - smoothstep(.15, 2.2, wd)) * .22;
        float rim = 1. - smoothstep(.015, .085 + .06 * wn + .03 * sin(uTime * 1.7 + wp2.x * 1.3 + wp2.y), wd);
        float pond = step(-.5, vWp.y);
        if (pond > .5) { wc = mix(uShal, mix(uMid, uDeep, .35), smoothstep(.02, .42, wd)); rim *= .8; }
        float ld = (wd - uTime * .16) / .8, lf = abs(fract(ld) - .5) * .8;
        float ln = (1. - pond) * (1. - smoothstep(.007, .02, lf)) * smoothstep(.18, .42, wd) * (1. - smoothstep(1.3, 2.8, wd)) * smoothstep(.36, .6, vn(wp2 * 1.2 + floor(ld) * 3.7));
        float foam = clamp(rim + ln * .7, 0., 1.);
        diffuseColor.rgb = mix(wc, uFoamC, foam);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, .9, foam);')
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>
        { vec2 gr = wvg(wp2) * vWa + (uQ > .5 ? det(wp2) * (.3 + .7 * smoothstep(.05, .9, wd)) : vec2(0.)); normal = normalize((viewMatrix * vec4(normalize(vec3(-gr.x, 1., -gr.y)), 0.)).xyz); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { vec2 gq = wp2 * vec2(.9, 1.2) + vec2(uTime * .03, 0.), gc = floor(gq), gf = fract(gq) - .5; float gh = h21(gc);
          gf -= (vec2(h21(gc + 3.1), h21(gc + 7.3)) - .5) * .5;
          float gl = (1. - smoothstep(.6, 1., length(vec2(gf.x / .11, gf.y / .02)))) * step(.58, gh) * pow(max(0., sin(uTime * (.7 + gh) + gh * 30.)), 3.) * smoothstep(.45, 1.3, wd);
          // Fresnel: com més rasant es mira l'aigua, més reflecteix el cel
          float fr = pow(1. - clamp(dot(normal, normalize(vViewPosition)), 0., 1.), 5.);
          totalEmissiveRadiance += uFoamC * foam * .2 + vec3(1.) * gl * 1.5 * uQ + vec3(.55, .78, 1.) * fr * (1. - foam) * .55; }`);
  };
  m.customProgramCacheKey = () => 'bwater1';
  return m;
}
// brins d'herba: vent i s'aparten quan hi passa en Bit
function bladeMat(U) {
  const m = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: .82, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, U, { uTime: UT });
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform vec3 uBit; varying float vH;').replace('#include <project_vertex>', `
      vec4 bw = vec4(transformed, 1.); vec2 root = vec2(0.);
      #ifdef USE_INSTANCING
        bw = instanceMatrix * bw; root = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
      #endif
      bw = modelMatrix * bw;
      float hh = position.y, ph = root.x * 1.9 + root.y * 1.3;
      vec2 wnd = vec2(sin(uTime * 1.7 + ph) + .5 * sin(uTime * 2.9 + ph * 2.1), cos(uTime * 1.3 + ph * .7)) * .02 + vec2(.012, .006);
      vec2 dv = root - uBit.xy; float dl = length(dv), tr = (1. - smoothstep(.12, .42, dl)) * uBit.z;
      bw.xz += (wnd + dv / max(dl, .001) * tr * .1) * hh * hh; bw.y -= tr * .05 * hh;
      vec4 mvPosition = viewMatrix * bw; gl_Position = projectionMatrix * mvPosition; vH = hh;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vH;').replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= mix(.62, 1.16, vH);')
      .replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\nnormal = normalize(vNormal);');
  };
  m.customProgramCacheKey = () => 'bblade1';
  return m;
}

/* ---------- cel HDR procedural (llum d'entorn i reflexos, sense baixar res) ---------- */
function skyEnv(renderer) {
  const w = 128, h = 64, d = new Uint16Array(w * h * 4), toH = THREE.DataUtils.toHalfFloat;
  const zen = new THREE.Color('#3F8FE6'), hor = new THREE.Color('#D4F0FF'), gnd = new THREE.Color('#4E9C9A'), sunC = new THREE.Color('#FFF0D6'), c = new THREE.Color();
  const sd = new THREE.Vector3(-.55, .62, .56).normalize(), v = new THREE.Vector3();
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const lat = ((j + .5) / h - .5) * Math.PI, ph = ((i + .5) / w - .5) * Math.PI * 2; v.set(Math.cos(lat) * Math.cos(ph), Math.sin(lat), Math.cos(lat) * Math.sin(ph));
    if (v.y >= 0) c.copy(hor).lerp(zen, Math.pow(v.y, .5)).multiplyScalar(1.25); else c.copy(hor).lerp(gnd, Math.min(1, -v.y * 4)).multiplyScalar(.55);
    const s = Math.max(0, v.dot(sd)); c.r += sunC.r * (Math.pow(s, 400) * 60 + Math.pow(s, 10) * .9); c.g += sunC.g * (Math.pow(s, 400) * 60 + Math.pow(s, 10) * .9); c.b += sunC.b * (Math.pow(s, 400) * 60 + Math.pow(s, 10) * .9);
    const o = (j * w + i) * 4; d[o] = toH(c.r); d[o + 1] = toH(c.g); d[o + 2] = toH(c.b); d[o + 3] = toH(1);
  }
  const t = new THREE.DataTexture(d, w, h, THREE.RGBAFormat, THREE.HalfFloatType); t.mapping = THREE.EquirectangularReflectionMapping; t.magFilter = t.minFilter = THREE.LinearFilter; t.needsUpdate = true;
  const pm = new THREE.PMREMGenerator(renderer), env = pm.fromEquirectangular(t).texture; pm.dispose(); t.dispose(); return env;
}

/* ---------- En Bit ---------- */
export function makeBit() {
  const m = mats(), g = geos(), t = texs(), bit = new THREE.Group(), body = new THREE.Group(); bit.add(body);
  // cos arrodonit amb una franja, el panell del pit i el llum
  body.add(mesh(new RoundedBoxGeometry(.46, .3, .4, 4, .12), m.body, { p: [0, .32, 0] }));
  body.add(mesh(new RoundedBoxGeometry(.48, .06, .42, 2, .03), m.bodyB, { p: [0, .2, 0] }));
  body.add(mesh(new RoundedBoxGeometry(.2, .12, .03, 2, .02), m.visor, { p: [0, .34, .195] }));
  const led = new THREE.Mesh(g.sph, new THREE.MeshStandardMaterial({ color: '#FFC531', emissive: '#FFB000', emissiveIntensity: 1.5 })); led.scale.set(.05, .05, .02); led.position.set(0, .34, .212);
  body.add(led);
  const ledGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.dot, color: '#FFC531', transparent: true, opacity: .5, depthWrite: false, blending: THREE.AdditiveBlending })); ledGlow.scale.setScalar(.2); ledGlow.position.set(0, .34, .23); body.add(ledGlow);
  // rodes grans als costats (pneumàtic, llanta metàl·lica i tapa)
  const tire = s => mergeGeometries([new THREE.TorusGeometry(.11, .045, 12, 28).rotateY(Math.PI / 2), ...[0, 1, 2].map(i => new THREE.BoxGeometry(.012, .016, .05).rotateX(i * 2.09).translate(s * .028, Math.cos(i * 2.09) * .055, Math.sin(i * 2.09) * .055))].map(x => x.toNonIndexed()));
  const wheels = [-1, 1].map(s => { const w = new THREE.Group(); w.position.set(s * .25, .15, 0);
    w.add(mesh(tire(s), m.wheel), mesh(g.cyl, m.hub, { s: [.09, .05, .09], r: [0, 0, Math.PI / 2], cast: false }), mesh(g.cyl, m.bodyB, { p: [s * .03, 0, 0], s: [.035, .02, .035], r: [0, 0, Math.PI / 2], cast: false }));
    body.add(w); return w; });
  // braços curts, una mica cap endavant
  const arms = [-1, 1].map(s => { const a = new THREE.Group(); a.position.set(s * .24, .38, .02);
    a.add(mesh(new THREE.CapsuleGeometry(.04, .08, 4, 10), m.arm, { p: [s * .04, -.04, .02], r: [.3, 0, s * .7] }), mesh(g.sph, m.hand, { p: [s * .1, -.08, .05], s: .058 }));
    body.add(a); return a; });
  // cap gran amb pantalla, ulls i somriure
  const head = new THREE.Group(); head.position.set(0, .66, 0);
  head.add(mesh(new RoundedBoxGeometry(.6, .44, .5, 5, .17), m.body));
  head.add(mesh(new RoundedBoxGeometry(.48, .3, .05, 4, .07), m.visor, { p: [0, .01, .235] }));
  const eyes = new THREE.Group(); eyes.position.set(0, .04, .265);
  const eyeG = new THREE.CapsuleGeometry(.045, .05, 6, 12);
  const eL = new THREE.Mesh(eyeG, m.eye), eR = new THREE.Mesh(eyeG, m.eye); eL.position.x = -.11; eR.position.x = .11;
  const shine = new THREE.Mesh(g.sph, new THREE.MeshBasicMaterial({ color: '#FFFFFF' })); shine.scale.setScalar(.016); shine.position.set(.015, .03, .045);
  eL.add(shine.clone()); eR.add(shine.clone()); eyes.add(eL, eR); head.add(eyes);
  // ulls d'alegria (∩) i de tristesa (∪)
  const arcG = new THREE.TorusGeometry(.045, .016, 6, 16, Math.PI), joy = new THREE.Group(), sad = new THREE.Group();
  [-.11, .11].forEach(x => { const a = new THREE.Mesh(arcG, m.eye); a.position.set(x, .04, .265); joy.add(a); const b = new THREE.Mesh(arcG, m.eye); b.rotation.z = Math.PI; b.position.set(x, .06, .265); sad.add(b); });
  joy.visible = sad.visible = false; head.add(joy, sad);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(.045, .011, 6, 16, Math.PI), m.eye); smile.rotation.z = Math.PI; smile.position.set(0, -.07, .265); head.add(smile);
  head.add(mesh(mergeGeometries([-1, 1].map(s => new THREE.CylinderGeometry(.08, .08, .04, 12).rotateZ(Math.PI / 2).translate(s * .305, 0, 0))), m.bodyB));
  // antena amb molla (es gronxa quan en Bit accelera o salta)
  const ant = new THREE.Group(); ant.position.set(0, .22, 0);
  ant.add(mesh(g.cyl, m.arm, { p: [0, .08, 0], s: [.016, .16, .016] }));
  const bulb = new THREE.Mesh(g.sph, new THREE.MeshStandardMaterial({ color: '#FFC531', emissive: '#FFB000', emissiveIntensity: 1.6 })); bulb.scale.setScalar(.06); bulb.position.set(0, .18, 0); ant.add(bulb);
  head.add(ant);
  body.add(head);
  const carry = new THREE.Group(); carry.position.set(0, 1.18, 0); carry.visible = false;
  carry.add(mesh(g.rbox, new THREE.MeshStandardMaterial({ map: t.crate, roughness: .8 }), { s: .3 })); body.add(carry);
  // només les peces grosses fan ombra (menys feina per a l'ombra del sol)
  bit.traverse(o => { if (o.isMesh) o.castShadow = o.geometry.type === 'RoundedBoxGeometry' || o.geometry.type === 'CapsuleGeometry' || o.material === m.wheel; });
  bit.scale.setScalar(1.05);
  return { bit, body, head, eyes, joy, sad, smile, wheels, arms, led, ledGlow, bulb, carry, ant };
}

/* ---------- partícules: un sol Points per a les additives (espurnes) i un per a les normals (pols, aigua, confeti) ---------- */
class Particles {
  constructor(n, additive) {
    this.n = n; this.a = [];
    const g = new THREE.BufferGeometry();
    this.P = new Float32Array(n * 3); this.C = new Float32Array(n * 4); this.S = new Float32Array(n); this.Rt = new Float32Array(n); this.K = new Float32Array(n);
    g.setAttribute('position', new THREE.BufferAttribute(this.P, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('aCol', new THREE.BufferAttribute(this.C, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.S, 1).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('aRot', new THREE.BufferAttribute(this.Rt, 1).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('aShape', new THREE.BufferAttribute(this.K, 1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: texs().atlas }, uH: { value: 600 } }, transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: `attribute vec4 aCol; attribute float aSize, aRot, aShape; uniform float uH; varying vec4 vCol; varying float vRot, vShape;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * projectionMatrix[1][1] * uH * .5 / max(.1, -mv.z); vCol = aCol; vRot = aRot; vShape = aShape; }`,
      fragmentShader: `uniform sampler2D uTex; varying vec4 vCol; varying float vRot, vShape;
        void main(){ vec2 c = gl_PointCoord - .5; float s = sin(vRot), k = cos(vRot); c = mat2(k, -s, s, k) * c * 1.41 + .5; if (c.x < 0. || c.x > 1. || c.y < 0. || c.y > 1.) discard;
          vec4 t = texture2D(uTex, vec2((c.x + vShape) / 8., c.y)); gl_FragColor = vec4(vCol.rgb * t.rgb, vCol.a * t.a); if (gl_FragColor.a < .003) discard;
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    });
    this.obj = new THREE.Points(g, this.mat); this.obj.frustumCulled = false; this.obj.renderOrder = additive ? 6 : 5;
  }
  // o: { p:[x,y,z], v:[x,y,z], c: Color/hex, a, s, s1, life, g, drag, k (forma), rot, rv, fin }
  emit(o) {
    if (this.a.length >= this.n) this.a.shift();
    const c = o.c instanceof THREE.Color ? o.c : new THREE.Color(o.c || '#FFFFFF');
    this.a.push({ x: o.p[0], y: o.p[1], z: o.p[2], vx: o.v ? o.v[0] : 0, vy: o.v ? o.v[1] : 0, vz: o.v ? o.v[2] : 0, r: c.r, g: c.g, b: c.b, al: o.a ?? 1, s0: o.s ?? .1, s1: o.s1 ?? o.s ?? .1,
      t: 0, life: o.life ?? 1, gr: o.g ?? 0, dr: o.drag ?? 0, k: o.k ?? 0, rot: o.rot ?? Math.random() * 6.3, rv: o.rv ?? 0, fin: o.fin ?? 0, fl: o.flut ?? 0, ph: Math.random() * 6.3 });
  }
  update(dt) {
    const A = this.a; let n = 0;
    for (let i = 0; i < A.length; i++) {
      const p = A[i]; p.t += dt; if (p.t >= p.life) continue;
      p.vy -= p.gr * dt; const d = Math.exp(-p.dr * dt); p.vx *= d; p.vy *= d; p.vz *= d;
      p.x += p.vx * dt + (p.fl ? Math.sin(p.t * 7 + p.ph) * p.fl * dt : 0); p.y += p.vy * dt; p.z += p.vz * dt + (p.fl ? Math.cos(p.t * 5 + p.ph) * p.fl * dt : 0); p.rot += p.rv * dt;
      const q = p.t / p.life, al = p.al * (p.fin ? Math.min(1, p.t / p.fin) : 1) * (q > .6 ? 1 - (q - .6) / .4 : 1);
      this.P[n * 3] = p.x; this.P[n * 3 + 1] = p.y; this.P[n * 3 + 2] = p.z; this.C[n * 4] = p.r; this.C[n * 4 + 1] = p.g; this.C[n * 4 + 2] = p.b; this.C[n * 4 + 3] = al;
      this.S[n] = lerp(p.s0, p.s1, q) * 1.4; this.Rt[n] = p.rot; this.K[n] = p.k; A[n++] = p;
    }
    A.length = n;
    const g = this.obj.geometry; g.setDrawRange(0, n);
    if (n) for (const k of ['position', 'aCol', 'aSize', 'aRot', 'aShape']) { const at = g.attributes[k]; at.clearUpdateRanges(); at.addUpdateRange(0, n * at.itemSize); at.needsUpdate = true; }
  }
  dispose() { this.obj.geometry.dispose(); this.mat.dispose(); }
}

/* ---------- l'illa: formes ---------- */
// rectangle arrodonit mostrejat a intervals iguals, amb la normal cap enfora de cada punt
function rrect(hx, hz, r, n) {
  const ex = hx - r, ez = hz - r, segs = [];
  const line = (x0, z0, x1, z1, nx, nz) => segs.push({ L: Math.hypot(x1 - x0, z1 - z0), at: u => [x0 + (x1 - x0) * u, z0 + (z1 - z0) * u, nx, nz] });
  const arc = (cx, cz, a0) => segs.push({ L: Math.PI * r / 2, at: u => { const a = a0 + u * Math.PI / 2; return [cx + Math.cos(a) * r, cz + Math.sin(a) * r, Math.cos(a), Math.sin(a)]; } });
  line(hx, -ez, hx, ez, 1, 0); arc(ex, ez, 0); line(ex, hz, -ex, hz, 0, 1); arc(-ex, ez, Math.PI / 2); line(-hx, ez, -hx, -ez, -1, 0); arc(-ex, -ez, Math.PI); line(-ex, -hz, ex, -hz, 0, -1); arc(ex, -ez, Math.PI * 1.5);
  const P = segs.reduce((a, s) => a + s.L, 0), out = [];
  for (let i = 0; i < n; i++) { let s = i / n * P, k = 0; while (k < segs.length - 1 && s > segs[k].L) { s -= segs[k].L; k++; } const [x, z, nx, nz] = segs[k].at(segs[k].L ? s / segs[k].L : 0); out.push({ x, z, nx, nz, u: i / n }); }
  return out;
}
const offset = (pts, f) => pts.map(p => { const o = f(p); return [p.x + p.nx * o, p.z + p.nz * o]; });
const wob = (seed, amp) => { const K = [2, 3, 5, 7, 9, 13].map((k, i) => [k, rnd(seed, i, 31) * 6.28, amp * (1 - i * .12) * (.5 + rnd(seed, i, 32))]); return u => K.reduce((a, [k, ph, A]) => a + Math.sin(u * Math.PI * 2 * k + ph) * A, 0) / 2.2; };
function sdRect(x, z, hx, hz, r) { const qx = Math.abs(x) - hx + r, qz = Math.abs(z) - hz + r; return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - r; }
function inPoly(x, z, P) { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, zi] = P[i], [xj, zj] = P[j]; if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) c = !c; } return c; }
// triangula un polígon pla (XZ) a l'alçada y, amb la cara cap amunt
function flatPoly(P, y) {
  const tris = THREE.ShapeUtils.triangulateShape(P.map(([x, z]) => new THREE.Vector2(x, z)), []), pos = [];
  for (const [a, b, c] of tris) { const A = P[a], B = P[b], C = P[c], up = (B[1] - A[1]) * (C[0] - A[0]) - (B[0] - A[0]) * (C[1] - A[1]) > 0; for (const q of up ? [A, B, C] : [A, C, B]) pos.push(q[0], y, q[1]); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals(); return g;
}
// anells de punts (mateix nombre) units en una paret; cols: color de cada anell
function skirt(rings, cols, flat) {
  const n = rings[0].length, pos = [], col = [], c = new THREE.Color();
  for (let k = 0; k < rings.length - 1; k++) for (let i = 0; i < n; i++) {
    const j = (i + 1) % n, a = rings[k][i], b = rings[k][j], d = rings[k + 1][i], e = rings[k + 1][j];
    for (const q of [a, b, d, b, e, d]) { pos.push(...q); c.set(cols[flat ? k : q === a || q === b ? k : k + 1]); col.push(c.r, c.g, c.b); }
  }
  let g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  if (!flat) { const ix = g; g = mergeVerts(ix); }
  g.computeVertexNormals(); return g;
}
function mergeVerts(g) { const p = g.attributes.position, c = g.attributes.color, map = new Map(), P = [], C = [], I = [];
  for (let i = 0; i < p.count; i++) { const k = p.getX(i).toFixed(4) + ',' + p.getY(i).toFixed(4) + ',' + p.getZ(i).toFixed(4); let j = map.get(k); if (j == null) { j = P.length / 3; map.set(k, j); P.push(p.getX(i), p.getY(i), p.getZ(i)); C.push(c.getX(i), c.getY(i), c.getZ(i)); } I.push(j); }
  const o = new THREE.BufferGeometry(); o.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); o.setAttribute('color', new THREE.Float32BufferAttribute(C, 3)); o.setIndex(I); return o; }
// distància a la costa (camp de distància euclidià, Felzenszwalb) en una textura de mitja precisió per a l'aigua
function edt(f, W, H) {
  const INF = 1e20, n = Math.max(W, H), d = new Float64Array(n), v = new Int32Array(n), z = new Float64Array(n + 1), g = new Float64Array(n);
  const pass = (len, get, set) => { for (let q = 0; q < len; q++) g[q] = get(q); let k = 0; v[0] = 0; z[0] = -INF; z[1] = INF;
    for (let q = 1; q < len; q++) { let s; while (true) { const r = v[k]; s = ((g[q] + q * q) - (g[r] + r * r)) / (2 * q - 2 * r); if (s <= z[k] && k > 0) k--; else break; } if (s <= z[k]) { v[0] = q; z[0] = -INF; z[1] = INF; k = 0; continue; } k++; v[k] = q; z[k] = s; z[k + 1] = INF; }
    k = 0; for (let q = 0; q < len; q++) { while (z[k + 1] < q) k++; const r = v[k]; d[q] = (q - r) * (q - r) + g[r]; } for (let q = 0; q < len; q++) set(q, d[q]); };
  for (let x = 0; x < W; x++) pass(H, y => f[y * W + x], (y, val) => { f[y * W + x] = val; });
  for (let y = 0; y < H; y++) pass(W, x => f[y * W + x], (x, val) => { f[y * W + x] = val; });
  return f;
}

/* ---------- peces procedurals ---------- */
const prism = (w, h, d) => { const t = new THREE.Shape(); t.moveTo(-w / 2, 0); t.lineTo(w / 2, 0); t.lineTo(0, h); t.closePath(); const g = new THREE.ExtrudeGeometry(t, { depth: d, bevelEnabled: false }); g.translate(0, 0, -d / 2); return g; };
let HG = null;
function house() {
  const m = mats(), g = geos(), hs = new THREE.Group();
  if (!HG) { HG = { walls: new RoundedBoxGeometry(.56, .4, .46, 2, .03), gable: prism(.46, .22, .5), roof: new RoundedBoxGeometry(.66, .045, .37, 1, .015) }; Object.values(HG).forEach(x => { x.userData.shared = true; }); }
  hs.add(mesh(HG.walls, m.wall, { p: [0, .2, 0], recv: true }));
  hs.add(mesh(HG.gable, m.wall, { p: [0, .4, 0], r: [0, Math.PI / 2, 0], recv: true }));
  for (const s of [-1, 1]) hs.add(mesh(HG.roof, m.roof, { p: [0, .5, s * .125], r: [s * .78, 0, 0] }));
  hs.add(mesh(g.box, m.roofD, { p: [0, .625, 0], s: [.68, .035, .04] }));
  hs.add(mesh(g.box, m.chimney, { p: [.17, .62, -.08], s: [.08, .2, .08] }));
  hs.add(mesh(g.box, m.door, { p: [0, .13, .232], s: [.13, .24, .02] }), mesh(g.sph, m.hand, { p: [.04, .13, .245], s: .012 }));
  hs.add(mesh(g.box, m.frame, { p: [0, .255, .236], s: [.16, .02, .02] }));
  const wins = [-.18, .18].map(xx => { hs.add(mesh(g.box, m.frame, { p: [xx, .25, .235], s: [.13, .13, .015] })); const wd = mesh(g.box, m.win, { p: [xx, .25, .238], s: [.1, .1, .02] }); hs.add(wd); hs.add(mesh(g.box, m.woodD, { p: [xx, .175, .25], s: [.13, .03, .04] })); [-1, 0, 1].forEach(k => hs.add(mesh(g.sph, m.flower[(k + 2) % 4], { p: [xx + k * .04, .2, .25], s: .018, cast: false }))); return wd; });
  return { hs, wins };
}
// veler de joguina (es gronxa al mar)
function sailboat(col) {
  const g = new THREE.Group(), sh = new THREE.Shape();
  sh.moveTo(0, -.55); sh.quadraticCurveTo(.2, -.25, .19, .2); sh.lineTo(.15, .4); sh.lineTo(-.15, .4); sh.lineTo(-.19, .2); sh.quadraticCurveTo(-.2, -.25, 0, -.55);
  const hull = new THREE.ExtrudeGeometry(sh, { depth: .12, bevelEnabled: true, bevelThickness: .03, bevelSize: .03, bevelSegments: 2 }); hull.rotateX(Math.PI / 2); hull.translate(0, .14, 0);
  g.add(mesh(hull, mats().frame), mesh(new THREE.BoxGeometry(.3, .02, .5).translate(0, .155, .05), mats().wood), mesh(new THREE.CylinderGeometry(.012, .014, 1.05, 6).translate(0, .66, -.05), mats().pole));
  const tri = (w, h) => { const t = new THREE.Shape(); t.moveTo(0, 0); t.lineTo(0, h); t.lineTo(w, 0); t.closePath(); return new THREE.ShapeGeometry(t).rotateY(Math.PI / 2); };
  g.add(mesh(tri(.55, .9).translate(0, .2, -.06), new THREE.MeshStandardMaterial({ color: '#FFF8EA', roughness: .7, side: THREE.DoubleSide })), mesh(tri(.32, .7).translate(0, .2, -.14), new THREE.MeshStandardMaterial({ color: col, roughness: .7, side: THREE.DoubleSide })));
  return g;
}
const UMB = {};
function umbrella(par, x, y, z, a, b, ry) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; par.add(g);
  const st = UMB[a + b] || (UMB[a + b] = canvasTex(256, 8, (c, w, h) => { for (let i = 0; i < 10; i++) { c.fillStyle = i % 2 ? b : a; c.fillRect(i * w / 10, 0, w / 10 + 1, h); } }));
  g.add(mesh(new THREE.CylinderGeometry(.014, .014, .62, 6), mats().frame, { p: [0, .31, 0] }));
  g.add(mesh(new THREE.ConeGeometry(.36, .14, 10, 1, true), new THREE.MeshStandardMaterial({ map: st, roughness: .7, side: THREE.DoubleSide }), { p: [0, .62, 0] }));
  g.add(mesh(new THREE.BoxGeometry(.24, .01, .46), new THREE.MeshStandardMaterial({ color: a, roughness: .9 }), { p: [.24, .006, .22], r: [0, .3, 0], recv: true }));
  return g;
}
function sandcastle(par, x, y, z, s) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = .3; g.scale.setScalar(s); par.add(g);
  const m = new THREE.MeshStandardMaterial({ color: '#E8C487', roughness: 1, flatShading: true }), parts = [];
  const add = (geo, p) => { geo.translate(...p); parts.push(geo); };
  add(new THREE.BoxGeometry(.34, .12, .34), [0, .06, 0]);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { add(new THREE.CylinderGeometry(.055, .065, .2, 8), [a * .17, .1, b * .17]); add(new THREE.ConeGeometry(.06, .08, 8), [a * .17, .24, b * .17]); }
  add(new THREE.CylinderGeometry(.08, .09, .22, 8), [0, .22, 0]); add(new THREE.ConeGeometry(.09, .1, 8), [0, .38, 0]);
  g.add(mesh(mergeGeometries(parts.map(p => p.toNonIndexed())), m, { recv: true }));
  g.add(mesh(new THREE.PlaneGeometry(.08, .05), mats().flag, { p: [.04, .47, 0] }), mesh(new THREE.CylinderGeometry(.005, .005, .12, 4), mats().pole, { p: [0, .45, 0] }));
  return g;
}

/* ---------- el món ---------- */
export function create(el, W, S, opt = {}) {
  const m = mats(), g = geos(), t = texs();
  const Q = pickTier(opt); let tier = Q.tier, q = QC[tier];
  const renderer = new THREE.WebGLRenderer({ antialias: !probeGPU().sw || Q.forced, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!opt.shot });
  let pr = Math.min(q.pr, window.devicePixelRatio || 1);
  renderer.setPixelRatio(pr);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap; renderer.shadowMap.autoUpdate = false;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = .95;
  const cv = renderer.domElement; cv.className = 'b3c'; cv.style.opacity = '0'; cv.style.transition = 'opacity .45s ease'; el.appendChild(cv);
  const scene = new THREE.Scene(), BG = new THREE.Color('#2A93D6');
  scene.background = BG; scene.fog = new THREE.Fog(BG, 20, 40);
  const env = skyEnv(renderer); scene.environment = env; scene.environmentIntensity = .55;
  const cam = new THREE.PerspectiveCamera(32, 1, .1, 120);
  scene.add(new THREE.HemisphereLight('#D8F2FF', '#8CAA5E', .42));
  const sun = new THREE.DirectionalLight('#FFE6BE', 2.55); sun.castShadow = true; sun.shadow.bias = -.0003; sun.shadow.normalBias = .025; sun.shadow.radius = q.sr; sun.shadow.mapSize.set(q.shadow, q.shadow);
  scene.add(sun, sun.target);
  const fxA = new Particles(320, true), fxN = new Particles(420, false); scene.add(fxA.obj, fxN.obj);
  // ombres de núvols que passen per sobre de l'illa i del mar
  const cloudT = t.cloud.clone(); cloudT.repeat.set(2.2, 2.2); cloudT.needsUpdate = true;
  const clouds = new THREE.Mesh(new THREE.PlaneGeometry(36, 36).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: cloudT, blending: THREE.MultiplyBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, toneMapped: false, fog: false }));
  clouds.position.y = .025; clouds.renderOrder = 2; clouds.frustumCulled = false; scene.add(clouds);
  // vinyeta suau (un degradat damunt del canvas: no costa res a la GPU)
  const vig = document.createElement('div'); vig.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;border-radius:inherit;background:radial-gradient(ellipse 75% 70% at 50% 46%,rgba(0,0,0,0) 62%,rgba(8,36,72,.2) 100%)';
  // uniforms de l'aigua i de l'herba d'aquesta illa
  const WU = { uDist: { value: null }, uBox: { value: new THREE.Vector4() }, uDMax: { value: 6 }, uQ: { value: tier === 'low' ? 0 : 1 }, uWave: { value: REDUCED ? .3 : 1 },
    uDeep: { value: new THREE.Color('#1468C2') }, uMid: { value: new THREE.Color('#1FB4D8') }, uShal: { value: new THREE.Color('#86EDE3') }, uSand: { value: new THREE.Color('#E9E2B5') }, uFoamC: { value: new THREE.Color('#F4FFFD') } };
  const BU = { uBit: { value: new THREE.Vector3(0, 0, 1) } };
  const waterM = waterMat(WU), bladeM = bladeMat(BU);
  const grassM = worldUV(new THREE.MeshStandardMaterial({ map: t.grass, roughness: .92 }), .58, 'g', .62);
  const lipM = worldUV(new THREE.MeshStandardMaterial({ map: t.grass, color: '#E6F2D8', roughness: .95 }), .58, 'g', .55);
  const stoneM = worldUV(new THREE.MeshStandardMaterial({ map: t.stone, roughness: .78 }), .42, 's', .74);
  const sandM = worldUV(new THREE.MeshStandardMaterial({ map: t.sand, vertexColors: true, roughness: .95 }), .9, 'b', 1);
  const cliffM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, flatShading: true });
  const soilM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 });
  const blobM = new THREE.MeshBasicMaterial({ map: t.blob, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, toneMapped: false });
  const local = new Set([waterM, bladeM, grassM, lipM, stoneM, sandM, cliffM, soilM, blobM]);
  let world = null, st = null, bitR = null, marksG = null, anim = null, alive = true, react = null, composer = null, bloom = null, ao = null, visible = true, shown = false, raf = 0;
  const clock = { t: NOW(), elapsedTime: 0, getDelta() { const n = NOW(), d = (n - this.t) / 1000; this.t = n; this.elapsedTime += d; return d; } }, pending = [], flying = [], ripples = [];
  const spr = { sq: { x: 0, v: 0 }, ln: { x: 0, v: 0 }, an: { x: 0, v: 0 }, az: { x: 0, v: 0 }, hy: { x: 0, v: 0 } };
  let wheelSpin = 0, turnAcc = 0, lastStepT = 0, noteN = 0, lastV = null, carryA = null, ledFlash = 0, shake = 0, punch = 0, intro = null, look = { t: 0, y: 0 }, expr = 'n', dizzy = null, bitBlob = null, lastS = S;
  const pos = (x, y) => new THREE.Vector3(x - (st.W.w - 1) / 2, 0, y - (st.W.h - 1) / 2);
  const rotOf = ang => (180 - ang) * Math.PI / 180;

  /* ----- construcció ----- */
  function disposeGroup(gr) {
    const keep = new Set([...local, ...Object.values(M).flat(), ...Object.values(PMC), ...Object.values(PMC).map(x => x.userData.depth)]);
    gr.traverse(o => { if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(mm => { if (!keep.has(mm)) { if (mm.map && !mm.map.userData.shared) mm.map.dispose(); mm.dispose(); } }); });
  }
  function build(W0, S0) {
    if (world) { if (bitR) world.remove(bitR.bit, bitBlob); scene.remove(world); disposeGroup(world); }
    world = new THREE.Group(); scene.add(world);
    flying.length = 0; ripples.length = 0; life.flies = []; life.fishO = null; life.jump = null;
    st = { W: W0, items: {}, trees: [], flag: null, homes: {}, paint: {}, gemGlow: {}, decor: null, rings: [] };
    const { w, h } = W0, gx = w / 2, gz = h / 2, seed = w * 7 + h * 13 + W0.path.size;
    const isW = k => W0.water.has(k), cellK = (x, y) => x + ',' + y;
    // --- formes de l'illa: vora d'herba (A), platja (B) i línia de l'aigua (L) ---
    const nA = 160, A0 = rrect(gx + .3, gz + .3, .5, nA), wa = wob(seed, .035);
    const A = offset(A0, p => wa(p.u)), wb = wob(seed + 3, .16);
    const bw = p => .62 + .2 * Math.max(0, p.nz) - .1 * Math.max(0, -p.nz) + wb(p.u);
    const B = offset(A0, p => .1 + bw(p)), L = offset(A0, p => .1 + bw(p) + .19);
    // --- penya-segat amb estrats (anells irregulars, ombrejat pla) ---
    { const Y = [-.15, -.3, -.5, -.7, -.92, -1.2], IN = [-.03, .0, -.035, .02, -.01, .05], CC = ['#C08654', '#A3683F', '#B6784A', '#8B5533', '#9A6039', '#7A4A2C'];
      const rings = Y.map((y, k) => A0.map((p, i) => { const o = wa(p.u) + IN[k] + (k ? (rnd(i, k, seed) - .5) * .09 : 0), yy = y + (k && k < Y.length - 1 ? (rnd(i, k, 77) - .5) * .06 : 0); return [p.x + p.nx * o, yy, p.z + p.nz * o]; }));
      const cg = skirt(rings, CC, true); const cl = mesh(cg, cliffM, { recv: true }); world.add(cl); }
    // --- vora d'herba (la illa sense la graella) ---
    { const sh = new THREE.Shape(A.map(([x, z]) => new THREE.Vector2(x, z))), hole = new THREE.Path(); const ex = gx + .004, ez = gz + .004;
      hole.moveTo(-ex, -ez); hole.lineTo(-ex, ez); hole.lineTo(ex, ez); hole.lineTo(ex, -ez); hole.closePath(); sh.holes.push(hole);
      const lg = new THREE.ExtrudeGeometry(sh, { depth: .12, bevelEnabled: true, bevelThickness: .05, bevelSize: .05, bevelSegments: 3, curveSegments: 4 }); lg.rotateX(Math.PI / 2); lg.computeBoundingBox(); lg.translate(0, -.03 - lg.boundingBox.max.y, 0);
      world.add(mesh(lg, lipM, { recv: true })); }
    // --- platja: pla de sorra seca i vora mullada que entra a l'aigua ---
    { const top = flatPoly(B, -.86); top.setAttribute('color', new THREE.BufferAttribute(new Float32Array(top.attributes.position.count * 3).fill(1), 3));
      const OF = [0, .1, .26, .5], YY = [-.86, -.9, -.985, -1.2];
      const rings = OF.map((o, k) => A0.map(p => { const b = .1 + bw(p) + o; return [p.x + p.nx * b, YY[k], p.z + p.nz * b]; }));
      const sk = skirt(rings, ['#FFFFFF', '#E6D2AE', '#C9AE84', '#A88E68'], false);
      const bm = mesh(mergeGeometries([top, sk.toNonIndexed()]), sandM, { recv: true, cast: false }); world.add(bm); }
    // --- terra fosca sota la graella (es veu entre les caselles) ---
    { const parts = [], c1 = new THREE.Color('#3F7A2C'), c2 = new THREE.Color('#5A3C26');
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const k = cellK(x, y); if (isW(k)) continue; const p = pos(x, y), q0 = g.plane.clone().translate(p.x, -.1, p.z), c = W0.path.has(k) ? c2 : c1, col = new Float32Array(q0.attributes.position.count * 3); for (let i = 0; i < col.length; i += 3) col.set([c.r, c.g, c.b], i); q0.setAttribute('color', new THREE.BufferAttribute(col, 3)); q0.deleteAttribute('uv'); parts.push(q0); }
      if (parts.length) world.add(mesh(mergeGeometries(parts), soilM, { recv: true, cast: false })); }
    // --- el mar: malla més densa a prop de l'illa ---
    { const sg = new THREE.PlaneGeometry(2, 2, 100, 100); sg.rotateX(-Math.PI / 2); const pa = sg.attributes.position;
      const f = u => Math.sign(u) * (Math.abs(u) * 11 + Math.pow(Math.abs(u), 3) * 54);
      for (let i = 0; i < pa.count; i++) pa.setXYZ(i, f(pa.getX(i)), -.95, f(pa.getZ(i)));
      sg.computeVertexNormals(); sg.deleteAttribute('uv'); const sea = mesh(sg, waterM, { cast: false, recv: true }); sea.frustumCulled = false; world.add(sea); }
    // --- estanys (caselles d'aigua) ---
    { const parts = []; for (const k of W0.water) { const [x, y] = k.split(',').map(Number), p = pos(x, y); parts.push(new THREE.PlaneGeometry(1, 1, 6, 6).rotateX(-Math.PI / 2).translate(p.x, -.075, p.z)); }
      if (parts.length) { const pg = mergeGeometries(parts); pg.deleteAttribute('uv'); world.add(mesh(pg, waterM, { cast: false, recv: true })); } }
    // --- camp de distància a la costa ---
    { const Ax = gx + 5, Az = gz + 5, tx = Math.max(Ax, Az) * 2 / 340, RX = Math.ceil(2 * Ax / tx), RZ = Math.ceil(2 * Az / tx);
      const c = document.createElement('canvas'); c.width = RX; c.height = RZ; const cx = c.getContext('2d', { willReadFrequently: true }), X = x => (x + Ax) / tx, Z = z => (z + Az) / tx;
      cx.fillStyle = '#000'; cx.fillRect(0, 0, RX, RZ); cx.fillStyle = '#fff'; cx.beginPath(); L.forEach(([x, z], i) => i ? cx.lineTo(X(x), Z(z)) : cx.moveTo(X(x), Z(z))); cx.closePath(); cx.fill();
      cx.fillStyle = '#000'; for (const k of W0.water) { const [x, y] = k.split(',').map(Number), p = pos(x, y); cx.fillRect(X(p.x - .5), Z(p.z - .5), 1 / tx, 1 / tx); }
      const im = cx.getImageData(0, 0, RX, RZ).data, f = new Float64Array(RX * RZ); for (let i = 0; i < f.length; i++) f[i] = im[i * 4] > 127 ? 0 : 1e20;
      edt(f, RX, RZ); const dd = new Uint16Array(RX * RZ); for (let i = 0; i < f.length; i++) dd[i] = THREE.DataUtils.toHalfFloat(Math.min(6, Math.sqrt(f[i]) * tx));
      const dt = new THREE.DataTexture(dd, RX, RZ, THREE.RedFormat, THREE.HalfFloatType); dt.magFilter = dt.minFilter = THREE.LinearFilter; dt.wrapS = dt.wrapT = THREE.ClampToEdgeWrapping; dt.needsUpdate = true;
      if (WU.uDist.value) WU.uDist.value.dispose(); WU.uDist.value = dt; WU.uBox.value.set(0, 0, 1 / (RX * tx), 1 / (RZ * tx)); }
    // --- caselles: herba (amb tauler d'escacs suau), lloses de pedra, terres de color ---
    const grassC = [], stoneC = [], c = new THREE.Color();
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = cellK(x, y), p = pos(x, y);
      if (isW(k)) continue;
      const fl = W0.floor[k];
      if (fl) { const tl = mesh(g.stoneTile, new THREE.MeshPhysicalMaterial({ color: COL[fl], roughness: .32, clearcoat: .6, emissive: COL[fl], emissiveIntensity: .12 }), { p: [p.x, -.004, p.z], recv: true, cast: false }); world.add(tl); }
      else if (W0.path.has(k)) stoneC.push([p.x, -.002 - rnd(x, y, 3) * .008, p.z, (rnd(x, y, 4) - .5) * .07, rnd(x, y, 6)]);
      else grassC.push([p.x, p.z, (x + y) % 2, rnd(x, y, 7)]);
      if (W0.target && W0.target[k]) { const ring = mesh(new THREE.TorusGeometry(.33, .028, 6, 4), new THREE.MeshStandardMaterial({ color: COL[W0.target[k]], emissive: COL[W0.target[k]], emissiveIntensity: .6 }), { p: [p.x, .015, p.z], r: [Math.PI / 2, 0, Math.PI / 4], cast: false }); world.add(ring); st.rings.push(ring); }
    }
    if (grassC.length) { const im = new THREE.InstancedMesh(g.grassTile, grassM, grassC.length);
      grassC.forEach(([x, z, ch, r], i) => { DUMMY.position.set(x, 0, z); DUMMY.rotation.set(0, 0, 0); DUMMY.scale.set(1, 1, 1); DUMMY.updateMatrix(); im.setMatrixAt(i, DUMMY.matrix); c.setRGB(1, 1, 1).multiplyScalar(ch ? .93 : 1.02).lerp(new THREE.Color(r < .5 ? '#E4FFC0' : '#C8F0A8'), .12); im.setColorAt(i, c); });
      im.receiveShadow = true; world.add(im); }
    if (stoneC.length) { const im = new THREE.InstancedMesh(g.stoneTile, stoneM, stoneC.length);
      stoneC.forEach(([x, y, z, ry, r], i) => { DUMMY.position.set(x, y, z); DUMMY.rotation.set(0, ry, 0); DUMMY.scale.set(1, 1, 1); DUMMY.updateMatrix(); im.setMatrixAt(i, DUMMY.matrix); c.setRGB(1, 1, 1).multiplyScalar(.9 + r * .16).lerp(new THREE.Color(r < .5 ? '#FFE9C2' : '#E6E0D2'), .25); im.setColorAt(i, c); });
      im.receiveShadow = true; world.add(im); }
    // --- brins d'herba (caselles d'herba, vora de l'illa i escletxes del camí) ---
    { const B0 = [], add = (x, y, z, hk = 1) => B0.push([x, y, z, hk]), R = (() => { let s = seed * 97 + 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; })();
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const k = cellK(x, y); if (isW(k) || W0.path.has(k)) continue; const p = pos(x, y), solid = W0.rocks.has(k) ? .3 : W0.trees.has(k) ? .12 : 0;
        for (let i = 0; i < 46; i++) { const a = (R() - .5) * .92, b = (R() - .5) * .92; if (Math.hypot(a, b) < solid) continue; add(p.x + a, 0, p.z + b); } }
      for (let i = 0; i < (w + h) * 2 * 26; i++) { const x = (R() * 2 - 1) * (gx + .4), z = (R() * 2 - 1) * (gz + .4); if (Math.abs(x) < gx + .03 && Math.abs(z) < gz + .03) continue; if (!inPoly(x, z, A) || sdRect(x, z, gx + .3, gz + .3, .5) > -.07) continue; add(x, -.03, z, 1.15); }
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const k = cellK(x, y); if (!W0.path.has(k)) continue; const p = pos(x, y);
        for (const [dx, dy] of [[1, 0], [0, 1]]) { const k2 = cellK(x + dx, y + dy); if (x + dx >= w || y + dy >= h || isW(k2)) continue; for (let i = 0; i < 5; i++) { const u = (R() - .5) * .9; add(p.x + dx * .5 + (dy ? u : (R() - .5) * .05), -.1, p.z + dy * .5 + (dx ? u : (R() - .5) * .05), .6); } } }
      const im = new THREE.InstancedMesh(g.blade, bladeM, B0.length), C = ['#62B23E', '#7CC64C', '#93D25A', '#4D9A34', '#A9DA66'];
      B0.forEach(([x, y, z, hk], i) => { const hh = (.07 + R() * .1) * hk * (y < -.05 ? 1.1 : 1); DUMMY.position.set(x, y, z); DUMMY.rotation.set((R() - .5) * .3, R() * 6.28, (R() - .5) * .3); DUMMY.scale.set(.04 + R() * .035, hh, hh); DUMMY.updateMatrix(); im.setMatrixAt(i, DUMMY.matrix); im.setColorAt(i, c.set(C[Math.floor(R() * C.length)])); });
      im.receiveShadow = true; im.castShadow = false; st.blades = im; st.bladeN = B0.length; im.count = Math.round(B0.length * q.blades); world.add(im); }
    // --- arbres, roques i decoració (peces de Kenney si ja han arribat; si no, procedurals) ---
    st.decor = new THREE.Group(); world.add(st.decor); decorate();
    // --- coses que canvien: estrelles, caixes, bandera, cases ---
    const blobs = [];
    for (const k of W0.homes) { const [x, y] = k.split(',').map(Number), p = pos(x, y), { hs, wins } = house(); hs.position.set(p.x, 0, p.z - .2); hs.scale.setScalar(.84); hs.rotation.y = (rnd(x, y) - .5) * .1;
      const ok = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.check, depthTest: false })); ok.position.set(0, 1.12, 0); ok.scale.setScalar(0); hs.add(ok);
      st.homes[k] = { hs, wins, ok, done: false }; world.add(hs); blobs.push([p.x, p.z - .2, .95]); }
    for (const k of W0.gems) { const [x, y] = k.split(',').map(Number), p = pos(x, y), gr = new THREE.Group(); gr.position.set(p.x, .38, p.z);
      const s = mesh(g.star, m.gold, { cast: false }); gr.add(s); const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: q.post ? .7 : 1 })); glow.scale.setScalar(.9); gr.add(glow);
      gr.userData = { kind: 'gem', ph: rnd(x, y, 4) * 6, star: s, y0: .38, glow }; st.items[k] = gr; world.add(gr);
      const gg = mesh(g.plane, new THREE.MeshBasicMaterial({ map: t.glow, color: '#FFD45A', transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }), { p: [p.x, .01, p.z], s: .8, cast: false }); world.add(gg); st.gemGlow[k] = gg; }
    for (const k of W0.boxes) { const [x, y] = k.split(',').map(Number), p = pos(x, y), b = mesh(g.rbox, new THREE.MeshStandardMaterial({ map: t.crate, roughness: .8 }), { p: [p.x, .19, p.z], s: .38, recv: true }); b.rotation.y = rnd(x, y) * .5 - .25; b.userData = { kind: 'box' }; st.items['b' + k] = b; world.add(b); blobs.push([p.x, p.z, .62]); }
    if (W0.goal) { const p = pos(...W0.goal), f = new THREE.Group(); f.position.set(p.x - .12, 0, p.z);
      f.add(mesh(new THREE.CylinderGeometry(.15, .17, .07, 14), m.stone, { p: [0, .035, 0], recv: true }), mesh(g.cyl, m.pole, { p: [0, .52, 0], s: [.022, 1, .022] }), mesh(g.sph, m.gold, { p: [0, 1.03, 0], s: .042 }));
      const cg = new THREE.PlaneGeometry(.42, .27, 14, 5); cg.translate(.21, 0, 0); const cloth = mesh(cg, m.flag, { p: [.02, .86, 0] }); f.add(cloth); st.flag = { f, cloth, base: cg.attributes.position.array.slice() }; world.add(f); blobs.push([p.x - .12, p.z, .45]); }
    // ombres de contacte
    if (blobs.length) { const bm = new THREE.InstancedMesh(g.plane, blobM, blobs.length); blobs.forEach(([x, z, s], i) => { DUMMY.position.set(x, .012, z); DUMMY.rotation.set(0, 0, 0); DUMMY.scale.set(s, 1, s); DUMMY.updateMatrix(); bm.setMatrixAt(i, DUMMY.matrix); }); bm.renderOrder = 1; bm.castShadow = false; world.add(bm); }
    // en Bit
    if (!bitR) { bitR = makeBit(); const dz = new THREE.Group(); dz.position.set(0, .5, 0); for (let i = 0; i < 3; i++) { const s = mesh(g.star, m.gold, { s: .32, cast: false }); s.position.set(Math.cos(i * 2.09) * .2, 0, Math.sin(i * 2.09) * .2); dz.add(s); } dz.visible = false; bitR.head.add(dz); dizzy = dz;
      bitBlob = mesh(g.plane, blobM, { cast: false, s: .78 }); bitBlob.renderOrder = 1; }
    world.add(bitR.bit, bitBlob);
    marksG = new THREE.Group(); world.add(marksG);
    // càmera i sol segons la mida del mapa
    fit();
    const R = Math.hypot(gx, gz) + 1.7; Object.assign(sun.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: .5, far: R * 4.5 }); sun.shadow.camera.updateProjectionMatrix();
    sun.position.set(-R * 1.1, R * 1.45, R * .95); sun.target.position.set(0, 0, 0);
    scene.fog.near = camBase.D + Math.max(w, h) * .6; scene.fog.far = scene.fog.near + camBase.D * 1.6;
    place(S0, true);
  }
  // arbres, roques, flors, palmeres… (es refà quan arriben les peces de Kenney)
  function decorate() {
    const W0 = st.W, { w, h } = W0, gx = w / 2, gz = h / 2, D = st.decor, L = [], seed = w * 7 + h * 13;
    while (D.children.length) { const o = D.children.pop(); disposeGroup(o); }
    st.trees = []; st.boat = null;
    const R = (() => { let s = seed * 31 + 7; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; })();
    const green = () => new THREE.Color(.84 + R() * .3, .9 + R() * .22, .72 + R() * .36);
    const put = (n, x, y, z, o = {}) => L.push({ n, x, y, z, ry: o.ry ?? R() * 6.28, s: o.s ?? 1, sway: o.sway, cast: o.cast, tint: o.tint, tintAll: o.tintAll, sv: o.sv });
    const flowers = ['flower_redA', 'flower_yellowA', 'flower_purpleA', 'flower_redA', 'flower_purpleA'];
    const corner = (p, x, y, k) => { const a = rnd(x, y, k) * 6.28, r = .3 + rnd(x, y, k + 1) * .12; return [p.x + Math.cos(a) * r, p.z + Math.sin(a) * r]; };
    const blobs = [];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = x + ',' + y, p = pos(x, y);
      if (W0.trees.has(k)) {
        if (PK) {
          // si darrere (a la fila de dalt) hi ha una casella per on pot passar en Bit, l'arbre és més baix i va una mica cap endavant: no el tapa
          const ky = x + ',' + (y - 1), low = y > 0 && !W0.trees.has(ky) && !W0.rocks.has(ky) && !W0.water.has(ky);
          const T = low ? ['tree_oak', 'tree_fat', 'tree_oak', 'tree_fat', 'tree_detailed'][Math.floor(rnd(x, y, 21) * 5)] : ['tree_oak', 'tree_fat', 'tree_detailed', 'tree_oak', 'tree_pineRoundC', 'tree_default', 'tree_fat'][Math.floor(rnd(x, y, 21) * 7)], A = PK[T];
          const H = low ? .74 + rnd(x, y, 22) * .08 : (T === 'tree_default' ? 1.2 : 1.06) + rnd(x, y, 22) * .2;
          put(T, p.x + (rnd(x, y, 23) - .5) * .1, 0, p.z + (low ? .1 : (rnd(x, y, 24) - .5) * .1), { s: H / A.h, sway: .022, tint: green() });
          if (rnd(x, y, 25) < .45) { const [a, b] = corner(p, x, y, 26); put(rnd(x, y, 27) < .5 ? 'mushroom_redGroup' : 'grass_leafs', a, 0, b, { s: 1.2, sway: .4, cast: false }); } }
        else { const tr = new THREE.Group(), s = .85 + rnd(x, y, 11) * .3; tr.position.copy(p); tr.scale.setScalar(s);
          tr.add(mesh(g.cyl, m.trunk, { p: [0, .2, 0], s: [.07, .4, .07] }));
          const crown = new THREE.Group(); crown.position.y = .38;
          [[0, .22, 0, .26, m.leaf2], [-.13, .08, .06, .2, m.leaf1], [.14, .1, -.04, .21, m.leaf1], [.02, .05, .14, .18, m.leaf3]].forEach(([a, b, cc, r, mm]) => crown.add(mesh(g.ico, mm, { p: [a, b, cc], s: r })));
          tr.add(crown); tr.rotation.y = rnd(x, y, 14) * 6.3; tr.userData.ph = rnd(x, y, 15) * 6.3; st.trees.push(crown); D.add(tr); }
        blobs.push([p.x, p.z, .95]);
      } else if (W0.rocks.has(k)) {
        if (PK) { const gray = new THREE.Color(.78, .76, .74).multiplyScalar(.9 + rnd(x, y, 5) * .2), a0 = rnd(x, y, 6) * 6.28;
          // una roca grossa, una de mitjana i pedretes, amb un tuf d'herba
          put('stone_largeB', p.x - .04, 0, p.z - .02, { s: .8 + rnd(x, y, 7) * .14, tintAll: gray, ry: a0 });
          put(rnd(x, y, 8) < .5 ? 'stone_smallE' : 'stone_smallA', p.x + Math.cos(a0) * .26, 0, p.z + Math.sin(a0) * .22, { s: .62, tintAll: gray });
          put('stone_smallA', p.x + Math.cos(a0 + 2.4) * .3, 0, p.z + Math.sin(a0 + 2.4) * .26, { s: .38, tintAll: gray });
          if (rnd(x, y, 10) < .8) { const [a, b] = corner(p, x, y, 11); put(rnd(x, y, 12) < .5 ? 'grass' : 'grass_leafs', a, 0, b, { s: 1.1, sway: .5, cast: false, tint: green() }); } }
        else { const rk = new THREE.Group(); rk.position.copy(p);
          rk.add(mesh(g.dode, m.rock, { p: [0, .16, 0], s: [.3, .22, .26], r: [rnd(x, y, 1), rnd(x, y, 2) * 3, 0] }));
          rk.add(mesh(g.dode, m.rock2, { p: [.2, .08, .14], s: [.13, .1, .12], r: [rnd(x, y, 3), 0, 0] }));
          if (rnd(x, y, 4) < .5) rk.add(mesh(g.dode, m.moss, { p: [-.08, .33, 0], s: [.14, .04, .12] })); D.add(rk); }
        blobs.push([p.x, p.z, 1.0]);
      } else if (!W0.path.has(k) && !W0.water.has(k)) {
        // herba lliure: flors i matolls petits a les vores de la casella (el centre queda net)
        if (PK) { if (rnd(x, y) < .45) { const [a, b] = corner(p, x, y, 40); for (let i = 0; i < 3; i++) put(flowers[Math.floor(rnd(x, y, 41 + i) * flowers.length)], a + (rnd(x, y, 44 + i) - .5) * .16, 0, b + (rnd(x, y, 47 + i) - .5) * .16, { s: 1.05, sway: .6, cast: false }); }
          if (rnd(x, y, 50) < .35) { const [a, b] = corner(p, x, y, 51); put(rnd(x, y, 52) < .5 ? 'grass' : 'grass_large', a, 0, b, { s: .9, sway: .5, cast: false, tint: green() }); }
          if (rnd(x, y, 53) < .1) { const [a, b] = corner(p, x, y, 54); put(rnd(x, y, 55) < .5 ? 'mushroom_redGroup' : 'mushroom_tanGroup', a, 0, b, { s: .85, cast: false }); } }
        else if (rnd(x, y) < .4) { const f = new THREE.Group(), cc = m.flower[Math.floor(rnd(x, y, 3) * 4)]; [[.04, 0], [-.04, 0], [0, .04], [0, -.04]].forEach(([a, b]) => f.add(mesh(g.sph, cc, { p: [a, .02, b], s: .035 }))); f.add(mesh(g.sph, m.flowerC, { p: [0, .035, 0], s: .03 })); f.position.set(p.x - .3 + rnd(x, y, 1) * .6, 0, p.z - .3 + rnd(x, y, 2) * .6); D.add(f); }
      }
      // estanys: nenúfars i pedretes a les vores que toquen terra
      if (W0.water.has(k) && PK) {
        if (rnd(x, y, 60) < .8) { // el nenúfar és un platet: la cara de dalt (leafsDark) ha de quedar just per sobre de l'aigua
          const n = rnd(x, y, 61) < .5 ? 'lily_large' : 'lily_small', lf = PK[n].parts.find(q0 => q0.name === 'leafsDark'); if (lf && !lf.g.boundingBox) lf.g.computeBoundingBox();
          put(n, p.x + (rnd(x, y, 62) - .5) * .5, -.05 - (lf ? lf.g.boundingBox.max.y : 0) * 1.5, p.z + (rnd(x, y, 63) - .5) * .5, { s: 1.5, cast: false }); }
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy; if (nx >= 0 && ny >= 0 && nx < w && ny < h && W0.water.has(nx + ',' + ny)) continue; if (rnd(x, y, 64 + dx * 3 + dy) < .55) put(rnd(x, y, 70 + dx + dy * 2) < .5 ? 'stone_smallA' : 'rock_smallFlatA', p.x + dx * .43 + (dy ? (rnd(x, y, 66 + dx) - .5) * .6 : 0), -.09, p.z + dy * .43 + (dx ? (rnd(x, y, 67 + dy) - .5) * .6 : 0), { s: .55, cast: false }); }
      }
    }
    // vora d'herba: matolls, flors i bolets (a davant, només coses baixes)
    const A0 = rrect(gx + .17, gz + .17, .36, Math.round((w + h) * 2 * 2.6));
    if (PK) A0.forEach((p, i) => { const r = R(), front = p.nz > .5, fs = front ? .78 : 1;
      if (r < .2 && !front) put(['plant_bushLarge', 'plant_bushDetailed', 'plant_bush'][i % 3], p.x, -.03, p.z, { s: .8 + R() * .3, sway: .25, tint: green() });
      else if (r < .45) for (let f = 0; f < 2; f++) put(flowers[Math.floor(R() * flowers.length)], p.x + (R() - .5) * .14, -.03, p.z + (R() - .5) * .14, { s: 1.05 * fs, sway: .6, cast: false });
      else if (r < .7) put(R() < .6 ? 'grass' : 'grass_large', p.x, -.03, p.z, { s: .95 * fs, sway: .5, cast: false, tint: green() });
      else if (r < .76) put(['mushroom_redGroup', 'mushroom_tanGroup'][i % 2], p.x, -.03, p.z, { s: 1, cast: false }); });
    // platja: palmeres al fons i als costats de darrere, pedres, un tronc, la canoa, un para-sol, un castell i estrelles de mar
    { const B0 = rrect(gx + .3, gz + .3, .5, 120), bw = wob(seed + 3, .16), bwid = p => .1 + .62 + .2 * Math.max(0, p.nz) - .1 * Math.max(0, -p.nz) + bw(p.u);
      const at = (p, f) => [p.x + p.nx * lerp(.12, bwid(p), f), p.z + p.nz * lerp(.12, bwid(p), f)];
      const toward = (dx, dz) => { const l = Math.hypot(dx, dz); return B0.reduce((b, p) => (p.nx * dx + p.nz * dz) / l + (p.x * dx + p.z * dz) * .02 > (b.nx * dx + b.nz * dz) / l + (b.x * dx + b.z * dz) * .02 ? p : b); };
      const out = p => Math.atan2(p.nx, p.nz);
      if (PK) {
        [[-1, -1, 'tree_palmTall', .5], [1, -1, 'tree_palmBend', .48], [-1, -.25, 'tree_palmShort', .55], [1, -.4, 'tree_palmTall', .5]].forEach(([dx, dz, n, f], i) => { const p = toward(dx, dz), [x, z] = at(p, f); put(n, x, -.86, z, { s: (i < 2 ? 1.25 : 1.05) + R() * .15, sway: .03, ry: out(p) + (R() - .5) * .6, tint: green() }); });
        [[-1, .2, 'stone_largeC', .62, .55], [1, .3, 'stone_largeE', .5, .6], [-.4, -1, 'stone_smallE', .7, .6], [.5, -1, 'stone_largeC', .45, .55], [-1, -.6, 'stone_smallA', .8, .7], [1, .9, 'rock_smallFlatA', 1, .45], [-.7, 1, 'stone_smallA', .6, .8]].forEach(([dx, dz, n, sc, f]) => { const p = toward(dx, dz), [x, z] = at(p, f); put(n, x, -.86, z, { s: sc, tintAll: new THREE.Color('#F4E6CC') }); });
        { const p = toward(1, -.1), [x, z] = at(p, .55); put('log', x, -.86, z, { s: 1.6, ry: out(p) + Math.PI / 2 }); }
        { const p = toward(.75, 1), [x, z] = at(p, 1.02); put('canoe', x, -.93, z, { s: 1.5, ry: out(p) + 1.2 }); }
        { const p = toward(.3, -1), [x, z] = at(p, .5); put('mushroom_tanGroup', x, -.86, z, { s: 1.2, cast: false }); }
      }
      { const p = toward(-.45, 1), [x, z] = at(p, .5); umbrella(D, x, -.86, z, '#3D8BFF', '#FFFFFF', .4); }
      { const p = toward(-.8, .9), [x, z] = at(p, .55); sandcastle(D, x, -.86, z, .75); }
      { const b = sailboat('#EF5A5A'); b.position.set(-(gx + 2.4), -.95, gz + 1.5); b.rotation.y = .7; b.scale.setScalar(.75); b.userData.boat = 1; D.add(b); st.boat = b; }
      const sfm = new THREE.MeshStandardMaterial({ color: '#FF8A5C', roughness: .7 });
      D.add(mesh(mergeGeometries([[.1, .7], [-.2, .82]].map(([dx, f]) => { const p = toward(dx, 1), [x, z] = at(p, f); return g.star.clone().scale(.6, .6, .35).rotateZ(R() * 6).rotateX(-Math.PI / 2).translate(x, -.85, z); })), sfm, { cast: false })); }
    scatter(L, D);
    if (blobs.length) { const bm = new THREE.InstancedMesh(g.plane, blobM, blobs.length); blobs.forEach(([x, z, s], i) => { DUMMY.position.set(x, .012, z); DUMMY.rotation.set(0, 0, 0); DUMMY.scale.set(s, 1, s); DUMMY.updateMatrix(); bm.setMatrixAt(i, DUMMY.matrix); }); bm.renderOrder = 1; bm.castShadow = false; D.add(bm); }
  }
  // la càmera enquadra tota l'illa (vista de 3/4 des de davant)
  let camBase = { D: 10, yaw: 0 }, drag = { yaw: 0, v: 0, on: false };
  const camS = { tx: 0, tz: 0 };
  function fit() {
    const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width), hpx = Math.max(160, r.height);
    renderer.setSize(wpx, hpx, false); cam.aspect = wpx / hpx; cam.updateProjectionMatrix();
    if (composer) composer.setSize(wpx, hpx);
    fxA.mat.uniforms.uH.value = fxN.mat.uniforms.uH.value = hpx * pr;
    const { w, h } = st.W, pts = [], tall = [...st.W.trees, ...st.W.homes].some(k => +k.split(',')[1] === 0);
    for (const sx of [-1, 1]) { pts.push(new THREE.Vector3(sx * (w / 2 + .25), -.95, h / 2 + .38), new THREE.Vector3(sx * (w / 2 + .2), .95, h / 2), new THREE.Vector3(sx * (w / 2 + .2), tall ? 1.3 : 1, -h / 2)); }
    let D = 4;
    for (let i = 0; i < 70; i++) { setCam(D, 0, .86, 0, 0); cam.updateMatrixWorld(); if (pts.every(p => { const qq = p.clone().project(cam); return Math.abs(qq.x) < .955 && Math.abs(qq.y) < .94; })) break; D *= 1.035; }
    camBase.D = D;
  }
  function setCam(D, yaw, el_, tx, tz) { cam.position.set(Math.sin(yaw) * Math.cos(el_) * D + tx, Math.sin(el_) * D, Math.cos(yaw) * Math.cos(el_) * D + tz); cam.lookAt(tx, -.15, tz); }
  // en Bit a la seva casella, sense animació
  function place(S, hard) {
    lastS = S; pending.length = 0; flying.forEach(f => { world.remove(f.o); }); flying.length = 0;
    const p = pos(S.x, S.y); bitR.bit.position.set(p.x, 0, p.z); bitR.bit.rotation.y = rotOf(S.ang); bitR.carry.visible = !!S.carry; bitR.carry.position.set(0, 1.18, 0); setLed(S.led);
    for (const k of Object.keys(st.items)) { const o = st.items[k]; o.visible = true; o.scale.setScalar(o.userData.kind === 'box' ? .38 : 1); o.userData.gone = false; if (o.userData.kind === 'gem') { o.position.y = o.userData.y0; } }
    for (const gg of Object.values(st.gemGlow)) gg.visible = true;
    for (const h of Object.values(st.homes)) { h.done = false; h.ok.scale.setScalar(0); h.wins.forEach(w => w.material = m.win); }
    if (st.flag) st.flag.cloth.material = m.flag;
    for (const c of Object.values(st.paint)) { world.remove(c); c.geometry.dispose(); c.material.dispose(); } st.paint = {};
    anim = null; react = null; setExpr('n'); carryA = null; noteN = S.notes ? S.notes.length : 0; lastV = S.v;
    if (hard) { bitR.body.position.set(0, 0, 0); bitR.body.rotation.set(0, 0, 0); bitR.head.rotation.set(0, 0, 0); for (const s of Object.values(spr)) { s.x = 0; s.v = 0; } }
    sync(snap(S), true);
  }
  const snap = S => ({ x: S.x, y: S.y, gems: new Set(S.gems), boxes: new Set(S.boxes), done: new Set(S.done), paint: { ...(S.paint || {}) }, carry: S.carry, led: S.led });
  function setLed(c) { const col = c ? COL[c] : '#FFC531'; bitR.led.material.color.set(col); bitR.led.material.emissive.set(col); bitR.bulb.material.color.set(col); bitR.bulb.material.emissive.set(col); bitR.ledGlow.material.color.set(col); }
  function setExpr(k) { expr = k; bitR.eyes.visible = k === 'n'; bitR.joy.visible = k === 'joy'; bitR.sad.visible = k === 'sad'; bitR.smile.rotation.z = k === 'sad' ? 0 : Math.PI; bitR.smile.position.y = k === 'sad' ? -.1 : -.07; }
  // estat dels objectes segons la simulació (recollits, entregats, pintats…)
  function sync(S, quiet) {
    const now = NOW();
    for (const k of st.W.gems) { const o = st.items[k]; if (S.gems.has(k) && !o.userData.gone) { o.userData.gone = quiet ? -1 : now; st.gemGlow[k].visible = false; if (quiet) o.visible = false; else { const [x, y] = k.split(',').map(Number); fx('star', x, y); } } }
    for (const k of st.W.boxes) { const o = st.items['b' + k]; if (!S.boxes.has(k) && !o.userData.gone) { o.userData.gone = quiet ? -1 : now; if (quiet) o.visible = false; } }
    for (const [k, h] of Object.entries(st.homes)) if (S.done.has(k) && !h.done) { h.done = quiet ? -1 : now; h.wins.forEach(w => w.material = m.winOn); if (!quiet) { const [x, y] = k.split(',').map(Number); fx('heart', x, y); } }
    if (st.flag) { const on = st.W.goal && S.x === st.W.goal[0] && S.y === st.W.goal[1]; if (on && st.flag.cloth.material !== m.flagOk && !quiet) fxAt('flag', st.flag.f.position.clone().add(new THREE.Vector3(.2, .85, 0))); st.flag.cloth.material = on ? m.flagOk : m.flag; }
    for (const [k, c] of Object.entries(st.paint)) if (!S.paint || S.paint[k] !== c.userData.v) { world.remove(c); c.geometry.dispose(); c.material.dispose(); delete st.paint[k]; }
    for (const [k, v] of Object.entries(S.paint || {})) if (!st.paint[k]) { const [x, y] = k.split(',').map(Number), p = pos(x, y); const c = mesh(new RoundedBoxGeometry(.8, .04, .8, 2, .02), new THREE.MeshPhysicalMaterial({ color: COL[v] || COL.p, roughness: .35, clearcoat: .8 }), { p: [p.x, .02, p.z], cast: false, recv: true }); c.userData.v = v; c.userData.t0 = quiet ? 0 : now; st.paint[k] = c; world.add(c); if (!quiet) fxAt('paint', p, COL[v] || COL.p); }
    bitR.carry.visible = !!S.carry && !(carryA && !carryA.up); setLed(S.led);
  }
  function flush() { while (pending.length) sync(pending.shift().s); }
  // un pas: en Bit llisca d'una casella a l'altra (amb un petit salt) o gira
  function step(S, prev) {
    if (!prev) return place(S);
    flush(); lastS = S;
    const now = NOW(), gap = now - lastStepT; lastStepT = now;
    const dur = REDUCED ? 1 : gap < 520 ? clamp(gap * .88, 100, 380) : 380;
    const from = anim ? bitR.bit.position.clone() : pos(prev.x, prev.y), r0 = anim ? bitR.bit.rotation.y : rotOf(prev.ang ?? prev.d * 90), to = pos(S.x, S.y), r1 = rotOf(S.ang);
    const moved = prev.x !== S.x || prev.y !== S.y, turned = Math.abs(r1 - r0) > 1e-3;
    anim = { t0: now, dur, from, to, r0, r1, moved, turned, landed: false };
    react = null; setExpr('n');
    if (moved) { spr.sq.v -= 2.4; fxAt('puff', from, .5); }
    else if (turned) spr.sq.v -= 1.2;
    else if (!S.crash) spr.sq.v += 2.6;   // una acció (llum, nota, pintar…): petit bot
    pending.push({ at: now + (moved ? dur * .55 : Math.min(180, dur * .5)), s: snap(S) });
    if ((prev.carry || 0) !== (S.carry || 0)) carryA = { t0: now + (moved ? dur : 0), up: !!S.carry, cell: [S.x, S.y] };
    if (S.led && prev.led !== S.led) { ledFlash = now; setLed(S.led); }
    const nn = S.notes ? S.notes.length : 0; if (nn > noteN) fxAt('note', to); noteN = nn;
    if (lastV != null && S.v !== lastV) spr.sq.v += 1.5; lastV = S.v;
  }
  // reaccions d'en Bit: alegria, xoc, tristesa
  function doReact(k) { flush(); if (dizzy) dizzy.visible = false; react = { k, t0: NOW(), f: {} }; if (k === 'yay') { punch = NOW(); setExpr('joy'); } if (k === 'sad' || k === 'hit') setExpr('sad'); }
  // efectes de partícules a una casella (o entre dues: x,y no enters = el lloc del xoc)
  function fx(kind, x, y) {
    if (kind === 'dust' && st) { const ax = Math.round(2 * x - lastS.x), ay = Math.round(2 * y - lastS.y), kk = ax + ',' + ay, out = ax < 0 || ay < 0 || ax >= st.W.w || ay >= st.W.h;
      const p = pos(x, y); if (st.W.water.has(kk)) return fxAt('splash', p, [ax - lastS.x, ay - lastS.y]); if (st.W.trees.has(kk)) return fxAt('leaves', p); if (out) return fxAt('edge', p); return fxAt('dust', p); }
    fxAt(kind, pos(x, y));
  }
  const V = (a, b, c) => [a, b, c], rr = (a, b) => a + Math.random() * (b - a);
  function fxAt(kind, p, arg) {
    if (REDUCED) return;
    const n = k => Math.max(1, Math.round(k * q.fx)), P = (dy = 0) => [p.x, p.y + dy, p.z];
    if (kind === 'star') { for (let i = 0; i < n(22); i++) { const a = Math.random() * 6.28, s = rr(.8, 2.2); fxA.emit({ p: P(.45), v: V(Math.cos(a) * s, rr(1, 3.2), Math.sin(a) * s), c: ['#FFE16B', '#FFFFFF', '#FFC531', '#FFF2B0'][i % 4], s: rr(.12, .22), s1: .02, life: rr(.5, .9), g: 4, drag: 2.2, k: 1, rv: rr(-6, 6) }); }
      fxA.emit({ p: P(.42), c: '#FFE38A', a: .9, s: .2, s1: 1.6, life: .45, k: 7 }); fxA.emit({ p: P(.42), c: '#FFF6D0', a: 1, s: .9, s1: .2, life: .3, k: 0 }); }
    else if (kind === 'heart') { for (let i = 0; i < n(9); i++) fxN.emit({ p: [p.x + rr(-.25, .25), .6, p.z + rr(-.2, .2)], v: V(rr(-.2, .2), rr(.6, 1.2), rr(-.2, .2)), c: ['#FF5C86', '#FF8FB0'][i % 2], s: rr(.12, .2), life: rr(1, 1.5), drag: .5, k: 2, rot: rr(-.3, .3), fin: .1, flut: .4 });
      for (let i = 0; i < n(8); i++) fxA.emit({ p: [p.x + rr(-.3, .3), rr(.3, .8), p.z + rr(-.3, .3)], c: '#FFD6E2', s: rr(.08, .14), s1: 0, life: rr(.5, .9), k: 1 }); }
    else if (kind === 'confetti') { const C = ['#FFC531', '#3CC47C', '#3D8BFF', '#EF5A5A', '#8B5CF6', '#FF8FB1'];
      for (let i = 0; i < n(56); i++) { const a = Math.random() * 6.28, s = rr(.5, 2); fxN.emit({ p: P(.9), v: V(Math.cos(a) * s, rr(2.6, 4.6), Math.sin(a) * s), c: C[i % C.length], s: rr(.09, .13), life: rr(1.4, 2.2), g: 4.2, drag: 1.6, k: 3, rv: rr(-14, 14), flut: .8 }); }
      for (let i = 0; i < n(16); i++) fxA.emit({ p: [p.x + rr(-.5, .5), rr(.6, 1.5), p.z + rr(-.5, .5)], c: '#FFF4C0', s: rr(.1, .2), s1: 0, life: rr(.5, 1), k: 1, rv: 3 }); }
    else if (kind === 'flag') { for (let i = 0; i < n(18); i++) { const a = Math.random() * 6.28; fxA.emit({ p: P(), v: V(Math.cos(a) * rr(.4, 1.2), rr(.2, 1.5), Math.sin(a) * rr(.4, 1.2)), c: ['#7CFFB0', '#FFFFFF', '#FFE16B'][i % 3], s: rr(.1, .18), s1: .02, life: rr(.5, .9), drag: 2, k: 1 }); } }
    else if (kind === 'dust' || kind === 'edge' || kind === 'puff' || kind === 'land') { const big = kind === 'dust' || kind === 'edge', N = kind === 'puff' ? 3 : kind === 'land' ? 6 : 14, S0 = arg ?? 1;
      for (let i = 0; i < n(N); i++) { const a = Math.random() * 6.28, s = big ? rr(.5, 1.3) : rr(.15, .45); fxN.emit({ p: [p.x + Math.cos(a) * .12, big ? .15 : .04, p.z + Math.sin(a) * .12], v: V(Math.cos(a) * s, big ? rr(.4, 1.1) : rr(.05, .25), Math.sin(a) * s), c: ['#EADFC8', '#D8CAB0', '#F4EDE0'][i % 3], a: big ? .85 : .6, s: (big ? rr(.14, .24) : rr(.07, .12)) * S0, s1: (big ? rr(.35, .5) : .2) * S0, life: big ? rr(.6, 1) : rr(.35, .55), g: big ? .8 : 0, drag: 3, k: 0 }); }
      if (big) for (let i = 0; i < n(7); i++) { const a = Math.random() * 6.28; fxN.emit({ p: P(.2), v: V(Math.cos(a) * rr(.6, 1.4), rr(1, 2.2), Math.sin(a) * rr(.6, 1.4)), c: kind === 'edge' ? '#8E5A31' : '#9AA1B2', s: rr(.04, .07), life: rr(.5, .8), g: 6, k: 3, rv: rr(-10, 10) }); } }
    else if (kind === 'splash') { const y0 = p.y < -.5 ? -.95 : -.075, c = arg ? [p.x + arg[0] * .22, p.z + arg[1] * .22] : [p.x, p.z];
      for (let i = 0; i < n(34); i++) { const a = Math.random() * 6.28, s = rr(.25, 1.1); fxN.emit({ p: [c[0], y0 + .05, c[1]], v: V(Math.cos(a) * s, rr(1.8, 3.8), Math.sin(a) * s), c: ['#E9FBFF', '#9BE7F7', '#FFFFFF'][i % 3], a: .95, s: rr(.07, .13), life: rr(.5, .85), g: 8, drag: .6, k: 6 }); }
      for (let i = 0; i < n(8); i++) { const a = Math.random() * 6.28; fxN.emit({ p: [c[0] + Math.cos(a) * .1, y0 + .04, c[1] + Math.sin(a) * .1], v: V(Math.cos(a) * .4, rr(.1, .3), Math.sin(a) * .4), c: '#FFFFFF', a: .7, s: .14, s1: .34, life: .6, drag: 3, k: 0 }); }
      for (let i = 0; i < 3; i++) ripple(c[0], y0, c[1], i * .14, .7 + i * .25); }
    else if (kind === 'leaves') { for (let i = 0; i < n(14); i++) { const a = Math.random() * 6.28; fxN.emit({ p: [p.x + rr(-.2, .2), rr(.6, 1), p.z + rr(-.2, .2)], v: V(Math.cos(a) * rr(.2, .8), rr(.2, 1), Math.sin(a) * rr(.2, .8)), c: ['#4FB244', '#7CCB52', '#2F8F45', '#A6D85C'][i % 4], s: rr(.08, .13), life: rr(1.2, 1.9), g: 1.2, drag: 2.5, k: 5, rv: rr(-5, 5), flut: 1.2 }); } fxAt('dust', p); }
    else if (kind === 'note') { const C = ['#8B5CF6', '#3D8BFF', '#EF5A5A', '#3CC47C', '#FFB21F']; fxN.emit({ p: [p.x + rr(-.1, .1), 1.05, p.z], v: V(rr(-.25, .25), .9, 0), c: C[Math.floor(Math.random() * C.length)], s: .26, s1: .3, life: 1.3, drag: .4, k: 4, rot: rr(-.3, .3), fin: .08, flut: .5 }); }
    else if (kind === 'paint') { for (let i = 0; i < n(12); i++) { const a = Math.random() * 6.28, s = rr(.4, 1.1); fxN.emit({ p: [p.x, .08, p.z], v: V(Math.cos(a) * s, rr(.8, 1.8), Math.sin(a) * s), c: arg, s: rr(.05, .09), life: rr(.4, .6), g: 7, k: 6 }); } }
    else if (kind === 'ring') { fxA.emit({ p: P(), c: arg || '#FFFFFF', a: .8, s: .3, s1: 1.4, life: .5, k: 7, rot: 0 }); }
  }
  // onades circulars a l'aigua (esquitxos, peixos)
  function ripple(x, y, z, delay, size) { const r = new THREE.Mesh(g.plane, new THREE.MeshBasicMaterial({ map: ringTex(), transparent: true, depthWrite: false, opacity: 0, toneMapped: false })); r.position.set(x, y + .02, z); r.scale.setScalar(.01); world.add(r); ripples.push({ o: r, t0: NOW() + delay * 1000, size }); }
  let RT = null; const ringTex = () => RT || (RT = canvasTex(64, 64, (c) => { c.strokeStyle = '#fff'; c.lineWidth = 3; c.beginPath(); c.arc(32, 32, 28, 0, 7); c.stroke(); }));
  function marks(on, pick) {
    while (marksG.children.length) { const c = marksG.children.pop(); c.material.map.dispose(); c.material.dispose(); }
    if (!on) return;
    for (const [k, [x, y]] of Object.entries(st.W.marks)) { const p = pos(x, y), sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex(k, pick === k), depthTest: false })); sp.position.set(p.x, .6, p.z); sp.scale.setScalar(.5); sp.userData.k = k; sp.userData.ph = rnd(x, y, 9) * 6; sp.renderOrder = 10; marksG.add(sp); }
  }
  // arrossegar amb el dit/ratolí gira una mica la càmera (i torna sola)
  const onDown = e => { drag.on = true; drag.x = e.clientX; drag.y0 = drag.yaw; try { cv.setPointerCapture(e.pointerId); } catch (er) { /* res */ } };
  const onMove = e => { if (!drag.on) return; drag.yaw = Math.max(-.6, Math.min(.6, drag.y0 + (e.clientX - drag.x) * .006)); };
  const up = () => { drag.on = false; };
  cv.addEventListener('pointerdown', onDown); cv.addEventListener('pointermove', onMove); cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  const ro = new ResizeObserver(() => st && fit()); ro.observe(el);
  let io = null; if (typeof IntersectionObserver === 'function') { io = new IntersectionObserver(es => { visible = es[es.length - 1].isIntersecting; }); io.observe(el); }

  /* ----- postprocessat i qualitat ----- */
  class AOPass extends GTAOPass {   // l'oclusió no ha de veure partícules, halos ni coses transparents
    _overrideVisibility() { super._overrideVisibility(); const c = this._visibilityCache; this.scene.traverse(o => { const mm = o.material; if (o.visible && (o.isSprite || o.isPoints || (mm && mm.transparent))) { o.visible = false; c.push(o); } }); }
  }
  function setupPost() {
    if (composer) { composer.passes.forEach(x => x.dispose && x.dispose()); composer.dispose(); composer = bloom = ao = null; }
    if (!q.post) return;
    const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width), hpx = Math.max(160, r.height);
    const rt = new THREE.WebGLRenderTarget(wpx * pr, hpx * pr, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt); composer.setPixelRatio(pr); composer.setSize(wpx, hpx);
    composer.addPass(new RenderPass(scene, cam));
    if (q.ao) { ao = new AOPass(scene, cam, wpx * pr, hpx * pr); ao.updateGtaoMaterial({ radius: .32, distanceExponent: 1.4, thickness: .9, scale: 1, samples: 12 }); ao.blendIntensity = .75; composer.addPass(ao); }
    bloom = new UnrealBloomPass(new THREE.Vector2(wpx, hpx), .3, .42, 1.0); composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }
  function setTier(k) {
    tier = k; q = QC[k]; pr = Math.min(q.pr, window.devicePixelRatio || 1); renderer.setPixelRatio(pr);
    if (sun.shadow.mapSize.x !== q.shadow) { sun.shadow.mapSize.set(q.shadow, q.shadow); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } renderer.shadowMap.needsUpdate = true; }
    sun.shadow.radius = q.sr; WU.uQ.value = k === 'low' ? 0 : 1; if (st && st.blades) st.blades.count = Math.round(st.bladeN * q.blades);
    setupPost(); if (st) fit();
  }
  // si va lent, baixa un graó (mai no en puja: no volem que oscil·li)
  const gov = { n: 0, sum: 0, warm: 0 };
  function govern(dt) {
    if (Q.forced || !shown || dt > .25) return;
    if (++gov.warm < 40) return;
    gov.n++; gov.sum += dt;
    if (gov.n < 50) return;
    const avg = gov.sum / gov.n; gov.n = 0; gov.sum = 0;
    if (avg > 1 / 42) { const i = TIERS.indexOf(tier); if (i > 0) { setTier(TIERS[i - 1]); gov.warm = 0; } else if (pr > .8 && avg > 1 / 26) { pr = Math.max(.75, pr - .25); renderer.setPixelRatio(pr); fit(); gov.warm = 0; } }
  }

  /* ----- animació ----- */
  const life = { fish: NOW() + 3500 + Math.random() * 3000, flies: [] };
  // mentre no està llest (peces, shaders compilats), es continua veient el dibuix 2D; després el 3D hi apareix a sobre
  const hostCls = [];
  queueMicrotask(() => { if (shown || !alive) return; for (const c of ['on', 'on3d']) if (el.classList.contains(c)) { el.classList.remove(c); hostCls.push(c); } });
  function show() { if (shown) return; shown = true; if (opt.shot) cv.style.transition = 'none'; cv.style.opacity = '1'; if (!vig.parentNode) cv.after(vig);
    setTimeout(() => { if (alive) hostCls.forEach(c => el.classList.add(c)); }, opt.shot ? 0 : 480); }
  function frame() {
    const dt = Math.min(.05, clock.getDelta()), now = NOW();
    UT.value += dt * (REDUCED ? .3 : 1); cloudT.offset.set(UT.value * .006, UT.value * .0035);
    const T = clock.elapsedTime;
    govern(dt);
    while (pending.length && pending[0].at <= now) sync(pending.shift().s);
    // càmera: entrada, gronxet suau, seguiment d'en Bit, sotrac i apropament de celebració
    if (!drag.on && Math.abs(drag.yaw) > .001) drag.yaw *= .92;
    let yaw = drag.yaw + (REDUCED ? 0 : Math.sin(T * .25) * .025), el_ = .86, D = camBase.D;
    const bp = bitR.bit.position, kf = 1 - Math.exp(-dt * 2); camS.tx += (clamp(bp.x * .06, -.3, .3) - camS.tx) * kf; camS.tz += (clamp(bp.z * .05, -.25, .25) - camS.tz) * kf;
    if (intro) { const u = clamp((now - intro.t0) / intro.dur), e = easeOut(u); yaw = lerp(intro.yaw, yaw, e); el_ = lerp(intro.el, el_, e); D = lerp(D * intro.dk, D, e); if (u >= 1) intro = null; }
    if (punch) { const tt = (now - punch) / 1000, pk = tt < .35 ? easeOut(tt / .35) : tt < 1.4 ? 1 : 1 - ease(clamp((tt - 1.4) / .6)); D *= 1 - .055 * pk; if (tt > 2) punch = 0; }
    setCam(D, yaw, el_, camS.tx, camS.tz);
    if (shake) { const tt = (now - shake) / 1000, a = .05 * Math.exp(-tt * 7); cam.position.x += Math.sin(tt * 61) * a; cam.position.y += Math.cos(tt * 53) * a * .6; if (tt > .6) shake = 0; }
    // arbres (procedurals), estrelles, bandera, cases, anelles i marques
    for (const c of st.trees) c.rotation.z = Math.sin(T * 1.3 + c.parent.userData.ph) * .04;
    for (const k of Object.keys(st.items)) { const o = st.items[k], u = o.userData;
      if (u.kind === 'gem') { if (u.gone > 0) { const qq = (now - u.gone) / 520; o.position.y = u.y0 + easeOut(clamp(qq)) * .9; u.star.rotation.y += dt * (8 + qq * 20); o.scale.setScalar(qq < .35 ? 1 + qq * 1.4 : Math.max(0, 1.49 * (1 - (qq - .35) / .65))); o.visible = qq < 1; } else if (!u.gone) { o.position.y = u.y0 + Math.sin(T * 2 + u.ph) * .06; u.star.rotation.set(-.55, Math.sin(T * 1.6 + u.ph) * .75, Math.sin(T * 1.1 + u.ph) * .08); u.glow.material.opacity = (q.post ? .55 : .85) + Math.sin(T * 3 + u.ph) * .15;
          if (!REDUCED && Math.random() < dt * .9 * q.fx) fxA.emit({ p: [o.position.x + rr(-.25, .25), o.position.y + rr(-.15, .25), o.position.z + rr(-.25, .25)], c: '#FFF1B0', s: rr(.08, .14), s1: 0, life: rr(.5, .8), k: 1, rv: 2 }); } }
      else if (u.kind === 'box' && u.gone > 0) { const qq = (now - u.gone) / 160; o.scale.setScalar(Math.max(0, .38 * (1 - qq))); o.visible = qq < 1; } }
    if (st.flag) { const a = st.flag.cloth.geometry.attributes.position, b = st.flag.base; for (let i = 0; i < a.count; i++) { const x = b[i * 3], y = b[i * 3 + 1]; a.array[i * 3 + 2] = Math.sin(x * 9 - T * 6 + y * 2) * .05 * x * 2.4; a.array[i * 3 + 1] = y - x * x * .15 * (1 + Math.sin(T * 2)) * .3; } a.needsUpdate = true; st.flag.cloth.geometry.computeVertexNormals(); }
    for (const h of Object.values(st.homes)) {
      if (!REDUCED && Math.random() < dt * 2.2) { const cp = h.hs.localToWorld(new THREE.Vector3(.17, .76, -.08)); fxN.emit({ p: [cp.x, cp.y, cp.z], v: V(rr(.02, .1), rr(.25, .4), rr(-.05, .05)), c: '#F4F6FA', a: .7, s: .07, s1: .3, life: rr(1.6, 2.2), drag: .3, k: 0, fin: .3 }); }
      if (h.done) { const qq = h.done < 0 ? 1 : Math.min(1, (now - h.done) / 450); h.ok.scale.setScalar(.34 * (qq < 1 ? 1 + Math.sin(qq * Math.PI) * .4 : 1) * qq); } }
    for (const r of st.rings) r.material.emissiveIntensity = .45 + Math.sin(T * 3) * .25;
    if (st.boat) { st.boat.position.y = -.95 + Math.sin(T * 1.3) * .025; st.boat.rotation.z = Math.sin(T * 1.1) * .06; st.boat.rotation.x = Math.sin(T * .9 + 1) * .04; }
    for (const sp of marksG.children) sp.position.y = .6 + Math.sin(T * 2.2 + sp.userData.ph) * .03;
    for (const c of Object.values(st.paint)) if (c.userData.t0) { const qq = clamp((now - c.userData.t0) / 300); c.scale.setScalar(qq < 1 ? .3 + .7 * easeOut(qq) + Math.sin(qq * Math.PI) * .15 : 1); }
    animBit(dt, T, now);
    // caixes que volen (entregar) i onades
    for (let i = flying.length - 1; i >= 0; i--) { const f = flying[i], qq = clamp((now - f.t0) / 380); f.o.position.lerpVectors(f.a, f.b, easeOut(qq)); f.o.position.y += Math.sin(qq * Math.PI) * .35; f.o.scale.setScalar(.3 * (1 - qq * .8)); f.o.rotation.y += dt * 6; if (qq >= 1) { world.remove(f.o); f.o.material.dispose(); flying.splice(i, 1); } }
    for (let i = ripples.length - 1; i >= 0; i--) { const r = ripples[i], tt = (now - r.t0) / 1000; if (tt < 0) continue; const u = tt / 1.1; r.o.scale.setScalar(.1 + u * r.size); r.o.material.opacity = .65 * (1 - u); if (u >= 1) { world.remove(r.o); r.o.material.dispose(); ripples.splice(i, 1); } }
    // vida: un peix que salta de tant en tant, i papallones
    if (q.life && !REDUCED) ambient(dt, T, now);
    fxA.update(dt); fxN.update(dt);
    BU.uBit.value.set(bp.x, bp.z, 1);
    bitBlob.position.set(bp.x, .014, bp.z); bitBlob.scale.setScalar(.8 * (1 - clamp(bitR.body.position.y, 0, .5) * .9));
  }
  function ambient(dt, T, now) {
    if (now > life.fish) { life.fish = now + 5000 + Math.random() * 6000;
      const a = (.12 + Math.random() * .76) * Math.PI, x = Math.cos(a) * (st.W.w / 2 + 1.9 + Math.random()), z = Math.sin(a) * (st.W.h / 2 + 1.7 + Math.random() * .8);
      const fish = life.fishO || (life.fishO = (() => { const f = new THREE.Group(), fm = new THREE.MeshStandardMaterial({ color: '#FF8C3A', roughness: .4 }); f.add(mesh(g.sph, fm, { s: [.05, .05, .12] }), mesh(g.cone4, fm, { p: [0, 0, -.13], s: [.06, .07, .01], r: [Math.PI / 2, 0, 0] })); return f; })());
      fish.position.set(x, -.95, z); fish.visible = true; world.add(fish); life.jump = { t0: now, x, z, dx: (Math.random() - .5) * .8, dz: (Math.random() - .5) * .8 };
      fxAt('splash', { x, y: -.95, z }); }
    if (life.jump) { const j = life.jump, u = (now - j.t0) / 700, f = life.fishO; if (u >= 1) { f.visible = false; life.jump = null; const p = { x: j.x + j.dx, y: -.89, z: j.z + j.dz }; for (let i = 0; i < 8; i++) { const a = Math.random() * 6.28; fxN.emit({ p: [p.x, -.9, p.z], v: V(Math.cos(a) * .5, rr(1, 2), Math.sin(a) * .5), c: '#E9FBFF', s: .06, life: .5, g: 8, k: 6 }); } ripple(p.x, -.95, p.z, 0, .8); }
      else { f.position.set(j.x + j.dx * u, -.95 + Math.sin(u * Math.PI) * .55, j.z + j.dz * u); f.rotation.set(-Math.cos(u * Math.PI) * 1.1, Math.atan2(j.dx, j.dz), 0); } }
    if (!life.flies.length) for (let i = 0; i < 2; i++) { const b = new THREE.Group(), wm = new THREE.MeshStandardMaterial({ color: i ? '#FFD23F' : '#FF7EB6', side: THREE.DoubleSide, roughness: .6 }); const wl = new THREE.Group(), wr = new THREE.Group();
      const wg = new THREE.CircleGeometry(.05, 8); wl.add(mesh(wg, wm, { p: [-.045, 0, 0], r: [-Math.PI / 2, 0, 0], cast: false })); wr.add(mesh(wg, wm, { p: [.045, 0, 0], r: [-Math.PI / 2, 0, 0], cast: false })); b.add(wl, wr, mesh(g.sph, mats().arm, { s: [.012, .012, .04], cast: false })); world.add(b); life.flies.push({ b, wl, wr, ph: i * 3.1, s: .35 + i * .12 }); }
    for (const f of life.flies) { const tt = T * f.s + f.ph, { w, h } = st.W, x = Math.sin(tt * 1.3) * (w / 2 - .3), z = Math.sin(tt * .9 + 1) * (h / 2 - .3), y = .55 + Math.sin(tt * 3.1) * .12; f.b.position.set(x, y, z); f.b.rotation.y = Math.atan2(Math.cos(tt * 1.3) * 1.3 * (w / 2), Math.cos(tt * .9 + 1) * .9 * (h / 2)); const fl = Math.sin(T * 24 + f.ph) * .9; f.wl.rotation.z = fl; f.wr.rotation.z = -fl; }
  }
  // en Bit: moviment, gir, rodes, braços, antena, ulls
  function animBit(dt, T, now) {
    const b = bitR; let hop = 0, lean = 0, bz = 0, roll = 0, spin = 0, hx = 0, hz = 0, armZ = 0, armX = 0, sqT = 0, hyT = 0, turnW = 0;
    if (anim) { const qq = clamp((now - anim.t0) / anim.dur), e = ease(qq);
      if (anim.moved) { const before = b.bit.position.clone(); b.bit.position.lerpVectors(anim.from, anim.to, e); wheelSpin += before.distanceTo(b.bit.position) / .16;
        hop = Math.sin(qq * Math.PI) * .06; lean = -Math.sin(qq * Math.PI * 2) * .14; sqT = .05 * Math.sin(qq * Math.PI); armX = Math.sin(qq * Math.PI * 2) * .55;
        if (qq > .9 && !anim.landed) { anim.landed = true; spr.sq.v -= 3; fxAt('land', anim.to); } }
      if (anim.turned) { const eb = ease(clamp((qq - .14) / .86)), eh = ease(clamp(qq / .55)); b.bit.rotation.y = lerp(anim.r0, anim.r1, eb); hyT = (lerp(anim.r0, anim.r1, eh) - b.bit.rotation.y); turnW = Math.sign(anim.r1 - anim.r0) * (qq < 1 ? 1 : 0); hop = Math.sin(qq * Math.PI) * .02; }
      else b.bit.rotation.y = anim.r1;
      if (qq >= 1) anim = null; }
    else { sqT = Math.sin(T * 2.4) * .012;
      // mira al voltant de tant en tant
      if (!react && now > look.t) { look.t = now + 2600 + Math.random() * 3200; look.y = Math.random() < .35 ? 0 : (Math.random() - .5) * .9; }
      if (!react) hyT = look.y; }
    if (react) { const tt = (now - react.t0) / 1000, F = react.f;
      if (react.k === 'yay') {
        if (tt < .16) sqT = -.15;
        else if (tt < .76) { const u = (tt - .16) / .6; if (!F.a) { F.a = 1; spr.sq.v += 4.5; } hop = Math.sin(u * Math.PI) * .46; spin = ease(u) * Math.PI * 2; sqT = .07; armZ = 2.3; }
        else if (tt < 1.12) { if (!F.b) { F.b = 1; spr.sq.v -= 5; fxAt('land', b.bit.position, 1.4); } const u = (tt - .76) / .36; hop = Math.sin(u * Math.PI) * .12; armZ = 2.3 - u; }
        else armZ = Math.max(0, 1.3 - (tt - 1.12) * 3);
        if (tt > .32 && !F.c) { F.c = 1; fxAt('confetti', b.bit.position.clone().add(new THREE.Vector3(0, .3, 0))); }
        if (tt > 2.8) { react = null; setExpr('n'); } }
      else if (react.k === 'hit') {
        bz = tt < .11 ? Math.sin(tt / .11 * Math.PI / 2) * .17 : .17 * Math.exp(-(tt - .11) * 8) * Math.cos((tt - .11) * 20);
        if (tt > .1 && !F.a) { F.a = 1; spr.sq.v -= 4; shake = now; }
        roll = Math.sin(tt * 13) * .2 * Math.exp(-tt * 1.8); hz = Math.sin(tt * 9 + 1) * .16 * Math.exp(-tt * 1.3); armZ = Math.sin(tt * 16) * .4 * Math.exp(-tt * 2);
        dizzy.visible = tt > .15 && tt < 1.9; if (dizzy.visible) { dizzy.rotation.y = tt * 7; dizzy.position.y = .5 + Math.sin(tt * 5) * .02; }
        if (tt > 2.4) { react = null; dizzy.visible = false; setExpr('n'); } }
      else if (react.k === 'sad') { const k1 = clamp(tt / .5); hx = .32 * k1; hyT = Math.sin(tt * 5.5) * .24 * Math.exp(-tt * 1.1) * k1; sqT = -.05 * k1; armZ = -.25 * k1;
        if (tt > 4) { react = null; setExpr('n'); } } }
    else dizzy.visible = false;
    if (expr === 'n') b.eyes.scale.y = ((T % 3.6) < .12 || (T % 7.1) < .1) ? .15 : 1;
    b.eyes.position.x = clamp(spr.hy.x, -.4, .4) * .05;
    // molles: aixafar/estirar, inclinació, gir del cap, antena
    const sub = dt > .02 ? 2 : 1;
    for (let i = 0; i < sub; i++) { const d2 = dt / sub; spring(spr.sq, sqT, 380, 15, d2); spring(spr.ln, lean, 230, 13, d2); spring(spr.hy, hyT, 140, 16, d2); spring(spr.an, -spr.ln.x * 1.8 - spr.sq.x * 1.5 + bz * 2.5, 110, 4.2, d2); spring(spr.az, roll * -2.2 + turnW * .25, 100, 4, d2); }
    const sq = clamp(spr.sq.x, -.3, .3);
    b.body.scale.set(1 - sq * .55, 1 + sq, 1 - sq * .55);
    b.body.rotation.set(spr.ln.x, spin, roll); b.body.position.set(0, hop, bz);
    b.head.rotation.set(hx, spr.hy.x, hz);
    b.ant.rotation.set(clamp(spr.an.x, -.8, .8), 0, clamp(spr.az.x, -.8, .8));
    turnAcc += turnW * dt * 9; b.wheels[0].rotation.x = wheelSpin + turnAcc; b.wheels[1].rotation.x = wheelSpin - turnAcc;
    b.arms.forEach((a, i) => { a.rotation.x = armX * (i ? -1 : 1); a.rotation.z = (i ? -1 : 1) * armZ; });
    // llum del pit i de l'antena
    const fl = ledFlash ? clamp(1 - (now - ledFlash) / 600) : 0; if (fl <= 0) ledFlash = 0;
    b.bulb.material.emissiveIntensity = 1.2 + Math.sin(T * 4) * .4 + fl * 3; b.led.material.emissiveIntensity = 1.4 + fl * 3; b.ledGlow.scale.setScalar(.2 + fl * .5); b.ledGlow.material.opacity = .45 + fl * .5;
    if (fl > .97) fxAt('ring', b.bit.localToWorld(new THREE.Vector3(0, 1.08, 0)), b.led.material.color.getStyle());
    // caixa: puja al cap en agafar-la; en deixar-la, vola cap a la casa
    if (carryA && now >= carryA.t0) { const u = clamp((now - carryA.t0) / 340);
      if (carryA.up) { b.carry.visible = true; b.carry.position.set(0, lerp(.2, 1.18, easeOut(u)) + Math.sin(u * Math.PI) * .25, lerp(.25, 0, u)); b.carry.scale.setScalar(.8 + .2 * u); if (u >= 1) carryA = null; }
      else { const h = st.homes[carryA.cell[0] + ',' + carryA.cell[1]]; const from = b.carry.getWorldPosition(new THREE.Vector3()); b.carry.visible = false;
        const o = mesh(g.rbox, new THREE.MeshStandardMaterial({ map: texs().crate, roughness: .8 }), { s: .3 }); o.position.copy(from); world.add(o);
        flying.push({ o, t0: now, a: from, b: h ? h.hs.localToWorld(new THREE.Vector3(0, .2, .25)) : from.clone().setY(0) }); carryA = null; } }
  }
  function loop() {
    if (!alive) return;
    if (!el.isConnected) return dispose();
    raf = requestAnimationFrame(loop);
    if (!visible || window.BIT3D_PAUSE || (typeof document !== 'undefined' && document.hidden)) { clock.getDelta(); return; }
    if (!shown) {
      if (!PK && !PKF && NOW() - t00 < 2500) return;   // espera les peces (així no es veu el canvi de decorat)
      if (PK && !st.decorPK) { st.decorPK = true; decorate(); }
      // compila els shaders en paral·lel (sense encallar la pàgina) abans del primer fotograma
      if (ready === 0) { ready = 1; const done = () => { ready = 2; }; try { if (renderer.extensions.has('KHR_parallel_shader_compile')) renderer.compileAsync(scene, cam).then(done, done); else done(); } catch (e) { done(); } setTimeout(done, 3000); }
      if (ready < 2) return;
      if (!REDUCED && !opt.shot) intro = { t0: NOW(), dur: 1500, yaw: -.8, el: 1.18, dk: 1.45 };
      clock.getDelta();
    }
    renderer.info.reset();
    frame();
    // l'ombra del sol només es refà cada fotograma quan alguna cosa es mou de debò (en Bit, caixes); si no, cada pocs fotogrames
    if (anim || react || carryA || flying.length || perf.f % ({ low: 4, mid: 2 }[tier] || 1) === 0) renderer.shadowMap.needsUpdate = true;
    if (composer) composer.render(); else renderer.render(scene, cam);
    perf.f++; perf.calls = renderer.info.render.calls; perf.tris = renderer.info.render.triangles;
    show();
  }
  function dispose() {
    alive = false; cancelAnimationFrame(raf); ro.disconnect(); if (io) io.disconnect();
    cv.removeEventListener('pointerdown', onDown); cv.removeEventListener('pointermove', onMove); cv.removeEventListener('pointerup', up); cv.removeEventListener('pointercancel', up);
    if (world) disposeGroup(world); if (bitR) disposeGroup(bitR.bit);
    if (composer) { composer.passes.forEach(x => x.dispose && x.dispose()); composer.dispose(); }
    fxA.dispose(); fxN.dispose(); env.dispose(); cloudT.dispose(); clouds.geometry.dispose(); clouds.material.dispose(); vig.remove(); if (WU.uDist.value) WU.uDist.value.dispose(); local.forEach(mm => mm.dispose());
    renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) { /* res */ }
  }

  let ready = 0;
  const t00 = NOW(), perf = { f: 0, t: NOW(), calls: 0, tris: 0 };
  renderer.info.autoReset = false;
  build(W, S);
  st.decorPK = !!PK;
  preload().then(() => { if (alive && PK && st && !st.decorPK) { st.decorPK = true; decorate(); } });
  setupPost();
  raf = requestAnimationFrame(loop);
  return {
    step, react: doReact, fx, marks, dispose, canvas: cv, scene, camera: cam, get bit() { return bitR; },
    reset(W2, S2) { if (W2 !== st.W) { build(W2, S2); st.decorPK = !!PK; if (shown && !REDUCED && !opt.shot) intro = { t0: NOW(), dur: 800, yaw: (Math.random() < .5 ? -1 : 1) * .3, el: .95, dk: 1.12 }; } else place(S2, true); },
    tick() { frame(); },   // un pas de les animacions sense dibuixar (proves)
    snapshot() { frame(); renderer.shadowMap.needsUpdate = true; if (composer) composer.render(); else renderer.render(scene, cam); return cv.toDataURL('image/png'); },
    quality: () => tier,
    // per a proves: fotogrames per segon des de l'última crida, crides de dibuix i triangles de l'últim fotograma
    stats() { const n = NOW(), o = { tier, pr, fps: +(perf.f * 1000 / Math.max(1, n - perf.t)).toFixed(1), calls: perf.calls, tris: perf.tris }; perf.f = 0; perf.t = n; return o; }
  };
}
// es pot fer servir WebGL en aquest aparell? (three.js r16x+ necessita WebGL 2)
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGL2RenderingContext && c.getContext('webgl2')); } catch (e) { return false; } }

/* ---------- Retrats d'en Bit (imatges per a la resta de l'app i les presentacions) ---------- */
export function portrait(pose = 'idle', size = 640) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(size, size); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.1;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(28, 1, .1, 50), env = skyEnv(r);
  sc.environment = env; sc.environmentIntensity = .6;
  sc.add(new THREE.HemisphereLight('#E6F4FF', '#8090B0', 1.0));
  const key = new THREE.DirectionalLight('#FFF3DC', 2.4); key.position.set(2.5, 4, 3.5); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.radius = 3; sc.add(key);
  const rim = new THREE.DirectionalLight('#9CC2FF', 1.4); rim.position.set(-3, 2, -2); sc.add(rim);
  const b = makeBit(); b.bit.scale.setScalar(1); b.ledGlow.visible = false; sc.add(b.bit);
  // ombra rodona a terra
  const sh = new THREE.Mesh(new THREE.CircleGeometry(.42, 32), new THREE.ShadowMaterial({ opacity: .22 })); sh.rotation.x = -Math.PI / 2; sh.receiveShadow = true; sc.add(sh);
  const A = b.arms, H = b.head;
  const up = (a, s, z) => { a.rotation.z = s * z; if (Math.abs(z) > 1.5) { a.scale.set(2, 2, 2); a.rotation.x = 0; } };
  if (pose === 'happy') { up(A[0], -1, 1.0); up(A[1], 1, 1.0); H.rotation.z = .1; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'win') { up(A[0], -1, 1.95); up(A[1], 1, 1.95); b.body.position.y = .12; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'dance') { up(A[0], -1, 1.95); up(A[1], 1, -.3); b.body.rotation.z = .14; H.rotation.z = -.16; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'wave') { up(A[1], 1, 1.95); A[1].rotation.x = -.2; H.rotation.z = .08; }
  if (pose === 'think') { A[1].rotation.z = 1.6; A[1].rotation.x = -1.1; H.rotation.z = .18; H.rotation.x = -.06; b.eyes.position.x = .03; b.eyes.position.y = .07; }
  if (pose === 'sad') { H.rotation.x = .28; up(A[0], -1, -.15); up(A[1], 1, -.15); b.eyes.visible = false; b.sad.visible = true; b.smile.rotation.z = 0; b.smile.position.y = -.1; }
  b.bit.rotation.y = pose === 'side' ? .9 : -.32;
  cam.position.set(1.0, 1.05, 2.9); cam.lookAt(0, .62, 0);
  if (pose === 'win') cam.lookAt(0, .7, 0);
  r.render(sc, cam);
  const url = r.domElement.toDataURL('image/png'); env.dispose(); r.dispose(); return url;
}
