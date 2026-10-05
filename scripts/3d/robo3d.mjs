/* ===== Numi Tech · Robòtica: l'arena i el Maqueen Lite V5 en 3D (three.js) =====
   Font de tech-robo3d.js (es genera amb `node scripts/3d/build-robo.mjs`; three.js va empaquetat a dins).
   · Taula de fusta, tapet amb la cinta negra (textura dibuixada amb roboFloorPaint de tech-robo.js), caixes de fusta,
     llaunes, el focus de llum, el dohyo de sumo i el robot: xassís, rodes amb pneumàtic, bola de suport, portapiles,
     micro:bit amb la matriu de LEDs que s'encén, mòdul d'ultrasons amb els dos transductors, llums RGB del cotxe i
     llum de sota. El con dels ultrasons i el rastre es veuen mentre corre el programa.
   · L'API la fa servir tech-robo.js: create(contenidor, W, S, opcions) → { sync(S), reset(W, S), dispose }.
   · Les unitats són centímetres: el robot fa 8,1 × 8,5 cm, com el de veritat. La simulació és la de tech-robo.js. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const COL = { red: '#FF3B30', green: '#2BD45A', yellow: '#FFD60A', blue: '#2F7BFF', purple: '#C43BFF', cyan: '#2EE6F0', white: '#FFFFFF', orange: '#FF9F0A' };
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .7, metalness: 0, ...o });
const mesh = (g, m, o = {}) => { const x = new THREE.Mesh(g, m); x.castShadow = o.cast !== false; x.receiveShadow = !!o.recv; if (o.p) x.position.set(...o.p); if (o.r) x.rotation.set(...o.r); if (o.s) Array.isArray(o.s) ? x.scale.set(...o.s) : x.scale.setScalar(o.s); return x; };
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
const glowTex = canvasTex(64, 64, (g, w) => { const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.35, 'rgba(255,255,255,.6)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
const woodTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#C99560'; g.fillRect(0, 0, w, h); for (let i = 0; i < 60; i++) { g.strokeStyle = `rgba(${120 + Math.random() * 40},${70 + Math.random() * 30},30,${.08 + Math.random() * .12})`; g.lineWidth = 1 + Math.random() * 3; const y = Math.random() * h; g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(w * .3, y + Math.random() * 10 - 5, w * .7, y + Math.random() * 10 - 5, w, y + Math.random() * 6 - 3); g.stroke(); } });
woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;

/* ---------- El Maqueen Lite V5 ---------- */
export function makeBot(other) {
  const bot = new THREE.Group(), m = {
    pcb: std(other ? '#5B6478' : '#16233D', { roughness: .45, metalness: .15 }), edge: std('#E5B53A', { roughness: .35, metalness: .6 }), tyre: std('#16181D', { roughness: .9 }), hub: std('#F2B21B', { roughness: .4 }),
    bat: std('#2A2F3A', { roughness: .6 }), mb: std('#0D0D0F', { roughness: .35, metalness: .2 }), gold: std('#D8A93A', { roughness: .3, metalness: .8 }), btn: std('#3A3D45'),
    us: std('#1F5FBF', { roughness: .45 }), usC: std('#D7DCE6', { roughness: .25, metalness: .7 }), usM: std('#565C69', { roughness: .8 }), wht: std('#F4F6FA', { roughness: .4 })
  };
  // xassís: placa arrodonida de 8,1 × 8,5 cm
  const sh = new THREE.Shape(); const w = 4.05, f = 4.25, r = 1.6;
  sh.moveTo(-w + r, -f); sh.lineTo(w - r, -f); sh.quadraticCurveTo(w, -f, w, -f + r); sh.lineTo(w, f - .8); sh.quadraticCurveTo(w, f, w - .8, f); sh.lineTo(-w + .8, f); sh.quadraticCurveTo(-w, f, -w, f - .8); sh.lineTo(-w, -f + r); sh.quadraticCurveTo(-w, -f, -w + r, -f);
  const pcbG = new THREE.ExtrudeGeometry(sh, { depth: .16, bevelEnabled: true, bevelThickness: .04, bevelSize: .06, bevelSegments: 2 }); pcbG.rotateX(Math.PI / 2);
  const pcb = mesh(pcbG, m.pcb, { p: [0, 2.35, 0] }); bot.add(pcb);
  const edgeG = new THREE.EdgesGeometry(pcbG, 30); const edge = new THREE.LineSegments(edgeG, new THREE.LineBasicMaterial({ color: '#E5B53A' })); edge.position.y = 2.35; bot.add(edge);
  // portapiles (3 × AA) a sota
  bot.add(mesh(new RoundedBoxGeometry(5.6, 1.5, 5.8, 2, .25), m.bat, { p: [0, 1.4, .6] }));
  // rodes de 4,2 cm amb pneumàtic
  const wheels = [-1, 1].map(s => { const g = new THREE.Group(); g.position.set(s * 4.3, 2.1, .6);
    g.add(mesh(new THREE.CylinderGeometry(2.1, 2.1, 1.1, 28), m.tyre, { r: [0, 0, Math.PI / 2] }));
    g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 1.16, 18), m.hub, { r: [0, 0, Math.PI / 2] }));
    for (let i = 0; i < 5; i++) { const sp = mesh(new THREE.BoxGeometry(1.18, .22, 2.0), m.tyre, { r: [i / 5 * Math.PI, 0, 0] }); g.add(sp); }
    bot.add(g); return g; });
  // bola de suport al davant
  bot.add(mesh(new THREE.SphereGeometry(.55, 16, 12), m.usC, { p: [0, .55, -3.1] }));
  // micro:bit (5,2 × 4,2 cm) amb la matriu de LEDs
  const mbT = { c: document.createElement('canvas') }; mbT.c.width = 256; mbT.c.height = 208; mbT.tex = new THREE.CanvasTexture(mbT.c); mbT.tex.colorSpace = THREE.SRGBColorSpace; mbT.tex.anisotropy = 8;
  const mbMat = new THREE.MeshStandardMaterial({ map: mbT.tex, emissiveMap: mbT.tex, emissive: '#ffffff', emissiveIntensity: .55, roughness: .4, metalness: .1 });
  const mbG = new THREE.BoxGeometry(5.2, .16, 4.2), mbMats = [m.mb, m.mb, mbMat, m.mb, m.mb, m.mb];
  const mb = new THREE.Mesh(mbG, mbMats); mb.position.set(0, 2.62, .5); mb.castShadow = true; bot.add(mb);
  bot.add(mesh(new THREE.BoxGeometry(5.2, .7, .5), m.bat, { p: [0, 2.6, 2.75] }));   // connector
  // ultrasons: placa blava dreta amb dos transductors mirant endavant
  const us = new THREE.Group(); us.position.set(0, 3.2, -4.0);
  us.add(mesh(new RoundedBoxGeometry(4.6, 2.0, .16, 2, .06), m.us));
  [-1.25, 1.25].forEach(x => { us.add(mesh(new THREE.CylinderGeometry(.8, .8, .95, 22), m.usC, { p: [x, 0, -.5], r: [Math.PI / 2, 0, 0] })); us.add(mesh(new THREE.CylinderGeometry(.62, .62, .2, 22), m.usM, { p: [x, 0, -.98], r: [Math.PI / 2, 0, 0] })); });
  us.add(mesh(new THREE.BoxGeometry(.9, .45, .3), m.wht, { p: [0, .62, -.1] }));
  bot.add(us);
  // llums RGB del cotxe (cantonades del davant) i llum de sota
  const heads = [-1, 1].map(s => { const mat = new THREE.MeshStandardMaterial({ color: '#C7CBD6', emissive: '#000000', roughness: .2 }); const h = mesh(new THREE.SphereGeometry(.42, 14, 10), mat, { p: [s * 2.85, 2.55, -3.75] });
    const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffffff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); gl.scale.setScalar(4.2); h.add(gl); bot.add(h); return { h, mat, gl }; });
  const underM = new THREE.MeshBasicMaterial({ map: glowTex, color: '#ffffff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
  const under = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), underM); under.rotation.x = -Math.PI / 2; under.position.y = .12; bot.add(under);
  // sensors de línia (s'encenen sobre negre)
  const lineDots = [-1.25, 0, 1.25].map(x => { const d = new THREE.Mesh(new THREE.CircleGeometry(.3, 12), new THREE.MeshBasicMaterial({ color: '#2EE6F0', transparent: true, opacity: 0 })); d.rotation.x = -Math.PI / 2; d.position.set(x, .1, -3.6); bot.add(d); return d; });
  bot.traverse(o => { if (o.isMesh && o !== under && !lineDots.includes(o)) o.castShadow = true; });
  return { bot, wheels, mbT, mbMat, heads, under, underM, lineDots, mx: null };
}
export function drawMicrobit(T, rows, num) {
  const g = T.c.getContext('2d'), w = T.c.width, h = T.c.height;
  g.fillStyle = '#121214'; g.fillRect(0, 0, w, h); g.fillStyle = '#C9A24A'; g.fillRect(0, h - 22, w, 22); for (let i = 0; i < 20; i++) { g.fillStyle = '#121214'; g.fillRect(8 + i * 12.4, h - 20, 3, 18); }
  g.fillStyle = '#E8E8E8'; g.font = '700 13px sans-serif'; g.fillText('A', 18, 104); g.fillText('B', w - 28, 104);
  [[28, 86], [w - 28, 86]].forEach(([x, y]) => { g.fillStyle = '#2A2A2A'; g.beginPath(); g.arc(x, y, 13, 0, 7); g.fill(); g.fillStyle = '#4A4A4A'; g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill(); });
  const r = rows ? rows.split(' ') : null;
  for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) { const on = r ? r[y][x] === '1' : false, cx = 78 + x * 25, cy = 34 + y * 25;
    if (on) { const gr = g.createRadialGradient(cx, cy, 1, cx, cy, 13); gr.addColorStop(0, 'rgba(255,90,70,1)'); gr.addColorStop(1, 'rgba(255,40,30,0)'); g.fillStyle = gr; g.fillRect(cx - 13, cy - 13, 26, 26); }
    g.fillStyle = on ? '#FF4A3A' : '#3A1C20'; g.fillRect(cx - 4, cy - 6, 8, 12); }
  if (num != null) { g.fillStyle = '#FF4A3A'; g.shadowColor = '#FF3B30'; g.shadowBlur = 12; g.font = '900 86px Lexend,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(num).slice(-2), w / 2, 92); g.shadowBlur = 0; g.textAlign = 'left'; }
  T.tex.needsUpdate = true;
}

export function create(el, W, S, opt = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: !!opt.shot });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  el.appendChild(renderer.domElement); renderer.domElement.className = 'b3c';
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(34, 1, 1, 2000);
  const hemi = new THREE.HemisphereLight('#EAF4FF', '#7A6A55', 1.0); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#FFF4E0', 2.0); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0005; sun.shadow.normalBias = .4; scene.add(sun, sun.target);
  let world = null, st = null, R = null, lead = null, alive = true, clock = new THREE.Clock(), drag = { yaw: 0, on: false }, mode = opt.mode || 'over', chase = { p: new THREE.Vector3(), t: new THREE.Vector3(), ok: false };
  const P = (x, y) => new THREE.Vector3(x - st.W.w / 2, 0, y - st.W.h / 2);
  function build(W0, S0) {
    if (world) { scene.remove(world); world.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
    world = new THREE.Group(); scene.add(world); st = { W: W0, objs: [], cps: -1, dark: null };
    const { w, h } = W0;
    // taula i tapet
    const pad = W0.border || W0.ring ? 26 : 1, tw = w + pad, th = h + pad; woodTex.repeat.set(tw / 60, th / 60);   // sense vora, la taula s'acaba on s'acaba el tapet (més enllà, l'aire)
    world.add(mesh(new RoundedBoxGeometry(tw, 4, th, 3, 1.5), std('#C99560', { map: woodTex, roughness: .75 }), { p: [0, -2.05, 0], recv: true, cast: false }));
    const k = Math.min(10, 2048 / Math.max(w, h)), mc = document.createElement('canvas'); mc.width = Math.round(w * k); mc.height = Math.round(h * k);
    st.mat = { c: mc, k, tex: new THREE.CanvasTexture(mc) }; st.mat.tex.colorSpace = THREE.SRGBColorSpace; st.mat.tex.anisotropy = 8;
    paintMat(S0);
    world.add(mesh(new THREE.BoxGeometry(w, .12, h), [std('#EDEBE4'), std('#EDEBE4'), new THREE.MeshStandardMaterial({ map: st.mat.tex, roughness: .9 }), std('#EDEBE4'), std('#EDEBE4'), std('#EDEBE4')], { p: [0, -.06, 0], recv: true, cast: false }));
    // parets: caixes de fusta de 8 cm d'alt; la vora, un marc de cartró
    const wm = std('#D9A56B', { map: woodTex, roughness: .7 });
    for (const r of W0.walls) world.add(mesh(new RoundedBoxGeometry(r[2], 8, r[3], 2, .5), wm, { p: [r[0] + r[2] / 2 - w / 2, 4, r[1] + r[3] / 2 - h / 2], recv: true }));
    if (W0.border && !W0.ring) { const bm = std('#B98552', { roughness: .8 }); [[0, -h / 2 - 1.2, w + 4.8, 2.4], [0, h / 2 + 1.2, w + 4.8, 2.4], [-w / 2 - 1.2, 0, 2.4, h], [w / 2 + 1.2, 0, 2.4, h]].forEach(([x, z, a, b]) => world.add(mesh(new THREE.BoxGeometry(a, 5, b), bm, { p: [x, 2.5, z], recv: true }))); }
    if (W0.ring) world.add(mesh(new THREE.CylinderGeometry(W0.ring.r + .2, W0.ring.r + .2, .3, 64, 1, true), std('#121418'), { p: [W0.ring.x - w / 2, .1, W0.ring.y - h / 2], cast: false }));
    // objectes (llaunes, pilotes, caixes)
    for (const o of S0.objs) { let g;
      if (o.kind === 'box') g = mesh(new RoundedBoxGeometry(o.r * 2, o.r * 2, o.r * 2, 2, .3), std('#D29A5A', { map: woodTex }), { p: [0, o.r, 0] });
      else if (o.kind === 'ball') g = mesh(new THREE.SphereGeometry(o.r, 24, 18), std('#FF8A1F', { roughness: .4 }), { p: [0, o.r, 0] });
      else { g = new THREE.Group(); g.add(mesh(new THREE.CylinderGeometry(o.r, o.r, 9, 28), std('#E53935', { roughness: .3, metalness: .5 }), { p: [0, 4.5, 0] })); g.add(mesh(new THREE.CylinderGeometry(o.r * .92, o.r * .92, .4, 28), std('#D9DDE6', { roughness: .2, metalness: .9 }), { p: [0, 9.1, 0] })); g.add(mesh(new THREE.CylinderGeometry(o.r * 1.01, o.r * 1.01, 3, 28, 1, true), std('#FFFFFF', { roughness: .4 }), { p: [0, 4.5, 0] })); }
      const gr = new THREE.Group(); gr.add(g); world.add(gr); st.objs.push(gr); }
    // focus de llum
    if (S0.lamp) { const lg = new THREE.Group(), lp = P(S0.lamp.x, S0.lamp.y); lg.position.copy(lp);
      lg.add(mesh(new THREE.CylinderGeometry(2.4, 2.8, .8, 20), std('#3A3F4C'), { p: [0, .4, 0] }), mesh(new THREE.CylinderGeometry(.35, .35, 9, 10), std('#8C93A6', { metalness: .6, roughness: .3 }), { p: [0, 5, 0] }));
      const bulbM = new THREE.MeshStandardMaterial({ color: '#FFF3C4', emissive: '#FFD54A', emissiveIntensity: 1.5 }); const bulb = mesh(new THREE.SphereGeometry(1.6, 18, 14), bulbM, { p: [0, 10, 0] }); lg.add(bulb);
      const pl = new THREE.PointLight('#FFD98A', 900, 120, 2); pl.position.set(0, 10, 0); lg.add(pl);
      const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#FFE38A', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); gl.scale.setScalar(16); gl.position.y = 10; lg.add(gl);
      world.add(lg); st.lamp = { bulbM, pl, gl }; }
    // l'altre robot (el líder)
    lead = S0.lead ? makeBot(true) : null; if (lead) { world.add(lead.bot); drawMicrobit(lead.mbT, '00100 01110 11011 01110 00100'); }
    // en Maqueen
    if (!R) R = makeBot(false); world.add(R.bot);
    // con dels ultrasons i rastre
    const coneG = new THREE.ConeGeometry(1, 1, 24, 1, true); coneG.translate(0, -.5, 0); coneG.rotateX(Math.PI / 2);
    st.cone = new THREE.Mesh(coneG, new THREE.MeshBasicMaterial({ color: '#2EE6F0', transparent: true, opacity: .16, depthWrite: false, side: THREE.DoubleSide })); world.add(st.cone);
    st.trailG = new THREE.BufferGeometry(); st.trail = new THREE.Line(st.trailG, new THREE.LineDashedMaterial({ color: '#2F5BEA', dashSize: 1.5, gapSize: 1.2, transparent: true, opacity: .6 })); world.add(st.trail);
    fit(); const RR = Math.max(w, h) * .75 + 20; Object.assign(sun.shadow.camera, { left: -RR, right: RR, top: RR, bottom: -RR, near: 1, far: 600 }); sun.shadow.camera.updateProjectionMatrix();
    sun.position.set(-RR * .4, RR * 1.6, RR * .9); sun.target.position.set(0, 0, 0);
    sync(S0, true);
  }
  function paintMat(S) { const g = st.mat.c.getContext('2d'); if (typeof roboFloorPaint === 'function') roboFloorPaint(g, st.W, S, st.mat.k); st.mat.tex.needsUpdate = true; }
  function fit() {
    const r = el.getBoundingClientRect(), wpx = Math.max(200, r.width), hpx = Math.max(140, r.height);
    renderer.setSize(wpx, hpx, false); cam.aspect = wpx / hpx; cam.updateProjectionMatrix();
    const { w, h } = st.W, pts = []; for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const y of [0, 9]) pts.push(new THREE.Vector3(sx * (w / 2 + 2), y, sz * (h / 2 + 2)));
    let D = 40; for (let i = 0; i < 80; i++) { setCam(D, 0); cam.updateMatrixWorld(); if (pts.every(p => { const q = p.clone().project(cam); return Math.abs(q.x) < .96 && Math.abs(q.y) < .94; })) break; D *= 1.04; }
    st.D = D; setCam(D, drag.yaw);
  }
  function setCam(D, yaw) { const e = .9; cam.position.set(Math.sin(yaw) * Math.cos(e) * D, Math.sin(e) * D, Math.cos(yaw) * Math.cos(e) * D); cam.lookAt(0, -2, 2); }
  // l'estat de la simulació → el dibuix
  function sync(S, hard) {
    if (!st) return;
    const p = P(S.x, S.y); R.bot.position.set(p.x, 0, p.z); R.bot.rotation.y = -S.h * Math.PI / 180;
    const vl = S.vl || 0, vr = S.vr || 0, dt = Math.min(.05, clock.getDelta()); R.wheels[0].rotation.x -= vl * dt / 2.1; R.wheels[1].rotation.x -= vr * dt / 2.1;
    const key = (S.mxN != null ? 'n' + S.mxN : S.mx || '') ; if (key !== R.mx) { R.mx = key; drawMicrobit(R.mbT, S.mx, S.mxN); }
    ['L', 'R'].forEach((k, i) => { const c = S.car && S.car[k], H = R.heads[i]; H.mat.color.set(c ? COL[c] : '#C7CBD6'); H.mat.emissive.set(c ? COL[c] : '#000000'); H.mat.emissiveIntensity = c ? 1.4 : 0; H.gl.material.color.set(c ? COL[c] : '#fff'); H.gl.material.opacity = c ? .95 : 0; });
    const u = (S.under || []).find(c => c); R.underM.color.set(u ? COL[u] : '#fff'); R.underM.opacity = u ? .85 : 0;
    if (typeof roboLine === 'function') ['L', 'M', 'R'].forEach((k, i) => { R.lineDots[i].material.opacity = roboLine(st.W, S, k).black ? .95 : 0; });
    S.objs.forEach((o, i) => { const g = st.objs[i]; if (!g) return; const q = P(o.x, o.y); g.position.set(q.x, o.out ? -3 : 0, q.z); g.visible = !o.gone || o.out; });
    if (lead && S.lead) { const q = P(S.lead.x, S.lead.y); lead.bot.position.set(q.x, 0, q.z); lead.bot.rotation.y = -S.lead.h * Math.PI / 180; }
    if (st.lamp && S.lamp) { const on = S.lamp.on; st.lamp.bulbM.emissiveIntensity = on ? 1.5 : 0; st.lamp.pl.intensity = on ? 900 : 0; st.lamp.gl.visible = on; }
    if (st.dark !== S.dark) { st.dark = S.dark; hemi.intensity = S.dark ? .18 : 1.0; sun.intensity = S.dark ? .25 : 2.0; renderer.toneMappingExposure = S.dark ? .8 : 1.05; }
    if (st.cps !== S.cps) { st.cps = S.cps; paintMat(S); }
    // con dels ultrasons
    const d = typeof roboDist === 'function' ? roboDist(st.W, S) : 500;
    if (d < 500) { const a = S.h * Math.PI / 180, sx = S.x + Math.sin(a) * 4.4, sy = S.y - Math.cos(a) * 4.4, q = P(sx, sy); st.cone.visible = true; st.cone.position.set(q.x, 3.2, q.z); st.cone.rotation.y = -a; st.cone.scale.set(Math.tan(8 * Math.PI / 180) * d + .6, Math.tan(8 * Math.PI / 180) * d + .6, d); }
    else st.cone.visible = false;
    if (S.trail && S.trail.length > 1) { const arr = new Float32Array(S.trail.length * 3); S.trail.forEach((t, i) => { arr[i * 3] = t[0] - st.W.w / 2; arr[i * 3 + 1] = .15; arr[i * 3 + 2] = t[1] - st.W.h / 2; }); st.trailG.setAttribute('position', new THREE.BufferAttribute(arr, 3)); st.trail.computeLineDistances(); st.trail.visible = true; } else st.trail.visible = false;
  }
  const cv = renderer.domElement;
  cv.addEventListener('pointerdown', e => { drag.on = true; drag.x = e.clientX; drag.y0 = drag.yaw; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => { if (drag.on) drag.yaw = Math.max(-.9, Math.min(.9, drag.y0 + (e.clientX - drag.x) * .006)); });
  const up = () => { drag.on = false; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  const ro = new ResizeObserver(() => st && fit()); ro.observe(el);
  function loop() { if (!alive) return; if (!el.isConnected) return dispose(); requestAnimationFrame(loop); const T = clock.elapsedTime; if (!drag.on && Math.abs(drag.yaw) > .001) drag.yaw *= .94;
    if (mode === 'chase' && R) { // càmera que segueix el robot per darrere
      const a = -R.bot.rotation.y, bp = R.bot.position, want = new THREE.Vector3(bp.x - Math.sin(a + drag.yaw) * 30, 24, bp.z + Math.cos(a + drag.yaw) * 30), look = new THREE.Vector3(bp.x + Math.sin(a) * 14, 2, bp.z - Math.cos(a) * 14);
      if (!chase.ok) { chase.p.copy(want); chase.t.copy(look); chase.ok = true; } chase.p.lerp(want, .08); chase.t.lerp(look, .12); cam.position.copy(chase.p); cam.lookAt(chase.t); }
    else setCam(st.D, drag.yaw + (REDUCED ? 0 : Math.sin(T * .2) * .03));
    renderer.render(scene, cam); }
  function dispose() { alive = false; ro.disconnect(); renderer.dispose(); renderer.domElement.remove(); }
  build(W, S); loop();
  return { sync, dispose, setMode(m) { mode = m; chase.ok = false; }, reset(W2, S2) { if (W2 !== st.W) build(W2, S2); else { st.cps = -1; sync(S2, true); } }, snapshot() { renderer.render(scene, cam); return renderer.domElement.toDataURL('image/png'); } };
}
export function ok() { try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } }
