/* ---------- Disseny «pro» ----------
   Personatges il·lustrats amb Higgsfield (3 expressions i un accessori a la vegada), un paisatge
   pintat a cada unitat, un camí que uneix les lliçons i el company triat que camina amb l'alumne.
   Les imatges van dins del mateix <svg> que feien servir els personatges dibuixats, així es
   mantenen les mides, animacions i decoracions de nivell. Per tornar a l'estil antic: ?pro=0 */
const PRO = (() => { try { const q = new URLSearchParams(location.search).get('pro'); if (q !== null) localStorage.setItem('numi-pro', q); return localStorage.getItem('numi-pro') !== '0'; } catch (e) { return true; } })();
const CH_IMG = ['numi', 'guida', 'vuit', 'tuga', 'flama', 'estel', 'cavaller'];
const ACC_IMG = ['llacet', 'gorra', 'ulleres', 'barret', 'corona', 'medalla', 'auriculars', 'coronafoc'];
const MAP_BG = ['olimp', 'costa', 'bosc', 'muntanya', 'nit', 'ciutat', 'castell', 'tardor'];
if (PRO) {
  document.body.classList.add('pro');
  const _charSVG = charSVG;
  charSVG = (id, mood = 'idle', acc, cls = '', lv = 1) => {
    if (!CH_IMG.includes(id)) return _charSVG(id, mood, acc, cls, lv);
    const a = acc && [acc.head, acc.eyes, acc.neck].find(k => ACC_IMG.includes(k));
    const f = a ? `${id}-${a}` : mood === 'happy' ? `${id}-happy` : mood === 'think' || mood === 'sad' ? `${id}-think` : id;
    return `<svg class="char chimg m-${mood} ${cls}" viewBox="0 0 120 120" aria-hidden="true">${lvlDeco(lv, false)}<g class="cb"><image href="img/chars/${f}.webp" x="4" y="4" width="112" height="112"/></g>${lvlDeco(lv, true)}</svg>`;
  };
  const _rh = renderHome;
  renderHome = function () { _rh(); proMap(); };
}
function proMap() {
  $$('.unit').forEach((sec, ui) => { const p = sec.querySelector('.path'); if (p) p.insertAdjacentHTML('afterbegin', `<div class="pbg" style="background-image:url(img/bg/${MAP_BG[(ui + P.course * 3) % MAP_BG.length]}.jpg)"></div>`); });
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
