/* Tech Web · unitat 1 «Com funciona internet» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Cada animació explica un pas del viatge d'una pàgina: la xarxa, el client i el servidor,
   els paquets, els routers, l'adreça IP, el DNS, les parts d'una URL i què hi ha dins una web.
   Les escenes que passen per fases fan servir SMIL (opacitat i moviment amb keyTimes), de manera que tot el cicle
   torna a començar net; els elements fixos no s'animen (així no parpellegen a mig cicle). */
Object.assign(TANI, (() => {
  const C = { ink: '#14204A', teal: '#14A3B8', tealD: '#0E7C8C', blue: '#2F5BEA', green: '#1FA463', orange: '#F08A24', red: '#EF5A5A', gold: '#FFC531', purple: '#8B5CF6', pink: '#E8508B', line: '#B8C6EC', mut: '#5B6787', dev: '#2A3557', scr: '#BFE9F2' };
  const f3 = v => +Math.min(1, Math.max(0, v)).toFixed(3);
  // una animació SMIL a partir de punts [segon, valor]
  const anim = (attr, pts, dur) => { const P = pts.slice(); if (P[0][0] > 0) P.unshift([0, P[0][1]]); if (P[P.length - 1][0] < dur) P.push([dur, P[P.length - 1][1]]);
    return `<animate attributeName="${attr}" values="${P.map(p => p[1]).join(';')}" keyTimes="${P.map(p => f3(p[0] / dur)).join(';')}" dur="${dur}s" repeatCount="indefinite"/>`; };
  // visible entre a i b (segons) dins d'un cicle de dur segons
  const show = (a, b, dur) => anim('opacity', b >= dur ? [[a, 0], [a + .25, 1]] : [[a, 0], [a + .25, 1], [b, 1], [b + .25, 0]], dur);
  // desplaçament per punts [segon, x, y]
  const go = (pts, dur) => { const P = pts.slice(); if (P[0][0] > 0) P.unshift([0, P[0][1], P[0][2]]); if (P[P.length - 1][0] < dur) { const l = P[P.length - 1]; P.push([dur, l[1], l[2]]); }
    return `<animateTransform attributeName="transform" type="translate" values="${P.map(p => `${p[1]},${p[2]}`).join(';')}" keyTimes="${P.map(p => f3(p[0] / dur)).join(';')}" dur="${dur}s" repeatCount="indefinite"/>`; };
  const at = (x, y, s, body) => `<g transform="translate(${x} ${y})${s && s !== 1 ? ` scale(${s})` : ''}">${body}</g>`;
  // amplada aproximada d'un text (Lexend)
  const tw = (t, px = 13.5) => String(t).replace(/<[^>]+>/g, '').length * px * .56;
  const pill = (x, y, txt, col, cls = 'tat w s', px = 13.5) => { const w = tw(txt, px) + 22; return `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`; };
  const tag = (x, y, txt, col = C.ink) => { const w = tw(txt, 13) + 14; return `<rect x="${x - w / 2}" y="${y - 11}" width="${w}" height="22" rx="7" fill="#fff" stroke="${col}" stroke-width="1.6"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="tat s" style="font-size:13px;fill:${col}">${txt}</text>`; };
  const mono = 'font-family:ui-monospace,Menlo,Consolas,monospace';
  // ---------- aparells ----------
  const laptop = (scr = '') => `<rect x="-27" y="-36" width="54" height="36" rx="4" fill="${C.dev}"/><rect x="-23" y="-32" width="46" height="28" rx="2" fill="${C.scr}"/>${scr}<path d="M-33 0h66l-5 6h-56z" fill="#8994B3"/>`;
  const phone = () => `<rect x="-11" y="-38" width="22" height="38" rx="5" fill="${C.dev}"/><rect x="-8" y="-33" width="16" height="26" rx="2" fill="${C.scr}"/><circle cy="-3.6" r="1.7" fill="#8994B3"/>`;
  const tablet = () => `<rect x="-19" y="-30" width="38" height="30" rx="5" fill="${C.dev}"/><rect x="-15" y="-26" width="30" height="22" rx="2" fill="${C.scr}"/>`;
  const wifi = (col = C.teal) => `<path d="M-9 -24a13 13 0 0 1 18 0M-14 -29a20 20 0 0 1 28 0" fill="none" stroke="${col}" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>`;
  const router = (col = C.teal, w = 1) => `<path d="M-11 -13v-11M11 -13v-11" stroke="${C.tealD}" stroke-width="3" stroke-linecap="round"/><rect x="-19" y="-14" width="38" height="15" rx="5" fill="${col}" stroke="${C.tealD}" stroke-width="1.5"/>${[-10, -4, 2].map((x, i) => `<circle cx="${x}" cy="-6.5" r="2" fill="#C8F5DA">${anim('opacity', [[0, 1], [.3 + i * .25, .3], [.6 + i * .25, 1]], 1.4)}</circle>`).join('')}${w ? wifi() : ''}`;
  const node = (col = C.teal) => `<circle r="15" fill="${col}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><path d="M-7 -3h14l-4 -4M7 3h-14l4 4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
  const server = () => `<rect x="-22" y="-62" width="44" height="62" rx="6" fill="${C.dev}"/>${[0, 1, 2].map(i => `<rect x="-17" y="${-56 + i * 19}" width="34" height="14" rx="3" fill="#3B4A78"/><circle cx="-10" cy="${-49 + i * 19}" r="2.8" fill="#3CC47C">${anim('opacity', [[0, 1], [.4, .25], [.8, 1]], .9 + i * .4)}</circle><path d="M-2 ${-49 + i * 19}h13" stroke="#8994B3" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`;
  const env = (col = '#fff') => `<rect x="-15" y="-10" width="30" height="20" rx="3" fill="${col}" stroke="${C.ink}" stroke-width="2"/><path d="M-15 -9l15 10l15 -10" fill="none" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`;
  const file = (col, sym, name) => `<path d="M-17 -22h24l10 10v34h-34z" fill="#fff" stroke="${col}" stroke-width="2.4" stroke-linejoin="round"/><path d="M7 -22v10h10" fill="none" stroke="${col}" stroke-width="2.4" stroke-linejoin="round"/><rect x="-17" y="0" width="34" height="14" fill="${col}"/><text x="0" y="12" text-anchor="middle" class="tat w s" style="font-size:13px;${mono}">${sym}</text>${name ? `<text x="0" y="40" text-anchor="middle" class="tat s" style="font-size:13px">${name}</text>` : ''}`;
  const imgIco = (col = C.green) => `<rect x="-17" y="-22" width="34" height="36" rx="5" fill="#fff" stroke="${col}" stroke-width="2.4"/><circle cx="6" cy="-11" r="4.5" fill="${C.gold}"/><path d="M-14 11l10 -14l7 9l4 -5l8 10z" fill="${col}"/>`;
  const win = (x, y, w, h, url, body = '') => { const dots = tw(url, 13) + 14 <= w - 44, ux = dots ? 37 : 6, uw = w - ux - 6;
    return `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="10" fill="#fff" stroke="${C.ink}" stroke-width="2.4" filter="url(#bwSh)"/><path d="M0 10a10 10 0 0 1 10 -10h${w - 20}a10 10 0 0 1 10 10v16h-${w}z" fill="#E3E8F6"/>
    ${dots ? `<circle cx="11" cy="13" r="3" fill="${C.red}"/><circle cx="20" cy="13" r="3" fill="${C.gold}"/><circle cx="29" cy="13" r="3" fill="#3CC47C"/>` : ''}<rect x="${ux}" y="5" width="${uw}" height="16" rx="8" fill="#fff"/><text x="${ux + uw / 2}" y="17.5" text-anchor="middle" class="tat s" style="font-size:13px">${url}</text>${body}</g>`; };
  // entra fent «pop» (escala i opacitat) al segon t d'un cicle de D segons, centrat a (x, y)
  const popAt = (x, y, s, t, D, body) => `<g transform="translate(${x} ${y})"><g opacity="0">${anim('opacity', [[t, 0], [t + .15, 1]], D)}<animateTransform attributeName="transform" type="scale" values="${s * .3};${s * .3};${s * 1.1};${s};${s}" keyTimes="0;${f3(t / D)};${f3((t + .2) / D)};${f3((t + .35) / D)};1" dur="${D}s" repeatCount="indefinite"/>${body}</g></g>`;
  const cat = (s = 1) => `<g transform="scale(${s})"><path d="M-16 -6l-4 -20l13 9zM16 -6l4 -20l-13 9z" fill="#F0A04B" stroke="#B86A22" stroke-width="2" stroke-linejoin="round"/><ellipse rx="19" ry="16" fill="#F0A04B" stroke="#B86A22" stroke-width="2"/><circle cx="-7" cy="-3" r="2.8" fill="${C.ink}"/><circle cx="7" cy="-3" r="2.8" fill="${C.ink}"/><path d="M-2.6 3h5.2l-2.6 3z" fill="${C.pink}"/><path d="M-6 9q6 4 12 0M-24 2h12M-24 7l12 -2M24 2h-12M24 7l-12 -2" stroke="#7A4A1E" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>`;
  const ok = (r = 11) => `<circle r="${r}" fill="${C.green}"/><path d="M${-r * .45} 0l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const lock = (col = C.green) => `<path d="M-6 -4v-5a6 6 0 0 1 12 0v5" fill="none" stroke="${col}" stroke-width="2.6"/><rect x="-9" y="-4" width="18" height="14" rx="3" fill="${col}"/><circle cy="2" r="2" fill="#fff"/>`;
  // un paquet: un tros de la foto (paisatge de 60 × 60) retallat i amb el seu número
  const LAND = `<rect width="60" height="60" fill="#9FDBFF"/><circle cx="44" cy="15" r="8" fill="${C.gold}"/><path d="M0 60L20 24L34 44L46 30L60 46V60Z" fill="#4FA83E"/><path d="M14 35l6 -11l6 9z" fill="#fff"/><rect y="50" width="60" height="10" fill="#2E97DA"/>`;
  const piece = (k, id) => { const c = k % 2, r = k >> 1; return `<clipPath id="${id}${k}"><rect x="${c * 30}" y="${r * 30}" width="30" height="30"/></clipPath><g clip-path="url(#${id}${k})" transform="translate(${-c * 30 - 15} ${-r * 30 - 15})">${LAND}</g><rect x="-15" y="-15" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>`; };
  const badge = (n, col = C.ink) => `<circle cx="11" cy="-11" r="8.5" fill="${col}" stroke="#fff" stroke-width="1.6"/><text x="11" y="-6.5" text-anchor="middle" class="tat w s" style="font-size:13px">${n}</text>`;
  const lineTxt = (x, y, n, txt, col, a, b, dur) => `<g opacity="0">${show(a, b, dur)}<circle cx="${x}" cy="${y}" r="10" fill="${col}"/><text x="${x}" y="${y + 4.6}" text-anchor="middle" class="tat w s" style="font-size:13px">${n}</text><text x="${x + 17}" y="${y + 5}" class="tat s">${txt}</text></g>`;

  return {
    // una xarxa (els aparells de casa connectats al router) i internet, la xarxa de xarxes
    w1net() {
      const D = 6;
      const box = (x, y, w, h, fill, st, label) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${st}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 19}" text-anchor="middle" class="tat s" style="fill:${C.mut}">${label}</text>`;
      const wl = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${C.teal}" stroke-width="2.2" stroke-dasharray="4 4" opacity=".7"/>`;
      const home = `${box(8, 34, 132, 150, '#FFF6E5', '#F2D7A6', L('Xarxa de casa', 'Red de casa'))}${wl(40, 100, 74, 150)}${wl(110, 100, 74, 150)}${wl(74, 96, 74, 150)}
        ${at(38, 104, .9, laptop())}${at(74, 100, .9, phone())}${at(112, 104, .9, tablet())}${at(74, 166, 1, router())}`;
      const net2 = (x, y, label, fill, st) => `${box(x, y, 118, 98, fill, st, label)}${wl(x + 30, y + 58, x + 59, y + 76)}${wl(x + 88, y + 58, x + 59, y + 76)}${at(x + 30, y + 56, .7, laptop())}${at(x + 88, y + 56, .7, laptop())}${at(x + 59, y + 88, .8, router(C.teal, 0))}`;
      const link = (d, t) => `<path d="${d}" fill="none" stroke="${C.blue}" stroke-width="3.5" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" opacity="0">${show(t, D, D)}${anim('stroke-dashoffset', [[t, 1], [t + .6, 0]], D)}</path>`;
      const dot = (d, col, t0, len) => `<circle r="5" fill="${col}" stroke="#fff" stroke-width="1.5" opacity="0">${show(t0, D - .3, D)}<animateMotion dur="${len}s" repeatCount="indefinite" path="${d}" begin="${t0}s"/></circle>`;
      const pA = 'M92 160C150 160 140 112 170 112', pB = 'M170 112C200 112 210 82 253 82', pC = 'M170 112C200 112 210 186 253 186';
      return tSvg(236, `${home}
        <g opacity="0">${show(2.2, D, D)}${net2(194, 2, L('Escola', 'Escuela'), '#EAF7EE', '#B9E3C6')}${net2(194, 106, L('Biblioteca', 'Biblioteca'), '#F1EBFF', '#D5C8FA')}</g>
        ${link(pA, 2.6)}${link(pB, 2.9)}${link(pC, 3.1)}
        <g opacity="0">${show(2.6, D, D)}${at(170, 112, 1, node(C.blue))}</g>
        ${dot(pA + pB.replace('M170 112', ''), C.orange, 3.6, 1.6)}${dot('M253 186C210 186 200 112 170 112C140 112 150 160 92 160', C.pink, 4.1, 1.6)}
        <g opacity="0">${show(.4, 2.4, D)}${pill(160, 222, L('Una xarxa: aparells connectats', 'Una red: aparatos conectados'), C.orange)}</g>
        <g opacity="0">${show(3.4, D, D)}${pill(160, 222, L('Internet: una xarxa de xarxes', 'Internet: una red de redes'), C.blue)}</g>`);
    },
    // el client (el navegador) fa una petició i el servidor respon amb els fitxers de la pàgina
    w1cs() {
      const D = 8;
      const page = `<g opacity="0">${show(6.3, D, D)}<rect x="6" y="32" width="98" height="16" rx="4" fill="${C.purple}"/><text x="14" y="44.5" class="tat w s" style="font-size:13px">${L('Els gats', 'Los gatos')}</text>${at(34, 76, .62, cat())}<rect x="60" y="62" width="42" height="5" rx="2.5" fill="#C9D3EE"/><rect x="60" y="72" width="34" height="5" rx="2.5" fill="#C9D3EE"/><rect x="60" y="82" width="40" height="5" rx="2.5" fill="#C9D3EE"/></g>`;
      const req = `<g>${go([[.8, 132, 96], [3.0, 228, 96]], D)}<g opacity="0">${show(.8, 3.1, D)}${env()}<g transform="translate(0 -22)">${tag(0, 0, 'gats.html', C.blue)}</g></g></g>`;
      const resp = [[C.blue, '&lt;/&gt;'], [C.pink, '{ }'], [C.green, '']].map(([col, sym], i) => `<g>${go([[4.0 + i * .35, 230, 140], [5.9 + i * .35, 130, 140]], D)}<g opacity="0">${show(4.0 + i * .35, 6.1 + i * .35, D)}<g transform="scale(.62)">${sym ? file(col, sym) : imgIco(col)}</g></g></g>`).join('');
      return tSvg(214, `${win(8, 52, 112, 112, 'gats.numi', page)}
        ${at(266, 162, 1.25, server())}
        <path d="M128 96H232" stroke="${C.line}" stroke-width="2.4" stroke-dasharray="5 6"/><path d="M232 140H128" stroke="${C.line}" stroke-width="2.4" stroke-dasharray="5 6"/>
        <path d="M224 90l8 6l-8 6M136 134l-8 6l8 6" fill="none" stroke="${C.line}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        ${req}${resp}
        <circle cx="266" cy="124" r="30" fill="none" stroke="${C.gold}" stroke-width="4" opacity="0">${show(3.0, 3.9, D)}</circle>
        <g opacity="0">${show(.5, 3.9, D)}${pill(160, 26, L('1. Petició: vull gats.html', '1. Petición: quiero gats.html'), C.blue)}</g>
        <g opacity="0">${show(3.9, D, D)}${pill(160, 26, L('2. Resposta: aquí la tens!', '2. Respuesta: ¡aquí la tienes!'), C.green)}</g>
        <text x="64" y="188" text-anchor="middle" class="tat b">${L('Client', 'Cliente')}</text><text x="64" y="206" text-anchor="middle" class="tat s" style="fill:${C.mut}">${L('el navegador', 'el navegador')}</text>
        <text x="264" y="188" text-anchor="middle" class="tat b">${L('Servidor', 'Servidor')}</text><text x="264" y="206" text-anchor="middle" class="tat s" style="fill:${C.mut}">${L('guarda la web', 'guarda la web')}</text>`);
    },
    // la foto es trenca en paquets numerats, cada un fa el seu camí i en arribar s'ordenen
    w1pack() {
      const D = 9, R1 = [118, 60], R2 = [118, 164], R3 = [192, 112];
      const S = [[24, 74], [55, 74], [24, 105], [55, 105]], S2 = [[20, 70], [59, 70], [20, 109], [59, 109]];
      const F = [[256, 88], [286, 88], [256, 118], [286, 118]];
      const arr = { 2: [3.6, 0], 0: [4.1, 1], 3: [4.6, 2], 1: [5.1, 3] }, Q = [213, 242, 271, 300].map(x => [x, 182]);
      const via = [R1, R2, R1, R2], cols = [C.blue, C.orange, C.pink, C.purple];
      const pk = [0, 1, 2, 3].map(i => { const [ta, slot] = arr[i], dep = 1.5 + i * .25, r = via[i];
        const pts = [[.9, ...S[i]], [1.3, ...S2[i]], [dep, ...S2[i]], [dep + (ta - dep) * .35, ...r], [dep + (ta - dep) * .7, ...R3], [ta, ...Q[slot]], [6.6 + slot * .12, ...Q[slot]], [7.3 + slot * .12, ...F[i]]];
        return `<g>${go(pts, D)}${piece(i, 'w1pk')}<g opacity="1">${anim('opacity', [[0, 0], [1.0, 0], [1.2, 1], [7.4 + slot * .12, 1], [7.7 + slot * .12, 0]], D)}${badge(i + 1, cols[i])}</g></g>`; }).join('');
      const ln = (a, b) => `<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="${C.line}" stroke-width="3" stroke-linecap="round"/>`;
      return tSvg(226, `${ln([72, 90], R1)}${ln([72, 90], R2)}${ln(R1, R3)}${ln(R2, R3)}${ln(R3, [228, 112])}
        ${at(38, 168, .82, server())}
        ${win(228, 40, 88, 112, 'fotos.numi', `<rect x="12" y="32" width="64" height="64" rx="4" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="1.5"/>`)}
        ${at(...R1, 1, node())}${at(...R2, 1, node())}${at(...R3, 1, node())}
        <text x="${R1[0]}" y="${R1[1] - 22}" text-anchor="middle" class="tat s" style="font-size:13px;fill:${C.mut}">router</text><text x="${R2[0]}" y="${R2[1] + 30}" text-anchor="middle" class="tat s" style="font-size:13px;fill:${C.mut}">router</text>
        ${pk}
        ${popAt(301, 60, .9, 7.6, D, ok())}
        <g opacity="0">${show(.2, 2.3, D)}${pill(160, 212, L('1. La foto es trenca en paquets', '1. La foto se rompe en paquetes'), C.blue)}</g>
        <g opacity="0">${show(2.3, 5.9, D)}${pill(160, 212, L('2. Cada paquet fa el seu camí', '2. Cada paquete hace su camino'), C.orange)}</g>
        <g opacity="0">${show(5.9, D, D)}${pill(160, 212, L("3. S'ordenen i s'ajunten", '3. Se ordenan y se juntan'), C.green)}</g>`);
    },
    // els routers passen els paquets d'un a l'altre; si un camí es talla, en fan servir un altre
    w1route() {
      const D = 10, N = { A: [86, 112], B: [150, 58], C: [150, 166], D: [218, 58], E: [218, 166] }, SRC = [30, 112], DST = [288, 112];
      const L2 = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['B', 'C'], ['D', 'E']];
      const P = k => N[k] || (k === 's' ? SRC : DST);
      const ln = (a, b) => `<path d="M${P(a)[0]} ${P(a)[1]}L${P(b)[0]} ${P(b)[1]}" stroke="${C.line}" stroke-width="3.2" stroke-linecap="round"/>`;
      const trip = (path, t0, t1, col) => { const n = path.length - 1, pts = path.map((k, i) => [t0 + (t1 - t0) * i / n, ...P(k)]);
        return `<g>${go(pts, D)}<g opacity="0">${show(t0, t1 + .3, D)}<rect x="-12" y="-9" width="24" height="18" rx="5" fill="${col}" stroke="#fff" stroke-width="2"/><path d="M-6 0h10l-3 -3M4 0l-3 3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>`; };
      const glow = (k, t) => `<circle cx="${P(k)[0]}" cy="${P(k)[1]}" r="21" fill="none" stroke="${C.gold}" stroke-width="3.5" opacity="0">${anim('opacity', [[t - .15, 0], [t, 1], [t + .5, 0]], D)}</circle>`;
      const p1 = ['s', 'A', 'B', 'D', 'd'], p2 = ['s', 'A', 'C', 'E', 'd'];
      const t1 = [.8, 3.4], t2 = [5.0, 8.0];
      const g1 = p1.slice(1, 4).map((k, i) => glow(k, t1[0] + (t1[1] - t1[0]) * (i + 1) / 4)).join(''), g2 = p2.slice(1, 4).map((k, i) => glow(k, t2[0] + (t2[1] - t2[0]) * (i + 1) / 4)).join('');
      const mid = [(N.B[0] + N.D[0]) / 2, N.B[1]];
      return tSvg(222, `${L2.map(([a, b]) => ln(a, b)).join('')}${ln('s', 'A')}${ln('D', 'd')}${ln('E', 'd')}
        <g opacity="0">${show(3.9, D, D)}<path d="M${N.B[0] + 16} ${N.B[1]}L${N.D[0] - 16} ${N.D[1]}" stroke="${C.red}" stroke-width="4" stroke-dasharray="6 5"/><g transform="translate(${mid[0]} ${mid[1]})"><circle r="11" fill="${C.red}"/><path d="M-4.5 -4.5l9 9M4.5 -4.5l-9 9" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>${pill(mid[0], mid[1] - 26, L('Camí tallat!', '¡Camino cortado!'), C.red)}</g>
        ${at(SRC[0], SRC[1] + 20, .9, laptop())}${at(DST[0], DST[1] + 30, .95, server())}
        ${Object.values(N).map(p => at(p[0], p[1], 1, node())).join('')}
        ${g1}${g2}${trip(p1, ...t1, C.orange)}${trip(p2, ...t2, C.purple)}
        <g opacity="0">${show(4.4, 5.6, D)}<g transform="translate(${N.A[0]} ${N.A[1] - 30})"><circle r="12" fill="${C.gold}"/><text y="5.5" text-anchor="middle" class="tat b">?</text></g></g>
        ${popAt(DST[0] + 20, DST[1] - 46, .85, 8.2, D, ok())}
        <g opacity="0">${show(.3, 3.9, D)}${pill(160, 206, L('Cada router tria el camí', 'Cada router elige el camino'), C.teal)}</g>
        <g opacity="0">${show(3.9, D, D)}${pill(160, 206, L("Si un camí falla, se'n busca un altre", 'Si un camino falla, se busca otro'), C.purple)}</g>`);
    },
    // l'adreça IP: quatre números de 0 a 255; el paquet porta l'adreça del destí i arriba al servidor que la té
    w1ip() {
      const D = 7, IP = ['203', '0', '113', '25'], X = [30, 102, 174, 246];
      const boxes = IP.map((n, i) => `<g opacity="0">${show(.3 + i * .35, D, D)}<rect x="${X[i]}" y="14" width="56" height="38" rx="10" fill="${C.blue}"/><text x="${X[i] + 28}" y="40" text-anchor="middle" class="tat w" style="font-size:20px">${n}</text></g>${i < 3 ? `<circle cx="${X[i] + 64}" cy="44" r="3.5" fill="${C.ink}" opacity="0">${show(.45 + i * .35, D, D)}</circle>` : ''}`).join('');
      const dev = [[56, 'laptop', '198.51.100.7'], [160, 'phone', '198.51.100.8'], [264, 'server', '203.0.113.25']];
      const devs = dev.map(([x, k, ip], i) => `${at(x, 172, k === 'server' ? .9 : 1, k === 'laptop' ? laptop() : k === 'phone' ? phone() : server())}${tag(x, 196, ip, i === 2 ? C.green : C.ink)}`).join('');
      const pk = `<g>${go([[2.3, 56, 126], [3.0, 90, 118], [4.6, 214, 118], [5.2, 230, 122]], D)}<g opacity="0">${show(2.3, 5.4, D)}${env()}<g transform="translate(0 -22)">${tag(0, 0, L('Per a: 203.0.113.25', 'Para: 203.0.113.25'), C.green)}</g></g></g>`;
      return tSvg(214, `${boxes}
        <g opacity="0">${show(1.7, D, D)}<text x="160" y="76" text-anchor="middle" class="tat s" style="fill:${C.mut}">${L('4 números de 0 a 255, separats per punts', '4 números de 0 a 255, separados por puntos')}</text></g>
        ${devs}${pk}
        <circle cx="264" cy="140" r="34" fill="none" stroke="${C.green}" stroke-width="4" opacity="0">${show(5.3, 6.6, D)}</circle>
        ${popAt(292, 104, .85, 5.4, D, ok())}`);
    },
    // el DNS: el navegador pregunta l'adreça IP d'un domini, el DNS la busca a la seva agenda i després es demana la web
    w1dns() {
      const D = 10;
      const book = `<g transform="translate(184 10)"><rect width="130" height="96" rx="10" fill="#fff" stroke="${C.teal}" stroke-width="2.4" filter="url(#bwSh)"/><path d="M0 10a10 10 0 0 1 10 -10h110a10 10 0 0 1 10 10v14h-130z" fill="${C.teal}"/><text x="65" y="17.5" text-anchor="middle" class="tat w s" style="font-size:13px">${L('Agenda DNS', 'Agenda DNS')}</text>
        <rect x="6" y="28" width="118" height="32" rx="6" fill="${C.gold}" opacity="0">${show(2.5, 5.2, D)}</rect>
        <text x="12" y="42" class="tat s" style="font-size:13px">fotonuvi.numi</text><text x="12" y="56" class="tat s" style="font-size:13px;fill:${C.green}">203.0.113.25</text>
        <path d="M8 64h114" stroke="#E3E8F6" stroke-width="1.5"/><text x="12" y="78" class="tat s" style="font-size:13px">estudi.numi</text><text x="12" y="92" class="tat s" style="font-size:13px;fill:${C.green}">198.51.100.7</text></g>`;
      const page = `<g opacity="0">${show(8.9, D, D)}<rect x="8" y="32" width="102" height="14" rx="4" fill="${C.pink}"/><text x="14" y="43.5" class="tat w s" style="font-size:13px">FotoNuvi</text><rect x="8" y="52" width="40" height="30" rx="4" fill="#9FDBFF"/><path d="M8 82l14 -16l10 10l6 -5l10 11z" fill="#4FA83E"/><rect x="54" y="54" width="54" height="5" rx="2.5" fill="#C9D3EE"/><rect x="54" y="64" width="44" height="5" rx="2.5" fill="#C9D3EE"/></g>`;
      const q = `<g>${go([[.6, 124, 46], [2.3, 182, 46]], D)}<g opacity="0">${show(.6, 2.5, D)}${tag(0, 0, 'fotonuvi.numi?', C.blue)}</g></g>`;
      const ans = `<g>${go([[3.4, 192, 70], [4.9, 120, 70]], D)}<g opacity="0">${show(3.4, 5.1, D)}${tag(0, 0, '203.0.113.25', C.green)}</g></g>`;
      const req = `<g>${go([[5.5, 112, 100], [7.2, 236, 160]], D)}<g opacity="0">${show(5.5, 7.4, D)}${env()}</g></g>`;
      const back = [C.blue, C.pink, C.green].map((col, i) => `<g>${go([[7.6 + i * .25, 236, 166], [8.7 + i * .25, 104, 104]], D)}<rect x="-8" y="-8" width="16" height="16" rx="4" fill="${col}" stroke="#fff" stroke-width="2" opacity="0">${show(7.6 + i * .25, 8.9 + i * .25, D)}</rect></g>`).join('');
      return tSvg(232, `${win(6, 16, 118, 94, 'fotonuvi.numi', page)}${book}
        ${at(262, 194, .95, server())}${tag(262, 214, '203.0.113.25', C.green)}
        <path d="M118 108L246 168" stroke="${C.line}" stroke-width="2.2" stroke-dasharray="5 6"/>
        ${q}${ans}${req}${back}
        ${lineTxt(18, 136, 1, L('Pregunta al DNS', 'Pregunta al DNS'), C.blue, .6, D, D)}
        ${lineTxt(18, 160, 2, L("Rep l'adreça IP", 'Recibe la dirección IP'), C.green, 3.4, D, D)}
        ${lineTxt(18, 184, 3, L('Demana la web a la IP', 'Pide la web a la IP'), C.orange, 5.5, D, D)}
        ${lineTxt(18, 208, 4, L('Arriba la pàgina', 'Llega la página'), C.pink, 7.6, D, D)}`);
    },
    // les parts d'una URL: protocol, domini i camí (i el candau del https)
    w1url() {
      const D = 6.5, x0 = 46, cw = 8.45, segs = [['https://', C.green], ['exemple.numi', C.blue], ['/gats.html', C.orange]];
      let x = x0; const S = segs.map(([t, col], i) => { const w = t.length * cw, s = { t, col, x, w, c: x + w / 2, a: .4 + i * 1.2 }; x += w; return s; });
      const hl = S.map(s => `<rect x="${s.x - 1}" y="24" width="${s.w + 2}" height="30" rx="5" fill="${s.col}" opacity="0">${anim('opacity', [[s.a, 0], [s.a + .25, .2]], D)}</rect>`).join('');
      const txt = S.map(s => `<text x="${s.x}" y="45" textLength="${s.w}" lengthAdjust="spacingAndGlyphs" class="tat" style="font-size:14px;${mono};fill:${s.col}">${s.t}</text>`).join('');
      const br = (s, y2) => `<path d="M${s.x + 2} 60v6h${s.w - 4}v-6M${s.c} 66V${y2}" fill="none" stroke="${s.col}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
      const lab = (s, y, a, b) => `<g opacity="0">${show(s.a + .3, D, D)}${br(s, y - 16)}<text x="${s.c}" y="${y}" text-anchor="middle" class="tat" style="fill:${s.col}">${a}</text><text x="${s.c}" y="${y + 18}" text-anchor="middle" class="tat s" style="fill:${C.mut}">${b}</text></g>`;
      return tSvg(200, `<rect x="8" y="16" width="304" height="46" rx="23" fill="#fff" stroke="${C.ink}" stroke-width="2.4" filter="url(#bwSh)"/>
        <g transform="translate(28 40)">${lock()}<circle r="16" fill="none" stroke="${C.gold}" stroke-width="3" opacity="0">${show(4.3, D, D)}</circle></g>
        ${hl}${txt}
        ${lab(S[0], 96, L('protocol', 'protocolo'), L('(s = segur)', '(s = seguro)'))}
        ${lab(S[2], 96, L('camí', 'ruta'), L('quina pàgina', 'qué página'))}
        ${lab(S[1], 136, L('domini', 'dominio'), L('el nom de la web', 'el nombre de la web'))}
        <g opacity="0">${show(4.3, D, D)}${pill(160, 182, L('El candau: la connexió va xifrada', 'El candado: la conexión va cifrada'), C.green)}</g>`);
    },
    // dins una web: l'HTML (el contingut), el CSS (l'aspecte) i les imatges arriben al navegador, que dibuixa la pàgina
    w1page() {
      const D = 9, W = [120, 10, 192, 168];
      const slot = (y, body, name) => `<g transform="translate(34 ${y})"><g opacity=".25">${body}</g><text x="0" y="40" text-anchor="middle" class="tat s" style="font-size:13px">${name}</text></g>`;
      const fly = (y, body, t0, t1) => `<g>${go([[t0, 34, y], [t1, 210, 96]], D)}<g opacity="0">${anim('opacity', [[0, 1], [t1 - .1, 1], [t1 + .15, 0], [D - .05, 0], [D, 1]], D)}${body}</g></g>`;
      const fH = file(C.blue, '&lt;/&gt;'), fC = file(C.pink, '{ }'), fI = imgIco();
      // la pàgina sense estil (només HTML) i amb estil (HTML + CSS)
      const plain = `<g opacity="0">${show(1.7, 4.0, D)}<text x="16" y="52" class="tat" style="font-family:Georgia,serif;font-size:17px">${L('Els gats', 'Los gatos')}</text><rect x="16" y="64" width="150" height="5" fill="#9AA3B8"/><rect x="16" y="74" width="132" height="5" fill="#9AA3B8"/><rect x="16" y="84" width="140" height="5" fill="#9AA3B8"/><rect x="16" y="98" width="70" height="56" fill="none" stroke="#9AA3B8" stroke-width="1.5" stroke-dasharray="4 3"/></g>`;
      const styled = `<g opacity="0">${show(4.0, D, D)}<rect x="2" y="27" width="188" height="139" fill="#FFF6E5"/><rect x="10" y="34" width="172" height="26" rx="8" fill="${C.purple}"/><text x="20" y="52" class="tat w" style="font-size:16px">${L('Els gats', 'Los gatos')}</text><rect x="96" y="72" width="84" height="6" rx="3" fill="#C59BF5"/><rect x="96" y="84" width="70" height="6" rx="3" fill="#C59BF5"/><rect x="96" y="96" width="78" height="6" rx="3" fill="#C59BF5"/><rect x="96" y="108" width="60" height="6" rx="3" fill="#C59BF5"/><rect x="12" y="68" width="76" height="76" rx="14" fill="#fff" stroke="${C.purple}" stroke-width="3"/></g>`;
      const pic = `<g opacity="0">${show(6.1, D, D)}${at(50, 110, .95, cat())}</g>`;
      return tSvg(230, `${slot(28, fH, 'index.html')}${slot(100, fC, 'estil.css')}${slot(172, fI, 'gat.svg')}
        ${win(W[0], W[1], W[2], W[3], 'gats.numi', plain + styled + pic)}
        ${fly(28, fH, .5, 1.6)}${fly(100, fC, 2.7, 3.9)}${fly(172, fI, 4.9, 6.0)}
        <g opacity="0">${show(.3, 2.6, D)}${pill(216, 206, L('HTML: què hi ha', 'HTML: qué hay'), C.blue)}</g>
        <g opacity="0">${show(2.6, 4.8, D)}${pill(216, 206, L('CSS: com es veu', 'CSS: cómo se ve'), C.pink)}</g>
        <g opacity="0">${show(4.8, D, D)}${pill(216, 206, L('Imatges: fitxers a part', 'Imágenes: archivos aparte'), C.green)}</g>`);
    }
  };
})());
