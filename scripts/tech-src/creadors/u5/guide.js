/* Tech Creadors · unitat 5 «Condicions» · guia del professorat (g5-1 … g5-4). Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Si toca… ---------- */
  'g5-1': {
    intro: "Primera sessió de condicions. L'alumnat descobreix que una condició és una pregunta de sí o no i que el bloc «si» només fa els blocs de dins quan la resposta és sí. Ho aplica a la condició més útil per als videojocs: «toca…» (un altre personatge o la vora). La idea clau és que el «si» ha d'anar dins del «per sempre» per vigilar tota l'estona. La classe va de la vida diària (regles «si…, llavors…») a l'escenari, amb una activitat de targetes sense pantalla al mig.|Primera sesión de condiciones. El alumnado descubre que una condición es una pregunta de sí o no y que el bloque «si» solo hace los bloques de dentro cuando la respuesta es sí. Lo aplica a la condición más útil para los videojuegos: «toca…» (otro personaje o el borde). La idea clave es que el «si» tiene que ir dentro del «por siempre» para vigilar todo el rato. La clase va de la vida diaria (reglas «si…, entonces…») al escenario, con una actividad de tarjetas sin pantalla en medio.",
    claus: [
      "Una condició és una pregunta que només es respon amb sí o no.|Una condición es una pregunta que solo se responde con sí o no.",
      "El «si» fa els blocs del seu forat només amb el sí; amb el no, se'ls salta.|El «si» hace los bloques de su hueco solo con el sí; con el no, se los salta.",
      "«Toca…» pregunta si el personatge xoca amb un altre personatge, amb la vora o amb el ratolí.|«Toca…» pregunta si el personaje choca con otro personaje, con el borde o con el ratón.",
      "Un «si» pregunta una sola vegada; dins del «per sempre» torna a preguntar a cada volta.|Un «si» pregunta una sola vez; dentro del «por siempre» vuelve a preguntar en cada vuelta.",
      "Un programa ha de funcionar a totes les proves: no sap on són les coses, ho ha de preguntar.|Un programa tiene que funcionar en todas las pruebas: no sabe dónde están las cosas, lo tiene que preguntar."
    ],
    prev: [
      "Moure amb «canvia y en…» i saber que la y negativa és a baix (unitat 4).|Mover con «cambia y en…» y saber que la y negativa está abajo (unidad 4).",
      "El bucle «per sempre» i el bloc «si toques la vora, rebota» (unitats 2 i 4).|El bucle «por siempre» y el bloque «si tocas el borde, rebota» (unidades 2 y 4).",
      "Els esdeveniments: «quan comença» i «quan premo una tecla» (unitat 3).|Los eventos: «al empezar» y «al pulsar una tecla» (unidad 3)."
    ],
    faq: [
      ["Per què la poma no s'amaga si ja toca la cistella?|¿Por qué la manzana no se esconde si ya toca la cesta?", "Mira on és el «si»: si és fora del «per sempre», només ha preguntat una vegada, al principi, quan la poma encara era a dalt. Posa'l dins del bucle.|Mira dónde está el «si»: si está fuera del «por siempre», solo ha preguntado una vez, al principio, cuando la manzana aún estaba arriba. Ponlo dentro del bucle."],
      ["Què vol dir «la vora»?|¿Qué quiere decir «el borde»?", "És el marc de l'escenari, les quatre línies que el tanquen. «Toca la vora» és sí quan el personatge arriba a qualsevol costat.|Es el marco del escenario, las cuatro líneas que lo cierran. «Toca el borde» es sí cuando el personaje llega a cualquier lado."],
      ["Puc posar dos «si» dins del mateix bucle?|¿Puedo poner dos «si» dentro del mismo bucle?", "Sí! Cada «si» fa la seva pregunta, un darrere l'altre, a cada volta. Ho faràs al repte de la poma que torna a dalt.|¡Sí! Cada «si» hace su pregunta, uno detrás del otro, en cada vuelta. Lo harás en el reto de la manzana que vuelve arriba."],
      ["Per què hi ha una prova 2 si a la prova 1 ja funcionava?|¿Por qué hay una prueba 2 si en la prueba 1 ya funcionaba?", "Perquè a la prova 2 les coses són en un altre lloc. Si el programa funciona a totes dues, vol dir que de veritat pregunta i no que ha tingut sort.|Porque en la prueba 2 las cosas están en otro sitio. Si el programa funciona en las dos, quiere decir que de verdad pregunta y no que ha tenido suerte."],
      ["El «si» i el «rebota» són el mateix?|¿El «si» y el «rebota» son lo mismo?", "El «si toques la vora, rebota» porta un «si» amagat a dins que sempre fa el mateix: rebotar. Amb el teu «si» tu decideixes què passa.|El «si tocas el borde, rebota» lleva un «si» escondido dentro que siempre hace lo mismo: rebotar. Con tu «si» tú decides qué pasa."],
      ["Quantes vegades pregunta el «si» dins del «per sempre»?|¿Cuántas veces pregunta el «si» dentro del «por siempre»?", "A cada volta del bucle: unes 30 vegades cada segon. Per això no se li escapa cap xoc.|En cada vuelta del bucle: unas 30 veces cada segundo. Por eso no se le escapa ningún choque."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["Les fletxes del teclat no mouen el personatge.|Las flechas del teclado no mueven al personaje.", "Cal tocar primer l'escenari (perquè la pàgina «escolti» el teclat) o fer servir els botons de fletxes de sota l'escenari, que també funcionen al mòbil.|Hay que tocar primero el escenario (para que la página «escuche» el teclado) o usar los botones de flechas de debajo del escenario, que también funcionan en el móvil."],
      ["Un alumne/a s'encalla i ha esborrat blocs que no tocava.|Un alumno/a se atasca y ha borrado bloques que no tocaba.", "Després de dos intents apareix el botó «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece el botón «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver a entrar: el reto vuelve a empezar."],
      ["No troben com canviar «la cistella» per «la vora» dins del «si».|No encuentran cómo cambiar «la cesta» por «el borde» dentro del «si».", "Les paraules en negreta dels blocs són botons: en tocar-les surt la llista de personatges, la vora i el ratolí.|Las palabras en negrita de los bloques son botones: al tocarlas sale la lista de personajes, el borde y el ratón."],
      ["El bloc nou va a parar fora del «per sempre».|El bloque nuevo acaba fuera del «por siempre».", "Els blocs nous van on hi ha la línia «els blocs nous van aquí». Toqueu el forat de dins del bucle abans d'afegir el bloc.|Los bloques nuevos van donde está la línea «los bloques nuevos van aquí». Tocad el hueco de dentro del bucle antes de añadir el bloque."],
      ["Les targetes impreses surten massa petites.|Las tarjetas impresas salen demasiado pequeñas.", "Imprimiu-les al 100 % (sense «ajusta a la pàgina») i en paper una mica gruixut, o en DIN A3 per a grups grans.|Imprimidlas al 100 % (sin «ajustar a la página») y en papel algo grueso, o en DIN A3 para grupos grandes."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Activitat de targetes: les accions són de moure's al lloc. Apartar cadires i motxilles abans de començar.|Actividad de tarjetas: las acciones son de moverse en el sitio. Apartar sillas y mochilas antes de empezar.",
      "Algunes targetes parlen de la família o de mascotes: ningú no ha d'explicar res que no vulgui; qui no compleix la condició simplement es queda quiet/a.|Algunas tarjetas hablan de la familia o de mascotas: nadie tiene que explicar nada que no quiera; quien no cumple la condición simplemente se queda quieto/a."
    ],
    extra: [
      "Fer que el gat de la demo digui una frase diferent quan toca la vora i quan toca la roca (dos «si» dins del mateix bucle).|Hacer que el gato de la demo diga una frase distinta cuando toca el borde y cuando toca la roca (dos «si» dentro del mismo bucle).",
      "Afegir a la poma la regla «si toca el ratolí, fes un so» i provar-la passant el ratolí (o el dit) per sobre.|Añadir a la manzana la regla «si toca el ratón, haz un sonido» y probarla pasando el ratón (o el dedo) por encima.",
      "Escriure tres regles «si…, llavors…» de l'escola (el timbre, la porta automàtica, el llum del lavabo) i dibuixar-les com a blocs.|Escribir tres reglas «si…, entonces…» de la escuela (el timbre, la puerta automática, la luz del baño) y dibujarlas como bloques."
    ],
    trans: [
      "Ve de la unitat 4: el «si toques la vora, rebota» ja era una condició amagada. Ara la poden fer ells mateixos.|Viene de la unidad 4: el «si tocas el borde, rebota» ya era una condición escondida. Ahora la pueden hacer ellos mismos.",
      "Sessió següent: la condició «toca el color» i el «si… si no».|Sesión siguiente: la condición «toca el color» y el «si… si no».",
      "Llengua: frases condicionals amb «si…» i la diferència entre una pregunta tancada (sí o no) i una d'oberta.|Lengua: frases condicionales con «si…» y la diferencia entre una pregunta cerrada (sí o no) y una abierta."
    ],
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
        "El dia abans (15 min): imprimir i retallar les targetes (un paquet per grup de 4) i separar-les en dos munts: condicions i accions.|El día antes (15 min): imprimir y recortar las tarjetas (un paquete por grupo de 4) y separarlas en dos montones: condiciones y acciones.",
        "El dia abans (10 min): fer tu els quatre reptes, sobretot «Arregla l'error», per veure com s'esborra un bloc i com es torna a posar dins del bucle.|El día antes (10 min): hacer tú los cuatro retos, sobre todo «Arregla el error», para ver cómo se borra un bloque y cómo se vuelve a poner dentro del bucle.",
        "Abans de classe (5 min): obrir la presentació i provar la demo del gat i la roca (diapositiva 7).|Antes de clase (5 min): abrir la presentación y probar la demo del gato y la roca (diapositiva 7).",
        "Abans de classe (5 min): deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Antes de clase (5 min): dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Inici: la Festa de la Fruita|Inicio: la Fiesta de la Fruta", fase: 'inici',
        fa: "Presenta la missió de la unitat: un videojoc per a la Festa de la Fruita. Fes les preguntes de repàs sobre coordenades i tecles i recull respostes. Planteja el problema: com sap la cistella que una poma l'ha tocada?|Presenta la misión de la unidad: un videojuego para la Fiesta de la Fruta. Haz las preguntas de repaso sobre coordenadas y teclas y recoge respuestas. Plantea el problema: ¿cómo sabe la cesta que una manzana la ha tocado?",
        diu: [
          "Recordeu la unitat passada: quin bloc fa baixar la poma? (canvia y en -5)|¿Recordáis la unidad pasada? ¿Qué bloque hace bajar la manzana? (cambia y en -5)",
          "Quan es fan els blocs de «Quan premo la tecla espai»? (només quan algú prem l'espai)|¿Cuándo se hacen los bloques de «Al pulsar la tecla espacio»? (solo cuando alguien pulsa el espacio)",
          "Al nostre videojoc cauran fruites i una cistella les atraparà. Com sabrà la cistella que l'ha tocada una poma?|En nuestro videojuego caerán frutas y una cesta las atrapará. ¿Cómo sabrá la cesta que la ha tocado una manzana?",
          "No cal que ho sapigueu encara: al final de la classe ho sabreu explicar.|No hace falta que lo sepáis todavía: al final de la clase lo sabréis explicar."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Condicions i el bloc «si»|Condiciones y el bloque «si»", fase: 'teoria',
        fa: "Explica què és una condició amb exemples de la vida diària i demana'n més. Mostra l'animació del bloc «si»: amb el no se salta els blocs; amb el sí, els fa. Projecta la demo del gat i la roca i, abans, demana què creuen que passarà. Acaba amb l'error típic: el «si» fora del bucle.|Explica qué es una condición con ejemplos de la vida diaria y pide más. Muestra la animación del bloque «si»: con el no se salta los bloques; con el sí, los hace. Proyecta la demo del gato y la roca y, antes, pregunta qué creen que pasará. Termina con el error típico: el «si» fuera del bucle.",
        diu: [
          "Feu-me una pregunta que es pugui respondre només amb sí o no. («Plou?», «Tens gana?»)|Hacedme una pregunta que se pueda responder solo con sí o no. («¿Llueve?», «¿Tienes hambre?»)",
          "«De quin color és la teva motxilla?» És una condició? (no: té moltes respostes)|«¿De qué color es tu mochila?» ¿Es una condición? (no: tiene muchas respuestas)",
          "Què fa el «si» quan la resposta és no? (se salta els blocs de dins)|¿Qué hace el «si» cuando la respuesta es no? (se salta los bloques de dentro)",
          "Abans d'engegar la demo: què farà el gat quan toqui la roca? (dirà «Ai!» i girarà)|Antes de poner la demo: ¿qué hará el gato cuando toque la roca? (dirá «¡Ay!» y girará)",
          "Si el «si» és fora del bucle, quantes vegades pregunta? (una sola vegada, al principi)|Si el «si» está fuera del bucle, ¿cuántas veces pregunta? (una sola vez, al principio)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: «Si… llavors…»|Desconectado: «Si… entonces…»", fase: 'desconnectat',
        fa: "Grups de 4. Una persona treu una targeta de condició i una d'acció i les llegeix com una regla: «Si portes sabatilles, fes un salt». Qui compleix la condició fa l'acció; qui no, es queda quiet. Després de tres rondes, cada grup inventa dues regles noves i les proposa a la classe. Remarca: si la resposta és no, no es fa res.|Grupos de 4. Una persona saca una tarjeta de condición y una de acción y las lee como una regla: «Si llevas zapatillas, da un salto». Quien cumple la condición hace la acción; quien no, se queda quieto. Después de tres rondas, cada grupo inventa dos reglas nuevas y las propone a la clase. Remarca: si la respuesta es no, no se hace nada.",
        diu: [
          "Primer la pregunta: et passa a tu? Sí o no?|Primero la pregunta: ¿te pasa a ti? ¿Sí o no?",
          "Si la resposta és no, què fas? (res, com el bloc «si»)|Si la respuesta es no, ¿qué haces? (nada, como el bloque «si»)",
          "Qui ha fet l'acció en aquesta ronda? Per què tu no? (perquè la meva resposta era no)|¿Quién ha hecho la acción en esta ronda? ¿Por qué tú no? (porque mi respuesta era no)",
          "Inventeu una regla en què la resposta sigui sí per a tothom. I una que sigui no per a tothom!|Inventad una regla en la que la respuesta sea sí para todos. ¡Y una que sea no para todos!"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, l'ordenació de la poma i la predicció del cranc. Al pas «Caçadors de condicions», que toquin «Ara no»: és per fer a casa. Abans de tocar «Comença» al cranc, demana que diguin en veu alta què passarà.|Cada alumno/a hace la misión, las tarjetas, la ordenación de la manzana y la predicción del cangrejo. En el paso «Cazadores de condiciones», que toquen «Ahora no»: es para hacer en casa. Antes de tocar «Empieza» en el cangrejo, pide que digan en voz alta qué pasará.",
        diu: [
          "Llegeix el programa del cranc abans d'executar-lo: què creus que farà? (caminarà i saludarà el peix quan el toqui)|Lee el programa del cangrejo antes de ejecutarlo: ¿qué crees que hará? (caminará y saludará al pez cuando lo toque)",
          "Ho has endevinat? Què ha passat diferent del que pensaves?|¿Lo has adivinado? ¿Qué ha pasado distinto de lo que pensabas?",
          "Quin bloc fa la pregunta a la pilota? (el «si toca la vora»)|¿Qué bloque hace la pregunta en la pelota? (el «si toca el borde»)",
          "Ordena la poma: què fa primer, baixar o preguntar? (baixa i després pregunta, i torna a començar)|Ordena la manzana: ¿qué hace primero, bajar o preguntar? (baja y después pregunta, y vuelve a empezar)"
        ],
        slides: ['s12'], app: "De «La missió» fins a «Investiga»: històries, targetes, ordenar, la predicció i l'escenari del cranc i tocar el bloc que pregunta.|De «La misión» hasta «Investiga»: historias, tarjetas, ordenar, la predicción y el escenario del cangrejo y tocar el bloque que pregunta.", org: "Individual|Individual" },
      { min: 13, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Després programa amb la classe el primer repte (la poma que s'amaga) a la pantalla gran i deixa'ls fer la resta. Recorda que hi ha dues proves: el programa ha de funcionar a totes dues. Qui acabi ajuda amb preguntes.|Haced la pausa activa juntos. Después programa con la clase el primer reto (la manzana que se esconde) en la pantalla grande y déjales hacer el resto. Recuerda que hay dos pruebas: el programa tiene que funcionar en las dos. Quien termine ayuda con preguntas.",
        diu: [
          "On va el «si»: dins o fora del «per sempre»? (dins)|¿Dónde va el «si»: dentro o fuera del «por siempre»? (dentro)",
          "Per què a la prova 2 la poma no s'ha d'amagar? (perquè no toca la cistella: és en un altre lloc)|¿Por qué en la prueba 2 la manzana no se tiene que esconder? (porque no toca la cesta: está en otro sitio)",
          "A l'ocell: quina condició fas servir per saber que ha arribat al final? (toca la vora)|En el pájaro: ¿qué condición usas para saber que ha llegado al final? (toca el borde)",
          "Al repte de l'error: quan pregunta la poma si toca la cistella? (només al principi: per això no funciona)|En el reto del error: ¿cuándo pregunta la manzana si toca la cesta? (solo al principio: por eso no funciona)"
        ],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: atrapa la poma, l'ocell i la vora, la poma que torna i arregla l'error.|«Pausa activa» y los cuatro retos: atrapa la manzana, el pájaro y el borde, la manzana que vuelve y arregla el error.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva primera condició|Crea: mi primera condición", fase: 'crea',
        fa: "Cada alumne/a decideix com reacciona en Numi quan toca el regal. En parelles, s'ensenyen el programa i l'altre/a endevina la reacció abans d'executar-lo.|Cada alumno/a decide cómo reacciona Numi cuando toca el regalo. Por parejas, se enseñan el programa y el otro/a adivina la reacción antes de ejecutarlo.",
        diu: [
          "Quina reacció has triat per a en Numi? Ningú no l'ha de fer igual.|¿Qué reacción has elegido para Numi? Nadie la tiene que hacer igual.",
          "Ensenya el programa al company/a: pot endevinar què passarà abans d'executar-lo?|Enseña el programa al compañero/a: ¿puede adivinar qué pasará antes de ejecutarlo?",
          "On és el teu «si»: dins del bucle? Si no, en Numi no se n'adonarà!|¿Dónde está tu «si»: dentro del bucle? Si no, ¡Numi no se dará cuenta!"
        ],
        slides: ['s15'], app: "Pas «Crea»: La meva primera condició.|Paso «Crea»: Mi primera condición.", org: "Individual i en parelles|Individual y por parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: [
          "Digues una condició que hagis fet servir avui. («toca la cistella», «toca la vora»)|Di una condición que hayas usado hoy. («toca la cesta», «toca el borde»)",
          "Ara ja ho sabeu: com sap la cistella que l'ha tocada una poma? (la poma pregunta «toco la cistella?» a cada volta)|Ahora ya lo sabéis: ¿cómo sabe la cesta que la ha tocado una manzana? (la manzana pregunta «¿toco la cesta?» en cada vuelta)",
          "El pròxim dia, els colors del fons també faran preguntes!|¡El próximo día, los colores del fondo también harán preguntas!"
        ],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «si» abans del «per sempre» i no entén per què no passa res.|Pone el «si» antes del «por siempre» y no entiende por qué no pasa nada.", "Pregunta: quan pregunta la poma si toca la cistella? Que segueixi el programa amb el dit, bloc a bloc, i vegi que el «si» només es fa una vegada.|Pregunta: ¿cuándo pregunta la manzana si toca la cesta? Que siga el programa con el dedo, bloque a bloque, y vea que el «si» solo se hace una vez."],
      ["Posa els blocs de la reacció a sota del «si» i no a dins.|Pone los bloques de la reacción debajo del «si» y no dentro.", "Fes-li notar el forat del bloc «si»: el que hi ha dins només passa amb el sí. Que toqui el forat abans d'afegir el bloc.|Hazle notar el hueco del bloque «si»: lo que hay dentro solo pasa con el sí. Que toque el hueco antes de añadir el bloque."],
      ["No sap canviar «toca la cistella» per «toca la vora».|No sabe cambiar «toca la cesta» por «toca el borde».", "Recorda-li que les paraules en negreta dels blocs es poden tocar. Què passa si toques «la cistella»?|Recuérdale que las palabras en negrita de los bloques se pueden tocar. ¿Qué pasa si tocas «la cesta»?"],
      ["Funciona a la prova 1 però no a la 2 i pensa que l'app s'equivoca.|Funciona en la prueba 1 pero no en la 2 y piensa que la app se equivoca.", "Que miri on és la cistella a la prova 2. El programa ha de decidir sol, sense saber on és: per això cal la pregunta.|Que mire dónde está la cesta en la prueba 2. El programa tiene que decidir solo, sin saber dónde está: por eso hace falta la pregunta."],
      ["Per arreglar l'error, prova de moure el «si» amb les fletxes i no entra al bucle.|Para arreglar el error, intenta mover el «si» con las flechas y no entra en el bucle.", "Les fletxes mouen dins la mateixa llista. Que l'esborri, toqui el forat de dins del «per sempre» i el torni a posar.|Las flechas mueven dentro de la misma lista. Que lo borre, toque el hueco de dentro del «por siempre» y lo vuelva a poner."],
      ["A l'ocell, posa «gira 180 graus» fora del «si» i l'ocell dona voltes sense parar.|En el pájaro, pone «gira 180 grados» fuera del «si» y el pájaro da vueltas sin parar.", "Que miri el bloc que gira: és dins del forat del «si» o a sota? Què vol dir que giri a cada volta, toqui o no toqui la vora?|Que mire el bloque que gira: ¿está dentro del hueco del «si» o debajo? ¿Qué quiere decir que gire en cada vuelta, toque o no toque el borde?"]
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
        ["El «si» dins del bucle|El «si» dentro del bucle", "Arregla el programa de l'error i explica per què el «si» va dins del «per sempre».|Arregla el programa del error y explica por qué el «si» va dentro del «por siempre».", "Necessita ajuda per veure que fora del bucle només pregunta una vegada.|Necesita ayuda para ver que fuera del bucle solo pregunta una vez."],
        [
          "Llegir i predir|Leer y predecir",
          "Llegeix el programa del cranc i diu què farà abans d'executar-lo.|Lee el programa del cangrejo y dice qué hará antes de ejecutarlo.",
          "Necessita executar el programa per saber què fa.|Necesita ejecutar el programa para saber qué hace."
        ]
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
        nota: "Per a cada frase, que identifiquin la pregunta de sí o no i el que passa amb el sí.|Para cada frase, que identifiquen la pregunta de sí o no y lo que pasa con el sí.", pic: "img/ment/atu.webp" },
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
        nota: "Explica-ho quan algú digui que «a la prova 1 ja funcionava».|Explícalo cuando alguien diga que «en la prueba 1 ya funcionaba».", pic: "img/ment/par.webp" },
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
    intro: "Segona sessió de condicions. El fons també pot donar informació: la condició «toca el color» pregunta si el personatge trepitja una zona de color (el blau del mar, el verd de l'herba, les parets del laberint). Després arriba el «si… si no», que dona dues respostes a una sola pregunta i sempre en fa una, mai les dues. La classe comença amb colors que avisen a la vida real (el semàfor) i té una activitat de graella en parelles abans de passar als reptes, que acaben amb el laberint de colors.|Segunda sesión de condiciones. El fondo también puede dar información: la condición «toca el color» pregunta si el personaje pisa una zona de color (el azul del mar, el verde de la hierba, las paredes del laberinto). Después llega el «si… si no», que da dos respuestas a una sola pregunta y siempre hace una, nunca las dos. La clase empieza con colores que avisan en la vida real (el semáforo) y tiene una actividad de cuadrícula por parejas antes de pasar a los retos, que terminan con el laberinto de colores.",
    claus: [
      "«Toca el color» pregunta pel fons: si el personatge trepitja una zona d'aquell color.|«Toca el color» pregunta por el fondo: si el personaje pisa una zona de ese color.",
      "Els colors poden tenir un significat: blau, aigua o paret; verd, herba o sortida; vermell, trampa.|Los colores pueden tener un significado: azul, agua o pared; verde, hierba o salida; rojo, trampa.",
      "El «si… si no» té dues parts: la de dalt per al sí i la de baix per al no.|El «si… si no» tiene dos partes: la de arriba para el sí y la de abajo para el no.",
      "Cada vegada que pregunta en fa una de les dues, mai totes dues.|Cada vez que pregunta hace una de las dos, nunca las dos."
    ],
    prev: [
      "El bloc «si» i la condició «toca…» dins del «per sempre» (sessió anterior).|El bloque «si» y la condición «toca…» dentro del «por siempre» (sesión anterior).",
      "Posar y a un número i canviar y per pujar o baixar (unitat 4).|Poner y a un número y cambiar y para subir o bajar (unidad 4).",
      "El laberint de la unitat 4: les parets són blaves i la sortida, verda.|El laberinto de la unidad 4: las paredes son azules y la salida, verde."
    ],
    faq: [
      ["Quins colors puc triar a «toca el color»?|¿Qué colores puedo elegir en «toca el color»?", "Els que té el fons de cada repte: a la platja, el blau del mar i el groc de la sorra; al bosc, el verd de l'herba; al laberint, blau, verd i vermell. Si el fons no té zones de color, l'app t'ho diu.|Los que tiene el fondo de cada reto: en la playa, el azul del mar y el amarillo de la arena; en el bosque, el verde de la hierba; en el laberinto, azul, verde y rojo. Si el fondo no tiene zonas de color, la app te lo dice."],
      ["On és el «si no»? No el trobo a la paleta.|¿Dónde está el «si no»? No lo encuentro en la paleta.", "No és un bloc a part: toca un bloc «si» que ja tinguis i després el botó «Afegeix «si no»». Li surt una segona part a sota.|No es un bloque aparte: toca un bloque «si» que ya tengas y después el botón «Añade «si no»». Le sale una segunda parte debajo."],
      ["Puc fer el mateix amb dos «si»?|¿Puedo hacer lo mismo con dos «si»?", "De vegades sí, però amb un «si… si no» n'hi ha prou amb una sola pregunta i és impossible que es facin les dues parts alhora.|A veces sí, pero con un «si… si no» basta con una sola pregunta y es imposible que se hagan las dos partes a la vez."],
      ["Per què en Numi s'enfonsa a l'herba?|¿Por qué Numi se hunde en la hierba?", "Perquè el bloc de caure és a la part del sí. Quan toca el verd ha de caminar; el «canvia y en -5» va a la part «si no».|Porque el bloque de caer está en la parte del sí. Cuando toca el verde tiene que caminar; el «cambia y en -5» va en la parte «si no»."],
      ["Al laberint, per què l'Estel es mou sol quan toco «Comprova»?|En el laberinto, ¿por qué Estel se mueve solo cuando toco «Comprueba»?", "«Comprova» prem les fletxes per tu, sempre igual, per veure si les teves regles funcionen a les dues proves. Amb «Comença» les prems tu.|«Comprueba» pulsa las flechas por ti, siempre igual, para ver si tus reglas funcionan en las dos pruebas. Con «Empieza» las pulsas tú."],
      ["Què passa si toca dos colors alhora?|¿Qué pasa si toca dos colores a la vez?", "Les dues preguntes diuen sí i es fan els dos «si», un darrere l'altre. Per això l'ordre dels blocs pot importar.|Las dos preguntas dicen sí y se hacen los dos «si», uno detrás del otro. Por eso el orden de los bloques puede importar."]
    ],
    tec: [
      ["L'escenari no es mou en tocar «Comença».|El escenario no se mueve al tocar «Empieza».", "Comproveu que el programa té blocs sota «Quan comença». Si no, toqueu el botó de tornar a començar (la fletxa rodona) i proveu-ho de nou.|Comprobad que el programa tiene bloques bajo «Al empezar». Si no, tocad el botón de volver a empezar (la flecha redonda) y probadlo de nuevo."],
      ["Les fletxes del teclat no mouen el personatge.|Las flechas del teclado no mueven al personaje.", "Cal tocar primer l'escenari (perquè la pàgina «escolti» el teclat) o fer servir els botons de fletxes de sota l'escenari, que també funcionen al mòbil.|Hay que tocar primero el escenario (para que la página «escuche» el teclado) o usar los botones de flechas de debajo del escenario, que también funcionan en el móvil."],
      ["Un alumne/a s'encalla i ha esborrat blocs que no tocava.|Un alumno/a se atasca y ha borrado bloques que no tocaba.", "Després de dos intents apareix el botó «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece el botón «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver a entrar: el reto vuelve a empezar."],
      ["Al laberint, «Comprova» falla tot i que amb les fletxes funciona.|En el laberinto, «Comprueba» falla aunque con las flechas funciona.", "Mireu quina prova falla (Prova 1 o 2, a dalt de l'escenari) i el missatge de sota. Sovint falta «atura tot» després de «He sortit!» o la paret no torna a x: -175, y: 100.|Mirad qué prueba falla (Prueba 1 o 2, encima del escenario) y el mensaje de debajo. A menudo falta «para todo» después de «¡He salido!» o la pared no vuelve a x: -175, y: 100."],
      ["No apareix el botó «Afegeix «si no»».|No aparece el botón «Añade «si no»».", "Cal tocar la part de dalt del bloc «si» (el nom del bloc, no el forat): s'obren els botons del bloc seleccionat.|Hay que tocar la parte de arriba del bloque «si» (el nombre del bloque, no el hueco): se abren los botones del bloque seleccionado."],
      ["No queden llapis de colors per a la graella.|No quedan lápices de colores para la cuadrícula.", "Es pot fer amb lletres dins de les caselles: B (blau), V (verd) i R (vermell).|Se puede hacer con letras dentro de las casillas: A (azul), V (verde) y R (rojo)."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Semàfor humà: es camina sense moure's del lloc i sense córrer; els colors no s'han de fer servir per triar companys ni per excloure ningú.|Semáforo humano: se camina sin moverse del sitio y sin correr; los colores no se usan para elegir compañeros ni para excluir a nadie.",
      "Recordeu que a la vida real els semàfors i els senyals es miren sempre amb una persona adulta.|Recordad que en la vida real los semáforos y las señales se miran siempre con una persona adulta."
    ],
    extra: [
      "Al laberint, afegir la regla del vermell (la trampa): si el toca, diu «Ai!» i torna a l'inici.|En el laberinto, añadir la regla del rojo (la trampa): si lo toca, dice «¡Ay!» y vuelve al inicio.",
      "Fer que la Tuga canviï de vestit quan neda i torni al normal a la sorra, amb un sol «si… si no».|Hacer que Tuga cambie de disfraz cuando nada y vuelva al normal en la arena, con un solo «si… si no».",
      "Dibuixar un fons propi en paper amb tres zones de colors i escriure'n les regles.|Dibujar un fondo propio en papel con tres zonas de colores y escribir sus reglas."
    ],
    trans: [
      "Ve de la sessió anterior: el mateix «si», ara amb colors i amb dues parts.|Viene de la sesión anterior: el mismo «si», ahora con colores y con dos partes.",
      "Sessió següent: ajuntar preguntes amb «i» i «o», i girar-les amb «no».|Sesión siguiente: juntar preguntas con «y» y «o», y girarlas con «no».",
      "Ciències i educació viària: senyals i colors que avisen (semàfors, sortides d'emergència).|Ciencias y educación vial: señales y colores que avisan (semáforos, salidas de emergencia)."
    ],
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
        "El dia abans (10 min): imprimir una graella «El camí dels colors» per parella i preparar llapis blaus, verds i vermells.|El día antes (10 min): imprimir una cuadrícula «El camino de los colores» por pareja y preparar lápices azules, verdes y rojos.",
        "El dia abans (10 min): provar el repte del laberint amb les fletxes i amb «Comprova» per saber com funciona.|El día antes (10 min): probar el reto del laberinto con las flechas y con «Comprueba» para saber cómo funciona.",
        "El dia abans (2 min): recordar com s'afegeix el «si no»: tocar el bloc «si» i el botó «Afegeix «si no»».|El día antes (2 min): recordar cómo se añade el «si no»: tocar el bloque «si» y el botón «Añade «si no»».",
        "Abans de classe (5 min): deixar els ordinadors amb la sessió iniciada i la presentació oberta.|Antes de clase (5 min): dejar los ordenadores con la sesión iniciada y la presentación abierta."
      ]
    },
    plan: [
      { min: 5, t: "Inici: colors que avisen|Inicio: colores que avisan", fase: 'inici',
        fa: "Repassa el «si» dins del «per sempre» amb les dues preguntes de la diapositiva. Pregunta on veuen colors que avisen: el semàfor, la sortida d'emergència, el llum vermell d'un aparell encès… Apunta les respostes a la pissarra. Presenta en Pinces, el cranc que no sap nedar i necessita que el fons l'avisi.|Repasa el «si» dentro del «por siempre» con las dos preguntas de la diapositiva. Pregunta dónde ven colores que avisan: el semáforo, la salida de emergencia, la luz roja de un aparato encendido… Apunta las respuestas en la pizarra. Presenta a Pinzas, el cangrejo que no sabe nadar y necesita que el fondo le avise.",
        diu: [
          "On va el «si toca…» perquè vigili tota l'estona? (dins del «per sempre»)|¿Dónde va el «si toca…» para que vigile todo el rato? (dentro del «por siempre»)",
          "On heu vist colors que volen dir alguna cosa? (el semàfor, les sortides, els botons…)|¿Dónde habéis visto colores que quieren decir algo? (el semáforo, las salidas, los botones…)",
          "Què vol dir el verd d'una sortida d'emergència? (per aquí pots sortir)|¿Qué quiere decir el verde de una salida de emergencia? (por aquí puedes salir)",
          "En Pinces no sap nedar. Com el pot avisar el fons? (amb el blau del mar)|Pinzas no sabe nadar. ¿Cómo le puede avisar el fondo? (con el azul del mar)"
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Toca el color i «si… si no»|Toca el color y «si… si no»", fase: 'teoria',
        fa: "Mostra l'animació del cranc i la demo de la platja. Explica el «si… si no» amb el paraigua i la gorra i fes que diguin quina part es fa en cada cas. Projecta la demo d'en Numi que cau i camina, i acaba amb el laberint: un «si» per a cada color.|Muestra la animación del cangrejo y la demo de la playa. Explica el «si… si no» con el paraguas y la gorra y haz que digan qué parte se hace en cada caso. Proyecta la demo de Numi que cae y camina, y termina con el laberinto: un «si» para cada color.",
        diu: [
          "El cranc pregunta «toco el blau?». Què fa quan la resposta és sí? (torna a la sorra)|El cangrejo pregunta «¿toco el azul?». ¿Qué hace cuando la respuesta es sí? (vuelve a la arena)",
          "«Si plou, agafo el paraigua; si no, la gorra.» Avui fa sol: què agafo? (la gorra)|«Si llueve, cojo el paraguas; si no, la gorra.» Hoy hace sol: ¿qué cojo? (la gorra)",
          "Pot fer les dues parts alhora? (no, mai: una o l'altra)|¿Puede hacer las dos partes a la vez? (no, nunca: una u otra)",
          "En Numi és a l'aire: quina part es fa? (la del «si no»: cau)|Numi está en el aire: ¿qué parte se hace? (la del «si no»: cae)",
          "Al laberint, quina regla falta per a les parets? (si toca el blau, torna a l'inici)|En el laberinto, ¿qué regla falta para las paredes? (si toca el azul, vuelve al inicio)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 11, t: "Desconnectat: el camí dels colors|Desconectado: el camino de los colores", fase: 'desconnectat',
        fa: "En parelles, pinten a la graella unes quantes caselles blaves (aigua), vermelles (trampa) i verdes (sortida) i marquen l'inici. Escriuen les regles amb «si… si no». Després intercanvien la graella amb una altra parella: un/a diu fletxes i l'altre/a mou la fitxa i aplica les regles en veu alta a cada casella.|Por parejas, pintan en la cuadrícula unas cuantas casillas azules (agua), rojas (trampa) y verdes (salida) y marcan el inicio. Escriben las reglas con «si… si no». Después intercambian la cuadrícula con otra pareja: uno/a dice flechas y el otro/a mueve la ficha y aplica las reglas en voz alta en cada casilla.",
        diu: [
          "A cada casella, pregunteu: de quin color és?|En cada casilla, preguntad: ¿de qué color es?",
          "Si no és de cap color, què fa la fitxa? (continua: és la part del «si no»)|Si no es de ningún color, ¿qué hace la ficha? (sigue: es la parte del «si no»)",
          "Les regles de l'altra parella són clares? Les podeu seguir sense preguntar?|¿Las reglas de la otra pareja son claras? ¿Las podéis seguir sin preguntar?",
          "Heu arribat a la sortida verda? Quantes vegades heu tornat a l'inici?|¿Habéis llegado a la salida verde? ¿Cuántas veces habéis vuelto al inicio?"
        ],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 12, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa la missió, les targetes, la pregunta del semàfor, la predicció del cranc a la sorra i el pas de tocar el bloc del «si no». El pas «El semàfor de casa» és per fer a casa: que toquin «Ara no». Passeja i, al pas d'investigar, demana a algú que expliqui en veu alta per què ha triat aquell bloc.|Cada alumno/a hace la misión, las tarjetas, la pregunta del semáforo, la predicción del cangrejo en la arena y el paso de tocar el bloque del «si no». El paso «El semáforo de casa» es para hacer en casa: que toquen «Ahora no». Pasea y, en el paso de investigar, pide a alguien que explique en voz alta por qué ha elegido ese bloque.",
        diu: [
          "Quina part es fa ara, la de dalt o la del «si no»? Com ho saps?|¿Qué parte se hace ahora, la de arriba o la del «si no»? ¿Cómo lo sabes?",
          "En Pinces és a la sorra: toca el groc? Llavors, què fa? (camina)|Pinzas está en la arena: ¿toca el amarillo? Entonces, ¿qué hace? (camina)",
          "Quin bloc es fa quan el cranc no toca el blau? (canvia y en 3: puja)|¿Qué bloque se hace cuando el cangrejo no toca el azul? (cambia y en 3: sube)"
        ],
        slides: ['s11'], app: "De «La missió» fins a «Investiga».|De «La misión» hasta «Investiga».", org: "Individual|Individual" },
      { min: 14, t: "Pausa i reptes|Pausa y retos", fase: 'ordinador',
        fa: "Pausa activa del semàfor humà. Després, els quatre reptes. Al laberint, explica que primer es prova amb «Comença» i les fletxes, i després «Comprova» prem les tecles sola a les dues proves.|Pausa activa del semáforo humano. Después, los cuatro retos. En el laberinto, explica que primero se prueba con «Empieza» y las flechas, y después «Comprueba» pulsa las teclas sola en las dos pruebas.",
        diu: [
          "Com s'afegeix el «si no»? (toques el «si» i després «Afegeix «si no»»)|¿Cómo se añade el «si no»? (tocas el «si» y después «Añade «si no»»)",
          "En Numi: què va a dalt i què va a baix? (a dalt caminar; al «si no», caure)|Numi: ¿qué va arriba y qué va abajo? (arriba caminar; en el «si no», caer)",
          "Al laberint, què ha de passar si toques la paret? (tornar a l'inici)|En el laberinto, ¿qué tiene que pasar si tocas la pared? (volver al inicio)",
          "Has provat amb les fletxes? Ara toca «Comprova»: l'app farà les dues proves.|¿Has probado con las flechas? Ahora toca «Comprueba»: la app hará las dos pruebas."
        ],
        slides: ['s12', 's13'], app: "«Pausa activa» i els reptes: el cranc, en Numi cau, les respostes canviades i el laberint.|«Pausa activa» y los retos: el cangrejo, Numi cae, las respuestas cambiadas y el laberinto.", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu avís de colors|Crea: mi aviso de colores", fase: 'crea',
        fa: "La Tuga passeja per la platja amb les fletxes. Cadascú decideix què fa al mar (part del sí) i què fa a la sorra (part del «si no»): dir coses, canviar de vestit, fer sons… Quan funcioni, toquen «Comprova» i ho desen. En parelles, s'ensenyen el programa i l'altre/a ha d'endevinar què farà la Tuga al mar abans de provar-ho.|Tuga pasea por la playa con las flechas. Cada uno decide qué hace en el mar (parte del sí) y qué hace en la arena (parte del «si no»): decir cosas, cambiar de disfraz, hacer sonidos… Cuando funcione, tocan «Comprueba» y lo guardan. Por parejas, se enseñan el programa y el otro/a tiene que adivinar qué hará Tuga en el mar antes de probarlo.",
        diu: [
          "Què fa la Tuga al mar? I si no hi és?|¿Qué hace Tuga en el mar? ¿Y si no está?",
          "Has posat algun bloc a les dues parts? Si una part és buida, no passa res amb aquella resposta.|¿Has puesto algún bloque en las dos partes? Si una parte está vacía, no pasa nada con esa respuesta.",
          "El teu company/a ha endevinat què faria la Tuga?|¿Tu compañero/a ha adivinado qué haría Tuga?"
        ],
        slides: ['s14'], app: "Pas «Crea»: El meu avís de colors.|Paso «Crea»: Mi aviso de colores.", org: "Individual|Individual" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i torna a la llista de colors que avisen de la pissarra: ara la poden llegir com a regles «si… si no». Deixa que facin les preguntes finals i el «com m'he sentit», i fes el tiquet de sortida a la porta.|Repasa las tres ideas con el resumen y vuelve a la lista de colores que avisan de la pizarra: ahora la pueden leer como reglas «si… si no». Deja que hagan las preguntas finales y el «cómo me he sentido», y haz el ticket de salida en la puerta.",
        diu: [
          "Digues un «si… si no» de la vida diària. («Si fa fred, jaqueta; si no, samarreta»)|Di un «si… si no» de la vida diaria. («Si hace frío, chaqueta; si no, camiseta»)",
          "Quantes parts fa cada vegada un «si… si no»? (una)|¿Cuántas partes hace cada vez un «si… si no»? (una)",
          "Llegim un color de la pissarra com a regla: «si el semàfor és verd, passo; si no…» (m'espero)|Leemos un color de la pizarra como regla: «si el semáforo está verde, paso; si no…» (espero)"
        ],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa dos «si» (un per al sí i un altre igual per al no) i els dos fan el mateix.|Pone dos «si» (uno para el sí y otro igual para el no) y los dos hacen lo mismo.", "Pregunta: quina part es fa quan la resposta és no? Ensenya-li el botó «Afegeix «si no»».|Pregunta: ¿qué parte se hace cuando la respuesta es no? Enséñale el botón «Añade «si no»»."],
      ["En Numi s'enfonsa a l'herba perquè el bloc de caure és fora del «si no».|Numi se hunde en la hierba porque el bloque de caer está fuera del «si no».", "Que llegeixi en veu alta: «si toca el verd, camina; si no, cau». On és el bloc de caure?|Que lea en voz alta: «si toca el verde, camina; si no, cae». ¿Dónde está el bloque de caer?"],
      ["Al laberint, mou l'Estel amb les fletxes però no toca «Comprova».|En el laberinto, mueve a Estel con las flechas pero no toca «Comprueba».", "Recorda: amb «Comença» proves; amb «Comprova», l'app prem les tecles sola i mira si les regles funcionen.|Recuerda: con «Empieza» pruebas; con «Comprueba», la app pulsa las teclas sola y mira si las reglas funcionan."],
      ["Al laberint, posa «digues He sortit!» fora del «si toca el verd».|En el laberinto, pone «di ¡He salido!» fuera del «si toca el verde».", "Pregunta: quan ha de dir «He sortit»? Sempre, o només quan toca el verd?|Pregunta: ¿cuándo tiene que decir «He salido»? ¿Siempre, o solo cuando toca el verde?"],
      ["Confon el color de la condició (tria el groc en lloc del blau).|Confunde el color de la condición (elige el amarillo en lugar del azul).", "Que toqui el nom del color dins del bloc i triï el que correspon al mar. Quin color té el mar al fons?|Que toque el nombre del color dentro del bloque y elija el que corresponde al mar. ¿Qué color tiene el mar en el fondo?"],
      ["Deixa buida la part del «si no» al projecte de la Tuga i no entén per què l'app li demana més.|Deja vacía la parte del «si no» en el proyecto de Tuga y no entiende por qué la app le pide más.", "Pregunta: què fa la Tuga quan és a la sorra? Si no fa res, la part de baix és buida. Quina cosa podria fer quan no és al mar?|Pregunta: ¿qué hace Tuga cuando está en la arena? Si no hace nada, la parte de abajo está vacía. ¿Qué cosa podría hacer cuando no está en el mar?"]
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
        ["Regles del laberint|Reglas del laberinto", "Programa una regla per a cada color i la comprova a les dues proves.|Programa una regla para cada color y la comprueba en las dos pruebas.", "Programa una de les regles, però no l'altra.|Programa una de las reglas, pero no la otra."],
        [
          "Llegir un «si… si no»|Leer un «si… si no»",
          "Diu quina part es farà en cada situació (cranc a la sorra, Numi a l'aire).|Dice qué parte se hará en cada situación (cangrejo en la arena, Numi en el aire).",
          "Necessita executar el programa per saber quina part es fa.|Necesita ejecutar el programa para saber qué parte se hace."
        ]
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
        nota: "Fes-ho una vegada a la pantalla gran.|Hazlo una vez en la pantalla grande.", pic: "img/ment/rfx.webp" },
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
    intro: "Tercera sessió de condicions: tres paraules que fan les regles més llestes. Amb «i», la resposta és sí només si les dues preguntes són sí; amb «o», n'hi ha prou amb una; i «no» gira la resposta. L'alumnat ho prova primer amb regles de la fira i amb portes lògiques humanes, i després a l'escenari: un gat que gira si toca la roca o la vora, un regal que només s'obre si hi són en Numi i en Bit, i en Bit que camina mentre no toca la roca. Distingir «i» d'«o» costa: dona temps a les preguntes de la fira.|Tercera sesión de condiciones: tres palabras que hacen las reglas más listas. Con «y», la respuesta es sí solo si las dos preguntas son sí; con «o», basta con una; y «no» gira la respuesta. El alumnado lo prueba primero con reglas de la feria y con puertas lógicas humanas, y después en el escenario: un gato que gira si toca la roca o el borde, un regalo que solo se abre si están Numi y Bit, y Bit que camina mientras no toca la roca. Distinguir «y» de «o» cuesta: da tiempo a las preguntas de la feria.",
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
    intro: "Sessió de projecte. L'alumnat construeix el videojoc «Atrapa la fruita» amb tot el que ha après a la unitat: la cistella es mou amb les fletxes, les fruites cauen i cada regla és un «si» (si toca la cistella, si toca la vora, si la roca toca la cistella…). Primer fan el pla en paper, després construeixen el videojoc a trossos (provant cada tros) i, al final, un company/a fa de tester i proposa una millora. És una sessió per consolidar, no per aprendre blocs nous: valora el procés (pla, prova, millora) tant com el resultat.|Sesión de proyecto. El alumnado construye el videojuego «Atrapa la fruta» con todo lo que ha aprendido en la unidad: la cesta se mueve con las flechas, las frutas caen y cada regla es un «si» (si toca la cesta, si toca el borde, si la roca toca la cesta…). Primero hacen el plan en papel, después construyen el videojuego a trozos (probando cada trozo) y, al final, un compañero/a hace de tester y propone una mejora. Es una sesión para consolidar, no para aprender bloques nuevos: valora el proceso (plan, prueba, mejora) tanto como el resultado.",
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
      { min: 8, t: "El pla i els guions|El plan y los guiones", fase: 'teoria',
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
      { min: 12, t: "Pausa i els tres trossos|Pausa y los tres trozos", fase: 'ordinador',
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
