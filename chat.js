/* ===== Xat d'ajuda amb IA (Numi Pro i Numi Ment) =====
   Botó flotant → finestra de xat. La conversa només viu en memòria (no es guarda enlloc).
   No surt en exàmens (porta del Cavaller, prova inicial, prova d'evolució) ni en batalles. */
const XAT = { msgs: [], busy: false, open: false };
const xatEsc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const xatMd = s => xatEsc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
const xatPlain = h => { const d = document.createElement('div'); d.innerHTML = h || ''; return d.textContent.replace(/\s+/g, ' ').trim(); };

// on és l'alumne ara mateix (per donar context a la IA)
function xatCtx() {
  const c = {};
  if (IS_MENT) { if (typeof MGCUR !== 'undefined' && MGCUR && MG[MGCUR]) c.unit = tx(MG[MGCUR].n); return c; }
  try {
    c.course = tx(CUR().long);
    const us = UNITS_();
    if (LS && LS.ui != null && us[LS.ui]) { const u = us[LS.ui]; c.unit = tx(u.title); if (LS.li != null && u.lessons[LS.li]) c.lesson = tx(u.lessons[LS.li].t); }
    if (LS && LS.cur && LS.state === 'ask') c.question = xatPlain(LS.cur.q) + (LS.cur.vis ? ' ' + xatPlain(LS.cur.vis).slice(0, 120) : '');
  } catch (e) { }
  return c;
}
const xatBlocked = () => (VIEW === 'onboard') || (typeof classOff === 'function' && classOff('xat')) || (LS && (LS.exam || LS.crono || LS.sim || ['place', 'evo', 'battle'].includes(LS.mode)));

// el botó del xat és a la barra del menú (app.js, nav) i, dins de les lliçons, a la barra de dalt
function xatSync() {
  const top = document.querySelector('.lesson .l-top');
  const show = VAR.chat && P && !xatBlocked();
  document.querySelectorAll('.navxat').forEach(b => b.hidden = !show);
  if (top && show && LS && LS.cur && !top.querySelector('.xattop')) {
    const b = document.createElement('button'); b.className = 'xattop'; b.onclick = xatOpen;
    b.setAttribute('aria-label', L("Pregunta a en Numi (xat d'ajuda)", 'Pregunta a Numi (chat de ayuda)'));
    b.innerHTML = charSVG('numi', 'happy');
    const last = top.querySelector('#combo, .pcount, .crono'); last ? top.insertBefore(b, last) : top.appendChild(b);
  }
  if (!show) document.querySelectorAll('.xattop').forEach(b => b.remove());
}
new MutationObserver(() => xatSync()).observe(document.getElementById('app'), { childList: true });

function xatOpen() {
  if (XAT.open) return; XAT.open = true;
  const d = document.createElement('div'); d.id = 'xat'; d.className = 'xatwin'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', L("Xat d'ajuda", 'Chat de ayuda'));
  const hello = IS_MENT
    ? L('Hola! Soc en Numi. Pregunta\'m com funciona un joc, trucs per al sudoku o idees per mantenir la ment activa.', '¡Hola! Soy Numi. Pregúntame cómo funciona un juego, trucos para el sudoku o ideas para mantener la mente activa.')
    : L('Ei! Soc en Numi. Si t\'encalles, pregunta\'m: t\'ajudo a entendre-ho, no et faig els deures 😉', '¡Ey! Soy Numi. Si te atascas, pregúntame: te ayudo a entenderlo, no te hago los deberes 😉');
  d.innerHTML = `<div class="xathead"><span class="xatav">${charSVG('numi', 'happy')}</span><div><b>Numi</b><small>${L('Assistent amb IA · pot equivocar-se', 'Asistente con IA · puede equivocarse')}</small></div>
      <button class="xatx" onclick="xatClose()" aria-label="${L('Tanca', 'Cierra')}">×</button></div>
    <div class="xatlog" id="xatlog"><div class="xm bot">${hello}</div>${XAT.msgs.map(m => `<div class="xm ${m.role === 'user' ? 'me' : 'bot'}">${m.role === 'user' ? xatEsc(m.content) : xatMd(m.content)}</div>`).join('')}</div>
    <p class="xatnote">${L('No hi escriguis dades personals. Les converses no es guarden.', 'No escribas datos personales. Las conversaciones no se guardan.')}</p>
    <form class="xatin" onsubmit="event.preventDefault();xatSend()"><textarea id="xatq" rows="1" maxlength="600" placeholder="${IS_MENT ? L('Escriu la teva pregunta…', 'Escribe tu pregunta…') : L('Què no entens?', '¿Qué no entiendes?')}"></textarea>
      <button class="xatgo" id="xatgo" aria-label="${L('Envia', 'Envía')}">➤</button></form>`;
  document.body.appendChild(d);
  const q = $('#xatq');
  q.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); xatSend(); } });
  q.addEventListener('input', () => { q.style.height = 'auto'; q.style.height = Math.min(q.scrollHeight, 110) + 'px'; });
  if (!P.code) { $('#xatlog').insertAdjacentHTML('beforeend', `<div class="xm bot">${L('Per fer servir el xat, primer cal que tinguis el compte creat (Perfil → El meu compte).', 'Para usar el chat, primero necesitas tener la cuenta creada (Perfil → Mi cuenta).')}</div>`); q.disabled = true; }
  setTimeout(() => { q.focus(); xatScroll(); }, 60);
}
function xatClose() { const d = $('#xat'); if (d) d.remove(); XAT.open = false; }
document.addEventListener('keydown', e => { if (e.key === 'Escape' && XAT.open && !$('.modal-bg')) xatClose(); });
const xatScroll = () => { const l = $('#xatlog'); if (l) l.scrollTop = l.scrollHeight; };

async function xatSend() {
  const q = $('#xatq'); if (!q || XAT.busy) return;
  const t = q.value.trim(); if (!t) return;
  q.value = ''; q.style.height = 'auto';
  XAT.msgs.push({ role: 'user', content: t }); XAT.busy = true;
  const log = $('#xatlog');
  log.insertAdjacentHTML('beforeend', `<div class="xm me">${xatEsc(t)}</div><div class="xm bot typing" id="xatnow"><i></i><i></i><i></i></div>`); xatScroll();
  const out = $('#xatnow'); let txt = '';
  try {
    const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: P.code, variant: VAR.id, lang: LANG, ctx: xatCtx(), messages: XAT.msgs.slice(-10) }) });
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      XAT.msgs.pop();
      out.classList.remove('typing'); out.classList.add('warn');
      out.innerHTML = e.error === 'limit'
        ? (e.pla === 'free' ? L(`Avui ja has fet les ${e.max} preguntes del pla gratuït. Demà en tens més, o amb Premium en tens fins a 40 al dia.`, `Hoy ya has hecho las ${e.max} preguntas del plan gratuito. Mañana tienes más, o con Premium tienes hasta 40 al día.`)
          : L(`Avui ja has fet ${e.max} preguntes. Demà en tens més!`, `Hoy ya has hecho ${e.max} preguntas. ¡Mañana tienes más!`))
        : e.error === 'xat-off' ? L("El teu docent ha desactivat l'assistent per a la classe.", 'Tu docente ha desactivado el asistente para la clase.')
        : r.status === 429 ? L('Massa preguntes seguides. Espera una estona.', 'Demasiadas preguntas seguidas. Espera un rato.')
        : L("Ara no puc respondre. Torna-ho a provar d'aquí a una estona.", 'Ahora no puedo responder. Vuelve a probarlo en un rato.');
      return;
    }
    const rd = r.body.getReader(), dec = new TextDecoder();
    out.classList.remove('typing'); out.innerHTML = '';
    for (;;) { const { done, value } = await rd.read(); if (done) break; txt += dec.decode(value, { stream: true }); out.innerHTML = xatMd(txt); xatScroll(); }
    if (!txt.trim()) throw new Error('buit');
    XAT.msgs.push({ role: 'assistant', content: txt });
  } catch (e) {
    if (!txt.trim()) { XAT.msgs.pop(); out.classList.remove('typing'); out.classList.add('warn'); out.textContent = navigator.onLine === false ? L('Sense connexió. Torna-ho a provar.', 'Sin conexión. Vuelve a probarlo.') : L("Ara no puc respondre. Torna-ho a provar d'aquí a una estona.", 'Ahora no puedo responder. Vuelve a probarlo en un rato.'); }
  } finally { XAT.busy = false; out.removeAttribute('id'); xatScroll(); }
}
xatSync();
