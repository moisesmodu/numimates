/* Tech Digital · unitat 1 «Segur a la xarxa» · guia del professor (d1-1 … d1-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demostracions de les
   diapositives (k: 'media') fan servir els artefactes inventats de tech-dig.js (xats, perfils i publicacions de mentida).
   Seguretat i benestar: cap contrasenya real a classe, cap dada real a les activitats, mai culpabilitzar i sempre
   el missatge de demanar ajuda a un adult de confiança. Si un infant explica una situació real que el preocupa,
   s'escolta amb calma, se li agraeix i es segueix el protocol del centre. */
Object.assign(TGUIDE, (() => {
  const chat = (from, av, html) => ({ k: 'dig', kind: 'chat', from, av, html });
  return {
  /* ---------- Sessió 1 · Contrasenyes fortes ---------- */
  'd1-1': {
    obj: [
      "L'alumne/a explica què fa forta una contrasenya (llargada, varietat i cap dada personal) i classifica exemples en forts i febles.|El alumno/a explica qué hace fuerte una contraseña (longitud, variedad y ningún dato personal) y clasifica ejemplos en fuertes y débiles.",
      "L'alumne/a crea una frase de contrasenya de prova amb quatre paraules sense relació i n'explica el truc.|El alumno/a crea una frase de contraseña de prueba con cuatro palabras sin relación y explica el truco.",
      "L'alumne/a diu que no, amb amabilitat, quan algú li demana la contrasenya, i sap què fer si algú la sap.|El alumno/a dice que no, con amabilidad, cuando alguien le pide la contraseña, y sabe qué hacer si alguien la sabe.",
      "L'alumne/a explica amb paraules senzilles què és la verificació en dos passos i per què el codi no es dona mai.|El alumno/a explica con palabras sencillas qué es la verificación en dos pasos y por qué el código no se da nunca."
    ],
    comp: [
      "Competència digital (CD4 · seguretat): protegir els comptes amb contrasenyes segures i hàbits segurs|Competencia digital (CD4 · seguridad): proteger las cuentas con contraseñas seguras y hábitos seguros",
      "Competència personal, social i d'aprendre a aprendre: prendre decisions per cuidar-se i saber demanar ajuda|Competencia personal, social y de aprender a aprender: tomar decisiones para cuidarse y saber pedir ayuda",
      "Matemàtiques (sentit numèric): cada caràcter de més multiplica les combinacions possibles|Matemáticas (sentido numérico): cada carácter de más multiplica las combinaciones posibles",
      "Comunicació lingüística: dir que no de manera clara i amable|Comunicación lingüística: decir que no de forma clara y amable"
    ],
    vocab: [
      ['Contrasenya|Contraseña', "Una clau secreta, feta de lletres, números o símbols, que obre un compte.|Una llave secreta, hecha de letras, números o símbolos, que abre una cuenta."],
      ['Frase de contrasenya|Frase de contraseña', "Una contrasenya feta de diverses paraules sense relació: llarga, forta i fàcil de recordar.|Una contraseña hecha de varias palabras sin relación: larga, fuerte y fácil de recordar."],
      ['Dada personal|Dato personal', "Informació que diu qui ets o on trobar-te: el nom, l'adreça, la data de naixement…|Información que dice quién eres o dónde encontrarte: el nombre, la dirección, la fecha de nacimiento…"],
      ['Verificació en dos passos|Verificación en dos pasos', "Un segon pany: a més de la contrasenya, cal un codi que arriba a un mòbil o a una app.|Un segundo candado: además de la contraseña, hace falta un código que llega a un móvil o a una app."],
      ['Compte|Cuenta', "El teu espai en una app o una web, amb el teu usuari i la teva contrasenya.|Tu espacio en una app o una web, con tu usuario y tu contraseña."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Contrasenyes fortes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Contraseñas fuertes»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una bossa opaca per grup (per treure-hi les targetes de paraules), fulls i retoladors|Una bolsa opaca por grupo (para sacar las tarjetas de palabras), folios y rotuladores",
        "Post-its per al mural de les frases|Pósits para el mural de las frases"
      ],
      imprimir: ['Targetes de paraules per a frases de contrasenya|Tarjetas de palabras para frases de contraseña', 'Endevina la contrasenya del personatge|Adivina la contraseña del personaje'],
      prep: [
        "Imprimir i retallar un paquet de targetes de paraules per grup de 4 i posar-lo dins una bossa.|Imprimir y recortar un paquete de tarjetas de palabras por grupo de 4 y meterlo en una bolsa.",
        "Imprimir una fitxa de personatges per grup (les solucions són al solucionari).|Imprimir una ficha de personajes por grupo (las soluciones están en el solucionario).",
        "Provar el laboratori de contrasenyes de l'app amb exemples inventats per saber què respon.|Probar el laboratorio de contraseñas de la app con ejemplos inventados para saber qué responde.",
        "Pensar com repetireu la norma de la classe: cap contrasenya de veritat, ni escrita ni dita en veu alta.|Pensar cómo repetiréis la norma de la clase: ninguna contraseña de verdad, ni escrita ni dicha en voz alta."
      ]
    },
    plan: [
      { min: 5, t: 'Benvinguda: la clau de casa|Bienvenida: la llave de casa', fase: 'inici',
        fa: "Presenta el curs Tech Digital: aprendrem a fer servir internet amb seguretat i sense por. Pregunta on amagarien la clau de casa i on miraria primer algú que la busqués; enllaça-ho amb les contrasenyes fàcils. Explica la norma de la classe des del primer minut: totes les contrasenyes d'avui són inventades.|Presenta el curso Tech Digital: aprenderemos a usar internet con seguridad y sin miedo. Pregunta dónde esconderían la llave de casa y dónde miraría primero alguien que la buscara; enlázalo con las contraseñas fáciles. Explica la norma de la clase desde el primer minuto: todas las contraseñas de hoy son inventadas.",
        diu: ["On amagaríeu la clau de casa? I on miraria primer algú que la volgués trobar?|¿Dónde esconderíais la llave de casa? ¿Y dónde miraría primero alguien que la quisiera encontrar?",
          "A internet, cada compte té una porta, i la contrasenya n'és la clau.|En internet, cada cuenta tiene una puerta, y la contraseña es su llave.",
          "Norma de la classe: mai no direm ni escriurem cap contrasenya de veritat.|Norma de la clase: nunca diremos ni escribiremos ninguna contraseña de verdad."],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Què fa forta una contrasenya?|¿Qué hace fuerte una contraseña?', fase: 'teoria',
        fa: "Explica les tres claus (llarga, variada i sense dades teves) amb l'animació. Construïu entre tots una frase de contrasenya absurda a la pissarra i després esborreu-la: ara ja la sap tota la classe! Feu la votació del polze de «Forta o feble?». Mostra el xat d'en Pau i pregunta com dir que no amb amabilitat. Acaba amb la verificació en dos passos (dos panys) i el missatge que demana el codi.|Explica las tres claves (larga, variada y sin datos tuyos) con la animación. Construid entre todos una frase de contraseña absurda en la pizarra y después borradla: ¡ahora ya la sabe toda la clase! Haced la votación del pulgar de «¿Fuerte o débil?». Muestra el chat de Pau y pregunta cómo decir que no con amabilidad. Termina con la verificación en dos pasos (dos candados) y el mensaje que pide el código.",
        diu: ["Per què «Gat2015» encara és feble? Qui podria saber aquestes dues coses?|¿Por qué «Gato2015» todavía es débil? ¿Quién podría saber estas dos cosas?",
          "Quatre paraules que no tinguin res a veure: quina escena absurda us imagineu?|Cuatro palabras que no tengan nada que ver: ¿qué escena absurda os imagináis?",
          "Com li diríeu que no a un amic sense que s'enfadi?|¿Cómo le diríais que no a un amigo sin que se enfade?",
          "El codi del segon pany tampoc no es dona mai, encara que diguin que són de l'empresa.|El código del segundo candado tampoco se da nunca, aunque digan que son de la empresa."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Endevina la contrasenya i la fàbrica de frases|Adivina la contraseña y la fábrica de frases', fase: 'desconnectat',
        fa: "Grups de 4. Primera part (6 min): cada grup llegeix la fitxa dels personatges inventats (en Max, la Iris, en Teo i la Wen) i endevina la contrasenya feble de cadascun. Ho aconseguiran de seguida: és la prova que les dades personals fan les contrasenyes fàcils. Segona part (6 min): cada grup treu quatre targetes de paraules de la bossa, inventa una escena absurda que les uneixi i la dibuixa al full. Pengeu els dibuixos: el mural de les frases.|Grupos de 4. Primera parte (6 min): cada grupo lee la ficha de los personajes inventados (Max, Iris, Teo y Wen) y adivina la contraseña débil de cada uno. Lo conseguirán enseguida: es la prueba de que los datos personales hacen las contraseñas fáciles. Segunda parte (6 min): cada grupo saca cuatro tarjetas de palabras de la bolsa, inventa una escena absurda que las una y la dibuja en el folio. Colgad los dibujos: el mural de las frases.",
        diu: ["Com l'heu endevinada tan de pressa? Quina dada us ha ajudat?|¿Cómo la habéis adivinado tan deprisa? ¿Qué dato os ha ayudado?",
          "Ara traieu quatre paraules: quina escena boja us en surt?|Ahora sacad cuatro palabras: ¿qué escena loca os sale?",
          "Recordeu: aquestes frases són per practicar. La de veritat, la inventareu a casa amb la família.|Recordad: estas frases son para practicar. La de verdad, la inventaréis en casa con la familia."],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 4|Grupos de 4' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme. Passeja i fixa't en qui escriu al laboratori coses que semblen reals: recorda-li en veu baixa que han de ser inventades, sense fer-ne un drama. Al xat d'en Pau, anima'ls a provar més d'un camí: és un simulador, i equivocar-s'hi també ensenya.|Cada alumno/a avanza a su ritmo. Pasea y fíjate en quién escribe en el laboratorio cosas que parecen reales: recuérdale en voz baja que tienen que ser inventadas, sin hacer un drama. En el chat de Pau, anímalos a probar más de un camino: es un simulador, y equivocarse en él también enseña.",
        diu: ["Què et diu el laboratori quan hi poses «rufus»? Per què?|¿Qué te dice el laboratorio cuando pones «rufus»? ¿Por qué?",
          "Al xat d'en Pau, què passa si tries l'altra resposta? Prova-ho!|En el chat de Pau, ¿qué pasa si eliges la otra respuesta? ¡Pruébalo!",
          "Llegeix les explicacions del classificador: per què és feble cada una?|Lee las explicaciones del clasificador: ¿por qué es débil cada una?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: la pregunta inicial, les dues històries, les cinc targetes de «Descobreix», «Forta o feble?», el laboratori amb «rufus», la frase més difícil d'endevinar, la frase de contrasenya i el xat d'en Pau.|De «Recuerda» hasta «Investiga»: la pregunta inicial, las dos historias, las cinco tarjetas de «Descubre», «¿Fuerte o débil?», el laboratorio con «rufus», la frase más difícil de adivinar, la frase de contraseña y el chat de Pau.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: casos de contrasenyes|Retos: casos de contraseñas', fase: 'ordinador',
        fa: "Feu la pausa activa tots junts, drets: la frase de contrasenya amb el cos. Després, que resolguin els tres casos i el classificador d'hàbits. Qui acabi abans, que expliqui a un company/a per què la verificació en dos passos protegeix el compte.|Haced la pausa activa todos juntos, de pie: la frase de contraseña con el cuerpo. Después, que resuelvan los tres casos y el clasificador de hábitos. Quien termine antes, que explique a un compañero/a por qué la verificación en dos pasos protege la cuenta.",
        diu: ["Elefant, salta, paraigua, gelat: més de pressa!|Elefante, salta, paraguas, helado: ¡más deprisa!",
          "Si dubtes, pensa: què faria un adult de confiança?|Si dudas, piensa: ¿qué haría un adulto de confianza?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: la tieta de l'Èric, la Jana i els dos panys, el missatge que demana el codi i «Hàbit segur o arriscat?».|«Pausa activa» y «Retos»: la tía de Èric, Jana y los dos candados, el mensaje que pide el código y «¿Hábito seguro o arriesgado?».", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: "Crea: la frase de l'illa|Crea: la frase de la isla", fase: 'crea',
        fa: "Cada alumne/a crea a l'app la frase de mentida per al cartell de l'illa (ha d'arribar a «Molt forta») i en fa un dibuix ràpid en un post-it, sense escriure-hi la frase. En parelles, l'altre/a intenta endevinar-la pel dibuix: si no pot, la frase és bona! «La clau de la família» és per fer a casa: a l'app poden tocar «Ara no».|Cada alumno/a crea en la app la frase de mentira para el cartel de la isla (tiene que llegar a «Muy fuerte») y hace un dibujo rápido en un pósit, sin escribir la frase. Por parejas, el otro/a intenta adivinarla por el dibujo: si no puede, ¡la frase es buena! «La llave de la familia» es para hacer en casa: en la app pueden tocar «Ahora no».",
        diu: ["Dibuixa la teva escena: el company o la companya pot endevinar les quatre paraules?|Dibuja tu escena: ¿el compañero o la compañera puede adivinar las cuatro palabras?",
          "Aquesta frase és de mentida: no la facis servir enlloc.|Esta frase es de mentira: no la uses en ningún sitio."],
        slides: ['s15'], app: "Pas «Crea»: la frase de contrasenya de l'illa (i «La clau de la família», per a casa).|Paso «Crea»: la frase de contraseña de la isla (y «La llave de la familia», para casa).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
        diu: ["Tornem a la clau de la fruitera: on la guardarem a partir d'ara?|Volvamos a la llave del frutero: ¿dónde la guardaremos a partir de ahora?",
          "Si algú sap la teva contrasenya, a qui ho dius?|Si alguien sabe tu contraseña, ¿a quién se lo dices?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Creu que una contrasenya curta amb símbols (G4t!) és molt forta.|Cree que una contraseña corta con símbolos (G4t!) es muy fuerte.",
        "Que compari al laboratori «G4t!» amb una frase de quatre paraules. Què diu de la llargada?|Que compare en el laboratorio «G4t!» con una frase de cuatro palabras. ¿Qué dice de la longitud?"],
      ["Escriu al laboratori la seva contrasenya de veritat o una de molt semblant.|Escribe en el laboratorio su contraseña de verdad o una muy parecida.",
        "Sense donar-hi importància davant del grup, que l'esborri i en provi una d'inventada. Si era la real, que ho expliqui a casa i la canviïn: no ha fet res de dolent.|Sin darle importancia delante del grupo, que la borre y pruebe una inventada. Si era la real, que lo explique en casa y la cambien: no ha hecho nada malo."],
      ["Pensa que al millor amic sí que li pot dir la contrasenya.|Piensa que a su mejor amigo sí le puede decir la contraseña.",
        "Pregunta: i si un dia l'amic la diu sense voler a algú altre, o entra i esborra alguna cosa per error? Ajuda'l a trobar una manera amable de dir que no.|Pregunta: ¿y si un día el amigo la dice sin querer a otra persona, o entra y borra algo por error? Ayúdale a encontrar una forma amable de decir que no."],
      ["Fa servir paraules relacionades (gat, gos, ratolí) o una frase molt coneguda.|Usa palabras relacionadas (gato, perro, ratón) o una frase muy conocida.",
        "Que pensi si algú que el coneix podria endevinar la relació. Quatre paraules sense relació són més difícils.|Que piense si alguien que le conoce podría adivinar la relación. Cuatro palabras sin relación son más difíciles."],
      ["Confon la verificació en dos passos amb tenir dues contrasenyes.|Confunde la verificación en dos pasos con tener dos contraseñas.",
        "Torna als dos panys: un és el que saps (la contrasenya) i l'altre el que tens (el mòbil de la família). Sense el mòbil, saber la contrasenya no n'hi ha prou.|Vuelve a los dos candados: uno es lo que sabes (la contraseña) y el otro lo que tienes (el móvil de la familia). Sin el móvil, saber la contraseña no basta."]
    ],
    diff: {
      mes: "Per anar més enllà: si una contrasenya només pogués tenir les lletres a i b, quantes contrasenyes diferents de 2 lletres hi hauria? I de 3? I de 4? (4, 8 i 16.) Que descobreixin que cada lletra de més multiplica les possibilitats i que ho expliquin a la classe en un minut. Debat: per què creieu que les empreses demanen contrasenyes cada vegada més llargues?|Para ir más allá: si una contraseña solo pudiera tener las letras a y b, ¿cuántas contraseñas diferentes de 2 letras habría? ¿Y de 3? ¿Y de 4? (4, 8 y 16.) Que descubran que cada letra de más multiplica las posibilidades y que lo expliquen a la clase en un minuto. Debate: ¿por qué creéis que las empresas piden contraseñas cada vez más largas?",
      menys: "Fer servir les targetes de paraules de paper: treure'n quatre i escriure-les al laboratori una darrere l'altra. Fer el classificador «Forta o feble?» en parella, llegint en veu alta cada contrasenya.|Usar las tarjetas de palabras de papel: sacar cuatro y escribirlas en el laboratorio una detrás de otra. Hacer el clasificador «¿Fuerte o débil?» en pareja, leyendo en voz alta cada contraseña."
    },
    aval: {
      ticket: ["Digues dues coses que fan forta una contrasenya.|Di dos cosas que hacen fuerte una contraseña.",
        "Si un amic et demana la contrasenya, què li respons? I si algú ja la sap?|Si un amigo te pide la contraseña, ¿qué le respondes? ¿Y si alguien ya la sabe?"],
      rubric: [
        ['Contrasenyes fortes|Contraseñas fuertes', "Explica la llargada, la varietat i que no hi ha d'haver dades personals, i classifica bé els exemples.|Explica la longitud, la variedad y que no tiene que haber datos personales, y clasifica bien los ejemplos.", "Reconeix les molt febles (1234, un nom), però dubta amb les curtes amb símbols.|Reconoce las muy débiles (1234, un nombre), pero duda con las cortas con símbolos."],
        ['Frase de contrasenya|Frase de contraseña', "Crea una frase de quatre paraules sense relació i n'explica el truc.|Crea una frase de cuatro palabras sin relación y explica el truco.", "Crea una frase, però amb paraules relacionades o amb alguna dada personal.|Crea una frase, pero con palabras relacionadas o con algún dato personal."],
        ['No compartir i demanar ajuda|No compartir y pedir ayuda', "Diu que no amb amabilitat i sap que, si algú la sap, ho explica a un adult i la canvien.|Dice que no con amabilidad y sabe que, si alguien la sabe, se lo explica a un adulto y la cambian.", "Sap que no s'ha de compartir, però no sap què fer si algú ja la sap.|Sabe que no se tiene que compartir, pero no sabe qué hacer si alguien ya la sabe."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «La clau de la família»: l'infant explica el truc de la frase de contrasenya i acordeu una norma per si algú la descobreix. No cal dir cap contrasenya en veu alta. Els comptes i la verificació en dos passos els configura sempre un adult.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «La llave de la familia»: el niño o la niña explica el truco de la frase de contraseña y acordáis una norma por si alguien la descubre. No hace falta decir ninguna contraseña en voz alta. Las cuentas y la verificación en dos pasos las configura siempre un adulto.",
    slides: [
      { id: 's1', k: 'portada', t: 'Contrasenyes fortes|Contraseñas fuertes', x: "Avui aprendrem a fer claus que ningú no pugui endevinar… i a no deixar-les a ningú.|Hoy aprenderemos a hacer llaves que nadie pueda adivinar… y a no dejárselas a nadie.",
        nota: "Presenta el curs: aprendrem a anar per internet amb seguretat i sense por. Recorda la norma: cap contrasenya real a classe.|Presenta el curso: aprenderemos a ir por internet con seguridad y sin miedo. Recuerda la norma: ninguna contraseña real en clase." },
      { id: 's2', k: 'pregunta', t: 'On amagaries la clau de casa?|¿Dónde esconderías la llave de casa?', x: "I on miraria primer algú que la volgués trobar?|¿Y dónde miraría primero alguien que la quisiera encontrar?",
        nota: "Recull respostes: sota l'estora, al test, a la fruitera… Són els primers llocs on es mira. Amb les contrasenyes fàcils passa igual.|Recoge respuestas: debajo del felpudo, en la maceta, en el frutero… Son los primeros sitios donde se mira. Con las contraseñas fáciles pasa igual." },
      { id: 's3', k: 'concepte', t: "Les portes d'internet|Las puertas de internet", pic: 'img/ment/sob.webp',
        punts: ['Cada compte (xat, correu, apps) té una porta.|Cada cuenta (chat, correo, apps) tiene una puerta.', 'La contrasenya n\'és la clau.|La contraseña es su llave.', 'Avui: claus fortes i com cuidar-les.|Hoy: llaves fuertes y cómo cuidarlas.'],
        nota: "Una clau fàcil de trobar és com una contrasenya fàcil d'endevinar. No culpis ningú que en tingui una de feble: avui aprendrem a millorar-la.|Una llave fácil de encontrar es como una contraseña fácil de adivinar. No culpes a nadie que tenga una débil: hoy aprenderemos a mejorarla." },
      { id: 's4', k: 'anim', t: 'Què fa forta una contrasenya?|¿Qué hace fuerte una contraseña?', anim: 'd1pass', x: 'Llarga, variada i sense res de tu.|Larga, variada y sin nada de ti.',
        nota: "Llegiu-les en veu alta. Pregunta per què «Gat2015» encara és feble: qui sap que tens un gat i l'any en què vas néixer?|Leedlas en voz alta. Pregunta por qué «Gato2015» todavía es débil: ¿quién sabe que tienes un gato y el año en que naciste?" },
      { id: 's5', k: 'anim', t: 'El truc de la frase de contrasenya|El truco de la frase de contraseña', anim: 'd1frase', x: 'Quatre paraules sense relació i una escena absurda per recordar-les.|Cuatro palabras sin relación y una escena absurda para recordarlas.',
        nota: "Construïu-ne una entre tots a la pissarra i després esborreu-la: ara ja la sap tota la classe, i per això no serveix!|Construid una entre todos en la pizarra y después borradla: ahora ya la sabe toda la clase, ¡y por eso no sirve!" },
      { id: 's6', k: 'pregunta', t: 'Forta o feble?|¿Fuerte o débil?', punts: ['123456|123456', 'Rufus2015|Rufus2015', 'Rellotge-Volcà-Mitjó-48|Reloj-Volcán-Calcetín-48', 'qwerty|qwerty', 'Pingüí taronja menja sopa freda|Pingüino naranja come sopa fría'],
        nota: "Votació amb el polze per a cada una (amunt, forta; avall, feble). Demana sempre el perquè del vot.|Votación con el pulgar para cada una (arriba, fuerte; abajo, débil). Pide siempre el porqué del voto." },
      { id: 's7', k: 'media', t: 'La contrasenya no es deixa|La contraseña no se deja', x: "Com li dius que no a un amic, sense enfadar-vos?|¿Cómo le dices que no a un amigo, sin enfadaros?",
        media: chat('Pau|Pau', '🦊', `<div class="dm them">Ei! Em deixes la contrasenya? Aquesta nit et faig el castell 😄</div><div class="dm me">Gràcies, però la contrasenya no la deixo. Demà ho fem junts!</div>|<div class="dm them">¡Ey! ¿Me dejas la contraseña? Esta noche te hago el castillo 😄</div><div class="dm me">Gracias, pero la contraseña no la dejo. ¡Mañana lo hacemos juntos!</div>`),
        nota: "Pregunta per què no la deixarien ni al millor amic. Els adults que els cuiden sí que la poden saber. Si algú la sap, s'explica a casa i es canvia, sense culpes.|Pregunta por qué no la dejarían ni al mejor amigo. Los adultos que los cuidan sí pueden saberla. Si alguien la sabe, se explica en casa y se cambia, sin culpas." },
      { id: 's8', k: 'anim', t: 'La verificació en dos passos|La verificación en dos pasos', anim: 'd1dos', x: 'Dos panys: el que saps (la contrasenya) i el que tens (el mòbil de la família).|Dos candados: lo que sabes (la contraseña) y lo que tienes (el móvil de la familia).',
        nota: "Explica que l'activa i la configura un adult. Amb el segon pany, encara que algú endevinés la contrasenya, no podria entrar.|Explica que la activa y la configura un adulto. Con el segundo candado, aunque alguien adivinara la contraseña, no podría entrar." },
      { id: 's9', k: 'pregunta', t: 'I si algú et demana el codi?|¿Y si alguien te pide el código?', x: "«Som de XatAmics. Envia'ns el codi que t'acaba d'arribar.»|«Somos de XatAmics. Envíanos el código que te acaba de llegar.»",
        punts: ["No l'envio.|No lo envío.", 'Ho ensenyo a un adult de confiança.|Se lo enseño a un adulto de confianza.', "Si ja l'he enviat, ho explico: no és culpa meva i té solució.|Si ya lo he enviado, lo explico: no es culpa mía y tiene solución."],
        nota: "Remarca que qui demana el codi vol entrar al compte. A la unitat 2 aprendrem a detectar aquests enganys amb més detall.|Remarca que quien pide el código quiere entrar en la cuenta. En la unidad 2 aprenderemos a detectar estos engaños con más detalle." },
      { id: 's10', k: 'activitat', t: 'Endevina la contrasenya|Adivina la contraseña', timer: 6,
        punts: ['Cada grup llegeix la fitxa dels personatges inventats.|Cada grupo lee la ficha de los personajes inventados.', 'Endevineu quina contrasenya feble fa servir cadascun.|Adivinad qué contraseña débil usa cada uno.', 'Quina dada us ha ajudat?|¿Qué dato os ha ayudado?', "A l'última pregunta, inventeu-los una frase segura.|En la última pregunta, inventadles una frase segura."],
        nota: "Les solucions són al solucionari. Fes notar que totes s'endevinen amb dades personals.|Las soluciones están en el solucionario. Haz notar que todas se adivinan con datos personales." },
      { id: 's11', k: 'activitat', t: 'La fàbrica de frases|La fábrica de frases', timer: 6,
        punts: ['Traieu 4 targetes de paraules de la bossa.|Sacad 4 tarjetas de palabras de la bolsa.', 'Inventeu una escena absurda amb les quatre.|Inventad una escena absurda con las cuatro.', 'Dibuixeu-la al full.|Dibujadla en el folio.', 'És de mentida: no la feu servir mai!|Es de mentira: ¡no la uséis nunca!'],
        nota: "Si una paraula no els agrada, que en treguin una altra. Pengeu els dibuixos a la paret: el mural de les frases.|Si una palabra no les gusta, que saquen otra. Colgad los dibujos en la pared: el mural de las frases." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre la sessió «Contrasenyes fortes».|Abre la sesión «Contraseñas fuertes».', 'Fes la missió, «Descobreix» i «Mans a l\'obra».|Haz la misión, «Descubre» y «Manos a la obra».', 'Al laboratori, escriu només contrasenyes inventades.|En el laboratorio, escribe solo contraseñas inventadas.', 'Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa».'],
        nota: "Al laboratori no es desa res, però és el moment de fixar l'hàbit: mai la real.|En el laboratorio no se guarda nada, pero es el momento de fijar el hábito: nunca la real." },
      { id: 's13', k: 'activitat', t: 'Pausa: la frase amb el cos|Pausa: la frase con el cuerpo',
        punts: ['«Elefant»: fes la trompa amb el braç.|«Elefante»: haz la trompa con el brazo.', '«Salta»: un salt.|«Salta»: un salto.', '«Paraigua»: braços amunt.|«Paraguas»: brazos arriba.', '«Gelat»: llepa l\'aire!|«Helado»: ¡lame el aire!'],
        nota: "Feu-la tots junts tres vegades, cada cop més de pressa. Després, a l'app: els reptes.|Hacedla todos juntos tres veces, cada vez más deprisa. Después, en la app: los retos." },
      { id: 's14', k: 'repte', t: 'Reptes: casos de contrasenyes|Retos: casos de contraseñas', timer: 10,
        punts: ["1. La tieta que fa servir la mateixa per a tot|1. La tía que usa la misma para todo", '2. La Jana i els dos panys|2. Jana y los dos candados', '3. El missatge que demana el codi|3. El mensaje que pide el código', '4. Hàbit segur o arriscat?|4. ¿Hábito seguro o arriesgado?'],
        nota: "Si algú dubta, que llegeixi la pregunta en veu alta i pensi què faria un adult de confiança.|Si alguien duda, que lea la pregunta en voz alta y piense qué haría un adulto de confianza." },
      { id: 's15', k: 'activitat', t: "Crea: la frase de l'illa|Crea: la frase de la isla", timer: 5, x: "Una frase de mentida, molt forta, i un dibuix per recordar-la. El company o la companya pot endevinar-la pel dibuix?|Una frase de mentira, muy fuerte, y un dibujo para recordarla. ¿El compañero o la compañera puede adivinarla por el dibujo?",
        nota: "«La clau de la família» és per fer a casa: a l'app poden tocar «Ara no».|«La llave de la familia» es para hacer en casa: en la app pueden tocar «Ahora no»." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ['Forta = llarga, variada i sense dades teves.|Fuerte = larga, variada y sin datos tuyos.', 'Frase de contrasenya: quatre paraules sense relació.|Frase de contraseña: cuatro palabras sin relación.', "La contrasenya i el codi no es deixen; si algú els sap, ho dic a un adult.|La contraseña y el código no se dejan; si alguien los sabe, se lo digo a un adulto."],
        nota: "Torna a la clau de la fruitera: on la guardarem ara? Celebra les frases del mural.|Vuelve a la llave del frutero: ¿dónde la guardaremos ahora? Celebra las frases del mural." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Digues dues coses que fan forta una contrasenya.|Di dos cosas que hacen fuerte una contraseña.', 'Un amic et demana la contrasenya: què li respons?|Un amigo te pide la contraseña: ¿qué le respondes?'],
        nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita repassar-ho la setmana vinent.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita repasarlo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de paraules per a frases de contrasenya|Tarjetas de palabras para frases de contraseña', k: 'targetes',
        intro: "Un paquet per grup de 4. Retalleu-les i poseu-les en una bossa opaca. Cada grup en treu quatre i inventa una escena absurda que les uneixi. Les frases són per practicar: no es fan servir mai de veritat.|Un paquete por grupo de 4. Recortadlas y metedlas en una bolsa opaca. Cada grupo saca cuatro e inventa una escena absurda que las una. Las frases son para practicar: no se usan nunca de verdad.",
        items: [
          { t: 'Tortuga 🐢|Tortuga 🐢', n: 1 }, { t: 'Coet 🚀|Cohete 🚀', n: 1 }, { t: 'Taronja 🍊|Naranja 🍊', n: 1 }, { t: 'Globus 🎈|Globo 🎈', n: 1 },
          { t: 'Llapis ✏️|Lápiz ✏️', n: 1 }, { t: 'Magdalena 🧁|Magdalena 🧁', n: 1 }, { t: 'Lleó 🦁|León 🦁', n: 1 }, { t: 'Pop 🐙|Pulpo 🐙', n: 1 },
          { t: 'Volcà 🌋|Volcán 🌋', n: 1 }, { t: 'Corona 👑|Corona 👑', n: 1 }, { t: 'Lluna 🌙|Luna 🌙', n: 1 }, { t: 'Bicicleta 🚴|Bicicleta 🚴', n: 1 },
          { t: 'Drac 🐉|Dragón 🐉', n: 1 }, { t: 'Galeta 🍪|Galleta 🍪', n: 1 }, { t: 'Castell 🏰|Castillo 🏰', n: 1 }, { t: 'Raïm 🍇|Uvas 🍇', n: 1 },
          { t: 'Pilota ⚽|Pelota ⚽', n: 1 }, { t: 'Barret 🎩|Sombrero 🎩', n: 1 }, { t: 'Auriculars 🎧|Auriculares 🎧', n: 1 }, { t: 'Brúixola 🧭|Brújula 🧭', n: 1 },
          { t: 'Mussol 🦉|Búho 🦉', n: 1 }, { t: 'Cocodril 🐊|Cocodrilo 🐊', n: 1 }, { t: 'Maduixa 🍓|Fresa 🍓', n: 1 }, { t: 'Plàtan 🍌|Plátano 🍌', n: 1 }
        ] },
      { id: 'p2', t: 'Endevina la contrasenya del personatge|Adivina la contraseña del personaje', k: 'fitxa',
        intro: "Una fitxa per grup. Els personatges són inventats. Llegiu-ne les dades i endevineu la contrasenya feble que fa servir cadascun. Després, inventeu-los una frase segura.|Una ficha por grupo. Los personajes son inventados. Leed sus datos y adivinad la contraseña débil que usa cada uno. Después, inventadles una frase segura.",
        items: [
          { q: "En Max té un gos que es diu Tro i va néixer el 2016. Pista: la seva contrasenya és el nom del gos i l'any.|Max tiene un perro que se llama Tro y nació en 2016. Pista: su contraseña es el nombre del perro y el año.", sol: 'Tro2016: el nom de la mascota i l\'any de naixement.|Tro2016: el nombre de la mascota y el año de nacimiento.' },
          { q: "La Iris és fan de l'equip de bàsquet «Els Taurons». Pista: el nom de l'equip i els primers quatre números.|Iris es fan del equipo de baloncesto «Los Tiburones». Pista: el nombre del equipo y los primeros cuatro números.", sol: 'Taurons1234: l\'equip preferit i una seqüència.|Tiburones1234: el equipo favorito y una secuencia.' },
          { q: "En Teo diu que la seva és «la més fàcil del món: les primeres lletres del teclat».|Teo dice que la suya es «la más fácil del mundo: las primeras letras del teclado».", sol: 'qwerty: les lletres seguides del teclat.|qwerty: las letras seguidas del teclado.' },
          { q: "La Wen viu al carrer del Sol. Pista: el seu nom i 1, 2, 3.|Wen vive en la calle del Sol. Pista: su nombre y 1, 2, 3.", sol: 'wen123: el nom i una seqüència.|wen123: el nombre y una secuencia.' },
          { q: "Inventeu una frase de contrasenya segura per a cada personatge: quatre paraules sense relació i cap dada seva.|Inventad una frase de contraseña segura para cada personaje: cuatro palabras sin relación y ningún dato suyo.", sol: "Qualsevol frase de quatre paraules o més, sense relació entre elles i sense el nom, la mascota, l'equip, el carrer ni l'any.|Cualquier frase de cuatro palabras o más, sin relación entre ellas y sin el nombre, la mascota, el equipo, la calle ni el año.", big: true }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Què compartim? ---------- */
  'd1-2': {
    obj: [
      "L'alumne/a distingeix les dades personals (nom complet, adreça, telèfon, escola, ubicació) dels gustos i coses que es poden compartir.|El alumno/a distingue los datos personales (nombre completo, dirección, teléfono, colegio, ubicación) de los gustos y cosas que se pueden compartir.",
      "L'alumne/a configura la privadesa d'un perfil decidint qui veu cada dada (només jo, amics o tothom) i ho justifica.|El alumno/a configura la privacidad de un perfil decidiendo quién ve cada dato (solo yo, amigos o todo el mundo) y lo justifica.",
      "L'alumne/a troba pistes de dades personals en una foto o una publicació (rètols, uniformes, ubicació).|El alumno/a encuentra pistas de datos personales en una foto o una publicación (letreros, uniformes, ubicación).",
      "L'alumne/a reconeix senyals d'alarma en un xat amb un desconegut i sap què fer: no contestar, bloquejar i explicar-ho a un adult de confiança.|El alumno/a reconoce señales de alarma en un chat con un desconocido y sabe qué hacer: no contestar, bloquear y explicárselo a un adulto de confianza."
    ],
    comp: [
      "Competència digital (CD4 · seguretat): protegir les dades personals i la privadesa|Competencia digital (CD4 · seguridad): proteger los datos personales y la privacidad",
      "Competència digital (CD3 · comunicació): relacionar-se a internet de manera segura|Competencia digital (CD3 · comunicación): relacionarse en internet de forma segura",
      "Competència personal i social: reconèixer situacions de risc i demanar ajuda|Competencia personal y social: reconocer situaciones de riesgo y pedir ayuda",
      "Educació en valors cívics i ètics: el dret a la intimitat i a la pròpia imatge|Educación en valores cívicos y éticos: el derecho a la intimidad y a la propia imagen"
    ],
    vocab: [
      ['Dada personal|Dato personal', "Informació que diu qui ets o on trobar-te: nom complet, adreça, telèfon, escola, on ets ara…|Información que dice quién eres o dónde encontrarte: nombre completo, dirección, teléfono, colegio, dónde estás ahora…"],
      ['Privadesa|Privacidad', "Poder decidir qui veu les teves coses i les teves dades.|Poder decidir quién ve tus cosas y tus datos."],
      ['Àlies|Alias', "Un nom inventat per fer servir a internet en lloc del nom complet.|Un nombre inventado para usar en internet en lugar del nombre completo."],
      ['Ubicació|Ubicación', "El lloc on ets, que el mòbil o una app poden saber i compartir.|El lugar donde estás, que el móvil o una app pueden saber y compartir."],
      ['Desconegut (a internet)|Desconocido (en internet)', "Algú que ni tu ni la teva família coneixeu en persona, encara que hi hàgiu xatejat molt.|Alguien a quien ni tú ni tu familia conocéis en persona, aunque hayáis chateado mucho."],
      ['Adult de confiança|Adulto de confianza', "Una persona gran que et cuida i a qui pots explicar qualsevol cosa: algú de la família, un mestre o una mestra…|Una persona mayor que te cuida y a quien puedes contar cualquier cosa: alguien de la familia, un maestro o una maestra…"]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què compartim?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué compartimos?»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Tres zones marcades al terra amb cinta o tres cartolines grans: «Només jo», «Amics» i «Tothom»|Tres zonas marcadas en el suelo con cinta o tres cartulinas grandes: «Solo yo», «Amigos» y «Todo el mundo»",
        "Fulls per a «El meu escut»|Folios para «Mi escudo»"
      ],
      imprimir: ['Targetes de dades: qui ho pot veure?|Tarjetas de datos: ¿quién lo puede ver?', 'El meu escut i els meus adults de confiança|Mi escudo y mis adultos de confianza'],
      prep: [
        "Imprimir i retallar un paquet de targetes de dades per grup de 4 i marcar les tres zones.|Imprimir y recortar un paquete de tarjetas de datos por grupo de 4 y marcar las tres zonas.",
        "Llegir abans el xat de l'Estel_Blau_11 per anticipar preguntes i emocions del grup.|Leer antes el chat de Estel_Blau_11 para anticipar preguntas y emociones del grupo.",
        "Tenir present el protocol del centre per si algun infant explica una situació real: escoltar amb calma, agrair-li que ho expliqui i no pressionar-lo davant del grup.|Tener presente el protocolo del centro por si algún niño o niña explica una situación real: escuchar con calma, agradecerle que lo cuente y no presionarle delante del grupo.",
        "Imprimir una fitxa «El meu escut» per alumne/a.|Imprimir una ficha «Mi escudo» por alumno/a."
      ]
    },
    plan: [
      { min: 5, t: 'Repàs i la pregunta del perfil|Repaso y la pregunta del perfil', fase: 'inici',
        fa: "Repassa en dos minuts la frase de contrasenya de la sessió anterior. Després llegeix en veu alta les quatre coses de la diapositiva i pregunta quines compartirien amb tothom. Recull respostes sense corregir: hi tornareu al final.|Repasa en dos minutos la frase de contraseña de la sesión anterior. Después lee en voz alta las cuatro cosas de la diapositiva y pregunta cuáles compartirían con todo el mundo. Recoge respuestas sin corregir: volveréis a ello al final.",
        diu: ["Qui recorda el truc de les quatre paraules?|¿Quién recuerda el truco de las cuatro palabras?",
          "Ho diríeu a tothom, el vostre color preferit? I l'adreça de casa? Per què no és el mateix?|¿Se lo diríais a todo el mundo, vuestro color favorito? ¿Y la dirección de casa? ¿Por qué no es lo mismo?"],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: 'Dades, privadesa i desconeguts|Datos, privacidad y desconocidos', fase: 'teoria',
        fa: "Explica les dades personals amb l'animació i els tres nivells de privadesa amb les cartes cap per avall. Mira la foto amb el grup i deixa que trobin les tres pistes abans que surtin. Parla de la ubicació. Acaba amb el xat del desconegut i les tres accions (no contesto, bloquejo, ho explico). Fes-ho amb to tranquil: donem eines, no fem por.|Explica los datos personales con la animación y los tres niveles de privacidad con las cartas boca abajo. Mira la foto con el grupo y deja que encuentren las tres pistas antes de que salgan. Habla de la ubicación. Termina con el chat del desconocido y las tres acciones (no contesto, bloqueo, lo explico). Hazlo con tono tranquilo: damos herramientas, no damos miedo.",
        diu: ["Quina diferència hi ha entre «m'agraden les tortugues» i «visc al carrer dels Pins»?|¿Qué diferencia hay entre «me gustan las tortugas» y «vivo en la calle de los Pinos»?",
          "Mireu la foto: què hi ha al fons que podria dir on viu?|Mirad la foto: ¿qué hay en el fondo que podría decir dónde vive?",
          "Si algú fa dies que xateja amb tu però no el coneixes en persona, és un desconegut?|Si alguien lleva días chateando contigo pero no lo conoces en persona, ¿es un desconocido?",
          "Explicar-ho a un adult sempre és la bona decisió. Mai no és culpa vostra.|Contárselo a un adulto siempre es la buena decisión. Nunca es culpa vuestra."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'Les tres zones|Las tres zonas', fase: 'desconnectat',
        fa: "Grups de 4 amb un paquet de targetes de dades. Per torns, cada grup treu una targeta, decideix entre tots a quina zona va (Només jo, Amics o Tothom) i un membre la porta a la zona i explica per què. Si un altre grup no hi està d'acord, ho debateu. Quan s'acabin les targetes, cada alumne/a escriu a «El meu escut» tres adults de confiança.|Grupos de 4 con un paquete de tarjetas de datos. Por turnos, cada grupo saca una tarjeta, decide entre todos a qué zona va (Solo yo, Amigos o Todo el mundo) y un miembro la lleva a la zona y explica por qué. Si otro grupo no está de acuerdo, lo debatís. Cuando se acaben las tarjetas, cada alumno/a escribe en «Mi escudo» tres adultos de confianza.",
        diu: ["Aquesta dada diu qui ets o on trobar-te? Llavors, on va?|¿Este dato dice quién eres o dónde encontrarte? Entonces, ¿dónde va?",
          "Hi ha dades que poden anar a «Amics» o a «Només jo»: les dues respostes poden ser bones si les expliqueu.|Hay datos que pueden ir a «Amigos» o a «Solo yo»: las dos respuestas pueden ser buenas si las explicáis.",
          "Qui són les persones grans a qui ho explicaríeu tot?|¿Quiénes son las personas mayores a quienes se lo contaríais todo?"],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 4 i després individual|Grupos de 4 y después individual' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme. Al missatge d'en Bit, que toquin les dades una a una i llegeixin l'explicació. Al perfil d'en Bit, si algun camp surt en vermell, que llegeixin la raó i ho tornin a provar. Fixa't en qui va de pressa i pregunta-li el perquè d'una tria.|Cada alumno/a avanza a su ritmo. En el mensaje de Bit, que toquen los datos uno a uno y lean la explicación. En el perfil de Bit, si algún campo sale en rojo, que lean la razón y lo vuelvan a probar. Fíjate en quién va deprisa y pregúntale el porqué de una elección.",
        diu: ["Per què has posat l'escola a «Només jo»?|¿Por qué has puesto el colegio en «Solo yo»?",
          "Al missatge d'en Bit, què pot compartir sense problemes?|En el mensaje de Bit, ¿qué puede compartir sin problemas?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la història d'en Bit, les cinc targetes, «Ho puc compartir?», el missatge d'en Bit a FotoNuvi, el perfil d'en Bit i la pregunta de la foto.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la historia de Bit, las cinco tarjetas, «¿Lo puedo compartir?», el mensaje de Bit en FotoNuvi, el perfil de Bit y la pregunta de la foto.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: el desconegut i els senyals|Retos: el desconocido y las señales', fase: 'ordinador',
        fa: "Feu la pausa activa tots junts («Escut o mans amunt?»). Després, el xat de l'Estel_Blau_11: anima'ls a provar també els camins arriscats, perquè vegin que sempre es pot parar i demanar ajuda. Continueu amb els senyals d'alarma i la pregunta de la ubicació. Comenta en veu alta, per a tothom, que si mai els passa una cosa així de veritat, ho poden explicar i no els passarà res per fer-ho.|Haced la pausa activa todos juntos («¿Escudo o manos arriba?»). Después, el chat de Estel_Blau_11: anímalos a probar también los caminos arriesgados, para que vean que siempre se puede parar y pedir ayuda. Continuad con las señales de alarma y la pregunta de la ubicación. Comenta en voz alta, para todos, que si alguna vez les pasa algo así de verdad, lo pueden contar y no les pasará nada por hacerlo.",
        diu: ["Quin missatge de l'Estel us ha semblat més estrany? Per què?|¿Qué mensaje de Estel os ha parecido más raro? ¿Por qué?",
          "Un secret que et fa sentir malament no s'ha de guardar.|Un secreto que te hace sentir mal no se tiene que guardar."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: el xat de l'Estel_Blau_11, «Senyal d'alarma o normal?» i la pregunta de la ubicació.|«Pausa activa» y «Retos»: el chat de Estel_Blau_11, «¿Señal de alarma o normal?» y la pregunta de la ubicación.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el perfil segur de la Nora|Crea: el perfil seguro de Nora', fase: 'crea',
        fa: "Cada alumne/a configura el perfil de la Nora. En parelles, compareu-lo: heu decidit el mateix? Les fotos de l'obra poden anar a «Amics» o a «Només jo»: totes dues són bones. «L'escut de les dades» és per fer a casa.|Cada alumno/a configura el perfil de Nora. Por parejas, comparadlo: ¿habéis decidido lo mismo? Las fotos de la obra pueden ir a «Amigos» o a «Solo yo»: las dos son buenas. «El escudo de los datos» es para hacer en casa.",
        diu: ["Per què l'àlies es pot veure i el nom complet no?|¿Por qué el alias se puede ver y el nombre completo no?",
          "A les fotos de l'obra hi surten altres nens i nenes: què cal abans de compartir-les?|En las fotos de la obra salen otros niños y niñas: ¿qué hace falta antes de compartirlas?"],
        slides: ['s15'], app: "Pas «Crea»: el perfil segur de la Nora (i «L'escut de les dades», per a casa).|Paso «Crea»: el perfil seguro de Nora (y «El escudo de los datos», para casa).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Torna a les quatre coses del principi: ara, què compartirien amb tothom? Repassa el resum i fes el tiquet a la porta.|Vuelve a las cuatro cosas del principio: ahora, ¿qué compartirían con todo el mundo? Repasa el resumen y haz el ticket en la puerta.",
        diu: ["Digues una dada que es guarda i una que es pot compartir.|Di un dato que se guarda y uno que se puede compartir.",
          "Qui és un dels vostres adults de confiança?|¿Quién es uno de vuestros adultos de confianza?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Pensa que si fa dies que xategen amb algú, ja és un amic.|Piensa que si hace días que chatean con alguien, ya es un amigo.",
        "Pregunta: el coneixes en persona? I la teva família? Si no, continua sent un desconegut, encara que sigui simpàtic.|Pregunta: ¿lo conoces en persona? ¿Y tu familia? Si no, sigue siendo un desconocido, aunque sea simpático."],
      ["No veu cap problema en una foto perquè «només hi surto jo».|No ve ningún problema en una foto porque «solo salgo yo».",
        "Torneu a l'animació de la foto: que busqui rètols, números o uniformes al fons.|Volved a la animación de la foto: que busque letreros, números o uniformes en el fondo."],
      ["Vol posar-ho tot a «Tothom» perquè vol que vegin els seus dibuixos.|Quiere ponerlo todo en «Todo el mundo» porque quiere que vean sus dibujos.",
        "Separa els gustos i els dibuixos (que es poden compartir) de les dades que diuen on trobar-lo. Per als dibuixos, «Amics» és una bona opció.|Separa los gustos y los dibujos (que se pueden compartir) de los datos que dicen dónde encontrarle. Para los dibujos, «Amigos» es una buena opción."],
      ["Té por després del xat del desconegut o diu que no farà servir mai internet.|Tiene miedo después del chat del desconocido o dice que no usará nunca internet.",
        "Tranquil·litza'l: la majoria de missatges són normals, i avui hem après eines per als que no ho són (no contestar, bloquejar, explicar-ho). Amb aquestes eines es pot estar bé a internet.|Tranquilízale: la mayoría de mensajes son normales, y hoy hemos aprendido herramientas para los que no lo son (no contestar, bloquear, contarlo). Con estas herramientas se puede estar bien en internet."],
      ["Explica una situació real que l'ha incomodat.|Explica una situación real que le ha incomodado.",
        "Escolta amb calma, agraeix-li que ho expliqui i digues-li que no és culpa seva. No li demanis detalls davant del grup: parla-hi després en privat i segueix el protocol del centre i la comunicació amb la família.|Escucha con calma, agradécele que lo cuente y dile que no es culpa suya. No le pidas detalles delante del grupo: habla con él o ella después en privado y sigue el protocolo del centro y la comunicación con la familia."]
    ],
    diff: {
      mes: "Per anar més enllà: dissenyar en un paper una foto inventada amb tres pistes amagades (un rètol, un uniforme, un número) perquè un company/a les trobi. Debat: per què creieu que moltes apps volen saber on som? Qui hauria de decidir si els ho diem?|Para ir más allá: diseñar en un papel una foto inventada con tres pistas escondidas (un letrero, un uniforme, un número) para que un compañero/a las encuentre. Debate: ¿por qué creéis que muchas apps quieren saber dónde estamos? ¿Quién debería decidir si se lo decimos?",
      menys: "Fer «Ho puc compartir?» amb les targetes de paper a la mà, en parella. Al xat de l'Estel, llegir els missatges en veu alta amb el professor/a i pensar junts la resposta abans de tocar-la.|Hacer «¿Lo puedo compartir?» con las tarjetas de papel en la mano, en pareja. En el chat de Estel, leer los mensajes en voz alta con el profesor/a y pensar juntos la respuesta antes de tocarla."
    },
    aval: {
      ticket: ["Digues dues dades personals que no posaries mai al perfil.|Di dos datos personales que no pondrías nunca en el perfil.",
        "Algú que no coneixes et demana una foto i que no ho diguis a casa: què fas?|Alguien que no conoces te pide una foto y que no lo digas en casa: ¿qué haces?"],
      rubric: [
        ['Dades personals|Datos personales', "Distingeix les dades personals dels gustos i explica per què es guarden.|Distingue los datos personales de los gustos y explica por qué se guardan.", "Reconeix l'adreça i el telèfon, però dubta amb l'escola, el nom complet o la ubicació.|Reconoce la dirección y el teléfono, pero duda con el colegio, el nombre completo o la ubicación."],
        ['Privadesa i fotos|Privacidad y fotos', "Configura el perfil amb criteri i troba les pistes del fons d'una foto.|Configura el perfil con criterio y encuentra las pistas del fondo de una foto.", "Configura el perfil amb ajuda, però no es fixa en el fons de les fotos.|Configura el perfil con ayuda, pero no se fija en el fondo de las fotos."],
        ['Desconeguts i ajuda|Desconocidos y ayuda', "Reconeix els senyals d'alarma i diu les tres accions: no contestar, bloquejar i explicar-ho a un adult.|Reconoce las señales de alarma y dice las tres acciones: no contestar, bloquear y contárselo a un adulto.", "Reconeix algun senyal d'alarma, però no té clar què ha de fer.|Reconoce alguna señal de alarma, pero no tiene claro qué tiene que hacer."]
      ]
    },
    casa: "A casa podeu repetir la sessió i fer «L'escut de les dades»: dibuixar què es guarda i què es pot compartir, revisar junts la privadesa d'una app que feu servir i escriure els noms de tres adults de confiança. És un bon moment per dir-li que sempre us pot explicar el que li passi a internet, i que no el renyareu per fer-ho.|En casa podéis repetir la sesión y hacer «El escudo de los datos»: dibujar qué se guarda y qué se puede compartir, revisar juntos la privacidad de una app que uséis y escribir los nombres de tres adultos de confianza. Es un buen momento para decirle que siempre os puede contar lo que le pase en internet, y que no le reñiréis por hacerlo.",
    slides: [
      { id: 's1', k: 'portada', t: 'Què compartim?|¿Qué compartimos?', x: "Avui aprendrem què es pot compartir a internet, què es guarda i què fer si un desconegut ens escriu.|Hoy aprenderemos qué se puede compartir en internet, qué se guarda y qué hacer si un desconocido nos escribe.",
        nota: "Presenta l'objectiu amb to tranquil: no venim a fer por, venim a aprendre eines.|Presenta el objetivo con tono tranquilo: no venimos a dar miedo, venimos a aprender herramientas." },
      { id: 's2', k: 'repas', t: 'Recordes? La frase de contrasenya|¿Recuerdas? La frase de contraseña', punts: ['Quatre paraules o més sense relació.|Cuatro palabras o más sin relación.', 'Cap dada personal.|Ningún dato personal.', 'No es deixa a ningú.|No se deja a nadie.'],
        nota: "Pregunta qui ha fet «La clau de la família» a casa i com ha anat, sense que ningú digui cap contrasenya.|Pregunta quién ha hecho «La llave de la familia» en casa y cómo ha ido, sin que nadie diga ninguna contraseña." },
      { id: 's3', k: 'pregunta', t: 'Ho compartiries amb tothom?|¿Lo compartirías con todo el mundo?', punts: ['El meu color preferit|Mi color favorito', "L'adreça de casa|La dirección de casa", 'Un dibuix que he fet|Un dibujo que he hecho', 'El meu telèfon|Mi teléfono'],
        nota: "Recull respostes sense corregir. Al final de la classe hi tornareu.|Recoge respuestas sin corregir. Al final de la clase volveréis a ello." },
      { id: 's4', k: 'anim', t: 'Què són les dades personals?|¿Qué son los datos personales?', anim: 'd1dades', x: 'Diuen qui ets i on trobar-te: es guarden.|Dicen quién eres y dónde encontrarte: se guardan.',
        nota: "Fes notar la diferència: els gustos es poden compartir; les dades que porten fins a tu, no.|Haz notar la diferencia: los gustos se pueden compartir; los datos que llevan hasta ti, no." },
      { id: 's5', k: 'concepte', t: 'Qui ho pot veure?|¿Quién lo puede ver?', pic: 'img/ment/par.webp',
        punts: ['🔒 Només jo|🔒 Solo yo', 'Amics que coneixes de veritat|Amigos que conoces de verdad', 'Tothom|Todo el mundo'],
        nota: "Les cartes cap per avall només les coneixes tu; les que gires, les veu tothom. La privadesa d'un perfil és decidir quines cartes gires i per a qui. Es configura amb un adult.|Las cartas boca abajo solo las conoces tú; las que giras, las ve todo el mundo. La privacidad de un perfil es decidir qué cartas giras y para quién. Se configura con un adulto." },
      { id: 's6', k: 'anim', t: 'Mira el fons de la foto|Mira el fondo de la foto', anim: 'd1foto', x: 'El carrer, el número de casa i l\'uniforme diuen on vius i on estudies.|La calle, el número de casa y el uniforme dicen dónde vives y dónde estudias.',
        nota: "Para l'animació a l'inici i deixa que trobin les pistes abans que apareguin.|Para la animación al principio y deja que encuentren las pistas antes de que aparezcan." },
      { id: 's7', k: 'concepte', t: 'On ets ara?|¿Dónde estás ahora?', pic: 'img/ment/nom.webp',
        punts: ['Moltes apps poden saber on ets.|Muchas apps pueden saber dónde estás.', 'Dir on ets ara és com deixar una xinxeta al mapa.|Decir dónde estás ahora es como dejar una chincheta en el mapa.', 'La ubicació, només amb la família, i ho decideix un adult.|La ubicación, solo con la familia, y lo decide un adulto.'],
        nota: "Pregunta si han vist mai una app que demana la ubicació. Què cal fer? Preguntar-ho a casa.|Pregunta si han visto alguna vez una app que pide la ubicación. ¿Qué hay que hacer? Preguntarlo en casa." },
      { id: 's8', k: 'media', t: 'Qui hi ha darrere la pantalla?|¿Quién hay detrás de la pantalla?', x: "El nom, la foto i l'edat d'un perfil poden ser inventats.|El nombre, la foto y la edad de un perfil pueden ser inventados.",
        media: chat('Estel_Blau_11|Estel_Blau_11', '⭐', `<div class="dm them">Hola! Jo també tinc 11 anys 😊</div><div class="dm them">A quina escola vas? M'envies una foto?</div>|<div class="dm them">¡Hola! Yo también tengo 11 años 😊</div><div class="dm them">¿A qué colegio vas? ¿Me envías una foto?</div>`),
        nota: "Pregunta què els sembla estrany d'aquest xat. Remarca: no sabem qui hi ha darrere, encara que digui que té la nostra edat.|Pregunta qué les parece raro de este chat. Remarca: no sabemos quién hay detrás, aunque diga que tiene nuestra edad." },
      { id: 's9', k: 'concepte', t: 'Si un desconegut et demana…|Si un desconocido te pide…', x: 'Dades, fotos, secrets o quedar:|Datos, fotos, secretos o quedar:',
        punts: ['No contesto.|No contesto.', 'El bloquejo.|Lo bloqueo.', 'Ho explico a un adult de confiança.|Se lo explico a un adulto de confianza.', 'No és culpa meva, i explicar-ho és el que cal fer.|No es culpa mía, y contarlo es lo que hay que hacer.'],
        nota: "Feu-ho com un lema que es diu en veu alta: «No contesto, bloquejo i ho explico».|Hacedlo como un lema que se dice en voz alta: «No contesto, bloqueo y lo explico»." },
      { id: 's10', k: 'activitat', t: 'Les tres zones|Las tres zonas', timer: 12,
        punts: ['Cada grup treu una targeta de dades.|Cada grupo saca una tarjeta de datos.', 'Decidiu: Només jo, Amics o Tothom?|Decidid: ¿Solo yo, Amigos o Todo el mundo?', 'Porteu-la a la zona i expliqueu per què.|Llevadla a la zona y explicad por qué.', 'Si un altre grup no hi està d\'acord, ho debatem.|Si otro grupo no está de acuerdo, lo debatimos.'],
        nota: "Algunes dades admeten dues respostes (l'aniversari, les fotos amb amics): valora més l'explicació que la zona.|Algunos datos admiten dos respuestas (el cumpleaños, las fotos con amigos): valora más la explicación que la zona." },
      { id: 's11', k: 'activitat', t: 'Els meus adults de confiança|Mis adultos de confianza',
        punts: ["Pensa en tres persones grans que et cuiden.|Piensa en tres personas mayores que te cuidan.", "Escriu-ne el nom a «El meu escut».|Escribe su nombre en «Mi escudo».", 'Són les persones a qui explicaràs el que et passi a internet.|Son las personas a quienes contarás lo que te pase en internet.'],
        nota: "Si a algú li costa trobar-ne tres, suggereix-li persones de l'escola o de les activitats (mestres, monitors). Ningú no s'ha de quedar sense.|Si a alguien le cuesta encontrar tres, sugiérele personas del colegio o de las actividades (maestros, monitores). Nadie se tiene que quedar sin ninguno." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre la sessió «Què compartim?».|Abre la sesión «¿Qué compartimos?».', 'Fes la missió i «Descobreix».|Haz la misión y «Descubre».', "Ajuda en Bit: troba les seves dades i arregla-li el perfil.|Ayuda a Bit: encuentra sus datos y arréglale el perfil.", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "Si algun camp del perfil surt en vermell, que llegeixin la raó abans de tornar-ho a provar.|Si algún campo del perfil sale en rojo, que lean la razón antes de volver a probarlo." },
      { id: 's13', k: 'activitat', t: 'Pausa: escut o mans amunt?|Pausa: ¿escudo o manos arriba?',
        punts: ['Es pot compartir: mans amunt!|Se puede compartir: ¡manos arriba!', 'És una dada personal: fes un escut amb els braços.|Es un dato personal: haz un escudo con los brazos.', "Color preferit… Adreça… Animal preferit… Telèfon… L'escola!|Color favorito… Dirección… Animal favorito… Teléfono… ¡El colegio!"],
        nota: "Digues les paraules cada cop més de pressa. Després, a l'app: els reptes.|Di las palabras cada vez más deprisa. Después, en la app: los retos." },
      { id: 's14', k: 'repte', t: 'Reptes: el desconegut i els senyals|Retos: el desconocido y las señales', timer: 10,
        punts: ["1. El xat de l'Estel_Blau_11: prova diversos camins|1. El chat de Estel_Blau_11: prueba varios caminos", "2. Senyal d'alarma o normal?|2. ¿Señal de alarma o normal?", '3. Què fas si una app et demana la ubicació?|3. ¿Qué haces si una app te pide la ubicación?'],
        nota: "Recorda en veu alta: en qualsevol moment d'un xat es pot parar i demanar ajuda.|Recuerda en voz alta: en cualquier momento de un chat se puede parar y pedir ayuda." },
      { id: 's15', k: 'activitat', t: 'Crea: el perfil segur de la Nora|Crea: el perfil seguro de Nora', timer: 5, x: "Decideix qui veu cada dada del perfil de la Nora i compara-ho amb el company o la companya.|Decide quién ve cada dato del perfil de Nora y compáralo con el compañero o la compañera.",
        nota: "«L'escut de les dades» és per fer a casa: a l'app poden tocar «Ara no».|«El escudo de los datos» es para hacer en casa: en la app pueden tocar «Ahora no»." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ['Les dades personals es guarden; els gustos es poden compartir.|Los datos personales se guardan; los gustos se pueden compartir.', 'Tu decideixes qui veu cada cosa, i les fotos també parlen.|Tú decides quién ve cada cosa, y las fotos también hablan.', 'Desconegut que demana dades, fotos o secrets: no contesto, bloquejo i ho explico.|Desconocido que pide datos, fotos o secretos: no contesto, bloqueo y lo explico.'],
        nota: "Torna a les quatre coses del principi: ha canviat alguna resposta?|Vuelve a las cuatro cosas del principio: ¿ha cambiado alguna respuesta?" },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Digues dues dades que no posaries mai al perfil.|Di dos datos que no pondrías nunca en el perfil.', 'Un desconegut et demana una foto i un secret: què fas?|Un desconocido te pide una foto y un secreto: ¿qué haces?'],
        nota: "Anota qui dubta amb les accions davant d'un desconegut per reforçar-ho a la sessió següent.|Anota quién duda con las acciones ante un desconocido para reforzarlo en la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: 'Targetes de dades: qui ho pot veure?|Tarjetas de datos: ¿quién lo puede ver?', k: 'targetes',
        intro: "Un paquet per grup de 4. Les tres primeres targetes són els rètols de les zones: poseu-les al terra. Les altres, retallades i barrejades, es treuen per torns.|Un paquete por grupo de 4. Las tres primeras tarjetas son los carteles de las zonas: ponedlas en el suelo. Las demás, recortadas y mezcladas, se sacan por turnos.",
        items: [
          { t: 'Només jo 🔒|Solo yo 🔒', n: 1 }, { t: 'Amics 🤝|Amigos 🤝', n: 1 }, { t: 'Tothom 👀|Todo el mundo 👀', n: 1 },
          { t: 'Color preferit 🖍️|Color favorito 🖍️', n: 1 }, { t: "L'adreça de casa 🗺️|La dirección de casa 🗺️", n: 1 }, { t: 'El meu telèfon 🔢|Mi teléfono 🔢', n: 1 },
          { t: "El nom de l'escola 🏫|El nombre del colegio 🏫", n: 1 }, { t: 'Un dibuix meu ✏️|Un dibujo mío ✏️', n: 1 }, { t: 'Llibre preferit 📚|Libro favorito 📚', n: 1 },
          { t: 'On soc ara mateix 🧭|Dónde estoy ahora mismo 🧭', n: 1 }, { t: 'Nom i cognoms 👤|Nombre y apellidos 👤', n: 1 }, { t: 'Animal preferit 🐢|Animal favorito 🐢', n: 1 },
          { t: "El dia de l'aniversari 📅|El día del cumpleaños 📅", n: 1 }, { t: "Foto amb l'uniforme 📘|Foto con el uniforme 📘", n: 1 }, { t: 'Un àlies inventat 🎭|Un alias inventado 🎭', n: 1 },
          { t: 'La contrasenya 🔑|La contraseña 🔑', n: 1 }, { t: "L'esport que m'agrada ⚽|El deporte que me gusta ⚽", n: 1 }, { t: 'Correu electrònic ✉️|Correo electrónico ✉️', n: 1 },
          { t: 'Foto del meu gat 🐱|Foto de mi gato 🐱', n: 1 }, { t: 'Fotos amb els amics 📷|Fotos con los amigos 📷', n: 1 }, { t: 'La meva música preferida 🎧|Mi música favorita 🎧', n: 1 }
        ] },
      { id: 'p2', t: 'El meu escut i els meus adults de confiança|Mi escudo y mis adultos de confianza', k: 'fitxa',
        intro: "Una fitxa per alumne/a. Es pot acabar a casa amb la família.|Una ficha por alumno/a. Se puede terminar en casa con la familia.",
        items: [
          { q: "Escriu tres dades que <b>es guarden</b> (només el nom de la dada, no la dada de veritat).|Escribe tres datos que <b>se guardan</b> (solo el nombre del dato, no el dato de verdad).", sol: "Per exemple: l'adreça, el telèfon, l'escola, el nom complet, on soc ara, la contrasenya.|Por ejemplo: la dirección, el teléfono, el colegio, el nombre completo, dónde estoy ahora, la contraseña." },
          { q: "Escriu tres coses que <b>sí que pots compartir</b>.|Escribe tres cosas que <b>sí puedes compartir</b>.", sol: "Per exemple: el color, l'animal o el llibre preferits, un dibuix, un àlies.|Por ejemplo: el color, el animal o el libro favoritos, un dibujo, un alias." },
          { q: "Els meus tres adults de confiança són…|Mis tres adultos de confianza son…", sol: "Persones grans que el cuiden: família, mestres, monitors…|Personas mayores que le cuidan: familia, maestros, monitores…", big: true },
          { q: "Completa: si un desconegut em demana dades, fotos o secrets, jo…|Completa: si un desconocido me pide datos, fotos o secretos, yo…", sol: "No contesto, el bloquejo i ho explico a un adult de confiança.|No contesto, lo bloqueo y se lo explico a un adulto de confianza." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · L'empremta digital ---------- */
  'd1-3': {
    obj: [
      "L'alumne/a explica què és l'empremta digital i en dona exemples (fotos, comentaris, «m'agrada», cerques).|El alumno/a explica qué es la huella digital y da ejemplos (fotos, comentarios, «me gusta», búsquedas).",
      "L'alumne/a explica que el que es publica es pot copiar i quedar-se, encara que s'esborri.|El alumno/a explica que lo que se publica se puede copiar y quedarse, aunque se borre.",
      "L'alumne/a fa servir el semàfor (és amable? és veritat? m'importaria que ho veiés tothom?) per decidir si una publicació es pot fer i com millorar-la.|El alumno/a usa el semáforo (¿es amable? ¿es verdad? ¿me importaría que lo viera todo el mundo?) para decidir si una publicación se puede hacer y cómo mejorarla.",
      "L'alumne/a demana permís abans de publicar imatges d'altres persones i proposa com reparar un error.|El alumno/a pide permiso antes de publicar imágenes de otras personas y propone cómo reparar un error."
    ],
    comp: [
      "Competència digital (CD4 · benestar): cuidar la identitat i la reputació digitals|Competencia digital (CD4 · bienestar): cuidar la identidad y la reputación digitales",
      "Competència digital (CD3 · comunicació): publicar i comentar de manera responsable i respectuosa|Competencia digital (CD3 · comunicación): publicar y comentar de forma responsable y respetuosa",
      "Competència personal i social: pensar abans d'actuar i reparar els errors|Competencia personal y social: pensar antes de actuar y reparar los errores",
      "Educació en valors cívics i ètics: el respecte a la imatge i a la intimitat dels altres|Educación en valores cívicos y éticos: el respeto a la imagen y a la intimidad de los demás"
    ],
    vocab: [
      ['Empremta digital|Huella digital', "El rastre que deixem amb tot el que fem a internet.|El rastro que dejamos con todo lo que hacemos en internet."],
      ['Reputació|Reputación', "La idea que els altres es fan de com ets, també pel que publiques.|La idea que los demás se hacen de cómo eres, también por lo que publicas."],
      ['Captura de pantalla|Captura de pantalla', "Una foto del que es veu a la pantalla, que es pot guardar i enviar.|Una foto de lo que se ve en la pantalla, que se puede guardar y enviar."],
      ['Publicar|Publicar', "Posar una cosa a internet perquè la vegin altres persones.|Poner algo en internet para que lo vean otras personas."],
      ['Permís|Permiso', "Preguntar a algú si li sembla bé abans de fer una cosa que l'afecta.|Preguntar a alguien si le parece bien antes de hacer algo que le afecta."],
      ['Esborrany|Borrador', "Un missatge escrit que encara no s'ha publicat i que es pot canviar.|Un mensaje escrito que todavía no se ha publicado y que se puede cambiar."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «L'empremta digital»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «La huella digital»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Tres cartolines (vermella, groga i verda) per grup, fulls petits i llapis|Tres cartulinas (roja, amarilla y verde) por grupo, papelitos y lápices",
        "Un paper continu o una cartolina gran per al «Mural que suma» i post-its|Un papel continuo o una cartulina grande para el «Mural que suma» y pósits"
      ],
      imprimir: ['Publicacions per al semàfor|Publicaciones para el semáforo', 'Reescriu-ho en verd|Reescríbelo en verde'],
      prep: [
        "Imprimir i retallar un paquet de publicacions per grup de 4 i preparar les tres cartolines de colors.|Imprimir y recortar un paquete de publicaciones por grupo de 4 y preparar las tres cartulinas de colores.",
        "Escriure en un paper el missatge per a «El missatge que viatja» (una cosa divertida i sense dades, per exemple: «Avui porto un mitjó de cada color!»).|Escribir en un papel el mensaje para «El mensaje que viaja» (algo divertido y sin datos, por ejemplo: «¡Hoy llevo un calcetín de cada color!»).",
        "Penjar el paper continu del «Mural que suma» en una paret visible.|Colgar el papel continuo del «Mural que suma» en una pared visible.",
        "Tenir present el protocol del centre per si algun infant explica que algú ha publicat una cosa seva que li fa mal.|Tener presente el protocolo del centro por si algún niño o niña explica que alguien ha publicado algo suyo que le hace daño."
      ]
    },
    plan: [
      { min: 5, t: 'Petjades a la sorra|Huellas en la arena', fase: 'inici',
        fa: "Repassa breument la sessió anterior (dades personals i desconeguts). Després pregunta què passa amb les petjades a la platja quan puja la marea, i si a internet passa el mateix. Recull les idees.|Repasa brevemente la sesión anterior (datos personales y desconocidos). Después pregunta qué pasa con las huellas en la playa cuando sube la marea, y si en internet pasa lo mismo. Recoge las ideas.",
        diu: ["Quines tres coses fem si un desconegut ens demana dades?|¿Qué tres cosas hacemos si un desconocido nos pide datos?",
          "A la platja, la marea esborra les petjades. I a internet, qui les esborra?|En la playa, la marea borra las huellas. ¿Y en internet, quién las borra?"],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: "L'empremta i el semàfor|La huella y el semáforo", fase: 'teoria',
        fa: "Explica l'empremta digital amb l'animació de les petjades i deixa clar que també pot ser bona. Mostra com una publicació es copia encara que s'esborri. Presenta el semàfor i les tres preguntes. Llegiu la publicació de l'Àlex (empremta que suma) i el xat de la Carla (demanar permís). Acaba amb la pregunta «Esborrar ho arregla tot?».|Explica la huella digital con la animación de las huellas y deja claro que también puede ser buena. Muestra cómo una publicación se copia aunque se borre. Presenta el semáforo y las tres preguntas. Leed la publicación de Àlex (huella que suma) y el chat de Carla (pedir permiso). Termina con la pregunta «¿Borrar lo arregla todo?».",
        diu: ["Quines petjades heu deixat avui a internet? Una cerca, un missatge, un «m'agrada»…|¿Qué huellas habéis dejado hoy en internet? Una búsqueda, un mensaje, un «me gusta»…",
          "Si l'esborres, on són les còpies?|Si lo borras, ¿dónde están las copias?",
          "Les tres preguntes del semàfor: és amable? És veritat? M'importaria que ho veiés tothom?|Las tres preguntas del semáforo: ¿es amable? ¿Es verdad? ¿Me importaría que lo viera todo el mundo?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: 'El missatge que viatja i el semàfor|El mensaje que viaja y el semáforo', fase: 'desconnectat',
        fa: "Primera part (5 min): ensenya el missatge de paper com si el publiquessis. Cada grup té 30 segons per copiar-lo al seu full: són les «captures». Després estripa l'original i digues «l'he esborrat!». Pregunta on és ara el missatge: als fulls de tots els grups. Segona part (7 min): cada grup rep publicacions de paper i les classifica en vermell, groc o verd amb les tres preguntes. Al final, reescriuen en verd una de les vermelles.|Primera parte (5 min): enseña el mensaje de papel como si lo publicaras. Cada grupo tiene 30 segundos para copiarlo en su folio: son las «capturas». Después rompe el original y di «¡lo he borrado!». Pregunta dónde está ahora el mensaje: en los folios de todos los grupos. Segunda parte (7 min): cada grupo recibe publicaciones de papel y las clasifica en rojo, amarillo o verde con las tres preguntas. Al final, reescriben en verde una de las rojas.",
        diu: ["L'he esborrat… on és ara el missatge?|Lo he borrado… ¿dónde está ahora el mensaje?",
          "Aquesta publicació, quina pregunta del semàfor no passa?|Esta publicación, ¿qué pregunta del semáforo no pasa?",
          "Com la podríeu canviar perquè fos verda?|¿Cómo la podríais cambiar para que fuera verde?"],
        slides: ['s10', 's11'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Tot el grup i després grups de 4|Todo el grupo y después grupos de 4' },
      { min: 15, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme. A la cerca de l'Àlex, que llegeixin també els resultats bons: no tota l'empremta és dolenta. Si algú es posa nerviós pensant en coses que ha publicat, tranquil·litza'l: sempre es pot demanar ajuda a un adult per mirar-ho.|Cada alumno/a avanza a su ritmo. En la búsqueda de Àlex, que lean también los resultados buenos: no toda la huella es mala. Si alguien se pone nervioso pensando en cosas que ha publicado, tranquilízale: siempre se puede pedir ayuda a un adulto para mirarlo.",
        diu: ["Quins resultats de l'Àlex sumen? Quins no?|¿Qué resultados de Àlex suman? ¿Cuáles no?",
          "Per què un «m'agrada» també és una petjada?|¿Por qué un «me gusta» también es una huella?"],
        slides: ['s12'], app: "De «Recorda» fins a «Prediu i prova»: la pregunta de repàs, la història de la platja, les cinc targetes, el viatge d'una foto, «Quina empremta deixa?», la cerca de l'Àlex, el semàfor d'en Bit i el cas de la Nil.|De «Recuerda» hasta «Predice y prueba»: la pregunta de repaso, la historia de la playa, las cinco tarjetas, el viaje de una foto, «¿Qué huella deja?», la búsqueda de Àlex, el semáforo de Bit y el caso de Nil.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: el grup de classe i la Carla|Retos: el grupo de clase y Carla', fase: 'ordinador',
        fa: "Feu la pausa activa del semàfor tots junts. Després, el xat del grup 5è B (que provin el camí de «Penja-la» per veure com es pot reparar), l'esborrany de la Carla i les dues preguntes.|Haced la pausa activa del semáforo todos juntos. Después, el chat del grupo 5º B (que prueben el camino de «Súbela» para ver cómo se puede reparar), el borrador de Carla y las dos preguntas.",
        diu: ["Vermell, groc, verd… vermell!|Rojo, amarillo, verde… ¡rojo!",
          "Si t'equivoques, què pots fer per reparar-ho?|Si te equivocas, ¿qué puedes hacer para repararlo?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: el xat del grup 5è B, l'esborrany de la Carla, el comentari que et penedeixes d'haver escrit i la publicació que deixa bona empremta.|«Pausa activa» y «Retos»: el chat del grupo 5º B, el borrador de Carla, el comentario que te arrepientes de haber escrito y la publicación que deja buena huella.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el mural que suma|Crea: el mural que suma', fase: 'crea',
        fa: "Cada alumne/a escriu en un post-it una publicació que deixi bona empremta, amb el seu àlies i sense dades personals. En parelles, s'hi fan el semàfor. Si passa les tres preguntes, l'enganxen al mural. A l'app, a «La publicació que suma», poden tocar «Ho hem fet!».|Cada alumno/a escribe en un pósit una publicación que deje buena huella, con su alias y sin datos personales. Por parejas, se hacen el semáforo. Si pasa las tres preguntas, la pegan en el mural. En la app, en «La publicación que suma», pueden tocar «¡Lo hemos hecho!».",
        diu: ["Passa les tres preguntes? Hi surt alguna dada personal?|¿Pasa las tres preguntas? ¿Sale algún dato personal?",
          "Mireu el mural: quina empremta deixa aquesta classe?|Mirad el mural: ¿qué huella deja esta clase?"],
        slides: ['s15'], app: "Pas «Crea»: «La publicació que suma» (feta en paper a classe).|Paso «Crea»: «La publicación que suma» (hecha en papel en clase).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa el resum mirant el mural i fes el tiquet a la porta.|Repasa el resumen mirando el mural y haz el ticket en la puerta.",
        diu: ["Digues una empremta que suma i una que pot fer mal.|Di una huella que suma y una que puede hacer daño.",
          "Quines són les tres preguntes del semàfor?|¿Cuáles son las tres preguntas del semáforo?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Creu que si esborra una cosa, desapareix del tot.|Cree que si borra algo, desaparece del todo.",
        "Torneu a «El missatge que viatja»: on eren les còpies després d'estripar l'original?|Volved a «El mensaje que viaja»: ¿dónde estaban las copias después de romper el original?"],
      ["Pensa que l'empremta digital només és dolenta i té por de publicar res.|Piensa que la huella digital solo es mala y tiene miedo de publicar nada.",
        "Recorda-li les empremtes que sumen: el pa de l'Àlex, un comentari amable, el mural. Es tracta de pensar abans, no de tenir por.|Recuérdale las huellas que suman: el pan de Àlex, un comentario amable, el mural. Se trata de pensar antes, no de tener miedo."],
      ["Considera que una broma no fa mal si a ell li fa gràcia.|Considera que una broma no hace daño si a él le hace gracia.",
        "Pregunta: i a la persona que surt a la foto, li fa gràcia? Qui decideix si es publica?|Pregunta: ¿y a la persona que sale en la foto, le hace gracia? ¿Quién decide si se publica?"],
      ["Només es fa una pregunta del semàfor (és amable?) i oblida si és veritat.|Solo se hace una pregunta del semáforo (¿es amable?) y olvida si es verdad.",
        "A l'esborrany de la Carla, quina pista falla a «És veritat?»? (El rumor de la Marta.)|En el borrador de Carla, ¿qué pista falla en «¿Es verdad?»? (El rumor de Marta.)"],
      ["Explica que algú ha publicat una cosa seva que no li agrada.|Explica que alguien ha publicado algo suyo que no le gusta.",
        "Escolta'l, agraeix-li que ho expliqui i digues-li que no és culpa seva. Ajuda'l a pensar amb quin adult en parlarà; si cal, segueix el protocol del centre.|Escúchale, agradécele que lo cuente y dile que no es culpa suya. Ayúdale a pensar con qué adulto lo hablará; si hace falta, sigue el protocolo del centro."]
    ],
    diff: {
      mes: "Per anar més enllà: reescriure en verd tot l'esborrany de la Carla i comparar-lo amb el d'un company/a. Debat: hauríem de poder demanar que s'esborrin coses nostres antigues d'internet? (A Europa, hi ha lleis que permeten demanar que s'esborrin algunes dades personals; ho fa un adult.) Què vol dir que el que publiquem «parla de nosaltres»?|Para ir más allá: reescribir en verde todo el borrador de Carla y compararlo con el de un compañero/a. Debate: ¿deberíamos poder pedir que se borren cosas nuestras antiguas de internet? (En Europa, hay leyes que permiten pedir que se borren algunos datos personales; lo hace un adulto.) ¿Qué quiere decir que lo que publicamos «habla de nosotros»?",
      menys: "Fer «Quina empremta deixa?» en parella, llegint en veu alta. Tenir les tres preguntes del semàfor escrites en una targeta, al costat de l'ordinador, per a l'esborrany de la Carla.|Hacer «¿Qué huella deja?» en pareja, leyendo en voz alta. Tener las tres preguntas del semáforo escritas en una tarjeta, al lado del ordenador, para el borrador de Carla."
    },
    aval: {
      ticket: ["Digues una cosa que deixa una empremta que suma i una que pot fer mal.|Di una cosa que deja una huella que suma y una que puede hacer daño.",
        "Quines tres preguntes et fas abans de publicar?|¿Qué tres preguntas te haces antes de publicar?"],
      rubric: [
        ['Empremta digital|Huella digital', "Explica què és, en dona exemples bons i dolents i sap que el que es publica es pot copiar.|Explica qué es, da ejemplos buenos y malos y sabe que lo que se publica se puede copiar.", "Dona exemples, però creu que esborrar-ho ho arregla tot.|Da ejemplos, pero cree que borrarlo lo arregla todo."],
        ['El semàfor|El semáforo', "Fa servir les tres preguntes per decidir i reescriu un missatge perquè sigui verd.|Usa las tres preguntas para decidir y reescribe un mensaje para que sea verde.", "Recorda alguna pregunta, però li costa aplicar-la a un missatge concret.|Recuerda alguna pregunta, pero le cuesta aplicarla a un mensaje concreto."],
        ['Respecte als altres|Respeto a los demás', "Demana permís abans de publicar res d'algú i proposa com reparar un error.|Pide permiso antes de publicar nada de alguien y propone cómo reparar un error.", "Sap que cal permís, però considera que les bromes no fan mal.|Sabe que hace falta permiso, pero considera que las bromas no hacen daño."]
      ]
    },
    casa: "A casa podeu fer «La publicació que suma»: l'infant escriu en un paper una publicació que deixi bona empremta, li fa el semàfor i decidiu junts si es podria publicar i amb qui. També és un bon moment per acordar que, abans de penjar una foto d'algú de la família, li demanem permís (i al revés: els adults també el demanen als infants).|En casa podéis hacer «La publicación que suma»: el niño o la niña escribe en un papel una publicación que deje buena huella, le hace el semáforo y decidís juntos si se podría publicar y con quién. También es un buen momento para acordar que, antes de subir una foto de alguien de la familia, le pedimos permiso (y al revés: los adultos también se lo piden a los niños).",
    slides: [
      { id: 's1', k: 'portada', t: "L'empremta digital|La huella digital", x: "Avui descobrirem el rastre que deixem a internet i com fer que sumi.|Hoy descubriremos el rastro que dejamos en internet y cómo hacer que sume.",
        nota: "Presenta l'objectiu: no es tracta de tenir por de publicar, sinó de pensar abans.|Presenta el objetivo: no se trata de tener miedo de publicar, sino de pensar antes." },
      { id: 's2', k: 'repas', t: 'Recordes? Dades i desconeguts|¿Recuerdas? Datos y desconocidos', punts: ["Les dades personals es guarden.|Los datos personales se guardan.", 'Fotos: mira el fons.|Fotos: mira el fondo.', 'Desconegut: no contesto, bloquejo i ho explico.|Desconocido: no contesto, bloqueo y lo explico.'],
        nota: "Pregunta qui ha fet l'escut a casa. Que algú expliqui el lema dels desconeguts.|Pregunta quién ha hecho el escudo en casa. Que alguien explique el lema de los desconocidos." },
      { id: 's3', k: 'pregunta', t: 'Petjades a la sorra|Huellas en la arena', x: "Què passa amb les petjades a la platja quan puja la marea? I a internet?|¿Qué pasa con las huellas en la playa cuando sube la marea? ¿Y en internet?",
        nota: "Recull idees. Guarda per al final la conclusió: a internet no hi ha marea que ho esborri tot.|Recoge ideas. Guarda para el final la conclusión: en internet no hay marea que lo borre todo." },
      { id: 's4', k: 'anim', t: 'Cada clic deixa una petjada|Cada clic deja una huella', anim: 'd1rastre', x: "Fotos, comentaris, «m'agrada» i cerques formen la teva empremta digital.|Fotos, comentarios, «me gusta» y búsquedas forman tu huella digital.",
        nota: "Remarca que l'empremta també pot ser bona: un treball de què estàs orgullós/osa, un comentari amable.|Remarca que la huella también puede ser buena: un trabajo del que estás orgulloso/a, un comentario amable." },
      { id: 's5', k: 'anim', t: 'El que publiques es pot copiar|Lo que publicas se puede copiar', anim: 'd1copia', x: "L'original s'esborra, però les captures es poden quedar.|El original se borra, pero las capturas se pueden quedar.",
        nota: "Pregunta com es pot copiar una publicació: captura, reenviar, fer una foto de la pantalla…|Pregunta cómo se puede copiar una publicación: captura, reenviar, hacer una foto de la pantalla…" },
      { id: 's6', k: 'concepte', t: 'El semàfor abans de publicar|El semáforo antes de publicar', pic: 'img/ment/atu.webp',
        punts: ['Vermell: para un moment.|Rojo: para un momento.', "Groc: és amable? És veritat? M'importaria que ho veiés tothom?|Amarillo: ¿es amable? ¿Es verdad? ¿Me importaría que lo viera todo el mundo?", 'Verd: si tot és que sí, endavant. Si dubtes, no ho publiquis.|Verde: si todo es que sí, adelante. Si dudas, no lo publiques.'],
        nota: "Feu que la classe digui les tres preguntes en veu alta. Les farem servir tota la sessió.|Haced que la clase diga las tres preguntas en voz alta. Las usaremos toda la sesión." },
      { id: 's7', k: 'media', t: 'Una empremta que suma|Una huella que suma', x: "Què diu de l'Àlex aquesta publicació?|¿Qué dice de Àlex esta publicación?",
        media: { k: 'dig', kind: 'post', from: 'Àlex_Construeix|Àlex_Construye', av: '🦉', when: 'fa 2 dies|hace 2 días', html: "He après a fer pa amb l'avi! Ha quedat una mica torrat, però boníssim. Gràcies, avi! ⭐|¡He aprendido a hacer pan con el abuelo! Ha quedado un poco tostado, pero buenísimo. ¡Gracias, abuelo! ⭐" },
        nota: "Introdueix la paraula reputació: la idea que els altres es fan de nosaltres, també pel que publiquem.|Introduce la palabra reputación: la idea que los demás se hacen de nosotros, también por lo que publicamos." },
      { id: 's8', k: 'media', t: 'La foto és de qui hi surt|La foto es de quien sale', x: 'Abans de publicar una foto on surt algú, demana-li permís.|Antes de publicar una foto donde sale alguien, pídele permiso.',
        media: chat('Carla|Carla', '🐱', `<div class="dm me">Puc penjar la foto de l'excursió on surts tu?</div><div class="dm them">Aquesta no, que tinc els ulls tancats 😅 La del riu sí!</div>|<div class="dm me">¿Puedo subir la foto de la excursión donde sales tú?</div><div class="dm them">Esta no, que tengo los ojos cerrados 😅 ¡La del río sí!</div>`),
        nota: "Si la persona diu que no, es respecta. Pregunta com se sentirien si algú pengés una foto seva sense preguntar.|Si la persona dice que no, se respeta. Pregunta cómo se sentirían si alguien subiera una foto suya sin preguntar." },
      { id: 's9', k: 'pregunta', t: 'Esborrar ho arregla tot?|¿Borrar lo arregla todo?', punts: ['Esborrar ajuda, però potser ja n\'hi ha còpies.|Borrar ayuda, pero quizá ya hay copias.', 'Si ha fet mal, demano perdó.|Si ha hecho daño, pido perdón.', "Si no se soluciona, ho explico a un adult de confiança.|Si no se soluciona, se lo explico a un adulto de confianza."],
        nota: "Tothom s'equivoca: el més important és reparar-ho. No es tracta de culpar ningú.|Todo el mundo se equivoca: lo más importante es repararlo. No se trata de culpar a nadie." },
      { id: 's10', k: 'activitat', t: 'El missatge que viatja|El mensaje que viaja', timer: 5,
        punts: ['Publico un missatge de paper.|Publico un mensaje de papel.', 'Cada grup té 30 segons per fer-ne una «captura».|Cada grupo tiene 30 segundos para hacer una «captura».', "Ara l'esborro… on és el missatge?|Ahora lo borro… ¿dónde está el mensaje?"],
        nota: "Estripa l'original davant de tothom. Pregunta quants missatges hi ha ara: tants com grups.|Rompe el original delante de todos. Pregunta cuántos mensajes hay ahora: tantos como grupos." },
      { id: 's11', k: 'activitat', t: 'El semàfor de les publicacions|El semáforo de las publicaciones', timer: 7,
        punts: ['Llegiu cada publicació de paper.|Leed cada publicación de papel.', 'Feu-li les tres preguntes.|Hacedle las tres preguntas.', 'Poseu-la a la cartolina vermella, groga o verda.|Ponedla en la cartulina roja, amarilla o verde.', 'Reescriviu en verd una de les vermelles.|Reescribid en verde una de las rojas.'],
        nota: "Hi ha publicacions dubtoses (grogues): el que compta és el debat del grup.|Hay publicaciones dudosas (amarillas): lo que cuenta es el debate del grupo." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ["Obre la sessió «L'empremta digital».|Abre la sesión «La huella digital».", 'Fes la missió, «Descobreix» i «Mans a l\'obra».|Haz la misión, «Descubre» y «Manos a la obra».', "Investiga què diu internet de l'Àlex.|Investiga qué dice internet de Àlex.", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "A la cerca de l'Àlex, que llegeixin també els resultats bons.|En la búsqueda de Àlex, que lean también los resultados buenos." },
      { id: 's13', k: 'activitat', t: 'Pausa: el semàfor|Pausa: el semáforo',
        punts: ['Vermell: quiets com estàtues.|Rojo: quietos como estatuas.', 'Groc: el dit al front, pensant.|Amarillo: el dedo en la frente, pensando.', 'Verd: caminem sense moure\'ns del lloc!|Verde: ¡caminamos sin movernos del sitio!'],
        nota: "Digues els colors a ritme variable. Després, a l'app: els reptes.|Di los colores a ritmo variable. Después, en la app: los retos." },
      { id: 's14', k: 'repte', t: 'Reptes: pensa abans de publicar|Retos: piensa antes de publicar', timer: 10,
        punts: ['1. El grup de classe i la foto d\'en Jan|1. El grupo de clase y la foto de Jan', "2. L'esborrany de la Carla: fes-li el semàfor|2. El borrador de Carla: hazle el semáforo", '3. El comentari que et penedeixes d\'haver escrit|3. El comentario que te arrepientes de haber escrito', '4. Quina publicació suma?|4. ¿Qué publicación suma?'],
        nota: "Al xat del grup, que provin també el camí arriscat: veuran com es pot reparar.|En el chat del grupo, que prueben también el camino arriesgado: verán cómo se puede reparar." },
      { id: 's15', k: 'activitat', t: 'Crea: el mural que suma|Crea: el mural que suma', timer: 5, x: "Escriu en un post-it una publicació que deixi bona empremta, fes-li el semàfor amb un company o companya i enganxa-la al mural.|Escribe en un pósit una publicación que deje buena huella, hazle el semáforo con un compañero o compañera y pégala en el mural.",
        nota: "Recorda: amb l'àlies, sense dades personals. Celebra la varietat del mural.|Recuerda: con el alias, sin datos personales. Celebra la variedad del mural." },
      { id: 's16', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy',
        punts: ["Tot el que fem a internet deixa empremta.|Todo lo que hacemos en internet deja huella.", 'El que es publica es pot copiar: esborrar no ho treu tot.|Lo que se publica se puede copiar: borrar no lo quita todo.', 'Abans de publicar: semàfor i permís.|Antes de publicar: semáforo y permiso.'],
        nota: "Torna a les petjades a la sorra: a internet, les petjades les cuidem nosaltres.|Vuelve a las huellas en la arena: en internet, las huellas las cuidamos nosotros." },
      { id: 's17', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Una empremta que suma i una que pot fer mal.|Una huella que suma y una que puede hacer daño.', 'Les tres preguntes del semàfor.|Las tres preguntas del semáforo.'],
        nota: "La setmana vinent farem el projecte del decàleg: demana'ls que pensin quina norma hi posarien.|La semana que viene haremos el proyecto del decálogo: pídeles que piensen qué norma pondrían." }
    ],
    print: [
      { id: 'p1', t: 'Publicacions per al semàfor|Publicaciones para el semáforo', k: 'targetes',
        intro: "Un paquet per grup de 4. Totes les publicacions són inventades. Feu-los el semàfor i poseu-les a la cartolina vermella, groga o verda.|Un paquete por grupo de 4. Todas las publicaciones son inventadas. Hacedles el semáforo y ponedlas en la cartulina roja, amarilla o verde.",
        items: [
          { t: "«He après a fer pa amb l'avi!» ⭐|«¡He aprendido a hacer pan con el abuelo!» ⭐", n: 1 },
          { t: '«Mireu en Pol caient al fang» (foto sense permís) 👀|«Mirad a Pol cayéndose al barro» (foto sin permiso) 👀', n: 1 },
          { t: '«La monitora és una pesada» 😟|«La monitora es una pesada» 😟', n: 1 },
          { t: '«Ara som al parc de la Font fins a les 7» 🧭|«Ahora estamos en el parque de la Fuente hasta las 7» 🧭', n: 1 },
          { t: '«Felicitats, Ona! Que tinguis un dia genial» 🎉|«¡Felicidades, Ona! Que tengas un día genial» 🎉', n: 1 },
          { t: '«Diuen que en Nil ha suspès» (un rumor) 👀|«Dicen que Nil ha suspendido» (un rumor) 👀', n: 1 },
          { t: '«El meu dibuix del drac per al concurs» 🐉|«Mi dibujo del dragón para el concurso» 🐉', n: 1 },
          { t: '«Demà no hi haurà ningú a casa meva» 🗺️|«Mañana no habrá nadie en mi casa» 🗺️', n: 1 },
          { t: '«El nou de la classe és rarísim» 😟|«El nuevo de la clase es rarísimo» 😟', n: 1 },
          { t: "«Gràcies a tothom per ajudar-me a estudiar!» 🤝|«¡Gracias a todos por ayudarme a estudiar!» 🤝", n: 1 },
          { t: "Una foto del grup de teatre, sense haver preguntat 🎭|Una foto del grupo de teatro, sin haber preguntado 🎭", n: 1 },
          { t: '«Mireu la meva maqueta del volcà!» 🌋|«¡Mirad mi maqueta del volcán!» 🌋', n: 1 }
        ] },
      { id: 'p2', t: 'Reescriu-ho en verd|Reescríbelo en verde', k: 'fitxa',
        intro: "Cada missatge no passa alguna pregunta del semàfor. Digues quina i reescriu-lo perquè sigui verd.|Cada mensaje no pasa alguna pregunta del semáforo. Di cuál y reescríbelo para que sea verde.",
        items: [
          { q: "«La monitora és una pesada, però hem vist cavalls.»|«La monitora es una pesada, pero hemos visto caballos.»", sol: "No és amable. Per exemple: «Avui hem vist cavalls a l'excursió!»|No es amable. Por ejemplo: «¡Hoy hemos visto caballos en la excursión!»" },
          { q: "«Diuen que la Marta ha suspès totes les notes.»|«Dicen que Marta ha suspendido todas las notas.»", sol: "No sabem si és veritat i pot fer mal: no es publica. Si es vol dir alguna cosa, millor una d'amable sobre un mateix.|No sabemos si es verdad y puede hacer daño: no se publica. Si se quiere decir algo, mejor algo amable sobre uno mismo." },
          { q: "«Ara som al càmping de la Riera fins diumenge.»|«Ahora estamos en el camping de la Riera hasta el domingo.»", sol: "Dona la ubicació. Per exemple: «Quina excursió més xula aquest cap de setmana!» (i les fotos, en tornar a casa).|Da la ubicación. Por ejemplo: «¡Qué excursión más chula este fin de semana!» (y las fotos, al volver a casa)." },
          { q: "«Mireu en Pol caient al fang 😂» (amb la foto).|«Mirad a Pol cayéndose al barro 😂» (con la foto).", sol: "No és amable i no hi ha permís. Primer cal preguntar a en Pol; si diu que no, no es publica.|No es amable y no hay permiso. Primero hay que preguntar a Pol; si dice que no, no se publica.", big: true }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el meu decàleg ---------- */
  'd1-4': {
    obj: [
      "L'alumne/a recorda i relaciona el que ha après a la unitat: contrasenyes, dades i privadesa, empremta digital i demanar ajuda.|El alumno/a recuerda y relaciona lo que ha aprendido en la unidad: contraseñas, datos y privacidad, huella digital y pedir ayuda.",
      "L'alumne/a distingeix una norma clara (concreta, en positiu i curta) d'una massa general i la millora.|El alumno/a distingue una norma clara (concreta, en positivo y corta) de una demasiado general y la mejora.",
      "L'alumne/a crea un decàleg personal de deu normes organitzades per temes, amb la norma d'or i tres adults de confiança.|El alumno/a crea un decálogo personal de diez normas organizadas por temas, con la norma de oro y tres adultos de confianza.",
      "L'alumne/a presenta el seu cartell i dona comentaris amables i útils al d'un company/a.|El alumno/a presenta su cartel y da comentarios amables y útiles al de un compañero/a."
    ],
    comp: [
      "Competència digital (CD4 · seguretat i benestar): fer-se un pla propi per estar segur a internet|Competencia digital (CD4 · seguridad y bienestar): hacerse un plan propio para estar seguro en internet",
      "Comunicació lingüística: escriure normes clares i presentar-les oralment|Comunicación lingüística: escribir normas claras y presentarlas oralmente",
      "Competència personal i social: comprometre's amb uns hàbits i donar comentaris constructius|Competencia personal y social: comprometerse con unos hábitos y dar comentarios constructivos",
      "Educació artística: dissenyar un cartell clar i atractiu|Educación artística: diseñar un cartel claro y atractivo"
    ],
    vocab: [
      ['Decàleg|Decálogo', "Una llista de deu normes («deca» vol dir deu).|Una lista de diez normas («deca» quiere decir diez)."],
      ['Norma|Norma', "Una cosa que et proposes fer sempre, en una situació concreta.|Algo que te propones hacer siempre, en una situación concreta."],
      ['Concreta|Concreta', "Que diu exactament què faràs i quan.|Que dice exactamente qué harás y cuándo."],
      ['En positiu|En positivo', "Que diu què fer, no només què no fer.|Que dice qué hacer, no solo qué no hacer."],
      ["Norma d'or|Norma de oro", "La més important: si alguna cosa d'internet et fa sentir malament, ho expliques a un adult de confiança.|La más importante: si algo de internet te hace sentir mal, se lo explicas a un adulto de confianza."],
      ['Cartell|Cartel', "Un full gran que es penja perquè molta gent vegi un missatge.|Una hoja grande que se cuelga para que mucha gente vea un mensaje."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el meu decàleg»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: mi decálogo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Cartolines A3, retoladors, colors, tisores i cola|Cartulinas A3, rotuladores, colores, tijeras y pegamento",
        "Post-its de quatre colors (un per tema) per a la pluja d'idees|Pósits de cuatro colores (uno por tema) para la lluvia de ideas"
      ],
      imprimir: ['Plantilla del decàleg|Plantilla del decálogo', 'Icones per al cartell|Iconos para el cartel'],
      prep: [
        "Imprimir una plantilla del decàleg per alumne/a i un full d'icones per cada dos alumnes.|Imprimir una plantilla del decálogo por alumno/a y una hoja de iconos por cada dos alumnos.",
        "Preparar a la pissarra quatre columnes per a la pluja d'idees: Contrasenyes, Dades i privadesa, Empremta digital i Demanar ajuda.|Preparar en la pizarra cuatro columnas para la lluvia de ideas: Contraseñas, Datos y privacidad, Huella digital y Pedir ayuda.",
        "Recuperar el mural de les frases i el mural que suma de les sessions anteriors per inspirar-se.|Recuperar el mural de las frases y el mural que suma de las sesiones anteriores para inspirarse.",
        "Pensar un espai per penjar els cartells (passadís, classe) i avisar-ne el centre.|Pensar un espacio para colgar los carteles (pasillo, clase) y avisar al centro."
      ]
    },
    plan: [
      { min: 5, t: "Repàs i l'encàrrec|Repaso y el encargo", fase: 'inici',
        fa: "Feu un repàs ràpid de la unitat amb preguntes llampec (una per tema). Després presenta l'encàrrec: l'escola vol cartells amb normes per estar segurs a internet, i els farem nosaltres.|Haced un repaso rápido de la unidad con preguntas relámpago (una por tema). Después presenta el encargo: el colegio quiere carteles con normas para estar seguros en internet, y los haremos nosotros.",
        diu: ["Què fa forta una contrasenya? Quines dades es guarden? Què és l'empremta digital?|¿Qué hace fuerte una contraseña? ¿Qué datos se guardan? ¿Qué es la huella digital?",
          "Avui no aprendrem coses noves: farem servir tot el que ja sabeu.|Hoy no aprenderemos cosas nuevas: usaremos todo lo que ya sabéis."],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 8, t: 'Com és una bona norma?|¿Cómo es una buena norma?', fase: 'teoria',
        fa: "Explica què és un decàleg i les tres característiques d'una bona norma amb l'animació. Feu entre tots la pregunta «Funciona o cal millorar-la?» i milloreu en veu alta les que són massa generals. Presenta els quatre temes i la norma d'or amb el xat de l'avi.|Explica qué es un decálogo y las tres características de una buena norma con la animación. Haced entre todos la pregunta «¿Funciona o hay que mejorarla?» y mejorad en voz alta las que son demasiado generales. Presenta los cuatro temas y la norma de oro con el chat del abuelo.",
        diu: ["«Compte amb internet»: què hauria de fer exactament algú que llegeix aquesta norma?|«Cuidado con internet»: ¿qué tendría que hacer exactamente alguien que lee esta norma?",
          "Com la diríem en positiu?|¿Cómo la diríamos en positivo?",
          "Explicar-ho no és xivar-se: és cuidar-se.|Contarlo no es chivarse: es cuidarse."],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: 'Tot el grup|Todo el grupo' },
      { min: 12, t: "Pluja d'idees: el mur de normes|Lluvia de ideas: el muro de normas", fase: 'desconnectat',
        fa: "Grups de 4. Cada grup escriu en post-its tantes normes com pugui (una per post-it, del color del tema) i les enganxa a la columna de la pissarra que toca. Després, cada grup tria dues normes d'un altre grup que siguin massa generals i les millora. Llegiu-ne algunes en veu alta: és el banc d'idees per als cartells.|Grupos de 4. Cada grupo escribe en pósits tantas normas como pueda (una por pósit, del color del tema) y las pega en la columna de la pizarra que toca. Después, cada grupo elige dos normas de otro grupo que sean demasiado generales y las mejora. Leed algunas en voz alta: es el banco de ideas para los carteles.",
        diu: ["Aquesta norma, és concreta? Està en positiu? És curta?|Esta norma, ¿es concreta? ¿Está en positivo? ¿Es corta?",
          "A quina columna va? Pot anar a dues?|¿A qué columna va? ¿Puede ir a dos?"],
        slides: ['s9', 's10'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 4|Grupos de 4' },
      { min: 15, t: "A l'ordinador: el decàleg d'en Bit i el meu|En el ordenador: el decálogo de Bit y el mío", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a «El teu decàleg», on tria una norma per tema i la desa. Feu tots junts la pausa activa quan hi arribin. Al xat d'en Bit, anima'ls a provar també les respostes que no funcionen per veure com en Bit els fa pensar.|Cada alumno/a hace la sesión hasta «Tu decálogo», donde elige una norma por tema y la guarda. Haced todos juntos la pausa activa cuando lleguen. En el chat de Bit, anímalos a probar también las respuestas que no funcionan para ver cómo Bit les hace pensar.",
        diu: ["Com has ajudat en Bit a millorar la primera norma?|¿Cómo has ayudado a Bit a mejorar la primera norma?",
          "De les tres normes de cada tema, quina és més important per a tu? Per què?|De las tres normas de cada tema, ¿cuál es más importante para ti? ¿Por qué?"],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins a «El teu decàleg»: les dues preguntes de repàs, la història, les quatre targetes, «Norma que funciona?», els passos del projecte, les dues preguntes, el decàleg d'en Bit, la pausa, les normes per temes i la tria de les cinc normes.|Desde «Recuerda» hasta «Tu decálogo»: las dos preguntas de repaso, la historia, las cuatro tarjetas, «¿Norma que funciona?», los pasos del proyecto, las dos preguntas, el decálogo de Bit, la pausa, las normas por temas y la elección de las cinco normas.", org: 'Individual|Individual' },
      { min: 12, t: 'Crea: el meu cartell|Crea: mi cartel', fase: 'crea',
        fa: "Cada alumne/a fa el seu cartell a la cartolina amb la plantilla: títol amb l'àlies, les cinc normes de l'app, cinc més de pròpies (poden venir del mur de normes), la norma d'or ben grossa a sota amb els tres adults de confiança i les icones dels temes. Passeja i ajuda a millorar normes generals amb preguntes.|Cada alumno/a hace su cartel en la cartulina con la plantilla: título con el alias, las cinco normas de la app, cinco más propias (pueden venir del muro de normas), la norma de oro bien grande debajo con los tres adultos de confianza y los iconos de los temas. Pasea y ayuda a mejorar normas generales con preguntas.",
        diu: ["Aquesta norma, què vol dir exactament? Quan la faràs servir?|Esta norma, ¿qué quiere decir exactamente? ¿Cuándo la usarás?",
          "No t'oblidis de la norma d'or i dels teus tres adults!|¡No te olvides de la norma de oro y de tus tres adultos!"],
        slides: ['s13'], app: "Pas «El cartell del decàleg» (fet en paper a classe: poden tocar «Ho hem fet!»).|Paso «El cartel del decálogo» (hecho en papel en clase: pueden tocar «¡Lo hemos hecho!»).", org: 'Individual|Individual' },
      { min: 8, t: 'La galeria i el tiquet de sortida|La galería y el ticket de salida', fase: 'tancament',
        fa: "Pengeu els cartells. Feu una galeria: cada alumne/a mira el cartell d'un company/a i li diu dues coses que li agraden i una idea per millorar. Dos o tres voluntaris presenten una norma del seu decàleg. Acabeu amb el resum, les preguntes finals de l'app i el tiquet.|Colgad los carteles. Haced una galería: cada alumno/a mira el cartel de un compañero/a y le dice dos cosas que le gustan y una idea para mejorar. Dos o tres voluntarios presentan una norma de su decálogo. Terminad con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Digues dues coses que t'agraden del cartell i una idea per millorar-lo.|Di dos cosas que te gustan del cartel y una idea para mejorarlo.",
          "Quina norma creus que et costarà més de complir?|¿Qué norma crees que te costará más cumplir?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup i per parelles|Todo el grupo y por parejas' }
    ],
    errors: [
      ["Escriu normes molt generals («sigues bo», «compte amb tot»).|Escribe normas muy generales («sé bueno», «cuidado con todo»).",
        "Pregunta: què faràs exactament? Quan? Que hi afegeixi un «quan…» o un «abans de…».|Pregunta: ¿qué harás exactamente? ¿Cuándo? Que añada un «cuando…» o un «antes de…»."],
      ["Escriu totes les normes en negatiu («no…, no…, no…»).|Escribe todas las normas en negativo («no…, no…, no…»).",
        "Ajuda'l a girar-les: «No diguis la contrasenya» es pot dir «La meva contrasenya només la sé jo i la meva família».|Ayúdale a girarlas: «No digas la contraseña» se puede decir «Mi contraseña solo la sé yo y mi familia»."],
      ["Copia totes les normes del company/a.|Copia todas las normas del compañero/a.",
        "Inspirar-se està bé, però que en triï almenys tres que siguin importants per a ell/ella i expliqui per què.|Inspirarse está bien, pero que elija al menos tres que sean importantes para él/ella y explique por qué."],
      ["Oblida la norma d'or o els adults de confiança.|Olvida la norma de oro o los adultos de confianza.",
        "Recorda-li que és la norma més important i que va a sota de tot, ben grossa.|Recuérdale que es la norma más importante y que va debajo de todo, bien grande."],
      ["Escriu normes que fan por o exageren («internet és perillós, no el facis servir»).|Escribe normas que dan miedo o exageran («internet es peligroso, no lo uses»).",
        "Recorda que el decàleg dona eines: què pots fer tu per estar bé a internet?|Recuerda que el decálogo da herramientas: ¿qué puedes hacer tú para estar bien en internet?"]
    ],
    diff: {
      mes: "Per anar més enllà: fer una versió del decàleg per a infants més petits (amb dibuixos i paraules molt fàcils) o per a la família, amb normes també per als adults. Debat: quina norma creieu que costa més de complir i per què? Com ens podem ajudar a complir-la?|Para ir más allá: hacer una versión del decálogo para niños más pequeños (con dibujos y palabras muy fáciles) o para la familia, con normas también para los adultos. Debate: ¿qué norma creéis que cuesta más cumplir y por qué? ¿Cómo nos podemos ayudar a cumplirla?",
      menys: "Partir de les cinc normes triades a l'app i afegir-ne només dues o tres de pròpies, triades del mur de normes. Fer servir les icones retallades per organitzar el cartell per temes abans d'escriure.|Partir de las cinco normas elegidas en la app y añadir solo dos o tres propias, elegidas del muro de normas. Usar los iconos recortados para organizar el cartel por temas antes de escribir."
    },
    aval: {
      ticket: ["Llegeix la teva norma preferida del decàleg: per què és important per a tu?|Lee tu norma favorita del decálogo: ¿por qué es importante para ti?",
        "Quina és la norma d'or i qui són els teus adults de confiança?|¿Cuál es la norma de oro y quiénes son tus adultos de confianza?"],
      rubric: [
        ['Normes clares|Normas claras', "Escriu normes concretes, en positiu i curtes, i en millora alguna de general.|Escribe normas concretas, en positivo y cortas, y mejora alguna general.", "Escriu normes encertades però generals o en negatiu.|Escribe normas acertadas pero generales o en negativo."],
        ['Contingut de la unitat|Contenido de la unidad', "Hi ha normes dels quatre temes: contrasenyes, dades i privadesa, empremta digital i demanar ajuda.|Hay normas de los cuatro temas: contraseñas, datos y privacidad, huella digital y pedir ayuda.", "Les normes se centren en un o dos temes.|Las normas se centran en uno o dos temas."],
        ["Norma d'or i presentació|Norma de oro y presentación", "Inclou la norma d'or amb tres adults de confiança i presenta el cartell explicant-ne una norma.|Incluye la norma de oro con tres adultos de confianza y presenta el cartel explicando una norma.", "Inclou la norma d'or, però li costa explicar per què és important.|Incluye la norma de oro, pero le cuesta explicar por qué es importante."]
      ]
    },
    casa: "A casa, l'infant us presentarà el seu decàleg. Podeu penjar-lo a prop de l'ordinador o la tauleta i fer-ne un de familiar: quines normes ens posem tots, adults inclosos? Si alguna norma us sembla difícil de complir, parleu-ne junts. I recordeu-li sovint la norma d'or: sempre us pot explicar el que li passi a internet.|En casa, el niño o la niña os presentará su decálogo. Podéis colgarlo cerca del ordenador o la tablet y hacer uno familiar: ¿qué normas nos ponemos todos, adultos incluidos? Si alguna norma os parece difícil de cumplir, habladlo juntos. Y recordadle a menudo la norma de oro: siempre os puede contar lo que le pase en internet.",
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: el meu decàleg|Proyecto: mi decálogo', x: "Avui farem servir tot el que hem après per crear les nostres normes per estar segurs a la xarxa.|Hoy usaremos todo lo que hemos aprendido para crear nuestras normas para estar seguros en la red.",
        nota: "Presenta el projecte com la culminació de la unitat: són experts i experts en seguretat a la xarxa.|Presenta el proyecto como la culminación de la unidad: son expertos y expertas en seguridad en la red." },
      { id: 's2', k: 'repas', t: 'Preguntes llampec|Preguntas relámpago', punts: ['Què fa forta una contrasenya?|¿Qué hace fuerte una contraseña?', 'Digues una dada que es guarda.|Di un dato que se guarda.', 'Què fas si un desconegut et demana una foto?|¿Qué haces si un desconocido te pide una foto?', 'Quines són les preguntes del semàfor?|¿Cuáles son las preguntas del semáforo?'],
        nota: "Una pregunta per tema. Que contestin alumnes diferents.|Una pregunta por tema. Que contesten alumnos diferentes." },
      { id: 's3', k: 'concepte', t: "L'encàrrec de l'escola|El encargo del colegio", punts: ["L'escola vol cartells amb normes per anar segurs per internet.|El colegio quiere carteles con normas para ir seguros por internet.", 'Cada alumne/a en farà un: el seu decàleg.|Cada alumno/a hará uno: su decálogo.', 'Els penjarem perquè els vegi tothom.|Los colgaremos para que los vea todo el mundo.'],
        nota: "Explica on es penjaran els cartells: dona sentit al projecte.|Explica dónde se colgarán los carteles: da sentido al proyecto." },
      { id: 's4', k: 'concepte', t: 'Què és un decàleg?|¿Qué es un decálogo?', pic: 'img/ment/lli.webp', punts: ['Deu normes («deca» vol dir deu).|Diez normas («deca» quiere decir diez).', 'Les tries tu.|Las eliges tú.', 'Per cuidar-te a tu i als altres.|Para cuidarte a ti y a los demás.'],
        nota: "Pregunta si coneixen altres paraules amb «deca» (decàmetre, decàgon).|Pregunta si conocen otras palabras con «deca» (decámetro, decágono)." },
      { id: 's5', k: 'anim', t: 'Una norma que funciona|Una norma que funciona', anim: 'd1norma', x: 'Concreta, en positiu i curta.|Concreta, en positivo y corta.',
        nota: "Feu que repeteixin les tres característiques: les faran servir per revisar els cartells.|Haced que repitan las tres características: las usarán para revisar los carteles." },
      { id: 's6', k: 'pregunta', t: 'Funciona o cal millorar-la?|¿Funciona o hay que mejorarla?', punts: ['«Compte amb internet»|«Cuidado con internet»', '«Abans de publicar, faig el semàfor»|«Antes de publicar, hago el semáforo»', '«No compartir mai res»|«No compartir nunca nada»', '«Faig servir un àlies, no el meu nom complet»|«Uso un alias, no mi nombre completo»'],
        nota: "Milloreu entre tots la primera i la tercera: què faries exactament?|Mejorad entre todos la primera y la tercera: ¿qué harías exactamente?" },
      { id: 's7', k: 'concepte', t: 'Els quatre temes|Los cuatro temas', pic: 'img/ment/cor.webp', punts: ['🔑 Contrasenyes|🔑 Contraseñas', '🛡️ Dades i privadesa|🛡️ Datos y privacidad', '🦉 Empremta digital|🦉 Huella digital', '🤝 Demanar ajuda|🤝 Pedir ayuda'],
        nota: "Són com les peces d'un trencaclosques: un bon decàleg en té de totes.|Son como las piezas de un rompecabezas: un buen decálogo tiene de todas." },
      { id: 's8', k: 'media', t: "La norma d'or|La norma de oro", x: "Si alguna cosa d'internet et fa sentir malament, ho expliques a un adult de confiança.|Si algo de internet te hace sentir mal, se lo explicas a un adulto de confianza.",
        media: chat('Avi|Abuelo', '🧑', `<div class="dm me">Avi, m'ha arribat un missatge estrany i no sé què fer 😟</div><div class="dm them">Gràcies per dir-m'ho! Has fet molt bé. Ara ho mirem junts 💛</div>|<div class="dm me">Abuelo, me ha llegado un mensaje raro y no sé qué hacer 😟</div><div class="dm them">¡Gracias por decírmelo! Has hecho muy bien. Ahora lo miramos juntos 💛</div>`),
        nota: "Remarca la resposta de l'avi: dona les gràcies i ajuda, no renya. Explicar-ho no és xivar-se.|Remarca la respuesta del abuelo: da las gracias y ayuda, no riñe. Contarlo no es chivarse." },
      { id: 's9', k: 'activitat', t: "Pluja d'idees: el mur de normes|Lluvia de ideas: el muro de normas", timer: 12,
        punts: ['Una norma per post-it, del color del tema.|Una norma por pósit, del color del tema.', 'Enganxeu-la a la columna que toca.|Pegadla en la columna que toca.', "Milloreu dues normes d'un altre grup.|Mejorad dos normas de otro grupo.", 'Llegim les millors en veu alta.|Leemos las mejores en voz alta.'],
        nota: "Deixa el mur penjat: serà el banc d'idees per als cartells.|Deja el muro colgado: será el banco de ideas para los carteles." },
      { id: 's10', k: 'activitat', t: 'La revisió en tres preguntes|La revisión en tres preguntas', punts: ['És concreta? Diu què faré exactament?|¿Es concreta? ¿Dice qué haré exactamente?', 'Està en positiu?|¿Está en positivo?', 'És curta i fàcil de recordar?|¿Es corta y fácil de recordar?'],
        nota: "Deixa aquesta diapositiva projectada durant la pluja d'idees i el cartell.|Deja esta diapositiva proyectada durante la lluvia de ideas y el cartel." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre «Projecte: el meu decàleg».|Abre «Proyecto: mi decálogo».', "Ajuda en Bit a millorar el seu decàleg.|Ayuda a Bit a mejorar su decálogo.", 'Tria una norma per tema i desa el teu decàleg.|Elige una norma por tema y guarda tu decálogo.', 'Para al pas «El cartell del decàleg».|Para en el paso «El cartel del decálogo».'],
        nota: "Les cinc normes que triïn a l'app seran la base del cartell.|Las cinco normas que elijan en la app serán la base del cartel." },
      { id: 's12', k: 'activitat', t: 'Pausa: deu normes, deu moviments|Pausa: diez normas, diez movimientos', punts: ['Compteu de l\'1 al 10 en veu alta.|Contad del 1 al 10 en voz alta.', 'A cada número, un moviment diferent.|En cada número, un movimiento diferente.', 'Sense repetir-ne cap!|¡Sin repetir ninguno!'],
        nota: "Feu-ho tots junts quan la majoria hi arribi.|Hacedlo todos juntos cuando la mayoría llegue." },
      { id: 's13', k: 'activitat', t: 'Crea: el meu cartell|Crea: mi cartel', timer: 12,
        punts: ["Títol: «El decàleg de…» (amb el teu àlies).|Título: «El decálogo de…» (con tu alias).", "Les 5 normes de l'app + 5 de teves.|Las 5 normas de la app + 5 tuyas.", "La norma d'or a sota, ben grossa, amb tres adults de confiança.|La norma de oro debajo, bien grande, con tres adultos de confianza.", 'Les icones dels temes i molts colors!|¡Los iconos de los temas y muchos colores!'],
        nota: "Passeja i fes les tres preguntes de revisió a qui tingui normes generals.|Pasea y haz las tres preguntas de revisión a quien tenga normas generales." },
      { id: 's14', k: 'activitat', t: 'La galeria|La galería', timer: 5,
        punts: ["Mira el cartell d'un company o companya.|Mira el cartel de un compañero o compañera.", "Digues-li dues coses que t'agraden.|Dile dos cosas que te gustan.", 'I una idea per millorar-lo, amb amabilitat.|Y una idea para mejorarlo, con amabilidad.'],
        nota: "Modela tu primer un comentari amable i útil. Després, dos o tres voluntaris presenten una norma.|Modela tú primero un comentario amable y útil. Después, dos o tres voluntarios presentan una norma." },
      { id: 's15', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad',
        punts: ['Contrasenyes fortes, que no es deixen.|Contraseñas fuertes, que no se dejan.', 'Les dades personals es guarden, i els desconeguts no les reben.|Los datos personales se guardan, y los desconocidos no los reciben.', 'Pensem abans de publicar i demanem permís.|Pensamos antes de publicar y pedimos permiso.', "La norma d'or: sempre ho podem explicar a un adult de confiança.|La norma de oro: siempre lo podemos contar a un adulto de confianza."],
        nota: "Felicita el grup: han acabat la unitat i el seu primer projecte de Tech Digital.|Felicita al grupo: han terminado la unidad y su primer proyecto de Tech Digital." },
      { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida',
        punts: ['Llegeix la teva norma preferida: per què és important?|Lee tu norma favorita: ¿por qué es importante?', "Quina és la norma d'or i qui són els teus adults de confiança?|¿Cuál es la norma de oro y quiénes son tus adultos de confianza?"],
        nota: "Que s'emportin el cartell a casa la setmana vinent o deixeu-lo penjat a l'escola i doneu-los una foto per a la família.|Que se lleven el cartel a casa la semana que viene o dejadlo colgado en el colegio y dadles una foto para la familia." }
    ],
    print: [
      { id: 'p1', t: 'Plantilla del decàleg|Plantilla del decálogo', k: 'fitxa',
        intro: "Una per alumne/a. Escriu primer aquí el teu decàleg i després passa'l a la cartolina. Recorda: cada norma, concreta, en positiu i curta.|Una por alumno/a. Escribe primero aquí tu decálogo y después pásalo a la cartulina. Recuerda: cada norma, concreta, en positivo y corta.",
        items: [
          { q: '1 · 🔑 Contrasenyes:|1 · 🔑 Contraseñas:', sol: 'Per exemple: «Faig servir frases de contrasenya llargues i diferents per a cada compte».|Por ejemplo: «Uso frases de contraseña largas y diferentes para cada cuenta».' },
          { q: '2 · 🔑 Contrasenyes:|2 · 🔑 Contraseñas:', sol: 'Per exemple: «La meva contrasenya només la sé jo i la meva família».|Por ejemplo: «Mi contraseña solo la sé yo y mi familia».' },
          { q: '3 · 🛡️ Dades i privadesa:|3 · 🛡️ Datos y privacidad:', sol: "Per exemple: «L'adreça, el telèfon i l'escola no van a internet».|Por ejemplo: «La dirección, el teléfono y el colegio no van a internet»." },
          { q: '4 · 🛡️ Dades i privadesa:|4 · 🛡️ Datos y privacidad:', sol: 'Per exemple: «Miro el fons de les fotos abans de compartir-les».|Por ejemplo: «Miro el fondo de las fotos antes de compartirlas».' },
          { q: '5 · 👤 Desconeguts:|5 · 👤 Desconocidos:', sol: 'Per exemple: «Si un desconegut em demana dades o fotos, no contesto, el bloquejo i ho explico».|Por ejemplo: «Si un desconocido me pide datos o fotos, no contesto, lo bloqueo y lo explico».' },
          { q: '6 · 👤 Desconeguts:|6 · 👤 Desconocidos:', sol: "Per exemple: «Els secrets que em fan sentir malament no es guarden».|Por ejemplo: «Los secretos que me hacen sentir mal no se guardan»." },
          { q: '7 · 🦉 Empremta digital:|7 · 🦉 Huella digital:', sol: 'Per exemple: «Abans de publicar, faig el semàfor de les tres preguntes».|Por ejemplo: «Antes de publicar, hago el semáforo de las tres preguntas».' },
          { q: '8 · 🦉 Empremta digital:|8 · 🦉 Huella digital:', sol: "Per exemple: «Demano permís abans de penjar una foto d'algú».|Por ejemplo: «Pido permiso antes de subir una foto de alguien»." },
          { q: '9 · Una norma meva:|9 · Una norma mía:', sol: 'Qualsevol norma concreta, en positiu i curta.|Cualquier norma concreta, en positivo y corta.' },
          { q: "10 · 🤝 La norma d'or (i els meus tres adults de confiança):|10 · 🤝 La norma de oro (y mis tres adultos de confianza):", sol: "«Si alguna cosa d'internet em fa sentir malament, ho explico a un adult de confiança», amb tres noms.|«Si algo de internet me hace sentir mal, se lo explico a un adulto de confianza», con tres nombres.", big: true }
        ] },
      { id: 'p2', t: 'Icones per al cartell|Iconos para el cartel', k: 'targetes',
        intro: "Un full per cada dos alumnes. Retalleu les icones i enganxeu-les al cartell al costat de les normes de cada tema.|Una hoja por cada dos alumnos. Recortad los iconos y pegadlos en el cartel al lado de las normas de cada tema.",
        items: [
          { t: 'Contrasenyes 🔑|Contraseñas 🔑', n: 2 }, { t: 'Dades i privadesa 🛡️|Datos y privacidad 🛡️', n: 2 }, { t: 'Desconeguts 👤|Desconocidos 👤', n: 2 },
          { t: 'Empremta digital 🦉|Huella digital 🦉', n: 2 }, { t: "Norma d'or 🤝|Norma de oro 🤝", n: 2 }, { t: 'El meu decàleg 🏅|Mi decálogo 🏅', n: 2 }
        ] }
    ]
  }
  };
})());
