/* ===== Numi Tech · dioramas 3D d'alta qualitat (imatges estàtiques) =====
   Peces: Kenney Nature Kit, City Kit Suburban i Furniture Kit (CC0, kenney.nl) a scripts/3d/assets/, recolorides amb la paleta de Numi,
   i peces procedurals (far, moll, veler, carpes, escenari, edificis, antenes, braç robot, el Maqueen de robo3d.mjs…).
   Llum: cel HDRI de Poly Haven (CC0) o un cel de degradat (posta, hora blava) + sol amb ombres suaus, oclusió ambiental (GTAO),
   bloom, un punt de tilt-shift i un etalonatge suau per a cada món.
   · island(): l'illa d'una unitat, amb el camí i les parades; retorna on cau cada parada (en %). Cada curs és un món (`world`):
       tropic (Bit, 6-8 anys) · lab (robòtica amb Maqueen) · teatre (Creadors) · ciutat (ciutadania digital).
   · scene(): fons de les històries (16:9).
   Es fa servir des de scripts/3d/render-scenes.mjs. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const A = 'scripts/3d/assets/';
import { makeBit } from './bit3d.mjs';
import { makeBot, drawMicrobit } from './robo3d.mjs';
const rnd = s => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

/* ---------- paleta: els materials de Kenney són pastel; aquí els fem vius ---------- */
const PAL = {
  grass: '#78C850', dirt: '#C98450', dirtDark: '#A86A3E', leafsGreen: '#4FB244', leafsDark: '#2F8F45', leafsFall: '#F29A2E', woodBark: '#8A5532', wood: '#D29A5E', woodInner: '#F0D2A2',
  stone: '#C7CDD8', stoneDark: '#99A2B4', water: '#5CCBF5', colorRed: '#EF5A5A', colorPurple: '#9B6CF2', colorYellow: '#FFC531', colorBlue: '#3D8BFF', colorOrange: '#F08A24', _defaultMat: '#FFFFFF', metal: '#9AA3B5'
};
let WPAL = null;   // retocs de paleta del món actual (p. ex. fulles de tardor, pedra fosca de nit)
const MATC = {};
function recolor(o, tint) {
  o.traverse(m => {
    if (!m.isMesh) return; m.castShadow = true; m.receiveShadow = true;
    m.material = [].concat(m.material).map(x => {
      if (x.map) { const k = 'map' + x.uuid; if (!MATC[k]) { x.roughness = .75; x.metalness = 0; MATC[k] = x; } return x; }
      const name = x.name, col = (tint && tint[name]) || (WPAL && WPAL[name]) || PAL[name];
      const key = name + (col || x.color.getHexString());
      if (!MATC[key]) {
        MATC[key] = new THREE.MeshStandardMaterial({ name, color: col || x.color, roughness: name === 'water' ? .08 : name.startsWith('stone') ? .7 : name.startsWith('metal') ? .45 : .85, metalness: name.startsWith('metal') ? .35 : 0, flatShading: true,
          transparent: name === 'water', opacity: name === 'water' ? .85 : 1 });
      }
      return MATC[key];
    });
    if (m.material.length === 1) m.material = m.material[0];
  });
  return o;
}
const CACHE = {};
async function load(name) {
  if (!CACHE[name]) CACHE[name] = new GLTFLoader().loadAsync(A + (name.includes('/') ? name : 'nature/' + name) + '.glb').then(g => g.scene);
  return CACHE[name];
}
// o.center: les peces del Furniture Kit tenen l'origen a una cantonada; així es posen pel centre
async function put(sc, name, x, y, z, o = {}) {
  const src = await load(name); let m = recolor(src.clone(true), o.tint);
  if (o.center) { const b = new THREE.Box3().setFromObject(m), c = b.getCenter(new THREE.Vector3()), w = new THREE.Group(); m.position.set(-c.x, 0, -c.z); w.add(m); m = w; }
  m.position.set(x, y, z); if (o.ry != null) m.rotation.y = o.ry; if (o.s != null) Array.isArray(o.s) ? m.scale.set(...o.s) : m.scale.setScalar(o.s);
  sc.add(m); return m;
}

/* ---------- escena, llum i postprocessat ---------- */
let HDR = null;
function ctex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
// cel de degradat (posta, hora blava…) com a mapa d'entorn: el reflecteixen el mar i els plàstics
function skyEnv(r, s) {
  const t = ctex(1024, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); s.stops.forEach(([k, c]) => gr.addColorStop(k, c)); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    if (s.sun) { const [u, v, c, rad] = s.sun, rg = g.createRadialGradient(u * w, v * h, 0, u * w, v * h, rad); rg.addColorStop(0, c); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.globalCompositeOperation = 'lighter'; g.fillStyle = rg; g.fillRect(0, 0, w, h); g.globalCompositeOperation = 'source-over'; }
  });
  t.mapping = THREE.EquirectangularReflectionMapping;
  const pm = new THREE.PMREMGenerator(r), env = pm.fromEquirectangular(t).texture; pm.dispose(); return env;
}
async function setup(W, H, L = {}) {
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setSize(W, H); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = L.exposure ?? 1;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const sc = new THREE.Scene();
  let env;
  if (L.sky) env = skyEnv(r, L.sky);
  else { if (!HDR) HDR = await new HDRLoader().loadAsync(A + 'sky.hdr'); const pm = new THREE.PMREMGenerator(r); env = pm.fromEquirectangular((HDR.mapping = THREE.EquirectangularReflectionMapping, HDR)).texture; }
  sc.environment = env; sc.environmentIntensity = L.envI ?? .45;
  const [hs, hg, hi] = L.hemi || ['#CFEFFF', '#6A8A45', .3]; sc.add(new THREE.HemisphereLight(hs, hg, hi));
  const [scol, si, sp] = L.sun || ['#FFEBC8', 2.3, [-10, 13, 8]];
  const sun = new THREE.DirectionalLight(scol, si); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -.0003; sun.shadow.normalBias = .03; sun.shadow.radius = L.shadowR ?? 4;
  Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: .5, far: 70 }); sun.position.set(...sp); sc.add(sun, sun.target);
  return { r, sc, sun };
}
// etalonatge final (després de l'OutputPass, en espai de pantalla): saturació, contrast, color a ombres/llums i vinyeta
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, sat: { value: 1 }, con: { value: 1 }, lift: { value: new THREE.Vector3() }, gain: { value: new THREE.Vector3(1, 1, 1) }, vig: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float sat, con, vig; uniform vec3 lift, gain; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb; float l = dot(x, vec3(.2126, .7152, .0722));
      x = mix(vec3(l), x, sat); x = (x - .5) * con + .5; x = x * gain + lift * (1. - x);
      x *= 1. - vig * smoothstep(.38, .9, distance(vUv, vec2(.5)));
      gl_FragColor = vec4(clamp(x, 0., 1.), c.a); }`
};
// el GTAO no ha de veure els halos, els bassals de llum ni les espurnes (farien quadrats foscos)
class AOPass extends GTAOPass {
  _overrideVisibility() { super._overrideVisibility(); const c = this._visibilityCache; this.scene.traverse(o => { const m = o.material; if (o.visible && (o.isSprite || o.userData.noAO || (m && m.transparent && m.depthWrite === false))) { o.visible = false; c.push(o); } }); }
}
function finish(r, sc, cam, W, H, o = {}) {
  const rt = new THREE.WebGLRenderTarget(W, H, { samples: 4, type: THREE.HalfFloatType });
  const comp = new EffectComposer(r, rt);
  comp.addPass(new RenderPass(sc, cam));
  const ao = new AOPass(sc, cam, W, H); ao.updateGtaoMaterial({ radius: .6, distanceExponent: 1.2, thickness: 1.2, scale: 1.1 }); ao.blendIntensity = o.ao ?? .9; comp.addPass(ao);
  if (o.focus) { const bk = new BokehPass(sc, cam, { focus: o.focus, aperture: o.aperture || .0012, maxblur: o.maxblur || .006 }); comp.addPass(bk); }
  const [bs, br, bt] = o.bloom || [.14, .35, 1.05];
  comp.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), bs, br, bt));
  comp.addPass(new OutputPass());
  if (o.grade) { const gp = new ShaderPass(GradeShader), g = o.grade, u = gp.uniforms; u.sat.value = g.sat ?? 1; u.con.value = g.con ?? 1; u.vig.value = g.vig ?? 0; if (g.lift) u.lift.value.set(...g.lift); if (g.gain) u.gain.value.set(...g.gain); comp.addPass(gp); }
  comp.render();
  const url = r.domElement.toDataURL('image/webp', o.q ?? .88); comp.dispose(); rt.dispose(); r.dispose(); return url;
}

/* ---------- el mar: degradat turquesa a prop de l'illa, blau intens lluny, amb onades ---------- */
const HOT = new THREE.Color();
function sea(sc, cx = 0, cz = 0, rx = 5, rz = 7, pal = ['#6FE0EE', '#1F9BE0', '#1762B8']) {
  const g = new THREE.PlaneGeometry(90, 90, 160, 160); g.rotateX(-Math.PI / 2);
  const pa = g.attributes.position, cols = new Float32Array(pa.count * 3), c1 = new THREE.Color(pal[0]), c2 = new THREE.Color(pal[1]), c3 = new THREE.Color(pal[2]), c = new THREE.Color();
  for (let i = 0; i < pa.count; i++) {
    const x = pa.getX(i), z = pa.getZ(i), d = Math.hypot((x - cx) / rx, (z - cz) / rz);
    pa.setY(i, Math.sin(x * 1.3 + z * .4) * .035 + Math.cos(z * 1.1 - x * .3) * .035);
    const t = Math.min(1, Math.max(0, (d - .95) / .45)); c.copy(c1).lerp(c2, t); if (d > 1.4) c.lerp(c3, Math.min(.8, (d - 1.4) / 1.2));
    if (pal[3]) { const h = pal[3], e = Math.max(0, 1 - Math.hypot(x - h.at[0], z - h.at[1]) / h.r); if (e > 0 && d > 1.05) c.lerp(HOT.set(h.col), h.k * e * e * Math.min(1, (d - 1.05) / .4)); }
    cols.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .12, metalness: 0, clearcoat: .6, clearcoatRoughness: .2, flatShading: true }));
  m.receiveShadow = true; sc.add(m); return m;
}
// una forma orgànica al voltant d'un conjunt de caselles (per a la platja i l'escuma)
function blob(cells, pad, seed) {
  const R = rnd(seed), n = 72, pts = [];
  const cx = cells.reduce((a, c) => a + c[0], 0) / cells.length, cz = cells.reduce((a, c) => a + c[1], 0) / cells.length;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2, dx = Math.cos(a), dz = Math.sin(a);
    let best = 0; for (const [x, z] of cells) { const p = (x - cx) * dx + (z - cz) * dz; if (p > best && Math.abs(-(x - cx) * dz + (z - cz) * dx) < .75) best = p; }
    pts.push([cx + dx * (best + pad + (R() - .5) * .25), cz + dz * (best + pad + (R() - .5) * .25)]);
  }
  // suavitza
  const sm = pts.map((p, i) => { const a = pts[(i + n - 1) % n], b = pts[(i + 1) % n]; return [(a[0] + 2 * p[0] + b[0]) / 4, (a[1] + 2 * p[1] + b[1]) / 4]; });
  const sh = new THREE.Shape(); sm.forEach(([x, z], i) => i ? sh.lineTo(x, z) : sh.moveTo(x, z)); sh.closePath(); sh.pts = sm; return sh;
}
function slab(sc, sh, y, depth, col, o = {}) {
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: true, bevelThickness: o.bt ?? .12, bevelSize: o.bs ?? .25, bevelSegments: 5, curveSegments: 24 });
  g.rotateX(Math.PI / 2); const m = new THREE.Mesh(g, o.mat || new THREE.MeshStandardMaterial({ color: col, roughness: .95 })); m.position.y = y; m.receiveShadow = true; m.castShadow = !!o.cast; sc.add(m); return m;
}
// anella plana (contorn d'una forma) per a l'escuma, les onades o la línia de llum de la costa
function ringOf(sc, cells, pad, w, seed, y, mat) {
  const o = blob(cells, pad + w, seed), i = blob(cells, pad, seed); o.holes.push(new THREE.Path(i.pts.map(([x, z]) => new THREE.Vector2(x, z))));
  const g = new THREE.ShapeGeometry(o, 1); g.rotateX(Math.PI / 2); mat.side = THREE.DoubleSide; const m = new THREE.Mesh(g, mat); m.position.y = y; m.receiveShadow = true; sc.add(m); return m;
}

// altiplà de terra amb estrats i roca irregular (low-poly) i una capa d'herba que sobresurt una mica
function plateau(sc, sh, y, h, seed, o = {}) {
  const R = rnd(seed * 31 + 5);
  const g = new THREE.ExtrudeGeometry(sh, { depth: h, steps: 4, bevelEnabled: false, curveSegments: 6 }); g.rotateX(Math.PI / 2); g.translate(0, h, 0);
  const ng = g.toNonIndexed(), pa = ng.attributes.position, cols = new Float32Array(pa.count * 3), c = new THREE.Color();
  const band = o.bands || ['#7E4A2C', '#9C5F38', '#B8744A', '#C98856'], noise = new Map();
  const nz = (x, yy, z) => { const k = x.toFixed(2) + ',' + yy.toFixed(2) + ',' + z.toFixed(2); if (!noise.has(k)) noise.set(k, (R() - .5)); return noise.get(k); };
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), yy = pa.getY(i), z = pa.getZ(i);
    if (yy > .02 && yy < h - .02) { const d = Math.hypot(x, z) || 1, e = nz(x, yy, z) * (o.rough ?? .16); pa.setX(i, x + x / d * e); pa.setZ(i, z + z / d * e); }
    const t = Math.min(3, Math.floor(yy / h * 4)); c.set(band[t]); cols.set([c.r, c.g, c.b], i * 3); }
  ng.setAttribute('color', new THREE.BufferAttribute(cols, 3)); ng.computeVertexNormals();
  const m = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, flatShading: true, ...(o.sideMat || {}) })); m.position.y = y; m.castShadow = m.receiveShadow = true; sc.add(m);
  const cap = new THREE.ExtrudeGeometry(sh, { depth: .1, bevelEnabled: true, bevelThickness: .05, bevelSize: .09, bevelSegments: 3, curveSegments: 12 }); cap.rotateX(Math.PI / 2);
  const cm = new THREE.Mesh(cap, o.cap || new THREE.MeshStandardMaterial({ color: '#6FC043', roughness: .9 })); cm.position.y = y + h + .02; cm.castShadow = cm.receiveShadow = true; cm.userData.ground = 1; sc.add(cm);
}

/* ---------- peces procedurals ---------- */
const MC = {};
const sm = (c, o = {}) => { const k = c + JSON.stringify(o); return MC[k] || (MC[k] = new THREE.MeshStandardMaterial({ color: c, roughness: .8, metalness: 0, ...o })); };
// material que brilla (k > 1 passa del llindar del bloom)
const glow = (c, k = 2) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k) });
function mesh(g, m, p, par, o = {}) { const x = new THREE.Mesh(g, m); if (p) x.position.set(...p); if (o.r) x.rotation.set(...o.r); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); x.castShadow = o.cast !== false; x.receiveShadow = true; if (o.ground) x.userData.ground = 1; par.add(x); return x; }
function grp(par, x, y, z, ry = 0, s = 1) { const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; g.scale.setScalar(s); par.add(g); return g; }
const UP = new THREE.Vector3(0, 1, 0);
function rod(par, a, b, r, m, seg = 6) { const d = new THREE.Vector3().subVectors(b, a), x = mesh(new THREE.CylinderGeometry(r, r, d.length(), seg), m, null, par); x.position.copy(a).addScaledVector(d, .5); x.quaternion.setFromUnitVectors(UP, d.normalize()); return x; }
let RADIAL = null;
const radial = () => RADIAL || (RADIAL = ctex(128, 128, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.4, 'rgba(255,255,255,.45)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); }));
// bassal de llum a terra (sense cost de llums reals) i halo al voltant d'una bombeta
function pool(par, x, y, z, rad, col, k = .5) { const m = mesh(new THREE.PlaneGeometry(rad * 2, rad * 2), new THREE.MeshBasicMaterial({ map: radial(), color: new THREE.Color(col).multiplyScalar(k), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }), [x, y, z], par, { r: [-Math.PI / 2, 0, 0], cast: false }); m.receiveShadow = false; m.userData.ground = 1; return m; }
function halo(par, x, y, z, s, col, k = 1) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial(), color: new THREE.Color(col).multiplyScalar(k), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); sp.position.set(x, y, z); sp.scale.setScalar(s); par.add(sp); return sp; }
const stripeTex = (a, b, n, w = 512, h = 16) => ctex(w, h, (g) => { for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? b : a; g.fillRect(i * w / n, 0, w / n + 1, h); } });
// camí: una cinta plana al llarg de la corba (off: desplaçament lateral)
function ribbon(sc, curve, pts, w, y, mat, off = 0) {
  const N = pts.length - 1, pos = [], idx = [], uv = [];
  for (let i = 0; i <= N; i++) { const p = pts[i], tg = curve.getTangentAt(i / N), l = Math.hypot(tg.x, tg.z) || 1, nx = -tg.z / l, nz = tg.x / l;
    pos.push(p.x + nx * (off + w), y, p.z + nz * (off + w), p.x + nx * (off - w), y, p.z + nz * (off - w)); uv.push(0, i / N, 1, i / N);
    if (i) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.userData.ground = 1; sc.add(m); return m;
}
// espurnes al mar (el sol que hi rebota)
function glints(sc, R, n, col, k, area, s = 1) {
  const g = new THREE.PlaneGeometry(.16 * s, .035 * s); g.rotateX(-Math.PI / 2);
  const im = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(k), transparent: true, opacity: .9, depthWrite: false }), n), o = new THREE.Object3D();
  let c = 0; for (let t = 0; t < n * 20 && c < n; t++) { const p = area(R); if (!p) continue; o.position.set(p[0], .085, p[1]); o.rotation.set(0, (R() - .5) * .5, 0); o.scale.setScalar(.5 + R() * 1.1); o.updateMatrix(); im.setMatrixAt(c++, o.matrix); }
  im.count = c; sc.add(im); return im;
}

/* far de ratlles, moll de fusta, veler, para-sol i castell de sorra (món tropical) */
function lighthouse(par, x, y, z, s = 1) {
  const g = grp(par, x, y, z, 0, s), H = 1.45, r0 = .3, r1 = .2, b = 6, dark = sm('#34394A', { roughness: .5 });
  mesh(new THREE.CylinderGeometry(.44, .52, .16, 9), sm('#A9B1BE', { flatShading: true }), [0, .08, 0], g);
  for (let i = 0; i < b; i++) { const a = i / b, c = (i + 1) / b; mesh(new THREE.CylinderGeometry(r0 + (r1 - r0) * c, r0 + (r1 - r0) * a, H / b, 24), sm(i % 2 ? '#E84A43' : '#FFF8EE', { roughness: .5 }), [0, .16 + H * (a + c) / 2, 0], g); }
  const t = .16 + H;
  mesh(new THREE.CylinderGeometry(.28, .26, .05, 24), dark, [0, t + .025, 0], g);
  mesh(new THREE.CylinderGeometry(.14, .14, .2, 12), glow('#FFE7A0', 2.6), [0, t + .15, 0], g, { cast: false });
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; mesh(new THREE.BoxGeometry(.02, .2, .02), dark, [Math.cos(a) * .145, t + .15, Math.sin(a) * .145], g); }
  mesh(new THREE.TorusGeometry(.26, .012, 6, 28), dark, [0, t + .13, 0], g, { r: [Math.PI / 2, 0, 0] });
  mesh(new THREE.ConeGeometry(.2, .2, 20), sm('#E84A43', { roughness: .45 }), [0, t + .35, 0], g);
  mesh(new THREE.SphereGeometry(.03, 8, 6), dark, [0, t + .47, 0], g);
  mesh(new THREE.BoxGeometry(.12, .2, .05), sm('#6B4430'), [0, .26, r0 - .005], g);
  mesh(new THREE.BoxGeometry(.07, .09, .05), sm('#7FD3F2', { roughness: .2 }), [0, .9, (r0 + r1) / 2 - .01], g);
  halo(g, 0, t + .15, 0, .9, '#FFD98A', .9);
  return g;
}
function pier(par, x, y, z, ry, len) {
  const g = grp(par, x, y, z, ry), post = sm('#6E4A31', { roughness: .9 });
  for (let i = 0; i * .15 < len; i++) mesh(new THREE.BoxGeometry(.6, .045, .13), sm(['#C99258', '#B98250', '#D6A066'][i % 3], { roughness: .85 }), [(i % 2 - .5) * .02, .3, -i * .15], g);
  for (let d = 0; d <= len; d += .75) for (const s of [-1, 1]) mesh(new THREE.CylinderGeometry(.035, .04, .62, 8), post, [s * .28, .05, -d], g);
  for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(.03, .03, len), post, [s * .3, .44, -len / 2], g);
  for (let d = 0; d <= len; d += .75) for (const s of [-1, 1]) mesh(new THREE.CylinderGeometry(.018, .018, .16, 6), post, [s * .3, .37, -d], g);
  return g;
}
function sailboat(par, x, z, ry, s, col, sailC = '#FFF8EA') {
  const g = grp(par, x, .02, z, ry, s), sh = new THREE.Shape();
  sh.moveTo(0, -.55); sh.quadraticCurveTo(.2, -.25, .19, .2); sh.lineTo(.15, .4); sh.lineTo(-.15, .4); sh.lineTo(-.19, .2); sh.quadraticCurveTo(-.2, -.25, 0, -.55);
  const hg = new THREE.ExtrudeGeometry(sh, { depth: .12, bevelEnabled: true, bevelThickness: .03, bevelSize: .03, bevelSegments: 2 }); hg.rotateX(Math.PI / 2); hg.translate(0, .14, 0);
  mesh(hg, sm('#FFFFFF', { roughness: .4 }), [0, 0, 0], g); mesh(new THREE.BoxGeometry(.3, .02, .5), sm('#C9935A'), [0, .155, .05], g);
  mesh(new THREE.TorusGeometry(.2, .012, 6, 30, Math.PI), sm(col), [0, .09, .05], g, { r: [Math.PI / 2, 0, Math.PI / 2], s: [1, 2.4, 1] });
  mesh(new THREE.CylinderGeometry(.012, .014, 1.05, 6), sm('#5B4636'), [0, .66, -.05], g);
  const sail = (w, h, c, dx) => { const t = new THREE.Shape(); t.moveTo(0, 0); t.lineTo(0, h); t.lineTo(w, 0); t.closePath(); const sg = new THREE.ShapeGeometry(t); const m = mesh(sg, new THREE.MeshStandardMaterial({ color: c, roughness: .7, side: THREE.DoubleSide }), [0, .2, dx], g, { r: [0, Math.PI / 2, 0] }); return m; };
  sail(.55, .9, sailC, -.06); sail(.32, .7, col, -.08).position.set(0, .2, -.12);
  const fl = mesh(new THREE.PlaneGeometry(.12, .06), new THREE.MeshStandardMaterial({ color: col, side: THREE.DoubleSide }), [0, 1.17, -.1], g); fl.rotation.y = Math.PI / 2;
  return g;
}
function umbrella(par, x, y, z, a, b, ry = 0) {
  const g = grp(par, x, y, z, ry);
  mesh(new THREE.CylinderGeometry(.014, .014, .62, 6), sm('#F4F1EA'), [0, .31, 0], g);
  mesh(new THREE.ConeGeometry(.36, .14, 10, 1, true), new THREE.MeshStandardMaterial({ map: stripeTex(a, b, 10, 256, 8), roughness: .7, side: THREE.DoubleSide }), [0, .62, 0], g);
  mesh(new THREE.SphereGeometry(.02, 6, 4), sm(b), [0, .7, 0], g);
  mesh(new THREE.BoxGeometry(.24, .01, .46), sm(a, { roughness: .9 }), [.2, .006, .25], g, { r: [0, .3, 0] });
  return g;
}
function sandcastle(par, x, y, z, s = 1) {
  const g = grp(par, x, y, z, .3, s), m = sm('#E8C487', { roughness: 1, flatShading: true });
  mesh(new THREE.BoxGeometry(.34, .12, .34), m, [0, .06, 0], g);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { mesh(new THREE.CylinderGeometry(.055, .065, .2, 8), m, [a * .17, .1, b * .17], g); mesh(new THREE.ConeGeometry(.06, .08, 8), m, [a * .17, .24, b * .17], g); }
  mesh(new THREE.CylinderGeometry(.08, .09, .22, 8), m, [0, .22, 0], g); mesh(new THREE.ConeGeometry(.09, .1, 8), m, [0, .38, 0], g);
  const f = mesh(new THREE.PlaneGeometry(.08, .05), new THREE.MeshStandardMaterial({ color: '#EF5A5A', side: THREE.DoubleSide }), [.04, .47, 0], g); void f;
  mesh(new THREE.CylinderGeometry(.005, .005, .12, 4), sm('#5B4636'), [0, .45, 0], g);
  return g;
}

/* fites de cada unitat (una per tema): molí, laberint, observatori, paller, trofeu, cavallets, sínia, titelles, pista ovalada, túnel, plaques solars, cinta */
const prism = (w, h, d) => { const t = new THREE.Shape(); t.moveTo(-w / 2, 0); t.lineTo(w / 2, 0); t.lineTo(0, h); t.closePath(); const g = new THREE.ExtrudeGeometry(t, { depth: d, bevelEnabled: false }); g.translate(0, 0, -d / 2); return g; };
function windmill(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), wd = sm('#8A5532'), wh = sm('#FFF6E8', { flatShading: true });
  mesh(new THREE.CylinderGeometry(.27, .37, 1.15, 8), wh, [0, .575, 0], g); mesh(new THREE.ConeGeometry(.36, .42, 8), sm('#E8574C', { flatShading: true }), [0, 1.36, 0], g);
  mesh(new THREE.BoxGeometry(.15, .24, .05), wd, [0, .12, .35], g); mesh(new THREE.BoxGeometry(.1, .1, .05), sm('#7FD3F2', { roughness: .2 }), [0, .7, .3], g);
  const hub = grp(g, 0, 1.08, .34); hub.rotation.z = .35; mesh(new THREE.CylinderGeometry(.05, .05, .12, 10), sm('#4A3B30'), [0, 0, 0], hub, { r: [Math.PI / 2, 0, 0] });
  for (let i = 0; i < 4; i++) { const b = grp(hub, 0, 0, .04); b.rotation.z = i * Math.PI / 2; mesh(new THREE.BoxGeometry(.045, .7, .03), wd, [0, .38, 0], b); mesh(new THREE.BoxGeometry(.17, .52, .015), sm('#FFFFFF', { roughness: .7 }), [.1, .44, 0], b); }
  return g;
}
async function hedgeMaze(par, x, y, z, ry) {
  const g = grp(par, x, y, z, ry), m = sm('#3E9A3A', { roughness: .9, flatShading: true }), W = [[0, 0, 1.6, 0], [0, 1.6, 1.6, 1.6], [0, 0, 0, 1.0], [1.6, .6, 1.6, 1.6], [.55, .55, .55, 1.6], [.55, .55, 1.1, .55], [1.1, 1.05, 1.1, 1.6]];
  for (const [a, b, c, d] of W) { const L = Math.hypot(c - a, d - b); mesh(new RoundedBoxGeometry(c === a ? .16 : L + .16, .3, c === a ? L + .16 : .16, 2, .06), m, [(a + c) / 2 - .8, .15, (b + d) / 2 - .8], g); }
  mesh(new THREE.SphereGeometry(.1, 12, 8), sm('#FFC531', { metalness: .5, roughness: .3 }), [.3, .12, .3], g);
  return g;
}
function observatory(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s);
  mesh(new THREE.CylinderGeometry(.42, .46, .5, 20), sm('#F4F1EA'), [0, .25, 0], g); mesh(new THREE.SphereGeometry(.43, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), sm('#C9D2DE', { metalness: .4, roughness: .35 }), [0, .5, 0], g);
  mesh(new THREE.BoxGeometry(.14, .3, .4), sm('#2B3140'), [0, .72, .18], g, { r: [-.5, 0, 0] });
  const t = mesh(new THREE.CylinderGeometry(.05, .07, .5, 12), sm('#3A4152', { metalness: .5 }), [0, .95, .3], g); t.rotation.x = .9;
  mesh(new THREE.BoxGeometry(.16, .24, .05), sm('#6B4430'), [0, .12, .45], g);
  return g;
}
function barn(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), red = sm('#D2453A', { roughness: .8 }), wh = sm('#FFF6E8');
  mesh(new THREE.BoxGeometry(.9, .55, .7), red, [0, .275, 0], g); mesh(prism(1.0, .38, .8), sm('#7A3A2E', { flatShading: true }), [0, .55, 0], g, { r: [0, Math.PI / 2, 0] });
  mesh(prism(.9, .34, .71), red, [0, .55, 0], g, { r: [0, Math.PI / 2, 0] });
  mesh(new THREE.BoxGeometry(.34, .36, .02), wh, [0, .18, .36], g); mesh(new THREE.BoxGeometry(.3, .32, .025), red, [0, .18, .362], g);
  for (const sgn of [-1, 1]) mesh(new THREE.BoxGeometry(.03, .44, .03), wh, [0, .18, .375], g, { r: [0, 0, sgn * .72] });
  for (const [a, b] of [[.6, .25], [.62, -.15], [-.62, .3]]) mesh(new THREE.CylinderGeometry(.13, .13, .22, 14), sm('#E8C25A', { roughness: 1 }), [a, .13, b], g, { r: [0, 0, Math.PI / 2] });
  return g;
}
function trophy(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), gold = sm('#F2B632', { metalness: .85, roughness: .25 });
  mesh(new THREE.BoxGeometry(.62, .2, .62), sm('#F4F6F8'), [0, .1, 0], g); mesh(new THREE.BoxGeometry(.46, .18, .46), sm('#3A4256'), [0, .29, 0], g);
  const prof = [[0, 0], [.16, 0], [.16, .04], [.06, .08], [.05, .24], [.1, .3], [.24, .46], [.27, .72], [.25, .74], [.22, .5], [0, .42]].map(([a, b]) => new THREE.Vector2(a, b));
  mesh(new THREE.LatheGeometry(prof, 28), gold, [0, .38, 0], g);
  for (const sgn of [-1, 1]) mesh(new THREE.TorusGeometry(.11, .025, 8, 16, Math.PI), gold, [sgn * .26, .98, 0], g, { r: [0, 0, sgn * -Math.PI / 2] });
  halo(g, 0, 1.0, 0, 1.1, '#FFD46B', .35);
  return g;
}
function carousel(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), gold = sm('#E4AE46', { metalness: .7, roughness: .3 }), st = new THREE.MeshStandardMaterial({ map: stripeTex('#E84A5F', '#FFF6E8', 16), roughness: .7 });
  mesh(new THREE.CylinderGeometry(.72, .76, .12, 32), sm('#7A3FB0'), [0, .06, 0], g); mesh(new THREE.CylinderGeometry(.7, .7, .02, 32), sm('#F6E2BC'), [0, .13, 0], g);
  mesh(new THREE.CylinderGeometry(.09, .09, .9, 12), gold, [0, .58, 0], g);
  mesh(new THREE.ConeGeometry(.82, .42, 32), st, [0, 1.24, 0], g); mesh(new THREE.CylinderGeometry(.8, .8, .1, 32, 1, true), new THREE.MeshStandardMaterial({ map: stripeTex('#FFD15C', '#E84A5F', 32), roughness: .7, side: THREE.DoubleSide }), [0, .98, 0], g);
  const HC = ['#FFFFFF', '#FFD15C', '#2FB5A6', '#F08A24', '#FF9FB6', '#9B6CF2'];
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, px = Math.cos(a) * .52, pz = Math.sin(a) * .52, hy = .42 + (i % 2) * .12; mesh(new THREE.CylinderGeometry(.014, .014, .85, 6), gold, [px, .56, pz], g);
    const h = grp(g, px, hy, pz, -a); mesh(new THREE.BoxGeometry(.08, .1, .24), sm(HC[i]), [0, 0, 0], h); mesh(new THREE.BoxGeometry(.07, .14, .07), sm(HC[i]), [0, .1, .12], h, { r: [.4, 0, 0] }); }
  for (let i = 0; i < 20; i++) { const a = i / 20 * Math.PI * 2; mesh(new THREE.SphereGeometry(.025, 6, 4), glow('#FFE3A3', 2.8), [Math.cos(a) * .81, .93, Math.sin(a) * .81], g, { cast: false }); }
  mesh(new THREE.SphereGeometry(.06, 10, 8), gold, [0, 1.48, 0], g);
  return g;
}
function ferris(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), w = sm('#F4F1EA', { metalness: .3, roughness: .4 }), R0 = .85, cy = 1.05;
  for (const zz of [-.12, .12]) { mesh(new THREE.TorusGeometry(R0, .025, 8, 48), w, [0, cy, zz], g); for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; rod(g, new THREE.Vector3(0, cy, zz), new THREE.Vector3(Math.cos(a) * R0, cy + Math.sin(a) * R0, zz), .008, w, 4); } }
  for (const zz of [-.22, .22]) for (const sx of [-1, 1]) rod(g, new THREE.Vector3(sx * .55, 0, zz), new THREE.Vector3(0, cy, zz * .6), .03, sm('#7A3FB0'));
  mesh(new THREE.CylinderGeometry(.05, .05, .36, 10), sm('#7A3FB0'), [0, cy, 0], g, { r: [Math.PI / 2, 0, 0] });
  const GC = ['#E84A5F', '#FFD15C', '#2FB5A6', '#F08A24', '#7A3FB0', '#FF9FB6'];
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; mesh(new THREE.BoxGeometry(.13, .12, .16), sm(GC[i % GC.length], { roughness: .5 }), [Math.cos(a) * R0, cy + Math.sin(a) * R0 - .09, 0], g); mesh(new THREE.SphereGeometry(.02, 6, 4), glow('#FFE3A3', 2.6), [Math.cos(a) * R0, cy + Math.sin(a) * R0, .14], g, { cast: false }); }
  return g;
}
function puppetBooth(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), st = new THREE.MeshStandardMaterial({ map: stripeTex('#2FB5A6', '#FFF6E8', 8, 256, 8), roughness: .7 });
  mesh(new THREE.BoxGeometry(.7, .55, .4), st, [0, .275, 0], g); mesh(new THREE.BoxGeometry(.7, .3, .4), st, [0, .95, 0], g);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.08, .3, .4), st, [sx * .31, .7, 0], g);
  mesh(new THREE.BoxGeometry(.54, .3, .02), sm('#2A1418'), [0, .7, -.05], g); mesh(drape(.54, .1, 6, .015), new THREE.MeshStandardMaterial({ color: '#C21F38', side: THREE.DoubleSide }), [0, .8, .21], g);
  mesh(prism(.78, .22, .44), sm('#E84A5F', { flatShading: true }), [0, 1.1, 0], g);
  mesh(new THREE.SphereGeometry(.06, 12, 8), sm('#FFD9B0'), [-.1, .62, .05], g); mesh(new THREE.ConeGeometry(.06, .1, 10), sm('#E84A5F'), [-.1, .71, .05], g);
  mesh(new THREE.SphereGeometry(.06, 12, 8), sm('#FFE0A0'), [.12, .6, .05], g); mesh(new THREE.ConeGeometry(.06, .1, 10), sm('#2F6BFF'), [.12, .69, .05], g);
  return g;
}
function ovalTrack(par, x, y, z, ry, R) {
  const g = grp(par, x, y, z, ry), sh = new THREE.Shape(), w = 1.0, h = .62, r = .28;
  sh.moveTo(-w + r, -h); sh.lineTo(w - r, -h); sh.quadraticCurveTo(w, -h, w, -h + r); sh.lineTo(w, h - r); sh.quadraticCurveTo(w, h, w - r, h); sh.lineTo(-w + r, h); sh.quadraticCurveTo(-w, h, -w, h - r); sh.lineTo(-w, -h + r); sh.quadraticCurveTo(-w, -h, -w + r, -h);
  const mg = new THREE.ExtrudeGeometry(sh, { depth: .02, bevelEnabled: false }); mg.rotateX(Math.PI / 2); mg.translate(0, .02, 0); mesh(mg, sm('#FBFBF8', { roughness: .65 }), [0, 0, 0], g, { ground: 1 });
  const cv = new THREE.EllipseCurve(0, 0, .72, .38, 0, Math.PI * 2), pp = cv.getPoints(80).map(p => new THREE.Vector3(p.x, .026, p.y));
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pp, true), 80, .035, 4, true), sm('#121419'), null, g, { s: [1, .15, 1], cast: false });
  maqueen(g, .72, .03, 0, Math.PI, '01110 10001 10001 10001 01110', .055); void R;
  return g;
}
function tunnel(par, x, y, z, ry) {
  const g = grp(par, x, y, z, ry), m = new THREE.MeshStandardMaterial({ color: '#C6CCD5', roughness: .7, side: THREE.DoubleSide });
  mesh(new THREE.CylinderGeometry(.52, .52, .8, 24, 1, true, 0, Math.PI), m, [0, 0, 0], g, { r: [0, 0, Math.PI / 2] });
  const hz = ctex(64, 16, (c, w, h) => { for (let i = 0; i < 8; i++) { c.fillStyle = i % 2 ? '#16181D' : '#F2C230'; c.beginPath(); c.moveTo(i * 8, 0); c.lineTo(i * 8 + 8, 0); c.lineTo(i * 8, h); c.lineTo(i * 8 - 8, h); c.fill(); } });
  for (const sx of [-.4, .4]) mesh(new THREE.TorusGeometry(.53, .035, 6, 24, Math.PI), new THREE.MeshStandardMaterial({ map: hz }), [sx, 0, 0], g, { r: [0, Math.PI / 2, 0] });
  return g;
}
function solarField(par, x, y, z, ry) {
  const g = grp(par, x, y, z, ry), pm = sm('#24407A', { roughness: .2, metalness: .5 }), fr = sm('#C9D1DC', { metalness: .5, roughness: .4 });
  for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) { const p = grp(g, (j - 1) * .5, .22, (i - .5) * .5); p.rotation.x = -.5; mesh(new THREE.BoxGeometry(.44, .025, .32), fr, [0, 0, 0], p); mesh(new THREE.BoxGeometry(.4, .03, .28), pm, [0, .005, 0], p); mesh(new THREE.CylinderGeometry(.015, .015, .22, 6), fr, [(j - 1) * .5, .11, (i - .5) * .5], g); }
  return g;
}
async function conveyor(par, x, y, z, ry, FB) {
  const g = grp(par, x, y, z, ry), m = sm('#3A4152', { metalness: .4, roughness: .4 });
  mesh(new THREE.BoxGeometry(1.5, .06, .36), sm('#22262E', { roughness: .6 }), [0, .3, 0], g); for (const sz of [-1, 1]) mesh(new THREE.BoxGeometry(1.5, .1, .03), sm('#F2C230'), [0, .3, sz * .19], g);
  for (const sx of [-.65, 0, .65]) for (const sz of [-.15, .15]) mesh(new THREE.BoxGeometry(.05, .28, .05), m, [sx, .14, sz], g);
  for (const sx of [-.45, .05, .5]) await put(g, 'furniture/cardboardBoxClosed', sx, .33, 0, { center: true, tint: FB, s: 1.3, ry: .2 });
  mesh(new THREE.BoxGeometry(.22, .4, .2), sm('#E2574C'), [.9, .2, 0], g); mesh(new THREE.BoxGeometry(.14, .08, .02), glow('#8FD8FF', 1.3), [.9, .32, .105], g, { cast: false });
  return g;
}

/* carpes de circ, escenari amb teló, fanals, garlandes i bancs (món del teatre) */
function tent(par, x, y, z, s, a, b, ry = 0) {
  const g = grp(par, x, y, z, ry, s), st = new THREE.MeshStandardMaterial({ map: stripeTex(a, b, 18), roughness: .75 }), st2 = new THREE.MeshStandardMaterial({ map: stripeTex(a, b, 18), roughness: .75, side: THREE.DoubleSide });
  mesh(new THREE.CylinderGeometry(.5, .5, .42, 36, 1, true), st2, [0, .21, 0], g);
  mesh(new THREE.ConeGeometry(.64, .6, 36), st, [0, .42 + .3, 0], g);
  for (let i = 0; i < 18; i++) { const t = (i + .5) / 18 * Math.PI * 2, f = mesh(new THREE.CircleGeometry(.075, 10, 0, Math.PI), new THREE.MeshStandardMaterial({ color: i % 2 ? a : b, side: THREE.DoubleSide, roughness: .7 }), [Math.sin(t) * .63, .43, Math.cos(t) * .63], g, { r: [Math.PI, t, 0] }); void f; }
  mesh(new THREE.CylinderGeometry(.012, .012, .3, 6), sm('#3B2D25'), [0, 1.15, 0], g);
  const pf = new THREE.Shape(); pf.moveTo(0, 0); pf.lineTo(.2, -.05); pf.lineTo(0, -.1); pf.closePath(); mesh(new THREE.ShapeGeometry(pf), new THREE.MeshStandardMaterial({ color: b === '#FFF6E8' ? a : b, side: THREE.DoubleSide }), [0, 1.3, 0], g);
  const door = new THREE.Shape(); door.moveTo(-.11, 0); door.lineTo(.11, 0); door.lineTo(.11, .2); door.quadraticCurveTo(0, .34, -.11, .2); door.closePath();
  mesh(new THREE.ShapeGeometry(door), sm('#2A1418'), [0, 0, .505], g, { cast: false });
  return g;
}
function drape(w, h, folds, amp) { const g = new THREE.PlaneGeometry(w, h, folds * 6, 4), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), yy = p.getY(i); p.setZ(i, Math.sin(x / w * folds * Math.PI * 2) * amp * (.6 + .4 * (yy / h + .5))); } g.computeVertexNormals(); return g; }
function stage(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), gold = sm('#E2AE45', { roughness: .3, metalness: .75 }), red = new THREE.MeshStandardMaterial({ color: '#C21F38', roughness: .75, side: THREE.DoubleSide }), dred = new THREE.MeshStandardMaterial({ color: '#741222', roughness: .8, side: THREE.DoubleSide });
  const boards = ctex(256, 128, (c, w, h) => { c.fillStyle = '#B7773F'; c.fillRect(0, 0, w, h); for (let i = 0; i < 10; i++) { c.fillStyle = i % 2 ? '#A86A36' : '#C2824A'; c.fillRect(0, i * h / 10, w, h / 10 - 1.5); } });
  mesh(new THREE.BoxGeometry(2.0, .3, 1.15), [sm('#5A2E22'), sm('#5A2E22'), new THREE.MeshStandardMaterial({ map: boards, roughness: .7 }), sm('#5A2E22'), sm('#6B3626'), sm('#5A2E22')], [0, .15, 0], g);
  mesh(new THREE.BoxGeometry(2.04, .05, .04), gold, [0, .28, .58], g);
  mesh(new THREE.BoxGeometry(.7, .14, .25), sm('#6B3626'), [0, .07, .68], g);
  mesh(drape(1.8, 1.2, 9, .025), dred, [0, .9, -.5], g);
  for (const sd of [-1, 1]) { mesh(new THREE.BoxGeometry(.16, 1.42, .16), gold, [sd * .98, 1.0, -.32], g); mesh(drape(.42, 1.18, 4, .04), red, [sd * .72, .89, -.28], g, { r: [0, 0, sd * -.06] }); }
  mesh(new THREE.BoxGeometry(2.16, .2, .2), gold, [0, 1.78, -.32], g);
  mesh(drape(1.8, .26, 12, .03), red, [0, 1.58, -.22], g);
  const star = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? .07 : .17; i ? star.lineTo(Math.cos(a) * rr, -Math.sin(a) * rr) : star.moveTo(Math.cos(a) * rr, -Math.sin(a) * rr); }
  mesh(new THREE.ExtrudeGeometry(star, { depth: .05, bevelEnabled: false }), glow('#FFD46B', 1.6), [0, 2.04, -.34], g);
  for (let i = 0; i < 7; i++) mesh(new THREE.SphereGeometry(.035, 10, 8), glow('#FFE2A0', 3), [-.75 + i * .25, .33, .5], g, { cast: false });
  pool(g, 0, .305, .05, .75, '#FFD9A0', .55);
  return g;
}
function filmCamera(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), d = sm('#2A2B33', { roughness: .45, metalness: .3 }), m = sm('#8A8F9C', { metalness: .6, roughness: .35 });
  for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; rod(g, new THREE.Vector3(Math.cos(a) * .2, 0, Math.sin(a) * .2), new THREE.Vector3(0, .5, 0), .012, m); }
  mesh(new THREE.BoxGeometry(.2, .16, .3), d, [0, .6, 0], g);
  for (const zz of [-.07, .09]) { mesh(new THREE.CylinderGeometry(.1, .1, .04, 20), d, [0, .78, zz], g, { r: [0, 0, Math.PI / 2] }); mesh(new THREE.CylinderGeometry(.03, .03, .05, 10), m, [0, .78, zz], g, { r: [0, 0, Math.PI / 2] }); }
  mesh(new THREE.CylinderGeometry(.045, .055, .1, 14), m, [0, .6, .2], g, { r: [Math.PI / 2, 0, 0] }); mesh(new THREE.CircleGeometry(.04, 14), sm('#7FD0FF', { roughness: .1, metalness: .4 }), [0, .6, .252], g);
  mesh(new THREE.SphereGeometry(.018, 8, 6), glow('#FF3B30', 3), [.07, .67, .15], g, { cast: false });
  return g;
}
function spotlight(par, x, y, z, target, col = '#FFE7B0') {
  const g = grp(par, x, y, z), d = sm('#2A2B33', { roughness: .4, metalness: .4 }), h = 1.1, head = new THREE.Vector3(x, y + h, z), dir = target.clone().sub(head).normalize();
  for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + .4; rod(g, new THREE.Vector3(Math.cos(a) * .16, 0, Math.sin(a) * .16), new THREE.Vector3(0, h - .1, 0), .012, d); }
  const hg = grp(g, 0, h, 0); hg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
  mesh(new THREE.CylinderGeometry(.09, .12, .26, 16), d, [0, 0, 0], hg, { r: [Math.PI / 2, 0, 0] }); mesh(new THREE.CircleGeometry(.11, 16), glow(col, 3.5), [0, 0, .132], hg, { cast: false });
  const L = Math.min(4, head.distanceTo(target)), cg = new THREE.CylinderGeometry(.1, .55, L, 24, 1, true); cg.translate(0, -L / 2, 0); cg.rotateX(-Math.PI / 2);
  const beam = mesh(cg, new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(.15), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }), [0, 0, .13], hg, { cast: false }); void beam;
  return g;
}
function lampPost(par, x, y, z, col, o = {}) {
  const h = o.h ?? .95, g = grp(par, x, y, z), m = sm(o.pole || '#2B2E38', { roughness: .4, metalness: .5 });
  mesh(new THREE.CylinderGeometry(.04, .055, .09, 10), m, [0, .045, 0], g);
  mesh(new THREE.CylinderGeometry(.018, .022, h, 8), m, [0, h / 2, 0], g);
  if (o.modern) { mesh(new THREE.BoxGeometry(.3, .035, .07), m, [.12, h, 0], g); mesh(new THREE.BoxGeometry(.18, .015, .05), glow(col, o.k ?? 3), [.17, h - .02, 0], g, { cast: false }); halo(g, .17, h - .04, 0, .45, col, .8); }
  else { mesh(new THREE.SphereGeometry(.075, 14, 10), glow(col, o.k ?? 3), [0, h + .075, 0], g, { cast: false }); mesh(new THREE.ConeGeometry(.085, .07, 10), m, [0, h + .18, 0], g); halo(g, 0, h + .08, 0, .55, col, .85); }
  if (o.pool !== 0) pool(par, x + (o.modern ? .17 : 0), y + .012, z, o.pool ?? .8, col, o.pk ?? .4);
  return new THREE.Vector3(x, y + h + .12, z);
}
function bunting(par, a, b, cols, sag = .22) {
  const mid = a.clone().lerp(b, .5); mid.y -= sag; const cv = new THREE.QuadraticBezierCurve3(a, mid, b);
  mesh(new THREE.TubeGeometry(cv, 24, .009, 4), sm('#F4EBDD'), null, par, { cast: false });
  const n = Math.max(4, Math.round(a.distanceTo(b) / .24)), tri = new THREE.Shape(); tri.moveTo(-.1, 0); tri.lineTo(.1, 0); tri.lineTo(0, -.22); tri.closePath(); const tg = new THREE.ShapeGeometry(tri);
  for (let i = 1; i < n; i++) { const p = cv.getPoint(i / n), t = cv.getTangent(i / n), f = mesh(tg, new THREE.MeshStandardMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide, roughness: .7 }), [p.x, p.y, p.z], par); f.rotation.y = Math.atan2(-t.z, t.x); }
}

/* edificis moderns, antenes, parabòliques, braç robot, cons i el Maqueen (laboratori i ciutat) */
function facade(cols, rows, night, R, base) {
  const cw = 26, rh = 30, w = cols * cw, h = rows * rh + 10, lit = [];
  const map = ctex(w, h, (g) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const x = c * cw + 4, y = 10 + r * rh + 5, on = night && R() < .5;
      if (night) { g.fillStyle = on ? (R() < .2 ? '#BFEFFF' : '#FFD08A') : '#182036'; if (on) lit.push([x, y, g.fillStyle]); }
      else { const gr = g.createLinearGradient(x, y, x + cw - 8, y + rh - 10); gr.addColorStop(0, '#5F8FB6'); gr.addColorStop(.55, '#9CC4DE'); gr.addColorStop(1, '#6E9CC0'); g.fillStyle = gr; }
      g.fillRect(x, y, cw - 8, rh - 10); }
  });
  const emi = night ? ctex(w, h, (g) => { g.fillStyle = '#000'; g.fillRect(0, 0, w, h); for (const [x, y, c] of lit) { g.fillStyle = c; g.fillRect(x, y, cw - 8, rh - 10); } }) : null;
  return { map, emi };
}
function building(par, R, x, y, z, o) {
  const g = grp(par, x, y, z, o.ry || 0), night = !!o.night, base = o.base || (night ? '#2A3352' : '#EEF1F5');
  const fx = facade(Math.max(2, Math.round(o.w * 6)), Math.max(2, Math.round(o.h * 5.2)), night, R, base), fz = facade(Math.max(2, Math.round(o.d * 6)), Math.max(2, Math.round(o.h * 5.2)), night, R, base);
  const side = f => new THREE.MeshStandardMaterial({ map: f.map, emissiveMap: f.emi, emissive: f.emi ? '#FFFFFF' : '#000000', emissiveIntensity: f.emi ? 1.7 : 0, roughness: .45, metalness: .1 });
  const roof = sm(night ? '#232A42' : '#C9CFD8', { roughness: .8 }), sx = side(fx), sz = side(fz);
  mesh(new THREE.BoxGeometry(o.w, o.h, o.d), [sz, sz, roof, roof, sx, sx], [0, o.h / 2, 0], g);
  mesh(new THREE.BoxGeometry(o.w + .06, .06, o.d + .06), sm(night ? '#3B4466' : '#FFFFFF', { roughness: .5 }), [0, o.h + .03, 0], g);
  mesh(new THREE.BoxGeometry(o.w + .04, .1, o.d + .04), sm(night ? '#1B2034' : '#9AA3B0'), [0, .05, 0], g);
  if (o.accent) mesh(new THREE.BoxGeometry(.08, o.h * .92, .02), night ? glow(o.accent, 2.2) : sm(o.accent, { roughness: .5 }), [o.w / 2 - .1, o.h * .48, o.d / 2 + .011], g, { cast: false });
  if (o.led) for (const [a, b] of [[1, 1], [-1, 1]]) mesh(new THREE.BoxGeometry(.025, o.h, .025), glow(o.led, 2.4), [a * (o.w / 2 + .005), o.h / 2, b * (o.d / 2 + .005)], g, { cast: false });
  mesh(new THREE.BoxGeometry(o.w * .3, .12, o.d * .3), sm(night ? '#3A4262' : '#B5BCC7'), [-o.w * .18, o.h + .12, -o.d * .15], g);
  if (o.solar) for (let i = 0; i < 2; i++) mesh(new THREE.BoxGeometry(o.w * .34, .02, o.d * .22), sm('#25407A', { roughness: .25, metalness: .4 }), [o.w * .18, o.h + .12, -o.d * .2 + i * o.d * .3], g, { r: [-.35, 0, 0] });
  const topY = o.h + .06;
  if (o.antenna) { mesh(new THREE.CylinderGeometry(.012, .016, .45, 6), sm('#B9C0CC', { metalness: .6, roughness: .3 }), [o.w * .2, topY + .225, o.d * .15], g); mesh(new THREE.SphereGeometry(.03, 8, 6), glow('#FF4A4A', 3), [o.w * .2, topY + .47, o.d * .15], g, { cast: false }); halo(g, o.w * .2, topY + .47, o.d * .15, .3, '#FF5A5A', .9); }
  return { g, top: new THREE.Vector3(x, y + topY + (o.antenna ? .47 : .05), z) };
}
function mast(par, x, y, z, h, o = {}) {
  const g = grp(par, x, y, z), m = sm(o.col || '#D9DEE6', { metalness: .55, roughness: .35 }), m2 = sm(o.col2 || '#E2574C', { roughness: .45 }), L = 3, rb = .2, rt = .045;
  const P = (i, t) => { const a = i / L * Math.PI * 2 + .5, r = rb + (rt - rb) * t; return new THREE.Vector3(Math.cos(a) * r, h * t, Math.sin(a) * r); };
  for (let i = 0; i < L; i++) rod(g, P(i, 0), P(i, 1), .016, m);
  const S = Math.round(h / .28);
  for (let s = 0; s < S; s++) for (let i = 0; i < L; i++) { rod(g, P(i, s / S), P((i + 1) % L, s / S), .007, s % 2 ? m : m2, 4); rod(g, P(i, s / S), P((i + 1) % L, (s + 1) / S), .006, m, 4); }
  mesh(new THREE.SphereGeometry(.045, 10, 8), glow('#FF4040', 3.2), [0, h + .03, 0], g, { cast: false }); halo(g, 0, h + .03, 0, .45, '#FF4A4A', 1);
  if (o.dish) { const d = mesh(new THREE.SphereGeometry(.16, 20, 8, 0, Math.PI * 2, Math.PI - .8, .8), new THREE.MeshStandardMaterial({ color: '#F4F6F8', roughness: .4, side: THREE.DoubleSide }), [0, h * .72, .12], g); d.rotation.x = -1.1; }
  return new THREE.Vector3(x, y + h + .03, z);
}
function dish(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), w = sm('#F2F4F7', { roughness: .4 }), d = sm('#7C8596', { metalness: .5, roughness: .4 });
  mesh(new THREE.CylinderGeometry(.12, .16, .12, 12), d, [0, .06, 0], g); mesh(new THREE.CylinderGeometry(.035, .035, .4, 8), d, [0, .3, 0], g);
  const b = mesh(new THREE.SphereGeometry(.42, 28, 10, 0, Math.PI * 2, Math.PI - .85, .85), new THREE.MeshStandardMaterial({ color: '#F2F4F7', roughness: .35, side: THREE.DoubleSide }), [0, .78, 0], g); b.rotation.x = -.85;
  rod(g, new THREE.Vector3(0, .62, .18), new THREE.Vector3(0, .9, .42), .012, d); mesh(new THREE.SphereGeometry(.035, 8, 6), w, [0, .9, .42], g);
  return g;
}
function robotArm(par, x, y, z, ry, col) {
  const g = grp(par, x, y, z, ry), o = sm(col, { roughness: .4 }), d = sm('#3A4152', { roughness: .45, metalness: .35 });
  mesh(new THREE.CylinderGeometry(.26, .3, .1, 28), d, [0, .05, 0], g);
  mesh(new THREE.CylinderGeometry(.17, .2, .18, 24), o, [0, .19, 0], g);
  const sh = grp(g, 0, .33, 0); mesh(new THREE.CylinderGeometry(.1, .1, .26, 18), d, [0, 0, 0], sh, { r: [0, 0, Math.PI / 2] });
  const a1 = grp(sh, 0, 0, 0); a1.rotation.x = -.45; mesh(new RoundedBoxGeometry(.14, .66, .14, 2, .04), o, [0, .33, 0], a1);
  const el = grp(a1, 0, .66, 0); el.rotation.x = 2.0; mesh(new THREE.CylinderGeometry(.08, .08, .2, 16), d, [0, 0, 0], el, { r: [0, 0, Math.PI / 2] });
  mesh(new RoundedBoxGeometry(.1, .52, .1, 2, .03), o, [0, .26, 0], el);
  const wr = grp(el, 0, .52, 0); wr.rotation.x = .7; mesh(new THREE.CylinderGeometry(.055, .055, .1, 12), d, [0, .05, 0], wr);
  mesh(new THREE.BoxGeometry(.16, .03, .06), d, [0, .11, 0], wr); mesh(new THREE.BoxGeometry(.025, .12, .05), d, [-.065, .18, 0], wr); mesh(new THREE.BoxGeometry(.025, .12, .05), d, [.065, .18, 0], wr);
  mesh(new THREE.SphereGeometry(.025, 8, 6), glow('#2EE6F0', 2.5), [0, .2, .1], g, { cast: false });
  return g;
}
function drone(par, x, y, z, ry) {
  const g = grp(par, x, y, z, ry), d = sm('#2B313D', { roughness: .4, metalness: .3 }), w = sm('#F2F4F7', { roughness: .3 }), blade = new THREE.MeshStandardMaterial({ color: '#CFE0F0', transparent: true, opacity: .4, depthWrite: false });
  mesh(new RoundedBoxGeometry(.26, .08, .26, 2, .035), w, [0, 0, 0], g); mesh(new THREE.BoxGeometry(.12, .02, .12), sm('#E2574C'), [0, .045, 0], g);
  mesh(new THREE.SphereGeometry(.045, 12, 8), d, [0, -.045, .1], g);
  for (const [a, b] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { rod(g, new THREE.Vector3(0, 0, 0), new THREE.Vector3(a * .22, .02, b * .22), .016, d); mesh(new THREE.CylinderGeometry(.03, .03, .06, 10), d, [a * .22, .03, b * .22], g);
    mesh(new THREE.CylinderGeometry(.13, .13, .006, 24), blade, [a * .22, .065, b * .22], g, { cast: false }); mesh(new THREE.SphereGeometry(.016, 6, 4), glow(b > 0 ? '#2EE6F0' : '#FF4A4A', 3), [a * .22, -.01, b * .22], g, { cast: false }); }
  return g;
}
function bench(par, x, y, z, ry) { const g = grp(par, x, y, z, ry), w = sm('#8A4E2E', { roughness: .8 }), m = sm('#2B2E38', { metalness: .5, roughness: .4 });
  mesh(new THREE.BoxGeometry(.56, .035, .16), w, [0, .17, 0], g); mesh(new THREE.BoxGeometry(.56, .1, .025), w, [0, .28, -.08], g, { r: [-.18, 0, 0] });
  for (const s of [-1, 1]) { mesh(new THREE.BoxGeometry(.03, .17, .15), m, [s * .24, .085, 0], g); mesh(new THREE.BoxGeometry(.03, .14, .02), m, [s * .24, .25, -.08], g); } return g; }
function tcone(par, x, y, z, s = 1) { const g = grp(par, x, y, z, 0, s); mesh(new THREE.BoxGeometry(.17, .025, .17), sm('#2B2F38'), [0, .0125, 0], g); mesh(new THREE.ConeGeometry(.066, .22, 18), sm('#FF6A1A', { roughness: .45 }), [0, .135, 0], g); mesh(new THREE.CylinderGeometry(.031, .043, .045, 18), sm('#FFFFFF', { roughness: .4 }), [0, .13, 0], g); return g; }
function maqueen(par, x, y, z, ry, led, s = .075) {
  const B = makeBot(false); drawMicrobit(B.mbT, led); B.mbMat.emissiveIntensity = 1.1;
  B.heads.forEach(h => { h.mat.color.set('#2EE6F0'); h.mat.emissive.set('#2EE6F0'); h.mat.emissiveIntensity = 2.2; h.gl.material.opacity = .85; h.gl.material.color.set('#2EE6F0'); });
  B.bot.position.set(x, y, z); B.bot.rotation.y = ry; B.bot.scale.setScalar(s); par.add(B.bot); return B.bot;
}
// cartell flotant amb una icona de neó (cor, xat, cadenat, escut, estrella, núvol): ciutadania digital
function iconSprite(par, x, y, z, kind, col, s = .62) {
  const t = ctex(256, 256, (g, w) => {
    const rr = (x0, y0, ww, hh, r) => { g.beginPath(); g.moveTo(x0 + r, y0); g.arcTo(x0 + ww, y0, x0 + ww, y0 + hh, r); g.arcTo(x0 + ww, y0 + hh, x0, y0 + hh, r); g.arcTo(x0, y0 + hh, x0, y0, r); g.arcTo(x0, y0, x0 + ww, y0, r); g.closePath(); };
    rr(22, 22, 212, 212, 48); g.fillStyle = 'rgba(14,24,52,.78)'; g.fill(); g.lineWidth = 10; g.strokeStyle = col; g.shadowColor = col; g.shadowBlur = 24; g.stroke();
    g.fillStyle = '#E8FBFF'; g.strokeStyle = '#E8FBFF'; g.lineWidth = 14; g.lineCap = g.lineJoin = 'round'; g.shadowColor = col; g.shadowBlur = 8; g.beginPath();
    if (kind === 'heart') { g.moveTo(128, 186); g.bezierCurveTo(60, 140, 62, 78, 102, 76); g.bezierCurveTo(118, 76, 126, 88, 128, 98); g.bezierCurveTo(130, 88, 138, 76, 154, 76); g.bezierCurveTo(194, 78, 196, 140, 128, 186); g.fill(); }
    else if (kind === 'chat') { rr(64, 74, 128, 86, 26); g.fill(); g.beginPath(); g.moveTo(92, 156); g.lineTo(84, 190); g.lineTo(122, 158); g.fill(); g.fillStyle = col; g.shadowBlur = 0; [100, 128, 156].forEach(cx => { g.beginPath(); g.arc(cx, 117, 9, 0, 7); g.fill(); }); }
    else if (kind === 'lock') { g.lineWidth = 16; g.beginPath(); g.arc(128, 104, 30, Math.PI, 0); g.lineTo(158, 122); g.moveTo(98, 122); g.lineTo(98, 104); g.stroke(); rr(78, 118, 100, 78, 14); g.fill(); g.fillStyle = col; g.shadowBlur = 0; g.beginPath(); g.arc(128, 152, 11, 0, 7); g.fill(); g.fillRect(123, 152, 10, 24); }
    else if (kind === 'shield') { g.moveTo(128, 62); g.lineTo(184, 82); g.quadraticCurveTo(184, 160, 128, 196); g.quadraticCurveTo(72, 160, 72, 82); g.closePath(); g.fill(); g.strokeStyle = col; g.lineWidth = 13; g.shadowBlur = 0; g.beginPath(); g.moveTo(104, 128); g.lineTo(122, 146); g.lineTo(154, 110); g.stroke(); }
    else if (kind === 'star') { for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 26 : 62; i ? g.lineTo(128 + Math.cos(a) * r, 132 + Math.sin(a) * r) : g.moveTo(128 + Math.cos(a) * r, 132 + Math.sin(a) * r); } g.closePath(); g.fill(); }
    else { g.arc(104, 138, 30, Math.PI * .5, Math.PI * 1.5); g.arc(136, 104, 38, Math.PI, 0); g.arc(166, 138, 30, Math.PI * 1.5, Math.PI * .5); g.closePath(); g.fill(); }
  });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, color: new THREE.Color(.62, .62, .62), transparent: true, depthWrite: false })); sp.position.set(x, y, z); sp.scale.setScalar(s); par.add(sp);
  halo(par, x, y, z, s * 1.7, col, .22);
  return sp;
}

/* ---------- textura de dalt de l'altiplà (herba, formigó amb rajoles, pissarra amb circuits…) en coordenades de món ---------- */
function capTex(kind, R, outline) {
  const S = 2048, U = S / 14, X = x => (x / 14 + .5) * S, Z = z => (1 - (z / 14 + .5)) * S;
  let emiDraw = null;
  const map = ctex(S, S, (g) => {
    const blobs = (n, cols, r0, r1, a) => { for (let i = 0; i < n; i++) { const x = X((R() - .5) * 10), y = Z((R() - .5) * 12), r = (r0 + R() * (r1 - r0)) * U, gr = g.createRadialGradient(x, y, 0, x, y, r), c = cols[i % cols.length]; gr.addColorStop(0, c + a); gr.addColorStop(1, c + '00'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); } };
    const dots = (n, cols, s0, s1) => { for (let i = 0; i < n; i++) { g.fillStyle = cols[i % cols.length]; const s = s0 + R() * (s1 - s0); g.fillRect(R() * S, R() * S, s, s); } };
    if (kind === 'grass' || kind === 'autumn') {
      const au = kind === 'autumn';
      g.fillStyle = au ? '#93B848' : '#6CC044'; g.fillRect(0, 0, S, S);
      blobs(70, au ? ['#A9C552', '#7FA63E', '#B9C45A'] : ['#82D153', '#5BAE3B', '#93D85E'], .6, 1.8, '88');
      dots(9000, au ? ['#86A93F', '#A7C356', '#7E9E3A'] : ['#5FB33D', '#84D35A', '#6CC447'], 2, 5);
      if (au) dots(1300, ['#E8892E', '#D2512E', '#F2C14E', '#C9662A'], 3, 7);
      else dots(500, ['#FFFFFF', '#FFE27A', '#FF9FB6'], 3, 6);
    } else if (kind === 'concrete') {
      g.fillStyle = '#AEB4BD'; g.fillRect(0, 0, S, S);
      for (let i = -7; i < 7; i++) for (let j = -7; j < 7; j++) { const v = Math.floor((R() - .5) * 14); g.fillStyle = `rgb(${174 + v},${180 + v},${189 + v})`; g.fillRect(X(i) + 2, Z(j + 1) + 2, U - 4, U - 4); }
      dots(6000, ['#A3A9B3', '#B9BEC6', '#9CA3AD'], 2, 4);
      g.strokeStyle = '#8B929D'; g.lineWidth = 3; for (let i = -7; i <= 7; i++) { g.beginPath(); g.moveTo(X(i), 0); g.lineTo(X(i), S); g.stroke(); g.beginPath(); g.moveTo(0, Z(i)); g.lineTo(S, Z(i)); g.stroke(); }
    } else if (kind === 'slate') {
      g.fillStyle = '#323B5E'; g.fillRect(0, 0, S, S);
      for (let i = -7; i < 7; i++) for (let j = -7; j < 7; j++) { const v = Math.floor((R() - .5) * 10); g.fillStyle = `rgb(${50 + v},${59 + v},${94 + v})`; g.fillRect(X(i) + 2, Z(j + 1) + 2, U - 4, U - 4); }
      g.strokeStyle = '#46528A'; g.lineWidth = 3; for (let i = -7; i <= 7; i++) { g.beginPath(); g.moveTo(X(i), 0); g.lineTo(X(i), S); g.stroke(); g.beginPath(); g.moveTo(0, Z(i)); g.lineTo(S, Z(i)); g.stroke(); }
      // pistes de circuit (també a l'emissiveMap)
      const tr = []; for (let i = 0; i < 26; i++) { let x = Math.round((R() - .5) * 9 * 4) / 4, z = Math.round((R() - .5) * 11 * 4) / 4; const p = [[x, z]]; for (let k = 0; k < 3; k++) { const d = Math.floor(R() * 4), L = .4 + R() * 1.2; if (d === 0) x += L; else if (d === 1) x -= L; else if (d === 2) { x += L * .7; z += L * .7; } else z -= L; p.push([x, z]); } tr.push(p); }
      emiDraw = (c, col, w) => { c.strokeStyle = col; c.fillStyle = col; c.lineWidth = w; c.lineCap = c.lineJoin = 'round'; for (const p of tr) { c.beginPath(); p.forEach(([x, z], i) => i ? c.lineTo(X(x), Z(z)) : c.moveTo(X(x), Z(z))); c.stroke(); for (const [x, z] of [p[0], p[p.length - 1]]) { c.beginPath(); c.arc(X(x), Z(z), w * 2.2, 0, 7); c.fill(); } } };
      emiDraw(g, '#4A6A9E', 3);
    }
    if (outline && (kind === 'concrete')) { // línia de seguretat groga a tocar de la vora
      const pts = outline.pts, n = pts.length, cx = pts.reduce((a, p) => a + p[0], 0) / n, cz = pts.reduce((a, p) => a + p[1], 0) / n;
      g.strokeStyle = '#F2C230'; g.lineWidth = .1 * U; g.setLineDash([.5 * U, .3 * U]); g.beginPath();
      pts.forEach(([x, z], i) => { const d = Math.hypot(x - cx, z - cz) || 1, k = (d - .38) / d, px = cx + (x - cx) * k, pz = cz + (z - cz) * k; i ? g.lineTo(X(px), Z(pz)) : g.moveTo(X(px), Z(pz)); }); g.closePath(); g.stroke(); g.setLineDash([]);
    }
  });
  const fit = t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1 / 14, 1 / 14); t.offset.set(.5, .5); return t; };
  fit(map);
  const emi = emiDraw ? fit(ctex(S, S, (g) => { g.fillStyle = '#000'; g.fillRect(0, 0, S, S); emiDraw(g, '#2FD8FF', 2.5); })) : null;
  return { map, emi };
}

/* ---------- decoració per temes (cada unitat varia dins del seu món) ---------- */
const TREES = ['tree_oak', 'tree_default', 'tree_detailed', 'tree_fat', 'tree_oak', 'tree_default', 'tree_pineRoundC', 'tree_pineTallA_detailed', 'tree_blocks', 'tree_small'];
const THEMES = {
  algo: { props: ['statue_obelisk', 'statue_column', 'rock_tallB', 'path_stoneCircle', 'stone_tallC'], trees: TREES },
  loop: { props: ['crops_cornStageD', 'crops_wheatStageB', 'crops_cornStageC', 'crops_leafsStageB', 'fence_simple'], trees: TREES, rows: true },
  llum: { props: ['campfire_stones', 'tent_detailedOpen', 'tent_smallOpen', 'log_stack', 'campfire_logs'], trees: ['tree_pineRoundC', 'tree_pineTallA_detailed', 'tree_pineRoundE', 'tree_cone', 'tree_pineDefaultA'], glow: true },
  sensor: { props: ['rock_largeA', 'rock_tallC', 'stone_largeB', 'rock_largeD', 'stone_tallF', 'cliff_cave_rock'], trees: ['tree_fat', 'tree_plateau', 'tree_detailed', 'tree_oak'] },
  ciutat: { props: ['city/building-type-a', 'city/building-type-c', 'city/building-type-e', 'city/building-type-h', 'city/building-type-k', 'city/building-type-m'], trees: ['city/tree-large', 'tree_oak', 'tree_default'], city: true },
  fruita: { props: ['crop_pumpkin', 'crop_melon', 'crop_carrot', 'crops_dirtDoubleRow', 'pot_large', 'crop_turnip'], trees: ['tree_oak_fall', 'tree_fat_fall', 'tree_default_fall', 'tree_oak', 'tree_detailed_fall'], rows: true },
  cova: { props: ['cliff_cave_rock', 'rock_tallJ', 'rock_largeE', 'mushroom_redGroup', 'mushroom_tanTall', 'stone_tallI'], trees: ['tree_pineTallB_detailed', 'tree_pineRoundD', 'tree_thin_dark', 'tree_cone_dark'] },
  trofeu: { props: ['statue_column', 'statue_ring', 'statue_head', 'path_stoneCircle', 'statue_obelisk'], trees: ['tree_palmTall', 'tree_palmDetailedTall', 'tree_palmBend', 'tree_oak'], flags: true }
};
export const THEME_KEYS = Object.keys(THEMES);

// col·locació: res damunt del camí ni de les parades, i res alt just davant d'una parada (la tapa­ria des de la càmera)
function placer(X) {
  const { cells, isP, key, pts, P, R } = X, occ = [];
  for (let i = 0; i < pts.length; i += 3) occ.push([pts[i].x, pts[i].z, .56]);
  for (const p of P) occ.push([p.x, p.z, 1.32]);
  const inside = (x, z, m) => [[-m, -m], [m, -m], [-m, m], [m, m], [0, 0]].every(([a, b]) => isP.has(key(Math.round(x + a), Math.round(z + b))));
  const hides = (x, z, rad, h) => h > .12 && P.some(p => z > p.z && z - h * 1.08 - rad < p.z + 1.25 && Math.abs(x - p.x) < 1.25 + rad);
  const hidesPath = (x, z, rad, h) => pts.some((q, i) => i % 4 === 0 && z > q.z && z - h * 1.08 - rad < q.z + .42 && Math.abs(x - q.x) < .42 + rad);
  const ok = (x, z, rad, h = 0, o = {}) => inside(x, z, o.m ?? rad * .7) && occ.every(([a, b, r]) => Math.hypot(a - x, b - z) > r + rad) && !hides(x, z, rad, h) && (!o.path || !hidesPath(x, z, rad, h)) && (!o.zone || o.zone(x, z));
  return {
    occ, ok, inside,
    take(x, z, rad) { occ.push([x, z, rad]); },
    // el millor lloc (determinista) per a una fita: el més a prop de o.at que compleixi les condicions
    best(rad, h, o = {}) { let bq = null, bs = -1e9; for (let x = -4.6; x <= 4.6; x += .15) for (let z = -5.6; z <= 5.6; z += .15) { if (!ok(x, z, rad, h, o)) continue; const sc = -Math.hypot(x - o.at[0], z - o.at[1]); if (sc > bs) { bs = sc; bq = [x, z]; } } if (bq) occ.push([bq[0], bq[1], rad]); return bq; },
    find(rad, h, o = {}) { for (let t = 0; t < (o.tries || 400); t++) { const [cx, cz] = cells[Math.floor(R() * cells.length)], x = cx + (R() - .5) * 1.1, z = cz + (R() - .5) * 1.1; if (ok(x, z, rad, h, o)) { occ.push([x, z, rad]); return [x, z]; } } return null; }
  };
}
const edgeK = (x, z) => (x / 4.3) ** 2 + (z / 5.6) ** 2;

/* ---------- els quatre mons ---------- */
const WORLDS = {
  // Bit (6-8 anys): illa tropical de joguina, llum càlida, llacuna turquesa
  tropic: {
    light: { exposure: 1.0, envI: .5, hemi: ['#D8F2FF', '#8CAA5E', .42], sun: ['#FFE1B2', 2.5, [-10, 12.5, 8.5]] },
    bg: '#1F9BD8', sea: ['#8CF2E6', '#25BFD6', '#1570C4'], sand: '#F7DCA6', foam: ['#E8FFFB', .62],
    cliff: ['#7A462A', '#985B36', '#B47248', '#C98A58'], cap: 'grass',
    post: { bloom: [.16, .4, .98], grade: { sat: 1.05, con: 1.03, gain: [1.01, 1.0, .985] } }
  },
  // Robòtica (10-12): base de proves de robots, formigó clar, pista de seguiment de línia, llum de dia freda
  lab: {
    light: { exposure: .92, envI: .5, hemi: ['#E3EEFF', '#4E5864', .4], sun: ['#FFF6EA', 2.45, [-9, 14, 7.5]] },
    bg: '#1D5F86', sea: ['#5FBAC3', '#287896', '#163D63'], sand: '#B5AFA3', foam: ['#DDF1F1', .5],
    cliff: ['#434954', '#565D69', '#6B737F', '#818995'], cap: 'concrete', pal: { leafsDark: '#1F5E46', leafsGreen: '#2E7D4F', woodBarkDark: '#5A4636' },
    post: { bloom: [.08, .3, 1.15], grade: { sat: 1.06, con: 1.09, gain: [.99, 1.0, 1.015] } }
  },
  // Creadors (8-10): l'illa del teatre a l'hora daurada
  teatre: {
    light: { exposure: 1.02, envI: .7, hemi: ['#FFC8A6', '#5A3A6E', .5], sun: ['#FFB46E', 2.9, [-13, 8.5, 3]], shadowR: 5,
      sky: { stops: [[0, '#3C3A86'], [.3, '#8A5AA8'], [.44, '#F08A7A'], [.5, '#FFC27A'], [.56, '#E9906E'], [1, '#4A3260']], sun: [.25, .47, 'rgba(255,214,150,.95)', 120] } },
    bg: '#5E4C9A', sea: ['#E3AE98', '#7D6CB0', '#3B3483', { at: [-8, -10], r: 13, col: '#FFB873', k: .7 }], sand: '#F0D3AA', foam: ['#FFEADF', .65], fog: ['#B98AB0', 44, 105],
    cliff: ['#5E2F2A', '#7C3E31', '#9A5238', '#B66A44'], cap: 'autumn', pal: { leafsGreen: '#7FA83A', grass: '#8DB043', woodBirch: '#CBB59C' },
    post: { bloom: [.3, .45, .92], grade: { sat: .98, con: 1.05, lift: [.03, .0, .045], gain: [1.02, .99, .97] } }
  },
  // Ciutadania digital (10-14): ciutat connectada a l'hora blava
  ciutat: {
    light: { exposure: 1.12, envI: .85, hemi: ['#7690E6', '#1C2444', 1.15], sun: ['#B8C6FF', 2.1, [9, 13, -4]], shadowR: 6,
      sky: { stops: [[0, '#081130'], [.3, '#16275E'], [.45, '#3D4F9A'], [.5, '#7B5FA8'], [.55, '#2A3570'], [1, '#090E22']], sun: [.75, .49, 'rgba(160,140,255,.6)', 160] } },
    bg: '#0A1838', sea: ['#1A5683', '#0E2F58', '#081636', { at: [7, -11], r: 9, col: '#3A4AA8', k: .55 }], sand: '#454F70', fog: ['#0B1636', 32, 74],
    cliff: ['#1F263D', '#283152', '#323C62', '#3E4A74'], cap: 'slate', pal: { leafsDark: '#1C4D4A', leafsGreen: '#24605A', woodBarkDark: '#3A2E2A', stone: '#6C7690', stoneDark: '#4C5570' },
    post: { bloom: [.55, .5, .78], grade: { sat: 1.0, con: 1.06, lift: [.0, .012, .03] } }
  }
};
export const WORLD_KEYS = Object.keys(WORLDS);

/* ----- camins ----- */
async function pathTropic(X) {
  const { sc, curve, pts, top, R } = X;
  ribbon(sc, curve, pts, .44, top + .006, sm('#D9A867', { roughness: 1, side: THREE.DoubleSide }));
  ribbon(sc, curve, pts, .37, top + .012, sm('#F4D79C', { roughness: 1, side: THREE.DoubleSide }));
  for (let i = 4; i < pts.length - 1; i += 7) { const p = pts[i], tg = curve.getTangentAt(i / (pts.length - 1)), s = (i / 7) % 2 ? 1 : -1; await put(sc, ['rock_smallFlatA', 'rock_smallFlatB', 'rock_smallFlatC'][i % 3], p.x - tg.z * .45 * s, top, p.z + tg.x * .45 * s, { s: .55, ry: R() * 6 }); }
}
async function pathLab(X) {
  const { sc, curve, pts, top } = X;
  ribbon(sc, curve, pts, .5, top + .006, sm('#6B7380', { roughness: .8, side: THREE.DoubleSide }));
  ribbon(sc, curve, pts, .46, top + .012, sm('#FBFBF8', { roughness: .65, side: THREE.DoubleSide }));
  ribbon(sc, curve, pts, .075, top + .018, sm('#121419', { roughness: .5, side: THREE.DoubleSide }));
  // sortida i meta: franges d'escacs travessant la pista
  const N = pts.length - 1, ck = ctex(128, 32, (g, w, h) => { for (let i = 0; i < 8; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#FFFFFF' : '#16181D'; g.fillRect(i * w / 8, j * h / 2, w / 8, h / 2); } });
  // just a la sortida de la primera plataforma i just abans de l'última
  const near = q => pts.reduce((b, v, i) => v.distanceTo(q) < pts[b].distanceTo(q) ? i : b, 0), i0 = near(X.P[0]), i1 = near(X.P[X.P.length - 1]);
  let j0 = i0; while (j0 < N && pts[j0].distanceTo(X.P[0]) < 1.5) j0++; let j1 = i1; while (j1 > 0 && pts[j1].distanceTo(X.P[X.P.length - 1]) < 1.5) j1--;
  for (const j of [j0, j1]) { const p = pts[j], tg = curve.getTangentAt(j / N), m = mesh(new THREE.PlaneGeometry(.92, .23), new THREE.MeshStandardMaterial({ map: ck, roughness: .6 }), [p.x, top + .022, p.z], sc, { r: [-Math.PI / 2, 0, 0], cast: false, ground: 1 }); m.rotation.z = Math.atan2(-tg.x, -tg.z); }
}
async function pathTeatre(X) {
  const { sc, curve, pts, top } = X, gold = sm('#E0A93F', { roughness: .32, metalness: .75, side: THREE.DoubleSide });
  ribbon(sc, curve, pts, .5, top + .008, gold);
  ribbon(sc, curve, pts, .43, top + .016, sm('#B71C33', { roughness: .9, side: THREE.DoubleSide }));
  for (const s of [-1, 1]) ribbon(sc, curve, pts, .012, top + .02, gold, s * .35);
}
async function pathCiutat(X) {
  const { sc, curve, pts, top } = X, N = pts.length - 1;
  ribbon(sc, curve, pts, .5, top + .006, sm('#111829', { roughness: .55, metalness: .2, side: THREE.DoubleSide }));
  for (const s of [-1, 1]) ribbon(sc, curve, pts, .022, top + .012, glow('#35E0FF', 2.4), s * .44);
  // paquets de dades al mig
  const dg = new THREE.BoxGeometry(.05, .012, .17), dm = glow('#B8F7FF', 2.6);
  for (let i = 3; i < N; i += 5) { const p = pts[i], tg = curve.getTangentAt(i / N), m = mesh(dg, dm, [p.x, top + .014, p.z], sc, { cast: false }); m.rotation.y = Math.atan2(tg.x, tg.z); }
}
const PATHS = { tropic: pathTropic, lab: pathLab, teatre: pathTeatre, ciutat: pathCiutat };

/* ----- plataformes de les parades (el botó de l'app es posa just al centre) ----- */
const SK = 1.2;   // mida de les plataformes: l'anella de color queda visible al voltant del botó de l'app
function stopTropic(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK);
  mesh(new THREE.CylinderGeometry(1.0, 1.05, .16, 56), sm('#FFF1D6', { roughness: .6 }), [0, .08, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(.86, .86, .02, 56), sm('#F6DEAE', { roughness: .8 }), [0, .165, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.93, .055, 12, 80), sm(color, { emissive: color, emissiveIntensity: .35, roughness: .35 }), [0, .17, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; mesh(new THREE.SphereGeometry(.045, 10, 8), sm('#FFFFFF', { roughness: .3 }), [Math.cos(a) * 1.0, .1, Math.sin(a) * 1.0], g, { ground: 1, s: [1, .7, 1] }); }
  return .18 * SK;
}
function stopLab(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK);
  mesh(new THREE.CylinderGeometry(1.0, 1.02, .12, 56), sm('#59616F', { roughness: .35, metalness: .55 }), [0, .06, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(.95, .95, .02, 56), sm('#E9ECF0', { roughness: .5 }), [0, .125, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.86, .06, 12, 80), sm(color, { emissive: color, emissiveIntensity: .12, roughness: .6 }), [0, .135, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  mesh(new THREE.TorusGeometry(.7, .014, 6, 72), sm('#16181D'), [0, .136, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; mesh(new THREE.BoxGeometry(.1, .012, .03), sm('#16181D'), [Math.cos(a) * .76, .137, Math.sin(a) * .76], g, { r: [0, -a, 0], ground: 1 }); }
  return .14 * SK;
}
function stopTeatre(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK), gold = sm('#E4AE46', { roughness: .3, metalness: .75 });
  mesh(new THREE.CylinderGeometry(1.0, 1.04, .2, 56), sm('#741B2B', { roughness: .8 }), [0, .1, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(1.0, .035, 8, 80), gold, [0, .2, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  mesh(new THREE.CylinderGeometry(.97, .97, .02, 56), sm('#F6E2BC', { roughness: .6 }), [0, .205, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.84, .05, 12, 80), sm(color, { emissive: color, emissiveIntensity: .5, roughness: .35 }), [0, .215, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; mesh(new THREE.SphereGeometry(.028, 8, 6), glow('#FFE3A3', 2.6), [Math.cos(a) * 1.02, .12, Math.sin(a) * 1.02], g, { cast: false }); }
  pool(g, 0, .21, 0, 1.15, '#FFDFA8', .32);
  return .22 * SK;
}
function stopCiutat(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK);
  mesh(new THREE.CylinderGeometry(1.02, 1.05, .1, 56), sm('#121827', { roughness: .4, metalness: .4 }), [0, .05, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(.98, .98, .02, 56), sm('#202A44', { roughness: .45 }), [0, .105, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.88, .05, 12, 80), glow(color, 2.3), [0, .115, 0], g, { r: [Math.PI / 2, 0, 0], cast: false, ground: 1 });
  mesh(new THREE.TorusGeometry(1.035, .014, 6, 80), glow('#35E0FF', 1.6), [0, .1, 0], g, { r: [Math.PI / 2, 0, 0], cast: false, ground: 1 });
  mesh(new THREE.TorusGeometry(.62, .01, 6, 64), glow(color, .9), [0, .116, 0], g, { r: [Math.PI / 2, 0, 0], cast: false, ground: 1 });
  pool(g, 0, .118, 0, 1.3, color, .22);
  return .12 * SK;
}
const STOPS = { tropic: stopTropic, lab: stopLab, teatre: stopTeatre, ciutat: stopCiutat };

/* ----- decoració de cada món ----- */
async function scatterNature(X, o) {
  const { sc, R, pl, top } = X;
  const tree = q => put(sc, o.treeList[Math.floor(R() * o.treeList.length)], q[0], top, q[1], { s: .85 + R() * .35, ry: R() * 6, tint: o.treeTint && o.treeTint(R) });
  for (let c = 0; c < (o.clusters || 0); c++) { const q = pl.find(.3, 1.35, { zone: (x, z) => edgeK(x, z) > (o.edge ?? .5) }); if (!q) continue; await tree(q);
    for (let k = 0; k < 7; k++) { const a = R() * 6.283, d = .45 + R() * .4, x = q[0] + Math.cos(a) * d, z = q[1] + Math.sin(a) * d, w = R();
      if (w < .4 && pl.ok(x, z, .28, 1.35)) { pl.take(x, z, .28); await tree([x, z]); }
      else if (w < .7 && pl.ok(x, z, .2, .4)) { pl.take(x, z, .2); await put(sc, ['plant_bushLarge', 'plant_bushDetailed', 'plant_bush'][Math.floor(R() * 3)], x, top, z, { s: 1.15, ry: R() * 6, tint: o.bushTint }); }
      else if (o.flowerList && pl.ok(x, z, .14, .2)) { pl.take(x, z, .14); for (let f = 0; f < 3; f++) await put(sc, o.flowerList[Math.floor(R() * o.flowerList.length)], x + (R() - .5) * .3, top, z + (R() - .5) * .3, { s: 1.3, ry: R() * 6 }); } } }
  // arbres, sobretot a les vores
  for (let i = 0, k = 0; i < o.trees && k < 900; k++) { const h = 1.35, q = pl.find(.32, h, { tries: 1 }); if (!q) continue; if (edgeK(q[0], q[1]) < (o.edge ?? .5) && R() < .75) { pl.occ.pop(); continue; } await put(sc, o.treeList[Math.floor(R() * o.treeList.length)], q[0], top, q[1], { s: .85 + R() * .35, ry: R() * 6, tint: o.treeTint && o.treeTint(R) }); i++; }
  for (let i = 0; i < (o.bushes || 0); i++) { const q = pl.find(.28, .4); if (!q) break; await put(sc, ['plant_bushLarge', 'plant_bushDetailed', 'plant_bush'][Math.floor(R() * 3)], q[0], top, q[1], { s: 1.25, ry: R() * 6, tint: o.bushTint }); }
  for (let i = 0; i < (o.flowers || 0); i++) { const q = pl.find(.3, .2); if (!q) break; for (let f = 0; f < 5; f++) await put(sc, o.flowerList[Math.floor(R() * o.flowerList.length)], q[0] + (R() - .5) * .55, top, q[1] + (R() - .5) * .55, { s: 1.3, ry: R() * 6 }); }
  for (let i = 0; i < (o.grass || 0); i++) { const [x, z] = X.cells[Math.floor(R() * X.cells.length)], px = x + (R() - .5) * .9, pz = z + (R() - .5) * .9; if (pl.ok(px, pz, .08, .1)) await put(sc, R() < .7 ? 'grass' : 'grass_leafs', px, top, pz, { s: 1.15, ry: R() * 6, tint: o.grassTint }); }
}
// la vora de la platja (per a palmeres, roques i coses de la sorra)
function beachSpots(X, n, pred) { const { R, edge } = X, out = []; for (let t = 0; t < 400 && out.length < n; t++) { const [x, z] = edge[Math.floor(R() * edge.length)], d = Math.hypot(x, z) || 1, bx = x + x / d * (1.0 + R() * .25), bz = z + z / d * (1.0 + R() * .25); if (pred && !pred(bx, bz)) continue; if (out.some(([a, b]) => Math.hypot(a - bx, b - bz) < .9)) continue; out.push([bx, bz]); } return out; }

async function decorTropic(X) {
  const { sc, R, pl, top, theme } = X, T = THEMES[theme] || THEMES.algo;
  // la fita de la unitat, al racó del fons que queda lliure (far, molí, observatori, paller, trofeu…)
  const sideX = X.P[0].x > 0 ? 1 : -1, back = [-sideX * 2.7, -4.25], HERO = { algo: 'maze', loop: 'windmill', llum: 'lighthouse', sensor: 'observatory', ciutat: 'lighthouse', fruita: 'barn', cova: 'cave', trofeu: 'trophy' }[theme] || 'lighthouse';
  if (HERO === 'lighthouse') { const q = pl.best(.45, 1.9, { at: back }); if (q) lighthouse(sc, q[0], top, q[1], 1); }
  if (HERO === 'windmill') { const q = pl.best(.55, 2.0, { at: back }); if (q) windmill(sc, q[0], top, q[1], -sideX * .35, 1.3); }
  if (HERO === 'observatory') { const q = pl.best(.62, 1.5, { at: back }); if (q) observatory(sc, q[0], top, q[1], -sideX * .3, 1.35); }
  if (HERO === 'barn') { const q = pl.best(.78, 1.2, { at: back }); if (q) barn(sc, q[0], top, q[1], -sideX * .3, 1.2); }
  if (HERO === 'trophy') { const q = pl.best(.5, 1.6, { at: back }); if (q) trophy(sc, q[0], top, q[1], 0, 1.35); }
  if (HERO === 'cave') { const q = pl.best(.6, 1.1, { at: back }); if (q) { await put(sc, 'cliff_cave_rock', q[0], top, q[1], { s: 1.5, ry: -sideX * .4 }); for (let i = 0; i < 5; i++) await put(sc, 'mushroom_redGroup', q[0] + (R() - .5) * 1.3, top, q[1] + .55 + R() * .3, { s: 1.6, ry: R() * 6 }); } }
  if (HERO === 'maze') { const q = pl.best(1.0, .35, { at: [sideX * 2.7, -1.1], m: .8 }); if (q) await hedgeMaze(sc, q[0], top, q[1], .15); const q2 = pl.best(.42, 1.9, { at: back }); if (q2) lighthouse(sc, q2[0], top, q2[1], .9); }
  // peces del tema
  const nb = T.city ? 4 : 5;
  for (let i = 0; i < nb; i++) { const pr = T.props[i % T.props.length], big = pr.startsWith('city/'), q = pl.find(big ? .55 : .4, big ? 1.0 : .8); if (!q) break; await put(sc, pr, q[0], top, q[1], { ry: Math.round(R() * 4) * Math.PI / 2, s: big ? .85 : pr.startsWith('crops') || pr.startsWith('crop_') ? 1.2 : 1.05 }); }
  if (T.rows) for (let i = 0; i < 2; i++) { const q = pl.find(.62, .5); if (!q) break; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b += 2) await put(sc, T.props[(a + 1) % 3], q[0] + a * .28, top, q[1] + b * .2, { s: .9 }); }
  if (T.glow) { const q = pl.find(.4, .3); if (q) { await put(sc, 'campfire_logs', q[0], top, q[1], { s: 1.2 }); pool(sc, q[0], top + .015, q[1], 1.0, '#FFB45A', .55); halo(sc, q[0], top + .2, q[1], .8, '#FF9A3A', .9); } }
  // un estanyol amb nenúfars i pedres al voltant
  { const q = pl.find(.6, .1, { tries: 600 }); if (q) { const g = grp(sc, q[0], top, q[1], R() * 6);
    mesh(new THREE.CircleGeometry(.5, 40), sm('#48C6E6', { roughness: .08, metalness: .1 }), [0, .02, 0], g, { r: [-Math.PI / 2, 0, 0], s: [1, .75, 1], ground: 1 });
    mesh(new THREE.RingGeometry(.48, .58, 40), sm('#D8C7A0', { roughness: 1 }), [0, .016, 0], g, { r: [-Math.PI / 2, 0, 0], s: [1, .75, 1], ground: 1 });
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2 + R() * .3; await put(g, ['stone_smallA', 'stone_smallC', 'stone_smallE'][i % 3], Math.cos(a) * .58, 0, Math.sin(a) * .58 * .75, { s: .9, ry: R() * 6 }); }
    await put(g, 'lily_large', -.15, .02, .05, { s: 1.4 }); await put(g, 'lily_small', .2, .02, -.1, { s: 1.4 }); } }
  // bolets i flors de joguina
  for (let i = 0; i < 5; i++) { const q = pl.find(.22, .3); if (!q) break; await put(sc, ['mushroom_redGroup', 'mushroom_redTall', 'mushroom_tanGroup', 'mushroom_red', 'mushroom_redGroup'][i], q[0], top, q[1], { s: 1.9, ry: R() * 6 }); }
  await scatterNature(X, { clusters: 5, trees: 6, treeList: T.trees, bushes: 5, flowers: 10, grass: 50, flowerList: ['flower_redA', 'flower_yellowB', 'flower_purpleA', 'flower_redC', 'flower_yellowA', 'flower_purpleC', 'grass_large'] });
  // platja: palmeres, roques, para-sols, castell de sorra, el moll amb la canoa i un veler a la llacuna
  const ps = X.seed % 2 ? 1 : -1, bs = beachSpots(X, 9, (x, z) => !(z > 3.6 && x * ps > 1.2) && z > -4.5);
  for (const [i, [bx, bz]] of bs.entries()) await put(sc, i < 5 ? ['tree_palmTall', 'tree_palmBend', 'tree_palmDetailedTall', 'tree_palmShort', 'tree_palmBend'][i] : ['stone_largeA', 'stone_smallC', 'stone_largeC', 'stone_smallE'][i - 5], bx, .24, bz, { s: i < 5 ? 1.35 : .9, ry: R() * 6, tint: { stone: '#CDBEA2', stoneDark: '#AE9C7E' } });
  umbrella(sc, -1.6 * ps, .24, 5.75, '#FF6B6B', '#FFFFFF', .3); umbrella(sc, -.3 * ps, .24, 6.05, '#3D8BFF', '#FFFFFF', -.4);
  sandcastle(sc, 1.05 * ps, .24, 5.95, 1.1);
  pier(sc, 3.55 * ps, .0, 4.95, -2.35 * ps, 2.6);
  await put(sc, 'canoe', 4.15 * ps, .05, 6.15, { ry: -.8 * ps, s: 1.4 });
  sailboat(sc, -2.9 * ps, 7.9, -1.25, 1.05, ['#FF6B6B', '#3D8BFF', '#FFC531', '#3CC47C'][X.seed % 4]);
  await put(sc, 'lily_large', 4.9, .05, -4.6, { s: 1.6 }); await put(sc, 'lily_small', 5.3, .05, -4.2, { s: 1.6 });
}

async function decorLab(X) {
  const { sc, R, pl, top, theme, curve, pts, P } = X, N = pts.length - 1, FT = { wood: '#F1F2EF', woodDark: '#C9CED6', metal: '#C4CBD6', metalMedium: '#7D8798', metalDark: '#252C3C', carpet: '#E2574C', carpetDarker: '#B8443B', lamp: '#FFF2C6' };
  const F = (n, x, z, o = {}) => put(sc, 'furniture/' + n, x, o.y ?? top, z, { center: true, tint: FT, s: 1.5, ...o });
  // edificis moderns del laboratori, al fons a la dreta, i l'antena
  const zoneBR = (x, z) => x > .6 && z < -2.3;
  const b1 = pl.best(.78, 1.7, { at: [X.P[0].x > 0 ? -2.4 : 2.4, -4.0], zone: z => true }); void zoneBR; if (b1) building(sc, R, b1[0], top, b1[1], { w: 1.35, d: .95, h: 1.25, ry: -.12, accent: '#E2574C', solar: true });
  const b2 = pl.find(.6, 1.3, { zone: (x, z) => z < -2.0 && (x > .4 || x < -2.6), tries: 800 }); if (b2) building(sc, R, b2[0], top, b2[1], { w: .9, d: .8, h: .8, ry: .1, antenna: true });
  const mq = pl.find(.3, 2.0, { zone: (x, z) => z < -2.2, tries: 800 }); if (mq) mast(sc, mq[0], top, mq[1], 1.75, { dish: true });
  // la prova de la unitat
  const sideX = X.P[0].x > 0 ? 1 : -1, FB0 = { wood: '#CF9F66', woodDark: '#A9784A' }, midL = [sideX * 2.8, -1.1], midR = [-sideX * 2.8, 1.4];
  if (theme === 'loop') { const q = pl.best(1.05, .3, { at: midL, m: .75 }); if (q) ovalTrack(sc, q[0], top, q[1], .2, R); }
  if (theme === 'algo') { const q = pl.best(.85, .5, { at: midR, m: .55 }); if (q) await conveyor(sc, q[0], top, q[1], -.5, FB0); }
  if (theme === 'llum') { const q = pl.best(.85, .4, { at: midL, m: .6 }); if (q) solarField(sc, q[0], top, q[1], .25); }
  if (theme === 'trofeu') { const q = pl.best(.42, 1.3, { at: midL }); if (q) trophy(sc, q[0], top, q[1], 0, 1.0); }
  if (theme === 'cova') { const j = Math.round(N * .5), p = pts[j], tg = curve.getTangentAt(j / N); tunnel(sc, p.x, top, p.z, Math.atan2(-tg.z, tg.x)); pl.take(p.x, p.z, .6); }
  if (theme === 'sensor') { const q = pl.best(.75, .4, { at: midL, m: .5 }); if (q) { const g = grp(sc, q[0], top, q[1], .3); for (let i = 0; i < 5; i++) tcone(g, (i - 2) * .32, 0, (i % 2 - .5) * .25, 1.3); for (let i = 0; i < 3; i++) await put(g, 'furniture/cardboardBoxClosed', (i - 1) * .3, 0, .55, { center: true, tint: FB0, s: 1.5 }); } }
  // estacions de treball: taula amb pantalla o portàtil, cadira i llum
  const station = async (x, z, ry, laptop) => { const g = grp(sc, x, top, z, ry);
    mesh(new THREE.PlaneGeometry(1.45, 1.2), sm('#4F7FC8', { roughness: .7 }), [0, .004, .2], g, { r: [-Math.PI / 2, 0, 0], cast: false, ground: 1 });
    await put(g, 'furniture/desk', 0, 0, 0, { center: true, tint: FT, s: 1.5 }); await put(g, 'furniture/' + (laptop ? 'laptop' : 'computerScreen'), laptop ? -.1 : 0, .57, laptop ? .02 : -.08, { center: true, tint: FT, s: 1.5 });
    mesh(new THREE.PlaneGeometry(laptop ? .3 : .5, laptop ? .18 : .3), glow('#8FD8FF', 1.25), laptop ? [-.1, .72, -.12] : [0, .82, -.07], g, { cast: false, r: laptop ? [-.25, 0, 0] : [0, 0, 0] });
    await put(g, 'furniture/chairDesk', .05, 0, .5, { center: true, tint: FT, s: 1.5, ry: Math.PI }); if (!laptop) await put(g, 'furniture/lampRoundTable', .38, .57, -.08, { center: true, tint: FT, s: 1.5 }); };
  const s1 = pl.find(.62, .9, { zone: (x, z) => x < -.8 && z > -3 && z < .8, tries: 800 }); if (s1) await station(s1[0], s1[1], .25, false);
  const s2 = pl.find(.62, .9, { zone: (x, z) => x > .8 && z > -.6 && z < 3, tries: 800 }); if (s2) await station(s2[0], s2[1], -.3, true);
  // braç robot sobre la seva base
  if (theme !== 'ciutat') { const ra = pl.find(.42, 1.0, { tries: 800, zone: (x, z) => z < 2.5 }); if (ra) robotArm(sc, ra[0], top, ra[1], R() * 6, '#F08A24'); }
  // cons i caixes de cartró al costat de la pista; una caixa damunt la pista fa d'obstacle
  for (let i = 0; i < 16; i++) { const t = .12 + R() * .76, j = Math.round(t * N), p = pts[j], tg = curve.getTangentAt(j / N), s = R() < .5 ? -1 : 1, x = p.x - tg.z * .66 * s, z = p.z + tg.x * .66 * s;
    if (pl.ok(x, z, .1, .3, { m: .05 })) { tcone(sc, x, top, z, 1.45); pl.take(x, z, .25); } }
  if (theme !== 'cova') { const j = Math.round(N * .52), p = pts[j], tg = curve.getTangentAt(j / N); await put(sc, 'furniture/cardboardBoxClosed', p.x, top + .012, p.z, { center: true, tint: { wood: '#CF9F66', woodDark: '#A9784A' }, s: 1.5, ry: Math.atan2(tg.x, tg.z) + .3 }); }
  const FB = { wood: '#CF9F66', woodDark: '#A9784A' };
  for (let i = 0; i < 3; i++) { const q = pl.find(.22, .45); if (!q) break; const n = 1 + Math.floor(R() * 3); for (let k = 0; k < n; k++) await F(k === 2 ? 'cardboardBoxOpen' : 'cardboardBoxClosed', q[0] + (k === 1 ? .32 : 0), q[1] + (k === 1 ? .08 : 0), { y: top + (k === 2 ? .42 : 0), ry: R() * 2, s: 1.45, tint: FB }); }
  // els robots Maqueen a la pista, mirant cap a la parada següent
  const botAt = (t, led) => { const j = Math.round(t * N), p = pts[j], tg = curve.getTangentAt(j / N); maqueen(sc, p.x, top + .02, p.z, Math.atan2(-tg.x, -tg.z), led, .062); };
  botAt(.25, '01010 11111 11111 01110 00100'); botAt(.415, '00000 01010 00000 10001 01110'); if (P.length > 3) botAt(.79, '00100 01110 11111 00100 00100');
  // llums de peu, altaveus, testos i jardineres
  for (let i = 0; i < 3; i++) { const q = pl.find(.15, 1.0); if (!q) break; lampPost(sc, q[0], top, q[1], '#EAF6FF', { modern: true, k: 2.2, pool: 0, h: .95, pole: '#5B6472' }); }
  // el dron sobre la seva plataforma
  { const q = pl.find(.42, 1.1, { tries: 800 }); if (q) { const pd = ctex(128, 128, (g, w) => { g.fillStyle = '#2F3644'; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 2, 0, 7); g.fill(); g.strokeStyle = '#F2C230'; g.lineWidth = 6; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 12, 0, 7); g.stroke(); g.fillStyle = '#FFFFFF'; g.font = '900 64px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('H', w / 2, w / 2 + 4); });
    mesh(new THREE.CircleGeometry(.4, 40), new THREE.MeshStandardMaterial({ map: pd, roughness: .6, transparent: true }), [q[0], top + .01, q[1]], sc, { r: [-Math.PI / 2, 0, 0], cast: false, ground: 1 }).userData.noAO = 1;
    drone(sc, q[0], top + .95, q[1], R() * 6).scale.setScalar(1.5); } }
  for (let i = 0; i < 3; i++) { const q = pl.find(.22, .4); if (!q) break; await put(sc, 'city/planter', q[0], top, q[1], { s: 1.0 }); }
  if (theme === 'cova') for (let i = 0; i < 4; i++) { const q = pl.find(.3, .5); if (!q) break; await put(sc, ['stone_largeA', 'stone_tallC', 'stone_largeB'][i % 3], q[0], top, q[1], { s: .9, ry: R() * 6, tint: { stone: '#8C939E', stoneDark: '#6A717C' } }); }
  if (theme === 'ciutat') for (let i = 0; i < 3; i++) { const q = pl.find(.5, 1.0); if (!q) break; building(sc, R, q[0], top, q[1], { w: .7, d: .7, h: .5 + R() * .5, ry: R() * .4, accent: i % 2 ? '#2EA8F0' : null }); }
  if (theme === 'trofeu') { const q = pl.find(.4, .8); if (q) { const g = grp(sc, q[0], top, q[1]); [[0, .3, '#E4AE46'], [-.3, .2, '#C9D1DC'], [.3, .13, '#C98A4E']].forEach(([x, h, c]) => { mesh(new THREE.BoxGeometry(.3, h, .3), sm('#F4F6F8'), [x, h / 2, 0], g); mesh(new THREE.CylinderGeometry(.06, .04, .14, 12), sm(c, { metalness: .7, roughness: .3 }), [x, h + .07, 0], g); }); } }
  // pins foscos i arbustos (pocs: és un lloc net)
  await scatterNature(X, { trees: 8, edge: .55, treeList: ['tree_pineTallA_detailed', 'tree_pineRoundC', 'tree_cone_dark', 'tree_pineTallB_detailed', 'tree_pineRoundE'], bushes: 0, grass: 10, grassTint: { grass: '#6E9C5A', leafsGreen: '#5E8F52' } });
  // costa: escullera de roques fosques, una boia i un moll de formigó amb noray
  const bs = beachSpots(X, 9, (x, z) => z > -4.6);
  for (const [i, [bx, bz]] of bs.entries()) await put(sc, ['stone_largeA', 'stone_largeC', 'stone_largeE', 'stone_smallC'][i % 4], bx, .2, bz, { s: .85 + R() * .4, ry: R() * 6, tint: { stone: '#7F8692', stoneDark: '#5F6672' } });
  const pg = grp(sc, 3.75, 0, 5.0, -2.35); mesh(new THREE.BoxGeometry(.75, .16, 2.4), sm('#8F96A1', { roughness: .85 }), [0, .26, -1.2], pg); for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(.05, .012, 2.4), sm('#F2C230'), [s * .33, .345, -1.2], pg, { cast: false }); for (const z of [-.5, -1.5, -2.25]) for (const s of [-1, 1]) mesh(new THREE.CylinderGeometry(.04, .05, .12, 8), sm('#2E333D'), [s * .27, .4, z], pg);
  const by = grp(sc, -5.7, 0, 2.9); mesh(new THREE.CylinderGeometry(.13, .16, .26, 12), sm('#E8483F', { roughness: .4 }), [0, .1, 0], by); mesh(new THREE.CylinderGeometry(.135, .135, .07, 12), sm('#FFFFFF'), [0, .14, 0], by); mesh(new THREE.ConeGeometry(.06, .2, 8), sm('#2E333D'), [0, .33, 0], by); mesh(new THREE.SphereGeometry(.03, 8, 6), glow('#FFE07A', 3), [0, .45, 0], by, { cast: false });
}

async function decorTeatre(X) {
  const { sc, R, pl, top, theme, curve, pts, P } = X, N = pts.length - 1;
  const TC = [['#E84A5F', '#FFF6E8'], ['#F2A23A', '#7A3FB0'], ['#2FB5A6', '#FFF6E8'], ['#7A3FB0', '#FFD15C']], sideX = X.P[0].x > 0 ? 1 : -1;
  // l'escenari amb teló, al fons, mirant cap al centre
  let stageAt = null, sk = .95; for (const k of [.95, .85, .75]) { const sg = pl.best(1.2 * k, 2.1 * k, { at: [X.P[0].x > 0 ? -2.3 : 2.3, -3.9], m: .62 * k, zone: (x, z) => z < -1.8 }); if (sg) { stageAt = sg; sk = k; break; } }
  if (stageAt) stage(sc, stageAt[0], top, stageAt[1], -Math.sign(stageAt[0]) * .32, sk);
  // la fita de la unitat: cavallets, titelles, sínia, paller, ombres xineses o trofeu
  if (theme === 'loop') { const q = pl.best(.85, 1.5, { at: [-sideX * 2.9, 1.5] }); if (q) carousel(sc, q[0], top, q[1], 0, .95); }
  if (theme === 'algo') { const q = pl.best(.45, 1.25, { at: [sideX * 3.0, -1.2] }); if (q) puppetBooth(sc, q[0], top, q[1], -sideX * .4, 1.1); }
  if (theme === 'sensor') { const q = pl.best(.95, 2.0, { at: [sideX * 2.5, -4.3], m: .5 }) || pl.best(.75, 1.6, { at: [-sideX * 3.0, 1.4], m: .5 }); if (q) ferris(sc, q[0], top, q[1], .15, q[1] < -3 ? .95 : .85); }
  if (theme === 'fruita') { const q = pl.best(.7, 1.0, { at: [sideX * 2.9, -1.2] }); if (q) barn(sc, q[0], top, q[1], -sideX * .4, 1.05); }
  if (theme === 'trofeu') { const q = pl.best(.42, 1.3, { at: [-sideX * 3.0, 1.4] }); if (q) trophy(sc, q[0], top, q[1], 0, 1.1); }
  if (theme === 'cova') { const q = pl.best(.55, 1.2, { at: [sideX * 3.0, -1.2] }); if (q) { const g = grp(sc, q[0], top, q[1], -sideX * .4), fr = sm('#5A2E22'); for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.06, 1.0, .06), fr, [sx * .45, .5, 0], g); mesh(new THREE.BoxGeometry(.96, .06, .06), fr, [0, 1.0, 0], g);
    mesh(new THREE.PlaneGeometry(.84, .62), glow('#FFE2B0', 1.4), [0, .62, 0], g, { cast: false }); const sil = sm('#1A1012'); mesh(new THREE.CircleGeometry(.09, 16), sil, [-.15, .7, .01], g); mesh(new THREE.ConeGeometry(.12, .3, 3), sil, [-.15, .5, .01], g); mesh(new THREE.CircleGeometry(.07, 16), sil, [.2, .78, .01], g); mesh(new THREE.ConeGeometry(.09, .22, 3), sil, [.2, .58, .01], g, { r: [0, 0, .3] }); } }
  if (theme === 'ciutat') { const HS = ['city/building-type-c', 'city/building-type-h', 'city/building-type-e']; for (const [k, at] of [[sideX * 3.0, -1.1], [-sideX * 3.1, 1.3]].entries()) { const q = pl.best(.55, .9, { at }); if (q) await put(sc, HS[k], q[0], top, q[1], { s: .85, ry: Math.atan2(-q[0], 2 - q[1]) }); } }
  // carpes de circ de colors
  const nt = theme === 'llum' ? 3 : theme === 'ciutat' ? 1 : 2;
  const TA = [[3.1 * sideX, -1.2], [-3.2 * sideX, 1.4], [.2, 4.4]];
  for (let i = 0; i < nt; i++) { const s = i ? .85 : 1.05, q = pl.best(.62 * s, 1.35 * s, { at: TA[i] }); if (!q) continue; const [a, b] = TC[(i + X.seed) % TC.length]; tent(sc, q[0], top, q[1], s, a, b, R() * 6); }
  // la càmera de cinema i un focus que il·lumina l'escenari
  if (stageAt) { const st = new THREE.Vector3(stageAt[0], top + .5, stageAt[1]);
    const fc = pl.best(.3, .9, { at: [stageAt[0] + sideX * 1.9, stageAt[1] + .9] }); if (fc) filmCamera(sc, fc[0], top, fc[1], Math.atan2(st.x - fc[0], st.z - fc[1]), 1.1);
    const sp = pl.best(.25, 1.2, { at: [stageAt[0] - sideX * .3, stageAt[1] + 2.2] }); if (sp) spotlight(sc, sp[0], top, sp[1], st); }
  // a mig camí entre parades, dos fanals de llum càlida a banda i banda de la catifa amb una garlanda de banderetes que la travessa
  const lamps = [], BC = ['#E84A5F', '#FFD15C', '#2FB5A6', '#F08A24', '#7A3FB0', '#FFFFFF'];
  for (let i = 0; i + 1 < P.length; i++) { const mid = P[i].clone().lerp(P[i + 1], .5); let j = 0; pts.forEach((q, k) => { if (q.distanceTo(mid) < pts[j].distanceTo(mid)) j = k; });
    const p = pts[j], tg = curve.getTangentAt(j / N), L = [];
    for (const s of [-1, 1]) { const x = p.x - tg.z * .78 * s, z = p.z + tg.x * .78 * s; if (!pl.ok(x, z, .1, .95, { m: .05 })) continue; L.push(lampPost(sc, x, top, z, '#FFC97A', { k: 3.2, pool: .95, pk: .5 })); pl.take(x, z, .15); }
    lamps.push(...L); if (L.length === 2) bunting(sc, L[0], L[1], BC, .16); }
  if (stageAt) { const st = new THREE.Vector3(stageAt[0], top + 1.85, stageAt[1]); const near = lamps.slice().sort((a, b) => a.distanceTo(st) - b.distanceTo(st))[0]; if (near && near.distanceTo(st) < 3.6) bunting(sc, st, near, BC, .35); }
  // bancs mirant l'escenari
  if (stageAt) for (let i = 0; i < 3; i++) { const q = pl.find(.25, .5, { zone: (x, z) => Math.hypot(x - stageAt[0], z - stageAt[1]) < 2.6 && z > stageAt[1] + .6 }); if (!q) break; bench(sc, q[0], top, q[1], Math.atan2(stageAt[0] - q[0], stageAt[1] - q[1])); }
  // carbasses i espantaocells si és de collita; caixes de regal si és de trofeu
  if (theme === 'fruita') for (let i = 0; i < 5; i++) { const q = pl.find(.2, .3); if (!q) break; await put(sc, 'crop_pumpkin', q[0], top, q[1], { s: 1.4, ry: R() * 6 }); }
  if (theme === 'trofeu' || theme === 'ciutat') for (let i = 0; i < 4; i++) { const q = pl.find(.18, .3); if (!q) break; const g = grp(sc, q[0], top, q[1], R() * 3), c = BC[i % 5]; mesh(new THREE.BoxGeometry(.22, .2, .22), sm(c, { roughness: .5 }), [0, .1, 0], g); mesh(new THREE.BoxGeometry(.235, .04, .05), sm('#FFE9B0'), [0, .1, 0], g); mesh(new THREE.BoxGeometry(.05, .205, .235), sm('#FFE9B0'), [0, .1, 0], g); }
  // arbres de tardor
  const AU = ['#E3A040', '#D27A35', '#BF5A35', '#E8BE55', '#A9452F', '#E3A040'];
  await scatterNature(X, { trees: 13, treeList: ['tree_oak_fall', 'tree_fat_fall', 'tree_default_fall', 'tree_detailed_fall', 'tree_cone_fall', 'tree_oak', 'tree_fat_fall'], treeTint: R => ({ leafsFall: AU[Math.floor(R() * AU.length)] }), bushes: 6, bushTint: { leafsGreen: '#B0732E' }, flowers: 6, grass: 34, flowerList: ['flower_yellowA', 'flower_redA', 'flower_yellowC', 'flower_redB', 'grass_large'], grassTint: { grass: '#9DB24A' } });
  // platja: barqueta, roques i fanalets a la sorra
  const bs = beachSpots(X, 8, (x, z) => z > -4.4);
  for (const [i, [bx, bz]] of bs.entries()) { if (i < 3) { const g = grp(sc, bx, .24, bz); mesh(new THREE.CylinderGeometry(.012, .012, .45, 6), sm('#3B2D25'), [0, .22, 0], g); mesh(new THREE.SphereGeometry(.05, 10, 8), glow('#FFC97A', 3), [0, .47, 0], g, { cast: false }); halo(g, 0, .47, 0, .4, '#FFB45A', .8); pool(sc, bx, .25, bz, .55, '#FFB45A', .35); }
    else await put(sc, ['stone_largeA', 'stone_smallC', 'stone_largeC', 'stone_largeE', 'stone_smallE'][i % 5], bx, .24, bz, { s: .9, ry: R() * 6, tint: { stone: '#D9BFA6', stoneDark: '#B39478' } }); }
  await put(sc, 'canoe', 5.0, .05, 4.3, { ry: .75, s: 1.4, tint: { leafsFall: '#C9462E' } });
  sailboat(sc, -5.8, 3.4, .45, 1.0, '#7A3FB0');
}

async function decorCiutat(X) {
  const { sc, R, pl, top, theme, curve, pts, P, color } = X, N = pts.length - 1, roofs = [];
  // gratacels al fons (alts) i edificis mitjans als costats, amb finestres enceses
  const LED = ['#35E0FF', null, '#B07CFF', null, '#3CC47C'];
  const any = () => true, towers = [[.7, 1.75, (x, z) => x > .5 && z < -2.6], [.62, 1.55, (x, z) => x > .3 && z < -2.2], [.6, 1.35, (x, z) => z < -2.2], [.55, 1.0, (x, z) => z < -1], [.55, .9, (x, z) => x > 1 && z < 1.5], [.5, .7, any], [.5, .6, any], [.46, .5, any], [.46, .42, any]];
  for (const [i, [w, h, zone]] of towers.entries()) { const q = i ? pl.find(w * .75, h, { zone, tries: 900, path: h > 1.2 }) : pl.best(w * .75, h, { at: [X.P[0].x > 0 ? -2.4 : 2.4, -4.1], path: true }); if (!q) continue; const b = building(sc, R, q[0], top, q[1], { w, d: w * (.8 + R() * .3), h, ry: (R() - .5) * .5, night: true, led: LED[(i + X.seed) % LED.length], antenna: i < 2 }); roofs.push(b.top); }
  // centre de dades (unitat de la llum): nau baixa amb fileres de llumetes de servidors
  if (theme === 'llum') { const sideX = X.P[0].x > 0 ? 1 : -1, q = pl.best(.8, .6, { at: [sideX * 2.9, -1.1], m: .55 }); if (q) { const g = grp(sc, q[0], top, q[1], sideX * -.25), body = sm('#2A3352', { roughness: .5 });
    mesh(new THREE.BoxGeometry(1.3, .42, .75), body, [0, .21, 0], g); mesh(new THREE.BoxGeometry(1.34, .04, .79), sm('#3B4466'), [0, .44, 0], g);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) mesh(new THREE.BoxGeometry(.06, .025, .01), glow(R() < .7 ? '#35E0FF' : R() < .5 ? '#3CC47C' : '#FF5A8A', 2.2), [-.52 + c * .13, .1 + r * .1, .38], g, { cast: false });
    for (let i = 0; i < 3; i++) { mesh(new THREE.CylinderGeometry(.09, .09, .06, 14), sm('#5B6584', { metalness: .5 }), [-.4 + i * .4, .49, 0], g); mesh(new THREE.CircleGeometry(.07, 14), sm('#1B2034'), [-.4 + i * .4, .521, 0], g, { r: [-Math.PI / 2, 0, 0] }); }
    roofs.push(new THREE.Vector3(q[0], top + .5, q[1])); } }
  // cases baixes de la ciutat amb llum a les finestres
  const houses = ['city/building-type-a', 'city/building-type-e', 'city/building-type-k', 'city/building-type-h', 'city/building-type-c'];
  for (let i = 0; i < 3; i++) { const q = pl.find(.55, .9, { tries: 500 }); if (!q) break; const hm = await put(sc, houses[(i + X.seed) % houses.length], q[0], top, q[1], { s: .8, ry: Math.round(R() * 4) * Math.PI / 2 }); hm.traverse(m => { if (m.isMesh) m.material = nightKit(m.material); }); roofs.push(new THREE.Vector3(q[0], top + .9, q[1])); }
  // antena de comunicacions i parabòlica
  const mq = pl.find(.3, 2.0, { zone: (x, z) => z < -1.8, tries: 800 }); if (mq) roofs.push(mast(sc, mq[0], top, mq[1], 1.8, { col: '#C9D3E8', col2: '#FF5A5A' }));
  const dq = pl.find(.35, .9, { tries: 500 }); if (dq) dish(sc, dq[0], top, dq[1], R() * 6, .9);
  // xarxa: arcs de llum entre les teulades
  const arcM = glow('#35E0FF', 2.2), pk = glow('#E8FDFF', 3);
  const pairs = []; for (let i = 0; i < roofs.length; i++) for (let j = i + 1; j < roofs.length; j++) { const d = roofs[i].distanceTo(roofs[j]); if (d > 1.0 && d < 3.6) pairs.push([d, i, j]); }
  pairs.sort((a, b) => a[0] - b[0]); const used = {};
  for (const [d, i, j] of pairs) { if ((used[i] || 0) > 1 || (used[j] || 0) > 1) continue; const a = roofs[i], b = roofs[j], m = a.clone().lerp(b, .5); m.y = Math.max(a.y, b.y) + d * .22;
    const cv = new THREE.QuadraticBezierCurve3(a, m, b); if ([.1, .2, .3, .4, .5, .6, .7, .8, .9].some(t => { const p = cv.getPoint(t); return P.some(s => Math.hypot(s.x - p.x, s.z - p.z) < 1.4) || pts.some(q => Math.hypot(q.x - p.x, q.z - p.z) < .5); })) continue;
    mesh(new THREE.TubeGeometry(cv, 40, .011, 5), arcM, null, sc, { cast: false }); for (const t of [.33, .7]) { const p = cv.getPoint(t); mesh(new THREE.SphereGeometry(.032, 8, 6), pk, [p.x, p.y, p.z], sc, { cast: false }); }
    used[i] = (used[i] || 0) + 1; used[j] = (used[j] || 0) + 1; }
  // fanals moderns al llarg de la carretera de dades
  for (let i = 0; i < 9; i++) { const t = .08 + i * .105, j = Math.round(t * N), p = pts[j], tg = curve.getTangentAt(j / N), s = i % 2 ? 1 : -1, x = p.x - tg.z * .7 * s, z = p.z + tg.x * .7 * s;
    if (pl.ok(x, z, .1, .9, { m: .05 })) { lampPost(sc, x, top, z, '#DFF6FF', { modern: true, k: 3, pool: .8, pk: .35, h: .85 }); pl.take(x, z, .15); } }
  // icones flotants: la ciutadania digital (amistat, privadesa, seguretat…)
  const IC = theme === 'llum' ? ['shield', 'star', 'cloud'] : ['heart', 'chat', 'lock'], ICC = ['#35E0FF', '#3CC47C', '#B07CFF'];
  const icoAt = [[-3.2, -3.2], [3.4, 1.6], [-3.4, 3.0], [3.2, -3.5], [-.2, -4.6]];
  let ni = 0; for (const [x, z] of icoAt) { if (ni >= 3) break; if (P.some(s => Math.hypot(s.x - x, s.z - z) < 1.7)) continue; iconSprite(sc, x, top + 1.55 + (ni % 2) * .25, z, IC[ni], ICC[ni], .78); mesh(new THREE.CylinderGeometry(.006, .006, 1.3, 4), glow(ICC[ni], 1.4), [x, top + .65, z], sc, { cast: false }); ni++; }
  // arbres foscos i jardineres, pocs
  await scatterNature(X, { trees: 4, edge: .55, treeList: ['tree_default_dark', 'tree_oak_dark', 'tree_detailed_dark', 'tree_cone_dark', 'tree_pineRoundC'], bushes: 2, bushTint: { leafsGreen: '#2C6B5E' }, grass: 14, grassTint: { grass: '#3B6B5E', leafsGreen: '#2F5F55' } });
  for (let i = 0; i < 6; i++) { const q = pl.find(.08, .2); if (!q) break; const g = grp(sc, q[0], top, q[1]); mesh(new THREE.CylinderGeometry(.03, .035, .16, 8), sm('#2A3048'), [0, .08, 0], g); mesh(new THREE.CylinderGeometry(.031, .031, .03, 8), glow(i % 2 ? '#35E0FF' : color, 2.2), [0, .15, 0], g, { cast: false }); }
  // costa: línia de llum cian, roques fosques i un moll amb llumetes
  const bs = beachSpots(X, 7, (x, z) => z > -4.4);
  for (const [i, [bx, bz]] of bs.entries()) await put(sc, ['stone_largeA', 'stone_largeC', 'stone_largeE'][i % 3], bx, .2, bz, { s: .85 + R() * .3, ry: R() * 6 });
  const pg = grp(sc, 3.75, 0, 5.0, -2.35); mesh(new THREE.BoxGeometry(.7, .14, 2.4), sm('#2A3150', { roughness: .6 }), [0, .25, -1.2], pg); for (let z = 0; z < 2.4; z += .6) for (const s of [-1, 1]) { mesh(new THREE.SphereGeometry(.03, 8, 6), glow(s > 0 ? '#35E0FF' : '#FFD08A', 3), [s * .32, .35, -z], pg, { cast: false }); }
  sailboat(sc, -5.8, 3.4, .45, 1.0, '#35E0FF', '#C9D3EA');
}
// les cases del City Kit de nit: finestres (cel·les blau clar del colormap) que brillen
let NIGHTMAP = null;
function nightKit(m) {
  if (!m.map) return m;
  if (!NIGHTMAP) { const img = m.map.image, c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const g = c.getContext('2d'); g.drawImage(img, 0, 0); const d = g.getImageData(0, 0, c.width, c.height), p = d.data;
    for (let i = 0; i < p.length; i += 4) { const r = p[i], gg = p[i + 1], b = p[i + 2], win = b > 200 && r > 150 && r < 225 && gg > 190 && b > r + 15; if (win) { p[i] = 255; p[i + 1] = 196; p[i + 2] = 120; } else { p[i] = p[i + 1] = p[i + 2] = 0; } }
    g.putImageData(d, 0, 0); NIGHTMAP = new THREE.CanvasTexture(c); NIGHTMAP.colorSpace = THREE.SRGBColorSpace; NIGHTMAP.flipY = m.map.flipY; }
  return new THREE.MeshStandardMaterial({ map: m.map, color: '#8A93B8', emissiveMap: NIGHTMAP, emissive: '#FFFFFF', emissiveIntensity: 1.8, roughness: .7 });
}
const DECOR = { tropic: decorTropic, lab: decorLab, teatre: decorTeatre, ciutat: decorCiutat };

/* ---------- l'illa d'una unitat ---------- */
export async function island({ n = 4, seed = 1, theme = 'algo', color = '#2F5BEA', W = 1080, H = 1350, world = 'tropic', q } = {}) {
  const WD = WORLDS[world] ? world : 'tropic', Wd = WORLDS[WD];
  WPAL = Wd.pal || null;
  const { r, sc, sun } = await setup(W, H, Wd.light); const R = rnd(seed * 7919 + 13);
  sc.background = new THREE.Color(Wd.bg); if (Wd.fog) sc.fog = new THREE.Fog(...Wd.fog);
  // caselles de l'altiplà: una el·lipse irregular de ~8×11
  const cells = [], key = (x, z) => x + ',' + z, isP = new Set();
  for (let z = -5; z <= 5; z++) for (let x = -4; x <= 4; x++) { const e = (x / 4.3) ** 2 + (z / 5.6) ** 2 + (R() - .5) * .22; if (e <= 1) { cells.push([x, z]); isP.add(key(x, z)); } }
  const edge = cells.filter(([x, z]) => !isP.has(key(x + 1, z)) || !isP.has(key(x - 1, z)) || !isP.has(key(x, z + 1)) || !isP.has(key(x, z - 1)));
  // platja (forma orgànica), escuma i mar
  slab(sc, blob(cells, 1.1, seed), .12, 1.6, null, { mat: new THREE.MeshStandardMaterial({ color: Wd.sand, roughness: .95 }), bs: .35 });
  if (Wd.foam) slab(sc, blob(cells, 1.55, seed + 1), -.02, .2, null, { mat: new THREE.MeshStandardMaterial({ color: Wd.foam[0], roughness: .4, transparent: true, opacity: Wd.foam[1] }), bs: .2, bt: .02 });
  sea(sc, 0, 0, 5.6, 6.8, Wd.sea);
  const wav = (pad, w, op, col = '#FFFFFF') => ringOf(sc, cells, pad, w, seed + 1, .085, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, depthWrite: false }));
  if (WD === 'tropic') { wav(2.15, .065, .42); wav(2.9, .055, .22); wav(3.8, .045, .1); glints(sc, R, 70, '#FFFFFF', 2.2, R => { const x = (R() - .5) * 20, z = (R() - .5) * 22; return edgeK(x / 1.5, z / 1.35) > 1.25 ? [x, z] : null; }); }
  if (WD === 'lab') { wav(2.3, .04, .14); glints(sc, R, 40, '#FFFFFF', 1.8, R => { const x = (R() - .5) * 20, z = (R() - .5) * 22; return edgeK(x / 1.5, z / 1.35) > 1.25 ? [x, z] : null; }); }
  if (WD === 'teatre') { glints(sc, R, 30, '#FFC46B', 2.0, R => { const t = R(), x = -3 - t * 5 + (R() - .5) * (2 + t * 3), z = -6.5 - t * 6 + (R() - .5) * (1.5 + t * 2); return edgeK(x / 1.5, z / 1.35) > 1.2 ? [x, z] : null; }, .9); }
  if (WD === 'ciutat') {
    ringOf(sc, cells, 1.0, .035, seed, .245, glow('#35E0FF', 1.2));
    const gt = ctex(2048, 2048, (g, w) => { g.fillStyle = '#000'; g.fillRect(0, 0, w, w); const u = w / 30; g.strokeStyle = '#FFFFFF'; g.lineWidth = 1.6; for (let i = 0; i <= 30; i++) { g.beginPath(); g.moveTo(i * u, 0); g.lineTo(i * u, w); g.stroke(); g.beginPath(); g.moveTo(0, i * u); g.lineTo(w, i * u); g.stroke(); }
      g.globalCompositeOperation = 'multiply'; const rg = g.createRadialGradient(w / 2, w / 2, w * .13, w / 2, w / 2, w * .37); rg.addColorStop(0, '#FFFFFF'); rg.addColorStop(1, '#000000'); g.fillStyle = rg; g.fillRect(0, 0, w, w); });
    mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshBasicMaterial({ map: gt, color: new THREE.Color('#35E0FF').multiplyScalar(.24), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }), [0, .08, 0], sc, { r: [-Math.PI / 2, 0, 0], cast: false });
    glints(sc, R, 60, '#9FEFFF', 2.0, R => { const x = (R() - .5) * 22, z = (R() - .5) * 24; return edgeK(x / 1.5, z / 1.35) > 1.25 ? [x, z] : null; });
  }
  // l'altiplà (dalt: herba, formigó, pissarra… segons el món)
  const Y = .12, top = Y + .95 + .07, psh = blob(cells, .5, seed + 2), ct = capTex(Wd.cap, rnd(seed * 13 + 7), psh);
  const capM = new THREE.MeshStandardMaterial({ map: ct.map, roughness: Wd.cap === 'concrete' ? .8 : Wd.cap === 'slate' ? .6 : .92, ...(ct.emi ? { emissiveMap: ct.emi, emissive: '#FFFFFF', emissiveIntensity: .9 } : {}) });
  plateau(sc, psh, Y, .95, seed, { bands: Wd.cliff, cap: capM, rough: WD === 'lab' ? .1 : .16 });
  if (WD === 'ciutat') ringOf(sc, cells, .44, .025, seed + 2, top + .004, glow('#35E0FF', 1.1));
  // parades: en zig-zag de dalt (lluny) a baix (a prop)
  const P = []; for (let i = 0; i < n; i++) { const t = n === 1 ? .5 : i / (n - 1); P.push(new THREE.Vector3((i % 2 ? 1 : -1) * (1.7 + R() * .3), 0, -3.9 + t * 7.8)); }
  const curve = new THREE.CatmullRomCurve3([P[0].clone().add(new THREE.Vector3(.5, 0, -.8)), ...P, P[n - 1].clone().add(new THREE.Vector3(-.5, 0, .9))], false, 'catmullrom', .5);
  const pts = curve.getSpacedPoints(260);
  const X = { sc, R, n, seed, theme, color, world: WD, cells, isP, key, edge, top, P, curve, pts, sun };
  await PATHS[WD](X);
  let ph = 0; for (const p of P) ph = STOPS[WD](X, p);
  X.pl = placer(X);
  // bandera de la unitat al cim (darrere de la primera parada)
  const fx = P[0].x * .2, fz = -5.2; X.pl.take(fx, fz, .3);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, 1.6, 10), sm(WD === 'tropic' || WD === 'teatre' ? '#5B4636' : '#C4CBD6', { roughness: .5, metalness: WD === 'lab' || WD === 'ciutat' ? .5 : 0 })); pole.position.set(fx, top + .8, fz); pole.castShadow = true; sc.add(pole);
  const cl = new THREE.PlaneGeometry(.7, .44, 12, 4); cl.translate(.35, 0, 0); { const p = cl.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 6) * .05); } cl.computeVertexNormals();
  const flag = new THREE.Mesh(cl, new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, roughness: .6, ...(WD === 'ciutat' ? { emissive: color, emissiveIntensity: .6 } : {}) })); flag.position.set(fx + .03, top + 1.35, fz); flag.castShadow = true; sc.add(flag);
  await DECOR[WD](X);
  // càmera 3/4
  const cam = new THREE.PerspectiveCamera(28, W / H, .1, 120); cam.position.set(0, 19.6, 21); cam.lookAt(0, .2, .6); cam.updateMatrixWorld();
  const nodes = P.map(p => { const v = new THREE.Vector3(p.x, top + ph, p.z).project(cam); return [+((v.x + 1) / 2 * 100).toFixed(2), +((1 - v.y) / 2 * 100).toFixed(2)]; });
  // comprovació: què es veu de cada parada des de la càmera (0 = res la tapa)
  sc.updateMatrixWorld(true); const rc = new THREE.Raycaster(); rc.camera = cam; const hid = P.map(p => { let b = 0; for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2, t = new THREE.Vector3(p.x + Math.cos(a) * 1.0, top + ph, p.z + Math.sin(a) * 1.0); rc.set(cam.position, t.clone().sub(cam.position).normalize());
    const hit = rc.intersectObjects(sc.children, true).find(h => h.object.isMesh && !(h.object.material && h.object.material.blending === THREE.AdditiveBlending) && !(h.object.material && h.object.material.transparent && h.object.material.depthWrite === false));
    if (hit && hit.distance < cam.position.distanceTo(t) - .05) { let o = hit.object, gnd = false; while (o) { if (o.userData.ground) gnd = true; o = o.parent; } if (!gnd) b++; } } return +(b / 12).toFixed(2); });
  const url = finish(r, sc, cam, W, H, { focus: cam.position.distanceTo(new THREE.Vector3(0, 1, .6)), aperture: .0003, maxblur: .003, q: q ?? .88, ...Wd.post });
  WPAL = null;
  return { url, nodes, hidden: hid };
}
/* ---------- fons de les històries (16:9), sense personatges: en Bit i en Numi s'hi posen a sobre ---------- */
function skyTex(top, bot) { const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, top); gr.addColorStop(1, bot); g.fillStyle = gr; g.fillRect(0, 0, 4, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
function cloud(sc, x, y, z, s, R) {
  const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: 1, flatShading: true, emissive: '#FFFFFF', emissiveIntensity: .25 });
  for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), m); b.position.set((i - 2) * .9, (i % 2) * .35 + (R() - .5) * .2, (R() - .5) * .4); b.scale.setScalar(.75 + (2 - Math.abs(i - 2)) * .3); g.add(b); }
  g.position.set(x, y, z); g.scale.set(s, s * .7, s * .8); sc.add(g);
}
// en Bit en 3D, amb plàstic brillant, saludant (per a les capçaleres)
function bitHero(sc, x, y, z, s, ry) {
  const b = makeBit(); b.ledGlow.removeFromParent(); b.carry.removeFromParent(); b.bit.position.set(x, y, z); b.bit.scale.setScalar(s); b.bit.rotation.y = ry;
  const gloss = {}; b.bit.traverse(o => { if (!o.isMesh || !o.material || o.material.emissiveIntensity > .5) return; const k = o.material.uuid; gloss[k] = gloss[k] || new THREE.MeshPhysicalMaterial({ color: o.material.color, roughness: Math.min(.45, o.material.roughness), metalness: o.material.metalness, clearcoat: 1, clearcoatRoughness: .15 }); o.material = gloss[k]; });
  b.arms[1].rotation.z = 1.95; b.arms[1].scale.setScalar(2); b.eyes.visible = false; b.joy.visible = true; b.head.rotation.z = -.08;
  sc.add(b.bit);
}
export async function scene(kind = 'illa', W = 1600, H = 900, o = {}) {
  const { r, sc, sun } = await setup(W, H), R = rnd(kind.length * 131 + 7);
  if (kind === 'taller') return taller(r, sc, sun, W, H, R, o);
  sc.background = skyTex('#58B8F5', '#CDEEFF');
  for (const [x, y, z, k] of [[-9, 6.5, -14, 1.3], [6, 7.5, -16, 1.6], [13, 5.5, -12, 1], [-15, 8, -18, 1.4]]) cloud(sc, x, y, z, k, R);
  sea(sc, 0, -1, 10, 4.5);
  // terra: una illa ampla que arriba fins a baix de la imatge (on es posen els personatges)
  const cells = []; for (let z = -2; z <= 5; z++) for (let x = -12; x <= 12; x++) if ((x / 12.5) ** 2 + ((z - 1.5) / 4) ** 2 <= 1) cells.push([x, z]);
  slab(sc, blob(cells, 1.1, 3), .12, 1.4, null, { mat: new THREE.MeshStandardMaterial({ color: '#F3D9A0', roughness: .95 }) });
  plateau(sc, blob(cells, .45, 4), .12, .5, 4);
  const top = .12 + .5 + .07;
  const freeAt = (x, z) => !(Math.abs(x) < 4.2 && z > -.5);   // el centre queda lliure per als personatges
  const spots = cells.filter(([x, z]) => freeAt(x, z));
  for (const [x, z] of spots) { const p = R(); if (z > 1 && Math.abs(x) < 7) continue; if (z > 3 && p < .6) continue;
    if (p < .42) await put(sc, TREES[Math.floor(R() * TREES.length)], x + (R() - .5) * .5, top, z + (R() - .5) * .5, { s: 1.1 + R() * .5, ry: R() * 6 });
    else if (p < .6) await put(sc, ['plant_bushLarge', 'plant_bushDetailed'][Math.floor(R() * 2)], x, top, z, { s: 1.7, ry: R() * 6 });
    else if (p < .8) for (let f = 0; f < 3; f++) await put(sc, ['flower_redA', 'flower_yellowB', 'flower_purpleA', 'grass_large', 'grass'][Math.floor(R() * 5)], x + (R() - .5), top, z + (R() - .5), { s: 1.6, ry: R() * 6 }); }
  for (let i = 0; i < 30; i++) { const x = (R() - .5) * 7, z = -1 + R() * 5; await put(sc, R() < .6 ? 'grass' : ['flower_redA', 'flower_yellowB', 'flower_purpleA'][i % 3], x, top, z, { s: 1.4, ry: R() * 6 }); }
  if (kind === 'poble') { await put(sc, 'city/building-type-a', -5.6, top, -2.6, { s: 2.2, ry: .35 }); await put(sc, 'city/building-type-e', -2.4, top, -3.6, { s: 2.2, ry: .05 }); await put(sc, 'city/building-type-k', 3.6, top, -3.4, { s: 2.2, ry: -.2 }); await put(sc, 'city/building-type-h', 6.8, top, -2.2, { s: 2.2, ry: -.5 }); for (let i = -6; i <= 6; i += 2) await put(sc, 'city/fence-1x2', i, top, -1.1, { s: 1.6 }); }
  if (kind === 'moll') { for (let i = 0; i < 5; i++) await put(sc, 'bridge_wood', 7.4, .12, -2.4 - i * 1.25, { s: [1.25, 1, 1.25] }); await put(sc, 'canoe', 9.3, .02, -6.2, { ry: .3, s: 2 }); await put(sc, 'log_stackLarge', 6.5, top, 2.6, { s: 1.5 }); await put(sc, 'tent_detailedClosed', -6.2, top, 1.2, { s: 1.8, ry: .4 }); await put(sc, 'campfire_logs', -4.6, top, 2.6, { s: 1.4 }); }
  if (kind === 'lab') { await put(sc, 'tent_detailedOpen', -5, top, -2, { s: 2.4, ry: .4 }); await put(sc, 'campfire_stones', -2.6, top, .4, { s: 1.8 }); await put(sc, 'log', -4, top, .8, { s: 1.8, ry: .3 }); await put(sc, 'statue_obelisk', 5, top, -2.4, { s: 2 }); await put(sc, 'statue_ring', 7, top, -.5, { s: 1.6, ry: -.4 }); const f = new THREE.PointLight('#FFB347', 8, 6, 1.6); f.position.set(-2.6, top + .7, .4); sc.add(f); }
  if (kind === 'illa') { await put(sc, 'statue_obelisk', 5.4, top, -2.4, { s: 2 }); await put(sc, 'stone_largeA', 4.2, top, -.4, { s: 1.6 }); await put(sc, 'tree_palmTall', -7.4, top, 1.5, { s: 2.2 }); await put(sc, 'tree_palmBend', 8.6, top, 2, { s: 2.2, ry: 2.6 }); await put(sc, 'sign', -3.4, top, -.4, { s: 1.8, ry: .4 }); }
  const cam = new THREE.PerspectiveCamera(30, W / H, .1, 200); if (o.bit) bitHero(sc, 3.5, top, 4.6, 2.2, -.4);
  cam.position.set(0, 4.6, 15.5); cam.lookAt(0, 1.6, -2); cam.updateMatrixWorld();
  return finish(r, sc, cam, W, H, { focus: 15, aperture: .0006, maxblur: .005 });
}
// el taller d'en Bit: una aula-taller càlida amb taules, ordinadors, prestatges, plantes i finestres
async function taller(r, sc, sun, W, H, R, o = {}) {
  sc.background = skyTex('#9FDBFF', '#E4F6FF');
  sun.position.set(6, 9, 10); sun.intensity = 1.8;
  const room = new THREE.Group(); room.scale.setScalar(2.6); sc.add(room);
  const add = async (n, x, y, z, o = {}) => { const m = await put(room, 'furniture/' + n, x, y, z, { tint: FURN, ...o }); return m; };
  for (let x = -4; x < 4; x++) for (let z = -2; z < 3; z++) await add('floorFull', x, 0, z + 1);
  for (let x = -4; x < 4; x++) { await add(x === -2 || x === 1 ? 'wallWindow' : 'wall', x, 0, -1.95); await add('wall', x, 1.29, -1.95); }
  for (let z = -2; z < 3; z++) { await add('wall', -4, 0, z + 1, { ry: Math.PI / 2 }); await add('wall', -4, 1.29, z + 1, { ry: Math.PI / 2 }); }
  await add('rugRounded', -.8, .005, 1.2, { s: 1.15 });
  await add('desk', -3.7, 0, -1.4); await add('computerScreen', -3.55, .38, -1.62); await add('chairDesk', -3.4, 0, -.9, { ry: Math.PI });
  await add('desk', 2.3, 0, -1.4); await add('laptop', 2.5, .38, -1.5); await add('lampRoundTable', 2.95, .38, -1.65); await add('books', 2.35, .38, -1.65);
  await add('bookcaseOpen', -1.1, 0, -1.7); await add('books', -1.05, .44, -1.75); await add('books', -.9, .02, -1.75); await add('cardboardBoxOpen', -.95, .22, -1.73, { s: .9 });
  await add('pottedPlant', 3.6, 0, -.6, { s: 1.4 }); await add('pottedPlant', -2.6, 0, -1.65, { s: 1.2 }); await add('speaker', .4, 0, -1.75);
  await add('cardboardBoxClosed', 3.2, 0, .9, { ry: .4 }); await add('cardboardBoxOpen', 3.5, 0, 1.5, { ry: -.3 });
  // pissarra amb blocs de programació a la paret
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.5, .82, .03), new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: .35 })); board.position.set(-.05, 1.42, -1.9); room.add(board);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.58, .9, .02), new THREE.MeshStandardMaterial({ color: '#3A4256' })); frame.position.set(-.05, 1.42, -1.915); room.add(frame);
  [['#3D7BF4', .5], ['#EF5A5A', .8], ['#3D7BF4', .62], ['#F08A24', .4], ['#8B5CF6', .7]].forEach(([c, w], i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, .1, .03), new THREE.MeshStandardMaterial({ color: c, roughness: .4 })); b.position.set(-.7 + w / 2 + (i === 2 || i === 3 ? .1 : 0), 1.7 - i * .14, -1.87); room.add(b); });
  // pòsters de colors i garlanda de llums
  [['#3D8BFF', -2.9, 1.55], ['#FFC531', 1.85, 1.6], ['#3CC47C', 3.1, 1.5]].forEach(([c, x, y]) => { const pz = new THREE.Mesh(new THREE.BoxGeometry(.5, .66, .02), new THREE.MeshStandardMaterial({ color: c, roughness: .6 })); pz.position.set(x, y, -1.9); room.add(pz); const w = new THREE.Mesh(new THREE.BoxGeometry(.38, .3, .021), new THREE.MeshStandardMaterial({ color: '#FFFFFF' })); w.position.set(x, y + .08, -1.889); room.add(w); });
  for (let i = 0; i < 14; i++) { const x = -3.8 + i * .55, b = new THREE.Mesh(new THREE.SphereGeometry(.035, 10, 8), new THREE.MeshStandardMaterial({ color: ['#FFC531', '#EF5A5A', '#3D8BFF', '#3CC47C'][i % 4], emissive: ['#FFC531', '#EF5A5A', '#3D8BFF', '#3CC47C'][i % 4], emissiveIntensity: 2.5 })); b.position.set(x, 2.3 - Math.sin(i * 1.1) * .06 - (i % 2) * .05, -1.85); room.add(b); }
  const warm = new THREE.PointLight('#FFD39A', 30, 30, 1.6); warm.position.set(0, 9, 4); sc.add(warm);
  if (o.bit) bitHero(sc, 2.6, 0, .4, 2.2, -.4);
  const cam = new THREE.PerspectiveCamera(34, W / H, .1, 200); if (o.bit) { cam.position.set(-.6, 3.4, 9.5); cam.lookAt(-.6, 1.9, -3); } else { cam.position.set(-.6, 4.6, 8.6); cam.lookAt(-1.2, 2.3, -3); } cam.updateMatrixWorld();
  return finish(r, sc, cam, W, H, { focus: 9, aperture: .0006, maxblur: .004 });
}
const FURN = { wood: '#E3B07A', woodDark: '#B07A48', metal: '#D5DCE6', metalMedium: '#8A94A8', metalDark: '#323A4E', carpet: '#7C6CF2', carpetDarker: '#5B4BD6', carpetWhite: '#FFFFFF', plant: '#4FB244', glass: '#BFE6FF', lamp: '#FFE6A0', _defaultMat: '#FFE6CC' };
