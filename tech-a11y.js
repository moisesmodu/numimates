/* =====================================================================================================================
   Numi Tech · els editors de blocs amb el teclat i amb lector de pantalla
   (en Bit, el Maqueen, l'escenari de Creadors i el Taller 3D amb blocs)
   · Tot es pot fer amb el tabulador i Retorn: la paleta, els llocs on van els blocs, els blocs i les seves eines.
     Els blocs que eren <div> clicables passen a ser focusables (tabindex + role=button) i Retorn/Espai els tria.
   · Cada canvi torna a pintar el programa: si s'hi estava treballant amb el teclat, el focus torna on era
     (el mateix botó de la paleta per afegir-ne més, el bloc triat o el lloc on van els blocs nous).
   · Dreceres amb un bloc triat: Supr o Retrocés l'esborra, Alt+↑/↓ el mou i Esc el deixa anar.
     ↑/↓ sols passen d'un element del programa al següent.
   · Un avís per al lector de pantalla diu què ha passat (afegit, esborrat, mogut).
   Només actua quan l'última interacció ha estat amb el teclat: amb el ratolí o el dit tot funciona com sempre.
   ===================================================================================================================== */
const TKB = {
  kb: false,
  // cada editor: el seu estat, i el nom de les funcions de pintar, afegir, esborrar i moure
  eds: {
    tb: { S: () => (typeof TB !== 'undefined' ? TB : null), draw: 'tbDraw', ins: 'tbIns', del: 'tbDel', move: 'tbMove' },
    rb: { S: () => (typeof RB !== 'undefined' ? RB : null), draw: 'rbDraw', ins: 'rbIns', del: 'rbDel', move: 'rbMove' },
    sg: { S: () => (typeof SG !== 'undefined' ? SG : null), draw: 'sgDraw', ins: 'sgIns', del: 'sgDel', move: 'sgMoveB' },
    m3p: { S: () => (typeof M3P !== 'undefined' ? M3P : null), draw: 'm3pDraw', ins: 'm3pIns', del: 'm3pDel', move: 'm3pMove' }
  }
};
const tkbL = (ca, es) => (typeof LANG !== 'undefined' && LANG === 'es' ? es : ca);
document.addEventListener('keydown', e => { if (!e.ctrlKey && !e.metaKey) TKB.kb = true; }, true);
document.addEventListener('pointerdown', () => { TKB.kb = false; }, true);

// avís per al lector de pantalla (una sola zona, invisible)
function tkbSay(t) {
  let z = document.getElementById('tlive');
  if (!z) { z = document.createElement('div'); z.id = 'tlive'; z.className = 'tsr'; z.setAttribute('role', 'status'); z.setAttribute('aria-live', 'polite'); document.body.appendChild(z); }
  z.textContent = ''; setTimeout(() => { z.textContent = t; }, 30);
}
const tkbText = el => (el ? (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim() : '');
// de quin editor és un element (pel nom de la funció del seu onclick, o pel bloc que el conté)
function tkbEd(el) {
  const oc = el && el.getAttribute && (el.getAttribute('onclick') || ''), m = oc.match(/^(tb|rb|sg|m3p)[A-Z]/);
  if (m) return m[1];
  const b = el && el.closest && el.closest('.tb[id]'); if (!b) return null;
  return /^mb/.test(b.id) ? 'm3p' : (b.id.match(/^(tb|rb|sg)/) || [])[1] || null;
}

/* ---------- els blocs que són <div> clicables: focusables i amb Retorn ---------- */
function tkbFix(root) {
  (root || document).querySelectorAll('.tbh[onclick]:not(button):not([tabindex])').forEach(h => { h.tabIndex = 0; h.setAttribute('role', 'button'); });
  (root || document).querySelectorAll('.tb.sel > .tbh').forEach(h => h.setAttribute('aria-pressed', 'true'));
}
let tkbRaf = 0;
new MutationObserver(ms => { if (tkbRaf || !ms.some(m => m.addedNodes.length)) return; tkbRaf = requestAnimationFrame(() => { tkbRaf = 0; tkbFix(); }); }).observe(document.documentElement, { childList: true, subtree: true });

/* ---------- el focus no es perd quan es torna a pintar el programa ---------- */
function tkbKey() {
  const a = document.activeElement; if (!a || a === document.body || !a.closest('#app')) return null;
  const blk = a.closest('.tb[id]');
  return { oc: a.getAttribute('onclick'), id: a.id || null, head: a.classList.contains('tbh') && blk ? blk.id : null, pal: !!a.closest('.tpal, .m3pal') };
}
function tkbRestore(k) {
  if (!k || !TKB.kb) return;
  const a = document.activeElement; if (a && a !== document.body && document.contains(a)) return;   // no s'ha perdut
  const ok = el => el && !el.disabled && el.offsetParent !== null;
  let el = null;
  if (k.id) el = document.getElementById(k.id);
  if (!ok(el) && k.head) el = document.querySelector(`#${CSS.escape(k.head)} > .tbh`);
  if (!ok(el) && k.oc) el = [...document.querySelectorAll('#app [onclick]')].find(x => x.getAttribute('onclick') === k.oc && ok(x));
  if (!ok(el)) el = document.querySelector('#app .tb.sel > .tbh') || document.querySelector('#app .tslot.on') || document.querySelector('#app .tpal button:not([disabled]), #app .m3pal button:not([disabled])');
  if (ok(el)) el.focus({ preventScroll: true });
}

/* ---------- quan ja hi ha tots els editors: s'embolcallen pintar, afegir, esborrar i moure ---------- */
function tkbWrap() {
  for (const E of Object.values(TKB.eds)) {
    const wrap = (name, after) => { const f = window[name]; if (typeof f !== 'function' || f._tkb) return;
      const g = function (...a) { const k = tkbKey(), before = document.activeElement; const r = f.apply(this, a); tkbFix(); tkbRestore(k); if (after) after(before, a); return r; };
      g._tkb = true; window[name] = g; };
    wrap(E.draw);
    wrap(E.ins, before => { if (TKB.kb) tkbSay(tkbL('Afegit: ', 'Añadido: ') + tkbText(before)); });
    wrap(E.del, () => { if (TKB.kb) tkbSay(tkbL('Bloc esborrat', 'Bloque borrado')); });
    wrap(E.move, (b, a) => { if (TKB.kb) tkbSay(a[0] < 0 ? tkbL('Bloc pujat', 'Bloque subido') : tkbL('Bloc baixat', 'Bloque bajado')); });
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tkbWrap); else tkbWrap();

/* ---------- dreceres ---------- */
document.addEventListener('keydown', e => {
  const t = e.target; if (!t || !t.closest || !t.closest('#app')) return;
  if (t.matches('input, textarea, select, [contenteditable], .cm-editor *')) return;
  // Retorn o Espai sobre un bloc que no és un botó: el tria (com un clic)
  if ((e.key === 'Enter' || e.key === ' ') && t.matches('.tbh[role="button"]')) { e.preventDefault(); t.click(); return; }
  const ed = tkbEd(t); if (!ed) return;
  const E = TKB.eds[ed], S = E.S(); if (!S) return;
  const prog = t.closest('.tcode, .sprogw, #m3cd') || document;
  if (S.sel && (e.key === 'Delete' || e.key === 'Backspace') && !t.closest('.tpal, .m3pal')) { e.preventDefault(); if (typeof window[E.del] === 'function') window[E.del](); return; }
  if (S.sel && e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { e.preventDefault(); if (typeof window[E.move] === 'function') window[E.move](e.key === 'ArrowUp' ? -1 : 1); return; }
  if (S.sel && e.key === 'Escape') { e.preventDefault(); S.sel = null; if (typeof window[E.draw] === 'function') window[E.draw](); tkbSay(tkbL('Cap bloc triat', 'Ningún bloque elegido')); return; }
  // ↑ / ↓ sols: d'un element del programa (llocs, blocs, eines) al següent, sense haver de fer servir el tabulador
  if (!e.altKey && !e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && !t.closest('.tpal, .m3pal')) {
    const all = [...prog.querySelectorAll('.tslot, .tbh[onclick], .tbtools button')].filter(x => !x.disabled && x.offsetParent !== null);
    const i = all.indexOf(t); if (i < 0) return;
    const n = all[i + (e.key === 'ArrowUp' ? -1 : 1)]; if (n) { e.preventDefault(); n.focus(); }
  }
});
