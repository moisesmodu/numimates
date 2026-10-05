/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 2 «Animació» (g2-1 … g2-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Les diapositives «media» mostren l'escenari de Creadors en marxa (TMEDIA.stage: { k: 'stage', w, prog, time }). */
Object.assign(TGUIDE, {

  /* ---------- Sessió 1 · Dibuixos que es mouen ---------- */
  'g2-1': {
    intro: "Primera sessió de la unitat d'animació: l'alumnat descobreix que un dibuix animat són molts dibuixos que canvien de pressa. A l'escenari, cada personatge té diversos vestits (dibuixos) i es canvien amb «vestit següent» o «posa el vestit». La clau és l'«espera»: sense espera, l'ordinador canvia els dibuixos tan de pressa que no es veu res. La classe comença amb un llibret animat de paper, segueix amb l'animació humana en grups de 4 i acaba a l'ordinador amb quatre reptes i la primera animació d'en Numi.|Primera sesión de la unidad de animación: el alumnado descubre que un dibujo animado son muchos dibujos que cambian deprisa. En el escenario, cada personaje tiene varios disfraces (dibujos) y se cambian con «disfraz siguiente» o «pon el disfraz». La clave es la «espera»: sin espera, el ordenador cambia los dibujos tan deprisa que no se ve nada. La clase empieza con una libreta animada de papel, sigue con la animación humana en grupos de 4 y termina en el ordenador con cuatro retos y la primera animación de Numi.",
    claus: [
      "Una animació són molts dibuixos gairebé iguals que es mostren un darrere l'altre molt de pressa.|Una animación son muchos dibujos casi iguales que se muestran uno tras otro muy deprisa.",
      "Cada personatge té vestits numerats; «vestit següent» passa al següent i, després de l'últim, torna al primer.|Cada personaje tiene disfraces numerados; «disfraz siguiente» pasa al siguiente y, después del último, vuelve al primero.",
      "«Posa el vestit» tria un vestit concret pel seu número; si ja el porta, no canvia res.|«Pon el disfraz» elige un disfraz concreto por su número; si ya lo lleva, no cambia nada.",
      "L'«espera» dona temps de veure cada dibuix: com més curta, més ràpida és l'animació.|La «espera» da tiempo de ver cada dibujo: cuanto más corta, más rápida es la animación."
    ],
    prev: [
      "Fer un guió «Quan comença» i tocar la bandera verda (unitat 1).|Hacer un guion «Al empezar» y tocar la bandera verde (unidad 1).",
      "Fer servir «digues» amb segons perquè una frase es llegeixi (unitat 1, sessió 2).|Usar «di» con segundos para que una frase se lea (unidad 1, sesión 2).",
      "Llegir nombres decimals senzills com 0,5 (mig segon) (matemàtiques).|Leer números decimales sencillos como 0,5 (medio segundo) (matemáticas)."
    ],
    faq: [
      ["Per què el meu peix no mou la cua si he posat «vestit següent»?|¿Por qué mi pez no mueve la cola si he puesto «disfraz siguiente»?",
        "Segurament no hi ha espera: els canvis són tan ràpids que no els veus. Posa «espera 0,5 segons» entre canvi i canvi.|Seguramente no hay espera: los cambios son tan rápidos que no los ves. Pon «espera 0,5 segundos» entre cambio y cambio."],
      ["Quants vestits té cada personatge?|¿Cuántos disfraces tiene cada personaje?",
        "Depèn: el peix, el gat o la papallona en tenen 2; en Numi i la mascota, 4. Si poses un número més gran que el que té, es queda amb l'últim.|Depende: el pez, el gato o la mariposa tienen 2; Numi y la mascota, 4. Si pones un número mayor del que tiene, se queda con el último."],
      ["Quina diferència hi ha entre «vestit següent» i «posa el vestit»?|¿Qué diferencia hay entre «disfraz siguiente» y «pon el disfraz»?",
        "«Vestit següent» passa al que ve després, porti el que porti; «posa el vestit 3» posa sempre el 3.|«Disfraz siguiente» pasa al que viene después, lleve el que lleve; «pon el disfraz 3» pone siempre el 3."],
      ["Puc posar una espera de 0,1 segons?|¿Puedo poner una espera de 0,1 segundos?",
        "Sí: l'animació anirà molt ràpida. Prova diferents números i tria el que t'agradi més.|Sí: la animación irá muy rápida. Prueba diferentes números y elige el que más te guste."],
      ["Com es fan els dibuixos animats de veritat?|¿Cómo se hacen los dibujos animados de verdad?",
        "Amb la mateixa idea: moltíssims dibuixos o imatges que canvien de pressa. Al cinema en passen 24 cada segon.|Con la misma idea: muchísimos dibujos o imágenes que cambian deprisa. En el cine pasan 24 cada segundo."],
      ["Per què el cotxe necessita tants blocs?|¿Por qué el coche necesita tantos bloques?",
        "Perquè repetim el mateix tros moltes vegades. La setmana vinent aprendrem un bloc que repeteix per nosaltres: el bucle.|Porque repetimos el mismo trozo muchas veces. La semana que viene aprenderemos un bloque que repite por nosotros: el bucle."]
    ],
    tec: [
      ["L'animació s'acaba abans que es vegi tot.|La animación se acaba antes de que se vea todo.",
        "La prova dura uns segons: si hi ha esperes molt llargues (3 o 5 segons), que les escurci a 0,5.|La prueba dura unos segundos: si hay esperas muy largas (3 o 5 segundos), que las acorte a 0,5."],
      ["No es pot escriure 0,5 a l'espera.|No se puede escribir 0,5 en la espera.",
        "Si amb la coma no s'accepta, que l'escrigui amb punt (0.5 o .5) i toqui OK: l'app el mostrarà com a 0,5.|Si con la coma no se acepta, que lo escriba con punto (0.5 o .5) y toque OK: la app lo mostrará como 0,5."],
      ["El personatge canvia de vestit però no es mou de lloc.|El personaje cambia de disfraz pero no se mueve de sitio.",
        "És correcte: canviar de vestit no el mou. Per avançar, cal un «mou-te» (com al repte del cotxe).|Es correcto: cambiar de disfraz no lo mueve. Para avanzar, hace falta un «muévete» (como en el reto del coche)."],
      ["El llibret animat no funciona: les pàgines s'enganxen.|La libreta animada no funciona: las páginas se pegan.",
        "Feu servir paper més gruixut o enganxeu els papers només per dalt; dibuixeu prop de la vora per on es passen.|Usad papel más grueso o pegad los papeles solo por arriba; dibujad cerca del borde por donde se pasan."],
      ["La demo de la presentació va massa ràpida per explicar-la.|La demo de la presentación va demasiado rápida para explicarla.",
        "Les demos es repeteixen soles: deixa-la passar dues vegades i fes la pregunta abans de la segona.|Las demos se repiten solas: déjala pasar dos veces y haz la pregunta antes de la segunda."]
    ],
    seg: [
      "A l'animació humana, les poses es fan al lloc i sense saltar; deixeu espai entre grups.|En la animación humana, las poses se hacen en el sitio y sin saltar; dejad espacio entre grupos.",
      "Animacions amb canvis molt ràpids i parpelleigs poden molestar algunes persones: si algú es mareja o li fan mal els ulls, que posi esperes més llargues i descansi la vista.|Las animaciones con cambios muy rápidos y parpadeos pueden molestar a algunas personas: si alguien se marea o le duelen los ojos, que ponga esperas más largas y descanse la vista."
    ],
    extra: [
      "Fer una animació d'en Numi amb els 4 vestits i esperes diferents per explicar una petita història (content, pensant, trist, content).|Hacer una animación de Numi con los 4 disfraces y esperas diferentes para contar una pequeña historia (contento, pensando, triste, contento).",
      "Buscar l'espera més curta amb què encara es veu cada vestit del peix i explicar-ho a la classe.|Buscar la espera más corta con la que todavía se ve cada disfraz del pez y explicarlo a la clase.",
      "Fer un llibret animat de 12 pàgines amb un personatge propi que canvia de cara.|Hacer una libreta animada de 12 páginas con un personaje propio que cambia de cara."
    ],
    trans: [
      "Educació artística: el llibret animat, el cinema d'animació i el moviment a la imatge.|Educación artística: la libreta animada, el cine de animación y el movimiento en la imagen.",
      "Matemàtiques: el temps en segons i els decimals (0,5 és mig segon).|Matemáticas: el tiempo en segundos y los decimales (0,5 es medio segundo).",
      "Sessió següent: els bucles repetiran els vestits i les esperes per nosaltres.|Sesión siguiente: los bucles repetirán los disfraces y las esperas por nosotros."
    ],
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
        "1 llibret animat de 8 pàgines fet pel docent (una pilota que bota) per ensenyar-lo al principi|1 libreta animada de 8 páginas hecha por el docente (una pelota que bota) para enseñarla al principio"
      ],
      imprimir: [
        "1 paquet de 12 cartes de l'animació humana per grup de 4 (imprimible 1)|1 paquete de 12 cartas de la animación humana por grupo de 4 (imprimible 1)",
        "1 fitxa «Vestits i esperes» per a qui acabi abans o per a casa (imprimible 2), unes 6 còpies|1 ficha «Disfraces y esperas» para quien termine antes o para casa (imprimible 2), unas 6 copias"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de cartes per grup de 4; si es plastifiquen, les de vestits serveixen també per al ritme dels fotogrames humans de la sessió 2.|El día antes (15 min): imprimir y recortar un paquete de cartas por grupo de 4; si se plastifican, las de disfraces sirven también para el ritmo de los fotogramas humanos de la sesión 2.",
        "El dia abans (15 min): fer un llibret animat de 8 pàgines (una pilota que bota) per ensenyar-lo a la pregunta inicial.|El día antes (15 min): hacer una libreta animada de 8 páginas (una pelota que bota) para enseñarla en la pregunta inicial.",
        "Provar les demostracions de les diapositives 7, 8 i 13 per saber què es veurà.|Probar las demostraciones de las diapositivas 7, 8 y 13 para saber qué se verá.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: dibuixos quiets|Bienvenida: dibujos quietos", fase: 'inici',
        fa: "Presenta la missió de la unitat: l'aquari del moll necessita una pantalla amb animals que es moguin. Ensenya el llibret animat: primer passa les pàgines a poc a poc i després de pressa. Pregunta què ha canviat i recull respostes sense corregir-les.|Presenta la misión de la unidad: el acuario del muelle necesita una pantalla con animales que se muevan. Enseña la libreta animada: primero pasa las páginas despacio y después deprisa. Pregunta qué ha cambiado y recoge respuestas sin corregirlas.",
        diu: ["Aquests dibuixos estan quiets. Com podem fer que es moguin?|Estos dibujos están quietos. ¿Cómo podemos hacer que se muevan?",
          "Mireu el llibret a poc a poc… i ara de pressa. Què veieu ara?|Mirad la libreta despacio… y ahora deprisa. ¿Qué veis ahora?",
          "Avui aprendrem el secret dels dibuixos animats.|Hoy aprenderemos el secreto de los dibujos animados.", "Qui ha vist mai com es fa un dibuix animat? (Respostes lliures.)|¿Quién ha visto alguna vez cómo se hace un dibujo animado? (Respuestas libres.)"],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vestits i esperes|Disfraces y esperas", fase: 'teoria',
        fa: "Explica amb l'animació del llibret que un dibuix animat són molts dibuixos que canvien de pressa. Presenta els vestits d'un personatge i els blocs «vestit següent» i «posa el vestit». Amb la demo de la mascota, demana que diguin el número de vestit abans que canviï. Acaba amb la diapositiva «Compte!»: sense espera no es veu res.|Explica con la animación de la libreta que un dibujo animado son muchos dibujos que cambian deprisa. Presenta los disfraces de un personaje y los bloques «disfraz siguiente» y «pon el disfraz». Con la demo de la mascota, pide que digan el número de disfraz antes de que cambie. Termina con la diapositiva «¡Cuidado!»: sin espera no se ve nada.",
        diu: ["Quants vestits té el peix? I la mascota?|¿Cuántos disfraces tiene el pez? ¿Y la mascota?",
          "Si el peix porta l'últim vestit i fa «vestit següent», quin vestit es posa?|Si el pez lleva el último disfraz y hace «disfraz siguiente», ¿qué disfraz se pone?",
          "Per què creieu que cal l'espera? Què passaria sense?|¿Por qué creéis que hace falta la espera? ¿Qué pasaría sin ella?", "Quin bloc posa la mascota a dormir? (Posa el vestit 3.)|¿Qué bloque pone a dormir a la mascota? (Pon el disfraz 3.)"],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'animació humana|La animación humana", fase: 'desconnectat',
        fa: "Fes grups de 4 amb quatre papers: actor/actriu (el personatge), programador/a, director/a i revisor/a. L'actor/actriu té les 4 cartes de vestit (poses). El programador/a fa un guió amb les cartes de blocs; el director/a el llegeix en veu alta i compta els segons de cada espera; el revisor/a comprova que la pose és la que toca. Primer, un guió amb esperes. Després, el mateix guió sense cap espera: el director/a ha de llegir-lo tan de pressa com pugui. Roten els papers a cada guió.|Haz grupos de 4 con cuatro papeles: actor/actriz (el personaje), programador/a, director/a y revisor/a. El actor/actriz tiene las 4 cartas de disfraz (poses). El programador/a hace un guion con las cartas de bloques; el director/a lo lee en voz alta y cuenta los segundos de cada espera; el revisor/a comprueba que la pose es la que toca. Primero, un guion con esperas. Después, el mismo guion sin ninguna espera: el director/a tiene que leerlo tan deprisa como pueda. Rotan los papeles en cada guion.",
        diu: ["L'actor/actriu només canvia de pose quan el guió ho diu.|El actor/actriz solo cambia de pose cuando el guion lo dice.",
          "Sense esperes, us ha donat temps de veure cada pose?|Sin esperas, ¿os ha dado tiempo de ver cada pose?",
          "«Vestit següent» després del vestit 4: quin toca?|«Disfraz siguiente» después del disfraz 4: ¿cuál toca?", "Quina diferència hi ha entre el guió amb esperes i el llegit de pressa? (Sense esperes no es veu cap pose.)|¿Qué diferencia hay entre el guion con esperas y el leído deprisa? (Sin esperas no se ve ninguna pose.)"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a la pausa activa. Al pas «El llibret animat», que toquin «Ho hem fet!» si el fan a casa o el deixin per a casa. Passeja i fixa't en la pregunta del gat: si algú respon «vestit 3», demana-li quants vestits té el gat. A «Investiga», que llegeixin els números de cada «posa el vestit» en veu baixa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta la pausa activa. En el paso «La libreta animada», que toquen «¡Lo hemos hecho!» si lo hacen en casa o lo dejen para casa. Pasea y fíjate en la pregunta del gato: si alguien responde «disfraz 3», pregúntale cuántos disfraces tiene el gato. En «Investiga», que lean los números de cada «pon el disfraz» en voz baja.",
        diu: ["Compta amb el dit: 1, 2, 1, 2… On t'atures?|Cuenta con el dedo: 1, 2, 1, 2… ¿Dónde te paras?",
          "Llegeix els vestits del peix en veu baixa: quin és el que no canvia res?|Lee los disfraces del pez en voz baja: ¿cuál es el que no cambia nada?", "El gat té 2 vestits: hi ha un vestit 3? (No: torna a l'1.)|El gato tiene 2 disfraces: ¿hay un disfraz 3? (No: vuelve al 1.)", "On és l'error: al número o a l'espera?|¿Dónde está el error: en el número o en la espera?"],
        slides: ['s12'], app: "Recorda, les dues històries de l'aquari, les cinc targetes de «Descobreix», ordenar els blocs de la mascota, «El llibret animat», la pregunta del gat i «Investiga» (el vestit que no canvia).|Recuerda, las dos historias del acuario, las cinco tarjetas de «Descubre», ordenar los bloques de la mascota, «La libreta animada», la pregunta del gato e «Investiga» (el disfraz que no cambia).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el peix, la mascota, la papallona i el cotxe|Retos: el pez, la mascota, la mariposa y el coche", fase: 'ordinador',
        fa: "Fes la pausa activa tots junts. Després programa amb la classe el peix de la diapositiva 13, demanant un bloc a cada alumne/a. Deixa'ls fer els quatre reptes. Al repte de la papallona, no diguis on és l'error: pregunta quin número té cada «posa el vestit».|Haced la pausa activa todos juntos. Después programa con la clase el pez de la diapositiva 13, pidiendo un bloque a cada alumno/a. Déjalos hacer los cuatro retos. En el reto de la mariposa, no digas dónde está el error: pregunta qué número tiene cada «pon el disfraz».",
        diu: ["Quin bloc va primer? I després, què cal perquè es vegi?|¿Qué bloque va primero? ¿Y después, qué hace falta para que se vea?",
          "Si sempre poses el vestit 1, el dibuix canvia?|Si siempre pones el disfraz 1, ¿el dibujo cambia?",
          "Al cotxe, quants blocs t'han calgut? La setmana vinent en farem servir molts menys!|En el coche, ¿cuántos bloques te han hecho falta? ¡La semana que viene usaremos muchos menos!", "Com farem que les rodes del cotxe girin mentre avança? (Vestit següent i mou-te, per parelles.)|¿Cómo haremos que las ruedas del coche giren mientras avanza? (Disfraz siguiente y muévete, por parejas.)"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix que mou la cua, la mascota que té son, la papallona que no es mou i el cotxe que arrenca.|«Pausa activa» y los cuatro «Retos»: el pez que mueve la cola, la mascota que tiene sueño, la mariposa que no se mueve y el coche que arranca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera animació|Crea: mi primera animación", fase: 'crea',
        fa: "Cada alumne/a fa la seva animació d'en Numi al teatre. Quan la tinguin, en parelles s'ensenyen l'animació i el company/a ha d'endevinar quin vestit vindrà després abans de veure'l.|Cada alumno/a hace su animación de Numi en el teatro. Cuando la tengan, por parejas se enseñan la animación y el compañero/a tiene que adivinar qué disfraz vendrá después antes de verlo.",
        diu: ["Inventa una petita història: què diu en Numi i quina cara fa?|Inventa una pequeña historia: ¿qué dice Numi y qué cara pone?",
          "Endevina quin vestit ve ara!|¡Adivina qué disfraz viene ahora!", "On has posat les esperes? Es veu cada cara d'en Numi?|¿Dónde has puesto las esperas? ¿Se ve cada cara de Numi?", "L'app no deixa desar sense cap espera: per què creus que ho demana?|La app no deja guardar sin ninguna espera: ¿por qué crees que lo pide?"],
        slides: ['s15'], app: "Pas «Crea»: La meva primera animació (es desa al portafoli).|Paso «Crea»: Mi primera animación (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum i torna a la pregunta del principi: com es mou un dibuix? Deixa que responguin les dues preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una de les preguntes del tiquet i anota qui encara oblida l'espera.|Repasa las tres ideas de la sesión con el resumen y vuelve a la pregunta del principio: ¿cómo se mueve un dibujo? Deja que respondan las dos preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una de las preguntas del ticket y anota quién todavía olvida la espera.",
        diu: ["Qui em diu el secret dels dibuixos animats?|¿Quién me dice el secreto de los dibujos animados?",
          "Per què posem una espera entre dos vestits?|¿Por qué ponemos una espera entre dos disfraces?", "I si el peix porta el vestit 2 i fa «vestit següent»? (Torna a l'1.)|¿Y si el pez lleva el disfraz 2 y hace «disfraz siguiente»? (Vuelve al 1.)", "La setmana vinent: com fer-ho amb molts menys blocs!|La semana que viene: ¡cómo hacerlo con muchos menos bloques!"],
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
        "Mostra-li la franja «els blocs nous van aquí»: és on s'enganxarà el bloc que toqui a la paleta.|Muéstrale la franja «los bloques nuevos van aquí»: es donde se enganchará el bloque que toque en la paleta."],
      ["Al repte del cotxe, mou el cotxe però no canvia el vestit (o al revés).|En el reto del coche, mueve el coche pero no cambia el disfraz (o al revés).",
        "Que llegeixi en veu alta el repte: quines dues coses demana? Que comprovi cada parella: «vestit següent» i «mou-te».|Que lea en voz alta el reto: ¿qué dos cosas pide? Que compruebe cada pareja: «disfraz siguiente» y «muévete»."]
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
        ["Temps i espera|Tiempo y espera", "Posa esperes entre els canvis i en tria la durada perquè l'animació es vegi bé.|Pone esperas entre los cambios y elige su duración para que la animación se vea bien.", "Necessita l'ajuda de la pista per recordar l'espera.|Necesita la ayuda de la pista para recordar la espera."],
        ["Primera animació|Primera animación",
          "Crea una animació d'en Numi que explica una petita història amb frases, canvis de cara i esperes.|Crea una animación de Numi que cuenta una pequeña historia con frases, cambios de cara y esperas.",
          "Fa canviar els vestits d'en Numi, però sense història o sense que es vegin tots els canvis.|Hace cambiar los disfraces de Numi, pero sin historia o sin que se vean todos los cambios."]
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
      { id: 's4', k: 'concepte', t: "La missió: l'aquari del moll|La misión: el acuario del muelle", punts: ["Al moll obriran un aquari nou.|En el muelle abrirán un acuario nuevo.", "La Marina, la guarda, vol una pantalla amb animals que es moguin.|Marina, la guardiana, quiere una pantalla con animales que se muevan.", "Durant 4 sessions la farem entre tots.|Durante 4 sesiones la haremos entre todos."], pic: 'img/tech/scenes/moll.webp',
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
    intro: "La pantalla de l'aquari ha d'estar encesa tot el dia. El bucle comptat («repeteix N vegades») ja el coneixen de Tech Robot i aquí només es recorda en una pregunta; la sessió se centra en el que és nou: el bucle «per sempre», el ritme dels fotogrames i el rebot. L'alumnat descobreix que l'escenari dibuixa 30 fotogrames per segon i que cada volta d'un bucle en gasta un, de manera que la velocitat és una multiplicació (mou-te 6 → 6 × 30 = 180 punts per segon) i l'espera marca quants dibuixos es veuen per segon. També aprèn que «si toques la vora, rebota» va dins del bucle i que els blocs de sota d'un «per sempre» no es fan mai. Comencen amb la pregunta dels mil blocs, fan els fotogrames humans en grups i acaben programant una pantalla que no para.|La pantalla del acuario tiene que estar encendida todo el día. El bucle contado («repite N veces») ya lo conocen de Tech Robot y aquí solo se recuerda en una pregunta; la sesión se centra en lo que es nuevo: el bucle «por siempre», el ritmo de los fotogramas y el rebote. El alumnado descubre que el escenario dibuja 30 fotogramas por segundo y que cada vuelta de un bucle gasta uno, de manera que la velocidad es una multiplicación (muévete 6 → 6 × 30 = 180 puntos por segundo) y la espera marca cuántos dibujos se ven por segundo. También aprende que «si tocas el borde, rebota» va dentro del bucle y que los bloques de debajo de un «por siempre» no se hacen nunca. Empiezan con la pregunta de los mil bloques, hacen los fotogramas humanos en grupos y terminan programando una pantalla que no para.",
    claus: [
      "«Repeteix N vegades» s'acaba (ja el coneixen de Tech Robot); «per sempre» no s'acaba mai i els blocs de sota no es fan.|«Repite N veces» se acaba (ya lo conocen de Tech Robot); «por siempre» no se acaba nunca y los bloques de debajo no se hacen.",
      "L'escenari dibuixa 30 fotogrames per segon i cada volta d'un bucle en gasta un.|El escenario dibuja 30 fotogramas por segundo y cada vuelta de un bucle gasta uno.",
      "Velocitat = punts per volta × 30: mou-te 6 dins d'un «per sempre» fa 180 punts per segon.|Velocidad = puntos por vuelta × 30: muévete 6 dentro de un «por siempre» hace 180 puntos por segundo.",
      "L'espera marca el ritme de l'animació: espera 0,1 s ≈ 10 dibuixos per segon; espera 0,5 s ≈ 2.|La espera marca el ritmo de la animación: espera 0,1 s ≈ 10 dibujos por segundo; espera 0,5 s ≈ 2.",
      "«Si toques la vora, rebota» va a dins del bucle, al costat de «mou-te», perquè es comprovi a cada fotograma.|«Si tocas el borde, rebota» va dentro del bucle, junto a «muévete», para que se compruebe en cada fotograma."
    ],
    prev: [
      "Canviar de vestit amb «vestit següent» i posar esperes (sessió 1).|Cambiar de disfraz con «disfraz siguiente» y poner esperas (sesión 1).",
      "El bucle «repeteix N vegades» (Tech Robot, unitat 2): aquí només es recorda.|El bucle «repite N veces» (Tech Robot, unidad 2): aquí solo se recuerda.",
      "Multiplicar per 30 i dividir 1 entre 0,5 o 0,25 (matemàtiques de cicle superior).|Multiplicar por 30 y dividir 1 entre 0,5 o 0,25 (matemáticas de ciclo superior)."
    ],
    faq: [
      ["Com poso blocs a dins del bucle?|¿Cómo pongo bloques dentro del bucle?",
        "Quan afegeixes el bucle, els blocs nous ja hi van a dins. Si en vols posar un a fora, toca l'espai de sota del bucle abans d'afegir-lo.|Cuando añades el bucle, los bloques nuevos ya van dentro. Si quieres poner uno fuera, toca el espacio de debajo del bucle antes de añadirlo."],
      ["Com s'atura un «per sempre»?|¿Cómo se para un «por siempre»?",
        "Amb el botó d'aturar (el quadrat) o tornant a tocar la bandera. A la prova automàtica s'atura sol al cap d'uns segons.|Con el botón de parar (el cuadrado) o volviendo a tocar la bandera. En la prueba automática se para solo al cabo de unos segundos."],
      ["Què és un fotograma?|¿Qué es un fotograma?",
        "Cada dibuix que fa l'escenari. En fa 30 cada segon, com una pel·lícula; cada volta d'un bucle espera el següent, i per això el moviment es veu.|Cada dibujo que hace el escenario. Hace 30 cada segundo, como una película; cada vuelta de un bucle espera el siguiente, y por eso el movimiento se ve."],
      ["Per què amb espera 0,25 s no surten exactament 4 canvis per segon?|¿Por qué con espera 0,25 s no salen exactamente 4 cambios por segundo?",
        "Perquè, a més de l'espera, cada volta del bucle gasta un fotograma (1/30 de segon). Són unes 3 o 4 vegades: per fer comptes, n'hi ha prou amb l'aproximació.|Porque, además de la espera, cada vuelta del bucle gasta un fotograma (1/30 de segundo). Son unas 3 o 4 veces: para hacer cuentas, basta con la aproximación."],
      ["Quan faig servir «repeteix» i quan «per sempre»?|¿Cuándo uso «repite» y cuándo «por siempre»?",
        "Si saps quantes vegades o quanta estona (10 canvis), «repeteix». Si ha de durar tota l'estona (la pantalla de l'aquari), «per sempre».|Si sabes cuántas veces o cuánto rato (10 cambios), «repite». Si tiene que durar todo el rato (la pantalla del acuario), «por siempre»."],
      ["Per què el meu ocell no diu «Adéu»?|¿Por qué mi pájaro no dice «Adiós»?",
        "Perquè el «digues» és a sota d'un «per sempre», i el programa no hi arriba mai. Si ha de dir-ho, posa'l abans del bucle.|Porque el «di» está debajo de un «por siempre», y el programa no llega nunca. Si tiene que decirlo, ponlo antes del bucle."]
    ],
    tec: [
      ["Surt el missatge que «un bucle no espera mai».|Sale el mensaje de que «un bucle no espera nunca».",
        "Dins del bucle no hi ha cap bloc que es vegi (moure, esperar, vestit…). Que n'hi afegeixi un.|Dentro del bucle no hay ningún bloque que se vea (mover, esperar, disfraz…). Que añada uno."],
      ["Al repte de la medusa no deixa afegir més blocs.|En el reto de la medusa no deja añadir más bloques.",
        "El repte només admet 3 blocs (el comptador ho mostra): un bucle, «vestit següent» i «espera». Que esborri els que sobren.|El reto solo admite 3 bloques (el contador lo muestra): un bucle, «disfraz siguiente» y «espera». Que borre los que sobran."],
      ["La medusa canvia de vestit però el repte diu que no n'hi ha prou.|La medusa cambia de disfraz pero el reto dice que no es suficiente.",
        "L'espera és massa llarga: amb 0,3 s no arriba a 10 canvis en 2 segons. Que provi 0,1.|La espera es demasiado larga: con 0,3 s no llega a 10 cambios en 2 segundos. Que pruebe 0,1."],
      ["Un bloc ha quedat a fora del bucle i no sé com moure'l.|Un bloque se ha quedado fuera del bucle y no sé cómo moverlo.",
        "Que toqui el bloc i faci servir les fletxes ↑ ↓: el bloc entra i surt dels bucles.|Que toque el bloque y use las flechas ↑ ↓: el bloque entra y sale de los bucles."],
      ["Als fotogrames humans, el ritme de les piques es descontrola.|En los fotogramas humanos, el ritmo de las palmadas se descontrola.",
        "Feu servir un metrònom (n'hi ha de gratuïts al mòbil) a 60 tocs per minut, o compteu tots junts en veu baixa.|Usad un metrónomo (los hay gratuitos en el móvil) a 60 toques por minuto, o contad todos juntos en voz baja."]
    ],
    seg: [
      "Als fotogrames humans es camina a poc a poc, una passa per pica, i es rebota abans de tocar la paret; ningú no corre.|En los fotogramas humanos se camina despacio, un paso por palmada, y se rebota antes de tocar la pared; nadie corre.",
      "Respecteu qui no vulgui fer d'actor/actriu davant de tothom: pot fer de rellotge o de comptador/a.|Respetad a quien no quiera hacer de actor/actriz delante de todos: puede hacer de reloj o de contador/a."
    ],
    extra: [
      "Fer que el cranc camini i digui «Uf!» cada vegada que rebota (amb el «digues» a dins del bucle) i explicar quan es diu.|Hacer que el cangrejo camine y diga «¡Uf!» cada vez que rebota (con el «di» dentro del bucle) y explicar cuándo se dice.",
      "Calcular el número de «mou-te» perquè el peix creui els 480 punts de l'escenari en exactament 2 segons (480 ÷ 60 = 8).|Calcular el número de «muévete» para que el pez cruce los 480 puntos del escenario en exactamente 2 segundos (480 ÷ 60 = 8).",
      "Provar un gir petit dins del «per sempre» (gira 3 graus) i calcular quantes voltes sencera fa en 4 segons (3 × 30 × 4 = 360: una).|Probar un giro pequeño dentro del «por siempre» (gira 3 grados) y calcular cuántas vueltas enteras da en 4 segundos (3 × 30 × 4 = 360: una)."
    ],
    trans: [
      "Matemàtiques: multiplicació i proporcionalitat (punts per fotograma × fotogrames per segon), divisió amb decimals (1 ÷ 0,25 = 4).|Matemáticas: multiplicación y proporcionalidad (puntos por fotograma × fotogramas por segundo), división con decimales (1 ÷ 0,25 = 4).",
      "Educació visual i plàstica: com funcionen el cinema i els dibuixos animats (fotogrames per segon).|Educación visual y plástica: cómo funcionan el cine y los dibujos animados (fotogramas por segundo).",
      "Sessió anterior: vestits i esperes. Sessió següent: molts personatges alhora, cadascun amb el seu bucle i el seu ritme.|Sesión anterior: disfraces y esperas. Sesión siguiente: muchos personajes a la vez, cada uno con su bucle y su ritmo."
    ],
    obj: [
      "L'alumne/a distingeix «per sempre» de «repeteix N vegades» i explica per què els blocs de sota d'un «per sempre» no es fan mai.|El alumno/a distingue «por siempre» de «repite N veces» y explica por qué los bloques de debajo de un «por siempre» no se hacen nunca.",
      "L'alumne/a calcula la velocitat d'un personatge a partir dels punts per volta i els 30 fotogrames per segon.|El alumno/a calcula la velocidad de un personaje a partir de los puntos por vuelta y los 30 fotogramas por segundo.",
      "L'alumne/a ajusta l'espera per aconseguir el ritme d'animació que demana un repte.|El alumno/a ajusta la espera para conseguir el ritmo de animación que pide un reto.",
      "L'alumne/a fa servir «si toques la vora, rebota» dins d'un bucle perquè un personatge no surti de l'escenari.|El alumno/a usa «si tocas el borde, rebota» dentro de un bucle para que un personaje no salga del escenario."
    ],
    comp: [
      "Competència digital (CD5): programar animacions contínues controlant la velocitat i el ritme|Competencia digital (CD5): programar animaciones continuas controlando la velocidad y el ritmo",
      "Pensament computacional: bucles infinits, temps d'execució per fotogrames i depuració|Pensamiento computacional: bucles infinitos, tiempo de ejecución por fotogramas y depuración",
      "Matemàtiques: multiplicació, proporcionalitat i divisió amb decimals|Matemáticas: multiplicación, proporcionalidad y división con decimales",
      "Educació visual i plàstica: el ritme de l'animació|Educación visual y plástica: el ritmo de la animación"
    ],
    vocab: [
      ["Per sempre|Por siempre", "Bucle que no s'acaba mai, fins que aturem el programa.|Bucle que no se acaba nunca, hasta que paramos el programa."],
      ["Fotograma|Fotograma", "Cada dibuix que fa l'escenari: en fa 30 cada segon.|Cada dibujo que hace el escenario: hace 30 cada segundo."],
      ["Velocitat|Velocidad", "Punts que avança un personatge cada segon (punts per volta × 30).|Puntos que avanza un personaje cada segundo (puntos por vuelta × 30)."],
      ["Ritme|Ritmo", "Quants canvis de vestit es veuen cada segon; el marca l'espera.|Cuántos cambios de disfraz se ven cada segundo; lo marca la espera."],
      ["Rebotar|Rebotar", "Donar la volta quan el personatge toca la vora de l'escenari.|Dar la vuelta cuando el personaje toca el borde del escenario."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Bucles per sempre»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Bucles para siempre»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un passadís o un espai amb dues parets lliures, a uns 5 metres l'una de l'altra, per als fotogrames humans|Un pasillo o un espacio con dos paredes libres, a unos 5 metros la una de la otra, para los fotogramas humanos",
        "Un metrònom (app gratuïta al mòbil) o un tambor, i 1 cartolina vermella que faci de «botó d'aturar»|Un metrónomo (app gratuita en el móvil) o un tambor, y 1 cartulina roja que haga de «botón de parar»"
      ],
      imprimir: [
        "1 paquet de cartes dels fotogrames humans per grup de 4 (imprimible 1)|1 paquete de cartas de los fotogramas humanos por grupo de 4 (imprimible 1)",
        "1 fitxa «Velocitat i ritme» per a qui acabi abans o per a casa (imprimible 2), unes 6 còpies|1 ficha «Velocidad y ritmo» para quien termine antes o para casa (imprimible 2), unas 6 copias"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de cartes per grup de 4.|El día antes (15 min): imprimir y recortar un paquete de cartas por grupo de 4.",
        "Abans de la classe (5 min): reservar el passadís o apartar taules, i deixar el metrònom a 60 tocs per minut.|Antes de la clase (5 min): reservar el pasillo o apartar mesas, y dejar el metrónomo a 60 toques por minuto.",
        "Provar les demostracions de les diapositives 5, 6, 8 i 13.|Probar las demostraciones de las diapositivas 5, 6, 8 y 13.",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: mil blocs?|Bienvenida: ¿mil bloques?", fase: 'inici',
        fa: "Repassa la sessió 1 amb dues preguntes ràpides i recorda en un minut el «repeteix» de Tech Robot. Explica el nou encàrrec de la Marina: la pantalla ha d'estar encesa tot el dia. Pregunta quants blocs o quantes voltes caldrien per a una hora sencera.|Repasa la sesión 1 con dos preguntas rápidas y recuerda en un minuto el «repite» de Tech Robot. Explica el nuevo encargo de Marina: la pantalla tiene que estar encendida todo el día. Pregunta cuántos bloques o cuántas vueltas harían falta para una hora entera.",
        diu: ["Repeteix 4 vegades { vestit següent, espera 0,5 }: quant dura? (2 segons.)|Repite 4 veces { disfraz siguiente, espera 0,5 }: ¿cuánto dura? (2 segundos.)",
          "I si el peix ha de moure la cua tot el dia? Quantes voltes posaríeu?|¿Y si el pez tiene que mover la cola todo el día? ¿Cuántas vueltas pondríais?", "Avui coneixerem el bucle que no s'acaba i el rellotge que hi ha amagat a l'escenari.|Hoy conoceremos el bucle que no se acaba y el reloj que hay escondido en el escenario."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Per sempre, fotogrames i ritme|Por siempre, fotogramas y ritmo", fase: 'teoria',
        fa: "Presenta «per sempre» amb l'ocell que no para. Explica els 30 fotogrames per segon amb l'animació de la pel·lícula i fes la multiplicació en veu alta (6 × 30). Compara els dos ocells (espera 0,1 i 0,5) i demana quants canvis per segon fa cadascun. Acaba amb «rebota» i amb «Compte!»: després de «per sempre», res.|Presenta «por siempre» con el pájaro que no para. Explica los 30 fotogramas por segundo con la animación de la película y haz la multiplicación en voz alta (6 × 30). Compara los dos pájaros (espera 0,1 y 0,5) y pide cuántos cambios por segundo hace cada uno. Termina con «rebota» y con «¡Cuidado!»: después de «por siempre», nada.",
        diu: ["Quan s'acaba «per sempre»? (Mai, fins que l'aturem.)|¿Cuándo se acaba «por siempre»? (Nunca, hasta que lo paremos.)",
          "Si a cada fotograma avança 6 punts, quants en fa en un segon? (180.)|Si en cada fotograma avanza 6 puntos, ¿cuántos hace en un segundo? (180.)",
          "Quin ocell bat les ales més de pressa? Quantes vegades per segon, més o menys?|¿Qué pájaro bate las alas más deprisa? ¿Cuántas veces por segundo, más o menos?", "Si poso «rebota» a sota del «per sempre», es farà? (No, mai.)|Si pongo «rebota» debajo del «por siempre», ¿se hará? (No, nunca.)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Fotogrames humans|Fotogramas humanos", fase: 'desconnectat',
        fa: "Grups de 4: un rellotge (pica de mans al ritme del metrònom), un actor/actriu, un programador/a amb les cartes i un comptador/a. El programador/a posa «Per sempre { Mou-te 1 passa per pica, Si toques la paret, rebota }» i el comptador/a anota quantes piques calen per anar de paret a paret. Després canvien a «Mou-te 2 passes» i, finalment, hi afegeixen «Espera 1 pica». Per acabar, tota la classe fa el ritme dels vestits (braços amunt i avall a cada pica o a cada dues piques) fins que mostres la cartolina vermella.|Grupos de 4: un reloj (da palmadas al ritmo del metrónomo), un actor/actriz, un programador/a con las cartas y un contador/a. El programador/a pone «Por siempre { Muévete 1 paso por palmada, Si tocas la pared, rebota }» y el contador/a anota cuántas palmadas hacen falta para ir de pared a pared. Después cambian a «Muévete 2 pasos» y, finalmente, añaden «Espera 1 palmada». Para terminar, toda la clase hace el ritmo de los disfraces (brazos arriba y abajo en cada palmada o cada dos palmadas) hasta que enseñas la cartulina roja.",
        diu: ["Quantes piques heu necessitat d'una paret a l'altra?|¿Cuántas palmadas habéis necesitado de una pared a la otra?",
          "Amb dues passes per pica, quantes piques calen ara? Per què la meitat?|Con dos pasos por palmada, ¿cuántas palmadas hacen falta ahora? ¿Por qué la mitad?",
          "I amb l'espera, l'actor va més ràpid o més lent?|¿Y con la espera, el actor va más rápido o más lento?", "El rellotge de l'escenari pica 30 vegades per segon: quantes passes faria en un segon amb «mou-te 2»? (60.)|El reloj del escenario da 30 palmadas por segundo: ¿cuántos pasos daría en un segundo con «muévete 2»? (60.)"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 i després tot el grup|Grupos de 4 y después todo el grupo" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A «Fotogrames humans», que toquin «Ho hem fet!». A les preguntes de velocitat i de ritme, demana que facin el càlcul en un paper abans de triar. Al peix que neda, deixa'ls mirar una bona estona i pregunta què fa a la vora. A «Investiga», fixa't en qui toca el bucle en comptes del bloc de sota.|Cada alumno/a avanza hasta la pausa activa. En «Fotogramas humanos», que toquen «¡Lo hemos hecho!». En las preguntas de velocidad y de ritmo, pide que hagan el cálculo en un papel antes de elegir. En el pez que nada, déjalos mirar un buen rato y pregunta qué hace en el borde. En «Investiga», fíjate en quién toca el bucle en lugar del bloque de debajo.",
        diu: ["4 punts per volta i 30 voltes per segon: quants punts? (120.)|4 puntos por vuelta y 30 vueltas por segundo: ¿cuántos puntos? (120.)",
          "Espera 0,25 s: quants canvis caben en un segon, més o menys? (Uns 4.)|Espera 0,25 s: ¿cuántos cambios caben en un segundo, más o menos? (Unos 4.)", "Aquest bloc, està a dins o a fora del bucle?|Este bloque, ¿está dentro o fuera del bucle?", "Què fa el peix quan arriba a la vora? (Rebota i dona la volta.)|¿Qué hace el pez cuando llega al borde? (Rebota y da la vuelta.)"],
        slides: ['s12'], app: "Recorda (el vestit i el «repeteix» d'en Bit), les dues històries, les cinc targetes de «Descobreix», la pregunta dels 120 punts, «Fotogrames humans» (ja fet), la pregunta del ritme del cranc, el peix que neda per sempre i «Investiga» (l'ocell que no diu adéu).|Recuerda (el disfraz y el «repite» de Bit), las dos historias, las cinco tarjetas de «Descubre», la pregunta de los 120 puntos, «Fotogramas humanos» (ya hecho), la pregunta del ritmo del cangrejo, el pez que nada por siempre e «Investiga» (el pájaro que no dice adiós).", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb bucles|Retos con bucles", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el cranc de la diapositiva 13 i deixa'ls fer els reptes. Al de la medusa hi ha 3 blocs i un ritme mínim: si algú s'encalla, que calculi quants canvis per segon necessita (5). Al del peix, que calculi el número de «mou-te» (600 ÷ 5 ÷ 30 = 4). A l'ocell que se'n va, pregunta on és el bloc «rebota».|Haced la pausa activa juntos. Programa con la clase el cangrejo de la diapositiva 13 y deja que hagan los retos. En el de la medusa hay 3 bloques y un ritmo mínimo: si alguien se atasca, que calcule cuántos cambios por segundo necesita (5). En el del pez, que calcule el número de «muévete» (600 ÷ 5 ÷ 30 = 4). En el pájaro que se va, pregunta dónde está el bloque «rebota».",
        diu: ["10 canvis en 2 segons: quants per segon? Quina espera hi cap? (5; 0,1 o 0,15.)|10 cambios en 2 segundos: ¿cuántos por segundo? ¿Qué espera cabe? (5; 0,1 o 0,15.)",
          "600 punts en 5 segons: quants punts per fotograma, com a mínim? (4.)|600 puntos en 5 segundos: ¿cuántos puntos por fotograma, como mínimo? (4.)", "On és el «rebota»? Es fa a cada volta?|¿Dónde está el «rebota»? ¿Se hace en cada vuelta?", "Aquest ocell se'n va: on és el bloc que el faria tornar?|Este pájaro se va: ¿dónde está el bloque que lo haría volver?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: la medusa ràpida amb 3 blocs, el peix que neda 600 punts sense sortir, el cranc que camina i l'ocell que se'n va.|«Pausa activa» y los cuatro «Retos»: la medusa rápida con 3 bloques, el pez que nada 600 puntos sin salir, el cangrejo que camina y el pájaro que se va.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la pantalla que no para|Crea: la pantalla que no para", fase: 'crea',
        fa: "Cada alumne/a programa en Vuit, el pop, perquè nedi per sempre, reboti i canviï de cara. Que triïn ells els números de velocitat i d'espera i que en calculin els punts per segon. En parelles, comparen: quin pop va més de pressa i per què?|Cada alumno/a programa a Vuit, el pulpo, para que nade por siempre, rebote y cambie de cara. Que elijan ellos los números de velocidad y de espera y que calculen los puntos por segundo. Por parejas, comparan: ¿qué pulpo va más deprisa y por qué?",
        diu: ["Quants punts per segon fa el teu pop? Com ho has calculat?|¿Cuántos puntos por segundo hace tu pulpo? ¿Cómo lo has calculado?",
          "El teu pop surt mai de l'escenari?|¿Tu pulpo sale alguna vez del escenario?", "Si poses una espera dins del bucle de moure, què passa amb la velocitat?|Si pones una espera dentro del bucle de mover, ¿qué pasa con la velocidad?"],
        slides: ['s15'], app: "Pas «Crea»: La pantalla que no para (es desa al portafoli).|Paso «Crea»: La pantalla que no para (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i torna a la pregunta dels mil blocs: ara n'hi ha prou amb un bucle. Deixa que facin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i anota qui encara confon velocitat i espera.|Repasa las tres ideas con el resumen y vuelve a la pregunta de los mil bloques: ahora basta con un bucle. Deja que hagan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y anota quién todavía confunde velocidad y espera.",
        diu: ["Com faig que el peix vagi el doble de ràpid?|¿Cómo hago que el pez vaya el doble de rápido?",
          "On va el bloc «rebota»?|¿Dónde va el bloque «rebota»?", "Quants fotogrames dibuixa l'escenari cada segon? (30.)|¿Cuántos fotogramas dibuja el escenario cada segundo? (30.)"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Per fer anar més ràpid el personatge, hi afegeix una espera o un altre bucle.|Para hacer ir más rápido al personaje, añade una espera u otro bucle.",
        "Torna a la multiplicació: punts per volta × 30. Quin dels dos números pots canviar? L'espera fa voltes més llargues, no més ràpides.|Vuelve a la multiplicación: puntos por vuelta × 30. ¿Cuál de los dos números puedes cambiar? La espera hace vueltas más largas, no más rápidas."],
      ["Posa «rebota» abans o després del bucle i el personatge surt igualment.|Pone «rebota» antes o después del bucle y el personaje sale igualmente.",
        "Pregunta: quantes vegades es fa aquest bloc? Que recordi l'actor dels fotogrames humans: havia de mirar la paret a cada pica.|Pregunta: ¿cuántas veces se hace este bloque? Que recuerde al actor de los fotogramas humanos: tenía que mirar la pared en cada palmada."],
      ["Escriu blocs a sota d'un «per sempre» i no entén per què no es fan.|Escribe bloques debajo de un «por siempre» y no entiende por qué no se hacen.",
        "Pregunta-li quan s'acaba el «per sempre». Si no s'acaba mai, quan arribarà el programa al bloc de sota?|Pregúntale cuándo se acaba el «por siempre». Si no se acaba nunca, ¿cuándo llegará el programa al bloque de debajo?"],
      ["Al repte de la medusa, posa una espera llarga (0,5 s) i no arriba als 10 canvis.|En el reto de la medusa, pone una espera larga (0,5 s) y no llega a los 10 cambios.",
        "Que calculi: amb 0,5 s, quants canvis caben en 2 segons? (Uns 4.) Quina espera li cal per fer-ne 10?|Que calcule: con 0,5 s, ¿cuántos cambios caben en 2 segundos? (Unos 4.) ¿Qué espera necesita para hacer 10?"],
      ["Treu l'espera del bucle de vestits i diu que l'animació «s'ha espatllat».|Quita la espera del bucle de disfraces y dice que la animación «se ha estropeado».",
        "Sense espera, canvia de vestit 30 vegades per segon: massa de pressa per veure-ho. Que provi 0,1 i compari.|Sin espera, cambia de disfraz 30 veces por segundo: demasiado deprisa para verlo. Que pruebe 0,1 y compare."],
      ["Al repte del cranc, posa una espera llarga dins del bucle i el cranc va a salts.|En el reto del cangrejo, pone una espera larga dentro del bucle y el cangrejo va a saltos.",
        "Pregunta: durant l'espera, el cranc es mou? Amb l'espera, cada volta dura més fotogrames. Que provi 0,1 segons i compari com camina.|Pregunta: durante la espera, ¿el cangrejo se mueve? Con la espera, cada vuelta dura más fotogramas. Que pruebe 0,1 segundos y compare cómo camina."]
    ],
    diff: {
      mes: "Fer que el cranc camini i, cada vegada que reboti, digui «Uf!» (pista: posar el «digues» a dins del bucle i mirar quan es diu). Després, calcular el «mou-te» perquè el peix creui l'escenari (480 punts) en exactament 2 segons.|Hacer que el cangrejo camine y, cada vez que rebote, diga «¡Uf!» (pista: poner el «di» dentro del bucle y mirar cuándo se dice). Después, calcular el «muévete» para que el pez cruce el escenario (480 puntos) en exactamente 2 segundos.",
      menys: "Fer els reptes amb les cartes dels fotogrames humans a la taula: primer construir el bucle amb cartes i després copiar-lo. Tenir escrita la regla «punts per volta × 30» i fer els càlculs amb calculadora si cal.|Hacer los retos con las cartas de los fotogramas humanos en la mesa: primero construir el bucle con cartas y después copiarlo. Tener escrita la regla «puntos por vuelta × 30» y hacer los cálculos con calculadora si hace falta."
    },
    aval: {
      ticket: ["Per sempre { mou-te 5, rebota }: quants punts fa en un segon?|Por siempre { muévete 5, rebota }: ¿cuántos puntos hace en un segundo?",
        "On s'ha de posar «si toques la vora, rebota»? Per què?|¿Dónde hay que poner «si tocas el borde, rebota»? ¿Por qué?"],
      rubric: [
        ["Per sempre|Por siempre", "Tria «per sempre» quan cal i explica que els blocs de sota no es fan.|Elige «por siempre» cuando hace falta y explica que los bloques de debajo no se hacen.", "Confon els dos bucles o espera que es faci un bloc de sota d'un «per sempre».|Confunde los dos bucles o espera que se haga un bloque de debajo de un «por siempre»."],
        ["Velocitat|Velocidad", "Calcula la velocitat (punts × 30) i tria el número per arribar a la que demana el repte.|Calcula la velocidad (puntos × 30) y elige el número para llegar a la que pide el reto.", "Canvia números a l'atzar fins que funciona.|Cambia números al azar hasta que funciona."],
        ["Ritme|Ritmo", "Ajusta l'espera per aconseguir un ritme concret i explica l'efecte.|Ajusta la espera para conseguir un ritmo concreto y explica el efecto.", "Sap que l'espera canvia el ritme, però no en preveu l'efecte.|Sabe que la espera cambia el ritmo, pero no prevé su efecto."],
        ["Rebotar|Rebotar",
          "Posa «rebota» dins del bucle i el personatge no surt mai.|Pone «rebota» dentro del bucle y el personaje no sale nunca.",
          "Posa «rebota», però de vegades fora del bucle.|Pone «rebota», pero a veces fuera del bucle."]
      ]
    },
    casa: "A casa podeu fer «Fotogrames humans» al passadís: una persona pica de mans i l'altra fa una passa per pica i rebota a les parets. Proveu dues passes per pica i una espera, i compteu quantes piques calen cada vegada.|En casa podéis hacer «Fotogramas humanos» en el pasillo: una persona da palmadas y la otra da un paso por palmada y rebota en las paredes. Probad dos pasos por palmada y una espera, y contad cuántas palmadas hacen falta cada vez.",
    slides: [
      { id: 's1', k: 'portada', t: 'Bucles per sempre|Bucles para siempre', x: "La pantalla de l'aquari ha d'estar encesa tot el dia.|La pantalla del acuario tiene que estar encendida todo el día.",
        nota: "Presenta l'objectiu: animacions que no s'acaben, amb la velocitat i el ritme que volem, i personatges que no surten de l'escenari.|Presenta el objetivo: animaciones que no se acaban, con la velocidad y el ritmo que queremos, y personajes que no salen del escenario." },
      { id: 's2', k: 'repas', t: "Recordem: vestits, esperes i el «repeteix»|Recordemos: disfraces, esperas y el «repite»", punts: ["«Vestit següent» passa al dibuix següent.|«Disfraz siguiente» pasa al dibujo siguiente.", "L'espera fa que es vegi cada canvi.|La espera hace que se vea cada cambio.", "«Repeteix 4 vegades» fa 4 voltes i s'acaba (com amb en Bit).|«Repite 4 veces» da 4 vueltas y se acaba (como con Bit)."],
        nota: "En un minut: qui ha fet Tech Robot explica el «repeteix» a qui no l'ha fet.|En un minuto: quien ha hecho Tech Robot explica el «repite» a quien no lo ha hecho." },
      { id: 's3', k: 'pregunta', t: 'Quants blocs caldrien?|¿Cuántos bloques harían falta?', x: "Si el peix ha de moure la cua tot el dia, quantes voltes posaríeu al «repeteix»?|Si el pez tiene que mover la cola todo el día, ¿cuántas vueltas pondríais en el «repite»?",
        nota: "Deixa que facin càlculs (milers de voltes!) i que diguin que algun dia s'acabaria: és el moment del «per sempre».|Deja que hagan cálculos (¡miles de vueltas!) y que digan que algún día se acabaría: es el momento del «por siempre»." },
      { id: 's4', k: 'media', t: '«Per sempre»|«Por siempre»', x: "L'ocell bat les ales i no para mai.|El pájaro bate las alas y no para nunca.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'ocell', art: 'ocell', x: 0, y: 20, size: 160, rot: 'lr' }] }, prog: '@ocell flag{ forever{ next wait:0.25 } }', time: 6 },
        nota: "Pregunta quan s'acabarà. Resposta: quan toquem el botó d'aturar.|Pregunta cuándo se acabará. Respuesta: cuando toquemos el botón de parar." },
      { id: 's5', k: 'anim', t: '30 fotogrames cada segon|30 fotogramas cada segundo', anim: 'g2fps', x: '1 volta del bucle = 1 fotograma · 6 punts × 30 = 180 punts per segon.|1 vuelta del bucle = 1 fotograma · 6 puntos × 30 = 180 puntos por segundo.',
        nota: "Relaciona-ho amb el cinema (24 fotogrames per segon). Fes la multiplicació en veu alta i pregunta-la amb altres números (3, 5, 10).|Relaciónalo con el cine (24 fotogramas por segundo). Haz la multiplicación en voz alta y pregúntala con otros números (3, 5, 10)." },
      { id: 's6', k: 'media', t: "El ritme de l'animació|El ritmo de la animación", x: "Espera 0,1 s a l'esquerra i 0,5 s a la dreta: qui bat les ales més de pressa?|Espera 0,1 s a la izquierda y 0,5 s a la derecha: ¿quién bate las alas más deprisa?",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'rapid', art: 'ocell', x: -115, y: 10, size: 120, rot: 'lr', name: 'Ocell ràpid|Pájaro rápido' }, { id: 'lent', art: 'ocell', x: 115, y: 10, size: 120, rot: 'lr', name: 'Ocell lent|Pájaro lento' }] }, prog: '@rapid flag{ say:"espera 0,1 s|espera 0,1 s" forever{ next wait:0.1 } } @lent flag{ say:"espera 0,5 s|espera 0,5 s" forever{ next wait:0.5 } }', time: 6 },
        nota: "Demana que comptin els cops d'ala de l'ocell lent durant 5 segons (uns 10) i calculeu els de l'altre (gairebé 50).|Pide que cuenten los aleteos del pájaro lento durante 5 segundos (unos 10) y calculad los del otro (casi 50)." },
      { id: 's7', k: 'anim', t: '«Si toques la vora, rebota»|«Si tocas el borde, rebota»', anim: 'g2bounce', x: 'Arriba a la vora i dona la volta: la direcció passa de 90 a -90.|Llega al borde y da la vuelta: la dirección pasa de 90 a -90.',
        nota: "Fes que un alumne/a camini fins a la paret i doni la volta: és exactament el que fa el bloc.|Haz que un alumno/a camine hasta la pared y dé la vuelta: es exactamente lo que hace el bloque." },
      { id: 's8', k: 'media', t: 'Nedar per sempre|Nadar por siempre', x: 'Per sempre { mou-te 5 passos, rebota }: 150 punts per segon.|Por siempre { muévete 5 pasos, rebota }: 150 puntos por segundo.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 120, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:5 bounce } }', time: 8 },
        nota: "Pregunta quant triga a creuar l'escenari (uns 3 segons: 480 ÷ 150) i què passaria sense «rebota».|Pregunta cuánto tarda en cruzar el escenario (unos 3 segundos: 480 ÷ 150) y qué pasaría sin «rebota»." },
      { id: 's9', k: 'anim', t: 'Compte! Després de «per sempre», res|¡Cuidado! Después de «por siempre», nada', anim: 'g2never', x: "El programa no arriba mai als blocs de sota.|El programa no llega nunca a los bloques de debajo.",
        nota: "Relaciona-ho amb la vida: si camines per sempre, mai no arribes a seure.|Relaciónalo con la vida: si caminas por siempre, nunca llegas a sentarte." },
      { id: 's10', k: 'activitat', t: 'Fotogrames humans|Fotogramas humanos', timer: 12, punts: ["Rellotge: pica de mans al ritme del metrònom.|Reloj: da palmadas al ritmo del metrónomo.", "Actor/actriu: per sempre, una passa per pica; a la paret, rebota.|Actor/actriz: por siempre, un paso por palmada; en la pared, rebota.", "Comptador/a: quantes piques de paret a paret?|Contador/a: ¿cuántas palmadas de pared a pared?", "Proveu «2 passes per pica» i «espera 1 pica».|Probad «2 pasos por palmada» y «espera 1 palmada»."],
        nota: "Escriviu a la pissarra les piques de cada grup amb 1 passa, 2 passes i espera: la meitat i el doble surten sols.|Escribid en la pizarra las palmadas de cada grupo con 1 paso, 2 pasos y espera: la mitad y el doble salen solos." },
      { id: 's11', k: 'activitat', t: 'Les regles del rellotge|Las reglas del reloj', punts: ["Una pica = un fotograma.|Una palmada = un fotograma.", "Més passes per pica = més velocitat.|Más pasos por palmada = más velocidad.", "Una espera fa voltes més llargues: més lent.|Una espera hace vueltas más largas: más lento.", "Només s'atura amb la cartolina vermella.|Solo se para con la cartulina roja."],
        nota: "Deixa-la projectada durant l'activitat.|Déjala proyectada durante la actividad." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Bucles per sempre».|Abre la sesión «Bucles para siempre».", "Fes «Descobreix» i «Mans a l'obra».|Haz «Descubre» y «Manos a la obra».", "Fes els càlculs en un paper abans de respondre.|Haz los cálculos en un papel antes de responder.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Fotogrames humans» ja l'heu fet: que toquin «Ho hem fet!».|«Fotogramas humanos» ya lo habéis hecho: que toquen «¡Lo hemos hecho!»." },
      { id: 's13', k: 'media', t: 'Programem junts: el cranc|Programemos juntos: el cangrejo', x: 'Per sempre: mou-te, vestit següent, espera i rebota.|Por siempre: muévete, disfraz siguiente, espera y rebota.',
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'cranc', art: 'cranc', x: 0, y: -130, size: 110, rot: 'lr' }] }, prog: '@cranc flag{ forever{ move:10 next wait:0.1 bounce } }', time: 8 },
        nota: "Demana l'ordre dels blocs a la classe. Prova a canviar el número de l'espera i mireu com canvien el pas i la velocitat: amb espera, cada volta dura més.|Pide el orden de los bloques a la clase. Prueba a cambiar el número de la espera y mirad cómo cambian el paso y la velocidad: con espera, cada vuelta dura más." },
      { id: 's14', k: 'repte', t: 'Reptes amb bucles|Retos con bucles', timer: 10, punts: ["1. La medusa ràpida amb 3 blocs|1. La medusa rápida con 3 bloques", "2. El peix: 600 punts en 5 segons|2. El pez: 600 puntos en 5 segundos", "3. El cranc que camina|3. El cangrejo que camina", "4. L'ocell que se'n va: troba l'error|4. El pájaro que se va: encuentra el error"],
        nota: "Als reptes 1 i 2, demana el càlcul abans de provar. Al 4, pregunta on és el bloc «rebota» i quantes vegades es fa.|En los retos 1 y 2, pide el cálculo antes de probar. En el 4, pregunta dónde está el bloque «rebota» y cuántas veces se hace." },
      { id: 's15', k: 'activitat', t: 'Crea: la pantalla que no para|Crea: la pantalla que no para', timer: 5, x: 'En Vuit neda per sempre, rebota i canvia de cara. Tria tu els números i calcula la velocitat!|Vuit nada por siempre, rebota y cambia de cara. ¡Elige tú los números y calcula la velocidad!',
        nota: "L'app demana que hi hagi un «per sempre». Proposa als ràpids que provin un gir petit dins del bucle i en calculin l'efecte.|La app pide que haya un «por siempre». Propón a los rápidos que prueben un giro pequeño dentro del bucle y calculen su efecto." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["«Per sempre» no s'acaba: res del que hi ha a sota es fa.|«Por siempre» no se acaba: nada de lo que hay debajo se hace.", "30 fotogrames per segon: velocitat = punts per volta × 30.|30 fotogramas por segundo: velocidad = puntos por vuelta × 30.", "L'espera marca el ritme; «rebota», dins del bucle.|La espera marca el ritmo; «rebota», dentro del bucle."],
        nota: "Torna a la pregunta dels mil blocs: ara n'hi ha prou amb un bucle i tres blocs!|Vuelve a la pregunta de los mil bloques: ¡ahora basta con un bucle y tres bloques!" },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Per sempre { mou-te 5 }: quants punts per segon?|Por siempre { muévete 5 }: ¿cuántos puntos por segundo?", "On va el «rebota» i per què?|¿Dónde va el «rebota» y por qué?"],
        nota: "Anota qui encara confon velocitat i espera: hi tornarem a la sessió 3, amb personatges ràpids i lents.|Anota quién todavía confunde velocidad y espera: volveremos a ello en la sesión 3, con personajes rápidos y lentos." }
    ],
    print: [
      { id: 'p1', t: 'Cartes dels fotogrames humans|Cartas de los fotogramas humanos', k: 'targetes',
        intro: "Un paquet per grup de 4. Les cartes de bucle embolcallen les de moviment; el rellotge marca les piques.|Un paquete por grupo de 4. Las cartas de bucle envuelven las de movimiento; el reloj marca las palmadas.",
        items: [
          { t: 'Quan comença 🚩|Al empezar 🚩', n: 1 },
          { t: 'Per sempre ♾️|Por siempre ♾️', n: 1 },
          { t: 'Mou-te 1 passa per pica 👣|Muévete 1 paso por palmada 👣', n: 1 },
          { t: 'Mou-te 2 passes per pica 👣👣|Muévete 2 pasos por palmada 👣👣', n: 1 },
          { t: 'Espera 1 pica ⏱️|Espera 1 palmada ⏱️', n: 2 },
          { t: 'Si toques la paret, rebota 🧱|Si tocas la pared, rebota 🧱', n: 1 },
          { t: 'Vestit següent: braços amunt / avall 🙌|Disfraz siguiente: brazos arriba / abajo 🙌', n: 2 },
          { t: 'Piques de paret a paret: ___|Palmadas de pared a pared: ___', n: 3 },
          { t: 'Atura ✋|Para ✋', n: 1 }
        ] },
      { id: 'p2', t: 'Fitxa: velocitat i ritme|Ficha: velocidad y ritmo', k: 'fitxa',
        intro: "Recorda: l'escenari dibuixa 30 fotogrames per segon i cada volta d'un bucle en gasta un.|Recuerda: el escenario dibuja 30 fotogramas por segundo y cada vuelta de un bucle gasta uno.",
        items: [
          { q: "Per sempre { mou-te 5 passos }. Quants punts fa en un segon? I en 3 segons?|Por siempre { muévete 5 pasos }. ¿Cuántos puntos hace en un segundo? ¿Y en 3 segundos?", sol: '150 punts per segon (5 × 30) i 450 en 3 segons.|150 puntos por segundo (5 × 30) y 450 en 3 segundos.' },
          { q: "Vols que el cotxe vagi a 240 punts per segon. Quin número poses a «mou-te»?|Quieres que el coche vaya a 240 puntos por segundo. ¿Qué número pones en «muévete»?", sol: '8, perquè 8 × 30 = 240.|8, porque 8 × 30 = 240.' },
          { q: "Per sempre { vestit següent, espera 0,5 }. Quants canvis de vestit es veuen en 10 segons, més o menys?|Por siempre { disfraz siguiente, espera 0,5 }. ¿Cuántos cambios de disfraz se ven en 10 segundos, más o menos?", sol: "Uns 20 (2 per segon); de fet, una mica menys, perquè cada volta també gasta un fotograma.|Unos 20 (2 por segundo); de hecho, un poco menos, porque cada vuelta también gasta un fotograma." },
          { q: "Per sempre { mou-te 5 } i, a sota, «digues Adéu». Dirà «Adéu» algun dia? Per què?|Por siempre { muévete 5 } y, debajo, «di Adiós». ¿Dirá «Adiós» algún día? ¿Por qué?", sol: "No: «per sempre» no s'acaba i el programa no arriba mai al bloc de sota.|No: «por siempre» no se acaba y el programa no llega nunca al bloque de debajo." },
          { q: "Escriu el guió d'un peix que neda tota l'estona a 120 punts per segon sense sortir de l'escenari.|Escribe el guion de un pez que nada todo el rato a 120 puntos por segundo sin salir del escenario.", sol: "Per sempre { mou-te 4 passos, si toques la vora, rebota } (4 × 30 = 120).|Por siempre { muévete 4 pasos, si tocas el borde, rebota } (4 × 30 = 120)." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Molts personatges alhora ---------- */
  'g2-3': {
    intro: "Al tanc gran de l'aquari hi ha molts animals i tots s'han de moure alhora. L'alumnat descobreix que cada personatge té els seus propis guions (es trien a la barra de dalt de l'editor) i que, quan es toca la bandera verda, tots els guions «quan comença» comencen al mateix moment. També aprèn a donar un caràcter a cada animal canviant els números de «mou-te» i d'«espera», i a fer servir dos guions en un sol personatge per fer dues coses a ritmes diferents. Comencen amb la imatge de l'orquestra, fan l'aquari humà en grups i acaben programant el seu fons marí.|En el tanque grande del acuario hay muchos animales y todos se tienen que mover a la vez. El alumnado descubre que cada personaje tiene sus propios guiones (se eligen en la barra de arriba del editor) y que, cuando se toca la bandera verde, todos los guiones «al empezar» empiezan en el mismo momento. También aprende a dar un carácter a cada animal cambiando los números de «muévete» y de «espera», y a usar dos guiones en un solo personaje para hacer dos cosas a ritmos diferentes. Empiezan con la imagen de la orquesta, hacen el acuario humano en grupos y terminan programando su fondo marino.",
    claus: [
      "Cada personatge té els seus guions: per programar-ne un, primer cal triar-lo a la barra de dalt.|Cada personaje tiene sus guiones: para programar uno, primero hay que elegirlo en la barra de arriba.",
      "La bandera verda fa començar alhora tots els guions «quan comença», de tots els personatges.|La bandera verde hace empezar a la vez todos los guiones «al empezar», de todos los personajes.",
      "Un «mou-te» més gran fa anar més de pressa; una espera més curta fa l'animació més ràpida.|Un «muévete» más grande hace ir más deprisa; una espera más corta hace la animación más rápida.",
      "Amb dos guions, un personatge pot moure's llis i canviar de vestit a poc a poc, tot alhora.|Con dos guiones, un personaje puede moverse suave y cambiar de disfraz despacio, todo a la vez."
    ],
    prev: [
      "Fer bucles «per sempre» amb «mou-te» i «rebota» (sessió 2).|Hacer bucles «por siempre» con «muévete» y «rebota» (sesión 2).",
      "Animar un personatge amb «vestit següent» i «espera» (sessió 1).|Animar a un personaje con «disfraz siguiente» y «espera» (sesión 1).",
      "Comparar nombres i durades: quin és més gran, quin és més curt (matemàtiques).|Comparar números y duraciones: cuál es más grande, cuál es más corto (matemáticas)."
    ],
    faq: [
      ["He programat el peix però es mou el cranc. Per què?|He programado el pez pero se mueve el cangrejo. ¿Por qué?",
        "Segurament a dalt estava triat el cranc. Mira quin personatge està marcat abans d'afegir blocs.|Seguramente arriba estaba elegido el cangrejo. Mira qué personaje está marcado antes de añadir bloques."],
      ["Importa en quin ordre programo els animals?|¿Importa en qué orden programo los animales?",
        "No: quan toques la bandera, tots comencen alhora, els hagis programat primer o últim.|No: cuando tocas la bandera, todos empiezan a la vez, los hayas programado primero o último."],
      ["Com afegeixo blocs al segon guió?|¿Cómo añado bloques al segundo guion?",
        "Toca l'espai buit del segon guió: hi sortirà «els blocs nous van aquí». Després tria els blocs de la paleta.|Toca el espacio vacío del segundo guion: saldrá «los bloques nuevos van aquí». Después elige los bloques de la paleta."],
      ["Com faig un segon guió si no n'hi ha?|¿Cómo hago un segundo guion si no lo hay?",
        "Toca el «+» de la capçalera «Quan comença»: es crea un altre guió amb la mateixa capçalera.|Toca el «+» de la cabecera «Al empezar»: se crea otro guion con la misma cabecera."],
      ["Per què el meu peix va a salts?|¿Por qué mi pez va a saltos?",
        "Perquè l'espera també atura el «mou-te». Fes dos guions: un per moure'l sense esperes i un altre per a la cua amb espera.|Porque la espera también para el «muévete». Haz dos guiones: uno para moverlo sin esperas y otro para la cola con espera."],
      ["Dos animals poden tenir el mateix guió?|¿Dos animales pueden tener el mismo guion?",
        "Sí, i cadascun el fa pel seu compte. Si canvies un número, cada un tindrà el seu caràcter.|Sí, y cada uno lo hace por su cuenta. Si cambias un número, cada uno tendrá su carácter."]
    ],
    tec: [
      ["No es veu la barra de personatges de dalt.|No se ve la barra de personajes de arriba.",
        "Al mòbil, que faci lliscar la barra cap als costats; a l'ordinador, que pugi fins a dalt de l'editor.|En el móvil, que deslice la barra hacia los lados; en el ordenador, que suba hasta arriba del editor."],
      ["Diu que el cranc no s'ha mogut prou.|Dice que el cangrejo no se ha movido bastante.",
        "El número de «mou-te» és massa petit o hi ha una espera llarga. Que el pugi una mica (3 o 4).|El número de «muévete» es demasiado pequeño o hay una espera larga. Que lo suba un poco (3 o 4)."],
      ["A la cursa, el peix surt de l'escenari.|En la carrera, el pez sale del escenario.",
        "El número és massa gran: en 4 segons el peix fa 120 voltes. Que provi 3 i compti on arriba.|El número es demasiado grande: en 4 segundos el pez da 120 vueltas. Que pruebe 3 y cuente dónde llega."],
      ["Un guió buit fa que no funcioni?|¿Un guion vacío hace que no funcione?",
        "No: un guió buit no fa res i no molesta. Si sobra, es pot deixar.|No: un guion vacío no hace nada y no molesta. Si sobra, se puede dejar."],
      ["A l'aquari humà, els grups es barregen.|En el acuario humano, los grupos se mezclan.",
        "Marqueu amb cinta una zona per a cada grup i feu començar només un grup cada vegada si cal.|Marcad con cinta una zona para cada grupo y haced empezar solo un grupo cada vez si hace falta."]
    ],
    seg: [
      "A l'aquari humà, moviments lents i sense córrer; qui fa de peix «rebota» abans de tocar ningú.|En el acuario humano, movimientos lentos y sin correr; quien hace de pez «rebota» antes de tocar a nadie.",
      "Recordeu fer pauses de pantalla: a la pausa activa, que s'aixequin i mirin lluny uns segons.|Recordad hacer pausas de pantalla: en la pausa activa, que se levanten y miren lejos unos segundos."
    ],
    extra: [
      "Donar un caràcter diferent a cada animal (nerviós, tranquil, dormilega) només amb els números de «mou-te» i «espera».|Dar un carácter diferente a cada animal (nervioso, tranquilo, dormilón) solo con los números de «muévete» y «espera».",
      "Afegir una medusa que pugi i baixi (direcció 0) mentre mou els tentacles amb dos guions.|Añadir una medusa que suba y baje (dirección 0) mientras mueve los tentáculos con dos guiones.",
      "Fer una cursa de tres animals i que la classe endevini qui guanyarà mirant només els números.|Hacer una carrera de tres animales y que la clase adivine quién ganará mirando solo los números."
    ],
    trans: [
      "Música: l'orquestra, on cada músic té la seva partitura i tots comencen alhora.|Música: la orquesta, donde cada músico tiene su partitura y todos empiezan a la vez.",
      "Matemàtiques: comparar velocitats i durades (passos més llargs, esperes més curtes).|Matemáticas: comparar velocidades y duraciones (pasos más largos, esperas más cortas).",
      "Sessió següent: el projecte de l'aquari, on farem servir tot el que hem après a la unitat.|Sesión siguiente: el proyecto del acuario, donde usaremos todo lo que hemos aprendido en la unidad."
    ],
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
        "Un espai lliure per a l'aquari humà (el centre de l'aula o el pati, uns 5 × 5 metres)|Un espacio libre para el acuario humano (el centro del aula o el patio, unos 5 × 5 metros)",
        "1 cartolina verda (bandera) i 1 de vermella (atura)|1 cartulina verde (bandera) y 1 roja (para)"
      ],
      imprimir: [
        "1 paquet de cartes de l'aquari humà per grup de 5 (imprimible 1)|1 paquete de cartas del acuario humano por grupo de 5 (imprimible 1)",
        "1 fitxa «Qui va més de pressa?» per a qui acabi abans o per a casa (imprimible 2), unes 6 còpies|1 ficha «¿Quién va más deprisa?» para quien termine antes o para casa (imprimible 2), unas 6 copias"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de cartes per grup de 5.|El día antes (15 min): imprimir y recortar un paquete de cartas por grupo de 5.",
        "Abans de la classe (5 min): deixar lliure l'espai de l'aquari humà i tenir a mà les dues cartolines.|Antes de la clase (5 min): dejar libre el espacio del acuario humano y tener a mano las dos cartulinas.",
        "Provar les demostracions de les diapositives 5 a 9 i la 13 (el peix de dos guions).|Probar las demostraciones de las diapositivas 5 a 9 y la 13 (el pez de dos guiones).",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el tanc gran|Bienvenida: el tanque grande", fase: 'inici',
        fa: "Repassa la sessió 2 i presenta el repte: al tanc gran hi ha molts animals i s'han de moure tots alhora. Pregunta com creuen que ho fa l'ordinador per moure'n molts a la vegada.|Repasa la sesión 2 y presenta el reto: en el tanque grande hay muchos animales y se tienen que mover todos a la vez. Pregunta cómo creen que lo hace el ordenador para mover muchos a la vez.",
        diu: ["Una orquestra té molts músics. Com sap cadascú què ha de tocar?|Una orquesta tiene muchos músicos. ¿Cómo sabe cada uno qué tiene que tocar?",
          "I com saben quan han de començar?|¿Y cómo saben cuándo tienen que empezar?", "Al vostre parer, l'ordinador mou els animals un darrere l'altre o tots alhora? (Ho descobrirem!)|En vuestra opinión, ¿el ordenador mueve los animales uno detrás de otro o todos a la vez? (¡Lo descubriremos!)", "Avui el tanc s'omplirà d'animals que es mouen tots junts.|Hoy el tanque se llenará de animales que se mueven todos juntos."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Cada personatge, els seus guions|Cada personaje, sus guiones", fase: 'teoria',
        fa: "Ensenya al projector la barra de personatges de l'editor i com cadascú té els seus guions. Mostra la cursa del peix i la tortuga: surten alhora, però amb velocitats diferents. Presenta els dos guions en un sol personatge i les dues meduses amb ritmes diferents. Acaba amb «Compte!»: una espera llarga dins del bucle que mou fa anar a salts.|Enseña en el proyector la barra de personajes del editor y cómo cada uno tiene sus guiones. Muestra la carrera del pez y la tortuga: salen a la vez, pero con velocidades diferentes. Presenta los dos guiones en un solo personaje y las dos medusas con ritmos diferentes. Termina con «¡Cuidado!»: una espera larga dentro del bucle que mueve hace ir a saltos.",
        diu: ["Qui arribarà primer, el peix o la tortuga? Per què?|¿Quién llegará primero, el pez o la tortuga? ¿Por qué?",
          "Quina medusa té l'espera més curta?|¿Qué medusa tiene la espera más corta?",
          "Com podem fer que el peix nedi llis i mogui la cua a poc a poc?|¿Cómo podemos hacer que el pez nade suave y mueva la cola despacio?", "Si vull que el peix nedi llis i mogui la cua a poc a poc, quants guions li faig? (Dos.)|Si quiero que el pez nade suave y mueva la cola despacio, ¿cuántos guiones le hago? (Dos.)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'aquari humà|El acuario humano", fase: 'desconnectat',
        fa: "Grups de 5. Cada alumne/a rep una carta de personatge amb el seu guió (peix, cranc, medusa, alga, tortuga). Quan aixeques la cartolina verda, tothom comença el seu guió alhora; amb la vermella, tothom s'atura. Segona ronda: canvia els números (la tortuga encara més lenta, el peix més ràpid). Tercera ronda: qui vulgui prova la carta «dos guions» (camina i, alhora, aplaudeix a poc a poc). La resta del grup observa i comenta.|Grupos de 5. Cada alumno/a recibe una carta de personaje con su guion (pez, cangrejo, medusa, alga, tortuga). Cuando levantas la cartulina verde, todos empiezan su guion a la vez; con la roja, todos se paran. Segunda ronda: cambia los números (la tortuga aún más lenta, el pez más rápido). Tercera ronda: quien quiera prueba la carta «dos guiones» (camina y, a la vez, aplaude despacio). El resto del grupo observa y comenta.",
        diu: ["Algú ha esperat que un altre acabés per començar?|¿Alguien ha esperado a que otro terminara para empezar?",
          "Amb dos guions alhora: és difícil fer dues coses a ritmes diferents?|Con dos guiones a la vez: ¿es difícil hacer dos cosas a ritmos diferentes?",
          "Si el peix fa 3 passos i la tortuga 1, qui arriba primer a la paret?|Si el pez da 3 pasos y la tortuga 1, ¿quién llega primero a la pared?", "El director/a no diu a cadascú quan començar: tothom comença amb la cartolina verda.|El director/a no dice a cada uno cuándo empezar: todos empiezan con la cartulina verde."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 5|Grupos de 5" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al tanc del pas «Prediu i prova», insisteix que toquin cada animal a la barra de dalt per veure'n els guions: la pregunta següent ho necessita. A «Investiga», que comparin els dos guions del peix.|Cada alumno/a avanza hasta la pausa activa. En el tanque del paso «Predice y prueba», insiste en que toquen cada animal en la barra de arriba para ver sus guiones: la pregunta siguiente lo necesita. En «Investiga», que comparen los dos guiones del pez.",
        diu: ["Toca el cranc a dalt: quins blocs té?|Toca el cangrejo arriba: ¿qué bloques tiene?",
          "Quin dels dos guions del peix fa moure la cua?|¿Cuál de los dos guiones del pez hace mover la cola?", "Qui va més de pressa? Mira el número del «mou-te» de cada animal.|¿Quién va más deprisa? Mira el número del «muévete» de cada animal.", "Quin bloc fa que la cua es mogui tan a poc a poc? (L'espera de 3 segons.)|¿Qué bloque hace que la cola se mueva tan despacio? (La espera de 3 segundos.)"],
        slides: ['s12'], app: "Recorda, les dues històries, les cinc targetes de «Descobreix», «L'orquestra de casa» (per a casa), la pregunta dels 3 guions, el tanc amb tres animals, la pregunta de qui va més de pressa i «Investiga» (la cua lenta).|Recuerda, las dos historias, las cinco tarjetas de «Descubre», «La orquesta de casa» (para casa), la pregunta de los 3 guiones, el tanque con tres animales, la pregunta de quién va más deprisa e «Investiga» (la cola lenta).", org: "Individual|Individual" },
      { min: 10, t: "Reptes: tots alhora|Retos: todos a la vez", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Programa amb la classe el peix de dos guions de la diapositiva 13, ensenyant on es toca per afegir blocs al segon guió. Deixa'ls fer els reptes. A la cursa, pregunta quins números han provat abans de donar cap pista.|Haced la pausa activa juntos. Programa con la clase el pez de dos guiones de la diapositiva 13, enseñando dónde se toca para añadir bloques al segundo guion. Déjalos hacer los retos. En la carrera, pregunta qué números han probado antes de dar ninguna pista.",
        diu: ["Has triat el personatge que toca, a dalt?|¿Has elegido el personaje que toca, arriba?",
          "Què passa si poses el mateix número al peix i a la tortuga?|¿Qué pasa si pones el mismo número al pez y a la tortuga?", "Al peix petit, quin bloc té de més? (Una espera que l'atura.)|En el pez pequeño, ¿qué bloque tiene de más? (Una espera que lo para.)", "Proveu números: quin guanya, el 3 o l'1?|Probad números: ¿cuál gana, el 3 o el 1?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre «Reptes»: el peix i el cranc alhora, la medusa de dos guions, la cursa de l'aquari i el peix petit que no es mou.|«Pausa activa» y los cuatro «Retos»: el pez y el cangrejo a la vez, la medusa de dos guiones, la carrera del acuario y el pez pequeño que no se mueve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el fons marí|Crea: el fondo marino", fase: 'crea',
        fa: "Cada alumne/a programa el seu tanc amb el peix, el cranc i la medusa. Quan acabin, en parelles miren el tanc del company/a i endevinen quin animal té el «mou-te» més gran.|Cada alumno/a programa su tanque con el pez, el cangrejo y la medusa. Cuando terminen, por parejas miran el tanque del compañero/a y adivinan qué animal tiene el «muévete» más grande.",
        diu: ["Quin caràcter té cada animal? Ràpid, tranquil, nerviós?|¿Qué carácter tiene cada animal? ¿Rápido, tranquilo, nervioso?",
          "Endevina: quin animal té el número més gran?|Adivina: ¿qué animal tiene el número más grande?", "Algun animal té dos guions? Què fa cadascun?|¿Algún animal tiene dos guiones? ¿Qué hace cada uno?"],
        slides: ['s15'], app: "Pas «Crea»: El fons marí (es desa al portafoli).|Paso «Crea»: El fondo marino (se guarda en el portafolio).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum: cada personatge té els seus guions, tots comencen alhora i dos guions permeten dos ritmes. Deixa que facin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i recorda que la setmana vinent faran el projecte de l'aquari.|Repasa las tres ideas con el resumen: cada personaje tiene sus guiones, todos empiezan a la vez y dos guiones permiten dos ritmos. Deja que hagan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y recuerda que la semana que viene harán el proyecto del acuario.",
        diu: ["Quan comencen els guions dels personatges?|¿Cuándo empiezan los guiones de los personajes?",
          "Per a què serveixen dos guions en un personatge?|¿Para qué sirven dos guiones en un personaje?", "Si programo primer el cranc i després el peix, qui comença abans? (Tots dos alhora.)|Si programo primero el cangrejo y después el pez, ¿quién empieza antes? (Los dos a la vez.)", "La setmana vinent farem el nostre aquari sencer!|¡La semana que viene haremos nuestro acuario entero!"],
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
        "Pregunta quants passos fa el peix en 4 segons si en fa 30 per segon. Que provi amb números petits i compari.|Pregunta cuántos pasos da el pez en 4 segundos si da 30 por segundo. Que pruebe con números pequeños y compare."],
      ["Al fons marí, programa només un animal i espera que els altres també es moguin.|En el fondo marino, programa solo un animal y espera que los otros también se muevan.",
        "Que toqui cada animal a dalt i miri si té blocs: «Aquest personatge no té guions» vol dir que no farà res.|Que toque cada animal arriba y mire si tiene bloques: «Este personaje no tiene guiones» quiere decir que no hará nada."]
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
        ["Velocitat i ritme|Velocidad y ritmo", "Canvia els números de «mou-te» i «espera» per obtenir el que vol i fa servir dos guions quan cal.|Cambia los números de «muévete» y «espera» para conseguir lo que quiere y usa dos guiones cuando hace falta.", "Canvia els números a l'atzar fins que funciona.|Cambia los números al azar hasta que funciona."],
        ["Dos guions|Dos guiones",
          "Fa servir dos guions en un personatge i explica què fa cadascun i per què.|Usa dos guiones en un personaje y explica qué hace cada uno y por qué.",
          "Fa servir dos guions copiant la pista, però encara no sap explicar per a què serveixen.|Usa dos guiones copiando la pista, pero aún no sabe explicar para qué sirven."]
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
      { id: 's4', k: 'concepte', t: 'Cada personatge, els seus guions|Cada personaje, sus guiones', punts: ["A dalt de l'editor tries el personatge.|Arriba del editor eliges el personaje.", "Cada personatge té els seus propis guions.|Cada personaje tiene sus propios guiones.", "Programar el peix no canvia res del cranc.|Programar el pez no cambia nada del cangrejo."], pic: 'img/ic/masks.webp',
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
      { id: 's9', k: 'media', t: 'Compte! Una espera que va a salts|¡Cuidado! Una espera que va a saltos', x: "Tot en un bucle amb espera de 0,6: el peix avança a salts.|Todo en un bucle con espera de 0,6: el pez avanza a saltos.",
        media: { k: 'stage', w: { bg: 'aquari', sprites: [{ id: 'peix', art: 'peix', x: -60, y: 20, size: 110, rot: 'lr' }] }, prog: '@peix flag{ forever{ move:30 next wait:0.6 bounce } }', time: 6 },
        nota: "Compara-ho amb la diapositiva 7: amb dos guions, el peix neda llis.|Compáralo con la diapositiva 7: con dos guiones, el pez nada suave." },
      { id: 's10', k: 'activitat', t: "L'aquari humà|El acuario humano", timer: 12, punts: ["Cadascú té la carta del seu animal.|Cada uno tiene la carta de su animal.", "Cartolina verda: tothom comença alhora.|Cartulina verde: todos empiezan a la vez.", "Cartolina vermella: tothom s'atura.|Cartulina roja: todos se paran.", "Ronda 3: qui s'atreveix amb dos guions?|Ronda 3: ¿quién se atreve con dos guiones?"],
        nota: "Vigila que es moguin a poc a poc i dins dels límits de l'aquari. Rebotar vol dir donar la volta abans de la paret.|Vigila que se muevan despacio y dentro de los límites del acuario. Rebotar quiere decir dar la vuelta antes de la pared." },
      { id: 's11', k: 'activitat', t: 'Els guions dels animals|Los guiones de los animales', punts: ["Peix: per sempre, 3 passos i, a la paret, rebota.|Pez: por siempre, 3 pasos y, en la pared, rebota.", "Cranc: per sempre, un pas de costat.|Cangrejo: por siempre, un paso de lado.", "Medusa: per sempre, ajup-te i aixeca't.|Medusa: por siempre, agáchate y levántate.", "Tortuga: per sempre, un pas molt lent.|Tortuga: por siempre, un paso muy lento."],
        nota: "Deixa-la projectada perquè tothom recordi el guió del seu animal.|Déjala proyectada para que todos recuerden el guion de su animal." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Molts personatges alhora».|Abre la sesión «Muchos personajes a la vez».", "Al tanc, toca cada animal a dalt per veure'n els guions.|En el tanque, toca cada animal arriba para ver sus guiones.", "A «Investiga», compara els dos guions del peix.|En «Investiga», compara los dos guiones del pez.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«L'orquestra de casa» és per fer a casa.|«La orquesta de casa» es para hacer en casa." },
      { id: 's13', k: 'media', t: 'Junts: el peix de dos guions|Juntos: el pez de dos guiones', x: 'Guió 1: per sempre { mou-te 4, rebota }. Guió 2: per sempre { vestit següent, espera 0,3 }.|Guion 1: por siempre { muévete 4, rebota }. Guion 2: por siempre { disfraz siguiente, espera 0,3 }.',
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
    intro: "Sessió de projecte que tanca la unitat: cada alumne/a crea el seu aquari animat per a la pantalla de la Marina. Hi fan servir tot el que han après: vestits i esperes, bucles «per sempre», «rebota» i molts personatges alhora, amb algun personatge que té dos guions. El més important és la manera de treballar: idea, pla en paper, construir a trossos (un animal darrere l'altre), provar cada tros i millorar. La classe comença amb l'aquari de mostra, segueix amb el pla, tres reptes d'entrenament i la creació lliure, i acaba amb una galeria de comentaris amables.|Sesión de proyecto que cierra la unidad: cada alumno/a crea su acuario animado para la pantalla de Marina. Usan todo lo que han aprendido: disfraces y esperas, bucles «por siempre», «rebota» y muchos personajes a la vez, con algún personaje que tiene dos guiones. Lo más importante es la manera de trabajar: idea, plan en papel, construir a trozos (un animal tras otro), probar cada trozo y mejorar. La clase empieza con el acuario de muestra, sigue con el plan, tres retos de entrenamiento y la creación libre, y termina con una galería de comentarios amables.",
    claus: [
      "Un projecte gran es fa a trossos: un animal, es prova, i després el següent.|Un proyecto grande se hace a trozos: un animal, se prueba, y después el siguiente.",
      "El pla en paper ajuda a no perdre's: què fa cada animal i en quin ordre es programa.|El plan en papel ayuda a no perderse: qué hace cada animal y en qué orden se programa.",
      "El que s'ha de fer una sola vegada (una benvinguda) va abans del bucle; el que dura tota l'estona, a dins.|Lo que se tiene que hacer una sola vez (una bienvenida) va antes del bucle; lo que dura todo el rato, dentro.",
      "Els comentaris ajuden si són amables i concrets: una cosa que agrada i una idea per millorar.|Los comentarios ayudan si son amables y concretos: una cosa que gusta y una idea para mejorar."
    ],
    prev: [
      "Animar amb vestits i esperes (sessió 1).|Animar con disfraces y esperas (sesión 1).",
      "Bucles «repeteix» i «per sempre» i el bloc «rebota» (sessió 2).|Bucles «repite» y «por siempre» y el bloque «rebota» (sesión 2).",
      "Programar diversos personatges i dos guions en un personatge (sessió 3).|Programar varios personajes y dos guiones en un personaje (sesión 3)."
    ],
    faq: [
      ["Quants animals he de posar?|¿Cuántos animales tengo que poner?",
        "Com a mínim 3 que facin alguna cosa. És millor tenir-ne 3 que funcionin bé que 5 a mitges.|Como mínimo 3 que hagan algo. Es mejor tener 3 que funcionen bien que 5 a medias."],
      ["Puc afegir animals que no hi són?|¿Puedo añadir animales que no están?",
        "En aquest projecte hi ha cinc animals preparats. Si en vols més, dona'ls un caràcter diferent a cadascun amb els números.|En este proyecto hay cinco animales preparados. Si quieres más, dale un carácter diferente a cada uno con los números."],
      ["El cranc no para de dir la benvinguda. Què passa?|El cangrejo no para de decir la bienvenida. ¿Qué pasa?",
        "El «digues» és a dins del «per sempre». Posa'l abans del bucle perquè es digui una sola vegada.|El «di» está dentro del «por siempre». Ponlo antes del bucle para que se diga una sola vez."],
      ["L'app diu que funciona però no deixa desar. Per què?|La app dice que funciona pero no deja guardar. ¿Por qué?",
        "Falta algun criteri: com a mínim 3 animals programats, algun «per sempre» i algun canvi de vestit. Llegeix el missatge.|Falta algún criterio: como mínimo 3 animales programados, algún «por siempre» y algún cambio de disfraz. Lee el mensaje."],
      ["He de seguir el pla exactament?|¿Tengo que seguir el plan exactamente?",
        "El pla és una guia: si mentre programes tens una idea millor, la pots canviar. Apunta-la al pla.|El plan es una guía: si mientras programas tienes una idea mejor, la puedes cambiar. Apúntala en el plan."],
      ["Puc ensenyar l'aquari a casa?|¿Puedo enseñar el acuario en casa?",
        "Sí: quan el desis, quedarà a «Projectes» i el podràs obrir des del mòbil.|Sí: cuando lo guardes, quedará en «Proyectos» y lo podrás abrir desde el móvil."]
    ],
    tec: [
      ["El projecte desat no surt a «Projectes».|El proyecto guardado no sale en «Proyectos».",
        "Cal tocar «Desa-ho i continua» quan l'app diu que funciona; si s'ha sortit abans, que ho torni a provar.|Hay que tocar «Guárdalo y continúa» cuando la app dice que funciona; si se ha salido antes, que lo vuelva a probar."],
      ["Amb cinc animals, costa trobar on falla.|Con cinco animales, cuesta encontrar dónde falla.",
        "Que miri els animals d'un en un a la barra de dalt i provi cada guió; si cal, que esborri els blocs d'un animal i el torni a fer.|Que mire los animales de uno en uno en la barra de arriba y pruebe cada guion; si hace falta, que borre los bloques de un animal y lo vuelva a hacer."],
      ["Al projector, l'aquari es veu massa petit.|En el proyector, el acuario se ve demasiado pequeño.",
        "Feu servir el zoom del navegador o passegeu per les taules en lloc de projectar-ho tot.|Usad el zoom del navegador o pasead por las mesas en lugar de proyectarlo todo."],
      ["L'animació va lenta en un ordinador antic.|La animación va lenta en un ordenador antiguo.",
        "Tanqueu les altres pestanyes del navegador; si continua, que faci menys animals o esperes una mica més llargues.|Cerrad las otras pestañas del navegador; si continúa, que haga menos animales o esperas un poco más largas."],
      ["Un alumne/a ha esborrat tot el projecte sense voler.|Un alumno/a ha borrado todo el proyecto sin querer.",
        "Que torni a obrir el pas: els guions buits tornen a sortir. Amb el pla en paper, refer-lo és ràpid.|Que vuelva a abrir el paso: los guiones vacíos vuelven a salir. Con el plan en papel, rehacerlo es rápido."]
    ],
    seg: [
      "A la galeria, els comentaris són amables i sobre el projecte, mai sobre la persona; el docent modela un exemple abans.|En la galería, los comentarios son amables y sobre el proyecto, nunca sobre la persona; el docente modela un ejemplo antes.",
      "Ningú no està obligat a projectar el seu aquari davant de tothom.|Nadie está obligado a proyectar su acuario delante de todos."
    ],
    extra: [
      "Donar a cada animal un caràcter (nerviós, tranquil, curiós) i escriure'l al pla abans de programar-lo.|Dar a cada animal un carácter (nervioso, tranquilo, curioso) y escribirlo en el plan antes de programarlo.",
      "Fer que en Vuit pensi alguna cosa de tant en tant mentre neda (amb un segon guió).|Hacer que Vuit piense algo de vez en cuando mientras nada (con un segundo guion).",
      "Preparar una explicació de 30 segons per presentar l'aquari: quins blocs fa servir cada animal.|Preparar una explicación de 30 segundos para presentar el acuario: qué bloques usa cada animal."
    ],
    trans: [
      "Unitat 2 sencera: vestits i esperes (sessió 1), bucles (sessió 2) i molts personatges alhora (sessió 3).|Unidad 2 entera: disfraces y esperas (sesión 1), bucles (sesión 2) y muchos personajes a la vez (sesión 3).",
      "Ciències naturals: els animals marins i com es mouen (nedar, caminar de costat, gronxar-se).|Ciencias naturales: los animales marinos y cómo se mueven (nadar, caminar de lado, balancearse).",
      "Unitat 3: els personatges reaccionaran quan els toquem, quan premem una tecla i quan reben missatges.|Unidad 3: los personajes reaccionarán cuando los toquemos, cuando pulsemos una tecla y cuando reciban mensajes."
    ],
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
        "1 fitxa «El pla del meu aquari» per alumne/a (imprimible 1), llapis i colors (1 capsa per taula)|1 ficha «El plan de mi acuario» por alumno/a (imprimible 1), lápices y colores (1 caja por mesa)",
        "1 tira de targetes de comentaris per alumne/a (imprimible 2)|1 tira de tarjetas de comentarios por alumno/a (imprimible 2)"
      ],
      imprimir: [
        "1 fitxa «El pla del meu aquari» per alumne/a (imprimible 1)|1 ficha «El plan de mi acuario» por alumno/a (imprimible 1)",
        "1 tira de targetes de comentaris per alumne/a (imprimible 2)|1 tira de tarjetas de comentarios por alumno/a (imprimible 2)"
      ],
      prep: [
        "El dia abans (15 min): imprimir una fitxa del pla i una tira de targetes de comentaris per alumne/a, i retallar les tires.|El día antes (15 min): imprimir una ficha del plan y una tira de tarjetas de comentarios por alumno/a, y recortar las tiras.",
        "Provar l'aquari de mostra (diapositiva 6) i la demo de «Prova cada tros».|Probar el acuario de muestra (diapositiva 6) y la demo de «Prueba cada trozo».",
        "Decidir com es farà la galeria (en parelles a les taules o 3-4 aquaris al projector).|Decidir cómo se hará la galería (por parejas en las mesas o 3-4 acuarios en el proyector).",
        "Deixar els ordinadors engegats amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "La gran inauguració|La gran inauguración", fase: 'inici',
        fa: "Explica que avui cadascú farà el seu aquari per a la pantalla de la Marina. Repassa amb les preguntes de «Recorda» els tres grans aprenentatges de la unitat: vestits, bucles i molts personatges alhora.|Explica que hoy cada uno hará su acuario para la pantalla de Marina. Repasa con las preguntas de «Recuerda» los tres grandes aprendizajes de la unidad: disfraces, bucles y muchos personajes a la vez.",
        diu: ["Quines eines tenim ja per fer un aquari viu?|¿Qué herramientas tenemos ya para hacer un acuario vivo?",
          "Avui sereu els programadors i les programadores de l'aquari.|Hoy seréis los programadores y las programadoras del acuario.", "Recordeu el que hem après: vestits, esperes, bucles i molts personatges alhora.|Recordad lo que hemos aprendido: disfraces, esperas, bucles y muchos personajes a la vez.", "Al final farem una galeria per veure els aquaris de tothom.|Al final haremos una galería para ver los acuarios de todos."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 5, t: "Com es fa un projecte|Cómo se hace un proyecto", fase: 'teoria',
        fa: "Presenta els cinc passos del projecte i l'aquari de mostra, tros a tros. Acaba amb «Compte!»: provar cada tros abans de passar al següent.|Presenta los cinco pasos del proyecto y el acuario de muestra, trozo a trozo. Termina con «¡Cuidado!»: probar cada trozo antes de pasar al siguiente.",
        diu: ["Quin és el primer tros que programaríeu de l'aquari de mostra?|¿Cuál es el primer trozo que programaríais del acuario de muestra?",
          "Per què és millor provar cada animal de seguida?|¿Por qué es mejor probar cada animal enseguida?", "Si el peix de dalt se'n va i el de baix torna, què li falta al de dalt? («Rebota».)|Si el pez de arriba se va y el de abajo vuelve, ¿qué le falta al de arriba? («Rebota».)"],
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
          "A «Investiga», quin bucle s'acaba massa aviat?|En «Investiga», ¿qué bucle se acaba demasiado pronto?", "El cranc saluda una vegada i després camina: on va el «digues»? (Abans del «per sempre».)|El cangrejo saluda una vez y después camina: ¿dónde va el «di»? (Antes del «por siempre».)", "Si ja ho tens clar, passa directament al teu aquari.|Si ya lo tienes claro, pasa directamente a tu acuario."],
        slides: ['s10', 's11'], app: "Recorda, històries, «Descobreix», ordenar els passos del projecte, el pla (ja fet), l'aquari de mostra, «Investiga» (la medusa que s'atura), la pausa activa i els tres reptes: l'alga, el peix i el cranc.|Recuerda, historias, «Descubre», ordenar los pasos del proyecto, el plan (ya hecho), el acuario de muestra, «Investiga» (la medusa que se para), la pausa activa y los tres retos: el alga, el pez y el cangrejo.", org: "Individual|Individual" },
      { min: 20, t: "Crea: el meu aquari|Crea: mi acuario", fase: 'crea',
        fa: "Cada alumne/a construeix el seu aquari seguint el pla, animal a animal. Passeja i pregunta en quin tros són i si l'han provat. Quan un animal funcioni, que marquin una creu al pla. Qui acabi pot afegir detalls: un animal que pensa, un ritme diferent per a cada animal…|Cada alumno/a construye su acuario siguiendo el plan, animal a animal. Pasea y pregunta en qué trozo están y si lo han probado. Cuando un animal funcione, que marquen una cruz en el plan. Quien termine puede añadir detalles: un animal que piensa, un ritmo diferente para cada animal…",
        diu: ["En quin tros ets? L'has provat ja?|¿En qué trozo estás? ¿Ya lo has probado?",
          "Marca al pla els animals que ja funcionen.|Marca en el plan los animales que ya funcionan.",
          "Què podries millorar ara que funciona?|¿Qué podrías mejorar ahora que funciona?", "Si alguna cosa falla, quin és l'últim tros que has afegit? Comença a mirar per allà.|Si algo falla, ¿cuál es el último trozo que has añadido? Empieza a mirar por ahí."],
        slides: ['s12', 's13'], app: "Pas «Crea»: El meu aquari (es desa al portafoli).|Paso «Crea»: Mi acuario (se guarda en el portafolio).", org: "Individual|Individual" },
      { min: 10, t: "Galeria i tancament|Galería y cierre", fase: 'tancament',
        fa: "Feu una galeria: en parelles, cadascú ensenya el seu aquari i el company/a li dona dues targetes de comentaris (una cosa que li agrada i una idea). Si hi ha temps, mostra 3 o 4 aquaris al projector. Acaba amb el resum, les preguntes finals de l'app i el tiquet.|Haced una galería: por parejas, cada uno enseña su acuario y el compañero/a le da dos tarjetas de comentarios (una cosa que le gusta y una idea). Si hay tiempo, muestra 3 o 4 acuarios en el proyector. Termina con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Digues una cosa que t'agradi de l'aquari del teu company/a.|Di una cosa que te guste del acuario de tu compañero/a.",
          "Quina idea li donaries per millorar-lo?|¿Qué idea le darías para mejorarlo?",
          "Què ha estat el més difícil del projecte? Com ho has resolt?|¿Qué ha sido lo más difícil del proyecto? ¿Cómo lo has resuelto?", "Recordeu: una cosa concreta que agrada i una idea, no «està bé».|Recordad: una cosa concreta que gusta y una idea, no «está bien»."],
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
        "Fes servir les targetes de comentaris: «M'agrada… perquè…» i «Podries provar…». Modela'n un tu primer.|Usa las tarjetas de comentarios: «Me gusta… porque…» y «Podrías probar…». Modela uno tú primero."],
      ["Programa els cinc animals amb exactament el mateix guió i l'aquari sembla una còpia.|Programa los cinco animales con exactamente el mismo guion y el acuario parece una copia.",
        "Pregunta quin caràcter té cada animal: quin és el més ràpid? El més tranquil? Que canviï els números de «mou-te» i «espera».|Pregunta qué carácter tiene cada animal: ¿cuál es el más rápido? ¿El más tranquilo? Que cambie los números de «muévete» y «espera»."]
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
        ["Presentació i comentaris|Presentación y comentarios", "Explica el seu aquari i fa comentaris amables i concrets al company/a.|Explica su acuario y hace comentarios amables y concretos al compañero/a.", "Ensenya l'aquari, però li costa explicar-lo o fer comentaris concrets.|Enseña el acuario, pero le cuesta explicarlo o hacer comentarios concretos."],
        ["Pla en paper|Plan en papel",
          "El pla té com a mínim 3 animals amb el que farà cadascun i l'ordre en què es programaran.|El plan tiene como mínimo 3 animales con lo que hará cada uno y el orden en que se programarán.",
          "El pla té els animals dibuixats, però no diu què farà cadascun.|El plan tiene los animales dibujados, pero no dice qué hará cada uno."]
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
      { id: 's5', k: 'concepte', t: 'Construir a trossos|Construir a trozos', punts: ["Un tros = un animal.|Un trozo = un animal.", "Programa'l i prova'l amb la bandera.|Prográmalo y pruébalo con la bandera.", "Quan funciona, passa al següent.|Cuando funciona, pasa al siguiente."], pic: 'img/ment/cor.webp',
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
      { id: 's13', k: 'concepte', t: 'Els blocs que ja coneixes|Los bloques que ya conoces', punts: ["Animar: per sempre { vestit següent, espera }.|Animar: por siempre { disfraz siguiente, espera }.", "Nedar: per sempre { mou-te, rebota }.|Nadar: por siempre { muévete, rebota }.", "Saludar: digues, abans del bucle.|Saludar: di, antes del bucle.", "Dues coses alhora: dos guions.|Dos cosas a la vez: dos guiones."], pic: 'img/ment/onn.webp',
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
