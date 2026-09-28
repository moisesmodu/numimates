/* ---------- Disseny adaptable: tauleta i ordinador ----------
   Al mòbil no canvia res. A la pantalla principal separem els quadres (temporada, missions, ratxa…)
   del mapa perquè a tauleta i ordinador es puguin posar al costat (el CSS decideix com: vegeu
   «Tauleta i ordinador» a style.css). El camí del mapa es torna a dibuixar quan canvia l'amplada. */
(function () {
  const _rh = renderHome;
  renderHome = function () { _rh.apply(this, arguments); homeCols(); };
  function homeCols() {
    const pg = document.querySelector('#app > .page');
    if (!pg || pg.querySelector(':scope > .hside')) return;
    const kids = [...pg.children], first = kids.findIndex(el => el.matches('.unit'));
    if (first < 0) return;
    const side = document.createElement('div'), main = document.createElement('div');
    side.className = 'hside'; main.className = 'hmain';
    kids.forEach((el, i) => { if (el.matches('.topbar')) return; (i < first ? side : main).append(el); });
    pg.classList.add('home'); pg.append(side, main);
    lastW = 0; redrawRoad();
  }
  // el camí i el terreny es calculen amb l'amplada del mapa: si canvia, es tornen a posar
  let lastW = 0;
  function redrawRoad() {
    if (typeof proMap !== 'function' || !PRO) return;
    const p = document.querySelector('.unit .path'); if (!p) return;
    const w = p.clientWidth; if (w === lastW && document.querySelector('.road')) return;
    lastW = w;
    document.querySelectorAll('.road, .terrain, .mate').forEach(el => el.remove());
    proMap();
  }
  let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { if (VIEW === 'home') redrawRoad(); }, 150); });
  if (VIEW === 'home') { lastW = 0; homeCols(); }
})();
