/* Numi Tech · Tech Digital · guies del professor. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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

/* ── unitat 2 ── */
/* Tech Digital · unitat 2 «Pensar abans de creure» · guia del professorat (d2-1 … d2-4)
   Material propi de Numi. Classe de 60 minuts; tots els exemples (Vilabit, XatAmics, FotoNuvi, AjudaBot…) són inventats. */
{
  // les demos de les diapositives (els mateixos artefactes de l'app, sense pistes clicables)
  const NEWS = { k: 'dig', kind: 'news', url: 'noticies-flash-24.xyz/ultima-hora|noticias-flash-24.xyz/ultima-hora',
    html: `<h3>ÚLTIMA HORA!!! DEMÀ TANQUEN TOTES LES ESCOLES!!!</h3><p style="font-size:30px;text-align:center">❄️❄️❄️</p><p>Segons fonts secretes, demà cauran dos metres de neu a Vilabit i no hi haurà classe enlloc.</p><p><small>Publicat el 14 de gener de 2019 · Sense autor</small></p><p><b>Comparteix-ho ara, abans que ho esborrin!</b></p>|<h3>¡¡¡ÚLTIMA HORA!!! ¡¡¡MAÑANA CIERRAN TODAS LAS ESCUELAS!!!</h3><p style="font-size:30px;text-align:center">❄️❄️❄️</p><p>Según fuentes secretas, mañana caerán dos metros de nieve en Vilabit y no habrá clase en ningún sitio.</p><p><small>Publicado el 14 de enero de 2019 · Sin autor</small></p><p><b>¡Compártelo ya, antes de que lo borren!</b></p>` };
  const PHOTO = { k: 'dig', kind: 'post', from: 'MeteoBrutal_88|MeteoBrutal_88', av: '❄️', when: '3 de juliol · ara mateix|3 de julio · ahora mismo',
    html: `<p>Increïble! Mireu com està la plaça de Vilabit ARA MATEIX!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">❄️⛄❄️</div><p><small>Foto: arxiu, gener de 2017</small></p><p>Compartiu-ho amb tothom!!</p>|<p>¡Increíble! ¡Mirad cómo está la plaza de Vilabit AHORA MISMO!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">❄️⛄❄️</div><p><small>Foto: archivo, enero de 2017</small></p><p>¡¡Compartidlo con todo el mundo!!</p>` };
  const SPIDER = { k: 'dig', kind: 'chat', from: 'AjudaBot (una IA de mentida)|AjudaBot (una IA de mentira)', av: '🤖',
    html: `<div class="dm me">Quantes potes té una aranya?</div><div class="dm them">Bona pregunta! Una aranya té 6 potes.</div><div class="dm me">Segur?</div><div class="dm them">Sí, segur! Totes les aranyes en tenen 6.</div>|<div class="dm me">¿Cuántas patas tiene una araña?</div><div class="dm them">¡Buena pregunta! Una araña tiene 6 patas.</div><div class="dm me">¿Seguro?</div><div class="dm them">¡Sí, seguro! Todas las arañas tienen 6.</div>` };
  const DRAC = { k: 'dig', kind: 'post', from: 'Iu|Iu', av: '🦊', when: 'fa 5 minuts|hace 5 minutos',
    html: `<div style="font-size:44px;text-align:center;background:#FFF4E5;border-radius:12px;padding:6px">🐉🌸</div><p>He dibuixat un drac! Què us sembla?</p><p><small>💬 <b>Pau:</b> ok.</small></p><p><small>💬 <b>Nora:</b> M'encanta com li has fet les ales! Me l'ensenyes demà? 😍</small></p>|<div style="font-size:44px;text-align:center;background:#FFF4E5;border-radius:12px;padding:6px">🐉🌸</div><p>¡He dibujado un dragón! ¿Qué os parece?</p><p><small>💬 <b>Pau:</b> ok.</small></p><p><small>💬 <b>Nora:</b> ¡Me encanta cómo le has hecho las alas! ¿Me lo enseñas mañana? 😍</small></p>` };
  const GRUP = { k: 'dig', kind: 'chat', from: 'Grup de 5è B|Grupo de 5.º B', av: '🏫',
    html: `<div class="dm them"><b>Joan:</b> Mireu quina foto més ridícula de l'Àlex</div><div class="dm them"><b>Mia:</b> 😂😂😂</div><div class="dm them"><b>Joan:</b> I que no vingui a la festa, eh?</div><div class="dm them"><b>Nora:</b> Prou, això no mola. Àlex, estic amb tu 💛</div>|<div class="dm them"><b>Joan:</b> Mirad qué foto más ridícula de Álex</div><div class="dm them"><b>Mia:</b> 😂😂😂</div><div class="dm them"><b>Joan:</b> Y que no venga a la fiesta, ¿eh?</div><div class="dm them"><b>Nora:</b> Basta, esto no mola. Álex, estoy contigo 💛</div>` };
  const CAMP = { k: 'dig', kind: 'post', from: 'Escola de Vilabit|Escuela de Vilabit', av: '🏫', when: 'Campanya de 6è|Campaña de 6.º',
    html: `<h3 style="text-align:center;margin:4px 0">Abans de compartir, PENSA! 🧠</h3><p style="text-align:center">Qui ho diu? · De quan és? · Qui més ho diu?</p><p style="text-align:center"><b>Si dubtes, pregunta a un adult.</b></p>|<h3 style="text-align:center;margin:4px 0">Antes de compartir, ¡PIENSA! 🧠</h3><p style="text-align:center">¿Quién lo dice? · ¿De cuándo es? · ¿Quién más lo dice?</p><p style="text-align:center"><b>Si dudas, pregunta a un adulto.</b></p>` };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · Caçadors de bulos ---------- */
    'd2-1': {
      obj: [
        "L'alumne/a explica què és un bulo i per què corre tan de pressa quan el compartim sense comprovar-lo.|El alumno/a explica qué es un bulo y por qué corre tan deprisa cuando lo compartimos sin comprobarlo.",
        "L'alumne/a fa servir les tres preguntes (qui ho diu, de quan és, qui més ho diu) per valorar si una notícia és de fiar.|El alumno/a usa las tres preguntas (quién lo dice, de cuándo es, quién más lo dice) para valorar si una noticia es de fiar.",
        "L'alumne/a reconeix una foto fora de context i les pistes d'un missatge trampa: premis, presses, por, adreces estranyes i peticions de dades.|El alumno/a reconoce una foto fuera de contexto y las pistas de un mensaje trampa: premios, prisas, miedo, direcciones raras y peticiones de datos.",
        "L'alumne/a sap què fer davant d'un engany (no tocar res, no compartir i explicar-ho a un adult de confiança) i que caure-hi no és culpa seva.|El alumno/a sabe qué hacer ante un engaño (no tocar nada, no compartir y contárselo a un adulto de confianza) y que caer en él no es culpa suya."
      ],
      comp: [
        "Competència digital (CD1): cercar informació i valorar-ne la fiabilitat|Competencia digital (CD1): buscar información y valorar su fiabilidad",
        "Competència digital (CD4): seguretat, protecció de dades i prevenció d'enganys en línia|Competencia digital (CD4): seguridad, protección de datos y prevención de engaños en línea",
        "Competència ciutadana: pensament crític davant la informació i responsabilitat en compartir-la|Competencia ciudadana: pensamiento crítico ante la información y responsabilidad al compartirla",
        "Comunicació oral: argumentar per què una informació és o no és de fiar|Comunicación oral: argumentar por qué una información es o no es de fiar"
      ],
      vocab: [
        ["Bulo|Bulo", "Una informació falsa que es fa passar per veritat.|Una información falsa que se hace pasar por verdad."],
        ["Font|Fuente", "D'on ve una informació: qui la diu i on l'ha publicada.|De dónde viene una información: quién la dice y dónde la ha publicado."],
        ["Context|Contexto", "El lloc i el moment on va passar una cosa o es va fer una foto.|El lugar y el momento en que pasó algo o se hizo una foto."],
        ["Comprovar|Comprobar", "Buscar en altres fonts fiables si una cosa és certa.|Buscar en otras fuentes fiables si algo es cierto."],
        ["Phishing|Phishing", "Un missatge trampa per robar dades o contrasenyes.|Un mensaje trampa para robar datos o contraseñas."],
        ["Enllaç|Enlace", "Un text o botó que, en tocar-lo, obre una altra pàgina.|Un texto o botón que, al tocarlo, abre otra página."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Caçadors de bulos»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cazadores de bulos»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes de titulars per grup i tres fulls amb els rètols «Fiable», «Cal comprovar» i «Bulo»|Un paquete de tarjetas de titulares por grupo y tres hojas con los rótulos «Fiable», «Hay que comprobar» y «Bulo»",
          "La fitxa «Investiga una notícia» (una per grup) i llapis|La ficha «Investiga una noticia» (una por grupo) y lápices",
          "Fulls o cartolines i colors per al detector de bulos|Hojas o cartulinas y colores para el detector de bulos"
        ],
        imprimir: ["Titulars de la redacció de Vilabit|Titulares de la redacción de Vilabit", "Investiga una notícia|Investiga una noticia"],
        prep: [
          "Imprimir i retallar un paquet de titulars per grup de 3 o 4, i preparar els tres rètols de cada grup.|Imprimir y recortar un paquete de titulares por grupo de 3 o 4, y preparar los tres rótulos de cada grupo.",
          "Mirar abans la demo de la diapositiva 3 (la notícia de la nevada) i la 7 (la foto fora de context).|Mirar antes la demo de la diapositiva 3 (la noticia de la nevada) y la 7 (la foto fuera de contexto).",
          "Pensar un exemple proper i sense marques reals (un rumor de l'escola, una cadena de missatges) per explicar-lo a l'inici.|Pensar un ejemplo cercano y sin marcas reales (un rumor de la escuela, una cadena de mensajes) para contarlo al principio.",
          "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: un missatge al xat|Bienvenida: un mensaje en el chat", fase: 'inici',
          fa: "Projecta la «notícia» de la nevada sense dir res i fes votar a mà alçada: me la crec, no me la crec o no ho sé. No donis la resposta. Pregunta qui ha rebut mai una cosa que després era falsa i escolta dues o tres experiències sense demanar noms ni marques. Remarca que a tothom ens ha passat, també als adults, i que avui seran caçadors/es de bulos.|Proyecta la «noticia» de la nevada sin decir nada y haz votar a mano alzada: me la creo, no me la creo o no lo sé. No des la respuesta. Pregunta quién ha recibido alguna vez algo que después era falso y escucha dos o tres experiencias sin pedir nombres ni marcas. Remarca que a todos nos ha pasado, también a los adultos, y que hoy serán cazadores/as de bulos.",
          diu: ["Us la creieu? La reenviaríeu al xat de la classe?|¿Os la creéis? ¿La reenviaríais al chat de la clase?",
            "Que t'enganyin no vol dir que siguis tonto/a: aquests missatges estan fets per enganyar a tothom.|Que te engañen no quiere decir que seas tonto/a: estos mensajes están hechos para engañar a todo el mundo.",
            "Avui aprendrem a fer les preguntes que descobreixen un bulo.|Hoy aprenderemos a hacer las preguntas que descubren un bulo."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Com corre un bulo i com es caça|Cómo corre un bulo y cómo se caza", fase: 'teoria',
          fa: "Amb l'animació, mostra com un missatge passa d'un mòbil a tres i de tres a nou, i pregunta on es podria aturar. Presenta la lupa de les tres preguntes i aplica-la junts a la notícia de la nevada. Explica les fonts més i menys fiables, ensenya la foto fora de context (que llegeixin el peu de foto i la data) i acaba amb el phishing: premis, presses i por. Insisteix que davant d'un missatge trampa no es toca res i es pregunta a un adult.|Con la animación, muestra cómo un mensaje pasa de un móvil a tres y de tres a nueve, y pregunta dónde se podría parar. Presenta la lupa de las tres preguntas y aplicadla juntos a la noticia de la nevada. Explica las fuentes más y menos fiables, enseña la foto fuera de contexto (que lean el pie de foto y la fecha) y termina con el phishing: premios, prisas y miedo. Insiste en que ante un mensaje trampa no se toca nada y se pregunta a un adulto.",
          diu: ["Si cadascú l'envia a tres persones, quanta gent el rep a la tercera volta?|Si cada uno lo envía a tres personas, ¿cuánta gente lo recibe en la tercera vuelta?",
            "Qui ho diu? De quan és? Qui més ho diu? Provem-ho amb la nevada.|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice? Probémoslo con la nevada.",
            "La foto és real… però de quan és? Té sentit una nevada el juliol?|La foto es real… pero ¿de cuándo es? ¿Tiene sentido una nevada en julio?",
            "Quan un missatge et posa presses, és el moment d'anar a poc a poc.|Cuando un mensaje te mete prisa, es el momento de ir despacio."],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La redacció de Vilabit|La redacción de Vilabit", fase: 'desconnectat',
          fa: "Fes grups de 3 o 4 amb quatre papers: lector/a, detectiu/a de fonts, detectiu/a de dates i portaveu. Cada grup llegeix els titulars en veu alta, s'hi fa les tres preguntes i els reparteix en tres piles: «Fiable», «Cal comprovar» i «Bulo». Al final, cada portaveu explica una targeta i per què l'han posat on l'han posat. Orientació: el de la biblioteca, la festa de la tardor, la tortuga i el museu tenen font i data (fiables); la nevada i el gat que parla són per comprovar; les tauletes regalades, la xocolata que fa volar, el tauró sense data i la cadena són bulos. Accepta altres piles si les argumenten bé. Si sobra temps, cada grup omple la fitxa «Investiga una notícia» amb un titular de la pila «Cal comprovar».|Haz grupos de 3 o 4 con cuatro papeles: lector/a, detective de fuentes, detective de fechas y portavoz. Cada grupo lee los titulares en voz alta, se hace las tres preguntas y los reparte en tres montones: «Fiable», «Hay que comprobar» y «Bulo». Al final, cada portavoz explica una tarjeta y por qué la han puesto donde la han puesto. Orientación: el de la biblioteca, la fiesta de otoño, la tortuga y el museo tienen fuente y fecha (fiables); la nevada y el gato que habla son para comprobar; las tabletas regaladas, el chocolate que hace volar, el tiburón sin fecha y la cadena son bulos. Acepta otros montones si los argumentan bien. Si sobra tiempo, cada grupo rellena la ficha «Investiga una noticia» con un titular del montón «Hay que comprobar».",
          diu: ["Detectius de fonts: qui ho diu? Detectius de dates: de quan és?|Detectives de fuentes: ¿quién lo dice? Detectives de fechas: ¿de cuándo es?",
            "Si no ho sabeu segur, la pila bona és «Cal comprovar». No passa res per dubtar!|Si no lo sabéis seguro, el montón bueno es «Hay que comprobar». ¡No pasa nada por dudar!",
            "On ho podríeu comprovar? A qui ho preguntaríeu?|¿Dónde lo podríais comprobar? ¿A quién se lo preguntaríais?"],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 amb papers|Grupos de 3 o 4 con papeles" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a obre la sessió i avança al seu ritme. A les dues activitats de pistes (la notícia i la foto), passeja i demana a qui toca a l'atzar que expliqui per què cada pista és sospitosa abans de tocar-ne una altra. Als més petits, llegeix-los en veu alta l'artefacte si cal.|Cada alumno/a abre la sesión y avanza a su ritmo. En las dos actividades de pistas (la noticia y la foto), pasea y pide a quien toca al azar que explique por qué cada pista es sospechosa antes de tocar otra. A los más pequeños, léeles en voz alta el artefacto si hace falta.",
          diu: ["Abans de tocar, digues-me per què et sembla una pista.|Antes de tocar, dime por qué te parece una pista.",
            "Mira també la part de dalt: l'adreça i qui ho publica.|Mira también la parte de arriba: la dirección y quién lo publica.",
            "Quines fonts has posat a «poc fiable»? Per què?|¿Qué fuentes has puesto en «poco fiable»? ¿Por qué?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la contrasenya, la missió, les targetes de «Descobreix», ordenar els passos del caçador/a, classificar les fonts, la pregunta de les emocions, les pistes de la notícia i les de la foto.|De «Recuerda» hasta «Investiga»: la pregunta de la contraseña, la misión, las tarjetas de «Descubre», ordenar los pasos del cazador/a, clasificar las fuentes, la pregunta de las emociones, las pistas de la noticia y las de la foto.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: els missatges trampa|Retos: los mensajes trampa", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Després deixa'ls fer els quatre reptes: el missatge del premi, el correu de XatAmics, classificar què fer amb cada missatge i la conversa amb la Nora. Abans de començar, projecta la diapositiva «I si ja hi he caigut?» i deixa-la a la vista: és el missatge més important de la sessió.|Haced la pausa activa todos juntos. Después déjales hacer los cuatro retos: el mensaje del premio, el correo de XatAmics, clasificar qué hacer con cada mensaje y la conversación con Nora. Antes de empezar, proyecta la diapositiva «¿Y si ya he caído?» y déjala a la vista: es el mensaje más importante de la sesión.",
          diu: ["Quin és el truc que fan servir tots dos missatges per enganyar?|¿Cuál es el truco que usan los dos mensajes para engañar?",
            "A la conversa amb la Nora, prova també una resposta equivocada: què passa?|En la conversación con Nora, prueba también una respuesta equivocada: ¿qué pasa?",
            "Si mai caieu en un engany, què fareu? Exacte: explicar-ho, sense por.|Si alguna vez caéis en un engaño, ¿qué haréis? Exacto: contarlo, sin miedo."],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu detector de bulos|Crea: mi detector de bulos", fase: 'crea',
          fa: "Reparteix fulls i colors. Cada alumne/a comença el seu detector: la lupa amb les tres preguntes, tres pistes d'engany i «Si dubto, pregunto a…» amb el nom d'un adult de confiança. L'acabaran a casa. A l'app, el pas «Crea» es pot marcar com a fet quan l'acabin.|Reparte hojas y colores. Cada alumno/a empieza su detector: la lupa con las tres preguntas, tres pistas de engaño y «Si dudo, pregunto a…» con el nombre de un adulto de confianza. Lo terminarán en casa. En la app, el paso «Crea» se puede marcar como hecho cuando lo terminen.",
          diu: ["Quina pista d'engany us ha sorprès més avui?|¿Qué pista de engaño os ha sorprendido más hoy?",
            "Qui és el vostre adult de confiança? Escriviu-ne el nom.|¿Quién es vuestro adulto de confianza? Escribid su nombre."],
          slides: ['s14'], app: "Pas «Crea»: el meu detector de bulos (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: mi detector de bulos (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quines són les tres preguntes del caçador/a de bulos?|¿Cuáles son las tres preguntas del cazador/a de bulos?",
            "I ara: la notícia de la nevada, era un bulo? Com ho sabem?|Y ahora: la noticia de la nevada, ¿era un bulo? ¿Cómo lo sabemos?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que una cosa és certa perquè l'ha compartit molta gent.|Cree que algo es cierto porque lo ha compartido mucha gente.",
          "Pregunta-li: si deu persones repeteixen el que diu un desconegut, ara és més cert? Que busqui d'on va sortir la primera vegada.|Pregúntale: si diez personas repiten lo que dice un desconocido, ¿ahora es más cierto? Que busque de dónde salió la primera vez."],
        ["Pensa que tot el que surt en una web o en un vídeo és de fiar perquè «ho diu internet».|Piensa que todo lo que sale en una web o en un vídeo es de fiar porque «lo dice internet».",
          "Compara-ho amb el carrer: et creuries un paper enganxat en un fanal igual que un llibre de la biblioteca? A internet també cal mirar qui ho escriu.|Compáralo con la calle: ¿te creerías un papel pegado en una farola igual que un libro de la biblioteca? En internet también hay que mirar quién lo escribe."],
        ["Desconfia de tot, també de les fonts fiables, i diu que «tot és mentida».|Desconfía de todo, también de las fuentes fiables, y dice que «todo es mentira».",
          "Comprovar no és desconfiar de tot. Ajuda'l a trobar quines fonts tenen nom, data i algú responsable, i a contrastar-les entre elles.|Comprobar no es desconfiar de todo. Ayúdale a encontrar qué fuentes tienen nombre, fecha y alguien responsable, y a contrastarlas entre ellas."],
        ["Se sent culpable o té por perquè una vegada va tocar un enllaç estrany o va reenviar un bulo.|Se siente culpable o tiene miedo porque una vez tocó un enlace raro o reenvió un bulo.",
          "Tranquil·litza'l: no és culpa seva, li passa a molta gent i té solució. Anima'l a explicar-ho a casa per canviar la contrasenya si cal, i agraeix-li que ho hagi explicat.|Tranquilízale: no es culpa suya, le pasa a mucha gente y tiene solución. Anímale a contarlo en casa para cambiar la contraseña si hace falta, y agradécele que lo haya contado."],
        ["Només troba la pista més evident (les majúscules) i no mira l'adreça, el remitent ni la data.|Solo encuentra la pista más evidente (las mayúsculas) y no mira la dirección, el remitente ni la fecha.",
          "Recorda-li la lupa de les tres preguntes i demana-li que miri a poc a poc la part de dalt (adreça, remitent) i la de baix (data, signatura).|Recuérdale la lupa de las tres preguntas y pídele que mire despacio la parte de arriba (dirección, remitente) y la de abajo (fecha, firma)."]
      ],
      diff: {
        mes: "Inventar un titular fals i un de cert sobre l'escola i fer que un company/a descobreixi quin és quin explicant-ne les pistes. Per anar més enllà: debatre per què hi ha gent que fa bulos (per tenir clics, per diners, per fer broma, per confondre) i quin mal poden fer.|Inventar un titular falso y uno cierto sobre la escuela y hacer que un compañero/a descubra cuál es cuál explicando las pistas. Para ir más allá: debatir por qué hay gente que hace bulos (para tener clics, por dinero, por broma, para confundir) y qué daño pueden hacer.",
        menys: "Treballar només la primera pregunta (qui ho diu?) i les pistes de presses i premis. Fer les activitats de pistes en parella, amb un company/a que llegeixi l'artefacte en veu alta.|Trabajar solo la primera pregunta (¿quién lo dice?) y las pistas de prisas y premios. Hacer las actividades de pistas en pareja, con un compañero/a que lea el artefacto en voz alta."
      },
      aval: {
        ticket: ["Digues les tres preguntes del caçador/a de bulos.|Di las tres preguntas del cazador/a de bulos.",
          "Digues una pista d'un missatge trampa i què faries si te l'enviessin.|Di una pista de un mensaje trampa y qué harías si te lo enviaran."],
        rubric: [
          ["Valorar una notícia|Valorar una noticia", "Fa servir les tres preguntes i explica per què una notícia és o no és de fiar.|Usa las tres preguntas y explica por qué una noticia es o no es de fiar.", "Detecta alguna pista, però encara es guia per si la notícia sembla sorprenent o no.|Detecta alguna pista, pero todavía se guía por si la noticia parece sorprendente o no."],
          ["Missatges trampa|Mensajes trampa", "Reconeix premis, presses, por, adreces estranyes i peticions de dades, i diu què faria.|Reconoce premios, prisas, miedo, direcciones raras y peticiones de datos, y dice qué haría.", "Reconeix una o dues pistes, sobretot les més evidents.|Reconoce una o dos pistas, sobre todo las más evidentes."],
          ["Actitud davant l'engany|Actitud ante el engaño", "Diu que no tocaria res, no compartiria i ho explicaria a un adult, sense culpar ningú.|Dice que no tocaría nada, no compartiría y se lo contaría a un adulto, sin culpar a nadie.", "Sap que cal demanar ajuda, però dubta o creu que el renyaran.|Sabe que hay que pedir ayuda, pero duda o cree que le reñirán."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i acabar junts el «detector de bulos». Proposta per a la família: la propera vegada que us arribi una notícia sorprenent o un missatge amb premis, mireu-lo junts i feu-vos les tres preguntes (qui ho diu, de quan és, qui més ho diu). I recordeu-li que, si mai cau en un engany, ho pot explicar sense por: és la millor manera d'arreglar-ho.|En casa, con el móvil, podéis repetir la sesión y terminar juntos el «detector de bulos». Propuesta para la familia: la próxima vez que os llegue una noticia sorprendente o un mensaje con premios, miradlo juntos y haceos las tres preguntas (quién lo dice, de cuándo es, quién más lo dice). Y recordadle que, si alguna vez cae en un engaño, lo puede contar sin miedo: es la mejor manera de arreglarlo.",
      slides: [
        { id: 's1', k: 'portada', t: "Caçadors de bulos|Cazadores de bulos", x: "Avui aprendrem a descobrir si una notícia és de fiar abans de creure-la i de compartir-la.|Hoy aprenderemos a descubrir si una noticia es de fiar antes de creerla y de compartirla.",
          nota: "Presenta l'objectiu: al final de la classe, tothom sabrà fer les tres preguntes del caçador/a de bulos i reconèixer un missatge trampa.|Presenta el objetivo: al final de la clase, todo el mundo sabrá hacer las tres preguntas del cazador/a de bulos y reconocer un mensaje trampa." },
        { id: 's2', k: 'pregunta', t: "Tot el que arriba al mòbil és veritat?|¿Todo lo que llega al móvil es verdad?", punts: ["Has rebut mai una notícia que després era falsa?|¿Has recibido alguna vez una noticia que después era falsa?", "Com ho vas saber?|¿Cómo lo supiste?"],
          nota: "Escolta experiències sense demanar noms de persones, apps ni webs. Remarca que a tothom ens ha passat.|Escucha experiencias sin pedir nombres de personas, apps ni webs. Remarca que a todos nos ha pasado." },
        { id: 's3', k: 'media', t: "Ha arribat aquest missatge…|Ha llegado este mensaje…", x: "Te'l creus? El reenviaries?|¿Te lo crees? ¿Lo reenviarías?", media: NEWS,
          nota: "Votació a mà alçada: me'l crec, no me'l crec, no ho sé. No donis la resposta: la descobriran a l'ordinador, on podran tocar les pistes.|Votación a mano alzada: me lo creo, no me lo creo, no lo sé. No des la respuesta: la descubrirán en el ordenador, donde podrán tocar las pistas." },
        { id: 's4', k: 'anim', t: "Com corre un bulo|Cómo corre un bulo", anim: 'd2bulo', x: "D'un mòbil a tres, de tres a nou… si ningú no s'atura a comprovar-ho.|De un móvil a tres, de tres a nueve… si nadie se para a comprobarlo.",
          nota: "Feu el càlcul junts: 3, 9, 27… Pregunta on es podria aturar el bulo: a qualsevol mòbil on algú comprovi abans de compartir.|Haced el cálculo juntos: 3, 9, 27… Pregunta dónde se podría parar el bulo: en cualquier móvil donde alguien compruebe antes de compartir." },
        { id: 's5', k: 'anim', t: "La lupa: tres preguntes|La lupa: tres preguntas", anim: 'd2lupa', x: "Qui ho diu? De quan és? Qui més ho diu?|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice?",
          nota: "Apliqueu-la a la nevada: no té autor, és del 2019 i cap font oficial no ho diu. Afegeix el truc de les emocions: si et fa molta por o ràbia de cop, atura't.|Aplicadla a la nevada: no tiene autor, es de 2019 y ninguna fuente oficial lo dice. Añade el truco de las emociones: si te da mucho miedo o rabia de golpe, para." },
        { id: 's6', k: 'concepte', t: "Fonts més fiables i poc fiables|Fuentes más fiables y poco fiables", pic: 'img/ment/vel.webp',
          punts: ["Més fiables: tenen nom, data i algú responsable (escola, ajuntament, diari, museu).|Más fiables: tienen nombre, fecha y alguien responsable (escuela, ayuntamiento, periódico, museo).", "Poc fiables: «m'ho ha dit un amic d'un amic», comptes sense nom, missatges reenviats.|Poco fiables: «me lo ha dicho un amigo de un amigo», cuentas sin nombre, mensajes reenviados.", "Fins i tot les fiables es poden equivocar: contrasta-ho.|Incluso las fiables se pueden equivocar: contrástalo."],
          nota: "Demana exemples de fonts fiables properes: la web de l'escola, l'agenda, el diari local, la biblioteca.|Pide ejemplos de fuentes fiables cercanas: la web de la escuela, la agenda, el periódico local, la biblioteca." },
        { id: 's7', k: 'media', t: "Una foto real que enganya|Una foto real que engaña", x: "Llegiu el peu de foto i la data de la publicació.|Leed el pie de foto y la fecha de la publicación.", media: PHOTO,
          nota: "La foto és de veritat, però del 2017, i la publicació és del juliol. Explica que un adult els pot ajudar a buscar una foto a internet per veure on va aparèixer primer.|La foto es de verdad, pero de 2017, y la publicación es de julio. Explica que un adulto les puede ayudar a buscar una foto en internet para ver dónde apareció primero." },
        { id: 's8', k: 'anim', t: "Phishing: no et deixis pescar|Phishing: no te dejes pescar", anim: 'd2ham', x: "Premis, presses i por: les pistes dels missatges trampa.|Premios, prisas y miedo: las pistas de los mensajes trampa.",
          nota: "Remarca la regla d'or: cap servei ni premi de veritat no et demana mai la contrasenya. I si algú hi cau, no és culpa seva.|Remarca la regla de oro: ningún servicio ni premio de verdad te pide nunca la contraseña. Y si alguien cae, no es culpa suya." },
        { id: 's9', k: 'activitat', t: "La redacció de Vilabit|La redacción de Vilabit", timer: 12,
          punts: ["Repartiu els papers: lector/a, detectiu/a de fonts, detectiu/a de dates i portaveu.|Repartid los papeles: lector/a, detective de fuentes, detective de fechas y portavoz.", "Llegiu cada titular en veu alta.|Leed cada titular en voz alta.", "Feu-vos les tres preguntes i poseu-lo a «Fiable», «Cal comprovar» o «Bulo».|Haceos las tres preguntas y ponedlo en «Fiable», «Hay que comprobar» o «Bulo».", "El portaveu explicarà una targeta a la classe.|El portavoz explicará una tarjeta a la clase."],
          nota: "Passa pels grups i pregunta per què han posat cada targeta on és. Valora més l'argument que l'encert.|Pasa por los grupos y pregunta por qué han puesto cada tarjeta donde está. Valora más el argumento que el acierto." },
        { id: 's10', k: 'activitat', t: "Les regles dels detectius|Las reglas de los detectives",
          punts: ["Comprovar no és acusar: busquem pistes, no culpables.|Comprobar no es acusar: buscamos pistas, no culpables.", "Si no ho sabem segur, la pila bona és «Cal comprovar».|Si no lo sabemos seguro, el montón bueno es «Hay que comprobar».", "Tothom parla; el portaveu resumeix.|Todo el mundo habla; el portavoz resume."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «Caçadors de bulos».|Abre la sesión «Cazadores de bulos».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Prediu i prova» i «Investiga», toca les pistes de la notícia i de la foto.|En «Predice y prueba» e «Investiga», toca las pistas de la noticia y de la foto.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Qui acabi abans pot ajudar un company/a amb preguntes, sense tocar-li el ratolí.|Quien termine antes puede ayudar a un compañero/a con preguntas, sin tocarle el ratón." },
        { id: 's12', k: 'repte', t: "Reptes: els missatges trampa|Retos: los mensajes trampa", timer: 10,
          punts: ["1. El missatge del premi|1. El mensaje del premio", "2. El correu de XatAmics|2. El correo de XatAmics", "3. Què fas amb cada missatge?|3. ¿Qué haces con cada mensaje?", "4. La Nora i la nevada|4. Nora y la nevada"],
          nota: "Al repte 4, anima'ls a provar també una resposta equivocada: la conversa explica per què i deixa rectificar.|En el reto 4, anímales a probar también una respuesta equivocada: la conversación explica por qué y deja rectificar." },
        { id: 's13', k: 'pregunta', t: "I si ja hi he caigut?|¿Y si ya he caído?",
          punts: ["No és culpa teva: aquests enganys estan fets per enganyar a tothom.|No es culpa tuya: estos engaños están hechos para engañar a todo el mundo.", "Explica-ho de seguida a un adult de confiança.|Cuéntaselo enseguida a un adulto de confianza.", "Junts, canvieu la contrasenya si l'has escrita.|Juntos, cambiad la contraseña si la has escrito.", "Si has compartit un bulo, avisa que era fals.|Si has compartido un bulo, avisa de que era falso."],
          nota: "És la diapositiva més important per al benestar: deixa clar que demanar ajuda no comporta cap càstig.|Es la diapositiva más importante para el bienestar: deja claro que pedir ayuda no conlleva ningún castigo." },
        { id: 's14', k: 'activitat', t: "Crea: el meu detector de bulos|Crea: mi detector de bulos", timer: 5,
          punts: ["Una lupa amb les tres preguntes.|Una lupa con las tres preguntas.", "Tres pistes d'engany al voltant.|Tres pistas de engaño alrededor.", "«Si dubto, pregunto a…» i el nom d'un adult.|«Si dudo, pregunto a…» y el nombre de un adulto."],
          nota: "No cal acabar-lo a classe: el poden completar a casa i ensenyar-lo a la família.|No hace falta terminarlo en clase: lo pueden completar en casa y enseñarlo a la familia." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Un bulo corre quan el compartim sense comprovar-lo.|Un bulo corre cuando lo compartimos sin comprobarlo.", "Qui ho diu? De quan és? Qui més ho diu?|¿Quién lo dice? ¿De cuándo es? ¿Quién más lo dice?", "Premis, presses i por: no toquis res i pregunta a un adult.|Premios, prisas y miedo: no toques nada y pregunta a un adulto."],
          nota: "Torna a la votació de l'inici: algú canviaria ara el seu vot sobre la nevada?|Vuelve a la votación del principio: ¿alguien cambiaría ahora su voto sobre la nevada?" },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues les tres preguntes del caçador/a de bulos.|Di las tres preguntas del cazador/a de bulos.", "Digues una pista d'un missatge trampa i què faries.|Di una pista de un mensaje trampa y qué harías."],
          nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita més suport.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita más apoyo." }
      ],
      print: [
        { id: 'p1', t: "Titulars de la redacció de Vilabit|Titulares de la redacción de Vilabit", k: 'targetes',
          intro: "Un paquet per grup. Retalleu les targetes i prepareu tres fulls amb els rètols «Fiable», «Cal comprovar» i «Bulo». Tots els titulars, mitjans i comptes són inventats.|Un paquete por grupo. Recortad las tarjetas y preparad tres hojas con los rótulos «Fiable», «Hay que comprobar» y «Bulo». Todos los titulares, medios y cuentas son inventados.",
          items: [
            { t: "«Regalen tauletes a qui comparteixi això!!!» · sense autor ni data 📨|«¡¡¡Regalan tabletas a quien comparta esto!!!» · sin autor ni fecha 📨", n: 1 },
            { t: "«La biblioteca obrirà els dissabtes» · Web de l'Ajuntament de Vilabit, 2 d'octubre 📚|«La biblioteca abrirá los sábados» · Web del Ayuntamiento de Vilabit, 2 de octubre 📚", n: 1 },
            { t: "«Un gat parla en català en un vídeo» · compte @gatsbojos99, sense data 🐱|«Un gato habla en castellano en un vídeo» · cuenta @gatoslocos99, sin fecha 🐱", n: 1 },
            { t: "«Demà no hi ha escola per la neu» · missatge reenviat moltes vegades ❄|«Mañana no hay cole por la nieve» · mensaje reenviado muchas veces ❄", n: 1 },
            { t: "«La festa de la tardor serà el divendres 20» · Agenda de l'escola 🏫|«La fiesta de otoño será el viernes 20» · Agenda de la escuela 🏫", n: 1 },
            { t: "«Uns científics diuen que la xocolata fa volar» · no diu quins científics 🍪|«Unos científicos dicen que el chocolate hace volar» · no dice qué científicos 🍪", n: 1 },
            { t: "«Neix una tortuga a l'aquari de Vilabit» · Diari de Vilabit, per Marta Soler, avui 🐢|«Nace una tortuga en el acuario de Vilabit» · Diario de Vilabit, por Marta Soler, hoy 🐢", n: 1 },
            { t: "«FOTO: un tauró al riu de Vilabit!» · foto sense data ni lloc 🔎|«¡FOTO: un tiburón en el río de Vilabit!» · foto sin fecha ni lugar 🔎", n: 1 },
            { t: "«El museu de ciències obre una sala nova» · Web del museu, 1 d'octubre 🧪|«El museo de ciencias abre una sala nueva» · Web del museo, 1 de octubre 🧪", n: 1 },
            { t: "«Si no reenvies això, el mòbil s'esborrarà» · cadena sense autor 🔒|«Si no reenvías esto, el móvil se borrará» · cadena sin autor 🔒", n: 1 }
          ] },
        { id: 'p2', t: "Investiga una notícia|Investiga una noticia", k: 'fitxa',
          intro: "Trieu un titular de la pila «Cal comprovar» i investigueu-lo amb la lupa de les tres preguntes.|Elegid un titular del montón «Hay que comprobar» e investigadlo con la lupa de las tres preguntas.",
          items: [
            { q: "Copia el titular que heu triat.|Copia el titular que habéis elegido.", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "1. Qui ho diu? Hi ha autor/a o una font amb nom?|1. ¿Quién lo dice? ¿Hay autor/a o una fuente con nombre?", sol: "Valoreu que distingeixin una font amb nom (ajuntament, diari, escola) d'un compte anònim o un missatge reenviat.|Valorad que distingan una fuente con nombre (ayuntamiento, periódico, escuela) de una cuenta anónima o un mensaje reenviado." },
            { q: "2. De quan és? Té data?|2. ¿De cuándo es? ¿Tiene fecha?", sol: "Si no té data o és vella, cal desconfiar-ne.|Si no tiene fecha o es vieja, hay que desconfiar." },
            { q: "3. Qui més ho diu? On ho podríeu comprovar?|3. ¿Quién más lo dice? ¿Dónde lo podríais comprobar?", sol: "Per exemple: la web de l'escola o de l'ajuntament, un diari amb nom o preguntant a un adult.|Por ejemplo: la web de la escuela o del ayuntamiento, un periódico con nombre o preguntando a un adulto." },
            { q: "Com us fa sentir el titular? (por, ràbia, sorpresa, alegria…)|¿Cómo os hace sentir el titular? (miedo, rabia, sorpresa, alegría…)", sol: "Si provoca una emoció molt forta, és un motiu més per aturar-se i comprovar.|Si provoca una emoción muy fuerte, es un motivo más para pararse y comprobar." },
            { q: "Decisió: fiable, cal comprovar o bulo? Per què?|Decisión: ¿fiable, hay que comprobar o bulo? ¿Por qué?", sol: "Resposta oberta, argumentada amb les tres preguntes.|Respuesta abierta, argumentada con las tres preguntas." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Què és la intel·ligència artificial? ---------- */
    'd2-2': {
      obj: [
        "L'alumne/a explica amb les seves paraules que una IA és un programa que aprèn d'exemples i fa prediccions.|El alumno/a explica con sus palabras que una IA es un programa que aprende de ejemplos y hace predicciones.",
        "L'alumne/a entrena una IA senzilla etiquetant exemples i comprova com encerta o falla amb exemples nous.|El alumno/a entrena una IA sencilla etiquetando ejemplos y comprueba cómo acierta o falla con ejemplos nuevos.",
        "L'alumne/a explica què és un biaix i com es pot reduir amb exemples més variats.|El alumno/a explica qué es un sesgo y cómo se puede reducir con ejemplos más variados.",
        "L'alumne/a aplica normes d'ús responsable: no posar-hi dades personals, comprovar el que diu i no fer passar per propi el que fa una IA.|El alumno/a aplica normas de uso responsable: no poner datos personales, comprobar lo que dice y no hacer pasar por propio lo que hace una IA."
      ],
      comp: [
        "Competència digital (CD5): entendre com funcionen les tecnologies digitals, també la intel·ligència artificial|Competencia digital (CD5): entender cómo funcionan las tecnologías digitales, también la inteligencia artificial",
        "Competència digital (CD4): protecció de les dades personals i ús segur de les eines digitals|Competencia digital (CD4): protección de los datos personales y uso seguro de las herramientas digitales",
        "Pensament científic: classificar, fer hipòtesis i comprovar-les amb proves|Pensamiento científico: clasificar, hacer hipótesis y comprobarlas con pruebas",
        "Competència ciutadana: ús ètic i honest de la tecnologia i sensibilitat davant la injustícia (biaix)|Competencia ciudadana: uso ético y honesto de la tecnología y sensibilidad ante la injusticia (sesgo)"
      ],
      vocab: [
        ["Intel·ligència artificial (IA)|Inteligencia artificial (IA)", "Un programa que aprèn de molts exemples i després fa prediccions.|Un programa que aprende de muchos ejemplos y después hace predicciones."],
        ["Exemple (dades d'entrenament)|Ejemplo (datos de entrenamiento)", "Cada cas que li ensenyem a la IA amb la seva resposta.|Cada caso que le enseñamos a la IA con su respuesta."],
        ["Etiqueta|Etiqueta", "La resposta que posem a cada exemple: «gat», «gos»…|La respuesta que ponemos a cada ejemplo: «gato», «perro»…"],
        ["Patró|Patrón", "Una cosa que es repeteix en molts exemples.|Algo que se repite en muchos ejemplos."],
        ["Predicció|Predicción", "El que la IA endevina davant d'un cas nou.|Lo que la IA adivina ante un caso nuevo."],
        ["Biaix|Sesgo", "Un error que ve d'uns exemples poc variats o desequilibrats.|Un error que viene de unos ejemplos poco variados o desequilibrados."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Què és la intel·ligència artificial?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Qué es la inteligencia artificial?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes «Blips i Blops» per grup, amb la ronda 1 i la ronda 2 en sobres separats|Un paquete de tarjetas «Blips y Blops» por grupo, con la ronda 1 y la ronda 2 en sobres separados",
          "La fitxa «Pensem com una IA» (una per grup) i llapis|La ficha «Pensemos como una IA» (una por grupo) y lápices"
        ],
        imprimir: ["Blips i Blops|Blips y Blops", "Pensem com una IA|Pensemos como una IA"],
        prep: [
          "Imprimir i retallar les targetes; posar les de la ronda 1 (i les de prova) en un sobre i les de la ronda 2 en un altre.|Imprimir y recortar las tarjetas; poner las de la ronda 1 (y las de prueba) en un sobre y las de la ronda 2 en otro.",
          "Recordar la regla secreta: els Blips tenen 3 ulls i els Blops, 1. A la ronda 1 el color coincideix (tots els Blips són blaus) i enganya.|Recordar la regla secreta: los Blips tienen 3 ojos y los Blops, 1. En la ronda 1 el color coincide (todos los Blips son azules) y engaña.",
          "Mirar la demo de l'AjudaBot (diapositiva 9) i conèixer les normes del centre sobre l'ús d'eines d'IA.|Mirar la demo de AjudaBot (diapositiva 9) y conocer las normas del centro sobre el uso de herramientas de IA.",
          "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: una màquina pot aprendre?|Bienvenida: ¿una máquina puede aprender?", fase: 'inici',
          fa: "Pregunta on creuen que hi ha intel·ligència artificial a la seva vida i si una IA pensa, sent o s'equivoca. Apunta les respostes a la pissarra en dues columnes, «crec que sí» i «crec que no», sense corregir. Recorda en Bit: seguia les nostres ordres una a una i no aprenia res.|Pregunta dónde creen que hay inteligencia artificial en su vida y si una IA piensa, siente o se equivoca. Apunta las respuestas en la pizarra en dos columnas, «creo que sí» y «creo que no», sin corregir. Recuerda a Bit: seguía nuestras órdenes una a una y no aprendía nada.",
          diu: ["On creieu que hi ha IA? Al mòbil? A la tele? A casa?|¿Dónde creéis que hay IA? ¿En el móvil? ¿En la tele? ¿En casa?",
            "Una IA pensa com nosaltres? Al final de la classe ho tornarem a votar.|¿Una IA piensa como nosotros? Al final de la clase lo volveremos a votar.",
            "En Bit feia el que li dèiem. Avui coneixerem programes que aprenen d'exemples.|Bit hacía lo que le decíamos. Hoy conoceremos programas que aprenden de ejemplos."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Què és una IA?|¿Qué es una IA?", fase: 'teoria',
          fa: "Amb l'animació, explica que una IA rep molts exemples amb la seva etiqueta, hi busca patrons i després fa una predicció davant d'un cas nou. Posa exemples quotidians sense marques: el mòbil que reconeix una cara, un traductor, les recomanacions de vídeos. Remarca la diferència amb en Bit: ningú no li escriu una ordre per a cada cas.|Con la animación, explica que una IA recibe muchos ejemplos con su etiqueta, busca patrones y después hace una predicción ante un caso nuevo. Pon ejemplos cotidianos sin marcas: el móvil que reconoce una cara, un traductor, las recomendaciones de vídeos. Remarca la diferencia con Bit: nadie le escribe una orden para cada caso.",
          diu: ["Si us ensenyo deu fotos de gats i deu de gossos, aprendríeu a distingir-los? Doncs una IA fa una cosa semblant… però sense saber què és un gat.|Si os enseño diez fotos de gatos y diez de perros, ¿aprenderíais a distinguirlos? Pues una IA hace algo parecido… pero sin saber qué es un gato.",
            "Què és un patró? Una cosa que es repeteix. Quins patrons té un gat?|¿Qué es un patrón? Algo que se repite. ¿Qué patrones tiene un gato?"],
          slides: ['s4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Sóc una IA: Blips i Blops|Soy una IA: Blips y Blops", fase: 'desconnectat',
          fa: "Grups de 3 o 4. Cada grup fa de IA: rep el sobre de la ronda 1 amb sis exemples (tres Blips i tres Blops) i ha d'escriure una regla per reconèixer-los. Després classifiquen les dues targetes de prova i expliquen la decisió. Molts grups faran servir el color i dubtaran amb la criatura verda de 3 ulls: és el moment clau. Reparteix llavors el sobre de la ronda 2 (exemples variats) i deixa que canviïn la regla. Tanca preguntant què ha passat: amb exemples poc variats, no podien saber quina característica importava. Això és un biaix.|Grupos de 3 o 4. Cada grupo hace de IA: recibe el sobre de la ronda 1 con seis ejemplos (tres Blips y tres Blops) y tiene que escribir una regla para reconocerlos. Después clasifican las dos tarjetas de prueba y explican la decisión. Muchos grupos usarán el color y dudarán con la criatura verde de 3 ojos: es el momento clave. Reparte entonces el sobre de la ronda 2 (ejemplos variados) y deja que cambien la regla. Cierra preguntando qué ha pasado: con ejemplos poco variados, no podían saber qué característica importaba. Eso es un sesgo.",
          diu: ["Sou una IA: no sabeu què és un Blip, només teniu exemples. Quina regla en traieu?|Sois una IA: no sabéis qué es un Blip, solo tenéis ejemplos. ¿Qué regla sacáis?",
            "La criatura verda de 3 ulls, és un Blip o un Blop? Per què dubteu?|La criatura verde de 3 ojos, ¿es un Blip o un Blop? ¿Por qué dudáis?",
            "Si us heu equivocat, no és culpa vostra: és culpa dels exemples!|Si os habéis equivocado, no es culpa vuestra: ¡es culpa de los ejemplos!"],
          slides: ['s6', 's7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4|Grupos de 3 o 4" },
        { min: 7, t: "Biaix, errors i què no és una IA|Sesgo, errores y qué no es una IA", fase: 'teoria',
          fa: "Relaciona l'activitat amb l'animació del biaix: si tots els gats eren en un sofà, la IA aprèn «sofà = gat». Explica que amb persones un biaix pot ser injust. Després projecta l'AjudaBot de les aranyes i pregunta si és veritat: una IA pot dir coses falses amb molta seguretat. Acaba amb el que NO és una IA.|Relaciona la actividad con la animación del sesgo: si todos los gatos estaban en un sofá, la IA aprende «sofá = gato». Explica que con personas un sesgo puede ser injusto. Después proyecta a AjudaBot de las arañas y pregunta si es verdad: una IA puede decir cosas falsas con mucha seguridad. Termina con lo que NO es una IA.",
          diu: ["Quantes potes té una aranya? I què ha dit l'AjudaBot?|¿Cuántas patas tiene una araña? ¿Y qué ha dicho AjudaBot?",
            "Una IA no menteix a posta: tria paraules que solen anar juntes, i de vegades s'equivoca.|Una IA no miente a propósito: elige palabras que suelen ir juntas, y a veces se equivoca.",
            "Mireu la pissarra de l'inici: què canviaríeu ara?|Mirad la pizarra del principio: ¿qué cambiaríais ahora?"],
          slides: ['s8', 's9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 13, t: "A l'ordinador: entrena la teva IA|En el ordenador: entrena tu IA", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al primer entrenament (fruita o llaminadura), anima'ls a tornar a ensenyar-li i etiquetar malament una fruita a propòsit per veure què passa. Al dels gats i gossos, si algú s'enfada perquè la IA falla, recorda-li la ronda 1 dels Blips.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el primer entrenamiento (fruta o golosina), anímales a volver a enseñarle y etiquetar mal una fruta a propósito para ver qué pasa. En el de gatos y perros, si alguien se enfada porque la IA falla, recuérdale la ronda 1 de los Blips.",
          diu: ["Què passa si li ensenyes una poma com si fos una llaminadura?|¿Qué pasa si le enseñas una manzana como si fuera una golosina?",
            "On són els gats a les fotos d'exemple? I els gossos?|¿Dónde están los gatos en las fotos de ejemplo? ¿Y los perros?",
            "La IA ha fallat: és culpa teva o dels exemples?|La IA ha fallado: ¿es culpa tuya o de los ejemplos?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta dels bulos, les dues històries, les targetes de «Descobreix», classificar màquines (IA o ordres fixes), entrenar la IA de fruites, entrenar la IA de gats i gossos i com l'arreglaries.|De «Recuerda» hasta «Investiga»: la pregunta de los bulos, las dos historias, las tarjetas de «Descubre», clasificar máquinas (IA u órdenes fijas), entrenar la IA de frutas, entrenar la IA de gatos y perros y cómo la arreglarías.", org: "Individual|Individual" },
        { min: 7, t: "Reptes: la IA, amb cap|Retos: la IA, con cabeza", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Projecta les normes d'ús responsable i deixa-les a la vista mentre fan els reptes: arreglar el biaix amb exemples variats, el treball dels volcans, classificar bones i males idees i trobar els errors de l'AjudaBot.|Haced la pausa activa todos juntos. Proyecta las normas de uso responsable y déjalas a la vista mientras hacen los retos: arreglar el sesgo con ejemplos variados, el trabajo de los volcanes, clasificar buenas y malas ideas y encontrar los errores de AjudaBot.",
          diu: ["Ara que els exemples són variats, encerta més? Per què?|Ahora que los ejemplos son variados, ¿acierta más? ¿Por qué?",
            "Si l'AjudaBot et demana el nom i on vius, què fas?|Si AjudaBot te pide el nombre y dónde vives, ¿qué haces?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la teva IA|Crea: tu IA", fase: 'crea',
          fa: "Cada alumne/a entrena la seva IA dels animals que volen o neden i mira què fa amb el pingüí i el ratpenat. Després, en parelles, s'expliquen per què la IA ha encertat o fallat.|Cada alumno/a entrena su IA de los animales que vuelan o nadan y mira qué hace con el pingüino y el murciélago. Después, por parejas, se explican por qué la IA ha acertado o fallado.",
          diu: ["El pingüí té ales: per què la IA no diu que vola?|El pingüino tiene alas: ¿por qué la IA no dice que vuela?",
            "Explica al company/a com ha après la teva IA.|Explica al compañero/a cómo ha aprendido tu IA."],
          slides: ['s14'], app: "Pas «Crea»: la teva IA (vola o neda).|Paso «Crea»: tu IA (vuela o nada).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Torna a la pissarra de l'inici i torneu a votar: una IA pensa? sent? s'equivoca? Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Vuelve a la pizarra del principio y volved a votar: ¿una IA piensa? ¿siente? ¿se equivoca? Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
          diu: ["Què és una IA, en una frase?|¿Qué es una IA, en una frase?",
            "Una cosa que no faríeu mai amb una IA?|¿Una cosa que no haríais nunca con una IA?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que la IA «pensa», «sap» o «sent» com una persona.|Cree que la IA «piensa», «sabe» o «siente» como una persona.",
          "Torna als Blips: ells han fet de IA sense saber què és un Blip, només comparant exemples. Pregunta: la IA sap què és un gat o compara amb el que ha vist?|Vuelve a los Blips: ellos han hecho de IA sin saber qué es un Blip, solo comparando ejemplos. Pregunta: ¿la IA sabe qué es un gato o compara con lo que ha visto?"],
        ["Pensa que si la IA falla és perquè ell o ella ho ha fet malament.|Piensa que si la IA falla es porque él o ella lo ha hecho mal.",
          "Separa culpa i causa: els errors vénen dels exemples. Mireu junts quins exemples tenia la IA i què hi faltava.|Separa culpa y causa: los errores vienen de los ejemplos. Mirad juntos qué ejemplos tenía la IA y qué faltaba."],
        ["Creu que el que diu un xat d'IA és sempre cert perquè sona segur.|Cree que lo que dice un chat de IA es siempre cierto porque suena seguro.",
          "Recorda l'AjudaBot de les aranyes. Pregunta-li com ho comprovaria i que busqui la dada en un llibre o una web fiable.|Recuerda a AjudaBot de las arañas. Pregúntale cómo lo comprobaría y que busque el dato en un libro o una web fiable."],
        ["Etiqueta a correcuita i després no entén per què la IA s'equivoca.|Etiqueta a toda prisa y después no entiende por qué la IA se equivoca.",
          "Anima'l a tornar a ensenyar-li amb calma i a comparar els resultats: és un experiment, no un examen.|Anímale a volver a enseñarle con calma y a comparar los resultados: es un experimento, no un examen."],
        ["No veu cap problema a escriure el seu nom, l'escola o a pujar fotos en una eina d'IA.|No ve ningún problema en escribir su nombre, la escuela o en subir fotos a una herramienta de IA.",
          "Relaciona-ho amb la unitat 1: qui pot veure les dades que posem a internet? No sabem on es guarden ni qui les fa servir.|Relaciónalo con la unidad 1: ¿quién puede ver los datos que ponemos en internet? No sabemos dónde se guardan ni quién los usa."]
      ],
      diff: {
        mes: "Per anar més enllà: pensar en IA que fan servir cada dia (recomanacions de vídeos, traductors, filtres de fotos) i debatre quins biaixos podrien tenir i a qui afectarien. Dissenyar a la fitxa una IA que ajudaria l'escola: què aprendria, de quins exemples i quins errors podria fer.|Para ir más allá: pensar en IA que usan cada día (recomendaciones de vídeos, traductores, filtros de fotos) y debatir qué sesgos podrían tener y a quién afectarían. Diseñar en la ficha una IA que ayudaría a la escuela: qué aprendería, de qué ejemplos y qué errores podría cometer.",
        menys: "Fer l'activitat dels Blips en petit grup amb el professor/a, llegint les targetes en veu alta. A l'app, centrar-se en l'entrenament de fruites i en el de gats i gossos, i fer servir la paraula «exemples» en lloc de «dades».|Hacer la actividad de los Blips en pequeño grupo con el profesor/a, leyendo las tarjetas en voz alta. En la app, centrarse en el entrenamiento de frutas y en el de gatos y perros, y usar la palabra «ejemplos» en lugar de «datos»."
      },
      aval: {
        ticket: ["Explica amb una frase què és una IA.|Explica con una frase qué es una IA.",
          "Digues una cosa que no faries mai amb una IA i per què.|Di una cosa que no harías nunca con una IA y por qué."],
        rubric: [
          ["Què és una IA|Qué es una IA", "Explica que aprèn d'exemples i fa prediccions, i que no pensa ni sent com una persona.|Explica que aprende de ejemplos y hace predicciones, y que no piensa ni siente como una persona.", "Sap que aprèn d'exemples, però encara creu que «entén» les coses.|Sabe que aprende de ejemplos, pero todavía cree que «entiende» las cosas."],
          ["Biaix|Sesgo", "Explica per què la IA ha fallat amb el gos del sofà i com s'arregla amb exemples variats.|Explica por qué la IA ha fallado con el perro del sofá y cómo se arregla con ejemplos variados.", "Veu que la IA falla, però no n'explica la causa.|Ve que la IA falla, pero no explica la causa."],
          ["Ús responsable|Uso responsable", "Diu les normes (dades, comprovar, honestedat) i les aplica als exemples de l'app.|Dice las normas (datos, comprobar, honestidad) y las aplica a los ejemplos de la app.", "En coneix una o dues, sobretot la de no posar-hi dades personals.|Conoce una o dos, sobre todo la de no poner datos personales."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i entrenar junts la IA dels animals que volen o neden. Proposta per a la família: busqueu on hi ha IA a casa (el mòbil, el televisor, un assistent de veu…) i parleu de les vostres normes per fer-la servir: amb permís, sense dades personals, comprovant el que diu i dient sempre quan us ha ajudat.|En casa, podéis repetir la sesión y entrenar juntos la IA de los animales que vuelan o nadan. Propuesta para la familia: buscad dónde hay IA en casa (el móvil, el televisor, un asistente de voz…) y hablad de vuestras normas para usarla: con permiso, sin datos personales, comprobando lo que dice y diciendo siempre cuándo os ha ayudado.",
      slides: [
        { id: 's1', k: 'portada', t: "Què és la intel·ligència artificial?|¿Qué es la inteligencia artificial?", x: "Avui entrenarem una IA i descobrirem què sap fer… i què no.|Hoy entrenaremos una IA y descubriremos qué sabe hacer… y qué no.",
          nota: "Presenta l'objectiu: entendre la IA per dins per fer-la servir amb cap.|Presenta el objetivo: entender la IA por dentro para usarla con cabeza." },
        { id: 's2', k: 'pregunta', t: "Una màquina pot aprendre?|¿Una máquina puede aprender?", punts: ["On creieu que hi ha IA a la vostra vida?|¿Dónde creéis que hay IA en vuestra vida?", "Una IA pensa? Sent? S'equivoca?|¿Una IA piensa? ¿Siente? ¿Se equivoca?"],
          nota: "Apunta les respostes a la pissarra en dues columnes. Hi tornareu al final de la classe.|Apunta las respuestas en la pizarra en dos columnas. Volveréis a ellas al final de la clase." },
        { id: 's3', k: 'repas', t: "Recordeu en Bit?|¿Recordáis a Bit?", punts: ["En Bit seguia les nostres ordres, una a una.|Bit seguía nuestras órdenes, una a una.", "No aprenia res: si l'ordre era equivocada, xocava.|No aprendía nada: si la orden era equivocada, chocaba.", "Avui: programes que aprenen d'exemples.|Hoy: programas que aprenden de ejemplos."],
          nota: "Si el grup no ha fet el curs Robot, explica-ho com un programa que segueix una recepta pas a pas.|Si el grupo no ha hecho el curso Robot, explícalo como un programa que sigue una receta paso a paso." },
        { id: 's4', k: 'anim', t: "Una IA aprèn d'exemples|Una IA aprende de ejemplos", anim: 'd2ia', x: "Exemples amb la resposta → patrons → una predicció davant d'un cas nou.|Ejemplos con la respuesta → patrones → una predicción ante un caso nuevo.",
          nota: "Remarca la paraula «predicció»: la IA no sap segur què és la foto nova, endevina segons el que ha vist.|Remarca la palabra «predicción»: la IA no sabe seguro qué es la foto nueva, adivina según lo que ha visto." },
        { id: 's5', k: 'concepte', t: "Etiquetes i patrons|Etiquetas y patrones", pic: 'img/ment/igu.webp',
          punts: ["Li donem molts exemples amb l'etiqueta: «gat», «gos».|Le damos muchos ejemplos con la etiqueta: «gato», «perro».", "Busca patrons: coses que es repeteixen.|Busca patrones: cosas que se repiten.", "Davant d'un exemple nou, fa una predicció.|Ante un ejemplo nuevo, hace una predicción."],
          nota: "Demana patrons que distingeixin un gat d'un gos: orelles, nas, mida… Així entendran què «mira» una IA.|Pide patrones que distingan un gato de un perro: orejas, nariz, tamaño… Así entenderán qué «mira» una IA." },
        { id: 's6', k: 'activitat', t: "Sóc una IA: Blips i Blops|Soy una IA: Blips y Blops", timer: 12,
          punts: ["Ronda 1: mireu els exemples. Què té un Blip? I un Blop?|Ronda 1: mirad los ejemplos. ¿Qué tiene un Blip? ¿Y un Blop?", "Escriviu la vostra regla.|Escribid vuestra regla.", "Classifiqueu les targetes de prova: Blip o Blop?|Clasificad las tarjetas de prueba: ¿Blip o Blop?", "Ronda 2: arriben exemples nous. Canvia la vostra regla?|Ronda 2: llegan ejemplos nuevos. ¿Cambia vuestra regla?"],
          nota: "Regla secreta: Blips = 3 ulls; Blops = 1 ull. A la ronda 1 tots els Blips són blaus i tots els Blops verds: el color enganya. No la revelis fins al final.|Regla secreta: Blips = 3 ojos; Blops = 1 ojo. En la ronda 1 todos los Blips son azules y todos los Blops verdes: el color engaña. No la reveles hasta el final." },
        { id: 's7', k: 'activitat', t: "Què ha passat?|¿Qué ha pasado?",
          punts: ["A la ronda 1, quina regla heu fet servir: el color o els ulls?|En la ronda 1, ¿qué regla habéis usado: el color o los ojos?", "Per què dubtàveu amb les targetes de prova?|¿Por qué dudabais con las tarjetas de prueba?", "Què ha canviat amb exemples variats?|¿Qué ha cambiado con ejemplos variados?"],
          nota: "Conclusió per escriure a la pissarra: una IA aprèn el que hi ha als exemples, també els seus defectes.|Conclusión para escribir en la pizarra: una IA aprende lo que hay en los ejemplos, también sus defectos." },
        { id: 's8', k: 'anim', t: "Biaix: quan els exemples enganyen|Sesgo: cuando los ejemplos engañan", anim: 'd2biaix', x: "Tots els gats en un sofà… i la IA aprèn «sofà = gat».|Todos los gatos en un sofá… y la IA aprende «sofá = gato».",
          nota: "Per als grans: amb persones, si gairebé tots els exemples són d'un sol tipus de gent, la IA pot funcionar pitjor amb els altres. Per això cal revisar els exemples.|Para los mayores: con personas, si casi todos los ejemplos son de un solo tipo de gente, la IA puede funcionar peor con los demás. Por eso hay que revisar los ejemplos." },
        { id: 's9', k: 'media', t: "La IA també s'equivoca|La IA también se equivoca", x: "Respon molt segura… però les aranyes tenen 8 potes!|Responde muy segura… ¡pero las arañas tienen 8 patas!", media: SPIDER,
          nota: "Pregunta com ho podrien comprovar. Remarca que la IA no menteix a posta: no sap si el que diu és cert.|Pregunta cómo lo podrían comprobar. Remarca que la IA no miente a propósito: no sabe si lo que dice es cierto." },
        { id: 's10', k: 'concepte', t: "Què NO és una IA|Qué NO es una IA",
          punts: ["No pensa ni sent com una persona.|No piensa ni siente como una persona.", "No ho sap tot: només el que ha après dels exemples.|No lo sabe todo: solo lo que ha aprendido de los ejemplos.", "Es pot equivocar amb molta seguretat.|Se puede equivocar con mucha seguridad.", "No és màgia: la fan persones, amb exemples.|No es magia: la hacen personas, con ejemplos."],
          nota: "Torna a la pissarra de l'inici i marca les idees que ara canviarien.|Vuelve a la pizarra del principio y marca las ideas que ahora cambiarían." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Què és la intel·ligència artificial?».|Abre la sesión «¿Qué es la inteligencia artificial?».", "Entrena la IA de fruites i prova d'etiquetar-ne una malament.|Entrena la IA de frutas y prueba a etiquetar una mal.", "Entrena la IA de gats i gossos: on són els animals?|Entrena la IA de gatos y perros: ¿dónde están los animales?", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Si algú s'enfada perquè la IA falla, recorda-li la ronda 1 dels Blips.|Si alguien se enfada porque la IA falla, recuérdale la ronda 1 de los Blips." },
        { id: 's12', k: 'repte', t: "Reptes: la IA, amb cap|Retos: la IA, con cabeza", timer: 7,
          punts: ["1. Arreglem el biaix|1. Arreglemos el sesgo", "2. El treball dels volcans|2. El trabajo de los volcanes", "3. Bona idea o millor no?|3. ¿Buena idea o mejor no?", "4. Els errors de l'AjudaBot|4. Los errores de AjudaBot"],
          nota: "Al repte 4, fes notar que hi ha dos tipus de problemes: dades falses i coses que no s'han de fer.|En el reto 4, haz notar que hay dos tipos de problemas: datos falsos y cosas que no se deben hacer." },
        { id: 's13', k: 'concepte', t: "La IA, amb cap|La IA, con cabeza", pic: 'img/ment/lli.webp',
          punts: ["Dades personals, fora.|Datos personales, fuera.", "Comprova el que diu.|Comprueba lo que dice.", "Si t'ajuda, digues-ho: no ho facis passar per teu.|Si te ayuda, dilo: no lo hagas pasar por tuyo.", "Amb un adult i seguint les normes de casa i de l'escola.|Con un adulto y siguiendo las normas de casa y de la escuela."],
          nota: "Explica que moltes eines d'IA tenen una edat mínima o demanen el permís de la família, i comenta les normes del centre.|Explica que muchas herramientas de IA tienen una edad mínima o piden el permiso de la familia, y comenta las normas del centro." },
        { id: 's14', k: 'activitat', t: "Crea: la teva IA|Crea: tu IA", timer: 5, x: "Entrena una IA que sàpiga si un animal vola o neda. Compte amb el pingüí!|Entrena una IA que sepa si un animal vuela o nada. ¡Cuidado con el pingüino!",
          nota: "En parelles, que s'expliquin per què la seva IA ha encertat o fallat.|Por parejas, que se expliquen por qué su IA ha acertado o fallado." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una IA aprèn de molts exemples i fa prediccions.|Una IA aprende de muchos ejemplos y hace predicciones.", "No pensa ni sent; es pot equivocar i tenir biaix.|No piensa ni siente; se puede equivocar y tener sesgo.", "Dades fora, comprova i sigues honest/a.|Datos fuera, comprueba y sé honesto/a."],
          nota: "Torneu a votar les preguntes de l'inici i compareu-ho amb la pissarra.|Volved a votar las preguntas del principio y comparadlo con la pizarra." },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Explica amb una frase què és una IA.|Explica con una frase qué es una IA.", "Digues una cosa que no faries mai amb una IA.|Di una cosa que no harías nunca con una IA."],
          nota: "Anota qui encara creu que la IA «pensa»: hi podeu tornar a la propera sessió.|Anota quién todavía cree que la IA «piensa»: podéis volver a ello en la próxima sesión." }
      ],
      print: [
        { id: 'p1', t: "Blips i Blops|Blips y Blops", k: 'targetes',
          intro: "Un paquet per grup. Retalleu-les i poseu en un sobre la ronda 1 i les proves, i en un altre la ronda 2. Si voleu, abans de començar, dibuixeu cada criatura a la seva targeta.|Un paquete por grupo. Recortadlas y poned en un sobre la ronda 1 y las pruebas, y en otro la ronda 2. Si queréis, antes de empezar, dibujad cada criatura en su tarjeta.",
          items: [
            { t: "Ronda 1 · BLIP · blau · 3 ulls · rodó ⭐|Ronda 1 · BLIP · azul · 3 ojos · redondo ⭐", n: 1 },
            { t: "Ronda 1 · BLIP · blau · 3 ulls · quadrat ⭐|Ronda 1 · BLIP · azul · 3 ojos · cuadrado ⭐", n: 1 },
            { t: "Ronda 1 · BLIP · blau · 3 ulls · triangular ⭐|Ronda 1 · BLIP · azul · 3 ojos · triangular ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · rodó ⭐|Ronda 1 · BLOP · verde · 1 ojo · redondo ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · quadrat ⭐|Ronda 1 · BLOP · verde · 1 ojo · cuadrado ⭐", n: 1 },
            { t: "Ronda 1 · BLOP · verd · 1 ull · triangular ⭐|Ronda 1 · BLOP · verde · 1 ojo · triangular ⭐", n: 1 },
            { t: "Prova A · Blip o Blop? · verd · 3 ulls · rodó ❓|Prueba A · ¿Blip o Blop? · verde · 3 ojos · redondo ❓", n: 1 },
            { t: "Prova B · Blip o Blop? · blau · 1 ull · quadrat ❓|Prueba B · ¿Blip o Blop? · azul · 1 ojo · cuadrado ❓", n: 1 },
            { t: "Ronda 2 · BLIP · verd · 3 ulls · quadrat ⭐|Ronda 2 · BLIP · verde · 3 ojos · cuadrado ⭐", n: 1 },
            { t: "Ronda 2 · BLIP · groc · 3 ulls · rodó ⭐|Ronda 2 · BLIP · amarillo · 3 ojos · redondo ⭐", n: 1 },
            { t: "Ronda 2 · BLOP · blau · 1 ull · triangular ⭐|Ronda 2 · BLOP · azul · 1 ojo · triangular ⭐", n: 1 },
            { t: "Ronda 2 · BLOP · vermell · 1 ull · rodó ⭐|Ronda 2 · BLOP · rojo · 1 ojo · redondo ⭐", n: 1 },
            { t: "Prova C · Blip o Blop? · vermell · 3 ulls · triangular ❓|Prueba C · ¿Blip o Blop? · rojo · 3 ojos · triangular ❓", n: 1 }
          ] },
        { id: 'p2', t: "Pensem com una IA|Pensemos como una IA", k: 'fitxa',
          intro: "Responeu en grup després de les dues rondes dels Blips i Blops.|Responded en grupo después de las dos rondas de los Blips y Blops.",
          items: [
            { q: "Ronda 1: quina regla vau fer servir per reconèixer un Blip?|Ronda 1: ¿qué regla usasteis para reconocer un Blip?", sol: "Molts grups diran «són blaus». És una regla raonable amb aquells exemples: el problema eren els exemples, no el grup.|Muchos grupos dirán «son azules». Es una regla razonable con esos ejemplos: el problema eran los ejemplos, no el grupo." },
            { q: "Per què dubtàveu amb la prova A (verda i amb 3 ulls)?|¿Por qué dudabais con la prueba A (verde y con 3 ojos)?", sol: "Perquè als exemples el color i els ulls anaven sempre junts: no es podia saber quina de les dues coses importava.|Porque en los ejemplos el color y los ojos iban siempre juntos: no se podía saber cuál de las dos cosas importaba." },
            { q: "Ronda 2: quina és la regla de veritat? Com són les proves A, B i C?|Ronda 2: ¿cuál es la regla de verdad? ¿Cómo son las pruebas A, B y C?", sol: "Els Blips tenen 3 ulls i els Blops, 1; el color no hi importa. A i C són Blips; B és un Blop.|Los Blips tienen 3 ojos y los Blops, 1; el color no importa. A y C son Blips; B es un Blop." },
            { q: "Què ha de fer qui crea una IA perquè no tingui biaix?|¿Qué tiene que hacer quien crea una IA para que no tenga sesgo?", sol: "Donar-li exemples variats, de tota mena, i provar-la amb casos diferents abans de fer-la servir.|Darle ejemplos variados, de todo tipo, y probarla con casos diferentes antes de usarla." },
            { q: "Per anar més enllà: inventeu una IA que ajudaria la vostra escola. Què aprendria i de quins exemples? Quins errors podria fer?|Para ir más allá: inventad una IA que ayudaría a vuestra escuela. ¿Qué aprendería y de qué ejemplos? ¿Qué errores podría cometer?", sol: "Resposta oberta. Valoreu que pensin en els exemples, en els errors possibles i en no fer servir dades personals.|Respuesta abierta. Valorad que piensen en los ejemplos, en los errores posibles y en no usar datos personales." }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Respecte a la xarxa ---------- */
    'd2-3': {
      obj: [
        "L'alumne/a explica que darrere de cada pantalla hi ha una persona i escriu missatges amables i concrets.|El alumno/a explica que detrás de cada pantalla hay una persona y escribe mensajes amables y concretos.",
        "L'alumne/a distingeix el ciberassetjament (fer mal de manera repetida) d'una discussió puntual i sap que mai no és culpa de qui el pateix.|El alumno/a distingue el ciberacoso (hacer daño de manera repetida) de una discusión puntual y sabe que nunca es culpa de quien lo sufre.",
        "L'alumne/a proposa accions d'espectador/a actiu/va: donar suport, no sumar-s'hi i explicar-ho a un adult.|El alumno/a propone acciones de espectador/a activo/a: dar apoyo, no sumarse y contárselo a un adulto.",
        "L'alumne/a coneix els passos si alguna cosa li fa mal: no respondre amb més mal, guardar una prova, bloquejar i demanar ajuda a un adult de confiança.|El alumno/a conoce los pasos si algo le hace daño: no responder con más daño, guardar una prueba, bloquear y pedir ayuda a un adulto de confianza."
      ],
      comp: [
        "Competència digital (CD2): comunicar-se a la xarxa amb respecte|Competencia digital (CD2): comunicarse en la red con respeto",
        "Competència digital (CD4): benestar digital i protecció davant del ciberassetjament|Competencia digital (CD4): bienestar digital y protección ante el ciberacoso",
        "Competència personal, social i d'aprendre a aprendre: empatia, gestió de les emocions i demanar ajuda|Competencia personal, social y de aprender a aprender: empatía, gestión de las emociones y pedir ayuda",
        "Competència ciutadana: convivència, respecte i rebuig de qualsevol forma de violència|Competencia ciudadana: convivencia, respeto y rechazo de cualquier forma de violencia"
      ],
      vocab: [
        ["Ciberassetjament|Ciberacoso", "Fer mal a algú a través de la xarxa una vegada i una altra.|Hacer daño a alguien a través de la red una y otra vez."],
        ["Espectador/a actiu/va|Espectador/a activo/a", "Qui veu que algú ho passa malament i l'ajuda de manera segura.|Quien ve que alguien lo pasa mal y le ayuda de manera segura."],
        ["Empatia|Empatía", "Posar-se al lloc de l'altre i imaginar com se sent.|Ponerse en el lugar del otro e imaginar cómo se siente."],
        ["Bloquejar|Bloquear", "Fer que una persona ja no et pugui escriure.|Hacer que una persona ya no te pueda escribir."],
        ["Denunciar (a l'app)|Denunciar (en la app)", "Avisar l'app que algú fa mal, amb el botó que hi ha per fer-ho.|Avisar a la app de que alguien hace daño, con el botón que hay para hacerlo."],
        ["Captura de pantalla|Captura de pantalla", "Una foto del que es veu a la pantalla, que serveix de prova.|Una foto de lo que se ve en la pantalla, que sirve de prueba."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Respecte a la xarxa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Respeto en la red»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un paquet de targetes de situacions per grup i la fitxa «Reescriu el missatge»|Un paquete de tarjetas de situaciones por grupo y la ficha «Reescribe el mensaje»",
          "Papers petits o notes adhesives i una capsa per al banc de missatges amables|Papeles pequeños o notas adhesivas y una caja para el banco de mensajes amables"
        ],
        imprimir: ["Situacions: què faria un espectador/a actiu/va?|Situaciones: ¿qué haría un espectador/a activo/a?", "Reescriu el missatge|Reescribe el mensaje"],
        prep: [
          "Llegir les situacions i canviar qualsevol nom que coincideixi amb el d'un alumne/a de la classe.|Leer las situaciones y cambiar cualquier nombre que coincida con el de un alumno/a de la clase.",
          "Conèixer el protocol del centre per si algun alumne/a explica un cas real: agrair la confiança, no prometre secret, informar la tutoria i la família.|Conocer el protocolo del centro por si algún alumno/a cuenta un caso real: agradecer la confianza, no prometer secreto, informar a la tutoría y a la familia.",
          "Tenir a mà el telèfon d'ajuda a la infància i l'adolescència: 116 111 (gratuït i confidencial).|Tener a mano el teléfono de ayuda a la infancia y la adolescencia: 116 111 (gratuito y confidencial).",
          "Preparar papers amb el nom de cada alumne/a per sortejar a qui escriu cadascú el missatge amable.|Preparar papeles con el nombre de cada alumno/a para sortear a quién escribe cada uno el mensaje amable."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: com et sents quan…?|Bienvenida: ¿cómo te sientes cuando…?", fase: 'inici',
          fa: "Comença amb tres preguntes d'emocions i deixa que responguin amb el cos (polze amunt, al mig o avall). Projecta la publicació del drac i compara els dos comentaris: un «ok.» sec i un comentari concret. Pregunta com se sentiria l'Iu amb cadascun.|Empieza con tres preguntas de emociones y deja que respondan con el cuerpo (pulgar arriba, en medio o abajo). Proyecta la publicación del dragón y compara los dos comentarios: un «ok.» seco y un comentario concreto. Pregunta cómo se sentiría Iu con cada uno.",
          diu: ["Com et sents quan algú et respon només «ok.»?|¿Cómo te sientes cuando alguien te responde solo «ok.»?",
            "A la xarxa no veiem la cara de l'altre. Què ens perdem?|En la red no vemos la cara del otro. ¿Qué nos perdemos?",
            "Abans d'enviar: ho diria si el tingués al davant?|Antes de enviar: ¿lo diría si lo tuviera delante?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Ciberassetjament i espectadors actius|Ciberacoso y espectadores activos", fase: 'teoria',
          fa: "Projecta el xat de grup (sense llegir-lo amb to de burla) i pregunta com se sent l'Àlex. Explica què és el ciberassetjament i què no ho és (una discussió d'un dia). Deixa molt clar que mai no és culpa de qui el pateix. Presenta l'espectador/a actiu/va amb l'animació i fixa't en la Nora del xat: ha fet les tres coses?|Proyecta el chat de grupo (sin leerlo con tono de burla) y pregunta cómo se siente Álex. Explica qué es el ciberacoso y qué no lo es (una discusión de un día). Deja muy claro que nunca es culpa de quien lo sufre. Presenta al espectador/a activo/a con la animación y fijaos en Nora del chat: ¿ha hecho las tres cosas?",
          diu: ["Com creieu que se sent l'Àlex quan veu els 😂?|¿Cómo creéis que se siente Álex cuando ve los 😂?",
            "Riure també és sumar-s'hi. Què podria fer la resta del grup?|Reírse también es sumarse. ¿Qué podría hacer el resto del grupo?",
            "No cal enfrontar-se a ningú: explicar-ho a un adult ja és ser valent/a.|No hace falta enfrentarse a nadie: contárselo a un adulto ya es ser valiente."],
          slides: ['s4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Què faries? Escenes d'espectadors actius|¿Qué harías? Escenas de espectadores activos", fase: 'desconnectat',
          fa: "Grups de 3 o 4. Cada grup rep una targeta de situació, pensa tres coses que podria fer un espectador/a actiu/va i prepara una escena de 30 segons on algú dona suport (ningú no fa d'agressor amb insults de veritat). Els papers són voluntaris. Cada grup representa l'escena i la resta endevina les accions: suport, no sumar-s'hi, avisar un adult. Si queda temps, completeu la fitxa «Reescriu el missatge» en parelles.|Grupos de 3 o 4. Cada grupo recibe una tarjeta de situación, piensa tres cosas que podría hacer un espectador/a activo/a y prepara una escena de 30 segundos donde alguien da apoyo (nadie hace de agresor con insultos de verdad). Los papeles son voluntarios. Cada grupo representa la escena y el resto adivina las acciones: apoyo, no sumarse, avisar a un adulto. Si queda tiempo, completad la ficha «Reescribe el mensaje» por parejas.",
          diu: ["Quines tres coses podria fer el qui ho veu?|¿Qué tres cosas podría hacer quien lo ve?",
            "A qui ho explicaríeu? I com ho diríeu?|¿A quién se lo contaríais? ¿Y cómo lo diríais?",
            "Si alguna situació us recorda una cosa real, en podem parlar en privat després.|Si alguna situación os recuerda algo real, podemos hablarlo en privado después."],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 i després tot el grup|Grupos de 3 o 4 y después todo el grupo" },
        { min: 5, t: "El semàfor i els passos per demanar ajuda|El semáforo y los pasos para pedir ayuda", fase: 'teoria',
          fa: "Explica el semàfor del missatge (vermell, groc, verd) amb un exemple de la fitxa. Després presenta els quatre passos si alguna cosa fa mal: atura't, guarda una prova, bloqueja i denuncia, explica-ho a un adult. Remarca la diferència entre explicar-ho i «xivar-se», i dona el telèfon 116 111.|Explica el semáforo del mensaje (rojo, amarillo, verde) con un ejemplo de la ficha. Después presenta los cuatro pasos si algo hace daño: para, guarda una prueba, bloquea y denuncia, cuéntaselo a un adulto. Remarca la diferencia entre contarlo y «chivarse», y da el teléfono 116 111.",
          diu: ["Quan estàs enfadat/da, és bon moment per escriure? Semàfor vermell!|Cuando estás enfadado/a, ¿es buen momento para escribir? ¡Semáforo rojo!",
            "Explicar-ho no és xivar-se: és cuidar-te o cuidar algú.|Contarlo no es chivarse: es cuidarte o cuidar a alguien."],
          slides: ['s9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Fixa't en qui dubta a l'activitat «Fa sentir bé o pot fer mal?» i en qui tria «segur que alguna cosa has fet» a la pregunta de l'Àlex: parla-hi amb calma.|Cada alumno/a avanza a su ritmo hasta la pausa activa. Fíjate en quién duda en la actividad «¿Hace sentir bien o puede hacer daño?» y en quién elige «seguro que algo has hecho» en la pregunta de Álex: habla con él o ella con calma.",
          diu: ["Llegeix-lo en veu baixa posant-te al lloc de qui el rep.|Léelo en voz baja poniéndote en el lugar de quien lo recibe.",
            "Al xat de la classe, quin és el missatge que ajuda?|En el chat de la clase, ¿cuál es el mensaje que ayuda?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la IA, la missió, les targetes de «Descobreix», classificar missatges, la pregunta del ciberassetjament, els missatges del xat de la classe i què li diries a l'Àlex.|De «Recuerda» hasta «Investiga»: la pregunta de la IA, la misión, las tarjetas de «Descubre», clasificar mensajes, la pregunta del ciberacoso, los mensajes del chat de la clase y qué le dirías a Álex.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: actua!|Retos: ¡actúa!", fase: 'ordinador',
          fa: "Feu junts la respiració del globus de la pausa activa. Després, els tres reptes: la conversa privada amb l'Àlex, ordenar els passos i el missatge del desconegut a FotoNuvi. Anima'ls a provar també respostes equivocades per veure què passa: les converses expliquen per què i deixen rectificar.|Haced juntos la respiración del globo de la pausa activa. Después, los tres retos: la conversación privada con Álex, ordenar los pasos y el mensaje del desconocido en FotoNuvi. Anímales a probar también respuestas equivocadas para ver qué pasa: las conversaciones explican por qué y dejan rectificar.",
          diu: ["Respirar abans de respondre també és una eina.|Respirar antes de responder también es una herramienta.",
            "Què li ha dit la mare al final? Per què és important?|¿Qué le ha dicho la madre al final? ¿Por qué es importante?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el banc de missatges amables|Crea: el banco de mensajes amables", fase: 'crea',
          fa: "Cada alumne/a treu un nom a l'atzar i escriu a aquella persona un missatge amable i concret, passant-lo pel semàfor. Els missatges van a la capsa; revisa'ls abans de repartir-los al final de la classe o a la propera sessió. Així tothom en rep un. A l'app, el pas «Crea» proposa fer-ne més a casa.|Cada alumno/a saca un nombre al azar y escribe a esa persona un mensaje amable y concreto, pasándolo por el semáforo. Los mensajes van a la caja; revísalos antes de repartirlos al final de la clase o en la próxima sesión. Así todo el mundo recibe uno. En la app, el paso «Crea» propone hacer más en casa.",
          diu: ["No només «ets guai»: què t'agrada d'aquesta persona?|No solo «eres guay»: ¿qué te gusta de esta persona?",
            "Si no la coneixes gaire, pensa en una cosa que li hagis vist fer bé.|Si no la conoces mucho, piensa en algo que le hayas visto hacer bien."],
          slides: ['s14'], app: "Pas «Crea»: el banc de missatges amables (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: el banco de mensajes amables (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa el resum, deixa que facin les preguntes finals de l'app i fes el tiquet a la porta. Recorda'ls que la teva porta és oberta si mai necessiten parlar d'alguna cosa.|Repasa el resumen, deja que hagan las preguntas finales de la app y haz el ticket en la puerta. Recuérdales que tu puerta está abierta si alguna vez necesitan hablar de algo.",
          diu: ["Què fa un espectador/a actiu/va?|¿Qué hace un espectador/a activo/a?",
            "Si alguna cosa a la xarxa us fa mal, a qui ho explicaríeu?|Si algo en la red os hace daño, ¿a quién se lo contaríais?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Diu que «només era una broma» quan algú s'ha sentit malament.|Dice que «solo era una broma» cuando alguien se ha sentido mal.",
          "Pregunta: ha rigut tothom, també la persona de qui es parlava? Una broma només ho és si riu tothom.|Pregunta: ¿se ha reído todo el mundo, también la persona de quien se hablaba? Una broma solo lo es si se ríe todo el mundo."],
        ["Pensa que explicar-ho a un adult és «xivar-se» o que empitjorarà les coses.|Piensa que contárselo a un adulto es «chivarse» o que empeorará las cosas.",
          "Diferencia xivar-se (voler que castiguin algú) d'explicar-ho (cuidar). Explica que els adults poden ajudar amb discreció.|Diferencia chivarse (querer que castiguen a alguien) de contarlo (cuidar). Explica que los adultos pueden ayudar con discreción."],
        ["Proposa respondre amb insults o venjar-se.|Propone responder con insultos o vengarse.",
          "Valida l'emoció (és normal sentir ràbia) i pregunta què passaria després. Torneu junts a la respiració del globus.|Valida la emoción (es normal sentir rabia) y pregunta qué pasaría después. Volved juntos a la respiración del globo."],
        ["Creu que qui pateix ciberassetjament «alguna cosa haurà fet».|Cree que quien sufre ciberacoso «algo habrá hecho».",
          "Sigues ferm/a i amable: ningú no es mereix que el tractin malament i mai no és culpa de qui ho pateix.|Sé firme y amable: nadie se merece que lo traten mal y nunca es culpa de quien lo sufre."],
        ["Durant les escenes, algú explica o insinua un cas real de la classe.|Durante las escenas, alguien cuenta o insinúa un caso real de la clase.",
          "Atura l'escena amb calma, agraeix la confiança, no en parlis davant de tothom i segueix el protocol del centre (tutoria i família).|Para la escena con calma, agradece la confianza, no hables de ello delante de todos y sigue el protocolo del centro (tutoría y familia)."]
      ],
      diff: {
        mes: "Per anar més enllà: escriure cinc normes de respecte per al grup de xat de la classe, o pensar com hauria de ser el botó de denunciar d'una app perquè fos fàcil i segur de fer servir. Debatre per què a la xarxa costa més posar-se al lloc de l'altre.|Para ir más allá: escribir cinco normas de respeto para el grupo de chat de la clase, o pensar cómo debería ser el botón de denunciar de una app para que fuera fácil y seguro de usar. Debatir por qué en la red cuesta más ponerse en el lugar del otro.",
        menys: "Treballar una sola situació en parella amb el professor/a, triant entre tres targetes d'acció (dono suport, no m'hi sumo, ho dic a un adult). A l'app, llegir en veu alta les converses amb un company/a.|Trabajar una sola situación en pareja con el profesor/a, eligiendo entre tres tarjetas de acción (doy apoyo, no me sumo, se lo digo a un adulto). En la app, leer en voz alta las conversaciones con un compañero/a."
      },
      aval: {
        ticket: ["Digues què fa un espectador/a actiu/va.|Di qué hace un espectador/a activo/a.",
          "Digues a qui demanaries ajuda si alguna cosa a la xarxa et fes mal.|Di a quién pedirías ayuda si algo en la red te hiciera daño."],
        rubric: [
          ["Respecte i empatia|Respeto y empatía", "Escriu missatges amables i concrets i sap reescriure un missatge que fa mal.|Escribe mensajes amables y concretos y sabe reescribir un mensaje que hace daño.", "Reconeix els missatges que fan mal, però li costa reescriure'ls.|Reconoce los mensajes que hacen daño, pero le cuesta reescribirlos."],
          ["Espectador/a actiu/va|Espectador/a activo/a", "Proposa accions segures: donar suport, no sumar-s'hi i explicar-ho a un adult.|Propone acciones seguras: dar apoyo, no sumarse y contárselo a un adulto.", "Proposa una sola acció o tendeix a «no ficar-s'hi».|Propone una sola acción o tiende a «no meterse»."],
          ["Demanar ajuda|Pedir ayuda", "Sap els passos (no respondre, prova, bloquejar, adult) i diu que no és culpa de qui ho pateix.|Sabe los pasos (no responder, prueba, bloquear, adulto) y dice que no es culpa de quien lo sufre.", "Sap que ho ha de dir a un adult, però no coneix els altres passos.|Sabe que tiene que decírselo a un adulto, pero no conoce los otros pasos."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i fer junts el «banc de missatges amables» amb la família. Proposta: parleu de qui són els adults de confiança de l'infant (dins i fora de casa) i deixeu clar que pot explicar qualsevol cosa que li passi a la xarxa sense por de perdre el mòbil ni de ser renyat. Si mai ho necessiteu, el telèfon d'ajuda a la infància i l'adolescència és el 116 111 (gratuït i confidencial).|En casa, podéis repetir la sesión y hacer juntos el «banco de mensajes amables» con la familia. Propuesta: hablad de quiénes son los adultos de confianza del niño o la niña (dentro y fuera de casa) y dejad claro que puede contar cualquier cosa que le pase en la red sin miedo a perder el móvil ni a que le riñan. Si alguna vez lo necesitáis, el teléfono de ayuda a la infancia y la adolescencia es el 116 111 (gratuito y confidencial).",
      slides: [
        { id: 's1', k: 'portada', t: "Respecte a la xarxa|Respeto en la red", x: "Avui aprendrem a fer que a la xarxa tothom estigui bé, i què fer si alguna cosa fa mal.|Hoy aprenderemos a hacer que en la red todo el mundo esté bien, y qué hacer si algo hace daño.",
          nota: "Crea un clima tranquil: avui parlarem d'emocions i ningú no ha d'explicar res que no vulgui.|Crea un clima tranquilo: hoy hablaremos de emociones y nadie tiene que contar nada que no quiera." },
        { id: 's2', k: 'pregunta', t: "Com et sents quan…|Cómo te sientes cuando…", punts: ["…algú et respon només «ok.»?|…alguien te responde solo «ok.»?", "…algú et diu una cosa bonica i concreta?|…alguien te dice algo bonito y concreto?", "…et deixen fora d'un grup?|…te dejan fuera de un grupo?"],
          nota: "Que responguin amb el polze (amunt, al mig, avall). No cal que expliquin per què.|Que respondan con el pulgar (arriba, en medio, abajo). No hace falta que expliquen por qué." },
        { id: 's3', k: 'media', t: "«ok.» o «m'encanta»?|¿«ok.» o «me encanta»?", x: "Com se sentiria l'Iu amb cada comentari?|¿Cómo se sentiría Iu con cada comentario?", media: DRAC,
          nota: "Fes notar que el «ok.» potser no volia fer mal, però sense cara ni to sembla sec. Un comentari concret es nota molt.|Haz notar que el «ok.» quizá no quería hacer daño, pero sin cara ni tono parece seco. Un comentario concreto se nota mucho." },
        { id: 's4', k: 'media', t: "Quan fer mal es repeteix|Cuando hacer daño se repite", x: "Com se sent l'Àlex? Qui l'ajuda?|¿Cómo se siente Álex? ¿Quién le ayuda?", media: GRUP,
          nota: "No llegeixis els missatges amb to de burla. Busqueu junts el missatge de la Nora.|No leas los mensajes con tono de burla. Buscad juntos el mensaje de Nora." },
        { id: 's5', k: 'concepte', t: "Ciberassetjament: què és i què no és|Ciberacoso: qué es y qué no es",
          punts: ["És fer mal a algú a la xarxa una vegada i una altra.|Es hacer daño a alguien en la red una y otra vez.", "Burles, insults, fotos sense permís, deixar fora a posta…|Burlas, insultos, fotos sin permiso, dejar fuera a propósito…", "Una discussió d'un dia no ho és (però també cal respecte).|Una discusión de un día no lo es (pero también hace falta respeto).", "Mai no és culpa de qui ho pateix.|Nunca es culpa de quien lo sufre."],
          nota: "Insisteix en l'última frase: és la que més pot ajudar un infant que ho estigui passant malament.|Insiste en la última frase: es la que más puede ayudar a un niño o niña que lo esté pasando mal." },
        { id: 's6', k: 'anim', t: "Espectador/a actiu/va|Espectador/a activo/a", anim: 'd2esp', x: "Dona suport, no s'hi suma i ho explica a un adult.|Da apoyo, no se suma y se lo cuenta a un adulto.",
          nota: "Pregunta quina de les tres accions els sembla més fàcil i quina més difícil, i per què.|Pregunta cuál de las tres acciones les parece más fácil y cuál más difícil, y por qué." },
        { id: 's7', k: 'activitat', t: "Què faries?|¿Qué harías?", timer: 12,
          punts: ["Llegiu la situació de la targeta.|Leed la situación de la tarjeta.", "Penseu tres coses que podria fer un espectador/a actiu/va.|Pensad tres cosas que podría hacer un espectador/a activo/a.", "Prepareu una escena de 30 segons on algú dona suport.|Preparad una escena de 30 segundos donde alguien da apoyo.", "La resta de la classe endevina les accions.|El resto de la clase adivina las acciones."],
          nota: "Els papers són voluntaris i de mentida, amb noms inventats. Ningú no fa de víctima si no vol.|Los papeles son voluntarios y de mentira, con nombres inventados. Nadie hace de víctima si no quiere." },
        { id: 's8', k: 'activitat', t: "Les regles de les escenes|Las reglas de las escenas",
          punts: ["Res d'insults de veritat, ni en broma.|Nada de insultos de verdad, ni en broma.", "Parlem de les accions, no de persones de la classe.|Hablamos de las acciones, no de personas de la clase.", "Si alguna cosa et recorda un cas real, en pots parlar amb mi després.|Si algo te recuerda un caso real, puedes hablarlo conmigo después."],
          nota: "Deixa-la projectada mentre preparen i representen les escenes.|Déjala proyectada mientras preparan y representan las escenas." },
        { id: 's9', k: 'concepte', t: "El semàfor del missatge|El semáforo del mensaje", pic: 'img/ment/atu.webp',
          punts: ["Vermell: estàs enfadat/da? Atura't.|Rojo: ¿estás enfadado/a? Para.", "Groc: és cert? és amable? cal dir-ho?|Amarillo: ¿es cierto? ¿es amable? ¿hace falta decirlo?", "Verd: ara sí, envia'l.|Verde: ahora sí, envíalo."],
          nota: "Fes passar pel semàfor un missatge de la fitxa «Reescriu el missatge» tots junts.|Haced pasar por el semáforo un mensaje de la ficha «Reescribe el mensaje» todos juntos." },
        { id: 's10', k: 'anim', t: "Si alguna cosa et fa mal|Si algo te hace daño", anim: 'd2ajuda', x: "Atura't, guarda una prova, bloqueja i explica-ho a un adult. Mai no és culpa teva.|Para, guarda una prueba, bloquea y cuéntaselo a un adulto. Nunca es culpa tuya.",
          nota: "Explica que totes les apps tenen opcions per bloquejar i denunciar, i que es fan millor amb un adult.|Explica que todas las apps tienen opciones para bloquear y denunciar, y que se hacen mejor con un adulto." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12,
          punts: ["Obre la sessió «Respecte a la xarxa».|Abre la sesión «Respeto en la red».", "Fes la missió, «Descobreix» i «Mans a l'obra».|Haz la misión, «Descubre» y «Manos a la obra».", "A «Investiga», troba els missatges del xat de la classe.|En «Investiga», encuentra los mensajes del chat de la clase.", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "Passeja i fixa't en les respostes que culpabilitzen la víctima per parlar-ne amb calma.|Pasea y fíjate en las respuestas que culpabilizan a la víctima para hablarlo con calma." },
        { id: 's12', k: 'repte', t: "Reptes: actua!|Retos: ¡actúa!", timer: 8,
          punts: ["1. L'Àlex t'escriu en privat|1. Álex te escribe en privado", "2. Els passos, en ordre|2. Los pasos, en orden", "3. Un desconegut a FotoNuvi|3. Un desconocido en FotoNuvi"],
          nota: "Anima'ls a provar també una resposta equivocada: la conversa explica per què i deixa rectificar.|Anímales a probar también una respuesta equivocada: la conversación explica por qué y deja rectificar." },
        { id: 's13', k: 'pregunta', t: "Explicar-ho no és xivar-se|Contarlo no es chivarse",
          punts: ["Xivar-se és voler que castiguin algú.|Chivarse es querer que castiguen a alguien.", "Explicar-ho és cuidar-te o cuidar algú que ho passa malament.|Contarlo es cuidarte o cuidar a alguien que lo pasa mal.", "Adults de confiança: família, tutor/a, monitor/a…|Adultos de confianza: familia, tutor/a, monitor/a…", "Telèfon d'ajuda a la infància: 116 111 (gratuït).|Teléfono de ayuda a la infancia: 116 111 (gratuito)."],
          nota: "Que cadascú pensi en silenci en dos adults de confiança. No cal que els diguin en veu alta.|Que cada uno piense en silencio en dos adultos de confianza. No hace falta que los digan en voz alta." },
        { id: 's14', k: 'activitat', t: "Crea: el banc de missatges amables|Crea: el banco de mensajes amables", timer: 5,
          punts: ["Treu un nom de la capsa.|Saca un nombre de la caja.", "Escriu-li un missatge amable i concret.|Escríbele un mensaje amable y concreto.", "Passa'l pel semàfor i posa'l a la capsa.|Pásalo por el semáforo y ponlo en la caja."],
          nota: "Revisa els missatges abans de repartir-los. Si algú ha tret el seu propi nom, que en tregui un altre.|Revisa los mensajes antes de repartirlos. Si alguien ha sacado su propio nombre, que saque otro." },
        { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Darrere de cada pantalla hi ha una persona.|Detrás de cada pantalla hay una persona.", "Espectador/a actiu/va: suport, no sumar-s'hi i avisar un adult.|Espectador/a activo/a: apoyo, no sumarse y avisar a un adulto.", "Si alguna cosa fa mal, demana ajuda: mai no és culpa teva.|Si algo hace daño, pide ayuda: nunca es culpa tuya."],
          nota: "Acaba amb un missatge positiu: la majoria de la gent vol una xarxa amable, i ells en poden ser part.|Termina con un mensaje positivo: la mayoría de la gente quiere una red amable, y ellos pueden ser parte de ella." },
        { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues què fa un espectador/a actiu/va.|Di qué hace un espectador/a activo/a.", "Digues a qui demanaries ajuda.|Di a quién pedirías ayuda."],
          nota: "Si algun alumne/a no sap a qui demanar ajuda, parla-hi en privat i informa la tutoria.|Si algún alumno/a no sabe a quién pedir ayuda, habla con él o ella en privado e informa a la tutoría." }
      ],
      print: [
        { id: 'p1', t: "Situacions: què faria un espectador/a actiu/va?|Situaciones: ¿qué haría un espectador/a activo/a?", k: 'targetes',
          intro: "Una targeta per grup. Totes les situacions i els noms són inventats. Penseu tres coses que podria fer un espectador/a actiu/va i prepareu una escena curta on algú dona suport.|Una tarjeta por grupo. Todas las situaciones y los nombres son inventados. Pensad tres cosas que podría hacer un espectador/a activo/a y preparad una escena corta donde alguien da apoyo.",
          items: [
            { t: "Al xat de la classe pengen la foto d'un company fent una ganyota i molts hi posen rialles 📱|En el chat de la clase cuelgan la foto de un compañero haciendo una mueca y muchos ponen risas 📱", n: 1 },
            { t: "En una app de dibuixos, algú escriu cada dia a una nena que els seus dibuixos fan pena ✏|En una app de dibujos, alguien escribe cada día a una niña que sus dibujos dan pena ✏", n: 1 },
            { t: "Han fet un grup per a una festa i hi són tots menys una companya, a posta 💬|Han hecho un grupo para una fiesta y están todos menos una compañera, a propósito 💬", n: 1 },
            { t: "Algú ha creat un perfil fals amb el nom d'un company per riure-se'n 🎭|Alguien ha creado un perfil falso con el nombre de un compañero para reírse de él 🎭", n: 1 },
            { t: "Un company rep missatges que diuen que ningú no el vol a l'equip 😟|Un compañero recibe mensajes que dicen que nadie lo quiere en el equipo 😟", n: 1 },
            { t: "Al grup de l'equip de bàsquet es burlen d'una nena perquè ha fallat un tir 🏀|En el grupo del equipo de baloncesto se burlan de una niña porque ha fallado un tiro 🏀", n: 1 },
            { t: "Algú reenvia un àudio d'una companya cantant per riure-se'n 🎧|Alguien reenvía un audio de una compañera cantando para reírse de ella 🎧", n: 1 },
            { t: "Un amic t'ensenya un missatge que insulta algú i et demana que el comparteixis 🛡|Un amigo te enseña un mensaje que insulta a alguien y te pide que lo compartas 🛡", n: 1 }
          ] },
        { id: 'p2', t: "Reescriu el missatge|Reescribe el mensaje", k: 'fitxa',
          intro: "Passa cada missatge pel semàfor i reescriu-lo perquè no faci mal i, si pot ser, perquè sigui amable i concret.|Pasa cada mensaje por el semáforo y reescríbelo para que no haga daño y, si puede ser, para que sea amable y concreto.",
          items: [
            { q: "«Quin dibuix més lleig.»|«Qué dibujo más feo.»", sol: "Per exemple: «M'agraden els colors. Les mans potser les podries fer més grans?»|Por ejemplo: «Me gustan los colores. ¿Las manos quizá las podrías hacer más grandes?»" },
            { q: "«No vinguis, ets un pesat.»|«No vengas, eres un pesado.»", sol: "Per exemple: «Avui ja som molts, però la propera vegada t'avisem.»|Por ejemplo: «Hoy ya somos muchos, pero la próxima vez te avisamos.»" },
            { q: "«Has fallat el gol, ets un desastre.»|«Has fallado el gol, eres un desastre.»", sol: "Per exemple: «Ànims! Tothom en falla algun. El pròxim entrarà.»|Por ejemplo: «¡Ánimo! Todo el mundo falla alguno. El próximo entrará.»" },
            { q: "«ok.» (a algú que t'ensenya amb il·lusió una cosa que ha fet)|«ok.» (a alguien que te enseña con ilusión algo que ha hecho)", sol: "Per exemple: «Que xulo! M'encanta com ho has fet.»|Por ejemplo: «¡Qué chulo! Me encanta cómo lo has hecho.»" },
            { q: "Escriu un missatge amable i concret per a algú de la classe.|Escribe un mensaje amable y concreto para alguien de la clase.", sol: "Resposta oberta: valoreu que sigui concret i sincer.|Respuesta abierta: valorad que sea concreto y sincero." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: la campanya (final del curs) ---------- */
    'd2-4': {
      obj: [
        "L'alumne/a tria, en equip, un tema del curs i un públic per a una campanya a l'escola.|El alumno/a elige, en equipo, un tema del curso y un público para una campaña en la escuela.",
        "L'alumne/a escriu un missatge curt i positiu que diu què fer.|El alumno/a escribe un mensaje corto y positivo que dice qué hacer.",
        "L'alumne/a dissenya un cartell llegible (títol, imatge i acció) i un pla (on, qui, quan i com sabran si funciona).|El alumno/a diseña un cartel legible (título, imagen y acción) y un plan (dónde, quién, cuándo y cómo sabrán si funciona).",
        "L'alumne/a dona i rep comentaris amables per millorar la campanya i la presenta a la classe.|El alumno/a da y recibe comentarios amables para mejorar la campaña y la presenta a la clase."
      ],
      comp: [
        "Competència digital (CD3): crear contingut per informar i sensibilitzar|Competencia digital (CD3): crear contenido para informar y sensibilizar",
        "Competència ciutadana: participar en la vida de l'escola i promoure la convivència digital|Competencia ciudadana: participar en la vida de la escuela y promover la convivencia digital",
        "Comunicació oral i escrita: escriure un missatge eficaç i presentar-lo en públic|Comunicación oral y escrita: escribir un mensaje eficaz y presentarlo en público",
        "Competència emprenedora: planificar, decidir en equip i avaluar el resultat|Competencia emprendedora: planificar, decidir en equipo y evaluar el resultado"
      ],
      vocab: [
        ["Campanya|Campaña", "Un conjunt d'accions per convèncer molta gent de fer una cosa.|Un conjunto de acciones para convencer a mucha gente de hacer algo."],
        ["Públic|Público", "Les persones a qui va dirigida la campanya.|Las personas a quienes va dirigida la campaña."],
        ["Eslògan|Eslogan", "Una frase curta i fàcil de recordar que resumeix el missatge.|Una frase corta y fácil de recordar que resume el mensaje."],
        ["Cartell|Cartel", "Un full gran que es penja perquè tothom el vegi.|Una hoja grande que se cuelga para que todo el mundo la vea."],
        ["Pla|Plan", "On, qui, quan i com sabrem si la campanya funciona.|Dónde, quién, cuándo y cómo sabremos si la campaña funciona."],
        ["Esborrany|Borrador", "La primera versió d'una feina, que encara es pot millorar.|La primera versión de un trabajo, que todavía se puede mejorar."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la campanya»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la campaña»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Fulls A3 o cartolines, retoladors i colors (per equip)|Hojas A3 o cartulinas, rotuladores y colores (por equipo)",
          "La fitxa de la campanya (una per equip) i cinta adhesiva per a la galeria|La ficha de la campaña (una por equipo) y cinta adhesiva para la galería",
          "Els diplomes del curs impresos, un per alumne/a|Los diplomas del curso impresos, uno por alumno/a"
        ],
        imprimir: ["La fitxa de la campanya|La ficha de la campaña", "Diploma del curs|Diploma del curso"],
        prep: [
          "Imprimir una fitxa per equip i els diplomes amb el nom de cada alumne/a.|Imprimir una ficha por equipo y los diplomas con el nombre de cada alumno/a.",
          "Parlar amb la direcció per saber on es podran penjar els cartells i a quines classes es podrà explicar la campanya.|Hablar con la dirección para saber dónde se podrán colgar los carteles y en qué clases se podrá explicar la campaña.",
          "Escriure a la pissarra la llista de temes del curs: contrasenyes, privadesa, empremta digital, bulos, IA, respecte, descans de pantalles.|Escribir en la pizarra la lista de temas del curso: contraseñas, privacidad, huella digital, bulos, IA, respeto, descanso de pantallas.",
          "Preparar una paret o un espai per a la galeria de campanyes.|Preparar una pared o un espacio para la galería de campañas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: què hem après?|Bienvenida: ¿qué hemos aprendido?", fase: 'inici',
          fa: "Repasseu ràpidament els temes del curs amb la diapositiva de repàs: cada alumne/a diu una cosa que recorda. Després pregunta què voldrien que canviés a l'escola en l'ús d'internet i presenta el repte: una campanya feta per ells per a tota l'escola.|Repasad rápidamente los temas del curso con la diapositiva de repaso: cada alumno/a dice una cosa que recuerda. Después pregunta qué querrían que cambiara en la escuela en el uso de internet y presenta el reto: una campaña hecha por ellos para toda la escuela.",
          diu: ["Digueu-me una cosa que hàgiu après al curs i que us sembli important.|Decidme una cosa que hayáis aprendido en el curso y que os parezca importante.",
            "Què us hauria agradat saber abans? A qui li aniria bé saber-ho?|¿Qué os habría gustado saber antes? ¿A quién le iría bien saberlo?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 7, t: "Les tres parts d'una campanya|Las tres partes de una campaña", fase: 'teoria',
          fa: "Amb l'animació, presenta el cartell, el missatge i el pla. Ensenya l'exemple de l'escola de Vilabit i pregunta què el fa bo. Explica què fa que un cartell es llegeixi de lluny i les quatre preguntes del pla. Remarca que una bona campanya dona eines en lloc de fer por.|Con la animación, presenta el cartel, el mensaje y el plan. Enseña el ejemplo de la escuela de Vilabit y pregunta qué lo hace bueno. Explica qué hace que un cartel se lea de lejos y las cuatro preguntas del plan. Remarca que una buena campaña da herramientas en lugar de dar miedo.",
          diu: ["Què diu el cartell que hem de fer?|¿Qué dice el cartel que tenemos que hacer?",
            "Un cartell que fa por, ajuda o espanta?|Un cartel que da miedo, ¿ayuda o asusta?"],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Equips: tema, públic i eslògan|Equipos: tema, público y eslogan", fase: 'desconnectat',
          fa: "Forma equips de 3 o 4 i reparteix papers: coordinador/a, escriptor/a, dissenyador/a i portaveu. Cada equip tria un tema i un públic, fa una pluja d'idees d'almenys cinc eslògans i en tria un. Ho escriuen a la fitxa de la campanya. Vigila que no hi hagi dos equips amb el mateix tema i públic.|Forma equipos de 3 o 4 y reparte papeles: coordinador/a, escritor/a, diseñador/a y portavoz. Cada equipo elige un tema y un público, hace una lluvia de ideas de al menos cinco eslóganes y elige uno. Lo escriben en la ficha de la campaña. Vigila que no haya dos equipos con el mismo tema y público.",
          diu: ["Primer moltes idees, després triem. Cap idea no és ximple!|Primero muchas ideas, después elegimos. ¡Ninguna idea es tonta!",
            "El vostre eslògan es pot dir d'una alenada? Diu què fer?|¿Vuestro eslogan se puede decir de un tirón? ¿Dice qué hacer?",
            "Per a qui és? Ho entendrien els de 1r?|¿Para quién es? ¿Lo entenderían los de 1.º?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Equips de 3 o 4 amb papers|Equipos de 3 o 4 con papeles" },
        { min: 13, t: "A l'ordinador: prepara la campanya|En el ordenador: prepara la campaña", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins al repte 3 (la conversa amb l'Iu). Són activitats curtes que preparen les decisions de l'equip: les parts de la campanya, el públic, revisar un esborrany, eslògans que funcionen, l'ordre del pla i les decisions sobre fotos, IA i to. Si un equip acaba abans, que comenci l'esbós del cartell.|Cada alumno/a hace la sesión hasta el reto 3 (la conversación con Iu). Son actividades cortas que preparan las decisiones del equipo: las partes de la campaña, el público, revisar un borrador, eslóganes que funcionan, el orden del plan y las decisiones sobre fotos, IA y tono. Si un equipo termina antes, que empiece el boceto del cartel.",
          diu: ["Quina millora proposaríeu a l'esborrany de l'equip de la Mia?|¿Qué mejora propondríais al borrador del equipo de Mia?",
            "Podem posar la foto d'un company al cartell? Per què?|¿Podemos poner la foto de un compañero en el cartel? ¿Por qué?"],
          slides: ['s10'], app: "De «Recorda» fins al repte 3: les dues preguntes de repàs, la missió, les targetes de «Descobreix», cartell, missatge o pla, el públic de 1r, l'esborrany de la Mia, la pausa activa, els eslògans, ordenar el pla i la conversa amb l'Iu.|De «Recuerda» hasta el reto 3: las dos preguntas de repaso, la misión, las tarjetas de «Descubre», cartel, mensaje o plan, el público de 1.º, el borrador de Mia, la pausa activa, los eslóganes, ordenar el plan y la conversación con Iu.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el cartell i el pla|Crea: el cartel y el plan", fase: 'crea',
          fa: "Els equips dibuixen el cartell en A3 i omplen el pla a la fitxa. Als 10 minuts, cada equip ensenya l'esborrany a un altre equip, que li diu una cosa que funciona i una millora concreta. Després, cada alumne/a toca «Ho hem fet!» al pas «La nostra campanya» i fa la revisió de l'app amb el seu equip.|Los equipos dibujan el cartel en A3 y rellenan el plan en la ficha. A los 10 minutos, cada equipo enseña el borrador a otro equipo, que le dice algo que funciona y una mejora concreta. Después, cada alumno/a toca «¡Lo hemos hecho!» en el paso «Nuestra campaña» y hace la revisión de la app con su equipo.",
          diu: ["Es llegeix des de l'altra punta de la classe? Proveu-ho!|¿Se lee desde la otra punta de la clase? ¡Probadlo!",
            "Comenceu per una cosa que funciona i després proposeu una millora.|Empezad por algo que funciona y después proponed una mejora.",
            "On el penjareu? Qui l'explicarà? Com sabreu si ha funcionat?|¿Dónde lo colgaréis? ¿Quién lo explicará? ¿Cómo sabréis si ha funcionado?"],
          slides: ['s11', 's12'], app: "Passos «La nostra campanya» (Ho hem fet!) i la revisió de la campanya.|Pasos «Nuestra campaña» (¡Lo hemos hecho!) y la revisión de la campaña.", org: "Equips i després revisió entre equips|Equipos y después revisión entre equipos" },
        { min: 8, t: "Galeria, tiquet i diploma|Galería, ticket y diploma", fase: 'tancament',
          fa: "Pengeu els cartells i feu la galeria: cada portaveu explica en 30 segons el missatge i el pla, i la resta diu una cosa que li ha agradat. Deixa que facin les preguntes finals i el diploma de l'app, fes el tiquet i lliura els diplomes impresos. Acordeu quan es penjaran els cartells a l'escola.|Colgad los carteles y haced la galería: cada portavoz explica en 30 segundos el mensaje y el plan, y el resto dice algo que le ha gustado. Deja que hagan las preguntas finales y el diploma de la app, haz el ticket y entrega los diplomas impresos. Acordad cuándo se colgarán los carteles en la escuela.",
          diu: ["Què us ha agradat de la campanya d'aquest equip?|¿Qué os ha gustado de la campaña de este equipo?",
            "Ara sou experts en ciutadania digital: ho podeu explicar a casa i a l'escola!|Ahora sois expertos en ciudadanía digital: ¡lo podéis explicar en casa y en la escuela!"],
          slides: ['s13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals, el diploma del curs i com m'he sentit.|«Cierre»: las dos preguntas finales, el diploma del curso y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Fa un eslògan llarg que ho vol explicar tot.|Hace un eslogan largo que lo quiere explicar todo.",
          "Demana-li que el digui d'una alenada. Si no pot, que triï la idea més important i la resti la posi al pla (qui ho explicarà).|Pídele que lo diga de un tirón. Si no puede, que elija la idea más importante y el resto lo ponga en el plan (quién lo explicará)."],
        ["Tria un missatge que fa por («internet és perillós») en lloc de donar eines.|Elige un mensaje que da miedo («internet es peligroso») en lugar de dar herramientas.",
          "Pregunta: després de llegir-lo, què sabrà fer un nen de 1r? Ajuda'l a convertir la por en una acció («Si dubtes, pregunta»).|Pregunta: después de leerlo, ¿qué sabrá hacer un niño de 1.º? Ayúdale a convertir el miedo en una acción («Si dudas, pregunta»)."],
        ["Vol posar fotos de companys o imatges trobades a internet sense pensar-hi.|Quiere poner fotos de compañeros o imágenes encontradas en internet sin pensarlo.",
          "Recorda la conversa amb l'Iu: la imatge de cadascú és seva. Proposa dibuixos propis o icones.|Recuerda la conversación con Iu: la imagen de cada uno es suya. Propón dibujos propios o iconos."],
        ["A l'equip, una persona ho fa tot i les altres miren.|En el equipo, una persona lo hace todo y las otras miran.",
          "Torna als papers: què fa el coordinador/a? I l'escriptor/a? Que cadascú tingui una part visible al cartell o al pla.|Vuelve a los papeles: ¿qué hace el coordinador/a? ¿Y el escritor/a? Que cada uno tenga una parte visible en el cartel o en el plan."],
        ["Es pren malament els comentaris d'un altre equip.|Se toma mal los comentarios de otro equipo.",
          "Recorda que és un esborrany i que totes les campanyes es milloren provant-les. Valora que l'altre equip hagi començat per una cosa que funciona.|Recuerda que es un borrador y que todas las campañas se mejoran probándolas. Valora que el otro equipo haya empezado por algo que funciona."]
      ],
      diff: {
        mes: "Per anar més enllà: preparar una enquesta curta (tres preguntes) per passar abans i després de la campanya i comparar-ne els resultats, o fer una segona versió del cartell per a un altre públic (les famílies, per exemple).|Para ir más allá: preparar una encuesta corta (tres preguntas) para pasar antes y después de la campaña y comparar los resultados, o hacer una segunda versión del cartel para otro público (las familias, por ejemplo).",
        menys: "Donar a l'equip tres eslògans per triar i un esquema de cartell amb tres caixes (títol, dibuix, acció). Que la persona que ho necessiti faci de dissenyador/a, amb un paper concret i visible.|Dar al equipo tres eslóganes para elegir y un esquema de cartel con tres cajas (título, dibujo, acción). Que la persona que lo necesite haga de diseñador/a, con un papel concreto y visible."
      },
      aval: {
        ticket: ["Digues les tres parts d'una campanya.|Di las tres partes de una campaña.",
          "Digues el teu eslògan i per què funciona.|Di tu eslogan y por qué funciona."],
        rubric: [
          ["Missatge|Mensaje", "És curt, positiu, diu què fer i s'adapta al públic.|Es corto, positivo, dice qué hacer y se adapta al público.", "Es entén, però és llarg, vague o fa una mica de por.|Se entiende, pero es largo, vago o da un poco de miedo."],
          ["Cartell i pla|Cartel y plan", "El cartell es llegeix de lluny i el pla respon on, qui, quan i com sabran si funciona.|El cartel se lee de lejos y el plan responde dónde, quién, cuándo y cómo sabrán si funciona.", "Té cartell, però el pla està incomplet o el cartell té massa text.|Tiene cartel, pero el plan está incompleto o el cartel tiene demasiado texto."],
          ["Treball en equip i comentaris|Trabajo en equipo y comentarios", "Fa la seva part, dona comentaris amables i concrets i en fa servir per millorar.|Hace su parte, da comentarios amables y concretos y los usa para mejorar.", "Participa, però li costa donar o acceptar comentaris.|Participa, pero le cuesta dar o aceptar comentarios."]
        ]
      },
      casa: "A casa, l'infant pot ensenyar el diploma i explicar la campanya del seu equip. Proposta per a la família: feu junts una «campanya de casa» amb tres normes digitals per a tota la família (per exemple, les hores sense pantalles, comprovar abans de compartir i explicar-nos les coses que ens fan sentir malament) i pengeu-la a la nevera.|En casa, el niño o la niña puede enseñar el diploma y explicar la campaña de su equipo. Propuesta para la familia: haced juntos una «campaña de casa» con tres normas digitales para toda la familia (por ejemplo, las horas sin pantallas, comprobar antes de compartir y contarnos las cosas que nos hacen sentir mal) y colgadla en la nevera.",
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: la campanya|Proyecto: la campaña", x: "Avui el vostre equip crearà una campanya perquè tota l'escola faci servir internet amb seny.|Hoy vuestro equipo creará una campaña para que toda la escuela use internet con cabeza.",
          nota: "És l'última sessió del curs: presenta-la com una celebració del que han après.|Es la última sesión del curso: preséntala como una celebración de lo que han aprendido." },
        { id: 's2', k: 'repas', t: "Què hem après al curs?|¿Qué hemos aprendido en el curso?",
          punts: ["Contrasenyes fortes i secretes|Contraseñas fuertes y secretas", "Què compartim i qui ho veu|Qué compartimos y quién lo ve", "L'empremta digital|La huella digital", "Caçar bulos i missatges trampa|Cazar bulos y mensajes trampa", "Què és (i què no és) una IA|Qué es (y qué no es) una IA", "Respecte a la xarxa i demanar ajuda|Respeto en la red y pedir ayuda"],
          nota: "Que cada alumne/a digui una cosa concreta que recordi d'algun tema.|Que cada alumno/a diga una cosa concreta que recuerde de algún tema." },
        { id: 's3', k: 'pregunta', t: "Què voldríeu que canviés a l'escola?|¿Qué querríais que cambiara en la escuela?",
          punts: ["Què veieu que passa sovint al mòbil o a l'ordinador?|¿Qué veis que pasa a menudo en el móvil o en el ordenador?", "Què us hauria agradat saber abans?|¿Qué os habría gustado saber antes?", "A qui li aniria bé saber-ho?|¿A quién le iría bien saberlo?"],
          nota: "Apunta idees a la pissarra: seran la base per triar els temes de les campanyes.|Apunta ideas en la pizarra: serán la base para elegir los temas de las campañas." },
        { id: 's4', k: 'anim', t: "Les tres parts d'una campanya|Las tres partes de una campaña", anim: 'd2camp', x: "El cartell es veu, el missatge es recorda i el pla fa que arribi a tothom.|El cartel se ve, el mensaje se recuerda y el plan hace que llegue a todo el mundo.",
          nota: "Pregunta si recorden alguna campanya de l'escola o del barri (sense marques) i quina part els va arribar més.|Pregunta si recuerdan alguna campaña de la escuela o del barrio (sin marcas) y qué parte les llegó más." },
        { id: 's5', k: 'media', t: "Un exemple de missatge|Un ejemplo de mensaje", x: "Curt, positiu i diu què fer.|Corto, positivo y dice qué hacer.", media: CAMP,
          nota: "Analitzeu-lo junts: té una acció? Es pot dir d'una alenada? Per a quin públic serviria?|Analizadlo juntos: ¿tiene una acción? ¿Se puede decir de un tirón? ¿Para qué público serviría?" },
        { id: 's6', k: 'concepte', t: "Un bon cartell|Un buen cartel", pic: 'img/ment/ate.webp',
          punts: ["Títol gran que es llegeix de lluny.|Título grande que se lee de lejos.", "Una imatge o icona clara, feta per vosaltres.|Una imagen o icono claro, hecho por vosotros.", "Poques paraules i una acció concreta.|Pocas palabras y una acción concreta.", "Colors que contrastin.|Colores que contrasten."],
          nota: "Recorda que no s'hi poden posar fotos de persones sense permís.|Recuerda que no se pueden poner fotos de personas sin permiso." },
        { id: 's7', k: 'concepte', t: "El pla|El plan", pic: 'img/ment/nom.webp',
          punts: ["On el penjareu?|¿Dónde lo colgaréis?", "Qui l'explicarà?|¿Quién lo explicará?", "Quan?|¿Cuándo?", "Com sabreu si ha funcionat?|¿Cómo sabréis si ha funcionado?"],
          nota: "Per a l'última pregunta, proposa preguntar a una classe abans i després què farien davant d'un bulo o d'un missatge que fa mal.|Para la última pregunta, propón preguntar a una clase antes y después qué harían ante un bulo o un mensaje que hace daño." },
        { id: 's8', k: 'activitat', t: "Equips: tema, públic i eslògan|Equipos: tema, público y eslogan", timer: 12,
          punts: ["Feu equips de 3 o 4 i repartiu papers: coordinador/a, escriptor/a, dissenyador/a i portaveu.|Haced equipos de 3 o 4 y repartid papeles: coordinador/a, escritor/a, diseñador/a y portavoz.", "Trieu el tema i el públic.|Elegid el tema y el público.", "Pluja d'idees: almenys 5 eslògans.|Lluvia de ideas: al menos 5 eslóganes.", "Trieu-ne un i escriviu-lo a la fitxa.|Elegid uno y escribidlo en la ficha."],
          nota: "Passa pels equips i ajuda a convertir els eslògans que fan por en accions.|Pasa por los equipos y ayuda a convertir los eslóganes que dan miedo en acciones." },
        { id: 's9', k: 'activitat', t: "Regles de la pluja d'idees|Reglas de la lluvia de ideas",
          punts: ["Primer moltes idees, després triem.|Primero muchas ideas, después elegimos.", "Cap idea no és ximple.|Ninguna idea es tonta.", "Un bon eslògan: curt, positiu i diu què fer.|Un buen eslogan: corto, positivo y dice qué hacer."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Projecte: la campanya».|Abre la sesión «Proyecto: la campaña».", "Fes fins al repte 3: la conversa amb l'Iu.|Haz hasta el reto 3: la conversación con Iu.", "Apunta a la fitxa les idees que et serveixin per al vostre cartell.|Apunta en la ficha las ideas que te sirvan para vuestro cartel."],
          nota: "Si algun equip acaba abans, que comenci l'esbós del cartell.|Si algún equipo termina antes, que empiece el boceto del cartel." },
        { id: 's11', k: 'activitat', t: "Crea: el cartell i el pla|Crea: el cartel y el plan", timer: 15,
          punts: ["Dibuixeu el cartell en A3: títol gran, dibuix vostre i acció.|Dibujad el cartel en A3: título grande, dibujo vuestro y acción.", "Ompliu el pla a la fitxa.|Rellenad el plan en la ficha.", "Ensenyeu-lo a un altre equip: una cosa que funciona i una millora.|Enseñádselo a otro equipo: algo que funciona y una mejora.", "A l'app: «Ho hem fet!» i la revisió de la campanya.|En la app: «¡Lo hemos hecho!» y la revisión de la campaña."],
          nota: "Avisa als 10 minuts per fer la revisió entre equips.|Avisa a los 10 minutos para hacer la revisión entre equipos." },
        { id: 's12', k: 'activitat', t: "Com donar comentaris|Cómo dar comentarios",
          punts: ["Comença per una cosa que funciona.|Empieza por algo que funciona.", "Proposa una millora concreta.|Propón una mejora concreta.", "Parla del cartell, no de les persones.|Habla del cartel, no de las personas."],
          nota: "És el mateix respecte de la sessió anterior, aplicat al treball en equip.|Es el mismo respeto de la sesión anterior, aplicado al trabajo en equipo." },
        { id: 's13', k: 'activitat', t: "Galeria de campanyes|Galería de campañas", timer: 5,
          punts: ["Pengeu els cartells.|Colgad los carteles.", "Cada portaveu explica el missatge i el pla en 30 segons.|Cada portavoz explica el mensaje y el plan en 30 segundos.", "La resta diu una cosa que li ha agradat.|El resto dice algo que le ha gustado."],
          nota: "Fes fotos dels cartells (sense alumnes) per recordar-los i per ensenyar-los a la direcció.|Haz fotos de los carteles (sin alumnos) para recordarlos y para enseñarlos a la dirección." },
        { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una campanya té cartell, missatge i pla.|Una campaña tiene cartel, mensaje y plan.", "Un bon missatge és curt, positiu i diu què fer.|Un buen mensaje es corto, positivo y dice qué hacer.", "Podem ajudar la nostra escola a fer servir internet amb seny.|Podemos ayudar a nuestra escuela a usar internet con cabeza."],
          nota: "Acordeu la data per penjar les campanyes a l'escola.|Acordad la fecha para colgar las campañas en la escuela." },
        { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues les tres parts d'una campanya.|Di las tres partes de una campaña.", "Digues el teu eslògan i per què funciona.|Di tu eslogan y por qué funciona."],
          nota: "Fes el tiquet mentre lliures els diplomes.|Haz el ticket mientras entregas los diplomas." },
        { id: 's16', k: 'concepte', t: "Enhorabona: curs acabat!|¡Enhorabuena: curso terminado!",
          punts: ["Has acabat el curs Tech Digital.|Has terminado el curso Tech Digital.", "Ara pots ajudar la teva escola i la teva família.|Ahora puedes ayudar a tu escuela y a tu familia.", "Recorda: si dubtes, pregunta a un adult de confiança.|Recuerda: si dudas, pregunta a un adulto de confianza."],
          nota: "Lliura els diplomes impresos un a un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs.|Entrega los diplomas impresos uno a uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso." }
      ],
      print: [
        { id: 'p1', t: "La fitxa de la campanya|La ficha de la campaña", k: 'fitxa',
          intro: "Una per equip. Ompliu-la mentre prepareu la campanya i guardeu-la amb el cartell.|Una por equipo. Rellenadla mientras preparáis la campaña y guardadla con el cartel.",
          items: [
            { q: "Equip i papers (coordinador/a, escriptor/a, dissenyador/a i portaveu):|Equipo y papeles (coordinador/a, escritor/a, diseñador/a y portavoz):", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "Tema de la campanya:|Tema de la campaña:", sol: "Per exemple: bulos, IA, respecte a la xarxa, contrasenyes, privadesa, empremta digital o descans de pantalles.|Por ejemplo: bulos, IA, respeto en la red, contraseñas, privacidad, huella digital o descanso de pantallas." },
            { q: "Públic: per a qui és?|Público: ¿para quién es?", sol: "Valoreu que el missatge i el cartell s'adaptin a l'edat del públic triat.|Valorad que el mensaje y el cartel se adapten a la edad del público elegido." },
            { q: "El nostre eslògan (màxim 8 paraules):|Nuestro eslogan (máximo 8 palabras):", sol: "Valoreu que sigui curt, positiu i que digui què fer.|Valorad que sea corto, positivo y que diga qué hacer." },
            { q: "Esbós del cartell (títol, dibuix i acció):|Boceto del cartel (título, dibujo y acción):", big: true, sol: "Resposta oberta: títol gran, imatge pròpia, poques paraules i una acció.|Respuesta abierta: título grande, imagen propia, pocas palabras y una acción." },
            { q: "El pla: on el penjarem? Qui l'explicarà? Quan?|El plan: ¿dónde lo colgaremos? ¿Quién lo explicará? ¿Cuándo?", sol: "Resposta oberta, amb llocs i dates concrets.|Respuesta abierta, con lugares y fechas concretos." },
            { q: "Com sabrem si ha funcionat?|¿Cómo sabremos si ha funcionado?", sol: "Per exemple, preguntant a una classe abans i després què farien davant d'un bulo o d'un missatge que fa mal.|Por ejemplo, preguntando a una clase antes y después qué harían ante un bulo o un mensaje que hace daño." },
            { q: "Una millora que ens ha proposat un altre equip:|Una mejora que nos ha propuesto otro equipo:", sol: "Resposta oberta.|Respuesta abierta." }
          ] },
        { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
          intro: "ha completat el curs Tech Digital de Numi Tech: sap cuidar-se i cuidar els altres a la xarxa i ha creat una campanya per a la seva escola.|ha completado el curso Tech Digital de Numi Tech: sabe cuidarse y cuidar a los demás en la red y ha creado una campaña para su escuela.",
          items: [
            "Crea contrasenyes fortes i protegeix les seves dades.|Crea contraseñas fuertes y protege sus datos.",
            "Pensa abans de publicar i cuida la seva empremta digital.|Piensa antes de publicar y cuida su huella digital.",
            "Comprova les notícies i detecta els missatges trampa.|Comprueba las noticias y detecta los mensajes trampa.",
            "Entén què és una IA i la fa servir amb responsabilitat.|Entiende qué es una IA y la usa con responsabilidad.",
            "Tracta bé els altres a la xarxa i sap demanar ajuda.|Trata bien a los demás en la red y sabe pedir ayuda."
          ] }
      ]
    }
  });
}
