/* Tech Robòtica · unitat 3 «Sensor de distància» · animacions de teoria (TANI)
   Dibuixos propis del Maqueen Lite V5: cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs vermells i el sensor
   d'ultrasons blau amb dos «ulls» platejats. Tot en SVG + SMIL (en bucle). */
{
  // el Maqueen vist des de dalt, mirant amunt (a = 90 → mira a la dreta, com a l'arena)
  const k3Top = (x, y, a = 90, s = 1, extra = '') => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" ${extra}>
    <ellipse cx="2" cy="4" rx="25" ry="26" fill="#0B1430" opacity=".18"/>
    <rect x="-28" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/><rect x="20" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/>
    ${[0, 1, 2, 3].map(i => `<rect x="-28" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/><rect x="20" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/>`).join('')}
    <path d="M-18 23h36q4 0 4 -4v-29q0 -12 -12 -12h-20q-12 0 -12 12v29q0 4 4 4z" fill="#152238" stroke="#F2B21B" stroke-width="2.2"/>
    <rect x="-14" y="-31" width="28" height="9" rx="2.5" fill="#1F5FBF"/>
    <circle cx="-7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="-7" cy="-26.5" r="2.2" fill="#5A6070"/><circle cx="7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="7" cy="-26.5" r="2.2" fill="#5A6070"/>
    <rect x="-14" y="-12" width="28" height="23" rx="3" fill="#121212"/><rect x="-14" y="8" width="28" height="3" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-8.6 + c * 3.6}" y="${-9.4 + r * 3.4}" width="1.8" height="1.8" fill="${'0101011111111110111000100'[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
  </g>`;
  // el Maqueen vist de costat, mirant a la dreta (x, y = punt de terra sota el centre)
  const k3Side = (x, y, s = 1, extra = '') => `<g transform="translate(${x} ${y}) scale(${s})" ${extra}>
    <ellipse cx="0" cy="1" rx="36" ry="4.5" fill="#0B1430" opacity=".2"/>
    <rect x="-29" y="-66" width="8" height="42" rx="2.5" fill="#121212"/>${[0, 1, 2, 3, 4].map(i => `<rect x="-31.5" y="${-62 + i * 7}" width="3" height="3.4" rx="1" fill="#FF3B30"/>`).join('')}
    <rect x="-34" y="-32" width="66" height="15" rx="6" fill="#152238" stroke="#F2B21B" stroke-width="2.4"/><path d="M-28 -25H24" stroke="#2E4166" stroke-width="2"/>
    <rect x="14" y="-56" width="6" height="26" rx="2" fill="#1F5FBF"/>
    <rect x="19" y="-54" width="12" height="9" rx="2.5" fill="#D7DCE6" stroke="#8C93A3" stroke-width="1.2"/><rect x="19" y="-42" width="12" height="9" rx="2.5" fill="#D7DCE6" stroke="#8C93A3" stroke-width="1.2"/>
    <circle cx="-13" cy="-14" r="14" fill="#1B1D22"/><circle cx="-13" cy="-14" r="10.5" fill="none" stroke="#3A3E48" stroke-width="2" stroke-dasharray="3 3"/><circle cx="-13" cy="-14" r="5" fill="#8A90A0"/>
    <circle cx="20" cy="-6" r="6" fill="#2A2E36"/><circle cx="18.5" cy="-7.5" r="2" fill="#6B7180"/>
  </g>`;
  // una caixa de fusta del moll (vista de costat)
  const k3Crate = (x, y, w, h) => `<g><rect x="${x + 3}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".14"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="url(#bwWood)" stroke="#8A5A2E" stroke-width="2.5"/>
    <path d="M${x + 4} ${y + 4}L${x + w - 4} ${y + h - 4}M${x + w - 4} ${y + 4}L${x + 4} ${y + h - 4}" stroke="#8A5A2E" stroke-width="2.5" opacity=".7"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="none" stroke="#8A5A2E" stroke-width="2.5"/></g>`;
  // caixa vista des de dalt
  const k3Box = (x, y, w, h) => `<g><rect x="${x + 2}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".16"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#D9A262" stroke="#8A5A2E" stroke-width="2.2"/><path d="M${x + 4} ${y + h / 2}H${x + w - 4}M${x + w / 2} ${y + 4}V${y + h - 4}" stroke="#A8743E" stroke-width="2"/></g>`;
  // números de la matriu (un darrere l'altre, de manera discreta)
  const k3Seq = (x, y, vals, D, cls = 'tat b', fill = '#FF3B30') => vals.map((v, i) => { const n = vals.length, k = i / n, k2 = (i + 1) / n;
    return `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}" fill="${fill}" style="fill:${fill}" opacity="${i ? 0 : 1}"><animate attributeName="opacity" values="${i ? '0;1;0;0' : '1;0;0;1'}" keyTimes="${i ? `0;${k.toFixed(3)};${k2.toFixed(3)};1` : `0;${k2.toFixed(3)};.999;1`}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>${v}</text>`; }).join('');

  Object.assign(TANI, {
    // l'eco: el sensor xiula (ultrasons), el so rebota a la caixa i torna; el temps que tarda diu la distància
    k3echo() {
      const D = 'dur="4.4s" repeatCount="indefinite"';
      const arc = (dir, i) => { const b = dir > 0 ? .04 + i * .07 : .42 + i * .07, e = b + .34;
        return `<path d="M0 -22q${dir * 10} 22 0 44" fill="none" stroke="${dir > 0 ? '#2EA8F0' : '#F08A24'}" stroke-width="4" stroke-linecap="round" opacity="0">
          <animateTransform attributeName="transform" type="translate" values="${dir > 0 ? '98 120;98 120;232 120;232 120' : '232 120;232 120;98 120;98 120'}" keyTimes="0;${b.toFixed(2)};${e.toFixed(2)};1" ${D}/>
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${b.toFixed(2)};${(b + .02).toFixed(2)};${(e - .03).toFixed(2)};${e.toFixed(2)};1" ${D}/></path>`; };
      return tSvg(214, `<rect x="0" y="168" width="320" height="46" fill="#C9D6F2"/><rect x="0" y="168" width="320" height="5" fill="#9FB2E6"/>
        ${k3Side(60, 170, 1.15)}${k3Crate(238, 76, 62, 92)}
        ${[0, 1, 2].map(i => arc(1, i)).join('')}${[0, 1, 2].map(i => arc(-1, i)).join('')}
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.04;.08;.36;.4" ${D}/><rect x="96" y="22" width="112" height="30" rx="15" fill="#2EA8F0"/><text x="152" y="42" text-anchor="middle" class="tat w s">${L('1. Xiulet!', '1. ¡Silbido!')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.38;.42;.6;.64" ${D}/><rect x="196" y="22" width="116" height="30" rx="15" fill="#8A5A2E"/><text x="254" y="42" text-anchor="middle" class="tat w s">${L('2. Rebota', '2. Rebota')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.6;.64;.8;.84" ${D}/><rect x="92" y="22" width="132" height="30" rx="15" fill="#F08A24"/><text x="158" y="42" text-anchor="middle" class="tat w s">${L("3. Torna l'eco", '3. Vuelve el eco')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.8;.84;.97;1" ${D}/><rect x="96" y="18" width="128" height="38" rx="12" fill="#14204A"/><text x="160" y="43" text-anchor="middle" class="tat b" style="fill:#FF5A50">40 cm</text></g>
        <path d="M98 150H236" stroke="#14204A" stroke-width="2" stroke-dasharray="5 5" opacity=".35"/>
        <text x="160" y="196" text-anchor="middle" class="tat s">${L("Envia un so i escolta quan torna l'eco", 'Envía un sonido y escucha cuándo vuelve el eco')}</text>`);
    },
    // del temps de l'eco als centímetres: el so fa uns 34 cm cada mil·lèsima de segon, i va i torna
    k3math() {
      const card = (y, n, t, d, c) => `<g ${tA(d, 'ta-in')}><rect x="14" y="${y}" width="292" height="30" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="34" cy="${y + 15}" r="11" fill="${c}"/><text x="34" y="${y + 20}" text-anchor="middle" class="tat w s">${n}</text><text x="54" y="${y + 20}" class="tat s">${t}</text></g>`;
      return tSvg(214, `<rect x="10" y="10" width="300" height="78" rx="16" fill="#EEF4FF" stroke="#C9D6F2" stroke-width="2"/>
        ${k3Side(44, 70, .62)}${k3Crate(266, 24, 34, 46)}
        <path d="M72 38H258" stroke="#2EA8F0" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.2, 'ta-draw')}/><path d="M250 31l9 7l-9 7" fill="none" stroke="#2EA8F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(.6, 'ta-fade')}/>
        <path d="M258 58H72" stroke="#F08A24" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.9, 'ta-draw')}/><path d="M80 51l-9 7l9 7" fill="none" stroke="#F08A24" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${tA(1.3, 'ta-fade')}/>
        <text x="165" y="30" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>${L('anada', 'ida')}</text><text x="165" y="80" text-anchor="middle" class="tat s" ${tA(1.1, 'ta-fade')}>${L('tornada', 'vuelta')}</text>
        ${card(98, 1, L("L'eco torna al cap de 2 ms", 'El eco vuelve a los 2 ms'), 1.6, '#2EA8F0')}
        ${card(134, 2, L('El so fa 34 cm cada ms: 68 cm', 'El sonido hace 34 cm cada ms: 68 cm'), 2.2, '#8B5CF6')}
        ${card(170, 3, L('Va i torna: 68 ÷ 2 = 34 cm', 'Va y vuelve: 68 ÷ 2 = 34 cm'), 2.8, '#F08A24')}`);
    },
    // el con del sensor és estret (uns ±8°): veu el que té just al davant; si no rep cap eco, diu 500
    k3cone() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const rot = `<animateTransform attributeName="transform" type="rotate" values="0 70 120;0 70 120;-34 70 120;-34 70 120;30 70 120;30 70 120;0 70 120" keyTimes="0;.18;.3;.5;.62;.86;1" ${D}/>`;
      const show = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${(a + .02).toFixed(2)};${b};${(b + .02).toFixed(2)};1" ${D}/>`;
      return tSvg(214, `<rect x="6" y="8" width="308" height="184" rx="18" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>
        ${[1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${6 + i * 38.5} 8V192" stroke="#14204A" opacity=".05"/>`).join('')}
        ${k3Box(236, 96, 44, 48)}${k3Box(196, 22, 30, 30)}
        <g>${rot}<path d="M92 120L292 92L292 148Z" fill="#2EE6F0" opacity=".28"/><path d="M92 120H292" stroke="#0EA0AA" stroke-width="2" stroke-dasharray="4 4"/>${k3Top(70, 120, 90, .9)}</g>
        <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;0;0;1" keyTimes="0;.18;.2;.5;.62;.86;.88" calcMode="discrete" ${D}/><rect x="140" y="160" width="94" height="28" rx="14" fill="#3CC47C"/><text x="187" y="179" text-anchor="middle" class="tat w s">${L('veu: 45 cm', 've: 45 cm')}</text></g>
        <g opacity="0">${show(.3, .5)}<rect x="140" y="160" width="94" height="28" rx="14" fill="#3CC47C"/><text x="187" y="179" text-anchor="middle" class="tat w s">${L('veu: 40 cm', 've: 40 cm')}</text></g>
        <g opacity="0">${show(.62, .86)}<rect x="122" y="160" width="130" height="28" rx="14" fill="#14204A"/><text x="187" y="179" text-anchor="middle" class="tat w s">500 = ${L('no veu res', 'no ve nada')}</text></g>
        <text x="20" y="34" class="tat s">${L('Mira just al davant', 'Mira justo delante')}</text><text x="20" y="52" class="tat s" style="fill:#5A6480">${L('de 2 a 400 cm', 'de 2 a 400 cm')}</text>`);
    },
    // «en iniciar» mesura una sola vegada; «per sempre» torna a mesurar sense parar
    k3loop() {
      const D = 4.8, DD = `dur="${D}s" repeatCount="indefinite"`;
      const lane = (x0, lab, col, hat, live) => `<g>
        <rect x="${x0}" y="10" width="150" height="194" rx="16" fill="${live ? '#EAF8F0' : '#FDF1E7'}" stroke="${live ? '#A8E0C0' : '#F4CDA8'}" stroke-width="2"/>
        <rect x="${x0 + 12}" y="20" width="126" height="30" rx="10" fill="${col}"/>${hat}<text x="${x0 + 44}" y="40" class="tat w s">${lab}</text>
        <rect x="${x0 + 8}" y="54" width="134" height="26" rx="8" fill="#7A5AF0"/><text x="${x0 + 75}" y="72" text-anchor="middle" class="tat w s" style="font-size:11.5px">${L('mostra la distància', 'muestra la distancia')}</text>
        <rect x="${x0 + 47}" y="88" width="56" height="44" rx="8" fill="#121212"/>
        ${live ? k3Seq(x0 + 75, 118, ['60', '48', '36', '24', '12'], D) : `<text x="${x0 + 75}" y="118" text-anchor="middle" class="tat b" style="fill:#FF3B30">60</text>`}
        <rect x="${x0 + 10}" y="166" width="130" height="6" rx="3" fill="#C9D6F2"/>${k3Box(x0 + 120, 140, 20, 30)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;60 0;60 0" keyTimes="0;.9;1" ${DD}/>${k3Top(x0 + 40, 154, 90, .42)}</g>
        <text x="${x0 + 75}" y="194" text-anchor="middle" class="tat s">${live ? L('sempre al dia!', '¡siempre al día!') : L('es queda en 60', 'se queda en 60')}</text></g>`;
      const play = x => `<path d="M${x} 28l11 7l-11 7z" fill="#fff"/>`, loop = x => `<path d="M${x + 12} 30a7 7 0 1 0 2 8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M${x + 15} 26v6h-6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      return tSvg(214, `${lane(6, L('en iniciar', 'al iniciar'), '#F08A24', play(20), false)}${lane(164, L('per sempre', 'para siempre'), '#1FA463', loop(170), true)}`);
    },
    // el bloc «si… si no» dins de «per sempre»: a cada volta, una pregunta; si la resposta és sí, s'atura; si és no, avança
    k3if() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const near = (a, b) => `values="${a};${a};${b};${b}" keyTimes="0;.62;.64;1" calcMode="discrete"`;
      return tSvg(222, `<rect x="6" y="6" width="308" height="132" rx="16" fill="#EEF4FF" stroke="#C9D6F2" stroke-width="2"/>
        <rect x="16" y="14" width="96" height="24" rx="8" fill="#1FA463"/><text x="64" y="31" text-anchor="middle" class="tat w s">${L('per sempre', 'para siempre')}</text>
        <path d="M74 62L130 36L186 62L130 88Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/>
        <text x="130" y="67" text-anchor="middle" class="tat s">${L('dist. < 15?', 'dist. < 15?')}</text>
        <path d="M186 62H206" stroke="#1FA463" stroke-width="4" stroke-linecap="round"/><text x="196" y="54" text-anchor="middle" class="tat s">${L('sí', 'sí')}</text>
        <rect x="206" y="46" width="98" height="32" rx="10" fill="#EF5A5A"><animate attributeName="opacity" ${near('.35', '1')} ${D}/></rect><text x="255" y="67" text-anchor="middle" class="tat w s">${L('atura', 'para')}</text>
        <path d="M130 88V100" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><text x="146" y="99" class="tat s">no</text>
        <rect x="78" y="100" width="104" height="30" rx="10" fill="#3D7BF4"><animate attributeName="opacity" ${near('1', '.35')} ${D}/></rect><text x="130" y="120" text-anchor="middle" class="tat w s">${L('endavant', 'adelante')}</text>
        <path d="M60 115H40V48H70" fill="none" stroke="#1FA463" stroke-width="3" stroke-dasharray="5 4" class="ta-dash"/>
        <circle r="7" fill="#fff" stroke="#14204A" stroke-width="3"><animateMotion path="M40 100V50H74L130 62V112H40Z" dur="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.62;.63;1" ${D}/></circle>
        <circle r="7" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="M40 100V50H74L130 62H255" dur="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.62;.63;1" ${D}/></circle>
        <rect x="6" y="146" width="308" height="70" rx="16" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>${k3Box(272, 152, 30, 58)}
        <path d="M244 150V214" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="4 4"/><text x="236" y="210" text-anchor="end" class="tat s" style="fill:#C0392B">15 cm</text>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;178 0;184 0;184 0" keyTimes="0;.62;.66;1" ${D}/>${k3Top(44, 181, 90, .62)}</g>`);
    },
    // la frenada: el robot no s'atura en sec (inèrcia) i, com més de pressa va, més s'acosta abans d'aturar-se
    k3brake() {
      const D = 'dur="5s" repeatCount="indefinite"';
      const row = (y, v, x1, c, lab) => `<rect x="8" y="${y}" width="304" height="66" rx="14" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>${k3Box(278, y + 8, 26, 50)}
        <path d="M232 ${y + 4}V${y + 62}" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="4 4"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;${x1 - c} 0;${x1} 0;${x1} 0" keyTimes="0;${v};${(v + .08).toFixed(2)};1" ${D}/>${k3Top(30, y + 33, 90, .6)}</g>
        <text x="16" y="${y + 18}" class="tat s">${lab}</text>`;
      return tSvg(214, `${row(8, .74, 190, 4, L('a poc a poc', 'despacio'))}${row(80, .4, 212, 22, L('molt de pressa', 'muy deprisa'))}
        <text x="160" y="170" text-anchor="middle" class="tat s">${L('Els dos veuen la caixa a la línia vermella…', 'Los dos ven la caja en la línea roja…')}</text>
        <text x="160" y="196" text-anchor="middle" class="tat b" ${tA(2.4, 'ta-fade')}>${L('…però el ràpid frena més tard!', '…¡pero el rápido frena más tarde!')}</text>`);
    },
    // esquivar: si veu una caixa a prop, gira, s'aparta i torna a la direcció d'abans
    k3dodge() {
      const D = 'dur="6s" repeatCount="indefinite"', path = 'M40 70H118Q132 70 132 84V128Q132 142 146 142H282';
      return tSvg(214, `<rect x="6" y="8" width="308" height="190" rx="18" fill="#F7F5EE" stroke="#E4DCC6" stroke-width="2"/>
        ${[1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${6 + i * 38.5} 8V198" stroke="#14204A" opacity=".05"/>`).join('')}
        ${k3Box(150, 44, 46, 52)}<rect x="270" y="30" width="38" height="146" rx="8" fill="#3CC47C" opacity=".35" stroke="#1FA463" stroke-width="2" stroke-dasharray="5 4"/>
        <text x="289" y="108" text-anchor="middle" class="tat s" style="font-size:11px">${L('META', 'META')}</text>
        <path d="${path}" fill="none" stroke="#2F5BEA" stroke-width="2.5" stroke-dasharray="3 5" opacity=".5"/>
        <g><animateMotion path="${path}" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;.05;.9;1" calcMode="linear" ${D}/>
          <path d="M18 0L70 -8L70 8Z" fill="#2EE6F0" opacity="0"><animate attributeName="opacity" values="0;0;.45;.45;0;0" keyTimes="0;.12;.14;.2;.22;1" ${D}/></path>${k3Top(0, 0, 90, .6)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.13;.15;.3;.32;1" ${D}/><rect x="40" y="18" width="104" height="28" rx="14" fill="#EF5A5A"/><text x="92" y="37" text-anchor="middle" class="tat w s">${L('Caixa a prop!', '¡Caja cerca!')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.3;.32;.62;.64" ${D}/><rect x="20" y="164" width="134" height="28" rx="14" fill="#3D7BF4"/><text x="87" y="183" text-anchor="middle" class="tat w s">${L("gira i aparta't", 'gira y apártate')}</text></g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.64;.66;.95;1" ${D}/><rect x="160" y="164" width="104" height="28" rx="14" fill="#1FA463"/><text x="212" y="183" text-anchor="middle" class="tat w s">${L('i continua', 'y sigue')}</text></g>`);
    },
    // aparcar: lluny, de pressa; a prop, a poc a poc; molt a prop, s'atura (com el sensor d'aparcament d'un cotxe)
    k3park() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const beep = (x, y, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;0;1;0;1;0;0" keyTimes="0;${a};${(a + (b - a) * .15).toFixed(3)};${(a + (b - a) * .3).toFixed(3)};${(a + (b - a) * .45).toFixed(3)};${(a + (b - a) * .6).toFixed(3)};${(a + (b - a) * .75).toFixed(3)};${b};1" ${D}/><path d="M${x} ${y}q6 8 0 16M${x + 7} ${y - 5}q9 13 0 26" fill="none" stroke="#F2B21B" stroke-width="3" stroke-linecap="round"/></g>`;
      return tSvg(214, `<rect x="6" y="8" width="308" height="122" rx="16" fill="#E9EDF5" stroke="#C9D2E4" stroke-width="2"/>
        <rect x="20" y="42" width="150" height="56" fill="#3CC47C" opacity=".22"/><rect x="170" y="42" width="84" height="56" fill="#FFC531" opacity=".32"/><rect x="254" y="42" width="30" height="56" fill="#EF5A5A" opacity=".3"/>
        <path d="M20 40H290M20 100H290" stroke="#fff" stroke-width="4"/>${k3Box(288, 34, 20, 72)}
        <text x="95" y="30" text-anchor="middle" class="tat s" style="fill:#1A7F4B">${L('lluny', 'lejos')}</text><text x="212" y="30" text-anchor="middle" class="tat s" style="fill:#9A6B00">${L('a prop', 'cerca')}</text><text x="270" y="122" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('stop!', '¡stop!')}</text>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;140 0;222 0;222 0" keyTimes="0;.3;.78;1" ${D}/>${k3Top(40, 70, 90, .7)}</g>
        ${beep(240, 50, .32, .78)}
        ${tCard(14, 140, 140, 32, 1, L('lluny: 200', 'lejos: 200'), .2, '#1FA463')}${tCard(166, 140, 140, 32, 2, L('a prop: 70', 'cerca: 70'), 1.6, '#E0A000')}
        ${tCard(60, 178, 200, 32, 3, L('molt a prop: atura', 'muy cerca: para'), 3.6, '#EF5A5A')}`);
    }
  });
}
