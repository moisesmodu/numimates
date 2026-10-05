/* =====================================================================================================================
   Numi Tech · MakeCode dins de l'app (Robòtica)
   El botó «MakeCode» del programa obre makecode.microbit.org en un marc, en mode «controlador»: l'app li dona el projecte
   (el programa del simulador en JavaScript + l'extensió «maqueen»), MakeCode el converteix en blocs i l'alumne el
   descarrega a la micro:bit. Protocol: el mateix que @microbit/makecode-embed (MIT), sense la llibreria.
   Si la xarxa de l'escola bloqueja MakeCode, la mateixa finestra dona el codi per copiar-lo (com abans).
   Només s'envia el programa: cap dada de l'alumne.
   ===================================================================================================================== */
const TMC = {
  base: 'https://makecode.microbit.org',
  tv: '8.0.22',                                   // versió de MakeCode amb què es va publicar l'extensió (pxt.json)
  deps: { maqueen: 'github:dfrobot/pxt-maqueen#v1.7.17', neopixel: 'github:microsoft/pxt-neopixel#v0.7.6' },
  wait: 25000,                                    // si MakeCode no respon en aquest temps, segurament està bloquejat
  st: null
};
const tmcSecs = () => Math.floor(Date.now() / 1000);
const tmcS = () => (typeof TSS !== 'undefined' && TSS) || null;   // TSS és un «let» global: no penja de window
const tmcKey = () => { const t = tmcS(); return 'numi.mc.' + ((t && t.s && t.s.id) || 'robo') + ':' + ((t && t.i) || 0); };
const tmcGet = () => { try { return JSON.parse(localStorage.getItem(tmcKey()) || 'null'); } catch (e) { return null; } };
const tmcPut = v => { try { localStorage.setItem(tmcKey(), JSON.stringify(v)); } catch (e) { } };

// el projecte de MakeCode a partir del codi del simulador (blocs buits: MakeCode els fa a partir del JavaScript)
function tmcProject(code, name) {
  const deps = { core: '*', radio: '*', maqueen: TMC.deps.maqueen };
  if (/\bneopixel\./.test(code)) deps.neopixel = TMC.deps.neopixel;
  const t = tmcSecs(), id = 'numi-' + tmcKey().slice(8).replace(/[^a-z0-9]+/gi, '-');
  return {
    header: { id, name, meta: {}, editor: 'tsprj', target: 'microbit', targetVersion: TMC.tv, pubId: '', pubCurrent: false,
      recentUse: t, modificationTime: t, isDeleted: false, cloudCurrent: false, cloudVersion: null, cloudLastSyncTime: 0, saveId: null, _rev: null },
    text: {
      'main.ts': code + '\n', 'main.blocks': '', 'README.md': ' ',
      'pxt.json': JSON.stringify({ name, description: '', dependencies: deps, files: ['main.blocks', 'main.ts', 'README.md'], preferredEditor: 'blocksprj', targetVersions: { target: TMC.tv, targetId: 'microbit' } }, null, 4)
    }
  };
}
function tmcName() { const t = tmcS(), s = t && t.s; const n = s && s.t ? tx(s.t) : 'Maqueen'; return ('Numi · ' + n).replace(/[<>"]/g, '').slice(0, 40); }

function rbShowMC() {
  if (typeof RB === 'undefined' || !RB.prog) return;
  const code = roboMC(RB.prog), saved = tmcGet();
  // si el programa del simulador no ha canviat, es recupera el que l'alumne havia fet a MakeCode
  const proj = saved && saved.src === code && saved.project ? saved.project : tmcProject(code, tmcName());
  tmcClose();
  const lang = LANG === 'es' ? 'es' : 'ca', src = `${TMC.base}/?controller=1&lang=${lang}#editor`;
  const ico = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="2" y="7" width="28" height="18" rx="9" fill="currentColor"/><circle cx="11" cy="16" r="2.6" fill="#fff"/><circle cx="21" cy="16" r="2.6" fill="#fff"/></svg>';
  document.body.insertAdjacentHTML('beforeend', `<div class="tmc" role="dialog" aria-modal="true" aria-label="MakeCode">
    <header class="tmch">
      <div class="tmct"><span class="tmclogo">${ico}</span><div><b>${L('Al Maqueen de veritat', 'Al Maqueen de verdad')}</b><small>MakeCode · makecode.microbit.org</small></div></div>
      <ol class="tmcsteps">
        <li><i>1</i>${L('Revisa els blocs', 'Revisa los bloques')}</li>
        <li><i>2</i>${L('Connecta la micro:bit amb el cable USB', 'Conecta la micro:bit con el cable USB')}</li>
        <li><i>3</i>${L('Prem «Descarrega»', 'Pulsa «Descargar»')}</li>
      </ol>
      <button class="tmcx" onclick="tmcClose()" aria-label="${L('Tanca', 'Cierra')}">×</button>
    </header>
    <div class="tmcbody">
      <iframe id="tmcf" title="MakeCode" allow="usb; clipboard-write" src="${src}"></iframe>
      <div class="tmcload" id="tmcload"><span class="tmcspin"></span><b>${L('Obrint MakeCode amb el teu programa…', 'Abriendo MakeCode con tu programa…')}</b><small>${L('La primera vegada pot trigar una mica.', 'La primera vez puede tardar un poco.')}</small></div>
    </div>
    <footer class="tmcfoot">
      <button class="btn ghost" onclick="tmcCode()">${L('Mostra el codi', 'Muestra el código')}</button>
      <small>${L('Els blocs del Maqueen surten en anglès: són els mateixos que al simulador. A MakeCode només s\'hi envia el programa, cap dada teva.', 'Los bloques del Maqueen salen en inglés: son los mismos que en el simulador. A MakeCode solo se envía el programa, ningún dato tuyo.')}</small>
    </footer></div>`);
  const fr = document.getElementById('tmcf'), origin = new URL(TMC.base).origin;
  const st = TMC.st = { code, proj, fr, origin, seen: false, blocks: proj.header.editor === 'blocksprj', n: 0, pend: {} };
  const post = m => { try { fr.contentWindow.postMessage(m, origin); } catch (e) { } };
  const ask = m => new Promise((ok, ko) => { m.id = 'n' + (st.n++); m.response = true; st.pend[m.id] = { ok, ko }; post(m); setTimeout(() => { if (st.pend[m.id]) { delete st.pend[m.id]; ko(new Error('timeout')); } }, 15000); });
  const shown = () => { const l = document.getElementById('tmcload'); if (l) l.remove(); };
  st.on = ev => {
    if (ev.origin !== origin || ev.source !== fr.contentWindow) return;
    const d = ev.data; if (!d || typeof d !== 'object') return;
    st.seen = true;
    if (d.type === 'pxteditor' && d.id !== undefined && st.pend[d.id]) { const p = st.pend[d.id]; delete st.pend[d.id]; d.success ? p.ok(d) : p.ko(d.error || new Error('makecode')); return; }
    if (d.type !== 'pxthost') return;
    if (d.action === 'workspacesync') {
      post({ ...d, success: true, projects: [st.proj], controllerId: 'NumiTech', editor: {} });
      if (d.response) post({ type: 'pxthost', id: d.id, success: true });
    } else if (d.action === 'workspacesave') {
      if (d.project && d.project.header) { st.proj = d.project; tmcPut({ src: st.code, project: d.project }); }
      if (d.response) post({ type: 'pxthost', id: d.id, success: true });
    } else if (d.action === 'editorcontentloaded') {
      shown();
      // el projecte arriba en JavaScript: es passa a blocs una sola vegada (MakeCode descompila el codi)
      if (!st.blocks) { st.blocks = true; setTimeout(() => ask({ type: 'pxteditor', action: 'switchblocks' }).catch(() => { }), 400); }
    }
    // MakeCode espera resposta d'alguns avisos (p. ex. «workspaceloaded»): sempre se li respon
    if (d.response && d.action !== 'workspacesync' && d.action !== 'workspacesave') post({ type: 'pxthost', id: d.id, success: true });
  };
  window.addEventListener('message', st.on);
  fr.addEventListener('load', () => post({ type: 'iframeclientready' }));
  st.to = setTimeout(() => { if (!st.seen) tmcFail(); }, navigator.onLine === false ? 0 : TMC.wait);
  st.key = e => { if (e.key === 'Escape' && !document.querySelector('.modal-bg')) tmcClose(); };
  document.addEventListener('keydown', st.key);
  SFX.tap && SFX.tap();
}
function tmcClose() {
  const st = TMC.st;
  if (st) { window.removeEventListener('message', st.on); document.removeEventListener('keydown', st.key); clearTimeout(st.to); TMC.st = null; }
  document.querySelectorAll('.tmc').forEach(x => x.remove());
}
// MakeCode no ha respost: segurament la xarxa el bloqueja → el camí de sempre (copiar el codi)
function tmcFail() {
  const b = document.querySelector('.tmc .tmcbody'), st = TMC.st; if (!b || !st) return; document.querySelector('.tmc').classList.add('no');
  b.innerHTML = `<div class="tmcno"><h3>${L('No es pot obrir MakeCode aquí', 'No se puede abrir MakeCode aquí')}</h3>
    <p>${L('Potser no hi ha connexió o la xarxa de l\'escola el bloqueja. Ho pots fer igualment:', 'Quizá no hay conexión o la red de la escuela lo bloquea. Puedes hacerlo igualmente:')}</p>
    <ol><li>${L('Copia el codi.', 'Copia el código.')}</li><li>${L('Obre <b>makecode.microbit.org</b> → nou projecte → Extensions → «maqueen».', 'Abre <b>makecode.microbit.org</b> → nuevo proyecto → Extensiones → «maqueen».')}</li><li>${L('JavaScript → enganxa-hi el codi → torna a «Blocs» → Descarrega.', 'JavaScript → pega el código → vuelve a «Bloques» → Descargar.')}</li></ol>
    <pre class="rcode">${esc(st.code)}</pre>
    <div class="tmcnob"><button class="btn" onclick="tmcCopy()">${L('Copia el codi', 'Copia el código')}</button><a class="btn ghost" href="${TMC.base}/#editor" target="_blank" rel="noopener">${L('Obre MakeCode', 'Abre MakeCode')}</a><button class="btn ghost" onclick="rbShowMC()">${L('Torna-ho a provar', 'Vuelve a probarlo')}</button></div></div>`;
}
function tmcCopy() { const st = TMC.st; if (!st) return; try { navigator.clipboard.writeText(st.code); toast(L('Codi copiat!', '¡Código copiado!')); } catch (e) { } }
function tmcCode() { const st = TMC.st; if (!st) return; const c = st.code; tmcClose(); rbShowCode(c); }
