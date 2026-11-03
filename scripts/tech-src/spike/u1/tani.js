/* Tech Spike · unitat 1 «Missió Parc d'Atraccions» · animacions de teoria (TANI)
   Dibuixos propis de Numi (SVG de 320 d'ample), esquemàtics: no reprodueixen cap imatge ni instrucció de LEGO.
   spkmotor el motor obeeix: sentit, velocitat i temps      spkports el hub només té 2 ports
   spkseq   un programa és una llista d'ordres en ordre     spktemps més temps de motor, més lluny
   spksi    si veu aquest color, fes això                   spkidea  idea, prova i millora */
Object.assign(TANI, (() => {
  const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-size="${o.fs || 12}" font-weight="${o.w || 700}" fill="${o.c || '#2A2140'}">${s}</text>`;
  const hub = (x, y) => `<rect x="${x}" y="${y}" width="58" height="44" rx="7" fill="#F4C430" stroke="#2A2140" stroke-width="2"/><rect x="${x + 3}" y="${y + 3}" width="52" height="12" rx="3" fill="#fff" stroke="#2A2140" stroke-width="1.2"/><circle cx="${x + 29}" cy="${y + 9}" r="3" fill="#2A2140"/>`;
  return {
    spkmotor() {
      return tSvg(170, `${hub(16, 62)}<path d="M74 84 C100 84 104 96 128 96" fill="none" stroke="#6B7280" stroke-width="4" stroke-linecap="round"/>
        <rect x="128" y="74" width="44" height="44" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/><circle cx="150" cy="96" r="7" fill="#3AA6DD"/>
        <g><animateTransform attributeName="transform" type="rotate" from="0 150 96" to="360 150 96" dur="3s" repeatCount="indefinite"/><rect x="108" y="92" width="84" height="8" rx="4" fill="#7A3E99"/><circle cx="108" cy="96" r="9" fill="#F08A24"/><circle cx="192" cy="96" r="9" fill="#F08A24"/></g>
        <g ${tA(.3)}><rect x="214" y="22" width="96" height="36" rx="10" fill="#EFE7F7"/>${txt(262, 45, L('Cap on?', '¿Hacia dónde?'))}</g>
        <g ${tA(.9)}><rect x="214" y="68" width="96" height="36" rx="10" fill="#E4F0FB"/>${txt(262, 91, L('Com de ràpid?', '¿Cómo de rápido?'), { fs: 11 })}</g>
        <g ${tA(1.5)}><rect x="214" y="114" width="96" height="36" rx="10" fill="#FFF3D6"/>${txt(262, 137, L('Quanta estona?', '¿Cuánto tiempo?'), { fs: 11 })}</g>`);
    },
    spkports() {
      return tSvg(150, `<rect x="104" y="42" width="112" height="84" rx="10" fill="#F4C430" stroke="#2A2140" stroke-width="2.4"/><rect x="110" y="48" width="100" height="24" rx="5" fill="#fff" stroke="#2A2140" stroke-width="1.4"/>${txt(160, 65, 'Hub', { fs: 13 })}
        <g ${tA(.3)}><rect x="20" y="18" width="62" height="42" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/>${txt(51, 44, L('Motor', 'Motor'), { fs: 11 })}<path d="M82 40 C96 40 96 58 110 58" fill="none" stroke="#6B7280" stroke-width="4"/>${txt(96, 34, 'A', { fs: 12, c: '#7A3E99' })}</g>
        <g ${tA(.9)}><rect x="238" y="18" width="62" height="42" rx="8" fill="#fff" stroke="#2A2140" stroke-width="2"/>${txt(269, 44, L('Motor', 'Motor'), { fs: 11 })}<path d="M238 40 C224 40 224 58 210 58" fill="none" stroke="#6B7280" stroke-width="4"/>${txt(224, 34, 'B', { fs: 12, c: '#7A3E99' })}</g>
        <g ${tA(1.6)}>${txt(160, 146, L('Només 2 cables: tria bé què hi connectes!', 'Solo 2 cables: ¡elige bien qué conectas!'), { fs: 12.5 })}</g>`);
    },
    spkseq() {
      const c = (y, n, s, col, t) => `<g ${tA(t)}><rect x="14" y="${y}" width="138" height="36" rx="9" fill="${col}"/><circle cx="33" cy="${y + 18}" r="11" fill="#fff"/>${txt(33, y + 22.5, n, { fs: 13 })}${txt(52, y + 22.5, s, { a: 'start', fs: 12.5, c: '#fff' })}</g>`;
      return tSvg(160, `${c(10, 1, L('Endavant', 'Adelante'), '#1F74C4', .2)}${c(58, 2, L('Atura’t', 'Párate'), '#C8372F', .7)}${c(106, 3, L('Enrere', 'Atrás'), '#7A3E99', 1.2)}
        <line x1="178" y1="112" x2="308" y2="112" stroke="#CFC6DC" stroke-width="4" stroke-linecap="round"/><line x1="290" y1="92" x2="290" y2="124" stroke="#C8372F" stroke-width="3" stroke-dasharray="4 3"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;92 0;92 0;0 0;0 0" keyTimes="0;.35;.55;.9;1" dur="5s" repeatCount="indefinite"/><rect x="180" y="84" width="34" height="18" rx="5" fill="#1F74C4"/><circle cx="188" cy="106" r="6" fill="#2A2140"/><circle cx="206" cy="106" r="6" fill="#2A2140"/></g>
        ${txt(243, 44, L('Primer una cosa,', 'Primero una cosa,'), { fs: 12 })}${txt(243, 62, L('després l’altra.', 'después la otra.'), { fs: 12 })}`);
    },
    spktemps() {
      const row = (y, s, x2, t) => `<g ${tA(t)}>${txt(14, y + 5, s, { a: 'start', fs: 12.5 })}<line x1="70" y1="${y}" x2="306" y2="${y}" stroke="#E2DBEA" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="${y}" x2="${x2}" y2="${y}" stroke="#1F74C4" stroke-width="6" stroke-linecap="round"/><rect x="${x2 - 6}" y="${y - 12}" width="24" height="14" rx="4" fill="#7A3E99"/><circle cx="${x2}" cy="${y + 5}" r="4.5" fill="#2A2140"/><circle cx="${x2 + 12}" cy="${y + 5}" r="4.5" fill="#2A2140"/></g>`;
      return tSvg(140, `${row(30, L('Poc', 'Poco'), 120, .2)}${row(72, L('Més', 'Más'), 190, .8)}${row(114, L('Molt', 'Mucho'), 280, 1.4)}`);
    },
    spksi() {
      const line = (y, col, s, t, on) => `<g ${tA(t)}><rect x="16" y="${y}" width="50" height="30" rx="6" fill="${col}" stroke="#2A2140" stroke-width="1.6"/><path d="M74 ${y + 15}h30" stroke="#2A2140" stroke-width="2.6"/><path d="M104 ${y + 15}l-8 -5v10z" fill="#2A2140"/><rect x="114" y="${y - 2}" width="46" height="34" rx="7" fill="#fff" stroke="#2A2140" stroke-width="1.6"/><circle cx="137" cy="${y + 15}" r="8" fill="#6B7280"/><path d="M168 ${y + 15}h22" stroke="#2A2140" stroke-width="2.6"/><path d="M190 ${y + 15}l-8 -5v10z" fill="#2A2140"/><circle cx="212" cy="${y + 15}" r="13" fill="${on}" stroke="#2A2140" stroke-width="1.6"/>${txt(233, y + 20, s, { a: 'start', fs: 12.5 })}</g>`;
      return tSvg(160, `${line(14, '#F4C430', L('Llum groga', 'Luz amarilla'), .2, '#F4C430')}${line(62, '#3FAE5A', L('Es passa', 'Se pasa'), 1, '#3FAE5A')}${line(110, '#C8372F', L('No es passa', 'No se pasa'), 1.8, '#C8372F')}`);
    },
    spkidea() {
      const n = (x, s, col, t) => `<g ${tA(t)}><circle cx="${x}" cy="62" r="36" fill="${col}"/>${txt(x, 67, s, { fs: 13, c: '#fff' })}</g>`;
      return tSvg(130, `${n(58, L('Idea', 'Idea'), '#7A3E99', .2)}${n(160, L('Prova', 'Prueba'), '#1F74C4', .8)}${n(262, L('Millora', 'Mejora'), '#3FAE5A', 1.4)}
        <g ${tA(.6)}><path d="M98 62h18" stroke="#2A2140" stroke-width="3"/><path d="M116 62l-7 -5v10z" fill="#2A2140"/></g><g ${tA(1.2)}><path d="M200 62h18" stroke="#2A2140" stroke-width="3"/><path d="M218 62l-7 -5v10z" fill="#2A2140"/></g>
        <g ${tA(1.8)}><path d="M262 100 C262 124 58 124 58 100" fill="none" stroke="#2A2140" stroke-width="2.6" stroke-dasharray="5 4"/><path d="M58 100l-5 8h10z" fill="#2A2140"/></g>`);
    }
  };
})());
