/* Tech Robòtica · unitat 4 «Seguir la línia»: animacions de teoria (TANI), pròpies de Numi */
Object.assign(TANI, (() => {
  const HEART = (typeof RICONS !== 'undefined' ? RICONS.heart : '01010 11111 11111 01110 00100').replace(/ /g, '');
  // el Maqueen vist des de dalt, mirant amunt (cos de 40 × 44 a escala 1); on: quins sensors de línia veuen negre [L, M, R]
  const bot = (on = [0, 0, 0], extra = '', noDots) => `<g ${extra}>
    <ellipse cx="2" cy="4" rx="24" ry="25" fill="#0B1838" opacity=".16"/>
    <rect x="-27" y="-6" width="8" height="22" rx="3" fill="#1B1D22"/><rect x="19" y="-6" width="8" height="22" rx="3" fill="#1B1D22"/>
    <path d="M-27 -1h8M-27 5h8M-27 11h8M19 -1h8M19 5h8M19 11h8" stroke="#3A3E48" stroke-width="1.4"/>
    <path d="M-17 22h34q3 0 3 -3v-30q0 -9 -9 -9h-22q-9 0 -9 9v30q0 3 3 3z" fill="#152238" stroke="#F2B21B" stroke-width="2"/>
    <rect x="-12" y="-28" width="24" height="9" rx="2.5" fill="#1F5FBF"/><circle cx="-6" cy="-23.5" r="3.6" fill="#D7DCE6"/><circle cx="6" cy="-23.5" r="3.6" fill="#D7DCE6"/><circle cx="-6" cy="-23.5" r="1.8" fill="#5A6070"/><circle cx="6" cy="-23.5" r="1.8" fill="#5A6070"/>
    <rect x="-13" y="-10" width="26" height="21" rx="2.5" fill="#121212"/><rect x="-13" y="9" width="26" height="2.4" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-7.6 + c * 3.2}" y="${-7.6 + r * 3.2}" width="1.9" height="1.9" fill="${HEART[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
    ${noDots ? '' : [-1, 0, 1].map((s, i) => `<circle cx="${s * 7}" cy="-16" r="2.8" fill="${on[i] ? '#2EE6F0' : '#EEF2FA'}" stroke="#0B1838" stroke-width="1"/>`).join('')}</g>`;
  // el Maqueen de perfil (mirant a la dreta), amb el sensor de línia a sota del davant
  const side = (extra = '') => `<g ${extra}><rect x="-34" y="-16" width="62" height="8" rx="3" fill="#152238" stroke="#F2B21B" stroke-width="1.6"/>
    <rect x="-20" y="-34" width="5" height="18" rx="1.5" fill="#121212"/><rect x="-20" y="-34" width="5" height="3" fill="#C9A24A"/>
    <rect x="18" y="-26" width="10" height="10" rx="2" fill="#1F5FBF"/><rect x="28" y="-25" width="5" height="3.6" rx="1" fill="#D7DCE6"/><rect x="28" y="-20" width="5" height="3.6" rx="1" fill="#D7DCE6"/>
    <circle cx="-12" cy="-4" r="11" fill="#1B1D22"/><circle cx="-12" cy="-4" r="4" fill="#5A6070"/><rect x="16" y="-8" width="10" height="5" rx="1.5" fill="#2A2A2A"/><circle cx="23" cy="-3" r="1.6" fill="#FF6B6B"/></g>`;
  const pill = (x, y, w, txt, col, t) => `<g ${tA(t)}><rect x="${x - w / 2}" y="${y - 15}" width="${w}" height="30" rx="15" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w b">${txt}</text></g>`;
  return {
    // el sensor de línia: llum infraroja que rebota molt al blanc i gairebé gens al negre
    k4ir() {
      const panel = (x, black) => `<rect x="${x}" y="10" width="146" height="196" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="${x + 10}" y="128" width="126" height="22" rx="4" fill="${black ? '#15171C' : '#FBFAF4'}" stroke="${black ? '#15171C' : '#D9D5C6'}" stroke-width="2"/>
        <text x="${x + 73}" y="${black ? 143 : 143}" text-anchor="middle" class="tat s ${black ? 'w' : ''}">${black ? L('NEGRE', 'NEGRO') : L('BLANC', 'BLANCO')}</text>
        <rect x="${x + 46}" y="34" width="54" height="26" rx="6" fill="#152238" stroke="#F2B21B" stroke-width="2"/>
        <circle cx="${x + 61}" cy="60" r="5" fill="#FF6B6B"/><circle cx="${x + 85}" cy="60" r="5" fill="#2A2A2A" stroke="#9AA3B8" stroke-width="1.5"/>
        <path d="M${x + 61} 66L${x + 71} 126" stroke="#FF5A5A" stroke-width="4" stroke-dasharray="6 5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="22;0" dur=".8s" repeatCount="indefinite"/></path>
        <path d="M${x + 75} 126L${x + 85} 66" stroke="#FF5A5A" stroke-width="${black ? 1.5 : 6}" opacity="${black ? .3 : 1}" stroke-dasharray="6 5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="22;0" dur=".8s" repeatCount="indefinite"/></path>`;
      return tSvg(214, `${panel(8, false)}${panel(166, true)}
        <text x="81" y="28" text-anchor="middle" class="tat s">${L('emissor', 'emisor')} · ${L('receptor', 'receptor')}</text><text x="239" y="28" text-anchor="middle" class="tat s">${L('emissor', 'emisor')} · ${L('receptor', 'receptor')}</text>
        <text x="81" y="174" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('torna molta llum', 'vuelve mucha luz')}</text>
        <text x="239" y="174" text-anchor="middle" class="tat s" ${tA(1.6, 'ta-fade')}>${L('torna poca llum', 'vuelve poca luz')}</text>
        ${pill(81, 192, 70, '0', '#3D8BFF', 1.2)}${pill(239, 192, 70, '1', '#14204A', 2)}`);
    },
    // els tres sensors L, M i R: la cinta passa per sota de l'un o de l'altre
    k4lmr() {
      const kt = '0;.30;.36;.63;.69;.97;1', pos = '173.3 0;173.3 0;160 0;160 0;146.7 0;146.7 0;173.3 0';
      const dot = (i, vals) => `<circle cx="${(i - 1) * 13.3}" cy="-30.4" r="5" stroke="#0B1838" stroke-width="1.4"><animate attributeName="fill" values="${vals}" keyTimes="0;.33;.66" dur="6s" calcMode="discrete" repeatCount="indefinite"/></circle>`;
      const ph = (i, txt) => `<g opacity="0"><animate attributeName="opacity" values="${['1;0;0', '0;1;0', '0;0;1'][i]}" keyTimes="0;.33;.66" dur="6s" calcMode="discrete" repeatCount="indefinite"/>${txt}</g>`;
      const row = v => ['L', 'M', 'R'].map((k, i) => `<g transform="translate(${100 + i * 60} 170)"><rect x="-24" y="-22" width="48" height="40" rx="10" fill="${v[i] ? '#14204A' : '#fff'}" stroke="#14204A" stroke-width="2"/><text y="-4" text-anchor="middle" class="tat s ${v[i] ? 'w' : ''}">${k}</text><text y="13" text-anchor="middle" class="tat b ${v[i] ? 'w' : ''}">${v[i]}</text></g>`).join('');
      return tSvg(214, `<rect x="0" y="0" width="320" height="144" rx="16" fill="#FBFAF4"/><rect x="150" y="0" width="20" height="144" fill="#15171C"/>
        <g transform="translate(0 92)"><g><animateTransform attributeName="transform" type="translate" values="${pos}" keyTimes="${kt}" dur="6s" repeatCount="indefinite"/>
          <g transform="scale(1.9)">${bot([0, 0, 0], '', true)}</g>${dot(0, '#2EE6F0;#EEF2FA;#EEF2FA')}${dot(1, '#EEF2FA;#2EE6F0;#EEF2FA')}${dot(2, '#EEF2FA;#EEF2FA;#2EE6F0')}</g></g>
        ${ph(0, row([1, 0, 0]))}${ph(1, row([0, 1, 0]))}${ph(2, row([0, 0, 1]))}
        <text x="160" y="211" text-anchor="middle" class="tat s">${L('1 = negre · 0 = blanc', '1 = negro · 0 = blanco')}</text>`);
    },
    // el valor analògic (ADC) de 0 a 1023: blanc, color i negre
    k4adc() {
      const bars = [[L('blanc', 'blanco'), 90, '#FBFAF4', '#D9D5C6'], [L('color', 'color'), 360, '#3D8BFF', '#2F6FD6'], [L('negre', 'negro'), 900, '#15171C', '#15171C']];
      const Y0 = 168, k = 140 / 1023;
      return tSvg(214, `<path d="M58 ${Y0}h250" stroke="#9AA3B8" stroke-width="2"/><path d="M58 ${Y0}V20" stroke="#9AA3B8" stroke-width="2"/>
        <text x="50" y="${Y0 + 5}" text-anchor="end" class="tat s">0</text><text x="50" y="${Y0 - 1023 * k + 5}" text-anchor="end" class="tat s">1023</text>
        ${bars.map(([n, v, c, s], i) => { const x = 86 + i * 76, h = v * k; return `<rect x="${x}" y="${Y0 - h}" width="48" height="${h}" rx="6" fill="${c}" stroke="${s}" stroke-width="2"><animate attributeName="height" values="0;${h};${h}" keyTimes="0;.25;1" dur="5.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="y" values="${Y0};${Y0 - h};${Y0 - h}" keyTimes="0;.25;1" dur="5.5s" begin="${i * .5}s" repeatCount="indefinite"/></rect>
          <text x="${x + 24}" y="${Y0 - h - 8}" text-anchor="middle" class="tat b" ${tA(1 + i * .5, 'ta-fade')}>≈${v}</text><text x="${x + 24}" y="${Y0 + 22}" text-anchor="middle" class="tat s">${n}</text>`; }).join('')}
        <g ${tA(2.8, 'ta-fade')}><path d="M60 ${Y0 - 600 * k}h246" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="7 6"/><text x="64" y="${Y0 - 600 * k - 8}" class="tat s">${L('per sobre: negre (1)', 'por encima: negro (1)')}</text></g>`);
    },
    // fora de la taula no torna cap llum: el sensor llegeix 1, com si fos negre
    k4air() {
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#EEF3FF"/><rect x="10" y="132" width="196" height="16" rx="3" fill="#C98A4B"/><rect x="18" y="148" width="12" height="62" fill="#A86E35"/><rect x="186" y="148" width="12" height="62" fill="#A86E35"/>
        <g><animateTransform attributeName="transform" type="translate" values="50 123;190 123;190 123" keyTimes="0;.45;1" dur="5.5s" repeatCount="indefinite"/><g transform="scale(1.3)">${side()}</g>
          <path d="M30 3V34" stroke="#FF5A5A" stroke-width="3" stroke-dasharray="5 4"><animate attributeName="stroke-dashoffset" values="18;0" dur=".7s" repeatCount="indefinite"/></path></g>
        <g ${tA(2.6)}><circle cx="238" cy="84" r="16" fill="#EF5A5A"/><text x="238" y="90" text-anchor="middle" class="tat w b">!</text></g>
        <g ${tA(2.9, 'ta-in')}><rect x="214" y="150" width="96" height="52" rx="14" fill="#14204A"/><text x="262" y="172" text-anchor="middle" class="tat w s">${L('aire', 'aire')}</text><text x="262" y="193" text-anchor="middle" class="tat w b">M = 1</text></g>
        <text x="160" y="40" text-anchor="middle" class="tat b">${L('No hi ha terra: no torna llum', 'No hay suelo: no vuelve luz')}</text>`);
    },
    // seguir la vora amb un sensor: negre → gira a la dreta, blanc → gira a l'esquerra
    k4edge() {
      const tape = 'M14 152 C 60 150, 90 70, 170 70 S 280 120, 306 76';
      const wig = 'M10 160 L30 150 L50 158 L70 140 L88 136 L104 112 L120 106 L138 88 L156 86 L176 76 L196 80 L214 84 L232 94 L250 92 L268 86 L284 76 L300 76';
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#FBFAF4"/><path d="${tape}" fill="none" stroke="#15171C" stroke-width="22" stroke-linecap="round"/>
        <path d="${wig}" fill="none" stroke="#2F7BFF" stroke-width="2.5" stroke-dasharray="4 5" opacity=".75"/>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" path="${wig}"/><g transform="rotate(90) scale(.85)">${bot([0, 1, 0])}</g></g>
        <g ${tA(.6, 'ta-in')}><rect x="14" y="14" width="150" height="46" rx="12" fill="#14204A"/><text x="89" y="33" text-anchor="middle" class="tat w s">${L('M veu negre', 'M ve negro')}</text><text x="89" y="51" text-anchor="middle" class="tat w s">→ ${L('gira a la dreta', 'gira a la derecha')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="156" y="150" width="154" height="46" rx="12" fill="#fff" stroke="#14204A" stroke-width="2"/><text x="233" y="169" text-anchor="middle" class="tat s">${L('M veu blanc', 'M ve blanco')}</text><text x="233" y="187" text-anchor="middle" class="tat s">→ ${L("gira a l'esquerra", 'gira a la izquierda')}</text></g>`);
    },
    // dos sensors amb la línia al mig: recte, a l'esquerra o a la dreta
    k4two() {
      const P = [[0, 0, L('recte', 'recto'), 'M0 0V-26M-7 -19L0 -26L7 -19'], [1, 0, L('esquerra', 'izquierda'), 'M4 0Q2 -20 -14 -24M-12 -16L-14 -24L-6 -27'], [0, 1, L('dreta', 'derecha'), 'M-4 0Q-2 -20 14 -24M12 -16L14 -24L6 -27']];
      return tSvg(214, P.map(([l, r, n, arr], i) => { const x = 8 + i * 104, cx = x + 50, tx0 = cx + (l ? -26 : r ? 26 : 0);
        return `<g ${tA(.3 + i * .9, 'ta-in')}><rect x="${x}" y="8" width="100" height="198" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <rect x="${x + 6}" y="16" width="88" height="112" rx="10" fill="#FBFAF4"/><rect x="${tx0 - 17}" y="16" width="34" height="112" fill="#15171C"/>
          <rect x="${cx - 42}" y="58" width="84" height="70" rx="12" fill="#152238" stroke="#F2B21B" stroke-width="2.5" opacity=".92"/>
          ${[[-26, l, 'L'], [0, 0, 'M'], [26, r, 'R']].map(([d, on, k]) => `<circle cx="${cx + d}" cy="74" r="8" fill="${on ? '#2EE6F0' : k === 'M' ? '#5A6478' : '#EEF2FA'}" stroke="#0B1838" stroke-width="1.6"/><text x="${cx + d}" y="104" text-anchor="middle" class="tat s w">${k}</text>`).join('')}
          <text x="${cx}" y="150" text-anchor="middle" class="tat b">L ${l} · R ${r}</text>
          <g transform="translate(${cx} 196)"><path d="${arr}" fill="none" stroke="${i ? '#F08A24' : '#3CC47C'}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
          <text x="${cx}" y="168" text-anchor="middle" class="tat s">${n}</text></g>`; }).join(''));
    },
    // tres sensors: què vol dir cada combinació
    k4cross() {
      const R = [[[0, 1, 0], L('recte', 'recto'), '#3CC47C'], [[1, 0, 0], L("gira a l'esquerra", 'gira a la izquierda'), '#F08A24'], [[0, 0, 1], L('gira a la dreta', 'gira a la derecha'), '#F08A24'], [[1, 1, 1], L('cruïlla o estació!', '¡cruce o estación!'), '#EF5A5A'], [[0, 0, 0], L('perdut: no canviïs res', 'perdido: no cambies nada'), '#8B5CF6']];
      return tSvg(214, R.map(([v, t, c], i) => `<g ${tA(.3 + i * .55, 'ta-in')}><rect x="10" y="${6 + i * 41}" width="300" height="35" rx="12" fill="#fff" stroke="${c}" stroke-width="2.5"/>
        ${v.map((b, j) => `<circle cx="${34 + j * 22}" cy="${23.5 + i * 41}" r="8" fill="${b ? '#15171C' : '#fff'}" stroke="#15171C" stroke-width="2"/>`).join('')}
        <text x="112" y="${29 + i * 41}" class="tat s">${t}</text></g>`).join('')
        );
    },
    // el pla d'un projecte: entendre, dibuixar, programar a trossos, provar i millorar
    k4plan() {
      const st = [L('Entén la missió', 'Entiende la misión'), L('Dibuixa la pista', 'Dibuja la pista'), L('Programa a trossos', 'Programa a trozos'), L('Prova a totes les pistes', 'Prueba en todas las pistas'), L('Millora i torna a provar', 'Mejora y vuelve a probar')];
      return tSvg(220, `${st.map((s, i) => tCard(14, 6 + i * 42, 236, 34, i + 1, s, .3 + i * .55, ['#2F5BEA', '#2F5BEA', '#F08A24', '#3CC47C', '#8B5CF6'][i])).join('')}
        <g ${tA(3.2, 'ta-fade')}><path d="M256 197 C 300 197, 300 98, 256 98" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="7 6"/><path d="M262 90l-8 8l9 6" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g transform="translate(290 34) scale(.7)"><g ${tA(.2)}>${bot([0, 1, 0])}</g></g>`);
    }
  };
})());
