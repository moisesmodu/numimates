/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 6 «Variables» (g6-1 … g6-4) =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demos de l'escenari (k: 'media')
   fan servir el motor de Creadors (tech-stage.js). */
Object.assign(TGUIDE, (() => {
  const VN = { punts: 'punts|puntos', vides: 'vides|vidas', temps: 'temps|tiempo', segons: 'segons|segundos', errors: 'errors|errores', ratxa: 'ratxa|racha', gana: 'gana|hambre', alegria: 'alegria|alegría' };
  const clicks = (id, ts) => ts.map(t => ({ t, click: id }));
  const FI = 'Fi de la partida!|¡Fin de la partida!', TEMPS = "S'ha acabat el temps!|¡Se acabó el tiempo!";
  const METEOR = '@meteorit flag{ forever{ chy:-6 if:touch:edge{ sety:150 } } }';
  const W_NAU = { bg: 'espai', sprites: [{ id: 'nau', art: 'nau', x: 0, y: -120 }, { id: 'meteorit', art: 'meteorit', x: 0, y: 150 }], vars: ['vides'] };
  const GAT = '@gat flag{ forever{ move:6 bounce } }', POMA = '@poma flag{ setv:punts,0 forever{ chy:-8 if:touch:gat{ chv:punts,1 sound:moneda sety:150 } if:touch:edge{ sety:150 } } }';
  const GANA = '@mascota flag{ setv:gana,0 forever{ wait:1 chv:gana,1 } }';
  const PET = [{ id: 'mascota', art: 'mascota', x: 0, y: -30, size: 130 }, { id: 'poma', art: 'poma', x: -170, y: -120, size: 120 }, { id: 'pilota', art: 'pilota', x: 170, y: -120, size: 120 }];
  return {

  /* ---------- Sessió 1 · El marcador de la fira ---------- */
  'g6-1': {
    intro: "Primera sessió de variables. L'alumnat ja ha fet servir una variable a Tech Robot (el comptador d'en Bit amb posa, suma i resta), així que la sessió no torna a explicar què és: parteix d'aquí i passa al que és nou. A l'escenari, cada variable té el nom que es vulgui i el seu valor es veu al marcador mentre el programa funciona; un videojoc en pot tenir diverses alhora (punts, errors, ratxa) i a cada bloc cal triar quina canvia; i les variables poden baixar per sota de zero, cosa que caldrà controlar. La classe comença amb la caseta de la Fira de Tardor, fa un marcador de tres variables amb una paperera i acaba amb quatre reptes i una caseta pròpia.|Primera sesión de variables. El alumnado ya ha usado una variable en Tech Robot (el contador de Bit con pon, suma y resta), así que la sesión no vuelve a explicar qué es: parte de ahí y pasa a lo que es nuevo. En el escenario, cada variable tiene el nombre que se quiera y su valor se ve en el marcador mientras el programa funciona; un videojuego puede tener varias a la vez (puntos, errores, racha) y en cada bloque hay que elegir cuál cambia; y las variables pueden bajar por debajo de cero, algo que habrá que controlar. La clase empieza con la caseta de la Feria de Otoño, hace un marcador de tres variables con una papelera y termina con cuatro retos y una caseta propia.",
    claus: [
      "És el comptador d'en Bit amb nom propi: «posa» canvia el valor i «suma» hi afegeix; el valor es veu al marcador de l'escenari.|Es el contador de Bit con nombre propio: «pon» cambia el valor y «suma» le añade; el valor se ve en el marcador del escenario.",
      "Un programa pot tenir diverses variables; a cada bloc de variable es tria quina canvia.|Un programa puede tener varias variables; en cada bloque de variable se elige cuál cambia.",
      "Cada variable té les seves regles: els punts se sumen, els errors també i la ratxa es posa a 0 quan falles.|Cada variable tiene sus reglas: los puntos se suman, los errores también y la racha se pone a 0 cuando fallas.",
      "Sumar un número negatiu resta, i el valor pot quedar per sota de zero (1 - 3 = -2).|Sumar un número negativo resta, y el valor puede quedar por debajo de cero (1 - 3 = -2).",
      "Cada variable es posa al seu valor inicial a «Quan comença», perquè cada partida comenci bé.|Cada variable se pone a su valor inicial en «Al empezar», para que cada partida empiece bien."
    ],
    prev: [
      "La variable de Tech Robot (unitat 6: el comptador) o, si no l'han fet, la targeta del marcador d'aquesta sessió.|La variable de Tech Robot (unidad 6: el contador) o, si no lo han hecho, la tarjeta del marcador de esta sesión.",
      "El «si toca…» dins del «per sempre» i els guions de toc i de tecla (unitats 3 i 5).|El «si toca…» dentro del «por siempre» y los guiones de toque y de tecla (unidades 3 y 5).",
      "Sumar i restar amb nombres enters, també negatius (matemàtiques de cicle superior).|Sumar y restar con números enteros, también negativos (matemáticas de ciclo superior)."
    ],
    faq: [
      ["Com tria un bloc quina variable canvia?|¿Cómo elige un bloque qué variable cambia?", "Toca el nom de la variable dins del bloc (per exemple, «punts»): surt la llista de variables del repte i en tries una.|Toca el nombre de la variable dentro del bloque (por ejemplo, «puntos»): sale la lista de variables del reto y eliges una."],
      ["Com resto punts? No hi ha cap bloc «resta».|¿Cómo resto puntos? No hay ningún bloque «resta».", "Amb el mateix «suma», escrivint un número negatiu: «suma a punts -3». Sumar -3 és el mateix que restar 3.|Con el mismo «suma», escribiendo un número negativo: «suma a puntos -3». Sumar -3 es lo mismo que restar 3."],
      ["Els punts poden ser negatius?|¿Los puntos pueden ser negativos?", "Sí: si restes més del que hi ha, la variable baixa de 0 (-1, -2…). Si al teu videojoc no ho vols, cal un «si» que ho controli; ho farem a la sessió 2.|Sí: si restas más de lo que hay, la variable baja de 0 (-1, -2…). Si en tu videojuego no lo quieres, hace falta un «si» que lo controle; lo haremos en la sesión 2."],
      ["Per què en Numi diu «punts» i no el número?|¿Por qué Numi dice «puntos» y no el número?", "Perquè has escrit la paraula. Toca el text del «digues» i tria el botó de la variable: llavors diu el número.|Porque has escrito la palabra. Toca el texto del «di» y elige el botón de la variable: entonces dice el número."],
      ["Per què la poma sumava molts punts de cop?|¿Por qué la manzana sumaba muchos puntos de golpe?", "Mentre toca el gat, el bucle pregunta 30 vegades cada segon i a cada volta suma 1. Per això, en sumar, la tornem a dalt.|Mientras toca al gato, el bucle pregunta 30 veces cada segundo y en cada vuelta suma 1. Por eso, al sumar, la devolvemos arriba."],
      ["Quan torno a començar, les variables tornen a 0?|¿Cuando vuelvo a empezar, las variables vuelven a 0?", "Només si el programa té «posa … a 0» en començar, una per a cada variable. Per això es posen a «Quan comença».|Solo si el programa tiene «pon … a 0» al empezar, uno para cada variable. Por eso se ponen en «Al empezar»."]
    ],
    tec: [
      ["El marcador de la variable no surt a l'escenari.|El marcador de la variable no sale en el escenario.", "Surt a dalt a l'esquerra quan el repte té variables. Si no es veu, toqueu el botó de tornar a començar (la fletxa rodona) o feu la finestra més gran.|Sale arriba a la izquierda cuando el reto tiene variables. Si no se ve, tocad el botón de volver a empezar (la flecha redonda) o haced la ventana más grande."],
      ["En tocar el nom de la variable, només surt «punts».|Al tocar el nombre de la variable, solo sale «puntos».", "En aquell repte només hi ha una variable. Al de l'estrella i el meteorit n'hi ha dues: punts i errors.|En ese reto solo hay una variable. En el de la estrella y el meteorito hay dos: puntos y errores."],
      ["Per escriure un número negatiu (-3) no troben el signe menys.|Para escribir un número negativo (-3) no encuentran el signo menos.", "A l'ordinador és la tecla del guionet (-), abans del número. Si el teclat de la tauleta o del mòbil no el mostra, feu aquell repte a l'ordinador.|En el ordenador es la tecla del guion (-), antes del número. Si el teclado de la tableta o del móvil no lo muestra, haced ese reto en el ordenador."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No hi ha prou paperera per a tots els grups.|No hay suficientes papeleras para todos los grupos.", "Qualsevol capsa, cubell o cercle de cinta a terra serveix. Les boles, de paper reciclat.|Cualquier caja, cubo o círculo de cinta en el suelo sirve. Las bolas, de papel reciclado."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Paperera: es llancen boles de paper toves, des d'una línia i quan no hi ha ningú a davant; els papers roten perquè tothom llanci i tothom porti el marcador.|Papelera: se lanzan bolas de papel blandas, desde una línea y cuando no hay nadie delante; los papeles rotan para que todos lancen y todos lleven el marcador."
    ],
    extra: [
      "Afegir a la caseta dels globus una segona variable (errors) amb un objecte que no s'ha de tocar.|Añadir a la caseta de los globos una segunda variable (errores) con un objeto que no hay que tocar.",
      "Fer que la moneda tingui una ratxa: cada toc suma 1 a ratxa i, si toques el meteorit, posa ratxa a 0.|Hacer que la moneda tenga una racha: cada toque suma 1 a racha y, si tocas el meteorito, pon racha a 0.",
      "Buscar al pati o a casa tres marcadors amb diverses variables (un partit, un videojoc, una app d'esport) i apuntar-ne les variables.|Buscar en el patio o en casa tres marcadores con varias variables (un partido, un videojuego, una app de deporte) y apuntar sus variables."
    ],
    trans: [
      "Ve de Tech Robot (el comptador d'en Bit) i de la unitat 5: les regles «si toca…» ara també sumen punts.|Viene de Tech Robot (el contador de Bit) y de la unidad 5: las reglas «si toca…» ahora también suman puntos.",
      "Sessió següent: les vides, una variable que baixa, comparada amb «vides = 0» per acabar la partida.|Sesión siguiente: las vidas, una variable que baja, comparada con «vidas = 0» para acabar la partida.",
      "Matemàtiques: sumes i restes encadenades amb nombres enters, també per sota de zero.|Matemáticas: sumas y restas encadenadas con números enteros, también por debajo de cero."
    ],
    obj: [
      "L'alumne/a relaciona el comptador d'en Bit amb les variables de l'escenari i en llegeix el valor al marcador.|El alumno/a relaciona el contador de Bit con las variables del escenario y lee su valor en el marcador.",
      "L'alumne/a fa servir diverses variables en un mateix programa i tria a cada bloc quina canvia.|El alumno/a usa varias variables en un mismo programa y elige en cada bloque cuál cambia.",
      "L'alumne/a resta amb «suma» i un número negatiu i prediu valors per sota de zero.|El alumno/a resta con «suma» y un número negativo y predice valores por debajo de cero.",
      "L'alumne/a fa que un personatge digui el valor d'una variable en lloc d'un text fix.|El alumno/a hace que un personaje diga el valor de una variable en lugar de un texto fijo."
    ],
    comp: [
      "Competència digital (CD5): crear programes amb blocs que guarden i mostren diverses dades|Competencia digital (CD5): crear programas con bloques que guardan y muestran varios datos",
      "Pensament computacional: variables, assignació, increment i inicialització|Pensamiento computacional: variables, asignación, incremento e inicialización",
      "Matemàtiques: sumes i restes amb nombres enters i valors negatius|Matemáticas: sumas y restas con números enteros y valores negativos",
      "Comunicació oral: predir i justificar el valor final de cada variable|Comunicación oral: predecir y justificar el valor final de cada variable"
    ],
    vocab: [
      ["Variable|Variable", "Un número amb nom que el programa recorda i pot canviar (el comptador d'en Bit).|Un número con nombre que el programa recuerda y puede cambiar (el contador de Bit)."],
      ["Marcador|Marcador", "El requadre de l'escenari que mostra el nom i el valor de cada variable.|El recuadro del escenario que muestra el nombre y el valor de cada variable."],
      ["Valor inicial|Valor inicial", "El número amb què comença una variable a «Quan comença» (punts 0, vides 3…).|El número con el que empieza una variable en «Al empezar» (puntos 0, vidas 3…)."],
      ["Ratxa|Racha", "Una variable que compta encerts seguits i torna a 0 quan falles.|Una variable que cuenta aciertos seguidos y vuelve a 0 cuando fallas."],
      ["Número negatiu|Número negativo", "Un valor per sota de zero: 1 - 3 = -2.|Un valor por debajo de cero: 1 - 3 = -2."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El marcador de la fira»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El marcador de la feria»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 4: una paperera o capsa, 10 boles de paper i una pissarreta o full plastificat amb retolador|Por grupo de 4: una papelera o caja, 10 bolas de papel y una pizarrita u hoja plastificada con rotulador"
      ],
      imprimir: ["Full del marcador de tres variables|Hoja del marcador de tres variables", "Fitxa: quant val cada variable?|Ficha: ¿cuánto vale cada variable?"],
      prep: [
        "El dia abans (10 min): imprimir un full del marcador per grup i la fitxa (una per parella), i fer 10 boles de paper per grup.|El día antes (10 min): imprimir una hoja del marcador por grupo y la ficha (una por pareja), y hacer 10 bolas de papel por grupo.",
        "El dia abans (10 min): provar el repte de l'estrella i el meteorit, el primer amb dues variables, per saber com es tria «errors».|El día antes (10 min): probar el reto de la estrella y el meteorito, el primero con dos variables, para saber cómo se elige «errores».",
        "Abans de classe (5 min): marcar a terra una línia de llançament per grup a uns 2 metres de la paperera.|Antes de clase (5 min): marcar en el suelo una línea de lanzamiento por grupo a unos 2 metros de la papelera.",
        "Abans de classe (5 min): obrir la presentació, provar les demos i deixar la sessió iniciada als ordinadors.|Antes de clase (5 min): abrir la presentación, probar las demos y dejar la sesión iniciada en los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la Fira de Tardor|Bienvenida: la Feria de Otoño", fase: 'inici',
        fa: "Presenta la unitat: la classe prepara la caseta de videojocs de la Fira de Tardor del poble. Pregunta quins números es veuen a la pantalla d'un videojoc mentre el fas servir (punts, vides, temps, nivell). Recorda en un minut el comptador d'en Bit.|Presenta la unidad: la clase prepara la caseta de videojuegos de la Feria de Otoño del pueblo. Pregunta qué números se ven en la pantalla de un videojuego mientras lo usas (puntos, vidas, tiempo, nivel). Recuerda en un minuto el contador de Bit.",
        diu: [
          "Quins números veieu a la pantalla d'un videojoc? (punts, vides, temps, nivell…)|¿Qué números veis en la pantalla de un videojuego? (puntos, vidas, tiempo, nivel…)",
          "En Bit tenia un comptador. Qui recorda com se sumava i com es tornava a 0?|Bit tenía un contador. ¿Quién recuerda cómo se sumaba y cómo se volvía a 0?",
          "Avui farem un marcador amb diverses variables alhora, com els de debò.|Hoy haremos un marcador con varias variables a la vez, como los de verdad."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Del comptador al marcador|Del contador al marcador", fase: 'teoria',
        fa: "Mostra la moneda i el marcador que s'actualitza sol: és el comptador d'en Bit, però amb nom i a la vista. Passa a l'animació de les tres variables i, abans de cada encert o error, demana els tres valors nous. Mostra la demo de punts i errors i, per acabar, el meteorit que resta 3 i deixa els punts en negatiu.|Muestra la moneda y el marcador que se actualiza solo: es el contador de Bit, pero con nombre y a la vista. Pasa a la animación de las tres variables y, antes de cada acierto o error, pide los tres valores nuevos. Muestra la demo de puntos y errores y, para terminar, el meteorito que resta 3 y deja los puntos en negativo.",
        diu: ["Punts 4, errors 0, ratxa 2. Ara falla: com queda el marcador? (4, 1, 0)|Puntos 4, errores 0, racha 2. Ahora falla: ¿cómo queda el marcador? (4, 1, 0)",
          "Per què la ratxa es «posa» a 0 i no se li «suma»?|¿Por qué la racha se «pone» a 0 y no se le «suma»?",
          "Punts val 4 i el meteorit resta 3. I si el toco dues vegades? (1 i després -2)|Puntos vale 4 y el meteorito resta 3. ¿Y si lo toco dos veces? (1 y después -2)",
          "Volem punts negatius al nostre videojoc? Com ho podríem evitar? (amb un «si»)|¿Queremos puntos negativos en nuestro videojuego? ¿Cómo lo podríamos evitar? (con un «si»)"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Tres variables i una paperera|Tres variables y una papelera", fase: 'desconnectat',
        fa: "Grups de 4: llançador/a, marcador/a (porta el full del marcador), àrbitre/a (diu si ha entrat) i predictor/a (abans de cada llançament diu com quedarà el marcador si entra i si falla). Regles: si entra, punts +2 i ratxa +1; si falla, errors +1 i ratxa a 0. Cada 5 llançaments, roten els papers. Als últims 4 minuts, fan la fitxa per parelles i en comproveu una a la pissarra.|Grupos de 4: lanzador/a, marcador/a (lleva la hoja del marcador), árbitro/a (dice si ha entrado) y predictor/a (antes de cada lanzamiento dice cómo quedará el marcador si entra y si falla). Reglas: si entra, puntos +2 y racha +1; si falla, errores +1 y racha a 0. Cada 5 lanzamientos, rotan los papeles. En los últimos 4 minutos, hacen la ficha por parejas y comprobáis una en la pizarra.",
        diu: [
          "Predictor/a: si entra, com queda el marcador? I si falla?|Predictor/a: si entra, ¿cómo queda el marcador? ¿Y si falla?",
          "Quina variable no se suma mai, sinó que es posa a 0? (la ratxa, quan falles)|¿Qué variable no se suma nunca, sino que se pone a 0? (la racha, cuando fallas)",
          "Quina ha estat la ratxa més llarga del grup? On es veu?|¿Cuál ha sido la racha más larga del grupo? ¿Dónde se ve?",
          "Per a la partida nova, què feu primer? (posar les tres variables a 0)|Para la partida nueva, ¿qué hacéis primero? (poner las tres variables a 0)"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins al pas «Investiga». A «Tres variables i una paperera», que toquin «Ho hem fet!». A la pregunta de predir, que diguin el valor després de cada bloc en veu baixa. A «Investiga», que expliquin per què el meteorit fa pujar els punts.|Cada alumno/a avanza a su ritmo hasta el paso «Investiga». En «Tres variables y una papelera», que toquen «¡Lo hemos hecho!». En la pregunta de predecir, que digan el valor después de cada bloque en voz baja. En «Investiga», que expliquen por qué el meteorito hace subir los puntos.",
        diu: [
          "Quant val punts al final del guió de la pregunta? (9: el «posa a 10» esborra el 4)|¿Cuánto vale puntos al final del guion de la pregunta? (9: el «pon a 10» borra el 4)",
          "A «Investiga»: quina variable canvia el bloc del meteorit? I quina hauria de canviar?|En «Investiga»: ¿qué variable cambia el bloque del meteorito? ¿Y cuál tendría que cambiar?",
          "Com es tria la variable d'un bloc? (tocant-ne el nom)|¿Cómo se elige la variable de un bloque? (tocando su nombre)"
        ],
        slides: ['s12'], app: "De «La missió» a «Investiga»: la pregunta de la poma, les dues històries, les cinc targetes de «Descobreix», «Tres variables i una paperera» (ja fet), ordenar la partida de la moneda, quant val punts, quin bloc diu el número i el meteorit que suma a la variable equivocada.|De «La misión» a «Investiga»: la pregunta de la manzana, las dos historias, las cinco tarjetas de «Descubre», «Tres variables y una papelera» (ya hecho), ordenar la partida de la moneda, cuánto vale puntos, qué bloque dice el número y el meteorito que suma a la variable equivocada.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: el marcador de la caseta|Retos: el marcador de la caseta", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els quatre reptes. Recorda'ls que els reptes amb tocs o tecles es proven lliurement amb «Comença» i es comproven amb «Comprova». Al de l'estrella i el meteorit, que calculin abans el resultat esperat (3 - 2 + 1 = 2 punts i 1 error).|Haced la pausa activa todos juntos. Después, los cuatro retos. Recuérdales que los retos con toques o teclas se prueban libremente con «Empieza» y se comprueban con «Comprueba». En el de la estrella y el meteorito, que calculen antes el resultado esperado (3 - 2 + 1 = 2 puntos y 1 error).",
        diu: [
          "Quan toques la moneda, quin guió s'executa? (quan toco aquest personatge)|Cuando tocas la moneda, ¿qué guion se ejecuta? (al tocar este personaje)",
          "Per què la poma ha de tornar a dalt després de sumar? (si no, suma a cada volta mentre toca el gat)|¿Por qué la manzana tiene que volver arriba después de sumar? (si no, suma en cada vuelta mientras toca al gato)",
          "El meteorit: quants blocs de variable necessita? (dos: errors +1 i punts -2)|El meteorito: ¿cuántos bloques de variable necesita? (dos: errores +1 y puntos -2)",
          "Si l'estrella es toca 3 vegades i el meteorit 1, quins punts surten? I si el meteorit es toqués primer?|Si la estrella se toca 3 veces y el meteorito 1, ¿qué puntos salen? ¿Y si el meteorito se tocara primero?"
        ],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: la moneda de la sort, la poma i el gat, el comptador de salts, i l'estrella i el meteorit amb dues variables.|«Pausa activa» y los cuatro retos: la moneda de la suerte, la manzana y el gato, el contador de saltos, y la estrella y el meteorito con dos variables.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la caseta dels globus|Crea: la caseta de los globos", fase: 'crea',
        fa: "Cada alumne/a fa la seva caseta amb els tres criteris. Qui acabi, la passa a un company/a perquè hi faci punts i comprovi que en Numi diu el número bo; qui vulgui, hi afegeix una segona variable.|Cada alumno/a hace su caseta con los tres criterios. Quien termine, la pasa a un compañero/a para que haga puntos y compruebe que Numi dice el número correcto; quien quiera, añade una segunda variable.",
        diu: [
          "On va el «posa punts a 0»? Per què? (a «quan comença», perquè cada partida comenci de zero)|¿Dónde va el «pon puntos a 0»? ¿Por qué? (en «al empezar», para que cada partida empiece de cero)",
          "El teu company/a ha fet 4 punts. Què ha de dir en Numi? (4)|Tu compañero/a ha hecho 4 puntos. ¿Qué tiene que decir Numi? (4)",
          "Quina segona variable podria tenir la teva caseta?|¿Qué segunda variable podría tener tu caseta?"
        ],
        slides: ['s14'], app: "Pas «Crea»: La caseta dels globus (es desa a «Projectes»).|Paso «Crea»: La caseta de los globos (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
        diu: [
          "Quantes variables necessita un videojoc amb punts, errors i ratxa? (tres)|¿Cuántas variables necesita un videojuego con puntos, errores y racha? (tres)",
          "Punts val 1 i fas «suma a punts -3». Quant val? (-2)|Puntos vale 1 y haces «suma a puntos -3». ¿Cuánto vale? (-2)",
          "La setmana vinent: vides que baixen i una partida que s'acaba quan arriben a 0.|La semana que viene: vidas que bajan y una partida que se acaba cuando llegan a 0."
        ],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa sumar al meteorit la variable equivocada (punts en lloc d'errors).|Hace sumar al meteorito la variable equivocada (puntos en lugar de errores).",
        "Que llegeixi en veu alta el bloc sencer: «suma a … 1». Quina variable diu? Que en toqui el nom i triï la bona.|Que lea en voz alta el bloque entero: «suma a … 1». ¿Qué variable dice? Que toque su nombre y elija la buena."],
      ["Fa servir «posa punts a 1» quan vol sumar, i el marcador sempre diu 1.|Usa «pon puntos a 1» cuando quiere sumar, y el marcador siempre dice 1.",
        "Recorda el comptador d'en Bit i la ratxa de la paperera: quan es posa i quan se suma? Què hi ha després del segon toc?|Recuerda el contador de Bit y la racha de la papelera: ¿cuándo se pone y cuándo se suma? ¿Qué hay después del segundo toque?"],
      ["Calcula malament quan el valor passa per sota de zero (1 - 3 = 2).|Calcula mal cuando el valor pasa por debajo de cero (1 - 3 = 2).",
        "Que ho faci en una recta numèrica: des de l'1, tres salts cap a l'esquerra. On arriba? (-2)|Que lo haga en una recta numérica: desde el 1, tres saltos hacia la izquierda. ¿Dónde llega? (-2)"],
      ["Al «digues», escriu la paraula «punts» i el personatge diu «punts» en lloc del número.|En el «di», escribe la palabra «puntos» y el personaje dice «puntos» en lugar del número.",
        "Pregunta-li què vol que digui: la paraula o el valor? Que miri les opcions de sota quan toca el text.|Pregúntale qué quiere que diga: ¿la palabra o el valor? Que mire las opciones de debajo al tocar el texto."],
      ["Al repte de la poma, suma molts punts de cop perquè no la torna a dalt.|En el reto de la manzana, suma muchos puntos de golpe porque no la devuelve arriba.",
        "Que miri la poma a poc a poc: quantes voltes del «per sempre» està tocant el gat? Què podria fer perquè només en toqui una?|Que mire la manzana despacio: ¿cuántas vueltas del «por siempre» está tocando al gato? ¿Qué podría hacer para que solo toque una?"],
      ["Posa «posa punts a 0» dins del «quan toco» i el marcador es queda a 0 o a 1.|Pone «pon puntos a 0» dentro del «al tocar» y el marcador se queda en 0 o en 1.", "Pregunta: quan vols que els punts tornin a 0, a cada toc o només en començar? Que el passi a un guió «quan comença».|Pregunta: ¿cuándo quieres que los puntos vuelvan a 0, en cada toque o solo al empezar? Que lo pase a un guion «al empezar»."]
    ],
    diff: {
      mes: "Afegir a la caseta dels globus una segona variable (errors) i una tercera (ratxa), amb les regles de la paperera. Pensar amb un company/a com es podria fer que els punts no baixin mai de 0.|Añadir a la caseta de los globos una segunda variable (errores) y una tercera (racha), con las reglas de la papelera. Pensar con un compañero/a cómo se podría hacer que los puntos no bajen nunca de 0.",
      menys: "Tenir el full del marcador al costat de l'ordinador i apuntar-hi els valors a cada toc. Començar pels reptes d'una sola variable i deixar el de l'estrella i el meteorit per al final, amb el càlcul fet abans en paper.|Tener la hoja del marcador al lado del ordenador y apuntar los valores en cada toque. Empezar por los retos de una sola variable y dejar el de la estrella y el meteorito para el final, con el cálculo hecho antes en papel."
    },
    aval: {
      ticket: ["Punts 4, errors 0, ratxa 2. Falles: com queda el marcador?|Puntos 4, errores 0, racha 2. Fallas: ¿cómo queda el marcador?",
        "Punts val 1. Què val després de «suma a punts -3»?|Puntos vale 1. ¿Qué vale después de «suma a puntos -3»?"],
      rubric: [
        ["Del comptador al marcador|Del contador al marcador", "Relaciona les variables de l'escenari amb el comptador d'en Bit i llegeix el marcador.|Relaciona las variables del escenario con el contador de Bit y lee el marcador.", "Fa servir les variables, però no les relaciona amb el marcador.|Usa las variables, pero no las relaciona con el marcador."],
        ["Diverses variables|Varias variables", "Fa servir dues o més variables i tria sempre la bona a cada bloc.|Usa dos o más variables y elige siempre la buena en cada bloque.", "Barreja les variables o en fa servir només una.|Mezcla las variables o usa solo una."],
        ["Restar i negatius|Restar y negativos", "Resta amb un número negatiu i prediu bé valors per sota de zero.|Resta con un número negativo y predice bien valores por debajo de cero.", "Resta, però s'equivoca en passar pel zero.|Resta, pero se equivoca al pasar por el cero."],
        [
          "Predir el valor|Predecir el valor",
          "Diu el valor de cada variable després de cada bloc d'un guió (posa, suma, suma negativa).|Dice el valor de cada variable después de cada bloque de un guion (pon, suma, suma negativa).",
          "Necessita el full del marcador o executar el programa per saber-ho.|Necesita la hoja del marcador o ejecutar el programa para saberlo."
        ]
      ]
    },
    casa: "A casa podeu fer «Tres variables i una paperera»: un full amb punts, errors i ratxa, i boles de paper. Si entra, punts +2 i ratxa +1; si falla, errors +1 i ratxa a 0. Qui fa la ratxa més llarga?|En casa podéis hacer «Tres variables y una papelera»: una hoja con puntos, errores y racha, y bolas de papel. Si entra, puntos +2 y racha +1; si falla, errores +1 y racha a 0. ¿Quién hace la racha más larga?",
    slides: [
      { id: 's1', k: 'portada', t: "El marcador de la fira|El marcador de la feria", x: "Unitat 6 · Variables. Preparem la caseta de videojocs de la Fira de Tardor!|Unidad 6 · Variables. ¡Preparamos la caseta de videojuegos de la Feria de Otoño!",
        nota: "Explica que en aquesta unitat tots els videojocs tindran punts, vides i temps, i que al final faran una mascota virtual.|Explica que en esta unidad todos los videojuegos tendrán puntos, vidas y tiempo, y que al final harán una mascota virtual." },
      { id: 's2', k: 'pregunta', t: "Quins números veus a la pantalla?|¿Qué números ves en la pantalla?", x: "En un videojoc, quins números canvien mentre el fas servir?|En un videojuego, ¿qué números cambian mientras lo usas?",
        nota: "Busca punts, vides, temps, nivell… Fes notar que n'hi ha diversos alhora i que cadascun té el seu nom.|Busca puntos, vidas, tiempo, nivel… Haz notar que hay varios a la vez y que cada uno tiene su nombre." },
      { id: 's3', k: 'repas', t: "Recordes el comptador d'en Bit?|¿Recuerdas el contador de Bit?", punts: ["«Posa a 0»: el comptador torna a començar.|«Pon a 0»: el contador vuelve a empezar.", "«Suma 1»: el número puja.|«Suma 1»: el número sube.", "Avui: diverses variables, amb nom, i a la vista.|Hoy: varias variables, con nombre, y a la vista."],
        nota: "Un minut: que ho expliqui algú que hagi fet Tech Robot. Qui no l'hagi fet ho entendrà amb la demo següent.|Un minuto: que lo explique alguien que haya hecho Tech Robot. Quien no lo haya hecho lo entenderá con la demo siguiente." },
      { id: 's4', k: 'media', t: "El marcador de l'escenari|El marcador del escenario", x: "Quan comença, punts a 0. Cada toc a la moneda: suma 1.|Al empezar, puntos a 0. Cada toque a la moneda: suma 1.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'moneda', art: 'moneda', x: 0, y: -10, size: 160 }], vars: ['punts'], input: clicks('moneda', [1, 2, 3, 4]) }, prog: '@moneda flag{ setv:punts,0 forever{ next wait:0.12 } } click{ chv:punts,1 sound:moneda }', varNames: VN, time: 5.5 },
        nota: "A la demo, la moneda es toca sola. Fes notar el marcador de dalt a l'esquerra: s'actualitza sol.|En la demo, la moneda se toca sola. Haz notar el marcador de arriba a la izquierda: se actualiza solo." },
      { id: 's5', k: 'anim', t: "Tres variables alhora|Tres variables a la vez", anim: 'g6board', x: "Encert: punts +2 i ratxa +1. Error: errors +1 i ratxa a 0.|Acierto: puntos +2 y racha +1. Error: errores +1 y racha a 0.",
        nota: "Para l'animació abans de cada encert o error i demana els tres valors nous.|Para la animación antes de cada acierto o error y pide los tres valores nuevos." },
      { id: 's6', k: 'media', t: "Punts i errors|Puntos y errores", x: "L'estrella suma a punts; el meteorit, a errors.|La estrella suma a puntos; el meteorito, a errores.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [{ id: 'estrella', art: 'estrella', x: -110, y: 10, size: 140 }, { id: 'meteorit', art: 'meteorit', x: 110, y: 10, size: 140 }], vars: ['punts', 'errors'], input: [...clicks('estrella', [.8, 1.6]), { t: 2.4, click: 'meteorit' }, { t: 3.2, click: 'estrella' }] },
          prog: '@estrella flag{ setv:punts,0 } click{ chv:punts,1 sound:moneda } @meteorit flag{ setv:errors,0 } click{ chv:errors,1 sound:xoc }', varNames: VN, time: 4.5 },
        nota: "Abans de cada toc, que diguin quina variable canviarà. Al final: punts 3, errors 1.|Antes de cada toque, que digan qué variable cambiará. Al final: puntos 3, errores 1." },
      { id: 's7', k: 'concepte', t: "Variables a tot arreu|Variables por todas partes", punts: ["Un partit: local 2, visitant 1, minut 34.|Un partido: local 2, visitante 1, minuto 34.", "Una app d'esport: passos, quilòmetres, minuts.|Una app de deporte: pasos, kilómetros, minutos.", "Un videojoc: punts, vides, nivell.|Un videojuego: puntos, vidas, nivel."],
        nota: "Per a cada exemple, pregunta quantes variables hi ha i quan canvia cadascuna.|Para cada ejemplo, pregunta cuántas variables hay y cuándo cambia cada una.", pic: "img/ment/dig.webp" },
      { id: 's8', k: 'media', t: "Digues el número|Di el número", x: "Al «digues» es pot triar la variable: es diu el número que hi ha a dins.|En el «di» se puede elegir la variable: se dice el número que hay dentro.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [{ id: 'estrella', art: 'estrella', x: 0, y: 0, size: 160 }], vars: ['punts'], input: clicks('estrella', [1, 2, 3]) }, prog: '@estrella click{ chv:punts,1 say:$punts,0.6 }', varNames: VN, time: 4.5 },
        nota: "Pregunta: què diria si haguéssim escrit la paraula «punts»?|Pregunta: ¿qué diría si hubiéramos escrito la palabra «puntos»?" },
      { id: 's9', k: 'media', t: "Per sota de zero|Por debajo de cero", x: "Punts comença a 4 i cada toc al meteorit resta 3: 1, -2, -5.|Puntos empieza en 4 y cada toque al meteorito resta 3: 1, -2, -5.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [{ id: 'meteorit', art: 'meteorit', x: 0, y: 0, size: 160 }], vars: ['punts'], input: clicks('meteorit', [1, 2, 3]) }, prog: '@meteorit flag{ setv:punts,4 } click{ chv:punts,-3 sound:xoc say:$punts,0.6 }', varNames: VN, time: 4.5 },
        nota: "Que facin el càlcul en una recta numèrica abans de cada toc. Pregunta si volen punts negatius al seu videojoc.|Que hagan el cálculo en una recta numérica antes de cada toque. Pregunta si quieren puntos negativos en su videojuego." },
      { id: 's10', k: 'activitat', t: "Tres variables i una paperera|Tres variables y una papelera", timer: 12, punts: ["Marcador: punts, errors i ratxa, tots a 0.|Marcador: puntos, errores y racha, todos a 0.", "Entra: punts +2 i ratxa +1.|Entra: puntos +2 y racha +1.", "Falla: errors +1 i ratxa a 0.|Falla: errores +1 y racha a 0.", "El predictor/a diu el marcador abans de cada llançament.|El predictor/a dice el marcador antes de cada lanzamiento."],
        nota: "Passeja pels grups i atura't quan algú falla: és on es veu si han entès que la ratxa es posa a 0.|Pasea por los grupos y detente cuando alguien falla: es donde se ve si han entendido que la racha se pone a 0." },
      { id: 's11', k: 'pregunta', t: "Quant val punts?|¿Cuánto vale puntos?", x: "Posa punts a 0 · suma 2 · suma 2 · posa punts a 10 · suma -1. Quant val?|Pon puntos a 0 · suma 2 · suma 2 · pon puntos a 10 · suma -1. ¿Cuánto vale?",
        nota: "Resposta: 9. Feu-ho junts a la pissarra abans de la fitxa. Qui ha dit 13 s'ha oblidat que «posa» esborra.|Respuesta: 9. Hacedlo juntos en la pizarra antes de la ficha. Quien ha dicho 13 se ha olvidado de que «pon» borra." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «El marcador de la fira».|Abre la sesión «El marcador de la feria».", "Fes «La missió», «Descobreix» i «Mans a l'obra».|Haz «La misión», «Descubre» y «Manos a la obra».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
        nota: "A «Investiga», demana que llegeixin en veu alta quina variable canvia cada bloc.|En «Investiga», pide que lean en voz alta qué variable cambia cada bloque." },
      { id: 's13', k: 'repte', t: "Reptes del marcador|Retos del marcador", timer: 10, punts: ["1. La moneda de la sort|1. La moneda de la suerte", "2. La poma i el gat|2. La manzana y el gato", "3. El comptador de salts|3. El contador de saltos", "4. L'estrella i el meteorit: dues variables|4. La estrella y el meteorito: dos variables"],
        nota: "Recorda: amb «Comença» proven ells; «Comprova» fa els tocs i les tecles sol i diu si el repte està superat.|Recuerda: con «Empieza» prueban ellos; «Comprueba» hace los toques y las teclas solo y dice si el reto está superado." },
      { id: 's14', k: 'activitat', t: "Crea: la caseta dels globus|Crea: la caseta de los globos", timer: 5, punts: ["Quan comença: punts a 0.|Al empezar: puntos a 0.", "Cada globus tocat: suma punts.|Cada globo tocado: suma puntos.", "En Numi diu quants punts portes.|Numi dice cuántos puntos llevas."],
        nota: "Celebra les casetes diferents i les que afegeixen una segona variable. Els criteris són els mateixos per a tothom.|Celebra las casetas diferentes y las que añaden una segunda variable. Los criterios son los mismos para todos." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Les variables tenen nom i es veuen al marcador.|Las variables tienen nombre y se ven en el marcador.", "Diverses variables: a cada bloc, tries quina.|Varias variables: en cada bloque, eliges cuál.", "Sumar un negatiu resta, i es pot baixar de zero.|Sumar un negativo resta, y se puede bajar de cero."],
        nota: "Torna a la pregunta del principi: quins números de la pantalla ja sabeu programar?|Vuelve a la pregunta del principio: ¿qué números de la pantalla ya sabéis programar?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Punts 4, errors 0, ratxa 2: falles. Com queda?|Puntos 4, errores 0, racha 2: fallas. ¿Cómo queda?", "Punts 1 i «suma -3»: quant val?|Puntos 1 y «suma -3»: ¿cuánto vale?"],
        nota: "Anota qui s'equivoca en passar pel zero: a la sessió 2 hi tornarem amb les vides.|Anota quién se equivoca al pasar por el cero: en la sesión 2 volveremos a ello con las vidas." }
    ],
    print: [
      { id: 'p1', t: "Full del marcador de tres variables|Hoja del marcador de tres variables", k: 'fitxa',
        intro: "Un full per grup. Abans de començar, les tres variables valen 0. Entra: punts +2 i ratxa +1. Falla: errors +1 i ratxa a 0.|Una hoja por grupo. Antes de empezar, las tres variables valen 0. Entra: puntos +2 y racha +1. Falla: errores +1 y racha a 0.",
        items: [
          { q: "Llançaments 1 a 5 · punts: ___ · errors: ___ · ratxa: ___|Lanzamientos 1 a 5 · puntos: ___ · errores: ___ · racha: ___", big: true, sol: "Resposta oberta: comproveu que punts = 2 × encerts i errors = llançaments fallats.|Respuesta abierta: comprobad que puntos = 2 × aciertos y errores = lanzamientos fallados." },
          { q: "Llançaments 6 a 10 · punts: ___ · errors: ___ · ratxa: ___|Lanzamientos 6 a 10 · puntos: ___ · errores: ___ · racha: ___", big: true, sol: "Resposta oberta: la ratxa torna a 0 a cada error.|Respuesta abierta: la racha vuelve a 0 con cada error." },
          { q: "Quina ha estat la ratxa més llarga? Per què el marcador final no la recorda?|¿Cuál ha sido la racha más larga? ¿Por qué el marcador final no la recuerda?", sol: "Perquè la ratxa es posa a 0 cada vegada que falles: per recordar la millor caldria una quarta variable (el rècord).|Porque la racha se pone a 0 cada vez que fallas: para recordar la mejor haría falta una cuarta variable (el récord)." }
        ] },
      { id: 'p2', t: "Fitxa: quant val cada variable?|Ficha: ¿cuánto vale cada variable?", k: 'fitxa',
        intro: "Segueix els blocs d'un en un i apunta el valor de cada variable després de cada bloc.|Sigue los bloques de uno en uno y apunta el valor de cada variable después de cada bloque.",
        items: [
          { q: "Posa punts a 5 · suma a punts -2 · suma a punts 4|Pon puntos a 5 · suma a puntos -2 · suma a puntos 4", sol: "5, 3, 7 → punts = 7|5, 3, 7 → puntos = 7" },
          { q: "Posa punts a 1 · suma a punts -3 · suma a punts -1|Pon puntos a 1 · suma a puntos -3 · suma a puntos -1", sol: "1, -2, -3 → punts = -3|1, -2, -3 → puntos = -3" },
          { q: "Posa punts a 0 · posa errors a 0 · suma a punts 2 · suma a errors 1 · suma a punts -2|Pon puntos a 0 · pon errores a 0 · suma a puntos 2 · suma a errores 1 · suma a puntos -2", sol: "punts = 0 i errors = 1|puntos = 0 y errores = 1" },
          { q: "El meteorit té «Quan toco: suma a punts 1» i hauria de comptar errors. Què passa quan el toques? Com l'arregles?|El meteorito tiene «Al tocar: suma a puntos 1» y debería contar errores. ¿Qué pasa cuando lo tocas? ¿Cómo lo arreglas?", sol: "Pugen els punts en lloc dels errors. Cal triar la variable «errors» al bloc.|Suben los puntos en lugar de los errores. Hay que elegir la variable «errores» en el bloque." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Vides i fi de partida ---------- */
  'g6-2': {
    intro: "Segona sessió de variables: les vides. Són una variable que comença a 3 i baixa 1 a cada xoc; després del xoc, el personatge espera una mica perquè un sol xoc no en tregui moltes. Per saber quan s'acaba la partida, una condició compara la variable amb un número (vides = 0) i, si és sí, «atura tot». L'alumnat també aprèn que el valor inicial va una sola vegada, abans del bucle. La classe alterna demos de la nau, una taula de vides en parella i quatre reptes, i acaba amb un videojoc propi del peix i les meduses.|Segunda sesión de variables: las vidas. Son una variable que empieza en 3 y baja 1 en cada choque; después del choque, el personaje espera un poco para que un solo choque no le quite muchas. Para saber cuándo se acaba la partida, una condición compara la variable con un número (vidas = 0) y, si es sí, «para todo». El alumnado también aprende que el valor inicial va una sola vez, antes del bucle. La clase alterna demos de la nave, una tabla de vidas por parejas y cuatro retos, y termina con un videojuego propio del pez y las medusas.",
    claus: [
      "Les vides són una variable: comencen a 3 i baixen 1 a cada xoc.|Las vidas son una variable: empiezan en 3 y bajan 1 en cada choque.",
      "Després d'un xoc cal esperar una mica: si no, mentre es toquen, en perd moltes.|Después de un choque hay que esperar un poco: si no, mientras se tocan, pierde muchas.",
      "Una comparació (=, >, <) és una condició: la resposta és sí o no.|Una comparación (=, >, <) es una condición: la respuesta es sí o no.",
      "«Posa vides a 3» va abans del bucle; dins, es tornaria a posar a cada volta.|«Pon vidas a 3» va antes del bucle; dentro, se volvería a poner en cada vuelta.",
      "«Atura tot» acaba la partida: para els guions de tots els personatges.|«Para todo» termina la partida: para los guiones de todos los personajes."
    ],
    prev: [
      "«Posa» i «suma» amb variables, i sumar -1 per restar (sessió anterior).|«Pon» y «suma» con variables, y sumar -1 para restar (sesión anterior).",
      "«Si toca…» dins del «per sempre» i «atura tot» (unitat 5).|«Si toca…» dentro del «por siempre» y «para todo» (unidad 5).",
      "Els signes =, > i < de matemàtiques.|Los signos =, > y < de matemáticas."
    ],
    faq: [
      ["Per què la nau perd totes les vides en un sol xoc?|¿Por qué la nave pierde todas las vidas en un solo choque?", "Perquè el meteorit la toca durant molts fotogrames i, a cada volta, en resta una. Amb «espera 1 segon» després del xoc, el meteorit ja ha passat.|Porque el meteorito la toca durante muchos fotogramas y, en cada vuelta, resta una. Con «espera 1 segundo» después del choque, el meteorito ya ha pasado."],
      ["Com sé si és > o <?|¿Cómo sé si es > o <?", "La boca oberta del signe mira sempre el número més gran: 5 > 3 i 3 < 5. Llegeix-ho en veu alta: «5 és més gran que 3».|La boca abierta del signo mira siempre al número más grande: 5 > 3 y 3 < 5. Léelo en voz alta: «5 es mayor que 3»."],
      ["On trobo la condició «vides = 0»?|¿Dónde encuentro la condición «vidas = 0»?", "En aquests reptes ja ve posada. Si en vols una de nova, toca la condició del «si» i tria «comparar números»; després toca cada part per canviar-la.|En estos retos ya viene puesta. Si quieres una nueva, toca la condición del «si» y elige «comparar números»; después toca cada parte para cambiarla."],
      ["Per què la partida no s'acaba mai?|¿Por qué la partida no se acaba nunca?", "Mira on és «posa vides a 3»: si és dins del «per sempre», les vides tornen a 3 a cada volta. Ha d'anar abans del bucle.|Mira dónde está «pon vidas a 3»: si está dentro del «por siempre», las vidas vuelven a 3 en cada vuelta. Tiene que ir antes del bucle."],
      ["Què vol dir «atura tot»?|¿Qué quiere decir «para todo»?", "Para tots els guions de tots els personatges: el meteorit, la nau, tot. És la manera d'acabar la partida.|Para todos los guiones de todos los personajes: el meteorito, la nave, todo. Es la manera de terminar la partida."],
      ["El cor em dona vides sense parar!|¡El corazón me da vidas sin parar!", "Mentre el toques, suma a cada volta. Fes que s'amagui després de sumar: amagat, ja no el pots tocar.|Mientras lo tocas, suma en cada vuelta. Haz que se esconda después de sumar: escondido, ya no lo puedes tocar."]
    ],
    tec: [
      ["El marcador de la variable no surt a l'escenari.|El marcador de la variable no sale en el escenario.", "Surt a dalt a l'esquerra quan el repte té variables. Si no es veu, toqueu el botó de tornar a començar (la fletxa rodona) o feu la finestra més gran.|Sale arriba a la izquierda cuando el reto tiene variables. Si no se ve, tocad el botón de volver a empezar (la flecha redonda) o haced la ventana más grande."],
      ["En tocar el text del «digues» no troben la variable.|Al tocar el texto del «di» no encuentran la variable.", "A la finestra que s'obre, sota el quadre per escriure, hi ha els botons de les variables del repte (punts, vides…). Cal tocar-ne un, no escriure'n el nom.|En la ventana que se abre, debajo del cuadro para escribir, están los botones de las variables del reto (puntos, vidas…). Hay que tocar uno, no escribir su nombre."],
      ["Per escriure un número negatiu (-1) no troben el signe menys.|Para escribir un número negativo (-1) no encuentran el signo menos.", "A l'ordinador és la tecla del guionet (-), abans del número. Si el teclat de la tauleta o del mòbil no el mostra, feu aquell repte a l'ordinador.|En el ordenador es la tecla del guion (-), antes del número. Si el teclado de la tableta o del móvil no lo muestra, haced ese reto en el ordenador."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["Al projecte del peix, les fletxes no el mouen.|En el proyecto del pez, las flechas no lo mueven.", "Cal fer els guions «quan premo la fletxa amunt / avall» amb «canvia y en 20 / -20». Amb «Comença» les prems tu; «Comprova» no les prem.|Hay que hacer los guiones «al pulsar la flecha arriba / abajo» con «cambia y en 20 / -20». Con «Empieza» las pulsas tú; «Comprueba» no las pulsa."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Pausa activa de la nau: ajupir-se sense empènyer i amb espai al voltant. Qui no es vulgui ajupir pot abaixar el cap.|Pausa activa de la nave: agacharse sin empujar y con espacio alrededor. Quien no se quiera agachar puede bajar la cabeza.",
      "«Perdre» forma part dels videojocs: si algú es frustra, recorda que es pot tornar a començar i que provar és aprendre.|«Perder» forma parte de los videojuegos: si alguien se frustra, recuerda que se puede volver a empezar y que probar es aprender."
    ],
    extra: [
      "Al videojoc del peix, afegir un cor que doni una vida extra i s'amagui en tocar-lo.|En el videojuego del pez, añadir un corazón que dé una vida extra y se esconda al tocarlo.",
      "Fer que el peix canviï de vestit quan li queda una sola vida (si vides = 1).|Hacer que el pez cambie de disfraz cuando le queda una sola vida (si vidas = 1).",
      "Inventar a la fitxa una partida on la nau agafi tants cors que no s'acabi mai, i explicar per què.|Inventar en la ficha una partida donde la nave coja tantos corazones que no se acabe nunca, y explicar por qué."
    ],
    trans: [
      "Ve de la sessió 1: el mateix «suma», ara amb -1 i una condició que compara.|Viene de la sesión 1: el mismo «suma», ahora con -1 y una condición que compara.",
      "Sessió següent: el temps com a variable, amb un compte enrere i el cronòmetre.|Sesión siguiente: el tiempo como variable, con una cuenta atrás y el cronómetro.",
      "Matemàtiques: comparar nombres amb =, > i <, i les taules per seguir un procés pas a pas.|Matemáticas: comparar números con =, > y <, y las tablas para seguir un proceso paso a paso."
    ],
    obj: [
      "L'alumne/a programa una variable de vides que comença a 3 i baixa 1 a cada xoc, amb una espera perquè cada xoc compti una sola vegada.|El alumno/a programa una variable de vidas que empieza en 3 y baja 1 en cada choque, con una espera para que cada choque cuente una sola vez.",
      "L'alumne/a llegeix i fa servir condicions que comparen una variable amb un número (=, > i <).|El alumno/a lee y usa condiciones que comparan una variable con un número (=, > y <).",
      "L'alumne/a fa la fi de la partida: quan vides = 0, un missatge i «atura tot».|El alumno/a hace el fin de la partida: cuando vidas = 0, un mensaje y «para todo».",
      "L'alumne/a troba i arregla l'error de posar el valor inicial dins del bucle.|El alumno/a encuentra y arregla el error de poner el valor inicial dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): programar regles d'un videojoc amb variables i condicions|Competencia digital (CD5): programar reglas de un videojuego con variables y condiciones",
      "Pensament computacional: valor inicial, comparacions i condició d'aturada|Pensamiento computacional: valor inicial, comparaciones y condición de parada",
      "Matemàtiques: els signes =, > i <, i el seguiment d'una quantitat que puja i baixa|Matemáticas: los signos =, > y <, y el seguimiento de una cantidad que sube y baja",
      "Aprendre a aprendre: depurar un programa observant què passa a cada volta del bucle|Aprender a aprender: depurar un programa observando qué pasa en cada vuelta del bucle"
    ],
    vocab: [
      ["Vides|Vidas", "La variable que diu quantes oportunitats queden.|La variable que dice cuántas oportunidades quedan."],
      ["Valor inicial|Valor inicial", "El número amb què comença una variable (vides a 3).|El número con el que empieza una variable (vidas a 3)."],
      ["Comparar|Comparar", "Mirar si un número és igual, més gran o més petit que un altre.|Mirar si un número es igual, mayor o menor que otro."],
      ["Fi de la partida|Fin de la partida", "El moment en què el videojoc s'acaba perquè ja no queden vides.|El momento en que el videojuego se acaba porque ya no quedan vidas."],
      ["Atura tot|Para todo", "El bloc que para tots els guions de tots els personatges.|El bloque que para todos los guiones de todos los personajes."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Vides i fi de partida»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Vidas y fin de partida»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i la fitxa «La taula de les vides» per parella|Lápiz y la ficha «La tabla de las vidas» por pareja"
      ],
      imprimir: ["Fitxa: la taula de les vides|Ficha: la tabla de las vidas"],
      prep: [
        "El dia abans (5 min): imprimir una fitxa «La taula de les vides» per parella.|El día antes (5 min): imprimir una ficha «La tabla de las vidas» por pareja.",
        "El dia abans (10 min): provar el repte de l'error: cal esborrar «posa vides a 3» de dins del bucle i posar-ne un de nou abans.|El día antes (10 min): probar el reto del error: hay que borrar «pon vidas a 3» de dentro del bucle y poner uno nuevo antes.",
        "Abans de classe (5 min): dibuixar a la pissarra una taula amb dues columnes: «què passa» i «vides».|Antes de clase (5 min): dibujar en la pizarra una tabla con dos columnas: «qué pasa» y «vidas».",
        "Abans de classe (5 min): obrir la presentació i deixar la sessió iniciada als ordinadors.|Antes de clase (5 min): abrir la presentación y dejar la sesión iniciada en los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la nau que no es trenca mai|Bienvenida: la nave que no se rompe nunca", fase: 'inici',
        fa: "Repassa «posa» i «suma» amb una pregunta ràpida. Explica la missió: el videojoc de l'espai no té vides i la partida no s'acaba mai. Pregunta quines regles necessita.|Repasa «pon» y «suma» con una pregunta rápida. Explica la misión: el videojuego del espacio no tiene vidas y la partida no se acaba nunca. Pregunta qué reglas necesita.",
        diu: [
          "Quin bloc fa que el marcador baixi 1? (suma a punts -1)|¿Qué bloque hace que el marcador baje 1? (suma a puntos -1)",
          "Si la nau no pot perdre mai, té gràcia el videojoc? (no: no hi ha emoció)|Si la nave no puede perder nunca, ¿tiene gracia el videojuego? (no: no hay emoción)",
          "Quines regles li falten? (tenir vides, perdre'n en xocar, acabar quan no en queden)|¿Qué reglas le faltan? (tener vidas, perder en los choques, terminar cuando no quedan)",
          "Apunto les vostres regles a la pissarra: les programarem avui.|Apunto vuestras reglas en la pizarra: las programaremos hoy."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vides, comparacions i fi de partida|Vidas, comparaciones y fin de partida", fase: 'teoria',
        fa: "Mostra l'animació dels cors i la demo de la nau. Pregunta per què la nau espera després del xoc. Presenta les comparacions amb exemples de la classe (quants sou? més de 20?) i el truc de la boca. Passa la demo de la fi de partida i acaba amb l'error de «posa vides a 3» dins del bucle.|Muestra la animación de los corazones y la demo de la nave. Pregunta por qué la nave espera después del choque. Presenta las comparaciones con ejemplos de la clase (¿cuántos sois? ¿más de 20?) y el truco de la boca. Pasa la demo del fin de partida y termina con el error de «pon vidas a 3» dentro del bucle.",
        diu: [
          "Mentre el meteorit travessa la nau, quantes vegades la toca? (moltes: un cop a cada fotograma)|Mientras el meteorito atraviesa la nave, ¿cuántas veces la toca? (muchas: una en cada fotograma)",
          "Som 22 a classe. «alumnes > 20» és sí o no? (sí)|Somos 22 en clase. «alumnos > 20», ¿es sí o no? (sí)",
          "Quan diu sí la condició «vides = 0»? (quan ja no queden vides)|¿Cuándo dice sí la condición «vidas = 0»? (cuando ya no quedan vidas)",
          "Quan la nau diu «Fi de la partida!», què fa el meteorit? (també s'atura: atura tot)|Cuando la nave dice «¡Fin de la partida!», ¿qué hace el meteorito? (también se para: para todo)",
          "Per què aquesta partida no s'acaba mai? (posa vides a 3 és dins del bucle)|¿Por qué esta partida no se acaba nunca? (pon vidas a 3 está dentro del bucle)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La taula de les vides|La tabla de las vidas", fase: 'desconnectat',
        fa: "Feu junts la primera partida de la fitxa a la pissarra: a cada fila, què passa i quantes vides queden. Després, per parelles, completen les altres partides, encerclen la fila on vides = 0 i responen les comparacions. Als últims minuts, cada parella inventa una partida curta perquè la resolgui la parella del costat.|Haced juntos la primera partida de la ficha en la pizarra: en cada fila, qué pasa y cuántas vidas quedan. Después, por parejas, completan las otras partidas, rodean la fila donde vidas = 0 y responden las comparaciones. En los últimos minutos, cada pareja inventa una partida corta para que la resuelva la pareja de al lado.",
        diu: [
          "Després d'aquest xoc, quantes vides queden?|Después de este choque, ¿cuántas vidas quedan?",
          "En quina fila s'acaba la partida? Per què les files de sota ja no compten? (atura tot)|¿En qué fila se acaba la partida? ¿Por qué las filas de debajo ya no cuentan? (para todo)",
          "vides > 0: sí o no? Què vol dir? (que encara en queden)|vidas > 0: ¿sí o no? ¿Qué quiere decir? (que aún quedan)",
          "La partida que heu inventat s'acaba? En quina fila?|¿La partida que habéis inventado se acaba? ¿En qué fila?"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al pas «Investiga». Al pas d'ordenar el guió, fixa't que posin «posa vides a 3» abans del «per sempre». A «Les tres vides», que toquin «Ho hem fet!» si ja han fet la taula.|Cada alumno/a avanza hasta el paso «Investiga». En el paso de ordenar el guion, fíjate en que pongan «pon vidas a 3» antes del «por siempre». En «Las tres vidas», que toquen «¡Lo hemos hecho!» si ya han hecho la tabla.",
        diu: [
          "Aquest bloc, es fa una vegada o a cada volta?|Este bloque, ¿se hace una vez o en cada vuelta?",
          "3 vides, xoc, cor, xoc, xoc: quantes en queden? (1)|3 vidas, choque, corazón, choque, choque: ¿cuántas quedan? (1)",
          "A Investiga: al començament, quant valen les vides? Què diu la condició? (3, i «vides = 3» ja és sí)|En Investiga: al principio, ¿cuánto valen las vidas? ¿Qué dice la condición? (3, y «vidas = 3» ya es sí)"
        ],
        slides: ['s12'], app: "De «La missió» a «Investiga»: les dues preguntes de repàs, la història, les targetes de «Descobreix», «Les tres vides», ordenar el guió de la nau, les dues preguntes de vides i la partida que s'acaba abans de començar.|De «La misión» a «Investiga»: las dos preguntas de repaso, la historia, las tarjetas de «Descubre», «Las tres vidas», ordenar el guion de la nave, las dos preguntas de vidas y la partida que se acaba antes de empezar.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: vides i fi de partida|Retos: vidas y fin de partida", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts i deixa'ls fer els quatre reptes. Explica que el primer repte té dues proves amb temps diferents: el programa ha de funcionar a les dues. Al de la fi de partida, el «si vides = 0» ja hi és: només n'han d'omplir l'interior.|Haced la pausa activa todos juntos y deja que hagan los cuatro retos. Explica que el primer reto tiene dos pruebas con tiempos diferentes: el programa tiene que funcionar en las dos. En el del fin de partida, el «si vidas = 0» ya está: solo tienen que rellenar su interior.",
        diu: [
          "Mira el marcador: quantes vides perd la nau en un sol xoc? (una, si hi ha l'espera)|Mira el marcador: ¿cuántas vidas pierde la nave en un solo choque? (una, si está la espera)",
          "Què va dins del «si vides = 0»? (digues «Fi de la partida!» i atura tot)|¿Qué va dentro del «si vidas = 0»? (di «¡Fin de la partida!» y para todo)",
          "Què passa amb el cor quan ja l'has agafat? Per què s'amaga? (perquè no doni més vides)|¿Qué pasa con el corazón cuando ya lo has cogido? ¿Por qué se esconde? (para que no dé más vidas)",
          "On és «posa vides a 3» al programa que no s'acaba mai? (dins del bucle)|¿Dónde está «pon vidas a 3» en el programa que no se acaba nunca? (dentro del bucle)"
        ],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: tres vides, la fi de la partida, la vida extra i la partida que no s'acaba mai.|«Pausa activa» y los cuatro retos: tres vidas, el fin de la partida, la vida extra y la partida que no se acaba nunca.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el peix i les meduses|Crea: el pez y las medusas", fase: 'crea',
        fa: "Cada alumne/a construeix el videojoc amb les vides. Qui acabi, hi afegeix les fletxes ↑ i ↓ i el passa a un company/a perquè intenti esquivar les meduses.|Cada alumno/a construye el videojuego con las vidas. Quien termine, añade las flechas ↑ y ↓ y lo pasa a un compañero/a para que intente esquivar las medusas.",
        diu: [
          "Quins tres trossos té el guió del peix? (vides a 3, xoc i espera, vides = 0)|¿Qué tres trozos tiene el guion del pez? (vidas a 3, choque y espera, vidas = 0)",
          "El teu company/a ha pogut esquivar la medusa? Quantes vides li han quedat?|¿Tu compañero/a ha podido esquivar la medusa? ¿Cuántas vidas le han quedado?",
          "És massa fàcil o massa difícil? Què podries canviar? (la velocitat, les vides inicials…)|¿Es demasiado fácil o demasiado difícil? ¿Qué podrías cambiar? (la velocidad, las vidas iniciales…)"
        ],
        slides: ['s14'], app: "Pas «Crea»: El peix i les meduses (es desa a «Projectes»).|Paso «Crea»: El pez y las medusas (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: [
          "Per què la nau espera 1 segon després de cada xoc? (perquè el meteorit no li tregui més vides)|¿Por qué la nave espera 1 segundo después de cada choque? (para que el meteorito no le quite más vidas)",
          "On va «posa vides a 3»? (abans del bucle)|¿Dónde va «pon vidas a 3»? (antes del bucle)",
          "Quines regles de la pissarra ja hem programat?|¿Qué reglas de la pizarra ya hemos programado?"
        ],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["No posa cap espera després del xoc i la nau perd totes les vides de cop.|No pone ninguna espera después del choque y la nave pierde todas las vidas de golpe.",
        "Que miri el marcador mentre el meteorit travessa la nau: quantes vides perd? Quant de temps la toca? Què podria fer la nau mentrestant?|Que mire el marcador mientras el meteorito atraviesa la nave: ¿cuántas vidas pierde? ¿Cuánto tiempo la toca? ¿Qué podría hacer la nave mientras tanto?"],
      ["Posa «posa vides a 3» dins del «per sempre» i la partida no s'acaba mai.|Pone «pon vidas a 3» dentro del «por siempre» y la partida no se acaba nunca.",
        "Pregunta: aquest bloc, quantes vegades s'ha de fer? Que segueixi el bucle amb el dit i digui el valor de vides a cada volta.|Pregunta: este bloque, ¿cuántas veces se tiene que hacer? Que siga el bucle con el dedo y diga el valor de vidas en cada vuelta."],
      ["Confon els signes > i <.|Confunde los signos > y <.",
        "Recorda-li el truc: la boca oberta mira el número més gran. Que llegeixi la condició en veu alta amb números de veritat: 5 > 3?|Recuérdale el truco: la boca abierta mira al número más grande. Que lea la condición en voz alta con números de verdad: ¿5 > 3?"],
      ["Posa el «digues Fi de la partida!» fora del «si vides = 0», i ho diu de seguida.|Pone el «di ¡Fin de la partida!» fuera del «si vidas = 0», y lo dice enseguida.",
        "Pregunta-li quan ha de passar el missatge: sempre o només quan no queden vides? Que miri on és el bloc respecte del «si».|Pregúntale cuándo tiene que pasar el mensaje: ¿siempre o solo cuando no quedan vidas? Que mire dónde está el bloque respecto del «si»."],
      ["Al repte del cor, el cor dona vides sense parar.|En el reto del corazón, el corazón da vidas sin parar.",
        "Pregunta: després d'agafar-lo, el cor continua tocant la nau? Què podria fer perquè ja no la toqui?|Pregunta: después de cogerlo, ¿el corazón sigue tocando la nave? ¿Qué podría hacer para que ya no la toque?"],
      ["Al peix, posa l'espera fora del «si toca la medusa» i el peix va lent tota l'estona.|En el pez, pone la espera fuera del «si toca la medusa» y el pez va lento todo el rato.", "Pregunta: quan ha d'esperar el peix, sempre o només després d'un xoc? Que posi l'espera dins del «si», just després de restar la vida.|Pregunta: ¿cuándo tiene que esperar el pez, siempre o solo después de un choque? Que ponga la espera dentro del «si», justo después de restar la vida."]
    ],
    diff: {
      mes: "Al videojoc del peix, afegir un cor que doni una vida extra i fer que el peix canviï de vestit quan perd una vida. Inventar a la fitxa una partida on la nau agafi tants cors que no s'acabi mai, i explicar per què.|En el videojuego del pez, añadir un corazón que dé una vida extra y hacer que el pez cambie de disfraz cuando pierde una vida. Inventar en la ficha una partida en la que la nave coja tantos corazones que no se acabe nunca, y explicar por qué.",
      menys: "Fer la taula de les vides amb tres cors de paper damunt la taula, traient-ne un a cada xoc. A l'app, començar pel repte de les tres vides i deixar la fi de partida per quan el primer funcioni.|Hacer la tabla de las vidas con tres corazones de papel sobre la mesa, quitando uno en cada choque. En la app, empezar por el reto de las tres vidas y dejar el fin de partida para cuando el primero funcione."
    },
    aval: {
      ticket: ["La nau té 3 vides i xoca dues vegades. Quantes en queden? Què diu «vides = 0»?|La nave tiene 3 vidas y choca dos veces. ¿Cuántas quedan? ¿Qué dice «vidas = 0»?",
        "On va «posa vides a 3»: abans del bucle o a dins? Per què?|¿Dónde va «pon vidas a 3»: antes del bucle o dentro? ¿Por qué?"],
      rubric: [
        ["Vides que baixen|Vidas que bajan", "Fa que cada xoc resti una sola vida i explica per què cal l'espera.|Hace que cada choque reste una sola vida y explica por qué hace falta la espera.", "Resta vides, però de vegades en perd més d'una per xoc.|Resta vidas, pero a veces pierde más de una por choque."],
        ["Comparacions|Comparaciones", "Llegeix i respon bé condicions amb =, > i < amb números concrets.|Lee y responde bien condiciones con =, > y < con números concretos.", "Entén el = però confon encara > i <.|Entiende el = pero confunde todavía > y <."],
        ["Fi de la partida|Fin de la partida", "Programa la fi de la partida i posa el valor inicial fora del bucle.|Programa el fin de la partida y pone el valor inicial fuera del bucle.", "Programa la fi de la partida amb ajuda o amb el valor inicial dins del bucle.|Programa el fin de la partida con ayuda o con el valor inicial dentro del bucle."],
        [
          "Seguir una partida|Seguir una partida",
          "Completa la taula de les vides i troba la fila on s'acaba la partida.|Completa la tabla de las vidas y encuentra la fila donde se acaba la partida.",
          "Calcula les vides, però no sap on s'acaba la partida.|Calcula las vidas, pero no sabe dónde se acaba la partida."
        ]
      ]
    },
    casa: "A casa podeu fer «Les tres vides»: una persona és la nau amb tres cors de paper i l'altra llança un mitjó enrotllat, a poc a poc. A cada xoc, un cor menys; a 0, «Fi de la partida!».|En casa podéis hacer «Las tres vidas»: una persona es la nave con tres corazones de papel y la otra lanza un calcetín enrollado, despacio. En cada choque, un corazón menos; en 0, «¡Fin de la partida!».",
    slides: [
      { id: 's1', k: 'portada', t: "Vides i fi de partida|Vidas y fin de partida", x: "Unitat 6 · Sessió 2. Avui la nau tindrà tres vides.|Unidad 6 · Sesión 2. Hoy la nave tendrá tres vidas.",
        nota: "Explica que avui els videojocs ja es podran perdre: és el que els dona emoció.|Explica que hoy los videojuegos ya se podrán perder: es lo que les da emoción." },
      { id: 's2', k: 'repas', t: "Recordes el marcador?|¿Recuerdas el marcador?", punts: ["«Posa punts a 0»: número nou.|«Pon puntos a 0»: número nuevo.", "«Suma a punts 1»: un més.|«Suma a puntos 1»: uno más.", "«Suma a punts -1»: un menys.|«Suma a puntos -1»: uno menos."],
        nota: "Pregunta quin dels tres blocs farem servir per a les vides i per què.|Pregunta cuál de los tres bloques usaremos para las vidas y por qué." },
      { id: 's3', k: 'pregunta', t: "Una nau que no es trenca mai|Una nave que no se rompe nunca", x: "La nau xoca i no passa res. Quines regles li falten al videojoc?|La nave choca y no pasa nada. ¿Qué reglas le faltan al videojuego?",
        nota: "Apunta les regles que diguin: tenir vides, perdre'n en xocar, acabar quan no en queden.|Apunta las reglas que digan: tener vidas, perderlas al chocar, terminar cuando no quedan." },
      { id: 's4', k: 'anim', t: "Tres vides|Tres vidas", anim: 'g6lives', x: "Vides a 3 al començament; a cada xoc, suma -1.|Vidas a 3 al principio; en cada choque, suma -1.",
        nota: "Fes que diguin el número del marcador a cada xoc abans que canviï.|Haz que digan el número del marcador en cada choque antes de que cambie." },
      { id: 's5', k: 'media', t: "Un xoc, una vida|Un choque, una vida", x: "Després de restar una vida, la nau espera 1 segon.|Después de restar una vida, la nave espera 1 segundo.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ setv:vides,3 forever{ if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } } }`, varNames: VN, time: 6 },
        nota: "Pregunta què passaria sense l'espera. Si cal, compteu junts els fotogrames: el meteorit triga gairebé mig segon a travessar la nau.|Pregunta qué pasaría sin la espera. Si hace falta, contad juntos los fotogramas: el meteorito tarda casi medio segundo en atravesar la nave." },
      { id: 's6', k: 'anim', t: "Comparar|Comparar", anim: 'g6cmp', x: "vides = 0? La resposta és sí o no.|¿vidas = 0? La respuesta es sí o no.",
        nota: "Feu comparacions amb la classe: alumnes > 20? cadires = taules? Truc: la boca del > i del < mira el número més gran.|Haced comparaciones con la clase: ¿alumnos > 20? ¿sillas = mesas? Truco: la boca del > y del < mira al número más grande." },
      { id: 's7', k: 'concepte', t: "Tres maneres de comparar|Tres maneras de comparar", punts: ["vides = 0 → no queden vides|vidas = 0 → no quedan vidas", "punts > 9 → 10 o més punts|puntos > 9 → 10 o más puntos", "temps < 5 → queden menys de 5 segons|tiempo < 5 → quedan menos de 5 segundos"],
        nota: "Per a cada condició, digueu un valor que la faci certa i un que la faci falsa.|Para cada condición, decid un valor que la haga cierta y uno que la haga falsa.", pic: "img/ment/est.webp" },
      { id: 's8', k: 'media', t: "Fi de la partida|Fin de la partida", x: "Si vides = 0: «Fi de la partida!» i atura tot.|Si vidas = 0: «¡Fin de la partida!» y para todo.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ setv:vides,3 forever{ if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } if:$vides=0{ say:"${FI}" stop:all } } }`, varNames: VN, time: 9 },
        nota: "Fes notar que, quan la nau diu el missatge, el meteorit també s'atura: «atura tot» para els guions de tots els personatges.|Haz notar que, cuando la nave dice el mensaje, el meteorito también se para: «para todo» para los guiones de todos los personajes." },
      { id: 's9', k: 'media', t: "Compte: una partida que no s'acaba|Cuidado: una partida que no se acaba", x: "«Posa vides a 3» dins del bucle: a cada volta, tornen a 3.|«Pon vidas a 3» dentro del bucle: en cada vuelta, vuelven a 3.",
        media: { k: 'stage', w: W_NAU, prog: `${METEOR} @nau flag{ forever{ setv:vides,3 if:touch:meteorit{ chv:vides,-1 sound:xoc wait:1 } if:$vides=0{ say:"${FI}" stop:all } } }`, varNames: VN, time: 6 },
        nota: "Pregunta on hauria d'anar el bloc. És l'error del repte 4: deixa'l anomenat com «el valor que torna».|Pregunta dónde debería ir el bloque. Es el error del reto 4: déjalo nombrado como «el valor que vuelve»." },
      { id: 's10', k: 'activitat', t: "La taula de les vides|La tabla de las vidas", timer: 12, punts: ["Comenceu amb vides = 3.|Empezad con vidas = 3.", "A cada fila: què passa i quantes vides queden.|En cada fila: qué pasa y cuántas vidas quedan.", "Encercleu la fila on vides = 0: fi de la partida!|Rodead la fila donde vidas = 0: ¡fin de la partida!", "Inventeu una partida per a la parella del costat.|Inventad una partida para la pareja de al lado."],
        nota: "Fes la primera partida a la pissarra amb tothom. Les files de després de la fi de la partida ja no compten: és «atura tot».|Haz la primera partida en la pizarra con todos. Las filas de después del fin de la partida ya no cuentan: es «para todo»." },
      { id: 's11', k: 'pregunta', t: "Sí o no?|¿Sí o no?", punts: ["vides val 2: vides = 0?|vidas vale 2: ¿vidas = 0?", "vides val 2: vides > 0?|vidas vale 2: ¿vidas > 0?", "punts val 9: punts > 9?|puntos vale 9: ¿puntos > 9?"],
        nota: "Respostes: no, sí, no. L'última costa: 9 no és més gran que 9.|Respuestas: no, sí, no. La última cuesta: 9 no es mayor que 9." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Vides i fi de partida».|Abre la sesión «Vidas y fin de partida».", "Fes fins al pas «Investiga».|Haz hasta el paso «Investiga».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas d'ordenar el guió, mira qui posa «posa vides a 3» dins del bucle i pregunta-li quantes vegades es farà.|En el paso de ordenar el guion, mira quién pone «pon vidas a 3» dentro del bucle y pregúntale cuántas veces se hará." },
      { id: 's13', k: 'repte', t: "Reptes de vides|Retos de vidas", timer: 10, punts: ["1. Tres vides (dues proves)|1. Tres vidas (dos pruebas)", "2. La fi de la partida|2. El fin de la partida", "3. Una vida extra|3. Una vida extra", "4. La partida que no s'acaba mai|4. La partida que no se acaba nunca"],
        nota: "Al repte 4 no cal moure el bloc: es pot esborrar i posar-ne un de nou al lloc bo.|En el reto 4 no hace falta mover el bloque: se puede borrar y poner uno nuevo en el sitio correcto." },
      { id: 's14', k: 'activitat', t: "Crea: el peix i les meduses|Crea: el pez y las medusas", timer: 5, punts: ["Vides a 3, abans del bucle.|Vidas a 3, antes del bucle.", "Cada xoc: una vida menys i espera.|Cada choque: una vida menos y espera.", "Vides = 0: un missatge i atura tot.|Vidas = 0: un mensaje y para todo.", "Extra: fletxes ↑ i ↓.|Extra: flechas ↑ y ↓."],
        nota: "Qui afegeixi les fletxes descobrirà que el videojoc ja es pot guanyar esquivant. Que el provi un company/a.|Quien añada las flechas descubrirá que el videojuego ya se puede ganar esquivando. Que lo pruebe un compañero/a." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Vides a 3; cada xoc, -1 i esperar.|Vidas a 3; cada choque, -1 y esperar.", "Les condicions poden comparar: =, > i <.|Las condiciones pueden comparar: =, > y <.", "Vides = 0: fi de la partida i atura tot.|Vidas = 0: fin de la partida y para todo."],
        nota: "Pregunta quines regles de la llista del principi ja hem programat.|Pregunta qué reglas de la lista del principio ya hemos programado." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["3 vides i 2 xocs: quantes en queden?|3 vidas y 2 choques: ¿cuántas quedan?", "On va «posa vides a 3»?|¿Dónde va «pon vidas a 3»?"],
        nota: "Anota qui encara confon > i <: a la sessió 4 ho farem servir amb la mascota.|Anota quién aún confunde > y <: en la sesión 4 lo usaremos con la mascota." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: la taula de les vides|Ficha: la tabla de las vidas", k: 'fitxa',
        intro: "Cada partida comença amb vides = 3. Escriu les vides després de cada cosa que passa i encercla on s'acaba la partida. A sota, respon sí o no.|Cada partida empieza con vidas = 3. Escribe las vidas después de cada cosa que pasa y rodea dónde se acaba la partida. Debajo, responde sí o no.",
        items: [
          { q: "Partida 1: xoc ☄️ · xoc ☄️ · xoc ☄️|Partida 1: choque ☄️ · choque ☄️ · choque ☄️", sol: "2, 1, 0 → fi de la partida al tercer xoc|2, 1, 0 → fin de la partida en el tercer choque" },
          { q: "Partida 2: xoc ☄️ · cor ❤️ · xoc ☄️ · xoc ☄️ · cor ❤️|Partida 2: choque ☄️ · corazón ❤️ · choque ☄️ · choque ☄️ · corazón ❤️", sol: "2, 3, 2, 1, 2 → encara li queden 2 vides|2, 3, 2, 1, 2 → aún le quedan 2 vidas" },
          { q: "Partida 3: xoc ☄️ · xoc ☄️ · cor ❤️ · xoc ☄️ · xoc ☄️ · cor ❤️|Partida 3: choque ☄️ · choque ☄️ · corazón ❤️ · choque ☄️ · choque ☄️ · corazón ❤️", sol: "2, 1, 2, 1, 0 → fi de la partida; l'últim cor ja no compta|2, 1, 2, 1, 0 → fin de la partida; el último corazón ya no cuenta" },
          { q: "vides = 1. Sí o no?  vides = 0 · vides > 0 · vides < 3|vidas = 1. ¿Sí o no?  vidas = 0 · vidas > 0 · vidas < 3", sol: "no · sí · sí|no · sí · sí" },
          { q: "Inventa una partida de 5 coses perquè la resolgui la parella del costat.|Inventa una partida de 5 cosas para que la resuelva la pareja de al lado.", sol: "Resposta lliure. Comproveu-la junts fila a fila.|Respuesta libre. Comprobadla juntos fila a fila." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Compte enrere ---------- */
  'g6-3': {
    intro: "Tercera sessió de variables: el temps. Un compte enrere és una variable que comença en un número i un bucle la fa baixar 1 cada segon (espera 1 segon, suma -1); quan arriba a 0, «atura tot» acaba el videojoc. El rellotge té el seu propi guió i funciona alhora que la resta. També coneixen el cronòmetre, que compta cap amunt sol i serveix per saber quant s'ha trigat. La classe té demos d'en Numi, una activitat amb gots i pinces i quatre reptes de rellotges.|Tercera sesión de variables: el tiempo. Una cuenta atrás es una variable que empieza en un número y un bucle la hace bajar 1 cada segundo (espera 1 segundo, suma -1); cuando llega a 0, «para todo» termina el videojuego. El reloj tiene su propio guion y funciona a la vez que el resto. También conocen el cronómetro, que cuenta hacia arriba solo y sirve para saber cuánto se ha tardado. La clase tiene demos de Numi, una actividad con vasos y pinzas y cuatro retos de relojes.",
    claus: [
      "Un compte enrere: temps a 10 i, 10 vegades, espera 1 segon i suma -1.|Una cuenta atrás: tiempo a 10 y, 10 veces, espera 1 segundo y suma -1.",
      "Sense «espera 1 segon», cada volta dura un fotograma i el compte s'acaba en un instant.|Sin «espera 1 segundo», cada vuelta dura un fotograma y la cuenta se acaba en un instante.",
      "El nombre de voltes ha de coincidir amb el valor inicial perquè arribi a 0.|El número de vueltas tiene que coincidir con el valor inicial para que llegue a 0.",
      "El rellotge pot ser un guió a part: tots els guions funcionen alhora.|El reloj puede ser un guion aparte: todos los guiones funcionan a la vez.",
      "El cronòmetre compta cap amunt; es posa a zero just quan comença el que vols mesurar.|El cronómetro cuenta hacia arriba; se pone a cero justo cuando empieza lo que quieres medir."
    ],
    prev: [
      "Variables, «posa» i «suma» (sessions 1 i 2).|Variables, «pon» y «suma» (sesiones 1 y 2).",
      "El bucle «repeteix … vegades» i el bloc «espera» (unitat 2).|El bucle «repite … veces» y el bloque «espera» (unidad 2).",
      "«Atura tot» i la fi de la partida (sessió 2).|«Para todo» y el fin de partida (sesión 2)."
    ],
    faq: [
      ["Per què el meu compte enrere s'acaba de cop?|¿Por qué mi cuenta atrás se acaba de golpe?", "Falta «espera 1 segon» dins del bucle. Sense espera, cada volta dura un fotograma (una trentena part de segon).|Falta «espera 1 segundo» dentro del bucle. Sin espera, cada vuelta dura un fotograma (una treintava parte de segundo)."],
      ["Quantes voltes ha de fer el bucle?|¿Cuántas vueltas tiene que hacer el bucle?", "Tantes com el número inicial: si el temps comença a 10 i cada volta resta 1, calen 10 voltes per arribar a 0.|Tantas como el número inicial: si el tiempo empieza en 10 y cada vuelta resta 1, hacen falta 10 vueltas para llegar a 0."],
      ["Quina diferència hi ha entre el compte enrere i el cronòmetre?|¿Qué diferencia hay entre la cuenta atrás y el cronómetro?", "El compte enrere el fas tu amb una variable i baixa fins a 0 (límit de temps). El cronòmetre ja hi és, puja sol i diu quant ha passat.|La cuenta atrás la haces tú con una variable y baja hasta 0 (límite de tiempo). El cronómetro ya está, sube solo y dice cuánto ha pasado."],
      ["Per què el cotxe diu un número amb coma, com 2,8?|¿Por qué el coche dice un número con coma, como 2,8?", "El cronòmetre compta dècimes de segon: 2,8 vol dir 2 segons i 8 dècimes, gairebé 3 segons.|El cronómetro cuenta décimas de segundo: 2,8 quiere decir 2 segundos y 8 décimas, casi 3 segundos."],
      ["On poso l'«atura tot»?|¿Dónde pongo el «para todo»?", "Després del bucle, quan el temps ja és 0. Si és dins del bucle, la partida s'acaba al primer segon.|Después del bucle, cuando el tiempo ya es 0. Si está dentro del bucle, la partida se acaba en el primer segundo."],
      ["Puc fer el rellotge a la papallona?|¿Puedo hacer el reloj en la mariposa?", "Millor en un altre personatge (en Numi): si la papallona espera 1 segon al seu guió, deixa de volar mentre espera.|Mejor en otro personaje (Numi): si la mariposa espera 1 segundo en su guion, deja de volar mientras espera."]
    ],
    tec: [
      ["El marcador de la variable no surt a l'escenari.|El marcador de la variable no sale en el escenario.", "Surt a dalt a l'esquerra quan el repte té variables. Si no es veu, toqueu el botó de tornar a començar (la fletxa rodona) o feu la finestra més gran.|Sale arriba a la izquierda cuando el reto tiene variables. Si no se ve, tocad el botón de volver a empezar (la flecha redonda) o haced la ventana más grande."],
      ["En tocar el text del «digues» no troben la variable.|Al tocar el texto del «di» no encuentran la variable.", "A la finestra que s'obre, sota el quadre per escriure, hi ha els botons de les variables del repte (punts, vides…). Cal tocar-ne un, no escriure'n el nom.|En la ventana que se abre, debajo del cuadro para escribir, están los botones de las variables del reto (puntos, vidas…). Hay que tocar uno, no escribir su nombre."],
      ["Per escriure un número negatiu (-1) no troben el signe menys.|Para escribir un número negativo (-1) no encuentran el signo menos.", "A l'ordinador és la tecla del guionet (-), abans del número. Si el teclat de la tauleta o del mòbil no el mostra, feu aquell repte a l'ordinador.|En el ordenador es la tecla del guion (-), antes del número. Si el teclado de la tableta o del móvil no lo muestra, haced ese reto en el ordenador."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["Al repte del cotxe, en tocar el número de «posa segons a» no surt «cronòmetre».|En el reto del coche, al tocar el número de «pon segundos a» no sale «cronómetro».", "Surt a sota del quadre del número, a «o un valor:». Si no surt, sortiu del repte i torneu-hi a entrar.|Sale debajo del cuadro del número, en «o un valor:». Si no sale, salid del reto y volved a entrar."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Activitat de les pinces: pinces de roba de plàstic o taps grans (res petit que es pugui posar a la boca) i sense córrer entre taules.|Actividad de las pinzas: pinzas de ropa de plástico o tapones grandes (nada pequeño que se pueda meter en la boca) y sin correr entre mesas.",
      "Contrarellotge: si algú es posa nerviós amb el temps, recorda que és un repte per divertir-se i que sempre es pot donar més temps.|Contrarreloj: si alguien se pone nervioso con el tiempo, recuerda que es un reto para divertirse y que siempre se puede dar más tiempo."
    ],
    extra: [
      "Al contrarellotge, fer que en Numi digui els darrers 3 segons en veu alta (si temps < 4).|En el contrarreloj, hacer que Numi diga los últimos 3 segundos en voz alta (si tiempo < 4).",
      "Mesurar amb el cronòmetre quant triga el cotxe a creuar l'escenari amb «mou-te 4» i amb «mou-te 8». Què passa amb el temps?|Medir con el cronómetro cuánto tarda el coche en cruzar el escenario con «muévete 4» y con «muévete 8». ¿Qué pasa con el tiempo?",
      "Fer un compte enrere de 10 amb una frase especial a cada número i un so al final.|Hacer una cuenta atrás de 10 con una frase especial en cada número y un sonido al final."
    ],
    trans: [
      "Ve de la sessió 2: el «atura tot» que acabava la partida per les vides ara l'acaba el temps.|Viene de la sesión 2: el «para todo» que terminaba la partida por las vidas ahora lo termina el tiempo.",
      "Sessió següent: el projecte de la mascota virtual, on la gana puja sola amb el temps.|Sesión siguiente: el proyecto de la mascota virtual, donde el hambre sube sola con el tiempo.",
      "Matemàtiques i ciències: mesurar el temps, les dècimes de segon i comparar velocitats.|Matemáticas y ciencias: medir el tiempo, las décimas de segundo y comparar velocidades."
    ],
    obj: [
      "L'alumne/a programa un compte enrere amb una variable que comença en un número i baixa 1 cada segon dins d'un bucle «repeteix».|El alumno/a programa una cuenta atrás con una variable que empieza en un número y baja 1 cada segundo dentro de un bucle «repite».",
      "L'alumne/a fa que el rellotge, amb el seu propi guió, funcioni alhora que la resta del videojoc i l'aturi quan arriba a 0.|El alumno/a hace que el reloj, con su propio guion, funcione a la vez que el resto del videojuego y lo pare cuando llega a 0.",
      "L'alumne/a fa servir el cronòmetre per mesurar quant triga una acció, posant-lo a zero en el moment just.|El alumno/a usa el cronómetro para medir cuánto tarda una acción, poniéndolo a cero en el momento justo.",
      "L'alumne/a relaciona el nombre de voltes del bucle amb el valor inicial del compte enrere.|El alumno/a relaciona el número de vueltas del bucle con el valor inicial de la cuenta atrás."
    ],
    comp: [
      "Competència digital (CD5): programar el temps en un videojoc amb variables i bucles|Competencia digital (CD5): programar el tiempo en un videojuego con variables y bucles",
      "Pensament computacional: comptadors que baixen, guions en paral·lel i mesura del temps|Pensamiento computacional: contadores que bajan, guiones en paralelo y medida del tiempo",
      "Matemàtiques (mesura): segons, decimals de segon i comptar enrere|Matemáticas (medida): segundos, décimas de segundo y contar hacia atrás",
      "Treball en equip: coordinar papers diferents que passen alhora|Trabajo en equipo: coordinar papeles diferentes que pasan a la vez"
    ],
    vocab: [
      ["Compte enrere|Cuenta atrás", "Una variable que comença en un número i baixa fins a 0.|Una variable que empieza en un número y baja hasta 0."],
      ["Cronòmetre|Cronómetro", "El rellotge de l'escenari que compta cap amunt, en segons.|El reloj del escenario que cuenta hacia arriba, en segundos."],
      ["Posar a zero|Poner a cero", "Fer que el cronòmetre torni a començar des de 0.|Hacer que el cronómetro vuelva a empezar desde 0."],
      ["Alhora (en paral·lel)|A la vez (en paralelo)", "Quan dos guions funcionen al mateix temps.|Cuando dos guiones funcionan al mismo tiempo."],
      ["Contrarellotge|Contrarreloj", "Un repte en què has de fer tant com puguis abans que s'acabi el temps.|Un reto en el que tienes que hacer tanto como puedas antes de que se acabe el tiempo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Compte enrere»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuenta atrás»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Per grup de 3: un got, 15 pinces o taps i les targetes de papers|Por grupo de 3: un vaso, 15 pinzas o tapones y las tarjetas de papeles",
        "Un rellotge amb segons visible (el del projector o un de paret)|Un reloj con segundos visible (el del proyector o uno de pared)"
      ],
      imprimir: ["Targetes: el rellotge, el recol·lector i el marcador|Tarjetas: el reloj, el recolector y el marcador"],
      prep: [
        "El dia abans (15 min): preparar una bossa per grup de 3 amb un got i 15 pinces o taps, i imprimir i retallar les targetes de papers.|El día antes (15 min): preparar una bolsa por grupo de 3 con un vaso y 15 pinzas o tapones, e imprimir y recortar las tarjetas de papeles.",
        "El dia abans (10 min): provar el repte del cotxe: el cronòmetre s'ha de posar a zero just després del «3, 2, 1…».|El día antes (10 min): probar el reto del coche: el cronómetro se tiene que poner a cero justo después del «3, 2, 1…».",
        "Abans de classe (5 min): tenir a la vista un rellotge amb segons (el del projector o un de paret).|Antes de clase (5 min): tener a la vista un reloj con segundos (el del proyector o uno de pared).",
        "Abans de classe (5 min): obrir la presentació i deixar la sessió iniciada als ordinadors.|Antes de clase (5 min): abrir la presentación y dejar la sesión iniciada en los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: hi ha cua a la caseta!|Bienvenida: ¡hay cola en la caseta!", fase: 'inici',
        fa: "Repassa la fi de la partida i «atura tot». Explica la missió: cada persona tindrà 10 segons. Pregunta on han vist comptes enrere a la vida real.|Repasa el fin de la partida y «para todo». Explica la misión: cada persona tendrá 10 segundos. Pregunta dónde han visto cuentas atrás en la vida real.",
        diu: [
          "Què fa «atura tot»? (para tots els guions de tots els personatges)|¿Qué hace «para todo»? (para todos los guiones de todos los personajes)",
          "On heu vist un compte enrere? (al microones, al semàfor, a cap d'any…)|¿Dónde habéis visto una cuenta atrás? (en el microondas, en el semáforo, en Nochevieja…)",
          "Què passa quan arriba a 0? (s'acaba alguna cosa: el temps, la cocció…)|¿Qué pasa cuando llega a 0? (se acaba algo: el tiempo, la cocción…)",
          "Avui el temps serà una variable més, com els punts i les vides.|Hoy el tiempo será una variable más, como los puntos y las vidas."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Comptar enrere i cronometrar|Contar hacia atrás y cronometrar", fase: 'teoria',
        fa: "Mostra l'animació del compte enrere i la demo d'en Numi: abans de cada volta, que diguin el número que vindrà. Mostra els dos guions alhora (rellotge i poma). Presenta el cronòmetre: compta cap amunt i es posa a zero. Acaba amb la demo de l'error: el compte enrere sense espera.|Muestra la animación de la cuenta atrás y la demo de Numi: antes de cada vuelta, que digan el número que vendrá. Muestra los dos guiones a la vez (reloj y manzana). Presenta el cronómetro: cuenta hacia arriba y se pone a cero. Termina con la demo del error: la cuenta atrás sin espera.",
        diu: [
          "Si el temps comença a 5, quantes voltes calen per arribar a 0? (5)|Si el tiempo empieza en 5, ¿cuántas vueltas hacen falta para llegar a 0? (5)",
          "Quin número dirà en Numi ara? (el següent, un menys)|¿Qué número dirá Numi ahora? (el siguiente, uno menos)",
          "Mentre en Numi compta, el gat s'atura? (no: els guions funcionen alhora)|Mientras Numi cuenta, ¿el gato se para? (no: los guiones funcionan a la vez)",
          "El cronòmetre, compta cap amunt o cap avall? (cap amunt)|El cronómetro, ¿cuenta hacia arriba o hacia abajo? (hacia arriba)",
          "Per què aquest compte enrere de 10 segons dura un instant? (falta l'espera)|¿Por qué esta cuenta atrás de 10 segundos dura un instante? (falta la espera)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El rellotge i el recol·lector|El reloj y el recolector", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes de papers. Ronda 1 (compte enrere): el rellotge diu 10, 9, 8… picant a la taula cada segon; el recol·lector posa pinces al got d'una en una; a 0, el marcador compta els punts. Canvien els papers fins que tothom hagi fet de tot. Ronda 2 (cronòmetre): el rellotge compta cap amunt i el recol·lector posa 10 pinces tan de pressa com pugui; el marcador apunta quants segons ha trigat.|Grupos de 3 con las tarjetas de papeles. Ronda 1 (cuenta atrás): el reloj dice 10, 9, 8… picando en la mesa cada segundo; el recolector mete pinzas en el vaso de una en una; en 0, el marcador cuenta los puntos. Cambian los papeles hasta que todos hayan hecho de todo. Ronda 2 (cronómetro): el reloj cuenta hacia arriba y el recolector mete 10 pinzas tan rápido como pueda; el marcador apunta cuántos segundos ha tardado.",
        diu: [
          "El rellotge i el recol·lector treballen alhora, com dos guions.|El reloj y el recolector trabajan a la vez, como dos guiones.",
          "Rellotge: un número cada segon, ni més de pressa ni més a poc a poc. Mireu el rellotge de la paret.|Reloj: un número cada segundo, ni más rápido ni más despacio. Mirad el reloj de la pared.",
          "A la ronda 1 el temps és fix i compten els punts. I a la ronda 2? (les pinces són fixes i compta el temps)|En la ronda 1 el tiempo es fijo y cuentan los puntos. ¿Y en la ronda 2? (las pinzas son fijas y cuenta el tiempo)",
          "Quan ha de dir «zero» el rellotge del cronòmetre? (just quan el recol·lector comença)|¿Cuándo tiene que decir «cero» el reloj del cronómetro? (justo cuando el recolector empieza)"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins al pas «Investiga». A «El repte dels 10 segons», que toquin «Ho hem fet!» si ja l'han fet en grup. Al pas d'ordenar el guió, fixa't en qui posa «posa temps a 10» dins del bucle.|Cada alumno/a avanza hasta el paso «Investiga». En «El reto de los 10 segundos», que toquen «¡Lo hemos hecho!» si ya lo han hecho en grupo. En el paso de ordenar el guion, fíjate en quién pone «pon tiempo a 10» dentro del bucle.",
        diu: [
          "Quant dura cada volta del bucle? (1 segon, per l'espera)|¿Cuánto dura cada vuelta del bucle? (1 segundo, por la espera)",
          "Quan diu «Ja!» en Numi a la pregunta? (als 3 segons)|¿Cuándo dice «¡Ya!» Numi en la pregunta? (a los 3 segundos)",
          "A Investiga: el temps puja o baixa? Quin número ho decideix? (puja: el +1 hauria de ser -1)|En Investiga: ¿el tiempo sube o baja? ¿Qué número lo decide? (sube: el +1 tendría que ser -1)"
        ],
        slides: ['s12'], app: "De «La missió» a «Investiga»: les dues preguntes de repàs, les dues històries, les targetes de «Descobreix», «El repte dels 10 segons», ordenar el guió del rellotge, les dues preguntes de temps i el compte enrere que va cap amunt.|De «La misión» a «Investiga»: las dos preguntas de repaso, las dos historias, las tarjetas de «Descubre», «El reto de los 10 segundos», ordenar el guion del reloj, las dos preguntas de tiempo y la cuenta atrás que va hacia arriba.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: rellotges|Retos: relojes", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre reptes. Al primer hi ha un màxim de 6 blocs: si en necessiten més, és que no fan servir el bucle. Al del cotxe, la variable segons té decimals: és normal.|Haced la pausa activa y deja que hagan los cuatro retos. En el primero hay un máximo de 6 bloques: si necesitan más, es que no usan el bucle. En el del coche, la variable segundos tiene decimales: es normal.",
        diu: [
          "Quins blocs van dins del bucle i quins a fora? (dins: digues, espera, suma -1; fora: posa temps i «Ja!»)|¿Qué bloques van dentro del bucle y cuáles fuera? (dentro: di, espera, suma -1; fuera: pon tiempo y «¡Ya!»)",
          "On poses «atura tot»: dins o fora del bucle? Per què? (fora, després: quan el temps ja és 0)|¿Dónde pones «para todo»: dentro o fuera del bucle? ¿Por qué? (fuera, después: cuando el tiempo ya es 0)",
          "Quan ha de començar a comptar el cronòmetre del cotxe? (just quan surt, després del «3, 2, 1…»)|¿Cuándo tiene que empezar a contar el cronómetro del coche? (justo al salir, después del «3, 2, 1…»)",
          "El rellotge s'atura a 5: quantes voltes fa el bucle? Quantes n'hauria de fer? (5; 10)|El reloj se para en 5: ¿cuántas vueltas hace el bucle? ¿Cuántas debería hacer? (5; 10)"
        ],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes: 5, 4, 3, 2, 1, el rellotge del videojoc de la poma, el cronòmetre del cotxe i el rellotge que s'atura a 5.|«Pausa activa» y los cuatro retos: 5, 4, 3, 2, 1, el reloj del videojuego de la manzana, el cronómetro del coche y el reloj que se para en 5.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: contrarellotge al bosc|Crea: contrarreloj en el bosque", fase: 'crea',
        fa: "Cada alumne/a fa el seu contrarellotge: tria quant de temps dona i com vola la papallona. Després, el provi un company/a i el marcador diu quants punts ha fet.|Cada alumno/a hace su contrarreloj: elige cuánto tiempo da y cómo vuela la mariposa. Después, que lo pruebe un compañero/a y el marcador dice cuántos puntos ha hecho.",
        diu: [
          "Si dones 10 segons, quantes voltes ha de fer el bucle? (10)|Si das 10 segundos, ¿cuántas vueltas tiene que hacer el bucle? (10)",
          "El rellotge és en un guió a part? (sí, a en Numi)|¿El reloj está en un guion aparte? (sí, en Numi)",
          "És massa fàcil o massa difícil? Què podries canviar? (el temps, la velocitat de la papallona)|¿Es demasiado fácil o demasiado difícil? ¿Qué podrías cambiar? (el tiempo, la velocidad de la mariposa)"
        ],
        slides: ['s14'], app: "Pas «Crea»: Contrarellotge al bosc (es desa a «Projectes»).|Paso «Crea»: Contrarreloj en el bosque (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: [
          "Quina diferència hi ha entre un compte enrere i un cronòmetre? (un baixa fins a 0; l'altre puja i diu quant has trigat)|¿Qué diferencia hay entre una cuenta atrás y un cronómetro? (una baja hasta 0; el otro sube y dice cuánto has tardado)",
          "Què va dins del bucle del compte enrere? (espera 1 segon i suma -1)|¿Qué va dentro del bucle de la cuenta atrás? (espera 1 segundo y suma -1)",
          "Punts, vides i temps: quina té gairebé cada videojoc que coneixeu?|Puntos, vidas y tiempo: ¿cuál tiene casi cada videojuego que conocéis?"
        ],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Oblida «espera 1 segon» dins del bucle i el compte enrere s'acaba de seguida.|Olvida «espera 1 segundo» dentro del bucle y la cuenta atrás se acaba enseguida.",
        "Pregunta-li quant dura cada volta del bucle. Que compti en veu alta com ho faria un rellotge de veritat.|Pregúntale cuánto dura cada vuelta del bucle. Que cuente en voz alta como lo haría un reloj de verdad."],
      ["El número de voltes del bucle no coincideix amb el valor inicial (temps a 10 i repeteix 5).|El número de vueltas del bucle no coincide con el valor inicial (tiempo a 10 y repite 5).",
        "Que faci una taula: volta 1, temps 9; volta 2, temps 8… Quantes voltes calen per arribar a 0?|Que haga una tabla: vuelta 1, tiempo 9; vuelta 2, tiempo 8… ¿Cuántas vueltas hacen falta para llegar a 0?"],
      ["Posa «atura tot» dins del bucle i la partida s'acaba al primer segon.|Pone «para todo» dentro del bucle y la partida se acaba en el primer segundo.",
        "Pregunta: quan s'ha d'acabar la partida, a cada volta o quan el bucle ha acabat? Que segueixi el guió amb el dit.|Pregunta: ¿cuándo se tiene que acabar la partida, en cada vuelta o cuando el bucle ha terminado? Que siga el guion con el dedo."],
      ["Posa el cronòmetre a zero al començament del guió, abans del «3, 2, 1…», i el temps del cotxe surt massa llarg.|Pone el cronómetro a cero al principio del guion, antes del «3, 2, 1…», y el tiempo del coche sale demasiado largo.",
        "Pregunta-li quan surt el cotxe de veritat. Que recordi la ronda 2 de l'activitat: quan deia «zero» el rellotge?|Pregúntale cuándo sale el coche de verdad. Que recuerde la ronda 2 de la actividad: ¿cuándo decía «cero» el reloj?"],
      ["Escriu el compte enrere al guió de la papallona i aquesta deixa de volar.|Escribe la cuenta atrás en el guion de la mariposa y esta deja de volar.",
        "Pregunta: un guió pot fer dues coses alhora? Que posi el rellotge en un altre personatge, com en Numi.|Pregunta: ¿un guion puede hacer dos cosas a la vez? Que ponga el reloj en otro personaje, como Numi."],
      ["Al repte del cotxe escriu el número a mà a «posa segons a» en lloc de triar el cronòmetre.|En el reto del coche escribe el número a mano en «pon segundos a» en lugar de elegir el cronómetro.", "Pregunta: saps quant trigarà el cotxe abans que arribi? Qui ho sap de veritat? Que toqui el número i triï «cronòmetre» a «o un valor».|Pregunta: ¿sabes cuánto tardará el coche antes de que llegue? ¿Quién lo sabe de verdad? Que toque el número y elija «cronómetro» en «o un valor»."]
    ],
    diff: {
      mes: "Al contrarellotge, fer que la papallona vagi més de pressa quan queda poc temps (pensar amb un company/a quina condició caldria) o que en Numi digui els darrers 3 segons en veu alta. Mesurar amb el cronòmetre quant triga el gat a creuar l'escenari a velocitats diferents.|En el contrarreloj, hacer que la mariposa vaya más deprisa cuando queda poco tiempo (pensar con un compañero/a qué condición haría falta) o que Numi diga los últimos 3 segundos en voz alta. Medir con el cronómetro cuánto tarda el gato en cruzar el escenario a velocidades diferentes.",
      menys: "Fer el compte enrere en paper abans de l'app: escriure 5, 4, 3, 2, 1 i ratllar un número cada vegada que el professor/a pica de mans. A l'app, fer primer el repte de 5, 4, 3, 2, 1 i, després, copiar el mateix guió a en Numi al repte de la poma.|Hacer la cuenta atrás en papel antes de la app: escribir 5, 4, 3, 2, 1 y tachar un número cada vez que el profesor/a da una palmada. En la app, hacer primero el reto de 5, 4, 3, 2, 1 y, después, copiar el mismo guion en Numi en el reto de la manzana."
    },
    aval: {
      ticket: ["Quins blocs van dins del bucle d'un compte enrere?|¿Qué bloques van dentro del bucle de una cuenta atrás?",
        "Vols saber quant tardes a fer 10 salts: compte enrere o cronòmetre? Quan el poses a zero?|Quieres saber cuánto tardas en dar 10 saltos: ¿cuenta atrás o cronómetro? ¿Cuándo lo pones a cero?"],
      rubric: [
        ["Compte enrere|Cuenta atrás", "Programa un compte enrere amb valor inicial, espera i -1, i el nombre de voltes correcte.|Programa una cuenta atrás con valor inicial, espera y -1, y el número de vueltas correcto.", "Programa el compte enrere però s'equivoca en l'espera o en el nombre de voltes.|Programa la cuenta atrás pero se equivoca en la espera o en el número de vueltas."],
        ["Guions alhora|Guiones a la vez", "Posa el rellotge en un guió propi i atura el videojoc quan arriba a 0.|Pone el reloj en un guion propio y para el videojuego cuando llega a 0.", "Fa el rellotge, però l'atura en un lloc equivocat o el posa al guió d'un altre personatge.|Hace el reloj, pero lo para en un sitio equivocado o lo pone en el guion de otro personaje."],
        ["Cronòmetre|Cronómetro", "Posa el cronòmetre a zero en el moment just i en guarda el valor en una variable.|Pone el cronómetro a cero en el momento justo y guarda su valor en una variable.", "Fa servir el cronòmetre, però no sap ben bé quan s'ha de posar a zero.|Usa el cronómetro, pero no sabe bien cuándo se tiene que poner a cero."],
        [
          "Predir el temps|Predecir el tiempo",
          "Diu quant durarà un compte enrere llegint el valor inicial, les voltes i l'espera.|Dice cuánto durará una cuenta atrás leyendo el valor inicial, las vueltas y la espera.",
          "Necessita executar el programa per saber quant dura.|Necesita ejecutar el programa para saber cuánto dura."
        ]
      ]
    },
    casa: "A casa podeu fer «El repte dels 10 segons»: una persona compta enrere de 10 a 0 i l'altra posa objectes petits en un got. Després, amb el cronòmetre d'un mòbil, mireu quant trigueu a posar-ne 10.|En casa podéis hacer «El reto de los 10 segundos»: una persona cuenta hacia atrás de 10 a 0 y la otra mete objetos pequeños en un vaso. Después, con el cronómetro de un móvil, mirad cuánto tardáis en meter 10.",
    slides: [
      { id: 's1', k: 'portada', t: "Compte enrere|Cuenta atrás", x: "Unitat 6 · Sessió 3. Cada persona tindrà 10 segons!|Unidad 6 · Sesión 3. ¡Cada persona tendrá 10 segundos!",
        nota: "Explica que avui el temps serà una variable més, com els punts i les vides.|Explica que hoy el tiempo será una variable más, como los puntos y las vidas." },
      { id: 's2', k: 'repas', t: "Recordes la fi de la partida?|¿Recuerdas el fin de la partida?", punts: ["Si vides = 0: «Fi de la partida!».|Si vidas = 0: «¡Fin de la partida!».", "«Atura tot» para tots els guions.|«Para todo» para todos los guiones.", "«Posa vides a 3», abans del bucle.|«Pon vidas a 3», antes del bucle."],
        nota: "Pregunta: avui, què pot fer acabar una partida, a més de les vides? El temps!|Pregunta: hoy, ¿qué puede hacer terminar una partida, además de las vidas? ¡El tiempo!" },
      { id: 's3', k: 'pregunta', t: "On hi ha comptes enrere?|¿Dónde hay cuentas atrás?", x: "Digues un lloc on hagis vist un rellotge que compta enrere.|Di un sitio donde hayas visto un reloj que cuenta hacia atrás.",
        nota: "Exemples: microones, semàfor per a vianants, coets, final d'any. Pregunta què passa quan arriben a 0.|Ejemplos: microondas, semáforo para peatones, cohetes, fin de año. Pregunta qué pasa cuando llegan a 0." },
      { id: 's4', k: 'anim', t: "Un compte enrere|Una cuenta atrás", anim: 'g6count', x: "Temps a 5; repeteix 5 vegades: espera 1 segon i suma -1.|Tiempo a 5; repite 5 veces: espera 1 segundo y suma -1.",
        nota: "L'animació va més de pressa que un rellotge de veritat. Pregunta quant duraria de debò (5 segons).|La animación va más deprisa que un reloj de verdad. Pregunta cuánto duraría de verdad (5 segundos)." },
      { id: 's5', k: 'media', t: "5, 4, 3, 2, 1… Ja!|5, 4, 3, 2, 1… ¡Ya!", x: "Dins del bucle: digues, espera, resta.|Dentro del bucle: di, espera, resta.",
        media: { k: 'stage', w: { bg: 'escenari', sprites: [{ id: 'numi', art: 'numi', x: 0, y: -40, size: 130 }], vars: ['temps'] }, prog: '@numi flag{ setv:temps,5 rep:5{ say:$temps wait:1 chv:temps,-1 } say:"Ja!|¡Ya!",1.5 }', varNames: VN, time: 7 },
        nota: "Compteu en veu alta amb en Numi. Pregunta: què passaria si poséssim el «digues» després del «suma -1»?|Contad en voz alta con Numi. Pregunta: ¿qué pasaría si pusiéramos el «di» después del «suma -1»?" },
      { id: 's6', k: 'media', t: "Dos guions alhora|Dos guiones a la vez", x: "En Numi compta; el gat i la poma continuen. A 0: atura tot.|Numi cuenta; el gato y la manzana siguen. En 0: para todo.",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'gat', art: 'gat', x: -200, y: -120 }, { id: 'poma', art: 'poma', x: 0, y: 150 }, { id: 'numi', art: 'numi', x: 170, y: 40, size: 80 }], vars: ['punts', 'temps'] }, prog: `${GAT} ${POMA} @numi flag{ setv:temps,6 rep:6{ wait:1 chv:temps,-1 } say:"${TEMPS}" stop:all }`, varNames: VN, time: 8 },
        nota: "Fes notar els dos marcadors: punts puja quan el gat atrapa la poma i temps baixa sol. Són guions diferents que funcionen alhora.|Haz notar los dos marcadores: puntos sube cuando el gato atrapa la manzana y tiempo baja solo. Son guiones diferentes que funcionan a la vez." },
      { id: 's7', k: 'anim', t: "El cronòmetre|El cronómetro", anim: 'g6timer', x: "Compta cap amunt tot sol. «Posa el cronòmetre a zero» el fa començar de nou.|Cuenta hacia arriba solo. «Pon el cronómetro a cero» lo hace empezar de nuevo.",
        nota: "Pregunta quan s'ha de posar a zero per saber quant triga el cotxe: quan surt, no abans.|Pregunta cuándo se tiene que poner a cero para saber cuánto tarda el coche: cuando sale, no antes." },
      { id: 's8', k: 'concepte', t: "Enrere o endavant?|¿Hacia atrás o hacia delante?", punts: ["Compte enrere: de 10 a 0. Per posar un límit de temps.|Cuenta atrás: de 10 a 0. Para poner un límite de tiempo.", "Cronòmetre: de 0 cap amunt. Per saber quant has trigat.|Cronómetro: de 0 hacia arriba. Para saber cuánto has tardado.", "Tots dos compten segons.|Los dos cuentan segundos."],
        nota: "Demana un exemple de cada: el temps d'un examen (enrere) i una cursa (endavant).|Pide un ejemplo de cada: el tiempo de un examen (hacia atrás) y una carrera (hacia delante).", pic: "img/ment/rel.webp" },
      { id: 's9', k: 'media', t: "Compte: falta l'espera|Cuidado: falta la espera", x: "Sense «espera 1 segon», el compte enrere de 10 segons s'acaba en un instant.|Sin «espera 1 segundo», la cuenta atrás de 10 segundos se acaba en un instante.",
        media: { k: 'stage', w: { bg: 'escenari', sprites: [{ id: 'numi', art: 'numi', x: 0, y: -40, size: 130 }], vars: ['temps'] }, prog: '@numi flag{ setv:temps,10 wait:1 rep:10{ chv:temps,-1 } say:"Ja?|¿Ya?",2 }', varNames: VN, time: 4 },
        nota: "Mireu el marcador: passa de 10 a 0 gairebé de cop. Pregunta quin bloc falta i on va.|Mirad el marcador: pasa de 10 a 0 casi de golpe. Pregunta qué bloque falta y dónde va." },
      { id: 's10', k: 'activitat', t: "El rellotge i el recol·lector|El reloj y el recolector", timer: 12, punts: ["Rellotge: 10, 9, 8… picant a la taula cada segon.|Reloj: 10, 9, 8… picando en la mesa cada segundo.", "Recol·lector: pinces al got, d'una en una.|Recolector: pinzas en el vaso, de una en una.", "Marcador: a 0, compta els punts.|Marcador: en 0, cuenta los puntos.", "Ronda 2: cronòmetre, quant trigues a posar-ne 10?|Ronda 2: cronómetro, ¿cuánto tardas en meter 10?"],
        nota: "Deixa el rellotge de segons projectat perquè el rellotge del grup no vagi massa de pressa.|Deja el reloj de segundos proyectado para que el reloj del grupo no vaya demasiado deprisa." },
      { id: 's11', k: 'pregunta', t: "Quant de temps?|¿Cuánto tiempo?", x: "Temps a 3; repeteix 3: espera 1 segon, suma -1; digues «Ja!». Quan diu «Ja!»?|Tiempo a 3; repite 3: espera 1 segundo, suma -1; di «¡Ya!». ¿Cuándo dice «¡Ya!»?",
        nota: "Resposta: als 3 segons. Si algú diu de seguida, pregunta-li què fa el bloc «espera».|Respuesta: a los 3 segundos. Si alguien dice enseguida, pregúntale qué hace el bloque «espera»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Compte enrere».|Abre la sesión «Cuenta atrás».", "Fes fins al pas «Investiga».|Haz hasta el paso «Investiga».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A «El repte dels 10 segons», que toquin «Ho hem fet!»: ja l'han fet en grup.|En «El reto de los 10 segundos», que toquen «¡Lo hemos hecho!»: ya lo han hecho en grupo." },
      { id: 's13', k: 'repte', t: "Reptes de rellotges|Retos de relojes", timer: 10, punts: ["1. 5, 4, 3, 2, 1… Ja! (màxim 6 blocs)|1. 5, 4, 3, 2, 1… ¡Ya! (máximo 6 bloques)", "2. El rellotge del videojoc de la poma|2. El reloj del videojuego de la manzana", "3. Quant triga el cotxe?|3. ¿Cuánto tarda el coche?", "4. El rellotge que s'atura a 5|4. El reloj que se para en 5"],
        nota: "Al repte 3, el cronòmetre es posa a zero just després del «3, 2, 1…» i abans de moure's.|En el reto 3, el cronómetro se pone a cero justo después del «3, 2, 1…» y antes de moverse." },
      { id: 's14', k: 'activitat', t: "Crea: contrarellotge al bosc|Crea: contrarreloj en el bosque", timer: 5, punts: ["La papallona vola; tocar-la suma punts.|La mariposa vuela; tocarla suma puntos.", "En Numi fa el compte enrere.|Numi hace la cuenta atrás.", "A 0: un missatge i atura tot.|En 0: un mensaje y para todo."],
        nota: "Que s'intercanviïn els videojocs: el company/a diu si el temps és massa curt o massa llarg.|Que se intercambien los videojuegos: el compañero/a dice si el tiempo es demasiado corto o demasiado largo." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Compte enrere: temps a 10 i, 10 vegades, espera 1 segon i suma -1.|Cuenta atrás: tiempo a 10 y, 10 veces, espera 1 segundo y suma -1.", "El rellotge té el seu guió i funciona alhora.|El reloj tiene su guion y funciona a la vez.", "El cronòmetre compta cap amunt; es posa a zero en sortir.|El cronómetro cuenta hacia arriba; se pone a cero al salir."],
        nota: "Pregunta: punts, vides i temps. Quina variable té gairebé cada videojoc que coneixeu?|Pregunta: puntos, vidas y tiempo. ¿Qué variable tiene casi cada videojuego que conocéis?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què va dins del bucle del compte enrere?|¿Qué va dentro del bucle de la cuenta atrás?", "10 salts: compte enrere o cronòmetre?|10 saltos: ¿cuenta atrás o cronómetro?"],
        nota: "La setmana vinent és el projecte de la mascota: avisa que pensin com seria la seva.|La semana que viene es el proyecto de la mascota: avisa que piensen cómo sería la suya." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el rellotge, el recol·lector i el marcador|Tarjetas: el reloj, el recolector y el marcador", k: 'targetes',
        intro: "Un paquet per grup de 3. Cada targeta de paper té el seu «guió»: llegiu-lo abans de començar. Les tres targetes de paper funcionen alhora.|Un paquete por grupo de 3. Cada tarjeta de papel tiene su «guion»: leedlo antes de empezar. Las tres tarjetas de papel funcionan a la vez.",
        items: [
          { t: "⏳ Rellotge · posa temps a 10 · repeteix 10: espera 1 segon, temps -1 · a 0: «S'ha acabat el temps!»|⏳ Reloj · pon tiempo a 10 · repite 10: espera 1 segundo, tiempo -1 · en 0: «¡Se acabó el tiempo!»", n: 1 },
          { t: "🧺 Recol·lector · per sempre: agafa una pinça i posa-la al got|🧺 Recolector · por siempre: coge una pinza y métela en el vaso", n: 1 },
          { t: "🔢 Marcador · posa punts a 0 · quan s'acaba el temps: compta les pinces i digues punts|🔢 Marcador · pon puntos a 0 · cuando se acaba el tiempo: cuenta las pinzas y di puntos", n: 1 },
          { t: "⏱️ Ronda 2 · cronòmetre: posa a zero, compta 0, 1, 2… fins que hi ha 10 pinces al got|⏱️ Ronda 2 · cronómetro: pon a cero, cuenta 0, 1, 2… hasta que hay 10 pinzas en el vaso", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la mascota virtual ---------- */
  'g6-4': {
    intro: "Sessió de projecte. L'alumnat programa una mascota virtual feta de variables: la gana puja sola cada segon, la poma la fa baixar i la mascota canvia de cara amb «si gana > 5… si no…». Qui vulgui hi afegeix una segona variable (l'alegria) amb la pilota. Primer dissenyen la mascota en paper, després la construeixen a trossos (gana, menjar, cara, alegria) i, al final, un company/a la cuida i proposa una millora. Valora el pla i la prova tant com el resultat.|Sesión de proyecto. El alumnado programa una mascota virtual hecha de variables: el hambre sube sola cada segundo, la manzana la hace bajar y la mascota cambia de cara con «si hambre > 5… si no…». Quien quiera le añade una segunda variable (la alegría) con la pelota. Primero diseñan la mascota en papel, después la construyen a trozos (hambre, comida, cara, alegría) y, al final, un compañero/a la cuida y propone una mejora. Valora el plan y la prueba tanto como el resultado.",
    claus: [
      "Una variable pot pujar sola amb un guió: per sempre, espera 1 segon i suma 1.|Una variable puede subir sola con un guion: por siempre, espera 1 segundo y suma 1.",
      "Un botó (un personatge que es toca) pot fer baixar la variable: suma un número negatiu.|Un botón (un personaje que se toca) puede hacer bajar la variable: suma un número negativo.",
      "Amb «si gana > 5… si no…», el vestit depèn del valor de la variable.|Con «si hambre > 5… si no…», el disfraz depende del valor de la variable.",
      "Un projecte gran es fa a trossos i cada tros es prova abans del següent.|Un proyecto grande se hace a trozos y cada trozo se prueba antes del siguiente."
    ],
    prev: [
      "Variables, «posa» i «suma», i les comparacions =, > i < (sessions 1 i 2).|Variables, «pon» y «suma», y las comparaciones =, > y < (sesiones 1 y 2).",
      "Un guió que repeteix amb «espera 1 segon» (sessió 3).|Un guion que repite con «espera 1 segundo» (sesión 3).",
      "«Si… si no» i canviar de vestit (unitats 2 i 5).|«Si… si no» y cambiar de disfraz (unidades 2 y 5)."
    ],
    faq: [
      ["Per què la gana puja tan de pressa?|¿Por qué el hambre sube tan deprisa?", "Falta «espera 1 segon» dins del «per sempre»: sense espera, suma 1 a cada fotograma, 30 cada segon.|Falta «espera 1 segundo» dentro del «por siempre»: sin espera, suma 1 en cada fotograma, 30 cada segundo."],
      ["Quin número té cada cara de la mascota?|¿Qué número tiene cada cara de la mascota?", "1 contenta, 2 té gana, 3 dorm i 4 trista. Toca el número del bloc «posa el vestit» per canviar-lo.|1 contenta, 2 tiene hambre, 3 duerme y 4 triste. Toca el número del bloque «pon el disfraz» para cambiarlo."],
      ["La gana es fa negativa: és un error?|El hambre se hace negativa: ¿es un error?", "No té sentit, però no trenca el programa. Ho pots arreglar amb un «si gana < 0: posa gana a 0».|No tiene sentido, pero no rompe el programa. Lo puedes arreglar con un «si hambre < 0: pon hambre a 0»."],
      ["Puc canviar el 5 de «gana > 5»?|¿Puedo cambiar el 5 de «hambre > 5»?", "Sí, toca el número. Mira fins on arriba la gana al marcador: si poses un número que no arriba mai, la cara no canviarà.|Sí, toca el número. Mira hasta dónde llega el hambre en el marcador: si pones un número al que no llega nunca, la cara no cambiará."],
      ["Com afegeixo l'alegria?|¿Cómo añado la alegría?", "Fes un altre guió a la mascota que la faci baixar sola i programa la pilota perquè, en tocar-la, sumi alegria. Després, una cara trista si alegria < 3.|Haz otro guion en la mascota que la haga bajar sola y programa la pelota para que, al tocarla, sume alegría. Después, una cara triste si alegría < 3."],
      ["On és la mascota que he fet?|¿Dónde está la mascota que he hecho?", "Quan passa la comprovació i toques «Desa-ho i continua», queda a «Projectes» i es pot ensenyar a casa.|Cuando pasa la comprobación y tocas «Guárdalo y continúa», queda en «Proyectos» y se puede enseñar en casa."]
    ],
    tec: [
      ["El marcador de la variable no surt a l'escenari.|El marcador de la variable no sale en el escenario.", "Surt a dalt a l'esquerra quan el repte té variables. Si no es veu, toqueu el botó de tornar a començar (la fletxa rodona) o feu la finestra més gran.|Sale arriba a la izquierda cuando el reto tiene variables. Si no se ve, tocad el botón de volver a empezar (la flecha redonda) o haced la ventana más grande."],
      ["En tocar el text del «digues» no troben la variable.|Al tocar el texto del «di» no encuentran la variable.", "A la finestra que s'obre, sota el quadre per escriure, hi ha els botons de les variables del repte (punts, vides…). Cal tocar-ne un, no escriure'n el nom.|En la ventana que se abre, debajo del cuadro para escribir, están los botones de las variables del reto (puntos, vidas…). Hay que tocar uno, no escribir su nombre."],
      ["Per escriure un número negatiu (-1) no troben el signe menys.|Para escribir un número negativo (-1) no encuentran el signo menos.", "A l'ordinador és la tecla del guionet (-), abans del número. Si el teclat de la tauleta o del mòbil no el mostra, feu aquell repte a l'ordinador.|En el ordenador es la tecla del guion (-), antes del número. Si el teclado de la tableta o del móvil no lo muestra, haced ese reto en el ordenador."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No s'ha desat el projecte.|No se ha guardado el proyecto.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si s'ha sortit abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se ha salido antes, hay que volver a hacer «Comprueba»."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Mascotes: si algú explica que ha perdut una mascota o que una mascota de casa està malalta, escolta'l amb calma i, si cal, parla-ho en privat amb la família.|Mascotas: si alguien explica que ha perdido una mascota o que una mascota de casa está enferma, escúchale con calma y, si hace falta, háblalo en privado con la familia.",
      "Prova amb el company/a: es comenta la mascota, no la persona, i sempre primer una cosa bona.|Prueba con el compañero/a: se comenta la mascota, no la persona, y siempre primero una cosa buena."
    ],
    extra: [
      "Afegir una tercera variable (son) i un botó que posi la mascota a dormir (vestit 3).|Añadir una tercera variable (sueño) y un botón que ponga la mascota a dormir (disfraz 3).",
      "Evitar la gana negativa amb un «si gana < 0: posa gana a 0».|Evitar el hambre negativa con un «si hambre < 0: pon hambre a 0».",
      "Fer que la mascota digui «Tinc molta gana!» quan la gana passa de 8.|Hacer que la mascota diga «¡Tengo mucha hambre!» cuando el hambre pasa de 8."
    ],
    trans: [
      "Recull tota la unitat 6: variables que pugen soles, botons que les fan baixar i comparacions.|Recoge toda la unidad 6: variables que suben solas, botones que las hacen bajar y comparaciones.",
      "Unitat 7: l'atzar i els clons per fer videojocs que canvien cada vegada.|Unidad 7: el azar y los clones para hacer videojuegos que cambian cada vez.",
      "Ciències naturals: les necessitats dels éssers vius (menjar, descans, companyia) i la cura dels animals.|Ciencias naturales: las necesidades de los seres vivos (comida, descanso, compañía) y el cuidado de los animales."
    ],
    obj: [
      "L'alumne/a planifica en paper una mascota virtual: variables, què les fa pujar i baixar, i quan canvia de vestit.|El alumno/a planifica en papel una mascota virtual: variables, qué las hace subir y bajar, y cuándo cambia de disfraz.",
      "L'alumne/a programa una variable que puja sola amb el temps i botons que la fan baixar.|El alumno/a programa una variable que sube sola con el tiempo y botones que la hacen bajar.",
      "L'alumne/a fa que un personatge canviï de vestit segons el valor d'una variable amb «si… si no…» i una comparació.|El alumno/a hace que un personaje cambie de disfraz según el valor de una variable con «si… si no…» y una comparación.",
      "L'alumne/a construeix un projecte a trossos, el prova amb un company/a i el millora.|El alumno/a construye un proyecto a trozos, lo prueba con un compañero/a y lo mejora."
    ],
    comp: [
      "Competència digital (CD5): crear un projecte interactiu propi amb diverses variables|Competencia digital (CD5): crear un proyecto interactivo propio con varias variables",
      "Pensament computacional: descomposició, estat d'un personatge i condicions amb variables|Pensamiento computacional: descomposición, estado de un personaje y condiciones con variables",
      "Matemàtiques: comparar quantitats i preveure com canvien amb el temps|Matemáticas: comparar cantidades y prever cómo cambian con el tiempo",
      "Valors i ciutadania: tenir cura d'algú i donar comentaris amables i útils|Valores y ciudadanía: cuidar de alguien y dar comentarios amables y útiles"
    ],
    vocab: [
      ["Mascota virtual|Mascota virtual", "Un personatge de pantalla que cal cuidar: té variables que canvien.|Un personaje de pantalla que hay que cuidar: tiene variables que cambian."],
      ["Estat|Estado", "Com està un personatge ara mateix (amb gana, content, trist), segons les seves variables.|Cómo está un personaje ahora mismo (con hambre, contento, triste), según sus variables."],
      ["Botó|Botón", "Un personatge que, quan el toques, canvia una variable.|Un personaje que, cuando lo tocas, cambia una variable."],
      ["Descompondre|Descomponer", "Partir un projecte gran en trossos petits que es fan d'un en un.|Partir un proyecto grande en trozos pequeños que se hacen de uno en uno."],
      ["Provar i millorar|Probar y mejorar", "Fer que algú faci servir el projecte i canviar-lo segons el que passa.|Hacer que alguien use el proyecto y cambiarlo según lo que pasa."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la mascota virtual»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la mascota virtual»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors, i la fitxa de disseny de la mascota per alumne/a|Lápiz y colores, y la ficha de diseño de la mascota por alumno/a"
      ],
      imprimir: ["Fitxa de disseny: la meva mascota virtual|Ficha de diseño: mi mascota virtual", "Targetes de prova per al company/a|Tarjetas de prueba para el compañero/a"],
      prep: [
        "El dia abans (10 min): imprimir una fitxa de disseny per alumne/a i les targetes de prova (una per parella).|El día antes (10 min): imprimir una ficha de diseño por alumno/a y las tarjetas de prueba (una por pareja).",
        "El dia abans (15 min): fer tu el projecte i provar la mascota de la caseta (pas «Prova-la») per poder-la ensenyar projectada.|El día antes (15 min): hacer tú el proyecto y probar la mascota de la caseta (paso «Pruébala») para poder enseñarla proyectada.",
        "Abans de classe (5 min): pensar parelles per a la prova final: millor amb algú que no segui al costat.|Antes de clase (5 min): pensar parejas para la prueba final: mejor con alguien que no se siente al lado.",
        "Abans de classe (5 min): obrir la presentació i deixar la sessió iniciada als ordinadors.|Antes de clase (5 min): abrir la presentación y dejar la sesión iniciada en los ordenadores."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: el racó dels petits|Bienvenida: el rincón de los pequeños", fase: 'inici',
        fa: "Repassa les tres variables de la unitat (punts, vides, temps). Presenta el projecte: una mascota virtual per al racó dels petits de la fira. Pregunta què necessita una mascota de veritat i què podria canviar amb el temps.|Repasa las tres variables de la unidad (puntos, vidas, tiempo). Presenta el proyecto: una mascota virtual para el rincón de los pequeños de la feria. Pregunta qué necesita una mascota de verdad y qué podría cambiar con el tiempo.",
        diu: [
          "Quines tres variables hem fet servir aquesta unitat? (punts, vides i temps)|¿Qué tres variables hemos usado esta unidad? (puntos, vidas y tiempo)",
          "Quina baixa sola amb el temps? (el temps del compte enrere) I n'hi podria haver una que pugi sola?|¿Cuál baja sola con el tiempo? (el tiempo de la cuenta atrás) ¿Y podría haber una que suba sola?",
          "Si tens una mascota, què li passa si no menja? (té gana) I si no surt a passejar? (s'avorreix)|Si tienes una mascota, ¿qué le pasa si no come? (tiene hambre) ¿Y si no sale a pasear? (se aburre)",
          "Cadascuna d'aquestes coses podria ser una variable de la mascota virtual.|Cada una de estas cosas podría ser una variable de la mascota virtual."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Com funciona una mascota virtual|Cómo funciona una mascota virtual", fase: 'teoria',
        fa: "Mostra l'animació de la mascota i les demos tros a tros: la gana que puja sola i la poma que la fa baixar amb el canvi de cara. Llegiu junts la regla «si gana > 3… si no…» amb valors concrets. Acaba amb l'error de la gana negativa i la llista dels vestits.|Muestra la animación de la mascota y las demos trozo a trozo: el hambre que sube sola y la manzana que la hace bajar con el cambio de cara. Leed juntos la regla «si hambre > 3… si no…» con valores concretos. Termina con el error del hambre negativa y la lista de los disfraces.",
        diu: [
          "Per què la gana puja tota sola? (un guió amb «per sempre» i «espera» hi suma 1)|¿Por qué el hambre sube sola? (un guion con «por siempre» y «espera» le suma 1)",
          "Si la gana val 2, quina cara posa? (contenta) I si val 5? (té gana, perquè 5 > 3)|Si el hambre vale 2, ¿qué cara pone? (contenta) ¿Y si vale 5? (tiene hambre, porque 5 > 3)",
          "Què passa quan es toca la poma? (la gana baixa 3 i la cara pot canviar)|¿Qué pasa cuando se toca la manzana? (el hambre baja 3 y la cara puede cambiar)",
          "Té sentit una gana de -6? Com ho evitaríeu? (si gana < 0, posa gana a 0)|¿Tiene sentido un hambre de -6? ¿Cómo lo evitaríais? (si hambre < 0, pon hambre a 0)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla de la mascota|El plan de la mascota", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de disseny: dibuix i nom, dues variables, què les fa pujar soles, quin botó les fa baixar i quina cara posa i quan (amb una comparació). Als últims 3 minuts, en parelles, s'expliquen el pla i el company/a fa una pregunta.|Cada alumno/a rellena la ficha de diseño: dibujo y nombre, dos variables, qué las hace subir solas, qué botón las hace bajar y qué cara pone y cuándo (con una comparación). En los últimos 3 minutos, por parejas, se explican el plan y el compañero/a hace una pregunta.",
        diu: [
          "La teva regla de la cara, té un número? Més gran o més petit que quant?|Tu regla de la cara, ¿tiene un número? ¿Mayor o menor que cuánto?",
          "Cada quant puja la gana? Massa de pressa i els petits no podran cuidar-la!|¿Cada cuánto sube el hambre? ¡Demasiado deprisa y los pequeños no podrán cuidarla!",
          "Quin botó fa baixar cada variable?|¿Qué botón hace bajar cada variable?",
          "Company/a: fes una pregunta sobre el pla que no t'hagi quedat clara.|Compañero/a: haz una pregunta sobre el plan que no te haya quedado clara."
        ],
        slides: ['s9'], app: "Cap: activitat amb la fitxa de disseny.|Ninguna: actividad con la ficha de diseño.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 10, t: "A l'ordinador: descobreix, prova i investiga|En el ordenador: descubre, prueba e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa els passos fins a «Investiga». Al pas «El pla de la mascota», que toquin «Ho hem fet!»: ja tenen la fitxa. Al pas de provar la mascota de la caseta, que mirin com canvien les dues variables i la cara.|Cada alumno/a hace los pasos hasta «Investiga». En el paso «El plan de la mascota», que toquen «¡Lo hemos hecho!»: ya tienen la ficha. En el paso de probar la mascota de la caseta, que miren cómo cambian las dos variables y la cara.",
        diu: [
          "Quan es posa trista la mascota de la caseta? Quina variable ho decideix? (quan l'alegria és menor que 3)|¿Cuándo se pone triste la mascota de la caseta? ¿Qué variable lo decide? (cuando la alegría es menor que 3)",
          "Amb gana 6 i «si gana > 5», quin vestit porta? (el 2)|Con hambre 6 y «si hambre > 5», ¿qué disfraz lleva? (el 2)",
          "A Investiga: la gana arriba mai a 50? (no, per això no canvia mai la cara)|En Investiga: ¿el hambre llega alguna vez a 50? (no, por eso no cambia nunca la cara)"
        ],
        slides: ['s10'], app: "De «La missió» a «Investiga»: la pregunta de repàs, les dues històries, les targetes de «Descobreix», «El pla de la mascota», ordenar els trossos, provar la mascota de la caseta, la pregunta del vestit i la mascota que mai no té gana.|De «La misión» a «Investiga»: la pregunta de repaso, las dos historias, las tarjetas de «Descubre», «El plan de la mascota», ordenar los trozos, probar la mascota de la caseta, la pregunta del disfraz y la mascota que nunca tiene hambre.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: la mascota, tros a tros|Retos: la mascota, trozo a trozo", fase: 'ordinador',
        fa: "Feu la pausa activa i deixa'ls fer els quatre trossos. Insisteix que cada tros es prova abans de passar al següent. Qui acabi abans, comença el projecte.|Haced la pausa activa y deja que hagan los cuatro trozos. Insiste en que cada trozo se prueba antes de pasar al siguiente. Quien termine antes, empieza el proyecto.",
        diu: [
          "El tros 1 funciona? Com ho saps? (el marcador puja 1 cada segon)|¿El trozo 1 funciona? ¿Cómo lo sabes? (el marcador sube 1 cada segundo)",
          "A la poma: quin número poses a «suma a gana»? (-3)|En la manzana: ¿qué número pones en «suma a hambre»? (-3)",
          "Al tros 3, quin vestit va al «si» i quin al «si no»? (2 al si, 1 al si no)|En el trozo 3, ¿qué disfraz va en el «si» y cuál en el «si no»? (2 en el si, 1 en el si no)",
          "Si un tros no funciona, avancem? (no: primer l'arreglem)|Si un trozo no funciona, ¿avanzamos? (no: primero lo arreglamos)"
        ],
        slides: ['s11'], app: "«Pausa activa» i els quatre trossos: la gana puja sola, el menjar, la cara i l'alegria.|«Pausa activa» y los cuatro trozos: el hambre sube sola, la comida, la cara y la alegría.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 13, t: "Crea: la meva mascota virtual|Crea: mi mascota virtual", fase: 'crea',
        fa: "Cada alumne/a construeix la seva mascota a partir del pla (8 minuts). Després, prova per parelles amb les targetes de prova (5 minuts): el company/a la cuida durant un minut, respon les preguntes de la targeta i diu una cosa que li ha agradat i una idea per millorar-la. L'autor/a fa un canvi i la desa.|Cada alumno/a construye su mascota a partir del plan (8 minutos). Después, prueba por parejas con las tarjetas de prueba (5 minutos): el compañero/a la cuida durante un minuto, responde las preguntas de la tarjeta y dice una cosa que le ha gustado y una idea para mejorarla. El autor/a hace un cambio y la guarda.",
        diu: [
          "Segueix el teu pla: quin tros fas primer? (la gana que puja sola)|Sigue tu plan: ¿qué trozo haces primero? (el hambre que sube sola)",
          "Has provat la cara amb la gana alta i baixa?|¿Has probado la cara con el hambre alta y baja?",
          "Quan proves la mascota d'un company/a: primer una cosa que t'agrada, després una idea.|Cuando pruebas la mascota de un compañero/a: primero una cosa que te gusta, después una idea.",
          "Quin canvi has fet després de la prova?|¿Qué cambio has hecho después de la prueba?"
        ],
        slides: ['s12', 's13'], app: "Pas «Crea»: La meva mascota virtual (es desa a «Projectes»).|Paso «Crea»: Mi mascota virtual (se guarda en «Proyectos»).", org: "Individual i per parelles|Individual y por parejas" },
      { min: 4, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Repassa la unitat: punts, vides, temps i mascota. Deixa que facin les preguntes finals. Felicita'ls per la insígnia i fes el tiquet a la porta.|Repasa la unidad: puntos, vidas, tiempo y mascota. Deja que hagan las preguntas finales. Felicítalos por la insignia y haz el ticket en la puerta.",
        diu: [
          "Quina variable faries servir per saber quant falta per acabar? (temps)|¿Qué variable usarías para saber cuánto falta para terminar? (tiempo)",
          "Quin canvi has fet a la mascota després de la prova del company/a?|¿Qué cambio has hecho a la mascota después de la prueba del compañero/a?",
          "Quina variable posaràs al teu videojoc de la unitat 8?|¿Qué variable pondrás en tu videojuego de la unidad 8?"
        ],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["La gana puja massa de pressa (centenars) perquè falta l'espera dins del «per sempre».|El hambre sube demasiado deprisa (cientos) porque falta la espera dentro del «por siempre».",
        "Pregunta: cada quant vols que pugi? Que miri el marcador: quant puja en un segon? Recorda el compte enrere sense espera.|Pregunta: ¿cada cuánto quieres que suba? Que mire el marcador: ¿cuánto sube en un segundo? Recuerda la cuenta atrás sin espera."],
      ["La mascota no canvia mai de cara perquè el número de la comparació és massa gran o massa petit.|La mascota no cambia nunca de cara porque el número de la comparación es demasiado grande o demasiado pequeño.",
        "Que miri fins on arriba la gana al marcador i llegeixi la condició amb aquest número: diu sí alguna vegada?|Que mire hasta dónde llega el hambre en el marcador y lea la condición con este número: ¿dice sí alguna vez?"],
      ["Posa els dos vestits iguals al «si» i al «si no».|Pone los dos disfraces iguales en el «si» y en el «si no».",
        "Pregunta: quina cara ha de fer quan té gana? I quan no? Que digui el número de cada vestit en veu alta abans de canviar-lo.|Pregunta: ¿qué cara tiene que hacer cuando tiene hambre? ¿Y cuando no? Que diga el número de cada disfraz en voz alta antes de cambiarlo."],
      ["Programa la poma dins del guió de la mascota en lloc de triar el personatge poma.|Programa la manzana dentro del guion de la mascota en lugar de elegir el personaje manzana.",
        "Pregunta-li qui toquen els petits per donar menjar. Que triï la poma a les pestanyes de dalt.|Pregúntale a quién tocan los pequeños para dar comida. Que elija la manzana en las pestañas de arriba."],
      ["Vol fer-ho tot de cop i, quan no funciona, no sap quin tros falla.|Quiere hacerlo todo de golpe y, cuando no funciona, no sabe qué trozo falla.",
        "Que torni al pla i provi un sol tros: la gana puja? Quan funcioni, el següent.|Que vuelva al plan y pruebe un solo trozo: ¿el hambre sube? Cuando funcione, el siguiente."],
      ["Al projecte, fa baixar la gana amb «posa gana a 0» a la poma i la mascota no té mai gana.|En el proyecto, hace bajar el hambre con «pon hambre a 0» en la manzana y la mascota no tiene nunca hambre.", "Pregunta: què vol dir «posa»? (esborra i escriu) Si la poma només ha de treure una mica de gana, quin bloc cal?|Pregunta: ¿qué quiere decir «pon»? (borra y escribe) Si la manzana solo tiene que quitar un poco de hambre, ¿qué bloque hace falta?"]
    ],
    diff: {
      mes: "Afegir una tercera variable (son) amb un botó que posi el fons de nit i el vestit 3, o fer que la mascota digui «Tinc molta gana!» quan la gana passa de 8. Evitar la gana negativa amb un «si gana < 0: posa gana a 0».|Añadir una tercera variable (sueño) con un botón que ponga el fondo de noche y el disfraz 3, o hacer que la mascota diga «¡Tengo mucha hambre!» cuando el hambre pasa de 8. Evitar el hambre negativa con un «si hambre < 0: pon hambre a 0».",
      menys: "Fer només la gana i la poma, amb la cara del tros 3 com a extra. Fer servir la fitxa de disseny com a guia i marcar cada tros quan funcioni.|Hacer solo el hambre y la manzana, con la cara del trozo 3 como extra. Usar la ficha de diseño como guía y marcar cada trozo cuando funcione."
    },
    aval: {
      ticket: ["Explica com puja sola la gana de la teva mascota i què la fa baixar.|Explica cómo sube sola el hambre de tu mascota y qué la hace bajar.",
        "Quina regla decideix la cara de la teva mascota? Digues-la amb un número.|¿Qué regla decide la cara de tu mascota? Dila con un número."],
      rubric: [
        ["Pla i descomposició|Plan y descomposición", "Fa un pla complet i el construeix tros a tros, provant cada part.|Hace un plan completo y lo construye trozo a trozo, probando cada parte.", "Fa el pla, però construeix sense seguir-lo o sense provar cada part.|Hace el plan, pero construye sin seguirlo o sin probar cada parte."],
        ["Variables que canvien|Variables que cambian", "La gana puja sola amb espera i un botó la fa baixar; n'afegeix una altra.|El hambre sube sola con espera y un botón la hace bajar; añade otra.", "Fa pujar o baixar la gana, però necessita ajuda amb l'espera o amb el botó.|Hace subir o bajar el hambre, pero necesita ayuda con la espera o con el botón."],
        ["Cara segons la variable|Cara según la variable", "Fa servir «si… si no…» amb una comparació que funciona i ho explica.|Usa «si… si no…» con una comparación que funciona y lo explica.", "Posa els vestits, però la comparació no canvia mai o necessita ajuda per triar el número.|Pone los disfraces, pero la comparación no cambia nunca o necesita ayuda para elegir el número."],
        [
          "Provar amb un company/a|Probar con un compañero/a",
          "Cuida la mascota d'un altre/a, dona una idea concreta i fa un canvi a la seva després de la prova.|Cuida la mascota de otro/a, da una idea concreta y hace un cambio en la suya después de la prueba.",
          "Fa la prova, però no fa cap canvi o dona opinions generals.|Hace la prueba, pero no hace ningún cambio o da opiniones generales."
        ]
      ]
    },
    casa: "A casa, ensenyeu la mascota virtual a la família (és a «Projectes») i deixeu-los que la cuidin. Pregunteu-los quina altra variable hi afegirien i apunteu la idea a la fitxa de disseny.|En casa, enseñad la mascota virtual a la familia (está en «Proyectos») y dejad que la cuiden. Preguntadles qué otra variable añadirían y apuntad la idea en la ficha de diseño.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la mascota virtual|Proyecto: la mascota virtual", x: "Unitat 6 · Sessió 4. Una mascota feta de variables per al racó dels petits.|Unidad 6 · Sesión 4. Una mascota hecha de variables para el rincón de los pequeños.",
        nota: "Explica que avui és dia de projecte: primer el pla en paper, després els blocs, i al final la prova amb un company/a.|Explica que hoy es día de proyecto: primero el plan en papel, después los bloques, y al final la prueba con un compañero/a." },
      { id: 's2', k: 'repas', t: "Tres variables de videojoc|Tres variables de videojuego", punts: ["Punts: pugen quan aconsegueixes alguna cosa.|Puntos: suben cuando consigues algo.", "Vides: baixen a cada xoc; a 0, fi.|Vidas: bajan en cada choque; en 0, fin.", "Temps: baixa sol cada segon.|Tiempo: baja solo cada segundo."],
        nota: "Pregunta quina de les tres s'assembla més a la gana d'una mascota: puja o baixa sola amb el temps.|Pregunta cuál de las tres se parece más al hambre de una mascota: sube o baja sola con el tiempo." },
      { id: 's3', k: 'pregunta', t: "Què necessita una mascota?|¿Qué necesita una mascota?", x: "Si tinguessis una mascota de veritat, què hauries de fer per cuidar-la?|Si tuvieras una mascota de verdad, ¿qué tendrías que hacer para cuidarla?",
        nota: "Apunta les respostes: menjar, aigua, passejar, dormir… Cadascuna podria ser una variable de la mascota virtual.|Apunta las respuestas: comida, agua, pasear, dormir… Cada una podría ser una variable de la mascota virtual." },
      { id: 's4', k: 'anim', t: "Una mascota feta de variables|Una mascota hecha de variables", anim: 'g6pet', x: "La gana puja sola; la poma la fa baixar; la cara depèn del número.|El hambre sube sola; la manzana la hace bajar; la cara depende del número.",
        nota: "Identifiqueu els tres trossos de l'animació: seran els reptes d'avui.|Identificad los tres trozos de la animación: serán los retos de hoy." },
      { id: 's5', k: 'media', t: "Tros 1: la gana puja sola|Trozo 1: el hambre sube sola", x: "Per sempre: espera 1 segon, suma 1 a gana.|Por siempre: espera 1 segundo, suma 1 a hambre.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'] }, prog: GANA, varNames: VN, time: 6 },
        nota: "Pregunta quant valdrà la gana al cap d'un minut (60). És massa? Què hi canviaríeu?|Pregunta cuánto valdrá el hambre al cabo de un minuto (60). ¿Es demasiado? ¿Qué cambiaríais?" },
      { id: 's6', k: 'media', t: "Trossos 2 i 3: la poma i la cara|Trozos 2 y 3: la manzana y la cara", x: "Si gana > 3: vestit 2; si no: vestit 1. La poma resta 3.|Si hambre > 3: disfraz 2; si no: disfraz 1. La manzana resta 3.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'], input: [{ t: 5.5, click: 'poma' }] }, prog: `${GANA} flag{ forever{ if:$gana>3{ costume:2 } else{ costume:1 } } } @poma click{ chv:gana,-3 sound:pop }`, varNames: VN, time: 8 },
        nota: "Para la demo quan la gana val 4 i pregunta quina cara ha de fer. Després, què passa quan es toca la poma.|Para la demo cuando el hambre vale 4 y pregunta qué cara tiene que hacer. Después, qué pasa cuando se toca la manzana." },
      { id: 's7', k: 'media', t: "Els vestits de la mascota|Los disfraces de la mascota", x: "1: contenta · 2: té gana · 3: dorm · 4: trista|1: contenta · 2: tiene hambre · 3: duerme · 4: triste", media: { k: 'stage', w: { bg: "parc", sprites: [{ id: 'mascota', art: "mascota", x: 0, y: -30, size: 150 }] }, prog: "@mascota flag{ forever{ costume:1 say:\"1|1\",1.2 costume:2 say:\"2|2\",1.2 costume:3 say:\"3|3\",1.2 costume:4 say:\"4|4\",1.2 } }", time: 5 }, nota: "Deixa aquesta diapositiva a la vista durant els reptes i el projecte: hauran de triar el número del vestit.|Deja esta diapositiva a la vista durante los retos y el proyecto: tendrán que elegir el número del disfraz." },
      { id: 's8', k: 'media', t: "Compte: una gana negativa|Cuidado: un hambre negativa", x: "Si es toca la poma moltes vegades, la gana baixa de 0.|Si se toca la manzana muchas veces, el hambre baja de 0.",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana'], input: clicks('poma', [1.5, 2, 2.5, 3]) }, prog: `${GANA} @poma click{ chv:gana,-3 sound:pop }`, varNames: VN, time: 5 },
        nota: "Pregunta com ho arreglarien. Una idea: si gana < 0, posa gana a 0. És un repte extra per a qui vulgui.|Pregunta cómo lo arreglarían. Una idea: si hambre < 0, pon hambre a 0. Es un reto extra para quien quiera." },
      { id: 's9', k: 'activitat', t: "El pla de la mascota|El plan de la mascota", timer: 10, punts: ["Dibuix i nom.|Dibujo y nombre.", "Dues variables: què les fa pujar soles?|Dos variables: ¿qué las hace subir solas?", "Quin botó les fa baixar?|¿Qué botón las hace bajar?", "Quina cara posa i quan? Amb un número.|¿Qué cara pone y cuándo? Con un número."],
        nota: "Passeja i comprova que cada regla de cara tingui un número i un signe (>, < o =).|Pasea y comprueba que cada regla de cara tenga un número y un signo (>, < o =)." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Projecte: la mascota virtual».|Abre «Proyecto: la mascota virtual».", "Prova la mascota de la caseta.|Prueba la mascota de la caseta.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas del pla, que toquin «Ho hem fet!». Que tinguin la fitxa al costat de l'ordinador.|En el paso del plan, que toquen «¡Lo hemos hecho!». Que tengan la ficha al lado del ordenador." },
      { id: 's11', k: 'repte', t: "La mascota, tros a tros|La mascota, trozo a trozo", timer: 10, punts: ["1. La gana puja sola|1. El hambre sube sola", "2. El menjar: la poma resta 3|2. La comida: la manzana resta 3", "3. La cara: si gana > 3…|3. La cara: si hambre > 3…", "4. L'alegria amb la pilota|4. La alegría con la pelota"],
        nota: "Cada tros es prova abans de passar al següent. Si un no funciona, no avanceu: mireu el marcador.|Cada trozo se prueba antes de pasar al siguiente. Si uno no funciona, no avancéis: mirad el marcador." },
      { id: 's12', k: 'activitat', t: "Crea: la meva mascota virtual|Crea: mi mascota virtual", timer: 8, punts: ["La gana puja sola cada segon.|El hambre sube sola cada segundo.", "La poma fa baixar la gana.|La manzana hace bajar el hambre.", "Cara de gana quan gana > 5.|Cara de hambre cuando hambre > 5.", "Extra: alegria, pilota, altres vestits.|Extra: alegría, pelota, otros disfraces."],
        nota: "Recorda que el «si gana > 5… si no…» ja hi és; poden canviar el 5 si el seu pla diu un altre número.|Recuerda que el «si hambre > 5… si no…» ya está; pueden cambiar el 5 si su plan dice otro número." },
      { id: 's13', k: 'activitat', t: "Prova-la amb un company/a|Pruébala con un compañero/a", timer: 5, punts: ["Cuida la mascota del company/a durant un minut.|Cuida la mascota del compañero/a durante un minuto.", "Respon les preguntes de la targeta de prova.|Responde las preguntas de la tarjeta de prueba.", "Una cosa que t'agrada i una idea per millorar-la.|Una cosa que te gusta y una idea para mejorarla.", "L'autor/a fa un canvi i la desa.|El autor/a hace un cambio y la guarda."],
        nota: "Modela abans un comentari amable i útil: «M'agrada la cara trista; la gana puja massa de pressa, potser podries esperar 2 segons».|Modela antes un comentario amable y útil: «Me gusta la cara triste; el hambre sube demasiado deprisa, quizá podrías esperar 2 segundos»." },
      { id: 's14', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["Una variable guarda un número que canvia: punts, vides, temps, gana…|Una variable guarda un número que cambia: puntos, vidas, tiempo, hambre…", "«Posa» i «suma»; espera perquè pugi o baixi sola.|«Pon» y «suma»; espera para que suba o baje sola.", "Les comparacions (=, >, <) decideixen què passa.|Las comparaciones (=, >, <) deciden qué pasa."],
        nota: "Pregunta quina variable faran servir al seu videojoc de la unitat 8.|Pregunta qué variable usarán en su videojuego de la unidad 8." },
      { id: 's15', k: 'media', t: "La mascota de la caseta|La mascota de la caseta", x: "Gana, alegria i tres cares. Com la milloraríeu?|Hambre, alegría y tres caras. ¿Cómo la mejoraríais?",
        media: { k: 'stage', w: { bg: 'parc', sprites: PET, vars: ['gana', 'alegria'], input: [...clicks('poma', [4.5]), ...clicks('pilota', [2.2, 5])] }, prog: '@mascota flag{ setv:gana,0 forever{ wait:1 chv:gana,1 } } flag{ setv:alegria,5 forever{ wait:1.5 chv:alegria,-1 } } flag{ forever{ if:$gana>5{ costume:2 } else{ if:$alegria<3{ costume:4 } else{ costume:1 } } } } @poma click{ chv:gana,-3 sound:pop } @pilota click{ chv:alegria,2 sound:boing }', varNames: VN, time: 9 },
        nota: "Celebra els projectes: demana a dos o tres alumnes que expliquin una millora que han fet després de la prova.|Celebra los proyectos: pide a dos o tres alumnos que expliquen una mejora que han hecho después de la prueba." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com puja sola la gana de la teva mascota?|¿Cómo sube sola el hambre de tu mascota?", "Quina regla decideix la cara? Amb un número.|¿Qué regla decide la cara? Con un número."],
        nota: "Felicita'ls per la insígnia «Cuidador/a de mascotes». Guarda les fitxes de disseny: són idees per al videojoc final.|Felicítalos por la insignia «Cuidador/a de mascotas». Guarda las fichas de diseño: son ideas para el videojuego final." }
    ],
    print: [
      { id: 'p1', t: "Fitxa de disseny: la meva mascota virtual|Ficha de diseño: mi mascota virtual", k: 'fitxa',
        intro: "Omple la fitxa abans de programar. Al costat de cada pregunta hi ha un exemple de resposta.|Rellena la ficha antes de programar. Al lado de cada pregunta hay un ejemplo de respuesta.",
        items: [
          { q: "Com es diu la teva mascota? Dibuixa-la.|¿Cómo se llama tu mascota? Dibújala.", sol: "Exemple: la Bruna, un drac verd petit.|Ejemplo: Bruna, un dragón verde pequeño." },
          { q: "Variable 1 i variable 2: com es diuen?|Variable 1 y variable 2: ¿cómo se llaman?", sol: "Exemple: gana i alegria.|Ejemplo: hambre y alegría." },
          { q: "Com puja cada variable tota sola? Cada quants segons?|¿Cómo sube cada variable ella sola? ¿Cada cuántos segundos?", sol: "Exemple: la gana puja 1 cada segon; l'alegria baixa 1 cada 2 segons.|Ejemplo: el hambre sube 1 cada segundo; la alegría baja 1 cada 2 segundos." },
          { q: "Quin botó fa canviar cada variable? Quant?|¿Qué botón hace cambiar cada variable? ¿Cuánto?", sol: "Exemple: la poma, gana -3; la pilota, alegria +2.|Ejemplo: la manzana, hambre -3; la pelota, alegría +2." },
          { q: "Quina cara posa i quan? Escriu la regla amb un número.|¿Qué cara pone y cuándo? Escribe la regla con un número.", sol: "Exemple: si gana > 5 → vestit 2 (té gana); si no → vestit 1 (contenta).|Ejemplo: si hambre > 5 → disfraz 2 (tiene hambre); si no → disfraz 1 (contenta)." }
        ] },
      { id: 'p2', t: "Targetes de prova per al company/a|Tarjetas de prueba para el compañero/a", k: 'targetes',
        intro: "Una targeta per parella. Qui prova la mascota respon les preguntes i ho explica a l'autor/a.|Una tarjeta por pareja. Quien prueba la mascota responde las preguntas y se lo explica al autor/a.",
        items: [
          { t: "🍎 Quan he tocat el menjar, la variable ha baixat? Quant?|🍎 Cuando he tocado la comida, ¿la variable ha bajado? ¿Cuánto?", n: 1 },
          { t: "😋 He vist la cara de gana? Quan ha sortit?|😋 ¿He visto la cara de hambre? ¿Cuándo ha salido?", n: 1 },
          { t: "⏱️ La gana puja massa de pressa, massa a poc a poc o bé?|⏱️ ¿El hambre sube demasiado deprisa, demasiado despacio o bien?", n: 1 },
          { t: "💚 Una cosa que m'agrada de la teva mascota…|💚 Una cosa que me gusta de tu mascota…", n: 1 },
          { t: "💡 Una idea per millorar-la…|💡 Una idea para mejorarla…", n: 1 }
        ] }
    ]
  }
  };
})());
