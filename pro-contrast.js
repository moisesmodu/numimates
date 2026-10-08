/* ---------- Numi Pro (tema fosc): contrast automàtic dels textos dels dibuixos ----------
   Les escenes de teoria (svg.scene) i els dibuixos dels exercicis estan pensats per a fons blanc. theme-pro-extra.css
   enfosqueix les superfícies i aclareix la tinta, però hi ha textos damunt de peces de colors (etiquetes grogues,
   monedes, fitxes, barres…) que llavors queden clars sobre clar. Aquí, quan apareix un dibuix, es mira quina forma hi ha
   darrere de cada text (geometria, no l'estat de l'animació) i, si el contrast és baix, es tria tinta fosca o clara. */
(() => {
  if (typeof document === 'undefined' || !document.documentElement) return;
  const on = () => document.documentElement.dataset.v === 'pro';
  const DARK = '#2B1A38', LIGHT = '#EEE8F8', SEL = 'svg.scene, .l-vis svg, .opt svg, .lexbox svg, .lwrap svg';
  const col = c => { if (!c) return null; let m = c.match(/color\(srgb ([\d.e-]+) ([\d.e-]+) ([\d.e-]+)(?: \/ ([\d.]+))?\)/); if (m) return { r: m[1] * 255, g: m[2] * 255, b: m[3] * 255, a: m[4] == null ? 1 : +m[4] };
    m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
  const lum = c => { const f = x => { x /= 255; return x <= .03928 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4; }; return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b); };
  const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  const mix = (a, b) => ({ r: a.r * a.a + b.r * (1 - a.a), g: a.g * a.a + b.g * (1 - a.a), b: a.b * a.a + b.b * (1 - a.a), a: 1 });
  const D = col('rgb(43,26,56)'), Lt = col('rgb(238,232,248)');
  const bgOf = el => { const cs = []; for (let e = el; e && e.nodeType === 1; e = e.parentElement) { const c = col(getComputedStyle(e).backgroundColor); if (c && c.a > 0) { cs.push(c); if (c.a >= .99) break; } } let acc = { r: 22, g: 19, b: 32, a: 1 }; for (const c of cs.reverse()) acc = mix(c, acc); return acc; };
  // opacitat fixa (atributs), no la de les animacions
  const opa = (e, svg) => { let o = 1; for (let n = e; n && n !== svg; n = n.parentNode) { if (n.getAttribute) { const a = n.getAttribute('opacity'); if (a != null && a !== '') o *= +a; } } const fo = e.getAttribute('fill-opacity'); return o * (fo == null || fo === '' ? 1 : +fo); };
  // una forma que s'esvaeix (ae-out) només compta per als textos que s'esvaeixen amb ella
  const box = e => { try { const b = e.getBBox(); return b.width || b.height ? b : null; } catch (x) { return null; } };
  function fix(svg) {
    if (!on() || !svg.isConnected) return;
    const texts = svg.querySelectorAll('text'); if (!texts.length) return;
    const shapes = []; svg.querySelectorAll('rect,circle,ellipse,path,polygon').forEach(s => { const cs = getComputedStyle(s); if (cs.fill === 'none') return; const f = col(cs.fill); if (!f || f.a === 0) return; const b = box(s); if (!b) return; const o = opa(s, svg); if (o < .05) return; shapes.push({ s, b, f: { ...f, a: f.a * o }, out: s.closest('.ae-out, .a-out') }); });
    const base = bgOf(svg);
    texts.forEach(t => {
      if (t.dataset.pc) return; const tb = box(t); if (!tb) return; const cx = tb.x + tb.width / 2, cy = tb.y + tb.height / 2;
      let bg = base;
      for (const { s, b, f, out } of shapes) { if (!(s.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING)) continue; if (out && !out.contains(t)) continue; if (b.width < tb.width * .6 || b.height < tb.height * .5) continue; if (cx < b.x - 2 || cx > b.x + b.width + 2 || cy < b.y - 2 || cy > b.y + b.height + 2) continue; bg = mix(f, bg); }
      const fg = col(getComputedStyle(t).fill); if (!fg) return;
      const white = fg.r > 245 && fg.g > 245 && fg.b > 245;
      if (cr(fg, bg) >= (white ? 2.4 : 3)) return;
      t.style.fill = cr(D, bg) >= cr(Lt, bg) ? DARK : LIGHT; t.dataset.pc = '1';
    });
  }
  let q = new Set(), raf = 0;
  const run = () => { raf = 0; const l = [...q]; q.clear(); l.forEach(fix); };
  // les targetes amagades (encara sense caixa) es tornen a mirar quan apareixen a la pantalla
  const io = typeof IntersectionObserver === 'function' ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) fix(e.target); })) : null;
  const one = s => { q.add(s); if (io) io.observe(s); };
  const add = n => { if (n.nodeType !== 1) return; if (n.matches && n.matches(SEL)) one(n); if (n.querySelectorAll) n.querySelectorAll(SEL).forEach(one); };
  const mo = new MutationObserver(ms => { if (!on()) return; for (const m of ms) m.addedNodes.forEach(add); if (q.size && !raf) raf = requestAnimationFrame(() => requestAnimationFrame(run)); });
  const start = () => mo.observe(document.body, { childList: true, subtree: true });
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  // amb la lletra definitiva (Lexend) les caixes del text canvien una mica: es torna a mirar el que hi ha a la pantalla
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (on()) document.querySelectorAll(SEL).forEach(fix); });
})();
