/* Tech IA · unitat 5 · animacions de teoria (TANI). Dibuixos propis de Numi: el cicle del vibe coding, on ajuda la IA i on
   falla, «sembla que funciona ≠ funciona», seguretat (claus i paquets inventats) i llicències (i5-1); l'especificació, els
   exemples, les proves d'acceptació, llegir codi que no has escrit i fer que t'ho expliqui (i5-2); depurar, llegir l'error,
   iterar amb canvis petits, versions i regressions (i5-3); i el projecte: necessitat, pla, construcció i transparència (i5-4). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const TX = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" ${F(sz, c, w)}>${t}</text>`;
  // una finestra d'editor fosca amb línies de codi: [text, color] (color: null = normal)
  const code = (x, y, w, lines, t0 = .2, hl = -1) => `<g ${tA(t0, 'ta-in')}>${box(x, y, w, 22 + lines.length * 17, '#0E1332', '', 12)}<circle cx="${x + 12}" cy="${y + 11}" r="3.5" fill="#EF5A5A"/><circle cx="${x + 23}" cy="${y + 11}" r="3.5" fill="#F2B21B"/><circle cx="${x + 34}" cy="${y + 11}" r="3.5" fill="#3CC47C"/>
    ${lines.map(([t, c], i) => `${i === hl ? `<rect x="${x + 4}" y="${y + 17 + i * 17}" width="${w - 8}" height="16" rx="4" fill="#EF5A5A" opacity=".28"/>` : ''}<text x="${x + 10}" y="${y + 29 + i * 17}" ${M(10.5, c || '#C8F7DC')}>${t}</text>`).join('')}</g>`;
  // un node rodó del cicle: emoji i etiqueta
  const node = (cx, cy, e, t, c, t0) => `<g ${tA(t0, 'ta-pop')}><circle cx="${cx}" cy="${cy}" r="25" fill="${c}22" stroke="${c}" stroke-width="2.5"/><text x="${cx}" y="${cy + 7}" text-anchor="middle" font-size="20">${e}</text>${CT(cx, cy + 41, t, 11, c, 900)}</g>`;
  // graella 2 × 3 de targetes: [emoji, línia 1, línia 2, color, fons]
  const grid6 = (T, t0 = .2) => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 68;
    return `<g ${tA(t0 + i * .3, 'ta-pop')}>${box(x, y, 152, 60, bg, c + '66', 14)}<text x="${x + 24}" y="${y + 38}" text-anchor="middle" font-size="21">${e}</text>${TX(x + 46, y + 26, a, 11.5)}${TX(x + 46, y + 44, b, 11.5, c, 900)}</g>`; }).join('');
  Object.assign(TANI, {
    /* ---------- i5-1 · Vibe coding ---------- */
    // el cicle: descriure → la IA genera → llegir → provar → arreglar (i tornar-hi)
    i51loop() {
      const N = [[160, 34, '💬', L('Descriu', 'Describe'), '#7C3AED'], [272, 92, '🤖', L('Genera', 'Genera'), '#2563EB'], [228, 168, '👀', L('Llegeix', 'Lee'), '#0E9F6E'], [92, 168, '▶️', L('Prova', 'Prueba'), '#D97706'], [48, 92, '🔧', L('Arregla', 'Arregla'), '#DB2777']];
      const A = [[184, 46, 246, 74], [266, 124, 248, 146], [196, 176, 126, 176], [72, 150, 54, 124], [62, 68, 134, 42]];
      return tSvg(214, `${A.map(([a, b, c, d], i) => `<g ${tA(.5 + i * .45, 'ta-fade')}>${arrow(a, b, c, d, '#B4BEE8')}</g>`).join('')}
        ${N.map(([x, y, e, t, c], i) => node(x, y, e, t, c, .2 + i * .45)).join('')}
        <g ${tA(2.7, 'ta-pop')}>${box(96, 82, 128, 46, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 101, L('tu manes', 'tú mandas'), 12, '#6D28D9', 900)}${CT(160, 118, L('la IA ajuda', 'la IA ayuda'), 10.5, '#56628A', 700)}</g>`);
    },
    // on ajuda de veritat i on s'equivoca més
    i51good() {
      return tSvg(214, grid6([['🔘', L('Botons, llistes', 'Botones, listas'), L('ho fa ràpid', 'lo hace rápido'), '#15803D', '#EEFBF3'], ['🧪', L('Casos estranys', 'Casos raros'), L('se\'ls salta', 'se los salta'), '#B91C1C', '#FFF4F4'],
        ['💡', L('Explicar codi', 'Explicar código'), L('molt útil', 'muy útil'), '#15803D', '#EEFBF3'], ['🏫', L('El teu cas', 'Tu caso'), L('no el coneix', 'no lo conoce'), '#B91C1C', '#FFF4F4'],
        ['⚡', L('Un prototip', 'Un prototipo'), L('en segons', 'en segundos'), '#15803D', '#EEFBF3'], ['📜', L('Codi molt llarg', 'Código muy largo'), L('més errors', 'más errores'), '#B91C1C', '#FFF4F4']]));
    },
    // sembla que funciona ≠ funciona: un error petit que només es veu provant
    i51limit() {
      return tSvg(214, `${code(6, 6, 196, [['let count = 0;'], ["btn.addEventListener("], ["  'click', () => {"], ['  count = count + 2;', '#FCA5A5'], ['  out.textContent = count;'], ['});']], .2, 3)}
        <g ${tA(1, 'ta-in')}>${box(212, 6, 102, 126, '#fff', '#DCE4FA', 14)}${CT(263, 26, L('VISTA PRÈVIA', 'VISTA PREVIA'), 9.5, '#56628A', 900)}<text x="263" y="72" text-anchor="middle" ${F(34, '#14204A', 900)}>6</text>${box(232, 88, 62, 26, '#7C3AED', '', 10)}${CT(263, 106, '👆 +1', 12, '#fff')}</g>
        <g ${tA(1.6, 'ta-fade')}>${CT(263, 148, L('3 clics…', '3 clics…'), 11.5, '#56628A', 800)}</g>
        <g ${tA(2.1, 'ta-pop')}>${ko(296, 60, 10)}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 164, 308, 44, '#7C3AED', '', 14)}${CT(160, 183, L('No publiquis codi que no entens', 'No publiques código que no entiendes'), 12, '#fff')}${CT(160, 200, L('ni has provat', 'ni has probado'), 12, '#E9E2FF', 900)}</g>`);
    },
    // seguretat: res de claus al prompt; paquets que la IA s'inventa
    i51sec() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 62, '#FFF4F4', '#F8C9C9')}${TX(18, 26, L('PROMPT', 'PROMPT'), 10, '#B91C1C', 900)}<text x="18" y="48" ${M(11.5, '#14204A')}>${L('…la meva clau és', '…mi clave es')} <tspan fill="#B91C1C">k3y-9F2a…</tspan></text></g>
        <g ${tA(.8, 'ta-pop')}><line x1="16" y1="44" x2="300" y2="44" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"/>${ko(298, 24)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(6, 78, 308, 74, '#F3F0FF', '#D8CCFF')}${TX(18, 98, L('LA IA DIU', 'LA IA DICE'), 10, '#6D28D9', 900)}<text x="18" y="120" ${M(11.5)}>npm install comptador-super-facil</text>${TX(18, 141, L('Aquest paquet… existeix?', 'Este paquete… ¿existe?'), 11.5, '#56628A', 700)}</g>
        <g ${tA(1.9, 'ta-pop')}><text x="292" y="132" text-anchor="middle" font-size="24">🕵️</text></g>
        <g ${tA(2.4, 'ta-pop')}>${box(6, 162, 308, 46, '#0E1332', '', 14)}${CT(160, 181, L('Pot ser inventat… i algú el pot registrar', 'Puede ser inventado… y alguien puede registrarlo'), 11, '#FDE68A')}${CT(160, 198, L('amb codi maliciós. Comprova-ho abans.', 'con código malicioso. Compruébalo antes.'), 11, '#fff', 700)}</g>`);
    },
    // llicències i autoria: el codi pot venir d'algun lloc; digues què ha fet la IA
    i51lic() {
      return tSvg(214, `${code(6, 6, 186, [[L('function barreja(llista) {', 'function mezcla(lista) {')], ['  // …'], ['}']], .2)}
        <g ${tA(.9, 'ta-pop')}>${box(200, 10, 114, 64, '#FFF7E6', '#F7D27A', 12)}<text x="214" y="34" font-size="16">📜</text>${TX(234, 32, L('Llicència:', 'Licencia:'), 10.5, '#92400E', 900)}${TX(210, 52, L('cal citar', 'hay que citar'), 10.5, '#92400E', 700)}${TX(210, 66, L("l'autora", 'a la autora'), 10.5, '#92400E', 700)}</g>
        <g ${tA(1.5, 'ta-fade')}>${arrow(160, 96, 160, 112, '#B4BEE8')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(6, 118, 308, 90, '#EEFBF3', '#B9EBD2')}${TX(18, 138, L('AL TEU PROJECTE', 'EN TU PROYECTO'), 10, '#15803D', 900)}
          ${TX(18, 160, L('✓ Cito el codi que no és meu', '✓ Cito el código que no es mío'), 12)}${TX(18, 180, L('✓ «Fet amb ajuda d\'IA i revisat per mi»', '✓ «Hecho con ayuda de IA y revisado por mí»'), 12)}${TX(18, 200, L('✓ Segueixo les normes del centre', '✓ Sigo las normas del centro'), 12)}</g>`);
    },
    /* ---------- i5-2 · Descriu bé, llegeix el codi ---------- */
    // les tres preguntes d'una bona descripció
    i52spec() {
      const C = [['👀', L('Què es veu', 'Qué se ve'), [L('un número gran', 'un número grande'), L('botó «+1»', 'botón «+1»')], '#2563EB', '#EEF3FF'], ['👆', L('Què passa quan…', 'Qué pasa cuando…'), [L('toco +1: suma 1', 'toco +1: suma 1'), L('arribo a 10: 🎉', 'llego a 10: 🎉')], '#7C3AED', '#F3F0FF'], ['🎨', L('Detalls', 'Detalles'), [L('fons blau', 'fondo azul'), L('missatge verd', 'mensaje verde')], '#DB2777', '#FFF0F7']];
      return tSvg(214, `${C.map(([e, t, it, c, bg], i) => { const x = 6 + i * 104; return `<g ${tA(.2 + i * .5, 'ta-in')}>${box(x, 6, 100, 150, bg, c + '55', 14)}<text x="${x + 50}" y="40" text-anchor="middle" font-size="24">${e}</text>${CT(x + 50, 62, t, 10.5, c, 900)}
        ${it.map((s, j) => `<g ${tA(.5 + i * .5 + j * .25, 'ta-pop')}>${box(x + 7, 76 + j * 36, 86, 28, '#fff', c + '44', 9)}${CT(x + 50, 94 + j * 36, s, 9.5, '#14204A', 700)}</g>`).join('')}</g>`; }).join('')}
        <g ${tA(2.2, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('+ per a qui és i per a què serveix', '+ para quién es y para qué sirve'), 12, '#fff')}${CT(160, 200, L('(la IA no ho pot endevinar)', '(la IA no lo puede adivinar)'), 10.5, '#B9C1F2', 700)}</g>`);
    },
    // un exemple concret: entrada → el que ha de passar
    i52ex() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 146, 118, '#fff', '#DCE4FA', 14)}${CT(79, 26, L('SI FAIG…', 'SI HAGO…'), 10, '#56628A', 900)}${box(18, 38, 122, 28, '#F8FAFF', '#C7D2FE', 9)}<text x="28" y="57" ${M(12)}>${L('llet', 'leche')}</text>${box(40, 76, 78, 28, '#7C3AED', '', 10)}${CT(79, 95, L('Afegeix', 'Añade'), 12, '#fff')}</g>
        <g ${tA(.8, 'ta-fade')}>${arrow(156, 66, 168, 66, '#7C3AED')}</g>
        <g ${tA(1.1, 'ta-in')}>${box(172, 6, 142, 118, '#EEFBF3', '#B9EBD2', 14)}${CT(243, 26, L('…HA DE PASSAR', '…TIENE QUE PASAR'), 10, '#15803D', 900)}
          <g ${tA(1.5, 'ta-pop')}>${TX(186, 56, `• ${L('llet', 'leche')}`, 13)}</g><g ${tA(1.9, 'ta-pop')}>${TX(186, 84, L('Pendents: 1', 'Pendientes: 1'), 12, '#15803D', 900)}</g><g ${tA(2.2, 'ta-pop')}>${TX(186, 108, L('caixa buida', 'caja vacía'), 11, '#56628A', 700)}</g></g>
        <g ${tA(2.6, 'ta-pop')}>${box(6, 134, 308, 74, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 158, L('Un exemple deixa clar el que vols…', 'Un ejemplo deja claro lo que quieres…'), 12, '#6D28D9')}${CT(160, 180, L('…i després es converteix en una prova', '…y después se convierte en una prueba'), 12, '#14204A', 700)}${CT(160, 198, '✓', 13, '#15803D', 900)}</g>`);
    },
    // proves d'acceptació: frases que es poden comprovar (i una de vaga)
    i52test() {
      const T = [[L('Amb la caixa buida, no afegeix res', 'Con la caja vacía, no añade nada'), 1], [L('Amb 3 tasques, diu «Pendents: 3»', 'Con 3 tareas, dice «Pendientes: 3»'), 1], [L('Si toco una tasca, es ratlla', 'Si toco una tarea, se tacha'), 1], [L('Que sigui xula', 'Que sea chula'), 0]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 202, '#fff', '#DCE4FA', 16)}${TX(20, 30, L("L'APP ESTÀ BÉ SI…", 'LA APP ESTÁ BIEN SI…'), 11, '#2563EB', 900)}</g>
        ${T.map(([t, g], i) => `<g ${tA(.6 + i * .5, 'ta-in')}>${box(16, 40 + i * 37, 288, 30, g ? '#EEFBF3' : '#FFF4F4', g ? '#B9EBD2' : '#F8C9C9', 10)}${TX(28, 60 + i * 37, t, 11.5, '#14204A', 700)}</g><g ${tA(.9 + i * .5, 'ta-pop')}>${g ? ok(288, 55 + i * 37, 9) : ko(288, 55 + i * 37, 9)}</g>`).join('')}
        <g ${tA(2.8, 'ta-fade')}>${CT(160, 200, L('«Xula» no es pot comprovar: és massa vaga', '«Chula» no se puede comprobar: es demasiado vaga'), 10, '#B91C1C', 800)}</g>`);
    },
    // llegir codi que no has escrit: dels id de l'HTML als addEventListener
    i52read() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 140, 108, '#FFF4E8', '#F8D2A8', 14)}${TX(16, 26, 'index.html', 10.5, '#B45309', 900)}<text x="16" y="50" ${M(10.5)}>&lt;p id="<tspan fill="#B45309">count</tspan>"&gt;</text><text x="16" y="72" ${M(10.5)}>&lt;button</text><text x="22" y="90" ${M(10.5)}>id="<tspan fill="#DB2777">btn</tspan>"&gt;</text></g>
        ${code(156, 6, 158, [["get…('btn')", '#F9A8D4'], ['.addEventListener('], ["'click', () => {"], ['  count++;'], ["  get…('count')", '#FCD34D'], ['})']], .7)}
        <g ${tA(1.4, 'ta-fade')}>${arrow(104, 86, 164, 40, '#DB2777')}</g><g ${tA(1.8, 'ta-fade')}>${arrow(104, 48, 164, 108, '#B45309')}</g>
        <g ${tA(2.3, 'ta-in')}>${box(6, 140, 308, 68, '#F3F0FF', '#D8CCFF', 14)}${TX(18, 162, L('1. Busca els id a l\'HTML', '1. Busca los id en el HTML'), 11.5)}${TX(18, 181, L('2. Busca qui els fa servir a app.js', '2. Busca quién los usa en app.js'), 11.5)}${TX(18, 200, L('3. Segueix una variable de dalt a baix', '3. Sigue una variable de arriba abajo'), 11.5)}</g>`);
    },
    // «explica-m'ho»… i comprova-ho: predir, executar, comparar
    i52explain() {
      const S = [['🤖', L('«Suma 1 a', '«Suma 1 a'), L('cada clic»', 'cada clic»'), '#2563EB', '#EEF3FF'], ['🤔', L('Predic:', 'Predigo:'), L('3 clics → 3', '3 clics → 3'), '#7C3AED', '#F3F0FF'], ['▶️', L('Executo i…', 'Ejecuto y…'), L('surt 3 ✓', 'sale 3 ✓'), '#15803D', '#EEFBF3']];
      return tSvg(214, `${S.map(([e, a, b, c, bg], i) => { const x = 6 + i * 106; return `<g ${tA(.2 + i * .7, 'ta-pop')}>${box(x, 30, 96, 110, bg, c + '55', 14)}<text x="${x + 48}" y="68" text-anchor="middle" font-size="26">${e}</text>${CT(x + 48, 96, a, 11, '#14204A', 700)}${CT(x + 48, 116, b, 11.5, c, 900)}</g>${i < 2 ? `<g ${tA(.6 + i * .7, 'ta-fade')}>${arrow(x + 98, 85, x + 108, 85, '#B4BEE8')}</g>` : ''}`; }).join('')}
        ${CT(160, 18, L("L'EXPLICACIÓ TAMBÉ POT FALLAR", 'LA EXPLICACIÓN TAMBIÉN PUEDE FALLAR'), 10.5, '#56628A', 900)}
        <g ${tA(2.4, 'ta-pop')}>${box(6, 154, 308, 54, '#0E1332', '', 14)}${CT(160, 177, L('El navegador no menteix:', 'El navegador no miente:'), 12, '#fff')}${CT(160, 196, L('prova-ho sempre', 'pruébalo siempre'), 12, '#86EFAC', 900)}</g>`);
    },
    /* ---------- i5-3 · Depura i itera ---------- */
    // reprodueix → aïlla → arregla → torna a provar
    i53debug() {
      const S = [['🔁', L('Reprodueix', 'Reproduce'), '#2563EB'], ['🔍', L('Aïlla', 'Aísla'), '#7C3AED'], ['🔧', L('Arregla', 'Arregla'), '#DB2777'], ['✅', L('Comprova', 'Comprueba'), '#15803D']];
      return tSvg(214, `${S.map(([e, t, c], i) => { const x = 46 + i * 76; return `${node(x, 58, e, t, c, .2 + i * .55)}${i < 3 ? `<g ${tA(.5 + i * .55, 'ta-fade')}>${arrow(x + 28, 58, x + 46, 58, '#B4BEE8')}</g>` : ''}`; }).join('')}
        <g ${tA(2.4, 'ta-in')}>${box(6, 126, 308, 82, '#F6F7FF', '#DCE4FA', 14)}<text x="20" y="150" font-size="20">🐞</text>${TX(48, 148, L('Bug: «el quadre triga 20 s»', 'Bug: «el cuadro tarda 20 s»'), 12)}${TX(48, 170, L('Passos: Comença → espera…', 'Pasos: Empieza → espera…'), 11, '#56628A', 700)}${TX(48, 192, L('Línia: el temps × 10', 'Línea: el tiempo × 10'), 11, '#DB2777', 900)}</g>`);
    },
    // el missatge d'error et diu on mirar (i hi ha errors sense missatge)
    i53err() {
      return tSvg(214, `${code(6, 6, 308, [["const out = document.getElementById('count');"], ["btn.addEventListener('click', () => {"], ['  comptaClics();', '#FCA5A5'], ['});']], .2, 2)}
        <g ${tA(1, 'ta-pop')}>${box(6, 100, 308, 34, '#FFF4DB', '#F7D27A', 10)}${TX(16, 121, L('⚠️ Error a la línia 3: comptaClics is not defined', '⚠️ Error en la línea 3: comptaClics is not defined'), 10.5, '#6B4E00', 800)}</g>
        <g ${tA(1.7, 'ta-in')}>${box(6, 144, 150, 64, '#EEF3FF', '#C7D2FE', 14)}${CT(81, 166, L('Amb missatge:', 'Con mensaje:'), 11, '#2563EB', 900)}${CT(81, 184, L('mira la línia', 'mira la línea'), 11, '#14204A', 700)}${CT(81, 200, L('i el nom', 'y el nombre'), 11, '#14204A', 700)}</g>
        <g ${tA(2.2, 'ta-in')}>${box(164, 144, 150, 64, '#FFF4F4', '#F8C9C9', 14)}${CT(239, 166, L('Sense missatge:', 'Sin mensaje:'), 11, '#B91C1C', 900)}${CT(239, 184, L('funciona… malament', 'funciona… mal'), 11, '#14204A', 700)}${CT(239, 200, L('→ només provant', '→ solo probando'), 11, '#14204A', 700)}</g>`);
    },
    // demanar-ho tot de cop vs. canvis petits d'un en un
    i53iter() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 150, '#FFF4F4', '#F8C9C9', 14)}${CT(81, 28, L('TOT DE COP', 'TODO DE GOLPE'), 10.5, '#B91C1C', 900)}${box(16, 38, 130, 50, '#fff', '#F8C9C9', 10)}${CT(81, 58, L('«Arregla-ho tot i', '«Arréglalo todo y'), 10.5, '#14204A', 700)}${CT(81, 76, L('afegeix 5 coses»', 'añade 5 cosas»'), 10.5, '#14204A', 700)}</g>
        <g ${tA(.9, 'ta-pop')}><text x="81" y="128" text-anchor="middle" font-size="30">💥</text>${CT(81, 148, L('i ara res va bé', 'y ahora nada va bien'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(164, 6, 150, 150, '#EEFBF3', '#B9EBD2', 14)}${CT(239, 28, L("D'UN EN UN", 'DE UNO EN UNO'), 10.5, '#15803D', 900)}</g>
        ${[L('1 canvi petit', '1 cambio corto'), L('provo', 'pruebo'), L('1 canvi més', '1 cambio más')].map((t, i) => `<g ${tA(1.6 + i * .45, 'ta-pop')}>${box(176, 40 + i * 36, 126, 28, '#fff', '#B9EBD2', 9)}${TX(188, 59 + i * 36, t, 11, '#14204A', 700)}${ok(288, 54 + i * 36, 8)}</g>`).join('')}
        <g ${tA(3, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('Digues què passa i què esperaves:', 'Di qué pasa y qué esperabas:'), 11.5, '#fff')}${CT(160, 200, L('«triga 20 s; hauria de trigar 1-3 s»', '«tarda 20 s; debería tardar 1-3 s»'), 11, '#FDE68A', 700)}</g>`);
    },
    // versions: v1, v2, v3 trenca → tornem a v2
    i53ver() {
      const V = [['v1', L('comptador', 'contador'), 1], ['v2', L('+ reinici', '+ reinicio'), 1], ['v3', L('+ colors', '+ colores'), 0]];
      return tSvg(214, `<g ${tA(.2, 'ta-fade')}><line x1="40" y1="70" x2="290" y2="70" stroke="#C7D2FE" stroke-width="4" stroke-linecap="round"/></g>
        ${V.map(([v, t, g], i) => { const x = 50 + i * 110; return `<g ${tA(.4 + i * .6, 'ta-pop')}><circle cx="${x}" cy="70" r="20" fill="${g ? '#7C3AED' : '#EF5A5A'}"/>${CT(x, 75, v, 13, '#fff', 900)}${CT(x, 104, t, 11, '#14204A', 700)}${g ? ok(x + 16, 52, 8) : ko(x + 16, 52, 8)}</g>`; }).join('')}
        <g ${tA(2.3, 'ta-fade')}><path d="M266 114 C 246 146, 186 146, 166 114" fill="none" stroke="#DB2777" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M166 114 l-1 9 m1 -9 l8 4" stroke="#DB2777" stroke-width="2.5" stroke-linecap="round" fill="none"/>${CT(216, 157, L('torno a la v2', 'vuelvo a la v2'), 11, '#DB2777', 900)}</g>
        <g ${tA(2.8, 'ta-in')}>${box(6, 166, 308, 42, '#F3F0FF', '#D8CCFF', 14)}<text x="18" y="185" ${M(11, '#6D28D9')}>v2: ${L('«afegit el botó de reinici»', '«añadido el botón de reinicio»')}</text>${TX(18, 201, L('cada versió, amb un missatge que diu què canvia', 'cada versión, con un mensaje que dice qué cambia'), 10, '#56628A', 700)}</g>`);
    },
    // regressió: arreglar una cosa n'espatlla una altra → tornar a passar totes les proves
    i53reg() {
      const T = [L('3 clics → 3', '3 clics → 3'), L('reinici → 0', 'reinicio → 0'), L('a 10: missatge', 'a 10: mensaje')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 140, '#EEFBF3', '#B9EBD2', 14)}${CT(81, 26, L('ABANS DEL CANVI', 'ANTES DEL CAMBIO'), 10, '#15803D', 900)}${T.map((t, i) => `${TX(18, 56 + i * 30, t, 11.5, '#14204A', 700)}${ok(138, 52 + i * 30, 8)}`).join('')}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(158, 76, 166, 76, '#B4BEE8')}</g>
        <g ${tA(1.2, 'ta-in')}>${box(164, 6, 150, 140, '#FFF4F4', '#F8C9C9', 14)}${CT(239, 26, L('DESPRÉS', 'DESPUÉS'), 10, '#B91C1C', 900)}${T.map((t, i) => `${TX(176, 56 + i * 30, t, 11.5, '#14204A', 700)}<g ${tA(1.5 + i * .3, 'ta-pop')}>${i === 0 ? ko(296, 52, 8) : ok(296, 52 + i * 30, 8)}</g>`).join('')}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 156, 308, 52, '#14204A', '', 14)}${CT(160, 177, L('Regressió: el que anava bé ara falla', 'Regresión: lo que iba bien ahora falla'), 12, '#FCA5A5')}${CT(160, 196, L('→ després de cada canvi, totes les proves', '→ después de cada cambio, todas las pruebas'), 11, '#fff', 700)}</g>`);
    },
    /* ---------- i5-4 · Projecte ---------- */
    // comença pel problema: una app petita que resol una cosa
    i54need() {
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}>${box(6, 6, 140, 110, '#FFF7E6', '#F7D27A', 14)}<text x="76" y="52" text-anchor="middle" font-size="30">😩</text>${CT(76, 80, L('«Cada dia perdem', '«Cada día perdemos'), 10.5, '#92400E', 700)}${CT(76, 98, L('el compte dels gots»', 'la cuenta de los vasos»'), 10.5, '#92400E', 700)}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(150, 60, 172, 60, '#B4BEE8')}</g>
        <g ${tA(1.2, 'ta-pop')}>${box(176, 6, 138, 110, '#fff', '#DCE4FA', 14)}${CT(245, 28, L('GOTS', 'VASOS'), 10, '#56628A', 900)}<text x="245" y="72" text-anchor="middle" ${F(32, '#14204A', 900)}>12</text>${box(215, 84, 60, 24, '#16A34A', '', 10)}${CT(245, 101, '+1', 12, '#fff')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(6, 126, 308, 82, '#F3F0FF', '#D8CCFF', 14)}${TX(18, 148, L('✓ Una cosa, ben feta', '✓ Una cosa, bien hecha'), 12)}${TX(18, 170, L('✓ Saps qui la farà servir i quan', '✓ Sabes quién la usará y cuándo'), 12)}${TX(18, 192, L('✗ Res de dades personals de ningú', '✗ Nada de datos personales de nadie'), 12, '#B91C1C')}</g>`);
    },
    // primer el pla: especificació i proves; després, generar
    i54plan() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 148, 150, '#EEF3FF', '#C7D2FE', 14)}<text x="22" y="32" font-size="16">📐</text>${TX(44, 31, L('Especificació', 'Especificación'), 11.5, '#2563EB', 900)}
          ${[L('què es veu', 'qué se ve'), L('què passa quan…', 'qué pasa cuando…'), L('detalls', 'detalles'), L('què no farà mai', 'qué no hará nunca')].map((t, i) => `<g ${tA(.5 + i * .25, 'ta-pop')}>${TX(20, 60 + i * 24, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(166, 6, 148, 150, '#EEFBF3', '#B9EBD2', 14)}<text x="182" y="32" font-size="16">🧪</text>${TX(204, 31, L('Proves', 'Pruebas'), 11.5, '#15803D', 900)}
          ${[L('3 clics → 3', '3 clics → 3'), L('reinici → 0', 'reinicio → 0'), L('a 20 → 🎉', 'a 20 → 🎉')].map((t, i) => `<g ${tA(1.6 + i * .25, 'ta-pop')}>${TX(180, 60 + i * 26, t, 11, '#14204A', 700)}${ok(296, 56 + i * 26, 7)}</g>`).join('')}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 166, 308, 42, '#7C3AED', '', 14)}${CT(160, 192, L('…i després: ✨ Genera el codi', '…y después: ✨ Genera el código'), 12.5, '#fff')}</g>`);
    },
    // construir: generar, llegir, provar, arreglar, comentar el canvi
    i54build() {
      return tSvg(214, `${code(6, 6, 308, [[L('// v1: generat per la IA', '// v1: generado por la IA'), '#94A3B8'], [L('let gots = 0;', 'let vasos = 0;')], ['btn.addEventListener(\'click\', () => {'], [L('  gots = gots + 1;', '  vasos = vasos + 1;')], [L('  // he canviat: missatge a 20 (Laia)', '  // he cambiado: mensaje a 20 (Laia)'), '#86EFAC'], [L('  if (gots === 20) msg.textContent = \'🎉\';', '  if (vasos === 20) msg.textContent = \'🎉\';')]], .2)}
        <g ${tA(1.3, 'ta-pop')}>${box(6, 140, 96, 68, '#EEF3FF', '#C7D2FE', 12)}<text x="54" y="170" text-anchor="middle" font-size="20">👀</text>${CT(54, 194, L('llegeixo', 'leo'), 11, '#2563EB', 900)}</g>
        <g ${tA(1.7, 'ta-pop')}>${box(112, 140, 96, 68, '#FFF7E6', '#F7D27A', 12)}<text x="160" y="170" text-anchor="middle" font-size="20">🧪</text>${CT(160, 194, L('provo', 'pruebo'), 11, '#B45309', 900)}</g>
        <g ${tA(2.1, 'ta-pop')}>${box(218, 140, 96, 68, '#EEFBF3', '#B9EBD2', 12)}<text x="266" y="170" text-anchor="middle" font-size="20">💬</text>${CT(266, 194, L('comento', 'comento'), 11, '#15803D', 900)}</g>`);
    },
    // transparència: què ha fet la IA i què he fet jo
    i54honest() {
      const A = [L('codi de partida', 'código de partida'), L('estil i colors', 'estilo y colores'), L('explicar línies', 'explicar líneas')], B = [L('la idea i per a qui', 'la idea y para quién'), L('les proves', 'las pruebas'), L('arreglar un bug', 'arreglar un bug'), L('decidir què es publica', 'decidir qué se publica')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 160, '#EEF3FF', '#C7D2FE', 14)}<text x="24" y="34" font-size="18">🤖</text>${TX(46, 32, L('La IA', 'La IA'), 12, '#2563EB', 900)}${A.map((t, i) => `<g ${tA(.5 + i * .3, 'ta-pop')}>${TX(18, 62 + i * 26, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(164, 6, 150, 160, '#FFF0F7', '#F9C2DD', 14)}<text x="182" y="34" font-size="18">🧑</text>${TX(204, 32, L('Jo', 'Yo'), 12, '#DB2777', 900)}${B.map((t, i) => `<g ${tA(1.6 + i * .3, 'ta-pop')}>${TX(176, 62 + i * 26, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(3, 'ta-pop')}>${box(6, 174, 308, 34, '#14204A', '', 12)}${CT(160, 196, L('Declarar-ho és explicar com s\'ha fet', 'Declararlo es explicar cómo se ha hecho'), 12, '#fff')}</g>`);
    }
  });

  /* ---------- Taller i5-5 · vibe coding amb un xat de veritat ---------- */
  // una «pastilla» de text dins d'una targeta
  const pill = (x, y, w, t, c, bg, t0) => `<g ${tA(t0, 'ta-pop')}>${box(x, y, w, 22, bg, c + '55', 11)}${CT(x + w / 2, y + 15, t, 9, c, 800)}</g>`;
  Object.assign(TANI, {
    // de l'especificació (i les normes) al prompt, i del xat a un sol fitxer HTML
    i55spec() {
      const S = [['👀', L('què es veu', 'qué se ve')], ['👆', L('què passa', 'qué pasa')], ['✅', L('les proves', 'las pruebas')]];
      const N = [L('1 fitxer HTML', '1 archivo HTML'), L('CSS i JS a dins', 'CSS y JS dentro'), L('sense internet', 'sin internet'), L('amb id', 'con id')];
      const C = [['<!DOCTYPE html>', '#93C5FD'], ['<style>…</style>', '#FDBA74'], [`<button id="${L('mes', 'mas')}">`, '#93C5FD'], ['<script>', '#C8F7DC'], ['  addEventListener', '#C8F7DC'], ['</html>', '#93C5FD']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 100, 150, '#EEF3FF', '#C7D2FE', 14)}${CT(54, 26, L('ESPECIFICACIÓ', 'ESPECIFICACIÓN'), 9.5, '#2563EB', 900)}</g>
        ${S.map(([e, t], i) => `<g ${tA(.4 + i * .3, 'ta-pop')}>${box(10, 38 + i * 38, 88, 30, '#fff', '#C7D2FE', 10)}<text x="23" y="${58 + i * 38}" text-anchor="middle" font-size="13">${e}</text>${TX(34, 57 + i * 38, t, 9.5, '#14204A', 800)}</g>`).join('')}
        <g ${tA(1.3, 'ta-fade')}>${arrow(106, 80, 112, 80, '#B4BEE8')}</g>
        <g ${tA(1.4, 'ta-in')}>${box(114, 6, 96, 150, '#F3F0FF', '#D8CCFF', 14)}${CT(162, 26, L('NORMES', 'NORMAS'), 9.5, '#6D28D9', 900)}</g>
        ${N.map((t, i) => pill(120, 38 + i * 29, 84, t, '#6D28D9', '#fff', 1.6 + i * .25)).join('')}
        <g ${tA(2.6, 'ta-fade')}>${arrow(212, 80, 218, 80, '#B4BEE8')}</g>
        <g ${tA(2.7, 'ta-in')}>${box(220, 6, 96, 150, '#0E1332', '', 14)}<text x="232" y="27" font-size="12" fill="#C4B5FD">✦</text>${TX(246, 26, L('el xat', 'el chat'), 10, '#C4B5FD', 900)}</g>
        ${C.map(([t, c], i) => `<g ${tA(2.9 + i * .18, 'ta-fade')}><text x="228" y="${50 + i * 17}" ${M(8.5, c)}>${t.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text></g>`).join('')}
        <g ${tA(3.9, 'ta-pop')}>${box(4, 166, 312, 42, '#14204A', '', 14)}${CT(160, 184, L('especificació + normes', 'especificación + normas'), 11.5, '#fff')}${CT(160, 200, L('→ un sol fitxer que pots llegir i provar', '→ un solo archivo que puedes leer y probar'), 10.5, '#FDE68A', 700)}</g>`);
    },
    // copiar del xat, enganxar a l'index.html de Numi, mirar la vista prèvia i fer les proves d'acceptació
    i55paste() {
      const T = [[L('3 tocs a +1 → diu 3', '3 toques en +1 → dice 3'), 1], [L('Reinicia → torna a 0', 'Reinicia → vuelve a 0'), 1], [L('a 0, toco −1 → surt −1 (havia de ser 0)', 'en 0, toco −1 → sale −1 (tenía que ser 0)'), 0]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 96, 100, '#0E1332', '', 12)}<text x="14" y="24" font-size="11" fill="#C4B5FD">✦</text>${TX(28, 23, L('el xat', 'el chat'), 9.5, '#C4B5FD', 900)}
          ${['<!DOCTYPE html>', '<style>…', '<script>…', '</html>'].map((t, i) => `<text x="12" y="${42 + i * 13}" ${M(8, '#C8F7DC')}>${t.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`).join('')}</g>
        <g ${tA(.7, 'ta-wob')}>${box(26, 84, 58, 16, '#7C3AED', '', 8)}${CT(55, 96, L('📋 Copia', '📋 Copia'), 8.5, '#fff')}</g>
        <g ${tA(1, 'ta-fade')}>${arrow(102, 56, 110, 56, '#B4BEE8')}</g>
        <g ${tA(1.1, 'ta-in')}>${box(112, 6, 100, 100, '#fff', '#DCE4FA', 12)}<rect x="112" y="6" width="100" height="18" rx="12" fill="#F1F5FB"/>${TX(122, 19, 'index.html', 9, '#C2410C', 900)}</g>
        ${[0, 1, 2, 3, 4, 5].map(i => `<g ${tA(1.3 + i * .1, 'ta-fade')}><text x="118" y="${38 + i * 11}" ${M(7.5, '#94A3B8')}>${i + 1}</text><rect x="128" y="${32 + i * 11}" width="${[60, 44, 70, 52, 66, 30][i]}" height="5" rx="2.5" fill="${['#93C5FD', '#FDBA74', '#93C5FD', '#86EFAC', '#86EFAC', '#93C5FD'][i]}"/></g>`).join('')}
        <g ${tA(2, 'ta-fade')}>${arrow(214, 56, 222, 56, '#B4BEE8')}</g>
        <g ${tA(2.1, 'ta-pop')}>${box(224, 6, 92, 100, '#EEF3FF', '#C7D2FE', 12)}${CT(270, 22, L('vista prèvia', 'vista previa'), 8.5, '#56628A', 800)}<text x="270" y="60" text-anchor="middle" ${F(30, '#2563EB', 900)}>3</text>
          ${['+1', '−1', '↺'].map((t, i) => `${box(234 + i * 25, 72, 22, 20, i === 2 ? '#64748B' : '#7C3AED', '', 7)}${CT(245 + i * 25, 86, t, 10, '#fff')}`).join('')}</g>
        <g ${tA(2.6, 'ta-in')}>${box(4, 116, 312, 92, '#fff', '#DCE4FA', 14)}${TX(16, 134, L("PROVES D'ACCEPTACIÓ", 'PRUEBAS DE ACEPTACIÓN'), 9.5, '#2563EB', 900)}</g>
        ${T.map(([t, g], i) => `<g ${tA(2.9 + i * .4, 'ta-in')}>${g ? ok(26, 153 + i * 20, 8) : ko(26, 153 + i * 20, 8)}${TX(40, 157 + i * 20, t, 10.5, g ? '#14204A' : '#B91C1C', 700)}</g>`).join('')}`);
    },
    // l'informe d'error al xat (què he fet, què passa, què esperava) → v2 → totes les proves una altra vegada
    i55bug() {
      const R = [[L('QUÈ HE FET', 'QUÉ HE HECHO'), L('toco −1 amb el marcador a 0', 'toco −1 con el marcador en 0'), '#2563EB'], [L('QUÈ PASSA', 'QUÉ PASA'), L('surt −1', 'sale −1'), '#DB2777'], [L('QUÈ ESPERAVA', 'QUÉ ESPERABA'), L('que es quedi a 0', 'que se quede en 0'), '#15803D']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(34, 4, 282, 100, '#F3F0FF', '#D8CCFF', 14)}<circle cx="18" cy="24" r="13" fill="#7C3AED"/>${CT(18, 29, L('tu', 'tú'), 10, '#fff', 900)}</g>
        ${R.map(([k, t, c], i) => `<g ${tA(.5 + i * .45, 'ta-in')}>${box(44, 14 + i * 29, 92, 22, c, '', 11)}${CT(90, 29 + i * 29, k, 8.5, '#fff', 900)}${TX(144, 29 + i * 29, t, 10.5, '#14204A', 700)}</g>`).join('')}
        <g ${tA(1.9, 'ta-pop')}>${box(4, 112, 220, 42, '#0E1332', '', 14)}<text x="16" y="138" font-size="13" fill="#C4B5FD">✦</text><text x="32" y="130" ${F(10, '#C4B5FD', 900)}>${L('el xat', 'el chat')}</text><text x="32" y="146" ${M(8.5, '#C8F7DC')}>${L('if (punts &gt; 0) punts = punts - 1;', 'if (puntos &gt; 0) puntos = puntos - 1;')}</text></g>
        <g ${tA(2.4, 'ta-pop')}><circle cx="252" cy="133" r="20" fill="#7C3AED"/>${CT(252, 138, 'v2', 13, '#fff', 900)}${ok(270, 117, 8)}</g>
        <g ${tA(2.8, 'ta-in')}>${box(4, 162, 312, 46, '#14204A', '', 14)}${CT(116, 181, L('i després: TOTES les proves', 'y después: TODAS las pruebas'), 11.5, '#fff')}${CT(116, 198, L('(per si hi ha una regressió)', '(por si hay una regresión)'), 10, '#B9C1F2', 700)}</g>
        ${[0, 1, 2].map(i => `<g ${tA(3.2 + i * .25, 'ta-pop')}>${ok(250 + i * 22, 185, 9)}</g>`).join('')}`);
    }
  });
}
