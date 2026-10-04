/* Tech Web · unitat 4 «CSS» · animacions de teoria (TANI)
   HTML i CSS (què hi ha i com es veu), les parts d'una regla, la llum de la pantalla (rgb), el codi hex, el contrast,
   les classes, les famílies de lletra i l'id (l'element únic). */
Object.assign(TANI, (() => {
  // text de codi (monoespaiat) i text de color: sense la classe «tat», perquè el CSS de .tat no en tapi el color
  const mono = (x, y, t, fill = '#14204A', size = 15, extra = '') => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700" font-size="${size}" fill="${fill}" ${extra}>${t}</text>`;
  const lab = (x, y, t, fill = '#14204A', size = 14, anchor = 'middle', extra = '') => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Lexend,system-ui,sans-serif" font-weight="800" font-size="${size}" fill="${fill}" ${extra}>${t}</text>`;
  // opacitat per trams: el tram i de n es veu (animació discreta, en bucle)
  const seg = (i, n, D, on = [i]) => `<animate attributeName="opacity" values="${Array.from({ length: n }, (_, k) => on.includes(k) ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>`;
  const kt = n => Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';');
  // una finestra de navegador petita (targeta blanca amb la barra de dalt)
  const win = (x, y, w, h, bg = '#fff', st = '#DCE4FA') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${st}" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x + 1} ${y + 22}V${y + 12}a11 11 0 0 1 11 -11H${x + w - 12}a11 11 0 0 1 11 11V${y + 22}Z" fill="#E3E8F6"/>
    <circle cx="${x + 12}" cy="${y + 11}" r="3.2" fill="#EF5A5A"/><circle cx="${x + 22}" cy="${y + 11}" r="3.2" fill="#FFC531"/><circle cx="${x + 32}" cy="${y + 11}" r="3.2" fill="#3CC47C"/>`;
  const tick = (cx, cy, ok, t) => `<g ${tA(t)}><circle cx="${cx}" cy="${cy}" r="12" fill="${ok ? '#2E9E5B' : '#D93A3A'}" stroke="#fff" stroke-width="2.5"/>${ok ? `<path d="M${cx - 5.5} ${cy}l3.8 4l7 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${cx - 4.5} ${cy - 4.5}l9 9M${cx + 4.5} ${cy - 4.5}l-9 9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`}</g>`;
  // una samarreta (per a la classe i l'id)
  const shirt = (cx, cy, col, n) => `<path d="M${cx - 12} ${cy - 24}L${cx - 28} ${cy - 15}L${cx - 21} ${cy - 1}L${cx - 14} ${cy - 5}V${cy + 26}H${cx + 14}V${cy - 5}L${cx + 21} ${cy - 1}L${cx + 28} ${cy - 15}L${cx + 12} ${cy - 24}Q${cx} ${cy - 13} ${cx - 12} ${cy - 24}Z" fill="${col}" stroke="#0D3C8C" stroke-width="2.2" stroke-linejoin="round"/>
    <text x="${cx}" y="${cy + 12}" text-anchor="middle" class="tat w b">${n}</text>`;
  return {
    // l'HTML diu què hi ha; el CSS, com es veu (la mateixa pàgina, abans i després)
    w4split() {
      const bars = (x, y, c, ws) => ws.map((w, k) => `<rect x="${x}" y="${y + k * 12}" width="${w}" height="7" rx="3.5" fill="${c}"/>`).join('');
      const list = (x, y, dot, bar) => [0, 1, 2].map(k => `<circle cx="${x}" cy="${y + k * 14}" r="3.6" fill="${dot}"/><rect x="${x + 9}" y="${y + k * 14 - 3.5}" width="${[62, 48, 56][k]}" height="7" rx="3.5" fill="${bar}"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${win(8, 12, 130, 152)}
          <text x="20" y="54" class="tat">Festa major</text>${bars(20, 66, '#C9CFDB', [100, 78])}${list(25, 104, '#9AA3B8', '#C9CFDB')}</g>
        <g ${tA(1.2)}><rect x="146" y="58" width="30" height="36" rx="5" fill="#fff" stroke="#C2185B" stroke-width="2.2"/><path d="M168 58v8h8" fill="none" stroke="#C2185B" stroke-width="2.2"/>
          ${mono(161, 86, 'CSS', '#C2185B', 9.5, 'text-anchor="middle"')}<path d="M146 112H172" stroke="#C2185B" stroke-width="3" stroke-linecap="round"/><path d="M166 105l8 7l-8 7" fill="none" stroke="#C2185B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2, 'ta-in')}>${win(182, 12, 130, 152, '#FFF4D6', '#F3D58A')}</g>
        <g ${tA(2.5, 'ta-fade')}><rect x="183" y="34" width="128" height="34" fill="#C2185B"/><text x="247" y="57" text-anchor="middle" class="tat w">Festa major</text></g>
        <g ${tA(2.9, 'ta-fade')}>${bars(196, 78, '#A1887F', [100, 78]).replace(/<rect x="196"/g, '<rect x="197"')}</g>
        <g ${tA(3.3, 'ta-fade')}>${list(201, 116, '#C2185B', '#8D6E63')}</g>
        <g ${tA(3.9)}><path d="M286 150l3 -8l3 8l8 3l-8 3l-3 8l-3 -8l-8 -3z" fill="#FFC531"/></g>
        ${lab(73, 188, 'HTML', '#1565C0', 16)}<text x="73" y="207" text-anchor="middle" class="tat s">${L('què hi ha', 'qué hay')}</text>
        <g ${tA(2)}>${lab(247, 188, 'CSS', '#C2185B', 16)}<text x="247" y="207" text-anchor="middle" class="tat s">${L('com es veu', 'cómo se ve')}</text></g>`);
    },
    // les parts d'una regla: selector { propietat: valor; }
    w4rule() {
      const cw = 13.25, x0 = 34, X = i => x0 + i * cw, cx = (i, n) => X(i) + n * cw / 2;
      const tok = (i, t, c, at) => `<g ${tA(at)}>${mono(X(i), 113, t, c, 22)}</g>`;
      const up = (x, t, c, at) => `<g ${tA(at)}><path d="M${x} 56V84" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/>${lab(x, 48, t, c, 14)}</g>`;
      const down = (x, y, t, c, at) => `<g ${tA(at)}><path d="M${x} 134V${y - 15}" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/>${lab(x, y, t, c, 13.5)}</g>`;
      return tSvg(226, `<rect x="16" y="84" width="288" height="48" rx="14" fill="#14204A"/>
        ${tok(0, 'h1', '#FF8FB8', .3)}${up(cx(0, 2), 'selector', '#C2185B', .3)}
        ${tok(3, '{', '#FFFFFF', .9)}${down(cx(3, 1), 168, L('obre', 'abre'), '#14204A', .9)}
        ${tok(5, 'color', '#8FC7FF', 1.5)}${up(cx(5, 5), L('propietat', 'propiedad'), '#1565C0', 1.5)}
        ${tok(10, ':', '#FFFFFF', 2)}${down(cx(10, 1), 168, L('dos punts', 'dos puntos'), '#14204A', 2)}
        ${tok(12, 'navy', '#9BE7A4', 2.5)}${up(cx(12, 4), 'valor', '#2E7D32', 2.5)}
        ${tok(16, ';', '#FFFFFF', 3)}${down(cx(16, 1), 196, L('punt i coma', 'punto y coma'), '#14204A', 3)}
        ${tok(18, '}', '#FFFFFF', 3.5)}${down(cx(18, 1), 168, L('tanca', 'cierra'), '#14204A', 3.5)}
        <g ${tA(4.1, 'ta-fade')}>${mono(160, 219, L('selector { propietat: valor; }', 'selector { propiedad: valor; }'), '#5A6BA0', 13, 'text-anchor="middle"')}</g>`);
    },
    // la pantalla barreja llum: rgb(vermell, verd, blau), de 0 a 255
    w4rgb() {
      const S = [[255, 0, 0, L('vermell', 'rojo')], [0, 255, 0, L('verd', 'verde')], [0, 0, 255, L('blau', 'azul')], [255, 255, 0, L('groc', 'amarillo')], [0, 255, 255, L('cian', 'cian')], [255, 255, 255, L('blanc', 'blanco')], [255, 136, 0, L('taronja', 'naranja')]];
      const n = S.length, D = `dur="${n}s" repeatCount="indefinite"`, K = kt(n);
      const row = (k, y, col, letter) => `<circle cx="26" cy="${y}" r="13" fill="${col}"/><text x="26" y="${y + 5}" text-anchor="middle" class="tat w">${letter}</text>
        <rect x="48" y="${y - 8}" width="140" height="16" rx="8" fill="#E8ECF6"/>
        <rect x="48" y="${y - 8}" width="${S[0][k] / 255 * 140}" height="16" rx="8" fill="${col}"><animate attributeName="width" values="${S.map(s => (s[k] / 255 * 140).toFixed(1)).join(';')}" keyTimes="${K}" calcMode="discrete" ${D}/></rect>
        ${S.map((s, i) => `<g opacity="${i ? 0 : 1}">${seg(i, n, D)}${mono(198, y + 5, s[k], '#14204A', 15)}</g>`).join('')}`;
      return tSvg(214, `<rect x="6" y="14" width="222" height="146" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${row(0, 44, '#E53935', 'R')}${row(1, 87, '#2E9E5B', 'G')}${row(2, 130, '#1E63D6', 'B')}
        <rect x="238" y="14" width="74" height="146" rx="16" fill="rgb(255,0,0)" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"><animate attributeName="fill" values="${S.map(s => `rgb(${s[0]},${s[1]},${s[2]})`).join(';')}" keyTimes="${K}" calcMode="discrete" ${D}/></rect>
        ${S.map((s, i) => `<g opacity="${i ? 0 : 1}">${seg(i, n, D)}${mono(160, 186, `rgb(${s[0]}, ${s[1]}, ${s[2]})`, '#14204A', 17, 'text-anchor="middle"')}<text x="160" y="208" text-anchor="middle" class="tat s">= ${s[3]}</text></g>`).join('')}`);
    },
    // el codi hex: # i tres parelles (vermell, verd, blau), de 00 a FF
    w4hex() {
      const cols = [['FF', 80.5, '#E53935', 255, 60, .4], ['88', 132.5, '#2E9E5B', 136, 112, 1.2], ['00', 184.5, '#1E63D6', 0, 164, 2]];
      return tSvg(214, `${mono(34, 56, '#', '#14204A', 34)}
        ${cols.map(([t, cx, c, v, x, at]) => `<g ${tA(at)}>${mono(x, 56, t, c, 34)}<rect x="${cx - 20}" y="64" width="40" height="5" rx="2.5" fill="${c}"/>
          <path d="M${cx} 74V88" stroke="${c}" stroke-width="2.4"/><path d="M${cx - 5} 83l5 6l5 -6" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          ${lab(cx, 110, v, '#14204A', 16)}<rect x="${cx - 9}" y="120" width="18" height="52" rx="6" fill="#E8ECF6"/><rect x="${cx - 9}" y="${120 + 52 - v / 255 * 52}" width="18" height="${v / 255 * 52}" rx="6" fill="${c}"/></g>`).join('')}
        <g ${tA(3)}><rect x="230" y="18" width="80" height="62" rx="14" fill="#FF8800" stroke="#fff" stroke-width="3" filter="url(#bwSh)"/><text x="270" y="102" text-anchor="middle" class="tat s">${L('taronja', 'naranja')}</text></g>
        <g ${tA(3.8)}><rect x="232" y="122" width="16" height="16" rx="4" fill="#000"/>${mono(254, 135, '#000000', '#14204A', 13)}
          <rect x="232" y="150" width="16" height="16" rx="4" fill="#fff" stroke="#9AA3B8" stroke-width="1.5"/>${mono(254, 163, '#FFFFFF', '#14204A', 13)}</g>
        <text x="132" y="202" text-anchor="middle" class="tat s">${L('00 = apagada · FF = al màxim', '00 = apagada · FF = al máximo')}</text>`);
    },
    // el contrast: el text s'ha de poder llegir sobre el fons
    w4contrast() {
      const card = (x, y, bg, fg, ok, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="146" height="80" rx="14" fill="${bg}" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${lab(x + 73, y + 47, 'Festa major', fg, 19)}</g>${tick(x + 134, y + 10, ok, t + .5)}`;
      return tSvg(214, `${card(10, 12, '#FFFFFF', '#FFF176', false, .2)}${card(164, 12, '#BDBDBD', '#9E9E9E', false, .9)}
        ${card(10, 102, '#FFF4D6', '#14204A', true, 1.6)}${card(164, 102, '#1D2433', '#FFD54A', true, 2.3)}
        <g ${tA(3.2, 'ta-fade')}><text x="160" y="206" text-anchor="middle" class="tat s">${L('Fosc sobre clar o clar sobre fosc', 'Oscuro sobre claro o claro sobre oscuro')}</text></g>`);
    },
    // una classe: la regla .avis només pinta els elements que porten class="avis"
    w4class() {
      const D = 'dur="5.5s" repeatCount="indefinite"';
      const rows = [[true, L('Porta la bossa!', '¡Trae la bolsa!')], [false, L('Hi haurà música', 'Habrá música')], [true, L('Gossos lligats', 'Perros atados')], [false, L('A les 10 h', 'A las 10 h')]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="6" width="300" height="56" rx="12" fill="#14204A"/>
          ${mono(24, 29, '.avis', '#FF8FB8', 14)}${mono(75, 29, '{', '#FFFFFF', 14)}
          ${mono(40, 50, 'background-color:', '#8FC7FF', 14)}${mono(194, 50, 'gold', '#9BE7A4', 14)}${mono(228, 50, '; }', '#FFFFFF', 14)}</g>
        ${rows.map(([av, t], k) => { const y = 72 + k * 34; return `<g ${tA(.6 + k * .25, 'ta-in')}><rect x="10" y="${y}" width="268" height="28" rx="9" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          ${av ? `<rect x="10" y="${y}" width="268" height="28" rx="9" fill="#FFD54A" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.4;.46;.93;1" ${D}/></rect>` : ''}
          ${mono(20, y + 19, av ? '&lt;p class="avis"&gt;' : '&lt;p&gt;', av ? '#C2185B' : '#5A6BA0', 13)}<text x="156" y="${y + 19}" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(1.8)}><path d="M296 62C312 70 306 80 284 86" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="4 4"/><path d="M291 80l-8 6l9 3" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M300 62C320 100 314 142 284 154" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="4 4"/><path d="M292 148l-8 6l9 3" fill="none" stroke="#C2185B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // quatre famílies de lletra que té qualsevol ordinador
    w4font() {
      const F = [['serif', 'serif'], ['sans-serif', 'sans-serif'], ['monospace', 'monospace'], ['cursive', 'cursive']];
      return tSvg(214, F.map(([f, name], k) => { const y = 8 + k * 50; return `<g ${tA(.3 + k * .7, 'ta-in')}><rect x="10" y="${y}" width="300" height="42" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="24" y="${y + 29}" font-family="${f}" font-size="23" fill="#14204A">${L('Hola, món!', '¡Hola, mundo!')}</text>
        <rect x="${300 - name.length * 8.4 - 14}" y="${y + 10}" width="${name.length * 8.4 + 8}" height="22" rx="7" fill="#EAF0FF"/>${mono(296, y + 26, name, '#1565C0', 14, 'text-anchor="end"')}</g>`; }).join(''));
    },
    // classe = la samarreta de l'equip (en porten moltes); id = el braçalet de capità (només un)
    w4id() {
      const xs = [46, 122, 198, 274];
      return tSvg(214, `${xs.map((x, k) => `<g ${tA(.2 + k * .3)}>${shirt(x, 62, '#1E88E5', k + 1)}</g>`).join('')}
        <g ${tA(1.6, 'ta-fade')}><path d="M18 104V112H302V104" fill="none" stroke="#C2185B" stroke-width="2.4" stroke-linejoin="round"/>
          ${mono(18, 142, '.blau', '#C2185B', 15)}<text x="82" y="142" class="tat s">${L('→ les 4: la porten molts', '→ las 4: la llevan muchos')}</text></g>
        <g ${tA(3)}><circle cx="198" cy="62" r="40" fill="none" stroke="#FFC531" stroke-width="3" stroke-dasharray="5 5"/><g transform="rotate(-28 178 50)"><rect x="169" y="44" width="19" height="12" rx="3" fill="#FFD54A" stroke="#B88A00" stroke-width="1.6"/><text x="178.5" y="54" text-anchor="middle" font-family="Lexend,system-ui,sans-serif" font-weight="900" font-size="10" fill="#7A5200">C</text></g>
          ${mono(18, 176, '#capita', '#C2185B', 15)}<text x="96" y="176" class="tat s">${L('→ només 1: és únic', '→ solo 1: es único')}</text></g>
        <g ${tA(3.6, 'ta-fade')}><text x="160" y="207" text-anchor="middle" class="tat s">${L('class="blau" · id="capita"', 'class="blau" · id="capita"')}</text></g>`);
    }
  };
})());
