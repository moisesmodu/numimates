// Retrats 3D d'en Bit (img/tech/bit-<posa>.webp, fons transparent), amb el model de bit3d.mjs (makeBit).
// Mòdul per al navegador: el fa servir scripts/3d/render-scenes.mjs →  ONLY=portraits node scripts/3d/render-scenes.mjs
// Llum d'estudi: entorn (RoomEnvironment → PMREM) per als reflexos del plàstic, llum principal càlida amb ombra suau,
// contrallum fred i una llum de farciment; plàstic amb vernís (clearcoat). Es renderitza a mida doble i es redueix (antialiàsing),
// es retalla al contingut i s'encaixa a la mida de sortida (W × H), centrat i a baix (l'app el posa amb xMidYMax).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { makeBit } from './bit3d.mjs';

// retalla el contingut (alfa) d'un llenç i l'encaixa a W × H (centrat a l'amplada, recolzat a baix)
export function fitCanvas(src, W, H, o = {}) {
  const w = src.width, h = src.height, c0 = document.createElement('canvas'); c0.width = w; c0.height = h; const g0 = c0.getContext('2d'); g0.drawImage(src, 0, 0);
  const d = g0.getImageData(0, 0, w, h).data, th = o.alpha ?? 24; let x0 = w, y0 = h, x1 = 0, y1 = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > th) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1, k = Math.min(W / bw, H / bh), out = document.createElement('canvas'); out.width = W; out.height = H;
  const g = out.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  // reducció en dos passos (millor antialiàsing que d'un cop)
  let s = c0, sx = x0, sy = y0, sw = bw, sh = bh;
  if (k < .5) { const m = document.createElement('canvas'); m.width = Math.round(bw * k * 2); m.height = Math.round(bh * k * 2); const gm = m.getContext('2d'); gm.imageSmoothingQuality = 'high'; gm.drawImage(c0, x0, y0, bw, bh, 0, 0, m.width, m.height); s = m; sx = 0; sy = 0; sw = m.width; sh = m.height; }
  const dw = bw * k, dh = bh * k; g.drawImage(s, sx, sy, sw, sh, (W - dw) / 2, H - dh, dw, dh);
  return out.toDataURL('image/webp', o.q ?? .9);
}
export function studio(r, sc, o = {}) {
  const pm = new THREE.PMREMGenerator(r), env = pm.fromScene(new RoomEnvironment(), .04).texture; pm.dispose();
  sc.environment = env; sc.environmentIntensity = o.envI ?? .55;
  sc.add(new THREE.HemisphereLight('#EAF4FF', '#8C93B0', o.hemi ?? .55));
  const key = new THREE.DirectionalLight('#FFF1DC', o.key ?? 2.3); key.position.set(...(o.keyP || [2.6, 4.2, 3.4])); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 6; key.shadow.bias = -.0004; key.shadow.normalBias = .02;
  Object.assign(key.shadow.camera, { left: -2, right: 2, top: 2, bottom: -2, near: .5, far: 20 }); sc.add(key);
  const rim = new THREE.DirectionalLight('#9CC6FF', o.rim ?? 1.6); rim.position.set(-3, 2.4, -2.6); sc.add(rim);
  const fill = new THREE.DirectionalLight('#FFE6F2', o.fill ?? .45); fill.position.set(-2.5, .8, 3); sc.add(fill);
  return env;
}
export function portrait(pose = 'idle', o = {}) {
  const S = o.size || 1400, r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(S, S); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.08;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.setClearColor(0x000000, 0);
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(28, 1, .1, 50), env = studio(r, sc);
  const b = makeBit(); b.bit.scale.setScalar(1); b.ledGlow.visible = false; b.carry.visible = false; sc.add(b.bit);
  // plàstic de joguina amb vernís (com a les capçaleres)
  const gloss = {}; b.bit.traverse(x => { if (!x.isMesh || !x.material || x.material.isMeshBasicMaterial || x.material.emissiveIntensity > .5) return; const k = x.material.uuid;
    gloss[k] = gloss[k] || new THREE.MeshPhysicalMaterial({ color: x.material.color, map: x.material.map || null, roughness: Math.min(.42, x.material.roughness), metalness: x.material.metalness, clearcoat: 1, clearcoatRoughness: .12 }); x.material = gloss[k]; x.castShadow = true; });
  // ombra de contacte a terra
  const sh = new THREE.Mesh(new THREE.CircleGeometry(.5, 40), new THREE.ShadowMaterial({ opacity: .2 })); sh.rotation.x = -Math.PI / 2; sh.receiveShadow = true; sc.add(sh);
  const A = b.arms, H = b.head;
  const up = (a, s, z) => { a.rotation.z = s * z; if (Math.abs(z) > 1.5) { a.scale.set(2, 2, 2); a.rotation.x = 0; } };
  if (pose === 'happy') { up(A[0], -1, 1.0); up(A[1], 1, 1.0); H.rotation.z = .1; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'win') { up(A[0], -1, 1.95); up(A[1], 1, 1.95); b.body.position.y = .12; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'dance') { up(A[0], -1, 1.95); up(A[1], 1, -.3); b.body.rotation.z = .14; H.rotation.z = -.16; b.eyes.visible = false; b.joy.visible = true; }
  if (pose === 'wave') { up(A[1], 1, 1.95); A[1].rotation.x = -.2; H.rotation.z = .08; }
  if (pose === 'think') { A[1].rotation.z = 1.6; A[1].rotation.x = -1.1; H.rotation.z = .18; H.rotation.x = -.06; b.eyes.position.x = .03; b.eyes.position.y = .07; }
  if (pose === 'sad') { H.rotation.x = .28; up(A[0], -1, -.15); up(A[1], 1, -.15); b.eyes.visible = false; b.sad.visible = true; b.smile.rotation.z = 0; b.smile.position.y = -.1; }
  b.bit.rotation.y = -.32;
  cam.position.set(1.0, 1.05, 2.9); cam.lookAt(0, pose === 'win' ? .7 : .62, 0);
  r.render(sc, cam);
  const url = fitCanvas(r.domElement, o.W || 280, o.H || 490, { q: o.q ?? .9 }); env.dispose(); r.dispose(); return url;
}
