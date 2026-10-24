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
/* ---------- m6-5 · taller: de Numi a la impressora ----------
   m65cami: Numi → STL → laminador → impressora (amb el Tinkercad com a parada opcional, amb «Importa») · m65lamina: capes de
   0,2 mm, farciment del 15-20 % i suports, i el laminador calcula el temps i el filament · m65llista: la llista abans d'imprimir.
   Dibuixos genèrics (cap logotip ni pantalla de cap programa). */
Object.assign(TANI, (() => {
  const D = 5.5, fr = s => (s / D).toFixed(3), OR = '#F5893A', OR2 = '#FFA866';
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const card = (x, y, w, h, dash) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff" stroke="${dash ? '#7C5CFF' : '#DCE4FA'}" stroke-width="2" ${dash ? 'stroke-dasharray="5 4"' : ''} filter="url(#bwSh)"/>`;
  const pill = (x, y, w, txt, t, col = '#fff', cls = 'tat s') => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${col}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="${cls}">${txt}</text></g>`;
  const ok = (x, y, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="9" fill="#22A06B"/><path d="M${x - 4} ${y}l3 3.2l5.5 -6.2" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const arrow = (x, y, t) => `<g ${tA(t, 'ta-pop')}><path d="M${x} ${y}h8m-4 -5l5 5l-5 5" stroke="#14204A" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  // la fitxa de les inicials vista de costat (disc + lletres), amb franges de capes si cal
  const token = (x, y, w, k, layers) => { const disc = 3 * k, let_ = 2 * k; let g = `<rect x="${x}" y="${y - disc}" width="${w}" height="${disc}" rx="2" fill="${OR}"/><rect x="${x + w * .22}" y="${y - disc - let_}" width="${w * .2}" height="${let_}" fill="#fff" stroke="${OR}" stroke-width="1"/><rect x="${x + w * .56}" y="${y - disc - let_}" width="${w * .2}" height="${let_}" fill="#fff" stroke="${OR}" stroke-width="1"/>`;
    if (layers) for (let i = 1; i < 25; i++) { const yy = y - i * k / 5; g += `<line x1="${x}" y1="${yy}" x2="${x + w}" y2="${yy}" stroke="#14204A" stroke-width=".6" opacity="${i < 15 ? .35 : 0}"/>`; } return g; };
  return {
    m65cami() {
      const xs = [8, 86, 164, 242], w = 64, y0 = 96, h = 82;
      const box = (i, art, lab, t) => `<g ${tA(t, 'ta-in')}>${card(xs[i], y0, w, h)}${art}<text x="${xs[i] + w / 2}" y="${y0 + h - 10}" text-anchor="middle" class="tat s">${lab}</text></g>`;
      const numi = `<rect x="17" y="108" width="46" height="32" rx="4" fill="#14204A"/><rect x="21" y="112" width="38" height="24" rx="2" fill="#2E3446"/><ellipse cx="40" cy="129" rx="11" ry="4" fill="${OR}"/><rect x="31" y="122" width="18" height="6" rx="2" fill="${OR2}"/><rect x="12" y="140" width="56" height="5" rx="2" fill="#9AA3B5"/>`;
      const stl = `<path d="M105 106h22l9 9v32a4 4 0 0 1 -4 4h-27a4 4 0 0 1 -4 -4v-37a4 4 0 0 1 4 -4z" fill="#F5F7FF" stroke="#C9D3EE" stroke-width="2"/><g stroke="#7C5CFF" stroke-width="1.4" fill="none"><path d="M105 144l9 -16l9 16zM114 128l9 16l9 -16zM114 128h18"/></g><text x="118" y="122" text-anchor="middle" class="tat s" style="font-size:11px;fill:#7C5CFF">STL</text>`;
      const sl = Array.from({ length: 6 }, (_, i) => `<rect x="${175 + i * 1.5}" y="${146 - i * 7}" width="${42 - i * 3}" height="5.5" rx="2.5" fill="${i % 2 ? OR2 : OR}"/>`).join('') + `<text x="196" y="${108}" text-anchor="middle" class="tat s" style="font-size:10px">0,2 mm</text>`;
      const pr = `<rect x="251" y="104" width="46" height="46" rx="5" fill="none" stroke="#5A678C" stroke-width="3"/><rect x="251" y="116" width="46" height="4" fill="#5A678C"/><rect x="267" y="113" width="14" height="10" rx="2" fill="#7C5CFF"/><path d="M274 123v4" stroke="#E8453C" stroke-width="2.5"/><rect x="259" y="142" width="30" height="5" rx="2" fill="#9AA3B5"/><rect x="265" y="137" width="18" height="5" rx="2" fill="${OR}"/>`;
      const tk = `<g ${tA(1.6, 'ta-in')}>${card(118, 12, 84, 58, true)}<path d="M142 26l12 -6l12 6v14l-12 6l-12 -6z" fill="#E7E2FF" stroke="#7C5CFF" stroke-width="1.6"/><path d="M142 26l12 6l12 -6M154 32v14" fill="none" stroke="#7C5CFF" stroke-width="1.6"/><text x="160" y="62" text-anchor="middle" class="tat s" style="font-size:11.5px">Tinkercad</text></g>
        <g ${tA(1.4, 'ta-in')}><path d="M121 96C121 84 128 72 136 66" fill="none" stroke="#7C5CFF" stroke-width="2" stroke-dasharray="4 4"/><path d="M184 66C192 72 199 84 199 96" fill="none" stroke="#7C5CFF" stroke-width="2" stroke-dasharray="4 4"/></g>
        ${pill(214, 20, 98, L('«Importa»', '«Importar»'), 2.0, '#7C5CFF', 'tat s w')}${pill(8, 20, 100, L('opcional', 'opcional'), 2.0)}`;
      return tSvg(196, `${bg(196)}${box(0, numi, 'Numi', 0.2)}${arrow(75, y0 + 40, 0.8)}${box(1, stl, L('STL', 'STL'), 1.0)}${arrow(153, y0 + 40, 2.2)}${box(2, sl, L('Laminador', 'Laminador'), 2.4)}${arrow(231, y0 + 40, 3.2)}${box(3, pr, L('Impressora', 'Impresora'), 3.4)}${tk}`);
    },
    m65lamina() {
      // a l'esquerra, la fitxa de costat tallada en capes; al mig, una capa de dalt amb el farciment; a la dreta, les opcions
      const cx = 132, cy = 96, R = 40, grid = [];
      for (let v = -40; v <= 40; v += 10) { grid.push(`<line x1="${cx + v}" y1="${cy - R}" x2="${cx + v}" y2="${cy + R}"/>`, `<line x1="${cx - R}" y1="${cy + v}" x2="${cx + R}" y2="${cy + v}"/>`); }
      const row = (y, a, b, t) => `<g ${tA(t, 'ta-in')}><text x="190" y="${y}" class="tat s" style="font-size:11px">${a}</text><text x="306" y="${y}" text-anchor="end" class="tat s" style="font-size:11px;fill:#7C5CFF">${b}</text></g>`;
      return tSvg(200, `${bg(200)}
        <g ${tA(0.1, 'ta-in')}>${token(14, 120, 70, 14, true)}<rect x="10" y="120" width="78" height="4" rx="2" fill="#5A678C"/></g>
        ${pill(10, 136, 80, L('25 capes', '25 capas'), 0.6, OR, 'tat s w')}
        <defs><clipPath id="m65c"><circle cx="${cx}" cy="${cy}" r="${R - 3}"/></clipPath></defs>
        <g ${tA(1.1, 'ta-pop')}><circle cx="${cx}" cy="${cy}" r="${R}" fill="#FFF3E8"/><g clip-path="url(#m65c)" stroke="${OR}" stroke-width="1.6">${grid.join('')}</g><circle cx="${cx}" cy="${cy}" r="${R - 1.5}" fill="none" stroke="${OR}" stroke-width="4"/></g>
        ${pill(92, 148, 82, L('farciment', 'relleno'), 1.4)}
        <g ${tA(1.8, 'ta-in')}><rect x="180" y="14" width="134" height="118" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/></g>
        ${row(40, L('Capa', 'Capa'), '0,2 mm', 2.0)}${row(68, L('Farciment', 'Relleno'), '15-20 %', 2.4)}${row(96, L('Suports', 'Soportes'), L('no', 'no'), 2.8)}
        <g ${tA(3.3, 'ta-pop')}><rect x="210" y="106" width="78" height="20" rx="10" fill="#7C5CFF"/><text x="249" y="120" text-anchor="middle" class="tat s w" style="font-size:12px">${L('Lamina', 'Laminar')}</text></g>
        ${pill(180, 142, 134, L('⏱ temps · ⚖ filament', '⏱ tiempo · ⚖ filamento'), 3.9, '#22A06B', 'tat s w')}
        <g ${tA(4.4, 'ta-in')}><text x="132" y="186" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('la vora, plena · per dins, quadrícula', 'el borde, lleno · por dentro, cuadrícula')}</text></g>`);
    },
    m65llista() {
      const items = [L('Toca la placa', 'Toca la placa'), L('Base plana', 'Base plana'), L('Una sola peça', 'Una sola pieza'), L('Parets ≥ 1,2-2 mm', 'Paredes ≥ 1,2-2 mm'), L('Cap a la impressora', 'Cabe en la impresora'), L('Voladissos ≤ 45°', 'Voladizos ≤ 45°')];
      return tSvg(206, `${bg(206)}<g ${tA(0.1, 'ta-in')}><rect x="12" y="14" width="200" height="182" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><rect x="85" y="8" width="54" height="14" rx="5" fill="#9AA3B5"/></g>
        ${items.map((t, i) => `<g ${tA(0.3 + i * 0.25, 'ta-in')}><rect x="24" y="${34 + i * 26}" width="16" height="16" rx="4" fill="#fff" stroke="#C9CFDD" stroke-width="2"/><text x="48" y="${47 + i * 26}" class="tat s" style="font-size:12.5px">${t}</text></g>${ok(32, 42 + i * 26, 1.9 + i * 0.4)}`).join('')}
        <g ${tA(0.6, 'ta-pop')}><ellipse cx="266" cy="118" rx="42" ry="14" fill="#D06A1E"/><rect x="224" y="100" width="84" height="18" fill="${OR}"/><ellipse cx="266" cy="100" rx="42" ry="14" fill="${OR2}"/><text x="266" y="106" text-anchor="middle" class="tat b" style="fill:#fff">A B</text></g>
        ${pill(220, 150, 94, L('a imprimir!', '¡a imprimir!'), 3.9, '#22A06B', 'tat s w')}`);
    }
  };
})());
