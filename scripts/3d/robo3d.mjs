/* ===== Numi Tech · Tech Robòtica: l'arena en 3D (three.js) =====
   Font de tech-robo3d.js (es genera amb `node scripts/3d/build-robo.mjs`; three.js va empaquetat a dins, sense CDN).
   · L'arena és una taula-plataforma que flota: estora amb quadrícula i regle (textura que dibuixa tech-robo.js),
     parets baixes, obstacles de goma EVA, cons, caixes de fusta, túnels, un llum d'escriptori i objectes de l'aula.
   · El robot és un Maqueen de joguina: xassís amb vernís, rodes que giren, el micro:bit amb la pantalla 5×5 de LEDs,
     els «ulls» d'ultrasons, llums davanters RGB que il·luminen el terra a les arenes fosques i els sensors de línia.
   · L'API la fa servir tech-robo.js: create(contenidor, A, S, opcions) → { update, reset, react, fx, view, sens, marks,
     pick, snapshot, dispose }. La simulació (física i sensors) és a tech-robo.js; aquí només es dibuixa. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const U = .1;   // 1 unitat = 10 cm
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const COL = { r: '#F2453D', g: '#2ED16B', u: '#2F7BFF', y: '#FFC531', p: '#A35CFF', c: '#22D3EE', w: '#FFFFFF' };
const rnd = (x, y, k = 0) => { let h = (x * 374761393 + y * 668265263 + k * 2246822519) >>> 0; h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
const mesh = (g, m, o = {}) => { const x = new THREE.Mesh(g, m); x.castShadow = o.cast !== false; x.receiveShadow = o.recv !== false; if (o.p) x.position.set(...o.p); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); if (o.r) x.rotation.set(...o.r); return x; };

let M = null, TX = null;
function mats() {
  if (M) return M;
  const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .7, metalness: 0, ...o });
  const phy = (c, o = {}) => new THREE.MeshPhysicalMaterial({ color: c, roughness: .35, metalness: 0, clearcoat: 1, clearcoatRoughness: .12, ...o });
  M = {
    chassis: phy('#EF5B4F'), chassis2: phy('#2F6BFF'), plate: phy('#FBFBFD', { roughness: .45, clearcoat: .6 }), pcb: std('#1D2333', { roughness: .5 }), pcbB: std('#2453C9', { roughness: .45 }),
    tyre: std('#22252E', { roughness: .85 }), hub: phy('#FFC531', { roughness: .3 }), metal: new THREE.MeshStandardMaterial({ color: '#D9DEE8', roughness: .22, metalness: .95 }), grille: std('#15171E', { roughness: .9 }),
    gold: new THREE.MeshStandardMaterial({ color: '#E8B64A', roughness: .3, metalness: .9 }), black: std('#111318', { roughness: .4 }), white: std('#F4F6FA', { roughness: .35 }),
    slab: phy('#24345F', { roughness: .55, clearcoat: .4 }), slabTop: std('#33467A'), rim: phy('#FFFFFF', { roughness: .4, clearcoat: .5 }), cap: phy('#EF5B4F', { roughness: .35 }),
    foam: ['#7AA7FF', '#FFB35C', '#76D39B', '#F58DB6', '#B79CFF'].map(c => std(c, { roughness: .92 })), wallW: phy('#FAFBFF', { roughness: .5, clearcoat: .3 }),
    wood: std('#D6A15E', { roughness: .8 }), cone: phy('#FF7A1A', { roughness: .45 }), coneW: phy('#FFFFFF', { roughness: .45 }), coneB: std('#2A2D36'),
    tunnel: new THREE.MeshPhysicalMaterial({ color: '#334A8A', roughness: .3, transmission: .0, transparent: true, opacity: .72, clearcoat: 1 }),
    lampBody: phy('#2E3446', { roughness: .4 }), bulb: new THREE.MeshStandardMaterial({ color: '#FFF4C8', emissive: '#FFD86B', emissiveIntensity: 3.2 }),
    shadow: new THREE.ShadowMaterial({ opacity: .22 }), leaf: std('#3FA35A', { roughness: .8, flatShading: true }), leaf2: std('#5CC26B', { roughness: .8, flatShading: true }), trunk: std('#8A5A33', { roughness: .9 }), pot: phy('#E07A4F'), paper: std('#FFFDF5'), book: ['#3D7BF4', '#F2B21B', '#E5489A', '#1FA463'].map(c => std(c, { roughness: .6 }))
  };
  return M;
}
function texs() {
  if (TX) return TX;
  const glow = (c0, c1) => canvasTex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, c0); r.addColorStop(1, c1); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  TX = {
    glow: glow('rgba(255,255,255,1)', 'rgba(255,255,255,0)'),
    dot: canvasTex(32, 32, (g, w) => { const r = g.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, '#fff'); r.addColorStop(.55, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }),
    note: canvasTex(64, 64, (g) => { g.fillStyle = '#fff'; g.font = '900 52px Lexend, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = 6; g.fillText('♪', 32, 34); }),
    crate: canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#D6A15E'; g.fillRect(0, 0, w, h); g.strokeStyle = '#B07D3E'; g.lineWidth = 3; for (let y = 18; y < h; y += 26) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); } g.strokeStyle = '#7A4A1E'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); g.lineWidth = 8; g.beginPath(); g.moveTo(10, 10); g.lineTo(w - 10, h - 10); g.stroke(); }),
    grille: canvasTex(64, 64, (g, w) => { g.fillStyle = '#1A1C24'; g.fillRect(0, 0, w, w); g.fillStyle = '#3A3F4E'; for (let y = 4; y < w; y += 7) for (let x = (y % 14 ? 4 : 7); x < w; x += 7) { g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill(); } }),
    tape: canvasTex(64, 16, (g, w, h) => { g.fillStyle = '#FFD54A'; g.fillRect(0, 0, w, h); g.fillStyle = '#222'; for (let x = -16; x < w; x += 16) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 8, 0); g.lineTo(x + 16, 0); g.lineTo(x + 8, h); g.fill(); } })
  };
  TX.tape.wrapS = THREE.RepeatWrapping;
  return TX;
}
const textTex = (txt, o = {}) => canvasTex(o.w || 192, o.h || 80, (g, w, h) => { g.fillStyle = o.bg || 'rgba(16,24,56,.88)'; const r = h / 2; g.beginPath(); g.moveTo(r, 4); g.arcTo(w - 4, 4, w - 4, h - 4, r - 4); g.arcTo(w - 4, h - 4, 4, h - 4, r - 4); g.arcTo(4, h - 4, 4, 4, r - 4); g.arcTo(4, 4, w - 4, 4, r - 4); g.fill(); g.fillStyle = o.fg || '#fff'; g.font = `800 ${o.fs || 40}px Lexend, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, w / 2, h / 2 + 2); });
// la pantalla del micro:bit: 5×5 LEDs (icona o número que llisca)
const DIG = ['111 101 101 101 111', '010 110 010 010 111', '111 001 111 100 111', '111 001 111 001 111', '101 101 111 001 001', '111 100 111 001 111', '111 100 111 101 111', '111 001 010 010 010', '111 101 111 101 111', '111 101 111 001 111'];

/* ---------- El robot ---------- */
function makeRobot(body = 'chassis') {
  const m = mats(), t = texs(), R = new THREE.Group(), car = new THREE.Group(); R.add(car);
  // xassís (davant cap a +x) i placa de dalt
  car.add(mesh(new RoundedBoxGeometry(.84, .13, .74, 4, .06), m[body], { p: [.1, .115, 0] }));
  car.add(mesh(new RoundedBoxGeometry(.7, .035, .62, 3, .015), m.plate, { p: [.08, .2, 0] }));
  car.add(mesh(new RoundedBoxGeometry(.24, .05, .3, 2, .02), m.pcb, { p: [.02, .235, -.05] }));   // placa i bateria
  car.add(mesh(new THREE.CylinderGeometry(.045, .045, .05, 20), m.black, { p: [.16, .24, .2] }));   // brunzidor
  // rodes (giren)
  const wheels = [-1, 1].map(s => { const w = new THREE.Group(); w.position.set(0, .215, s * .44);
    const tyre = mesh(new THREE.CylinderGeometry(.215, .215, .11, 32), m.tyre); tyre.rotation.x = Math.PI / 2; w.add(tyre);
    const hub = new THREE.Group(); hub.add(mesh(new THREE.CylinderGeometry(.13, .13, .118, 24), m.hub, { r: [Math.PI / 2, 0, 0] }));
    for (let k = 0; k < 3; k++) hub.add(mesh(new THREE.BoxGeometry(.24, .035, .125), m.tyre, { r: [0, 0, k * Math.PI / 3] }));
    hub.add(mesh(new THREE.CylinderGeometry(.04, .04, .13, 12), m.metal, { r: [Math.PI / 2, 0, 0] }));
    w.add(hub); w.userData.hub = hub; car.add(w); return w; });
  car.add(mesh(new THREE.SphereGeometry(.05, 16, 12), m.metal, { p: [.42, .05, 0] }));   // roda boja
  // mòdul d'ultrasons: placa blava i dos «ulls» de metall
  car.add(mesh(new RoundedBoxGeometry(.035, .2, .5, 2, .012), m.pcbB, { p: [.5, .3, 0] }));
  const eyes = [-1, 1].map(s => { const e = new THREE.Group(); e.position.set(.53, .3, s * .13);
    e.add(mesh(new THREE.CylinderGeometry(.08, .08, .1, 28, 1, true), m.metal, { r: [0, 0, Math.PI / 2] }));
    const gr = mesh(new THREE.CircleGeometry(.075, 28), new THREE.MeshStandardMaterial({ map: t.grille, roughness: .9 }), { p: [.045, 0, 0], r: [0, Math.PI / 2, 0], cast: false }); e.add(gr);
    const pupil = mesh(new THREE.CircleGeometry(.03, 20), new THREE.MeshBasicMaterial({ color: '#0B0C10' }), { p: [.047, 0, 0], r: [0, Math.PI / 2, 0], cast: false }); e.add(pupil);
    const shine = mesh(new THREE.CircleGeometry(.014, 12), new THREE.MeshBasicMaterial({ color: '#FFFFFF' }), { p: [.049, .022, -.02], r: [0, Math.PI / 2, 0], cast: false }); e.add(shine);
    e.userData = { pupil, shine }; car.add(e); return e; });
  // micro:bit inclinat a la part del darrere, amb la pantalla de LEDs i els botons A i B
  const mb = new THREE.Group(); mb.position.set(-.24, .4, 0); mb.rotation.z = .62;
  mb.add(mesh(new RoundedBoxGeometry(.03, .4, .52, 2, .012), m.pcb));
  const matC = document.createElement('canvas'); matC.width = matC.height = 128; const matT = new THREE.CanvasTexture(matC); matT.colorSpace = THREE.SRGBColorSpace;
  const matM = new THREE.MeshStandardMaterial({ map: matT, emissiveMap: matT, emissive: '#FFFFFF', emissiveIntensity: 1.4, roughness: .4 });
  mb.add(mesh(new THREE.PlaneGeometry(.25, .25), matM, { p: [-.017, .03, 0], r: [0, -Math.PI / 2, 0], cast: false }));
  [-1, 1].forEach(s => { mb.add(mesh(new THREE.CylinderGeometry(.028, .028, .02, 16), m.black, { p: [-.02, .03, s * .19], r: [0, 0, Math.PI / 2] })); });
  mb.add(mesh(new THREE.BoxGeometry(.034, .05, .5), m.gold, { p: [0, -.19, 0] }));
  car.add(mb);
  // llums davanters RGB (es veuen encesos i fan llum a les arenes fosques)
  const heads = [-1, 1].map(s => { const h = mesh(new THREE.SphereGeometry(.05, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#EDEFF5', emissive: '#000000', roughness: .2 }), { p: [.52, .1, s * .29], r: [0, 0, -Math.PI / 2] });
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); glow.scale.setScalar(.42); glow.position.set(.58, .1, s * .29);
    car.add(h, glow); return { h, glow }; });
  // sensors de llum (dalt) i sensors de línia (sota, amb el LED vermell que s'encén amb el negre)
  [-1, 1].forEach(s => car.add(mesh(new THREE.SphereGeometry(.03, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), m.white, { p: [.38, .215, s * .26] })));
  const lineLeds = [-1, 0, 1].map(s => { car.add(mesh(new THREE.BoxGeometry(.06, .025, .06), m.black, { p: [.34, .04, s * .15] }));
    const led = mesh(new THREE.BoxGeometry(.02, .02, .02), new THREE.MeshStandardMaterial({ color: '#551111', emissive: '#FF2020', emissiveIntensity: 0 }), { p: [.5, .07, s * .12], cast: false }); car.add(led); return led; });
  R.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  car.scale.setScalar(1.4);
  return { R, car, wheels, eyes, heads, lineLeds, matC, matT, matKey: '' };
}
function drawMat(rb, mat, T) {
  let key = 'off', grid = null;
  const pat = mat && mat.k === 'i' && (mat.pat || (rb.icons && rb.icons[mat.v]));
  if (pat) { key = 'i' + mat.v; grid = pat.split(' ').map(r => [...r].map(Number)); }
  else if (mat && mat.k === 'n') {
    const s = String(mat.v);
    if (s.length === 1 && s !== '-') { key = 'n' + s; const d = DIG[+s].split(' '); grid = d.map(r => [0, ...[...r].map(Number), 0]); }
    else { // número llarg: llisca cap a l'esquerra
      const cols = []; for (const ch of s) { const d = ch === '-' ? '000 000 111 000 000' : DIG[+ch] || DIG[0]; const rows = d.split(' '); for (let x = 0; x < 3; x++) cols.push(rows.map(r => +r[x])); cols.push([0, 0, 0, 0, 0]); }
      const pad = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], all = [...pad, ...cols, ...pad], off = Math.floor((T * 7) % (all.length - 4));
      key = 'n' + s + ':' + off; grid = [0, 1, 2, 3, 4].map(y => [0, 1, 2, 3, 4].map(x => all[off + x][y]));
    }
  }
  if (key === rb.matKey) return; rb.matKey = key;
  const g = rb.matC.getContext('2d'); g.fillStyle = '#14161D'; g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) { const on = grid && grid[y][x]; g.fillStyle = on ? '#FF3B30' : '#2A2C36'; if (on) { g.shadowColor = '#FF2A1A'; g.shadowBlur = 14; } else g.shadowBlur = 0; g.fillRect(14 + x * 22, 14 + y * 22, 13, 13); }
  rb.matT.needsUpdate = true;
}

/* ---------- L'arena ---------- */
export function create(el, A, S, opt = {}) {
  const m = mats(), t = texs();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: !!opt.shot, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .96;
  el.appendChild(renderer.domElement); renderer.domElement.className = 'ro-c3';
  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), .04).texture;
  const cam = new THREE.PerspectiveCamera(34, 1, .05, 200);
  const hemi = new THREE.HemisphereLight('#EEF6FF', '#7D7468', 1.0); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#FFF1DC', 2.6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0003; sun.shadow.normalBias = .015; sun.shadow.radius = 4;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight('#B9D3FF', .55); fill.position.set(-6, 5, 8); scene.add(fill);
  let world = null, st = null, rb = null, alive = true, clock = new THREE.Clock(), fxList = [], view = opt.follow ? 'follow' : 'over', sensOn = opt.sens !== false, react = null, cur = S, lastEv = 0, trailN = 0;
  const camS = { pos: new THREE.Vector3(), look: new THREE.Vector3(), init: false };
  const P = (x, y, h = 0) => new THREE.Vector3((x - st.A.w / 2) * U, h, (y - st.A.h / 2) * U);

  function build(A0, S0) {
    if (world) { scene.remove(world); world.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material && o.material.map && o.material.map.userData.own) o.material.map.dispose(); }); }
    world = new THREE.Group(); scene.add(world);
    st = { A: A0, zones: [], lamp: null, box: null, movers: [], spots: [], marks: null, ghost: null };
    const W = A0.w * U, H = A0.h * U, dark = A0.dark;
    // plataforma flotant i ombra
    const pad = .9;
    world.add(mesh(new RoundedBoxGeometry(W + pad * 2, .5, H + pad * 2, 5, .22), m.slab, { p: [0, -.27, 0] }));
    world.add(mesh(new RoundedBoxGeometry(W + pad * 2 - .1, .04, H + pad * 2 - .1, 3, .02), m.slabTop, { p: [0, -.035, 0], cast: false }));
    const sh = mesh(new THREE.PlaneGeometry(W * 3 + 10, H * 3 + 10), m.shadow, { r: [-Math.PI / 2, 0, 0], p: [0, -.62, 0], cast: false }); world.add(sh);
    // estora amb la textura del terra
    const ft = new THREE.CanvasTexture(opt.floor); ft.colorSpace = THREE.SRGBColorSpace; ft.anisotropy = renderer.capabilities.getMaxAnisotropy(); ft.userData.own = true;
    const floor = mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshStandardMaterial({ map: ft, roughness: .86 }), { r: [-Math.PI / 2, 0, 0], p: [0, .004, 0], cast: false }); world.add(floor); st.floorTex = ft;
    // paret de la vora (blanca amb el capçal del color del curs)
    const rimH = .55, rimT = .22;
    for (const [x, z, w, d] of [[0, -H / 2 - rimT / 2, W + rimT * 2, rimT], [0, H / 2 + rimT / 2, W + rimT * 2, rimT], [-W / 2 - rimT / 2, 0, rimT, H], [W / 2 + rimT / 2, 0, rimT, H]]) {
      world.add(mesh(new RoundedBoxGeometry(w, rimH, d, 2, .05), m.rim, { p: [x, rimH / 2, z] }));
      world.add(mesh(new RoundedBoxGeometry(w + .02, .08, d + .02, 2, .035), m.cap, { p: [x, rimH + .03, z] }));
    }
    // obstacles
    A0.walls.forEach((wl, i) => {
      const c = P(wl.x + wl.w / 2, wl.y + wl.h / 2), w = wl.w * U, d = wl.h * U;
      if (wl.st === 'crate') { const b = mesh(new RoundedBoxGeometry(w, Math.min(w, d, 1), d, 2, .03), new THREE.MeshStandardMaterial({ map: t.crate, roughness: .8 }), { p: [c.x, Math.min(w, d, 1) / 2, c.z] }); world.add(b); }
      else if (wl.st === 'wall') { world.add(mesh(new RoundedBoxGeometry(w, .5, d, 2, .04), m.wallW, { p: [c.x, .25, c.z] })); world.add(mesh(new RoundedBoxGeometry(w + .015, .06, d + .015, 2, .025), m.cap, { p: [c.x, .52, c.z] })); }
      else if (wl.st === 'books') { let y = 0; for (let k = 0; k < 3; k++) { const hh = .13 + rnd(i, k) * .06; world.add(mesh(new RoundedBoxGeometry(w * (.92 - k * .05), hh, d * (.95 - k * .04), 2, .02), m.book[(i + k) % 4], { p: [c.x + (rnd(i, k, 2) - .5) * .06, y + hh / 2, c.z], r: [0, (rnd(i, k, 3) - .5) * .12, 0] })); y += hh; } }
      else if (wl.st === 'tape') { const b = mesh(new RoundedBoxGeometry(w, .12, d, 2, .03), new THREE.MeshStandardMaterial({ map: t.tape, roughness: .6 }), { p: [c.x, .06, c.z] }); b.material.map = t.tape.clone(); b.material.map.repeat.set(Math.max(w, d) * 2, 1); b.material.map.needsUpdate = true; world.add(b); }
      else { const h = Math.min(.55, .3 + Math.min(w, d) * .15); world.add(mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(.08, w / 4, d / 4)), m.foam[i % m.foam.length], { p: [c.x, h / 2, c.z] })); }
    });
    // cons de trànsit
    for (const p of A0.posts) { const c = P(p.x, p.y), r = p.r * U, g = new THREE.Group(); g.position.copy(c);
      if (p.st === 'tree') { g.add(mesh(new THREE.CylinderGeometry(r * .32, r * .42, .7, 10), m.trunk, { p: [0, .35, 0] }));
        [[0, 1.0, 0, 1.15, m.leaf], [-.35, .78, .2, .85, m.leaf2], [.32, .82, -.18, .9, m.leaf], [.05, .7, .38, .75, m.leaf2]].forEach(([a, b, d, k, mm]) => g.add(mesh(new THREE.IcosahedronGeometry(r * k, 1), mm, { p: [a * r, b, d * r] })));
        g.rotation.y = rnd(p.x, p.y) * 6; world.add(g); continue; }
      g.add(mesh(new RoundedBoxGeometry(r * 2.4, .05, r * 2.4, 2, .02), m.coneB, { p: [0, .025, 0] }));
      g.add(mesh(new THREE.ConeGeometry(r * .95, r * 3.4, 28), m.cone, { p: [0, .05 + r * 1.7, 0] }));
      g.add(mesh(new THREE.CylinderGeometry(r * .58, r * .7, r * .55, 28, 1, true), m.coneW, { p: [0, .05 + r * 1.55, 0], s: [1.01, 1, 1.01] }));
      world.add(g); }
    // zones: un marc que brilla a les zones d'objectiu (i bandera a la meta)
    for (const z of A0.zones) { if (!z.goal && !z.flag) continue;
      const col = new THREE.Color(COL[z.c] || '#2ED16B');
      const geo = z.r ? new THREE.RingGeometry(z.r * U - .05, z.r * U, 48) : (() => { const s = new THREE.Shape(), x0 = -z.w * U / 2, y0 = -z.h * U / 2, x1 = -x0, y1 = -y0, r = .08; s.moveTo(x0 + r, y0); s.lineTo(x1 - r, y0); s.quadraticCurveTo(x1, y0, x1, y0 + r); s.lineTo(x1, y1 - r); s.quadraticCurveTo(x1, y1, x1 - r, y1); s.lineTo(x0 + r, y1); s.quadraticCurveTo(x0, y1, x0, y1 - r); s.lineTo(x0, y0 + r); s.quadraticCurveTo(x0, y0, x0 + r, y0);
        const h = new THREE.Path(), e = .05; h.moveTo(x0 + e, y0 + e); h.lineTo(x1 - e, y0 + e); h.lineTo(x1 - e, y1 - e); h.lineTo(x0 + e, y1 - e); h.lineTo(x0 + e, y0 + e); s.holes.push(h); return new THREE.ShapeGeometry(s); })();
      const fr = mesh(geo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .9, depthWrite: false }), { r: [-Math.PI / 2, 0, 0], cast: false, recv: false });
      const c = z.r ? P(z.x, z.y, .012) : P(z.x + z.w / 2, z.y + z.h / 2, .012); fr.position.copy(c); world.add(fr); st.zones.push({ z, fr, ph: rnd(z.x, z.y) * 6 });
      if (z.flag) { const fp = z.r ? P(z.x + z.r * .7, z.y - z.r * .7) : P(z.x + z.w - 2, z.y + 2), g = new THREE.Group(); g.position.copy(fp);
        g.add(mesh(new THREE.CylinderGeometry(.018, .018, .9, 10), m.metal, { p: [0, .45, 0] }), mesh(new THREE.SphereGeometry(.03, 12, 8), m.hub, { p: [0, .91, 0] }));
        const fl = canvasTex(64, 40, (g2, w, h) => { const s = 8; for (let y = 0; y < h; y += s) for (let x = 0; x < w; x += s) { g2.fillStyle = ((x + y) / s) % 2 ? '#111' : '#fff'; g2.fillRect(x, y, s, s); } });
        const cg = new THREE.PlaneGeometry(.36, .22, 10, 3); cg.translate(.18, 0, 0); const cloth = mesh(cg, new THREE.MeshStandardMaterial({ map: fl, side: THREE.DoubleSide, roughness: .7 }), { p: [.02, .78, 0] }); g.add(cloth);
        g.userData.cloth = cloth; g.userData.base = cg.attributes.position.array.slice(); st.flag = g; world.add(g); } }
    // túnels (zones amb poca llum)
    for (const z of A0.tunnels || []) { const c = P(z.x + z.w / 2, z.y + z.h / 2), w = z.w * U, d = z.h * U, g = new THREE.Group(); g.position.copy(c);
      g.add(mesh(new RoundedBoxGeometry(w + .1, .06, d + .1, 2, .03), m.tunnel, { p: [0, .78, 0] }));
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(new THREE.CylinderGeometry(.04, .04, .78, 10), m.lampBody, { p: [sx * w / 2, .39, sz * d / 2] }));
      world.add(g); }
    // ring de sumo: un relleu petit al voltant
    if (A0.ring) { const c = P(A0.ring.x, A0.ring.y, 0), rg = mesh(new THREE.TorusGeometry(A0.ring.r * U + .03, .025, 8, 80), m.rim, { r: [-Math.PI / 2, 0, 0] }); rg.position.copy(c); rg.position.y = .02; world.add(rg); }
    // la caixa per empènyer
    if (S0.box) { const b = mesh(new RoundedBoxGeometry(1, 1, 1, 2, .04), new THREE.MeshStandardMaterial({ map: t.crate, roughness: .8 })); st.box = b; world.add(b); }
    // robots que es mouen sols (el líder)
    st.movers = S0.movers.map(() => { const r = makeRobot('chassis2'); world.add(r.R); return r; });
    // llum d'escriptori
    if (A0.lamp) { const c = P(A0.lamp[0], A0.lamp[1]), g = new THREE.Group(); g.position.copy(c);
      g.add(mesh(new THREE.CylinderGeometry(.32, .36, .06, 32), m.lampBody, { p: [0, .03, 0] }));
      g.add(mesh(new THREE.CylinderGeometry(.03, .03, 1.1, 12), m.metal, { p: [0, .58, 0] }));
      g.add(mesh(new THREE.ConeGeometry(.24, .26, 32, 1, true), m.lampBody, { p: [0, 1.2, 0] }));
      const bulb = mesh(new THREE.SphereGeometry(.1, 20, 14), m.bulb, { p: [0, 1.05, 0], cast: false }); g.add(bulb);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.glow, color: '#FFE08A', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .9 })); halo.scale.setScalar(1.6); halo.position.set(0, 1.0, 0); g.add(halo);
      const pl = new THREE.PointLight('#FFD98A', dark ? 9 : 2, 9, 1.6); pl.position.set(0, .95, 0); pl.castShadow = true; pl.shadow.mapSize.set(512, 512); pl.shadow.bias = -.002; g.add(pl);
      const pool = mesh(new THREE.CircleGeometry(2.2, 48), new THREE.MeshBasicMaterial({ map: t.glow, color: '#FFD98A', transparent: true, opacity: dark ? .35 : .12, depthWrite: false, blending: THREE.AdditiveBlending }), { r: [-Math.PI / 2, 0, 0], p: [0, .01, 0], cast: false, recv: false }); g.add(pool);
      st.lamp = { g, halo, pl }; world.add(g); }
    // objectes de l'aula a la vora de la plataforma (decoració)
    decor(A0, W, H, pad);
    // el rastre del llapis
    const maxT = 6000, tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxT * 6), 3)); tg.setIndex(new THREE.BufferAttribute(new Uint32Array(maxT * 6), 1)); tg.setDrawRange(0, 0);
    st.trail = mesh(tg, new THREE.MeshBasicMaterial({ color: '#7B3FE4', side: THREE.DoubleSide }), { cast: false, recv: false }); st.trail.frustumCulled = false; world.add(st.trail); trailN = 0;
    // feix del sensor d'ultrasons, punts dels sensors de línia i etiqueta de distància
    const fan = new THREE.BufferGeometry(); fan.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9 * 3), 3)); fan.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 6, 0, 6, 7, 0, 7, 8]);
    st.beam = mesh(fan, new THREE.MeshBasicMaterial({ color: '#12B5D6', transparent: true, opacity: .16, depthWrite: false, side: THREE.DoubleSide }), { cast: false, recv: false }); st.beam.frustumCulled = false; world.add(st.beam);
    st.ping = mesh(new THREE.RingGeometry(.06, .1, 32), new THREE.MeshBasicMaterial({ color: '#33E0FF', transparent: true, depthWrite: false, side: THREE.DoubleSide }), { cast: false, recv: false }); world.add(st.ping);
    st.dlab = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthTest: false })); st.dlab.scale.set(.66, .275, 1); st.dlab.renderOrder = 5; world.add(st.dlab); st.dlabV = null;
    st.spots = [0, 1, 2].map(() => { const s = mesh(new THREE.CircleGeometry(.05, 20), new THREE.MeshBasicMaterial({ color: '#2ED16B', transparent: true, opacity: .9, depthWrite: false }), { r: [-Math.PI / 2, 0, 0], cast: false, recv: false }); world.add(s); return s; });
    // el robot
    if (!rb) { rb = makeRobot(); rb.icons = opt.icons; }
    world.add(rb.R);
    rb.spots = rb.heads.map(() => { const s = new THREE.SpotLight('#FFFFFF', 0, 7, .5, .7, 1.4); s.castShadow = false; world.add(s, s.target); return s; });
    // llums segons si l'arena és fosca
    hemi.intensity = dark ? .1 : 1.0; sun.intensity = dark ? .12 : 2.6; sun.color.set(dark ? '#8FA6FF' : '#FFF1DC'); fill.intensity = dark ? .08 : .55; scene.environmentIntensity = dark ? .12 : .55;
    el.classList.toggle('dark', !!dark);
    fit(true);
    const R = Math.max(W, H) * .75 + 3; Object.assign(sun.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: .5, far: 60 }); sun.shadow.camera.updateProjectionMatrix();
    sun.position.set(R * .45, R * 1.6, R * .8); sun.target.position.set(0, 0, 0);
    marks(!!opt.marks, null);
    cur = S0; lastEv = 0; camS.init = false; sync(0, 0);
  }
  function decor(A0, W, H, pad) {
    if (A0.spec && A0.spec.nodecor) return;
    const g = new THREE.Group(), y = .01, ex = W / 2 + pad * .55, ez = H / 2 + pad * .55;
    // cinta adhesiva
    const tape = new THREE.Group(); tape.add(mesh(new THREE.TorusGeometry(.2, .08, 16, 32), mats().foam[1], { r: [Math.PI / 2, 0, 0] })); tape.add(mesh(new THREE.TorusGeometry(.13, .02, 8, 24), mats().paper, { r: [Math.PI / 2, 0, 0] })); tape.position.set(-ex, y + .08, -ez + .15); g.add(tape);
    // regle
    const rl = canvasTex(256, 32, (c, w, h) => { c.fillStyle = '#FFE38A'; c.fillRect(0, 0, w, h); c.fillStyle = '#5A4500'; for (let i = 0; i <= 30; i++) c.fillRect(i * w / 30, 0, 2, i % 5 ? 8 : 15); });
    g.add(mesh(new RoundedBoxGeometry(2.0, .03, .26, 2, .01), new THREE.MeshStandardMaterial({ map: rl, roughness: .5 }), { p: [ex - 1.5, y + .015, ez + .05], r: [0, .06, 0] }));
    // test amb llapis
    const cup = new THREE.Group(); cup.add(mesh(new THREE.CylinderGeometry(.16, .14, .36, 24), mats().pot, { p: [0, .18, 0] }));
    ['#3D7BF4', '#1FA463', '#F2B21B'].forEach((c, k) => cup.add(mesh(new THREE.CylinderGeometry(.025, .025, .62, 8), new THREE.MeshStandardMaterial({ color: c, roughness: .5 }), { p: [(k - 1) * .06, .42, (k % 2) * .05], r: [(k - 1) * .15, 0, (k - 1) * .12] })));
    cup.position.set(ex, y, -ez + .2); g.add(cup);
    // planta
    const pl = new THREE.Group(); pl.add(mesh(new THREE.CylinderGeometry(.2, .15, .3, 20), mats().pot, { p: [0, .15, 0] }));
    for (let k = 0; k < 6; k++) pl.add(mesh(new THREE.IcosahedronGeometry(.16, 0), mats().leaf, { p: [Math.cos(k) * .1, .38 + (k % 3) * .08, Math.sin(k) * .1], s: [1, 1.3, 1] }));
    pl.position.set(-ex, y, ez - .1); g.add(pl);
    world.add(g);
  }
  // la càmera: vista general de 3/4 o darrere del robot
  let base = { D: 10 }, drag = { yaw: 0, pitch: 0, z: 1, on: false };
  function fit(hard) {
    const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width), hpx = Math.max(150, r.height);
    renderer.setSize(wpx, hpx, false); cam.aspect = wpx / hpx; cam.updateProjectionMatrix();
    const W = st.A.w * U + .9, H = st.A.h * U + .9, pts = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const y of [-.3, .5]) pts.push(new THREE.Vector3(sx * W / 2, y, sz * H / 2));
    let D = 3;
    for (let i = 0; i < 80; i++) { overCam(D, 0, 0, cam.position, camS.look); cam.lookAt(camS.look); cam.updateMatrixWorld(); if (pts.every(p => { const q = p.clone().project(cam); return Math.abs(q.x) < .98 && Math.abs(q.y) < .96; })) break; D *= 1.04; }
    base.D = D; if (hard) camS.init = false;
  }
  function overCam(D, yaw, pitch, out, look) { const el_ = 1.0 + pitch; out.set(Math.sin(yaw) * Math.cos(el_) * D, Math.sin(el_) * D, Math.cos(yaw) * Math.cos(el_) * D); look.set(0, -.25, .1); }
  // en Bit / robot a la seva posició
  function sync(dt, T) {
    const S1 = cur; if (!S1) return;
    const p = P(S1.x, S1.y); rb.R.position.set(p.x, 0, p.z); rb.R.rotation.y = -S1.th;
    rb.wheels[0].userData.hub.rotation.z = -(S1.wl || 0); rb.wheels[1].userData.hub.rotation.z = -(S1.wr || 0);
    // els «ulls» miren cap on gira
    const turn = Math.max(-1, Math.min(1, ((S1.vl || 0) - (S1.vr || 0)) / 12));
    rb.eyes.forEach(e => { e.userData.pupil.position.z = turn * .022; e.userData.pupil.position.y = 0; });
    // llums davanters
    const lc = [S1.lights && S1.lights.L, S1.lights && S1.lights.R];
    rb.heads.forEach((h, i) => { const c = lc[i]; h.h.material.emissive.set(c ? COL[c] : '#000000'); h.h.material.emissiveIntensity = c ? 2.4 : 0; h.glow.material.color.set(c ? COL[c] : '#fff'); h.glow.material.opacity = c ? .95 : 0;
      const sp = rb.spots[i]; sp.intensity = c && st.A.dark ? 7 : c ? .8 : 0; sp.color.set(c ? COL[c] : '#fff');
      const hp = rb.R.localToWorld(new THREE.Vector3(.55, .12, (i ? 1 : -1) * .29)); sp.position.copy(hp); sp.target.position.copy(rb.R.localToWorld(new THREE.Vector3(2.4, -.3, (i ? 1 : -1) * .45))); });
    const ls = (S1.viz && S1.viz.ls) || [0, 0, 0];
    rb.lineLeds.forEach((l, i) => { l.material.emissiveIntensity = ls[i] ? 3 : 0; });
    drawMat(rb, S1.mat, T);
    // sensors visibles
    const us = S1.viz && S1.viz.us, show = sensOn && us && (S1.t - us.t < .6 || S1.t === 0);
    st.beam.visible = st.ping.visible = st.dlab.visible = !!show;
    if (show) {
      const a = st.beam.geometry.attributes.position, o = P(us.x, us.y, .3), d = Math.min(us.d, 300) * U, th = S1.th;
      a.setXYZ(0, o.x, o.y, o.z); for (let k = 0; k < 8; k++) { const an = th + (-8 + k * 16 / 7) * Math.PI / 180; a.setXYZ(k + 1, o.x + Math.cos(an) * d, .3 - .26 * Math.min(1, d / 3) * 0 , o.z + Math.sin(an) * d); }
      a.needsUpdate = true; st.beam.geometry.computeBoundingSphere();
      const hp = P(us.hx, us.hy, .3); st.ping.position.copy(hp); st.ping.lookAt(o); const q = (T * 2) % 1; st.ping.scale.setScalar(1 + q * 2); st.ping.material.opacity = .9 * (1 - q);
      st.dlab.position.set(hp.x, .75, hp.z); const v = Math.round(us.d); if (v !== st.dlabV) { st.dlabV = v; if (st.dlab.material.map) st.dlab.material.map.dispose(); st.dlab.material.map = textTex(`${v} cm`); st.dlab.material.needsUpdate = true; }
    }
    st.spots.forEach((s, i) => { const f = 3.4, sd = [-1.5, 0, 1.5][i], c = Math.cos(S1.th), n = Math.sin(S1.th), x = S1.x + f * c - sd * n, y = S1.y + f * n + sd * c, q = P(x, y, .008); s.position.copy(q); s.visible = sensOn; s.material.color.set(ls[i] ? '#FF3B30' : '#2ED16B'); });
    // caixa i líder
    if (st.box && S1.box) { const b = P(S1.box.x, S1.box.y, .5); st.box.position.copy(b); st.box.rotation.y = -(S1.box.a || 0); }
    (S1.movers || []).forEach((mv, i) => { const r = st.movers[i]; if (!r) return; const q = P(mv.x, mv.y); r.R.position.copy(q); r.R.rotation.y = -mv.th; r.wheels.forEach(w => w.userData.hub.rotation.z -= (mv.v || 0) * dt / 2.15); });
    // rastre
    const tr = S1.pen ? S1.trail : null, pa = st.trail.geometry.attributes.position, ia = st.trail.geometry.index;
    if (!tr || tr.length < 2) { st.trail.geometry.setDrawRange(0, 0); trailN = 0; }
    else { if (tr.length < trailN) trailN = 0; const n = Math.min(tr.length, 6000), hw = .03;
      for (let i = Math.max(0, trailN - 1); i < n; i++) { const a0 = tr[Math.max(0, i - 1)], a1 = tr[Math.min(n - 1, i + 1)], dx = a1[0] - a0[0], dy = a1[1] - a0[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L, c = P(tr[i][0], tr[i][1], .006);
        pa.setXYZ(i * 2, c.x + nx * hw, .006, c.z + ny * hw); pa.setXYZ(i * 2 + 1, c.x - nx * hw, .006, c.z - ny * hw);
        if (i > 0) { const k = (i - 1) * 6, j = (i - 1) * 2; ia.array[k] = j; ia.array[k + 1] = j + 1; ia.array[k + 2] = j + 2; ia.array[k + 3] = j + 1; ia.array[k + 4] = j + 3; ia.array[k + 5] = j + 2; } }
      trailN = n; pa.needsUpdate = true; ia.needsUpdate = true; st.trail.geometry.setDrawRange(0, (n - 1) * 6); }
    // esdeveniments nous: xocs i notes
    const ev = S1.ev || []; if (ev.length < lastEv) lastEv = 0;
    for (let i = lastEv; i < ev.length; i++) { const e = ev[i]; if (e.k === 'bump') { fxAt('dust', P(e.x, e.y, .15)); react = { k: 'hit', t0: performance.now() }; } if (e.k === 'note') fxAt('note', rb.R.position.clone().add(new THREE.Vector3(0, .7, 0))); }
    lastEv = ev.length;
  }
  // efectes de partícules
  function fxAt(kind, p) {
    if (REDUCED) return;
    const n = kind === 'confetti' ? 40 : kind === 'dust' ? 12 : kind === 'note' ? 1 : kind === 'spark' ? 24 : 14;
    const cols = kind === 'dust' ? ['#EDE4D3', '#D9CDB5'] : kind === 'note' ? ['#22D3EE', '#A35CFF', '#FFC531'] : kind === 'spark' ? ['#FFE680', '#FFFFFF', '#2ED16B'] : ['#FFC531', '#2ED16B', '#2F7BFF', '#F2453D', '#A35CFF'];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: kind === 'note' ? t.note : t.dot, color: cols[(i + Math.floor(Math.random() * 3)) % cols.length], transparent: true, depthWrite: false, blending: kind === 'spark' ? THREE.AdditiveBlending : THREE.NormalBlending }));
      const a = Math.random() * Math.PI * 2, sp = kind === 'dust' ? .5 + Math.random() * .5 : kind === 'note' ? .25 : 1 + Math.random() * 1.6;
      s.position.copy(p); s.scale.setScalar(kind === 'note' ? .34 : kind === 'confetti' ? .08 : kind === 'dust' ? .16 : .1);
      s.userData = { v: new THREE.Vector3(Math.cos(a) * sp, (kind === 'dust' ? .5 : kind === 'note' ? 1.1 : 2.4) + Math.random() * 1.4, Math.sin(a) * sp), life: 0, max: kind === 'note' ? 1.3 : .8 + Math.random() * .6, g: kind === 'dust' ? 1.2 : kind === 'note' ? -.2 : 4.5 };
      world.add(s); fxList.push(s);
    }
  }
  function marks(on, pick) {
    if (st.marks) { world.remove(st.marks); st.marks.children.forEach(c => { c.material.map.dispose(); c.material.dispose(); }); st.marks = null; }
    if (!on) return; st.marks = new THREE.Group();
    for (const [k, [x, y]] of Object.entries(st.A.marks || {})) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTex(k, { w: 96, h: 96, fs: 56, bg: pick === k ? 'rgba(255,197,49,.98)' : 'rgba(255,255,255,.96)', fg: '#14204A' }), depthTest: false })); sp.position.copy(P(x, y, .55)); sp.scale.setScalar(.6); sp.renderOrder = 6; st.marks.add(sp); }
    world.add(st.marks);
  }
  // tocar l'arena: on és en centímetres (per a l'editor)
  const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  function pick(cx, cy) { const r = renderer.domElement.getBoundingClientRect(); ray.setFromCamera(new THREE.Vector2((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1), cam); const p = new THREE.Vector3(); if (!ray.ray.intersectPlane(plane, p)) return null; return [p.x / U + st.A.w / 2, p.z / U + st.A.h / 2]; }
  // arrossegar gira la càmera; la roda o dos dits fan zoom
  const cv = renderer.domElement, pts = new Map();
  cv.addEventListener('pointerdown', e => { pts.set(e.pointerId, [e.clientX, e.clientY]); drag.on = true; drag.x = e.clientX; drag.y = e.clientY; drag.y0 = drag.yaw; drag.p0 = drag.pitch; cv.setPointerCapture(e.pointerId); if (pts.size === 2) { const [a, b] = [...pts.values()]; drag.d0 = Math.hypot(a[0] - b[0], a[1] - b[1]); drag.z0 = drag.z; } });
  cv.addEventListener('pointermove', e => { if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 2 && drag.d0) { const [a, b] = [...pts.values()]; drag.z = Math.max(.55, Math.min(1.5, drag.z0 * drag.d0 / Math.hypot(a[0] - b[0], a[1] - b[1]))); return; }
    if (!drag.on) return; drag.yaw = Math.max(-1.1, Math.min(1.1, drag.y0 + (e.clientX - drag.x) * .006)); drag.pitch = Math.max(-.45, Math.min(.5, drag.p0 + (e.clientY - drag.y) * .004)); });
  const up = e => { pts.delete(e.pointerId); if (!pts.size) { drag.on = false; drag.d0 = 0; } }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); drag.z = Math.max(.55, Math.min(1.5, drag.z * (e.deltaY > 0 ? 1.08 : .93))); }, { passive: false });
  const ro = new ResizeObserver(() => st && fit()); ro.observe(el);

  const tmpP = new THREE.Vector3(), tmpL = new THREE.Vector3();
  function loop() {
    if (!alive) return;
    if (!el.isConnected) return dispose();
    requestAnimationFrame(loop);
    const dt = Math.min(.05, clock.getDelta()), T = clock.elapsedTime, now = performance.now();
    sync(dt, T);
    // càmera
    if (!drag.on && !REDUCED) { drag.yaw *= .985; drag.pitch *= .985; }
    if (view === 'follow') { const r = rb.R.position, th = cur.th; tmpP.set(r.x - Math.cos(th) * 3.4 * drag.z, 2.3 * drag.z + drag.pitch * 3, r.z - Math.sin(th) * 3.4 * drag.z); tmpL.set(r.x + Math.cos(th) * 1.4, .1, r.z + Math.sin(th) * 1.4); }
    else { overCam(base.D * drag.z, drag.yaw + (REDUCED ? 0 : Math.sin(T * .2) * .02), drag.pitch, tmpP, tmpL); }
    if (!camS.init) { camS.pos.copy(tmpP); camS.look.copy(tmpL); camS.init = true; } else { const k = view === 'follow' ? 4 : 8; camS.pos.x = damp(camS.pos.x, tmpP.x, k, dt); camS.pos.y = damp(camS.pos.y, tmpP.y, k, dt); camS.pos.z = damp(camS.pos.z, tmpP.z, k, dt); camS.look.x = damp(camS.look.x, tmpL.x, k, dt); camS.look.y = damp(camS.look.y, tmpL.y, k, dt); camS.look.z = damp(camS.look.z, tmpL.z, k, dt); }
    cam.position.copy(camS.pos); cam.lookAt(camS.look);
    // zones que bateguen, bandera, llum
    for (const z of st.zones) z.fr.material.opacity = .45 + .45 * (.5 + .5 * Math.sin(T * 3 + z.ph));
    if (st.flag) { const c = st.flag.userData.cloth, a = c.geometry.attributes.position, b = st.flag.userData.base; for (let i = 0; i < a.count; i++) { const x = b[i * 3]; a.array[i * 3 + 2] = Math.sin(x * 14 - T * 6) * .03 * x * 3; } a.needsUpdate = true; }
    if (st.lamp) st.lamp.halo.material.opacity = .8 + Math.sin(T * 2.2) * .08;
    // el robot: suspensió i reaccions
    const car = rb.car, mv = Math.abs(cur.vl || 0) + Math.abs(cur.vr || 0);
    car.position.y = mv > .3 ? Math.sin(T * 30) * .004 : 0; car.rotation.z = 0; car.rotation.x = 0; car.position.x = 0;
    if (react) { const q = (now - react.t0) / 1000;
      if (react.k === 'yay') { car.position.y = Math.abs(Math.sin(q * Math.PI * 3)) * .22 * (q < 1.2 ? 1 : 0); car.rotation.y = q < 1.2 ? q * Math.PI * 2 / 1.2 : 0; }
      if (react.k === 'hit') { car.position.x = -Math.sin(q * 40) * .03 * Math.max(0, 1 - q * 2.5); car.rotation.z = Math.sin(q * 30) * .06 * Math.max(0, 1 - q * 2.5); }
      if (react.k === 'sad') car.rotation.x = Math.sin(q * 6) * .05 * Math.max(0, 1 - q / 1.5);
      if (q > 1.5) { react = null; car.rotation.y = 0; } }
    // parpelleig dels ulls (la llum de dins)
    const bl = (T % 4.2) < .1; rb.eyes.forEach(e => { e.userData.pupil.scale.y = bl ? .2 : 1; e.userData.shine.visible = !bl; });
    // partícules
    for (let i = fxList.length - 1; i >= 0; i--) { const s = fxList[i], u = s.userData; u.life += dt; s.position.addScaledVector(u.v, dt); u.v.y -= u.g * dt; s.material.opacity = Math.max(0, 1 - u.life / u.max); if (u.life > u.max) { world.remove(s); s.material.dispose(); fxList.splice(i, 1); } }
    renderer.render(scene, cam);
  }
  function dispose() { alive = false; ro.disconnect(); renderer.dispose(); pm.dispose(); }

  build(A, S); loop();
  return {
    update(S2) { cur = S2; },
    reset(A2, S2) { if (A2 !== st.A) build(A2, S2); else { cur = S2; lastEv = 0; trailN = 0; } },
    floor() { if (st.floorTex) st.floorTex.needsUpdate = true; },
    react(k) { react = { k, t0: performance.now() }; if (k === 'yay') { fxAt('confetti', rb.R.position.clone().add(new THREE.Vector3(0, .6, 0))); fxAt('spark', rb.R.position.clone().add(new THREE.Vector3(0, .3, 0))); } },
    fx(kind, x, y) { fxAt(kind, P(x, y, .3)); },
    view(v) { view = v || (view === 'over' ? 'follow' : 'over'); return view; },
    sens(on) { sensOn = on; }, marks, pick, canvas: renderer.domElement, dispose,
    snapshot() { renderer.render(scene, cam); return renderer.domElement.toDataURL('image/png'); }
  };
}
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } }
