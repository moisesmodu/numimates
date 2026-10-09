/* Tech 3D · Nivell 2 · unitat 6 «Mòduls» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p6def: una definició (la recepta) i tres crides que en fan tres còpies, com un segell · p6param: els paràmetres són
   buits que s'omplen a cada crida (torre(20), torre(40), torre(60)) · p6lib: les tres parts d'un programa ben
   organitzat i les fletxes de cada crida a la seva definició · p6plan: el pla d'un projecte gran, amb la tornada enrere. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .15, b, b + .15, D]);
  const mono = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 12}" font-weight="${o.w || 700}" fill="${o.c || '#E8EEFF'}" text-anchor="${o.a || 'start'}">${txt}</text>`;
  const C = { ink: '#14204A', pink: '#D63F8C', vio: '#7C5CFF', ora: '#F08A24', grn: '#1FA463', blue: '#2F5BEA', gold: '#FFC531', kw: '#C9B6FF', num: '#FFD27A', fn: '#7FE0C3', line: '#DCE4FA' };
  const KW = (a, b) => `<tspan fill="${C.kw}">${L(a, b)}</tspan>`, FN = (a, b) => `<tspan fill="${C.fn}">${L(a, b)}</tspan>`, NU = n => `<tspan fill="${C.num}">${n}</tspan>`;
  // un arbre vist de costat (la base a (x, y))
  const tree = (x, y, s = 1) => `<rect x="${x - 3 * s}" y="${y - 22 * s}" width="${6 * s}" height="${22 * s}" rx="2" fill="#A0683A"/><circle cx="${x}" cy="${y - 30 * s}" r="${14 * s}" fill="${C.grn}"/><circle cx="${x - 5 * s}" cy="${y - 35 * s}" r="${5 * s}" fill="#7FD6A6" opacity=".7"/>`;
  return {
    // definir una vegada (la recepta) i cridar tres vegades (tres arbres a llocs diferents)
    p6def() {
      const calls = [[`${FN('arbre', 'árbol')}()`, 190], [`${KW('mou', 'mueve')}(${NU(30)},…) ${FN('arbre', 'árbol')}()`, 236], [`${KW('mou', 'mueve')}(${NU(60)},…) ${FN('arbre', 'árbol')}()`, 282]];
      const parts = calls.map(([txt, x], k) => { const a = 1.4 + k * 1.1;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .15, 5.2, 5.35, D])}${mono(18, 150 + k * 18, txt, { s: 11.5 })}<path d="M150 ${146 + k * 18} C 170 ${146 + k * 18}, ${x - 20} 120, ${x} 112" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 4"/></g>
          <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a + .35, a + .5, 5.2, 5.35, D])}${tree(x, 176)}</g>`; }).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="14" width="160" height="104" rx="14" fill="${C.ink}"/>
        <g ${tA(.2, 'ta-in')}>${mono(18, 38, `${KW('defineix', 'define')} ${FN('arbre', 'árbol')}() {`)}${mono(30, 60, `${KW('cilindre', 'cilindro')}(${NU(4)}, ${NU(12)})`)}${mono(30, 80, `${KW('mou', 'mueve')}(…) ${KW('esfera', 'esfera')}(${NU(14)})`)}${mono(18, 102, '}')}</g>
        <g ${tA(.6, 'ta-in')}><rect x="182" y="16" width="128" height="40" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="246" y="34" text-anchor="middle" class="tat s">${L('1 definició', '1 definición')}</text><text x="246" y="50" text-anchor="middle" font-size="12" font-weight="800" fill="${C.pink}">${L('= la recepta', '= la receta')}</text></g>
        <rect x="8" y="132" width="160" height="60" rx="12" fill="${C.ink}" opacity=".92"/>
        <path d="M178 176h136" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>${parts}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 4.3, 4.45, 5.2, 5.35, D])}<rect x="196" y="62" width="104" height="26" rx="13" fill="${C.grn}"/><text x="248" y="80" text-anchor="middle" class="tat w s">${L('3 crides', '3 llamadas')}</text></g>`);
    },
    // un paràmetre és un buit que s'omple a cada crida
    p6param() {
      const vals = [20, 40, 60], cols = [C.ora, C.pink, C.vio];
      const towers = vals.map((v, k) => { const a = .9 + k * 1.2, x = 196 + k * 44, h = v * 1.6;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a + .4, a + .55, 5.2, 5.35, D])}<rect x="${x - 10}" y="${178 - h}" width="20" height="${h}" rx="3" fill="${cols[k]}"/><polygon points="${x - 15},${178 - h} ${x + 15},${178 - h} ${x},${160 - h}" fill="${C.ink}"/><text x="${x}" y="194" text-anchor="middle" font-size="11.5" font-weight="800" fill="${C.ink}">${v}</text></g>`; }).join('');
      const slot = vals.map((v, k) => { const a = .9 + k * 1.2;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .12, a + 1.05, a + 1.2, D])}<text x="118" y="45" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="13" font-weight="900" fill="${C.gold}">${v}</text>${mono(18, 160, `${KW('torre', 'torre')}(<tspan fill="${C.gold}">${v}</tspan>)`, { s: 13 })}</g>`; }).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="14" width="168" height="110" rx="14" fill="${C.ink}"/>
        ${mono(18, 38, `${KW('defineix', 'define')} torre(`)}<rect x="94" y="26" width="48" height="24" rx="7" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 3"/>${mono(146, 38, ') {')}
        <g>${win(0, .85)}<text x="118" y="43" text-anchor="middle" font-size="10.5" font-weight="800" fill="${C.gold}">${L('alçada', 'altura')}</text></g>
        ${mono(30, 66, `${KW('cilindre', 'cilindro')}(${NU(14)}, <tspan fill="${C.gold}">${L('alçada', 'altura')}</tspan>)`, { s: 11.5 })}${mono(30, 88, `${KW('mou', 'mueve')}(0, 0, <tspan fill="${C.gold}">${L('alçada', 'altura')}</tspan>) ${KW('con', 'cono')}…`, { s: 11.5 })}${mono(18, 110, '}')}
        <rect x="8" y="138" width="168" height="34" rx="12" fill="${C.ink}" opacity=".92"/>${slot}
        <path d="M184 178h130" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>${towers}
        <g ${tA(.3, 'ta-in')}><rect x="188" y="10" width="124" height="28" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="250" y="29" text-anchor="middle" class="tat s">${L('1 mòdul, 3 mides', '1 módulo, 3 medidas')}</text></g>`);
    },
    // les tres parts d'un programa ben organitzat
    p6lib() {
      const sec = (y, h, col, title, lines, t) => `<g ${tA(t, 'ta-in')}><rect x="10" y="${y}" width="196" height="${h}" rx="12" fill="${C.ink}"/><rect x="10" y="${y}" width="8" height="${h}" rx="4" fill="${col}"/>
        <text x="200" y="${y + 16}" text-anchor="end" font-size="10.5" font-weight="900" fill="${col}">${title}</text>${lines.map((l, k) => mono(26, y + 18 + k * 16, l, { s: 11 })).join('')}</g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        ${sec(10, 34, C.gold, L('1 · PARÀMETRES', '1 · PARÁMETROS'), [`n = ${NU(3)}`], .2)}
        ${sec(52, 88, C.vio, L('2 · MÒDULS', '2 · MÓDULOS'), [`<tspan fill="#8A93B8">// ${L('fanal(alçada): …', 'farola(altura): …')}</tspan>`, `${KW('defineix', 'define')} ${FN('fanal', 'farola')}(…) {…}`, `<tspan fill="#8A93B8">// ${L('banc(llargada): …', 'banco(largo): …')}</tspan>`, `${KW('defineix', 'define')} ${FN('banc', 'banco')}(…) {…}`], .9)}
        ${sec(148, 56, C.grn, L("3 · L'ESCENA", '3 · LA ESCENA'), [`${FN('fanal', 'farola')}(${NU(30)})`, `${KW('mou', 'mueve')}(…) ${FN('banc', 'banco')}(${NU(36)})`], 1.6)}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2.4, 2.55, 5.2, 5.35, D])}<path d="M120 162 C 160 162, 170 92, 150 88" fill="none" stroke="${C.gold}" stroke-width="2.2" stroke-dasharray="4 4"/></g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2.9, 3.05, 5.2, 5.35, D])}<path d="M196 178 C 230 178, 236 124, 196 120" fill="none" stroke="${C.gold}" stroke-width="2.2" stroke-dasharray="4 4"/></g>
        <g ${tA(3.4, 'ta-in')}><rect x="214" y="40" width="98" height="116" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="263" y="64" text-anchor="middle" class="tat s">${L('Comentaris', 'Comentarios')}</text><text x="263" y="84" text-anchor="middle" font-size="12" font-weight="800" fill="${C.vio}">// ${L('què fa', 'qué hace')}</text><text x="263" y="108" text-anchor="middle" class="tat s">${L('Noms clars', 'Nombres claros')}</text><text x="263" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="${C.vio}">${L('banc ✓  m1 ✗', 'banco ✓  m1 ✗')}</text><text x="263" y="146" text-anchor="middle" font-size="11" font-weight="800" fill="${C.ink}">${L('origen: centre', 'origen: centro')}</text></g>`);
    },
    // el pla d'un projecte gran: esbós → mòduls → provar → escena → imprimir (i tornar enrere si cal)
    p6plan() {
      const st = [['✏️', L('Esbós', 'Boceto'), C.ora], ['🧩', L('Mòduls', 'Módulos'), C.vio], ['🧪', L('Prova', 'Prueba'), C.blue], ['🏙️', L('Escena', 'Escena'), C.grn], ['🖨️', L('Imprimeix', 'Imprime'), C.pink]];
      const pos = [[52, 58], [160, 58], [268, 58], [214, 146], [106, 146]];
      return tSvg(208, `<rect width="320" height="208" rx="20" fill="#F1F2FB"/>
        <path d="M52 58H268L214 146H106" fill="none" stroke="${C.line}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        ${st.map(([ic, t, c], k) => `<g ${tA(.2 + k * .6)}><circle cx="${pos[k][0]}" cy="${pos[k][1]}" r="30" fill="#fff" stroke="${c}" stroke-width="4" filter="url(#bwSh)"/><text x="${pos[k][0]}" y="${pos[k][1] + 2}" text-anchor="middle" font-size="22">${ic}</text><text x="${pos[k][0]}" y="${pos[k][1] + 46}" text-anchor="middle" class="tat s">${k + 1} · ${t}</text></g>`).join('')}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 3.4, 3.55, 5.2, 5.35, D])}<path d="M234 82 C 224 104, 200 104, 186 84" fill="none" stroke="${C.red || '#EF5A5A'}" stroke-width="2.5" stroke-dasharray="5 4"/><polygon points="183,80 192,86 182,89" fill="#EF5A5A"/><text x="212" y="116" text-anchor="middle" font-size="11" font-weight="800" fill="#EF5A5A">${L('falla? torna-hi', '¿falla? vuelve')}</text></g>`);
    }
  };
})());
