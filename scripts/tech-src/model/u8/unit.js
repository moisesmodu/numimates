/* Tech 3D · Nivell 1 · unitat 8 «El meu disseny» (projecte final: m8-1 … m8-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: l'escola i el centre cívic organitzen la Fira d'Invents
   del barri i cada alumne/a hi porta el seu propi disseny, que la Nuvi (la impressora del Taller de Bit) imprimirà. Exemple
   que recorre tota la unitat: el test de l'hort que la Jana dissenya per als infants de P4 (cilindre buidat amb parets i fons
   de 3 mm, tres forats de drenatge, dues nanses de falca simètriques que s'imprimeixen sense suports i una etiqueta amb un cor).
   m8-1 la idea (encàrrec, requisits amb números i esbós), m8-2 modelar-lo amb les eines del curs (forats, Duplica, Mirall, Gir),
   m8-3 revisar-lo (les quatre proves de la Nuvi: onplate, one, wall, fit; revisió per parelles amb rúbrica) i m8-4 presentar-lo,
   exportar l'STL i el diploma del curs (pas «diploma» de tech.js). El disseny propi passa d'una sessió a l'altra: el pas
   m3free de cada sessió comença amb l'últim model desat al portafoli des de m8-* (si no n'hi ha, amb el de la Jana).
   Peculiaritats del motor que tenen en compte les pistes: Duplica després de moure una còpia només repeteix l'últim moviment
   (per això les pistes diuen la x de cada còpia), Mirall reflecteix la peça al seu lloc (després cal escriure-li la x), la
   simetria és estricta, «una sola peça» falla si dues peces només es toquen (per això sempre es fiquen 1-2 mm l'una dins
   l'altra), les puntes de con no les detecta «parets» (les puntes s'ensenyen com a seguretat) i les peces noves no surten a
   l'origen (les pistes donen x, y i z). Models: { id, t, s: [x, y, z] mm, p: CENTRE, r: graus, c, hole }, placa de 200 mm. */
Object.assign(TBADGE, {
  m8fira: { id: 'm8fira', ico: '🏅', n: 'Dissenyador/a 3D|Diseñador/a 3D', d: "Has dissenyat el teu propi objecte de la idea a l'STL (encàrrec, requisits, model, revisió) i l'has presentat a la Fira d'Invents.|Has diseñado tu propio objeto de la idea al STL (encargo, requisitos, modelo, revisión) y lo has presentado en la Feria de Inventos." }
});
COURSE_UNITS[8] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició); h és l'alçada real si la peça és girada
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const H = (id, t, s, p, o = {}) => P(id, t, s, p, '#9AA3B5', { hole: true, ...o });
  const HB = (id, t, s, x, y, z0, o = {}) => H(id, t, s, [x, y, z0 + s[2] / 2], o);
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  const cl = m => JSON.parse(JSON.stringify(m));
  // l'últim model desat al portafoli des d'alguna d'aquestes sessions (el disseny propi continua a la sessió següent)
  const lastOf = sids => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (p && p.kind === 'model' && sids.includes(p.sid) && p.model && Array.isArray(p.model.parts) && p.model.parts.length) return p; } return null; };
  const mine = (sids, def) => { const l = lastOf(sids); return { parts: cl(l ? l.model.parts : def) }; };
  const OR = '#FF8A3D', GR = '#F7C531', VM = '#E8453C';

  /* ---------- el test de l'hort de la Jana (l'exemple de tota la unitat) ---------- */
  const COS = B('cos', 'cyl', [60, 60, 56], 0, 0, 0, OR);
  const BUIT = HB('buit', 'cyl', [54, 54, 56], 0, 0, 3);                                   // parets i fons de 3 mm
  const DR = [-12, 0, 12].map((x, i) => HB('d' + (i + 1), 'cyl', [6, 6, 6], x, 0, -1));      // drenatge: travessen el fons
  const DR5 = [...DR, HB('d4', 'cyl', [6, 6, 6], 0, -12, -1), HB('d5', 'cyl', [6, 6, 6], 0, 12, -1)];
  // nanses: falques cap per avall (per sota fan pendent i s'imprimeixen sense suports); l'esquerra és el reflex de la dreta
  const NANSA = (id, x, z0, r) => B(id, 'wedge', [10, 16, 12], x, 0, z0, OR, { r });
  const NR = NANSA('n1', 33, 38, [180, 0, 0]), NL = NANSA('n2', -33, 38, [0, 180, 0]);
  const ET = y => B('etiqueta', 'box', [24, 4, 16], 0, y, 18, GR);
  const COR = P('cor', 'heart', [14, 14, 4], [0, -33, 26], VM, { r: [90, 0, 0] });         // dret: es fica 1 mm a l'etiqueta
  const V1 = [COS, BUIT], V2 = [...V1, ...DR, NR, NL], JANA = [...V2, ET(-30), COR];
  // la primera idea: un rètol amb pal que fa el test massa alt
  const IDEA0 = [...V1, B('pal', 'cyl', [4, 4, 86], 16, 0, 3, '#A0683A'), B('retol', 'box', [30, 3, 18], 16, 0, 70, '#F3F3EE')];
  // prova de simetria: la nansa esquerra feta sense Mirall (el pendent queda a dalt)
  const V2_SENSE = [...V1, ...DR, NR, NANSA('n2', -33, 38, [180, 0, 0])];

  /* ---------- m8-3 · dissenys d'altres participants de la fira, per revisar ---------- */
  const BIEL = d => [B('got', 'cyl', [40, 40, 60], 0, 0, 0, '#5BC0EB'), HB('forat', 'cyl', [d, d, 60], 0, 0, 3)];
  const BIEL_TALL = [...BIEL(38), H('tall', 'box', [60, 30, 70], [0, -15, 30])];   // tallat pel mig: es veu el gruix de la paret
  const COTXE = dz => [B('xassis', 'box', [56, 24, 12], 0, 0, 6 + dz, VM), B('cabina', 'box', [26, 20, 12], -6, 0, 18 + dz, '#5BC0EB'),
    ...[[-18, -13], [18, -13], [-18, 13], [18, 13]].map(([x, y], i) => B('roda' + (i + 1), 'cyl', [14, 14, 6], x, y, dz, '#2A2F3A', { r: [90, 0, 0], h: 14 }))];
  const RODES = ['xassis', 'cabina', 'roda1', 'roda2', 'roda3', 'roda4'];
  const OCELL = y => [B('peu', 'cyl', [20, 20, 4], 0, 0, 0, '#3D7BF4'), B('cos', 'sph', [40, 30, 30], 0, 0, 0, '#3D7BF4'), B('cap', 'sph', [22, 22, 22], 22, 0, 20, '#3D7BF4'),
    B('bec', 'cone', [8, 8, 10], 36, 0, 26, GR, { r: [0, 90, 0], h: 8 }), B('ala', 'box', [16, 4, 14], 0, y, 10, '#5BC0EB')];
  const COET = top => [B('cos', 'cyl', [24, 24, 50], 0, 0, 0, '#F3F3EE'), ...[0, 120, 240].map((a, i) => B('aleta' + (i + 1), 'box', [14, 4, 16], 15 * Math.cos(a * Math.PI / 180), 15 * Math.sin(a * Math.PI / 180), 0, VM, { r: [0, 0, a] })), top];
  const PUNXA = B('punta', 'cone', [24, 24, 20], 0, 0, 50, VM), RODONA = B('punta', 'sph', [24, 24, 24], 0, 0, 38, VM);
  const NINOT = [B('peu', 'cyl', [30, 30, 4], 0, 0, 0, '#F3F3EE'), B('cos', 'sph', [34, 34, 34], 0, 0, 0, '#F3F3EE'), B('cap', 'sph', [24, 24, 24], 0, 0, 30, '#F3F3EE'),
    P('nas', 'cone', [5, 5, 8], [0, -14, 42], '#FF8A3D', { r: [90, 0, 0] }), B('barret', 'cyl', [16, 16, 12], 0, 0, 57, '#1B2B6B')];

  /* ---------- m8-4 · els reptes de la fira ---------- */
  const PT = slot => [B('bloc', 'box', [60, 24, 16], 0, 0, 0, '#14A3B8'), ...(slot ? [HB('ranura', 'box', [56, 3, 12], 0, 0, 5)] : [])];
  const TROF = [B('base', 'cyl', [44, 44, 6], 0, 0, 0, '#1B2B6B'), B('columna', 'cyl', [12, 12, 30], 0, 0, 6, GR), B('bola', 'sph', [26, 26, 26], 0, 0, 32, GR)];

  const PLACA = { k: 'fit', box: [180, 180, 150], t: 'Cap a la placa de la Nuvi|Cabe en la placa de Nuvi' };

  return {
  t: 'El meu disseny|Mi diseño', d: 'Projecte final|Proyecto final', color: '#7C5CFF',
  s: [
    /* ============ Sessió 1 · La idea ============ */
    { id: 'm8-1', t: 'La idea|La idea', min: 43,
      learn: ["L'encàrrec diu per a qui és el teu disseny, quin problema resol i on es farà servir.|El encargo dice para quién es tu diseño, qué problema resuelve y dónde se usará.",
        "Els requisits són el que el disseny ha de complir, amb números: mides, ús, material i com s'imprimirà.|Los requisitos son lo que el diseño tiene que cumplir, con números: medidas, uso, material y cómo se imprimirá.",
        "L'esbós de davant i de dalt, amb les cotes, és el plànol: cada cota es converteix en un número del taller.|El boceto de delante y de arriba, con las cotas, es el plano: cada cota se convierte en un número del taller."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Comença l'última unitat! A la unitat 7 vas aprendre que un bon disseny comença… per on?|¡Empieza la última unidad! En la unidad 7 aprendiste que un buen diseño empieza… ¿por dónde?",
          opts: ['Per la persona que el farà servir i el que necessita|Por la persona que lo usará y lo que necesita', 'Per triar el color més bonic|Por elegir el color más bonito', 'Per posar moltes formes a la placa|Por poner muchas formas en la placa'], a: 0,
          ex: "Primer pensem per a qui és i què necessita; després dibuixem i modelem.|Primero pensamos para quién es y qué necesita; después dibujamos y modelamos." },
        { k: 'm3look', ph: 'recorda', q: "La Jana ha dibuixat el seu test mirant-lo així. <b>Quina vista és?</b>|Jana ha dibujado su maceta mirándola así. <b>¿Qué vista es?</b>",
          model: { parts: JANA }, view: 'top', lock: true, opts: ['Dalt (planta)|Arriba (planta)', 'Davant (alçat)|Delante (alzado)', 'Costat (perfil)|Lado (perfil)'], a: 0,
          ex: "Des de dalt es veuen el cercle del test, les dues nanses i l'etiqueta, però no l'alçada.|Desde arriba se ven el círculo de la maceta, las dos asas y la etiqueta, pero no la altura." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: "La Fira d'Invents|La Feria de Inventos",
          t: "Grans notícies al Taller de Bit! L'escola i el centre cívic organitzen la <b>Fira d'Invents del barri</b>, i hi tindràs un estand. Hi portaràs <b>el teu propi disseny</b>: un objecte inventat per tu, modelat al taller i imprès per la Nuvi. Tenim quatre sessions: avui, <b>la idea</b>; després, modelar-lo, revisar-lo i presentar-lo. La Jana ja ha començat el seu: un <b>test per a l'hort</b> dels infants de P4.|¡Grandes noticias en el Taller de Bit! La escuela y el centro cívico organizan la <b>Feria de Inventos del barrio</b>, y tendrás un estand. Llevarás <b>tu propio diseño</b>: un objeto inventado por ti, modelado en el taller e impreso por Nuvi. Tenemos cuatro sesiones: hoy, <b>la idea</b>; después, modelarlo, revisarlo y presentarlo. Jana ya ha empezado el suyo: una <b>maceta para el huerto</b> de los niños de P4." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El projecte final|El proyecto final', t: 'Quatre sessions, un disseny teu|Cuatro sesiones, un diseño tuyo', anim: 'm8road',
            x: "Quatre parades, una per sessió: <b>la idea</b>, <b>modelar-lo</b>, <b>revisar-lo</b> perquè la Nuvi el pugui imprimir i <b>presentar-lo</b> a la fira. Cada sessió en desaràs una versió i la següent la continuaràs.|Cuatro paradas, una por sesión: <b>la idea</b>, <b>modelarlo</b>, <b>revisarlo</b> para que Nuvi lo pueda imprimir y <b>presentarlo</b> en la feria. Cada sesión guardarás una versión y la siguiente la continuarás.",
            tip: "Millor una idea senzilla i ben acabada que una de gegant a mig fer.|Mejor una idea sencilla y bien acabada que una gigante a medio hacer." },
          { k: "L'encàrrec|El encargo", t: 'Per a qui, quin problema i on|Para quién, qué problema y dónde', anim: 'm8brief',
            x: "Tot projecte comença amb un <b>encàrrec</b>: poques frases que diuen <b>per a qui</b> és, <b>quin problema</b> resol i <b>on</b> es farà servir. El de la Jana: «Un test per als infants de P4, perquè les plantes de l'hort tinguin on créixer a la finestra de la classe.»|Todo proyecto empieza con un <b>encargo</b>: pocas frases que dicen <b>para quién</b> es, <b>qué problema</b> resuelve y <b>dónde</b> se usará. El de Jana: «Una maceta para los niños de P4, para que las plantas del huerto tengan dónde crecer en la ventana de la clase.»",
            tip: "Pensa en algú que coneguis: la idea surt millor si saps per a qui és.|Piensa en alguien que conozcas: la idea sale mejor si sabes para quién es." },
          { k: 'Els requisits|Los requisitos', t: 'El que ha de complir, amb números|Lo que tiene que cumplir, con números', media: { k: 'model', model: { parts: JANA } },
            x: "Els <b>requisits</b> diuen el que el disseny <b>ha de</b> complir. Els de la Jana: com a molt <b>80 × 80 × 60 mm</b> (l'ampit de la finestra); <b>forats</b> perquè surti l'aigua i <b>nanses</b> per a mans petites; parets i fons de <b>3 mm</b>; <b>base plana</b> i una sola peça.|Los <b>requisitos</b> dicen lo que el diseño <b>tiene que</b> cumplir. Los de Jana: como mucho <b>80 × 80 × 60 mm</b> (el alféizar de la ventana); <b>agujeros</b> para que salga el agua y <b>asas</b> para manos pequeñas; paredes y fondo de <b>3 mm</b>; <b>base plana</b> y una sola pieza.",
            tip: "Un bon requisit es pot comprovar amb el regle o amb el taller.|Un buen requisito se puede comprobar con la regla o con el taller." },
          { k: "L'esbós|El boceto", t: 'De davant i de dalt, amb cotes|De delante y de arriba, con cotas', anim: 'm8esbos',
            x: "Abans de modelar, la Jana dibuixa el test <b>de davant</b> (es veuen l'alçada i el fons) i <b>de dalt</b> (es veuen el diàmetre i els forats), i hi escriu les <b>cotes</b> en mil·límetres. Al taller, cada cota serà un número: 60 a la X i a la Y, 56 a la Z…|Antes de modelar, Jana dibuja la maceta <b>de delante</b> (se ven la altura y el fondo) y <b>de arriba</b> (se ven el diámetro y los agujeros), y escribe las <b>cotas</b> en milímetros. En el taller, cada cota será un número: 60 en la X y en la Y, 56 en la Z…",
            tip: "Si no saps una mida, mesura l'objecte real amb el regle.|Si no sabes una medida, mide el objeto real con la regla." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '💡', title: 'La fitxa del meu projecte|La ficha de mi proyecto', t: 'Amb la fitxa (o un full) i un llapis, sense pantalla:|Con la ficha (o una hoja) y un lápiz, sin pantalla:',
          steps: ["Escriu tres idees d'objectes útils per a algú que coneguis. Encercla la que puguis fer en dues sessions.|Escribe tres ideas de objetos útiles para alguien que conozcas. Rodea la que puedas hacer en dos sesiones.",
            "Escriu l'encàrrec: per a qui és, quin problema resol i on es farà servir.|Escribe el encargo: para quién es, qué problema resuelve y dónde se usará.",
            "Escriu tres requisits amb números: les mides màximes, l'ús i com s'imprimirà.|Escribe tres requisitos con números: las medidas máximas, el uso y cómo se imprimirá.",
            "Dibuixa l'esbós de davant i de dalt i escriu-hi les cotes en mm.|Dibuja el boceto de delante y de arriba y escribe las cotas en mm."],
          tip: "Explica l'encàrrec al company/a del costat: si l'entén a la primera, està ben escrit.|Explica el encargo al compañero/a de al lado: si lo entiende a la primera, está bien escrito." },
        { k: 'm3look', ph: 'prova', q: "Requisit d'ús: «que surti l'aigua». <b>Quants forats</b> té el fons del test? Mira'l des de dalt.|Requisito de uso: «que salga el agua». <b>¿Cuántos agujeros</b> tiene el fondo de la maceta? Mírala desde arriba.",
          model: { parts: JANA }, mode: 'result', view: 'top', opts: ['3|3', '1|1', '5|5'], a: 0,
          ex: "Tres forats de 6 mm en fila: l'aigua que sobra surt i les arrels no es fan malbé.|Tres agujeros de 6 mm en fila: el agua que sobra sale y las raíces no se estropean." },
        { k: 'm3look', ph: 'investiga', q: "Requisit: <b>com a molt 60 mm d'alt</b>. A la primera idea de la Jana, <b>toca la peça que no el compleix.</b>|Requisito: <b>como mucho 60 mm de alto</b>. En la primera idea de Jana, <b>toca la pieza que no lo cumple.</b>",
          model: { parts: IDEA0 }, pick: ['pal', 'retol'], yes: "Exacte: amb el rètol, el test arriba a 89 mm d'alt i no cap a l'ampit.|Exacto: con el letrero, la maceta llega a 89 mm de alto y no cabe en el alféizar.",
          no: "Aquesta peça fa menys de 60 mm. Mira el test de davant: què sobresurt per dalt?|Esta pieza mide menos de 60 mm. Mira la maceta de delante: ¿qué sobresale por arriba?",
          ex: "Per això la Jana el va canviar per una etiqueta enganxada al costat del test.|Por eso Jana lo cambió por una etiqueta pegada al lado de la maceta." },
        { k: 'move', ph: 'pausa', title: "L'invent amb el cos|El invento con el cuerpo", secs: 30, t: "Dret/a! Fes la forma del teu invent amb el cos: és alt i prim, o baix i ample? Ara ensenya amb les mans quant mesurarà: 1 cm… 10 cm… 20 cm (la placa de la Nuvi!). Hi cap?|¡De pie! Haz la forma de tu invento con el cuerpo: ¿es alto y delgado, o bajo y ancho? Ahora enseña con las manos cuánto medirá: 1 cm… 10 cm… 20 cm (¡la placa de Nuvi!). ¿Cabe?" },
        { k: 'm3build', ph: 'repte', q: "<b>De l'esbós a la pantalla.</b> Posa al cilindre les mides de l'esbós: <b>60 mm</b> de diàmetre i <b>56 mm</b> d'alt.|<b>Del boceto a la pantalla.</b> Pon al cilindro las medidas del boceto: <b>60 mm</b> de diámetro y <b>56 mm</b> de alto.",
          start: { parts: [B('cos', 'cyl', [40, 40, 40], 0, 0, 0, OR)] }, palette: ['cyl'],
          checks: [{ k: 'size', ax: 'x', v: 60, t: 'Diàmetre de 60 mm en x|Diámetro de 60 mm en x' }, { k: 'size', ax: 'y', v: 60, t: 'Diàmetre de 60 mm en y|Diámetro de 60 mm en y' }, { k: 'size', ax: 'z', v: 56, t: "Alçada de 56 mm|Altura de 56 mm" }, { k: 'onplate' }],
          hint: "Toca el cilindre i, a la pestanya Mida, escriu 60 a la X, 60 a la Y i 56 a la Z.|Toca el cilindro y, en la pestaña Medida, escribe 60 en la X, 60 en la Y y 56 en la Z.",
          sol: { parts: [COS] } },
        { k: 'm3build', ph: 'repte', q: "<b>Parets i fons de 3 mm.</b> Buida el test: forat rodó de <b>54 × 54 × 56 mm</b> a <b>z = 3</b> (60 − 2 × 3 = 54).|<b>Paredes y fondo de 3 mm.</b> Vacía la maceta: agujero redondo de <b>54 × 54 × 56 mm</b> en <b>z = 3</b> (60 − 2 × 3 = 54).",
          start: { parts: [COS] }, palette: ['hcyl'], target: { parts: V1 },
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [54, 54, 56], base: 3, tol: 0.6, txt: 'Forat de 54 mm que comença a z = 3|Agujero de 54 mm que empieza en z = 3' }, { k: 'flatbase', min: 2000, t: 'El fons de 3 mm és sencer|El fondo de 3 mm está entero' }, { k: 'wall', min: 2, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }],
          hint: "Afegeix un Forat rodó. A Mida: 54, 54 i 56. A Posició: x = 0, y = 0, z = 3.|Añade un Agujero redondo. En Medida: 54, 54 y 56. En Posición: x = 0, y = 0, z = 3.",
          sol: { parts: V1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>Com a molt 80 × 80 × 60 mm i una sola peça.</b> L'etiqueta s'ha separat del test: <b>enganxa-la</b> a la paret.|<b>Como mucho 80 × 80 × 60 mm y una sola pieza.</b> La etiqueta se ha separado de la maceta: <b>pégala</b> a la pared.",
          start: { parts: [...V1, ET(-52)] }, fix: ['etiqueta'], palette: ['box'],
          checks: [{ k: 'fit', box: [80, 80, 60], t: 'Cap en 80 × 80 × 60 mm|Cabe en 80 × 80 × 60 mm' }, { k: 'one', t: "L'etiqueta està enganxada al test|La etiqueta está pegada a la maceta" }, { k: 'onplate' }],
          hint: "L'etiqueta ja està seleccionada. A Posició, escriu y = −30: així es fica 2 mm dins de la paret.|La etiqueta ya está seleccionada. En Posición, escribe y = −30: así se mete 2 mm dentro de la pared.",
          sol: { parts: [...V1, ET(-30)] } },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 1 del teu disseny.</b> Posa a la placa les <b>formes principals</b> amb les mides del teu esbós.|<b>La versión 1 de tu diseño.</b> Pon en la placa las <b>formas principales</b> con las medidas de tu boceto.",
          name: 'El meu disseny (v1)|Mi diseño (v1)',
          crit: ["Té les mides principals de l'esbós|Tiene las medidas principales del boceto", 'Hi ha les formes grans (encara sense detalls)|Están las formas grandes (aún sin detalles)', 'Toca la placa i cap a la Nuvi|Toca la placa y cabe en Nuvi'],
          checks: [{ k: 'onplate' }, { k: 'count', min: 2, txt: 'Té almenys 2 peces|Tiene al menos 2 piezas' }, PLACA], sol: { parts: V1 } },
        { k: 'quiz', ph: 'tanca', q: "Què ha de dir l'<b>encàrrec</b> d'un projecte?|¿Qué tiene que decir el <b>encargo</b> de un proyecto?",
          opts: ['Per a qui és, quin problema resol i on es farà servir|Para quién es, qué problema resuelve y dónde se usará', 'Quins colors tindrà|Qué colores tendrá', 'Quantes peces farà servir|Cuántas piezas usará'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "La fitxa diu «ha de cabre a la placa de la Nuvi». Quina comprovació del taller ho revisa?|La ficha dice «tiene que caber en la placa de Nuvi». ¿Qué comprobación del taller lo revisa?",
          opts: ['«Cap dins de 180 × 180 × 150 mm»|«Cabe dentro de 180 × 180 × 150 mm»', '«Té almenys un forat»|«Tiene al menos un agujero»', '«És simètric»|«Es simétrico»'], a: 0,
          ex: "Cada requisit amb números es pot convertir en una comprovació.|Cada requisito con números se puede convertir en una comprobación." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 2 · Modelar-lo ============ */
    { id: 'm8-2', t: 'Modelar-lo|Modelarlo', min: 44,
      learn: ["Es modela per ordre: primer les formes grans, després els forats i al final els detalls.|Se modela por orden: primero las formas grandes, después los agujeros y al final los detalles.",
        "Les eines del taller donen precisió i estalvien feina: mides en mm, Duplica per repetir, Mirall per a les simetries i forats per restar.|Las herramientas del taller dan precisión y ahorran trabajo: medidas en mm, Duplica para repetir, Espejo para las simetrías y agujeros para restar.",
        "Cada sessió es desa una versió nova: la v2 continua la v1 i no cal començar de zero.|Cada sesión se guarda una versión nueva: la v2 continúa la v1 y no hace falta empezar de cero."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Vols un forat que travessi un fons de 3 mm. Com el poses?|Quieres un agujero que atraviese un fondo de 3 mm. ¿Cómo lo pones?",
          opts: ['Més alt que el fons i començant una mica per sota (z = −1)|Más alto que el fondo y empezando un poco por debajo (z = −1)', 'De 3 mm justos, a z = 3|De 3 mm justos, en z = 3', 'Al costat del fons, sense tocar-lo|Al lado del fondo, sin tocarlo'], a: 0,
          ex: "Si el forat sobresurt una mica per sota i per dalt, segur que travessa.|Si el agujero sobresale un poco por debajo y por arriba, seguro que atraviesa." },
        { k: 'quiz', ph: 'recorda', q: "Què fa l'eina <b>Mirall</b>?|¿Qué hace la herramienta <b>Espejo</b>?",
          opts: ["Dona la volta a la peça com en un mirall: el que mirava a la dreta mira a l'esquerra|Da la vuelta a la pieza como en un espejo: lo que miraba a la derecha mira a la izquierda", 'Fa la peça el doble de gran|Hace la pieza el doble de grande', 'Converteix la peça en un forat|Convierte la pieza en un agujero'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: "La caixa d'eines|La caja de herramientas",
          t: "La Nuvi està impacient: «Quan em portareu els dissenys?» Avui <b>modelarem el disseny complet</b>. Tens a punt totes les eines que has après durant el curs: mides en mil·límetres, girs, Alinea, Duplica, Mirall i forats. La Jana ho farà amb el seu test, pas a pas… i tu, amb el teu invent!|Nuvi está impaciente: «¿Cuándo me traeréis los diseños?» Hoy <b>modelaremos el diseño completo</b>. Tienes a punto todas las herramientas que has aprendido durante el curso: medidas en milímetros, giros, Alinea, Duplica, Espejo y agujeros. Jana lo hará con su maceta, paso a paso… ¡y tú, con tu invento!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Per ordre|Por orden', t: 'Primer el gran, després el petit|Primero lo grande, después lo pequeño', anim: 'm8ordre',
            x: "Un model es construeix com una casa: <b>1)</b> les <b>formes grans</b> amb les mides de l'esbós; <b>2)</b> els <b>forats</b> que buiden o travessen; <b>3)</b> els <b>detalls</b> (nanses, etiquetes, relleus); <b>4)</b> una <b>comprovació</b> amb les vistes i el regle. Si comences pels detalls, després no saps on posar-los.|Un modelo se construye como una casa: <b>1)</b> las <b>formas grandes</b> con las medidas del boceto; <b>2)</b> los <b>agujeros</b> que vacían o atraviesan; <b>3)</b> los <b>detalles</b> (asas, etiquetas, relieves); <b>4)</b> una <b>comprobación</b> con las vistas y la regla. Si empiezas por los detalles, después no sabes dónde ponerlos." },
          { k: "La caixa d'eines|La caja de herramientas", t: "Tot el que has après, a punt|Todo lo que has aprendido, a punto", anim: 'm8eines',
            x: "<b>Mida i Posició</b> (en mm) per ser exacte. <b>Gir</b> per posar dreta una peça. <b>Alinea</b> per centrar o recolzar. <b>Duplica</b> per repetir amb el mateix pas. <b>Mirall</b> per fer l'altra meitat d'una figura simètrica. I <b>Forat</b> per restar. Abans de fer res a ull, pregunta't: quina eina ho fa exacte?|<b>Medida y Posición</b> (en mm) para ser exacto. <b>Giro</b> para poner de pie una pieza. <b>Alinea</b> para centrar o apoyar. <b>Duplica</b> para repetir con el mismo paso. <b>Espejo</b> para hacer la otra mitad de una figura simétrica. Y <b>Agujero</b> para restar. Antes de hacer nada a ojo, pregúntate: ¿qué herramienta lo hace exacto?" },
          { k: 'Detalls útils|Detalles útiles', t: 'Cada detall respon un requisit|Cada detalle responde a un requisito', media: { k: 'model', model: { parts: JANA } },
            x: "Els <b>forats</b> deixen sortir l'aigua; les <b>nanses</b> són per agafar-lo amb les dues mans; l'<b>etiqueta</b> amb el cor diu de qui és. Les nanses són falques cap per avall: per sota fan pendent i s'imprimeixen sense suports.|Los <b>agujeros</b> dejan salir el agua; las <b>asas</b> son para cogerla con las dos manos; la <b>etiqueta</b> con el corazón dice de quién es. Las asas son cuñas boca abajo: por debajo hacen pendiente y se imprimen sin soportes.",
            tip: "Gira'l i mira'l per sota: veus el pendent de les nanses?|Gírala y mírala por debajo: ¿ves la pendiente de las asas?" },
          { k: 'Versions|Versiones', t: 'Desa i continua la sessió que ve|Guarda y continúa la sesión que viene', anim: 'm8versio',
            x: "Quan desis el projecte, el taller el guarda a «Projectes». A la sessió següent, el pas de crear <b>comença amb la teva última versió</b>: v1 → v2 → v3. Així no comences mai de zero, i sempre pots veure com ha millorat.|Cuando guardes el proyecto, el taller lo guarda en «Proyectos». En la sesión siguiente, el paso de crear <b>empieza con tu última versión</b>: v1 → v2 → v3. Así nunca empiezas de cero, y siempre puedes ver cómo ha mejorado.",
            tip: "Posa-li un nom que el diferenciï: «Test v2», «Penjador v2»…|Ponle un nombre que lo diferencie: «Maceta v2», «Colgador v2»…" }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🗒️', title: 'El pla de construcció|El plan de construcción', t: "Amb l'esbós de la sessió passada i un llapis:|Con el boceto de la sesión pasada y un lápiz:",
          steps: ["Numera les peces de l'esbós en l'ordre en què les faràs: les grans, els forats i els detalls.|Numera las piezas del boceto en el orden en que las harás: las grandes, los agujeros y los detalles.",
            'Al costat de cada peça, escriu-ne la forma i les mides (x, y, z) en mm.|Al lado de cada pieza, escribe su forma y sus medidas (x, y, z) en mm.',
            "Marca amb una estrella les peces que es repeteixen (Duplica) o que són simètriques (Mirall).|Marca con una estrella las piezas que se repiten (Duplica) o que son simétricas (Espejo).",
            "Explica el pla al company/a: entén en quin ordre ho faràs?|Explica el plan al compañero/a: ¿entiende en qué orden lo harás?"],
          tip: "Si dues peces s'han de tocar, fes que una es fiqui 1 o 2 mm dins de l'altra: així seran una sola peça.|Si dos piezas se tienen que tocar, haz que una se meta 1 o 2 mm dentro de la otra: así serán una sola pieza." },
        { k: 'm3look', ph: 'prova', q: "Les dues nanses són iguals però <b>miren cap a costats oposats</b>. Quina eina va fer servir la Jana per fer la segona?|Las dos asas son iguales pero <b>miran hacia lados opuestos</b>. ¿Qué herramienta usó Jana para hacer la segunda?",
          model: { parts: V2 }, view: 'front', opts: ['Duplica i Mirall|Duplica y Espejo', 'Escala amb Proporcional|Escala con Proporcional', 'Forat|Agujero'], a: 0,
          ex: "Duplica fa la còpia i Mirall li dona la volta, com en un mirall. Després només cal posar-la al seu lloc.|Duplica hace la copia y Espejo le da la vuelta, como en un espejo. Después solo hay que ponerla en su sitio." },
        { k: 'm3look', ph: 'investiga', q: "Una nansa <b>no</b> és el reflex de l'altra: té el pendent a dalt i la punta de sota a l'aire. <b>Toca-la.</b>|Un asa <b>no</b> es el reflejo de la otra: tiene la pendiente arriba y la punta de abajo en el aire. <b>Tócala.</b>",
          model: { parts: V2_SENSE }, view: 'front', pick: 'n2', yes: "Exacte: aquesta nansa no és el reflex de l'altra. La Nuvi començaria la seva punta de sota en l'aire.|Exacto: esta asa no es el reflejo de la otra. Nuvi empezaría su punta de abajo en el aire.",
          no: "Aquesta nansa té el pendent a sota, com ha de ser. Compara-les de davant.|Esta asa tiene la pendiente debajo, como tiene que ser. Compáralas de delante.",
          ex: "Amb Duplica i Mirall, la còpia hauria quedat com un reflex: amb el pendent a sota, com la dreta.|Con Duplica y Espejo, la copia habría quedado como un reflejo: con la pendiente debajo, como la derecha." },
        { k: 'move', ph: 'pausa', title: 'El mirall humà|El espejo humano', secs: 30, t: "Per parelles, l'un davant de l'altre. Un fa moviments lents amb els braços i l'altre els copia com si fos el seu reflex: si aixeques la mà dreta, el mirall aixeca l'esquerra! Després canvieu.|Por parejas, uno delante del otro. Uno hace movimientos lentos con los brazos y el otro los copia como si fuera su reflejo: si levantas la mano derecha, ¡el espejo levanta la izquierda! Después cambiad." },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 2: el drenatge.</b> Tres forats rodons de <b>6 × 6 × 6 mm</b> a <b>x = −12, 0 i 12</b>. Fes-ne un i <b>duplica'l</b>.|<b>Paso 2: el drenaje.</b> Tres agujeros redondos de <b>6 × 6 × 6 mm</b> en <b>x = −12, 0 y 12</b>. Haz uno y <b>duplícalo</b>.",
          start: { parts: V1 }, palette: ['hcyl'], target: { parts: [...V1, ...DR] },
          checks: [...[-12, 0, 12].map(x => ({ k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [x, 0, null], tol: 0.6, txt: `Forat de 6 mm a x = ${String(x).replace('-', '−')}|Agujero de 6 mm en x = ${String(x).replace('-', '−')}` })), { k: 'flatbase', min: 2000, t: 'El fons continua pla|El fondo sigue plano' }],
          hint: "Forat rodó: a Mida, 6, 6 i 6; a Posició, x = −12, y = 0, z = −1. Duplica'l i escriu x = 0. Duplica la còpia i escriu x = 12.|Agujero redondo: en Medida, 6, 6 y 6; en Posición, x = −12, y = 0, z = −1. Duplícalo y escribe x = 0. Duplica la copia y escribe x = 12.",
          sol: { parts: [...V1, ...DR] } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 3: les nanses.</b> La dreta ja hi és. Fes l'esquerra <b>igual però com en un mirall</b>, a x = −33: Duplica, Mirall i Posició.|<b>Paso 3: las asas.</b> La derecha ya está. Haz la izquierda <b>igual pero como en un espejo</b>, en x = −33: Duplica, Espejo y Posición.",
          start: { parts: [...V1, ...DR, NR] }, palette: ['wedge'], target: { parts: V2 },
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'El test és simètric (mirall en x)|La maceta es simétrica (espejo en x)' }, { k: 'count', t: 'wedge', min: 2, max: 2, txt: 'Té dues nanses|Tiene dos asas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca la nansa i Duplica. Mirall → Esquerra ↔ dreta (x). Després, a Posició, x = −33 (la y i la z ja són bones).|Toca el asa y Duplica. Espejo → Izquierda ↔ derecha (x). Después, en Posición, x = −33 (la y y la z ya son buenas).",
          sol: { parts: V2 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 4: el detall.</b> Posa un <b>cor</b> de 14 × 14 × 4 mm <b>dret</b> davant de l'etiqueta: gira'l 90° en x.|<b>Paso 4: el detalle.</b> Pon un <b>corazón</b> de 14 × 14 × 4 mm <b>de pie</b> delante de la etiqueta: gíralo 90° en x.",
          start: { parts: [...V2, ET(-30)] }, palette: ['heart'], target: { parts: JANA },
          checks: [{ k: 'part', t: 'heart', s: [14, 4, 14], at: [0, -33, null], tol: 1, txt: "El cor és dret, davant de l'etiqueta|El corazón está de pie, delante de la etiqueta" }, { k: 'one' }, { k: 'fit', box: [80, 80, 60], t: 'Continua cabent en 80 × 80 × 60 mm|Sigue cabiendo en 80 × 80 × 60 mm' }],
          hint: "Afegeix un cor. A Mida: 14, 14 i 4. A Gir: x = 90. A Posició: x = 0, y = −33, z = 19.|Añade un corazón. En Medida: 14, 14 y 4. En Giro: x = 90. En Posición: x = 0, y = −33, z = 19.",
          sol: { parts: JANA } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>⭐ Drenatge en creu.</b> Afegeix dos forats més de 6 mm a <b>y = −12</b> i a <b>y = 12</b> (amb x = 0): cinc forats en creu.|<b>⭐ Drenaje en cruz.</b> Añade dos agujeros más de 6 mm en <b>y = −12</b> y en <b>y = 12</b> (con x = 0): cinco agujeros en cruz.",
          start: { parts: JANA }, palette: ['hcyl'], target: { parts: [...JANA, ...DR5.slice(3)] },
          checks: [{ k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [0, -12, null], tol: 0.6, txt: 'Forat de 6 mm a y = −12|Agujero de 6 mm en y = −12' }, { k: 'part', t: 'cyl', hole: true, s: [6, 6, 6], at: [0, 12, null], tol: 0.6, txt: 'Forat de 6 mm a y = 12|Agujero de 6 mm en y = 12' }, { k: 'flatbase', min: 2000, t: 'El fons continua pla|El fondo sigue plano' }],
          hint: "Toca el forat del mig (x = 0) i Duplica. A Posició: x = 0, y = −12. Duplica'l una altra vegada i escriu x = 0, y = 12.|Toca el agujero del medio (x = 0) y Duplica. En Posición: x = 0, y = −12. Duplícalo otra vez y escribe x = 0, y = 12.",
          sol: { parts: [...JANA, ...DR5.slice(3)] } },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 2.</b> Continua la teva v1 (o la de la Jana) seguint el pla: <b>forats, detalls i comprovació</b>.|<b>La versión 2.</b> Continúa tu v1 (o la de Jana) siguiendo el plan: <b>agujeros, detalles y comprobación</b>.",
          name: 'El meu disseny (v2)|Mi diseño (v2)', get start() { return mine(['m8-2', 'm8-1'], V1); },
          crit: ["Hi ha totes les parts del teu esbós|Están todas las partes de tu boceto", 'Has fet servir almenys dues eines: Duplica, Mirall, Alinea, Forat…|Has usado al menos dos herramientas: Duplica, Espejo, Alinea, Agujero…', 'Les mides són les de la teva fitxa|Las medidas son las de tu ficha'],
          checks: [{ k: 'onplate' }, { k: 'count', min: 3, txt: 'Té almenys 3 peces|Tiene al menos 3 piezas' }, PLACA], sol: { parts: V2 } },
        { k: 'quiz', ph: 'tanca', q: 'En quin ordre es modela?|¿En qué orden se modela?',
          opts: ['Formes grans → forats → detalls → comprovar|Formas grandes → agujeros → detalles → comprobar', 'Detalls → formes grans → forats|Detalles → formas grandes → agujeros', 'Tot alhora, a ull|Todo a la vez, a ojo'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Vols cinc forats iguals en fila, a 10 mm l'un de l'altre. Quina eina t'estalvia més feina?|Quieres cinco agujeros iguales en fila, a 10 mm uno de otro. ¿Qué herramienta te ahorra más trabajo?",
          opts: ['Duplica, i canviar la x de cada còpia|Duplica, y cambiar la x de cada copia', 'Mirall|Espejo', 'Escala|Escala'], a: 0,
          ex: "Duplica copia la mida i l'alçada: només cal escriure la x de cada còpia.|Duplica copia la medida y la altura: solo hay que escribir la x de cada copia." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 3 · Revisar-lo ============ */
    { id: 'm8-3', t: 'Revisar-lo|Revisarlo', min: 44,
      learn: ["Abans d'imprimir, la Nuvi revisa quatre proves: toca la placa, una sola peça, parets de 2 mm o més i cap a la placa.|Antes de imprimir, Nuvi revisa cuatro pruebas: toca la placa, una sola pieza, paredes de 2 mm o más y cabe en la placa.",
        "Si dues peces només es toquen, fica-les 1 o 2 mm l'una dins de l'altra; i les puntes, millor arrodonides.|Si dos piezas solo se tocan, mételas 1 o 2 mm una dentro de la otra; y las puntas, mejor redondeadas.",
        "Una bona revisió entre iguals segueix la rúbrica i dona dues estrelles i un desig concret.|Una buena revisión entre iguales sigue la rúbrica y da dos estrellas y un deseo concreto."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Una peça flota 2 mm per sobre de la placa. Què passarà quan la Nuvi l'imprimeixi?|Una pieza flota 2 mm por encima de la placa. ¿Qué pasará cuando Nuvi la imprima?",
          opts: ["El plàstic caurà a l'aire: així no es pot imprimir|El plástico caerá en el aire: así no se puede imprimir", 'Sortirà igual de bé|Saldrá igual de bien', 'La Nuvi la farà més petita|Nuvi la hará más pequeña'], a: 0,
          ex: "La primera capa s'ha d'enganxar a la placa: tot ha de començar a z = 0.|La primera capa se tiene que pegar a la placa: todo tiene que empezar en z = 0." },
        { k: 'quiz', ph: 'recorda', q: "«Dues estrelles i un desig»: què és el <b>desig</b>?|«Dos estrellas y un deseo»: ¿qué es el <b>deseo</b>?",
          opts: ['Una millora concreta, explicada amb amabilitat|Una mejora concreta, explicada con amabilidad', "Una cosa que no m'agrada gens|Algo que no me gusta nada", 'Un premi per al millor disseny|Un premio para el mejor diseño'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La revisió de la Nuvi|La revisión de Nuvi',
          t: "La fira és a prop i la Nuvi s'ha posat les ulleres de revisora: «Abans d'imprimir res, cada disseny ha de passar les meves <b>quatre proves</b>!» Avui revisarem dissenys d'altres participants, farem una <b>revisió per parelles</b> i deixarem el nostre a punt: la <b>versió 3</b>.|La feria está cerca y Nuvi se ha puesto las gafas de revisora: «¡Antes de imprimir nada, cada diseño tiene que pasar mis <b>cuatro pruebas</b>!» Hoy revisaremos diseños de otros participantes, haremos una <b>revisión por parejas</b> y dejaremos el nuestro a punto: la <b>versión 3</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Les quatre proves|Las cuatro pruebas', t: 'La revisió de la Nuvi|La revisión de Nuvi', anim: 'm8proves',
            x: "<b>1) Toca la placa</b>: res no flota i hi ha base plana. <b>2) Una sola peça</b>: cap tros solt. <b>3) Parets de 2 mm o més</b>: res massa prim. <b>4) Cap a la placa</b>: com a molt 180 × 180 × 150 mm. Al taller, cada prova és una comprovació que es marca sola.|<b>1) Toca la placa</b>: nada flota y hay base plana. <b>2) Una sola pieza</b>: ningún trozo suelto. <b>3) Paredes de 2 mm o más</b>: nada demasiado fino. <b>4) Cabe en la placa</b>: como mucho 180 × 180 × 150 mm. En el taller, cada prueba es una comprobación que se marca sola.",
            tip: "Revisa també els requisits: la Nuvi no sap per a qui és el disseny!|Revisa también los requisitos: ¡Nuvi no sabe para quién es el diseño!" },
          { k: 'Tocar no és prou|Tocar no basta', t: "Fica-la 1 o 2 mm a dins|Métela 1 o 2 mm dentro", anim: 'm8toca',
            x: "Dues peces que només <b>es toquen</b> per una vora o per un punt poden sortir separades: la Nuvi les fa com dues peces i es desenganxen. Si en fiques una <b>1 o 2 mm dins</b> de l'altra, es fonen en una sola peça forta. Al taller, la comprovació «És una sola peça» t'avisa.|Dos piezas que solo <b>se tocan</b> por un borde o por un punto pueden salir separadas: Nuvi las hace como dos piezas y se despegan. Si metes una <b>1 o 2 mm dentro</b> de la otra, se funden en una sola pieza fuerte. En el taller, la comprobación «Es una sola pieza» te avisa." },
          { k: 'Parets primes|Paredes finas', t: "El que és massa prim es trenca|Lo que es demasiado fino se rompe", media: { k: 'model', model: { parts: [B('g1', 'cyl', [30, 30, 36], -24, 0, 0, '#5BC0EB'), HB('f1', 'cyl', [28, 28, 36], -24, 0, 2), B('g2', 'cyl', [30, 30, 36], 24, 0, 0, '#2FB36D'), HB('f2', 'cyl', [26, 26, 36], 24, 0, 2), H('tall', 'box', [100, 20, 50], [0, -10, 20])] }, view: 'front', spin: false },
            x: "Dos gots tallats pel mig. El blau té parets d'<b>1 mm</b>: només dues o tres línies del broquet, i es trenca amb un cop. El verd, de <b>2 mm</b>, és fort. I les <b>puntes</b> de cons i estrelles surten massa primes… i punxen!|Dos vasos cortados por la mitad. El azul tiene paredes de <b>1 mm</b>: solo dos o tres líneas de la boquilla, y se rompe con un golpe. El verde, de <b>2 mm</b>, es fuerte. Y las <b>puntas</b> de conos y estrellas salen demasiado finas… ¡y pinchan!",
            tip: "Per a una punta segura, posa-hi una esfera petita.|Para una punta segura, ponle una esfera pequeña." },
          { k: 'La revisió per parelles|La revisión por parejas', t: 'La rúbrica i dues estrelles|La rúbrica y dos estrellas', anim: 'm8rubrica',
            x: "Per revisar el disseny d'un company/a, fes servir la <b>rúbrica</b>: cada criteri (les quatre proves i l'encàrrec) està <b>aconseguit</b>, <b>a mig camí</b> o <b>encara no</b>. Després, <b>dues estrelles</b> i <b>un desig</b> concret.|Para revisar el diseño de un compañero/a, usa la <b>rúbrica</b>: cada criterio (las cuatro pruebas y el encargo) está <b>conseguido</b>, <b>a medio camino</b> o <b>todavía no</b>. Después, <b>dos estrellas</b> y <b>un deseo</b> concreto.",
            bad: "«No m'agrada.»|«No me gusta.»", good: "«Nanses còmodes. Desig: fica-les 2 mm més endins.»|«Asas cómodas. Deseo: mételas 2 mm más adentro.»" }
        ] },
        { k: 'quiz', ph: 'mans', q: "L'Aleix ha revisat el disseny de la Wei. <b>Quina nota l'ajudarà més?</b>|Aleix ha revisado el diseño de Wei. <b>¿Qué nota la ayudará más?</b>",
          opts: ["«Toca la placa i té una base ampla. Desig: la paret del got fa 1 mm; fes-la de 2.»|«Toca la placa y tiene una base ancha. Deseo: la pared del vaso mide 1 mm; hazla de 2.»", '«Està bé.»|«Está bien.»', '«El meu és millor.»|«El mío es mejor.»'], a: 0,
          ex: "És amable i concreta: diu què funciona i quin número cal canviar.|Es amable y concreta: dice qué funciona y qué número hay que cambiar." },
        { k: 'm3look', ph: 'prova', q: "El <b>porta-pinzells d'en Biel</b>, tallat pel mig. Quina prova de la Nuvi <b>no</b> passarà?|El <b>portapinceles de Biel</b>, cortado por la mitad. ¿Qué prueba de Nuvi <b>no</b> pasará?",
          model: { parts: BIEL_TALL }, mode: 'result', opts: ['Parets de 2 mm o més|Paredes de 2 mm o más', 'Toca la placa|Toca la placa', 'Cap a la placa|Cabe en la placa'], a: 0,
          ex: "La paret del got fa només 1 mm: (40 − 38) ÷ 2. Es trencaria amb un cop.|La pared del vaso mide solo 1 mm: (40 − 38) ÷ 2. Se rompería con un golpe." },
        { k: 'm3look', ph: 'investiga', q: "El <b>ninot de neu de la Carla</b> té una peça que no toca res: la Nuvi la imprimiria a l'aire. <b>Toca-la.</b>|El <b>muñeco de nieve de Carla</b> tiene una pieza que no toca nada: Nuvi la imprimiría en el aire. <b>Tócala.</b>",
          model: { parts: NINOT }, pick: 'barret', yes: "L'has trobada: el barret flota 3 mm per sobre del cap.|La has encontrado: el sombrero flota 3 mm por encima de la cabeza.",
          no: "Aquesta peça està enganxada. Mira el ninot de davant: on hi ha aire entre dues peces?|Esta pieza está pegada. Mira el muñeco de delante: ¿dónde hay aire entre dos piezas?",
          ex: "Si el baixa 4 mm, es ficarà 1 mm dins del cap i serà una sola peça.|Si lo baja 4 mm, se meterá 1 mm dentro de la cabeza y será una sola pieza." },
        { k: 'move', ph: 'pausa', title: 'Revisors/es de la Nuvi|Revisores/as de Nuvi', secs: 30, t: "Fes de Nuvi revisora! Posa't unes ulleres imaginàries i revisa't: toques a terra amb els dos peus (base plana)? Tens els braços enganxats al cos (una sola peça)? Ara estira't tant com puguis… caps a la placa? Ajup-te!|¡Haz de Nuvi revisora! Ponte unas gafas imaginarias y revísate: ¿tocas el suelo con los dos pies (base plana)? ¿Tienes los brazos pegados al cuerpo (una sola pieza)? Ahora estírate tanto como puedas… ¿cabes en la placa? ¡Agáchate!" },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 1: el porta-pinzells d'en Biel.</b> La paret fa 1 mm. Fes el forat de <b>36 mm</b>: la paret farà (40 − 36) ÷ 2 = 2 mm.|<b>Revisión 1: el portapinceles de Biel.</b> La pared mide 1 mm. Haz el agujero de <b>36 mm</b>: la pared medirá (40 − 36) ÷ 2 = 2 mm.",
          start: { parts: BIEL(38) }, fix: ['forat'], palette: ['hcyl'],
          checks: [{ k: 'wall', min: 1.8, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }, { k: 'hole', t: 'Continua buit per dins|Sigue hueco por dentro' }, { k: 'flatbase', min: 1000, t: 'Té una base plana|Tiene una base plana' }, { k: 'one' }],
          hint: "El forat ja està seleccionat. A Mida, escriu 36 a la X i 36 a la Y.|El agujero ya está seleccionado. En Medida, escribe 36 en la X y 36 en la Y.",
          sol: { parts: BIEL(36) } },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 2: el cotxet de l'Ona.</b> Tot el cotxe flota 3 mm. <b>Baixa'l</b> fins que les rodes toquin la placa.|<b>Revisión 2: el cochecito de Ona.</b> Todo el coche flota 3 mm. <b>Bájalo</b> hasta que las ruedas toquen la placa.",
          start: { parts: COTXE(3) }, fix: RODES, palette: ['box', 'cyl'],
          checks: [{ k: 'onplate', t: 'Les rodes toquen la placa|Las ruedas tocan la placa' }, { k: 'one' }],
          hint: "Totes les peces ja estan seleccionades: a Posició, escriu z = 0 i baixaran totes alhora.|Todas las piezas ya están seleccionadas: en Posición, escribe z = 0 y bajarán todas a la vez.",
          sol: { parts: COTXE(0) } },
        { k: 'm3fix', ph: 'repte', q: "<b>Revisió 3: l'ocell de la Pia.</b> L'ala no toca el cos: hi ha 2 mm d'aire. Porta-la a <b>y = −15</b> perquè es fiqui dins del cos.|<b>Revisión 3: el pájaro de Pia.</b> El ala no toca el cuerpo: hay 2 mm de aire. Llévala a <b>y = −15</b> para que se meta dentro del cuerpo.",
          start: { parts: OCELL(-19) }, fix: ['ala'], palette: ['box'],
          checks: [{ k: 'one', t: "És una sola peça: l'ala és enganxada|Es una sola pieza: el ala está pegada" }, { k: 'onplate' }],
          hint: "L'ala ja està seleccionada: a Posició, escriu y = −15.|El ala ya está seleccionada: en Posición, escribe y = −15.",
          sol: { parts: OCELL(-15) } },
        { k: 'm3fix', ph: 'repte', extra: true, q: "<b>⭐ Revisió 4: el coet de l'Arnau.</b> La punta de con punxa. Canvia-la per una punta rodona: una <b>esfera</b> de 24 mm a z = 38.|<b>⭐ Revisión 4: el cohete de Arnau.</b> La punta de cono pincha. Cámbiala por una punta redonda: una <b>esfera</b> de 24 mm en z = 38.",
          start: { parts: COET(PUNXA) }, fix: ['punta'], palette: ['sph'],
          checks: [{ k: 'count', t: 'cone', max: 0, txt: 'Cap punta de con|Ninguna punta de cono' }, { k: 'count', t: 'sph', min: 1, txt: 'Té una punta rodona|Tiene una punta redonda' }, { k: 'one' }, { k: 'onplate' }],
          hint: "El con ja està seleccionat: esborra'l. Afegeix una esfera: a Mida, 24, 24 i 24; a Posició, x = 0, y = 0, z = 38.|El cono ya está seleccionado: bórralo. Añade una esfera: en Medida, 24, 24 y 24; en Posición, x = 0, y = 0, z = 38.",
          sol: { parts: COET(RODONA) } },
        { k: 'unplug', ph: 'crea', ico: '🔍', title: 'La revisió per parelles|La revisión por parejas', t: "Al pas següent tindràs el teu disseny. Quan passi les quatre proves, deixa'l a la pantalla i, per parelles:|En el paso siguiente tendrás tu diseño. Cuando pase las cuatro pruebas, déjalo en la pantalla y, por parejas:",
          steps: ["Seu a l'ordinador del company/a. Mira el seu disseny de tots els costats i amb el regle, però no el toquis!|Siéntate en el ordenador del compañero/a. Mira su diseño desde todos los lados y con la regla, ¡pero no lo toques!",
            "Omple la rúbrica: les quatre proves de la Nuvi i si respon al seu encàrrec.|Rellena la rúbrica: las cuatro pruebas de Nuvi y si responde a su encargo.",
            'Escriu dues estrelles i un desig concret, amb números si pots.|Escribe dos estrellas y un deseo concreto, con números si puedes.',
            "Torna al teu lloc, llegeix què t'han escrit i decideix quina millora faràs.|Vuelve a tu sitio, lee qué te han escrito y decide qué mejora harás."],
          tip: "Parla del disseny, no de la persona: «la paret és prima», no «ho has fet malament».|Habla del diseño, no de la persona: «la pared es fina», no «lo has hecho mal»." },
        { k: 'm3free', ph: 'crea', q: "<b>La versió 3.</b> Fes que la teva v2 passi les <b>quatre proves</b>. Després de la revisió, aplica'n el desig i desa-la.|<b>La versión 3.</b> Haz que tu v2 pase las <b>cuatro pruebas</b>. Después de la revisión, aplica su deseo y guárdala.",
          name: 'El meu disseny (v3)|Mi diseño (v3)', get start() { return mine(['m8-3', 'm8-2', 'm8-1'], [...V2, ET(-40)]); },
          crit: ['Passa les quatre proves de la Nuvi|Pasa las cuatro pruebas de Nuvi', "Un company/a l'ha revisat amb la rúbrica|Un compañero/a lo ha revisado con la rúbrica", 'Hi has aplicat almenys un desig|Le has aplicado al menos un deseo'],
          checks: [{ k: 'onplate' }, { k: 'one' }, { k: 'wall', min: 1.8, t: 'Parets de 2 mm o més|Paredes de 2 mm o más' }, PLACA], sol: { parts: JANA } },
        { k: 'review', ph: 'crea', btn: 'Desa la revisió|Guarda la revisión', q: "<b>Què t'ha dit el teu revisor/a?</b> Apunta-ho: et servirà per presentar el disseny a la fira.|<b>¿Qué te ha dicho tu revisor/a?</b> Apúntalo: te servirá para presentar el diseño en la feria.",
          items: [
            { q: 'Quantes proves de la Nuvi passava el teu disseny abans de revisar-lo?|¿Cuántas pruebas de Nuvi pasaba tu diseño antes de revisarlo?', opts: ['Totes quatre|Las cuatro', 'Tres|Tres', 'Dues o menys|Dos o menos'] },
            { q: "Quina prova t'ha costat més?|¿Qué prueba te ha costado más?", opts: ['Toca la placa|Toca la placa', 'Una sola peça|Una sola pieza', 'Parets de 2 mm|Paredes de 2 mm', 'Cap a la placa|Cabe en la placa', 'Cap: totes a la primera|Ninguna: todas a la primera'] },
            { q: 'De què parlava el desig del teu revisor/a?|¿De qué hablaba el deseo de tu revisor/a?', opts: ['De les mides|De las medidas', 'De les proves de la Nuvi|De las pruebas de Nuvi', "De l'encàrrec: per a qui és|Del encargo: para quién es", "De l'aspecte: colors i detalls|Del aspecto: colores y detalles"] },
            { q: "L'has aplicat a la versió 3?|¿Lo has aplicado en la versión 3?", opts: ['Sí|Sí', 'Una part|Una parte', 'No: he decidit que no calia|No: he decidido que no hacía falta'] }] },
        { k: 'quiz', ph: 'tanca', q: "Dues peces només es toquen per una vora. Què fas perquè la Nuvi les imprimeixi com una sola peça?|Dos piezas solo se tocan por un borde. ¿Qué haces para que Nuvi las imprima como una sola pieza?",
          opts: ["Fico l'una 1 o 2 mm dins de l'altra|Meto una 1 o 2 mm dentro de la otra", 'Les pinto del mateix color|Las pinto del mismo color', 'Les separo una mica més|Las separo un poco más'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Quina d'aquestes <b>no</b> és una prova de la Nuvi?|¿Cuál de estas <b>no</b> es una prueba de Nuvi?",
          opts: ['Que sigui del color preferit|Que sea del color preferido', 'Que toqui la placa|Que toque la placa', 'Que les parets facin 2 mm o més|Que las paredes midan 2 mm o más'], a: 0,
          ex: "A la Nuvi el color no li importa: l'STL no en guarda cap.|A Nuvi el color no le importa: el STL no guarda ninguno." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ============ Sessió 4 · Presentació i diploma ============ */
    { id: 'm8-4', t: 'Presentació i diploma|Presentación y diploma', min: 45, proj: true, badge: 'm8fira',
      learn: ["Per presentar un disseny, digues què és i per a qui, ensenya'l de la millor vista, explica les mides i què has millorat.|Para presentar un diseño, di qué es y para quién, enséñalo desde la mejor vista, explica las medidas y qué has mejorado.",
        "L'STL és el fitxer que va a la impressora: el botó STL el descarrega a mida real, en mil·límetres.|El STL es el archivo que va a la impresora: el botón STL lo descarga a tamaño real, en milímetros.",
        "Ja saps fer tot el camí del disseny 3D: idea, esbós, model, revisió, impressió i presentació.|Ya sabes hacer todo el camino del diseño 3D: idea, boceto, modelo, revisión, impresión y presentación."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'La setmana passada vas revisar el teu disseny. Quines són les quatre proves de la Nuvi?|La semana pasada revisaste tu diseño. ¿Cuáles son las cuatro pruebas de Nuvi?',
          opts: ['Toca la placa, una sola peça, parets de 2 mm i cap a la placa|Toca la placa, una sola pieza, paredes de 2 mm y cabe en la placa', 'Color, nom, mida i forats|Color, nombre, tamaño y agujeros', 'Que sigui gran, alt, ample i pesat|Que sea grande, alto, ancho y pesado'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', mood: 'dance', title: "S'obre la fira!|¡Se abre la feria!",
          t: "Banderoles, estands i famílies curioses: avui s'obre la <b>Fira d'Invents</b>! Han vingut l'àvia Rosa, en Pol, la Nur i la mestra Txell, i tothom vol saber com s'han fet els invents. Presentaràs el teu disseny, en descarregaràs l'<b>STL</b> perquè la Nuvi el pugui imprimir i, al final, en Bit té una sorpresa: el <b>diploma</b>!|Banderines, estands y familias curiosas: ¡hoy se abre la <b>Feria de Inventos</b>! Han venido la abuela Rosa, Pol, Nur y la maestra Txell, y todo el mundo quiere saber cómo se han hecho los inventos. Presentarás tu diseño, descargarás su <b>STL</b> para que Nuvi lo pueda imprimir y, al final, Bit tiene una sorpresa: ¡el <b>diploma</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El viatge|El viaje', t: 'Vuit unitats, un dissenyador/a|Ocho unidades, un diseñador/a', anim: 'm8viatge',
            x: "Vas començar girant la vista per trobar peces amagades. Després van venir les <b>formes</b>, els <b>mil·límetres</b> i els girs, <b>alinear, duplicar i el mirall</b>, els <b>forats</b>, la <b>impressió 3D</b> i l'STL, i <b>dissenyar per a persones</b>. Ara tot això és dins d'un disseny teu, a punt per a la fira.|Empezaste girando la vista para encontrar piezas escondidas. Después llegaron las <b>formas</b>, los <b>milímetros</b> y los giros, <b>alinear, duplicar y el espejo</b>, los <b>agujeros</b>, la <b>impresión 3D</b> y el STL, y <b>diseñar para personas</b>. Ahora todo eso está dentro de un diseño tuyo, a punto para la feria." },
          { k: 'La fitxa del producte|La ficha del producto', t: 'El que el públic vol saber|Lo que el público quiere saber', media: { k: 'model', model: { parts: JANA } },
            x: "A l'estand, al costat del disseny, hi ha una <b>fitxa</b>: el <b>nom</b>, <b>per a qui</b> és, <b>què fa</b>, les <b>mides</b> (amplada × fondària × alçada) i el <b>material</b>. La de la Jana: «Test de l'hort. Per als infants de P4. Hi creixen plantes a la finestra. 76 × 65 × 56 mm. PLA.»|En el estand, al lado del diseño, hay una <b>ficha</b>: el <b>nombre</b>, <b>para quién</b> es, <b>qué hace</b>, las <b>medidas</b> (anchura × fondo × altura) y el <b>material</b>. La de Jana: «Maceta del huerto. Para los niños de P4. En ella crecen plantas en la ventana. 76 × 65 × 56 mm. PLA.»",
            tip: "Per saber les mides de tot el model, toca «Totes» i mira la pestanya Mida.|Para saber las medidas de todo el modelo, toca «Todas» y mira la pestaña Medida." },
          { k: 'Presentar|Presentar', t: 'Quatre parts, un minut|Cuatro partes, un minuto', anim: 'm8pitch',
            x: "<b>1)</b> Què és i <b>per a qui</b>. <b>2)</b> La <b>millor vista</b> i les mides. <b>3)</b> Com l'has fet: <b>formes i eines</b>. <b>4)</b> Què has <b>millorat</b> amb la revisió. Acaba preguntant: «Què hi afegiríeu?»|<b>1)</b> Qué es y <b>para quién</b>. <b>2)</b> La <b>mejor vista</b> y las medidas. <b>3)</b> Cómo lo has hecho: <b>formas y herramientas</b>. <b>4)</b> Qué has <b>mejorado</b> con la revisión. Acaba preguntando: «¿Qué le añadiríais?»",
            bad: "Llegir la fitxa d'esquena al públic.|Leer la ficha de espaldas al público.", good: 'Mirar el públic i girar el model mentre parles.|Mirar al público y girar el modelo mientras hablas.' },
          { k: 'De la pantalla a la Nuvi|De la pantalla a Nuvi', t: "L'STL, el fitxer per imprimir|El STL, el archivo para imprimir", anim: 'm8stl',
            x: "El botó <b>STL</b> descarrega el teu disseny com un fitxer de triangles, a mida real i en mil·límetres. Un programa laminador el talla en capes i la Nuvi l'imprimeix capa a capa. Els projectes desats també tenen el botó STL a «Projectes»: el pots portar a qualsevol impressora 3D.|El botón <b>STL</b> descarga tu diseño como un archivo de triángulos, a tamaño real y en milímetros. Un programa laminador lo corta en capas y Nuvi lo imprime capa a capa. Los proyectos guardados también tienen el botón STL en «Proyectos»: lo puedes llevar a cualquier impresora 3D." }
        ] },
        { k: 'seq', ph: 'mans', q: 'Prepara la presentació. <b>Ordena les parts</b>, de la primera a l\'última.|Prepara la presentación. <b>Ordena las partes</b>, de la primera a la última.',
          items: ['Dic què és i per a qui és|Digo qué es y para quién es', "L'ensenyo de la millor vista i en dic les mides|Lo enseño desde la mejor vista y digo sus medidas", "Explico com l'he fet: formes i eines|Explico cómo lo he hecho: formas y herramientas", 'Explico què he millorat gràcies a la revisió|Explico qué he mejorado gracias a la revisión', 'Pregunto al públic què hi afegiria|Pregunto al público qué le añadiría'],
          ex: "Primer, que el públic entengui què és i per a qui; al final, què has millorat i què en pensen.|Primero, que el público entienda qué es y para quién; al final, qué has mejorado y qué opinan." },
        { k: 'quiz', ph: 'prova', q: "<b>Repàs del curs.</b> Una caixa de 10 mm d'alt és a la placa. Vols posar-n'hi una altra just a sobre. Quina z (la base) li poses?|<b>Repaso del curso.</b> Una caja de 10 mm de alto está en la placa. Quieres poner otra justo encima. ¿Qué z (la base) le pones?",
          opts: ['z = 10|z = 10', 'z = 0|z = 0', 'z = 20|z = 20'], a: 0,
          ex: "La de sota va de 0 a 10 mm: la de dalt comença on acaba, a z = 10. També ho fa Alinea → A sobre de la peça de sota.|La de abajo va de 0 a 10 mm: la de arriba empieza donde acaba, en z = 10. También lo hace Alinea → Encima de la pieza de debajo." },
        { k: 'quiz', ph: 'prova', q: "<b>Repàs.</b> El test de la Jana fa 56 mm d'alt. Amb capes de 0,2 mm, quantes capes farà la Nuvi?|<b>Repaso.</b> La maceta de Jana mide 56 mm de alto. Con capas de 0,2 mm, ¿cuántas capas hará Nuvi?",
          opts: ['280|280', '56|56', '112|112'], a: 0, ex: 'Cada mil·límetre són 5 capes: 56 × 5 = 280.|Cada milímetro son 5 capas: 56 × 5 = 280.' },
        { k: 'm3look', ph: 'investiga', q: "<b>Repàs.</b> A la fira vols ensenyar l'<b>alçada</b> del test i <b>les dues nanses</b> alhora. <b>Quina vista tries?</b> Prova-les!|<b>Repaso.</b> En la feria quieres enseñar la <b>altura</b> de la maceta y <b>las dos asas</b> a la vez. <b>¿Qué vista eliges?</b> ¡Pruébalas!",
          model: { parts: JANA }, opts: ['Davant (alçat)|Delante (alzado)', 'Dalt (planta)|Arriba (planta)', 'Costat (perfil)|Lado (perfil)'], a: 0,
          ex: "De davant es veuen l'alçada i les dues nanses, una a cada costat. De dalt no es veu l'alçada, i de costat les nanses queden l'una darrere l'altra.|De delante se ven la altura y las dos asas, una a cada lado. Desde arriba no se ve la altura, y de lado las asas quedan una detrás de la otra." },
        { k: 'move', ph: 'pausa', title: "Assaig d'estand|Ensayo de estand", secs: 30, t: "Posa't dret/a com si fossis al teu estand. Saluda el públic imaginari, ensenya el teu invent amb les dues mans i fes-lo girar a poc a poc, com a la vista 3D. Ara digues-ne el nom fluixet… i fes una reverència!|Ponte de pie como si estuvieras en tu estand. Saluda al público imaginario, enseña tu invento con las dos manos y hazlo girar poco a poco, como en la vista 3D. Ahora di su nombre en voz baja… ¡y haz una reverencia!" },
        { k: 'm3build', ph: 'repte', q: "<b>El porta-targetes.</b> La targeta fa 54 × 1 mm: fes una ranura de <b>56 × 3 × 12 mm</b> a <b>z = 5</b> (2 mm de marge).|<b>El portatarjetas.</b> La tarjeta mide 54 × 1 mm: haz una ranura de <b>56 × 3 × 12 mm</b> en <b>z = 5</b> (2 mm de margen).",
          start: { parts: PT(0) }, palette: ['hbox'], target: { parts: PT(1) },
          checks: [{ k: 'part', t: 'box', hole: true, s: [56, 3, 12], at: [0, 0, null], base: 5, tol: 0.6, txt: 'Ranura de 56 × 3 mm al mig, a z = 5|Ranura de 56 × 3 mm en el medio, en z = 5' }, { k: 'flatbase', min: 1000, t: 'El fons continua sencer|El fondo sigue entero' }, { k: 'one', t: 'Continua sent una sola peça|Sigue siendo una sola pieza' }],
          hint: "Afegeix un Forat (caixa). A Mida: 56, 3 i 12. A Posició: x = 0, y = 0, z = 5.|Añade un Agujero (caja). En Medida: 56, 3 y 12. En Posición: x = 0, y = 0, z = 5.",
          sol: { parts: PT(1) } },
        { k: 'm3build', ph: 'repte', q: "<b>El trofeu.</b> Sobre la base, una <b>columna</b> de 12 × 12 × 30 mm i una <b>bola</b> de 26 mm a z = 32 (s'hi fica 4 mm).|<b>El trofeo.</b> Sobre la base, una <b>columna</b> de 12 × 12 × 30 mm y una <b>bola</b> de 26 mm en z = 32 (se mete 4 mm).",
          start: { parts: [TROF[0]] }, palette: ['cyl', 'sph'], target: { parts: TROF },
          checks: [{ k: 'match', target: { parts: TROF }, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }, { k: 'sym', ax: 'x', th: 0.98, t: 'És simètric|Es simétrico' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Columna: cilindre de 12 × 12 × 30 mm a x = 0, y = 0, z = 6. Bola: esfera de 26 × 26 × 26 mm a x = 0, y = 0, z = 32.|Columna: cilindro de 12 × 12 × 30 mm en x = 0, y = 0, z = 6. Bola: esfera de 26 × 26 × 26 mm en x = 0, y = 0, z = 32.",
          sol: { parts: TROF } },
        { k: 'unplug', ph: 'crea', ico: '🎤', title: 'Assaja la presentació|Ensaya la presentación', t: 'Amb el guió de la fitxa i un company/a, abans de presentar a la fira:|Con el guion de la ficha y un compañero/a, antes de presentar en la feria:',
          steps: ['Digues què és el teu invent i per a qui és.|Di qué es tu invento y para quién es.', "Ensenya'l de la millor vista i digues-ne les mides.|Enséñalo desde la mejor vista y di sus medidas.",
            "Explica com l'has fet i què has millorat amb la revisió.|Explica cómo lo has hecho y qué has mejorado con la revisión.", 'Qui escolta et regala una estrella i et fa una pregunta.|Quien escucha te regala una estrella y te hace una pregunta.'],
          tip: 'Un minut és prou: millor curt i clar que llarg i embolicat.|Un minuto es suficiente: mejor corto y claro que largo y enredado.' },
        { k: 'm3free', ph: 'crea', q: "<b>La versió final.</b> Últim retoc, descarrega l'<b>STL</b> i presenta'l amb les quatre parts. Després, desa'l.|<b>La versión final.</b> Último retoque, descarga el <b>STL</b> y preséntalo con las cuatro partes. Después, guárdalo.",
          name: 'El meu disseny final|Mi diseño final', get start() { return mine(['m8-4', 'm8-3', 'm8-2', 'm8-1'], JANA); },
          crit: ['Està llest per imprimir: passa les proves de la Nuvi|Está listo para imprimir: pasa las pruebas de Nuvi', "N'has descarregat l'STL|Has descargado su STL", 'Has explicat per a qui és, les mides i què has millorat|Has explicado para quién es, las medidas y qué has mejorado'],
          checks: [{ k: 'onplate' }, { k: 'one' }, PLACA], sol: { parts: JANA } },
        { k: 'diploma', ph: 'tanca', t: "ha completat el curs <b>Tech 3D · Nivell 1</b> i ha dissenyat el seu propi objecte per imprimir en 3D.|ha completado el curso <b>Tech 3D · Nivel 1</b> y ha diseñado su propio objeto para imprimir en 3D.",
          skills: [
            'Mirar en 3D i fer servir les vistes|Mirar en 3D y usar las vistas',
            'Construir amb caixes, cilindres, cons, esferes i falques|Construir con cajas, cilindros, conos, esferas y cuñas',
            'Moure, girar i escalar peces en mil·límetres|Mover, girar y escalar piezas en milímetros',
            'Alinear, duplicar i fer simetries amb el mirall|Alinear, duplicar y hacer simetrías con el espejo',
            'Fer forats, objectes buits i relleus|Hacer agujeros, objetos huecos y relieves',
            "Preparar models per imprimir i exportar l'STL|Preparar modelos para imprimir y exportar el STL",
            'Dissenyar per a persones: escoltar, esbossar i millorar|Diseñar para personas: escuchar, esbozar y mejorar',
            'Inventar, modelar, revisar i presentar un disseny propi|Inventar, modelar, revisar y presentar un diseño propio'] },
        { k: 'story', ph: 'tanca', who: 'bit', mood: 'win', t: "Enhorabona, dissenyador/a! Vas començar girant la vista i ara inventes objectes de veritat, amb mides, forats i un fitxer STL a punt per imprimir. Recorda el camí: <b>escolta, esbossa, modela, revisa i millora</b>. La Nuvi i jo t'esperem amb el teu proper invent!|¡Enhorabuena, diseñador/a! Empezaste girando la vista y ahora inventas objetos de verdad, con medidas, agujeros y un archivo STL a punto para imprimir. Recuerda el camino: <b>escucha, esboza, modela, revisa y mejora</b>. ¡Nuvi y yo te esperamos con tu próximo invento!" },
        { k: 'quiz', ph: 'tanca', q: "Últim repte del curs: a la fira algú et diu «La nansa es podria trencar». Què fas?|Último reto del curso: en la feria alguien te dice «El asa se podría romper». ¿Qué haces?",
          opts: ['Escolto, la miro amb el regle i, si cal, la faig més gruixuda en una versió nova|Escucho, la miro con la regla y, si hace falta, la hago más gruesa en una versión nueva', 'Res: ja està acabat|Nada: ya está acabado', "L'esborro i començo un altre invent|Lo borro y empiezo otro invento"], a: 0,
          ex: "Els dissenyadors mai no acaben del tot: cada opinió és una pista per a la versió següent. Enhorabona!|Los diseñadores nunca acaban del todo: cada opinión es una pista para la versión siguiente. ¡Enhorabuena!" },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
