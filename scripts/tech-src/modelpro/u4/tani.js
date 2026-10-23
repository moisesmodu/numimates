/* Tech 3D · Nivell 2 · unitat 4 «Variables i paràmetres» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p4var: la variable és una capsa amb nom · p4adapt: una línia canvia i el graó s'adapta · p4tabs: blocs i codi són el
   mateix programa · p4expr: un camp pot ser un càlcul · p4wall: per fora = per dins + 2 × paret · p4order: la prioritat de
   les operacions · p4deps: un paràmetre i les mides que en depenen · p4test: provar amb diversos valors · p4spec: la fitxa
   tècnica de la caixa · p4layers: la caixa de dins cap a fora. El codi es dibuixa amb lletra de màquina, com a l'editor. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  // visible només entre dos moments del cicle (segons)
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .15, b, b + .15, D]);
  const C = { ink: '#14204A', pink: '#D63F8C', pinkD: '#B02E72', pinkL: '#F48BC0', vio: '#7C5CFF', vioD: '#5B3FD6', vioL: '#B9A7FF', ora: '#F08A24', oraL: '#FFC58F', grn: '#1FA463', red: '#E8453C', blue: '#2F5BEA', gold: '#FFC531', kw: '#C9B6FF', num: '#FFD27A', mut: '#6B7390', line: '#DCE4FA' };
  const mono = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 12}" font-weight="${o.w || 700}" fill="${o.c || '#E8EEFF'}" text-anchor="${o.a || 'start'}">${t}</text>`;
  const KW = (ca, es) => `<tspan fill="${C.kw}">${L(ca, es)}</tspan>`, NU = n => `<tspan fill="${C.num}">${n}</tspan>`, VA = (ca, es) => `<tspan fill="#9FE6C1">${L(ca, es)}</tspan>`;
  const MIDA = () => VA('mida', 'medida');
  const card = (x, y, w, h, f = '#fff') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${f}" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>`;
  const panel = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="13" fill="${C.ink}"/>`;
  const txt = (x, y, s, cls = 'tat s', st = '') => `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}"${st ? ` style="${st}"` : ''}>${s}</text>`;
  const pill = (x, y, w, h, fill, s, cls = 'tat w s', st = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}"/>${txt(x + w / 2, y + h / 2 + 4.5, s, cls, st)}`;
  const badge = (x, y, ok) => `<g><circle cx="${x}" cy="${y}" r="10" fill="${ok ? C.grn : C.red}"/><path d="${ok ? `M${x - 4.5} ${y}l3 3 6 -6.5` : `M${x - 3.6} ${y - 3.6}l7.2 7.2M${x + 3.6} ${y - 3.6}l-7.2 7.2`}" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const arrow = (x1, y1, x2, y2, t, col = '#B4BEDC') => { const a = Math.atan2(y2 - y1, x2 - x1), h = 7, p1 = [x2 - h * Math.cos(a - .5), y2 - h * Math.sin(a - .5)], p2 = [x2 - h * Math.cos(a + .5), y2 - h * Math.sin(a + .5)];
    return `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="${col}" stroke-width="2.4" fill="none"/><path d="M${p1[0].toFixed(1)} ${p1[1].toFixed(1)}L${x2} ${y2}L${p2[0].toFixed(1)} ${p2[1].toFixed(1)}" stroke="${col}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`; };
  // projecció isomètrica: (x, y, z) en mm → punt de la pantalla
  const iso = (ox, oy, k = 1) => (x, y, z) => [ox + (x - y) * 0.866 * k, oy + (x + y) * 0.5 * k - z * k];
  const poly = (pts, fill) => `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="${fill}"/>`;
  // una caixa isomètrica amb la cantonada a (x0, y0, z0) i mides W × Dp × H
  const box = (P, x0, y0, z0, W, Dp, H, c = [C.pinkL, C.pink, C.pinkD]) => poly([P(x0, y0, z0 + H), P(x0 + W, y0, z0 + H), P(x0 + W, y0 + Dp, z0 + H), P(x0, y0 + Dp, z0 + H)], c[0])
    + poly([P(x0 + W, y0, z0), P(x0 + W, y0 + Dp, z0), P(x0 + W, y0 + Dp, z0 + H), P(x0 + W, y0, z0 + H)], c[2]) + poly([P(x0, y0 + Dp, z0), P(x0 + W, y0 + Dp, z0), P(x0 + W, y0 + Dp, z0 + H), P(x0, y0 + Dp, z0 + H)], c[1]);
  // el graó expositor de mida m (tres cubs) en isomètrica
  const riser = (P, m) => box(P, 0, 0, 0, m, m, m) + box(P, m, 0, 0, m, m, m) + box(P, m, 0, m, m, m, m);
  const shadow = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * .2}" fill="${C.ink}" opacity=".08"/>`;
  return {
    // la variable és una capsa amb un nom que guarda un número
    p4var() {
      const P = iso(250, 150, 1.25);
      return tSvg(196, `<rect width="320" height="196" rx="20" fill="#F1F2FB"/>
        <g ${tA(.2, 'ta-in')}><path d="M22 92h104l-8 74H30z" fill="#E9B97A"/><path d="M22 92h104l-8 74H30z" fill="none" stroke="#C98A4B" stroke-width="2.5" stroke-linejoin="round"/><path d="M22 92l-10 -16h104l10 16" fill="#F3CE97" stroke="#C98A4B" stroke-width="2.5" stroke-linejoin="round"/>
          <rect x="40" y="122" width="68" height="26" rx="8" fill="#fff" stroke="#C98A4B" stroke-width="2"/>${txt(74, 140, MIDA(), 'tat b', 'font-size:14px')}</g>
        <g ${tA(.9, 'ta-in')}><rect x="52" y="64" width="44" height="40" rx="8" fill="#fff" stroke="${C.vio}" stroke-width="2.5" filter="url(#bwSh)"/>${txt(74, 91, '30', 'tat b', `font-size:19px;fill:${C.vioD}`)}</g>
        <g ${tA(.5, 'ta-in')}>${panel(146, 14, 166, 92)}${mono(158, 42, `${MIDA()} = ${NU(30)}`, { s: 13 })}</g>
        <g ${tA(1.5, 'ta-in')}>${mono(158, 68, `${KW('cub', 'cubo')}(${MIDA()})`, { s: 13 })}</g>
        <g ${tA(2.3, 'ta-in')}>${mono(158, 93, `→ ${KW('cub', 'cubo')}(<tspan fill="${C.gold}" font-weight="900">30</tspan>)`, { s: 13, c: C.gold })}</g>
        <path d="M128 108C150 112 168 100 186 76" fill="none" stroke="${C.gold}" stroke-width="2.4" stroke-dasharray="5 4" ${tA(1.9, 'ta-fade')}/>
        <g ${tA(2.9, 'ta-pop')}>${shadow(250, 188, 44)}${box(P, 0, 0, 0, 30, 30, 30)}</g>
        <g ${tA(3.4, 'ta-in')}>${pill(134, 120, 70, 24, C.grn, L('30 mm', '30 mm'))}</g>`);
    },
    // una sola línia canvia (mida = 20 → 30 → 40) i el graó s'adapta: mides i posicions
    p4adapt() {
      const P = iso(238, 134, .85), S = [[20, 0, 1.7], [30, 1.85, 3.5], [40, 3.65, 5.3]];
      const code = S.map(([m, a, b]) => `<g opacity="0">${win(a, b)}${mono(18, 48, `${MIDA()} = <tspan fill="${C.gold}" font-weight="900">${m}</tspan>`, { s: 16 })}</g>`).join('');
      const models = S.map(([m, a, b]) => `<g opacity="0">${win(a, b)}${shadow(238 + .37 * m, 138 + .64 * m, m * 1.15)}${riser(P, m)}${txt(300, 26, `${m} mm`, 'tat b', `fill:${C.pink}`)}</g>`).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(8, 14, 180, 134)}
        <rect x="12" y="26" width="172" height="30" rx="9" fill="${C.gold}" opacity=".16"/>${code}
        ${mono(18, 82, `${KW('cub', 'cubo')}(${MIDA()})`, { s: 10.5 })}${mono(18, 104, `${KW('mou', 'mueve')}(${MIDA()}, ${NU(0)}, ${NU(0)}) …`, { s: 10.5 })}${mono(18, 126, `${KW('mou', 'mueve')}(${MIDA()}, ${NU(0)}, ${MIDA()}) …`, { s: 10.5 })}
        ${models}
        <g>${pill(8, 160, 180, 30, C.grn, L("1 línia → tot s'adapta", '1 línea → todo se adapta'))}</g>`);
    },
    // blocs i codi: el mateix programa de dues maneres
    p4tabs() {
      const blk = (y, w, fill, t, k) => `<g ${tA(.25 + k * .3, 'ta-in')}><rect x="16" y="${y}" width="${w}" height="26" rx="8" fill="${fill}"/><text x="25" y="${y + 17.5}" class="tat w s" style="font-size:11.5px">${t}</text></g>`;
      const hl = `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 3.1, 3.25, 5, 5.15, D])}<rect x="14" y="83" width="128" height="34" rx="10" fill="none" stroke="${C.gold}" stroke-width="3"/><rect x="170" y="83" width="140" height="28" rx="8" fill="${C.gold}" opacity=".22"/></g>`;
      return tSvg(196, `<rect width="320" height="196" rx="20" fill="#F1F2FB"/>
        ${card(8, 14, 142, 168)}<rect x="8" y="14" width="142" height="30" rx="14" fill="#EEF1FB"/><rect x="8" y="30" width="142" height="14" fill="#EEF1FB"/>${txt(79, 35, L('Blocs', 'Bloques'), 'tat b')}
        ${blk(54, 108, '#14A3B8', `${L('mida', 'medida')} = 30`, 0)}${blk(87, 100, C.pink, `${L('cub', 'cubo')} ${L('mida', 'medida')}`, 1)}${blk(120, 132, '#3D7BF4', `${L('mou', 'mueve')} ${L('mida', 'medida')}, 0, 0`, 2)}${blk(150, 100, C.pink, `${L('cub', 'cubo')} ${L('mida', 'medida')}`, 2.3)}
        ${panel(166, 14, 146, 168)}<rect x="166" y="14" width="146" height="30" rx="13" fill="#25325F"/><rect x="166" y="30" width="146" height="14" fill="#25325F"/>${txt(239, 35, L('Codi', 'Código'), 'tat w b')}
        <g ${tA(1.6, 'ta-in')}>${mono(176, 70, `${MIDA()} = ${NU(30)}`)}</g><g ${tA(1.9, 'ta-in')}>${mono(176, 101, `${KW('cub', 'cubo')}(${MIDA()})`)}</g>
        <g ${tA(2.2, 'ta-in')}>${mono(176, 132, `${KW('mou', 'mueve')}(${MIDA()}, ${NU(0)}, ${NU(0)})`, { s: 11 })}${mono(186, 154, `${KW('cub', 'cubo')}(${MIDA()})`, { s: 11 })}</g>
        <g ${tA(1.2, 'ta-pop')}><circle cx="158" cy="98" r="15" fill="#fff" stroke="${C.vio}" stroke-width="2.5"/><path d="M151 94h12l-3 -3M165 102h-12l3 3" fill="none" stroke="${C.vio}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g>${hl}`);
    },
    // un camp pot ser un càlcul: el programa el fa cada vegada
    p4expr() {
      const row = (y, e, v, t) => `<g ${tA(t, 'ta-in')}><rect x="168" y="${y}" width="96" height="28" rx="9" fill="#fff" stroke="${C.line}" stroke-width="2"/>${mono(178, y + 19, e, { c: C.ink, s: 12 })}<text x="272" y="${y + 19}" class="tat s" style="fill:${C.mut}">→</text>${txt(298, y + 19, v, 'tat b', `fill:${C.grn}`)}</g>`;
      return tSvg(196, `<rect width="320" height="196" rx="20" fill="#F1F2FB"/>
        <g ${tA(.2, 'ta-pop')}>${pill(14, 16, 132, 30, '#14A3B8', `${L('mida', 'medida')} = 30`)}</g>
        <g ${tA(.8, 'ta-in')}><rect x="14" y="62" width="146" height="40" rx="11" fill="${C.pink}"/><text x="24" y="87" class="tat w s">${L('esfera', 'esfera')}</text><rect x="80" y="68" width="72" height="28" rx="8" fill="#fff" stroke="${C.gold}" stroke-width="2.5"/>${txt(116, 87, `${L('mida', 'medida')} ÷ 2`, 'tat s', `fill:${C.ink};font-size:12px`)}</g>
        ${arrow(87, 108, 87, 128, 1.6, C.gold)}
        <g ${tA(2, 'ta-pop')}><rect x="14" y="134" width="146" height="40" rx="11" fill="${C.grn}"/><text x="24" y="159" class="tat w s">${L('esfera', 'esfera')}</text><rect x="80" y="140" width="72" height="28" rx="8" fill="#fff"/>${txt(116, 159, '15', 'tat b', `fill:${C.grn}`)}</g>
        ${txt(240, 34, L('Altres càlculs', 'Otros cálculos'), 'tat b')}
        ${row(52, L('mida + 10', 'medida + 10'), '40', 2.6)}${row(88, L('3 * mida', '3 * medida'), '90', 3)}${row(124, L('mida - 4', 'medida - 4'), '26', 3.4)}
        <g ${tA(3.9, 'ta-in')}>${txt(240, 178, L('× i ÷ als blocs · * i / al codi', '× y ÷ en bloques · * y / en código'), 'tat s', `fill:${C.mut};font-size:11.5px`)}</g>`);
    },
    // per fora = per dins + 2 × paret (vista de dalt de la vitrina)
    p4wall() {
      const X0 = 26, Y0 = 20, Wt = 18, In = 96;
      const dim = (x1, x2, y, t, s, col) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y}H${x2}M${x1} ${y - 5}v10M${x2} ${y - 5}v10" stroke="${col}" stroke-width="2" fill="none"/>${txt((x1 + x2) / 2, y + 17, s, 'tat s', `fill:${col};font-size:12px`)}</g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        <g ${tA(.9, 'ta-pop')}><rect x="${X0}" y="${Y0}" width="${In + 2 * Wt}" height="${In + 2 * Wt}" rx="6" fill="${C.vio}"/></g>
        <g ${tA(.2, 'ta-pop')}><rect x="${X0 + Wt}" y="${Y0 + Wt}" width="${In}" height="${In}" rx="3" fill="#fff"/><polygon points="${[0, 1, 2, 3, 4, 5].map(i => { const a = Math.PI / 3 * i + .3; return `${(X0 + Wt + In / 2 + 34 * Math.cos(a)).toFixed(1)},${(Y0 + Wt + In / 2 + 30 * Math.sin(a)).toFixed(1)}`; }).join(' ')}" fill="${C.ora}"/><polygon points="${X0 + Wt + 44},${Y0 + Wt + 30} ${X0 + Wt + 64},${Y0 + Wt + 38} ${X0 + Wt + 50},${Y0 + Wt + 58}" fill="${C.oraL}"/></g>
        ${dim(X0, X0 + Wt, 168, 1.5, L('paret', 'pared'), C.vioD)}${dim(X0 + Wt, X0 + Wt + In, 168, 1.8, L('mida', 'medida'), C.ora)}${dim(X0 + Wt + In, X0 + 2 * Wt + In, 168, 2.1, L('paret', 'pared'), C.vioD)}
        <g ${tA(2.7, 'ta-in')}><rect x="180" y="40" width="132" height="92" rx="13" fill="#fff" stroke="${C.line}" stroke-width="2"/>${txt(246, 64, L('per fora', 'por fuera'), 'tat b')}${txt(246, 88, `${L('mida', 'medida')} + 2 × ${L('paret', 'pared')}`, 'tat s', 'font-size:11.5px')}${txt(246, 116, '30 + 2 × 2 = 34', 'tat b', `fill:${C.vioD};font-size:13px`)}</g>
        <g ${tA(3.4, 'ta-in')}>${txt(160, 206, L('una paret a cada costat: per això × 2', 'una pared a cada lado: por eso × 2'), 'tat s', `fill:${C.mut};font-size:11.5px`)}</g>`);
    },
    // la prioritat: primer × i ÷, després + i −; els parèntesis canvien l'ordre
    p4order() {
      const col = (x, t0, e, mid, res, ok) => `<g ${tA(t0, 'ta-in')}>${card(x, 14, 146, 168)}${txt(x + 73, 46, e, 'tat b', 'font-size:16px')}</g>
        <g ${tA(t0 + .8, 'ta-in')}>${arrow(x + 73, 58, x + 73, 76, t0 + .8)}${txt(x + 73, 100, mid, 'tat b', `font-size:16px;fill:${C.mut}`)}</g>
        <g ${tA(t0 + 1.6, 'ta-pop')}>${pill(x + 23, 120, 100, 34, ok ? C.grn : C.ora, '= ' + res, 'tat w b', 'font-size:16px')}</g>`;
      return tSvg(196, `<rect width="320" height="196" rx="20" fill="#F1F2FB"/>
        ${col(8, .2, `30 + <tspan fill="${C.pink}">2 × 2</tspan>`, '30 + 4', '34', true)}${col(166, 1.7, `<tspan fill="${C.pink}">(30 + 2)</tspan> × 2`, '32 × 2', '64', false)}
        <g ${tA(.5, 'ta-fade')}>${txt(81, 172, L('primer ×, després +', 'primero ×, después +'), 'tat s', `fill:${C.mut};font-size:12px`)}</g><g ${tA(2, 'ta-fade')}>${txt(239, 172, L('primer el parèntesi', 'primero el paréntesis'), 'tat s', `fill:${C.mut};font-size:12px`)}</g>`);
    },
    // un paràmetre (d) i les mides que en depenen
    p4deps() {
      const node = (cx, cy, w, s, fill, t, tc = '#fff') => `<g ${tA(t, 'ta-pop')}><rect x="${cx - w / 2}" y="${cy - 15}" width="${w}" height="30" rx="10" fill="${fill}" filter="url(#bwSh)"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="12.5" font-weight="800" fill="${tc}">${s}</text></g>`;
      // el suport vist de costat (tall): base d + 10, alçada d / 4 + 4, la geoda s'hi enfonsa d / 4
      const sx = 255, gy = 182, k = 1.05, d = 40, b = d + 10, h = d / 4 + 4, cz = h + d / 4;
      return tSvg(210, `<rect width="320" height="210" rx="20" fill="#F1F2FB"/>
        ${node(100, 28, 92, 'd = 40', C.gold, .2, C.ink)}
        <path d="M100 44V58M100 58L46 76M100 58L106 126M100 58L162 76" stroke="#B4BEDC" stroke-width="2.4" fill="none" ${tA(.8, 'ta-draw')} pathLength="1"/>
        ${node(44, 92, 80, 'd + 10', C.pink, 1.2)}${node(106, 142, 96, 'd / 4 + 4', C.pink, 1.5)}${node(166, 92, 80, 'h + d/4', C.pink, 1.8)}
        <g ${tA(2.1, 'ta-in')}>${txt(44, 122, L('base', 'base'), 'tat s', `fill:${C.mut};font-size:12px`)}${txt(106, 172, L('alçada h', 'altura h'), 'tat s', `fill:${C.mut};font-size:12px`)}${txt(172, 122, L('el niu', 'el nido'), 'tat s', `fill:${C.mut};font-size:12px`)}</g>
        <g ${tA(2.6, 'ta-in')}><defs><clipPath id="p4dpc"><rect x="${sx - b / 2 * k}" y="${gy - h * k}" width="${b * k}" height="${h * k}"/></clipPath></defs>
          <rect x="${sx - b / 2 * k}" y="${gy - h * k}" width="${b * k}" height="${h * k}" rx="3" fill="${C.vio}"/><circle cx="${sx}" cy="${gy - cz * k}" r="${d / 2 * k}" fill="#F1F2FB" clip-path="url(#p4dpc)"/>
          <circle cx="${sx}" cy="${gy - cz * k}" r="${d / 2 * k - 1}" fill="#C7B8E8" stroke="${C.vioD}" stroke-width="2"/>${[[-8, -6], [6, -10], [0, 4], [-4, 10], [9, 5]].map(([a, c]) => `<polygon points="${sx + a},${gy - cz * k + c - 5} ${sx + a + 4},${gy - cz * k + c} ${sx + a},${gy - cz * k + c + 5} ${sx + a - 4},${gy - cz * k + c}" fill="#fff" opacity=".85"/>`).join('')}
          <path d="M${sx - 70} ${gy}H${sx + 60}" stroke="#C9D2EA" stroke-width="3"/></g>
        ${arrow(210, 92, 226, 120, 2.4, C.pink)}
        <g ${tA(3.2, 'ta-in')}>${txt(160, 200, L('canvia d i tot es torna a calcular', 'cambia d y todo se vuelve a calcular'), 'tat s', `fill:${C.mut};font-size:12px`)}</g>`);
    },
    // provar el disseny amb diversos valors: amb fórmules, sempre bé; amb números a mà, falla
    p4test() {
      const stand = (x, t, d, b, h, cz, ok, lab) => { const k = .86, gy = 150, cx = x + 37;
        return `<g ${tA(t, 'ta-in')}>${card(x, 14, 74, 178)}<defs><clipPath id="p4tc${x}"><rect x="${cx - b / 2 * k}" y="${gy - h * k}" width="${b * k}" height="${h * k}"/></clipPath></defs>
          <rect x="${cx - b / 2 * k}" y="${gy - h * k}" width="${b * k}" height="${h * k}" rx="2" fill="${C.vio}"/><circle cx="${cx}" cy="${gy - cz * k}" r="${d / 2 * k}" fill="#fff" clip-path="url(#p4tc${x})"/>
          <circle cx="${cx}" cy="${gy - cz * k}" r="${d / 2 * k - 1}" fill="#C7B8E8" stroke="${C.vioD}" stroke-width="1.6" opacity=".95"/>
          ${!ok ? `<circle cx="${cx}" cy="${gy - 2}" r="10" fill="none" stroke="${C.red}" stroke-width="2.4" stroke-dasharray="4 3"/><path d="M${cx - 9} ${gy + 4}l4 5 4 -5 4 5 4 -5" fill="none" stroke="${C.red}" stroke-width="2.4"/>` : ''}<path d="M${x + 6} ${gy}H${x + 68}" stroke="#C9D2EA" stroke-width="2.5"/>
          ${txt(cx, 170, lab, 'tat s', `font-size:12px;${ok ? '' : `fill:${C.red}`}`)}<g ${tA(t + .5, 'ta-pop')}>${badge(x + 60, 30, ok)}</g></g>`; };
      const F = d => [d, d + 10, d / 4 + 4, d / 2 + 4];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${stand(4, .2, ...F(24), true, 'd = 24')}${stand(82, .8, ...F(40), true, 'd = 40')}${stand(160, 1.4, ...F(64), true, 'd = 64')}
        ${stand(242, 2.4, 64, 50, 14, 30, false, L('a mà', 'a mano'))}
        <g ${tA(2.9, 'ta-in')}>${txt(279, 186, 'base = 50', 'tat s', `fill:${C.red};font-size:11px`)}</g>`);
    },
    // la fitxa tècnica de la caixa: el que diu l'encàrrec, el que decidim i el que calculem
    p4spec() {
      const row = (y, k, v, t, col = C.ink) => `<g ${tA(t, 'ta-in')}><text x="22" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="13" font-weight="800" fill="${col}">${k}</text><text x="84" y="${y}" class="tat s">${v}</text></g>`;
      const trilo = `<g transform="translate(120 38)"><ellipse rx="16" ry="10" fill="#C9A27A"/>${[-8, -3, 2, 7].map(x => `<path d="M${x} -9v18" stroke="#8E6A47" stroke-width="1.6"/>`).join('')}<path d="M-16 0h32" stroke="#8E6A47" stroke-width="1.4"/><ellipse cx="-17" rx="5" ry="7" fill="#B88D62"/></g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        <g ${tA(.2, 'ta-in')}>${card(8, 12, 146, 190)}${txt(58, 43, L('Encàrrec', 'Encargo'), 'tat b')}${trilo}</g>
        ${row(70, 'ox', '50 mm', .5)}${row(92, 'oy', '30 mm', .7)}${row(114, 'oz', '20 mm', .9)}
        <g ${tA(1.3, 'ta-in')}><path d="M20 128H142" stroke="${C.line}" stroke-width="2"/>${txt(81, 148, L('Decidim', 'Decidimos'), 'tat b', `fill:${C.pink}`)}</g>
        ${row(170, L('paret', 'pared'), '2 mm', 1.6, C.pink)}${row(192, 'aire', '1 mm', 1.8, C.pink)}
        ${arrow(158, 107, 176, 107, 2.3, C.pink)}
        <g ${tA(2.6, 'ta-in')}>${panel(180, 12, 132, 190)}${txt(246, 40, L('Calculem', 'Calculamos'), 'tat w b')}</g>
        <g ${tA(3, 'ta-in')}>${mono(190, 70, `${VA('dins', 'dentro')} 52·32·21`, { s: 11.5 })}</g><g ${tA(3.4, 'ta-in')}>${mono(190, 98, `${VA('fora', 'fuera')} 56·36·23`, { s: 11.5 })}</g>
        <g ${tA(3.8, 'ta-in')}>${mono(190, 126, `${VA('tapa', 'tapa')} 62·42·10`, { s: 11.5 })}</g>
        <g ${tA(4.2, 'ta-pop')}>${pill(190, 150, 112, 32, C.grn, L('tot amb fórmules', 'todo con fórmulas'), 'tat w s', 'font-size:12px')}</g>`);
    },
    // la caixa de dins cap a fora (tall vist de davant): l'objecte, l'aire, les parets i la tapa (esquemàtic, no a escala)
    p4layers() {
      const gy = 172, W = 9, A = 7, O = 76, Oh = 38, bx = 18;
      const bw = O + 2 * A + 2 * W, bh = Oh + A + W, lx = bx + bw + 18, lw = bw + 2 * A + 2 * W, lh = 34;
      const lab = (x, y, x2, y2, s, col, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x} ${y + 3}L${x2} ${y2}" stroke="${col}" stroke-width="1.6"/><circle cx="${x2}" cy="${y2}" r="2.4" fill="${col}"/>${txt(x, y, s, 'tat s', `fill:${col};font-size:11.5px`)}</g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        <path d="M8 ${gy}H312" stroke="#C9D2EA" stroke-width="3"/>
        <g ${tA(.2, 'ta-pop')}><rect x="${bx + W + A}" y="${gy - W - Oh}" width="${O}" height="${Oh}" rx="9" fill="#C9A27A"/>${[1, 2, 3, 4].map(i => `<path d="M${bx + W + A + i * O / 5} ${gy - W - Oh + 6}v${Oh - 12}" stroke="#8E6A47" stroke-width="2"/>`).join('')}</g>
        <g ${tA(.9, 'ta-fade')}><rect x="${bx + W}" y="${gy - bh}" width="${O + 2 * A}" height="${Oh + A}" fill="none" stroke="${C.ora}" stroke-width="2" stroke-dasharray="4 3"/></g>
        <g ${tA(1.5, 'ta-in')}><path d="M${bx} ${gy}V${gy - bh}h${W}V${gy - W}h${O + 2 * A}V${gy - bh}h${W}V${gy}Z" fill="${C.vio}"/></g>
        <g ${tA(2, 'ta-fade')}><path d="M${bx + W + A} ${gy + 14}h${O}M${bx + W + A} ${gy + 10}v8M${bx + W + A + O} ${gy + 10}v8" stroke="#8E6A47" stroke-width="1.8" fill="none"/>${txt(bx + W + A + O / 2, gy + 32, L('ox: el fòssil', 'ox: el fósil'), 'tat s', 'fill:#8E6A47;font-size:11.5px')}</g>
        ${lab(bx + 22, gy - bh - 30, bx + W + A / 2, gy - bh + 8, 'aire', C.ora, 2.2)}${lab(bx + 70, gy - bh - 14, bx + W + O + A * 2 + W / 2, gy - bh + 14, L('paret', 'pared'), C.vioD, 2.4)}
        <g ${tA(2.8, 'ta-in')}>${txt(bx + bw / 2, 24, 'ix = ox + 2·aire', 'tat s', `fill:${C.ora};font-size:12px`)}${txt(bx + bw / 2, 44, `ex = ix + 2·${L('paret', 'pared')}`, 'tat s', `fill:${C.vioD};font-size:12px`)}</g>
        <g ${tA(3.3, 'ta-in')}><path d="M${lx} ${gy}V${gy - lh}h${W}V${gy - W}h${lw - 2 * W}V${gy - lh}h${W}V${gy}Z" fill="${C.pink}"/>${txt(lx + lw / 2, gy - lh - 12, L('la tapa, del revés', 'la tapa, del revés'), 'tat s', `fill:${C.pink};font-size:12px`)}</g>
        <g ${tA(3.8, 'ta-fade')}>${txt(lx + lw / 2, gy - lh - 32, 'tx = ex + 2·aire + 2·p', 'tat s', `fill:${C.pinkD};font-size:11px`)}</g>`);
    }
  };
})());
