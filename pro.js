/* ---------- Mostra del disseny «pro» (només amb ?pro=1; no afecta ningú més) ----------
   Personatges il·lustrats amb Higgsfield, fons pintat al mapa, camí que uneix les lliçons
   i el company triat caminant al costat de la lliçó que toca. */
const PRO = (() => { try { const q = new URLSearchParams(location.search).get('pro'); if (q !== null) localStorage.setItem('numi-pro', q); return localStorage.getItem('numi-pro') === '1'; } catch (e) { return false; } })();
const CH_IMG = ['numi', 'guida', 'cavaller'];
if (PRO) {
  document.body.classList.add('pro');
  const _charSVG = charSVG;
  charSVG = (id, mood = 'idle', acc, cls = '', lv = 1) => CH_IMG.includes(id) ? `<span class="chimg m-${mood} ${cls}"><img src="img/chars/${id}.png" alt="" draggable="false">${lv >= 3 ? '<i class="chstar">★</i>' : ''}</span>` : _charSVG(id, mood, acc, cls, lv);
  const _rh = renderHome;
  renderHome = function () { _rh(); proMap(); };
}
function proMap() {
  $$('.unit .path').forEach(path => {
    const nodes = [...path.querySelectorAll('.nwrap')];
    if (nodes.length < 2) return;
    const W = path.clientWidth, pts = nodes.map(n => { const b = n.querySelector('.node'), x = parseFloat(n.style.getPropertyValue('--x')) || 0; return [W / 2 + x, n.offsetTop + b.offsetTop + b.offsetHeight / 2]; });
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], my = (y0 + y1) / 2; d += ` C${x0} ${my} ${x1} ${my} ${x1} ${y1}`; }
    path.insertAdjacentHTML('afterbegin', `<svg class="road" width="${W}" height="${path.scrollHeight}"><path d="${d}" class="rb"/><path d="${d}" class="rt"/></svg>`);
  });
  // el company triat camina al costat de la lliçó que toca
  const cur = $('.node.cur');
  if (cur) { const w = cur.closest('.nwrap'), x = parseFloat(w.style.getPropertyValue('--x')) || 0; w.insertAdjacentHTML('beforeend', `<div class="mate ${x > 0 ? 'l' : 'r'}">${meC('happy')}</div>`); }
}
