/* ===== Numi Tech · acabat de les animacions (TANI) =====
   Les 200+ animacions són SVG fets a mà amb colors plans. Quan n'entra una a la pàgina (app, presentacions, fitxes):
   · els textos que no hi caben dins la seva targeta (o dins el dibuix) s'estrenyen o es fan petits: res no surt de la vora,
     sigui en català o en castellà;
   · les targetes i peces de color tenen relleu (ombra suau i una mica de brillantor a dalt) i els cercles de color, un reflex.
   No canvia cap animació: només hi afegeix capes. */
const TPOL = {
  defs: '<defs class="tpold"><linearGradient id="tpGl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#fff" stop-opacity=".05"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".06"/></linearGradient>'
    + '<radialGradient id="tpCg" cx=".35" cy=".3" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'
    + '<filter id="tpSh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="2.6" flood-color="#14204A" flood-opacity=".18"/></filter></defs>',
  skip: el => !!el.closest('defs,clipPath,mask,pattern,symbol,marker,.tpold'),
  solid: f => f && f !== 'none' && !/^url\(/.test(f) && f !== 'transparent',
  light: f => { const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(f || ''); if (!m) return f === 'white'; let h = m[1]; if (h.length === 3) h = h.replace(/./g, c => c + c); const n = parseInt(h, 16); return ((n >> 16) * .3 + (n >> 8 & 255) * .59 + (n & 255) * .11) > 236; },
  num: (el, a) => parseFloat(el.getAttribute(a) || '0'),
  // el text que no hi cap s'estreny (fins a un 18%) i, si cal més, es fa més petit
  fitText(svg) {
    const vb = (svg.getAttribute('viewBox') || '0 0 320 214').split(/\s+/).map(Number), VW = vb[2] || 320;
    svg.querySelectorAll('text').forEach(t => {
      if (TPOL.skip(t) || t.hasAttribute('textLength') || t.closest('[transform*="rotate"]')) return;
      const x = TPOL.num(t, 'x'); if (!t.hasAttribute('x')) return;
      const an = t.getAttribute('text-anchor') || 'start';
      // la targeta on és el text: un rect germà que el conté
      const sib = [...t.parentNode.children].filter(e => e.tagName === 'rect' && !TPOL.skip(e)), y = TPOL.num(t, 'y');
      const r = sib.find(e => { const rx = TPOL.num(e, 'x'), ry = TPOL.num(e, 'y'), rw = TPOL.num(e, 'width'), rh = TPOL.num(e, 'height'); return rw > 24 && x >= rx && x <= rx + rw && y >= ry && y <= ry + rh + 4; });
      let L0 = 0, R0 = VW; if (r) { L0 = TPOL.num(r, 'x') + 6; R0 = TPOL.num(r, 'x') + TPOL.num(r, 'width') - 6; }
      else { const tr = t.parentNode.closest && t.closest('[transform]'); if (tr) return; L0 = 2; R0 = VW - 2; }   // fora de les targetes, només si està en coordenades de l'SVG
      const avail = an === 'middle' ? 2 * Math.min(x - L0, R0 - x) : an === 'end' ? x - L0 : R0 - x;
      let len = 0; try { len = t.getComputedTextLength(); } catch (e) { return; }
      if (!len || avail < 12 || len <= avail + .5) return;
      const k = len / avail;
      if (k > 1.18) { const fs = parseFloat(getComputedStyle(t).fontSize) || 15; t.style.fontSize = (fs / Math.min(k / 1.1, 1.6)).toFixed(2) + 'px'; try { len = t.getComputedTextLength(); } catch (e) { } }
      if (len > avail + .5) { t.setAttribute('textLength', avail.toFixed(1)); t.setAttribute('lengthAdjust', 'spacingAndGlyphs'); }
    });
  },
  // cada color pla passa a un degradat del mateix to (més clar a dalt, més fosc a baix): volum de «plastilina»
  hex(f) { const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(f || ''); if (!m) return null; let h = m[1]; if (h.length === 3) h = h.replace(/./g, c => c + c); return h.toLowerCase(); },
  mix(h, t, k) { const a = parseInt(h, 16), b = parseInt(t, 16), c = s => Math.round(((a >> s) & 255) * (1 - k) + ((b >> s) & 255) * k); return '#' + [16, 8, 0].map(s => c(s).toString(16).padStart(2, '0')).join(''); },
  shade(svg) {
    const made = new Set(), defs = svg.querySelector('.tpold');
    svg.querySelectorAll('rect,circle,ellipse,path,polygon').forEach(e => {
      if (TPOL.skip(e) || e.hasAttribute('style') && /fill/.test(e.getAttribute('style'))) return;
      const h = TPOL.hex(e.getAttribute('fill')); if (!h || TPOL.light('#' + h)) return;
      const n = parseInt(h, 16), r = n >> 16, g = n >> 8 & 255, b = n & 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b);
      if (mx - mn < 18 && mx < 60) return;   // negres i grisos foscos (línies, ulls): plans
      if (!made.has(h)) { made.add(h); defs.insertAdjacentHTML('beforeend', `<linearGradient id="tpg${h}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${TPOL.mix(h, 'ffffff', .26)}"/><stop offset=".55" stop-color="#${h}"/><stop offset="1" stop-color="${TPOL.mix(h, '0b1230', .16)}"/></linearGradient>`); }
      e.setAttribute('fill', `url(#tpg${h})`); e.dataset.tpf = h;
    });
  },
  // relleu: ombra suau i brillantor a les peces de color; reflex als cercles
  depth(svg) {
    let nSh = 0;
    svg.querySelectorAll('rect').forEach(r => {
      if (TPOL.skip(r) || r.classList.length || r.hasAttribute('opacity') || r.hasAttribute('filter') && !/bwSh/.test(r.getAttribute('filter'))) return;
      const w = TPOL.num(r, 'width'), h = TPOL.num(r, 'height'), rx = TPOL.num(r, 'rx'), f = r.getAttribute('fill');
      if (w < 22 || h < 16 || w > 300 || h > 200 || rx < 4 || !TPOL.solid(f)) return;
      if (/bwSh/.test(r.getAttribute('filter') || '') || nSh < 10 && w * h > 500 && w * h < 30000) { r.setAttribute('filter', 'url(#tpSh)'); nSh++; }
      if (TPOL.light(f)) return;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      ['x', 'y', 'width', 'height', 'rx', 'ry', 'transform'].forEach(a => r.hasAttribute(a) && g.setAttribute(a, r.getAttribute(a)));
      g.setAttribute('fill', 'url(#tpGl)'); g.setAttribute('class', 'tpgl'); g.setAttribute('pointer-events', 'none'); r.after(g);
    });
    svg.querySelectorAll('circle').forEach(c => {
      if (TPOL.skip(c) || c.classList.length || c.hasAttribute('opacity')) return;
      const rr = TPOL.num(c, 'r'), f = c.getAttribute('fill');
      if (rr < 7 || rr > 46 || !TPOL.solid(f) || TPOL.light(f)) return;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ['cx', 'cy', 'r', 'transform'].forEach(a => c.hasAttribute(a) && g.setAttribute(a, c.getAttribute(a)));
      g.setAttribute('fill', 'url(#tpCg)'); g.setAttribute('class', 'tpgl'); g.setAttribute('pointer-events', 'none'); c.after(g);
    });
  },
  run(svg) {
    if (svg.__tpol) return; svg.__tpol = 1;
    try { svg.insertAdjacentHTML('afterbegin', TPOL.defs); TPOL.depth(svg); TPOL.shade(svg); } catch (e) { }
    // el text es mesura quan l'SVG ja té mida
    requestAnimationFrame(() => { try { TPOL.fitText(svg); } catch (e) { } });
  },
  scan(root) { (root.matches && root.matches('svg.tani') ? [root] : [...(root.querySelectorAll ? root.querySelectorAll('svg.tani') : [])]).forEach(TPOL.run); }
};
if (typeof MutationObserver === 'function' && typeof document !== 'undefined') {
  const start = () => { TPOL.scan(document.body); new MutationObserver(ms => { for (const m of ms) for (const n of m.addedNodes) if (n.nodeType === 1) TPOL.scan(n); }).observe(document.body, { childList: true, subtree: true }); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
}
