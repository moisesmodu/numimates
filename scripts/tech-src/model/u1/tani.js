/* Tech 3D · Nivell 1 · unitat 1 · animacions de teoria (TANI). Dibuixos propis de Numi en perspectiva isomètrica. */
Object.assign(TANI, (() => {
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix (320 × h)
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // una caixa en isomètric amb tres tons
  const box = (f, x0, y0, z0, w, d, h, c, op = '') => { const t = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], L = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<g ${op}><polygon points="${pts(f, L)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, t)}" fill="${c[0]}"/></g>`; };
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], TARONJA = ['#FFC59A', '#F5893A', '#D06A1E'];
  const plate = (f, n) => { let g = `<polygon points="${pts(f, [[-n, -n, 0], [n, -n, 0], [n, n, 0], [-n, n, 0]])}" fill="#2E3446"/>`; for (let v = -n; v <= n; v += 10) g += `<polyline points="${pts(f, [[v, -n, 0], [v, n, 0]])}" stroke="#4A5370" stroke-width="1" fill="none"/><polyline points="${pts(f, [[-n, v, 0], [n, v, 0]])}" stroke="#4A5370" stroke-width="1" fill="none"/>`; return g; };
  return {
    // els tres eixos: x (vermell), y (verd) i z (blau), i un cub que es mou per cada eix
    m3axes() {
      const f = iso(160, 120, 1.55);
      const ax = (to, col, lab, t) => { const [x1, y1] = f(0, 0, 0), [x2, y2] = f(...to); return `<g ${tA(t, 'ta-fade')}><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="13" fill="${col}"/><text x="${x2}" y="${y2 + 5}" text-anchor="middle" class="tat w b">${lab}</text></g>`; };
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${plate(f, 40)}
        ${ax([52, 0, 0], '#E5484D', 'x', .2)}${ax([0, 52, 0], '#22A06B', 'y', .9)}${ax([0, 0, 52], '#2F5BEA', 'z', 1.6)}
        <circle cx="${f(0, 0, 0)[0]}" cy="${f(0, 0, 0)[1]}" r="5" fill="#fff" stroke="#14204A" stroke-width="2"/>
        <g ${tA(2.4, 'ta-in')}><rect x="8" y="10" width="112" height="30" rx="15" fill="#fff" filter="url(#bwSh)"/><text x="64" y="30" text-anchor="middle" class="tat s">${L('origen (0, 0, 0)', 'origen (0, 0, 0)')}</text></g>
        <g ${tA(3, 'ta-in')}><text x="306" y="186" text-anchor="end" class="tat s" fill="#E5484D">${L('x: esquerra → dreta', 'x: izquierda → derecha')}</text></g>
        <g ${tA(3.4, 'ta-in')}><text x="306" y="22" text-anchor="end" class="tat s" fill="#22A06B">${L('y: davant → darrere', 'y: delante → detrás')}</text></g>
        <g ${tA(3.8, 'ta-in')}><text x="14" y="186" class="tat s" fill="#2F5BEA">${L('z: cap amunt', 'z: hacia arriba')}</text></g>`);
    },
    // una casa i les seves tres vistes: davant, dalt i costat
    m3views() {
      const f = iso(92, 116, 1.25);
      const casa = `${box(f, -20, -15, 0, 40, 30, 24, TARONJA)}<polygon points="${pts(f, [[-23, -18, 24], [23, -18, 24], [0, 0, 42]])}" fill="#E8453C"/><polygon points="${pts(f, [[23, -18, 24], [23, 18, 24], [0, 0, 42]])}" fill="#B8322B"/>
        <polygon points="${pts(f, [[-5, -15.2, 0], [5, -15.2, 0], [5, -15.2, 14], [-5, -15.2, 14]])}" fill="#7A4A1E"/>`;
      const card = (x, y, lab, body, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="96" height="56" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g transform="translate(${x + 30} ${y + 8})">${body}</g><text x="${x + 48}" y="${y + 52}" text-anchor="middle" class="tat s">${lab}</text></g>`;
      const front = `<rect x="2" y="16" width="32" height="20" fill="#F5893A"/><polygon points="0,16 36,16 18,2" fill="#E8453C"/><rect x="14" y="24" width="8" height="12" fill="#7A4A1E"/>`;
      const top = `<rect x="0" y="4" width="36" height="28" fill="#E8453C"/><path d="M0 4L18 18L36 4M0 32L18 18L36 32" stroke="#B8322B" stroke-width="1.5" fill="none"/>`;
      const side = `<rect x="4" y="16" width="28" height="20" fill="#D06A1E"/><polygon points="2,16 34,16 18,2" fill="#B8322B"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><ellipse cx="92" cy="160" rx="62" ry="14" fill="#14204A" opacity=".12"/>${casa}
        <g ${tA(.4, 'ta-fade')}><text x="92" y="190" text-anchor="middle" class="tat s">${L('perspectiva', 'perspectiva')}</text></g>
        ${card(208, 8, L('davant', 'delante'), front, 1.2)}${card(208, 72, L('dalt', 'arriba'), top, 2.2)}${card(208, 136, L('costat', 'lado'), side, 3.2)}`);
    }
  };
})());
/* m1-2 (les vistes) i m1-4 (la primera escultura): dibuixos propis en la mateixa perspectiva que la vista 3D del taller
   (càmera de davant a la dreta: la x va cap a la dreta i avall, la y cap al fons i la z amunt). */
Object.assign(TANI, (() => {
  const C = 0.819, S = 0.574, SE = 0.47, CE = 0.883, n = v => (+v).toFixed(1);
  const pj = (cx, cy, k) => { const f = (x, y, z) => [cx + (C * x + S * y) * k, cy + (S * x - C * y) * SE * k - CE * z * k]; f.k = k; return f; };
  const DEF = new Map();
  const gL = c => { const id = 'm12l' + c[1].slice(1) + c[2].slice(1); DEF.set(id, `<linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="${c[1]}"/><stop offset=".55" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>`); return `url(#${id})`; };
  const gR = c => { const id = 'm12r' + c[0].slice(1) + c[2].slice(1); DEF.set(id, `<radialGradient id="${id}" cx=".36" cy=".32" r=".72"><stop offset="0" stop-color="${c[0]}"/><stop offset=".55" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></radialGradient>`); return `url(#${id})`; };
  // el color del text va a style (la classe .tat fixa el color i guanyaria a l'atribut fill)
  const tFill = b => b.replace(/<text([^>]*?)\sfill="([^"]+)"([^>]*)>/g, (m, a, col, z) => { const r = a + z; return /style="/.test(r) ? `<text${r.replace(/style="([^"]*)"/, `style="fill:${col};$1"`)}>` : `<text${r} style="fill:${col}">`; });
  const svg = (h, body) => { const d = [...DEF.values()].join(''); DEF.clear(); return tSvg(h, `<defs>${d}</defs>${tFill(body)}`); };
  const pl = (f, L, fill, ex = '') => `<polygon points="${L.map(p => f(...p).map(n).join(',')).join(' ')}" fill="${fill}" ${ex}/>`;
  // caixa (x0, y0, z0 = cantonada de davant a l'esquerra i a baix), cilindre, con i esfera
  const bx = (f, x0, y0, z0, w, d, h, c) => pl(f, [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], c[1]) + pl(f, [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]], c[2]) + pl(f, [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], c[0]);
  const cy = (f, x, y, z0, r, h, c) => { const [X, Y] = f(x, y, z0), T = f(x, y, z0 + h)[1], a = r * f.k, b = a * SE;
    return `<path d="M${n(X - a)} ${n(T)}V${n(Y)}A${n(a)} ${n(b)} 0 0 0 ${n(X + a)} ${n(Y)}V${n(T)}Z" fill="${gL(c)}"/><ellipse cx="${n(X)}" cy="${n(T)}" rx="${n(a)}" ry="${n(b)}" fill="${c[0]}"/>`; };
  const co = (f, x, y, z0, r, h, c) => { const [X, Y] = f(x, y, z0), [TX, TY] = f(x, y, z0 + h), a = r * f.k, b = a * SE;
    return `<path d="M${n(X - a)} ${n(Y)}A${n(a)} ${n(b)} 0 0 0 ${n(X + a)} ${n(Y)}L${n(TX)} ${n(TY)}Z" fill="${gL(c)}"/>`; };
  const sp = (f, x, y, zc, r, c) => { const [X, Y] = f(x, y, zc); return `<circle cx="${n(X)}" cy="${n(Y)}" r="${n(r * f.k)}" fill="${gR(c)}"/>`; };
  const shadow = (f, x, y, rx, ry) => { const [X, Y] = f(x, y, 0); return `<ellipse cx="${n(X)}" cy="${n(Y + 3)}" rx="${rx}" ry="${ry}" fill="#14204A" opacity=".13"/>`; };
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const LILA = ['#C9BCFF', '#8B6CFF', '#5B3FD6'], VERD = ['#9BE3B9', '#2FB36D', '#1E8A50'], ROSA = ['#FFB3D6', '#EC5FA8', '#B83A7E'], BLAU = ['#A9C6FF', '#3D7BF4', '#2253C4'],
    GROC = ['#FFE79A', '#F7C531', '#C99A12'], GRIS = ['#DDE1EA', '#9AA3B5', '#6B7487'], TARO = ['#FFC59A', '#F5893A', '#C9631C'];
  const eye = (x, y, col, t) => `<g ${tA(t)}><g transform="translate(${x} ${y})"><ellipse rx="16" ry="10.5" fill="#fff" stroke="${col}" stroke-width="3"/><circle r="6" fill="${col}"/><circle cx="1.8" cy="-1.8" r="2.1" fill="#fff"/></g></g>`;
  const ray = (x1, y1, x2, y2, col, t) => `<g ${tA(t, 'ta-fade')}><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/></g>`;
  const arr = (x1, y1, x2, y2, col) => { const a = Math.atan2(y2 - y1, x2 - x1), hd = (x, y, s) => { const c = Math.cos(a) * s, d = Math.sin(a) * s; return `<polygon points="${n(x)},${n(y)} ${n(x - c * 7 - d * 4)},${n(y - d * 7 + c * 4)} ${n(x - c * 7 + d * 4)},${n(y - d * 7 - c * 4)}" fill="${col}"/>`; };
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2.6"/>${hd(x2, y2, 1)}${hd(x1, y1, -1)}`; };
  return {
    // tres ulls miren la mateixa estació des de davant, de dalt i del costat; cada un en treu una «foto» plana
    m12cams() {
      const f = pj(92, 160, 2);
      const obj = `${shadow(f, 0, 0, 62, 15)}${bx(f, -20, -12, 0, 40, 24, 18, LILA)}${pl(f, [[-14, -12.1, 0], [-6, -12.1, 0], [-6, -12.1, 12], [-14, -12.1, 12]], '#3A2A6B')}${cy(f, 12, 0, 18, 7, 22, VERD)}${co(f, 12, 0, 40, 9, 12, ROSA)}`;
      const card = (y, col, a, b, body, t) => `<g ${tA(t, 'ta-in')}><rect x="196" y="${y}" width="116" height="58" rx="12" fill="#fff" stroke="${col}" stroke-width="2.5" filter="url(#bwSh)"/>${body}<text x="262" y="${y + 27}" class="tat s" fill="${col}">${a}</text><text x="262" y="${y + 45}" class="tat s" fill="#6B7487">${b}</text></g>`;
      const s = .8, ox = 204, F = (x, z, y0) => [ox + (x + 20) * s, y0 - z * s];
      const front = y => { const b = y + 50, r = (x0, z0, w, h, c) => `<rect x="${n(F(x0, 0, b)[0])}" y="${n(b - (z0 + h) * s)}" width="${n(w * s)}" height="${n(h * s)}" fill="${c}"/>`;
        return `${r(-20, 0, 40, 18, LILA[1])}${r(-14, 0, 8, 12, '#3A2A6B')}${r(5, 18, 14, 22, VERD[1])}<polygon points="${n(F(3, 40, b)[0])},${n(b - 40 * s)} ${n(F(21, 40, b)[0])},${n(b - 40 * s)} ${n(F(12, 52, b)[0])},${n(b - 52 * s)}" fill="${ROSA[1]}"/>`; };
      const top = y => { const b = y + 48; return `<rect x="${ox}" y="${n(b - 24 * s)}" width="${n(40 * s)}" height="${n(24 * s)}" fill="${LILA[0]}"/><line x1="${n(ox + 6 * s)}" y1="${b}" x2="${n(ox + 14 * s)}" y2="${b}" stroke="#3A2A6B" stroke-width="3"/><circle cx="${n(ox + 32 * s)}" cy="${n(b - 12 * s)}" r="${n(9 * s)}" fill="${ROSA[0]}" stroke="${ROSA[1]}" stroke-width="1.5"/><circle cx="${n(ox + 32 * s)}" cy="${n(b - 12 * s)}" r="1.8" fill="${ROSA[2]}"/>`; };
      const side = y => { const b = y + 50, m = ox + 16; return `<rect x="${n(m - 12 * s)}" y="${n(b - 18 * s)}" width="${n(24 * s)}" height="${n(18 * s)}" fill="${LILA[2]}"/><rect x="${n(m - 7 * s)}" y="${n(b - 40 * s)}" width="${n(14 * s)}" height="${n(22 * s)}" fill="${VERD[2]}"/><polygon points="${n(m - 9 * s)},${n(b - 40 * s)} ${n(m + 9 * s)},${n(b - 40 * s)} ${n(m)},${n(b - 52 * s)}" fill="${ROSA[2]}"/>`; };
      return svg(214, `${bg(214)}<g ${tA(.1, 'ta-fade')}>${obj}</g>
        ${eye(24, 196, '#2F5BEA', .7)}${ray(38, 188, 70, 162, '#2F5BEA', .9)}${card(8, '#2F5BEA', L('Davant', 'Delante'), L('alçat', 'alzado'), front(8), 1.2)}
        ${eye(104, 22, '#22A06B', 1.9)}${ray(104, 34, 106, 62, '#22A06B', 2.1)}${card(76, '#22A06B', L('Dalt', 'Arriba'), L('planta', 'planta'), top(76), 2.4)}
        ${eye(172, 178, '#E8771E', 3.1)}${ray(158, 172, 134, 160, '#E8771E', 3.3)}${card(144, '#E8771E', L('Costat', 'Lado'), L('perfil', 'perfil'), side(144), 3.6)}`);
    },
    // cada vista és plana: només hi caben dues de les tres mides (amplada x, fondària y, alçada z)
    m12dims() {
      const R = '#E5484D', G = '#22A06B', B = '#2F5BEA';
      const col = (x, t, title, w, h, fill, hz, vt, gone, gc) => { const cx = x + 49, top = 96 - h, l = cx - w / 2;
        return `<g ${tA(t, 'ta-in')}><rect x="${x}" y="8" width="98" height="182" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="${cx}" y="32" text-anchor="middle" class="tat b">${title}</text><rect x="${n(l)}" y="${top}" width="${w}" height="${h}" rx="2" fill="${fill}"/></g>
          <g ${tA(t + .5, 'ta-fade')}>${arr(l, 106, l + w, 106, hz[1])}${arr(l - 8, top, l - 8, 96, vt[1])}
          <text x="${cx}" y="128" text-anchor="middle" class="tat s" fill="${hz[1]}">${hz[0]}</text><text x="${cx}" y="147" text-anchor="middle" class="tat s" fill="${vt[1]}">${vt[0]}</text></g>
          <g ${tA(4, 'ta-pop')}><text x="${cx}" y="167" text-anchor="middle" class="tat s" fill="#6B7487">${L('no es veu:', 'no se ve:')}</text><text x="${cx}" y="183" text-anchor="middle" class="tat s" fill="${gc}">${gone}</text><line x1="${cx - 30}" y1="178" x2="${cx + 30}" y2="178" stroke="${gc}" stroke-width="2"/></g>`; };
      const A = [L('amplada', 'anchura'), R], F = [L('fondària', 'fondo'), G], H = [L('alçada', 'altura'), B];
      return svg(198, `${bg(198)}${col(8, .2, L('Davant', 'Delante'), 60, 30, LILA[1], A, H, F[0], G)}${col(111, 1.5, L('Dalt', 'Arriba'), 60, 45, LILA[0], A, F, H[0], B)}${col(214, 2.8, L('Costat', 'Lado'), 45, 30, LILA[2], F, H, A[0], R)}`);
    },
    // un cub i un cilindre: de davant són iguals, de dalt són diferents
    m12trick() {
      const f1 = pj(96, 70, 1.5), f2 = pj(222, 70, 1.5), sq = (cx, y, c) => `<rect x="${cx - 16}" y="${y}" width="32" height="32" rx="2" fill="${c}"/>`;
      return svg(212, `${bg(212)}<g ${tA(.1, 'ta-fade')}>${shadow(f1, 0, 0, 28, 7)}${bx(f1, -12, -12, 0, 24, 24, 24, BLAU)}${shadow(f2, 0, 0, 28, 7)}${cy(f2, 0, 0, 0, 12, 24, BLAU)}</g>
        <g ${tA(1, 'ta-in')}><text x="14" y="112" class="tat s" fill="#2F5BEA">${L('Davant', 'Delante')}</text>${sq(110, 92, BLAU[1])}${sq(220, 92, BLAU[1])}<text x="165" y="117" text-anchor="middle" class="tat b" fill="#22A06B" style="font-size:28px">=</text></g>
        <g ${tA(2.2, 'ta-in')}><text x="14" y="157" class="tat s" fill="#22A06B">${L('Dalt', 'Arriba')}</text>${sq(110, 136, BLAU[0])}<circle cx="220" cy="152" r="16" fill="${BLAU[0]}"/><text x="165" y="162" text-anchor="middle" class="tat b" fill="#E5484D" style="font-size:28px">≠</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="62" y="178" width="196" height="28" rx="14" fill="#14204A"/><text x="160" y="197" text-anchor="middle" class="tat s w">${L("Mira'l des de més d'una vista!", '¡Míralo desde más de una vista!')}</text></g>`);
    },
    // el procés de disseny: idea, esbós, model i revisió (i tornar a millorar)
    m14steps() {
      const card = (i, x, lab, icon, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="34" width="70" height="98" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="${x + 14}" cy="48" r="9" fill="#7C5CFF"/><text x="${x + 14}" y="53" text-anchor="middle" class="tat s w">${i}</text>
        <g transform="translate(${x + 35} 82)">${icon}</g><text x="${x + 35}" y="124" text-anchor="middle" class="tat s">${lab}</text></g>`;
      const chev = (x, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x} 76l6 7-6 7" stroke="#9AA3B5" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const bulb = `<circle cy="-6" r="13" fill="#F7C531"/><rect x="-6" y="6" width="12" height="9" rx="2" fill="#9AA3B5"/><path d="M-4 -6l4 6 4-6" stroke="#C99A12" stroke-width="2" fill="none"/>${[0, 1, 2, 3, 4].map(k => `<line x1="0" y1="-23" x2="0" y2="-28" stroke="#F7C531" stroke-width="2.5" stroke-linecap="round" transform="rotate(${-60 + k * 30} 0 -6)"/>`).join('')}`;
      const sketch = `<rect x="-17" y="-20" width="30" height="36" rx="3" fill="#F7F9FF" stroke="#9AA3B5" stroke-width="1.5"/><path d="M-11 8V-4h10V-12" stroke="#2F5BEA" stroke-width="2" fill="none"/><g transform="rotate(35 10 0)"><rect x="6" y="-20" width="7" height="28" rx="1.5" fill="#F7C531"/><polygon points="6,8 13,8 9.5,15" fill="#3A2A6B"/></g>`;
      const cube = (() => { const f = pj(0, 10, 1.1); return bx(f, -10, -10, 0, 20, 20, 20, LILA); })();
      const lupa = `<circle cx="-4" cy="-4" r="12" fill="#E9F7EF" stroke="#2F5BEA" stroke-width="3.5"/><path d="M-9 -4l4 4 7-8" stroke="#22A06B" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="5" y1="5" x2="14" y2="14" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/>`;
      return svg(196, `${bg(196)}<text x="160" y="24" text-anchor="middle" class="tat b">${L('Com treballa un dissenyador/a', 'Cómo trabaja un diseñador/a')}</text>
        ${card(1, 8, L('Idea', 'Idea'), bulb, .2)}${chev(81, .8)}${card(2, 88, L('Esbós', 'Boceto'), sketch, 1)}${chev(161, 1.6)}${card(3, 168, L('Model', 'Modelo'), cube, 1.8)}${chev(241, 2.4)}${card(4, 248, L('Revisa', 'Revisa'), lupa, 2.6)}
        <path d="M283 138C283 172 123 172 123 140" stroke="#7C5CFF" stroke-width="3" fill="none" stroke-linecap="round" pathLength="1" ${tA(3.4, 'ta-draw')}/><g ${tA(4, 'ta-pop')}><polygon points="116,146 123,134 130,146" fill="#7C5CFF"/><text x="203" y="189" text-anchor="middle" class="tat s" fill="#7C5CFF">${L('i millora-ho', 'y mejóralo')}</text></g>`);
    },
    // equilibri: una base ampla aguanta; una bola gegant sobre una base petita trontolla
    m14balance() {
      const f1 = pj(84, 166, 1.45), f2 = pj(236, 166, 1.45);
      const ok = `${shadow(f1, 0, 0, 44, 10)}${cy(f1, 0, 0, 0, 24, 8, GRIS)}${bx(f1, -6, -6, 8, 12, 12, 30, LILA)}${sp(f1, 0, 0, 49, 12, GROC)}`;
      const ko = `${cy(f2, 0, 0, 0, 5, 6, GRIS)}${bx(f2, -4, -4, 6, 8, 8, 22, LILA)}${sp(f2, 0, 0, 48, 21, TARO)}`;
      return svg(212, `${bg(212)}<g ${tA(.2, 'ta-in')}>${ok}</g><g class="ta ta-wob" style="--t:1.2s;transform-origin:50% 100%">${shadow(f2, 0, 0, 14, 4)}${ko}</g>
        <g ${tA(2, 'ta-pop')}><rect x="22" y="180" width="124" height="26" rx="13" fill="#E9F7EF"/><text x="84" y="198" text-anchor="middle" class="tat s" fill="#1E8A50">✓ ${L('base ampla', 'base ancha')}</text></g>
        <g ${tA(2.6, 'ta-pop')}><rect x="174" y="180" width="124" height="26" rx="13" fill="#FDECEC"/><text x="236" y="198" text-anchor="middle" class="tat s" fill="#C2343A">✗ ${L('trontolla', 'se tambalea')}</text></g>`);
    }
  };
})());
