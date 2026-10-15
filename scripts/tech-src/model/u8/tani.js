/* Tech 3D · Nivell 1 · unitat 8 «El meu disseny» · animacions de teoria (TANI). Dibuixos propis de Numi (SVG + CSS .ta + SMIL).
   Claus: m8road, m8brief, m8esbos (m8-1) · m8ordre, m8eines, m8versio (m8-2) · m8proves, m8toca, m8rubrica (m8-3) ·
   m8viatge, m8pitch, m8stl (m8-4). L'objecte que hi surt és el test de l'hort de la Jana (60 mm de diàmetre, 56 mm d'alt). */
Object.assign(TANI, (() => {
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, l) => l.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  const box = (f, x0, y0, z0, w, d, h, c) => { const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], Lf = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<polygon points="${pts(f, Lf)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, T)}" fill="${c[0]}"/>`; };
  const OR = ['#FFC08F', '#FF8A3D', '#D96A20'], GROC = ['#FFE69A', '#F7C531', '#D9A514'], LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], BLAU = ['#A9C8FF', '#3D7BF4', '#2558C9'], VERD = ['#A6E8C2', '#2FB36D', '#1E8A50'];
  const bg = (h, c = '#F1F2FB') => `<rect width="320" height="${h}" rx="20" fill="${c}"/>`;
  const card = (x, y, w, h, fill = '#fff', st = '#DCE4FA') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${st}" stroke-width="2" filter="url(#bwSh)"/>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s', fs = 12.5) => `<rect x="${x - w / 2}" y="${y - 12}" width="${w}" height="24" rx="12" fill="${col}"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="${cls}" style="font-size:${fs}px">${txt}</text>`;
  const ok = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;
  const star = (x, y, r, col = '#F7C531') => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * .45 : r; d += (i ? 'L' : 'M') + (x + q * Math.cos(a)).toFixed(1) + ' ' + (y + q * Math.sin(a)).toFixed(1); } return `<path d="${d}Z" fill="${col}" stroke="#C99A0E" stroke-width="1.2" stroke-linejoin="round"/>`; };
  const t12 = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" class="tat s" style="font-size:${o.fs || 12}px"${o.fill ? ` fill="${o.fill}"` : ''}${o.fw ? ` font-weight="${o.fw}"` : ''}>${txt}</text>`;
  // el test de la Jana vist de davant i una mica de dalt (cx, cy: el centre de la base); fase 1: cilindre; 2: buit; 3: nanses i etiqueta
  const pot = (cx, cy, k, stage = 3) => { const R = 30 * k, Hh = 56 * k, ry = 9 * k, top = cy - Hh, f = v => v.toFixed(1);
    const nansa = s => { const x0 = cx + s * R, x1 = cx + s * (R + 10 * k), yT = cy - 50 * k, yB = cy - 38 * k; return `<path d="M${f(x0 - s * 2 * k)} ${f(yT)}H${f(x1)}V${f(yT + 3 * k)}L${f(x0 - s * 2 * k)} ${f(yB)}Z" fill="${OR[2]}"/><path d="M${f(x0 - s * 2 * k)} ${f(yT)}H${f(x1)}" stroke="${OR[0]}" stroke-width="${f(1.6 * k)}"/>`; };
    const body = `<path d="M${f(cx - R)} ${f(top)}V${f(cy)}A${f(R)} ${f(ry)} 0 0 0 ${f(cx + R)} ${f(cy)}V${f(top)}Z" fill="${OR[1]}"/><path d="M${f(cx + R * .45)} ${f(top + 4 * k)}V${f(cy + ry * .6)}" stroke="${OR[2]}" stroke-width="${f(10 * k)}" opacity=".35"/><path d="M${f(cx - R * .62)} ${f(top + 6 * k)}V${f(cy - 4 * k)}" stroke="#fff" stroke-width="${f(4 * k)}" opacity=".25" stroke-linecap="round"/>`;
    const lid = `<ellipse cx="${f(cx)}" cy="${f(top)}" rx="${f(R)}" ry="${f(ry)}" fill="${OR[0]}"/>${stage >= 2 ? `<ellipse cx="${f(cx)}" cy="${f(top + .6 * k)}" rx="${f(27 * k)}" ry="${f(7.8 * k)}" fill="#7A3A12"/>` : ''}`;
    const label = stage >= 3 ? `<rect x="${f(cx - 12 * k)}" y="${f(cy - 34 * k)}" width="${f(24 * k)}" height="${f(16 * k)}" rx="${f(2 * k)}" fill="${GROC[1]}" stroke="${GROC[2]}" stroke-width="${f(k)}"/><path d="M${f(cx)} ${f(cy - 20.5 * k)}c${f(-7 * k)} ${f(-4 * k)} ${f(-6 * k)} ${f(-10 * k)} ${f(-2.5 * k)} ${f(-10 * k)}c${f(1.5 * k)} 0 ${f(2.5 * k)} ${f(1 * k)} ${f(2.5 * k)} ${f(2 * k)}c0 ${f(-1 * k)} ${f(1 * k)} ${f(-2 * k)} ${f(2.5 * k)} ${f(-2 * k)}c${f(3.5 * k)} 0 ${f(4.5 * k)} ${f(6 * k)} ${f(-2.5 * k)} ${f(10 * k)}z" fill="#E8453C"/>` : '';
    return `<ellipse cx="${f(cx)}" cy="${f(cy + 2 * k)}" rx="${f(R * 1.15)}" ry="${f(ry * 1.1)}" fill="#14204A" opacity=".1"/>${stage >= 3 ? nansa(-1) + nansa(1) : ''}${body}${lid}${label}`; };
  // una persona senzilla (cap, cos)
  const person = (x, y, s, body, hair) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="44" rx="20" ry="5" fill="#14204A" opacity=".12"/><path d="M-17 42V18Q-17 4 0 4Q17 4 17 18V42Z" fill="${body}"/><circle cx="0" cy="-10" r="13" fill="#F6C9A4"/>
    ${hair ? `<path d="M-13 -12Q-13 -26 0 -26Q13 -26 13 -12Q9 -20 0 -19Q-9 -20 -13 -12Z" fill="${hair}"/>` : ''}<circle cx="-4.5" cy="-10" r="1.8" fill="#2A2F3A"/><circle cx="4.5" cy="-10" r="1.8" fill="#2A2F3A"/><path d="M-4 -4Q0 -1 4 -4" stroke="#2A2F3A" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>`;
  // el capçal de la Nuvi amb ulls (la punta del broquet és a 0, 0)
  const head = (k = 1) => `<g transform="scale(${k})"><rect x="-22" y="-52" width="44" height="34" rx="10" fill="#2A3557"/><ellipse cx="-9" cy="-36" rx="6" ry="6.5" fill="#fff"/><ellipse cx="9" cy="-36" rx="6" ry="6.5" fill="#fff"/><circle cx="-8.5" cy="-33.5" r="2.8" fill="#14204A"/><circle cx="9.5" cy="-33.5" r="2.8" fill="#14204A"/><rect x="-10" y="-18" width="20" height="9" rx="2" fill="#E8453C"/><path d="M-6 -9h12l-4 9h-4z" fill="#D9A514"/></g>`;
  const bunting = (x0, x1, y, n) => { let s = `<path d="M${x0} ${y}Q${(x0 + x1) / 2} ${y + 10} ${x1} ${y}" fill="none" stroke="#9AA3B5" stroke-width="1.5"/>`; const C = ['#E8453C', '#F7C531', '#2FB36D', '#3D7BF4', '#EC5FA8', '#7C5CFF'];
    for (let i = 0; i < n; i++) { const t = (i + .5) / n, x = x0 + (x1 - x0) * t, yy = y + 10 * 4 * t * (1 - t) * .5; s += `<path d="M${(x - 6).toFixed(1)} ${yy.toFixed(1)}h12l-6 11z" fill="${C[i % C.length]}"/>`; } return s; };

  return {
    /* ---------- m8-1 · la idea ---------- */
    // el projecte en quatre parades (una per sessió) i en Bit que hi va fins a la fira
    m8road() {
      const road = 'M40 150C78 150 84 92 122 92S166 150 204 150S248 92 284 92';
      const S = [[40, 150, '#F5A623', L('1 La idea', '1 La idea'), 'bulb'], [122, 92, '#7C5CFF', L('2 Modelar', '2 Modelar'), 'cube'], [204, 150, '#3D7BF4', L('3 Revisar', '3 Revisar'), 'lupa'], [284, 92, '#EC5FA8', L('4 Presentar', '4 Presentar'), 'flag']];
      const ico = (k) => k === 'bulb' ? `<circle cx="0" cy="-2" r="7" fill="#FFE69A"/><rect x="-3.5" y="5" width="7" height="4" rx="1.5" fill="#fff"/>`
        : k === 'cube' ? (() => { const f = iso(0, 2, .5); return box(f, -9, -9, 0, 18, 18, 18, ['#fff', '#E3DCFF', '#C9BCFF']); })()
        : k === 'lupa' ? `<circle cx="-2" cy="-2" r="6" fill="none" stroke="#fff" stroke-width="2.6"/><path d="M2.5 2.5l5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`
        : `<path d="M-4 9V-9" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M-3 -9h11l-3 4l3 4h-11z" fill="#fff"/>`;
      return tSvg(200, `${bg(200, '#EEF4FF')}${bunting(150, 312, 14, 8)}
        <path d="${road}" fill="none" stroke="#DCE4FA" stroke-width="16" stroke-linecap="round"/><path d="${road}" fill="none" stroke="#B9C6EE" stroke-width="2.5" stroke-dasharray="8 7" class="ta-dash"/>
        ${S.map(([x, y, c, t, k], i) => `<g ${tA(.2 + i * .6, 'ta-pop')}><circle cx="${x}" cy="${y}" r="17" fill="${c}" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><g transform="translate(${x} ${y})">${ico(k)}</g>
          <text x="${x}" y="${y + (y > 120 ? 36 : -26)}" text-anchor="middle" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <g><animateMotion dur="6.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear"/>${tBitMini(0, -8, 2, .32)}</g>
        <g ${tA(3, 'ta-in')}>${pill(76, 30, 132, L("Fira d'Invents", 'Feria de Inventos'), '#14204A')}</g>`);
    },
    // l'encàrrec: per a qui, quin problema i on (i la idea que en surt)
    m8brief() {
      const row = (y, ic, a, b, d) => `<g ${tA(d, 'ta-in')}><circle cx="40" cy="${y}" r="12" fill="${ic[0]}"/><text x="40" y="${y + 4.5}" text-anchor="middle" class="tat w s" style="font-size:12px">${ic[1]}</text>
        ${t12(60, y - 2, a, { a: 'start', fs: 11.5, fill: '#5A6378' })}${t12(60, y + 13, b, { a: 'start', fs: 12.5, fw: 800 })}</g>`;
      return tSvg(200, `${bg(200)}
        <rect x="14" y="14" width="176" height="176" rx="12" fill="#C98A4B"/><rect x="22" y="28" width="160" height="154" rx="6" fill="#FFFDF4"/><rect x="72" y="8" width="60" height="18" rx="6" fill="#9AA3B5"/>
        ${t12(102, 50, L('Encàrrec', 'Encargo'), { fs: 14, fw: 900 })}
        ${row(78, ['#7C5CFF', '?'], L('Per a qui?', '¿Para quién?'), L('Infants de P4', 'Niños de P4'), .4)}
        ${row(116, ['#EC5FA8', '!'], L('Quin problema?', '¿Qué problema?'), L('Plantes sense test', 'Plantas sin maceta'), 1.1)}
        ${row(154, ['#2FB36D', '⌖'], L('On?', '¿Dónde?'), L('A la finestra', 'En la ventana'), 1.8)}
        <g ${tA(2.4, 'ta-fade')}><rect x="206" y="26" width="98" height="84" rx="6" fill="#DDEBFF" stroke="#fff" stroke-width="4"/><path d="M255 26v84M206 68h98" stroke="#fff" stroke-width="3"/></g>
        <rect x="200" y="132" width="110" height="8" rx="3" fill="#C9CDD8"/>
        <g ${tA(2.9, 'ta-pop')}>${pot(255, 116, .55, 2)}<path d="M250 98q-12 -18 -2 -30q8 12 2 30zM258 98q10 -16 22 -16q-8 14 -22 16z" fill="#2FB36D"/></g>
        <g ${tA(3.5, 'ta-in')}>${pill(255, 166, 104, L('la idea', 'la idea'), '#F5A623')}</g>`);
    },
    // l'esbós: de davant i de dalt, amb cotes, i cada cota es converteix en un número del taller
    m8esbos() {
      const pen = (d, t, extra = '') => `<path d="${d}" fill="none" stroke="#4A4A5A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')} ${extra}/>`;
      const cota = (x1, y1, x2, y2, tx, ty, txt, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="#E5484D" stroke-width="1.4"/><circle cx="${x1}" cy="${y1}" r="2" fill="#E5484D"/><circle cx="${x2}" cy="${y2}" r="2" fill="#E5484D"/>${t12(tx, ty, txt, { fs: 11.5, fill: '#E5484D', fw: 800 })}</g>`;
      const field = (y, ax, v, col, t) => `<g ${tA(t, 'ta-in')}><rect x="222" y="${y - 15}" width="86" height="30" rx="9" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><rect x="226" y="${y - 11}" width="22" height="22" rx="6" fill="${col}"/>${t12(237, y + 4.5, ax, { fs: 12, fill: '#fff', fw: 900 })}${t12(276, y + 5, v, { fs: 14, fw: 900 })}${t12(298, y + 5, 'mm', { fs: 10, fill: '#8A93A8' })}</g>`;
      return tSvg(200, `${bg(200)}
        <g transform="rotate(-2 104 100)"><rect x="10" y="10" width="190" height="182" rx="4" fill="#FFFDF4" stroke="#E2D8B8" stroke-width="1.5" filter="url(#bwSh)"/>
          ${t12(24, 36, L('DAVANT', 'DELANTE'), { a: 'start', fs: 10.5, fill: '#8A7F60' })}${t12(130, 36, L('DALT', 'ARRIBA'), { a: 'start', fs: 10.5, fill: '#8A7F60' })}
          ${pen('M30 56h60v56h-60z', .3)}${pen('M33 56v53h54v-53', .8, 'stroke-dasharray="3 3"')}
          ${pen('M160 84m-30 0a30 30 0 1 0 60 0a30 30 0 1 0 -60 0', 1.2)}${pen('M160 84m-27 0a27 27 0 1 0 54 0a27 27 0 1 0 -54 0', 1.5, 'stroke-dasharray="3 3"')}
          ${pen('M148 84m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M160 84m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M172 84m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0', 1.8)}
          ${cota(30, 126, 90, 126, 60, 142, '60', 2.1)}${cota(102, 56, 102, 112, 114, 88, '56', 2.4)}${cota(130, 126, 190, 126, 160, 142, 'Ø60', 2.7)}
          <g ${tA(3, 'ta-fade')}><path d="M60 158V113" stroke="#E5484D" stroke-width="1.4" stroke-dasharray="2 2"/><circle cx="60" cy="111" r="2" fill="#E5484D"/>${t12(60, 172, L('fons de 3 mm', 'fondo de 3 mm'), { fs: 11.5, fill: '#E5484D', fw: 800 })}</g>
          ${t12(160, 172, L('3 forats de 6 mm', '3 agujeros de 6 mm'), { fs: 11, fill: '#8A7F60' })}</g>
        <g ${tA(3.2, 'ta-fade')}><path d="M204 100h12" stroke="#7F95E8" stroke-width="4" stroke-linecap="round"/><path d="M211 93l7 7l-7 7" fill="none" stroke="#7F95E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${t12(265, 36, L('Mida', 'Medida'), { fs: 13, fw: 900 })}${field(64, 'X', '60', '#E5484D', 3.4)}${field(104, 'Y', '60', '#22A06B', 3.8)}${field(144, 'Z', '56', '#3D7BF4', 4.2)}`);
    },

    /* ---------- m8-2 · modelar-lo ---------- */
    // l'ordre per modelar: formes grans, forats, detalls i comprovar
    m8ordre() {
      const P = [[42, L('Formes grans', 'Formas grandes'), 1], [122, L('Forats', 'Agujeros'), 2], [202, L('Detalls', 'Detalles'), 3], [282, L('Comprova', 'Comprueba'), 3]];
      return tSvg(200, `${bg(200)}
        ${P.map(([x, t, st], i) => `<g ${tA(.2 + i * .8, 'ta-pop')}>${card(x - 36, 26, 72, 120)}<circle cx="${x}" cy="26" r="12" fill="#7C5CFF"/><text x="${x}" y="30.5" text-anchor="middle" class="tat w s" style="font-size:12px">${i + 1}</text>
          ${pot(x, 112, .44, st)}${i === 1 ? `<g>${[-8, 0, 8].map((dx, j) => `<path d="M${x + dx} 120q-3 4 0 6q3 -2 0 -6z" fill="#3D7BF4"><animateTransform attributeName="transform" type="translate" values="0 0;0 14" dur="1.4s" begin="${j * .3}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.4s" begin="${j * .3}s" repeatCount="indefinite"/></path>`).join('')}</g>` : ''}
          ${i === 3 ? `<g ${tA(3.2, 'ta-pop')}><circle cx="${x + 16}" cy="58" r="10" fill="none" stroke="#3D7BF4" stroke-width="3"/><path d="M${x + 23} 65l7 7" stroke="#3D7BF4" stroke-width="3.5" stroke-linecap="round"/></g><g ${tA(3.6, 'ta-pop')}>${ok(x - 18, 56, 9)}</g>` : ''}
          ${t12(x, 168, t, { fs: 12, fw: 800 })}</g>`).join('')}
        ${[82, 162, 242].map((x, i) => `<g ${tA(.6 + i * .8, 'ta-fade')}><path d="M${x - 4} 86h8" stroke="#B9C6EE" stroke-width="3" stroke-linecap="round"/><path d="M${x + 1} 82l4 4l-4 4" fill="none" stroke="#B9C6EE" stroke-width="3" stroke-linecap="round"/></g>`).join('')}`);
    },
    // la caixa d'eines del curs: cada eina amb la unitat on la vas aprendre
    m8eines() {
      const I = {
        mida: `<path d="M-16 6h32v-12h-32z" fill="#FFE69A" stroke="#D9A514" stroke-width="1.5"/><path d="M-12 -6v5M-6 -6v3M0 -6v5M6 -6v3M12 -6v5" stroke="#14204A" stroke-width="1.4"/>`,
        gir: `<path d="M-11 4A12 12 0 1 1 6 11" fill="none" stroke="#7C5CFF" stroke-width="3.2" stroke-linecap="round"/><path d="M1 13l6 -2l-1 -7" fill="none" stroke="#7C5CFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`,
        alinea: `<path d="M-14 -14v28" stroke="#E5484D" stroke-width="2" stroke-dasharray="3 3"/><rect x="-13" y="-12" width="26" height="6" rx="2" fill="#3D7BF4"/><rect x="-13" y="-3" width="16" height="6" rx="2" fill="#2FB36D"/><rect x="-13" y="6" width="22" height="6" rx="2" fill="#F7C531"/>`,
        dup: `<rect x="-14" y="-10" width="16" height="16" rx="3" fill="#B9A7FF"/><rect x="-4" y="-4" width="16" height="16" rx="3" fill="#7C5CFF" stroke="#fff" stroke-width="1.5"/>`,
        mirall: `<path d="M0 -15v30" stroke="#9AA3B5" stroke-width="2" stroke-dasharray="3 3"/><path d="M-3 -10l-12 4v10l12 4z" fill="#EC5FA8"/><path d="M3 -10l12 4v10l-12 4z" fill="#FFB3D6"/>`,
        forat: `<rect x="-15" y="-11" width="30" height="22" rx="4" fill="#5BC0EB"/><circle cx="0" cy="0" r="7" fill="#F1F2FB" stroke="#5A6378" stroke-width="1.5" stroke-dasharray="3 2"/>`
      };
      const T = [['mida', L('Mida i Posició', 'Medida y Posición'), 'U3'], ['gir', L('Gir', 'Giro'), 'U3'], ['alinea', L('Alinea', 'Alinea'), 'U4'], ['dup', L('Duplica', 'Duplica'), 'U4'], ['mirall', L('Mirall', 'Espejo'), 'U4'], ['forat', L('Forat', 'Agujero'), 'U5']];
      return tSvg(200, `${bg(200)}${T.map(([k, t, u], i) => { const x = 14 + (i % 3) * 100, y = 14 + Math.floor(i / 3) * 90;
        return `<g ${tA(.2 + i * .45, 'ta-pop')}>${card(x, y, 92, 80)}<g transform="translate(${x + 46} ${y + 32})">${I[k]}</g>${t12(x + 46, y + 68, t, { fs: 11.5, fw: 800 })}
          <rect x="${x + 64}" y="${y + 6}" width="24" height="16" rx="8" fill="#14204A"/><text x="${x + 76}" y="${y + 18}" text-anchor="middle" class="tat w s" style="font-size:10px">${u}</text></g>`; }).join('')}`);
    },
    // les versions: la v1 continua a la v2 i a la v3, i totes es guarden a «Projectes»
    m8versio() {
      const V = [[56, 'v1', 1], [160, 'v2', 3], [264, 'v3', 3]];
      return tSvg(200, `${bg(200)}
        ${V.map(([x, v, st], i) => `<g ${tA(.2 + i * 1, 'ta-pop')}>${card(x - 44, 18, 88, 96)}${pot(x, 88, .42, st)}${i === 2 ? `<g transform="translate(${x + 26} 32)">${ok(0, 0, 9)}</g>` : ''}${pill(x, 128, 46, v, '#7C5CFF', 'tat w s', 13)}</g>`).join('')}
        ${[108, 212].map((x, i) => `<g ${tA(.8 + i, 'ta-fade')}><path d="M${x - 6} 66h12" stroke="#B9C6EE" stroke-width="3.5" stroke-linecap="round"/><path d="M${x + 2} 60l6 6l-6 6" fill="none" stroke="#B9C6EE" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>${t12(x, 52, L(`sessió ${i + 2}`, `sesión ${i + 2}`), { fs: 10.5, fill: '#4C63C9' })}</g>`).join('')}
        <g ${tA(3.2, 'ta-in')}><path d="M110 156h30l6 6h64v26h-100z" fill="#F7C531"/><path d="M110 166h100v22h-100z" fill="#FFD95C"/>${t12(160, 182, L('Projectes', 'Proyectos'), { fs: 12.5, fw: 900 })}</g>
        ${V.map(([x], i) => `<g ${tA(3.6 + i * .3, 'ta-fade')}><path d="M${x} 142Q${(x + 160) / 2} 150 160 160" fill="none" stroke="#F7C531" stroke-width="2" stroke-dasharray="4 4"/></g>`).join('')}`);
    },

    /* ---------- m8-3 · revisar-lo ---------- */
    // les quatre proves de la Nuvi, que es marquen una a una
    m8proves() {
      const R = [[L('Toca la placa', 'Toca la placa'), `<path d="M-9 4h18" stroke="#5A678C" stroke-width="3" stroke-linecap="round"/><rect x="-6" y="-8" width="12" height="11" rx="2" fill="#FF8A3D"/>`],
        [L('Una sola peça', 'Una sola pieza'), `<rect x="-9" y="-3" width="10" height="9" rx="2" fill="#FF8A3D"/><rect x="-2" y="-8" width="10" height="9" rx="2" fill="#FFC08F"/>`],
        [L('Parets de 2 mm', 'Paredes de 2 mm'), `<path d="M-8 -8v15h16v-15" fill="none" stroke="#FF8A3D" stroke-width="4"/>`],
        [L('Cap a la placa', 'Cabe en la placa'), `<rect x="-9" y="-8" width="18" height="15" rx="2" fill="none" stroke="#5A678C" stroke-width="1.8" stroke-dasharray="3 2"/><rect x="-5" y="-3" width="10" height="9" rx="2" fill="#FF8A3D"/>`]];
      return tSvg(200, `${bg(200)}${card(12, 14, 196, 172)}
        ${R.map(([t, ic], i) => { const y = 46 + i * 38; return `<g ${tA(.3 + i * .7, 'ta-in')}><rect x="24" y="${y - 15}" width="30" height="30" rx="8" fill="#F1F2FB"/><g transform="translate(39 ${y})">${ic}</g>${t12(64, y + 5, t, { a: 'start', fs: 12.5, fw: 800 })}</g><g ${tA(.7 + i * .7, 'ta-pop')}>${ok(188, y, 10)}</g>`; }).join('')}
        <g transform="translate(266 120)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="2.4s" repeatCount="indefinite"/>${head(1.5)}
          <g><circle cx="-13.5" cy="-54" r="11" fill="none" stroke="#14204A" stroke-width="3"/><circle cx="13.5" cy="-54" r="11" fill="none" stroke="#14204A" stroke-width="3"/><path d="M-2.5 -54h5" stroke="#14204A" stroke-width="3"/></g></g></g>
        <rect x="222" y="150" width="88" height="10" rx="4" fill="#5A678C"/>
        <g ${tA(3.4, 'ta-pop')}>${pill(266, 178, 96, L('Llest!', '¡Listo!'), '#1FA463')}</g>`);
    },
    // tocar no és prou: dues peces que només es toquen se separen; amb 1-2 mm a dins, es fonen
    m8toca() {
      const f1 = iso(88, 140, 1.25), f2 = iso(236, 140, 1.25), D = 5.5;
      const fall = `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;10 6;34 30;34 30" keyTimes="0;.45;.6;.75;1" dur="${D}s" repeatCount="indefinite"/>`;
      return tSvg(200, `${bg(200)}<rect x="10" y="150" width="300" height="10" rx="5" fill="#C9CDD8"/><path d="M160 26V176" stroke="#DCE4FA" stroke-width="2" stroke-dasharray="5 5"/>
        ${box(f1, -14, -14, 0, 28, 28, 22, OR)}<g>${fall}${box(f1, 14, -14, 22, 26, 28, 8, VERD)}</g>
        ${box(f2, -14, -14, 0, 28, 28, 22, OR)}${box(f2, 10, -14, 18, 30, 28, 8, VERD)}<polygon points="${pts(f2, [[10, -14, 22], [14, -14, 22], [14, -14, 18], [10, -14, 18]])}" fill="#E5484D" opacity=".75"/>
        <g ${tA(.3, 'ta-in')}>${pill(88, 26, 140, L('només es toquen', 'solo se tocan'), '#EF5A5A')}</g><g ${tA(1, 'ta-in')}>${pill(236, 26, 140, L('1-2 mm a dins', '1-2 mm dentro'), '#1FA463')}</g>
        <g ${tA(3, 'ta-pop')}>${ko(140, 70, 12)}</g><g ${tA(3.3, 'ta-pop')}>${ok(290, 70, 12)}</g>`);
    },
    // la rúbrica de la revisió per parelles i dues estrelles i un desig
    m8rubrica() {
      const C = [L('Toca la placa', 'Toca la placa'), L('Una sola peça', 'Una sola pieza'), L('Parets 2 mm', 'Paredes 2 mm'), L('Encàrrec', 'Encargo')], M = [0, 0, 1, 0];
      const col = ['#1FA463', '#F5A623', '#EF5A5A'];
      return tSvg(200, `${bg(200)}${card(10, 12, 200, 176)}
        ${['✓', '~', '…'].map((s, j) => `<g ${tA(.2, 'ta-fade')}><circle cx="${128 + j * 28}" cy="34" r="10" fill="${col[j]}"/><text x="${128 + j * 28}" y="38.5" text-anchor="middle" class="tat w s" style="font-size:12px">${s}</text></g>`).join('')}
        ${C.map((t, i) => { const y = 66 + i * 32; return `<g ${tA(.4 + i * .3, 'ta-in')}>${t12(22, y + 4, t, { a: 'start', fs: 12, fw: 800 })}${[0, 1, 2].map(j => `<circle cx="${128 + j * 28}" cy="${y}" r="8" fill="#F1F2FB" stroke="#DCE4FA" stroke-width="1.5"/>`).join('')}</g>
          <g ${tA(1.6 + i * .45, 'ta-pop')}><circle cx="${128 + M[i] * 28}" cy="${y}" r="6" fill="${col[M[i]]}"/></g>`; }).join('')}
        <g ${tA(3.4, 'ta-pop')}>${star(240, 40, 14)}</g><g ${tA(3.7, 'ta-pop')}>${star(278, 40, 14)}</g>
        <g ${tA(4.1, 'ta-in')}><path d="M222 72h84q6 0 6 6v50q0 6 -6 6h-56l-14 12v-12h-14q-6 0 -6 -6v-50q0 -6 6 -6z" fill="#DDEBFF"/>
          ${t12(264, 96, L('Desig: fes la', 'Deseo: haz la'), { fs: 11.5 })}${t12(264, 113, L('paret de 2 mm', 'pared de 2 mm'), { fs: 11.5, fw: 800 })}</g>`);
    },

    /* ---------- m8-4 · presentació i diploma ---------- */
    // el viatge del curs: vuit parades, una per unitat, i en Bit les recorre fins al diploma
    m8viatge() {
      const S = [[36, 64, L("L'espai 3D", 'El espacio 3D')], [112, 64, L('Formes', 'Formas')], [188, 64, 'mm'], [264, 64, L('Construir', 'Construir')],
        [264, 150, L('Forats', 'Agujeros')], [188, 150, L('Imprimir', 'Imprimir')], [112, 150, L('Persones', 'Personas')], [36, 150, L('El meu disseny', 'Mi diseño')]];
      const C = ['#7C5CFF', '#3D7BF4', '#14A3B8', '#2FB36D', '#F5A623', '#FF8A3D', '#EC5FA8', '#E8453C'];
      const road = 'M36 64H264C300 64 300 150 264 150H36';
      return tSvg(200, `${bg(200, '#EAF7EF')}
        <path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="${road}" fill="none" stroke="#E2BE76" stroke-width="2.5" stroke-dasharray="8 7" class="ta-dash"/>
        ${S.map(([x, y, t], i) => `<g ${tA(.15 + i * .35, 'ta-pop')}><circle cx="${x}" cy="${y}" r="${i === 7 ? 18 : 14}" fill="${C[i]}" stroke="#fff" stroke-width="3"/>${i === 7 ? star(x, y, 10, '#FFE69A') : `<text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">${i + 1}</text>`}
          ${t12(x, y + (y < 100 ? -22 : 34), t, { fs: 11.5, fw: 800 })}</g>`).join('')}
        <g><animateMotion dur="7s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.86;1" calcMode="linear"/>${tBitMini(0, -8, 2, .32)}</g>`);
    },
    // la presentació en quatre parts, a l'estand de la fira
    m8pitch() {
      const B = [[L('1 Què és i per a qui', '1 Qué es y para quién'), '#7C5CFF'], [L('2 Vista i mides', '2 Vista y medidas'), '#3D7BF4'], [L("3 Com l'he fet", '3 Cómo lo he hecho'), '#2FB36D'], [L('4 Què he millorat', '4 Qué he mejorado'), '#EC5FA8']];
      return tSvg(200, `${bg(200)}${bunting(10, 160, 12, 7)}
        <rect x="70" y="128" width="96" height="10" rx="3" fill="#A0683A"/><rect x="78" y="138" width="8" height="40" fill="#8A5A30"/><rect x="150" y="138" width="8" height="40" fill="#8A5A30"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="2.2s" repeatCount="indefinite"/>${pot(118, 124, .5, 3)}</g>
        ${person(40, 132, 1, '#7C5CFF', '#5A3A22')}
        ${B.map(([t, c], i) => `<g ${tA(.5 + i * .8, 'ta-in')}><rect x="176" y="${20 + i * 36}" width="134" height="28" rx="14" fill="${c}"/><text x="243" y="${38.5 + i * 36}" text-anchor="middle" class="tat w s" style="font-size:11.5px">${t}</text></g>`).join('')}
        <g ${tA(3.8, 'ta-fade')}>${[200, 232, 264, 296].map((x, i) => `<circle cx="${x}" cy="178" r="9" fill="${['#F6C9A4', '#E8B48E', '#F6C9A4', '#D9A27B'][i]}"/><path d="M${x - 11} 196q11 -14 22 0z" fill="${['#3D7BF4', '#2FB36D', '#F5A623', '#EC5FA8'][i]}"/>`).join('')}</g>`);
    },
    // de la pantalla a la Nuvi: l'STL a mida real, el laminador i la impressió capa a capa
    m8stl() {
      const tri = (x, y) => `<path d="M${x} ${y}l14 -24l14 24z M${x + 14} ${y - 24}l14 24l14 -24z M${x + 7} ${y - 12}h28" fill="none" stroke="#7C5CFF" stroke-width="1.6" stroke-linejoin="round"/>`;
      return tSvg(200, `${bg(200)}
        <g ${tA(.2, 'ta-pop')}><rect x="12" y="44" width="84" height="60" rx="8" fill="#14204A"/><rect x="17" y="49" width="74" height="50" rx="5" fill="#EEF1FB"/>${pot(48, 92, .3, 3)}<rect x="62" y="80" width="26" height="14" rx="5" fill="#7C5CFF"/><text x="75" y="90.5" text-anchor="middle" class="tat w s" style="font-size:8.5px">STL</text>
          <path d="M4 112h100l-8 8h-84z" fill="#9AA3B5"/></g>
        <g ${tA(1, 'ta-fade')}><path d="M108 78h14" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round"/><path d="M118 72l6 6l-6 6" fill="none" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(1.3, 'ta-pop')}><path d="M132 40h36l12 12v52h-48z" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><path d="M168 40v12h12" fill="#EEF1FB" stroke="#DCE4FA" stroke-width="2"/>${tri(135, 86)}${t12(156, 100, L('test.stl', 'maceta.stl'), { fs: 9.5, fw: 800 })}</g>
        <g ${tA(2.1, 'ta-fade')}><path d="M190 78h14" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round"/><path d="M200 72l6 6l-6 6" fill="none" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.4, 'ta-pop')}><rect x="212" y="20" width="8" height="112" rx="3" fill="#5A678C"/><rect x="298" y="20" width="8" height="112" rx="3" fill="#5A678C"/><rect x="212" y="20" width="94" height="8" rx="3" fill="#5A678C"/><rect x="214" y="128" width="90" height="8" rx="3" fill="#8D9AC0"/>
          <rect x="246" y="120" width="30" height="8" rx="2" fill="#FF8A3D"><animate attributeName="height" values="0;8;8" dur="5.5s" repeatCount="indefinite"/><animate attributeName="y" values="128;120;120" dur="5.5s" repeatCount="indefinite"/></rect>
          <rect x="248" y="112" width="26" height="8" rx="2" fill="#FFA866"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.4;.45;1" dur="5.5s" repeatCount="indefinite"/></rect>
          <g><animateTransform attributeName="transform" type="translate" values="246 104;276 104;246 104" dur="1.6s" repeatCount="indefinite"/>${head(.7)}</g></g>
        <g ${tA(3.4, 'ta-in')}>${pill(104, 150, 150, L('a mida real, en mm', 'a tamaño real, en mm'), '#14204A')}</g>
        <g ${tA(3.8, 'ta-in')}>${pill(260, 166, 92, L('capa a capa', 'capa a capa'), '#FF8A3D')}</g>`);
    }
  };
})());
