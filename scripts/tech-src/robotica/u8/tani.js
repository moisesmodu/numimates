/* Tech Robòtica · unitat 8 «El meu robot» · animacions de teoria (TANI) */
Object.assign(TANI, (() => {
  // ---------- peces comunes ----------
  const SM = (attr, values, dur, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;
  const PAT = { none: '00000 00000 00000 00000 00000', heart: '01010 11111 11111 01110 00100', happy: '00000 01010 00000 10001 01110', arrow: '00100 01110 10101 00100 00100', yes: '00000 00001 00010 10100 01000' };
  const leds = p => { const r = (PAT[p] || p).split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) o += `<rect x="${(-8.4 + x * 3.7).toFixed(1)}" y="${(-12 + y * 3.7).toFixed(1)}" width="2.3" height="2.3" rx=".6" fill="${r[y][x] === '1' ? '#FF3B30' : '#3A2226'}"/>`; return o; };
  // el Maqueen Lite V5 vist des de dalt (el davant mira amunt); o.car = color dels llums, o.mx = HTML de la matriu, o.under = color de sota
  const bot = (x, y, a = 0, s = 1, o = {}) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    ${o.under ? `<circle r="30" fill="${o.under}" opacity=".28"/>` : ''}<ellipse cx="2" cy="5" rx="26" ry="27" fill="#0B1838" opacity=".14"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 22.5} 2)"><rect x="-4.4" y="-13.5" width="8.8" height="27" rx="3.4" fill="#1B1D22"/>${[-8, -2.5, 3, 8.5].map(t => `<rect x="-4.4" y="${t - .7}" width="8.8" height="1.4" fill="#41454F"/>`).join('')}</g>`).join('')}
    <rect x="-18.5" y="-20" width="37" height="41" rx="8" fill="#152238" stroke="#F2B21B" stroke-width="1.8"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.8" r="2.4" fill="${o.car || '#C7CBD6'}"/>${o.car ? `<circle cx="${k * 13}" cy="-19" r="6" fill="${o.car}" opacity=".35"/>` : ''}`).join('')}
    <rect x="-13.5" y="-31" width="27" height="10" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 6.8}" cy="-26" r="4.4" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 6.8}" cy="-26" r="2.1" fill="#5A6070"/>`).join('')}
    <rect x="-12" y="-14.5" width="24" height="21.5" rx="2" fill="#121212"/><rect x="-12" y="5.4" width="24" height="2" fill="#C9A24A"/>
    ${o.mx != null ? o.mx : leds(o.leds || 'none')}<circle cx="-10.2" cy="-3.6" r="1.4" fill="#2E2E2E"/><circle cx="10.2" cy="-3.6" r="1.4" fill="#2E2E2E"/>${o.extra || ''}</g>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  // tapet blanc amb quadrícula (cada quadre, 10 cm)
  const mat = (x, y, w, h, g = 14) => { let l = ''; for (let i = x + g; i < x + w - 1; i += g) l += `M${i} ${y}V${y + h}`; for (let j = y + g; j < y + h - 1; j += g) l += `M${x} ${j}H${x + w}`;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#F8F7F2" stroke="#B98552" stroke-width="3"/><path d="${l}" stroke="#2F4FA0" stroke-opacity=".1" stroke-width="1"/>`; };
  const crate = (x, y, w, h) => `<rect x="${x + 1.5}" y="${y + 2.5}" width="${w}" height="${h}" rx="2" fill="#141428" opacity=".16"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#D9A465" stroke="#8A5A2E" stroke-width="1.4"/><path d="M${x + 3} ${y + 3}L${x + w - 3} ${y + h - 3}M${x + w - 3} ${y + 3}L${x + 3} ${y + h - 3}" stroke="#A8743E" stroke-width="1.4"/>`;
  const meta = (x, y, w, h, txt = L('META', 'META')) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#3CC47C" fill-opacity=".3" stroke="#1FA463" stroke-width="1.6" stroke-dasharray="4 3"/><text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" class="tat s" style="font-size:11px;fill:#14613A">${txt}</text>`;
  const can = (x, y, r = 5) => `<circle cx="${x + .8}" cy="${y + 1.2}" r="${r}" fill="#000" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="#E0463C"/><circle cx="${x}" cy="${y}" r="${r * .66}" fill="none" stroke="#F4D5D2" stroke-width="1.2"/>`;
  // una ona d'ultrasons que surt del davant del robot
  const waves = (x, y, a, n = 3, dur = 1.2) => `<g transform="translate(${x} ${y}) rotate(${a})">${Array.from({ length: n }, (_, k) => `<path d="M-9 0Q0 -6 9 0" fill="none" stroke="#14A3B8" stroke-width="2.4" stroke-linecap="round" opacity="0"><animateTransform attributeName="transform" type="translate" values="0 0;0 -26" dur="${dur}s" begin="${(k * dur / n).toFixed(2)}s" repeatCount="indefinite"/>${SM('opacity', '0;1;0', dur, `begin="${(k * dur / n).toFixed(2)}s"`)}</path>`).join('')}</g>`;
  // blocs de colors (com els del programa)
  const blk = (x, y, w, col, txt, cls = 'tat w s', fs = 11.5) => `<rect x="${x}" y="${y}" width="${w}" height="18" rx="5" fill="${col}"/><text x="${x + 7}" y="${y + 13}" class="${cls}" style="font-size:${fs}px">${txt}</text>`;

  return {
    // una bona missió: objectiu clar, obstacles, un sensor que calgui i una comprovació
    k8good() {
      const path = 'M34 132H96Q110 132 110 118V74Q110 62 122 62H146';
      return tSvg(214, `${mat(10, 12, 170, 160)}
        <path d="M34 132H96Q110 132 110 118V74Q110 62 122 62H160" fill="none" stroke="#121418" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
        ${meta(130, 30, 44, 44)}${crate(52, 30, 30, 30)}${crate(132, 112, 30, 26)}${can(64, 92)}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" keyTimes="0;.1;.8;1" keyPoints="0;0;1;1" calcMode="linear" path="${path}"/>
          <g transform="rotate(90)">${bot(0, 0, 0, .42, { car: '#2BD45A' })}${waves(0, -15, 0, 2, 1.1)}</g></g>
        ${[[L('🎯 Objectiu clar', '🎯 Objetivo claro'), .4], [L('🧱 Obstacles', '🧱 Obstáculos'), 1.1], [L('📡 Cal un sensor', '📡 Hace falta un sensor'), 1.8], [L('✅ Es comprova', '✅ Se comprueba'), 2.5]].map(([t, d], i) =>
          `<g ${tA(d, 'ta-in')}><rect x="188" y="${14 + i * 40}" width="126" height="32" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="196" y="${35 + i * 40}" class="tat s" style="font-size:${LANG === 'es' && i === 2 ? 10.6 : 12.5}px">${t}</text></g>`).join('')}
        <g ${tA(3.4, 'ta-pop')}>${pill(160, 196, 250, L('Ni massa fàcil ni impossible', 'Ni demasiado fácil ni imposible'), '#2F5BEA')}</g>`);
    },
    // del paper a la pantalla: l'esbós en una quadrícula de 10 cm i la mateixa pista a l'editor
    k8sketch() {
      const G = 15, X0 = 22, Y0 = 46, gx = (i, j) => [X0 + i * G, Y0 + j * G];
      let grid = ''; for (let i = 0; i <= 8; i++) grid += `M${X0 + i * G} ${Y0}V${Y0 + 6 * G}`; for (let j = 0; j <= 6; j++) grid += `M${X0} ${Y0 + j * G}H${X0 + 8 * G}`;
      const pencil = `<g stroke="#4A4A5A" stroke-width="1.8" fill="none" stroke-linecap="round">
        <path d="M${gx(4, 1)[0] + 2} ${gx(4, 1)[1] + 2}h11v26h-11z M${gx(4, 1)[0] + 2} ${gx(4, 1)[1] + 2}l11 26" pathLength="1" ${tA(.5, 'ta-draw')}/>
        <path d="M${gx(0, 4)[0] + 7} ${gx(0, 4)[1] + 7}H${gx(3, 4)[0] + 7}V${gx(3, 1)[1] + 7}" pathLength="1" stroke-width="3" ${tA(1, 'ta-draw')}/>
        <path d="M${gx(6, 3)[0] + 2} ${gx(6, 3)[1] + 2}h26v26h-26z" pathLength="1" stroke="#1FA463" ${tA(1.5, 'ta-draw')}/>
        <path d="M${gx(0, 4)[0] + 3} ${gx(0, 4)[1] + 8}l8 -4l-8 -4" pathLength="1" stroke="#2F5BEA" stroke-width="2.4" ${tA(1.9, 'ta-draw')}/></g>`;
      // la mateixa pista, a la pantalla
      const S = 11, sx = 188, sy = 50, sc = (i, j) => [sx + i * S, sy + j * S];
      let sg = ''; for (let i = 0; i <= 8; i++) sg += `M${sx + i * S} ${sy}V${sy + 6 * S}`; for (let j = 0; j <= 6; j++) sg += `M${sx} ${sy + j * S}H${sx + 8 * S}`;
      return tSvg(214, `<g transform="rotate(-3 92 100)"><rect x="12" y="32" width="160" height="124" rx="4" fill="#FFFDF4" stroke="#E2D8B8" stroke-width="1.5" filter="url(#bwSh)"/>
          <path d="${grid}" stroke="#9FB2D8" stroke-width=".9"/>${pencil}</g>
        <text x="92" y="22" text-anchor="middle" class="tat s">${L('1. En paper', '1. En papel')}</text>
        <path d="M172 104h12" stroke="#7F95E8" stroke-width="4" stroke-linecap="round"/><path d="M180 96l8 8l-8 8" fill="none" stroke="#7F95E8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(2.4, 'ta-in')}><rect x="180" y="38" width="106" height="90" rx="8" fill="#20306A"/><rect x="186" y="44" width="94" height="78" rx="4" fill="#F8F7F2"/>
          <path d="${sg}" stroke="#2F4FA0" stroke-opacity=".14" stroke-width=".8"/>
          <rect x="${sc(4, 1)[0] + .5}" y="${sc(4, 1)[1] + .5}" width="${S - 1}" height="${2 * S - 1}" fill="#D9A465" stroke="#8A5A2E" stroke-width=".8"/>
          <path d="M${sc(0, 4)[0] + 5} ${sc(0, 4)[1] + 5.5}H${sc(3, 4)[0] + 5.5}V${sc(3, 1)[1] + 5}" fill="none" stroke="#121418" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="${sc(6, 3)[0]}" y="${sc(6, 3)[1]}" width="${2 * S}" height="${2 * S}" rx="3" fill="#3CC47C" fill-opacity=".45" stroke="#1FA463" stroke-dasharray="3 2"/>
          ${bot(sc(0, 4)[0] + 5.5, sc(0, 4)[1] + 5.5, 90, .2)}
          <path d="M174 132h124l-8 8H182z" fill="#9AA3B5"/></g>
        <text x="236" y="22" text-anchor="middle" class="tat s">${L('2. A la pantalla', '2. En la pantalla')}</text>
        <g ${tA(3.2, 'ta-pop')}>${pill(160, 186, 214, L('1 casella = 10 × 10 cm', '1 casilla = 10 × 10 cm'), '#F08A24')}</g>`);
    },
    // el cicle de l'enginyer/a: planifica → programa → prova → millora (i torna-hi)
    k8cycle() {
      const C = [112, 120], R = 60, P = a => [C[0] + R * Math.cos(a * Math.PI / 180), C[1] + R * Math.sin(a * Math.PI / 180)];
      const st = [[-90, '📝', L('Planifica', 'Planifica'), '#2F5BEA'], [0, '🧩', L('Programa', 'Programa'), '#8B5CF6'], [90, '▶️', L('Prova', 'Prueba'), '#1FA463'], [180, '🔧', L('Millora', 'Mejora'), '#F08A24']];
      const nodes = st.map(([a, ic, t, col], i) => { const [x, y] = P(a); return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle r="24" fill="#fff" stroke="${col}" stroke-width="4" filter="url(#bwSh)"/><text y="7" text-anchor="middle" style="font-size:19px">${ic}</text>
        <circle r="30" fill="none" stroke="#FFC531" stroke-width="5" opacity="0">${SM('opacity', '0;1;0;0', 5.5, `keyTimes="0;.06;.25;1" begin="${(i * 1.375).toFixed(3)}s"`)}</circle>
        <text y="${a === 90 ? 44 : a === -90 ? -32 : 44}" text-anchor="middle" class="tat s" style="fill:${col};paint-order:stroke;stroke:#F3F6FF;stroke-width:5px">${t}</text></g>`; }).join('');
      const arc = (a0, a1) => { const [x0, y0] = P(a0 + 24), [x1, y1] = P(a1 - 24); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)}A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="#B8C6F2" stroke-width="4" stroke-linecap="round"/>`; };
      const dot = `<circle r="6" fill="#FFC531" stroke="#B57A00" stroke-width="1.5"><animateMotion dur="5.5s" repeatCount="indefinite" path="M${C[0]} ${C[1] - R}A${R} ${R} 0 1 1 ${C[0] - .01} ${C[1] - R}"/></circle>`;
      const ver = ['v1', 'v2', 'v3'].map((v, i) => `<text x="${C[0]}" y="${C[1] + 8}" text-anchor="middle" class="tat b" style="font-size:24px;fill:#20306A" opacity="0">${v}${SM('opacity', i === 0 ? '1;1;0;0;1' : i === 1 ? '0;0;1;0;0' : '0;0;0;1;0', 16.5, i === 0 ? 'keyTimes="0;.32;.34;.98;1"' : i === 1 ? 'keyTimes="0;.32;.34;.66;1"' : 'keyTimes="0;.32;.66;.68;1"')}</text>`).join('');
      return tSvg(232, `${arc(-90, 0)}${arc(0, 90)}${arc(90, 180)}${arc(180, 270)}${dot}${nodes}${ver}
        <g ${tA(.6, 'ta-in')}><rect x="222" y="56" width="92" height="124" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="268" y="82" text-anchor="middle" class="tat s">${L('A cada', 'En cada')}</text><text x="268" y="100" text-anchor="middle" class="tat s">${L('volta,', 'vuelta,')}</text>
          <text x="268" y="124" text-anchor="middle" class="tat s">${L('el robot', 'el robot')}</text><text x="268" y="142" text-anchor="middle" class="tat s">${L('va una', 'va un')}</text><text x="268" y="162" text-anchor="middle" class="tat b" style="fill:#1FA463;font-size:14px">${L('mica millor', 'poco mejor')}</text></g>`);
    },
    // depurar: els llums i la pantalla expliquen què «pensa» el robot
    k8debug() {
      // el robot avança fins a 10 cm de la caixa i s'atura; la matriu mostra la distància i els llums canvien de color
      const kt = 'keyTimes="0;.12;.62;1"';
      const nums = [['40', '0;1;0;0;0;0;0'], ['28', '0;0;1;0;0;0;0'], ['17', '0;0;0;1;0;0;0'], ['9', '0;0;0;0;1;1;0']].map(([n, v]) => `<text x="0" y="-1" transform="rotate(-90 0 -4)" text-anchor="middle" style="font:900 13px Lexend,system-ui;fill:#FF3B30" opacity="0">${n}${SM('opacity', v, 5.5, 'keyTimes="0;.12;.3;.46;.62;.95;1" calcMode="discrete"')}</text>`).join('');
      const car = col => `<g>${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.8" r="2.6" fill="${col}"/><circle cx="${k * 13}" cy="-19.5" r="6.5" fill="${col}" opacity=".4"/>`).join('')}</g>`;
      return tSvg(214, `<rect x="10" y="20" width="300" height="104" rx="12" fill="#F8F7F2" stroke="#B98552" stroke-width="3"/>
        ${crate(256, 36, 28, 72)}
        <g><animateTransform attributeName="transform" type="translate" values="40 72;40 72;206 72;206 72" ${kt} dur="5.5s" repeatCount="indefinite"/>
          <g transform="rotate(90)">${bot(0, 0, 0, .9, { mx: `<rect x="-12" y="-14.5" width="24" height="21.5" rx="2" fill="#121212"/>${nums}`, extra: `<g>${car('#2BD45A')}${SM('opacity', '1;1;1;0;0', 5.5, 'keyTimes="0;.12;.6;.62;1" calcMode="discrete"')}</g><g opacity="0">${car('#FF3B30')}${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.6;.62;1" calcMode="discrete"')}</g>` })}</g>
          <g transform="translate(32 0)">${waves(0, 0, 90, 3, 1)}</g></g>
        <g ${tA(.3, 'ta-in')}>${blk(14, 138, 190, '#1FA463', L('per sempre', 'para siempre'))}
          ${blk(26, 160, 178, '#F08A24', L('si distància &lt; 10:', 'si distancia &lt; 10:'))}
          ${blk(38, 182, 166, '#C43BFF', L('llums vermells i atura', 'luces rojas y para'), 'tat w s', 11)}</g>
        <g ${tA(1.4, 'ta-in')}><rect x="212" y="138" width="102" height="62" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="263" y="160" text-anchor="middle" class="tat s" style="font-size:12px">${L('Els llums', 'Las luces')}</text><text x="263" y="176" text-anchor="middle" class="tat s" style="font-size:12px">${L('diuen què', 'dicen qué')}</text><text x="263" y="192" text-anchor="middle" class="tat s" style="font-size:12px">${L('pensa!', '¡piensa!')}</text></g>`);
    },
    // del simulador al robot: el botó MakeCode obre el programa en blocs (en anglès), «Descarrega» i el cable USB el porten a la micro:bit
    k8export() {
      const cable = 'M226 116C240 116 244 150 262 150';
      const file = `<g opacity="0">${SM('opacity', '0;0;1;1;0;0', 5.5, 'keyTimes="0;.5;.53;.7;.73;1"')}<rect x="-10" y="-12" width="20" height="24" rx="3" fill="#FFC531" stroke="#B57A00" stroke-width="1.5"/><text y="4" text-anchor="middle" style="font:900 7px Lexend,system-ui;fill:#6B4A00">01</text>
        <animateMotion dur="5.5s" repeatCount="indefinite" keyTimes="0;.5;.7;1" keyPoints="0;0;1;1" calcMode="linear" path="${cable}"/></g>`;
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="8" y="34" width="96" height="104" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          ${blk(16, 46, 78, '#1FA463', L('en iniciar', 'al iniciar'), 'tat w s', 10.5)}${blk(22, 68, 72, '#2F5BEA', 'motor 150', 'tat w s', 10.5)}${blk(22, 90, 72, '#F08A24', L('espera', 'espera'), 'tat w s', 10.5)}
          <rect x="62" y="112" width="34" height="20" rx="7" fill="#20306A"/><path d="M73 117l-5 5l5 5M85 117l5 5l-5 5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="79" cy="122" r="15" fill="none" stroke="#FFC531" stroke-width="3" opacity="0">${SM('opacity', '0;0;1;0;0', 5.5, 'keyTimes="0;.12;.18;.26;1"')}</circle></g>
        <text x="56" y="22" text-anchor="middle" class="tat s">${L('1. Simulador', '1. Simulador')}</text>
        <path d="M106 86h10" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round"/><path d="M113 80l6 6l-6 6" fill="none" stroke="#7F95E8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g ${tA(1.2, 'ta-in')}><rect x="122" y="34" width="104" height="104" rx="12" fill="#1B2240" filter="url(#bwSh)"/>
          ${blk(128, 44, 92, '#1FA463', 'on start', 'tat w s', 10)}${blk(134, 64, 86, '#2F5BEA', 'motor 150', 'tat w s', 10)}${blk(134, 84, 86, '#F08A24', 'pause 3000', 'tat w s', 10)}
          <rect x="138" y="110" width="72" height="20" rx="7" fill="#7B4DE0"/><text x="174" y="124" text-anchor="middle" class="tat w s" style="font-size:10.5px">${L('Descarrega', 'Descargar')}</text></g>
        <text x="174" y="22" text-anchor="middle" class="tat s">2. MakeCode</text>
        <path d="${cable}" fill="none" stroke="#3D4658" stroke-width="4.4" stroke-linecap="round"/>${file}
        <g>${bot(282, 150, 0, .95, { mx: `<g opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.72;.75;.97;1"')}${leds('happy')}</g><g>${SM('opacity', '1;1;0;0;1', 5.5, 'keyTimes="0;.72;.75;.97;1"')}${leds('none')}</g>` })}</g>
        <text x="282" y="22" text-anchor="middle" class="tat s">${L('3. Robot', '3. Robot')}</text>
        <g ${tA(3.6, 'ta-pop')}>${pill(118, 182, 196, L('El mateix programa!', '¡El mismo programa!'), '#1FA463')}</g>`);
    },
    // el món real no és perfecte: amb un temps fix el robot s'atura abans; amb un sensor, encerta
    k8drift() {
      const lane = (y, lbl, col) => `<rect x="96" y="${y - 22}" width="214" height="44" rx="10" fill="#F8F7F2" stroke="#E2D8B8" stroke-width="1.5"/><path d="M276 ${y - 18}V${y + 18}" stroke="#121418" stroke-width="5" stroke-linecap="round"/>
        <text x="88" y="${y + 5}" text-anchor="end" class="tat s" style="fill:${col}">${lbl}</text>`;
      const run = (y, x1, t, extra = '') => `<g><animateTransform attributeName="transform" type="translate" values="118 ${y};118 ${y};${x1} ${y};${x1} ${y}" keyTimes="0;${t};.62;1" dur="5.5s" repeatCount="indefinite"/><g transform="rotate(90)">${bot(0, 0, 0, .55, extra)}</g></g>`;
      return tSvg(214, `${lane(34, L('Simulador', 'Simulador'), '#2F5BEA')}${lane(98, L('Real: temps', 'Real: tiempo'), '#C0392B')}${lane(162, L('Real: sensor', 'Real: sensor'), '#1FA463')}
        ${run(34, 260, .1)}${run(98, 228, .1)}${run(162, 260, .1, { car: '#2BD45A' })}
        <g opacity="0">${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.64;.66;1"')}${ok(298, 34, 10)}${ko(298, 98, 10)}${ok(298, 162, 10)}
          <path d="M246 124H274" stroke="#C0392B" stroke-width="2" stroke-dasharray="3 2"/><text x="260" y="137" text-anchor="middle" class="tat s" style="font-size:11px;fill:#C0392B">−8 cm</text></g>
        <g ${tA(.4, 'ta-in')}><text x="104" y="74" class="tat s" style="font-size:11.5px;fill:#7A6A4A">🔋 ${L('piles gastades', 'pilas gastadas')} · ${L('terra', 'suelo')} · ${L('motors', 'motores')}</text></g>
        <g ${tA(2, 'ta-in')}><text x="160" y="204" text-anchor="middle" class="tat s" style="font-size:12px;fill:#147A47">${L('Amb un sensor, sempre s\'atura a la cinta', 'Con un sensor, siempre se para en la cinta')}</text></g>`);
    },
    // calibrar: mesura, calcula i ajusta
    k8calib() {
      let ticks = ''; for (let i = 0; i <= 10; i++) ticks += `<path d="M${30 + i * 24} 92v${i % 5 ? 6 : 11}" stroke="#7A5B12" stroke-width="1.6"/>${i % 5 ? '' : `<text x="${30 + i * 24}" y="114" text-anchor="middle" style="font:800 10px Lexend,system-ui;fill:#7A5B12">${i * 10}</text>`}`;
      const sw = `<g transform="translate(286 42)"><circle r="20" fill="#fff" stroke="#20306A" stroke-width="3"/><rect x="-4" y="-27" width="8" height="6" rx="2" fill="#20306A"/>
        <path d="M0 0V-14" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0;0;288;288" keyTimes="0;.08;.5;1" dur="5.5s" repeatCount="indefinite"/></path><circle r="2.6" fill="#20306A"/></g>`;
      return tSvg(214, `<rect x="18" y="86" width="264" height="34" rx="5" fill="#FFD866" stroke="#C9A227" stroke-width="1.5"/>${ticks}
        <g><animateTransform attributeName="transform" type="translate" values="30 62;30 62;155 62;155 62" keyTimes="0;.08;.5;1" dur="5.5s" repeatCount="indefinite"/><g transform="rotate(90)">${bot(0, 0, 0, .6)}</g></g>
        ${sw}<g opacity="0">${SM('opacity', '0;0;1;1', 5.5, 'keyTimes="0;.5;.52;1"')}<text x="286" y="80" text-anchor="middle" class="tat b" style="font-size:13px">4 s</text></g>
        ${[[130, 1, L('52 cm en 4 s → <tspan font-weight="900">13 cm/s</tspan>', '52 cm en 4 s → <tspan font-weight="900">13 cm/s</tspan>'), '#2F5BEA', 2.6, 236], [168, 2, L('78 cm ÷ 13 = <tspan font-weight="900">6 s</tspan>', '78 cm ÷ 13 = <tspan font-weight="900">6 s</tspan>'), '#1FA463', 3.4, 196]].map(([y, n, t, col, d, w]) => `<g ${tA(d, 'ta-in')}><rect x="10" y="${y}" width="${w}" height="32" rx="11" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="28" cy="${y + 16}" r="11" fill="${col}"/><text x="28" y="${y + 21}" text-anchor="middle" class="tat w s">${n}</text><text x="46" y="${y + 21}" class="tat s" style="font-size:13px">${t}</text></g>`).join('')}
        <g ${tA(4.1, 'ta-pop')}>${pill(262, 184, 100, '6000 ms', '#F08A24')}</g>
        <text x="16" y="28" class="tat s" style="font-size:12.5px">${L('Mesura → calcula → ajusta', 'Mide → calcula → ajusta')}</text>`);
    },
    // presentar la missió com un enginyer/a: quatre parts i la demostració
    k8pitch() {
      const parts = [[L('La missió', 'La misión'), '🎯', '#2F5BEA'], [L('Com funciona', 'Cómo funciona'), '📡', '#8B5CF6'], [L('Un problema', 'Un problema'), '🔧', '#F08A24'], [L('La demo!', '¡La demo!'), '🤖', '#1FA463']];
      const cards = parts.map(([t, ic, col], i) => `<g ${tA(.3 + i * .8, 'ta-in')}><rect x="176" y="${12 + i * 44}" width="141" height="36" rx="10" fill="#fff" stroke="${col}" stroke-width="2.5" filter="url(#bwSh)"/>
        <circle cx="190" cy="${30 + i * 44}" r="10" fill="${col}"/><text x="190" y="${35 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="203" y="${34.5 + i * 44}" class="tat s" style="font-size:11.5px">${ic} ${t}</text></g>`).join('');
      const heads = [30, 62, 94, 126, 158].map((x, i) => `<g transform="translate(${x} ${188 + (i % 2) * 4})"><circle r="11" fill="${['#F2B880', '#C98A5B', '#F6D2B0', '#8D5A3B', '#E8B48A'][i]}"/><path d="M-14 22a14 12 0 0 1 28 0z" fill="${['#2F5BEA', '#EF5A5A', '#1FA463', '#F08A24', '#8B5CF6'][i]}"/></g>`).join('');
      return tSvg(214, `<rect x="12" y="14" width="160" height="104" rx="8" fill="#20306A"/><rect x="18" y="20" width="148" height="92" rx="4" fill="#F8F7F2"/>
        <path d="M30 96H90Q104 96 104 82V44" fill="none" stroke="#121418" stroke-width="4" stroke-linecap="round"/>${meta(116, 30, 36, 34)}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" keyTimes="0;.2;.8;1" keyPoints="0;0;1;1" calcMode="linear" path="M30 96H90Q104 96 104 82V48"/><g transform="rotate(90)">${bot(0, 0, 0, .3, { car: '#2BD45A' })}</g></g>
        <path d="M92 118v30M62 160l30-12 30 12" stroke="#4A5578" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${heads}${cards}
        <g opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.7;.74;.95;1"')}<text x="150" y="160" style="font-size:20px">👏</text></g>`);
    }
  };
})());
