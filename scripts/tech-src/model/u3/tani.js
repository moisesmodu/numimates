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
