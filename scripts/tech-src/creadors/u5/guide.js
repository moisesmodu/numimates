/* Tech Creadors · unitat 5 «Condicions» · guia del professorat (g5-1 … g5-4). Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Condicions amb xocs i números ---------- */
  'g5-1': {
    intro: "Primera sessió de condicions. L'alumnat ja coneix el «si» i el «si… si no» de Tech Robot: aquí es recorden en una sola targeta i la sessió passa al que és nou, les condicions amb valors. A més de «toca…» (un personatge, la vora o el ratolí), una condició pot comparar un número: y < -150, x > 200. La idea clau d'aquesta edat és que els personatges es mouen a salts de diversos punts, i per això «més petit que» o «més gran que» són més segurs que l'«igual» (de 7 en 7, la y passa de -144 a -151 i no val mai -150). La classe comença amb el problema de la Festa de la Fruita, segueix amb els comparadors humans i acaba a l'escenari amb fruites que pregunten per xocs i per posicions. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Primera sesión de condiciones. El alumnado ya conoce el «si» y el «si… si no» de Tech Robot: aquí se recuerdan en una sola tarjeta y la sesión pasa a lo que es nuevo, las condiciones con valores. Además de «toca…» (un personaje, el borde o el ratón), una condición puede comparar un número: y < -150, x > 200. La idea clave de esta edad es que los personajes se mueven a saltos de varios puntos, y por eso «menor que» o «mayor que» son más seguros que el «igual» (de 7 en 7, la y pasa de -144 a -151 y no vale nunca -150). La clase empieza con el problema de la Fiesta de la Fruta, sigue con los comparadores humanos y termina en el escenario con frutas que preguntan por choques y por posiciones. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
    claus: [
      "El «si» d'en Bit funciona igual: fa els blocs de dins només amb el sí, i dins del «per sempre» pregunta a cada fotograma.|El «si» de Bit funciona igual: hace los bloques de dentro solo con el sí, y dentro del «por siempre» pregunta en cada fotograma.",
      "«Toca…» pregunta si el personatge xoca amb un altre personatge, amb la vora o amb el ratolí.|«Toca…» pregunta si el personaje choca con otro personaje, con el borde o con el ratón.",
      "Una condició pot comparar un número amb un límit: y < -150, x > 200 (amb «comparar números»).|Una condición puede comparar un número con un límite: y < -150, x > 200 (con «comparar números»).",
      "Com que el moviment va a salts, < i > són més segurs que =: «y = -150» pot no ser mai cert.|Como el movimiento va a saltos, < y > son más seguros que =: «y = -150» puede no ser nunca cierto.",
      "Un programa ha de funcionar a totes les proves: no sap on són les coses, ho ha de preguntar.|Un programa tiene que funcionar en todas las pruebas: no sabe dónde están las cosas, lo tiene que preguntar."
    ],
    prev: [
      "El «si» i el «si… si no» de Tech Robot (unitat 4) o, si no l'han fet, el bloc «si toques la vora, rebota» (unitat 2).|El «si» y el «si… si no» de Tech Robot (unidad 4) o, si no lo han hecho, el bloque «si tocas el borde, rebota» (unidad 2).",
      "Les coordenades: la x de -240 a 240 i la y de -180 a 180 (unitat 4).|Las coordenadas: la x de -240 a 240 y la y de -180 a 180 (unidad 4).",
      "Comparar nombres enters, també negatius, amb els signes < i > (matemàtiques de cicle superior).|Comparar números enteros, también negativos, con los signos < y > (matemáticas de ciclo superior)."
    ],
    faq: [
      ["Per què la poma no s'amaga si ja toca la cistella?|¿Por qué la manzana no se esconde si ya toca la cesta?", "Mira on és el «si»: si és fora del «per sempre», només ha preguntat una vegada, al principi, quan la poma encara era a dalt. Posa'l dins del bucle.|Mira dónde está el «si»: si está fuera del «por siempre», solo ha preguntado una vez, al principio, cuando la manzana aún estaba arriba. Ponlo dentro del bucle."],
      ["Com faig una condició amb números?|¿Cómo hago una condición con números?", "Toca la condició del «si» (la paraula en negreta) i tria «comparar números». Després toca el primer valor i tria «posició x» o «posició y», toca el signe per triar < o > i escriu el número.|Toca la condición del «si» (la palabra en negrita) y elige «comparar números». Después toca el primer valor y elige «posición x» o «posición y», toca el signo para elegir < o > y escribe el número."],
      ["Per què «y = -150» no funciona?|¿Por qué «y = -150» no funciona?", "Perquè la poma baixa a salts (de 5, de 7…) i potser no passa mai exactament per -150. «y < -150» és cert a qualsevol punt de sota, i no se li escapa.|Porque la manzana baja a saltos (de 5, de 7…) y quizá no pasa nunca exactamente por -150. «y < -150» es cierto en cualquier punto de debajo, y no se le escapa."],
      ["Per què hi ha una prova 2 si a la prova 1 ja funcionava?|¿Por qué hay una prueba 2 si en la prueba 1 ya funcionaba?", "Perquè a la prova 2 les coses són en un altre lloc. Si el programa funciona a totes dues, vol dir que de veritat pregunta i no que ha tingut sort.|Porque en la prueba 2 las cosas están en otro sitio. Si el programa funciona en las dos, quiere decir que de verdad pregunta y no que ha tenido suerte."],
      ["Quina diferència hi ha entre «toca la vora» i «x > 200»?|¿Qué diferencia hay entre «toca el borde» y «x > 200»?", "La vora és fixa (a 240) i depèn de la mida del personatge; amb «x > 200» tu tries exactament on és la línia. Als videojocs, les metes i les zones es fan amb números.|El borde es fijo (en 240) y depende del tamaño del personaje; con «x > 200» tú eliges exactamente dónde está la línea. En los videojuegos, las metas y las zonas se hacen con números."],
      ["Quantes vegades pregunta el «si» dins del «per sempre»?|¿Cuántas veces pregunta el «si» dentro del «por siempre»?", "A cada volta del bucle: unes 30 vegades cada segon. Per això no se li escapa cap xoc.|En cada vuelta del bucle: unas 30 veces cada segundo. Por eso no se le escapa ningún choque."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["No troben «comparar números» a la condició.|No encuentran «comparar números» en la condición.", "Cal tocar la paraula en negreta de la condició (per exemple, «la cistella»): a sota de la llista surt «o una altra condició» amb «comparar números».|Hay que tocar la palabra en negrita de la condición (por ejemplo, «la cesta»): debajo de la lista sale «u otra condición» con «comparar números»."],
      ["A la comparació surt «punts» i no «posició y».|En la comparación sale «puntos» y no «posición y».", "És el valor per defecte. Que toqui «punts» i triï «posició y» (o «posició x») a la llista de valors.|Es el valor por defecto. Que toque «puntos» y elija «posición y» (o «posición x») en la lista de valores."],
      ["Un alumne/a s'encalla i ha esborrat blocs que no tocava.|Un alumno/a se atasca y ha borrado bloques que no tocaba.", "Després de dos intents apareix el botó «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece el botón «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver a entrar: el reto vuelve a empezar."],
      ["El bloc nou va a parar fora del «per sempre».|El bloque nuevo acaba fuera del «por siempre».", "Els blocs nous van on hi ha la línia «els blocs nous van aquí». Toqueu el forat de dins del bucle abans d'afegir el bloc.|Los bloques nuevos van donde está la línea «los bloques nuevos van aquí». Tocad el hueco de dentro del bucle antes de añadir el bloque."],
      ["Les targetes impreses surten massa petites.|Las tarjetas impresas salen demasiado pequeñas.", "Imprimiu-les al 100 % (sense «ajusta a la pàgina») i en paper una mica gruixut.|Imprimidlas al 100 % (sin «ajustar a la página») y en papel algo grueso."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Comparadors humans: les accions són de moure's al lloc. Apartar cadires i motxilles abans de començar.|Comparadores humanos: las acciones son de moverse en el sitio. Apartar sillas y mochilas antes de empezar."
    ],
    extra: [
      "Fer que el gat de la demo digui una frase diferent quan toca la vora i quan toca la roca (dos «si» dins del mateix bucle).|Hacer que el gato de la demo diga una frase distinta cuando toca el borde y cuando toca la roca (dos «si» dentro del mismo bucle).",
      "Calcular amb quins salts (de 3, de 5, de 6, de 7…) una poma que surt de y = 150 passa exactament per y = -150, i comprovar-ho a l'escenari.|Calcular con qué saltos (de 3, de 5, de 6, de 7…) una manzana que sale de y = 150 pasa exactamente por y = -150, y comprobarlo en el escenario.",
      "Fer una «zona de meta» amb dues condicions: si x > 150, digues «Gairebé!»; si x > 200, digues «Meta!».|Hacer una «zona de meta» con dos condiciones: si x > 150, di «¡Casi!»; si x > 200, di «¡Meta!»."
    ],
    trans: [
      "Ve de Tech Robot (el «si» i el «si… si no») i de la unitat 4 (les coordenades). Ara les coordenades es fan servir per decidir.|Viene de Tech Robot (el «si» y el «si… si no») y de la unidad 4 (las coordenadas). Ahora las coordenadas se usan para decidir.",
      "Matemàtiques: comparació de nombres enters (positius i negatius) i múltiples (per què de 7 en 7 no s'arriba a -150 des de 150).|Matemáticas: comparación de números enteros (positivos y negativos) y múltiplos (por qué de 7 en 7 no se llega a -150 desde 150).",
      "Sessió següent: la condició «toca el color» i les decisions niuades (un «si» dins d'un altre).|Sesión siguiente: la condición «toca el color» y las decisiones anidadas (un «si» dentro de otro)."
    ],
    obj: [
      "L'alumne/a fa servir el «si» dins del «per sempre» perquè un personatge vigili a cada fotograma.|El alumno/a usa el «si» dentro del «por siempre» para que un personaje vigile en cada fotograma.",
      "L'alumne/a fa servir la condició «toca…» (un personatge o la vora) per reaccionar a un xoc.|El alumno/a usa la condición «toca…» (un personaje o el borde) para reaccionar a un choque.",
      "L'alumne/a escriu condicions que comparen la x o la y amb un número (x > 200, y < -150).|El alumno/a escribe condiciones que comparan la x o la y con un número (x > 200, y < -150).",
      "L'alumne/a explica per què «més petit que» és més segur que «igual» quan el personatge es mou a salts.|El alumno/a explica por qué «menor que» es más seguro que «igual» cuando el personaje se mueve a saltos."
    ],
    comp: [
      "Competència digital (CD5): crear animacions interactives amb regles programades|Competencia digital (CD5): crear animaciones interactivas con reglas programadas",
      "Pensament computacional: condicions amb xocs i amb valors, comparacions i bucles que vigilen|Pensamiento computacional: condiciones con choques y con valores, comparaciones y bucles que vigilan",
      "Matemàtiques: comparar nombres enters amb <, > i = i raonar amb múltiples|Matemáticas: comparar números enteros con <, > e = y razonar con múltiplos",
      "Tecnologia: màquines que decideixen comparant un número amb un límit (termòstat, bateria)|Tecnología: máquinas que deciden comparando un número con un límite (termostato, batería)"
    ],
    vocab: [
      ["Condició|Condición", "Una pregunta que només es respon amb sí o no; pot ser un xoc o una comparació.|Una pregunta que solo se responde con sí o no; puede ser un choque o una comparación."],
      ["Comparació|Comparación", "Una condició que mira si un número és més gran (>), més petit (<) o igual (=) que un altre.|Una condición que mira si un número es mayor (>), menor (<) o igual (=) que otro."],
      ["Límit|Límite", "El número amb què es compara: a «y < -150», el límit és -150.|El número con el que se compara: en «y < -150», el límite es -150."],
      ["Toca…|Toca…", "La condició que pregunta si el personatge xoca amb un altre, amb la vora o amb el ratolí.|La condición que pregunta si el personaje choca con otro, con el borde o con el ratón."],
      ["Fotograma|Fotograma", "Cada dibuix de l'escenari (30 per segon); el «si» del bucle pregunta a cada un.|Cada dibujo del escenario (30 por segundo); el «si» del bucle pregunta en cada uno."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Condicions amb xocs i números»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Condiciones con choques y números»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Targetes «Comparadors humans» retallades: números i regles (un paquet per grup de 4)|Tarjetas «Comparadores humanos» recortadas: números y reglas (un paquete por grupo de 4)",
        "Una bossa o capsa opaca per a les targetes de número|Una bolsa o caja opaca para las tarjetas de número"
      ],
      imprimir: ["Targetes «Comparadors humans»|Tarjetas «Comparadores humanos»"],
      prep: [
        "El dia abans (15 min): imprimir i retallar les targetes (un paquet per grup de 4) i separar-les en dos munts: números i regles.|El día antes (15 min): imprimir y recortar las tarjetas (un paquete por grupo de 4) y separarlas en dos montones: números y reglas.",
        "El dia abans (10 min): fer tu els quatre reptes, sobretot l'ocell amb «x > 200», per saber com es tria «comparar números» i «posició x».|El día antes (10 min): hacer tú los cuatro retos, sobre todo el pájaro con «x > 200», para saber cómo se elige «comparar números» y «posición x».",
        "Abans de classe (5 min): obrir la presentació i provar la demo de les dues pomes (diapositiva 8).|Antes de clase (5 min): abrir la presentación y probar la demo de las dos manzanas (diapositiva 8).",
        "Abans de classe (5 min): deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Antes de clase (5 min): dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: la Festa de la Fruita|Inicio: la Fiesta de la Fruta", fase: 'inici',
        fa: "Presenta la missió de la unitat: un videojoc per a la Festa de la Fruita. Fes les preguntes de repàs (com baixa la poma i quina y té al cap de 10 voltes). Planteja els dos problemes: com sap la poma que l'ha atrapada la cistella? I com sap que ha arribat a terra si no hi ha cap paret?|Presenta la misión de la unidad: un videojuego para la Fiesta de la Fruta. Haz las preguntas de repaso (cómo baja la manzana y qué y tiene al cabo de 10 vueltas). Plantea los dos problemas: ¿cómo sabe la manzana que la ha atrapado la cesta? ¿Y cómo sabe que ha llegado al suelo si no hay ninguna pared?",
        diu: [
          "La poma baixa de 5 en 5 des de 150: quina y té al cap de 10 voltes? (100)|La manzana baja de 5 en 5 desde 150: ¿qué y tiene al cabo de 10 vueltas? (100)",
          "Com sabrà la poma que ha arribat a baix de tot? No hi ha cap paret…|¿Cómo sabrá la manzana que ha llegado abajo del todo? No hay ninguna pared…",
          "El «si» ja el coneixeu de Tech Robot. Avui li farem preguntes amb números.|El «si» ya lo conocéis de Tech Robot. Hoy le haremos preguntas con números."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Xocs, comparacions i l'«igual»|Choques, comparaciones y el «igual»", fase: 'teoria',
        fa: "Recorda el «si» i el «si… si no» en un minut amb l'animació (qui ha fet Tech Robot ho explica). Projecta el gat i la roca i, abans, demana què passarà. Després, la poma amb «y < -150» i, sobretot, la demo de les dues pomes: que la classe predigui quina tornarà a dalt. Fes el càlcul a la pissarra: 150, 143, 136… -144, -151.|Recuerda el «si» y el «si… si no» en un minuto con la animación (quien ha hecho Tech Robot lo explica). Proyecta el gato y la roca y, antes, pregunta qué pasará. Después, la manzana con «y < -150» y, sobre todo, la demo de las dos manzanas: que la clase prediga cuál volverá arriba. Haz el cálculo en la pizarra: 150, 143, 136… -144, -151.",
        diu: [
          "Qui m'explica què fa el «si» amb el no? I el «si no»?|¿Quién me explica qué hace el «si» con el no? ¿Y el «si no»?",
          "«y < -150» vol dir… (la y és més petita que -150: soc a baix de tot)|«y < -150» quiere decir… (la y es más pequeña que -150: estoy abajo del todo)",
          "Les dues pomes baixen de 7 en 7. Quina tornarà a dalt? Per què l'altra no?|Las dos manzanas bajan de 7 en 7. ¿Cuál volverá arriba? ¿Por qué la otra no?",
          "Si baixés de 5 en 5, l'«igual» funcionaria? (Sí: 150 - 5 × 60 = -150. Però és una casualitat!)|Si bajara de 5 en 5, ¿el «igual» funcionaría? (Sí: 150 - 5 × 60 = -150. ¡Pero es una casualidad!)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: comparadors humans|Desconectado: comparadores humanos", fase: 'desconnectat',
        fa: "Grups de 4. Ronda 1: cadascú treu una targeta de número (de -10 a 20) i un àrbitre/a llegeix regles de comparació: «si el teu número > 10, fes un salt», «si < 0, ajup-te», «si = 7, fes una volta». Ronda 2, el número que es mou: tothom comença a 30 i, a cada pica de mans, resta 7 (30, 23, 16, 9, 2, -5…). La regla és «si el teu número = 0, seu». Ningú no seu mai! Canvieu-la per «si < 0, seu» i torneu-ho a provar.|Grupos de 4. Ronda 1: cada uno saca una tarjeta de número (de -10 a 20) y un árbitro/a lee reglas de comparación: «si tu número > 10, da un salto», «si < 0, agáchate», «si = 7, da una vuelta». Ronda 2, el número que se mueve: todos empiezan en 30 y, con cada palmada, restan 7 (30, 23, 16, 9, 2, -5…). La regla es «si tu número = 0, siéntate». ¡Nadie se sienta nunca! Cambiadla por «si < 0, siéntate» y volved a probar.",
        diu: [
          "Primer compara: el teu número és més gran, més petit o igual que el límit?|Primero compara: ¿tu número es mayor, menor o igual que el límite?",
          "-5 és més gran o més petit que 0? I que -10?|¿-5 es mayor o menor que 0? ¿Y que -10?",
          "Per què ningú no s'ha assegut amb «= 0»? (Hem saltat del 2 al -5.)|¿Por qué nadie se ha sentado con «= 0»? (Hemos saltado del 2 al -5.)",
          "Això mateix li passa a la poma de l'escenari: quina regla li posaríeu?|Eso mismo le pasa a la manzana del escenario: ¿qué regla le pondríais?"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, l'ordenació de la poma i la predicció del cranc. Al pas «Màquines que comparen», que toquin «Ara no»: és per fer a casa. Abans de tocar «Comença» al cranc, demana que diguin en veu alta què passarà. A «Investiga», que expliquin amb números per què la poma no torna.|Cada alumno/a hace la misión, las tarjetas, la ordenación de la manzana y la predicción del cangrejo. En el paso «Máquinas que comparan», que toquen «Ahora no»: es para hacer en casa. Antes de tocar «Empieza» en el cangrejo, pide que digan en voz alta qué pasará. En «Investiga», que expliquen con números por qué la manzana no vuelve.",
        diu: [
          "Llegeix el programa del cranc abans d'executar-lo: què creus que farà?|Lee el programa del cangrejo antes de ejecutarlo: ¿qué crees que hará?",
          "Ordena la poma: què fa primer, baixar o preguntar? (baixa, fa les dues preguntes i torna a començar)|Ordena la manzana: ¿qué hace primero, bajar o preguntar? (baja, hace las dos preguntas y vuelve a empezar)",
          "A «Investiga»: de 7 en 7, quina y té just abans i just després de -150? (-144 i -151)|En «Investiga»: de 7 en 7, ¿qué y tiene justo antes y justo después de -150? (-144 y -151)"
        ],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: històries, les cinc targetes, ordenar, la predicció i l'escenari del cranc i la poma que pregunta malament.|De «La misión» hasta «Investiga»: historias, las cinco tarjetas, ordenar, la predicción y el escenario del cangrejo y la manzana que pregunta mal.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després programa amb la classe el segon repte (l'ocell amb «x > 200») a la pantalla gran, perquè vegin com es tria «comparar números» i «posició x», i deixa'ls fer la resta. Recorda que hi ha dues proves: el programa ha de funcionar a totes dues.|Haced la pausa activa juntos. Después programa con la clase el segundo reto (el pájaro con «x > 200») en la pantalla grande, para que vean cómo se elige «comparar números» y «posición x», y deja que hagan el resto. Recuerda que hay dos pruebas: el programa tiene que funcionar en las dos.",
        diu: [
          "On va el «si»: dins o fora del «per sempre»? (dins)|¿Dónde va el «si»: dentro o fuera del «por siempre»? (dentro)",
          "Per què a la prova 2 la poma no s'ha d'amagar? (perquè no toca la cistella: és en un altre lloc)|¿Por qué en la prueba 2 la manzana no se tiene que esconder? (porque no toca la cesta: está en otro sitio)",
          "L'ocell: quines dues comparacions necessites? (x > 200 i x < -200)|El pájaro: ¿qué dos comparaciones necesitas? (x > 200 y x < -200)",
          "Al repte de l'error: quan pregunta la poma si toca la cistella? (només al principi: per això no funciona)|En el reto del error: ¿cuándo pregunta la manzana si toca la cesta? (solo al principio: por eso no funciona)"
        ],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: atrapa la poma, l'ocell amb la x, la poma que torna (y < -150) i arregla l'error.|«Pausa activa» y los cuatro retos: atrapa la manzana, el pájaro con la x, la manzana que vuelve (y < -150) y arregla el error.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera condició|Crea: mi primera condición", fase: 'crea',
        fa: "Cada alumne/a decideix com reacciona en Numi quan toca el regal; qui vulgui, que hi afegeixi una condició amb números (per exemple, si x > 150, diu «Ja hi soc gairebé!»). En parelles, s'ensenyen el programa i l'altre/a endevina la reacció abans d'executar-lo.|Cada alumno/a decide cómo reacciona Numi cuando toca el regalo; quien quiera, que añada una condición con números (por ejemplo, si x > 150, dice «¡Ya casi estoy!»). Por parejas, se enseñan el programa y el otro/a adivina la reacción antes de ejecutarlo.",
        diu: [
          "Quina reacció has triat per a en Numi? Ningú no l'ha de fer igual.|¿Qué reacción has elegido para Numi? Nadie la tiene que hacer igual.",
          "Has fet servir algun número a la condició? Quin signe i per què?|¿Has usado algún número en la condición? ¿Qué signo y por qué?",
          "On és el teu «si»: dins del bucle? Si no, en Numi no se n'adonarà!|¿Dónde está tu «si»: dentro del bucle? Si no, ¡Numi no se dará cuenta!"
        ],
        slides: ['s15'], app: "Pas «Crea»: La meva primera condició.|Paso «Crea»: Mi primera condición.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: [
          "Digues una condició amb un número que hagis fet servir avui. (y < -150, x > 200)|Di una condición con un número que hayas usado hoy. (y < -150, x > 200)",
          "Ara ja ho sabeu: com sap la poma que ha arribat a terra? (pregunta «y < -150?» a cada volta)|Ahora ya lo sabéis: ¿cómo sabe la manzana que ha llegado al suelo? (pregunta «¿y < -150?» en cada vuelta)",
          "El pròxim dia, els colors del fons també faran preguntes… i posarem preguntes dins d'altres preguntes!|El próximo día, los colores del fondo también harán preguntas… ¡y pondremos preguntas dentro de otras preguntas!"
        ],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «y = -150» i la poma passa de llarg.|Usa «y = -150» y la manzana pasa de largo.", "Que faci la llista de valors de la y (150, 143, 136…) i miri si apareix -150. Quin signe detectaria qualsevol punt de sota?|Que haga la lista de valores de la y (150, 143, 136…) y mire si aparece -150. ¿Qué signo detectaría cualquier punto de debajo?"],
      ["Confon < i > amb nombres negatius (creu que -160 és més gran que -150).|Confunde < y > con números negativos (cree que -160 es mayor que -150).", "Dibuixa la recta vertical de la y: -160 és més avall que -150, per tant més petit. Com al termòmetre: -10 graus fa més fred que -5.|Dibuja la recta vertical de la y: -160 está más abajo que -150, por lo tanto es menor. Como en el termómetro: -10 grados hace más frío que -5."],
      ["Posa el «si» abans del «per sempre» i no entén per què no passa res.|Pone el «si» antes del «por siempre» y no entiende por qué no pasa nada.", "Pregunta: quan pregunta la poma si toca la cistella? Que segueixi el programa amb el dit, bloc a bloc, i vegi que el «si» només es fa una vegada.|Pregunta: ¿cuándo pregunta la manzana si toca la cesta? Que siga el programa con el dedo, bloque a bloque, y vea que el «si» solo se hace una vez."],
      ["A l'ocell, compara amb la y en lloc de la x.|En el pájaro, compara con la y en lugar de la x.", "Pregunta: l'ocell va de dreta a esquerra o de dalt a baix? Quin número canvia mentre vola?|Pregunta: ¿el pájaro va de derecha a izquierda o de arriba abajo? ¿Qué número cambia mientras vuela?"],
      ["Funciona a la prova 1 però no a la 2 i pensa que l'app s'equivoca.|Funciona en la prueba 1 pero no en la 2 y piensa que la app se equivoca.", "Que miri on és la cistella a la prova 2. El programa ha de decidir sol, sense saber on és: per això cal la pregunta.|Que mire dónde está la cesta en la prueba 2. El programa tiene que decidir solo, sin saber dónde está: por eso hace falta la pregunta."],
      ["Posa els blocs de la reacció a sota del «si» i no a dins.|Pone los bloques de la reacción debajo del «si» y no dentro.", "Fes-li notar el forat del bloc «si»: el que hi ha dins només passa amb el sí. Que toqui el forat abans d'afegir el bloc.|Hazle notar el hueco del bloque «si»: lo que hay dentro solo pasa con el sí. Que toque el hueco antes de añadir el bloque."]
    ],
    diff: {
      mes: "Fer una zona de meta amb dues condicions (x > 150: «Gairebé!»; x > 200: «Meta!») i calcular amb quins salts una poma que surt de y = 150 passa exactament per -150.|Hacer una zona de meta con dos condiciones (x > 150: «¡Casi!»; x > 200: «¡Meta!») y calcular con qué saltos una manzana que sale de y = 150 pasa exactamente por -150.",
      menys: "Tenir dibuixada la recta de la y amb -150 marcat i fer servir només «<». Començar pel primer repte, que ja té el bucle fet, i deixar l'ocell amb «toca la vora» si la comparació costa massa. Ruta 4t: llegir «y < -150» com «ha tocat el terra» (la línia taronja dels eixos) i «x > 200» com «ha passat la línia de la dreta».|Tener dibujada la recta de la y con -150 marcado y usar solo «<». Empezar por el primer reto, que ya tiene el bucle hecho, y dejar el pájaro con «toca el borde» si la comparación cuesta demasiado. Ruta 4.º: leer «y < -150» como «ha tocado el suelo» (la línea naranja de los ejes) y «x > 200» como «ha pasado la línea de la derecha»."
    },
    aval: {
      ticket: ["Escriu la condició que diu «la poma ha arribat a baix» (sota de y = -150).|Escribe la condición que dice «la manzana ha llegado abajo» (debajo de y = -150).", "Per què «y = -150» pot fallar?|¿Por qué «y = -150» puede fallar?"],
      rubric: [
        ["El «si» al bucle|El «si» en el bucle", "Posa la reacció dins del «si» i el «si» dins del «per sempre», i explica per què.|Pone la reacción dentro del «si» y el «si» dentro del «por siempre», y explica por qué.", "Fa servir el «si», però de vegades fora del bucle o amb la reacció a fora.|Usa el «si», pero a veces fuera del bucle o con la reacción fuera."],
        ["Condicions de xoc|Condiciones de choque", "Tria el personatge o la vora correctes a «toca…» sense ajuda.|Elige el personaje o el borde correctos en «toca…» sin ayuda.", "Necessita ajuda per canviar el que toca.|Necesita ayuda para cambiar lo que toca."],
        ["Comparacions|Comparaciones", "Escriu comparacions amb x o y, també amb negatius, i tria el signe adequat.|Escribe comparaciones con x o y, también con negativos, y elige el signo adecuado.", "Fa la comparació, però confon < i > o la x i la y.|Hace la comparación, pero confunde < y > o la x y la y."],
        [
          "L'«igual» i els salts|El «igual» y los saltos",
          "Explica amb números per què «y = -150» pot no ser mai cert.|Explica con números por qué «y = -150» puede no ser nunca cierto.",
          "Sap que l'«igual» falla, però no sap dir per què.|Sabe que el «igual» falla, pero no sabe decir por qué."
        ]
      ]
    },
    casa: "A casa, feu junts «Màquines que comparen»: busqueu tres aparells que decideixen comparant un número amb un límit (el termòstat, la bateria del mòbil, el microones…) i escriviu-ne la regla «si [número] < o > [límit], llavors…».|En casa, haced juntos «Máquinas que comparan»: buscad tres aparatos que deciden comparando un número con un límite (el termostato, la batería del móvil, el microondas…) y escribid su regla «si [número] < o > [límite], entonces…».",
    slides: [
      { id: 's1', k: 'portada', t: "Condicions amb xocs i números|Condiciones con choques y números", x: "Unitat 5: Condicions. Avui els personatges faran preguntes sobre xocs i sobre la seva posició.|Unidad 5: Condiciones. Hoy los personajes harán preguntas sobre choques y sobre su posición.",
        nota: "Explica que aquesta unitat acabarà amb un videojoc propi: Atrapa la fruita.|Explica que esta unidad terminará con un videojuego propio: Atrapa la fruta." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["La poma baixa de 5 en 5 des de 150: quina y té al cap de 10 voltes?|La manzana baja de 5 en 5 desde 150: ¿qué y tiene al cabo de 10 vueltas?", "On és la y = -150 a l'escenari?|¿Dónde está la y = -150 en el escenario?"],
        nota: "Si dubten amb la y negativa, dibuixa l'eix vertical a la pissarra.|Si dudan con la y negativa, dibuja el eje vertical en la pizarra." },
      { id: 's3', k: 'pregunta', t: "Com sap la poma que ha arribat a terra?|¿Cómo sabe la manzana que ha llegado al suelo?", x: "No hi ha cap paret: només hi ha números.|No hay ninguna pared: solo hay números.",
        nota: "Recull idees sense corregir. Busca la idea de preguntar per la y.|Recoge ideas sin corregir. Busca la idea de preguntar por la y." },
      { id: 's4', k: 'anim', t: "Recorda: el «si»|Recuerda: el «si»", anim: 'g5if', x: "Amb el sí, fa els blocs de dins. Amb el no, se'ls salta. (Com amb en Bit.)|Con el sí, hace los bloques de dentro. Con el no, se los salta. (Como con Bit.)",
        nota: "Un minut: que ho expliqui algú que hagi fet Tech Robot. Recorda també el «si no» i que dins del «per sempre» es pregunta a cada fotograma.|Un minuto: que lo explique alguien que haya hecho Tech Robot. Recuerda también el «si no» y que dentro del «por siempre» se pregunta en cada fotograma." },
      { id: 's5', k: 'media', t: "El gat i la roca|El gato y la roca", x: "Què creieu que farà el gat quan toqui la roca?|¿Qué creéis que hará el gato cuando toque la roca?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -150, y: -110, dir: 90 }, { id: 'roca', art: 'roca', x: 120, y: -110 }] }, prog: '@gat flag{ forever{ move:4 bounce if:touch:roca{ say:"Ai, una roca!|¡Ay, una roca!",1 turn:180 } } }', time: 7 },
        nota: "Primer, que llegeixin els blocs i facin una predicció. Després, deixa-la funcionar dues vegades.|Primero, que lean los bloques y hagan una predicción. Después, déjala funcionar dos veces." },
      { id: 's6', k: 'media', t: "Preguntar per un número: y < -150|Preguntar por un número: y < -150", x: "Quan la y és més petita que -150, la poma torna a dalt.|Cuando la y es más pequeña que -150, la manzana vuelve arriba.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'poma', art: 'poma', x: 0, y: 150 }] }, prog: '@poma flag{ forever{ chy:-6 if:y<-150{ sety:150 } } }', time: 7 },
        nota: "Assenyala on és y = -150 a l'escenari i ensenya a la pantalla com es tria «comparar números».|Señala dónde está y = -150 en el escenario y enseña en la pantalla cómo se elige «comparar números»." },
      { id: 's7', k: 'concepte', t: "Comparar números|Comparar números", punts: ["> més gran que: x > 200 (a la dreta de la línia)|> mayor que: x > 200 (a la derecha de la línea)", "< més petit que: y < -150 (per sota)|< menor que: y < -150 (por debajo)", "= igual: només si el número és exacte|= igual: solo si el número es exacto"],
        nota: "Repassa amb negatius: -160 < -150? (Sí: és més avall.) Fes servir el termòmetre com a exemple.|Repasa con negativos: ¿-160 < -150? (Sí: está más abajo.) Usa el termómetro como ejemplo.", pic: "img/ment/par.webp" },
      { id: 's8', k: 'media', t: "Compte amb l'«igual»|Cuidado con el «igual»", x: "Totes dues baixen de 7 en 7. Quina tornarà a dalt?|Las dos bajan de 7 en 7. ¿Cuál volverá arriba?",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'poma', art: 'poma', x: -110, y: 150, name: 'Poma =|Manzana =' }, { id: 'poma2', art: 'poma', x: 110, y: 150, name: 'Poma <|Manzana <' }] }, prog: '@poma flag{ say:"y = -150?|¿y = -150?" forever{ chy:-7 if:y=-150{ sety:150 } } } @poma2 flag{ say:"y < -150?|¿y < -150?" forever{ chy:-7 if:y<-150{ sety:150 } } }', time: 8 },
        nota: "Escriu a la pissarra la sèrie 150, 143, 136… fins a -144 i -151: el -150 no hi surt mai. És la idea clau de la sessió.|Escribe en la pizarra la serie 150, 143, 136… hasta -144 y -151: el -150 no sale nunca. Es la idea clave de la sesión." },
      { id: 's9', k: 'media', t: "«Si toques la vora, rebota»|«Si tocas el borde, rebota»", x: "El bloc que ja coneixíeu té una condició amagada.|El bloque que ya conocíais tiene una condición escondida.",
        media: { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'pilota', art: 'pilota', x: -100, y: 20, dir: 90 }] }, prog: '@pilota flag{ forever{ move:7 if:touch:edge{ turn:180 sound:boing } } }', time: 6 },
        nota: "Pregunta quina és la condició i què fa amb el sí. Compara-ho amb «x > 200»: la vora és fixa; la línia del número la tries tu.|Pregunta cuál es la condición y qué hace con el sí. Compáralo con «x > 200»: el borde es fijo; la línea del número la eliges tú." },
      { id: 's10', k: 'activitat', t: "Comparadors humans|Comparadores humanos", timer: 11, punts: ["Ronda 1: treu un número i escolta la regla.|Ronda 1: saca un número y escucha la regla.", "Compara: més gran, més petit o igual?|Compara: ¿mayor, menor o igual?", "Ronda 2: comença a 30 i resta 7 a cada pica.|Ronda 2: empieza en 30 y resta 7 con cada palmada.", "Regla «= 0, seu»… i després «< 0, seu».|Regla «= 0, siéntate»… y después «< 0, siéntate»."],
        nota: "Fes tu la primera ronda davant de tothom. A la segona, deixa que descobreixin sols que ningú no seu.|Haz tú la primera ronda delante de todos. En la segunda, deja que descubran solos que nadie se sienta." },
      { id: 's11', k: 'activitat', t: "El número que es mou|El número que se mueve", punts: ["30 → 23 → 16 → 9 → 2 → -5|30 → 23 → 16 → 9 → 2 → -5", "Amb «= 0», ningú no seu.|Con «= 0», nadie se sienta.", "Amb «< 0», seuen tots quan passen el zero.|Con «< 0», se sientan todos cuando pasan el cero."],
        nota: "Deixa-la projectada a la ronda 2 i relaciona-la amb la demo de les dues pomes.|Déjala proyectada en la ronda 2 y relaciónala con la demo de las dos manzanas." },
      { id: 's12', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 13, punts: ["Obre la sessió «Condicions amb xocs i números».|Abre la sesión «Condiciones con choques y números».", "«Màquines que comparen»: toca «Ara no» (és per a casa).|«Máquinas que comparan»: toca «Ahora no» (es para casa).", "Abans d'executar el cranc, digues què farà.|Antes de ejecutar el cangrejo, di qué hará.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i fes preguntes de predicció i de càlcul.|Pasea y haz preguntas de predicción y de cálculo." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Atrapa la poma|1. Atrapa la manzana", "2. L'ocell amb la x|2. El pájaro con la x", "3. La poma que torna (y < -150)|3. La manzana que vuelve (y < -150)", "4. Arregla l'error|4. Arregla el error"],
        nota: "Fes el segon junts a la pantalla gran: com es tria «comparar números» i «posició x».|Haced el segundo juntos en la pantalla grande: cómo se elige «comparar números» y «posición x»." },
      { id: 's14', k: 'concepte', t: "Dues proves, un programa|Dos pruebas, un programa", punts: ["A cada prova, les coses són en un lloc diferent.|En cada prueba, las cosas están en un sitio diferente.", "El programa no sap on són: ho ha de preguntar.|El programa no sabe dónde están: lo tiene que preguntar.", "Per això cal el «si».|Por eso hace falta el «si»."],
        nota: "Explica-ho quan algú digui que «a la prova 1 ja funcionava».|Explícalo cuando alguien diga que «en la prueba 1 ya funcionaba».", pic: "img/ment/atu.webp" },
      { id: 's15', k: 'activitat', t: "Crea: la meva primera condició|Crea: mi primera condición", timer: 5, x: "En Numi toca el regal. Com reacciona? Si vols, afegeix-hi una condició amb números!|Numi toca el regalo. ¿Cómo reacciona? Si quieres, ¡añade una condición con números!",
        nota: "Valora les idees diferents i les condicions amb x o y ben triades.|Valora las ideas diferentes y las condiciones con x o y bien elegidas." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El «si» dins del «per sempre» pregunta a cada fotograma.|El «si» dentro del «por siempre» pregunta en cada fotograma.", "Una condició pot ser un xoc o una comparació (y < -150).|Una condición puede ser un choque o una comparación (y < -150).", "Amb salts, millor < o > que =.|Con saltos, mejor < o > que =."],
        nota: "Torna a la pregunta del principi: ara ja saben com ho sap la poma.|Vuelve a la pregunta del principio: ahora ya saben cómo lo sabe la manzana." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["La condició de «ha arribat a baix».|La condición de «ha llegado abajo».", "Per què «y = -150» pot fallar?|¿Por qué «y = -150» puede fallar?"],
        nota: "Una pregunta per alumne/a a la porta.|Una pregunta por alumno/a en la puerta." }
    ],
    print: [
      { id: 'p1', t: "Targetes «Comparadors humans»|Tarjetas «Comparadores humanos»", k: 'targetes',
        intro: "Un paquet per grup de 4. Els números van en una bossa; les regles, les llegeix l'àrbitre/a. A la ronda 2 no cal targeta: tothom comença a 30 i resta 7 a cada pica.|Un paquete por grupo de 4. Los números van en una bolsa; las reglas, las lee el árbitro/a. En la ronda 2 no hace falta tarjeta: todos empiezan en 30 y restan 7 con cada palmada.",
        items: [
          { t: "-10|-10", n: 1 }, { t: "-5|-5", n: 1 }, { t: "-1|-1", n: 1 }, { t: "0|0", n: 1 }, { t: "3|3", n: 1 }, { t: "7|7", n: 1 },
          { t: "10|10", n: 1 }, { t: "12|12", n: 1 }, { t: "15|15", n: 1 }, { t: "20|20", n: 1 },
          { t: "Si el teu número > 10 → fes un salt 🦘|Si tu número > 10 → da un salto 🦘", n: 1 }, { t: "Si el teu número < 0 → ajup-te 🧎|Si tu número < 0 → agáchate 🧎", n: 1 },
          { t: "Si el teu número = 7 → fes una volta 🔄|Si tu número = 7 → da una vuelta 🔄", n: 1 }, { t: "Si el teu número < 5 → toca't el nas 👃|Si tu número < 5 → tócate la nariz 👃", n: 1 },
          { t: "Ronda 2 · Si el teu número = 0 → seu 🪑|Ronda 2 · Si tu número = 0 → siéntate 🪑", n: 1 }, { t: "Ronda 2 · Si el teu número < 0 → seu 🪑|Ronda 2 · Si tu número < 0 → siéntate 🪑", n: 1 }
        ] }
    ]
  },
  /* ---------- Sessió 2 · Colors i decisions niuades ---------- */
  'g5-2': {
    intro: "Segona sessió de condicions. El fons també dona informació: la condició «toca el color» pregunta si el personatge trepitja una zona de color (el blau del mar, el verd de l'herba, les parets del laberint). El «si… si no» ja el coneixen de Tech Robot i de la sessió anterior; la idea nova és posar decisions dins d'altres decisions. En un videojoc de plataformes, primer es pregunta «toco el terra?» i, només si és que sí, «prem algú la fletxa amunt?»: si sí, salta; si no, camina; i si no toca el terra, cau. Aquestes regles es dibuixen com un arbre de decisions abans de programar-les. La classe comença amb el problema d'en Pinces, segueix amb un videojoc de plataformes humà i acaba amb els reptes de colors i el laberint. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Segunda sesión de condiciones. El fondo también da información: la condición «toca el color» pregunta si el personaje pisa una zona de color (el azul del mar, el verde de la hierba, las paredes del laberinto). El «si… si no» ya lo conocen de Tech Robot y de la sesión anterior; la idea nueva es poner decisiones dentro de otras decisiones. En un videojuego de plataformas, primero se pregunta «¿toco el suelo?» y, solo si es que sí, «¿alguien pulsa la flecha arriba?»: si sí, salta; si no, camina; y si no toca el suelo, cae. Estas reglas se dibujan como un árbol de decisiones antes de programarlas. La clase empieza con el problema de Pinzas, sigue con un videojuego de plataformas humano y termina con los retos de colores y el laberinto. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
    claus: [
      "«Toca el color» pregunta pel fons: si el personatge trepitja una zona d'aquell color.|«Toca el color» pregunta por el fondo: si el personaje pisa una zona de ese color.",
      "Un «si» es pot posar dins d'un altre «si» (o del seu «si no»): la segona pregunta només es fa quan la primera ho permet.|Un «si» se puede poner dentro de otro «si» (o de su «si no»): la segunda pregunta solo se hace cuando la primera lo permite.",
      "Les regles es dibuixen com un arbre de decisions: a cada branca, una pregunta; a cada fulla, una acció.|Las reglas se dibujan como un árbol de decisiones: en cada rama, una pregunta; en cada hoja, una acción.",
      "Cada camí de l'arbre acaba en una sola acció: a cada fotograma, el personatge en fa només una.|Cada camino del árbol termina en una sola acción: en cada fotograma, el personaje hace solo una."
    ],
    prev: [
      "El «si» dins del «per sempre», les condicions «toca…» i les comparacions (sessió anterior).|El «si» dentro del «por siempre», las condiciones «toca…» y las comparaciones (sesión anterior).",
      "El «si… si no» de Tech Robot o de la targeta de repàs de la sessió anterior.|El «si… si no» de Tech Robot o de la tarjeta de repaso de la sesión anterior.",
      "El laberint de la unitat 4: les parets són blaves i la sortida, verda.|El laberinto de la unidad 4: las paredes son azules y la salida, verde."
    ],
    faq: [
      ["Quins colors puc triar a «toca el color»?|¿Qué colores puedo elegir en «toca el color»?", "Els que té el fons de cada repte: a la platja, el blau del mar i el groc de la sorra; al bosc, el verd de l'herba; al laberint, blau, verd i vermell. Si el fons no té zones de color, l'app t'ho diu.|Los que tiene el fondo de cada reto: en la playa, el azul del mar y el amarillo de la arena; en el bosque, el verde de la hierba; en el laberinto, azul, verde y rojo. Si el fondo no tiene zonas de color, la app te lo dice."],
      ["Com poso un «si» dins d'un altre?|¿Cómo pongo un «si» dentro de otro?", "Toca el forat de dins del primer «si» (o de la seva part «si no») i afegeix-hi un altre «si» de la paleta. El segon queda dins i només es fa quan el primer hi deixa passar.|Toca el hueco de dentro del primer «si» (o de su parte «si no») y añade otro «si» de la paleta. El segundo queda dentro y solo se hace cuando el primero deja pasar."],
      ["Quina diferència hi ha entre dos «si» seguits i un «si» dins d'un altre?|¿Qué diferencia hay entre dos «si» seguidos y un «si» dentro de otro?", "Dos «si» seguits pregunten sempre totes dues coses. Un «si» dins d'un altre només fa la segona pregunta si la primera diu que sí: per això en Numi no salta mai a l'aire.|Dos «si» seguidos preguntan siempre las dos cosas. Un «si» dentro de otro solo hace la segunda pregunta si la primera dice que sí: por eso Numi no salta nunca en el aire."],
      ["On és el «si no»? No el trobo a la paleta.|¿Dónde está el «si no»? No lo encuentro en la paleta.", "No és un bloc a part: toca un bloc «si» que ja tinguis i després el botó «Afegeix «si no»». Li surt una segona part a sota.|No es un bloque aparte: toca un bloque «si» que ya tengas y después el botón «Añade «si no»». Le sale una segunda parte debajo."],
      ["Al laberint, per què l'Estel es mou sol quan toco «Comprova»?|En el laberinto, ¿por qué Estel se mueve solo cuando toco «Comprueba»?", "«Comprova» prem les fletxes per tu, sempre igual, per veure si les teves regles funcionen a les dues proves. Amb «Comença» les prems tu.|«Comprueba» pulsa las flechas por ti, siempre igual, para ver si tus reglas funcionan en las dos pruebas. Con «Empieza» las pulsas tú."],
      ["Un arbre de decisions es fa servir de veritat?|¿Un árbol de decisiones se usa de verdad?", "Sí: als videojocs (què fa un enemic segons on ets), a les apps que et recomanen coses i fins i tot als metges per decidir quines proves fer. Primer es dibuixa i després es programa.|Sí: en los videojuegos (qué hace un enemigo según dónde estás), en las apps que te recomiendan cosas e incluso los médicos para decidir qué pruebas hacer. Primero se dibuja y después se programa."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["Les fletxes del teclat no mouen el personatge.|Las flechas del teclado no mueven al personaje.", "Cal tocar primer l'escenari (perquè la pàgina «escolti» el teclat) o fer servir els botons de fletxes de sota l'escenari, que també funcionen al mòbil.|Hay que tocar primero el escenario (para que la página «escuche» el teclado) o usar los botones de flechas de debajo del escenario, que también funcionan en el móvil."],
      ["El «si» nou queda a sota de l'altre i no a dins.|El «si» nuevo queda debajo del otro y no dentro.", "Abans d'afegir-lo, cal tocar el forat de dins del primer «si» (surt la línia «els blocs nous van aquí»). Un bloc posat es pot moure amb ↑ i ↓.|Antes de añadirlo, hay que tocar el hueco de dentro del primer «si» (sale la línea «los bloques nuevos van aquí»). Un bloque puesto se puede mover con ↑ y ↓."],
      ["Al laberint, «Comprova» falla tot i que amb les fletxes funciona.|En el laberinto, «Comprueba» falla aunque con las flechas funciona.", "Mireu quina prova falla (Prova 1 o 2, a dalt de l'escenari) i el missatge de sota. Sovint falta «atura tot» després de «He sortit!» o la paret no torna a x: -175, y: 100.|Mirad qué prueba falla (Prueba 1 o 2, encima del escenario) y el mensaje de debajo. A menudo falta «para todo» después de «¡He salido!» o la pared no vuelve a x: -175, y: 100."],
      ["No apareix el botó «Afegeix «si no»».|No aparece el botón «Añade «si no»».", "Cal tocar la part de dalt del bloc «si» (el nom del bloc, no el forat): s'obren els botons del bloc seleccionat.|Hay que tocar la parte de arriba del bloque «si» (el nombre del bloque, no el hueco): se abren los botones del bloque seleccionado."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Plataformes humanes: els fulls de terra es fixen amb cinta perquè no rellisquin; els salts són petits i al lloc, sense empènyer.|Plataformas humanas: las hojas del suelo se fijan con cinta para que no resbalen; los saltos son pequeños y en el sitio, sin empujar."
    ],
    extra: [
      "Al laberint, afegir la regla del vermell (la trampa): si el toca, diu «Ai!» i torna a l'inici.|En el laberinto, añadir la regla del rojo (la trampa): si lo toca, dice «¡Ay!» y vuelve al inicio.",
      "Afegir una branca a l'arbre del salt: si toca el verd i prem la fletxa dreta, camina més de pressa (mou-te 6).|Añadir una rama al árbol del salto: si toca el verde y pulsa la flecha derecha, camina más deprisa (muévete 6).",
      "Dibuixar l'arbre de decisions d'un enemic d'un videojoc conegut i explicar-lo a la classe.|Dibujar el árbol de decisiones de un enemigo de un videojuego conocido y explicarlo a la clase."
    ],
    trans: [
      "Ve de la sessió anterior: les mateixes condicions, ara amb colors i posades unes dins de les altres.|Viene de la sesión anterior: las mismas condiciones, ahora con colores y puestas unas dentro de otras.",
      "Sessió següent: ajuntar preguntes amb «i» i «o», i girar-les amb «no» (una altra manera de combinar condicions).|Sesión siguiente: juntar preguntas con «y» y «o», y girarlas con «no» (otra manera de combinar condiciones).",
      "Ciències i matemàtiques: els diagrames d'arbre per classificar i per comptar possibilitats.|Ciencias y matemáticas: los diagramas de árbol para clasificar y para contar posibilidades."
    ],
    obj: [
      "L'alumne/a fa servir la condició «toca el color» per fer que un personatge reaccioni a una zona del fons.|El alumno/a usa la condición «toca el color» para que un personaje reaccione a una zona del fondo.",
      "L'alumne/a llegeix un programa amb un «si» dins d'un altre i diu què farà el personatge en cada situació.|El alumno/a lee un programa con un «si» dentro de otro y dice qué hará el personaje en cada situación.",
      "L'alumne/a dibuixa les regles d'un personatge com un arbre de decisions i les passa a blocs.|El alumno/a dibuja las reglas de un personaje como un árbol de decisiones y las pasa a bloques.",
      "L'alumne/a programa regles de colors en un laberint i comprova que funcionen a totes les proves.|El alumno/a programa reglas de colores en un laberinto y comprueba que funcionan en todas las pruebas."
    ],
    comp: [
      "Competència digital (CD5): programar la lògica de decisions d'un videojoc propi|Competencia digital (CD5): programar la lógica de decisiones de un videojuego propio",
      "Pensament computacional: condicions niuades, arbres de decisions i depuració|Pensamiento computacional: condiciones anidadas, árboles de decisiones y depuración",
      "Matemàtiques: diagrames d'arbre i classificació per passos|Matemáticas: diagramas de árbol y clasificación por pasos",
      "Educació artística: el color com a senyal|Educación artística: el color como señal"
    ],
    vocab: [
      ["Toca el color|Toca el color", "Condició que pregunta si el personatge trepitja un color del fons.|Condición que pregunta si el personaje pisa un color del fondo."],
      ["Decisió niuada|Decisión anidada", "Un «si» posat dins d'un altre «si» (o del seu «si no»).|Un «si» puesto dentro de otro «si» (o de su «si no»)."],
      ["Arbre de decisions|Árbol de decisiones", "Dibuix de les regles: preguntes a les branques i accions a les fulles.|Dibujo de las reglas: preguntas en las ramas y acciones en las hojas."],
      ["Gravetat|Gravedad", "Quan un personatge cau fins que toca el terra.|Cuando un personaje cae hasta que toca el suelo."],
      ["Atura tot|Para todo", "Bloc que acaba el programa: tots els personatges s'aturen.|Bloque que acaba el programa: todos los personajes se paran."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb la sessió «Colors i decisions niuades»|Un ordenador por alumno/a con la sesión «Colores y decisiones anidadas»",
        "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "8 o 10 fulls verds per grup (el terra) i cinta de pintor per fixar-los, i 2 fulls vermells (trampes)|8 o 10 hojas verdes por grupo (el suelo) y cinta de pintor para fijarlas, y 2 hojas rojas (trampas)",
        "La fitxa «El meu arbre de decisions» (una per alumne/a)|La ficha «Mi árbol de decisiones» (una por alumno/a)"
      ],
      imprimir: ["El meu arbre de decisions|Mi árbol de decisiones"],
      prep: [
        "El dia abans (10 min): imprimir una fitxa per alumne/a i preparar els fulls verds i vermells per grup.|El día antes (10 min): imprimir una ficha por alumno/a y preparar las hojas verdes y rojas por grupo.",
        "El dia abans (10 min): provar el repte del laberint amb les fletxes i amb «Comprova», i la demo del salt (diapositiva 7) per saber quan es prem la fletxa.|El día antes (10 min): probar el reto del laberinto con las flechas y con «Comprueba», y la demo del salto (diapositiva 7) para saber cuándo se pulsa la flecha.",
        "Abans de classe (5 min): enganxar els fulls al terra, amb espais entre ells, en un o dos recorreguts.|Antes de clase (5 min): pegar las hojas en el suelo, con espacios entre ellas, en uno o dos recorridos.",
        "Abans de classe (5 min): deixar els ordinadors amb la sessió iniciada i la presentació oberta.|Antes de clase (5 min): dejar los ordenadores con la sesión iniciada y la presentación abierta."
      ]
    },
    plan: [
      { min: 5, t: "Inici: colors que avisen|Inicio: colores que avisan", fase: 'inici',
        fa: "Repassa la sessió anterior amb les dues preguntes de la diapositiva (l'«igual» i el blau del laberint). Pregunta en quins videojocs el personatge només pot saltar quan és a terra. Presenta en Pinces, el cranc que no sap nedar i necessita que el fons l'avisi.|Repasa la sesión anterior con las dos preguntas de la diapositiva (el «igual» y el azul del laberinto). Pregunta en qué videojuegos el personaje solo puede saltar cuando está en el suelo. Presenta a Pinzas, el cangrejo que no sabe nadar y necesita que el fondo le avise.",
        diu: [
          "La poma cau de 7 en 7: «y = -150» o «y < -150»? Per què?|La manzana cae de 7 en 7: ¿«y = -150» o «y < -150»? ¿Por qué?",
          "En un videojoc de plataformes, podeu saltar mentre sou a l'aire? (Normalment no.)|En un videojuego de plataformas, ¿podéis saltar mientras estáis en el aire? (Normalmente no.)",
          "En Pinces no sap nedar. Com el pot avisar el fons? (amb el blau del mar)|Pinzas no sabe nadar. ¿Cómo le puede avisar el fondo? (con el azul del mar)"
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Toca el color i decisions niuades|Toca el color y decisiones anidadas", fase: 'teoria',
        fa: "Mostra l'animació del color i la demo d'en Pinces. Després, la demo del salt: atura-la quan en Numi és a l'aire i pregunta què passaria si algú premés la fletxa. Dibuixa l'arbre de decisions a la pissarra mentre mostres l'animació i fes que la classe el recorri en tres situacions (a terra, a terra amb fletxa, a l'aire).|Muestra la animación del color y la demo de Pinzas. Después, la demo del salto: párala cuando Numi está en el aire y pregunta qué pasaría si alguien pulsara la flecha. Dibuja el árbol de decisiones en la pizarra mientras muestras la animación y haz que la clase lo recorra en tres situaciones (en el suelo, en el suelo con flecha, en el aire).",
        diu: [
          "El cranc pregunta «toco el blau?». Què fa quan la resposta és sí? (torna a la sorra)|El cangrejo pregunta «¿toco el azul?». ¿Qué hace cuando la respuesta es sí? (vuelve a la arena)",
          "En Numi és a l'aire i premo amunt: salta? (No: la pregunta de la fletxa és dins de «toca el verd».)|Numi está en el aire y pulso arriba: ¿salta? (No: la pregunta de la flecha está dentro de «toca el verde».)",
          "Quantes preguntes fa en Numi quan és a terra? I a l'aire? (Dues; una.)|¿Cuántas preguntas hace Numi cuando está en el suelo? ¿Y en el aire? (Dos; una.)",
          "Cada camí de l'arbre acaba en una acció. Quantes accions pot fer alhora? (Una.)|Cada camino del árbol termina en una acción. ¿Cuántas acciones puede hacer a la vez? (Una.)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: regles dins de regles|Desconectado: reglas dentro de reglas", fase: 'desconnectat',
        fa: "Grups de 4: un actor/actriu, un àrbitre/a i dos dibuixants. Els dibuixants fan l'arbre de decisions a la fitxa (toco verd? → no: m'ajupo; sí: l'àrbitre/a diu «amunt»? → sí: salto; no: un pas). L'actor/actriu recorre els fulls verds del terra i, a cada pas, fa les preguntes en veu alta i en ordre; l'àrbitre/a diu «amunt» de tant en tant i comprova que segueix l'arbre. Segona ronda: afegeixen una pregunta nova (el full vermell, torna a l'inici) a una branca.|Grupos de 4: un actor/actriz, un árbitro/a y dos dibujantes. Los dibujantes hacen el árbol de decisiones en la ficha (¿toco verde? → no: me agacho; sí: ¿el árbitro/a dice «arriba»? → sí: salto; no: un paso). El actor/actriz recorre las hojas verdes del suelo y, en cada paso, hace las preguntas en voz alta y en orden; el árbitro/a dice «arriba» de vez en cuando y comprueba que sigue el árbol. Segunda ronda: añaden una pregunta nueva (la hoja roja, vuelve al inicio) a una rama.",
        diu: [
          "Primer la pregunta de dalt de l'arbre: toques un full verd?|Primero la pregunta de arriba del árbol: ¿tocas una hoja verde?",
          "Si no toques el verd, fas la pregunta de l'«amunt»? (No: m'ajupo i prou.)|Si no tocas el verde, ¿haces la pregunta del «arriba»? (No: me agacho y ya está.)",
          "On heu posat la pregunta del full vermell? Dins de quina branca?|¿Dónde habéis puesto la pregunta de la hoja roja? ¿Dentro de qué rama?",
          "Algú ha saltat a l'aire? Quina regla de l'arbre s'ha saltat?|¿Alguien ha saltado en el aire? ¿Qué regla del árbol se ha saltado?"
        ],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, la pregunta de la regla del salt, la de l'aire i el pas de tocar el bloc. El pas «Regles dins de regles» ja l'han fet: que toquin «Ho hem fet!». Al pas d'investigar, demana a algú que expliqui amb l'arbre per què ha triat aquell bloc.|Cada alumno/a hace la misión, las tarjetas, la pregunta de la regla del salto, la del aire y el paso de tocar el bloque. El paso «Reglas dentro de reglas» ya lo han hecho: que toquen «¡Lo hemos hecho!». En el paso de investigar, pide a alguien que explique con el árbol por qué ha elegido ese bloque.",
        diu: [
          "Toca el verd i no premo res: quin camí de l'arbre segueix? (sí → no → camina)|Toca el verde y no pulso nada: ¿qué camino del árbol sigue? (sí → no → camina)",
          "A l'aire i prement amunt: per què no salta? (la segona pregunta no es fa)|En el aire y pulsando arriba: ¿por qué no salta? (la segunda pregunta no se hace)",
          "Quin bloc es fa quan toca el verd però ningú no prem? (mou-te 3, al «si no» de dins)|¿Qué bloque se hace cuando toca el verde pero nadie pulsa? (muévete 3, en el «si no» de dentro)"
        ],
        slides: ['s11'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa de l'arbre humà. Després, els quatre reptes. Al d'en Numi que cau, recorda com s'afegeix el «si no». Al laberint, explica que primer es prova amb «Comença» i les fletxes, i després «Comprova» prem les tecles sola a les dues proves.|Pausa activa del árbol humano. Después, los cuatro retos. En el de Numi que cae, recuerda cómo se añade el «si no». En el laberinto, explica que primero se prueba con «Empieza» y las flechas, y después «Comprueba» pulsa las teclas sola en las dos pruebas.",
        diu: [
          "Com s'afegeix el «si no»? (toques el «si» i després «Afegeix «si no»»)|¿Cómo se añade el «si no»? (tocas el «si» y después «Añade «si no»»)",
          "En Numi: què va a dalt i què va a baix? (a dalt caminar; al «si no», caure)|Numi: ¿qué va arriba y qué va abajo? (arriba caminar; en el «si no», caer)",
          "Al laberint, què ha de passar si toques la paret? (tornar a l'inici)|En el laberinto, ¿qué tiene que pasar si tocas la pared? (volver al inicio)",
          "Dibuixa l'arbre de les regles del laberint: quantes branques té?|Dibuja el árbol de las reglas del laberinto: ¿cuántas ramas tiene?"
        ],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes: el cranc, en Numi cau, les respostes canviades i el laberint.|«Pausa activa» y los retos: el cangrejo, Numi cae, las respuestas cambiadas y el laberinto.", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu avís de colors|Crea: mi aviso de colores", fase: 'crea',
        fa: "La Tuga passeja per la platja amb les fletxes. Cadascú decideix què fa al mar (part del sí) i què fa a la sorra (part del «si no»); qui vulgui, que hi posi una decisió niuada (per exemple, dins del mar, si y > -40 diu «Massa endins!»). En parelles, s'ensenyen el programa i l'altre/a dibuixa l'arbre de decisions abans de provar-lo.|Tuga pasea por la playa con las flechas. Cada uno decide qué hace en el mar (parte del sí) y qué hace en la arena (parte del «si no»); quien quiera, que ponga una decisión anidada (por ejemplo, dentro del mar, si y > -40 dice «¡Demasiado adentro!»). Por parejas, se enseñan el programa y el otro/a dibuja el árbol de decisiones antes de probarlo.",
        diu: [
          "Què fa la Tuga al mar? I si no hi és?|¿Qué hace Tuga en el mar? ¿Y si no está?",
          "Hi has posat alguna pregunta dins d'una altra? Quina?|¿Has puesto alguna pregunta dentro de otra? ¿Cuál?",
          "L'arbre que ha dibuixat el teu company/a coincideix amb el teu programa?|¿El árbol que ha dibujado tu compañero/a coincide con tu programa?"
        ],
        slides: ['s14'], app: "Pas «Crea»: El meu avís de colors.|Paso «Crea»: Mi aviso de colores.", org: "Individual|Individual" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i torna a l'arbre de la pissarra. Deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen y vuelve al árbol de la pizarra. Deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: [
          "On va el «si fletxa amunt» perquè només salti des de terra? (dins de «si toca el verd»)|¿Dónde va el «si flecha arriba» para que solo salte desde el suelo? (dentro de «si toca el verde»)",
          "Digues una regla d'un videojoc que necessiti dues preguntes, una dins de l'altra.|Di una regla de un videojuego que necesite dos preguntas, una dentro de la otra.",
          "El pròxim dia ajuntarem preguntes d'una altra manera: amb «i», «o» i «no».|El próximo día juntaremos preguntas de otra manera: con «y», «o» y «no»."
        ],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «si fletxa amunt» a sota de «si toca el verd» i no a dins: en Numi salta també a l'aire.|Pone el «si flecha arriba» debajo de «si toca el verde» y no dentro: Numi salta también en el aire.", "Que recorri l'arbre amb el dit: la pregunta de la fletxa penja de la branca del sí? On és el bloc al programa?|Que recorra el árbol con el dedo: ¿la pregunta de la flecha cuelga de la rama del sí? ¿Dónde está el bloque en el programa?"],
      ["Posa la segona pregunta a la part «si no» quan havia d'anar a la del sí.|Pone la segunda pregunta en la parte «si no» cuando tenía que ir en la del sí.", "Pregunta: quan ha de fer la pregunta de la fletxa, quan toca el verd o quan no? Que miri a quina part del «si» és.|Pregunta: ¿cuándo tiene que hacer la pregunta de la flecha, cuando toca el verde o cuando no? Que mire en qué parte del «si» está."],
      ["En Numi s'enfonsa a l'herba perquè el bloc de caure és a la part del sí.|Numi se hunde en la hierba porque el bloque de caer está en la parte del sí.", "Que llegeixi en veu alta: «si toca el verd, camina; si no, cau». On és el bloc de caure?|Que lea en voz alta: «si toca el verde, camina; si no, cae». ¿Dónde está el bloque de caer?"],
      ["Al laberint, mou l'Estel amb les fletxes però no toca «Comprova».|En el laberinto, mueve a Estel con las flechas pero no toca «Comprueba».", "Recorda: amb «Comença» proves; amb «Comprova», l'app prem les tecles sola i mira si les regles funcionen.|Recuerda: con «Empieza» pruebas; con «Comprueba», la app pulsa las teclas sola y mira si las reglas funcionan."],
      ["Confon el color de la condició (tria el groc en lloc del blau).|Confunde el color de la condición (elige el amarillo en lugar del azul).", "Que toqui el nom del color dins del bloc i triï el que correspon al mar. Quin color té el mar al fons?|Que toque el nombre del color dentro del bloque y elija el que corresponde al mar. ¿Qué color tiene el mar en el fondo?"],
      ["Dibuixa l'arbre amb dues accions al final d'un mateix camí.|Dibuja el árbol con dos acciones al final de un mismo camino.", "Pregunta: en aquest cas, què fa primer? Cada fulla és una sola acció; si en calen dues, totes dues van dins de la mateixa part del «si».|Pregunta: en este caso, ¿qué hace primero? Cada hoja es una sola acción; si hacen falta dos, las dos van dentro de la misma parte del «si»."]
    ],
    diff: {
      mes: "Al laberint, afegir la regla del vermell (la trampa). A la Tuga, posar una decisió niuada amb un número (dins del mar, si y > -40, «Massa endins!») i dibuixar-ne l'arbre complet.|En el laberinto, añadir la regla del rojo (la trampa). En Tuga, poner una decisión anidada con un número (dentro del mar, si y > -40, «¡Demasiado adentro!») y dibujar su árbol completo.",
      menys: "Fer primer els reptes del cranc i d'en Numi, que ja tenen la pregunta del color posada. Tenir l'arbre de la pissarra copiat en un paper al costat i assenyalar cada branca abans de posar el bloc. Ruta 4t: «posa y a -150» vol dir «torna a la sorra»: amb els eixos encesos es veu on és.|Hacer primero los retos del cangrejo y de Numi, que ya tienen la pregunta del color puesta. Tener el árbol de la pizarra copiado en un papel al lado y señalar cada rama antes de poner el bloque. Ruta 4.º: «pon y a -150» quiere decir «vuelve a la arena»: con los ejes encendidos se ve dónde está."
    },
    aval: {
      ticket: ["Dibuixa l'arbre: «si toca el verd: si prem amunt, salta; si no, camina. Si no toca el verd, cau».|Dibuja el árbol: «si toca el verde: si pulsa arriba, salta; si no, camina. Si no toca el verde, cae».", "A l'aire i prement amunt: què fa en Numi?|En el aire y pulsando arriba: ¿qué hace Numi?"],
      rubric: [
        ["Condició de color|Condición de color", "Tria el color correcte i explica què avisa.|Elige el color correcto y explica qué avisa.", "Fa servir el color amb ajuda.|Usa el color con ayuda."],
        ["Decisions niuades|Decisiones anidadas", "Diu què farà el personatge en cada situació d'un «si» dins d'un altre.|Dice qué hará el personaje en cada situación de un «si» dentro de otro.", "Llegeix bé el primer «si», però no el de dins.|Lee bien el primer «si», pero no el de dentro."],
        ["Arbre de decisions|Árbol de decisiones", "Dibuixa l'arbre d'unes regles i el passa a blocs sense ajuda.|Dibuja el árbol de unas reglas y lo pasa a bloques sin ayuda.", "Dibuixa l'arbre, però li costa passar-lo a blocs.|Dibuja el árbol, pero le cuesta pasarlo a bloques."],
        [
          "Regles del laberint|Reglas del laberinto",
          "Programa una regla per a cada color i la comprova a les dues proves.|Programa una regla para cada color y la comprueba en las dos pruebas.",
          "Programa una de les regles, però no l'altra.|Programa una de las reglas, pero no la otra."
        ]
      ]
    },
    casa: "A casa, feu «Regles dins de regles» amb fulls o coixins a terra: dibuixeu l'arbre de decisions del salt i un àrbitre/a diu «amunt» de tant en tant. Després, afegiu-hi una pregunta nova a una branca.|En casa, haced «Reglas dentro de reglas» con hojas o cojines en el suelo: dibujad el árbol de decisiones del salto y un árbitro/a dice «arriba» de vez en cuando. Después, añadid una pregunta nueva a una rama.",
    slides: [
      { id: 's1', k: 'portada', t: "Colors i decisions niuades|Colores y decisiones anidadas", x: "Avui el fons avisarà els personatges… i farem preguntes dins d'altres preguntes.|Hoy el fondo avisará a los personajes… y haremos preguntas dentro de otras preguntas.",
        nota: "Presenta l'escena de la platja i en Pinces.|Presenta la escena de la playa y a Pinzas." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["De 7 en 7: «y = -150» o «y < -150»?|De 7 en 7: ¿«y = -150» o «y < -150»?", "Al laberint, què volia dir el blau?|En el laberinto, ¿qué quería decir el azul?"],
        nota: "Si no recorden el laberint, mostra'n el fons al repte 4.|Si no recuerdan el laberinto, muestra su fondo en el reto 4." },
      { id: 's3', k: 'pregunta', t: "Puc saltar a l'aire?|¿Puedo saltar en el aire?", x: "En un videojoc de plataformes, quan pots saltar i quan no?|En un videojuego de plataformas, ¿cuándo puedes saltar y cuándo no?",
        nota: "Recull respostes: la idea és que primer es mira si toques el terra i després si prems el botó.|Recoge respuestas: la idea es que primero se mira si tocas el suelo y después si pulsas el botón." },
      { id: 's4', k: 'anim', t: "El fons avisa|El fondo avisa", anim: 'g5color', x: "«Toca el color blau?» El cranc ho pregunta tota l'estona.|«¿Toca el color azul?» El cangrejo lo pregunta todo el rato.",
        nota: "Fes notar l'anell de punts: és com si el cranc notés el que trepitja.|Haz notar el anillo de puntos: es como si el cangrejo notara lo que pisa." },
      { id: 's5', k: 'media', t: "En Pinces no es mulla|Pinzas no se moja", x: "Puja, toca el blau i torna a la sorra.|Sube, toca el azul y vuelve a la arena.",
        media: { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'cranc', art: 'cranc', x: -60, y: -150 }] }, prog: '@cranc flag{ forever{ chy:2 if:color:blue{ think:"Aigua!|¡Agua!",1 sety:-150 } } }', time: 7 },
        nota: "Pregunta què passaria sense el «si»: el cranc pujaria fins al cel.|Pregunta qué pasaría sin el «si»: el cangrejo subiría hasta el cielo." },
      { id: 's6', k: 'concepte', t: "Recorda el «si no»|Recuerda el «si no»", punts: ["Una pregunta, dues parts: dalt el sí, baix el no.|Una pregunta, dos partes: arriba el sí, abajo el no.", "Per afegir-lo: toca el «si» i «Afegeix «si no»».|Para añadirlo: toca el «si» y «Añade «si no»».", "Dins de cada part hi pot anar un altre «si».|Dentro de cada parte puede ir otro «si»."],
        nota: "Un minut de repàs: ja ho coneixen de Tech Robot. La tercera idea és la nova d'avui.|Un minuto de repaso: ya lo conocen de Tech Robot. La tercera idea es la nueva de hoy.", pic: "img/ment/rfx.webp" },
      { id: 's7', k: 'media', t: "Un «si» dins d'un altre «si»|Un «si» dentro de otro «si»", x: "Toca el verd? Si sí: fletxa amunt? Salta o camina. Si no: cau.|¿Toca el verde? Si sí: ¿flecha arriba? Salta o camina. Si no: cae.",
        media: { k: 'stage', w: { bg: 'bosc', keys: ['up'], sprites: [{ id: 'numi', art: 'numi', x: -170, y: 130, dir: 90, size: 80 }], input: [{ t: 2.4, key: 'up', dur: .1 }, { t: 3.6, key: 'up', dur: .1 }], time: 6 }, prog: '@numi flag{ forever{ if:color:green{ if:key:up{ chy:70 } else{ move:3 } } else{ chy:-5 } } }' },
        nota: "Atura la demo amb en Numi a l'aire i pregunta: si ara premo amunt, saltarà? (No.) Torna-la a engegar.|Para la demo con Numi en el aire y pregunta: si ahora pulso arriba, ¿saltará? (No.) Vuelve a ponerla en marcha." },
      { id: 's8', k: 'anim', t: "L'arbre de decisions|El árbol de decisiones", anim: 'g5tree', x: "Preguntes a les branques, accions a les fulles.|Preguntas en las ramas, acciones en las hojas.",
        nota: "Dibuixa'l també a la pissarra i deixa'l durant tota la sessió: el faran servir a l'activitat i als reptes.|Dibújalo también en la pizarra y déjalo durante toda la sesión: lo usarán en la actividad y en los retos." },
      { id: 's9', k: 'activitat', t: "Regles dins de regles|Reglas dentro de reglas", timer: 11, punts: ["Dibuixants: l'arbre de decisions a la fitxa.|Dibujantes: el árbol de decisiones en la ficha.", "Actor/actriu: a cada pas, les preguntes en ordre i en veu alta.|Actor/actriz: en cada paso, las preguntas en orden y en voz alta.", "Àrbitre/a: diu «amunt» de tant en tant i comprova l'arbre.|Árbitro/a: dice «arriba» de vez en cuando y comprueba el árbol.", "Ronda 2: una pregunta nova (el full vermell).|Ronda 2: una pregunta nueva (la hoja roja)."],
        nota: "Salts petits i al lloc. Si algú salta des de l'aire, és un «bug»: el grup busca quina branca s'ha saltat.|Saltos pequeños y en el sitio. Si alguien salta desde el aire, es un «bug»: el grupo busca qué rama se ha saltado." },
      { id: 's10', k: 'activitat', t: "L'arbre del salt|El árbol del salto", punts: ["Toco un full verd? No → m'ajupo (caic).|¿Toco una hoja verde? No → me agacho (caigo).", "Sí → «amunt»? Sí → salto. No → un pas.|Sí → ¿«arriba»? Sí → salto. No → un paso.", "Una pregunta nova: on la penges?|Una pregunta nueva: ¿dónde la cuelgas?"],
        nota: "Deixa-la projectada com a model.|Déjala proyectada como modelo." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «Colors i decisions niuades».|Abre «Colores y decisiones anidadas».", "«Regles dins de regles»: toca «Ho hem fet!».|«Reglas dentro de reglas»: toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Comprova que tothom arriba a l'«Investiga» i que hi fa servir l'arbre.|Comprueba que todos llegan a «Investiga» y que usan el árbol." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. En Pinces no es mulla|1. Pinzas no se moja", "2. En Numi cau del cel|2. Numi cae del cielo", "3. Les respostes canviades|3. Las respuestas cambiadas", "4. El laberint de colors|4. El laberinto de colores"],
        nota: "Al laberint, ensenya com es prova amb les fletxes i després «Comprova».|En el laberinto, enseña cómo se prueba con las flechas y después «Comprueba»." },
      { id: 's13', k: 'concepte', t: "Posar un «si» dins d'un altre|Poner un «si» dentro de otro", punts: ["Toca el forat de dins del primer «si».|Toca el hueco de dentro del primer «si».", "Afegeix un «si» nou: queda a dins.|Añade un «si» nuevo: queda dentro.", "Comprova-ho amb l'arbre: penja de la branca bona?|Compruébalo con el árbol: ¿cuelga de la rama buena?"],
        nota: "Fes-ho una vegada a la pantalla gran amb la demo del salt.|Hazlo una vez en la pantalla grande con la demo del salto.", pic: "img/ment/par.webp" },
      { id: 's14', k: 'activitat', t: "Crea: el meu avís de colors|Crea: mi aviso de colores", timer: 5, x: "Què fa la Tuga al mar? I a la sorra? Si vols, posa-hi una pregunta dins d'una altra!|¿Qué hace Tuga en el mar? ¿Y en la arena? Si quieres, ¡pon una pregunta dentro de otra!",
        nota: "Que el company/a dibuixi l'arbre del programa abans de provar-lo.|Que el compañero/a dibuje el árbol del programa antes de probarlo." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Toca el color» pregunta pel fons.|«Toca el color» pregunta por el fondo.", "Un «si» dins d'un altre: la segona pregunta, només si cal.|Un «si» dentro de otro: la segunda pregunta, solo si hace falta.", "Primer l'arbre, després els blocs.|Primero el árbol, después los bloques."],
        nota: "Torna a l'arbre de la pissarra i a la pregunta del principi: ja saben per què no es pot saltar a l'aire.|Vuelve al árbol de la pizarra y a la pregunta del principio: ya saben por qué no se puede saltar en el aire." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Dibuixa l'arbre del salt.|Dibuja el árbol del salto.", "A l'aire i prement amunt: què fa en Numi?|En el aire y pulsando arriba: ¿qué hace Numi?"],
        nota: "Anota qui encara posa la segona pregunta fora de la primera.|Anota quién todavía pone la segunda pregunta fuera de la primera." }
    ],
    print: [
      { id: 'p1', t: "El meu arbre de decisions|Mi árbol de decisiones", k: 'fitxa',
        intro: "Dibuixa les regles com un arbre: a dalt, la primera pregunta; a cada branca, sí o no; al final de cada camí, què fa el personatge.|Dibuja las reglas como un árbol: arriba, la primera pregunta; en cada rama, sí o no; al final de cada camino, qué hace el personaje.",
        items: [
          { q: "Primera pregunta (a dalt de l'arbre):|Primera pregunta (arriba del árbol):", sol: "Exemple: Toco un full verd (el terra)?|Ejemplo: ¿Toco una hoja verde (el suelo)?" },
          { q: "Branca del NO: què fa el personatge?|Rama del NO: ¿qué hace el personaje?", sol: "Exemple: m'ajupo (caic).|Ejemplo: me agacho (caigo)." },
          { q: "Branca del SÍ: quina segona pregunta fa? I què fa amb cada resposta?|Rama del SÍ: ¿qué segunda pregunta hace? ¿Y qué hace con cada respuesta?", big: true, sol: "Exemple: L'àrbitre/a diu «amunt»? Sí → salto. No → faig un pas.|Ejemplo: ¿El árbitro/a dice «arriba»? Sí → salto. No → doy un paso." },
          { q: "Ronda 2: on penges la pregunta del full vermell? Per què?|Ronda 2: ¿dónde cuelgas la pregunta de la hoja roja? ¿Por qué?", sol: "Resposta oberta: per exemple, dins de la branca del sí, abans de la pregunta de l'«amunt» (si toco vermell, torno a l'inici).|Respuesta abierta: por ejemplo, dentro de la rama del sí, antes de la pregunta del «arriba» (si toco rojo, vuelvo al inicio)." },
          { q: "Escriu l'arbre amb blocs: si toca el verd { si … { … } si no { … } } si no { … }|Escribe el árbol con bloques: si toca el verde { si … { … } si no { … } } si no { … }", sol: "si toca el verd { si tecla amunt premuda { canvia y en 70 } si no { mou-te 3 } } si no { canvia y en -5 }|si toca el verde { si tecla arriba pulsada { cambia y en 70 } si no { muévete 3 } } si no { cambia y en -5 }" }
        ] }
    ]
  },
  /* ---------- Sessió 3 · I, o, no ---------- */
  'g5-3': {
    intro: "Tercera sessió de condicions: tres paraules que fan les regles més llestes. Amb «i», la resposta és sí només si les dues preguntes són sí; amb «o», n'hi ha prou amb una; i «no» gira la resposta. L'alumnat ho prova primer amb regles de la fira i amb portes lògiques humanes, i després a l'escenari: un gat que gira si toca la roca o la vora, un regal que només s'obre si hi són en Numi i en Bit, i en Bit que camina mentre no toca la roca. Distingir «i» d'«o» costa: dona temps a les preguntes de la fira. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Tercera sesión de condiciones: tres palabras que hacen las reglas más listas. Con «y», la respuesta es sí solo si las dos preguntas son sí; con «o», basta con una; y «no» gira la respuesta. El alumnado lo prueba primero con reglas de la feria y con puertas lógicas humanas, y después en el escenario: un gato que gira si toca la roca o el borde, un regalo que solo se abre si están Numi y Bit, y Bit que camina mientras no toca la roca. Distinguir «y» de «o» cuesta: da tiempo a las preguntas de la feria. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
    claus: [
      "Amb «i», calen les dues condicions alhora.|Con «y», hacen falta las dos condiciones a la vez.",
      "Amb «o», n'hi ha prou que una de les dues sigui sí.|Con «o», basta con que una de las dos sea sí.",
      "«No» gira la resposta: el sí es torna no i el no, sí.|«No» gira la respuesta: el sí se vuelve no y el no, sí.",
      "Una sola paraula pot canviar tota la regla: cal llegir-la en veu alta per comprovar-la.|Una sola palabra puede cambiar toda la regla: hay que leerla en voz alta para comprobarla."
    ],
    prev: [
      "El bloc «si» i el «si… si no» (sessions 1 i 2 d'aquesta unitat).|El bloque «si» y el «si… si no» (sesiones 1 y 2 de esta unidad).",
      "Les condicions «toca…» i «toca el color» (sessions 1 i 2).|Las condiciones «toca…» y «toca el color» (sesiones 1 y 2).",
      "Lliscar fins a un punt (unitat 4): els personatges de les proves llisquen sols.|Deslizar hasta un punto (unidad 4): los personajes de las pruebas se deslizan solos."
    ],
    faq: [
      ["Quina diferència hi ha entre «i» i «o»?|¿Qué diferencia hay entre «y» y «o»?", "Amb «i» han de passar les dues coses alhora (entrada i barret). Amb «o» n'hi ha prou amb una (entrada o barret, o les dues).|Con «y» tienen que pasar las dos cosas a la vez (entrada y sombrero). Con «o» basta con una (entrada o sombrero, o las dos)."],
      ["Si toca la roca i la vora alhora, amb «o» també gira?|Si toca la roca y el borde a la vez, ¿con «o» también gira?", "Sí: amb «o» n'hi ha prou amb una, i si en són dues, encara millor. Només diu no quan no en toca cap.|Sí: con «o» basta con una, y si son las dos, mejor aún. Solo dice no cuando no toca ninguna."],
      ["Com canvio la «i» per una «o»?|¿Cómo cambio la «y» por una «o»?", "Toca la paraula del mig del bloc «si» (la «i») i tria «o (alguna)».|Toca la palabra del medio del bloque «si» (la «y») y elige «o (alguna)»."],
      ["On és el bloc «no»?|¿Dónde está el bloque «no»?", "No és un bloc de la paleta: toca el bloc «si» i el botó «Afegeix «no»». Davant de la condició hi apareix «no». Si el tornes a tocar, «Treu el «no»».|No es un bloque de la paleta: toca el bloque «si» y el botón «Añade «no»». Delante de la condición aparece «no». Si lo vuelves a tocar, «Quita el «no»»."],
      ["Per què el regal no s'obre si en Numi ja hi és?|¿Por qué el regalo no se abre si Numi ya está?", "Perquè la regla diu «Numi i Bit»: falta en Bit. Quan hi arriben tots dos, la resposta és sí.|Porque la regla dice «Numi y Bit»: falta Bit. Cuando llegan los dos, la respuesta es sí."],
      ["Al repte del gat em falten blocs!|¡En el reto del gato me faltan bloques!", "Amb 4 blocs no caben dos «si». Ajunta les dues preguntes en un sol «si» amb «o».|Con 4 bloques no caben dos «si». Junta las dos preguntas en un solo «si» con «o»."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["Les fletxes del teclat no mouen el personatge.|Las flechas del teclado no mueven al personaje.", "Cal tocar primer l'escenari (perquè la pàgina «escolti» el teclat) o fer servir els botons de fletxes de sota l'escenari, que també funcionen al mòbil.|Hay que tocar primero el escenario (para que la página «escuche» el teclado) o usar los botones de flechas de debajo del escenario, que también funcionan en el móvil."],
      ["Un alumne/a s'encalla i ha esborrat blocs que no tocava.|Un alumno/a se atasca y ha borrado bloques que no tocaba.", "Després de dos intents apareix el botó «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece el botón «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver a entrar: el reto vuelve a empezar."],
      ["No surt el botó «Afegeix «i / o»» o «Afegeix «no»».|No sale el botón «Añade «y / o»» o «Añade «no»».", "Només surten en tocar el nom d'un bloc «si» i en els reptes que els fan servir. Si el bloc ja té dues condicions, el botó diu «Una sola condició».|Solo salen al tocar el nombre de un bloque «si» y en los retos que los usan. Si el bloque ya tiene dos condiciones, el botón dice «Una sola condición»."],
      ["En afegir «i / o», la segona condició diu «la vora» i no la volen.|Al añadir «y / o», la segunda condición dice «el borde» y no la quieren.", "És el valor de partida: toqueu «la vora» i trieu el personatge que calgui.|Es el valor de partida: tocad «el borde» y elegid el personaje que haga falta."],
      ["No hi ha prou targetes per a tots els grups.|No hay suficientes tarjetas para todos los grupos.", "Les targetes SÍ i NO es poden fer amb un full doblegat (SÍ per una cara, NO per l'altra) i les portes, escrites a la pissarra.|Las tarjetas SÍ y NO se pueden hacer con una hoja doblada (SÍ por una cara, NO por la otra) y las puertas, escritas en la pizarra."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Portes lògiques humanes i pausa activa: les condicions han de ser neutres (roba, gustos, objectes), mai sobre el cos, la família o els diners.|Puertas lógicas humanas y pausa activa: las condiciones tienen que ser neutras (ropa, gustos, objetos), nunca sobre el cuerpo, la familia o el dinero."
    ],
    extra: [
      "Al regal, afegir una tercera condició (que també hi sigui l'estrella) i explicar com quedaria la regla en paraules.|En el regalo, añadir una tercera condición (que también esté la estrella) y explicar cómo quedaría la regla con palabras.",
      "Inventar una regla per al tresor amb «no»: «si no toca la roca, camina; si no, digues «Compte!»».|Inventar una regla para el tesoro con «no»: «si no toca la roca, camina; si no, di «¡Cuidado!»».",
      "Fer una taula de veritat amb dibuixos: per a «i» i per a «o», les quatre combinacions de sí i no i què passa.|Hacer una tabla de verdad con dibujos: para «y» y para «o», las cuatro combinaciones de sí y no y qué pasa."
    ],
    trans: [
      "Ve de les sessions 1 i 2: les mateixes condicions, ara ajuntades i girades.|Viene de las sesiones 1 y 2: las mismas condiciones, ahora juntas y giradas.",
      "Sessió següent: el projecte «Atrapa la fruita», on cada regla del videojoc és un «si».|Sesión siguiente: el proyecto «Atrapa la fruta», donde cada regla del videojuego es un «si».",
      "Llengua i matemàtiques: les conjuncions «i», «o» i la negació; classificar objectes segons dues propietats (diagrames).|Lengua y matemáticas: las conjunciones «y», «o» y la negación; clasificar objetos según dos propiedades (diagramas)."
    ],
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
        "El dia abans (15 min): imprimir i retallar un paquet de targetes per grup de 3 (condicions, SÍ/NO i portes).|El día antes (15 min): imprimir y recortar un paquete de tarjetas por grupo de 3 (condiciones, SÍ/NO y puertas).",
        "El dia abans (10 min): provar el repte del gat (màxim 4 blocs), com es canvia «i» per «o» tocant la paraula del mig i com s'afegeix el «no» al repte d'en Bit.|El día antes (10 min): probar el reto del gato (máximo 4 bloques), cómo se cambia «y» por «o» tocando la palabra del medio y cómo se añade el «no» en el reto de Bit.",
        "Abans de classe (5 min): deixar els ordinadors amb la sessió iniciada i la presentació oberta.|Antes de clase (5 min): dejar los ordenadores con la sesión iniciada y la presentación abierta."
      ]
    },
    plan: [
      { min: 5, t: "Inici: regles més llestes|Inicio: reglas más listas", fase: 'inici',
        fa: "Repassa el «si… si no» amb les preguntes de la diapositiva. Llegeix les dues regles de la fira (una amb «i» i una amb «o») i fes sortir quatre voluntaris/es amb entrada o barret imaginaris: amb cada regla, qui pot entrar? Apunta a la pissarra la diferència.|Repasa el «si… si no» con las preguntas de la diapositiva. Lee las dos reglas de la feria (una con «y» y una con «o») y haz salir a cuatro voluntarios/as con entrada o sombrero imaginarios: con cada regla, ¿quién puede entrar? Apunta en la pizarra la diferencia.",
        diu: [
          "Quantes parts fa un «si… si no» cada vegada? (una)|¿Cuántas partes hace un «si… si no» cada vez? (una)",
          "«Entrada i barret» o «entrada o barret»: és el mateix? (no)|«Entrada y sombrero» o «entrada o sombrero»: ¿es lo mismo? (no)",
          "La Guida porta entrada però no barret. Amb la regla «i», entra? (no) I amb la regla «o»? (sí)|Guida lleva entrada pero no sombrero. Con la regla «y», ¿entra? (no) ¿Y con la regla «o»? (sí)",
          "Avui aprendrem tres paraules petites que canvien les regles: «i», «o» i «no».|Hoy aprenderemos tres palabras pequeñas que cambian las reglas: «y», «o» y «no»."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "I, o, no|Y, o, no", fase: 'teoria',
        fa: "Mostra l'animació del regal i l'estrella: compara «i» i «o» fase a fase. Projecta les demos del regal i del gat. Explica el «no» amb l'animació i la demo d'en Bit que s'atura davant la roca.|Muestra la animación del regalo y la estrella: compara «y» y «o» fase a fase. Proyecta las demos del regalo y del gato. Explica el «no» con la animación y la demo de Bit que se para delante de la roca.",
        diu: [
          "Ara només hi ha en Bit: s'obre el regal? (no, calen els dos) I s'encén l'estrella? (sí, n'hi ha prou amb un)|Ahora solo está Bit: ¿se abre el regalo? (no, hacen falta los dos) ¿Y se enciende la estrella? (sí, basta con uno)",
          "El gat toca la vora però no la roca. Amb «o», gira? (sí)|El gato toca el borde pero no la roca. Con «o», ¿gira? (sí)",
          "I si la regla del gat digués «i»? (gairebé no giraria mai)|¿Y si la regla del gato dijera «y»? (casi no giraría nunca)",
          "Què vol dir «si no toca la roca, camina»? (camina mentre la roca és lluny)|¿Qué quiere decir «si no toca la roca, camina»? (camina mientras la roca está lejos)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: portes lògiques humanes|Desconectado: puertas lógicas humanas", fase: 'desconnectat',
        fa: "Grups de 3: dos sensors i una porta. Cada sensor té una targeta de condició i respon ensenyant SÍ o NO. La porta té la targeta «I», «O» o «NO» i decideix si s'obre (braços amunt) o no. Roteu els papers i les targetes. Al final, cada grup inventa una regla de la classe amb «i» o «o».|Grupos de 3: dos sensores y una puerta. Cada sensor tiene una tarjeta de condición y responde enseñando SÍ o NO. La puerta tiene la tarjeta «Y», «O» o «NO» y decide si se abre (brazos arriba) o no. Rotad los papeles y las tarjetas. Al final, cada grupo inventa una regla de la clase con «y» u «o».",
        diu: [
          "Porta «I»: us cal que els dos sensors diguin sí.|Puerta «Y»: necesitáis que los dos sensores digan sí.",
          "Porta «O»: n'hi ha prou que un sensor digui sí. I si en diuen sí tots dos? (també s'obre)|Puerta «O»: basta con que un sensor diga sí. ¿Y si dicen sí los dos? (también se abre)",
          "Porta «NO»: feu el contrari del sensor!|Puerta «NO»: ¡haced lo contrario del sensor!",
          "Quina porta s'obre més vegades, la «I» o la «O»? (la «O»)|¿Qué puerta se abre más veces, la «Y» o la «O»? (la «O»)"
        ],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3|Grupos de 3" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, les preguntes de la fira, l'error de la papallona i la predicció d'en Bit. «Endevina la meva regla» és per a casa.|Hacen la misión, las tarjetas, las preguntas de la feria, el error de la mariposa y la predicción de Bit. «Adivina mi regla» es para casa.",
        diu: [
          "Per què la papallona travessa la roca? (el «si» diu «i»: hauria de tocar la vora i la roca alhora)|¿Por qué la mariposa atraviesa la roca? (el «si» dice «y»: tendría que tocar el borde y la roca a la vez)",
          "En Bit té «si no toca la roca, camina». Quan s'atura? (quan toca la roca)|Bit tiene «si no toca la roca, camina». ¿Cuándo se para? (cuando toca la roca)",
          "A la fira, quina regla deixa entrar més gent: la de «i» o la de «o»? (la de «o»)|En la feria, ¿qué regla deja entrar a más gente: la de «y» o la de «o»? (la de «o»)"
        ],
        slides: ['s11'], app: "De «La missió» fins a la predicció d'en Bit.|De «La misión» hasta la predicción de Bit.", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa de les portes lògiques. Després ensenya a la pantalla gran com s'afegeix «i / o» (tocar el «si», «Afegeix «i / o»», tocar la paraula del mig) i com s'afegeix el «no» (tocar el «si», «Afegeix «no»»). Deixa'ls fer els tres reptes: el gat amb 4 blocs, el regal amb tres proves i en Bit, que no camina fins que hi posen el «no». Qui acabi pot ajudar amb preguntes, sense tocar el ratolí de l'altre/a.|Haced la pausa activa de las puertas lógicas. Después enseña en la pantalla grande cómo se añade «y / o» (tocar el «si», «Añade «y / o»», tocar la palabra del medio) y cómo se añade el «no» (tocar el «si», «Añade «no»»). Déjales hacer los tres retos: el gato con 4 bloques, el regalo con tres pruebas y Bit, que no camina hasta que le ponen el «no». Quien termine puede ayudar con preguntas, sin tocar el ratón del otro/a.",
        diu: [
          "Amb només 4 blocs, com pots vigilar la roca i la vora? (un sol «si» amb «o»)|Con solo 4 bloques, ¿cómo puedes vigilar la roca y el borde? (un solo «si» con «o»)",
          "A les proves 2 i 3 del regal, per què no s'ha d'obrir? (només hi arriba un dels dos)|En las pruebas 2 y 3 del regalo, ¿por qué no se tiene que abrir? (solo llega uno de los dos)",
          "En Bit no es mou: què diu el seu «si»? (si toca la roca, camina: però al principi no la toca)|Bit no se mueve: ¿qué dice su «si»? (si toca la roca, camina: pero al principio no la toca)",
          "Què canvia quan afegeixes el «no»? (ara camina mentre no la toca)|¿Qué cambia cuando añades el «no»? (ahora camina mientras no la toca)"
        ],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes del gat, el regal i en Bit.|«Pausa activa» y los retos del gato, el regalo y Bit.", org: "Individual|Individual" },
      { min: 5, t: "Crea: la regla del tresor|Crea: la regla del tesoro", fase: 'crea',
        fa: "Cada alumne/a inventa una regla amb «i» o «o» per als tresors del parc. El company/a ha d'endevinar la regla mirant què passa.|Cada alumno/a inventa una regla con «y» u «o» para los tesoros del parque. El compañero/a tiene que adivinar la regla mirando qué pasa.",
        diu: [
          "La teva regla és amb «i» o amb «o»? Llegeix-la en veu alta.|¿Tu regla es con «y» o con «o»? Léela en voz alta.",
          "Company/a: mira què fa en Numi i endevina la regla sense llegir els blocs.|Compañero/a: mira qué hace Numi y adivina la regla sin leer los bloques.",
          "I si canvies la «o» per una «i», què passarà? Prova-ho!|¿Y si cambias la «o» por una «y», qué pasará? ¡Pruébalo!"
        ],
        slides: ['s14'], app: "Pas «Crea»: La regla del tresor.|Paso «Crea»: La regla del tesoro.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres paraules amb el resum i torna a les regles de la fira del principi: ara les saben explicar. Deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres palabras con el resumen y vuelve a las reglas de la feria del principio: ahora las saben explicar. Deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: [
          "Digues una regla amb «o». («Si plou o fa vent, em poso la jaqueta»)|Di una regla con «o». («Si llueve o hace viento, me pongo la chaqueta»)",
          "I una amb «i». («Si tinc gana i és l'hora, berenaré»)|¿Y una con «y»? («Si tengo hambre y es la hora, merendaré»)",
          "Què fa el «no»? (gira la resposta)|¿Qué hace el «no»? (gira la respuesta)"
        ],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «i» quan calia «o» (el gat només gira si toca la roca i la vora alhora).|Usa «y» cuando hacía falta «o» (el gato solo gira si toca la roca y el borde a la vez).", "Pregunta: pot tocar la roca i la vora al mateix temps? Llavors, quina paraula cal?|Pregunta: ¿puede tocar la roca y el borde al mismo tiempo? Entonces, ¿qué palabra hace falta?"],
      ["No sap canviar la segona condició (es queda «la vora»).|No sabe cambiar la segunda condición (se queda «el borde»).", "Recorda que cada paraula en negreta es pot tocar: toca «la vora» i tria en Bit.|Recuerda que cada palabra en negrita se puede tocar: toca «el borde» y elige a Bit."],
      ["Al repte del gat fa dos «si» i supera el màxim de blocs.|En el reto del gato hace dos «si» y supera el máximo de bloques.", "Està bé pensar-ho així! Ara, com podries posar les dues preguntes dins d'un sol «si»?|¡Está bien pensarlo así! Ahora, ¿cómo podrías poner las dos preguntas dentro de un solo «si»?"],
      ["Creu que «no toca la roca» vol dir que en Bit no es mourà.|Cree que «no toca la roca» quiere decir que Bit no se moverá.", "Llegiu-ho junts com una frase: «Si no toques la roca, camina.» Al principi, la toca? Llavors camina.|Leedlo juntos como una frase: «Si no tocas la roca, camina.» Al principio, ¿la toca? Entonces camina."],
      ["Al repte d'en Bit, posa el «no» però oblida el segon «si» i en Bit no diu res.|En el reto de Bit, pone el «no» pero olvida el segundo «si» y Bit no dice nada.", "Llegiu la regla junts: «si no toca la roca, camina». I quan la toca, qui li diu que parli? Falta una altra pregunta.|Leed la regla juntos: «si no toca la roca, camina». ¿Y cuando la toca, quién le dice que hable? Falta otra pregunta."],
      ["Al regal, posa «o» i el regal s'obre a les proves 2 i 3.|En el regalo, pone «o» y el regalo se abre en las pruebas 2 y 3.", "Pregunta: a la prova 2 només hi ha en Numi. La regla diu que n'hi ha prou amb un o que calen tots dos?|Pregunta: en la prueba 2 solo está Numi. ¿La regla dice que basta con uno o que hacen falta los dos?"]
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
        ["Programar condicions dobles|Programar condiciones dobles", "Afegeix «i / o» i canvia les dues condicions sense ajuda.|Añade «y / o» y cambia las dos condiciones sin ayuda.", "Ho fa amb ajuda.|Lo hace con ayuda."],
        [
          "Explicar una regla amb paraules|Explicar una regla con palabras",
          "Llegeix en veu alta la regla del seu programa i diu quan és sí i quan és no.|Lee en voz alta la regla de su programa y dice cuándo es sí y cuándo es no.",
          "Llegeix la regla, però no sap dir quan es complirà.|Lee la regla, pero no sabe decir cuándo se cumplirá."
        ]
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
        nota: "Explica que el «no» es posa tocant el bloc «si» i el botó «Afegeix «no»». Al repte d'en Bit el faran ells mateixos.|Explica que el «no» se pone tocando el bloque «si» y el botón «Añade «no»». En el reto de Bit lo harán ellos mismos." },
      { id: 's9', k: 'activitat', t: "Portes lògiques humanes|Puertas lógicas humanas", timer: 11, punts: ["Dos sensors: responeu SÍ o NO.|Dos sensores: responded SÍ o NO.", "La porta mira la seva targeta: I, O o NO.|La puerta mira su tarjeta: Y, O o NO.", "S'obre? Braços amunt!|¿Se abre? ¡Brazos arriba!", "Roteu els papers.|Rotad los papeles."],
        nota: "Comença amb la porta «I», després «O» i al final «NO» (amb un sol sensor).|Empieza con la puerta «Y», después «O» y al final «NO» (con un solo sensor)." },
      { id: 's10', k: 'activitat', t: "Les tres portes|Las tres puertas", punts: ["I: s'obre si els dos diuen sí.|Y: se abre si los dos dicen sí.", "O: s'obre si algun diu sí.|O: se abre si alguno dice sí.", "NO: fa el contrari del sensor.|NO: hace lo contrario del sensor."],
        nota: "Deixa-la projectada mentre treballen.|Déjala proyectada mientras trabajan." },
      { id: 's11', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 12, punts: ["Obre «I, o, no».|Abre «Y, o, no».", "«Endevina la meva regla»: toca «Ara no».|«Adivina mi regla»: toca «Ahora no».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja per l'error de la papallona: és el que més costa.|Pasea por el error de la mariposa: es el que más cuesta." },
      { id: 's12', k: 'repte', t: "Reptes|Retos", timer: 14, punts: ["1. El gat: roca o vora (4 blocs)|1. El gato: roca o borde (4 bloques)", "2. El regal: Numi i Bit|2. El regalo: Numi y Bit", "3. En Bit: si no toca la roca|3. Bit: si no toca la roca"],
        nota: "Ensenya una vegada el botó «Afegeix «i / o»».|Enseña una vez el botón «Añade «y / o»»." },
      { id: 's13', k: 'concepte', t: "Com s'afegeix «i / o»|Cómo se añade «y / o»", punts: [
        "Toca el bloc «si».|Toca el bloque «si».",
        "«Afegeix «i / o»»: dues condicions.|«Añade «y / o»»: dos condiciones.",
        "Toca la paraula del mig: «i» o «o».|Toca la palabra del medio: «y» u «o».",
        "«Afegeix «no»»: gira la condició.|«Añade «no»»: gira la condición."
      ],
        nota: "Fes-ho a poc a poc a la pantalla gran.|Hazlo despacio en la pantalla grande.", pic: "img/ic/link.webp" },
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
    intro: "Sessió de projecte. L'alumnat construeix el videojoc «Atrapa la fruita» amb tot el que ha après a la unitat: la cistella es mou amb les fletxes, les fruites cauen i cada regla és un «si» (si toca la cistella, si toca la vora, si la roca toca la cistella…). Primer fan el pla en paper, després construeixen el videojoc a trossos (provant cada tros) i, al final, un company/a fa de tester i proposa una millora. És una sessió per consolidar, no per aprendre blocs nous: valora el procés (pla, prova, millora) tant com el resultat. Temps: uns 15 minuts sense l'app (benvinguda i teoria a la pantalla gran) i 45 seguint els passos de l'app, des de l'activitat sense pantalla fins al tancament: és el temps que hi indica la sessió.|Sesión de proyecto. El alumnado construye el videojuego «Atrapa la fruta» con todo lo que ha aprendido en la unidad: la cesta se mueve con las flechas, las frutas caen y cada regla es un «si» (si toca la cesta, si toca el borde, si la roca toca la cesta…). Primero hacen el plan en papel, después construyen el videojuego a trozos (probando cada trozo) y, al final, un compañero/a hace de tester y propone una mejora. Es una sesión para consolidar, no para aprender bloques nuevos: valora el proceso (plan, prueba, mejora) tanto como el resultado. Tiempo: unos 15 minutos sin la app (bienvenida y teoría en la pantalla grande) y 45 siguiendo los pasos de la app, desde la actividad sin pantalla hasta el cierre: es el tiempo que indica la sesión.",
    claus: [
      "Un videojoc és un conjunt de personatges, cadascun amb els seus guions, que funcionen alhora.|Un videojuego es un conjunto de personajes, cada uno con sus guiones, que funcionan a la vez.",
      "Cada regla del videojoc és un «si» i va als guions del personatge que reacciona.|Cada regla del videojuego es un «si» y va en los guiones del personaje que reacciona.",
      "Primer el pla en paper; després es programa i es prova a trossos.|Primero el plan en papel; después se programa y se prueba a trozos.",
      "Un tester troba errors i idees que l'autor/a no veu: s'escolta i es tria una millora.|Un tester encuentra errores e ideas que el autor/a no ve: se escucha y se elige una mejora."
    ],
    prev: [
      "«Si toca…», «si… si no», «i», «o» i «no» (sessions 1-3 d'aquesta unitat).|«Si toca…», «si… si no», «y», «o» y «no» (sesiones 1-3 de esta unidad).",
      "Moure un personatge amb les tecles de fletxa (unitat 3).|Mover un personaje con las teclas de flecha (unidad 3).",
      "Posar y a un número per tornar a dalt i «ves a x, y» (unitat 4).|Poner y a un número para volver arriba y «ve a x, y» (unidad 4)."
    ],
    faq: [
      ["La regla «si toca la cistella» va a la cistella o a la poma?|¿La regla «si toca la cesta» va en la cesta o en la manzana?", "Al personatge que ha de fer alguna cosa: si la poma ha de tornar a dalt, la regla va als guions de la poma.|En el personaje que tiene que hacer algo: si la manzana tiene que volver arriba, la regla va en los guiones de la manzana."],
      ["Com programo el plàtan? Cal tornar-ho a fer tot?|¿Cómo programo el plátano? ¿Hay que volver a hacerlo todo?", "Tria el plàtan a les pestanyes de dalt i fes-li les mateixes regles que a la poma. Pots canviar-li la velocitat o el so perquè sigui diferent.|Elige el plátano en las pestañas de arriba y hazle las mismas reglas que a la manzana. Puedes cambiarle la velocidad o el sonido para que sea diferente."],
      ["Puc afegir la roca al videojoc final?|¿Puedo añadir la roca al videojuego final?", "Al projecte hi ha la cistella, la poma i el plàtan. La roca la pots fer al tros 3; al projecte, millora'l amb sons, frases i velocitats.|En el proyecto están la cesta, la manzana y el plátano. La roca la puedes hacer en el trozo 3; en el proyecto, mejóralo con sonidos, frases y velocidades."],
      ["Per què la poma no torna mai a dalt?|¿Por qué la manzana no vuelve nunca arriba?", "Mira la regla de la vora: ha de posar y a 150 (a dalt). Si posa -150, la deixa a baix.|Mira la regla del borde: tiene que poner y a 150 (arriba). Si pone -150, la deja abajo."],
      ["El tester m'ha dit que és massa fàcil. Què faig?|El tester me ha dicho que es demasiado fácil. ¿Qué hago?", "Fes caure les fruites més de pressa (canvia y en -6 o -8) o fes la cistella més petita. Prova-ho tu primer!|Haz caer las frutas más deprisa (cambia y en -6 o -8) o haz la cesta más pequeña. ¡Pruébalo tú primero!"],
      ["On es desa el meu videojoc?|¿Dónde se guarda mi videojuego?", "Quan toques «Desa-ho i continua», queda a «Projectes» i el pots tornar a obrir a casa per ensenyar-lo.|Cuando tocas «Guárdalo y continúa», queda en «Proyectos» y lo puedes volver a abrir en casa para enseñarlo."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["Les fletxes del teclat no mouen el personatge.|Las flechas del teclado no mueven al personaje.", "Cal tocar primer l'escenari (perquè la pàgina «escolti» el teclat) o fer servir els botons de fletxes de sota l'escenari, que també funcionen al mòbil.|Hay que tocar primero el escenario (para que la página «escuche» el teclado) o usar los botones de flechas de debajo del escenario, que también funcionan en el móvil."],
      ["Un alumne/a s'encalla i ha esborrat blocs que no tocava.|Un alumno/a se atasca y ha borrado bloques que no tocaba.", "Després de dos intents apareix el botó «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece el botón «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver a entrar: el reto vuelve a empezar."],
      ["No troben com programar el plàtan.|No encuentran cómo programar el plátano.", "A dalt dels guions hi ha una pestanya per a cada personatge: toqueu la del plàtan. Els que diuen «ja programat» no es poden editar.|Encima de los guiones hay una pestaña para cada personaje: tocad la del plátano. Los que dicen «ya programado» no se pueden editar."],
      ["«Comprova» diu que la cistella no toca alguna fruita.|«Comprueba» dice que la cesta no toca alguna fruta.", "La comprovació mou la cistella sola a l'esquerra i a la dreta: les fruites han de caure i tornar a dalt. Reviseu que totes dues tinguin la regla de la vora i la de la cistella.|La comprobación mueve la cesta sola a la izquierda y a la derecha: las frutas tienen que caer y volver arriba. Revisad que las dos tengan la regla del borde y la de la cesta."],
      ["No s'ha desat el projecte.|No se ha guardado el proyecto.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Tester: es diu sempre primer una cosa bona i es parla del videojoc, no de la persona. Ningú no toca l'ordinador de l'altre/a sense permís.|Tester: se dice siempre primero una cosa buena y se habla del videojuego, no de la persona. Nadie toca el ordenador del otro/a sin permiso.",
      "Si algú no ha pogut acabar, no passa res: el projecte es pot acabar la sessió següent o a casa.|Si alguien no ha podido terminar, no pasa nada: el proyecto se puede terminar la sesión siguiente o en casa."
    ],
    extra: [
      "Afegir una tercera fruita que caigui més de pressa i faci un so diferent.|Añadir una tercera fruta que caiga más deprisa y haga un sonido distinto.",
      "Fer que la cistella digui «Ñam!» o canviï de mida quan atrapa una fruita.|Hacer que la cesta diga «¡Ñam!» o cambie de tamaño cuando atrapa una fruta.",
      "Dibuixar el cartell del videojoc per a la fira amb les regles explicades amb «si».|Dibujar el cartel del videojuego para la feria con las reglas explicadas con «si»."
    ],
    trans: [
      "Recull tota la unitat 5: «si toca…», colors, «si… si no», «i», «o» i «no».|Recoge toda la unidad 5: «si toca…», colores, «si… si no», «y», «o» y «no».",
      "Unitat 6: hi afegirem un marcador de punts, vides i un compte enrere amb variables.|Unidad 6: le añadiremos un marcador de puntos, vidas y una cuenta atrás con variables.",
      "Llengua oral: explicar les regles d'un videojoc i donar i rebre opinions amb respecte.|Lengua oral: explicar las reglas de un videojuego y dar y recibir opiniones con respeto."
    ],
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
        "El dia abans (5 min): imprimir una fitxa «El pla del videojoc» per alumne/a.|El día antes (5 min): imprimir una ficha «El plan del videojuego» por alumno/a.",
        "El dia abans (15 min): fer tu el projecte final per veure com queda amb dues fruites i què demana «Comprova».|El día antes (15 min): hacer tú el proyecto final para ver cómo queda con dos frutas y qué pide «Comprueba».",
        "Abans de classe (5 min): provar el videojoc acabat de la diapositiva 3 i el de l'app (pas «Prova») amb les fletxes.|Antes de clase (5 min): probar el videojuego terminado de la diapositiva 3 y el de la app (paso «Prueba») con las flechas.",
        "Abans de classe (5 min): deixar els ordinadors amb la sessió iniciada i pensar les parelles de testers.|Antes de clase (5 min): dejar los ordenadores con la sesión iniciada y pensar las parejas de testers."
      ]
    },
    plan: [
      { min: 5, t: "Inici: el gran dia|Inicio: el gran día", fase: 'inici',
        fa: "Repassa «i», «o» i «no» amb un exemple de cada. Projecta el videojoc acabat (diapositiva 3) i explica que a l'app el podran provar amb les fletxes. Pregunta quines regles hi veuen i apunta-les a la pissarra començant per «si…»: les faran servir per al pla.|Repasa «y», «o» y «no» con un ejemplo de cada. Proyecta el videojuego terminado (diapositiva 3) y explica que en la app lo podrán probar con las flechas. Pregunta qué reglas ven y apúntalas en la pizarra empezando por «si…»: las usarán para el plan.",
        diu: [
          "Digueu una regla amb «o» i una amb «i».|Decid una regla con «o» y una con «y».",
          "Mireu el videojoc: quines regles té? Digueu-les amb «si». (si la poma toca la cistella, fa pop…)|Mirad el videojuego: ¿qué reglas tiene? Decidlas con «si». (si la manzana toca la cesta, hace pop…)",
          "Què passa quan una fruita arriba a baix sense que l'atrapis? (torna a dalt)|¿Qué pasa cuando una fruta llega abajo sin que la atrapes? (vuelve arriba)",
          "I la roca, per a què serveix? (si toca la cistella, s'acaba)|¿Y la roca, para qué sirve? (si toca la cesta, se acaba)"
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla i els guions|El plan y los guiones", fase: 'teoria',
        fa: "Mostra l'animació del pla: dibuix i regles. Explica que cada personatge té els seus guions i que tots funcionen alhora. Mostra la regla que ho acaba tot (la roca). Insisteix a construir i provar a trossos.|Muestra la animación del plan: dibujo y reglas. Explica que cada personaje tiene sus guiones y que todos funcionan a la vez. Muestra la regla que lo acaba todo (la roca). Insiste en construir y probar a trozos.",
        diu: [
          "Qui té la regla «si toca la cistella»: la cistella o la poma? (la poma, perquè és ella qui torna a dalt)|¿Quién tiene la regla «si toca la cesta»: la cesta o la manzana? (la manzana, porque es ella quien vuelve arriba)",
          "Els guions de la cistella i de la poma funcionen un després de l'altre o alhora? (alhora)|Los guiones de la cesta y de la manzana, ¿funcionan uno después del otro o a la vez? (a la vez)",
          "Quin bloc atura tot el videojoc? (atura tot)|¿Qué bloque para todo el videojuego? (para todo)",
          "Per què és millor provar cada tros? (si falla, saps on és l'error)|¿Por qué es mejor probar cada trozo? (si falla, sabes dónde está el error)"
        ],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Desconnectat: el pla en paper|Desconectado: el plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa l'escenari, escriu com es mou la cistella i les regles de cada fruita, i hi afegeix una idea pròpia (una fruita nova, un so, una frase). En parelles, es llegeixen el pla i comproven que cada regla comença amb «si».|Cada alumno/a rellena la ficha del plan: dibuja el escenario, escribe cómo se mueve la cesta y las reglas de cada fruta, y añade una idea propia (una fruta nueva, un sonido, una frase). Por parejas, se leen el plan y comprueban que cada regla empieza con «si».",
        diu: [
          "Cada regla: si… llavors… Llegiu-la en veu alta.|Cada regla: si… entonces… Leedla en voz alta.",
          "A quin personatge va cada regla? Escriu-ne el nom al costat.|¿A qué personaje va cada regla? Escribe su nombre al lado.",
          "Quina millora teva hi afegiràs? (un so, una frase, una fruita més ràpida…)|¿Qué mejora tuya le añadirás? (un sonido, una frase, una fruta más rápida…)",
          "Company/a: hi ha alguna regla que no s'entengui?|Compañero/a: ¿hay alguna regla que no se entienda?"
        ],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 8, t: "A l'ordinador: prova i investiga|En el ordenador: prueba e investiga", fase: 'ordinador',
        fa: "Fan la missió, les targetes, proven el videojoc acabat, ordenen el pla i troben l'error de la poma. «El tester de casa» és per a casa.|Hacen la misión, las tarjetas, prueban el videojuego terminado, ordenan el plan y encuentran el error de la manzana. «El tester de casa» es para casa.",
        diu: [
          "Prova el videojoc acabat dos minuts: quantes fruites atrapes?|Prueba el videojuego terminado dos minutos: ¿cuántas frutas atrapas?",
          "Per què la poma no torna a dalt? (la regla de la vora la posa a y = -150, a baix)|¿Por qué la manzana no vuelve arriba? (la regla del borde la pone en y = -150, abajo)",
          "En quin ordre construirem el videojoc? (primer el que es mou, després les regles i al final provar)|¿En qué orden construiremos el videojuego? (primero lo que se mueve, después las reglas y al final probar)"
        ],
        slides: ['s10'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 10, t: "Pausa i els tres trossos|Pausa y los tres trozos", fase: 'ordinador',
        fa: "Pausa activa de la cistella. Després, els tres trossos: la cistella amb les fletxes, la poma i la roca. Cada tros es comprova abans de passar al següent.|Pausa activa de la cesta. Después, los tres trozos: la cesta con las flechas, la manzana y la roca. Cada trozo se comprueba antes de pasar al siguiente.",
        diu: [
          "La cistella s'escapa per la vora? Quina regla falta? (si toca la vora, torna enrere)|¿La cesta se escapa por el borde? ¿Qué regla falta? (si toca el borde, vuelve atrás)",
          "Has posat la regla a les dues tecles, la dreta i l'esquerra?|¿Has puesto la regla en las dos teclas, la derecha y la izquierda?",
          "La poma: on va quan l'atrapes? (a x: 100, y: 150, per caure per un altre lloc)|La manzana: ¿adónde va cuando la atrapas? (a x: 100, y: 150, para caer por otro sitio)",
          "La roca: quin bloc atura el videojoc? (atura tot)|La roca: ¿qué bloque para el videojuego? (para todo)"
        ],
        slides: ['s11'], app: "«Pausa activa» i els trossos 1, 2 i 3.|«Pausa activa» y los trozos 1, 2 y 3.", org: "Individual|Individual" },
      { min: 13, t: "Crea i prova amb un company/a|Crea y prueba con un compañero/a", fase: 'crea',
        fa: "Cada alumne/a completa el videojoc sencer seguint el seu pla. Quan funcioni, un company/a fa de tester: el prova sense ajuda i diu una cosa que li agrada i una idea per millorar. L'autor/a en tria una i la programa. Es desa al portafoli.|Cada alumno/a completa el videojuego entero siguiendo su plan. Cuando funcione, un compañero/a hace de tester: lo prueba sin ayuda y dice una cosa que le gusta y una idea para mejorar. El autor/a elige una y la programa. Se guarda en el portafolio.",
        diu: [
          "Segueix el teu pla: quina regla programes ara?|Sigue tu plan: ¿qué regla programas ahora?",
          "Has provat el plàtan sol abans d'afegir la millora?|¿Has probado el plátano solo antes de añadir la mejora?",
          "Tester: primer una cosa bona, després una idea. Mans fora del ratolí!|Tester: primero una cosa buena, después una idea. ¡Manos fuera del ratón!",
          "Autor/a: escolta, dona les gràcies i tria què millores.|Autor/a: escucha, da las gracias y elige qué mejoras."
        ],
        slides: ['s12', 's13'], app: "Pas «Crea»: Atrapa la fruita (es desa als projectes).|Paso «Crea»: Atrapa la fruta (se guarda en los proyectos).", org: "Individual i en parelles|Individual y por parejas" },
      { min: 4, t: "Tancament i celebració|Cierre y celebración", fase: 'tancament',
        fa: "Dos o tres alumnes ensenyen el seu videojoc a la classe. Resum de la unitat, preguntes finals i tiquet.|Dos o tres alumnos enseñan su videojuego a la clase. Resumen de la unidad, preguntas finales y ticket.",
        diu: [
          "Quina regla del teu videojoc t'agrada més? Digues-la amb «si».|¿Qué regla de tu videojuego te gusta más? Dila con «si».",
          "Quina idea del teu tester has fet servir?|¿Qué idea de tu tester has usado?",
          "Què li falta encara al nostre videojoc? (punts, vides… a la unitat 6!)|¿Qué le falta todavía a nuestro videojuego? (puntos, vidas… ¡en la unidad 6!)"
        ],
        slides: ['s14', 's15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa la regla «si toca la poma» a la cistella i espera que la poma torni a dalt.|Pone la regla «si toca la manzana» en la cesta y espera que la manzana vuelva arriba.", "Pregunta: qui ha de tornar a dalt? Doncs la regla va als guions de la poma.|Pregunta: ¿quién tiene que volver arriba? Pues la regla va en los guiones de la manzana."],
      ["La fruita torna a y = -150 (a baix) en lloc de y = 150.|La fruta vuelve a y = -150 (abajo) en lugar de y = 150.", "Recorda l'eix: la y gran és a dalt. On vols que torni la poma?|Recuerda el eje: la y grande está arriba. ¿Dónde quieres que vuelva la manzana?"],
      ["La cistella surt de l'escenari perquè no té la regla de la vora a les dues tecles.|La cesta sale del escenario porque no tiene la regla del borde en las dos teclas.", "Que provi primer la dreta i després l'esquerra. Per quin costat s'escapa?|Que pruebe primero la derecha y después la izquierda. ¿Por qué lado se escapa?"],
      ["Ho programa tot de cop i no sap on és l'error.|Lo programa todo de golpe y no sabe dónde está el error.", "Proposa-li treure (o deixar buit) un personatge i provar-ne només un. Funciona? Llavors afegeix el següent.|Proponle quitar (o dejar vacío) un personaje y probar solo uno. ¿Funciona? Entonces añade el siguiente."],
      ["Com a tester, només diu «està malament» o ho arregla ell/a.|Como tester, solo dice «está mal» o lo arregla él/ella.", "Recorda la regla del tester: una cosa bona, una idea, i les mans fora del ratolí.|Recuerda la regla del tester: una cosa buena, una idea, y las manos fuera del ratón."],
      ["Al projecte, programa el plàtan dins de la pestanya de la poma.|En el proyecto, programa el plátano dentro de la pestaña de la manzana.", "Que miri quin personatge té triat a les pestanyes de dalt. Qui ha de caure ara? Toca'l i programa'l allà.|Que mire qué personaje tiene elegido en las pestañas de arriba. ¿Quién tiene que caer ahora? Tócalo y prográmalo allí."]
    ],
    diff: {
      mes: "Fer que cada fruita torni a dalt per un lloc diferent (ves a x, y) i que el plàtan caigui més de pressa que la poma. Fer que la cistella digui una frase o canviï de mida quan atrapa una fruita.|Hacer que cada fruta vuelva arriba por un sitio diferente (ve a x, y) y que el plátano caiga más deprisa que la manzana. Hacer que la cesta diga una frase o cambie de tamaño cuando atrapa una fruta.",
      menys: "Seguir els trossos 1, 2 i 3 en ordre i, al projecte final, copiar les regles de la poma al plàtan. Tenir la fitxa del pla al costat de l'ordinador.|Seguir los trozos 1, 2 y 3 en orden y, en el proyecto final, copiar las reglas de la manzana al plátano. Tener la ficha del plan al lado del ordenador."
    },
    aval: {
      ticket: ["Digues una regla del teu videojoc amb «si».|Di una regla de tu videojuego con «si».", "Quina idea del teu tester has fet servir?|¿Qué idea de tu tester has usado?"],
      rubric: [
        ["Pla del videojoc|Plan del videojuego", "El pla té personatges, moviments i regles amb «si».|El plan tiene personajes, movimientos y reglas con «si».", "El pla té el dibuix, però les regles estan incompletes.|El plan tiene el dibujo, pero las reglas están incompletas."],
        ["Regles programades|Reglas programadas", "Les fruites cauen, tornen a dalt i reaccionen a la cistella.|Las frutas caen, vuelven arriba y reaccionan a la cesta.", "Hi ha una regla que falta o és al personatge equivocat.|Hay una regla que falta o está en el personaje equivocado."],
        ["Provar i millorar|Probar y mejorar", "Prova a trossos, escolta el tester i programa una millora.|Prueba a trozos, escucha al tester y programa una mejora.", "Prova al final i li costa triar una millora.|Prueba al final y le cuesta elegir una mejora."],
        [
          "Treball en parella (tester)|Trabajo en pareja (tester)",
          "Prova el videojoc de l'altre/a sense tocar-lo, diu una cosa bona i una idea concreta.|Prueba el videojuego del otro/a sin tocarlo, dice una cosa buena y una idea concreta.",
          "Dona opinions generals («està bé») o vol arreglar-lo ell/a.|Da opiniones generales («está bien») o quiere arreglarlo él/ella."
        ]
      ]
    },
    casa: "A casa, ensenyeu el videojoc a algú de la família: feu «El tester de casa», apunteu una millora i programeu-la el pròxim dia.|En casa, enseñad el videojuego a alguien de la familia: haced «El tester de casa», apuntad una mejora y programadla el próximo día.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: atrapa la fruita|Proyecto: atrapa la fruta", x: "Avui construïm el videojoc de la fira.|Hoy construimos el videojuego de la feria.",
        nota: "Crea expectació: al final, cadascú en tindrà un de propi al portafoli.|Crea expectación: al final, cada uno tendrá uno propio en el portafolio." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["«I»: calen les dues.|«Y»: hacen falta las dos.", "«O»: n'hi ha prou amb una.|«O»: basta con una.", "«No»: gira la resposta.|«No»: gira la respuesta."],
        nota: "Pregunta un exemple de cada.|Pide un ejemplo de cada una." },
      { id: 's3', k: 'media', t: "El videojoc acabat|El videojuego terminado", x: "Quines regles hi veieu?|¿Qué reglas veis?",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: -120, y: -130 }, { id: 'poma', art: 'poma', x: -120, y: 150 }, { id: 'platan', art: 'platan', x: 100, y: 150 }] }, prog: '@cistella flag{ forever{ glide:1.2,-120,-130 wait:0.4 glide:1.2,100,-130 wait:0.4 } } @poma flag{ forever{ chy:-4 if:touch:cistella{ sound:pop sety:150 } if:touch:edge{ sety:150 } } } @platan flag{ forever{ chy:-3 if:touch:cistella{ sound:moneda sety:150 } if:touch:edge{ sety:150 } } }', time: 8 },
        nota: "Apunta a la pissarra les regles que diguin, començant per «si».|Apunta en la pizarra las reglas que digan, empezando por «si»." },
      { id: 's4', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g5plan', x: "Dibuix i regles. Cada regla és un «si».|Dibujo y reglas. Cada regla es un «si».",
        nota: "Compara-ho amb fer una maqueta: primer el plànol.|Compáralo con hacer una maqueta: primero el plano." },
      { id: 's5', k: 'media', t: "Cada personatge, els seus guions|Cada personaje, sus guiones", x: "La cistella es mou; cada fruita cau i fa les seves preguntes.|La cesta se mueve; cada fruta cae y hace sus preguntas.", media: { k: 'stage', w: { bg: "bosc", sprites: [{ id: 'cistella', art: "cistella", x: -120, y: -130 }, { id: 'poma', art: "poma", x: -120, y: 150 }, { id: 'platan', art: "platan", x: 100, y: 150 }] }, prog: "@cistella flag{ forever{ glide:1.2,-120,-130 wait:0.4 glide:1.2,100,-130 wait:0.4 } } @poma flag{ forever{ chy:-4 if:touch:cistella{ sound:pop sety:150 } if:touch:edge{ sety:150 } } } @platan flag{ forever{ chy:-3 if:touch:cistella{ sound:moneda sety:150 } if:touch:edge{ sety:150 } } }", time: 8 }, nota: "Remarca que la regla de la fruita va als guions de la fruita, i que tots els guions funcionen alhora.|Remarca que la regla de la fruta va en los guiones de la fruta, y que todos los guiones funcionan a la vez." },
      { id: 's6', k: 'media', t: "Una regla que ho acaba tot|Una regla que lo acaba todo", x: "Si la roca toca la cistella, atura-ho tot.|Si la roca toca la cesta, páralo todo.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cistella', art: 'cistella', x: 40, y: -130 }, { id: 'roca', art: 'roca', x: 40, y: 150, size: 80 }] }, prog: '@roca flag{ forever{ chy:-4 if:touch:cistella{ say:"Pam! S\'ha acabat!|¡Pam! ¡Se acabó!" stop:all } if:touch:edge{ sety:150 } } }', time: 5 },
        nota: "Pregunta quin bloc atura el programa.|Pregunta qué bloque para el programa." },
      { id: 's7', k: 'concepte', t: "Construir a trossos|Construir a trozos", punts: ["Programa un tros.|Programa un trozo.", "Prova'l.|Pruébalo.", "Arregla'l.|Arréglalo.", "Passa al següent.|Pasa al siguiente."],
        nota: "Ho fan així els equips que creen videojocs de veritat.|Lo hacen así los equipos que crean videojuegos de verdad.", pic: "img/ment/ser.webp" },
      { id: 's8', k: 'activitat', t: "El pla del videojoc|El plan del videojuego", timer: 10, punts: ["Dibuixa l'escenari.|Dibuja el escenario.", "Escriu com es mou la cistella.|Escribe cómo se mueve la cesta.", "Escriu les regles amb «si».|Escribe las reglas con «si».", "Afegeix una idea teva.|Añade una idea tuya."],
        nota: "Passeja i ajuda a escriure regles completes: si… llavors…|Pasea y ayuda a escribir reglas completas: si… entonces…" },
      { id: 's9', k: 'activitat', t: "Revisa el pla amb un company/a|Revisa el plan con un compañero/a", punts: ["Cada regla comença amb «si»?|¿Cada regla empieza con «si»?", "Saps a quin personatge va cada regla?|¿Sabes en qué personaje va cada regla?"],
        nota: "Dos minuts finals de l'activitat.|Dos minutos finales de la actividad." },
      { id: 's10', k: 'activitat', t: "A l'ordinador|En el ordenador", timer: 8, punts: ["Prova el videojoc acabat.|Prueba el videojuego terminado.", "Ordena el pla i troba l'error.|Ordena el plan y encuentra el error.", "«El tester de casa»: toca «Ara no».|«El tester de casa»: toca «Ahora no»."],
        nota: "No deixis que s'entretinguin massa al videojoc acabat: dos minuts.|No dejes que se entretengan demasiado en el videojuego terminado: dos minutos." },
      { id: 's11', k: 'repte', t: "Els tres trossos|Los tres trozos", timer: 12, punts: ["1. La cistella i les fletxes|1. La cesta y las flechas", "2. La poma|2. La manzana", "3. La roca|3. La roca"],
        nota: "Recorda: «Comença» per provar amb les fletxes, «Comprova» per comprovar-ho.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para comprobarlo." },
      { id: 's12', k: 'activitat', t: "Crea: el videojoc sencer|Crea: el videojuego entero", timer: 8, x: "Segueix el teu pla: regles de la poma, el plàtan i la teva millora.|Sigue tu plan: reglas de la manzana, el plátano y tu mejora.",
        nota: "Qui acabi aviat pot fer caure les fruites més de pressa, afegir frases a la cistella o fer una fruita que torni a dalt per un altre lloc.|Quien termine pronto puede hacer caer las frutas más deprisa, añadir frases a la cesta o hacer que una fruta vuelva arriba por otro sitio." },
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
