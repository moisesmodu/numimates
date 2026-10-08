/* ===== Numi Tech · Tech Robòtica (9-13 anys): les 32 sessions (k1-1 … k8-4) =====
   Contingut propi de Numi. El robot de l'aula és un micro:bit V2 sobre un Maqueen Lite V5; a l'app es programa en un
   simulador 3D (tech-robo.js) i el mateix programa es pot passar a MakeCode per provar-lo al robot de veritat.
   Cada sessió segueix l'esquema de Numi Tech: recorda → missió → descobreix (teoria animada i demostracions en directe)
   → mans a l'obra amb el kit (per parelles) → prediu i investiga → pausa activa → 6-8 reptes al simulador, de menys a
   més difícils → missió/projecte que es desa → reptes extra opcionals → tancament.
   Totes les solucions dels reptes (sol) es comproven executant el simulador sense pantalla (vegeu el validador).
   Aquest fitxer substitueix les unitats del curs «robotica» del catàleg de tech-c1.js en carregar-se. */
(() => {
  const P_ = roboP;
  /* ---------- Arenes ---------- */
  const Z = (id, x, y, w, h, c, t, o = {}) => ({ id, x, y, w, h, c: c || 'g', t, goal: true, ...o });
  const ZR = (id, x, y, r, c, t, o = {}) => ({ id, x, y, r, c: c || 'g', t, goal: true, ...o });
  const META = (x, y, w, h, o = {}) => Z('meta', x, y, w, h, 'g', 'Meta|Meta', { flag: true, ...o });
  const room = (w, h, start, o = {}) => ({ w, h, start, ...o });
  /* ---------- Passos ---------- */
  const story = (who, t, scene = 'taller', ph = 'missio') => ({ k: 'story', ph, who, t, art: () => roboScene(scene) });
  const quiz = (ph, q, opts, a, ex, o = {}) => ({ k: 'quiz', ph, q, opts, a, ex, ...o });
  const learn = cards => ({ k: 'learn', ph: 'descobreix', cards });
  const kit = o => ({ k: 'robokit', ph: 'mans', ...o });
  const move = (t, secs = 30) => ({ k: 'move', ph: 'pausa', secs, t });
  const feel = () => ({ k: 'feel', ph: 'tanca' });
  // un repte al simulador (prog/sol/pool en text: vegeu roboP a tech-robo.js)
  const ch = o => ({ k: 'robo', ph: 'repte', mode: 'edit', ...o, prog: o.prog ? P_(o.prog) : undefined, sol: o.sol ? P_(o.sol) : undefined, pool: o.pool ? P_(o.pool) : undefined });
  const crea = o => ch({ ph: 'crea', save: true, lvl: 3, ...o });
  const extra = o => ch({ extra: true, lvl: 3, ...o });
  const remote = o => ({ k: 'robo', ph: 'prova', mode: 'remote', ...o, sol: o.sol ? P_(o.sol) : undefined });
  const predict = o => ({ k: 'robo', ph: 'prova', mode: 'predict', ...o, prog: P_(o.prog) });
  const spot = o => ({ k: 'robo', ph: 'investiga', mode: 'spot', ...o, prog: P_(o.prog) });
  const parsons = o => ({ k: 'robo', ph: 'investiga', mode: 'parsons', ...o, pool: P_(o.pool), sol: P_(o.sol) });
  const demo = (k, arena, prog, o = {}) => { ROBO_DEMO[k] = { arena, prog, ...o }; if (typeof TANI !== 'undefined') TANI[k] = () => roboDemoHTML(k); TANI_ROBO[k] = () => roboDemoHTML(k); return k; };
  const chip = s => () => P_(s).map(b => `<span class="tb c-${ROBO_CAT[b.k]} tpb inl"><span class="tbi">${roboIco(b)}</span><span class="tbl">${roboLabel(b)}</span></span>`).join(' ');
  const PAL = ROBO_PAL;
  const U = [];

  /* =================================================================== UNITAT 1 · Què és un robot? */
  const A11 = (o = {}) => room(160, 90, [25, 45, 0], o);
  demo('rdGo', A11({ zones: [META(95, 30, 30, 30)] }), 'icon happy; light all c; go f 150 5; icon heart; note do+ 1', { t: 9 });
  demo('rdRunStop', A11({ zones: [META(85, 30, 30, 30)] }), 'run f 100; wait 3; stop; wait 1; run b 200; wait 1; stop', { t: 9 });
  demo('rdTurnL', room(150, 100, [25, 75, 0], { zones: [Z('g', 70, 10, 30, 30, 'y', 'Garatge|Garaje')] }), 'go f 100 6; turn l 100 .5; go f 100 4.5', { t: 14 });
  demo('rdArc', room(160, 100, [30, 80, 0], { zones: [META(100, 22, 30, 30)] }), 'mot 160 110; wait 2.5; mot 140 140; wait 2; stop', { t: 9, pen: true });
  demo('rdWalk', room(180, 110, [20, 90, 0], { posts: [[60, 50, 5, 'tree'], [120, 75, 5, 'tree']], zones: [Z('font', 75, 70, 26, 26, 'u', 'Font|Fuente'), Z('banc', 130, 20, 32, 24, 'o', 'Banc|Banco')] }), 'go f 150 4; turn l 100 .5; go f 150 4; turn r 100 .5; go f 150 6', { t: 16, pen: true });

  U.push({ t: 'Què és un robot?|¿Qué es un robot?', d: 'Sensors, cervell i motors|Sensores, cerebro y motores', color: '#E2574C', s: [
    /* ---------------- k1-1 ---------------- */
    { id: 'k1-1', t: 'Robots al nostre voltant|Robots a nuestro alrededor', min: 45, badge: 'robo1',
      learn: ['Un robot és una màquina que sent, pensa i actua.|Un robot es una máquina que siente, piensa y actúa.',
        'El nostre robot té sensors, un micro:bit que fa de cervell i dos motors.|Nuestro robot tiene sensores, un micro:bit que hace de cerebro y dos motores.',
        'Un programa diu al robot què ha de fer, bloc a bloc, de dalt a baix.|Un programa le dice al robot qué tiene que hacer, bloque a bloque, de arriba abajo.'],
      steps: [
        quiz('recorda', "Per començar: quina d'aquestes màquines és un <b>robot</b>?|Para empezar: ¿cuál de estas máquinas es un <b>robot</b>?",
          ["Una aspiradora que nota la paret i gira sola|Una aspiradora que nota la pared y gira sola", 'Una torradora de pa|Una tostadora de pan', 'Una bicicleta|Una bicicleta'], 0,
          "L'aspiradora <b>sent</b> la paret, <b>decideix</b> girar i <b>es mou</b> sola. La torradora només escalfa quan algú la posa en marxa.|La aspiradora <b>siente</b> la pared, <b>decide</b> girar y <b>se mueve</b> sola. La tostadora solo calienta cuando alguien la pone en marcha."),
        story('bit', "Benvinguts al <b>taller de robòtica</b>! Aquest és el nostre robot: un cotxet amb dos motors, uns «ulls» que mesuren distàncies i un <b>micro:bit</b> que li fa de cervell. Aquest curs l'aprendrem a programar… primer al simulador i després de veritat!|¡Bienvenidos al <b>taller de robótica</b>! Este es nuestro robot: un cochecito con dos motores, unos «ojos» que miden distancias y un <b>micro:bit</b> que le hace de cerebro. Este curso aprenderemos a programarlo… ¡primero en el simulador y después de verdad!"),
        learn([
          { k: 'Robot|Robot', t: 'Sentir, pensar, actuar|Sentir, pensar, actuar', anim: 'rSense',
            x: "Un <span class='hl'>robot</span> és una màquina que fa tres coses, una vegada i una altra: <b>sent</b> el que l'envolta amb sensors, <b>pensa</b> què ha de fer seguint un programa i <b>actua</b> amb motors, llums o sons.|Un <span class='hl'>robot</span> es una máquina que hace tres cosas, una y otra vez: <b>siente</b> lo que le rodea con sensores, <b>piensa</b> qué tiene que hacer siguiendo un programa y <b>actúa</b> con motores, luces o sonidos.",
            tip: "Una porta automàtica del supermercat també sent (detecta que arribes), pensa (decideix obrir) i actua (el motor l'obre).|Una puerta automática del supermercado también siente (detecta que llegas), piensa (decide abrir) y actúa (el motor la abre)." },
          { k: 'El nostre robot|Nuestro robot', t: 'Les parts del robot de classe|Las partes del robot de clase', anim: 'rParts',
            x: "Al davant té el <b>sensor d'ultrasons</b>, que mesura distàncies. A sota, <b>tres sensors de línia</b> que distingeixen el blanc del negre. També té <b>llums de colors</b>, un <b>brunzidor</b> per fer sons i <b>dos motors</b>, un per a cada roda.|Delante tiene el <b>sensor de ultrasonidos</b>, que mide distancias. Debajo, <b>tres sensores de línea</b> que distinguen el blanco del negro. También tiene <b>luces de colores</b>, un <b>zumbador</b> para hacer sonidos y <b>dos motores</b>, uno para cada rueda." },
          { k: 'El cervell|El cerebro', t: 'El micro:bit|El micro:bit', anim: 'rMicrobit',
            x: "El <b>micro:bit</b> és un ordinador petitíssim. S'endolla al robot i guarda el programa. Té una pantalla de <b>25 llums</b> (5 × 5) per mostrar números i icones, i dos botons, A i B.|El <b>micro:bit</b> es un ordenador pequeñísimo. Se enchufa al robot y guarda el programa. Tiene una pantalla de <b>25 luces</b> (5 × 5) para mostrar números e iconos, y dos botones, A y B." },
          { k: 'Moure’s|Moverse', t: 'Dues rodes, dos motors|Dos ruedas, dos motores', anim: 'rDiff',
            x: "Cada roda té el seu motor. Si tots dos giren igual, el robot va <b>recte</b>. Si un va més de pressa, fa una <b>corba</b>. I si giren al revés l'un de l'altre, el robot <b>gira sobre si mateix</b>.|Cada rueda tiene su motor. Si los dos giran igual, el robot va <b>recto</b>. Si uno va más deprisa, hace una <b>curva</b>. Y si giran al revés el uno del otro, el robot <b>gira sobre sí mismo</b>." },
          { k: 'Programa|Programa', t: 'El primer programa|El primer programa', anim: 'rdGo',
            x: "Un <span class='hl'>programa</span> és la llista d'ordres que el robot segueix, <b>de dalt a baix</b>. Mira com cada bloc s'il·lumina quan s'executa: posa una cara contenta, encén els llums, avança i fa sonar una nota.|Un <span class='hl'>programa</span> es la lista de órdenes que el robot sigue, <b>de arriba abajo</b>. Mira cómo cada bloque se ilumina cuando se ejecuta: pone una cara contenta, enciende las luces, avanza y hace sonar una nota." }
        ]),
        quiz('descobreix', "Quina part del robot fa de <b>cervell</b> i guarda el programa?|¿Qué parte del robot hace de <b>cerebro</b> y guarda el programa?", ['El micro:bit|El micro:bit', 'Les rodes|Las ruedas', "El sensor d'ultrasons|El sensor de ultrasonidos"], 0,
          "Els sensors <b>senten</b>, els motors <b>actuen</b> i el micro:bit <b>pensa</b>: segueix el programa.|Los sensores <b>sienten</b>, los motores <b>actúan</b> y el micro:bit <b>piensa</b>: sigue el programa."),
        { k: 'seq', ph: 'mans', q: "Un robot aspirador troba una paret. <b>Ordena</b> què passa.|Un robot aspirador encuentra una pared. <b>Ordena</b> qué pasa.",
          items: ['El sensor nota la paret a prop (sent)|El sensor nota la pared cerca (siente)', 'El programa decideix girar (pensa)|El programa decide girar (piensa)', 'Els motors el fan girar (actua)|Los motores lo hacen girar (actúa)', 'Torna a mirar si té res al davant|Vuelve a mirar si tiene algo delante'],
          ex: "Sentir, pensar, actuar… i tornar a començar. Els robots repeteixen aquest cicle moltes vegades cada segon.|Sentir, pensar, actuar… y volver a empezar. Los robots repiten este ciclo muchas veces cada segundo." },
        kit({ title: 'Coneixem el robot de veritat|Conocemos el robot de verdad', art: 'kit',
          t: "Per parelles, obriu la capsa del robot i descobriu-ne totes les parts. Encara no el programarem: avui el coneixem.|Por parejas, abrid la caja del robot y descubrid todas sus partes. Todavía no lo programaremos: hoy lo conocemos.",
          mat: ['Un robot Maqueen|Un robot Maqueen', 'Un micro:bit|Un micro:bit', 'Piles o bateria|Pilas o batería', 'Notes adhesives|Notas adhesivas', 'Un full i colors|Una hoja y colores'],
          roles: [['Enginyer/a|Ingeniero/a', "Manipula el robot amb compte i el posa en marxa.|Manipula el robot con cuidado y lo pone en marcha."], ['Documentalista|Documentalista', "Apunta i dibuixa cada part que trobeu.|Apunta y dibuja cada parte que encontréis."]],
          steps: ["Busqueu les rodes, el sensor d'ultrasons (els dos «ulls»), els llums del davant i, a sota, els sensors de línia.|Buscad las ruedas, el sensor de ultrasonidos (los dos «ojos»), las luces de delante y, debajo, los sensores de línea.",
            "Poseu una nota adhesiva al costat de cada part amb el seu nom i què fa: sent, pensa o actua.|Poned una nota adhesiva al lado de cada parte con su nombre y qué hace: siente, piensa o actúa.",
            "Endolleu el micro:bit a la ranura del robot, amb la pantalla de llums mirant enfora. Poseu les piles i engegueu l'interruptor.|Enchufad el micro:bit en la ranura del robot, con la pantalla de luces mirando hacia fuera. Poned las pilas y encended el interruptor.",
            "Dibuixeu el robot vist de dalt amb totes les parts. Després, canvieu els papers i reviseu el dibuix.|Dibujad el robot visto desde arriba con todas sus partes. Después, cambiad los papeles y revisad el dibujo."],
          tip: "Agafeu sempre el robot pel cos, mai per les rodes ni pels sensors.|Coged siempre el robot por el cuerpo, nunca por las ruedas ni por los sensores." }),
        remote({ q: "Ara condueix-lo tu al simulador! Arrossega les dues palanques i porta el robot fins a la <b>meta</b>. Per guanyar, s'hi ha d'<b>aturar</b> a dins.|¡Ahora condúcelo tú en el simulador! Arrastra las dos palancas y lleva el robot hasta la <b>meta</b>. Para ganar, tiene que <b>pararse</b> dentro.",
          arena: room(160, 100, [25, 70, 0], { walls: [[70, 0, 14, 55, 'block']], zones: [META(115, 15, 34, 34)], goals: [{ k: 'zone', z: 'meta' }] }), sol: 'go f 150 4; turn l 100 .5; go f 150 3.2; turn r 100 .5; go f 150 3.2' }),
        quiz('investiga', "Si poses la palanca <b>esquerra a 150</b> i la <b>dreta a 0</b>, què fa el robot?|Si pones la palanca <b>izquierda a 150</b> y la <b>derecha a 0</b>, ¿qué hace el robot?",
          ['Gira cap a la dreta, al voltant de la roda parada|Gira hacia la derecha, alrededor de la rueda parada', 'Va recte|Va recto', 'Va enrere|Va hacia atrás'], 0,
          "La roda esquerra empeny i la dreta no: el robot gira cap al costat de la roda parada.|La rueda izquierda empuja y la derecha no: el robot gira hacia el lado de la rueda parada.", { art: () => roboSvg(130, roboCarSVG(160, 66, 0, 1.6)) }),
        move("Fes de robot! Els braços són els motors: <b>tots dos endavant</b> = camines recte; <b>només el dret</b> = gires a l'esquerra; <b>un endavant i l'altre enrere</b> = gires sobre tu mateix.|¡Haz de robot! Los brazos son los motores: <b>los dos adelante</b> = caminas recto; <b>solo el derecho</b> = giras a la izquierda; <b>uno adelante y el otro atrás</b> = giras sobre ti mismo."),
        ch({ q: "El teu primer programa! Fes que el robot avanci fins a la zona verda i s'hi aturi. Prova de canviar el <b>temps</b> del bloc.|¡Tu primer programa! Haz que el robot avance hasta la zona verde y se pare allí. Prueba a cambiar el <b>tiempo</b> del bloque.", lvl: 1,
          arena: A11({ zones: [META(38, 28, 22, 34)], goals: [{ k: 'zone', z: 'meta' }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 100 2', hint: "A velocitat 100, el robot avança 10 cm cada segon.|A velocidad 100, el robot avanza 10 cm cada segundo." }),
        ch({ q: "La meta ara és més lluny. Hi pots arribar anant <b>més estona</b> o anant <b>més de pressa</b>.|La meta ahora está más lejos. Puedes llegar yendo <b>más rato</b> o yendo <b>más deprisa</b>.", lvl: 1,
          arena: A11({ zones: [META(74, 26, 24, 38)], goals: [{ k: 'zone', z: 'meta' }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 150 4', hint: "Hi ha uns 60 cm fins al mig de la meta.|Hay unos 60 cm hasta el centro de la meta." }),
        ch({ q: "Marxa enrere! Porta el robot al <b>garatge</b>, que és darrere seu. Toca el bloc per canviar <b>Endavant</b> per <b>Enrere</b>.|¡Marcha atrás! Lleva el robot al <b>garaje</b>, que está detrás de él. Toca el bloque para cambiar <b>Adelante</b> por <b>Atrás</b>.", lvl: 1,
          arena: room(160, 90, [110, 45, 0], { walls: [[30, 18, 50, 8, 'wall'], [30, 64, 50, 8, 'wall']], zones: [Z('gar', 40, 28, 40, 34, 'y', 'Garatge|Garaje')], goals: [{ k: 'zone', z: 'gar' }, { k: 'notouch' }] }), pal: ['go', 'stop', 'wait'], sol: 'go b 150 3', hint: "Mira quants centímetres hi ha fins al garatge amb el regle del terra.|Mira cuántos centímetros hay hasta el garaje con la regla del suelo." }),
        ch({ q: "L'autobús escolar: para uns segons a la <b>parada</b> i després continua fins a l'<b>escola</b>.|El autobús escolar: para unos segundos en la <b>parada</b> y después continúa hasta la <b>escuela</b>.", lvl: 2,
          arena: A11({ zones: [Z('bus', 47, 30, 18, 30, 'y', 'Parada|Parada'), Z('esc', 95, 25, 30, 40, 'u', 'Escola|Escuela')], goals: [{ k: 'seq', zs: ['bus', 'esc'] }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 100 3; wait 1; go f 100 5',
          crit: ['Para a la parada|Para en la parada', "Acaba a l'escola|Termina en la escuela"], hint: "Fes servir dos blocs Endavant i, entre tots dos, un bloc Espera.|Usa dos bloques Adelante y, entre los dos, un bloque Espera." }),
        ch({ q: "Hi ha una paret al final del passadís. Para <b>a menys de 12 cm</b> de la paret, però <b>sense tocar-la</b>.|Hay una pared al final del pasillo. Para <b>a menos de 12 cm</b> de la pared, pero <b>sin tocarla</b>.", lvl: 2,
          arena: A11({ walls: [[120, 0, 10, 90, 'wall']], goals: [{ k: 'near', min: 2, max: 12 }, { k: 'notouch' }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 200 4', hint: "La paret és a uns 95 cm del morro del robot. Calcula: velocitat ÷ 10 = centímetres cada segon.|La pared está a unos 95 cm del morro del robot. Calcula: velocidad ÷ 10 = centímetros cada segundo." }),
        ch({ q: "La pista llarga: arriba a la meta en <b>menys de 6 segons</b>. Pensa quina velocitat necessites.|La pista larga: llega a la meta en <b>menos de 6 segundos</b>. Piensa qué velocidad necesitas.", lvl: 2,
          arena: A11({ zones: [META(112, 25, 28, 40)], goals: [{ k: 'zone', z: 'meta' }, { k: 'time', max: 6 }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 250 4', hint: "La velocitat màxima és 255.|La velocidad máxima es 255." }),
        spot({ q: "Aquest programa havia de portar el robot fins a la meta, però el robot torna enrere. <b>Toca el bloc que té l'error.</b>|Este programa tenía que llevar el robot hasta la meta, pero el robot vuelve atrás. <b>Toca el bloque que tiene el error.</b>",
          arena: A11({ zones: [META(95, 28, 30, 34)] }), prog: 'go f 100 4; go! b 100 3' }),
        crea({ name: 'La meva primera ruta|Mi primera ruta', q: "Missió: el robot ha d'anar a la <b>botiga</b>, esperar-s'hi una mica i <b>tornar a casa</b> marxa enrere.|Misión: el robot tiene que ir a la <b>tienda</b>, esperar un poco y <b>volver a casa</b> marcha atrás.",
          crit: ['Passa per la botiga|Pasa por la tienda', 'Torna a casa i para|Vuelve a casa y para'],
          arena: A11({ zones: [Z('casa', 8, 28, 34, 34, 'u', 'Casa|Casa'), Z('bot', 90, 28, 26, 34, 'p', 'Botiga|Tienda')], goals: [{ k: 'seq', zs: ['bot', 'casa'] }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 150 5; wait 1; go b 150 5' }),
        extra({ q: "Cursa llampec: arriba a la meta en <b>menys de 3 segons</b>!|Carrera relámpago: ¡llega a la meta en <b>menos de 3 segundos</b>!",
          arena: A11({ zones: [META(68, 25, 26, 40)], goals: [{ k: 'zone', z: 'meta' }, { k: 'time', max: 3 }] }), pal: ['go', 'stop', 'wait'], sol: 'go f 250 2' }),
        quiz('tanca', "Què fa un robot, una vegada i una altra?|¿Qué hace un robot, una y otra vez?", ['Sent, pensa i actua|Siente, piensa y actúa', 'Només es mou|Solo se mueve', 'Pensa sol, sense programa|Piensa solo, sin programa'], 0),
        quiz('tanca', "En quin ordre fa els blocs el robot?|¿En qué orden hace los bloques el robot?", ['De dalt a baix, un a un|De arriba abajo, uno a uno', 'Tots alhora|Todos a la vez', 'De baix a dalt|De abajo arriba'], 0),
        feel()
      ] },
    /* ---------------- k1-2 ---------------- */
    { id: 'k1-2', t: 'Motors i velocitat|Motores y velocidad', min: 45,
      learn: ['La velocitat dels motors va de 0 (parat) a 255 (màxim).|La velocidad de los motores va de 0 (parado) a 255 (máximo).',
        'A velocitats molt baixes el motor no té prou força per moure el robot.|A velocidades muy bajas el motor no tiene fuerza suficiente para mover el robot.',
        'Amb velocitats diferents a cada roda, el robot fa corbes.|Con velocidades diferentes en cada rueda, el robot hace curvas.'],
      steps: [
        quiz('recorda', "Recordes? Quina part del robot <b>actua</b> per fer-lo moure?|¿Recuerdas? ¿Qué parte del robot <b>actúa</b> para hacerlo moverse?", ['Els motors de les rodes|Los motores de las ruedas', "El sensor d'ultrasons|El sensor de ultrasonidos", 'La pantalla de llums|La pantalla de luces'], 0),
        story('numi', "Avui serem <b>enginyers de motors</b>. Descobrirem què vol dir velocitat 100 o 255, per què a velocitat 10 el robot no es mou i com es fa una corba sense girar el volant… perquè el nostre robot no en té!|Hoy seremos <b>ingenieros de motores</b>. Descubriremos qué significa velocidad 100 o 255, por qué a velocidad 10 el robot no se mueve y cómo se hace una curva sin girar el volante… ¡porque nuestro robot no tiene!"),
        learn([
          { k: 'Velocitat|Velocidad', t: 'Un número de 0 a 255|Un número de 0 a 255', anim: 'rSpeed',
            x: "Als motors els diem la velocitat amb un número: <b>0</b> és parat i <b>255</b> és el màxim. Al simulador, a velocitat 100 el robot fa <b>10 cm cada segon</b>.|A los motores les decimos la velocidad con un número: <b>0</b> es parado y <b>255</b> es el máximo. En el simulador, a velocidad 100 el robot hace <b>10 cm cada segundo</b>.",
            tip: "Per què 255? Perquè és el número més gran que cap en 8 bits (8 zeros i uns). Els ordinadors compten així!|¿Por qué 255? Porque es el número más grande que cabe en 8 bits (8 ceros y unos). ¡Los ordenadores cuentan así!" },
          { k: 'Zona morta|Zona muerta', t: 'Massa lent, no es mou|Demasiado lento, no se mueve', anim: 'rSpeed',
            x: "Amb un número molt petit, el motor rep tan poca força que no pot vèncer el pes del robot i <b>no es mou</b>. Al simulador passa per sota de <b>18</b>; al robot de veritat ho mesurarem.|Con un número muy pequeño, el motor recibe tan poca fuerza que no puede vencer el peso del robot y <b>no se mueve</b>. En el simulador pasa por debajo de <b>18</b>; en el robot de verdad lo mediremos.",
            bad: 'Velocitat 5 = el robot va molt a poc a poc.|Velocidad 5 = el robot va muy despacio.', good: 'Velocitat 5 = el robot no es mou: li falta força.|Velocidad 5 = el robot no se mueve: le falta fuerza.' },
          { k: 'Engega i para|Arranca y para', t: 'Tres blocs que fan com un|Tres bloques que hacen como uno', anim: 'rdRunStop',
            x: "<b>Engega</b> posa els motors en marxa i el programa continua de seguida. <b>Espera</b> deixa passar el temps. <b>Para</b> atura els motors. Junts fan el mateix que «Endavant durant…», però els pots separar.|<b>Arranca</b> pone los motores en marcha y el programa continúa enseguida. <b>Espera</b> deja pasar el tiempo. <b>Para</b> detiene los motores. Juntos hacen lo mismo que «Adelante durante…», pero los puedes separar.",
            tip: "Si et deixes el Para, el robot continua anant… fins que xoca!|Si te dejas el Para, el robot sigue yendo… ¡hasta que choca!" },
          { k: 'Corbes|Curvas', t: 'Cada roda a una velocitat|Cada rueda a una velocidad', anim: 'rdArc',
            x: "El bloc <b>Motors</b> dona una velocitat a cada roda. Si l'esquerra va més de pressa que la dreta, el robot fa una corba cap a la <b>dreta</b>. Com més diferència, més tancada és la corba.|El bloque <b>Motores</b> da una velocidad a cada rueda. Si la izquierda va más deprisa que la derecha, el robot hace una curva hacia la <b>derecha</b>. Cuanta más diferencia, más cerrada es la curva." }
        ]),
        kit({ title: 'Mesurem la velocitat de veritat|Medimos la velocidad de verdad', art: 'measure',
          t: "Al simulador, velocitat 100 = 10 cm/s. I al vostre robot? Mesureu-ho! Passeu aquest programa al micro:bit amb el botó <b>MakeCode</b> d'un repte: «Endavant a 100 durant 2 s».|En el simulador, velocidad 100 = 10 cm/s. ¿Y en vuestro robot? ¡Medidlo! Pasad este programa al micro:bit con el botón <b>MakeCode</b> de un reto: «Adelante a 100 durante 2 s».",
          mat: ['Robot amb el micro:bit|Robot con el micro:bit', 'Cinta mètrica o regle|Cinta métrica o regla', 'Cinta de pintor|Cinta de pintor', 'Ordinador amb cable USB|Ordenador con cable USB'],
          roles: [['Pilot|Piloto', 'Posa el robot a la línia de sortida i el posa en marxa.|Pone el robot en la línea de salida y lo pone en marcha.'], ['Mesurador/a|Medidor/a', "Marca on s'atura i mesura la distància.|Marca dónde se para y mide la distancia."]],
          steps: ["Marqueu una línia de sortida al terra amb cinta. El davant del robot toca la línia.|Marcad una línea de salida en el suelo con cinta. La parte delantera del robot toca la línea.",
            "Executeu el programa a velocitat 100 i mesureu quants centímetres ha avançat. Repetiu-ho dues vegades.|Ejecutad el programa a velocidad 100 y medid cuántos centímetros ha avanzado. Repetidlo dos veces.",
            "Canvieu la velocitat a 200 i torneu a mesurar. Avança el doble?|Cambiad la velocidad a 200 y volved a medir. ¿Avanza el doble?",
            "Busqueu la velocitat més petita amb què el robot encara es mou: proveu 40, 30, 20…|Buscad la velocidad más pequeña con la que el robot todavía se mueve: probad 40, 30, 20…"],
          measure: [{ q: 'Velocitat 100 durant 2 s|Velocidad 100 durante 2 s', u: 'cm' }, { q: 'Velocitat 200 durant 2 s|Velocidad 200 durante 2 s', u: 'cm' }, { q: 'Velocitat mínima que el mou|Velocidad mínima que lo mueve', u: '' }],
          tip: "Si el vostre robot no fa exactament el que fa el simulador, és normal: cada robot és una mica diferent. Per això els enginyers mesuren!|Si vuestro robot no hace exactamente lo que hace el simulador, es normal: cada robot es un poco diferente. ¡Por eso los ingenieros miden!" }),
        predict({ q: "El robot farà: <b>Engega a 100 · Espera 3 s · Para</b>. On s'aturarà?|El robot hará: <b>Arranca a 100 · Espera 3 s · Para</b>. ¿Dónde se parará?",
          arena: room(160, 90, [25, 45, 0]), marks: { A: [55, 45], B: [85, 45], C: [125, 45] }, a: 'A', prog: 'run f 100; wait 3; stop', ex: "10 cm cada segon durant 3 segons: 30 cm.|10 cm cada segundo durante 3 segundos: 30 cm." }),
        predict({ q: "I ara, amb el bloc <b>Motors: esquerre 150 · dret 150</b> durant 2 segons i després <b>Motors: esquerre 10 · dret 10</b>?|¿Y ahora, con el bloque <b>Motores: izquierdo 150 · derecho 150</b> durante 2 segundos y después <b>Motores: izquierdo 10 · derecho 10</b>?",
          arena: room(160, 90, [25, 45, 0]), marks: { A: [55, 45], B: [85, 45], C: [140, 45] }, a: 'A', prog: 'mot 150 150; wait 2; mot 10 10; wait 3', ex: "A velocitat 10 els motors no tenen força: el robot s'atura als 30 cm.|A velocidad 10 los motores no tienen fuerza: el robot se para a los 30 cm." }),
        move("Sigues un motor! Corre sense moure't del lloc: a velocitat 50 (a poc a poc), a 150 i a 255 (tan de pressa com puguis). I a velocitat 10… et quedes quiet!|¡Sé un motor! Corre sin moverte del sitio: a velocidad 50 (despacio), a 150 y a 255 (tan deprisa como puedas). Y a velocidad 10… ¡te quedas quieto!"),
        ch({ q: "Fes servir <b>Engega</b>, <b>Espera</b> i <b>Para</b> per portar el robot a la zona verda.|Usa <b>Arranca</b>, <b>Espera</b> y <b>Para</b> para llevar el robot a la zona verde.", lvl: 1,
          arena: A11({ zones: [META(60, 28, 26, 34)], goals: [{ k: 'uses', b: 'run' }, { k: 'zone', z: 'meta' }] }), pal: ['run', 'wait', 'stop', 'go'], sol: 'run f 100; wait 4; stop', hint: "Engega a 100, espera 4 s i para.|Arranca a 100, espera 4 s y para." }),
        ch({ q: "Aquesta zona és estreta: has d'encertar la distància. Tria bé la velocitat i el temps.|Esta zona es estrecha: tienes que acertar la distancia. Elige bien la velocidad y el tiempo.", lvl: 1,
          arena: A11({ zones: [META(55, 30, 14, 30)], goals: [{ k: 'zone', z: 'meta' }] }), pal: ['run', 'wait', 'stop', 'go'], sol: 'go f 70 5', hint: "El centre de la zona és a 37 cm. Per exemple: velocitat 70 durant 5 s fan 35 cm.|El centro de la zona está a 37 cm. Por ejemplo: velocidad 70 durante 5 s son 35 cm." }),
        ch({ q: "Primer recte i després una <b>corba a la dreta</b> per arribar a la meta. Fes servir el bloc <b>Motors</b>.|Primero recto y después una <b>curva a la derecha</b> para llegar a la meta. Usa el bloque <b>Motores</b>.", lvl: 2,
          arena: room(160, 100, [25, 25, 0], { walls: [[0, 50, 70, 50, 'block']], zones: [META(80, 65, 32, 30)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: ['mot', 'run', 'wait', 'stop', 'go'], sol: 'go f 150 3; mot 150 100; wait 2; stop; go f 100 3.5',
          hint: "Per girar a la dreta, la roda esquerra ha d'anar més de pressa.|Para girar a la derecha, la rueda izquierda tiene que ir más deprisa." }),
        ch({ q: "Esquiva el bloc amb una corba cap a l'<b>esquerra</b> i torna a baixar fins a la meta.|Esquiva el bloque con una curva hacia la <b>izquierda</b> y vuelve a bajar hasta la meta.", lvl: 2,
          arena: room(170, 100, [25, 70, 0], { walls: [[75, 55, 22, 45, 'block']], zones: [META(125, 62, 32, 32)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: ['mot', 'run', 'wait', 'stop', 'go'],
          sol: 'mot 100 150; wait 1; mot 150 150; wait 1.4; mot 150 100; wait 1; mot 150 150; wait 3; mot 150 100; wait 1; mot 150 150; wait 1.4; mot 100 150; wait 1; stop', hint: "Pensa-ho en tres trossos: corba a l'esquerra, recte, corba a la dreta.|Piénsalo en tres trozos: curva a la izquierda, recto, curva a la derecha." }),
        ch({ q: "Aparca marxa enrere entre els dos cotxes. Pots fer servir velocitats <b>negatives</b> al bloc Motors.|Aparca marcha atrás entre los dos coches. Puedes usar velocidades <b>negativas</b> en el bloque Motores.", lvl: 2,
          arena: room(160, 100, [110, 30, 0], { walls: [[30, 66, 26, 34, 'crate'], [94, 66, 26, 34, 'crate']], zones: [Z('pl', 58, 66, 34, 34, 'y', 'P|P', { bay: true, open: 't' })], goals: [{ k: 'zone', z: 'pl' }, { k: 'notouch' }] }), pal: ['mot', 'run', 'wait', 'stop', 'go'],
          sol: 'go b 150 2; mot -150 -60; wait 1.1; stop; go b 150 3.2', hint: "Primer recula una mica recte i després fes una corba marxa enrere.|Primero retrocede un poco recto y después haz una curva marcha atrás." }),
        ch({ q: "Fes una volta sencera a la rotonda i torna a la sortida. El llapis dibuixarà el teu camí.|Da una vuelta entera a la rotonda y vuelve a la salida. El lápiz dibujará tu camino.", lvl: 3, pen: true,
          arena: room(160, 110, [80, 95, 0], { posts: [[80, 58, 10, 'tree']], zones: [Z('sort', 66, 82, 28, 26, 'u', 'Sortida|Salida')], goals: [{ k: 'path', pts: [[117, 58], [80, 22], [43, 58], [80, 95]], tol: 9 }, { k: 'notouch' }] }), pal: ['mot', 'run', 'wait', 'stop', 'go'],
          sol: 'mot 210 250; wait 10; stop', hint: "Primer una mica a la dreta i després una corba llarga a l'esquerra.|Primero un poco a la derecha y después una curva larga a la izquierda." }),
        crea({ name: 'El passeig del gos|El paseo del perro', q: "Missió: treu a passejar el gos! Passa per l'<b>arbre</b>, després per la <b>font</b> i torna a la <b>caseta</b>. Fes servir corbes amb el bloc Motors.|Misión: ¡saca a pasear al perro! Pasa por el <b>árbol</b>, después por la <b>fuente</b> y vuelve a la <b>caseta</b>. Usa curvas con el bloque Motores.", pen: true,
          crit: ["Arbre → font → caseta|Árbol → fuente → caseta", 'Sense xocar|Sin chocar'],
          arena: room(170, 110, [30, 85, -90], { posts: [[85, 55, 6, 'tree']], zones: [Z('arb', 20, 15, 30, 26, 'g', 'Arbre|Árbol'), Z('font', 120, 15, 30, 26, 'u', 'Font|Fuente'), Z('cas', 15, 72, 30, 30, 'o', 'Caseta|Caseta')], goals: [{ k: 'seq', zs: ['arb', 'font', 'cas'] }, { k: 'notouch' }] }),
          pal: ['mot', 'run', 'wait', 'stop', 'go'], sol: 'go f 150 3.8; mot 150 60; wait 1.1; mot 150 150; wait 6.2; mot 150 60; wait 1.1; mot 150 150; wait 2.9; mot 150 60; wait 1.1; mot 150 150; wait 7; stop' }),
        extra({ q: "Repte de precisió: para <b>exactament</b> dins la zona petita, a 52 cm.|Reto de precisión: para <b>exactamente</b> dentro de la zona pequeña, a 52 cm.",
          arena: A11({ zones: [META(72, 37, 10, 16)], goals: [{ k: 'zone', z: 'meta' }] }), pal: ['run', 'wait', 'stop', 'go'], sol: 'go f 130 4' }),
        quiz('tanca', "Què passa si poses velocitat <b>10</b> als dos motors?|¿Qué pasa si pones velocidad <b>10</b> a los dos motores?", ['El robot no es mou: li falta força|El robot no se mueve: le falta fuerza', 'Va molt de pressa|Va muy deprisa', 'Gira sobre si mateix|Gira sobre sí mismo'], 0),
        quiz('tanca', "Com fas una corba cap a l'<b>esquerra</b>?|¿Cómo haces una curva hacia la <b>izquierda</b>?", ['La roda dreta més ràpida que l\'esquerra|La rueda derecha más rápida que la izquierda', "La roda esquerra més ràpida|La rueda izquierda más rápida", 'Totes dues igual|Las dos igual'], 0),
        feel()
      ] },
    /* ---------------- k1-3 ---------------- */
    { id: 'k1-3', t: 'Girar sobre si mateix|Girar sobre sí mismo', min: 45, badge: 'robo2',
      learn: ['Per girar sobre si mateix, una roda va endavant i l\'altra enrere.|Para girar sobre sí mismo, una rueda va adelante y la otra atrás.',
        'A velocitat 100, mig segon de gir és un quart de volta (90°).|A velocidad 100, medio segundo de giro es un cuarto de vuelta (90°).',
        'Un camí amb cantonades és una seqüència d\'avançar i girar.|Un camino con esquinas es una secuencia de avanzar y girar.'],
      steps: [
        quiz('recorda', "Per fer una corba a la dreta amb el bloc Motors…|Para hacer una curva a la derecha con el bloque Motores…", ['L\'esquerre va més de pressa que el dret|El izquierdo va más deprisa que el derecho', 'Tots dos a 0|Los dos a 0', 'El dret va més de pressa|El derecho va más deprisa'], 0),
        story('bit', "El robot ha de repartir paquets per un magatzem ple de passadissos i <b>cantonades</b>. Amb corbes no hi cap! Avui aprendrem a girar <b>sobre el lloc</b>, com una baldufa.|El robot tiene que repartir paquetes por un almacén lleno de pasillos y <b>esquinas</b>. ¡Con curvas no cabe! Hoy aprenderemos a girar <b>sobre el sitio</b>, como una peonza."),
        learn([
          { k: 'Girar|Girar', t: 'Sobre si mateix o sobre una roda|Sobre sí mismo o sobre una rueda', anim: 'rPivot',
            x: "Si una roda va <b>endavant</b> i l'altra <b>enrere</b>, el robot gira sobre el seu centre, sense moure's del lloc. Si una roda està <b>parada</b>, gira al voltant d'aquella roda i ocupa més espai.|Si una rueda va <b>adelante</b> y la otra <b>atrás</b>, el robot gira sobre su centro, sin moverse del sitio. Si una rueda está <b>parada</b>, gira alrededor de esa rueda y ocupa más espacio." },
          { k: 'Angles|Ángulos', t: 'Un quart de volta = 90°|Un cuarto de vuelta = 90°', anim: 'rTurn',
            x: "Una volta sencera són <b>360°</b>; un quart de volta, <b>90°</b>. Al simulador, girant a velocitat 100, el robot fa 90° en <b>0,5 segons</b>. Doncs 1 segon fa mitja volta (180°).|Una vuelta entera son <b>360°</b>; un cuarto de vuelta, <b>90°</b>. En el simulador, girando a velocidad 100, el robot hace 90° en <b>0,5 segundos</b>. Entonces 1 segundo hace media vuelta (180°).",
            tip: "Al tauler de sensors tens una brúixola que diu quants graus ha girat el robot.|En el panel de sensores tienes una brújula que dice cuántos grados ha girado el robot." },
          { k: 'Cantonades|Esquinas', t: 'Avança, gira, avança|Avanza, gira, avanza', anim: 'rdTurnL',
            x: "Per fer un camí amb cantonades, alterna blocs <b>Endavant</b> i <b>Gira</b>. Mira la demostració: avança, gira a l'esquerra i entra al garatge.|Para hacer un camino con esquinas, alterna bloques <b>Adelante</b> y <b>Gira</b>. Mira la demostración: avanza, gira a la izquierda y entra en el garaje." },
          { k: 'Compte!|¡Cuidado!', t: 'La dreta del robot|La derecha del robot', anim: 'rDiff',
            x: "«Gira a la dreta» vol dir la <b>dreta del robot</b>, no la de la pantalla. Si el robot ve cap a tu, la seva dreta és la teva esquerra. Posa't al seu lloc!|«Gira a la derecha» significa la <b>derecha del robot</b>, no la de la pantalla. Si el robot viene hacia ti, su derecha es tu izquierda. ¡Ponte en su lugar!",
            bad: 'Gira a la dreta = va cap a la dreta de la pantalla.|Gira a la derecha = va hacia la derecha de la pantalla.', good: 'Gira a la dreta = gira cap a la seva dreta, miri on miri.|Gira a la derecha = gira hacia su derecha, mire donde mire.' }
        ]),
        kit({ title: 'Calibrem el gir de 90°|Calibramos el giro de 90°', art: 'track',
          t: "Al simulador, 0,5 s a velocitat 100 fan 90°. Al vostre robot? Busqueu el temps que fa un quart de volta exacte.|En el simulador, 0,5 s a velocidad 100 son 90°. ¿En vuestro robot? Buscad el tiempo que hace un cuarto de vuelta exacto.",
          mat: ['Robot|Robot', 'Cinta de pintor|Cinta de pintor', 'Ordinador amb MakeCode|Ordenador con MakeCode'],
          roles: [['Programador/a|Programador/a', "Canvia el temps del gir i passa el programa al robot.|Cambia el tiempo del giro y pasa el programa al robot."], ['Observador/a|Observador/a', 'Mira si el robot queda ben recte després de girar.|Mira si el robot queda bien recto después de girar.']],
          steps: ["Feu una creu al terra amb dues tires de cinta. Poseu el robot al mig, mirant cap a una tira.|Haced una cruz en el suelo con dos tiras de cinta. Poned el robot en el centro, mirando hacia una tira.",
            "Programeu «Gira a la dreta a 100 durant 0,5 s» amb el botó MakeCode i proveu-lo.|Programad «Gira a la derecha a 100 durante 0,5 s» con el botón MakeCode y probadlo.",
            "Si gira massa, baixeu el temps; si gira massa poc, pugeu-lo. Apunteu el temps bo.|Si gira demasiado, bajad el tiempo; si gira demasiado poco, subidlo. Apuntad el tiempo bueno.",
            "Proveu ara 4 girs seguits: torna a mirar on mirava al principi?|Probad ahora 4 giros seguidos: ¿vuelve a mirar donde miraba al principio?"],
          measure: [{ q: 'Temps per a 90° a velocitat 100|Tiempo para 90° a velocidad 100', u: 's' }, { q: 'Temps per a 180° (mitja volta)|Tiempo para 180° (media vuelta)', u: 's' }] }),
        predict({ q: "El robot comença mirant a la dreta. Programa: <b>Gira a l'esquerra 0,5 s · Endavant 3 s</b>. On acabarà?|El robot empieza mirando a la derecha. Programa: <b>Gira a la izquierda 0,5 s · Adelante 3 s</b>. ¿Dónde terminará?",
          arena: room(140, 110, [70, 55, 0]), marks: { A: [70, 25], B: [100, 55], C: [70, 85] }, a: 'A', prog: 'turn l 100 .5; go f 100 3', ex: "Girar a l'esquerra des de mirar a la dreta el deixa mirant amunt.|Girar a la izquierda desde mirar a la derecha lo deja mirando arriba." }),
        predict({ q: "Ara mira <b>cap a tu</b> (avall). Programa: <b>Gira a la dreta 0,5 s · Endavant 3 s</b>. On acabarà?|Ahora mira <b>hacia ti</b> (abajo). Programa: <b>Gira a la derecha 0,5 s · Adelante 3 s</b>. ¿Dónde terminará?",
          arena: room(140, 110, [70, 45, 90]), marks: { A: [100, 45], B: [40, 45], C: [70, 75] }, a: 'B', prog: 'turn r 100 .5; go f 100 3', ex: "Posa't al seu lloc: si mira cap a tu, la seva dreta és la teva esquerra.|Ponte en su lugar: si mira hacia ti, su derecha es tu izquierda." }),
        move("Baldufa humana: fes un quart de volta (90°) a la dreta, després mitja volta (180°) a l'esquerra i, per acabar, una volta sencera (360°). On mires ara?|Peonza humana: haz un cuarto de vuelta (90°) a la derecha, después media vuelta (180°) a la izquierda y, para terminar, una vuelta entera (360°). ¿Hacia dónde miras ahora?"),
        ch({ q: "Gira cap a la dreta i entra al <b>garatge</b>.|Gira hacia la derecha y entra en el <b>garaje</b>.", lvl: 1,
          arena: room(140, 100, [30, 25, 0], { walls: [[0, 50, 12, 50, 'wall'], [48, 50, 12, 50, 'wall']], zones: [Z('gar', 12, 58, 36, 36, 'y', 'Garatge|Garaje')], goals: [{ k: 'zone', z: 'gar' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'turn r 100 .5; go f 100 5', hint: "Un quart de volta són 0,5 s a velocitat 100.|Un cuarto de vuelta son 0,5 s a velocidad 100." }),
        ch({ q: "Passadís en forma de L: arriba al final sense tocar les parets.|Pasillo en forma de L: llega al final sin tocar las paredes.", lvl: 1,
          arena: room(150, 110, [20, 25, 0], { walls: [[0, 45, 90, 65, 'block'], [110, 0, 40, 75, 'block']], zones: [META(91, 82, 30, 26)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'go f 150 5.3; turn r 100 .5; go f 150 4.6', hint: "Primer avança fins a la cantonada; després gira i baixa.|Primero avanza hasta la esquina; después gira y baja." }),
        ch({ q: "Mitja volta: ves fins al <b>punt groc</b> i torna a <b>casa</b> mirant endavant (no marxa enrere!).|Media vuelta: ve hasta el <b>punto amarillo</b> y vuelve a <b>casa</b> mirando hacia delante (¡no marcha atrás!).", lvl: 2,
          arena: A11({ zones: [Z('casa', 8, 28, 34, 34, 'u', 'Casa|Casa'), Z('pt', 72, 32, 20, 26, 'y', '★|★')], goals: [{ k: 'seq', zs: ['pt', 'casa'] }, { k: 'uses', b: 'turn' }] }), pal: PAL.mov, sol: 'go f 100 5.5; turn r 100 1; go f 100 5.5', hint: "Mitja volta = el doble que un quart de volta.|Media vuelta = el doble que un cuarto de vuelta." }),
        ch({ q: "Ara cap a l'<b>esquerra</b>: puja pel passadís fins a la meta.|Ahora hacia la <b>izquierda</b>: sube por el pasillo hasta la meta.", lvl: 2,
          arena: room(150, 110, [20, 90, 0], { walls: [[0, 0, 80, 70, 'block'], [100, 35, 50, 75, 'block']], zones: [META(82, 4, 30, 28)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'go f 150 4.6; turn l 100 .5; go f 150 4.6', hint: "Gira a l'esquerra del robot, que ara mira cap a la dreta.|Gira a la izquierda del robot, que ahora mira hacia la derecha." }),
        ch({ q: "Fes la volta al bloc: tres cantonades fins a la meta.|Da la vuelta al bloque: tres esquinas hasta la meta.", lvl: 2,
          arena: room(150, 120, [20, 100, 0], { walls: [[38, 30, 72, 54, 'books']], zones: [META(4, 4, 30, 30)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'go f 150 7.6; turn l 100 .5; go f 150 6; turn l 100 .5; go f 150 7.6', hint: "Divideix-ho en trossos: endavant i gira, endavant i gira…|Divídelo en trozos: adelante y gira, adelante y gira…" }),
        ch({ q: "Eslàlom: passa entre els cons fent cantonades i arriba a la meta sense tocar-ne cap.|Eslalon: pasa entre los conos haciendo esquinas y llega a la meta sin tocar ninguno.", lvl: 3,
          arena: room(170, 100, [20, 75, 0], { posts: [[55, 75, 5], [95, 30, 5], [135, 75, 5]], zones: [META(140, 18, 26, 30)], goals: [{ k: 'zone', z: 'meta' }, { k: 'notouch' }] }), pal: PAL.mov,
          sol: 'go f 100 1.5; turn l 100 .5; go f 100 3; turn r 100 .5; go f 100 4; turn r 100 .5; go f 100 1.5; turn l 100 .5; go f 100 4; turn l 100 .5; go f 100 1.5; turn r 100 .5; go f 100 4', hint: "Dibuixa el camí amb el dit abans de fer el programa.|Dibuja el camino con el dedo antes de hacer el programa." }),
        parsons({ q: "Ordena els blocs per portar el robot al magatzem, que és a dalt a la dreta.|Ordena los bloques para llevar el robot al almacén, que está arriba a la derecha.",
          arena: room(140, 100, [25, 80, 0], { zones: [Z('mag', 95, 10, 32, 30, 'p', 'Magatzem|Almacén')], goals: [{ k: 'zone', z: 'mag' }] }), pool: 'go f 100 4; turn l 100 .5; go f 100 4; turn r 100 .5; go f 100 4', sol: 'go f 100 4; turn l 100 .5; go f 100 5.5; turn r 100 .5; go f 100 4' }),
        crea({ name: 'El repartidor del magatzem|El repartidor del almacén', q: "Missió del magatzem: porta el paquet a la <b>prestatgeria A</b>, després a la <b>B</b> i torna a la <b>sortida</b>. Fes servir cantonades!|Misión del almacén: lleva el paquete a la <b>estantería A</b>, después a la <b>B</b> y vuelve a la <b>salida</b>. ¡Usa esquinas!",
          crit: ['A → B → sortida|A → B → salida', 'Sense xocar|Sin chocar'],
          arena: room(170, 120, [25, 100, -90], { walls: [[50, 30, 18, 60, 'crate'], [105, 30, 18, 60, 'crate']], zones: [Z('a', 12, 8, 30, 26, 'p', 'A|A'), Z('b', 128, 8, 30, 26, 'p', 'B|B'), Z('s', 10, 84, 30, 30, 'u', 'Sortida|Salida')], goals: [{ k: 'seq', zs: ['a', 'b', 's'] }, { k: 'notouch' }] }), pal: PAL.mov,
          sol: 'go f 150 5.3; turn r 100 .5; go f 150 7.5; turn r 100 .5; go f 150 5.4; turn r 100 .5; go f 150 7.5' }),
        extra({ q: "Repte de graus: el robot mira a la dreta i la meta és en <b>diagonal</b>. Gira 45° i ves-hi recte.|Reto de grados: el robot mira a la derecha y la meta está en <b>diagonal</b>. Gira 45° y ve recto.",
          arena: room(140, 110, [25, 85, 0], { zones: [META(80, 14, 30, 30)], goals: [{ k: 'zone', z: 'meta' }] }), pal: PAL.mov, sol: 'turn l 100 .25; go f 100 9' }),
        quiz('tanca', "Quant de temps cal girar a velocitat 100 per fer <b>mitja volta</b> al simulador?|¿Cuánto tiempo hay que girar a velocidad 100 para dar <b>media vuelta</b> en el simulador?", ['1 segon|1 segundo', '0,5 segons|0,5 segundos', '2 segons|2 segundos'], 0),
        quiz('tanca', "Per girar sobre si mateix, les rodes…|Para girar sobre sí mismo, las ruedas…", ['Van una endavant i l\'altra enrere|Van una adelante y la otra atrás', 'Van totes dues endavant|Van las dos adelante', 'Estan parades|Están paradas'], 0),
        feel()
      ] },
    /* ---------------- k1-4 · projecte ---------------- */
    { id: 'k1-4', t: 'Projecte: el passeig pel parc|Proyecto: el paseo por el parque', min: 50, proj: true, badge: 'robo3',
      learn: ['Un projecte gran es fa per trossos petits.|Un proyecto grande se hace por trozos pequeños.',
        'Primer planifiquem el camí i després el programem.|Primero planificamos el camino y después lo programamos.',
        'Provar, mirar què falla i millorar és la feina dels enginyers.|Probar, mirar qué falla y mejorar es el trabajo de los ingenieros.'],
      steps: [
        quiz('recorda', "Repàs: quin bloc fa que el robot s'aturi després d'<b>Engega</b>?|Repaso: ¿qué bloque hace que el robot se pare después de <b>Arranca</b>?", [chip('stop'), chip('wait 1'), chip('turn r 100 .5')], 0),
        story('bit', "Projecte de la unitat! L'ajuntament vol un robot guia per al <b>parc</b>: ha de passar per la font, els gronxadors i el banc del llac, sense trepitjar els arbres. Primer el planificarem, després el programarem per trossos.|¡Proyecto de la unidad! El ayuntamiento quiere un robot guía para el <b>parque</b>: tiene que pasar por la fuente, los columpios y el banco del lago, sin pisar los árboles. Primero lo planificaremos, después lo programaremos por trozos.", 'taller'),
        learn([
          { k: 'Planificar|Planificar', t: 'Com es fa un projecte gran|Cómo se hace un proyecto grande', anim: 'rPlan',
            x: "Els enginyers no ho programen tot de cop. <b>Primer</b> diuen què ha de fer el robot, <b>després</b> ho parteixen en trossos petits, <b>programen</b> un tros, el <b>proven</b> i passen al següent.|Los ingenieros no lo programan todo de golpe. <b>Primero</b> dicen qué tiene que hacer el robot, <b>después</b> lo parten en trozos pequeños, <b>programan</b> un trozo, lo <b>prueban</b> y pasan al siguiente." },
          { k: 'El camí|El camino', t: 'Dibuixar abans de programar|Dibujar antes de programar', anim: 'rdWalk',
            x: "Mira el passeig: cada tros recte és un bloc <b>Endavant</b> i cada cantonada és un bloc <b>Gira</b>. Si mesures els trossos amb el regle del terra, saps quant de temps ha d'anar el robot.|Mira el paseo: cada trozo recto es un bloque <b>Adelante</b> y cada esquina es un bloque <b>Gira</b>. Si mides los trozos con la regla del suelo, sabes cuánto tiempo tiene que ir el robot.",
            tip: "Fórmula de la unitat: temps = distància ÷ (velocitat ÷ 10).|Fórmula de la unidad: tiempo = distancia ÷ (velocidad ÷ 10)." },
          { k: 'Provar|Probar', t: 'Si falla, no ho esborris tot|Si falla, no lo borres todo', anim: 'rSense',
            x: "Quan el robot no arriba, mira <b>fins on ha anat bé</b>. Canvia només el bloc que falla. Fes servir el botó de <b>repetició</b> per tornar a mirar el moviment a poc a poc.|Cuando el robot no llega, mira <b>hasta dónde ha ido bien</b>. Cambia solo el bloque que falla. Usa el botón de <b>repetición</b> para volver a mirar el movimiento despacio." }
        ]),
        kit({ title: 'El parc a terra|El parque en el suelo', art: 'track',
          t: "Construïu un petit parc al terra de l'aula i feu el passeig amb el robot de veritat.|Construid un pequeño parque en el suelo del aula y haced el paseo con el robot de verdad.",
          mat: ['Robot|Robot', 'Cinta de pintor|Cinta de pintor', '3 fulls de colors (font, gronxadors, banc)|3 hojas de colores (fuente, columpios, banco)', 'Gots de plàstic (arbres)|Vasos de plástico (árboles)'],
          roles: [['Arquitecte/a|Arquitecto/a', 'Munta el parc i mesura les distàncies.|Monta el parque y mide las distancias.'], ['Programador/a|Programador/a', 'Escriu el programa a MakeCode i el prova.|Escribe el programa en MakeCode y lo prueba.']],
          steps: ["Col·loqueu els tres fulls a terra formant una L, separats uns 40 cm. Els gots fan d'arbres.|Colocad las tres hojas en el suelo formando una L, separadas unos 40 cm. Los vasos hacen de árboles.",
            "Dibuixeu el camí en un paper: quants centímetres hi ha de full a full i on cal girar.|Dibujad el camino en un papel: cuántos centímetros hay de hoja a hoja y dónde hay que girar.",
            "Feu el programa a MakeCode (o passeu-hi el del simulador) i proveu-lo. Apunteu què ha fallat.|Haced el programa en MakeCode (o pasad el del simulador) y probadlo. Apuntad qué ha fallado.",
            "Ajusteu els temps i torneu-ho a provar fins que el robot faci el passeig sencer.|Ajustad los tiempos y volved a probarlo hasta que el robot haga el paseo entero."],
          measure: [{ q: 'Quants intents heu necessitat?|¿Cuántos intentos habéis necesitado?', u: '' }] }),
        spot({ q: "Aquest programa havia d'anar a la font i després girar cap als gronxadors, però gira cap al costat equivocat. <b>Troba el bloc.</b>|Este programa tenía que ir a la fuente y después girar hacia los columpios, pero gira hacia el lado equivocado. <b>Encuentra el bloque.</b>",
          arena: room(180, 110, [20, 90, 0], { zones: [Z('font', 60, 76, 26, 26, 'u', 'Font|Fuente'), Z('gron', 60, 10, 30, 26, 'p', 'Gronxadors|Columpios')] }), prog: 'go f 150 3; turn! r 100 .5; go f 150 4.5' }),
        move("Passeig a càmera lenta: camina per la classe com el robot del parc. Cada vegada que giris, para, fes el quart de volta i continua. Compta els girs!|Paseo a cámara lenta: camina por la clase como el robot del parque. Cada vez que gires, para, haz el cuarto de vuelta y continúa. ¡Cuenta los giros!"),
        ch({ q: "Tros 1: ves de l'entrada fins a la <b>font</b> i para-hi.|Trozo 1: ve de la entrada hasta la <b>fuente</b> y para allí.", lvl: 1,
          arena: room(180, 120, [20, 100, 0], { posts: [[62, 60, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('font', 72, 86, 28, 28, 'u', 'Font|Fuente')], goals: [{ k: 'zone', z: 'font' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'go f 150 4.2' }),
        ch({ q: "Tros 2: des de la font, gira i puja fins als <b>gronxadors</b>.|Trozo 2: desde la fuente, gira y sube hasta los <b>columpios</b>.", lvl: 2,
          arena: room(180, 120, [86, 100, 0], { posts: [[62, 60, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('font', 72, 86, 28, 28, 'u', 'Font|Fuente'), Z('gron', 72, 10, 30, 28, 'p', 'Gronxadors|Columpios')], goals: [{ k: 'zone', z: 'gron' }, { k: 'notouch' }] }), pal: PAL.mov, sol: 'turn l 100 .5; go f 150 5.4' }),
        ch({ q: "Tros 3: dels gronxadors al <b>banc del llac</b>, esquivant l'arbre.|Trozo 3: de los columpios al <b>banco del lago</b>, esquivando el árbol.", lvl: 2,
          arena: room(180, 120, [87, 24, -90], { posts: [[62, 60, 6, 'tree'], [125, 24, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('gron', 72, 10, 30, 28, 'p', 'Gronxadors|Columpios'), Z('banc', 140, 40, 34, 28, 'o', 'Banc|Banco')], goals: [{ k: 'zone', z: 'banc' }, { k: 'notouch' }] }), pal: PAL.mov,
          sol: 'turn r 100 1; go f 150 2; turn l 100 .5; go f 150 4.2' }),
        ch({ q: "Tot junt: entrada → font → gronxadors → banc. Ajunta els trossos en un sol programa.|Todo junto: entrada → fuente → columpios → banco. Junta los trozos en un solo programa.", lvl: 3,
          arena: room(180, 120, [20, 100, 0], { posts: [[62, 60, 6, 'tree'], [125, 24, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('font', 72, 86, 28, 28, 'u', 'Font|Fuente'), Z('gron', 72, 10, 30, 28, 'p', 'Gronxadors|Columpios'), Z('banc', 140, 40, 34, 28, 'o', 'Banc|Banco')], goals: [{ k: 'seq', zs: ['font', 'gron', 'banc'] }, { k: 'notouch' }] }), pal: PAL.mov,
          sol: 'go f 150 4.4; turn l 100 .5; go f 150 5.2; turn r 100 1; go f 150 2; turn l 100 .5; go f 150 4.2' }),
        ch({ q: "El parc tanca aviat! Fes el passeig sencer en <b>menys de 20 segons</b>.|¡El parque cierra pronto! Haz el paseo entero en <b>menos de 20 segundos</b>.", lvl: 3,
          arena: room(180, 120, [20, 100, 0], { posts: [[62, 60, 6, 'tree'], [125, 24, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('font', 72, 86, 28, 28, 'u', 'Font|Fuente'), Z('gron', 72, 10, 30, 28, 'p', 'Gronxadors|Columpios'), Z('banc', 140, 40, 34, 28, 'o', 'Banc|Banco')], goals: [{ k: 'seq', zs: ['font', 'gron', 'banc'] }, { k: 'notouch' }, { k: 'time', max: 20 }] }), pal: PAL.mov,
          sol: 'go f 250 2.6; turn l 100 .5; go f 250 3.1; turn r 100 1; go f 250 1.2; turn l 100 .5; go f 250 2.5' }),
        crea({ name: 'El meu passeig pel parc|Mi paseo por el parque', q: "El teu passeig! Comença a l'entrada, visita <b>els quatre llocs</b> en l'ordre que vulguis… però acaba al <b>quiosc</b>. Hi ha molts camins bons.|¡Tu paseo! Empieza en la entrada, visita <b>los cuatro lugares</b> en el orden que quieras… pero termina en el <b>quiosco</b>. Hay muchos caminos buenos.",
          crit: ['Font, gronxadors i banc|Fuente, columpios y banco', 'Acaba al quiosc|Termina en el quiosco', 'Sense xocar|Sin chocar'],
          arena: room(180, 120, [20, 100, 0], { posts: [[62, 60, 6, 'tree'], [125, 24, 6, 'tree'], [150, 95, 6, 'tree']], zones: [Z('font', 72, 86, 28, 28, 'u', 'Font|Fuente'), Z('gron', 72, 10, 30, 28, 'p', 'Gronxadors|Columpios'), Z('banc', 140, 40, 34, 28, 'o', 'Banc|Banco'), Z('kio', 4, 4, 32, 30, 'y', 'Quiosc|Quiosco')], tmax: 50, goals: [{ k: 'zone', z: 'font', pass: true }, { k: 'zone', z: 'gron', pass: true }, { k: 'zone', z: 'banc', pass: true }, { k: 'zone', z: 'kio' }, { k: 'notouch' }] }),
          pal: PAL.mov2, sol: 'go f 150 4.4; turn l 100 .5; go f 150 5.2; turn r 100 1; go f 150 2; turn l 100 .5; go f 150 4.2; turn l 100 .5; go f 150 .8; turn l 100 .5; go f 150 8.6; turn r 100 .5; go f 150 1.4' }),
        quiz('tanca', "Com es fa un projecte gran?|¿Cómo se hace un proyecto grande?", ['Per trossos: planificar, programar un tros, provar…|Por trozos: planificar, programar un trozo, probar…', 'Tot de cop i a veure què passa|Todo de golpe y a ver qué pasa', 'Copiant el del company|Copiando el del compañero'], 0),
        quiz('tanca', "El robot no arriba al banc. Què fas primer?|El robot no llega al banco. ¿Qué haces primero?", ['Mirar fins on ha anat bé i canviar el bloc que falla|Mirar hasta dónde ha ido bien y cambiar el bloque que falla', 'Esborrar-ho tot|Borrarlo todo', 'Posar velocitat 255 a tot|Poner velocidad 255 a todo'], 0),
        feel()
      ] }
  ] });

  /* ---------- Al catàleg ---------- */
  const c = TECH.find(x => x.id === 'robotica');
  c.units = U; delete c.soon;
  c.desc = "Un robot de veritat (micro:bit + Maqueen) i el seu simulador 3D: motors, girs, distància, línies, llum, so, variables i control intel·ligent, fins a missions de rescat, sumo i un projecte final que passa del simulador al robot de l'aula.|Un robot de verdad (micro:bit + Maqueen) y su simulador 3D: motores, giros, distancia, líneas, luz, sonido, variables y control inteligente, hasta misiones de rescate, sumo y un proyecto final que pasa del simulador al robot del aula.";
  Object.assign(TBADGE, {
    robo1: { id: 'robo1', ico: '🤖', n: 'Primer robot|Primer robot', d: 'Has programat el teu primer robot.|Has programado tu primer robot.' },
    robo2: { id: 'robo2', ico: '🧭', n: 'Brúixola|Brújula', d: 'Domines els girs de 90° i les cantonades.|Dominas los giros de 90° y las esquinas.' },
    robo3: { id: 'robo3', ico: '🌳', n: 'Guia del parc|Guía del parque', d: 'Has acabat el projecte del passeig pel parc.|Has terminado el proyecto del paseo por el parque.' }
  });
})();
