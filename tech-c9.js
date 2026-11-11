/* Numi Tech · Tech Spike · sessions de les unitats. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */
(function () {
const COURSE_UNITS = {};

/* ── unitat 1 ── */
const SPK_PDF = 'https://assets.education.lego.com/v3/assets/blt293eea581807678a/';
const SPK_M = { carrusel: SPK_PDF + 'blt27cf3aba3ebccf38/5f572f6c4b239959f43aa72a/U2L2.pdf', moto: SPK_PDF + 'blt422ad72d05bae50b/5f572ef4d4365e467aa95f1d/U1L2.pdf', entrada: SPK_PDF + 'blt9115adc81f968063/5f572fa44b239959f43aa72e/U2L1.pdf' };

/* ---------- dibuix dels blocs ---------- */
const SPK_C = { y: '#F4C430', g: '#3FAE5A', r: '#C8372F', b: '#2F8FE0', w: '#FFFFFF', p: '#EE5FC4' };
const spkWheel = '<circle cx="24" cy="24" r="15" fill="#fff" stroke="#17406E" stroke-width="2"/><circle cx="24" cy="24" r="2.6" fill="#17406E"/><circle cx="24" cy="15" r="3" fill="#17406E"/><circle cx="24" cy="33" r="3" fill="#17406E"/><circle cx="15" cy="24" r="3" fill="#17406E"/><circle cx="33" cy="24" r="3" fill="#17406E"/>';
const spkArrow = rev => `<path d="${rev ? 'M36 15 A15 15 0 0 0 14 13' : 'M12 15 A15 15 0 0 1 34 13'}" fill="none" stroke="#2E9E64" stroke-width="5"/><path d="${rev ? 'M9 7 L10 19 L20 13 Z' : 'M39 7 L38 19 L28 13 Z'}" fill="#2E9E64"/>`;
const spkGrid = c => { let s = ''; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) s += `<rect x="${11 + i * 9.4}" y="${11 + j * 9.4}" width="8" height="8" rx="1.5" fill="${SPK_C[c] || '#FFE9A8'}" stroke="#4B2E9E" stroke-width=".7"/>`; return s; };
const spkIco = {
  inici: () => '<path d="M17 12 L36 24 L17 36 Z" fill="#fff"/>',
  color: c => `<rect x="9" y="9" width="24" height="24" rx="4" fill="#fff" stroke="#8A6D10" stroke-width="1.6"/><circle cx="21" cy="21" r="6" fill="none" stroke="#8A6D10" stroke-width="2"/><rect x="26" y="26" width="16" height="11" rx="2" fill="${SPK_C[c]}" stroke="#2A2140" stroke-width="1"/>`,
  cw: () => spkWheel + spkArrow(false), ccw: () => spkWheel + spkArrow(true),
  speed: n => `${spkWheel}${[0, 1, 2, 3].map(i => `<rect x="${27 + i * 4.6}" y="${40 - (i + 1) * 4}" width="3.6" height="${(i + 1) * 4}" fill="${i < n ? '#2E9E64' : '#CFE7D8'}"/>`).join('')}`,
  mstop: () => `${spkWheel}<circle cx="35" cy="35" r="8" fill="#D92D20"/><rect x="31.5" y="31.5" width="7" height="7" fill="#fff"/>`,
  light: spkGrid,
  sound: () => '<path d="M8 19h7l11-7v24l-11-7H8z" fill="#fff"/><path d="M31 17c4 4 4 10 0 14" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
  wait: () => '<path d="M15 9h18M15 39h18M17 9c0 9 14 9 14 15s-14 6-14 15M31 9c0 9-14 9-14 15s14 6 14 15" fill="none" stroke="#fff" stroke-width="3"/>',
  stop: () => '<circle cx="24" cy="24" r="16" fill="#D92D20"/><rect x="17" y="17" width="14" height="14" fill="#fff"/>',
  fwd: () => '<path d="M24 8 L36 23 H28 V40 H20 V23 H12 Z" fill="#fff"/>', back: () => '<path d="M24 40 L36 25 H28 V8 H20 V25 H12 Z" fill="#fff"/>',
  left: () => '<path d="M36 34 A14 14 0 1 0 16 15" fill="none" stroke="#fff" stroke-width="5"/><path d="M8 7 L10 21 L22 14 Z" fill="#fff"/>', right: () => '<path d="M12 34 A14 14 0 1 1 32 15" fill="none" stroke="#fff" stroke-width="5"/><path d="M40 7 L38 21 L26 14 Z" fill="#fff"/>'
};
const SPK_CAT = { inici: 'ev', color: 'ev', cw: 'mo', ccw: 'mo', speed: 'mo', mstop: 'mo', light: 'li', sound: 'so', wait: 'ct', stop: 'ct', fwd: 'mv', back: 'mv', left: 'mv', right: 'mv' };
const spkBlock = t => {
  if (t && t.rep != null) return `<span class="spb-c ct"><span class="spb-in">${t.in.map(spkBlock).join('')}</span><span class="spb-e"><svg viewBox="0 0 48 48"><path d="M14 22 A11 11 0 1 1 25 33" fill="none" stroke="#fff" stroke-width="4.5"/><path d="M8 19 L20 16 L16 28 Z" fill="#fff"/></svg><i>${t.rep}</i></span></span>`;
  if (t && t.sempre) return `<span class="spb-c ct"><span class="spb-in">${t.sempre.map(spkBlock).join('')}</span><span class="spb-e"><svg viewBox="0 0 48 48"><path d="M12 22 A12 12 0 0 1 34 15 M36 26 A12 12 0 0 1 14 33" fill="none" stroke="#fff" stroke-width="4.5"/><path d="M38 7 L38 19 L27 15 Z M10 41 L10 29 L21 33 Z" fill="#fff"/></svg></span></span>`;
  const [k, v] = String(t).split(':'), hasN = ['cw', 'ccw', 'wait', 'fwd', 'back', 'left', 'right', 'sound'].includes(k);
  return `<span class="spb ${SPK_CAT[k]} ${k === 'inici' || k === 'color' ? 'hat' : ''}"><svg viewBox="0 0 48 48" aria-hidden="true">${spkIco[k](v)}</svg>${hasN ? `<i>${v}</i>` : ''}</span>`;
};
const spkProgHTML = m => `<div class="spp">${m.rows.map(r => `<div class="spp-r"><div class="spp-b">${r.map(spkBlock).join('')}</div></div>`).join('')}${m.keys ? `<dl class="spp-k">${m.keys.map(([b, t]) => `<div>${spkBlock(b)}<span>${tx(t)}</span></div>`).join('')}</dl>` : ''}${m.note ? `<div class="spp-n">${tx(m.note)}</div>` : ''}</div>`;

/* ---------- visor de les instruccions ---------- */
const SPV = { lib: null, docs: {}, pos: {} };
const spvLib = async () => {
  if (SPV.lib) return SPV.lib;
  const lib = await import(new URL('vendor/pdfjs/pdf.min.mjs', location.href).href);
  lib.GlobalWorkerOptions.workerSrc = new URL('vendor/pdfjs/pdf.worker.min.mjs', location.href).href;
  return (SPV.lib = lib);
};
const spvHTML = m => `<div class="spv"><div class="spv-c"><canvas></canvas><p class="spv-l">${L('Carregant les instruccions… Només triga uns segons la primera vegada.', 'Cargando las instrucciones… Solo tarda unos segundos la primera vez.')}</p></div>
  <div class="spv-n"><button class="btn ghost" data-d="-1" disabled>‹ ${L('Enrere', 'Atrás')}</button><b class="spv-p"></b><button class="btn" data-d="1" disabled>${L('Pas següent', 'Paso siguiente')} ›</button></div>
  <p class="spv-s" hidden>🔄 ${L('Canvieu de feina! Passeu-vos la targeta.', '¡Cambiad de trabajo! Pasaos la tarjeta.')}</p><p class="spv-cr">${L('Instruccions de muntatge de LEGO® Education', 'Instrucciones de montaje de LEGO® Education')} · <a href="${m.pdf}" target="_blank" rel="noopener">${L('Obre-les a part', 'Ábrelas aparte')}</a></p></div>`;
const spvStart = async (root, m) => {
  const box = root.querySelector('.spv'); if (!box) return;
  const cv = box.querySelector('canvas'), msg = box.querySelector('.spv-l'), lab = box.querySelector('.spv-p'), swap = box.querySelector('.spv-s'), [prev, next] = box.querySelectorAll('[data-d]');
  try {
    const lib = await spvLib(), doc = await (SPV.docs[m.pdf] || (SPV.docs[m.pdf] = lib.getDocument({ url: m.pdf, disableFontFace: true, isEvalSupported: false }).promise.catch(e => { delete SPV.docs[m.pdf]; throw e; })));
    let task = null, seq = 0;
    const show = async n => {
      const me = ++seq; SPV.pos[m.pdf] = n;
      if (task) { task.cancel(); await task.promise.catch(() => { }); task = null; }
      const page = await doc.getPage(n); if (me !== seq) return;
      const w = box.clientWidth || 600, ratio = Math.min(w / page.getViewport({ scale: 1 }).width, 2.2), dpr = Math.min(window.devicePixelRatio || 1, 2), vp = page.getViewport({ scale: ratio * dpr });
      cv.width = vp.width; cv.height = vp.height; msg.hidden = true;
      task = page.render({ canvasContext: cv.getContext('2d'), viewport: vp }); task.promise.catch(() => { });
      lab.textContent = L(`Pas ${n} de ${doc.numPages}`, `Paso ${n} de ${doc.numPages}`);
      prev.disabled = n <= 1; next.disabled = n >= doc.numPages; swap.hidden = !(n > 1 && (n - 1) % 5 === 0);
    };
    const go = d => { const n = (SPV.pos[m.pdf] || 1) + d; if (n >= 1 && n <= doc.numPages) { if (typeof SFX !== 'undefined' && SFX.tap) SFX.tap(); show(n); } };
    prev.onclick = () => go(-1); next.onclick = () => go(1);
    show(SPV.pos[m.pdf] || 1);
  } catch (e) { msg.hidden = false; msg.innerHTML = `${L("No s'han pogut carregar aquí.", 'No se han podido cargar aquí.')} <a href="${m.pdf}" target="_blank" rel="noopener">${L('Obre les instruccions', 'Abre las instrucciones')}</a>`; }
};
if (typeof TMEDIA !== 'undefined') {
  TMEDIA.spkbuild = { html: spvHTML, slide: spvHTML, start: spvStart, slideStart: spvStart };
  TMEDIA.spkprog = { html: spkProgHTML, slide: spkProgHTML };
}
if (typeof document !== 'undefined' && document.head && !document.getElementById('spk-css')) {
  const st = document.createElement('style'); st.id = 'spk-css';
  st.textContent = `.spp{display:grid;gap:12px;padding:14px;border-radius:16px;background:#F7F5FA;background-image:radial-gradient(#DDD6E8 1px,transparent 1.4px);background-size:16px 16px;margin-bottom:10px}
@media(max-width:480px){.spv-n .btn{padding:10px 12px;font-size:.78em;white-space:nowrap}.spv-p{white-space:nowrap;font-size:.8em}}
.spp-r{overflow-x:auto}.spp-b{display:inline-flex;align-items:flex-start;gap:2px;padding-bottom:4px}
.spb{position:relative;display:inline-grid;justify-items:center;width:60px;min-height:56px;padding:4px;border-radius:12px 8px 8px 12px;flex:none;box-shadow:inset 0 -3px 0 rgba(0,0,0,.14)}.spb svg{width:48px;height:48px}
.spb.hat{border-radius:26px 8px 8px 26px}.spb i{font:800 13px/18px Lexend,system-ui,sans-serif;font-style:normal;min-width:30px;padding:0 6px;margin-top:-2px;margin-bottom:2px;text-align:center;background:#fff;color:#2A2140;border-radius:10px;box-shadow:0 0 0 1.5px rgba(0,0,0,.25)}
.spb.ev{background:#EFC12F}.spb.mo{background:#2F7FD8}.spb.li{background:#8B5CF6}.spb.so{background:#B57BEF}.spb.ct{background:#F2A93B}.spb.mv{background:#EE5FC4}
.spb-c{display:inline-flex;align-items:stretch;padding:5px 0 5px 6px;border-radius:12px;background:#F2A93B;box-shadow:inset 0 -3px 0 rgba(0,0,0,.14)}.spb-c.ct{flex:none}.spb-in{display:inline-flex;gap:2px;align-items:flex-start;padding:4px;border-radius:9px;background:rgba(255,255,255,.45)}.spb-e{display:grid;justify-items:center;align-content:center;width:50px}.spb-e svg{width:36px;height:36px}.spb-e i{font:800 13px/18px Lexend,system-ui,sans-serif;font-style:normal;min-width:28px;text-align:center;background:#fff;color:#2A2140;border-radius:10px}
.spp-k{margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px}.spp-k>div{display:flex;align-items:center;gap:10px;background:#fff;border-radius:12px;padding:6px 10px 6px 6px}.spp-k span:last-child{font-weight:700;font-size:14px;line-height:1.25;color:#2A2140}.spp-k .spb{transform:scale(.82);transform-origin:left center;margin-right:-10px}
.spv{display:grid;gap:8px;margin-bottom:10px}.spv-c{position:relative;background:#fff;border:2px solid #E2DBEA;border-radius:14px;overflow:hidden;min-height:220px}.spv-c canvas{display:block;width:100%;height:auto}.spv-l{position:absolute;inset:0;display:grid;place-items:center;margin:0;padding:14px;text-align:center;font-weight:700;color:#574C63;background:#fff}.spv-l[hidden]{display:none}
.spv-n{display:flex;align-items:center;justify-content:space-between;gap:8px}.spv-p{font:800 15px Lexend,system-ui,sans-serif;color:#2A2140}.spv-s{margin:0;padding:8px 12px;border-radius:10px;background:#FFF3D6;font-weight:800;text-align:center;color:#7A5200}.spv-s[hidden]{display:none}.spv-cr{margin:0;font-size:12px;color:#6C6177;text-align:center}
.pz-media:has(.spv){background:#fff;padding:12px 18px}.pz-media .spv{height:100%;grid-template-rows:minmax(0,1fr) auto auto;margin:0}.pz-media .spv-c{border:0;min-height:0}.pz-media .spv-c canvas{width:100%;height:100%;object-fit:contain}.pz-media .spv-s{display:none}.pz-media .spv-n button{padding:12px 26px;border:0;border-radius:14px;background:#3B5BDB;color:#fff;font:800 20px Lexend,system-ui,sans-serif;cursor:pointer}.pz-media .spv-n button.ghost{background:#E8ECFA;color:#2A3A7A}.pz-media .spv-n button:disabled{opacity:.45;cursor:default}.pz-media .spv-p{font-size:22px}
.spkp h4{margin:18px 0 8px}.spkp-d{border:2px solid #E2DBEA;border-radius:14px;padding:10px 14px;margin-bottom:10px}.spkp-d summary{font-weight:800;cursor:pointer}.spkp-d .spv{max-width:760px;margin:8px auto}.spkp-c{display:grid;grid-template-columns:32px 1fr;gap:10px;padding:12px 0;border-top:1px solid #EEE9F3}.spkp-n{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#E8772E;color:#fff}.spkp-c h5{margin:3px 0 8px;font-size:1em}.spkp-x{margin-top:8px}.spkp-x ol{margin:4px 0 6px;padding-left:22px}.spkp .hl{background:#FFF3D6;border-radius:4px;padding:0 3px}
.spp-a{font-size:24px;line-height:1.3;color:#1B2B6B;text-align:left;max-width:980px;margin:6px auto 0}.spp-a ol{margin:0 0 4px;padding-left:34px}
.pz-media .spp{overflow:auto}.pz-media .spp-n{width:100%;max-width:1040px;font-size:30px;line-height:1.35;color:#1B2B6B}.pz-media .spp-n ol{margin:0 0 8px;padding-left:40px}
.pz-media:has(.spp){background:#F7F5FA}.pz-media .spp{height:100%;box-sizing:border-box;align-content:center;justify-items:center;background:none;margin:0;gap:16px}.pz-media .spp-r{overflow:visible}.pz-media .spb{width:124px;min-height:118px;padding:6px}.pz-media .spb svg{width:100px;height:100px}.pz-media .spb i{font-size:22px;line-height:30px;min-width:34px}.pz-media .spp-k{width:100%}.pz-media .spp-k span{font-size:22px;line-height:1.25}.pz-media .spp-k .spb{width:74px;min-height:70px}.pz-media .spp-k .spb svg{width:58px;height:58px}`;
  document.head.appendChild(st);
}

const spkObre = { k: "L'app SPIKE|La app SPIKE", t: 'Obrim un projecte nou|Abrimos un proyecto nuevo', media: { k: 'spkprog', rows: [['inici']] },
  x: "<ol><li>Obre l'app <b>SPIKE</b> i comprova que a dalt a la dreta diu <b>SPIKE Essential</b>.</li><li>Prem <b>New Project</b> (el +).</li><li>Tria <b>Icon Blocks</b> i prem <b>Create</b>.</li></ol>Ja tens el bloc groc del triangle: el <span class='hl'>bloc d'inici</span>. Tot programa comença amb un bloc groc.|<ol><li>Abre la app <b>SPIKE</b> y comprueba que arriba a la derecha pone <b>SPIKE Essential</b>.</li><li>Pulsa <b>New Project</b> (el +).</li><li>Elige <b>Icon Blocks</b> y pulsa <b>Create</b>.</li></ol>Ya tienes el bloque amarillo del triángulo: el <span class='hl'>bloque de inicio</span>. Todo programa empieza con un bloque amarillo." };
const spkCon = { k: "L'app SPIKE|La app SPIKE", t: 'Connectem el hub|Conectamos el hub', anim: 'spkllum',
  x: "<ol><li>Encén el hub amb el botó.</li><li>Prem el botó groc <b>Connect</b>, a dalt a l'esquerra de l'app.</li><li>Tria el nom del vostre equip a la llista.</li></ol>Quan surt la marca verda, ja esteu connectats. El color de la llum del hub t'ho diu.|<ol><li>Enciende el hub con el botón.</li><li>Pulsa el botón amarillo <b>Connect</b>, arriba a la izquierda de la app.</li><li>Elige el nombre de vuestro equipo en la lista.</li></ol>Cuando sale la marca verde, ya estáis conectados. El color de la luz del hub te lo dice." };

/* ---------- els programes, pas a pas: els veuen els equips, les diapositives i la guia ---------- */
const SPK_PROG = {
  s1: [
    spkObre, spkCon,
    { k: 'El primer programa|El primer programa', t: 'Fes girar el motor|Haz girar el motor', media: { k: 'spkprog', rows: [['inici', 'cw:1']], keys: [['inici', 'Comença quan prems ▶.|Empieza cuando pulsas ▶.'], ['cw:1', 'El motor fa 1 volta.|El motor da 1 vuelta.']] }, x: "<ol><li>Arrossega el bloc <b>blau de la fletxa</b> i enganxa'l al bloc groc.</li><li>Prem el botó groc gran <b>▶</b>, a baix a la dreta.</li></ol>El carrusel ha fet una volta! Per aturar-ho tot, el botó <b>■</b>.|<ol><li>Arrastra el bloque <b>azul de la flecha</b> y engánchalo al bloque amarillo.</li><li>Pulsa el botón amarillo grande <b>▶</b>, abajo a la derecha.</li></ol>¡El carrusel ha dado una vuelta! Para pararlo todo, el botón <b>■</b>." },
    { k: 'Més voltes|Más vueltas', t: 'El número són voltes|El número son vueltas', media: { k: 'spkprog', rows: [['inici', 'cw:3']] }, x: "Toca el número del bloc i posa-hi un <b>3</b>, amb els botons + i − o escrivint-lo. Ara fa 3 voltes. Quin número triaries perquè la Sofie doni 5 voltes?|Toca el número del bloque y pon un <b>3</b>, con los botones + y − o escribiéndolo. Ahora da 3 vueltas. ¿Qué número elegirías para que Sofie dé 5 vueltas?" },
    { k: 'Velocitat i sentit|Velocidad y sentido', t: 'Més a poc a poc i al revés|Más despacio y al revés', media: { k: 'spkprog', rows: [['inici', 'speed:1', 'ccw:3']], keys: [['speed:1', 'Tria la velocitat: toca la fletxa de sota.|Elige la velocidad: toca la flecha de abajo.'], ['ccw:3', '3 voltes al revés del rellotge.|3 vueltas al revés del reloj.']] }, x: "El bloc de <b>velocitat</b> va <b>abans</b> del moviment: primer dius com de ràpid, i després quantes voltes.|El bloque de <b>velocidad</b> va <b>antes</b> del movimiento: primero dices cómo de rápido, y después cuántas vueltas." },
    { k: 'Repetir|Repetir', t: 'El carrusel que fa parades|El carrusel que hace paradas', media: { k: 'spkprog', rows: [['inici', { rep: 4, in: ['cw:1', 'wait:1'] }]], keys: [[{ rep: 4, in: [] }, 'Repeteix el que hi ha a dins 4 vegades.|Repite lo que hay dentro 4 veces.'], ['wait:1', 'Espera 1 segon.|Espera 1 segundo.']] }, x: "Els blocs <b>taronges</b> controlen el programa: fan <span class='hl'>esperar</span> i <span class='hl'>repetir</span>. Així no cal posar el mateix bloc moltes vegades.|Los bloques <b>naranjas</b> controlan el programa: hacen <span class='hl'>esperar</span> y <span class='hl'>repetir</span>. Así no hace falta poner el mismo bloque muchas veces." }
  ],
  s2: [
    { k: 'Sense cable|Sin cable', t: 'Connecta per Bluetooth|Conecta por Bluetooth', anim: 'spkllum', x: "La moto s'ha de moure: no pot anar lligada amb el cable USB! Connecta el hub <b>sense cable</b>, amb el botó <b>Connect</b>. La llum del hub es posa <span class='hl'>blava</span>.|La moto tiene que moverse: ¡no puede ir atada con el cable USB! Conecta el hub <b>sin cable</b>, con el botón <b>Connect</b>. La luz del hub se pone <span class='hl'>azul</span>." },
    { k: 'Blocs roses|Bloques rosas', t: 'Afegim els blocs de moviment|Añadimos los bloques de movimiento', media: { k: 'spkprog', rows: [['fwd:1', 'back:1', 'left:1', 'right:1']] }, x: "<ol><li>Prem la icona dels blocs amb el <b>+</b>, a baix a la dreta.</li><li>A <b>Extensions</b>, marca <b>Movement</b>.</li><li>Tanca amb la <b>X</b>.</li></ol>Ara tens els blocs roses: endavant, enrere i girar. El número també són voltes.|<ol><li>Pulsa el icono de los bloques con el <b>+</b>, abajo a la derecha.</li><li>En <b>Extensions</b>, marca <b>Movement</b>.</li><li>Cierra con la <b>X</b>.</li></ol>Ahora tienes los bloques rosas: adelante, atrás y girar. El número también son vueltas." },
    { k: 'Programa 1|Programa 1', t: 'Endavant!|¡Adelante!', media: { k: 'spkprog', rows: [['inici', 'fwd:1']] }, x: "Enganxa el bloc de la <b>fletxa amunt</b> i prem <b>▶</b>. La moto avança 1 volta. Si va cap enrere, fes servir la fletxa avall.|Engancha el bloque de la <b>flecha arriba</b> y pulsa <b>▶</b>. La moto avanza 1 vuelta. Si va hacia atrás, usa la flecha abajo." },
    { k: 'Programa 2|Programa 2', t: 'Anar i tornar|Ir y volver', media: { k: 'spkprog', rows: [['inici', 'fwd:3', 'wait:1', 'back:3']], keys: [['fwd:3', 'Avança 3 voltes.|Avanza 3 vueltas.'], ['wait:1', 'S\'espera 1 segon.|Espera 1 segundo.'], ['back:3', 'Torna 3 voltes enrere.|Vuelve 3 vueltas atrás.']] }, x: "Per tornar al mateix lloc, cal fer <b>les mateixes voltes</b> enrere. Prova-ho!|Para volver al mismo sitio, hay que dar <b>las mismas vueltas</b> atrás. ¡Pruébalo!" }
  ],
  s3: [
    { k: 'Pila 1|Pila 1', t: 'El tiquet groc|La tique amarilla', media: { k: 'spkprog', rows: [['color:y', 'light:y']], keys: [['color:y', 'Quan el sensor veu groc…|Cuando el sensor ve amarillo…'], ['light:y', '…la llum es posa groga.|…la luz se pone amarilla.']] }, x: "<ol><li>Arrossega el bloc groc del <b>sensor</b>.</li><li>Toca la fletxa de sota i tria el color <b>groc</b>.</li><li>Enganxa-hi el bloc <b>lila de la llum</b>. Toca la seva fletxa, tria un color i toca els quadrats.</li><li>Prem <b>▶</b> i ensenya el tiquet!</li></ol>|<ol><li>Arrastra el bloque amarillo del <b>sensor</b>.</li><li>Toca la flecha de abajo y elige el color <b>amarillo</b>.</li><li>Engancha el bloque <b>lila de la luz</b>. Toca su flecha, elige un color y toca los cuadrados.</li><li>¡Pulsa <b>▶</b> y enseña la tique!</li></ol>", tip: 'Primer cal prémer ▶: si no, el programa no està mirant.|Primero hay que pulsar ▶: si no, el programa no está mirando.' },
    { k: 'Més piles|Más pilas', t: 'Una pila per a cada color|Una pila para cada color', media: { k: 'spkprog', rows: [['color:y', 'light:y'], ['color:g', 'light:g'], ['color:r', 'light:r']] }, x: "Fes una pila per al <b>verd</b> i una per al <b>vermell</b>, a banda. No cal enganxar-les: totes <span class='hl'>esperen alhora</span>, i s'engega la del color que veu el sensor.|Haz una pila para el <b>verde</b> y otra para el <b>rojo</b>, aparte. No hace falta engancharlas: todas <span class='hl'>esperan a la vez</span>, y se pone en marcha la del color que ve el sensor." },
    { k: 'Sons|Sonidos', t: 'Que soni quan es passa!|¡Que suene cuando se pasa!', media: { k: 'spkprog', rows: [['color:g', 'light:g', 'sound:1']] }, x: "Afegeix un bloc <b>lila de so</b>. Compte: els sons surten de l'<b>ordinador</b>, no del hub. Toca el número per triar-ne un: n'hi ha 8.|Añade un bloque <b>lila de sonido</b>. Ojo: los sonidos salen del <b>ordenador</b>, no del hub. Toca el número para elegir uno: hay 8." }
  ],
  s4: [
    { k: 'Les vostres eines|Vuestras herramientas', t: 'Tots els blocs que coneixeu|Todos los bloques que conocéis', media: { k: 'spkprog', rows: [], keys: [['inici', 'Comença amb ▶.|Empieza con ▶.'], ['color:g', 'Comença quan veu un color.|Empieza cuando ve un color.'], ['cw:1', 'Fa girar el motor.|Hace girar el motor.'], ['speed:2', 'Tria la velocitat.|Elige la velocidad.'], ['fwd:1', 'Mou els 2 motors junts.|Mueve los 2 motores juntos.'], ['light:y', 'Encén la llum.|Enciende la luz.'], ['sound:1', 'Fa un so a l\'ordinador.|Hace un sonido en el ordenador.'], ['wait:1', 'Espera.|Espera.'], [{ rep: 4, in: [] }, 'Repeteix.|Repite.']] }, x: 'Podeu fer servir qualsevol d\'aquests, però recordeu: <b>només 2 peces endollades</b>.|Podéis usar cualquiera de estos, pero recordad: <b>solo 2 piezas enchufadas</b>.' },
    { k: 'Recepta 1|Receta 1', t: 'Una atracció que no para|Una atracción que no para', media: { k: 'spkprog', rows: [['inici', { sempre: ['cw:2', 'wait:1'] }]] }, x: 'El bloc de <span class="hl">repetir per sempre</span> fa que l\'atracció continuï fins que prems <b>■</b>. Ideal per a una nòria.|El bloque de <span class="hl">repetir para siempre</span> hace que la atracción siga hasta que pulsas <b>■</b>. Ideal para una noria.' },
    { k: 'Recepta 2|Receta 2', t: 'Amunt i avall|Arriba y abajo', media: { k: 'spkprog', rows: [['inici', { rep: 3, in: ['cw:1', 'ccw:1'] }]] }, x: 'Una volta cap a un costat i una cap a l\'altre: així es mou un <b>gronxador</b>. Prova amb un número més petit, com 0.5.|Una vuelta hacia un lado y una hacia el otro: así se mueve un <b>columpio</b>. Prueba con un número más pequeño, como 0.5.' },
    { k: 'Recepta 3|Receta 3', t: 'El tiquet que engega l\'atracció|La tique que pone en marcha la atracción', media: { k: 'spkprog', rows: [['color:g', 'cw:3']] }, x: 'Sensor i motor junts: quan el sensor veu <b>verd</b>, l\'atracció fa 3 voltes. Recorda prémer <b>▶</b> abans.|Sensor y motor juntos: cuando el sensor ve <b>verde</b>, la atracción da 3 vueltas. Recuerda pulsar <b>▶</b> antes.' },
    { k: 'Recepta 4|Receta 4', t: 'Llums de fira|Luces de feria', media: { k: 'spkprog', rows: [['inici', { sempre: ['light:r', 'wait:1', 'light:y', 'wait:1'] }]] }, x: 'Motor i llum junts: mentre l\'atracció gira, els llums van canviant. Es pot fer amb dues piles, una per a cada cosa.|Motor y luz juntos: mientras la atracción gira, las luces van cambiando. Se puede hacer con dos pilas, una para cada cosa.' }
  ],
};

/* ---------- els passos a les diapositives ---------- */
const spkSlides = (cards, pre) => cards.map((c, i) => c.media
  ? { id: `${pre}${i + 1}`, k: 'media', t: c.t, media: { ...c.media, note: c.x }, nota: 'Els mateixos passos que veuen els equips a Numi.|Los mismos pasos que ven los equipos en Numi.' }
  : { id: `${pre}${i + 1}`, k: 'anim', t: c.t, anim: c.anim, x: c.x.split('|').map(v => `<div class="spp-a">${v}</div>`).join('|'), nota: 'Els mateixos passos que veuen els equips a Numi.|Los mismos pasos que ven los equipos en Numi.' });

/* ---------- els passos a la guia del professor (panell) ---------- */
const spkPas = (c, n) => `<div class="spkp-c"><b class="spkp-n">${n}</b><div><h5>${tx(c.t)}</h5>${c.rows || (c.media && c.media.rows) ? spkProgHTML(c.media || { rows: c.rows }) : ''}<div class="spkp-x">${tx(c.x)}</div></div></div>`;
const spkProfeHTML = p => `<section class="card pad msec spkp"><h3>${L('Muntatge i programació, pas a pas', 'Montaje y programación, paso a paso')}</h3>
  <p class="t3">${L('Els mateixos passos que veuen els equips a Numi, i les solucions dels reptes, que ells no veuen. Feu-los abans de la classe.', 'Los mismos pasos que ven los equipos en Numi, y las soluciones de los retos, que ellos no ven. Hacedlos antes de la clase.')}</p>
  <h4>${L('1. Muntatge del robot', '1. Montaje del robot')}</h4>${p.models.map((m, i) => `<details class="spkp-d"${i ? '' : ' open'} data-pdf="${m.pdf}"><summary>${tx(m.t)} · ${L(`${m.n} passos`, `${m.n} pasos`)}</summary><p>${tx(m.x)}</p>${spvHTML({ pdf: m.pdf })}</details>`).join('')}
  <h4>${L('2. Programació', '2. Programación')}</h4>${p.prog.map((c, i) => spkPas(c, i + 1)).join('')}
  <h4>${L('3. Solucions dels reptes', '3. Soluciones de los retos')}</h4><p class="t3">${L("És una solució possible: n'hi pot haver d'altres que també funcionin.", 'Es una solución posible: puede haber otras que también funcionen.')}</p>${p.sols.map((c, i) => spkPas(c, i + 1)).join('')}</section>`;
const spkProfeStart = () => document.querySelectorAll('.spkp-d').forEach(d => {
  const go = () => { if (d.open && !d.dataset.ok) { d.dataset.ok = '1'; spvStart(d, { pdf: d.dataset.pdf }); } };
  d.addEventListener('toggle', go); go();
});
/* Tech Spike · unitat 1 «Missió Parc d'Atraccions» (s1-1 … s1-4). 7-9 anys, equips de 3, un ordinador i un kit per equip.
   Es treballa amb el kit LEGO® Education SPIKE™ Essential i amb els blocs d'icones de la seva app.
   - shared.js (blocs, visor i programes) també va dins de la guia del professor.
   - TMEDIA.spkbuild: visor pas a pas de les instruccions de muntatge. El PDF es llegeix en directe de LEGO Education (no se'n
     guarda cap còpia a Numi) amb pdf.js (vendor/pdfjs); si no carrega, queda l'enllaç.
   - TMEDIA.spkprog: programes dibuixats amb blocs propis de Numi, amb els mateixos colors i la mateixa lògica que l'app.
   Blocs comprovats a l'app web de SPIKE (novembre de 2026): el número dels blocs de motor i de moviment són voltes; el motor
   no tria port (van tots els connectats); el bloc de color és un bloc d'inici per a cada color. */
/* ---------- pas amb el kit real ---------- */
if (typeof TSTEP !== 'undefined') TSTEP.spk = function (st) {
  $('#tsb').innerHTML = `<div class="tcol"><div class="tunp"><div class="tunph"><span class="tunpi">${st.ico || '🧩'}</span><div><small>${L('Amb el kit SPIKE', 'Con el kit SPIKE')}</small><h2>${tval(st.title)}</h2></div></div>
    <p class="tunpx">${tval(st.t)}</p>${st.prog ? spkProgHTML({ rows: st.prog }) : ''}${st.steps ? `<ol>${st.steps.map(x => `<li>${tval(x)}</li>`).join('')}</ol>` : ''}${st.tip ? `<p class="ttip">${tx(st.tip)}</p>` : ''}</div></div>`;
  tFoot(st.done ? tx(st.done) : L('Ho hem aconseguit!', '¡Lo hemos conseguido!'), () => { addXPsafe(5); tNext(); }, true);
};
if (typeof TKIND !== 'undefined') TKIND.spk = ['Amb el kit SPIKE', 'Con el kit SPIKE', 'Muntar i programar amb el kit de veritat.', 'Montar y programar con el kit de verdad.'];
Object.assign(TBADGE, {
  spk_motor: { id: 'spk_motor', ico: '🔧', n: 'Mestre del motor|Maestro del motor', d: 'Has fet girar un motor i has decidit cap on, com de ràpid i quantes voltes.|Has hecho girar un motor y has decidido hacia dónde, cómo de rápido y cuántas vueltas.' },
  spk_seq: { id: 'spk_seq', ico: '🏁', n: 'Pilot de neu|Piloto de nieve', d: 'Has mesurat, calculat i programat una anada i tornada.|Has medido, calculado y programado una ida y vuelta.' },
  spk_si: { id: 'spk_si', ico: '🔍', n: 'Lector de colors|Lector de colores', d: 'Has fet que un robot miri un color i decideixi què fer.|Has hecho que un robot mire un color y decida qué hacer.' },
  spk_fira: { id: 'spk_fira', ico: '🏆', n: "Enginyer/a d'atraccions|Ingeniero/a de atracciones", d: 'Has dissenyat, construït i programat una atracció pròpia.|Has diseñado, construido y programado una atracción propia.' }
});
const SPK_ROLES = "Busca-peces: troba les peces del pas. Constructor/a: les munta. Programador/a: passa de pas a l'ordinador. Cada 5 passos, canvieu de feina.|Buscapiezas: encuentra las piezas del paso. Constructor/a: las monta. Programador/a: pasa de paso en el ordenador. Cada 5 pasos, cambiad de trabajo.";
COURSE_UNITS[1] = { t: "Missió Parc d'Atraccions|Misión Parque de Atracciones", d: 'Motors, ordres i sensors amb SPIKE Essential|Motores, órdenes y sensores con SPIKE Essential', color: '#E8772E', s: [

  /* ---------- Sessió 1 · El carrusel ---------- */
  { id: 's1-1', t: 'El carrusel de la Sofie|El carrusel de Sofie', min: 50, badge: 'spk_motor',
    learn: ['Un robot nota el món, pensa amb un programa i es mou amb motors i llums.|Un robot nota el mundo, piensa con un programa y se mueve con motores y luces.',
      "El número del bloc de motor és quantes voltes fa, i la fletxa, cap a quin costat.|El número del bloque de motor es cuántas vueltas da, y la flecha, hacia qué lado.",
      'Els enginyers proven, miren què passa i ho milloren.|Los ingenieros prueban, miran qué pasa y lo mejoran.'],
    steps: [
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Comença la missió!|¡Empieza la misión!', t: "El parc d'atraccions obre d'aquí a <b>quatre setmanes</b> i encara no té atraccions! Vosaltres sou l'equip d'enginyers. La primera: un <b>carrusel</b> per a la Sofie. Però abans, coneixem les nostres eines.|¡El parque de atracciones abre dentro de <b>cuatro semanas</b> y aún no tiene atracciones! Vosotros sois el equipo de ingenieros. La primera: un <b>carrusel</b> para Sofie. Pero antes, conozcamos nuestras herramientas." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Què és un robot?|¿Qué es un robot?', t: 'Nota, pensa i es mou|Nota, piensa y se mueve', anim: 'spkrobot', x: "Un <span class='hl'>robot</span> és una màquina que segueix un programa. Pot <b>notar</b> coses amb els sensors, <b>pensar</b> què fer amb el programa i <b>moure's</b> amb els motors. Una rentadora o una porta automàtica també funcionen així!|Un <span class='hl'>robot</span> es una máquina que sigue un programa. Puede <b>notar</b> cosas con los sensores, <b>pensar</b> qué hacer con el programa y <b>moverse</b> con los motores. ¡Una lavadora o una puerta automática también funcionan así!" },
        { k: 'Dues parts|Dos partes', t: 'Maquinari i programari|Hardware y software', anim: 'spksoft', x: "El <span class='hl'>maquinari</span> són les peces que pots tocar: el hub, els motors, els sensors. El <span class='hl'>programari</span> són les ordres: l'app SPIKE i el programa que hi fas. Sense programa, el robot no fa res!|El <span class='hl'>hardware</span> son las piezas que puedes tocar: el hub, los motores, los sensores. El <span class='hl'>software</span> son las órdenes: la app SPIKE y el programa que haces en ella. Sin programa, ¡el robot no hace nada!" },
        { k: 'El hub|El hub', t: 'El cervell del robot|El cerebro del robot', anim: 'spkhub', x: "El <span class='hl'>hub</span> és la caixa groga. A dins té la bateria i una petita computadora. Té un <b>botó</b> amb una llum, <b>2 ports</b> per endollar-hi peces (A i B), un forat per al <b>cable USB</b> i forats per fixar-lo a les peces.|El <span class='hl'>hub</span> es la caja amarilla. Dentro tiene la batería y un pequeño ordenador. Tiene un <b>botón</b> con una luz, <b>2 puertos</b> para enchufar piezas (A y B), un hueco para el <b>cable USB</b> y agujeros para fijarlo a las piezas.", tip: 'La bateria no se saca: es carrega amb el cable USB.|La batería no se saca: se carga con el cable USB.' },
        { k: 'El motor|El motor', t: 'Un motor obeeix|Un motor obedece', anim: 'spkmotor', x: "El <span class='hl'>motor</span> fa girar el que hi enganxes. Fa exactament el que li diu el programa: <b>cap a quin costat</b>, <b>com de ràpid</b> i <b>quantes voltes</b>.|El <span class='hl'>motor</span> hace girar lo que le enganchas. Hace exactamente lo que le dice el programa: <b>hacia qué lado</b>, <b>cómo de rápido</b> y <b>cuántas vueltas</b>." },
        { k: 'Sentit de gir|Sentido de giro', t: 'Cap a quin costat gira?|¿Hacia qué lado gira?', anim: 'spkvolta', x: "Un motor pot girar <b>com les agulles del rellotge</b> o <b>al revés</b>. Una <span class='hl'>volta</span> vol dir que ha donat un tomb sencer i torna a estar on era.|Un motor puede girar <b>como las agujas del reloj</b> o <b>al revés</b>. Una <span class='hl'>vuelta</span> significa que ha dado un giro entero y vuelve a estar donde estaba." },
        { k: 'Velocitat|Velocidad', t: 'Quatre velocitats|Cuatro velocidades', anim: 'spkvel', x: "A l'app hi ha un bloc per triar la <span class='hl'>velocitat</span>, amb 4 nivells. Si no el poses, el motor va a la velocitat de sempre. Més ràpid no sempre és millor: la Sofie es podria marejar!|En la app hay un bloque para elegir la <span class='hl'>velocidad</span>, con 4 niveles. Si no lo pones, el motor va a la velocidad de siempre. Más rápido no siempre es mejor: ¡Sofie podría marearse!" }
      ] },
      { k: 'quiz', ph: 'prova', q: 'Quin és el maquinari?|¿Cuál es el hardware?', opts: ['El hub i el motor|El hub y el motor', 'El programa|El programa', 'Les ordres|Las órdenes'], a: 0, ex: 'El maquinari es pot tocar. El programa, no.|El hardware se puede tocar. El programa, no.' },
      { k: 'learn', ph: 'mans', cards: [
        { k: 'Mans a l\'obra|Manos a la obra', t: 'Construïm el carrusel: 12 passos|Construimos el carrusel: 12 pasos', media: { k: 'spkbuild', pdf: SPK_M.carrusel }, x: SPK_ROLES, tip: 'Al quadre blau de cada pas hi ha les peces que necessites. Quan el pas s\'assembla al dibuix, passeu al següent.|En el recuadro azul de cada paso están las piezas que necesitas. Cuando el paso se parece al dibujo, pasad al siguiente.' }
      ] },
      { k: 'learn', ph: 'prova', cards: [
        ...SPK_PROG.s1,
      ] },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 1: fes-lo girar|Reto 1: hazlo girar', t: 'Fes un programa perquè el carrusel faci <b>5 voltes</b>.|Haz un programa para que el carrusel dé <b>5 vueltas</b>.', tip: 'Si no es mou: mira que el cable estigui ben endollat i que hi hagi la marca verda de connectat.|Si no se mueve: mira que el cable esté bien enchufado y que esté la marca verde de conectado.' },
      { k: 'quiz', ph: 'prova', q: 'Vols que el carrusel giri al revés. Què canvies?|Quieres que el carrusel gire al revés. ¿Qué cambias?', opts: ['Faig servir el bloc de la fletxa contrària|Uso el bloque de la flecha contraria', 'Canvio el color de les peces|Cambio el color de las piezas', 'Endollo el cable a l\'altre port|Enchufo el cable al otro puerto'], a: 0, ex: 'Amb els blocs d\'icones, el port no canvia res: és la fletxa.|Con los bloques de iconos, el puerto no cambia nada: es la flecha.' },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 2: la Sofie es mareja!|Reto 2: ¡Sofie se marea!', t: 'Fes que giri al nivell de velocitat més lent. Després, que faci parades: 4 vegades, 1 volta i esperar.|Haz que gire al nivel de velocidad más lento. Después, que haga paradas: 4 veces, 1 vuelta y esperar.' },
      { k: 'spk', ph: 'crea', ico: '🚩', title: 'Repte 3: millora el carrusel|Reto 3: mejora el carrusel', t: 'Amb peces de la caixa, afegeix-hi el que vulguis: un seient, una bandera, un sostre… I inventa el programa més divertit per a la Sofie.|Con piezas de la caja, añade lo que quieras: un asiento, una bandera, un techo… E inventa el programa más divertido para Sofie.', tip: 'Prova\'l després de cada canvi: ha de continuar girant!|Pruébalo después de cada cambio: ¡tiene que seguir girando!' },
      { k: 'quiz', ph: 'tanca', q: 'Què vol dir el número del bloc de motor?|¿Qué significa el número del bloque de motor?', opts: ['Quantes voltes fa|Cuántas vueltas da', 'Quants motors hi ha|Cuántos motores hay', 'De quin color és|De qué color es'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 2 · La moto de neu ---------- */
  { id: 's1-2', t: 'La moto de neu del Leo|La moto de nieve de Leo', min: 50, badge: 'spk_seq',
    learn: ["Els blocs de moviment fan anar dos motors junts perquè el robot vagi recte.|Los bloques de movimiento hacen ir dos motores juntos para que el robot vaya recto.",
      'Cada volta de roda avança sempre el mateix: si ho mesures, pots calcular fins on arribarà.|Cada vuelta de rueda avanza siempre lo mismo: si lo mides, puedes calcular hasta dónde llegará.',
      "Un programa és una llista d'ordres, i l'ordre importa.|Un programa es una lista de órdenes, y el orden importa."],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Què vol dir el número del bloc de motor?|¿Qué significa el número del bloque de motor?', opts: ['Quantes voltes fa|Cuántas vueltas da', 'Quants segons dura|Cuántos segundos dura', 'Quant pesa|Cuánto pesa'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Una atracció de neu|Una atracción de nieve', t: 'El Leo vol una <b>moto de neu</b> que vagi fins a un bloc de gel i <b>torni sola</b> a la sortida. Avui fem servir <b>dos motors</b>, i haurem de fer de científics: mesurar i calcular!|Leo quiere una <b>moto de nieve</b> que vaya hasta un bloque de hielo y <b>vuelva sola</b> a la salida. Hoy usamos <b>dos motores</b>, y tendremos que hacer de científicos: ¡medir y calcular!' },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Dos motors|Dos motores', t: 'Per què els blocs de moviment?|¿Por qué los bloques de movimiento?', anim: 'spkmirall', x: "Els dos motors estan <b>encarats</b>, un mirant a cada costat, com les teves mans. Si tots dos giren igual, una roda va endavant i l'altra enrere, i la moto <b>dona voltes</b>. Els <span class='hl'>blocs de moviment</span> (els roses) ho arreglen: fan que les dues rodes vagin cap endavant.|Los dos motores están <b>enfrentados</b>, uno mirando a cada lado, como tus manos. Si los dos giran igual, una rueda va adelante y la otra atrás, y la moto <b>da vueltas</b>. Los <span class='hl'>bloques de movimiento</span> (los rosas) lo arreglan: hacen que las dos ruedas vayan hacia adelante." },
        { k: 'La roda|La rueda', t: 'Una volta, un tros de camí|Una vuelta, un trozo de camino', anim: 'spkroda', x: "Quan una roda fa <span class='hl'>una volta</span>, la moto avança el que mesura la vora de la roda. Sempre el mateix tros! Per això, si saps quant avança en una volta, pots saber fins on arribarà.|Cuando una rueda da <span class='hl'>una vuelta</span>, la moto avanza lo que mide el borde de la rueda. ¡Siempre el mismo trozo! Por eso, si sabes cuánto avanza en una vuelta, puedes saber hasta dónde llegará." },
        { k: 'Calcular|Calcular', t: 'Més voltes, més lluny|Más vueltas, más lejos', anim: 'spkvoltes', x: "Si en 1 volta avança un tros, en 2 voltes avança <b>el doble</b>, i en 4 voltes, <b>quatre vegades més</b>. És com fer passes iguals: com més passes, més lluny.|Si en 1 vuelta avanza un trozo, en 2 vueltas avanza <b>el doble</b>, y en 4 vueltas, <b>cuatro veces más</b>. Es como dar pasos iguales: cuantos más pasos, más lejos." },
        { k: 'Seqüència|Secuencia', t: 'Primer una cosa, després l\'altra|Primero una cosa, después la otra', anim: 'spkseq', x: "El robot fa les ordres <span class='hl'>d'una en una i en ordre</span>, d'esquerra a dreta. Això és una <b>seqüència</b>. Si canvies els blocs de lloc, fa una altra cosa!|El robot hace las órdenes <span class='hl'>de una en una y en orden</span>, de izquierda a derecha. Eso es una <b>secuencia</b>. Si cambias los bloques de sitio, ¡hace otra cosa!" }
      ] },
      { k: 'quiz', ph: 'prova', q: 'En 1 volta, la moto avança 20 cm. Quant avança en 3 voltes?|En 1 vuelta, la moto avanza 20 cm. ¿Cuánto avanza en 3 vueltas?', opts: ['60 cm|60 cm', '23 cm|23 cm', '20 cm|20 cm'], a: 0, ex: '20 + 20 + 20 = 60. Però és un exemple: la vostra l\'haureu de mesurar!|20 + 20 + 20 = 60. Pero es un ejemplo: ¡la vuestra la tendréis que medir!' },
      { k: 'learn', ph: 'mans', cards: [
        { k: 'Mans a l\'obra|Manos a la obra', t: 'Construïm la moto: 26 passos|Construimos la moto: 26 pasos', media: { k: 'spkbuild', pdf: SPK_M.moto }, x: SPK_ROLES, tip: 'En alguns passos es munta una part a banda i després s\'enganxa: seguiu la fletxa.|En algunos pasos se monta una parte aparte y después se engancha: seguid la flecha.' }
      ] },
      { k: 'learn', ph: 'prova', cards: [
        ...SPK_PROG.s2,
      ] },
      { k: 'spk', ph: 'repte', ico: '🏁', title: 'Repte 1: mesura una volta|Reto 1: mide una vuelta', t: 'Posa la moto a la sortida. Programa <b>1 volta</b> endavant, prem ▶ i mesura amb un regle quant ha avançat. Apunta-ho a la fitxa!|Pon la moto en la salida. Programa <b>1 vuelta</b> adelante, pulsa ▶ y mide con una regla cuánto ha avanzado. ¡Apúntalo en la ficha!', prog: [['inici', 'fwd:1']] },
      { k: 'spk', ph: 'repte', ico: '🧊', title: 'Repte 2: atura\'t al bloc de gel|Reto 2: párate en el bloque de hielo', t: 'Mesura la pista. Calcula quantes voltes calen, apunta-ho i prova-ho. Si no encertes, canvia el número i torna-hi.|Mide la pista. Calcula cuántas vueltas hacen falta, apúntalo y pruébalo. Si no aciertas, cambia el número y vuelve a intentarlo.', tip: 'Una cosa cada vegada: canvia només el número i mira què passa.|Una cosa cada vez: cambia solo el número y mira qué pasa.' },
      { k: 'seq', ph: 'investiga', q: 'Posa en ordre el programa d\'anar i tornar.|Pon en orden el programa de ir y volver.', items: ['Inici|Inicio', 'Endavant fins al bloc de gel|Adelante hasta el bloque de hielo', 'Espera 1 segon|Espera 1 segundo', 'Enrere fins a la sortida|Atrás hasta la salida'] },
      { k: 'spk', ph: 'crea', ico: '🏁', title: 'Repte 3: torna a casa|Reto 3: vuelve a casa', t: 'La moto ha d\'anar fins al bloc de gel i tornar a la sortida. Al final, mini cursa: qui s\'atura més a prop de la línia? Guanya la precisió, no la velocitat.|La moto tiene que ir hasta el bloque de hielo y volver a la salida. Al final, minicarrera: ¿quién se para más cerca de la línea? Gana la precisión, no la velocidad.', prog: [['inici', 'fwd:3', 'wait:1', 'back:3']] },
      { k: 'quiz', ph: 'tanca', q: 'Per què fem servir els blocs roses a la moto?|¿Por qué usamos los bloques rosas en la moto?', opts: ['Perquè les dues rodes vagin endavant|Para que las dos ruedas vayan hacia adelante', 'Perquè són més bonics|Porque son más bonitos', 'Perquè la llum funcioni|Para que la luz funcione'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 3 · L'entrada amb tiquets ---------- */
  { id: 's1-3', t: "L'entrada amb tiquets|La entrada con tiques", min: 50, badge: 'spk_si',
    learn: ['Un sensor és com un ull: el de color il·lumina el que té davant i mira quin color torna.|Un sensor es como un ojo: el de color ilumina lo que tiene delante y mira qué color vuelve.',
      'Si passa això, fes allò: cada color té la seva pila de blocs.|Si pasa esto, haz aquello: cada color tiene su pila de bloques.',
      'Un programa pot tenir diverses piles esperant alhora.|Un programa puede tener varias pilas esperando a la vez.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Per fer que la moto arribi més lluny, què canvies?|Para que la moto llegue más lejos, ¿qué cambias?', opts: ['Més voltes|Más vueltas', 'Menys rodes|Menos ruedas', 'El color de la moto|El color de la moto'], a: 0 },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'Hi ha cua!|¡Hay cola!', t: 'Al parc hi ha cua! Construirem una <b>entrada que llegeix el color del tiquet</b> i decideix qui pot passar. Fins ara el robot només obeïa. Avui aprendrà a <b>mirar</b> i a <b>decidir</b>.|¡En el parque hay cola! Vamos a construir una <b>entrada que lee el color de la tique</b> y decide quién puede pasar. Hasta ahora el robot solo obedecía. Hoy aprenderá a <b>mirar</b> y a <b>decidir</b>.' },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Sensor|Sensor', t: 'Els ulls del robot|Los ojos del robot', anim: 'spksensor', x: "Un <span class='hl'>sensor</span> mesura alguna cosa del món. El <b>sensor de color</b> il·lumina el que té davant i mira quin color li torna. Per això el tiquet ha d'estar <b>a prop</b>: de lluny, no veu bé.|Un <span class='hl'>sensor</span> mide algo del mundo. El <b>sensor de color</b> ilumina lo que tiene delante y mira qué color le vuelve. Por eso la tique tiene que estar <b>cerca</b>: de lejos, no ve bien.", tip: 'A la vida real: les caixes del súper llegeixen codis amb llum, i hi ha robots que separen fruita per colors.|En la vida real: las cajas del súper leen códigos con luz, y hay robots que separan fruta por colores.' },
        { k: 'Llum|Luz', t: 'Una pantalla de 9 quadrats|Una pantalla de 9 cuadrados', anim: 'spkmatriu', x: "La <span class='hl'>llum</span> del kit té <b>9 quadrats</b>, i cada un pot ser d'un color. Podem dibuixar-hi lletres, cares o senyals, com un semàfor.|La <span class='hl'>luz</span> del kit tiene <b>9 cuadrados</b>, y cada uno puede ser de un color. Podemos dibujar letras, caras o señales, como un semáforo." },
        { k: 'Decidir|Decidir', t: 'Si veu aquest color, fes això|Si ve este color, haz esto', anim: 'spksi', x: "El bloc groc del <span class='hl'>color</span> és un bloc d'inici especial: la pila s'engega <b>cada vegada</b> que el sensor veu aquell color. Fem una pila per a cada color.|El bloque amarillo del <span class='hl'>color</span> es un bloque de inicio especial: la pila se pone en marcha <b>cada vez</b> que el sensor ve ese color. Hacemos una pila para cada color." },
        { k: 'Els 2 ports|Los 2 puertos', t: 'Avui, sensor i llum|Hoy, sensor y luz', anim: 'spkports', x: "El hub només té <b>2 ports</b>. Avui hi endollem el <b>sensor</b> i la <b>llum</b>, i ja estan plens. Per això cada atracció ha de triar bé les seves peces.|El hub solo tiene <b>2 puertos</b>. Hoy enchufamos el <b>sensor</b> y la <b>luz</b>, y ya están llenos. Por eso cada atracción tiene que elegir bien sus piezas." }
      ] },
      { k: 'quiz', ph: 'prova', q: 'Per què el tiquet ha d\'estar a prop del sensor?|¿Por qué la tique tiene que estar cerca del sensor?', opts: ['Perquè el sensor mira la llum que torna|Porque el sensor mira la luz que vuelve', 'Perquè el tiquet pesa poc|Porque la tique pesa poco', 'Perquè el cable és curt|Porque el cable es corto'], a: 0 },
      { k: 'learn', ph: 'mans', cards: [
        { k: 'Mans a l\'obra|Manos a la obra', t: "Construïm l'entrada: 22 passos|Construimos la entrada: 22 pasos", media: { k: 'spkbuild', pdf: SPK_M.entrada }, x: SPK_ROLES, tip: 'A l\'últim pas hi ha els tiquets: groc, verd i vermell.|En el último paso están las tiques: amarilla, verde y roja.' }
      ] },
      { k: 'learn', ph: 'prova', cards: [
        ...SPK_PROG.s3,
      ] },
      { k: 'spk', ph: 'repte', ico: '💡', title: 'Repte 1: el tiquet groc|Reto 1: la tique amarilla', t: 'Quan el Leo ensenya el tiquet groc, s\'encén la llum groga.|Cuando Leo enseña la tique amarilla, se enciende la luz amarilla.', prog: [['color:y', 'light:y']], tip: 'Si no fa res: has premut ▶? El tiquet està ben a prop i sense tapar?|Si no hace nada: ¿has pulsado ▶? ¿La tique está bien cerca y sin tapar?' },
      { k: 'quiz', ph: 'prova', q: 'Ensenyes el tiquet verd, però només has fet la pila del groc. Què passa?|Enseñas la tique verde, pero solo has hecho la pila del amarillo. ¿Qué pasa?', opts: ['No passa res: cap pila és per al verd|No pasa nada: ninguna pila es para el verde', 'S\'encén la llum groga|Se enciende la luz amarilla', 'S\'apaga el hub|Se apaga el hub'], a: 0, ex: 'El robot només fa el que li has programat.|El robot solo hace lo que le has programado.' },
      { k: 'spk', ph: 'repte', ico: '🎯', title: 'Repte 2: cada tiquet, una cosa|Reto 2: cada tique, una cosa', t: 'Verd: llum verda i un so, es passa. Vermell: llum vermella, no es passa.|Verde: luz verde y un sonido, se pasa. Rojo: luz roja, no se pasa.' },
      { k: 'spk', ph: 'crea', ico: '✨', title: "Repte 3: l'entrada més divertida|Reto 3: la entrada más divertida", t: 'Dibuixa una cara feliç amb els 9 quadrats per al verd i una creu per al vermell. Decora l\'entrada. Després, un altre equip fa de públic: descobriran què fa cada tiquet?|Dibuja una cara feliz con los 9 cuadrados para el verde y una cruz para el rojo. Decora la entrada. Después, otro equipo hace de público: ¿descubrirán qué hace cada tique?' },
      { k: 'quiz', ph: 'tanca', q: 'Quantes piles necessites per a 3 colors?|¿Cuántas pilas necesitas para 3 colores?', opts: ['3|3', '1|1', '9|9'], a: 0 },
      { k: 'feel', ph: 'tanca' }
    ] },

  /* ---------- Sessió 4 · La gran fira ---------- */
  { id: 's1-4', t: 'La gran fira|La gran feria', min: 50, proj: true, badge: 'spk_fira',
    learn: ['Dissenyar és tenir una idea, provar-la i millorar-la.|Diseñar es tener una idea, probarla y mejorarla.',
      'Motors, ordres i sensors: ja sabem fer servir totes les peces del robot.|Motores, órdenes y sensores: ya sabemos usar todas las piezas del robot.',
      'Quan una cosa no surt, no és un error: és una pista per millorar.|Cuando algo no sale, no es un error: es una pista para mejorar.'],
    steps: [
      { k: 'quiz', ph: 'recorda', q: 'Quantes coses podem connectar a la vegada al hub?|¿Cuántas cosas podemos conectar a la vez al hub?', opts: ['2|2', '3|3', '10|10'], a: 0, ex: 'Té 2 ports. Tria bé!|Tiene 2 puertos. ¡Elige bien!' },
      { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: "Avui s'obre el parc!|¡Hoy se abre el parque!", t: "Avui s'obre el parc! Cada equip crea la seva <b>pròpia atracció</b>, i a la fira tothom la prova.|¡Hoy se abre el parque! Cada equipo crea su <b>propia atracción</b>, y en la feria todo el mundo la prueba." },
      { k: 'learn', ph: 'descobreix', cards: [
        { k: 'Dissenyar|Diseñar', t: 'Idea, prova i millora|Idea, prueba y mejora', anim: 'spkidea', x: 'Els enginyers no ho encerten a la primera. Tenen una idea, la proven, miren què passa i la <span class="hl">milloren</span>. Aquest cercle es repeteix moltes vegades!|Los ingenieros no aciertan a la primera. Tienen una idea, la prueban, miran qué pasa y la <span class="hl">mejoran</span>. ¡Este círculo se repite muchas veces!' },
        ...SPK_PROG.s4,
      ] },
      { k: 'spk', ph: 'mans', ico: '🖍', title: 'Dibuixeu la vostra atracció|Dibujad vuestra atracción', t: 'Cadascú diu una idea en un minut. Trieu-ne una i dibuixeu-la a la fitxa. Com es diu? Quines 2 peces hi endollareu?|Cada uno dice una idea en un minuto. Elegid una y dibujadla en la ficha. ¿Cómo se llama? ¿Qué 2 piezas enchufaréis?', done: 'Ja la tenim dibuixada!|¡Ya la tenemos dibujada!' },
      { k: 'learn', ph: 'mans', cards: [
        { k: 'Per començar|Para empezar', t: 'Parteix del carrusel|Parte del carrusel', media: { k: 'spkbuild', pdf: SPK_M.carrusel }, x: 'Una hora passa de pressa! Si voleu, comenceu pel carrusel (o per un model d\'una altra sessió) i transformeu-lo en la vostra atracció.|¡Una hora pasa rápido! Si queréis, empezad por el carrusel (o por un modelo de otra sesión) y transformadlo en vuestra atracción.' }
      ] },
      { k: 'spk', ph: 'crea', ico: '✨', title: 'Construïu-la i programeu-la|Construidla y programadla', t: 'L\'atracció ha de fer servir almenys un motor o un sensor. Màxim, dues peces endollades.|La atracción tiene que usar al menos un motor o un sensor. Como máximo, dos piezas enchufadas.', steps: ['Construïu.|Construid.', 'Programeu: mireu les receptes si us cal.|Programad: mirad las recetas si os hace falta.', 'Proveu i milloreu.|Probad y mejorad.'], done: 'La nostra atracció funciona!|¡Nuestra atracción funciona!' },
      { k: 'spk', ph: 'crea', ico: '🏆', title: 'Comença la fira!|¡Empieza la feria!', t: 'Cada equip presenta la seva atracció: com es diu, què fa i què ha estat el més difícil. Els altres la proven i diuen què els ha agradat.|Cada equipo presenta su atracción: cómo se llama, qué hace y qué ha sido lo más difícil. Los demás la prueban y dicen qué les ha gustado.', done: 'La fira ha estat un èxit!|¡La feria ha sido un éxito!' },
      { k: 'feel', ph: 'tanca', q: 'Com us ha anat la missió?|¿Cómo os ha ido la misión?' },
      { k: 'diploma', ph: 'tanca', skills: ['Fer girar un motor|Hacer girar un motor', 'Mesurar i calcular fins on arriba un robot|Medir y calcular hasta dónde llega un robot', 'Fer servir un sensor de color|Usar un sensor de color', 'Dissenyar una atracció pròpia|Diseñar una atracción propia'] }
    ] }
] };

const c = TECH.find(x => x.id === 'spike'); delete c.soon;
for (const [n, u] of Object.entries(COURSE_UNITS)) c.units[n - 1] = u;
})();
