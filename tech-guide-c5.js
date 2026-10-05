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
    intro: "<b>Nivell:</b> 4t-6è de primària (9-12 anys). Primera sessió del curs. L'alumnat descobreix què fa forta una contrasenya (llargada, varietat i cap dada personal), aprèn el truc de la frase de contrasenya i practica com dir que no, amb amabilitat, quan algú la hi demana. També s'explica, molt senzill, la verificació en dos passos com un segon pany. Importa perquè molts infants ja entren amb contrasenya a la plataforma de l'escola o a apps de casa, i els hàbits que es fan ara duren anys. La classe alterna projecció i conversa, una activitat en grups amb targetes de paper i el laboratori de contrasenyes de l'app, on mai no s'escriu cap contrasenya real.|<b>Nivel:</b> 4.º-6.º de primaria (9-12 años). Primera sesión del curso. El alumnado descubre qué hace fuerte una contraseña (longitud, variedad y ningún dato personal), aprende el truco de la frase de contraseña y practica cómo decir que no, con amabilidad, cuando alguien se la pide. También se explica, muy sencillo, la verificación en dos pasos como un segundo candado. Importa porque muchos niños y niñas ya entran con contraseña en la plataforma del colegio o en apps de casa, y los hábitos que se forman ahora duran años. La clase alterna proyección y conversación, una actividad en grupos con tarjetas de papel y el laboratorio de contraseñas de la app, donde nunca se escribe ninguna contraseña real.",
    claus: [
      "Una contrasenya forta és llarga (12 caràcters o més), variada i no porta cap dada personal (nom, mascota, aniversari, carrer).|Una contraseña fuerte es larga (12 caracteres o más), variada y no lleva ningún dato personal (nombre, mascota, cumpleaños, calle).",
      "Una frase de quatre paraules o més sense relació és forta i fàcil de recordar si la imagines com una escena absurda.|Una frase de cuatro palabras o más sin relación es fuerte y fácil de recordar si la imaginas como una escena absurda.",
      "La contrasenya només la saben l'infant i els adults que el cuiden; si algú altre la sap, s'explica a casa i es canvia, sense culpes.|La contraseña solo la saben el niño o la niña y los adultos que le cuidan; si alguien más la sabe, se explica en casa y se cambia, sin culpas.",
      "La verificació en dos passos és un segon pany (el que saps + el que tens) i el codi que arriba no es dona mai a ningú.|La verificación en dos pasos es un segundo candado (lo que sabes + lo que tienes) y el código que llega no se da nunca a nadie."
    ],
    prev: [
      "Escriure paraules i números amb el teclat de l'ordinador o la tauleta (és la primera sessió: no cal cap coneixement del curs).|Escribir palabras y números con el teclado del ordenador o la tablet (es la primera sesión: no hace falta ningún conocimiento del curso).",
      "Saber, en general, què és una app o un compte (per exemple, la plataforma de l'escola). Si no, s'explica a la benvinguda amb la imatge de la porta i la clau.|Saber, en general, qué es una app o una cuenta (por ejemplo, la plataforma del colegio). Si no, se explica en la bienvenida con la imagen de la puerta y la llave."
    ],
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
        "Un ordinador per alumne/a (o un per parella) amb Numi Tech obert a la sessió «Contrasenyes fortes»|Un ordenador por alumno/a (o uno por pareja) con Numi Tech abierto en la sesión «Contraseñas fuertes»",
        "Projector, l'ordinador del docent i la presentació d'aquesta sessió|Proyector, el ordenador del docente y la presentación de esta sesión",
        "Per grup de 4: una bossa opaca (per treure-hi les targetes de paraules), 2 fulls A4 i 4 retoladors|Por grupo de 4: una bolsa opaca (para sacar las tarjetas de palabras), 2 folios A4 y 4 rotuladores",
        "Un bloc de post-its (2 per alumne/a) i cinta adhesiva per al mural de les frases|Un bloc de pósits (2 por alumno/a) y cinta adhesiva para el mural de las frases"
      ],
      imprimir: ['Targetes de paraules (imprimible 1): un paquet de 24 targetes per grup de 4|Tarjetas de palabras (imprimible 1): un paquete de 24 tarjetas por grupo de 4', 'Endevina la contrasenya del personatge (imprimible 2): una fitxa per grup i el solucionari per al docent|Adivina la contraseña del personaje (imprimible 2): una ficha por grupo y el solucionario para el docente'],
      prep: [
        "Un o dos dies abans: imprimir i retallar un paquet de targetes de paraules per grup de 4 i posar-lo dins una bossa (si es plastifiquen, serveixen per a altres anys).|Uno o dos días antes: imprimir y recortar un paquete de tarjetas de palabras por grupo de 4 y meterlo en una bolsa (si se plastifican, sirven para otros años).",
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
        diu: ["Per què «gat2015» encara és feble? Qui podria saber aquestes dues coses? (Qui et coneix: sap que tens un gat i quan vas néixer.)|¿Por qué «gato2015» todavía es débil? ¿Quién podría saber estas dos cosas? (Quien te conoce: sabe que tienes un gato y cuándo naciste.)",
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
          "La tieta fa servir la mateixa contrasenya per a tot: què passa si algú la descobreix? (Pot obrir totes les portes alhora.)|La tía usa la misma contraseña para todo: ¿qué pasa si alguien la descubre? (Puede abrir todas las puertas a la vez.)",
          "Si algú et demana el codi que t'ha arribat al mòbil, qui creus que és? (Algú que vol entrar al teu compte.)|Si alguien te pide el código que te ha llegado al móvil, ¿quién crees que es? (Alguien que quiere entrar en tu cuenta.)",
          "Si dubtes, pensa: què faria un adult de confiança?|Si dudas, piensa: ¿qué haría un adulto de confianza?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: la tieta de l'Èric, la Jana i els dos panys, el missatge que demana el codi i «Hàbit segur o arriscat?».|«Pausa activa» y «Retos»: la tía de Èric, Jana y los dos candados, el mensaje que pide el código y «¿Hábito seguro o arriesgado?».", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: la frase del mural|Crea: la frase del mural', fase: 'crea',
        fa: "Cada alumne/a crea a l'app la frase de mentida per al mural de la classe (ha d'arribar a «Molt forta») i en fa un dibuix ràpid en un post-it, sense escriure-hi la frase. En parelles, l'altre/a intenta endevinar-la pel dibuix: si no pot, la frase és bona! Enganxeu els post-its al mural de les frases. «La clau de la família» és per fer a casa: a l'app poden tocar «Ara no».|Cada alumno/a crea en la app la frase de mentira para el mural de la clase (tiene que llegar a «Muy fuerte») y hace un dibujo rápido en un pósit, sin escribir la frase. Por parejas, el otro/a intenta adivinarla por el dibujo: si no puede, ¡la frase es buena! Pegad los pósits en el mural de las frases. «La llave de la familia» es para hacer en casa: en la app pueden tocar «Ahora no».",
        diu: ["Dibuixa la teva escena: el company o la companya pot endevinar les quatre paraules?|Dibuja tu escena: ¿el compañero o la compañera puede adivinar las cuatro palabras?",
          "Si el teu company/a no l'endevina pel dibuix, és bona senyal: tampoc no l'endevinaria un desconegut.|Si tu compañero/a no la adivina por el dibujo, es buena señal: tampoco la adivinaría un desconocido.",
          "Aquesta frase és de mentida: no la facis servir enlloc. La de veritat, la fareu a casa amb la família.|Esta frase es de mentira: no la uses en ningún sitio. La de verdad, la haréis en casa con la familia."],
        slides: ['s15'], app: "Pas «Crea»: la frase de contrasenya del mural (i «La clau de la família», per a casa).|Paso «Crea»: la frase de contraseña del mural (y «La llave de la familia», para casa).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Projecta el resum i demana a tres alumnes que en llegeixin una idea cadascun. Deixa que responguin les dues preguntes finals de l'app i la carona de com s'han sentit. A la porta, fes a cada alumne/a una de les preguntes del tiquet i anota qui dubta. Recorda la tasca de casa (La clau de la família) i que l'han de fer amb un adult.|Proyecta el resumen y pide a tres alumnos que lean una idea cada uno. Deja que respondan las dos preguntas finales de la app y la carita de cómo se han sentido. En la puerta, haz a cada alumno/a una de las preguntas del ticket y anota quién duda. Recuerda la tarea de casa (La llave de la familia) y que la tienen que hacer con un adulto.",
        diu: ["Tornem a la clau de la fruitera: on la guardarem a partir d'ara? (En un lloc que només sabem nosaltres i la família.)|Volvamos a la llave del frutero: ¿dónde la guardaremos a partir de ahora? (En un sitio que solo sabemos nosotros y la familia.)",
          "Si algú sap la teva contrasenya, a qui ho dius? (A un adult de confiança, i la canviem junts.)|Si alguien sabe tu contraseña, ¿a quién se lo dices? (A un adulto de confianza, y la cambiamos juntos.)",
          "A casa, expliqueu el truc de la frase a algú de la família, sense dir cap contrasenya en veu alta.|En casa, explicad el truco de la frase a alguien de la familia, sin decir ninguna contraseña en voz alta."],
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
        "Torna als dos panys: un és el que saps (la contrasenya) i l'altre el que tens (el mòbil de la família). Sense el mòbil, saber la contrasenya no n'hi ha prou.|Vuelve a los dos candados: uno es lo que sabes (la contraseña) y el otro lo que tienes (el móvil de la familia). Sin el móvil, saber la contraseña no basta."],
      ["Creu que, si té la verificació en dos passos, ja pot fer servir una contrasenya feble.|Cree que, si tiene la verificación en dos pasos, ya puede usar una contraseña débil.",
        "Pregunta: i si un dia algú et demana el codi amb un engany, o algú agafa el mòbil? Els dos panys han de ser forts: un no substitueix l'altre.|Pregunta: ¿y si un día alguien te pide el código con un engaño, o alguien coge el móvil? Los dos candados tienen que ser fuertes: uno no sustituye al otro."]
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
        ['No compartir i demanar ajuda|No compartir y pedir ayuda', "Diu que no amb amabilitat i sap que, si algú la sap, ho explica a un adult i la canvien.|Dice que no con amabilidad y sabe que, si alguien la sabe, se lo explica a un adulto y la cambian.", "Sap que no s'ha de compartir, però no sap què fer si algú ja la sap.|Sabe que no se tiene que compartir, pero no sabe qué hacer si alguien ya la sabe."],
        ['Verificació en dos passos|Verificación en dos pasos', "Explica amb les seves paraules els dos panys (el que saps i el que tens) i que el codi no es dona mai a ningú.|Explica con sus palabras los dos candados (lo que sabes y lo que tienes) y que el código no se da nunca a nadie.", "Sap que hi ha un codi, però no té clar per què no s'ha de donar.|Sabe que hay un código, pero no tiene claro por qué no se tiene que dar."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «La clau de la família»: l'infant explica el truc de la frase de contrasenya i acordeu una norma per si algú la descobreix. No cal dir cap contrasenya en veu alta. Els comptes i la verificació en dos passos els configura sempre un adult.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «La llave de la familia»: el niño o la niña explica el truco de la frase de contraseña y acordáis una norma por si alguien la descubre. No hace falta decir ninguna contraseña en voz alta. Las cuentas y la verificación en dos pasos las configura siempre un adulto.",
    faq: [
      ["Per què no puc dir la contrasenya al meu millor amic o amiga?|¿Por qué no puedo decirle la contraseña a mi mejor amigo o amiga?", "Perquè amb ella pot entrar com si fos tu, encara que no vulgui fer cap mal: pot esborrar alguna cosa sense voler o dir-la a algú altre. Pots ser un bon amic i, alhora, guardar la teva clau. Els adults que et cuiden sí que la poden saber.|Porque con ella puede entrar como si fueras tú, aunque no quiera hacer ningún daño: puede borrar algo sin querer o decírsela a otra persona. Puedes ser un buen amigo y, a la vez, guardar tu llave. Los adultos que te cuidan sí pueden saberla."],
      ["El laboratori diu que «Marc2014» és forta. Llavors ja està bé?|El laboratorio dice que «Marc2014» es fuerte. ¿Entonces ya está bien?", "El laboratori mira la llargada, la varietat i les paraules massa conegudes, però no sap com et dius ni quan vas néixer. Per a algú que et coneix, el teu nom i un any són de les primeres coses que provaria. Per això la norma és: cap dada teva.|El laboratorio mira la longitud, la variedad y las palabras demasiado conocidas, pero no sabe cómo te llamas ni cuándo naciste. Para alguien que te conoce, tu nombre y un año son de lo primero que probaría. Por eso la norma es: ningún dato tuyo."],
      ["Si hi poso símbols com @ o !, ja és forta?|Si le pongo símbolos como @ o !, ¿ya es fuerte?", "Els símbols ajuden, però la llargada compta molt més. «G4t!» és curta i es prova de seguida; una frase de quatre paraules sense relació és molt més difícil d'endevinar i, a més, es recorda millor.|Los símbolos ayudan, pero la longitud cuenta mucho más. «G4t!» es corta y se prueba enseguida; una frase de cuatro palabras sin relación es mucho más difícil de adivinar y, además, se recuerda mejor."],
      ["Si tinc moltes contrasenyes, on les guardo?|Si tengo muchas contraseñas, ¿dónde las guardo?", "Ho decideix un adult de casa: hi ha programes que les guarden amb clau (els gestors de contrasenyes) i també es poden apuntar en un paper ben guardat a casa. Mai en un paper enganxat a la pantalla ni en un missatge.|Lo decide un adulto de casa: hay programas que las guardan con llave (los gestores de contraseñas) y también se pueden apuntar en un papel bien guardado en casa. Nunca en un papel pegado a la pantalla ni en un mensaje."],
      ["Què passa si algú endevina la meva contrasenya?|¿Qué pasa si alguien adivina mi contraseña?", "No és culpa teva i té solució: ho expliques a un adult de confiança i la canvieu junts. Si el compte té la verificació en dos passos, encara és més difícil que hi entrin.|No es culpa tuya y tiene solución: se lo explicas a un adulto de confianza y la cambiáis juntos. Si la cuenta tiene la verificación en dos pasos, todavía es más difícil que entren."],
      ["La meva família em demana la contrasenya: la hi puc donar?|Mi familia me pide la contraseña: ¿se la puedo dar?", "Sí. Els adults que et cuiden la poden saber per ajudar-te i protegir-te. La norma és no donar-la a amics, companys ni desconeguts.|Sí. Los adultos que te cuidan pueden saberla para ayudarte y protegerte. La norma es no dársela a amigos, compañeros ni desconocidos."]
    ],
    tec: [
      ["Un alumne/a escriu al laboratori la seva contrasenya real.|Un alumno/a escribe en el laboratorio su contraseña real.", "Que l'esborri: el laboratori no la desa ni l'envia enlloc. En privat, digues-li que en parli a casa per canviar-la, sense renyar-lo. No ho comentis davant del grup.|Que la borre: el laboratorio no la guarda ni la envía a ningún sitio. En privado, dile que lo hable en casa para cambiarla, sin reñirle. No lo comentes delante del grupo."],
      ["El laboratori no deixa continuar.|El laboratorio no deja continuar.", "Cal arribar al nivell que demana el pas (Forta o Molt forta). Que llegeixi les pistes de sota la barra: més llarga, més paraules sense relació, cap nom ni data.|Hay que llegar al nivel que pide el paso (Fuerte o Muy fuerte). Que lea las pistas de debajo de la barra: más larga, más palabras sin relación, ningún nombre ni fecha."],
      ["Al classificador, les targetes no s'arrosseguen bé (pantalla tàctil antiga o ratolí que falla).|En el clasificador, las tarjetas no se arrastran bien (pantalla táctil antigua o ratón que falla).", "També funciona tocant: primer la targeta i després el calaix. Si una targeta s'ha col·locat malament, es pot tornar a moure abans de comprovar.|También funciona tocando: primero la tarjeta y después la caja. Si una tarjeta se ha colocado mal, se puede volver a mover antes de comprobar."],
      ["No hi ha prou ordinadors per a tothom.|No hay suficientes ordenadores para todos.", "Treballeu en parelles: un/a escriu i l'altre/a llegeix les explicacions en veu alta; a cada pas es canvien els papers.|Trabajad por parejas: uno/a escribe y el otro/a lee las explicaciones en voz alta; en cada paso se cambian los papeles."],
      ["El projector no funciona.|El proyector no funciona.", "Dibuixa a la pissarra les tres barres (feble, acceptable, forta) i els dos panys. Les animacions també es poden ensenyar a l'ordinador del docent a grups petits.|Dibuja en la pizarra las tres barras (débil, aceptable, fuerte) y los dos candados. Las animaciones también se pueden enseñar en el ordenador del docente a grupos pequeños."],
      ["Un alumne/a no pot entrar a l'app o ha oblidat el seu usuari.|Un alumno/a no puede entrar en la app o ha olvidado su usuario.", "Mira-ho al panell del docent. Mentrestant, que faci la sessió amb un company/a: no es perd res, i després pot repetir-la.|Míralo en el panel del docente. Mientras tanto, que haga la sesión con un compañero/a: no se pierde nada, y después puede repetirla."]
    ],
    seg: [
      "Norma de classe des del primer minut: cap contrasenya real, ni escrita, ni dita en veu alta, ni al laboratori. Les frases del mural són de mentida i no es fan servir enlloc.|Norma de clase desde el primer minuto: ninguna contraseña real, ni escrita, ni dicha en voz alta, ni en el laboratorio. Las frases del mural son de mentira y no se usan en ningún sitio.",
      "Mai no culpabilitzis: si algú explica que ha donat la contrasenya o que li han entrat al compte, agraeix-li que ho expliqui, digues-li que té solució i que ho parli a casa per canviar-la.|Nunca culpabilices: si alguien cuenta que ha dado la contraseña o que le han entrado en la cuenta, agradécele que lo cuente, dile que tiene solución y que lo hable en casa para cambiarla.",
      "Si un infant explica un cas real que el preocupa (algú que el pressiona perquè li doni la contrasenya, un compte robat que envia missatges ofensius, algú que li demana codis): escolta amb calma, no li demanis detalls davant del grup, parla-hi en privat en acabar, apunta el que diu amb les seves paraules i segueix el protocol del centre (normalment, avisar el tutor/a o la direcció, que parlarà amb la família).|Si un niño o niña cuenta un caso real que le preocupa (alguien que le presiona para que le dé la contraseña, una cuenta robada que envía mensajes ofensivos, alguien que le pide códigos): escucha con calma, no le pidas detalles delante del grupo, habla con él o ella en privado al terminar, apunta lo que dice con sus palabras y sigue el protocolo del centro (normalmente, avisar al tutor/a o a la dirección, que hablará con la familia).",
      "No prometis guardar el secret si el que explica pot posar-lo en risc: digues-li que ho explicaràs només a qui el pot ajudar. No investiguis pel teu compte ni li demanis que t'ensenyi el compte o el mòbil.|No prometas guardar el secreto si lo que cuenta puede ponerle en riesgo: dile que lo contarás solo a quien le puede ayudar. No investigues por tu cuenta ni le pidas que te enseñe la cuenta o el móvil.",
      "Els comptes i la verificació en dos passos els configura sempre un adult de la família: a classe no s'activa res en comptes reals.|Las cuentas y la verificación en dos pasos las configura siempre un adulto de la familia: en clase no se activa nada en cuentas reales.",
      "Benestar: feu la pausa activa, vigileu la postura davant la pantalla i recordeu-los que, de tant en tant, aixequin la vista i mirin lluny.|Bienestar: haced la pausa activa, vigilad la postura ante la pantalla y recordadles que, de vez en cuando, levanten la vista y miren lejos."
    ],
    extra: [
      "Matemàtiques: un cadenat de 4 xifres té 10.000 combinacions (de 0000 a 9999). Quantes en té un de 3 xifres? (1.000.) I si una contrasenya només pot tenir les lletres a i b, quantes n'hi ha de 2, 3 i 4 lletres? (4, 8 i 16.) Que descobreixin que cada caràcter de més multiplica les possibilitats.|Matemáticas: un candado de 4 cifras tiene 10.000 combinaciones (de 0000 a 9999). ¿Cuántas tiene uno de 3 cifras? (1.000.) ¿Y si una contraseña solo puede tener las letras a y b, cuántas hay de 2, 3 y 4 letras? (4, 8 y 16.) Que descubran que cada carácter de más multiplica las posibilidades.",
      "Llengua: escriure un microconte absurd de cinc línies amb les quatre paraules de la frase inventada del grup (sense fer-la servir mai com a contrasenya).|Lengua: escribir un microcuento absurdo de cinco líneas con las cuatro palabras de la frase inventada del grupo (sin usarla nunca como contraseña).",
      "Debat per als grans: quins «segons panys» coneixeu fora d'internet (la clau i l'alarma de casa, el codi i la targeta del banc)? Per què creieu que cada vegada més serveis demanen la verificació en dos passos?|Debate para los mayores: ¿qué «segundos candados» conocéis fuera de internet (la llave y la alarma de casa, el código y la tarjeta del banco)? ¿Por qué creéis que cada vez más servicios piden la verificación en dos pasos?"
    ],
    trans: [
      "Sessió següent (d1-2, Què compartim?): de protegir el compte passem a protegir les dades personals. Les dades personals (noms, dates, carrers) tampoc no han d'anar a les contrasenyes.|Sesión siguiente (d1-2, ¿Qué compartimos?): de proteger la cuenta pasamos a proteger los datos personales. Los datos personales (nombres, fechas, calles) tampoco tienen que ir en las contraseñas.",
      "Unitat 2 (d2-1, Caçadors de bulos): el missatge que demana el codi de sis xifres és un exemple de phishing, i s'hi treballarà a fons.|Unidad 2 (d2-1, Cazadores de bulos): el mensaje que pide el código de seis cifras es un ejemplo de phishing, y se trabajará a fondo.",
      "Matemàtiques i llengua: combinacions i potències senzilles (cada caràcter multiplica les possibilitats) i vocabulari creatiu per a les frases absurdes.|Matemáticas y lengua: combinaciones y potencias sencillas (cada carácter multiplica las posibilidades) y vocabulario creativo para las frases absurdas."
    ],
    slides: [
      { id: 's1', k: 'portada', t: 'Contrasenyes fortes|Contraseñas fuertes', x: "Avui aprendrem a fer claus que ningú no pugui endevinar… i a no deixar-les a ningú.|Hoy aprenderemos a hacer llaves que nadie pueda adivinar… y a no dejárselas a nadie.",
        nota: "Presenta el curs: aprendrem a anar per internet amb seguretat i sense por. Recorda la norma: cap contrasenya real a classe.|Presenta el curso: aprenderemos a ir por internet con seguridad y sin miedo. Recuerda la norma: ninguna contraseña real en clase." },
      { id: 's2', k: 'pregunta', t: 'On amagaries la clau de casa?|¿Dónde esconderías la llave de casa?', x: "I on miraria primer algú que la volgués trobar?|¿Y dónde miraría primero alguien que la quisiera encontrar?",
        nota: "Recull respostes: sota l'estora, al test, a la fruitera… Són els primers llocs on es mira. Amb les contrasenyes fàcils passa igual.|Recoge respuestas: debajo del felpudo, en la maceta, en el frutero… Son los primeros sitios donde se mira. Con las contraseñas fáciles pasa igual." },
      { id: 's3', k: 'concepte', t: "Les portes d'internet|Las puertas de internet", pic: 'img/ment/sob.webp',
        punts: ['Cada compte (xat, correu, apps) té una porta.|Cada cuenta (chat, correo, apps) tiene una puerta.', 'La contrasenya n\'és la clau.|La contraseña es su llave.', 'Avui: claus fortes i com cuidar-les.|Hoy: llaves fuertes y cómo cuidarlas.'],
        nota: "Una clau fàcil de trobar és com una contrasenya fàcil d'endevinar. No culpis ningú que en tingui una de feble: avui aprendrem a millorar-la.|Una llave fácil de encontrar es como una contraseña fácil de adivinar. No culpes a nadie que tenga una débil: hoy aprenderemos a mejorarla." },
      { id: 's4', k: 'anim', t: 'Què fa forta una contrasenya?|¿Qué hace fuerte una contraseña?', anim: 'd1pass', x: 'Llarga, variada i sense res de tu.|Larga, variada y sin nada de ti.',
        nota: "Llegiu-les en veu alta. Pregunta per què «gat2015» encara és feble: qui sap que tens un gat i l'any en què vas néixer? Fes notar que la tercera és la més llarga i no porta res de ningú.|Leedlas en voz alta. Pregunta por qué «gato2015» todavía es débil: ¿quién sabe que tienes un gato y el año en que naciste? Haz notar que la tercera es la más larga y no lleva nada de nadie." },
      { id: 's5', k: 'anim', t: 'El truc de la frase de contrasenya|El truco de la frase de contraseña', anim: 'd1frase', x: 'Quatre paraules sense relació i una escena absurda.|Cuatro palabras sin relación y una escena absurda.',
        nota: "Construïu-ne una entre tots a la pissarra i després esborreu-la: ara ja la sap tota la classe, i per això no serveix!|Construid una entre todos en la pizarra y después borradla: ahora ya la sabe toda la clase, ¡y por eso no sirve!" },
      { id: 's6', k: 'pregunta', t: 'Forta o feble?|¿Fuerte o débil?', punts: ['123456|123456', 'Rufus2015|Rufus2015', 'Rellotge-Volcà-Mitjó-48|Reloj-Volcán-Calcetín-48', 'Pingüí taronja menja sopa freda|Pingüino naranja come sopa fría'],
        nota: "Votació amb el polze per a cada una (amunt, forta; avall, feble). Demana sempre el perquè del vot. Respostes: feble (seqüència), feble (mascota i any), forta, forta (frase llarga).|Votación con el pulgar para cada una (arriba, fuerte; abajo, débil). Pide siempre el porqué del voto. Respuestas: débil (secuencia), débil (mascota y año), fuerte, fuerte (frase larga)." },
      { id: 's7', k: 'media', t: 'La contrasenya no es deixa|La contraseña no se deja', x: "Com li dius que no a un amic, sense enfadar-vos?|¿Cómo le dices que no a un amigo, sin enfadaros?",
        media: chat('Pau|Pau', '🦊', `<div class="dm them">Ei! Em deixes la contrasenya? Aquesta nit et faig el castell 😄</div><div class="dm me">Gràcies, però la contrasenya no la deixo. Demà ho fem junts!</div>|<div class="dm them">¡Ey! ¿Me dejas la contraseña? Esta noche te hago el castillo 😄</div><div class="dm me">Gracias, pero la contraseña no la dejo. ¡Mañana lo hacemos juntos!</div>`),
        nota: "Pregunta per què no la deixarien ni al millor amic. Els adults que els cuiden sí que la poden saber. Si algú la sap, s'explica a casa i es canvia, sense culpes.|Pregunta por qué no la dejarían ni al mejor amigo. Los adultos que los cuidan sí pueden saberla. Si alguien la sabe, se explica en casa y se cambia, sin culpas." },
      { id: 's8', k: 'anim', t: 'La verificació en dos passos|La verificación en dos pasos', anim: 'd1dos', x: 'Dos panys: el que saps i el que tens.|Dos candados: lo que sabes y lo que tienes.',
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
      { id: 's13', k: 'activitat', t: 'Pausa: la frase amb el cos|Pausa: la frase con el cuerpo', timer: 1,
        punts: ['«Elefant»: fes la trompa amb el braç.|«Elefante»: haz la trompa con el brazo.', '«Salta»: un salt.|«Salta»: un salto.', '«Paraigua»: braços amunt.|«Paraguas»: brazos arriba.', '«Gelat»: llepa l\'aire!|«Helado»: ¡lame el aire!'],
        nota: "Feu-la tots junts tres vegades, cada cop més de pressa. Després, a l'app: els reptes.|Hacedla todos juntos tres veces, cada vez más deprisa. Después, en la app: los retos." },
      { id: 's14', k: 'repte', t: 'Reptes: casos de contrasenyes|Retos: casos de contraseñas', timer: 10,
        punts: ["1. La tieta que fa servir la mateixa per a tot|1. La tía que usa la misma para todo", '2. La Jana i els dos panys|2. Jana y los dos candados', '3. El missatge que demana el codi|3. El mensaje que pide el código', '4. Hàbit segur o arriscat?|4. ¿Hábito seguro o arriesgado?'],
        nota: "Si algú dubta, que llegeixi la pregunta en veu alta i pensi què faria un adult de confiança.|Si alguien duda, que lea la pregunta en voz alta y piense qué haría un adulto de confianza." },
      { id: 's15', k: 'activitat', t: 'Crea: la frase del mural|Crea: la frase del mural', timer: 5, x: "Una frase de mentida, molt forta, i un dibuix per recordar-la. El company o la companya pot endevinar-la pel dibuix?|Una frase de mentira, muy fuerte, y un dibujo para recordarla. ¿El compañero o la compañera puede adivinarla por el dibujo?",
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
    intro: "Segona sessió. L'alumnat aprèn a distingir les dades personals (nom complet, adreça, telèfon, escola, ubicació) dels gustos que sí que es poden compartir, configura la privadesa d'un perfil inventat i descobreix que una foto pot dir on viu algú pel que surt al fons. També aprèn què fer si un desconegut li demana dades, fotos o secrets: no contestar, bloquejar i explicar-ho a un adult de confiança. És una sessió sensible: el to ha de ser tranquil i ha de donar eines, mai fer por. La classe combina conversa, l'activitat de les tres zones al terra i simulacions a l'app (una publicació, dos perfils i un xat).|Segunda sesión. El alumnado aprende a distinguir los datos personales (nombre completo, dirección, teléfono, colegio, ubicación) de los gustos que sí se pueden compartir, configura la privacidad de un perfil inventado y descubre que una foto puede decir dónde vive alguien por lo que sale en el fondo. También aprende qué hacer si un desconocido le pide datos, fotos o secretos: no contestar, bloquear y contárselo a un adulto de confianza. Es una sesión sensible: el tono tiene que ser tranquilo y tiene que dar herramientas, nunca dar miedo. La clase combina conversación, la actividad de las tres zonas en el suelo y simulaciones en la app (una publicación, dos perfiles y un chat).",
    claus: [
      "Les dades personals diuen qui ets i on trobar-te (nom complet, adreça, telèfon, escola, on ets ara): es guarden. Els gustos es poden compartir.|Los datos personales dicen quién eres y dónde encontrarte (nombre completo, dirección, teléfono, colegio, dónde estás ahora): se guardan. Los gustos se pueden compartir.",
      "A la privadesa del perfil tries qui veu cada cosa (només jo, amics que coneixes de veritat o tothom), i es configura amb un adult.|En la privacidad del perfil eliges quién ve cada cosa (solo yo, amigos que conoces de verdad o todo el mundo), y se configura con un adulto.",
      "Una foto parla: el fons pot ensenyar el carrer, el número de casa o l'uniforme. La ubicació en directe només es comparteix amb la família.|Una foto habla: el fondo puede enseñar la calle, el número de casa o el uniforme. La ubicación en directo solo se comparte con la familia.",
      "Si algú que no coneixes en persona et demana dades, fotos, secrets o quedar: no contestes, el bloqueges i ho expliques a un adult de confiança. Mai no és culpa teva.|Si alguien que no conoces en persona te pide datos, fotos, secretos o quedar: no contestas, lo bloqueas y se lo cuentas a un adulto de confianza. Nunca es culpa tuya.",
      "Les apps tenen una edat mínima: a Espanya, cal tenir 14 anys per donar el consentiment de les dades sense els pares (LOPDGDD, art. 7), i les xarxes socials no són per a aquesta edat. FotoNuvi és una app escolar inventada i supervisada; tenir-hi perfil no és el mateix que tenir-ne a una xarxa social.|Las apps tienen una edad mínima: en España, hay que tener 14 años para dar el consentimiento de los datos sin los padres (LOPDGDD, art. 7), y las redes sociales no son para esta edad. FotoNuvi es una app escolar inventada y supervisada; tener perfil en ella no es lo mismo que tenerlo en una red social."
    ],
    prev: [
      "Sessió d1-1 (Contrasenyes fortes): què és un compte i que la contrasenya no es deixa a ningú.|Sesión d1-1 (Contraseñas fuertes): qué es una cuenta y que la contraseña no se deja a nadie.",
      "Saber què és un perfil en una app (nom, foto, el que publiques). Es presenta amb el perfil d'en Bit a FotoNuvi.|Saber qué es un perfil en una app (nombre, foto, lo que publicas). Se presenta con el perfil de Bit en FotoNuvi.",
      "Saber què és un adult de confiança: s'ha treballat a d1-1 i avui se n'escriuen tres noms.|Saber qué es un adulto de confianza: se ha trabajado en d1-1 y hoy se escriben tres nombres."
    ],
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
        "Un ordinador per alumne/a (o un per parella) amb Numi Tech obert a la sessió «Què compartim?»|Un ordenador por alumno/a (o uno por pareja) con Numi Tech abierto en la sesión «¿Qué compartimos?»",
        "Projector, l'ordinador del docent i la presentació d'aquesta sessió|Proyector, el ordenador del docente y la presentación de esta sesión",
        "Cinta adhesiva de colors per marcar tres zones al terra (o tres cartolines A3): «Només jo», «Amics» i «Tothom»|Cinta adhesiva de colores para marcar tres zonas en el suelo (o tres cartulinas A3): «Solo yo», «Amigos» y «Todo el mundo»",
        "Llapis i colors per a cada alumne/a per completar «El meu escut»|Lápiz y colores para cada alumno/a para completar «Mi escudo»"
      ],
      imprimir: ['Targetes de dades (imprimible 1): un paquet de 21 targetes per grup de 4 (les tres primeres són els rètols de les zones)|Tarjetas de datos (imprimible 1): un paquete de 21 tarjetas por grupo de 4 (las tres primeras son los carteles de las zonas)', 'El meu escut (imprimible 2): una fitxa per alumne/a|Mi escudo (imprimible 2): una ficha por alumno/a'],
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
          "Ho diríeu a tothom, el vostre color preferit? I l'adreça de casa? Per què no és el mateix? (L'adreça diu on trobar-te; el color, no.)|¿Se lo diríais a todo el mundo, vuestro color favorito? ¿Y la dirección de casa? ¿Por qué no es lo mismo? (La dirección dice dónde encontrarte; el color, no.)",
          "No cal que ningú digui cap dada de veritat: parlem de les dades, no de les vostres.|No hace falta que nadie diga ningún dato de verdad: hablamos de los datos, no de los vuestros."],
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
        diu: ["Per què has posat l'escola a «Només jo»? (Perquè diu on és cada dia.)|¿Por qué has puesto el colegio en «Solo yo»? (Porque dice dónde está cada día.)",
          "Al missatge d'en Bit, què pot compartir sense problemes? (Que li agrada dibuixar robots.)|En el mensaje de Bit, ¿qué puede compartir sin problemas? (Que le gusta dibujar robots.)",
          "Has trobat la pista de la foto? Què hi ha al fons?|¿Has encontrado la pista de la foto? ¿Qué hay en el fondo?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la història d'en Bit, les sis targetes, «Ho puc compartir?», el missatge d'en Bit a FotoNuvi, el perfil d'en Bit, la pregunta de la foto i la de l'edat de les xarxes socials.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la historia de Bit, las seis tarjetas, «¿Lo puedo compartir?», el mensaje de Bit en FotoNuvi, el perfil de Bit, la pregunta de la foto y la de la edad de las redes sociales.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: el desconegut i els senyals|Retos: el desconocido y las señales', fase: 'ordinador',
        fa: "Feu la pausa activa tots junts («Escut o mans amunt?»). Després, el xat de l'Estel_Blau_11: anima'ls a provar també els camins arriscats, perquè vegin que sempre es pot parar i demanar ajuda. Continueu amb els senyals d'alarma i la pregunta de la ubicació. Comenta en veu alta, per a tothom, que si mai els passa una cosa així de veritat, ho poden explicar i no els passarà res per fer-ho.|Haced la pausa activa todos juntos («¿Escudo o manos arriba?»). Después, el chat de Estel_Blau_11: anímalos a probar también los caminos arriesgados, para que vean que siempre se puede parar y pedir ayuda. Continuad con las señales de alarma y la pregunta de la ubicación. Comenta en voz alta, para todos, que si alguna vez les pasa algo así de verdad, lo pueden contar y no les pasará nada por hacerlo.",
        diu: ["Quin missatge de l'Estel us ha semblat més estrany? Per què?|¿Qué mensaje de Estel os ha parecido más raro? ¿Por qué?",
          "Regals a canvi de fotos, «que sigui el nostre secret»: són senyals d'alarma. Què fem? (No contesto, bloquejo i ho explico.)|Regalos a cambio de fotos, «que sea nuestro secreto»: son señales de alarma. ¿Qué hacemos? (No contesto, bloqueo y lo cuento.)",
          "Un secret que et fa sentir malament no s'ha de guardar.|Un secreto que te hace sentir mal no se tiene que guardar.",
          "Si mai us passa de veritat, m'ho podeu explicar a mi o a qualsevol adult de confiança: no us renyarem.|Si alguna vez os pasa de verdad, me lo podéis contar a mí o a cualquier adulto de confianza: no os reñiremos."],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: el xat de l'Estel_Blau_11, «Senyal d'alarma o normal?» i la pregunta de la ubicació.|«Pausa activa» y «Retos»: el chat de Estel_Blau_11, «¿Señal de alarma o normal?» y la pregunta de la ubicación.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el perfil segur de la Nora|Crea: el perfil seguro de Nora', fase: 'crea',
        fa: "Cada alumne/a configura el perfil de la Nora. En parelles, compareu-lo: heu decidit el mateix? Les fotos de l'obra poden anar a «Amics» o a «Només jo»: totes dues són bones. «L'escut de les dades» és per fer a casa.|Cada alumno/a configura el perfil de Nora. Por parejas, comparadlo: ¿habéis decidido lo mismo? Las fotos de la obra pueden ir a «Amigos» o a «Solo yo»: las dos son buenas. «El escudo de los datos» es para hacer en casa.",
        diu: ["Per què l'àlies es pot veure i el nom complet no?|¿Por qué el alias se puede ver y el nombre completo no?",
          "A les fotos de l'obra hi surten altres nens i nenes: què cal abans de compartir-les? (El seu permís.)|En las fotos de la obra salen otros niños y niñas: ¿qué hace falta antes de compartirlas? (Su permiso.)",
          "Heu triat el mateix que el vostre company/a? Les dues respostes poden ser bones si les sabeu explicar.|¿Habéis elegido lo mismo que vuestro compañero/a? Las dos respuestas pueden ser buenas si las sabéis explicar."],
        slides: ['s15'], app: "Pas «Crea»: el perfil segur de la Nora (i «L'escut de les dades», per a casa).|Paso «Crea»: el perfil seguro de Nora (y «El escudo de los datos», para casa).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Torna a les quatre coses del principi (diapositiva 3): ara, què compartirien amb tothom? Llegiu el resum en veu alta i deixa que responguin les preguntes finals de l'app. Fes el tiquet a la porta i recorda que «L'escut de les dades» es fa a casa amb la família.|Vuelve a las cuatro cosas del principio (diapositiva 3): ahora, ¿qué compartirían con todo el mundo? Leed el resumen en voz alta y deja que respondan las preguntas finales de la app. Haz el ticket en la puerta y recuerda que «El escudo de los datos» se hace en casa con la familia.",
        diu: ["Digues una dada que es guarda i una que es pot compartir.|Di un dato que se guarda y uno que se puede compartir.",
          "Qui és un dels vostres adults de confiança?|¿Quién es uno de vuestros adultos de confianza?",
          "Recordeu el lema: no contesto, bloquejo i ho explico.|Recordad el lema: no contesto, bloqueo y lo explico."],
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
        "Escolta amb calma, agraeix-li que ho expliqui i digues-li que no és culpa seva. No li demanis detalls davant del grup: parla-hi després en privat i segueix el protocol del centre i la comunicació amb la família (vegeu «Seguretat i benestar»).|Escucha con calma, agradécele que lo cuente y dile que no es culpa suya. No le pidas detalles delante del grupo: habla con él o ella después en privado y sigue el protocolo del centro y la comunicación con la familia (ver «Seguridad y bienestar»)."],
      ["Posa dades a «Amics» pensant en amics que només coneix d'internet.|Pone datos en «Amigos» pensando en amigos que solo conoce de internet.",
        "Pregunta: aquests amics, els coneixes en persona? I la teva família? «Amics» vol dir gent que coneixes de veritat.|Pregunta: estos amigos, ¿los conoces en persona? ¿Y tu familia? «Amigos» quiere decir gente que conoces de verdad."]
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
        ['Desconeguts i ajuda|Desconocidos y ayuda', "Reconeix els senyals d'alarma i diu les tres accions: no contestar, bloquejar i explicar-ho a un adult.|Reconoce las señales de alarma y dice las tres acciones: no contestar, bloquear y contárselo a un adulto.", "Reconeix algun senyal d'alarma, però no té clar què ha de fer.|Reconoce alguna señal de alarma, pero no tiene claro qué tiene que hacer."],
        ['Explicar i argumentar|Explicar y argumentar', "A les tres zones, justifica on va cada dada amb una raó («diu on trobar-me») i escolta les raons dels altres.|En las tres zonas, justifica dónde va cada dato con una razón («dice dónde encontrarme») y escucha las razones de los demás.", "Col·loca les targetes, però li costa dir per què.|Coloca las tarjetas, pero le cuesta decir por qué."]
      ]
    },
    casa: "A casa podeu repetir la sessió i fer «L'escut de les dades»: dibuixar què es guarda i què es pot compartir, revisar junts la privadesa d'una app que feu servir i escriure els noms de tres adults de confiança. És un bon moment per dir-li que sempre us pot explicar el que li passi a internet, i que no el renyareu per fer-ho.|En casa podéis repetir la sesión y hacer «El escudo de los datos»: dibujar qué se guarda y qué se puede compartir, revisar juntos la privacidad de una app que uséis y escribir los nombres de tres adultos de confianza. Es un buen momento para decirle que siempre os puede contar lo que le pase en internet, y que no le reñiréis por hacerlo.",
    faq: [
      ["Si molts companys ja tenen xarxes socials, per què jo no?|Si muchos compañeros ya tienen redes sociales, ¿por qué yo no?", "Perquè a Espanya cal tenir 14 anys per donar el consentiment de les dades sense els pares, i les xarxes demanen aquesta edat o més. Les edats mínimes protegeixen; mentrestant, hi ha apps escolars supervisades. És una conversa per tenir a casa, sense jutjar ningú.|Porque en España hay que tener 14 años para dar el consentimiento de los datos sin los padres, y las redes piden esa edad o más. Las edades mínimas protegen; mientras tanto, hay apps escolares supervisadas. Es una conversación para tener en casa, sin juzgar a nadie."],
      ["Si fa dies que xategem i és molt simpàtic, encara és un desconegut?|Si hace días que chateamos y es muy simpático, ¿sigue siendo un desconocido?", "Sí, si ni tu ni la teva família el coneixeu en persona. A internet, el nom, la foto i l'edat es poden inventar. Que sigui simpàtic no canvia res: si et demana dades, fotos o secrets, ho expliques a un adult.|Sí, si ni tú ni tu familia lo conocéis en persona. En internet, el nombre, la foto y la edad se pueden inventar. Que sea simpático no cambia nada: si te pide datos, fotos o secretos, se lo cuentas a un adulto."],
      ["Per què no puc dir a quina escola vaig, si no és l'adreça de casa?|¿Por qué no puedo decir a qué colegio voy, si no es la dirección de casa?", "Perquè diu on ets cada dia i a quines hores. Els amics que coneixes de veritat ja ho saben; a internet no cal dir-ho.|Porque dice dónde estás cada día y a qué horas. Los amigos que conoces de verdad ya lo saben; en internet no hace falta decirlo."],
      ["Si bloquejo algú, se n'assabentarà?|Si bloqueo a alguien, ¿se enterará?", "Depèn de l'app, però no importa: bloquejar és un dret i et protegeix. No has de donar explicacions a qui et fa sentir incòmode/a.|Depende de la app, pero no importa: bloquear es un derecho y te protege. No tienes que dar explicaciones a quien te hace sentir incómodo/a."],
      ["I si ja li he dit on visc o li he enviat una foto?|¿Y si ya le he dicho dónde vivo o le he enviado una foto?", "No és culpa teva i té solució. Explica-ho avui mateix a un adult de confiança i no esborris els missatges: l'adult t'ajudarà a bloquejar-lo, a denunciar-lo a l'app i a fer el que calgui. Ningú no et renyarà per explicar-ho.|No es culpa tuya y tiene solución. Cuéntaselo hoy mismo a un adulto de confianza y no borres los mensajes: el adulto te ayudará a bloquearlo, a denunciarlo en la app y a hacer lo que haga falta. Nadie te reñirá por contarlo."],
      ["A casa pengen fotos meves. Està malament?|En casa cuelgan fotos mías. ¿Está mal?", "Les famílies ho fan amb carinyo, però tu també tens dret a dir què et sembla. Pots parlar-ne amb calma: «M'agradaria que em preguntéssiu abans de penjar una foto meva». A la sessió següent en parlarem més.|Las familias lo hacen con cariño, pero tú también tienes derecho a decir qué te parece. Puedes hablarlo con calma: «Me gustaría que me preguntarais antes de colgar una foto mía». En la sesión siguiente hablaremos más de ello."],
      ["Per què tantes apps volen saber on soc?|¿Por qué tantas apps quieren saber dónde estoy?", "Algunes ho necessiten per funcionar (un mapa) i d'altres ho fan servir per ensenyar coses a prop. Com que diu on ets, ho decideix sempre un adult de casa, i sovint la resposta és «no» o «només la família».|Algunas lo necesitan para funcionar (un mapa) y otras lo usan para enseñar cosas cerca. Como dice dónde estás, lo decide siempre un adulto de casa, y a menudo la respuesta es «no» o «solo la familia»."]
    ],
    tec: [
      ["Al perfil d'en Bit, en comprovar surten camps en vermell.|En el perfil de Bit, al comprobar salen campos en rojo.", "Que llegeixin la raó que surt sota el camp i el tornin a canviar: es pot comprovar tantes vegades com calgui. Algunes dades admeten dues respostes (Amics o Només jo).|Que lean la razón que sale bajo el campo y lo vuelvan a cambiar: se puede comprobar tantas veces como haga falta. Algunos datos admiten dos respuestas (Amigos o Solo yo)."],
      ["A la publicació d'en Bit no troben la cinquena dada.|En la publicación de Bit no encuentran el quinto dato.", "Pista: la foto també compta. Que llegeixin el text entre claudàtors del principi.|Pista: la foto también cuenta. Que lean el texto entre corchetes del principio."],
      ["Algú acaba el xat de l'Estel_Blau_11 per un camí arriscat i es queda preocupat/da.|Alguien termina el chat de Estel_Blau_11 por un camino arriesgado y se queda preocupado/a.", "Recorda-li que és una simulació i que el final explica què cal fer. Pot tornar enrere a l'app i provar un altre camí: veurà que sempre es pot parar i demanar ajuda.|Recuérdale que es una simulación y que el final explica qué hay que hacer. Puede volver atrás en la app y probar otro camino: verá que siempre se puede parar y pedir ayuda."],
      ["No hi ha espai per a les tres zones al terra.|No hay espacio para las tres zonas en el suelo.", "Enganxeu tres cartolines a la pissarra i que cada grup hi enganxi les targetes amb cinta adhesiva.|Pegad tres cartulinas en la pizarra y que cada grupo pegue allí las tarjetas con cinta adhesiva."],
      ["Un alumne/a vol obrir el seu perfil real per ensenyar-lo.|Un alumno/a quiere abrir su perfil real para enseñarlo.", "Agraeix-li l'interès, però a classe no s'obren perfils ni comptes reals. Proposa-li que el revisi a casa amb la família (és part de «L'escut de les dades»).|Agradécele el interés, pero en clase no se abren perfiles ni cuentas reales. Propónle que lo revise en casa con la familia (es parte de «El escudo de los datos»)."],
      ["Les targetes del classificador no s'arrosseguen.|Las tarjetas del clasificador no se arrastran.", "També es pot tocar la targeta i després el calaix. Si el navegador va lent, que recarreguin la pàgina: el pas torna a començar.|También se puede tocar la tarjeta y después la caja. Si el navegador va lento, que recarguen la página: el paso vuelve a empezar."]
    ],
    seg: [
      "Sessió sensible. Parla dels desconeguts amb to tranquil: no expliquis casos de les notícies ni detalls que facin por; centra't en les tres accions (no contesto, bloquejo, ho explico) i en el fet que la majoria de missatges són normals.|Sesión sensible. Habla de los desconocidos con tono tranquilo: no cuentes casos de las noticias ni detalles que den miedo; céntrate en las tres acciones (no contesto, bloqueo, lo explico) y en que la mayoría de mensajes son normales.",
      "Abans de la classe, repassa el protocol de protecció de la infància del centre i qui és la persona de referència (tutor/a, direcció o coordinació de benestar). Si ets monitor/a d'extraescolars, pregunta a l'entitat i al centre a qui has d'avisar.|Antes de la clase, repasa el protocolo de protección de la infancia del centro y quién es la persona de referencia (tutor/a, dirección o coordinación de bienestar). Si eres monitor/a de extraescolares, pregunta a la entidad y al centro a quién tienes que avisar.",
      "Si un infant explica un cas real (un desconegut que li demana fotos o secrets, algú que vol quedar amb ell/a): 1) escolta amb calma, sense mostrar alarma; 2) agraeix-li que ho expliqui i digues-li que no és culpa seva; 3) no li demanis detalls davant del grup ni li facis preguntes que l'indueixin: deixa'l parlar amb les seves paraules; 4) no prometis guardar el secret: digues-li que ho explicaràs només a qui el pot ajudar.|Si un niño o niña cuenta un caso real (un desconocido que le pide fotos o secretos, alguien que quiere quedar con él/ella): 1) escucha con calma, sin mostrar alarma; 2) agradécele que lo cuente y dile que no es culpa suya; 3) no le pidas detalles delante del grupo ni le hagas preguntas que le induzcan: deja que hable con sus palabras; 4) no prometas guardar el secreto: dile que lo contarás solo a quien le puede ayudar.",
      "Després: 5) apunta de seguida, amb les seves paraules, què ha dit, la data i l'hora; 6) avisa el mateix dia la persona de referència i segueix el protocol del centre, que decidirà com informar la família i, si cal, els serveis de protecció. No investiguis pel teu compte: no li demanis que t'ensenyi els missatges ni contactis aquell perfil. Cal que la família guardi les proves sense esborrar-les.|Después: 5) apunta enseguida, con sus palabras, qué ha dicho, la fecha y la hora; 6) avisa el mismo día a la persona de referencia y sigue el protocolo del centro, que decidirá cómo informar a la familia y, si hace falta, a los servicios de protección. No investigues por tu cuenta: no le pidas que te enseñe los mensajes ni contactes con ese perfil. Hace falta que la familia guarde las pruebas sin borrarlas.",
      "Si hi ha un perill immediat per a l'infant, truca al 112. Per a orientació, els infants i les famílies poden trucar al 116 111, el telèfon gratuït d'ajuda a la infància i l'adolescència.|Si hay un peligro inmediato para el niño o la niña, llama al 112. Para orientación, los niños y las familias pueden llamar al 116 111, el teléfono gratuito de ayuda a la infancia y la adolescencia.",
      "A classe no es fan, no es projecten ni es pengen fotos reals de l'alumnat, i totes les dades de les activitats són inventades. A les tres zones, ningú no ha de dir cap dada seva.|En clase no se hacen, no se proyectan ni se cuelgan fotos reales del alumnado, y todos los datos de las actividades son inventados. En las tres zonas, nadie tiene que decir ningún dato suyo.",
      "Si algú es queda amb por, tranquil·litza'l: ara té eines, i té adults de confiança (assegura't que tothom n'ha escrit almenys un a «El meu escut»).|Si alguien se queda con miedo, tranquilízale: ahora tiene herramientas, y tiene adultos de confianza (asegúrate de que todo el mundo ha escrito al menos uno en «Mi escudo»)."
    ],
    extra: [
      "Còmic de quatre vinyetes: un personatge inventat rep un missatge d'un desconegut i fa les tres accions. Que el comparteixin amb un grup de més petits.|Cómic de cuatro viñetas: un personaje inventado recibe un mensaje de un desconocido y hace las tres acciones. Que lo compartan con un grupo de pequeños.",
      "Per als grans: a Espanya, per sota dels 14 anys cal el consentiment de la família perquè un servei d'internet faci servir les dades d'un infant (Llei orgànica de protecció de dades). Debat: per què creieu que hi ha aquesta norma? Qui hauria de decidir què es comparteix?|Para los mayores: en España, por debajo de los 14 años hace falta el consentimiento de la familia para que un servicio de internet use los datos de un niño o niña (Ley orgánica de protección de datos). Debate: ¿por qué creéis que existe esta norma? ¿Quién debería decidir qué se comparte?",
      "Educació visual: dissenyar el propi àlies i un avatar dibuixat que no s'assembli a la seva cara.|Educación visual: diseñar el propio alias y un avatar dibujado que no se parezca a su cara."
    ],
    trans: [
      "Sessió anterior (d1-1): les dades personals tampoc no van a les contrasenyes (cap nom, data ni carrer).|Sesión anterior (d1-1): los datos personales tampoco van en las contraseñas (ningún nombre, fecha ni calle).",
      "Sessió següent (d1-3, L'empremta digital): el que es publica es pot copiar i quedar-se; avui hem vist què no publicar, la setmana vinent veurem per què es queda.|Sesión siguiente (d1-3, La huella digital): lo que se publica se puede copiar y quedarse; hoy hemos visto qué no publicar, la semana que viene veremos por qué se queda.",
      "Educació en valors i tutoria: el dret a la intimitat i a la pròpia imatge, i la confiança per demanar ajuda (es reprèn a d2-3, Respecte a la xarxa).|Educación en valores y tutoría: el derecho a la intimidad y a la propia imagen, y la confianza para pedir ayuda (se retoma en d2-3, Respeto en la red)."
    ],
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
      { id: 's6', k: 'anim', t: 'Mira el fons de la foto|Mira el fondo de la foto', anim: 'd1foto', x: 'El fons pot dir on vius i on estudies.|El fondo puede decir dónde vives y dónde estudias.',
        nota: "Para l'animació a l'inici i deixa que trobin les pistes abans que apareguin.|Para la animación al principio y deja que encuentren las pistas antes de que aparezcan." },
      { id: 's7', k: 'concepte', t: 'On ets ara?|¿Dónde estás ahora?', pic: 'img/ment/nom.webp',
        punts: ['Moltes apps poden saber on ets.|Muchas apps pueden saber dónde estás.', 'Dir on ets ara és com deixar una xinxeta al mapa.|Decir dónde estás ahora es como dejar una chincheta en el mapa.', 'La ubicació, només amb la família, i ho decideix un adult.|La ubicación, solo con la familia, y lo decide un adulto.'],
        nota: "Pregunta si han vist mai una app que demana la ubicació. Què cal fer? Preguntar-ho a casa.|Pregunta si han visto alguna vez una app que pide la ubicación. ¿Qué hay que hacer? Preguntarlo en casa." },
      { id: 's8', k: 'media', t: 'Qui hi ha darrere la pantalla?|¿Quién hay detrás de la pantalla?', x: "El nom, la foto i l'edat d'un perfil poden ser inventats.|El nombre, la foto y la edad de un perfil pueden ser inventados.",
        media: chat('Estel_Blau_11|Estel_Blau_11', '⭐', `<div class="dm them">Hola! Jo també tinc 11 anys 😊</div><div class="dm them">A quina escola vas? M'envies una foto?</div>|<div class="dm them">¡Hola! Yo también tengo 11 años 😊</div><div class="dm them">¿A qué colegio vas? ¿Me envías una foto?</div>`),
        nota: "Pregunta què els sembla estrany d'aquest xat. Remarca: no sabem qui hi ha darrere, encara que digui que té la nostra edat.|Pregunta qué les parece raro de este chat. Remarca: no sabemos quién hay detrás, aunque diga que tiene nuestra edad." },
      { id: 's9', k: 'concepte', t: 'Si un desconegut et demana…|Si un desconocido te pide…', anim: 'd1stop', x: 'Dades, fotos, secrets o quedar:|Datos, fotos, secretos o quedar:',
        punts: ['No contesto.|No contesto.', 'El bloquejo.|Lo bloqueo.', 'Ho explico a un adult de confiança.|Se lo explico a un adulto de confianza.', 'No és culpa meva, i explicar-ho és el que cal fer.|No es culpa mía, y contarlo es lo que hay que hacer.'],
        nota: "Feu-ho com un lema que es diu en veu alta: «No contesto, bloquejo i ho explico».|Hacedlo como un lema que se dice en voz alta: «No contesto, bloqueo y lo explico»." },
      { id: 's10', k: 'activitat', t: 'Les tres zones|Las tres zonas', timer: 9,
        punts: ['Cada grup treu una targeta de dades.|Cada grupo saca una tarjeta de datos.', 'Decidiu: Només jo, Amics o Tothom?|Decidid: ¿Solo yo, Amigos o Todo el mundo?', 'Porteu-la a la zona i expliqueu per què.|Llevadla a la zona y explicad por qué.', 'Si un altre grup no hi està d\'acord, ho debatem.|Si otro grupo no está de acuerdo, lo debatimos.'],
        nota: "Algunes dades admeten dues respostes (l'aniversari, les fotos amb amics): valora més l'explicació que la zona.|Algunos datos admiten dos respuestas (el cumpleaños, las fotos con amigos): valora más la explicación que la zona." },
      { id: 's11', k: 'activitat', t: 'Els meus adults de confiança|Mis adultos de confianza', timer: 3,
        punts: ["Pensa en tres persones grans que et cuiden.|Piensa en tres personas mayores que te cuidan.", "Escriu-ne el nom a «El meu escut».|Escribe su nombre en «Mi escudo».", 'Són les persones a qui explicaràs el que et passi a internet.|Son las personas a quienes contarás lo que te pase en internet.'],
        nota: "Si a algú li costa trobar-ne tres, suggereix-li persones de l'escola o de les activitats (mestres, monitors). Ningú no s'ha de quedar sense.|Si a alguien le cuesta encontrar tres, sugiérele personas del colegio o de las actividades (maestros, monitores). Nadie se tiene que quedar sin ninguno." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre la sessió «Què compartim?».|Abre la sesión «¿Qué compartimos?».', 'Fes la missió i «Descobreix».|Haz la misión y «Descubre».', "Ajuda en Bit: troba les seves dades i arregla-li el perfil.|Ayuda a Bit: encuentra sus datos y arréglale el perfil.", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "Si algun camp del perfil surt en vermell, que llegeixin la raó abans de tornar-ho a provar.|Si algún campo del perfil sale en rojo, que lean la razón antes de volver a probarlo." },
      { id: 's13', k: 'activitat', t: 'Pausa: escut o mans amunt?|Pausa: ¿escudo o manos arriba?', timer: 1,
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
    intro: "Tercera sessió. L'alumnat descobreix que tot el que fa a internet deixa rastre (fotos, comentaris, «m'agrada», cerques) i que el que es publica es pot copiar i quedar-se encara que s'esborri. Aprèn el semàfor de les tres preguntes (és amable? és veritat? m'importaria que ho veiés tothom?) i a demanar permís abans de publicar res d'algú. La idea no és tenir por de publicar, sinó pensar abans i saber reparar un error. La classe té una demostració amb paper (el missatge que viatja), un classificador de publicacions en grups i casos a l'app.|Tercera sesión. El alumnado descubre que todo lo que hace en internet deja rastro (fotos, comentarios, «me gusta», búsquedas) y que lo que se publica se puede copiar y quedarse aunque se borre. Aprende el semáforo de las tres preguntas (¿es amable? ¿es verdad? ¿me importaría que lo viera todo el mundo?) y a pedir permiso antes de publicar nada de alguien. La idea no es tener miedo de publicar, sino pensar antes y saber reparar un error. La clase tiene una demostración con papel (el mensaje que viaja), un clasificador de publicaciones en grupos y casos en la app.",
    claus: [
      "Tot el que fem a internet deixa una petjada, i totes juntes formen l'empremta digital, que també pot ser bona.|Todo lo que hacemos en internet deja una huella, y todas juntas forman la huella digital, que también puede ser buena.",
      "El que es publica es pot copiar (captures, reenviaments): esborrar-ho ajuda, però no ho treu tot.|Lo que se publica se puede copiar (capturas, reenvíos): borrarlo ayuda, pero no lo quita todo.",
      "Abans de publicar, el semàfor: és amable? És veritat? M'importaria que ho veiés tothom? Si dubtes, no ho publiques o ho preguntes.|Antes de publicar, el semáforo: ¿es amable? ¿Es verdad? ¿Me importaría que lo viera todo el mundo? Si dudas, no lo publicas o lo preguntas.",
      "La foto és de qui hi surt: abans es demana permís. I si t'equivoques, es repara: esborrar, demanar perdó i, si cal, demanar ajuda.|La foto es de quien sale: antes se pide permiso. Y si te equivocas, se repara: borrar, pedir perdón y, si hace falta, pedir ayuda."
    ],
    prev: [
      "Sessió d1-2 (Què compartim?): les dades personals i les pistes del fons d'una foto.|Sesión d1-2 (¿Qué compartimos?): los datos personales y las pistas del fondo de una foto.",
      "Saber què és publicar i què és una captura de pantalla (s'explica a la teoria amb l'animació de les còpies).|Saber qué es publicar y qué es una captura de pantalla (se explica en la teoría con la animación de las copias).",
      "Els adults de confiança de «El meu escut» (sessió d1-2).|Los adultos de confianza de «Mi escudo» (sesión d1-2)."
    ],
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
        "Per grup de 4: tres cartolines A4 (vermella, groga i verda), 4 fulls petits i 4 llapis|Por grupo de 4: tres cartulinas A4 (roja, amarilla y verde), 4 papelitos y 4 lápices",
        "Un tros de paper continu d'1 metre (o una cartolina A2) per al «Mural que suma» i un post-it per alumne/a|Un trozo de papel continuo de 1 metro (o una cartulina A2) para el «Mural que suma» y un pósit por alumno/a"
      ],
      imprimir: ['Publicacions per al semàfor (imprimible 1): un paquet de 12 targetes per grup de 4|Publicaciones para el semáforo (imprimible 1): un paquete de 12 tarjetas por grupo de 4', 'Reescriu-ho en verd (imprimible 2): una fitxa per parella, per als que acaben abans o per a casa|Reescríbelo en verde (imprimible 2): una ficha por pareja, para los que terminan antes o para casa'],
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
          "A la platja, la marea esborra les petjades. I a internet, qui les esborra? (Ningú del tot: les cuidem nosaltres.)|En la playa, la marea borra las huellas. ¿Y en internet, quién las borra? (Nadie del todo: las cuidamos nosotros.)",
          "Avui no direm res de dolent de ningú: si poseu exemples, que siguin inventats.|Hoy no diremos nada malo de nadie: si ponéis ejemplos, que sean inventados."],
        slides: ['s1', 's2', 's3'], app: 'Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.', org: 'Tot el grup|Todo el grupo' },
      { min: 10, t: "L'empremta i el semàfor|La huella y el semáforo", fase: 'teoria',
        fa: "Explica l'empremta digital amb l'animació de les petjades i deixa clar que també pot ser bona. Mostra com una publicació es copia encara que s'esborri. Presenta el semàfor i les tres preguntes. Llegiu la publicació de l'Àlex (empremta que suma) i el xat de la Carla (demanar permís). Acaba amb la pregunta «Esborrar ho arregla tot?».|Explica la huella digital con la animación de las huellas y deja claro que también puede ser buena. Muestra cómo una publicación se copia aunque se borre. Presenta el semáforo y las tres preguntas. Leed la publicación de Álex (huella que suma) y el chat de Carla (pedir permiso). Termina con la pregunta «¿Borrar lo arregla todo?».",
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
        fa: "Cada alumne/a avança al seu ritme. A la cerca de l'Àlex, que llegeixin també els resultats bons: no tota l'empremta és dolenta. Si algú es posa nerviós pensant en coses que ha publicat, tranquil·litza'l: sempre es pot demanar ajuda a un adult per mirar-ho.|Cada alumno/a avanza a su ritmo. En la búsqueda de Álex, que lean también los resultados buenos: no toda la huella es mala. Si alguien se pone nervioso pensando en cosas que ha publicado, tranquilízale: siempre se puede pedir ayuda a un adulto para mirarlo.",
        diu: ["Quins resultats de l'Àlex sumen? Quins no? (El pa i el premi sumen; la foto antiga, l'insult i l'escola, no.)|¿Qué resultados de Álex suman? ¿Cuáles no? (El pan y el premio suman; la foto antigua, el insulto y el colegio, no.)",
          "Per què un «m'agrada» també és una petjada? (Diu què t'agrada i fa créixer el que hi ha.)|¿Por qué un «me gusta» también es una huella? (Dice qué te gusta y hace crecer lo que hay.)",
          "Al viatge de la foto de la Mia: en quin pas ja no la podia controlar?|En el viaje de la foto de Mia: ¿en qué paso ya no la podía controlar?"],
        slides: ['s12'], app: "De «Recorda» fins a «Prediu i prova»: la pregunta de repàs, la història de la platja, les cinc targetes, el viatge d'una foto, «Quina empremta deixa?», la cerca de l'Àlex, el semàfor d'en Bit i el cas de la Lia.|De «Recuerda» hasta «Predice y prueba»: la pregunta de repaso, la historia de la playa, las cinco tarjetas, el viaje de una foto, «¿Qué huella deja?», la búsqueda de Álex, el semáforo de Bit y el caso de Lia.", org: 'Individual|Individual' },
      { min: 10, t: 'Reptes: el grup de classe i la Carla|Retos: el grupo de clase y Carla', fase: 'ordinador',
        fa: "Feu la pausa activa del semàfor tots junts. Després, el xat del grup de 5è B (que provin el camí de «Penja-la» per veure com es pot reparar), l'esborrany de la Carla i les dues preguntes.|Haced la pausa activa del semáforo todos juntos. Después, el chat del grupo de 5.º B (que prueben el camino de «Súbela» para ver cómo se puede reparar), el borrador de Carla y las dos preguntas.",
        diu: ["Vermell, groc, verd… vermell!|Rojo, amarillo, verde… ¡rojo!",
          "Si t'equivoques, què pots fer per reparar-ho? (Esborrar-ho, demanar perdó i, si cal, demanar ajuda a un adult.)|Si te equivocas, ¿qué puedes hacer para repararlo? (Borrarlo, pedir perdón y, si hace falta, pedir ayuda a un adulto.)",
          "A l'esborrany de la Carla, quina pregunta del semàfor no passa cada frase?|En el borrador de Carla, ¿qué pregunta del semáforo no pasa cada frase?",
          "La foto d'en Jan: qui ha de decidir si es penja? (En Jan.)|La foto de Jan: ¿quién tiene que decidir si se sube? (Jan.)"],
        slides: ['s13', 's14'], app: "«Pausa activa» i «Reptes»: el xat del grup de 5è B, l'esborrany de la Carla, el comentari que et penedeixes d'haver escrit i la publicació que deixa bona empremta.|«Pausa activa» y «Retos»: el chat del grupo de 5.º B, el borrador de Carla, el comentario que te arrepientes de haber escrito y la publicación que deja buena huella.", org: 'Tot el grup i després individual|Todo el grupo y después individual' },
      { min: 5, t: 'Crea: el mural que suma|Crea: el mural que suma', fase: 'crea',
        fa: "Cada alumne/a escriu en un post-it una publicació que deixi bona empremta, amb el seu àlies i sense dades personals. En parelles, s'hi fan el semàfor. Si passa les tres preguntes, l'enganxen al mural. A l'app, a «La publicació que suma», poden tocar «Ho hem fet!».|Cada alumno/a escribe en un pósit una publicación que deje buena huella, con su alias y sin datos personales. Por parejas, se hacen el semáforo. Si pasa las tres preguntas, la pegan en el mural. En la app, en «La publicación que suma», pueden tocar «¡Lo hemos hecho!».",
        diu: ["Passa les tres preguntes? Hi surt alguna dada personal?|¿Pasa las tres preguntas? ¿Sale algún dato personal?",
          "Hi ha algú que surti a la teva publicació? Li has demanat permís?|¿Sale alguien en tu publicación? ¿Le has pedido permiso?",
          "Mireu el mural: quina empremta deixa aquesta classe?|Mirad el mural: ¿qué huella deja esta clase?"],
        slides: ['s15'], app: "Pas «Crea»: «La publicació que suma» (feta en paper a classe).|Paso «Crea»: «La publicación que suma» (hecha en papel en clase).", org: 'Individual i després per parelles|Individual y después por parejas' },
      { min: 3, t: 'Tancament i tiquet de sortida|Cierre y ticket de salida', fase: 'tancament',
        fa: "Repassa el resum mirant el mural i destaca dues o tres publicacions que sumen (sense dir de qui són si l'autor/a no vol). Deixa que responguin les preguntes finals de l'app i fes el tiquet a la porta. Anuncia el projecte del decàleg de la setmana vinent.|Repasa el resumen mirando el mural y destaca dos o tres publicaciones que suman (sin decir de quién son si el autor/a no quiere). Deja que respondan las preguntas finales de la app y haz el ticket en la puerta. Anuncia el proyecto del decálogo de la semana que viene.",
        diu: ["Digues una empremta que suma i una que pot fer mal.|Di una huella que suma y una que puede hacer daño.",
          "Quines són les tres preguntes del semàfor?|¿Cuáles son las tres preguntas del semáforo?",
          "Per a la setmana vinent: penseu una norma que posaríeu al vostre decàleg.|Para la semana que viene: pensad una norma que pondríais en vuestro decálogo."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: 'Tot el grup|Todo el grupo' }
    ],
    errors: [
      ["Creu que si esborra una cosa, desapareix del tot.|Cree que si borra algo, desaparece del todo.",
        "Torneu a «El missatge que viatja»: on eren les còpies després d'estripar l'original?|Volved a «El mensaje que viaja»: ¿dónde estaban las copias después de romper el original?"],
      ["Pensa que l'empremta digital només és dolenta i té por de publicar res.|Piensa que la huella digital solo es mala y tiene miedo de publicar nada.",
        "Recorda-li les empremtes que sumen: el pa de l'Àlex, un comentari amable, el mural. Es tracta de pensar abans, no de tenir por.|Recuérdale las huellas que suman: el pan de Álex, un comentario amable, el mural. Se trata de pensar antes, no de tener miedo."],
      ["Considera que una broma no fa mal si a ell li fa gràcia.|Considera que una broma no hace daño si a él le hace gracia.",
        "Pregunta: i a la persona que surt a la foto, li fa gràcia? Qui decideix si es publica?|Pregunta: ¿y a la persona que sale en la foto, le hace gracia? ¿Quién decide si se publica?"],
      ["Només es fa una pregunta del semàfor (és amable?) i oblida si és veritat.|Solo se hace una pregunta del semáforo (¿es amable?) y olvida si es verdad.",
        "A l'esborrany de la Carla, quina pista falla a «És veritat?»? (El rumor de la Marta.)|En el borrador de Carla, ¿qué pista falla en «¿Es verdad?»? (El rumor de Marta.)"],
      ["Explica que algú ha publicat una cosa seva que no li agrada.|Explica que alguien ha publicado algo suyo que no le gusta.",
        "Escolta'l, agraeix-li que ho expliqui i digues-li que no és culpa seva. Ajuda'l a pensar amb quin adult en parlarà; si cal, segueix el protocol del centre (vegeu «Seguretat i benestar»).|Escúchale, agradécele que lo cuente y dile que no es culpa suya. Ayúdale a pensar con qué adulto lo hablará; si hace falta, sigue el protocolo del centro (ver «Seguridad y bienestar»)."],
      ["Pensa que enviar una foto a un grup de xat no és «publicar».|Piensa que enviar una foto a un grupo de chat no es «publicar».",
        "Torneu al viatge de la foto de la Mia: del grup de la classe va arribar a gent que no coneixia. Enviar-la a un grup també és publicar.|Volved al viaje de la foto de Mia: del grupo de la clase llegó a gente que no conocía. Enviarla a un grupo también es publicar."]
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
        ['Respecte als altres|Respeto a los demás', "Demana permís abans de publicar res d'algú i proposa com reparar un error.|Pide permiso antes de publicar nada de alguien y propone cómo reparar un error.", "Sap que cal permís, però considera que les bromes no fan mal.|Sabe que hace falta permiso, pero considera que las bromas no hacen daño."],
        ['Reparar un error|Reparar un error', "Proposa passos concrets per reparar (esborrar, demanar perdó, demanar ajuda) i pensa en com se sent la persona afectada.|Propone pasos concretos para reparar (borrar, pedir perdón, pedir ayuda) y piensa en cómo se siente la persona afectada.", "Sap que cal esborrar-ho, però no pensa en la persona afectada ni en demanar ajuda.|Sabe que hay que borrarlo, pero no piensa en la persona afectada ni en pedir ayuda."]
      ]
    },
    casa: "A casa podeu fer «La publicació que suma»: l'infant escriu en un paper una publicació que deixi bona empremta, li fa el semàfor i decidiu junts si es podria publicar i amb qui. També és un bon moment per acordar que, abans de penjar una foto d'algú de la família, li demanem permís (i al revés: els adults també el demanen als infants).|En casa podéis hacer «La publicación que suma»: el niño o la niña escribe en un papel una publicación que deje buena huella, le hace el semáforo y decidís juntos si se podría publicar y con quién. También es un buen momento para acordar que, antes de subir una foto de alguien de la familia, le pedimos permiso (y al revés: los adultos también se lo piden a los niños).",
    faq: [
      ["Si ho esborro de seguida, ningú no ho haurà vist?|Si lo borro enseguida, ¿nadie lo habrá visto?", "Potser sí, potser no: en pocs segons algú en pot haver fet una captura. Esborrar-ho sempre ajuda, però el millor és pensar-hi abans.|Quizá sí, quizá no: en pocos segundos alguien puede haber hecho una captura. Borrarlo siempre ayuda, pero lo mejor es pensarlo antes."],
      ["Els «m'agrada» també deixen empremta?|¿Los «me gusta» también dejan huella?", "Sí: diuen què t'agrada i, si en poses a una burla, la fan créixer. Pensa en un «m'agrada» com un comentari petit.|Sí: dicen qué te gusta y, si pones uno en una burla, la hacen crecer. Piensa en un «me gusta» como un comentario pequeño."],
      ["Si a mi em fa gràcia, per què no puc penjar la foto del meu amic?|Si a mí me hace gracia, ¿por qué no puedo subir la foto de mi amigo?", "Perquè la foto també és seva. El que a tu et fa gràcia, a ell potser li fa vergonya. Preguntar abans és respectar-lo, i si diu que no, no es penja.|Porque la foto también es suya. Lo que a ti te hace gracia, a él quizá le da vergüenza. Preguntar antes es respetarle, y si dice que no, no se sube."],
      ["Hi ha coses meves a internet que no m'agraden. Què faig?|Hay cosas mías en internet que no me gustan. ¿Qué hago?", "Explica-ho a un adult de confiança. Es pot demanar a qui ho ha publicat que ho esborri, i moltes apps tenen un botó per denunciar-ho. A Europa hi ha lleis que permeten demanar que s'esborrin algunes dades personals; d'això se n'encarrega un adult.|Cuéntaselo a un adulto de confianza. Se puede pedir a quien lo ha publicado que lo borre, y muchas apps tienen un botón para denunciarlo. En Europa hay leyes que permiten pedir que se borren algunos datos personales; de eso se encarga un adulto."],
      ["Llavors és millor no publicar mai res?|¿Entonces es mejor no publicar nunca nada?", "No! Hi ha empremtes que sumen: una cosa que has après, un dibuix, felicitar algú. Es tracta de pensar abans, no de tenir por.|¡No! Hay huellas que suman: algo que has aprendido, un dibujo, felicitar a alguien. Se trata de pensar antes, no de tener miedo."],
      ["Les cerques que faig també queden?|¿Las búsquedas que hago también se quedan?", "Moltes webs i apps guarden el que cerques i ho fan servir per ensenyar-te coses semblants. També forma part de l'empremta: a casa, un adult et pot ajudar a mirar com està configurat.|Muchas webs y apps guardan lo que buscas y lo usan para enseñarte cosas parecidas. También forma parte de la huella: en casa, un adulto te puede ayudar a mirar cómo está configurado."]
    ],
    tec: [
      ["Al classificador «Quina empremta deixa?» surten targetes en vermell.|En el clasificador «¿Qué huella deja?» salen tarjetas en rojo.", "Que llegeixin el perquè de cada targeta i toquin «Torna-ho a provar»: només cal tornar a col·locar les que han fallat.|Que lean el porqué de cada tarjeta y toquen «Vuelve a intentarlo»: solo hay que volver a colocar las que han fallado."],
      ["A la cerca de l'Àlex no troben la tercera petjada.|En la búsqueda de Álex no encuentran la tercera huella.", "Pista: el resultat del concurs diu el curs i l'escola. Són dades personals.|Pista: el resultado del concurso dice el curso y el colegio. Son datos personales."],
      ["A l'esborrany de la Carla toquen frases que no són pistes.|En el borrador de Carla tocan frases que no son pistas.", "No passa res: només compten les quatre pistes. Que facin les tres preguntes del semàfor frase per frase, en veu baixa.|No pasa nada: solo cuentan las cuatro pistas. Que hagan las tres preguntas del semáforo frase por frase, en voz baja."],
      ["No hi ha temps per a les dues parts de l'activitat sense pantalla.|No hay tiempo para las dos partes de la actividad sin pantalla.", "Feu «El missatge que viatja» en versió curta (un sol grup copia el missatge) i deixeu la segona part per al principi de la sessió següent.|Haced «El mensaje que viaja» en versión corta (un solo grupo copia el mensaje) y dejad la segunda parte para el principio de la sesión siguiente."],
      ["L'app va lenta o es queda en blanc.|La app va lenta o se queda en blanco.", "Recarregueu la pàgina i torneu a obrir la sessió. Mentrestant, la parella pot continuar amb l'ordinador del costat.|Recargad la página y volved a abrir la sesión. Mientras tanto, la pareja puede continuar con el ordenador de al lado."]
    ],
    seg: [
      "Si un infant explica que algú ha publicat una foto o un comentari seu que li fa mal: escolta'l amb calma, agraeix-li que ho expliqui i digues-li que no és culpa seva. No li demanis que ho ensenyi davant del grup. Parla-hi en privat en acabar, apunta el que ha dit (què, qui, quan) i segueix el protocol del centre: pot ser l'inici d'un cas de ciberassetjament (vegeu d2-3).|Si un niño o niña cuenta que alguien ha publicado una foto o un comentario suyo que le hace daño: escúchale con calma, agradécele que lo cuente y dile que no es culpa suya. No le pidas que lo enseñe delante del grupo. Habla con él o ella en privado al terminar, apunta lo que ha dicho (qué, quién, cuándo) y sigue el protocolo del centro: puede ser el inicio de un caso de ciberacoso (ver d2-3).",
      "Si algú explica que ha publicat alguna cosa que ha fet mal a un altre, no l'humiliïs: valora que ho expliqui i acompanya'l a reparar-ho (esborrar, demanar perdó). Si afecta un altre infant, informa'n segons el protocol.|Si alguien cuenta que ha publicado algo que ha hecho daño a otro, no le humilles: valora que lo cuente y acompáñale a repararlo (borrar, pedir perdón). Si afecta a otro niño o niña, informa según el protocolo.",
      "No es busca el nom real de cap alumne/a a internet ni es projecten resultats reals: l'Àlex i el cercador Cercanuvi són inventats.|No se busca el nombre real de ningún alumno/a en internet ni se proyectan resultados reales: Álex y el buscador Cercanuvi son inventados.",
      "Al mural, només àlies: cap nom complet, cap dada personal i cap referència a companys sense el seu permís.|En el mural, solo alias: ningún nombre completo, ningún dato personal y ninguna referencia a compañeros sin su permiso.",
      "Si surten fotos que pengen les famílies, no jutgis ningú: proposa que en parlin a casa amb calma (és part de l'activitat de casa).|Si salen fotos que cuelgan las familias, no juzgues a nadie: propón que lo hablen en casa con calma (es parte de la actividad de casa)."
    ],
    extra: [
      "Diari de petjades: durant un dia, amb la família, apuntar les petjades digitals que deixen (una cerca, un missatge, una foto) i classificar-les en «suma», «pot fer mal» o «neutra».|Diario de huellas: durante un día, con la familia, apuntar las huellas digitales que dejan (una búsqueda, un mensaje, una foto) y clasificarlas en «suma», «puede hacer daño» o «neutra».",
      "Per als grans: escriure una carta curta al «jo d'aquí a cinc anys» explicant quina empremta digital volen haver deixat i per què.|Para los mayores: escribir una carta corta al «yo dentro de cinco años» explicando qué huella digital quieren haber dejado y por qué.",
      "Llengua: completar la fitxa «Reescriu-ho en verd» i inventar un missatge nou que passi les tres preguntes del semàfor.|Lengua: completar la ficha «Reescríbelo en verde» e inventar un mensaje nuevo que pase las tres preguntas del semáforo."
    ],
    trans: [
      "Sessió anterior (d1-2): què no es comparteix (dades personals, ubicació). Avui: per què el que es publica es queda.|Sesión anterior (d1-2): qué no se comparte (datos personales, ubicación). Hoy: por qué lo que se publica se queda.",
      "Sessió següent (d1-4, el decàleg): el semàfor i demanar permís seran normes del cartell.|Sesión siguiente (d1-4, el decálogo): el semáforo y pedir permiso serán normas del cartel.",
      "Unitat 2: la pregunta «És veritat?» connecta amb els bulos (d2-1) i «És amable?» amb el respecte a la xarxa (d2-3).|Unidad 2: la pregunta «¿Es verdad?» conecta con los bulos (d2-1) y «¿Es amable?» con el respeto en la red (d2-3)."
    ],
    slides: [
      { id: 's1', k: 'portada', t: "L'empremta digital|La huella digital", x: "Avui descobrirem el rastre que deixem a internet i com fer que sumi.|Hoy descubriremos el rastro que dejamos en internet y cómo hacer que sume.",
        nota: "Presenta l'objectiu: no es tracta de tenir por de publicar, sinó de pensar abans.|Presenta el objetivo: no se trata de tener miedo de publicar, sino de pensar antes." },
      { id: 's2', k: 'repas', t: 'Recordes? Dades i desconeguts|¿Recuerdas? Datos y desconocidos', punts: ["Les dades personals es guarden.|Los datos personales se guardan.", 'Fotos: mira el fons.|Fotos: mira el fondo.', 'Desconegut: no contesto, bloquejo i ho explico.|Desconocido: no contesto, bloqueo y lo explico.'],
        nota: "Pregunta qui ha fet l'escut a casa. Que algú expliqui el lema dels desconeguts.|Pregunta quién ha hecho el escudo en casa. Que alguien explique el lema de los desconocidos." },
      { id: 's3', k: 'pregunta', t: 'Petjades a la sorra|Huellas en la arena', x: "Què passa amb les petjades a la platja quan puja la marea? I a internet?|¿Qué pasa con las huellas en la playa cuando sube la marea? ¿Y en internet?",
        nota: "Recull idees. Guarda per al final la conclusió: a internet no hi ha marea que ho esborri tot.|Recoge ideas. Guarda para el final la conclusión: en internet no hay marea que lo borre todo." },
      { id: 's4', k: 'anim', t: 'Cada clic deixa una petjada|Cada clic deja una huella', anim: 'd1rastre', x: "Fotos, comentaris, «m'agrada» i cerques: la teva empremta.|Fotos, comentarios, «me gusta» y búsquedas: tu huella.",
        nota: "Remarca que l'empremta també pot ser bona: un treball de què estàs orgullós/osa, un comentari amable.|Remarca que la huella también puede ser buena: un trabajo del que estás orgulloso/a, un comentario amable." },
      { id: 's5', k: 'anim', t: 'El que publiques es pot copiar|Lo que publicas se puede copiar', anim: 'd1copia', x: "L'original s'esborra, però les captures es poden quedar.|El original se borra, pero las capturas se pueden quedar.",
        nota: "Pregunta com es pot copiar una publicació: captura, reenviar, fer una foto de la pantalla…|Pregunta cómo se puede copiar una publicación: captura, reenviar, hacer una foto de la pantalla…" },
      { id: 's6', k: 'concepte', t: 'El semàfor abans de publicar|El semáforo antes de publicar', pic: 'img/ment/atu.webp',
        punts: ['Vermell: para un moment.|Rojo: para un momento.', "Groc: és amable? És veritat? M'importaria que ho veiés tothom?|Amarillo: ¿es amable? ¿Es verdad? ¿Me importaría que lo viera todo el mundo?", 'Verd: si tot és que sí, endavant. Si dubtes, no ho publiquis.|Verde: si todo es que sí, adelante. Si dudas, no lo publiques.'],
        nota: "Feu que la classe digui les tres preguntes en veu alta. Les farem servir tota la sessió.|Haced que la clase diga las tres preguntas en voz alta. Las usaremos toda la sesión." },
      { id: 's7', k: 'media', t: 'Una empremta que suma|Una huella que suma', x: "Què diu de l'Àlex aquesta publicació?|¿Qué dice de Álex esta publicación?",
        media: { k: 'dig', kind: 'post', from: 'Àlex_Construeix|Álex_Construye', av: '🦉', when: 'fa 2 dies|hace 2 días', html: "He après a fer pa amb l'avi! Ha quedat una mica torrat, però boníssim. Gràcies, avi! ⭐|¡He aprendido a hacer pan con el abuelo! Ha quedado un poco tostado, pero buenísimo. ¡Gracias, abuelo! ⭐" },
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
        punts: ["Obre la sessió «L'empremta digital».|Abre la sesión «La huella digital».", 'Fes la missió, «Descobreix» i «Mans a l\'obra».|Haz la misión, «Descubre» y «Manos a la obra».', "Investiga què diu internet de l'Àlex.|Investiga qué dice internet de Álex.", 'Para a la «Pausa activa».|Para en la «Pausa activa».'],
        nota: "A la cerca de l'Àlex, que llegeixin també els resultats bons.|En la búsqueda de Álex, que lean también los resultados buenos." },
      { id: 's13', k: 'activitat', t: 'Pausa: el semàfor|Pausa: el semáforo', timer: 1,
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
          { q: "«Diuen que la Marta ha suspès tots els exàmens.»|«Dicen que Marta ha suspendido todos los exámenes.»", sol: "No sabem si és veritat i pot fer mal: no es publica. Si es vol dir alguna cosa, millor una d'amable sobre un mateix.|No sabemos si es verdad y puede hacer daño: no se publica. Si se quiere decir algo, mejor algo amable sobre uno mismo." },
          { q: "«Ara som al càmping de la Riera fins diumenge.»|«Ahora estamos en el camping de la Riera hasta el domingo.»", sol: "Dona la ubicació. Per exemple: «Quina excursió més xula aquest cap de setmana!» (i les fotos, en tornar a casa).|Da la ubicación. Por ejemplo: «¡Qué excursión más chula este fin de semana!» (y las fotos, al volver a casa)." },
          { q: "«Mireu en Pol caient al fang 😂» (amb la foto).|«Mirad a Pol cayéndose al barro 😂» (con la foto).", sol: "No és amable i no hi ha permís. Primer cal preguntar a en Pol; si diu que no, no es publica.|No es amable y no hay permiso. Primero hay que preguntar a Pol; si dice que no, no se publica.", big: true }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el meu decàleg ---------- */
  'd1-4': {
    intro: "Projecte final de la unitat 1. L'alumnat recupera el que ha après (contrasenyes, dades i privadesa, desconeguts, empremta digital i demanar ajuda) i ho converteix en un decàleg personal: deu normes concretes, en positiu i curtes, amb la norma d'or i tres adults de confiança. Escriure normes pròpies és la manera de convertir el que saben en hàbits. La classe té una pluja d'idees en grups (el mur de normes), la part de l'app on revisen el decàleg d'en Bit i trien cinc normes, i el cartell en paper, que es presenta en una galeria amb comentaris amables.|Proyecto final de la unidad 1. El alumnado recupera lo que ha aprendido (contraseñas, datos y privacidad, desconocidos, huella digital y pedir ayuda) y lo convierte en un decálogo personal: diez normas concretas, en positivo y cortas, con la norma de oro y tres adultos de confianza. Escribir normas propias es la forma de convertir lo que saben en hábitos. La clase tiene una lluvia de ideas en grupos (el muro de normas), la parte de la app donde revisan el decálogo de Bit y eligen cinco normas, y el cartel en papel, que se presenta en una galería con comentarios amables.",
    claus: [
      "Un decàleg són deu normes que tries tu per cuidar-te i cuidar els altres a internet.|Un decálogo son diez normas que eliges tú para cuidarte y cuidar a los demás en internet.",
      "Una bona norma és concreta (diu què faràs i quan), en positiu (diu què fer) i curta.|Una buena norma es concreta (dice qué harás y cuándo), en positivo (dice qué hacer) y corta.",
      "Les normes s'agrupen per temes: contrasenyes, dades i privadesa, desconeguts, empremta digital i demanar ajuda.|Las normas se agrupan por temas: contraseñas, datos y privacidad, desconocidos, huella digital y pedir ayuda.",
      "La norma d'or: si alguna cosa d'internet et fa sentir malament, ho expliques a un adult de confiança. Explicar-ho no és xivar-se.|La norma de oro: si algo de internet te hace sentir mal, se lo cuentas a un adulto de confianza. Contarlo no es chivarse."
    ],
    prev: [
      "Sessions d1-1, d1-2 i d1-3: contrasenyes fortes, dades personals i privadesa, desconeguts i empremta digital (el semàfor).|Sesiones d1-1, d1-2 y d1-3: contraseñas fuertes, datos personales y privacidad, desconocidos y huella digital (el semáforo).",
      "Els tres adults de confiança de «El meu escut» (d1-2).|Los tres adultos de confianza de «Mi escudo» (d1-2).",
      "Fer un cartell senzill: títol, dibuixos i lletra que es llegeixi (educació visual).|Hacer un cartel sencillo: título, dibujos y letra que se lea (educación visual)."
    ],
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
        "Una cartolina A3 per alumne/a i, per grup de 4, retoladors, colors, 2 tisores i una barra de cola|Una cartulina A3 por alumno/a y, por grupo de 4, rotuladores, colores, 2 tijeras y una barra de pegamento",
        "Post-its de quatre colors (un color per tema), uns 12 per grup, per a la pluja d'idees|Pósits de cuatro colores (un color por tema), unos 12 por grupo, para la lluvia de ideas"
      ],
      imprimir: ['Plantilla del decàleg (imprimible 1): una per alumne/a|Plantilla del decálogo (imprimible 1): una por alumno/a', 'Icones per al cartell (imprimible 2): un full per cada dos alumnes|Iconos para el cartel (imprimible 2): una hoja por cada dos alumnos'],
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
          "Què fas si un desconegut et demana una foto? (No contesto, bloquejo i ho explico.)|¿Qué haces si un desconocido te pide una foto? (No contesto, bloqueo y lo explico.)",
          "Avui no aprendrem coses noves: farem servir tot el que ja sabeu per fer un cartell que veurà tota l'escola.|Hoy no aprenderemos cosas nuevas: usaremos todo lo que ya sabéis para hacer un cartel que verá todo el colegio."],
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
          "A quina columna va? Pot anar a dues?|¿A qué columna va? ¿Puede ir a dos?",
          "«Compte amb tot»: com la faríeu concreta? (Per exemple: «Abans de tocar un enllaç estrany, ho pregunto a casa».)|«Cuidado con todo»: ¿cómo la haríais concreta? (Por ejemplo: «Antes de tocar un enlace raro, lo pregunto en casa».)"],
        slides: ['s9', 's10'], app: 'Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.', org: 'Grups de 4|Grupos de 4' },
      { min: 15, t: "A l'ordinador: el decàleg d'en Bit i el meu|En el ordenador: el decálogo de Bit y el mío", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins a «El teu decàleg», on tria una norma per tema i la desa. Feu tots junts la pausa activa quan hi arribin. Al xat d'en Bit, anima'ls a provar també les respostes que no funcionen per veure com en Bit els fa pensar.|Cada alumno/a hace la sesión hasta «Tu decálogo», donde elige una norma por tema y la guarda. Haced todos juntos la pausa activa cuando lleguen. En el chat de Bit, anímalos a probar también las respuestas que no funcionan para ver cómo Bit les hace pensar.",
        diu: ["Com has ajudat en Bit a millorar la primera norma?|¿Cómo has ayudado a Bit a mejorar la primera norma?",
          "De les tres normes de cada tema, quina és més important per a tu? Per què?|De las tres normas de cada tema, ¿cuál es más importante para ti? ¿Por qué?",
          "Per què la norma d'or va sempre a sota, ben grossa?|¿Por qué la norma de oro va siempre debajo, bien grande?"],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins a «El teu decàleg»: les dues preguntes de repàs, la història, les quatre targetes, «Norma que funciona?», els passos del projecte, les dues preguntes, el decàleg d'en Bit, la pausa, les normes per temes i la tria de les cinc normes.|Desde «Recuerda» hasta «Tu decálogo»: las dos preguntas de repaso, la historia, las cuatro tarjetas, «¿Norma que funciona?», los pasos del proyecto, las dos preguntas, el decálogo de Bit, la pausa, las normas por temas y la elección de las cinco normas.", org: 'Individual|Individual' },
      { min: 12, t: 'Crea: el meu cartell|Crea: mi cartel', fase: 'crea',
        fa: "Cada alumne/a fa el seu cartell a la cartolina amb la plantilla: títol amb l'àlies, les cinc normes de l'app, cinc més de pròpies (poden venir del mur de normes), la norma d'or ben grossa a sota amb els tres adults de confiança i les icones dels temes. Passeja i ajuda a millorar normes generals amb preguntes.|Cada alumno/a hace su cartel en la cartulina con la plantilla: título con el alias, las cinco normas de la app, cinco más propias (pueden venir del muro de normas), la norma de oro bien grande debajo con los tres adultos de confianza y los iconos de los temas. Pasea y ayuda a mejorar normas generales con preguntas.",
        diu: ["Aquesta norma, què vol dir exactament? Quan la faràs servir?|Esta norma, ¿qué quiere decir exactamente? ¿Cuándo la usarás?",
          "Llegeix-la en veu baixa: la recordaràs d'aquí a una setmana? Si és massa llarga, escurça-la.|Léela en voz baja: ¿la recordarás dentro de una semana? Si es demasiado larga, acórtala.",
          "No t'oblidis de la norma d'or i dels teus tres adults!|¡No te olvides de la norma de oro y de tus tres adultos!"],
        slides: ['s13'], app: "Pas «El cartell del decàleg» (fet en paper a classe: poden tocar «Ho hem fet!»).|Paso «El cartel del decálogo» (hecho en papel en clase: pueden tocar «¡Lo hemos hecho!»).", org: 'Individual|Individual' },
      { min: 8, t: 'La galeria i el tiquet de sortida|La galería y el ticket de salida', fase: 'tancament',
        fa: "Pengeu els cartells. Feu una galeria: cada alumne/a mira el cartell d'un company/a i li diu dues coses que li agraden i una idea per millorar. Dos o tres voluntaris presenten una norma del seu decàleg. Acabeu amb el resum, les preguntes finals de l'app i el tiquet.|Colgad los carteles. Haced una galería: cada alumno/a mira el cartel de un compañero/a y le dice dos cosas que le gustan y una idea para mejorar. Dos o tres voluntarios presentan una norma de su decálogo. Terminad con el resumen, las preguntas finales de la app y el ticket.",
        diu: ["Digues dues coses que t'agraden del cartell i una idea per millorar-lo.|Di dos cosas que te gustan del cartel y una idea para mejorarlo.",
          "Quina norma creus que et costarà més de complir? Com t'hi podem ajudar?|¿Qué norma crees que te costará más cumplir? ¿Cómo te podemos ayudar?",
          "Heu acabat la primera unitat: ara sou experts i expertes en seguretat a la xarxa!|Habéis terminado la primera unidad: ¡ahora sois expertos y expertas en seguridad en la red!"],
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
        "Recorda que el decàleg dona eines: què pots fer tu per estar bé a internet?|Recuerda que el decálogo da herramientas: ¿qué puedes hacer tú para estar bien en internet?"],
      ["Escriu una norma molt llarga que barreja dos temes.|Escribe una norma muy larga que mezcla dos temas.",
        "Ajuda'l a partir-la en dues: una norma, una acció. Quina part va a cada tema?|Ayúdale a partirla en dos: una norma, una acción. ¿Qué parte va a cada tema?"]
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
        ["Norma d'or i presentació|Norma de oro y presentación", "Inclou la norma d'or amb tres adults de confiança i presenta el cartell explicant-ne una norma.|Incluye la norma de oro con tres adultos de confianza y presenta el cartel explicando una norma.", "Inclou la norma d'or, però li costa explicar per què és important.|Incluye la norma de oro, pero le cuesta explicar por qué es importante."],
        ['Revisió i comentaris|Revisión y comentarios', "Revisa les seves normes amb les tres preguntes i, a la galeria, dona dos comentaris amables i una idea útil.|Revisa sus normas con las tres preguntas y, en la galería, da dos comentarios amables y una idea útil.", "Dona comentaris generals («està bé») o no revisa les seves normes.|Da comentarios generales («está bien») o no revisa sus normas."]
      ]
    },
    casa: "A casa, l'infant us presentarà el seu decàleg. Podeu penjar-lo a prop de l'ordinador o la tauleta i fer-ne un de familiar: quines normes ens posem tots, adults inclosos? Si alguna norma us sembla difícil de complir, parleu-ne junts. I recordeu-li sovint la norma d'or: sempre us pot explicar el que li passi a internet.|En casa, el niño o la niña os presentará su decálogo. Podéis colgarlo cerca del ordenador o la tablet y hacer uno familiar: ¿qué normas nos ponemos todos, adultos incluidos? Si alguna norma os parece difícil de cumplir, habladlo juntos. Y recordadle a menudo la norma de oro: siempre os puede contar lo que le pase en internet.",
    faq: [
      ["Han de ser exactament deu normes?|¿Tienen que ser exactamente diez normas?", "Decàleg vol dir deu, i és un bon repte. Però el que importa és que siguin teves i útils: més val nou normes bones que deu de repetides.|Decálogo quiere decir diez, y es un buen reto. Pero lo que importa es que sean tuyas y útiles: más vale nueve normas buenas que diez repetidas."],
      ["Puc copiar normes del mur de la classe?|¿Puedo copiar normas del muro de la clase?", "Sí, per inspirar-te. Però tria les que són importants per a tu i escriu-les amb les teves paraules.|Sí, para inspirarte. Pero elige las que son importantes para ti y escríbelas con tus palabras."],
      ["Per què les normes han de ser en positiu?|¿Por qué las normas tienen que ser en positivo?", "Perquè et diuen què fer quan arribi el moment. «No diguis la contrasenya» diu què no fer; «La meva contrasenya només la sé jo i la família» diu què fer.|Porque te dicen qué hacer cuando llegue el momento. «No digas la contraseña» dice qué no hacer; «Mi contraseña solo la sé yo y mi familia» dice qué hacer."],
      ["I si un dia no compleixo una norma?|¿Y si un día no cumplo una norma?", "Tothom s'equivoca. El decàleg et recorda què fer la propera vegada, i si alguna cosa surt malament, hi ha la norma d'or: ho expliques i t'ajuden.|Todo el mundo se equivoca. El decálogo te recuerda qué hacer la próxima vez, y si algo sale mal, está la norma de oro: lo cuentas y te ayudan."],
      ["Els adults també haurien de tenir un decàleg?|¿Los adultos también deberían tener un decálogo?", "Molt bona idea! A casa en podeu fer un de familiar, amb normes per a tothom (és l'activitat de casa d'avui).|¡Muy buena idea! En casa podéis hacer uno familiar, con normas para todo el mundo (es la actividad de casa de hoy)."],
      ["Explicar-ho a un adult no és xivar-se?|Contárselo a un adulto, ¿no es chivarse?", "No. Xivar-se és explicar una cosa per fer mal a algú. Explicar a un adult que alguna cosa et fa sentir malament, a tu o a un company, és cuidar-vos.|No. Chivarse es contar algo para hacer daño a alguien. Contarle a un adulto que algo te hace sentir mal, a ti o a un compañero, es cuidaros."]
    ],
    tec: [
      ["A «El teu decàleg» no deixa desar.|En «Tu decálogo» no deja guardar.", "Cal triar una norma de cada tema (cinc en total). Que mirin quin tema els falta.|Hay que elegir una norma de cada tema (cinco en total). Que miren qué tema les falta."],
      ["No hi ha temps per acabar el cartell.|No hay tiempo para terminar el cartel.", "Que l'acabin a casa amb la família o al principi de la sessió següent. La galeria es pot fer igual amb els cartells a mig fer.|Que lo terminen en casa con la familia o al principio de la sesión siguiente. La galería se puede hacer igual con los carteles a medio hacer."],
      ["Falten cartolines A3.|Faltan cartulinas A3.", "Dos fulls A4 enganxats també serveixen: l'important són les normes, no la mida.|Dos folios A4 pegados también sirven: lo importante son las normas, no el tamaño."],
      ["Al classificador de temes, una targeta no s'arrossega.|En el clasificador de temas, una tarjeta no se arrastra.", "Que la toquin i després toquin el calaix: també funciona.|Que la toquen y después toquen la caja: también funciona."],
      ["No sabeu on penjar els cartells.|No sabéis dónde colgar los carteles.", "Pacteu-ho abans amb el centre (passadís, biblioteca, classe). Si no es poden penjar, feu una foto de cada cartell, sense cap alumne/a a la imatge, per a les famílies.|Pactadlo antes con el centro (pasillo, biblioteca, clase). Si no se pueden colgar, haced una foto de cada cartel, sin ningún alumno/a en la imagen, para las familias."],
      ["Un alumne/a no sap què escriure.|Un alumno/a no sabe qué escribir.", "Que parteixi de les cinc normes de l'app i en triï dues del mur. Ajuda'l amb la pregunta «Què faràs quan…?».|Que parta de las cinco normas de la app y elija dos del muro. Ayúdale con la pregunta «¿Qué harás cuando…?»."]
    ],
    seg: [
      "Als cartells que es pengen en espais comuns, només l'àlies: cap nom complet ni foto de l'alumnat. Dels adults de confiança, n'hi ha prou amb «la meva àvia», «la tutora» o el nom de pila.|En los carteles que se cuelgan en espacios comunes, solo el alias: ningún nombre completo ni foto del alumnado. De los adultos de confianza, basta con «mi abuela», «la tutora» o el nombre de pila.",
      "Si un infant no troba cap adult de confiança, ajuda'l discretament a pensar-ne (família, mestres, monitors) i comenta-ho amb el tutor/a: pot ser un senyal que necessita més suport.|Si un niño o niña no encuentra ningún adulto de confianza, ayúdale discretamente a pensar alguno (familia, maestros, monitores) y coméntalo con el tutor/a: puede ser una señal de que necesita más apoyo.",
      "Si durant la pluja d'idees o la galeria algú explica un cas real, segueix el protocol del centre: escolta amb calma, agraeix-li que ho expliqui, digues-li que no és culpa seva, no li demanis detalls davant del grup, no prometis guardar el secret, apunta el que ha dit i avisa el mateix dia la persona de referència.|Si durante la lluvia de ideas o la galería alguien cuenta un caso real, sigue el protocolo del centro: escucha con calma, agradécele que lo cuente, dile que no es culpa suya, no le pidas detalles delante del grupo, no prometas guardar el secreto, apunta lo que ha dicho y avisa el mismo día a la persona de referencia.",
      "A la galeria, modela tu primer un comentari amable i útil. Cap burla dels cartells, de la lletra ni dels dibuixos.|En la galería, modela tú primero un comentario amable y útil. Ninguna burla de los carteles, de la letra ni de los dibujos.",
      "Material: tisores de punta rodona i cola en barra; recolliu-ho tot abans de la galeria.|Material: tijeras de punta redonda y pegamento en barra; recogedlo todo antes de la galería."
    ],
    extra: [
      "Gravar el decàleg en un àudio curt o una presentació amb dibuixos (sense cares ni veus identificables si s'ha de publicar) per a la ràdio o la web de l'escola, amb permís del centre.|Grabar el decálogo en un audio corto o una presentación con dibujos (sin caras ni voces identificables si se va a publicar) para la radio o la web del colegio, con permiso del centro.",
      "Matemàtiques: fer una votació de la norma preferida de la classe i representar-la en un diagrama de barres.|Matemáticas: hacer una votación de la norma favorita de la clase y representarla en un diagrama de barras.",
      "Per als grans: comparar el decàleg propi amb el de dos companys/es i acordar-ne un de comú per a la classe (cal arribar a un consens).|Para los mayores: comparar el decálogo propio con el de dos compañeros/as y acordar uno común para la clase (hay que llegar a un consenso)."
    ],
    trans: [
      "Recull de la unitat: cada tema del decàleg ve d'una sessió (d1-1 contrasenyes, d1-2 dades i desconeguts, d1-3 empremta).|Recopilación de la unidad: cada tema del decálogo viene de una sesión (d1-1 contraseñas, d1-2 datos y desconocidos, d1-3 huella).",
      "Unitat 2 (d2-4, la campanya): el cartell d'avui és un primer pas; allà es farà una campanya per a tota l'escola, amb missatge i pla.|Unidad 2 (d2-4, la campaña): el cartel de hoy es un primer paso; allí se hará una campaña para todo el colegio, con mensaje y plan.",
      "Llengua (textos normatius i instructius: frases curtes i en imperatiu o primera persona) i educació visual (el cartell).|Lengua (textos normativos e instructivos: frases cortas y en imperativo o primera persona) y educación visual (el cartel)."
    ],
    slides: [
      { id: 's1', k: 'portada', t: 'Projecte: el meu decàleg|Proyecto: mi decálogo', x: "Avui farem servir tot el que hem après per crear les nostres normes per estar segurs a la xarxa.|Hoy usaremos todo lo que hemos aprendido para crear nuestras normas para estar seguros en la red.",
        nota: "Presenta el projecte com la culminació de la unitat: són experts i expertes en seguretat a la xarxa.|Presenta el proyecto como la culminación de la unidad: son expertos y expertas en seguridad en la red." },
      { id: 's2', k: 'repas', t: 'Preguntes llampec|Preguntas relámpago', punts: ['Què fa forta una contrasenya?|¿Qué hace fuerte una contraseña?', 'Digues una dada que es guarda.|Di un dato que se guarda.', 'Què fas si un desconegut et demana una foto?|¿Qué haces si un desconocido te pide una foto?', 'Quines són les preguntes del semàfor?|¿Cuáles son las preguntas del semáforo?'],
        nota: "Una pregunta per tema. Que contestin alumnes diferents.|Una pregunta por tema. Que contesten alumnos diferentes." },
      { id: 's3', k: 'concepte', t: "L'encàrrec de l'escola|El encargo del colegio", pic: 'img/tech/scenes/poble.webp', punts: ["L'escola vol cartells amb normes per anar segurs per internet.|El colegio quiere carteles con normas para ir seguros por internet.", 'Cada alumne/a en farà un: el seu decàleg.|Cada alumno/a hará uno: su decálogo.', 'Els penjarem perquè els vegi tothom.|Los colgaremos para que los vea todo el mundo.'],
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
      { id: 's10', k: 'concepte', t: 'La revisió en tres preguntes|La revisión en tres preguntas', pic: 'img/ment/vel.webp', punts: ['És concreta? Diu què faré exactament?|¿Es concreta? ¿Dice qué haré exactamente?', 'Està en positiu?|¿Está en positivo?', 'És curta i fàcil de recordar?|¿Es corta y fácil de recordar?'],
        nota: "Deixa aquesta diapositiva projectada durant la pluja d'idees i el cartell.|Deja esta diapositiva proyectada durante la lluvia de ideas y el cartel." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
        punts: ['Obre «Projecte: el meu decàleg».|Abre «Proyecto: mi decálogo».', "Ajuda en Bit a millorar el seu decàleg.|Ayuda a Bit a mejorar su decálogo.", 'Tria una norma per tema i desa el teu decàleg.|Elige una norma por tema y guarda tu decálogo.', 'Para al pas «El cartell del decàleg».|Para en el paso «El cartel del decálogo».'],
        nota: "Les cinc normes que triïn a l'app seran la base del cartell.|Las cinco normas que elijan en la app serán la base del cartel." },
      { id: 's12', k: 'activitat', t: 'Pausa: deu normes, deu moviments|Pausa: diez normas, diez movimientos', timer: 1, punts: ['Compteu de l\'1 al 10 en veu alta.|Contad del 1 al 10 en voz alta.', 'A cada número, un moviment diferent.|En cada número, un movimiento diferente.', 'Sense repetir-ne cap!|¡Sin repetir ninguno!'],
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
      intro: "Primera sessió de la unitat 2. L'alumnat aprèn què és un bulo (una notícia falsa), per què corre tan de pressa i com descobrir-lo amb tres preguntes: qui ho diu, de quan és i qui més ho diu. També reconeix fotos reals fora de context i les pistes dels missatges trampa (phishing): premis, presses, por, adreces estranyes i peticions de contrasenyes o dades. El missatge de fons és aturar-se abans de compartir i, si algú hi cau, saber que no és culpa seva i explicar-ho a un adult. La classe té una demostració projectada, una redacció de diari en grups amb titulars inventats i reptes de pistes a l'app.|Primera sesión de la unidad 2. El alumnado aprende qué es un bulo (una noticia falsa), por qué corre tan deprisa y cómo descubrirlo con tres preguntas: quién lo dice, de cuándo es y quién más lo dice. También reconoce fotos reales fuera de contexto y las pistas de los mensajes trampa (phishing): premios, prisas, miedo, direcciones raras y peticiones de contraseñas o datos. El mensaje de fondo es pararse antes de compartir y, si alguien cae, saber que no es culpa suya y contárselo a un adulto. La clase tiene una demostración proyectada, una redacción de periódico en grupos con titulares inventados y retos de pistas en la app.",
      claus: [
        "Un bulo és una informació falsa que es fa passar per veritat, i corre perquè la compartim sense comprovar-la.|Un bulo es una información falsa que se hace pasar por verdad, y corre porque la compartimos sin comprobarla.",
        "Abans de creure i compartir, les tres preguntes: qui ho diu? De quan és? Qui més ho diu?|Antes de creer y compartir, las tres preguntas: ¿quién lo dice? ¿De cuándo es? ¿Quién más lo dice?",
        "Una font fiable té nom, data i algú que se'n fa responsable; una foto real pot enganyar si és d'un altre lloc o d'un altre dia.|Una fuente fiable tiene nombre, fecha y alguien que se hace responsable; una foto real puede engañar si es de otro lugar o de otro día.",
        "Els missatges trampa fan servir premis, presses i por i demanen contrasenyes o dades: no toco res i ho ensenyo a un adult. Si hi he caigut, no és culpa meva.|Los mensajes trampa usan premios, prisas y miedo y piden contraseñas o datos: no toco nada y se lo enseño a un adulto. Si he caído, no es culpa mía."
      ],
      prev: [
        "Sessió d1-1: la contrasenya i el codi de verificació no es donen mai (el missatge que demanava el codi).|Sesión d1-1: la contraseña y el código de verificación no se dan nunca (el mensaje que pedía el código).",
        "Sessió d1-3: el semàfor abans de publicar i la pregunta «És veritat?».|Sesión d1-3: el semáforo antes de publicar y la pregunta «¿Es verdad?».",
        "Llegir una data i saber què és un enllaç (es repassa a la teoria).|Leer una fecha y saber qué es un enlace (se repasa en la teoría)."
      ],
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
          "Per grup de 3 o 4: un paquet de 10 titulars i tres fulls A4 amb els rètols «Fiable», «Cal comprovar» i «Bulo»|Por grupo de 3 o 4: un paquete de 10 titulares y tres hojas A4 con los rótulos «Fiable», «Hay que comprobar» y «Bulo»",
          "La fitxa «Investiga una notícia» (una per grup) i un llapis per alumne/a|La ficha «Investiga una noticia» (una por grupo) y un lápiz por alumno/a",
          "Un full A4 o mitja cartolina i colors per alumne/a per al detector de bulos|Una hoja A4 o media cartulina y colores por alumno/a para el detector de bulos"
        ],
        imprimir: ["Titulars de la redacció de Vilabit (imprimible 1): un paquet de 10 targetes per grup de 3 o 4|Titulares de la redacción de Vilabit (imprimible 1): un paquete de 10 tarjetas por grupo de 3 o 4", "Investiga una notícia (imprimible 2): una fitxa per grup|Investiga una noticia (imprimible 2): una ficha por grupo"],
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
          fa: "Cada alumne/a obre la sessió i avança al seu ritme. A l'activitat de pistes de la notícia, passeja i demana a qui toca a l'atzar que expliqui per què cada pista és sospitosa abans de tocar-ne una altra. Als més petits, llegeix-los en veu alta l'artefacte si cal.|Cada alumno/a abre la sesión y avanza a su ritmo. En la actividad de pistas de la noticia, pasea y pide a quien toca al azar que explique por qué cada pista es sospechosa antes de tocar otra. A los más pequeños, léeles en voz alta el artefacto si hace falta.",
          diu: ["Abans de tocar, digues-me per què et sembla una pista.|Antes de tocar, dime por qué te parece una pista.",
            "Mira també la part de dalt: l'adreça i qui ho publica.|Mira también la parte de arriba: la dirección y quién lo publica.",
            "Quines fonts has posat a «poc fiable»? Per què?|¿Qué fuentes has puesto en «poco fiable»? ¿Por qué?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la contrasenya, la missió, les targetes de «Descobreix», ordenar els passos del caçador/a, classificar les fonts, la pregunta de les emocions i les pistes de la notícia.|De «Recuerda» hasta «Investiga»: la pregunta de la contraseña, la misión, las tarjetas de «Descubre», ordenar los pasos del cazador/a, clasificar las fuentes, la pregunta de las emociones y las pistas de la noticia.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: els missatges trampa|Retos: los mensajes trampa", fase: 'ordinador',
          fa: "Feu la pausa activa tots junts. Després deixa'ls fer els quatre reptes: el missatge del premi, el correu de XatAmics, classificar què fer amb cada missatge i la conversa amb la Nora. Abans de començar, projecta la diapositiva «I si ja hi he caigut?» i deixa-la a la vista: és el missatge més important de la sessió.|Haced la pausa activa todos juntos. Después déjales hacer los cuatro retos: el mensaje del premio, el correo de XatAmics, clasificar qué hacer con cada mensaje y la conversación con Nora. Antes de empezar, proyecta la diapositiva «¿Y si ya he caído?» y déjala a la vista: es el mensaje más importante de la sesión.",
          diu: ["Quin és el truc que fan servir tots dos missatges per enganyar?|¿Cuál es el truco que usan los dos mensajes para engañar?",
            "A la conversa amb la Nora, prova també una resposta equivocada: què passa?|En la conversación con Nora, prueba también una respuesta equivocada: ¿qué pasa?",
            "Si mai caieu en un engany, què fareu? Exacte: explicar-ho, sense por.|Si alguna vez caéis en un engaño, ¿qué haréis? Exacto: contarlo, sin miedo."],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu detector de bulos|Crea: mi detector de bulos", fase: 'crea',
          fa: "Reparteix fulls i colors. Cada alumne/a comença el seu detector: la lupa amb les tres preguntes, tres pistes d'engany i «Si dubto, pregunto a…» amb el nom d'un adult de confiança. L'acabaran a casa. A l'app, el pas «Crea» es pot marcar com a fet quan l'acabin.|Reparte hojas y colores. Cada alumno/a empieza su detector: la lupa con las tres preguntas, tres pistas de engaño y «Si dudo, pregunto a…» con el nombre de un adulto de confianza. Lo terminarán en casa. En la app, el paso «Crea» se puede marcar como hecho cuando lo terminen.",
          diu: ["Quina pista d'engany us ha sorprès més avui?|¿Qué pista de engaño os ha sorprendido más hoy?",
            "Qui és el vostre adult de confiança? Escriviu-ne el nom.|¿Quién es vuestro adulto de confianza? Escribid su nombre.",
            "Penjareu el detector a prop de l'ordinador o del mòbil de casa: on el posareu?|Colgaréis el detector cerca del ordenador o del móvil de casa: ¿dónde lo pondréis?"],
          slides: ['s14'], app: "Pas «Crea»: el meu detector de bulos (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: mi detector de bulos (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Torna a la votació de l'inici: algú canviaria ara el vot sobre la nevada? Repassa les tres idees amb el resum, deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet. Recorda que el detector s'acaba a casa amb la família.|Vuelve a la votación del principio: ¿alguien cambiaría ahora el voto sobre la nevada? Repasa las tres ideas con el resumen, deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket. Recuerda que el detector se termina en casa con la familia.",
          diu: ["Quines són les tres preguntes del caçador/a de bulos?|¿Cuáles son las tres preguntas del cazador/a de bulos?",
            "I ara: la notícia de la nevada, era un bulo? Com ho sabem? (Sense autor, del 2019, cap font oficial.)|Y ahora: la noticia de la nevada, ¿era un bulo? ¿Cómo lo sabemos? (Sin autor, de 2019, ninguna fuente oficial.)",
            "Si mai caieu en un engany, què fareu? (Explicar-ho a un adult, sense por.)|Si alguna vez caéis en un engaño, ¿qué haréis? (Contárselo a un adulto, sin miedo.)"],
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
          "Recorda-li la lupa de les tres preguntes i demana-li que miri a poc a poc la part de dalt (adreça, remitent) i la de baix (data, signatura).|Recuérdale la lupa de las tres preguntas y pídele que mire despacio la parte de arriba (dirección, remitente) y la de abajo (fecha, firma)."],
        ["Pensa que una web és fiable perquè té un aspecte professional (colors, logotip, fotos boniques).|Piensa que una web es fiable porque tiene un aspecto profesional (colores, logotipo, fotos bonitas).",
          "Qualsevol pot fer una web bonica. Que miri l'adreça, l'autor/a i la data, i que ho compari amb una altra font.|Cualquiera puede hacer una web bonita. Que mire la dirección, el autor/a y la fecha, y que lo compare con otra fuente."]
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
          ["Actitud davant l'engany|Actitud ante el engaño", "Diu que no tocaria res, no compartiria i ho explicaria a un adult, sense culpar ningú.|Dice que no tocaría nada, no compartiría y se lo contaría a un adulto, sin culpar a nadie.", "Sap que cal demanar ajuda, però dubta o creu que el renyaran.|Sabe que hay que pedir ayuda, pero duda o cree que le reñirán."],
          ["Fotos i context|Fotos y contexto", "Explica que una foto real pot enganyar si és d'un altre lloc o d'un altre dia, i en busca la data i l'origen.|Explica que una foto real puede engañar si es de otro lugar o de otro día, y busca su fecha y su origen.", "Creu que, si la foto és real, la notícia també ho és.|Cree que, si la foto es real, la noticia también lo es."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i acabar junts el «detector de bulos». Proposta per a la família: la propera vegada que us arribi una notícia sorprenent o un missatge amb premis, mireu-lo junts i feu-vos les tres preguntes (qui ho diu, de quan és, qui més ho diu). I recordeu-li que, si mai cau en un engany, ho pot explicar sense por: és la millor manera d'arreglar-ho.|En casa, con el móvil, podéis repetir la sesión y terminar juntos el «detector de bulos». Propuesta para la familia: la próxima vez que os llegue una noticia sorprendente o un mensaje con premios, miradlo juntos y haceos las tres preguntas (quién lo dice, de cuándo es, quién más lo dice). Y recordadle que, si alguna vez cae en un engaño, lo puede contar sin miedo: es la mejor manera de arreglarlo.",
      faq: [
        ["Com sé si una web és de fiar?|¿Cómo sé si una web es de fiar?", "Mira qui hi ha al darrere (un nom, una escola, un ajuntament, un diari), si té data i si altres fonts fiables diuen el mateix. Si dubtes, pregunta a un adult.|Mira quién hay detrás (un nombre, un colegio, un ayuntamiento, un periódico), si tiene fecha y si otras fuentes fiables dicen lo mismo. Si dudas, pregunta a un adulto."],
        ["Si m'ho envia un amic, és veritat?|Si me lo envía un amigo, ¿es verdad?", "El teu amic potser també s'ho ha cregut. Que t'ho enviï algú de confiança no vol dir que la notícia ho sigui: mira d'on ve.|Tu amigo quizá también se lo ha creído. Que te lo envíe alguien de confianza no quiere decir que la noticia lo sea: mira de dónde viene."],
        ["I si ja he tocat l'enllaç o hi he escrit alguna cosa?|¿Y si ya he tocado el enlace o he escrito algo?", "No és culpa teva: aquests missatges estan fets per enganyar a tothom. Explica-ho de seguida a un adult, que mirarà què cal fer (per exemple, canviar la contrasenya). Com més aviat ho expliquis, més fàcil és arreglar-ho.|No es culpa tuya: estos mensajes están hechos para engañar a todo el mundo. Cuéntaselo enseguida a un adulto, que mirará qué hay que hacer (por ejemplo, cambiar la contraseña). Cuanto antes lo cuentes, más fácil es arreglarlo."],
        ["Per què hi ha gent que fa bulos?|¿Por qué hay gente que hace bulos?", "Per tenir molts clics o seguidors, per guanyar diners, per fer broma o per confondre. I molts es difonen sense mala intenció, perquè algú s'ho ha cregut.|Para tener muchos clics o seguidores, para ganar dinero, por broma o para confundir. Y muchos se difunden sin mala intención, porque alguien se lo ha creído."],
        ["Les fotos també poden ser falses?|¿Las fotos también pueden ser falsas?", "Sí. Una foto real pot ser d'un altre lloc o d'un altre dia (fora de context), i també es poden retocar o crear amb programes. Per això mirem d'on surt i de quan és.|Sí. Una foto real puede ser de otro lugar o de otro día (fuera de contexto), y también se pueden retocar o crear con programas. Por eso miramos de dónde sale y de cuándo es."],
        ["Què vol dir «phishing»?|¿Qué quiere decir «phishing»?", "Ve de la paraula anglesa «fishing», que vol dir «pescar». És un missatge que fa d'esquer per pescar contrasenyes o dades.|Viene de la palabra inglesa «fishing», que quiere decir «pescar». Es un mensaje que hace de cebo para pescar contraseñas o datos."]
      ],
      tec: [
        ["A les activitats de pistes toquen el text i no passa res.|En las actividades de pistas tocan el texto y no pasa nada.", "Cal tocar just la part sospitosa. Si toquen fora, el missatge fa un petit moviment: que provin una altra part. Compten també l'adreça, el remitent i l'assumpte de dalt.|Hay que tocar justo la parte sospechosa. Si tocan fuera, el mensaje hace un pequeño movimiento: que prueben otra parte. Cuentan también la dirección, el remitente y el asunto de arriba."],
        ["Al classificador de tres calaixos, en una pantalla petita no es veuen tots.|En el clasificador de tres cajas, en una pantalla pequeña no se ven todas.", "En pantalles estretes els calaixos queden un sota l'altre: cal desplaçar-se avall. També es pot tocar la targeta i després el calaix.|En pantallas estrechas las cajas quedan una debajo de otra: hay que desplazarse hacia abajo. También se puede tocar la tarjeta y después la caja."],
        ["Un alumne/a vol obrir una web real per comprovar una notícia.|Un alumno/a quiere abrir una web real para comprobar una noticia.", "A classe no cal: tots els artefactes són inventats. Si voleu fer una comprovació real, feu-la tu al projector, amb una notícia triada i revisada abans.|En clase no hace falta: todos los artefactos son inventados. Si queréis hacer una comprobación real, hazla tú en el proyector, con una noticia elegida y revisada antes."],
        ["No hi ha targetes de titulars per a tots els grups.|No hay tarjetas de titulares para todos los grupos.", "Projecteu els titulars i feu la classificació tots junts, a mà alçada, amb els tres rètols a la pissarra.|Proyectad los titulares y haced la clasificación todos juntos, a mano alzada, con los tres rótulos en la pizarra."],
        ["A la conversa amb la Nora, un alumne/a tria sempre la resposta equivocada.|En la conversación con Nora, un alumno/a elige siempre la respuesta equivocada.", "Deixa-ho: les converses són per explorar i expliquen cada error. Al final, que t'expliqui quina resposta faria de veritat.|Déjalo: las conversaciones son para explorar y explican cada error. Al final, que te explique qué respuesta daría de verdad."]
      ],
      seg: [
        "Si un infant explica que ha caigut en un engany real (ha escrit una contrasenya, ha donat dades o ha comprat alguna cosa amb el mòbil de casa): agraeix-li que ho expliqui, digues-li que no és culpa seva i, en privat, demana-li que ho expliqui avui mateix a la família perquè canviïn les contrasenyes. Informa la tutoria o la família segons el protocol del centre.|Si un niño o niña cuenta que ha caído en un engaño real (ha escrito una contraseña, ha dado datos o ha comprado algo con el móvil de casa): agradécele que lo cuente, dile que no es culpa suya y, en privado, pídele que lo explique hoy mismo a la familia para que cambien las contraseñas. Informa a la tutoría o a la familia según el protocolo del centro.",
        "No projectis notícies reals que facin por (malalties, desastres, conflictes). Si en surten a la conversa, no entris en el contingut: torna a la tècnica (qui ho diu, de quan és) i deriva els dubtes a la família o la tutoria.|No proyectes noticias reales que den miedo (enfermedades, desastres, conflictos). Si salen en la conversación, no entres en el contenido: vuelve a la técnica (quién lo dice, de cuándo es) y deriva las dudas a la familia o la tutoría.",
        "Les cadenes que amenacen («si no la reenvies, et passarà…») poden espantar els petits: deixa clar que no passa res si no es reenvien.|Las cadenas que amenazan («si no la reenvías, te pasará…») pueden asustar a los pequeños: deja claro que no pasa nada si no se reenvían.",
        "Si algun infant explica que rep missatges d'un desconegut que li demana fotos, dades o secrets, segueix el protocol complet de la sessió d1-2: escolta amb calma, no és culpa seva, no prometis guardar el secret, apunta-ho i avisa el mateix dia la persona de referència del centre.|Si algún niño o niña cuenta que recibe mensajes de un desconocido que le pide fotos, datos o secretos, sigue el protocolo completo de la sesión d1-2: escucha con calma, no es culpa suya, no prometas guardar el secreto, apúntalo y avisa el mismo día a la persona de referencia del centro.",
        "Tots els mitjans, comptes i webs de les activitats són inventats. No es fan cerques reals amb l'alumnat sense haver-les revisat abans.|Todos los medios, cuentas y webs de las actividades son inventados. No se hacen búsquedas reales con el alumnado sin haberlas revisado antes."
      ],
      extra: [
        "Verificadors de l'escola: cada grup tria una notícia de la revista o del butlletí de l'escola (en paper) i en comprova l'autor/a, la data i una segona font.|Verificadores del colegio: cada grupo elige una noticia de la revista o del boletín del colegio (en papel) y comprueba su autor/a, la fecha y una segunda fuente.",
        "Matemàtiques: si cada persona reenvia el bulo a 3 persones, quantes el reben a la cinquena volta? (3, 9, 27, 81, 243.) I si s'aturés a la segona?|Matemáticas: si cada persona reenvía el bulo a 3 personas, ¿cuántas lo reciben en la quinta vuelta? (3, 9, 27, 81, 243.) ¿Y si se parara en la segunda?",
        "Per als grans: comparar dos titulars inventats sobre el mateix fet (un de neutre i un d'exagerat) i subratllar les paraules que busquen emocions fortes.|Para los mayores: comparar dos titulares inventados sobre el mismo hecho (uno neutro y uno exagerado) y subrayar las palabras que buscan emociones fuertes."
      ],
      trans: [
        "Unitat 1: el missatge que demanava el codi (d1-1) era phishing, i la pregunta «És veritat?» del semàfor (d1-3) és la base de la lupa.|Unidad 1: el mensaje que pedía el código (d1-1) era phishing, y la pregunta «¿Es verdad?» del semáforo (d1-3) es la base de la lupa.",
        "Sessió següent (d2-2, IA): una IA també pot dir coses falses amb molta seguretat, i el que diu es comprova igual.|Sesión siguiente (d2-2, IA): una IA también puede decir cosas falsas con mucha seguridad, y lo que dice se comprueba igual.",
        "Llengua (lectura crítica, distingir fets d'opinions) i matemàtiques (creixement multiplicatiu: 3, 9, 27…).|Lengua (lectura crítica, distinguir hechos de opiniones) y matemáticas (crecimiento multiplicativo: 3, 9, 27…)."
      ],
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
        { id: 's10', k: 'concepte', t: "Les regles dels detectius|Las reglas de los detectives", pic: 'img/chars/numi-ulleres.webp',
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
      intro: "Segona sessió. L'alumnat descobreix què és una intel·ligència artificial: un programa que aprèn de molts exemples a trobar patrons i fer prediccions, que no pensa ni sent com una persona i que es pot equivocar, fins i tot amb molta seguretat. Ho viu fent de IA amb paper (els Blips i Blops) i entrenant tres petites IA a l'app, on descobreix el biaix: si els exemples són poc variats, la IA aprèn malament i pot ser injusta. Acaba amb normes d'ús responsable: dades personals fora, comprovar el que diu i no fer passar per propi el que ha fet una IA. L'objectiu no és ni fer por ni entusiasmar, sinó entendre-ho per decidir amb criteri.|Segunda sesión. El alumnado descubre qué es una inteligencia artificial: un programa que aprende de muchos ejemplos a encontrar patrones y hacer predicciones, que no piensa ni siente como una persona y que se puede equivocar, incluso con mucha seguridad. Lo vive haciendo de IA con papel (los Blips y Blops) y entrenando tres pequeñas IA en la app, donde descubre el sesgo: si los ejemplos son poco variados, la IA aprende mal y puede ser injusta. Termina con normas de uso responsable: datos personales fuera, comprobar lo que dice y no hacer pasar por propio lo que ha hecho una IA. El objetivo no es ni dar miedo ni entusiasmar, sino entenderlo para decidir con criterio.",
      claus: [
        "Una IA rep molts exemples amb la seva etiqueta, hi busca patrons i, davant d'un cas nou, fa una predicció.|Una IA recibe muchos ejemplos con su etiqueta, busca patrones y, ante un caso nuevo, hace una predicción.",
        "Una IA no pensa ni sent com una persona: es pot equivocar i fins i tot inventar-se coses amb molta seguretat.|Una IA no piensa ni siente como una persona: se puede equivocar e incluso inventarse cosas con mucha seguridad.",
        "Si els exemples són poc variats o desequilibrats, la IA té biaix; es redueix amb exemples variats i revisats per persones.|Si los ejemplos son poco variados o desequilibrados, la IA tiene sesgo; se reduce con ejemplos variados y revisados por personas.",
        "Ús responsable: cap dada personal, comprovar el que diu, dir quan t'ha ajudat i fer-la servir amb permís i seguint les normes.|Uso responsable: ningún dato personal, comprobar lo que dice, decir cuándo te ha ayudado y usarla con permiso y siguiendo las normas."
      ],
      prev: [
        "Sessió d2-1: comprovar una informació en fonts fiables.|Sesión d2-1: comprobar una información en fuentes fiables.",
        "Sessió d1-2: quines són les dades personals i per què es guarden.|Sesión d1-2: cuáles son los datos personales y por qué se guardan.",
        "Classificar objectes per característiques (color, forma, mida), com a matemàtiques i ciències.|Clasificar objetos por características (color, forma, tamaño), como en matemáticas y ciencias."
      ],
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
          "Per grup de 3 o 4: un paquet de 13 targetes «Blips i Blops» en dos sobres (ronda 1 amb les proves A i B; ronda 2 amb la prova C)|Por grupo de 3 o 4: un paquete de 13 tarjetas «Blips y Blops» en dos sobres (ronda 1 con las pruebas A y B; ronda 2 con la prueba C)",
          "La fitxa «Pensem com una IA» (una per grup), un llapis per alumne/a i, si voleu, colors per dibuixar les criatures|La ficha «Pensemos como una IA» (una por grupo), un lápiz por alumno/a y, si queréis, colores para dibujar las criaturas"
        ],
        imprimir: ["Blips i Blops (imprimible 1): un paquet de 13 targetes per grup|Blips y Blops (imprimible 1): un paquete de 13 tarjetas por grupo", "Pensem com una IA (imprimible 2): una fitxa per grup|Pensemos como una IA (imprimible 2): una ficha por grupo"],
        prep: [
          "Imprimir i retallar les targetes; posar les de la ronda 1 (i les de prova) en un sobre i les de la ronda 2 en un altre.|Imprimir y recortar las tarjetas; poner las de la ronda 1 (y las de prueba) en un sobre y las de la ronda 2 en otro.",
          "Recordar la regla secreta: els Blips tenen 3 ulls i els Blops, 1. A la ronda 1 el color coincideix (tots els Blips són blaus) i enganya.|Recordar la regla secreta: los Blips tienen 3 ojos y los Blops, 1. En la ronda 1 el color coincide (todos los Blips son azules) y engaña.",
          "Mirar la demo de l'AjudaBot (diapositiva 9) i conèixer les normes del centre sobre l'ús d'eines d'IA.|Mirar la demo de AjudaBot (diapositiva 9) y conocer las normas del centro sobre el uso de herramientas de IA.",
          "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: una màquina pot aprendre?|Bienvenida: ¿una máquina puede aprender?", fase: 'inici',
          fa: "Pregunta on creuen que hi ha intel·ligència artificial a la seva vida i si una IA pensa, sent o s'equivoca. Apunta les respostes a la pissarra en dues columnes, «crec que sí» i «crec que no», sense corregir. Després recorda programes que segueixen ordres fixes (una calculadora, un despertador): fan sempre el mateix i no aprenen res.|Pregunta dónde creen que hay inteligencia artificial en su vida y si una IA piensa, siente o se equivoca. Apunta las respuestas en la pizarra en dos columnas, «creo que sí» y «creo que no», sin corregir. Después recuerda programas que siguen órdenes fijas (una calculadora, un despertador): hacen siempre lo mismo y no aprenden nada.",
          diu: ["On creieu que hi ha IA? Al mòbil? A la tele? A casa?|¿Dónde creéis que hay IA? ¿En el móvil? ¿En la tele? ¿En casa?",
            "Una IA pensa com nosaltres? Al final de la classe ho tornarem a votar.|¿Una IA piensa como nosotros? Al final de la clase lo volveremos a votar.",
            "Una calculadora sempre fa el mateix càlcul. Avui coneixerem programes que aprenen d'exemples.|Una calculadora siempre hace el mismo cálculo. Hoy conoceremos programas que aprenden de ejemplos."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "Què és una IA?|¿Qué es una IA?", fase: 'teoria',
          fa: "Amb l'animació, explica que una IA rep molts exemples amb la seva etiqueta, hi busca patrons i després fa una predicció davant d'un cas nou. Posa exemples quotidians sense marques: el mòbil que reconeix una cara, un traductor, les recomanacions de vídeos. Remarca la diferència amb una calculadora: a una IA ningú no li escriu una ordre per a cada cas.|Con la animación, explica que una IA recibe muchos ejemplos con su etiqueta, busca patrones y después hace una predicción ante un caso nuevo. Pon ejemplos cotidianos sin marcas: el móvil que reconoce una cara, un traductor, las recomendaciones de vídeos. Remarca la diferencia con una calculadora: a una IA nadie le escribe una orden para cada caso.",
          diu: ["Si us ensenyo deu fotos de gats i deu de gossos, aprendríeu a distingir-los? Doncs una IA fa una cosa semblant… però sense saber què és un gat.|Si os enseño diez fotos de gatos y diez de perros, ¿aprenderíais a distinguirlos? Pues una IA hace algo parecido… pero sin saber qué es un gato.",
            "Què és un patró? Una cosa que es repeteix. Quins patrons té un gat? (Orelles punxegudes, bigotis, mida…)|¿Qué es un patrón? Algo que se repite. ¿Qué patrones tiene un gato? (Orejas puntiagudas, bigotes, tamaño…)",
            "On heu vist una IA aquesta setmana? (El mòbil que reconeix una cara, un traductor, les recomanacions de vídeos…)|¿Dónde habéis visto una IA esta semana? (El móvil que reconoce una cara, un traductor, las recomendaciones de vídeos…)"],
          slides: ['s4', 's5'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Soc una IA: Blips i Blops|Soy una IA: Blips y Blops", fase: 'desconnectat',
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
            "Si l'AjudaBot et demana el nom i on vius, què fas? (No ho escric i ho explico a un adult.)|Si AjudaBot te pide el nombre y dónde vives, ¿qué haces? (No lo escribo y se lo cuento a un adulto.)",
            "Al treball dels volcans: qui ha fet la feina si la IA l'ha escrita tota? Què és l'honest?|En el trabajo de los volcanes: ¿quién ha hecho el trabajo si la IA lo ha escrito todo? ¿Qué es lo honesto?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la teva IA|Crea: tu IA", fase: 'crea',
          fa: "Cada alumne/a entrena la seva IA dels animals que volen o neden i mira què fa amb el pingüí i el ratpenat. Després, en parelles, s'expliquen per què la IA ha encertat o fallat.|Cada alumno/a entrena su IA de los animales que vuelan o nadan y mira qué hace con el pingüino y el murciélago. Después, por parejas, se explican por qué la IA ha acertado o fallado.",
          diu: ["El pingüí té ales: per què la IA no diu que vola?|El pingüino tiene alas: ¿por qué la IA no dice que vuela?",
            "Explica al company/a com ha après la teva IA.|Explica al compañero/a cómo ha aprendido tu IA.",
            "I el ratpenat? Vola però no és un ocell: la IA no sap què és, només compara característiques.|¿Y el murciélago? Vuela pero no es un ave: la IA no sabe qué es, solo compara características."],
          slides: ['s14'], app: "Pas «Crea»: la teva IA (vola o neda).|Paso «Crea»: tu IA (vuela o nada).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Torna a la pissarra de l'inici i torneu a votar: una IA pensa? sent? s'equivoca? Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Vuelve a la pizarra del principio y volved a votar: ¿una IA piensa? ¿siente? ¿se equivoca? Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
          diu: ["Què és una IA, en una frase?|¿Qué es una IA, en una frase?",
            "Una cosa que no faríeu mai amb una IA? (Posar-hi dades personals, entregar un treball seu com si fos nostre…)|¿Una cosa que no haríais nunca con una IA? (Poner datos personales, entregar un trabajo suyo como si fuera nuestro…)",
            "Mireu la pissarra: una IA pensa? Sent? S'equivoca? Ha canviat el vostre vot?|Mirad la pizarra: ¿una IA piensa? ¿Siente? ¿Se equivoca? ¿Ha cambiado vuestro voto?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Creu que la IA «pensa», «sap» o «sent» com una persona.|Cree que la IA «piensa», «sabe» o «siente» como una persona.",
          "Torna als Blips: ells han fet de IA sense saber què és un Blip, només comparant exemples. Pregunta: la IA sap què és un gat o compara amb el que ha vist?|Vuelve a los Blips: ellos han hecho de IA sin saber qué es un Blip, solo comparando ejemplos. Pregunta: ¿la IA sabe qué es un gato o compara con lo que ha visto?"],
        ["Pensa que si la IA falla és perquè ell o ella ho ha fet malament.|Piensa que si la IA falla es porque él o ella lo ha hecho mal.",
          "Separa culpa i causa: els errors venen dels exemples. Mireu junts quins exemples tenia la IA i què hi faltava.|Separa culpa y causa: los errores vienen de los ejemplos. Mirad juntos qué ejemplos tenía la IA y qué faltaba."],
        ["Creu que el que diu un xat d'IA és sempre cert perquè sona segur.|Cree que lo que dice un chat de IA es siempre cierto porque suena seguro.",
          "Recorda l'AjudaBot de les aranyes. Pregunta-li com ho comprovaria i que busqui la dada en un llibre o una web fiable.|Recuerda a AjudaBot de las arañas. Pregúntale cómo lo comprobaría y que busque el dato en un libro o una web fiable."],
        ["Etiqueta a correcuita i després no entén per què la IA s'equivoca.|Etiqueta a toda prisa y después no entiende por qué la IA se equivoca.",
          "Anima'l a tornar a ensenyar-li amb calma i a comparar els resultats: és un experiment, no un examen.|Anímale a volver a enseñarle con calma y a comparar los resultados: es un experimento, no un examen."],
        ["No veu cap problema a escriure el seu nom, l'escola o a pujar fotos en una eina d'IA.|No ve ningún problema en escribir su nombre, la escuela o en subir fotos a una herramienta de IA.",
          "Relaciona-ho amb la unitat 1: qui pot veure les dades que posem a internet? No sabem on es guarden ni qui les fa servir.|Relaciónalo con la unidad 1: ¿quién puede ver los datos que ponemos en internet? No sabemos dónde se guardan ni quién los usa."],
        ["Diu que la IA «menteix» o que «vol enganyar».|Dice que la IA «miente» o que «quiere engañar».",
          "Explica que una IA no té intencions: tria paraules que solen anar juntes. Per això diem que s'equivoca, no que menteix, i per això cal comprovar el que diu.|Explica que una IA no tiene intenciones: elige palabras que suelen ir juntas. Por eso decimos que se equivoca, no que miente, y por eso hay que comprobar lo que dice."]
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
          ["Ús responsable|Uso responsable", "Diu les normes (dades, comprovar, honestedat) i les aplica als exemples de l'app.|Dice las normas (datos, comprobar, honestidad) y las aplica a los ejemplos de la app.", "En coneix una o dues, sobretot la de no posar-hi dades personals.|Conoce una o dos, sobre todo la de no poner datos personales."],
          ["Experimentar i explicar|Experimentar y explicar", "Entrena la IA, prova què passa si canvia els exemples i explica el resultat amb les seves paraules.|Entrena la IA, prueba qué pasa si cambia los ejemplos y explica el resultado con sus palabras.", "Entrena la IA, però no relaciona el resultat amb els exemples que li ha donat.|Entrena la IA, pero no relaciona el resultado con los ejemplos que le ha dado."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i entrenar junts la IA dels animals que volen o neden. Proposta per a la família: busqueu on hi ha IA a casa (el mòbil, el televisor, un assistent de veu…) i parleu de les vostres normes per fer-la servir: amb permís, sense dades personals, comprovant el que diu i dient sempre quan us ha ajudat.|En casa, podéis repetir la sesión y entrenar juntos la IA de los animales que vuelan o nadan. Propuesta para la familia: buscad dónde hay IA en casa (el móvil, el televisor, un asistente de voz…) y hablad de vuestras normas para usarla: con permiso, sin datos personales, comprobando lo que dice y diciendo siempre cuándo os ha ayudado.",
      faq: [
        ["La IA és com un cervell?|¿La IA es como un cerebro?", "No. S'inspira una mica en la idea d'aprendre, però és un programa que fa càlculs amb molts exemples. No té sentiments ni opinions, i no sap si el que diu és cert.|No. Se inspira un poco en la idea de aprender, pero es un programa que hace cálculos con muchos ejemplos. No tiene sentimientos ni opiniones, y no sabe si lo que dice es cierto."],
        ["Si s'equivoca, per què la fem servir?|Si se equivoca, ¿por qué la usamos?", "Perquè en moltes coses ajuda molt: traduir, reconèixer imatges, donar idees. Però com que es pot equivocar, qui la fa servir ha de comprovar el resultat.|Porque en muchas cosas ayuda mucho: traducir, reconocer imágenes, dar ideas. Pero como se puede equivocar, quien la usa tiene que comprobar el resultado."],
        ["El que escric a una IA es guarda?|¿Lo que escribo en una IA se guarda?", "Moltes eines guarden el que s'hi escriu i ho poden fer servir. Per això no hi posem el nom complet, l'adreça, l'escola ni fotos de persones, i la fem servir amb un adult.|Muchas herramientas guardan lo que se escribe y lo pueden usar. Por eso no ponemos el nombre completo, la dirección, el colegio ni fotos de personas, y la usamos con un adulto."],
        ["Puc fer servir una IA per als deures?|¿Puedo usar una IA para los deberes?", "Depèn de les normes de l'escola i de casa. Per tenir idees o repassar, potser sí; però la feina la fas tu i, si t'ha ajudat, ho dius.|Depende de las normas del colegio y de casa. Para tener ideas o repasar, quizá sí; pero el trabajo lo haces tú y, si te ha ayudado, lo dices."],
        ["Les IA tenen sentiments?|¿Las IA tienen sentimientos?", "No. De vegades ho sembla perquè escriuen com nosaltres, però no senten res ni tenen opinions de veritat.|No. A veces lo parece porque escriben como nosotros, pero no sienten nada ni tienen opiniones de verdad."],
        ["Per què la IA s'ha equivocat amb el gos del sofà si jo ho he fet bé?|¿Por qué la IA se ha equivocado con el perro del sofá si yo lo he hecho bien?", "Perquè als exemples tots els gats eren a casa i tots els gossos al parc: la IA s'ha fixat en el fons. No és culpa teva: és dels exemples. Això és un biaix.|Porque en los ejemplos todos los gatos estaban en casa y todos los perros en el parque: la IA se ha fijado en el fondo. No es culpa tuya: es de los ejemplos. Eso es un sesgo."]
      ],
      tec: [
        ["No surt actiu el botó «Entrena la IA».|No sale activo el botón «Entrena la IA».", "Cal etiquetar tots els exemples. Que mirin si en queda algun sense cap botó triat.|Hay que etiquetar todos los ejemplos. Que miren si queda alguno sin ningún botón elegido."],
        ["A l'entrenament dels gats i gossos, la IA no s'equivoca.|En el entrenamiento de gatos y perros, la IA no se equivoca.", "Segurament s'han etiquetat alguns exemples d'una altra manera. Que toquin «Torna a ensenyar-li», etiquetin bé cada animal i mirin el gos del sofà i el gat del parc.|Seguramente se han etiquetado algunos ejemplos de otra manera. Que toquen «Vuelve a enseñarle», etiqueten bien cada animal y miren el perro del sofá y el gato del parque."],
        ["Algú vol provar una IA real a classe.|Alguien quiere probar una IA real en clase.", "Només si el centre ho permet, i que ho faci el docent al projector, sense cap dada personal i comprovant les respostes. Moltes eines demanen una edat mínima.|Solo si el centro lo permite, y que lo haga el docente en el proyector, sin ningún dato personal y comprobando las respuestas. Muchas herramientas piden una edad mínima."],
        ["No hi ha sobres per als Blips i Blops.|No hay sobres para los Blips y Blops.", "Feu dues piles de targetes cap per avall (ronda 1 i ronda 2) i gireu la segona quan toqui.|Haced dos montones de tarjetas boca abajo (ronda 1 y ronda 2) y girad el segundo cuando toque."],
        ["Els més petits no entenen la paraula «biaix».|Los más pequeños no entienden la palabra «sesgo».", "Digues-ho així: «la IA s'ha fixat en una cosa equivocada perquè els exemples s'assemblaven massa».|Dilo así: «la IA se ha fijado en algo equivocado porque los ejemplos se parecían demasiado»."]
      ],
      seg: [
        "No facis servir eines d'IA reals amb l'alumnat sense el permís del centre i de les famílies: moltes demanen una edat mínima i el consentiment de la família. A l'app, l'AjudaBot és una IA de mentida.|No uses herramientas de IA reales con el alumnado sin el permiso del centro y de las familias: muchas piden una edad mínima y el consentimiento de la familia. En la app, AjudaBot es una IA de mentira.",
        "Dades: ni a l'app ni enlloc s'escriuen dades personals ni es pugen fotos de persones a una IA.|Datos: ni en la app ni en ningún sitio se escriben datos personales ni se suben fotos de personas a una IA.",
        "Si surt el tema de fotos, àudios o vídeos falsos d'una persona fets amb IA (per exemple, per riure-se'n), explica que fer-los i compartir-los fa molt de mal i pot ser molt greu. Si un infant explica un cas real que l'afecta, segueix el protocol del centre: escolta, digues-li que no és culpa seva, no li demanis que t'ho ensenyi, no prometis guardar el secret i avisa el mateix dia la persona de referència.|Si sale el tema de fotos, audios o vídeos falsos de una persona hechos con IA (por ejemplo, para reírse de ella), explica que hacerlos y compartirlos hace mucho daño y puede ser muy grave. Si un niño o niña cuenta un caso real que le afecta, sigue el protocolo del centro: escucha, dile que no es culpa suya, no le pidas que te lo enseñe, no prometas guardar el secreto y avisa el mismo día a la persona de referencia.",
        "Evita l'alarmisme («les màquines ens dominaran») i també l'entusiasme sense crítica: la IA és una eina que fan i revisen persones.|Evita el alarmismo («las máquinas nos dominarán») y también el entusiasmo sin crítica: la IA es una herramienta que hacen y revisan personas.",
        "Error no és culpa: si la IA d'un alumne/a falla, és pels exemples. Que ningú no se senti malament per «haver-la entrenat malament».|Error no es culpa: si la IA de un alumno/a falla, es por los ejemplos. Que nadie se sienta mal por «haberla entrenado mal»."
      ],
      extra: [
        "Ciències: classificar animals per característiques (té ales, té aletes, viu a l'aigua…) i buscar els casos que confonen (el pingüí, el ratpenat, el dofí, l'ànec).|Ciencias: clasificar animales por características (tiene alas, tiene aletas, vive en el agua…) y buscar los casos que confunden (el pingüino, el murciélago, el delfín, el pato).",
        "Per als grans: debat «Si una IA s'equivoca, qui n'és responsable: la IA, qui l'ha feta o qui la fa servir?». Que argumentin cada postura.|Para los mayores: debate «Si una IA se equivoca, ¿quién es responsable: la IA, quien la ha hecho o quien la usa?». Que argumenten cada postura.",
        "Completar la darrera pregunta de la fitxa «Pensem com una IA»: dissenyar una IA que ajudaria l'escola, amb els exemples que caldrien i els errors que podria fer.|Completar la última pregunta de la ficha «Pensemos como una IA»: diseñar una IA que ayudaría al colegio, con los ejemplos que harían falta y los errores que podría cometer."
      ],
      trans: [
        "Sessió anterior (d2-1): el que diu una IA també es comprova en fonts fiables, igual que una notícia.|Sesión anterior (d2-1): lo que dice una IA también se comprueba en fuentes fiables, igual que una noticia.",
        "Unitat 1 (d1-2): dades personals fora, també en una eina d'IA. I a la campanya (d2-4), si una IA us ajuda, es diu.|Unidad 1 (d1-2): datos personales fuera, también en una herramienta de IA. Y en la campaña (d2-4), si una IA os ayuda, se dice.",
        "Ciències i matemàtiques: classificar per atributs, fer una hipòtesi i comprovar-la amb proves (pensament científic).|Ciencias y matemáticas: clasificar por atributos, hacer una hipótesis y comprobarla con pruebas (pensamiento científico)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Què és la intel·ligència artificial?|¿Qué es la inteligencia artificial?", x: "Avui entrenarem una IA i descobrirem què sap fer… i què no.|Hoy entrenaremos una IA y descubriremos qué sabe hacer… y qué no.",
          nota: "Presenta l'objectiu: entendre la IA per dins per fer-la servir amb cap.|Presenta el objetivo: entender la IA por dentro para usarla con cabeza." },
        { id: 's2', k: 'pregunta', t: "Una màquina pot aprendre?|¿Una máquina puede aprender?", punts: ["On creieu que hi ha IA a la vostra vida?|¿Dónde creéis que hay IA en vuestra vida?", "Una IA pensa? Sent? S'equivoca?|¿Una IA piensa? ¿Siente? ¿Se equivoca?"],
          nota: "Apunta les respostes a la pissarra en dues columnes. Hi tornareu al final de la classe.|Apunta las respuestas en la pizarra en dos columnas. Volveréis a ellas al final de la clase." },
        { id: 's3', k: 'pregunta', t: "Programes que segueixen ordres|Programas que siguen órdenes", punts: ["Una calculadora o un despertador fan sempre el mateix.|Una calculadora o un despertador hacen siempre lo mismo.", "Segueixen les ordres que algú ha escrit, pas a pas.|Siguen las órdenes que alguien ha escrito, paso a paso.", "Avui: programes que aprenen d'exemples.|Hoy: programas que aprenden de ejemplos."],
          nota: "Pregunta quines altres màquines fan sempre el mateix (un semàfor, una rentadora). Si el grup ha fet un curs de programació, recordeu que el robot seguia els blocs un a un i no aprenia res.|Pregunta qué otras máquinas hacen siempre lo mismo (un semáforo, una lavadora). Si el grupo ha hecho un curso de programación, recordad que el robot seguía los bloques uno a uno y no aprendía nada." },
        { id: 's4', k: 'anim', t: "Una IA aprèn d'exemples|Una IA aprende de ejemplos", anim: 'd2ia', x: "Exemples amb la resposta → patrons → una predicció davant d'un cas nou.|Ejemplos con la respuesta → patrones → una predicción ante un caso nuevo.",
          nota: "Remarca la paraula «predicció»: la IA no sap segur què és la foto nova, endevina segons el que ha vist.|Remarca la palabra «predicción»: la IA no sabe seguro qué es la foto nueva, adivina según lo que ha visto." },
        { id: 's5', k: 'concepte', t: "Etiquetes i patrons|Etiquetas y patrones", pic: 'img/ment/igu.webp',
          punts: ["Li donem molts exemples amb l'etiqueta: «gat», «gos».|Le damos muchos ejemplos con la etiqueta: «gato», «perro».", "Busca patrons: coses que es repeteixen.|Busca patrones: cosas que se repiten.", "Davant d'un exemple nou, fa una predicció.|Ante un ejemplo nuevo, hace una predicción."],
          nota: "Demana patrons que distingeixin un gat d'un gos: orelles, nas, mida… Així entendran què «mira» una IA.|Pide patrones que distingan un gato de un perro: orejas, nariz, tamaño… Así entenderán qué «mira» una IA." },
        { id: 's6', k: 'activitat', t: "Soc una IA: Blips i Blops|Soy una IA: Blips y Blops", timer: 12,
          punts: ["Ronda 1: mireu els exemples. Què té un Blip? I un Blop?|Ronda 1: mirad los ejemplos. ¿Qué tiene un Blip? ¿Y un Blop?", "Escriviu la vostra regla.|Escribid vuestra regla.", "Classifiqueu les targetes de prova: Blip o Blop?|Clasificad las tarjetas de prueba: ¿Blip o Blop?", "Ronda 2: arriben exemples nous. Canvia la vostra regla?|Ronda 2: llegan ejemplos nuevos. ¿Cambia vuestra regla?"],
          nota: "Regla secreta: Blips = 3 ulls; Blops = 1 ull. A la ronda 1 tots els Blips són blaus i tots els Blops verds: el color enganya. No la revelis fins al final.|Regla secreta: Blips = 3 ojos; Blops = 1 ojo. En la ronda 1 todos los Blips son azules y todos los Blops verdes: el color engaña. No la reveles hasta el final." },
        { id: 's7', k: 'pregunta', t: "Què ha passat?|¿Qué ha pasado?",
          punts: ["A la ronda 1, quina regla heu fet servir: el color o els ulls?|En la ronda 1, ¿qué regla habéis usado: el color o los ojos?", "Per què dubtàveu amb les targetes de prova?|¿Por qué dudabais con las tarjetas de prueba?", "Què ha canviat amb exemples variats?|¿Qué ha cambiado con ejemplos variados?"],
          nota: "Conclusió per escriure a la pissarra: una IA aprèn el que hi ha als exemples, també els seus defectes.|Conclusión para escribir en la pizarra: una IA aprende lo que hay en los ejemplos, también sus defectos." },
        { id: 's8', k: 'anim', t: "Biaix: quan els exemples enganyen|Sesgo: cuando los ejemplos engañan", anim: 'd2biaix', x: "Tots els gats en un sofà… i la IA aprèn «sofà = gat».|Todos los gatos en un sofá… y la IA aprende «sofá = gato».",
          nota: "Per als grans: amb persones, si gairebé tots els exemples són d'un sol tipus de gent, la IA pot funcionar pitjor amb els altres. Per això cal revisar els exemples.|Para los mayores: con personas, si casi todos los ejemplos son de un solo tipo de gente, la IA puede funcionar peor con los demás. Por eso hay que revisar los ejemplos." },
        { id: 's9', k: 'media', t: "La IA també s'equivoca|La IA también se equivoca", x: "Respon molt segura… però les aranyes tenen 8 potes!|Responde muy segura… ¡pero las arañas tienen 8 patas!", media: SPIDER,
          nota: "Pregunta com ho podrien comprovar. Remarca que la IA no menteix a posta: no sap si el que diu és cert.|Pregunta cómo lo podrían comprobar. Remarca que la IA no miente a propósito: no sabe si lo que dice es cierto." },
        { id: 's10', k: 'concepte', t: "Què NO és una IA|Qué NO es una IA", anim: 'd2noes',
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
      intro: "Tercera sessió, la més sensible del curs. L'alumnat aprèn que darrere de cada pantalla hi ha una persona, distingeix el ciberassetjament (fer mal a algú a la xarxa de manera repetida) d'una discussió d'un dia i descobreix què pot fer un espectador/a actiu/va: donar suport, no sumar-s'hi i explicar-ho a un adult. També aprèn els passos si alguna cosa li fa mal: no respondre amb més mal, guardar una prova, bloquejar i denunciar, i demanar ajuda. El missatge central és que mai no és culpa de qui ho pateix i que explicar-ho no és xivar-se. La classe té escenes d'espectadors actius en grups, converses amb decisions a l'app i un banc de missatges amables per a tota la classe.|Tercera sesión, la más sensible del curso. El alumnado aprende que detrás de cada pantalla hay una persona, distingue el ciberacoso (hacer daño a alguien en la red de manera repetida) de una discusión de un día y descubre qué puede hacer un espectador/a activo/a: dar apoyo, no sumarse y contárselo a un adulto. También aprende los pasos si algo le hace daño: no responder con más daño, guardar una prueba, bloquear y denunciar, y pedir ayuda. El mensaje central es que nunca es culpa de quien lo sufre y que contarlo no es chivarse. La clase tiene escenas de espectadores activos en grupos, conversaciones con decisiones en la app y un banco de mensajes amables para toda la clase.",
      claus: [
        "Darrere de cada pantalla hi ha una persona: abans d'enviar, pregunta't si ho diries cara a cara.|Detrás de cada pantalla hay una persona: antes de enviar, pregúntate si lo dirías cara a cara.",
        "El ciberassetjament és fer mal a algú a la xarxa una vegada i una altra; mai no és culpa de qui el pateix.|El ciberacoso es hacer daño a alguien en la red una y otra vez; nunca es culpa de quien lo sufre.",
        "Un espectador/a actiu/va dona suport, no s'hi suma (ni amb un emoji) i ho explica a un adult. No cal enfrontar-s'hi.|Un espectador/a activo/a da apoyo, no se suma (ni con un emoji) y se lo cuenta a un adulto. No hace falta enfrentarse.",
        "Si alguna cosa fa mal: no responguis amb més mal, guarda una prova, bloqueja i denuncia, i explica-ho a un adult de confiança. Explicar-ho no és xivar-se.|Si algo hace daño: no respondas con más daño, guarda una prueba, bloquea y denuncia, y cuéntaselo a un adulto de confianza. Contarlo no es chivarse."
      ],
      prev: [
        "Sessió d1-3: demanar permís abans de publicar res d'algú i el semàfor (és amable?).|Sesión d1-3: pedir permiso antes de publicar nada de alguien y el semáforo (¿es amable?).",
        "Sessió d1-2: bloquejar i els adults de confiança de «El meu escut».|Sesión d1-2: bloquear y los adultos de confianza de «Mi escudo».",
        "Saber posar nom a algunes emocions (alegria, tristesa, ràbia, vergonya), com a tutoria.|Saber poner nombre a algunas emociones (alegría, tristeza, rabia, vergüenza), como en tutoría."
      ],
      obj: [
        "L'alumne/a explica que darrere de cada pantalla hi ha una persona i escriu missatges amables i concrets.|El alumno/a explica que detrás de cada pantalla hay una persona y escribe mensajes amables y concretos.",
        "L'alumne/a distingeix el ciberassetjament (fer mal de manera repetida) d'una discussió puntual i sap que mai no és culpa de qui el pateix.|El alumno/a distingue el ciberacoso (hacer daño de manera repetida) de una discusión puntual y sabe que nunca es culpa de quien lo sufre.",
        "L'alumne/a proposa accions d'espectador/a actiu/va: donar suport, no sumar-s'hi i explicar-ho a un adult.|El alumno/a propone acciones de espectador/a activo/a: dar apoyo, no sumarse y contárselo a un adulto.",
        "L'alumne/a coneix els passos si alguna cosa li fa mal: no respondre amb més mal, guardar una prova, bloquejar i demanar ajuda a un adult de confiança.|El alumno/a conoce los pasos si algo le hace daño: no responder con más daño, guardar una prueba, bloquear y pedir ayuda a un adulto de confianza."
      ],
      comp: [
        "Competència digital (CD3): comunicar-se i col·laborar a la xarxa amb respecte|Competencia digital (CD3): comunicarse y colaborar en la red con respeto",
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
          "Per grup de 3 o 4: una targeta de situació (n'hi ha 8) i, per parella, la fitxa «Reescriu el missatge»|Por grupo de 3 o 4: una tarjeta de situación (hay 8) y, por pareja, la ficha «Reescribe el mensaje»",
          "Un paper petit per alumne/a, una capsa per al banc de missatges amables i una altra amb un paper amb el nom de cada alumne/a|Un papel pequeño por alumno/a, una caja para el banco de mensajes amables y otra con un papel con el nombre de cada alumno/a"
        ],
        imprimir: ["Situacions (imprimible 1): un paquet de 8 targetes, una per grup|Situaciones (imprimible 1): un paquete de 8 tarjetas, una por grupo", "Reescriu el missatge (imprimible 2): una fitxa per parella|Reescribe el mensaje (imprimible 2): una ficha por pareja"],
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
            "Explicar-ho no és xivar-se: és cuidar-te o cuidar algú.|Contarlo no es chivarse: es cuidarte o cuidar a alguien.",
            "Per què creieu que és important guardar una captura? (Perquè l'adult entengui què ha passat.)|¿Por qué creéis que es importante guardar una captura? (Para que el adulto entienda qué ha pasado.)"],
          slides: ['s9', 's10'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Fixa't en qui dubta a l'activitat «Fa sentir bé o pot fer mal?» i en qui tria «segur que alguna cosa has fet» a la pregunta de l'Àlex: parla-hi amb calma.|Cada alumno/a avanza a su ritmo hasta la pausa activa. Fíjate en quién duda en la actividad «¿Hace sentir bien o puede hacer daño?» y en quién elige «seguro que algo has hecho» en la pregunta de Álex: habla con él o ella con calma.",
          diu: ["Llegeix-lo en veu baixa posant-te al lloc de qui el rep.|Léelo en voz baja poniéndote en el lugar de quien lo recibe.",
            "Al xat de la classe, quin és el missatge que ajuda? (El de la Nora.)|En el chat de la clase, ¿cuál es el mensaje que ayuda? (El de Nora.)",
            "Un emoji de riure també diu alguna cosa: què li diu a l'Àlex?|Un emoji de risa también dice algo: ¿qué le dice a Álex?"],
          slides: ['s11'], app: "De «Recorda» fins a «Investiga»: la pregunta de la IA, la missió, les targetes de «Descobreix», classificar missatges, la pregunta del ciberassetjament, els missatges del xat de la classe i què li diries a l'Àlex.|De «Recuerda» hasta «Investiga»: la pregunta de la IA, la misión, las tarjetas de «Descubre», clasificar mensajes, la pregunta del ciberacoso, los mensajes del chat de la clase y qué le dirías a Álex.", org: "Individual|Individual" },
        { min: 8, t: "Reptes: actua!|Retos: ¡actúa!", fase: 'ordinador',
          fa: "Feu junts la respiració del globus de la pausa activa. Després, els tres reptes: la conversa privada amb l'Àlex, ordenar els passos i el missatge del desconegut a FotoNuvi. Anima'ls a provar també respostes equivocades per veure què passa: les converses expliquen per què i deixen rectificar.|Haced juntos la respiración del globo de la pausa activa. Después, los tres retos: la conversación privada con Álex, ordenar los pasos y el mensaje del desconocido en FotoNuvi. Anímales a probar también respuestas equivocadas para ver qué pasa: las conversaciones explican por qué y dejan rectificar.",
          diu: ["Respirar abans de respondre també és una eina.|Respirar antes de responder también es una herramienta.",
            "Què li ha dit l'adult de casa al final? Per què és important? (Que ha fet bé d'explicar-ho i que no és culpa seva.)|¿Qué le ha dicho el adulto de casa al final? ¿Por qué es importante? (Que ha hecho bien en contarlo y que no es culpa suya.)",
            "A l'Àlex, què l'ha ajudat més de la teva resposta?|A Álex, ¿qué le ha ayudado más de tu respuesta?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el banc de missatges amables|Crea: el banco de mensajes amables", fase: 'crea',
          fa: "Cada alumne/a treu un nom a l'atzar i escriu a aquella persona un missatge amable i concret, passant-lo pel semàfor. Els missatges van a la capsa; revisa'ls abans de repartir-los al final de la classe o a la propera sessió. Així tothom en rep un. A l'app, el pas «Crea» proposa fer-ne més a casa.|Cada alumno/a saca un nombre al azar y escribe a esa persona un mensaje amable y concreto, pasándolo por el semáforo. Los mensajes van a la caja; revísalos antes de repartirlos al final de la clase o en la próxima sesión. Así todo el mundo recibe uno. En la app, el paso «Crea» propone hacer más en casa.",
          diu: ["No només «ets guai»: què t'agrada d'aquesta persona?|No solo «eres guay»: ¿qué te gusta de esta persona?",
            "Si no la coneixes gaire, pensa en una cosa que li hagis vist fer bé.|Si no la conoces mucho, piensa en algo que le hayas visto hacer bien.",
            "Passa'l pel semàfor: és cert? És amable? Li agradarà llegir-lo?|Pásalo por el semáforo: ¿es cierto? ¿Es amable? ¿Le gustará leerlo?"],
          slides: ['s14'], app: "Pas «Crea»: el banc de missatges amables (es pot tocar «Ara no» i fer-lo a casa).|Paso «Crea»: el banco de mensajes amables (se puede tocar «Ahora no» y hacerlo en casa).", org: "Individual|Individual" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa el resum, deixa que facin les preguntes finals de l'app i fes el tiquet a la porta. Recorda'ls que la teva porta és oberta si mai necessiten parlar d'alguna cosa.|Repasa el resumen, deja que hagan las preguntas finales de la app y haz el ticket en la puerta. Recuérdales que tu puerta está abierta si alguna vez necesitan hablar de algo.",
          diu: ["Què fa un espectador/a actiu/va?|¿Qué hace un espectador/a activo/a?",
            "Si alguna cosa a la xarxa us fa mal, a qui ho explicaríeu?|Si algo en la red os hace daño, ¿a quién se lo contaríais?",
            "La meva porta és oberta: si mai voleu parlar d'alguna cosa, m'ho podeu dir en acabar la classe.|Mi puerta está abierta: si alguna vez queréis hablar de algo, me lo podéis decir al terminar la clase."],
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
          "Atura l'escena amb calma, agraeix la confiança, no en parlis davant de tothom i segueix el protocol del centre (vegeu «Seguretat i benestar»).|Para la escena con calma, agradece la confianza, no hables de ello delante de todos y sigue el protocolo del centro (ver «Seguridad y bienestar»)."],
        ["Creu que, com que no ha escrit res dolent, no ha fet res (però hi ha posat 😂).|Cree que, como no ha escrito nada malo, no ha hecho nada (pero ha puesto 😂).",
          "Torneu al xat de la classe: riure o posar un «m'agrada» també és sumar-s'hi. Què podria fer en lloc d'això?|Volved al chat de la clase: reírse o poner un «me gusta» también es sumarse. ¿Qué podría hacer en lugar de eso?"]
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
          ["Demanar ajuda|Pedir ayuda", "Sap els passos (no respondre, prova, bloquejar, adult) i diu que no és culpa de qui ho pateix.|Sabe los pasos (no responder, prueba, bloquear, adulto) y dice que no es culpa de quien lo sufre.", "Sap que ho ha de dir a un adult, però no coneix els altres passos.|Sabe que tiene que decírselo a un adulto, pero no conoce los otros pasos."],
          ["Gestió de les emocions|Gestión de las emociones", "Proposa maneres d'aturar-se abans de respondre quan està enfadat/da (respirar, el semàfor, esperar).|Propone maneras de pararse antes de responder cuando está enfadado/a (respirar, el semáforo, esperar).", "Reconeix l'emoció, però proposa respondre de seguida.|Reconoce la emoción, pero propone responder enseguida."]
        ]
      },
      casa: "A casa, podeu repetir la sessió i fer junts el «banc de missatges amables» amb la família. Proposta: parleu de qui són els adults de confiança de l'infant (dins i fora de casa) i deixeu clar que pot explicar qualsevol cosa que li passi a la xarxa sense por de perdre el mòbil ni de ser renyat. Si mai ho necessiteu, el telèfon d'ajuda a la infància i l'adolescència és el 116 111 (gratuït i confidencial).|En casa, podéis repetir la sesión y hacer juntos el «banco de mensajes amables» con la familia. Propuesta: hablad de quiénes son los adultos de confianza del niño o la niña (dentro y fuera de casa) y dejad claro que puede contar cualquier cosa que le pase en la red sin miedo a perder el móvil ni a que le riñan. Si alguna vez lo necesitáis, el teléfono de ayuda a la infancia y la adolescencia es el 116 111 (gratuito y confidencial).",
      faq: [
        ["Si només ho he vist i no he fet res, també és culpa meva?|Si solo lo he visto y no he hecho nada, ¿también es culpa mía?", "No és culpa teva, però pots ajudar molt: donar suport a la persona, no sumar-t'hi (ni amb un emoji) i explicar-ho a un adult. Mai no és tard per fer-ho.|No es culpa tuya, pero puedes ayudar mucho: dar apoyo a la persona, no sumarte (ni con un emoji) y contárselo a un adulto. Nunca es tarde para hacerlo."],
        ["Si ho explico, se n'assabentaran i serà pitjor?|Si lo cuento, ¿se enterarán y será peor?", "Els adults de confiança poden ajudar amb discreció, sense dir qui ho ha explicat. Callar-ho sol fer que duri més. Explicar-ho és cuidar.|Los adultos de confianza pueden ayudar con discreción, sin decir quién lo ha contado. Callarlo suele hacer que dure más. Contarlo es cuidar."],
        ["I si només és una broma entre amics?|¿Y si solo es una broma entre amigos?", "Una broma ho és si riu tothom, també la persona de qui es parla. Si a algú li fa mal, o es repeteix, ja no és una broma.|Una broma lo es si se ríe todo el mundo, también la persona de quien se habla. Si a alguien le hace daño, o se repite, ya no es una broma."],
        ["Puc respondre per defensar-me?|¿Puedo responder para defenderme?", "És normal sentir ràbia, però respondre amb insults sol fer-ho més gran. És millor no respondre, guardar una prova, bloquejar i explicar-ho a un adult.|Es normal sentir rabia, pero responder con insultos suele hacerlo más grande. Es mejor no responder, guardar una prueba, bloquear y contárselo a un adulto."],
        ["Què és el 116 111?|¿Qué es el 116 111?", "Un telèfon gratuït i confidencial d'ajuda a la infància i l'adolescència. Hi pots trucar si et passa alguna cosa i no saps a qui explicar-ho.|Un teléfono gratuito y confidencial de ayuda a la infancia y la adolescencia. Puedes llamar si te pasa algo y no sabes a quién contárselo."],
        ["Per què he de guardar una captura si em fa mal mirar-la?|¿Por qué tengo que guardar una captura si me duele mirarla?", "No cal que la tornis a mirar: només serveix perquè l'adult entengui què ha passat. Si et costa, demana a l'adult que la faci amb tu.|No hace falta que la vuelvas a mirar: solo sirve para que el adulto entienda qué ha pasado. Si te cuesta, pide al adulto que la haga contigo."]
      ],
      tec: [
        ["Un alumne/a vol tornar a començar una conversa per provar un altre camí.|Un alumno/a quiere volver a empezar una conversación para probar otro camino.", "Que torni a obrir aquell pas: la conversa comença de nou. Provar camins diferents també ensenya.|Que vuelva a abrir ese paso: la conversación empieza de nuevo. Probar caminos diferentes también enseña."],
        ["Al xat de la classe d'«Investiga» no troben el missatge que ajuda.|En el chat de la clase de «Investiga» no encuentran el mensaje que ayuda.", "Pista: és l'últim, el de la Nora. Compten els quatre missatges, també el dels emojis.|Pista: es el último, el de Nora. Cuentan los cuatro mensajes, también el de los emojis."],
        ["L'escena es descontrola (riallades, insults «de broma»).|La escena se descontrola (risas, insultos «de broma»).", "Atura-la amb calma, recorda les regles de les escenes (diapositiva 8) i reprèn-la canviant els papers.|Párala con calma, recuerda las reglas de las escenas (diapositiva 8) y retómala cambiando los papeles."],
        ["Un alumne/a no vol participar a les escenes.|Un alumno/a no quiere participar en las escenas.", "Pot fer de narrador/a o d'observador/a que apunta les accions que veu. Ningú no ha de fer cap paper que no vulgui.|Puede hacer de narrador/a o de observador/a que apunta las acciones que ve. Nadie tiene que hacer ningún papel que no quiera."],
        ["Un nom de les situacions coincideix amb el d'un alumne/a.|Un nombre de las situaciones coincide con el de un alumno/a.", "Canvia'l abans d'imprimir, o en el moment, dient que és inventat (és a la preparació).|Cámbialo antes de imprimir, o en el momento, diciendo que es inventado (está en la preparación)."]
      ],
      seg: [
        "Abans de la sessió: coneix el protocol del centre davant de l'assetjament i el ciberassetjament i qui és la persona de referència (tutoria, direcció, coordinació de benestar). Tingues a mà el 116 111 (ajuda a la infància i l'adolescència, gratuït i confidencial) i, per a emergències, el 112.|Antes de la sesión: conoce el protocolo del centro ante el acoso y el ciberacoso y quién es la persona de referencia (tutoría, dirección, coordinación de bienestar). Ten a mano el 116 111 (ayuda a la infancia y la adolescencia, gratuito y confidencial) y, para emergencias, el 112.",
        "Prepara un clima segur: noms inventats, papers voluntaris, cap insult real ni en broma i ningú no fa de víctima si no vol. No parlis de casos reals de la classe ni de l'escola.|Prepara un clima seguro: nombres inventados, papeles voluntarios, ningún insulto real ni en broma y nadie hace de víctima si no quiere. No hables de casos reales de la clase ni del colegio.",
        "Fixa't en els senyals: algú que s'apaga, plora, evita mirar o diu coses com «a mi em passa». No l'exposis davant del grup: acosta't després, en privat, i ofereix-li parlar.|Fíjate en las señales: alguien que se apaga, llora, evita mirar o dice cosas como «a mí me pasa». No le expongas delante del grupo: acércate después, en privado, y ofrécele hablar.",
        "Si un infant explica que pateix ciberassetjament: escolta'l i creu-lo, agraeix-li la confiança i digues-li que no és culpa seva. No prometis guardar el secret, no li facis preguntes que l'indueixin, no li demanis que t'ensenyi el mòbil i no parlis tu amb els implicats. Apunta de seguida, amb les seves paraules, què ha dit, la data i l'hora, i avisa el mateix dia la persona de referència: el centre activarà el protocol i parlarà amb les famílies.|Si un niño o niña cuenta que sufre ciberacoso: escúchale y créele, agradécele la confianza y dile que no es culpa suya. No prometas guardar el secreto, no le hagas preguntas que le induzcan, no le pidas que te enseñe el móvil y no hables tú con los implicados. Apunta enseguida, con sus palabras, qué ha dicho, la fecha y la hora, y avisa el mismo día a la persona de referencia: el centro activará el protocolo y hablará con las familias.",
        "Si algú explica que ha participat en una burla, no l'humiliïs davant del grup: parla-hi en privat, ajuda'l a pensar com reparar-ho i informa'n segons el protocol.|Si alguien cuenta que ha participado en una burla, no le humilles delante del grupo: habla con él o ella en privado, ayúdale a pensar cómo repararlo e informa según el protocolo.",
        "Si hi ha cap indici de risc greu (amenaces, autolesions, por de tornar a casa o a l'escola), avisa immediatament la direcció i, si hi ha perill imminent, truca al 112.|Si hay cualquier indicio de riesgo grave (amenazas, autolesiones, miedo a volver a casa o al colegio), avisa inmediatamente a la dirección y, si hay peligro inminente, llama al 112.",
        "Acaba sempre amb un missatge positiu i la respiració del globus: la majoria de la gent vol una xarxa amable, i tothom té adults que l'ajuden.|Termina siempre con un mensaje positivo y la respiración del globo: la mayoría de la gente quiere una red amable, y todo el mundo tiene adultos que le ayudan."
      ],
      extra: [
        "Mural «Paraules que sumen»: penjar els missatges amables del banc (amb permís de qui els rep) i afegir-n'hi de nous durant el trimestre.|Mural «Palabras que suman»: colgar los mensajes amables del banco (con permiso de quien los recibe) y añadir nuevos durante el trimestre.",
        "Llengua: comparar com canvia el to d'un mateix missatge amb majúscules, emojis o un punt final sec («ok.»), i reescriure'l de tres maneres.|Lengua: comparar cómo cambia el tono de un mismo mensaje con mayúsculas, emojis o un punto final seco («ok.»), y reescribirlo de tres maneras.",
        "Per als grans: escriure una carta a un personatge inventat que ho passa malament a la xarxa, amb tres frases de suport i una proposta d'ajuda.|Para los mayores: escribir una carta a un personaje inventado que lo pasa mal en la red, con tres frases de apoyo y una propuesta de ayuda."
      ],
      trans: [
        "Unitat 1: demanar permís abans de publicar una foto (d1-3) i bloquejar i explicar-ho a un adult (d1-2).|Unidad 1: pedir permiso antes de publicar una foto (d1-3) y bloquear y contárselo a un adulto (d1-2).",
        "Sessió següent (d2-4, la campanya): el respecte a la xarxa pot ser el tema de la campanya, i els comentaris entre equips es fan amb les mateixes normes.|Sesión siguiente (d2-4, la campaña): el respeto en la red puede ser el tema de la campaña, y los comentarios entre equipos se hacen con las mismas normas.",
        "Tutoria i educació en valors: convivència, empatia i gestió de les emocions (la respiració del globus serveix també fora de la xarxa).|Tutoría y educación en valores: convivencia, empatía y gestión de las emociones (la respiración del globo sirve también fuera de la red)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Respecte a la xarxa|Respeto en la red", x: "Avui aprendrem a fer que a la xarxa tothom estigui bé, i què fer si alguna cosa fa mal.|Hoy aprenderemos a hacer que en la red todo el mundo esté bien, y qué hacer si algo hace daño.",
          nota: "Crea un clima tranquil: avui parlarem d'emocions i ningú no ha d'explicar res que no vulgui.|Crea un clima tranquilo: hoy hablaremos de emociones y nadie tiene que contar nada que no quiera." },
        { id: 's2', k: 'pregunta', t: "Com et sents quan…|Cómo te sientes cuando…", punts: ["…algú et respon només «ok.»?|…alguien te responde solo «ok.»?", "…algú et diu una cosa bonica i concreta?|…alguien te dice algo bonito y concreto?", "…et deixen fora d'un grup?|…te dejan fuera de un grupo?"],
          nota: "Que responguin amb el polze (amunt, al mig, avall). No cal que expliquin per què.|Que respondan con el pulgar (arriba, en medio, abajo). No hace falta que expliquen por qué." },
        { id: 's3', k: 'media', t: "«ok.» o «m'encanta»?|¿«ok.» o «me encanta»?", x: "Com se sentiria l'Iu amb cada comentari?|¿Cómo se sentiría Iu con cada comentario?", media: DRAC,
          nota: "Fes notar que el «ok.» potser no volia fer mal, però sense cara ni to sembla sec. Un comentari concret es nota molt.|Haz notar que el «ok.» quizá no quería hacer daño, pero sin cara ni tono parece seco. Un comentario concreto se nota mucho." },
        { id: 's4', k: 'media', t: "Quan fer mal es repeteix|Cuando hacer daño se repite", x: "Com se sent l'Àlex? Qui l'ajuda?|¿Cómo se siente Álex? ¿Quién le ayuda?", media: GRUP,
          nota: "No llegeixis els missatges amb to de burla. Busqueu junts el missatge de la Nora.|No leas los mensajes con tono de burla. Buscad juntos el mensaje de Nora." },
        { id: 's5', k: 'concepte', t: "Ciberassetjament: què és i què no|Ciberacoso: qué es y qué no", anim: 'd2repe',
          punts: ["És fer mal a algú a la xarxa una vegada i una altra.|Es hacer daño a alguien en la red una y otra vez.", "Burles, insults, fotos sense permís, deixar fora a posta…|Burlas, insultos, fotos sin permiso, dejar fuera a propósito…", "Una discussió d'un dia no ho és (però també cal respecte).|Una discusión de un día no lo es (pero también hace falta respeto).", "Mai no és culpa de qui ho pateix.|Nunca es culpa de quien lo sufre."],
          nota: "Insisteix en l'última frase: és la que més pot ajudar un infant que ho estigui passant malament.|Insiste en la última frase: es la que más puede ayudar a un niño o niña que lo esté pasando mal." },
        { id: 's6', k: 'anim', t: "Espectador/a actiu/va|Espectador/a activo/a", anim: 'd2esp', x: "Dona suport, no s'hi suma i ho explica a un adult.|Da apoyo, no se suma y se lo cuenta a un adulto.",
          nota: "Pregunta quina de les tres accions els sembla més fàcil i quina més difícil, i per què.|Pregunta cuál de las tres acciones les parece más fácil y cuál más difícil, y por qué." },
        { id: 's7', k: 'activitat', t: "Què faries?|¿Qué harías?", timer: 12,
          punts: ["Llegiu la situació de la targeta.|Leed la situación de la tarjeta.", "Penseu tres coses que podria fer un espectador/a actiu/va.|Pensad tres cosas que podría hacer un espectador/a activo/a.", "Prepareu una escena de 30 segons on algú dona suport.|Preparad una escena de 30 segundos donde alguien da apoyo.", "La resta de la classe endevina les accions.|El resto de la clase adivina las acciones."],
          nota: "Els papers són voluntaris i de mentida, amb noms inventats. Ningú no fa de víctima si no vol.|Los papeles son voluntarios y de mentira, con nombres inventados. Nadie hace de víctima si no quiere." },
        { id: 's8', k: 'concepte', t: "Les regles de les escenes|Las reglas de las escenas", pic: 'img/chars/guida-happy.webp',
          punts: ["Res d'insults de veritat, ni en broma.|Nada de insultos de verdad, ni en broma.", "Parlem de les accions, no de persones de la classe.|Hablamos de las acciones, no de personas de la clase.", "Si alguna cosa et recorda un cas real, en pots parlar amb mi després.|Si algo te recuerda un caso real, puedes hablarlo conmigo después."],
          nota: "Deixa-la projectada mentre preparen i representen les escenes.|Déjala proyectada mientras preparan y representan las escenas." },
        { id: 's9', k: 'concepte', t: "El semàfor del missatge|El semáforo del mensaje", pic: 'img/ment/atu.webp',
          punts: ["Vermell: estàs enfadat/da? Atura't.|Rojo: ¿estás enfadado/a? Para.", "Groc: és cert? és amable? cal dir-ho?|Amarillo: ¿es cierto? ¿es amable? ¿hace falta decirlo?", "Verd: ara sí, envia'l.|Verde: ahora sí, envíalo."],
          nota: "Fes passar pel semàfor un missatge de la fitxa «Reescriu el missatge» tots junts.|Haced pasar por el semáforo un mensaje de la ficha «Reescribe el mensaje» todos juntos." },
        { id: 's10', k: 'anim', t: "Si alguna cosa et fa mal|Si algo te hace daño", anim: 'd2ajuda', x: "Atura't, guarda una prova, bloqueja i explica-ho a un adult. Mai no és culpa teva.|Para, guarda una prueba, bloquea y cuéntaselo a un adulto. Nunca es culpa tuya.",
          nota: "Explica que la majoria d'apps tenen opcions per bloquejar i denunciar, i que es fan millor amb un adult. Remarca la frase final: mai no és culpa teva.|Explica que la mayoría de apps tienen opciones para bloquear y denunciar, y que se hacen mejor con un adulto. Remarca la frase final: nunca es culpa tuya." },
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

    /* ---------- Sessió 4 · Projecte: la campanya (final de la unitat 2; el diploma del curs és a d3-4) ---------- */
    'd2-4': {
      intro: "Projecte final de la unitat 2. En equips, l'alumnat tria un tema del curs fins ara (contrasenyes, privadesa, empremta digital, bulos, IA o respecte) i un públic de l'escola, i crea una campanya amb tres parts: un cartell que es llegeix de lluny, un missatge curt i positiu que diu què fer i un pla (on, qui, quan i com sabran si ha funcionat). Practiquen decidir en equip, donar i rebre comentaris amables i útils, i fer servir la IA i les imatges amb honestedat i respecte. Una campanya feta per ells dona sentit a tot el que han après i arriba als més petits. La sessió acaba amb una galeria de campanyes. A la unitat 3 es treballen el benestar, els videojocs en línia i les imatges fetes amb IA, i el curs s'acaba a d3-4.|Proyecto final de la unidad 2. En equipos, el alumnado elige un tema del curso hasta ahora (contraseñas, privacidad, huella digital, bulos, IA o respeto) y un público del colegio, y crea una campaña con tres partes: un cartel que se lee de lejos, un mensaje corto y positivo que dice qué hacer y un plan (dónde, quién, cuándo y cómo sabrán si ha funcionado). Practican decidir en equipo, dar y recibir comentarios amables y útiles, y usar la IA y las imágenes con honestidad y respeto. Una campaña hecha por ellos da sentido a todo lo que han aprendido y llega a los más pequeños. La sesión termina con una galería de campañas. En la unidad 3 se trabajan el bienestar, los videojuegos en línea y las imágenes hechas con IA, y el curso termina en d3-4.",
      claus: [
        "Una campanya té tres parts: el cartell (el que es veu), el missatge (el que es recorda) i el pla (com arriba a tothom).|Una campaña tiene tres partes: el cartel (lo que se ve), el mensaje (lo que se recuerda) y el plan (cómo llega a todo el mundo).",
        "Un bon missatge és curt, positiu, diu què fer i s'adapta al públic (no és el mateix per als de 1r que per a les famílies).|Un buen mensaje es corto, positivo, dice qué hacer y se adapta al público (no es lo mismo para los de 1.º que para las familias).",
        "Una bona campanya dona eines en lloc de fer por, fa servir imatges pròpies i, si una IA ha ajudat, ho diu.|Una buena campaña da herramientas en lugar de dar miedo, usa imágenes propias y, si una IA ha ayudado, lo dice.",
        "Es millora provant-la: un altre equip diu una cosa que funciona i una millora concreta.|Se mejora probándola: otro equipo dice algo que funciona y una mejora concreta."
      ],
      prev: [
        "Tots els temes del curs: unitat 1 (contrasenyes, privadesa, empremta) i unitat 2 (bulos, IA, respecte).|Todos los temas del curso: unidad 1 (contraseñas, privacidad, huella) y unidad 2 (bulos, IA, respeto).",
        "Sessió d1-4: escriure normes concretes i en positiu (el decàleg).|Sesión d1-4: escribir normas concretas y en positivo (el decálogo).",
        "Sessió d2-3: donar comentaris amables i concrets.|Sesión d2-3: dar comentarios amables y concretos."
      ],
      obj: [
        "L'alumne/a tria, en equip, un tema del curs i un públic per a una campanya a l'escola.|El alumno/a elige, en equipo, un tema del curso y un público para una campaña en la escuela.",
        "L'alumne/a escriu un missatge curt i positiu que diu què fer.|El alumno/a escribe un mensaje corto y positivo que dice qué hacer.",
        "L'alumne/a dissenya un cartell llegible (títol, imatge i acció) i un pla (on, qui, quan i com sabran si funciona).|El alumno/a diseña un cartel legible (título, imagen y acción) y un plan (dónde, quién, cuándo y cómo sabrán si funciona).",
        "L'alumne/a dona i rep comentaris amables per millorar la campanya i la presenta a la classe.|El alumno/a da y recibe comentarios amables para mejorar la campaña y la presenta a la clase."
      ],
      comp: [
        "Competència digital (CD2): crear contingut digital per informar i sensibilitzar|Competencia digital (CD2): crear contenido digital para informar y sensibilizar",
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
          "Per equip de 3 o 4: un full A3 o una cartolina, un full de llapis per a l'esbós, retoladors gruixuts i colors|Por equipo de 3 o 4: una hoja A3 o una cartulina, una hoja de lápiz para el boceto, rotuladores gruesos y colores",
          "La fitxa de la campanya (una per equip) i un rotlle de cinta adhesiva per a la galeria|La ficha de la campaña (una por equipo) y un rollo de cinta adhesiva para la galería"
        ],
        imprimir: ["La fitxa de la campanya (imprimible 1): una per equip|La ficha de la campaña (imprimible 1): una por equipo"],
        prep: [
          "Imprimir una fitxa per equip.|Imprimir una ficha por equipo.",
          "Parlar amb la direcció per saber on es podran penjar els cartells i a quines classes es podrà explicar la campanya.|Hablar con la dirección para saber dónde se podrán colgar los carteles y en qué clases se podrá explicar la campaña.",
          "Escriure a la pissarra la llista de temes del curs: contrasenyes, privadesa, empremta digital, bulos, IA i respecte.|Escribir en la pizarra la lista de temas del curso: contraseñas, privacidad, huella digital, bulos, IA y respeto.",
          "Preparar una paret o un espai per a la galeria de campanyes.|Preparar una pared o un espacio para la galería de campañas."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: què hem après?|Bienvenida: ¿qué hemos aprendido?", fase: 'inici',
          fa: "Repasseu ràpidament els temes del curs amb la diapositiva de repàs: cada alumne/a diu una cosa que recorda. Després pregunta què voldrien que canviés a l'escola en l'ús d'internet i presenta el repte: una campanya feta per ells per a tota l'escola.|Repasad rápidamente los temas del curso con la diapositiva de repaso: cada alumno/a dice una cosa que recuerda. Después pregunta qué querrían que cambiara en la escuela en el uso de internet y presenta el reto: una campaña hecha por ellos para toda la escuela.",
          diu: ["Digueu-me una cosa que hàgiu après al curs i que us sembli important.|Decidme una cosa que hayáis aprendido en el curso y que os parezca importante.",
            "Què us hauria agradat saber abans? A qui li aniria bé saber-ho?|¿Qué os habría gustado saber antes? ¿A quién le iría bien saberlo?",
            "Avui sereu vosaltres qui ho explicareu a tota l'escola.|Hoy seréis vosotros quienes lo explicaréis a todo el colegio."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 7, t: "Les tres parts d'una campanya|Las tres partes de una campaña", fase: 'teoria',
          fa: "Amb l'animació, presenta el cartell, el missatge i el pla. Ensenya l'exemple de l'escola de Vilabit i pregunta què el fa bo. Explica què fa que un cartell es llegeixi de lluny i les quatre preguntes del pla. Remarca que una bona campanya dona eines en lloc de fer por.|Con la animación, presenta el cartel, el mensaje y el plan. Enseña el ejemplo de la escuela de Vilabit y pregunta qué lo hace bueno. Explica qué hace que un cartel se lea de lejos y las cuatro preguntas del plan. Remarca que una buena campaña da herramientas en lugar de dar miedo.",
          diu: ["Què diu el cartell que hem de fer?|¿Qué dice el cartel que tenemos que hacer?",
            "Un cartell que fa por, ajuda o espanta? (Espanta: millor una acció que doni eines.)|Un cartel que da miedo, ¿ayuda o asusta? (Asusta: mejor una acción que dé herramientas.)",
            "Com sabríeu si la campanya ha funcionat? (Preguntant abans i després.)|¿Cómo sabríais si la campaña ha funcionado? (Preguntando antes y después.)"],
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
            "Podem posar la foto d'un company al cartell? Per què? (No sense el seu permís: millor un dibuix nostre.)|¿Podemos poner la foto de un compañero en el cartel? ¿Por qué? (No sin su permiso: mejor un dibujo nuestro.)",
            "Quin eslògan dels reptes us ha agradat més? Per què funciona?|¿Qué eslogan de los retos os ha gustado más? ¿Por qué funciona?"],
          slides: ['s10'], app: "De «Recorda» fins al repte 3: les dues preguntes de repàs, la missió, les targetes de «Descobreix», cartell, missatge o pla, el públic de 1r, l'esborrany de la Mia, la pausa activa, els eslògans, ordenar el pla i la conversa amb l'Iu.|De «Recuerda» hasta el reto 3: las dos preguntas de repaso, la misión, las tarjetas de «Descubre», cartel, mensaje o plan, el público de 1.º, el borrador de Mia, la pausa activa, los eslóganes, ordenar el plan y la conversación con Iu.", org: "Individual|Individual" },
        { min: 15, t: "Crea: el cartell i el pla|Crea: el cartel y el plan", fase: 'crea',
          fa: "Els equips dibuixen el cartell en A3 i omplen el pla a la fitxa. Als 10 minuts, cada equip ensenya l'esborrany a un altre equip, que li diu una cosa que funciona i una millora concreta. Després, cada alumne/a toca «Ho hem fet!» al pas «La nostra campanya» i fa la revisió de l'app amb el seu equip.|Los equipos dibujan el cartel en A3 y rellenan el plan en la ficha. A los 10 minutos, cada equipo enseña el borrador a otro equipo, que le dice algo que funciona y una mejora concreta. Después, cada alumno/a toca «¡Lo hemos hecho!» en el paso «Nuestra campaña» y hace la revisión de la app con su equipo.",
          diu: ["Es llegeix des de l'altra punta de la classe? Proveu-ho!|¿Se lee desde la otra punta de la clase? ¡Probadlo!",
            "Comenceu per una cosa que funciona i després proposeu una millora.|Empezad por algo que funciona y después proponed una mejora.",
            "On el penjareu? Qui l'explicarà? Com sabreu si ha funcionat?|¿Dónde lo colgaréis? ¿Quién lo explicará? ¿Cómo sabréis si ha funcionado?"],
          slides: ['s11', 's12'], app: "Passos «La nostra campanya» (Ho hem fet!) i la revisió de la campanya.|Pasos «Nuestra campaña» (¡Lo hemos hecho!) y la revisión de la campaña.", org: "Equips i després revisió entre equips|Equipos y después revisión entre equipos" },
        { min: 8, t: "Galeria i tiquet de sortida|Galería y ticket de salida", fase: 'tancament',
          fa: "Pengeu els cartells i feu la galeria: cada portaveu explica en 30 segons el missatge i el pla, i la resta diu una cosa que li ha agradat. Deixa que facin les preguntes finals i fes el tiquet. Acordeu quan es penjaran els cartells a l'escola.|Colgad los carteles y haced la galería: cada portavoz explica en 30 segundos el mensaje y el plan, y el resto dice algo que le ha gustado. Deja que hagan las preguntas finales y haz el ticket. Acordad cuándo se colgarán los carteles en la escuela.",
          diu: ["Què us ha agradat de la campanya d'aquest equip?|¿Qué os ha gustado de la campaña de este equipo?",
            "Ara sou experts i expertes en ciutadania digital: ho podeu explicar a casa i a l'escola!|Ahora sois expertos y expertas en ciudadanía digital: ¡lo podéis explicar en casa y en la escuela!",
            "I recordeu, ara i sempre: si dubteu, pregunteu a un adult de confiança.|Y recordad, ahora y siempre: si dudáis, preguntad a un adulto de confianza."],
          slides: ['s13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
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
          "Recorda que és un esborrany i que totes les campanyes es milloren provant-les. Valora que l'altre equip hagi començat per una cosa que funciona.|Recuerda que es un borrador y que todas las campañas se mejoran probándolas. Valora que el otro equipo haya empezado por algo que funciona."],
        ["L'equip copia l'eslògan d'un anunci o d'una campanya que ha vist.|El equipo copia el eslogan de un anuncio o de una campaña que ha visto.",
          "Inspirar-se està bé, però el missatge ha de ser seu: pregunta com ho dirien amb les seves paraules al seu públic.|Inspirarse está bien, pero el mensaje tiene que ser suyo: pregunta cómo lo dirían con sus palabras a su público."]
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
          ["Treball en equip i comentaris|Trabajo en equipo y comentarios", "Fa la seva part, dona comentaris amables i concrets i en fa servir per millorar.|Hace su parte, da comentarios amables y concretos y los usa para mejorar.", "Participa, però li costa donar o acceptar comentaris.|Participa, pero le cuesta dar o aceptar comentarios."],
          ["Imatges i IA amb respecte|Imágenes e IA con respeto", "Fa servir dibuixos propis o icones, no posa fotos de persones sense permís i diu si una IA ha ajudat.|Usa dibujos propios o iconos, no pone fotos de personas sin permiso y dice si una IA ha ayudado.", "Fa servir imatges sense pensar-hi o no diu que l'ha ajudat una IA.|Usa imágenes sin pensarlo o no dice que le ha ayudado una IA."]
        ]
      },
      casa: "A casa, l'infant pot explicar la campanya del seu equip. Proposta per a la família: feu junts una «campanya de casa» amb tres normes digitals per a tota la família (per exemple, les hores sense pantalles, comprovar abans de compartir i explicar-nos les coses que ens fan sentir malament) i pengeu-la a la nevera.|En casa, el niño o la niña puede explicar la campaña de su equipo. Propuesta para la familia: haced juntos una «campaña de casa» con tres normas digitales para toda la familia (por ejemplo, las horas sin pantallas, comprobar antes de compartir y contarnos las cosas que nos hacen sentir mal) y colgadla en la nevera.",
      faq: [
        ["Podem fer la campanya sobre un tema que no hem treballat gaire, com el descans de pantalles?|¿Podemos hacer la campaña sobre un tema que no hemos trabajado mucho, como el descanso de pantallas?", "Sí, si el podeu explicar bé i doneu una acció concreta i positiva, per exemple: «Abans de dormir, el mòbil també descansa».|Sí, si lo podéis explicar bien y dais una acción concreta y positiva, por ejemplo: «Antes de dormir, el móvil también descansa»."],
        ["Podem posar fotos d'internet al cartell?|¿Podemos poner fotos de internet en el cartel?", "Millor dibuixos vostres o icones: les fotos d'internet tenen autor i no sempre es poden fer servir, i les de persones necessiten el seu permís.|Mejor dibujos vuestros o iconos: las fotos de internet tienen autor y no siempre se pueden usar, y las de personas necesitan su permiso."],
        ["Podem fer servir una IA per fer el cartell?|¿Podemos usar una IA para hacer el cartel?", "Segons les normes de l'escola. Si us dona idees, digueu-ho a la fitxa; el text i el dibuix, millor que siguin vostres.|Según las normas del colegio. Si os da ideas, decidlo en la ficha; el texto y el dibujo, mejor que sean vuestros."],
        ["I si a l'equip no ens posem d'acord?|¿Y si en el equipo no nos ponemos de acuerdo?", "Escolteu totes les idees, combineu-les o feu una votació. El coordinador/a ajuda a decidir, i ningú no es queda sense part.|Escuchad todas las ideas, combinadlas o haced una votación. El coordinador/a ayuda a decidir, y nadie se queda sin parte."],
        ["Com sabrem si la campanya ha funcionat?|¿Cómo sabremos si la campaña ha funcionado?", "Fent una pregunta abans i després a una classe (per exemple: «Què faries si et demanen la contrasenya?») i comparant les respostes.|Haciendo una pregunta antes y después a una clase (por ejemplo: «¿Qué harías si te piden la contraseña?») y comparando las respuestas."],
        ["I després de la campanya?|¿Y después de la campaña?", "Ve la unitat 3: el temps amb pantalles, els videojocs en línia, les imatges fetes amb IA i el pla de benestar digital, que tanca el curs amb el diploma.|Viene la unidad 3: el tiempo con pantallas, los videojuegos en línea, las imágenes hechas con IA y el plan de bienestar digital, que cierra el curso con el diploma."]
      ],
      tec: [
        ["A la revisió de l'app no saben què triar.|En la revisión de la app no saben qué elegir.", "És una autoavaluació: no hi ha respostes bones ni dolentes. Que la facin amb l'equip mirant el cartell i que triïn el que han de millorar primer.|Es una autoevaluación: no hay respuestas buenas ni malas. Que la hagan con el equipo mirando el cartel y que elijan lo que tienen que mejorar primero."],
        ["Volen fer la campanya sobre les pantalles o els videojocs.|Quieren hacer la campaña sobre las pantallas o los videojuegos.", "Es pot, però aquests temes es treballen a la unitat 3: també poden guardar la idea per al pla de benestar digital (d3-4).|Se puede, pero estos temas se trabajan en la unidad 3: también pueden guardar la idea para el plan de bienestar digital (d3-4)."],
        ["No hi ha prou A3.|No hay suficientes A3.", "Dos fulls A4 enganxats també serveixen. L'important és que el títol es llegeixi de lluny.|Dos hojas A4 pegadas también sirven. Lo importante es que el título se lea de lejos."],
        ["Un equip acaba molt abans.|Un equipo termina mucho antes.", "Que faci una segona versió del cartell per a un altre públic o que prepari l'enquesta d'abans i després (vegeu «Atenció a la diversitat»).|Que haga una segunda versión del cartel para otro público o que prepare la encuesta de antes y después (ver «Atención a la diversidad»)."],
        ["No queda temps per a la galeria.|No queda tiempo para la galería.", "Feu-la al principi de la sessió següent o en una tutoria; els equips també poden presentar la campanya a una altra classe.|Hacedla al principio de la sesión siguiente o en una tutoría; los equipos también pueden presentar la campaña a otra clase."],
        ["Tots els equips volen el mateix tema.|Todos los equipos quieren el mismo tema.", "Repartiu públics diferents (1r, 3r, famílies) o feu un sorteig de temes.|Repartid públicos diferentes (1.º, 3.º, familias) o haced un sorteo de temas."]
      ],
      seg: [
        "Als cartells que es pengen, cap foto ni nom complet d'alumnes: dibuixos propis, icones i, si de cas, els àlies. Si fas fotos dels cartells, que no hi surti cap alumne/a.|En los carteles que se cuelgan, ninguna foto ni nombre completo de alumnos: dibujos propios, iconos y, si acaso, los alias. Si haces fotos de los carteles, que no salga ningún alumno/a.",
        "Si un equip tria el ciberassetjament, que la campanya parli d'eines i d'ajuda (espectadors actius, explicar-ho a un adult), sense casos reals de l'escola i sense assenyalar ningú.|Si un equipo elige el ciberacoso, que la campaña hable de herramientas y de ayuda (espectadores activos, contárselo a un adulto), sin casos reales del colegio y sin señalar a nadie.",
        "Si mentre preparen la campanya o a la galeria un infant explica una situació real, segueix el protocol del centre: escolta amb calma, digues-li que no és culpa seva, no li demanis detalls davant del grup, no prometis guardar el secret, apunta-ho i avisa el mateix dia la persona de referència.|Si mientras preparan la campaña o en la galería un niño o niña cuenta una situación real, sigue el protocolo del centro: escucha con calma, dile que no es culpa suya, no le pidas detalles delante del grupo, no prometas guardar el secreto, apúntalo y avisa el mismo día a la persona de referencia.",
        "A la galeria i en la revisió entre equips, modela tu primer un comentari amable i concret. Cap burla dels cartells, de la lletra ni dels dibuixos.|En la galería y en la revisión entre equipos, modela tú primero un comentario amable y concreto. Ninguna burla de los carteles, de la letra ni de los dibujos.",
        "Si el tema és el descans de pantalles, no jutgis els hàbits de cap família: parleu d'idees que ajuden, no de qui ho fa bé o malament.|Si el tema es el descanso de pantallas, no juzgues los hábitos de ninguna familia: hablad de ideas que ayudan, no de quién lo hace bien o mal.",
        "Al final de la unitat, recorda a tothom (i a les famílies, a la nota de casa) qui són els seus adults de confiança i el telèfon 116 111, gratuït i confidencial.|Al final de la unidad, recuerda a todo el mundo (y a las familias, en la nota de casa) quiénes son sus adultos de confianza y el teléfono 116 111, gratuito y confidencial."
      ],
      extra: [
        "Presentar la campanya en dos minuts a una altra classe (millor de més petits) o al consell d'alumnes, amb el permís del centre.|Presentar la campaña en dos minutos a otra clase (mejor de pequeños) o al consejo de alumnos, con el permiso del centro.",
        "Matemàtiques: passar l'enquesta d'abans i després a una classe i representar els resultats en un diagrama de barres.|Matemáticas: pasar la encuesta de antes y después a una clase y representar los resultados en un diagrama de barras.",
        "Llengua: escriure una nota curta per a la web o el butlletí de l'escola que expliqui la campanya (sense noms complets ni fotos d'alumnes).|Lengua: escribir una nota corta para la web o el boletín del colegio que explique la campaña (sin nombres completos ni fotos de alumnos)."
      ],
      trans: [
        "Tot el curs: cada tema de la campanya ve d'una sessió (d1-1 a d2-3). El decàleg (d1-4) va ser el primer cartell; ara arriba a tota l'escola.|Todo el curso: cada tema de la campaña viene de una sesión (d1-1 a d2-3). El decálogo (d1-4) fue el primer cartel; ahora llega a todo el colegio.",
        "Sessió d2-3: els comentaris entre equips segueixen les normes del respecte (una cosa que funciona i una millora). Sessió d2-2: si una IA ajuda, es diu.|Sesión d2-3: los comentarios entre equipos siguen las normas del respeto (algo que funciona y una mejora). Sesión d2-2: si una IA ayuda, se dice.",
        "Educació visual i plàstica (el cartell), llengua (l'eslògan i la presentació oral), matemàtiques (l'enquesta) i ciutadania (participar a l'escola).|Educación visual y plástica (el cartel), lengua (el eslogan y la presentación oral), matemáticas (la encuesta) y ciudadanía (participar en el colegio)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: la campanya|Proyecto: la campaña", x: "Avui el vostre equip crearà una campanya perquè tota l'escola faci servir internet amb seny.|Hoy vuestro equipo creará una campaña para que toda la escuela use internet con cabeza.",
          nota: "És l'última sessió de la unitat 2: presenta-la com una celebració del que han après.|Es la última sesión de la unidad 2: preséntala como una celebración de lo que han aprendido." },
        { id: 's2', k: 'repas', t: "Què hem après al curs?|¿Qué hemos aprendido en el curso?",
          punts: ["Contrasenyes i privadesa|Contraseñas y privacidad", "L'empremta digital|La huella digital", "Bulos, missatges trampa i IA|Bulos, mensajes trampa e IA", "Respecte a la xarxa i demanar ajuda|Respeto en la red y pedir ayuda"],
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
        { id: 's9', k: 'concepte', t: "Regles de la pluja d'idees|Reglas de la lluvia de ideas", pic: 'img/chars/numi-think.webp',
          punts: ["Primer moltes idees, després triem.|Primero muchas ideas, después elegimos.", "Cap idea no és ximple.|Ninguna idea es tonta.", "Un bon eslògan: curt, positiu i diu què fer.|Un buen eslogan: corto, positivo y dice qué hacer."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Projecte: la campanya».|Abre la sesión «Proyecto: la campaña».", "Fes fins al repte 3: la conversa amb l'Iu.|Haz hasta el reto 3: la conversación con Iu.", "Apunta a la fitxa les idees que et serveixin per al vostre cartell.|Apunta en la ficha las ideas que te sirvan para vuestro cartel."],
          nota: "Si algun equip acaba abans, que comenci l'esbós del cartell.|Si algún equipo termina antes, que empiece el boceto del cartel." },
        { id: 's11', k: 'activitat', t: "Crea: el cartell i el pla|Crea: el cartel y el plan", timer: 15,
          punts: ["Dibuixeu el cartell en A3: títol gran, dibuix vostre i acció.|Dibujad el cartel en A3: título grande, dibujo vuestro y acción.", "Ompliu el pla a la fitxa.|Rellenad el plan en la ficha.", "Ensenyeu-lo a un altre equip: una cosa que funciona i una millora.|Enseñádselo a otro equipo: algo que funciona y una mejora.", "A l'app: «Ho hem fet!» i la revisió de la campanya.|En la app: «¡Lo hemos hecho!» y la revisión de la campaña."],
          nota: "Avisa als 10 minuts per fer la revisió entre equips.|Avisa a los 10 minutos para hacer la revisión entre equipos." },
        { id: 's12', k: 'concepte', t: "Com donar comentaris|Cómo dar comentarios", pic: 'img/chars/tuga-happy.webp',
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
          nota: "Fes el tiquet mentre penjeu els cartells.|Haz el ticket mientras colgáis los carteles." },
        { id: 's16', k: 'concepte', t: "Enhorabona: unitat acabada!|¡Enhorabuena: unidad terminada!", pic: 'img/chars/numi-medalla.webp',
          punts: ["Has acabat la unitat 2 i la teva campanya.|Has terminado la unidad 2 y tu campaña.", "Ara pots ajudar la teva escola i la teva família.|Ahora puedes ayudar a tu escuela y a tu familia.", "Recorda: si dubtes, pregunta a un adult de confiança.|Recuerda: si dudas, pregunta a un adulto de confianza."],
          nota: "Digues a cada equip una cosa concreta que ha fet bé. A la unitat 3 arriben les pantalles, els videojocs i el pla de benestar digital.|Di a cada equipo algo concreto que ha hecho bien. En la unidad 3 llegan las pantallas, los videojuegos y el plan de bienestar digital." }
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
          ] }
      ]
    }
  });
}

/* ── unitat 3 ── */
/* Tech Digital · unitat 3 «Benestar i vida digital» · guia del professorat (d3-1 … d3-4)
   Material propi de Numi. Classe de 60 minuts; tots els exemples (Vilabit, Galàxia Blocs, VideoNuvi, Cercanuvi…) són inventats.
   Benestar: mai no es jutgen els hàbits de cap família; es parla d'idees que ajuden. Els telèfons d'ajuda (116 111, 017 i 112)
   es presenten sempre després de l'adult de confiança. Si un infant explica una situació real, s'escolta amb calma, no es
   promet guardar el secret i se segueix el protocol del centre. */
{
  // les demos de les diapositives (els mateixos artefactes de l'app, sense pistes clicables)
  const LOCK = { k: 'dig', kind: 'lock', from: 'Dilluns · tauleta de la Jana|Lunes · tablet de Jana', when: '21:47|21:47',
    html: `<div class="dn"><span class="ne">▶️</span><div><small>VideoNuvi</small>El següent vídeo comença en 5 segons…</div></div><div class="dn"><span class="ne">🔥</span><div><small>Galàxia Blocs</small>Perdràs la ratxa de 12 dies si no entres avui!</div></div><div class="dn"><span class="ne">🎁</span><div><small>Galàxia Blocs</small>Premi sorpresa només durant 10 minuts! ⏳</div></div>|<div class="dn"><span class="ne">▶️</span><div><small>VideoNuvi</small>El siguiente vídeo empieza en 5 segundos…</div></div><div class="dn"><span class="ne">🔥</span><div><small>Galàxia Blocs</small>¡Perderás la racha de 12 días si no entras hoy!</div></div><div class="dn"><span class="ne">🎁</span><div><small>Galàxia Blocs</small>¡Premio sorpresa solo durante 10 minutos! ⏳</div></div>` };
  const SHOP = { k: 'dig', kind: 'game', from: 'Galàxia Blocs · Botiga|Galàxia Blocs · Tienda', av: '🪐', when: '💎 40|💎 40',
    html: `<p><span class="gtag">⏳ Oferta: només queden 4:59 minuts!</span></p><div class="gbox"><span class="ge">🎁</span><div><b>Caixa sorpresa llegendària</b><br>Pot tenir un drac daurat… o no! <span class="gbtn">💎 500</span></div></div><p><small>👥 8 amics teus ja tenen el drac daurat!</small></p>|<p><span class="gtag">⏳ Oferta: ¡solo quedan 4:59 minutos!</span></p><div class="gbox"><span class="ge">🎁</span><div><b>Caja sorpresa legendaria</b><br>Puede tener un dragón dorado… ¡o no! <span class="gbtn">💎 500</span></div></div><p><small>👥 ¡8 amigos tuyos ya tienen el dragón dorado!</small></p>` };
  const OMBRA = { k: 'dig', kind: 'chat', from: 'xX_Ombra_Xx|xX_Ombra_Xx', av: '🌑',
    html: `<div class="dm them">Ets el millor constructor de la partida! 🏆</div><div class="dm them">Et regalo 1.000 gemmes 💎 Però parlem per una altra app, que aquí ens vigilen 🤫</div>|<div class="dm them">¡Eres el mejor constructor de la partida! 🏆</div><div class="dm them">Te regalo 1.000 gemas 💎 Pero hablemos por otra app, que aquí nos vigilan 🤫</div>` };
  const SHARK = { k: 'dig', kind: 'post', from: 'Notícies_Xocants_99|Noticias_Chocantes_99', av: '🦈', when: 'ara mateix|ahora mismo',
    html: `<p>🚨 URGENT!!! Compartiu-ho abans que ho esborrin!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">🦈⛲🏛️</div><p><i>[Una senyora el mira amb sis dits a la mà. Al fons, un rètol diu «FRAMCÀIA».]</i></p>|<p>🚨 ¡¡¡URGENTE!!! ¡Compartidlo antes de que lo borren!</p><div style="font-size:42px;text-align:center;background:#EAF4FF;border-radius:12px;padding:8px">🦈⛲🏛️</div><p><i>[Una señora lo mira con seis dedos en la mano. Al fondo, un letrero dice «FRAMACIA».]</i></p>` };
  const HELP = { k: 'dig', kind: 'help' };

  Object.assign(TGUIDE, {

    /* ---------- Sessió 1 · El meu temps amb pantalles ---------- */
    'd3-1': {
      intro: "Primera sessió de la unitat 3. L'alumnat reflexiona sobre el temps que passa amb pantalles sense culpes: descobreix que algunes apps estan dissenyades perquè no parem (el vídeo següent que comença sol, les notificacions, les ratxes), aprèn a escoltar els senyals del cos (ulls cansats, mal de cap, mal humor), entén per què les pantalles s'apaguen abans de dormir i fa un primer pla personal. El missatge central és que es pot decidir i que els acords es fan en família, també amb els adults. La classe combina conversa, l'activitat del «dia en blocs» al paper i les simulacions de l'app.|Primera sesión de la unidad 3. El alumnado reflexiona sobre el tiempo que pasa con pantallas sin culpas: descubre que algunas apps están diseñadas para que no paremos (el vídeo siguiente que empieza solo, las notificaciones, las rachas), aprende a escuchar las señales del cuerpo (ojos cansados, dolor de cabeza, mal humor), entiende por qué las pantallas se apagan antes de dormir y hace un primer plan personal. El mensaje central es que se puede decidir y que los acuerdos se hacen en familia, también con los adultos. La clase combina conversación, la actividad del «día en bloques» en papel y las simulaciones de la app.",
      claus: [
        "Les pantalles són útils, però el dia també necessita moviment, son, temps amb la gent i una mica d'avorriment.|Las pantallas son útiles, pero el día también necesita movimiento, sueño, tiempo con la gente y un poco de aburrimiento.",
        "Algunes apps tenen trucs de disseny perquè no parem: si costa parar, no és culpa de l'infant, i hi ha trucs que ajuden (temporitzador, notificacions apagades, desactivar el vídeo següent amb un adult).|Algunas apps tienen trucos de diseño para que no paremos: si cuesta parar, no es culpa del niño o la niña, y hay trucos que ayudan (temporizador, notificaciones apagadas, desactivar el vídeo siguiente con un adulto).",
        "A aquesta edat calen entre 9 i 12 hores de son: les pantalles s'apaguen una estona abans (millor una hora) i dormen fora de l'habitació.|A esta edad hacen falta entre 9 y 12 horas de sueño: las pantallas se apagan un rato antes (mejor una hora) y duermen fuera de la habitación.",
        "Els acords es fan en família i valen per a tothom: concrets, possibles de complir i revisables.|Los acuerdos se hacen en familia y valen para todo el mundo: concretos, posibles de cumplir y revisables."
      ],
      prev: [
        "Sessió d1-4: escriure normes concretes i en positiu (el decàleg).|Sesión d1-4: escribir normas concretas y en positivo (el decálogo).",
        "Sessió d2-1: les presses i les emocions fortes són pistes d'engany (ara, de disseny).|Sesión d2-1: las prisas y las emociones fuertes son pistas de engaño (ahora, de diseño)."
      ],
      obj: [
        "L'alumne/a explica, amb exemples, què vol dir tenir un dia equilibrat amb pantalles i sense.|El alumno/a explica, con ejemplos, qué quiere decir tener un día equilibrado con pantallas y sin ellas.",
        "L'alumne/a reconeix trucs de disseny que fan difícil parar (vídeo següent automàtic, notificacions, ratxes, premis amb presses).|El alumno/a reconoce trucos de diseño que hacen difícil parar (vídeo siguiente automático, notificaciones, rachas, premios con prisas).",
        "L'alumne/a identifica senyals del cos que demanen una pausa i hàbits que ajuden a dormir bé.|El alumno/a identifica señales del cuerpo que piden una pausa y hábitos que ayudan a dormir bien.",
        "L'alumne/a tria idees per al seu pla de pantalles i distingeix un bon acord familiar d'un que cal millorar.|El alumno/a elige ideas para su plan de pantallas y distingue un buen acuerdo familiar de uno que hay que mejorar."
      ],
      comp: [
        "Competència digital (CD4): salut i benestar en l'ús de les tecnologies digitals|Competencia digital (CD4): salud y bienestar en el uso de las tecnologías digitales",
        "Competència personal, social i d'aprendre a aprendre: autoregulació i hàbits saludables|Competencia personal, social y de aprender a aprender: autorregulación y hábitos saludables",
        "Coneixement del medi: hàbits saludables (son, activitat física) i ús responsable de la tecnologia|Conocimiento del medio: hábitos saludables (sueño, actividad física) y uso responsable de la tecnología",
        "Competència ciutadana: acords i convivència a casa|Competencia ciudadana: acuerdos y convivencia en casa"
      ],
      vocab: [
        ["Temps de pantalla|Tiempo de pantalla", "L'estona que passem davant d'un mòbil, una tauleta, un ordinador o la tele.|El rato que pasamos delante de un móvil, una tablet, un ordenador o la tele."],
        ["Reproducció automàtica|Reproducción automática", "Quan el vídeo següent comença sol, sense que l'hagis triat.|Cuando el vídeo siguiente empieza solo, sin que lo hayas elegido."],
        ["Notificació|Notificación", "Un avís que apareix a la pantalla perquè obris una app.|Un aviso que aparece en la pantalla para que abras una app."],
        ["Ratxa|Racha", "Els dies seguits que has entrat a una app; et fa por perdre-la i tornes.|Los días seguidos que has entrado en una app; te da miedo perderla y vuelves."],
        ["Pausa|Pausa", "Una estona per parar, moure't i descansar els ulls.|Un rato para parar, moverte y descansar los ojos."],
        ["Acord|Acuerdo", "Una norma que decidim junts i que val per a tothom.|Una norma que decidimos juntos y que vale para todo el mundo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El meu temps amb pantalles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Mi tiempo con pantallas»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa «El meu dia en blocs» (una per alumne/a) i colors|La ficha «Mi día en bloques» (una por alumno/a) y colores"
        ],
        imprimir: ["El meu dia en blocs (imprimible 1): una per alumne/a|Mi día en bloques (imprimible 1): una por alumno/a"],
        prep: [
          "Imprimir una fitxa per alumne/a i preparar colors (verd, vermell, blau i groc).|Imprimir una ficha por alumno/a y preparar colores (verde, rojo, azul y amarillo).",
          "Pensar un exemple propi (sense detalls personals) d'una vegada que una app t'ha costat de deixar: ajuda a treure culpes.|Pensar un ejemplo propio (sin detalles personales) de una vez que una app te ha costado dejar: ayuda a quitar culpas.",
          "Tenir present que hi ha famílies amb realitats molt diferents (horaris, dispositius, germans): les preguntes no han de servir per comparar.|Tener presente que hay familias con realidades muy diferentes (horarios, dispositivos, hermanos): las preguntas no deben servir para comparar."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: on ha anat la tarda?|Bienvenida: ¿adónde se ha ido la tarde?", fase: 'inici',
          fa: "Explica la història d'en Bit, que volia mirar un vídeo i se li va fer fosc. Pregunta si els ha passat alguna cosa semblant, sense demanar quantes hores fan servir pantalles. Recull idees: per què costa parar?|Explica la historia de Bit, que quería ver un vídeo y se le hizo de noche. Pregunta si les ha pasado algo parecido, sin pedir cuántas horas usan pantallas. Recoge ideas: ¿por qué cuesta parar?",
          diu: ["Us ha passat mai que una estona curta s'ha fet molt llarga?|¿Os ha pasado alguna vez que un rato corto se ha hecho muy largo?",
            "Per què creieu que costa tant deixar algunes apps?|¿Por qué creéis que cuesta tanto dejar algunas apps?",
            "Avui no comptarem hores: aprendrem a decidir nosaltres.|Hoy no contaremos horas: aprenderemos a decidir nosotros."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Trampes de disseny, el cos i el son|Trampas de diseño, el cuerpo y el sueño", fase: 'teoria',
          fa: "Amb l'animació i la pantalla de la Jana, mostra els trucs que fan que no parem. Remarca que no és culpa de ningú: estan fets així. Després parla dels senyals del cos i del son (9-12 hores) amb l'animació de la nit, i acaba amb la idea dels acords en família.|Con la animación y la pantalla de Jana, muestra los trucos que hacen que no paremos. Remarca que no es culpa de nadie: están hechos así. Después habla de las señales del cuerpo y del sueño (9-12 horas) con la animación de la noche, y termina con la idea de los acuerdos en familia.",
          diu: ["Quina d'aquestes notificacions us faria obrir l'app ara mateix? Per què?|¿Cuál de estas notificaciones os haría abrir la app ahora mismo? ¿Por qué?",
            "Què us diu el cos quan porteu massa estona amb la pantalla?|¿Qué os dice el cuerpo cuando lleváis demasiado rato con la pantalla?",
            "On dorm la tauleta, a casa vostra? (Sense jutjar: només idees.)|¿Dónde duerme la tablet en vuestra casa? (Sin juzgar: solo ideas.)"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El meu dia en blocs|Mi día en bloques", fase: 'desconnectat',
          fa: "Cada alumne/a pinta a la fitxa un dia d'escola inventat o real, per blocs de mitja hora: son (blau), escola i deures (groc), moviment i amics (verd), pantalles (vermell). Després, en parelles, comparen idees: hi ha prou blau i prou verd? Quins blocs vermells canviarien de lloc? No es comparen famílies ni hores.|Cada alumno/a pinta en la ficha un día de colegio inventado o real, por bloques de media hora: sueño (azul), colegio y deberes (amarillo), movimiento y amigos (verde), pantallas (rojo). Después, en parejas, comparan ideas: ¿hay bastante azul y bastante verde? ¿Qué bloques rojos cambiarían de sitio? No se comparan familias ni horas.",
          diu: ["Comenceu pel son: quants blocs blaus calen per a 9-12 hores?|Empezad por el sueño: ¿cuántos bloques azules hacen falta para 9-12 horas?",
            "On posaríeu la pantalla perquè no toqui el son ni el moviment?|¿Dónde pondríais la pantalla para que no toque el sueño ni el movimiento?",
            "No hi ha un dia perfecte: busquem idees que ajudin.|No hay un día perfecto: buscamos ideas que ayuden."],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: la pregunta de repàs, la història d'en Bit, les cinc targetes, «M'ajuda a parar o m'enganxa?», la pantalla de la Jana, la pregunta de la força de voluntat i ordenar una bona nit. Feu la pausa activa tots junts.|Cada alumno/a hace la sesión hasta la pausa activa: la pregunta de repaso, la historia de Bit, las cinco tarjetas, «¿Me ayuda a parar o me engancha?», la pantalla de Jana, la pregunta de la fuerza de voluntad y ordenar una buena noche. Haced la pausa activa todos juntos.",
          diu: ["Quina trampa de la pantalla de la Jana us ha costat més de trobar?|¿Qué trampa de la pantalla de Jana os ha costado más encontrar?",
            "Per què el missatge d'en Pau no és una trampa?|¿Por qué el mensaje de Pau no es una trampa?",
            "Ara, tots: mireu lluny i compteu fins a 20!|Ahora, todos: ¡mirad lejos y contad hasta 20!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 10, t: "Reptes i el meu pla|Retos y mi plan", fase: 'ordinador',
          fa: "Continuen amb els reptes: la conversa amb en Bit a les 21:40, els acords de la família de la Jana, el mal de cap de la Nora i la reproducció automàtica. Després trien el seu pla de pantalles. Comenta en veu alta que el camí de «parar tard» també té final bo: parar sempre té sentit.|Siguen con los retos: la conversación con Bit a las 21:40, los acuerdos de la familia de Jana, el dolor de cabeza de Nora y la reproducción automática. Después eligen su plan de pantallas. Comenta en voz alta que el camino de «parar tarde» también tiene final bueno: parar siempre tiene sentido.",
          diu: ["Què li heu respost a en Bit? Com ho heu dit perquè no s'enfadi?|¿Qué le habéis respondido a Bit? ¿Cómo se lo habéis dicho para que no se enfade?",
            "Per què «Prohibit tot, per sempre» no és un bon acord?|¿Por qué «Prohibido todo, para siempre» no es un buen acuerdo?",
            "Quina idea del vostre pla provareu primer?|¿Qué idea de vuestro plan probaréis primero?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el meu pla de pantalles (i «La meva setmana de pantalles», per a casa).|«Retos» y el paso «Crea»: mi plan de pantallas (y «Mi semana de pantallas», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu les idees clau amb el resum. Fes el tiquet de sortida oralment o en un paper, i que facin les preguntes finals i com s'han sentit. Explica la proposta per a casa: la setmana de pantalles en família, sense renyar ningú.|Repasad las ideas clave con el resumen. Haz el ticket de salida oralmente o en un papel, y que hagan las preguntas finales y cómo se han sentido. Explica la propuesta para casa: la semana de pantallas en familia, sin reñir a nadie.",
          diu: ["Digueu una trampa que fa que no parem i un truc per decidir vosaltres.|Decid una trampa que hace que no paremos y un truco para decidir vosotros.",
            "On dorm la tauleta per dormir bé?|¿Dónde duerme la tablet para dormir bien?",
            "Si us costa molt parar, a qui ho podeu explicar?|Si os cuesta mucho parar, ¿a quién se lo podéis contar?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si li costa parar, és culpa seva o que «té un problema».|Piensa que, si le cuesta parar, es culpa suya o que «tiene un problema».",
          "Recorda la targeta de les trampes: estan fetes perquè costi. El que compta és conèixer-les i fer servir trucs.|Recuerda la tarjeta de las trampas: están hechas para que cueste. Lo que cuenta es conocerlas y usar trucos."],
        ["Creu que la solució és prohibir totes les pantalles.|Cree que la solución es prohibir todas las pantallas.",
          "Les pantalles també serveixen per aprendre i crear. Pregunta: què faria que fossin una bona estona i no massa?|Las pantallas también sirven para aprender y crear. Pregunta: ¿qué haría que fueran un buen rato y no demasiado?"],
        ["Compara el seu temps amb el dels companys («jo en faig menys que tu»).|Compara su tiempo con el de los compañeros («yo hago menos que tú»).",
          "Torna al pla personal: cadascú busca idees per a ell o ella. No hi ha competició.|Vuelve al plan personal: cada uno busca ideas para él o ella. No hay competición."],
        ["Diu que la tauleta al llit no el desperta perquè «la té en silenci».|Dice que la tablet en la cama no le despierta porque «la tiene en silencio».",
          "La llum i les ganes de mirar-la «un moment» també compten. Fora de l'habitació és més fàcil descansar.|La luz y las ganas de mirarla «un momento» también cuentan. Fuera de la habitación es más fácil descansar."],
        ["Pensa que els acords són només per als infants.|Piensa que los acuerdos son solo para los niños.",
          "Mostra la targeta dels acords: els millors valen per a tothom, també per als adults (per exemple, cap mòbil a taula).|Muestra la tarjeta de los acuerdos: los mejores valen para todo el mundo, también para los adultos (por ejemplo, ningún móvil en la mesa)."]
      ],
      diff: {
        mes: "Per anar més enllà: buscar a la configuració d'una app inventada (dibuixada) on hi hauria els botons per desactivar el vídeo següent i les notificacions, i explicar-ho a la família; o fer un gràfic de barres amb els colors del «dia en blocs».|Para ir más allá: buscar en la configuración de una app inventada (dibujada) dónde estarían los botones para desactivar el vídeo siguiente y las notificaciones, y explicárselo a la familia; o hacer un gráfico de barras con los colores del «día en bloques».",
        menys: "Donar la fitxa del dia en blocs amb el son i l'escola ja pintats, perquè només hagin de decidir on van les pantalles i el moviment. A l'app, fer els reptes en parella.|Dar la ficha del día en bloques con el sueño y el colegio ya pintados, para que solo tengan que decidir dónde van las pantallas y el movimiento. En la app, hacer los retos en pareja."
      },
      aval: {
        ticket: ["Digues una trampa que fa que no paris i un truc per decidir tu.|Di una trampa que hace que no pares y un truco para decidir tú.",
          "Digues una cosa que ajuda a dormir bé.|Di algo que ayuda a dormir bien."],
        rubric: [
          ["Trampes de disseny|Trampas de diseño", "Reconeix diverses trampes (vídeo següent, notificacions, ratxes) i explica per què funcionen.|Reconoce varias trampas (vídeo siguiente, notificaciones, rachas) y explica por qué funcionan.", "En reconeix alguna amb ajuda.|Reconoce alguna con ayuda."],
          ["Cos i son|Cuerpo y sueño", "Identifica senyals del cos i hàbits per dormir bé (apagar abans, fora de l'habitació).|Identifica señales del cuerpo y hábitos para dormir bien (apagar antes, fuera de la habitación).", "Coneix algun hàbit, però no el relaciona amb el son.|Conoce algún hábito, pero no lo relaciona con el sueño."],
          ["Pla i acords|Plan y acuerdos", "Tria idees concretes per al seu pla i distingeix bons acords familiars.|Elige ideas concretas para su plan y distingue buenos acuerdos familiares.", "Proposa idees generals («menys pantalles») sense concretar.|Propone ideas generales («menos pantallas») sin concretar."]
        ]
      },
      casa: "A casa, podeu fer junts «La meva setmana de pantalles»: tres dies apuntant quanta estona i per a què, i pintant de verd el que us ha fet bé i de vermell el que ha estat massa. Després, sense renyar ningú, escriviu un acord per a tota la família (també per als adults) i proveu-lo una setmana. Si voleu, desactiveu junts la reproducció automàtica i les notificacions que no calen.|En casa, podéis hacer juntos «Mi semana de pantallas»: tres días apuntando cuánto rato y para qué, y pintando de verde lo que os ha hecho bien y de rojo lo que ha sido demasiado. Después, sin reñir a nadie, escribid un acuerdo para toda la familia (también para los adultos) y probadlo una semana. Si queréis, desactivad juntos la reproducción automática y las notificaciones que no hacen falta.",
      faq: [
        ["Quantes hores de pantalla són massa?|¿Cuántas horas de pantalla son demasiadas?", "No hi ha una xifra màgica per a tothom: els pediatres recomanen poca estona d'oci, amb pauses, i que no prengui temps al son, al moviment ni a la família. Més que comptar, mireu com us sentiu i si queda temps per a tot.|No hay una cifra mágica para todo el mundo: los pediatras recomiendan poco rato de ocio, con pausas, y que no quite tiempo al sueño, al movimiento ni a la familia. Más que contar, mirad cómo os sentís y si queda tiempo para todo."],
        ["Els deures amb l'ordinador també compten?|¿Los deberes con el ordenador también cuentan?", "Compten per als ulls i per al cos (cal fer pauses), però no són el mateix que l'oci. Al «dia en blocs» es poden pintar de groc.|Cuentan para los ojos y para el cuerpo (hay que hacer pausas), pero no son lo mismo que el ocio. En el «día en bloques» se pueden pintar de amarillo."],
        ["I si a casa no hi ha cap norma?|¿Y si en casa no hay ninguna norma?", "Cap problema: aquesta sessió és per tenir idees. L'infant pot proposar a casa una sola idea, la que li sembli més fàcil.|Ningún problema: esta sesión es para tener ideas. El niño o la niña puede proponer en casa una sola idea, la que le parezca más fácil."],
        ["Per què parlem de trampes de disseny? No és exagerat?|¿Por qué hablamos de trampas de diseño? ¿No es exagerado?", "Moltes apps es fan perquè hi passem el màxim de temps possible. Explicar-ho sense alarmisme treu culpes i ajuda a fer servir trucs.|Muchas apps se hacen para que pasemos en ellas el máximo tiempo posible. Explicarlo sin alarmismo quita culpas y ayuda a usar trucos."],
        ["Un alumne diu que es queda despert fins molt tard cada nit.|Un alumno dice que se queda despierto hasta muy tarde cada noche.", "Escolta'l sense jutjar i, en privat, parla-ho amb la tutoria i la família: pot haver-hi moltes causes i val la pena ajudar-lo.|Escúchale sin juzgar y, en privado, háblalo con la tutoría y la familia: puede haber muchas causas y vale la pena ayudarle."]
      ],
      tec: [
        ["Es pot desactivar el vídeo següent a totes les apps?|¿Se puede desactivar el vídeo siguiente en todas las apps?", "A moltes, sí, a la configuració (sovint es diu «reproducció automàtica»). Ho ha de fer un adult amb l'infant.|En muchas, sí, en la configuración (a menudo se llama «reproducción automática»). Lo tiene que hacer un adulto con el niño o la niña."],
        ["Al pas «M'ajuda a parar» les targetes surten d'una en una.|En el paso «Me ayuda a parar» las tarjetas salen de una en una.", "És normal al mòbil o quan n'hi ha moltes: es poden arrossegar o tocar el calaix.|Es normal en el móvil o cuando hay muchas: se pueden arrastrar o tocar la caja."],
        ["A la pantalla de la Jana no saben on tocar.|En la pantalla de Jana no saben dónde tocar.", "Que toquin la frase de cada notificació, no la icona. El missatge d'en Pau no és una pista.|Que toquen la frase de cada notificación, no el icono. El mensaje de Pau no es una pista."],
        ["Volen tornar a la conversa amb en Bit per provar un altre camí.|Quieren volver a la conversación con Bit para probar otro camino.", "Poden tornar enrere amb la fletxa del pas o tornar a obrir la sessió: tots els camins acaben amb una idea per aprendre.|Pueden volver atrás con la flecha del paso o volver a abrir la sesión: todos los caminos terminan con una idea para aprender."]
      ],
      seg: [
        "No demanis quantes hores fa servir pantalles cada alumne/a ni facis rànquings: és fàcil que algú se senti jutjat o jutjada.|No preguntes cuántas horas usa pantallas cada alumno/a ni hagas rankings: es fácil que alguien se sienta juzgado o juzgada.",
        "Parla sempre d'idees que ajuden, mai de famílies que ho fan bé o malament.|Habla siempre de ideas que ayudan, nunca de familias que lo hacen bien o mal.",
        "Si algun infant explica que no dorm, que passa molta estona sol/a amb pantalles o que alguna cosa li fa por a la nit, escolta'l amb calma i comenta-ho amb la tutoria i la família.|Si algún niño o niña cuenta que no duerme, que pasa mucho rato solo/a con pantallas o que algo le da miedo por la noche, escúchale con calma y coméntalo con la tutoría y la familia."
      ],
      extra: [
        "Educació física: inventar una «pausa de pantalla» de dos minuts per a la classe i fer-la cada dia després de l'ordinador.|Educación física: inventar una «pausa de pantalla» de dos minutos para la clase y hacerla cada día después del ordenador.",
        "Matemàtiques: amb el «dia en blocs», calcular quantes hores són 20 blocs de mitja hora i fer un gràfic de sectors senzill.|Matemáticas: con el «día en bloques», calcular cuántas horas son 20 bloques de media hora y hacer un gráfico de sectores sencillo.",
        "Per als grans: debat sobre per què les apps volen que hi passem temps (com guanyen diners?) i què podríem fer per decidir nosaltres.|Para los mayores: debate sobre por qué las apps quieren que pasemos tiempo en ellas (¿cómo ganan dinero?) y qué podríamos hacer para decidir nosotros."
      ],
      trans: [
        "Sessió d2-1: les presses i les emocions fortes eren pistes de bulo; aquí són trucs de disseny.|Sesión d2-1: las prisas y las emociones fuertes eran pistas de bulo; aquí son trucos de diseño.",
        "Sessió d3-2: les ratxes i els premis amb presses tornen a la botiga del videojoc. Sessió d3-4: el pla d'avui és la base del pacte digital de casa.|Sesión d3-2: las rachas y los premios con prisas vuelven en la tienda del videojuego. Sesión d3-4: el plan de hoy es la base del pacto digital de casa.",
        "Educació física i salut (son, moviment), matemàtiques (temps i gràfics) i tutoria (acords i convivència).|Educación física y salud (sueño, movimiento), matemáticas (tiempo y gráficos) y tutoría (acuerdos y convivencia)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "El meu temps amb pantalles|Mi tiempo con pantallas", x: "Avui descobrirem per què de vegades costa tant parar i com podem decidir nosaltres.|Hoy descubriremos por qué a veces cuesta tanto parar y cómo podemos decidir nosotros.",
          nota: "Presenta la unitat 3: benestar, videojocs i IA. Avui, el temps i el son.|Presenta la unidad 3: bienestar, videojuegos e IA. Hoy, el tiempo y el sueño." },
        { id: 's2', k: 'pregunta', t: "On ha anat la tarda?|¿Adónde se ha ido la tarde?", punts: ["En Bit volia mirar un vídeo… i se li va fer fosc.|Bit quería ver un vídeo… y se le hizo de noche.", "Us ha passat mai?|¿Os ha pasado alguna vez?", "Per què costa tant parar?|¿Por qué cuesta tanto parar?"],
          nota: "Recull idees sense demanar hores. Guarda les respostes per a la diapositiva de les trampes.|Recoge ideas sin pedir horas. Guarda las respuestas para la diapositiva de las trampas." },
        { id: 's3', k: 'anim', t: "Fetes perquè no paris|Hechas para que no pares", anim: 'd3trampa', x: "El vídeo següent, les notificacions, les ratxes i els premis amb presses.|El vídeo siguiente, las notificaciones, las rachas y los premios con prisas.",
          nota: "Remarca: si costa parar, no és culpa de ningú. Saber-ho és el primer pas.|Remarca: si cuesta parar, no es culpa de nadie. Saberlo es el primer paso." },
        { id: 's4', k: 'media', t: "La tauleta de la Jana a les 21:47|La tablet de Jana a las 21:47", x: "Quines notificacions volen que obri l'app ara?|¿Qué notificaciones quieren que abra la app ahora?", media: LOCK,
          nota: "Totes tres són trampes: presses, por de perdre i premis. A aquesta hora, el millor és dormir.|Las tres son trampas: prisas, miedo a perder y premios. A esta hora, lo mejor es dormir." },
        { id: 's5', k: 'concepte', t: "Escolta el teu cos|Escucha tu cuerpo", pic: 'img/ment/sob.webp',
          punts: ["Ulls cansats, mal de cap, mal humor: el cos demana una pausa.|Ojos cansados, dolor de cabeza, mal humor: el cuerpo pide una pausa.", "Mira lluny, estira't, beu aigua.|Mira lejos, estírate, bebe agua.", "Un temporitzador t'ajuda a parar.|Un temporizador te ayuda a parar."],
          nota: "Proposa fer ara mateix una mini pausa: mirar per la finestra comptant fins a 10.|Propón hacer ahora mismo una mini pausa: mirar por la ventana contando hasta 10." },
        { id: 's6', k: 'anim', t: "Les pantalles també van a dormir|Las pantallas también se van a dormir", anim: 'd3son', x: "Entre 9 i 12 hores de son. Pantalles apagades una estona abans i fora de l'habitació.|Entre 9 y 12 horas de sueño. Pantallas apagadas un rato antes y fuera de la habitación.",
          nota: "Explica que la llum i els vídeos emocionants fan que costi adormir-se. Sense jutjar cap casa.|Explica que la luz y los vídeos emocionantes hacen que cueste dormirse. Sin juzgar ninguna casa." },
        { id: 's7', k: 'concepte', t: "Els acords, en família|Los acuerdos, en familia", pic: 'img/ment/rel.webp',
          punts: ["Quanta estona, quan i on.|Cuánto rato, cuándo y dónde.", "Valen per a tothom, també per als adults.|Valen para todo el mundo, también para los adultos.", "Si no funcionen, se'n torna a parlar.|Si no funcionan, se vuelve a hablar."],
          nota: "Dona exemples d'acords per a tothom: cap mòbil a taula, tauletes a la cuina a la nit.|Da ejemplos de acuerdos para todo el mundo: ningún móvil en la mesa, tablets en la cocina por la noche." },
        { id: 's8', k: 'activitat', t: "El meu dia en blocs|Mi día en bloques", timer: 12,
          punts: ["Pinta un dia d'escola per blocs de mitja hora.|Pinta un día de colegio por bloques de media hora.", "Blau: son · Groc: escola i deures · Verd: moviment i amics · Vermell: pantalles.|Azul: sueño · Amarillo: colegio y deberes · Verde: movimiento y amigos · Rojo: pantallas.", "En parella: quins blocs canviaríeu de lloc?|En pareja: ¿qué bloques cambiaríais de sitio?"],
          nota: "Passa per les taules: ajuda a començar pel son (9-12 hores) i no deixis que es comparin entre ells.|Pasa por las mesas: ayuda a empezar por el sueño (9-12 horas) y no dejes que se comparen entre ellos." },
        { id: 's9', k: 'concepte', t: "Sense comparar|Sin comparar", pic: 'img/chars/numi-think.webp',
          punts: ["No hi ha un dia perfecte.|No hay un día perfecto.", "Cada casa és diferent.|Cada casa es diferente.", "Busquem idees que ajudin.|Buscamos ideas que ayuden."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15,
          punts: ["Obre la sessió «El meu temps amb pantalles».|Abre la sesión «Mi tiempo con pantallas».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "A la pausa, ens movem tots junts.|En la pausa, nos movemos todos juntos."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: decideixo jo|Retos: decido yo", timer: 8,
          punts: ["La conversa amb en Bit a les 21:40.|La conversación con Bit a las 21:40.", "Bons acords per a la família de la Jana.|Buenos acuerdos para la familia de Jana.", "El mal de cap de la Nora i la reproducció automàtica.|El dolor de cabeza de Nora y la reproducción automática."],
          nota: "Pregunta com han dit que no a en Bit sense enfadar-se: és el mateix que dir que no a la contrasenya.|Pregunta cómo le han dicho que no a Bit sin enfadarse: es lo mismo que decir que no a la contraseña." },
        { id: 's12', k: 'activitat', t: "Crea: el meu pla de pantalles|Crea: mi plan de pantallas", timer: 2,
          punts: ["Tria una idea per a cada moment.|Elige una idea para cada momento.", "Pensa quina provaràs primer.|Piensa cuál probarás primero.", "A casa: la setmana de pantalles en família.|En casa: la semana de pantallas en familia."],
          nota: "Que diguin en veu alta una idea del seu pla; així se'n recorden més.|Que digan en voz alta una idea de su plan; así se acuerdan más." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Algunes apps estan fetes perquè no parem: no és culpa nostra.|Algunas apps están hechas para que no paremos: no es culpa nuestra.", "El cos ens avisa: pausa, moviment i son.|El cuerpo nos avisa: pausa, movimiento y sueño.", "Les pantalles dormen fora de l'habitació.|Las pantallas duermen fuera de la habitación.", "Els acords es fan en família.|Los acuerdos se hacen en familia."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues una trampa que fa que no paris i un truc per decidir tu.|Di una trampa que hace que no pares y un truco para decidir tú.", "Digues una cosa que ajuda a dormir bé.|Di algo que ayuda a dormir bien."],
          nota: "Pot ser oral, per torns, o en un paper.|Puede ser oral, por turnos, o en un papel." },
        { id: 's15', k: 'concepte', t: "Per a casa|Para casa", pic: 'img/ment/ded.webp',
          punts: ["La meva setmana de pantalles, en família.|Mi semana de pantallas, en familia.", "Verd: m'ha fet bé · Vermell: ha estat massa.|Verde: me ha hecho bien · Rojo: ha sido demasiado.", "Un acord per a tothom, sense renyar ningú.|Un acuerdo para todo el mundo, sin reñir a nadie."],
          nota: "Recorda que és una proposta, no una obligació: cada família l'adapta.|Recuerda que es una propuesta, no una obligación: cada familia la adapta." }
      ],
      print: [
        { id: 'p1', t: "El meu dia en blocs|Mi día en bloques", k: 'fitxa',
          intro: "Pinta un dia d'escola per blocs de mitja hora. Blau: son. Groc: escola i deures. Verd: moviment i amics. Vermell: pantalles.|Pinta un día de colegio por bloques de media hora. Azul: sueño. Amarillo: colegio y deberes. Verde: movimiento y amigos. Rojo: pantallas.",
          items: [
            { q: "El meu dia (de les 7 del matí a les 9 del vespre), per blocs:|Mi día (de las 7 de la mañana a las 9 de la noche), por bloques:", big: true, sol: "Resposta oberta. Valoreu que hi hagi son suficient (9-12 hores comptant la nit), moviment i estones sense pantalles.|Respuesta abierta. Valorad que haya sueño suficiente (9-12 horas contando la noche), movimiento y ratos sin pantallas." },
            { q: "Quants blocs blaus (son) calen per a 10 hores?|¿Cuántos bloques azules (sueño) hacen falta para 10 horas?", sol: "20 blocs de mitja hora.|20 bloques de media hora." },
            { q: "Una trampa que fa que no pari:|Una trampa que hace que no pare:", sol: "Per exemple: el vídeo següent que comença sol, les notificacions, les ratxes o els premis amb presses.|Por ejemplo: el vídeo siguiente que empieza solo, las notificaciones, las rachas o los premios con prisas." },
            { q: "Un truc per decidir jo:|Un truco para decidir yo:", sol: "Per exemple: un temporitzador, decidir abans què miraré o treure les notificacions amb un adult.|Por ejemplo: un temporizador, decidir antes qué veré o quitar las notificaciones con un adulto." },
            { q: "Un acord que proposaré a casa (per a tothom):|Un acuerdo que propondré en casa (para todo el mundo):", sol: "Resposta oberta: valoreu que sigui concret i possible de complir.|Respuesta abierta: valorad que sea concreto y posible de cumplir." }
          ] }
      ]
    },

    /* ---------- Sessió 2 · Videojocs en línia ---------- */
    'd3-2': {
      intro: "Segona sessió de la unitat 3. Molts infants d'aquesta edat ja fan partides en línia, sovint amb xat de text o de veu. L'alumnat aprèn que a la partida hi pot haver desconeguts, que amb ells no es comparteixen dades ni fotos i que «parlem per una altra app», els regals i els secrets són senyals d'alarma. També descobreix que les gemmes es paguen amb diners de veritat, que les caixes sorpresa (caixes de botí) funcionen com una loteria i que l'etiqueta PEGI diu l'edat recomanada. El to és positiu: les partides poden ser una bona estona, i cal saber protegir-se i demanar ajuda.|Segunda sesión de la unidad 3. Muchos niños y niñas de esta edad ya hacen partidas en línea, a menudo con chat de texto o de voz. El alumnado aprende que en la partida puede haber desconocidos, que con ellos no se comparten datos ni fotos y que «hablemos por otra app», los regalos y los secretos son señales de alarma. También descubre que las gemas se pagan con dinero de verdad, que las cajas sorpresa (cajas de botín) funcionan como una lotería y que la etiqueta PEGI dice la edad recomendada. El tono es positivo: las partidas pueden ser un buen rato, y hay que saber protegerse y pedir ayuda.",
      claus: [
        "A la partida en línia hi pot haver desconeguts: es parla només de la partida, sense dades personals, fotos ni càmera.|En la partida en línea puede haber desconocidos: se habla solo de la partida, sin datos personales, fotos ni cámara.",
        "Regals, «parlem per una altra app» i secrets són senyals d'alarma: bloquejar, denunciar i explicar-ho a un adult. Mai no és culpa de l'infant.|Regalos, «hablemos por otra app» y secretos son señales de alarma: bloquear, denunciar y contárselo a un adulto. Nunca es culpa del niño o la niña.",
        "Les monedes i gemmes costen diners de veritat; les caixes sorpresa són com una loteria i poden enganxar. Les compres, sempre amb un adult (i amb bloqueig de compres).|Las monedas y gemas cuestan dinero de verdad; las cajas sorpresa son como una lotería y pueden enganchar. Las compras, siempre con un adulto (y con bloqueo de compras).",
        "L'etiqueta PEGI (3, 7, 12, 16 o 18) diu l'edat mínima recomanada i avisa de les compres dins del videojoc.|La etiqueta PEGI (3, 7, 12, 16 o 18) dice la edad mínima recomendada y avisa de las compras dentro del videojuego."
      ],
      prev: [
        "Sessió d1-2: desconeguts, senyals d'alarma i el xat de l'Estel_Blau_11 a Galàxia Blocs.|Sesión d1-2: desconocidos, señales de alarma y el chat de Estel_Blau_11 en Galàxia Blocs.",
        "Sessió d3-1: les trampes de disseny (presses, ratxes i premis).|Sesión d3-1: las trampas de diseño (prisas, rachas y premios)."
      ],
      obj: [
        "L'alumne/a distingeix missatges normals i senyals d'alarma en el xat d'una partida en línia.|El alumno/a distingue mensajes normales y señales de alarma en el chat de una partida en línea.",
        "L'alumne/a sap què fer si algú el molesta o li demana dades, fotos o passar a una altra app: silenciar, bloquejar, denunciar i explicar-ho.|El alumno/a sabe qué hacer si alguien le molesta o le pide datos, fotos o pasar a otra app: silenciar, bloquear, denunciar y contarlo.",
        "L'alumne/a reconeix les trampes de la botiga d'un videojoc i explica que les gemmes i les caixes sorpresa costen diners de veritat.|El alumno/a reconoce las trampas de la tienda de un videojuego y explica que las gemas y las cajas sorpresa cuestan dinero de verdad.",
        "L'alumne/a interpreta l'etiqueta PEGI i configura un perfil de partida segur.|El alumno/a interpreta la etiqueta PEGI y configura un perfil de partida seguro."
      ],
      comp: [
        "Competència digital (CD4): seguretat, protecció de dades i benestar en entorns en línia|Competencia digital (CD4): seguridad, protección de datos y bienestar en entornos en línea",
        "Competència digital (CD3): interactuar amb respecte i seguretat en plataformes en línia|Competencia digital (CD3): interactuar con respeto y seguridad en plataformas en línea",
        "Competència matemàtica i consum responsable: el valor real dels diners virtuals|Competencia matemática y consumo responsable: el valor real del dinero virtual",
        "Competència personal i social: demanar ajuda i dir que no|Competencia personal y social: pedir ayuda y decir que no"
      ],
      vocab: [
        ["Partida en línia|Partida en línea", "Una partida d'un videojoc on hi ha altres persones connectades des d'altres llocs.|Una partida de un videojuego donde hay otras personas conectadas desde otros sitios."],
        ["Xat de veu|Chat de voz", "Parlar en directe amb la gent de la partida.|Hablar en directo con la gente de la partida."],
        ["Gemmes o monedes|Gemas o monedas", "Diners del videojoc que es compren amb diners de veritat.|Dinero del videojuego que se compra con dinero de verdad."],
        ["Caixa sorpresa (caixa de botí)|Caja sorpresa (caja de botín)", "Un premi que es paga sense saber què hi haurà a dins.|Un premio que se paga sin saber qué habrá dentro."],
        ["PEGI|PEGI", "L'etiqueta europea que diu l'edat mínima recomanada d'un videojoc.|La etiqueta europea que dice la edad mínima recomendada de un videojuego."],
        ["Control parental|Control parental", "Opcions perquè un adult limiti compres, xats o temps.|Opciones para que un adulto limite compras, chats o tiempo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Videojocs en línia»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Videojuegos en línea»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Les targetes «Què fem a la partida?» (un paquet per grup de 4)|Las tarjetas «¿Qué hacemos en la partida?» (un paquete por grupo de 4)"
        ],
        imprimir: ["Què fem a la partida? (imprimible 1): un paquet de targetes per grup|¿Qué hacemos en la partida? (imprimible 1): un paquete de tarjetas por grupo"],
        prep: [
          "Imprimir i retallar un paquet de targetes per grup i preparar tres rètols: «Normal», «Alarma» i «Pregunto a un adult».|Imprimir y recortar un paquete de tarjetas por grupo y preparar tres carteles: «Normal», «Alarma» y «Pregunto a un adulto».",
          "Revisar el protocol del centre per si algun alumne/a explica un contacte real amb un adult desconegut a la xarxa.|Revisar el protocolo del centro por si algún alumno/a cuenta un contacto real con un adulto desconocido en la red.",
          "Tenir a mà els telèfons 116 111 (ajuda a la infància i l'adolescència) i 017 (ajuda en ciberseguretat).|Tener a mano los teléfonos 116 111 (ayuda a la infancia y la adolescencia) y 017 (ayuda en ciberseguridad)."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: Galàxia Blocs|Bienvenida: Galàxia Blocs", fase: 'inici',
          fa: "Presenta Galàxia Blocs, un videojoc en línia inventat. Pregunta, sense marques, què els agrada de les partides en línia i amb qui les fan. Valora el que tenen de bo (crear, col·laborar) abans de parlar de riscos.|Presenta Galàxia Blocs, un videojuego en línea inventado. Pregunta, sin marcas, qué les gusta de las partidas en línea y con quién las hacen. Valora lo que tienen de bueno (crear, colaborar) antes de hablar de riesgos.",
          diu: ["Què us agrada de fer partides amb altra gent?|¿Qué os gusta de hacer partidas con otra gente?",
            "Amb qui parleu quan feu una partida en línia?|¿Con quién habláis cuando hacéis una partida en línea?",
            "Avui aprendrem a gaudir-ne sense que ningú se n'aprofiti.|Hoy aprenderemos a disfrutarlas sin que nadie se aproveche."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Desconeguts, compres i caixes sorpresa|Desconocidos, compras y cajas sorpresa", fase: 'teoria',
          fa: "Amb el xat de l'xX_Ombra_Xx, explica els senyals d'alarma (regals, una altra app, secrets). Després mostra la botiga de Galàxia Blocs i l'animació de la caixa sorpresa: les gemmes són diners de veritat i la caixa és com una loteria. Acaba amb l'etiqueta PEGI.|Con el chat de xX_Ombra_Xx, explica las señales de alarma (regalos, otra app, secretos). Después muestra la tienda de Galàxia Blocs y la animación de la caja sorpresa: las gemas son dinero de verdad y la caja es como una lotería. Termina con la etiqueta PEGI.",
          diu: ["Per què creieu que vol parlar per una altra app?|¿Por qué creéis que quiere hablar por otra app?",
            "Una gemma, quants diners de veritat deu costar? Com ho podríem saber?|Una gema, ¿cuánto dinero de verdad debe de costar? ¿Cómo lo podríamos saber?",
            "Què vol dir el número de l'etiqueta PEGI?|¿Qué quiere decir el número de la etiqueta PEGI?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Què fem a la partida?|¿Qué hacemos en la partida?", fase: 'desconnectat',
          fa: "En grups de 4, reparteix el paquet de targetes. Per torns, cadascú en treu una, la llegeix i el grup decideix si és «Normal», «Alarma» o «Pregunto a un adult», i què faria. Al final, cada grup explica una targeta difícil.|En grupos de 4, reparte el paquete de tarjetas. Por turnos, cada uno saca una, la lee y el grupo decide si es «Normal», «Alarma» o «Pregunto a un adulto», y qué haría. Al final, cada grupo explica una tarjeta difícil.",
          diu: ["Si és alarma, què fem? (Silenciar, bloquejar, denunciar i explicar-ho.)|Si es alarma, ¿qué hacemos? (Silenciar, bloquear, denunciar y contarlo.)",
            "Comprar gemmes és dolent? (No, però es fa amb un adult.)|¿Comprar gemas es malo? (No, pero se hace con un adulto.)",
            "I si ja has contestat? (Sempre pots parar i demanar ajuda.)|¿Y si ya has contestado? (Siempre puedes parar y pedir ayuda.)"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: el repàs, la història, les cinc targetes, «Normal o alarma?», la botiga de Galàxia Blocs, la pregunta de les gemmes i el xat amb l'xX_Ombra_Xx. Fixa't en qui tria camins arriscats al xat i, sense assenyalar, comenta després el final.|Cada alumno/a hace la sesión hasta la pausa activa: el repaso, la historia, las cinco tarjetas, «¿Normal o alarma?», la tienda de Galàxia Blocs, la pregunta de las gemas y el chat con xX_Ombra_Xx. Fíjate en quién elige caminos arriesgados en el chat y, sin señalar, comenta después el final.",
          diu: ["Quina trampa de la botiga us ha sorprès més?|¿Qué trampa de la tienda os ha sorprendido más?",
            "Què ha passat quan heu dit que no a l'xX_Ombra_Xx?|¿Qué ha pasado cuando le habéis dicho que no a xX_Ombra_Xx?",
            "Si mai us passa de veritat, a qui ho explicareu?|Si alguna vez os pasa de verdad, ¿a quién se lo contaréis?"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 12, t: "Reptes i el perfil segur|Retos y el perfil seguro", fase: 'ordinador',
          fa: "Continuen amb els reptes (ho faig o pregunto?, ordenar què fer si t'insulten al xat de veu, PEGI 16 i la caixa sorpresa) i configuren el perfil de la Lluna. En el perfil, el xat de veu i els missatges privats poden anar a «Amics» o a «Només jo»: totes dues respostes són bones.|Siguen con los retos (¿lo hago o pregunto?, ordenar qué hacer si te insultan en el chat de voz, PEGI 16 y la caja sorpresa) y configuran el perfil de Lluna. En el perfil, el chat de voz y los mensajes privados pueden ir a «Amigos» o a «Solo yo»: las dos respuestas son buenas.",
          diu: ["Per què instal·lar un videojoc nou és de «pregunto abans»?|¿Por qué instalar un videojuego nuevo es de «pregunto antes»?",
            "Què fem primer si algú ens insulta? (Protegir-nos: silenciar.)|¿Qué hacemos primero si alguien nos insulta? (Protegernos: silenciar.)",
            "Qui ha de poder parlar-vos al xat de veu?|¿Quién tiene que poder hablaros en el chat de voz?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: el perfil de la Lluna (i «El pacte de la partida», per a casa).|«Retos» y el paso «Crea»: el perfil de Lluna (y «El pacto de la partida», para casa).", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu el resum i fes el tiquet de sortida. Que facin les preguntes finals i com s'han sentit. Explica «El pacte de la partida» per fer a casa i proposa'ls ensenyar el seu videojoc preferit a la família.|Repasad el resumen y haz el ticket de salida. Que hagan las preguntas finales y cómo se han sentido. Explica «El pacto de la partida» para hacer en casa y propónles enseñar su videojuego favorito a la familia.",
          diu: ["Digueu un senyal d'alarma al xat d'una partida.|Decid una señal de alarma en el chat de una partida.",
            "Per què les compres es fan amb un adult?|¿Por qué las compras se hacen con un adulto?",
            "I recordeu: no és culpa vostra, i explicar-ho sempre ajuda.|Y recordad: no es culpa vuestra, y contarlo siempre ayuda."],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si algú fa molt de temps que el coneix a la partida, ja no és un desconegut.|Piensa que, si hace mucho tiempo que alguien le conoce en la partida, ya no es un desconocido.",
          "Recorda la regla de d1-2: si ni tu ni la teva família el coneixeu en persona, continua sent un desconegut.|Recuerda la regla de d1-2: si ni tú ni tu familia lo conocéis en persona, sigue siendo un desconocido."],
        ["Creu que les gemmes són «de mentida» i no costen res.|Cree que las gemas son «de mentira» y no cuestan nada.",
          "Fes el càlcul amb un exemple inventat: si 100 gemmes costen 1 euro, quant costa la caixa de 500?|Haz el cálculo con un ejemplo inventado: si 100 gemas cuestan 1 euro, ¿cuánto cuesta la caja de 500?"],
        ["Pensa que la propera caixa sorpresa «segur» que li sortirà el que vol.|Piensa que la próxima caja sorpresa «seguro» que le saldrá lo que quiere.",
          "Com en una loteria, cada caixa és una sorpresa nova: haver-ne obert moltes no fa que la següent sigui millor.|Como en una lotería, cada caja es una sorpresa nueva: haber abierto muchas no hace que la siguiente sea mejor."],
        ["Respon als insults amb més insults «per defensar-se».|Responde a los insultos con más insultos «para defenderse».",
          "Torna a l'ordre del repte 2: primer protegir-se (silenciar), després guardar una prova, bloquejar, denunciar i explicar-ho.|Vuelve al orden del reto 2: primero protegerse (silenciar), después guardar una prueba, bloquear, denunciar y contarlo."],
        ["Té por d'explicar-ho a casa perquè li prendran el videojoc.|Tiene miedo de contarlo en casa porque le quitarán el videojuego.",
          "Valida la por i explica que els adults volen ajudar. Proposa el pacte de la partida: si s'explica, es busca una solució junts.|Valida el miedo y explica que los adultos quieren ayudar. Propón el pacto de la partida: si se cuenta, se busca una solución juntos."]
      ],
      diff: {
        mes: "Per anar més enllà: amb preus inventats (100 gemmes = 1 euro), calcular quants diners de veritat costarien cinc caixes sorpresa i comparar-ho amb una cosa del món real; o dissenyar una botiga de videojoc «honesta», sense trampes.|Para ir más allá: con precios inventados (100 gemas = 1 euro), calcular cuánto dinero de verdad costarían cinco cajas sorpresa y compararlo con algo del mundo real; o diseñar una tienda de videojuego «honesta», sin trampas.",
        menys: "A les targetes en grup, donar només dues categories (Normal / Alarma) i fer la de «Pregunto a un adult» tots junts. A l'app, fer el xat en parella llegint les opcions en veu alta.|En las tarjetas en grupo, dar solo dos categorías (Normal / Alarma) y hacer la de «Pregunto a un adulto» todos juntos. En la app, hacer el chat en pareja leyendo las opciones en voz alta."
      },
      aval: {
        ticket: ["Digues un senyal d'alarma al xat d'una partida i què fas.|Di una señal de alarma en el chat de una partida y qué haces.",
          "Explica per què una caixa sorpresa s'assembla a una loteria.|Explica por qué una caja sorpresa se parece a una lotería."],
        rubric: [
          ["Desconeguts i senyals d'alarma|Desconocidos y señales de alarma", "Reconeix regals, «una altra app», secrets i peticions de dades com a alarma i sap què fer.|Reconoce regalos, «otra app», secretos y peticiones de datos como alarma y sabe qué hacer.", "En reconeix alguns, però dubta què fer.|Reconoce algunos, pero duda qué hacer."],
          ["Compres i caixes sorpresa|Compras y cajas sorpresa", "Explica que les gemmes són diners de veritat, detecta les trampes de la botiga i pregunta abans de comprar.|Explica que las gemas son dinero de verdad, detecta las trampas de la tienda y pregunta antes de comprar.", "Sap que cal preguntar, però no detecta les trampes.|Sabe que hay que preguntar, pero no detecta las trampas."],
          ["Configuració i PEGI|Configuración y PEGI", "Configura un perfil segur i interpreta l'etiqueta PEGI.|Configura un perfil seguro e interpreta la etiqueta PEGI.", "Configura part del perfil amb ajuda.|Configura parte del perfil con ayuda."]
        ]
      },
      casa: "A casa, podeu fer junts «El pacte de la partida»: trieu els videojocs mirant l'etiqueta PEGI, configureu qui pot parlar a l'infant al xat (millor només amics de veritat), activeu el bloqueig de compres i acordeu què fareu si algú el molesta. I feu una partida en família: que l'infant us ensenyi el seu videojoc preferit. Si alguna vegada us explica alguna cosa que li ha passat, agraïu-li la confiança i busqueu la solució junts, sense treure-li de cop el videojoc.|En casa, podéis hacer juntos «El pacto de la partida»: elegid los videojuegos mirando la etiqueta PEGI, configurad quién puede hablar al niño o la niña en el chat (mejor solo amigos de verdad), activad el bloqueo de compras y acordad qué haréis si alguien le molesta. Y haced una partida en familia: que os enseñe su videojuego favorito. Si alguna vez os cuenta algo que le ha pasado, agradecedle la confianza y buscad la solución juntos, sin quitarle de golpe el videojuego.",
      faq: [
        ["Les caixes sorpresa són il·legals?|¿Las cajas sorpresa son ilegales?", "Depèn del país i la normativa canvia. A la sessió no en parlem com a una qüestió de lleis, sinó d'entendre que es paga sense saber què hi haurà i que poden enganxar.|Depende del país y la normativa cambia. En la sesión no hablamos de ello como una cuestión de leyes, sino de entender que se paga sin saber qué habrá dentro y que pueden enganchar."],
        ["Què vol dir l'etiqueta PEGI?|¿Qué quiere decir la etiqueta PEGI?", "És el sistema europeu d'edats per a videojocs: 3, 7, 12, 16 o 18, i unes icones que avisen del contingut (violència, por, llenguatge…) i de les compres dins del videojoc.|Es el sistema europeo de edades para videojuegos: 3, 7, 12, 16 o 18, y unos iconos que avisan del contenido (violencia, miedo, lenguaje…) y de las compras dentro del videojuego."],
        ["Un alumne diu que ja fa partides amb desconeguts cada dia.|Un alumno dice que ya hace partidas con desconocidos cada día.", "No el renyis: valora que ho expliqui i dona-li les eines (parlar només de la partida, sense dades, i explicar-ho si passa alguna cosa). Si et preocupa, parla-ho amb la família.|No le riñas: valora que lo cuente y dale las herramientas (hablar solo de la partida, sin datos, y contarlo si pasa algo). Si te preocupa, háblalo con la familia."],
        ["Per què no posem el nom de videojocs reals?|¿Por qué no ponemos el nombre de videojuegos reales?", "Perquè la sessió serveix per a qualsevol videojoc i no fa publicitat de cap. Galàxia Blocs és inventat.|Porque la sesión sirve para cualquier videojuego y no hace publicidad de ninguno. Galàxia Blocs es inventado."],
        ["I si un alumne/a ha gastat diners sense permís?|¿Y si un alumno/a ha gastado dinero sin permiso?", "Que ho expliqui a casa: no és culpa seva, les botigues estan fetes perquè sigui fàcil. La família pot activar el bloqueig de compres.|Que lo cuente en casa: no es culpa suya, las tiendas están hechas para que sea fácil. La familia puede activar el bloqueo de compras."]
      ],
      tec: [
        ["A la botiga de Galàxia Blocs no troben la quarta trampa.|En la tienda de Galàxia Blocs no encuentran la cuarta trampa.", "Que mirin a sota de tot: la frase dels amics que ja tenen el drac també és una trampa.|Que miren abajo del todo: la frase de los amigos que ya tienen el dragón también es una trampa."],
        ["Al perfil de la Lluna, el xat de veu surt en vermell.|En el perfil de Lluna, el chat de voz sale en rojo.", "«Tothom» no és una bona opció: que triïn «Amics» o «Només jo» i ho tornin a comprovar.|«Todo el mundo» no es una buena opción: que elijan «Amigos» o «Solo yo» y lo vuelvan a comprobar."],
        ["Al xat amb l'xX_Ombra_Xx han triat un camí arriscat.|En el chat con xX_Ombra_Xx han elegido un camino arriesgado.", "El final explica què fer i que no és culpa seva. Poden tornar a fer el pas per provar el camí segur.|El final explica qué hacer y que no es culpa suya. Pueden volver a hacer el paso para probar el camino seguro."],
        ["Volen saber on es configura el control parental del seu videojoc.|Quieren saber dónde se configura el control parental de su videojuego.", "Cada consola i app ho té en un lloc diferent: que ho busquin a casa amb un adult, al menú de configuració o de família.|Cada consola y app lo tiene en un sitio diferente: que lo busquen en casa con un adulto, en el menú de configuración o de familia."]
      ],
      seg: [
        "Si un infant explica que un adult desconegut li ha demanat fotos, li ha fet regals o li ha proposat parlar en privat, agraeix-li la confiança, digues-li que no és culpa seva, no li demanis detalls davant del grup i segueix el protocol del centre.|Si un niño o niña cuenta que un adulto desconocido le ha pedido fotos, le ha hecho regalos o le ha propuesto hablar en privado, agradécele la confianza, dile que no es culpa suya, no le pidas detalles delante del grupo y sigue el protocolo del centro.",
        "No demanis a l'alumnat noms d'usuari, contrasenyes ni captures dels seus videojocs reals.|No pidas al alumnado nombres de usuario, contraseñas ni capturas de sus videojuegos reales.",
        "Evita el to alarmista: les partides en línia poden ser una bona estona. L'objectiu és saber protegir-se i demanar ajuda.|Evita el tono alarmista: las partidas en línea pueden ser un buen rato. El objetivo es saber protegerse y pedir ayuda.",
        "Tingues a mà el 116 111 (ajuda a la infància, gratuït i confidencial) i el 017 (ajuda en ciberseguretat, també per a famílies i docents).|Ten a mano el 116 111 (ayuda a la infancia, gratuito y confidencial) y el 017 (ayuda en ciberseguridad, también para familias y docentes)."
      ],
      extra: [
        "Matemàtiques: amb preus inventats, convertir gemmes en euros i calcular quant costen diverses caixes sorpresa.|Matemáticas: con precios inventados, convertir gemas en euros y calcular cuánto cuestan varias cajas sorpresa.",
        "Llengua: escriure les «normes de bona partida» d'un videojoc inventat de la classe (com parlem, com ens ajudem, què fem si algú molesta).|Lengua: escribir las «normas de buena partida» de un videojuego inventado de la clase (cómo hablamos, cómo nos ayudamos, qué hacemos si alguien molesta).",
        "Per als grans: debat sobre per què els videojocs gratuïts posen botigues i caixes sorpresa (com guanyen diners?).|Para los mayores: debate sobre por qué los videojuegos gratuitos ponen tiendas y cajas sorpresa (¿cómo ganan dinero?)."
      ],
      trans: [
        "Sessió d1-2: el xat de l'Estel_Blau_11 era a Galàxia Blocs; aquí s'hi afegeixen el xat de veu i «una altra app».|Sesión d1-2: el chat de Estel_Blau_11 era en Galàxia Blocs; aquí se añaden el chat de voz y «otra app».",
        "Sessió d2-3: silenciar, bloquejar, denunciar i explicar-ho ja eren els passos davant del ciberassetjament. Sessió d3-1: les presses i les ratxes tornen a la botiga.|Sesión d2-3: silenciar, bloquear, denunciar y contarlo ya eran los pasos ante el ciberacoso. Sesión d3-1: las prisas y las rachas vuelven en la tienda.",
        "Matemàtiques (el valor dels diners), tutoria (dir que no i demanar ajuda) i consum responsable.|Matemáticas (el valor del dinero), tutoría (decir que no y pedir ayuda) y consumo responsable."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Videojocs en línia|Videojuegos en línea", x: "Avui aprendrem a gaudir de les partides en línia sense que ningú se n'aprofiti.|Hoy aprenderemos a disfrutar de las partidas en línea sin que nadie se aproveche.",
          nota: "Comença pel que té de bo: crear, col·laborar, passar-ho bé amb amics.|Empieza por lo que tiene de bueno: crear, colaborar, pasarlo bien con amigos." },
        { id: 's2', k: 'pregunta', t: "Què us agrada de les partides en línia?|¿Qué os gusta de las partidas en línea?", punts: ["Amb qui les feu?|¿Con quién las hacéis?", "Parleu amb altra gent mentre feu la partida?|¿Habláis con otra gente mientras hacéis la partida?", "Heu vist mai una botiga dins un videojoc?|¿Habéis visto alguna vez una tienda dentro de un videojuego?"],
          nota: "Sense marques ni noms d'usuari: només idees.|Sin marcas ni nombres de usuario: solo ideas." },
        { id: 's3', k: 'media', t: "Senyals d'alarma al xat|Señales de alarma en el chat", x: "Regals, «parlem per una altra app» i «no ho diguis».|Regalos, «hablemos por otra app» y «no lo digas».", media: OMBRA,
          nota: "Pregunta per què vol canviar d'app: on ningú no ho veu, ningú no pot ajudar. Bloquejar i explicar-ho.|Pregunta por qué quiere cambiar de app: donde nadie lo ve, nadie puede ayudar. Bloquear y contarlo." },
        { id: 's4', k: 'concepte', t: "A la partida, es parla de la partida|En la partida, se habla de la partida", pic: 'img/ment/rfx.webp',
          punts: ["Ni el nom complet, ni l'escola, ni on vius.|Ni el nombre completo, ni el colegio, ni dónde vives.", "Ni fotos, ni càmera, ni una altra app.|Ni fotos, ni cámara, ni otra app.", "Silenciar, bloquejar, denunciar i explicar-ho.|Silenciar, bloquear, denunciar y contarlo."],
          nota: "Recorda que no és culpa de l'infant si algú l'enganya: hi ha persones que saben fer-ho molt bé.|Recuerda que no es culpa del niño o la niña si alguien le engaña: hay personas que saben hacerlo muy bien." },
        { id: 's5', k: 'media', t: "La botiga de Galàxia Blocs|La tienda de Galàxia Blocs", x: "Quines trampes hi veieu?|¿Qué trampas veis?", media: SHOP,
          nota: "El compte enrere, la caixa sorpresa i «els teus amics ja el tenen». A l'app hi haurà una quarta trampa.|La cuenta atrás, la caja sorpresa y «tus amigos ya lo tienen». En la app habrá una cuarta trampa." },
        { id: 's6', k: 'anim', t: "Com una loteria|Como una lotería", anim: 'd3caixa', x: "Les gemmes costen diners de veritat i no saps què hi haurà.|Las gemas cuestan dinero de verdad y no sabes qué habrá dentro.",
          nota: "Fes el càlcul amb preus inventats: si 100 gemmes són 1 euro, la caixa de 500 són 5 euros.|Haz el cálculo con precios inventados: si 100 gemas son 1 euro, la caja de 500 son 5 euros." },
        { id: 's7', k: 'concepte', t: "L'etiqueta PEGI|La etiqueta PEGI", pic: 'img/ment/sim.webp',
          punts: ["3, 7, 12, 16 o 18: l'edat mínima recomanada.|3, 7, 12, 16 o 18: la edad mínima recomendada.", "Icones: violència, por, llenguatge… i compres dins del videojoc.|Iconos: violencia, miedo, lenguaje… y compras dentro del videojuego.", "Es mira en família abans d'instal·lar.|Se mira en familia antes de instalar."],
          nota: "Pots dibuixar a la pissarra un requadre amb un número gran, com les etiquetes de les capses.|Puedes dibujar en la pizarra un recuadro con un número grande, como las etiquetas de las cajas." },
        { id: 's8', k: 'activitat', t: "Què fem a la partida?|¿Qué hacemos en la partida?", timer: 12,
          punts: ["En grups de 4, traieu una targeta per torns.|En grupos de 4, sacad una tarjeta por turnos.", "Decidiu: Normal, Alarma o Pregunto a un adult.|Decidid: Normal, Alarma o Pregunto a un adulto.", "I què faríeu?|¿Y qué haríais?"],
          nota: "Passa pels grups i demana sempre el «què faríeu», no només la categoria.|Pasa por los grupos y pide siempre el «qué haríais», no solo la categoría." },
        { id: 's9', k: 'concepte', t: "Els quatre botons|Los cuatro botones", pic: 'img/chars/numi-ulleres.webp',
          punts: ["🔇 Silenciar|🔇 Silenciar", "🚫 Bloquejar|🚫 Bloquear", "🚩 Denunciar|🚩 Denunciar", "🤝 Explicar-ho a un adult|🤝 Contárselo a un adulto"],
          nota: "Deixa-la projectada mentre treballen en grup.|Déjala proyectada mientras trabajan en grupo." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Videojocs en línia».|Abre la sesión «Videojuegos en línea».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Al xat, pensa abans de tocar.|En el chat, piensa antes de tocar."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: partida segura|Retos: partida segura", timer: 9,
          punts: ["Ho faig o pregunto abans?|¿Lo hago o pregunto antes?", "Si t'insulten al xat de veu.|Si te insultan en el chat de voz.", "PEGI 16 i la caixa sorpresa.|PEGI 16 y la caja sorpresa."],
          nota: "Comenteu per què «bloquejar algú que em molesta» és de «ho faig»: protegir-se sempre es pot fer.|Comentad por qué «bloquear a alguien que me molesta» es de «lo hago»: protegerse siempre se puede." },
        { id: 's12', k: 'activitat', t: "Crea: el perfil de la Lluna|Crea: el perfil de Lluna", timer: 3,
          punts: ["Qui la pot sentir al xat de veu?|¿Quién la puede oír en el chat de voz?", "Qui li pot enviar missatges privats?|¿Quién le puede enviar mensajes privados?", "El nom real, l'edat i la ubicació, per a ningú.|El nombre real, la edad y la ubicación, para nadie."],
          nota: "Les opcions «Amics» i «Només jo» són bones per al xat de veu.|Las opciones «Amigos» y «Solo yo» son buenas para el chat de voz." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["A la partida, es parla de la partida.|En la partida, se habla de la partida.", "Regals, una altra app i secrets: alarma.|Regalos, otra app y secretos: alarma.", "Les gemmes són diners de veritat: compres, amb un adult.|Las gemas son dinero de verdad: compras, con un adulto.", "PEGI: l'edat recomanada.|PEGI: la edad recomendada."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues un senyal d'alarma al xat d'una partida i què fas.|Di una señal de alarma en el chat de una partida y qué haces.", "Explica per què una caixa sorpresa s'assembla a una loteria.|Explica por qué una caja sorpresa se parece a una lotería."],
          nota: "Pot ser oral, per torns, o en un paper.|Puede ser oral, por turnos, o en un papel." },
        { id: 's15', k: 'concepte', t: "Per a casa: el pacte de la partida|Para casa: el pacto de la partida", pic: 'img/ment/cor.webp',
          punts: ["Trieu els videojocs mirant l'etiqueta PEGI.|Elegid los videojuegos mirando la etiqueta PEGI.", "Configureu el xat i el bloqueig de compres.|Configurad el chat y el bloqueo de compras.", "I feu una partida en família!|¡Y haced una partida en familia!"],
          nota: "Insisteix que explicar un problema no ha de voler dir quedar-se sense videojoc.|Insiste en que contar un problema no tiene que querer decir quedarse sin videojuego." }
      ],
      print: [
        { id: 'p1', t: "Què fem a la partida?|¿Qué hacemos en la partida?", k: 'targetes',
          intro: "Un paquet per grup de 4. Retalleu les targetes i poseu tres rètols a la taula: «Normal», «Alarma» i «Pregunto a un adult». Totes les situacions són inventades.|Un paquete por grupo de 4. Recortad las tarjetas y poned tres carteles en la mesa: «Normal», «Alarma» y «Pregunto a un adulto». Todas las situaciones son inventadas.",
          items: [
            { t: "«Bona partida! Fins demà» 👋|«¡Buena partida! Hasta mañana» 👋", n: 1 },
            { t: "«Quants anys tens? On vius?» 🏠|«¿Cuántos años tienes? ¿Dónde vives?» 🏠", n: 1 },
            { t: "«Et regalo gemmes si encens la càmera» 📷|«Te regalo gemas si enciendes la cámara» 📷", n: 1 },
            { t: "«Parlem per una altra app, que aquí ens vigilen» 📲|«Hablemos por otra app, que aquí nos vigilan» 📲", n: 1 },
            { t: "Vols comprar un paquet de gemmes 💎|Quieres comprar un paquete de gemas 💎", n: 1 },
            { t: "Una caixa sorpresa costa 500 gemmes 🎁|Una caja sorpresa cuesta 500 gemas 🎁", n: 1 },
            { t: "Algú t'insulta al xat de veu 🎙️|Alguien te insulta en el chat de voz 🎙️", n: 1 },
            { t: "Un company de classe t'ajuda a fer un pont 🌉|Un compañero de clase te ayuda a hacer un puente 🌉", n: 1 },
            { t: "Vols instal·lar un videojoc PEGI 16 🔞|Quieres instalar un videojuego PEGI 16 🔞", n: 1 },
            { t: "«No ho diguis als de casa, eh?» 🤫|«No se lo digas a los de casa, ¿eh?» 🤫", n: 1 },
            { t: "Et demanen amistat des d'un perfil desconegut 👤|Te piden amistad desde un perfil desconocido 👤", n: 1 },
            { t: "L'equip et felicita perquè heu guanyat 🏆|El equipo te felicita porque habéis ganado 🏆", n: 1 }
          ] }
      ]
    },

    /* ---------- Sessió 3 · Qui ho ha fet? ---------- */
    'd3-3': {
      intro: "Tercera sessió de la unitat 3. Després de veure a la unitat 2 què és una IA i com corren els bulos, l'alumnat descobreix que una IA també pot fer imatges i veus que semblen reals: aprèn a buscar pistes, però sobretot a mirar la font i a comprovar-ho per un altre camí (per exemple, trucant a la persona). Entén que fer vídeos falsificats d'algú real fa mal. Després treballa l'autoria: tot el que algú ha creat té autor o autora, i per fer-ho servir cal permís o una llicència (com Creative Commons) i dir de qui és. Acaba amb la cerca guiada: paraules clau, anuncis als resultats i comparar fonts.|Tercera sesión de la unidad 3. Después de ver en la unidad 2 qué es una IA y cómo corren los bulos, el alumnado descubre que una IA también puede hacer imágenes y voces que parecen reales: aprende a buscar pistas, pero sobre todo a mirar la fuente y a comprobarlo por otro camino (por ejemplo, llamando a la persona). Entiende que hacer vídeos falsos de alguien real hace daño. Después trabaja la autoría: todo lo que alguien ha creado tiene autor o autora, y para usarlo hace falta permiso o una licencia (como Creative Commons) y decir de quién es. Termina con la búsqueda guiada: palabras clave, anuncios en los resultados y comparar fuentes.",
      claus: [
        "Una IA pot crear imatges, vídeos i veus que semblen reals; de vegades hi ha pistes (mans, lletres), però la millor pista és la font: qui ho diu i qui més ho explica.|Una IA puede crear imágenes, vídeos y voces que parecen reales; a veces hay pistas (manos, letras), pero la mejor pista es la fuente: quién lo dice y quién más lo cuenta.",
        "Si un àudio o missatge de «la família» demana codis, diners o secrets amb presses, es comprova per un altre camí (trucant al telèfon de sempre). Fer vídeos falsificats d'algú real fa mal.|Si un audio o mensaje de «la familia» pide códigos, dinero o secretos con prisas, se comprueba por otro camino (llamando al teléfono de siempre). Hacer vídeos falsos de alguien real hace daño.",
        "Tot el que algú ha creat té autor o autora: cal permís o una llicència que ho permeti (Creative Commons) i dir de qui és. Les fotos on surten persones necessiten el seu permís.|Todo lo que alguien ha creado tiene autor o autora: hace falta permiso o una licencia que lo permita (Creative Commons) y decir de quién es. Las fotos donde salen personas necesitan su permiso.",
        "Per buscar: poques paraules clau, saltar els anuncis, comparar dues o tres fonts fiables i apuntar-les. Moltes apps d'IA tenen una edat mínima (sovint 13 anys o més).|Para buscar: pocas palabras clave, saltarse los anuncios, comparar dos o tres fuentes fiables y apuntarlas. Muchas apps de IA tienen una edad mínima (a menudo 13 años o más)."
      ],
      prev: [
        "Sessió d2-1: les tres preguntes del caçador/a de bulos i les fonts fiables.|Sesión d2-1: las tres preguntas del cazador/a de bulos y las fuentes fiables.",
        "Sessió d2-2: una IA aprèn d'exemples i les seves respostes es comproven.|Sesión d2-2: una IA aprende de ejemplos y sus respuestas se comprueban.",
        "Sessió d1-3: la foto és de qui hi surt (demanar permís).|Sesión d1-3: la foto es de quien sale (pedir permiso)."
      ],
      obj: [
        "L'alumne/a explica que una IA pot fer imatges i veus que semblen reals i aplica pistes i preguntes per decidir si s'hi pot fiar.|El alumno/a explica que una IA puede hacer imágenes y voces que parecen reales y aplica pistas y preguntas para decidir si se puede fiar.",
        "L'alumne/a sap comprovar per un altre camí un missatge o àudio estrany que sembla de la família.|El alumno/a sabe comprobar por otro camino un mensaje o audio raro que parece de la familia.",
        "L'alumne/a decideix si pot fer servir una obra (meva, amb llicència o amb permís) i cita correctament l'autor o autora.|El alumno/a decide si puede usar una obra (mía, con licencia o con permiso) y cita correctamente al autor o autora.",
        "L'alumne/a fa una cerca amb paraules clau, reconeix els anuncis i tria fonts fiables.|El alumno/a hace una búsqueda con palabras clave, reconoce los anuncios y elige fuentes fiables."
      ],
      comp: [
        "Competència digital (CD1): buscar informació amb paraules clau i valorar-ne la fiabilitat|Competencia digital (CD1): buscar información con palabras clave y valorar su fiabilidad",
        "Competència digital (CD2): crear contingut respectant l'autoria, les llicències i citant les fonts|Competencia digital (CD2): crear contenido respetando la autoría, las licencias y citando las fuentes",
        "Competència digital (CD4): protegir-se d'enganys fets amb IA (imatges i veus falses)|Competencia digital (CD4): protegerse de engaños hechos con IA (imágenes y voces falsas)",
        "Competència ciutadana: respecte per la imatge i la feina dels altres|Competencia ciudadana: respeto por la imagen y el trabajo de los demás"
      ],
      vocab: [
        ["Imatge generada amb IA|Imagen generada con IA", "Una imatge que no és una foto: l'ha feta un programa a partir d'una descripció.|Una imagen que no es una foto: la ha hecho un programa a partir de una descripción."],
        ["Veu clonada|Voz clonada", "Una veu feta amb IA que imita la d'una persona real.|Una voz hecha con IA que imita la de una persona real."],
        ["Vídeo falsificat (deepfake)|Ultrafalso (deepfake)", "Un vídeo, foto o àudio fet amb IA perquè sembli que algú diu o fa el que no ha fet.|Un vídeo, foto o audio hecho con IA para que parezca que alguien dice o hace lo que no ha hecho."],
        ["Autor o autora|Autor o autora", "La persona que ha creat una obra (un dibuix, una foto, una cançó, un text).|La persona que ha creado una obra (un dibujo, una foto, una canción, un texto)."],
        ["Llicència Creative Commons|Licencia Creative Commons", "Un permís que l'autor/a dona per fer servir la seva obra amb unes condicions, com dir de qui és (CC BY).|Un permiso que el autor/a da para usar su obra con unas condiciones, como decir de quién es (CC BY)."],
        ["Paraula clau|Palabra clave", "Una paraula important que escrivim al cercador per trobar el que busquem.|Una palabra importante que escribimos en el buscador para encontrar lo que buscamos."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Qui ho ha fet?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Quién lo ha hecho?»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa «Detectius de fonts» (una per parella), fulls blancs i colors|La ficha «Detectives de fuentes» (una por pareja), hojas blancas y colores"
        ],
        imprimir: ["Detectius de fonts (imprimible 1): una fitxa per parella|Detectives de fuentes (imprimible 1): una ficha por pareja"],
        prep: [
          "Imprimir una fitxa per parella.|Imprimir una ficha por pareja.",
          "Si l'escola ho permet, preparar una cerca projectada amb un cercador per a infants i un tema de ciències (per exemple, els ocells del riu).|Si el colegio lo permite, preparar una búsqueda proyectada con un buscador para niños y un tema de ciencias (por ejemplo, las aves del río).",
          "Revisar les normes del centre sobre l'ús d'eines d'IA a l'aula i les edats mínimes de les apps.|Revisar las normas del centro sobre el uso de herramientas de IA en el aula y las edades mínimas de las apps."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: un tauró a la plaça?|Bienvenida: ¿un tiburón en la plaza?", fase: 'inici',
          fa: "Projecta la publicació del tauró i pregunta si s'ho creuen. Recull les pistes que diuen i recorda les tres preguntes del caçador/a de bulos. Explica que avui veurem que una IA pot fer imatges i veus que semblen reals.|Proyecta la publicación del tiburón y pregunta si se lo creen. Recoge las pistas que dicen y recuerda las tres preguntas del cazador/a de bulos. Explica que hoy veremos que una IA puede hacer imágenes y voces que parecen reales.",
          diu: ["Us ho creieu? Per què?|¿Os lo creéis? ¿Por qué?",
            "Quines preguntes ens fèiem davant d'un bulo?|¿Qué preguntas nos hacíamos ante un bulo?",
            "I si la foto no l'ha feta ningú amb una càmera?|¿Y si la foto no la ha hecho nadie con una cámara?"],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Imatges i veus amb IA, i qui és l'autor|Imágenes y voces con IA, y quién es el autor", fase: 'teoria',
          fa: "Amb l'animació de la veu, explica que una IA pot imitar la veu d'una persona i que es comprova trucant al telèfon de sempre. Parla dels vídeos falsificats: fer-ne d'algú real fa mal. Després presenta l'autoria i les llicències Creative Commons amb l'animació del dibuix de la Laia, i com se cita una obra.|Con la animación de la voz, explica que una IA puede imitar la voz de una persona y que se comprueba llamando al teléfono de siempre. Habla de los vídeos falsos: hacerlos de alguien real hace daño. Después presenta la autoría y las licencias Creative Commons con la animación del dibujo de Laia, y cómo se cita una obra.",
          diu: ["Com podríeu saber si un àudio és de veritat de l'àvia?|¿Cómo podríais saber si un audio es de verdad de la abuela?",
            "Per què fer un vídeo fals d'un company no és una broma?|¿Por qué hacer un vídeo falso de un compañero no es una broma?",
            "Si una cosa és a internet, és de tothom? (No: té autor o autora.)|Si algo está en internet, ¿es de todo el mundo? (No: tiene autor o autora.)"],
          slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "Detectius de fonts|Detectives de fuentes", fase: 'desconnectat',
          fa: "En parelles, amb la fitxa: primer escriuen les paraules clau per a tres preguntes (com trobarien la informació?); després decideixen, per a quatre obres, si les poden fer servir i com les citarien. Si podeu, feu una cerca projectada amb tot el grup: senyaleu l'anunci, compareu dos resultats fiables i apunteu la font.|En parejas, con la ficha: primero escriben las palabras clave para tres preguntas (¿cómo encontrarían la información?); después deciden, para cuatro obras, si las pueden usar y cómo las citarían. Si podéis, haced una búsqueda proyectada con todo el grupo: señalad el anuncio, comparad dos resultados fiables y apuntad la fuente.",
          diu: ["Quines són les paraules importants d'aquesta pregunta?|¿Cuáles son las palabras importantes de esta pregunta?",
            "Aquest resultat és un anunci? Com ho sabem?|¿Este resultado es un anuncio? ¿Cómo lo sabemos?",
            "Com escriuríeu el crèdit d'aquesta foto?|¿Cómo escribiríais el crédito de esta foto?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla (o una cerca projectada pel docent).|Ninguna: actividad sin pantalla (o una búsqueda proyectada por el docente).", org: "Per parelles|Por parejas" },
        { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la pausa activa: les preguntes de repàs, la història, les cinc targetes, «Ho pots fer servir?», la foto del tauró, la pregunta de la foto sense pistes i el missatge de veu de l'àvia Rosa.|Cada alumno/a hace la sesión hasta la pausa activa: las preguntas de repaso, la historia, las cinco tarjetas, «¿Lo puedes usar?», la foto del tiburón, la pregunta de la foto sin pistas y el mensaje de voz de la abuela Rosa.",
          diu: ["Quina pista de la foto del tauró us ha costat més?|¿Qué pista de la foto del tiburón os ha costado más?",
            "Per què no serveix preguntar per aquell mateix xat si és l'àvia?|¿Por qué no sirve preguntar por ese mismo chat si es la abuela?",
            "Una foto on surt un amic: per què cal el seu permís?|Una foto donde sale un amigo: ¿por qué hace falta su permiso?"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 12, t: "Reptes i la meva obra amb crèdits|Retos y mi obra con créditos", fase: 'ordinador',
          fa: "Continuen amb els reptes: els resultats de la cerca de la Mia, ordenar els passos per buscar amb cap, com se cita una foto amb llicència, l'edat de les apps d'IA i el vídeo falsificat d'un company. Després, a paper, fan «La meva obra, amb crèdits» (o la deixen per a casa si no hi ha temps).|Siguen con los retos: los resultados de la búsqueda de Mia, ordenar los pasos para buscar con cabeza, cómo se cita una foto con licencia, la edad de las apps de IA y el vídeo falso de un compañero. Después, en papel, hacen «Mi obra, con créditos» (o la dejan para casa si no hay tiempo).",
          diu: ["Per què el museu i l'ajuntament són bones fonts?|¿Por qué el museo y el ayuntamiento son buenas fuentes?",
            "Què li heu dit a la Jana sobre el xat d'IA?|¿Qué le habéis dicho a Jana sobre el chat de IA?",
            "Quina llicència posaríeu al vostre dibuix?|¿Qué licencia pondríais a vuestro dibujo?"],
          slides: ['s11', 's12'], app: "«Reptes» i el pas «Crea»: la meva obra, amb crèdits.|«Retos» y el paso «Crea»: mi obra, con créditos.", org: "Individual|Individual" },
        { min: 8, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repasseu el resum, fes el tiquet de sortida i deixa que facin les preguntes finals i com s'han sentit. Si hi ha temps, alguns alumnes ensenyen la seva obra amb els crèdits.|Repasad el resumen, haz el ticket de salida y deja que hagan las preguntas finales y cómo se han sentido. Si hay tiempo, algunos alumnos enseñan su obra con los créditos.",
          diu: ["Què feu si veieu una foto increïble i no sabeu si és d'una IA?|¿Qué hacéis si veis una foto increíble y no sabéis si es de una IA?",
            "Com es diu de qui és una foto?|¿Cómo se dice de quién es una foto?",
            "Quines tres coses fem per buscar amb cap?|¿Qué tres cosas hacemos para buscar con cabeza?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Pensa que, si una imatge no té cap pista estranya, segur que és real.|Piensa que, si una imagen no tiene ninguna pista rara, seguro que es real.",
          "Les IA milloren cada dia. Torna a les tres preguntes: qui ho diu, de quan és i qui més ho explica.|Las IA mejoran cada día. Vuelve a las tres preguntas: quién lo dice, de cuándo es y quién más lo cuenta."],
        ["Creu que tot el que és a internet es pot fer servir lliurement.|Cree que todo lo que está en internet se puede usar libremente.",
          "Recorda la targeta de l'autoria: hi ha un autor o autora. Busqueu junts una imatge amb llicència lliure i com es cita.|Recuerda la tarjeta de la autoría: hay un autor o autora. Buscad juntos una imagen con licencia libre y cómo se cita."],
        ["Escriu una pregunta llarga al cercador («quins ocells hi ha al riu del meu poble i què mengen»).|Escribe una pregunta larga en el buscador («qué pájaros hay en el río de mi pueblo y qué comen»).",
          "Demana-li que subratlli les paraules importants i que en provi només tres o quatre.|Pídele que subraye las palabras importantes y que pruebe solo tres o cuatro."],
        ["Fa clic al primer resultat sense mirar si és un anunci.|Hace clic en el primer resultado sin mirar si es un anuncio.",
          "Mireu junts l'etiqueta «Anunci» o «Patrocinat»: algú ha pagat perquè surti primer.|Mirad juntos la etiqueta «Anuncio» o «Patrocinado»: alguien ha pagado para que salga primero."],
        ["Diu que fer un vídeo fals d'un amic és «només una broma».|Dice que hacer un vídeo falso de un amigo es «solo una broma».",
          "Pregunta com se sentiria si el vídeo fos d'ell o d'ella i corregués per tota l'escola. Recorda el respecte de d2-3.|Pregunta cómo se sentiría si el vídeo fuera de él o de ella y corriera por todo el colegio. Recuerda el respeto de d2-3."]
      ],
      diff: {
        mes: "Per anar més enllà: buscar en una web de recursos lliures (amb un adult) una imatge amb llicència Creative Commons i escriure'n el crèdit complet; o comparar dues fonts sobre un mateix tema i explicar quina és més fiable i per què.|Para ir más allá: buscar en una web de recursos libres (con un adulto) una imagen con licencia Creative Commons y escribir su crédito completo; o comparar dos fuentes sobre un mismo tema y explicar cuál es más fiable y por qué.",
        menys: "A la fitxa, donar ja subratllades les paraules clau de la primera pregunta i fer la part de les obres amb només dues opcions (la puc fer servir / cal permís). A l'app, fer la cerca de la Mia en parella.|En la ficha, dar ya subrayadas las palabras clave de la primera pregunta y hacer la parte de las obras con solo dos opciones (la puedo usar / hace falta permiso). En la app, hacer la búsqueda de Mia en pareja."
      },
      aval: {
        ticket: ["Digues què fas si t'arriba un àudio estrany que sembla de la família.|Di qué haces si te llega un audio raro que parece de la familia.",
          "Escriu el crèdit d'una foto amb llicència: «Foto: … · llicència …».|Escribe el crédito de una foto con licencia: «Foto: … · licencia …»."],
        rubric: [
          ["Imatges i veus amb IA|Imágenes y voces con IA", "Aplica pistes i, sobretot, la font; comprova per un altre camí i no comparteix.|Aplica pistas y, sobre todo, la fuente; comprueba por otro camino y no comparte.", "Busca pistes a la imatge, però no pensa en la font.|Busca pistas en la imagen, pero no piensa en la fuente."],
          ["Autoria i llicències|Autoría y licencias", "Decideix si pot fer servir una obra i la cita correctament.|Decide si puede usar una obra y la cita correctamente.", "Sap que cal permís, però no sap com citar.|Sabe que hace falta permiso, pero no sabe cómo citar."],
          ["Cerca guiada|Búsqueda guiada", "Fa servir paraules clau, salta els anuncis i compara fonts fiables.|Usa palabras clave, se salta los anuncios y compara fuentes fiables.", "Busca amb frases llargues o es queda amb el primer resultat.|Busca con frases largas o se queda con el primer resultado."]
        ]
      },
      casa: "A casa, podeu parlar de les veus i imatges fetes amb IA: si mai arriba un àudio o missatge estrany «de la família» que demana codis o diners amb presses, es comprova trucant al telèfon de sempre. Algunes famílies acorden una paraula clau per a les emergències. També podeu fer junts una cerca sobre un tema que us agradi: poques paraules clau, saltar els anuncis i comparar dues fonts.|En casa, podéis hablar de las voces e imágenes hechas con IA: si alguna vez llega un audio o mensaje raro «de la familia» que pide códigos o dinero con prisas, se comprueba llamando al teléfono de siempre. Algunas familias acuerdan una palabra clave para las emergencias. También podéis hacer juntos una búsqueda sobre un tema que os guste: pocas palabras clave, saltarse los anuncios y comparar dos fuentes.",
      faq: [
        ["Com sabem segur si una imatge l'ha feta una IA?|¿Cómo sabemos seguro si una imagen la ha hecho una IA?", "Sovint no es pot saber segur només mirant-la. Per això el més important és la font: qui la publica, si altres fonts fiables ho expliquen i si té sentit.|A menudo no se puede saber seguro solo mirándola. Por eso lo más importante es la fuente: quién la publica, si otras fuentes fiables lo cuentan y si tiene sentido."],
        ["Què és una llicència Creative Commons?|¿Qué es una licencia Creative Commons?", "Un permís que l'autor/a dona per avançat perquè la seva obra es pugui fer servir amb unes condicions. La més senzilla, CC BY, només demana dir de qui és.|Un permiso que el autor/a da por adelantado para que su obra se pueda usar con unas condiciones. La más sencilla, CC BY, solo pide decir de quién es."],
        ["L'alumnat pot fer servir apps d'IA a classe?|¿El alumnado puede usar apps de IA en clase?", "Segons les normes del centre. Moltes apps d'IA tenen una edat mínima (sovint 13 anys o més) i demanen el permís de la família; per sota d'aquesta edat, es fan servir guiades per un adult.|Según las normas del centro. Muchas apps de IA tienen una edad mínima (a menudo 13 años o más) y piden el permiso de la familia; por debajo de esa edad, se usan guiadas por un adulto."],
        ["Una imatge feta amb IA té autor?|¿Una imagen hecha con IA tiene autor?", "És un tema que encara es debat. A classe, la regla és senzilla: si una IA t'ha ajudat, ho dius als crèdits.|Es un tema que aún se debate. En clase, la regla es sencilla: si una IA te ha ayudado, lo dices en los créditos."],
        ["I si ja han compartit una imatge falsa?|¿Y si ya han compartido una imagen falsa?", "No passa res: es pot avisar el grup que era falsa i, si feia mal a algú, demanar perdó i explicar-ho a un adult.|No pasa nada: se puede avisar al grupo de que era falsa y, si hacía daño a alguien, pedir perdón y contárselo a un adulto."]
      ],
      tec: [
        ["A la foto del tauró no troben la pista del rètol.|En la foto del tiburón no encuentran la pista del letrero.", "Que llegeixin a poc a poc la paraula entre cometes: les lletres estan barrejades.|Que lean despacio la palabra entre comillas: las letras están mezcladas."],
        ["Al pas «Ho pots fer servir?» hi ha tres calaixos i al mòbil es veuen petits.|En el paso «¿Lo puedes usar?» hay tres cajas y en el móvil se ven pequeñas.", "Es pot tocar el calaix en lloc d'arrossegar: la targeta hi va sola.|Se puede tocar la caja en lugar de arrastrar: la tarjeta va sola."],
        ["Volen fer una cerca real a l'ordinador.|Quieren hacer una búsqueda real en el ordenador.", "Si el centre ho permet, amb un cercador per a infants i guiada pel docent. L'app no surt a internet: la cerca de la Mia és una simulació.|Si el centro lo permite, con un buscador para niños y guiada por el docente. La app no sale a internet: la búsqueda de Mia es una simulación."],
        ["Al missatge de veu de l'àvia algú ha enviat el codi.|En el mensaje de voz de la abuela alguien ha enviado el código.", "El final explica què fer (explicar-ho, canviar la contrasenya, el 017) i que no és culpa seva. Comenteu-ho sense assenyalar.|El final explica qué hacer (contarlo, cambiar la contraseña, el 017) y que no es culpa suya. Comentadlo sin señalar."]
      ],
      seg: [
        "No facis cap demostració de crear imatges o veus d'una persona real (ni de l'alumnat, ni de docents, ni de famosos).|No hagas ninguna demostración de crear imágenes o voces de una persona real (ni del alumnado, ni de docentes, ni de famosos).",
        "Si algun infant explica que han fet una imatge o vídeo fals seu o d'un company, agraeix-li la confiança, no el facis circular i segueix el protocol del centre davant del ciberassetjament.|Si algún niño o niña cuenta que han hecho una imagen o vídeo falso suyo o de un compañero, agradécele la confianza, no lo hagas circular y sigue el protocolo del centro ante el ciberacoso.",
        "Les cerques reals, sempre amb un cercador adequat a l'edat i guiades per un adult.|Las búsquedas reales, siempre con un buscador adecuado a la edad y guiadas por un adulto."
      ],
      extra: [
        "Educació visual i plàstica: fer una exposició de dibuixos de la classe, cadascun amb el seu crèdit i la seva llicència.|Educación visual y plástica: hacer una exposición de dibujos de la clase, cada uno con su crédito y su licencia.",
        "Coneixement del medi: fer una cerca guiada sobre un tema de ciències i comparar dues fonts fiables.|Conocimiento del medio: hacer una búsqueda guiada sobre un tema de ciencias y comparar dos fuentes fiables.",
        "Per als grans: debat sobre si una imatge feta amb IA hauria de portar sempre un avís i qui és responsable si fa mal.|Para los mayores: debate sobre si una imagen hecha con IA debería llevar siempre un aviso y quién es responsable si hace daño."
      ],
      trans: [
        "Sessió d2-1: les tres preguntes del caçador/a de bulos ara serveixen per a les imatges fetes amb IA. Sessió d2-2: com aprèn una IA.|Sesión d2-1: las tres preguntas del cazador/a de bulos ahora sirven para las imágenes hechas con IA. Sesión d2-2: cómo aprende una IA.",
        "Sessió d1-3 i d2-3: la imatge de cadascú és seva i el respecte a la xarxa. Sessió d3-4: el cartell i el pacte porten crèdits.|Sesión d1-3 y d2-3: la imagen de cada uno es suya y el respeto en la red. Sesión d3-4: el cartel y el pacto llevan créditos.",
        "Llengua (citar fonts), coneixement del medi (cercar informació) i educació visual i plàstica (autoria).|Lengua (citar fuentes), conocimiento del medio (buscar información) y educación visual y plástica (autoría)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Qui ho ha fet?|¿Quién lo ha hecho?", x: "Imatges i veus fetes amb IA, l'autoria i com buscar amb cap.|Imágenes y voces hechas con IA, la autoría y cómo buscar con cabeza.",
          nota: "Presenta els tres temes amb una pregunta: qui ha fet el que veiem a internet?|Presenta los tres temas con una pregunta: ¿quién ha hecho lo que vemos en internet?" },
        { id: 's2', k: 'media', t: "Un tauró a la plaça?|¿Un tiburón en la plaza?", x: "Us ho creieu? Quines pistes hi veieu?|¿Os lo creéis? ¿Qué pistas veis?", media: SHARK,
          nota: "Presses, sis dits, un rètol amb lletres barrejades i cap font: és feta amb IA.|Prisas, seis dedos, un letrero con letras mezcladas y ninguna fuente: está hecha con IA." },
        { id: 's3', k: 'concepte', t: "La millor pista: la font|La mejor pista: la fuente", pic: 'img/ment/vel.webp',
          punts: ["Qui ho diu?|¿Quién lo dice?", "De quan és?|¿De cuándo es?", "Qui més ho explica?|¿Quién más lo cuenta?"],
          nota: "Les mateixes preguntes de la unitat 2. Les pistes de la imatge ajuden, però no sempre hi són.|Las mismas preguntas de la unidad 2. Las pistas de la imagen ayudan, pero no siempre están." },
        { id: 's4', k: 'anim', t: "Una veu també es pot copiar|Una voz también se puede copiar", anim: 'd3veu', x: "Si és estrany o amb presses, es comprova trucant a la persona.|Si es raro o con prisas, se comprueba llamando a la persona.",
          nota: "Explica que n'hi ha prou amb pocs segons de veu. La clau és comprovar-ho per un altre camí.|Explica que bastan pocos segundos de voz. La clave es comprobarlo por otro camino." },
        { id: 's5', k: 'concepte', t: "Vídeos falsificats|Ultrafalsos", pic: 'img/ment/par.webp',
          punts: ["Fets amb IA perquè sembli que algú diu o fa el que no ha fet.|Hechos con IA para que parezca que alguien dice o hace lo que no ha hecho.", "Fer-ne un d'algú real fa molt de mal.|Hacer uno de alguien real hace mucho daño.", "Si en veus un: no el comparteixis i explica-ho.|Si ves uno: no lo compartas y cuéntalo."],
          nota: "Connecta-ho amb l'espectador/a actiu/va de d2-3.|Conéctalo con el espectador/a activo/a de d2-3." },
        { id: 's6', k: 'anim', t: "Tot té un autor o autora|Todo tiene un autor o autora", anim: 'd3autor', x: "Permís o llicència, i dir de qui és.|Permiso o licencia, y decir de quién es.",
          nota: "Escriu a la pissarra un exemple de crèdit: «Foto: Laia Puig · llicència CC BY».|Escribe en la pizarra un ejemplo de crédito: «Foto: Laia Puig · licencia CC BY»." },
        { id: 's7', k: 'anim', t: "Buscar amb cap|Buscar con cabeza", anim: 'd3cerca', x: "Poques paraules clau, salta els anuncis i compara fonts.|Pocas palabras clave, sáltate los anuncios y compara fuentes.",
          nota: "Si podeu, mostra una cerca real en un cercador per a infants i senyala l'etiqueta d'anunci.|Si podéis, muestra una búsqueda real en un buscador para niños y señala la etiqueta de anuncio." },
        { id: 's8', k: 'activitat', t: "Detectius de fonts|Detectives de fuentes", timer: 12,
          punts: ["Subratlla les paraules clau de cada pregunta.|Subraya las palabras clave de cada pregunta.", "Per a cada obra: la puc fer servir? Com la cito?|Para cada obra: ¿la puedo usar? ¿Cómo la cito?", "Compareu les respostes amb una altra parella.|Comparad las respuestas con otra pareja."],
          nota: "Passa per les taules i demana que llegeixin en veu alta les paraules clau.|Pasa por las mesas y pide que lean en voz alta las palabras clave." },
        { id: 's9', k: 'concepte', t: "Com es fa un crèdit|Cómo se hace un crédito", pic: 'img/ment/sin.webp',
          punts: ["Què és: Foto, Dibuix, Música, Text…|Qué es: Foto, Dibujo, Música, Texto…", "De qui és: el nom de l'autor/a.|De quién es: el nombre del autor/a.", "La llicència, si en té.|La licencia, si tiene."],
          nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13,
          punts: ["Obre la sessió «Qui ho ha fet?».|Abre la sesión «¿Quién lo ha hecho?».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Al missatge de veu, pensa abans de tocar.|En el mensaje de voz, piensa antes de tocar."],
          nota: "Avisa quan arribin a la pausa activa per fer-la amb tot el grup.|Avisa cuando lleguen a la pausa activa para hacerla con todo el grupo." },
        { id: 's11', k: 'repte', t: "Reptes: detectius de fonts|Retos: detectives de fuentes", timer: 8,
          punts: ["La cerca de la Mia: anuncis, IA i blogs sense autor.|La búsqueda de Mia: anuncios, IA y blogs sin autor.", "Els passos per buscar amb cap.|Los pasos para buscar con cabeza.", "Crèdits, l'edat de les apps d'IA i el vídeo falsificat.|Créditos, la edad de las apps de IA y el vídeo falso."],
          nota: "Comenta que moltes apps d'IA tenen edat mínima i que a l'escola se segueixen les normes del centre.|Comenta que muchas apps de IA tienen edad mínima y que en el colegio se siguen las normas del centro." },
        { id: 's12', k: 'activitat', t: "Crea: la meva obra, amb crèdits|Crea: mi obra, con créditos", timer: 4,
          punts: ["Un dibuix d'un animal, signat amb el teu àlies.|Un dibujo de un animal, firmado con tu alias.", "Dues dades buscades amb paraules clau.|Dos datos buscados con palabras clave.", "Els crèdits i la teva llicència.|Los créditos y tu licencia."],
          nota: "Si no hi ha temps, que l'acabin a casa i el porteu a la propera sessió.|Si no hay tiempo, que lo terminen en casa y lo traigáis a la próxima sesión." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Una IA pot fer imatges i veus que semblen reals: la font és la millor pista.|Una IA puede hacer imágenes y voces que parecen reales: la fuente es la mejor pista.", "Un àudio estrany es comprova trucant a la persona.|Un audio raro se comprueba llamando a la persona.", "Tot té autor o autora: permís o llicència, i dir de qui és.|Todo tiene autor o autora: permiso o licencia, y decir de quién es.", "Poques paraules clau, sense anuncis i comparant fonts.|Pocas palabras clave, sin anuncios y comparando fuentes."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Què fas si t'arriba un àudio estrany que sembla de la família?|¿Qué haces si te llega un audio raro que parece de la familia?", "Escriu el crèdit d'una foto amb llicència.|Escribe el crédito de una foto con licencia."],
          nota: "Pot ser oral o en un paper.|Puede ser oral o en un papel." },
        { id: 's15', k: 'media', t: "Recordeu: el 017|Recordad: el 017", x: "Si un engany us ha arribat a casa, el 017 us ajuda.|Si un engaño os ha llegado a casa, el 017 os ayuda.", media: HELP,
          nota: "Presenta els tres números: a la propera sessió els posarem a la targeta d'ajuda.|Presenta los tres números: en la próxima sesión los pondremos en la tarjeta de ayuda." }
      ],
      print: [
        { id: 'p1', t: "Detectius de fonts|Detectives de fuentes", k: 'fitxa',
          intro: "Per parelles. Primer, les paraules clau; després, les obres: la podeu fer servir? Com la citaríeu?|Por parejas. Primero, las palabras clave; después, las obras: ¿la podéis usar? ¿Cómo la citaríais?",
          items: [
            { q: "«Quins animals viuen al riu del meu poble i què mengen?» Paraules clau:|«¿Qué animales viven en el río de mi pueblo y qué comen?» Palabras clave:", sol: "Per exemple: animals riu [nom del poble] alimentació.|Por ejemplo: animales río [nombre del pueblo] alimentación." },
            { q: "«Quant fa de llarg la balena més gran del món?» Paraules clau:|«¿Cuánto mide de largo la ballena más grande del mundo?» Palabras clave:", sol: "Per exemple: balena blava llargada.|Por ejemplo: ballena azul longitud." },
            { q: "Per què no et quedes amb el primer resultat si diu «Anunci»?|¿Por qué no te quedas con el primer resultado si dice «Anuncio»?", sol: "Perquè algú ha pagat perquè surti primer: vol vendre, no informar.|Porque alguien ha pagado para que salga primero: quiere vender, no informar." },
            { q: "Una foto de la Maria Soler amb llicència CC BY. La puc fer servir? Com la cito?|Una foto de Maria Soler con licencia CC BY. ¿La puedo usar? ¿Cómo la cito?", sol: "Sí: «Foto: Maria Soler · llicència CC BY».|Sí: «Foto: Maria Soler · licencia CC BY»." },
            { q: "El dibuix d'un company per al meu cartell. Què faig?|El dibujo de un compañero para mi cartel. ¿Qué hago?", sol: "Li demano permís i escric que és seu.|Le pido permiso y escribo que es suyo." },
            { q: "Una cançó famosa per al vídeo de la classe. Què faig?|Una canción famosa para el vídeo de la clase. ¿Qué hago?", sol: "No la faig servir sense permís: busco música amb llicència lliure i la cito.|No la uso sin permiso: busco música con licencia libre y la cito." },
            { q: "Una imatge que m'ha fet una IA. Què hi escric?|Una imagen que me ha hecho una IA. ¿Qué escribo?", sol: "Per exemple: «Imatge: feta amb ajuda d'una IA».|Por ejemplo: «Imagen: hecha con ayuda de una IA»." }
          ] }
      ]
    },

    /* ---------- Sessió 4 · Projecte: el meu pla digital (final del curs) ---------- */
    'd3-4': {
      intro: "Projecte final del curs. Cada alumne/a prepara el seu pla de benestar digital, en dues parts: la targeta d'ajuda (els noms dels seus tres adults de confiança i els telèfons 116 111, 017 i 112) i el pacte digital de casa, uns acords concrets per a tota la família sobre temps, llocs sense pantalles, partides, compres i què fer si alguna cosa va malament. A classe es fan els esborranys i a casa s'acaba el pacte amb la família. La sessió tanca el curs amb un repàs de tot el que han après i el diploma.|Proyecto final del curso. Cada alumno/a prepara su plan de bienestar digital, en dos partes: la tarjeta de ayuda (los nombres de sus tres adultos de confianza y los teléfonos 116 111, 017 y 112) y el pacto digital de casa, unos acuerdos concretos para toda la familia sobre tiempo, lugares sin pantallas, partidas, compras y qué hacer si algo va mal. En clase se hacen los borradores y en casa se termina el pacto con la familia. La sesión cierra el curso con un repaso de todo lo que han aprendido y el diploma.",
      claus: [
        "Un pacte digital són acords concrets que fa tota la família junta i que valen per a tothom, també per als adults.|Un pacto digital son acuerdos concretos que hace toda la familia junta y que valen para todo el mundo, también para los adultos.",
        "Un bon acord diu què, quan i on, és en positiu i es pot complir; si no funciona, se'n torna a parlar.|Un buen acuerdo dice qué, cuándo y dónde, es en positivo y se puede cumplir; si no funciona, se vuelve a hablar.",
        "Primer, sempre, un adult de confiança. Si no n'hi ha cap a prop: 116 111 (ajuda a la infància i l'adolescència, gratuït, confidencial i 24 hores), 017 (ajuda en ciberseguretat) i 112 (emergències).|Primero, siempre, un adulto de confianza. Si no hay ninguno cerca: 116 111 (ayuda a la infancia y la adolescencia, gratuito, confidencial y 24 horas), 017 (ayuda en ciberseguridad) y 112 (emergencias).",
        "Explicar-ho no és xivar-se, és cuidar-se: aquesta és la norma d'or de tot el curs.|Contarlo no es chivarse, es cuidarse: esta es la norma de oro de todo el curso."
      ],
      prev: [
        "Tot el curs: unitat 1 (contrasenyes, privadesa, empremta), unitat 2 (bulos, IA, respecte) i unitat 3 (pantalles, videojocs, IA i autoria).|Todo el curso: unidad 1 (contraseñas, privacidad, huella), unidad 2 (bulos, IA, respeto) y unidad 3 (pantallas, videojuegos, IA y autoría).",
        "Sessió d1-4: normes concretes i en positiu (el decàleg) i els tres adults de confiança.|Sesión d1-4: normas concretas y en positivo (el decálogo) y los tres adultos de confianza.",
        "Sessions d3-1 i d3-2: el pla de pantalles i el pacte de la partida.|Sesiones d3-1 y d3-2: el plan de pantallas y el pacto de la partida."
      ],
      obj: [
        "L'alumne/a escriu acords concrets, en positiu i per a tothom per al pacte digital de casa.|El alumno/a escribe acuerdos concretos, en positivo y para todo el mundo para el pacto digital de casa.",
        "L'alumne/a identifica els seus tres adults de confiança i sap per a què serveixen el 116 111, el 017 i el 112.|El alumno/a identifica sus tres adultos de confianza y sabe para qué sirven el 116 111, el 017 y el 112.",
        "L'alumne/a negocia acords amb respecte, escoltant les propostes dels altres.|El alumno/a negocia acuerdos con respeto, escuchando las propuestas de los demás.",
        "L'alumne/a fa un repàs del curs i presenta el seu pla de benestar digital.|El alumno/a hace un repaso del curso y presenta su plan de bienestar digital."
      ],
      comp: [
        "Competència digital (CD4): salut, benestar i seguretat; saber on demanar ajuda|Competencia digital (CD4): salud, bienestar y seguridad; saber dónde pedir ayuda",
        "Competència digital (CD2): crear un document propi i útil (el pacte i la targeta)|Competencia digital (CD2): crear un documento propio y útil (el pacto y la tarjeta)",
        "Competència personal, social i d'aprendre a aprendre: autoregulació i xarxa de suport|Competencia personal, social y de aprender a aprender: autorregulación y red de apoyo",
        "Competència ciutadana: acords i convivència a casa|Competencia ciudadana: acuerdos y convivencia en casa"
      ],
      vocab: [
        ["Pacte digital|Pacto digital", "Una llista d'acords sobre pantalles que fa tota la família junta.|Una lista de acuerdos sobre pantallas que hace toda la familia junta."],
        ["Adult de confiança|Adulto de confianza", "Una persona gran que t'escolta i t'ajuda sense renyar-te.|Una persona mayor que te escucha y te ayuda sin reñirte."],
        ["116 111|116 111", "Telèfon d'ajuda a la infància i l'adolescència: gratuït, confidencial i obert les 24 hores.|Teléfono de ayuda a la infancia y la adolescencia: gratuito, confidencial y abierto las 24 horas."],
        ["017|017", "Telèfon gratuït i confidencial d'ajuda en ciberseguretat (INCIBE), també per a famílies i docents.|Teléfono gratuito y confidencial de ayuda en ciberseguridad (INCIBE), también para familias y docentes."],
        ["112|112", "Telèfon d'emergències, quan hi ha un perill ara mateix.|Teléfono de emergencias, cuando hay un peligro ahora mismo."],
        ["Confidencial|Confidencial", "Que el que expliques no es diu a ningú més.|Que lo que cuentas no se dice a nadie más."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el meu pla digital»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: mi plan digital»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "La fitxa del pacte i la targeta d'ajuda (una per alumne/a), tisores i colors|La ficha del pacto y la tarjeta de ayuda (una por alumno/a), tijeras y colores",
          "Els diplomes del curs impresos, un per alumne/a, amb el nom escrit|Los diplomas del curso impresos, uno por alumno/a, con el nombre escrito"
        ],
        imprimir: ["El pacte digital i la targeta d'ajuda (imprimible 1): una per alumne/a|El pacto digital y la tarjeta de ayuda (imprimible 1): una por alumno/a", "Diploma del curs (imprimible 2): un per alumne/a|Diploma del curso (imprimible 2): uno por alumno/a"],
        prep: [
          "Imprimir una fitxa per alumne/a i els diplomes amb el nom de cada alumne/a.|Imprimir una ficha por alumno/a y los diplomas con el nombre de cada alumno/a.",
          "Comprovar els telèfons d'ajuda vigents (116 111, 017 i 112) i, si en voleu afegir, el telèfon de referència del centre.|Comprobar los teléfonos de ayuda vigentes (116 111, 017 y 112) y, si queréis añadirlo, el teléfono de referencia del centro.",
          "Preparar una nota per a les famílies que expliqui el pacte digital i que és una proposta, no una obligació.|Preparar una nota para las familias que explique el pacto digital y que es una propuesta, no una obligación."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: què hem après?|Bienvenida: ¿qué hemos aprendido?", fase: 'inici',
          fa: "Repasseu el curs amb la diapositiva de repàs: cada alumne/a diu una cosa que recorda d'alguna de les tres unitats. Presenta el repte final: el pla de benestar digital, amb la targeta d'ajuda i el pacte de casa.|Repasad el curso con la diapositiva de repaso: cada alumno/a dice una cosa que recuerda de alguna de las tres unidades. Presenta el reto final: el plan de bienestar digital, con la tarjeta de ayuda y el pacto de casa.",
          diu: ["Digueu una cosa del curs que ensenyaríeu a la vostra família.|Decid una cosa del curso que enseñaríais a vuestra familia.",
            "Quina és la norma d'or?|¿Cuál es la norma de oro?",
            "Avui farem el pla que us acompanyarà quan s'acabi el curs.|Hoy haremos el plan que os acompañará cuando termine el curso."],
          slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "El pacte i els telèfons d'ajuda|El pacto y los teléfonos de ayuda", fase: 'teoria',
          fa: "Amb l'animació, presenta el pacte digital: acords per a tota la família. Recorda què fa bo un acord (com al decàleg). Després presenta els telèfons d'ajuda amb la diapositiva: sempre, primer, un adult de confiança; i, si no n'hi ha cap a prop, el 116 111, el 017 i el 112. Feu servir exemples senzills de quan es truca a cadascun.|Con la animación, presenta el pacto digital: acuerdos para toda la familia. Recuerda qué hace bueno un acuerdo (como en el decálogo). Después presenta los teléfonos de ayuda con la diapositiva: siempre, primero, un adulto de confianza; y, si no hay ninguno cerca, el 116 111, el 017 y el 112. Usad ejemplos sencillos de cuándo se llama a cada uno.",
          diu: ["Per què un pacte ha de valer també per als adults?|¿Por qué un pacto tiene que valer también para los adultos?",
            "Quan trucaríeu al 112? I al 116 111?|¿Cuándo llamaríais al 112? ¿Y al 116 111?",
            "Què vol dir «confidencial»?|¿Qué quiere decir «confidencial»?"],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "A l'ordinador: prepara el pla|En el ordenador: prepara el plan", fase: 'ordinador',
          fa: "Cada alumne/a fa la sessió fins a la conversa de la família de la Jana: les preguntes de repàs, la història, les quatre targetes, els bons acords, els telèfons d'ajuda i quin número ajuda en cada cas. Feu la pausa activa tots junts per aprendre els números.|Cada alumno/a hace la sesión hasta la conversación de la familia de Jana: las preguntas de repaso, la historia, las cuatro tarjetas, los buenos acuerdos, los teléfonos de ayuda y qué número ayuda en cada caso. Haced la pausa activa todos juntos para aprender los números.",
          diu: ["Quin acord de la família de la Jana us ha agradat més?|¿Qué acuerdo de la familia de Jana os ha gustado más?",
            "Algú ha entrat al compte de la família: quin número ajuda? (El 017, amb un adult.)|Alguien ha entrado en la cuenta de la familia: ¿qué número ayuda? (El 017, con un adulto.)",
            "Ara, tots: u, u, sis, u, u, u!|Ahora, todos: ¡uno, uno, seis, uno, uno, uno!"],
          slides: ['s7', 's8'], app: "De «Recorda» fins a la «Pausa activa».|De «Recuerda» hasta la «Pausa activa».", org: "Individual|Individual" },
        { min: 20, t: "Crea: el pacte i la targeta d'ajuda|Crea: el pacto y la tarjeta de ayuda", fase: 'crea',
          fa: "Cada alumne/a tria els acords a l'app i després omple la fitxa: escriu cinc acords del pacte (un per tema) i retalla i omple la targeta d'ajuda amb els noms dels seus tres adults de confiança i els tres telèfons. Als 12 minuts, en parelles, es revisen els acords: són concrets? valen per a tothom? A casa s'acabarà el pacte amb la família.|Cada alumno/a elige los acuerdos en la app y después rellena la ficha: escribe cinco acuerdos del pacto (uno por tema) y recorta y rellena la tarjeta de ayuda con los nombres de sus tres adultos de confianza y los tres teléfonos. A los 12 minutos, en parejas, se revisan los acuerdos: ¿son concretos? ¿valen para todo el mundo? En casa se terminará el pacto con la familia.",
          diu: ["Aquest acord diu què, quan i on?|¿Este acuerdo dice qué, cuándo y dónde?",
            "Qui són els teus tres adults de confiança? Un de casa, un de l'escola i un altre.|¿Quiénes son tus tres adultos de confianza? Uno de casa, uno del colegio y otro.",
            "On guardaràs la targeta? (A la motxilla, a la funda de la tauleta…)|¿Dónde guardarás la tarjeta? (En la mochila, en la funda de la tablet…)"],
          slides: ['s9', 's10', 's11'], app: "Pas «Crea»: el meu pacte digital i «La targeta d'ajuda i el pacte» (Ho he fet!).|Paso «Crea»: mi pacto digital y «La tarjeta de ayuda y el pacto» (¡Lo he hecho!).", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 15, t: "Presentació, tiquet i diploma|Presentación, ticket y diploma", fase: 'tancament',
          fa: "Uns quants voluntaris presenten el seu pacte en 30 segons i la resta diu una cosa que li agrada. Fes el tiquet, deixa que facin les preguntes finals i el diploma de l'app, i lliura els diplomes impresos. Acaba recordant la norma d'or i els tres números.|Unos cuantos voluntarios presentan su pacto en 30 segundos y el resto dice algo que le gusta. Haz el ticket, deja que hagan las preguntas finales y el diploma de la app, y entrega los diplomas impresos. Termina recordando la norma de oro y los tres números.",
          diu: ["Quin acord del pacte us sembla més fàcil de complir?|¿Qué acuerdo del pacto os parece más fácil de cumplir?",
            "Ara sou experts i expertes en ciutadania digital!|¡Ahora sois expertos y expertas en ciudadanía digital!",
            "I recordeu, ara i sempre: si dubteu, pregunteu a un adult de confiança.|Y recordad, ahora y siempre: si dudáis, preguntad a un adulto de confianza."],
          slides: ['s12', 's13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals, el diploma del curs i com m'he sentit.|«Cierre»: las dos preguntas finales, el diploma del curso y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu acords només per a ell o ella, o només per als adults.|Escribe acuerdos solo para él o ella, o solo para los adultos.",
          "Recorda la conversa de la Jana: el pacte val per a tota la família. Pregunta: aquest acord el pot complir tothom de casa?|Recuerda la conversación de Jana: el pacto vale para toda la familia. Pregunta: ¿este acuerdo lo puede cumplir todo el mundo en casa?"],
        ["Fa acords massa generals («menys pantalles») o impossibles («mai més videojocs»).|Hace acuerdos demasiado generales («menos pantallas») o imposibles («nunca más videojuegos»).",
          "Demana que digui què, quan i on, i que pensi si el podria complir una setmana sencera.|Pide que diga qué, cuándo y dónde, y que piense si lo podría cumplir una semana entera."],
        ["Confon els telèfons (truca al 112 per a una cosa que no és urgent).|Confunde los teléfonos (llama al 112 para algo que no es urgente).",
          "Repasseu el dsort dels números: 112 si hi ha un perill ara mateix; 116 111 per parlar; 017 per a problemes d'internet.|Repasad la clasificación de los números: 112 si hay un peligro ahora mismo; 116 111 para hablar; 017 para problemas de internet."],
        ["No sap a qui posar com a adult de confiança.|No sabe a quién poner como adulto de confianza.",
          "Ajuda'l a pensar en persones concretes (tutor/a, monitor/a, algú de la família extensa). Tu també pots ser-ne un/a.|Ayúdale a pensar en personas concretas (tutor/a, monitor/a, alguien de la familia extensa). Tú también puedes ser uno/a."],
        ["Creu que trucar a un telèfon d'ajuda vol dir que ha fet alguna cosa malament.|Cree que llamar a un teléfono de ayuda quiere decir que ha hecho algo mal.",
          "Explica que aquests telèfons són per ajudar, no per renyar, i que demanar ajuda és de valents.|Explica que estos teléfonos son para ayudar, no para reñir, y que pedir ayuda es de valientes."]
      ],
      diff: {
        mes: "Per anar més enllà: preparar una versió del pacte per a una altra classe o per a germans petits, amb dibuixos; o escriure una carta curta a la família explicant per què proposen cada acord.|Para ir más allá: preparar una versión del pacto para otra clase o para hermanos pequeños, con dibujos; o escribir una carta corta a la familia explicando por qué proponen cada acuerdo.",
        menys: "Donar la fitxa del pacte amb l'inici de cada acord escrit («A taula…», «A la nit…») perquè només l'hagin d'acabar, i la targeta d'ajuda amb els tres números ja impresos.|Dar la ficha del pacto con el inicio de cada acuerdo escrito («En la mesa…», «Por la noche…») para que solo lo tengan que terminar, y la tarjeta de ayuda con los tres números ya impresos."
      },
      aval: {
        ticket: ["Digues un acord del teu pacte i per què és bo.|Di un acuerdo de tu pacto y por qué es bueno.",
          "Digues un telèfon d'ajuda i quan el faries servir.|Di un teléfono de ayuda y cuándo lo usarías."],
        rubric: [
          ["Acords del pacte|Acuerdos del pacto", "Són concrets, en positiu, possibles i per a tota la família.|Son concretos, en positivo, posibles y para toda la familia.", "N'hi ha de generals o només per a una persona.|Los hay generales o solo para una persona."],
          ["Targeta d'ajuda|Tarjeta de ayuda", "Té tres adults de confiança i sap per a què serveix cada telèfon.|Tiene tres adultos de confianza y sabe para qué sirve cada teléfono.", "La té completa, però confon algun telèfon.|La tiene completa, pero confunde algún teléfono."],
          ["Negociació i respecte|Negociación y respeto", "Escolta, proposa acords per a tothom i accepta millores.|Escucha, propone acuerdos para todo el mundo y acepta mejoras.", "Proposa idees, però li costa escoltar les dels altres.|Propone ideas, pero le cuesta escuchar las de los demás."],
          ["Repàs del curs|Repaso del curso", "Relaciona els acords amb el que ha après (son, partides, compres, ajuda).|Relaciona los acuerdos con lo que ha aprendido (sueño, partidas, compras, ayuda).", "Recorda alguns temes amb ajuda.|Recuerda algunos temas con ayuda."]
        ]
      },
      casa: "Avui l'infant porta a casa l'esborrany del pacte digital i la targeta d'ajuda. Proposta per a la família: seieu junts, llegiu els acords que ha triat, que cada persona n'afegeixi un (també els adults) i signeu-lo. Pengeu-lo en un lloc on es vegi i, d'aquí a unes setmanes, reviseu-lo. Repasseu també la targeta d'ajuda: qui són els seus adults de confiança i els telèfons 116 111 (ajuda a la infància i l'adolescència, gratuït, confidencial i 24 hores), 017 (ajuda en ciberseguretat, també per a famílies) i 112 (emergències).|Hoy el niño o la niña lleva a casa el borrador del pacto digital y la tarjeta de ayuda. Propuesta para la familia: sentaos juntos, leed los acuerdos que ha elegido, que cada persona añada uno (también los adultos) y firmadlo. Colgadlo en un sitio donde se vea y, dentro de unas semanas, revisadlo. Repasad también la tarjeta de ayuda: quiénes son sus adultos de confianza y los teléfonos 116 111 (ayuda a la infancia y la adolescencia, gratuito, confidencial y 24 horas), 017 (ayuda en ciberseguridad, también para familias) y 112 (emergencias).",
      faq: [
        ["Què és exactament el 116 111?|¿Qué es exactamente el 116 111?", "És el número europeu d'ajuda a la infància i l'adolescència. A Espanya l'atén la Fundació ANAR: és gratuït, confidencial i obert les 24 hores. Hi poden trucar infants i adolescents que necessiten parlar amb algú.|Es el número europeo de ayuda a la infancia y la adolescencia. En España lo atiende la Fundación ANAR: es gratuito, confidencial y abierto las 24 horas. Pueden llamar niños, niñas y adolescentes que necesitan hablar con alguien."],
        ["I el 017?|¿Y el 017?", "És «Tu Ayuda en Ciberseguridad», de l'INCIBE (Institut Nacional de Ciberseguretat): gratuït i confidencial, per a dubtes i problemes a internet (enganys, comptes robats, ciberassetjament). També hi poden trucar famílies i docents.|Es «Tu Ayuda en Ciberseguridad», del INCIBE (Instituto Nacional de Ciberseguridad): gratuito y confidencial, para dudas y problemas en internet (engaños, cuentas robadas, ciberacoso). También pueden llamar familias y docentes."],
        ["I si una família no vol fer el pacte?|¿Y si una familia no quiere hacer el pacto?", "És una proposta, no una obligació. L'infant pot quedar-se amb el seu pla personal i la targeta d'ajuda.|Es una propuesta, no una obligación. El niño o la niña puede quedarse con su plan personal y la tarjeta de ayuda."],
        ["Un alumne no vol escriure el nom d'un adult de casa a la targeta.|Un alumno no quiere escribir el nombre de un adulto de casa en la tarjeta.", "Respecta-ho: pot posar adults de l'escola o d'altres llocs. Si et sembla que hi ha alguna cosa que el preocupa, parla-hi en privat i segueix el protocol del centre.|Respétalo: puede poner adultos del colegio o de otros sitios. Si te parece que hay algo que le preocupa, habla con él en privado y sigue el protocolo del centro."],
        ["Què passa quan s'acaba el curs?|¿Qué pasa cuando termina el curso?", "Que ja saben cuidar-se i cuidar els altres a la xarxa, i tenen un pla. Podeu revisar el pacte i el decàleg a mig curs.|Que ya saben cuidarse y cuidar a los demás en la red, y tienen un plan. Podéis revisar el pacto y el decálogo a mitad de curso."]
      ],
      tec: [
        ["Al pas dels números hi ha tres calaixos i alguna situació els fa dubtar.|En el paso de los números hay tres cajas y alguna situación les hace dudar.", "És normal: comenteu que, abans de tot, sempre un adult de confiança. Si hi ha un perill ara mateix, 112.|Es normal: comentad que, antes de nada, siempre un adulto de confianza. Si hay un peligro ahora mismo, 112."],
        ["No es poden imprimir els diplomes a temps.|No se pueden imprimir los diplomas a tiempo.", "L'app també mostra el diploma en acabar (es pot imprimir des d'allà). Els impresos es poden lliurar la setmana vinent.|La app también muestra el diploma al terminar (se puede imprimir desde allí). Los impresos se pueden entregar la semana que viene."],
        ["Volen tornar a la conversa de la Jana per provar un altre camí.|Quieren volver a la conversación de Jana para probar otro camino.", "Poden tornar enrere amb la fletxa o reobrir la sessió: tots els camins acaben amb el pacte signat.|Pueden volver atrás con la flecha o reabrir la sesión: todos los caminos terminan con el pacto firmado."],
        ["No queda temps per a les presentacions.|No queda tiempo para las presentaciones.", "Feu-les al principi de la sessió següent o en una tutoria; també poden presentar el pacte a casa.|Hacedlas al principio de la sesión siguiente o en una tutoría; también pueden presentar el pacto en casa."]
      ],
      seg: [
        "La targeta d'ajuda és personal: no la recullis ni la pengis a la classe amb noms.|La tarjeta de ayuda es personal: no la recojas ni la cuelgues en la clase con nombres.",
        "No llegeixis en veu alta els pactes sense permís: hi pot haver informació de cada casa. Les presentacions són voluntàries.|No leas en voz alta los pactos sin permiso: puede haber información de cada casa. Las presentaciones son voluntarias.",
        "Si un infant explica una situació real que el preocupa, segueix el protocol del centre: escolta amb calma, digues-li que no és culpa seva, no prometis guardar el secret, apunta-ho i avisa la persona de referència. Si hi ha un perill imminent, truca al 112.|Si un niño o niña cuenta una situación real que le preocupa, sigue el protocolo del centro: escucha con calma, dile que no es culpa suya, no prometas guardar el secreto, apúntalo y avisa a la persona de referencia. Si hay un peligro inminente, llama al 112.",
        "Recorda a l'alumnat i a les famílies, a la nota de casa, qui són els adults de confiança i els telèfons 116 111, 017 i 112.|Recuerda al alumnado y a las familias, en la nota de casa, quiénes son los adultos de confianza y los teléfonos 116 111, 017 y 112."
      ],
      extra: [
        "Llengua: escriure una carta a la família explicant el pacte i per què és important.|Lengua: escribir una carta a la familia explicando el pacto y por qué es importante.",
        "Educació visual i plàstica: decorar la targeta d'ajuda i fer un pòster de la classe amb els tres números (sense noms).|Educación visual y plástica: decorar la tarjeta de ayuda y hacer un póster de la clase con los tres números (sin nombres).",
        "Tutoria: revisar el pacte i el decàleg al cap d'un mes i comentar què ha funcionat.|Tutoría: revisar el pacto y el decálogo al cabo de un mes y comentar qué ha funcionado."
      ],
      trans: [
        "Tot el curs: cada tema del pacte ve d'una sessió (contrasenyes i privadesa a la unitat 1, respecte a la 2, pantalles, partides i IA a la 3).|Todo el curso: cada tema del pacto viene de una sesión (contraseñas y privacidad en la unidad 1, respeto en la 2, pantallas, partidas e IA en la 3).",
        "Sessió d1-4: el decàleg va ser la primera llista de normes; el pacte n'és la versió de família. Sessió d2-4: la campanya va portar el que vam aprendre a l'escola.|Sesión d1-4: el decálogo fue la primera lista de normas; el pacto es su versión de familia. Sesión d2-4: la campaña llevó lo que aprendimos a la escuela.",
        "Tutoria (xarxa de suport), llengua (escriure acords) i educació per a la salut (son, pantalles).|Tutoría (red de apoyo), lengua (escribir acuerdos) y educación para la salud (sueño, pantallas)."
      ],
      slides: [
        { id: 's1', k: 'portada', t: "Projecte: el meu pla digital|Proyecto: mi plan digital", x: "Avui fareu el pacte digital de casa i la vostra targeta d'ajuda.|Hoy haréis el pacto digital de casa y vuestra tarjeta de ayuda.",
          nota: "És l'última sessió del curs: presenta-la com una celebració del que han après.|Es la última sesión del curso: preséntala como una celebración de lo que han aprendido." },
        { id: 's2', k: 'repas', t: "Què hem après al curs?|¿Qué hemos aprendido en el curso?",
          punts: ["Unitat 1: contrasenyes, privadesa i empremta digital|Unidad 1: contraseñas, privacidad y huella digital", "Unitat 2: bulos, IA i respecte a la xarxa|Unidad 2: bulos, IA y respeto en la red", "Unitat 3: pantalles, videojocs, IA i autoria|Unidad 3: pantallas, videojuegos, IA y autoría", "La norma d'or: demanar ajuda|La norma de oro: pedir ayuda"],
          nota: "Que cada alumne/a digui una cosa concreta que recordi d'algun tema.|Que cada alumno/a diga una cosa concreta que recuerde de algún tema." },
        { id: 's3', k: 'anim', t: "Un pacte per a tothom|Un pacto para todos", anim: 'd3pacte', x: "Temps, llocs sense pantalles, partides, compres i ajuda.|Tiempo, lugares sin pantallas, partidas, compras y ayuda.",
          nota: "Remarca que els adults també el signen i el compleixen.|Remarca que los adultos también lo firman y lo cumplen." },
        { id: 's4', k: 'concepte', t: "Acords que funcionen|Acuerdos que funcionan", pic: 'img/ment/lli.webp',
          punts: ["Concrets: què, quan i on.|Concretos: qué, cuándo y dónde.", "En positiu i possibles de complir.|En positivo y posibles de cumplir.", "Per a tota la família.|Para toda la familia.", "Si no funciona, se'n torna a parlar.|Si no funciona, se vuelve a hablar."],
          nota: "Compara «Menys pantalles» amb «La tauleta dorm a la cuina».|Compara «Menos pantallas» con «La tablet duerme en la cocina»." },
        { id: 's5', k: 'media', t: "Tres números per recordar|Tres números para recordar", x: "Primer, un adult de confiança. I si no n'hi ha cap a prop…|Primero, un adulto de confianza. Y si no hay ninguno cerca…", media: HELP,
          nota: "Explica cada número amb un exemple: 116 111 per parlar, 017 per a problemes d'internet, 112 si hi ha un perill ara mateix.|Explica cada número con un ejemplo: 116 111 para hablar, 017 para problemas de internet, 112 si hay un peligro ahora mismo." },
        { id: 's6', k: 'pregunta', t: "Qui són els teus adults de confiança?|¿Quiénes son tus adultos de confianza?",
          punts: ["Algú de casa.|Alguien de casa.", "Algú de l'escola.|Alguien del colegio.", "Un altre: un monitor, una tieta, una veïna…|Otro: un monitor, una tía, una vecina…"],
          nota: "Que hi pensin en silenci: no cal dir els noms en veu alta.|Que lo piensen en silencio: no hace falta decir los nombres en voz alta." },
        { id: 's7', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 12,
          punts: ["Obre la sessió «Projecte: el meu pla digital».|Abre la sesión «Proyecto: mi plan digital».", "Fes-la fins a la pausa activa.|Hazla hasta la pausa activa.", "Apunta els acords que t'agradin.|Apunta los acuerdos que te gusten."],
          nota: "Avisa quan arribin a la pausa activa per aprendre els números tots junts.|Avisa cuando lleguen a la pausa activa para aprender los números todos juntos." },
        { id: 's8', k: 'repte', t: "Quin número t'ajuda?|¿Qué número te ayuda?", timer: 3,
          punts: ["Et sents malament i no saps a qui dir-ho: 116 111.|Te sientes mal y no sabes a quién decírselo: 116 111.", "Un compte robat o un engany: 017.|Una cuenta robada o un engaño: 017.", "Un perill ara mateix: 112.|Un peligro ahora mismo: 112."],
          nota: "Fes-ne dos o tres exemples més en veu alta i que responguin a cor.|Haz dos o tres ejemplos más en voz alta y que respondan a coro." },
        { id: 's9', k: 'activitat', t: "Crea: el pacte i la targeta|Crea: el pacto y la tarjeta", timer: 20,
          punts: ["Tria els acords a l'app.|Elige los acuerdos en la app.", "Escriu cinc acords a la fitxa: un per tema.|Escribe cinco acuerdos en la ficha: uno por tema.", "Omple la targeta d'ajuda i retalla-la.|Rellena la tarjeta de ayuda y recórtala.", "Revisa els acords amb un company/a.|Revisa los acuerdos con un compañero/a."],
          nota: "Avisa als 12 minuts per fer la revisió en parelles.|Avisa a los 12 minutos para hacer la revisión en parejas." },
        { id: 's10', k: 'concepte', t: "Com revisar un acord|Cómo revisar un acuerdo", pic: 'img/chars/tuga-happy.webp',
          punts: ["Diu què, quan i on?|¿Dice qué, cuándo y dónde?", "El pot complir tothom de casa?|¿Lo puede cumplir todo el mundo en casa?", "És en positiu?|¿Es en positivo?"],
          nota: "Que comencin pel que funciona i després proposin una millora, com a la campanya.|Que empiecen por lo que funciona y después propongan una mejora, como en la campaña." },
        { id: 's11', k: 'concepte', t: "La targeta d'ajuda|La tarjeta de ayuda", pic: 'img/ment/cor.webp',
          punts: ["Els noms dels teus tres adults de confiança.|Los nombres de tus tres adultos de confianza.", "116 111 · 017 · 112|116 111 · 017 · 112", "A la motxilla o a la funda de la tauleta.|En la mochila o en la funda de la tablet."],
          nota: "La targeta és personal: no cal ensenyar-la a ningú.|La tarjeta es personal: no hace falta enseñarla a nadie." },
        { id: 's12', k: 'activitat', t: "Presentem els pactes|Presentamos los pactos", timer: 5,
          punts: ["Voluntaris: el vostre pacte en 30 segons.|Voluntarios: vuestro pacto en 30 segundos.", "La resta diu una cosa que li agrada.|El resto dice algo que le gusta."],
          nota: "Només voluntaris i sense detalls de cap casa.|Solo voluntarios y sin detalles de ninguna casa." },
        { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy",
          punts: ["Un pacte digital és per a tota la família.|Un pacto digital es para toda la familia.", "Un bon acord és concret, en positiu i possible.|Un buen acuerdo es concreto, en positivo y posible.", "Primer, un adult de confiança; i si no: 116 111, 017 i 112.|Primero, un adulto de confianza; y si no: 116 111, 017 y 112."],
          nota: "Llegiu-lo junts.|Leedlo juntos." },
        { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida",
          punts: ["Digues un acord del teu pacte i per què és bo.|Di un acuerdo de tu pacto y por qué es bueno.", "Digues un telèfon d'ajuda i quan el faries servir.|Di un teléfono de ayuda y cuándo lo usarías."],
          nota: "Fes el tiquet mentre lliures els diplomes.|Haz el ticket mientras entregas los diplomas." },
        { id: 's15', k: 'media', t: "Sempre hi ha algú que t'ajuda|Siempre hay alguien que te ayuda", x: "Explicar-ho no és xivar-se: és cuidar-te.|Contarlo no es chivarse: es cuidarte.", media: HELP,
          nota: "Deixa-la projectada mentre lliures els diplomes.|Déjala proyectada mientras entregas los diplomas." },
        { id: 's16', k: 'concepte', t: "Enhorabona: curs acabat!|¡Enhorabuena: curso terminado!", pic: 'img/chars/numi-medalla.webp',
          punts: ["Has acabat el curs Tech Digital.|Has terminado el curso Tech Digital.", "Ara pots ajudar la teva família i la teva escola.|Ahora puedes ayudar a tu familia y a tu escuela.", "Recorda: si dubtes, pregunta a un adult de confiança.|Recuerda: si dudas, pregunta a un adulto de confianza."],
          nota: "Lliura els diplomes impresos un a un, dient a cada alumne/a una cosa concreta que ha fet bé durant el curs.|Entrega los diplomas impresos uno a uno, diciendo a cada alumno/a algo concreto que ha hecho bien durante el curso." }
      ],
      print: [
        { id: 'p1', t: "El pacte digital i la targeta d'ajuda|El pacto digital y la tarjeta de ayuda", k: 'fitxa',
          intro: "Escriu un acord per a cada tema i omple la targeta d'ajuda. Retalla-la i guarda-la. El pacte l'acabareu a casa amb la família.|Escribe un acuerdo para cada tema y rellena la tarjeta de ayuda. Recórtala y guárdala. El pacto lo terminaréis en casa con la familia.",
          items: [
            { q: "⏰ Temps de pantalles:|⏰ Tiempo de pantallas:", sol: "Per exemple: «Pantalles després dels deures i amb temporitzador».|Por ejemplo: «Pantallas después de los deberes y con temporizador»." },
            { q: "🛏️ Llocs i moments sense pantalles:|🛏️ Lugares y momentos sin pantallas:", sol: "Per exemple: «A taula, cap mòbil, tampoc els adults» o «La tauleta dorm fora de l'habitació».|Por ejemplo: «En la mesa, ningún móvil, tampoco los adultos» o «La tablet duerme fuera de la habitación»." },
            { q: "🎮 Partides en línia:|🎮 Partidas en línea:", sol: "Per exemple: «Només amb amics de veritat i mirant l'etiqueta PEGI».|Por ejemplo: «Solo con amigos de verdad y mirando la etiqueta PEGI»." },
            { q: "💎 Compres:|💎 Compras:", sol: "Per exemple: «Cap compra sense un adult».|Por ejemplo: «Ninguna compra sin un adulto»." },
            { q: "🤝 La norma d'or de casa:|🤝 La norma de oro de casa:", sol: "Per exemple: «Si alguna cosa ens fa sentir malament, ho expliquem a casa i ningú no renya».|Por ejemplo: «Si algo nos hace sentir mal, lo contamos en casa y nadie riñe»." },
            { q: "✂️ La meva targeta d'ajuda · Els meus tres adults de confiança: 1. ____ 2. ____ 3. ____ · 116 111 (ajuda a la infància i l'adolescència) · 017 (ajuda en ciberseguretat) · 112 (emergències)|✂️ Mi tarjeta de ayuda · Mis tres adultos de confianza: 1. ____ 2. ____ 3. ____ · 116 111 (ayuda a la infancia y la adolescencia) · 017 (ayuda en ciberseguridad) · 112 (emergencias)", big: true, sol: "Tres adults de confiança (de casa, de l'escola i un altre) i els tres telèfons.|Tres adultos de confianza (de casa, del colegio y otro) y los tres teléfonos." },
            { q: "Signatures de tota la família:|Firmas de toda la familia:", sol: "Resposta oberta.|Respuesta abierta." }
          ] },
        { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
          intro: "ha completat el curs Tech Digital de Numi Tech: sap cuidar-se i cuidar els altres a la xarxa i té el seu pla de benestar digital.|ha completado el curso Tech Digital de Numi Tech: sabe cuidarse y cuidar a los demás en la red y tiene su plan de bienestar digital.",
          items: [
            "Crea contrasenyes fortes i protegeix les seves dades.|Crea contraseñas fuertes y protege sus datos.",
            "Pensa abans de publicar i cuida la seva empremta digital.|Piensa antes de publicar y cuida su huella digital.",
            "Comprova les notícies i detecta els missatges trampa i les imatges fetes amb IA.|Comprueba las noticias y detecta los mensajes trampa y las imágenes hechas con IA.",
            "Entén què és una IA i la fa servir amb responsabilitat.|Entiende qué es una IA y la usa con responsabilidad.",
            "Tracta bé els altres a la xarxa i respecta la seva feina.|Trata bien a los demás en la red y respeta su trabajo.",
            "Cuida el seu temps amb pantalles i les seves partides en línia.|Cuida su tiempo con pantallas y sus partidas en línea.",
            "Sap demanar ajuda: adults de confiança, 116 111, 017 i 112.|Sabe pedir ayuda: adultos de confianza, 116 111, 017 y 112."
          ] }
      ]
    }
  });
}
