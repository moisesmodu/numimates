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
