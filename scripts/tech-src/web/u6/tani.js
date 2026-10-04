/* Tech Web · unitat 6 «Disposició» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Caixes que fan pila o fila (flexbox), on es col·loquen dins la fila (justify-content) i de
   dalt a baix (align-items), la graella (grid) i la unitat fr, i les taules (files, cel·les, capçaleres i el lector de
   pantalla). El codi es dibuixa amb lletra de màquina d'escriure, com a l'editor. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  // una animació SMIL que dura tot el cicle (5,5 s): valors en els segons indicats (el primer 0, l'últim 5,5)
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  // visible només entre dos moments del cicle
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .12, b, b + .12, D]);
  const mono = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 14}" font-weight="${o.w || 700}" fill="${o.c || '#14204A'}" text-anchor="${o.a || 'start'}">${txt}</text>`;
  const C = { teal: '#14A3B8', ink: '#14204A', gold: '#FFC531', ora: '#F08A24', pink: '#E0538F', vio: '#6C5CE7', grn: '#3CC47C', red: '#EF5A5A', sky: '#BFE6F5', line: '#DCE4FA' };
  const ok = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.grn}"/><path d="M${x - 6} ${y}l4 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t) => `<g ${tA(t, 'ta-wob')}><circle cx="${x}" cy="${y}" r="13" fill="${C.red}"/><path d="M${x - 5} ${y - 5}l10 10M${x + 5} ${y - 5}l-10 10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></g>`;
  // una foto petita: cel, sol i muntanya
  const photo = (x, y, w, h, sky = C.sky, hill = '#3CC47C') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${sky}"/><circle cx="${x + w * .72}" cy="${y + h * .3}" r="${Math.min(w, h) * .13}" fill="${C.gold}"/><path d="M${x} ${y + h}l${w * .35} ${-h * .55}l${w * .2} ${h * .25}l${w * .2} ${-h * .2}l${w * .25} ${h * .5}z" fill="${hill}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="none" stroke="#fff" stroke-width="2"/>`;
  return {
    // per defecte les caixes fan pila; amb display: flex al contenidor, fan fila
    w6stack() {
      const cols = [C.gold, C.pink, C.teal], T = [0, 2, 2.8, 5, D];
      const box = (i) => { const sy = 56 + i * 46, rx = 42 + i * 82;
        return `<rect x="42" y="${sy}" width="236" height="38" rx="9" fill="${cols[i]}">${an('x', `42;42;${rx};${rx};42`, T)}${an('y', `${sy};${sy};56;56;${sy}`, T)}${an('width', '236;236;72;72;236', T)}${an('height', '38;38;126;126;38', T)}</rect>
          <text y="${sy + 25}" x="160" text-anchor="middle" class="tat w b">${i + 1}${an('x', `160;160;${rx + 36};${rx + 36};160`, T)}${an('y', `${sy + 25};${sy + 25};124;124;${sy + 25}`, T)}</text>`; };
      return tSvg(214, `<rect x="30" y="44" width="260" height="150" rx="14" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="7 5"/>
        ${mono(36, 210, '&lt;div class="fila"&gt;', { s: 13, c: C.teal })}
        ${[0, 1, 2].map(box).join('')}
        <g>${an('opacity', '1;1;0;0;1;1', [0, 1.9, 2.05, 5.05, 5.2, D])}<text x="160" y="28" text-anchor="middle" class="tat b">${L("Sense flex: una sota l'altra", 'Sin flex: una debajo de la otra')}</text></g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2, 2.15, 5, 5.15, D])}<rect x="58" y="9" width="204" height="28" rx="14" fill="${C.ink}"/>${mono(160, 28, 'display: flex;', { c: '#fff', a: 'middle' })}</g>`);
    },
    // flexbox es posa al contenidor (el pare), no a cada element (els fills)
    w6parent() {
      const T = [0, 1.4, 2.1, 5, D], cols = [C.gold, C.pink, C.teal];
      const card = (x, sel, col) => `<rect x="${x}" y="6" width="140" height="62" rx="10" fill="${col}"/>${mono(x + 10, 24, `${sel} {`, { s: 13, c: '#fff' })}${mono(x + 10, 42, '  display: flex;', { s: 13, c: '#fff' })}${mono(x + 10, 60, '}', { s: 13, c: '#fff' })}`;
      const arrow = x => `<path d="M${x} 72v14" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/><path d="M${x - 6} 82l6 7l6 -7" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      const good = [0, 1, 2].map(i => { const sy = 100 + i * 22, rx = 22 + i * 44;
        return `<rect x="22" y="${sy}" width="124" height="16" rx="5" fill="${cols[i]}">${an('x', `22;22;${rx};${rx};22`, T)}${an('y', `${sy};${sy};100;100;${sy}`, T)}${an('width', '124;124;36;36;124', T)}${an('height', '16;16;60;60;16', T)}</rect>`; }).join('');
      const bad = [0, 1, 2].map(i => `<rect x="182" y="${100 + i * 22}" width="124" height="16" rx="5" fill="${cols[i]}"/>`).join('');
      return tSvg(226, `${card(12, '.fila', C.teal)}${card(172, '.foto', '#9AA6C8')}${arrow(82)}${arrow(242)}
        <rect x="14" y="92" width="140" height="76" rx="12" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="6 4"/>
        <rect x="174" y="92" width="140" height="76" rx="12" fill="#fff" stroke="#C9D2EA" stroke-width="2.5" stroke-dasharray="6 4"/>
        ${good}${bad}${ok(84, 186, 2.3)}${ko(244, 186, 2.6)}
        <text x="84" y="216" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>${L('al pare: fila!', 'al padre: ¡fila!')}</text>
        <text x="244" y="216" text-anchor="middle" class="tat s" ${tA(2.7, 'ta-fade')}>${L('als fills: res', 'a los hijos: nada')}</text>`);
    },
    // justify-content: on van els elements al llarg de la fila
    w6justify() {
      const T = [0, 1.1, 1.4, 2.5, 2.8, 3.9, 4.2, 5.2, D], P = [[28, 88, 148], [75, 135, 195], [122, 182, 242], [28, 135, 242]], cols = [C.gold, C.pink, C.teal];
      const vals = [['flex-start;', 0, 1.15, 5.3], ['center;', 1.25, 2.6], ['flex-end;', 2.65, 4.0], ['space-between;', 4.05, 5.25]];
      const lab = vals.map(([v, a, b, c]) => c ? `<g>${an('opacity', '1;1;0;0;1;1', [0, b, b + .1, c, c + .1, D])}${mono(170, 30, v, { c: C.vio })}</g>` : `<g opacity="0">${win(a, b)}${mono(170, 30, v, { c: C.vio })}</g>`).join('');
      const boxes = [0, 1, 2].map(i => `<rect x="${P[0][i]}" y="64" width="50" height="62" rx="9" fill="${cols[i]}">${an('x', [0, 0, 1, 1, 2, 2, 3, 3, 0].map(k => P[k][i]).join(';'), T)}</rect>`).join('');
      return tSvg(200, `${mono(22, 30, 'justify-content:')}${lab}
        <rect x="20" y="50" width="280" height="90" rx="14" fill="#EAF6F8" stroke="${C.teal}" stroke-width="2.5"/>${boxes}
        <path d="M28 156h258" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/><path d="M280 149l9 7l-9 7" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="186" text-anchor="middle" class="tat s">${L('Mou els elements al llarg de la fila', 'Mueve los elementos a lo largo de la fila')}</text>`);
    },
    // align-items: de dalt a baix (l'altra direcció)
    w6align() {
      const T = [0, 1.4, 1.7, 3.1, 3.4, 5.1, D], H = [40, 70, 30], X = [34, 104, 174];
      const Y = [[54, 54, 54], [91, 76, 96], [128, 98, 138]], cols = [C.gold, C.pink, C.teal];
      const lab = [['flex-start;', 0, 1.45, 5.15], ['center;', 1.55, 3.15], ['flex-end;', 3.25, 5.15]].map(([v, a, b, c]) => c ? `<g>${an('opacity', '1;1;0;0;1;1', [0, b, b + .1, c, c + .1, D])}${mono(132, 28, v, { c: C.vio })}</g>` : `<g opacity="0">${win(a, b)}${mono(132, 28, v, { c: C.vio })}</g>`).join('');
      const boxes = [0, 1, 2].map(i => `<rect x="${X[i]}" y="54" width="56" height="${H[i]}" rx="9" fill="${cols[i]}">${an('y', [0, 0, 1, 1, 2, 2, 0].map(k => Y[k][i]).join(';'), T)}</rect>`).join('');
      return tSvg(214, `${mono(22, 28, 'align-items:')}${lab}
        <rect x="20" y="46" width="230" height="130" rx="14" fill="#EAF6F8" stroke="${C.teal}" stroke-width="2.5"/>${boxes}
        <path d="M282 56v112" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/><path d="M275 62l7 -8l7 8M275 162l7 8l7 -8" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="202" text-anchor="middle" class="tat s">${L('Mou els elements de dalt a baix', 'Mueve los elementos de arriba abajo')}</text>`);
    },
    // flex: una direcció; grid: files i columnes (les fotos omplen la graella fila a fila)
    w6grid() {
      const hills = ['#3CC47C', '#2E9C6A', '#7FC6A4'];
      const flex = [0, 1, 2, 3].map(i => `<g ${tA(.3 + i * .25)}>${photo(20 + i * 32, 80, 28, 30, C.sky, hills[i % 3])}</g>`).join('');
      const grid = Array.from({ length: 9 }, (_, i) => `<g ${tA(1.5 + i * .3)}>${photo(183 + (i % 3) * 42, 50 + Math.floor(i / 3) * 42, 36, 36, i % 2 ? '#FFE3B3' : C.sky, hills[i % 3])}</g>`).join('');
      return tSvg(220, `${mono(80, 26, 'display: flex', { a: 'middle', c: C.teal })}${mono(240, 26, 'display: grid', { a: 'middle', c: C.vio })}
        <rect x="14" y="72" width="140" height="46" rx="10" fill="#fff" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="6 4"/>${flex}
        <g ${tA(1.2, 'ta-fade')}><path d="M20 134h124" stroke="${C.teal}" stroke-width="3" stroke-linecap="round"/><path d="M138 128l8 6l-8 6" fill="none" stroke="${C.teal}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <rect x="176" y="43" width="140" height="140" rx="12" fill="#fff" stroke="${C.vio}" stroke-width="2.5" stroke-dasharray="6 4"/>${grid}
        <text x="84" y="170" text-anchor="middle" class="tat s">${L('una direcció', 'una dirección')}</text>
        <text x="84" y="190" text-anchor="middle" class="tat s">${L('(fila o columna)', '(fila o columna)')}</text>
        <text x="246" y="206" text-anchor="middle" class="tat s" ${tA(4.3, 'ta-fade')}>${L('files i columnes', 'filas y columnas')}</text>`);
    },
    // la unitat fr: trossos de l'espai que queda
    w6fr() {
      const seg = (x, y, w, col, txt, t) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="${w}" height="40" rx="8" fill="${col}" stroke="#fff" stroke-width="3"/>${mono(x + w / 2, y + 26, txt, { c: '#fff', a: 'middle' })}</g>`;
      const T2 = [0, 3.8, 4.3, 5, D];
      return tSvg(208, `${mono(20, 24, 'grid-template-columns: 1fr 2fr 1fr;', { s: 13 })}
        <rect x="20" y="34" width="280" height="40" rx="8" fill="#EEF2FD"/>${[1, 2, 3].map(k => `<path d="M${20 + k * 70} 34v40" stroke="#B9C4E6" stroke-width="2" stroke-dasharray="4 4" ${tA(.3, 'ta-fade')}/>`).join('')}
        ${seg(20, 34, 70, C.gold, '1fr', .9)}${seg(90, 34, 140, C.pink, '2fr', 1.3)}${seg(230, 34, 70, C.teal, '1fr', 1.7)}
        <g ${tA(2.1, 'ta-fade')}><text x="55" y="96" text-anchor="middle" class="tat s">1/4</text><text x="160" y="96" text-anchor="middle" class="tat s">2/4</text><text x="265" y="96" text-anchor="middle" class="tat s">1/4</text></g>
        ${mono(20, 128, 'grid-template-columns: 120px 1fr;', { s: 13 })}
        <g ${tA(2.6)}><rect x="20" y="138" width="120" height="40" rx="8" fill="${C.vio}" stroke="#fff" stroke-width="3"/>${mono(80, 164, '120px', { c: '#fff', a: 'middle' })}</g>
        <g ${tA(3)}><rect x="140" y="138" width="160" height="40" rx="8" fill="${C.ora}" stroke="#fff" stroke-width="3">${an('width', '160;160;80;80;160', T2)}</rect>
          <text x="220" y="164" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="14" font-weight="700" fill="#fff">1fr${an('x', '220;220;180;180;220', T2)}</text></g>
        <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('1fr = el que queda (i s\'adapta)', '1fr = lo que queda (y se adapta)')}</text>`);
    },
    // una taula: files (tr), cel·les (td) i capçaleres (th)
    w6table() {
      const head = [L('Dia', 'Día'), L('Lloc', 'Lugar'), L('Hora', 'Hora')];
      const rows = [[L('Dissabte', 'Sábado'), L('El moll', 'El muelle'), '10:00'], [L('Diumenge', 'Domingo'), L('El bosc', 'El bosque'), '9:30'], [L('Dimecres', 'Miércoles'), L('La platja', 'La playa'), '18:00']];
      const cx = [64, 160, 256];
      const hl = (x, y, w, h, a, b, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${col}" fill-opacity=".22" stroke="${col}" stroke-width="3.5" opacity="0">${win(a, b)}</rect>`;
      const tag = (txt, a, b, col) => `<g opacity="0">${win(a, b)}<rect x="40" y="184" width="240" height="28" rx="14" fill="${col}"/>${mono(160, 203, txt, { c: '#fff', a: 'middle', s: 13 })}</g>`;
      return tSvg(218, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Sortides del club', 'Salidas del club')}</text>
        <rect x="16" y="34" width="288" height="136" rx="8" fill="#fff" stroke="#C9D2EA" stroke-width="2"/>
        <rect x="16" y="34" width="288" height="34" rx="8" fill="${C.teal}"/>${head.map((h, i) => `<text x="${cx[i]}" y="56" text-anchor="middle" class="tat w">${h}</text>`).join('')}
        ${[1, 2].map(k => `<path d="M${16 + k * 96} 34v136" stroke="#C9D2EA" stroke-width="2"/>`).join('')}${[1, 2].map(k => `<path d="M16 ${68 + k * 34}h288" stroke="#C9D2EA" stroke-width="2"/>`).join('')}
        ${rows.map((r, j) => r.map((c, i) => `<text x="${cx[i]}" y="${90 + j * 34}" text-anchor="middle" class="tat s">${c}</text>`).join('')).join('')}
        ${hl(18, 70, 284, 32, .4, 1.9, C.gold)}${hl(114, 104, 92, 32, 2.0, 3.5, C.pink)}${hl(18, 36, 284, 30, 3.6, 5.2, C.vio)}
        ${tag(L('&lt;tr&gt; = una fila', '&lt;tr&gt; = una fila'), .4, 1.9, C.ora)}${tag(L('&lt;td&gt; = una cel·la', '&lt;td&gt; = una celda'), 2.0, 3.5, C.pink)}${tag(L('&lt;th&gt; = una capçalera', '&lt;th&gt; = una cabecera'), 3.6, 5.2, C.vio)}`);
    },
    // el lector de pantalla llegeix la taula en veu alta: amb th, cada dada té el seu nom
    w6reader() {
      const head = [L('Lloc', 'Lugar'), L('Hora', 'Hora')], rows = [[L('El moll', 'El muelle'), '10:00'], [L('El bosc', 'El bosque'), '9:30']];
      const P1 = [.2, 2.6], P2 = [2.75, 5.25];
      const cx = [52, 128];
      return tSvg(222, `<g opacity="0">${win(...P1)}${mono(14, 24, L('amb &lt;td&gt;', 'con &lt;td&gt;'), { c: C.red })}</g><g opacity="0">${win(...P2)}${mono(14, 24, L('amb &lt;th&gt;', 'con &lt;th&gt;'), { c: C.grn })}</g>
        <rect x="14" y="34" width="152" height="96" rx="8" fill="#fff" stroke="#C9D2EA" stroke-width="2"/>
        <g opacity="0">${win(...P2)}<rect x="14" y="34" width="152" height="32" rx="8" fill="${C.teal}"/>${head.map((h, i) => `<text x="${cx[i]}" y="55" text-anchor="middle" class="tat w">${h}</text>`).join('')}</g>
        <g opacity="0">${win(...P1)}${head.map((h, i) => `<text x="${cx[i]}" y="55" text-anchor="middle" class="tat s">${h}</text>`).join('')}</g>
        <path d="M90 34v96M14 66h152M14 98h152" stroke="#C9D2EA" stroke-width="2"/>
        ${rows.map((r, j) => r.map((c, i) => `<text x="${cx[i]}" y="${87 + j * 32}" text-anchor="middle" class="tat s">${c}</text>`).join('')).join('')}
        <rect x="16" y="100" width="148" height="28" rx="6" fill="${C.gold}" fill-opacity=".25" stroke="${C.gold}" stroke-width="3" ${tA(.6, 'ta-fade')}/>
        <image href="img/ic/headphones.webp" x="206" y="22" width="84" height="84"/>
        <text x="248" y="126" text-anchor="middle" class="tat s">${L('lector de pantalla', 'lector de pantalla')}</text>
        <path d="M232 140l-10 14h20z" fill="${C.ink}"/>
        <rect x="14" y="152" width="292" height="54" rx="16" fill="${C.ink}"/>
        <g opacity="0">${win(.9, 2.6)}<text x="160" y="176" text-anchor="middle" class="tat w s">${L('«el bosc… 9:30…»', '«el bosque… 9:30…»')}</text><text x="160" y="196" text-anchor="middle" class="tat w s">${L('Què vol dir cada dada?', '¿Qué quiere decir cada dato?')}</text></g>
        <g opacity="0">${win(3.3, 5.25)}<text x="160" y="176" text-anchor="middle" class="tat w s">${L('«Lloc: el bosc.', '«Lugar: el bosque.')}</text><text x="160" y="196" text-anchor="middle" class="tat w s">${L('Hora: 9:30»', 'Hora: 9:30»')}</text></g>
        <g opacity="0">${win(3.6, 5.25)}<circle cx="290" cy="152" r="13" fill="${C.grn}"/><path d="M284 152l4 5l8 -9" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    }
  };
})());
