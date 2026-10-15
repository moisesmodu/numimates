/* Numi Tech · Tech 3D · Nivell 1 · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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

/* ── unitat 2 ── */
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

/* ── unitat 3 ── */
/* Tech 3D · Nivell 1 · unitat 3 · animacions de teoria (TANI): moure, girar i escalar. Dibuixos propis de Numi.
   Perspectiva isomètrica com la del taller: x cap a baix a la dreta, y cap a dalt a la dreta, z amunt (es veuen les cares
   de davant, de la dreta i de dalt). Claus amb el prefix de la sessió (m31…, m32…, m33…, m34…). */
Object.assign(TANI, (() => {
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x + y) * 0.866 * k, cy + (x - y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // caixa isomètrica amb tres tons [dalt, davant, dreta]
  const box = (f, x0, y0, z0, w, d, h, c, op = '') => {
    const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], F = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<g ${op}><polygon points="${pts(f, F)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, T)}" fill="${c[0]}"/></g>`; };
  // contorn discontinu d'una caixa (fantasma)
  const ghost = (f, x0, y0, z0, w, d, h, col = '#7C5CFF') => { const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], F = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return [F, R, T].map(q => `<polygon points="${pts(f, q)}" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="1.5" stroke-dasharray="4 3"/>`).join(''); };
  // un disc (roda) al pla y-z, centrat a (x, y, z)
  const disc = (f, x, y, z, r, fill, stroke) => `<polygon points="${pts(f, Array.from({ length: 24 }, (_, i) => { const t = i / 24 * Math.PI * 2; return [x, y + r * Math.cos(t), z + r * Math.sin(t)]; }))}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], BLAU = ['#9CC0FF', '#3D7BF4', '#2A5BC4'], VERD = ['#9BE3BC', '#2FB36D', '#228A53'], TARONJA = ['#FFC59A', '#F5893A', '#D06A1E'], CEL = ['#BDEBFA', '#5BC0EB', '#3C9CC4'], GROC = ['#FFE79A', '#F7C531', '#D9A514'], NEGRE = ['#6A7186', '#2A2F3A', '#1B1F28'];
  const plate = (f, n, step = 10) => { let g = `<polygon points="${pts(f, [[-n, -n, 0], [n, -n, 0], [n, n, 0], [-n, n, 0]])}" fill="#2E3446"/>`; for (let v = -n; v <= n; v += step) g += `<polyline points="${pts(f, [[v, -n, 0], [v, n, 0]])}" stroke="#4A5370" stroke-width="1" fill="none"/><polyline points="${pts(f, [[-n, v, 0], [n, v, 0]])}" stroke="#4A5370" stroke-width="1" fill="none"/>`; return g; };
  const pill = (x, y, w, t, fill = '#fff', cls = 'tat s', tc = '') => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${fill}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="${cls}" ${tc ? `fill="${tc}"` : ''}>${t}</text>`;
  // animació SMIL d'opacitat per mostrar un text només en un tram del cicle de 5,5 s
  const show = (a, b) => a ? `<animate attributeName="opacity" dur="5.5s" repeatCount="indefinite" calcMode="discrete" values="0;1;0" keyTimes="0;${a};${b}"/>` : `<animate attributeName="opacity" dur="5.5s" repeatCount="indefinite" calcMode="discrete" values="1;0" keyTimes="0;${b}"/>`;
  return {
    /* ---------- m3-1 · la quadrícula magnètica: amb salts de 10 o 5 mm no s'arriba a 37 mm; amb 1 mm, sí ---------- */
    m31snap() {
      const X0 = 92, K = 4.9, X = mm => X0 + mm * K, rows = [[10, 48, [0, 10, 20, 30, 40, 30, 40], '#E8453C'], [5, 104, [0, 10, 20, 30, 35, 40, 35], '#F5893A'], [1, 160, [0, 10, 20, 30, 35, 36, 37], '#22A06B']];
      const row = ([st, y, vals, col], i) => {
        let ticks = ''; for (let m = 0; m <= 40; m += st === 1 ? 1 : st) ticks += `<line x1="${X(m)}" y1="${y + 6}" x2="${X(m)}" y2="${y + (m % 10 ? 11 : 15)}" stroke="#8A93B0" stroke-width="${m % 10 ? 1 : 1.6}"/>`;
        const kv = vals.map(v => `${((v) * K).toFixed(1)} 0`).join(';');
        return `<g ${tA(.2 + i * .25, 'ta-in')}>${pill(8, y - 8, 70, `${L('salt', 'salto')} ${st} mm`, '#fff', 'tat s')}
          <rect x="${X0 - 4}" y="${y + 4}" width="${40 * K + 8}" height="14" rx="4" fill="#EEF1FB"/>${ticks}
          <g><animateTransform attributeName="transform" type="translate" dur="5.5s" repeatCount="indefinite" calcMode="discrete" values="${kv}" keyTimes="0;.1;.2;.3;.42;.54;.66"/>
            <rect x="${X0 - 8}" y="${y - 12}" width="16" height="16" rx="3" fill="#7C5CFF" stroke="#5B3FD6" stroke-width="2"/></g></g>
          <g ${tA(4, 'ta-pop')}><circle cx="${X(40) + 18}" cy="${y + 2}" r="11" fill="${col}"/><text x="${X(40) + 18}" y="${y + 7}" text-anchor="middle" class="tat w b">${st === 1 ? '✓' : '✗'}</text></g>`; };
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <line x1="${X(37)}" y1="22" x2="${X(37)}" y2="186" stroke="#F5893A" stroke-width="2.5" stroke-dasharray="5 4"/>
        <rect x="${X(37) - 26}" y="4" width="52" height="20" rx="10" fill="#F5893A"/><text x="${X(37)}" y="19" text-anchor="middle" class="tat w s">37 mm</text>
        ${rows.map(row).join('')}
        <g ${tA(4.3, 'ta-fade')}><text x="${X(37) - 8}" y="194" text-anchor="end" class="tat s" fill="#22A06B">${L('només amb 1 mm hi arribes', 'solo con 1 mm llegas')}</text></g>`);
    },
    /* ---------- m3-1 · moure és sumar: el cub va de x = 10 a x = 35 ---------- */
    m31mou() {
      const f = iso(150, 108, 1.45), dx = (25 * 0.866 * 1.45).toFixed(1), dy = (25 * 0.5 * 1.45).toFixed(1);
      const [ax1, ay1] = f(-45, 0, 0), [ax2, ay2] = f(48, 0, 0), [ox, oy] = f(0, 0, 0), [ar1x, ar1y] = f(10, -17, 0), [ar2x, ar2y] = f(35, -17, 0);
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${plate(f, 45)}
        <line x1="${ax1}" y1="${ay1}" x2="${ax2}" y2="${ay2}" stroke="#E5484D" stroke-width="3" stroke-linecap="round"/><circle cx="${ox}" cy="${oy}" r="4" fill="#fff" stroke="#14204A" stroke-width="2"/>
        ${ghost(f, 28, -7, 0, 14, 14, 14)}
        <g><animateTransform attributeName="transform" type="translate" dur="5.5s" repeatCount="indefinite" values="0 0;0 0;${dx} ${dy};${dx} ${dy}" keyTimes="0;.32;.56;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .2 1;0 0 1 1"/>${box(f, 3, -7, 0, 14, 14, 14, LILA)}</g>
        <g ${tA(1, 'ta-draw')}><line x1="${ar1x}" y1="${ar1y}" x2="${ar2x}" y2="${ar2y}" stroke="#14204A" stroke-width="2.5" pathLength="1" marker-end="url(#m31arr)"/></g>
        <defs><marker id="m31arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#14204A"/></marker></defs>
        <g ${tA(1.2, 'ta-pop')}>${pill(ar1x - 54, ar1y + 2, 74, '+25 mm', '#14204A', 'tat w s')}</g>
        <g ${tA(.2, 'ta-in')}><rect x="10" y="10" width="112" height="62" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="22" y="30" class="tat s" fill="#5A6383">${L('Posició', 'Posición')}</text>
          <rect x="22" y="38" width="88" height="26" rx="8" fill="#FDECEC"/><text x="34" y="57" class="tat b" fill="#E5484D">x</text>
          <text x="96" y="57" text-anchor="end" class="tat b">10${show(0, .5)}</text><text x="96" y="57" text-anchor="end" class="tat b" opacity="0">35${show(.5, .97)}</text></g>
        <g ${tA(3.4, 'ta-pop')}>${pill(186, 14, 124, '10 + 25 = 35', '#7C5CFF', 'tat w b')}</g>`);
    },
    /* ---------- m3-2 · girar al voltant del centre (vista de dalt): 0°, 45°, 90° ---------- */
    m32gir() {
      const C = [104, 100], g = (v, d) => `<line x1="${C[0] - 72}" y1="${C[1]}" x2="${C[0] + 72}" y2="${C[1]}" stroke="${v}" stroke-width="1" transform="rotate(${d} ${C[0]} ${C[1]})"/>`;
      let grid = ''; for (let i = -4; i <= 4; i++) grid += `<line x1="${C[0] + i * 18}" y1="${C[1] - 80}" x2="${C[0] + i * 18}" y2="${C[1] + 80}" stroke="#4A5370"/><line x1="${C[0] - 80}" y1="${C[1] + i * 18}" x2="${C[0] + 80}" y2="${C[1] + i * 18}" stroke="#4A5370"/>`;
      const bar = (d, op) => `<rect x="${C[0] - 58}" y="${C[1] - 10}" width="116" height="20" rx="4" fill="none" stroke="#B9A7FF" stroke-width="1.5" stroke-dasharray="4 3" opacity="${op}" transform="rotate(${-d} ${C[0]} ${C[1]})"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="${C[0] - 82}" y="${C[1] - 82}" width="164" height="164" rx="10" fill="#2E3446"/>${grid}
        <line x1="${C[0] - 82}" y1="${C[1]}" x2="${C[0] + 82}" y2="${C[1]}" stroke="#E5484D" stroke-width="2"/><line x1="${C[0]}" y1="${C[1] - 82}" x2="${C[0]}" y2="${C[1] + 82}" stroke="#22A06B" stroke-width="2"/>
        ${bar(45, .8)}${bar(90, .8)}
        <g><animateTransform attributeName="transform" type="rotate" dur="5.5s" repeatCount="indefinite" values="0 ${C[0]} ${C[1]};0 ${C[0]} ${C[1]};-45 ${C[0]} ${C[1]};-45 ${C[0]} ${C[1]};-90 ${C[0]} ${C[1]};-90 ${C[0]} ${C[1]};0 ${C[0]} ${C[1]}" keyTimes="0;.12;.3;.45;.63;.86;1"/>
          <rect x="${C[0] - 58}" y="${C[1] - 10}" width="116" height="20" rx="4" fill="#7C5CFF" stroke="#5B3FD6" stroke-width="2"/><circle cx="${C[0] + 50}" cy="${C[1]}" r="4" fill="#F7C531"/></g>
        <circle cx="${C[0]}" cy="${C[1]}" r="6" fill="#fff" stroke="#14204A" stroke-width="2"/>
        <g ${tA(.2, 'ta-in')}><rect x="200" y="22" width="110" height="92" rx="16" fill="#fff" filter="url(#bwSh)"/><text x="255" y="44" text-anchor="middle" class="tat s" fill="#5A6383">${L('Gir en z', 'Giro en z')}</text>
          <text x="255" y="92" text-anchor="middle" class="tat" style="font-size:38px;font-weight:900" fill="#7C5CFF">0°${show(0, .22)}</text>
          <text x="255" y="92" text-anchor="middle" class="tat" style="font-size:38px;font-weight:900" fill="#7C5CFF" opacity="0">45°${show(.24, .52)}</text>
          <text x="255" y="92" text-anchor="middle" class="tat" style="font-size:38px;font-weight:900" fill="#7C5CFF" opacity="0">90°${show(.56, .94)}</text></g>
        <g ${tA(1.4, 'ta-pop')}>${pill(194, 128, 122, L('el centre no es mou', 'el centro no se mueve'), '#14204A', 'tat w s')}</g>
        <g ${tA(2.4, 'ta-pop')}>${pill(194, 162, 122, L('+ cada toc 15°', '+ cada toque 15°'), '#7C5CFF', 'tat w s')}</g>`);
    },
    /* ---------- m3-2 · els angles: 15°, 45°, 90° i 180° (i quants tocs de 15° són) ---------- */
    m32ang() {
      const D = [[15, 1, L('1 toc', '1 toque'), '#5BC0EB'], [45, 3, L('3 tocs', '3 toques'), '#2FB36D'], [90, 6, L('6 tocs', '6 toques'), '#7C5CFF'], [180, 12, L('12 tocs', '12 toques'), '#F5893A']];
      const dial = ([a, n, t, col], i) => { const cx = 42 + i * 79, cy = 86, r = 32, ex = cx + r * Math.cos(a * Math.PI / 180), ey = cy - r * Math.sin(a * Math.PI / 180);
        let ticks = ''; for (let k = 0; k < 24; k++) { const q = k * 15 * Math.PI / 180; ticks += `<line x1="${(cx + (r - 4) * Math.cos(q)).toFixed(1)}" y1="${(cy - (r - 4) * Math.sin(q)).toFixed(1)}" x2="${(cx + r * Math.cos(q)).toFixed(1)}" y2="${(cy - r * Math.sin(q)).toFixed(1)}" stroke="#C9D0E6" stroke-width="1.2"/>`; }
        return `<g ${tA(.3 + i * .8, 'ta-pop')}><circle cx="${cx}" cy="${cy}" r="${r + 4}" fill="#fff" filter="url(#bwSh)"/>${ticks}
          <path d="M${cx} ${cy}L${cx + r} ${cy}A${r} ${r} 0 0 0 ${ex.toFixed(1)} ${ey.toFixed(1)}Z" fill="${col}" fill-opacity=".35" stroke="${col}" stroke-width="2"/>
          <line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${col}" stroke-width="3.5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="3.5" fill="#14204A"/>
          <text x="${cx}" y="${cy + 58}" text-anchor="middle" class="tat b">${a}°</text><text x="${cx}" y="${cy + 78}" text-anchor="middle" class="tat s" fill="#5A6383">${t}</text></g>`; };
      return tSvg(190, `<rect width="320" height="190" rx="20" fill="#F1F2FB"/>${D.map(dial).join('')}
        <g ${tA(3.6, 'ta-in')}><text x="160" y="24" text-anchor="middle" class="tat s" fill="#5A6383">${L('una volta sencera = 360°', 'una vuelta entera = 360°')}</text></g>`);
    },
    /* ---------- m3-2 · girar en z (baldufa), en y (tomba al llarg de x) i en x (tomba al llarg de y) ---------- */
    m32eix() {
      const P = [[56, L('z: gira', 'z: gira'), '#2F5BEA'], [162, L('y: tomba', 'y: tumba'), '#22A06B'], [268, L('x: tomba', 'x: tumba'), '#E5484D']];
      const panel = ([cx, t, col], i) => { const f = iso(cx - 4, 136, 1.35);
        const solid = i === 0 ? box(f, -5, -5, 0, 10, 10, 30, LILA) : i === 1 ? box(f, -15, -5, 0, 30, 10, 10, LILA) : box(f, -5, -15, 0, 10, 30, 10, LILA);
        const arc = i === 0 ? `<ellipse cx="${f(0, 0, 34)[0]}" cy="${f(0, 0, 34)[1]}" rx="20" ry="8" fill="none" stroke="${col}" stroke-width="3" stroke-dasharray="40 10"/>`
          : `<path d="M${f(0, 0, 36).join(' ')} Q${f(i === 1 ? 26 : 0, i === 2 ? -26 : 0, 34).join(' ')} ${f(i === 1 ? 30 : 0, i === 2 ? -30 : 0, 12).join(' ')}" fill="none" stroke="${col}" stroke-width="3" marker-end="url(#m32ar${i})"/>`;
        return `<g ${tA(.2 + i * .3, 'ta-in')}><rect x="${cx - 50}" y="12" width="100" height="176" rx="16" fill="#fff" filter="url(#bwSh)"/>
          <polygon points="${pts(f, [[-22, -22, 0], [22, -22, 0], [22, 22, 0], [-22, 22, 0]])}" fill="#2E3446"/>
          ${i ? ghost(f, -5, -5, 0, 10, 10, 30, '#9AA3B5') : ''}<defs><marker id="m32ar${i}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${col}"/></marker></defs></g>
          <g ${tA(1.2 + i * .7, i ? 'ta-pop' : 'ta-fade')}>${solid}${arc}</g>
          <g ${tA(.5 + i * .3, 'ta-in')}><circle cx="${cx}" cy="38" r="14" fill="${col}"/><text x="${cx}" y="43" text-anchor="middle" class="tat w b">${'zyx'[i]}</text><text x="${cx}" y="178" text-anchor="middle" class="tat s">${t}</text></g>`; };
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${P.map(panel).join('')}`);
    },
    /* ---------- m3-3 · una sola mida (s'estira) o proporcional (creix sense deformar-se) ---------- */
    m33esc() {
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><line x1="16" y1="160" x2="148" y2="160" stroke="#9AA3B5" stroke-width="3" stroke-linecap="round"/><line x1="172" y1="160" x2="304" y2="160" stroke="#9AA3B5" stroke-width="3" stroke-linecap="round"/>
        <g ${tA(.2, 'ta-in')}>${pill(24, 14, 116, L('només x', 'solo x'), '#fff', 'tat s')}</g>
        <rect x="26" y="110" width="50" height="50" rx="3" fill="#3D7BF4" stroke="#2A5BC4" stroke-width="2"><animate attributeName="width" dur="5.5s" repeatCount="indefinite" values="50;50;112;112;50" keyTimes="0;.2;.45;.86;1"/></rect>
        <g ${tA(2.4, 'ta-pop')}>${pill(30, 172, 100, L("s'estira", 'se estira'), '#3D7BF4', 'tat w s')}</g>
        <g ${tA(.4, 'ta-in')}>${pill(176, 14, 128, L('Proporcional', 'Proporcional'), '#fff', 'tat s')}<g transform="translate(152 18)"><rect x="0" y="7" width="13" height="10" rx="2" fill="#F5893A"/><path d="M3 7V4a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="#F5893A" stroke-width="2"/></g></g>
        <g transform="translate(238 160)"><g><animateTransform attributeName="transform" type="scale" dur="5.5s" repeatCount="indefinite" values="1;1;2;2;1" keyTimes="0;.2;.45;.86;1"/><rect x="-22" y="-44" width="44" height="44" rx="2" fill="#2FB36D" stroke="#228A53" stroke-width="1.2"/></g></g>
        <g ${tA(2.6, 'ta-pop')}>${pill(190, 172, 96, L('× 2 tot', '× 2 todo'), '#2FB36D', 'tat w s')}</g>`);
    },
    /* ---------- m3-3 · el doble: 2 × 2 × 2 = 8 cubs petits ---------- */
    m33dob() {
      const f = iso(150, 128, 2.1);
      const order = []; for (const z of [0, 10]) for (const [x, y] of [[10, 10], [0, 10], [10, 0], [0, 0]]) order.push([x, y, z]);
      // dibuix de lluny a prop: primer y gran i x petita
      const sorted = order.slice().sort((a, b) => a[2] - b[2] || (b[1] - b[0]) - (a[1] - a[0]));
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><polygon points="${pts(f, [[-52, -14, 0], [26, -14, 0], [26, 26, 0], [-52, 26, 0]])}" fill="#E1E6F5"/>
        <g ${tA(.2, 'ta-pop')}>${box(f, -46, 0, 0, 10, 10, 10, GROC)}</g>
        ${sorted.map(([x, y, z]) => `<g ${tA(.8 + order.findIndex(o => o[0] === x && o[1] === y && o[2] === z) * .32, 'ta-pop')}>${box(f, x - 6, y - 6, z, 10, 10, 10, GROC)}</g>`).join('')}
        <g ${tA(.3, 'ta-in')}>${pill(12, 14, 92, L('1 cub', '1 cubo'), '#fff', 'tat s')}</g>
        <g ${tA(3.6, 'ta-pop')}>${pill(160, 14, 150, '2 × 2 × 2 = 8', '#F5893A', 'tat w b')}</g>
        <g ${tA(4, 'ta-in')}><text x="160" y="190" text-anchor="middle" class="tat s" fill="#5A6383">${L('el doble de cada mida', 'el doble de cada medida')}</text></g>`);
    },
    /* ---------- m3-4 · la fitxa tècnica del robot: vista de davant amb cotes i taula de peces ---------- */
    m34fit() {
      const K = 2.1, ox = 102, gy = 176, X = x => ox + x * K, Z = z => gy - z * K, R = (x0, z0, w, h, fill, st = '#14204A') => `<rect x="${X(x0)}" y="${Z(z0 + h)}" width="${w * K}" height="${h * K}" fill="${fill}" stroke="${st}" stroke-width="1.4"/>`;
      const rows = [[L('Rodes', 'Ruedas'), '16×16×6', L('y 90°', 'y 90°')], [L('Cos', 'Cuerpo'), '26×18×24', 'z = 4'], [L('Cap', 'Cabeza'), '20×16×14', 'z = 28'], [L('Braços', 'Brazos'), '6×6×20', L('y 90°', 'y 90°')], [L('Ulls', 'Ojos'), '6×6×6', 'z = 32']];
      const dim = (x1, y1, x2, y2, t, tx, ty, d) => `<g ${tA(d, 'ta-draw')}><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#E5484D" stroke-width="1.6" pathLength="1"/></g><g ${tA(d + .3, 'ta-pop')}><rect x="${tx - 15}" y="${ty - 11}" width="30" height="16" rx="8" fill="#E5484D"/><text x="${tx}" y="${ty + 1}" text-anchor="middle" class="tat w" style="font-size:10.5px;font-weight:800">${t}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="8" width="304" height="186" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <path d="M14 30H180" stroke="#EEF1FB" stroke-width="16"/><text x="18" y="35" class="tat s" fill="#5A6383" style="font-size:11px">${L('FITXA TÈCNICA · vista de davant', 'FICHA TÉCNICA · vista de delante')}</text>
        <line x1="${X(-40)}" y1="${gy}" x2="${X(40)}" y2="${gy}" stroke="#9AA3B5" stroke-width="2"/>
        <g ${tA(.2, 'ta-fade')}>${R(-19, 0, 6, 16, '#2A2F3A')}${R(13, 0, 6, 16, '#2A2F3A')}${R(-13, 4, 26, 24, '#B9A7FF')}${R(-33, 20, 20, 6, '#FFC59A')}${R(13, 20, 20, 6, '#FFC59A')}${R(-10, 28, 20, 14, '#BDEBFA')}
          <circle cx="${X(-5)}" cy="${Z(35)}" r="${3 * K}" fill="#2A2F3A"/><circle cx="${X(5)}" cy="${Z(35)}" r="${3 * K}" fill="#2A2F3A"/>${R(-1, 42, 2, 8, '#9AA3B5')}<circle cx="${X(0)}" cy="${Z(53)}" r="${3 * K}" fill="#E8453C" stroke="#14204A" stroke-width="1.4"/></g>
        ${dim(X(-37), Z(4), X(-37), Z(28), '24', X(-37) + 6, Z(10), 1.2)}${dim(X(28), gy, X(28), Z(28), '28', X(28) + 16, Z(30) + 4, 1.9)}${dim(X(-33), gy + 8, X(33), gy + 8, '66', X(0), gy + 10, 2.6)}
        <g ${tA(.6, 'ta-in')}>${rows.map(([n, s, e], i) => `<g transform="translate(196 ${52 + i * 27})"><rect width="108" height="23" rx="6" fill="${i % 2 ? '#F5F7FF' : '#EEF1FB'}"/><text x="6" y="15" class="tat" style="font-size:10.5px;font-weight:800">${n}</text><text x="102" y="10" text-anchor="end" class="tat" style="font-size:9px;font-weight:700" fill="#5A6383">${s}</text><text x="102" y="20" text-anchor="end" class="tat" style="font-size:9px;font-weight:800" fill="#7C5CFF">${e}</text></g>`).join('')}</g>`);
    },
    /* ---------- m3-4 · el pla de treball: de baix a dalt i per parts ---------- */
    m34pla() {
      const f = iso(118, 150, 1.75), n = (x, y, z, k, t) => { const [a, b] = f(x, y, z); return `<g ${tA(t + .15, 'ta-pop')}><circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="10" fill="#14204A" stroke="#fff" stroke-width="2"/><text x="${a.toFixed(1)}" y="${(b + 4.5).toFixed(1)}" text-anchor="middle" class="tat w" style="font-size:12px;font-weight:900">${k}</text></g>`; };
      const T = [.2, 1, 1.8, 2.6, 3.4];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><polygon points="${pts(f, [[-40, -24, 0], [40, -24, 0], [40, 24, 0], [-40, 24, 0]])}" fill="#2E3446"/>
        <g ${tA(T[0], 'ta-pop')}>${disc(f, -16, 0, 8, 8, '#2A2F3A', '#14204A')}</g>
        <g ${tA(T[3], 'ta-pop')}>${box(f, -33, -3, 20, 20, 6, 6, TARONJA)}</g>
        <g ${tA(T[1], 'ta-pop')}>${box(f, -13, -9, 4, 26, 18, 24, LILA)}</g>
        <g ${tA(T[0], 'ta-pop')}>${disc(f, 19, 0, 8, 8, '#3A4152', '#14204A')}</g>
        <g ${tA(T[3], 'ta-pop')}>${box(f, 13, -3, 20, 20, 6, 6, TARONJA)}</g>
        <g ${tA(T[2], 'ta-pop')}>${box(f, -10, -8, 28, 20, 16, 14, CEL)}</g>
        <g ${tA(T[4], 'ta-pop')}><circle cx="${f(-5, -8, 35)[0].toFixed(1)}" cy="${f(-5, -8, 35)[1].toFixed(1)}" r="4.5" fill="#2A2F3A"/><circle cx="${f(5, -8, 35)[0].toFixed(1)}" cy="${f(5, -8, 35)[1].toFixed(1)}" r="4.5" fill="#2A2F3A"/>
          <line x1="${f(0, 0, 42)[0].toFixed(1)}" y1="${f(0, 0, 42)[1].toFixed(1)}" x2="${f(0, 0, 50)[0].toFixed(1)}" y2="${f(0, 0, 50)[1].toFixed(1)}" stroke="#9AA3B5" stroke-width="3.5"/><circle cx="${f(0, 0, 53)[0].toFixed(1)}" cy="${f(0, 0, 53)[1].toFixed(1)}" r="5.5" fill="#E8453C"/></g>
        ${n(19, -12, 2, 1, T[0])}${n(-8, -12, 12, 2, T[1])}${n(10, -10, 40, 3, T[2])}${n(33, -6, 26, 4, T[3])}${n(-10, -10, 52, 5, T[4])}
        <g ${tA(.3, 'ta-in')}><rect x="222" y="16" width="90" height="146" rx="14" fill="#fff" filter="url(#bwSh)"/>${[L('rodes', 'ruedas'), L('cos', 'cuerpo'), L('cap', 'cabeza'), L('braços', 'brazos'), L('detalls', 'detalles')].map((t, i) => `<g ${tA(T[i] + .1, 'ta-in')}><circle cx="240" cy="${38 + i * 27}" r="9" fill="#14204A"/><text x="240" y="${42 + i * 27}" text-anchor="middle" class="tat w" style="font-size:11px;font-weight:900">${i + 1}</text><text x="255" y="${43 + i * 27}" class="tat s">${t}</text></g>`).join('')}</g>
        <g ${tA(4, 'ta-pop')}>${pill(222, 168, 90, L('de baix a dalt', 'de abajo arriba'), '#7C5CFF', 'tat w s')}</g>`);
    }
  };
})());

/* ── unitat 4 ── */
/* Tech 3D · Nivell 1 · unitat 4 · animacions de teoria (TANI): alinear, recolzar, duplicar, el pas, la simetria i la casa.
   Dibuixos propis de Numi, en bucle de 5,5 s (SVG + CSS .ta + SMIL). La perspectiva isomètrica és la del taller: x cap a baix a
   la dreta, y cap a dalt a la dreta, z amunt. Les vistes de dalt tenen el davant (−y) a baix, com al botó «Dalt» del taller.
   Claus amb el prefix de la sessió: m41ali, m41sobre, m41vores, m42dup, m42pas, m43eix, m43pas, m44fin, m44pla. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x + y) * 0.866 * k, cy + (x - y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // caixa isomètrica amb tres tons [dalt, davant, dreta]
  const box = (f, x0, y0, z0, w, d, h, c) => {
    const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], F = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<polygon points="${pts(f, F)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, T)}" fill="${c[0]}"/>`; };
  // teulada a dues aigües (dues falques): carena al llarg de y, a x = xc
  const roof = (f, xc, y0, z0, w, d, h, c) => {
    const Lq = [[xc - w / 2, y0, z0], [xc, y0, z0 + h], [xc, y0 + d, z0 + h], [xc - w / 2, y0 + d, z0]], R = [[xc, y0, z0 + h], [xc + w / 2, y0, z0], [xc + w / 2, y0 + d, z0], [xc, y0 + d, z0 + h]], F = [[xc - w / 2, y0, z0], [xc + w / 2, y0, z0], [xc, y0, z0 + h]];
    return `<polygon points="${pts(f, Lq)}" fill="${c[0]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, F)}" fill="${c[1]}"/>`; };
  const BLAU = ['#9CC0FF', '#3D7BF4', '#2A5BC4'], VERD = ['#9BE3BC', '#2FB36D', '#228A53'], CEL = ['#BDEBFA', '#5BC0EB', '#3C9CC4'], GROC = ['#FFE79A', '#F7C531', '#D9A514'];
  const BLANC = ['#FFFFFF', '#E6E9F2', '#C9CFDD'], VERM = ['#FF9C95', '#E8453C', '#B8322B'], FOSC = ['#4A5BA0', '#1B2B6B', '#121D4D'], FUSTA = ['#D9A57A', '#A0683A', '#7E4F2A'];
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const pill = (x, y, w, t, fill = '#fff', cls = 'tat s') => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${fill}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="${cls}">${t}</text>`;
  // opacitat discreta: visible només entre els instants a i b (fraccions del cicle de 5,5 s)
  const win = (a, b) => `<animate attributeName="opacity" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="0;1;0" keyTimes="0;${a};${b}"/>`;
  // moviment SMIL: llista de posicions [x, y] als instants keyTimes
  const path = (vals, keys) => `<animateTransform attributeName="transform" type="translate" dur="${D}s" repeatCount="indefinite" values="${vals.map(v => v.join(' ')).join(';')}" keyTimes="${keys.join(';')}" calcMode="spline" keySplines="${keys.slice(1).map(() => '.4 0 .2 1').join(';')}"/>`;
  const ok = (x, y, t, col = '#22A06B', ch = '✓') => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="12" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w b">${ch}</text></g>`;
  // mitja papallona (ales de l'esquerra) amb la vora dreta a x = 0: per a m43pas
  const half = k => `<ellipse cx="${-14 * k}" cy="${-8 * k}" rx="${13 * k}" ry="${8 * k}" fill="#EC5FA8" transform="rotate(25 ${-14 * k} ${-8 * k})"/><ellipse cx="${-10 * k}" cy="${10 * k}" rx="${9 * k}" ry="${6 * k}" fill="#F7C531" transform="rotate(-30 ${-10 * k} ${10 * k})"/><circle cx="${-16 * k}" cy="${-9 * k}" r="${3 * k}" fill="#fff"/>`;
  return {
    /* ---------- m4-1 · alinear: les mateixes peces, a l'esquerra, al centre i a la dreta ---------- */
    m41ali() {
      const L0 = 30, C0 = 160, R0 = 290, rows = [[150, 54, 70, BLAU[1]], [84, 98, 150, GROC[1]], [200, 142, 46, VERD[1]]];
      const keys = [0, .08, .2, .38, .48, .66, .76, .94, 1];
      const blocks = rows.map(([w, y, x0, c]) => { const l = L0, m = C0 - w / 2, r = R0 - w; const v = [x0, x0, l, l, m, m, r, r, x0].map(x => [x, 0]);
        return `<g>${path(v, keys)}<rect x="0" y="${y}" width="${w}" height="30" rx="7" fill="${c}"/><rect x="0" y="${y}" width="${w}" height="8" rx="4" fill="#fff" opacity=".25"/></g>`; }).join('');
      const guide = (x, a, b, col) => `<g opacity="0">${win(a, b)}<line x1="${x}" y1="44" x2="${x}" y2="184" stroke="${col}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="${x}" cy="44" r="5" fill="${col}"/></g>`;
      const lab = (t, a, b, col) => `<g opacity="0">${win(a, b)}${pill(110, 8, 100, t, col, 'tat w s')}</g>`;
      return tSvg(196, `${bg(196)}${guide(L0, .2, .44, '#E5484D')}${guide(C0, .48, .72, '#7C5CFF')}${guide(R0, .76, .98, '#22A06B')}${blocks}
        ${lab(L('Esquerra', 'Izquierda'), .2, .44, '#E5484D')}${lab(L('Centre', 'Centro'), .48, .72, '#7C5CFF')}${lab(L('Dreta', 'Derecha'), .76, .98, '#22A06B')}
        <g opacity="0">${win(.001, .18)}${pill(96, 8, 128, L('peces desordenades', 'piezas desordenadas'), '#fff', 'tat s')}</g>`);
    },
    /* ---------- m4-1 · recolzar: el tauler baixa, a z = 33 flota i a z = 30 queda recolzat ---------- */
    m41sobre() {
      const K = 2.5, G = 172, Z = z => G - z * K, keys = [0, .1, .32, .56, .68, 1];
      const pil = x => `<rect x="${x}" y="${Z(30)}" width="30" height="${30 * K}" rx="3" fill="#9AA3B5" stroke="#7C849A" stroke-width="2"/>`;
      return tSvg(200, `${bg(200)}<line x1="20" y1="${G}" x2="300" y2="${G}" stroke="#9AA3B5" stroke-width="3" stroke-linecap="round"/>
        <rect x="104" y="${G - 4}" width="112" height="4" fill="#5BC0EB"/>${pil(74)}${pil(216)}
        <g ${tA(.2, 'ta-in')}><line x1="56" y1="${G}" x2="56" y2="${Z(30)}" stroke="#E5484D" stroke-width="2"/><path d="M50 ${G}h12M50 ${Z(30)}h12" stroke="#E5484D" stroke-width="2"/><rect x="22" y="${Z(15) - 10}" width="34" height="20" rx="10" fill="#E5484D"/><text x="39" y="${Z(15) + 5}" text-anchor="middle" class="tat w" style="font-size:11px;font-weight:800">30</text></g>
        <g>${path([[0, -64], [0, -64], [0, -7.5], [0, -7.5], [0, 0], [0, 0]], keys)}<rect x="62" y="${Z(36)}" width="196" height="${6 * K}" rx="3" fill="#A0683A" stroke="#7E4F2A" stroke-width="2"/></g>
        <g opacity="0">${win(.34, .57)}<rect x="96" y="${Z(33) - 1}" width="14" height="9" fill="#E5484D" opacity=".35"/><rect x="210" y="${Z(33) - 1}" width="14" height="9" fill="#E5484D" opacity=".35"/>
          ${pill(118, 116, 84, L('flota! z = 33', '¡flota! z = 33'), '#E5484D', 'tat w s')}</g>
        <g opacity="0">${win(.68, .99)}${pill(124, 116, 72, 'z = 30', '#22A06B', 'tat w s')}<circle cx="232" cy="129" r="11" fill="#22A06B"/><text x="232" y="134" text-anchor="middle" class="tat w b">✓</text></g>
        <g ${tA(.3, 'ta-in')}>${pill(52, 10, 216, L('A sobre de la peça de sota', 'Encima de la pieza de debajo'), '#14204A', 'tat w s')}</g>`);
    },
    /* ---------- m4-1 · vores (vista de dalt): la pota va a l'esquerra i després al davant, a la cantonada ---------- */
    m41vores() {
      const K = 3.6, X = x => 160 + x * K, Y = y => 96 - y * K, s = 4 * K, keys = [0, .1, .28, .42, .6, 1];
      const leg = (x, y) => `<rect x="${(X(x) - s / 2).toFixed(1)}" y="${(Y(y) - s / 2).toFixed(1)}" width="${s}" height="${s}" rx="2" fill="#F3F3EE" stroke="#14204A" stroke-width="2"/>`;
      const v = [[-8, -4], [-8, -4], [-23, -4], [-23, -4], [-23, -13], [-23, -13]].map(([x, y]) => [(X(x) - X(-8)).toFixed(1), (Y(y) - Y(-4)).toFixed(1)]);
      return tSvg(200, `${bg(200)}<rect x="${X(-25)}" y="${Y(15)}" width="${50 * K}" height="${30 * K}" rx="4" fill="#BDEFF5" stroke="#14A3B8" stroke-width="3"/>
        <text x="${X(0)}" y="${Y(9)}" text-anchor="middle" class="tat s" fill="#0E7F90">${L('tauler (de dalt)', 'tablero (de arriba)')}</text>
        <g opacity="0">${win(.12, .44)}<line x1="${X(-25)}" y1="${Y(19)}" x2="${X(-25)}" y2="${Y(-19)}" stroke="#E5484D" stroke-width="3" stroke-dasharray="6 5"/></g>
        <g opacity="0">${win(.44, .99)}<line x1="${X(-29)}" y1="${Y(-15)}" x2="${X(29)}" y2="${Y(-15)}" stroke="#22A06B" stroke-width="3" stroke-dasharray="6 5"/></g>
        <g>${path(v, keys)}${leg(-8, -4)}</g>
        <g opacity="0">${win(.12, .44)}${pill(8, 8, 116, L('X · Esquerra', 'X · Izquierda'), '#E5484D', 'tat w s')}</g>
        <g opacity="0">${win(.44, .99)}${pill(8, 8, 116, L('Y · Davant', 'Y · Delante'), '#22A06B', 'tat w s')}</g>
        <g ${tA(3.6, 'ta-pop')}>${leg(23, -13)}</g><g ${tA(3.9, 'ta-pop')}>${leg(-23, 13)}</g><g ${tA(4.2, 'ta-pop')}>${leg(23, 13)}</g>
        ${ok(X(-23) - 22, Y(-13) + 24, 3.4)}
        <g ${tA(4.4, 'ta-in')}><text x="160" y="190" text-anchor="middle" class="tat s" fill="#5A6383">${L('dos tocs: una cantonada', 'dos toques: una esquina')}</text></g>`);
    },
    /* ---------- m4-2 · duplicar: la columna es copia tres vegades, a 5 mm de la de davant ---------- */
    m42dup() {
      const f = iso(124, 112, 1.9), T = [.2, 1.2, 2.2, 3.2], tap = [.18, .36, .54];
      const cols = [0, 1, 2, 3].map(i => `<g ${tA(T[i], 'ta-pop')}>${box(f, -35 + 15 * i, -5, 4, 10, 10, 30, CEL)}</g>`).join('');
      const [gx, gy] = f(-22.5, -5, 4);
      const flash = `<animate attributeName="fill" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="#7C5CFF;#B9A7FF;#7C5CFF;#B9A7FF;#7C5CFF;#B9A7FF;#7C5CFF" keyTimes="0;${tap[0]};${tap[0] + .04};${tap[1]};${tap[1] + .04};${tap[2]};${tap[2] + .04}"/>`;
      return tSvg(200, `${bg(200)}<g ${tA(.1, 'ta-fade')}>${box(f, -40, -8, 0, 70, 16, 4, BLANC)}</g>${cols}
        <g ${tA(1.5, 'ta-pop')}><line x1="${gx.toFixed(1)}" y1="${(gy + 8).toFixed(1)}" x2="${(gx - 22).toFixed(1)}" y2="${(gy + 26).toFixed(1)}" stroke="#14204A" stroke-width="1.6"/>${pill(gx - 58, gy + 24, 54, '5 mm', '#14204A', 'tat w s')}</g>
        <g><rect x="206" y="16" width="104" height="34" rx="12" filter="url(#bwSh)">${flash}</rect><text x="258" y="38" text-anchor="middle" class="tat w b">⧉ ${L('Duplica', 'Duplica')}</text></g>
        <g opacity="0">${win(.2, .38)}${pill(232, 58, 52, '×1', '#fff')}</g><g opacity="0">${win(.38, .56)}${pill(232, 58, 52, '×2', '#fff')}</g><g opacity="0">${win(.56, .99)}${pill(232, 58, 52, '×3', '#fff')}</g>
        <g ${tA(3.8, 'ta-in')}>${pill(186, 160, 124, L('una fila de 4!', '¡una fila de 4!'), '#2FB36D', 'tat w s')}</g>`);
    },
    /* ---------- m4-2 · el pas: els pals de la tanca, de 20 en 20 mm ---------- */
    m42pas() {
      const K = 3, X = x => 160 + x * K, A = 112, xs = [-40, -20, 0, 20, 40], T = [.3, .9, 1.5, 2.1, 2.7];
      let ticks = ''; for (let m = -50; m <= 50; m += 10) ticks += `<line x1="${X(m)}" y1="${A + 30}" x2="${X(m)}" y2="${A + (m % 20 ? 35 : 38)}" stroke="#8A93B0" stroke-width="1.4"/>`;
      const posts = xs.map((x, i) => `<g ${tA(T[i], 'ta-pop')}><rect x="${X(x) - 9}" y="${A - 9}" width="18" height="18" rx="3" fill="#A0683A" stroke="#7E4F2A" stroke-width="2"/><text x="${X(x)}" y="${A + 54}" text-anchor="middle" class="tat s">${x}</text></g>`).join('');
      const arcs = xs.slice(1).map((x, i) => `<g ${tA(T[i + 1] + .2, 'ta-in')}><path d="M${X(xs[i]) + 4} ${A - 14}Q${(X(xs[i]) + X(x)) / 2} ${A - 44} ${X(x) - 4} ${A - 14}" fill="none" stroke="#7C5CFF" stroke-width="2.5" marker-end="url(#m42ar)"/><text x="${(X(xs[i]) + X(x)) / 2}" y="${A - 36}" text-anchor="middle" class="tat s" fill="#7C5CFF">+20</text></g>`).join('');
      return tSvg(200, `${bg(200)}<defs><marker id="m42ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#7C5CFF"/></marker></defs>
        <line x1="${X(-52)}" y1="${A + 30}" x2="${X(52)}" y2="${A + 30}" stroke="#E5484D" stroke-width="2.5"/><text x="${X(52) + 4}" y="${A + 35}" class="tat s" fill="#E5484D">x</text>${ticks}
        <g ${tA(3.4, 'ta-fade')}><rect x="${X(-45)}" y="${A - 2}" width="${90 * K}" height="4" rx="2" fill="#F5893A"/></g>${posts}${arcs}
        <g ${tA(3.6, 'ta-pop')}>${pill(102, 10, 116, L('pas = 20 mm', 'paso = 20 mm'), '#7C5CFF', 'tat w b')}</g>`);
    },
    /* ---------- m4-3 · l'eix de simetria: la meitat es gira com una pàgina i fa l'altra meitat ---------- */
    m43eix() {
      const C = 160, wing = `<ellipse cx="116" cy="86" rx="44" ry="26" fill="#EC5FA8" transform="rotate(25 116 86)"/><ellipse cx="126" cy="136" rx="30" ry="19" fill="#F7C531" transform="rotate(-30 126 136)"/>
        <circle cx="108" cy="84" r="9" fill="#fff" opacity=".9"/><circle cx="122" cy="138" r="6" fill="#fff" opacity=".9"/><path d="M156 62Q148 40 132 30" stroke="#1B2B6B" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="131" cy="29" r="4" fill="#1B2B6B"/>`;
      return tSvg(200, `${bg(200)}<g ${tA(.1, 'ta-fade')}>${wing}</g>
        <g transform="translate(${C} 0)"><g><animateTransform attributeName="transform" type="scale" dur="${D}s" repeatCount="indefinite" values="1 1;1 1;-1 1;-1 1" keyTimes="0;.22;.5;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .2 1;0 0 1 1"/><g transform="translate(${-C} 0)" opacity=".92">${wing}</g></g></g>
        <ellipse cx="${C}" cy="104" rx="7" ry="44" fill="#1B2B6B"/>
        <line x1="${C}" y1="14" x2="${C}" y2="190" stroke="#7C5CFF" stroke-width="2.5" stroke-dasharray="7 5"/>
        <g ${tA(.3, 'ta-in')}>${pill(170, 10, 140, L('eix de simetria', 'eje de simetría'), '#7C5CFF', 'tat w s')}</g>
        <g ${tA(.6, 'ta-in')}>${pill(36, 164, 84, L('meitat', 'mitad'), '#fff')}</g>
        <g ${tA(3, 'ta-in')}>${pill(200, 164, 84, L('reflex', 'reflejo'), '#EC5FA8', 'tat w s')}</g>`);
    },
    /* ---------- m4-3 · el truc: meitat → Duplica → Mirall → mou-la fins a l'eix ---------- */
    m43pas() {
      const cy = 92, T = [.2, 1.2, 2.2, 3.2], labs = [L('Meitat', 'Mitad'), L('Duplica', 'Duplica'), L('Mirall', 'Espejo'), L('Mou-la', 'Muévela')];
      const card = (i, body) => { const x = 8 + i * 78; return `<g ${tA(T[i], 'ta-in')}><rect x="${x}" y="22" width="72" height="150" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <circle cx="${x + 36}" cy="40" r="11" fill="#14204A"/><text x="${x + 36}" y="45" text-anchor="middle" class="tat w" style="font-size:12px;font-weight:900">${i + 1}</text>${body(x)}
        <text x="${x + 36}" y="160" text-anchor="middle" class="tat s">${labs[i]}</text></g>`; };
      const axis = A => `<line x1="${A}" y1="58" x2="${A}" y2="132" stroke="#7C5CFF" stroke-width="1.6" stroke-dasharray="4 3"/><ellipse cx="${A}" cy="${cy}" rx="2.5" ry="16" fill="#1B2B6B"/>`;
      const at = (A, k = 1) => `<g transform="translate(${A} ${cy})">${half(k)}</g>`;
      const flip = (c, inner) => `<g transform="translate(${2 * c} 0) scale(-1 1)">${inner}</g>`;
      const k = 1.05, w = 27 * k;
      return tSvg(210, `${bg(210)}
        ${card(0, x => { const A = x + 50; return `${at(A, k)}${axis(A)}`; })}
        ${card(1, x => { const A = x + 32; return `${at(A, k)}${axis(A)}<g opacity=".9">${at(A + w + 7, k)}</g>`; })}
        ${card(2, x => { const A = x + 32, c = A + 7 + w / 2; return `${at(A, k)}${axis(A)}<g opacity=".9">${flip(c, at(A + w + 7, k))}</g>`; })}
        ${card(3, x => { const A = x + 36; return `${at(A, k)}${flip(A, at(A, k))}${axis(A)}`; })}
        <g ${tA(3.9, 'ta-pop')}>${pill(90, 178, 140, L('figura sencera!', '¡figura entera!'), '#2FB36D', 'tat w s')}</g>`);
    },
    /* ---------- m4-4 · finestres sense forats: peces fines enganxades a la façana (de davant i tallada) ---------- */
    m44fin() {
      const win2 = (x, t) => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="98" width="26" height="26" rx="2" fill="#5BC0EB" stroke="#1B2B6B" stroke-width="2.5"/><path d="M${x + 13} 98v26M${x} 111h26" stroke="#1B2B6B" stroke-width="1.6"/></g>`;
      return tSvg(196, `${bg(196)}
        <g ${tA(.1, 'ta-fade')}><rect x="22" y="80" width="140" height="88" fill="#F3F3EE" stroke="#C9CFDD" stroke-width="2"/><path d="M14 82L92 34L170 82Z" fill="#E8453C" stroke="#B8322B" stroke-width="2" stroke-linejoin="round"/>
          <line x1="16" y1="168" x2="168" y2="168" stroke="#2FB36D" stroke-width="5" stroke-linecap="round"/><rect x="80" y="118" width="24" height="50" rx="2" fill="#A0683A"/></g>
        ${win2(36, .8)}${win2(122, 1.4)}
        <g ${tA(2, 'ta-fade')}><line x1="148" y1="111" x2="214" y2="98" stroke="#7C5CFF" stroke-width="2" stroke-dasharray="4 3"/><circle cx="252" cy="104" r="58" fill="#fff" stroke="#7C5CFF" stroke-width="3" filter="url(#bwSh)"/>
          <rect x="226" y="58" width="22" height="92" fill="#F3F3EE" stroke="#C9CFDD" stroke-width="2"/><rect x="218" y="86" width="16" height="36" rx="2" fill="#5BC0EB" stroke="#1B2B6B" stroke-width="2"/>
          <line x1="226" y1="80" x2="226" y2="128" stroke="#E5484D" stroke-width="1.6" stroke-dasharray="3 2"/><text x="262" y="78" class="tat s" fill="#5A6383" style="font-size:11px">${L('paret', 'pared')}</text></g>
        <g ${tA(2.8, 'ta-in')}>${pill(196, 168, 116, L('2 mm: mig a dins', '2 mm: medio dentro'), '#14204A', 'tat w s')}</g>
        <g ${tA(3.4, 'ta-in')}>${pill(14, 8, 150, L('sense forats, de peces', 'sin agujeros, de piezas'), '#fff')}</g>`);
    },
    /* ---------- m4-4 · el pla de treball de la casa: per parts i de baix a dalt ---------- */
    m44pla() {
      const f = iso(112, 118, 1.05), T = [.3, 1.1, 1.9, 2.7, 3.5];
      const n = (x, y, z, k, t) => { const [a, b] = f(x, y, z); return `<g ${tA(t + .15, 'ta-pop')}><circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="10" fill="#14204A" stroke="#fff" stroke-width="2"/><text x="${a.toFixed(1)}" y="${(b + 4.5).toFixed(1)}" text-anchor="middle" class="tat w" style="font-size:12px;font-weight:900">${k}</text></g>`; };
      const tree = (x, y) => { const [a, b] = f(x, y, 4), [c, d] = f(x, y, 26); return `<line x1="${a.toFixed(1)}" y1="${b.toFixed(1)}" x2="${a.toFixed(1)}" y2="${(b - 12).toFixed(1)}" stroke="#A0683A" stroke-width="4"/><path d="M${(c - 9).toFixed(1)} ${(b - 8).toFixed(1)}L${c.toFixed(1)} ${d.toFixed(1)}L${(c + 9).toFixed(1)} ${(b - 8).toFixed(1)}Z" fill="#1E8E52"/>`; };
      return tSvg(200, `${bg(200)}<g ${tA(.05, 'ta-fade')}>${box(f, -55, -52, 0, 110, 84, 4, VERD)}</g>
        <g ${tA(T[0], 'ta-pop')}>${box(f, -25, -15, 4, 50, 30, 30, BLANC)}</g>
        <g ${tA(T[1], 'ta-pop')}>${roof(f, 0, -17, 34, 52, 34, 15, VERM)}</g>
        <g ${tA(T[2], 'ta-pop')}>${box(f, -6, -16, 4, 12, 1, 18, FUSTA)}${box(f, -20, -16, 16, 10, 1, 10, CEL)}${box(f, 10, -16, 16, 10, 1, 10, CEL)}</g>
        <g ${tA(T[3], 'ta-pop')}>${tree(-40, -36)}${tree(-24, -36)}${tree(24, -36)}${tree(40, -36)}</g>
        <g ${tA(T[4], 'ta-pop')}>${box(f, 6, -12, 40, 14, 20, 2, FOSC)}</g>
        ${n(-28, -15, 20, 1, T[0])}${n(0, -17, 52, 2, T[1])}${n(0, -16, 12, 3, T[2])}${n(-40, -36, 34, 4, T[3])}${n(24, -2, 50, 5, T[4])}
        <g ${tA(.2, 'ta-in')}><rect x="214" y="14" width="98" height="150" rx="14" fill="#fff" filter="url(#bwSh)"/>${[L('cos', 'cuerpo'), L('teulada', 'tejado'), L('finestres', 'ventanas'), L('arbres', 'árboles'), L('detalls', 'detalles')].map((t, i) => `<g ${tA(T[i] + .1, 'ta-in')}><circle cx="230" cy="${36 + i * 27}" r="9" fill="#14204A"/><text x="230" y="${40 + i * 27}" text-anchor="middle" class="tat w" style="font-size:11px;font-weight:900">${i + 1}</text><text x="244" y="${41 + i * 27}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}</g>
        <g ${tA(4, 'ta-pop')}>${pill(214, 168, 98, L('de baix a dalt', 'de abajo arriba'), '#2FB36D', 'tat w s')}</g>`);
    }
  };
})());

/* ── unitat 5 ── */
/* Tech 3D · Nivell 1 · unitat 5 «Forats» · animacions de teoria (TANI)
   Dibuixos propis de Numi: perspectiva isomètrica i talls de costat (seccions), SVG + CSS (.ta) + SMIL, en bucle de 5,5 s.
   Claus: m5forat, m5tipus, m5clauer, m5relleu, m5paret, m5tapa, m5mirall, m5tinta. */
Object.assign(TANI, (() => {
  const D = 5.5;
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // caixa: tres cares visibles (dalt, cara x màx. i cara y màx.) amb tres tons
  const box = (f, x0, y0, z0, w, d, h, c) => `<polygon points="${pts(f, [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]])}" fill="${c[1]}"/><polygon points="${pts(f, [[x0, y0 + d, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]])}" fill="${c[2]}"/><polygon points="${pts(f, [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]])}" fill="${c[0]}"/>`;
  // cilindre vertical (centre x, y; base z0, alçada h, radi r)
  const cyl = (f, x, y, z0, h, r, k, c, extra = '') => { const [X, Yb] = f(x, y, z0), Yt = f(x, y, z0 + h)[1], rx = 1.2247 * r * k, ry = 0.7071 * r * k;
    return `<path d="M${(X - rx).toFixed(1)} ${Yt.toFixed(1)}V${Yb.toFixed(1)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 0 ${(X + rx).toFixed(1)} ${Yb.toFixed(1)}V${Yt.toFixed(1)}Z" fill="${c[1]}" ${extra}/><ellipse cx="${X.toFixed(1)}" cy="${Yt.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${c[0]}" ${extra}/>`; };
  // un forat vist des de dalt: el·lipse fosca amb la paret del fons il·luminada
  const pit = (f, x, y, z, r, k, deep = '#2B2160', wall = '#5B3FD6') => { const [X, Y] = f(x, y, z), rx = 1.2247 * r * k, ry = 0.7071 * r * k;
    return `<ellipse cx="${X.toFixed(1)}" cy="${Y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${deep}"/><path d="M${(X - rx).toFixed(1)} ${Y.toFixed(1)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 1 ${(X + rx).toFixed(1)} ${Y.toFixed(1)}A${rx.toFixed(1)} ${(ry * 0.45).toFixed(1)} 0 0 0 ${(X - rx).toFixed(1)} ${Y.toFixed(1)}Z" fill="${wall}"/>`; };
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], GROC = ['#FFE58A', '#F7C531', '#D9A514'], TEAL = ['#8EE3EE', '#14A3B8', '#0E7F90'], BLAU = ['#A9C4FF', '#3D7BF4', '#2A5BC4'], ROSA = ['#FFB3D8', '#EC5FA8', '#C8448A'];
  const GRIS = ['#DCE2F0', '#B8C1D6'];
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const defs = id => `<defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#D5DCEC"/><rect width="2.6" height="6" fill="#A9B4CF"/></pattern></defs>`;
  const pill = (x, y, w, txt, t, col = '#fff', tc = '') => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${col}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s ${tc}">${txt}</text></g>`;
  // moviment SMIL en bucle: de (dx, dy) a (0, 0) entre t0 i t1 (segons)
  const slide = (dx, dy, t0, t1) => `<animateTransform attributeName="transform" type="translate" values="${dx} ${dy};${dx} ${dy};0 0;0 0" keyTimes="0;${(t0 / D).toFixed(3)};${(t1 / D).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const show = (t0, t1 = D - 0.35) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${(t0 / D).toFixed(3)};${((t0 + 0.25) / D).toFixed(3)};${(t1 / D).toFixed(3)};${(Math.min(t1 + 0.2, D - 0.05) / D).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const dim = (x1, y1, x2, y2, col = '#14204A') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="1.6"/><path d="M${x1} ${y1 - 4}v8M${x2} ${y2 - 4}v8" stroke="${col}" stroke-width="1.6"/>`;
  return {
    // sòlid + forat = resultat (un cub amb un forat rodó que el travessa)
    m5forat() {
      const k = 1.25, A = iso(78, 112, k), B = iso(246, 112, k);
      const hole = `<g opacity=".9">${cyl(A, 0, 0, -6, 44, 10, k, ['url(#m5hf)', 'url(#m5hf)'], 'stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3"')}</g>`;
      return tSvg(200, `${defs('m5hf')}${bg(200)}
        <ellipse cx="78" cy="150" rx="58" ry="14" fill="#14204A" opacity=".1"/><ellipse cx="246" cy="150" rx="58" ry="14" fill="#14204A" opacity=".1"/>
        <g ${tA(0.1, 'ta-fade')}>${box(A, -22, -22, 0, 44, 44, 26, LILA)}</g>
        <g ${tA(0.5, 'ta-fade')}><g>${slide(0, -60, 0.6, 1.8)}${hole}</g></g>
        <g ${tA(2.2, 'ta-pop')}><path d="M150 96h22m-8 -8l8 8l-8 8" stroke="#14204A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.6, 'ta-pop')}>${box(B, -22, -22, 0, 44, 44, 26, LILA)}${pit(B, 0, 0, 26, 10, k)}</g>
        ${pill(16, 164, 124, L('sòlid + forat', 'sólido + agujero'), 0.3)}${pill(196, 164, 100, L('resultat', 'resultado'), 2.9, '#7C5CFF', 'w')}
        <g ${tA(1.4, 'ta-in')}><rect x="14" y="12" width="98" height="24" rx="12" fill="#fff" filter="url(#bwSh)"/><rect x="24" y="18" width="12" height="12" rx="3" fill="url(#m5hf)" stroke="#7F8AA8" stroke-dasharray="3 2"/><text x="42" y="29" class="tat s">${L('forat', 'agujero')}</text></g>`);
    },
    // tres maneres de fer servir un forat (talls de costat): passant, clot i buit per dins
    m5tipus() {
      const card = (x, t, lab, sub, body) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="30" width="96" height="150" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${body}<text x="${x + 48}" y="150" text-anchor="middle" class="tat s">${lab}</text><text x="${x + 48}" y="168" text-anchor="middle" class="tat s" style="font-size:11.5px;fill:#5A678C">${sub}</text></g>`;
      const sol = '#7C5CFF', hs = 'fill="url(#m5ht)" stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3" opacity=".85"';
      const c1 = `<rect x="22" y="78" width="72" height="26" rx="3" fill="${sol}"/><rect x="50" y="78" width="16" height="26" fill="#fff"/><g>${slide(0, -40, 0.5, 1.4)}<rect x="50" y="62" width="16" height="58" rx="2" ${hs}/></g>`;
      const c2 = `<rect x="126" y="78" width="72" height="26" rx="3" fill="${sol}"/><rect x="148" y="78" width="28" height="10" fill="#fff"/><g>${slide(0, -40, 1.2, 2.1)}<rect x="148" y="62" width="28" height="26" rx="2" ${hs}/></g>`;
      const c3 = `<rect x="230" y="64" width="72" height="52" rx="3" fill="${sol}"/><rect x="242" y="76" width="48" height="28" fill="#fff"/><g opacity="0">${show(2.4)}<rect x="242" y="76" width="48" height="28" rx="2" ${hs}/></g>`;
      return tSvg(196, `${defs('m5ht')}${bg(196)}<text x="160" y="20" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('Vist per dins, tallat pel mig', 'Visto por dentro, cortado por el medio')}</text>
        ${card(12, 0.2, L('passant', 'pasante'), L('de banda a banda', 'de lado a lado'), c1)}${card(116, 0.9, L('clot', 'hoyo'), L('només una mica', 'solo un poco'), c2)}${card(220, 1.8, L('buit per dins', 'hueco por dentro'), L('no es veu per fora', 'no se ve por fuera'), c3)}`);
    },
    // les parts d'un clauer: gruix, forat de l'anella amb vora i un dibuix gravat
    m5clauer() {
      const ring = `<g opacity="0">${show(2.6)}<circle cx="50" cy="84" r="28" fill="none" stroke="#8C96AE" stroke-width="5.5"/><circle cx="50" cy="84" r="28" fill="none" stroke="#E4E8F2" stroke-width="1.8"/></g>`;
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-fade')}><rect x="40" y="56" width="168" height="96" rx="22" fill="#3D7BF4"/><rect x="40" y="56" width="168" height="96" rx="22" fill="none" stroke="#2A5BC4" stroke-width="3"/></g>
        <g ${tA(0.7, 'ta-pop')}><circle cx="72" cy="104" r="11" fill="#F1F2FB" stroke="#2A5BC4" stroke-width="2"/></g>
        ${ring}
        <g ${tA(1.3, 'ta-in')}><path d="M42 98v12M61 98v12M42 104h19" stroke="#FFD54A" stroke-width="2.2"/></g>
        <g ${tA(1.9, 'ta-pop')}><path d="M120 76h52v14h-19v42h-14v-42h-19z" fill="#163C99"/><path d="M122.5 78.5h47v9h-19v42h-9v-42h-19z" fill="#2B5FD0"/></g>
        <g ${tA(1.9, 'ta-in')}><rect x="222" y="22" width="88" height="160" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="266" y="42" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('de costat', 'de lado')}</text>
          <rect x="234" y="92" width="64" height="20" fill="#3D7BF4"/><rect x="258" y="92" width="18" height="5" fill="#fff"/><path d="M300 92h8M300 112h8M304 92v20" stroke="#14204A" stroke-width="1.6"/>
          <text x="266" y="134" text-anchor="middle" class="tat s">${L('gruix 4 mm', 'grosor 4 mm')}</text><text x="266" y="152" text-anchor="middle" class="tat s">${L('gravat 1 mm', 'grabado 1 mm')}</text><path d="M267 88l0 -10" stroke="#E5484D" stroke-width="2"/><circle cx="267" cy="76" r="3" fill="#E5484D"/></g>
        ${pill(14, 166, 108, L('vora 3 mm', 'borde 3 mm'), 1.4, '#FFD54A')}${pill(128, 166, 84, L('gravat', 'grabado'), 2.2)}
        <g ${tA(0.4, 'ta-in')}><text x="124" y="40" text-anchor="middle" class="tat b">${L('Un clauer fort', 'Un llavero fuerte')}</text></g>`);
    },
    // gravat (forat poc profund) i relleu (peça sòlida a sobre), vist de costat
    m5relleu() {
      const hs = 'fill="url(#m5hr)" stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3" opacity=".85"';
      const panel = (x, t, title, body, note) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="14" width="146" height="168" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="${x + 73}" y="40" text-anchor="middle" class="tat b">${title}</text>${body}<text x="${x + 73}" y="166" text-anchor="middle" class="tat s" style="fill:#5A678C">${note}</text></g>`;
      const left = `<rect x="22" y="96" width="122" height="34" rx="3" fill="#F7C531"/><rect x="62" y="96" width="42" height="9" fill="#fff"/><g>${slide(0, -34, 0.6, 1.5)}<rect x="62" y="78" width="42" height="27" rx="2" ${hs}/></g>
        <g opacity="0">${show(1.7)}<path d="M112 96v9" stroke="#E5484D" stroke-width="2"/><text x="118" y="104" class="tat s" style="fill:#E5484D;font-size:12px">1 mm</text></g>`;
      const right = `<rect x="174" y="96" width="122" height="34" rx="3" fill="#2FB36D"/><g>${slide(0, -36, 2.2, 3.0)}<rect x="214" y="86" width="42" height="10" rx="2" fill="#F3F3EE" stroke="#9AA3B5" stroke-width="1.4"/></g>
        <g opacity="0">${show(3.2)}<path d="M264 86v10" stroke="#E5484D" stroke-width="2"/><text x="270" y="94" class="tat s" style="fill:#E5484D;font-size:12px">1 mm</text></g>`;
      return tSvg(196, `${defs('m5hr')}${bg(196)}${panel(8, 0.2, L('Gravat', 'Grabado'), left, L('queda enfonsat', 'queda hundido'))}${panel(166, 1.8, L('Relleu', 'Relieve'), right, L('sobresurt', 'sobresale'))}`);
    },
    // el gruix de la paret d'una tassa: (40 − 36) ÷ 2 = 2 mm, i el fons de 2 mm
    m5paret() {
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-fade')}><circle cx="82" cy="100" r="62" fill="#14A3B8"/><circle cx="82" cy="100" r="62" fill="none" stroke="#0E7F90" stroke-width="2"/></g>
        <g ${tA(0.6, 'ta-pop')}><circle cx="82" cy="100" r="55.8" fill="#E9F8FA" stroke="#0E7F90" stroke-width="1.5"/></g>
        <g ${tA(1.0, 'ta-in')}>${dim(20, 100, 144, 100, '#14204A')}<rect x="58" y="74" width="48" height="20" rx="10" fill="#fff"/><text x="82" y="89" text-anchor="middle" class="tat s">Ø 40</text></g>
        <g ${tA(1.6, 'ta-in')}>${dim(26.2, 128, 137.8, 128, '#0E7F90')}<rect x="58" y="134" width="48" height="20" rx="10" fill="#fff"/><text x="82" y="149" text-anchor="middle" class="tat s" style="fill:#0E7F90">Ø 36</text></g>
        <g ${tA(2.3, 'ta-pop')}><circle cx="22" cy="40" r="15" fill="#fff" stroke="#E5484D" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="45" text-anchor="middle" class="tat s" style="fill:#E5484D;font-size:12px">2</text><path d="M27 54l-3 40" stroke="#E5484D" stroke-width="1.6" stroke-dasharray="3 2"/></g>
        <g ${tA(2.6, 'ta-in')}><rect x="166" y="16" width="144" height="128" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="238" y="36" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('tallada pel mig', 'cortada por el medio')}</text>
          <path d="M190 50h9v68h78v-68h9v80h-96z" fill="#14A3B8"/><text x="238" y="92" text-anchor="middle" class="tat s" style="fill:#0E7F90">${L('buit', 'hueco')}</text>
          <path d="M190 58h9" stroke="#E5484D" stroke-width="2"/><text x="182" y="62" text-anchor="end" class="tat s" style="font-size:11px;fill:#E5484D">2</text><path d="M296 118v12" stroke="#E5484D" stroke-width="2"/><text x="300" y="128" class="tat s" style="font-size:11px;fill:#E5484D">2</text><text x="238" y="112" text-anchor="middle" class="tat s" style="font-size:11px;fill:#5A678C">${L('fons de 2 mm', 'fondo de 2 mm')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="160" y="156" width="152" height="32" rx="16" fill="#14A3B8" filter="url(#bwSh)"/><text x="236" y="177" text-anchor="middle" class="tat w s">(40 − 36) ÷ 2 = 2 mm</text></g>`);
    },
    // la tapa: un tap de la mateixa mida no entra; amb 0,5 mm de marge per costat, sí
    m5tapa() {
      const boxS = `<path d="M40 92h12v76h136v-76h12v88h-160z" fill="#F5893A"/>`;
      const lid = (w, col) => `<rect x="${120 - w / 2}" y="44" width="${w}" height="34" rx="2" fill="${col}"/><rect x="34" y="34" width="172" height="12" rx="3" fill="${col}"/>`;
      const bad = `<g opacity="0">${show(0.2, 2.6)}<g>${slide(0, -40, 0.4, 1.4)}<g transform="translate(0 14)">${lid(146, '#FFB561')}</g></g><g opacity="0">${show(1.5, 2.6)}<circle cx="232" cy="64" r="16" fill="#E5484D"/><path d="M225 57l14 14M239 57l-14 14" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><text x="232" y="98" text-anchor="middle" class="tat s" style="fill:#E5484D">${L('no entra', 'no entra')}</text></g></g>`;
      const good = `<g opacity="0">${show(2.8)}<g>${slide(0, -50, 2.9, 3.9)}<g transform="translate(0 50)">${lid(126, '#FFC27A')}</g></g><g opacity="0">${show(4.0)}<circle cx="232" cy="64" r="16" fill="#2FB36D"/><path d="M224 64l6 6l10 -12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M54 110h4M182 110h4" stroke="#E5484D" stroke-width="3"/><text x="244" y="100" text-anchor="middle" class="tat s" style="fill:#2FB36D">0,5 mm</text><text x="244" y="116" text-anchor="middle" class="tat s" style="fill:#2FB36D">${L('per costat', 'por lado')}</text></g></g>`;
      return tSvg(196, `${bg(196)}<text x="20" y="22" class="tat s" style="fill:#5A678C">${L('Capsa i tapa, tallades pel mig', 'Caja y tapa, cortadas por el medio')}</text>${boxS}${bad}${good}`);
    },
    // el segell emmirallat: la F girada del segell surt bé al paper
    m5mirall() {
      const F = (x, y, s, col, flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M-12 -18h24v7h-17v8h13v7h-13v14h-7z" fill="${col}"/></g>`;
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-in')}><rect x="14" y="30" width="110" height="120" rx="16" fill="#3D7BF4" filter="url(#bwSh)"/>${F(69, 92, 2.1, '#F3F3EE', true)}<text x="69" y="172" text-anchor="middle" class="tat s">${L('cara del segell', 'cara del sello')}</text></g>
        <g ${tA(0.8, 'ta-fade')}><line x1="160" y1="20" x2="160" y2="160" stroke="#9AA3B5" stroke-width="2.5" stroke-dasharray="6 5"/><text x="160" y="188" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('mirall', 'espejo')}</text></g>
        <g ${tA(1.0, 'ta-in')}><path d="M138 92h44m-8 -8l8 8l-8 8" stroke="#14204A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="160" y="80" text-anchor="middle" class="tat s">${L('prem', 'aprieta')}</text></g>
        <g ${tA(2.0, 'ta-pop')}><rect x="196" y="30" width="110" height="120" rx="6" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${F(251, 92, 2.1, '#1B2B6B', false)}<text x="251" y="172" text-anchor="middle" class="tat s">${L('paper', 'papel')}</text></g>
        <g ${tA(3.0, 'ta-pop')}><circle cx="296" cy="36" r="14" fill="#2FB36D"/><path d="M289 36l5 5l9 -10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // relleu (el dibuix agafa la tinta) i gravat (la tinta va a la resta i el dibuix queda en blanc)
    m5tinta() {
      const heart = (x, y, s, col) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 6C-6 0 -12 -3 -12 -8C-12 -12 -9 -14 -6 -14C-3 -14 -1 -12 0 -10C1 -12 3 -14 6 -14C9 -14 12 -12 12 -8C12 -3 6 0 0 6Z" fill="${col}"/>`;
      const row = (y, t, title, sec, paper) => `<g ${tA(t, 'ta-in')}><rect x="8" y="${y}" width="304" height="86" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="${y + 22}" class="tat s">${title}</text>${sec}
          <path d="M178 ${y + 50}h30m-7 -7l7 7l-7 7" stroke="#14204A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${paper}</g>`;
      const s1 = `<rect x="26" y="62" width="130" height="18" rx="2" fill="#3D7BF4"/><rect x="64" y="52" width="54" height="10" rx="2" fill="#3D7BF4"/><g opacity="0">${show(1.0)}<rect x="64" y="49" width="54" height="4" rx="2" fill="#E5489A"/></g>`;
      const p1 = `<rect x="222" y="44" width="76" height="44" rx="4" fill="#FBFBFE" stroke="#DCE4FA"/><g opacity="0">${show(1.6)}${heart(260, 70, 1.3, '#E5489A')}</g>`;
      const s2 = `<rect x="26" y="150" width="130" height="18" rx="2" fill="#3D7BF4"/><rect x="64" y="150" width="54" height="7" fill="#fff"/><g opacity="0">${show(3.0)}<rect x="26" y="146" width="38" height="4" rx="2" fill="#E5489A"/><rect x="118" y="146" width="38" height="4" rx="2" fill="#E5489A"/></g>`;
      const p2 = `<rect x="222" y="134" width="76" height="44" rx="4" fill="#FBFBFE" stroke="#DCE4FA"/><g opacity="0">${show(3.6)}<rect x="226" y="138" width="68" height="36" rx="3" fill="#E5489A"/>${heart(260, 160, 1.3, '#fff')}</g>`;
      return tSvg(204, `${bg(204)}${row(14, 0.2, L('Relleu: el dibuix agafa la tinta', 'Relieve: el dibujo coge la tinta'), s1, p1)}${row(104, 2.2, L('Gravat: el dibuix queda en blanc', 'Grabado: el dibujo queda en blanco'), s2, p2)}`);
    }
  };
})());

/* ── unitat 6 ── */
/* Tech 3D · Nivell 1 · unitat 6 «Del model a l'objecte» · animacions de teoria (TANI)
   Dibuixos propis de Numi (SVG + CSS .ta + SMIL, en bucle de 5,5 s). La Nuvi és la impressora del taller: té ulls al capçal.
   Claus: m6broquet, m6capes, m6temps (m6-1) · m6base, m6flota, m6paret, m6volad (m6-2) · m6stl, m6corba, m6escala, m6cami
   (m6-3) · m6llapis, m6sis (m6-4). Les mides són reals però els dibuixos exageren el gruix de les capes perquè es vegin. */
Object.assign(TANI, (() => {
  const D = 5.5, fr = s => (s / D).toFixed(3);
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const card = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>`;
  const pill = (x, y, w, txt, t, col = '#fff', tc = '') => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${col}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s ${tc}">${txt}</text></g>`;
  // visible (de cop) entre els segons a i b del cicle; sense b, fins al final
  const win = (a, b) => b == null || b >= D ? `<animate attributeName="opacity" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="0;1" keyTimes="0;${fr(a)}"/>` : `<animate attributeName="opacity" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="0;1;0" keyTimes="0;${fr(a)};${fr(b)}"/>`;
  // moviment: de (dx, dy) a (0, 0) entre els segons t0 i t1
  const slide = (dx, dy, t0, t1) => `<animateTransform attributeName="transform" type="translate" values="${dx} ${dy};${dx} ${dy};0 0;0 0" keyTimes="0;${fr(t0)};${fr(t1)};1" dur="${D}s" repeatCount="indefinite"/>`;
  // una amplada que creix de 0 a w entre els segons t0 i t1 (des de l'esquerra; amb rtl, des de la dreta)
  const grow = (x, w, t0, t1, rtl) => `<animate attributeName="width" values="0;0;${w};${w}" keyTimes="0;${fr(t0)};${fr(t1)};1" dur="${D}s" repeatCount="indefinite"/>${rtl ? `<animate attributeName="x" values="${x + w};${x + w};${x};${x}" keyTimes="0;${fr(t0)};${fr(t1)};1" dur="${D}s" repeatCount="indefinite"/>` : ''}`;
  const ok = (x, y, t, col = '#22A06B') => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="13" fill="${col}"/><path d="M${x - 6} ${y}l4 4.5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="13" fill="#E5484D"/><path d="M${x - 5} ${y - 5}l10 10M${x + 5} ${y - 5}l-10 10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>`;
  // el capçal de la Nuvi (amb ulls) i el broquet; la punta del broquet és a (0, 0)
  const head = (k = 1) => `<g transform="scale(${k})"><rect x="-22" y="-52" width="44" height="34" rx="10" fill="#2A3557"/><ellipse cx="-9" cy="-36" rx="6" ry="6.5" fill="#fff"/><ellipse cx="9" cy="-36" rx="6" ry="6.5" fill="#fff"/><circle cx="-8.5" cy="-33.5" r="2.8" fill="#14204A"/><circle cx="9.5" cy="-33.5" r="2.8" fill="#14204A"/><rect x="-10" y="-18" width="20" height="9" rx="2" fill="#E8453C"/><path d="M-6 -9h12l-4 9h-4z" fill="#D9A514"/></g>`;
  const PLA = '#F5893A', PLA2 = '#FFA866', NE = '#1B2B6B', GR = '#9AA3B5';
  // perspectiva isomètrica per al cub de l'STL i els cubs de l'escala
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, l) => l.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  const cube = (f, x0, y0, z0, s, c) => `<polygon points="${pts(f, [[x0 + s, y0, z0], [x0 + s, y0 + s, z0], [x0 + s, y0 + s, z0 + s], [x0 + s, y0, z0 + s]])}" fill="${c[1]}"/><polygon points="${pts(f, [[x0, y0 + s, z0], [x0 + s, y0 + s, z0], [x0 + s, y0 + s, z0 + s], [x0, y0 + s, z0 + s]])}" fill="${c[2]}"/><polygon points="${pts(f, [[x0, y0, z0 + s], [x0 + s, y0, z0 + s], [x0 + s, y0 + s, z0 + s], [x0, y0 + s, z0 + s]])}" fill="${c[0]}"/>`;
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], VERD = ['#9BE3BC', '#2FB36D', '#228A53'];
  return {
    /* ---------- m6-1 · del filament a la línia ---------- */
    m6broquet() {
      const spokes = [0, 60, 120].map(a => `<line x1="${52 + 30 * Math.cos(a * Math.PI / 180)}" y1="${70 + 30 * Math.sin(a * Math.PI / 180)}" x2="${52 - 30 * Math.cos(a * Math.PI / 180)}" y2="${70 - 30 * Math.sin(a * Math.PI / 180)}" stroke="#fff" stroke-width="3" opacity=".7"/>`).join('');
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-fade')}><circle cx="52" cy="70" r="40" fill="#DCE2F0" stroke="${GR}" stroke-width="2"/>
          <g><animateTransform attributeName="transform" type="rotate" from="0 52 70" to="-360 52 70" dur="${D}s" repeatCount="indefinite"/>
            <circle cx="52" cy="70" r="33" fill="none" stroke="${PLA}" stroke-width="5"/><circle cx="52" cy="70" r="27" fill="none" stroke="${PLA2}" stroke-width="5"/><circle cx="52" cy="70" r="21" fill="none" stroke="${PLA}" stroke-width="5"/>${spokes}<circle cx="52" cy="70" r="11" fill="#7C5CFF"/></g></g>
        <path d="M52 30C110 4 178 6 200 56" fill="none" stroke="${PLA}" stroke-width="3.5"/>
        <path d="M52 30C110 4 178 6 200 56" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="4 10" opacity=".9"><animate attributeName="stroke-dashoffset" from="28" to="0" dur="1.2s" repeatCount="indefinite"/></path>
        <rect x="18" y="150" width="290" height="10" rx="4" fill="#5A678C"/><rect x="18" y="150" width="290" height="3" rx="1.5" fill="#8D9AC0"/>
        <path ${tA(0.6, 'ta-draw')} pathLength="1" d="M200 145H62" stroke="${PLA}" stroke-width="7" stroke-linecap="round" fill="none"/>
        <path d="M200 132V144" stroke="${PLA}" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(200 132)">${head(1.15)}</g>
        ${pill(8, 116, 136, L('filament de 1,75 mm', 'filamento de 1,75 mm'), 0.3)}
        ${pill(226, 74, 88, '≈ 200 °C', 1.1, '#E8453C', 'w')}
        ${pill(84, 168, 152, L('línia de ≈ 0,4 mm', 'línea de ≈ 0,4 mm'), 2.0, PLA, 'w')}
        <g ${tA(1.5, 'ta-in')}><text x="250" y="122" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('broquet', 'boquilla')}</text></g>`);
    },
    /* ---------- m6-1 · capa a capa, de baix a dalt (tall de costat) ---------- */
    m6capes() {
      const N = 8, h = 13, x0 = 128, W = 130, yb = 160, t = i => 0.35 + i * 0.6, dur = 0.5;
      const layers = Array.from({ length: N }, (_, i) => { const y = yb - h * (i + 1), rtl = i % 2 === 1;
        return `<rect x="${rtl ? x0 + W : x0}" y="${y + 1}" width="0" height="${h - 2}" rx="${(h - 2) / 2}" fill="${i % 2 ? PLA2 : PLA}">${grow(x0, W, t(i), t(i) + dur, rtl)}</rect>`; }).join('');
      // el capçal fa zig-zag: cada capa d'un costat a l'altre i després puja
      const vals = [], keys = [];
      for (let i = 0; i < N; i++) { const y = yb - h * (i + 1) + 1, a = i % 2 ? x0 + W : x0, b = i % 2 ? x0 : x0 + W; vals.push(`${a} ${y}`, `${b} ${y}`); keys.push(t(i), t(i) + dur); }
      const allV = [vals[0], ...vals, vals[vals.length - 1]], allK = [0, ...keys.map(k => k / D), 1];
      const headMove = `<animateTransform attributeName="transform" type="translate" values="${allV.join(';')}" keyTimes="${allK.map(k => k.toFixed(3)).join(';')}" dur="${D}s" repeatCount="indefinite"/>`;
      const count = Array.from({ length: N }, (_, i) => `<text x="52" y="36" text-anchor="middle" class="tat b" opacity="0">${L('capa', 'capa')} ${i + 1}${win(t(i), i < N - 1 ? t(i + 1) : D)}</text>`).join('');
      return tSvg(206, `${bg(206)}<rect x="70" y="${yb}" width="246" height="10" rx="4" fill="#5A678C"/>${layers}
        <g>${headMove}<g>${head(0.9)}</g></g>
        <g ${tA(0.2, 'ta-in')}><rect x="8" y="14" width="88" height="34" rx="12" fill="#fff" filter="url(#bwSh)"/>${count}</g>
        <g ${tA(0.6, 'ta-in')}><path d="M52 156V82" stroke="#2FB36D" stroke-width="3" stroke-linecap="round"/><path d="M45 92l7 -10l7 10" fill="none" stroke="#2FB36D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="52" y="72" text-anchor="middle" class="tat b" style="fill:#2FB36D">z</text></g>
        ${pill(8, 176, 150, L('x, y: dibuixa la capa', 'x, y: dibuja la capa'), 0.9)}${pill(164, 176, 150, L('z: puja 0,2 mm', 'z: sube 0,2 mm'), 1.5, '#2FB36D', 'w')}`);
    },
    /* ---------- m6-1 · més capes, més temps; capes fines o gruixudes ---------- */
    m6temps() {
      const tower = (x, n, t0, step) => Array.from({ length: n }, (_, i) => `<rect x="${x}" y="${150 - 11 * (i + 1)}" width="44" height="10" rx="4" fill="${i % 2 ? PLA2 : PLA}" opacity="0">${win(t0 + i * step)}</rect>`).join('');
      // una cúpula feta de capes: com més gruixudes, més esglaons
      const dome = (cx, n, col) => { const R = 30, hh = 40 / n; return Array.from({ length: n }, (_, i) => { const yc = (i + 0.5) * hh, w = 2 * Math.sqrt(Math.max(0, R * R - (yc * R / 40) ** 2)); return `<rect x="${(cx - w / 2).toFixed(1)}" y="${(150 - (i + 1) * hh).toFixed(1)}" width="${w.toFixed(1)}" height="${(hh - 0.6).toFixed(1)}" rx="${Math.min(3, hh / 2).toFixed(1)}" fill="${i % 2 ? col[0] : col[1]}"/>`; }).join(''); };
      return tSvg(196, `${bg(196)}
        <g ${tA(0.1, 'ta-in')}>${card(8, 10, 146, 176)}<text x="81" y="32" text-anchor="middle" class="tat s">${L('Més capes, més temps', 'Más capas, más tiempo')}</text>
          <rect x="18" y="150" width="126" height="6" rx="3" fill="#5A678C"/>${tower(28, 3, 0.4, 0.45)}${tower(90, 8, 0.4, 0.45)}</g>
        ${ok(50, 102, 1.9)}${ok(112, 46, 4.1)}
        <g ${tA(0.3, 'ta-in')}>${card(166, 10, 146, 176)}<text x="239" y="32" text-anchor="middle" class="tat s">${L('Gruix de capa', 'Grosor de capa')}</text>
          <rect x="174" y="150" width="130" height="6" rx="3" fill="#5A678C"/></g>
        <g transform="translate(0 0)" ${tA(0.9, 'ta-fade')}>${dome(205, 12, ['#9BE3BC', '#2FB36D'])}</g>
        <g ${tA(1.6, 'ta-fade')}>${dome(273, 4, [PLA2, PLA])}</g>
        <g ${tA(1.2, 'ta-in')}><text x="205" y="170" text-anchor="middle" class="tat s">0,1 mm</text><text x="205" y="182" text-anchor="middle" class="tat s" style="font-size:11px;fill:#5A678C">${L('més llis', 'más liso')}</text></g>
        <g ${tA(1.9, 'ta-in')}><text x="273" y="170" text-anchor="middle" class="tat s">0,3 mm</text><text x="273" y="182" text-anchor="middle" class="tat s" style="font-size:11px;fill:#5A678C">${L('més ràpid', 'más rápido')}</text></g>
        <g ${tA(0.6, 'ta-in')}><text x="50" y="172" text-anchor="middle" class="tat s">3</text><text x="112" y="172" text-anchor="middle" class="tat s">8</text><text x="81" y="182" text-anchor="middle" class="tat s" style="font-size:11px;fill:#5A678C">${L('capes', 'capas')}</text></g>`);
    },
    /* ---------- m6-2 · base plana: la bola toca un punt, el cilindre tota la base ---------- */
    m6base() {
      const rock = `<animateTransform attributeName="transform" type="rotate" values="0 84 150;-9 84 150;8 84 150;-5 84 150;0 84 150;0 84 150" keyTimes="0;.15;.3;.45;.6;1" dur="${D}s" repeatCount="indefinite"/>`;
      return tSvg(196, `${bg(196)}<defs><radialGradient id="m6bg" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#E6E9F2"/><stop offset="1" stop-color="#B8C1D6"/></radialGradient></defs>
        <rect x="14" y="150" width="292" height="9" rx="4" fill="#5A678C"/>
        <g ${tA(0.1, 'ta-fade')}><g>${rock}<circle cx="84" cy="110" r="40" fill="url(#m6bg)" stroke="#9AA3B5" stroke-width="2"/></g></g>
        <g ${tA(0.8, 'ta-pop')}><circle cx="84" cy="150" r="5" fill="#E5484D"/></g>
        ${pill(22, 14, 124, L('toca 1 punt', 'toca 1 punto'), 0.9, '#E5484D', 'w')}${ko(134, 92, 1.6)}
        <g ${tA(2.2, 'ta-fade')}><rect x="200" y="78" width="84" height="72" fill="#E6E9F2"/><ellipse cx="242" cy="78" rx="42" ry="11" fill="#FFFFFF" stroke="#C9CFDD" stroke-width="1.5"/><path d="M200 78v72M284 78v72" stroke="#C9CFDD" stroke-width="1.5"/></g>
        <g ${tA(2.8, 'ta-fade')}><ellipse cx="242" cy="150" rx="42" ry="7" fill="#2FB36D" opacity=".85"/></g>
        ${pill(176, 14, 132, L('tota la base', 'toda la base'), 3.0, '#2FB36D', 'w')}${ok(296, 64, 3.6)}
        <g ${tA(1.2, 'ta-in')}><text x="84" y="180" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('rodola', 'rueda')}</text></g><g ${tA(3.2, 'ta-in')}><text x="242" y="180" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('ferma', 'firme')}</text></g>`);
    },
    /* ---------- m6-2 · res a l'aire: la corona que flota cau en fils; recolzada, surt bé ---------- */
    m6flota() {
      const piece = `<rect x="70" y="150" width="96" height="12" rx="3" fill="${NE}"/><path d="M84 150l8 -64h52l8 64z" fill="${NE}"/><rect x="96" y="76" width="44" height="10" rx="2" fill="${NE}"/>`;
      const drips = [96, 108, 122, 134].map((x, i) => `<path d="M${x} 50q-5 8 0 16t0 16" fill="none" stroke="${PLA}" stroke-width="3" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${fr(0.6 + i * 0.15)};${fr(0.75 + i * 0.15)};${fr(2.4)};${fr(2.6)};1" dur="${D}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 22;0 22" keyTimes="0;${fr(0.6 + i * 0.15)};${fr(2.2)};1" dur="${D}s" repeatCount="indefinite"/></path>`).join('');
      return tSvg(196, `${bg(196)}<rect x="40" y="162" width="160" height="8" rx="4" fill="#5A678C"/><g ${tA(0.1, 'ta-fade')}>${piece}</g>
        <g opacity="0">${win(0.2, 2.6)}<rect x="92" y="36" width="52" height="12" rx="3" fill="#F7C531" stroke="#D9A514" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M90 66h56" stroke="#E5484D" stroke-width="2" stroke-dasharray="4 4"/></g>
        ${drips}
        <g opacity="0">${win(2.8)}<rect x="96" y="62" width="44" height="14" rx="3" fill="#F7C531" stroke="#D9A514" stroke-width="1.5"/><path d="M98 62l6 -10l8 10l6 -10l6 10l6 -10l8 10z" fill="#F7C531" stroke="#D9A514" stroke-width="1.5" stroke-linejoin="round"/></g>
        <g opacity="0">${win(0.4, 2.6)}<rect x="196" y="28" width="116" height="62" rx="14" fill="#fff" stroke="#F4B7B7" stroke-width="2" filter="url(#bwSh)"/><text x="254" y="54" text-anchor="middle" class="tat s" style="fill:#C2353A">${L("A l'aire:", 'En el aire:')}</text><text x="254" y="74" text-anchor="middle" class="tat s" style="fill:#C2353A">${L('cau en fils', 'cae en hilos')}</text></g>
        <g opacity="0">${win(3.0)}<rect x="196" y="28" width="116" height="62" rx="14" fill="#fff" stroke="#A8E0C0" stroke-width="2" filter="url(#bwSh)"/><text x="254" y="54" text-anchor="middle" class="tat s" style="fill:#1D6B3A">${L('Recolzada:', 'Apoyada:')}</text><text x="254" y="74" text-anchor="middle" class="tat s" style="fill:#1D6B3A">${L('surt bé', 'sale bien')}</text></g>
        ${ko(254, 118, 1.2)}<g opacity="0">${win(3.4)}<circle cx="254" cy="118" r="13" fill="#22A06B"/><path d="M248 118l4 4.5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    /* ---------- m6-2 · gruix de paret: 1 línia es trenca, 5 línies aguanten ---------- */
    m6paret() {
      const lines = Array.from({ length: 5 }, (_, i) => `<rect x="182" y="${70 + i * 11}" width="0" height="9" rx="4.5" fill="${i % 2 ? PLA2 : PLA}">${grow(182, 120, 1.4 + i * 0.35, 1.7 + i * 0.35)}</rect>`).join('');
      return tSvg(196, `${bg(196)}
        <g ${tA(0.1, 'ta-in')}>${card(8, 12, 146, 172)}<text x="81" y="38" text-anchor="middle" class="tat b">0,5 mm</text><text x="81" y="58" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('1 línia', '1 línea')}</text></g>
        <rect x="22" y="92" width="0" height="9" rx="4.5" fill="${PLA}">${grow(22, 118, 0.3, 0.8)}</rect>
        <g opacity="0">${win(1.6)}<rect x="74" y="88" width="12" height="17" fill="#fff"/><path d="M74 88l5 5l-4 4l6 8M86 88l-4 6l5 4l-5 7" fill="none" stroke="#E5484D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(1.9, 'ta-in')}><text x="81" y="140" text-anchor="middle" class="tat s" style="fill:#C2353A">${L('fràgil: es trenca', 'frágil: se rompe')}</text></g>${ko(81, 162, 2.1)}
        <g ${tA(0.9, 'ta-in')}>${card(166, 12, 146, 172)}<text x="239" y="38" text-anchor="middle" class="tat b">2 mm</text><text x="239" y="58" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('5 línies', '5 líneas')}</text></g>
        ${lines}<g ${tA(3.6, 'ta-in')}><text x="239" y="140" text-anchor="middle" class="tat s" style="fill:#1D6B3A">${L('forta', 'fuerte')}</text></g>${ok(239, 162, 3.9)}`);
    },
    /* ---------- m6-2 · voladissos: recte, 45° i massa inclinat (amb suports) ---------- */
    m6volad() {
      const N = 6, h = 14, w = 26, yb = 166;
      const wall = (x, dx, col, t0) => Array.from({ length: N }, (_, i) => `<rect x="${x + i * dx}" y="${yb - h * (i + 1) + 1}" width="${w}" height="${h - 2}" rx="5" fill="${i % 2 ? col[0] : col[1]}" opacity="0">${win(t0 + i * 0.18)}</rect>`).join('');
      // suports: sota la part de cada capa que sobresurt de la de sota
      const X3 = 182, D3 = 22, sup = Array.from({ length: N - 1 }, (_, k) => { const i = k + 1, x = X3 + D3 * (i - 1) + w, top = yb - h * i; return `<rect x="${x + 1}" y="${top}" width="${D3 - 2}" height="${yb - top}" fill="url(#m6sup)"/>`; }).join('');
      return tSvg(206, `${bg(206)}<defs><pattern id="m6sup" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#E6E9F2"/><rect width="2.4" height="6" fill="#B8C1D6"/></pattern></defs>
        <rect x="8" y="${yb}" width="304" height="9" rx="4" fill="#5A678C"/>
        ${wall(22, 0, [PLA2, PLA], 0.2)}${wall(72, h, [PLA2, PLA], 1.1)}
        <g opacity="0">${win(3.4)}${sup}</g>
        ${wall(X3, D3, ['#FFB3B3', '#E5484D'], 2.0)}
        <g ${tA(1.0, 'ta-in')}><text x="35" y="194" text-anchor="middle" class="tat s">0°</text></g>
        <g ${tA(2.2, 'ta-in')}><path d="M72 ${yb}L${72 + h * N} ${yb - h * N}" stroke="#2FB36D" stroke-width="2" stroke-dasharray="5 4"/><text x="122" y="194" text-anchor="middle" class="tat s" style="fill:#1D6B3A">≈ 45°</text></g>
        ${ok(35, 50, 1.5)}${ok(150, 50, 2.6)}${ko(206, 44, 3.0)}
        <g opacity="0">${win(3.6)}<rect x="232" y="180" width="82" height="22" rx="11" fill="#9AA3B5"/><text x="273" y="195" text-anchor="middle" class="tat s w">${L('suports', 'soportes')}</text></g>
        <g opacity="0">${win(2.9, 3.6)}<text x="273" y="195" text-anchor="middle" class="tat s" style="fill:#C2353A">${L('massa!', '¡demasiado!')}</text></g>`);
    },
    /* ---------- m6-3 · un STL és la superfície feta de triangles: un cub en té 12 ---------- */
    m6stl() {
      const f = iso(96, 118, 1.05), s = 56;
      const P = (x, y, z) => f(x, y, z).map(v => v.toFixed(1)).join(' ');
      const diag = (a, b, t) => `<path ${tA(t, 'ta-draw')} pathLength="1" d="M${P(...a)}L${P(...b)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
      const file = `<path d="M222 40h56l18 18v88a8 8 0 0 1 -8 8h-66a8 8 0 0 1 -8 -8v-98a8 8 0 0 1 8 -8z" fill="#fff" stroke="#C9D3EE" stroke-width="2"/><path d="M278 40v18h18" fill="#E6ECFB" stroke="#C9D3EE" stroke-width="2"/>
        <g stroke="#7C5CFF" stroke-width="1.6" fill="none" opacity=".75"><path d="M226 120l20 -34l20 34zM246 86l20 34l20 -34zM246 86h40M236 103h40"/></g><text x="256" y="72" text-anchor="middle" class="tat b" style="fill:#7C5CFF">.stl</text>`;
      return tSvg(206, `${bg(206)}<g ${tA(0.1, 'ta-fade')}>${cube(f, -s / 2, -s / 2, 0, s, LILA)}</g>
        ${diag([s / 2, -s / 2, 0], [s / 2, s / 2, s], 0.5)}${diag([-s / 2, s / 2, 0], [s / 2, s / 2, s], 0.8)}${diag([-s / 2, -s / 2, s], [s / 2, s / 2, s], 1.1)}
        ${pill(16, 14, 92, L('6 cares', '6 caras'), 0.4)}${pill(10, 166, 120, L('× 2 triangles', '× 2 triángulos'), 1.6)}${pill(134, 166, 64, '= 12', 2.4, '#7C5CFF', 'w')}
        <g ${tA(2.9, 'ta-in')}>${file}</g><g ${tA(3.4, 'ta-in')}><text x="258" y="176" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('només forma', 'solo forma')}</text></g>`);
    },
    /* ---------- m6-3 · les corbes es fan amb molts triangles ---------- */
    m6corba() {
      const fan = (cx, cy, r, n, t, col) => { let s = ''; for (let i = 0; i < n; i++) { const a0 = 2 * Math.PI * i / n - Math.PI / 2, a1 = 2 * Math.PI * (i + 1) / n - Math.PI / 2; s += `<path d="M${cx} ${cy}L${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)}L${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}Z" fill="${i % 2 ? col[0] : col[1]}" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>`; }
        return `<g ${tA(t, 'ta-pop')}>${s}<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#14204A" stroke-width="1.4" stroke-dasharray="3 3" opacity=".5"/></g>`; };
      return tSvg(196, `${bg(196)}${fan(58, 86, 42, 6, 0.2, ['#B9A7FF', '#7C5CFF'])}${fan(160, 86, 42, 12, 1.1, ['#9BE3BC', '#2FB36D'])}${fan(262, 86, 42, 32, 2.0, ['#FFC79E', PLA])}
        <g ${tA(0.5, 'ta-in')}><text x="58" y="150" text-anchor="middle" class="tat b">6</text></g><g ${tA(1.4, 'ta-in')}><text x="160" y="150" text-anchor="middle" class="tat b">12</text></g><g ${tA(2.3, 'ta-in')}><text x="262" y="150" text-anchor="middle" class="tat b">32</text></g>
        ${pill(36, 162, 248, L('més triangles: més rodó, fitxer més gran', 'más triángulos: más redondo, archivo más grande'), 3.0)}`);
    },
    /* ---------- m6-3 · mida real i escala: ×10 si es va pensar en cm; el doble gasta 8 vegades més ---------- */
    m6escala() {
      const f = iso(238, 132, 1), s = 26;
      const big = [[0, 0, 0], [s, 0, 0], [0, s, 0], [s, s, 0], [0, 0, s], [s, 0, s], [0, s, s], [s, s, s]].map(([x, y, z], i) => `<g opacity="0">${win(2.6 + i * 0.22)}${cube(f, x - s, y - s, z, s, VERD)}</g>`).join('');
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-in')}>${card(8, 10, 146, 186)}<text x="81" y="32" text-anchor="middle" class="tat s">${L('Pensat en cm', 'Pensado en cm')}</text></g>
        <circle cx="81" cy="108" r="52" fill="none" stroke="#9AA3B5" stroke-width="2" stroke-dasharray="5 4"/>
        <g transform="translate(81 108)"><g><animateTransform attributeName="transform" type="scale" values=".1;.1;1;1" keyTimes="0;${fr(1.1)};${fr(2.0)};1" dur="${D}s" repeatCount="indefinite"/><circle r="52" fill="#2FB36D"/><circle r="52" fill="none" stroke="#228A53" stroke-width="3"/></g></g>
        <g opacity="0">${win(0.3, 1.1)}<text x="81" y="80" text-anchor="middle" class="tat s" style="fill:#C2353A">4 mm!</text></g>
        <g opacity="0">${win(2.0)}<text x="81" y="113" text-anchor="middle" class="tat b w">40 mm</text></g>
        ${pill(44, 166, 74, '× 10', 1.0, '#7C5CFF', 'w')}
        <g ${tA(0.6, 'ta-in')}>${card(166, 10, 146, 186)}<text x="239" y="32" text-anchor="middle" class="tat s">${L('El doble de gran', 'El doble de grande')}</text></g>
        <g opacity="0">${win(0.8, 2.6)}${cube(iso(238, 120, 1), -s / 2, -s / 2, 0, s, VERD)}</g>${big}
        ${pill(184, 166, 110, L('2 × 2 × 2 = 8', '2 × 2 × 2 = 8'), 4.4, '#2FB36D', 'w')}`);
    },
    /* ---------- m6-3 · del model a l'objecte: taller → STL → laminador → impressora ---------- */
    m6cami() {
      const xs = [8, 86, 164, 242], w = 70;
      const box = (i, art, lab, t) => `<g ${tA(t, 'ta-in')}>${card(xs[i], 40, w, 92)}${art}<text x="${xs[i] + w / 2}" y="152" text-anchor="middle" class="tat s">${lab}</text></g>`;
      const arrow = (i, t) => `<g ${tA(t, 'ta-pop')}><path d="M${xs[i] + w + 1} 86h6m-4 -5l5 5l-5 5" stroke="#14204A" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const fC = iso(43, 96, 0.9), m = cube(fC, -14, -14, 0, 28, LILA);
      const stl = `<path d="M106 58h26l10 10v44a5 5 0 0 1 -5 5h-31a5 5 0 0 1 -5 -5v-49a5 5 0 0 1 5 -5z" fill="#F5F7FF" stroke="#C9D3EE" stroke-width="2"/><g stroke="#7C5CFF" stroke-width="1.4" fill="none"><path d="M106 104l10 -18l10 18zM116 86l10 18l10 -18zM116 86h20"/></g><text x="121" y="78" text-anchor="middle" class="tat s" style="fill:#7C5CFF">.stl</text>`;
      const sl = Array.from({ length: 6 }, (_, i) => `<rect x="${178 + i * 1.5}" y="${106 - i * 9}" width="${42 - i * 3}" height="7" rx="3" fill="${i % 2 ? PLA2 : PLA}"/>`).join('');
      const pr = `<rect x="252" y="112" width="50" height="6" rx="3" fill="#5A678C"/><rect x="266" y="94" width="22" height="18" rx="4" fill="#7C5CFF"/><g transform="translate(277 88)">${head(0.62)}</g>`;
      return tSvg(196, `${bg(196)}${box(0, m, L('1 Taller', '1 Taller'), 0.2)}${arrow(0, 0.8)}${box(1, stl, '2 STL', 1.0)}${arrow(1, 1.6)}${box(2, sl, L('3 Laminador', '3 Laminador'), 1.8)}${arrow(2, 2.4)}${box(3, pr, L('4 Nuvi', '4 Nuvi'), 2.6)}
        ${pill(36, 164, 248, L("el laminador talla el model en capes", 'el laminador corta el modelo en capas'), 3.2)}
        <g ${tA(0.2, 'ta-in')}><text x="160" y="26" text-anchor="middle" class="tat b">${L("Del model a l'objecte", 'Del modelo al objeto')}</text></g>`);
    },
    /* ---------- m6-4 · el llapis: 7 mm de cara a cara, 8 de punta a punta i un forat de 9 ---------- */
    m6llapis() {
      const cx = 100, cy = 104, k = 13, R = 4 * k, hexP = Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 3 * i; return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`; }).join(' ');
      const fl = R * 0.866;
      return tSvg(206, `${bg(206)}
        <g opacity="0">${win(2.4)}<circle cx="${cx}" cy="${cy}" r="${4.5 * k}" fill="#DCE2F0" stroke="#7F8AA8" stroke-width="2" stroke-dasharray="5 4"/></g>
        <g ${tA(0.1, 'ta-pop')}><polygon points="${hexP}" fill="#F7C531" stroke="#D9A514" stroke-width="3" stroke-linejoin="round"/><circle cx="${cx}" cy="${cy}" r="16" fill="#E8C39E"/><circle cx="${cx}" cy="${cy}" r="6" fill="#3A3F4A"/></g>
        <g ${tA(0.8, 'ta-in')}><path d="M${cx - R} ${cy + R * 0.866 + 18}H${cx + R}" stroke="#14204A" stroke-width="1.8"/><path d="M${cx - R} ${cy + fl + 12}v12M${cx + R} ${cy + fl + 12}v12" stroke="#14204A" stroke-width="1.8"/><text x="${cx}" y="${cy + fl + 38}" text-anchor="middle" class="tat s">${L('8 mm de punta a punta', '8 mm de punta a punta')}</text></g>
        <g ${tA(1.5, 'ta-in')}><path d="M${cx - R - 18} ${cy - fl}V${cy + fl}" stroke="#2F5BEA" stroke-width="1.8"/><path d="M${cx - R - 24} ${cy - fl}h12M${cx - R - 24} ${cy + fl}h12" stroke="#2F5BEA" stroke-width="1.8"/><text x="${cx - R - 26}" y="${cy + 5}" text-anchor="end" class="tat s" style="fill:#2F5BEA">7</text></g>
        ${pill(150, 26, 100, L('forat: 9 mm', 'agujero: 9 mm'), 2.6, '#7C5CFF', 'w')}
        <g ${tA(3.0, 'ta-in')}><text x="209" y="72" text-anchor="middle" class="tat s" style="fill:#5A678C;font-size:11.5px">${L('marge per entrar', 'margen para entrar')}</text></g>
        <g ${tA(0.5, 'ta-in')}><rect x="266" y="40" width="22" height="122" fill="#F7C531"/><rect x="266" y="40" width="7" height="122" fill="#FFE07A"/><rect x="266" y="30" width="22" height="12" rx="2" fill="#EC5FA8"/><rect x="266" y="40" width="22" height="5" fill="#C9CFDD"/><path d="M266 162l11 22l11 -22z" fill="#E8C39E"/><path d="M273 176l4 8l4 -8z" fill="#3A3F4A"/>
          <path d="M300 30V184" stroke="#14204A" stroke-width="1.6"/><path d="M295 30h10M295 184h10" stroke="#14204A" stroke-width="1.6"/></g>
        <g ${tA(1.0, 'ta-in')}><text x="252" y="112" text-anchor="end" class="tat s">≈ 18 cm</text></g>`);
    },
    /* ---------- m6-4 · sis llapis: dues files de tres (paret de 3 mm) o un got (6 al voltant d'1) ---------- */
    m6sis() {
      const k = 3.4, ox = 82, oy = 104, holes = [[-12, -6], [0, -6], [12, -6], [-12, 6], [0, 6], [12, 6]];
      const hx = (x, y, r, col) => `<polygon points="${Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 3 * i; return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`; }).join(' ')}" fill="${col}"/>`;
      const COL = ['#E8453C', '#F7C531', '#2FB36D', '#3D7BF4', '#EC5FA8', '#FF8A3D', '#7C5CFF'];
      const left = holes.map(([x, y], i) => { const X = ox + x * k, Y = oy - y * k; return `<g ${tA(0.4 + i * 0.25, 'ta-pop')}><circle cx="${X}" cy="${Y}" r="${4.5 * k}" fill="#1E3F8F"/>${hx(X, Y, 4 * k * 0.9, COL[i])}</g>`; }).join('');
      const cup = [[0, 0], ...Array.from({ length: 6 }, (_, i) => [8 * Math.cos(Math.PI / 3 * i), 8 * Math.sin(Math.PI / 3 * i)])];
      const right = cup.map(([x, y], i) => `<g ${tA(2.4 + i * 0.2, 'ta-pop')}>${hx(240 + x * k, oy - y * k, 4 * k * 0.9, COL[(i + 3) % 7])}</g>`).join('');
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-in')}>${card(8, 10, 150, 186)}<rect x="${ox - 20 * k}" y="${oy - 14 * k}" width="${40 * k}" height="${28 * k}" rx="6" fill="#3D7BF4"/></g>${left}
        <g ${tA(2.0, 'ta-in')}><path d="M${ox - 12 * k} ${oy + 14 * k + 10}H${ox}" stroke="#14204A" stroke-width="1.6"/><path d="M${ox - 12 * k} ${oy + 14 * k + 5}v10M${ox} ${oy + 14 * k + 5}v10" stroke="#14204A" stroke-width="1.6"/><text x="${ox - 6 * k}" y="${oy + 14 * k + 30}" text-anchor="middle" class="tat s">12</text>
          <text x="${ox + 8}" y="${oy + 14 * k + 30}" class="tat s" style="fill:#5A678C">${L('paret 3', 'pared 3')}</text></g>
        <g ${tA(1.9, 'ta-in')}>${card(164, 10, 148, 186)}<circle cx="240" cy="${oy}" r="${13.5 * k}" fill="#2FB36D"/><circle cx="240" cy="${oy}" r="${12 * k}" fill="#1D6B3A"/></g>${right}
        <g ${tA(4.0, 'ta-in')}><text x="238" y="186" text-anchor="middle" class="tat s">${L("6 al voltant d'1", '6 alrededor de 1')}</text></g>
        <g ${tA(0.3, 'ta-in')}><text x="83" y="34" text-anchor="middle" class="tat s">${L('6 forats', '6 agujeros')}</text></g><g ${tA(2.0, 'ta-in')}><text x="238" y="34" text-anchor="middle" class="tat s">${L('un got', 'un vaso')}</text></g>`);
    }
  };
})());

/* ── unitat 7 ── */
/* Tech 3D · Nivell 1 · unitat 7 «Dissenyar per a persones» · animacions de teoria (TANI). Dibuixos propis de Numi. */
Object.assign(TANI, (() => {
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, l) => l.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  const box = (f, x0, y0, z0, w, d, h, c) => { const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], Lf = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<polygon points="${pts(f, Lf)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, T)}" fill="${c[0]}"/>`; };
  // el·lipse d'un forat rodó a la cara de dalt (isomètric)
  const hole = (f, x, y, z, r) => { const [cx, cy] = f(x, y, z), k = Math.hypot(...[0, 1].map(i => f(r, 0, 0)[i] - f(0, 0, 0)[i])); return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(k * 1.22).toFixed(1)}" ry="${(k * 0.7).toFixed(1)}" fill="#3A2350" opacity=".85"/>`; };
  const ROSA = ['#FFB3D6', '#EC5FA8', '#C63F86'], LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], VERD = ['#A6E8C2', '#2FB36D', '#1E8A50'], BLAU = ['#A9C8FF', '#3D7BF4', '#2558C9'], GROC = ['#FFE69A', '#F7C531', '#D9A514'];
  const card = (x, y, w, h, fill = '#fff', st = '#DCE4FA') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${st}" stroke-width="2" filter="url(#bwSh)"/>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;
  const star = (x, y, r, col = '#F7C531') => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * .45 : r; d += (i ? 'L' : 'M') + (x + q * Math.cos(a)).toFixed(1) + ' ' + (y + q * Math.sin(a)).toFixed(1); } return `<path d="${d}Z" fill="${col}" stroke="#C99A0E" stroke-width="1.2" stroke-linejoin="round"/>`; };
  // una persona senzilla (cap, cos i braços); o.hair, o.glasses, o.cane
  const person = (x, y, s, body, o = {}) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="44" rx="20" ry="5" fill="#14204A" opacity=".12"/>
    <path d="M-17 42V18Q-17 4 0 4Q17 4 17 18V42Z" fill="${body}"/><circle cx="0" cy="-10" r="13" fill="#F6C9A4"/>
    ${o.hair ? `<path d="M-13 -12Q-13 -26 0 -26Q13 -26 13 -12Q9 -20 0 -19Q-9 -20 -13 -12Z" fill="${o.hair}"/>` : ''}${o.bun ? `<circle cx="0" cy="-27" r="6" fill="${o.hair}"/>` : ''}
    <circle cx="-4.5" cy="-10" r="1.8" fill="#2A2F3A"/><circle cx="4.5" cy="-10" r="1.8" fill="#2A2F3A"/><path d="M-4 -4Q0 -1 4 -4" stroke="#2A2F3A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${o.glasses ? `<circle cx="-4.5" cy="-10" r="4.2" fill="none" stroke="#5A6070" stroke-width="1.3"/><circle cx="4.5" cy="-10" r="4.2" fill="none" stroke="#5A6070" stroke-width="1.3"/><path d="M-.3 -10h.6" stroke="#5A6070" stroke-width="1.3"/>` : ''}</g>`;
  const marker = (x, y, w, h, cap) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${h}" rx="3" fill="#F3F3EE" stroke="#C9CDD8" stroke-width="1.2"/><rect x="${x - w / 2 - 1}" y="${y - 18}" width="${w + 2}" height="22" rx="4" fill="${cap}"/>`;

  return {
    // disseny centrat en les persones: escoltar → imaginar → construir → provar, al voltant de la persona
    m7pers() {
      const cx = 160, cy = 104, R = 66, path = `M${cx} ${cy - R}A${R} ${R} 0 1 1 ${cx - .1} ${cy - R}`;
      const node = (x, y, w, n, t, col, d) => `<g ${tA(d)}>${pill(x, y, w, `${n} · ${t}`, col)}</g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F6F1FF"/>
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#CFC3FF" stroke-width="5" stroke-dasharray="9 8" class="ta-dash"/>
        <circle cx="${cx}" cy="${cy}" r="34" fill="#fff" stroke="#E4DCFF" stroke-width="2"/>${person(cx, cy - 10, .78, '#EC5FA8', { hair: '#C9CDD8', bun: 1, glasses: 1 })}
        <circle r="6" fill="#7C5CFF"><animateMotion dur="5.5s" repeatCount="indefinite" path="${path}"/></circle>
        ${node(cx, cy - R, 112, 1, L('Escoltar', 'Escuchar'), '#7C5CFF', .3)}${node(cx + R + 22, cy, 106, 2, L('Imaginar', 'Imaginar'), '#EC5FA8', 1.1)}
        ${node(cx, cy + R, 118, 3, L('Construir', 'Construir'), '#2FB36D', 1.9)}${node(cx - R - 22, cy, 96, 4, L('Provar', 'Probar'), '#3D7BF4', 2.7)}`);
    },
    // l'entrevista: preguntes obertes, escoltar i apuntar
    m7ask() {
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#EEF6FF"/>
        ${person(62, 128, 1, '#3D7BF4', { hair: '#5A3A22' })}${person(258, 128, 1, '#EC5FA8', { hair: '#C9CDD8', bun: 1, glasses: 1 })}
        <g ${tA(.3, 'ta-in')}>${card(14, 14, 168, 40)}<path d="M54 54l-6 12l18 -12z" fill="#fff"/><text x="98" y="39" text-anchor="middle" class="tat s">${L('Com ho fas ara?', '¿Cómo lo haces ahora?')}</text></g>
        <g ${tA(1.3, 'ta-in')}>${card(150, 62, 156, 40)}<path d="M262 102l6 12l-18 -12z" fill="#fff"/><path d="M164 78h70M164 88h110M240 78h40" stroke="#C3CDE6" stroke-width="5" stroke-linecap="round"/></g>
        <g ${tA(2.2, 'ta-pop')}><g transform="translate(92 112) rotate(-8)"><rect x="0" y="0" width="38" height="46" rx="4" fill="#FFFDF4" stroke="#E2D8B8" stroke-width="1.5"/>
          <path d="M7 12h24M7 21h20M7 30h24" stroke="#7C5CFF" stroke-width="2" stroke-linecap="round" pathLength="1" ${tA(2.5, 'ta-draw')}/></g></g>
        <g ${tA(3.2, 'ta-pop')}>${pill(160, 182, 260, L('✓ Pregunta oberta: fa parlar', '✓ Pregunta abierta: hace hablar'), '#1FA463')}</g>`);
    },
    // necessitats (ha de…) i desitjos (m'agradaria…)
    m7need() {
      const chip = (x, y, w, t, col, d) => `<g ${tA(d, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="#fff" stroke="${col}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s" style="font-size:12.5px">${t}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <rect x="12" y="12" width="144" height="176" rx="16" fill="#E3F7EC" stroke="#2FB36D" stroke-width="2"/><rect x="164" y="12" width="144" height="176" rx="16" fill="#FFF6D8" stroke="#F7C531" stroke-width="2"/>
        <text x="84" y="38" text-anchor="middle" class="tat s" fill="#1E8A50">${L('Necessitats', 'Necesidades')}</text><text x="84" y="56" text-anchor="middle" class="tat s" style="font-size:12px" fill="#1E8A50">${L('ha de…', 'tiene que…')}</text>
        <text x="236" y="38" text-anchor="middle" class="tat s" fill="#A07A06">${L('Desitjos', 'Deseos')}</text><text x="236" y="56" text-anchor="middle" class="tat s" style="font-size:12px" fill="#A07A06">${L("m'agradaria…", 'me gustaría…')}</text>
        ${chip(22, 70, 124, L('mànec gruixut', 'mango grueso'), '#2FB36D', .4)}${chip(22, 104, 124, L('que no rellisqui', 'que no resbale'), '#2FB36D', 1)}${chip(22, 138, 124, L('lleuger', 'ligero'), '#2FB36D', 1.6)}
        ${chip(174, 70, 124, L('de color lila', 'de color lila'), '#F7C531', 2.2)}${chip(174, 104, 124, L('amb el seu nom', 'con su nombre'), '#F7C531', 2.8)}
        <g ${tA(3.4, 'ta-pop')}><circle cx="150" cy="22" r="17" fill="#1FA463"/><text x="150" y="28" text-anchor="middle" class="tat w s">1r</text></g>
        <g ${tA(3.8, 'ta-pop')}><circle cx="302" cy="22" r="17" fill="#F5A623"/><text x="302" y="28" text-anchor="middle" class="tat w s">2n</text></g>`);
    },
    // l'esbós: de davant i de dalt, amb cotes, i el model que en surt
    m7sketch() {
      const pen = (d, t, extra = '') => `<path d="${d}" fill="none" stroke="#4A4A5A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')} ${extra}/>`;
      const cota = (x1, y1, x2, y2, tx, ty, txt, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="#E5484D" stroke-width="1.4"/><circle cx="${x1}" cy="${y1}" r="2" fill="#E5484D"/><circle cx="${x2}" cy="${y2}" r="2" fill="#E5484D"/><text x="${tx}" y="${ty}" text-anchor="middle" class="tat s" style="font-size:12px" fill="#E5484D">${txt}</text></g>`;
      const f = iso(242, 112, .95);
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <g transform="rotate(-2 90 100)"><rect x="12" y="10" width="162" height="182" rx="4" fill="#FFFDF4" stroke="#E2D8B8" stroke-width="1.5" filter="url(#bwSh)"/>
          <text x="24" y="30" class="tat s" style="font-size:11px" fill="#8A7F60">${L('DAVANT', 'DELANTE')}</text><text x="24" y="114" class="tat s" style="font-size:11px" fill="#8A7F60">${L('DALT', 'ARRIBA')}</text>
          ${pen('M40 40h98v52h-98z', .3)}${pen('M60 40v40M90 40v40M120 40v40', .7, 'stroke-dasharray="1"')}
          ${pen('M40 124h98v42h-98z', 1.1)}${pen('M69 145a10 10 0 1 0 0.1 0M99 145a10 10 0 1 0 0.1 0M129 145a10 10 0 1 0 0.1 0', 1.5)}
          ${cota(40, 100, 138, 100, 89, 112, '70', 2)}${cota(148, 40, 148, 92, 162, 70, '40', 2.3)}${cota(148, 124, 148, 166, 162, 148, '30', 2.6)}${cota(60, 178, 78, 178, 69, 190, 'Ø16', 2.9)}</g>
        <g ${tA(3.2, 'ta-in')}><path d="M178 104h14" stroke="#7F95E8" stroke-width="4" stroke-linecap="round"/><path d="M188 96l8 8l-8 8" fill="none" stroke="#7F95E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          ${box(f, -35, -15, 0, 70, 30, 40, ROSA)}${[-22, 0, 22].map(x => hole(f, x, 0, 40, 8)).join('')}
          <text x="250" y="186" text-anchor="middle" class="tat s">${L('el model', 'el modelo')}</text></g>`);
    },
    // mesurar amb el regle: l'objecte toca el 0 i es mira de cara
    m7ruler() {
      const X0 = 40, K = 5.6;  // 1 mm = 5,6 px
      let ticks = ''; for (let m = 0; m <= 40; m++) { const x = X0 + m * K, h = m % 10 === 0 ? 18 : m % 5 === 0 ? 12 : 8; ticks += `<path d="M${x} 132v${h}" stroke="#14204A" stroke-width="${m % 10 ? 1 : 1.6}"/>`; if (m % 10 === 0) ticks += `<text x="${x}" y="166" text-anchor="middle" class="tat s" style="font-size:12px">${m / 10}</text>`; }
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <rect x="24" y="126" width="276" height="48" rx="6" fill="#FFE69A" stroke="#D9A514" stroke-width="2"/>${ticks}<text x="292" y="166" text-anchor="end" class="tat s" style="font-size:11px">cm</text>
        <g ${tA(.3, 'ta-in')}><rect x="${X0}" y="62" width="${14 * K}" height="64" rx="8" fill="#E8453C"/><rect x="${X0 + 6}" y="70" width="${14 * K - 12}" height="10" rx="5" fill="#fff" opacity=".35"/></g>
        <g ${tA(1.2, 'ta-fade')}><path d="M${X0} 40V132M${X0 + 14 * K} 40V132" stroke="#2F5BEA" stroke-width="2" stroke-dasharray="5 4"/><path d="M${X0 + 3} 48H${X0 + 14 * K - 3}" stroke="#2F5BEA" stroke-width="2.4"/><path d="M${X0 + 8} 43l-6 5l6 5M${X0 + 14 * K - 8} 43l6 5l-6 5" fill="none" stroke="#2F5BEA" stroke-width="2.4" stroke-linecap="round"/></g>
        <g ${tA(1.8, 'ta-pop')}>${pill(X0 + 7 * K, 26, 84, '14 mm', '#2F5BEA')}</g>
        <g ${tA(2.6, 'ta-in')}>${card(196, 22, 110, 82)}<text x="251" y="46" text-anchor="middle" class="tat s" style="font-size:12.5px">${L('comença al 0', 'empieza en el 0')}</text>
          <text x="251" y="68" text-anchor="middle" class="tat s" style="font-size:12.5px">${L('ratlleta = 1 mm', 'rayita = 1 mm')}</text><text x="251" y="90" text-anchor="middle" class="tat s" style="font-size:12.5px">${L('número = 10 mm', 'número = 10 mm')}</text></g>`);
    },
    // el marge: un forat igual que l'objecte no deixa entrar; amb 2 mm més, sí
    m7marge() {
      const blockSide = (x, w, gap) => `<rect x="${x - 54}" y="118" width="108" height="56" rx="6" fill="#EC5FA8"/><rect x="${x - w / 2}" y="118" width="${w}" height="44" fill="#3A2350" opacity=".8"/><rect x="${x - 54}" y="118" width="108" height="6" fill="#FFB3D6"/>${gap}`;
      const slide = (dy) => `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 ${dy};0 ${dy};0 0" keyTimes="0;.25;.5;.85;1" dur="4s" repeatCount="indefinite"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <g>${blockSide(82, 28, '')}<g>${slide(6)}${marker(82, 52, 28, 64, '#3D7BF4')}</g>
          <g ${tA(1.6, 'ta-pop')}>${ko(126, 70, 13)}</g><text x="82" y="194" text-anchor="middle" class="tat s">${L('forat 14 mm', 'agujero 14 mm')}</text></g>
        <g>${blockSide(238, 34, '')}<g>${slide(42)}${marker(238, 52, 28, 64, '#2FB36D')}</g>
          <g ${tA(2.4, 'ta-pop')}>${ok(282, 70, 13)}</g><text x="238" y="194" text-anchor="middle" class="tat s">${L('forat 16 mm', 'agujero 16 mm')}</text></g>
        <g ${tA(.3, 'ta-in')}>${pill(160, 20, 196, L('retolador de 14 mm', 'rotulador de 14 mm'), '#14204A')}</g>`);
    },
    // iterar: versió 1 → prova → versió 2 → prova → versió 3
    m7iter() {
      const v = (x, n, w, holes, col, d) => { const f = iso(x, 104, .78); return `<g ${tA(d, 'ta-pop')}>${box(f, -w / 2, -12, 0, w, 24, n === 1 ? 46 : n === 2 ? 34 : 30, col)}${holes.map(hx => hole(f, hx, 0, n === 1 ? 46 : n === 2 ? 34 : 30, n === 1 ? 4 : 7)).join('')}
        ${n > 1 ? box(f, -w / 2 - 6, -18, 0, w + 12, 36, 4, GROC) : ''}<text x="${x}" y="150" text-anchor="middle" class="tat s">v${n}</text>
        <g transform="translate(${x - 24} 160)">${[0, 1, 2].map(i => star(10 + i * 14, 8, 7, i < n ? '#F7C531' : '#E3E6F0')).join('')}</g></g>`; };
      const arr = (x, d) => `<g ${tA(d, 'ta-fade')}><path d="M${x - 16} 72Q${x} 54 ${x + 16} 72" fill="none" stroke="#7F95E8" stroke-width="3" stroke-linecap="round"/><path d="M${x + 10} 64l7 9l-10 2" fill="none" stroke="#7F95E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="${x}" y="48" text-anchor="middle" class="tat s" style="font-size:11.5px" fill="#4C63C9">${L('prova', 'prueba')}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${v(56, 1, 36, [-8, 8], ROSA, .2)}${arr(110, .9)}${v(160, 2, 44, [-12, 0, 12], ROSA, 1.4)}${arr(214, 2.1)}${v(266, 3, 50, [-14, 2, 16], VERD, 2.6)}
        <g ${tA(3.3, 'ta-in')}><path d="M266 186Q160 204 56 186" fill="none" stroke="#7C5CFF" stroke-width="2.6" stroke-dasharray="6 5" class="ta-dash"/><text x="160" y="196" text-anchor="middle" class="tat s" style="font-size:12px" fill="#5B3FD6">${L('iterar', 'iterar')}</text></g>`);
    },
    // la retroacció: dues estrelles i un desig
    m7feed() {
      const note = (x, y, r, col, icon, t1, t2, d) => `<g ${tA(d, 'ta-pop')}><g transform="translate(${x} ${y}) rotate(${r})"><rect x="0" y="0" width="196" height="46" rx="6" fill="${col}" filter="url(#bwSh)"/>${icon}
        <text x="44" y="20" class="tat s" style="font-size:12.5px">${t1}</text><text x="44" y="37" class="tat s" style="font-size:12.5px">${t2}</text></g></g>`;
      const bub = `<g transform="translate(22 23)"><path d="M-12 -10h24q4 0 4 4v11q0 4 -4 4h-12l-7 6v-6h-5q-4 0 -4 -4v-11q0 -4 4 -4z" fill="#3D7BF4"/><circle cx="-6" cy="-1" r="2" fill="#fff"/><circle cx="0" cy="-1" r="2" fill="#fff"/><circle cx="6" cy="-1" r="2" fill="#fff"/></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${person(272, 120, .95, '#2FB36D', { hair: '#2A2F3A' })}
        ${note(14, 14, -2, '#FFF6C7', `<g transform="translate(22 23)">${star(0, 0, 12)}</g>`, L('La base és molt', 'La base es muy'), L('estable.', 'estable.'), .3)}
        ${note(22, 72, 1.5, '#FFF6C7', `<g transform="translate(22 23)">${star(0, 0, 12)}</g>`, L('El color es veu', 'El color se ve'), L('de lluny.', 'de lejos.'), 1.2)}
        ${note(14, 130, -1, '#DDEBFF', bub, L('Desig: fes els forats', 'Deseo: haz los agujeros'), L('2 mm més grans.', '2 mm más grandes.'), 2.1)}
        <g ${tA(3, 'ta-pop')}>${card(226, 18, 84, 34)}<text x="268" y="40" text-anchor="middle" class="tat s" style="font-size:12px">${L('⭐ ⭐ + 💬', '⭐ ⭐ + 💬')}</text></g>`);
    },
    // estable: la base estreta es tomba; la base ampla aguanta
    m7stable() {
      const tower = (x, base, col, anim) => `<g transform="translate(${x} 172)"><g>${anim}<rect x="-${base / 2}" y="-8" width="${base}" height="8" rx="2" fill="#F7C531"/><rect x="-11" y="-104" width="22" height="96" rx="4" fill="${col}"/><rect x="-6" y="-112" width="12" height="14" rx="3" fill="#F3F3EE"/></g></g>`;
      const fall = `<animateTransform attributeName="transform" type="rotate" values="0 12 0;0 12 0;-6 12 0;4 12 0;0 12 0;0 12 0;86 12 0;86 12 0" keyTimes="0;.12;.22;.32;.4;.5;.62;1" dur="5s" repeatCount="indefinite"/>`;
      const wob = `<animateTransform attributeName="transform" type="rotate" values="0 0 0;0 0 0;-4 30 0;3 -30 0;0 0 0;0 0 0" keyTimes="0;.12;.22;.32;.4;1" dur="5s" repeatCount="indefinite"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="10" y="172" width="300" height="10" rx="5" fill="#C9CDD8"/>
        ${tower(86, 24, '#5BC0EB', fall)}${tower(232, 64, '#5BC0EB', wob)}
        <g ${tA(.4, 'ta-in')}>${pill(86, 22, 128, L('base estreta', 'base estrecha'), '#EF5A5A')}</g><g ${tA(1.2, 'ta-in')}>${pill(232, 22, 118, L('base ampla', 'base ancha'), '#1FA463')}</g>
        <g ${tA(2.6, 'ta-pop')}>${ko(140, 120, 13)}</g><g ${tA(3, 'ta-pop')}>${ok(290, 120, 13)}</g>`);
    },
    // les especificacions: una fitxa amb caselles que es marquen
    m7spec() {
      const row = (y, a, b, d) => `<g ${tA(d, 'ta-in')}><rect x="34" y="${y - 11}" width="20" height="20" rx="5" fill="#fff" stroke="#9AA3B5" stroke-width="2"/><text x="62" y="${y + 4}" class="tat s" style="font-size:11.2px"><tspan font-weight="900">${a}</tspan> ${b}</text></g><g ${tA(d + .5, 'ta-pop')}><path d="M38 ${y}l5 5l9 -11" stroke="#1FA463" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const f = iso(282, 128, .5);
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <rect x="14" y="16" width="220" height="176" rx="12" fill="#C98A4B"/><rect x="22" y="30" width="204" height="154" rx="6" fill="#FFFDF4"/><rect x="92" y="10" width="64" height="20" rx="6" fill="#9AA3B5"/>
        <text x="124" y="52" text-anchor="middle" class="tat s">${L('Especificacions', 'Especificaciones')}</text>
        ${row(78, L('Per a qui:', 'Para quién:'), L("l'escola", 'la escuela'), .3)}${row(106, L('Què fa:', 'Qué hace:'), L('penja motxilles', 'cuelga mochilas'), 1)}
        ${row(134, L('Mides:', 'Medidas:'), L('≤ 100 mm', '≤ 100 mm'), 1.7)}${row(162, L('Imprimir:', 'Imprimir:'), L('estirat', 'tumbado'), 2.4)}
        <g ${tA(3.2, 'ta-pop')}>${box(f, -30, -45, 0, 12, 90, 12, LILA)}${box(f, -24, -45, 0, 44, 12, 12, LILA)}${box(f, 8, -34, 0, 12, 30, 12, LILA)}<text x="278" y="186" text-anchor="middle" class="tat s" style="font-size:12px">${L('el penjador', 'el colgador')}</text></g>`);
    },
    // el camí del disseny: cinc parades i en Bit que les recorre
    m7road() {
      const S = [[44, 150, '#7C5CFF', L('Escoltar', 'Escuchar')], [102, 64, '#EC5FA8', L('Esbossar', 'Esbozar')], [160, 150, '#3D7BF4', L('Modelar', 'Modelar')], [218, 64, '#2FB36D', L('Provar', 'Probar')], [276, 150, '#F5A623', L('Millorar', 'Mejorar')]];
      const road = 'M44 150C70 150 76 64 102 64S134 150 160 150S192 64 218 64S250 150 276 150';
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#EAF7EF"/>
        <path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="14" stroke-linecap="round"/><path d="${road}" fill="none" stroke="#E2BE76" stroke-width="2.5" stroke-dasharray="8 7" class="ta-dash"/>
        ${S.map(([x, y, c, t], i) => `<g ${tA(.2 + i * .55, 'ta-pop')}><circle cx="${x}" cy="${y}" r="15" fill="${c}" stroke="#fff" stroke-width="3"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">${i + 1}</text>
          <text x="${x}" y="${y + (y > 100 ? 36 : -24)}" text-anchor="middle" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <g><animateMotion dur="6s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear"/>${tBitMini(0, -6, 2, .34)}</g>`);
    }
  };
})());
