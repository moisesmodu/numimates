/* ===== Numi Tech · dioramas 3D d'alta qualitat (imatges estàtiques) =====
   Peces: Kenney Nature Kit i City Kit Suburban (CC0, kenney.nl) a scripts/3d/assets/, recolorides amb la paleta de Numi.
   Llum: cel HDRI de Poly Haven (CC0) + sol amb ombres suaus, oclusió ambiental (GTAO), bloom i un punt de tilt-shift.
   · island(): l'illa d'una unitat, amb el camí i les parades; retorna on cau cada parada (en %).
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

const A = 'scripts/3d/assets/';
import { makeBit } from './bit3d.mjs';
const rnd = s => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

/* ---------- paleta: els materials de Kenney són pastel; aquí els fem vius ---------- */
const PAL = {
  grass: '#78C850', dirt: '#C98450', dirtDark: '#A86A3E', leafsGreen: '#4FB244', leafsDark: '#2F8F45', leafsFall: '#F29A2E', woodBark: '#8A5532', wood: '#D29A5E', woodInner: '#F0D2A2',
  stone: '#C7CDD8', stoneDark: '#99A2B4', water: '#5CCBF5', colorRed: '#EF5A5A', colorPurple: '#9B6CF2', colorYellow: '#FFC531', colorBlue: '#3D8BFF', colorOrange: '#F08A24', _defaultMat: '#FFFFFF', metal: '#9AA3B5'
};
const MATC = {};
function recolor(o, tint) {
  o.traverse(m => {
    if (!m.isMesh) return; m.castShadow = true; m.receiveShadow = true;
    m.material = [].concat(m.material).map(x => {
      if (x.map) { x.roughness = .75; x.metalness = 0; return x; }
      const name = x.name, col = (tint && tint[name]) || PAL[name];
      const key = name + (col || x.color.getHexString());
      if (!MATC[key]) {
        MATC[key] = new THREE.MeshStandardMaterial({ name, color: col || x.color, roughness: name === 'water' ? .08 : name.startsWith('stone') ? .7 : .85, metalness: 0, flatShading: true,
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
async function put(sc, name, x, y, z, o = {}) {
  const src = await load(name), m = recolor(src.clone(true), o.tint);
  m.position.set(x, y, z); if (o.ry != null) m.rotation.y = o.ry; if (o.s != null) Array.isArray(o.s) ? m.scale.set(...o.s) : m.scale.setScalar(o.s);
  sc.add(m); return m;
}

/* ---------- escena, llum i postprocessat ---------- */
let HDR = null;
async function setup(W, H) {
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setSize(W, H); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const sc = new THREE.Scene();
  if (!HDR) HDR = await new HDRLoader().loadAsync(A + 'sky.hdr');
  const pm = new THREE.PMREMGenerator(r), env = pm.fromEquirectangular((HDR.mapping = THREE.EquirectangularReflectionMapping, HDR)).texture;
  sc.environment = env; sc.environmentIntensity = .45;
  sc.add(new THREE.HemisphereLight('#CFEFFF', '#6A8A45', .3));
  const sun = new THREE.DirectionalLight('#FFEBC8', 2.3); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -.0003; sun.shadow.normalBias = .03; sun.shadow.radius = 4;
  Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: .5, far: 70 }); sun.position.set(-10, 13, 8); sc.add(sun, sun.target);
  return { r, sc, sun };
}
function finish(r, sc, cam, W, H, o = {}) {
  const rt = new THREE.WebGLRenderTarget(W, H, { samples: 4, type: THREE.HalfFloatType });
  const comp = new EffectComposer(r, rt);
  comp.addPass(new RenderPass(sc, cam));
  const ao = new GTAOPass(sc, cam, W, H); ao.updateGtaoMaterial({ radius: .6, distanceExponent: 1.2, thickness: 1.2, scale: 1.1 }); ao.blendIntensity = .9; comp.addPass(ao);
  if (o.focus) { const bk = new BokehPass(sc, cam, { focus: o.focus, aperture: o.aperture || .0012, maxblur: o.maxblur || .006 }); comp.addPass(bk); }
  comp.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), .14, .35, 1.05));
  comp.addPass(new OutputPass());
  comp.render();
  const url = r.domElement.toDataURL('image/webp', .88); comp.dispose(); rt.dispose(); r.dispose(); return url;
}

/* ---------- el mar: degradat turquesa a prop de l'illa, blau intens lluny, amb onades ---------- */
function sea(sc, cx = 0, cz = 0, rx = 5, rz = 7) {
  const g = new THREE.PlaneGeometry(90, 90, 160, 160); g.rotateX(-Math.PI / 2);
  const pa = g.attributes.position, cols = new Float32Array(pa.count * 3), c1 = new THREE.Color('#6FE0EE'), c2 = new THREE.Color('#1F9BE0'), c3 = new THREE.Color('#1762B8'), c = new THREE.Color();
  for (let i = 0; i < pa.count; i++) {
    const x = pa.getX(i), z = pa.getZ(i), d = Math.hypot((x - cx) / rx, (z - cz) / rz);
    pa.setY(i, Math.sin(x * 1.3 + z * .4) * .035 + Math.cos(z * 1.1 - x * .3) * .035);
    const t = Math.min(1, Math.max(0, (d - .95) / .45)); c.copy(c1).lerp(c2, t); if (d > 1.4) c.lerp(c3, Math.min(.8, (d - 1.4) / 1.2));
    cols.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .12, metalness: 0, clearcoat: .6, clearcoatRoughness: .2, flatShading: true }));
  m.receiveShadow = true; sc.add(m);
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
  const sh = new THREE.Shape(); sm.forEach(([x, z], i) => i ? sh.lineTo(x, z) : sh.moveTo(x, z)); sh.closePath(); return sh;
}
function slab(sc, sh, y, depth, col, o = {}) {
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: true, bevelThickness: o.bt ?? .12, bevelSize: o.bs ?? .25, bevelSegments: 5, curveSegments: 24 });
  g.rotateX(Math.PI / 2); const m = new THREE.Mesh(g, o.mat || new THREE.MeshStandardMaterial({ color: col, roughness: .95 })); m.position.y = y; m.receiveShadow = true; m.castShadow = !!o.cast; sc.add(m); return m;
}

// altiplà de terra amb estrats i roca irregular (low-poly) i una capa d'herba que sobresurt una mica
function plateau(sc, sh, y, h, seed) {
  const R = rnd(seed * 31 + 5);
  const g = new THREE.ExtrudeGeometry(sh, { depth: h, steps: 4, bevelEnabled: false, curveSegments: 6 }); g.rotateX(Math.PI / 2); g.translate(0, h, 0);
  const ng = g.toNonIndexed(), pa = ng.attributes.position, cols = new Float32Array(pa.count * 3), c = new THREE.Color();
  const band = ['#7E4A2C', '#9C5F38', '#B8744A', '#C98856'], noise = new Map();
  const nz = (x, yy, z) => { const k = x.toFixed(2) + ',' + yy.toFixed(2) + ',' + z.toFixed(2); if (!noise.has(k)) noise.set(k, (R() - .5)); return noise.get(k); };
  for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), yy = pa.getY(i), z = pa.getZ(i);
    if (yy > .02 && yy < h - .02) { const d = Math.hypot(x, z) || 1, e = nz(x, yy, z) * .16; pa.setX(i, x + x / d * e); pa.setZ(i, z + z / d * e); }
    const t = Math.min(3, Math.floor(yy / h * 4)); c.set(band[t]); cols.set([c.r, c.g, c.b], i * 3); }
  ng.setAttribute('color', new THREE.BufferAttribute(cols, 3)); ng.computeVertexNormals();
  const m = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, flatShading: true })); m.position.y = y; m.castShadow = m.receiveShadow = true; sc.add(m);
  const cap = new THREE.ExtrudeGeometry(sh, { depth: .1, bevelEnabled: true, bevelThickness: .05, bevelSize: .09, bevelSegments: 3, curveSegments: 12 }); cap.rotateX(Math.PI / 2);
  const cm = new THREE.Mesh(cap, new THREE.MeshStandardMaterial({ color: '#6FC043', roughness: .9 })); cm.position.y = y + h + .02; cm.castShadow = cm.receiveShadow = true; sc.add(cm);
}

/* ---------- decoració per temes ---------- */
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

/* ---------- l'illa d'una unitat ---------- */
export async function island({ n = 4, seed = 1, theme = 'algo', color = '#2F5BEA', W = 1080, H = 1350 } = {}) {
  const { r, sc } = await setup(W, H); const R = rnd(seed * 7919 + 13), T = THEMES[theme] || THEMES.algo;
  sc.background = new THREE.Color('#1F86D0');
  // caselles de l'altiplà: una el·lipse irregular de ~8×11
  const cells = [], key = (x, z) => x + ',' + z, isP = new Set();
  for (let z = -5; z <= 5; z++) for (let x = -4; x <= 4; x++) { const e = (x / 4.3) ** 2 + (z / 5.6) ** 2 + (R() - .5) * .22; if (e <= 1) { cells.push([x, z]); isP.add(key(x, z)); } }
  // platja i fons de sorra (forma orgànica) + escuma
  const sand = new THREE.MeshStandardMaterial({ color: '#F3D9A0', roughness: .95 });
  slab(sc, blob(cells, 1.1, seed), .12, 1.6, null, { mat: sand, bs: .35 });
  slab(sc, blob(cells, 1.55, seed + 1), -.02, .2, null, { mat: new THREE.MeshStandardMaterial({ color: '#BFF3F7', roughness: .4, transparent: true, opacity: .55 }), bs: .2, bt: .02 });
  sea(sc, 0, 0, 5.6, 6.8);
  // l'altiplà amb blocs de penya-segat (herba a dalt, terra als costats)
  const Y = .12;
  plateau(sc, blob(cells, .5, seed + 2), Y, .95, seed);
  // parades: en zig-zag de dalt (lluny) a baix (a prop)
  const P = []; for (let i = 0; i < n; i++) { const t = n === 1 ? .5 : i / (n - 1); P.push(new THREE.Vector3((i % 2 ? 1 : -1) * (1.7 + R() * .3), 0, -3.9 + t * 7.8)); }
  const top = Y + .95 + .07;
  const curve = new THREE.CatmullRomCurve3([P[0].clone().add(new THREE.Vector3(.5, 0, -.8)), ...P, P[n - 1].clone().add(new THREE.Vector3(-.5, 0, .9))], false, 'catmullrom', .5);
  // camí de terra amb vora d'herba fosca i pedretes
  const N = 260, pts = curve.getSpacedPoints(N);
  const ribbon = (w, y, mat) => { const pos = [], idx = []; for (let i = 0; i <= N; i++) { const p = pts[i], tg = curve.getTangentAt(i / N), nx = -tg.z, nz = tg.x, l = Math.hypot(nx, nz) || 1; pos.push(p.x + nx / l * w, y, p.z + nz / l * w, p.x - nx / l * w, y, p.z - nz / l * w); if (i) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.receiveShadow = true; sc.add(m); };
  ribbon(.5, top + .006, new THREE.MeshStandardMaterial({ color: '#5E9E3A', roughness: 1, side: THREE.DoubleSide }));
  ribbon(.4, top + .012, new THREE.MeshStandardMaterial({ color: '#EBC789', roughness: 1, side: THREE.DoubleSide }));
  for (let i = 4; i < N; i += 9) { const p = pts[i], tg = curve.getTangentAt(i / N), s = (i / 9) % 2 ? 1 : -1; await put(sc, ['rock_smallFlatA', 'rock_smallFlatB', 'rock_smallFlatC'][i % 3], p.x - tg.z * .47 * s, top, p.z + tg.x * .47 * s, { s: .6, ry: R() * 6 }); }
  // plataformes de les parades: cercle de pedra + anella del color de la unitat
  for (const p of P) {
    await put(sc, 'path_stoneCircle', p.x, top + .01, p.z, { s: 1.45, ry: R() * 6 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.62, .05, 10, 64), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: .55, roughness: .4 }));
    ring.rotation.x = Math.PI / 2; ring.position.set(p.x, top + .06, p.z); sc.add(ring);
  }
  // caselles lliures (lluny del camí i de les parades)
  const free = cells.filter(([x, z]) => pts.every(p => Math.hypot(p.x - x, p.z - z) > .95) && P.every(p => Math.hypot(p.x - x, p.z - z) > 1.25));
  for (let i = free.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [free[i], free[j]] = [free[j], free[i]]; }
  // turons: un segon pis en algunes caselles lliures
  const hills = new Set(); const hillN = Math.min(5, Math.floor(free.length * .18));
  for (const [x, z] of free.slice(0, hillN)) await put(sc, ['stone_tallB', 'stone_largeC', 'stone_tallE', 'stone_largeF', 'stone_tallH'][Math.floor(R() * 5)], x, top, z, { s: 1 + R() * .4, ry: R() * 6 });
  const gy = (x, z) => hills.has(key(x, z)) ? top + 1 : top;
  // tema i arbres
  let k = hillN;
  const nb = T.city ? 4 : 5;
  for (let i = 0; i < nb && k < free.length; i++, k++) { const [x, z] = free[k], pr = T.props[i % T.props.length]; await put(sc, pr, x + (R() - .5) * .2, gy(x, z), z + (R() - .5) * .2, { ry: Math.round(R() * 4) * Math.PI / 2, s: pr.startsWith('city/') ? .85 : pr.startsWith('crops') || pr.startsWith('crop_') ? 1.2 : 1.05 }); }
  if (T.rows) for (let i = 0; i < 2 && k < free.length; i++, k++) { const [x, z] = free[k]; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b += 2) await put(sc, T.props[(a + 1) % 3], x + a * .28, gy(x, z), z + b * .2, { s: .9 }); }
  for (; k < free.length; k++) {
    const [x, z] = free[k], y = gy(x, z), pick = R();
    if (pick < .55) await put(sc, T.trees[Math.floor(R() * T.trees.length)], x + (R() - .5) * .3, y, z + (R() - .5) * .3, { s: .85 + R() * .35, ry: R() * 6 });
    else if (pick < .75) await put(sc, ['plant_bushLarge', 'plant_bushDetailed', 'plant_bush'][Math.floor(R() * 3)], x, y, z, { s: 1.3, ry: R() * 6 });
    else for (let f = 0; f < 4; f++) await put(sc, ['flower_redA', 'flower_yellowB', 'flower_purpleA', 'flower_redC', 'grass_large', 'mushroom_red'][Math.floor(R() * 6)], x + (R() - .5) * .7, y, z + (R() - .5) * .7, { s: 1.3, ry: R() * 6 });
  }
  // herbetes a les vores del camí
  for (let i = 0; i < 40; i++) { const [x, z] = cells[Math.floor(R() * cells.length)]; const px = x + (R() - .5) * .9, pz = z + (R() - .5) * .9; if (pts.every(p => Math.hypot(p.x - px, p.z - pz) > .55) && P.every(p => Math.hypot(p.x - px, p.z - pz) > .8)) await put(sc, R() < .7 ? 'grass' : 'grass_leafs', px, gy(x, z), pz, { s: 1.2, ry: R() * 6 }); }
  // platja: palmeres, roques i una barqueta
  const edge = cells.filter(([x, z]) => !isP.has(key(x + 1, z)) || !isP.has(key(x - 1, z)) || !isP.has(key(x, z + 1)) || !isP.has(key(x, z - 1)));
  for (let i = 0; i < 6; i++) { const [x, z] = edge[Math.floor(R() * edge.length)], d = Math.hypot(x, z) || 1, bx = x + x / d * 1.05, bz = z + z / d * 1.05; if (bz > 3.5 && Math.abs(bx) < 2.5) continue; await put(sc, i < 3 ? ['tree_palmTall', 'tree_palmBend', 'tree_palmDetailedTall'][i] : ['rock_largeB', 'rock_smallC', 'stone_largeA'][i - 3], bx, .12 + .02, bz, { s: i < 3 ? 1.35 : 1, ry: R() * 6 }); }
  await put(sc, 'canoe', 3.9, .05, 4.6, { ry: .7, s: 1.4 });
  // bandera de la unitat al cim (darrere de la primera parada)
  const fx = P[0].x * .2, fz = -5.2, fy = gy(Math.round(fx), -5) ;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, 1.6, 10), new THREE.MeshStandardMaterial({ color: '#5B4636' })); pole.position.set(fx, top + .8, fz); pole.castShadow = true; sc.add(pole);
  const cl = new THREE.PlaneGeometry(.7, .44, 12, 4); cl.translate(.35, 0, 0); { const p = cl.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 6) * .05); } cl.computeVertexNormals();
  const flag = new THREE.Mesh(cl, new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, roughness: .6 })); flag.position.set(fx + .03, top + 1.35, fz); flag.castShadow = true; sc.add(flag); void fy;
  // càmera 3/4
  const cam = new THREE.PerspectiveCamera(28, W / H, .1, 120); cam.position.set(0, 19.6, 21); cam.lookAt(0, .2, .6); cam.updateMatrixWorld();
  const nodes = P.map(p => { const v = new THREE.Vector3(p.x, top + .05, p.z).project(cam); return [+((v.x + 1) / 2 * 100).toFixed(2), +((1 - v.y) / 2 * 100).toFixed(2)]; });
  const url = finish(r, sc, cam, W, H, { focus: cam.position.distanceTo(new THREE.Vector3(0, 1, .6)), aperture: .0003, maxblur: .003 });
  return { url, nodes };
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
