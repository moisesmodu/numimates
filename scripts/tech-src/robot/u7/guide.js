/* ===== Numi Tech · guia del professorat · Tech Robot, unitat 7 «Fins que…» (bucles amb condició) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Repeteix fins que arribis ---------- */
  'r7-1': {
    intro: "Primera sessió de bucles amb condició. L'alumnat descobreix el bloc <b>«Repeteix fins que…»</b>: repeteix els blocs de dins i, <b>abans de cada volta</b>, pregunta si ja es compleix la condició (arribar a la bandera, tenir un obstacle davant, trobar una caixa). Serveix quan no se sap quantes vegades caldrà repetir, com quan mengem fins que el plat és buit. També coneix el <b>bucle infinit</b>, que passa quan els blocs de dins no acosten en Bit a la condició. La classe fa teoria amb demos de predicció, el «robot a la boira» al terra i reptes amb illes de llargades diferents.|Primera sesión de bucles con condición. El alumnado descubre el bloque <b>«Repite hasta que…»</b>: repite los bloques de dentro y, <b>antes de cada vuelta</b>, pregunta si ya se cumple la condición (llegar a la bandera, tener un obstáculo delante, encontrar una caja). Sirve cuando no se sabe cuántas veces habrá que repetir, como cuando comemos hasta que el plato está vacío. También conoce el <b>bucle infinito</b>, que pasa cuando los bloques de dentro no acercan a Bit a la condición. La clase hace teoría con demos de predicción, el «robot en la niebla» en el suelo y retos con islas de longitudes diferentes.",
    claus: [
      "«Repeteix fins que…» repeteix fins que es compleix una condició, sense saber el número de vegades.|«Repite hasta que…» repite hasta que se cumple una condición, sin saber el número de veces.",
      "La pregunta es fa abans de cada volta, també la primera: si ja es compleix, no fa cap volta.|La pregunta se hace antes de cada vuelta, también la primera: si ya se cumple, no da ninguna vuelta.",
      "Cal triar la condició que diu on ha de parar en Bit: la bandera, un obstacle o una caixa.|Hay que elegir la condición que dice dónde tiene que parar Bit: la bandera, un obstáculo o una caja.",
      "Si els blocs de dins no acosten en Bit a la condició, el bucle és infinit.|Si los bloques de dentro no acercan a Bit a la condición, el bucle es infinito."
    ],
    prev: [
      "El bucle «Repeteix N vegades» (unitat 2).|El bucle «Repite N veces» (unidad 2).",
      "Els sensors i el bloc «Si…»: obstacle davant, bandera (unitat 4).|Los sensores y el bloque «Si…»: obstáculo delante, bandera (unidad 4).",
      "Agafa i Deixa la caixa (unitat 1).|Coge y Deja la caja (unidad 1)."
    ],
    faq: [
      ["Com sap en Bit que ha arribat?|¿Cómo sabe Bit que ha llegado?", "El seu sensor mira la casella on és abans de cada volta. Si és la bandera, la condició es compleix i el bucle para.|Su sensor mira la casilla donde está antes de cada vuelta. Si es la bandera, la condición se cumple y el bucle para."],
      ["Per què en Bit para abans de la roca i no a sobre?|¿Por qué Bit para antes de la roca y no encima?", "Perquè la condició és «hi hagi un obstacle davant»: quan el té davant, ja no fa cap altre pas.|Porque la condición es «haya un obstáculo delante»: cuando lo tiene delante, ya no da ningún otro paso."],
      ["Què passa si la condició ja es compleix al principi?|¿Qué pasa si la condición ya se cumple al principio?", "El bucle no fa cap volta i el programa passa directament al bloc següent.|El bucle no da ninguna vuelta y el programa pasa directamente al bloque siguiente."],
      ["Per què en Bit s'atura sol en el bucle infinit?|¿Por qué Bit se para solo en el bucle infinito?", "L'app veu que en Bit dona massa voltes sense arribar i l'atura perquè no s'hi passi tota l'estona. Llavors cal arreglar el programa.|La app ve que Bit da demasiadas vueltas sin llegar y lo para para que no se pase todo el rato. Entonces hay que arreglar el programa."],
      ["Aleshores ja no cal el «Repeteix N vegades»?|Entonces, ¿ya no hace falta el «Repite N veces»?", "Sí que cal: quan saps el número, és el més clar. El «fins que» és per quan no el saps. Ho treballarem la setmana vinent.|Sí que hace falta: cuando sabes el número, es el más claro. El «hasta que» es para cuando no lo sabes. Lo trabajaremos la semana que viene."],
      ["Es pot posar més d'un bloc dins del «fins que»?|¿Se puede poner más de un bloque dentro del «hasta que»?", "Sí: tots els blocs de dins es fan a cada volta, en ordre. Les properes sessions n'hi posarem més.|Sí: todos los bloques de dentro se hacen en cada vuelta, en orden. En las próximas sesiones pondremos más."]
    ],
    tec: [
      ["No troba com canviar la condició del bucle.|No encuentra cómo cambiar la condición del bucle.", "Que toqui el bloc «Repeteix fins que…» i triï «Canvia la condició» fins que surti la que vol.|Que toque el bloque «Repite hasta que…» y elija «Cambia la condición» hasta que salga la que quiere."],
      ["En Bit es queda donant voltes i no s'acaba.|Bit se queda dando vueltas y no termina.", "Toqueu «Atura» o espereu: l'app l'atura sola i avisa que no s'acaba mai. Després, que miri què hi ha dins del bucle.|Tocad «Para» o esperad: la app lo para sola y avisa de que no se acaba nunca. Después, que mire qué hay dentro del bucle."],
      ["El programa funciona a l'illa 1 però el repte no se supera.|El programa funciona en la isla 1 pero el reto no se supera.", "S'ha de provar a totes les pestanyes «Illa». Que miri a quina falla i què hi té de diferent.|Se tiene que probar en todas las pestañas «Isla». Que mire en cuál falla y qué tiene de diferente."],
      ["Els camins de cinta del terra s'enganxen malament o es mouen.|Los caminos de cinta del suelo se pegan mal o se mueven.", "Feu servir cinta de pintor ampla i marqueu-los abans de la classe; la boira pot ser un full doblegat a sobre.|Usad cinta de pintor ancha y marcadlos antes de la clase; la niebla puede ser una hoja doblada encima."]
    ],
    seg: [
      "Al «robot a la boira», el robot camina a poc a poc; si es tapen els ulls, un company/a l'acompanya de la mà.|En el «robot en la niebla», el robot camina despacio; si se tapan los ojos, un compañero/a lo acompaña de la mano.",
      "A la pausa activa dels girs, deixeu espai al voltant de cada alumne/a.|En la pausa activa de los giros, dejad espacio alrededor de cada alumno/a."
    ],
    extra: [
      "Recull de «fins que» de la vida diària: cada alumne/a n'escriu un en un post-it i feu un mural (rentar fins que estigui net, caminar fins al semàfor…).|Recopilación de «hasta que» de la vida diaria: cada alumno/a escribe uno en un pósit y haced un mural (lavar hasta que esté limpio, caminar hasta el semáforo…).",
      "Dibuixar a la quadrícula un camí nou amb una estrella al final i escriure un programa amb «fins que hi hagi un obstacle» perquè el resolgui un company/a.|Dibujar en la cuadrícula un camino nuevo con una estrella al final y escribir un programa con «hasta que haya un obstáculo» para que lo resuelva un compañero/a.",
      "Repte del mínim de blocs a la caixa de l'expedició i explicar per què el segon bucle para a la casa.|Reto del mínimo de bloques en la caja de la expedición y explicar por qué el segundo bucle para en la casa."
    ],
    trans: [
      "Unitat 2 i unitat 4: el bucle de N vegades i les condicions del «Si…» s'ajunten en un sol bloc.|Unidad 2 y unidad 4: el bucle de N veces y las condiciones del «Si…» se juntan en un solo bloque.",
      "Matemàtiques: estimar i comparar llargades; comptar quantes vegades es fa una pregunta.|Matemáticas: estimar y comparar longitudes; contar cuántas veces se hace una pregunta.",
      "Sessió següent: camins de llargada desconeguda amb revolts i saber triar entre N vegades i «fins que».|Sesión siguiente: caminos de longitud desconocida con curvas y saber elegir entre N veces y «hasta que»."
    ],
    obj: [
      "L'alumne/a explica la diferència entre «Repeteix 5 vegades» i «Repeteix fins que…» amb un exemple de la vida diària.|El alumno/a explica la diferencia entre «Repite 5 veces» y «Repite hasta que…» con un ejemplo de la vida diaria.",
      "L'alumne/a fa servir «Repeteix fins que arribis a la bandera» i «Repeteix fins que hi hagi un obstacle davant» per portar en Bit on toca.|El alumno/a usa «Repite hasta que llegues a la bandera» y «Repite hasta que haya un obstáculo delante» para llevar a Bit donde toca.",
      "L'alumne/a diu que el bucle fa la pregunta abans de cada volta i para quan la resposta és «sí».|El alumno/a dice que el bucle hace la pregunta antes de cada vuelta y para cuando la respuesta es «sí».",
      "L'alumne/a reconeix un bucle infinit i el corregeix canviant els blocs de dins o la condició.|El alumno/a reconoce un bucle infinito y lo corrige cambiando los bloques de dentro o la condición."
    ],
    comp: [
      "Competència digital (CD5): crear programes que funcionen en situacions que canvien|Competencia digital (CD5): crear programas que funcionan en situaciones que cambian",
      "Pensament computacional: bucle amb condició, condició d'aturada i bucle infinit|Pensamiento computacional: bucle con condición, condición de parada y bucle infinito",
      "Matemàtiques: comptar i estimar quantitats desconegudes; comparar llargades|Matemáticas: contar y estimar cantidades desconocidas; comparar longitudes",
      "Comunicació oral: explicar amb paraules quan s'atura una repetició|Comunicación oral: explicar con palabras cuándo se para una repetición"
    ],
    vocab: [
      ["Bucle amb condició|Bucle con condición", "Un bucle que repeteix fins que passa alguna cosa, sense saber quantes vegades caldrà.|Un bucle que repite hasta que pasa algo, sin saber cuántas veces hará falta."],
      ["Condició|Condición", "La pregunta que fa en Bit abans de cada volta: «hi he arribat?», «tinc un obstacle davant?».|La pregunta que hace Bit antes de cada vuelta: «¿he llegado?», «¿tengo un obstáculo delante?»."],
      ["Fins que|Hasta que", "Les paraules que diuen quan s'ha d'aturar la repetició.|Las palabras que dicen cuándo se tiene que parar la repetición."],
      ["Volta|Vuelta", "Cada vegada que el bucle fa els blocs de dins.|Cada vez que el bucle hace los bloques de dentro."],
      ["Bucle infinit|Bucle infinito", "Un bucle que no s'acaba mai perquè la condició no es compleix mai.|Un bucle que no se acaba nunca porque la condición no se cumple nunca."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Repeteix fins que arribis»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Repite hasta que llegues»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cinta de pintor per marcar al terra tres camins rectes de llargades diferents (3, 5 i 7 caselles, d'uns 40 cm)|Cinta de pintor para marcar en el suelo tres caminos rectos de longitudes diferentes (3, 5 y 7 casillas, de unos 40 cm)",
        "Tres banderes de paper, alguns fulls grans per fer de «boira» i un estoig que faci de caixa|Tres banderas de papel, algunas hojas grandes para hacer de «niebla» y un estuche que haga de caja"
      ],
      imprimir: ["Targetes del bucle «fins que»|Tarjetas del bucle «hasta que»", "Quadrícula del terra: missions de la boira|Cuadrícula del suelo: misiones de la niebla"],
      prep: [
        "Marcar els tres camins al terra, l'un al costat de l'altre, amb una bandera al final de cadascun. Tapar la meitat final de cada camí amb fulls de «boira».|Marcar los tres caminos en el suelo, uno al lado del otro, con una bandera al final de cada uno. Tapar la mitad final de cada camino con hojas de «niebla».",
        "Imprimir i retallar un paquet de targetes per grup de 3. Es poden afegir a les targetes d'ordres de la unitat 1.|Imprimir y recortar un paquete de tarjetas por grupo de 3. Se pueden añadir a las tarjetas de órdenes de la unidad 1.",
        "Provar les demostracions de les diapositives 7 i 8 per saber quantes vegades pregunta en Bit i on acaba.|Probar las demostraciones de las diapositivas 7 y 8 para saber cuántas veces pregunta Bit y dónde termina.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la cova i la boira|Bienvenida: la cueva y la niebla", fase: 'inici',
        fa: "Fes la pregunta de repàs del bucle de la unitat 2. Explica la nova aventura: s'ha trobat una cova a la muntanya i en Bit va amb l'expedició, però hi ha boira i no se sap quant fa el camí. Pregunta quantes cullerades calen per menjar-se un plat de sopa i recull respostes.|Haz la pregunta de repaso del bucle de la unidad 2. Explica la nueva aventura: se ha encontrado una cueva en la montaña y Bit va con la expedición, pero hay niebla y no se sabe cuánto mide el camino. Pregunta cuántas cucharadas hacen falta para comerse un plato de sopa y recoge respuestas.",
        diu: ["Amb «Repeteix 4 vegades: Endavant», quantes caselles avança en Bit?|Con «Repite 4 veces: Adelante», ¿cuántas casillas avanza Bit?",
          "Quantes cullerades feu per menjar-vos la sopa? Ho sabeu abans de començar?|¿Cuántas cucharadas hacéis para comeros la sopa? ¿Lo sabéis antes de empezar?",
          "Si no sabem el número, com ho farà en Bit per saber quan ha de parar?|Si no sabemos el número, ¿cómo lo hará Bit para saber cuándo tiene que parar?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Repeteix fins que…|Repite hasta que…", fase: 'teoria',
        fa: "Explica el bucle amb condició amb l'animació del plat. Amb la segona animació, remarca que la pregunta es fa abans de cada volta. Presenta el bloc nou i, abans d'executar cada demostració, demana que la classe predigui quantes vegades preguntarà en Bit i on acabarà. Acaba amb el bucle infinit: que expliquin per què no s'acaba.|Explica el bucle con condición con la animación del plato. Con la segunda animación, remarca que la pregunta se hace antes de cada vuelta. Presenta el bloque nuevo y, antes de ejecutar cada demostración, pide que la clase prediga cuántas veces preguntará Bit y dónde terminará. Acaba con el bucle infinito: que expliquen por qué no se acaba.",
        diu: ["Mengeu fins que el plat és buit: això és un bucle amb condició!|Coméis hasta que el plato está vacío: ¡eso es un bucle con condición!",
          "Quantes vegades preguntarà en Bit «hi he arribat?» abans de parar?|¿Cuántas veces preguntará Bit «¿he llegado?» antes de parar?",
          "Si dins del bucle només hi ha «Gira», en Bit s'acosta a la bandera?|Si dentro del bucle solo hay «Gira», ¿Bit se acerca a la bandera?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot a la boira|El robot en la niebla", fase: 'desconnectat',
        fa: "Grups de 3: programador/a, robot i revisor/a. Primer, el programador/a fa un programa amb la targeta «Repeteix 4 vegades» per a un dels camins tapats per la boira, i el robot el prova als tres camins: només en funciona un. Després, fan el programa amb «Repeteix fins que arribis a la bandera: Endavant» i el proven als tres camins. El robot ha de dir en veu alta «Hi he arribat?» abans de cada pas. Acabeu amb les missions de la fitxa de la quadrícula i roteu els papers.|Grupos de 3: programador/a, robot y revisor/a. Primero, el programador/a hace un programa con la tarjeta «Repite 4 veces» para uno de los caminos tapados por la niebla, y el robot lo prueba en los tres caminos: solo funciona en uno. Después, hacen el programa con «Repite hasta que llegues a la bandera: Adelante» y lo prueban en los tres caminos. El robot tiene que decir en voz alta «¿He llegado?» antes de cada paso. Acabad con las misiones de la ficha de la cuadrícula y rotad los papeles.",
        diu: ["Amb «Repeteix 4 vegades», a quin camí arriba el robot a la bandera? I als altres?|Con «Repite 4 veces», ¿en qué camino llega el robot a la bandera? ¿Y en los otros?",
          "Robot: abans de cada pas, pregunta en veu alta «Hi he arribat?».|Robot: antes de cada paso, pregunta en voz alta «¿He llegado?».",
          "Heu hagut de canviar el programa per a cada camí? Per què no?|¿Habéis tenido que cambiar el programa para cada camino? ¿Por qué no?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. Al pas «Fins que el plat sigui buit», que toquin «Ara no» i el facin a casa. Passeja i, a l'«On acabarà?», demana que expliquin per què en Bit no para a la A. Al bucle que no s'acaba, que l'executin per veure que en Bit s'atura sol, i després que toquin el bloc.|Cada alumno/a hace la sesión hasta la pausa activa. En el paso «Hasta que el plato esté vacío», que toquen «Ahora no» y lo hagan en casa. Pasea y, en el «¿Dónde terminará?», pide que expliquen por qué Bit no para en la A. En el bucle que no se acaba, que lo ejecuten para ver que Bit se para solo, y después que toquen el bloque.",
        diu: ["Per què en Bit no para a la A? Què té davant, allà?|¿Por qué Bit no para en la A? ¿Qué tiene delante, allí?",
          "Si la bandera estigués més lluny, què canviaries del programa?|Si la bandera estuviera más lejos, ¿qué cambiarías del programa?",
          "En el bucle que no s'acaba: què hi ha dins? Acosta en Bit a la bandera?|En el bucle que no se acaba: ¿qué hay dentro? ¿Acerca a Bit a la bandera?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, les històries de la boira, les targetes de «Descobreix», la frase del globus, «Fins que el plat sigui buit» (per a casa), la bandera més lluny, «On acabarà?» i el bucle que no s'acaba mai.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, las historias de la niebla, las tarjetas de «Descubre», la frase del globo, «Hasta que el plato esté vacío» (para casa), la bandera más lejos, «¿Dónde terminará?» y el bucle que no se acaba nunca.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: fins a la meta|Retos: hasta la meta", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, programa amb la classe la demostració de la caixa demanant cada bloc. Deixa'ls fer els cinc reptes. Al de les tres illes, si algú fa servir «Repeteix 3 vegades», deixa que vegi com falla a l'illa 2 abans d'ajudar-lo. Al de la bandera que se'ls passa, recorda'ls com es canvia la condició.|Haced la pausa activa todos juntos. Después, programa con la clase la demostración de la caja pidiendo cada bloque. Deja que hagan los cinco retos. En el de las tres islas, si alguien usa «Repite 3 veces», deja que vea cómo falla en la isla 2 antes de ayudarle. En el de la bandera que se pasa, recuérdales cómo se cambia la condición.",
        diu: ["Funciona a les tres illes? Mira les pestanyes de dalt.|¿Funciona en las tres islas? Mira las pestañas de arriba.",
          "On ha de parar en Bit, de veritat: a l'obstacle o a la bandera?|¿Dónde tiene que parar Bit, de verdad: en el obstáculo o en la bandera?",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes: només 2 blocs, les tres illes de la boira, l'estrella del final del camí, el bug de la bandera i la caixa de l'expedició.|«Pausa activa» y los cinco retos: solo 2 bloques, las tres islas de la niebla, la estrella del final del camino, el bug de la bandera y la caja de la expedición.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el camí de la boira|Crea: el camino de la niebla", fase: 'crea',
        fa: "Cada alumne/a porta en Bit al campament amb almenys dos bucles «fins que». Quan acabin, per parelles s'ensenyen el programa i l'altre/a diu, abans d'executar-lo, on para cada bucle.|Cada alumno/a lleva a Bit al campamento con al menos dos bucles «hasta que». Cuando terminen, por parejas se enseñan el programa y el otro/a dice, antes de ejecutarlo, dónde para cada bucle.",
        diu: ["On para el teu primer bucle? I el segon?|¿Dónde para tu primer bucle? ¿Y el segundo?",
          "Hi ha algun Endavant repetit que podries canviar per un bucle?|¿Hay algún Adelante repetido que podrías cambiar por un bucle?",
          "Si la bandera fos dues caselles més lluny, el teu programa encara hi arribaria?|Si la bandera estuviera dos casillas más lejos, ¿tu programa todavía llegaría?"],
        slides: ['s15'], app: "Pas «Crea»: El camí de la boira.|Paso «Crea»: El camino de la niebla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta.",
        diu: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.",
          "Què passa si la condició no es compleix mai?|¿Qué pasa si la condición no se cumple nunca?",
          "Quantes vegades pregunta en Bit «hi he arribat?» si la bandera és a 3 caselles? (4: tres vegades no i una de sí.)|¿Cuántas veces pregunta Bit «¿he llegado?» si la bandera está a 3 casillas? (4: tres veces no y una sí.)"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «Repeteix fins que…» però no hi posa cap bloc a dins, o el posa a sota del bucle.|Pone «Repite hasta que…» pero no le pone ningún bloque dentro, o lo pone debajo del bucle.",
        "Pregunta: què ha de fer en Bit a cada volta? Que miri la ratlla del cursor: els blocs nous van on diu «els blocs nous van aquí».|Pregunta: ¿qué tiene que hacer Bit en cada vuelta? Que mire la raya del cursor: los bloques nuevos van donde dice «los bloques nuevos van aquí»."],
      ["Creu que el bucle fa una sola volta, o que para després de la primera.|Cree que el bucle hace una sola vuelta, o que para después de la primera.",
        "Que faci el programa «Pas a pas» i compti en veu alta les vegades que en Bit pregunta «hi he arribat?».|Que haga el programa «Paso a paso» y cuente en voz alta las veces que Bit pregunta «¿he llegado?»."],
      ["No canvia la condició: fa servir «arribis a la bandera» on no hi ha bandera.|No cambia la condición: usa «llegues a la bandera» donde no hay bandera.",
        "Pregunta: hi ha bandera en aquest mapa? Què hi ha al final del camí? Recorda-li que tocant el bloc pot triar «Canvia la condició».|Pregunta: ¿hay bandera en este mapa? ¿Qué hay al final del camino? Recuérdale que tocando el bloque puede elegir «Cambia la condición»."],
      ["Fa un bucle infinit (per exemple, només «Gira» a dins) i s'espera molta estona.|Hace un bucle infinito (por ejemplo, solo «Gira» dentro) y espera mucho rato.",
        "Ensenya-li el botó «Atura». Pregunta: els blocs de dins acosten en Bit a la condició? Què hauria de fer a cada volta per arribar-hi?|Enséñale el botón «Para». Pregunta: ¿los bloques de dentro acercan a Bit a la condición? ¿Qué tendría que hacer en cada vuelta para llegar?"],
      ["Continua fent servir «Repeteix N vegades» i canvia el número per a cada illa.|Sigue usando «Repite N veces» y cambia el número para cada isla.",
        "Felicita'l perquè compta bé i pregunta: i si demà el camí fos més llarg? Existeix un bucle que no necessiti el número?|Felicítale porque cuenta bien y pregunta: ¿y si mañana el camino fuera más largo? ¿Existe un bucle que no necesite el número?"]
    ],
    diff: {
      mes: "Fer el repte de la caixa amb el mínim de blocs i explicar per què el segon bucle para a la casa. Després, dibuixar a la quadrícula un camí nou amb una estrella al final i escriure un programa amb «fins que hi hagi un obstacle» perquè el resolgui un company/a.|Hacer el reto de la caja con el mínimo de bloques y explicar por qué el segundo bucle para en la casa. Después, dibujar en la cuadrícula un camino nuevo con una estrella al final y escribir un programa con «hasta que haya un obstáculo» para que lo resuelva un compañero/a.",
      menys: "Tenir a la taula la targeta «Repeteix fins que…» i la de la condició, i fer de robot amb el dit sobre la pantalla abans d'executar. Començar pels reptes d'una sola illa i fer servir «Pas a pas» per veure cada pregunta del bucle.|Tener en la mesa la tarjeta «Repite hasta que…» y la de la condición, y hacer de robot con el dedo sobre la pantalla antes de ejecutar. Empezar por los retos de una sola isla y usar «Paso a paso» para ver cada pregunta del bucle."
    },
    aval: {
      ticket: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.",
        "Què passa si dins d'un «fins que arribis» només hi ha «Gira»?|¿Qué pasa si dentro de un «hasta que llegues» solo hay «Gira»?"],
      rubric: [
        ["Idea de bucle amb condició|Idea de bucle con condición", "Explica que repeteix fins que es compleix la condició i en dona un exemple propi.|Explica que repite hasta que se cumple la condición y da un ejemplo propio.", "Reconeix un «fins que» en un exemple, però el confon amb un número de vegades.|Reconoce un «hasta que» en un ejemplo, pero lo confunde con un número de veces."],
        ["Triar la condició|Elegir la condición", "Tria «arribis a la bandera», «hi hagi un obstacle» o «hi hagi una caixa» segons el que demana el mapa.|Elige «llegues a la bandera», «haya un obstáculo» o «haya una caja» según lo que pide el mapa.", "Fa servir sempre la mateixa condició, encara que el mapa no tingui bandera.|Usa siempre la misma condición, aunque el mapa no tenga bandera."],
        ["Bucle infinit|Bucle infinito", "Explica per què un bucle no s'acaba i l'arregla canviant els blocs de dins.|Explica por qué un bucle no se acaba y lo arregla cambiando los bloques de dentro.", "Veu que no s'acaba, però necessita ajuda per trobar el bloc que falla.|Ve que no se acaba, pero necesita ayuda para encontrar el bloque que falla."],
        ["Predir on para|Predecir dónde para", "Diu on pararà el bucle abans d'executar-lo i explica per què no para abans.|Dice dónde parará el bucle antes de ejecutarlo y explica por qué no para antes.", "Executa per veure on para i encara no ho sap explicar.|Ejecuta para ver dónde para y todavía no lo sabe explicar."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer amb vosaltres l'activitat «Fins que el plat sigui buit», amb dos plats i uns quants macarrons crus. Fixeu-vos que el programa serveix encara que hi hagi més macarrons!|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer con vosotros la actividad «Hasta que el plato esté vacío», con dos platos y unos cuantos macarrones crudos. ¡Fijaos en que el programa sirve aunque haya más macarrones!",
    slides: [
      { id: 's1', k: 'portada', t: "Repeteix fins que arribis|Repite hasta que llegues", x: "Avui aprendrem un bucle que no necessita saber el número de vegades.|Hoy aprenderemos un bucle que no necesita saber el número de veces.",
        nota: "Presenta la unitat: en Bit va d'expedició a la cova de la muntanya. Aquesta setmana, el camí amb boira.|Presenta la unidad: Bit va de expedición a la cueva de la montaña. Esta semana, el camino con niebla." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Amb «Repeteix 4 vegades: Endavant», quantes caselles avança en Bit?|Con «Repite 4 veces: Adelante», ¿cuántas casillas avanza Bit?",
        nota: "Resposta: 4. El bucle de la unitat 2 repeteix un número fix de vegades. Avui en veurem un altre.|Respuesta: 4. El bucle de la unidad 2 repite un número fijo de veces. Hoy veremos otro." },
      { id: 's3', k: 'pregunta', t: "Quantes cullerades?|¿Cuántas cucharadas?", x: "Quantes cullerades feu per menjar-vos un plat de sopa? Ho sabeu abans de començar?|¿Cuántas cucharadas hacéis para comeros un plato de sopa? ¿Lo sabéis antes de empezar?",
        nota: "Recull respostes. Conclusió: no ho sabem, i no cal! Mengem fins que el plat és buit.|Recoge respuestas. Conclusión: no lo sabemos, ¡y no hace falta! Comemos hasta que el plato está vacío." },
      { id: 's4', k: 'anim', t: "Fins que el plat sigui buit|Hasta que el plato esté vacío", anim: 'u7eat', x: "Repetir fins que passa alguna cosa és un bucle amb condició.|Repetir hasta que pasa algo es un bucle con condición.",
        nota: "Demana més exemples: caminar fins al semàfor, bufar el globus fins que és gros, omplir el got fins dalt.|Pide más ejemplos: caminar hasta el semáforo, soplar el globo hasta que es grande, llenar el vaso hasta arriba." },
      { id: 's5', k: 'anim', t: "Primer pregunta, després repeteix|Primero pregunta, después repite", anim: 'u7check', x: "Abans de cada volta, en Bit pregunta: hi he arribat? Si no, avança. Si sí, para.|Antes de cada vuelta, Bit pregunta: ¿he llegado? Si no, avanza. Si sí, para.",
        nota: "Remarca la paraula condició: és la pregunta del bucle. Es fa abans de cada volta, també la primera.|Remarca la palabra condición: es la pregunta del bucle. Se hace antes de cada vuelta, también la primera." },
      { id: 's6', k: 'concepte', pic: 'img/ment/atu.webp', t: "El bloc nou|El bloque nuevo", blocks: [{ t: "Repeteix fins que arribis a la bandera|Repite hasta que llegues a la bandera", c: 'loop' }, { t: "Endavant|Adelante", c: 'mov' }],
        punts: ["Els blocs de dins es repeteixen.|Los bloques de dentro se repiten.", "Para quan es compleix la condició.|Para cuando se cumple la condición.", "Tocant el bloc, pots canviar la condició.|Tocando el bloque, puedes cambiar la condición."],
        nota: "Ensenya la targeta de paper del bucle i les de les condicions: les farem servir a l'activitat del terra.|Enseña la tarjeta de papel del bucle y las de las condiciones: las usaremos en la actividad del suelo." },
      { id: 's7', k: 'demo', t: "Pensa abans d'executar|Piensa antes de ejecutar", x: "Quantes vegades preguntarà en Bit «hi he arribat?» abans de parar?|¿Cuántas veces preguntará Bit «¿he llegado?» antes de parar?",
        demo: { w: { map: ['......', '>####F', '......'] }, prog: 'until:goal{ f }' },
        nota: "Resposta: 5 vegades. Quatre vegades diu que no i avança; la cinquena diu que sí i para.|Respuesta: 5 veces. Cuatro veces dice que no y avanza; la quinta dice que sí y para." },
      { id: 's8', k: 'demo', t: "Fins que hi hagi un obstacle|Hasta que haya un obstáculo", x: "En Bit avança fins que té un obstacle davant. On para: A, B o C?|Bit avanza hasta que tiene un obstáculo delante. ¿Dónde para: A, B o C?",
        demo: { w: { map: ['..C...', '>#A#BR', '......'] }, prog: 'until:wall{ f }' },
        nota: "Que tothom assenyali amb el dit abans d'executar. Resposta: B, just abans de la roca. A la A encara té camí davant.|Que todos señalen con el dedo antes de ejecutar. Respuesta: B, justo antes de la roca. En la A aún tiene camino delante." },
      { id: 's9', k: 'anim', t: "Compte: el bucle infinit|Cuidado: el bucle infinito", anim: 'u7inf', x: "Si els blocs de dins no acosten en Bit a la condició, el bucle no s'acaba mai.|Si los bloques de dentro no acercan a Bit a la condición, el bucle no se acaba nunca.",
        nota: "Pregunta: com ho arreglaríeu? Canviant «Gira» per «Endavant». A l'app, en Bit s'atura sol si dona massa voltes.|Pregunta: ¿cómo lo arreglaríais? Cambiando «Gira» por «Adelante». En la app, Bit se para solo si da demasiadas vueltas." },
      { id: 's10', k: 'activitat', t: "El robot a la boira|El robot en la niebla", timer: 12, punts: ["Primer: «Repeteix 4 vegades» als tres camins.|Primero: «Repite 4 veces» en los tres caminos.", "Després: «Repeteix fins que arribis a la bandera».|Después: «Repite hasta que llegues a la bandera».", "Robot: abans de cada pas, pregunta «Hi he arribat?».|Robot: antes de cada paso, pregunta «¿He llegado?».", "Roteu els papers a cada missió.|Rotad los papeles en cada misión."],
        nota: "Els fulls de boira tapen el final dels camins: el programador/a no pot comptar les caselles. Així es veu per què cal el «fins que».|Las hojas de niebla tapan el final de los caminos: el programador/a no puede contar las casillas. Así se ve por qué hace falta el «hasta que»." },
      { id: 's11', k: 'concepte', pic: 'img/tech/scenes/illa.webp', t: "Regles del robot a la boira|Reglas del robot en la niebla", punts: ["Abans de cada pas, el robot pregunta en veu alta.|Antes de cada paso, el robot pregunta en voz alta.", "Si la resposta és no, fa els blocs de dins.|Si la respuesta es no, hace los bloques de dentro.", "Si és sí, para i passa a la targeta següent.|Si es sí, para y pasa a la tarjeta siguiente.", "El revisor/a vigila que no es salti cap pregunta.|El revisor/a vigila que no se salte ninguna pregunta."],
        nota: "Deixa aquesta diapositiva projectada mentre treballen al terra.|Deja esta diapositiva proyectada mientras trabajan en el suelo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Repeteix fins que arribis».|Abre la sesión «Repite hasta que llegues».", "«Fins que el plat sigui buit» és per fer a casa: toca «Ara no».|«Hasta que el plato esté vacío» es para hacer en casa: toca «Ahora no».", "A «On acabarà?», pensa abans de triar.|En «¿Dónde terminará?», piensa antes de elegir.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Al bucle que no s'acaba, deixa que l'executin: en Bit s'atura sol al cap d'una estona i diu que no s'acaba mai.|En el bucle que no se acaba, deja que lo ejecuten: Bit se para solo al cabo de un rato y dice que no se acaba nunca." },
      { id: 's13', k: 'demo', t: "Programem junts: la caixa|Programemos juntos: la caja", x: "Avança fins que hi hagi una caixa, agafa-la, i avança fins al final del camí, on hi ha la casa.|Avanza hasta que haya una caja, cógela, y avanza hasta el final del camino, donde está la casa.",
        demo: { w: { map: ['.......', '>##b##H', '.......'] }, prog: 'until:box{ f } p until:wall{ f } d' },
        nota: "Demana un bloc a cada alumne/a. Fes notar que hi ha dos bucles seguits amb condicions diferents.|Pide un bloque a cada alumno/a. Haz notar que hay dos bucles seguidos con condiciones diferentes." },
      { id: 's14', k: 'repte', t: "Reptes: fins a la meta|Retos: hasta la meta", timer: 10, punts: ["1. Només 2 blocs i les tres illes|1. Solo 2 bloques y las tres islas", "2. L'estrella del final del camí|2. La estrella del final del camino", "3. El bug: en Bit es passa de la bandera|3. El bug: Bit se pasa de la bandera", "4. La caixa de l'expedició|4. La caja de la expedición"],
        nota: "Si algú s'encalla, pregunta: on ha de parar en Bit? Quina condició ho diu?|Si alguien se atasca, pregunta: ¿dónde tiene que parar Bit? ¿Qué condición lo dice?" },
      { id: 's15', k: 'activitat', t: "Crea: el camí de la boira|Crea: el camino de la niebla", timer: 5, x: "Porta en Bit al campament amb almenys dos «Repeteix fins que…». Després, el company/a diu on para cada bucle.|Lleva a Bit al campamento con al menos dos «Repite hasta que…». Después, el compañero/a dice dónde para cada bucle.",
        nota: "Hi ha diverses solucions bones. Celebra qui fa servir tres bucles.|Hay varias soluciones buenas. Celebra a quien usa tres bucles." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Repeteix fins que…» repeteix fins que es compleix la condició.|«Repite hasta que…» repite hasta que se cumple la condición.", "Va bé quan no sabem quantes vegades cal repetir.|Va bien cuando no sabemos cuántas veces hay que repetir.", "Si la condició no es compleix mai, el bucle és infinit.|Si la condición no se cumple nunca, el bucle es infinito."],
        nota: "Torna a la sopa del principi: ara ja sabeu programar «fins que el plat sigui buit».|Vuelve a la sopa del principio: ahora ya sabéis programar «hasta que el plato esté vacío»." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues una cosa que facis «fins que» passa alguna cosa.|Di algo que hagas «hasta que» pasa algo.", "Què passa si dins d'un «fins que arribis» només hi ha «Gira»?|¿Qué pasa si dentro de un «hasta que llegues» solo hay «Gira»?"],
        nota: "Resposta de la segona: en Bit dona voltes sense parar perquè no s'acosta mai a la bandera.|Respuesta de la segunda: Bit da vueltas sin parar porque nunca se acerca a la bandera." }
    ],
    print: [
      { id: 'p1', t: "Targetes del bucle «fins que»|Tarjetas del bucle «hasta que»", k: 'targetes',
        intro: "Un paquet per grup de 3. La targeta «Repeteix fins que…» va a dalt, la condició just al costat i els blocs que es repeteixen a sota, fins a la targeta «Fi del bucle».|Un paquete por grupo de 3. La tarjeta «Repite hasta que…» va arriba, la condición justo al lado y los bloques que se repiten debajo, hasta la tarjeta «Fin del bucle».",
        items: [
          { t: "Repeteix fins que… 🔁|Repite hasta que… 🔁", n: 3 },
          { t: "arribis a la bandera 🚩|llegues a la bandera 🚩", n: 2 },
          { t: "hi hagi un obstacle davant 🪨|haya un obstáculo delante 🪨", n: 2 },
          { t: "hi hagi una caixa 📦|haya una caja 📦", n: 1 },
          { t: "Fi del bucle 🔚|Fin del bucle 🔚", n: 3 },
          { t: "Repeteix 4 vegades 4️⃣|Repite 4 veces 4️⃣", n: 1 },
          { t: "Endavant ⬆|Adelante ⬆", n: 4 },
          { t: "Boira ☁️|Niebla ☁️", n: 4 }
        ] },
      { id: 'p2', t: "Quadrícula del terra: missions de la boira|Cuadrícula del suelo: misiones de la niebla", k: 'quadricula',
        intro: "Marqueu cada missió a la quadrícula del terra (o en un A3 a la taula). Tapeu el final del camí amb fulls de boira: el programa ha de funcionar sense comptar les caselles.|Marcad cada misión en la cuadrícula del suelo (o en un A3 en la mesa). Tapad el final del camino con hojas de niebla: el programa tiene que funcionar sin contar las casillas.",
        items: [
          { t: "Missió 1: la bandera a prop|Misión 1: la bandera cerca", w: 6, h: 3, cells: ['......', '>..F..', '......'],
            instructions: "En Bit mira cap a la bandera. Feu el programa amb una sola targeta d'Endavant.|Bit mira hacia la bandera. Haced el programa con una sola tarjeta de Adelante.", sol: 'until:goal{ f }' },
          { t: "Missió 2: la bandera lluny|Misión 2: la bandera lejos", w: 6, h: 3, cells: ['......', '>....F', '......'],
            instructions: "Funciona el mateix programa de la missió 1? Proveu-ho sense canviar cap targeta.|¿Funciona el mismo programa de la misión 1? Probadlo sin cambiar ninguna tarjeta.", sol: 'until:goal{ f }' },
          { t: "Missió 3: l'estrella de la roca|Misión 3: la estrella de la roca", w: 6, h: 3, cells: ['......', '>..*R.', '......'],
            instructions: "No hi ha bandera. Feu que el robot avanci fins que tingui la roca (una motxilla) davant i reculli l'estrella.|No hay bandera. Haced que el robot avance hasta que tenga la roca (una mochila) delante y recoja la estrella.", sol: 'until:wall{ f }' },
          { t: "Missió 4: la caixa de l'expedició|Misión 4: la caja de la expedición", w: 6, h: 3, cells: ['......', '>.b..H', '......'],
            instructions: "Dos bucles: fins que hi hagi una caixa, agafa-la; fins que hi hagi un obstacle (la vora), deixa-la a la casa.|Dos bucles: hasta que haya una caja, cógela; hasta que haya un obstáculo (el borde), déjala en la casa.", sol: 'until:box{ f } p until:wall{ f } d' }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Camins de llargada desconeguda ---------- */
  'r7-2': {
    intro: "Sessió de programes generals: l'alumnat fa un sol programa que funciona en <b>camins de llargades diferents</b> (illes alternatives) i aprèn a triar el bucle: <b>Repeteix N vegades</b> si sap el número i <b>Repeteix fins que…</b> si no el sap. Després segueix camins amb revolts posant <b>un bucle per a cada tros recte i el gir a fora</b>, entre els bucles, i caça el bug típic del gir ficat dins del bucle. La classe fa teoria amb demos, munta camins de marea al terra que el docent canvia, i resol reptes a l'ordinador.|Sesión de programas generales: el alumnado hace un solo programa que funciona en <b>caminos de longitudes diferentes</b> (islas alternativas) y aprende a elegir el bucle: <b>Repite N veces</b> si sabe el número y <b>Repite hasta que…</b> si no lo sabe. Después sigue caminos con curvas poniendo <b>un bucle para cada trozo recto y el giro fuera</b>, entre los bucles, y caza el bug típico del giro metido dentro del bucle. La clase hace teoría con demos, monta caminos de marea en el suelo que el docente cambia, y resuelve retos en el ordenador.",
    claus: [
      "Amb «Repeteix fins que…», el mateix programa funciona en camins de llargades diferents.|Con «Repite hasta que…», el mismo programa funciona en caminos de longitudes diferentes.",
      "Si saps el número, «Repeteix N vegades»; si no, «Repeteix fins que…».|Si sabes el número, «Repite N veces»; si no, «Repite hasta que…».",
      "En un camí amb revolts: un bucle per a cada tram recte i el gir entre els bucles, a fora.|En un camino con curvas: un bucle para cada tramo recto y el giro entre los bucles, fuera.",
      "Un programa general s'ha de provar a totes les illes.|Un programa general se tiene que probar en todas las islas."
    ],
    prev: [
      "«Repeteix fins que…» amb les condicions bandera, obstacle i caixa (sessió 1).|«Repite hasta que…» con las condiciones bandera, obstáculo y caja (sesión 1).",
      "«Repeteix N vegades» i girar segons cap on mira en Bit (unitats 1 i 2).|«Repite N veces» y girar según hacia dónde mira Bit (unidades 1 y 2).",
      "Les illes alternatives amb el mateix programa (unitat 4).|Las islas alternativas con el mismo programa (unidad 4)."
    ],
    faq: [
      ["Per què el gir no pot anar dins del bucle?|¿Por qué el giro no puede ir dentro del bucle?", "Perquè tot el que hi ha dins es fa a cada volta: en Bit giraria després de cada pas. El gir només s'ha de fer una vegada, al revolt.|Porque todo lo que hay dentro se hace en cada vuelta: Bit giraría después de cada paso. El giro solo se tiene que hacer una vez, en la curva."],
      ["Si el «fins que» funciona sempre, per què fem servir números?|Si el «hasta que» funciona siempre, ¿por qué usamos números?", "No sempre funciona: al repte del primer tram fix, el camí continua i en Bit es passaria del revolt. Quan saps el número, el bucle de N vegades és més clar i segur.|No siempre funciona: en el reto del primer tramo fijo, el camino continúa y Bit se pasaría de la curva. Cuando sabes el número, el bucle de N veces es más claro y seguro."],
      ["Com sé cap a on he de girar després del bucle?|¿Cómo sé hacia dónde tengo que girar después del bucle?", "Posa't al lloc d'en Bit: cap on mira quan s'acaba el tram? Cap on continua el camí? Com a la unitat 1.|Ponte en el lugar de Bit: ¿hacia dónde mira cuando termina el tramo? ¿Hacia dónde sigue el camino? Como en la unidad 1."],
      ["Es pot posar un «fins que» dins d'un «Repeteix N vegades»?|¿Se puede poner un «hasta que» dentro de un «Repite N veces»?", "Sí: al repte dels dos revolts, «Repeteix 2 vegades (fins a l'obstacle, gira)» fa dos trams amb només 6 blocs.|Sí: en el reto de las dos curvas, «Repite 2 veces (hasta el obstáculo, gira)» hace dos tramos con solo 6 bloques."],
      ["A l'escala, per què el «fins que» va a fora del graó?|En la escalera, ¿por qué el «hasta que» va fuera del peldaño?", "Perquè volem repetir el graó sencer (Endavant, gira, Endavant, gira) fins arribar a dalt; cada volta del bucle és un graó.|Porque queremos repetir el peldaño entero (Adelante, gira, Adelante, gira) hasta llegar arriba; cada vuelta del bucle es un peldaño."]
    ],
    tec: [
      ["El gir ha quedat dins del bucle i no surt.|El giro ha quedado dentro del bucle y no sale.", "Que l'esborri i en posi un de nou just a sota del bucle; la ratlla «els blocs nous van aquí» ha de ser a fora del requadre del bucle.|Que lo borre y ponga uno nuevo justo debajo del bucle; la raya «los bloques nuevos van aquí» tiene que estar fuera del recuadro del bucle."],
      ["Al repte de 6 blocs surt «Només pots fer servir 6 blocs».|En el reto de 6 bloques sale «Solo puedes usar 6 bloques».", "Cal trobar el tros que es repeteix (fins a l'obstacle i gira) i posar-lo dins d'un «Repeteix 2 vegades».|Hay que encontrar el trozo que se repite (hasta el obstáculo y gira) y ponerlo dentro de un «Repite 2 veces»."],
      ["No es veu en quina illa falla el programa.|No se ve en qué isla falla el programa.", "Les pestanyes «Illa» de dalt mostren cada illa; tocant-ne una es veu el camí i es pot executar «Pas a pas».|Las pestañas «Isla» de arriba muestran cada isla; tocando una se ve el camino y se puede ejecutar «Paso a paso»."],
      ["Al terra no hi ha prou motxilles per fer de roca.|En el suelo no hay suficientes mochilas para hacer de roca.", "Qualsevol objecte serveix: una cadira, una caixa o un full arrugat. L'important és que el robot el vegi davant.|Cualquier objeto sirve: una silla, una caja o una hoja arrugada. Lo importante es que el robot lo vea delante."]
    ],
    seg: [
      "Al terra, les motxilles que fan de roca han de ser buides o lleugeres i no s'han de trepitjar.|En el suelo, las mochilas que hacen de roca tienen que estar vacías o ser ligeras y no se tienen que pisar.",
      "A l'activitat de casa de les passes de gegant, un camí sense coses per terra on no es pugui relliscar.|En la actividad de casa de los pasos de gigante, un camino sin cosas por el suelo donde no se pueda resbalar."
    ],
    extra: [
      "Dibuixar a la fitxa una illa nova amb tres revolts i escriure un programa que també funcioni si els trams fossin més llargs.|Dibujar en la ficha una isla nueva con tres curvas y escribir un programa que también funcione si los tramos fueran más largos.",
      "Fer el repte dels dos revolts amb el mínim de blocs i explicar per què el «Repeteix 2 vegades» hi ajuda.|Hacer el reto de las dos curvas con el mínimo de bloques y explicar por qué el «Repite 2 veces» ayuda.",
      "Classificar a la pissarra deu situacions de casa en «Sé el número» i «No sé el número».|Clasificar en la pizarra diez situaciones de casa en «Sé el número» y «No sé el número»."
    ],
    trans: [
      "Sessió anterior: el bloc «Repeteix fins que…». Sessió següent: un «Si… si no…» dins del bucle per decidir a cada pas.|Sesión anterior: el bloque «Repite hasta que…». Sesión siguiente: un «Si… si no…» dentro del bucle para decidir en cada paso.",
      "Matemàtiques: mesures i llargades; distingir quantitats conegudes i desconegudes.|Matemáticas: medidas y longitudes; distinguir cantidades conocidas y desconocidas.",
      "Ciències: les marees fan que la platja sigui més ampla o més estreta segons l'hora.|Ciencias: las mareas hacen que la playa sea más ancha o más estrecha según la hora."
    ],
    obj: [
      "L'alumne/a escriu un sol programa que funciona en camins de llargades diferents (illes alternatives).|El alumno/a escribe un solo programa que funciona en caminos de longitudes diferentes (islas alternativas).",
      "L'alumne/a tria entre «Repeteix N vegades» i «Repeteix fins que…» segons si coneix el número de repeticions.|El alumno/a elige entre «Repite N veces» y «Repite hasta que…» según si conoce el número de repeticiones.",
      "L'alumne/a segueix camins amb revolts posant un bucle per a cada tros recte i el gir entre els bucles.|El alumno/a sigue caminos con curvas poniendo un bucle para cada trozo recto y el giro entre los bucles.",
      "L'alumne/a troba i arregla el bug del gir col·locat dins del bucle.|El alumno/a encuentra y arregla el bug del giro colocado dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): crear programes generals que serveixen per a casos diferents|Competencia digital (CD5): crear programas generales que sirven para casos diferentes",
      "Pensament computacional: generalització, combinació de bucles i depuració|Pensamiento computacional: generalización, combinación de bucles y depuración",
      "Matemàtiques: mesura i comparació de llargades; saber quan un número és conegut o desconegut|Matemáticas: medida y comparación de longitudes; saber cuándo un número es conocido o desconocido",
      "Comunicació oral: justificar per què un programa funciona en tots els casos|Comunicación oral: justificar por qué un programa funciona en todos los casos"
    ],
    vocab: [
      ["Llargada desconeguda|Longitud desconocida", "Quan no sabem quantes caselles fa un camí abans de començar.|Cuando no sabemos cuántas casillas mide un camino antes de empezar."],
      ["Illes alternatives|Islas alternativas", "Mapes diferents on s'ha de provar el mateix programa.|Mapas diferentes en los que se tiene que probar el mismo programa."],
      ["Tram|Tramo", "Un tros recte del camí, entre dos revolts.|Un trozo recto del camino, entre dos curvas."],
      ["Revolt|Curva", "El lloc on el camí canvia de direcció i en Bit ha de girar.|El sitio donde el camino cambia de dirección y Bit tiene que girar."],
      ["Programa general|Programa general", "Un programa que funciona en molts casos, no només en un.|Un programa que funciona en muchos casos, no solo en uno."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Camins de llargada desconeguda»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Caminos de longitud desconocida»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra de 5 × 5, una bandera de paper i tres motxilles que facin de roca|La cuadrícula del suelo de 5 × 5, una bandera de papel y tres mochilas que hagan de roca",
        "Les targetes del bucle «fins que» de la sessió anterior i les targetes de gir|Las tarjetas del bucle «hasta que» de la sesión anterior y las tarjetas de giro"
      ],
      imprimir: ["Quadrícula del terra: camins de marea|Cuadrícula del suelo: caminos de marea", "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?"],
      prep: [
        "Tenir la quadrícula marcada i les motxilles a punt per muntar les tres missions en forma de L.|Tener la cuadrícula marcada y las mochilas a punto para montar las tres misiones en forma de L.",
        "Imprimir una fitxa per parella i les missions de la quadrícula per al grup.|Imprimir una ficha por pareja y las misiones de la cuadrícula para el grupo.",
        "Provar la demostració de la diapositiva 10 per saber on acaba en Bit.|Probar la demostración de la diapositiva 10 para saber dónde termina Bit.",
        "Preparar a la pissarra dues columnes: «Sé el número» i «No sé el número».|Preparar en la pizarra dos columnas: «Sé el número» y «No sé el número»."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i les marees|Recordamos y las mareas", fase: 'inici',
        fa: "Fes la pregunta de repàs de l'obstacle. Explica la missió: la barca porta l'equip de l'expedició i la marea fa que els camins del moll canviïn de llargada cada dia. Pregunta com podem fer un programa que serveixi per a tots els dies.|Haz la pregunta de repaso del obstáculo. Explica la misión: la barca trae el equipo de la expedición y la marea hace que los caminos del muelle cambien de longitud cada día. Pregunta cómo podemos hacer un programa que sirva para todos los días.",
        diu: ["Amb «fins que hi hagi un obstacle», on para en Bit?|Con «hasta que haya un obstáculo», ¿dónde para Bit?",
          "Si avui el camí fa 3 caselles i demà en fa 6, quin programa faríeu?|Si hoy el camino mide 3 casillas y mañana mide 6, ¿qué programa haríais?",
          "Pujar 5 graons: sabem el número? I omplir un got fins dalt? (Sí; no.)|Subir 5 peldaños: ¿sabemos el número? ¿Y llenar un vaso hasta arriba? (Sí; no.)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Un programa per a totes les illes|Un programa para todas las islas", fase: 'teoria',
        fa: "Mostra l'animació de les tres illes i explica que a l'app hi haurà pestanyes per provar el programa a cada illa. Amb la segona animació, classifiqueu exemples a la pissarra en «Sé el número» i «No sé el número». Després, demostra el camí en L i, abans d'executar, que diguin on para cada bucle. Acaba amb l'error del gir dins del bucle i la predicció de la diapositiva 10.|Muestra la animación de las tres islas y explica que en la app habrá pestañas para probar el programa en cada isla. Con la segunda animación, clasificad ejemplos en la pizarra en «Sé el número» y «No sé el número». Después, demuestra el camino en L y, antes de ejecutar, que digan dónde para cada bucle. Acaba con el error del giro dentro del bucle y la predicción de la diapositiva 10.",
        diu: ["Pujar 5 graons: sabem el número? I omplir el got fins dalt?|Subir 5 peldaños: ¿sabemos el número? ¿Y llenar el vaso hasta arriba?",
          "On para el primer bucle? I què fa en Bit just després?|¿Dónde para el primer bucle? ¿Y qué hace Bit justo después?",
          "Si el gir és dins del bucle, quantes vegades gira en Bit?|Si el giro está dentro del bucle, ¿cuántas veces gira Bit?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Camins de marea al terra|Caminos de marea en el suelo", fase: 'desconnectat',
        fa: "En grups de 3, escriuen amb targetes UN sol programa per a la missió 1 de la quadrícula. Després tu canvies les motxilles i la bandera de lloc (missions 2 i 3) i el robot executa el mateix programa sense canviar cap targeta. Si falla, el grup busca on és el bug. Mentre un grup és al terra, els altres fan la fitxa per parelles.|En grupos de 3, escriben con tarjetas UN solo programa para la misión 1 de la cuadrícula. Después tú cambias las mochilas y la bandera de sitio (misiones 2 y 3) y el robot ejecuta el mismo programa sin cambiar ninguna tarjeta. Si falla, el grupo busca dónde está el bug. Mientras un grupo está en el suelo, los demás hacen la ficha por parejas.",
        diu: ["Ara he mogut la bandera. Cal canviar alguna targeta?|Ahora he movido la bandera. ¿Hay que cambiar alguna tarjeta?",
          "On és el gir: dins o fora del bucle?|¿Dónde está el giro: dentro o fuera del bucle?",
          "A la missió 3, quantes passes fa el primer bucle?|En la misión 3, ¿cuántos pasos hace el primer bucle?"],
        slides: ['s11', 's12'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 al terra i parelles amb la fitxa|Grupos de 3 en el suelo y parejas con la ficha" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. L'activitat de les passes de gegant és per a casa. Passeja i, al problema d'ordenar blocs i a l'«On acabarà?», demana que diguin on para cada bucle abans de comprovar-ho.|Cada alumno/a hace la sesión hasta la pausa activa. La actividad de los pasos de gigante es para casa. Pasea y, en el problema de ordenar bloques y en el «¿Dónde terminará?», pide que digan dónde para cada bucle antes de comprobarlo.",
        diu: ["Digues-me amb paraules el programa: fins on, gir, fins on.|Dime con palabras el programa: hasta dónde, giro, hasta dónde.",
          "Per què el primer bucle no para a la A? O sí que hi para?|¿Por qué el primer bucle no para en la A? ¿O sí que para?",
          "A l'«Investiga»: quantes vegades gira en Bit si el gir és dins del bucle? (Una a cada pas.)|En el «Investiga»: ¿cuántas veces gira Bit si el giro está dentro del bucle? (Una en cada paso.)"],
        slides: ['s13'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, les històries del moll, les targetes de «Descobreix», les escales i la xocolata, «Passes de gegant» (per a casa), ordenar els blocs del revolt, «On acabarà?» i el gir en mal lloc.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, las historias del muelle, las tarjetas de «Descubre», las escaleras y el chocolate, «Pasos de gigante» (para casa), ordenar los bloques de la curva, «¿Dónde terminará?» y el giro en mal lugar.", org: "Individual|Individual" },
      { min: 10, t: "Reptes amb marea|Retos con marea", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els cinc reptes. Al del primer tram fix, deixa que descobreixin que el «fins que hi hagi un obstacle» no serveix perquè el camí de dalt continua. Al dels 6 blocs, si s'encallen, pregunta quin tros es repeteix.|Pausa activa todos juntos. Después, los cinco retos. En el del primer tramo fijo, deja que descubran que el «hasta que haya un obstáculo» no sirve porque el camino de arriba continúa. En el de los 6 bloques, si se atascan, pregunta qué trozo se repite.",
        diu: ["Aquest tram canvia d'una illa a l'altra o és sempre igual?|¿Este tramo cambia de una isla a otra o es siempre igual?",
          "Quin tros fa en Bit dues vegades? Es pot posar dins d'un «Repeteix 2 vegades»?|¿Qué trozo hace Bit dos veces? ¿Se puede poner dentro de un «Repite 2 veces»?",
          "Un graó de l'escala: quins blocs té?|Un peldaño de la escalera: ¿qué bloques tiene?"],
        slides: ['s14', 's15'], app: "«Pausa activa» i els cinc reptes: el revolt, el primer tram fix, els dos revolts amb 6 blocs, el gir en mal lloc i l'escala del penya-segat.|«Pausa activa» y los cinco retos: la curva, el primer tramo fijo, las dos curvas con 6 bloques, el giro en mal lugar y la escalera del acantilado.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el viatge de la marea|Crea: el viaje de la marea", fase: 'crea',
        fa: "Cada alumne/a fa un programa que funcioni a les dues illes del camp obert. Hi ha més d'un camí possible: que en triïn un i comprovin les dues pestanyes.|Cada alumno/a hace un programa que funcione en las dos islas del campo abierto. Hay más de un camino posible: que elijan uno y comprueben las dos pestañas.",
        diu: ["La bandera no és al mateix lloc: per on pots anar perquè el programa serveixi a les dues?|La bandera no está en el mismo sitio: ¿por dónde puedes ir para que el programa sirva en las dos?",
          "Has provat l'illa 2? Mira si té el ✓.|¿Has probado la isla 2? Mira si tiene el ✓.",
          "Quina condició t'ajuda si la bandera canvia de lloc? (Fins que arribis a la bandera.)|¿Qué condición te ayuda si la bandera cambia de sitio? (Hasta que llegues a la bandera.)"],
        slides: ['s16'], app: "Pas «Crea»: El viatge de la marea.|Paso «Crea»: El viaje de la marea.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["Quan faríeu servir «Repeteix 3 vegades» i quan «Repeteix fins que…»?|¿Cuándo usaríais «Repite 3 veces» y cuándo «Repite hasta que…»?",
          "On va el gir en un camí en L?|¿Dónde va el giro en un camino en L?",
          "Si un tram sempre fa 2 caselles i l'altre canvia, quins bucles feu servir? (Repeteix 2 vegades i fins que.)|Si un tramo siempre mide 2 casillas y el otro cambia, ¿qué bucles usáis? (Repite 2 veces y hasta que.)"],
        slides: ['s17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el gir dins del bucle, al costat de l'Endavant.|Pone el giro dentro del bucle, al lado del Adelante.",
        "Que executi «Pas a pas» i compti quantes vegades gira en Bit. Pregunta: quantes vegades hauria de girar en aquest revolt?|Que ejecute «Paso a paso» y cuente cuántas veces gira Bit. Pregunta: ¿cuántas veces tendría que girar en esta curva?"],
      ["Fa el programa per a l'illa 1 amb números i no mira les altres pestanyes.|Hace el programa para la isla 1 con números y no mira las otras pestañas.",
        "Que toqui la pestanya de l'illa 2 i hi executi el mateix programa. Què ha canviat del camí? Quina part del programa depèn d'aquest número?|Que toque la pestaña de la isla 2 y ejecute allí el mismo programa. ¿Qué ha cambiado del camino? ¿Qué parte del programa depende de ese número?"],
      ["Fa servir «fins que hi hagi un obstacle» en un tram on el camí continua i en Bit es passa del revolt.|Usa «hasta que haya un obstáculo» en un tramo donde el camino continúa y Bit se pasa de la curva.",
        "Pregunta: en aquest revolt, en Bit té un obstacle davant? Si el tram sempre fa el mateix, quin bucle va millor?|Pregunta: en esta curva, ¿Bit tiene un obstáculo delante? Si el tramo siempre mide lo mismo, ¿qué bucle va mejor?"],
      ["S'equivoca de gir després del bucle quan en Bit mira avall o a l'esquerra.|Se equivoca de giro después del bucle cuando Bit mira abajo o a la izquierda.",
        "Com a la unitat 1: que es posi al lloc d'en Bit. Cap on mira quan s'acaba el bucle? Cap on ha d'anar?|Como en la unidad 1: que se ponga en el lugar de Bit. ¿Hacia dónde mira cuando se acaba el bucle? ¿Hacia dónde tiene que ir?"],
      ["A l'escala, posa un bucle per a cada graó en lloc de repetir el graó sencer.|En la escalera, pone un bucle para cada peldaño en lugar de repetir el peldaño entero.",
        "Pregunta: quins blocs fa en Bit per pujar un sol graó? Si tots els graons són iguals, què es repeteix?|Pregunta: ¿qué bloques hace Bit para subir un solo peldaño? Si todos los peldaños son iguales, ¿qué se repite?"]
    ],
    diff: {
      mes: "Fer el repte dels dos revolts amb menys de 6 blocs si és possible i explicar-ho. Dibuixar a la fitxa una illa nova amb tres revolts i escriure un programa que també funcioni si els trams fossin més llargs.|Hacer el reto de las dos curvas con menos de 6 bloques si es posible y explicarlo. Dibujar en la ficha una isla nueva con tres curvas y escribir un programa que también funcione si los tramos fueran más largos.",
      menys: "Treballar primer amb una sola illa i, quan funcioni, passar a la pestanya següent. Fer servir les targetes de paper damunt la taula per decidir on va el gir abans de posar els blocs.|Trabajar primero con una sola isla y, cuando funcione, pasar a la pestaña siguiente. Usar las tarjetas de papel sobre la mesa para decidir dónde va el giro antes de poner los bloques."
    },
    aval: {
      ticket: ["Posa un exemple de «Repeteix N vegades» i un de «Repeteix fins que…».|Pon un ejemplo de «Repite N veces» y uno de «Repite hasta que…».",
        "En un camí en L, el gir va dins o fora del bucle? Per què?|En un camino en L, ¿el giro va dentro o fuera del bucle? ¿Por qué?"],
      rubric: [
        ["Programa general|Programa general", "Fa programes que funcionen a totes les illes i comprova cada pestanya.|Hace programas que funcionan en todas las islas y comprueba cada pestaña.", "Fa programes que funcionen a una illa i necessita ajuda per generalitzar-los.|Hace programas que funcionan en una isla y necesita ayuda para generalizarlos."],
        ["Triar el bucle|Elegir el bucle", "Justifica quan fa servir un número i quan un «fins que».|Justifica cuándo usa un número y cuándo un «hasta que».", "Fa servir sempre el mateix tipus de bucle.|Usa siempre el mismo tipo de bucle."],
        ["Camins amb revolts|Caminos con curvas", "Posa un bucle per tram i el gir a fora, i troba el bug del gir a dins.|Pone un bucle por tramo y el giro fuera, y encuentra el bug del giro dentro.", "Segueix camins amb un revolt, però amb dos revolts es perd.|Sigue caminos con una curva, pero con dos curvas se pierde."],
        ["Depurar el gir|Depurar el giro", "Troba el gir que és dins del bucle i el mou entre els bucles sense ajuda.|Encuentra el giro que está dentro del bucle y lo mueve entre los bucles sin ayuda.", "Veu que en Bit es perd, però necessita «Pas a pas» i ajuda per trobar el gir.|Ve que Bit se pierde, pero necesita «Paso a paso» y ayuda para encontrar el giro."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer amb vosaltres «Passes de gegant, passes de formiga»: el mateix programa per anar del sofà a la porta, amb passes de mides diferents.|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer con vosotros «Pasos de gigante, pasos de hormiga»: el mismo programa para ir del sofá a la puerta, con pasos de tamaños diferentes.",
    slides: [
      { id: 's1', k: 'portada', t: "Camins de llargada desconeguda|Caminos de longitud desconocida", x: "Avui farem programes que funcionen encara que el camí canviï.|Hoy haremos programas que funcionan aunque el camino cambie.",
        nota: "Situa la història: el moll, la barca de l'expedició i la marea que canvia els camins.|Sitúa la historia: el muelle, la barca de la expedición y la marea que cambia los caminos." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Amb «Repeteix fins que hi hagi un obstacle davant: Endavant», on para en Bit?|Con «Repite hasta que haya un obstáculo delante: Adelante», ¿dónde para Bit?",
        nota: "Resposta: just abans de l'obstacle. La pregunta es fa abans de cada pas.|Respuesta: justo antes del obstáculo. La pregunta se hace antes de cada paso." },
      { id: 's3', k: 'pregunta', t: "Un programa per a cada dia?|¿Un programa para cada día?", x: "Avui el camí fa 3 caselles, demà en farà 6 i demà passat 4. Cal fer tres programes?|Hoy el camino mide 3 casillas, mañana medirá 6 y pasado mañana 4. ¿Hay que hacer tres programas?",
        nota: "Deixa que ho discuteixin. Recull la idea: amb un «fins que» n'hi ha prou amb un.|Deja que lo discutan. Recoge la idea: con un «hasta que» basta con uno." },
      { id: 's4', k: 'anim', t: "Un programa, tres illes|Un programa, tres islas", anim: 'u7tide', x: "El mateix programa arriba a la bandera a les tres illes.|El mismo programa llega a la bandera en las tres islas.",
        nota: "Explica les pestanyes «Illa 1 · Illa 2 · Illa 3» de l'app: el programa s'ha de provar a totes.|Explica las pestañas «Isla 1 · Isla 2 · Isla 3» de la app: el programa se tiene que probar en todas." },
      { id: 's5', k: 'anim', t: "N vegades o fins que?|¿N veces o hasta que?", anim: 'u7vs', x: "Si saps el número, «Repeteix N vegades». Si no el saps, «Repeteix fins que…».|Si sabes el número, «Repite N veces». Si no lo sabes, «Repite hasta que…».",
        nota: "Escriu les dues columnes a la pissarra: «Sé el número» i «No sé el número».|Escribe las dos columnas en la pizarra: «Sé el número» y «No sé el número»." },
      { id: 's6', k: 'pregunta', t: "Sé el número o no?|¿Sé el número o no?", punts: ["Pujar les 12 escales de casa|Subir las 12 escaleras de casa", "Remenar la xocolata fins que no hi ha grumolls|Remover el chocolate hasta que no hay grumos", "Picar de mans 3 vegades|Dar 3 palmadas", "Caminar fins que trobes la porta|Caminar hasta que encuentres la puerta"],
        nota: "Respostes: N, fins que, N, fins que. Demana un exemple nou per a cada columna.|Respuestas: N, hasta que, N, hasta que. Pide un ejemplo nuevo para cada columna." },
      { id: 's7', k: 'demo', t: "Un camí amb revolt|Un camino con curva", x: "Fins que hi hagi un obstacle, gira, i fins que arribis a la bandera.|Hasta que haya un obstáculo, gira, y hasta que llegues a la bandera.",
        demo: { w: { map: ['>###.', '...#.', '...#.', '...F.'] }, prog: 'until:wall{ f } r until:goal{ f }' },
        nota: "Abans d'executar, que diguin on para el primer bucle. Fes notar que el gir és entre els dos bucles.|Antes de ejecutar, que digan dónde para el primer bucle. Haz notar que el giro está entre los dos bucles." },
      { id: 's8', k: 'concepte', pic: 'img/ment/dir.webp', t: "Un bucle per a cada tram|Un bucle para cada tramo", blocks: [{ t: "Repeteix fins que hi hagi un obstacle|Repite hasta que haya un obstáculo", c: 'loop' }, { t: "Gira a la dreta|Gira a la derecha", c: 'mov' }, { t: "Repeteix fins que arribis|Repite hasta que llegues", c: 'loop' }],
        punts: ["Cada tros recte és un bucle.|Cada trozo recto es un bucle.", "El gir va entre els bucles, a fora.|El giro va entre los bucles, fuera.", "Si els trams canvien, el programa és el mateix.|Si los tramos cambian, el programa es el mismo."],
        nota: "Dibuixa a la pissarra una L i marca amb colors cada tram i el revolt.|Dibuja en la pizarra una L y marca con colores cada tramo y la curva." },
      { id: 's9', k: 'anim', t: "Compte: el gir va fora|Cuidado: el giro va fuera", anim: 'u7inside', x: "Si el gir és dins del bucle, en Bit gira a cada pas i es perd.|Si el giro está dentro del bucle, Bit gira en cada paso y se pierde.",
        nota: "Fes-ho amb el cos: un pas i gir, un pas i gir… On acabes? Ara: passos fins a la paret i, al final, un gir.|Hazlo con el cuerpo: un paso y giro, un paso y giro… ¿Dónde acabas? Ahora: pasos hasta la pared y, al final, un giro." },
      { id: 's10', k: 'demo', t: "On acabarà?|¿Dónde terminará?", x: "Dos bucles i un gir. On acaba en Bit: A, B o C?|Dos bucles y un giro. ¿Dónde termina Bit: A, B o C?",
        demo: { w: { map: ['>##A.', '.C.#.', '...B.', '.....'] }, prog: 'until:wall{ f } r until:wall{ f }' },
        nota: "Resposta: B. El primer bucle para a la A (davant de l'arbre) i el segon baixa fins a la B.|Respuesta: B. El primer bucle para en la A (delante del árbol) y el segundo baja hasta la B." },
      { id: 's11', k: 'activitat', t: "Camins de marea|Caminos de marea", timer: 12, punts: ["Un sol programa amb targetes per a la missió 1.|Un solo programa con tarjetas para la misión 1.", "El professor/a mou la bandera i les roques.|El profesor/a mueve la bandera y las rocas.", "El robot fa el mateix programa sense canviar res.|El robot hace el mismo programa sin cambiar nada.", "Si falla, busqueu el bug.|Si falla, buscad el bug."],
        nota: "A la missió 3 el primer bucle no fa cap pas: té la roca just davant. És un bon moment per comentar-ho.|En la misión 3 el primer bucle no da ningún paso: tiene la roca justo delante. Es un buen momento para comentarlo." },
      { id: 's12', k: 'concepte', pic: 'img/ment/rel.webp', t: "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?", punts: ["Classifica les situacions.|Clasifica las situaciones.", "Prediu on acaba en Bit.|Predice dónde termina Bit.", "Escriu un programa per a un camí en L.|Escribe un programa para un camino en L.", "Troba el bug del gir.|Encuentra el bug del giro."],
        nota: "Les parelles que no són al terra fan la fitxa i després canvien.|Las parejas que no están en el suelo hacen la ficha y después cambian." },
      { id: 's13', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Camins de llargada desconeguda».|Abre la sesión «Caminos de longitud desconocida».", "«Passes de gegant» és per fer a casa.|«Pasos de gigante» es para hacer en casa.", "Abans de comprovar, digues on para cada bucle.|Antes de comprobar, di dónde para cada bucle.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Fixa't en qui posa el gir dins del bucle al problema d'ordenar blocs.|Fíjate en quién pone el giro dentro del bucle en el problema de ordenar bloques." },
      { id: 's14', k: 'repte', t: "Reptes amb marea|Retos con marea", timer: 10, punts: ["1. El revolt a tres illes|1. La curva en tres islas", "2. El primer tram sempre fa 2|2. El primer tramo siempre mide 2", "3. Dos revolts, 6 blocs com a màxim|3. Dos curvas, 6 bloques como máximo", "4. El gir en mal lloc i l'escala|4. El giro en mal lugar y la escalera"],
        nota: "Al repte 2, el «fins que hi hagi un obstacle» fa que en Bit es passi del revolt: aquí va millor un número.|En el reto 2, el «hasta que haya un obstáculo» hace que Bit se pase de la curva: aquí va mejor un número." },
      { id: 's15', k: 'demo', t: "Pista: l'escala|Pista: la escalera", x: "Un graó és Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. Fins quan es repeteix?|Un peldaño es Adelante, Gira a la izquierda, Adelante, Gira a la derecha. ¿Hasta cuándo se repite?",
        demo: { w: { map: ['.....', '.....', '..F..', '.##..', '>#...'] }, prog: 'until:goal{ f l f r }' },
        nota: "Projecta-la només si molts alumnes s'encallen a l'escala: és l'escala més curta del repte.|Proyéctala solo si muchos alumnos se atascan en la escalera: es la escalera más corta del reto." },
      { id: 's16', k: 'activitat', t: "Crea: el viatge de la marea|Crea: el viaje de la marea", timer: 5, x: "Un camp obert i dues illes amb la bandera a llocs diferents. Tria un camí que serveixi a totes dues.|Un campo abierto y dos islas con la bandera en sitios diferentes. Elige un camino que sirva en las dos.",
        nota: "Pista per a qui s'encalli: quina vora del mapa porta a les dues banderes?|Pista para quien se atasque: ¿qué borde del mapa lleva a las dos banderas?" },
      { id: 's17', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un «fins que» serveix per a camins de qualsevol llargada.|Un «hasta que» sirve para caminos de cualquier longitud.", "Si saps el número, «Repeteix N vegades»; si no, «fins que».|Si sabes el número, «Repite N veces»; si no, «hasta que».", "Un bucle per tram i el gir a fora.|Un bucle por tramo y el giro fuera."],
        nota: "Tiquet de sortida a la porta: un exemple de cada bucle i on va el gir en un camí en L.|Ticket de salida en la puerta: un ejemplo de cada bucle y dónde va el giro en un camino en L." }
    ],
    print: [
      { id: 'p1', t: "Quadrícula del terra: camins de marea|Cuadrícula del suelo: caminos de marea", k: 'quadricula',
        intro: "Quadrícula de 5 × 5. Les roques són motxilles. El mateix programa ha de funcionar a les tres missions sense canviar cap targeta.|Cuadrícula de 5 × 5. Las rocas son mochilas. El mismo programa tiene que funcionar en las tres misiones sin cambiar ninguna tarjeta.",
        items: [
          { t: "Missió 1: marea alta|Misión 1: marea alta", w: 5, h: 5, cells: ['>..R.', '.....', '.....', '..F..', '.....'],
            instructions: "Escriviu el programa: fins que hi hagi un obstacle, gira, i fins que arribis a la bandera.|Escribid el programa: hasta que haya un obstáculo, gira, y hasta que llegues a la bandera.", sol: 'until:wall{ f } r until:goal{ f }' },
          { t: "Missió 2: marea baixa|Misión 2: marea baja", w: 5, h: 5, cells: ['>...R', '.....', '...F.', '.....', '.....'],
            instructions: "El professor/a mou la roca i la bandera. Proveu el mateix programa.|El profesor/a mueve la roca y la bandera. Probad el mismo programa.", sol: 'until:wall{ f } r until:goal{ f }' },
          { t: "Missió 3: la roca just davant|Misión 3: la roca justo delante", w: 5, h: 5, cells: ['>R...', '.....', '.....', '.....', 'F....'],
            instructions: "Quantes passes fa el primer bucle? Funciona igualment?|¿Cuántos pasos da el primer bucle? ¿Funciona igualmente?", sol: 'until:wall{ f } r until:goal{ f }' }
        ] },
      { id: 'p2', t: "Fitxa: N vegades o fins que?|Ficha: ¿N veces o hasta que?", k: 'fitxa',
        intro: "Per parelles. Penseu-ho amb paraules abans d'escriure els blocs.|Por parejas. Pensadlo con palabras antes de escribir los bloques.",
        items: [
          { q: "Escriu N (Repeteix N vegades) o F (Repeteix fins que…): a) pujar els 10 graons de l'escala; b) omplir la banyera fins que sigui plena; c) picar de mans 3 vegades; d) caminar fins al semàfor.|Escribe N (Repite N veces) o H (Repite hasta que…): a) subir los 10 peldaños de la escalera; b) llenar la bañera hasta que esté llena; c) dar 3 palmadas; d) caminar hasta el semáforo.",
            sol: "a) N · b) F · c) N · d) F.|a) N · b) H · c) N · d) H." },
          { q: "On acabarà en Bit amb «Repeteix fins que hi hagi un obstacle: Endavant», «Gira a la dreta» i «Repeteix fins que hi hagi un obstacle: Endavant»? Encercla A, B o C.|¿Dónde terminará Bit con «Repite hasta que haya un obstáculo: Adelante», «Gira a la derecha» y «Repite hasta que haya un obstáculo: Adelante»? Rodea A, B o C.",
            w: { map: ['>##A.', '.C.#.', '...B.', '.....'] }, prog: 'until:wall{ f } r until:wall{ f }', a: 'B',
            sol: "B: el primer bucle para a la A, gira i el segon baixa fins a la B.|B: el primer bucle para en la A, gira y el segundo baja hasta la B." },
          { q: "Escriu un programa per a aquest camí que també serviria si els trams fossin més llargs.|Escribe un programa para este camino que también serviría si los tramos fueran más largos.",
            w: { map: ['>###.', '...#.', '...#.', '...F.'] }, solProg: 'until:wall{ f } r until:goal{ f }',
            sol: "Repeteix fins que hi hagi un obstacle: Endavant · Gira a la dreta · Repeteix fins que arribis: Endavant.|Repite hasta que haya un obstáculo: Adelante · Gira a la derecha · Repite hasta que llegues: Adelante." },
          { q: "Troba el bug: «Repeteix fins que hi hagi un obstacle: Endavant i Gira a la dreta» i després «Repeteix fins que arribis: Endavant». Què passa i com s'arregla?|Encuentra el bug: «Repite hasta que haya un obstáculo: Adelante y Gira a la derecha» y después «Repite hasta que llegues: Adelante». ¿Qué pasa y cómo se arregla?",
            sol: "El gir és dins del primer bucle i en Bit gira després de cada pas. Cal treure'l del bucle i posar-lo entre els dos bucles.|El giro está dentro del primer bucle y Bit gira después de cada paso. Hay que sacarlo del bucle y ponerlo entre los dos bucles." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Combinem-ho tot ---------- */
  'r7-3': {
    intro: "Sessió de combinar-ho tot: un <b>«Si… si no…» dins d'un «Repeteix fins que…»</b> fa que en Bit decideixi a cada pas i segueixi camins que ningú no li ha explicat. L'alumnat també fa servir els sensors dels costats, crida funcions des d'un bucle i hi afegeix llums i comptadors. Són els programes més llargs fins ara, i per això la sessió insisteix a <b>llegir-los bloc a bloc i predir</b> abans d'executar, i a depurar amb «Pas a pas». La classe fa teoria amb demos, el «robot que decideix» al terra i reptes a l'ordinador.|Sesión de combinarlo todo: un <b>«Si… si no…» dentro de un «Repite hasta que…»</b> hace que Bit decida en cada paso y siga caminos que nadie le ha explicado. El alumnado también usa los sensores de los lados, llama a funciones desde un bucle y añade luces y contadores. Son los programas más largos hasta ahora, y por eso la sesión insiste en <b>leerlos bloque a bloque y predecir</b> antes de ejecutar, y en depurar con «Paso a paso». La clase hace teoría con demos, el «robot que decide» en el suelo y retos en el ordenador.",
    claus: [
      "Un «Si… si no…» dins del bucle fa que en Bit decideixi a cada volta: si hi ha obstacle, gira; si no, avança.|Un «Si… si no…» dentro del bucle hace que Bit decida en cada vuelta: si hay obstáculo, gira; si no, avanza.",
      "El bucle fa la pregunta gran (hi he arribat?) i el «si», la petita (tinc un obstacle?), totes dues a cada volta.|El bucle hace la pregunta grande (¿he llegado?) y el «si», la pequeña (¿tengo un obstáculo?), las dos en cada vuelta.",
      "Dins d'un bucle hi poden anar funcions, llums, notes i comptadors.|Dentro de un bucle pueden ir funciones, luces, notas y contadores.",
      "Un programa llarg es llegeix bloc a bloc, es prediu i després es comprova amb «Pas a pas».|Un programa largo se lee bloque a bloque, se predice y después se comprueba con «Paso a paso»."
    ],
    prev: [
      "«Repeteix fins que…» i un bucle per a cada tram (sessions 1 i 2).|«Repite hasta que…» y un bucle para cada tramo (sesiones 1 y 2).",
      "«Si… si no…» i els sensors de l'obstacle i dels costats (unitat 4).|«Si… si no…» y los sensores del obstáculo y de los lados (unidad 4).",
      "Funcions (unitat 5), llums (unitat 3) i el comptador (unitat 6).|Funciones (unidad 5), luces (unidad 3) y el contador (unidad 6)."
    ],
    faq: [
      ["Per què el programa que decideix només té 4 blocs i fa un camí tan llarg?|¿Por qué el programa que decide solo tiene 4 bloques y hace un camino tan largo?", "Perquè no diu el camí: diu què fer a cada pas. El bucle el repeteix tantes vegades com calgui.|Porque no dice el camino: dice qué hacer en cada paso. El bucle lo repite tantas veces como haga falta."],
      ["Funciona en qualsevol camí?|¿Funciona en cualquier camino?", "No: «si hi ha obstacle, gira a la dreta» només serveix si els revolts giren a la dreta. Per a revolts als dos costats calen els sensors dels costats.|No: «si hay obstáculo, gira a la derecha» solo sirve si las curvas giran a la derecha. Para curvas a los dos lados hacen falta los sensores de los lados."],
      ["Quina diferència hi ha entre el «Si» i el «fins que»?|¿Qué diferencia hay entre el «Si» y el «hasta que»?", "Tots dos fan una pregunta. El «Si» la fa una vegada i decideix; el «fins que» la fa abans de cada volta i decideix si continua repetint.|Los dos hacen una pregunta. El «Si» la hace una vez y decide; el «hasta que» la hace antes de cada vuelta y decide si sigue repitiendo."],
      ["Al repte dels dos costats, per què no hi ha «si no»?|En el reto de los dos lados, ¿por qué no hay «si no»?", "Perquè, giri o no giri, després en Bit sempre fa un pas endavant. L'Endavant va a fora dels «si», al final de la volta.|Porque, gire o no gire, después Bit siempre da un paso adelante. El Adelante va fuera de los «si», al final de la vuelta."],
      ["Per què no cal acabar tots els reptes?|¿Por qué no hace falta terminar todos los retos?", "Són llargs i el que importa és entendre cada programa. Els que quedin es poden fer a casa amb el mòbil.|Son largos y lo que importa es entender cada programa. Los que queden se pueden hacer en casa con el móvil."]
    ],
    tec: [
      ["No sap com afegir el «si no» al «Si».|No sabe cómo añadir el «si no» al «Si».", "Que toqui el bloc «Si» i triï «Afegeix «si no»»; apareix un segon espai per als blocs.|Que toque el bloque «Si» y elija «Añade «si no»»; aparece un segundo espacio para los bloques."],
      ["Els blocs queden fora del «Si» o fora del bucle.|Los bloques quedan fuera del «Si» o fuera del bucle.", "Abans de triar cada bloc, que toqui l'espai on el vol posar; la ratlla «els blocs nous van aquí» mostra on anirà.|Antes de elegir cada bloque, que toque el espacio donde lo quiere poner; la raya «los bloques nuevos van aquí» muestra dónde irá."],
      ["Un programa llarg no cap a la pantalla del mòbil.|Un programa largo no cabe en la pantalla del móvil.", "Es pot fer lliscar el programa amunt i avall; a classe, millor fer aquests reptes a l'ordinador.|Se puede deslizar el programa arriba y abajo; en clase, mejor hacer estos retos en el ordenador."],
      ["A la quadrícula del terra el robot no sap si té un obstacle davant.|En la cuadrícula del suelo el robot no sabe si tiene un obstáculo delante.", "Acordeu que la vora de la quadrícula i les motxilles són obstacles, i que el revisor/a ho confirma en veu alta.|Acordad que el borde de la cuadrícula y las mochilas son obstáculos, y que el revisor/a lo confirma en voz alta."]
    ],
    seg: [
      "Al «robot que decideix», el robot camina a poc a poc i amb els ulls oberts; a casa, en un espai sense coses per terra.|En el «robot que decide», el robot camina despacio y con los ojos abiertos; en casa, en un espacio sin cosas por el suelo.",
      "A la pausa activa amb picades de mans, tothom gira al seu lloc sense tocar els companys i companyes.|En la pausa activa con palmadas, todo el mundo gira en su sitio sin tocar a los compañeros y compañeras."
    ],
    extra: [
      "Fer que la patrulla compti les estrelles i encengui el llum verd en arribar.|Hacer que la patrulla cuente las estrellas y encienda la luz verde al llegar.",
      "Inventar a la fitxa un camí amb revolts als dos costats i escriure el programa amb els sensors dels costats.|Inventar en la ficha un camino con curvas a los dos lados y escribir el programa con los sensores de los lados.",
      "Laberint de l'aula: amb cadires, munteu un passadís que giri sempre a la dreta i comproveu la regla amb un robot humà.|Laberinto del aula: con sillas, montad un pasillo que gire siempre a la derecha y comprobad la regla con un robot humano."
    ],
    trans: [
      "Unitat 4: el «Si… si no…» tornava a decidir una sola vegada; ara decideix a cada volta.|Unidad 4: el «Si… si no…» decidía una sola vez; ahora decide en cada vuelta.",
      "Llengua: llegir amb atenció un text llarg i explicar-lo amb paraules pròpies, com un programa.|Lengua: leer con atención un texto largo y explicarlo con palabras propias, como un programa.",
      "Sessió següent: el projecte del rescat a la cova, on es fa servir tot el que s'ha après a la unitat.|Sesión siguiente: el proyecto del rescate en la cueva, donde se usa todo lo aprendido en la unidad."
    ],
    obj: [
      "L'alumne/a posa un «Si… si no…» dins d'un «Repeteix fins que…» perquè en Bit segueixi camins que giren.|El alumno/a pone un «Si… si no…» dentro de un «Repite hasta que…» para que Bit siga caminos que giran.",
      "L'alumne/a combina el bucle amb condició amb funcions, llums i comptadors.|El alumno/a combina el bucle con condición con funciones, luces y contadores.",
      "L'alumne/a llegeix un programa llarg bloc a bloc i prediu on acabarà en Bit.|El alumno/a lee un programa largo bloque a bloque y predice dónde terminará Bit.",
      "L'alumne/a depura un programa llarg fent-lo pas a pas i canviant només el bloc que falla.|El alumno/a depura un programa largo haciéndolo paso a paso y cambiando solo el bloque que falla."
    ],
    comp: [
      "Competència digital (CD5): crear programes que prenen decisions a partir de sensors|Competencia digital (CD5): crear programas que toman decisiones a partir de sensores",
      "Pensament computacional: estructures niades (condicions dins de bucles), lectura i depuració de programes|Pensamiento computacional: estructuras anidadas (condiciones dentro de bucles), lectura y depuración de programas",
      "Matemàtiques: orientació en la quadrícula i recompte amb un comptador|Matemáticas: orientación en la cuadrícula y recuento con un contador",
      "Aprendre a aprendre: predir, comprovar i corregir|Aprender a aprender: predecir, comprobar y corregir"
    ],
    vocab: [
      ["Decidir|Decidir", "Triar què fer segons el que diu un sensor: si hi ha obstacle, gira; si no, avança.|Elegir qué hacer según lo que dice un sensor: si hay obstáculo, gira; si no, avanza."],
      ["Niar|Anidar", "Posar un bloc dins d'un altre, com un «si» dins d'un bucle.|Poner un bloque dentro de otro, como un «si» dentro de un bucle."],
      ["Sensor del costat|Sensor del lado", "Les condicions «hi ha camí a l'esquerra» i «hi ha camí a la dreta».|Las condiciones «hay camino a la izquierda» y «hay camino a la derecha»."],
      ["Predir|Predecir", "Dir què farà un programa abans d'executar-lo.|Decir qué hará un programa antes de ejecutarlo."],
      ["Depurar|Depurar", "Buscar i arreglar l'error d'un programa.|Buscar y arreglar el error de un programa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Combinem-ho tot»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Combinémoslo todo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, una bandera de paper i cinc o sis motxilles que facin de roca|La cuadrícula del suelo, una bandera de papel y cinco o seis mochilas que hagan de roca",
        "Les targetes «fins que» de la sessió 1 i les targetes «Si» de la unitat 4|Las tarjetas «hasta que» de la sesión 1 y las tarjetas «Si» de la unidad 4"
      ],
      imprimir: ["Quadrícula del terra: el robot que decideix|Cuadrícula del suelo: el robot que decide", "Fitxa: llegeix, prediu i depura|Ficha: lee, predice y depura"],
      prep: [
        "Escriure a la pissarra el programa del robot que decideix: «Fins que arribis: si hi ha obstacle, gira a la dreta; si no, endavant».|Escribir en la pizarra el programa del robot que decide: «Hasta que llegues: si hay obstáculo, gira a la derecha; si no, adelante».",
        "Tenir les motxilles a punt per muntar ràpidament les tres missions de la quadrícula.|Tener las mochilas a punto para montar rápidamente las tres misiones de la cuadrícula.",
        "Imprimir una fitxa per alumne/a (es pot acabar a casa).|Imprimir una ficha por alumno/a (se puede terminar en casa).",
        "Provar les demostracions de les diapositives 6, 7 i 8.|Probar las demostraciones de las diapositivas 6, 7 y 8."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'equip de la cova|Recordamos y el equipo de la cueva", fase: 'inici',
        fa: "Fes les preguntes de repàs: on va el gir en un camí en L i què fa el «Si… si no…». Explica la missió: dins de la cova els passadissos giren a cada moment i no hi ha mapa, així que en Bit haurà de decidir a cada pas.|Haz las preguntas de repaso: dónde va el giro en un camino en L y qué hace el «Si… si no…». Explica la misión: dentro de la cueva los pasillos giran a cada momento y no hay mapa, así que Bit tendrá que decidir en cada paso.",
        diu: ["En un camí en L, el gir va dins o fora del bucle?|En un camino en L, ¿el giro va dentro o fuera del bucle?",
          "I si el camí tingués deu revolts i no sabéssim on són?|¿Y si el camino tuviera diez curvas y no supiéramos dónde están?",
          "Amb «Si hi ha un obstacle: Gira. Si no: Endavant», què fa en Bit amb el camí lliure? (Avança.)|Con «Si hay un obstáculo: Gira. Si no: Adelante», ¿qué hace Bit con el camino libre? (Avanza.)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Decidir a cada pas|Decidir en cada paso", fase: 'teoria',
        fa: "Explica amb l'animació que un «si» dins d'un «fins que» fa que en Bit decideixi a cada volta. A les demostracions, para després de cada revolt i pregunta quin bloc s'ha il·luminat i per què. Presenta els sensors dels costats i el bucle amb funció. Acaba amb la lectura en veu alta d'un programa llarg: la classe prediu i després comproveu-ho.|Explica con la animación que un «si» dentro de un «hasta que» hace que Bit decida en cada vuelta. En las demostraciones, para después de cada curva y pregunta qué bloque se ha iluminado y por qué. Presenta los sensores de los lados y el bucle con función. Acaba con la lectura en voz alta de un programa largo: la clase predice y después lo comprobáis.",
        diu: ["Ara en Bit té un arbre davant: quina part del «si» farà?|Ahora Bit tiene un árbol delante: ¿qué parte del «si» hará?",
          "Aquest programa té 4 blocs. Serviria per a un camí el doble de llarg?|Este programa tiene 4 bloques. ¿Serviría para un camino el doble de largo?",
          "Llegim-lo amb el dit: què fa la primera volta? I la segona?|Leámoslo con el dedo: ¿qué hace la primera vuelta? ¿Y la segunda?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El robot que decideix|El robot que decide", fase: 'desconnectat',
        fa: "En grups de 3, munteu una missió de la quadrícula amb motxilles. El robot segueix el programa de la pissarra i diu en veu alta cada decisió («obstacle: giro», «lliure: avanço»). El revisor/a comprova que no se salti cap pregunta. Després, el programador/a mou una o dues motxilles i comproven si el mateix programa encara funciona. Roteu els papers a cada missió.|En grupos de 3, montad una misión de la cuadrícula con mochilas. El robot sigue el programa de la pizarra y dice en voz alta cada decisión («obstáculo: giro», «libre: avanzo»). El revisor/a comprueba que no se salte ninguna pregunta. Después, el programador/a mueve una o dos mochilas y comprueban si el mismo programa todavía funciona. Rotad los papeles en cada misión.",
        diu: ["Robot: digues cada decisió en veu alta abans de moure't.|Robot: di cada decisión en voz alta antes de moverte.",
          "Heu mogut una roca i el robot no arriba: per què? Què faríeu?|Habéis movido una roca y el robot no llega: ¿por qué? ¿Qué haríais?",
          "Aquest programa funcionaria en un camí que gira a l'esquerra?|¿Este programa funcionaría en un camino que gira a la izquierda?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a la pausa activa. «El robot que decideix» és per fer a casa. A l'«On acabarà?», demana que llegeixin el programa amb el dit abans de triar. Al bloc equivocat, que expliquin cap on giren els revolts.|Cada alumno/a hace la sesión hasta la pausa activa. «El robot que decide» es para hacer en casa. En el «¿Dónde terminará?», pide que lean el programa con el dedo antes de elegir. En el bloque equivocado, que expliquen hacia dónde giran las curvas.",
        diu: ["Llegeix-lo amb el dit: on para el primer bucle de dins?|Léelo con el dedo: ¿dónde para el primer bucle de dentro?",
          "Cap on giren els revolts d'aquest camí? I el programa, cap on gira?|¿Hacia dónde giran las curvas de este camino? ¿Y el programa, hacia dónde gira?",
          "A ordenar: què pregunta primer en Bit, si ha arribat o si té un obstacle? (Si ha arribat.)|Al ordenar: ¿qué pregunta primero Bit, si ha llegado o si tiene un obstáculo? (Si ha llegado.)"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, les històries del taller, les targetes de «Descobreix», ordenar què fa en Bit a cada volta, «El robot que decideix» (per a casa), «On acabarà?» i el gir equivocat.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, las historias del taller, las tarjetas de «Descubre», ordenar qué hace Bit en cada vuelta, «El robot que decide» (para casa), «¿Dónde terminará?» y el giro equivocado.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: combinem-ho tot|Retos: combinémoslo todo", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els cinc reptes. Són llargs: digues que no cal acabar-los tots avui i que l'important és entendre cada programa. Al del llum, insisteix que el facin «Pas a pas» per veure on s'encén el llum vermell.|Pausa activa todos juntos. Después, los cinco retos. Son largos: di que no hace falta terminarlos todos hoy y que lo importante es entender cada programa. En el de la luz, insiste en que lo hagan «Paso a paso» para ver dónde se enciende la luz roja.",
        diu: ["Què ha de fer en Bit si té un obstacle? I si no en té?|¿Qué tiene que hacer Bit si tiene un obstáculo? ¿Y si no lo tiene?",
          "La funció «esquiva» ja està feta: on la crides?|La función «esquiva» ya está hecha: ¿dónde la llamas?",
          "El llum vermell, a quina part del «si» ha d'anar?|La luz roja, ¿en qué parte del «si» tiene que ir?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els cinc reptes: els passadissos que giren a la dreta, els girs als dos costats, la funció «esquiva», el comptador d'estrelles i el bug dels llums.|«Pausa activa» y los cinco retos: los pasillos que giran a la derecha, los giros a los dos lados, la función «esquiva», el contador de estrellas y el bug de las luces.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la patrulla de la cova|Crea: la patrulla de la cueva", fase: 'crea',
        fa: "Cada alumne/a programa la patrulla per a les dues coves. Qui acabi pot afegir llums, notes o un comptador d'estrelles i ensenyar-ho a un company/a.|Cada alumno/a programa la patrulla para las dos cuevas. Quien termine puede añadir luces, notas o un contador de estrellas y enseñárselo a un compañero/a.",
        diu: ["Funciona a les dues coves? Mira les pestanyes.|¿Funciona en las dos cuevas? Mira las pestañas.",
          "Què has afegit al teu programa per fer-lo més teu?|¿Qué has añadido a tu programa para hacerlo más tuyo?",
          "Si una cova gira a la dreta i l'altra també, quin programa serveix per a totes dues?|Si una cueva gira a la derecha y la otra también, ¿qué programa sirve para las dos?"],
        slides: ['s15'], app: "Pas «Crea»: La patrulla de la cova.|Paso «Crea»: La patrulla de la cueva.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que responguin les preguntes finals i fes el tiquet de sortida.|Repasa las tres ideas con el resumen, deja que respondan las preguntas finales y haz el ticket de salida.",
        diu: ["Què fa en Bit a cada volta del programa que decideix?|¿Qué hace Bit en cada vuelta del programa que decide?",
          "Què feu abans d'executar un programa llarg?|¿Qué hacéis antes de ejecutar un programa largo?",
          "Si dins del bucle hi ha «Si hi ha una estrella: Suma 1», quan suma en Bit? (Només quan hi ha una estrella.)|Si dentro del bucle hay «Si hay una estrella: Suma 1», ¿cuándo suma Bit? (Solo cuando hay una estrella.)"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «Si» fora del bucle, i en Bit només decideix una vegada.|Pone el «Si» fuera del bucle, y Bit solo decide una vez.",
        "Pregunta: quantes vegades ha de decidir en Bit? Que miri si el «Si» queda dins del requadre verd del bucle.|Pregunta: ¿cuántas veces tiene que decidir Bit? Que mire si el «Si» queda dentro del recuadro verde del bucle."],
      ["Posa «Endavant» a la part del «si» i «Gira» a la del «si no», al revés.|Pone «Adelante» en la parte del «si» y «Gira» en la del «si no», al revés.",
        "Que llegeixi la condició en veu alta: «si hi ha un obstacle davant…». Què ha de fer, llavors?|Que lea la condición en voz alta: «si hay un obstáculo delante…». ¿Qué tiene que hacer, entonces?"],
      ["Al repte dels dos costats, posa «si no» i en Bit no avança quan gira.|En el reto de los dos lados, pone «si no» y Bit no avanza cuando gira.",
        "Que el faci «Pas a pas» en un revolt. Després de girar, què ha de fer sempre? Ha d'anar dins o fora dels «si»?|Que lo haga «Paso a paso» en una curva. Después de girar, ¿qué tiene que hacer siempre? ¿Tiene que ir dentro o fuera de los «si»?"],
      ["Executa un programa llarg moltes vegades sense pensar per què falla.|Ejecuta un programa largo muchas veces sin pensar por qué falla.",
        "Proposa-li predir primer: «On creus que s'equivocarà?». Després, «Pas a pas» fins al bloc que falla i canviar només aquell.|Proponle predecir primero: «¿Dónde crees que se equivocará?». Después, «Paso a paso» hasta el bloque que falla y cambiar solo ese."],
      ["Al comptador d'estrelles, posa «Suma 1» sense «Si» i compta caselles en lloc d'estrelles.|En el contador de estrellas, pone «Suma 1» sin «Si» y cuenta casillas en lugar de estrellas.",
        "Pregunta: quan ha de sumar, a cada pas o només quan hi ha una estrella? Quin bloc fa servir el sensor?|Pregunta: ¿cuándo tiene que sumar, en cada paso o solo cuando hay una estrella? ¿Qué bloque usa el sensor?"]
    ],
    diff: {
      mes: "Fer que la patrulla compti les estrelles i encengui el llum verd en arribar. Inventar a la fitxa un camí amb revolts als dos costats i escriure un programa que el segueixi.|Hacer que la patrulla cuente las estrellas y encienda la luz verde al llegar. Inventar en la ficha un camino con curvas a los dos lados y escribir un programa que lo siga.",
      menys: "Començar pel repte dels revolts a la dreta amb el programa de la pissarra al costat. Fer de robot amb el dit sobre la pantalla dient cada decisió en veu alta.|Empezar por el reto de las curvas a la derecha con el programa de la pizarra al lado. Hacer de robot con el dedo sobre la pantalla diciendo cada decisión en voz alta."
    },
    aval: {
      ticket: ["Què fa en Bit a cada volta del programa «Fins que arribis: si hi ha obstacle, gira; si no, endavant»?|¿Qué hace Bit en cada vuelta del programa «Hasta que llegues: si hay obstáculo, gira; si no, adelante»?",
        "Què fas abans d'executar un programa llarg?|¿Qué haces antes de ejecutar un programa largo?"],
      rubric: [
        ["Condicions dins de bucles|Condiciones dentro de bucles", "Posa el «Si… si no…» dins del bucle i explica què passa a cada volta.|Pone el «Si… si no…» dentro del bucle y explica qué pasa en cada vuelta.", "Fa servir el bucle i el «Si», però de vegades els posa l'un sota l'altre.|Usa el bucle y el «Si», pero a veces los pone uno debajo del otro."],
        ["Combinar blocs|Combinar bloques", "Combina el bucle amb funcions, llums o comptadors segons el que demana el repte.|Combina el bucle con funciones, luces o contadores según lo que pide el reto.", "Combina el bucle amb un altre tipus de bloc amb ajuda.|Combina el bucle con otro tipo de bloque con ayuda."],
        ["Llegir i depurar|Leer y depurar", "Prediu on acaba en Bit i troba el bloc que falla amb «Pas a pas».|Predice dónde termina Bit y encuentra el bloque que falla con «Paso a paso».", "Executa per provar i necessita ajuda per localitzar el bug.|Ejecuta para probar y necesita ayuda para localizar el bug."],
        ["Sensors dels costats|Sensores de los lados", "Fa servir «hi ha camí a l'esquerra / a la dreta» i deixa l'Endavant a fora dels «si».|Usa «hay camino a la izquierda / a la derecha» y deja el Adelante fuera de los «si».", "Fa servir només el sensor de davant o posa l'Endavant dins d'un «si».|Usa solo el sensor de delante o pone el Adelante dentro de un «si»."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot repetir la sessió i fer «El robot que decideix»: caminar fins a la cuina seguint la regla «si tinc una paret davant, giro; si no, faig una passa». Feu-ho a poc a poc i amb els ulls oberts!|En casa, con el móvil, vuestro hijo o hija puede repetir la sesión y hacer «El robot que decide»: caminar hasta la cocina siguiendo la regla «si tengo una pared delante, giro; si no, doy un paso». ¡Hacedlo despacio y con los ojos abiertos!",
    slides: [
      { id: 's1', k: 'portada', t: "Combinem-ho tot|Combinémoslo todo", x: "Bucles, sensors, funcions, llums i comptadors: tot junt!|Bucles, sensores, funciones, luces y contadores: ¡todo junto!",
        nota: "Explica que avui faran els programes més llargs del curs fins ara, i que llegir-los bé és part de la feina.|Explica que hoy harán los programas más largos del curso hasta ahora, y que leerlos bien es parte del trabajo." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", punts: ["En un camí en L, el gir va dins o fora del bucle?|En un camino en L, ¿el giro va dentro o fuera del bucle?", "Què fa «Si hi ha un obstacle: Gira. Si no: Endavant» amb el camí lliure?|¿Qué hace «Si hay un obstáculo: Gira. Si no: Adelante» con el camino libre?"],
        nota: "Respostes: a fora, després del bucle; avança, perquè fa la part del «si no».|Respuestas: fuera, después del bucle; avanza, porque hace la parte del «si no»." },
      { id: 's3', k: 'pregunta', t: "Un camí sense mapa|Un camino sin mapa", x: "Si el passadís de la cova té deu revolts i no sabem on són, quin programa faríem?|Si el pasillo de la cueva tiene diez curvas y no sabemos dónde están, ¿qué programa haríamos?",
        nota: "Recull idees. Porta-les cap a la solució: a cada pas, mirar si hi ha obstacle i decidir.|Recoge ideas. Llévalas hacia la solución: en cada paso, mirar si hay obstáculo y decidir." },
      { id: 's4', k: 'anim', t: "Un «si» dins d'un «fins que»|Un «si» dentro de un «hasta que»", anim: 'u7follow', x: "A cada volta en Bit decideix: si hi ha obstacle, gira; si no, avança.|En cada vuelta Bit decide: si hay obstáculo, gira; si no, avanza.",
        nota: "Fes notar quin bloc s'il·lumina a cada moment: als revolts, «Gira»; als trams rectes, «Endavant».|Haz notar qué bloque se ilumina en cada momento: en las curvas, «Gira»; en los tramos rectos, «Adelante»." },
      { id: 's5', k: 'concepte', pic: 'img/ment/int.webp', t: "Blocs dins de blocs|Bloques dentro de bloques", blocks: [{ t: "Repeteix fins que arribis|Repite hasta que llegues", c: 'loop' }, { t: "Si hi ha un obstacle davant|Si hay un obstáculo delante", c: 'cond' }, { t: "Gira a la dreta|Gira a la derecha", c: 'mov' }, { t: "Si no: Endavant|Si no: Adelante", c: 'cond' }],
        punts: ["El bucle fa la pregunta gran: hi he arribat?|El bucle hace la pregunta grande: ¿he llegado?", "El «si» fa la pregunta petita: tinc un obstacle?|El «si» hace la pregunta pequeña: ¿tengo un obstáculo?", "Totes dues es fan a cada volta.|Las dos se hacen en cada vuelta."],
        nota: "Dibuixa a la pissarra els requadres un dins de l'altre amb els colors dels blocs: verd per al bucle, groc per al «si».|Dibuja en la pizarra los recuadros uno dentro del otro con los colores de los bloques: verde para el bucle, amarillo para el «si»." },
      { id: 's6', k: 'demo', t: "El camí que gira|El camino que gira", x: "Abans d'executar: quantes vegades girarà en Bit?|Antes de ejecutar: ¿cuántas veces girará Bit?",
        demo: { w: { map: ['>###.', '...#.', '.F.#.', '.###.'] }, prog: 'until:goal{ if:wall{ r } else{ f } }' },
        nota: "Resposta: 3 vegades, una a cada revolt. La resta de voltes avança.|Respuesta: 3 veces, una en cada curva. El resto de vueltas avanza." },
      { id: 's7', k: 'demo', t: "Girs als dos costats|Giros a los dos lados", x: "Si hi ha camí a l'esquerra, gira a l'esquerra. Si n'hi ha a la dreta, a la dreta. I un pas endavant.|Si hay camino a la izquierda, gira a la izquierda. Si lo hay a la derecha, a la derecha. Y un paso adelante.",
        demo: { w: { map: ['>#...', '.#...', '.###.', '...#F'] }, prog: 'until:goal{ if:freeL{ l } if:freeR{ r } f }' },
        nota: "Fes-ho amb el cos: estireu els braços com si fossin els sensors dels costats.|Hacedlo con el cuerpo: estirad los brazos como si fueran los sensores de los lados." },
      { id: 's8', k: 'demo', t: "Un bucle que crida una funció|Un bucle que llama a una función", x: "La funció graó fa pujar un graó. El bucle la crida fins que en Bit arriba dalt.|La función peldaño hace subir un peldaño. El bucle la llama hasta que Bit llega arriba.",
        demo: { w: { map: ['.....', '...F.', '..##.', '.##..', '>#...'] }, prog: 'until:goal{ A }', fns: { A: 'f l f r' }, fnName: { A: 'graó|peldaño' } },
        nota: "Recorda la unitat 5: una funció és un grup de blocs amb nom. Aquí el bucle la crida tres vegades.|Recuerda la unidad 5: una función es un grupo de bloques con nombre. Aquí el bucle la llama tres veces." },
      { id: 's9', k: 'demo', t: "Llegeix abans d'executar|Lee antes de ejecutar", x: "A cada volta avança i, si hi ha una estrella, suma 1. Quant valdrà el comptador?|En cada vuelta avanza y, si hay una estrella, suma 1. ¿Cuánto valdrá el contador?",
        demo: { w: { map: ['.......', '>*#*#*F', '.......'] }, prog: 'until:goal{ f if:gem{ add:1 } }' },
        nota: "Que escriguin la predicció a la mà o a la pissarra abans d'executar. Resposta: 3.|Que escriban la predicción en la mano o en la pizarra antes de ejecutar. Respuesta: 3." },
      { id: 's10', k: 'activitat', t: "El robot que decideix|El robot que decide", timer: 12, punts: ["Munteu una missió amb motxilles.|Montad una misión con mochilas.", "El robot segueix el programa de la pissarra.|El robot sigue el programa de la pizarra.", "Diu cada decisió en veu alta.|Dice cada decisión en voz alta.", "Moveu una roca: encara funciona?|Moved una roca: ¿todavía funciona?"],
        nota: "Les missions de la fitxa només giren a la dreta. Si mouen roques i el camí gira a l'esquerra, el programa falla: bona conversa!|Las misiones de la ficha solo giran a la derecha. Si mueven rocas y el camino gira a la izquierda, el programa falla: ¡buena conversación!" },
      { id: 's11', k: 'concepte', pic: 'img/ment/dir.webp', t: "El programa del robot|El programa del robot", blocks: [{ t: "Repeteix fins que arribis|Repite hasta que llegues", c: 'loop' }, { t: "Si hi ha un obstacle: Gira a la dreta|Si hay un obstáculo: Gira a la derecha", c: 'cond' }, { t: "Si no: Endavant|Si no: Adelante", c: 'cond' }],
        nota: "Deixa aquesta diapositiva projectada mentre treballen al terra.|Deja esta diapositiva proyectada mientras trabajan en el suelo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Combinem-ho tot».|Abre la sesión «Combinémoslo todo».", "«El robot que decideix» és per fer a casa.|«El robot que decide» es para hacer en casa.", "A «On acabarà?», llegeix amb el dit.|En «¿Dónde terminará?», lee con el dedo.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "Comprova que tothom ordena bé què fa en Bit a cada volta: és la base dels reptes.|Comprueba que todos ordenan bien qué hace Bit en cada vuelta: es la base de los retos." },
      { id: 's13', k: 'repte', t: "Reptes: combinem-ho tot|Retos: combinémoslo todo", timer: 10, punts: ["1. Passadissos que giren a la dreta|1. Pasillos que giran a la derecha", "2. Girs als dos costats|2. Giros a los dos lados", "3. La funció «esquiva»|3. La función «esquiva»", "4. Les estrelles i el bug dels llums|4. Las estrellas y el bug de las luces"],
        nota: "No cal acabar-los tots. Prioritza que entenguin el primer i el del bug.|No hace falta terminarlos todos. Prioriza que entiendan el primero y el del bug." },
      { id: 's14', k: 'concepte', pic: 'img/ment/vel.webp', t: "Com es caça un bug llarg|Cómo se caza un bug largo", punts: ["Prediu on fallarà.|Predice dónde fallará.", "Fes-lo «Pas a pas».|Hazlo «Paso a paso».", "Para al primer bloc que fa una cosa estranya.|Para en el primer bloque que hace algo raro.", "Canvia només aquell bloc i torna-ho a provar.|Cambia solo ese bloque y vuelve a probar."],
        nota: "Són els passos de la unitat 1, ara amb programes més llargs. Recorda'ls quan arribin al bug dels llums.|Son los pasos de la unidad 1, ahora con programas más largos. Recuérdalos cuando lleguen al bug de las luces." },
      { id: 's15', k: 'activitat', t: "Crea: la patrulla de la cova|Crea: la patrulla de la cueva", timer: 5, x: "Recorre els passadissos de les dues coves i recull les estrelles. Extra: llums, notes o comptador.|Recorre los pasillos de las dos cuevas y recoge las estrellas. Extra: luces, notas o contador.",
        nota: "Qui acabi aviat pot ensenyar la patrulla a un company/a i que aquest predigui el valor del comptador.|Quien termine pronto puede enseñar la patrulla a un compañero/a y que este prediga el valor del contador." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un «si» dins d'un «fins que» fa que en Bit decideixi a cada pas.|Un «si» dentro de un «hasta que» hace que Bit decida en cada paso.", "Dins d'un bucle hi caben funcions, llums i comptadors.|Dentro de un bucle caben funciones, luces y contadores.", "Els programes llargs es llegeixen i es prediuen abans d'executar-los.|Los programas largos se leen y se predicen antes de ejecutarlos."],
        nota: "Avança que la setmana vinent és el projecte final de la unitat: el rescat a la cova.|Avanza que la semana que viene es el proyecto final de la unidad: el rescate en la cueva." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què fa en Bit a cada volta del programa que decideix?|¿Qué hace Bit en cada vuelta del programa que decide?", "Què fas abans d'executar un programa llarg?|¿Qué haces antes de ejecutar un programa largo?"],
        nota: "Respostes: pregunta si ha arribat; si no, mira si hi ha obstacle i gira o avança. Llegir-lo i predir què farà.|Respuestas: pregunta si ha llegado; si no, mira si hay obstáculo y gira o avanza. Leerlo y predecir qué hará." }
    ],
    print: [
      { id: 'p1', t: "Quadrícula del terra: el robot que decideix|Cuadrícula del suelo: el robot que decide", k: 'quadricula',
        intro: "Les roques (motxilles) fan de parets del passadís; la vora de la quadrícula també és un obstacle. El robot sempre segueix el mateix programa: «Fins que arribis: si hi ha obstacle, gira a la dreta; si no, endavant».|Las rocas (mochilas) hacen de paredes del pasillo; el borde de la cuadrícula también es un obstáculo. El robot siempre sigue el mismo programa: «Hasta que llegues: si hay obstáculo, gira a la derecha; si no, adelante».",
        items: [
          { t: "Missió 1: un revolt|Misión 1: una curva", w: 5, h: 3, cells: ['>..R.', '.....', '..F..'],
            instructions: "Abans de començar, endevineu a quina casella girarà el robot.|Antes de empezar, adivinad en qué casilla girará el robot.", sol: 'until:goal{ if:wall{ r } else{ f } }' },
          { t: "Missió 2: dos revolts|Misión 2: dos curvas", w: 5, h: 3, cells: ['>...R', 'F....', '...R.'],
            instructions: "Quantes vegades girarà el robot? I quantes passes farà?|¿Cuántas veces girará el robot? ¿Y cuántos pasos dará?", sol: 'until:goal{ if:wall{ r } else{ f } }' },
          { t: "Missió 3: la volta llarga|Misión 3: la vuelta larga", w: 5, h: 4, cells: ['>...R', '.F...', '.....', 'R....'],
            instructions: "Tres revolts. Després, moveu una roca i comproveu si el robot encara hi arriba.|Tres curvas. Después, moved una roca y comprobad si el robot todavía llega.", sol: 'until:goal{ if:wall{ r } else{ f } }' }
        ] },
      { id: 'p2', t: "Fitxa: llegeix, prediu i depura|Ficha: lee, predice y depura", k: 'fitxa',
        intro: "Llegeix cada programa amb el dit, bloc a bloc, abans de respondre.|Lee cada programa con el dedo, bloque a bloque, antes de responder.",
        items: [
          { q: "«Repeteix 3 vegades: (Repeteix fins que hi hagi un obstacle: Endavant) i Gira a l'esquerra». On acabarà en Bit? Encercla A, B o C.|«Repite 3 veces: (Repite hasta que haya un obstáculo: Adelante) y Gira a la izquierda». ¿Dónde terminará Bit? Rodea A, B o C.",
            w: { map: ['A##B.', '...#.', '...#.', '>##C.'] }, prog: '3{ until:wall{ f } l }', a: 'A',
            sol: "A: primer fins a la C, després fins a la B i finalment fins a la A.|A: primero hasta la C, después hasta la B y finalmente hasta la A." },
          { q: "«Fins que hi hagi un obstacle: Endavant», «Gira a la dreta», i això dues vegades més. On acabarà en Bit?|«Hasta que haya un obstáculo: Adelante», «Gira a la derecha», y esto dos veces más. ¿Dónde terminará Bit?",
            w: { map: ['>##.', '..#.', 'A##B'] }, prog: 'until:wall{ f } r until:wall{ f } r until:wall{ f }', a: 'A',
            sol: "A: va a la dreta, baixa fins a baix de tot, gira i va cap a l'esquerra fins a la A.|A: va a la derecha, baja hasta abajo del todo, gira y va hacia la izquierda hasta la A." },
          { q: "«Repeteix fins que arribis: Endavant; si hi ha una estrella, suma 1». Quant valdrà el comptador al final?|«Repite hasta que llegues: Adelante; si hay una estrella, suma 1». ¿Cuánto valdrá el contador al final?",
            w: { map: ['......', '>*#**F', '......'] }, sol: "3: hi ha tres estrelles pel camí.|3: hay tres estrellas por el camino." },
          { q: "Aquest programa havia d'encendre el llum vermell només als revolts, però l'encén a cada pas: «Fins que arribis: si hi ha obstacle, gira; si no, endavant i llum vermell». Com l'arreglaries?|Este programa tenía que encender la luz roja solo en las curvas, pero la enciende en cada paso: «Hasta que llegues: si hay obstáculo, gira; si no, adelante y luz roja». ¿Cómo lo arreglarías?",
            sol: "Cal moure el llum vermell a la part del «si»: si hi ha obstacle, gira i llum vermell; si no, només endavant.|Hay que mover la luz roja a la parte del «si»: si hay obstáculo, gira y luz roja; si no, solo adelante." },
          { q: "Escriu el programa que decideix a cada pas per a aquest passadís.|Escribe el programa que decide en cada paso para este pasillo.",
            w: { map: ['>###', '...#', 'F###'] }, solProg: 'until:goal{ if:wall{ r } else{ f } }',
            sol: "Repeteix fins que arribis: si hi ha un obstacle davant, gira a la dreta; si no, endavant.|Repite hasta que llegues: si hay un obstáculo delante, gira a la derecha; si no, adelante." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: rescat a la cova ---------- */
  'r7-4': {
    intro: "Projecte final de la unitat: el rescat a la cova. L'alumnat <b>planifica amb paraules</b> un rescat en cinc trossos (fins a la caixa, agafa-la, mitja volta, fins a la sortida, deixa-la) i el passa a blocs amb bucles «fins que», de manera que funcioni a coves que canvien. També aprèn el <b>truc del comptador</b>: sumar a l'anada i restar a la tornada fins que valgui 0 per saber quan ha tornat. La classe fa el pla, el prova a la cova del terra, programa el projecte a l'ordinador i el presenta.|Proyecto final de la unidad: el rescate en la cueva. El alumnado <b>planifica con palabras</b> un rescate en cinco trozos (hasta la caja, cógela, media vuelta, hasta la salida, déjala) y lo pasa a bloques con bucles «hasta que», de manera que funcione en cuevas que cambian. También aprende el <b>truco del contador</b>: sumar a la ida y restar a la vuelta hasta que valga 0 para saber cuándo ha vuelto. La clase hace el plan, lo prueba en la cueva del suelo, programa el proyecto en el ordenador y lo presenta.",
    claus: [
      "Un projecte gran es fa a trossos: primer el pla amb paraules, després els blocs.|Un proyecto grande se hace a trozos: primero el plan con palabras, después los bloques.",
      "Cada tros recte és un bucle «fins que» amb la condició que diu on parar: la caixa o l'obstacle.|Cada trozo recto es un bucle «hasta que» con la condición que dice dónde parar: la caja o el obstáculo.",
      "La mitja volta són dos girs iguals; a la tornada, els girs són els contraris de l'anada.|La media vuelta son dos giros iguales; a la vuelta, los giros son los contrarios de la ida.",
      "El comptador pot recordar quantes passes s'han fet per tornar exactament al principi.|El contador puede recordar cuántos pasos se han dado para volver exactamente al principio."
    ],
    prev: [
      "Bucles «fins que» amb caixa, obstacle i bandera, i un bucle per tram (sessions 1 i 2).|Bucles «hasta que» con caja, obstáculo y bandera, y un bucle por tramo (sesiones 1 y 2).",
      "El programa que decideix a cada pas (sessió 3).|El programa que decide en cada paso (sesión 3).",
      "El comptador amb «Suma», «Resta» i la condició «el comptador valgui N» (unitat 6).|El contador con «Suma», «Resta» y la condición «el contador valga N» (unidad 6)."
    ],
    faq: [
      ["Per què la mitja volta són dos girs?|¿Por qué la media vuelta son dos giros?", "Cada gir és un quart de volta. Amb dos girs iguals, en Bit acaba mirant cap a on venia.|Cada giro es un cuarto de vuelta. Con dos giros iguales, Bit acaba mirando hacia donde venía."],
      ["Per què a la tornada he de girar cap a l'altre costat?|¿Por qué a la vuelta tengo que girar hacia el otro lado?", "Perquè ara camines al revés. Si a l'anada giraves a la dreta per baixar, a la tornada puges i la casa queda a l'esquerra.|Porque ahora caminas al revés. Si a la ida girabas a la derecha para bajar, a la vuelta subes y la casa queda a la izquierda."],
      ["Com funciona el truc del comptador?|¿Cómo funciona el truco del contador?", "A l'anada suma 1 a cada pas (1, 2, 3). A la tornada resta 1 a cada pas (2, 1, 0). Quan val 0, en Bit és on havia començat.|A la ida suma 1 en cada paso (1, 2, 3). A la vuelta resta 1 en cada paso (2, 1, 0). Cuando vale 0, Bit está donde había empezado."],
      ["La condició «hi ha una caixa» mira davant o a sota?|¿La condición «hay una caja» mira delante o debajo?", "Mira la casella on és en Bit. Per això para just a sobre de la caixa i la pot agafar.|Mira la casilla donde está Bit. Por eso para justo encima de la caja y la puede coger."],
      ["Hi havia gent a la cova?|¿Había gente en la cueva?", "No: tothom està bé al campament. És un rescat de material, les caixes i les estrelles de cristall.|No: todo el mundo está bien en el campamento. Es un rescate de material, las cajas y las estrellas de cristal."],
      ["Puc celebrar el rescat amb llums o música?|¿Puedo celebrar el rescate con luces o música?", "Sí, és l'extra del projecte: posa un llum o unes notes al final, quan la caixa ja és a la casa.|Sí, es el extra del proyecto: pon una luz o unas notas al final, cuando la caja ya está en la casa."]
    ],
    tec: [
      ["En Bit agafa la caixa però no la pot deixar.|Bit coge la caja pero no la puede dejar.", "Només es pot deixar en una casa: que comprovi amb «Pas a pas» on és en Bit quan fa «Deixa la caixa».|Solo se puede dejar en una casa: que compruebe con «Paso a paso» dónde está Bit cuando hace «Deja la caja»."],
      ["Al repte del comptador, en Bit es passa de la casa.|En el reto del contador, Bit se pasa de la casa.", "Que miri el marcador: a la caixa ha de valer el nombre de passes. A la tornada, el bucle és «fins que el comptador valgui 0» i després falta un últim Endavant.|Que mire el marcador: en la caja tiene que valer el número de pasos. A la vuelta, el bucle es «hasta que el contador valga 0» y después falta un último Adelante."],
      ["Funciona a la cova 1 però no a la 2.|Funciona en la cueva 1 pero no en la 2.", "Que toqui la pestanya de la cova 2, l'executi «Pas a pas» i busqui el primer tros que no fa el que diu el pla.|Que toque la pestaña de la cueva 2, la ejecute «Paso a paso» y busque el primer trozo que no hace lo que dice el plan."],
      ["Per presentar, no es pot connectar cada ordinador al projector.|Para presentar, no se puede conectar cada ordenador al proyector.", "Feu una volta per l'aula o que el voluntari/ària expliqui el pla a la pissarra i després l'executi a la seva pantalla.|Haced una vuelta por el aula o que el voluntario/a explique el plan en la pizarra y después lo ejecute en su pantalla."],
      ["A la cova del terra no hi ha prou cadires.|En la cueva del suelo no hay suficientes sillas.", "Marqueu les parets amb cinta al terra; el robot sap que no pot trepitjar la cinta.|Marcad las paredes con cinta en el suelo; el robot sabe que no puede pisar la cinta."]
    ],
    seg: [
      "És una història de rescat de material: si algun infant s'angoixa amb la idea d'una cova tancada, recordeu que tothom està bé al campament.|Es una historia de rescate de material: si algún niño o niña se angustia con la idea de una cueva cerrada, recordad que todo el mundo está bien en el campamento.",
      "A la cova del terra, les cadires les mouen els adults i ningú no passa per sota de res.|En la cueva del suelo, las sillas las mueven los adultos y nadie pasa por debajo de nada.",
      "Durant les presentacions: s'escolta, s'aplaudeix i es comenta amb amabilitat.|Durante las presentaciones: se escucha, se aplaude y se comenta con amabilidad."
    ],
    extra: [
      "Afegir al projecte una celebració amb llums i notes en acabar i explicar on va.|Añadir al proyecto una celebración con luces y notas al terminar y explicar dónde va.",
      "Dibuixar al full una cova nova amb un revolt i una caixa perquè la resolgui un company/a amb targetes al terra.|Dibujar en la hoja una cueva nueva con una curva y una caja para que la resuelva un compañero/a con tarjetas en el suelo.",
      "Fer el rescat de la cova amb revolt fent servir el truc del comptador i comparar els dos programes.|Hacer el rescate de la cueva con curva usando el truco del contador y comparar los dos programas."
    ],
    trans: [
      "Repàs de tota la unitat 7: «fins que», programes generals, decidir a cada pas i combinar-ho tot.|Repaso de toda la unidad 7: «hasta que», programas generales, decidir en cada paso y combinarlo todo.",
      "Unitat 6: el comptador torna a ser útil per comptar passes endavant i enrere.|Unidad 6: el contador vuelve a ser útil para contar pasos adelante y atrás.",
      "Unitat 8: l'alumnat dissenyarà el seu propi repte i farà de provador/a dels reptes dels companys i companyes.|Unidad 8: el alumnado diseñará su propio reto y hará de probador/a de los retos de los compañeros y compañeras."
    ],
    obj: [
      "L'alumne/a planifica amb paraules un rescat (anar a la caixa, agafar-la, mitja volta, tornar, deixar-la) abans de programar.|El alumno/a planifica con palabras un rescate (ir a la caja, cogerla, media vuelta, volver, dejarla) antes de programar.",
      "L'alumne/a fa servir «fins que hi hagi una caixa» i «fins que hi hagi un obstacle» en un programa que funciona a coves diferents.|El alumno/a usa «hasta que haya una caja» y «hasta que haya un obstáculo» en un programa que funciona en cuevas diferentes.",
      "L'alumne/a combina bucles amb condició amb girs, el «si» o el comptador per resoldre un problema de diverses etapes.|El alumno/a combina bucles con condición con giros, el «si» o el contador para resolver un problema de varias etapas.",
      "L'alumne/a presenta el seu projecte i explica on para cada bucle i quin bug ha arreglat.|El alumno/a presenta su proyecto y explica dónde para cada bucle y qué bug ha arreglado."
    ],
    comp: [
      "Competència digital (CD5): crear un programa complet per a un problema de diverses etapes|Competencia digital (CD5): crear un programa completo para un problema de varias etapas",
      "Pensament computacional: descomposició, generalització amb bucles amb condició i depuració|Pensamiento computacional: descomposición, generalización con bucles con condición y depuración",
      "Matemàtiques: orientació i girs a la quadrícula; comptar endavant i enrere|Matemáticas: orientación y giros en la cuadrícula; contar hacia delante y hacia atrás",
      "Comunicació oral: presentar un projecte i explicar com s'ha fet|Comunicación oral: presentar un proyecto y explicar cómo se ha hecho"
    ],
    vocab: [
      ["Rescat|Rescate", "Anar a buscar una cosa que s'ha quedat en un lloc i tornar-la on toca.|Ir a buscar algo que se ha quedado en un sitio y devolverlo donde toca."],
      ["Mitja volta|Media vuelta", "Dos girs iguals: en Bit acaba mirant cap on venia.|Dos giros iguales: Bit acaba mirando hacia donde venía."],
      ["Pla|Plan", "Els trossos del rescat dits amb paraules, en ordre, abans de posar blocs.|Los trozos del rescate dichos con palabras, en orden, antes de poner bloques."],
      ["Comptador de passes|Contador de pasos", "Una variable que suma a l'anada i resta a la tornada per saber quan s'ha tornat al principi.|Una variable que suma a la ida y resta a la vuelta para saber cuándo se ha vuelto al principio."],
      ["Projecte|Proyecto", "Un repte gran on fem servir tot el que hem après a la unitat.|Un reto grande donde usamos todo lo que hemos aprendido en la unidad."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: rescat a la cova»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: rescate en la cueva»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La quadrícula del terra, cadires o motxilles per fer les parets de la cova i un estoig que faci de caixa|La cuadrícula del suelo, sillas o mochilas para hacer las paredes de la cueva y un estuche que haga de caja",
        "Totes les targetes de la unitat (bucle «fins que», condicions, girs, Agafa i Deixa)|Todas las tarjetas de la unidad (bucle «hasta que», condiciones, giros, Coge y Deja)"
      ],
      imprimir: ["Full de pla del rescat|Hoja de plan del rescate", "Targetes del rescat|Tarjetas del rescate"],
      prep: [
        "Muntar al terra una «cova» recta amb cadires o motxilles: la casa a l'entrada, tocant a la paret, i la caixa a dins.|Montar en el suelo una «cueva» recta con sillas o mochilas: la casa en la entrada, tocando la pared, y la caja dentro.",
        "Imprimir un full de pla per parella i retallar les targetes del rescat per grup.|Imprimir una hoja de plan por pareja y recortar las tarjetas del rescate por grupo.",
        "Decidir com es presentaran els projectes: 3 o 4 voluntaris al projector o una volta per l'aula.|Decidir cómo se presentarán los proyectos: 3 o 4 voluntarios en el proyector o una vuelta por el aula.",
        "Tenir preparada la insígnia de rescatador/a o un reconeixement senzill per al final de la unitat.|Tener preparada la insignia de rescatador/a o un reconocimiento sencillo para el final de la unidad."
      ]
    },
    plan: [
      { min: 5, t: "Alerta al campament!|¡Alerta en el campamento!", fase: 'inici',
        fa: "Fes la pregunta de repàs del programa que decideix. Explica la missió del projecte: el material de l'expedició s'ha quedat dins de la cova i els passadissos canvien cada vegada. Escriu a la pissarra el pla d'en Bit en cinc trossos.|Haz la pregunta de repaso del programa que decide. Explica la misión del proyecto: el material de la expedición se ha quedado dentro de la cueva y los pasillos cambian cada vez. Escribe en la pizarra el plan de Bit en cinco trozos.",
        diu: ["Què posaríeu dins del «fins que arribis» per seguir un camí que gira?|¿Qué pondríais dentro del «hasta que llegues» para seguir un camino que gira?",
          "Si el passadís canvia cada vegada, per què no podem comptar caselles?|Si el pasillo cambia cada vez, ¿por qué no podemos contar casillas?",
          "Quins són els cinc trossos del pla? (Fins a la caixa, agafa, mitja volta, fins a la sortida, deixa.)|¿Cuáles son los cinco trozos del plan? (Hasta la caja, coge, media vuelta, hasta la salida, deja.)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla del rescat|El plan del rescate", fase: 'teoria',
        fa: "Mostra l'animació del rescat i la demostració de la caixa: abans d'executar, que la classe digui on para cada bucle. Presenta el pla del projecte i el truc del comptador de passes amb la demostració.|Muestra la animación del rescate y la demostración de la caja: antes de ejecutar, que la clase diga dónde para cada bucle. Presenta el plan del proyecto y el truco del contador de pasos con la demostración.",
        diu: ["On para el primer bucle? I el segon?|¿Dónde para el primer bucle? ¿Y el segundo?",
          "Per què la mitja volta són dos girs?|¿Por qué la media vuelta son dos giros?",
          "Si la casa no és al final del passadís, com sap en Bit on ha de parar?|Si la casa no está al final del pasillo, ¿cómo sabe Bit dónde tiene que parar?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Rescat a la cova del terra|Rescate en la cueva del suelo", fase: 'desconnectat',
        fa: "Per parelles, omplen els exercicis 1 i 2 del full de pla. Després, en grups de 3, programen el rescat amb targetes i el robot el fa a la cova del terra. Quan funcioni, mou la caixa més endins o més a prop: el mateix programa ha de funcionar sense canviar res.|Por parejas, rellenan los ejercicios 1 y 2 de la hoja de plan. Después, en grupos de 3, programan el rescate con tarjetas y el robot lo hace en la cueva del suelo. Cuando funcione, mueve la caja más adentro o más cerca: el mismo programa tiene que funcionar sin cambiar nada.",
        diu: ["Primer el pla amb paraules, després les targetes.|Primero el plan con palabras, después las tarjetas.",
          "He mogut la caixa. Cal canviar alguna targeta?|He movido la caja. ¿Hay que cambiar alguna tarjeta?",
          "Robot: abans de cada pas, digues quina pregunta fas.|Robot: antes de cada paso, di qué pregunta haces."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després grups de 3|Por parejas y después grupos de 3" },
      { min: 12, t: "A l'ordinador: els primers rescats|En el ordenador: los primeros rescates", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte del comptador de passes. Recorda'ls que diguin el pla en veu alta abans de cada repte. Al comptador, si s'encallen, torna a la diapositiva del truc.|Cada alumno/a hace la sesión hasta el reto del contador de pasos. Recuérdales que digan el plan en voz alta antes de cada reto. En el contador, si se atascan, vuelve a la diapositiva del truco.",
        diu: ["Digues-me el teu pla: fins on, què fa, fins on…|Dime tu plan: hasta dónde, qué hace, hasta dónde…",
          "Funciona a les tres coves? Mira les pestanyes.|¿Funciona en las tres cuevas? Mira las pestañas.",
          "Quant val el comptador quan en Bit arriba a la caixa? I quan torna?|¿Cuánto vale el contador cuando Bit llega a la caja? ¿Y cuando vuelve?"],
        slides: ['s11'], app: "De «Recorda» fins al comptador de passes: el repàs, les històries del campament, les targetes de «Descobreix», ordenar el pla, passar el pla a blocs, el bloc que s'ha de canviar, el primer rescat, la «Pausa activa», les estrelles de cristall i el comptador de passes.|De «Recuerda» hasta el contador de pasos: el repaso, las historias del campamento, las tarjetas de «Descubre», ordenar el plan, pasar el plan a bloques, el bloque que hay que cambiar, el primer rescate, la «Pausa activa», las estrellas de cristal y el contador de pasos.", org: "Individual|Individual" },
      { min: 15, t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", fase: 'crea',
        fa: "Primer, el repte del passadís amb revolt (arreglar el gir de tornada). Després, abans del projecte final, cada alumne/a escriu el pla a l'exercici 4 del full. Quan el tingui, programa, prova a les dues coves i millora.|Primero, el reto del pasillo con curva (arreglar el giro de vuelta). Después, antes del proyecto final, cada alumno/a escribe el plan en el ejercicio 4 de la hoja. Cuando lo tenga, programa, prueba en las dos cuevas y mejora.",
        diu: ["A la tornada, en Bit mira cap a l'altre costat: quin gir li toca ara?|A la vuelta, Bit mira hacia el otro lado: ¿qué giro le toca ahora?",
          "Prova cada tros abans de continuar: així, si hi ha un bug, saps on és.|Prueba cada trozo antes de seguir: así, si hay un bug, sabes dónde está.",
          "Funciona a les dues coves? Com ho pots celebrar en acabar?|¿Funciona en las dos cuevas? ¿Cómo lo puedes celebrar al terminar?"],
        slides: ['s12', 's13', 's14'], app: "El repte del passadís amb revolt, la història del projecte i el projecte de «Crea»: Rescat a la cova.|El reto del pasillo con curva, la historia del proyecto y el proyecto de «Crea»: Rescate en la cueva.", org: "Individual|Individual" },
      { min: 5, t: "Presentem els projectes|Presentamos los proyectos", fase: 'tancament',
        fa: "Tres o quatre voluntaris projecten el seu rescat. Abans d'executar-lo, la classe diu on pararà cada bucle. Després, expliquen un bug que hagin trobat i com l'han arreglat.|Tres o cuatro voluntarios proyectan su rescate. Antes de ejecutarlo, la clase dice dónde parará cada bucle. Después, explican un bug que hayan encontrado y cómo lo han arreglado.",
        diu: ["On para el teu primer bucle? I l'últim?|¿Dónde para tu primer bucle? ¿Y el último?",
          "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?",
          "Què t'ha agradat del projecte del company/a?|¿Qué te ha gustado del proyecto del compañero/a?"],
        slides: ['s15'], app: "El projecte desat a «Crea», projectat des de l'ordinador de cada voluntari/ària.|El proyecto guardado en «Crea», proyectado desde el ordenador de cada voluntario/a.", org: "Tot el grup|Todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa les idees de la unitat amb el resum, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Reconeix la feina de tothom amb la insígnia de rescatador/a.|Repasa las ideas de la unidad con el resumen, deja que respondan las preguntas finales de la app y haz el ticket de salida. Reconoce el trabajo de todos con la insignia de rescatador/a.",
        diu: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?",
          "Quina sessió de la cova us ha agradat més?|¿Qué sesión de la cueva os ha gustado más?",
          "On para un «fins que hi hagi una caixa»? (A sobre de la caixa.)|¿Dónde para un «hasta que haya una caja»? (Encima de la caja.)"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «fins que hi hagi un obstacle» per anar a la caixa i en Bit se la passa.|Usa «hasta que haya un obstáculo» para ir a la caja y Bit se la pasa.",
        "Pregunta: on ha de parar en Bit, a la paret o a la caixa? Quina condició diu «caixa»?|Pregunta: ¿dónde tiene que parar Bit, en la pared o en la caja? ¿Qué condición dice «caja»?"],
      ["Oblida la mitja volta (o només fa un gir) i en Bit no pot tornar.|Olvida la media vuelta (o solo hace un giro) y Bit no puede volver.",
        "Que faci el programa «Pas a pas» fins a la caixa i miri cap on mira en Bit. Cap on ha de mirar per tornar?|Que haga el programa «Paso a paso» hasta la caja y mire hacia dónde mira Bit. ¿Hacia dónde tiene que mirar para volver?"],
      ["A la tornada d'un passadís amb revolt, repeteix el mateix gir de l'anada.|En la vuelta de un pasillo con curva, repite el mismo giro de la ida.",
        "Com a la unitat 1: posa't al lloc d'en Bit. A l'anada baixava i girava; ara puja: cap on queda la casa?|Como en la unidad 1: ponte en el lugar de Bit. A la ida bajaba y giraba; ahora sube: ¿hacia dónde queda la casa?"],
      ["Al comptador de passes, suma però no resta, o resta fora del bucle.|En el contador de pasos, suma pero no resta, o resta fuera del bucle.",
        "Que miri el comptador de dalt mentre executa. Quant val a la caixa? Què ha de passar a cada pas de tornada perquè arribi a 0?|Que mire el contador de arriba mientras ejecuta. ¿Cuánto vale en la caja? ¿Qué tiene que pasar en cada paso de vuelta para que llegue a 0?"],
      ["Vol acabar el projecte de pressa i no el prova a la segona cova.|Quiere terminar el proyecto deprisa y no lo prueba en la segunda cueva.",
        "Recorda-li que el projecte s'ha de provar a totes les coves. Que toqui la pestanya de la cova 2 i hi executi el programa.|Recuérdale que el proyecto se tiene que probar en todas las cuevas. Que toque la pestaña de la cueva 2 y ejecute allí el programa."]
    ],
    diff: {
      mes: "Afegir al projecte una celebració amb llums i notes en acabar i explicar on va. Dibuixar al full una cova nova amb un revolt i una caixa perquè la resolgui un company/a amb targetes al terra.|Añadir al proyecto una celebración con luces y notas al terminar y explicar dónde va. Dibujar en la hoja una cueva nueva con una curva y una caja para que la resuelva un compañero/a con tarjetas en el suelo.",
      menys: "Fer el pla amb les targetes de paper damunt la taula, un tros per fila, i passar-lo a blocs tros a tros. Al projecte, programar primer només l'anada fins a la caixa i provar-ho abans d'afegir la tornada.|Hacer el plan con las tarjetas de papel sobre la mesa, un trozo por fila, y pasarlo a bloques trozo a trozo. En el proyecto, programar primero solo la ida hasta la caja y probarlo antes de añadir la vuelta."
    },
    aval: {
      ticket: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?",
        "Digues el pla del rescat d'una caixa en cinc trossos.|Di el plan del rescate de una caja en cinco trozos."],
      rubric: [
        ["Pla i descomposició|Plan y descomposición", "Diu o escriu els trossos del rescat abans de programar i els segueix.|Dice o escribe los trozos del rescate antes de programar y los sigue.", "Fa el pla quan l'hi demanen, però programa sense seguir-lo.|Hace el plan cuando se lo piden, pero programa sin seguirlo."],
        ["Bucles amb condició|Bucles con condición", "Tria la condició bona per a cada tros i el programa funciona a totes les coves.|Elige la condición buena para cada trozo y el programa funciona en todas las cuevas.", "Fa servir bucles amb condició, però el programa només funciona a una cova.|Usa bucles con condición, pero el programa solo funciona en una cueva."],
        ["Projecte final|Proyecto final", "Rescata la caixa a les dues coves i explica com ha trobat i arreglat algun bug.|Rescata la caja en las dos cuevas y explica cómo ha encontrado y arreglado algún bug.", "Fa una part del rescat, o el completa amb ajuda.|Hace una parte del rescate, o lo completa con ayuda."],
        ["Presentació|Presentación", "Explica el pla, diu on para cada bucle abans d'executar-lo i respon les preguntes de la classe.|Explica el plan, dice dónde para cada bucle antes de ejecutarlo y responde a las preguntas de la clase.", "Executa el projecte, però li costa explicar on para cada bucle.|Ejecuta el proyecto, pero le cuesta explicar dónde para cada bucle."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el projecte «Rescat a la cova» i explicar-vos on para cada bucle. Podeu fer també la pausa activa del rescat amb una caixa imaginària (o un coixí).|En casa, con el móvil, vuestro hijo o hija puede enseñaros el proyecto «Rescate en la cueva» y explicaros dónde para cada bucle. También podéis hacer la pausa activa del rescate con una caja imaginaria (o un cojín).",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", x: "Avui farem el projecte final de la unitat: un rescat amb bucles amb condició.|Hoy haremos el proyecto final de la unidad: un rescate con bucles con condición.",
        nota: "Explica que faran servir tot el que han après en les tres sessions anteriors.|Explica que usarán todo lo que han aprendido en las tres sesiones anteriores." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què poses dins del «fins que arribis» per seguir un camí que gira?|¿Qué pones dentro del «hasta que llegues» para seguir un camino que gira?",
        nota: "Resposta: un «Si hi ha un obstacle: gira; si no: endavant». Amb només «Gira», el bucle seria infinit.|Respuesta: un «Si hay un obstáculo: gira; si no: adelante». Con solo «Gira», el bucle sería infinito." },
      { id: 's3', k: 'concepte', pic: 'img/tech/scenes/illa.webp', t: "Alerta al campament!|¡Alerta en el campamento!", punts: ["El material de l'expedició s'ha quedat dins de la cova.|El material de la expedición se ha quedado dentro de la cueva.", "Els passadissos canvien cada vegada.|Los pasillos cambian cada vez.", "En Bit no pot comptar caselles: farà servir el «fins que».|Bit no puede contar casillas: usará el «hasta que»."],
        nota: "Remarca que tothom està bé al campament: és un rescat de material, no de persones.|Remarca que todos están bien en el campamento: es un rescate de material, no de personas." },
      { id: 's4', k: 'anim', t: "Un rescat fet de bucles|Un rescate hecho de bucles", anim: 'u7cave', x: "Fins que trobi la caixa, l'agafa, mitja volta i fins a la paret de la sortida.|Hasta que encuentre la caja, la coge, media vuelta y hasta la pared de la salida.",
        nota: "Demana a la classe que digui els trossos en veu alta mentre es veu l'animació.|Pide a la clase que diga los trozos en voz alta mientras se ve la animación." },
      { id: 's5', k: 'demo', t: "Fins que hi hagi una caixa|Hasta que haya una caja", x: "On para el primer bucle? I el segon?|¿Dónde para el primer bucle? ¿Y el segundo?",
        demo: { w: { map: ['.....', 'H>#b#', '.....'] }, prog: 'until:box{ f } p r r until:wall{ f } d' },
        nota: "El primer para a la caixa; el segon, a la casa, perquè després hi ha la vora del mapa.|El primero para en la caja; el segundo, en la casa, porque después está el borde del mapa." },
      { id: 's6', k: 'concepte', pic: 'img/ment/lli.webp', t: "El pla del rescat|El plan del rescate", blocks: [{ t: "Repeteix fins que hi hagi una caixa|Repite hasta que haya una caja", c: 'loop' }, { t: "Agafa la caixa|Coge la caja", c: 'act' }, { t: "Gira, Gira|Gira, Gira", c: 'mov' }, { t: "Repeteix fins que hi hagi un obstacle|Repite hasta que haya un obstáculo", c: 'loop' }, { t: "Deixa la caixa|Deja la caja", c: 'act' }],
        nota: "Cada fitxa de color és un tros del pla. Deixa-la projectada durant l'activitat del terra.|Cada ficha de color es un trozo del plan. Déjala proyectada durante la actividad del suelo." },
      { id: 's7', k: 'concepte', pic: 'img/ment/dig.webp', t: "El truc del comptador|El truco del contador", punts: ["A l'anada: Endavant i Suma 1.|A la ida: Adelante y Suma 1.", "A la tornada: Endavant i Resta 1.|A la vuelta: Adelante y Resta 1.", "Fins que el comptador valgui 0.|Hasta que el contador valga 0.", "Llavors en Bit és on ha començat.|Entonces Bit está donde ha empezado."],
        nota: "Fes-ho amb el cos: tres passes endavant comptant 1, 2, 3, mitja volta i tres passes comptant 2, 1, 0.|Hazlo con el cuerpo: tres pasos adelante contando 1, 2, 3, media vuelta y tres pasos contando 2, 1, 0." },
      { id: 's8', k: 'demo', t: "El comptador de passes|El contador de pasos", x: "La casa no és al final del passadís. El comptador diu quan en Bit ha tornat.|La casa no está al final del pasillo. El contador dice cuándo Bit ha vuelto.",
        demo: { w: { map: ['.......', '#H>##b#', '.......'] }, prog: 'until:box{ f add:1 } p r r until:cnt=0{ f sub:1 } f d' },
        nota: "Fes que la classe digui el valor del comptador a cada pas: 1, 2, 3 a l'anada; 2, 1, 0 a la tornada.|Haz que la clase diga el valor del contador en cada paso: 1, 2, 3 a la ida; 2, 1, 0 a la vuelta." },
      { id: 's9', k: 'activitat', t: "Rescat a la cova del terra|Rescate en la cueva del suelo", timer: 12, punts: ["Per parelles: el pla al full.|Por parejas: el plan en la hoja.", "En grups: el pla amb targetes.|En grupos: el plan con tarjetas.", "El robot fa el rescat a la cova del terra.|El robot hace el rescate en la cueva del suelo.", "Movem la caixa: el programa encara funciona?|Movemos la caja: ¿el programa todavía funciona?"],
        nota: "La casa ha de tocar la paret de l'entrada perquè el bucle de tornada pari just allà.|La casa tiene que tocar la pared de la entrada para que el bucle de vuelta pare justo allí." },
      { id: 's10', k: 'concepte', pic: 'img/ment/ref.webp', t: "Les regles del rescat|Las reglas del rescate", punts: ["Només una caixa cada vegada.|Solo una caja cada vez.", "Només es deixa en una casa.|Solo se deja en una casa.", "Cada tros recte és un bucle.|Cada trozo recto es un bucle.", "Prova el pla abans de canviar res.|Prueba el plan antes de cambiar nada."],
        nota: "Són les regles del repartidor de la unitat 1, ara amb bucles amb condició.|Son las reglas del repartidor de la unidad 1, ahora con bucles con condición." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12, punts: ["Obre la sessió «Projecte: rescat a la cova».|Abre la sesión «Proyecto: rescate en la cueva».", "Abans de cada repte, digues el pla en veu alta.|Antes de cada reto, di el plan en voz alta.", "Para quan acabis el comptador de passes.|Para cuando termines el contador de pasos."],
        nota: "Fixa't en qui fa servir «fins que hi hagi un obstacle» per anar a la caixa.|Fíjate en quién usa «hasta que haya un obstáculo» para ir a la caja." },
      { id: 's12', k: 'repte', t: "El passadís amb revolt|El pasillo con curva", timer: 4, x: "El programa és gairebé bo: a la tornada, en Bit gira cap al costat equivocat.|El programa es casi bueno: a la vuelta, Bit gira hacia el lado equivocado.",
        nota: "Pista: a l'anada gira a la dreta per baixar; a la tornada puja i la casa queda a la seva esquerra.|Pista: a la ida gira a la derecha para bajar; a la vuelta sube y la casa queda a su izquierda." },
      { id: 's13', k: 'concepte', pic: 'img/ment/nom.webp', t: "Projecte: fes el pla|Proyecto: haz el plan", punts: ["Per on entra en Bit i on gira?|¿Por dónde entra Bit y dónde gira?", "On és la caixa?|¿Dónde está la caja?", "Com torna fins a la casa?|¿Cómo vuelve hasta la casa?", "Escriu els trossos al full i prova cada tros.|Escribe los trozos en la hoja y prueba cada trozo."],
        nota: "No deixis començar a programar fins que cada alumne/a tingui el pla escrit o dit.|No dejes empezar a programar hasta que cada alumno/a tenga el plan escrito o dicho." },
      { id: 's14', k: 'activitat', t: "Projecte: rescat a la cova|Proyecto: rescate en la cueva", timer: 11, x: "Rescata la caixa, recull les estrelles i deixa la caixa a la casa. Ha de funcionar a les dues coves.|Rescata la caja, recoge las estrellas y deja la caja en la casa. Tiene que funcionar en las dos cuevas.",
        nota: "Qui acabi pot afegir una celebració amb llums o notes, o ajudar un company/a amb preguntes.|Quien termine puede añadir una celebración con luces o notas, o ayudar a un compañero/a con preguntas." },
      { id: 's15', k: 'activitat', t: "Presentem els projectes|Presentamos los proyectos", timer: 5, punts: ["Quin és el teu pla?|¿Cuál es tu plan?", "On para cada bucle?|¿Dónde para cada bucle?", "Quin bug has trobat i com l'has arreglat?|¿Qué bug has encontrado y cómo lo has arreglado?"],
        nota: "Abans d'executar cada projecte, que la classe predigui on para el primer bucle.|Antes de ejecutar cada proyecto, que la clase prediga dónde para el primer bucle." },
      { id: 's16', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["«Repeteix fins que…» para quan es compleix la condició.|«Repite hasta que…» para cuando se cumple la condición.", "El mateix programa serveix per a camins de qualsevol llargada.|El mismo programa sirve para caminos de cualquier longitud.", "Un «si» dins del bucle fa que en Bit decideixi a cada pas.|Un «si» dentro del bucle hace que Bit decida en cada paso.", "Un projecte gran es fa a trossos i es prova a cada cova.|Un proyecto grande se hace a trozos y se prueba en cada cueva."],
        nota: "Felicita la classe per acabar la unitat. Avança que a la unitat 8 dissenyaran el seu propi repte.|Felicita a la clase por terminar la unidad. Avanza que en la unidad 8 diseñarán su propio reto." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quina diferència hi ha entre «Repeteix 5 vegades» i «Repeteix fins que…»?|¿Qué diferencia hay entre «Repite 5 veces» y «Repite hasta que…»?", "Digues el pla del rescat en cinc trossos.|Di el plan del rescate en cinco trozos."],
        nota: "Respostes: un número fix de vegades o fins que es compleix una condició; fins a la caixa, agafar, mitja volta, fins a la paret, deixar.|Respuestas: un número fijo de veces o hasta que se cumple una condición; hasta la caja, coger, media vuelta, hasta la pared, dejar." }
    ],
    print: [
      { id: 'p1', t: "Full de pla del rescat|Hoja de plan del rescate", k: 'fitxa',
        intro: "Primer penseu el pla amb paraules, després passeu-lo a targetes o a blocs. Recordeu: una caixa cada vegada i només es deixa en una casa.|Primero pensad el plan con palabras, después pasadlo a tarjetas o a bloques. Recordad: una caja cada vez y solo se deja en una casa.",
        items: [
          { q: "Escriu amb paraules els cinc trossos del rescat d'una caixa.|Escribe con palabras los cinco trozos del rescate de una caja.",
            sol: "1) Avança fins que hi hagi una caixa; 2) agafa-la; 3) fes mitja volta; 4) avança fins que hi hagi un obstacle; 5) deixa-la a la casa.|1) Avanza hasta que haya una caja; 2) cógela; 3) da media vuelta; 4) avanza hasta que haya un obstáculo; 5) déjala en la casa." },
          { q: "Passa el pla a blocs per a aquest passadís. Funcionaria igual si la caixa fos més endins?|Pasa el plan a bloques para este pasillo. ¿Funcionaría igual si la caja estuviera más adentro?",
            w: { map: ['.......', 'H>#b###', '.......'] }, solProg: 'until:box{ f } p r r until:wall{ f } d',
            sol: "Fins que hi hagi una caixa: Endavant · Agafa · Gira, Gira · Fins que hi hagi un obstacle: Endavant · Deixa. Sí: els bucles paren on toca.|Hasta que haya una caja: Adelante · Coge · Gira, Gira · Hasta que haya un obstáculo: Adelante · Deja. Sí: los bucles paran donde toca." },
          { q: "Passadís amb revolt: escriu el programa. Compte amb el gir de la tornada!|Pasillo con curva: escribe el programa. ¡Cuidado con el giro de la vuelta!",
            w: { map: ['.......', 'H>###..', '....#..', '....b..'] }, solProg: 'until:wall{ f } r until:box{ f } p r r until:wall{ f } l until:wall{ f } d',
            sol: "Fins a l'obstacle · Gira a la dreta · Fins a la caixa · Agafa · Gira, Gira · Fins a l'obstacle · Gira a l'esquerra · Fins a l'obstacle · Deixa.|Hasta el obstáculo · Gira a la derecha · Hasta la caja · Coge · Gira, Gira · Hasta el obstáculo · Gira a la izquierda · Hasta el obstáculo · Deja." },
          { q: "El teu projecte: dibuixa per on anirà en Bit a les dues coves de l'app i escriu els trossos del pla.|Tu proyecto: dibuja por dónde irá Bit en las dos cuevas de la app y escribe los trozos del plan.",
            sol: "Resposta oberta. Comproveu que cada tros recte acaba en una caixa o en un obstacle i que el gir de tornada és el contrari del d'anada.|Respuesta abierta. Comprobad que cada trozo recto termina en una caja o en un obstáculo y que el giro de vuelta es el contrario del de ida." }
        ] },
      { id: 'p2', t: "Targetes del rescat|Tarjetas del rescate", k: 'targetes',
        intro: "Afegiu aquestes targetes a les de la unitat. La cova del terra es fa amb cadires o motxilles; la casa va a l'entrada, tocant a la paret.|Añadid estas tarjetas a las de la unidad. La cueva del suelo se hace con sillas o mochilas; la casa va en la entrada, tocando la pared.",
        items: [
          { t: "Repeteix fins que… 🔁|Repite hasta que… 🔁", n: 2 },
          { t: "hi hagi una caixa 📦|haya una caja 📦", n: 2 },
          { t: "hi hagi un obstacle davant 🪨|haya un obstáculo delante 🪨", n: 2 },
          { t: "Agafa la caixa 📦⬆|Coge la caja 📦⬆", n: 1 },
          { t: "Deixa la caixa 📦⬇|Deja la caja 📦⬇", n: 1 },
          { t: "Mitja volta 🔄|Media vuelta 🔄", n: 1 },
          { t: "Casa del campament 🏠|Casa del campamento 🏠", n: 1 },
          { t: "Caixa de l'expedició 📦|Caja de la expedición 📦", n: 1 }
        ] }
    ]
  }
});
