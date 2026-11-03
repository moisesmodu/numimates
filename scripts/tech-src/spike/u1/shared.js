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
