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
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
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
  // o.layers: capes fines de color net (una illa «impresa en 3D», o planxes mecanitzades), en lloc dels 4 estrats de terra
  const L = o.layers || 0, g = new THREE.ExtrudeGeometry(sh, { depth: h, steps: L || 4, bevelEnabled: false, curveSegments: 6 }); g.rotateX(Math.PI / 2); g.translate(0, h, 0);
  const ng = g.toNonIndexed(), pa = ng.attributes.position, cols = new Float32Array(pa.count * 3), c = new THREE.Color();
  const band = o.bands || ['#7E4A2C', '#9C5F38', '#B8744A', '#C98856'], noise = new Map();
  const nz = (x, yy, z) => { const k = x.toFixed(2) + ',' + yy.toFixed(2) + ',' + z.toFixed(2); if (!noise.has(k)) noise.set(k, (R() - .5)); return noise.get(k); };
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), yy = pa.getY(i), z = pa.getZ(i);
    if (yy > .02 && yy < h - .02) { const d = Math.hypot(x, z) || 1, e = nz(x, yy, z) * (o.rough ?? .16); pa.setX(i, x + x / d * e); pa.setZ(i, z + z / d * e); }
    if (L) continue;
    const t = Math.min(3, Math.floor(yy / h * 4)); c.set(band[t]); cols.set([c.r, c.g, c.b], i * 3); }
  // capes: el color va per triangle (segons l'alçada del centre), amb un punt més fosc a les capes senars (les línies de capa)
  if (L) for (let i = 0; i < pa.count; i += 3) { const cy = (pa.getY(i) + pa.getY(i + 1) + pa.getY(i + 2)) / 3, li = Math.min(L - 1, Math.max(0, Math.floor(cy / h * L)));
    c.set(band[Math.min(band.length - 1, Math.floor(li / L * band.length))]).multiplyScalar(li % 2 ? .9 : 1.0); for (let k = 0; k < 3; k++) cols.set([c.r, c.g, c.b], (i + k) * 3); }
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
  maqueen(g, .72, .03, 0, Math.PI, '01110 10001 10001 10001 01110', .066); void R;
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
    } else if (kind === 'mat') {
      // estora de tall del taller (verd maker) amb la quadrícula en mm/cm, diagonals i un transportador
      g.fillStyle = '#2FA286'; g.fillRect(0, 0, S, S);
      blobs(40, ['#36AC90', '#2A977D', '#33A68A'], .8, 2.2, '66'); dots(7000, ['#2C9A80', '#37AD92', '#2B9C82'], 2, 4);
      const line = (x0, z0, x1, z1) => { g.beginPath(); g.moveTo(X(x0), Z(z0)); g.lineTo(X(x1), Z(z1)); g.stroke(); };
      g.strokeStyle = 'rgba(226,255,246,.22)'; g.lineWidth = 2; for (let i = -28; i <= 28; i++) { if (i % 4) { line(i / 4, -7, i / 4, 7); line(-7, i / 4, 7, i / 4); } }
      g.strokeStyle = 'rgba(236,255,250,.55)'; g.lineWidth = 4; for (let i = -7; i <= 7; i++) { line(i, -7, i, 7); line(-7, i, 7, i); }
      g.strokeStyle = 'rgba(255,229,140,.5)'; g.lineWidth = 3; for (const k of [-6, -2, 2, 6]) { line(k - 7, -7, k + 7, 7); line(k + 7, -7, k - 7, 7); }
      g.strokeStyle = 'rgba(236,255,250,.45)'; g.lineWidth = 3; for (const r of [1.5, 2.5]) { g.beginPath(); g.arc(X(-3), Z(-4.2), r * U, Math.PI, 0); g.stroke(); }
      for (let a = 0; a <= 18; a++) { const t = Math.PI + a / 18 * Math.PI, r0 = (a % 3 ? 2.3 : 2.1) * U; g.beginPath(); g.moveTo(X(-3) + Math.cos(t) * r0, Z(-4.2) + Math.sin(t) * r0); g.lineTo(X(-3) + Math.cos(t) * 2.5 * U, Z(-4.2) + Math.sin(t) * 2.5 * U); g.stroke(); }
    } else if (kind === 'blueprint') {
      // plànol (blueprint): paper blau amb quadrícula i dibuixos tècnics (peces, engranatges, cotes)
      g.fillStyle = '#2B63C9'; g.fillRect(0, 0, S, S);
      blobs(50, ['#3570D4', '#2457BA', '#2D67CC'], .8, 2.4, '55'); dots(6000, ['#2A60C2', '#3069CF', '#285CBE'], 2, 4);
      const line = (x0, z0, x1, z1) => { g.beginPath(); g.moveTo(X(x0), Z(z0)); g.lineTo(X(x1), Z(z1)); g.stroke(); };
      g.strokeStyle = 'rgba(220,236,255,.16)'; g.lineWidth = 2; for (let i = -28; i <= 28; i++) if (i % 4) { line(i / 4, -7, i / 4, 7); line(-7, i / 4, 7, i / 4); }
      g.strokeStyle = 'rgba(225,240,255,.36)'; g.lineWidth = 3.5; for (let i = -7; i <= 7; i++) { line(i, -7, i, 7); line(-7, i, 7, i); }
      g.strokeStyle = 'rgba(238,247,255,.62)'; g.lineWidth = 4; g.lineCap = g.lineJoin = 'round';
      const arrow = (x0, z0, x1, z1) => { line(x0, z0, x1, z1); const a = Math.atan2(Z(z1) - Z(z0), X(x1) - X(x0)); for (const [px, pz, aa] of [[x0, z0, a], [x1, z1, a + Math.PI]]) { g.beginPath(); g.moveTo(X(px) + Math.cos(aa + .4) * 26, Z(pz) + Math.sin(aa + .4) * 26); g.lineTo(X(px), Z(pz)); g.lineTo(X(px) + Math.cos(aa - .4) * 26, Z(pz) + Math.sin(aa - .4) * 26); g.stroke(); } };
      for (let i = 0; i < 22; i++) { const cx = (R() - .5) * 10, cz = (R() - .5) * 12, k = i % 5, r = .45 + R() * .5;
        if (k === 0) { g.beginPath(); g.arc(X(cx), Z(cz), r * U, 0, 7); g.stroke(); g.beginPath(); g.arc(X(cx), Z(cz), r * .4 * U, 0, 7); g.stroke(); g.setLineDash([22, 10, 4, 10]); line(cx - r - .2, cz, cx + r + .2, cz); line(cx, cz - r - .2, cx, cz + r + .2); g.setLineDash([]); arrow(cx - r, cz - r - .25, cx + r, cz - r - .25); }
        else if (k === 1) { const n = 12; g.beginPath(); for (let t = 0; t <= n * 4; t++) { const a = t / (n * 4) * Math.PI * 2, rr = (t % 4 < 2 ? r : r * .82) * U; t ? g.lineTo(X(cx) + Math.cos(a) * rr, Z(cz) + Math.sin(a) * rr) : g.moveTo(X(cx) + Math.cos(a) * rr, Z(cz) + Math.sin(a) * rr); } g.stroke(); g.beginPath(); g.arc(X(cx), Z(cz), r * .25 * U, 0, 7); g.stroke(); }
        else if (k === 2) { const w = r * 1.6, d = r; g.strokeRect(X(cx - w / 2), Z(cz + d / 2), w * U, d * U); arrow(cx - w / 2, cz - d / 2 - .25, cx + w / 2, cz - d / 2 - .25); arrow(cx + w / 2 + .25, cz - d / 2, cx + w / 2 + .25, cz + d / 2); }
        else if (k === 3) { g.beginPath(); for (let t = 0; t <= 6; t++) { const a = t / 6 * Math.PI * 2; t ? g.lineTo(X(cx) + Math.cos(a) * r * U, Z(cz) + Math.sin(a) * r * U) : g.moveTo(X(cx) + Math.cos(a) * r * U, Z(cz) + Math.sin(a) * r * U); } g.stroke(); g.beginPath(); g.arc(X(cx), Z(cz), r * .5 * U, 0, 7); g.stroke(); }
        else { g.beginPath(); g.arc(X(cx), Z(cz), r * U, -.3, 1.9); g.stroke(); line(cx, cz, cx + Math.cos(-.3) * r, cz - Math.sin(-.3) * r); line(cx, cz, cx + Math.cos(1.9) * r, cz - Math.sin(1.9) * r); } }
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
  },
  // Tech 3D · Nivell 1 (9-12): el taller de fabricació digital d'en Bit i la Nuvi. Una illa «impresa» a capes de PLA,
  // l'estora de tall verda amb la quadrícula, el camí de filament, plaques calentes per parades; matí lluminós
  fab: {
    light: { exposure: 1.0, envI: .55, hemi: ['#E6F1FF', '#8C7CC0', .45], sun: ['#FFEFD8', 2.55, [-10, 13, 8.5]], shadowR: 5 },
    bg: '#3FA9E6', sea: ['#9BF0E6', '#36BCD8', '#2373C9'], sand: '#F7E3BC', foam: ['#F0FFFC', .6],
    cliff: ['#5B43D6', '#6A50E6', '#7C62F2', '#9180FA', '#A99BFF', '#C2B8FF'], layers: 14, cap: 'mat', pal: { leafsGreen: '#3CC47C', leafsDark: '#239A62', grass: '#5FC15A' },
    post: { bloom: [.12, .36, 1.08], grade: { sat: 1.1, con: 1.07, gain: [1.0, .995, 1.0] } }
  },
  // Tech 3D · Nivell 2 (12-14): l'estudi d'enginyeria. Plànol blau, planxes d'alumini i grafit, cinta mètrica per camí,
  // pantalles de CAD i engranatges; llum de dia freda i neta
  estudi: {
    light: { exposure: .98, envI: .6, hemi: ['#E4EEFF', '#3E4A66', .45], sun: ['#FFF4E6', 2.5, [-9.5, 13.5, 8]], shadowR: 5 },
    bg: '#17507E', sea: ['#6FE0D6', '#1E93B4', '#123F78'], sand: '#DCD6C8', foam: ['#E8FBFA', .52],
    cliff: ['#2A303D', '#8C96A8', '#343B4A', '#A6AFBF', '#3C4454', '#C3CAD6'], layers: 12, cap: 'blueprint', pal: { leafsGreen: '#2FB5A6', leafsDark: '#1E8A80', grass: '#4FB89A', stone: '#9AA3B5', stoneDark: '#717B8E' },
    post: { bloom: [.12, .36, 1.08], grade: { sat: 1.08, con: 1.08, lift: [0, .004, .012] } }
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
// taller 3D: el camí és un cordó de filament imprès (dos perímetres i el farciment en diagonal de l'última capa)
let FILTEX = null, TAPETEX = null;
async function pathFab(X) {
  const { sc, curve, pts, top } = X, L = curve.getLength();
  if (!FILTEX) { FILTEX = ctex(64, 64, (g, w) => { g.fillStyle = '#FFB443'; g.fillRect(0, 0, w, w); g.strokeStyle = 'rgba(255,240,200,.55)'; g.lineWidth = 3; for (let i = -2; i < 4; i++) { g.beginPath(); g.moveTo(i * w / 2, w); g.lineTo(i * w / 2 + w, 0); g.stroke(); } g.strokeStyle = 'rgba(190,105,20,.35)'; g.lineWidth = 2; for (let i = -2; i < 4; i++) { g.beginPath(); g.moveTo(i * w / 2 + w / 4, w); g.lineTo(i * w / 2 + w / 4 + w, 0); g.stroke(); } }); FILTEX.wrapS = FILTEX.wrapT = THREE.RepeatWrapping; }
  const t = FILTEX.clone(); t.needsUpdate = true; t.repeat.set(3, L / .3);
  ribbon(sc, curve, pts, .5, top + .006, sm('#C9761E', { roughness: .5, side: THREE.DoubleSide }));
  ribbon(sc, curve, pts, .45, top + .016, new THREE.MeshStandardMaterial({ map: t, roughness: .38, side: THREE.DoubleSide }));
  for (const s of [-1, 1]) for (const k of [.4, .33]) ribbon(sc, curve, pts, .03, top + .022, sm(k > .35 ? '#FFC867' : '#F59A2C', { roughness: .32, side: THREE.DoubleSide }), s * k);
}
// estudi: el camí és una cinta mètrica groga amb les marques dels mil·límetres i els centímetres
async function pathEstudi(X) {
  const { sc, curve, pts, top } = X, L = curve.getLength();
  if (!TAPETEX) { TAPETEX = ctex(128, 1024, (g, w, h) => { g.fillStyle = '#FFD23A'; g.fillRect(0, 0, w, h); const u = h / 10;
    for (let cm = 0; cm < 10; cm++) for (let mm = 0; mm < 10; mm++) { const y = cm * u + mm * u / 10, l = mm === 0 ? .42 : mm === 5 ? .28 : .16; g.fillStyle = '#1D2230'; g.fillRect(0, y, w * l, mm ? 3 : 5); g.fillRect(w * (1 - l), y, w * l, mm ? 3 : 5); }
    g.fillStyle = '#1D2230'; g.font = '800 34px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let cm = 0; cm < 10; cm++) { g.save(); g.translate(w / 2, cm * u + u * .5); g.rotate(Math.PI / 2); g.fillStyle = cm === 9 ? '#D63F2E' : '#1D2230'; g.fillText(String(cm + 1), 0, 0); g.restore(); } });
    TAPETEX.wrapS = TAPETEX.wrapT = THREE.RepeatWrapping; }
  const t = TAPETEX.clone(); t.needsUpdate = true; t.repeat.set(1, L / 6.88);
  ribbon(sc, curve, pts, .48, top + .006, sm('#2A303D', { roughness: .45, metalness: .3, side: THREE.DoubleSide }));
  ribbon(sc, curve, pts, .43, top + .014, new THREE.MeshStandardMaterial({ map: t, roughness: .35, side: THREE.DoubleSide }));
  // el ganxo metàl·lic de la punta de la cinta
  const p0 = pts[2], tg = curve.getTangentAt(2 / (pts.length - 1)), hk = grp(sc, p0.x, top + .02, p0.z, Math.atan2(tg.x, tg.z));
  mesh(new THREE.BoxGeometry(.9, .02, .12), sm('#C9CFD8', { metalness: .9, roughness: .25 }), [0, 0, -.04], hk); mesh(new THREE.BoxGeometry(.9, .14, .02), sm('#C9CFD8', { metalness: .9, roughness: .25 }), [0, .06, -.1], hk);
}
const PATHS = { tropic: pathTropic, lab: pathLab, teatre: pathTeatre, ciutat: pathCiutat, fab: pathFab, estudi: pathEstudi };

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
// taller 3D: cada parada és una placa calenta (base de grafit, làmina clara, anella de llum del color de la unitat i pinces)
function stopFab(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK);
  mesh(new THREE.CylinderGeometry(1.0, 1.04, .15, 64), sm('#363B4A', { roughness: .38, metalness: .45 }), [0, .075, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(1.045, 1.045, .025, 64), sm('#4A5063', { roughness: .3, metalness: .6 }), [0, .02, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(.95, .95, .02, 64), sm('#E9E5F3', { roughness: .5 }), [0, .158, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.885, .06, 14, 96), sm(color, { emissive: color, emissiveIntensity: .22, roughness: .3 }), [0, .165, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  mesh(new THREE.TorusGeometry(.72, .008, 6, 80), sm('#D6D0EA', { roughness: .5 }), [0, .169, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; mesh(new RoundedBoxGeometry(.13, .05, .09, 2, .02), sm('#E9EDF3', { metalness: .85, roughness: .25 }), [Math.cos(a) * .99, .16, Math.sin(a) * .99], g, { r: [0, -a, 0], ground: 1 }); }
  mesh(new THREE.SphereGeometry(.03, 10, 8), glow('#FF9A3A', 2.4), [0, .1, 1.04], g, { cast: false, ground: 1 });
  return .17 * SK;
}
// estudi: plataforma d'acer amb l'esfera graduada (com un transportador) i l'anella de llum
let DIALTEX = null;
function stopEstudi(X, p) {
  const { sc, top, color } = X, g = grp(sc, p.x, top, p.z, 0, SK);
  if (!DIALTEX) DIALTEX = ctex(512, 512, (c, w) => { c.fillStyle = '#E6EAF1'; c.fillRect(0, 0, w, w); c.strokeStyle = '#2A303D'; c.lineCap = 'round';
    for (let i = 0; i < 72; i++) { const a = i / 72 * Math.PI * 2, r1 = w / 2 - 6, r0 = r1 - (i % 6 ? 16 : 34); c.lineWidth = i % 6 ? 3 : 5; c.beginPath(); c.moveTo(w / 2 + Math.cos(a) * r0, w / 2 + Math.sin(a) * r0); c.lineTo(w / 2 + Math.cos(a) * r1, w / 2 + Math.sin(a) * r1); c.stroke(); }
    c.strokeStyle = 'rgba(42,48,61,.35)'; c.lineWidth = 2; c.beginPath(); c.arc(w / 2, w / 2, w / 2 - 50, 0, 7); c.stroke(); });
  mesh(new THREE.CylinderGeometry(1.02, 1.05, .12, 64), sm('#A9B2C1', { roughness: .3, metalness: .75 }), [0, .06, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(1.06, 1.06, .02, 64), sm('#2A303D', { roughness: .4, metalness: .4 }), [0, .015, 0], g, { ground: 1 });
  mesh(new THREE.CylinderGeometry(.96, .96, .02, 64), [sm('#E6EAF0'), new THREE.MeshStandardMaterial({ map: DIALTEX, roughness: .4 }), sm('#E6EAF0')], [0, .128, 0], g, { ground: 1 });
  mesh(new THREE.TorusGeometry(.985, .055, 14, 96), sm(color, { emissive: color, emissiveIntensity: .22, roughness: .3 }), [0, .13, 0], g, { r: [Math.PI / 2, 0, 0], ground: 1 });
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; mesh(new THREE.CylinderGeometry(.028, .028, .015, 12), sm('#6B7486', { metalness: .9, roughness: .3 }), [Math.cos(a) * .9, .14, Math.sin(a) * .9], g, { ground: 1 }); }
  return .14 * SK;
}
const STOPS = { tropic: stopTropic, lab: stopLab, teatre: stopTeatre, ciutat: stopCiutat, fab: stopFab, estudi: stopEstudi };

/* ----- decoració de cada món ----- */
async function scatterNature(X, o) {
  const { sc, R, pl, top } = X;
  const tree = q => put(sc, o.treeList[Math.floor(R() * o.treeList.length)], q[0], top, q[1], { s: .85 + R() * .35, ry: R() * 6, tint: o.treeTint && o.treeTint(R) });
  for (let c = 0; c < (o.clusters || 0); c++) { const q = pl.find(.3, 1.35, { zone: (x, z) => edgeK(x, z) > (o.edge ?? .5), path: true }); if (!q) continue; await tree(q);
    for (let k = 0; k < 7; k++) { const a = R() * 6.283, d = .45 + R() * .4, x = q[0] + Math.cos(a) * d, z = q[1] + Math.sin(a) * d, w = R();
      if (w < .4 && pl.ok(x, z, .28, 1.35, { path: true })) { pl.take(x, z, .28); await tree([x, z]); }
      else if (w < .7 && pl.ok(x, z, .2, .4)) { pl.take(x, z, .2); await put(sc, ['plant_bushLarge', 'plant_bushDetailed', 'plant_bush'][Math.floor(R() * 3)], x, top, z, { s: 1.15, ry: R() * 6, tint: o.bushTint }); }
      else if (o.flowerList && pl.ok(x, z, .14, .2)) { pl.take(x, z, .14); for (let f = 0; f < 3; f++) await put(sc, o.flowerList[Math.floor(R() * o.flowerList.length)], x + (R() - .5) * .3, top, z + (R() - .5) * .3, { s: 1.3, ry: R() * 6 }); } } }
  // arbres, sobretot a les vores
  for (let i = 0, k = 0; i < o.trees && k < 900; k++) { const h = 1.35, q = pl.find(.32, h, { tries: 1, path: true }); if (!q) continue; if (edgeK(q[0], q[1]) < (o.edge ?? .5) && R() < .75) { pl.occ.pop(); continue; } await put(sc, o.treeList[Math.floor(R() * o.treeList.length)], q[0], top, q[1], { s: .85 + R() * .35, ry: R() * 6, tint: o.treeTint && o.treeTint(R) }); i++; }
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
  const botAt = (t, led) => { const j = Math.round(t * N), p = pts[j], tg = curve.getTangentAt(j / N); maqueen(sc, p.x, top + .02, p.z, Math.atan2(-tg.x, -tg.z), led, .076); };
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
    const fc = pl.best(.3, .9, { at: [stageAt[0] + sideX * 1.9, stageAt[1] + .9], path: true }); if (fc) filmCamera(sc, fc[0], top, fc[1], Math.atan2(st.x - fc[0], st.z - fc[1]), 1.1);
    const sp = pl.best(.25, 1.2, { at: [stageAt[0] - sideX * .3, stageAt[1] + 2.2], path: true }); if (sp) spotlight(sc, sp[0], top, sp[1], st); }
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
/* ---------- el taller de fabricació digital (mons fab i estudi, Tech 3D) ---------- */
// plàstic d'impressió (PLA) una mica satinat; FIL: els colors de les bobines de filament
const pla = (c, o = {}) => sm(c, { roughness: .4, metalness: 0, ...o });
const steel = () => sm('#D3D8E0', { metalness: .85, roughness: .26 }), dark = () => sm('#2E3340', { roughness: .45, metalness: .25 });
const FIL = ['#FF6B5B', '#FFB443', '#FFE066', '#3CC47C', '#2FB5A6', '#3D8BFF', '#7C5CFF', '#E5489A', '#FFFFFF', '#FF8FB1'];
const WIND = {};
const windTex = c => WIND[c] || (WIND[c] = ctex(64, 128, (g, w, h) => { g.fillStyle = c; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 4) { g.fillStyle = 'rgba(0,0,0,.13)'; g.fillRect(0, y, w, 1.4); g.fillStyle = 'rgba(255,255,255,.12)'; g.fillRect(0, y + 2, w, 1); } }));
// bobina de filament: dues tapes, el filament enrotllat (amb les voltes) i el forat; dreta (eix horitzontal) o plana
function spool(par, x, y, z, col, o = {}) {
  const g = grp(par, x, y, z, o.ry || 0, o.s || 1), a = grp(g, 0, o.flat ? .065 : .2, 0), fl = sm(o.fl || '#' + new THREE.Color(col).lerp(new THREE.Color('#FFFFFF'), .62).getHexString(), { roughness: .3 });
  if (!o.flat) a.rotation.z = Math.PI / 2;
  for (const s of [-1, 1]) mesh(new THREE.CylinderGeometry(.2, .2, .014, 36), fl, [0, s * .058, 0], a);
  mesh(new THREE.CylinderGeometry(.168, .168, .102, 40, 1, true), new THREE.MeshStandardMaterial({ map: windTex(col), roughness: .35 }), [0, 0, 0], a);
  for (const s of [-1, 1]) mesh(new THREE.CircleGeometry(.05, 20), sm('#14161C'), [0, s * .066, 0], a, { r: [s * -Math.PI / 2, 0, 0], cast: false });
  for (let i = 0; i < 3; i++) { const t = i / 3 * Math.PI * 2 + .5; for (const s of [-1, 1]) mesh(new THREE.CircleGeometry(.028, 14), sm('#14161C'), [Math.cos(t) * .12, s * .066, Math.sin(t) * .12], a, { r: [s * -Math.PI / 2, 0, 0], cast: false }); }
  return g;
}
// la cara d'en Bit en petit (visera fosca, ulls de llum cian i somriure): la Nuvi la porta al capçal
function friendlyFace(par, w, h, z, o = {}) {
  const f = grp(par, 0, o.y || 0, z);
  mesh(new RoundedBoxGeometry(w, h, .03, 3, Math.min(w, h) * .22), sm('#111B44', { roughness: .1, metalness: .2 }), [0, 0, 0], f);
  const eg = new THREE.CapsuleGeometry(h * .13, h * .16, 4, 12), em = glow('#8DF5FF', 1.6);
  for (const s of [-1, 1]) { const e = mesh(eg, em, [s * w * .2, h * .06, .018], f, { cast: false }); if (o.happy) { e.scale.set(1, .35, 1); e.position.y += h * .1; } mesh(new THREE.SphereGeometry(h * .045, 8, 6), new THREE.MeshBasicMaterial({ color: '#FFFFFF' }), [s * w * .2 + h * .04, h * .14, .03], f, { cast: false }); }
  mesh(new THREE.TorusGeometry(h * .13, h * .028, 6, 16, Math.PI), em, [0, -h * .2, .018], f, { r: [0, 0, Math.PI], cast: false });
  return f;
}
// impressora 3D de marc obert (la Nuvi, si o.face): base, quatre pilars, llit que brilla, pòrtic amb el capçal, bobina a dalt
function printer(par, x, y, z, ry, s = 1, o = {}) {
  const g = grp(par, x, y, z, ry, s), body = pla(o.body || '#F4F6FB'), fr = sm(o.frame || '#3A3F57', { roughness: .38, metalness: .35 }), acc = pla(o.acc || '#7C5CFF', { roughness: .32 });
  mesh(new RoundedBoxGeometry(.82, .17, .72, 3, .05), body, [0, .085, 0], g);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesh(new THREE.CylinderGeometry(.035, .035, .03, 10), dark(), [a * .34, -.005, b * .29], g);
  // pantalla i roda del davant
  mesh(new RoundedBoxGeometry(.24, .1, .02, 2, .015), dark(), [-.2, .09, .365], g); mesh(new THREE.PlaneGeometry(.2, .07), glow(o.scr || '#7FE7FF', 1.15), [-.2, .09, .377], g, { cast: false });
  mesh(new THREE.CylinderGeometry(.035, .035, .025, 16), acc, [.12, .09, .37], g, { r: [Math.PI / 2, 0, 0] });
  // marc
  const H = o.h || 1.0;
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesh(new RoundedBoxGeometry(.07, H - .17, .07, 2, .02), fr, [a * .37, .17 + (H - .17) / 2, b * .32], g);
  for (const b of [-1, 1]) mesh(new RoundedBoxGeometry(.82, .07, .07, 2, .02), fr, [0, H, b * .32], g);
  for (const a of [-1, 1]) mesh(new RoundedBoxGeometry(.07, .07, .72, 2, .02), fr, [a * .37, H, 0], g);
  // llit calent amb la làmina de quadrícula que brilla una mica, i la peça a mig imprimir
  mesh(new THREE.BoxGeometry(.6, .03, .54), steel(), [0, .2, 0], g);
  const bedT = ctex(128, 128, (c, w) => { c.fillStyle = '#2F3446'; c.fillRect(0, 0, w, w); c.strokeStyle = 'rgba(255,170,90,.55)'; c.lineWidth = 2; for (let i = 1; i < 8; i++) { c.beginPath(); c.moveTo(i * 16, 0); c.lineTo(i * 16, w); c.stroke(); c.beginPath(); c.moveTo(0, i * 16); c.lineTo(w, i * 16); c.stroke(); } });
  const bedE = ctex(128, 128, (c, w) => { c.fillStyle = '#000'; c.fillRect(0, 0, w, w); c.strokeStyle = '#FF8A2A'; c.lineWidth = 2; for (let i = 1; i < 8; i++) { c.beginPath(); c.moveTo(i * 16, 0); c.lineTo(i * 16, w); c.stroke(); c.beginPath(); c.moveTo(0, i * 16); c.lineTo(w, i * 16); c.stroke(); } });
  mesh(new THREE.BoxGeometry(.56, .008, .5), [dark(), dark(), new THREE.MeshStandardMaterial({ map: bedT, emissiveMap: bedE, emissive: '#FFFFFF', emissiveIntensity: .9, roughness: .5 }), dark(), dark(), dark()], [0, .219, 0], g, { cast: false });
  const pc = o.fil || FIL[6], pz = 0, ph = o.ph ?? .2;
  if (o.obj === 'vase') vaseObj(g, 0, .223, pz, ph, pc);
  else if (o.obj === 'gear') gearObj(g, 0, .223, pz, .17, 10, pc, { d: .05, flat: true });
  else castleObj(g, 0, .223, pz, .55, pc, ph);
  // pòrtic (eix X) a l'alçada de la capa que s'imprimeix i el capçal
  const hy = .223 + ph + .17;
  for (const zz of [-.03, .03]) mesh(new THREE.CylinderGeometry(.012, .012, .74, 8), steel(), [0, hy, zz], g, { r: [0, 0, Math.PI / 2] });
  for (const a of [-1, 1]) mesh(new RoundedBoxGeometry(.07, .09, .1, 2, .02), fr, [a * .37, hy, 0], g);
  const hx = o.hx ?? .06, head = grp(g, hx, hy, .03);
  if (o.face) { mesh(new RoundedBoxGeometry(.34, .28, .22, 3, .08), acc, [0, .01, .02], head); friendlyFace(head, .28, .17, .135, { y: .02, happy: o.happy });
    const an = grp(head, 0, .13, 0); mesh(new THREE.CylinderGeometry(.008, .008, .1, 6), dark(), [0, .05, 0], an); mesh(new THREE.SphereGeometry(.028, 12, 8), glow('#FFC531', 1.6), [0, .11, 0], an, { cast: false }); halo(an, 0, .11, 0, .12, '#FFC531', .5); }
  else { mesh(new RoundedBoxGeometry(.16, .16, .14, 2, .03), acc, [0, 0, .02], head); mesh(new THREE.PlaneGeometry(.06, .06), glow('#7FE7FF', 1.1), [.03, .02, .091], head, { cast: false }); }
  mesh(new THREE.BoxGeometry(.06, .05, .06), sm('#B9C0CC', { metalness: .8, roughness: .3 }), [0, -.13, .02], head);
  mesh(new THREE.ConeGeometry(.022, .045, 12), sm('#E0B050', { metalness: .9, roughness: .25 }), [0, -.175, .02], head, { r: [Math.PI, 0, 0] });
  mesh(new THREE.SphereGeometry(.012, 8, 6), glow('#FF8A2A', 3), [0, -.2, .02], head, { cast: false }); halo(head, 0, -.2, .02, .16, '#FF9A3A', .7);
  // bobina a dalt (en un suport) i el filament que baixa fins al capçal
  const sp = grp(g, -.1, H + .03, -.2); spool(sp, 0, 0, 0, pc, { s: .9 });
  const fp = [new THREE.Vector3(-.1, H + .2, -.2), new THREE.Vector3(.05, H + .28, -.05), new THREE.Vector3(hx + .03, hy + .3, .05), new THREE.Vector3(hx, hy + .12, .04)];
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(fp), 24, .009, 5), pla(pc), null, g, { cast: false });
  return g;
}
// impressora tancada (estudi): caixa de grafit amb porta de vidre, llum de dins i pantalla
function enclosedPrinter(par, x, y, z, ry, s = 1, o = {}) {
  const g = grp(par, x, y, z, ry, s), b = sm(o.body || '#2B303C', { roughness: .4, metalness: .3 }), trim = pla(o.acc || '#D63F8C');
  const W = .8, D = .74, H = 1.0;
  mesh(new RoundedBoxGeometry(W, .16, D, 2, .04), b, [0, .08, 0], g); mesh(new RoundedBoxGeometry(W, .1, D, 2, .03), b, [0, H - .05, 0], g);
  mesh(new THREE.BoxGeometry(W, H - .26, .04), b, [0, H / 2, -D / 2 + .02], g);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.04, H - .26, D), b, [sx * (W / 2 - .02), H / 2, 0], g);
  mesh(new THREE.BoxGeometry(W + .01, .025, .025), trim, [0, H - .1, D / 2], g); mesh(new THREE.BoxGeometry(W + .01, .025, .025), trim, [0, .16, D / 2], g);
  mesh(new THREE.BoxGeometry(W - .1, .02, .02), glow('#F4FBFF', 2.4), [0, H - .12, D / 2 - .1], g, { cast: false });
  mesh(new THREE.BoxGeometry(.56, .02, .5), steel(), [0, .2, 0], g); castleObj(g, 0, .21, 0, .5, o.fil || '#2FB5A6', .25);
  mesh(new RoundedBoxGeometry(.14, .12, .12, 2, .03), trim, [.08, .6, 0], g); mesh(new THREE.CylinderGeometry(.012, .012, .7, 8), steel(), [0, .66, -.05], g, { r: [0, 0, Math.PI / 2] });
  mesh(new THREE.SphereGeometry(.012, 8, 6), glow('#FF8A2A', 3), [.08, .53, 0], g, { cast: false });
  const glass = new THREE.MeshStandardMaterial({ color: '#CFE8FF', roughness: .05, metalness: .1, transparent: true, opacity: .22, depthWrite: false });
  mesh(new THREE.PlaneGeometry(W - .08, H - .3), glass, [0, H / 2 + .02, D / 2 + .005], g, { cast: false });
  mesh(new THREE.BoxGeometry(.02, .25, .03), steel(), [W / 2 - .08, H / 2 + .02, D / 2 + .03], g);
  mesh(new RoundedBoxGeometry(.2, .09, .02, 2, .015), dark(), [-.22, .08, D / 2 + .005], g); mesh(new THREE.PlaneGeometry(.16, .06), glow('#7FE7FF', 1.2), [-.22, .08, D / 2 + .018], g, { cast: false });
  spool(g, W / 2 + .08, .55, 0, o.fil || '#2FB5A6', { ry: Math.PI / 2, s: .85 });
  return g;
}
// peces impreses
function castleObj(par, x, y, z, s, col, hcut = 1) {
  const g = grp(par, x, y, z, 0, s), m = pla(col), k = Math.min(1, hcut / (.42 * s));
  mesh(new THREE.BoxGeometry(.36, .2 * k, .36), m, [0, .1 * k, 0], g);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { mesh(new THREE.CylinderGeometry(.07, .075, .3 * k, 14), m, [a * .18, .15 * k, b * .18], g); if (k > .95) mesh(new THREE.ConeGeometry(.085, .14, 14), m, [a * .18, .37, b * .18], g); }
  if (k > .95) { mesh(new THREE.CylinderGeometry(.09, .1, .34, 14), m, [0, .3, 0], g); mesh(new THREE.ConeGeometry(.11, .16, 14), m, [0, .55, 0], g); for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(.06, .05, .03), m, [-.09 + i * .06, .225, .18], g); }
  mesh(new THREE.PlaneGeometry(.08, .1 * k), sm('#2A1E24'), [0, .05 * k, .181], g, { cast: false });
  return g;
}
function vaseObj(par, x, y, z, h, col) {
  const pts = []; for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push(new THREE.Vector2(.07 + .045 * Math.sin(t * 3.2 + .3) + .015 * t, t * h)); }
  const lg = new THREE.LatheGeometry(pts, 48), p = lg.attributes.position;
  for (let i = 0; i < p.count; i++) { const vx = p.getX(i), vz = p.getZ(i), vy = p.getY(i), a = Math.atan2(vz, vx), k = 1 + .07 * Math.sin(a * 10 + vy * 18); p.setX(i, vx * k); p.setZ(i, vz * k); }
  lg.computeVertexNormals();
  return mesh(lg, pla(col, { side: THREE.DoubleSide }), [x, y, z], par);
}
function gearShape(R, n, hole = .25) {
  const sh = new THREE.Shape(), r0 = R * .8;
  for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, d = Math.PI * 2 / n;
    const P = [[a, r0], [a + d * .18, R], [a + d * .45, R], [a + d * .62, r0]]; P.forEach(([t, r], k) => (i || k) ? sh.lineTo(Math.cos(t) * r, Math.sin(t) * r) : sh.moveTo(Math.cos(t) * r, Math.sin(t) * r));
    sh.absarc(0, 0, r0, a + d * .62, a + d, false); }
  const ho = new THREE.Path(); ho.absarc(0, 0, R * hole, 0, Math.PI * 2, true); sh.holes.push(ho);
  if (R > .25) for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, c = new THREE.Path(); c.absarc(Math.cos(a) * R * .52, Math.sin(a) * R * .52, R * .12, 0, Math.PI * 2, true); sh.holes.push(c); }
  return sh;
}
function gearObj(par, x, y, z, R, n, col, o = {}) {
  const d = o.d ?? R * .3, gg = new THREE.ExtrudeGeometry(gearShape(R, n, o.hole), { depth: d, bevelEnabled: true, bevelThickness: d * .12, bevelSize: Math.min(.012, R * .04), bevelSegments: 2, curveSegments: 10 });
  gg.translate(0, 0, -d / 2); if (o.flat) { gg.rotateX(-Math.PI / 2); gg.translate(0, d / 2 + d * .12, 0); }
  const m = mesh(gg, o.mat || pla(col, { roughness: .35 }), [x, y, z], par); if (o.rz) m.rotation.z = o.rz; if (o.ry != null) m.rotation.y = o.ry; return m;
}
function keyringObj(par, x, y, z, s, col, ry = 0) {
  const g = grp(par, x, y, z, ry, s), sh = new THREE.Shape(), w = .5, h = .3, r = .1;
  sh.moveTo(-w / 2 + r, -h / 2); sh.lineTo(w / 2 - r, -h / 2); sh.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); sh.lineTo(w / 2, h / 2 - r); sh.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); sh.lineTo(-w / 2 + r, h / 2); sh.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); sh.lineTo(-w / 2, -h / 2 + r); sh.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const ho = new THREE.Path(); ho.absarc(-w / 2 + .085, 0, .045, 0, Math.PI * 2, true); sh.holes.push(ho);
  const kg = new THREE.ExtrudeGeometry(sh, { depth: .05, bevelEnabled: true, bevelThickness: .01, bevelSize: .01, bevelSegments: 2 }); kg.rotateX(-Math.PI / 2); mesh(kg, pla(col), [0, .01, 0], g);
  const st = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + Math.PI / 2, rr = i % 2 ? .035 : .085; i ? st.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : st.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  const sg = new THREE.ExtrudeGeometry(st, { depth: .03, bevelEnabled: false }); sg.rotateX(-Math.PI / 2); mesh(sg, pla('#FFFFFF'), [.06, .07, 0], g);
  mesh(new THREE.TorusGeometry(.075, .01, 8, 28), steel(), [-w / 2 + .02, .035, 0], g, { r: [Math.PI / 2, .9, 0] });
  return g;
}
function robotObj(par, x, y, z, ry, s, cols) {
  const g = grp(par, x, y, z, ry, s), [a, b, c] = cols.map(k => pla(k));
  for (const sx of [-1, 1]) { mesh(new THREE.CylinderGeometry(.08, .08, .06, 18), dark(), [sx * .15, .08, 0], g, { r: [0, 0, Math.PI / 2] }); mesh(new THREE.CylinderGeometry(.04, .04, .065, 12), c, [sx * .15, .08, 0], g, { r: [0, 0, Math.PI / 2] }); }
  mesh(new RoundedBoxGeometry(.28, .26, .2, 2, .04), a, [0, .26, 0], g); mesh(new THREE.CylinderGeometry(.035, .035, .05, 12), c, [0, .27, .105], g, { r: [Math.PI / 2, 0, 0] });
  for (const sx of [-1, 1]) { const arm = grp(g, sx * .17, .33, 0); arm.rotation.z = sx * .5; mesh(new THREE.CylinderGeometry(.03, .03, .2, 10), b, [0, -.09, 0], arm); mesh(new THREE.SphereGeometry(.045, 12, 8), c, [0, -.2, 0], arm); }
  mesh(new THREE.CylinderGeometry(.04, .05, .05, 12), b, [0, .415, 0], g);
  mesh(new RoundedBoxGeometry(.3, .2, .22, 3, .06), b, [0, .53, 0], g);
  for (const sx of [-1, 1]) mesh(new THREE.SphereGeometry(.035, 12, 8), glow('#8DF5FF', 1.4), [sx * .07, .55, .11], g, { cast: false });
  mesh(new THREE.CylinderGeometry(.008, .008, .1, 6), dark(), [0, .68, 0], g); mesh(new THREE.SphereGeometry(.03, 10, 8), c, [0, .74, 0], g);
  return g;
}
function mugObj(par, x, y, z, s, col, ry = 0) {
  const g = grp(par, x, y, z, ry, s), P = [[0, 0], [.12, 0], [.13, .02], [.13, .26], [.115, .26], [.105, .03], [0, .03]].map(([a, b]) => new THREE.Vector2(a, b));
  mesh(new THREE.LatheGeometry(P, 36), pla(col, { side: THREE.DoubleSide }), [0, 0, 0], g); mesh(new THREE.TorusGeometry(.065, .018, 8, 20, Math.PI), pla(col), [.13, .14, 0], g, { r: [0, 0, -Math.PI / 2] });
  return g;
}
function calipers(par, x, y, z, ry, s = 1) {
  const g = grp(par, x, y, z, ry, s), st = steel();
  mesh(new THREE.BoxGeometry(.9, .014, .055), st, [.05, .007, 0], g);
  mesh(new THREE.BoxGeometry(.05, .014, .24), st, [-.38, .007, -.1], g); mesh(new THREE.BoxGeometry(.035, .014, .1), st, [-.38, .007, .07], g);
  const sl = grp(g, -.12, 0, 0); mesh(new RoundedBoxGeometry(.2, .035, .1, 2, .012), sm('#2E3340', { roughness: .4 }), [.03, .02, .01], sl); mesh(new THREE.BoxGeometry(.04, .014, .22), st, [-.07, .007, -.1], sl);
  const lcd = ctex(64, 24, (c, w, h) => { c.fillStyle = '#BFD9C6'; c.fillRect(0, 0, w, h); c.fillStyle = '#1C2A22'; c.font = '700 18px monospace'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('25.0', w / 2, h / 2 + 1); });
  mesh(new THREE.PlaneGeometry(.12, .045), new THREE.MeshBasicMaterial({ map: lcd, color: new THREE.Color(1.1, 1.1, 1.1) }), [.04, .039, .015], sl, { r: [-Math.PI / 2, 0, 0], cast: false });
  return g;
}
// arbres fets de formes bàsiques impreses (con + cilindre, piruleta, avet de tres pisos); geomètrics a l'estudi
function primTree(par, x, y, z, s, R, cols, geo) {
  const g = grp(par, x, y, z, R() * 6, s), c = pla(cols[Math.floor(R() * cols.length)], { roughness: .45, flatShading: !!geo }), tr = pla(geo ? '#8B95A8' : '#C08A5A'), k = Math.floor(R() * 3);
  mesh(new THREE.CylinderGeometry(.04, .05, .36, 12), tr, [0, .18, 0], g);
  if (geo) { if (k === 0) mesh(new THREE.IcosahedronGeometry(.26, 0), c, [0, .52, 0], g); else if (k === 1) mesh(new THREE.OctahedronGeometry(.27, 0), c, [0, .58, 0], g, { s: [1, 1.35, 1] }); else mesh(new THREE.ConeGeometry(.26, .62, 6), c, [0, .6, 0], g); }
  else if (k === 0) { mesh(new THREE.ConeGeometry(.27, .56, 24), c, [0, .58, 0], g); }
  else if (k === 1) { mesh(new THREE.SphereGeometry(.25, 24, 16), c, [0, .55, 0], g); }
  else for (let i = 0; i < 3; i++) mesh(new THREE.ConeGeometry(.26 - i * .055, .3, 20), c, [0, .4 + i * .17, 0], g);
  return g;
}
// pantalla de CAD sobre un peu (o.kind: cad, codi, llescador)
const SCRTEX = {};
function screenTex(kind, col) {
  const k = kind + col; if (SCRTEX[k]) return SCRTEX[k];
  return SCRTEX[k] = ctex(512, 320, (g, w, h) => {
    g.fillStyle = '#121A33'; g.fillRect(0, 0, w, h); g.fillStyle = '#1C2647'; g.fillRect(0, 0, w, 26); for (let i = 0; i < 6; i++) { g.fillStyle = ['#FF6B5B', '#FFC531', '#3CC47C'][i % 3]; g.beginPath(); g.arc(16 + i * 22, 13, 6, 0, 7); g.fill(); }
    if (kind === 'codi') { const C = ['#FF79C6', '#8BE9FD', '#F1FA8C', '#50FA7B', '#BD93F9', '#FFB86C']; let y = 44; for (let i = 0; i < 12; i++) { g.fillStyle = '#4B5884'; g.fillRect(10, y, 18, 8); let x = 40 + (i % 4 > 1 ? 24 : 0); for (let j = 0; j < 2 + (i * 7) % 4; j++) { const ww = 30 + ((i * 13 + j * 29) % 90); g.fillStyle = C[(i + j) % C.length]; g.fillRect(x, y, ww, 9); x += ww + 12; } y += 22; } }
    else {
      g.strokeStyle = 'rgba(120,150,220,.25)'; g.lineWidth = 1; for (let i = 0; i < 16; i++) { g.beginPath(); g.moveTo(i * 32, 26); g.lineTo(i * 32, h); g.stroke(); } for (let i = 1; i < 10; i++) { g.beginPath(); g.moveTo(0, 26 + i * 32); g.lineTo(w, 26 + i * 32); g.stroke(); }
      const cx = w * .42, cy = h * .58;
      if (kind === 'llescador') { for (let i = 0; i < 22; i++) { const r = 50 + 30 * Math.sin(i / 22 * 3.2 + .3); g.fillStyle = i < 15 ? col : 'rgba(255,255,255,.18)'; g.fillRect(cx - r, cy + 90 - i * 8, r * 2, 6); } g.fillStyle = '#2A3560'; g.fillRect(w * .76, 40, w * .2, h - 60); g.fillStyle = col; g.fillRect(w * .78, h - 40, w * .16 * .7, 10); }
      else { g.strokeStyle = col; g.lineWidth = 3; g.shadowColor = col; g.shadowBlur = 8; const n = 12; g.beginPath(); for (let t = 0; t <= n * 4; t++) { const a = t / (n * 4) * Math.PI * 2, rr = t % 4 < 2 ? 92 : 74; t ? g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * .55) : g.moveTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * .55); } g.stroke();
        g.beginPath(); g.ellipse(cx, cy, 24, 13, 0, 0, 7); g.stroke(); g.beginPath(); for (let t = 0; t <= n * 4; t++) { const a = t / (n * 4) * Math.PI * 2, rr = t % 4 < 2 ? 92 : 74; t ? g.lineTo(cx + Math.cos(a) * rr, cy + 26 + Math.sin(a) * rr * .55) : g.moveTo(cx + Math.cos(a) * rr, cy + 26 + Math.sin(a) * rr * .55); } g.globalAlpha = .45; g.stroke(); g.globalAlpha = 1; g.shadowBlur = 0;
        g.lineWidth = 3; for (const [c, dx, dy] of [['#FF5A5A', 60, 0], ['#3CC47C', 0, -60], ['#3D8BFF', -42, 30]]) { g.strokeStyle = c; g.beginPath(); g.moveTo(40, h - 40); g.lineTo(40 + dx, h - 40 + dy); g.stroke(); }
        g.fillStyle = '#2A3560'; g.fillRect(w * .76, 40, w * .2, h - 60); for (let i = 0; i < 5; i++) { g.fillStyle = '#4B5884'; g.fillRect(w * .78, 60 + i * 44, w * .16, 6); g.fillStyle = ['#FF79C6', '#8BE9FD', '#FFC531', '#50FA7B', '#BD93F9'][i]; g.fillRect(w * .78 + (i * 37 % 60), 55 + i * 44, 12, 16); } }
    }
  });
}
function cadScreen(par, x, y, z, ry, s = 1, kind = 'cad', col = '#FF5FB0') {
  const g = grp(par, x, y, z, ry, s), d = sm('#22283A', { roughness: .4, metalness: .3 });
  mesh(new THREE.CylinderGeometry(.16, .19, .03, 24), d, [0, .015, 0], g); mesh(new THREE.BoxGeometry(.05, .5, .04), steel(), [0, .27, -.03], g);
  mesh(new RoundedBoxGeometry(.98, .62, .05, 2, .025), d, [0, .78, 0], g);
  mesh(new THREE.PlaneGeometry(.92, .56), new THREE.MeshBasicMaterial({ map: screenTex(kind, col), color: new THREE.Color(1.15, 1.15, 1.15) }), [0, .78, .027], g, { cast: false });
  return g;
}
function workbench(par, x, y, z, ry, s = 1, o = {}) {
  const g = grp(par, x, y, z, ry, s), wood = new THREE.MeshStandardMaterial({ map: woodTex(), roughness: .6 }), leg = sm('#3A4152', { roughness: .4, metalness: .45 });
  mesh(new THREE.BoxGeometry(1.15, .06, .55), [sm('#B57C45'), sm('#B57C45'), wood, sm('#B57C45'), sm('#C68A50'), sm('#B57C45')], [0, .5, 0], g);
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesh(new THREE.BoxGeometry(.05, .47, .05), leg, [a * .52, .235, b * .22], g);
  mesh(new THREE.BoxGeometry(1.05, .03, .46), leg, [0, .13, 0], g);
  for (let i = 0; i < 3; i++) spool(g, -.3 + i * .3, .145, 0, FIL[(i * 3 + (o.k || 0)) % FIL.length], { flat: true, s: .95 });
  calipers(g, .25, .53, .1, -.25, .55);
  if (o.pro) { mesh(new RoundedBoxGeometry(.5, .012, .36, 1, .005), sm('#2B63C9', { roughness: .8 }), [-.22, .536, 0], g, { r: [0, .12, 0], cast: false }); mesh(new THREE.CylinderGeometry(.012, .012, .3, 8), pla('#FFC531'), [-.1, .55, .08], g, { r: [0, .4, Math.PI / 2] }); }
  else { gearObj(g, -.3, .53, -.05, .09, 10, FIL[(o.k || 0) % FIL.length], { flat: true, d: .03 }); castleObj(g, -.08, .53, -.08, .32, FIL[((o.k || 0) + 4) % FIL.length]); }
  mesh(new RoundedBoxGeometry(.22, .1, .12, 2, .02), pla('#E2574C'), [.38, .58, -.14], g); mesh(new THREE.BoxGeometry(.12, .02, .02), dark(), [.38, .64, -.14], g);
  return g;
}
let WOODTEX = null;
const woodTex = () => WOODTEX || (WOODTEX = ctex(256, 128, (g, w, h) => { g.fillStyle = '#D9A066'; g.fillRect(0, 0, w, h); for (let i = 0; i < 6; i++) { g.fillStyle = i % 2 ? '#CF9459' : '#DDA86F'; g.fillRect(0, i * h / 6, w, h / 6 - 1.5); g.fillStyle = 'rgba(120,70,30,.35)'; g.fillRect(0, i * h / 6 + h / 6 - 1.5, w, 1.5); } g.strokeStyle = 'rgba(140,85,40,.2)'; for (let i = 0; i < 40; i++) { const y = (i * 37) % h; g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(w * .3, y + 3, w * .6, y - 3, w, y + 1); g.stroke(); } }));
// fletxa (per als eixos, les cotes i els girs)
function arrow(par, from, dir, len, col, r = .045) {
  const g = new THREE.Group(); g.position.copy(from); g.quaternion.setFromUnitVectors(UP, dir.clone().normalize()); par.add(g);
  mesh(new THREE.CylinderGeometry(r, r, len - r * 5, 14), col, [0, (len - r * 5) / 2, 0], g); mesh(new THREE.ConeGeometry(r * 2.6, r * 5.5, 18), col, [0, len - r * 2.75, 0], g);
  return g;
}
function podium(par, x, y, z, ry, s, cols) {
  const g = grp(par, x, y, z, ry, s);
  [[0, .36, cols[0]], [-.46, .24, cols[1]], [.46, .16, cols[2]]].forEach(([px, h, c], i) => { mesh(new RoundedBoxGeometry(.44, h, .44, 2, .03), pla(c), [px, h / 2, 0], g); const n = ctex(64, 64, (cc, w) => { cc.fillStyle = '#FFFFFF'; cc.font = '900 48px system-ui,sans-serif'; cc.textAlign = 'center'; cc.textBaseline = 'middle'; cc.fillText(String(i + 1), w / 2, w / 2 + 3); }); mesh(new THREE.PlaneGeometry(.2, .2), new THREE.MeshBasicMaterial({ map: n, transparent: true }), [px, h / 2, .222], g, { cast: false }); });
  return g;
}
function easel(par, x, y, z, ry, s, draw) {
  const g = grp(par, x, y, z, ry, s), w = sm('#B57C45', { roughness: .7 });
  for (const sx of [-1, 1]) { const l = mesh(new THREE.BoxGeometry(.04, 1.05, .04), w, [sx * .25, .5, 0], g); l.rotation.z = -sx * .12; }
  const b = mesh(new THREE.BoxGeometry(.04, 1.0, .04), w, [0, .48, -.2], g); b.rotation.x = -.3;
  mesh(new THREE.BoxGeometry(.66, .03, .08), w, [0, .34, .05], g);
  mesh(new THREE.BoxGeometry(.6, .46, .015), sm('#FFFFFF', { roughness: .8 }), [0, .62, .04], g, { r: [-.08, 0, 0] });
  mesh(new THREE.PlaneGeometry(.56, .42), new THREE.MeshBasicMaterial({ map: ctex(256, 192, draw) }), [0, .62, .049], g, { r: [-.08, 0, 0], cast: false });
  return g;
}
const faceCam = (x, z) => Math.atan2(-x, 21 - z) * .85;   // gira una peça cap a la càmera de l'illa
// esbós a llapis (per als cavallets): una peça amb cotes
const sketch = (kind) => (g, w, h) => { g.fillStyle = '#FBFAF6'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(80,110,170,.25)'; g.lineWidth = 1; for (let i = 0; i < w; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); } for (let i = 0; i < h; i += 16) { g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  g.strokeStyle = '#3A3F55'; g.lineWidth = 3; g.lineCap = g.lineJoin = 'round';
  if (kind === 'cup') { g.beginPath(); g.moveTo(80, 50); g.lineTo(90, 160); g.lineTo(166, 160); g.lineTo(176, 50); g.stroke(); g.beginPath(); g.ellipse(128, 50, 48, 12, 0, 0, 7); g.stroke(); for (const x of [104, 124, 146]) { g.beginPath(); g.moveTo(x, 50); g.lineTo(x + 6, 18); g.stroke(); } }
  else { g.strokeRect(70, 70, 116, 80); g.beginPath(); g.moveTo(70, 70); g.lineTo(100, 44); g.lineTo(216, 44); g.lineTo(186, 70); g.moveTo(216, 44); g.lineTo(216, 124); g.lineTo(186, 150); g.stroke(); }
  g.strokeStyle = '#E2574C'; g.lineWidth = 2; g.beginPath(); g.moveTo(70, 178); g.lineTo(186, 178); g.stroke(); for (const x of [70, 186]) { g.beginPath(); g.moveTo(x, 172); g.lineTo(x, 184); g.stroke(); }
  g.fillStyle = '#E2574C'; g.font = '700 16px system-ui,sans-serif'; g.textAlign = 'center'; g.fillText('80 mm', 128, 172); };

/* les fites de cada unitat (Tech 3D): una peça grossa al racó del fons que lliga amb el tema de la unitat */
const FABHERO = {
  // N1·U1 l'espai 3D: els eixos (x vermell, y verd, z blau cap amunt, com als programes de CAD) i una primera escultura
  async eixos(X, at) { const { sc, pl, top } = X, q = pl.best(1.0, 2.1, { at }); if (!q) return;
    const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1]) + .45, 1.3);
    mesh(new THREE.CylinderGeometry(.62, .68, .12, 48), pla('#F4F1FA'), [0, .06, 0], g); mesh(new THREE.TorusGeometry(.65, .025, 8, 60), pla('#7C5CFF'), [0, .1, 0], g, { r: [Math.PI / 2, 0, 0] });
    const o = new THREE.Vector3(-.2, .14, .15);
    arrow(g, o, new THREE.Vector3(1, 0, 0), .78, pla('#FF5A5A'), .035); arrow(g, o, new THREE.Vector3(0, 0, -1), .78, pla('#3CC47C'), .035); arrow(g, o, new THREE.Vector3(0, 1, 0), 1.35, pla('#3D8BFF'), .035);
    mesh(new THREE.SphereGeometry(.08, 20, 14), pla('#FFFFFF'), [o.x, o.y, o.z], g);
    mesh(new RoundedBoxGeometry(.32, .32, .32, 3, .04), pla('#FFB443'), [.25, .3, -.25], g); mesh(new THREE.CylinderGeometry(.11, .11, .28, 24), pla('#2FB5A6'), [.25, .6, -.25], g); mesh(new THREE.SphereGeometry(.12, 20, 14), pla('#E5489A'), [.25, .86, -.25], g); },
  // N1·U2 formes bàsiques: el castell (el projecte) i formes grosses
  async formes(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.9, 1.6, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])); mesh(new THREE.CylinderGeometry(.85, .9, .08, 48), pla('#EDE8FA'), [0, .04, 0], g); castleObj(g, 0, .08, 0, 2.3, '#9B7CFF'); }
    const q2 = pl.best(.7, .6, { at: at2, m: .5 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .3);
      mesh(new RoundedBoxGeometry(.34, .34, .34, 2, .03), pla('#FFB443'), [-.32, .17, -.1], g); mesh(new THREE.CylinderGeometry(.16, .16, .4, 32), pla('#2FB5A6'), [.05, .2, -.25], g); mesh(new THREE.ConeGeometry(.18, .42, 32), pla('#FFE066'), [.36, .21, .05], g);
      mesh(new THREE.SphereGeometry(.17, 28, 18), pla('#E5489A'), [-.05, .17, .22], g); mesh(new THREE.ConeGeometry(.2, .32, 4), pla('#3D8BFF', { flatShading: true }), [-.42, .16, .32], g, { r: [0, Math.PI / 4, 0] }); } },
  // N1·U3 moure, girar i escalar: el robot de peces (projecte), el peu de rei gegant i el regle
  async mesura(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.8, 1.9, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])); mesh(new THREE.CylinderGeometry(.7, .75, .08, 48), pla('#EDE8FA'), [0, .04, 0], g); robotObj(g, 0, .08, 0, 0, 2.2, ['#7C5CFF', '#FFFFFF', '#FFB443']);
      const rt = mesh(new THREE.TorusGeometry(.62, .03, 8, 48, Math.PI * 1.4), pla('#FF5A5A'), [0, .12, 0], g, { r: [Math.PI / 2, 0, .3] }); void rt; mesh(new THREE.ConeGeometry(.07, .16, 14), pla('#FF5A5A'), [Math.cos(1.7) * .62, .12, Math.sin(1.7) * .62], g, { r: [Math.PI / 2, 0, -1.7 + Math.PI] }); }
    const q2 = pl.best(.6, .4, { at: at2, m: .4 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], -.2); calipers(g, 0, 0, 0, 0, 1.4); mesh(new RoundedBoxGeometry(.22, .22, .22, 2, .02), pla('#3CC47C'), [-.25, .11, -.15], g);
      const rul = ctex(256, 32, (c, w, h) => { c.fillStyle = '#FFE066'; c.fillRect(0, 0, w, h); c.fillStyle = '#2A2F3A'; for (let i = 0; i <= 50; i++) c.fillRect(i * w / 50, 0, 1.5, i % 10 ? (i % 5 ? 7 : 11) : 16); }); mesh(new THREE.BoxGeometry(1.0, .02, .12), [pla('#E8C84A'), pla('#E8C84A'), new THREE.MeshStandardMaterial({ map: rul, roughness: .5 }), pla('#E8C84A'), pla('#E8C84A'), pla('#E8C84A')], [.05, .01, .32], g); } },
  // N1·U4 construir: la casa del futur (simètrica, de peces) i una columnata duplicada
  async casa(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.9, 1.5, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])), wh = pla('#F7F6FB'), ac = pla('#7C5CFF'), gl = sm('#9FD8FF', { roughness: .08, metalness: .2, emissive: '#3A7FD0', emissiveIntensity: .25 });
      mesh(new THREE.CylinderGeometry(.85, .9, .08, 48), pla('#EDE8FA'), [0, .04, 0], g);
      mesh(new RoundedBoxGeometry(1.1, .5, .72, 2, .04), wh, [0, .33, 0], g); mesh(new RoundedBoxGeometry(.8, .38, .66, 2, .04), wh, [0, .77, -.04], g);
      mesh(new THREE.BoxGeometry(1.18, .05, .8), ac, [0, .6, 0], g); mesh(new THREE.BoxGeometry(.88, .05, .74), ac, [0, .985, -.04], g);
      mesh(new THREE.TorusGeometry(.13, .03, 10, 32), ac, [0, .78, .3], g); mesh(new THREE.CircleGeometry(.12, 32), gl, [0, .78, .295], g);
      for (const sx of [-1, 1]) { mesh(new THREE.BoxGeometry(.26, .24, .02), gl, [sx * .34, .33, .362], g); mesh(new THREE.BoxGeometry(.16, .2, .02), gl, [sx * .27, .78, .29], g); for (let i = 0; i < 2; i++) mesh(new THREE.BoxGeometry(.2, .015, .14), sm('#24407A', { roughness: .25, metalness: .4 }), [sx * .2, 1.06, -.15 + i * .18], g, { r: [-.4, 0, 0] }); }
      mesh(new THREE.BoxGeometry(.2, .3, .02), pla('#FFB443'), [0, .23, .362], g); mesh(new THREE.SphereGeometry(.13, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), gl, [0, 1.01, -.2], g); }
    const q2 = pl.best(.7, .7, { at: at2, m: .45 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .25); for (let i = 0; i < 5; i++) { mesh(new THREE.CylinderGeometry(.05, .05, .5, 16), pla('#FFFFFF'), [-.48 + i * .24, .25, 0], g); mesh(new THREE.BoxGeometry(.13, .04, .13), pla('#2FB5A6'), [-.48 + i * .24, .02, 0], g); } mesh(new RoundedBoxGeometry(1.15, .07, .16, 2, .02), pla('#2FB5A6'), [0, .53, 0], g); } },
  // N1·U5 forats: el clauer gegant (amb anella), la tassa i un bloc foradat
  async forats(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.8, 1.5, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])); mesh(new THREE.CylinderGeometry(.7, .75, .08, 48), pla('#EDE8FA'), [0, .04, 0], g);
      const up = grp(g, 0, .9, 0); up.rotation.x = Math.PI / 2; keyringObj(up, 0, 0, 0, 2.6, '#7C5CFF', 0); mesh(new THREE.BoxGeometry(.5, .14, .2), pla('#FFFFFF'), [0, .15, 0], g); mesh(new THREE.BoxGeometry(.08, .55, .08), steel(), [.55, .4, -.06], g); }
    const q2 = pl.best(.7, .6, { at: at2, m: .45 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .2); mugObj(g, -.25, 0, 0, 1.7, '#FFB443', .6);
      const sh = new THREE.Shape(); sh.moveTo(-.3, 0); sh.lineTo(.3, 0); sh.lineTo(.3, .4); sh.lineTo(-.3, .4); sh.closePath(); for (const [hx, hy, hr] of [[-.15, .12, .07], [.12, .26, .08], [.18, .08, .045], [-.12, .3, .045]]) { const h = new THREE.Path(); h.absarc(hx, hy, hr, 0, Math.PI * 2, true); sh.holes.push(h); }
      mesh(new THREE.ExtrudeGeometry(sh, { depth: .26, bevelEnabled: true, bevelThickness: .015, bevelSize: .015, bevelSegments: 2 }), pla('#FFE066'), [.32, .015, -.1], g, { r: [0, -.35, 0] }); } },
  // N1·U6 del model a l'objecte: una impressora grossa imprimint un gerro, el prestatge de bobines i la bola STL
  async impressio(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.85, 2.1, { at }); if (q) printer(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.45, { acc: '#FF6B5B', fil: '#2FB5A6', obj: 'vase', ph: .4, body: '#FFFFFF', hx: 0 });
    const q2 = pl.best(.7, .9, { at: at2, m: .45 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1])), fr = sm('#3A4152', { metalness: .45, roughness: .4 });
      for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.04, .85, .3), fr, [sx * .5, .425, 0], g); for (const y of [.05, .45]) mesh(new THREE.BoxGeometry(1.04, .03, .32), fr, [0, y, 0], g);
      for (let r = 0; r < 2; r++) for (let i = 0; i < 3; i++) spool(g, -.3 + i * .3, .065 + r * .4, 0, FIL[(r * 3 + i * 2) % FIL.length], { s: .85 });
      const st = mesh(new THREE.IcosahedronGeometry(.22, 1), pla('#FFFFFF', { flatShading: true }), [.0, 1.15, 0], g); const ed = new THREE.LineSegments(new THREE.EdgesGeometry(st.geometry), new THREE.LineBasicMaterial({ color: '#7C5CFF' })); st.add(ed); mesh(new THREE.CylinderGeometry(.06, .08, .1, 16), fr, [0, .9, 0], g); } },
  // N1·U7 dissenyar per a persones: el porta-llapis gegant (el projecte) i el cavallet amb l'esbós
  async persones(X, at, at2) { const { sc, pl, top } = X, q = pl.best(.75, 1.6, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])); mesh(new THREE.CylinderGeometry(.66, .7, .08, 48), pla('#EDE8FA'), [0, .04, 0], g);
      mesh(new THREE.CylinderGeometry(.42, .42, .75, 6), pla('#2FB5A6', { flatShading: true }), [0, .455, 0], g); mesh(new THREE.CylinderGeometry(.36, .36, .01, 6), sm('#14302C'), [0, .835, 0], g);
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, pg = grp(g, Math.cos(a) * .18, .5, Math.sin(a) * .18); pg.rotation.set(Math.sin(a) * .22, 0, -Math.cos(a) * .22); const pc = FIL[(i * 2 + 1) % FIL.length];
        mesh(new THREE.CylinderGeometry(.06, .06, .85, 6), pla(pc, { flatShading: true }), [0, .42, 0], pg); mesh(new THREE.ConeGeometry(.06, .14, 6), pla('#F2D2A2'), [0, .92, 0], pg); mesh(new THREE.ConeGeometry(.02, .05, 6), sm('#3A3F55'), [0, .975, 0], pg); } }
    const q2 = pl.best(.5, 1.0, { at: at2 }); if (q2) easel(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1]), 1.05, sketch('cup')); },
  // N1·U8 i N2·U8 el projecte final: el podi amb el trofeu, el diploma i les banderetes
  async trofeu(X, at, at2) { const { sc, pl, top, color } = X, pro = X.world === 'estudi', q = pl.best(.85, 1.7, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])); podium(g, 0, 0, 0, 0, 1.25, [color, '#2FB5A6', '#FFB443']); trophy(g, 0, .45, 0, 0, .85); }
    const q2 = pl.best(.5, 1.0, { at: at2 }); if (q2) easel(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1]), 1.05, (c, w, h) => { c.fillStyle = '#FFF8E8'; c.fillRect(0, 0, w, h); c.strokeStyle = color; c.lineWidth = 8; c.strokeRect(10, 10, w - 20, h - 20); c.fillStyle = '#C9A13A'; c.beginPath(); c.arc(w / 2, h * .62, 30, 0, 7); c.fill(); c.fillStyle = '#FFE38A'; c.beginPath(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 9 : 22; i ? c.lineTo(w / 2 + Math.cos(a) * r, h * .62 + Math.sin(a) * r) : c.moveTo(w / 2 + Math.cos(a) * r, h * .62 + Math.sin(a) * r); } c.fill(); c.fillStyle = '#3A3F55'; for (let i = 0; i < 3; i++) c.fillRect(w * .2 + (i % 2) * 20, 40 + i * 18, w * .6 - (i % 2) * 40, 8); });
    const a = pl.find(.12, 1.3, { tries: 500 }), b = a && pl.find(.12, 1.3, { tries: 500, zone: (x, z) => Math.hypot(x - a[0], z - a[1]) > 1.2 && Math.hypot(x - a[0], z - a[1]) < 2.4 });
    if (a && b) { const pm = sm(pro ? '#C4CBD6' : '#5B4636', { metalness: pro ? .6 : 0, roughness: .5 }); for (const p of [a, b]) mesh(new THREE.CylinderGeometry(.025, .03, 1.2, 8), pm, [p[0], top + .6, p[1]], sc); bunting(sc, new THREE.Vector3(a[0], top + 1.18, a[1]), new THREE.Vector3(b[0], top + 1.18, b[1]), [color, '#FFC531', '#2FB5A6', '#FF6B5B', '#FFFFFF'], .2); } },
  // N2·U1 modelar amb instruccions: el monument (4+ primitives) i la pantalla amb el programa
  async codi(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.75, 2.0, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])), wh = pla('#F4F6FA');
      mesh(new RoundedBoxGeometry(1.0, .16, 1.0, 2, .03), sm('#8C96A8', { metalness: .5, roughness: .35 }), [0, .08, 0], g); mesh(new RoundedBoxGeometry(.7, .2, .7, 2, .03), wh, [0, .26, 0], g);
      mesh(new THREE.CylinderGeometry(.18, .22, .9, 32), wh, [0, .81, 0], g); mesh(new THREE.TorusGeometry(.24, .05, 12, 40), pla(color), [0, 1.0, 0], g, { r: [Math.PI / 2, 0, 0] }); mesh(new THREE.ConeGeometry(.2, .3, 32), pla(color), [0, 1.41, 0], g); mesh(new THREE.SphereGeometry(.1, 20, 14), pla('#FFC531', { metalness: .4, roughness: .3 }), [0, 1.62, 0], g); }
    const q2 = pl.best(.55, 1.2, { at: at2 }); if (q2) cadScreen(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1]), 1.2, 'codi', color); },
  // N2·U2 transformacions: el molí (aspes girades en patró) i un gir marcat amb una fletxa
  async moli(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.6, 2.1, { at }); if (q) { windmill(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.4); const g = grp(sc, q[0], top + .03, q[1]); mesh(new THREE.TorusGeometry(.75, .035, 8, 64, Math.PI * 1.5), pla(color), [0, 0, 0], g, { r: [Math.PI / 2, 0, 0] }); mesh(new THREE.ConeGeometry(.08, .2, 16), pla(color), [0, 0, -.75], g, { r: [0, 0, -Math.PI / 2] }); }
    const q2 = pl.best(.55, .8, { at: at2, m: .4 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .3); for (let i = 0; i < 4; i++) { const p = grp(g, 0, .02, 0); p.rotation.y = i * Math.PI / 2 * .35; mesh(new RoundedBoxGeometry(.5, .08 + i * .06, .14, 2, .02), pla(i % 2 ? color : '#F4F6FA'), [.18, .04 + i * .1, 0], p); } } },
  // N2·U3 operacions booleanes: el dau (cub ∩ esfera, amb els punts buidats), una lent i una unió
  async dau(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.7, 1.4, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1]) + .5), S = .78, pip = sm('#2A303D', { roughness: .5 });
      mesh(new THREE.CylinderGeometry(.66, .7, .1, 48), sm('#8C96A8', { metalness: .5, roughness: .35 }), [0, .05, 0], g);
      const d = grp(g, 0, .1 + S / 2, 0); d.rotation.set(.0, .0, 0); mesh(new RoundedBoxGeometry(S, S, S, 5, .17), pla('#F7F7FA', { roughness: .3 }), [0, 0, 0], d);
      const F = [[[0, 1, 0], [[0, 0]]], [[0, 0, 1], [[-.2, .2], [.2, -.2]]], [[1, 0, 0], [[-.2, .2], [0, 0], [.2, -.2]]], [[-1, 0, 0], [[-.2, .2], [.2, .2], [-.2, -.2], [.2, -.2]]], [[0, 0, -1], [[-.2, .2], [.2, .2], [0, 0], [-.2, -.2], [.2, -.2]]], [[0, -1, 0], [[-.2, .2], [.2, .2], [-.2, 0], [.2, 0], [-.2, -.2], [.2, -.2]]]];
      for (const [n, ps] of F) for (const [a, b] of ps) { const v = new THREE.Vector3(...n), t1 = Math.abs(n[1]) ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0), t2 = v.clone().cross(t1); const p = v.clone().multiplyScalar(S / 2 - .005).addScaledVector(t1, a).addScaledVector(t2, b); mesh(new THREE.SphereGeometry(.065, 16, 10), n[1] === 1 ? pla(color) : pip, [p.x, p.y, p.z], d, { s: [Math.abs(n[0]) ? .35 : 1, Math.abs(n[1]) ? .35 : 1, Math.abs(n[2]) ? .35 : 1] }); } }
    const q2 = pl.best(.55, .6, { at: at2, m: .4 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .3); mesh(new THREE.SphereGeometry(.24, 32, 20), pla('#2FB5A6'), [-.22, .12, 0], g, { s: [1, .45, 1] }); mesh(new RoundedBoxGeometry(.3, .3, .3, 2, .02), pla(color), [.22, .15, -.05], g); mesh(new THREE.SphereGeometry(.2, 28, 18), pla(color), [.36, .32, .08], g); } },
  // N2·U4 variables i paràmetres: caixes a mida (amb tapa) de mides diferents, cotes i el tauler de controls lliscants
  async caixa(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.8, 1.2, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])), m = pla(color), t = .035;
      const box = (p, w, h, d, mm) => { mesh(new THREE.BoxGeometry(w, t, d), mm, [p[0], p[1] + t / 2, p[2]], g); for (const s of [-1, 1]) { mesh(new THREE.BoxGeometry(w, h, t), mm, [p[0], p[1] + h / 2, p[2] + s * (d / 2 - t / 2)], g); mesh(new THREE.BoxGeometry(t, h, d), mm, [p[0] + s * (w / 2 - t / 2), p[1] + h / 2, p[2]], g); } };
      box([-.15, 0, 0], .8, .45, .6, m); mesh(new THREE.BoxGeometry(.84, .04, .64), pla('#F4F6FA'), [.55, .32, -.05], g, { r: [0, .3, 1.15] });
      box([.5, 0, .45], .34, .22, .28, pla('#2FB5A6')); box([.75, 0, .05], .22, .16, .2, pla('#FFC531'));
      const wh = pla('#FFFFFF'); arrow(g, new THREE.Vector3(-.15, .62, .32), new THREE.Vector3(1, 0, 0), .4, wh, .015); arrow(g, new THREE.Vector3(-.15, .62, .32), new THREE.Vector3(-1, 0, 0), .4, wh, .015); }
    const q2 = pl.best(.5, .8, { at: at2 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1])); const fr = sm('#2A303D', { roughness: .4, metalness: .3 });
      for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.04, .55, .04), fr, [sx * .3, .27, -.05], g); const pnl = grp(g, 0, .6, 0); pnl.rotation.x = -.65; mesh(new RoundedBoxGeometry(.74, .46, .04, 2, .02), fr, [0, 0, 0], pnl);
      for (let i = 0; i < 3; i++) { mesh(new THREE.BoxGeometry(.56, .025, .01), sm('#5B6584'), [0, .13 - i * .13, .025], pnl); mesh(new RoundedBoxGeometry(.07, .07, .04, 2, .015), pla([color, '#2FB5A6', '#FFC531'][i]), [-.2 + i * .17, .13 - i * .13, .04], pnl); } } },
  // N2·U5 bucles i patrons: dos engranatges grossos que encaixen i una placa amb una graella de forats
  async engranatge(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.85, 1.7, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])), fr = sm('#3A4152', { metalness: .5, roughness: .35 });
      mesh(new RoundedBoxGeometry(1.5, .12, .5, 2, .03), fr, [0, .06, 0], g); mesh(new THREE.BoxGeometry(1.3, .9, .06), sm('#2A303D', { roughness: .4, metalness: .3 }), [0, .55, -.15], g);
      gearObj(g, -.3, .72, 0, .52, 16, color, { d: .1 }); gearObj(g, .43, .5, 0, .32, 10, '#2FB5A6', { d: .1, rz: .16 });
      for (const [x, y] of [[-.3, .72], [.43, .5]]) mesh(new THREE.CylinderGeometry(.05, .05, .3, 16), steel(), [x, y, -.05], g, { r: [Math.PI / 2, 0, 0] }); }
    const q2 = pl.best(.55, .5, { at: at2, m: .4 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .3), sh = new THREE.Shape(); sh.moveTo(-.4, -.3); sh.lineTo(.4, -.3); sh.lineTo(.4, .3); sh.lineTo(-.4, .3); sh.closePath();
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { const h = new THREE.Path(); h.absarc(-.3 + i * .2, -.2 + j * .2, .055, 0, Math.PI * 2, true); sh.holes.push(h); }
      const pg = new THREE.ExtrudeGeometry(sh, { depth: .08, bevelEnabled: true, bevelThickness: .01, bevelSize: .01, bevelSegments: 1 }); pg.rotateX(-Math.PI / 2); mesh(pg, pla('#FFC531'), [0, .01, 0], g); gearObj(g, .2, .1, .45, .15, 9, color, { flat: true, d: .05 }); } },
  // N2·U6 mòduls: la ciutat modular (torres fetes del mateix mòdul repetit)
  async ciutat(X, at, at2) { const { sc, pl, top, color, R } = X, q = pl.best(.95, 1.5, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1]));
      const win = ctex(64, 64, (c, w) => { c.fillStyle = '#F4F6FA'; c.fillRect(0, 0, w, w); c.fillStyle = '#6FA8E8'; c.fillRect(10, 14, 18, 30); c.fillRect(36, 14, 18, 30); c.fillStyle = 'rgba(255,255,255,.5)'; c.fillRect(10, 14, 18, 6); c.fillRect(36, 14, 18, 6); });
      mesh(new RoundedBoxGeometry(1.7, .06, 1.3, 2, .02), sm('#8C96A8', { metalness: .5, roughness: .35 }), [0, .03, 0], g); const CC = ['#F4F6FA', color, '#2FB5A6', '#FFC531'];
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { if (i === 1 && j === 2) continue; const hN = 1 + Math.floor(R() * 4) - (j === 2 ? 1 : 0), c = CC[(i + j * 2) % CC.length], wm = new THREE.MeshStandardMaterial({ map: win, color: c, roughness: .45 });
        for (let k = 0; k < Math.max(1, hN); k++) mesh(new RoundedBoxGeometry(.32, .2, .32, 2, .02), [wm, wm, pla(c), pla(c), wm, wm], [-.5 + i * .5, .16 + k * .21, -.4 + j * .4], g);
        mesh(i === 1 ? new THREE.ConeGeometry(.2, .2, 4) : new THREE.BoxGeometry(.34, .04, .34), pla(i === 1 ? color : '#5B6584', { flatShading: true }), [-.5 + i * .5, .06 + Math.max(1, hN) * .21 + (i === 1 ? .1 : 0), -.4 + j * .4], g, i === 1 ? { r: [0, Math.PI / 4, 0] } : {}); } }
    const q2 = pl.best(.5, .9, { at: at2 }); if (q2) cadScreen(sc, q2[0], top, q2[1], faceCam(q2[0], q2[1]), 1.0, 'cad', color); },
  // N2·U7 enginyeria i fabricació: la frontissa (dues fulles amb tolerància), peces que encaixen i suports d'un voladís
  async frontissa(X, at, at2) { const { sc, pl, top, color } = X, q = pl.best(.8, 1.4, { at }); if (q) { const g = grp(sc, q[0], top, q[1], faceCam(q[0], q[1])), a = pla(color), b = pla('#F4F6FA');
      mesh(new THREE.CylinderGeometry(.75, .8, .1, 48), sm('#8C96A8', { metalness: .5, roughness: .35 }), [0, .05, 0], g);
      const ax = grp(g, 0, .55, 0); for (let i = 0; i < 5; i++) mesh(new THREE.CylinderGeometry(.09, .09, .16, 24), i % 2 ? b : a, [0, -.36 + i * .18, 0], ax);
      mesh(new THREE.CylinderGeometry(.03, .03, .98, 12), steel(), [0, 0, 0], ax);
      const l1 = grp(ax, 0, 0, 0); l1.rotation.y = .35; mesh(new RoundedBoxGeometry(.62, .86, .06, 2, .02), a, [.38, 0, 0], l1);
      const l2 = grp(ax, 0, 0, 0); l2.rotation.y = Math.PI - .55; mesh(new RoundedBoxGeometry(.62, .86, .06, 2, .02), b, [.38, 0, 0], l2);
      for (const L of [l1, l2]) for (const y of [-.25, .25]) mesh(new THREE.CylinderGeometry(.045, .045, .07, 16), sm('#2A303D'), [.45, y, 0], L, { r: [Math.PI / 2, 0, 0] }); }
    const q2 = pl.best(.6, .7, { at: at2, m: .45 }); if (q2) { const g = grp(sc, q2[0], top, q2[1], .25), m = pla('#2FB5A6'), sup = pla('#FFE6A8');
      mesh(new THREE.BoxGeometry(.18, .5, .3), m, [-.4, .25, 0], g); mesh(new THREE.BoxGeometry(.18, .5, .3), m, [.4, .25, 0], g); mesh(new THREE.BoxGeometry(.98, .08, .3), m, [0, .54, 0], g);
      for (let i = 0; i < 6; i++) { const z = mesh(new THREE.BoxGeometry(.012, .5, .26), sup, [-.25 + i * .1, .25, 0], g); z.rotation.z = (i % 2 ? 1 : -1) * .18; }
      mesh(new THREE.CylinderGeometry(.08, .08, .3, 20), pla(color), [.75, .15, .1], g); mesh(new THREE.CylinderGeometry(.06, .06, .14, 20), pla(color), [.75, .37, .1], g); } }
};

// decoració dels mons del taller 3D (fab: Nivell 1 · estudi: Nivell 2)
async function decorFab(X) {
  const { sc, R, pl, top, theme, P, color, seed } = X, pro = X.world === 'estudi', sideX = P[0].x > 0 ? 1 : -1;
  const back = [-sideX * 2.7, -4.25], midL = [sideX * 2.8, -1.1], midR = [-sideX * 2.8, 1.4];
  await (FABHERO[theme] || FABHERO.trofeu)(X, back, midR);
  // la Nuvi, la impressora amb ulls (sempre hi és), i una segona impressora
  { const q = pl.best(.82, 2.0, { at: midL }) || pl.best(.7, 1.8, { at: [sideX * 2.8, 2.6] }); if (q) printer(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.45, { face: true, acc: '#7C5CFF', fil: pro ? color : '#FFB443', obj: 'castle', ph: .2 }); }
  { const q = pl.find(.62, 1.6, { tries: 900, zone: (x, z) => z < 2.2 }); if (q) { if (pro) enclosedPrinter(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.15, { acc: color, fil: FIL[(seed + 4) % FIL.length] }); else printer(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.1, { acc: '#2FB5A6', fil: FIL[seed % FIL.length], obj: 'vase', ph: .26 }); } }
  // banc de treball (bobines a sota, peu de rei, peces), pantalles
  { const q = pl.find(.78, .9, { tries: 900 }); if (q) workbench(sc, q[0], top, q[1], faceCam(q[0], q[1]), 1.22, { k: seed, pro }); }
  for (let i = 0; i < (pro ? 2 : 1); i++) { const q = pl.find(.62, 1.4, { tries: 700 }); if (q) cadScreen(sc, q[0], top, q[1], faceCam(q[0], q[1]), pro ? 1.2 : 1.1, pro ? (i ? 'codi' : 'cad') : 'llescador', pro ? color : '#FFB443'); }
  if (pro) { const q = pl.find(.42, 1.0, { tries: 800, zone: (x, z) => z < 2.5 }); if (q) robotArm(sc, q[0], top, q[1], R() * 6, color); }
  // munts de bobines i una filera de bobines dretes
  for (let i = 0; i < 3; i++) { const q = pl.find(.26, .45); if (!q) break; const n = 1 + Math.floor(R() * 3); for (let k = 0; k < n; k++) spool(sc, q[0], top + k * .13, q[1], FIL[Math.floor(R() * FIL.length)], { flat: true, ry: R() * 6 }); }
  { const q = pl.find(.5, .45, { tries: 600 }); if (q) { const ry = faceCam(q[0], q[1]); for (let k = 0; k < 4; k++) spool(sc, q[0] + Math.cos(ry) * (k - 1.5) * .14, top, q[1] - Math.sin(ry) * (k - 1.5) * .14, FIL[(k * 3 + seed) % FIL.length], { ry: ry + Math.PI / 2, s: .9 }); } }
  // peces impreses escampades (engranatges, clauers, gerros, robots, castells, cubs)
  for (let i = 0; i < 10; i++) { const q = pl.find(.2, .4); if (!q) break; const c = FIL[(i * 3 + seed) % FIL.length], k = i % 6, ry = R() * 6;
    if (k === 0) gearObj(sc, q[0], top, q[1], .16, 10, c, { flat: true, d: .05, ry });
    else if (k === 1) keyringObj(sc, q[0], top, q[1], .8, c, ry);
    else if (k === 2) vaseObj(sc, q[0], top, q[1], .34, c);
    else if (k === 3) robotObj(sc, q[0], top, q[1], faceCam(q[0], q[1]), .6, [c, '#FFFFFF', '#FFB443']);
    else if (k === 4) castleObj(sc, q[0], top, q[1], .65, c);
    else mesh(new RoundedBoxGeometry(.2, .2, .2, 2, .025), pla(c), [q[0], top + .1, q[1]], sc, { r: [0, ry, 0] }); }
  // arbres de formes bàsiques (sobretot a les vores) i testos impresos amb plantes
  const TC = pro ? ['#2FB5A6', '#3CC47C', '#1E9A8E', '#5ED1A8'] : ['#3CC47C', '#7BD65A', '#2FB5A6', '#1FA463', '#9BE15D'];
  for (let i = 0, k = 0; i < (pro ? 12 : 16) && k < 900; k++) { const q = pl.find(.3, 1.0, { tries: 1, path: true }); if (!q) continue; if (edgeK(q[0], q[1]) < .5 && R() < .8) { pl.occ.pop(); continue; } primTree(sc, q[0], top, q[1], .95 + R() * .45, R, TC, pro); i++; }
  for (let i = 0; i < 4; i++) { const q = pl.find(.17, .5); if (!q) break; const g = grp(sc, q[0], top, q[1]); mesh(new THREE.CylinderGeometry(.13, .1, .2, pro ? 6 : 24), pla(pro ? '#F4F6FA' : FIL[(i * 4 + 1) % FIL.length], { flatShading: pro }), [0, .1, 0], g); await put(g, ['plant_bushDetailed', 'plant_bush', 'flower_purpleA', 'plant_bushLarge'][i], 0, .19, 0, { s: i === 2 ? 1.8 : .85, ry: R() * 6 }); }
  for (let i = 0; i < 26; i++) { const [x, z] = X.cells[Math.floor(R() * X.cells.length)], px = x + (R() - .5) * .9, pz = z + (R() - .5) * .9; if (pl.ok(px, pz, .08, .1)) await put(sc, R() < .7 ? 'grass' : 'grass_leafs', px, top, pz, { s: 1.05, ry: R() * 6, tint: { grass: pro ? '#3FA88C' : '#4CC27A', leafsGreen: pro ? '#2F9A80' : '#3CB86A' } }); }
  // la costa: roques, arbres i para-sols a la sorra, el moll i un veler amb la vela del color del curs
  const ps = seed % 2 ? 1 : -1, bs = beachSpots(X, 9, (x, z) => !(z > 3.6 && x * ps > 1.2) && z > -4.5);
  for (const [i, [bx, bz]] of bs.entries()) { if (i < 4) primTree(sc, bx, .24, bz, 1.15, R, TC, pro); else await put(sc, ['stone_largeA', 'stone_smallC', 'stone_largeC', 'stone_smallE', 'stone_largeE'][i % 5], bx, .24, bz, { s: .9, ry: R() * 6, tint: pro ? { stone: '#9AA3B5', stoneDark: '#717B8E' } : { stone: '#D9CDB8', stoneDark: '#B8A88E' } }); }
  if (pro) { const pg = grp(sc, 3.75 * ps, 0, 5.0, -2.35 * ps); mesh(new THREE.BoxGeometry(.75, .16, 2.4), sm('#9AA3B5', { roughness: .6, metalness: .3 }), [0, .26, -1.2], pg); for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(.05, .012, 2.4), pla(color), [s * .33, .345, -1.2], pg, { cast: false }); }
  else { umbrella(sc, -1.6 * ps, .24, 5.75, '#7C5CFF', '#FFFFFF', .3); umbrella(sc, -.3 * ps, .24, 6.05, '#FFB443', '#FFFFFF', -.4); pier(sc, 3.55 * ps, .0, 4.95, -2.35 * ps, 2.6); await put(sc, 'canoe', 4.15 * ps, .05, 6.15, { ry: -.8 * ps, s: 1.4 }); }
  sailboat(sc, -2.9 * ps, 7.9, -1.25, 1.05, color);
}
const DECOR = { tropic: decorTropic, lab: decorLab, teatre: decorTeatre, ciutat: decorCiutat, fab: decorFab, estudi: decorFab };

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
  if (WD === 'fab' || WD === 'estudi') { wav(2.15, .06, .36); wav(2.9, .05, .18); glints(sc, R, 60, '#FFFFFF', 2.0, R => { const x = (R() - .5) * 20, z = (R() - .5) * 22; return edgeK(x / 1.5, z / 1.35) > 1.25 ? [x, z] : null; }); }
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
  const capM = new THREE.MeshStandardMaterial({ map: ct.map, roughness: Wd.cap === 'concrete' ? .8 : Wd.cap === 'slate' ? .6 : Wd.cap === 'mat' ? .7 : Wd.cap === 'blueprint' ? .72 : .92, ...(ct.emi ? { emissiveMap: ct.emi, emissive: '#FFFFFF', emissiveIntensity: .9 } : {}) });
  plateau(sc, psh, Y, .95, seed, { bands: Wd.cliff, cap: capM, rough: WD === 'lab' ? .1 : Wd.layers ? .035 : .16, layers: Wd.layers, sideMat: WD === 'fab' ? { roughness: .45 } : WD === 'estudi' ? { roughness: .38, metalness: .35 } : {} });
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
  const gloss = {}; b.bit.traverse(o => { if (!o.isMesh || !o.material || o.material.isMeshBasicMaterial || o.material.emissiveIntensity > .5) return; const k = o.material.uuid; gloss[k] = gloss[k] || new THREE.MeshPhysicalMaterial({ color: o.material.color, roughness: Math.min(.45, o.material.roughness), metalness: o.material.metalness, clearcoat: 1, clearcoatRoughness: .15 }); o.material = gloss[k]; });
  b.arms[1].rotation.z = 1.95; b.arms[1].scale.setScalar(2); b.eyes.visible = false; b.joy.visible = true; b.head.rotation.z = -.08;
  sc.add(b.bit);
}
// el Maqueen gran (capçalera de Tech Robòtica): mateix model que l'arena 3D, llums encesos i una cara a la micro:bit
function botHero(sc, x, y, z, s, ry) {
  const B = makeBot(); drawMicrobit(B.mbT, '00000 01010 00000 10001 01110'.split(' ').reverse().map(q => [...q].reverse().join('')).join(' ')); B.mbMat.emissiveIntensity = 2.0;
  B.heads.forEach(h => { h.mat.color.set('#2EE6F0'); h.mat.emissive.set('#2EE6F0'); h.mat.emissiveIntensity = 2.2; h.gl.material.opacity = .8; h.gl.material.color.set('#2EE6F0'); h.pool.visible = false; });
  B.unders.forEach(u => { u.visible = false; }); B.lineS.forEach(l => { l.dot.visible = false; l.ray.visible = false; });
  B.bot.position.set(x, y, z); B.bot.rotation.y = ry; B.bot.scale.setScalar(s); sc.add(B.bot); return B.bot;
}
// el taller d'impressió 3D d'en Bit (fab) i l'estudi d'enginyeria (estudi): interiors amb la Nuvi
let PLANKS = null;
async function fabRoom(r, sc, sun, W, H, R, o, pro) {
  const hero = !!(o.bit || o.bot), accent = pro ? '#D63F8C' : '#7C5CFF';
  sc.background = new THREE.Color(pro ? '#DCE5F1' : '#FFE9D2');
  sun.position.set(-7, 10, 9); sun.intensity = 2.1; sun.color.set(pro ? '#FFF6EA' : '#FFE9CC'); sc.environmentIntensity = .5;
  // terra: parquet càlid (taller) o resina gris blavosa amb rajoles (estudi)
  if (!PLANKS) PLANKS = {
    wood: ctex(512, 512, (g, w) => { const RR = rnd(5); for (let i = 0; i < 8; i++) { const y = i * w / 8; let x = -RR() * 200; while (x < w) { const L = 140 + RR() * 160, v = Math.floor((RR() - .5) * 26); g.fillStyle = `rgb(${206 + v},${150 + v},${96 + v})`; g.fillRect(x, y, L, w / 8); g.strokeStyle = 'rgba(120,70,30,.28)'; for (let k = 0; k < 5; k++) { g.beginPath(); const yy = y + 6 + RR() * (w / 8 - 12); g.moveTo(x, yy); g.bezierCurveTo(x + L * .3, yy + 3, x + L * .6, yy - 3, x + L, yy); g.stroke(); } g.fillStyle = 'rgba(110,60,25,.45)'; g.fillRect(x, y, 2, w / 8); x += L; } g.fillStyle = 'rgba(110,60,25,.4)'; g.fillRect(0, y, w, 2); } }),
    conc: ctex(512, 512, (g, w) => { const RR = rnd(9); g.fillStyle = '#9EAABD'; g.fillRect(0, 0, w, w); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { const v = Math.floor((RR() - .5) * 12); g.fillStyle = `rgb(${176 + v},${187 + v},${204 + v})`; g.fillRect(i * w / 4 + 2, j * w / 4 + 2, w / 4 - 4, w / 4 - 4); } for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(${RR() < .5 ? '70,80,100' : '255,255,255'},.08)`; g.fillRect(RR() * w, RR() * w, 2, 2); } })
  };
  const ft = (pro ? PLANKS.conc : PLANKS.wood).clone(); ft.needsUpdate = true; ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.repeat.set(8, 4);
  mesh(new THREE.PlaneGeometry(32, 16), new THREE.MeshStandardMaterial({ map: ft, roughness: pro ? .3 : .5, metalness: pro ? .1 : 0 }), [0, 0, 3], sc, { r: [-Math.PI / 2, 0, 0], cast: false });
  // catifa al mig (on es posen en Bit i en Numi): rodona de colors al taller, plànol a l'estudi
  const rug = pro ? ctex(512, 320, (g, w, h) => { g.fillStyle = '#2B63C9'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(225,240,255,.35)'; g.lineWidth = 2; for (let i = 0; i < w; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); } for (let i = 0; i < h; i += 32) { g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); } g.strokeStyle = '#EEF6FF'; g.lineWidth = 5; g.beginPath(); for (let t = 0; t <= 48; t++) { const a = t / 48 * Math.PI * 2, rr = t % 4 < 2 ? 92 : 74; t ? g.lineTo(150 + Math.cos(a) * rr, 160 + Math.sin(a) * rr) : g.moveTo(150 + Math.cos(a) * rr, 160 + Math.sin(a) * rr); } g.stroke(); g.beginPath(); g.arc(150, 160, 24, 0, 7); g.stroke(); g.strokeRect(300, 90, 150, 140); g.beginPath(); g.arc(375, 160, 40, 0, 7); g.stroke(); g.lineWidth = 12; g.strokeStyle = '#F4F8FF'; g.strokeRect(6, 6, w - 12, h - 12); })
    : ctex(512, 512, (g, w) => { const C = ['#B9A6FF', '#FFFFFF', '#FFC86A', '#9B84FF', '#FFE7B8', '#7C5CFF']; for (let i = 0; i < 6; i++) { g.fillStyle = C[i]; g.beginPath(); g.arc(w / 2, w / 2, w / 2 * (1 - i * .15), 0, 7); g.fill(); } g.fillStyle = 'rgba(255,255,255,.12)'; for (let i = 0; i < 3000; i++) { const a = Math.random() * 7, rr = Math.random() * w / 2; g.fillRect(w / 2 + Math.cos(a) * rr, w / 2 + Math.sin(a) * rr, 2, 2); } });
  const rm = new THREE.MeshStandardMaterial({ map: rug, roughness: .95, transparent: !pro, alphaTest: pro ? 0 : .5 });
  mesh(pro ? new THREE.PlaneGeometry(6.4, 4.0) : new THREE.CircleGeometry(2.9, 64), rm, [hero ? .4 : 0, .012, 1.4], sc, { r: [-Math.PI / 2, 0, 0], cast: false });
  // paret del fons amb sòcol, i paret de la dreta
  const wallC = pro ? '#E6ECF5' : '#FFF0DC';
  mesh(new THREE.BoxGeometry(32, 9, .3), sm(wallC, { roughness: .9 }), [0, 4.5, -4.15], sc);
  mesh(new THREE.BoxGeometry(32, 1.2, .08), sm(pro ? '#A9B6CA' : '#D6C8F6', { roughness: .8 }), [0, .6, -3.97], sc);
  mesh(new THREE.BoxGeometry(32, .08, .12), sm('#FFFFFF'), [0, 1.22, -3.94], sc);
  mesh(new THREE.BoxGeometry(.3, 9, 16), sm(wallC, { roughness: .9 }), [9.7, 4.5, 3.5], sc);
  // finestral gran amb el cel i el mar (llum que entra: raigs i clapa de sol a terra)
  const sky = ctex(512, 320, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#5DB6F2'); gr.addColorStop(.62, '#BFE6FF'); gr.addColorStop(.63, '#3FB3D8'); gr.addColorStop(1, '#2C8FC8'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.92)'; for (const [x, y, k] of [[90, 70, 1], [330, 50, 1.3], [450, 110, .8]]) { for (let i = 0; i < 4; i++) { g.beginPath(); g.ellipse(x + (i - 1.5) * 22 * k, y - (i % 2) * 8 * k, 26 * k, 16 * k, 0, 0, 7); g.fill(); } }
    g.fillStyle = '#6CC86A'; g.beginPath(); g.ellipse(360, 200, 90, 16, 0, Math.PI, 0); g.fill(); g.fillStyle = '#F2D9A0'; g.fillRect(270, 198, 180, 5); g.fillStyle = '#FFFFFF'; g.beginPath(); g.moveTo(140, 196); g.lineTo(150, 168); g.lineTo(160, 196); g.fill(); });
  const wx = -1.5, wy = 3.7, ww = 4.6, wh = 3.0;
  mesh(new THREE.PlaneGeometry(ww, wh), new THREE.MeshBasicMaterial({ map: sky, color: new THREE.Color(1.08, 1.08, 1.08) }), [wx, wy, -3.99], sc, { cast: false });
  const fr = sm('#FFFFFF', { roughness: .5 });
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.16, wh + .16, .18), fr, [wx + sx * ww / 2, wy, -3.92], sc); for (const sy of [-1, 1]) mesh(new THREE.BoxGeometry(ww + .16, .16, .18), fr, [wx, wy + sy * wh / 2, -3.92], sc);
  mesh(new THREE.BoxGeometry(.09, wh, .12), fr, [wx, wy, -3.92], sc); mesh(new THREE.BoxGeometry(ww, .09, .12), fr, [wx, wy + .35, -3.92], sc);
  mesh(new THREE.BoxGeometry(ww + .6, .12, .5), fr, [wx, wy - wh / 2 - .08, -3.78], sc);
  const beamT = ctex(64, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
  for (const [dx, k] of [[-1.3, .1], [0, .13], [1.3, .09]]) { const bg = new THREE.PlaneGeometry(1.25, 4.6); bg.translate(0, -2.3, 0); const bm = mesh(bg, new THREE.MeshBasicMaterial({ map: beamT, color: new THREE.Color('#FFF0CC').multiplyScalar(k), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }), [wx + dx, wy + wh / 2 - .2, -3.85], sc, { cast: false }); bm.rotation.set(-.62, 0, -.18); }
  pool(sc, wx + 1.2, .016, -.2, 3.0, '#FFF1D2', pro ? .16 : .2);
  for (const [x, k] of [[wx - 1.6, 0], [wx - .7, 1], [wx + 1.4, 2]]) { if (k === 1) vaseObj(sc, x, wy - wh / 2, -3.75, .55, pro ? accent : '#FF8FB1'); else { const g = grp(sc, x, wy - wh / 2, -3.75); mesh(new THREE.CylinderGeometry(.16, .12, .26, 20), pla(k ? '#2FB5A6' : '#FFB443'), [0, .13, 0], g); await put(g, k ? 'plant_bushDetailed' : 'flower_purpleA', 0, .25, 0, { s: k ? 1.1 : 2.2 }); } }
  // garlanda de llumetes i llums penjants
  for (let i = 0; i < 30; i++) { const x = -10 + i * .7; mesh(new THREE.SphereGeometry(.065, 10, 8), glow(['#FFC531', '#FF6B5B', '#3D8BFF', '#3CC47C', '#E5489A'][i % 5], 2.4), [x, 6.15 - Math.sin(i * .9) * .12 - (i % 2) * .08, -3.9], sc, { cast: false }); }
  for (const x of [-4.4, 3.6]) { mesh(new THREE.CylinderGeometry(.012, .012, 3, 6), sm('#2E3340'), [x, 7.6, -1.0], sc); mesh(new THREE.ConeGeometry(.5, .46, 32, 1, true), sm(pro ? '#2E3340' : accent, { side: THREE.DoubleSide, roughness: .35 }), [x, 5.95, -1.0], sc); mesh(new THREE.SphereGeometry(.15, 14, 10), glow('#FFE7B0', 3), [x, 5.76, -1.0], sc, { cast: false }); halo(sc, x, 5.7, -1.0, 1.6, '#FFD58A', .45); pool(sc, x, .02, -.4, 1.8, '#FFD9A0', .14); }
  const warm = new THREE.PointLight('#FFD9A8', 16, 16, 1.4); warm.position.set(0, 5.5, 1.5); sc.add(warm);
  // prestatges amb bobines de tots els colors i peces impreses (a la dreta de la finestra)
  const shx = 3.9;
  for (const y of [2.5, 3.65, 4.8]) { mesh(new THREE.BoxGeometry(3.4, .08, .55), new THREE.MeshStandardMaterial({ map: woodTex(), roughness: .6 }), [shx, y, -3.68], sc); for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.06, .3, .4), sm('#3A4152', { metalness: .5, roughness: .4 }), [shx + sx * 1.5, y - .17, -3.8], sc); }
  for (let i = 0; i < 7; i++) spool(sc, shx - 1.38 + i * .46, 4.84, -3.65, FIL[i % FIL.length], { ry: .25, s: 1.15 });
  if (pro) { for (let i = 0; i < 4; i++) { const w = .4 + i * .12; mesh(new THREE.BoxGeometry(w, .2 + i * .06, .36), pla([accent, '#2FB5A6', '#FFC531', '#F4F6FA'][i]), [shx - 1.2 + i * .78, 3.69 + (.2 + i * .06) / 2, -3.65], sc); } gearObj(sc, shx - 1.0, 2.54, -3.65, .28, 12, accent, { flat: true, d: .07 }); gearObj(sc, shx - .2, 2.54, -3.6, .2, 9, '#2FB5A6', { flat: true, d: .07 }); robotObj(sc, shx + .8, 2.54, -3.65, .3, .9, ['#F4F6FA', accent, '#FFC531']); }
  else { castleObj(sc, shx - 1.0, 3.69, -3.65, 1.05, '#9B7CFF'); vaseObj(sc, shx - .1, 3.69, -3.65, .62, '#FF6B5B'); robotObj(sc, shx + .8, 3.69, -3.65, .3, .85, ['#FFB443', '#FFFFFF', '#2FB5A6']);
    gearObj(sc, shx - 1.1, 2.54, -3.65, .22, 10, '#3CC47C', { flat: true, d: .06 }); keyringObj(sc, shx - .3, 2.54, -3.6, 1.2, '#E5489A', .2); mugObj(sc, shx + .55, 2.54, -3.62, 1.6, '#3D8BFF', .5); }
  // pòster a la dreta: un cub amb els eixos (taller) o un engranatge acotat (estudi)
  { const pt = ctex(256, 340, (g, w, h) => { g.fillStyle = pro ? '#2B63C9' : '#FFFFFF'; g.fillRect(0, 0, w, h); g.lineWidth = 6; g.lineJoin = 'round'; const c = pro ? '#EEF6FF' : '#3A3F55';
      if (pro) { g.strokeStyle = c; g.beginPath(); for (let t = 0; t <= 40; t++) { const a = t / 40 * Math.PI * 2, rr = t % 4 < 2 ? 80 : 64; t ? g.lineTo(128 + Math.cos(a) * rr, 150 + Math.sin(a) * rr) : g.moveTo(128 + Math.cos(a) * rr, 150 + Math.sin(a) * rr); } g.stroke(); g.beginPath(); g.arc(128, 150, 22, 0, 7); g.stroke(); g.lineWidth = 3; g.beginPath(); g.moveTo(48, 270); g.lineTo(208, 270); g.stroke(); g.fillStyle = c; g.font = '700 26px system-ui'; g.textAlign = 'center'; g.fillText('Ø 40', 128, 305); }
      else { const O = [128, 200], s = 70; g.fillStyle = '#B9A6FF'; g.beginPath(); g.moveTo(O[0], O[1]); g.lineTo(O[0] - s, O[1] - s * .55); g.lineTo(O[0], O[1] - s * 1.1); g.lineTo(O[0] + s, O[1] - s * .55); g.closePath(); g.fill(); g.fillStyle = '#7C5CFF'; g.beginPath(); g.moveTo(O[0], O[1]); g.lineTo(O[0] - s, O[1] - s * .55); g.lineTo(O[0] - s, O[1] + s * .6); g.lineTo(O[0], O[1] + s * 1.15); g.closePath(); g.fill(); g.fillStyle = '#9B84FF'; g.beginPath(); g.moveTo(O[0], O[1]); g.lineTo(O[0] + s, O[1] - s * .55); g.lineTo(O[0] + s, O[1] + s * .6); g.lineTo(O[0], O[1] + s * 1.15); g.closePath(); g.fill();
        for (const [col, dx, dy] of [['#FF5A5A', 95, 52], ['#3CC47C', -95, 52], ['#3D8BFF', 0, -120]]) { g.strokeStyle = col; g.beginPath(); g.moveTo(O[0], O[1] + 10); g.lineTo(O[0] + dx, O[1] + 10 + dy); g.stroke(); } } });
    const g = grp(sc, 7.4, 3.5, -3.96); mesh(new THREE.BoxGeometry(1.5, 2.0, .05), sm(accent), [0, 0, 0], g); mesh(new THREE.PlaneGeometry(1.38, 1.86), new THREE.MeshStandardMaterial({ map: pt, roughness: .7 }), [0, 0, .03], g, { cast: false }); }
  // a l'esquerra: tauler d'eines (taller) o pantalla de CAD, plànol i engranatges a la paret (estudi)
  const px = -6.4;
  if (pro) { const g = grp(sc, px - .1, 3.7, -3.95); mesh(new RoundedBoxGeometry(2.7, 1.66, .08, 2, .04), sm('#22283A', { roughness: .4, metalness: .3 }), [0, 0, 0], g); mesh(new THREE.PlaneGeometry(2.56, 1.52), new THREE.MeshBasicMaterial({ map: screenTex('cad', accent), color: new THREE.Color(1.15, 1.15, 1.15) }), [0, 0, .045], g, { cast: false });
    const bp = ctex(512, 360, (g, w, h) => { g.fillStyle = '#2B63C9'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(225,240,255,.3)'; g.lineWidth = 1; for (let i = 0; i < w; i += 24) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); } for (let i = 0; i < h; i += 24) { g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
      g.strokeStyle = '#EEF6FF'; g.lineWidth = 4; g.strokeRect(150, 110, 220, 150); g.beginPath(); g.arc(260, 185, 46, 0, 7); g.stroke(); g.beginPath(); g.moveTo(150, 290); g.lineTo(370, 290); g.stroke(); g.beginPath(); g.moveTo(400, 110); g.lineTo(400, 260); g.stroke(); g.font = '700 22px system-ui'; g.fillStyle = '#EEF6FF'; g.fillText('80', 245, 318); });
    mesh(new THREE.PlaneGeometry(1.6, 1.12), new THREE.MeshStandardMaterial({ map: bp, roughness: .8 }), [px + 1.7, 1.95, -3.97], sc, { cast: false });
    for (const [x, y, rr, c] of [[px + 1.0, 5.55, .52, accent], [px + 1.82, 5.08, .34, '#2FB5A6']]) gearObj(sc, x, y, -3.92, rr, rr > .4 ? 14 : 10, c, { d: .08 }); }
  else { const pb = ctex(512, 360, (g, w, h) => { g.fillStyle = '#F0E2C8'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(90,60,30,.55)'; for (let x = 16; x < w; x += 26) for (let y = 16; y < h; y += 26) { g.beginPath(); g.arc(x, y, 3.2, 0, 7); g.fill(); } });
    const g = grp(sc, px + .2, 3.4, -3.95); mesh(new THREE.BoxGeometry(2.9, 2.0, .06), [sm('#D8C3A0'), sm('#D8C3A0'), sm('#D8C3A0'), sm('#D8C3A0'), new THREE.MeshStandardMaterial({ map: pb, roughness: .8 }), sm('#D8C3A0')], [0, 0, 0], g);
    const tl = sm('#3A4152', { metalness: .6, roughness: .35 }), hd = pla('#E2574C');
    mesh(new THREE.BoxGeometry(.08, .7, .04), tl, [-1.1, .1, .07], g); mesh(new THREE.TorusGeometry(.1, .04, 8, 16, Math.PI * 1.6), tl, [-1.1, .5, .07], g, { r: [0, 0, -.5] });
    mesh(new THREE.BoxGeometry(.1, .5, .05), hd, [-.7, -.1, .07], g); mesh(new THREE.BoxGeometry(.32, .12, .08), tl, [-.7, .2, .07], g);
    for (const sx of [-1, 1]) { const pl2 = grp(g, -.25, .05, .08); pl2.rotation.z = sx * .18; mesh(new THREE.BoxGeometry(.06, .55, .04), pla('#3D8BFF'), [0, -.15, 0], pl2); }
    mesh(new THREE.BoxGeometry(.9, .1, .03), pla('#FFE066'), [.55, .65, .07], g); calipers(g, .55, .2, .1, 0, 1.1).rotation.x = Math.PI / 2;
    spool(g, .4, -.75, .2, '#3CC47C', { s: 1.1 }); spool(g, 1.0, -.75, .2, '#FF6B5B', { s: 1.1 }); }
  // banc de treball a l'esquerra, amb el portàtil (CAD), el tamboret i peces
  { const bx = -4.9, bz = -2.0; workbench(sc, bx, 0, bz, .18, 2.1, { k: 3, pro });
    await put(sc, 'furniture/laptop', bx - .7, 1.12, bz - .1, { center: true, tint: { metal: '#C4CBD6', metalMedium: '#7D8798', metalDark: '#252C3C' }, s: 2.6, ry: .35 });
    const sg = grp(sc, bx - .7, 1.12, bz - .1, .35); mesh(new THREE.PlaneGeometry(.66, .4), new THREE.MeshBasicMaterial({ map: screenTex('cad', accent), color: new THREE.Color(1.1, 1.1, 1.1) }), [-.04, .3, -.25], sg, { r: [-.25, 0, 0], cast: false });
    const st = grp(sc, bx + .5, 0, bz + 1.15); mesh(new THREE.CylinderGeometry(.34, .34, .1, 28), pla(accent), [0, .82, 0], st); for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; rod(st, new THREE.Vector3(Math.cos(a) * .3, 0, Math.sin(a) * .3), new THREE.Vector3(Math.cos(a) * .12, .8, Math.sin(a) * .12), .03, sm('#3A4152', { metalness: .5, roughness: .4 })); } }
  // la Nuvi a la dreta, damunt d'una taula amb calaixos, imprimint un castell (i una impressora tancada al costat a l'estudi)
  { const tx = hero ? 6.4 : 5.1, tz = -1.3, g = grp(sc, tx, 0, tz, -.42), tw = 2.6;
    mesh(new THREE.BoxGeometry(tw, .1, 1.5), new THREE.MeshStandardMaterial({ map: woodTex(), roughness: .55 }), [0, 1.1, 0], g); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesh(new THREE.BoxGeometry(.09, 1.05, .09), sm('#3A4152', { metalness: .5, roughness: .4 }), [a * (tw / 2 - .12), .53, b * .62], g);
    const cb = grp(g, .55, 0, 0); mesh(new RoundedBoxGeometry(1.0, .9, 1.2, 2, .03), pla(pro ? '#F4F6FA' : '#FFFFFF'), [0, .5, 0], cb); for (let i = 0; i < 3; i++) { mesh(new THREE.BoxGeometry(.92, .26, .02), pla([accent, '#2FB5A6', '#FFB443'][i]), [0, .78 - i * .29, .61], cb); mesh(new THREE.BoxGeometry(.3, .04, .04), steel(), [0, .78 - i * .29, .64], cb); }
    printer(g, -.35, 1.15, 0, .12, 1.55, { face: true, happy: true, acc: '#7C5CFF', fil: pro ? accent : '#FFB443', obj: 'castle', ph: .26 });
    if (pro) enclosedPrinter(g, .85, 1.15, -.1, -.1, .85, { acc: accent, fil: '#2FB5A6' }); else { spool(g, .9, 1.15, .1, '#3CC47C', { flat: true, s: 1.3 }); spool(g, .9, 1.28, .1, '#FF8FB1', { flat: true, s: 1.3 }); } }
  // plantes, bobines a terra i una peça grossa a cada banda
  await put(sc, 'furniture/pottedPlant', -8.4, 0, -2.9, { center: true, s: 3.2, tint: { plant: '#4FB244', metal: '#E2574C' } });
  await put(sc, 'furniture/pottedPlant', 8.7, 0, -2.6, { center: true, s: 2.8, tint: { plant: '#3CC47C', metal: accent } });
  for (let i = 0; i < 3; i++) spool(sc, -7.4 + i * .52, 0, .5, FIL[(i * 3 + 2) % FIL.length], { s: 1.35, ry: .3 });
  spool(sc, -6.9, 0, 1.4, FIL[7], { flat: true, s: 1.35, ry: 1 });
  if (pro) { const d = grp(sc, 7.9, 0, .6, -.7); robotArm(d, 0, 0, 0, .4, accent); d.scale.setScalar(1.9); } else robotObj(sc, 8.0, 0, .8, -.6, 1.6, ['#7C5CFF', '#FFFFFF', '#FFB443']);
  const cam = new THREE.PerspectiveCamera(hero ? 30 : 33, W / H, .1, 200);
  if (o.bit) bitHero(sc, 3.3, 0, 1.9, 2.05, -.45);
  if (hero) { cam.position.set(.6, 2.9, 11.2); cam.lookAt(.6, 2.15, -2); } else { cam.position.set(0, 3.0, 10.4); cam.lookAt(0, 2.45, -2); }
  cam.updateMatrixWorld();
  return finish(r, sc, cam, W, H, { focus: o.bit ? 9.4 : 11, aperture: .0005, maxblur: .004, bloom: [.14, .4, 1.05], grade: { sat: 1.08, con: 1.05, vig: .16 } });
}
export async function scene(kind = 'illa', W = 1600, H = 900, o = {}) {
  const { r, sc, sun } = await setup(W, H), R = rnd(kind.length * 131 + 7);
  if (kind === 'taller') return taller(r, sc, sun, W, H, R, o);
  if (kind === 'fab' || kind === 'estudi') return fabRoom(r, sc, sun, W, H, R, o, kind === 'estudi');
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
  const cam = new THREE.PerspectiveCamera(30, W / H, .1, 200); if (o.bit) bitHero(sc, 3.5, top, 4.6, 2.2, -.4); if (o.bot) botHero(sc, 3.6, top, 4.3, .36, Math.PI - .75);
  cam.position.set(0, 4.6, 15.5); cam.lookAt(0, 1.6, -2); cam.updateMatrixWorld();
  return finish(r, sc, cam, W, H, { focus: 15, aperture: .0006, maxblur: .005, grade: { sat: 1.05, con: 1.04, vig: .1 } });
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
  return finish(r, sc, cam, W, H, { focus: 9, aperture: .0006, maxblur: .004, grade: { sat: 1.05, con: 1.04, vig: .12 } });
}
const FURN = { wood: '#E3B07A', woodDark: '#B07A48', metal: '#D5DCE6', metalMedium: '#8A94A8', metalDark: '#323A4E', carpet: '#7C6CF2', carpetDarker: '#5B4BD6', carpetWhite: '#FFFFFF', plant: '#4FB244', glass: '#BFE6FF', lamp: '#FFE6A0', _defaultMat: '#FFE6CC' };
