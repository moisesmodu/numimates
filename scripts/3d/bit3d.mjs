/* ===== Numi Tech · el món d'en Bit en 3D (three.js) =====
   Font del fitxer tech-3d.js (es genera amb `node scripts/3d/build.mjs`; three.js va empaquetat a dins, sense CDN,
   perquè la CSP de l'app només deixa carregar codi del mateix domini).
   · Una illa de caselles amb relleu, mar animat, llum de sol amb ombres, arbres que es gronxen, estrelles que giren,
     cases, caixes i una bandera de roba. En Bit és un model 3D amb rodes, braços, antena i ulls que parpellegen.
   · L'API la fa servir tech-bot.js: Bit3D.create(contenidor, W, S, opcions) → { step, reset, react, fx, marks, dispose }.
   · El motor de simulació (on és en Bit, què ha recollit…) és el mateix de sempre (tech-bot.js); aquí només es dibuixa. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const COL = { r: '#EF5A5A', g: '#3CC47C', y: '#FFC531', u: '#3D8BFF', p: '#8B5CF6' };
const rnd = (x, y, k = 0) => { let h = (x * 374761393 + y * 668265263 + k * 2246822519) >>> 0; h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// materials compartits (es creen una vegada)
let M = null;
function mats() {
  if (M) return M;
  const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .85, metalness: 0, ...o });
  M = {
    grassA: std('#8FD36C'), grassB: std('#84CB61'), grassSide: std('#6DB24C'), dirt: std('#A86E3E'), dirt2: std('#8E5A31'), dirt3: std('#74462A'),
    sand: std('#F3DDA6'), sandSide: std('#DDBA7A'), water: new THREE.MeshStandardMaterial({ color: '#43B3EC', roughness: .15, metalness: .1, transparent: true, opacity: .88 }),
    sea: new THREE.MeshStandardMaterial({ color: '#FFFFFF', vertexColors: true, roughness: .2, metalness: .05, flatShading: true }),
    trunk: std('#8A5A33', { flatShading: true }), leaf1: std('#4FAE45', { flatShading: true }), leaf2: std('#62C152', { flatShading: true }), leaf3: std('#3D9A3A', { flatShading: true }),
    fruit: std('#FF6B5B', { roughness: .5 }), rock: std('#A3ABBD', { flatShading: true }), rock2: std('#8A93A8', { flatShading: true }), moss: std('#7DBB55', { flatShading: true }),
    wall: std('#FFF4DF'), roof: std('#E2574C', { flatShading: true }), door: std('#B07A3E'), win: std('#9ED3F2', { roughness: .3 }), winOn: new THREE.MeshStandardMaterial({ color: '#FFE27A', emissive: '#FFB52E', emissiveIntensity: .9 }),
    chimney: std('#B05A3C'), wood: std('#D29A5A'), woodD: std('#A86A33'), tape: std('#F6DCA8'),
    gold: new THREE.MeshStandardMaterial({ color: '#FFC531', emissive: '#B86E00', emissiveIntensity: .35, roughness: .3, metalness: .45 }),
    pole: std('#5B4636'), flag: new THREE.MeshStandardMaterial({ color: '#EF5A5A', side: THREE.DoubleSide, roughness: .7 }), flagOk: new THREE.MeshStandardMaterial({ color: '#3CC47C', side: THREE.DoubleSide, roughness: .7 }),
    stone: std('#8C93A6'), body: new THREE.MeshStandardMaterial({ color: '#F4F7FF', roughness: .35, metalness: .15 }), bodyB: new THREE.MeshStandardMaterial({ color: '#D7E2FF', roughness: .4, metalness: .15 }),
    visor: new THREE.MeshStandardMaterial({ color: '#16224F', roughness: .2, metalness: .3 }), eye: new THREE.MeshStandardMaterial({ color: '#7DF3FF', emissive: '#4FE6FF', emissiveIntensity: 1.2 }),
    wheel: std('#2A3557', { roughness: .6 }), hub: std('#8796C4'), arm: std('#20306A', { roughness: .5 }), hand: new THREE.MeshStandardMaterial({ color: '#FFC531', roughness: .4, metalness: .2 }),
    flower: [std('#FF8FB1'), std('#FFFFFF'), std('#FFD54A'), std('#B79CFF')], flowerC: std('#F5A623'), tuft: std('#5FA841', { flatShading: true })
  };
  return M;
}
const G = {};   // geometries compartides
function geos() {
  if (G.tile) return G;
  G.tile = new RoundedBoxGeometry(.96, .5, .96, 2, .06); G.sandTile = new RoundedBoxGeometry(.94, .5, .94, 2, .08);
  G.cyl = new THREE.CylinderGeometry(1, 1, 1, 10); G.ico = new THREE.IcosahedronGeometry(1, 1); G.dode = new THREE.DodecahedronGeometry(1, 0);
  G.box = new THREE.BoxGeometry(1, 1, 1); G.sph = new THREE.SphereGeometry(1, 16, 12); G.cone4 = new THREE.ConeGeometry(1, 1, 4); G.cone = new THREE.ConeGeometry(1, 1, 5);
  const s = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? .1 : .23; i ? s.lineTo(Math.cos(a) * r, Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, Math.sin(a) * r); } s.closePath();
  G.star = new THREE.ExtrudeGeometry(s, { depth: .07, bevelEnabled: true, bevelThickness: .03, bevelSize: .025, bevelSegments: 2 }); G.star.center();
  return G;
}
const mesh = (g, m, o = {}) => { const x = new THREE.Mesh(g, m); x.castShadow = o.cast !== false; x.receiveShadow = !!o.recv; if (o.p) x.position.set(...o.p); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); if (o.r) x.rotation.set(...o.r); return x; };
// textura de fusta per a les caixes, i rodona amb lletra per a les marques A/B/C
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
let TEX = null;
function texs() {
  if (TEX) return TEX;
  TEX = {
    crate: canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#D29A5A'; g.fillRect(0, 0, w, h); g.strokeStyle = '#A86A33'; g.lineWidth = 3; for (let y = 16; y < h; y += 28) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); } g.strokeStyle = '#7A4A1E'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); g.fillStyle = '#F6DCA8'; g.fillRect(w / 2 - 9, 0, 18, h); }),
    glow: canvasTex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,230,128,.9)'); r.addColorStop(1, 'rgba(255,230,128,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    dot: canvasTex(32, 32, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.6, 'rgba(255,255,255,.8)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    check: canvasTex(64, 64, (g, w) => { g.fillStyle = '#3CC47C'; g.beginPath(); g.arc(32, 32, 28, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 5; g.stroke(); g.lineWidth = 7; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(19, 33); g.lineTo(28, 42); g.lineTo(45, 23); g.stroke(); })
  };
  return TEX;
}
const markTex = (k, on) => canvasTex(96, 96, (g) => { g.fillStyle = on ? '#FFC531' : '#FFFFFF'; g.beginPath(); g.arc(48, 48, 42, 0, 7); g.fill(); g.lineWidth = 7; g.strokeStyle = '#20306A'; g.stroke(); g.fillStyle = '#20306A'; g.font = '900 52px Lexend, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(k, 48, 52); });

/* ---------- En Bit ---------- */
function makeBit() {
  const m = mats(), g = geos(), bit = new THREE.Group(), body = new THREE.Group(); bit.add(body);
  // cos arrodonit amb una franja i el llum del pit
  body.add(mesh(new RoundedBoxGeometry(.46, .3, .4, 4, .12), m.body, { p: [0, .32, 0] }));
  body.add(mesh(new RoundedBoxGeometry(.48, .06, .42, 2, .03), m.bodyB, { p: [0, .2, 0] }));
  const led = new THREE.Mesh(g.sph, new THREE.MeshStandardMaterial({ color: '#FFC531', emissive: '#FFB000', emissiveIntensity: .8 })); led.scale.set(.06, .06, .025); led.position.set(0, .33, .2);
  body.add(led);
  // rodes grans als costats
  const wheels = [-1, 1].map(s => { const w = new THREE.Group(); w.position.set(s * .25, .15, 0);
    w.add(mesh(new THREE.TorusGeometry(.11, .045, 10, 24), m.wheel, { r: [0, Math.PI / 2, 0] }), mesh(g.cyl, m.hub, { s: [.09, .05, .09], r: [0, 0, Math.PI / 2] }), mesh(g.cyl, m.wheel, { p: [s * .03, 0, 0], s: [.03, .02, .03], r: [0, 0, Math.PI / 2] }));
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
  // ulls d'alegria (∩) i de tristesa (∪), per als retrats
  const arcG = new THREE.TorusGeometry(.045, .016, 6, 16, Math.PI), joy = new THREE.Group(), sad = new THREE.Group();
  [-.11, .11].forEach(x => { const a = new THREE.Mesh(arcG, m.eye); a.position.set(x, .04, .265); joy.add(a); const b = new THREE.Mesh(arcG, m.eye); b.rotation.z = Math.PI; b.position.set(x, .06, .265); sad.add(b); });
  joy.visible = sad.visible = false; head.add(joy, sad);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(.045, .011, 6, 16, Math.PI), m.eye); smile.rotation.z = Math.PI; smile.position.set(0, -.07, .265); head.add(smile);
  [-1, 1].forEach(s => head.add(mesh(g.cyl, m.bodyB, { p: [s * .305, 0, 0], s: [.08, .04, .08], r: [0, 0, Math.PI / 2] })));
  head.add(mesh(g.cyl, m.arm, { p: [0, .3, 0], s: [.016, .14, .016] }));
  const bulb = new THREE.Mesh(g.sph, new THREE.MeshStandardMaterial({ color: '#FFC531', emissive: '#FFB000', emissiveIntensity: 1 })); bulb.scale.setScalar(.06); bulb.position.set(0, .4, 0); head.add(bulb);
  body.add(head);
  const carry = new THREE.Group(); carry.position.set(0, 1.18, 0); carry.visible = false;
  carry.add(mesh(g.box, new THREE.MeshStandardMaterial({ map: texs().crate, roughness: .8 }), { s: .3 })); body.add(carry);
  bit.traverse(o => { if (o.isMesh) o.castShadow = true; });
  bit.scale.setScalar(1.05);
  return { bit, body, head, eyes, joy, sad, smile, wheels, arms, led, bulb, carry };
}
/* ---------- L'illa ---------- */
export function create(el, W, S, opt = {}) {
  const m = mats(), g = geos(), t = texs();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: !!opt.shot });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.12;
  el.appendChild(renderer.domElement); renderer.domElement.className = 'b3c';
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#9ED8F5', 16, 34);
  const cam = new THREE.PerspectiveCamera(32, 1, .1, 100);
  scene.add(new THREE.HemisphereLight('#D6F0FF', '#6B8F4E', 1.15));
  const sun = new THREE.DirectionalLight('#FFF3DC', 2.2); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0004; sun.shadow.normalBias = .02;
  scene.add(sun, sun.target);
  let world = null, st = null, bitR = null, marksG = null, fxList = [], anim = null, clock = new THREE.Clock(), alive = true, sea = null, seaBase = null;
  const pos = (x, y) => new THREE.Vector3(x - (st.W.w - 1) / 2, 0, y - (st.W.h - 1) / 2);
  const rotOf = ang => (180 - ang) * Math.PI / 180;

  function build(W0, S0) {
    if (world) { scene.remove(world); world.traverse(o => { if (o.geometry && !Object.values(G).includes(o.geometry)) o.geometry.dispose(); }); }
    world = new THREE.Group(); scene.add(world);
    st = { W: W0, items: {}, trees: [], flag: null, homes: {}, paint: {} };
    const { w, h } = W0;
    // base de terra de l'illa (tres capes) i mar al voltant
    const base = mesh(new RoundedBoxGeometry(w + .5, .5, h + .5, 3, .2), m.grassSide, { p: [0, -.36, 0], recv: true }); world.add(base);
    [[m.dirt, -.75, .4], [m.dirt2, -1.1, .32], [m.dirt3, -1.38, .26]].forEach(([mm, y, k], i) => world.add(mesh(new RoundedBoxGeometry(w + .5 - i * .25, k, h + .5 - i * .25, 3, .12), mm, { p: [0, y, 0], recv: true })));
        const sg = new THREE.PlaneGeometry(w + 16, h + 16, 64, 64); sg.rotateX(-Math.PI / 2); { // més clar a prop de l'illa (aigua poc fonda) i més fosc lluny
      const pa = sg.attributes.position, cols = new Float32Array(pa.count * 3), near = new THREE.Color('#8EE6F5'), far = new THREE.Color('#2F97D8'), c = new THREE.Color();
      for (let i = 0; i < pa.count; i++) { const dx = Math.max(0, Math.abs(pa.getX(i)) - (w / 2 + .25)), dz = Math.max(0, Math.abs(pa.getZ(i)) - (h / 2 + .25)), d = Math.hypot(dx, dz); c.copy(near).lerp(far, Math.min(1, d / 2.6)); cols.set([c.r, c.g, c.b], i * 3); }
      sg.setAttribute('color', new THREE.BufferAttribute(cols, 3)); }
    sea = mesh(sg, m.sea, { p: [0, -.95, 0], cast: false, recv: true }); seaBase = sg.attributes.position.array.slice(); world.add(sea);
    // caselles
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = x + ',' + y, p = pos(x, y);
      if (W0.water.has(k)) { world.add(mesh(g.tile, m.sandSide, { p: [p.x, -.55, p.z], s: [1, .4, 1], recv: true })); const wt = mesh(new THREE.BoxGeometry(.94, .1, .94), m.water, { p: [p.x, -.2, p.z], cast: false, recv: true }); wt.userData.water = rnd(x, y); world.add(wt); continue; }
      const path = W0.path.has(k), fl = W0.floor[k];
      const top = mesh(path ? g.sandTile : g.tile, fl ? new THREE.MeshStandardMaterial({ color: COL[fl], roughness: .5, emissive: COL[fl], emissiveIntensity: .12 }) : path ? m.sand : (x + y) % 2 ? m.grassA : m.grassB, { p: [p.x, path ? -.27 : -.25, p.z], recv: true, cast: false });
      world.add(top);
      if (W0.target && W0.target[k]) { const ring = mesh(new THREE.TorusGeometry(.33, .03, 6, 4), new THREE.MeshStandardMaterial({ color: COL[W0.target[k]], emissive: COL[W0.target[k]], emissiveIntensity: .4 }), { p: [p.x, .01, p.z], r: [Math.PI / 2, 0, Math.PI / 4], cast: false }); world.add(ring); }
      // decoració de l'herba
      if (!path && !W0.rocks.has(k) && !W0.trees.has(k)) {
        if (rnd(x, y) < .4) { const f = new THREE.Group(); const c = m.flower[Math.floor(rnd(x, y, 3) * 4)]; [[.04, 0], [-.04, 0], [0, .04], [0, -.04]].forEach(([a, b]) => f.add(mesh(g.sph, c, { p: [a, .02, b], s: .035 }))); f.add(mesh(g.sph, m.flowerC, { p: [0, .035, 0], s: .03 })); f.position.set(p.x - .3 + rnd(x, y, 1) * .6, 0, p.z - .3 + rnd(x, y, 2) * .6); world.add(f); }
        if (rnd(x, y, 5) < .7) for (let i = 0; i < 3; i++) world.add(mesh(g.cone, m.tuft, { p: [p.x - .32 + rnd(x, y, 6 + i) * .64, .05, p.z - .32 + rnd(x, y, 9 + i) * .64], s: [.03, .12, .03], r: [rnd(x, y, 12 + i) * .4 - .2, 0, rnd(x, y, 15 + i) * .4 - .2] }));
      }
      if (W0.trees.has(k)) {
        const tr = new THREE.Group(), s = .85 + rnd(x, y, 11) * .3; tr.position.copy(p); tr.scale.setScalar(s);
        tr.add(mesh(g.cyl, m.trunk, { p: [0, .2, 0], s: [.07, .4, .07] }));
        const crown = new THREE.Group(); crown.position.y = .38;
        [[0, .22, 0, .26, m.leaf2], [-.13, .08, .06, .2, m.leaf1], [.14, .1, -.04, .21, m.leaf1], [.02, .05, .14, .18, m.leaf3]].forEach(([a, b, c, r, mm]) => crown.add(mesh(g.ico, mm, { p: [a, b, c], s: r })));
        if (rnd(x, y, 13) < .3) [[.12, .18, .16], [-.16, .14, .1]].forEach(q => crown.add(mesh(g.sph, m.fruit, { p: q, s: .04 })));
        tr.add(crown); tr.rotation.y = rnd(x, y, 14) * 6.3; tr.userData.ph = rnd(x, y, 15) * 6.3; st.trees.push(crown); world.add(tr);
      }
      if (W0.rocks.has(k)) {
        const rk = new THREE.Group(); rk.position.copy(p);
        rk.add(mesh(g.dode, m.rock, { p: [0, .16, 0], s: [.3, .22, .26], r: [rnd(x, y, 1), rnd(x, y, 2) * 3, 0] }));
        rk.add(mesh(g.dode, m.rock2, { p: [.2, .08, .14], s: [.13, .1, .12], r: [rnd(x, y, 3), 0, 0] }));
        if (rnd(x, y, 4) < .5) rk.add(mesh(g.dode, m.moss, { p: [-.08, .33, 0], s: [.14, .04, .12] }));
        world.add(rk);
      }
      if (W0.homes.has(k)) {
        const hs = new THREE.Group(); hs.position.copy(p);
        hs.add(mesh(new RoundedBoxGeometry(.6, .42, .52, 2, .03), m.wall, { p: [0, .21, 0] }));
        const roof = mesh(g.cone4, m.roof, { p: [0, .58, 0], s: [.52, .34, .46], r: [0, Math.PI / 4, 0] }); hs.add(roof);
        hs.add(mesh(g.box, m.chimney, { p: [.16, .66, -.06], s: [.08, .2, .08] }));
        hs.add(mesh(g.box, m.door, { p: [0, .13, .262], s: [.14, .26, .02] }));
        const wins = [-.19, .19].map(xx => { const wd = mesh(g.box, m.win, { p: [xx, .25, .262], s: [.12, .12, .02] }); hs.add(wd); return wd; });
        const ok = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.check, depthTest: false })); ok.position.set(0, 1.05, 0); ok.scale.setScalar(0); hs.add(ok);
        const smoke = [0, 1].map(i => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.dot, transparent: true, opacity: .7, depthWrite: false })); s.position.set(.16, .8, -.06); s.userData.ph = i * .5; hs.add(s); return s; });
        st.homes[k] = { hs, wins, ok, smoke, done: false }; world.add(hs);
      }
    }
    // coses que canvien: estrelles, caixes, bandera
    for (const k of W0.gems) { const [x, y] = k.split(',').map(Number), p = pos(x, y), gr = new THREE.Group(); gr.position.set(p.x, .38, p.z);
      const s = mesh(g.star, m.gold); gr.add(s); const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); glow.scale.setScalar(.9); gr.add(glow);
      gr.userData = { kind: 'gem', ph: rnd(x, y, 4) * 6, star: s, y0: .38 }; st.items[k] = gr; world.add(gr); }
    for (const k of W0.boxes) { const [x, y] = k.split(',').map(Number), p = pos(x, y), b = mesh(g.box, new THREE.MeshStandardMaterial({ map: t.crate, roughness: .8 }), { p: [p.x, .19, p.z], s: .38 }); b.rotation.y = rnd(x, y) * .5 - .25; b.userData = { kind: 'box' }; st.items['b' + k] = b; world.add(b); }
    if (W0.goal) { const p = pos(...W0.goal), f = new THREE.Group(); f.position.set(p.x - .12, 0, p.z);
      f.add(mesh(g.cyl, m.stone, { p: [0, .04, 0], s: [.14, .08, .14] }), mesh(g.cyl, m.pole, { p: [0, .5, 0], s: [.025, 1, .025] }), mesh(g.sph, m.hand, { p: [0, 1.01, 0], s: .04 }));
      const cg = new THREE.PlaneGeometry(.42, .27, 12, 4); cg.translate(.21, 0, 0); const cloth = mesh(cg, m.flag, { p: [.02, .84, 0] }); f.add(cloth); st.flag = { f, cloth, base: cg.attributes.position.array.slice() }; world.add(f); }
    // en Bit
    if (!bitR) bitR = makeBit();
    world.add(bitR.bit);
    marksG = new THREE.Group(); world.add(marksG);
    // càmera i sol segons la mida del mapa
    fit();
    const R = Math.max(w, h) * .9 + 2; Object.assign(sun.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: .5, far: 40 }); sun.shadow.camera.updateProjectionMatrix();
    sun.position.set(R * .55, R * 1.5, R * .9); sun.target.position.set(0, 0, 0);
    place(S0, true);
  }
  // la càmera enquadra tota l'illa (vista de 3/4 des de davant)
  let camBase = { D: 10, yaw: 0 }, drag = { yaw: 0, v: 0, on: false };
  function fit() {
    const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width), hpx = Math.max(160, r.height);
    renderer.setSize(wpx, hpx, false); cam.aspect = wpx / hpx; cam.updateProjectionMatrix();
    const { w, h } = st.W, pts = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const y of [-1.0, .9]) pts.push(new THREE.Vector3(sx * (w / 2 + .2), y, sz * (h / 2 + .2)));
    let D = 4;
    for (let i = 0; i < 60; i++) { setCam(D, 0); cam.updateMatrixWorld(); if (pts.every(p => { const q = p.clone().project(cam); return Math.abs(q.x) < .97 && Math.abs(q.y) < .95; })) break; D *= 1.04; }
    camBase.D = D; setCam(D, drag.yaw);
  }
  function setCam(D, yaw) { const el_ = .86; cam.position.set(Math.sin(yaw) * Math.cos(el_) * D, Math.sin(el_) * D, Math.cos(yaw) * Math.cos(el_) * D); cam.lookAt(0, -.15, 0); }
  // en Bit a la seva casella, sense animació
  function place(S, hard) {
    const p = pos(S.x, S.y); bitR.bit.position.set(p.x, 0, p.z); bitR.bit.rotation.y = rotOf(S.ang); bitR.carry.visible = !!S.carry; setLed(S.led);
    for (const k of Object.keys(st.items)) { const o = st.items[k]; o.visible = true; o.scale.setScalar(o.userData.kind === 'box' ? .38 : 1); o.userData.gone = false; }
    for (const h of Object.values(st.homes)) { h.done = false; h.ok.scale.setScalar(0); h.wins.forEach(w => w.material = m.win); }
    if (st.flag) st.flag.cloth.material = m.flag;
    for (const c of Object.values(st.paint)) world.remove(c); st.paint = {};
    anim = null; if (hard) bitR.body.position.set(0, 0, 0);
    sync(S);
  }
  function setLed(c) { const col = c ? COL[c] : '#FFC531'; bitR.led.material.color.set(col); bitR.led.material.emissive.set(col); bitR.bulb.material.color.set(col); bitR.bulb.material.emissive.set(col); }
  // estat dels objectes segons la simulació (recollits, entregats, pintats…)
  function sync(S, prev) {
    for (const k of st.W.gems) { const o = st.items[k]; if (S.gems.has(k) && !o.userData.gone) { o.userData.gone = performance.now(); const [x, y] = k.split(',').map(Number); fx('star', x, y); } }
    for (const k of st.W.boxes) { const o = st.items['b' + k]; if (!S.boxes.has(k) && !o.userData.gone) o.userData.gone = performance.now(); }
    for (const [k, h] of Object.entries(st.homes)) if (S.done.has(k) && !h.done) { h.done = performance.now(); h.wins.forEach(w => w.material = m.winOn); const [x, y] = k.split(',').map(Number); fx('heart', x, y); }
    if (st.flag) st.flag.cloth.material = st.W.goal && S.x === st.W.goal[0] && S.y === st.W.goal[1] ? m.flagOk : m.flag;
    for (const [k, v] of Object.entries(S.paint || {})) if (!st.paint[k]) { const [x, y] = k.split(',').map(Number), p = pos(x, y); const c = mesh(new RoundedBoxGeometry(.8, .04, .8, 2, .02), new THREE.MeshStandardMaterial({ color: COL[v] || COL.p, roughness: .5 }), { p: [p.x, .02, p.z], cast: false, recv: true }); st.paint[k] = c; world.add(c); }
    bitR.carry.visible = !!S.carry; setLed(S.led);
  }
  // un pas: en Bit llisca d'una casella a l'altra (amb un petit salt) o gira
  function step(S, prev) {
    if (!prev) return place(S);
    const from = pos(prev.x, prev.y), to = pos(S.x, S.y), r0 = rotOf(prev.ang ?? prev.d * 90), r1 = rotOf(S.ang);
    anim = { t0: performance.now(), dur: REDUCED ? 1 : 380, from, to, r0, r1, moved: prev.x !== S.x || prev.y !== S.y, S };
    if (anim.moved) sync(S); else setTimeout(() => sync(S), 180);
  }
  // reaccions d'en Bit: alegria, xoc, tristesa
  let react = null;
  function doReact(k) { react = { k, t0: performance.now() }; if (k === 'hit') { const a = st && bitR.bit.position; void a; } if (k === 'yay') fxAt('confetti', bitR.bit.position.clone()); }
  // efectes de partícules a una casella
  function fx(kind, x, y) { fxAt(kind, pos(x, y)); }
  function fxAt(kind, p) {
    if (REDUCED) return;
    const n = kind === 'confetti' ? 26 : kind === 'dust' ? 10 : 14, cols = kind === 'star' ? ['#FFE16B', '#FFFFFF', '#FFC531'] : kind === 'dust' ? ['#EDE4D3', '#D9CDB5'] : kind === 'heart' ? ['#FF6B8B', '#FF9DB3'] : ['#FFC531', '#3CC47C', '#3D8BFF', '#EF5A5A', '#8B5CF6'];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.dot, color: cols[i % cols.length], transparent: true, depthWrite: false }));
      const a = Math.random() * Math.PI * 2, sp = kind === 'dust' ? .6 + Math.random() * .5 : 1 + Math.random() * 1.4;
      s.position.set(p.x, (kind === 'dust' ? .2 : .45), p.z); s.scale.setScalar(kind === 'confetti' ? .07 : kind === 'dust' ? .14 : .09);
      s.userData = { v: new THREE.Vector3(Math.cos(a) * sp, (kind === 'dust' ? .6 : 2.2) + Math.random() * 1.5, Math.sin(a) * sp), life: 0, max: .7 + Math.random() * .5, g: kind === 'dust' ? 1.5 : 5 };
      world.add(s); fxList.push(s);
    }
  }
  function marks(on, pick) {
    while (marksG.children.length) { const c = marksG.children.pop(); c.material.map.dispose(); c.material.dispose(); }
    if (!on) return;
    for (const [k, [x, y]] of Object.entries(st.W.marks)) { const p = pos(x, y), sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex(k, pick === k), depthTest: false })); sp.position.set(p.x, .55, p.z); sp.scale.setScalar(.48); sp.userData.k = k; marksG.add(sp); }
  }
  // arrossegar amb el dit/ratolí gira una mica la càmera (i torna sola)
  const cv = renderer.domElement;
  cv.addEventListener('pointerdown', e => { drag.on = true; drag.x = e.clientX; drag.y0 = drag.yaw; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => { if (!drag.on) return; drag.yaw = Math.max(-.6, Math.min(.6, drag.y0 + (e.clientX - drag.x) * .006)); });
  const up = () => { drag.on = false; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  const ro = new ResizeObserver(() => st && fit()); ro.observe(el);

  function loop() {
    if (!alive) return;
    if (!el.isConnected) return dispose();
    requestAnimationFrame(loop);
    const dt = Math.min(.05, clock.getDelta()), T = clock.elapsedTime, now = performance.now();
    if (!drag.on && Math.abs(drag.yaw) > .001) drag.yaw *= .92;
    setCam(camBase.D, drag.yaw + (REDUCED ? 0 : Math.sin(T * .25) * .025));
    // mar i aigua
    if (sea && !REDUCED) { const a = sea.geometry.attributes.position, b = seaBase; for (let i = 0; i < a.count; i++) { const x = b[i * 3], z = b[i * 3 + 2]; a.array[i * 3 + 1] = Math.sin(x * 1.3 + T * 1.4) * .05 + Math.cos(z * 1.1 + T * 1.1) * .05; } a.needsUpdate = true; sea.geometry.computeVertexNormals(); }
    // arbres, estrelles, bandera, fum
    for (const c of st.trees) c.rotation.z = Math.sin(T * 1.3 + c.parent.userData.ph) * .04;
    for (const k of Object.keys(st.items)) { const o = st.items[k], u = o.userData;
      if (u.kind === 'gem') { if (u.gone) { const q = (now - u.gone) / 450; o.position.y = u.y0 + q * .8; o.scale.setScalar(Math.max(0, 1 + q * .6) * (q < 1 ? 1 : 0)); o.visible = q < 1; } else { o.position.y = u.y0 + Math.sin(T * 2 + u.ph) * .06; u.star.rotation.y = T * 1.8 + u.ph; } }
      else if (u.kind === 'box' && u.gone) { const q = (now - u.gone) / 300; o.scale.setScalar(Math.max(0, .38 * (1 - q))); o.visible = q < 1; } }
    if (st.flag) { const a = st.flag.cloth.geometry.attributes.position, b = st.flag.base; for (let i = 0; i < a.count; i++) { const x = b[i * 3]; a.array[i * 3 + 2] = Math.sin(x * 9 - T * 6) * .05 * x * 2.4; } a.needsUpdate = true; st.flag.cloth.geometry.computeVertexNormals(); }
    for (const h of Object.values(st.homes)) { h.smoke.forEach(s => { const q = ((T * .45 + s.userData.ph) % 1); s.position.y = .8 + q * .5; s.scale.setScalar(.08 + q * .16); s.material.opacity = .7 * (1 - q); });
      if (h.done) { const q = Math.min(1, (now - h.done) / 450); h.ok.scale.setScalar(.34 * (q < 1 ? 1 + Math.sin(q * Math.PI) * .4 : 1) * q); } }
    // en Bit: moviment, gir, rodes, braços, parpelleig
    const b = bitR, bt = T;
    if (anim) { const q = Math.min(1, (now - anim.t0) / anim.dur), e = ease(q);
      b.bit.position.lerpVectors(anim.from, anim.to, e); b.bit.rotation.y = anim.r0 + (anim.r1 - anim.r0) * e;
      b.body.position.y = anim.moved ? Math.sin(q * Math.PI) * .08 : 0;
      if (anim.moved) b.wheels.forEach(w => w.rotation.x += dt * 16);
      b.arms.forEach((a, i) => a.rotation.x = anim.moved ? Math.sin(q * Math.PI * 2 + i * Math.PI) * .5 : 0);
      if (q >= 1) anim = null; }
    else { b.body.position.y = Math.sin(bt * 2.4) * .012; b.arms.forEach((a, i) => a.rotation.x *= .85); }
    b.head.rotation.z = 0; b.head.rotation.y = 0;
    if (react) { const q = (now - react.t0) / 1000;
      if (react.k === 'yay') { b.body.position.y = Math.abs(Math.sin(q * Math.PI * 3.3)) * .28 * (q < 1.2 ? 1 : 0); b.body.rotation.y = q < 1.2 ? q * Math.PI * 2 / 1.2 : 0; b.arms.forEach((a, i) => a.rotation.z = (i ? -1 : 1) * (q < 1.2 ? 2.2 : 0)); }
      if (react.k === 'hit') { b.body.position.x = Math.sin(q * 50) * .05 * Math.max(0, 1 - q * 2); b.head.rotation.z = Math.sin(q * 30) * .15 * Math.max(0, 1 - q * 2); }
      if (react.k === 'sad') { b.head.rotation.x = Math.min(.35, q) * (q < 1.6 ? 1 : 0); }
      if (q > 1.6) { react = null; b.body.rotation.y = 0; b.body.position.x = 0; b.head.rotation.x = 0; b.arms.forEach(a => a.rotation.z = 0); } }
    const blink = (bt % 3.6) < .12; b.eyes.scale.y = blink ? .15 : 1;
    b.bulb.material.emissiveIntensity = .7 + Math.sin(bt * 4) * .3;
    // partícules
    for (let i = fxList.length - 1; i >= 0; i--) { const s = fxList[i], u = s.userData; u.life += dt; s.position.addScaledVector(u.v, dt); u.v.y -= u.g * dt; s.material.opacity = Math.max(0, 1 - u.life / u.max); if (u.life > u.max) { world.remove(s); s.material.dispose(); fxList.splice(i, 1); } }
    // aigua dels estanys
    world.children.forEach(o => { if (o.userData.water != null) o.position.y = -.2 + Math.sin(bt * 2 + o.userData.water * 6) * .015; });
    renderer.render(scene, cam);
  }
  function dispose() { alive = false; ro.disconnect(); renderer.dispose(); scene.traverse(o => { if (o.material && o.material.map && !Object.values(TEX).includes(o.material.map)) o.material.map.dispose(); }); }

  build(W, S); loop();
  return {
    step, react: doReact, fx, marks, dispose, canvas: renderer.domElement,
    reset(W2, S2) { if (W2 !== st.W) build(W2, S2); else place(S2, true); },
    snapshot() { renderer.render(scene, cam); return renderer.domElement.toDataURL('image/png'); }
  };
}
// es pot fer servir WebGL en aquest aparell?
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } }

/* ---------- Retrats d'en Bit (imatges per a la resta de l'app i les presentacions) ---------- */
export function portrait(pose = 'idle', size = 640) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(size, size); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.15;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(28, 1, .1, 50);
  sc.add(new THREE.HemisphereLight('#E6F4FF', '#8090B0', 1.3));
  const key = new THREE.DirectionalLight('#FFF3DC', 2.4); key.position.set(2.5, 4, 3.5); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); sc.add(key);
  const rim = new THREE.DirectionalLight('#9CC2FF', 1.4); rim.position.set(-3, 2, -2); sc.add(rim);
  const b = makeBit(); b.bit.scale.setScalar(1); sc.add(b.bit);
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
  const url = r.domElement.toDataURL('image/png'); r.dispose(); return url;
}
