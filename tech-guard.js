/* Numi Tech · material del professor: les guies i el solucionari es demanen al servidor amb el testimoni del docent
   (el del panell). Sense sessió, no es mostren. En local (proves) es llegeixen directament els fitxers. */
const TGUARD = {
  tok: () => { try { return sessionStorage.getItem('dt') || localStorage.getItem('numi-dt') || ''; } catch (e) { return ''; } },
  local: /^(localhost|127\.0\.0\.1)$/.test(location.hostname),
  // carrega els fitxers en ordre i executa'ls com a scripts; torna true si tots han arribat
  async load(list) {
    const t = TGUARD.tok();
    for (const f of list) {
      let code = null;
      if (t) { const r = await fetch('/api/guia?f=' + f, { headers: { 'x-docent': t } }).catch(() => null); if (r && r.ok) code = await r.text(); else if (r && r.status === 401) { try { localStorage.removeItem('numi-dt'); } catch (e) { } } }
      if (code == null && TGUARD.local) { const fn = f === 'sol' ? 'tech-sol.js' : `tech-guide-${f}.js`, r = await fetch(fn).catch(() => null); if (r && r.ok) code = await r.text(); }
      if (code == null) return false;
      const s = document.createElement('script'); s.textContent = code.replace(/^const (TGUIDE|TSOL)\b/m, 'var $1'); document.head.appendChild(s);
    }
    return true;
  },
  // pàgina sense permís: avís i enllaç al panell
  deny(el) { (el || document.body).innerHTML = `<div style="max-width:460px;margin:12vh auto;padding:28px;border-radius:22px;background:#fff;color:#14204A;font:600 17px/1.5 Lexend,system-ui,sans-serif;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25)"><b style="font-size:22px">${typeof L === 'function' ? L('Material del professor', 'Material del profesor') : 'Material del professor'}</b><p>${typeof L === 'function' ? L('Per veure-ho, entra al panell del professor i obre-ho des de «Material Tech».', 'Para verlo, entra en el panel del profesor y ábrelo desde «Material Tech».') : 'Entra al panell del professor.'}</p><a href="profe.html#/material" style="display:inline-block;margin-top:6px;padding:12px 20px;border-radius:14px;background:#2F5BEA;color:#fff;text-decoration:none;font-weight:800">${typeof L === 'function' ? L('Obre el panell', 'Abre el panel') : 'Obre el panell'}</a></div>`; },
  // l'script següent (present.js, print.js…) només s'executa quan el material ja hi és
  after(src) { const s = document.createElement('script'); s.src = src; document.body.appendChild(s); }
};
