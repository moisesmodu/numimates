// Retrats 3D del Maqueen Lite V5 (la mascota de Tech Robòtica): img/tech/maqueen-<posa>.webp, fons transparent, 640 × 640.
// Mòdul per al navegador, amb el model de robo3d.mjs (makeBot, drawMicrobit); el fa servir scripts/3d/render-scenes.mjs →
//   ONLY=portraits node scripts/3d/render-scenes.mjs
// Llum d'estudi amb entorn (els metalls de les rodes, els motors i els ultrasons necessiten reflexos), ombra suau i
// contrallum; es renderitza a mida doble i es redueix.
import * as THREE from 'three';
import { makeBot, drawMicrobit } from './robo3d.mjs';
import { studio } from './portraits.mjs';
const FACES = { idle: '00000 01010 00000 10001 01110', happy: '01010 01010 00000 10001 01110', win: '01010 00000 11111 10001 01110', think: '00000 01010 00000 01110 00000' };
export function portrait(pose = 'idle', size = 640, o = {}) {
  const S = size * 2, r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(S, S); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.setClearColor(0x000000, 0);
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(27, 1, .1, 200);
  const env = studio(r, sc, { envI: .8, key: 2.6, keyP: [10, 18, 14], rim: 1.8, fill: .5, hemi: .5 });
  const key = sc.children.find(x => x.isDirectionalLight && x.castShadow); Object.assign(key.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 60 }); key.shadow.radius = 5;
  const B = makeBot(); sc.add(B.bot);
  // la matriu es mira des del davant del robot: girada 180° perquè la cara es llegeixi bé
  drawMicrobit(B.mbT, (FACES[pose] || FACES.idle).split(' ').reverse().map(row => [...row].reverse().join('')).join(' '));
  B.mbMat.emissiveIntensity = 2.2;
  const lit = pose !== 'think';
  B.heads.forEach(h => { h.mat.color.set(lit ? '#2EE6F0' : '#DADFE8'); h.mat.emissive.set(lit ? '#2EE6F0' : '#000000'); h.mat.emissiveIntensity = lit ? 2.2 : 0; h.gl.material.color.set('#2EE6F0'); h.gl.material.opacity = lit ? .8 : 0; h.pool.visible = false; });
  B.unders.forEach(u => { u.visible = false; }); B.lineS.forEach(l => { l.dot.visible = false; l.ray.visible = false; });
  B.shadow.material.opacity = .35;
  const sh = new THREE.Mesh(new THREE.CircleGeometry(7, 48), new THREE.ShadowMaterial({ opacity: .22 })); sh.rotation.x = -Math.PI / 2; sh.position.y = .005; sh.receiveShadow = true; sc.add(sh);
  B.bot.rotation.y = Math.PI + (pose === 'win' ? .05 : .12); if (pose === 'happy') B.bot.rotation.z = .05; if (pose === 'win') { B.bot.rotation.x = -.12; B.bot.position.y = .6; }
  cam.position.set(10, 15, 18); cam.lookAt(0, 2.2, 0);
  r.render(sc, cam);
  // reducció a la mida final (antialiàsing)
  const out = document.createElement('canvas'); out.width = out.height = size; const g = out.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(r.domElement, 0, 0, size, size);
  const url = out.toDataURL('image/webp', o.q ?? .88); env.dispose(); r.dispose(); return url;
}
