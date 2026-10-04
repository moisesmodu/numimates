/* Tech Web · unitat 2 «HTML» · animacions de teoria (TANI)
   Dibuixos propis de Numi: el codi (lletra monoespaiada, com a l'editor) i el que en fa el navegador. */
{
  const W2F = "font-family:ui-monospace,Menlo,Consolas,'DejaVu Sans Mono',monospace;font-weight:700";
  const w2m = (fs, extra = '') => `style="${W2F};font-size:${fs}px${extra ? ';' + extra : ''}"`;
  // un tros de text que apareix al segon t (SMIL, perquè funcioni dins de <tspan>)
  const w2in = (t, d = .3) => `<animate attributeName="fill-opacity" values="0;0;1;1;0" keyTimes="0;${(t / 5.5).toFixed(3)};${((t + d) / 5.5).toFixed(3)};.92;1" dur="5.5s" repeatCount="indefinite"/>`;
  // una finestra de navegador (amb els tres punts) i, si cal, una pestanya amb text
  const w2win = (x, y, w, h, tab = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x} ${y + 12}q0 -12 12 -12h${w - 24}q12 0 12 12v12h-${w}z" fill="#E3E8F6"/>${[0, 1, 2].map(i => `<circle cx="${x + 13 + i * 11}" cy="${y + 12}" r="3.6" fill="${['#EF5A5A', '#FFC531', '#3CC47C'][i]}"/>`).join('')}${tab}`;
  // una etiqueta de color (xip) amb text monoespaiat blanc
  const w2chip = (x, y, txt, col, extra = '') => { const w = txt.replace(/&[a-z]+;/g, '_').length * 7.9 + 14; return `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="22" rx="7" fill="${col}"/><text x="${x + 7}" y="${y + 16}" class="tat w" ${w2m(13)}>${txt}</text></g>`; };
  const lt = s => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // les classes .tat posen el color per CSS: el «fill» d'un <text> va dins de style. I un sol style per etiqueta.
  const w2fix = b => b.replace(/<(text|g|rect|path|circle)\b([^<>]*)>/g, (m, tag, at) => {
    const sc = /\/\s*$/.test(at), st = []; at = at.replace(/\/\s*$/, '').replace(/\sstyle="([^"]*)"/g, (_, v) => { st.push(v); return ''; });
    if (tag === 'text') at = at.replace(/\sfill="([^"]+)"/, (_, v) => { st.push('fill:' + v); return ''; });
    return `<${tag}${at}${st.length ? ` style="${st.join(';')}"` : ''}${sc ? '/' : ''}>`; });
  const S = (h, b) => tSvg(h, w2fix(b));
  // text monoespaiat amb l'amplada exacta (0,6 em per lletra), perquè les marques quadrin a sobre
  const w2len = (s, fs) => `textLength="${(s.replace(/&[a-z]+;/g, '_').length * fs * .6).toFixed(1)}" lengthAdjust="spacingAndGlyphs"`;

  Object.assign(TANI, {
    // HTML és un llenguatge de marques: el text es marca amb etiquetes i el navegador en dibuixa la pàgina
    w2mark() {
      const t1 = L('Pa amb tomàquet', 'Pan con tomate'), t2 = L('Una recepta fàcil.', 'Una receta fácil.');
      const ln = (y, tag, txt, a, b) => `<text x="24" y="${y}" class="tat" ${w2m(14)}><tspan fill="#7FB8FF" fill-opacity="0">${lt(`<${tag}>`)}${w2in(a)}</tspan><tspan fill="#E8EEFF">${txt}</tspan><tspan fill="#7FB8FF" fill-opacity="0">${lt(`</${tag}>`)}${w2in(b)}</tspan></text>`;
      return S(226, `<rect x="10" y="8" width="300" height="88" rx="14" fill="#14204A"/><text x="298" y="27" text-anchor="end" class="tat s" fill="#7F8FC0" style="font-size:13px">index.html</text>
        ${ln(50, 'h1', t1, .5, .9)}${ln(80, 'p', t2, 1.4, 1.8)}
        <g ${tA(2.4, 'ta-in')}><path d="M160 102v14" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/><path d="M151 112l9 10 9-10" fill="none" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.7, 'ta-fade')}>${w2win(34, 128, 252, 90)}</g>
        <text x="50" y="178" class="tat" style="font-size:21px;font-weight:900" ${tA(3.1, 'ta-in')}>${t1}</text>
        <text x="50" y="204" class="tat s" ${tA(3.5, 'ta-in')}>${t2}</text>`);
    },
    // anatomia d'un element: obre, contingut, tanca (amb la barra) = element
    w2tag() {
      const c = L('Hola, món!', '¡Hola, mundo!'), cw = 13.2, n = 3 + c.length + 4, w = n * cw, x0 = 160 - w / 2, xc = x0 + 3 * cw, xe = xc + c.length * cw, x1 = xe + 4 * cw;
      const br = (a, b, y, col, t) => `<path d="M${a + 2} ${y}v8h${b - a - 4}v-8" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(t, 'ta-draw')}/>`;
      return S(204, `<rect x="${x0 - 14}" y="44" width="${w + 28}" height="48" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="${x0}" y="76" class="tat" fill="#2E9E5B" ${w2m(22)} ${w2len('<p>', 22)}>&lt;p&gt;</text><text x="${xc}" y="76" class="tat" ${w2m(22)} ${w2len(c, 22)}>${c}</text><text x="${xe}" y="76" class="tat" fill="#D64545" ${w2m(22)} ${w2len('</p>', 22)}>&lt;/p&gt;</text>
        ${br(x0, xc, 100, '#2E9E5B', .5)}<text x="${(x0 + xc) / 2}" y="128" text-anchor="middle" class="tat s" fill="#2E9E5B" ${tA(.7, 'ta-fade')}>${L('obre', 'abre')}</text>
        ${br(xc, xe, 100, '#14204A', 1.2)}<text x="${(xc + xe) / 2}" y="128" text-anchor="middle" class="tat s" ${tA(1.4, 'ta-fade')}>${L('contingut', 'contenido')}</text>
        ${br(xe, x1, 100, '#D64545', 1.9)}<text x="${(xe + x1) / 2}" y="128" text-anchor="middle" class="tat s" fill="#D64545" ${tA(2.1, 'ta-fade')}>${L('tanca', 'cierra')}</text>
        <circle cx="${xe + cw * 1.5}" cy="68" r="15" fill="none" stroke="#FFC531" stroke-width="3.5" ${tA(2.7)}/><text x="${xe + cw * 1.5}" y="32" text-anchor="middle" class="tat s" fill="#B98500" ${tA(2.8, 'ta-fade')}>${L('la barra!', '¡la barra!')}</text>
        <path d="M${x0} 148q0 12 12 12h${w / 2 - 22}q10 0 10 10q0 -10 10 -10h${w / 2 - 22}q12 0 12 -12" fill="none" stroke="#2F5BEA" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" ${tA(3.4, 'ta-draw')}/>
        <text x="160" y="194" text-anchor="middle" class="tat b" fill="#2F5BEA" ${tA(3.7)}>${L('= un element', '= un elemento')}</text>`);
    },
    // etiquetes dins d'etiquetes: els arcs de cada parella no s'han d'encreuar
    w2nest() {
      const w1 = L('Molt ', 'Muy '), w2 = L('bo', 'rico'), cw = 8.1;
      const row = (toks, y) => { let x = 20; return toks.map(([s, col]) => { const o = { s, col, x, c: x + s.length * cw / 2 }; x += s.length * cw; return o; }); };
      const draw = (T, y) => `<text y="${y}" class="tat" ${w2m(13.5)}>${T.map(o => `<tspan x="${o.x}" fill="${o.col}" ${w2len(o.s, 13.5)}>${lt(o.s)}</tspan>`).join('')}</text>`;
      const arc = (a, b, y, h, col, t) => `<path d="M${a} ${y}C${a} ${y - h} ${b} ${y - h} ${b} ${y}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(t, 'ta-draw')}/>`;
      const B = '#2F5BEA', O = '#E07A12', K = '#14204A';
      const g = row([['<p>', B], [w1, K], ['<strong>', O], [w2, K], ['</strong>', O], ['</p>', B]]), b = row([['<p>', B], [w1, K], ['<strong>', O], [w2, K], ['</p>', B], ['</strong>', O]]);
      const gx = g[5].x + 4 * cw + 12, bx = b[5].x + 9 * cw + 12;
      return S(234, `${draw(g, 86)}${arc(g[0].c, g[5].c, 70, 58, B, .5)}${arc(g[2].c, g[4].c, 70, 32, O, 1.1)}
        <g ${tA(1.7)}><circle cx="${Math.min(gx + 12, 300)}" cy="80" r="13" fill="#3CC47C"/><path d="M${Math.min(gx + 12, 300) - 6} 80l4 4 8-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <text x="20" y="110" class="tat s" fill="#2E9E5B" ${tA(1.9, 'ta-fade')}>${L('Ben niuat: els arcs no es creuen', 'Bien anidado: los arcos no se cruzan')}</text>
        <path d="M14 124h292" stroke="#DCE4FA" stroke-width="2" stroke-dasharray="5 6"/>
        ${draw(b, 196)}${arc(b[0].c, b[4].c, 180, 48, B, 2.6)}${arc(b[2].c, b[5].c, 180, 30, O, 3.2)}
        <g ${tA(3.8, 'ta-wob')}><circle cx="${Math.min(bx + 12, 300)}" cy="190" r="13" fill="#EF5A5A"/><path d="M${Math.min(bx + 12, 300) - 5} 185l10 10M${Math.min(bx + 12, 300) + 5} 185l-10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
        <text x="20" y="222" class="tat s" fill="#C0392B" ${tA(4, 'ta-fade')}>${L("Mal niuat: s'encreuen!", '¡Mal anidado: se cruzan!')}</text>`);
    },
    // els títols fan l'esquema de la pàgina, com l'índex d'un llibre
    w2heads() {
      const H = [[1, L('Receptari', 'Recetario'), 40], [2, L('Primers', 'Primeros'), 72], [3, 'Escudella', 110], [2, 'Postres', 150], [3, 'Crema', 188]];
      const fs = { 1: 21, 2: 16.5, 3: 14 }, col = { 1: '#2F5BEA', 2: '#8B5CF6', 3: '#E07A12' };
      const bars = y => `<rect x="24" y="${y}" width="106" height="5" rx="2.5" fill="#DCE4FA"/><rect x="24" y="${y + 10}" width="80" height="5" rx="2.5" fill="#DCE4FA"/>`;
      return S(232, `<rect x="10" y="10" width="136" height="206" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${H.map(([n, t, y]) => `<text x="24" y="${y}" class="tat" style="font-size:${fs[n]}px;font-weight:900">${t}</text>`).join('')}${bars(84)}${bars(120)}${bars(160)}${bars(198)}
        <path d="M180 46V145M180 67h8M180 145h8M196 78v27h8M196 156v27h8" fill="none" stroke="#C9D3EE" stroke-width="2.5" ${tA(.2, 'ta-fade')}/>
        ${H.map(([n, t, y], i) => { const x = 172 + (n - 1) * 16; return `<g ${tA(.4 + i * .6, 'ta-in')}><path d="M${24 + t.length * (fs[n] * .58) + 6} ${y - 5}H${x - 4}" stroke="${col[n]}" stroke-width="2" stroke-dasharray="3 4" opacity=".55"/>${w2chip(x, y - 16, 'h' + n, col[n])}<text x="${x + 34}" y="${y}" class="tat s">${t}</text></g>`; }).join('')}
        <text x="240" y="224" text-anchor="middle" class="tat s" fill="#5A6BA0" ${tA(3.6, 'ta-fade')}>${L("l'esquema", 'el esquema')}</text>`);
    },
    // l'esquelet: html > head (title → pestanya) + body (→ el que es veu)
    w2page() {
      const tab = L('Receptari', 'Recetario');
      return S(236, `<g ${tA(.1, 'ta-fade')}><rect x="8" y="8" width="158" height="220" rx="12" fill="#EEF2FD" stroke="#7FB8FF" stroke-width="2"/><text x="18" y="27" class="tat" fill="#2F5BEA" ${w2m(13)}>${lt(`<html lang="${L('ca', 'es')}">`)}</text></g>
        <g ${tA(.6, 'ta-in')}><rect x="18" y="36" width="138" height="64" rx="10" fill="#FFF4E0" stroke="#F1C27D" stroke-width="2"/><text x="28" y="54" class="tat" fill="#B9650B" ${w2m(13)}>&lt;head&gt;</text>
          <rect x="28" y="62" width="118" height="28" rx="8" fill="#fff" stroke="#F1C27D" stroke-width="1.5"/><text x="36" y="81" class="tat" ${w2m(13)}>&lt;title&gt;</text></g>
        <g ${tA(2.1, 'ta-in')}><rect x="18" y="110" width="138" height="108" rx="10" fill="#E8F7EE" stroke="#8FD3A8" stroke-width="2"/><text x="28" y="128" class="tat" fill="#2E8B57" ${w2m(13)}>&lt;body&gt;</text>
          <rect x="28" y="138" width="118" height="28" rx="8" fill="#fff" stroke="#8FD3A8" stroke-width="1.5"/><text x="36" y="157" class="tat" ${w2m(13)}>&lt;h1&gt;</text>
          <rect x="28" y="174" width="118" height="28" rx="8" fill="#fff" stroke="#8FD3A8" stroke-width="1.5"/><text x="36" y="193" class="tat" ${w2m(13)}>&lt;p&gt;</text></g>
        ${w2win(176, 26, 136, 192, `<path d="M226 26h70q6 0 6 6v14h-82v-14q0 -6 6 -6z" fill="#fff" stroke="#DCE4FA" stroke-width="1.5"/>`)}
        <path d="M146 76C176 76 192 38 222 38" fill="none" stroke="#E07A12" stroke-width="2.5" stroke-dasharray="4 4" ${tA(1.3, 'ta-fade')}/>
        <path d="M156 160C176 160 172 92 186 88" fill="none" stroke="#2E9E5B" stroke-width="2.5" stroke-dasharray="4 4" ${tA(2.7, 'ta-fade')}/>
        <text x="226" y="42" class="tat s" ${tA(1.8, 'ta-pop')}>${tab}</text>
        <text x="190" y="80" class="tat" style="font-size:17px;font-weight:900" ${tA(3.2, 'ta-in')}>${tab}</text>
        <g ${tA(3.5, 'ta-in')}><rect x="190" y="94" width="104" height="6" rx="3" fill="#DCE4FA"/><rect x="190" y="106" width="84" height="6" rx="3" fill="#DCE4FA"/></g>
        <text x="262" y="18" text-anchor="middle" class="tat s" fill="#E07A12" ${tA(1.9, 'ta-fade')}>${L('la pestanya ↓', 'la pestaña ↓')}</text>
        <text x="244" y="138" text-anchor="middle" class="tat s" fill="#2E8B57" ${tA(3.4, 'ta-fade')}>${L('↑ el que es veu', '↑ lo que se ve')}</text>`);
    },
    // ul (sense ordre: els elements es poden canviar de lloc) i ol (amb ordre: 1, 2, 3)
    w2lists() {
      const U = [L('Farina', 'Harina'), L('Ous', 'Huevos'), L('Sucre', 'Azúcar')], O = [L('Bat els ous', 'Bate'), L('Barreja', 'Mezcla'), L('Al forn', 'Al horno')];
      const sw = d => `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 ${d};0 ${d};0 0" keyTimes="0;.25;.4;.75;.9" dur="5.5s" repeatCount="indefinite"/>`;
      const item = (y, t, a = '') => `<g>${a}<circle cx="34" cy="${y - 5}" r="5" fill="#14204A"/><text x="48" y="${y}" class="tat">${t}</text></g>`;
      return S(214, `<rect x="8" y="8" width="148" height="196" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="22" y="36" class="tat b" fill="#8B5CF6" ${w2m(17)}>&lt;ul&gt;</text><text x="22" y="56" class="tat s" fill="#5A6BA0">${L('sense ordre', 'sin orden')}</text>
        ${item(90, U[0], sw(64))}${item(122, U[1])}${item(154, U[2], sw(-64))}
        <text x="82" y="190" text-anchor="middle" class="tat s" fill="#2E9E5B" ${tA(2.4, 'ta-fade')}>${L("✓ tant fa l'ordre", '✓ da igual el orden')}</text>
        <rect x="164" y="8" width="148" height="196" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="178" y="36" class="tat b" fill="#E07A12" ${w2m(17)}>&lt;ol&gt;</text><text x="178" y="56" class="tat s" fill="#5A6BA0">${L('amb ordre', 'con orden')}</text>
        ${O.map((t, i) => `<g ${tA(.5 + i * .8, 'ta-in')}><circle cx="190" cy="${85 + i * 32}" r="11" fill="#E07A12"/><text x="190" y="${90 + i * 32}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="208" y="${90 + i * 32}" class="tat">${t}</text></g>`).join('')}
        <text x="238" y="190" text-anchor="middle" class="tat s" fill="#C0392B" ${tA(3.1, 'ta-fade')}>${L("l'ordre importa!", '¡el orden importa!')}</text>`);
    },
    // strong = important; em = èmfasi (la paraula que diries amb més força, i que canvia el sentit)
    w2strong() {
      const s1 = L('Bat-ho un minut. ', 'Bátelo un minuto. '), s2 = L('Compte: talla!', '¡Cuidado: corta!');
      const em = (pre, w, post, note, y, t) => `<g ${tA(t, 'ta-in')}><circle cx="30" cy="${y - 6}" r="13" fill="#FFD9A8"/><circle cx="26" cy="${y - 9}" r="1.8" fill="#14204A"/><circle cx="34" cy="${y - 9}" r="1.8" fill="#14204A"/><path d="M25 ${y - 2}q5 4 10 0" fill="none" stroke="#14204A" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="50" y="${y - 24}" width="256" height="34" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><path d="M50 ${y - 10}l-8 4 8 4" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <text x="62" y="${y - 2}" class="tat">${pre}<tspan fill="#8B5CF6" style="font-style:italic;font-size:19px;font-weight:900">${w}</tspan>${post}</text><text x="298" y="${y - 2}" text-anchor="end" class="tat s" fill="#5A6BA0">${note}</text></g>`;
      return S(226, `<rect x="10" y="8" width="300" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${w2chip(22, 18, '&lt;strong&gt;', '#E07A12')}<text x="118" y="34" class="tat s" fill="#5A6BA0">${L('vol dir: important', 'quiere decir: importante')}</text>
        <g ${tA(1, 'ta-wob')}><path d="M290 18l13 22h-26z" fill="#FFC531" stroke="#B98500" stroke-width="2" stroke-linejoin="round"/><path d="M290 26v6" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/><circle cx="290" cy="36" r="1.5" fill="#14204A"/></g>
        <text x="22" y="66" class="tat" ${tA(.4, 'ta-fade')}>${s1}<tspan fill="#C0392B" style="font-weight:900">${s2}</tspan></text>
        <rect x="10" y="94" width="300" height="124" rx="14" fill="#F7F3FF" stroke="#E2D8FB" stroke-width="2"/>
        ${w2chip(22, 104, '&lt;em&gt;', '#8B5CF6')}<text x="78" y="120" class="tat s" fill="#5A6BA0">${L('vol dir: èmfasi', 'quiere decir: énfasis')}</text>
        ${em('', L('Jo', 'Yo'), L(' faig el pastís', ' hago el pastel'), L('(no tu)', '(no tú)'), 162, 2)}
        ${em(L('Jo faig el ', 'Yo hago el '), L('pastís', 'pastel'), '', L('(no la coca)', '(no la coca)'), 206, 3.2)}`);
    },
    // les parts d'una recepta i l'etiqueta de cada una
    w2recipe() {
      const P = [[L('Pastís de poma', 'Pastel de manzana'), 34, 'h1', '#2F5BEA'], ['', 52, 'p', '#2E9E5B'], [L('Ingredients', 'Ingredientes'), 82, 'h2', '#2F5BEA'], ['', 106, 'ul', '#E07A12'], [L('Passos', 'Pasos'), 142, 'h2', '#2F5BEA'], ['', 166, 'ol', '#E07A12'], ['', 204, 'p', '#2E9E5B']];
      const bar = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="5" rx="2.5" fill="#DCE4FA"/>`;
      return S(230, `<rect x="10" y="8" width="164" height="214" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="22" y="36" class="tat" style="font-size:16px;font-weight:900">${P[0][0]}</text>${bar(22, 46, 128)}${bar(22, 55, 96)}
        <text x="22" y="84" class="tat s" style="font-weight:900">${P[2][0]}</text>${[0, 1, 2].map(i => `<circle cx="27" cy="${98 + i * 11}" r="3" fill="#14204A"/>${bar(36, 95 + i * 11, 70 - i * 12)}`).join('')}
        <text x="22" y="144" class="tat s" style="font-weight:900">${P[4][0]}</text>${[0, 1, 2].map(i => `<rect x="22" y="${156 + i * 11}" width="8" height="7" rx="2" fill="#E07A12"/>${bar(36, 157 + i * 11, 100 - i * 14)}`).join('')}
        ${bar(22, 200, 130)}${bar(22, 209, 90)}
        ${P.map(([, y, tag, col], i) => `<g ${tA(.3 + i * .5, 'ta-in')}><path d="M168 ${y - 3}H192" stroke="${col}" stroke-width="2" stroke-dasharray="3 3"/>${w2chip(196, y - 14, lt(`<${tag}>`) + (tag === 'ul' || tag === 'ol' ? ' + li' : ''), col)}</g>`).join('')}`);
    }
  });
}
