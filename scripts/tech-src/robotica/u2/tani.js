/* Tech Robòtica · unitat 2 «Moviment precís» · animacions de teoria (TANI) */
Object.assign(TANI, (() => {
  // el Maqueen Lite V5 vist des de dalt, mirant amunt: rodes negres, cos fosc amb vora daurada, micro:bit amb LEDs i ultrasons blaus
  const FACE = '00000 01010 00000 10001 01110';
  const mq = (x, y, a = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    <rect x="-28" y="-14" width="9" height="27" rx="3.5" fill="#17181C"/><rect x="19" y="-14" width="9" height="27" rx="3.5" fill="#17181C"/>
    <path d="M-28 -8h9M-28 -2h9M-28 4h9M-28 10h9M19 -8h9M19 -2h9M19 4h9M19 10h9" stroke="#3B3D46" stroke-width="1.4"/>
    <rect x="-20" y="-22" width="40" height="44" rx="10" fill="#262B3B" stroke="#D9A93A" stroke-width="2.4"/>
    <rect x="-16" y="-34" width="32" height="12" rx="3.5" fill="#2F7BFF" stroke="#1C4FB8" stroke-width="1.4"/>
    <circle cx="-8" cy="-28" r="4.6" fill="#D9DDE5" stroke="#8A93A6" stroke-width="1.3"/><circle cx="8" cy="-28" r="4.6" fill="#D9DDE5" stroke="#8A93A6" stroke-width="1.3"/>
    <circle cx="-8" cy="-28" r="2" fill="#5B6476"/><circle cx="8" cy="-28" r="2" fill="#5B6476"/>
    <rect x="-13" y="-13" width="26" height="24" rx="3" fill="#0F1013" stroke="#3B3E48" stroke-width="1"/>
    ${FACE.split(' ').map((r, j) => [...r].map((c, i) => `<circle cx="${-8 + i * 4}" cy="${-9 + j * 4}" r="1.3" fill="${c === '1' ? '#FF3B30' : '#3A1F24'}"/>`).join('')).join('')}</g>`;
  const LOOP = 'dur="5.5s" repeatCount="indefinite"';
  // un traç que es dibuixa entre els instants a i b del bucle de 5,5 s (en fracció) i es queda dibuixat
  const drw = (tag, attrs, a, b) => `<${tag} ${attrs} pathLength="1" stroke-dasharray="1 1"><animate attributeName="stroke-dashoffset" values="1;1;0;0" keyTimes="0;${a};${b};1" ${LOOP}/></${tag}>`;
  // una «pastilla» de text amb fons
  const pill = (x, y, w, txt, col, t, cls = 'ta-pop') => `<g ${tA(t, cls)}><rect x="${x - w / 2}" y="${y - 17}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 1}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
  return {
    // distància = velocitat × temps: el robot avança per un regle i el rellotge compta els segons
    k2dvt() {
      const x0 = 34, k = 6.4;   // píxels per cm al regle
      const ticks = [0, 5, 10, 15, 20, 25, 30, 35, 40].map(c => `<path d="M${x0 + c * k} 150v${c % 10 ? 7 : 12}" stroke="#56628A" stroke-width="2"/>${c % 10 ? '' : `<text x="${x0 + c * k}" y="178" text-anchor="middle" class="tat s">${c}</text>`}`).join('');
      const d = 31 * k;
      const clock = v => `<text x="64" y="86" text-anchor="middle" class="tat b" opacity="0">${v} s<animate attributeName="opacity" values="${v === 0 ? '1;1;0;0;0;0;1' : v === 1 ? '0;0;1;1;0;0;0' : '0;0;0;0;1;1;0'}" keyTimes="0;.42;.425;.74;.745;.98;1" ${LOOP}/></text>`;
      return tSvg(214, `<rect x="12" y="8" width="296" height="44" rx="14" fill="#F1ECFF" stroke="#C9B8FA" stroke-width="2"/>
        <text x="82" y="37" text-anchor="middle" class="tat b" ${tA(.3)}>15,6 cm/s</text><text x="168" y="37" text-anchor="middle" class="tat b" ${tA(1.6)}>× 2 s</text><text x="250" y="37" text-anchor="middle" class="tat b" style="fill:#6D3FD8" ${tA(4.2)}>= 31 cm</text>
        <circle cx="64" cy="80" r="21" fill="#fff" stroke="#8B5CF6" stroke-width="3"/><path d="M58 57h12" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/>${[0, 1, 2].map(clock).join('')}
        <text x="98" y="86" class="tat s" ${tA(.3, 'ta-fade')}>${L('velocitat 150 durant 2000 ms', 'velocidad 150 durante 2000 ms')}</text>
        <rect x="16" y="112" width="290" height="38" rx="8" fill="#F8F7F2" stroke="#E4E1D6" stroke-width="1.5"/>
        <rect x="${x0}" y="129" height="4" rx="2" fill="#2F5BEA"><animate attributeName="width" values="0;0;${d};${d}" keyTimes="0;.1;.75;1" ${LOOP}/></rect>
        <path d="M${x0} 150H${x0 + 40 * k}" stroke="#56628A" stroke-width="2"/>${ticks}<text x="${x0 + 40 * k + 9}" y="155" class="tat s">cm</text>
        <g ${tA(2.4)}><path d="M${x0 + 15.6 * k} 112v-8" stroke="#F08A24" stroke-width="3"/><text x="${x0 + 15.6 * k}" y="102" text-anchor="middle" class="tat s" style="fill:#C2610F">1 s</text></g>
        <g ${tA(4.2)}><path d="M${x0 + d} 112v-8" stroke="#F08A24" stroke-width="3"/><text x="${x0 + d}" y="102" text-anchor="middle" class="tat s" style="fill:#C2610F">2 s</text></g>
        <g><animateMotion values="${x0},131;${x0},131;${x0 + d},131;${x0 + d},131" keyTimes="0;.1;.75;1" calcMode="linear" ${LOOP}/>${mq(0, 0, 90, .42)}</g>
        <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(4.4, 'ta-fade')}>${L('Doble de temps → doble de distància', 'Doble de tiempo → doble de distancia')}</text>`);
    },
    // la gràfica velocitat-temps: un rectangle (amb la inèrcia a les vores) i l'àrea és la distància
    k2graf() {
      const X = s => 56 + s * 82, Y = v => 172 - v * 6;   // 0-3 s · 0-20 cm/s
      const curve = `M${X(0)} ${Y(0)} C${X(.03)} ${Y(9)} ${X(.06)} ${Y(15)} ${X(.12)} ${Y(15.6)} L${X(2)} ${Y(15.6)} C${X(2.04)} ${Y(9)} ${X(2.08)} ${Y(1)} ${X(2.14)} ${Y(0)}`;
      return tSvg(214, `<text x="160" y="22" text-anchor="middle" class="tat s">${L('Velocitat 150 durant 2 segons', 'Velocidad 150 durante 2 segundos')}</text>
        <path d="M${X(0)} ${Y(0)}H${X(3.1)}M${X(0)} ${Y(0)}V${Y(21)}" stroke="#20306A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M${X(3.1) - 8} ${Y(0) - 5}l8 5l-8 5M${X(0) - 5} ${Y(21) + 8}l5 -8l5 8" fill="none" stroke="#20306A" stroke-width="2.5" stroke-linejoin="round"/>
        ${[0, 1, 2, 3].map(s => `<path d="M${X(s)} ${Y(0)}v6" stroke="#20306A" stroke-width="2"/><text x="${X(s)}" y="${Y(0) + 22}" text-anchor="middle" class="tat s">${s}</text>`).join('')}
        <text x="${X(3.1) + 4}" y="${Y(0) - 8}" class="tat s">s</text>
        ${[0, 10, 20].map(v => `<path d="M${X(0) - 6} ${Y(v)}h6" stroke="#20306A" stroke-width="2"/><text x="${X(0) - 10}" y="${Y(v) + 5}" text-anchor="end" class="tat s">${v}</text>`).join('')}
        <text x="${X(0) + 10}" y="${Y(21) + 2}" class="tat s">cm/s</text>
        <path d="${curve} Z" fill="#8B5CF6" fill-opacity=".22" ${tA(2.2, 'ta-fade')}/>
        ${drw('path', `d="${curve}" fill="none" stroke="#6D3FD8" stroke-width="4.5" stroke-linejoin="round"`, .05, .35)}
        <path d="M${X(2.35)} ${Y(15.6)}h-10" stroke="#6D3FD8" stroke-width="2" stroke-dasharray="3 3"/><text x="${X(2.42)}" y="${Y(15.6) + 5}" class="tat s" style="fill:#6D3FD8">15,6</text>
        <g ${tA(1.3)}><path d="M${X(.78)} ${Y(18.2)}Q${X(.3)} ${Y(19.5)} ${X(.12) + 3} ${Y(15.6) - 3}" fill="none" stroke="#F08A24" stroke-width="2.5" stroke-linecap="round"/><circle cx="${X(.12) + 2}" cy="${Y(15.6) - 2}" r="3.5" fill="#F08A24"/><text x="${X(.82)}" y="${Y(18) + 4}" class="tat s" style="fill:#C2610F">${L('inèrcia: ~0,1 s', 'inercia: ~0,1 s')}</text></g>
        <g ${tA(2.6)}><text x="${X(1.07)}" y="${Y(8.6)}" text-anchor="middle" class="tat s" style="fill:#4A2A9E">${L('àrea = distància', 'área = distancia')}</text><text x="${X(1.07)}" y="${Y(5.6)}" text-anchor="middle" class="tat b" style="fill:#4A2A9E">15,6 × 2 ≈ 31 cm</text></g>`);
    },
    // calibrar: el robot de veritat fa una mica menys; es mesura, es calcula i s'ajusta el temps
    k2cal() {
      const lane = (y, lab, cm, col, t) => `<text x="14" y="${y + 6}" class="tat s">${lab}</text>
        <rect x="104" y="${y - 14}" width="206" height="28" rx="8" fill="#F8F7F2" stroke="#E4E1D6" stroke-width="1.5"/>
        <g><animateMotion values="118,${y};118,${y};${118 + cm * 5.6},${y};${118 + cm * 5.6},${y}" keyTimes="0;${t};${t + .3};1" calcMode="linear" dur="5.5s" repeatCount="indefinite"/>${mq(0, 0, 90, .36)}</g>
        <path d="M118 ${y + 20}h${cm * 5.6}" stroke="${col}" stroke-width="3" ${tA(1.9 + t * 4, 'ta-fade')}/><text x="${118 + cm * 5.6}" y="${y + 36}" text-anchor="middle" class="tat s" style="fill:${col}" ${tA(1.9 + t * 4, 'ta-fade')}>${cm} cm</text>`;
      return tSvg(214, `${lane(30, L('Simulador', 'Simulador'), 31, '#2F5BEA', .05)}${lane(88, L('Robot real', 'Robot real'), 28, '#E2574C', .1)}
        <g ${tA(3)}><rect x="14" y="140" width="292" height="30" rx="10" fill="#FDEBEB"/><text x="160" y="161" text-anchor="middle" class="tat">${L('Mesura: 28 cm ÷ 2 s = 14 cm/s', 'Mide: 28 cm ÷ 2 s = 14 cm/s')}</text></g>
        <g ${tA(3.8)}><rect x="14" y="178" width="292" height="30" rx="10" fill="#E7F7EE"/><text x="160" y="199" text-anchor="middle" class="tat">${L('Ajusta: 31 ÷ 14 ≈ 2,2 s → 2200 ms', 'Ajusta: 31 ÷ 14 ≈ 2,2 s → 2200 ms')}</text></g>`);
    },
    // girar un angle: a velocitat 100, un motor endavant i l'altre enrere, 90° en 590 ms
    k2ang() {
      const cx = 96, cy = 110, R = 72;
      const pt = (a, r) => [cx + Math.sin(a * Math.PI / 180) * r, cy - Math.cos(a * Math.PI / 180) * r];
      const ticks = [0, 30, 60, 90, 120, 150, 180].map(a => { const [x1, y1] = pt(a, R - 6), [x2, y2] = pt(a, R + 4), [lx, ly] = pt(a, R + 22); return `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#56628A" stroke-width="2"/><text x="${lx}" y="${ly + 5}" text-anchor="middle" class="tat s">${a}°</text>`; }).join('');
      const wheel = (x, up) => `<g><path d="M${x} ${up ? 12 : -12}V${up ? -14 : 14}" stroke="${up ? '#2BD45A' : '#FF8A3D'}" stroke-width="4" stroke-linecap="round"/><path d="M${x - 5} ${up ? -8 : 8}l5 ${up ? -7 : 7}l5 ${up ? 7 : -7}" fill="none" stroke="${up ? '#2BD45A' : '#FF8A3D'}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const rows = [['30°', '197 ms'], ['60°', '393 ms'], ['90°', '590 ms'], ['120°', '787 ms']];
      return tSvg(214, `<path d="M${cx} ${cy - R}A${R} ${R} 0 1 1 ${cx} ${cy + R}" fill="none" stroke="#DCE4FA" stroke-width="10"/>${ticks}
        <path d="M${cx} ${cy - R}A${R} ${R} 0 0 1 ${cx + R} ${cy}" pathLength="1" fill="none" stroke="#8B5CF6" stroke-width="10" stroke-dasharray="1 1"><animate attributeName="stroke-dashoffset" values="1;1;0;0" keyTimes="0;.15;.5;1" dur="5.5s" repeatCount="indefinite"/></path>
        <g><animateTransform attributeName="transform" type="rotate" values="0 ${cx} ${cy};0 ${cx} ${cy};90 ${cx} ${cy};90 ${cx} ${cy}" keyTimes="0;.15;.5;1" dur="5.5s" repeatCount="indefinite"/>
          <g transform="translate(${cx} ${cy}) scale(.8)">${mq(0, 0, 0, 1)}<g transform="translate(-24 0)">${wheel(0, true)}</g><g transform="translate(24 0)">${wheel(0, false)}</g></g></g>
        <text x="252" y="24" text-anchor="middle" class="tat s">${L('a velocitat 100', 'a velocidad 100')}</text>
        ${rows.map(([a, ms], i) => `<g ${tA(.5 + i * .5, 'ta-in')}><rect x="196" y="${36 + i * 36}" width="114" height="30" rx="10" fill="#fff" stroke="${i === 2 ? '#8B5CF6' : '#DCE4FA'}" stroke-width="2.5"/><text x="210" y="${57 + i * 36}" class="tat b">${a}</text><text x="300" y="${57 + i * 36}" text-anchor="end" class="tat s">${ms}</text></g>`).join('')}
        <text x="252" y="196" text-anchor="middle" class="tat s" ${tA(2.6, 'ta-fade')}>${L('≈ 6,5 ms per grau', '≈ 6,5 ms por grado')}</text>`);
    },
    // la regla dels 360°: triangle, quadrat i hexàgon, cada gir és 360° ÷ costats
    k2poly() {
      const shapes = [[3, 120, 64], [4, 90, 50], [6, 60, 32]];
      const card = ([n, ang, s], i) => {
        const cx = 56 + i * 104, cy = 82, Rr = s / (2 * Math.sin(Math.PI / n));
        // vèrtexs: el primer costat és horitzontal a baix, el robot gira a l'esquerra (com als reptes)
        const v = Array.from({ length: n }, (_, k) => { const a = Math.PI / 2 + Math.PI / n + k * 2 * Math.PI / n; return [cx + Rr * Math.cos(a), cy + Rr * Math.sin(a)]; }).reverse();
        const d = 'M' + v.map(p => p.map(c => c.toFixed(1)).join(' ')).join('L') + 'Z';
        // gir exterior al segon vèrtex: prolongació del costat i arc
        const [a1, b1] = v[0], [a2, b2] = v[1], [a3, b3] = v[2], ux = (a2 - a1) / s, uy = (b2 - b1) / s, wx = (a3 - a2) / s, wy = (b3 - b2) / s, r = 13;
        const ext = `<path d="M${a2} ${b2}l${ux * 24} ${uy * 24}" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M${a2 + ux * r} ${b2 + uy * r}A${r} ${r} 0 0 0 ${a2 + wx * r} ${b2 + wy * r}" fill="none" stroke="#F08A24" stroke-width="3"/>`;
        const lab = [a2 + (ux + wx) * 20 + 8, b2 + (uy + wy) * 20 + 2];
        return `<g ${tA(.2 + i * .4, 'ta-in')}><rect x="${cx - 50}" y="10" width="100" height="166" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/></g>
          ${drw('path', `d="${d}" fill="#F1ECFF" stroke="#6D3FD8" stroke-width="3.5" stroke-linejoin="round"`, .1 + i * .08, .25 + i * .08)}
          <g ${tA(1.8 + i * .4)}>${ext}<text x="${lab[0]}" y="${lab[1]}" text-anchor="middle" class="tat s" style="fill:#C2610F">${ang}°</text></g>
          <g><animateMotion path="${d}" rotate="auto" dur="${2.2 + i * .6}s" repeatCount="indefinite"/>${mq(0, 0, 90, .2)}</g>
          <text x="${cx}" y="146" text-anchor="middle" class="tat b" ${tA(2.4 + i * .4, 'ta-fade')}>${n} × ${ang}°</text><text x="${cx}" y="166" text-anchor="middle" class="tat s" ${tA(2.8 + i * .4, 'ta-fade')}>= 360°</text>`;
      };
      return tSvg(214, `${shapes.map(card).join('')}<g ${tA(4)}><rect x="40" y="184" width="240" height="26" rx="13" fill="#6D3FD8"/><text x="160" y="202" text-anchor="middle" class="tat w s">${L('cada gir = 360° ÷ costats', 'cada giro = 360° ÷ lados')}</text></g>`);
    },
    // dues rodes a velocitats diferents: la de fora fa més camí i el robot gira cap a la lenta
    k2arc() {
      const arc = r => `M${190 - r} 204A${r} ${r} 0 0 1 190 ${204 - r}`;
      return tSvg(214, `<path d="${arc(120)}" fill="none" stroke="#DCE4FA" stroke-width="22" stroke-linecap="round"/>
        ${drw('path', `d="${arc(136)}" fill="none" stroke="#F08A24" stroke-width="4.5" stroke-linecap="round"`, .08, .6)}
        ${drw('path', `d="${arc(104)}" fill="none" stroke="#2F7BFF" stroke-width="4.5" stroke-linecap="round"`, .08, .6)}
        <g><animateMotion path="${arc(120)}" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.08;.6;1" calcMode="linear" dur="5.5s" repeatCount="indefinite"/>${mq(0, 0, 90, .5)}</g>
        <g ${tA(1)}><rect x="200" y="10" width="114" height="44" rx="10" fill="#FFF1E3" stroke="#F08A24" stroke-width="2"/><text x="257" y="28" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('esquerra 150:', 'izquierda 150:')}</text><text x="257" y="46" text-anchor="middle" class="tat s" style="fill:#B4501A">${L('més camí', 'más camino')}</text></g>
        <g ${tA(1.5)}><rect x="200" y="122" width="114" height="44" rx="10" fill="#E8F0FF" stroke="#2F7BFF" stroke-width="2"/><text x="257" y="140" text-anchor="middle" class="tat s" style="fill:#1C4FB8">${L('dreta 100:', 'derecha 100:')}</text><text x="257" y="158" text-anchor="middle" class="tat s" style="fill:#1C4FB8">${L('menys camí', 'menos camino')}</text></g>
        <g ${tA(3.4)}><rect x="200" y="174" width="114" height="34" rx="12" fill="#6D3FD8"/><text x="257" y="196" text-anchor="middle" class="tat w s">${L('gira a la dreta', 'gira a la derecha')}</text></g>`);
    },
    // la mida del cercle: com més semblants són les velocitats, més gran és el cercle
    k2rad() {
      const P = [40, 104], c = [['200 · 100', 8, '#EF5A5A'], ['150 · 100', 13, '#F08A24'], ['200 · 150', 19.5, '#1FA463'], ['120 · 100', 27, '#2F7BFF']];
      return tSvg(214, `${c.map(([lab, r, col], i) => { const R = r * 3; return `${drw('circle', `cx="${P[0] + R}" cy="${P[1]}" r="${R}" fill="none" stroke="${col}" stroke-width="3.5" transform="rotate(180 ${P[0] + R} ${P[1]})"`, .05 + i * .1, .15 + i * .1)}
          <g ${tA(.6 + i * .6, 'ta-in')}><circle cx="226" cy="${30 + i * 42}" r="7" fill="${col}"/><text x="240" y="${30 + i * 42 + 5}" class="tat b">${lab}</text><text x="240" y="${30 + i * 42 + 23}" class="tat s">Ø ${String(r * 2).replace('.', ',')} cm</text></g>`; }).join('')}
        <g transform="translate(${P[0]} ${P[1]})">${mq(0, 0, 0, .34)}</g>
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('Velocitats més semblants → cercle més gran', 'Velocidades más parecidas → círculo más grande')}</text>`);
    },
    // descompondre un dibuix: la casa d'un sol traç es converteix en una taula de trams i girs
    k2art() {
      const v = [[30, 182], [30, 112], [65, 51.4], [100, 112], [100, 182], [30, 182]];
      const d = 'M' + v.map(p => p.join(' ')).join('L');
      const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const off = [[-14, 0], [-12, -6], [12, -6], [14, 0], [0, 14]];
      const nums = v.slice(0, 5).map((p, i) => { const [mx, my] = mid(p, v[i + 1]); return `<g ${tA(.9 + i * .45)}><circle cx="${mx + off[i][0]}" cy="${my + off[i][1]}" r="10" fill="#6D3FD8"/><text x="${mx + off[i][0]}" y="${my + off[i][1] + 5}" text-anchor="middle" class="tat w s">${i + 1}</text></g>`; }).join('');
      const rows = [[1, L('tram 31 cm', 'tramo 31 cm'), '2000'], [0, L('gir 30°', 'giro 30°'), '197'], [2, L('tram 31 cm', 'tramo 31 cm'), '2000'], [0, L('gir 120°', 'giro 120°'), '787'], [3, L('tram 31 cm', 'tramo 31 cm'), '2000'], [-1, '…', '']];
      const badge = (n, x, y) => n > 0 ? `<circle cx="${x}" cy="${y}" r="9" fill="#6D3FD8"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s">${n}</text>` : n === 0 ? `<circle cx="${x}" cy="${y}" r="9" fill="#F08A24"/><path d="M${x - 3.5} ${y + 2.5}A4.5 4.5 0 1 1 ${x + 3} ${y + 3.2}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M${x + 4.5} ${y + .2}l-1.4 3.4l-3.4 -1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` : '';
      return tSvg(214, `<rect x="8" y="30" width="116" height="176" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>
        ${drw('path', `d="${d}" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`, .05, .5)}${nums}
        <text x="66" y="22" text-anchor="middle" class="tat s">${L('el dibuix', 'el dibujo')}</text><text x="210" y="22" text-anchor="middle" class="tat s">${L('el pla', 'el plan')}</text><text x="304" y="22" text-anchor="end" class="tat s" style="fill:#56628A">ms</text>
        ${rows.map(([n, a, b], i) => `<g ${tA(1.2 + i * .45, 'ta-in')}><rect x="134" y="${32 + i * 29}" width="178" height="24" rx="8" fill="${i % 2 ? '#FFF1E3' : '#F1ECFF'}"/>${badge(n, 148, 44 + i * 29)}<text x="${n < 0 ? 146 : 164}" y="${49 + i * 29}" class="tat s">${a}</text><text x="304" y="${49 + i * 29}" text-anchor="end" class="tat s" style="fill:#56628A">${b}</text></g>`).join('')}`);
    }
  };
})());
