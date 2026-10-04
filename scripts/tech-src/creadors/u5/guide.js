/* Tech Creadors · unitat 5 «Condicions» · guia del professorat (g5-1 … g5-4). Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Si toca… ---------- */
  'g5-1': {
    obj: [
      "L'alumne/a explica què és una condició: una pregunta que només es pot respondre amb sí o no.|El alumno/a explica qué es una condición: una pregunta que solo se puede responder con sí o no.",
      "L'alumne/a explica que el bloc «si» fa els blocs de dins només quan la resposta és sí.|El alumno/a explica que el bloque «si» hace los bloques de dentro solo cuando la respuesta es sí.",
      "L'alumne/a fa servir la condició «toca…» (un personatge o la vora) per fer que un personatge reaccioni a un xoc.|El alumno/a usa la condición «toca…» (un personaje o el borde) para que un personaje reaccione a un choque.",
      "L'alumne/a col·loca el «si» dins del «per sempre» i sap explicar per què fora del bucle no funciona.|El alumno/a coloca el «si» dentro del «por siempre» y sabe explicar por qué fuera del bucle no funciona."
    ],
    comp: [
      "Competència digital (CD5): crear animacions interactives amb programació per blocs|Competencia digital (CD5): crear animaciones interactivas con programación por bloques",
      "Pensament computacional: condicions, decisions i bucles que vigilen|Pensamiento computacional: condiciones, decisiones y bucles que vigilan",
      "Comunicació oral: formular regles «si…, llavors…» clares|Comunicación oral: formular reglas «si…, entonces…» claras",
      "Coneixement del medi: màquines de casa que decideixen soles|Conocimiento del medio: máquinas de casa que deciden solas"
    ],
    vocab: [
      ["Condició|Condición", "Una pregunta que només es respon amb sí o no.|Una pregunta que solo se responde con sí o no."],
      ["Si…|Si…", "El bloc que fa els blocs de dins només quan la condició és certa.|El bloque que hace los bloques de dentro solo cuando la condición es cierta."],
      ["Toca…|Toca…", "La condició que pregunta si el personatge xoca amb un altre, amb la vora o amb el ratolí.|La condición que pregunta si el personaje choca con otro, con el borde o con el ratón."],
      ["Vora|Borde", "El límit de l'escenari.|El límite del escenario."],
      ["Per sempre|Por siempre", "Bucle que no s'acaba mai: amb un «si» a dins, el personatge vigila tota l'estona.|Bucle que no se acaba nunca: con un «si» dentro, el personaje vigila todo el rato."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Si toca…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Si toca…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Targetes «Si… llavors…» retallades (un paquet per grup de 4)|Tarjetas «Si… entonces…» recortadas (un paquete por grupo de 4)",
        "Una bossa o capsa opaca per a les targetes de condició|Una bolsa o caja opaca para las tarjetas de condición"
      ],
      imprimir: ["Targetes «Si… llavors…»|Tarjetas «Si… entonces…»"],
      prep: [
        "Imprimir i retallar les targetes. Separar-les en dos munts: condicions i accions.|Imprimir y recortar las tarjetas. Separarlas en dos montones: condiciones y acciones.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada.",
        "Provar abans la demo de la diapositiva 7 (el gat i la roca) per saber què passarà.|Probar antes la demo de la diapositiva 7 (el gato y la roca) para saber qué pasará.",
        "Fer el repte «Arregla l'error» per veure com s'esborra un bloc i com es torna a posar dins del bucle.|Hacer el reto «Arregla el error» para ver cómo se borra un bloque y cómo se vuelve a poner dentro del bucle."
      ]
    },
    plan: [
      { min: 5, t: "Inici: la Festa de la Fruita|Inicio: la Fiesta de la Fruta", fase: 'inici',
        fa: "Presenta la missió de la unitat: un videojoc per a la Festa de la Fruita. Fes les preguntes de repàs sobre coordenades i tecles i recull respostes. Planteja el problema: com sap la cistella que una poma l'ha tocada?|Presenta la misión de la unidad: un videojuego para la Fiesta de la Fruta. Haz las preguntas de repaso sobre coordenadas y teclas y recoge respuestas. Plantea el problema: ¿cómo sabe la cesta que una manzana la ha tocado?",
        diu: ["Quin bloc fa baixar la poma?|¿Qué bloque hace bajar la manzana?", "Com pot saber un personatge que ha xocat amb un altre?|¿Cómo puede saber un personaje que ha chocado con otro?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Condicions i el bloc «si»|Condiciones y el bloque «si»", fase: 'teoria',
        fa: "Explica què és una condició amb exemples de la vida diària i demana'n més. Mostra l'animació del bloc «si»: amb el no se salta els blocs; amb el sí, els fa. Projecta la demo del gat i la roca i, abans, demana què creuen que passarà. Acaba amb l'error típic: el «si» fora del bucle.|Explica qué es una condición con ejemplos de la vida diaria y pide más. Muestra la animación del bloque «si»: con el no se salta los bloques; con el sí, los hace. Proyecta la demo del gato y la roca y, antes, pregunta qué creen que pasará. Termina con el error típico: el «si» fuera del bucle.",
        diu: ["Feu-me una pregunta que es pugui respondre només amb sí o no.|Hacedme una pregunta que se pueda responder solo con sí o no.", "Què fa el «si» quan la resposta és no?|¿Qué hace el «si» cuando la respuesta es no?", "Si el «si» és fora del bucle, quantes vegades pregunta?|Si el «si» está fuera del bucle, ¿cuántas veces pregunta?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: «Si… llavors…»|Desconectado: «Si… entonces…»", fase: 'desconnectat',
        fa: "Grups de 4. Una persona treu una targeta de condició i una d'acció i les llegeix com una regla: «Si portes sabatilles, fes un salt». Qui compleix la condició fa l'acció; qui no, es queda quiet. Després de tres rondes, cada grup inventa dues regles noves i les proposa a la classe. Remarca: si la resposta és no, no es fa res.|Grupos de 4. Una persona saca una tarjeta de condición y una de acción y las lee como una regla: «Si llevas zapatillas, da un salto». Quien cumple la condición hace la acción; quien no, se queda quieto. Después de tres rondas, cada grupo inventa dos reglas nuevas y las propone a la clase. Remarca: si la respuesta es no, no se hace nada.",
        diu: ["Primer la pregunta: et passa a tu? Sí o no?|Primero la pregunta: ¿te pasa a ti? ¿Sí o no?", "Si la resposta és no, què fas? Res! Com el bloc «si».|Si la respuesta es no, ¿qué haces? ¡Nada! Como el bloque «si»."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, l'ordenació de la poma i la predicció del cranc. Al pas «Caçadors de condicions», que toquin «Ara no»: és per fer a casa. Abans de tocar «Comença» al cranc, demana que diguin en veu alta què passarà.|Cada alumno/a hace la misión, las tarjetas, la ordenación de la manzana y la predicción del cangrejo. En el paso «Cazadores de condiciones», que toquen «Ahora no»: es para hacer en casa. Antes de tocar «Empieza» en el cangrejo, pide que digan en voz alta qué pasará.",
        diu: ["Llegeix el programa abans d'executar-lo: què creus que farà?|Lee el programa antes de ejecutarlo: ¿qué crees que hará?", "Quin bloc fa la pregunta?|¿Qué bloque hace la pregunta?"],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: històries, targetes, ordenar, la predicció i l'escenari del cranc i tocar el bloc que pregunta.|De «La misión» hasta «Investiga»: historias, tarjetas, ordenar, la predicción y el escenario del cangrejo y tocar el bloque que pregunta.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després programa amb la classe el primer repte (la poma que s'amaga) a la pantalla gran i deixa'ls fer la resta. Recorda que hi ha dues proves: el programa ha de funcionar a totes dues. Qui acabi ajuda amb preguntes.|Haced la pausa activa juntos. Después programa con la clase el primer reto (la manzana que se esconde) en la pantalla grande y déjales hacer el resto. Recuerda que hay dos pruebas: el programa tiene que funcionar en las dos. Quien termine ayuda con preguntas.",
        diu: ["On va el «si»: dins o fora del «per sempre»?|¿Dónde va el «si»: dentro o fuera del «por siempre»?", "Per què a la prova 2 la poma no s'ha d'amagar?|¿Por qué en la prueba 2 la manzana no se tiene que esconder?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: atrapa la poma, l'ocell i la vora, la poma que torna i arregla l'error.|«Pausa activa» y los cuatro retos: atrapa la manzana, el pájaro y el borde, la manzana que vuelve y arregla el error.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera condició|Crea: mi primera condición", fase: 'crea',
        fa: "Cada alumne/a decideix com reacciona en Numi quan toca el regal. En parelles, s'ensenyen el programa i l'altre/a endevina la reacció abans d'executar-lo.|Cada alumno/a decide cómo reacciona Numi cuando toca el regalo. Por parejas, se enseñan el programa y el otro/a adivina la reacción antes de ejecutarlo.",
        diu: ["Quina reacció has triat? Ningú no l'ha de fer igual.|¿Qué reacción has elegido? Nadie la tiene que hacer igual."],
        slides: ['s15'], app: "Pas «Crea»: La meva primera condició.|Paso «Crea»: Mi primera condición.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: ["Digues una condició que hagis fet servir avui.|Di una condición que hayas usado hoy."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «si» abans del «per sempre» i no entén per què no passa res.|Pone el «si» antes del «por siempre» y no entiende por qué no pasa nada.", "Pregunta: quan pregunta la poma si toca la cistella? Que segueixi el programa amb el dit, bloc a bloc, i vegi que el «si» només es fa una vegada.|Pregunta: ¿cuándo pregunta la manzana si toca la cesta? Que siga el programa con el dedo, bloque a bloque, y vea que el «si» solo se hace una vez."],
      ["Posa els blocs de la reacció a sota del «si» i no a dins.|Pone los bloques de la reacción debajo del «si» y no dentro.", "Fes-li notar el forat del bloc «si»: el que hi ha dins només passa amb el sí. Que toqui el forat abans d'afegir el bloc.|Hazle notar el hueco del bloque «si»: lo que hay dentro solo pasa con el sí. Que toque el hueco antes de añadir el bloque."],
      ["No sap canviar «toca la cistella» per «toca la vora».|No sabe cambiar «toca la cesta» por «toca el borde».", "Recorda-li que les paraules en negreta dels blocs es poden tocar. Què passa si toques «la cistella»?|Recuérdale que las palabras en negrita de los bloques se pueden tocar. ¿Qué pasa si tocas «la cesta»?"],
      ["Funciona a la prova 1 però no a la 2 i pensa que l'app s'equivoca.|Funciona en la prueba 1 pero no en la 2 y piensa que la app se equivoca.", "Que miri on és la cistella a la prova 2. El programa ha de decidir sol, sense saber on és: per això cal la pregunta.|Que mire dónde está la cesta en la prueba 2. El programa tiene que decidir solo, sin saber dónde está: por eso hace falta la pregunta."],
      ["Per arreglar l'error, prova de moure el «si» amb les fletxes i no entra al bucle.|Para arreglar el error, intenta mover el «si» con las flechas y no entra en el bucle.", "Les fletxes mouen dins la mateixa llista. Que l'esborri, toqui el forat de dins del «per sempre» i el torni a posar.|Las flechas mueven dentro de la misma lista. Que lo borre, toque el hueco de dentro del «por siempre» y lo vuelva a poner."]
    ],
    diff: {
      mes: "Afegir a la poma una tercera regla: si toca el ratolí (o el dit), fa un so. Inventar una reacció diferent per a cada prova del repte de l'ocell.|Añadir a la manzana una tercera regla: si toca el ratón (o el dedo), hace un sonido. Inventar una reacción diferente para cada prueba del reto del pájaro.",
      menys: "Fer els reptes amb la targeta «Si… llavors…» al costat: primer llegir la regla en veu alta i després buscar els blocs. Començar pel primer repte, que ja té el bucle fet.|Hacer los retos con la tarjeta «Si… entonces…» al lado: primero leer la regla en voz alta y después buscar los bloques. Empezar por el primer reto, que ya tiene el bucle hecho."
    },
    aval: {
      ticket: ["Digues una condició de la vida diària i què passa si la resposta és sí.|Di una condición de la vida diaria y qué pasa si la respuesta es sí.", "On has de posar el «si toca…» perquè el personatge vigili sempre?|¿Dónde tienes que poner el «si toca…» para que el personaje vigile siempre?"],
      rubric: [
        ["Concepte de condició|Concepto de condición", "Explica que és una pregunta de sí o no i en dona exemples propis.|Explica que es una pregunta de sí o no y da ejemplos propios.", "Reconeix condicions en exemples, però no les explica.|Reconoce condiciones en ejemplos, pero no las explica."],
        ["Bloc «si»|Bloque «si»", "Posa la reacció dins del «si» i explica què passa amb el no.|Pone la reacción dentro del «si» y explica qué pasa con el no.", "Fa servir el «si», però de vegades posa la reacció a fora.|Usa el «si», pero a veces pone la reacción fuera."],
        ["El «si» dins del bucle|El «si» dentro del bucle", "Arregla el programa de l'error i explica per què el «si» va dins del «per sempre».|Arregla el programa del error y explica por qué el «si» va dentro del «por siempre».", "Necessita ajuda per veure que fora del bucle només pregunta una vegada.|Necesita ayuda para ver que fuera del bucle solo pregunta una vez."]
      ]
    },
    casa: "A casa, feu junts «Caçadors de condicions»: busqueu tres màquines que decideixen soles (la nevera, la rentadora, el llum de l'escala…) i escriviu-ne la regla «Si…, llavors…».|En casa, haced juntos «Cazadores de condiciones»: buscad tres máquinas que deciden solas (la nevera, la lavadora, la luz de la escalera…) y escribid su regla «Si…, entonces…».",
    slides: [
      { id: 's1', k: 'portada', t: "Si toca…|Si toca…", x: "Unitat 5: Condicions. Avui els personatges aprendran a fer preguntes.|Unidad 5: Condiciones. Hoy los personajes aprenderán a hacer preguntas.",
        nota: "Explica que aquesta unitat acabarà amb un videojoc propi: Atrapa la fruita.|Explica que esta unidad terminará con un videojuego propio: Atrapa la fruta." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["Quin bloc fa baixar la poma? (canvia y en -5)|¿Qué bloque hace bajar la manzana? (cambia y en -5)", "Quan es fan els blocs de «Quan premo la tecla espai»?|¿Cuándo se hacen los bloques de «Al pulsar la tecla espacio»?"],
        nota: "Dues preguntes ràpides a mà alçada. Si dubten amb la y, dibuixa l'eix a la pissarra.|Dos preguntas rápidas a mano alzada. Si dudan con la y, dibuja el eje en la pizarra." },
      { id: 's3', k: 'pregunta', t: "Com sap la cistella que l'ha tocat una poma?|¿Cómo sabe la cesta que la ha tocado una manzana?", x: "Pensa-hi un moment abans de respondre.|Piénsalo un momento antes de responder.",
        nota: "Recull idees sense corregir. Busca la paraula «preguntar»: el personatge s'ha de preguntar si toca la poma.|Recoge ideas sin corregir. Busca la palabra «preguntar»: el personaje tiene que preguntarse si toca la manzana." },
      { id: 's4', k: 'anim', t: "Una condició és una pregunta de sí o no|Una condición es una pregunta de sí o no", anim: 'g5cond', x: "«Toca la cistella?» Només hi ha dues respostes.|«¿Toca la cesta?» Solo hay dos respuestas.",
        nota: "Demana preguntes de sí o no i d'altres que no ho són («De quin color és?») per veure la diferència.|Pide preguntas de sí o no y otras que no lo son («¿De qué color es?») para ver la diferencia." },
      { id: 's5', k: 'concepte', t: "Condicions de cada dia|Condiciones de cada día", punts: ["Si plou, agafo el paraigua.|Si llueve, cojo el paraguas.", "Si el semàfor és verd, passo.|Si el semáforo está verde, paso.", "Si obro la nevera, s'encén el llum.|Si abro la nevera, se enciende la luz."],
        nota: "Per a cada frase, que identifiquin la pregunta de sí o no i el que passa amb el sí.|Para cada frase, que identifiquen la pregunta de sí o no y lo que pasa con el sí." },
      { id: 's6', k: 'anim', t: "El bloc «si»|El bloque «si»", anim: 'g5if', x: "Amb el sí, fa els blocs de dins. Amb el no, se'ls salta.|Con el sí, hace los bloques de dentro. Con el no, se los salta.",
        nota: "Assenyala el forat del bloc: és on van els blocs que només passen amb el sí.|Señala el hueco del bloque: es donde van los bloques que solo pasan con el sí." },
      { id: 's7', k: 'media', t: "El gat i la roca|El gato y la roca", x: "Què creieu que farà el gat quan toqui la roca?|¿Qué creéis que hará el gato cuando toque la roca?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -150, y: -110, dir: 90 }, { id: 'roca', art: 'roca', x: 120, y: -110 }] }, prog: '@gat flag{ forever{ move:4 bounce if:touch:roca{ say:"Ai, una roca!|¡Ay, una roca!",1 turn:180 } } }', time: 7 },
        nota: "Primer, que llegeixin els blocs i facin una predicció. Després, deixa-la funcionar dues vegades.|Primero, que lean los bloques y hagan una predicción. Después, déjala funcionar dos veces." },
      { id: 's8', k: 'anim', t: "Dins o fora del bucle?|¿Dentro o fuera del bucle?", anim: 'g5loop', x: "Dins del «per sempre», pregunta a cada volta.|Dentro del «por siempre», pregunta en cada vuelta.",
        nota: "Aquest és l'error més freqüent de la sessió. Fes-los dir en veu alta: «el si va dins del per sempre».|Este es el error más frecuente de la sesión. Hazles decir en voz alta: «el si va dentro del por siempre»." },
      { id: 's9', k: 'media', t: "«Si toques la vora, rebota»|«Si tocas el borde, rebota»", x: "El bloc que ja coneixíeu té una condició amagada.|El bloque que ya conocíais tiene una condición escondida.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'pilota', art: 'pilota', x: -100, y: 20, dir: 90 }] }, prog: '@pilota flag{ forever{ move:7 if:touch:edge{ turn:180 sound:boing } } }', time: 6 },
        nota: "Pregunta quina és la condició i què fa amb el sí. Ara poden fer reaccions pròpies a la vora.|Pregunta cuál es la condición y qué hace con el sí. Ahora pueden hacer reacciones propias en el borde." },
      { id: 's10', k: 'activitat', t: "Si… llavors…|Si… entonces…", timer: 11, punts: ["Treu una condició i una acció.|Saca una condición y una acción.", "Llegiu la regla en veu alta.|Leed la regla en voz alta.", "Qui compleix la condició fa l'acció; qui no, quiet/a.|Quien cumple la condición hace la acción; quien no, quieto/a.", "Al final, inventeu dues regles noves.|Al final, inventad dos reglas nuevas."],
        nota: "Comença tu amb una ronda de mostra davant de tothom.|Empieza tú con una ronda de muestra delante de todos." },
      { id: 's11', k: 'activitat', t: "Com el bloc «si»|Como el bloque «si»", punts: ["Primer, la pregunta.|Primero, la pregunta.", "Sí: faig l'acció.|Sí: hago la acción.", "No: no faig res i espero la següent.|No: no hago nada y espero la siguiente."],
        nota: "Deixa-la projectada mentre fan l'activitat.|Déjala proyectada mientras hacen la actividad." },
      { id: 's12', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 13, punts: ["Obre la sessió «Si toca…».|Abre la sesión «Si toca…».", "«Caçadors de condicions»: toca «Ara no» (és per a casa).|«Cazadores de condiciones»: toca «Ahora no» (es para casa).", "Abans d'executar el cranc, digues què farà.|Antes de ejecutar el cangrejo, di qué hará.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i fes preguntes de predicció.|Pasea y haz preguntas de predicción." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Atrapa la poma|1. Atrapa la manzana", "2. L'ocell i la vora|2. El pájaro y el borde", "3. La poma que torna|3. La manzana que vuelve", "4. Arregla l'error|4. Arregla el error"],
        nota: "Fes el primer junts a la pantalla gran.|Haced el primero juntos en la pantalla grande." },
      { id: 's14', k: 'concepte', t: "Dues proves, un programa|Dos pruebas, un programa", punts: ["A cada prova, la cistella és en un lloc diferent.|En cada prueba, la cesta está en un sitio diferente.", "El programa no sap on és: ho ha de preguntar.|El programa no sabe dónde está: lo tiene que preguntar.", "Per això cal el «si».|Por eso hace falta el «si»."],
        nota: "Explica-ho quan algú digui que «a la prova 1 ja funcionava».|Explícalo cuando alguien diga que «en la prueba 1 ya funcionaba»." },
      { id: 's15', k: 'activitat', t: "Crea: la meva primera condició|Crea: mi primera condición", timer: 5, x: "En Numi toca el regal. Com reacciona? Tu decideixes!|Numi toca el regalo. ¿Cómo reacciona? ¡Tú decides!",
        nota: "Valora les idees diferents: un so, un canvi de vestit, una frase graciosa.|Valora las ideas diferentes: un sonido, un cambio de disfraz, una frase graciosa." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una condició és una pregunta de sí o no.|Una condición es una pregunta de sí o no.", "El «si» fa els blocs de dins només amb el sí.|El «si» hace los bloques de dentro solo con el sí.", "El «si» va dins del «per sempre» per vigilar sempre.|El «si» va dentro del «por siempre» para vigilar siempre."],
        nota: "Torna a la pregunta del principi: ara ja saben com ho sap la cistella.|Vuelve a la pregunta del principio: ahora ya saben cómo lo sabe la cesta." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una condició de la vida diària.|Una condición de la vida diaria.", "On va el «si toca…»?|¿Dónde va el «si toca…»?"],
        nota: "Una pregunta per alumne/a a la porta.|Una pregunta por alumno/a en la puerta." }
    ],
    print: [
      { id: 'p1', t: "Targetes «Si… llavors…»|Tarjetas «Si… entonces…»", k: 'targetes',
        intro: "Un paquet per grup de 4. Les condicions van en una bossa i les accions en una altra. Es treu una de cada i es llegeix la regla.|Un paquete por grupo de 4. Las condiciones van en una bolsa y las acciones en otra. Se saca una de cada y se lee la regla.",
        items: [
          { t: "Si portes sabatilles… 👟|Si llevas zapatillas… 👟", n: 1 }, { t: "Si tens un germà o germana… 👫|Si tienes un hermano o hermana… 👫", n: 1 },
          { t: "Si t'agraden les pomes… 🍎|Si te gustan las manzanas… 🍎", n: 1 }, { t: "Si portes alguna cosa blava… 🔵|Si llevas algo azul… 🔵", n: 1 },
          { t: "Si has esmorzat fruita… 🍌|Si has desayunado fruta… 🍌", n: 1 }, { t: "Si tens una mascota… 🐱|Si tienes una mascota… 🐱", n: 1 },
          { t: "…fes un salt 🦘|…da un salto 🦘", n: 1 }, { t: "…toca't el nas 👃|…tócate la nariz 👃", n: 1 },
          { t: "…aixeca els braços 🙌|…levanta los brazos 🙌", n: 1 }, { t: "…fes una volta 🔄|…da una vuelta 🔄", n: 1 },
          { t: "…pica de mans tres vegades 👏|…da tres palmadas 👏", n: 1 }, { t: "…ajup-te 🧎|…agáchate 🧎", n: 1 }
        ] }
    ]
  },
  /* ---------- Sessió 2 · Colors que avisen ---------- */
  'g5-2': {
    obj: [
      "L'alumne/a fa servir la condició «toca el color» per fer que un personatge reaccioni a una zona del fons.|El alumno/a usa la condición «toca el color» para que un personaje reaccione a una zona del fondo.",
      "L'alumne/a explica que el «si… si no» sempre fa una de les dues parts, mai totes dues.|El alumno/a explica que el «si… si no» siempre hace una de las dos partes, nunca las dos.",
      "L'alumne/a programa un personatge que cau si no toca l'herba i camina si la toca.|El alumno/a programa un personaje que cae si no toca la hierba y camina si la toca.",
      "L'alumne/a dona un significat a cada color d'un laberint i el programa amb un «si» per color.|El alumno/a da un significado a cada color de un laberinto y lo programa con un «si» por color."
    ],
    comp: [
      "Competència digital (CD5): programar decisions en animacions i videojocs propis|Competencia digital (CD5): programar decisiones en animaciones y videojuegos propios",
      "Pensament computacional: condicions amb dues sortides («si… si no»)|Pensamiento computacional: condiciones con dos salidas («si… si no»)",
      "Educació viària i ciutadania: els colors del semàfor com a codi compartit|Educación vial y ciudadanía: los colores del semáforo como código compartido",
      "Educació artística: el color com a senyal|Educación artística: el color como señal"
    ],
    vocab: [
      ["Toca el color|Toca el color", "Condició que pregunta si el personatge trepitja un color del fons.|Condición que pregunta si el personaje pisa un color del fondo."],
      ["Si… si no|Si… si no", "Bloc amb dues parts: una per al sí i una altra per al no.|Bloque con dos partes: una para el sí y otra para el no."],
      ["Senyal|Señal", "Un color, un so o un dibuix que avisa d'alguna cosa.|Un color, un sonido o un dibujo que avisa de algo."],
      ["Gravetat|Gravedad", "Quan un personatge cau fins que toca el terra.|Cuando un personaje cae hasta que toca el suelo."],
      ["Atura tot|Para todo", "Bloc que acaba el programa: tots els personatges s'aturen.|Bloque que acaba el programa: todos los personajes se paran."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «Colors que avisen»|Un ordenador por alumno/a con la sesión «Colores que avisan»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "La graella «El camí dels colors» (una per parella) i llapis de colors blau, verd i vermell|La cuadrícula «El camino de los colores» (una por pareja) y lápices de colores azul, verde y rojo",
        "Una fitxa o goma petita per parella que farà de personatge|Una ficha o goma pequeña por pareja que hará de personaje"
      ],
      imprimir: ["El camí dels colors|El camino de los colores"],
      prep: [
        "Imprimir una graella per parella.|Imprimir una cuadrícula por pareja.",
        "Provar el repte del laberint amb les fletxes i amb «Comprova» per saber com funciona.|Probar el reto del laberinto con las flechas y con «Comprueba» para saber cómo funciona.",
        "Recordar com s'afegeix el «si no»: tocar el bloc «si» i el botó «Afegeix «si no»».|Recordar cómo se añade el «si no»: tocar el bloque «si» y el botón «Añade «si no»».",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: colors que avisen|Inicio: colores que avisan", fase: 'inici',
        fa: "Repassa el «si» dins del «per sempre». Pregunta on veuen colors que avisen: el semàfor, les sortides d'emergència, el gas de la cuina… Presenta en Pinces, el cranc que no sap nedar.|Repasa el «si» dentro del «por siempre». Pregunta dónde ven colores que avisan: el semáforo, las salidas de emergencia, el fuego de la cocina… Presenta a Pinzas, el cangrejo que no sabe nadar.",
        diu: ["On heu vist colors que volen dir alguna cosa?|¿Dónde habéis visto colores que quieren decir algo?", "Què vol dir el verd d'una sortida d'emergència?|¿Qué quiere decir el verde de una salida de emergencia?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Toca el color i «si… si no»|Toca el color y «si… si no»", fase: 'teoria',
        fa: "Mostra l'animació del cranc i la demo de la platja. Explica el «si… si no» amb el paraigua i la gorra i fes que diguin quina part es fa en cada cas. Projecta la demo d'en Numi que cau i camina, i acaba amb el laberint: un «si» per a cada color.|Muestra la animación del cangrejo y la demo de la playa. Explica el «si… si no» con el paraguas y la gorra y haz que digan qué parte se hace en cada caso. Proyecta la demo de Numi que cae y camina, y termina con el laberinto: un «si» para cada color.",
        diu: ["Si no plou, què agafo?|Si no llueve, ¿qué cojo?", "Pot fer les dues parts alhora?|¿Puede hacer las dos partes a la vez?", "En Numi és a l'aire: quina part es fa?|Numi está en el aire: ¿qué parte se hace?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: el camí dels colors|Desconectado: el camino de los colores", fase: 'desconnectat',
        fa: "En parelles, pinten a la graella unes quantes caselles blaves (aigua), vermelles (trampa) i verdes (sortida) i marquen l'inici. Escriuen les regles amb «si… si no». Després intercanvien la graella amb una altra parella: un/a diu fletxes i l'altre/a mou la fitxa i aplica les regles en veu alta a cada casella.|Por parejas, pintan en la cuadrícula unas cuantas casillas azules (agua), rojas (trampa) y verdes (salida) y marcan el inicio. Escriben las reglas con «si… si no». Después intercambian la cuadrícula con otra pareja: uno/a dice flechas y el otro/a mueve la ficha y aplica las reglas en voz alta en cada casilla.",
        diu: ["A cada casella, pregunteu: de quin color és?|En cada casilla, preguntad: ¿de qué color es?", "Si no és de cap color, què fa la fitxa?|Si no es de ningún color, ¿qué hace la ficha?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, la pregunta del semàfor, la predicció del cranc i el bloc del «si no». El pas «El semàfor de casa» és per fer a casa.|Hacen la misión, las tarjetas, la pregunta del semáforo, la predicción del cangrejo y el bloque del «si no». El paso «El semáforo de casa» es para hacer en casa.",
        diu: ["Quina part es fa ara, la de dalt o la del «si no»?|¿Qué parte se hace ahora, la de arriba o la del «si no»?"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa del semàfor humà. Després, els quatre reptes. Al laberint, explica que primer es prova amb «Comença» i les fletxes, i després «Comprova» prem les tecles sola a les dues proves.|Pausa activa del semáforo humano. Después, los cuatro retos. En el laberinto, explica que primero se prueba con «Empieza» y las flechas, y después «Comprueba» pulsa las teclas sola en las dos pruebas.",
        diu: ["Com s'afegeix el «si no»?|¿Cómo se añade el «si no»?", "Al laberint, què ha de passar si toques la paret?|En el laberinto, ¿qué tiene que pasar si tocas la pared?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes: el cranc, en Numi cau, les respostes canviades i el laberint.|«Pausa activa» y los retos: el cangrejo, Numi cae, las respuestas cambiadas y el laberinto.", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu avís de colors|Crea: mi aviso de colores", fase: 'crea',
        fa: "La Tuga passeja per la platja. Cadascú decideix què fa al mar i què fa a la sorra. Ensenyeu-ho al company/a.|Tuga pasea por la playa. Cada uno decide qué hace en el mar y qué hace en la arena. Enseñadlo al compañero/a.",
        diu: ["Què fa la Tuga al mar? I si no hi és?|¿Qué hace Tuga en el mar? ¿Y si no está?"],
        slides: ['s14'], app: "Pas «Crea»: El meu avís de colors.|Paso «Crea»: Mi aviso de colores.", org: "Individual|Individual" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet de sortida.|Resumen, preguntas finales y ticket de salida.",
        diu: ["Digues un «si… si no» de la vida diària.|Di un «si… si no» de la vida diaria."],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dos «si» (un per al sí i un altre igual per al no) i els dos fan el mateix.|Pone dos «si» (uno para el sí y otro igual para el no) y los dos hacen lo mismo.", "Pregunta: quina part es fa quan la resposta és no? Ensenya-li el botó «Afegeix «si no»».|Pregunta: ¿qué parte se hace cuando la respuesta es no? Enséñale el botón «Añade «si no»»."],
      ["En Numi s'enfonsa a l'herba perquè el bloc de caure és fora del «si no».|Numi se hunde en la hierba porque el bloque de caer está fuera del «si no».", "Que llegeixi en veu alta: «si toca el verd, camina; si no, cau». On és el bloc de caure?|Que lea en voz alta: «si toca el verde, camina; si no, cae». ¿Dónde está el bloque de caer?"],
      ["Al laberint, mou l'Estel amb les fletxes però no toca «Comprova».|En el laberinto, mueve a Estel con las flechas pero no toca «Comprueba».", "Recorda: amb «Comença» proves; amb «Comprova», l'app prem les tecles sola i mira si les regles funcionen.|Recuerda: con «Empieza» pruebas; con «Comprueba», la app pulsa las teclas sola y mira si las reglas funcionan."],
      ["Al laberint, posa «digues He sortit!» fora del «si toca el verd».|En el laberinto, pone «di ¡He salido!» fuera del «si toca el verde».", "Pregunta: quan ha de dir «He sortit»? Sempre, o només quan toca el verd?|Pregunta: ¿cuándo tiene que decir «He salido»? ¿Siempre, o solo cuando toca el verde?"],
      ["Confon el color de la condició (tria el groc en lloc del blau).|Confunde el color de la condición (elige el amarillo en lugar del azul).", "Que toqui el nom del color dins del bloc i triï el que correspon al mar. Quin color té el mar al fons?|Que toque el nombre del color dentro del bloque y elija el que corresponde al mar. ¿Qué color tiene el mar en el fondo?"]
    ],
    diff: {
      mes: "Al laberint, afegir una regla per al vermell (la trampa): si el toca, torna a l'inici i diu «Ai!». A la Tuga, afegir regles per a les fletxes perquè canviï de vestit quan neda.|En el laberinto, añadir una regla para el rojo (la trampa): si lo toca, vuelve al inicio y dice «¡Ay!». En Tuga, añadir reglas para las flechas para que cambie de disfraz cuando nada.",
      menys: "Fer primer els reptes del cranc i d'en Numi, que ja tenen la pregunta del color posada. Tenir la frase «si…, si no…» escrita en un paper al costat i assenyalar cada part.|Hacer primero los retos del cangrejo y de Numi, que ya tienen la pregunta del color puesta. Tener la frase «si…, si no…» escrita en un papel al lado y señalar cada parte."
    },
    aval: {
      ticket: ["Digues un «si… si no» de la vida diària.|Di un «si… si no» de la vida diaria.", "Quantes parts fa cada vegada un «si… si no»?|¿Cuántas partes hace cada vez un «si… si no»?"],
      rubric: [
        ["Condició de color|Condición de color", "Tria el color correcte i explica què avisa.|Elige el color correcto y explica qué avisa.", "Fa servir el color amb ajuda.|Usa el color con ayuda."],
        ["«Si… si no»|«Si… si no»", "Posa cada bloc a la part que toca i explica que només se'n fa una.|Pone cada bloque en la parte que toca y explica que solo se hace una.", "Afegeix el «si no», però confon les parts.|Añade el «si no», pero confunde las partes."],
        ["Regles del laberint|Reglas del laberinto", "Programa una regla per a cada color i la comprova a les dues proves.|Programa una regla para cada color y la comprueba en las dos pruebas.", "Programa una de les regles, però no l'altra.|Programa una de las reglas, pero no la otra."]
      ]
    },
    casa: "A casa, feu «El semàfor de casa» amb dos papers de colors: si és verd, camina; si no, atura't. Després inventeu un tercer color amb una regla nova.|En casa, haced «El semáforo de casa» con dos papeles de colores: si es verde, camina; si no, párate. Después inventad un tercer color con una regla nueva.",
    slides: [
      { id: 's1', k: 'portada', t: "Colors que avisen|Colores que avisan", x: "Avui el fons de l'escenari parlarà amb els personatges.|Hoy el fondo del escenario hablará con los personajes.",
        nota: "Presenta l'escena de la platja i en Pinces.|Presenta la escena de la playa y a Pinzas." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["On va el «si toca…»?|¿Dónde va el «si toca…»?", "Al laberint, què volia dir el blau?|En el laberinto, ¿qué quería decir el azul?"],
        nota: "Si no recorden el laberint, mostra'n el fons a la diapositiva 8.|Si no recuerdan el laberinto, muestra su fondo en la diapositiva 8." },
      { id: 's3', k: 'pregunta', t: "On hi ha colors que avisen?|¿Dónde hay colores que avisan?", x: "Pensa en el carrer, a l'escola i a casa.|Piensa en la calle, en la escuela y en casa.",
        nota: "Apunta les respostes a la pissarra: hi tornareu al final.|Apunta las respuestas en la pizarra: volveréis a ellas al final." },
      { id: 's4', k: 'anim', t: "El fons avisa|El fondo avisa", anim: 'g5color', x: "«Toca el color blau?» El cranc ho pregunta tota l'estona.|«¿Toca el color azul?» El cangrejo lo pregunta todo el rato.",
        nota: "Fes notar l'anell de punts: és com si el cranc notés el que trepitja.|Haz notar el anillo de puntos: es como si el cangrejo notara lo que pisa." },
      { id: 's5', k: 'media', t: "En Pinces no es mulla|Pinzas no se moja", x: "Puja, toca el blau i torna a la sorra.|Sube, toca el azul y vuelve a la arena.",
        media: { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'cranc', art: 'cranc', x: -60, y: -150 }] }, prog: '@cranc flag{ forever{ chy:2 if:color:blue{ think:"Aigua!|¡Agua!",1 sety:-150 } } }', time: 7 },
        nota: "Pregunta què passaria sense el «si»: el cranc pujaria fins al cel.|Pregunta qué pasaría sin el «si»: el cangrejo subiría hasta el cielo." },
      { id: 's6', k: 'anim', t: "Si… si no|Si… si no", anim: 'g5else', x: "Una pregunta, dues respostes: sempre en fa una.|Una pregunta, dos respuestas: siempre hace una.",
        nota: "Fes-los dir en veu alta la regla del paraigua amb el «si no».|Hazles decir en voz alta la regla del paraguas con el «si no»." },
      { id: 's7', k: 'media', t: "Caure o caminar|Caer o caminar", x: "Si toca el verd, camina; si no, cau.|Si toca el verde, camina; si no, cae.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'numi', art: 'numi', x: -170, y: 130, dir: 90, size: 80 }] }, prog: '@numi flag{ forever{ if:color:green{ move:3 } else{ chy:-5 } } }', time: 6 },
        nota: "Atura la demo quan en Numi és a l'aire i pregunta quina part es fa. Torna-la a engegar quan arriba a l'herba.|Para la demo cuando Numi está en el aire y pregunta qué parte se hace. Vuelve a ponerla en marcha cuando llega a la hierba." },
      { id: 's8', k: 'media', t: "Cada color, una regla|Cada color, una regla", x: "Blau: paret. Vermell: trampa. Verd: sortida.|Azul: pared. Rojo: trampa. Verde: salida.",
        media: { k: 'stage', w: { bg: 'laberint', sprites: [{ id: 'estel', art: 'estel', x: -175, y: 100, size: 60 }] }, prog: '@estel flag{ glide:1,-175,-80 glide:0.8,-75,-80 glide:1,-75,80 glide:0.8,25,80 glide:1,25,-80 glide:0.8,125,-80 } flag{ forever{ if:color:green{ say:"He sortit!|¡He salido!" stop:all } } }', time: 7 },
        nota: "Pregunta quina regla falta per a les parets i quina per a la trampa: les programaran al repte.|Pregunta qué regla falta para las paredes y cuál para la trampa: las programarán en el reto." },
      { id: 's9', k: 'activitat', t: "El camí dels colors|El camino de los colores", timer: 11, punts: ["Pinteu caselles blaves, vermelles i verdes.|Pintad casillas azules, rojas y verdes.", "Escriviu les regles amb «si… si no».|Escribid las reglas con «si… si no».", "Intercanvieu la graella amb una altra parella.|Intercambiad la cuadrícula con otra pareja.", "Un/a diu fletxes, l'altre/a mou i aplica les regles.|Uno/a dice flechas, el otro/a mueve y aplica las reglas."],
        nota: "Limita-ho a 3 o 4 caselles de cada color perquè hi hagi camí.|Limítalo a 3 o 4 casillas de cada color para que haya camino." },
      { id: 's10', k: 'activitat', t: "Exemple de regles|Ejemplo de reglas", punts: ["Si toca el blau, torna a l'inici.|Si toca el azul, vuelve al inicio.", "Si toca el verd, has sortit!|Si toca el verde, ¡has salido!", "Si no, continua.|Si no, continúa."],
        nota: "Deixa-la projectada com a model.|Déjala proyectada como modelo." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «Colors que avisen».|Abre «Colores que avisan».", "«El semàfor de casa»: toca «Ara no».|«El semáforo de casa»: toca «Ahora no».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Comprova que tothom arriba a l'«Investiga».|Comprueba que todos llegan a «Investiga»." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. En Pinces no es mulla|1. Pinzas no se moja", "2. En Numi cau del cel|2. Numi cae del cielo", "3. Les respostes canviades|3. Las respuestas cambiadas", "4. El laberint|4. El laberinto"],
        nota: "Al laberint, ensenya com es prova amb les fletxes i després «Comprova».|En el laberinto, enseña cómo se prueba con las flechas y después «Comprueba»." },
      { id: 's13', k: 'concepte', t: "Afegir el «si no»|Añadir el «si no»", punts: ["Toca el bloc «si».|Toca el bloque «si».", "Toca «Afegeix «si no»».|Toca «Añade «si no»».", "Posa els blocs del no a la part de baix.|Pon los bloques del no en la parte de abajo."],
        nota: "Fes-ho una vegada a la pantalla gran.|Hazlo una vez en la pantalla grande." },
      { id: 's14', k: 'activitat', t: "Crea: el meu avís de colors|Crea: mi aviso de colores", timer: 5, x: "Què fa la Tuga al mar? I a la sorra?|¿Qué hace Tuga en el mar? ¿Y en la arena?",
        nota: "Valora que cada part faci una cosa diferent.|Valora que cada parte haga una cosa diferente." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Toca el color» pregunta pel fons.|«Toca el color» pregunta por el fondo.", "«Si… si no» té dues parts.|«Si… si no» tiene dos partes.", "Sempre en fa una, mai les dues.|Siempre hace una, nunca las dos."],
        nota: "Torna a la llista de colors que avisen de la pissarra.|Vuelve a la lista de colores que avisan de la pizarra." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Un «si… si no» de la vida diària.|Un «si… si no» de la vida diaria.", "Quantes parts fa cada vegada?|¿Cuántas partes hace cada vez?"],
        nota: "Anota qui confon les dues parts.|Anota quién confunde las dos partes." }
    ],
    print: [
      { id: 'p1', t: "El camí dels colors|El camino de los colores", k: 'graella', w: 6, h: 6,
        intro: "Pinteu 3 o 4 caselles de cada color i marqueu l'inici amb una estrella. Escriviu les regles i doneu la graella a una altra parella.|Pintad 3 o 4 casillas de cada color y marcad el inicio con una estrella. Escribid las reglas y dad la cuadrícula a otra pareja.",
        legend: [['🟦', "Blau: aigua o paret|Azul: agua o pared"], ['🟥', 'Vermell: trampa|Rojo: trampa'], ['🟩', 'Verd: sortida|Verde: salida'], ['⭐', 'Inici|Inicio']],
        items: [{ q: "Regla 1: Si toca el blau…|Regla 1: Si toca el azul…" }, { q: "Regla 2: Si toca el vermell…|Regla 2: Si toca el rojo…" }, { q: "Regla 3: Si toca el verd…, si no…|Regla 3: Si toca el verde…, si no…" }] }
    ]
  },
  /* ---------- Sessió 3 · I, o, no ---------- */
  'g5-3': {
    obj: [
      "L'alumne/a explica que amb «i» calen les dues condicions i amb «o» n'hi ha prou amb una.|El alumno/a explica que con «y» hacen falta las dos condiciones y con «o» basta con una.",
      "L'alumne/a explica que «no» gira la resposta d'una condició.|El alumno/a explica que «no» gira la respuesta de una condición.",
      "L'alumne/a fa servir «Afegeix «i / o»» per ajuntar dues condicions en un sol «si».|El alumno/a usa «Añade «y / o»» para juntar dos condiciones en un solo «si».",
      "L'alumne/a troba l'error d'un programa que fa servir «i» quan calia «o».|El alumno/a encuentra el error de un programa que usa «y» cuando hacía falta «o»."
    ],
    comp: [
      "Competència digital (CD5): programar regles combinades|Competencia digital (CD5): programar reglas combinadas",
      "Pensament computacional: lògica (i, o, no)|Pensamiento computacional: lógica (y, o, no)",
      "Llengua: el significat precís de «i», «o» i «no» en una frase|Lengua: el significado preciso de «y», «o» y «no» en una frase",
      "Matemàtiques: classificar objectes segons dues propietats|Matemáticas: clasificar objetos según dos propiedades"
    ],
    vocab: [
      ["I|Y", "Ajunta dues condicions: el sí només arriba si totes dues són sí.|Junta dos condiciones: el sí solo llega si las dos son sí."],
      ["O|O", "Ajunta dues condicions: n'hi ha prou que una sigui sí.|Junta dos condiciones: basta con que una sea sí."],
      ["No|No", "Gira la resposta d'una condició.|Gira la respuesta de una condición."],
      ["Lògica|Lógica", "Les regles per pensar amb sí i no.|Las reglas para pensar con sí y no."],
      ["Porta lògica|Puerta lógica", "Una peça (en paper o en un circuit) que decideix sí o no a partir d'altres respostes.|Una pieza (en papel o en un circuito) que decide sí o no a partir de otras respuestas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «I, o, no»|Un ordenador por alumno/a con la sesión «Y, o, no»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "Targetes de les portes lògiques retallades (un paquet per grup de 3)|Tarjetas de las puertas lógicas recortadas (un paquete por grupo de 3)"
      ],
      imprimir: ["Targetes de portes lògiques|Tarjetas de puertas lógicas"],
      prep: [
        "Imprimir i retallar un paquet de targetes per grup.|Imprimir y recortar un paquete de tarjetas por grupo.",
        "Provar el repte del gat (màxim 4 blocs) i com es canvia «i» per «o» tocant la paraula del mig.|Probar el reto del gato (máximo 4 bloques) y cómo se cambia «y» por «o» tocando la palabra del medio.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: regles més llestes|Inicio: reglas más listas", fase: 'inici',
        fa: "Repassa el «si… si no». Llegeix dues regles de la fira, una amb «i» i una amb «o», i pregunta si volen dir el mateix.|Repasa el «si… si no». Lee dos reglas de la feria, una con «y» y una con «o», y pregunta si quieren decir lo mismo.",
        diu: ["«Entrada i barret» o «entrada o barret»: és el mateix?|«Entrada y sombrero» o «entrada o sombrero»: ¿es lo mismo?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "I, o, no|Y, o, no", fase: 'teoria',
        fa: "Mostra l'animació del regal i l'estrella: compara «i» i «o» fase a fase. Projecta les demos del regal i del gat. Explica el «no» amb l'animació i la demo d'en Bit que s'atura davant la roca.|Muestra la animación del regalo y la estrella: compara «y» y «o» fase a fase. Proyecta las demos del regalo y del gato. Explica el «no» con la animación y la demo de Bit que se para delante de la roca.",
        diu: ["Ara només hi ha en Bit: s'obre el regal? I s'encén l'estrella?|Ahora solo está Bit: ¿se abre el regalo? ¿Y se enciende la estrella?", "Què vol dir «si no toca la roca»?|¿Qué quiere decir «si no toca la roca»?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: portes lògiques humanes|Desconectado: puertas lógicas humanas", fase: 'desconnectat',
        fa: "Grups de 3: dos sensors i una porta. Cada sensor té una targeta de condició i respon ensenyant SÍ o NO. La porta té la targeta «I», «O» o «NO» i decideix si s'obre (braços amunt) o no. Roteu els papers i les targetes. Al final, cada grup inventa una regla de la classe amb «i» o «o».|Grupos de 3: dos sensores y una puerta. Cada sensor tiene una tarjeta de condición y responde enseñando SÍ o NO. La puerta tiene la tarjeta «Y», «O» o «NO» y decide si se abre (brazos arriba) o no. Rotad los papeles y las tarjetas. Al final, cada grupo inventa una regla de la clase con «y» u «o».",
        diu: ["Porta «I»: us cal que els dos sensors diguin sí.|Puerta «Y»: os hace falta que los dos sensores digan sí.", "Porta «NO»: feu el contrari del sensor!|Puerta «NO»: ¡haced lo contrario del sensor!"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, les preguntes de la fira, l'error de la papallona i la predicció d'en Bit. «Endevina la meva regla» és per a casa.|Hacen la misión, las tarjetas, las preguntas de la feria, el error de la mariposa y la predicción de Bit. «Adivina mi regla» es para casa.",
        diu: ["Per què la papallona travessa la roca?|¿Por qué la mariposa atraviesa la roca?"],
        slides: ['s11'], app: "De «La missió» fins a la predicció d'en Bit.|De «La misión» hasta la predicción de Bit.", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa de les portes lògiques. Ensenya a la pantalla com s'afegeix «i / o» i com es canvia la paraula del mig. Després, els tres reptes.|Pausa activa de las puertas lógicas. Enseña en la pantalla cómo se añade «y / o» y cómo se cambia la palabra del medio. Después, los tres retos.",
        diu: ["Amb només 4 blocs, com pots vigilar la roca i la vora?|Con solo 4 bloques, ¿cómo puedes vigilar la roca y el borde?", "A les proves 2 i 3 del regal, per què no s'ha d'obrir?|En las pruebas 2 y 3 del regalo, ¿por qué no se tiene que abrir?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes del gat, el regal i en Bit.|«Pausa activa» y los retos del gato, el regalo y Bit.", org: "Individual|Individual" },
      { min: 5, t: "Crea: la regla del tresor|Crea: la regla del tesoro", fase: 'crea',
        fa: "Cada alumne/a inventa una regla amb «i» o «o» per als tresors del parc. El company/a ha d'endevinar la regla mirant què passa.|Cada alumno/a inventa una regla con «y» u «o» para los tesoros del parque. El compañero/a tiene que adivinar la regla mirando qué pasa.",
        diu: ["La teva regla és amb «i» o amb «o»?|¿Tu regla es con «y» o con «o»?"],
        slides: ['s14'], app: "Pas «Crea»: La regla del tresor.|Paso «Crea»: La regla del tesoro.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet.|Resumen, preguntas finales y ticket.",
        diu: ["Digues una regla amb «o».|Di una regla con «o»."],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «i» quan calia «o» (el gat només gira si toca la roca i la vora alhora).|Usa «y» cuando hacía falta «o» (el gato solo gira si toca la roca y el borde a la vez).", "Pregunta: pot tocar la roca i la vora al mateix temps? Llavors, quina paraula cal?|Pregunta: ¿puede tocar la roca y el borde al mismo tiempo? Entonces, ¿qué palabra hace falta?"],
      ["No sap canviar la segona condició (es queda «la vora»).|No sabe cambiar la segunda condición (se queda «el borde»).", "Recorda que cada paraula en negreta es pot tocar: toca «la vora» i tria en Bit.|Recuerda que cada palabra en negrita se puede tocar: toca «el borde» y elige a Bit."],
      ["Al repte del gat fa dos «si» i supera el màxim de blocs.|En el reto del gato hace dos «si» y supera el máximo de bloques.", "Està bé pensar-ho així! Ara, com podries posar les dues preguntes dins d'un sol «si»?|¡Está bien pensarlo así! Ahora, ¿cómo podrías poner las dos preguntas dentro de un solo «si»?"],
      ["Creu que «no toca la roca» vol dir que en Bit no es mourà.|Cree que «no toca la roca» quiere decir que Bit no se moverá.", "Llegiu-ho junts com una frase: «Si no toques la roca, camina.» Al principi, la toca? Llavors camina.|Leedlo juntos como una frase: «Si no tocas la roca, camina.» Al principio, ¿la toca? Entonces camina."]
    ],
    diff: {
      mes: "Al repte del regal, afegir una tercera condició (que també hi hagi l'estrella) i explicar com quedaria la regla. Inventar una regla amb «no» per al tresor.|En el reto del regalo, añadir una tercera condición (que también esté la estrella) y explicar cómo quedaría la regla. Inventar una regla con «no» para el tesoro.",
      menys: "Fer primer les portes lògiques amb les targetes al costat de l'ordinador. Al repte del gat, començar amb dos «si» separats i després ajuntar-los.|Hacer primero las puertas lógicas con las tarjetas al lado del ordenador. En el reto del gato, empezar con dos «si» separados y después juntarlos."
    },
    aval: {
      ticket: ["Digues una regla amb «i» i una amb «o».|Di una regla con «y» y una con «o».", "Què fa el «no»?|¿Qué hace el «no»?"],
      rubric: [
        ["«I» i «o»|«Y» y «o»", "Tria bé entre «i» i «o» i ho justifica.|Elige bien entre «y» y «o» y lo justifica.", "Les confon de vegades.|Las confunde a veces."],
        ["«No»|«No»", "Prediu correctament què fa un programa amb «no».|Predice correctamente qué hace un programa con «no».", "Necessita llegir la frase en veu alta per entendre-ho.|Necesita leer la frase en voz alta para entenderlo."],
        ["Programar condicions dobles|Programar condiciones dobles", "Afegeix «i / o» i canvia les dues condicions sense ajuda.|Añade «y / o» y cambia las dos condiciones sin ayuda.", "Ho fa amb ajuda.|Lo hace con ayuda."]
      ]
    },
    casa: "A casa, feu «Endevina la meva regla» amb objectes: una persona pensa una regla amb «i», «o» o «no» i l'altra l'endevina ensenyant objectes.|En casa, haced «Adivina mi regla» con objetos: una persona piensa una regla con «y», «o» o «no» y la otra la adivina enseñando objetos.",
    slides: [
      { id: 's1', k: 'portada', t: "I, o, no|Y, o, no", x: "Tres paraules petites que canvien les regles.|Tres palabras pequeñas que cambian las reglas.",
        nota: "Escriu les tres paraules grosses a la pissarra.|Escribe las tres palabras grandes en la pizarra." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«Si… si no»: quantes parts fa?|«Si… si no»: ¿cuántas partes hace?", "Quina condició fa servir el cranc per al mar?|¿Qué condición usa el cangrejo para el mar?"],
        nota: "Respostes ràpides.|Respuestas rápidas." },
      { id: 's3', k: 'pregunta', t: "És el mateix?|¿Es lo mismo?", punts: ["Pots entrar si portes entrada i barret.|Puedes entrar si llevas entrada y sombrero.", "Pots entrar si portes entrada o barret.|Puedes entrar si llevas entrada o sombrero."],
        nota: "Fes que alguns alumnes facin de visitants amb entrada o barret imaginaris.|Haz que algunos alumnos hagan de visitantes con entrada o sombrero imaginarios." },
      { id: 's4', k: 'anim', t: "«I» i «o»|«Y» y «o»", anim: 'g5andor', x: "Amb «i» calen els dos; amb «o», n'hi ha prou amb un.|Con «y» hacen falta los dos; con «o», basta con uno.",
        nota: "Atura't a cada fase: hi ha en Numi? Hi ha en Bit? S'obre? S'encén?|Detente en cada fase: ¿está Numi? ¿Está Bit? ¿Se abre? ¿Se enciende?" },
      { id: 's5', k: 'media', t: "El regal dels dos amics|El regalo de los dos amigos", x: "Quan s'obre el regal?|¿Cuándo se abre el regalo?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'regal', art: 'regal', x: 0, y: -60 }, { id: 'numi', art: 'numi', x: -190, y: -60, size: 80 }, { id: 'bit', art: 'bit', x: 190, y: -60, size: 80, dir: -90 }] }, prog: '@numi flag{ glide:1.5,-32,-60 } @bit flag{ wait:1 glide:1.5,32,-60 } @regal flag{ forever{ if:touch:numi&&touch:bit{ sound:victoria hide } } }', time: 4 },
        nota: "Fes notar que quan arriba en Numi sol, no passa res.|Haz notar que cuando llega Numi solo, no pasa nada." },
      { id: 's6', k: 'media', t: "El gat: la roca o la vora|El gato: la roca o el borde", x: "Un sol «si» per a dues coses.|Un solo «si» para dos cosas.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -150, y: -110, dir: 90 }, { id: 'roca', art: 'roca', x: 90, y: -110 }] }, prog: '@gat flag{ forever{ move:5 if:touch:roca||touch:edge{ turn:180 } } }', time: 7 },
        nota: "Pregunta què passaria si hi digués «i».|Pregunta qué pasaría si dijera «y»." },
      { id: 's7', k: 'anim', t: "«No» gira la resposta|«No» gira la respuesta", anim: 'g5not', x: "El sí es torna no i el no, sí.|El sí se vuelve no y el no, sí.",
        nota: "Fes el gest de girar una targeta SÍ/NO.|Haz el gesto de girar una tarjeta SÍ/NO." },
      { id: 's8', k: 'media', t: "En Bit para a temps|Bit para a tiempo", x: "Si no toca la roca, camina; si no, ho diu.|Si no toca la roca, camina; si no, lo dice.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'bit', art: 'bit', x: -180, y: -100, size: 90 }, { id: 'roca', art: 'roca', x: 80, y: -110 }] }, prog: '@bit flag{ forever{ if:!touch:roca{ move:3 } else{ say:"Una roca!|¡Una roca!" } } }', time: 6 },
        nota: "Explica que aquest bloc ja ve fet a l'app: el «no» no es pot posar des de la paleta.|Explica que este bloque ya viene hecho en la app: el «no» no se puede poner desde la paleta." },
      { id: 's9', k: 'activitat', t: "Portes lògiques humanes|Puertas lógicas humanas", timer: 11, punts: ["Dos sensors: responeu SÍ o NO.|Dos sensores: responded SÍ o NO.", "La porta mira la seva targeta: I, O o NO.|La puerta mira su tarjeta: Y, O o NO.", "S'obre? Braços amunt!|¿Se abre? ¡Brazos arriba!", "Roteu els papers.|Rotad los papeles."],
        nota: "Comença amb la porta «I», després «O» i al final «NO» (amb un sol sensor).|Empieza con la puerta «Y», después «O» y al final «NO» (con un solo sensor)." },
      { id: 's10', k: 'activitat', t: "Les tres portes|Las tres puertas", punts: ["I: s'obre si els dos diuen sí.|Y: se abre si los dos dicen sí.", "O: s'obre si algun diu sí.|O: se abre si alguno dice sí.", "NO: fa el contrari del sensor.|NO: hace lo contrario del sensor."],
        nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «I, o, no».|Abre «Y, o, no».", "«Endevina la meva regla»: toca «Ara no».|«Adivina mi regla»: toca «Ahora no».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja per l'error de la papallona: és el que més costa.|Pasea por el error de la mariposa: es el que más cuesta." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. El gat: roca o vora (4 blocs)|1. El gato: roca o borde (4 bloques)", "2. El regal: Numi i Bit|2. El regalo: Numi y Bit", "3. En Bit: si no toca la roca|3. Bit: si no toca la roca"],
        nota: "Ensenya una vegada el botó «Afegeix «i / o»».|Enseña una vez el botón «Añade «y / o»»." },
      { id: 's13', k: 'concepte', t: "Com s'afegeix «i / o»|Cómo se añade «y / o»", punts: ["Toca el bloc «si».|Toca el bloque «si».", "Toca «Afegeix «i / o»».|Toca «Añade «y / o»».", "Toca la paraula del mig per triar «i» o «o».|Toca la palabra del medio para elegir «y» u «o».", "Toca cada condició per canviar-la.|Toca cada condición para cambiarla."],
        nota: "Fes-ho a poc a poc a la pantalla gran.|Hazlo despacio en la pantalla grande." },
      { id: 's14', k: 'activitat', t: "Crea: la regla del tresor|Crea: la regla del tesoro", timer: 5, x: "Inventa una regla amb «i» o «o». El company/a l'endevina.|Inventa una regla con «y» u «o». El compañero/a la adivina.",
        nota: "Celebra les regles originals.|Celebra las reglas originales." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«I»: calen les dues.|«Y»: hacen falta las dos.", "«O»: n'hi ha prou amb una.|«O»: basta con una.", "«No»: gira la resposta.|«No»: gira la respuesta."],
        nota: "Torna a les regles de la fira del principi.|Vuelve a las reglas de la feria del principio." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una regla amb «i» i una amb «o».|Una regla con «y» y una con «o».", "Què fa el «no»?|¿Qué hace el «no»?"],
        nota: "Una pregunta per alumne/a.|Una pregunta por alumno/a." }
    ],
    print: [
      { id: 'p1', t: "Targetes de portes lògiques|Tarjetas de puertas lógicas", k: 'targetes',
        intro: "Un paquet per grup de 3. Els sensors reben una condició i les targetes SÍ i NO; la porta rep una targeta de porta.|Un paquete por grupo de 3. Los sensores reciben una condición y las tarjetas SÍ y NO; la puerta recibe una tarjeta de puerta.",
        items: [
          { t: "SÍ ✅|SÍ ✅", n: 2 }, { t: "NO ❌|NO ❌", n: 2 },
          { t: "Porta I 🚪|Puerta Y 🚪", n: 1 }, { t: "Porta O 🚪|Puerta O 🚪", n: 1 }, { t: "Porta NO 🔄|Puerta NO 🔄", n: 1 },
          { t: "Porto ulleres 👓|Llevo gafas 👓", n: 1 }, { t: "M'agrada el plàtan 🍌|Me gusta el plátano 🍌", n: 1 },
          { t: "Tinc els cabells llargs 💇|Tengo el pelo largo 💇", n: 1 }, { t: "He vingut caminant 🚶|He venido andando 🚶", n: 1 }
        ] }
    ]
  },
  /* ---------- Sessió 4 · Projecte: atrapa la fruita ---------- */
  'g5-4': {
    obj: [
      "L'alumne/a planifica un videojoc en paper: personatges, moviments i regles.|El alumno/a planifica un videojuego en papel: personajes, movimientos y reglas.",
      "L'alumne/a escriu cada regla del videojoc com un «si» i la programa al personatge que toca.|El alumno/a escribe cada regla del videojuego como un «si» y la programa en el personaje que corresponde.",
      "L'alumne/a construeix el videojoc a trossos i prova cada tros abans de continuar.|El alumno/a construye el videojuego a trozos y prueba cada trozo antes de seguir.",
      "L'alumne/a dona i rep comentaris amables per millorar el videojoc.|El alumno/a da y recibe comentarios amables para mejorar el videojuego."
    ],
    comp: [
      "Competència digital (CD5): dissenyar i programar un videojoc propi|Competencia digital (CD5): diseñar y programar un videojuego propio",
      "Pensament computacional: descomposició, condicions i depuració|Pensamiento computacional: descomposición, condiciones y depuración",
      "Competència personal i social: provar, rebre comentaris i millorar|Competencia personal y social: probar, recibir comentarios y mejorar",
      "Llengua: explicar les regles d'un videojoc amb claredat|Lengua: explicar las reglas de un videojuego con claridad"
    ],
    vocab: [
      ["Pla|Plan", "El dibuix i la llista de regles abans de programar.|El dibujo y la lista de reglas antes de programar."],
      ["Regla|Regla", "El que passa en un videojoc quan es compleix una condició.|Lo que pasa en un videojuego cuando se cumple una condición."],
      ["Tester|Tester", "La persona que prova un videojoc per trobar-hi errors i idees.|La persona que prueba un videojuego para encontrarle errores e ideas."],
      ["Depurar|Depurar", "Buscar i arreglar els errors d'un programa.|Buscar y arreglar los errores de un programa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «Projecte: atrapa la fruita»|Un ordenador por alumno/a con la sesión «Proyecto: atrapa la fruta»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "La fitxa «El pla del videojoc» (una per alumne/a) i llapis|La ficha «El plan del videojuego» (una por alumno/a) y lápices"
      ],
      imprimir: ["El pla del videojoc|El plan del videojuego"],
      prep: [
        "Imprimir una fitxa per alumne/a.|Imprimir una ficha por alumno/a.",
        "Provar el videojoc acabat (pas «Prova») amb les fletxes per ensenyar-lo al principi.|Probar el videojuego terminado (paso «Prueba») con las flechas para enseñarlo al principio.",
        "Fer el projecte final abans per veure com queda amb dues fruites.|Hacer el proyecto final antes para ver cómo queda con dos frutas.",
        "Deixar els ordinadors amb la sessió iniciada.|Dejar los ordenadores con la sesión iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: el gran dia|Inicio: el gran día", fase: 'inici',
        fa: "Repassa «i», «o» i «no». Projecta el videojoc acabat i demana a un voluntari/a que el provi amb les fletxes. Pregunta quines regles hi veuen.|Repasa «y», «o» y «no». Proyecta el videojuego terminado y pide a un voluntario/a que lo pruebe con las flechas. Pregunta qué reglas ven.",
        diu: ["Quines regles té aquest videojoc? Digueu-les amb «si».|¿Qué reglas tiene este videojuego? Decidlas con «si»."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla i els guions|El plan y los guiones", fase: 'teoria',
        fa: "Mostra l'animació del pla: dibuix i regles. Explica que cada personatge té els seus guions i que tots funcionen alhora. Mostra la regla que ho acaba tot (la roca). Insisteix a construir i provar a trossos.|Muestra la animación del plan: dibujo y reglas. Explica que cada personaje tiene sus guiones y que todos funcionan a la vez. Muestra la regla que lo acaba todo (la roca). Insiste en construir y probar a trozos.",
        diu: ["Qui té la regla «si toca la cistella»: la cistella o la poma?|¿Quién tiene la regla «si toca la cesta»: la cesta o la manzana?", "Per què és millor provar cada tros?|¿Por qué es mejor probar cada trozo?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Desconnectat: el pla en paper|Desconectado: el plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa l'escenari, escriu com es mou la cistella i les regles de cada fruita, i hi afegeix una idea pròpia (una fruita nova, un so, una frase). En parelles, es llegeixen el pla i comproven que cada regla comença amb «si».|Cada alumno/a rellena la ficha del plan: dibuja el escenario, escribe cómo se mueve la cesta y las reglas de cada fruta, y añade una idea propia (una fruta nueva, un sonido, una frase). Por parejas, se leen el plan y comprueban que cada regla empieza con «si».",
        diu: ["Cada regla: si… llavors…|Cada regla: si… entonces…", "Quina millora teva hi afegiràs?|¿Qué mejora tuya añadirás?"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 8, t: "A l'ordinador: prova i investiga|En el ordenador: prueba e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, proven el videojoc acabat, ordenen el pla i troben l'error de la poma. «El tester de casa» és per a casa.|Hacen la misión, las tarjetas, prueban el videojuego terminado, ordenan el plan y encuentran el error de la manzana. «El tester de casa» es para casa.",
        diu: ["Per què la poma no torna a dalt?|¿Por qué la manzana no vuelve arriba?"],
        slides: ['s10'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 12, t: "Pausa i els tres trossos|Pausa y los tres trozos", fase: 'ordinador',
        fa: "Pausa activa de la cistella. Després, els tres trossos: la cistella amb les fletxes, la poma i la roca. Cada tros es comprova abans de passar al següent.|Pausa activa de la cesta. Después, los tres trozos: la cesta con las flechas, la manzana y la roca. Cada trozo se comprueba antes de pasar al siguiente.",
        diu: ["La cistella s'escapa per la vora? Quina regla falta?|¿La cesta se escapa por el borde? ¿Qué regla falta?"],
        slides: ['s11'], app: "«Pausa activa» i els trossos 1, 2 i 3.|«Pausa activa» y los trozos 1, 2 y 3.", org: "Individual|Individual" },
      { min: 13, t: "Crea i prova amb un company/a|Crea y prueba con un compañero/a", fase: 'crea',
        fa: "Cada alumne/a completa el videojoc sencer seguint el seu pla. Quan funcioni, un company/a fa de tester: el prova sense ajuda i diu una cosa que li agrada i una idea per millorar. L'autor/a en tria una i la programa. Es desa al portafoli.|Cada alumno/a completa el videojuego entero siguiendo su plan. Cuando funcione, un compañero/a hace de tester: lo prueba sin ayuda y dice una cosa que le gusta y una idea para mejorar. El autor/a elige una y la programa. Se guarda en el portafolio.",
        diu: ["Tester: primer una cosa bona, després una idea.|Tester: primero una cosa buena, después una idea.", "Autor/a: escolta i tria què millores.|Autor/a: escucha y elige qué mejoras."],
        slides: ['s12', 's13'], app: "Pas «Crea»: Atrapa la fruita (es desa als projectes).|Paso «Crea»: Atrapa la fruta (se guarda en los proyectos).", org: "Individual i en parelles|Individual y por parejas" },
      { min: 4, t: "Tancament i celebració|Cierre y celebración", fase: 'tancament',
        fa: "Dos o tres alumnes ensenyen el seu videojoc a la classe. Resum de la unitat, preguntes finals i tiquet.|Dos o tres alumnos enseñan su videojuego a la clase. Resumen de la unidad, preguntas finales y ticket.",
        diu: ["Quina regla del teu videojoc t'agrada més?|¿Qué regla de tu videojuego te gusta más?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa la regla «si toca la poma» a la cistella i espera que la poma torni a dalt.|Pone la regla «si toca la manzana» en la cesta y espera que la manzana vuelva arriba.", "Pregunta: qui ha de tornar a dalt? Doncs la regla va als guions de la poma.|Pregunta: ¿quién tiene que volver arriba? Pues la regla va en los guiones de la manzana."],
      ["La fruita torna a y = -150 (a baix) en lloc de y = 150.|La fruta vuelve a y = -150 (abajo) en lugar de y = 150.", "Recorda l'eix: la y gran és a dalt. On vols que torni la poma?|Recuerda el eje: la y grande está arriba. ¿Dónde quieres que vuelva la manzana?"],
      ["La cistella surt de l'escenari perquè no té la regla de la vora a les dues tecles.|La cesta sale del escenario porque no tiene la regla del borde en las dos teclas.", "Que provi primer la dreta i després l'esquerra. Per quin costat s'escapa?|Que pruebe primero la derecha y después la izquierda. ¿Por qué lado se escapa?"],
      ["Ho programa tot de cop i no sap on és l'error.|Lo programa todo de golpe y no sabe dónde está el error.", "Proposa-li treure (o deixar buit) un personatge i provar-ne només un. Funciona? Llavors afegeix el següent.|Proponle quitar (o dejar vacío) un personaje y probar solo uno. ¿Funciona? Entonces añade el siguiente."],
      ["Com a tester, només diu «està malament» o ho arregla ell/a.|Como tester, solo dice «está mal» o lo arregla él/ella.", "Recorda la regla del tester: una cosa bona, una idea, i les mans fora del ratolí.|Recuerda la regla del tester: una cosa buena, una idea, y las manos fuera del ratón."]
    ],
    diff: {
      mes: "Afegir la roca al videojoc final (si toca la cistella, atura-ho tot) i una tercera fruita més ràpida. Fer que la cistella canviï de mida quan atrapa una fruita.|Añadir la roca al videojuego final (si toca la cesta, páralo todo) y una tercera fruta más rápida. Hacer que la cesta cambie de tamaño cuando atrapa una fruta.",
      menys: "Seguir els trossos 1, 2 i 3 en ordre i, al projecte final, copiar les regles de la poma al plàtan. Tenir la fitxa del pla al costat de l'ordinador.|Seguir los trozos 1, 2 y 3 en orden y, en el proyecto final, copiar las reglas de la manzana al plátano. Tener la ficha del plan al lado del ordenador."
    },
    aval: {
      ticket: ["Digues una regla del teu videojoc amb «si».|Di una regla de tu videojuego con «si».", "Quina idea del teu tester has fet servir?|¿Qué idea de tu tester has usado?"],
      rubric: [
        ["Pla del videojoc|Plan del videojuego", "El pla té personatges, moviments i regles amb «si».|El plan tiene personajes, movimientos y reglas con «si».", "El pla té el dibuix, però les regles estan incompletes.|El plan tiene el dibujo, pero las reglas están incompletas."],
        ["Regles programades|Reglas programadas", "Les fruites cauen, tornen a dalt i reaccionen a la cistella.|Las frutas caen, vuelven arriba y reaccionan a la cesta.", "Hi ha una regla que falta o és al personatge equivocat.|Hay una regla que falta o está en el personaje equivocado."],
        ["Provar i millorar|Probar y mejorar", "Prova a trossos, escolta el tester i programa una millora.|Prueba a trozos, escucha al tester y programa una mejora.", "Prova al final i li costa triar una millora.|Prueba al final y le cuesta elegir una mejora."]
      ]
    },
    casa: "A casa, ensenyeu el videojoc a algú de la família: feu «El tester de casa», apunteu una millora i programeu-la el pròxim dia.|En casa, enseñad el videojuego a alguien de la familia: haced «El tester de casa», apuntad una mejora y programadla el próximo día.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: atrapa la fruita|Proyecto: atrapa la fruta", x: "Avui construïm el nostre videojoc per a la Festa de la Fruita.|Hoy construimos nuestro videojuego para la Fiesta de la Fruta.",
        nota: "Crea expectació: al final, cadascú en tindrà un de propi al portafoli.|Crea expectación: al final, cada uno tendrá uno propio en el portafolio." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«I»: calen les dues.|«Y»: hacen falta las dos.", "«O»: n'hi ha prou amb una.|«O»: basta con una.", "«No»: gira la resposta.|«No»: gira la respuesta."],
        nota: "Pregunta un exemple de cada.|Pide un ejemplo de cada una." },
      { id: 's3', k: 'media', t: "El videojoc acabat|El videojuego terminado", x: "Quines regles hi veieu?|¿Qué reglas veis?",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: -120, y: -130 }, { id: 'poma', art: 'poma', x: -120, y: 150 }, { id: 'platan', art: 'platan', x: 100, y: 150 }] }, prog: '@cistella flag{ forever{ glide:1.2,-120,-130 wait:0.4 glide:1.2,100,-130 wait:0.4 } } @poma flag{ forever{ chy:-4 if:touch:cistella{ sound:pop sety:150 } if:touch:edge{ sety:150 } } } @platan flag{ forever{ chy:-3 if:touch:cistella{ sound:moneda sety:150 } if:touch:edge{ sety:150 } } }', time: 8 },
        nota: "Apunta a la pissarra les regles que diguin, començant per «si».|Apunta en la pizarra las reglas que digan, empezando por «si»." },
      { id: 's4', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g5plan', x: "Dibuix i regles. Cada regla és un «si».|Dibujo y reglas. Cada regla es un «si».",
        nota: "Compara-ho amb fer una maqueta: primer el plànol.|Compáralo con hacer una maqueta: primero el plano." },
      { id: 's5', k: 'concepte', t: "Cada personatge, els seus guions|Cada personaje, sus guiones", punts: ["Cistella: es mou amb les fletxes.|Cesta: se mueve con las flechas.", "Poma: cau, i si toca la cistella o la vora…|Manzana: cae, y si toca la cesta o el borde…", "Plàtan: el mateix, amb la seva velocitat.|Plátano: lo mismo, con su velocidad."],
        nota: "Remarca que la regla de la fruita va als guions de la fruita.|Remarca que la regla de la fruta va en los guiones de la fruta." },
      { id: 's6', k: 'media', t: "Una regla que ho acaba tot|Una regla que lo acaba todo", x: "Si la roca toca la cistella, atura-ho tot.|Si la roca toca la cesta, páralo todo.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: 40, y: -130 }, { id: 'roca', art: 'roca', x: 40, y: 150, size: 80 }] }, prog: '@roca flag{ forever{ chy:-4 if:touch:cistella{ say:"Pam! S\'ha acabat!|¡Pam! ¡Se acabó!" stop:all } if:touch:edge{ sety:150 } } }', time: 5 },
        nota: "Pregunta quin bloc atura el programa.|Pregunta qué bloque para el programa." },
      { id: 's7', k: 'concepte', t: "Construir a trossos|Construir a trozos", punts: ["Programa un tros.|Programa un trozo.", "Prova'l.|Pruébalo.", "Arregla'l.|Arréglalo.", "Passa al següent.|Pasa al siguiente."],
        nota: "Ho fan així els equips que creen videojocs de veritat.|Lo hacen así los equipos que crean videojuegos de verdad." },
      { id: 's8', k: 'activitat', t: "El pla del videojoc|El plan del videojuego", timer: 10, punts: ["Dibuixa l'escenari.|Dibuja el escenario.", "Escriu com es mou la cistella.|Escribe cómo se mueve la cesta.", "Escriu les regles amb «si».|Escribe las reglas con «si».", "Afegeix una idea teva.|Añade una idea tuya."],
        nota: "Passeja i ajuda a escriure regles completes: si… llavors…|Pasea y ayuda a escribir reglas completas: si… entonces…" },
      { id: 's9', k: 'activitat', t: "Revisa el pla amb un company/a|Revisa el plan con un compañero/a", punts: ["Cada regla comença amb «si»?|¿Cada regla empieza con «si»?", "Saps a quin personatge va cada regla?|¿Sabes en qué personaje va cada regla?"],
        nota: "Dos minuts finals de l'activitat.|Dos minutos finales de la actividad." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 8, punts: ["Prova el videojoc acabat.|Prueba el videojuego terminado.", "Ordena el pla i troba l'error.|Ordena el plan y encuentra el error.", "«El tester de casa»: toca «Ara no».|«El tester de casa»: toca «Ahora no»."],
        nota: "No deixis que s'entretinguin massa al videojoc acabat: dos minuts.|No dejes que se entretengan demasiado en el videojuego terminado: dos minutos." },
      { id: 's11', k: 'repte', t: "Els tres trossos|Los tres trozos", timer: 12, punts: ["1. La cistella i les fletxes|1. La cesta y las flechas", "2. La poma|2. La manzana", "3. La roca|3. La roca"],
        nota: "Recorda: «Comença» per provar amb les fletxes, «Comprova» per comprovar-ho.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para comprobarlo." },
      { id: 's12', k: 'activitat', t: "Crea: el videojoc sencer|Crea: el videojuego entero", timer: 8, x: "Segueix el teu pla: regles de la poma, el plàtan i la teva millora.|Sigue tu plan: reglas de la manzana, el plátano y tu mejora.",
        nota: "Qui acabi aviat pot afegir la roca.|Quien termine pronto puede añadir la roca." },
      { id: 's13', k: 'activitat', t: "Fes de tester|Haz de tester", timer: 5, punts: ["Prova'l sense ajuda.|Pruébalo sin ayuda.", "Digues una cosa que t'agrada.|Di una cosa que te gusta.", "Digues una idea per millorar.|Di una idea para mejorar.", "Mans fora del ratolí!|¡Manos fuera del ratón!"],
        nota: "Modela-ho tu primer amb el videojoc d'un voluntari/a.|Modélalo tú primero con el videojuego de un voluntario/a." },
      { id: 's14', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Condicions: «si toca…», «toca el color».|Condiciones: «si toca…», «toca el color».", "«Si… si no», «i», «o», «no».|«Si… si no», «y», «o», «no».", "Un videojoc és un munt de regles amb «si».|Un videojuego es un montón de reglas con «si»."],
        nota: "Felicita el grup: ja tenen un videojoc fet per ells.|Felicita al grupo: ya tienen un videojuego hecho por ellos." },
      { id: 's15', k: 'pregunta', t: "Què milloraries la pròxima vegada?|¿Qué mejorarías la próxima vez?", x: "A la unitat 6 hi afegirem punts, vides i un compte enrere.|En la unidad 6 añadiremos puntos, vidas y una cuenta atrás.",
        nota: "Recull idees: moltes es podran fer amb variables a la unitat següent.|Recoge ideas: muchas se podrán hacer con variables en la unidad siguiente." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una regla del teu videojoc amb «si».|Una regla de tu videojuego con «si».", "Quina idea del tester has fet servir?|¿Qué idea del tester has usado?"],
        nota: "Anota qui no ha pogut acabar per donar-li temps la pròxima sessió.|Anota quién no ha podido terminar para darle tiempo la próxima sesión." }
    ],
    print: [
      { id: 'p1', t: "El pla del videojoc|El plan del videojuego", k: 'fitxa',
        intro: "Omple el pla abans de programar. Dibuixa l'escenari al revers del full.|Rellena el plan antes de programar. Dibuja el escenario en el reverso de la hoja.",
        items: [
          { q: "Com es mou la cistella? Quines tecles fa servir?|¿Cómo se mueve la cesta? ¿Qué teclas usa?", sol: "Amb les fletxes: dreta, canvia x en 20; esquerra, canvia x en -20. Si toca la vora, torna enrere.|Con las flechas: derecha, cambia x en 20; izquierda, cambia x en -20. Si toca el borde, vuelve atrás." },
          { q: "Què cau del cel i a quina velocitat?|¿Qué cae del cielo y a qué velocidad?", sol: "Per exemple, la poma (canvia y en -4) i el plàtan (canvia y en -5).|Por ejemplo, la manzana (cambia y en -4) y el plátano (cambia y en -5)." },
          { q: "Regla 1: Si la fruita toca la cistella…|Regla 1: Si la fruta toca la cesta…", sol: "…fa un so i torna a dalt (posa y a 150).|…hace un sonido y vuelve arriba (pon y a 150)." },
          { q: "Regla 2: Si la fruita toca la vora de baix…|Regla 2: Si la fruta toca el borde de abajo…", sol: "…torna a dalt (posa y a 150).|…vuelve arriba (pon y a 150)." },
          { q: "Regla 3 (opcional): Si la roca toca la cistella…|Regla 3 (opcional): Si la roca toca la cesta…", sol: "…diu «Pam!» i atura-ho tot.|…dice «¡Pam!» y lo para todo." },
          { q: "La meva millora: què hi afegiré?|Mi mejora: ¿qué añadiré?", sol: "Resposta oberta: una fruita nova, un so, una frase, un canvi de mida…|Respuesta abierta: una fruta nueva, un sonido, una frase, un cambio de tamaño…" }
        ] }
    ]
  }
});
