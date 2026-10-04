/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 2 «Animació» (g2-1 … g2-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Les diapositives «media» mostren l'escenari de Creadors en marxa (TMEDIA.stage: { k: 'stage', w, prog, time }). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Dibuixos que es mouen ---------- */
  'g2-1': {
    obj: [
      "L'alumne/a explica que una animació és una sèrie de dibuixos que canvien de pressa.|El alumno/a explica que una animación es una serie de dibujos que cambian deprisa.",
      "L'alumne/a fa servir «vestit següent» i «posa el vestit» per canviar el dibuix d'un personatge.|El alumno/a usa «disfraz siguiente» y «pon el disfraz» para cambiar el dibujo de un personaje.",
      "L'alumne/a posa esperes entre els canvis de vestit i explica per què calen.|El alumno/a pone esperas entre los cambios de disfraz y explica por qué hacen falta.",
      "L'alumne/a crea una petita animació amb un personatge que parla i canvia de cara.|El alumno/a crea una pequeña animación con un personaje que habla y cambia de cara."
    ],
    comp: [
      "Competència digital (CD5): crear continguts digitals senzills amb programació per blocs|Competencia digital (CD5): crear contenidos digitales sencillos con programación por bloques",
      "Pensament computacional: seqüència d'instruccions, estats d'un objecte (vestits) i temps|Pensamiento computacional: secuencia de instrucciones, estados de un objeto (disfraces) y tiempo",
      "Educació artística: el moviment a la imatge, el llibret animat i el cinema d'animació|Educación artística: el movimiento en la imagen, la libreta animada y el cine de animación",
      "Matemàtiques: mesura del temps en segons i nombres decimals senzills (0,5 segons)|Matemáticas: medida del tiempo en segundos y números decimales sencillos (0,5 segundos)"
    ],
    vocab: [
      ["Animació|Animación", "Dibuixos que es mostren un darrere l'altre tan de pressa que sembla que es mouen.|Dibujos que se muestran uno tras otro tan deprisa que parece que se mueven."],
      ["Vestit (disfressa)|Disfraz", "Un dels dibuixos d'un personatge. Cada vestit té un número.|Uno de los dibujos de un personaje. Cada disfraz tiene un número."],
      ["Vestit següent|Disfraz siguiente", "El bloc que canvia el dibuix pel que ve després; de l'últim torna al primer.|El bloque que cambia el dibujo por el que viene después; del último vuelve al primero."],
      ["Posa el vestit…|Pon el disfraz…", "El bloc que tria un vestit concret pel seu número.|El bloque que elige un disfraz concreto por su número."],
      ["Espera|Espera", "El bloc que atura el guió uns segons abans de continuar.|El bloque que para el guion unos segundos antes de continuar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dibuixos que es mouen»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Dibujos que se mueven»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un rellotge o cronòmetre visible per a tota la classe (pot ser el del projector)|Un reloj o cronómetro visible para toda la clase (puede ser el del proyector)",
        "Opcional: un llibret animat de paper fet per tu, per ensenyar-lo al principi|Opcional: una libreta animada de papel hecha por ti, para enseñarla al principio"
      ],
      imprimir: ["Cartes de l'animació humana|Cartas de la animación humana", "Fitxa: vestits i esperes|Ficha: disfraces y esperas"],
      prep: [
        "Imprimir i retallar un paquet de cartes per grup de 4. Si es plastifiquen, serveixen també per a la sessió 2.|Imprimir y recortar un paquete de cartas por grupo de 4. Si se plastifican, sirven también para la sesión 2.",
        "Fer un llibret animat de 8 pàgines (una pilota que bota) per ensenyar-lo a la pregunta inicial.|Hacer una libreta animada de 8 páginas (una pelota que bota) para enseñarla en la pregunta inicial.",
        "Provar abans les demostracions de les diapositives 7, 8 i 13 per saber què es veurà.|Probar antes las demostraciones de las diapositivas 7, 8 y 13 para saber qué se verá.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: dibuixos quiets|Bienvenida: dibujos quietos", fase: 'inici',
        fa: "Presenta la missió de la unitat: l'aquari del moll necessita una pantalla amb animals que es moguin. Ensenya el llibret animat: primer passa les pàgines a poc a poc i després de pressa. Pregunta què ha canviat i recull respostes sense corregir-les.|Presenta la misión de la unidad: el acuario del muelle necesita una pantalla con animales que se muevan. Enseña la libreta animada: primero pasa las páginas despacio y después deprisa. Pregunta qué ha cambiado y recoge respuestas sin corregirlas.",
        diu: ["Aquests dibuixos estan quiets. Com podem fer que es moguin?|Estos dibujos están quietos. ¿Cómo podemos hacer que se muevan?",
          "Mireu el llibret a poc a poc… i ara de pressa. Què veieu ara?|Mirad la libreta despacio… y ahora deprisa. ¿Qué veis ahora?",
          "Avui aprendrem el secret dels dibuixos animats.|Hoy aprenderemos el secreto de los dibujos animados."],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vestits i esperes|Disfraces y esperas", fase: 'teoria',
        fa: "Explica amb l'animació del llibret que un dibuix animat són molts dibuixos que canvien de pressa. Presenta els vestits d'un personatge i els blocs «vestit següent» i «posa el vestit». Amb la demo de la mascota, demana que diguin el número de vestit abans que canviï. Acaba amb la diapositiva «Compte!»: sense espera no es veu res.|Explica con la animación de la libreta que un dibujo animado son muchos dibujos que cambian deprisa. Presenta los disfraces de un personaje y los bloques «disfraz siguiente» y «pon el disfraz». Con la demo de la mascota, pide que digan el número de disfraz antes de que cambie. Termina con la diapositiva «¡Cuidado!»: sin espera no se ve nada.",
        diu: ["Quants vestits té el peix? I la mascota?|¿Cuántos disfraces tiene el pez? ¿Y la mascota?",
          "Si el peix porta l'últim vestit i fa «vestit següent», quin vestit es posa?|Si el pez lleva el último disfraz y hace «disfraz siguiente», ¿qué disfraz se pone?",
          "Per què creieu que cal l'espera? Què passaria sense?|¿Por qué creéis que hace falta la espera? ¿Qué pasaría sin ella?"],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'animació humana|La animación humana", fase: 'desconnectat',
        fa: "Fes grups de 4 amb quatre papers: actor/actriu (el personatge), programador/a, director/a i revisor/a. L'actor/actriu té les 4 cartes de vestit (poses). El programador/a fa un guió amb les cartes de blocs; el director/a el llegeix en veu alta i compta els segons de cada espera; el revisor/a comprova que la pose és la que toca. Primer, un guió amb esperes. Després, el mateix guió sense cap espera: el director/a ha de llegir-lo tan de pressa com pugui. Roten els papers a cada guió.|Haz grupos de 4 con cuatro papeles: actor/actriz (el personaje), programador/a, director/a y revisor/a. El actor/actriz tiene las 4 cartas de disfraz (poses). El programador/a hace un guion con las cartas de bloques; el director/a lo lee en voz alta y cuenta los segundos de cada espera; el revisor/a comprueba que la pose es la que toca. Primero, un guion con esperas. Después, el mismo guion sin ninguna espera: el director/a tiene que leerlo tan deprisa como pueda. Rotan los papeles en cada guion.",
        diu: ["L'actor/actriu només canvia de pose quan el guió ho diu.|El actor/actriz solo cambia de pose cuando el guion lo dice.",
          "Sense esperes, us ha donat temps de veure cada pose?|Sin esperas, ¿os ha dado tiempo de ver cada pose?",
          "«Vestit següent» després del vestit 4: quin toca?|«Disfraz siguiente» después del disfraz 4: ¿cuál toca?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «El llibret animat», que toquin «Ho hem fet!» si el fan a casa o el deixin per a casa. Passeja i fixa't en la pregunta del gat: si algú respon «vestit 3», demana-li quants vestits té el gat. A «Investiga», que llegeixin els números de cada «posa el vestit» en veu baixa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «La libreta animada», que toquen «¡Lo hemos hecho!» si lo hacen en casa o lo dejen para casa. Pasea y fíjate en la pregunta del gato: si alguien responde «disfraz 3», pregúntale cuántos disfraces tiene el gato. En «Investiga», que lean los números de cada «pon el disfraz» en voz baja.",
        diu: ["Compta amb el dit: 1, 2, 1, 2… On t'atures?|Cuenta con el dedo: 1, 2, 1, 2… ¿Dónde te paras?",
          "Llegeix els vestits del peix en veu baixa: quin és el que no canvia res?|Lee los disfraces del pez en voz baja: ¿cuál es el que no cambia nada?"],
        slides: ['s12'], app: "Recorda, les dues històries de l'aquari, les cinc targetes de «Descobreix», ordenar els blocs de la mascota, «El llibret animat», la pregunta del gat i «Investiga» (el vestit que no canvia).|Recuerda, las dos historias del acuario, las cinco tarjetas de «Descubre», ordenar los bloques de la mascota, «La libreta animada», la pregunta del gato e «Investiga» (el disfraz que no cambia).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el peix, la mascota, la papallona i el cotxe|Retos: el pez, la mascota, la mariposa y el coche", fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després programa amb la classe el peix de la diapositiva 13, demanant un bloc a cada alumne/a. Deixa'ls fer els quatre reptes. Al repte de la papallona, no diguis on és l'error: pregunta quin número té cada «posa el vestit».|Haced la pausa activa todos juntos. Después programa con la clase el pez de la diapositiva 13, pidiendo un bloque a cada alumno/a. Déjalos hacer los cuatro retos. En el reto de la mariposa, no digas dónde está el error: pregunta qué número tiene cada «pon el disfraz».",
        diu: ["Quin bloc va primer? I després, què cal perquè es vegi?|¿Qué bloque va primero? ¿Y después, qué hace falta para que se vea?",
          "Si sempre poses el vestit 1, el dibuix canvia?|Si siempre pones el disfraz 1, ¿el dibujo cambia?",
          "Al cotxe, quants blocs t'han calgut? La setmana vinent en farem servir molts menys!|En el coche, ¿cuántos bloques te han hecho falta? ¡La semana que viene usaremos muchos menos!"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix que mou la cua, la mascota que té son, la papallona que no es mou i el cotxe que arrenca.|«Pausa activa» y los cuatro «Retos»: el pez que mueve la cola, la mascota que tiene sueño, la mariposa que no se mueve y el coche que arranca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera animació|Crea: mi primera animación", fase: 'crea',
        fa: "Cada alumne/a fa la seva animació d'en Numi al teatre. Quan la tinguin, en parelles s'ensenyen l'animació i el company/a ha d'endevinar quin vestit vindrà després abans de veure'l.|Cada alumno/a hace su animación de Numi en el teatro. Cuando la tengan, por parejas se enseñan la animación y el compañero/a tiene que adivinar qué disfraz vendrá después antes de verlo.",
        diu: ["Inventa una petita història: què diu en Numi i quina cara fa?|Inventa una pequeña historia: ¿qué dice Numi y qué cara pone?",
          "Endevina quin vestit ve ara!|¡Adivina qué disfraz viene ahora!"],
        slides: ['s15'], app: "Pas «Crea»: La meva primera animació (es desa al portafoli).|Paso «Crea»: Mi primera animación (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Qui em diu el secret dels dibuixos animats?|¿Quién me dice el secreto de los dibujos animados?",
          "Per què posem una espera entre dos vestits?|¿Por qué ponemos una espera entre dos disfraces?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa tots els «vestit següent» seguits i diu que «no fa res».|Pone todos los «disfraz siguiente» seguidos y dice que «no hace nada».",
        "Pregunta-li quant de temps creu que dura cada vestit a la pantalla. Que pensi què li va faltar al director/a de l'animació humana quan llegia molt de pressa.|Pregúntale cuánto tiempo cree que dura cada disfraz en la pantalla. Que piense qué le faltó al director/a de la animación humana cuando leía muy deprisa."],
      ["Repeteix «posa el vestit 1» i espera que el personatge canviï.|Repite «pon el disfraz 1» y espera que el personaje cambie.",
        "Demana-li que llegeixi en veu alta el número de cada bloc. Si el personatge ja porta el vestit 1, què canvia?|Pídele que lea en voz alta el número de cada bloque. Si el personaje ya lleva el disfraz 1, ¿qué cambia?"],
      ["Creu que després de l'últim vestit hi ha un vestit «nou» (el 3 d'un personatge que en té 2).|Cree que después del último disfraz hay un disfraz «nuevo» (el 3 de un personaje que tiene 2).",
        "Fes que compti amb els dits els vestits del personatge i que torni al primer dit quan s'acabin, com en un cercle.|Haz que cuente con los dedos los disfraces del personaje y que vuelva al primer dedo cuando se acaben, como en un círculo."],
      ["Posa esperes molt llargues (5 o 10 segons) i la prova s'acaba abans que es vegi l'animació.|Pone esperas muy largas (5 o 10 segundos) y la prueba se acaba antes de que se vea la animación.",
        "Pregunta-li quant dura la prova i quantes esperes té. Que provi amb 0,5 segons i compari.|Pregúntale cuánto dura la prueba y cuántas esperas tiene. Que pruebe con 0,5 segundos y compare."],
      ["Programa el personatge que no toca o no troba on van els blocs nous.|Programa el personaje que no toca o no encuentra dónde van los bloques nuevos.",
        "Mostra-li la franja «els blocs nous van aquí»: és on s'enganxarà el bloc que toqui a la paleta.|Muéstrale la franja «los bloques nuevos van aquí»: es donde se enganchará el bloque que toque en la paleta."]
    ],
    diff: {
      mes: "Fer una animació d'en Numi amb els 4 vestits i esperes de llargades diferents per explicar una petita història (content, pensant, trist, content). Després, provar quina és l'espera més curta amb què encara es veu cada vestit.|Hacer una animación de Numi con los 4 disfraces y esperas de duraciones diferentes para contar una pequeña historia (contento, pensando, triste, contento). Después, probar cuál es la espera más corta con la que todavía se ve cada disfraz.",
      menys: "Tenir a la taula les cartes de l'animació humana i muntar primer el guió amb cartes; després copiar-lo a l'app bloc a bloc. Començar pel repte del peix, amb parelles «vestit següent + espera».|Tener en la mesa las cartas de la animación humana y montar primero el guion con cartas; después copiarlo en la app bloque a bloque. Empezar por el reto del pez, con parejas «disfraz siguiente + espera»."
    },
    aval: {
      ticket: ["Explica amb les teves paraules què és un dibuix animat.|Explica con tus palabras qué es un dibujo animado.",
        "Què passa si poses tres «vestit següent» seguits, sense esperes?|¿Qué pasa si pones tres «disfraz siguiente» seguidos, sin esperas?"],
      rubric: [
        ["Concepte d'animació|Concepto de animación", "Explica que són dibuixos que canvien de pressa i en dona un exemple (llibret, dibuixos animats).|Explica que son dibujos que cambian deprisa y da un ejemplo (libreta, dibujos animados).", "Sap que els dibuixos «es mouen», però encara no explica per què.|Sabe que los dibujos «se mueven», pero todavía no explica por qué."],
        ["Vestits|Disfraces", "Fa servir «vestit següent» i «posa el vestit» i preveu quin vestit vindrà després.|Usa «disfraz siguiente» y «pon el disfraz» y prevé qué disfraz vendrá después.", "Canvia vestits, però de vegades repeteix el mateix número o s'oblida que es torna al primer.|Cambia disfraces, pero a veces repite el mismo número o se olvida de que se vuelve al primero."],
        ["Temps i espera|Tiempo y espera", "Posa esperes entre els canvis i en tria la durada perquè l'animació es vegi bé.|Pone esperas entre los cambios y elige su duración para que la animación se vea bien.", "Necessita l'ajuda de la pista per recordar l'espera.|Necesita la ayuda de la pista para recordar la espera."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El llibret animat»: una pilota que bota en 8 papers petits. Passeu les pàgines a poc a poc i després de pressa, i compteu quants «vestits» té la vostra animació.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «La libreta animada»: una pelota que bota en 8 papeles pequeños. Pasad las páginas despacio y después deprisa, y contad cuántos «disfraces» tiene vuestra animación.",
    slides: [
      { id: 's1', k: 'portada', t: 'Dibuixos que es mouen|Dibujos que se mueven', x: "Avui descobrirem el secret dels dibuixos animats per fer la pantalla de l'aquari.|Hoy descubriremos el secreto de los dibujos animados para hacer la pantalla del acuario.",
        nota: "Presenta l'objectiu: al final de la classe, tothom haurà fet la seva primera animació.|Presenta el objetivo: al final de la clase, todos habrán hecho su primera animación." },
      { id: 's2', k: 'pregunta', t: 'Com es mou un dibuix?|¿Cómo se mueve un dibujo?', x: "Un dibuix en un paper no es mou. Com ho fan, doncs, els dibuixos animats?|Un dibujo en un papel no se mueve. ¿Cómo lo hacen, entonces, los dibujos animados?",
        nota: "Ensenya el llibret animat a poc a poc i de pressa. Recull hipòtesis sense corregir-les: hi tornarem a la diapositiva 5.|Enseña la libreta animada despacio y deprisa. Recoge hipótesis sin corregirlas: volveremos a ello en la diapositiva 5." },
      { id: 's3', k: 'repas', t: "Recordem l'escenari|Recordemos el escenario", punts: ["El (0, 0) és al centre de l'escenari.|El (0, 0) está en el centro del escenario.", "«Quan comença» posa en marxa el guió amb la bandera verda.|«Al empezar» pone en marcha el guion con la bandera verde.", "«Digues» fa parlar un personatge.|«Di» hace hablar a un personaje."],
        nota: "Fes les preguntes en veu alta i demana que responguin amb el dit: on és el centre a la pissarra?|Haz las preguntas en voz alta y pide que respondan con el dedo: ¿dónde está el centro en la pizarra?" },
      { id: 's4', k: 'concepte', t: "La missió: l'aquari del moll|La misión: el acuario del muelle", punts: ["Al moll obriran un aquari nou.|En el muelle abrirán un acuario nuevo.", "La Marina, la guarda, vol una pantalla amb animals que es moguin.|Marina, la guardiana, quiere una pantalla con animales que se muevan.", "Durant 4 sessions la farem entre tots.|Durante 4 sesiones la haremos entre todos."],
        nota: "Explica que aquesta és la història de tota la unitat i que a la sessió 4 cadascú farà el seu aquari.|Explica que esta es la historia de toda la unidad y que en la sesión 4 cada uno hará su acuario." },
      { id: 's5', k: 'anim', t: "El secret: molts dibuixos ràpids|El secreto: muchos dibujos rápidos", anim: 'g2flip', x: "Dibuixos gairebé iguals, un darrere l'altre, molt de pressa.|Dibujos casi iguales, uno tras otro, muy deprisa.",
        nota: "Torna a les hipòtesis de la diapositiva 2. Comenta que el cinema mostra 24 imatges cada segon.|Vuelve a las hipótesis de la diapositiva 2. Comenta que el cine muestra 24 imágenes cada segundo." },
      { id: 's6', k: 'anim', t: 'Els vestits d’un personatge|Los disfraces de un personaje', anim: 'g2cost', x: "Cada dibuix és un vestit. «Vestit següent» passa al que ve després; de l'últim torna al primer.|Cada dibujo es un disfraz. «Disfraz siguiente» pasa al que viene después; del último vuelve al primero.",
        nota: "Fes notar la fletxa que torna enrere: els vestits fan un cercle.|Haz notar la flecha que vuelve atrás: los disfraces hacen un círculo." },
      { id: 's7', k: 'media', t: '«Posa el vestit…» tria un número|«Pon el disfraz…» elige un número', x: 'La mascota: 1 contenta, 2 té gana, 3 dorm.|La mascota: 1 contenta, 2 tiene hambre, 3 duerme.',
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'mascota', art: 'mascota', x: 0, y: -20, size: 140, rot: 'none' }] }, prog: '@mascota flag{ costume:1 say:"Bon dia!|¡Buenos días!",1.5 costume:2 say:"Tinc gana…|Tengo hambre…",1.5 costume:3 say:"Zzz…|Zzz…",1.5 }', time: 6 },
        nota: "Abans de cada canvi, demana a la classe quin número de vestit vindrà.|Antes de cada cambio, pide a la clase qué número de disfraz vendrá." },
      { id: 's8', k: 'media', t: 'El bloc «espera»|El bloque «espera»', x: "La medusa canvia de vestit cada segon.|La medusa cambia de disfraz cada segundo.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: 0, y: 0, size: 160, rot: 'none' }] }, prog: '@medusa flag{ next wait:1 next wait:1 next wait:1 next wait:1 next }', time: 5 },
        nota: "Compteu en veu alta els segons junts: «un… canvi!». Pregunta què passaria amb una espera de 0,2 segons.|Contad en voz alta los segundos juntos: «uno… ¡cambio!». Pregunta qué pasaría con una espera de 0,2 segundos." },
      { id: 's9', k: 'anim', t: 'Compte! Sense espera no es veu|¡Cuidado! Sin espera no se ve', anim: 'g2wait', x: "L'ordinador va tan de pressa que els canvis sense espera no es veuen.|El ordenador va tan deprisa que los cambios sin espera no se ven.",
        nota: "Aquest és l'error més freqüent de la sessió: recorda'l quan vegis algú que diu que el seu programa «no fa res».|Este es el error más frecuente de la sesión: recuérdalo cuando veas a alguien que dice que su programa «no hace nada»." },
      { id: 's10', k: 'activitat', t: "L'animació humana|La animación humana", timer: 12, punts: ["Actor/actriu: fa la pose de cada vestit.|Actor/actriz: hace la pose de cada disfraz.", "Programador/a: munta el guió amb les cartes.|Programador/a: monta el guion con las cartas.", "Director/a: llegeix el guió i compta els segons.|Director/a: lee el guion y cuenta los segundos.", "Revisor/a: comprova cada pose.|Revisor/a: comprueba cada pose."],
        nota: "Feu primer un guió amb esperes i després el mateix sense esperes, llegit molt de pressa. Pregunta què s'ha vist.|Haced primero un guion con esperas y después el mismo sin esperas, leído muy deprisa. Pregunta qué se ha visto." },
      { id: 's11', k: 'activitat', t: 'Les poses (vestits)|Las poses (disfraces)', punts: ["Vestit 1: braços avall.|Disfraz 1: brazos abajo.", "Vestit 2: braços amunt.|Disfraz 2: brazos arriba.", "Vestit 3: mà al cap, pensant.|Disfraz 3: mano en la cabeza, pensando.", "Vestit 4: ajupit, dormint.|Disfraz 4: agachado, durmiendo."],
        nota: "Deixa aquesta diapositiva projectada durant l'activitat perquè tothom recordi les poses.|Deja esta diapositiva proyectada durante la actividad para que todos recuerden las poses." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Dibuixos que es mouen».|Abre la sesión «Dibujos que se mueven».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "A «Investiga», llegeix els números dels vestits.|En «Investiga», lee los números de los disfraces.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Si el llibret animat no es pot fer a classe, que el deixin per a casa.|Si la libreta animada no se puede hacer en clase, que la dejen para casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el peix|Programemos juntos: el pez', x: "Vestit següent, espera, vestit següent, espera… Quants en calen perquè canviï 4 vegades?|Disfraz siguiente, espera, disfraz siguiente, espera… ¿Cuántos hacen falta para que cambie 4 veces?",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: 0, y: 10, size: 150, rot: 'lr' }] }, prog: '@peix flag{ next wait:0.5 next wait:0.5 next wait:0.5 next }', time: 3 },
        nota: "Escriu a la pissarra els blocs que proposa la classe i comprova-ho amb la demo. Fes notar com es repeteix la parella: és la porta de la sessió 2.|Escribe en la pizarra los bloques que propone la clase y compruébalo con la demo. Haz notar cómo se repite la pareja: es la puerta de la sesión 2." },
      { id: 's14', k: 'repte', t: 'Reptes: animem!|Retos: ¡animemos!', timer: 10, punts: ["1. El peix mou la cua|1. El pez mueve la cola", "2. La mascota té son|2. La mascota tiene sueño", "3. La papallona que no es mou: troba l'error|3. La mariposa que no se mueve: encuentra el error", "4. El cotxe arrenca|4. El coche arranca"],
        nota: "Al repte 3, pregunta quin número té cada «posa el vestit». Al 4, fes que comptin quants blocs han necessitat.|En el reto 3, pregunta qué número tiene cada «pon el disfraz». En el 4, haz que cuenten cuántos bloques han necesitado." },
      { id: 's15', k: 'activitat', t: 'Crea: la meva primera animació|Crea: mi primera animación', timer: 5, x: "En Numi al teatre: que parli, que canviï de cara i que es vegi cada canvi.|Numi en el teatro: que hable, que cambie de cara y que se vea cada cambio.",
        nota: "Celebra que cada animació expliqui una història diferent. L'app no deixa desar-la si no hi ha cap espera.|Celebra que cada animación cuente una historia diferente. La app no deja guardarla si no hay ninguna espera." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una animació són dibuixos que canvien de pressa.|Una animación son dibujos que cambian deprisa.", "Els vestits són els dibuixos d'un personatge.|Los disfraces son los dibujos de un personaje.", "L'espera dona temps a veure cada dibuix.|La espera da tiempo a ver cada dibujo."],
        nota: "Torna a la pregunta del principi: com es mou un dibuix? Ara ho saben explicar.|Vuelve a la pregunta del principio: ¿cómo se mueve un dibujo? Ahora lo saben explicar." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és un dibuix animat?|¿Qué es un dibujo animado?", "Què passa sense esperes entre els vestits?|¿Qué pasa sin esperas entre los disfraces?"],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Cartes de l'animació humana|Cartas de la animación humana", k: 'targetes',
        intro: "Un paquet per grup de 4. Retalleu-les. Les cartes de vestit són per a l'actor/actriu; la resta, per al programador/a.|Un paquete por grupo de 4. Recortadlas. Las cartas de disfraz son para el actor/actriz; el resto, para el programador/a.",
        items: [
          { t: 'Quan comença 🚩|Al empezar 🚩', n: 2 },
          { t: 'Vestit següent 👕|Disfraz siguiente 👕', n: 6 },
          { t: 'Posa el vestit 1 1️⃣|Pon el disfraz 1 1️⃣', n: 2 },
          { t: 'Posa el vestit 2 2️⃣|Pon el disfraz 2 2️⃣', n: 2 },
          { t: 'Posa el vestit 3 3️⃣|Pon el disfraz 3 3️⃣', n: 1 },
          { t: 'Espera 1 segon ⏱️|Espera 1 segundo ⏱️', n: 6 },
          { t: 'Espera 3 segons ⏳|Espera 3 segundos ⏳', n: 2 },
          { t: 'Digues «Hola!» 💬|Di «¡Hola!» 💬', n: 2 },
          { t: 'Vestit 1: braços avall 🧍|Disfraz 1: brazos abajo 🧍', n: 1 },
          { t: 'Vestit 2: braços amunt 🙌|Disfraz 2: brazos arriba 🙌', n: 1 },
          { t: 'Vestit 3: mà al cap 🤔|Disfraz 3: mano en la cabeza 🤔', n: 1 },
          { t: 'Vestit 4: ajupit, dorm 😴|Disfraz 4: agachado, duerme 😴', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: vestits i esperes|Ficha: disfraces y esperas', k: 'fitxa',
        intro: "Per als qui acabin abans o per fer a casa. Respon sense ordinador i després comprova-ho a l'app.|Para quien termine antes o para hacer en casa. Responde sin ordenador y después compruébalo en la app.",
        items: [
          { q: "El peix té 2 vestits i porta el vestit 1. Fa 4 vegades «vestit següent». Quin vestit porta al final?|El pez tiene 2 disfraces y lleva el disfraz 1. Hace 4 veces «disfraz siguiente». ¿Qué disfraz lleva al final?", sol: "El vestit 1: 1 → 2 → 1 → 2 → 1.|El disfraz 1: 1 → 2 → 1 → 2 → 1." },
          { q: "La mascota té 4 vestits i porta el 4. Fa «vestit següent». Quin vestit es posa?|La mascota tiene 4 disfraces y lleva el 4. Hace «disfraz siguiente». ¿Qué disfraz se pone?", sol: "El vestit 1: després de l'últim, torna al primer.|El disfraz 1: después del último, vuelve al primero." },
          { q: "Escriu un programa perquè la papallona bati les ales 3 vegades i es vegi cada canvi.|Escribe un programa para que la mariposa bata las alas 3 veces y se vea cada cambio.", sol: "Vestit següent, espera 0,5 segons, vestit següent, espera 0,5 segons, vestit següent.|Disfraz siguiente, espera 0,5 segundos, disfraz siguiente, espera 0,5 segundos, disfraz siguiente." },
          { q: "Aquest programa no es veu: «vestit següent, vestit següent, vestit següent». Per què? Com l'arreglaries?|Este programa no se ve: «disfraz siguiente, disfraz siguiente, disfraz siguiente». ¿Por qué? ¿Cómo lo arreglarías?", sol: "No té esperes i els canvis són massa ràpids. Cal posar una espera entre canvi i canvi.|No tiene esperas y los cambios son demasiado rápidos. Hay que poner una espera entre cambio y cambio." },
          { q: "Una espera de 0,5 segons, quantes vegades cap en 2 segons?|Una espera de 0,5 segundos, ¿cuántas veces cabe en 2 segundos?", sol: '4 vegades (0,5 + 0,5 + 0,5 + 0,5 = 2).|4 veces (0,5 + 0,5 + 0,5 + 0,5 = 2).' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Bucles per sempre ---------- */
  'g2-2': {
    obj: [
      "L'alumne/a troba el patró que es repeteix en un programa i el posa dins d'un bucle «repeteix».|El alumno/a encuentra el patrón que se repite en un programa y lo pone dentro de un bucle «repite».",
      "L'alumne/a distingeix «repeteix N vegades» de «per sempre» i tria el que convé.|El alumno/a distingue «repite N veces» de «por siempre» y elige el que conviene.",
      "L'alumne/a fa servir «si toques la vora, rebota» dins d'un bucle perquè un personatge no surti de l'escenari.|El alumno/a usa «si tocas el borde, rebota» dentro de un bucle para que un personaje no salga del escenario.",
      "L'alumne/a explica per què els blocs de sota d'un «per sempre» no s'executen mai.|El alumno/a explica por qué los bloques de debajo de un «por siempre» no se ejecutan nunca."
    ],
    comp: [
      "Competència digital (CD5): programar animacions amb bucles|Competencia digital (CD5): programar animaciones con bucles",
      "Pensament computacional: patrons, repetició (bucles finits i infinits) i depuració|Pensamiento computacional: patrones, repetición (bucles finitos e infinitos) y depuración",
      "Matemàtiques: patrons, multiplicació com a suma repetida (4 vegades 10 passos)|Matemáticas: patrones, multiplicación como suma repetida (4 veces 10 pasos)",
      "Educació física: seqüències de moviment i ritme|Educación física: secuencias de movimiento y ritmo"
    ],
    vocab: [
      ["Patró|Patrón", "Un tros que es repeteix sempre igual.|Un trozo que se repite siempre igual."],
      ["Bucle|Bucle", "Un bloc que repeteix els blocs que té a dins.|Un bloque que repite los bloques que tiene dentro."],
      ["Repeteix N vegades|Repite N veces", "Bucle que fa les voltes que diu el número i després s'acaba.|Bucle que da las vueltas que dice el número y después se acaba."],
      ["Per sempre|Por siempre", "Bucle que no s'acaba mai, fins que aturem el programa.|Bucle que no se acaba nunca, hasta que paramos el programa."],
      ["Rebotar|Rebotar", "Donar la volta quan el personatge toca la vora de l'escenari.|Dar la vuelta cuando el personaje toca el borde del escenario."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Bucles per sempre»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Bucles para siempre»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un espai lliure a l'aula (o al pati) per a l'activitat del ball en bucle|Un espacio libre en el aula (o en el patio) para la actividad del baile en bucle",
        "Un objecte que faci de «botó d'aturar» (una cartolina vermella)|Un objeto que haga de «botón de parar» (una cartulina roja)"
      ],
      imprimir: ["Cartes del ball en bucle|Cartas del baile en bucle", "Fitxa: troba el patró|Ficha: encuentra el patrón"],
      prep: [
        "Imprimir i retallar un paquet de cartes del ball per grup de 4.|Imprimir y recortar un paquete de cartas del baile por grupo de 4.",
        "Apartar taules o cadires per deixar un passadís on es pugui caminar d'una paret a l'altra (per rebotar).|Apartar mesas o sillas para dejar un pasillo donde se pueda caminar de una pared a la otra (para rebotar).",
        "Provar les demostracions de les diapositives 5, 6, 8 i 13.|Probar las demostraciones de las diapositivas 5, 6, 8 y 13.",
        "Tenir a mà el programa llarg del cotxe de la sessió 1 per comparar-lo amb un bucle.|Tener a mano el programa largo del coche de la sesión 1 para compararlo con un bucle."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: mil blocs?|Bienvenida: ¿mil bloques?", fase: 'inici',
        fa: "Repassa la sessió 1 amb dues preguntes ràpides. Explica el nou encàrrec de la Marina: la pantalla ha d'estar encesa tot el dia. Pregunta quants blocs caldrien per fer que el peix mogui la cua una hora.|Repasa la sesión 1 con dos preguntas rápidas. Explica el nuevo encargo de Marina: la pantalla tiene que estar encendida todo el día. Pregunta cuántos bloques harían falta para que el pez mueva la cola una hora.",
        diu: ["Recordeu el cotxe? Quants blocs us van caldre?|¿Recordáis el coche? ¿Cuántos bloques os hicieron falta?",
          "I si el peix ha de moure la cua tot el dia?|¿Y si el pez tiene que mover la cola todo el día?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Patrons i bucles|Patrones y bucles", fase: 'teoria',
        fa: "Mostra el patró que es repeteix i com entra dins d'un «repeteix». Compara «repeteix» i «per sempre» amb les dues demos. Explica «rebota» amb l'animació: fes que un alumne/a camini fins a la paret i doni la volta. Acaba amb «Compte!»: després de «per sempre», res.|Muestra el patrón que se repite y cómo entra dentro de un «repite». Compara «repite» y «por siempre» con las dos demos. Explica «rebota» con la animación: haz que un alumno/a camine hasta la pared y dé la vuelta. Termina con «¡Cuidado!»: después de «por siempre», nada.",
        diu: ["Quin és el tros que es repeteix? Quantes vegades surt?|¿Cuál es el trozo que se repite? ¿Cuántas veces sale?",
          "Quan s'acaba «repeteix 8 vegades»? I «per sempre»?|¿Cuándo se acaba «repite 8 veces»? ¿Y «por siempre»?",
          "Si l'ocell ha de dir «Adéu» després d'un «per sempre», el dirà algun dia?|Si el pájaro tiene que decir «Adiós» después de un «por siempre», ¿lo dirá algún día?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El ball en bucle|El baile en bucle", fase: 'desconnectat',
        fa: "En grups de 4, cada grup inventa un patró de ball de 2 o 3 moviments amb les cartes i l'embolcalla amb una carta «Repeteix N vegades». Un grup el balla i la resta compta les voltes. Després canvien la carta per «Per sempre»: ballen fins que mostres la cartolina vermella d'aturar. Per acabar, un alumne/a fa «per sempre: un pas endavant, si toques la paret, rebota» pel passadís.|En grupos de 4, cada grupo inventa un patrón de baile de 2 o 3 movimientos con las cartas y lo envuelve con una carta «Repite N veces». Un grupo lo baila y el resto cuenta las vueltas. Después cambian la carta por «Por siempre»: bailan hasta que enseñas la cartulina roja de parar. Para terminar, un alumno/a hace «por siempre: un paso adelante, si tocas la pared, rebota» por el pasillo.",
        diu: ["Quin és el vostre patró? Quantes vegades el repetireu?|¿Cuál es vuestro patrón? ¿Cuántas veces lo repetiréis?",
          "Amb «per sempre», quan s'acaba el ball?|Con «por siempre», ¿cuándo se acaba el baile?",
          "Què faria el robot del passadís sense la carta «rebota»?|¿Qué haría el robot del pasillo sin la carta «rebota»?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 i després tot el grup|Grupos de 4 y después todo el grupo" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A «Caçadors de bucles», que toquin «Ho farem a casa». Al pas del peix que neda, deixa'ls mirar una bona estona i pregunta què fa a la vora. A «Investiga», fixa't en qui toca el bucle en comptes del bloc de sota.|Cada alumno/a avanza hasta la pausa activa. En «Cazadores de bucles», que toquen «Lo haremos en casa». En el paso del pez que nada, déjalos mirar un buen rato y pregunta qué hace en el borde. En «Investiga», fíjate en quién toca el bucle en lugar del bloque de debajo.",
        diu: ["Quants passos fa en total? Suma les voltes.|¿Cuántos pasos da en total? Suma las vueltas.",
          "Aquest bloc, està a dins o a fora del bucle?|Este bloque, ¿está dentro o fuera del bucle?"],
        slides: ['s12'], app: "Recorda, les dues històries, les cinc targetes de «Descobreix», la pregunta del patró del gat, «Caçadors de bucles» (per a casa), la pregunta dels 40 passos, el peix que neda per sempre i «Investiga» (l'ocell que no diu adéu).|Recuerda, las dos historias, las cinco tarjetas de «Descubre», la pregunta del patrón del gato, «Cazadores de bucles» (para casa), la pregunta de los 40 pasos, el pez que nada por siempre e «Investiga» (el pájaro que no dice adiós).", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb bucles|Retos con bucles", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el cranc de la diapositiva 13 i deixa'ls fer els reptes. Al de la medusa només hi ha 3 blocs: si algú s'encalla, recorda-li que els blocs van a dins del bucle. A l'ocell que se'n va, pregunta on és el bloc «rebota».|Haced la pausa activa juntos. Programa con la clase el cangrejo de la diapositiva 13 y deja que hagan los retos. En el de la medusa solo hay 3 bloques: si alguien se atasca, recuérdale que los bloques van dentro del bucle. En el pájaro que se va, pregunta dónde está el bloque «rebota».",
        diu: ["Toca l'espai buit de dins del bucle abans de triar el bloc.|Toca el espacio vacío de dentro del bucle antes de elegir el bloque.",
          "On és el «rebota»? Es fa a cada volta?|¿Dónde está el «rebota»? ¿Se hace en cada vuelta?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: la medusa amb 3 blocs, el peix que neda sense sortir, el cranc que camina i l'ocell que se'n va.|«Pausa activa» y los cuatro «Retos»: la medusa con 3 bloques, el pez que nada sin salir, el cangrejo que camina y el pájaro que se va.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la pantalla que no para|Crea: la pantalla que no para", fase: 'crea',
        fa: "Cada alumne/a programa en Vuit, el pop, perquè nedi per sempre, reboti i canviï de cara. Que triïn ells els números de velocitat i d'espera. En parelles, comparen: quin pop va més de pressa i per què?|Cada alumno/a programa a Vuit, el pulpo, para que nade por siempre, rebote y cambie de cara. Que elijan ellos los números de velocidad y de espera. Por parejas, comparan: ¿qué pulpo va más deprisa y por qué?",
        diu: ["Quins números has triat? Què passa si els canvies?|¿Qué números has elegido? ¿Qué pasa si los cambias?",
          "El teu pop surt mai de l'escenari?|¿Tu pulpo sale alguna vez del escenario?"],
        slides: ['s15'], app: "Pas «Crea»: La pantalla que no para (es desa al portafoli).|Paso «Crea»: La pantalla que no para (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quina diferència hi ha entre «repeteix» i «per sempre»?|¿Qué diferencia hay entre «repite» y «por siempre»?",
          "On va el bloc «rebota»?|¿Dónde va el bloque «rebota»?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el bucle però deixa els blocs a sota, a fora del bucle.|Pone el bucle pero deja los bloques debajo, fuera del bucle.",
        "Demana-li que segueixi amb el dit la boca verda del bucle: quins blocs hi ha a dins? Recorda-li que primer cal tocar l'espai buit de dins.|Pídele que siga con el dedo la boca verde del bucle: ¿qué bloques hay dentro? Recuérdale que primero hay que tocar el espacio vacío de dentro."],
      ["Posa «rebota» abans o després del bucle i el personatge surt igualment.|Pone «rebota» antes o después del bucle y el personaje sale igualmente.",
        "Pregunta: quantes vegades es fa aquest bloc? Que recordi el robot del passadís: havia de mirar la paret a cada pas.|Pregunta: ¿cuántas veces se hace este bloque? Que recuerde el robot del pasillo: tenía que mirar la pared en cada paso."],
      ["Escriu blocs a sota d'un «per sempre» i no entén per què no es fan.|Escribe bloques debajo de un «por siempre» y no entiende por qué no se hacen.",
        "Pregunta-li quan s'acaba el «per sempre». Si no s'acaba mai, quan arribarà el programa al bloc de sota?|Pregúntale cuándo se acaba el «por siempre». Si no se acaba nunca, ¿cuándo llegará el programa al bloque de debajo?"],
      ["Fa servir «repeteix» amb un número petit per a una cosa que ha de durar sempre.|Usa «repite» con un número pequeño para algo que tiene que durar siempre.",
        "Que miri l'animació fins al final: què passa quan s'acaben les voltes? Quin bucle no s'acaba?|Que mire la animación hasta el final: ¿qué pasa cuando se acaban las vueltas? ¿Qué bucle no se acaba?"],
      ["Treu l'espera del bucle de vestits i diu que l'animació «s'ha espatllat».|Quita la espera del bucle de disfraces y dice que la animación «se ha estropeado».",
        "Recorda-li la diapositiva «Compte!» de la sessió 1: sense espera, els canvis no es veuen, tampoc dins d'un bucle.|Recuérdale la diapositiva «¡Cuidado!» de la sesión 1: sin espera, los cambios no se ven, tampoco dentro de un bucle."]
    ],
    diff: {
      mes: "Fer que el cranc camini i, cada vegada que reboti, digui «Uf!» (pista: posar el «digues» a dins del bucle i mirar quan es diu). Després, buscar l'espera més curta amb què encara es veuen les potes.|Hacer que el cangrejo camine y, cada vez que rebote, diga «¡Uf!» (pista: poner el «di» dentro del bucle y mirar cuándo se dice). Después, buscar la espera más corta con la que todavía se ven las patas.",
      menys: "Fer els reptes amb les cartes del ball a la taula: primer construir el bucle amb cartes i després copiar-lo. Començar pel repte de la medusa, que té només 3 blocs, i recordar el truc de tocar l'espai buit de dins del bucle.|Hacer los retos con las cartas del baile en la mesa: primero construir el bucle con cartas y después copiarlo. Empezar por el reto de la medusa, que tiene solo 3 bloques, y recordar el truco de tocar el espacio vacío de dentro del bucle."
    },
    aval: {
      ticket: ["Digues una cosa de la vida que es repeteixi per sempre i una que es repeteixi un nombre de vegades.|Di una cosa de la vida que se repita por siempre y una que se repita un número de veces.",
        "On s'ha de posar «si toques la vora, rebota»? Per què?|¿Dónde hay que poner «si tocas el borde, rebota»? ¿Por qué?"],
      rubric: [
        ["Patrons i bucles|Patrones y bucles", "Troba el patró i el posa dins d'un bucle amb el número correcte.|Encuentra el patrón y lo pone dentro de un bucle con el número correcto.", "Fa servir el bucle quan se li indica, però li costa trobar el patró sol/a.|Usa el bucle cuando se le indica, pero le cuesta encontrar el patrón solo/a."],
        ["Repeteix o per sempre|Repite o por siempre", "Tria el bucle adequat i explica que els blocs de sota d'un «per sempre» no es fan.|Elige el bucle adecuado y explica que los bloques de debajo de un «por siempre» no se hacen.", "Confon tots dos bucles o espera que es faci un bloc de sota d'un «per sempre».|Confunde los dos bucles o espera que se haga un bloque de debajo de un «por siempre»."],
        ["Rebotar|Rebotar", "Posa «rebota» dins del bucle i el personatge no surt mai.|Pone «rebota» dentro del bucle y el personaje no sale nunca.", "Posa «rebota», però de vegades fora del bucle.|Pone «rebota», pero a veces fuera del bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «Caçadors de bucles»: busqueu coses que es repeteixen un nombre de vegades i coses que es repeteixen per sempre, i apunteu-les en dues columnes.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «Cazadores de bucles»: buscad cosas que se repiten un número de veces y cosas que se repiten por siempre, y apuntadlas en dos columnas.",
    slides: [
      { id: 's1', k: 'portada', t: 'Bucles per sempre|Bucles para siempre', x: "La pantalla de l'aquari ha d'estar encesa tot el dia.|La pantalla del acuario tiene que estar encendida todo el día.",
        nota: "Presenta l'objectiu: fer animacions que no s'acabin i personatges que no surtin de l'escenari.|Presenta el objetivo: hacer animaciones que no se acaben y personajes que no salgan del escenario." },
      { id: 's2', k: 'repas', t: 'Recordem: vestits i esperes|Recordemos: disfraces y esperas', punts: ["«Vestit següent» passa al dibuix següent.|«Disfraz siguiente» pasa al dibujo siguiente.", "De l'últim vestit es torna al primer.|Del último disfraz se vuelve al primero.", "L'espera fa que es vegi cada canvi.|La espera hace que se vea cada cambio."],
        nota: "Fes les preguntes a l'atzar i demana que responguin aixecant 1 o 2 dits (el número de vestit).|Haz las preguntas al azar y pide que respondan levantando 1 o 2 dedos (el número de disfraz)." },
      { id: 's3', k: 'pregunta', t: 'Quants blocs caldrien?|¿Cuántos bloques harían falta?', x: "Si el peix ha de moure la cua tot el dia, quants «vestit següent» i «espera» hem de posar?|Si el pez tiene que mover la cola todo el día, ¿cuántos «disfraz siguiente» y «espera» tenemos que poner?",
        nota: "Deixa que facin càlculs (milers!) i que diguin que és impossible: és el moment de presentar el bucle.|Deja que hagan cálculos (¡miles!) y que digan que es imposible: es el momento de presentar el bucle." },
      { id: 's4', k: 'anim', t: 'El tros que es repeteix|El trozo que se repite', anim: 'g2loop', x: 'Un patró que surt 3 vegades cap dins d’un bucle.|Un patrón que sale 3 veces cabe dentro de un bucle.',
        nota: "Demana que comptin els blocs abans (6) i després (3). Fes notar que el bucle també és un bloc.|Pide que cuenten los bloques antes (6) y después (3). Haz notar que el bucle también es un bloque." },
      { id: 's5', k: 'media', t: '«Repeteix 8 vegades»|«Repite 8 veces»', x: 'La medusa mou els tentacles 8 vegades i para.|La medusa mueve los tentáculos 8 veces y para.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: 0, y: 0, size: 160, rot: 'none' }] }, prog: '@medusa flag{ rep:8{ next wait:0.3 } }', time: 4 },
        nota: "Compteu les voltes junts en veu alta: s'atura al 8.|Contad las vueltas juntos en voz alta: se para en el 8." },
      { id: 's6', k: 'media', t: '«Per sempre»|«Por siempre»', x: "L'ocell bat les ales i no para mai.|El pájaro bate las alas y no para nunca.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'ocell', art: 'ocell', x: 0, y: 20, size: 160, rot: 'lr' }] }, prog: '@ocell flag{ forever{ next wait:0.25 } }', time: 6 },
        nota: "Pregunta quan s'acabarà. Resposta: quan toquem el botó d'aturar.|Pregunta cuándo se acabará. Respuesta: cuando toquemos el botón de parar." },
      { id: 's7', k: 'anim', t: '«Si toques la vora, rebota»|«Si tocas el borde, rebota»', anim: 'g2bounce', x: 'Arriba a la vora i dona la volta: la direcció passa de 90 a -90.|Llega al borde y da la vuelta: la dirección pasa de 90 a -90.',
        nota: "Fes que un alumne/a camini fins a la paret i doni la volta: és exactament el que fa el bloc.|Haz que un alumno/a camine hasta la pared y dé la vuelta: es exactamente lo que hace el bloque." },
      { id: 's8', k: 'media', t: 'Nedar per sempre|Nadar por siempre', x: 'Per sempre { mou-te 5 passos, rebota }.|Por siempre { muévete 5 pasos, rebota }.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 120, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:5 bounce } }', time: 8 },
        nota: "Pregunta què passaria sense «rebota». Si cal, explica que el peix continuaria fora de la pantalla, on no el veuríem.|Pregunta qué pasaría sin «rebota». Si hace falta, explica que el pez seguiría fuera de la pantalla, donde no lo veríamos." },
      { id: 's9', k: 'anim', t: 'Compte! Després de «per sempre», res|¡Cuidado! Después de «por siempre», nada', anim: 'g2never', x: "El programa no arriba mai als blocs de sota.|El programa no llega nunca a los bloques de debajo.",
        nota: "Relaciona-ho amb la vida: si camines per sempre, mai no arribes a seure.|Relaciónalo con la vida: si caminas por siempre, nunca llegas a sentarte." },
      { id: 's10', k: 'activitat', t: 'El ball en bucle|El baile en bucle', timer: 12, punts: ["Inventeu un patró de 2 o 3 moviments.|Inventad un patrón de 2 o 3 movimientos.", "Emboliqueu-lo amb «Repeteix N vegades».|Envolvedlo con «Repite N veces».", "Ara amb «Per sempre»: fins a la cartolina vermella.|Ahora con «Por siempre»: hasta la cartulina roja.", "Al passadís: un pas i, si toques la paret, rebota.|En el pasillo: un paso y, si tocas la pared, rebota."],
        nota: "Que el grup que mira compti les voltes en veu alta. Al passadís, el «robot» camina a poc a poc.|Que el grupo que mira cuente las vueltas en voz alta. En el pasillo, el «robot» camina despacio." },
      { id: 's11', k: 'activitat', t: 'Regles del ball|Reglas del baile', punts: ["Un bucle té els moviments a dins.|Un bucle tiene los movimientos dentro.", "«Repeteix» compta; «per sempre» no.|«Repite» cuenta; «por siempre» no.", "Només s'atura amb la cartolina vermella.|Solo se para con la cartulina roja."],
        nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Bucles per sempre».|Abre la sesión «Bucles para siempre».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "Mira el peix que neda: què fa a la vora?|Mira el pez que nada: ¿qué hace en el borde?", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Caçadors de bucles» és per fer a casa.|«Cazadores de bucles» es para hacer en casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el cranc|Programemos juntos: el cangrejo', x: 'Per sempre: mou-te, vestit següent, espera i rebota.|Por siempre: muévete, disfraz siguiente, espera y rebota.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'cranc', art: 'cranc', x: 0, y: -130, size: 110, rot: 'lr' }] }, prog: '@cranc flag{ forever{ move:10 next wait:0.1 bounce } }', time: 8 },
        nota: "Demana l'ordre dels blocs a la classe. Prova a canviar el número de l'espera i mireu com canvia el pas.|Pide el orden de los bloques a la clase. Prueba a cambiar el número de la espera y mirad cómo cambia el paso." },
      { id: 's14', k: 'repte', t: 'Reptes amb bucles|Retos con bucles', timer: 10, punts: ["1. La medusa amb 3 blocs|1. La medusa con 3 bloques", "2. El peix que neda sense sortir|2. El pez que nada sin salir", "3. El cranc que camina|3. El cangrejo que camina", "4. L'ocell que se'n va: troba l'error|4. El pájaro que se va: encuentra el error"],
        nota: "Al repte 4, pregunta on és el bloc «rebota» i quantes vegades es fa.|En el reto 4, pregunta dónde está el bloque «rebota» y cuántas veces se hace." },
      { id: 's15', k: 'activitat', t: 'Crea: la pantalla que no para|Crea: la pantalla que no para', timer: 5, x: 'En Vuit neda per sempre, rebota i canvia de cara. Tria tu els números!|Vuit nada por siempre, rebota y cambia de cara. ¡Elige tú los números!',
        nota: "L'app demana que hi hagi un «per sempre». Proposa als ràpids que provin el gir per fer-lo nedar en diagonal.|La app pide que haya un «por siempre». Propón a los rápidos que prueben el giro para hacerlo nadar en diagonal." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Un bucle repeteix els blocs de dins.|Un bucle repite los bloques de dentro.", "«Per sempre» no s'acaba: res del que hi ha a sota es fa.|«Por siempre» no se acaba: nada de lo que hay debajo se hace.", "«Rebota», dins del bucle, no deixa sortir el personatge.|«Rebota», dentro del bucle, no deja salir al personaje."],
        nota: "Torna a la pregunta dels mil blocs: ara n'hi ha prou amb 3!|Vuelve a la pregunta de los mil bloques: ¡ahora basta con 3!" },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Una cosa que es repeteix per sempre i una que es repeteix N vegades.|Una cosa que se repite por siempre y una que se repite N veces.", "On va el «rebota» i per què?|¿Dónde va el «rebota» y por qué?"],
        nota: "Anota qui encara posa blocs fora del bucle: hi tornarem a la sessió 3.|Anota quién todavía pone bloques fuera del bucle: volveremos a ello en la sesión 3." }
    ],
    print: [
      { id: 'p1', t: 'Cartes del ball en bucle|Cartas del baile en bucle', k: 'targetes',
        intro: "Un paquet per grup de 4. Les cartes de bucle embolcallen les de moviment.|Un paquete por grupo de 4. Las cartas de bucle envuelven las de movimiento.",
        items: [
          { t: 'Quan comença 🚩|Al empezar 🚩', n: 1 },
          { t: 'Repeteix 2 vegades 🔁|Repite 2 veces 🔁', n: 1 },
          { t: 'Repeteix 3 vegades 🔁|Repite 3 veces 🔁', n: 1 },
          { t: 'Repeteix 4 vegades 🔁|Repite 4 veces 🔁', n: 1 },
          { t: 'Per sempre ♾️|Por siempre ♾️', n: 1 },
          { t: 'Aplaudeix 👏|Aplaude 👏', n: 2 },
          { t: 'Salta 🦘|Salta 🦘', n: 2 },
          { t: 'Gira mitja volta 🔄|Gira media vuelta 🔄', n: 2 },
          { t: 'Un pas endavant 👣|Un paso adelante 👣', n: 2 },
          { t: "Toca't el cap 🙆|Tócate la cabeza 🙆", n: 2 },
          { t: 'Si toques la paret, rebota 🧱|Si tocas la pared, rebota 🧱', n: 1 },
          { t: 'Atura ✋|Para ✋', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: troba el patró|Ficha: encuentra el patrón', k: 'fitxa',
        intro: "Encercla el tros que es repeteix i escriu el programa amb un bucle.|Rodea el trozo que se repite y escribe el programa con un bucle.",
        items: [
          { q: "Mou-te 10, gira 90, mou-te 10, gira 90, mou-te 10, gira 90, mou-te 10, gira 90.|Muévete 10, gira 90, muévete 10, gira 90, muévete 10, gira 90, muévete 10, gira 90.", sol: "Repeteix 4 vegades { mou-te 10, gira 90 }.|Repite 4 veces { muévete 10, gira 90 }." },
          { q: "Vestit següent, espera 0,5, vestit següent, espera 0,5, vestit següent, espera 0,5.|Disfraz siguiente, espera 0,5, disfraz siguiente, espera 0,5, disfraz siguiente, espera 0,5.", sol: "Repeteix 3 vegades { vestit següent, espera 0,5 }.|Repite 3 veces { disfraz siguiente, espera 0,5 }." },
          { q: "Repeteix 5 vegades { mou-te 20 passos }. Quants passos fa en total?|Repite 5 veces { muévete 20 pasos }. ¿Cuántos pasos da en total?", sol: '100 passos (5 × 20).|100 pasos (5 × 20).' },
          { q: "Per sempre { mou-te 5 } i, a sota, «digues Adéu». Dirà «Adéu» algun dia? Per què?|Por siempre { muévete 5 } y, debajo, «di Adiós». ¿Dirá «Adiós» algún día? ¿Por qué?", sol: "No: «per sempre» no s'acaba i el programa no arriba mai al bloc de sota.|No: «por siempre» no se acaba y el programa no llega nunca al bloque de debajo." },
          { q: "Vols que un peix nedi tota l'estona sense sortir. Escriu-ne el guió.|Quieres que un pez nade todo el rato sin salir. Escribe su guion.", sol: "Per sempre { mou-te 5 passos, si toques la vora, rebota }.|Por siempre { muévete 5 pasos, si tocas el borde, rebota }." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Molts personatges alhora ---------- */
  'g2-3': {
    obj: [
      "L'alumne/a programa diversos personatges triant-los a la barra de dalt de l'editor.|El alumno/a programa varios personajes eligiéndolos en la barra de arriba del editor.",
      "L'alumne/a explica que tots els guions «quan comença» es posen en marxa alhora.|El alumno/a explica que todos los guiones «al empezar» se ponen en marcha a la vez.",
      "L'alumne/a fa servir dos guions en un mateix personatge per fer dues coses a ritmes diferents.|El alumno/a usa dos guiones en un mismo personaje para hacer dos cosas a ritmos diferentes.",
      "L'alumne/a canvia els números de «mou-te» i «espera» per donar una velocitat i un ritme propis a cada personatge.|El alumno/a cambia los números de «muévete» y «espera» para dar una velocidad y un ritmo propios a cada personaje."
    ],
    comp: [
      "Competència digital (CD5): crear escenes animades amb diversos objectes programats|Competencia digital (CD5): crear escenas animadas con varios objetos programados",
      "Pensament computacional: paral·lelisme (programes que funcionen alhora) i esdeveniments|Pensamiento computacional: paralelismo (programas que funcionan a la vez) y eventos",
      "Matemàtiques: comparar velocitats i durades (passos més llargs, esperes més curtes)|Matemáticas: comparar velocidades y duraciones (pasos más largos, esperas más cortas)",
      "Treball cooperatiu: coordinar-se en grup perquè cadascú faci la seva part alhora|Trabajo cooperativo: coordinarse en grupo para que cada uno haga su parte a la vez"
    ],
    vocab: [
      ["Guió|Guion", "Una capçalera (com «quan comença») amb els blocs que té a sota.|Una cabecera (como «al empezar») con los bloques que tiene debajo."],
      ["Alhora|A la vez", "Al mateix moment: tots els guions «quan comença» arrenquen junts.|En el mismo momento: todos los guiones «al empezar» arrancan juntos."],
      ["Velocitat|Velocidad", "Com de pressa es mou un personatge: depèn del número de «mou-te».|Lo deprisa que se mueve un personaje: depende del número de «muévete»."],
      ["Ritme|Ritmo", "Com de pressa canvia de vestit: depèn del número d'«espera».|Lo deprisa que cambia de disfraz: depende del número de «espera»."],
      ["Personatge|Personaje", "Cada dibuix de l'escenari que té els seus propis guions.|Cada dibujo del escenario que tiene sus propios guiones."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Molts personatges alhora»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Muchos personajes a la vez»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un espai lliure per a l'aquari humà (el centre de l'aula o el pati)|Un espacio libre para el acuario humano (el centro del aula o el patio)",
        "Una cartolina verda (bandera) i una de vermella (atura)|Una cartulina verde (bandera) y una roja (para)"
      ],
      imprimir: ["Cartes de l'aquari humà|Cartas del acuario humano", "Fitxa: qui va més de pressa?|Ficha: ¿quién va más deprisa?"],
      prep: [
        "Imprimir i retallar un paquet de cartes de personatge per grup de 5.|Imprimir y recortar un paquete de cartas de personaje por grupo de 5.",
        "Marcar al terra (o amb cadires) els límits de l'«aquari» on es mouran els alumnes.|Marcar en el suelo (o con sillas) los límites del «acuario» donde se moverán los alumnos.",
        "Provar les demostracions de les diapositives 5, 6, 8 i 13.|Probar las demostraciones de las diapositivas 5, 6, 8 y 13.",
        "Recordar com es canvia de personatge a l'editor (la barra de dalt) per ensenyar-ho al projector.|Recordar cómo se cambia de personaje en el editor (la barra de arriba) para enseñarlo en el proyector."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el tanc gran|Bienvenida: el tanque grande", fase: 'inici',
        fa: "Repassa la sessió 2 i presenta el repte: al tanc gran hi ha molts animals i s'han de moure tots alhora. Pregunta com creuen que ho fa l'ordinador per moure'n molts a la vegada.|Repasa la sesión 2 y presenta el reto: en el tanque grande hay muchos animales y se tienen que mover todos a la vez. Pregunta cómo creen que lo hace el ordenador para mover muchos a la vez.",
        diu: ["Una orquestra té molts músics. Com sap cadascú què ha de tocar?|Una orquesta tiene muchos músicos. ¿Cómo sabe cada uno qué tiene que tocar?",
          "I com saben quan han de començar?|¿Y cómo saben cuándo tienen que empezar?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Cada personatge, els seus guions|Cada personaje, sus guiones", fase: 'teoria',
        fa: "Ensenya al projector la barra de personatges de l'editor i com cadascú té els seus guions. Mostra la cursa del peix i la tortuga: surten alhora, però amb velocitats diferents. Presenta els dos guions en un sol personatge i les dues meduses amb ritmes diferents. Acaba amb «Compte!»: una espera llarga dins del bucle que mou fa anar a salts.|Enseña en el proyector la barra de personajes del editor y cómo cada uno tiene sus guiones. Muestra la carrera del pez y la tortuga: salen a la vez, pero con velocidades diferentes. Presenta los dos guiones en un solo personaje y las dos medusas con ritmos diferentes. Termina con «¡Cuidado!»: una espera larga dentro del bucle que mueve hace ir a saltos.",
        diu: ["Qui arribarà primer, el peix o la tortuga? Per què?|¿Quién llegará primero, el pez o la tortuga? ¿Por qué?",
          "Quina medusa té l'espera més curta?|¿Qué medusa tiene la espera más corta?",
          "Com podem fer que el peix nedi llis i mogui la cua a poc a poc?|¿Cómo podemos hacer que el pez nade suave y mueva la cola despacio?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'aquari humà|El acuario humano", fase: 'desconnectat',
        fa: "Grups de 5. Cada alumne/a rep una carta de personatge amb el seu guió (peix, cranc, medusa, alga, tortuga). Quan aixeques la cartolina verda, tothom comença el seu guió alhora; amb la vermella, tothom s'atura. Segona ronda: canvia els números (la tortuga encara més lenta, el peix més ràpid). Tercera ronda: qui vulgui prova la carta «dos guions» (camina i, alhora, aplaudeix a poc a poc). La resta del grup observa i comenta.|Grupos de 5. Cada alumno/a recibe una carta de personaje con su guion (pez, cangrejo, medusa, alga, tortuga). Cuando levantas la cartulina verde, todos empiezan su guion a la vez; con la roja, todos se paran. Segunda ronda: cambia los números (la tortuga aún más lenta, el pez más rápido). Tercera ronda: quien quiera prueba la carta «dos guiones» (camina y, a la vez, aplaude despacio). El resto del grupo observa y comenta.",
        diu: ["Algú ha esperat que un altre acabés per començar?|¿Alguien ha esperado a que otro terminara para empezar?",
          "Amb dos guions alhora: és difícil fer dues coses a ritmes diferents?|Con dos guiones a la vez: ¿es difícil hacer dos cosas a ritmos diferentes?",
          "Si el peix fa 3 passos i la tortuga 1, qui arriba primer a la paret?|Si el pez da 3 pasos y la tortuga 1, ¿quién llega primero a la pared?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 5|Grupos de 5" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al tanc del pas «Prediu i prova», insisteix que toquin cada animal a la barra de dalt per veure'n els guions: la pregunta següent ho necessita. A «Investiga», que comparin els dos guions del peix.|Cada alumno/a avanza hasta la pausa activa. En el tanque del paso «Predice y prueba», insiste en que toquen cada animal en la barra de arriba para ver sus guiones: la pregunta siguiente lo necesita. En «Investiga», que comparen los dos guiones del pez.",
        diu: ["Toca el cranc a dalt: quins blocs té?|Toca el cangrejo arriba: ¿qué bloques tiene?",
          "Quin dels dos guions del peix fa moure la cua?|¿Cuál de los dos guiones del pez hace mover la cola?"],
        slides: ['s12'], app: "Recorda, les dues històries, les cinc targetes de «Descobreix», «L'orquestra de casa» (per a casa), la pregunta dels 3 guions, el tanc amb tres animals, la pregunta de qui va més de pressa i «Investiga» (la cua lenta).|Recuerda, las dos historias, las cinco tarjetas de «Descubre», «La orquesta de casa» (para casa), la pregunta de los 3 guiones, el tanque con tres animales, la pregunta de quién va más deprisa e «Investiga» (la cola lenta).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: tots alhora|Retos: todos a la vez", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el peix de dos guions de la diapositiva 13, ensenyant on es toca per afegir blocs al segon guió. Deixa'ls fer els reptes. A la cursa, pregunta quins números han provat abans de donar cap pista.|Haced la pausa activa juntos. Programa con la clase el pez de dos guiones de la diapositiva 13, enseñando dónde se toca para añadir bloques al segundo guion. Déjalos hacer los retos. En la carrera, pregunta qué números han probado antes de dar ninguna pista.",
        diu: ["Has triat el personatge que toca, a dalt?|¿Has elegido el personaje que toca, arriba?",
          "Què passa si poses el mateix número al peix i a la tortuga?|¿Qué pasa si pones el mismo número al pez y a la tortuga?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix i el cranc alhora, la medusa de dos guions, la cursa de l'aquari i el peix petit que no es mou.|«Pausa activa» y los cuatro «Retos»: el pez y el cangrejo a la vez, la medusa de dos guiones, la carrera del acuario y el pez pequeño que no se mueve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el fons marí|Crea: el fondo marino", fase: 'crea',
        fa: "Cada alumne/a programa el seu tanc amb el peix, el cranc i la medusa. Quan acabin, en parelles miren el tanc del company/a i endevinen quin animal té el «mou-te» més gran.|Cada alumno/a programa su tanque con el pez, el cangrejo y la medusa. Cuando terminen, por parejas miran el tanque del compañero/a y adivinan qué animal tiene el «muévete» más grande.",
        diu: ["Quin caràcter té cada animal? Ràpid, tranquil, nerviós?|¿Qué carácter tiene cada animal? ¿Rápido, tranquilo, nervioso?",
          "Endevina: quin animal té el número més gran?|Adivina: ¿qué animal tiene el número más grande?"],
        slides: ['s15'], app: "Pas «Crea»: El fons marí (es desa al portafoli).|Paso «Crea»: El fondo marino (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quan comencen els guions dels personatges?|¿Cuándo empiezan los guiones de los personajes?",
          "Per a què serveixen dos guions en un personatge?|¿Para qué sirven dos guiones en un personaje?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Programa tots els blocs al primer personatge perquè no ha canviat de personatge a la barra de dalt.|Programa todos los bloques en el primer personaje porque no ha cambiado de personaje en la barra de arriba.",
        "Pregunta-li de qui són els guions que veu ara. Que toqui el nom del personatge a dalt abans d'afegir cap bloc.|Pregúntale de quién son los guiones que ve ahora. Que toque el nombre del personaje arriba antes de añadir ningún bloque."],
      ["Creu que els personatges es mouen per ordre: primer el que ha programat primer.|Cree que los personajes se mueven por orden: primero el que ha programado primero.",
        "Recorda-li l'aquari humà: amb la cartolina verda, tothom va començar alhora. Que miri la demo de la cursa.|Recuérdale el acuario humano: con la cartulina verde, todos empezaron a la vez. Que mire la demo de la carrera."],
      ["Ho posa tot en un sol bucle amb una espera llarga i el personatge va a salts.|Lo pone todo en un solo bucle con una espera larga y el personaje va a saltos.",
        "Pregunta-li què fa el personatge mentre espera. Suggereix-li fer servir el segon guió per als vestits.|Pregúntale qué hace el personaje mientras espera. Sugiérele usar el segundo guion para los disfraces."],
      ["No troba com afegir blocs al segon guió.|No encuentra cómo añadir bloques al segundo guion.",
        "Que toqui l'espai buit «els blocs nous van aquí» del segon guió: el bloc nou s'hi enganxarà.|Que toque el espacio vacío «los bloques nuevos van aquí» del segundo guion: el bloque nuevo se enganchará ahí."],
      ["A la cursa posa números molt grans i el peix surt de l'escenari.|En la carrera pone números muy grandes y el pez sale del escenario.",
        "Pregunta quants passos fa el peix en 4 segons si en fa 30 per segon. Que provi amb números petits i compari.|Pregunta cuántos pasos da el pez en 4 segundos si da 30 por segundo. Que pruebe con números pequeños y compare."]
    ],
    diff: {
      mes: "Afegir en Vuit o una segona medusa al fons marí i donar a cada animal un caràcter diferent (ràpid, tranquil, nerviós) només amb els números de «mou-te» i «espera». Després, explicar a un company/a quin número fa cada caràcter.|Añadir a Vuit o una segunda medusa al fondo marino y dar a cada animal un carácter diferente (rápido, tranquilo, nervioso) solo con los números de «muévete» y «espera». Después, explicar a un compañero/a qué número hace cada carácter.",
      menys: "Treballar amb les cartes de l'aquari humà a la taula: una carta per personatge, i copiar cada carta al personatge que toca. Començar pel repte del peix i el cranc, programant-los d'un en un i provant cada vegada.|Trabajar con las cartas del acuario humano en la mesa: una carta por personaje, y copiar cada carta al personaje que toca. Empezar por el reto del pez y el cangrejo, programándolos de uno en uno y probando cada vez."
    },
    aval: {
      ticket: ["Quan toques la bandera verda, en quin ordre comencen els guions dels personatges?|Cuando tocas la bandera verde, ¿en qué orden empiezan los guiones de los personajes?",
        "Com faries que un peix nedés llis i mogués la cua a poc a poc?|¿Cómo harías que un pez nadara suave y moviera la cola despacio?"],
      rubric: [
        ["Diversos personatges|Varios personajes", "Tria el personatge a la barra de dalt i programa cadascun amb el seu guió.|Elige el personaje en la barra de arriba y programa cada uno con su guion.", "Programa més d'un personatge amb ajuda o barreja els guions.|Programa más de un personaje con ayuda o mezcla los guiones."],
        ["Alhora|A la vez", "Explica que tots els guions «quan comença» arrenquen alhora.|Explica que todos los guiones «al empezar» arrancan a la vez.", "Encara pensa que els guions van per ordre.|Todavía piensa que los guiones van por orden."],
        ["Velocitat i ritme|Velocidad y ritmo", "Canvia els números de «mou-te» i «espera» per obtenir el que vol i fa servir dos guions quan cal.|Cambia los números de «muévete» y «espera» para conseguir lo que quiere y usa dos guiones cuando hace falta.", "Canvia els números a l'atzar fins que funciona.|Cambia los números al azar hasta que funciona."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «L'orquestra de casa»: cadascú té el seu guió (aplaudir, tocar la taula, xiuxiuejar) i tots comenceu alhora. Proveu de canviar els ritmes!|En casa, con el móvil, podéis repetir la sesión y hacer «La orquesta de casa»: cada uno tiene su guion (aplaudir, tocar la mesa, susurrar) y todos empezáis a la vez. ¡Probad a cambiar los ritmos!",
    slides: [
      { id: 's1', k: 'portada', t: 'Molts personatges alhora|Muchos personajes a la vez', x: "Al tanc gran de l'aquari, tots els animals es mouen a la vegada.|En el tanque grande del acuario, todos los animales se mueven a la vez.",
        nota: "Presenta l'objectiu: programar molts personatges i fer que funcionin junts.|Presenta el objetivo: programar muchos personajes y hacer que funcionen juntos." },
      { id: 's2', k: 'repas', t: 'Recordem: bucles|Recordemos: bucles', punts: ["«Repeteix N vegades» compta les voltes.|«Repite N veces» cuenta las vueltas.", "«Per sempre» no s'acaba mai.|«Por siempre» no se acaba nunca.", "«Rebota» va a dins del bucle.|«Rebota» va dentro del bucle."],
        nota: "Fes les dues preguntes de «Recorda» en veu alta abans d'obrir l'app.|Haz las dos preguntas de «Recuerda» en voz alta antes de abrir la app." },
      { id: 's3', k: 'pregunta', t: "Com ho fa una orquestra?|¿Cómo lo hace una orquesta?", x: "Molts músics, cadascun amb la seva partitura, i tots comencen alhora.|Muchos músicos, cada uno con su partitura, y todos empiezan a la vez.",
        nota: "Fes la comparació: músic = personatge, partitura = guió, director/a = bandera verda.|Haz la comparación: músico = personaje, partitura = guion, director/a = bandera verde." },
      { id: 's4', k: 'concepte', t: 'Cada personatge, els seus guions|Cada personaje, sus guiones', punts: ["A dalt de l'editor tries el personatge.|Arriba del editor eliges el personaje.", "Cada personatge té els seus propis guions.|Cada personaje tiene sus propios guiones.", "Programar el peix no canvia res del cranc.|Programar el pez no cambia nada del cangrejo."],
        nota: "Ensenya-ho en directe a l'editor, amb un repte obert al projector.|Enséñalo en directo en el editor, con un reto abierto en el proyector." },
      { id: 's5', k: 'media', t: 'Tres animals, tres guions|Tres animales, tres guiones', x: 'El peix neda, el cranc camina i la medusa mou els tentacles.|El pez nada, el cangrejo camina y la medusa mueve los tentáculos.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -80, y: 60, rot: 'lr' }, { id: 'cranc', art: 'cranc', x: 60, y: -130, rot: 'lr' }, { id: 'medusa', art: 'medusa', x: 150, y: 40, rot: 'none' }] }, prog: '@peix flag{ forever{ move:4 bounce } } @cranc flag{ forever{ move:2 bounce } } @medusa flag{ forever{ next wait:0.4 } }', time: 8 },
        nota: "Llegiu junts els tres guions de sota la demo: de qui és cadascun?|Leed juntos los tres guiones de debajo de la demo: ¿de quién es cada uno?" },
      { id: 's6', k: 'media', t: 'La cursa: tots surten alhora|La carrera: todos salen a la vez', x: 'El peix fa passos de 5 i la tortuga, de 2.|El pez da pasos de 5 y la tortuga, de 2.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -190, y: 50, rot: 'lr' }, { id: 'tuga', art: 'tuga', x: -190, y: -80, size: 90, rot: 'lr' }] }, prog: '@peix flag{ rep:70{ move:5 } } @tuga flag{ rep:70{ move:2 } }', time: 4 },
        nota: "Abans de començar, que votin qui guanyarà. Després, pregunta quin número caldria per a una tortuga encara més lenta.|Antes de empezar, que voten quién ganará. Después, pregunta qué número haría falta para una tortuga aún más lenta." },
      { id: 's7', k: 'anim', t: 'Dos guions en un personatge|Dos guiones en un personaje', anim: 'g2para', x: 'Un guió mou el peix i l’altre li canvia la cua, tots dos alhora.|Un guion mueve el pez y el otro le cambia la cola, los dos a la vez.',
        nota: "Fes notar que els dos marcadors grocs avancen a la vegada: els dos guions funcionen alhora.|Haz notar que los dos marcadores amarillos avanzan a la vez: los dos guiones funcionan a la vez." },
      { id: 's8', k: 'media', t: 'El ritme de cada animal|El ritmo de cada animal', x: "Espera de 0,15 segons a l'esquerra i de 0,8 a la dreta.|Espera de 0,15 segundos a la izquierda y de 0,8 a la derecha.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'medusa', art: 'medusa', x: -110, y: 10, size: 130, rot: 'none' }, { id: 'medusa2', art: 'medusa', x: 110, y: 10, size: 130, rot: 'none', name: 'Medusa 2|Medusa 2' }] }, prog: '@medusa flag{ forever{ next wait:0.15 } } @medusa2 flag{ forever{ next wait:0.8 } }', time: 6 },
        nota: "Pregunta quina medusa sembla nerviosa i quina tranquil·la, i quin número ho decideix.|Pregunta qué medusa parece nerviosa y cuál tranquila, y qué número lo decide." },
      { id: 's9', k: 'media', t: 'Compte! Una espera que fa anar a salts|¡Cuidado! Una espera que hace ir a saltos', x: "Tot en un bucle amb espera de 0,6: el peix avança a salts.|Todo en un bucle con espera de 0,6: el pez avanza a saltos.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 110, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:30 next wait:0.6 bounce } }', time: 6 },
        nota: "Compara-ho amb la diapositiva 7: amb dos guions, el peix neda llis.|Compáralo con la diapositiva 7: con dos guiones, el pez nada suave." },
      { id: 's10', k: 'activitat', t: "L'aquari humà|El acuario humano", timer: 12, punts: ["Cadascú té la carta del seu animal.|Cada uno tiene la carta de su animal.", "Cartolina verda: tothom comença alhora.|Cartulina verde: todos empiezan a la vez.", "Cartolina vermella: tothom s'atura.|Cartulina roja: todos se paran.", "Ronda 3: qui s'atreveix amb dos guions?|Ronda 3: ¿quién se atreve con dos guiones?"],
        nota: "Vigila que es moguin a poc a poc i dins dels límits de l'aquari. Rebotar vol dir donar la volta abans de la paret.|Vigila que se muevan despacio y dentro de los límites del acuario. Rebotar quiere decir dar la vuelta antes de la pared." },
      { id: 's11', k: 'activitat', t: 'Els guions dels animals|Los guiones de los animales', punts: ["Peix: per sempre, 3 passos i, a la paret, rebota.|Pez: por siempre, 3 pasos y, en la pared, rebota.", "Cranc: per sempre, un pas de costat.|Cangrejo: por siempre, un paso de lado.", "Medusa: per sempre, ajup-te i aixeca't.|Medusa: por siempre, agáchate y levántate.", "Tortuga: per sempre, un pas molt lent.|Tortuga: por siempre, un paso muy lento."],
        nota: "Deixa-la projectada perquè tothom recordi el guió del seu animal.|Déjala proyectada para que todos recuerden el guion de su animal." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Molts personatges alhora».|Abre la sesión «Muchos personajes a la vez».", "Al tanc, toca cada animal a dalt per veure'n els guions.|En el tanque, toca cada animal arriba para ver sus guiones.", "A «Investiga», compara els dos guions del peix.|En «Investiga», compara los dos guiones del pez.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«L'orquestra de casa» és per fer a casa.|«La orquesta de casa» es para hacer en casa." },
      { id: 's13', k: 'media', t: 'Programem junts: el peix de dos guions|Programemos juntos: el pez de dos guiones', x: 'Guió 1: per sempre { mou-te 4, rebota }. Guió 2: per sempre { vestit següent, espera 0,3 }.|Guion 1: por siempre { muévete 4, rebota }. Guion 2: por siempre { disfraz siguiente, espera 0,3 }.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 40, size: 110, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:4 bounce } } flag{ forever{ next wait:0.3 } }', time: 8 },
        nota: "Ensenya al projector on es toca per afegir blocs al segon guió.|Enseña en el proyector dónde se toca para añadir bloques al segundo guion." },
      { id: 's14', k: 'repte', t: 'Reptes: tots alhora|Retos: todos a la vez', timer: 10, punts: ["1. El peix i el cranc alhora|1. El pez y el cangrejo a la vez", "2. La medusa de dos guions|2. La medusa de dos guiones", "3. La cursa de l'aquari|3. La carrera del acuario", "4. El peix petit que no es mou: troba l'error|4. El pez pequeño que no se mueve: encuentra el error"],
        nota: "Al repte 4, que comparin el guió del peix petit amb el del gran bloc a bloc.|En el reto 4, que comparen el guion del pez pequeño con el del grande bloque a bloque." },
      { id: 's15', k: 'activitat', t: 'Crea: el fons marí|Crea: el fondo marino', timer: 5, x: 'El peix, el cranc i la medusa, cadascun al seu ritme.|El pez, el cangrejo y la medusa, cada uno a su ritmo.',
        nota: "L'app demana que el peix i el cranc es moguin, que ningú surti i que algú canviï de vestit.|La app pide que el pez y el cangrejo se muevan, que nadie salga y que alguien cambie de disfraz." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Cada personatge té els seus guions.|Cada personaje tiene sus guiones.", "Tots els guions «quan comença» arrenquen alhora.|Todos los guiones «al empezar» arrancan a la vez.", "Dos guions = dues coses alhora, a ritmes diferents.|Dos guiones = dos cosas a la vez, a ritmos diferentes."],
        nota: "Torna a la pregunta de l'orquestra: ara saben qui és el director/a (la bandera verda).|Vuelve a la pregunta de la orquesta: ahora saben quién es el director/a (la bandera verde)." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["En quin ordre comencen els guions?|¿En qué orden empiezan los guiones?", "Com faries un peix que neda llis i mou la cua a poc a poc?|¿Cómo harías un pez que nada suave y mueve la cola despacio?"],
        nota: "La setmana vinent és el projecte: recorda'ls que pensin quins animals voldran posar al seu aquari.|La semana que viene es el proyecto: recuérdales que piensen qué animales querrán poner en su acuario." }
    ],
    print: [
      { id: 'p1', t: "Cartes de l'aquari humà|Cartas del acuario humano", k: 'targetes',
        intro: "Un paquet per grup de 5. Cada alumne/a agafa una carta d'animal; les cartes de ronda són per al professor/a.|Un paquete por grupo de 5. Cada alumno/a coge una carta de animal; las cartas de ronda son para el profesor/a.",
        items: [
          { t: 'Peix: per sempre, 3 passos i rebota 🐟|Pez: por siempre, 3 pasos y rebota 🐟', n: 1 },
          { t: 'Cranc: per sempre, un pas de costat 🦀|Cangrejo: por siempre, un paso de lado 🦀', n: 1 },
          { t: "Medusa: per sempre, ajup-te i aixeca't 🎐|Medusa: por siempre, agáchate y levántate 🎐", n: 1 },
          { t: "Alga: per sempre, braços d'un costat a l'altre 🌿|Alga: por siempre, brazos de un lado al otro 🌿", n: 1 },
          { t: 'Tortuga: per sempre, un pas molt lent 🐢|Tortuga: por siempre, un paso muy lento 🐢', n: 1 },
          { t: 'Dos guions: camina i aplaudeix a poc a poc 👏|Dos guiones: camina y aplaude despacio 👏', n: 2 },
          { t: 'Més ràpid: passos més llargs ⏩|Más rápido: pasos más largos ⏩', n: 1 },
          { t: 'Més lent: espera més llarga ⏪|Más lento: espera más larga ⏪', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: qui va més de pressa?|Ficha: ¿quién va más deprisa?', k: 'fitxa',
        intro: "Llegeix els guions i respon. Pots comprovar-ho després a l'app.|Lee los guiones y responde. Puedes comprobarlo después en la app.",
        items: [
          { q: "Peix: per sempre { mou-te 6 }. Cranc: per sempre { mou-te 2 }. Qui va més de pressa?|Pez: por siempre { muévete 6 }. Cangrejo: por siempre { muévete 2 }. ¿Quién va más deprisa?", sol: "El peix: fa passos de 6 i el cranc, de 2.|El pez: da pasos de 6 y el cangrejo, de 2." },
          { q: "Medusa A: per sempre { vestit següent, espera 0,2 }. Medusa B: per sempre { vestit següent, espera 1 }. Quina mou més de pressa els tentacles?|Medusa A: por siempre { disfraz siguiente, espera 0,2 }. Medusa B: por siempre { disfraz siguiente, espera 1 }. ¿Cuál mueve más deprisa los tentáculos?", sol: "La medusa A: com més curta l'espera, més ràpid el canvi.|La medusa A: cuanto más corta la espera, más rápido el cambio." },
          { q: "Hi ha 4 personatges amb un guió «quan comença» cadascun. Quin comença primer?|Hay 4 personajes con un guion «al empezar» cada uno. ¿Cuál empieza primero?", sol: "Cap: comencen tots alhora quan toques la bandera verda.|Ninguno: empiezan todos a la vez cuando tocas la bandera verde." },
          { q: "Escriu els dos guions d'un peix que neda llis i mou la cua cada mig segon.|Escribe los dos guiones de un pez que nada suave y mueve la cola cada medio segundo.", sol: "Guió 1: per sempre { mou-te 4, rebota }. Guió 2: per sempre { vestit següent, espera 0,5 }.|Guion 1: por siempre { muévete 4, rebota }. Guion 2: por siempre { disfraz siguiente, espera 0,5 }." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: l'aquari ---------- */
  'g2-4': {
    obj: [
      "L'alumne/a planifica en paper una escena animada amb diversos personatges abans de programar-la.|El alumno/a planifica en papel una escena animada con varios personajes antes de programarla.",
      "L'alumne/a construeix el projecte a trossos, personatge a personatge, i prova cada tros.|El alumno/a construye el proyecto a trozos, personaje a personaje, y prueba cada trozo.",
      "L'alumne/a combina vestits, esperes, bucles, rebots i diversos guions en un sol projecte.|El alumno/a combina disfraces, esperas, bucles, rebotes y varios guiones en un solo proyecto.",
      "L'alumne/a presenta el seu aquari i dona i rep comentaris amables i útils.|El alumno/a presenta su acuario y da y recibe comentarios amables y útiles."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i crear un projecte digital propi|Competencia digital (CD5): diseñar y crear un proyecto digital propio",
      "Pensament computacional: descomposició, planificació i depuració d'un projecte|Pensamiento computacional: descomposición, planificación y depuración de un proyecto",
      "Comunicació oral: presentar el projecte i fer comentaris constructius|Comunicación oral: presentar el proyecto y hacer comentarios constructivos",
      "Ciències de la natura: els animals marins i com es mouen|Ciencias de la naturaleza: los animales marinos y cómo se mueven"
    ],
    vocab: [
      ["Projecte|Proyecto", "Una creació gran que es fa en diversos passos: idea, pla, construcció i proves.|Una creación grande que se hace en varios pasos: idea, plan, construcción y pruebas."],
      ["Pla|Plan", "El dibuix o la llista que diu què farà cada part abans de programar-la.|El dibujo o la lista que dice qué hará cada parte antes de programarla."],
      ["Tros|Trozo", "Una part petita del projecte que es pot programar i provar sola.|Una parte pequeña del proyecto que se puede programar y probar sola."],
      ["Provar|Probar", "Fer funcionar el programa per veure si fa el que volem.|Hacer funcionar el programa para ver si hace lo que queremos."],
      ["Millorar|Mejorar", "Canviar el programa després de provar-lo perquè funcioni millor.|Cambiar el programa después de probarlo para que funcione mejor."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: l'aquari»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el acuario»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors per al pla|Lápices y colores para el plan",
        "Opcional: una pantalla gran o el projector per mostrar alguns aquaris al final|Opcional: una pantalla grande o el proyector para mostrar algunos acuarios al final"
      ],
      imprimir: ["Fitxa: el pla del meu aquari|Ficha: el plan de mi acuario", "Targetes de comentaris per a la galeria|Tarjetas de comentarios para la galería"],
      prep: [
        "Imprimir una fitxa del pla per alumne/a i un paquet de targetes de comentaris per parella.|Imprimir una ficha del plan por alumno/a y un paquete de tarjetas de comentarios por pareja.",
        "Provar l'aquari de mostra de la diapositiva 6 per poder-ne explicar cada tros.|Probar el acuario de muestra de la diapositiva 6 para poder explicar cada trozo.",
        "Preparar l'ordre de la galeria final: parelles que es miren el projecte o 3-4 aquaris al projector.|Preparar el orden de la galería final: parejas que se miran el proyecto o 3-4 acuarios en el proyector.",
        "Revisar al portafoli les creacions de les sessions anteriors per recordar què ha après cadascú.|Revisar en el portafolio las creaciones de las sesiones anteriores para recordar qué ha aprendido cada uno."
      ]
    },
    plan: [
      { min: 5, t: "La gran inauguració|La gran inauguración", fase: 'inici',
        fa: "Explica que avui cadascú farà el seu aquari per a la pantalla de la Marina. Repassa amb les preguntes de «Recorda» els tres grans aprenentatges de la unitat: vestits, bucles i molts personatges alhora.|Explica que hoy cada uno hará su acuario para la pantalla de Marina. Repasa con las preguntas de «Recuerda» los tres grandes aprendizajes de la unidad: disfraces, bucles y muchos personajes a la vez.",
        diu: ["Quines eines tenim ja per fer un aquari viu?|¿Qué herramientas tenemos ya para hacer un acuario vivo?",
          "Avui sereu els programadors i les programadores de l'aquari.|Hoy seréis los programadores y las programadoras del acuario."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 5, t: "Com es fa un projecte|Cómo se hace un proyecto", fase: 'teoria',
        fa: "Presenta els cinc passos del projecte i l'aquari de mostra, tros a tros. Acaba amb «Compte!»: provar cada tros abans de passar al següent.|Presenta los cinco pasos del proyecto y el acuario de muestra, trozo a trozo. Termina con «¡Cuidado!»: probar cada trozo antes de pasar al siguiente.",
        diu: ["Quin és el primer tros que programaríeu de l'aquari de mostra?|¿Cuál es el primer trozo que programaríais del acuario de muestra?",
          "Per què és millor provar cada animal de seguida?|¿Por qué es mejor probar cada animal enseguida?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla del meu aquari|El plan de mi acuario", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa el tanc, tria com a mínim 3 animals i escriu què farà cadascun (moure's, canviar de vestit, parlar, per sempre o unes quantes vegades) i l'ordre en què els programarà. Als darrers 3 minuts, en parelles, s'expliquen el pla i el company/a fa una pregunta.|Cada alumno/a rellena la ficha del plan: dibuja el tanque, elige como mínimo 3 animales y escribe qué hará cada uno (moverse, cambiar de disfraz, hablar, por siempre o unas cuantas veces) y el orden en que los programará. En los últimos 3 minutos, por parejas, se explican el plan y el compañero/a hace una pregunta.",
        diu: ["Què farà cada animal? Escriu-ho al costat del dibuix.|¿Qué hará cada animal? Escríbelo al lado del dibujo.",
          "Quin animal programaràs primer? Per què?|¿Qué animal programarás primero? ¿Por qué?",
          "Fes una pregunta al pla del teu company/a.|Haz una pregunta al plan de tu compañero/a."],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla (el pas «El pla del meu aquari» de l'app ja està fet).|Ninguna: actividad sin pantalla (el paso «El plan de mi acuario» de la app ya está hecho).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: els trossos|En el ordenador: los trozos", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i fa de «Recorda» fins als tres reptes dels trossos (l'alga, el peix de dos guions i el cranc que saluda). Aquests reptes són l'entrenament del projecte: si algú va molt de pressa, que passi directament al seu aquari.|Cada alumno/a abre la sesión y hace de «Recuerda» hasta los tres retos de los trozos (el alga, el pez de dos guiones y el cangrejo que saluda). Estos retos son el entrenamiento del proyecto: si alguien va muy deprisa, que pase directamente a su acuario.",
        diu: ["La benvinguda, va abans o a dins del bucle?|La bienvenida, ¿va antes o dentro del bucle?",
          "A «Investiga», quin bucle s'acaba massa aviat?|En «Investiga», ¿qué bucle se acaba demasiado pronto?"],
        slides: ['s10', 's11'], app: "Recorda, històries, «Descobreix», ordenar els passos del projecte, el pla (ja fet), l'aquari de mostra, «Investiga» (la medusa que s'atura), la pausa activa i els tres reptes: l'alga, el peix i el cranc.|Recuerda, historias, «Descubre», ordenar los pasos del proyecto, el plan (ya hecho), el acuario de muestra, «Investiga» (la medusa que se para), la pausa activa y los tres retos: el alga, el pez y el cangrejo.", org: "Individual|Individual" },
      { min: 20, t: "Crea: el meu aquari|Crea: mi acuario", fase: 'crea',
        fa: "Cada alumne/a construeix el seu aquari seguint el pla, animal a animal. Passeja i pregunta en quin tros són i si l'han provat. Quan un animal funcioni, que marquin una creu al pla. Qui acabi pot afegir detalls: un animal que pensa, un ritme diferent per a cada animal…|Cada alumno/a construye su acuario siguiendo el plan, animal a animal. Pasea y pregunta en qué trozo están y si lo han probado. Cuando un animal funcione, que marquen una cruz en el plan. Quien termine puede añadir detalles: un animal que piensa, un ritmo diferente para cada animal…",
        diu: ["En quin tros ets? L'has provat ja?|¿En qué trozo estás? ¿Ya lo has probado?",
          "Marca al pla els animals que ja funcionen.|Marca en el plan los animales que ya funcionan.",
          "Què podries millorar ara que funciona?|¿Qué podrías mejorar ahora que funciona?"],
        slides: ['s12', 's13'], app: "Pas «Crea»: El meu aquari (es desa al portafoli).|Paso «Crea»: Mi acuario (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 10, t: "Galeria i tancament|Galería y cierre", fase: 'tancament',
        fa: "Feu una galeria: en parelles, cadascú ensenya el seu aquari i el company/a li dona dues targetes de comentaris (una cosa que li agrada i una idea). Si hi ha temps, mostra 3 o 4 aquaris al projector. Acaba amb el resum, les preguntes finals de l'app i el tiquet.|Haced una galería: por parejas, cada uno enseña su acuario y el compañero/a le da dos tarjetas de comentarios (una cosa que le gusta y una idea). Si hay tiempo, muestra 3 o 4 acuarios en el proyector. Termina con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Digues una cosa que t'agradi de l'aquari del teu company/a.|Di una cosa que te guste del acuario de tu compañero/a.",
          "Quina idea li donaries per millorar-lo?|¿Qué idea le darías para mejorarlo?",
          "Què ha estat el més difícil del projecte? Com ho has resolt?|¿Qué ha sido lo más difícil del proyecto? ¿Cómo lo has resuelto?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Per parelles i després tot el grup|Por parejas y después todo el grupo" }
    ],
    errors: [
      ["Vol programar-ho tot de cop i, quan falla, no sap on és l'error.|Quiere programarlo todo de golpe y, cuando falla, no sabe dónde está el error.",
        "Torna al pla: quin animal funciona ja? Que provi els animals d'un en un, tocant només un personatge cada vegada.|Vuelve al plan: ¿qué animal funciona ya? Que pruebe los animales de uno en uno, tocando solo un personaje cada vez."],
      ["Fa un pla massa gran (deu animals) i no l'acaba.|Hace un plan demasiado grande (diez animales) y no lo acaba.",
        "Que triï els 3 animals més importants i deixi la resta per a «si em sobra temps». Un projecte acabat és millor que un de gegant a mitges.|Que elija los 3 animales más importantes y deje el resto para «si me sobra tiempo». Un proyecto acabado es mejor que uno gigante a medias."],
      ["Posa la benvinguda a dins del «per sempre» i el cranc no para de parlar (o no camina).|Pone la bienvenida dentro del «por siempre» y el cangrejo no para de hablar (o no camina).",
        "Pregunta quantes vegades ha de dir la benvinguda. Si és una sola, on ha d'anar: abans o a dins del bucle?|Pregunta cuántas veces tiene que decir la bienvenida. Si es una sola, ¿dónde tiene que ir: antes o dentro del bucle?"],
      ["Fa servir «repeteix» amb pocs números i l'aquari s'atura al cap d'una estona.|Usa «repite» con números pequeños y el acuario se para al cabo de un rato.",
        "Recorda-li l'encàrrec: la pantalla està encesa tot el dia. Quin bucle no s'acaba?|Recuérdale el encargo: la pantalla está encendida todo el día. ¿Qué bucle no se acaba?"],
      ["Els comentaris de la galeria són «està bé» o «és lleig».|Los comentarios de la galería son «está bien» o «es feo».",
        "Fes servir les targetes de comentaris: «M'agrada… perquè…» i «Podries provar…». Modela'n un tu primer.|Usa las tarjetas de comentarios: «Me gusta… porque…» y «Podrías probar…». Modela uno tú primero."]
    ],
    diff: {
      mes: "Afegir a l'aquari un animal amb dos guions i ritmes molt diferents, o fer que en Vuit pensi coses amb «pensa» mentre neda. Després, escriure al pla quins canvis han fet respecte del pla inicial.|Añadir al acuario un animal con dos guiones y ritmos muy diferentes, o hacer que Vuit piense cosas con «piensa» mientras nada. Después, escribir en el plan qué cambios han hecho respecto al plan inicial.",
      menys: "Fer un pla de només 3 animals i començar pels que s'assemblen als reptes de l'app (l'alga, el peix, el cranc). Tenir al costat el resum de blocs de la diapositiva 13 per copiar-lo.|Hacer un plan de solo 3 animales y empezar por los que se parecen a los retos de la app (el alga, el pez, el cangrejo). Tener al lado el resumen de bloques de la diapositiva 13 para copiarlo."
    },
    aval: {
      ticket: ["Explica com has construït el teu aquari: quin animal vas fer primer i per què.|Explica cómo has construido tu acuario: qué animal hiciste primero y por qué.",
        "Digues un error que has trobat i com l'has arreglat.|Di un error que has encontrado y cómo lo has arreglado."],
      rubric: [
        ["Pla i construcció a trossos|Plan y construcción a trozos", "Fa un pla clar i el segueix, programant i provant un animal darrere l'altre.|Hace un plan claro y lo sigue, programando y probando un animal tras otro.", "Fa el pla, però programa sense provar fins al final.|Hace el plan, pero programa sin probar hasta el final."],
        ["Blocs de la unitat|Bloques de la unidad", "Combina vestits, esperes, «per sempre», «rebota» i diversos guions sense ajuda.|Combina disfraces, esperas, «por siempre», «rebota» y varios guiones sin ayuda.", "Fa servir alguns dels blocs, però necessita ajuda per combinar-los.|Usa algunos de los bloques, pero necesita ayuda para combinarlos."],
        ["Presentació i comentaris|Presentación y comentarios", "Explica el seu aquari i fa comentaris amables i concrets al company/a.|Explica su acuario y hace comentarios amables y concretos al compañero/a.", "Ensenya l'aquari, però li costa explicar-lo o fer comentaris concrets.|Enseña el acuario, pero le cuesta explicarlo o hacer comentarios concretos."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu obrir el portafoli i ensenyar l'aquari a la família. Expliqueu-los com heu fet moure cada animal i demaneu-los una idea per millorar-lo.|En casa, con el móvil, podéis abrir el portafolio y enseñar el acuario a la familia. Explicadles cómo habéis hecho mover a cada animal y pedidles una idea para mejorarlo.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: l'aquari|Proyecto: el acuario", x: "Dissabte s'inaugura l'aquari del moll i la pantalla gegant necessita el teu aquari animat.|El sábado se inaugura el acuario del muelle y la pantalla gigante necesita tu acuario animado.",
        nota: "Explica que avui no hi ha un sol camí bo: cada aquari serà diferent.|Explica que hoy no hay un solo camino bueno: cada acuario será diferente." },
      { id: 's2', k: 'repas', t: 'Les eines de la unitat|Las herramientas de la unidad', punts: ["Vestits i esperes: dibuixos que es mouen.|Disfraces y esperas: dibujos que se mueven.", "Bucles: «repeteix» i «per sempre».|Bucles: «repite» y «por siempre».", "«Rebota» i molts personatges alhora.|«Rebota» y muchos personajes a la vez."],
        nota: "Demana un exemple de cada eina fet a les sessions anteriors.|Pide un ejemplo de cada herramienta hecho en las sesiones anteriores." },
      { id: 's3', k: 'pregunta', t: 'Com serà el teu aquari?|¿Cómo será tu acuario?', x: 'Quins animals hi posaràs? Què farà cadascun?|¿Qué animales pondrás? ¿Qué hará cada uno?',
        nota: "Recull idees en veu alta. No cal decidir-ho ara: ho faran al pla.|Recoge ideas en voz alta. No hace falta decidirlo ahora: lo harán en el plan." },
      { id: 's4', k: 'anim', t: 'Com es fa un projecte|Cómo se hace un proyecto', anim: 'g2plan', x: 'Idea, pla, construir a trossos, provar i millorar.|Idea, plan, construir a trozos, probar y mejorar.',
        nota: "Fes notar la fletxa entre «Prova-ho» i «Millora-ho»: es fa moltes vegades.|Haz notar la flecha entre «Pruébalo» y «Mejóralo»: se hace muchas veces." },
      { id: 's5', k: 'concepte', t: 'Construir a trossos|Construir a trozos', punts: ["Un tros = un animal.|Un trozo = un animal.", "Programa'l i prova'l amb la bandera.|Prográmalo y pruébalo con la bandera.", "Quan funciona, passa al següent.|Cuando funciona, pasa al siguiente."],
        nota: "Compara-ho amb construir una casa: primer els fonaments, després les parets.|Compáralo con construir una casa: primero los cimientos, después las paredes." },
      { id: 's6', k: 'media', t: "L'aquari de mostra|El acuario de muestra", x: "L'alga, el peix (dos guions), la medusa i el cranc que saluda.|El alga, el pez (dos guiones), la medusa y el cangrejo que saluda.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'alga', art: 'alga', x: -170, y: -110, size: 120, rot: 'none' }, { id: 'peix', art: 'peix', x: -60, y: 70, rot: 'lr' }, { id: 'medusa', art: 'medusa', x: 130, y: 40, rot: 'none', dir: 0 }, { id: 'cranc', art: 'cranc', x: 40, y: -135, size: 80, rot: 'lr' }] },
          prog: '@alga flag{ forever{ next wait:0.6 } } @peix flag{ forever{ move:4 bounce } } flag{ forever{ next wait:0.3 } } @medusa flag{ forever{ move:1 bounce } } flag{ forever{ next wait:0.5 } } @cranc flag{ say:"Benvinguts!|¡Bienvenidos!",2 forever{ move:2 next wait:0.2 bounce } }', time: 10 },
        nota: "Per a cada animal, demana quins blocs creuen que té. Llegiu-los a sota de la demo per comprovar-ho.|Para cada animal, pide qué bloques creen que tiene. Leedlos debajo de la demo para comprobarlo." },
      { id: 's7', k: 'media', t: 'Compte! Prova cada tros|¡Cuidado! Prueba cada trozo', x: "Al peix de dalt li falta «rebota» i se'n va.|Al pez de arriba le falta «rebota» y se va.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -150, y: 40, rot: 'lr' }, { id: 'peix2', art: 'peix', x: -150, y: -60, rot: 'lr', name: 'Peix 2|Pez 2' }] }, prog: '@peix flag{ forever{ move:5 } } @peix2 flag{ forever{ move:5 bounce } }', time: 5 },
        nota: "Si s'hagués programat tot de cop, aquest error es trobaria molt més tard. Provar sovint estalvia temps.|Si se hubiera programado todo de golpe, este error se encontraría mucho más tarde. Probar a menudo ahorra tiempo." },
      { id: 's8', k: 'activitat', t: 'El pla del meu aquari|El plan de mi acuario', timer: 10, punts: ["Dibuixa el tanc i com a mínim 3 animals.|Dibuja el tanque y como mínimo 3 animales.", "Escriu què farà cada animal.|Escribe qué hará cada animal.", "Marca: per sempre? Vestits? Parla?|Marca: ¿por siempre? ¿Disfraces? ¿Habla?", "Numera l'ordre en què els programaràs.|Numera el orden en que los programarás."],
        nota: "Recorda que el dibuix no ha de ser perfecte: el que importa és què farà cada animal.|Recuerda que el dibujo no tiene que ser perfecto: lo que importa es qué hará cada animal." },
      { id: 's9', k: 'activitat', t: "Explica el pla al company/a|Explica el plan al compañero/a", punts: ["Explica què farà cada animal.|Explica qué hará cada animal.", "El company/a fa una pregunta.|El compañero/a hace una pregunta.", "Si cal, millora el pla.|Si hace falta, mejora el plan."],
        nota: "Dona 3 minuts per parella. Les preguntes ajuden a detectar animals sense bucle o sense rebot.|Da 3 minutos por pareja. Las preguntas ayudan a detectar animales sin bucle o sin rebote." },
      { id: 's10', k: 'activitat', t: "A l'ordinador: els trossos|En el ordenador: los trozos", timer: 10, punts: ["Obre la sessió «Projecte: l'aquari».|Abre la sesión «Proyecto: el acuario».", "Fes els tres reptes: l'alga, el peix i el cranc.|Haz los tres retos: el alga, el pez y el cangrejo.", "Són l'entrenament del teu aquari.|Son el entrenamiento de tu acuario."],
        nota: "Al pas del pla de l'app, que toquin «Ho hem fet!»: el pla ja és a la fitxa.|En el paso del plan de la app, que toquen «¡Lo hemos hecho!»: el plan ya está en la ficha." },
      { id: 's11', k: 'repte', t: 'Els tres trossos|Los tres trozos', punts: ["1. L'alga es gronxa per sempre|1. El alga se balancea por siempre", "2. El peix de dos guions|2. El pez de dos guiones", "3. El cranc saluda i camina|3. El cangrejo saluda y camina"],
        nota: "Al tros 3, pregunta si la benvinguda va abans o a dins del bucle.|En el trozo 3, pregunta si la bienvenida va antes o dentro del bucle." },
      { id: 's12', k: 'activitat', t: 'Crea: el meu aquari|Crea: mi acuario', timer: 20, punts: ["Segueix el teu pla, animal a animal.|Sigue tu plan, animal a animal.", "Prova cada animal amb la bandera.|Prueba cada animal con la bandera.", "Marca al pla els que ja funcionen.|Marca en el plan los que ya funcionan.", "Quan acabis, millora'l!|Cuando termines, ¡mejóralo!"],
        nota: "L'app demana com a mínim 3 animals programats, un «per sempre», algun canvi de vestit, una benvinguda i que el peix no surti.|La app pide como mínimo 3 animales programados, un «por siempre», algún cambio de disfraz, una bienvenida y que el pez no salga." },
      { id: 's13', k: 'concepte', t: 'Els blocs que ja coneixes|Los bloques que ya conoces', punts: ["Animar: per sempre { vestit següent, espera }.|Animar: por siempre { disfraz siguiente, espera }.", "Nedar: per sempre { mou-te, rebota }.|Nadar: por siempre { muévete, rebota }.", "Saludar: digues, abans del bucle.|Saludar: di, antes del bucle.", "Dues coses alhora: dos guions.|Dos cosas a la vez: dos guiones."],
        nota: "Deixa-la projectada durant el «Crea» com a xuleta per a qui la necessiti.|Déjala proyectada durante el «Crea» como chuleta para quien la necesite." },
      { id: 's14', k: 'activitat', t: "La galeria de l'aquari|La galería del acuario", punts: ["Ensenya el teu aquari al company/a.|Enseña tu acuario al compañero/a.", "Rep una targeta «M'agrada…».|Recibe una tarjeta «Me gusta…».", "Rep una targeta «Podries provar…».|Recibe una tarjeta «Podrías probar…»."],
        nota: "Modela tu un comentari amable i concret abans de començar.|Modela tú un comentario amable y concreto antes de empezar." },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ["Animar amb vestits i esperes.|Animar con disfraces y esperas.", "Repetir amb «repeteix» i «per sempre».|Repetir con «repite» y «por siempre».", "Molts personatges i guions alhora.|Muchos personajes y guiones a la vez.", "Fer un projecte a trossos i provar-lo.|Hacer un proyecto a trozos y probarlo."],
        nota: "Felicita la classe: ja tenen un aquari animat cadascú. A la unitat 3, els personatges respondran quan els toquem.|Felicita a la clase: ya tienen un acuario animado cada uno. En la unidad 3, los personajes responderán cuando los toquemos." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Com has construït el teu aquari?|¿Cómo has construido tu acuario?", "Quin error has trobat i com l'has arreglat?|¿Qué error has encontrado y cómo lo has arreglado?"],
        nota: "Guarda les fitxes del pla: són una bona evidència del procés per a l'avaluació.|Guarda las fichas del plan: son una buena evidencia del proceso para la evaluación." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa: el pla del meu aquari|Ficha: el plan de mi acuario', k: 'fitxa',
        intro: "Omple el pla abans de programar. Al dors, dibuixa el tanc amb els animals.|Rellena el plan antes de programar. En el dorso, dibuja el tanque con los animales.",
        items: [
          { q: "Quins animals hi haurà al teu aquari? (com a mínim 3)|¿Qué animales habrá en tu acuario? (como mínimo 3)", sol: "Resposta oberta. Comproveu que n'hi hagi com a mínim 3.|Respuesta abierta. Comprobad que haya como mínimo 3." },
          { q: "Què farà cada animal? (nedar, caminar, gronxar-se, parlar…)|¿Qué hará cada animal? (nadar, caminar, balancearse, hablar…)", sol: "Resposta oberta. Cada animal hauria de tenir almenys una acció clara.|Respuesta abierta. Cada animal debería tener al menos una acción clara." },
          { q: "Quins animals faran servir «per sempre»? Quins canviaran de vestit?|¿Qué animales usarán «por siempre»? ¿Cuáles cambiarán de disfraz?", sol: "Com a mínim un «per sempre» i un animal que canviï de vestit.|Como mínimo un «por siempre» y un animal que cambie de disfraz." },
          { q: "Quin animal dirà la benvinguda? Què dirà?|¿Qué animal dirá la bienvenida? ¿Qué dirá?", sol: "Resposta oberta. La benvinguda va abans del bucle.|Respuesta abierta. La bienvenida va antes del bucle." },
          { q: "En quin ordre programaràs els animals? Numera'ls. Marca'ls amb una creu quan funcionin.|¿En qué orden programarás los animales? Numéralos. Márcalos con una cruz cuando funcionen.", sol: "Recomanació: començar pel més senzill (l'alga).|Recomendación: empezar por el más sencillo (el alga)." }
        ] },
      { id: 'p2', t: 'Targetes de comentaris per a la galeria|Tarjetas de comentarios para la galería', k: 'targetes',
        intro: "Un paquet per parella. Cada alumne/a dona dues targetes al company/a i les completa en veu alta.|Un paquete por pareja. Cada alumno/a da dos tarjetas al compañero/a y las completa en voz alta.",
        items: [
          { t: "M'agrada… perquè… ⭐|Me gusta… porque… ⭐", n: 4 },
          { t: 'Podries provar… 💡|Podrías probar… 💡', n: 4 },
          { t: 'Com has fet que…? ❓|¿Cómo has hecho que…? ❓', n: 2 },
          { t: 'El meu animal preferit és… 🐠|Mi animal preferido es… 🐠', n: 2 }
        ] }
    ]
  }
});
