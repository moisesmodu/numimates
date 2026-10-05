// Retrats 3D del Maqueen Lite V5 (la mascota de Tech Robòtica): img/tech/maqueen-<posa>.webp, fons transparent.
// Ús: node scripts/3d/maqueen-portrait.mjs   (cal el servidor estàtic a http://127.0.0.1:5190; Playwright o puppeteer com render-scenes.mjs)
import * as THREE from 'three';
import { makeBot, drawMicrobit } from './robo3d.mjs';
const FACES = { idle: '00000 01010 00000 10001 01110', happy: '01010 01010 00000 10001 01110', win: '01010 00000 11111 10001 01110', think: '00000 01010 00000 01110 00000' };
export function portrait(pose = 'idle', size = 640) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(size, size); r.setPixelRatio(1); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.15;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(27, 1, .1, 200);
  sc.add(new THREE.HemisphereLight('#E6F4FF', '#7080A0', 1.4));
  const key = new THREE.DirectionalLight('#FFF3DC', 2.6); key.position.set(10, 18, 14); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10 }); sc.add(key);
  const rim = new THREE.DirectionalLight('#9CC2FF', 1.6); rim.position.set(-12, 8, -10); sc.add(rim);
  const B = makeBot(); sc.add(B.bot);
  // la matriu es mira des del davant del robot: girada 180° perquè la cara es llegeixi bé
  drawMicrobit(B.mbT, (FACES[pose] || FACES.idle).split(' ').reverse().map(r => [...r].reverse().join('')).join(' '));
  const lit = pose !== 'think'; B.heads.forEach(h => { const m = h.material || (h.children && h.children[0] && h.children[0].material); if (m && m.emissive) { m.emissive.set(lit ? '#2EE6F0' : '#000'); m.emissiveIntensity = 1.2; } });
  const sh = new THREE.Mesh(new THREE.CircleGeometry(6.2, 40), new THREE.ShadowMaterial({ opacity: .25 })); sh.rotation.x = -Math.PI / 2; sh.receiveShadow = true; sc.add(sh);
  B.bot.rotation.y = Math.PI + (pose === 'win' ? .05 : .12); if (pose === 'happy') B.bot.rotation.z = .05; if (pose === 'win') { B.bot.rotation.x = -.12; B.bot.position.y = .6; }
  cam.position.set(10, 15, 18); cam.lookAt(0, 2.2, 0);
  r.render(sc, cam); const url = r.domElement.toDataURL('image/webp', .9); r.dispose(); return url;
}
