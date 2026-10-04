/* Tech Creadors · unitat 4 «Coordenades» · animacions de teoria (TANI)
   L'escenari com un mapa (x i y), anar a un punt, lliscar, canviar x i y, la direcció, rebotar i tocar un color. */
Object.assign(TANI, (() => {
  // un personatge de l'escenari dibuixat dins l'animació (centrat a x, y i de w d'ample)
  const spr = (art, c, x, y, w) => typeof STG_ART !== 'undefined' && STG_ART[art] ? STG_ART[art].svg(c).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : `<circle cx="${x}" cy="${y}" r="${w / 3}" fill="#8B5CF6"/>`;
  // un bloc com els de l'editor (una píndola de color amb text blanc)
  const pill = (x, y, w, txt, col = '#3D7BF4', extra = '') => `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="30" rx="10" fill="${col}"/><rect x="${x}" y="${y + 24}" width="${w}" height="6" rx="3" fill="#000" opacity=".14"/><text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
  // opacitat per trams: el tram i de n es veu (animació discreta)
  const seg = (i, n, D, on = [i]) => `<animate attributeName="opacity" values="${Array.from({ length: n }, (_, k) => on.includes(k) ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>`;
  // l'escenari en petit: rectangle, quadrícula i eixos (escala s; el (0, 0) a cx, cy)
  const stage = (cx, cy, s, o = {}) => { const w = 480 * s, h = 360 * s, x0 = cx - w / 2, y0 = cy - h / 2, st = 60 * s;
    let g = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="10" fill="${o.bg || '#F7F9FF'}" stroke="#B9C7EE" stroke-width="2"/>`;
    for (let k = 1; k < 8; k++) g += `<path d="M${x0 + k * st} ${y0 + 2}V${y0 + h - 2}" stroke="#E2E8F8" stroke-width="1.2"/>`;
    for (let k = 1; k < 6; k++) g += `<path d="M${x0 + 2} ${y0 + k * st}H${x0 + w - 2}" stroke="#E2E8F8" stroke-width="1.2"/>`;
    if (o.axes !== false) g += `<path d="M${x0 + 4} ${cy}H${x0 + w - 6}" stroke="#E0533F" stroke-width="2.4"/><path d="M${x0 + w - 12} ${cy - 5}l7 5l-7 5" fill="none" stroke="#E0533F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx} ${y0 + h - 4}V${y0 + 6}" stroke="#1FA463" stroke-width="2.4"/><path d="M${cx - 5} ${y0 + 12}l5 -7l5 7" fill="none" stroke="#1FA463" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#14204A"/>`;
    return g; };
  return {
    // l'escenari és un mapa: cada lloc té dos números, x (esquerra-dreta) i y (avall-amunt)
    g4grid() {
      const D = 'dur="8s" repeatCount="indefinite"', cx = 160, cy = 102, s = .5;
      const P1 = [120 * s, -60 * s], P2 = [-180 * s, 90 * s];
      const kt = '0;.1;.25;.5;.62;.9;1', mv = `values="0 0;0 0;${P1[0]} ${P1[1]};${P1[0]} ${P1[1]};${P2[0]} ${P2[1]};${P2[0]} ${P2[1]};0 0" keyTimes="${kt}"`;
      const guide = (P, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .03};${b};${b + .02};1" ${D}/>
        <path d="M${cx + P[0]} ${cy + P[1]}V${cy}" stroke="#1FA463" stroke-width="2.4" stroke-dasharray="5 4"/><path d="M${cx + P[0]} ${cy + P[1]}H${cx}" stroke="#E0533F" stroke-width="2.4" stroke-dasharray="5 4"/>
        <circle cx="${cx + P[0]}" cy="${cy}" r="4" fill="#E0533F"/><circle cx="${cx}" cy="${cy + P[1]}" r="4" fill="#1FA463"/></g>`;
      const lab = (txtx, txty, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .03};${b};${b + .02};1" ${D}/>
        <rect x="70" y="206" width="180" height="28" rx="14" fill="#14204A"/><text x="160" y="225" text-anchor="middle" class="tat w b"><tspan fill="#FF9C8F">x: ${txtx}</tspan>   <tspan fill="#8EE6B4">y: ${txty}</tspan></text></g>`;
      return tSvg(240, `${stage(cx, cy, s)}
        <text x="${cx + 124}" y="${cy + 18}" text-anchor="end" class="tat s" fill="#E0533F">x</text><text x="${cx + 10}" y="${cy - 74}" class="tat s" fill="#1FA463">y</text>
        <text x="${cx - 116}" y="${cy + 18}" class="tat s">-240</text><text x="${cx + 116}" y="${cy - 6}" text-anchor="end" class="tat s">240</text>
        <text x="${cx - 6}" y="${cy - 76}" text-anchor="end" class="tat s">180</text><text x="${cx - 6}" y="${cy + 86}" text-anchor="end" class="tat s">-180</text>
        ${guide(P1, .25, .5)}${guide(P2, .62, .9)}
        <g><animateTransform attributeName="transform" type="translate" ${mv} ${D}/>${spr('estrella', 0, cx, cy, 30)}</g>
        <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.1;.11;.98;1" ${D}/><rect x="96" y="206" width="128" height="28" rx="14" fill="#14204A"/><text x="160" y="225" text-anchor="middle" class="tat w b">(0, 0) = ${L('el centre', 'el centro')}</text></g>
        ${lab(120, 60, .25, .5)}${lab(-180, -90, .62, .9)}`);
    },
    // x: esquerra-dreta; y: avall-amunt (els números negatius són a l'esquerra i a baix)
    g4xy() {
      const D = 'dur="7s" repeatCount="indefinite"';
      const xs = [-240, -120, 0, 120, 240], X = v => 105 + v / 240 * 78, ys = [180, 0, -180, 0], Y = v => 116 - v / 180 * 66;
      const xMv = `values="${xs.concat([0]).map(v => `${X(v) - 105} 0`).join(';')}" keyTimes="0;.18;.36;.54;.72;.9" calcMode="discrete"`;
      const yMv = `values="${ys.map(v => `0 ${Y(v) - 116}`).join(';')}" keyTimes="0;.25;.5;.75" calcMode="discrete"`;
      return tSvg(214, `<rect x="8" y="10" width="196" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="214" y="10" width="98" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="106" y="38" text-anchor="middle" class="tat b" fill="#E0533F">x</text><text x="106" y="58" text-anchor="middle" class="tat s">${L('esquerra ↔ dreta', 'izquierda ↔ derecha')}</text>
        <path d="M22 130H192" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/>${xs.map(v => `<path d="M${X(v)} 123v14" stroke="#E0533F" stroke-width="2.4"/><text x="${X(v)}" y="156" text-anchor="middle" class="tat s">${v}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" ${xMv} ${D}/>${spr('numi', 1, 105, 100, 40)}</g>
        ${xs.map((v, i) => `<g opacity="0">${seg(i, 6, D)}<text x="106" y="188" text-anchor="middle" class="tat b">x = ${v}</text></g>`).join('')}<g opacity="0">${seg(5, 6, D)}<text x="106" y="188" text-anchor="middle" class="tat b">x = 0</text></g>
        <text x="263" y="38" text-anchor="middle" class="tat b" fill="#1FA463">y</text>
        <path d="M244 50V182" stroke="#1FA463" stroke-width="3" stroke-linecap="round"/>${[180, 0, -180].map(v => `<path d="M237 ${Y(v)}h14" stroke="#1FA463" stroke-width="2.4"/><text x="300" y="${Y(v) + 5}" text-anchor="end" class="tat s">${v}</text>`).join('')}
        <text x="300" y="74" text-anchor="end" class="tat s" fill="#1FA463">${L('amunt', 'arriba')}</text><text x="300" y="168" text-anchor="end" class="tat s" fill="#1FA463">${L('avall', 'abajo')}</text>
        <g><animateTransform attributeName="transform" type="translate" ${yMv} ${D}/>${spr('estrella', 0, 244, 116, 26)}</g>`);
    },
    // «ves a» salta d'un cop; «llisca» hi va a poc a poc i es veu el camí
    g4goto() {
      const D = 'dur="5s" repeatCount="indefinite"';
      const lane = (y, t) => `<rect x="10" y="${y}" width="300" height="88" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="24" y="${y + 24}" class="tat s">${t}</text>
        <circle cx="62" cy="${y + 58}" r="5" fill="#C9D3EE"/><path d="M262 ${y + 70}v-24l16 6l-16 6" fill="#EF5A5A" stroke="#8E1E14" stroke-width="1.6"/>`;
      return tSvg(214, `${lane(10, '')}${pill(22, 16, 150, L('ves a x: 120 y: 0', 've a x: 120 y: 0'))}
        <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.3;.31;.95;1" ${D}/>${spr('numi', 0, 62, 66, 40)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.33;.34;.95;1" ${D}/>${spr('numi', 1, 252, 66, 40)}<text x="196" y="72" text-anchor="middle" class="tat b" fill="#F08A24">${L('zas!', '¡zas!')}</text></g>
        ${lane(116, '')}${pill(22, 122, 244, L('llisca en 2 s fins a x: 120 y: 0', 'desliza en 2 s hasta x: 120 y: 0'))}
        <path d="M62 174H252" stroke="#3D7BF4" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round" pathLength="190" stroke-dashoffset="190"><animate attributeName="stroke-dashoffset" values="190;190;0;0;190" keyTimes="0;.2;.75;.95;1" ${D}/></path>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;190 0;190 0;0 0" keyTimes="0;.2;.75;.95;1" ${D}/>${spr('numi', 0, 62, 172, 40)}</g>`);
    },
    // «canvia x en 10» suma 10 a la x on ja és el personatge (i -10 el porta cap a l'esquerra)
    g4chx() {
      const D = 'dur="7s" repeatCount="indefinite"', X = v => 50 + v * 4.4;
      const pos = [0, 10, 20, 30, 40, 30, 20], n = pos.length;
      return tSvg(214, `<rect x="10" y="10" width="300" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <path d="M34 150H${X(50)}" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/>${[0, 10, 20, 30, 40, 50].map(v => `<path d="M${X(v)} 143v14" stroke="#E0533F" stroke-width="2.4"/><text x="${X(v)}" y="176" text-anchor="middle" class="tat s">${v}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="${pos.map(v => `${X(v) - X(0)} 0`).join(';')}" keyTimes="${pos.map((_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>${spr('numi', 1, X(0), 118, 44)}</g>
        ${pos.map((v, i) => i ? `<path d="M${X(pos[i - 1])} 92Q${(X(pos[i - 1]) + X(v)) / 2} 70 ${X(v)} 92" fill="none" stroke="${v > pos[i - 1] ? '#3D7BF4' : '#F08A24'}" stroke-width="2.6" stroke-dasharray="4 4" opacity="0">${seg(i, n, D)}</path>` : '').join('')}
        <g>${seg(0, n, D, [1, 2, 3, 4])}${pill(20, 22, 160, L('canvia x en 10', 'cambia x en 10'))}</g>
        <g opacity="0">${seg(0, n, D, [5, 6])}${pill(20, 22, 160, L('canvia x en -10', 'cambia x en -10'), '#F08A24')}</g>
        ${pos.map((v, i) => `<g opacity="0">${seg(i, n, D)}<text x="290" y="42" text-anchor="end" class="tat b">x = ${v}</text></g>`).join('')}
        <text x="160" y="196" text-anchor="middle" class="tat s">${L('Suma a la x que ja tenia', 'Suma a la x que ya tenía')}</text>`);
    },
    // la direcció: 90 dreta, 0 amunt, -90 esquerra, 180 avall
    g4dir() {
      const D = 'dur="8s" repeatCount="indefinite"', cx = 104, cy = 110, R = 72;
      const dirs = [[90, L('dreta', 'derecha')], [0, L('amunt', 'arriba')], [-90, L('esquerra', 'izquierda')], [180, L('avall', 'abajo')]], n = dirs.length;
      const rot = `values="0;0;-90;-90;-180;-180;-270;-270;-360" keyTimes="0;.2;.25;.45;.5;.7;.75;.95;1"`;
      return tSvg(220, `<circle cx="${cx}" cy="${cy}" r="${R + 22}" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="${cx}" cy="${cy}" r="${R - 6}" fill="#F3F6FF" stroke="#C9D3EE" stroke-width="2" stroke-dasharray="4 6"/>
        <text x="${cx}" y="${cy - R - 2}" text-anchor="middle" class="tat b">0</text><text x="${cx + R + 6}" y="${cy + 6}" class="tat b">90</text><text x="${cx}" y="${cy + R + 14}" text-anchor="middle" class="tat b">180</text><text x="${cx - R - 6}" y="${cy + 6}" text-anchor="end" class="tat b">-90</text>
        <g transform="translate(${cx} ${cy})"><g><animateTransform attributeName="transform" type="rotate" ${rot} ${D}/>
          <path d="M-8 -12H26V-26L56 0L26 26V12H-8Z" fill="#FFC531" stroke="#B46A00" stroke-width="3" stroke-linejoin="round"/></g><circle r="9" fill="#14204A"/></g>
        ${dirs.map(([d, t], i) => `<g opacity="0">${seg(i, n, D)}${pill(206, 64, 104, `${L('apunta', 'apunta')} ${d}`)}<text x="258" y="126" text-anchor="middle" class="tat b">= ${t}</text></g>`).join('')}
        <text x="258" y="166" text-anchor="middle" class="tat s">${L('Els graus diuen', 'Los grados dicen')}</text><text x="258" y="184" text-anchor="middle" class="tat s">${L('cap on mira', 'hacia dónde mira')}</text>`);
    },
    // rebotar: quan la pilota toca una vora, canvia de direcció i continua
    g4bounce() {
      const D = 'dur="6s" repeatCount="indefinite"', path = 'M60 170L200 30L270 100L190 180L50 40', hits = [[200, 30, .326], [270, 100, .488], [190, 180, .674], [50, 40, .99]];
      return tSvg(214, `<rect x="40" y="20" width="240" height="170" rx="12" fill="#E8F6FF" stroke="#7FB8E8" stroke-width="3"/>
        <path d="${path}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="3 7" stroke-linecap="round" opacity=".55"/>
        ${hits.map(([x, y, t]) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;${(t - .01).toFixed(3)};${t.toFixed(3)};${Math.min(.999, t + .1).toFixed(3)};1" ${D}/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="#F08A24" stroke-width="3"/><text x="${x < 100 ? x + 22 : x > 240 ? x - 22 : x}" y="${y < 60 ? y + 30 : y > 150 ? y - 20 : y + 5}" text-anchor="${x < 100 ? 'start' : x > 240 ? 'end' : 'middle'}" class="tat b" fill="#F08A24">boing!</text></g>`).join('')}
        <g>${spr('pilota', 0, 0, 0, 24)}<animateMotion path="${path}" ${D}/></g>
        <text x="160" y="208" text-anchor="middle" class="tat s">${L('si toques la vora, rebota', 'si tocas el borde, rebota')}</text>`);
    },
    // tocar un color: si en Numi toca la paret blava, torna a l'inici; la sortida és verda
    g4color() {
      const D = 'dur="8s" repeatCount="indefinite"';
      const mv = 'values="0 0;0 0;62 0;62 0;0 0;0 0;0 70;150 70;150 70;0 0" keyTimes="0;.06;.3;.36;.37;.46;.6;.85;.97;1"';
      return tSvg(214, `<rect x="10" y="10" width="300" height="194" rx="16" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="10" y="10" width="300" height="22" rx="8" fill="#3D7BF4"/><rect x="10" y="182" width="300" height="22" rx="8" fill="#3D7BF4"/><rect x="118" y="30" width="24" height="98" rx="6" fill="#3D7BF4"/>
        <rect x="236" y="120" width="64" height="58" rx="8" fill="#3CC47C"/><text x="268" y="154" text-anchor="middle" class="tat w s">${L('sortida', 'salida')}</text>
        <circle cx="66" cy="76" r="20" fill="none" stroke="#9AA9D6" stroke-width="2" stroke-dasharray="4 4"/><text x="66" y="112" text-anchor="middle" class="tat s">${L('inici', 'inicio')}</text>
        <rect x="116" y="28" width="28" height="102" rx="8" fill="none" stroke="#FFC531" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.29;.3;.36;.37;1" ${D}/></rect>
        <g><animateTransform attributeName="transform" type="translate" ${mv} ${D}/>${spr('numi', 0, 66, 76, 38)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.31;.45;.46;1" ${D}/>${pill(150, 44, 152, L('ha tocat el blau', 'ha tocado el azul'), '#F2B21B')}${pill(150, 80, 152, L("ves a l'inici", 've al inicio'))}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.85;.86;.97;1" ${D}/><text x="200" y="104" text-anchor="middle" class="tat b" fill="#1FA463">${L('Has sortit!', '¡Has salido!')}</text></g>`);
    },
    // un escenari en petit amb tres punts (A, B, C) per a les preguntes «on anirà?»
    g4pts(set = 1) {
      const S = { 1: [['A', 150, 100], ['B', -150, 100], ['C', 150, -100]], 2: [['A', -150, -100], ['B', 0, 120], ['C', 150, -100]], 3: [['A', 175, -115], ['B', -175, 100], ['C', 25, 100]] }[set] || [];
      const cx = 160, cy = 108, s = .56, col = { A: '#3D7BF4', B: '#E5489A', C: '#F08A24' };
      return tSvg(214, `${stage(cx, cy, s)}<text x="${cx + 128}" y="${cy + 18}" text-anchor="end" class="tat s" fill="#E0533F">x</text><text x="${cx + 10}" y="${cy - 82}" class="tat s" fill="#1FA463">y</text>
        ${S.map(([n, x, y]) => `<g><circle cx="${cx + x * s}" cy="${cy - y * s}" r="15" fill="${col[n]}" stroke="#fff" stroke-width="3"/><text x="${cx + x * s}" y="${cy - y * s + 6}" text-anchor="middle" class="tat w b">${n}</text></g>`).join('')}
        <text x="${cx + 8}" y="${cy + 20}" class="tat s">(0, 0)</text>`);
    }
  };
})());
