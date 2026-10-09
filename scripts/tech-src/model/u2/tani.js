/* Tech 3D · Nivell 1 · unitat 2 «Formes bàsiques» · animacions de teoria (TANI). Dibuixos propis de Numi en la mateixa
   perspectiva que la vista 3D del taller (càmera de davant a la dreta: la x va cap a la dreta, la y cap al fons i la z amunt). */
Object.assign(TANI, (() => {
  const C = 0.819, S = 0.574, SE = 0.47, CE = 0.883, n = v => (+v).toFixed(1);
  const pj = (cx, cy, k) => { const f = (x, y, z) => [cx + (C * x + S * y) * k, cy + (S * x - C * y) * SE * k - CE * z * k]; f.k = k; return f; };
  const DEF = new Map();
  const gL = c => { const id = 'm2l' + c[1].slice(1) + c[2].slice(1); DEF.set(id, `<linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="${c[1]}"/><stop offset=".55" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>`); return `url(#${id})`; };
  const gR = c => { const id = 'm2r' + c[0].slice(1) + c[2].slice(1); DEF.set(id, `<radialGradient id="${id}" cx=".36" cy=".32" r=".72"><stop offset="0" stop-color="${c[0]}"/><stop offset=".55" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></radialGradient>`); return `url(#${id})`; };
  // el color del text va a style (la classe .tat fixa el color i guanyaria a l'atribut fill)
  const tFill = b => b.replace(/<text([^>]*?)\sfill="([^"]+)"([^>]*)>/g, (m, a, col, z) => { const r = a + z; return /style="/.test(r) ? `<text${r.replace(/style="([^"]*)"/, `style="fill:${col};$1"`)}>` : `<text${r} style="fill:${col}">`; });
  const svg = (h, body) => { const d = [...DEF.values()].join(''); DEF.clear(); return tSvg(h, `<defs>${d}</defs>${tFill(body)}`); };
  const P2 = (f, p) => f(...p).map(n).join(',');
  const pl = (f, L, fill, ex = '') => `<polygon points="${L.map(p => P2(f, p)).join(' ')}" fill="${fill}" ${ex}/>`;
  const bx = (f, x0, y0, z0, w, d, h, c) => pl(f, [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], c[1]) + pl(f, [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]], c[2]) + pl(f, [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], c[0]);
  const cy = (f, x, y, z0, r, h, c) => { const [X, Y] = f(x, y, z0), T = f(x, y, z0 + h)[1], a = r * f.k, b = a * SE;
    return `<path d="M${n(X - a)} ${n(T)}V${n(Y)}A${n(a)} ${n(b)} 0 0 0 ${n(X + a)} ${n(Y)}V${n(T)}Z" fill="${gL(c)}"/><ellipse cx="${n(X)}" cy="${n(T)}" rx="${n(a)}" ry="${n(b)}" fill="${c[0]}"/>`; };
  // con (top = fracció del radi de dalt: 0 = punta, entre 0 i 1 = tronc de con)
  const co = (f, x, y, z0, r, h, c, top = 0) => { const [X, Y] = f(x, y, z0), [TX, TY] = f(x, y, z0 + h), a = r * f.k, b = a * SE, at = a * top, bt = b * top;
    return top ? `<path d="M${n(X - a)} ${n(Y)}A${n(a)} ${n(b)} 0 0 0 ${n(X + a)} ${n(Y)}L${n(TX + at)} ${n(TY)}L${n(TX - at)} ${n(TY)}Z" fill="${gL(c)}"/><ellipse cx="${n(TX)}" cy="${n(TY)}" rx="${n(at)}" ry="${n(bt)}" fill="${c[0]}"/>`
      : `<path d="M${n(X - a)} ${n(Y)}A${n(a)} ${n(b)} 0 0 0 ${n(X + a)} ${n(Y)}L${n(TX)} ${n(TY)}Z" fill="${gL(c)}"/>`; };
  const shadow = (f, x, y, rx, ry) => { const [X, Y] = f(x, y, 0); return `<ellipse cx="${n(X)}" cy="${n(Y + 3)}" rx="${rx}" ry="${ry}" fill="#14204A" opacity=".13"/>`; };
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const pill = (x, y, w, txt, t, bgc = '#14204A', fg = '#fff') => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${bgc}"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s" fill="${fg}">${txt}</text></g>`;
  const arr = (x1, y1, x2, y2, col) => { const a = Math.atan2(y2 - y1, x2 - x1), hd = (x, y, s) => { const c = Math.cos(a) * s, d = Math.sin(a) * s; return `<polygon points="${n(x)},${n(y)} ${n(x - c * 7 - d * 4)},${n(y - d * 7 + c * 4)} ${n(x - c * 7 + d * 4)},${n(y - d * 7 - c * 4)}" fill="${col}"/>`; };
    return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${col}" stroke-width="2.6"/>${hd(x2, y2, 1)}${hd(x1, y1, -1)}`; };
  const chev = (x, y, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x} ${y - 7}l7 7-7 7" stroke="#9AA3B5" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const LILA = ['#C9BCFF', '#8B6CFF', '#5B3FD6'], VERD = ['#9BE3B9', '#2FB36D', '#1E8A50'], ROSA = ['#FFB3D6', '#EC5FA8', '#B83A7E'], BLAU = ['#A9C6FF', '#3D7BF4', '#2253C4'],
    GROC = ['#FFE79A', '#F7C531', '#C99A12'], GRIS = ['#DDE1EA', '#9AA3B5', '#6B7487'], TARO = ['#FFC59A', '#F5893A', '#C9631C'], VERM = ['#FFB0A8', '#E8453C', '#B32E27'],
    CEL = ['#CFEFFF', '#5BC0EB', '#2A8DBA'], NEU = ['#FFFFFF', '#E8EEF8', '#B9C6DB'], PEDRA = ['#EFE4D2', '#C9B79C', '#9C8A70'];
  const RX = '#E5484D', GY = '#22A06B', BZ = '#2F5BEA';
  return {
    // el cub: 6 cares, 12 arestes i 8 vèrtexs, i les tres mides iguals
    m21cube() {
      const f = pj(96, 160, 2.2), a = 17, h = 34, V = (x, y, z) => [x * a, y * a, z ? h : 0];
      const E = [[[-1, -1, 1], [1, -1, 1]], [[1, -1, 1], [1, 1, 1]], [[1, 1, 1], [-1, 1, 1]], [[-1, 1, 1], [-1, -1, 1]], [[-1, -1, 0], [-1, -1, 1]], [[1, -1, 0], [1, -1, 1]], [[1, 1, 0], [1, 1, 1]], [[-1, -1, 0], [1, -1, 0]], [[1, -1, 0], [1, 1, 0]]];
      const HID = [[[-1, 1, 0], [1, 1, 0]], [[-1, 1, 0], [-1, -1, 0]], [[-1, 1, 0], [-1, 1, 1]]];
      const line = (p, q, extra) => { const [x1, y1] = f(...V(...p)), [x2, y2] = f(...V(...q)); return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" ${extra}/>`; };
      const VIS = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
      const row = (y, num, txt, col, t) => `<g ${tA(t, 'ta-in')}><rect x="190" y="${y}" width="122" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="212" y="${y + 25}" text-anchor="middle" class="tat b" fill="${col}" style="font-size:20px">${num}</text><text x="234" y="${y + 23}" class="tat s">${txt}</text></g>`;
      return svg(204, `${bg(204)}<g ${tA(.1, 'ta-fade')}>${shadow(f, 0, 0, 58, 13)}${bx(f, -a, -a, 0, 2 * a, 2 * a, h, LILA)}</g>
        <g ${tA(1.8, 'ta-fade')}>${HID.map(([p, q]) => line(p, q, `stroke="#5B3FD6" stroke-width="2" stroke-dasharray="4 4" opacity=".7"`)).join('')}</g>
        ${E.map(([p, q], i) => `<g>${line(p, q, `stroke="#2253C4" stroke-width="3.5" stroke-linecap="round" pathLength="1" ${tA(1.6 + i * .08, 'ta-draw')}`)}</g>`).join('')}
        ${VIS.map((p, i) => { const [x, y] = f(...V(...p)); return `<g ${tA(2.7 + i * .07, 'ta-pop')}><circle cx="${n(x)}" cy="${n(y)}" r="5" fill="#EC5FA8" stroke="#fff" stroke-width="2"/></g>`; }).join('')}
        ${row(20, 6, L('cares', 'caras'), '#7C5CFF', .8)}${row(64, 12, L('arestes', 'aristas'), '#2253C4', 1.8)}${row(108, 8, L('vèrtexs', 'vértices'), '#EC5FA8', 2.8)}
        ${pill(190, 160, 122, 'x = y = z', 3.8, '#7C5CFF')}`);
    },
    // la pestanya Mida: cada número és una mida de la caixa (x amplada, y fondària, z alçada)
    m21resize() {
      const f = pj(90, 140, 1.6), [ax1, ay1] = f(-25, -23, 0), [ax2, ay2] = f(25, -23, 0), [bx1, by1] = f(32, -15, 0), [bx2, by2] = f(32, 15, 0), [cx0, cy0] = f(-25, -15, 0), [, cy1] = f(-25, -15, 20);
      const rowp = (y, ax, col, v, t) => `<g ${tA(t, 'ta-in')}><rect x="210" y="${y}" width="22" height="22" rx="6" fill="${col}"/><text x="221" y="${y + 16}" text-anchor="middle" class="tat s w">${ax}</text><rect x="238" y="${y}" width="56" height="22" rx="6" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="1.5"/><text x="266" y="${y + 16}" text-anchor="middle" class="tat s">${v}</text></g>`;
      return svg(204, `${bg(204)}<g ${tA(.1, 'ta-fade')}>${shadow(f, 0, 0, 56, 12)}${bx(f, -25, -15, 0, 50, 30, 20, TARO)}</g>
        <g ${tA(.8, 'ta-fade')}>${arr(ax1, ay1, ax2, ay2, RX)}<text x="${n((ax1 + ax2) / 2 - 18)}" y="${n((ay1 + ay2) / 2 + 22)}" class="tat s" fill="${RX}">x = 50</text></g>
        <g ${tA(1.8, 'ta-fade')}>${arr(bx1, by1, bx2, by2, GY)}<text x="${n(bx2 + 6)}" y="${n(by2 + 4)}" class="tat s" fill="${GY}">y = 30</text></g>
        <g ${tA(2.8, 'ta-fade')}>${arr(cx0 - 10, cy0, cx0 - 10, cy1, BZ)}<text x="${n(cx0 - 10)}" y="${n(cy1 - 10)}" text-anchor="middle" class="tat s" fill="${BZ}">z = 20</text></g>
        <g ${tA(.4, 'ta-in')}><rect x="198" y="18" width="110" height="132" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="253" y="42" text-anchor="middle" class="tat s">${L('Mida', 'Medida')} · mm</text></g>
        ${rowp(56, 'X', RX, 50, .9)}${rowp(86, 'Y', GY, 30, 1.9)}${rowp(116, 'Z', BZ, 20, 2.9)}
        ${pill(170, 166, 142, L('🔒 Proporcional', '🔒 Proporcional'), 3.8, '#7C5CFF')}`);
    },
    // apilar caixes: la z de la de dalt és on acaba la de sota (la suma de les alçades)
    m21stack() {
      const f = pj(160, 160, 2.4), B = [[50, 10, 0, BLAU, .2], [36, 15, 10, VERD, 1.2], [22, 12, 25, GROC, 2.2]];
      const lab = (w, z, t, col) => { const [x, y] = f(-w / 2, -w / 2, z); return `<g ${tA(t + .4, 'ta-fade')}><line x1="${n(x - 4)}" y1="${n(y)}" x2="66" y2="${n(y)}" stroke="${col}" stroke-width="2" stroke-dasharray="3 3"/><rect x="8" y="${n(y - 11)}" width="58" height="22" rx="11" fill="${col}"/><text x="37" y="${n(y + 5)}" text-anchor="middle" class="tat s w">z = ${z}</text></g>`; };
      return svg(212, `${bg(212)}${shadow(f, 0, 0, 92, 20)}${B.map(([w, h, z, c, t]) => `<g ${tA(t, 'ta-in')}>${bx(f, -w / 2, -w / 2, z, w, w, h, c)}</g>`).join('')}
        ${lab(50, 0, .2, BLAU[2])}${lab(36, 10, 1.2, VERD[2])}${lab(22, 25, 2.2, GROC[2])}
        ${pill(206, 18, 106, '10 + 15 = 25', 3.2, '#14204A')}<g ${tA(3.6, 'ta-fade')}><text x="259" y="64" text-anchor="middle" class="tat s" fill="#6B7487">${L('on comença', 'donde empieza')}</text><text x="259" y="82" text-anchor="middle" class="tat s" fill="#6B7487">${L('el 3r pis', 'el 3.er piso')}</text></g>`);
    },
    // el diàmetre va de vora a vora passant pel centre; el radi n'és la meitat
    m22diam() {
      const cx = 100, cyy = 104, r = 64, q = r / 1.5, grid = [0, 1, 2, 3].map(i => `<line x1="${n(cx - r + i * q)}" y1="${cyy - r}" x2="${n(cx - r + i * q)}" y2="${cyy + r}" stroke="#C9D2E6" stroke-width="1.5"/><line x1="${cx - r}" y1="${n(cyy - r + i * q)}" x2="${cx + r}" y2="${n(cyy - r + i * q)}" stroke="#C9D2E6" stroke-width="1.5"/>`).join('');
      const f = pj(262, 150, 1.5);
      return svg(204, `${bg(204)}${grid}<g ${tA(.1, 'ta-fade')}><circle cx="${cx}" cy="${cyy}" r="${r}" fill="${VERD[0]}" fill-opacity=".85" stroke="${VERD[1]}" stroke-width="3"/><circle cx="${cx}" cy="${cyy}" r="4" fill="#14204A"/></g>
        <path d="M${cx - r} ${cyy}H${cx + r}" stroke="${RX}" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.9, 'ta-draw')}/><g ${tA(1.3, 'ta-in')}><rect x="${cx - 60}" y="${cyy - 34}" width="120" height="24" rx="12" fill="#fff"/><text x="${cx}" y="${cyy - 17}" text-anchor="middle" class="tat s" fill="${RX}">${L('diàmetre 30 mm', 'diámetro 30 mm')}</text></g>
        <path d="M${cx} ${cyy}L${n(cx + r * .707)} ${n(cyy + r * .707)}" stroke="${BZ}" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(2.2, 'ta-draw')}/><g ${tA(2.6, 'ta-in')}><text x="${cx - 6}" y="${cyy + 42}" text-anchor="end" class="tat s" fill="${BZ}">${L('radi 15', 'radio 15')}</text></g>
        <g ${tA(3, 'ta-fade')}><text x="${cx}" y="194" text-anchor="middle" class="tat s" fill="#6B7487">${L('3 quadrets = 30 mm', '3 cuadritos = 30 mm')}</text></g>
        <g ${tA(3.4, 'ta-in')}>${shadow(f, 0, 0, 30, 7)}${cy(f, 0, 0, 0, 15, 30, VERD)}<text x="262" y="46" text-anchor="middle" class="tat s" fill="${RX}">x = y</text><text x="262" y="64" text-anchor="middle" class="tat s" fill="#6B7487">${L('diàmetre', 'diámetro')}</text><text x="262" y="186" text-anchor="middle" class="tat s" fill="${BZ}">z = ${L('alçada', 'altura')}</text></g>`);
    },
    // del cilindre al con: la base de dalt es fa petita (tronc de con) fins que desapareix (con)
    m22cone() {
      const A = pj(56, 132, 1.7), B = pj(160, 132, 1.7), Cc = pj(264, 132, 1.7);
      const lab = (x, txt, t) => `<g ${tA(t, 'ta-fade')}><text x="${x}" y="164" text-anchor="middle" class="tat s">${txt}</text></g>`;
      return svg(200, `${bg(200)}<g ${tA(.2, 'ta-in')}>${shadow(A, 0, 0, 26, 6)}${cy(A, 0, 0, 0, 14, 34, VERD)}</g>${lab(56, L('cilindre', 'cilindro'), .4)}${chev(104, 96, 1)}
        <g ${tA(1.3, 'ta-in')}>${shadow(B, 0, 0, 26, 6)}${co(B, 0, 0, 0, 14, 34, GROC, .5)}</g>${lab(160, L('tronc de con', 'tronco de cono'), 1.5)}${chev(210, 96, 2.1)}
        <g ${tA(2.4, 'ta-in')}>${shadow(Cc, 0, 0, 26, 6)}${co(Cc, 0, 0, 0, 14, 34, VERM)}</g>${lab(264, L('con', 'cono'), 2.6)}
        <g ${tA(1.3, 'ta-fade')}><text x="160" y="28" text-anchor="middle" class="tat s" fill="#6B7487">${L('la base de dalt es fa petita…', 'la base de arriba se hace pequeña…')}</text></g>
        ${pill(56, 172, 208, L('De dalt, tots tres són cercles', 'De arriba, los tres son círculos'), 3.4)}`);
    },
    // l'esfera: tots els punts de la superfície són a la mateixa distància del centre; de totes les vistes, un cercle
    m23sph() {
      const cx = 98, cyy = 100, r = 62, ang = [-150, -100, -40, 10, 60, 130];
      const card = (y, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="196" y="${y}" width="116" height="46" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="221" cy="${y + 23}" r="14" fill="${gR(CEL)}"/><text x="244" y="${y + 28}" class="tat s">${txt}</text></g>`;
      return svg(204, `${bg(204)}<ellipse cx="${cx}" cy="${cyy + r + 6}" rx="44" ry="8" fill="#14204A" opacity=".12"/><g ${tA(.1, 'ta-fade')}><circle cx="${cx}" cy="${cyy}" r="${r}" fill="${gR(CEL)}"/></g>
        ${ang.map((a, i) => { const x = cx + r * Math.cos(a * Math.PI / 180), y = cyy + r * Math.sin(a * Math.PI / 180); return `<path d="M${cx} ${cyy}L${n(x)} ${n(y)}" stroke="#14204A" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(.8 + i * .25, 'ta-draw')}/><g ${tA(.9 + i * .25, 'ta-pop')}><circle cx="${n(x)}" cy="${n(y)}" r="5" fill="#F7C531" stroke="#14204A" stroke-width="2"/></g>`; }).join('')}
        <circle cx="${cx}" cy="${cyy}" r="5" fill="#14204A"/>${pill(18, 172, 160, L('sempre el mateix radi', 'siempre el mismo radio'), 2.6)}
        ${card(14, L('davant', 'delante'), 3.1)}${card(68, L('dalt', 'arriba'), 3.4)}${card(122, L('costat', 'lado'), 3.7)}`);
    },
    // la piràmide: 4 cares triangulars que fan punta i 1 base: 5 cares
    m23pyr() {
      const f = pj(98, 158, 1.9), FL = [-22, -22, 0], FR = [22, -22, 0], BR = [22, 22, 0], BL = [-22, 22, 0], AP = [0, 0, 40];
      const ln = (p, q, ex) => { const [x1, y1] = f(...p), [x2, y2] = f(...q); return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" ${ex}/>`; };
      const tri = (x, y, c, t) => `<g ${tA(t, 'ta-pop')}><polygon points="${x},${y + 22} ${x + 22},${y + 22} ${x + 11},${y}" fill="${c}"/></g>`;
      const [ax, ay] = f(...AP);
      return svg(204, `${bg(204)}${shadow(f, 0, 0, 62, 14)}<g ${tA(1.2, 'ta-fade')}>${ln(BL, BR, 'stroke="#B32E27" stroke-width="2" stroke-dasharray="4 4"')}${ln(BL, FL, 'stroke="#B32E27" stroke-width="2" stroke-dasharray="4 4"')}${ln(BL, AP, 'stroke="#B32E27" stroke-width="2" stroke-dasharray="4 4"')}</g>
        <g ${tA(.2, 'ta-in')}>${pl(f, [FL, FR, AP], VERM[1])}</g><g ${tA(.6, 'ta-in')}>${pl(f, [FR, BR, AP], VERM[2])}</g>
        <g ${tA(1.8, 'ta-pop')}><circle cx="${n(ax)}" cy="${n(ay)}" r="6" fill="#F7C531" stroke="#14204A" stroke-width="2"/><text x="${n(ax + 12)}" y="${n(ay - 4)}" class="tat s">${L('vèrtex', 'vértice')}</text></g>
        ${tri(196, 34, VERM[1], 2.4)}${tri(224, 34, VERM[1], 2.6)}${tri(252, 34, VERM[1], 2.8)}${tri(280, 34, VERM[1], 3)}
        <g ${tA(2.8, 'ta-fade')}><text x="251" y="76" text-anchor="middle" class="tat s">${L('4 triangles', '4 triángulos')}</text></g>
        <g ${tA(3.3, 'ta-pop')}><text x="214" y="112" text-anchor="middle" class="tat b">+</text><rect x="232" y="94" width="26" height="26" rx="2" fill="${VERM[0]}" stroke="${VERM[1]}" stroke-width="2"/><text x="292" y="113" text-anchor="middle" class="tat s">${L('base', 'base')}</text></g>
        ${pill(196, 140, 116, L('= 5 cares', '= 5 caras'), 3.8, '#E8453C')}`);
    },
    // apilar boles: si només es toquen en un punt, trontollen; si s'encavalquen uns mil·límetres, queden enganxades
    m23overlap() {
      const snow = (x, top, wob) => { const body = `<circle cx="${x}" cy="138" r="32" fill="${gR(NEU)}" stroke="#C9D2E6" stroke-width="1.5"/>`, head = `<g${wob ? ` class="ta ta-wob" style="--t:1.2s;transform-origin:50% 100%"` : ''}><circle cx="${x}" cy="${top}" r="21" fill="${gR(NEU)}" stroke="#C9D2E6" stroke-width="1.5"/><circle cx="${x - 7}" cy="${top - 4}" r="2.6" fill="#14204A"/><circle cx="${x + 7}" cy="${top - 4}" r="2.6" fill="#14204A"/><polygon points="${x - 2},${top + 2} ${x + 2},${top + 2} ${x + 13},${top + 6}" fill="#F5893A"/></g>`;
        return `<ellipse cx="${x}" cy="172" rx="34" ry="6" fill="#14204A" opacity=".12"/>${body}${head}`; };
      return svg(214, `${bg(214)}<g ${tA(.1, 'ta-fade')}>${snow(84, 85, true)}</g><g ${tA(.4, 'ta-fade')}>${snow(236, 93, false)}</g>
        <g ${tA(1.6, 'ta-pop')}><circle cx="84" cy="106" r="13" fill="none" stroke="#E5484D" stroke-width="3"/><circle cx="84" cy="106" r="2.5" fill="#E5484D"/></g>
        <g ${tA(2.4, 'ta-fade')}><path d="M268 102h8v12h-8" stroke="#22A06B" stroke-width="3" fill="none"/><text x="282" y="113" class="tat s" fill="#1E8A50">6 mm</text></g>
        ${pill(16, 182, 136, '✗ ' + L('només un punt', 'solo un punto'), 3, '#FDECEC', '#C2343A')}${pill(168, 182, 136, '✓ ' + L("s'encavalquen", 'se solapan'), 3.4, '#E9F7EF', '#1E8A50')}`);
    },
    // simetria: la meitat dreta és el reflex de l'esquerra; les torres, a x = −40 i x = 40
    m24sym() {
      const half = `<rect x="64" y="72" width="36" height="88" fill="${PEDRA[2]}"/><polygon points="58,72 106,72 82,40" fill="${VERM[1]}"/><rect x="100" y="104" width="60" height="56" fill="${PEDRA[1]}"/>
        ${[108, 128, 148].map(x => `<rect x="${x}" y="94" width="10" height="10" fill="${PEDRA[1]}"/>`).join('')}<rect x="148" y="126" width="12" height="34" fill="#7A4A1E"/><rect x="76" y="92" width="10" height="16" rx="5" fill="#5C4A36"/>`;
      return svg(212, `${bg(212)}<rect x="20" y="160" width="280" height="6" rx="3" fill="#C9D2E6"/>
        <g ${tA(.2, 'ta-in')}>${half}</g><g transform="translate(320 0) scale(-1 1)"><g ${tA(2, 'ta-in')}>${half}</g></g>
        <g ${tA(1.1, 'ta-fade')}><line x1="160" y1="26" x2="160" y2="176" stroke="#7C5CFF" stroke-width="3" stroke-dasharray="6 5"/><rect x="122" y="10" width="76" height="24" rx="12" fill="#7C5CFF"/><text x="160" y="27" text-anchor="middle" class="tat s w">${L('mirall', 'espejo')}</text></g>
        <g ${tA(3, 'ta-pop')}><text x="82" y="186" text-anchor="middle" class="tat s" fill="#2253C4">x = −40</text><text x="238" y="186" text-anchor="middle" class="tat s" fill="#2253C4">x = 40</text></g>
        <g ${tA(3.6, 'ta-fade')}><text x="160" y="204" text-anchor="middle" class="tat s" fill="#6B7487">${L('la porta, al mig: x = 0', 'la puerta, en el medio: x = 0')}</text></g>`);
    },
    // planificar: esbós → llista de peces → model
    m24plan() {
      const panel = (x, i, title, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="30" width="96" height="140" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="${x + 16}" cy="47" r="9" fill="#7C5CFF"/><text x="${x + 16}" y="52" text-anchor="middle" class="tat s w">${i}</text><text x="${x + 30}" y="52" class="tat s">${title}</text></g>`;
      const grid = [0, 1, 2, 3, 4, 5, 6].map(k => `<line x1="${16 + k * 13.3}" y1="66" x2="${16 + k * 13.3}" y2="160" stroke="#E3E8F4"/>`).join('') + [0, 1, 2, 3, 4, 5, 6, 7].map(k => `<line x1="16" y1="${66 + k * 13.4}" x2="96" y2="${66 + k * 13.4}" stroke="#E3E8F4"/>`).join('');
      const sketch = 'M20 150V104l7-12 7 12V150M34 124H70M70 150V104l7-12 7 12V150M48 150V136h8v14M20 150H84';
      const item = (y, ico, txt, t) => `<g ${tA(t, 'ta-in')}><g transform="translate(123 ${y})">${ico}</g><text x="137" y="${y + 5}" class="tat s" style="font-size:12px">${txt}</text></g>`;
      const f = pj(264, 140, .8);
      const model = `${bx(f, -40, -6, 0, 80, 12, 30, PEDRA)}${cy(f, -40, 0, 0, 12, 50, GRIS)}${cy(f, 40, 0, 0, 12, 50, GRIS)}${co(f, -40, 0, 50, 15, 20, VERM)}${co(f, 40, 0, 50, 15, 20, VERM)}`;
      return svg(204, `${bg(204)}<text x="160" y="22" text-anchor="middle" class="tat b">${L('Primer pensa, després construeix', 'Primero piensa, después construye')}</text>
        ${panel(8, 1, L('Esbós', 'Boceto'), .2)}<g ${tA(.4, 'ta-fade')}>${grid}</g><path d="${sketch}" stroke="#4A5370" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(.6, 'ta-draw')}/>${chev(106, 100, 1.2)}
        ${panel(112, 2, L('Llista', 'Lista'), 1.4)}${item(78, `<rect x="-9" y="-5" width="18" height="10" fill="${PEDRA[1]}"/>`, L('muralla', 'muralla'), 1.7)}${item(102, `<rect x="-5" y="-8" width="10" height="16" fill="${GRIS[1]}"/>`, L('torre ×2', 'torre ×2'), 2)}
        ${item(126, `<polygon points="-8,6 8,6 0,-8" fill="${VERM[1]}"/>`, L('teulada ×2', 'tejado ×2'), 2.3)}${item(150, `<rect x="-4" y="-7" width="8" height="14" fill="#7A4A1E"/>`, L('porta', 'puerta'), 2.6)}${chev(210, 100, 2.9)}
        ${panel(216, 3, L('Model', 'Modelo'), 3.1)}<g ${tA(3.4, 'ta-pop')}>${model}</g>`);
    }
  };
})());
