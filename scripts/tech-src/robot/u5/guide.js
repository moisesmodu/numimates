/* Tech Robot · unitat 5 «Ordres noves» (funcions) · guia del professorat (r5-1 … r5-4) */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Posa nom a un grup de blocs ---------- */
  'r5-1': {
    obj: [
      "L'alumne/a explica amb les seves paraules què és una funció (un grup d'ordres amb un nom) i en dona un exemple de la vida diària.|El alumno/a explica con sus palabras qué es una función (un grupo de órdenes con un nombre) y da un ejemplo de la vida diaria.",
      "L'alumne/a fa servir una funció ja feta cridant-la amb el seu bloc i prediu on acabarà en Bit.|El alumno/a usa una función ya hecha llamándola con su bloque y predice dónde terminará Bit.",
      "L'alumne/a escriu els blocs d'una funció a partir del tros de camí que es repeteix.|El alumno/a escribe los bloques de una función a partir del trozo de camino que se repite.",
      "L'alumne/a distingeix entre escriure una funció i cridar-la: la funció només es fa quan el programa la crida.|El alumno/a distingue entre escribir una función y llamarla: la función solo se hace cuando el programa la llama."
    ],
    comp: [
      "Competència digital (CD5): crear programes per blocs que fan servir ordres noves definides per l'alumne/a|Competencia digital (CD5): crear programas por bloques que usan órdenes nuevas definidas por el alumno/a",
      "Pensament computacional: abstracció, funcions (definir i cridar) i reutilització|Pensamiento computacional: abstracción, funciones (definir y llamar) y reutilización",
      "Matemàtiques: reconeixement de patrons i orientació en una quadrícula|Matemáticas: reconocimiento de patrones y orientación en una cuadrícula",
      "Comunicació oral: posar noms clars a les coses i explicar què vol dir cada nom|Comunicación oral: poner nombres claros a las cosas y explicar qué quiere decir cada nombre"
    ],
    vocab: [
      ["Funció|Función", "Un grup d'ordres amb un nom. És com una ordre nova.|Un grupo de órdenes con un nombre. Es como una orden nueva."],
      ["Cridar una funció|Llamar a una función", "Posar el seu bloc al programa perquè en Bit la faci.|Poner su bloque en el programa para que Bit la haga."],
      ["Nom de la funció|Nombre de la función", "La paraula que diu què fa la funció: escala, cantonada…|La palabra que dice qué hace la función: escalera, esquina…"],
      ["Escriure una funció|Escribir una función", "Posar a dins els blocs que farà cada vegada que la cridin.|Poner dentro los bloques que hará cada vez que la llamen."],
      ["Bloc lila|Bloque lila", "El bloc de les funcions: un sol bloc que fa la feina de molts.|El bloque de las funciones: un solo bloque que hace el trabajo de muchos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Posa nom a un grup de blocs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Ponle nombre a un grupo de bloques»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5 i les targetes d'ordres de la unitat 1|La cuadrícula del suelo de 5 × 5 y las tarjetas de órdenes de la unidad 1",
        "Un full en blanc per grup, que farà de «llibreta de funcions», i un retolador|Una hoja en blanco por grupo, que hará de «libreta de funciones», y un rotulador"
      ],
      imprimir: ["Targetes de funció|Tarjetas de función", "Quadrícula del terra: missions amb funcions|Cuadrícula del suelo: misiones con funciones"],
      prep: [
        "Imprimir les targetes de funció (millor en paper lila o pintades de lila) i retallar-les: un paquet per grup de 3.|Imprimir las tarjetas de función (mejor en papel lila o pintadas de lila) y recortarlas: un paquete por grupo de 3.",
        "Tenir a punt la quadrícula del terra amb la missió 1 muntada: en Bit a baix a l'esquerra mirant a la dreta i la bandera a dalt a la dreta.|Tener a punto la cuadrícula del suelo con la misión 1 montada: Bit abajo a la izquierda mirando a la derecha y la bandera arriba a la derecha.",
        "Provar abans la demostració de la diapositiva 9 per saber on acaba en Bit (a la A).|Probar antes la demostración de la diapositiva 9 para saber dónde termina Bit (en la A).",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i una ordre misteriosa|Recordamos y una orden misteriosa", fase: 'inici',
        fa: "Fes les preguntes de repàs del «si… si no…» i del bucle. Després pregunta què fan quan a casa els diuen «para taula». Apunta a la pissarra tots els passos que diguin: una sola ordre amaga molts passos. Presenta l'objectiu: avui en Bit aprendrà ordres noves.|Haz las preguntas de repaso del «si… si no…» y del bucle. Después pregunta qué hacen cuando en casa les dicen «pon la mesa». Apunta en la pizarra todos los pasos que digan: una sola orden esconde muchos pasos. Presenta el objetivo: hoy Bit aprenderá órdenes nuevas.",
        diu: ["Quan us diuen «para taula», què feu exactament? Quants passos són?|Cuando os dicen «pon la mesa», ¿qué hacéis exactamente? ¿Cuántos pasos son?",
          "Ningú no us explica plat per plat: ja sabeu què vol dir. Doncs avui en Bit també aprendrà paraules així.|Nadie os explica plato por plato: ya sabéis qué quiere decir. Pues hoy Bit también aprenderá palabras así."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és una funció?|¿Qué es una función?", fase: 'teoria',
        fa: "Explica la funció amb «para taula» i demana més exemples de casa i de l'escola. Mostra com quatre blocs es tanquen dins d'un bloc lila amb nom i com en Bit va a la funció, la fa i torna. A la primera demostració, la classe compta quantes vegades en Bit fa els blocs de la funció. A la segona, cada alumne/a assenyala amb el dit on creu que acabarà abans d'executar-la.|Explica la función con «pon la mesa» y pide más ejemplos de casa y del cole. Muestra cómo cuatro bloques se cierran dentro de un bloque lila con nombre y cómo Bit va a la función, la hace y vuelve. En la primera demostración, la clase cuenta cuántas veces Bit hace los bloques de la función. En la segunda, cada alumno/a señala con el dedo dónde cree que terminará antes de ejecutarla.",
        diu: ["Una funció és una ordre nova feta d'altres ordres. Quines funcions feu cada matí?|Una función es una orden nueva hecha de otras órdenes. ¿Qué funciones hacéis cada mañana?",
          "Quan en Bit troba el bloc lila, on va? I després, on torna?|Cuando Bit encuentra el bloque lila, ¿adónde va? ¿Y después, adónde vuelve?",
          "Si escric la funció però no la crido, què farà en Bit?|Si escribo la función pero no la llamo, ¿qué hará Bit?",
          "Abans d'executar: on acabarà en Bit, a la A, a la B o a la C?|Antes de ejecutar: ¿dónde terminará Bit, en la A, en la B o en la C?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fàbrica d'ordres|La fábrica de órdenes", fase: 'desconnectat',
        fa: "Grups de 3 amb tres papers: programador/a, robot i guardià/ana de la llibreta. El guardià/ana escriu el nom de la funció a dalt del full i hi posa les targetes de la funció (per exemple, l'escala). El programador/a fa el programa amb targetes normals i targetes lila. Quan el robot arriba a una targeta lila, demana la funció al guardià/ana, fa les seves targetes una a una i torna al programa. Feu les missions de la quadrícula i roteu els papers a cada missió.|Grupos de 3 con tres papeles: programador/a, robot y guardián/a de la libreta. El guardián/a escribe el nombre de la función arriba de la hoja y pone en ella las tarjetas de la función (por ejemplo, la escalera). El programador/a hace el programa con tarjetas normales y tarjetas lila. Cuando el robot llega a una tarjeta lila, pide la función al guardián/a, hace sus tarjetas una a una y vuelve al programa. Haced las misiones de la cuadrícula y rotad los papeles en cada misión.",
        diu: ["Robot: quan trobis la targeta lila, digues «crido la funció!» i fes-la sencera.|Robot: cuando encuentres la tarjeta lila, di «¡llamo a la función!» y hazla entera.",
          "Quantes targetes us heu estalviat gràcies a la funció?|¿Cuántas tarjetas os habéis ahorrado gracias a la función?",
          "Quin tros del camí es repeteix? Aquest tros és el que va a la llibreta.|¿Qué trozo del camino se repite? Ese trozo es el que va a la libreta."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a l'«Investiga». Al repte de l'escala ja feta, fixa't en qui intenta posar els blocs a mà: el màxim de 4 blocs l'obliga a fer servir la funció. Al pas «El ball amb nom», que toquin «Ho hem fet!» si ja l'han fet a la fàbrica d'ordres o que el deixin per a casa.|Cada alumno/a abre la sesión y avanza a su ritmo hasta el «Investiga». En el reto de la escalera ya hecha, fíjate en quién intenta poner los bloques a mano: el máximo de 4 bloques le obliga a usar la función. En el paso «El baile con nombre», que toquen «¡Lo hemos hecho!» si ya lo han hecho en la fábrica de órdenes o que lo dejen para casa.",
        diu: ["Quants esglaons hi ha? Doncs quantes vegades has de cridar l'escala?|¿Cuántos escalones hay? Pues, ¿cuántas veces tienes que llamar a la escalera?",
          "A la pregunta «On acabarà?», fes la funció amb el dit dues vegades abans de triar.|En la pregunta «¿Dónde terminará?», haz la función con el dedo dos veces antes de elegir.",
          "A l'«Investiga», la funció està bé. On és l'error, doncs?|En el «Investiga», la función está bien. ¿Dónde está el error, entonces?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: les històries de la llibreta, les targetes de «Descobreix», ordenar els passos de «fes el llit», «El ball amb nom», la funció mitja volta, «On acabarà?» amb la cantonada, l'escala ja feta amb 4 blocs i el bloc equivocat després de l'escala.|De «La misión» hasta «Investiga»: las historias de la libreta, las tarjetas de «Descubre», ordenar los pasos de «haz la cama», «El baile con nombre», la función media vuelta, «¿Dónde terminará?» con la esquina, la escalera ya hecha con 4 bloques y el bloque equivocado después de la escalera.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: escriu la funció|Retos: escribe la función", fase: 'ordinador',
        fa: "Feu la pausa activa de la funció «salutació» tots junts. Després programa amb la classe la funció «baixa l'escala» a la diapositiva 13: primer decidiu entre tots els blocs d'un sol esglaó i després quantes vegades cal cridar-la. Deixa'ls fer els dos reptes. Recorda'ls que per posar blocs dins de la funció cal tocar dins del requadre lila.|Haced la pausa activa de la función «saludo» todos juntos. Después programa con la clase la función «baja la escalera» en la diapositiva 13: primero decidid entre todos los bloques de un solo escalón y después cuántas veces hay que llamarla. Deja que hagan los dos retos. Recuérdales que para poner bloques dentro de la función hay que tocar dentro del recuadro lila.",
        diu: ["Pensa només en un esglaó. Quins blocs té?|Piensa solo en un escalón. ¿Qué bloques tiene?",
          "A la torre, en Bit mira amunt. Per què la mateixa escala ara va cap a l'esquerra?|En la torre, Bit mira arriba. ¿Por qué la misma escalera ahora va hacia la izquierda?",
          "El comptador diu quants blocs fas servir, també els de dins de la funció.|El contador dice cuántos bloques usas, también los de dentro de la función."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els dos reptes: la funció «baixa l'escala» (el programa ja la crida) i la torre del rellotge (funció i programa, màxim 8 blocs).|«Pausa activa» y los dos retos: la función «baja la escalera» (el programa ya la llama) y la torre del reloj (función y programa, máximo 8 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera funció|Crea: mi primera función", fase: 'crea',
        fa: "Cada alumne/a escriu la funció «la meva ordre» i la crida per recollir les 4 estrelles. Quan acabin, per parelles, s'expliquen la funció amb paraules: «la meva ordre vol dir…».|Cada alumno/a escribe la función «mi orden» y la llama para recoger las 4 estrellas. Cuando terminen, por parejas, se explican la función con palabras: «mi orden quiere decir…».",
        diu: ["Explica'm la teva funció sense ensenyar-me la pantalla.|Explícame tu función sin enseñarme la pantalla.",
          "Quantes vegades la crides? Podries cridar-la més vegades i fer servir menys blocs?|¿Cuántas veces la llamas? ¿Podrías llamarla más veces y usar menos bloques?"],
        slides: ['s15'], app: "Pas «Crea»: La meva primera funció.|Paso «Crea»: Mi primera función.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum i deixa que responguin les preguntes finals de l'app. A la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas de la sesión con el resumen y deja que respondan las preguntas finales de la app. En la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Digueu-me una funció de casa i quins passos té.|Decidme una función de casa y qué pasos tiene.",
          "Quan fa en Bit els blocs d'una funció?|¿Cuándo hace Bit los bloques de una función?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Escriu els blocs dins de la funció, però el programa queda buit i en Bit no es mou.|Escribe los bloques dentro de la función, pero el programa queda vacío y Bit no se mueve.",
        "Pregunta: qui crida la funció? Recorda-li la llibreta: la funció espera fins que el programa posa el seu bloc lila.|Pregunta: ¿quién llama a la función? Recuérdale la libreta: la función espera hasta que el programa pone su bloque lila."],
      ["Posa al programa els blocs que havien d'anar a dins de la funció.|Pone en el programa los bloques que tenían que ir dentro de la función.",
        "Que busqui la ratlla «els blocs nous van aquí»: és on aniran els blocs. Per escriure a la funció, cal tocar dins del requadre lila.|Que busque la raya «los bloques nuevos van aquí»: es donde irán los bloques. Para escribir en la función, hay que tocar dentro del recuadro lila."],
      ["Posa tot el camí dins de la funció en lloc d'un sol esglaó.|Pone todo el camino dentro de la función en lugar de un solo escalón.",
        "Demana-li que assenyali al mapa un sol esglaó amb el dit. Quins blocs calen per a aquest tros? Això és la funció.|Pídele que señale en el mapa un solo escalón con el dedo. ¿Qué bloques hacen falta para ese trozo? Eso es la función."],
      ["No entén per què la mateixa funció fa pujar en Bit cap a un altre costat a la torre.|No entiende por qué la misma función hace subir a Bit hacia otro lado en la torre.",
        "Que es posi al lloc d'en Bit, com a la unitat 1: mira cap on mira ell i fa la funció amb el cos.|Que se ponga en el lugar de Bit, como en la unidad 1: mira hacia donde mira él y hace la función con el cuerpo."],
      ["Se sorprèn que el comptador digui més blocs dels que veu al programa.|Le sorprende que el contador diga más bloques de los que ve en el programa.",
        "Explica que el comptador també suma els blocs de dins de les funcions que escriu. Compteu-los junts amb el dit.|Explica que el contador también suma los bloques de dentro de las funciones que escribe. Contadlos juntos con el dedo."]
    ],
    diff: {
      mes: "Fer la torre amb una funció de dos esglaons (8 blocs a dins i 2 crides) i comparar-la amb la d'un esglaó: quina fa servir menys blocs? Després, inventar una funció per a la quadrícula del terra perquè un company/a endevini on acabarà el robot.|Hacer la torre con una función de dos escalones (8 bloques dentro y 2 llamadas) y compararla con la de un escalón: ¿cuál usa menos bloques? Después, inventar una función para la cuadrícula del suelo para que un compañero/a adivine dónde terminará el robot.",
      menys: "Tenir al costat de l'ordinador les quatre targetes de l'escala sobre una targeta lila: primer les mira i després les copia dins de la funció. Començar pel repte de la funció ja feta i dir en veu alta «crido l'escala» cada vegada que posa el bloc lila.|Tener al lado del ordenador las cuatro tarjetas de la escalera sobre una tarjeta lila: primero las mira y después las copia dentro de la función. Empezar por el reto de la función ya hecha y decir en voz alta «llamo a la escalera» cada vez que pone el bloque lila."
    },
    aval: {
      ticket: ["Què és una funció? Digues-ne un exemple de casa.|¿Qué es una función? Di un ejemplo de casa.",
        "Si escric una funció però no la crido, què fa en Bit?|Si escribo una función pero no la llamo, ¿qué hace Bit?"],
      rubric: [
        ["Concepte de funció|Concepto de función", "Explica que és un grup d'ordres amb un nom i en dona un exemple propi.|Explica que es un grupo de órdenes con un nombre y da un ejemplo propio.", "Reconeix una funció en un exemple, però encara no l'explica amb les seves paraules.|Reconoce una función en un ejemplo, pero todavía no la explica con sus palabras."],
        ["Cridar una funció|Llamar a una función", "Fa servir el bloc lila les vegades que cal i prediu bé on acaba en Bit.|Usa el bloque lila las veces que hace falta y predice bien dónde termina Bit.", "Fa servir la funció, però de vegades oblida cridar-la o compta malament les crides.|Usa la función, pero a veces olvida llamarla o cuenta mal las llamadas."],
        ["Escriure una funció|Escribir una función", "Troba el tros que es repeteix i l'escriu dins de la funció sense ajuda.|Encuentra el trozo que se repite y lo escribe dentro de la función sin ayuda.", "Escriu la funció amb ajuda o hi posa més blocs dels necessaris.|Escribe la función con ayuda o pone más bloques de los necesarios."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts l'activitat «El ball amb nom»: inventeu tres moviments, poseu-los un nom i feu un programa que el faci servir.|En casa, con el móvil, podéis repetir la sesión y hacer juntos la actividad «El baile con nombre»: inventad tres movimientos, ponedles un nombre y haced un programa que lo use.",
    slides: [
      { id: 's1', k: 'portada', t: 'Posa nom a un grup de blocs|Ponle nombre a un grupo de bloques', x: "Avui en Bit aprendrà ordres noves: les funcions.|Hoy Bit aprenderá órdenes nuevas: las funciones.",
        nota: "Explica que comença una unitat nova: al final, en Bit farà encàrrecs per tota la ciutat amb ordres que inventaran ells.|Explica que empieza una unidad nueva: al final, Bit hará encargos por toda la ciudad con órdenes que inventarán ellos." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', punts: ["Si hi ha un obstacle davant: Gira a la dreta. Si no: Endavant.|Si hay un obstáculo delante: Gira a la derecha. Si no: Adelante.", "Repeteix 3 vegades: Endavant, Endavant.|Repite 3 veces: Adelante, Adelante."],
        nota: "Respostes: si hi ha obstacle, gira (i no avança); el bucle fa 6 passos. Recorda que avui tot això es pot posar dins d'una funció.|Respuestas: si hay obstáculo, gira (y no avanza); el bucle hace 6 pasos. Recuerda que hoy todo esto se puede poner dentro de una función." },
      { id: 's3', k: 'pregunta', t: 'Què vol dir «para taula»?|¿Qué quiere decir «pon la mesa»?', x: "Una sola ordre… quants passos amaga?|Una sola orden… ¿cuántos pasos esconde?",
        nota: "Apunta a la pissarra els passos que diguin. Remarca que ningú no els explica cada dia: ja saben què vol dir.|Apunta en la pizarra los pasos que digan. Remarca que nadie se los explica cada día: ya saben qué quiere decir." },
      { id: 's4', k: 'anim', t: "Una ordre feta d'altres ordres|Una orden hecha de otras órdenes", anim: 'u5recipe', x: "Una funció és una ordre nova feta d'altres ordres.|Una función es una orden nueva hecha de otras órdenes.",
        nota: "Fes notar que «Para taula» és el nom i les quatre línies són el que hi ha a dins.|Haz notar que «Pon la mesa» es el nombre y las cuatro líneas son lo que hay dentro." },
      { id: 's5', k: 'pregunta', t: 'Funcions de cada dia|Funciones de cada día', punts: ["Fes el llit|Haz la cama", "Renta't les mans|Lávate las manos", "Prepara la motxilla|Prepara la mochila"],
        nota: "Tria'n una i digueu entre tots els passos que té a dins. Pregunta: si en canviem un pas, canvia tota la funció?|Elige una y decid entre todos los pasos que tiene dentro. Pregunta: si cambiamos un paso, ¿cambia toda la función?" },
      { id: 's6', k: 'anim', t: 'Un grup de blocs amb nom|Un grupo de bloques con nombre', anim: 'u5pack', x: "Quatre blocs es diuen «escala»: ara un sol bloc lila fa la feina dels quatre.|Cuatro bloques se llaman «escalera»: ahora un solo bloque lila hace el trabajo de los cuatro.",
        nota: "Demana que llegeixin els quatre blocs en veu alta i que expliquin per què «escala» és un bon nom.|Pide que lean los cuatro bloques en voz alta y que expliquen por qué «escalera» es un buen nombre." },
      { id: 's7', k: 'anim', t: 'Cridar una funció|Llamar a una función', anim: 'u5call', x: "En Bit va a la funció, en fa tots els blocs i torna al programa.|Bit va a la función, hace todos sus bloques y vuelve al programa.",
        nota: "Segueix el requadre groc amb el dit: programa, funció, i torna. Insisteix que la funció només es fa quan se la crida.|Sigue el recuadro amarillo con el dedo: programa, función, y vuelve. Insiste en que la función solo se hace cuando se la llama." },
      { id: 's8', k: 'demo', t: 'En Bit fa servir la funció|Bit usa la función', x: "La funció A és l'escala. Programa: Funció A, Funció A, Endavant.|La función A es la escalera. Programa: Función A, Función A, Adelante.",
        demo: { w: { map: ['..#F', '.##.', '>#..'] }, prog: 'A A f', fns: { A: 'f l f r' } },
        nota: "Abans d'executar, demana quants blocs farà en Bit en total (9). Després compteu-los mentre s'il·luminen.|Antes de ejecutar, pide cuántos bloques hará Bit en total (9). Después contadlos mientras se iluminan." },
      { id: 's9', k: 'demo', t: 'Pensa abans d\'executar|Piensa antes de ejecutar', x: "La funció A és: Endavant, Endavant, Gira a la dreta. El programa la crida dues vegades. On acabarà en Bit: A, B o C?|La función A es: Adelante, Adelante, Gira a la derecha. El programa la llama dos veces. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['.C...', '.#...', '.B#A.', '.#...', '.^...'] }, prog: 'A A', fns: { A: 'f f r' } },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: A. Qui ha dit B ha fet la funció només una vegada; qui ha dit C ha oblidat el gir.|Que todos señalen con el dedo antes de ejecutar. Respuesta: A. Quien ha dicho B ha hecho la función solo una vez; quien ha dicho C ha olvidado el giro." },
      { id: 's10', k: 'activitat', t: "La fàbrica d'ordres|La fábrica de órdenes", timer: 12, punts: ["Guardià/ana: escriu el nom de la funció i hi posa les targetes.|Guardián/a: escribe el nombre de la función y pone las tarjetas.", "Programador/a: fa el programa amb targetes normals i lila.|Programador/a: hace el programa con tarjetas normales y lila.", "Robot: a cada targeta lila, fa la funció sencera i torna.|Robot: en cada tarjeta lila, hace la función entera y vuelve.", "Canvieu els papers a cada missió.|Cambiad los papeles en cada misión."],
        nota: "Comenceu tots junts amb la missió 1 perquè vegin com funciona la llibreta. Després, cada grup al seu ritme.|Empezad todos juntos con la misión 1 para que vean cómo funciona la libreta. Después, cada grupo a su ritmo." },
      { id: 's11', k: 'concepte', t: 'Les regles de la llibreta|Las reglas de la libreta', punts: ["La funció té un nom i unes targetes a dins.|La función tiene un nombre y unas tarjetas dentro.", "Al programa, la funció és una sola targeta lila.|En el programa, la función es una sola tarjeta lila.", "La funció es fa cada vegada que surt la targeta lila.|La función se hace cada vez que sale la tarjeta lila.", "Després de la funció, el robot torna al programa.|Después de la función, el robot vuelve al programa."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen a la quadrícula.|Deja esta diapositiva proyectada mientras trabajan en la cuadrícula." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Posa nom a un grup de blocs».|Abre la sesión «Ponle nombre a un grupo de bloques».", "A «On acabarà?», fes la funció amb el dit abans de triar.|En «¿Dónde terminará?», haz la función con el dedo antes de elegir.", "A l'escala ja feta, només tens 4 blocs!|En la escalera ya hecha, ¡solo tienes 4 bloques!", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Passeja i pregunta a qui s'encalla: quants esglaons hi ha? quantes vegades cal cridar la funció?|Pasea y pregunta a quien se atasque: ¿cuántos escalones hay? ¿cuántas veces hay que llamar a la función?" },
      { id: 's13', k: 'demo', t: 'Programem junts la funció|Programemos juntos la función', x: "Quins blocs té un sol esglaó de baixada? Quantes vegades l'hem de cridar?|¿Qué bloques tiene un solo escalón de bajada? ¿Cuántas veces tenemos que llamarlo?",
        demo: { w: { map: ['>#..', '.##.', '..##', '...F'] }, prog: 'A A A', fns: { A: 'f r f l' } },
        nota: "Escriu a la pissarra la funció que dicti la classe (Endavant, Gira a la dreta, Endavant, Gira a l'esquerra) i el programa (tres crides). Executa la demo per comprovar-ho.|Escribe en la pizarra la función que dicte la clase (Adelante, Gira a la derecha, Adelante, Gira a la izquierda) y el programa (tres llamadas). Ejecuta la demo para comprobarlo." },
      { id: 's14', k: 'repte', t: 'Reptes: escriu la funció|Retos: escribe la función', timer: 10, punts: ["1. Baixa l'escala: el programa ja crida la funció.|1. Baja la escalera: el programa ya llama a la función.", "2. La torre del rellotge: funció i programa, màxim 8 blocs.|2. La torre del reloj: función y programa, máximo 8 bloques."],
        nota: "Recorda'ls que per escriure dins de la funció cal tocar dins del requadre lila. Pista per a la torre: en Bit mira amunt.|Recuérdales que para escribir dentro de la función hay que tocar dentro del recuadro lila. Pista para la torre: Bit mira arriba." },
      { id: 's15', k: 'activitat', t: 'Crea: la meva primera funció|Crea: mi primera función', timer: 5, x: "Escriu la funció «la meva ordre» i crida-la per recollir les 4 estrelles. Després explica-la a un company/a.|Escribe la función «mi orden» y llámala para recoger las 4 estrellas. Después explícasela a un compañero/a.",
        nota: "Celebra les funcions diferents: hi ha qui fa un esglaó i qui en fa dos de cop. Totes valen si funcionen.|Celebra las funciones diferentes: hay quien hace un escalón y quien hace dos de golpe. Todas valen si funcionan." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una funció és un grup de blocs amb un nom.|Una función es un grupo de bloques con un nombre.", "Cridar la funció és posar el seu bloc lila al programa.|Llamar a la función es poner su bloque lila en el programa.", "Una funció escrita una vegada es pot cridar moltes vegades.|Una función escrita una vez se puede llamar muchas veces."],
        nota: "Torna a «para taula»: ara saben que és una funció de la vida real.|Vuelve a «pon la mesa»: ahora saben que es una función de la vida real." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és una funció? Digues-ne un exemple de casa.|¿Qué es una función? Di un ejemplo de casa.", "Si escric una funció però no la crido, què fa en Bit?|Si escribo una función pero no la llamo, ¿qué hace Bit?"],
        nota: "Respostes: un grup d'ordres amb nom (para taula, fes el llit…); res, la funció només es fa quan es crida.|Respuestas: un grupo de órdenes con nombre (pon la mesa, haz la cama…); nada, la función solo se hace cuando se llama." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de funció|Tarjetas de función', k: 'targetes',
        intro: "Un paquet per grup de 3, millor en paper lila. Les targetes amb nom van al programa; la «llibreta» és un full on el guardià/ana posa les targetes de dins de la funció. Les targetes d'ordres són les de la unitat 1.|Un paquete por grupo de 3, mejor en papel lila. Las tarjetas con nombre van al programa; la «libreta» es una hoja donde el guardián/a pone las tarjetas de dentro de la función. Las tarjetas de órdenes son las de la unidad 1.",
        items: [
          { t: 'Funció escala 🪜|Función escalera 🪜', n: 4 },
          { t: 'Funció cantonada ↱|Función esquina ↱', n: 3 },
          { t: 'Funció ____ ✏️|Función ____ ✏️', n: 4 },
          { t: 'Llibreta de funcions 📒|Libreta de funciones 📒', n: 1 },
          { t: 'Crido la funció! 📣|¡Llamo a la función! 📣', n: 1 }
        ] },
      { id: 'p2', t: 'Quadrícula del terra: missions amb funcions|Cuadrícula del suelo: misiones con funciones', k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5 de la unitat 1. Abans de moure el robot, escriviu la funció a la llibreta i el programa amb targetes lila.|Usad la cuadrícula de 5 × 5 de la unidad 1. Antes de mover el robot, escribid la función en la libreta y el programa con tarjetas lila.",
        items: [
          { t: "Missió 1: l'escala|Misión 1: la escalera", w: 5, h: 5, cells: ['R...F', '.....', '.....', '.....', '>...R'],
            instructions: "La funció escala és: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Quantes vegades l'heu de cridar per arribar a la bandera?|La función escalera es: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Cuántas veces tenéis que llamarla para llegar a la bandera?",
            sol: 'A A A A', solFns: { A: 'f l f r' } },
          { t: 'Missió 2: la cantonada|Misión 2: la esquina', w: 5, h: 5, cells: ['>....', '.R...', 'F....', '.....', '.....'],
            instructions: "La funció cantonada és: Endavant, Endavant, Gira a la dreta. Feu un programa només amb targetes lila que porti el robot a la bandera.|La función esquina es: Adelante, Adelante, Gira a la derecha. Haced un programa solo con tarjetas lila que lleve al robot a la bandera.",
            sol: 'A A A', solFns: { A: 'f f r' } },
          { t: 'Missió 3: inventeu la funció|Misión 3: inventad la función', w: 5, h: 5, cells: ['>...R', '.....', '.....', '.....', 'R...F'],
            instructions: "Ara la funció la inventeu vosaltres. Busqueu el tros que es repeteix per baixar en diagonal, poseu-li nom i escriviu-lo a la llibreta.|Ahora la función la inventáis vosotros. Buscad el trozo que se repite para bajar en diagonal, ponedle nombre y escribidlo en la libreta.",
            sol: 'A A A A', solFns: { A: 'f r f l' } }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Funcions dins de bucles ---------- */
  'r5-2': {
    obj: [
      "L'alumne/a posa una funció dins d'un bucle i tria el nombre de repeticions comptant els trossos del camí.|El alumno/a pone una función dentro de un bucle y elige el número de repeticiones contando los trozos del camino.",
      "L'alumne/a prediu on acabarà en Bit amb un bucle que crida una funció.|El alumno/a predice dónde terminará Bit con un bucle que llama a una función.",
      "L'alumne/a explica que un error dins d'una funció es repeteix cada vegada que la funció es crida.|El alumno/a explica que un error dentro de una función se repite cada vez que la función se llama.",
      "L'alumne/a arregla una funció amb un error canviant-la en un sol lloc.|El alumno/a arregla una función con un error cambiándola en un solo sitio."
    ],
    comp: [
      "Competència digital (CD5): combinar estructures de programació (bucles i funcions) per resoldre un problema|Competencia digital (CD5): combinar estructuras de programación (bucles y funciones) para resolver un problema",
      "Pensament computacional: composició de funcions i bucles, depuració dins de funcions|Pensamiento computacional: composición de funciones y bucles, depuración dentro de funciones",
      "Matemàtiques: patrons que es repeteixen i multiplicació com a suma repetida|Matemáticas: patrones que se repiten y multiplicación como suma repetida",
      "Aprendre a aprendre: buscar la causa d'un error que es repeteix|Aprender a aprender: buscar la causa de un error que se repite"
    ],
    vocab: [
      ["Bucle|Bucle", "Un bloc que repeteix els blocs de dins tantes vegades com diu el número.|Un bloque que repite los bloques de dentro tantas veces como dice el número."],
      ["Funció dins d'un bucle|Función dentro de un bucle", "El bucle crida la funció a cada volta.|El bucle llama a la función en cada vuelta."],
      ["Esglaó|Escalón", "Cada tros de l'escala: el que fa la funció una vegada.|Cada trozo de la escalera: lo que hace la función una vez."],
      ["Bug a la funció|Bug en la función", "Un error dins de la funció: surt cada vegada que la crides.|Un error dentro de la función: sale cada vez que la llamas."],
      ["Arreglar en un sol lloc|Arreglar en un solo sitio", "Canviar la funció una vegada perquè quedin bé totes les crides.|Cambiar la función una vez para que queden bien todas las llamadas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Funcions dins de bucles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Funciones dentro de bucles»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes d'ordres de la unitat 1 i les targetes de funció de la sessió 1|La cuadrícula del suelo, las tarjetas de órdenes de la unidad 1 y las tarjetas de función de la sesión 1",
        "Una estrella de paper per marcar el cim i una bandera|Una estrella de papel para marcar la cima y una bandera"
      ],
      imprimir: ["Targetes de bucle i de bug|Tarjetas de bucle y de bug", "Quadrícula del terra: bucles amb funcions|Cuadrícula del suelo: bucles con funciones"],
      prep: [
        "Imprimir i retallar les targetes de bucle (verdes) i les de bug: un paquet per grup de 3.|Imprimir y recortar las tarjetas de bucle (verdes) y las de bug: un paquete por grupo de 3.",
        "Preparar una «funció amb bug» per a cada grup: la funció zig-zag de la missió 2 amb el segon gir canviat.|Preparar una «función con bug» para cada grupo: la función zigzag de la misión 2 con el segundo giro cambiado.",
        "Provar abans la demostració de la diapositiva 8 (en Bit acaba a la A).|Probar antes la demostración de la diapositiva 8 (Bit termina en la A).",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'escala del mirador|Recordamos y la escalera del mirador", fase: 'inici',
        fa: "Fes la pregunta de repàs de la funció «salt». Explica la missió: per arribar al mirador cal una escala llarguíssima. Pregunta com ho farien amb el que saben: amb blocs solts, amb una funció o amb un bucle.|Haz la pregunta de repaso de la función «salto». Explica la misión: para llegar al mirador hace falta una escalera larguísima. Pregunta cómo lo harían con lo que saben: con bloques sueltos, con una función o con un bucle.",
        diu: ["Si la funció salt té dos Endavant i la crido dues vegades, quantes caselles avança en Bit?|Si la función salto tiene dos Adelante y la llamo dos veces, ¿cuántas casillas avanza Bit?",
          "Una escala de 5 esglaons: com la faríeu amb el mínim de blocs?|Una escalera de 5 escalones: ¿cómo la haríais con el mínimo de bloques?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Funcions dins de bucles|Funciones dentro de bucles", fase: 'teoria',
        fa: "Mostra l'animació de la funció dins del bucle i compteu en veu alta cada volta. A la primera demostració, que la classe digui «escala!» cada vegada que el bucle crida la funció. Explica amb l'animació del bug que un error a la funció surt a totes les crides i s'arregla en un sol lloc. Amb la muntanya, descobriu que la mateixa funció serveix per pujar i per baixar. Acaba amb la predicció de la cantonada.|Muestra la animación de la función dentro del bucle y contad en voz alta cada vuelta. En la primera demostración, que la clase diga «¡escalera!» cada vez que el bucle llama a la función. Explica con la animación del bug que un error en la función sale en todas las llamadas y se arregla en un solo sitio. Con la montaña, descubrid que la misma función sirve para subir y para bajar. Acaba con la predicción de la esquina.",
        diu: ["Quantes vegades farà en Bit els blocs de la funció si el bucle diu 3?|¿Cuántas veces hará Bit los bloques de la función si el bucle dice 3?",
          "Si la funció té un gir equivocat, quantes vegades s'equivocarà en Bit?|Si la función tiene un giro equivocado, ¿cuántas veces se equivocará Bit?",
          "Per què la mateixa escala fa baixar en Bit després de girar?|¿Por qué la misma escalera hace bajar a Bit después de girar?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'escala humana i el bug que es repeteix|La escalera humana y el bug que se repite", fase: 'desconnectat',
        fa: "Grups de 3: programador/a, robot i guardià/ana de la llibreta. Primer fan la missió 1 amb una targeta de bucle i una de funció. A la missió 2, el guardià/ana rep una funció amb un bug (la que has preparat): el robot la fa i el grup observa que l'error surt a cada volta del bucle. Han de trobar-lo i canviar només una targeta de la llibreta. La missió 3 és la muntanya amb la mateixa funció per pujar i baixar.|Grupos de 3: programador/a, robot y guardián/a de la libreta. Primero hacen la misión 1 con una tarjeta de bucle y una de función. En la misión 2, el guardián/a recibe una función con un bug (la que has preparado): el robot la hace y el grupo observa que el error sale en cada vuelta del bucle. Tienen que encontrarlo y cambiar solo una tarjeta de la libreta. La misión 3 es la montaña con la misma función para subir y bajar.",
        diu: ["L'error surt a la primera volta? I a la segona? On deu ser, doncs?|¿El error sale en la primera vuelta? ¿Y en la segunda? ¿Dónde estará, entonces?",
          "Canvieu una sola targeta de la llibreta i torneu-ho a provar.|Cambiad una sola tarjeta de la libreta y volved a probar.",
          "Quantes targetes té el vostre programa? I quantes en tindria sense funció ni bucle?|¿Cuántas tarjetas tiene vuestro programa? ¿Y cuántas tendría sin función ni bucle?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a l'«Investiga» de l'escala que es queda curta. A l'activitat «El ball que es repeteix», que toquin «Ho hem fet!» si l'han fet al terra o que la deixin per a casa. Fixa't en qui a la predicció només fa la funció una vegada: demana-li que compti les voltes amb els dits.|Cada alumno/a hace la sesión hasta el «Investiga» de la escalera que se queda corta. En la actividad «El baile que se repite», que toquen «¡Lo hemos hecho!» si lo han hecho en el suelo o que la dejen para casa. Fíjate en quién en la predicción solo hace la función una vez: pídele que cuente las vueltas con los dedos.",
        diu: ["Quantes voltes fa el bucle? Compta-les amb els dits mentre segueixes en Bit.|¿Cuántas vueltas da el bucle? Cuéntalas con los dedos mientras sigues a Bit.",
          "La funció està bé i en Bit es queda curt. Què més pot fallar?|La función está bien y Bit se queda corto. ¿Qué más puede fallar?"],
        slides: ['s11'], app: "Pregunta de «Recorda», les dues històries del mirador, les targetes de «Descobreix», ordenar els passos del programador/a, «El ball que es repeteix», «On acabarà?» amb la cantonada i l'«Investiga» del número del bucle.|Pregunta de «Recuerda», las dos historias del mirador, las tarjetas de «Descubre», ordenar los pasos del programador/a, «El baile que se repite», «¿Dónde terminará?» con la esquina y el «Investiga» del número del bucle.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: escales, repartiments i un bug|Retos: escaleras, repartos y un bug", fase: 'ordinador',
        fa: "Feu la pausa activa dels esglaons tots junts. Després programa amb la classe la pujada al mirador (diapositiva 12): una funció i un bucle, només dos blocs. Deixa'ls fer els quatre reptes. Al del zig-zag, demana que facin «Pas a pas» per veure que l'error surt a cada volta.|Haced la pausa activa de los escalones todos juntos. Después programa con la clase la subida al mirador (diapositiva 12): una función y un bucle, solo dos bloques. Deja que hagan los cuatro retos. En el del zigzag, pide que hagan «Paso a paso» para ver que el error sale en cada vuelta.",
        diu: ["Per posar la funció dins del bucle, primer posa el Repeteix i després el bloc lila.|Para poner la función dentro del bucle, primero pon el Repite y después el bloque lila.",
          "En Bit dona voltes: és un error del programa o de la funció?|Bit da vueltas: ¿es un error del programa o de la función?",
          "A la muntanya, què ha de fer en Bit quan arriba al cim?|En la montaña, ¿qué tiene que hacer Bit cuando llega a la cima?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: el mirador (2 blocs), el mercat (escriure la funció reparteix), el zig-zag amb bug i la muntanya (5 blocs).|«Pausa activa» y los cuatro retos: el mirador (2 bloques), el mercado (escribir la función reparte), el zigzag con bug y la montaña (5 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: les onades de la platja|Crea: las olas de la playa", fase: 'crea',
        fa: "Cada alumne/a inventa la funció «tros» i la posa dins d'un bucle per recollir les tres estrelles. Per parelles, s'ensenyen el programa i el company/a diu quantes vegades es farà la funció abans d'executar-lo.|Cada alumno/a inventa la función «trozo» y la pone dentro de un bucle para recoger las tres estrellas. Por parejas, se enseñan el programa y el compañero/a dice cuántas veces se hará la función antes de ejecutarlo.",
        diu: ["Quina forma té el teu tros: una escala, una onada…?|¿Qué forma tiene tu trozo: una escalera, una ola…?",
          "Abans d'executar el del company/a: quantes vegades es farà la funció?|Antes de ejecutar el del compañero/a: ¿cuántas veces se hará la función?"],
        slides: ['s14'], app: "Pas «Crea»: Les onades de la platja.|Paso «Crea»: Las olas de la playa.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Si una funció té un error i la crido 4 vegades, quantes vegades surt l'error?|Si una función tiene un error y la llamo 4 veces, ¿cuántas veces sale el error?",
          "I quants llocs he d'arreglar?|¿Y cuántos sitios tengo que arreglar?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el bloc de la funció a sota del bucle i no a dins.|Pone el bloque de la función debajo del bucle y no dentro.",
        "Que executi pas a pas i compti quantes vegades es fa la funció. Si només es fa una vegada, on ha de ser el bloc lila?|Que ejecute paso a paso y cuente cuántas veces se hace la función. Si solo se hace una vez, ¿dónde tiene que estar el bloque lila?"],
      ["Posa al bucle el nombre de blocs de la funció en lloc del nombre d'esglaons.|Pone en el bucle el número de bloques de la función en lugar del número de escalones.",
        "Demana-li que compti els esglaons del mapa amb el dit: aquest és el número del bucle. Els blocs de dins de la funció no compten aquí.|Pídele que cuente los escalones del mapa con el dedo: ese es el número del bucle. Los bloques de dentro de la función no cuentan aquí."],
      ["Quan en Bit s'equivoca, canvia el programa principal en lloc de la funció.|Cuando Bit se equivoca, cambia el programa principal en lugar de la función.",
        "Pregunta: l'error surt una vegada o a cada volta? Si surt a cada volta, el bloc equivocat és dins de la funció.|Pregunta: ¿el error sale una vez o en cada vuelta? Si sale en cada vuelta, el bloque equivocado está dentro de la función."],
      ["A la muntanya fa dues funcions diferents per pujar i baixar i es queda sense blocs.|En la montaña hace dos funciones distintas para subir y bajar y se queda sin bloques.",
        "Que provi la mateixa escala després de girar cap avall. Recorda-li que la funció es fa des d'on és en Bit i cap on mira.|Que pruebe la misma escalera después de girar hacia abajo. Recuérdale que la función se hace desde donde está Bit y hacia donde mira."],
      ["A la funció reparteix posa Agafa abans d'arribar a la caixa.|En la función reparte pone Coge antes de llegar a la caja.",
        "Que faci un sol encàrrec pas a pas: on és en Bit quan fa Agafa? Com a la unitat 1, primer cal arribar a la caixa.|Que haga un solo encargo paso a paso: ¿dónde está Bit cuando hace Coge? Como en la unidad 1, primero hay que llegar a la caja."]
    ],
    diff: {
      mes: "Fer la muntanya amb només 4 blocs (pista: el bucle de pujada i el gir es poden repetir dues vegades). Després, dissenyar al paper una escala amb un bug a la funció perquè un company/a el trobi.|Hacer la montaña con solo 4 bloques (pista: el bucle de subida y el giro se pueden repetir dos veces). Después, diseñar en papel una escalera con un bug en la función para que un compañero/a lo encuentre.",
      menys: "Treballar amb les targetes al costat: la targeta verda del bucle amb la targeta lila a sobre, i la llibreta amb els blocs de la funció. Començar pel mirador comptant els esglaons amb el dit i posar aquest número al bucle.|Trabajar con las tarjetas al lado: la tarjeta verde del bucle con la tarjeta lila encima, y la libreta con los bloques de la función. Empezar por el mirador contando los escalones con el dedo y poner ese número en el bucle."
    },
    aval: {
      ticket: ["Si una funció té un error i el bucle la crida 4 vegades, quantes vegades surt l'error?|Si una función tiene un error y el bucle la llama 4 veces, ¿cuántas veces sale el error?",
        "Com faries pujar en Bit 6 esglaons amb només 2 blocs al programa?|¿Cómo harías subir a Bit 6 escalones con solo 2 bloques en el programa?"],
      rubric: [
        ["Funció dins d'un bucle|Función dentro de un bucle", "Posa la funció dins del bucle i tria el número comptant els trossos del camí.|Pone la función dentro del bucle y elige el número contando los trozos del camino.", "Fa servir el bucle i la funció, però de vegades la funció queda fora o el número no és el bo.|Usa el bucle y la función, pero a veces la función queda fuera o el número no es el correcto."],
        ["Predir|Predecir", "Segueix totes les voltes del bucle i encerta on acaba en Bit.|Sigue todas las vueltas del bucle y acierta dónde termina Bit.", "Fa bé la primera volta, però es perd a les següents.|Hace bien la primera vuelta, pero se pierde en las siguientes."],
        ["Depurar una funció|Depurar una función", "Veu que l'error es repeteix, el busca dins de la funció i l'arregla en un sol lloc.|Ve que el error se repite, lo busca dentro de la función y lo arregla en un solo sitio.", "Arregla l'error amb ajuda o canvia el programa principal abans de mirar la funció.|Arregla el error con ayuda o cambia el programa principal antes de mirar la función."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El ball que es repeteix»: inventeu un pas de ball, repetiu-lo 4 vegades i canvieu-ne una cosa per veure que el canvi surt a totes les vegades.|En casa, con el móvil, podéis repetir la sesión y hacer «El baile que se repite»: inventad un paso de baile, repetidlo 4 veces y cambiad algo para ver que el cambio sale todas las veces.",
    slides: [
      { id: 's1', k: 'portada', t: 'Funcions dins de bucles|Funciones dentro de bucles', x: "Avui en Bit pujarà al mirador amb una funció i un bucle.|Hoy Bit subirá al mirador con una función y un bucle.",
        nota: "Explica que avui combinaran dues coses que ja saben: els bucles de la unitat 2 i les funcions de la setmana passada.|Explica que hoy combinarán dos cosas que ya saben: los bucles de la unidad 2 y las funciones de la semana pasada." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "La funció salt és: Endavant, Endavant. Programa: Funció salt, Funció salt. Quantes caselles avança en Bit?|La función salto es: Adelante, Adelante. Programa: Función salto, Función salto. ¿Cuántas casillas avanza Bit?",
        nota: "Resposta: 4. Cada crida fa els dos Endavant de la funció.|Respuesta: 4. Cada llamada hace los dos Adelante de la función." },
      { id: 's3', k: 'pregunta', t: "L'escala del mirador|La escalera del mirador", x: "Una escala de 5 esglaons. Com la faríeu amb el mínim de blocs?|Una escalera de 5 escalones. ¿Cómo la haríais con el mínimo de bloques?",
        nota: "Recull propostes: blocs solts (20), funció cridada 5 vegades (9), bucle amb la funció a dins (6). Torna-hi al final de la teoria.|Recoge propuestas: bloques sueltos (20), función llamada 5 veces (9), bucle con la función dentro (6). Vuelve a ello al final de la teoría." },
      { id: 's4', k: 'anim', t: "Una funció dins d'un bucle|Una función dentro de un bucle", anim: 'u5loopfn', x: "Repeteix 3 vegades: Funció escala. Tres esglaons amb dos blocs.|Repite 3 veces: Función escalera. Tres escalones con dos bloques.",
        nota: "Compteu en veu alta cada esglaó que puja en Bit: u, dos, tres.|Contad en voz alta cada escalón que sube Bit: uno, dos, tres." },
      { id: 's5', k: 'demo', t: 'Tres esglaons i tres estrelles|Tres escalones y tres estrellas', x: "La funció A és l'escala. Programa: Repeteix 3 vegades: Funció A. Després, Endavant.|La función A es la escalera. Programa: Repite 3 veces: Función A. Después, Adelante.",
        demo: { w: { map: ['...*F', '..*#.', '.*#..', '>#...'] }, prog: '3{ A } f', fns: { A: 'f l f r' } },
        nota: "Que la classe digui «escala!» cada vegada que s'il·lumina el bloc lila.|Que la clase diga «¡escalera!» cada vez que se ilumina el bloque lila." },
      { id: 's6', k: 'anim', t: 'Un error a la funció surt cada vegada|Un error en la función sale cada vez', anim: 'u5bugfn', x: "I s'arregla en un sol lloc: dins de la funció.|Y se arregla en un solo sitio: dentro de la función.",
        nota: "Pregunta: si l'error fos al programa i no a la funció, sortiria tres vegades? Fes-los notar la diferència.|Pregunta: si el error estuviera en el programa y no en la función, ¿saldría tres veces? Hazles notar la diferencia." },
      { id: 's7', k: 'demo', t: 'La mateixa funció, en dos llocs|La misma función, en dos sitios', x: "Repeteix 2 vegades A, Gira a la dreta, Repeteix 2 vegades A. La funció A és l'escala.|Repite 2 veces A, Gira a la derecha, Repite 2 veces A. La función A es la escalera.",
        demo: { w: { map: ['..*..', '.###.', '>#.#F'] }, prog: '2{ A } r 2{ A }', fns: { A: 'f l f r' } },
        nota: "Abans d'executar, pregunta si en Bit arribarà a la bandera. Molts diran que no: la funció és de pujar! Després de veure-ho, remarca que fa els blocs des d'on és i cap on mira.|Antes de ejecutar, pregunta si Bit llegará a la bandera. Muchos dirán que no: ¡la función es de subir! Después de verlo, remarca que hace los bloques desde donde está y hacia donde mira." },
      { id: 's8', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "La funció A és: Endavant, Endavant, Gira a la dreta. Repeteix 3 vegades: Funció A. On acabarà en Bit: A, B o C?|La función A es: Adelante, Adelante, Gira a la derecha. Repite 3 veces: Función A. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['>#C', '#.#', 'A#B'] }, prog: '3{ A }', fns: { A: 'f f r' } },
        nota: "Resposta: A. Qui diu C ha fet una sola volta; qui diu B, dues.|Respuesta: A. Quien dice C ha hecho una sola vuelta; quien dice B, dos." },
      { id: 's9', k: 'activitat', t: "L'escala humana|La escalera humana", timer: 12, punts: ["Missió 1: un bucle i una funció.|Misión 1: un bucle y una función.", "Missió 2: la funció té un bug. Trobeu-lo!|Misión 2: la función tiene un bug. ¡Encontradlo!", "Missió 3: la muntanya, amb la mateixa funció.|Misión 3: la montaña, con la misma función.", "Roteu els papers a cada missió.|Rotad los papeles en cada misión."],
        nota: "Dona la funció amb bug de la missió 2 al guardià/ana de cada grup sense dir-los on és l'error.|Da la función con bug de la misión 2 al guardián/a de cada grupo sin decirles dónde está el error." },
      { id: 's10', k: 'concepte', t: 'Com es caça un bug dins d\'una funció|Cómo se caza un bug dentro de una función', punts: ["L'error surt cada vegada igual? És a la funció.|¿El error sale cada vez igual? Está en la función.", "Fes la funció a poc a poc, targeta a targeta.|Haz la función despacio, tarjeta a tarjeta.", "Canvia només la targeta equivocada.|Cambia solo la tarjeta equivocada.", "Torna-ho a provar: ara totes les voltes van bé.|Vuelve a probarlo: ahora todas las vueltas van bien."],
        nota: "Deixa-la projectada durant la missió 2 de l'activitat.|Déjala proyectada durante la misión 2 de la actividad." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Funcions dins de bucles».|Abre la sesión «Funciones dentro de bucles».", "A «On acabarà?», compta les voltes amb els dits.|En «¿Dónde terminará?», cuenta las vueltas con los dedos.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A l'«Investiga», la funció està bé: l'error és el número del bucle.|En el «Investiga», la función está bien: el error es el número del bucle." },
      { id: 's12', k: 'demo', t: 'Programem junts: el mirador|Programemos juntos: el mirador', x: "Una funció i un bucle: només dos blocs al programa. Quin número posem al bucle?|Una función y un bucle: solo dos bloques en el programa. ¿Qué número ponemos en el bucle?",
        demo: { w: { map: ['.....F', '....##', '...##.', '..##..', '.##...', '>#....'] }, prog: '5{ A }', fns: { A: 'f l f r' } },
        nota: "Compteu els esglaons entre tots (5) abans d'executar. És el primer repte de l'app: ara el sabran fer tots.|Contad los escalones entre todos (5) antes de ejecutar. Es el primer reto de la app: ahora lo sabrán hacer todos." },
      { id: 's13', k: 'repte', t: 'Reptes: funcions dins de bucles|Retos: funciones dentro de bucles', timer: 10, punts: ["1. El mirador: 2 blocs.|1. El mirador: 2 bloques.", "2. El mercat: escriu la funció reparteix.|2. El mercado: escribe la función reparte.", "3. El zig-zag: arregla la funció.|3. El zigzag: arregla la función.", "4. La muntanya: puja i baixa amb 5 blocs.|4. La montaña: sube y baja con 5 bloques."],
        nota: "Al zig-zag, que facin «Pas a pas» i diguin a quina volta s'equivoca en Bit: a totes!|En el zigzag, que hagan «Paso a paso» y digan en qué vuelta se equivoca Bit: ¡en todas!" },
      { id: 's14', k: 'activitat', t: 'Crea: les onades de la platja|Crea: las olas de la playa', timer: 5, x: "Inventa la funció «tros», posa-la dins d'un bucle i recull les 3 estrelles.|Inventa la función «trozo», ponla dentro de un bucle y recoge las 3 estrellas.",
        nota: "Hi ha moltes funcions que funcionen. Demana a dos alumnes amb solucions diferents que les ensenyin.|Hay muchas funciones que funcionan. Pide a dos alumnos con soluciones diferentes que las enseñen." },
      { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Una funció es pot posar dins d'un bucle.|Una función se puede poner dentro de un bucle.", "Un error a la funció surt cada vegada.|Un error en la función sale cada vez.", "S'arregla en un sol lloc: a la funció.|Se arregla en un solo sitio: en la función."],
        nota: "Torna a la pregunta de l'escala de 5 esglaons: ara saben fer-la amb 6 blocs (o 2 si la funció ja està feta).|Vuelve a la pregunta de la escalera de 5 escalones: ahora saben hacerla con 6 bloques (o 2 si la función ya está hecha)." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Si la funció té un error i el bucle la crida 4 vegades, quantes vegades surt l'error?|Si la función tiene un error y el bucle la llama 4 veces, ¿cuántas veces sale el error?", "Com faries pujar 6 esglaons amb 2 blocs?|¿Cómo harías subir 6 escalones con 2 bloques?"],
        nota: "Respostes: 4 vegades (i s'arregla en un lloc); Repeteix 6 vegades: Funció escala.|Respuestas: 4 veces (y se arregla en un sitio); Repite 6 veces: Función escalera." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de bucle i de bug|Tarjetas de bucle y de bug', k: 'targetes',
        intro: "Afegiu-les al paquet de les sessions anteriors. A la targeta del bucle hi escriviu el número amb retolador. La targeta de bug la fa servir el guardià/ana per marcar on era l'error quan el trobeu.|Añadidlas al paquete de las sesiones anteriores. En la tarjeta del bucle escribís el número con rotulador. La tarjeta de bug la usa el guardián/a para marcar dónde estaba el error cuando lo encontréis.",
        items: [
          { t: 'Repeteix __ vegades 🔁|Repite __ veces 🔁', n: 3 },
          { t: 'Fi del bucle ⏹|Fin del bucle ⏹', n: 3 },
          { t: 'Funció zig-zag ⚡|Función zigzag ⚡', n: 2 },
          { t: 'Aquí hi havia el bug 🐞|Aquí estaba el bug 🐞', n: 2 },
          { t: 'Cim ⭐|Cima ⭐', n: 1 }
        ] },
      { id: 'p2', t: 'Quadrícula del terra: bucles amb funcions|Cuadrícula del suelo: bucles con funciones', k: 'quadricula',
        intro: "Feu servir la quadrícula de 5 × 5. El programa té una targeta de bucle i, a dins, la targeta lila de la funció. La funció va a la llibreta.|Usad la cuadrícula de 5 × 5. El programa tiene una tarjeta de bucle y, dentro, la tarjeta lila de la función. La función va en la libreta.",
        items: [
          { t: 'Missió 1: el mirador|Misión 1: el mirador', w: 5, h: 5, cells: ['R...F', '.....', '.....', '.....', '>...R'],
            instructions: "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Quin número heu de posar al bucle?|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Qué número tenéis que poner en el bucle?",
            sol: '4{ A }', solFns: { A: 'f l f r' } },
          { t: 'Missió 2: el zig-zag amb bug|Misión 2: el zigzag con bug', w: 5, h: 5, cells: ['>...R', '.*...', '..*..', '...*.', 'R...F'],
            instructions: "Programa: Repeteix 4 vegades la funció zig-zag. La funció de la llibreta té un error i el robot dona voltes. Trobeu la targeta equivocada i canvieu només aquesta.|Programa: Repite 4 veces la función zigzag. La función de la libreta tiene un error y el robot da vueltas. Encontrad la tarjeta equivocada y cambiad solo esa.",
            prog: '4{ A }', fns: { A: 'f r f r' }, sol: '4{ A }', solFns: { A: 'f r f l' } },
          { t: 'Missió 3: la muntanya|Misión 3: la montaña', w: 5, h: 5, cells: ['.....', '.....', '..*..', '.....', '>...F'],
            instructions: "Pugeu fins al cim (l'estrella) i baixeu fins a la bandera fent servir la mateixa funció escala. Pista: al cim, gireu a la dreta.|Subid hasta la cima (la estrella) y bajad hasta la bandera usando la misma función escalera. Pista: en la cima, girad a la derecha.",
            sol: '2{ A } r 2{ A }', solFns: { A: 'f l f r' } }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Pocs blocs, molta feina ---------- */
  'r5-3': {
    obj: [
      "L'alumne/a reconeix trossos repetits en un programa llarg i els converteix en una funció per reutilitzar-los.|El alumno/a reconoce trozos repetidos en un programa largo y los convierte en una función para reutilizarlos.",
      "L'alumne/a fa servir dues funcions diferents i les crida en l'ordre que demana el camí.|El alumno/a usa dos funciones diferentes y las llama en el orden que pide el camino.",
      "L'alumne/a compta els blocs d'un programa amb funcions i resol reptes amb un màxim de blocs.|El alumno/a cuenta los bloques de un programa con funciones y resuelve retos con un máximo de bloques.",
      "L'alumne/a compara un programa llarg i un de curt i explica per què el curt és més fàcil d'arreglar.|El alumno/a compara un programa largo y uno corto y explica por qué el corto es más fácil de arreglar."
    ],
    comp: [
      "Competència digital (CD5): optimitzar un programa per blocs perquè sigui més curt i més clar|Competencia digital (CD5): optimizar un programa por bloques para que sea más corto y más claro",
      "Pensament computacional: reutilització, abstracció i eficiència dels programes|Pensamiento computacional: reutilización, abstracción y eficiencia de los programas",
      "Matemàtiques: comptar, comparar quantitats i descompondre un total (2 + 4 = 6)|Matemáticas: contar, comparar cantidades y descomponer un total (2 + 4 = 6)",
      "Comunicació oral: argumentar quina solució és millor i per què|Comunicación oral: argumentar qué solución es mejor y por qué"
    ],
    vocab: [
      ["Reutilitzar|Reutilizar", "Escriure un tros una vegada i fer-lo servir moltes vegades.|Escribir un trozo una vez y usarlo muchas veces."],
      ["Comptador de blocs|Contador de bloques", "Diu quants blocs fas servir: els del programa i els de les funcions que escrius.|Dice cuántos bloques usas: los del programa y los de las funciones que escribes."],
      ["Màxim de blocs|Máximo de bloques", "El nombre més gran de blocs que pots fer servir en un repte.|El número más grande de bloques que puedes usar en un reto."],
      ["Dues funcions|Dos funciones", "Dues ordres noves amb noms diferents, com puja i baixa.|Dos órdenes nuevas con nombres distintos, como sube y baja."],
      ["Programa curt|Programa corto", "Un programa que fa la mateixa feina amb menys blocs.|Un programa que hace el mismo trabajo con menos bloques."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Pocs blocs, molta feina»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Pocos bloques, mucho trabajo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La fitxa «El concurs dels pocs blocs» (una per parella) i un llapis|La ficha «El concurso de los pocos bloques» (una por pareja) y un lápiz",
        "La quadrícula del terra i les targetes de les sessions anteriors per provar una solució|La cuadrícula del suelo y las tarjetas de las sesiones anteriores para probar una solución"
      ],
      imprimir: ["Fitxa: el concurs dels pocs blocs|Ficha: el concurso de los pocos bloques"],
      prep: [
        "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
        "Muntar a la quadrícula del terra el mapa de l'exercici 1 de la fitxa (l'escala amb la bandera).|Montar en la cuadrícula del suelo el mapa del ejercicio 1 de la ficha (la escalera con la bandera).",
        "Preparar a la pissarra una taula amb dues columnes: «blocs abans» i «blocs després».|Preparar en la pizarra una tabla con dos columnas: «bloques antes» y «bloques después».",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el xip de poca memòria|Recordamos y el chip de poca memoria", fase: 'inici',
        fa: "Fes la pregunta de repàs de l'escala de 5 esglaons. Explica la missió: al laboratori han posat a en Bit un xip on hi caben pocs blocs. Pregunta per què pot ser bo que un programa sigui curt.|Haz la pregunta de repaso de la escalera de 5 escalones. Explica la misión: en el laboratorio le han puesto a Bit un chip donde caben pocos bloques. Pregunta por qué puede ser bueno que un programa sea corto.",
        diu: ["Com feu pujar 5 esglaons a en Bit amb la funció escala?|¿Cómo hacéis subir 5 escalones a Bit con la función escalera?",
          "Per què és millor un programa curt? Hi ha alguna altra raó, a part que hi càpiga?|¿Por qué es mejor un programa corto? ¿Hay alguna otra razón, además de que quepa?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Reutilitzar i dues funcions|Reutilizar y dos funciones", fase: 'teoria',
        fa: "Explica reutilitzar amb l'animació dels 12 i els 6 blocs i compteu els blocs junts a la pissarra (2 del programa + 4 de la funció). Presenta les dues funcions, puja i baixa, i a la demostració que la classe digui el nom de la funció que s'executa. Fes la predicció de recte, volta, recte. Acaba amb la idea clau: primer que funcioni, després que sigui curt.|Explica reutilizar con la animación de los 12 y los 6 bloques y contad los bloques juntos en la pizarra (2 del programa + 4 de la función). Presenta las dos funciones, sube y baja, y en la demostración que la clase diga el nombre de la función que se ejecuta. Haz la predicción de recto, vuelta, recto. Acaba con la idea clave: primero que funcione, después que sea corto.",
        diu: ["Quants blocs hi ha al programa? I a dins de la funció? Quants en total?|¿Cuántos bloques hay en el programa? ¿Y dentro de la función? ¿Cuántos en total?",
          "Ara s'il·lumina la funció A o la B? Què fa en Bit?|¿Ahora se ilumina la función A o la B? ¿Qué hace Bit?",
          "Un programa curt que no funciona serveix d'alguna cosa?|¿Un programa corto que no funciona sirve de algo?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El concurs dels pocs blocs|El concurso de los pocos bloques", fase: 'desconnectat',
        fa: "Per parelles, fan la fitxa: reben programes llargs que funcionen i els han de reescriure amb funcions, comptant els blocs abans i després. Apunteu els resultats a la taula de la pissarra. Al final, un grup prova la seva solució de l'exercici 1 a la quadrícula del terra amb les targetes per comprovar que fa el mateix camí.|Por parejas, hacen la ficha: reciben programas largos que funcionan y tienen que reescribirlos con funciones, contando los bloques antes y después. Apuntad los resultados en la tabla de la pizarra. Al final, un grupo prueba su solución del ejercicio 1 en la cuadrícula del suelo con las tarjetas para comprobar que hace el mismo camino.",
        diu: ["Busqueu el tros que es repeteix: on comença i on acaba?|Buscad el trozo que se repite: ¿dónde empieza y dónde termina?",
          "Quants blocs teníeu abans? I ara? Quants us n'heu estalviat?|¿Cuántos bloques teníais antes? ¿Y ahora? ¿Cuántos os habéis ahorrado?",
          "El programa curt fa exactament el mateix camí? Comproveu-ho al terra.|¿El programa corto hace exactamente el mismo camino? Comprobadlo en el suelo."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després un grup a la quadrícula|Por parejas y después un grupo en la cuadrícula" },
      { min: 15, t: "A l'ordinador: descobreix, prediu i compara|En el ordenador: descubre, predice y compara", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pregunta de comparar programes. A l'«Investiga», demana que llegeixin el programa en veu alta i busquin el tros que ja és a la funció. A «El missatge més curt», que el deixin per a casa si ja han fet la fitxa.|Cada alumno/a hace la sesión hasta la pregunta de comparar programas. En el «Investiga», pide que lean el programa en voz alta y busquen el trozo que ya está en la función. En «El mensaje más corto», que lo dejen para casa si ya han hecho la ficha.",
        diu: ["Llegeix el programa en veu alta. Quin tros ja l'has sentit abans?|Lee el programa en voz alta. ¿Qué trozo ya lo has oído antes?",
          "Si hi ha un error a l'escala, en quants llocs l'hauries d'arreglar a cada programa?|Si hay un error en la escalera, ¿en cuántos sitios tendrías que arreglarlo en cada programa?"],
        slides: ['s12'], app: "Pregunta de «Recorda», les dues històries del xip, les targetes de «Descobreix», comptar els blocs, «El missatge més curt», «On acabarà?» amb recte i volta, l'«Investiga» del tros repetit i la pregunta de comparar programes.|Pregunta de «Recuerda», las dos historias del chip, las tarjetas de «Descubre», contar los bloques, «El mensaje más corto», «¿Dónde terminará?» con recto y vuelta, el «Investiga» del trozo repetido y la pregunta de comparar programas.", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb màxim de blocs|Retos con máximo de bloques", fase: 'ordinador',
        fa: "Feu la pausa activa del programa llarg i el curt. Després programa amb la classe la volta al jardí petit de la diapositiva 13 i deixa'ls fer els tres reptes. Recorda'ls que el comptador de dalt del programa es posa vermell quan arriben al màxim.|Haced la pausa activa del programa largo y el corto. Después programa con la clase la vuelta al jardín pequeño de la diapositiva 13 y deja que hagan los tres retos. Recuérdales que el contador de encima del programa se pone rojo cuando llegan al máximo.",
        diu: ["No hi ha bucle: com pots repetir un costat del jardí sense escriure'l quatre vegades?|No hay bucle: ¿cómo puedes repetir un lado del jardín sin escribirlo cuatro veces?",
          "A la serra, digues en veu alta l'ordre de les funcions abans de posar cap bloc.|En la sierra, di en voz alta el orden de las funciones antes de poner ningún bloque.",
          "Al repartiment, quantes caixes hi ha al carrer de dalt? I al de baix?|En el reparto, ¿cuántas cajas hay en la calle de arriba? ¿Y en la de abajo?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els tres reptes: la volta al jardí (8 blocs, sense bucle), la serra de les estrelles (dues funcions, 14 blocs) i el repartiment als dos carrers (12 blocs).|«Pausa activa» y los tres retos: la vuelta al jardín (8 bloques, sin bucle), la sierra de las estrellas (dos funciones, 14 bloques) y el reparto en las dos calles (12 bloques).", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el rècord de blocs|Crea: el récord de bloques", fase: 'crea',
        fa: "Cada alumne/a resol el rècord de blocs amb un màxim de 10. Qui acabi, prova de fer-ho amb menys blocs i ho apunta a la pissarra. Comenteu la solució amb menys blocs: és també la més fàcil d'entendre?|Cada alumno/a resuelve el récord de bloques con un máximo de 10. Quien termine, intenta hacerlo con menos bloques y lo apunta en la pizarra. Comentad la solución con menos bloques: ¿es también la más fácil de entender?",
        diu: ["Quants blocs has fet servir? Encara se'n pot treure algun?|¿Cuántos bloques has usado? ¿Todavía se puede quitar alguno?",
          "El teu programa s'entén si el llegeix algú altre?|¿Tu programa se entiende si lo lee otra persona?"],
        slides: ['s15'], app: "Pas «Crea»: El rècord de blocs.|Paso «Crea»: El récord de bloques.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Què vol dir reutilitzar?|¿Qué quiere decir reutilizar?",
          "Per què un programa curt és més fàcil d'arreglar?|¿Por qué un programa corto es más fácil de arreglar?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["No troba on comença el tros que es repeteix.|No encuentra dónde empieza el trozo que se repite.",
        "Que llegeixi el programa en veu alta o que segueixi el camí amb el dit: on torna a passar el mateix? Marqueu cada tros amb un color.|Que lea el programa en voz alta o que siga el camino con el dedo: ¿dónde vuelve a pasar lo mismo? Marcad cada trozo con un color."],
      ["Només compta els blocs del programa i se sorprèn que no li quedin blocs.|Solo cuenta los bloques del programa y se sorprende de que no le queden bloques.",
        "Mireu junts el comptador: suma també els blocs de dins de les funcions que escriu. Compteu-los amb el dit.|Mirad juntos el contador: suma también los bloques de dentro de las funciones que escribe. Contadlos con el dedo."],
      ["A la serra, posa els blocs de puja dins de la funció baixa (o al revés).|En la sierra, pone los bloques de sube dentro de la función baja (o al revés).",
        "Que executi una sola crida de cada funció i miri què fa en Bit: puja o baixa? Així sabrà si cada funció té el nom que toca.|Que ejecute una sola llamada de cada función y mire qué hace Bit: ¿sube o baja? Así sabrá si cada función tiene el nombre que le toca."],
      ["Vol fer el programa curt des del principi i s'encalla.|Quiere hacer el programa corto desde el principio y se atasca.",
        "Proposa-li primer fer-lo funcionar sense pensar en el màxim (pot provar-ho al paper) i després buscar el tros repetit per fer-ne la funció.|Proponle primero hacerlo funcionar sin pensar en el máximo (puede probarlo en el papel) y después buscar el trozo repetido para hacer la función."],
      ["Creu que el programa més curt sempre és el millor, encara que costi d'entendre.|Cree que el programa más corto siempre es el mejor, aunque cueste entenderlo.",
        "Pregunta si un company/a entendria el programa només de llegir-lo. Un bon programa és curt i clar: els noms de les funcions ajuden.|Pregunta si un compañero/a entendería el programa solo con leerlo. Un buen programa es corto y claro: los nombres de las funciones ayudan."]
    ],
    diff: {
      mes: "Fer el repartiment dels dos carrers amb menys de 12 blocs i explicar el truc. Després, escriure al paper un camí propi amb dos trossos que es repeteixin perquè un company/a el faci amb dues funcions.|Hacer el reparto de las dos calles con menos de 12 bloques y explicar el truco. Después, escribir en papel un camino propio con dos trozos que se repitan para que un compañero/a lo haga con dos funciones.",
      menys: "A la fitxa, començar per l'exercici de comptar blocs. A l'app, fer primer el repte del jardí dient en veu alta «un costat, un altre costat…» i provar la funció amb una sola crida abans d'afegir-ne més.|En la ficha, empezar por el ejercicio de contar bloques. En la app, hacer primero el reto del jardín diciendo en voz alta «un lado, otro lado…» y probar la función con una sola llamada antes de añadir más."
    },
    aval: {
      ticket: ["Què vol dir reutilitzar un tros de programa?|¿Qué quiere decir reutilizar un trozo de programa?",
        "Programa: Funció A, Funció A, Funció A. La funció A té 4 blocs. Quants blocs són en total?|Programa: Función A, Función A, Función A. La función A tiene 4 bloques. ¿Cuántos bloques son en total?"],
      rubric: [
        ["Reutilitzar|Reutilizar", "Troba el tros repetit i el converteix en una funció sense ajuda.|Encuentra el trozo repetido y lo convierte en una función sin ayuda.", "Fa servir funcions quan l'hi proposen, però costa que vegi el tros repetit.|Usa funciones cuando se lo proponen, pero le cuesta ver el trozo repetido."],
        ["Dues funcions|Dos funciones", "Fa servir dues funcions amb el nom que toca i les crida en l'ordre bo.|Usa dos funciones con el nombre que toca y las llama en el orden correcto.", "Fa servir una sola funció o barreja el que fa cadascuna.|Usa una sola función o mezcla lo que hace cada una."],
        ["Comptar i comparar|Contar y comparar", "Compta bé els blocs (programa + funcions) i explica per què el programa curt és més fàcil d'arreglar.|Cuenta bien los bloques (programa + funciones) y explica por qué el programa corto es más fácil de arreglar.", "Compta només els blocs del programa o encara no sap explicar l'avantatge.|Cuenta solo los bloques del programa o todavía no sabe explicar la ventaja."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El missatge més curt»: escriviu el camí de la porta a la cuina i torneu-lo a escriure amb noms per als trossos que es repeteixen.|En casa, con el móvil, podéis repetir la sesión y hacer «El mensaje más corto»: escribid el camino de la puerta a la cocina y volved a escribirlo con nombres para los trozos que se repiten.",
    slides: [
      { id: 's1', k: 'portada', t: 'Pocs blocs, molta feina|Pocos bloques, mucho trabajo', x: "Avui farem programes curts que fan molta feina.|Hoy haremos programas cortos que hacen mucho trabajo.",
        nota: "Explica que avui hi haurà reptes amb un màxim de blocs: com un concurs.|Explica que hoy habrá retos con un máximo de bloques: como un concurso." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "Com fas pujar en Bit 5 esglaons amb la funció escala?|¿Cómo haces subir a Bit 5 escalones con la función escalera?",
        nota: "Resposta: Repeteix 5 vegades: Funció escala.|Respuesta: Repite 5 veces: Función escalera." },
      { id: 's3', k: 'concepte', t: 'Un xip amb poca memòria|Un chip con poca memoria', punts: ["Al xip nou d'en Bit hi caben pocs blocs.|En el chip nuevo de Bit caben pocos bloques.", "Si el programa és massa llarg, no hi cap.|Si el programa es demasiado largo, no cabe.", "El truc: reutilitzar amb funcions.|El truco: reutilizar con funciones."],
        nota: "Pregunta per altres raons per fer programes curts: s'entenen millor i, si hi ha un error, es troba abans.|Pregunta por otras razones para hacer programas cortos: se entienden mejor y, si hay un error, se encuentra antes." },
      { id: 's4', k: 'anim', t: 'Escriu-ho una vegada, fes-ho servir moltes|Escríbelo una vez, úsalo muchas', anim: 'u5short', x: "12 blocs sense funció; 6 amb una funció i un bucle.|12 bloques sin función; 6 con una función y un bucle.",
        nota: "Compteu els blocs de la columna de la dreta: 2 al programa i 4 a la funció.|Contad los bloques de la columna de la derecha: 2 en el programa y 4 en la función." },
      { id: 's5', k: 'pregunta', t: 'Quants blocs són?|¿Cuántos bloques son?', punts: ["Programa: Repeteix 3 vegades: Funció escala.|Programa: Repite 3 veces: Función escalera.", "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta.|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha."],
        nota: "Resposta: 6 (2 + 4). Escriu a la pissarra la suma i deixa-la tota la sessió.|Respuesta: 6 (2 + 4). Escribe en la pizarra la suma y déjala toda la sesión." },
      { id: 's6', k: 'anim', t: 'Dues funcions: puja i baixa|Dos funciones: sube y baja', anim: 'u5two', x: "Cada funció és una ordre nova, i les pots cridar en l'ordre que vulguis.|Cada función es una orden nueva, y las puedes llamar en el orden que quieras.",
        nota: "Llegiu junts l'ordre de les funcions: puja, baixa, puja, puja, baixa.|Leed juntos el orden de las funciones: sube, baja, sube, sube, baja." },
      { id: 's7', k: 'demo', t: 'Dues funcions en acció|Dos funciones en acción', x: "La funció A puja un esglaó i la B en baixa un. Programa: A, A, B, B.|La función A sube un escalón y la B baja uno. Programa: A, A, B, B.",
        demo: { w: { map: ['..##.', '.####', '>#..F'] }, prog: 'A A B B', fns: { A: 'f l f r', B: 'f r f l' } },
        nota: "Que la classe digui «puja!» o «baixa!» cada vegada que s'il·lumina una funció.|Que la clase diga «¡sube!» o «¡baja!» cada vez que se ilumina una función." },
      { id: 's8', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "A = recte (Endavant, Endavant). B = volta (Gira a l'esquerra, Endavant, Gira a l'esquerra). Programa: A, B, A. On acabarà en Bit: A, B o C?|A = recto (Adelante, Adelante). B = vuelta (Gira a la izquierda, Adelante, Gira a la izquierda). Programa: A, B, A. ¿Dónde terminará Bit: A, B o C?",
        demo: { w: { map: ['A#B..', '>###C'] }, prog: 'A B A', fns: { A: 'f f', B: 'l f l' } },
        nota: "Resposta: a la A. Qui diu B ha oblidat l'última crida; qui diu C no ha fet la volta.|Respuesta: en la A. Quien dice B ha olvidado la última llamada; quien dice C no ha hecho la vuelta." },
      { id: 's9', k: 'concepte', t: 'Primer que funcioni, després que sigui curt|Primero que funcione, después que sea corto', punts: ["1. Fes que el programa funcioni.|1. Haz que el programa funcione.", "2. Busca el tros que es repeteix.|2. Busca el trozo que se repite.", "3. Converteix-lo en una funció amb nom.|3. Conviértelo en una función con nombre.", "4. Torna-ho a provar.|4. Vuelve a probarlo."],
        nota: "Remarca que fer-ho curt és el segon pas, no el primer. Un programa curt que no funciona no serveix.|Remarca que hacerlo corto es el segundo paso, no el primero. Un programa corto que no funciona no sirve." },
      { id: 's10', k: 'activitat', t: 'El concurs dels pocs blocs|El concurso de los pocos bloques', timer: 12, punts: ["Per parelles, feu la fitxa.|Por parejas, haced la ficha.", "Busqueu el tros que es repeteix i poseu-li nom.|Buscad el trozo que se repite y ponedle nombre.", "Apunteu els blocs abans i després.|Apuntad los bloques antes y después.", "Proveu una solució a la quadrícula del terra.|Probad una solución en la cuadrícula del suelo."],
        nota: "Apunta a la taula de la pissarra els resultats de cada parella per a l'exercici 1.|Apunta en la tabla de la pizarra los resultados de cada pareja para el ejercicio 1." },
      { id: 's11', k: 'concepte', t: 'Com es compten els blocs|Cómo se cuentan los bloques', punts: ["Cada bloc del programa compta 1, també el bucle i el bloc lila.|Cada bloque del programa cuenta 1, también el bucle y el bloque lila.", "Els blocs de dins de la funció es compten una sola vegada.|Los bloques de dentro de la función se cuentan una sola vez.", "Total = programa + funcions.|Total = programa + funciones."],
        nota: "Deixa-la projectada durant la fitxa.|Déjala proyectada durante la ficha." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Pocs blocs, molta feina».|Abre la sesión «Pocos bloques, mucho trabajo».", "A l'«Investiga», busca el tros que ja és a la funció.|En el «Investiga», busca el trozo que ya está en la función.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Fixa't en qui només compta els blocs del programa a la pregunta de comptar.|Fíjate en quién solo cuenta los bloques del programa en la pregunta de contar." },
      { id: 's13', k: 'demo', t: 'Programem junts: el jardí petit|Programemos juntos: el jardín pequeño', x: "Sense bucle! La funció A és un costat: Endavant, Endavant, Gira a la dreta. Quantes vegades l'hem de cridar per recollir les estrelles?|¡Sin bucle! La función A es un lado: Adelante, Adelante, Gira a la derecha. ¿Cuántas veces tenemos que llamarla para recoger las estrellas?",
        demo: { w: { map: ['>#*', '#.#', '*#*'] }, prog: 'A A A', fns: { A: 'f f r' } },
        nota: "Resposta: 3 vegades (6 blocs en total). Al primer repte de l'app el jardí és més gran, però la idea és la mateixa.|Respuesta: 3 veces (6 bloques en total). En el primer reto de la app el jardín es más grande, pero la idea es la misma." },
      { id: 's14', k: 'repte', t: 'Reptes amb màxim de blocs|Retos con máximo de bloques', timer: 10, punts: ["1. La volta al jardí: 8 blocs, sense bucle.|1. La vuelta al jardín: 8 bloques, sin bucle.", "2. La serra de les estrelles: dues funcions, 14 blocs.|2. La sierra de las estrellas: dos funciones, 14 bloques.", "3. El repartiment als dos carrers: 12 blocs.|3. El reparto en las dos calles: 12 bloques."],
        nota: "Si algú s'encalla a la serra, que segueixi les estrelles amb el dit i digui puja o baixa a cada una.|Si alguien se atasca en la sierra, que siga las estrellas con el dedo y diga sube o baja en cada una." },
      { id: 's15', k: 'activitat', t: 'Crea: el rècord de blocs|Crea: el récord de bloques', timer: 5, x: "Recull les 5 estrelles i arriba a la bandera amb 10 blocs com a màxim.|Recoge las 5 estrellas y llega a la bandera con 10 bloques como máximo.",
        nota: "Apunta a la pissarra el rècord de la classe. Pregunta si la solució més curta també és fàcil d'entendre.|Apunta en la pizarra el récord de la clase. Pregunta si la solución más corta también es fácil de entender." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["Reutilitzar: escriu-ho una vegada, fes-ho servir moltes.|Reutilizar: escríbelo una vez, úsalo muchas.", "Pots tenir dues funcions i cridar-les en l'ordre que calgui.|Puedes tener dos funciones y llamarlas en el orden que haga falta.", "Primer que funcioni, després que sigui curt i clar.|Primero que funcione, después que sea corto y claro."],
        nota: "Avança que la setmana vinent faran el projecte de la unitat: la ciutat dels robots.|Avanza que la semana que viene harán el proyecto de la unidad: la ciudad de los robots." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què vol dir reutilitzar?|¿Qué quiere decir reutilizar?", "Funció A, Funció A, Funció A, i la funció A té 4 blocs. Quants blocs en total?|Función A, Función A, Función A, y la función A tiene 4 bloques. ¿Cuántos bloques en total?"],
        nota: "Respostes: escriure un tros una vegada i fer-lo servir moltes; 3 + 4 = 7 blocs.|Respuestas: escribir un trozo una vez y usarlo muchas; 3 + 4 = 7 bloques." }
    ],
    print: [
      { id: 'p1', t: 'Fitxa: el concurs dels pocs blocs|Ficha: el concurso de los pocos bloques', k: 'fitxa',
        intro: "Aquests programes funcionen, però són llargs. Busqueu el tros que es repeteix, poseu-li nom i torneu a escriure el programa amb funcions. Compteu els blocs abans i després.|Estos programas funcionan, pero son largos. Buscad el trozo que se repite, ponedle nombre y volved a escribir el programa con funciones. Contad los bloques antes y después.",
        items: [
          { q: "Aquest programa porta en Bit a la bandera i té 13 blocs. Torna'l a escriure amb una funció. Quants blocs fas servir ara?|Este programa lleva a Bit a la bandera y tiene 13 bloques. Vuelve a escribirlo con una función. ¿Cuántos bloques usas ahora?",
            w: { map: ['...#F', '..##.', '.##..', '>#...'] }, prog: 'f l f r f l f r f l f r f', solProg: 'A A A f', solFns: { A: 'f l f r' },
            sol: "Funció escala: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Programa: escala, escala, escala, Endavant. 4 + 4 = 8 blocs (amb un bucle, 7).|Función escalera: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. Programa: escalera, escalera, escalera, Adelante. 4 + 4 = 8 bloques (con un bucle, 7)." },
          { q: "Compta! Quants blocs té aquest programa, comptant els de la funció?|¡Cuenta! ¿Cuántos bloques tiene este programa, contando los de la función?",
            prog: '3{ A }', fns: { A: 'f f r' },
            sol: "2 blocs al programa (el bucle i la funció) + 3 a dins de la funció = 5 blocs.|2 bloques en el programa (el bucle y la función) + 3 dentro de la función = 5 bloques." },
          { q: "Aquest camí puja i baixa. Té 17 blocs. Fes-lo amb dues funcions, puja i baixa, i escriu en quin ordre les crides.|Este camino sube y baja. Tiene 17 bloques. Hazlo con dos funciones, sube y baja, y escribe en qué orden las llamas.",
            w: { map: ['..*.*F', '.*.*..', '>.....'] }, prog: 'f l f r f l f r f r f l f l f r f', solProg: 'A A B A f', solFns: { A: 'f l f r', B: 'f r f l' },
            sol: "Puja (A): Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Baixa (B): Endavant, Gira a la dreta, Endavant, Gira a l'esquerra. Programa: puja, puja, baixa, puja, Endavant. 5 + 8 = 13 blocs.|Sube (A): Adelante, Gira a la izquierda, Adelante, Gira a la derecha. Baja (B): Adelante, Gira a la derecha, Adelante, Gira a la izquierda. Programa: sube, sube, baja, sube, Adelante. 5 + 8 = 13 bloques." },
          { q: "Dos programes fan el mateix camí: un té 16 blocs i l'altre en té 8 amb una funció. Si hi ha un error a l'escala, quin arreglaries abans? Per què?|Dos programas hacen el mismo camino: uno tiene 16 bloques y el otro tiene 8 con una función. Si hay un error en la escalera, ¿cuál arreglarías antes? ¿Por qué?",
            sol: "El de la funció: l'error és en un sol lloc i, arreglant la funció, queda bé a totes les crides.|El de la función: el error está en un solo sitio y, arreglando la función, queda bien en todas las llamadas." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la ciutat dels robots ---------- */
  'r5-4': {
    obj: [
      "L'alumne/a planifica un projecte buscant la feina que es repeteix i decidint quines funcions farà i quin nom tindran.|El alumno/a planifica un proyecto buscando el trabajo que se repite y decidiendo qué funciones hará y qué nombre tendrán.",
      "L'alumne/a escriu funcions amb noms que expliquen què fan i les crida en diferents llocs del programa.|El alumno/a escribe funciones con nombres que explican qué hacen y las llama en distintos lugares del programa.",
      "L'alumne/a fa servir la mateixa funció en carrers amb direccions diferents perquè entén que comença on és en Bit.|El alumno/a usa la misma función en calles con direcciones diferentes porque entiende que empieza donde está Bit.",
      "L'alumne/a presenta el seu projecte i explica les seves funcions i un error que ha arreglat.|El alumno/a presenta su proyecto y explica sus funciones y un error que ha arreglado."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i programar un projecte de diverses etapes amb funcions|Competencia digital (CD5): diseñar y programar un proyecto de varias etapas con funciones",
      "Pensament computacional: descomposició, abstracció amb funcions amb nom, planificació i depuració|Pensamiento computacional: descomposición, abstracción con funciones con nombre, planificación y depuración",
      "Matemàtiques: orientació i recorreguts en una quadrícula, patrons|Matemáticas: orientación y recorridos en una cuadrícula, patrones",
      "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
    ],
    vocab: [
      ["Planificar|Planificar", "Pensar què farà el programa i en quin ordre abans de posar blocs.|Pensar qué hará el programa y en qué orden antes de poner bloques."],
      ["Encàrrec|Encargo", "Una feina completa: agafar una caixa i portar-la a una casa.|Un trabajo completo: coger una caja y llevarla a una casa."],
      ["Nom clar|Nombre claro", "Un nom de funció que diu què fa, com porta-la.|Un nombre de función que dice qué hace, como llévala."],
      ["Des d'on és en Bit|Desde donde está Bit", "Una funció fa els blocs des de la casella on és en Bit i cap on mira.|Una función hace los bloques desde la casilla donde está Bit y hacia donde mira."],
      ["Projecte|Proyecto", "Un repte més gran on fem servir tot el que hem après a la unitat.|Un reto más grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la ciutat dels robots»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la ciudad de los robots»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, les targetes d'ordres i les targetes de la ciutat|La cuadrícula del suelo, las tarjetas de órdenes y las tarjetas de la ciudad",
        "Dues capses petites (o estoigs) que facin de caixa i el full de pla de la ciutat (un per parella)|Dos cajas pequeñas (o estuches) que hagan de caja y la hoja de plan de la ciudad (una por pareja)"
      ],
      imprimir: ["Full de pla de la ciutat|Hoja de plan de la ciudad", "Targetes de la ciutat|Tarjetas de la ciudad"],
      prep: [
        "Muntar a la quadrícula del terra el mapa de l'exercici 1 del full de pla: dues caixes, dues cases i en Bit a baix a l'esquerra mirant amunt.|Montar en la cuadrícula del suelo el mapa del ejercicio 1 de la hoja de plan: dos cajas, dos casas y Bit abajo a la izquierda mirando arriba.",
        "Imprimir un full de pla per parella i un paquet de targetes de la ciutat per grup.|Imprimir una hoja de plan por pareja y un paquete de tarjetas de la ciudad por grupo.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Tenir preparades les insígnies o un reconeixement senzill per al final de la unitat.|Tener preparadas las insignias o un reconocimiento sencillo para el final de la unidad."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i la ciutat dels robots|Recordamos y la ciudad de los robots", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre les funcions. Explica la missió: el poble ha crescut i ara és la ciutat dels robots, i avui en Bit farà tots els encàrrecs. Escriu a la pissarra: «Què es repeteix? Posa-hi nom!»|Haz la pregunta de repaso sobre las funciones. Explica la misión: el pueblo ha crecido y ahora es la ciudad de los robots, y hoy Bit hará todos los encargos. Escribe en la pizarra: «¿Qué se repite? ¡Ponle nombre!»",
        diu: ["Una funció escrita una vegada, quantes vegades es pot cridar?|Una función escrita una vez, ¿cuántas veces se puede llamar?",
          "Avui farem servir tot el que hem après: funcions, bucles, noms i caçar bugs.|Hoy usaremos todo lo que hemos aprendido: funciones, bucles, nombres y cazar bugs."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Planificar amb funcions|Planificar con funciones", fase: 'teoria',
        fa: "Mostra l'animació del pla: tres encàrrecs iguals es converteixen en la funció «porta-la». Amb la demostració, discutiu quin nom és millor, «A» o «porta-la». Explica amb l'animació que la funció comença on és en Bit i per això serveix per a carrers diferents. Acaba amb els passos del pla del projecte.|Muestra la animación del plan: tres encargos iguales se convierten en la función «llévala». Con la demostración, discutid qué nombre es mejor, «A» o «llévala». Explica con la animación que la función empieza donde está Bit y por eso sirve para calles diferentes. Acaba con los pasos del plan del proyecto.",
        diu: ["Quina feina es repeteix a cada encàrrec?|¿Qué trabajo se repite en cada encargo?",
          "Si llegiu «Funció A», sabeu què fa? I si llegiu «porta-la»?|Si leéis «Función A», ¿sabéis qué hace? ¿Y si leéis «llévala»?",
          "Abans de cridar porta-la, on ha de ser en Bit i cap on ha de mirar?|Antes de llamar a llévala, ¿dónde tiene que estar Bit y hacia dónde tiene que mirar?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Planifiquem la ciutat|Planificamos la ciudad", fase: 'desconnectat',
        fa: "Per parelles, omplen els exercicis 1 i 2 del full de pla: marquen al mapa els encàrrecs que es repeteixen, escriuen la funció «porta-la» i el programa. Després, en grups de 3, ho proven a la quadrícula del terra: el guardià/ana de la llibreta té la funció i el robot porta una capsa de debò. Si un encàrrec falla, arreglen només la funció o el tros del programa que falla.|Por parejas, rellenan los ejercicios 1 y 2 de la hoja de plan: marcan en el mapa los encargos que se repiten, escriben la función «llévala» y el programa. Después, en grupos de 3, lo prueban en la cuadrícula del suelo: el guardián/a de la libreta tiene la función y el robot lleva una caja de verdad. Si un encargo falla, arreglan solo la función o el trozo del programa que falla.",
        diu: ["Primer el pla, després les targetes. Quina feina es repeteix?|Primero el plan, después las tarjetas. ¿Qué trabajo se repite?",
          "Entre un encàrrec i l'altre, què ha de fer el robot? Això va al programa, no a la funció.|Entre un encargo y otro, ¿qué tiene que hacer el robot? Eso va en el programa, no en la función.",
          "Ha fallat el segon encàrrec però el primer no: on deu ser l'error?|Ha fallado el segundo encargo pero el primero no: ¿dónde estará el error?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: primers encàrrecs|En el ordenador: primeros encargos", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte de la plaça del mercat. A l'ordenar blocs, que diguin en veu alta què fa cada bloc lila. Fixa't en qui posa a la funció el gir que va entre encàrrecs: pregunta-li si aquest gir és igual a tots els encàrrecs.|Cada alumno/a hace la sesión hasta el reto de la plaza del mercado. Al ordenar bloques, que digan en voz alta qué hace cada bloque lila. Fíjate en quién pone en la función el giro que va entre encargos: pregúntale si ese giro es igual en todos los encargos.",
        diu: ["Llegeix el teu programa en veu alta: s'entén com una història?|Lee tu programa en voz alta: ¿se entiende como una historia?",
          "Aquest gir passa a tots els encàrrecs o només entre el primer i el segon?|¿Este giro pasa en todos los encargos o solo entre el primero y el segundo?"],
        slides: ['s10'], app: "Pregunta de «Recorda», les històries de la ciutat, les targetes de «Descobreix», el millor nom, ordenar els passos del pla, ordenar els blocs amb porta-la, el repte dels dos encàrrecs, la «Pausa activa» i la plaça del mercat.|Pregunta de «Recuerda», las historias de la ciudad, las tarjetas de «Descubre», el mejor nombre, ordenar los pasos del plan, ordenar los bloques con llévala, el reto de los dos encargos, la «Pausa activa» y la plaza del mercado.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots", fase: 'crea',
        fa: "Primer, el repte de la funció amb un bug. Després, abans de començar el projecte final, cada alumne/a escriu a l'exercici 3 del full de pla quines funcions farà, quin nom tindran i en quin ordre les cridarà. Quan ho tingui, programa, prova cada encàrrec i millora.|Primero, el reto de la función con un bug. Después, antes de empezar el proyecto final, cada alumno/a escribe en el ejercicio 3 de la hoja de plan qué funciones hará, qué nombre tendrán y en qué orden las llamará. Cuando lo tenga, programa, prueba cada encargo y mejora.",
        diu: ["Quina és la primera caixa? Cap on mira en Bit quan hi arriba?|¿Cuál es la primera caja? ¿Hacia dónde mira Bit cuando llega?",
          "Prova cada encàrrec abans de continuar: si falla, saps on és el bug.|Prueba cada encargo antes de seguir: si falla, sabes dónde está el bug.",
          "Has fet servir porta-la als tres carrers? Per què funciona encara que vagin cap a llocs diferents?|¿Has usado llévala en las tres calles? ¿Por qué funciona aunque vayan hacia sitios distintos?"],
        slides: ['s11', 's12', 's13'], app: "El repte de la funció porta-la amb un bug i el projecte de «Crea»: La ciutat dels robots.|El reto de la función llévala con un bug y el proyecto de «Crea»: La ciudad de los robots.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten la seva ciutat. Abans d'executar-la, llegeixen el programa en veu alta i expliquen què fa cada funció. La classe diu si el programa s'entén com un pla. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su ciudad. Antes de ejecutarla, leen el programa en voz alta y explican qué hace cada función. La clase dice si el programa se entiende como un plan. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
        diu: ["Quines funcions has fet i quin nom els has posat?|¿Qué funciones has hecho y qué nombre les has puesto?",
          "Quantes vegades crides porta-la?|¿Cuántas veces llamas a llévala?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s14'], app: "El projecte guardat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum i deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i reconeix la feina de tothom amb la insígnia de la ciutat dels robots.|Repasa las ideas de la unidad con el resumen y deja que respondan las preguntas finales de la app. Haz el ticket de salida y reconoce el trabajo de todos con la insignia de la ciudad de los robots.",
        diu: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?",
          "Quina de les quatre sessions us ha agradat més? Per què?|¿Cuál de las cuatro sesiones os ha gustado más? ¿Por qué?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dins de porta-la el gir que va entre dos encàrrecs, i el següent encàrrec surt torçat.|Pone dentro de llévala el giro que va entre dos encargos, y el siguiente encargo sale torcido.",
        "Pregunta si aquest gir passa a tots els encàrrecs. Si només passa entre dos, va al programa, no a la funció.|Pregunta si ese giro pasa en todos los encargos. Si solo pasa entre dos, va en el programa, no en la función."],
      ["Crida porta-la quan en Bit encara no mira cap a la caixa.|Llama a llévala cuando Bit todavía no mira hacia la caja.",
        "Que executi fins just abans de la crida i miri en Bit: on és i cap on mira? Recorda-li que la funció comença on és en Bit.|Que ejecute hasta justo antes de la llamada y mire a Bit: ¿dónde está y hacia dónde mira? Recuérdale que la función empieza donde está Bit."],
      ["Compta malament les caselles entre la caixa i la casa i deixa la caixa abans d'hora.|Cuenta mal las casillas entre la caja y la casa y deja la caja antes de tiempo.",
        "Que faci un sol encàrrec pas a pas i compti amb el dit les caselles que avança en Bit després d'agafar la caixa.|Que haga un solo encargo paso a paso y cuente con el dedo las casillas que avanza Bit después de coger la caja."],
      ["Comença a posar blocs sense pla i es perd al mig del projecte.|Empieza a poner bloques sin plan y se pierde en medio del proyecto.",
        "Atura'l amb amabilitat i demana-li que llegeixi el pla del full o que el digui en veu alta. Després, que programi i provi només el primer encàrrec.|Páralo con amabilidad y pídele que lea el plan de la hoja o que lo diga en voz alta. Después, que programe y pruebe solo el primer encargo."],
      ["Fa tot el projecte amb blocs solts i no fa servir cap funció.|Hace todo el proyecto con bloques sueltos y no usa ninguna función.",
        "Felicita'l perquè funciona i proposa-li un repte: quin tros es repeteix tres vegades? Si el converteix en porta-la, quants blocs s'estalvia?|Felicítalo porque funciona y proponle un reto: ¿qué trozo se repite tres veces? Si lo convierte en llévala, ¿cuántos bloques se ahorra?"]
    ],
    diff: {
      mes: "Fer el projecte amb dues funcions (porta-la i una altra per anar d'un carrer a l'altre) i comparar els blocs amb una sola funció. Després, dibuixar al full una ciutat nova amb tres encàrrecs iguals perquè un company/a la resolgui amb funcions.|Hacer el proyecto con dos funciones (llévala y otra para ir de una calle a otra) y comparar los bloques con una sola función. Después, dibujar en la hoja una ciudad nueva con tres encargos iguales para que un compañero/a la resuelva con funciones.",
      menys: "Començar el projecte amb un sol encàrrec: escriure porta-la, cridar-la una vegada i comprovar que funciona. Després afegir el camí fins al segon encàrrec i tornar-la a cridar. Tenir la targeta lila de porta-la al costat de l'ordinador.|Empezar el proyecto con un solo encargo: escribir llévala, llamarla una vez y comprobar que funciona. Después añadir el camino hasta el segundo encargo y volver a llamarla. Tener la tarjeta lila de llévala al lado del ordenador."
    },
    aval: {
      ticket: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?",
        "Per què és millor dir-ne «porta-la» que «A»?|¿Por qué es mejor llamarla «llévala» que «A»?"],
      rubric: [
        ["Planificació|Planificación", "Abans de programar, troba la feina que es repeteix i decideix les funcions i els noms.|Antes de programar, encuentra el trabajo que se repite y decide las funciones y los nombres.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Funcions amb nom|Funciones con nombre", "Escriu porta-la i la crida a tots els encàrrecs, posant en Bit al lloc bo abans de cada crida.|Escribe llévala y la llama en todos los encargos, poniendo a Bit en el sitio correcto antes de cada llamada.", "Fa servir la funció en un encàrrec o necessita ajuda per posar en Bit al lloc bo.|Usa la función en un encargo o necesita ayuda para poner a Bit en el sitio correcto."],
        ["Projecte final|Proyecto final", "Reparteix les tres caixes amb funcions i explica un bug que ha arreglat.|Reparte las tres cajas con funciones y explica un bug que ha arreglado.", "Reparteix una o dues caixes, o les tres sense funcions o amb ajuda.|Reparte una o dos cajas, o las tres sin funciones o con ayuda."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el projecte «La ciutat dels robots» i explicar-vos què fa la funció porta-la. Podeu fer també la pausa activa del repartidor amb una caixa imaginària.|En casa, con el móvil, vuestro hijo o hija os puede enseñar el proyecto «La ciudad de los robots» y explicaros qué hace la función llévala. También podéis hacer la pausa activa del repartidor con una caja imaginaria.",
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots', x: "Avui en Bit farà tots els encàrrecs de la ciutat amb ordres noves.|Hoy Bit hará todos los encargos de la ciudad con órdenes nuevas.",
        nota: "Explica que és el projecte final de la unitat: faran servir tot el que han après en les tres sessions anteriors.|Explica que es el proyecto final de la unidad: usarán todo lo que han aprendido en las tres sesiones anteriores." },
      { id: 's2', k: 'repas', t: 'Recordes?|¿Recuerdas?', x: "Una funció escrita una vegada… quantes vegades es pot cridar?|Una función escrita una vez… ¿cuántas veces se puede llamar?",
        nota: "Resposta: tantes com vulguis. Per això fa els programes més curts.|Respuesta: tantas como quieras. Por eso hace los programas más cortos." },
      { id: 's3', k: 'concepte', t: 'La ciutat dels robots|La ciudad de los robots', punts: ["Hi ha caixes i cases per tota la ciutat.|Hay cajas y casas por toda la ciudad.", "Cada encàrrec: agafar la caixa, caminar i deixar-la.|Cada encargo: coger la caja, caminar y dejarla.", "En Bit ho farà amb funcions amb nom.|Bit lo hará con funciones con nombre."],
        nota: "Pregunta quina funció creuen que necessitarà en Bit i quin nom li posarien.|Pregunta qué función creen que necesitará Bit y qué nombre le pondrían." },
      { id: 's4', k: 'anim', t: 'Què es repeteix? Posa-hi nom!|¿Qué se repite? ¡Ponle nombre!', anim: 'u5plan', x: "Tres encàrrecs iguals es converteixen en la funció porta-la.|Tres encargos iguales se convierten en la función llévala.",
        nota: "Llegiu el programa de la dreta com una història: porta-la, gira, porta-la, gira, porta-la.|Leed el programa de la derecha como una historia: llévala, gira, llévala, gira, llévala." },
      { id: 's5', k: 'demo', t: 'Un nom que expliqui què fa|Un nombre que explique qué hace', x: "La funció A és: Endavant, Agafa, Endavant, Endavant, Deixa. Quin nom li posaríeu?|La función A es: Adelante, Coge, Adelante, Adelante, Deja. ¿Qué nombre le pondríais?",
        demo: { w: { map: ['>b#Hb#H', '.......'] }, prog: 'A A', fns: { A: 'f p f f d' } },
        nota: "Recull noms i voteu el que expliqui millor què fa. Compareu-lo amb «A»: quin s'entén sense mirar els blocs?|Recoge nombres y votad el que explique mejor qué hace. Comparadlo con «A»: ¿cuál se entiende sin mirar los bloques?" },
      { id: 's6', k: 'anim', t: 'La funció comença on és en Bit|La función empieza donde está Bit', anim: 'u5where', x: "La mateixa porta-la serveix per a un carrer cap a la dreta o cap avall.|La misma llévala sirve para una calle hacia la derecha o hacia abajo.",
        nota: "Fes-ho amb el cos: un alumne/a fa porta-la mirant a la finestra i després mirant a la porta. Els passos són els mateixos!|Hacedlo con el cuerpo: un alumno/a hace llévala mirando a la ventana y después mirando a la puerta. ¡Los pasos son los mismos!" },
      { id: 's7', k: 'concepte', t: 'El pla del projecte|El plan del proyecto', punts: ["1. Mira el mapa i busca què es repeteix.|1. Mira el mapa y busca qué se repite.", "2. Posa nom a la funció.|2. Ponle nombre a la función.", "3. Escriu els blocs de la funció.|3. Escribe los bloques de la función.", "4. Crida-la al programa.|4. Llámala en el programa.", "5. Prova-ho i arregla el que falli.|5. Pruébalo y arregla lo que falle."],
        nota: "Deixa aquests passos escrits a la pissarra durant tota la sessió.|Deja estos pasos escritos en la pizarra durante toda la sesión." },
      { id: 's8', k: 'activitat', t: 'Planifiquem la ciutat|Planificamos la ciudad', timer: 12, punts: ["Per parelles: marqueu al mapa els encàrrecs que es repeteixen.|Por parejas: marcad en el mapa los encargos que se repiten.", "Escriviu la funció porta-la i el programa.|Escribid la función llévala y el programa.", "En grups de 3: proveu-ho a la quadrícula.|En grupos de 3: probadlo en la cuadrícula.", "Si falla, arregleu només el tros que falla.|Si falla, arreglad solo el trozo que falla."],
        nota: "El mapa de l'exercici 1 ja és muntat a la quadrícula. El robot porta una capsa de debò.|El mapa del ejercicio 1 ya está montado en la cuadrícula. El robot lleva una caja de verdad." },
      { id: 's9', k: 'concepte', t: 'Funció o programa?|¿Función o programa?', punts: ["El que passa a tots els encàrrecs va a la funció.|Lo que pasa en todos los encargos va en la función.", "El que passa entre dos encàrrecs va al programa.|Lo que pasa entre dos encargos va en el programa.", "Abans de cridar la funció, en Bit ha de mirar cap a la caixa.|Antes de llamar a la función, Bit tiene que mirar hacia la caja."],
        nota: "És la idea que més costa. Torna-hi cada vegada que un grup posi un gir dins de la funció.|Es la idea que más cuesta. Vuelve a ella cada vez que un grupo ponga un giro dentro de la función." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: la ciutat dels robots».|Abre la sesión «Proyecto: la ciudad de los robots».", "Llegeix el programa en veu alta: s'entén?|Lee el programa en voz alta: ¿se entiende?", "Para quan arribis al repte de la funció amb un bug.|Para cuando llegues al reto de la función con un bug."],
        nota: "Comprova que ningú posa a la funció el gir que va entre encàrrecs.|Comprueba que nadie pone en la función el giro que va entre encargos." },
      { id: 's11', k: 'repte', t: 'La funció porta-la té un bug|La función llévala tiene un bug', timer: 4, x: "En Bit vol deixar la caixa abans d'arribar a la casa. Arregla la funció!|Bit quiere dejar la caja antes de llegar a la casa. ¡Arregla la función!",
        nota: "Pista: compteu les caselles entre la caixa i la casa. Falta un Endavant dins de la funció.|Pista: contad las casillas entre la caja y la casa. Falta un Adelante dentro de la función." },
      { id: 's12', k: 'concepte', t: 'La ciutat: fes el pla|La ciudad: haz el plan', punts: ["Quina feina es repeteix als tres carrers?|¿Qué trabajo se repite en las tres calles?", "Com passa en Bit d'un carrer a l'altre?|¿Cómo pasa Bit de una calle a otra?", "Escriu el pla a l'exercici 3 del full.|Escribe el plan en el ejercicio 3 de la hoja.", "Prova cada encàrrec abans de continuar.|Prueba cada encargo antes de seguir."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho." },
      { id: 's13', k: 'activitat', t: 'Projecte: la ciutat dels robots|Proyecto: la ciudad de los robots', timer: 11, x: "Reparteix les 3 caixes amb la funció porta-la. Planifica, programa, prova i millora.|Reparte las 3 cajas con la función llévala. Planifica, programa, prueba y mejora.",
        nota: "Qui acabi pot fer una segona funció per anar d'un carrer a l'altre o ajudar un company/a amb preguntes.|Quien termine puede hacer una segunda función para ir de una calle a otra o ayudar a un compañero/a con preguntas." },
      { id: 's14', k: 'activitat', t: 'Presentem els projectes|Presentamos los proyectos', timer: 5, punts: ["Quines funcions has fet i com es diuen?|¿Qué funciones has hecho y cómo se llaman?", "Llegeix el programa com un pla.|Lee el programa como un plan.", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe digui quantes vegades es cridarà porta-la.|Antes de ejecutar cada proyecto, que la clase diga cuántas veces se llamará a llévala." },
      { id: 's15', k: 'resum', t: 'Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad', punts: ["Una funció és un grup de blocs amb nom.|Una función es un grupo de bloques con nombre.", "Una funció es pot posar dins d'un bucle.|Una función se puede poner dentro de un bucle.", "Reutilitzar fa els programes curts i fàcils d'arreglar.|Reutilizar hace los programas cortos y fáciles de arreglar.", "Planificar: què es repeteix? Posa-hi un bon nom!|Planificar: ¿qué se repite? ¡Ponle un buen nombre!"],
        nota: "Felicita la classe pel projecte. Avança que la unitat següent tracta de comptar i recordar coses.|Felicita a la clase por el proyecto. Avanza que la unidad siguiente trata de contar y recordar cosas." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Què és una funció i per a què serveix?|¿Qué es una función y para qué sirve?", "Per què és millor dir-ne «porta-la» que «A»?|¿Por qué es mejor llamarla «llévala» que «A»?"],
        nota: "Respostes: un grup de blocs amb nom que es pot cridar moltes vegades; perquè el nom explica què fa i el programa s'entén.|Respuestas: un grupo de bloques con nombre que se puede llamar muchas veces; porque el nombre explica qué hace y el programa se entiende." }
    ],
    print: [
      { id: 'p1', t: 'Full de pla de la ciutat|Hoja de plan de la ciudad', k: 'fitxa',
        intro: "Primer penseu el pla: què es repeteix? Després escriviu la funció i el programa. En Bit només porta una caixa cada vegada.|Primero pensad el plan: ¿qué se repite? Después escribid la función y el programa. Bit solo lleva una caja cada vez.",
        items: [
          { q: "En Bit comença mirant amunt. Escriu la funció porta-la i el programa per fer els dos encàrrecs. Després proveu-ho a la quadrícula del terra.|Bit empieza mirando arriba. Escribe la función llévala y el programa para hacer los dos encargos. Después probadlo en la cuadrícula del suelo.",
            w: { map: ['.....', 'Hb#H.', '#....', 'b....', '^....'] }, solProg: 'A r A', solFns: { A: 'f p f f d' },
            sol: "Porta-la: Endavant, Agafa, Endavant, Endavant, Deixa. Programa: porta-la, Gira a la dreta, porta-la.|Llévala: Adelante, Coge, Adelante, Adelante, Deja. Programa: llévala, Gira a la derecha, llévala." },
          { q: "Quin gir has posat entre els dos encàrrecs? Per què va al programa i no a dins de la funció?|¿Qué giro has puesto entre los dos encargos? ¿Por qué va en el programa y no dentro de la función?",
            sol: "Gira a la dreta. Va al programa perquè només passa entre el primer encàrrec i el segon, no a cada encàrrec.|Gira a la derecha. Va en el programa porque solo pasa entre el primer encargo y el segundo, no en cada encargo." },
          { q: "El projecte de l'app: la ciutat dels robots. Marca al mapa els tres encàrrecs i escriu el teu pla: quines funcions faràs, quin nom tindran i en quin ordre les cridaràs.|El proyecto de la app: la ciudad de los robots. Marca en el mapa los tres encargos y escribe tu plan: qué funciones harás, qué nombre tendrán y en qué orden las llamarás.",
            w: { map: ['>#.###.', '.b.H.b.', '.#.#.#.', '.H.b.H.', '.###...'] }, solProg: 'f r A B A f r f f r A', solFns: { A: 'f p f f d', B: 'f l f f l' },
            sol: "Resposta oberta. Una possibilitat: porta-la (Endavant, Agafa, Endavant, Endavant, Deixa) als tres carrers, i una funció B (Endavant, Gira a l'esquerra, Endavant, Endavant, Gira a l'esquerra) per passar del primer carrer al segon.|Respuesta abierta. Una posibilidad: llévala (Adelante, Coge, Adelante, Adelante, Deja) en las tres calles, y una función B (Adelante, Gira a la izquierda, Adelante, Adelante, Gira a la izquierda) para pasar de la primera calle a la segunda." },
          { q: "Inventa un nom bo per a aquestes funcions: a) puja un esglaó; b) fa la volta a una plaça; c) agafa una caixa i la deixa a la casa del costat.|Inventa un buen nombre para estas funciones: a) sube un escalón; b) da la vuelta a una plaza; c) coge una caja y la deja en la casa de al lado.",
            sol: "Resposta oberta. Per exemple: a) puja o esglaó; b) volta a la plaça; c) reparteix o porta-la. Un bon nom diu què fa la funció.|Respuesta abierta. Por ejemplo: a) sube o escalón; b) vuelta a la plaza; c) reparte o llévala. Un buen nombre dice qué hace la función." }
        ] },
      { id: 'p2', t: 'Targetes de la ciutat|Tarjetas de la ciudad', k: 'targetes',
        intro: "Afegiu-les al paquet de la unitat. La targeta lila de porta-la va al programa i les seves targetes, a la llibreta. Les de caixa i casa marquen el mapa a la quadrícula.|Añadidlas al paquete de la unidad. La tarjeta lila de llévala va en el programa y sus tarjetas, en la libreta. Las de caja y casa marcan el mapa en la cuadrícula.",
        items: [
          { t: 'Funció porta-la 📦|Función llévala 📦', n: 3 },
          { t: 'Agafa la caixa ⬆|Coge la caja ⬆', n: 2 },
          { t: 'Deixa la caixa ⬇|Deja la caja ⬇', n: 2 },
          { t: 'Caixa 📦|Caja 📦', n: 2 },
          { t: 'Casa 🏠|Casa 🏠', n: 2 },
          { t: 'Pla del projecte 📝|Plan del proyecto 📝', n: 1 }
        ] }
    ]
  }
});
