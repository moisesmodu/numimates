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
