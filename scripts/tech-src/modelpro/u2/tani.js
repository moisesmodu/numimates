/* Tech 3D · Nivell 2 · unitat 2 «Transformacions» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p21*: moure (el vector, a qui afecta un mou, moviments que se sumen) · p22*: girar (els tres eixos i el sentit, girar al
   voltant de l'origen) · p23*: l'ordre (de dins cap a fora, dos ordres i dos llocs) · p24*: el molí (peces i fitxa tècnica).
   Vistes de dalt amb +y amunt: un gir positiu (sentit contrari a les agulles del rellotge) és un rotate negatiu de l'SVG. */
Object.assign(TANI, (() => {
  const MONO = 'font-family:ui-monospace,Menlo,Consolas,monospace';
  const W = (ca, es) => L(ca, es);
  // vista de dalt: origen (ox, oy), s px per mm, +y amunt
  const TOP = (ox, oy, s) => (x, y) => [ox + x * s, oy - y * s];
  const grid = (x0, y0, w, h, step, col = '#DCE4FA') => { let g = ''; for (let x = x0; x <= x0 + w + .1; x += step) g += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + h}" stroke="${col}"/>`; for (let y = y0; y <= y0 + h + .1; y += step) g += `<line x1="${x0}" y1="${y}" x2="${x0 + w}" y2="${y}" stroke="${col}"/>`; return g; };
  const ax2 = (ox, oy, lx, ly, nx = 'x', ny = 'y', cx = '#E8453C', cy = '#2FB36D') => `<line x1="${ox}" y1="${oy}" x2="${ox + lx}" y2="${oy}" stroke="${cx}" stroke-width="2.4" stroke-linecap="round"/><text x="${ox + lx + 4}" y="${oy + 5}" class="tat s" style="fill:${cx}">${nx}</text><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - ly}" stroke="${cy}" stroke-width="2.4" stroke-linecap="round"/><text x="${ox - 4}" y="${oy - ly - 5}" text-anchor="middle" class="tat s" style="fill:${cy}">${ny}</text>`;
  const odot = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>`;
  const chip = (x, y, w, txt, t, c = '#14204A', cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${w}" height="24" rx="12" fill="${c}"/><text x="${x + w / 2}" y="${y + 16.5}" text-anchor="middle" class="tat s w" style="${MONO}">${txt}</text></g>`;
  const arrow = (x1, y1, x2, y2, c, w = 3) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 9, p1 = [x2 - h * Math.cos(a - .45), y2 - h * Math.sin(a - .45)], p2 = [x2 - h * Math.cos(a + .45), y2 - h * Math.sin(a + .45)];
    return `<line x1="${x1}" y1="${y1}" x2="${(x2 - 6 * Math.cos(a)).toFixed(1)}" y2="${(y2 - 6 * Math.sin(a)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" fill="${c}"/>`; };
  // animació SMIL en bucle de 5,5 s (la mateixa durada que les classes .ta)
  const anim = (type, values, keyTimes) => `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${keyTimes}" dur="5.5s" repeatCount="indefinite"/>`;
  const kw = k => ({ mou: W('mou', 'mueve'), gira: 'gira', cub: W('cub', 'cubo'), cil: W('cilindre', 'cilindro'), esf: 'esfera', con: W('con', 'cono'), escala: 'escala' })[k];
  const panel = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>`;
  return {
    /* ---------- p2-1 · Moure ---------- */
    // mou(30, 20, 0) és una fletxa: cada punt de la peça es desplaça igual (vista de dalt)
    p21vec() {
      const P = TOP(70, 160, 3.2), [ox, oy] = P(0, 0), [tx, ty] = P(30, 20), sq = 10 * 3.2;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(10, 10, 210, 180)}${grid(22, 22, 186, 160, 16)}${ax2(ox, oy, 132, 128)}
        <rect x="${ox}" y="${oy - sq}" width="${sq}" height="${sq}" fill="none" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 3"/>
        <g ${tA(.6, 'ta-fade')}><line x1="${ox + sq / 2}" y1="${oy - sq / 2}" x2="${tx + sq / 2}" y2="${oy - sq / 2}" stroke="#E8453C" stroke-width="2.4" stroke-dasharray="5 4"/><text x="${(ox + tx) / 2 + sq / 2}" y="${oy - sq / 2 + 16}" text-anchor="middle" class="tat s" style="fill:#C2362D">x = 30</text></g>
        <g ${tA(1.2, 'ta-fade')}><line x1="${tx + sq / 2}" y1="${oy - sq / 2}" x2="${tx + sq / 2}" y2="${ty - sq / 2}" stroke="#2FB36D" stroke-width="2.4" stroke-dasharray="5 4"/><text x="${tx + sq / 2 + 8}" y="${(oy + ty) / 2 - sq / 2 + 4}" class="tat s" style="fill:#1F8A52">y = 20</text></g>
        <g ${tA(1.8, 'ta-fade')}>${arrow(ox + sq / 2, oy - sq / 2, tx + sq / 2, ty - sq / 2, '#3D7BF4')}</g>
        <g>${anim('translate', `0 0;0 0;${tx - ox} ${ty - oy};${tx - ox} ${ty - oy};0 0`, '0;.4;.62;.95;1')}<rect x="${ox}" y="${oy - sq}" width="${sq}" height="${sq}" rx="3" fill="#EC5FA8" opacity=".92"/></g>
        ${odot(ox, oy)}
        ${chip(228, 30, 84, `${kw('mou')}(30, 20, 0)`, .3, '#3D7BF4')}
        <g ${tA(2.6, 'ta-in')}><text x="270" y="88" text-anchor="middle" class="tat s">${W('la peça no', 'la pieza no')}</text><text x="270" y="106" text-anchor="middle" class="tat s">${W('gira ni creix:', 'gira ni crece:')}</text><text x="270" y="124" text-anchor="middle" class="tat s">${W('només es', 'solo se')}</text><text x="270" y="142" text-anchor="middle" class="tat b">${W('desplaça', 'desplaza')}</text></g>`);
    },
    // a qui afecta un mou: la instrucció de la mateixa línia o el bloc { } que el segueix
    p21scope() {
      const ln = (y, txt, col = '#E8EEFF') => `<text x="30" y="${y}" class="tat s" style="${MONO};fill:${col};font-size:13px">${txt}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="14" width="196" height="172" rx="14" fill="#14204A"/>
        ${ln(42, `<tspan style="fill:#9DB8FF">${kw('mou')}(0, 0, 20)</tspan> ${kw('cub')}(10)`)}${ln(70, `${kw('cub')}(10)`)}${ln(104, `<tspan style="fill:#9DB8FF">${kw('mou')}(30, 0, 0)</tspan> {`)}${ln(126, `  ${kw('cub')}(10)`)}${ln(148, '  esfera(10)')}${ln(170, '}')}
        <g ${tA(.4, 'ta-in')}><rect x="126" y="27" width="64" height="22" rx="7" fill="none" stroke="#FFC531" stroke-width="2.4"/><path d="M212 38 H226" stroke="#FFC531" stroke-width="2.4"/><rect x="226" y="26" width="84" height="24" rx="12" fill="#FFC531"/><text x="268" y="42.5" text-anchor="middle" class="tat s">${W('es mou', 'se mueve')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="226" y="58" width="84" height="24" rx="12" fill="#fff" stroke="#9AA6CC" stroke-width="2"/><text x="268" y="74.5" text-anchor="middle" class="tat s" style="fill:#56628A">${W('no es mou', 'no se mueve')}</text><path d="M86 66 H226" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 4"/></g>
        <g ${tA(2.4, 'ta-in')}><path d="M24 112 h-4 v52 h4" fill="none" stroke="#FFC531" stroke-width="2.6"/><rect x="40" y="112" width="96" height="44" rx="8" fill="none" stroke="#FFC531" stroke-width="2.4"/><path d="M136 134 H226" stroke="#FFC531" stroke-width="2.4"/><rect x="226" y="114" width="84" height="40" rx="14" fill="#FFC531"/><text x="268" y="130" text-anchor="middle" class="tat s">${W('es mou tot', 'se mueve todo')}</text><text x="268" y="147" text-anchor="middle" class="tat s">${W('el bloc', 'el bloque')}</text></g>`);
    },
    // dos mou seguits se sumen (vista de dalt): primer 20 en x, després 30 en y → mou(20, 30, 0)
    p21chain() {
      const P = TOP(60, 168, 4), [ox, oy] = P(0, 0), [ax, ay] = P(20, 0), [bx, by] = P(20, 30);
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(10, 10, 170, 180)}${grid(20, 24, 152, 160, 20)}${ax2(ox, oy, 108, 140)}${odot(ox, oy)}
        <g ${tA(.3, 'ta-fade')}>${arrow(ox, oy, ax, ay, '#E8453C', 4)}</g><g ${tA(1.3, 'ta-fade')}>${arrow(ax, ay, bx, by, '#2FB36D', 4)}</g>
        <g ${tA(2.4, 'ta-fade')}><line x1="${ox}" y1="${oy}" x2="${bx}" y2="${by}" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 5"/><circle cx="${bx}" cy="${by}" r="7" fill="#3D7BF4"/></g>
        ${chip(190, 30, 120, `${kw('mou')}(20, 0, 0)`, .3, '#E8453C')}${chip(190, 64, 120, `${kw('mou')}(0, 30, 0)`, 1.3, '#2FB36D')}
        <g ${tA(2.4, 'ta-in')}><text x="250" y="116" text-anchor="middle" class="tat b">=</text></g>${chip(190, 128, 120, `${kw('mou')}(20, 30, 0)`, 2.6, '#3D7BF4')}
        <g ${tA(3.4, 'ta-in')}><text x="250" y="178" text-anchor="middle" class="tat s">${W('es sumen x amb x i y amb y', 'se suman x con x e y con y')}</text></g>`);
    },
    /* ---------- p2-2 · Girar ---------- */
    // els tres girs: positiu = contrari a les agulles del rellotge, mirant des de la punta de l'eix
    p22axes() {
      const pn = (cx, lab, ca, cb, na, nb, axc, axn) => `${panel(cx - 49, 16, 98, 150)}<line x1="${cx - 36}" y1="96" x2="${cx + 38}" y2="96" stroke="${ca}" stroke-width="2"/><text x="${cx + 40}" y="100" class="tat s" style="fill:${ca};font-size:11px">${na}</text><line x1="${cx}" y1="134" x2="${cx}" y2="56" stroke="${cb}" stroke-width="2"/><text x="${cx}" y="52" text-anchor="middle" class="tat s" style="fill:${cb};font-size:11px">${nb}</text>
        <circle cx="${cx}" cy="96" r="8" fill="#fff" stroke="${axc}" stroke-width="2.6"/><circle cx="${cx}" cy="96" r="2.6" fill="${axc}"/>
        <g>${anim('rotate', `0 ${cx} 96;0 ${cx} 96;-90 ${cx} 96;-90 ${cx} 96;0 ${cx} 96`, '0;.25;.55;.92;1')}<rect x="${cx + 8}" y="91" width="32" height="10" rx="3" fill="#EC5FA8"/></g>
        <path d="M${cx + 26} ${96 - 30} A30 30 0 0 0 ${cx - 30} ${96 - 26}" fill="none" stroke="#14204A" stroke-width="2" stroke-dasharray="4 3"/><polygon points="${cx - 30},${96 - 26} ${cx - 22},${96 - 34} ${cx - 34},${96 - 36}" fill="#14204A"/>
        <text x="${cx}" y="34" text-anchor="middle" class="tat s" style="${MONO};font-size:12px">${lab}</text><text x="${cx}" y="156" text-anchor="middle" class="tat s" style="fill:${axc};font-size:11.5px">${W('eix', 'eje')} ${axn} ${W('cap a tu', 'hacia ti')}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${pn(58, 'gira(0, 0, 90)', '#E8453C', '#2FB36D', 'x', 'y', '#3D7BF4', 'z')}${pn(160, 'gira(90, 0, 0)', '#2FB36D', '#3D7BF4', 'y', 'z', '#E8453C', 'x')}${pn(262, 'gira(0, 90, 0)', '#3D7BF4', '#E8453C', 'z', 'x', '#2FB36D', 'y')}
        <g ${tA(1.5, 'ta-in')}><text x="160" y="186" text-anchor="middle" class="tat s">${W('angle positiu: contrari a les agulles del rellotge', 'ángulo positivo: contrario a las agujas del reloj')}</text></g>`);
    },
    // gira fa girar al voltant de l'ORIGEN (la peça fa un arc), no del seu centre com al Nivell 1 (vista de dalt)
    p22orbit() {
      const half = (x0, title, sub, cx, cy, col) => `${panel(x0, 12, 146, 176)}<line x1="${x0 + 12}" y1="120" x2="${x0 + 134}" y2="120" stroke="#E8453C" stroke-width="1.6" opacity=".5"/><line x1="${x0 + 40}" y1="180" x2="${x0 + 40}" y2="40" stroke="#2FB36D" stroke-width="1.6" opacity=".5"/>
        <rect x="${x0 + 64}" y="112" width="44" height="16" rx="3" fill="none" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 3"/>
        <g>${anim('rotate', `0 ${cx} ${cy};0 ${cx} ${cy};-90 ${cx} ${cy};-90 ${cx} ${cy};0 ${cx} ${cy}`, '0;.3;.62;.94;1')}<rect x="${x0 + 64}" y="112" width="44" height="16" rx="3" fill="${col}"/></g>
        <circle cx="${cx}" cy="${cy}" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>
        <text x="${x0 + 73}" y="32" text-anchor="middle" class="tat s" style="${MONO};font-size:12px">${title}</text><text x="${x0 + 73}" y="176" text-anchor="middle" class="tat s" style="font-size:12px">${sub}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${half(8, 'gira(0, 0, 90)', W("al voltant de l'origen", 'alrededor del origen'), 48, 120, '#EC5FA8')}
        <path d="M ${8 + 108} 120 A 68 68 0 0 0 48 ${120 - 68}" fill="none" stroke="#EC5FA8" stroke-width="2.4" stroke-dasharray="5 5" ${tA(1.6, 'ta-fade')}/>
        ${half(166, W('Nivell 1', 'Nivel 1'), W('sobre el seu centre', 'sobre su centro'), 166 + 86, 120, '#9AA6CC')}
        <g ${tA(2.6)}><rect x="108" y="44" width="42" height="22" rx="11" fill="#1FA463"/><text x="129" y="59.5" text-anchor="middle" class="tat s w">${W('ara', 'ahora')}</text></g>`);
    },
    /* ---------- p2-3 · L'ordre importa ---------- */
    // de dins cap a fora: primer s'aplica la transformació més a prop de la forma
    p23inout() {
      const box = (x, w, txt, c, t) => `<g ${tA(t)}><rect x="${x}" y="70" width="${w}" height="34" rx="10" fill="${c}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="92" text-anchor="middle" class="tat s w" style="${MONO};font-size:12.5px">${txt}</text></g>`;
      const num = (x, n, t) => `<g ${tA(t)}><circle cx="${x}" cy="48" r="13" fill="#FFC531" stroke="#14204A" stroke-width="2"/><text x="${x}" y="53" text-anchor="middle" class="tat b">${n}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${box(14, 104, 'gira(0, 0, 90)', '#8B5CF6', .1)}${box(124, 104, `${kw('mou')}(30, 0, 0)`, '#3D7BF4', .1)}${box(234, 72, `${kw('cub')}(10)`, '#D63F8C', .1)}
        ${num(270, 1, .6)}${num(176, 2, 1.4)}${num(66, 3, 2.2)}
        <g ${tA(2.8, 'ta-fade')}>${arrow(290, 124, 30, 124, '#14204A', 3)}</g>
        <g ${tA(3.1, 'ta-in')}><text x="160" y="150" text-anchor="middle" class="tat b">${W('es llegeix de dins cap a fora', 'se lee de dentro hacia fuera')}</text></g>
        <g ${tA(3.7, 'ta-in')}><text x="160" y="176" text-anchor="middle" class="tat s">${W('1 fes el cub · 2 mou-lo · 3 gira-ho tot', '1 haz el cubo · 2 muévelo · 3 gíralo todo')}</text></g>`);
    },
    // dos ordres, dos llocs (vista de dalt): moure i després girar fa un arc; girar i després moure no
    p23paths() {
      const pane = (x0, a, b, outer, inner, col) => { const ox = x0 + 34, oy = 150, s = 2.5;
        return `${panel(x0, 12, 146, 176)}<line x1="${x0 + 10}" y1="${oy}" x2="${x0 + 136}" y2="${oy}" stroke="#E8453C" stroke-width="1.6" opacity=".5"/><line x1="${ox}" y1="182" x2="${ox}" y2="50" stroke="#2FB36D" stroke-width="1.6" opacity=".5"/>
          <text x="${x0 + 73}" y="30" text-anchor="middle" class="tat s" style="${MONO};font-size:11.5px">${a}</text><text x="${x0 + 73}" y="45" text-anchor="middle" class="tat s" style="${MONO};font-size:11.5px">${b}</text>
          <g>${outer(ox, oy, s)}<g>${inner(ox, oy, s)}<rect x="${ox}" y="${oy - 10 * s}" width="${10 * s}" height="${10 * s}" rx="3" fill="${col}"/></g></g>${odot(ox, oy)}`; };
      const rot = (ox, oy, kt) => anim('rotate', `0 ${ox} ${oy};0 ${ox} ${oy};-90 ${ox} ${oy};-90 ${ox} ${oy};0 ${ox} ${oy}`, kt);
      const mv = (s, kt) => anim('translate', `0 0;0 0;${30 * s} 0;${30 * s} 0;0 0`, kt);
      const early = '0;.12;.38;.94;1', late = '0;.46;.72;.94;1';
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${pane(8, `gira(0, 0, 90)`, `${kw('mou')}(30, 0, 0) ${kw('cub')}`, (ox, oy) => rot(ox, oy, late), (ox, oy, s) => mv(s, early), '#3D7BF4')}
        ${pane(166, `${kw('mou')}(30, 0, 0)`, `gira(0, 0, 90) ${kw('cub')}`, (ox, oy, s) => mv(s, late), (ox, oy) => rot(ox, oy, early), '#F08A24')}
        <g ${tA(3.6, 'ta-in')}><rect x="106" y="160" width="108" height="26" rx="13" fill="#14204A"/><text x="160" y="177.5" text-anchor="middle" class="tat s w">${W('llocs diferents!', '¡sitios distintos!')}</text></g>`);
    },
    /* ---------- p2-4 · Projecte: el molí ---------- */
    // el molí desmuntat: cada peça i la transformació que necessita (vista de cara), i el muntatge
    p24parts() {
      const fly = (dx, dy) => anim('translate', `${dx} ${dy};${dx} ${dy};0 0;0 0;${dx} ${dy}`, '0;.35;.6;.94;1');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="176" width="170" height="8" rx="3" fill="#C9D4F2"/>
        <polygon points="74,176 124,176 116,92 82,92" fill="#C98A4B"/><polygon points="99,176 124,176 116,92 99,92" fill="#A86A33"/><rect x="92" y="150" width="14" height="26" rx="6" fill="#6B4423"/>
        <g>${fly(0, -26)}<polygon points="78,94 120,94 99,64" fill="#D63F8C"/><polygon points="99,94 120,94 99,64" fill="#B02F72"/></g>
        <g>${fly(40, 0)}<rect x="94" y="100" width="10" height="10" rx="3" fill="#9AA6CC"/></g>
        <g>${fly(70, -10)}<g transform="rotate(45 99 105)"><rect x="49" y="100" width="100" height="10" rx="2" fill="#F3F3EE" stroke="#9AA6CC" stroke-width="1.6"/></g><g transform="rotate(-45 99 105)"><rect x="49" y="100" width="100" height="10" rx="2" fill="#F3F3EE" stroke="#9AA6CC" stroke-width="1.6"/></g><circle cx="99" cy="105" r="6" fill="#9AA6CC"/></g>
        ${[['con', 34, '#C98A4B', .3], [`${kw('mou')} · con`, 66, '#D63F8C', .9], [`gira(90, 0, 0) · ${kw('cil')}`, 98, '#9AA6CC', 1.5], ['gira(0, ±45, 0)', 130, '#5B6BA6', 2.1]].map(([t, y, c, d], i) => `<g ${tA(d, 'ta-in')}><rect x="192" y="${y - 16}" width="118" height="26" rx="13" fill="${c}"/><text x="251" y="${y + 1}" text-anchor="middle" class="tat s w" style="${MONO};font-size:11px">${t}</text></g>`).join('')}
        <g ${tA(3.5, 'ta-in')}><text x="251" y="176" text-anchor="middle" class="tat s">${W('torre · teulada · eix · aspes', 'torre · tejado · eje · aspas')}</text></g>`);
    },
    // la fitxa tècnica del molí de la cooperativa
    p24spec() {
      const R = [[W('Torre', 'Torre'), `${kw('con')}(40, 70, 28)`], [W('Teulada', 'Tejado'), `${kw('con')}(34, 22)`], [W('Eix', 'Eje'), `${kw('cil')}(8, 12)`], [W('Aspes', 'Aspas'), `2 × ${kw('cub')}(80, 3, 8)`], [W('Caixa màxima', 'Caja máxima'), '100 × 100 × 120']];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="12" width="292" height="176" rx="16" fill="#fff" filter="url(#bwSh)"/>
        <rect x="14" y="12" width="292" height="34" rx="16" fill="#14204A"/><rect x="14" y="30" width="292" height="16" fill="#14204A"/><text x="30" y="35" class="tat s w">${W('Fitxa tècnica · El Molí Vell', 'Ficha técnica · El Molino Viejo')}</text>
        ${R.map(([a, b], i) => `<g ${tA(.3 + i * .6, 'ta-in')}><text x="30" y="${74 + i * 26}" class="tat s">${a}</text><text x="292" y="${74 + i * 26}" text-anchor="end" class="tat s" style="${MONO};fill:#5B3FD6;font-size:12.5px">${b}</text><line x1="30" y1="${82 + i * 26}" x2="292" y2="${82 + i * 26}" stroke="#E9EEFB"/></g>`).join('')}`);
    }
  };
})());
