/* Numi Tech · Tech Spike · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
/* Tech Spike · unitat 1 «Missió Parc d'Atraccions» · animacions de teoria (TANI)
   Dibuixos propis de Numi (SVG de 320 d'ample), esquemàtics: no reprodueixen cap imatge ni instrucció de LEGO.
   spkrobot sentir, pensar i actuar        spksoft  les peces (maquinari) i el programa (programari)
   spkhub   les parts del hub              spkllum  què vol dir el color de la llum del hub
   spkmotor què decideix el programa       spkvolta una volta, i els dos sentits de gir
   spkvel   els 4 nivells de velocitat     spkseq   les ordres van en ordre
   spkmirall per què dos motors encarats no van rectes   spkroda una volta de roda = un tros de camí
   spkvoltes més voltes, més lluny         spksensor el sensor il·lumina i mira què torna
   spkmatriu la llum de 9 quadrats         spksi    cada color, una pila de blocs
   spkports el hub només té 2 ports        spkidea  idea, prova i millora */
Object.assign(TANI, (() => {
  const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-size="${o.fs || 12}" font-weight="${o.w || 700}" fill="${o.c || '#2A2140'}">${s}</text>`;
  const hub = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect width="58" height="44" rx="7" fill="#F4C430" stroke="#2A2140" stroke-width="2"/><rect x="3" y="3" width="52" height="13" rx="3" fill="#fff" stroke="#2A2140" stroke-width="1.2"/><circle cx="29" cy="9.5" r="3" fill="#2A2140"/></g>`;
  const spin = (cx, cy, dur, rev) => `<animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="${rev ? -360 : 360} ${cx} ${cy}" dur="${dur}s" repeatCount="indefinite"/>`;
  const wheel = (cx, cy, r, dur, rev) => `<g>${dur ? spin(cx, cy, dur, rev) : ''}<circle cx="${cx}" cy="${cy}" r="${r}" fill="#3AA6DD" stroke="#2A2140" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="${r * .55}" fill="#fff"/><rect x="${cx - 2}" y="${cy - r}" width="4" height="${r * .9}" fill="#2A2140"/></g>`;
  return {
    spkrobot() {
      const box = (x, col, a, b, t) => `<g ${tA(t)}><rect x="${x}" y="28" width="88" height="88" rx="14" fill="${col}"/>${txt(x + 44, 66, a, { fs: 15, c: '#fff' })}${txt(x + 44, 90, b, { fs: 10.5, c: '#fff', w: 600 })}</g>`;
      return tSvg(140, `${box(6, '#3FAE5A', L('Notar', 'Notar'), L('sensor', 'sensor'), .2)}${box(116, '#7A3E99', L('Pensar', 'Pensar'), L('programa', 'programa'), .9)}${box(226, '#1F74C4', L('Moure', 'Mover'), L('motor i llum', 'motor y luz'), 1.6)}
        <g ${tA(.6)}><path d="M97 72h15" stroke="#2A2140" stroke-width="3"/><path d="M112 72l-7 -5v10z" fill="#2A2140"/></g><g ${tA(1.3)}><path d="M207 72h15" stroke="#2A2140" stroke-width="3"/><path d="M222 72l-7 -5v10z" fill="#2A2140"/></g>`);
    },
    spksoft() {
      return tSvg(140, `<g ${tA(.2)}><rect x="14" y="20" width="130" height="100" rx="14" fill="#FFF3D6"/>${hub(50, 34, 1)}${txt(79, 98, L('Maquinari', 'Hardware'), { fs: 14 })}${txt(79, 112, L('el que pots tocar', 'lo que puedes tocar'), { fs: 9.5, w: 600 })}</g>
        <g ${tA(.9)}><rect x="176" y="20" width="130" height="100" rx="14" fill="#EFE7F7"/><rect x="198" y="34" width="28" height="18" rx="5" fill="#F4C430"/><rect x="224" y="34" width="28" height="18" rx="5" fill="#1F74C4"/><rect x="250" y="34" width="28" height="18" rx="5" fill="#EE5FC4"/>${txt(241, 98, L('Programari', 'Software'), { fs: 14 })}${txt(241, 112, L('les ordres que escrius', 'las órdenes que escribes'), { fs: 9.5, w: 600 })}</g>`);
    },
    spkhub() {
      const lab = (x, y, x2, y2, s, t, a = 'start') => `<g ${tA(t)}><line x1="${x2}" y1="${y2}" x2="${x}" y2="${y - 4}" stroke="#7A3E99" stroke-width="1.8"/><circle cx="${x2}" cy="${y2}" r="3.5" fill="#7A3E99"/>${txt(x, y + 8, s, { a, fs: 11.5 })}</g>`;
      return tSvg(170, `<rect x="104" y="52" width="112" height="84" rx="11" fill="#F4C430" stroke="#2A2140" stroke-width="2.4"/><rect x="110" y="58" width="100" height="34" rx="6" fill="#fff" stroke="#2A2140" stroke-width="1.6"/><rect x="146" y="66" width="28" height="18" rx="5" fill="#E9E5EF" stroke="#2A2140" stroke-width="1.6"/><rect x="116" y="58" width="16" height="8" fill="#6B7280"/><rect x="188" y="58" width="16" height="8" fill="#6B7280"/><rect x="151" y="124" width="18" height="6" rx="2" fill="#2A2140"/><circle cx="124" cy="112" r="5" fill="none" stroke="#2A2140" stroke-width="1.6"/><circle cx="196" cy="112" r="5" fill="none" stroke="#2A2140" stroke-width="1.6"/>
        ${lab(160, 18, 160, 74, L('Botó i llum', 'Botón y luz'), .2, 'middle')}${lab(8, 42, 124, 62, L('Port A', 'Puerto A'), .7)}${lab(250, 42, 196, 62, L('Port B', 'Puerto B'), 1.1)}${lab(4, 128, 151, 127, L('Cable USB', 'Cable USB'), 1.6)}${lab(232, 128, 196, 112, L('Forats per fixar', 'Agujeros para fijar'), 2, 'start')}`);
    },
    spkllum() {
      const row = (y, col, s, t, blink) => `<g ${tA(t)}><circle cx="30" cy="${y}" r="11" fill="${col}" stroke="#2A2140" stroke-width="1.6">${blink ? '<animate attributeName="opacity" values="1;.2;1" dur="1.1s" repeatCount="indefinite"/>' : ''}</circle>${txt(52, y + 4, s, { a: 'start', fs: 12.5 })}</g>`;
      return tSvg(168, `${row(22, '#2F8FE0', L('Blau: connectat sense fil', 'Azul: conectado sin cable'), .2)}${row(62, '#FFFFFF', L('Blanc: connectat amb cable', 'Blanco: conectado con cable'), .7)}${row(102, '#FFFFFF', L('Blanc que parpelleja: esperant', 'Blanco que parpadea: esperando'), 1.2, 1)}${row(142, '#F08A24', L('Taronja que parpelleja: poca bateria', 'Naranja que parpadea: poca batería'), 1.7, 1)}`);
    },
    spkmotor() {
      return tSvg(170, `${hub(16, 62)}<path d="M74 84 C100 84 104 96 128 96" fill="none" stroke="#6B7280" stroke-width="4" stroke-linecap="round"/>
        <rect x="128" y="74" width="44" height="44" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/><circle cx="150" cy="96" r="7" fill="#3AA6DD"/>
        <g>${spin(150, 96, 3)}<rect x="108" y="92" width="84" height="8" rx="4" fill="#7A3E99"/><circle cx="108" cy="96" r="9" fill="#F08A24"/><circle cx="192" cy="96" r="9" fill="#F08A24"/></g>
        <g ${tA(.3)}><rect x="214" y="22" width="96" height="36" rx="10" fill="#EFE7F7"/>${txt(262, 45, L('Cap on?', '¿Hacia dónde?'))}</g>
        <g ${tA(.9)}><rect x="214" y="68" width="96" height="36" rx="10" fill="#E4F0FB"/>${txt(262, 91, L('Com de ràpid?', '¿Cómo de rápido?'), { fs: 11 })}</g>
        <g ${tA(1.5)}><rect x="214" y="114" width="96" height="36" rx="10" fill="#FFF3D6"/>${txt(262, 137, L('Quantes voltes?', '¿Cuántas vueltas?'), { fs: 11 })}</g>`);
    },
    spkvolta() {
      const clock = (cx, rev, s) => `<circle cx="${cx}" cy="66" r="44" fill="#fff" stroke="#2A2140" stroke-width="2.4"/><circle cx="${cx}" cy="66" r="4" fill="#2A2140"/><g>${spin(cx, 66, 4, rev)}<line x1="${cx}" y1="66" x2="${cx}" y2="30" stroke="${rev ? '#C8372F' : '#1F74C4'}" stroke-width="5" stroke-linecap="round"/></g>${txt(cx, 132, s, { fs: 12 })}`;
      return tSvg(142, `${clock(84, false, L('Com el rellotge', 'Como el reloj'))}${clock(236, true, L('Al revés del rellotge', 'Al revés del reloj'))}`);
    },
    spkvel() {
      const bar = (x, h, dur, t, n) => `<g ${tA(t)}>${wheel(x, 40, 22, dur)}<rect x="${x - 14}" y="${118 - h}" width="28" height="${h}" rx="4" fill="#3FAE5A"/>${txt(x, 134, n, { fs: 12 })}</g>`;
      return tSvg(142, `${bar(46, 14, 8, .2, L('Molt lent', 'Muy lento'))}${bar(122, 28, 4, .6, L('Normal', 'Normal'))}${bar(198, 42, 1.8, 1, L('Ràpid', 'Rápido'))}${bar(274, 56, .9, 1.4, L('Màxim', 'Máximo'))}`);
    },
    spkseq() {
      const c = (y, n, s, col, t) => `<g ${tA(t)}><rect x="14" y="${y}" width="138" height="36" rx="9" fill="${col}"/><circle cx="33" cy="${y + 18}" r="11" fill="#fff"/>${txt(33, y + 22.5, n, { fs: 13 })}${txt(52, y + 22.5, s, { a: 'start', fs: 12.5, c: '#fff' })}</g>`;
      return tSvg(160, `${c(10, 1, L('Endavant', 'Adelante'), '#EE5FC4', .2)}${c(58, 2, L('Espera', 'Espera'), '#F0A020', .7)}${c(106, 3, L('Enrere', 'Atrás'), '#EE5FC4', 1.2)}
        <line x1="178" y1="112" x2="308" y2="112" stroke="#CFC6DC" stroke-width="4" stroke-linecap="round"/><line x1="290" y1="92" x2="290" y2="124" stroke="#C8372F" stroke-width="3" stroke-dasharray="4 3"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;92 0;92 0;0 0;0 0" keyTimes="0;.35;.55;.9;1" dur="5s" repeatCount="indefinite"/><rect x="180" y="84" width="34" height="18" rx="5" fill="#1F74C4"/><circle cx="188" cy="106" r="6" fill="#2A2140"/><circle cx="206" cy="106" r="6" fill="#2A2140"/></g>
        ${txt(243, 44, L('Primer una cosa,', 'Primero una cosa,'), { fs: 12 })}${txt(243, 62, L('després l’altra.', 'después la otra.'), { fs: 12 })}`);
    },
    spkmirall() {
      const top = (x, a, s, t, ok) => `<g ${tA(t)}><rect x="${x + 22}" y="18" width="50" height="70" rx="8" fill="#F4C430" stroke="#2A2140" stroke-width="2"/><rect x="${x + 6}" y="38" width="14" height="32" rx="3" fill="#3AA6DD" stroke="#2A2140" stroke-width="1.6"/><rect x="${x + 74}" y="38" width="14" height="32" rx="3" fill="#3AA6DD" stroke="#2A2140" stroke-width="1.6"/>
        <path d="M${x + 13} ${a ? 66 : 42}V${a ? 42 : 66}" stroke="#C8372F" stroke-width="3" /><path d="M${x + 13} ${a ? 36 : 72}l-5 ${a ? 8 : -8}h10z" fill="#C8372F"/><path d="M${x + 81} 66V42" stroke="#C8372F" stroke-width="3"/><path d="M${x + 81} 36l-5 8h10z" fill="#C8372F"/>
        ${txt(x + 47, 108, s, { fs: 11.5 })}<text x="${x + 47}" y="130" text-anchor="middle" font-size="16" font-weight="800" fill="${ok ? '#2E9E64' : '#C8372F'}">${ok ? L('Va recte', 'Va recto') : L('Dona voltes', 'Da vueltas')}</text></g>`;
      return tSvg(140, `${top(44, false, L('Blocs de motor', 'Bloques de motor'), .3, false)}${top(186, true, L('Blocs de moviment', 'Bloques de movimiento'), 1.2, true)}`);
    },
    spkroda() {
      return tSvg(130, `<line x1="14" y1="98" x2="306" y2="98" stroke="#2A2140" stroke-width="3"/><path d="M40 112H276" stroke="#3FAE5A" stroke-width="5" stroke-linecap="round"/>${txt(158, 126, L('1 volta de roda', '1 vuelta de rueda'), { fs: 12 })}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;236 0;236 0;0 0" keyTimes="0;.6;.85;1" dur="4.5s" repeatCount="indefinite"/><g>${spin(40, 62, 2.7)}<circle cx="40" cy="62" r="36" fill="#3AA6DD" stroke="#2A2140" stroke-width="2.4"/><circle cx="40" cy="62" r="18" fill="#fff"/><rect x="37.5" y="26" width="5" height="34" fill="#C8372F"/></g></g>`);
    },
    spkvoltes() {
      const row = (y, s, x2, t) => `<g ${tA(t)}>${txt(14, y + 5, s, { a: 'start', fs: 12 })}<line x1="74" y1="${y}" x2="306" y2="${y}" stroke="#E2DBEA" stroke-width="6" stroke-linecap="round"/><line x1="74" y1="${y}" x2="${x2}" y2="${y}" stroke="#EE5FC4" stroke-width="6" stroke-linecap="round"/><rect x="${x2 - 6}" y="${y - 12}" width="24" height="14" rx="4" fill="#7A3E99"/><circle cx="${x2}" cy="${y + 5}" r="4.5" fill="#2A2140"/><circle cx="${x2 + 12}" cy="${y + 5}" r="4.5" fill="#2A2140"/></g>`;
      return tSvg(140, `${row(30, L('1 volta', '1 vuelta'), 124, .2)}${row(72, L('2 voltes', '2 vueltas'), 174, .8)}${row(114, L('4 voltes', '4 vueltas'), 274, 1.4)}`);
    },
    spksensor() {
      return tSvg(150, `<rect x="16" y="46" width="70" height="60" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/><circle cx="74" cy="76" r="9" fill="#2A2140"/><circle cx="74" cy="76" r="4" fill="#fff"/>${txt(50, 126, L('Sensor', 'Sensor'), { fs: 12 })}
        <rect x="248" y="34" width="56" height="84" rx="6" fill="#F4C430" stroke="#2A2140" stroke-width="2"/>${txt(276, 136, L('Tiquet', 'Tique'), { fs: 12 })}
        <g ${tA(.3)}><path d="M88 66H240" stroke="#9CA3AF" stroke-width="4" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="24" to="0" dur=".9s" repeatCount="indefinite"/></path><path d="M240 66l-8 -5v10z" fill="#9CA3AF"/>${txt(164, 56, L('1. Hi posa llum', '1. Pone luz'), { fs: 11 })}</g>
        <g ${tA(1)}><path d="M240 88H96" stroke="#E0A100" stroke-width="4" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="24" dur=".9s" repeatCount="indefinite"/></path><path d="M96 88l8 -5v10z" fill="#E0A100"/>${txt(164, 108, L('2. Mira quin color torna', '2. Mira qué color vuelve'), { fs: 11 })}</g>`);
    },
    spkmatriu() {
      const C = ['#C8372F', '#F4C430', '#3FAE5A', '#2F8FE0', '#fff', '#EE5FC4', '#7A3E99', '#F08A24', '#3AA6DD'];
      return tSvg(150, `<rect x="92" y="10" width="136" height="130" rx="12" fill="#E9E5EF" stroke="#2A2140" stroke-width="2"/>${C.map((c, i) => `<rect ${tA(.1 + i * .16)} x="${106 + (i % 3) * 38}" y="${22 + Math.floor(i / 3) * 38}" width="32" height="32" rx="6" fill="${c}" stroke="#2A2140" stroke-width="1.4"/>`).join('')}`);
    },
    spksi() {
      const hat = (x, y, col) => `<path d="M${x} ${y + 8}a8 8 0 0 1 8 -8h38a6 6 0 0 1 6 6v3c5 0 5 12 0 12v3a6 6 0 0 1 -6 6h-38a8 8 0 0 1 -8 -8z" fill="#EFC12F" stroke="#B48E12" stroke-width="1.4"/><rect x="${x + 16}" y="${y + 8}" width="20" height="16" rx="3" fill="${col}" stroke="#2A2140" stroke-width="1.2"/>`;
      const light = (x, y, col) => `<rect x="${x}" y="${y}" width="58" height="32" rx="6" fill="#8B5CF6" stroke="#6D3FD8" stroke-width="1.4"/>${[0, 1, 2].map(i => [0, 1, 2].map(j => `<rect x="${x + 18 + i * 8}" y="${y + 5 + j * 8}" width="7" height="7" rx="1.5" fill="${col}"/>`).join('')).join('')}`;
      const line = (y, col, s, t) => `<g ${tA(t)}>${hat(20, y, col)}${light(76, y, col)}${txt(150, y + 21, s, { a: 'start', fs: 12.5 })}</g>`;
      return tSvg(160, `${line(10, '#F4C430', L('Veu groc: llum groga', 'Ve amarillo: luz amarilla'), .2)}${line(58, '#3FAE5A', L('Veu verd: llum verda', 'Ve verde: luz verde'), 1)}${line(106, '#C8372F', L('Veu vermell: llum vermella', 'Ve rojo: luz roja'), 1.8)}`);
    },
    spkports() {
      return tSvg(150, `<rect x="104" y="42" width="112" height="84" rx="10" fill="#F4C430" stroke="#2A2140" stroke-width="2.4"/><rect x="110" y="48" width="100" height="24" rx="5" fill="#fff" stroke="#2A2140" stroke-width="1.4"/>${txt(160, 65, 'Hub', { fs: 13 })}
        <g ${tA(.3)}><rect x="20" y="18" width="62" height="42" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/>${txt(51, 44, L('Motor', 'Motor'), { fs: 11 })}<path d="M82 40 C96 40 96 58 110 58" fill="none" stroke="#6B7280" stroke-width="4"/>${txt(96, 34, 'A', { fs: 12, c: '#7A3E99' })}</g>
        <g ${tA(.9)}><rect x="238" y="18" width="62" height="42" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/>${txt(269, 44, L('Sensor', 'Sensor'), { fs: 11 })}<path d="M238 40 C224 40 224 58 210 58" fill="none" stroke="#6B7280" stroke-width="4"/>${txt(224, 34, 'B', { fs: 12, c: '#7A3E99' })}</g>
        <g ${tA(1.6)}>${txt(160, 146, L('Només 2 cables: tria bé què hi connectes!', 'Solo 2 cables: ¡elige bien qué conectas!'), { fs: 12.5 })}</g>`);
    },
    spkidea() {
      const n = (x, s, col, t) => `<g ${tA(t)}><circle cx="${x}" cy="62" r="36" fill="${col}"/>${txt(x, 67, s, { fs: 13, c: '#fff' })}</g>`;
      return tSvg(130, `${n(58, L('Idea', 'Idea'), '#7A3E99', .2)}${n(160, L('Prova', 'Prueba'), '#1F74C4', .8)}${n(262, L('Millora', 'Mejora'), '#3FAE5A', 1.4)}
        <g ${tA(.6)}><path d="M98 62h18" stroke="#2A2140" stroke-width="3"/><path d="M116 62l-7 -5v10z" fill="#2A2140"/></g><g ${tA(1.2)}><path d="M200 62h18" stroke="#2A2140" stroke-width="3"/><path d="M218 62l-7 -5v10z" fill="#2A2140"/></g>
        <g ${tA(1.8)}><path d="M262 100 C262 124 58 124 58 100" fill="none" stroke="#2A2140" stroke-width="2.6" stroke-dasharray="5 4"/><path d="M58 100l-5 8h10z" fill="#2A2140"/></g>`);
    }
  };
})());
