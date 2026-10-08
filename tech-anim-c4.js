/* Numi Tech · Tech Web · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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

/* ── unitat 2 ── */
/* Tech Web · unitat 2 «HTML» · animacions de teoria (TANI)
   Dibuixos propis de Numi: el codi (lletra monoespaiada, com a l'editor) i el que en fa el navegador. */
{
  const W2F = "font-family:ui-monospace,Menlo,Consolas,'DejaVu Sans Mono',monospace;font-weight:700";
  const w2m = (fs, extra = '') => `style="${W2F};font-size:${fs}px${extra ? ';' + extra : ''}"`;
  // un tros de text que apareix al segon t (SMIL, perquè funcioni dins de <tspan>)
  const w2in = (t, d = .3) => `<animate attributeName="fill-opacity" values="0;0;1;1;0" keyTimes="0;${(t / 5.5).toFixed(3)};${((t + d) / 5.5).toFixed(3)};.92;1" dur="5.5s" repeatCount="indefinite"/>`;
  // una finestra de navegador (amb els tres punts) i, si cal, una pestanya amb text
  const w2win = (x, y, w, h, tab = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x} ${y + 12}q0 -12 12 -12h${w - 24}q12 0 12 12v12h-${w}z" fill="#E3E8F6"/>${[0, 1, 2].map(i => `<circle cx="${x + 13 + i * 11}" cy="${y + 12}" r="3.6" fill="${['#EF5A5A', '#FFC531', '#3CC47C'][i]}"/>`).join('')}${tab}`;
  // una etiqueta de color (xip) amb text monoespaiat blanc
  const w2chip = (x, y, txt, col, extra = '') => { const w = txt.replace(/&[a-z]+;/g, '_').length * 7.9 + 14; return `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="22" rx="7" fill="${col}"/><text x="${x + 7}" y="${y + 16}" class="tat w" ${w2m(13)}>${txt}</text></g>`; };
  const lt = s => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // les classes .tat posen el color per CSS: el «fill» d'un <text> va dins de style. I un sol style per etiqueta.
  const w2fix = b => b.replace(/<(text|g|rect|path|circle)\b([^<>]*)>/g, (m, tag, at) => {
    const sc = /\/\s*$/.test(at), st = []; at = at.replace(/\/\s*$/, '').replace(/\sstyle="([^"]*)"/g, (_, v) => { st.push(v); return ''; });
    if (tag === 'text') at = at.replace(/\sfill="([^"]+)"/, (_, v) => { st.push('fill:' + v); return ''; });
    return `<${tag}${at}${st.length ? ` style="${st.join(';')}"` : ''}${sc ? '/' : ''}>`; });
  const S = (h, b) => tSvg(h, w2fix(b));
  // text monoespaiat amb l'amplada exacta (0,6 em per lletra), perquè les marques quadrin a sobre
  const w2len = (s, fs) => `textLength="${(s.replace(/&[a-z]+;/g, '_').length * fs * .6).toFixed(1)}" lengthAdjust="spacingAndGlyphs"`;

  Object.assign(TANI, {
    // HTML és un llenguatge de marques: el text es marca amb etiquetes i el navegador en dibuixa la pàgina
    w2mark() {
      const t1 = L('Pa amb tomàquet', 'Pan con tomate'), t2 = L('Una recepta fàcil.', 'Una receta fácil.');
      const ln = (y, tag, txt, a, b) => `<text x="24" y="${y}" class="tat" ${w2m(14)}><tspan fill="#7FB8FF" fill-opacity="0">${lt(`<${tag}>`)}${w2in(a)}</tspan><tspan fill="#E8EEFF">${txt}</tspan><tspan fill="#7FB8FF" fill-opacity="0">${lt(`</${tag}>`)}${w2in(b)}</tspan></text>`;
      return S(226, `<rect x="10" y="8" width="300" height="88" rx="14" fill="#14204A"/><text x="298" y="27" text-anchor="end" class="tat s" fill="#7F8FC0" style="font-size:13px">index.html</text>
        ${ln(50, 'h1', t1, .5, .9)}${ln(80, 'p', t2, 1.4, 1.8)}
        <g ${tA(2.4, 'ta-in')}><path d="M160 102v14" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/><path d="M151 112l9 10 9-10" fill="none" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.7, 'ta-fade')}>${w2win(34, 128, 252, 90)}</g>
        <text x="50" y="178" class="tat" style="font-size:21px;font-weight:900" ${tA(3.1, 'ta-in')}>${t1}</text>
        <text x="50" y="204" class="tat s" ${tA(3.5, 'ta-in')}>${t2}</text>`);
    },
    // anatomia d'un element: obre, contingut, tanca (amb la barra) = element
    w2tag() {
      const c = L('Hola, món!', '¡Hola, mundo!'), cw = 13.2, n = 3 + c.length + 4, w = n * cw, x0 = 160 - w / 2, xc = x0 + 3 * cw, xe = xc + c.length * cw, x1 = xe + 4 * cw;
      const br = (a, b, y, col, t) => `<path d="M${a + 2} ${y}v8h${b - a - 4}v-8" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')}/>`;
      return S(204, `<rect x="${x0 - 14}" y="44" width="${w + 28}" height="48" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="${x0}" y="76" class="tat" fill="#2E9E5B" ${w2m(22)} ${w2len('<p>', 22)}>&lt;p&gt;</text><text x="${xc}" y="76" class="tat" ${w2m(22)} ${w2len(c, 22)}>${c}</text><text x="${xe}" y="76" class="tat" fill="#D64545" ${w2m(22)} ${w2len('</p>', 22)}>&lt;/p&gt;</text>
        ${br(x0, xc, 100, '#2E9E5B', .5)}<text x="${(x0 + xc) / 2}" y="128" text-anchor="middle" class="tat s" fill="#2E9E5B" ${tA(.7, 'ta-fade')}>${L('obre', 'abre')}</text>
        ${br(xc, xe, 100, '#14204A', 1.2)}<text x="${(xc + xe) / 2}" y="128" text-anchor="middle" class="tat s" ${tA(1.4, 'ta-fade')}>${L('contingut', 'contenido')}</text>
        ${br(xe, x1, 100, '#D64545', 1.9)}<text x="${(xe + x1) / 2}" y="128" text-anchor="middle" class="tat s" fill="#D64545" ${tA(2.1, 'ta-fade')}>${L('tanca', 'cierra')}</text>
        <circle cx="${xe + cw * 1.5}" cy="68" r="15" fill="none" stroke="#FFC531" stroke-width="3.5" ${tA(2.7)}/><text x="${xe + cw * 1.5}" y="32" text-anchor="middle" class="tat s" fill="#B98500" ${tA(2.8, 'ta-fade')}>${L('la barra!', '¡la barra!')}</text>
        <path d="M${x0} 148q0 12 12 12h${w / 2 - 22}q10 0 10 10q0 -10 10 -10h${w / 2 - 22}q12 0 12 -12" fill="none" stroke="#2F5BEA" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(3.4, 'ta-draw')}/>
        <text x="160" y="194" text-anchor="middle" class="tat b" fill="#2F5BEA" ${tA(3.7)}>${L('= un element', '= un elemento')}</text>`);
    },
    // etiquetes dins d'etiquetes: els arcs de cada parella no s'han d'encreuar
    w2nest() {
      const w1 = L('Molt ', 'Muy '), w2 = L('bo', 'rico'), cw = 8.1;
      const row = (toks, y) => { let x = 20; return toks.map(([s, col]) => { const o = { s, col, x, c: x + s.length * cw / 2 }; x += s.length * cw; return o; }); };
      const draw = (T, y) => `<text y="${y}" class="tat" ${w2m(13.5)}>${T.map(o => `<tspan x="${o.x}" fill="${o.col}" ${w2len(o.s, 13.5)}>${lt(o.s)}</tspan>`).join('')}</text>`;
      const arc = (a, b, y, h, col, t) => `<path d="M${a} ${y}C${a} ${y - h} ${b} ${y - h} ${b} ${y}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(t, 'ta-draw')}/>`;
      const B = '#2F5BEA', O = '#E07A12', K = '#14204A';
      const g = row([['<p>', B], [w1, K], ['<strong>', O], [w2, K], ['</strong>', O], ['</p>', B]]), b = row([['<p>', B], [w1, K], ['<strong>', O], [w2, K], ['</p>', B], ['</strong>', O]]);
      const gx = g[5].x + 4 * cw + 12, bx = b[5].x + 9 * cw + 12;
      return S(234, `${draw(g, 86)}${arc(g[0].c, g[5].c, 70, 58, B, .5)}${arc(g[2].c, g[4].c, 70, 32, O, 1.1)}
        <g ${tA(1.7)}><circle cx="${Math.min(gx + 12, 300)}" cy="80" r="13" fill="#3CC47C"/><path d="M${Math.min(gx + 12, 300) - 6} 80l4 4 8-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <text x="20" y="110" class="tat s" fill="#2E9E5B" ${tA(1.9, 'ta-fade')}>${L('Ben niuat: els arcs no es creuen', 'Bien anidado: los arcos no se cruzan')}</text>
        <path d="M14 124h292" stroke="#DCE4FA" stroke-width="2" stroke-dasharray="5 6"/>
        ${draw(b, 196)}${arc(b[0].c, b[4].c, 180, 48, B, 2.6)}${arc(b[2].c, b[5].c, 180, 30, O, 3.2)}
        <g ${tA(3.8, 'ta-wob')}><circle cx="${Math.min(bx + 12, 300)}" cy="190" r="13" fill="#EF5A5A"/><path d="M${Math.min(bx + 12, 300) - 5} 185l10 10M${Math.min(bx + 12, 300) + 5} 185l-10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="20" y="222" class="tat s" fill="#C0392B" ${tA(4, 'ta-fade')}>${L("Mal niuat: s'encreuen!", '¡Mal anidado: se cruzan!')}</text>`);
    },
    // els títols fan l'esquema de la pàgina, com l'índex d'un llibre
    w2heads() {
      const H = [[1, L('Receptari', 'Recetario'), 40], [2, L('Primers', 'Primeros'), 72], [3, 'Escudella', 110], [2, 'Postres', 150], [3, 'Crema', 188]];
      const fs = { 1: 21, 2: 16.5, 3: 14 }, col = { 1: '#2F5BEA', 2: '#8B5CF6', 3: '#E07A12' };
      const bars = y => `<rect x="24" y="${y}" width="106" height="5" rx="2.5" fill="#DCE4FA"/><rect x="24" y="${y + 10}" width="80" height="5" rx="2.5" fill="#DCE4FA"/>`;
      return S(232, `<rect x="10" y="10" width="136" height="206" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${H.map(([n, t, y]) => `<text x="24" y="${y}" class="tat" style="font-size:${fs[n]}px;font-weight:900">${t}</text>`).join('')}${bars(84)}${bars(120)}${bars(160)}${bars(198)}
        <path d="M180 46V145M180 67h8M180 145h8M196 78v27h8M196 156v27h8" fill="none" stroke="#C9D3EE" stroke-width="2.5" ${tA(.2, 'ta-fade')}/>
        ${H.map(([n, t, y], i) => { const x = 172 + (n - 1) * 16; return `<g ${tA(.4 + i * .6, 'ta-in')}><path d="M${24 + t.length * (fs[n] * .58) + 6} ${y - 5}H${x - 4}" stroke="${col[n]}" stroke-width="2" stroke-dasharray="3 4" opacity=".55"/>${w2chip(x, y - 16, 'h' + n, col[n])}<text x="${x + 34}" y="${y}" class="tat s">${t}</text></g>`; }).join('')}
        <text x="240" y="224" text-anchor="middle" class="tat s" fill="#5A6BA0" ${tA(3.6, 'ta-fade')}>${L("l'esquema", 'el esquema')}</text>`);
    },
    // l'esquelet: html > head (title → pestanya) + body (→ el que es veu)
    w2page() {
      const tab = L('Receptari', 'Recetario');
      return S(236, `<g ${tA(.1, 'ta-fade')}><rect x="8" y="8" width="158" height="220" rx="12" fill="#EEF2FD" stroke="#7FB8FF" stroke-width="2"/><text x="18" y="27" class="tat" fill="#2F5BEA" ${w2m(13)}>${lt(`<html lang="${L('ca', 'es')}">`)}</text></g>
        <g ${tA(.6, 'ta-in')}><rect x="18" y="36" width="138" height="64" rx="10" fill="#FFF4E0" stroke="#F1C27D" stroke-width="2"/><text x="28" y="54" class="tat" fill="#B9650B" ${w2m(13)}>&lt;head&gt;</text>
          <rect x="28" y="62" width="118" height="28" rx="8" fill="#fff" stroke="#F1C27D" stroke-width="1.5"/><text x="36" y="81" class="tat" ${w2m(13)}>&lt;title&gt;</text></g>
        <g ${tA(2.1, 'ta-in')}><rect x="18" y="110" width="138" height="108" rx="10" fill="#E8F7EE" stroke="#8FD3A8" stroke-width="2"/><text x="28" y="128" class="tat" fill="#2E8B57" ${w2m(13)}>&lt;body&gt;</text>
          <rect x="28" y="138" width="118" height="28" rx="8" fill="#fff" stroke="#8FD3A8" stroke-width="1.5"/><text x="36" y="157" class="tat" ${w2m(13)}>&lt;h1&gt;</text>
          <rect x="28" y="174" width="118" height="28" rx="8" fill="#fff" stroke="#8FD3A8" stroke-width="1.5"/><text x="36" y="193" class="tat" ${w2m(13)}>&lt;p&gt;</text></g>
        ${w2win(176, 26, 136, 192, `<path d="M226 26h70q6 0 6 6v14h-82v-14q0 -6 6 -6z" fill="#fff" stroke="#DCE4FA" stroke-width="1.5"/>`)}
        <path d="M146 76C176 76 192 38 222 38" fill="none" stroke="#E07A12" stroke-width="2.5" stroke-dasharray="4 4" ${tA(1.3, 'ta-fade')}/>
        <path d="M156 160C176 160 172 92 186 88" fill="none" stroke="#2E9E5B" stroke-width="2.5" stroke-dasharray="4 4" ${tA(2.7, 'ta-fade')}/>
        <text x="226" y="42" class="tat s" ${tA(1.8, 'ta-pop')}>${tab}</text>
        <text x="190" y="80" class="tat" style="font-size:17px;font-weight:900" ${tA(3.2, 'ta-in')}>${tab}</text>
        <g ${tA(3.5, 'ta-in')}><rect x="190" y="94" width="104" height="6" rx="3" fill="#DCE4FA"/><rect x="190" y="106" width="84" height="6" rx="3" fill="#DCE4FA"/></g>
        <text x="262" y="18" text-anchor="middle" class="tat s" fill="#E07A12" ${tA(1.9, 'ta-fade')}>${L('la pestanya ↓', 'la pestaña ↓')}</text>
        <text x="244" y="138" text-anchor="middle" class="tat s" fill="#2E8B57" ${tA(3.4, 'ta-fade')}>${L('↑ el que es veu', '↑ lo que se ve')}</text>`);
    },
    // ul (sense ordre: els elements es poden canviar de lloc) i ol (amb ordre: 1, 2, 3)
    w2lists() {
      const U = [L('Farina', 'Harina'), L('Ous', 'Huevos'), L('Sucre', 'Azúcar')], O = [L('Bat els ous', 'Bate'), L('Barreja', 'Mezcla'), L('Al forn', 'Al horno')];
      const sw = d => `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 ${d};0 ${d};0 0" keyTimes="0;.25;.4;.75;.9" dur="5.5s" repeatCount="indefinite"/>`;
      const item = (y, t, a = '') => `<g>${a}<circle cx="34" cy="${y - 5}" r="5" fill="#14204A"/><text x="48" y="${y}" class="tat">${t}</text></g>`;
      return S(214, `<rect x="8" y="8" width="148" height="196" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="22" y="36" class="tat b" fill="#8B5CF6" ${w2m(17)}>&lt;ul&gt;</text><text x="22" y="56" class="tat s" fill="#5A6BA0">${L('sense ordre', 'sin orden')}</text>
        ${item(90, U[0], sw(64))}${item(122, U[1])}${item(154, U[2], sw(-64))}
        <text x="82" y="190" text-anchor="middle" class="tat s" fill="#2E9E5B" ${tA(2.4, 'ta-fade')}>${L("✓ tant fa l'ordre", '✓ da igual el orden')}</text>
        <rect x="164" y="8" width="148" height="196" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="178" y="36" class="tat b" fill="#E07A12" ${w2m(17)}>&lt;ol&gt;</text><text x="178" y="56" class="tat s" fill="#5A6BA0">${L('amb ordre', 'con orden')}</text>
        ${O.map((t, i) => `<g ${tA(.5 + i * .8, 'ta-in')}><circle cx="190" cy="${85 + i * 32}" r="11" fill="#E07A12"/><text x="190" y="${90 + i * 32}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="208" y="${90 + i * 32}" class="tat">${t}</text></g>`).join('')}
        <text x="238" y="190" text-anchor="middle" class="tat s" fill="#C0392B" ${tA(3.1, 'ta-fade')}>${L("l'ordre importa!", '¡el orden importa!')}</text>`);
    },
    // strong = important; em = èmfasi (la paraula que diries amb més força, i que canvia el sentit)
    w2strong() {
      const s1 = L('Bat-ho un minut. ', 'Bátelo un minuto. '), s2 = L('Compte: talla!', '¡Cuidado: corta!');
      const em = (pre, w, post, note, y, t) => `<g ${tA(t, 'ta-in')}><circle cx="30" cy="${y - 6}" r="13" fill="#FFD9A8"/><circle cx="26" cy="${y - 9}" r="1.8" fill="#14204A"/><circle cx="34" cy="${y - 9}" r="1.8" fill="#14204A"/><path d="M25 ${y - 2}q5 4 10 0" fill="none" stroke="#14204A" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="50" y="${y - 24}" width="256" height="34" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><path d="M50 ${y - 10}l-8 4 8 4" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <text x="62" y="${y - 2}" class="tat">${pre}<tspan fill="#8B5CF6" style="font-style:italic;font-size:19px;font-weight:900">${w}</tspan>${post}</text><text x="298" y="${y - 2}" text-anchor="end" class="tat s" fill="#5A6BA0">${note}</text></g>`;
      return S(226, `<rect x="10" y="8" width="300" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${w2chip(22, 18, '&lt;strong&gt;', '#E07A12')}<text x="118" y="34" class="tat s" fill="#5A6BA0">${L('vol dir: important', 'quiere decir: importante')}</text>
        <g ${tA(1, 'ta-wob')}><path d="M290 18l13 22h-26z" fill="#FFC531" stroke="#B98500" stroke-width="2" stroke-linejoin="round"/><path d="M290 26v6" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/><circle cx="290" cy="36" r="1.5" fill="#14204A"/></g>
        <text x="22" y="66" class="tat" ${tA(.4, 'ta-fade')}>${s1}<tspan fill="#C0392B" style="font-weight:900">${s2}</tspan></text>
        <rect x="10" y="94" width="300" height="124" rx="14" fill="#F7F3FF" stroke="#E2D8FB" stroke-width="2"/>
        ${w2chip(22, 104, '&lt;em&gt;', '#8B5CF6')}<text x="78" y="120" class="tat s" fill="#5A6BA0">${L('vol dir: èmfasi', 'quiere decir: énfasis')}</text>
        ${em('', L('Jo', 'Yo'), L(' faig el pastís', ' hago el pastel'), L('(no tu)', '(no tú)'), 162, 2)}
        ${em(L('Jo faig el ', 'Yo hago el '), L('pastís', 'pastel'), '', L('(no la coca)', '(no la coca)'), 206, 3.2)}`);
    },
    // les parts d'una recepta i l'etiqueta de cada una
    w2recipe() {
      const P = [[L('Pastís de poma', 'Pastel de manzana'), 34, 'h1', '#2F5BEA'], ['', 52, 'p', '#2E9E5B'], [L('Ingredients', 'Ingredientes'), 82, 'h2', '#2F5BEA'], ['', 106, 'ul', '#E07A12'], [L('Passos', 'Pasos'), 142, 'h2', '#2F5BEA'], ['', 166, 'ol', '#E07A12'], ['', 204, 'p', '#2E9E5B']];
      const bar = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="5" rx="2.5" fill="#DCE4FA"/>`;
      return S(230, `<rect x="10" y="8" width="164" height="214" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="22" y="36" class="tat" style="font-size:16px;font-weight:900">${P[0][0]}</text>${bar(22, 46, 128)}${bar(22, 55, 96)}
        <text x="22" y="84" class="tat s" style="font-weight:900">${P[2][0]}</text>${[0, 1, 2].map(i => `<circle cx="27" cy="${98 + i * 11}" r="3" fill="#14204A"/>${bar(36, 95 + i * 11, 70 - i * 12)}`).join('')}
        <text x="22" y="144" class="tat s" style="font-weight:900">${P[4][0]}</text>${[0, 1, 2].map(i => `<rect x="22" y="${156 + i * 11}" width="8" height="7" rx="2" fill="#E07A12"/>${bar(36, 157 + i * 11, 100 - i * 14)}`).join('')}
        ${bar(22, 200, 130)}${bar(22, 209, 90)}
        ${P.map(([, y, tag, col], i) => `<g ${tA(.3 + i * .5, 'ta-in')}><path d="M168 ${y - 3}H192" stroke="${col}" stroke-width="2" stroke-dasharray="3 3"/>${w2chip(196, y - 14, lt(`<${tag}>`) + (tag === 'ul' || tag === 'ol' ? ' + li' : ''), col)}</g>`).join('')}`);
    }
  });
}

/* ── unitat 3 ── */
/* Tech Web · unitat 3 «Imatges i enllaços» · animacions de teoria (TANI)
   L'anatomia de <img>, el navegador que va a buscar la imatge, per què importa l'alt, com funciona un enllaç, el salt
   a un id, els drets d'autor, les parts d'una cita i l'esbós d'una fitxa. Dibuixos propis: les imatges són les de Numi
   (img/tech/web, img/chars). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const e = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // codi amb colors (com a l'editor): parts [[text, color], …] escrites una darrere l'altra en lletra de màquina
  const C = { tag: '#7FB8FF', at: '#FFB86B', val: '#7DE3A6', txt: '#E8EEFF' };
  const MONO = 'font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700"';
  const code = (x, y, parts, fs = 14) => { let cx = x; return parts.map(([t, c]) => { const s = `<text x="${cx.toFixed(1)}" y="${y}" ${MONO} font-size="${fs}" fill="${c}">${e(t)}</text>`; cx += t.length * fs * .6; return s; }).join(''); };
  const chip = (x, y, w, parts, fs = 13) => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="#14204A"/>${code(x + 9, y + 18, parts, fs)}`;
  // una finestra de navegador amb la barra de l'adreça
  const win = (x, y, w, h, url, id = '') => `<g ${id}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#C9D4F2" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x} ${y + 12}q0 -12 12 -12h${w - 24}q12 0 12 12v14h-${w}z" fill="#E3E8F6"/><circle cx="${x + 12}" cy="${y + 13}" r="3.5" fill="#EF5A5A"/><circle cx="${x + 23}" cy="${y + 13}" r="3.5" fill="#FFC531"/><circle cx="${x + 34}" cy="${y + 13}" r="3.5" fill="#3CC47C"/>
    ${url != null ? `<rect x="${x + 44}" y="${y + 4}" width="${w - 52}" height="18" rx="9" fill="#fff"/>` : ''}</g>`;
  const urlTxt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" font-size="13" font-weight="600" fill="#5B6B95" font-family="Lexend,system-ui,sans-serif" ${extra}>${e(t)}</text>`;
  const img = (src, x, y, w, h, extra = '') => `<image href="${src}" x="${x}" y="${y}" width="${w}" height="${h}" ${extra}/>`;
  // opacitat a trossos (SMIL): visible entre a i b (fraccions de 5,5 s)
  const vis = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${(a + .01).toFixed(3)};${b};${(b + .01).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const pill = (x, y, w, txt, col) => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="14" fill="${col}"/><text x="${x + w / 2}" y="${y + 19}" text-anchor="middle" class="tat w s">${txt}</text>`;
  const hand = `<g><path d="M0 0q-3 -14 3 -16q5 -1 6 6l1 8q6 -3 9 1q5 -2 7 3q5 -1 6 5v10q0 10 -9 14h-14q-7 -3 -11 -12l-6 -10q-2 -5 3 -6q3 0 5 4z" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2" stroke-linejoin="round"/></g>`;
  const tick = (x, y, ok) => ok ? `<circle cx="${x}" cy="${y}" r="11" fill="#3CC47C"/><path d="M${x - 5} ${y}l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x}" cy="${y}" r="11" fill="#EF5A5A"/><path d="M${x - 4.5} ${y - 4.5}l9 9M${x + 4.5} ${y - 4.5}l-9 9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const W = 'img/tech/web/';

  return {
    // l'etiqueta <img> per dins: l'etiqueta, l'atribut src (on és el fitxer) i l'atribut alt (què hi ha)
    w3attr() {
      const alt = L('Un gat', 'Un gato');
      const line = (y, t) => `<rect x="14" y="${y - 19}" width="182" height="26" rx="7" fill="#FFFFFF" fill-opacity=".13" ${tA(t, 'ta-fade')}/>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="8" width="196" height="96" rx="14" fill="#14204A" filter="url(#bwSh)"/></g>
        ${line(34, .8)}${line(62, 1.5)}${line(90, 2.2)}
        <g ${tA(.3, 'ta-fade')}>${code(20, 34, [['<img', C.tag]])}${code(36, 62, [['src', C.at], ['=', C.txt], ['"gat.svg"', C.val]])}${code(36, 90, [['alt', C.at], ['=', C.txt], [`"${alt}"`, C.val], ['>', C.tag]])}</g>
        <g ${tA(.9)}>${pill(212, 13, 100, L('etiqueta', 'etiqueta'), '#3D7BF4')}</g>
        <g ${tA(1.6)}>${pill(212, 41, 100, L('on és?', '¿dónde está?'), '#F08A24')}</g>
        <g ${tA(2.3)}>${pill(212, 69, 100, L('què és?', '¿qué es?'), '#2FA866')}</g>
        <g ${tA(3, 'ta-in')}>${win(8, 116, 304, 92, '')}${urlTxt(60, 133, 'animalari.numi')}</g>
        <g ${tA(3.5)}>${img(W + 'gat.svg', 28, 144, 70, 60)}</g>
        <g ${tA(3.9, 'ta-in')}><text x="112" y="168" class="tat s">${L('El navegador hi posa', 'El navegador pone')}</text><text x="112" y="188" class="tat s">${L('la imatge del fitxer', 'la imagen del archivo')}</text></g>`);
    },
    // el navegador llegeix src, demana el fitxer al servidor i el dibuixa a la pàgina
    w3src() {
      const req = 'M160 92 C 190 70, 212 70, 236 86', back = 'M236 120 C 212 140, 190 140, 160 122';
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${win(8, 14, 152, 186, '')}${urlTxt(56, 31, 'animalari.numi')}
          <rect x="20" y="46" width="90" height="12" rx="6" fill="#14204A"/><rect x="20" y="66" width="124" height="7" rx="3.5" fill="#D5DCEE"/><rect x="20" y="78" width="100" height="7" rx="3.5" fill="#D5DCEE"/>
          <rect x="26" y="96" width="100" height="76" rx="10" fill="#F3F6FF" stroke="#B8C4E6" stroke-width="2" stroke-dasharray="6 5"/></g>
        <g ${tA(.5, 'ta-pop')}>${chip(10, 168, 148, [['src', C.at], ['=', C.txt], ['"tortuga.svg"', C.val]], 13)}</g>
        <g ${tA(.1, 'ta-in')}><rect x="244" y="44" width="66" height="122" rx="10" fill="#2A3557" filter="url(#bwSh)"/>${[0, 1, 2, 3].map(k => `<rect x="252" y="${54 + k * 26}" width="50" height="18" rx="4" fill="#3B4A73"/><circle cx="292" cy="${63 + k * 26}" r="3" fill="${k % 2 ? '#3CC47C' : '#7FD3F7'}"><animate attributeName="opacity" values="1;.2;1" dur="${1 + k * .3}s" repeatCount="indefinite"/></circle>`).join('')}
          <text x="277" y="186" text-anchor="middle" class="tat s">${L('servidor', 'servidor')}</text></g>
        <path d="${req}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 6" class="ta-dash" opacity=".55"/>
        <path d="${back}" fill="none" stroke="#2FA866" stroke-width="3" stroke-dasharray="6 6" class="ta-dash" opacity=".55"/>
        <g opacity="0">${vis(.18, .42)}<animateMotion dur="${D}s" repeatCount="indefinite" path="${req}" keyPoints="0;0;1;1" keyTimes="0;.18;.4;1" calcMode="linear"/>
          <g transform="translate(-14 -10)"><rect width="28" height="20" rx="3" fill="#FFF3C4" stroke="#B46A00" stroke-width="2"/><path d="M0 1l14 10l14 -10" fill="none" stroke="#B46A00" stroke-width="2"/></g></g>
        <g opacity="0">${vis(.18, .5)}<text x="198" y="62" text-anchor="middle" class="tat s" fill="#2F5BEA">${L('1. demana', '1. pide')}</text></g>
        <g opacity="0">${vis(.46, .7)}<animateMotion dur="${D}s" repeatCount="indefinite" path="${back}" keyPoints="0;0;1;1" keyTimes="0;.46;.68;1" calcMode="linear"/>
          ${img(W + 'tortuga.svg', -22, -16, 44, 30)}</g>
        <g opacity="0">${vis(.46, .94)}<text x="198" y="158" text-anchor="middle" class="tat s" fill="#1E8A50">${L('2. envia', '2. envía')}</text></g>
        <g opacity="0">${vis(.7, .95)}${img(W + 'tortuga.svg', 30, 100, 92, 68)}</g>`);
    },
    // per què importa l'alt: surt quan la imatge no es carrega i el lector de pantalla el llegeix en veu alta
    w3alt() {
      const a = L('Una tortuga verda', 'Una tortuga verde');
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="148" height="160" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <text x="82" y="30" text-anchor="middle" class="tat s">${L('Si no es carrega', 'Si no se carga')}</text></g>
        <g>${vis(0, .3)}${img(W + 'tortuga.svg', 26, 44, 112, 82)}</g>
        <g opacity="0">${vis(.3, .96)}<rect x="22" y="46" width="120" height="84" rx="8" fill="#F3F6FF" stroke="#B8C4E6" stroke-width="2" stroke-dasharray="6 5"/>
          <path d="M30 56h18v14h-18z M33 66l5 -5l4 4l3 -3l3 4" fill="none" stroke="#9AA6C8" stroke-width="2" stroke-linejoin="round"/>
          <text x="82" y="96" text-anchor="middle" class="tat s">${L('Una tortuga', 'Una tortuga')}</text><text x="82" y="114" text-anchor="middle" class="tat s">${L('verda', 'verde')}</text></g>
        <g ${tA(.1, 'ta-in')}><rect x="164" y="8" width="148" height="160" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <text x="238" y="30" text-anchor="middle" class="tat s">${L('Lector de pantalla', 'Lector de pantalla')}</text></g>
        <g ${tA(1.4, 'ta-pop')}>${img('img/ic/headphones.webp', 180, 112, 52, 52)}</g>
        <g ${tA(1.8, 'ta-pop')}><rect x="174" y="38" width="128" height="66" rx="14" fill="#EAF0FF" stroke="#3D7BF4" stroke-width="2"/><path d="M196 103l-4 10l14 -10" fill="#EAF0FF" stroke="#3D7BF4" stroke-width="2" stroke-linejoin="round"/><rect x="192" y="100" width="16" height="4" fill="#EAF0FF"/>
          <text x="238" y="57" text-anchor="middle" class="tat s">${L('«Imatge:', '«Imagen:')}</text><text x="238" y="75" text-anchor="middle" class="tat s">${L('una tortuga', 'una tortuga')}</text><text x="238" y="93" text-anchor="middle" class="tat s">${L('verda»', 'verde»')}</text></g>
        <g ${tA(2.2, 'ta-fade')}>${[0, 1, 2].map(k => `<path d="M${242 + k * 12} ${122 - k * 4}q8 14 0 ${28 + k * 8}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round"><animate attributeName="opacity" values=".2;1;.2" dur="1.2s" begin="${k * .2}s" repeatCount="indefinite"/></path>`).join('')}</g>
        <g ${tA(.4, 'ta-in')}>${chip(52, 178, 216, [['alt', C.at], ['=', C.txt], [`"${a}"`, C.val]], 13.5)}</g>`);
    },
    // un enllaç: el dit toca «La tortuga» i el navegador va a la pàgina tortuga.html
    w3link() {
      const A = `<g>${vis(0, .46)}${urlTxt(66, 29, 'animalari.numi')}
          <text x="34" y="64" class="tat b">L'Animalari</text><text x="34" y="88" class="tat s" fill="#5B6B95">${L('Tria un animal:', 'Elige un animal:')}</text>
          <circle cx="40" cy="104" r="3.5" fill="#14204A"/><text x="52" y="109" class="tat" fill="#1F5BD8">${L('La tortuga', 'La tortuga')}</text><path d="M52 113h${L('La tortuga', 'La tortuga').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          <circle cx="40" cy="128" r="3.5" fill="#14204A"/><text x="52" y="133" class="tat" fill="#1F5BD8">${L('La guineu', 'El zorro')}</text><path d="M52 137h${L('La guineu', 'El zorro').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          <circle cx="40" cy="152" r="3.5" fill="#14204A"/><text x="52" y="157" class="tat" fill="#1F5BD8">${L('El lloro', 'El loro')}</text><path d="M52 161h${L('El lloro', 'El loro').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          ${chip(34, 172, 168, [['href', C.at], ['=', C.txt], ['"tortuga.html"', C.val]], 13)}</g>`;
      const B = `<g opacity="0">${vis(.48, .97)}${urlTxt(66, 29, 'animalari.numi/tortuga.html')}
          <text x="34" y="64" class="tat b">${L('La tortuga', 'La tortuga')}</text>${img(W + 'tortuga.svg', 34, 76, 120, 88)}
          <text x="172" y="110" class="tat s">${L('Viu molts', 'Vive muchos')}</text><text x="172" y="128" class="tat s">${L('anys.', 'años.')}</text>
          <text x="34" y="190" class="tat s" fill="#1F5BD8">← ${L('Torna a la portada', 'Vuelve a la portada')}</text></g>`;
      return tSvg(214, `${win(16, 8, 288, 198, '')}${A}${B}
        <g opacity="0">${vis(.36, .46)}<circle cx="96" cy="104" r="10" fill="#3D7BF4" opacity=".25"><animate attributeName="r" values="6;18" dur=".6s" repeatCount="indefinite"/></circle></g>
        <g>${vis(.1, .47)}<animateTransform attributeName="transform" type="translate" values="250 200;250 200;96 108;96 108;96 108" keyTimes="0;.12;.32;.47;1" dur="${D}s" repeatCount="indefinite"/>${hand}</g>`);
    },
    // enllaç intern: l'índex té href="#menja" i la pàgina salta fins a l'element amb id="menja"
    w3jump() {
      const page = `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -232;0 -232;0 0" keyTimes="0;.34;.46;.95;1" dur="${D}s" repeatCount="indefinite"/>
          <text x="140" y="62" class="tat b">${L('La balena', 'La ballena')}</text>
          <text x="140" y="86" class="tat s" fill="#1F5BD8">${L('On viu', 'Dónde vive')}</text><path d="M140 90h${L('On viu', 'Dónde vive').length * 7.6}" stroke="#1F5BD8" stroke-width="1.8"/>
          <text x="140" y="108" class="tat s" fill="#1F5BD8">${L('Què menja', 'Qué come')}</text><path d="M140 112h${L('Què menja', 'Qué come').length * 7.6}" stroke="#1F5BD8" stroke-width="1.8"/>
          ${img(W + 'balena.svg', 140, 122, 150, 94)}
          <text x="140" y="240" class="tat">${L('On viu', 'Dónde vive')}</text>${[0, 1, 2].map(k => `<rect x="140" y="${252 + k * 14}" width="${[150, 126, 140][k]}" height="7" rx="3.5" fill="#D5DCEE"/>`).join('')}
          <rect x="132" y="276" width="168" height="34" rx="8" fill="#FFC531" opacity="0"><animate attributeName="opacity" values="0;0;.45;0;0" keyTimes="0;.46;.52;.7;1" dur="${D}s" repeatCount="indefinite"/></rect>
          <text x="140" y="300" class="tat">${L('Què menja', 'Qué come')}</text>${[0, 1, 2, 3].map(k => `<rect x="140" y="${312 + k * 14}" width="${[146, 120, 150, 90][k]}" height="7" rx="3.5" fill="#D5DCEE"/>`).join('')}
          <text x="140" y="396" class="tat">${L('Fonts', 'Fuentes')}</text></g>`;
      return tSvg(214, `<defs><clipPath id="w3jc"><rect x="126" y="34" width="184" height="172" rx="4"/></clipPath></defs>
        ${win(122, 8, 192, 200, '')}${urlTxt(170, 25, 'balena.html')}
        <g clip-path="url(#w3jc)">${page}</g>
        <g>${vis(.08, .4)}<animateTransform attributeName="transform" type="translate" values="290 210;290 210;${152 + L('Què menja', 'Qué come').length * 3} 112;${152 + L('Què menja', 'Qué come').length * 3} 112" keyTimes="0;.1;.28;1" dur="${D}s" repeatCount="indefinite"/>${hand}</g>
        <g opacity="0">${vis(.12, .46)}${chip(2, 92, 118, [['href', C.at], ['=', C.txt], ['"#menja"', C.val]], 13)}<path d="M118 105h12" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/></g>
        <g opacity="0">${vis(.4, .52)}<text x="60" y="80" text-anchor="middle" class="tat b" fill="#F08A24">${L('salta!', '¡salta!')}</text></g>
        <g opacity="0">${vis(.5, .95)}${chip(14, 50, 102, [['id', C.at], ['=', C.txt], ['"menja"', C.val]], 13)}<path d="M118 63h12" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/>
          <text x="64" y="104" text-anchor="middle" class="tat s">${L('el mateix', 'el mismo')}</text><text x="64" y="122" text-anchor="middle" class="tat s">${L('nom, sense #', 'nombre, sin #')}</text></g>`);
    },
    // drets d'autor: qui crea una obra n'és l'autor/a i decideix com es fa servir
    w3copy() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><path d="M66 98l-16 36M148 98l16 36M107 98v38" stroke="#B57536" stroke-width="5" stroke-linecap="round"/>
          <rect x="40" y="8" width="134" height="96" rx="6" fill="#fff" stroke="#B57536" stroke-width="5"/></g>
        <g ${tA(.5, 'ta-pop')}>${img(W + 'guineu.svg', 56, 14, 102, 70)}</g>
        <g ${tA(1.1, 'ta-in')}><text x="107" y="97" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="13" font-weight="700" fill="#7A4A1E">${L('Dibuix: Guida', 'Dibujo: Guida')}</text></g>
        <g ${tA(.3, 'ta-pop')}>${img('img/chars/guida-happy.webp', 180, 38, 72, 72)}</g>
        <g ${tA(1.6, 'ta-pop')}><circle cx="278" cy="40" r="24" fill="#FFC531" stroke="#B46A00" stroke-width="3"/><text x="278" y="50" text-anchor="middle" font-size="28" font-weight="900" fill="#7A4A00" font-family="Lexend,system-ui,sans-serif">©</text></g>
        <g ${tA(1.9, 'ta-in')}><text x="278" y="86" text-anchor="middle" class="tat s">${L("és d'ella", 'es suyo')}</text></g>
        <g ${tA(2.4, 'ta-in')}>${tick(26, 150, true)}<text x="44" y="155" class="tat s">${L('Demanar permís', 'Pedir permiso')}</text></g>
        <g ${tA(2.9, 'ta-in')}>${tick(26, 174, true)}<text x="44" y="179" class="tat s">${L("Dir qui l'ha fet", 'Decir quién lo hizo')}</text></g>
        <g ${tA(3.5, 'ta-in')}><rect x="12" y="186" width="296" height="24" rx="12" fill="#FDEBEB"/>${tick(26, 198, false)}<text x="44" y="203" class="tat s">${L('Copiar-lo i dir que és teu', 'Copiarlo y decir que es tuyo')}</text></g>`);
    },
    // les quatre preguntes d'una cita: qui, què, on i quan
    w3cite() {
      const rows = [[L('Qui?', '¿Quién?'), 'Club de Naturalistes', '#3D7BF4'], [L('Què?', '¿Qué?'), L("«Les tortugues de l'illa»", '«Las tortugas de la isla»'), '#8B5CF6'],
        [L('On?', '¿Dónde?'), 'exemple.numi/tortugues', '#2FA866'], [L('Quan?', '¿Cuándo?'), L("el 3 d'octubre", 'el 3 de octubre'), '#F08A24']];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="118" y="8" width="196" height="198" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><text x="216" y="30" text-anchor="middle" class="tat b">${L('Font', 'Fuente')}</text></g>
        ${rows.map(([q, a, c], i) => `${tCard(6, 42 + i * 42, 104, 34, i + 1, q, .4 + i * .7, c)}
          <g ${tA(.7 + i * .7, 'ta-in')}><path d="M112 ${59 + i * 42}h12" stroke="${c}" stroke-width="3" stroke-linecap="round"/><text x="130" y="${64 + i * 42}" class="tat s"${i === 2 ? ' fill="#1F5BD8" text-decoration="underline"' : ''}>${a}</text></g>`).join('')}
        <g ${tA(3.7, 'ta-wob')}><circle cx="292" cy="26" r="13" fill="#3CC47C"/><path d="M285 26l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // l'esbós en paper de la fitxa (cada caixa, una part) i la pàgina acabada
    w3plan() {
      const box = (y, h, t, lab, extra = '') => `<g ${tA(t, 'ta-in')}><rect x="22" y="${y}" width="112" height="${h}" rx="5" fill="none" stroke="#6A5A3A" stroke-width="2" stroke-dasharray="${extra ? '0' : '5 3'}"/>${extra}<text x="78" y="${y + h / 2 + 5}" text-anchor="middle" class="tat s" fill="#6A5A3A">${lab}</text></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="10" y="8" width="136" height="198" rx="6" fill="#FFF8E6" stroke="#E6CF9A" stroke-width="2" transform="rotate(-1.5 78 107)"/></g>
        ${box(18, 22, .4, 'h1')}${box(46, 52, .9, 'figure', '<path d="M30 52l96 40M126 52l-96 40" stroke="#C9B48A" stroke-width="1.5"/>')}${box(104, 18, 1.4, L('índex #', 'índice #'))}
        ${box(128, 24, 1.9, 'ul + strong')}${box(158, 18, 2.4, 'h2 id')}${box(182, 18, 2.9, L('fonts', 'fuentes'))}
        <g ${tA(3.3, 'ta-in')}><path d="M154 107h20" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/><path d="M170 97l10 10-10 10" fill="none" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.7, 'ta-pop')}>${win(186, 8, 128, 198, null)}
          <text x="196" y="50" class="tat b">${L('El lloro', 'El loro')}</text>${img(W + 'lloro.svg', 196, 58, 80, 60)}<rect x="196" y="122" width="80" height="6" rx="3" fill="#C9D4F2"/>
          <text x="196" y="146" class="tat s" fill="#1F5BD8">${L('Què menja', 'Qué come')}</text>
          ${[0, 1, 2].map(k => `<circle cx="200" cy="${160 + k * 13}" r="2.5" fill="#14204A"/><rect x="207" y="${157 + k * 13}" width="${[70, 84, 60][k]}" height="6" rx="3" fill="#D5DCEE"/>`).join('')}</g>`);
    }
  };
})());

/* ── unitat 4 ── */
/* Tech Web · unitat 4 «CSS» · animacions de teoria (TANI)
   HTML i CSS (què hi ha i com es veu), les parts d'una regla, la llum de la pantalla (rgb), el codi hex, el contrast,
   les classes, les famílies de lletra i l'id (l'element únic). */
Object.assign(TANI, (() => {
  // text de codi (monoespaiat) i text de color: sense la classe «tat», perquè el CSS de .tat no en tapi el color
  const mono = (x, y, t, fill = '#14204A', size = 15, extra = '') => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700" font-size="${size}" fill="${fill}" ${extra}>${t}</text>`;
  const lab = (x, y, t, fill = '#14204A', size = 14, anchor = 'middle', extra = '') => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Lexend,system-ui,sans-serif" font-weight="800" font-size="${size}" fill="${fill}" ${extra}>${t}</text>`;
  // opacitat per trams: el tram i de n es veu (animació discreta, en bucle)
  const seg = (i, n, D, on = [i]) => `<animate attributeName="opacity" values="${Array.from({ length: n }, (_, k) => on.includes(k) ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>`;
  const kt = n => Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';');
  // una finestra de navegador petita (targeta blanca amb la barra de dalt)
  const win = (x, y, w, h, bg = '#fff', st = '#DCE4FA') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${st}" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x + 1} ${y + 22}V${y + 12}a11 11 0 0 1 11 -11H${x + w - 12}a11 11 0 0 1 11 11V${y + 22}Z" fill="#E3E8F6"/>
    <circle cx="${x + 12}" cy="${y + 11}" r="3.2" fill="#EF5A5A"/><circle cx="${x + 22}" cy="${y + 11}" r="3.2" fill="#FFC531"/><circle cx="${x + 32}" cy="${y + 11}" r="3.2" fill="#3CC47C"/>`;
  const tick = (cx, cy, ok, t) => `<g ${tA(t)}><circle cx="${cx}" cy="${cy}" r="12" fill="${ok ? '#2E9E5B' : '#D93A3A'}" stroke="#fff" stroke-width="2.5"/>${ok ? `<path d="M${cx - 5.5} ${cy}l3.8 4l7 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${cx - 4.5} ${cy - 4.5}l9 9M${cx + 4.5} ${cy - 4.5}l-9 9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
  // una samarreta (per a la classe i l'id)
  const shirt = (cx, cy, col, n) => `<path d="M${cx - 12} ${cy - 24}L${cx - 28} ${cy - 15}L${cx - 21} ${cy - 1}L${cx - 14} ${cy - 5}V${cy + 26}H${cx + 14}V${cy - 5}L${cx + 21} ${cy - 1}L${cx + 28} ${cy - 15}L${cx + 12} ${cy - 24}Q${cx} ${cy - 13} ${cx - 12} ${cy - 24}Z" fill="${col}" stroke="#0D3C8C" stroke-width="2.2" stroke-linejoin="round"/>
    <text x="${cx}" y="${cy + 12}" text-anchor="middle" class="tat w b">${n}</text>`;
  return {
    // l'HTML diu què hi ha; el CSS, com es veu (la mateixa pàgina, abans i després)
    w4split() {
      const bars = (x, y, c, ws) => ws.map((w, k) => `<rect x="${x}" y="${y + k * 12}" width="${w}" height="7" rx="3.5" fill="${c}"/>`).join('');
      const list = (x, y, dot, bar) => [0, 1, 2].map(k => `<circle cx="${x}" cy="${y + k * 14}" r="3.6" fill="${dot}"/><rect x="${x + 9}" y="${y + k * 14 - 3.5}" width="${[62, 48, 56][k]}" height="7" rx="3.5" fill="${bar}"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${win(8, 12, 130, 152)}
          <text x="20" y="54" class="tat">Festa major</text>${bars(20, 66, '#C9CFDB', [100, 78])}${list(25, 104, '#9AA3B8', '#C9CFDB')}</g>
        <g ${tA(1.2)}><rect x="146" y="58" width="30" height="36" rx="5" fill="#fff" stroke="#C2185B" stroke-width="2.2"/><path d="M168 58v8h8" fill="none" stroke="#C2185B" stroke-width="2.2"/>
          ${mono(161, 86, 'CSS', '#C2185B', 9.5, 'text-anchor="middle"')}<path d="M146 112H172" stroke="#C2185B" stroke-width="3" stroke-linecap="round"/><path d="M166 105l8 7l-8 7" fill="none" stroke="#C2185B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2, 'ta-in')}>${win(182, 12, 130, 152, '#FFF4D6', '#F3D58A')}</g>
        <g ${tA(2.5, 'ta-fade')}><rect x="183" y="34" width="128" height="34" fill="#C2185B"/><text x="247" y="57" text-anchor="middle" class="tat w">Festa major</text></g>
        <g ${tA(2.9, 'ta-fade')}>${bars(196, 78, '#A1887F', [100, 78]).replace(/<rect x="196"/g, '<rect x="197"')}</g>
        <g ${tA(3.3, 'ta-fade')}>${list(201, 116, '#C2185B', '#8D6E63')}</g>
        <g ${tA(3.9)}><path d="M286 150l3 -8l3 8l8 3l-8 3l-3 8l-3 -8l-8 -3z" fill="#FFC531"/></g>
        ${lab(73, 188, 'HTML', '#1565C0', 16)}<text x="73" y="207" text-anchor="middle" class="tat s">${L('què hi ha', 'qué hay')}</text>
        <g ${tA(2)}>${lab(247, 188, 'CSS', '#C2185B', 16)}<text x="247" y="207" text-anchor="middle" class="tat s">${L('com es veu', 'cómo se ve')}</text></g>`);
    },
    // les parts d'una regla: selector { propietat: valor; }
    w4rule() {
      const cw = 13.25, x0 = 34, X = i => x0 + i * cw, cx = (i, n) => X(i) + n * cw / 2;
      const tok = (i, t, c, at) => `<g ${tA(at)}>${mono(X(i), 113, t, c, 22)}</g>`;
      const up = (x, t, c, at) => `<g ${tA(at)}><path d="M${x} 56V84" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/>${lab(x, 48, t, c, 14)}</g>`;
      const down = (x, y, t, c, at) => `<g ${tA(at)}><path d="M${x} 134V${y - 15}" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/>${lab(x, y, t, c, 13.5)}</g>`;
      return tSvg(226, `<rect x="16" y="84" width="288" height="48" rx="14" fill="#14204A"/>
        ${tok(0, 'h1', '#FF8FB8', .3)}${up(cx(0, 2), 'selector', '#C2185B', .3)}
        ${tok(3, '{', '#FFFFFF', .9)}${down(cx(3, 1), 168, L('obre', 'abre'), '#14204A', .9)}
        ${tok(5, 'color', '#8FC7FF', 1.5)}${up(cx(5, 5), L('propietat', 'propiedad'), '#1565C0', 1.5)}
        ${tok(10, ':', '#FFFFFF', 2)}${down(cx(10, 1), 168, L('dos punts', 'dos puntos'), '#14204A', 2)}
        ${tok(12, 'navy', '#9BE7A4', 2.5)}${up(cx(12, 4), 'valor', '#2E7D32', 2.5)}
        ${tok(16, ';', '#FFFFFF', 3)}${down(cx(16, 1), 196, L('punt i coma', 'punto y coma'), '#14204A', 3)}
        ${tok(18, '}', '#FFFFFF', 3.5)}${down(cx(18, 1), 168, L('tanca', 'cierra'), '#14204A', 3.5)}
        <g ${tA(4.1, 'ta-fade')}>${mono(160, 219, L('selector { propietat: valor; }', 'selector { propiedad: valor; }'), '#5A6BA0', 13, 'text-anchor="middle"')}</g>`);
    },
    // la pantalla barreja llum: rgb(vermell, verd, blau), de 0 a 255
    w4rgb() {
      const S = [[255, 0, 0, L('vermell', 'rojo')], [0, 255, 0, L('verd', 'verde')], [0, 0, 255, L('blau', 'azul')], [255, 255, 0, L('groc', 'amarillo')], [0, 255, 255, L('cian', 'cian')], [255, 255, 255, L('blanc', 'blanco')], [255, 136, 0, L('taronja', 'naranja')]];
      const n = S.length, D = `dur="${n}s" repeatCount="indefinite"`, K = kt(n);
      const row = (k, y, col, letter) => `<circle cx="26" cy="${y}" r="13" fill="${col}"/><text x="26" y="${y + 5}" text-anchor="middle" class="tat w">${letter}</text>
        <rect x="48" y="${y - 8}" width="140" height="16" rx="8" fill="#E8ECF6"/>
        <rect x="48" y="${y - 8}" width="${S[0][k] / 255 * 140}" height="16" rx="8" fill="${col}"><animate attributeName="width" values="${S.map(s => (s[k] / 255 * 140).toFixed(1)).join(';')}" keyTimes="${K}" calcMode="discrete" ${D}/></rect>
        ${S.map((s, i) => `<g opacity="${i ? 0 : 1}">${seg(i, n, D)}${mono(198, y + 5, s[k], '#14204A', 15)}</g>`).join('')}`;
      return tSvg(214, `<rect x="6" y="14" width="222" height="146" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${row(0, 44, '#E53935', 'R')}${row(1, 87, '#2E9E5B', 'G')}${row(2, 130, '#1E63D6', 'B')}
        <rect x="238" y="14" width="74" height="146" rx="16" fill="rgb(255,0,0)" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"><animate attributeName="fill" values="${S.map(s => `rgb(${s[0]},${s[1]},${s[2]})`).join(';')}" keyTimes="${K}" calcMode="discrete" ${D}/></rect>
        ${S.map((s, i) => `<g opacity="${i ? 0 : 1}">${seg(i, n, D)}${mono(160, 186, `rgb(${s[0]}, ${s[1]}, ${s[2]})`, '#14204A', 17, 'text-anchor="middle"')}<text x="160" y="208" text-anchor="middle" class="tat s">= ${s[3]}</text></g>`).join('')}`);
    },
    // el codi hex: # i tres parelles (vermell, verd, blau), de 00 a FF
    w4hex() {
      const cols = [['FF', 80.5, '#E53935', 255, 60, .4], ['88', 132.5, '#2E9E5B', 136, 112, 1.2], ['00', 184.5, '#1E63D6', 0, 164, 2]];
      return tSvg(214, `${mono(34, 56, '#', '#14204A', 34)}
        ${cols.map(([t, cx, c, v, x, at]) => `<g ${tA(at)}>${mono(x, 56, t, c, 34)}<rect x="${cx - 20}" y="64" width="40" height="5" rx="2.5" fill="${c}"/>
          <path d="M${cx} 74V88" stroke="${c}" stroke-width="2.4"/><path d="M${cx - 5} 83l5 6l5 -6" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          ${lab(cx, 110, v, '#14204A', 16)}<rect x="${cx - 9}" y="120" width="18" height="52" rx="6" fill="#E8ECF6"/><rect x="${cx - 9}" y="${120 + 52 - v / 255 * 52}" width="18" height="${v / 255 * 52}" rx="6" fill="${c}"/></g>`).join('')}
        <g ${tA(3)}><rect x="230" y="18" width="80" height="62" rx="14" fill="#FF8800" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><text x="270" y="102" text-anchor="middle" class="tat s">${L('taronja', 'naranja')}</text></g>
        <g ${tA(3.8)}><rect x="232" y="122" width="16" height="16" rx="4" fill="#000"/>${mono(254, 135, '#000000', '#14204A', 13)}
          <rect x="232" y="150" width="16" height="16" rx="4" fill="#fff" stroke="#9AA3B8" stroke-width="1.5"/>${mono(254, 163, '#FFFFFF', '#14204A', 13)}</g>
        <text x="132" y="202" text-anchor="middle" class="tat s">${L('00 = apagada · FF = al màxim', '00 = apagada · FF = al máximo')}</text>`);
    },
    // el contrast: el text s'ha de poder llegir sobre el fons
    w4contrast() {
      const card = (x, y, bg, fg, ok, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="146" height="80" rx="14" fill="${bg}" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${lab(x + 73, y + 47, 'Festa major', fg, 19)}</g>${tick(x + 134, y + 10, ok, t + .5)}`;
      return tSvg(214, `${card(10, 12, '#FFFFFF', '#FFF176', false, .2)}${card(164, 12, '#BDBDBD', '#9E9E9E', false, .9)}
        ${card(10, 102, '#FFF4D6', '#14204A', true, 1.6)}${card(164, 102, '#1D2433', '#FFD54A', true, 2.3)}
        <g ${tA(3.2, 'ta-fade')}><text x="160" y="206" text-anchor="middle" class="tat s">${L('Fosc sobre clar o clar sobre fosc', 'Oscuro sobre claro o claro sobre oscuro')}</text></g>`);
    },
    // una classe: la regla .avis només pinta els elements que porten class="avis"
    w4class() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const rows = [[true, L('Porta la bossa!', '¡Trae la bolsa!')], [false, L('Hi haurà música', 'Habrá música')], [true, L('Gossos lligats', 'Perros atados')], [false, L('A les 10 h', 'A las 10 h')]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="6" width="300" height="56" rx="12" fill="#14204A"/>
          ${mono(24, 29, '.avis', '#FF8FB8', 14)}${mono(75, 29, '{', '#FFFFFF', 14)}
          ${mono(40, 50, 'background-color:', '#8FC7FF', 14)}${mono(194, 50, 'gold', '#9BE7A4', 14)}${mono(228, 50, '; }', '#FFFFFF', 14)}</g>
        ${rows.map(([av, t], k) => { const y = 72 + k * 34; return `<g ${tA(.6 + k * .25, 'ta-in')}><rect x="10" y="${y}" width="268" height="28" rx="9" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          ${av ? `<rect x="10" y="${y}" width="268" height="28" rx="9" fill="#FFD54A" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.46;.93;1" ${D}/></rect>` : ''}
          ${mono(20, y + 19, av ? '&lt;p class="avis"&gt;' : '&lt;p&gt;', av ? '#C2185B' : '#5A6BA0', 13)}<text x="156" y="${y + 19}" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(1.8)}><path d="M296 62C312 70 306 80 284 86" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="4 4"/><path d="M291 80l-8 6l9 3" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M300 62C320 100 314 142 284 154" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="4 4"/><path d="M292 148l-8 6l9 3" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // quatre famílies de lletra que té qualsevol ordinador
    w4font() {
      const F = [['serif', 'serif'], ['sans-serif', 'sans-serif'], ['monospace', 'monospace'], ['cursive', 'cursive']];
      return tSvg(214, F.map(([f, name], k) => { const y = 8 + k * 50; return `<g ${tA(.3 + k * .7, 'ta-in')}><rect x="10" y="${y}" width="300" height="42" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="24" y="${y + 29}" font-family="${f}" font-size="23" fill="#14204A">${L('Hola, món!', '¡Hola, mundo!')}</text>
        <rect x="${300 - name.length * 8.4 - 14}" y="${y + 10}" width="${name.length * 8.4 + 8}" height="22" rx="7" fill="#EAF0FF"/>${mono(296, y + 26, name, '#1565C0', 14, 'text-anchor="end"')}</g>`; }).join(''));
    },
    // classe = la samarreta de l'equip (en porten moltes); id = el braçalet de capità (només un)
    w4id() {
      const xs = [46, 122, 198, 274];
      return tSvg(214, `${xs.map((x, k) => `<g ${tA(.2 + k * .3)}>${shirt(x, 62, '#1E88E5', k + 1)}</g>`).join('')}
        <g ${tA(1.6, 'ta-fade')}><path d="M18 104V112H302V104" fill="none" stroke="#C2185B" stroke-width="2.4" stroke-linejoin="round"/>
          ${mono(18, 142, '.blau', '#C2185B', 15)}<text x="82" y="142" class="tat s">${L('→ les 4: la porten molts', '→ las 4: la llevan muchos')}</text></g>
        <g ${tA(3)}><circle cx="198" cy="62" r="40" fill="none" stroke="#FFC531" stroke-width="3" stroke-dasharray="5 5"/><g transform="rotate(-28 178 50)"><rect x="169" y="44" width="19" height="12" rx="3" fill="#FFD54A" stroke="#B88A00" stroke-width="1.6"/><text x="178.5" y="54" text-anchor="middle" font-family="Lexend,system-ui,sans-serif" font-weight="900" font-size="10" fill="#7A5200">C</text></g>
          ${mono(18, 176, '#capita', '#C2185B', 15)}<text x="96" y="176" class="tat s">${L('→ només 1: és únic', '→ solo 1: es único')}</text></g>
        <g ${tA(3.6, 'ta-fade')}><text x="160" y="207" text-anchor="middle" class="tat s">${L('class="blau" · id="capita"', 'class="blau" · id="capita"')}</text></g>`);
    }
  };
})());

/* ── unitat 5 ── */
/* Tech Web · unitat 5 «Caixes» · animacions de teoria (tot és una caixa, les quatre capes, el quadre a la paret,
   padding i margin, l'ordre del rellotge, les cantonades rodones, les ombres i l'amplada total) */
Object.assign(TANI, {
  // tot és una caixa: amb «raigs X» es veuen les caixes de cada element de la pàgina
  w5box() {
    const tag = (x, y, t, c, d) => `<g ${tA(d)}><rect x="${x}" y="${y}" width="${t.length * 9 + 14}" height="20" rx="6" fill="${c}"/><text x="${x + 7}" y="${y + 15}" class="tat w s" style="font-family:ui-monospace,Menlo,Consolas,monospace">${t}</text></g>`;
    const box = (x, y, w, h, c, d) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 4" ${tA(d, 'ta-in')}/>`;
    return tSvg(214, `<rect x="16" y="6" width="288" height="180" rx="14" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>
      <path d="M16 20 Q16 6 30 6 H290 Q304 6 304 20 V28 H16Z" fill="#E3E8F6"/><circle cx="30" cy="17" r="4" fill="#EF5A5A"/><circle cx="43" cy="17" r="4" fill="#FFC531"/><circle cx="56" cy="17" r="4" fill="#3CC47C"/>
      <rect x="70" y="11" width="150" height="12" rx="6" fill="#fff"/>
      <rect x="34" y="40" width="150" height="16" rx="5" fill="#14204A"/>
      <rect x="34" y="72" width="226" height="7" rx="3.5" fill="#9AA6C6"/><rect x="34" y="84" width="170" height="7" rx="3.5" fill="#9AA6C6"/>
      <g><rect x="34" y="106" width="96" height="58" rx="6" fill="#9FDBFF"/><path d="M34 158 L66 124 L86 144 L100 132 L130 160 V164 H34Z" fill="#7CC456"/><circle cx="114" cy="120" r="8" fill="#FFD54A"/></g>
      <rect x="34" y="172" width="120" height="7" rx="3.5" fill="#9AA6C6"/>
      ${box(26, 34, 270, 28, '#2F5BEA', .4)}${tag(250, 38, 'h1', '#2F5BEA', .6)}
      ${box(26, 66, 270, 31, '#E5489A', 1.1)}${tag(258, 71, 'p', '#E5489A', 1.3)}
      ${box(28, 101, 108, 68, '#F08A24', 1.8)}${tag(142, 106, 'img', '#F08A24', 2)}
      ${box(26, 168, 270, 15, '#8B5CF6', 2.5)}
      <text x="160" y="207" text-anchor="middle" class="tat b" ${tA(3, 'ta-fade')}>${L('Cada element és una caixa!', '¡Cada elemento es una caja!')}</text>`);
  },
  // les quatre capes d'una caixa, de dins cap a fora: contingut, padding, border i margin
  w5layers() {
    return tSvg(214, `<g ${tA(2.3, 'ta-in')}><rect x="14" y="8" width="292" height="172" rx="12" fill="#FFF4E6" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="7 5"/>
        <text x="160" y="26" text-anchor="middle" class="tat s" style="fill:#B4501A">margin</text></g>
      <g ${tA(1.6, 'ta-in')}><rect x="38" y="32" width="244" height="124" rx="10" fill="#14204A"/>
        <text x="160" y="47" text-anchor="middle" class="tat w s">border</text></g>
      <g ${tA(.9, 'ta-in')}><rect x="54" y="50" width="212" height="90" rx="4" fill="#C9F0D8"/>
        <text x="160" y="67" text-anchor="middle" class="tat s" style="fill:#147A47">padding</text></g>
      <g ${tA(.2, 'ta-pop')}><rect x="78" y="74" width="164" height="50" rx="4" fill="#9FD0FF" stroke="#2F5BEA" stroke-width="2"/>
        <text x="160" y="104" text-anchor="middle" class="tat b">${L('contingut', 'contenido')}</text></g>
      <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('De dins cap a fora', 'De dentro hacia fuera')}</text>`);
  },
  // com un quadre penjat a la paret: la pintura, el paspartú, el marc i l'espai de la paret
  w5frame() {
    const row = (y, c, b, s, d, extra = '') => `<g ${tA(d, 'ta-in')}><rect x="178" y="${y - 20}" width="138" height="40" rx="10" fill="#fff" stroke="${c}" stroke-width="2"/><rect x="186" y="${y - 8}" width="16" height="16" rx="4" fill="${c}" ${extra}/><text x="210" y="${y - 2}" class="tat b" style="font-size:14px">${b}</text><text x="210" y="${y + 13}" class="tat s" style="font-size:13px">${s}</text></g>`;
    return tSvg(214, `<rect x="0" y="0" width="172" height="214" rx="16" fill="#F6EAD7"/>
      <rect x="8" y="14" width="156" height="186" rx="6" fill="none" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="7 5" ${tA(3, 'ta-fade')}/>
      <rect x="24" y="30" width="124" height="154" rx="4" fill="#9A6538" stroke="#6B3F20" stroke-width="2" ${tA(2.2, 'ta-in')}/>
      <rect x="36" y="42" width="100" height="130" fill="#FFFDF6" ${tA(1.4, 'ta-in')}/>
      <g ${tA(.4, 'ta-pop')} transform="translate(-4 0)"><rect x="56" y="58" width="70" height="98" fill="#9FDBFF"/><path d="M56 156 V128 L76 108 L92 124 L104 114 L126 136 V156Z" fill="#7CC456"/><circle cx="108" cy="78" r="9" fill="#FFD54A"/></g>
      ${row(32, '#2F5BEA', L('contingut', 'contenido'), L('la pintura', 'la pintura'), .6)}
      ${row(82, '#C9B48A', 'padding', L('el paspartú', 'el paspartú'), 1.6)}
      ${row(132, '#9A6538', 'border', L('el marc', 'el marco'), 2.4)}
      ${row(182, '#F08A24', 'margin', L('aire a la paret', 'aire en la pared'), 3.2)}`);
  },
  // padding (espai de dins: la caixa creix i el color de fons hi arriba) i margin (espai de fora: separa les caixes)
  w5pad() {
    const D = 'dur="5.5s" repeatCount="indefinite"', K = 'keyTimes="0;.12;.45;.9;1"';
    const lines = (x, y) => `<rect x="${x}" y="${y}" width="64" height="7" rx="3.5" fill="#6B5A1E"/><rect x="${x}" y="${y + 14}" width="48" height="7" rx="3.5" fill="#6B5A1E"/><rect x="${x}" y="${y + 28}" width="58" height="7" rx="3.5" fill="#6B5A1E"/>`;
    return tSvg(220, `<rect x="6" y="6" width="150" height="208" rx="16" fill="#EEF7F1"/><rect x="164" y="6" width="150" height="208" rx="16" fill="#FFF4E6"/>
      <text x="81" y="30" text-anchor="middle" class="tat b" style="font-family:ui-monospace,Menlo,Consolas,monospace">padding</text>
      <text x="239" y="30" text-anchor="middle" class="tat b" style="font-family:ui-monospace,Menlo,Consolas,monospace">margin</text>
      <rect x="44" y="84" width="74" height="54" rx="6" fill="#FFE36E" stroke="#C9A21B" stroke-width="2">
        <animate attributeName="x" values="44;44;20;20;44" ${K} ${D}/><animate attributeName="y" values="84;84;60;60;84" ${K} ${D}/>
        <animate attributeName="width" values="74;74;122;122;74" ${K} ${D}/><animate attributeName="height" values="54;54;102;102;54" ${K} ${D}/></rect>
      ${lines(49, 90)}
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.48;.88;.92" ${D}/>
        <path d="M81 64 V82 M81 156 V140 M24 111 H42 M138 111 H120" stroke="#1FA463" stroke-width="3.5" stroke-linecap="round"/></g>
      <text x="81" y="186" text-anchor="middle" class="tat s">${L('espai de dins', 'espacio de dentro')}</text>
      <text x="81" y="204" text-anchor="middle" class="tat s" style="fill:#147A47">${L('amb el color de fons', 'con el color de fondo')}</text>
      <rect x="186" y="42" width="106" height="50" rx="6" fill="#9FD0FF" stroke="#2F5BEA" stroke-width="2"/><text x="239" y="72" text-anchor="middle" class="tat s">${L('caixa 1', 'caja 1')}</text>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 28;0 28;0 0" ${K} ${D}/>
        <rect x="186" y="92" width="106" height="50" rx="6" fill="#FFB8D2" stroke="#E5489A" stroke-width="2"/><text x="239" y="122" text-anchor="middle" class="tat s">${L('caixa 2', 'caja 2')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.48;.88;.92" ${D}/>
        <path d="M239 96 V118" stroke="#F08A24" stroke-width="3.5" stroke-linecap="round"/><path d="M233 100 l6 -6 l6 6 M233 114 l6 6 l6 -6" fill="none" stroke="#F08A24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="239" y="186" text-anchor="middle" class="tat s">${L('espai de fora', 'espacio de fuera')}</text>
      <text x="239" y="204" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('transparent', 'transparente')}</text>`);
  },
  // quatre valors, en l'ordre de les agulles del rellotge: dalt, dreta, baix i esquerra
  w5clock() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"';
    const C = ['#2F5BEA', '#E5489A', '#1FA463', '#F08A24'], T = [.01, .25, .5, .75];
    // tot amb SMIL (el mateix rellotge): l'agulla, el costat i el valor s'encenen alhora
    const on = i => `opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${T[i]};${T[i] + .02};.95;1" ${D}/`;
    const side = ['M82 72 H162', 'M162 72 V152', 'M162 152 H82', 'M82 152 V72'];
    const lab = [[122, 58, L('1 dalt', '1 arriba'), 0], [176, 112, L('2 dreta', '2 derecha'), 90], [122, 176, L('3 baix', '3 abajo'), 0], [68, 112, L('4 esquerra', '4 izquierda'), -90]];
    return tSvg(214, `<rect x="82" y="72" width="80" height="80" rx="4" fill="#EEF2FD" stroke="#C9D6FB" stroke-width="2"/>
      ${side.map((p, i) => `<path d="${p}" stroke="${C[i]}" stroke-width="7" stroke-linecap="round" ${on(i)}></path>`).join('')}
      ${lab.map(([x, y, t, r], i) => `<g transform="rotate(${r} ${x} ${y})" ${on(i)}><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s" style="fill:${C[i]};font-weight:900">${t}</text></g>`).join('')}
      <g><animateTransform attributeName="transform" type="rotate" values="0 122 112;90 122 112;180 122 112;270 122 112" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>
        <path d="M122 112 V84" stroke="#14204A" stroke-width="5" stroke-linecap="round"/><path d="M114 92 L122 82 L130 92" fill="none" stroke="#14204A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
      <circle cx="122" cy="112" r="6" fill="#14204A"/>
      <rect x="226" y="20" width="90" height="160" rx="14" fill="#14204A"/>
      <text x="236" y="46" class="tat w" ${mono}>margin:</text>
      ${['10px', '20px', '30px', '40px'].map((v, i) => `<g ${on(i)}><circle cx="244" cy="${72 + i * 28}" r="9" fill="${C[i]}"/><text x="244" y="${77 + i * 28}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="258" y="${77 + i * 28}" class="tat w" ${mono}>${v}</text></g>`).join('')}
      <text x="160" y="207" text-anchor="middle" class="tat s">${L('Com les agulles del rellotge', 'Como las agujas del reloj')}</text>`);
  },
  // border-radius: de cantonades rectes a cantonades rodones i, amb 50 %, una caixa rodona
  w5radius() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"';
    const KT = 'keyTimes="0;.06;.3;.36;.6;.66;.94;1"';
    const st = (v, t, a) => `<g opacity="${a[0]}"><animate attributeName="opacity" values="${a.join(';')}" keyTimes="0;.3;.33;.63;.66;.97;1" ${D}/><text x="236" y="112" text-anchor="middle" class="tat b" style="font-size:26px;font-family:ui-monospace,Menlo,Consolas,monospace;fill:#E5489A">${v}</text><text x="236" y="146" text-anchor="middle" class="tat s">${t}</text></g>`;
    return tSvg(200, `<rect x="30" y="34" width="132" height="132" rx="0" fill="#FFC531" stroke="#B9860F" stroke-width="3">
        <animate attributeName="rx" values="0;0;0;22;22;66;66;0" ${KT} ${D}/></rect>
      <circle cx="96" cy="100" r="22" fill="#fff" opacity=".55"/><path d="M84 100 l8 8 l16 -18" fill="none" stroke="#B9860F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
      <rect x="176" y="44" width="122" height="126" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <text x="236" y="72" text-anchor="middle" class="tat s" ${mono}>border-radius:</text>
      ${st('0', L('cantonades rectes', 'esquinas rectas'), [1, 1, 0, 0, 0, 0, 1])}
      ${st('20px', L('arrodonides', 'redondeadas'), [0, 0, 1, 1, 0, 0, 0])}
      ${st('50%', L('rodona!', '¡redonda!'), [0, 0, 0, 0, 1, 1, 0])}
      <text x="160" y="192" text-anchor="middle" class="tat s">${L('Com més gran, més rodona', 'Cuanto más grande, más redonda')}</text>`);
  },
  // box-shadow: l'ombra es mou a la dreta i avall i es difumina
  w5shadow() {
    const D = 'dur="5.5s" repeatCount="indefinite"', mono = 'style="font-family:ui-monospace,Menlo,Consolas,monospace"', K = 'keyTimes="0;.1;.5;.9;1"';
    const rows = [['6px', L('→ a la dreta', '→ a la derecha')], ['8px', L('↓ avall', '↓ abajo')], ['12px', L('difuminat', 'difuminado')], ['gray', L('el color', 'el color')]];
    return tSvg(214, `<defs><filter id="w5blur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="0"><animate attributeName="stdDeviation" values="0;0;6;6;0" ${K} ${D}/></feGaussianBlur></filter></defs>
      <rect x="6" y="6" width="176" height="202" rx="16" fill="#EEF2FD"/>
      <g transform="translate(26 30)"><circle r="12" fill="#FFD54A"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M0 -17 V-22" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(${i * 45})"/>`).join('')}</g>
      <rect x="44" y="60" width="104" height="100" rx="14" fill="#14204A" opacity=".35" filter="url(#w5blur)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 0;9 12;9 12;0 0" ${K} ${D}/></rect>
      <rect x="44" y="60" width="104" height="100" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <rect x="58" y="74" width="76" height="36" rx="8" fill="#9FDBFF"/><rect x="58" y="120" width="60" height="8" rx="4" fill="#14204A"/><rect x="58" y="134" width="44" height="7" rx="3.5" fill="#9AA6C6"/>
      <rect x="190" y="6" width="124" height="202" rx="16" fill="#14204A"/>
      <text x="202" y="32" class="tat w s" ${mono}>box-shadow:</text>
      ${rows.map(([v, t], i) => `<g ${tA(.5 + i * .7)}><text x="202" y="${66 + i * 40}" class="tat" style="fill:#7DE3A6;font-family:ui-monospace,Menlo,Consolas,monospace">${v}</text><text x="202" y="${84 + i * 40}" class="tat w s">${t}</text></g>`).join('')}`);
  },
  // l'amplada total: width + padding + border (a cada costat)
  w5total() {
    const seg = [[25, 10, '#14204A', '8'], [35, 25, '#C9F0D8', '20'], [60, 200, '#9FD0FF', '160'], [260, 25, '#C9F0D8', '20'], [285, 10, '#14204A', '8']];
    return tSvg(196, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Quant ocupa de debò?', '¿Cuánto ocupa de verdad?')}</text>
      ${seg.map(([x, w, c], i) => `<rect x="${x}" y="36" width="${w}" height="74" fill="${c}" ${tA(.2 + Math.abs(2 - i) * .4, 'ta-in')}/>`).join('')}
      <text x="160" y="78" text-anchor="middle" class="tat" style="font-family:ui-monospace,Menlo,Consolas,monospace">width: 160px</text>
      ${seg.map(([x, w, c, n], i) => `<g ${tA(1.4 + i * .25)}><path d="M${x + 1} 120 V126 H${x + w - 1} V120" fill="none" stroke="#5A6BA0" stroke-width="2"/><text x="${x + w / 2}" y="142" text-anchor="middle" class="tat s">${n}</text></g>`).join('')}
      <g ${tA(2.9, 'ta-in')}><path d="M25 152 V158 H295 V152" fill="none" stroke="#E5489A" stroke-width="3"/>
        <text x="160" y="184" text-anchor="middle" class="tat b" style="fill:#C2306A">8 + 20 + 160 + 20 + 8 = 216px</text></g>`);
  }
});

/* ── unitat 6 ── */
/* Tech Web · unitat 6 «Disposició» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Caixes que fan pila o fila (flexbox), on es col·loquen dins la fila (justify-content) i de
   dalt a baix (align-items), la graella (grid) i la unitat fr, i les taules (files, cel·les, capçaleres i el lector de
   pantalla). El codi es dibuixa amb lletra de màquina d'escriure, com a l'editor. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  // una animació SMIL que dura tot el cicle (5,5 s): valors en els segons indicats (el primer 0, l'últim 5,5)
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  // visible només entre dos moments del cicle
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .12, b, b + .12, D]);
  const mono = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 14}" font-weight="${o.w || 700}" fill="${o.c || '#14204A'}" text-anchor="${o.a || 'start'}">${txt}</text>`;
  const C = { teal: '#14A3B8', ink: '#14204A', gold: '#FFC531', ora: '#F08A24', pink: '#E0538F', vio: '#6C5CE7', grn: '#3CC47C', red: '#EF5A5A', sky: '#BFE6F5', line: '#DCE4FA' };
  const ok = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.grn}"/><path d="M${x - 6} ${y}l4 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t) => `<g ${tA(t, 'ta-wob')}><circle cx="${x}" cy="${y}" r="13" fill="${C.red}"/><path d="M${x - 5} ${y - 5}l10 10M${x + 5} ${y - 5}l-10 10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></g>`;
  // una foto petita: cel, sol i muntanya
  const photo = (x, y, w, h, sky = C.sky, hill = '#3CC47C') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${sky}"/><circle cx="${x + w * .72}" cy="${y + h * .3}" r="${Math.min(w, h) * .13}" fill="${C.gold}"/><path d="M${x} ${y + h}l${w * .35} ${-h * .55}l${w * .2} ${h * .25}l${w * .2} ${-h * .2}l${w * .25} ${h * .5}z" fill="${hill}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="none" stroke="#fff" stroke-width="2"/>`;
  return {
    // per defecte les caixes fan pila; amb display: flex al contenidor, fan fila
    w6stack() {
      const cols = [C.gold, C.pink, C.teal], T = [0, 2, 2.8, 5, D];
      const box = (i) => { const sy = 56 + i * 46, rx = 42 + i * 82;
        return `<rect x="42" y="${sy}" width="236" height="38" rx="9" fill="${cols[i]}">${an('x', `42;42;${rx};${rx};42`, T)}${an('y', `${sy};${sy};56;56;${sy}`, T)}${an('width', '236;236;72;72;236', T)}${an('height', '38;38;126;126;38', T)}</rect>
          <text y="${sy + 25}" x="160" text-anchor="middle" class="tat w b">${i + 1}${an('x', `160;160;${rx + 36};${rx + 36};160`, T)}${an('y', `${sy + 25};${sy + 25};124;124;${sy + 25}`, T)}</text>`; };
      return tSvg(214, `<rect x="30" y="44" width="260" height="150" rx="14" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="7 5"/>
        ${mono(36, 210, '&lt;div class="fila"&gt;', { s: 13, c: C.teal })}
        ${[0, 1, 2].map(box).join('')}
        <g>${an('opacity', '1;1;0;0;1;1', [0, 1.9, 2.05, 5.05, 5.2, D])}<text x="160" y="28" text-anchor="middle" class="tat b">${L("Sense flex: una sota l'altra", 'Sin flex: una debajo de la otra')}</text></g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2, 2.15, 5, 5.15, D])}<rect x="58" y="9" width="204" height="28" rx="14" fill="${C.ink}"/>${mono(160, 28, 'display: flex;', { c: '#fff', a: 'middle' })}</g>`);
    },
    // flexbox es posa al contenidor (el pare), no a cada element (els fills)
    w6parent() {
      const T = [0, 1.4, 2.1, 5, D], cols = [C.gold, C.pink, C.teal];
      const card = (x, sel, col) => `<rect x="${x}" y="6" width="140" height="62" rx="10" fill="${col}"/>${mono(x + 10, 24, `${sel} {`, { s: 13, c: '#fff' })}${mono(x + 10, 42, '  display: flex;', { s: 13, c: '#fff' })}${mono(x + 10, 60, '}', { s: 13, c: '#fff' })}`;
      const arrow = x => `<path d="M${x} 72v14" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/><path d="M${x - 6} 82l6 7l6 -7" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      const good = [0, 1, 2].map(i => { const sy = 100 + i * 22, rx = 22 + i * 44;
        return `<rect x="22" y="${sy}" width="124" height="16" rx="5" fill="${cols[i]}">${an('x', `22;22;${rx};${rx};22`, T)}${an('y', `${sy};${sy};100;100;${sy}`, T)}${an('width', '124;124;36;36;124', T)}${an('height', '16;16;60;60;16', T)}</rect>`; }).join('');
      const bad = [0, 1, 2].map(i => `<rect x="182" y="${100 + i * 22}" width="124" height="16" rx="5" fill="${cols[i]}"/>`).join('');
      return tSvg(226, `${card(12, '.fila', C.teal)}${card(172, '.foto', '#9AA6C8')}${arrow(82)}${arrow(242)}
        <rect x="14" y="92" width="140" height="76" rx="12" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="6 4"/>
        <rect x="174" y="92" width="140" height="76" rx="12" fill="#fff" stroke="#C9D2EA" stroke-width="2.5" stroke-dasharray="6 4"/>
        ${good}${bad}${ok(84, 186, 2.3)}${ko(244, 186, 2.6)}
        <text x="84" y="216" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>${L('al pare: fila!', 'al padre: ¡fila!')}</text>
        <text x="244" y="216" text-anchor="middle" class="tat s" ${tA(2.7, 'ta-fade')}>${L('als fills: res', 'a los hijos: nada')}</text>`);
    },
    // justify-content: on van els elements al llarg de la fila
    w6justify() {
      const T = [0, 1.1, 1.4, 2.5, 2.8, 3.9, 4.2, 5.2, D], P = [[28, 88, 148], [75, 135, 195], [122, 182, 242], [28, 135, 242]], cols = [C.gold, C.pink, C.teal];
      const vals = [['flex-start;', 0, 1.15, 5.3], ['center;', 1.25, 2.6], ['flex-end;', 2.65, 4.0], ['space-between;', 4.05, 5.25]];
      const lab = vals.map(([v, a, b, c]) => c ? `<g>${an('opacity', '1;1;0;0;1;1', [0, b, b + .1, c, c + .1, D])}${mono(170, 30, v, { c: C.vio })}</g>` : `<g opacity="0">${win(a, b)}${mono(170, 30, v, { c: C.vio })}</g>`).join('');
      const boxes = [0, 1, 2].map(i => `<rect x="${P[0][i]}" y="64" width="50" height="62" rx="9" fill="${cols[i]}">${an('x', [0, 0, 1, 1, 2, 2, 3, 3, 0].map(k => P[k][i]).join(';'), T)}</rect>`).join('');
      return tSvg(200, `${mono(22, 30, 'justify-content:')}${lab}
        <rect x="20" y="50" width="280" height="90" rx="14" fill="#EAF6F8" stroke="${C.teal}" stroke-width="2.5"/>${boxes}
        <path d="M28 156h258" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/><path d="M280 149l9 7l-9 7" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="186" text-anchor="middle" class="tat s">${L('Mou els elements al llarg de la fila', 'Mueve los elementos a lo largo de la fila')}</text>`);
    },
    // align-items: de dalt a baix (l'altra direcció)
    w6align() {
      const T = [0, 1.4, 1.7, 3.1, 3.4, 5.1, D], H = [40, 70, 30], X = [34, 104, 174];
      const Y = [[54, 54, 54], [91, 76, 96], [128, 98, 138]], cols = [C.gold, C.pink, C.teal];
      const lab = [['flex-start;', 0, 1.45, 5.15], ['center;', 1.55, 3.15], ['flex-end;', 3.25, 5.15]].map(([v, a, b, c]) => c ? `<g>${an('opacity', '1;1;0;0;1;1', [0, b, b + .1, c, c + .1, D])}${mono(132, 28, v, { c: C.vio })}</g>` : `<g opacity="0">${win(a, b)}${mono(132, 28, v, { c: C.vio })}</g>`).join('');
      const boxes = [0, 1, 2].map(i => `<rect x="${X[i]}" y="54" width="56" height="${H[i]}" rx="9" fill="${cols[i]}">${an('y', [0, 0, 1, 1, 2, 2, 0].map(k => Y[k][i]).join(';'), T)}</rect>`).join('');
      return tSvg(214, `${mono(22, 28, 'align-items:')}${lab}
        <rect x="20" y="46" width="230" height="130" rx="14" fill="#EAF6F8" stroke="${C.teal}" stroke-width="2.5"/>${boxes}
        <path d="M282 56v112" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/><path d="M275 62l7 -8l7 8M275 162l7 8l7 -8" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="202" text-anchor="middle" class="tat s">${L('Mou els elements de dalt a baix', 'Mueve los elementos de arriba abajo')}</text>`);
    },
    // flex: una direcció; grid: files i columnes (les fotos omplen la graella fila a fila)
    w6grid() {
      const hills = ['#3CC47C', '#2E9C6A', '#7FC6A4'];
      const flex = [0, 1, 2, 3].map(i => `<g ${tA(.3 + i * .25)}>${photo(20 + i * 32, 80, 28, 30, C.sky, hills[i % 3])}</g>`).join('');
      const grid = Array.from({ length: 9 }, (_, i) => `<g ${tA(1.5 + i * .3)}>${photo(183 + (i % 3) * 42, 50 + Math.floor(i / 3) * 42, 36, 36, i % 2 ? '#FFE3B3' : C.sky, hills[i % 3])}</g>`).join('');
      return tSvg(220, `${mono(80, 26, 'display: flex', { a: 'middle', c: C.teal })}${mono(240, 26, 'display: grid', { a: 'middle', c: C.vio })}
        <rect x="14" y="72" width="140" height="46" rx="10" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="6 4"/>${flex}
        <g ${tA(1.2, 'ta-fade')}><path d="M20 134h124" stroke="${C.teal}" stroke-width="3" stroke-linecap="round"/><path d="M138 128l8 6l-8 6" fill="none" stroke="${C.teal}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <rect x="176" y="43" width="140" height="140" rx="12" fill="#fff" stroke="${C.vio}" stroke-width="2.5" stroke-dasharray="6 4"/>${grid}
        <text x="84" y="170" text-anchor="middle" class="tat s">${L('una direcció', 'una dirección')}</text>
        <text x="84" y="190" text-anchor="middle" class="tat s">${L('(fila o columna)', '(fila o columna)')}</text>
        <text x="246" y="206" text-anchor="middle" class="tat s" ${tA(4.3, 'ta-fade')}>${L('files i columnes', 'filas y columnas')}</text>`);
    },
    // la unitat fr: trossos de l'espai que queda
    w6fr() {
      const seg = (x, y, w, col, txt, t) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="${w}" height="40" rx="8" fill="${col}" stroke="#fff" stroke-width="3"/>${mono(x + w / 2, y + 26, txt, { c: '#fff', a: 'middle' })}</g>`;
      const T2 = [0, 3.8, 4.3, 5, D];
      return tSvg(208, `${mono(20, 24, 'grid-template-columns: 1fr 2fr 1fr;', { s: 13 })}
        <rect x="20" y="34" width="280" height="40" rx="8" fill="#EEF2FD"/>${[1, 2, 3].map(k => `<path d="M${20 + k * 70} 34v40" stroke="#B9C4E6" stroke-width="2" stroke-dasharray="4 4" ${tA(.3, 'ta-fade')}/>`).join('')}
        ${seg(20, 34, 70, C.gold, '1fr', .9)}${seg(90, 34, 140, C.pink, '2fr', 1.3)}${seg(230, 34, 70, C.teal, '1fr', 1.7)}
        <g ${tA(2.1, 'ta-fade')}><text x="55" y="96" text-anchor="middle" class="tat s">1/4</text><text x="160" y="96" text-anchor="middle" class="tat s">2/4</text><text x="265" y="96" text-anchor="middle" class="tat s">1/4</text></g>
        ${mono(20, 128, 'grid-template-columns: 120px 1fr;', { s: 13 })}
        <g ${tA(2.6)}><rect x="20" y="138" width="120" height="40" rx="8" fill="${C.vio}" stroke="#fff" stroke-width="3"/>${mono(80, 164, '120px', { c: '#fff', a: 'middle' })}</g>
        <g ${tA(3)}><rect x="140" y="138" width="160" height="40" rx="8" fill="${C.ora}" stroke="#fff" stroke-width="3">${an('width', '160;160;80;80;160', T2)}</rect>
          <text x="220" y="164" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="14" font-weight="700" fill="#fff">1fr${an('x', '220;220;180;180;220', T2)}</text></g>
        <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('1fr = el que queda (i s\'adapta)', '1fr = lo que queda (y se adapta)')}</text>`);
    },
    // una taula: files (tr), cel·les (td) i capçaleres (th)
    w6table() {
      const head = [L('Dia', 'Día'), L('Lloc', 'Lugar'), L('Hora', 'Hora')];
      const rows = [[L('Dissabte', 'Sábado'), L('El moll', 'El muelle'), '10:00'], [L('Diumenge', 'Domingo'), L('El bosc', 'El bosque'), '9:30'], [L('Dimecres', 'Miércoles'), L('La platja', 'La playa'), '18:00']];
      const cx = [64, 160, 256];
      const hl = (x, y, w, h, a, b, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${col}" fill-opacity=".22" stroke="${col}" stroke-width="3.5" opacity="0">${win(a, b)}</rect>`;
      const tag = (txt, a, b, col) => `<g opacity="0">${win(a, b)}<rect x="40" y="184" width="240" height="28" rx="14" fill="${col}"/>${mono(160, 203, txt, { c: '#fff', a: 'middle', s: 13 })}</g>`;
      return tSvg(218, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Sortides del club', 'Salidas del club')}</text>
        <rect x="16" y="34" width="288" height="136" rx="8" fill="#fff" stroke="#C9D2EA" stroke-width="2"/>
        <rect x="16" y="34" width="288" height="34" rx="8" fill="${C.teal}"/>${head.map((h, i) => `<text x="${cx[i]}" y="56" text-anchor="middle" class="tat w">${h}</text>`).join('')}
        ${[1, 2].map(k => `<path d="M${16 + k * 96} 34v136" stroke="#C9D2EA" stroke-width="2"/>`).join('')}${[1, 2].map(k => `<path d="M16 ${68 + k * 34}h288" stroke="#C9D2EA" stroke-width="2"/>`).join('')}
        ${rows.map((r, j) => r.map((c, i) => `<text x="${cx[i]}" y="${90 + j * 34}" text-anchor="middle" class="tat s">${c}</text>`).join('')).join('')}
        ${hl(18, 70, 284, 32, .4, 1.9, C.gold)}${hl(114, 104, 92, 32, 2.0, 3.5, C.pink)}${hl(18, 36, 284, 30, 3.6, 5.2, C.vio)}
        ${tag(L('&lt;tr&gt; = una fila', '&lt;tr&gt; = una fila'), .4, 1.9, C.ora)}${tag(L('&lt;td&gt; = una cel·la', '&lt;td&gt; = una celda'), 2.0, 3.5, C.pink)}${tag(L('&lt;th&gt; = una capçalera', '&lt;th&gt; = una cabecera'), 3.6, 5.2, C.vio)}`);
    },
    // el lector de pantalla llegeix la taula en veu alta: amb th, cada dada té el seu nom
    w6reader() {
      const head = [L('Lloc', 'Lugar'), L('Hora', 'Hora')], rows = [[L('El moll', 'El muelle'), '10:00'], [L('El bosc', 'El bosque'), '9:30']];
      const P1 = [.2, 2.6], P2 = [2.75, 5.25];
      const cx = [52, 128];
      return tSvg(222, `<g opacity="0">${win(...P1)}${mono(14, 24, L('amb &lt;td&gt;', 'con &lt;td&gt;'), { c: C.red })}</g><g opacity="0">${win(...P2)}${mono(14, 24, L('amb &lt;th&gt;', 'con &lt;th&gt;'), { c: C.grn })}</g>
        <rect x="14" y="34" width="152" height="96" rx="8" fill="#fff" stroke="#C9D2EA" stroke-width="2"/>
        <g opacity="0">${win(...P2)}<rect x="14" y="34" width="152" height="32" rx="8" fill="${C.teal}"/>${head.map((h, i) => `<text x="${cx[i]}" y="55" text-anchor="middle" class="tat w">${h}</text>`).join('')}</g>
        <g opacity="0">${win(...P1)}${head.map((h, i) => `<text x="${cx[i]}" y="55" text-anchor="middle" class="tat s">${h}</text>`).join('')}</g>
        <path d="M90 34v96M14 66h152M14 98h152" stroke="#C9D2EA" stroke-width="2"/>
        ${rows.map((r, j) => r.map((c, i) => `<text x="${cx[i]}" y="${87 + j * 32}" text-anchor="middle" class="tat s">${c}</text>`).join('')).join('')}
        <rect x="16" y="100" width="148" height="28" rx="6" fill="${C.gold}" fill-opacity=".25" stroke="${C.gold}" stroke-width="3" ${tA(.6, 'ta-fade')}/>
        <image href="img/ic/headphones.webp" x="206" y="22" width="84" height="84"/>
        <text x="248" y="126" text-anchor="middle" class="tat s">${L('lector de pantalla', 'lector de pantalla')}</text>
        <path d="M232 140l-10 14h20z" fill="${C.ink}"/>
        <rect x="14" y="152" width="292" height="54" rx="16" fill="${C.ink}"/>
        <g opacity="0">${win(.9, 2.6)}<text x="160" y="176" text-anchor="middle" class="tat w s">${L('«el bosc… 9:30…»', '«el bosque… 9:30…»')}</text><text x="160" y="196" text-anchor="middle" class="tat w s">${L('Què vol dir cada dada?', '¿Qué quiere decir cada dato?')}</text></g>
        <g opacity="0">${win(3.3, 5.25)}<text x="160" y="176" text-anchor="middle" class="tat w s">${L('«Lloc: el bosc.', '«Lugar: el bosque.')}</text><text x="160" y="196" text-anchor="middle" class="tat w s">${L('Hora: 9:30»', 'Hora: 9:30»')}</text></g>
        <g opacity="0">${win(3.6, 5.25)}<circle cx="290" cy="152" r="13" fill="${C.grn}"/><path d="M284 152l4 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    }
  };
})());

/* ── unitat 7 ── */
/* Tech Web · unitat 7 «Per al mòbil» · animacions de teoria (TANI)
   Dibuixos propis de Numi: la mateixa web a l'ordinador i al mòbil, l'etiqueta viewport, la finestra que s'encongeix
   i activa el @media, les amplades fixes que surten de la pantalla, el :hover amb i sense transició, els botons per al
   dit, com es llegeix una adreça (el domini de veritat) i què vol dir el candau. SVG + SMIL i les classes ta-*
   (bucle de 5,5 s). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const C = { blue: '#2F6BFF', dark: '#1A3FB0', ink: '#14204A', line: '#DCE4FA', soft: '#E8F1FF', yel: '#FFC531', red: '#EF5A5A', green: '#1FA463', pink: '#E5489A', teal: '#14A3B8', cream: '#FFF4D6' };
  const MONO = 'font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px';
  const CW = 7.83; // amplada d'un caràcter de 13 px en lletra monoespaiada
  // aparatells: la pantalla és el rectangle (x, y, w, h)
  const laptop = (x, y, w, h) => `<rect x="${x - 7}" y="${y - 7}" width="${w + 14}" height="${h + 14}" rx="9" fill="#2A3352"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff"/><path d="M${x - 20} ${y + h + 9}h${w + 40}l-9 9h-${w + 22}z" fill="#B9C3DE"/><rect x="${x + w / 2 - 14}" y="${y + h + 9}" width="28" height="3" rx="1.5" fill="#97A3C4"/>`;
  const phone = (x, y, w, h) => `<rect x="${x - 6}" y="${y - 14}" width="${w + 12}" height="${h + 28}" rx="13" fill="#2A3352"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff"/><rect x="${x + w / 2 - 9}" y="${y - 9}" width="18" height="4" rx="2" fill="#56607E"/><circle cx="${x + w / 2}" cy="${y + h + 7}" r="3.5" fill="#56607E"/>`;
  // una targeta d'una web en miniatura (foto + dues ratlles de text)
  const card = (x, y, w, h, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${C.cream}" stroke="#F0DFAE" stroke-width="1.2"/><rect x="${x + 4}" y="${y + 4}" width="${w - 8}" height="${h * .45}" rx="3" fill="${col}"/><rect x="${x + 4}" y="${y + h * .62}" width="${(w - 8) * .8}" height="${Math.max(3, h * .1)}" rx="2" fill="#C9B48A"/><rect x="${x + 4}" y="${y + h * .8}" width="${(w - 8) * .55}" height="${Math.max(3, h * .08)}" rx="2" fill="#E2CFA0"/>`;
  const ok = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.green}"/><path d="M${x - 6} ${y}l4 4.5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.red}"/><path d="M${x - 5} ${y - 5}l10 10M${x + 5} ${y - 5}l-10 10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>`;
  const chip = (x, y, w, txt, t, fill = '#fff', stroke = C.line, col = C.ink) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s" style="${MONO};fill:${col}">${txt}</text></g>`;
  const lock = (x, y, s = 1, col = C.green) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-4.5 -2v-3.5a4.5 4.5 0 0 1 9 0v3.5" stroke="${col}" stroke-width="2.4" fill="none"/><rect x="-7" y="-2.5" width="14" height="11" rx="2.5" fill="${col}"/><circle cy="2.5" r="1.6" fill="#fff"/></g>`;
  const cursor = (extra = '') => `<g ${extra}><path d="M0 0L0 19L5 14.5L9 23L12.5 21.5L8.5 13H15.5Z" fill="#fff" stroke="${C.ink}" stroke-width="1.8" stroke-linejoin="round"/></g>`;
  const anim = (attr, values, keyTimes, mode = 'linear') => `<animate attributeName="${attr}" values="${values}" keyTimes="${keyTimes}" calcMode="${mode}" dur="${D}s" repeatCount="indefinite"/>`;
  return {
    // la mateixa web a l'ordinador (tres targetes en fila) i al mòbil (una sota l'altra)
    w7resp() {
      const cols = [C.yel, C.pink, C.teal];
      const lx = 18, ly = 40, lw = 166, lh = 100, cw = (lw - 16 - 12) / 3;
      const big = cols.map((c, i) => `<g ${tA(.3 + i * .25)}>${card(lx + 8 + i * (cw + 6), ly + 32, cw, 58, c)}</g>`).join('');
      const px = 232, py = 34, pw = 64, ph = 120;
      const small = cols.map((c, i) => `<g ${tA(1.7 + i * .25)}>${card(px + 5, py + 22 + i * 32, pw - 10, 28, c)}</g>`).join('');
      return tSvg(206, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('La mateixa web, dues pantalles', 'La misma web, dos pantallas')}</text>
        ${laptop(lx, ly, lw, lh)}<rect x="${lx + 8}" y="${ly + 8}" width="${lw - 16}" height="16" rx="4" fill="${C.blue}"/><rect x="${lx + 14}" y="${ly + 13}" width="44" height="6" rx="3" fill="#fff" opacity=".85"/>${big}
        <g ${tA(1.2, 'ta-fade')}><path d="M198 92h22" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 5" class="ta-dash"/><path d="M219 85l9 7l-9 7" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${phone(px, py, pw, ph)}<rect x="${px + 5}" y="${py + 6}" width="${pw - 10}" height="12" rx="3" fill="${C.blue}"/>${small}
        <text x="${lx + lw / 2}" y="188" text-anchor="middle" class="tat s">${L('Ordinador: en fila', 'Ordenador: en fila')}</text>
        <text x="312" y="196" text-anchor="end" class="tat s">${L('Mòbil: en columna', 'Móvil: en columna')}</text>`);
    },
    // sense viewport, el mòbil ho fa tot petitíssim; amb viewport, fa servir la seva amplada de veritat
    w7view() {
      const px1 = 52, px2 = 196, py = 40, pw = 76, ph = 122;
      const tiny = `<rect x="${px1 + 4}" y="${py + 6}" width="${pw - 8}" height="6" rx="2" fill="${C.blue}"/>${[0, 1, 2].map(i => card(px1 + 4 + i * 23, py + 16, 20, 18, [C.yel, C.pink, C.teal][i])).join('')}${[0, 1, 2, 3, 4].map(i => `<rect x="${px1 + 4}" y="${py + 40 + i * 5}" width="${pw - 8 - (i % 2) * 14}" height="2" rx="1" fill="#C3CBE0"/>`).join('')}`;
      const big = `<rect x="${px2 + 5}" y="${py + 6}" width="${pw - 10}" height="16" rx="4" fill="${C.blue}"/><rect x="${px2 + 10}" y="${py + 11}" width="36" height="6" rx="3" fill="#fff" opacity=".85"/>${card(px2 + 5, py + 28, pw - 10, 50, C.yel)}${[0, 1, 2].map(i => `<rect x="${px2 + 6}" y="${py + 86 + i * 11}" width="${pw - 12 - (i % 2) * 18}" height="6" rx="3" fill="#9AA6C6"/>`).join('')}`;
      return tSvg(214, `<text x="${px1 + pw / 2}" y="18" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Sense viewport', 'Sin viewport')}</text>
        <text x="${px2 + pw / 2}" y="18" text-anchor="middle" class="tat s" style="fill:#147A47">${L('Amb viewport', 'Con viewport')}</text>
        <g ${tA(.2, 'ta-fade')}>${phone(px1, py, pw, ph)}${tiny}</g>
        <g ${tA(.9)}><circle cx="${px1 + 52}" cy="${py + 98}" r="14" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="M${px1 + 62} ${py + 108}l10 10" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><text x="${px1 + 52}" y="${py + 103}" text-anchor="middle" class="tat s">?</text></g>
        ${ko(px1 + pw + 10, py + 2, 1.3)}
        <g ${tA(1.9, 'ta-in')}>${phone(px2, py, pw, ph)}${big}</g>
        ${ok(px2 + pw + 10, py + 2, 2.6)}
        ${chip(18, 184, 284, '&lt;meta name="viewport" …&gt;', 3.2, '#FFF8E1', C.yel)}`);
    },
    // la finestra s'encongeix: quan passa per sota de 600 px, s'activa el @media i les targetes es posen en columna
    w7media() {
      const X = 30, Y = 46, Ws = [280, 280, 110, 110, 280], KT = '0;.2;.45;.8;1', SW = '0;.362;.871';
      const v = f => Ws.map(f).map(n => +n.toFixed(2)).join(';');
      const deskCards = [0, 1, 2].map(i => `<rect y="${Y + 46}" height="60" rx="6" fill="${[C.yel, C.pink, C.teal][i]}">${anim('x', v(W => X + 10 + i * ((W - 40) / 3 + 10)), KT)}${anim('width', v(W => (W - 40) / 3), KT)}</rect>`).join('');
      const mobCards = [0, 1, 2].map(i => `<rect x="${X + 10}" y="${Y + 46 + i * 28}" height="22" rx="5" fill="${[C.yel, C.pink, C.teal][i]}">${anim('width', v(W => W - 20), KT)}</rect>`).join('');
      return tSvg(236, `<line x1="${X + 170}" y1="${Y - 10}" x2="${X + 170}" y2="${Y + 150}" stroke="${C.red}" stroke-width="2.5" stroke-dasharray="6 5"/>
        <text x="${X + 170}" y="${Y - 16}" text-anchor="middle" class="tat s" style="fill:#C0392B">600 px</text>
        <rect x="${X}" y="${Y}" height="140" rx="10" fill="#fff" stroke="#B9C3DE" stroke-width="2.5">${anim('width', v(W => W), KT)}</rect>
        <rect x="${X}" y="${Y}" height="18" rx="9" fill="${C.soft}">${anim('width', v(W => W), KT)}</rect>
        <rect x="${X + 10}" y="${Y + 26}" height="12" rx="4" fill="${C.blue}">${anim('width', v(W => W - 20), KT)}</rect>
        <g>${deskCards}${anim('opacity', '1;0;1', SW, 'discrete')}</g>
        <g opacity="0">${mobCards}${anim('opacity', '0;1;0', SW, 'discrete')}</g>
        <rect x="18" y="200" width="284" height="28" rx="9" stroke-width="2.5">${anim('fill', '#FFFFFF;#FFF3C4;#FFFFFF', SW, 'discrete')}${anim('stroke', `${C.line};${C.yel};${C.line}`, SW, 'discrete')}</rect>
        <text x="160" y="219" text-anchor="middle" class="tat s" style="${MONO}">@media (max-width: 600px)</text>
        <g opacity="0">${anim('opacity', '0;1;0', SW, 'discrete')}<circle cx="296" cy="200" r="11" fill="${C.green}"/><path d="M291 200l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // una caixa amb amplada fixa surt del mòbil; amb max-width: 100% s'atura a la vora
    w7flex() {
      const py = 40, pw = 82, ph = 112, p1 = 44, p2 = 196;
      const grow = (x, to, kt) => `<rect x="${x}" y="${py + 30}" height="44" rx="6" width="20">${anim('width', `20;${to};${to}`, kt)}</rect>`;
      return tSvg(214, `${phone(p1, py, pw, ph)}${phone(p2, py, pw, ph)}
        <rect x="${p1 + 6}" y="${py + 8}" width="${pw - 12}" height="12" rx="3" fill="${C.blue}"/><rect x="${p2 + 6}" y="${py + 8}" width="${pw - 12}" height="12" rx="3" fill="${C.blue}"/>
        <g fill="${C.red}" opacity=".9">${grow(p1 + 6, 132, '0;.4;1')}</g>
        <path d="M${p1 + pw + 6} ${py + 52}h${132 - pw}" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" opacity=".9"/>
        <g ${tA(2.3)}><rect x="${p1 + 4}" y="${py + ph - 12}" width="${pw - 8}" height="7" rx="3.5" fill="#E3E8F6"/><rect x="${p1 + 4}" y="${py + ph - 12}" width="30" height="7" rx="3.5" fill="#97A3C4"/></g>
        <g fill="${C.green}">${grow(p2 + 6, pw - 12, '0;.175;1')}</g>
        ${[0, 1].map(i => `<rect x="${p2 + 6}" y="${py + 84 + i * 10}" width="${pw - 12 - i * 22}" height="5" rx="2.5" fill="#C3CBE0"/><rect x="${p1 + 6}" y="${py + 84 + i * 10}" width="${pw - 12 - i * 22}" height="5" rx="2.5" fill="#C3CBE0"/>`).join('')}
        ${ko(p1 + pw / 2, 22, 2.5)}${ok(p2 + pw / 2, 22, 1.4)}
        ${chip(12, 182, 140, 'width: 700px;', .4, '#FDEBEB', C.red, '#C0392B')}
        ${chip(166, 182, 146, 'max-width: 100%;', .4, '#E7F7EE', C.green, '#147A47')}`);
    },
    // :hover sense transició (canvi de cop) i amb transition (canvi suau)
    w7hover() {
      const KT = '0;.1;.3;.7;.9;1', XS = '124 0;124 0;270 0;270 0;124 0;124 0';
      const btn = (y, fillAnim) => `<rect x="150" y="${y}" width="150" height="42" rx="11" fill="${C.blue}">${fillAnim}</rect><text x="225" y="${y + 27}" text-anchor="middle" class="tat w">${L('Festes', 'Fiestas')}</text>`;
      const cur = y => `<g transform="translate(0 ${y})"><g>${`<animateTransform attributeName="transform" type="translate" values="${XS}" keyTimes="${KT}" dur="${D}s" repeatCount="indefinite"/>`}${cursor()}</g></g>`;
      return tSvg(232, `<text x="16" y="30" class="tat s">${L('Sense transició', 'Sin transición')}</text><text x="16" y="48" class="tat s" style="fill:#5A6585">${L('(de cop)', '(de golpe)')}</text>
        ${btn(18, anim('fill', `${C.blue};${C.green};${C.blue}`, '0;.136;.864', 'discrete'))}
        <text x="16" y="112" class="tat s">${L('Amb transition', 'Con transition')}</text><text x="16" y="130" class="tat s" style="fill:#5A6585">${L('(a poc a poc)', '(poco a poco)')}</text>
        ${btn(100, anim('fill', `${C.blue};${C.blue};${C.green};${C.green};${C.blue};${C.blue}`, '0;.136;.191;.864;.919;1'))}
        ${cur(32)}${cur(114)}
        ${chip(18, 168, 284, '.boto:hover { background: green; }', .3)}
        ${chip(42, 198, 236, 'transition: background 0.3s;', 1.2, '#FFF8E1', C.yel)}`);
    },
    // al mòbil toquem amb el dit: botons petits i enganxats → toques el que no vols; grans i separats → encertes
    w7tap() {
      const py = 44, pw = 82, ph = 112, p1 = 44, p2 = 196;
      const tapY = `<animateTransform attributeName="transform" type="translate" values="0 -22;0 -22;0 0;0 0;0 -22" keyTimes="0;.3;.42;.62;1" dur="${D}s" repeatCount="indefinite"/>`;
      const finger = (x, y) => `<g transform="translate(${x} ${y})"><g>${tapY}<path d="M-11 36 Q-12 8 -9 -4 Q0 -14 9 -4 Q12 8 11 36Z" fill="#F4C7A1" stroke="#C98A5E" stroke-width="2"/><ellipse cx="0" cy="-2" rx="6" ry="5" fill="#FBE3D0"/></g></g>`;
      const smallBtns = [0, 1, 2].map(i => `<rect x="${p1 + 14 + i * 19}" y="${py + 54}" width="16" height="11" rx="3" fill="${C.blue}">${i < 2 ? anim('fill', `${C.blue};${C.blue};${C.red};${C.red};${C.blue}`, '0;.4;.42;.7;1', 'discrete') : ''}</rect>`).join('');
      const bigBtns = [0, 1, 2].map(i => `<rect x="${p2 + 7}" y="${py + 18 + i * 30}" width="${pw - 14}" height="22" rx="7" fill="${C.blue}">${i === 1 ? anim('fill', `${C.blue};${C.blue};${C.green};${C.green};${C.blue}`, '0;.4;.42;.7;1', 'discrete') : ''}</rect><rect x="${p2 + 18}" y="${py + 27 + i * 30}" width="30" height="5" rx="2.5" fill="#fff" opacity=".85"/>`).join('');
      return tSvg(214, `${phone(p1, py, pw, ph)}${phone(p2, py, pw, ph)}${smallBtns}${bigBtns}
        ${finger(p1 + 32, py + 62)}${finger(p2 + pw / 2, py + 52)}
        <text x="${p1 + pw / 2}" y="20" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Petits i enganxats', 'Pequeños y pegados')}</text>
        <text x="${p2 + pw / 2}" y="20" text-anchor="middle" class="tat s" style="fill:#147A47">${L('Grans i separats', 'Grandes y separados')}</text>
        ${ko(p1 + pw + 12, py + 4, 2.4)}${ok(p2 + pw + 12, py + 4, 2.4)}
        <text x="160" y="206" text-anchor="middle" class="tat s">${L('Un dit és més gruixut que un ratolí!', '¡Un dedo es más gordo que un ratón!')}</text>`);
    },
    // com es llegeix una adreça: el domini acaba a la primera barra i l'amo és el final del domini
    w7url() {
      const bar = (y, x0, parts, t) => { let x = x0; const out = parts.map(([s, st]) => { const w = s.length * CW, r = { s, st, x, w }; x += w; return r; });
        return { x1: x, parts: out, svg: `<g ${tA(t, 'ta-in')}><rect x="12" y="${y}" width="296" height="34" rx="17" fill="#fff" stroke="#B9C3DE" stroke-width="2"/>${lock(30, y + 16, 1)}<text x="${x0}" y="${y + 22}" class="tat s" style="${MONO}">${out.map(p => `<tspan style="${p.st || ''}">${p.s}</tspan>`).join('')}</text></g>` }; };
      const a = bar(30, 44, [['fotonuvi.numi', 'fill:#147A47;font-weight:900'], ['/album', 'fill:#5A6585']], .2);
      const b = bar(116, 44, [['fotonuvi.numi.', 'fill:#5A6585'], ['regals.xyz', 'fill:#C0392B;font-weight:900'], ['/album', 'fill:#5A6585']], 1.9);
      const hl = (p, y, col, t) => `<rect x="${p.x - 2}" y="${y + 5}" width="${p.w + 4}" height="24" rx="6" fill="${col}" ${tA(t)}/>`;
      const slashB = b.parts[2].x;
      return tSvg(214, `${hl(a.parts[0], 30, '#DDF5E7', .9)}${hl(b.parts[1], 116, '#FDE2E2', 2.8)}${a.svg}${b.svg}
        <g ${tA(1.2, 'ta-in')}><text x="16" y="88" class="tat s" style="fill:#147A47">✓ ${L("L'amo: fotonuvi.numi", 'El dueño: fotonuvi.numi')}</text></g>
        <g ${tA(2.3)}><path d="M${slashB + 4} 176v-22" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/><path d="M${slashB - 1} 159l5 -7l5 7" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.3, 'ta-in')}><text x="${slashB - 6}" y="192" text-anchor="end" class="tat s">${L('el domini acaba a la primera /', 'el dominio acaba en la primera /')}</text></g>
        <g ${tA(3.2, 'ta-in')}><text x="16" y="174" class="tat s" style="fill:#C0392B">✗ ${L("L'amo: regals.xyz!", 'El dueño: ¡regals.xyz!')}</text></g>`);
    },
    // el candau: el missatge viatja xifrat i ningú no el pot llegir pel camí (però no diu si la web és bona)
    w7lock() {
      const lane = (y, safe, t) => {
        const env = `<g><animateTransform attributeName="transform" type="translate" values="58 ${y - 10};58 ${y - 10};238 ${y - 10};238 ${y - 10}" keyTimes="0;.15;.6;1" dur="${D}s" repeatCount="indefinite"/>
          <rect x="0" y="0" width="30" height="21" rx="3" fill="#fff" stroke="${C.ink}" stroke-width="2"/><path d="M0 1l15 11l15 -11" fill="none" stroke="${C.ink}" stroke-width="2"/>${safe ? lock(26, 18, .9, C.green) : ''}</g>`;
        const eye = `<g transform="translate(160 ${y - 34})"><ellipse rx="14" ry="8" fill="#fff" stroke="${C.ink}" stroke-width="2"/><circle r="4.5" fill="${C.ink}"/></g>`;
        const read = `<g opacity="0">${anim('opacity', '0;0;1;1;0', '0;.3;.36;.62;1', 'discrete')}<rect x="178" y="${y - 46}" width="66" height="24" rx="8" fill="${safe ? '#E7F7EE' : '#FDEBEB'}" stroke="${safe ? C.green : C.red}" stroke-width="2"/><text x="211" y="${y - 29}" text-anchor="middle" class="tat s" style="${MONO};fill:${safe ? '#147A47' : '#C0392B'}">${safe ? '#q7&amp;k' : '1234'}</text></g>`;
        return `<g ${tA(t, 'ta-fade')}><path d="M50 ${y}H270" stroke="${safe ? C.green : '#B9C3DE'}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${safe ? '0' : '8 6'}" opacity=".55"/>
          <rect x="14" y="${y - 16}" width="36" height="26" rx="4" fill="#2A3352"/><rect x="18" y="${y - 12}" width="28" height="18" rx="2" fill="${C.soft}"/><path d="M10 ${y + 12}h44l-4 4h-36z" fill="#B9C3DE"/>
          <rect x="272" y="${y - 22}" width="34" height="40" rx="5" fill="#56607E"/>${[0, 1, 2].map(k => `<rect x="277" y="${y - 17 + k * 12}" width="24" height="7" rx="2" fill="#97A3C4"/><circle cx="297" cy="${y - 13.5 + k * 12}" r="1.6" fill="${C.green}"/>`).join('')}
          ${eye}${read}${env}</g>`; };
      return tSvg(222, `<text x="14" y="22" class="tat s" style="${MONO};fill:#C0392B">http://</text>
        ${lane(70, false, .1)}
        <text x="14" y="122" class="tat s" style="${MONO};fill:#147A47">https://</text>${lock(92, 117, 1)}
        ${lane(170, true, .1)}
        <g ${tA(3.6, 'ta-in')}><rect x="14" y="192" width="292" height="26" rx="9" fill="#FFF8E1" stroke="${C.yel}" stroke-width="2"/><text x="160" y="210" text-anchor="middle" class="tat s">${L('Camí xifrat ≠ web de confiança', 'Camino cifrado ≠ web de confianza')}</text></g>`);
    }
  };
})());

/* ── unitat 8 ── */
/* Tech Web · unitat 8 «La meva web» · animacions de teoria (TANI w8…)
   Dibuixos propis en SVG (viewBox 320 × alt), en bucle de 5,5 s: el públic, l'esbós en paper, el menú que porta a les
   seccions, les capes de la construcció, l'accessibilitat, la llista de revisió, les dades personals i el viatge del curs. */
Object.assign(TANI, (() => {
  // una finestra de navegador (o de mòbil) buida, amb la barra de dalt
  const win = (x, y, w, h, col = '#14A3B8') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#fff" stroke="#C9D6F2" stroke-width="2" filter="url(#bwSh)"/><path d="M${x} ${y + 10}a10 10 0 0 1 10 -10h${w - 20}a10 10 0 0 1 10 10v8h-${w}z" fill="${col}"/>${[0, 1, 2].map(i => `<circle cx="${x + 10 + i * 9}" cy="${y + 9}" r="2.6" fill="#fff" opacity=".85"/>`).join('')}`;
  const ok = (x, y, t, r = 10) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .5} ${y}l${r * .35} ${r * .38} ${r * .7} -${r * .75}" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t, r = 10) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${r}" fill="#E5484D"/><path d="M${x - r * .4} ${y - r * .4}l${r * .8} ${r * .8}M${x + r * .4} ${y - r * .4}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;
  // una persona senzilla (cap i cos)
  const person = (x, y, s, skin, shirt, hair) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 34a16 18 0 0 1 32 0z" fill="${shirt}"/><circle cy="4" r="13" fill="${skin}"/><path d="M-13 2a13 13 0 0 1 26 0c-4 -6 -10 -8 -13 -8s-9 2 -13 8z" fill="${hair}"/><circle cx="-4.5" cy="5" r="1.7" fill="#14204A"/><circle cx="4.5" cy="5" r="1.7" fill="#14204A"/><path d="M-4 10q4 3 8 0" fill="none" stroke="#14204A" stroke-width="1.6" stroke-linecap="round"/></g>`;
  return {
    // per a qui és la web? tres públics diferents i una web que s'adapta al que tria
    w8aud() {
      const ppl = [[34, 62, .9, '#F2C9A0', '#3D7BF4', '#5A3A1E', L('Companys/es', 'Compañeros/as')], [34, 118, .74, '#E8B48A', '#F2A516', '#2B1A0E', L('Nens petits', 'Niños pequeños')], [34, 174, .95, '#F6D2B4', '#8B5CF6', '#B9B9C6', L('Famílies', 'Familias')]];
      return tSvg(214, `<text x="160" y="20" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>${L('Per a qui és la teva web?', '¿Para quién es tu web?')}</text>
        ${ppl.map(([x, y, s, sk, sh, ha, t], i) => `<g ${tA(.3 + i * .45, 'ta-in')}>${person(x, y - 20, s, sk, sh, ha)}<text x="${x + 24}" y="${y + 2}" class="tat s">${t}</text></g>`).join('')}
        <circle cx="34" cy="48" r="27" fill="none" stroke="#14A3B8" stroke-width="3.5" stroke-dasharray="6 5" ${tA(1.8, 'ta-pop')}/>
        <path d="M140 66 Q156 60 170 70" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" ${tA(2.2, 'ta-fade')}/><path d="M164 62l8 9-11 2" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${tA(2.2, 'ta-fade')}/>
        <g ${tA(2.5, 'ta-in')}>${win(180, 34, 130, 138)}
          <rect x="190" y="62" width="74" height="12" rx="4" fill="#14204A"/><rect x="190" y="80" width="108" height="7" rx="3" fill="#B7C3E0"/><rect x="190" y="92" width="92" height="7" rx="3" fill="#B7C3E0"/>
          <rect x="190" y="106" width="50" height="44" rx="8" fill="#DDF5F8"/><path d="M196 144l12 -16 10 10 6 -6 10 12z" fill="#14A3B8"/><circle cx="226" cy="118" r="5" fill="#F2A516"/>
          <rect x="248" y="108" width="50" height="7" rx="3" fill="#B7C3E0"/><rect x="248" y="120" width="42" height="7" rx="3" fill="#B7C3E0"/><rect x="248" y="136" width="48" height="14" rx="7" fill="#F2A516"/>
          <rect x="190" y="156" width="108" height="8" rx="4" fill="#EAF0FF"/></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="176" y="180" width="138" height="28" rx="10" fill="#14A3B8"/><text x="245" y="199" text-anchor="middle" class="tat w s">${L('Escrita per a ells', 'Escrita para ellos')}</text></g>`);
    },
    // l'esbós en paper: es dibuixen les caixes de la pàgina i després es converteixen en una web de mòbil
    w8wire() {
      const box = (x, y, w, h, t, lab, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="none" stroke="#56628A" stroke-width="2.2" pathLength="1" ${tA(t, 'ta-draw')}/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" class="tat s" style="fill:${col}" ${tA(t + .2, 'ta-fade')}>${lab}</text>`;
      const parts = [[22, 30, 112, 24, L('capçalera', 'cabecera'), '#C2410C'], [22, 58, 112, 16, L('menú', 'menú'), '#14A3B8'], [22, 78, 112, 30, L('secció 1', 'sección 1'), '#3D7BF4'], [22, 112, 112, 30, L('secció 2', 'sección 2'), '#3D7BF4'], [22, 146, 112, 16, L('peu', 'pie'), '#56628A']];
      const real = [['#C2410C', 24], ['#14A3B8', 14], ['#DCE8FF', 30], ['#DCE8FF', 30], ['#56628A', 14]];
      let yy = 46; const phone = real.map(([c, h], i) => { const r = `<rect x="226" y="${yy}" width="68" height="${h}" rx="4" fill="${c}" ${tA(3 + i * .25, 'ta-in')}/>`; yy += h + 4; return r; }).join('');
      return tSvg(214, `<g transform="rotate(-2 80 100)"><rect x="10" y="16" width="136" height="160" rx="6" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/>
          ${Array.from({ length: 9 }, (_, i) => `<path d="M16 ${36 + i * 16}h124" stroke="#EFE6CC" stroke-width="1"/>`).join('')}
          ${parts.map(([x, y, w, h, l, c], i) => box(x, y, w, h, .3 + i * .45, l, c)).join('')}</g>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M30 30 L134 54 L30 74 L134 108 L30 142 L134 162" keyPoints="0;1;1" keyTimes="0;.5;1" calcMode="linear"/><g transform="rotate(35)"><rect x="-3" y="-30" width="7" height="28" rx="2" fill="#F2A516" stroke="#B46A00" stroke-width="1.4"/><path d="M-3 -2l3.5 8 3.5-8z" fill="#FFE2B0" stroke="#B46A00" stroke-width="1.2"/></g></g>
        <g ${tA(2.6, 'ta-in')}><path d="M158 100h30" stroke="#14A3B8" stroke-width="5" stroke-linecap="round"/><path d="M182 89l11 11-11 11" fill="none" stroke="#14A3B8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.8, 'ta-in')}><rect x="216" y="22" width="88" height="176" rx="16" fill="#20306A" filter="url(#bwSh)"/><rect x="222" y="40" width="76" height="146" rx="5" fill="#fff"/><rect x="248" y="29" width="24" height="5" rx="2.5" fill="#3A4A8A"/></g>
        ${phone}
        <text x="78" y="200" text-anchor="middle" class="tat s" ${tA(.2, 'ta-fade')}>${L('Esbós en paper', 'Boceto en papel')}</text><text x="260" y="212" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('La web', 'La web')}</text>`);
    },
    // el menú: l'enllaç href="#fotos" fa saltar la pàgina fins a la secció id="fotos"
    w8map() {
      const sec = (y, c, t) => `<rect x="20" y="${y}" width="120" height="60" rx="8" fill="${c}"/><text x="32" y="${y + 24}" class="tat s">${t}</text><rect x="32" y="${y + 34}" width="90" height="6" rx="3" fill="#fff" opacity=".8"/><rect x="32" y="${y + 45}" width="70" height="6" rx="3" fill="#fff" opacity=".8"/>`;
      return tSvg(214, `<rect x="10" y="12" width="140" height="190" rx="14" fill="#20306A" filter="url(#bwSh)"/><clipPath id="w8mClip"><rect x="16" y="46" width="128" height="148" rx="4"/></clipPath>
        <rect x="16" y="20" width="128" height="26" rx="4" fill="#14A3B8"/>${[[L('Inici', 'Inicio'), 20], [L('Fotos', 'Fotos'), 62], [L('Mapa', 'Mapa'), 104]].map(([t, x], i) => `<text x="${x}" y="38" class="tat w s" style="font-size:13px">${t}</text>`).join('')}
        <rect x="57" y="24" width="44" height="20" rx="6" fill="none" stroke="#FFD54A" stroke-width="2.5" ${tA(.6, 'ta-pop')}/>
        <g clip-path="url(#w8mClip)"><rect x="16" y="46" width="128" height="148" fill="#F3F6FF"/><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -136;0 -136;0 0" keyTimes="0;.22;.36;.92;1" dur="5.5s" repeatCount="indefinite"/>
          ${sec(52, '#9BB7F0', L('Inici', 'Inicio'))}${sec(120, '#B8E2C8', L('Qui som', 'Quiénes somos'))}${sec(188, '#FFD7A8', L('Fotos', 'Fotos'))}${sec(256, '#E5C9F5', L('Mapa', 'Mapa'))}
          <rect x="18" y="186" width="124" height="64" rx="9" fill="none" stroke="#F2A516" stroke-width="3" ${tA(2.2, 'ta-pop')}/></g></g>
        <g><animateTransform attributeName="transform" type="translate" values="40 120;80 36;80 36;80 36" keyTimes="0;.12;.2;1" dur="5.5s" repeatCount="indefinite"/><path d="M0 0l0 18 5 -5 4 8 4 -2 -4 -8 7 0z" fill="#fff" stroke="#14204A" stroke-width="1.8" stroke-linejoin="round"/></g>
        <g ${tA(1, 'ta-in')}><rect x="164" y="30" width="148" height="40" rx="10" fill="#14204A"/><text x="238" y="56" text-anchor="middle" class="tat w" style="font-family:monospace">href="#fotos"</text></g>
        <g ${tA(1.6, 'ta-fade')}><path d="M238 76v40" stroke="#F2A516" stroke-width="4" stroke-dasharray="5 5" stroke-linecap="round"/><path d="M228 108l10 12 10-12" fill="none" stroke="#F2A516" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.2, 'ta-in')}><rect x="164" y="126" width="148" height="40" rx="10" fill="#14204A"/><text x="238" y="152" text-anchor="middle" class="tat w" style="font-family:monospace">id="fotos"</text></g>
        <text x="238" y="188" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('El mateix nom,', 'El mismo nombre,')}</text><text x="238" y="205" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('però sense #', 'pero sin #')}</text>`);
    },
    // les capes de la construcció: estructura, contingut, estil i revisió (una cada vegada)
    w8layers() {
      const rows = [[L('1. Estructura (HTML)', '1. Estructura (HTML)'), '#3D7BF4', 'M0 -8h18v5h-18zM0 0h18v10h-18z'], [L('2. Contingut: text i imatges', '2. Contenido: texto e imágenes'), '#1FA463', 'M0 -8h18v3h-18zM0 -2h14v3h-14zM0 4h18v3h-18z'], [L('3. Estil (CSS)', '3. Estilo (CSS)'), '#C2410C', 'M2 6a7 7 0 1 1 14 0c0 4 -4 3 -6 3s-8 1 -8 -3z'], [L('4. Revisió i millora', '4. Revisión y mejora'), '#8B5CF6', 'M8 0a7 7 0 1 0 0.1 0zM13 5l6 6']];
      return tSvg(214, rows.map(([t, c, d], i) => { const y = 162 - i * 46, t0 = .3 + i * 1.05; return `<g ${tA(t0, 'ta-in')}><rect x="14" y="${y}" width="292" height="38" rx="12" fill="#fff" stroke="${c}" stroke-width="2.6" filter="url(#bwSh)"/><rect x="24" y="${y + 7}" width="24" height="24" rx="7" fill="${c}"/>${i === 3 ? `<circle cx="34" cy="${y + 17}" r="5.5" fill="none" stroke="#fff" stroke-width="2.6"/><path d="M38 ${y + 21}l5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` : `<path transform="translate(27 ${y + 19})" d="${d}" fill="#fff"/>`}<text x="60" y="${y + 24}" class="tat s">${t}</text></g>${ok(286, y + 19, t0 + .6, 10)}`; }).join('')
        + `<text x="160" y="16" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.6, 'ta-fade')}>${L('Una capa cada vegada, de baix a dalt', 'Una capa cada vez, de abajo arriba')}</text>`);
    },
    // accessibilitat: el lector de pantalla llegeix l'alt i segueix els títols en ordre
    w8a11y() {
      const wave = (r, t) => `<path d="M${120 + r} 62a${r} ${r} 0 0 1 0 ${r * 1.4}" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" transform="translate(0 -${r * .7})" ${tA(t, 'ta-fade')}/>`;
      const hd = (x, y, w, tag, c, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="${c}"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-family:monospace">${tag}</text></g>`;
      return tSvg(214, `<rect x="12" y="20" width="84" height="70" rx="10" fill="#DDF5F8" stroke="#9ADBE4" stroke-width="2"/><path d="M20 82l22 -28 16 18 10 -10 22 20z" fill="#14A3B8"/><circle cx="74" cy="38" r="9" fill="#F2A516"/>
        <g ${tA(.4, 'ta-pop')}><path d="M100 50h8l10 -9v26l-10 -9h-8z" fill="#14204A"/></g>${wave(8, .7)}${wave(15, .9)}
        <g ${tA(1.2, 'ta-in')}> <rect x="10" y="98" width="152" height="46" rx="12" fill="#fff" stroke="#14A3B8" stroke-width="2.4" filter="url(#bwSh)"/><text x="20" y="117" class="tat s" style="font-family:monospace;fill:#14A3B8">alt=</text><text x="20" y="135" class="tat s">${L('«Muntanya i sol»', '«Montaña y sol»')}</text></g>
        <text x="86" y="170" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(1.6, 'ta-fade')}>${L('El lector de pantalla', 'El lector de pantalla')}</text><text x="86" y="188" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(1.6, 'ta-fade')}>${L("llegeix l'alt en veu alta", 'lee el alt en voz alta')}</text>
        ${hd(180, 20, 54, 'h1', '#3D7BF4', 2)}${hd(196, 50, 54, 'h2', '#1FA463', 2.4)}${hd(212, 80, 54, 'h3', '#1FA463', 2.8)}${hd(196, 110, 54, 'h2', '#1FA463', 3.2)}${ok(296, 92, 3.5, 11)}
        <g ${tA(4, 'ta-in')}>${hd(180, 144, 54, 'h1', '#9AA6C4', 4)}<path d="M206 170v6h14" fill="none" stroke="#9AA6C4" stroke-width="2.4"/>${hd(220, 166, 54, 'h4', '#E5484D', 4.2)}</g>${ko(296, 178, 4.5, 11)}
        <text x="238" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.4, 'ta-fade')}>${L('Sense saltar-ne cap', 'Sin saltarse ninguno')}</text>`);
    },
    // la llista de revisió: cinc coses que es comproven abans de publicar
    w8check() {
      const it = [L('Imatges amb alt', 'Imágenes con alt'), L('Títols en ordre', 'Títulos en orden'), L('Bon contrast', 'Buen contraste'), L('Sense faltes', 'Sin faltas'), L('Bé al mòbil', 'Bien en el móvil')];
      return tSvg(214, `<rect x="22" y="18" width="196" height="188" rx="12" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/><rect x="89" y="10" width="62" height="18" rx="6" fill="#B46A00"/>
        ${it.map((t, i) => `<rect x="38" y="${42 + i * 32}" width="18" height="18" rx="4" fill="#fff" stroke="#9AA6C4" stroke-width="2"/><text x="66" y="${56 + i * 32}" class="tat s">${t}</text>${ok(47, 51 + i * 32, .6 + i * .7, 9)}`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="252 40;252 40;252 72;252 104;252 136;252 168;252 168" keyTimes="0;.1;.23;.36;.49;.62;1" dur="5.5s" repeatCount="indefinite"/><circle r="22" fill="#DDF5F8" stroke="#14A3B8" stroke-width="5"/><path d="M15 15l20 20" stroke="#14A3B8" stroke-width="8" stroke-linecap="round"/><path d="M-9 -6a12 12 0 0 1 10 -7" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="276" y="30" text-anchor="middle" class="tat b" style="fill:#147A47" ${tA(4.3, 'ta-pop')}>${L('A punt!', '¡A punto!')}</text>`);
    },
    // les dades personals no van a una web pública: el nom de pila sí; l'adreça, el telèfon i l'escola, no
    w8safe() {
      const rows = [[L('Nom de pila: Aina', 'Nombre: Aina'), true], [L('Adreça de casa', 'Dirección de casa'), false], [L('Telèfon', 'Teléfono'), false], [L('Nom de l\'escola', 'Nombre del colegio'), false], [L('Fotos de la cara', 'Fotos de la cara'), false]];
      return tSvg(214, `${win(12, 12, 190, 192)}${rows.map(([t, g], i) => `<g ${tA(.3 + i * .5, 'ta-in')}><rect x="24" y="${40 + i * 32}" width="146" height="24" rx="7" fill="${g ? '#E6F6EC' : '#FDECEC'}"/><text x="32" y="${57 + i * 32}" class="tat s">${t}</text></g>${g ? ok(186, 52 + i * 32, .6 + i * .5, 10) : ko(186, 52 + i * 32, .6 + i * .5, 10)}`).join('')}
        <g ${tA(3.4, 'ta-pop')}><path d="M262 54l38 14v30c0 26 -18 42 -38 50c-20 -8 -38 -24 -38 -50v-30z" fill="#14A3B8" stroke="#0E7C8C" stroke-width="3"/><path d="M247 100l11 11 20 -24" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>
        <text x="262" y="180" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('La web és', 'La web es')}</text><text x="262" y="198" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('pública!', '¡pública!')}</text>`);
    },
    // el viatge del curs: vuit unitats, de com funciona internet a la web pròpia
    w8journey() {
      const u = [L('Internet', 'Internet'), 'HTML', L('Imatges', 'Imágenes'), 'CSS', L('Caixes', 'Cajas'), L('Disposició', 'Disposición'), L('Mòbil', 'Móvil'), L('La meva web', 'Mi web')];
      const P = [[52, 44], [122, 44], [192, 44], [262, 44], [262, 132], [192, 132], [122, 132], [52, 132]];
      const road = 'M52 44H262C306 44 306 132 262 132H52';
      return tSvg(214, `<path d="${road}" fill="none" stroke="#E2BE76" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="${road}" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="2 9" stroke-linecap="round"/>
        ${P.map(([x, y], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${i === 7 ? 19 : 15}" fill="${i === 7 ? '#F2A516' : '#14A3B8'}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s" style="font-size:${i === 7 ? 18 : 13}px">${i === 7 ? '★' : i + 1}</text></g><text x="${x}" y="${y + (i === 7 ? 38 : 34)}" text-anchor="middle" class="tat s" style="font-size:13px" ${tA(.4 + i * .45, 'ta-fade')}>${u[i]}</text>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4.3, 'ta-fade')}>${L('Vuit unitats, una web teva!', '¡Ocho unidades, una web tuya!')}</text>`);
    }
  };
})());
