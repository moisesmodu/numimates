// Empaqueta el món 3D d'en Bit (scripts/3d/bit3d.mjs + three.js) en un sol fitxer: tech-3d.js (mòdul ES, minificat),
// i les peces de Kenney (CC0) que fa servir en un sol GLB petit: img/tech/3d/bit/nature.glb (es baixa quan cal, a part).
// Ús: node scripts/3d/build.mjs   (cal haver fet `npm install`; three i esbuild són devDependencies)
//     PACK=0 node scripts/3d/build.mjs   només el codi (no torna a fer el GLB)
import fs from 'fs';
import { build } from 'esbuild';
import { Matrix4, Vector3, Quaternion } from 'three';
const root = new URL('../../', import.meta.url).pathname;

/* ---------- 1. paquet de peces: només les que fa servir el món d'en Bit, sense UV, amb vèrtexs quantitzats ----------
   Cada peça és un node amb el seu nom (p. ex. «tree_oak») i una malla amb una primitiva per material (el nom del material
   de Kenney es conserva: leafsGreen, woodBark, stone…, i bit3d.mjs les recoloreja). Posicions en int16 (KHR_mesh_quantization):
   el node porta l'escala i la translació per tornar-les a la mida real; sense normals (es calculen en carregar). */
export const PACK = ['tree_oak', 'tree_fat', 'tree_detailed', 'tree_pineRoundC', 'tree_default', 'tree_palmTall', 'tree_palmBend', 'tree_palmShort',
  'plant_bushLarge', 'plant_bushDetailed', 'plant_bush', 'flower_redA', 'flower_yellowA', 'flower_purpleA', 'flower_redC', 'flower_purpleC', 'flower_yellowB',
  'grass', 'grass_large', 'grass_leafs', 'mushroom_red', 'mushroom_redGroup', 'mushroom_tanGroup', 'lily_large', 'lily_small',
  'stone_largeA', 'stone_largeB', 'stone_largeC', 'stone_largeE', 'stone_tallC', 'stone_smallA', 'stone_smallE', 'rock_smallFlatA', 'log', 'stump_round', 'canoe'];
const SRC = root + 'scripts/3d/assets/nature/', OUT = root + 'img/tech/3d/bit/';

function readGlb(file) {
  const d = fs.readFileSync(file), jl = d.readUInt32LE(12), json = JSON.parse(d.subarray(20, 20 + jl).toString());
  const bo = 20 + jl, bin = d.subarray(bo + 8, bo + 8 + d.readUInt32LE(bo));
  return { json, bin };
}
const COMP = { 5120: [Int8Array, 1], 5121: [Uint8Array, 1], 5122: [Int16Array, 2], 5123: [Uint16Array, 2], 5125: [Uint32Array, 4], 5126: [Float32Array, 4] };
const NC = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
function readAcc({ json, bin }, i) {
  const a = json.accessors[i], bv = json.bufferViews[a.bufferView], [T, sz] = COMP[a.componentType], n = NC[a.type];
  const stride = bv.byteStride || sz * n, off = (bv.byteOffset || 0) + (a.byteOffset || 0), out = new Float64Array(a.count * n);
  const dv = new DataView(bin.buffer, bin.byteOffset, bin.byteLength);
  const get = { 5120: 'getInt8', 5121: 'getUint8', 5122: 'getInt16', 5123: 'getUint16', 5125: 'getUint32', 5126: 'getFloat32' }[a.componentType];
  for (let k = 0; k < a.count; k++) for (let c = 0; c < n; c++) out[k * n + c] = dv[get](off + k * stride + c * sz, true);
  void T; return out;
}
function packAssets() {
  const nodes = [], meshes = [], accessors = [], views = [], mats = [], matIx = {}, chunks = [];
  let len = 0;
  const push = (buf, target, stride) => { const pad = (4 - (len % 4)) % 4; if (pad) { chunks.push(Buffer.alloc(pad)); len += pad; } views.push({ buffer: 0, byteOffset: len, byteLength: buf.length, target, ...(stride ? { byteStride: stride } : {}) }); chunks.push(buf); len += buf.length; return views.length - 1; };
  for (const name of PACK) {
    const g = readGlb(SRC + name + '.glb'), J = g.json, prims = {};
    // recorre l'escena aplicant les transformacions dels nodes
    const walk = (ni, parent) => {
      const nd = J.nodes[ni], m = new Matrix4();
      if (nd.matrix) m.fromArray(nd.matrix); else m.compose(new Vector3(...(nd.translation || [0, 0, 0])), new Quaternion(...(nd.rotation || [0, 0, 0, 1])), new Vector3(...(nd.scale || [1, 1, 1])));
      const W = parent.clone().multiply(m);
      if (nd.mesh != null) for (const p of J.meshes[nd.mesh].primitives) {
        const pos = readAcc(g, p.attributes.POSITION), idx = p.indices != null ? readAcc(g, p.indices) : null;
        const mat = J.materials[p.material] || { name: '_defaultMat' }, key = mat.name;
        const P = prims[key] || (prims[key] = { mat, pos: [], idx: [] }), base = P.pos.length / 3, v = new Vector3();
        for (let k = 0; k < pos.length; k += 3) { v.set(pos[k], pos[k + 1], pos[k + 2]).applyMatrix4(W); P.pos.push(v.x, v.y, v.z); }
        const ids = idx || Array.from({ length: pos.length / 3 }, (_, k) => k); for (const k of ids) P.idx.push(base + k);
      }
      for (const c of nd.children || []) walk(c, W);
    };
    for (const ni of J.scenes[J.scene || 0].nodes) walk(ni, new Matrix4());
    // caixa de la peça sencera: totes les primitives comparteixen la mateixa quantització
    const lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
    for (const P of Object.values(prims)) for (let k = 0; k < P.pos.length; k++) { lo[k % 3] = Math.min(lo[k % 3], P.pos[k]); hi[k % 3] = Math.max(hi[k % 3], P.pos[k]); }
    const ctr = lo.map((l, i) => (l + hi[i]) / 2), half = lo.map((l, i) => Math.max(1e-6, (hi[i] - l) / 2));
    const primitives = [];
    for (const P of Object.values(prims)) {
      // vèrtexs soldats (els de Kenney estan repetits per cara): les normals es calculen en carregar, i el material fa ombrejat pla
      const map = new Map(), q = [], idx = [];
      for (const k of P.idx) { const v = [0, 1, 2].map(c => Math.round((P.pos[k * 3 + c] - ctr[c]) / half[c] * 32767)), key = v.join(); let j = map.get(key); if (j == null) { j = q.length / 3; map.set(key, j); q.push(...v); } idx.push(j); }
      // fora els triangles que s'han quedat sense àrea en soldar
      const tri = []; for (let k = 0; k < idx.length; k += 3) { const [a, b, c] = idx.slice(k, k + 3); if (a !== b && b !== c && a !== c) tri.push(a, b, c); }
      const n = q.length / 3, qp = Buffer.alloc(n * 8); q.forEach((x, k) => qp.writeInt16LE(x, Math.floor(k / 3) * 8 + (k % 3) * 2));
      const big = n > 65535, ib = Buffer.alloc(tri.length * (big ? 4 : 2)); tri.forEach((x, k) => big ? ib.writeUInt32LE(x, k * 4) : ib.writeUInt16LE(x, k * 2));
      accessors.push({ bufferView: push(qp, 34962, 8), componentType: 5122, normalized: true, count: n, type: 'VEC3', min: [-1, -1, -1], max: [1, 1, 1] });
      const aP = accessors.length - 1;
      accessors.push({ bufferView: push(ib, 34963), componentType: big ? 5125 : 5123, count: tri.length, type: 'SCALAR' });
      const aI = accessors.length - 1;
      const mk = P.mat.name; if (matIx[mk] == null) { matIx[mk] = mats.length; mats.push({ name: mk, pbrMetallicRoughness: { baseColorFactor: (P.mat.pbrMetallicRoughness || {}).baseColorFactor || [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: .85 } }); }
      primitives.push({ attributes: { POSITION: aP }, indices: aI, material: matIx[mk] });
    }
    meshes.push({ name, primitives });
    nodes.push({ name, mesh: meshes.length - 1, translation: ctr, scale: half });
  }
  const gltf = { asset: { version: '2.0', generator: 'Numi Tech · scripts/3d/build.mjs (Kenney Nature Kit, CC0)' }, extensionsUsed: ['KHR_mesh_quantization'], extensionsRequired: ['KHR_mesh_quantization'],
    scene: 0, scenes: [{ nodes: nodes.map((_, i) => i) }], nodes, meshes, materials: mats, accessors, bufferViews: views, buffers: [{ byteLength: 0 }] };
  let bin = Buffer.concat(chunks); bin = Buffer.concat([bin, Buffer.alloc((4 - bin.length % 4) % 4)]); gltf.buffers[0].byteLength = bin.length;
  let js = Buffer.from(JSON.stringify(gltf)); js = Buffer.concat([js, Buffer.alloc((4 - js.length % 4) % 4, 0x20)]);
  const head = Buffer.alloc(12); head.writeUInt32LE(0x46546C67, 0); head.writeUInt32LE(2, 4); head.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8);
  const c0 = Buffer.alloc(8); c0.writeUInt32LE(js.length, 0); c0.writeUInt32LE(0x4E4F534A, 4);
  const c1 = Buffer.alloc(8); c1.writeUInt32LE(bin.length, 0); c1.writeUInt32LE(0x004E4942, 4);
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(OUT + 'nature.glb', Buffer.concat([head, c0, js, c1, bin]));
  fs.copyFileSync(root + 'scripts/3d/assets/LICENSE-kenney-nature.txt', OUT + 'LICENSE-kenney-nature.txt');
  console.log('img/tech/3d/bit/nature.glb', (fs.statSync(OUT + 'nature.glb').size / 1024).toFixed(1) + ' kB,', PACK.length, 'peces');
}
if (process.env.PACK !== '0' && fs.existsSync(SRC)) packAssets();

/* ---------- 2. el codi ---------- */
await build({ entryPoints: [root + 'scripts/3d/bit3d.mjs'], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: root + 'tech-3d.js', legalComments: 'eof', logLevel: 'info' });
