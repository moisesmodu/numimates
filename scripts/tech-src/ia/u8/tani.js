/* Tech IA · unitat 8 · animacions de teoria (TANI). Dibuixos propis de Numi per al projecte final: el problema abans que la
   solució, entrevistes amb preguntes obertes, cal IA?, les cinc eines del curs i criteris d'èxit (i8-1); el prototip petit,
   l'especificació, dades variades i sense noms, dues eines en un sistema i les versions (i8-2); proves amb usuaris, biaix,
   riscos, la model card i de la v1 a la v2 (i8-3); i el pitch, la demo, la transparència, les preguntes del jurat i el
   viatge de tot el curs (i8-4). Taller i8-5: els tres camins amb una eina real, el pla de 10 proves i les normes del taller. */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const TX = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" ${F(sz, c, w)}>${t}</text>`;
  const E = (x, y, e, sz = 18) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${sz}">${e}</text>`;

  Object.assign(TANI, {
    /* ---------- i8-1 · El problema i la idea ---------- */
    // «fem una IA que…» (✕) davant de «a qui li passa què?» (✓): concret, real, abastable
    i81prob() {
      const C = [['🎯', L('Concret', 'Concreto'), [L('a qui, quan', 'a quién, cuándo'), L('i on', 'y dónde')]], ['🗣️', L('Real', 'Real'), [L('ho diu qui', 'lo dice quien'), L('ho pateix', 'lo sufre')]], ['📏', L('Abastable', 'Abarcable'), [L('cap en', 'cabe en'), L('4 sessions', '4 sesiones')]]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 148, 54, '#FFF4F4', '#F8C9C9', 12)}${ko(26, 35, 9)}${TX(40, 31, L('«Fem una IA', '«Hagamos una IA'), 10.5, '#B91C1C', 900)}${TX(40, 47, L('que…»', 'que…»'), 10.5, '#B91C1C', 900)}</g>
        <g ${tA(.6, 'ta-in')}>${box(164, 8, 148, 54, '#EEFBF3', '#3CC47C', 12)}${ok(182, 35, 9)}${TX(196, 31, L('«A qui li', '«¿A quién le'), 10.5, '#0E7A55', 900)}${TX(196, 47, L('passa què?»', 'pasa qué?»'), 10.5, '#0E7A55', 900)}</g>
        ${C.map(([e, t, x], i) => `<g ${tA(1.2 + i * .4, 'ta-pop')}>${box(8 + i * 104, 78, 96, 128, '#F3F0FF', '#D8CCFF', 14)}${E(56 + i * 104, 116, e, 26)}${CT(56 + i * 104, 146, t, 12, '#6D28D9', 900)}${CT(56 + i * 104, 168, x[0], 9.5, '#14204A', 700)}${CT(56 + i * 104, 182, x[1], 9.5, '#14204A', 700)}</g>`).join('')}`);
    },
    // una entrevista: preguntes obertes (✓) i preguntes que porten la resposta (✕)
    i81talk() {
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${E(40, 66, '🧑‍🎓', 34)}${E(280, 66, '🧑‍🍳', 34)}</g>
        <g ${tA(.5, 'ta-in')}>${box(70, 14, 180, 46, '#EEFBF3', '#3CC47C', 12)}${ok(86, 37, 8)}${TX(100, 33, L("«Explica'm l'última", '«Cuéntame la última'), 10, '#0E7A55', 900)}${TX(100, 49, L('vegada que…»', 'vez que…»'), 10, '#0E7A55', 900)}</g>
        <g ${tA(1.1, 'ta-in')}>${box(70, 70, 180, 46, '#FFF4F4', '#F8C9C9', 12)}${ko(86, 93, 8)}${TX(100, 89, L("«Oi que t'agradaria", '«¿A que te gustaría'), 10, '#B91C1C', 900)}${TX(100, 105, L('una IA que…?»', 'una IA que…?»'), 10, '#B91C1C', 900)}</g>
        <g ${tA(1.8, 'ta-in')}>${box(8, 130, 304, 76, '#fff', '#DCE4FA', 14)}${E(32, 160, '📝', 18)}${TX(50, 154, L('Escolta més que parles', 'Escucha más que hablas'), 11, '#14204A', 800)}${TX(50, 174, L('Apunta fets, no opinions', 'Apunta hechos, no opiniones'), 11, '#14204A', 800)}${TX(50, 194, L('Sense noms!', '¡Sin nombres!'), 11, '#B91C1C', 900)}</g>`);
    },
    // l'arbre de decisió: regla simple? exemples? i si s'equivoca?
    i81tool() {
      const Q = [[L('Ho resol una regla simple?', '¿Lo resuelve una regla simple?'), L('➜ sense IA', '➜ sin IA'), '#16A34A'], [L('Hi ha exemples sense noms?', '¿Hay ejemplos sin nombres?'), L('➜ si no, no', '➜ si no, no'), '#D97706'], [L('Si falla, fa mal a algú?', '¿Si falla, hace daño a alguien?'), L('➜ decideix algú', '➜ decide alguien'), '#DC2626']];
      return tSvg(214, `${Q.map(([q, a, c], i) => `<g ${tA(.2 + i * .6, 'ta-in')}>${box(8, 8 + i * 56, 196, 46, '#fff', '#DCE4FA', 12)}<circle cx="28" cy="${31 + i * 56}" r="11" fill="${c}"/>${CT(28, 35 + i * 56, i + 1, 11, '#fff', 900)}${TX(46, 35 + i * 56, q, 10, '#14204A', 800)}</g><g ${tA(.5 + i * .6, 'ta-pop')}>${box(212, 14 + i * 56, 100, 34, c + '1A', c, 10)}${CT(262, 35 + i * 56, a, 9.5, c, 900)}</g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}>${box(40, 180, 240, 28, '#A23BEA', '', 12)}${CT(160, 199, L('tot bé ➜ la IA és l\'eina justa', 'todo bien ➜ la IA es la herramienta justa'), 10.5, '#fff', 900)}</g>`);
    },
    // les cinc eines del curs, cadascuna amb la seva unitat
    i81kit() {
      const T = [['🏋️', L('Classificador', 'Clasificador'), 'U2', '#2563EB'], ['📚', L('Model de llenguatge', 'Modelo de lenguaje'), 'U1', '#7C3AED'], ['💬', L('Assistent + prompt', 'Asistente + prompt'), 'U3', '#0E9F6E'], ['📱', L('App (vibe coding)', 'App (vibe coding)'), 'U5', '#D97706'], ['🤖', L('Agent amb permisos', 'Agente con permisos'), 'U6', '#DC2626']];
      return tSvg(214, `${T.map(([e, t, u, c], i) => `<g ${tA(.2 + i * .35, 'ta-in')}>${box(8, 6 + i * 41, 304, 36, c + '12', c + '77', 12)}${E(30, 30 + i * 41, e, 17)}${TX(52, 29 + i * 41, t, 11.5, '#14204A', 800)}${box(262, 13 + i * 41, 40, 22, c, '', 8)}${CT(282, 28 + i * 41, u, 10.5, '#fff', 900)}</g>`).join('')}`);
    },
    // de «que funcioni bé» a criteris amb números
    i81goal() {
      const G = [[L('8 de cada 10 fotos noves', '8 de cada 10 fotos nuevas'), '🎯'], [L('3 de 4 usuaris sense ajuda', '3 de 4 usuarios sin ayuda'), '🙋'], [L('mai demana dades personals', 'nunca pide datos personales'), '🔒']];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 304, 40, '#FFF4F4', '#F8C9C9', 12)}${ko(28, 28, 9)}${TX(44, 33, L('«Que funcioni bé»: no es pot comprovar', '«Que funcione bien»: no se puede comprobar'), 10, '#B91C1C', 900)}</g>
        ${G.map(([t, e], i) => `<g ${tA(.8 + i * .45, 'ta-in')}>${box(8, 58 + i * 48, 304, 40, '#EEFBF3', '#B9EBD2', 12)}${E(30, 84 + i * 48, e, 17)}${TX(50, 83 + i * 48, t, 11.5, '#14204A', 800)}${ok(292, 78 + i * 48, 9)}</g>`).join('')}`);
    },

    /* ---------- i8-2 · El prototip ---------- */
    // el producte somiat (enorme) i el prototip (petit, provable, ràpid)
    i82proto() {
      const F2 = [L('20 idiomes', '20 idiomas'), L('logotip 3D', 'logotipo 3D'), L('xat de veu', 'chat de voz'), L('mapa', 'mapa'), L('estadístiques', 'estadísticas')];
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}>${box(8, 8, 180, 198, '#F8FAFF', '#DCE4FA', 16)}${CT(98, 30, L('El producte somiat', 'El producto soñado'), 10.5, '#56628A', 900)}${F2.map((t, i) => `${box(22, 42 + i * 30, 152, 24, '#EEF2FF', '', 8)}${TX(32, 58 + i * 30, '· ' + t, 10, '#56628A', 700)}`).join('')}</g>
        <g ${tA(.9, 'ta-pop')}>${box(204, 54, 108, 110, '#A23BEA', '', 16)}${E(258, 92, '🛠️', 26)}${CT(258, 122, L('PROTOTIP', 'PROTOTIPO'), 11, '#fff', 900)}${CT(258, 140, L('1 tasca, ben feta', '1 tarea, bien hecha'), 9, '#F3E8FF', 700)}</g>
        <g ${tA(1.6, 'ta-pop')}>${CT(258, 186, L('petit · provable · ràpid', 'pequeño · probable · rápido'), 9.5, '#6D28D9', 900)}</g>`);
    },
    // entra → prototip → surt, i les proves d'acceptació
    i82spec() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 30, 86, 60, '#EEF3FF', '#C7D2FE', 12)}${CT(51, 52, L('ENTRA', 'ENTRA'), 10.5, '#2563EB', 900)}${CT(51, 74, L('una pregunta', 'una pregunta'), 9.5, '#14204A', 700)}</g>
        <g ${tA(.5, 'ta-fade')}>${arrow(98, 60, 120, 60, '#A23BEA')}${arrow(202, 60, 224, 60, '#A23BEA')}</g>
        <g ${tA(.4, 'ta-pop')}>${box(124, 22, 74, 76, '#14204A', '', 14)}${E(161, 64, '🧠', 24)}</g>
        <g ${tA(.8, 'ta-in')}>${box(226, 30, 86, 60, '#EEFBF3', '#B9EBD2', 12)}${CT(269, 52, L('SURT', 'SALE'), 10.5, '#0E9F6E', 900)}${CT(269, 74, L('3 títols', '3 títulos'), 9.5, '#14204A', 700)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(8, 110, 304, 96, '#FFFBEB', '#FDE68A', 14)}${TX(22, 132, L("PROVES D'ACCEPTACIÓ", 'PRUEBAS DE ACEPTACIÓN'), 10.5, '#92400E', 900)}</g>
        ${[L('Si demano misteri ➜ 3 títols', 'Si pido misterio ➜ 3 títulos'), L('Si dic el meu nom ➜ no el guarda', 'Si digo mi nombre ➜ no lo guarda'), L('Si no ho sap ➜ ho diu', 'Si no lo sabe ➜ lo dice')].map((t, i) => `<g ${tA(1.7 + i * .4, 'ta-in')}>${ok(30, 150 + i * 20, 7)}${TX(44, 154 + i * 20, t, 10, '#14204A', 700)}</g>`).join('')}`);
    },
    // dades del prototip: variades (✓) i sense noms ni cares (✕)
    i82data() {
      const V = ['✏️', '📦', '🎒', '🧴', '🧥', '📘'];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 304, 92, '#EEFBF3', '#B9EBD2', 14)}${TX(22, 30, L('✓ VARIADES I INVENTADES', '✓ VARIADAS E INVENTADAS'), 11, '#0E7A55', 900)}</g>
        ${V.map((e, i) => `<g ${tA(.4 + i * .18, 'ta-pop')}>${box(22 + i * 48, 42, 40, 44, ['#fff', '#F1F5F9', '#FEF3C7', '#E0F2FE', '#FCE7F3', '#ECFCCB'][i], '#DCE4FA', 8)}${E(42 + i * 48, 72, e, 20)}</g>`).join('')}
        <g ${tA(1.6, 'ta-in')}>${box(8, 110, 304, 96, '#FFF4F4', '#F8C9C9', 14)}${TX(22, 132, L('✕ MAI AL PROTOTIP', '✕ NUNCA EN EL PROTOTIPO'), 11, '#B91C1C', 900)}</g>
        ${[['🙂', L('cares', 'caras')], ['🪪', L('noms', 'nombres')], ['📍', L('adreces', 'direcciones')], ['🩺', L('salut', 'salud')]].map(([e, t], i) => `<g ${tA(2 + i * .25, 'ta-pop')}>${E(46 + i * 72, 170, e, 20)}${CT(46 + i * 72, 194, t, 10, '#B91C1C', 800)}<line x1="${28 + i * 72}" y1="${176}" x2="${64 + i * 72}" y2="${150}" stroke="#EF5A5A" stroke-width="2.5"/></g>`).join('')}`);
    },
    // dues eines en un sistema: el classificador reconeix i l'app ho mostra; l'assistent respon i l'agent avisa
    i82combo() {
      const row = (y, a, at, b, bt, t0, c1, c2, mid) => `<g ${tA(t0, 'ta-in')}>${box(8, y, 120, 70, c1 + '14', c1 + '88', 14)}${E(40, y + 44, a, 24)}${TX(62, y + 32, at.split(' ')[0], 11, c1, 900)}${TX(62, y + 48, at.split(' ').slice(1).join(' '), 9.5, '#14204A', 700)}</g><g ${tA(t0 + .4, 'ta-fade')}>${arrow(132, y + 35, 186, y + 35, '#A23BEA')}${CT(160, y + 26, mid, 8.5, '#6D28D9', 800)}</g><g ${tA(t0 + .6, 'ta-in')}>${box(192, y, 120, 70, c2 + '14', c2 + '88', 14)}${E(224, y + 44, b, 24)}${TX(246, y + 32, bt.split(' ')[0], 11, c2, 900)}${TX(246, y + 48, bt.split(' ').slice(1).join(' '), 9.5, '#14204A', 700)}</g>`;
      return tSvg(214, `${row(10, '🏋️', L('Classificador reconeix', 'Clasificador reconoce'), '📱', L('App ho mostra', 'App lo muestra'), .2, '#2563EB', '#D97706', L('«jaqueta»', '«chaqueta»'))}
        ${row(100, '💬', L('Assistent respon', 'Asistente responde'), '🤖', L('Agent avisa 🙋', 'Agente avisa 🙋'), 1.4, '#0E9F6E', '#DC2626', L('«préstec»', '«préstamo»'))}
        <g ${tA(2.6, 'ta-pop')}>${CT(160, 200, L('cada eina fa el que fa millor', 'cada herramienta hace lo que hace mejor'), 10, '#6D28D9', 900)}</g>`);
    },
    // versions: v1 → prova → v2, desades
    i82ver() {
      const V = [['v1', L('funciona', 'funciona'), '#7C3AED'], ['🧪', L('prova', 'prueba'), '#D97706'], ['v2', L('millor', 'mejor'), '#0E9F6E']];
      return tSvg(214, `${V.map(([t, x, c], i) => `<g ${tA(.2 + i * .7, 'ta-pop')}><circle cx="${56 + i * 104}" cy="80" r="36" fill="${c}"/>${CT(56 + i * 104, 88, t, i === 1 ? 22 : 20, '#fff', 900)}${CT(56 + i * 104, 136, x, 11, c, 900)}</g>${i < 2 ? `<g ${tA(.5 + i * .7, 'ta-fade')}>${arrow(96 + i * 104, 80, 116 + i * 104, 80, '#94A3B8')}</g>` : ''}`).join('')}
        <g ${tA(2.4, 'ta-in')}>${box(40, 156, 240, 46, '#F8FAFF', '#DCE4FA', 12)}${E(64, 186, '💾', 18)}${TX(84, 177, L('Cada versió, desada', 'Cada versión, guardada'), 11, '#14204A', 800)}${TX(84, 194, L('per comparar i tornar enrere', 'para comparar y volver atrás'), 9.5, '#56628A', 700)}</g>`);
    },

    /* ---------- i8-3 · Proves, riscos i millora ---------- */
    // prova amb usuaris: l'usuari pensa en veu alta, l'equip mira i apunta (sense ajudar)
    i83user() {
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(110, 40, 100, 70, '#14204A', '', 10)}${box(118, 48, 84, 50, '#EEF3FF', '', 6)}${E(160, 80, '📚', 20)}</g>
        <g ${tA(.4, 'ta-pop')}>${E(160, 150, '🧑‍💻', 34)}</g>
        <g ${tA(1, 'ta-wob')}>${box(196, 128, 116, 44, '#fff', '#DCE4FA', 12)}${CT(254, 148, L('«No trobo on…»', '«No encuentro dónde…»'), 9.5, '#14204A', 800)}${CT(254, 163, L('(pensa en veu alta)', '(piensa en voz alta)'), 8.5, '#56628A', 700)}</g>
        <g ${tA(1.6, 'ta-in')}>${E(44, 82, '👀', 26)}${E(44, 150, '📝', 24)}${box(8, 178, 168, 30, '#FFFBEB', '#FDE68A', 10)}${CT(92, 198, L('mira, apunta… i calla', 'mira, apunta… y calla'), 10, '#92400E', 900)}</g>
        <g ${tA(2.2, 'ta-pop')}>${box(214, 16, 98, 26, '#FFF4F4', '', 10)}${CT(263, 33, L('🤐 no ajudis', '🤐 no ayudes'), 10, '#B91C1C', 900)}</g>`);
    },
    // biaix: va molt bé per a uns i malament per a d'altres
    i83bias() {
      const G = [[L('El nostre equip', 'Nuestro equipo'), 9, '#0E9F6E'], [L('Altres cursos', 'Otros cursos'), 6, '#D97706'], [L('Fons diferents', 'Fondos distintos'), 5, '#DC2626'], [L('Amb faltes', 'Con faltas'), 4, '#DC2626']];
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}>${TX(8, 20, L('Encerts de 10, segons qui el prova', 'Aciertos de 10, según quién lo prueba'), 11, '#14204A', 900)}</g>
        ${G.map(([t, n, c], i) => `<g ${tA(.4 + i * .4, 'ta-in')}>${TX(8, 52 + i * 40, t, 10.5, '#14204A', 800)}${box(118, 36 + i * 40, 150, 22, '#F1F5F9', '', 8)}<rect x="118" y="${36 + i * 40}" width="${n * 15}" height="22" rx="8" fill="${c}"/>${TX(274, 52 + i * 40, n + '/10', 11, c, 900)}</g>`).join('')}
        <g ${tA(2.3, 'ta-pop')}>${box(30, 192, 260, 20, '#F3F0FF', '', 8)}${CT(160, 206, L('➜ més exemples variats a la v2', '➜ más ejemplos variados en la v2'), 10, '#6D28D9', 900)}</g>`);
    },
    // revisió de riscos: dades, invents, enganys, accions i el nivell de risc
    i83risk() {
      const R = [['🔒', L('Quines dades?', '¿Qué datos?'), '#2563EB'], ['🎭', L("S'inventa coses?", '¿Se inventa cosas?'), '#7C3AED'], ['🪤', L('El poden enganyar?', '¿Lo pueden engañar?'), '#DC2626'], ['🔑', L('Què fa sense preguntar?', '¿Qué hace sin preguntar?'), '#D97706'], ['🔺', L('Nivell de risc (llei)', 'Nivel de riesgo (ley)'), '#0E9F6E']];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><circle cx="56" cy="107" r="44" fill="#14204A"/>${E(56, 116, '🛡️', 30)}</g>
        ${R.map(([e, t, c], i) => `<g ${tA(.4 + i * .35, 'ta-in')}>${box(112, 6 + i * 41, 200, 36, c + '12', c + '77', 12)}${E(132, 30 + i * 41, e, 16)}${TX(150, 29 + i * 41, t, 11, '#14204A', 800)}</g><g ${tA(.5 + i * .35, 'ta-fade')}>${arrow(100, 107, 110, 24 + i * 41, '#CBD5E1')}</g>`).join('')}`);
    },
    // la model card: seccions que s'omplen
    i83card() {
      const S = [[L('Per a què serveix (i per a què no)', 'Para qué sirve (y para qué no)'), 180], [L('Amb quines dades', 'Con qué datos'), 140], [L('Resultats de les proves', 'Resultados de las pruebas'), 160], [L('Quan falla', 'Cuándo falla'), 120]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(30, 6, 260, 202, '#fff', '#C4B5FD', 16)}<rect x="30" y="6" width="260" height="38" rx="16" fill="#7C5CFF"/><rect x="30" y="30" width="260" height="14" fill="#7C5CFF"/>${E(54, 32, '🪪', 18)}${TX(72, 31, L('MODEL CARD', 'MODEL CARD'), 12, '#fff', 900)}</g>
        ${S.map(([t, w], i) => `<g ${tA(.6 + i * .45, 'ta-in')}>${TX(46, 66 + i * 38, t, 10, '#6D28D9', 900)}<rect x="46" y="${72 + i * 38}" width="${w}" height="8" rx="4" fill="#E9E5FF"/></g>`).join('')}
        <g ${tA(2.6, 'ta-pop')}>${box(176, 172, 104, 26, '#FFF4F4', '#F8C9C9', 10)}${CT(228, 189, L('honesta > perfecta', 'honesta > perfecta'), 9.5, '#B91C1C', 900)}</g>`);
    },
    // de la v1 a la v2: ordenar problemes per gravetat i per persones afectades
    i83iter() {
      const P = [[L('Demana el nom', 'Pide el nombre'), 3, '#DC2626'], [L("S'inventa l'horari", 'Se inventa el horario'), 3, '#DC2626'], [L('Botó poc visible', 'Botón poco visible'), 2, '#D97706'], [L('Color del títol', 'Color del título'), 1, '#94A3B8']];
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}>${TX(8, 20, L('Problemes de les proves', 'Problemas de las pruebas'), 11, '#14204A', 900)}${TX(238, 20, L('gravetat', 'gravedad'), 10, '#56628A', 800)}</g>
        ${P.map(([t, g, c], i) => `<g ${tA(.4 + i * .35, 'ta-in')}>${box(8, 30 + i * 36, 304, 30, i < 2 ? '#FFF4F4' : '#fff', i < 2 ? '#F8C9C9' : '#E2E8F0', 10)}${CT(26, 50 + i * 36, i + 1, 11, c, 900)}${TX(42, 50 + i * 36, t, 10.5, '#14204A', 800)}${Array.from({ length: g }, (_, j) => `<circle cx="${252 + j * 16}" cy="${45 + i * 36}" r="6" fill="${c}"/>`).join('')}</g>`).join('')}
        <g ${tA(2.2, 'ta-pop')}>${box(8, 180, 304, 28, '#EEFBF3', '#3CC47C', 10)}${CT(160, 199, L('arregla 1 i 2 ➜ torna a passar totes les proves', 'arregla 1 y 2 ➜ vuelve a pasar todas las pruebas'), 10, '#0E7A55', 900)}</g>`);
    },

    /* ---------- i8-4 · Presentació i diploma ---------- */
    // el pitch de 3 minuts com una barra de temps
    i84pitch() {
      const P = [[L('Problema', 'Problema'), 30, '#DC2626'], [L('Solució + demo', 'Solución + demo'), 90, '#7C3AED'], [L('Proves i riscos', 'Pruebas y riesgos'), 30, '#D97706'], [L('Petició', 'Petición'), 30, '#0E9F6E']];
      let x = 8; const sc = 304 / 180;
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${E(160, 44, '⏱️', 30)}${CT(160, 74, L('3 minuts', '3 minutos'), 13, '#14204A', 900)}</g>
        ${P.map(([t, s, c], i) => { const w = s * sc, X = x; x += w; return `<g ${tA(.5 + i * .45, 'ta-in')}><rect x="${X.toFixed(1)}" y="96" width="${(w - 3).toFixed(1)}" height="40" rx="8" fill="${c}"/>${CT((X + w / 2).toFixed(1), 121, s + ' s', 11, '#fff', 900)}${CT((X + w / 2).toFixed(1), 156 + (i % 2) * 18, t, 10, c, 900)}</g>`; }).join('')}
        <g ${tA(2.4, 'ta-fade')}>${CT(160, 206, L('assajat amb cronòmetre', 'ensayado con cronómetro'), 10, '#56628A', 800)}</g>`);
    },
    // la demo: provada abans i amb pla B
    i84demo() {
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(70, 8, 180, 110, '#14204A', '', 12)}${box(80, 18, 160, 82, '#EEF3FF', '', 6)}${E(160, 66, '📚', 26)}${box(140, 118, 40, 10, '#334155', '', 3)}</g>
        <g ${tA(.8, 'ta-in')}>${box(8, 140, 148, 66, '#EEFBF3', '#B9EBD2', 12)}${ok(28, 162, 9)}${TX(42, 166, L('Provada abans', 'Probada antes'), 10.5, '#0E7A55', 900)}${TX(20, 192, L('amb un exemple que va', 'con un ejemplo que va'), 9, '#14204A', 700)}</g>
        <g ${tA(1.4, 'ta-in')}>${box(164, 140, 148, 66, '#FFFBEB', '#FDE68A', 12)}${E(184, 168, '🅱️', 16)}${TX(200, 166, L('Pla B', 'Plan B'), 10.5, '#92400E', 900)}${TX(176, 192, L('portafoli o captures', 'portafolio o capturas'), 9, '#14204A', 700)}</g>
        <g ${tA(2.2, 'ta-wob')}>${box(232, 4, 84, 26, '#FFF4F4', '#F8C9C9', 10)}${CT(274, 21, L('i si falla? 😌', '¿y si falla? 😌'), 9.5, '#B91C1C', 900)}</g>`);
    },
    // la fitxa de transparència: què ha fet la IA i què l'equip
    i84transp() {
      const A = [L('generar respostes', 'generar respuestas'), L('esborrany de codi', 'borrador de código'), L('idees de noms', 'ideas de nombres')], B = [L('escoltar persones', 'escuchar personas'), L('decidir el problema', 'decidir el problema'), L('provar i corregir', 'probar y corregir'), L('assumir els riscos', 'asumir los riesgos')];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 8, 148, 198, '#F3F0FF', '#D8CCFF', 14)}${E(82, 40, '🤖', 24)}${CT(82, 64, L('LA IA', 'LA IA'), 11, '#6D28D9', 900)}${A.map((t, i) => TX(20, 92 + i * 22, '· ' + t, 9.5, '#14204A', 700)).join('')}</g>
        <g ${tA(.9, 'ta-in')}>${box(164, 8, 148, 198, '#EEFBF3', '#B9EBD2', 14)}${E(238, 40, '🧑‍🤝‍🧑', 24)}${CT(238, 64, L("L'EQUIP", 'EL EQUIPO'), 11, '#0E7A55', 900)}${B.map((t, i) => TX(176, 92 + i * 22, '· ' + t, 9.5, '#14204A', 700)).join('')}</g>
        <g ${tA(1.8, 'ta-pop')}>${box(60, 176, 200, 26, '#14A3B8', '', 12)}${CT(160, 193, L('🏷️ declarar-ho dona confiança', '🏷️ declararlo da confianza'), 10, '#fff', 900)}</g>`);
    },
    // les preguntes del jurat i com respondre-les
    i84qa() {
      const Q = [L("«I si s'equivoca?»", '«¿Y si se equivoca?»'), L('«Quines dades guarda?»', '«¿Qué datos guarda?»'), L('«Per què cal IA?»', '«¿Por qué hace falta IA?»')];
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${E(40, 60, '🧑‍⚖️', 32)}</g>
        ${Q.map((q, i) => `<g ${tA(.4 + i * .45, 'ta-wob')}>${box(74, 8 + i * 40, 238, 32, '#fff', '#DCE4FA', 12)}${TX(88, 29 + i * 40, q, 10.5, '#14204A', 800)}</g>`).join('')}
        <g ${tA(1.9, 'ta-in')}>${box(8, 134, 304, 72, '#EEFBF3', '#B9EBD2', 14)}${TX(22, 156, L('📎 Respon amb les fitxes', '📎 Responde con las fichas'), 11, '#0E7A55', 900)}${TX(22, 178, L('🤷 «No ho sabem, però ho', '🤷 «No lo sabemos, pero lo'), 10.5, '#14204A', 800)}${TX(46, 196, L('comprovaríem així»', 'comprobaríamos así»'), 10.5, '#14204A', 800)}</g>`);
    },
    // el viatge del curs: vuit unitats fins al diploma
    i84journey() {
      const U = [['🔮', 'U1'], ['🏋️', 'U2'], ['💬', 'U3'], ['🎨', 'U4'], ['📱', 'U5'], ['🤖', 'U6'], ['🌍', 'U7'], ['🏫', 'U8']];
      const pts = U.map((_, i) => [30 + (i % 4) * 86, i < 4 ? 46 : 132]);
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}><path d="M30 46 H288 Q312 46 312 89 Q312 132 288 132 H30" stroke="#D8CCFF" stroke-width="4" fill="none" stroke-dasharray="8 6"/></g>
        ${U.map(([e, u], i) => { const [x, y] = i < 4 ? pts[i] : [288 - (i - 4) * 86, 132]; return `<g ${tA(.3 + i * .25, 'ta-pop')}><circle cx="${x}" cy="${y}" r="20" fill="#fff" stroke="#A23BEA" stroke-width="2.5"/>${E(x, y + 6, e, 16)}${CT(x, y + 34, u, 9.5, '#6D28D9', 900)}</g>`; }).join('')}
        <g ${tA(2.5, 'ta-pop')}>${box(100, 178, 120, 30, '#A23BEA', '', 14)}${CT(160, 198, L('🎓 Diploma!', '🎓 ¡Diploma!'), 12, '#fff', 900)}</g>`);
    },
    /* ---------- i8-5 · Taller: prototip amb IA real ---------- */
    // tres camins per fer el prototip amb una eina real: A classificador, B assistent, C app
    i85paths() {
      const C = [['A', '🧠', L('Classificador', 'Clasificador'), ['Teachable', 'Machine'], L('sense compte', 'sin cuenta'), '#D97706', '#FFF7E6'],
        ['B', '💬', L('Assistent', 'Asistente'), [L('el xat amb', 'el chat con'), L('instruccions', 'instrucciones')], L('compte del centre', 'cuenta del centro'), '#2563EB', '#EEF3FF'],
        ['C', '📱', 'App', [L('feta amb el', 'hecha con el'), L('xat + Numi', 'chat + Numi')], L('compte del centre', 'cuenta del centro'), '#16A34A', '#EEFBF3']];
      return tSvg(214, `${C.map(([k, e, n, t, a, c, bg], i) => { const x = 6 + i * 104, m = x + 49; return `<g ${tA(.2 + i * .5, 'ta-pop')}>${box(x, 6, 98, 154, bg, c + '66', 14)}<circle cx="${m}" cy="28" r="13" fill="${c}"/>${CT(m, 33, k, 13, '#fff', 900)}${E(m, 76, e, 26)}${CT(m, 104, n, 11.5, c, 900)}${CT(m, 122, t[0], 9.5, '#14204A', 700)}${CT(m, 135, t[1], 9.5, '#14204A', 700)}${CT(m, 152, a, 8.5, '#56628A', 800)}</g>`; }).join('')}
        <g ${tA(2, 'ta-pop')}>${box(6, 168, 308, 40, '#14204A', '', 12)}${CT(160, 184, L('El mateix projecte, una eina de veritat', 'El mismo proyecto, una herramienta de verdad'), 10.5, '#fff', 800)}${CT(160, 200, L('+ 10 proves + la fitxa amb resultats reals', '+ 10 pruebas + la ficha con resultados reales'), 10, '#FDE68A', 800)}</g>`);
    },
    // el pla de 10 proves, escrit abans: 6 normals, 2 de límit i 2 trampes; el resultat real va a la fitxa
    i85plan() {
      const K = [...Array(6).fill(0), 1, 1, 2, 2], R = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1], C = [['#EEF2FF', '#A5B4FC', '#4338CA'], ['#FFF7E6', '#FCD38D', '#B45309'], ['#FFF0F7', '#F9A8D4', '#BE185D']];
      return tSvg(214, `<g ${tA(.1, 'ta-fade')}>${TX(10, 20, L('📋 PLA DE 10 PROVES (abans de provar)', '📋 PLAN DE 10 PRUEBAS (antes de probar)'), 10.5, '#56628A', 900)}</g>
        <g ${tA(.3, 'ta-in')}>${[[L('✅ 6 normals', '✅ 6 normales'), 0], [L('🧗 2 de límit', '🧗 2 de límite'), 1], [L('🕳️ 2 trampes', '🕳️ 2 trampas'), 2]].map(([t, c], i) => `${box(10 + i * 102, 28, 96, 22, C[c][0], C[c][1], 11)}${CT(58 + i * 102, 43, t, 9.5, C[c][2], 900)}`).join('')}</g>
        ${K.map((c, i) => { const x = 10 + (i % 5) * 61, y = 58 + Math.floor(i / 5) * 56; return `<g ${tA(.6 + i * .12, 'ta-pop')}>${box(x, y, 54, 50, C[c][0], C[c][1], 10)}${CT(x + 27, y + 18, i + 1, 11, C[c][2], 900)}</g><g ${tA(1.9 + i * .1, 'ta-pop')}>${R[i] ? ok(x + 27, y + 34, 9) : ko(x + 27, y + 34, 9)}</g>`; }).join('')}
        <g ${tA(3.1, 'ta-pop')}>${box(6, 176, 308, 32, '#16A34A', '', 12)}${CT(160, 197, L('Resultat real: 8 de 10 → a la fitxa', 'Resultado real: 8 de 10 → a la ficha'), 12, '#fff', 900)}</g>`);
    },
    // les normes del taller amb eines reals
    i85safe() {
      const N = [['🏫', L('Compte del centre', 'Cuenta del centro'), L('o el docent a la pissarra; mai comptes personals', 'o el docente en la pizarra; nunca cuentas personales')], ['🙅', L('Cap dada personal', 'Ningún dato personal'), L('ni noms: ni als exemples ni a les proves', 'ni nombres: ni en los ejemplos ni en las pruebas')],
        ['📦', L('Objectes, no cares', 'Objetos, no caras'), L('a Teachable Machine: objectes i sons de l\'aula', 'en Teachable Machine: objetos y sonidos del aula')], ['🔒', L('No publiquem res', 'No publicamos nada'), L('ni el model, ni l\'app, ni les converses', 'ni el modelo, ni la app, ni las conversaciones')]];
      return tSvg(214, `${N.map(([e, t, d], i) => `<g ${tA(.2 + i * .45, 'ta-in')}>${box(6, 6 + i * 42, 308, 36, '#F8FAFF', '#DCE4FA', 10)}${E(26, 31 + i * 42, e, 17)}${TX(46, 21 + i * 42, t, 11, '#14204A', 900)}${TX(46, 35 + i * 42, d, 9, '#56628A', 700)}</g>`).join('')}
        <g ${tA(2.3, 'ta-pop')}>${box(6, 176, 308, 32, '#14204A', '', 12)}${CT(160, 196, L('Una resposta et fa sentir malament? Avisa el docent', '¿Una respuesta te hace sentir mal? Avisa al docente'), 9.5, '#FDE68A', 800)}</g>`);
    }
  });
}
