/* ===== Numi Tech · guia del professorat · Tech Creadors · unitat 3 «Interacció» =====
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'].
   Diapositives «media»: l'escenari del curs en marxa (TMEDIA.stage) amb els guions al costat. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Quan toco el personatge… ---------- */
  'g3-1': {
    obj: [
      "L'alumne/a explica què és un esdeveniment i en dona exemples de la vida diària i de l'escenari.|El alumno/a explica qué es un evento y da ejemplos de la vida diaria y del escenario.",
      "L'alumne/a programa un personatge perquè respongui quan algú el toca, amb la capçalera «Quan toco aquest personatge».|El alumno/a programa un personaje para que responda cuando alguien lo toca, con la cabecera «Al tocar este personaje».",
      "L'alumne/a fa servir dos guions en un mateix personatge («Quan comença» i «Quan toco aquest personatge») i diu què fa cadascun.|El alumno/a usa dos guiones en un mismo personaje («Al empezar» y «Al tocar este personaje») y dice qué hace cada uno.",
      "L'alumne/a crea una escena on almenys tres personatges reaccionen de manera diferent quan els toquen.|El alumno/a crea una escena donde al menos tres personajes reaccionan de manera diferente cuando los tocan."
    ],
    comp: [
      "Competència digital (CD5): crear continguts digitals interactius amb programació per blocs|Competencia digital (CD5): crear contenidos digitales interactivos con programación por bloques",
      "Pensament computacional: esdeveniments, guions que esperen i programes que responen a l'usuari|Pensamiento computacional: eventos, guiones que esperan y programas que responden al usuario",
      "Matemàtiques: càlcul mental amb sumes repetides (la mida que creix a cada toc)|Matemáticas: cálculo mental con sumas repetidas (el tamaño que crece en cada toque)",
      "Comunicació oral: descriure causa i efecte («quan passa això, el personatge fa allò»)|Comunicación oral: describir causa y efecto («cuando pasa esto, el personaje hace aquello»)"
    ],
    vocab: [
      ["Esdeveniment|Evento", "Una cosa que passa mentre el programa funciona i que fa començar un guió.|Algo que pasa mientras el programa funciona y que hace empezar un guion."],
      ["Capçalera|Cabecera", "El bloc de dalt d'un guió, que diu quin esdeveniment l'engega.|El bloque de arriba de un guion, que dice qué evento lo pone en marcha."],
      ["Guió|Guion", "Una capçalera i els blocs que té a sota.|Una cabecera y los bloques que tiene debajo."],
      ["Interactiu|Interactivo", "Que respon al que fa qui el fa servir: tocar, prémer, triar.|Que responde a lo que hace quien lo usa: tocar, pulsar, elegir."],
      ["Animació|Animación", "Un programa que es mira: passa igual encara que no toquis res.|Un programa que se mira: pasa igual aunque no toques nada."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb Numi Tech obert a la sessió «Quan toco el personatge…»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cuando toco el personaje…»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Les targetes de guions retallades (un paquet d'11 targetes per grup de 4)|Las tarjetas de guiones recortadas (un paquete de 11 tarjetas por grupo de 4)"],
      imprimir: ["Targetes: personatges amb timbre|Tarjetas: personajes con timbre"],
      prep: ["Imprimir i retallar les targetes. Cada grup de 4 en necessita un paquet; si es plastifiquen, serveixen per a altres cursos.|Imprimir y recortar las tarjetas. Cada grupo de 4 necesita un paquete; si se plastifican, sirven para otros cursos.",
        "Provar la diapositiva del drac (s9) per veure quan es toca sol a la demo.|Probar la diapositiva del dragón (s9) para ver cuándo se toca solo en la demo.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."]
    },
    plan: [
      { min: 5, t: "Benvinguda: animació o interacció?|Bienvenida: ¿animación o interacción?", fase: 'inici',
        fa: "Recorda l'aquari de la unitat 2: era una animació, es mirava. Pregunta quines coses de casa responen quan les toques (el timbre, l'interruptor, la pantalla del mòbil). Presenta la missió: el bosc dels contes, on els personatges dormen fins que algú els toca.|Recuerda el acuario de la unidad 2: era una animación, se miraba. Pregunta qué cosas de casa responden cuando las tocas (el timbre, el interruptor, la pantalla del móvil). Presenta la misión: el bosque de los cuentos, donde los personajes duermen hasta que alguien los toca.",
        diu: ["L'aquari el miràvem. I si els peixos responguessin quan els toqueu?|El acuario lo mirábamos. ¿Y si los peces respondieran cuando los tocáis?", "Quines coses de casa fan alguna cosa només quan les toqueu?|¿Qué cosas de casa hacen algo solo cuando las tocáis?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un esdeveniment?|¿Qué es un evento?", fase: 'teoria',
        fa: "Explica l'esdeveniment amb el timbre i l'animació del gat. Mostra la capçalera «Quan toco aquest personatge» i la demo del gat: abans que el toquin a la demo, que la classe digui «ara!». Després, la demo del drac amb dos guions i la diapositiva de l'error típic (els blocs sota «Quan comença»).|Explica el evento con el timbre y la animación del gato. Muestra la cabecera «Al tocar este personaje» y la demo del gato: antes de que lo toquen en la demo, que la clase diga «¡ahora!». Después, la demo del dragón con dos guiones y la diapositiva del error típico (los bloques bajo «Al empezar»).",
        diu: ["El timbre no sona fins que algú el prem. El gat tampoc no mioula fins que algú el toca.|El timbre no suena hasta que alguien lo pulsa. El gato tampoco maúlla hasta que alguien lo toca.", "Quants guions té el drac? Quin esdeveniment espera cadascun?|¿Cuántos guiones tiene el dragón? ¿Qué evento espera cada uno?", "Si poso el «Miau» sota «Quan comença», quan mioularà?|Si pongo el «Miau» bajo «Al empezar», ¿cuándo maullará?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: atenció a la projecció.|Todavía no: atención a la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Personatges amb timbre|Personajes con timbre", fase: 'desconnectat',
        fa: "Grups de 4. Reparteix les targetes: cada alumne/a en tria dues i les enganxa (o les deixa) davant seu. Tots fan veure que dormen. Per torns, un alumne/a fa d'«usuari» i prova esdeveniments: toca una espatlla, pica de mans, diu «bandera verda»… Els personatges només es mouen si l'esdeveniment és a una de les seves targetes. A la segona ronda, dona a un grup la targeta de l'error: «Quan comença → dic Miau» i pregunta què passa.|Grupos de 4. Reparte las tarjetas: cada alumno/a elige dos y las pone delante. Todos hacen ver que duermen. Por turnos, un alumno/a hace de «usuario» y prueba eventos: toca un hombro, da una palmada, dice «bandera verde»… Los personajes solo se mueven si el evento está en una de sus tarjetas. En la segunda ronda, da a un grupo la tarjeta del error: «Al empezar → digo Miau» y pregunta qué pasa.",
        diu: ["Només us podeu despertar amb l'esdeveniment de la vostra targeta.|Solo os podéis despertar con el evento de vuestra tarjeta.", "Hi ha hagut un esdeveniment que no ha despertat ningú? Per què?|¿Ha habido algún evento que no ha despertado a nadie? ¿Por qué?", "Qui té «Quan comença»? Llavors, què fa quan dic «bandera verda»?|¿Quién tiene «Al empezar»? Entonces, ¿qué hace cuando digo «bandera verde»?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «Personatges amb timbre» poden tocar «Ho hem fet!» perquè ja l'han fet a classe. Al bosc adormit, demana que expliquin què fa cada personatge i per què la roca no fa res (no té cap guió).|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «Personajes con timbre» pueden tocar «¡Lo hemos hecho!» porque ya lo han hecho en clase. En el bosque dormido, pide que expliquen qué hace cada personaje y por qué la roca no hace nada (no tiene ningún guion).",
        diu: ["Per què la roca no fa res quan la toques?|¿Por qué la roca no hace nada cuando la tocas?", "Toca la pestanya del drac: quin guió té?|Toca la pestaña del dragón: ¿qué guion tiene?"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: les preguntes, les dues històries, «Descobreix», ordenar què passa, «Personatges amb timbre» (ja fet), el bosc adormit, la pregunta de la mida del drac i el gat que mioula sol.|Del recuerda hasta «Investiga»: las preguntas, las dos historias, «Descubre», ordenar qué pasa, «Personajes con timbre» (ya hecho), el bosque dormido, la pregunta del tamaño del dragón y el gato que maúlla solo.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: personatges que responen|Retos: personajes que responden", fase: 'ordinador',
        fa: "Feu la pausa activa junts. Recorda com funciona «Comença» (proves tu, tocant) i «Comprova» (la prova toca sola). Deixa'ls fer els quatre reptes. Al del drac, explica que hi ha dues proves: si ningú no el toca, no ha de créixer.|Haced la pausa activa juntos. Recuerda cómo funciona «Empieza» (pruebas tú, tocando) y «Comprueba» (la prueba toca sola). Deja que hagan los cuatro retos. En el del dragón, explica que hay dos pruebas: si nadie lo toca, no tiene que crecer.",
        diu: ["Primer prova-ho tu amb «Comença» i el dit. Quan funcioni, «Comprova».|Primero pruébalo tú con «Empieza» y el dedo. Cuando funcione, «Comprueba».", "A la prova 2 ningú no toca el drac: per què es fa gran el teu?|En la prueba 2 nadie toca el dragón: ¿por qué se hace grande el tuyo?"],
        slides: ['s13', 's14'], app: "«Pausa activa» i els quatre reptes: el gat dormilega, l'ocell i la papallona, el drac que creix i la Tuga.|«Pausa activa» y los cuatro retos: el gato dormilón, el pájaro y la mariposa, el dragón que crece y Tuga.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", fase: 'crea',
        fa: "Cada alumne/a programa almenys tres personatges que responguin de manera diferent. Quan el tinguin, el company/a toca els personatges sense mirar els guions i endevina què hi ha programat.|Cada alumno/a programa al menos tres personajes que respondan de manera diferente. Cuando lo tengan, el compañero/a toca los personajes sin mirar los guiones y adivina qué hay programado.",
        diu: ["Que cada personatge sorprengui d'una manera diferent!|¡Que cada personaje sorprenda de una manera diferente!", "Endevina els blocs del company/a només mirant què fa.|Adivina los bloques del compañero/a solo mirando qué hace."],
        slides: ['s15'], app: "Pas «Crea»: El bosc que es desperta.|Paso «Crea»: El bosque que se despierta.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Digueu-me un esdeveniment de l'escenari i un de la vida real.|Decidme un evento del escenario y uno de la vida real."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa els blocs sota «Quan comença» i espera que el personatge respongui al toc.|Pone los bloques bajo «Al empezar» y espera que el personaje responda al toque.",
        "Pregunta: quan comença aquest guió? Que llegeixi la capçalera en veu alta i decideixi si és l'esdeveniment que vol.|Pregunta: ¿cuándo empieza este guion? Que lea la cabecera en voz alta y decida si es el evento que quiere."],
      ["Programa el personatge equivocat (per exemple, posa els blocs de l'ocell a la papallona).|Programa el personaje equivocado (por ejemplo, pone los bloques del pájaro en la mariposa).",
        "Que miri quina pestanya està marcada a dalt abans de posar blocs. Cada personatge té els seus guions.|Que mire qué pestaña está marcada arriba antes de poner bloques. Cada personaje tiene sus guiones."],
      ["Toca «Comprova» sense haver provat res i no entén què ha fallat.|Toca «Comprueba» sin haber probado nada y no entiende qué ha fallado.",
        "Primer «Comença» i tocar el personatge amb el dit. Si fa el que vol, llavors «Comprova».|Primero «Empieza» y tocar el personaje con el dedo. Si hace lo que quiere, entonces «Comprueba»."],
      ["Al repte del drac, el fa créixer també quan comença, i falla la prova 2.|En el reto del dragón, lo hace crecer también al empezar, y falla la prueba 2.",
        "Pregunta: a la prova 2 ningú no el toca. Quin guió s'executa? Què hi ha en aquell guió que no hi hauria de ser?|Pregunta: en la prueba 2 nadie lo toca. ¿Qué guion se ejecuta? ¿Qué hay en ese guion que no debería estar?"],
      ["A la Tuga posa «mou-te 10» i no arriba a la bandera.|En Tuga pone «muévete 10» y no llega a la bandera.",
        "Que llegeixi l'enunciat: quants passos a cada toc? Quantes vegades la tocaran? Que ho calculi abans de provar.|Que lea el enunciado: ¿cuántos pasos en cada toque? ¿Cuántas veces la tocarán? Que lo calcule antes de probar."]
    ],
    diff: {
      mes: "Afegir a «El bosc que es desperta» un personatge que reaccioni de dues maneres: una quan comença (s'estira) i una altra quan el toquen. O fer que un personatge s'amagui quan el toquen, com si s'espantés.|Añadir a «El bosque que se despierta» un personaje que reaccione de dos maneras: una al empezar (se estira) y otra cuando lo tocan. O hacer que un personaje se esconda cuando lo tocan, como si se asustara.",
      menys: "Treballar amb un sol personatge i un sol bloc al principi («digues»). Tenir a la taula la targeta «Quan em toquen → …» com a recordatori que els blocs van sota aquesta capçalera.|Trabajar con un solo personaje y un solo bloque al principio («di»). Tener en la mesa la tarjeta «Cuando me tocan → …» como recordatorio de que los bloques van bajo esa cabecera."
    },
    aval: {
      ticket: ["Digues un esdeveniment de l'escenari i què fa començar.|Di un evento del escenario y qué hace empezar.", "On poses els blocs perquè un personatge parli quan el toques?|¿Dónde pones los bloques para que un personaje hable cuando lo tocas?"],
      rubric: [
        ["Concepte d'esdeveniment|Concepto de evento", "Explica que un esdeveniment fa començar un guió i en dona exemples propis.|Explica que un evento hace empezar un guion y da ejemplos propios.", "Reconeix el toc com a esdeveniment, però no el relaciona amb la capçalera.|Reconoce el toque como evento, pero no lo relaciona con la cabecera."],
        ["Guions de toc|Guiones de toque", "Posa els blocs a la capçalera correcta i el personatge correcte sense ajuda.|Pone los bloques en la cabecera correcta y el personaje correcto sin ayuda.", "Necessita provar diverses vegades per trobar on van els blocs.|Necesita probar varias veces para encontrar dónde van los bloques."],
        ["Escena interactiva|Escena interactiva", "Tres o més personatges responen de maneres diferents.|Tres o más personajes responden de maneras diferentes.", "Un o dos personatges responen, o tots fan el mateix.|Uno o dos personajes responden, o todos hacen lo mismo."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer l'activitat «Personatges amb timbre»: cadascú escriu dos guions («Quan em toquen l'espatlla → …») i l'altra persona prova els esdeveniments.|En casa, con el móvil, podéis repetir la sesión y hacer la actividad «Personajes con timbre»: cada uno escribe dos guiones («Cuando me tocan el hombro → …») y la otra persona prueba los eventos.",
    slides: [
      { id: 's1', k: 'portada', t: "Quan toco el personatge…|Cuando toco el personaje…", x: "Unitat 3 · Interacció. Avui els personatges del bosc dels contes es despertaran quan els toquis.|Unidad 3 · Interacción. Hoy los personajes del bosque de los cuentos se despertarán cuando los toques.",
        nota: "Presenta la unitat: en quatre sessions passarem de mirar animacions a crear un conte interactiu.|Presenta la unidad: en cuatro sesiones pasaremos de mirar animaciones a crear un cuento interactivo." },
      { id: 's2', k: 'pregunta', t: "Què respon quan el toques?|¿Qué responde cuando lo tocas?", punts: ["El timbre de casa|El timbre de casa", "L'interruptor del llum|El interruptor de la luz", "La pantalla del mòbil|La pantalla del móvil"],
        nota: "Recull més exemples. Fes notar que tots esperen que passi alguna cosa i, llavors, responen.|Recoge más ejemplos. Haz notar que todos esperan que pase algo y, entonces, responden." },
      { id: 's3', k: 'repas', t: "Recordem: l'aquari|Recordemos: el acuario", punts: ["Vestits i «vestit següent» per animar|Disfraces y «disfraz siguiente» para animar", "«Per sempre» i «repeteix»|«Por siempre» y «repite»", "Tot passava sol: era una animació|Todo pasaba solo: era una animación"],
        nota: "Connecta amb la unitat 2: avui hi afegim qui mira l'escenari.|Conecta con la unidad 2: hoy añadimos a quien mira el escenario." },
      { id: 's4', k: 'anim', t: "Un esdeveniment|Un evento", anim: 'g3event', x: "Passa alguna cosa (un toc) i el programa respon (el guió comença).|Pasa algo (un toque) y el programa responde (el guion empieza).",
        nota: "Compara-ho amb el timbre: no sona fins que algú el prem.|Compáralo con el timbre: no suena hasta que alguien lo pulsa." },
      { id: 's5', k: 'concepte', t: "Esdeveniments de l'escenari|Eventos del escenario", punts: ["Quan comença (la bandera verda)|Al empezar (la bandera verde)", "Quan toco aquest personatge|Al tocar este personaje", "Quan premo una tecla (la setmana que ve)|Al pulsar una tecla (la semana que viene)"],
        nota: "La bandera verda ja la coneixen: també és un esdeveniment.|La bandera verde ya la conocen: también es un evento." },
      { id: 's6', k: 'media', t: "El gat que mioula|El gato que maúlla", x: "A la demo, algú toca el gat dues vegades.|En la demo, alguien toca el gato dos veces.",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'gat', art: 'gat', x: 0, y: -50, size: 120 }], input: [{ t: 1, click: 'gat' }, { t: 3.5, click: 'gat' }], time: 6 }, prog: `@gat click{ next say:"Miau!|¡Miau!",1 next }` },
        nota: "Que la classe digui «ara!» quan creguin que el tocaran. Remarca que a cada toc el guió torna a començar.|Que la clase diga «¡ahora!» cuando crean que lo tocarán. Remarca que en cada toque el guion vuelve a empezar." },
      { id: 's7', k: 'pregunta', t: "Prediu|Predice", x: "El drac creix 10 cada vegada que el toques. Comença amb mida 100. El toques 3 vegades: quina mida té?|El dragón crece 10 cada vez que lo tocas. Empieza con tamaño 100. Lo tocas 3 veces: ¿qué tamaño tiene?",
        nota: "Resposta: 130. Cada toc és un esdeveniment nou.|Respuesta: 130. Cada toque es un evento nuevo." },
      { id: 's8', k: 'media', t: "Un personatge, dos guions|Un personaje, dos guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }], input: [{ t: 2.5, click: 'drac' }], time: 6 }, prog: `@drac flag{ say:"Toca'm, si goses!|¡Tócame, si te atreves!",2 } click{ chsize:40 say:"Grrr!|¡Grrr!",2 chsize:-40 }` },
        nota: "Assenyala cada guió quan s'il·lumina. Pregunta quin esdeveniment espera cadascun.|Señala cada guion cuando se ilumina. Pregunta qué evento espera cada uno." },
      { id: 's9', k: 'concepte', t: "Compte!|¡Cuidado!", punts: ["Sota «Quan comença»: passa sol, en començar.|Bajo «Al empezar»: pasa solo, al empezar.", "Sota «Quan toco aquest personatge»: passa quan el toquen.|Bajo «Al tocar este personaje»: pasa cuando lo tocan.", "Abans de posar blocs, mira a quina capçalera vas.|Antes de poner bloques, mira en qué cabecera estás."],
        nota: "Aquest és l'error més freqüent de la sessió: torna-hi quan el vegis a les pantalles.|Este es el error más frecuente de la sesión: vuelve a ello cuando lo veas en las pantallas." },
      { id: 's10', k: 'activitat', t: "Personatges amb timbre|Personajes con timbre", timer: 12, punts: ["Tria dues targetes: són els teus guions.|Elige dos tarjetas: son tus guiones.", "Fes veure que dorms.|Haz ver que duermes.", "Només et mous si passa l'esdeveniment de la teva targeta.|Solo te mueves si pasa el evento de tu tarjeta.", "L'usuari prova esdeveniments, per torns.|El usuario prueba eventos, por turnos."],
        nota: "Tocar l'espatlla amb suavitat. Si algú es mou sense esdeveniment, és un «bug»: el grup el troba.|Tocar el hombro con suavidad. Si alguien se mueve sin evento, es un «bug»: el grupo lo encuentra." },
      { id: 's11', k: 'activitat', t: "Segona ronda: l'error|Segunda ronda: el error", punts: ["Una targeta diu «Quan comença → dic Miau».|Una tarjeta dice «Al empezar → digo Miau».", "Què passa quan dic «bandera verda»?|¿Qué pasa cuando digo «bandera verde»?", "I si et toquen? Respons?|¿Y si te tocan? ¿Respondes?"],
        nota: "Que descobreixin que el personatge mioula en començar i no quan el toquen: és el mateix error que a l'escenari.|Que descubran que el personaje maúlla al empezar y no cuando lo tocan: es el mismo error que en el escenario." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Quan toco el personatge…».|Abre «Cuando toco el personaje…».", "Al bosc adormit, toca tots els personatges.|En el bosque dormido, toca todos los personajes.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Passeja i pregunta per la roca: no té cap guió, per això no fa res.|Pasea y pregunta por la roca: no tiene ningún guion, por eso no hace nada." },
      { id: 's13', k: 'concepte', t: "Comença o Comprova?|¿Empieza o Comprueba?", punts: ["«Comença»: proves tu, tocant amb el dit o el ratolí.|«Empieza»: pruebas tú, tocando con el dedo o el ratón.", "«Comprova»: la prova toca sola i diu si funciona.|«Comprueba»: la prueba toca sola y dice si funciona.", "Si hi ha «Prova 1» i «Prova 2», han de funcionar totes dues.|Si hay «Prueba 1» y «Prueba 2», tienen que funcionar las dos."],
        nota: "Explica-ho abans dels reptes: estalvia moltes preguntes.|Explícalo antes de los retos: ahorra muchas preguntas." },
      { id: 's14', k: 'repte', t: "Reptes|Retos", timer: 10, punts: ["1. El gat dormilega|1. El gato dormilón", "2. L'ocell i la papallona|2. El pájaro y la mariposa", "3. El drac que creix (dues proves)|3. El dragón que crece (dos pruebas)", "4. La Tuga, a tocs|4. Tuga, a toques"],
        nota: "Al 3, si falla la prova 2, pregunta què fa el drac quan ningú no el toca.|En el 3, si falla la prueba 2, pregunta qué hace el dragón cuando nadie lo toca." },
      { id: 's15', k: 'activitat', t: "Crea: el bosc que es desperta|Crea: el bosque que se despierta", timer: 5, x: "Almenys 3 personatges que responguin de manera diferent. Després, el company/a endevina què fa cadascun.|Al menos 3 personajes que respondan de manera diferente. Después, el compañero/a adivina qué hace cada uno.",
        nota: "Celebra les respostes originals: un personatge que s'amaga, un que creix, un que vola…|Celebra las respuestas originales: un personaje que se esconde, uno que crece, uno que vuela…" },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un esdeveniment fa començar un guió.|Un evento hace empezar un guion.", "«Quan toco aquest personatge» respon a cada toc.|«Al tocar este personaje» responde a cada toque.", "Un personatge pot tenir molts guions.|Un personaje puede tener muchos guiones."],
        nota: "Anuncia la setmana vinent: les fletxes del teclat.|Anuncia la semana que viene: las flechas del teclado." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Un esdeveniment de l'escenari i què fa començar.|Un evento del escenario y qué hace empezar.", "On van els blocs perquè un personatge parli quan el toques?|¿Dónde van los bloques para que un personaje hable cuando lo tocas?"],
        nota: "Anota qui encara confon les dues capçaleres.|Anota quién todavía confunde las dos cabeceras." }
    ],
    print: [
      { id: 'p1', t: "Targetes: personatges amb timbre|Tarjetas: personajes con timbre", k: 'targetes',
        intro: "Un paquet per grup de 4. Cada targeta és un guió: l'esdeveniment i el que fa el personatge. La targeta de l'error és per a la segona ronda.|Un paquete por grupo de 4. Cada tarjeta es un guion: el evento y lo que hace el personaje. La tarjeta del error es para la segunda ronda.",
        items: [
          { t: "Quan em toquen l'espatlla → em desperto i dic «Bon dia!» 👆|Cuando me tocan el hombro → me despierto y digo «¡Buenos días!» 👆", n: 2 },
          { t: "Quan sento un picament de mans → faig un salt 👏|Cuando oigo una palmada → doy un salto 👏", n: 2 },
          { t: "Quan sento «bandera verda» → m'estiro 🚩|Cuando oigo «bandera verde» → me estiro 🚩", n: 2 },
          { t: "Quan em toquen el cap → faig «miau» 🐱|Cuando me tocan la cabeza → hago «miau» 🐱", n: 2 },
          { t: "Quan sento el meu nom → saludo amb la mà 👋|Cuando oigo mi nombre → saludo con la mano 👋", n: 2 },
          { t: "Error: Quan comença → dic «Miau» (encara que no em toquin) 🐞|Error: Al empezar → digo «Miau» (aunque no me toquen) 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Les fletxes del teclat ---------- */
  'g3-2': {
    obj: [
      "L'alumne/a programa un guió per a cada fletxa del teclat amb la capçalera «Quan premo la tecla».|El alumno/a programa un guion para cada flecha del teclado con la cabecera «Al pulsar la tecla».",
      "L'alumne/a fa servir «apunta en direcció» amb els valors 90, -90, 0 i 180 i explica cap on mira el personatge.|El alumno/a usa «apunta en dirección» con los valores 90, -90, 0 y 180 y explica hacia dónde mira el personaje.",
      "L'alumne/a explica per què no cal (ni convé) un «per sempre» dins del guió d'una tecla.|El alumno/a explica por qué no hace falta (ni conviene) un «por siempre» dentro del guion de una tecla.",
      "L'alumne/a troba i arregla un error de direcció en un comandament.|El alumno/a encuentra y arregla un error de dirección en un mando."
    ],
    comp: [
      "Competència digital (CD5): programar el control d'un personatge amb el teclat|Competencia digital (CD5): programar el control de un personaje con el teclado",
      "Pensament computacional: esdeveniments de teclat, un guió per esdeveniment i depuració|Pensamiento computacional: eventos de teclado, un guion por evento y depuración",
      "Matemàtiques (sentit espacial): direccions en graus, orientació absoluta (com una brúixola)|Matemáticas (sentido espacial): direcciones en grados, orientación absoluta (como una brújula)",
      "Educació física: lateralitat i orientació a l'espai|Educación física: lateralidad y orientación en el espacio"
    ],
    vocab: [
      ["Tecla|Tecla", "Un botó del teclat; prémer-la és un esdeveniment.|Un botón del teclado; pulsarla es un evento."],
      ["Direcció|Dirección", "Cap on mira el personatge: 90 dreta, -90 esquerra, 0 amunt, 180 avall.|Hacia dónde mira el personaje: 90 derecha, -90 izquierda, 0 arriba, 180 abajo."],
      ["Apuntar|Apuntar", "Fer que el personatge miri cap a una direcció, sense moure'l.|Hacer que el personaje mire hacia una dirección, sin moverlo."],
      ["Comandament|Mando", "Els guions de les tecles que fan moure un personatge.|Los guiones de las teclas que hacen mover a un personaje."],
      ["Mantenir premut|Mantener pulsado", "No deixar anar la tecla: el guió es repeteix sol.|No soltar la tecla: el guion se repite solo."]
    ],
    mat: {
      aula: ["Un ordinador per alumne/a amb la sessió «Les fletxes del teclat»|Un ordenador por alumno/a con la sesión «Las flechas del teclado»", "Projector i la presentació de la sessió|Proyector y la presentación de la sesión",
        "Quatre fulls grans amb els números 0, 90, 180 i -90 enganxats a les quatre parets de l'aula|Cuatro hojas grandes con los números 0, 90, 180 y -90 pegadas en las cuatro paredes del aula"],
      imprimir: ["Targetes: el comandament humà|Tarjetas: el mando humano"],
      prep: ["Enganxar els números de direcció a les parets: 90 a la dreta de la pissarra, -90 a l'esquerra, 0 a la pissarra i 180 al fons.|Pegar los números de dirección en las paredes: 90 a la derecha de la pizarra, -90 a la izquierda, 0 en la pizarra y 180 al fondo.",
        "Imprimir i retallar un paquet de targetes per parella.|Imprimir y recortar un paquete de tarjetas por pareja.",
        "Comprovar que els teclats tenen les fletxes i que el so de l'app està baix.|Comprobar que los teclados tienen las flechas y que el sonido de la app está bajo."]
    },
    plan: [
      { min: 5, t: "Benvinguda: el cavaller i el comandament|Bienvenida: el caballero y el mando", fase: 'inici',
        fa: "Repassa la sessió anterior amb dues preguntes ràpides. Presenta la missió: el cavaller ha de travessar el bosc i el comandament són les fletxes. Pregunta quins aparells es controlen amb fletxes o botons.|Repasa la sesión anterior con dos preguntas rápidas. Presenta la misión: el caballero tiene que cruzar el bosque y el mando son las flechas. Pregunta qué aparatos se controlan con flechas o botones.",
        diu: ["La setmana passada, quin esdeveniment despertava el gat?|La semana pasada, ¿qué evento despertaba al gato?", "Avui l'esdeveniment serà prémer una tecla.|Hoy el evento será pulsar una tecla."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Tecles i direccions|Teclas y direcciones", fase: 'teoria',
        fa: "Mostra l'animació de les tecles i la de les direccions. Tothom dret: quan dius un número, es giren cap a la paret que el porta. Després, la demo de les quatre fletxes i la de l'error del «per sempre».|Muestra la animación de las teclas y la de las direcciones. Todos de pie: cuando dices un número, se giran hacia la pared que lo lleva. Después, la demo de las cuatro flechas y la del error del «por siempre».",
        diu: ["90! -90! 0! 180! On mireu?|¡90! ¡-90! ¡0! ¡180! ¿Hacia dónde miráis?", "Si mires a la dreta i fas «mou-te», cap on vas?|Si miras a la derecha y haces «muévete», ¿hacia dónde vas?", "He premut la fletxa un moment. Per què el cavaller no para?|He pulsado la flecha un momento. ¿Por qué el caballero no para?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El comandament humà|El mando humano", fase: 'desconnectat',
        fa: "Per parelles: un és el comandament, amb les targetes de fletxa; l'altre, el personatge. El comandament ensenya una targeta i el personatge primer es gira cap a la paret del número i després fa un pas. Han d'arribar a un objecte de l'aula. Després de dues missions, canvien. A la tercera, el comandament fa servir la targeta de l'error («← apunta a 90»): què passa?|Por parejas: uno es el mando, con las tarjetas de flecha; el otro, el personaje. El mando enseña una tarjeta y el personaje primero se gira hacia la pared del número y después da un paso. Tienen que llegar a un objeto del aula. Después de dos misiones, cambian. En la tercera, el mando usa la tarjeta del error («← apunta a 90»): ¿qué pasa?",
        diu: ["Primer gira't cap al número i després fes el pas.|Primero gírate hacia el número y después da el paso.", "Fixeu-vos: 90 sempre és la mateixa paret, miris on miris.|Fijaos: 90 siempre es la misma pared, mires donde mires.", "Amb la targeta de l'error, cap on vas quan el comandament diu «esquerra»?|Con la tarjeta del error, ¿hacia dónde vas cuando el mando dice «izquierda»?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 13, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Al «Comandament humà» poden tocar «Ho hem fet!». A la prova del comandament, que facin servir el teclat i que mirin com es gira el cavaller amb la fletxa esquerra.|Avanzan hasta la pausa activa. En el «Mando humano» pueden tocar «¡Lo hemos hecho!». En la prueba del mando, que usen el teclado y que miren cómo se gira el caballero con la flecha izquierda.",
        diu: ["Mantén la fletxa premuda: què passa?|Mantén la flecha pulsada: ¿qué pasa?", "Què fa la tecla espai? Mira el seu guió.|¿Qué hace la tecla espacio? Mira su guion."],
        slides: ['s11'], app: "Del recorda fins a «Investiga»: preguntes, història, «Descobreix», ordenar el guió de l'esquerra, «El comandament humà» (ja fet), provar el comandament, la pregunta del cavaller sense «apunta» i el «per sempre» que no para.|Del recuerda hasta «Investiga»: preguntas, historia, «Descubre», ordenar el guion de la izquierda, «El mando humano» (ya hecho), probar el mando, la pregunta del caballero sin «apunta» y el «por siempre» que no para.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: el comandament|Retos: el mando", fase: 'ordinador',
        fa: "Pausa activa junts. Recorda que els reptes es proven amb el teclat i es comproven amb «Comprova» (les tecles es premen soles). Remarca que al repte de l'ocell cal «mou-te 10 passos», perquè la prova prem les tecles un temps concret.|Pausa activa juntos. Recuerda que los retos se prueban con el teclado y se comprueban con «Comprueba» (las teclas se pulsan solas). Remarca que en el reto del pájaro hace falta «muévete 10 pasos», porque la prueba pulsa las teclas un tiempo concreto.",
        diu: ["Quan va a l'esquerra, el cavaller mira a l'esquerra? Si no, què falta?|Cuando va a la izquierda, ¿el caballero mira a la izquierda? Si no, ¿qué falta?", "Al comandament espatllat, quin número està malament?|En el mando estropeado, ¿qué número está mal?"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: cap a la bandera, la poma i la cistella, l'ocell missatger i el comandament espatllat.|«Pausa activa» y los cuatro retos: hacia la bandera, la manzana y la cesta, el pájaro mensajero y el mando estropeado.", org: "Tot el grup i individual|Todo el grupo e individual" },
      { min: 5, t: "Crea: el comandament de la Flama|Crea: el mando de Flama", fase: 'crea',
        fa: "Programen les quatre fletxes i una sorpresa amb l'espai. Després, intercanvien l'ordinador amb el company/a i proven el comandament de l'altre.|Programan las cuatro flechas y una sorpresa con el espacio. Después, intercambian el ordenador con el compañero/a y prueban el mando del otro.",
        diu: ["Quina sorpresa farà la teva Flama amb l'espai?|¿Qué sorpresa hará tu Flama con el espacio?"],
        slides: ['s14'], app: "Pas «Crea»: El meu personatge amb comandament.|Paso «Crea»: Mi personaje con mando.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum, preguntes finals i tiquet a la porta.|Resumen, preguntas finales y ticket en la puerta.",
        diu: ["Quants guions calen per a les quatre fletxes?|¿Cuántos guiones hacen falta para las cuatro flechas?"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «mou-te -10» per anar a l'esquerra i el personatge camina d'esquena.|Usa «muévete -10» para ir a la izquierda y el personaje camina de espaldas.",
        "Funciona a mitges: pregunta cap on mira. Que provi «apunta en direcció -90» i compari com es veu.|Funciona a medias: pregunta hacia dónde mira. Que pruebe «apunta en dirección -90» y compare cómo se ve."],
      ["Posa un «per sempre» dins del guió de la tecla i el personatge no s'atura.|Pone un «por siempre» dentro del guion de la tecla y el personaje no se para.",
        "Que mantingui la fletxa premuda sense el «per sempre»: el guió ja es repeteix sol mentre la prem.|Que mantenga la flecha pulsada sin el «por siempre»: el guion ya se repite solo mientras la pulsa."],
      ["Confon 0 i 90 (creu que 0 és la dreta).|Confunde 0 y 90 (cree que 0 es la derecha).",
        "Que miri les parets de l'aula o l'animació de la brúixola: 0 és amunt, com les 12 del rellotge.|Que mire las paredes del aula o la animación de la brújula: 0 es arriba, como las 12 del reloj."],
      ["Programa totes les tecles sota la mateixa capçalera.|Programa todas las teclas bajo la misma cabecera.",
        "Cada fletxa té el seu guió: que llegeixi la capçalera de cada guió en veu alta.|Cada flecha tiene su guion: que lea la cabecera de cada guion en voz alta."],
      ["Canvia el número de «mou-te» i després falla «Comprova» a l'ocell.|Cambia el número de «muévete» y después falla «Comprueba» en el pájaro.",
        "La prova prem cada tecla un temps fix: amb passos més petits no hi arriba. Que torni a «mou-te 10 passos».|La prueba pulsa cada tecla un tiempo fijo: con pasos más pequeños no llega. Que vuelva a «muévete 10 pasos»."]
    ],
    diff: {
      mes: "Afegir al comandament de la Flama la tecla espai per fer un «salt»: apunta amunt, avança, espera i torna avall. O canviar de vestit a cada pas perquè sembli que camina.|Añadir al mando de Flama la tecla espacio para hacer un «salto»: apunta arriba, avanza, espera y vuelve abajo. O cambiar de disfraz en cada paso para que parezca que camina.",
      menys: "Començar només amb la fletxa dreta i tenir la brúixola de direccions impresa a la taula. Fer el comandament humà abans de cada repte.|Empezar solo con la flecha derecha y tener la brújula de direcciones impresa en la mesa. Hacer el mando humano antes de cada reto."
    },
    aval: {
      ticket: ["Quin número fa mirar un personatge a l'esquerra? I amunt?|¿Qué número hace mirar a un personaje a la izquierda? ¿Y arriba?", "Per què no cal un «per sempre» al guió d'una fletxa?|¿Por qué no hace falta un «por siempre» en el guion de una flecha?"],
      rubric: [
        ["Direccions|Direcciones", "Fa servir 90, -90, 0 i 180 correctament sense ajuda.|Usa 90, -90, 0 y 180 correctamente sin ayuda.", "Necessita la brúixola per triar el número.|Necesita la brújula para elegir el número."],
        ["Guions de tecla|Guiones de tecla", "Fa un guió per tecla amb «apunta» i «mou-te».|Hace un guion por tecla con «apunta» y «muévete».", "Barreja tecles o fa servir «mou-te» negatiu.|Mezcla teclas o usa «muévete» negativo."],
        ["Depuració|Depuración", "Troba sol/a l'error del comandament espatllat.|Encuentra solo/a el error del mando estropeado.", "El troba amb una pregunta guia.|Lo encuentra con una pregunta guía."]
      ]
    },
    casa: "A casa, feu «El comandament humà»: trieu quina paret és cada direcció i porteu el personatge fins a la cuina només amb fletxes.|En casa, haced «El mando humano»: elegid qué pared es cada dirección y llevad al personaje hasta la cocina solo con flechas.",
    slides: [
      { id: 's1', k: 'portada', t: "Les fletxes del teclat|Las flechas del teclado", x: "El cavaller ha de travessar el bosc i el comandament el tens tu.|El caballero tiene que cruzar el bosque y el mando lo tienes tú.", nota: "Presenta l'objectiu: un personatge que es mou amb les quatre fletxes.|Presenta el objetivo: un personaje que se mueve con las cuatro flechas." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["Un esdeveniment fa començar un guió.|Un evento hace empezar un guion.", "«Quan toco aquest personatge» respon a cada toc.|«Al tocar este personaje» responde a cada toque."], nota: "Dues preguntes ràpides a l'atzar.|Dos preguntas rápidas al azar." },
      { id: 's3', k: 'pregunta', t: "Què es controla amb fletxes?|¿Qué se controla con flechas?", punts: ["Un cotxe teledirigit|Un coche teledirigido", "Els personatges dels videojocs|Los personajes de los videojuegos", "El menú de la tele|El menú de la tele"], nota: "Recull exemples: totes són tecles que fan començar alguna cosa.|Recoge ejemplos: todas son teclas que hacen empezar algo." },
      { id: 's4', k: 'anim', t: "Cada tecla, un esdeveniment|Cada tecla, un evento", anim: 'g3keys', nota: "Fes notar que el guió canvia segons la fletxa que es prem.|Haz notar que el guion cambia según la flecha que se pulsa." },
      { id: 's5', k: 'anim', t: "Cap on mira?|¿Hacia dónde mira?", anim: 'g3dir', x: "90 dreta · -90 esquerra · 0 amunt · 180 avall|90 derecha · -90 izquierda · 0 arriba · 180 abajo", nota: "Tothom dret: digues números i que es girin cap a la paret.|Todos de pie: di números y que se giren hacia la pared." },
      { id: 's6', k: 'media', t: "Quatre fletxes, quatre guions|Cuatro flechas, cuatro guiones",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -100, y: -60 }], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1.2 }, { t: 2, key: 'up', dur: .8 }, { t: 3.2, key: 'left', dur: 1.2 }, { t: 4.8, key: 'down', dur: .8 }], time: 6.5 }, prog: `@cavaller key:right{ point:90 move:10 } key:left{ point:-90 move:10 } key:up{ point:0 move:10 } key:down{ point:180 move:10 }` },
        nota: "Abans de cada tram, que diguin quina fletxa s'està prement.|Antes de cada tramo, que digan qué flecha se está pulsando." },
      { id: 's7', k: 'pregunta', t: "Prediu|Predice", x: "El cavaller mira a la dreta. La fletxa esquerra només té «mou-te 10 passos». Cap on va?|El caballero mira a la derecha. La flecha izquierda solo tiene «muévete 10 pasos». ¿Hacia dónde va?", nota: "Resposta: a la dreta! «Mou-te» avança cap on mira.|Respuesta: ¡a la derecha! «Muévete» avanza hacia donde mira." },
      { id: 's8', k: 'media', t: "Compte: el «per sempre»|Cuidado: el «por siempre»",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'cavaller', art: 'cavaller', x: -170, y: -60 }], keys: ['right'], input: [{ t: .8, key: 'right', dur: .2 }], time: 4.5 }, prog: `@cavaller key:right{ point:90 forever{ move:4 } }` },
        nota: "Només s'ha premut un moment i no para mai. Dins el guió de la tecla no hi ha d'haver «per sempre».|Solo se ha pulsado un momento y no para nunca. Dentro del guion de la tecla no tiene que haber «por siempre»." },
      { id: 's9', k: 'activitat', t: "El comandament humà|El mando humano", timer: 12, punts: ["Comandament: ensenya una targeta de fletxa.|Mando: enseña una tarjeta de flecha.", "Personatge: gira't cap a la paret del número.|Personaje: gírate hacia la pared del número.", "Després, fes un pas.|Después, da un paso.", "Arribeu a l'objecte i canvieu els papers.|Llegad al objeto y cambiad los papeles."], nota: "Passos curts i a poc a poc. Vigila que primer es girin i després avancin.|Pasos cortos y despacio. Vigila que primero se giren y después avancen." },
      { id: 's10', k: 'activitat', t: "La targeta de l'error|La tarjeta del error", punts: ["La targeta diu «← apunta a 90».|La tarjeta dice «← apunta a 90».", "Què passa quan el comandament prem l'esquerra?|¿Qué pasa cuando el mando pulsa la izquierda?", "Com l'arreglaríeu?|¿Cómo la arreglaríais?"], nota: "És el mateix error que el del repte del comandament espatllat.|Es el mismo error que el del reto del mando estropeado." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Les fletxes del teclat».|Abre «Las flechas del teclado».", "Prova el comandament amb el teclat.|Prueba el mando con el teclado.", "Para a la «Pausa activa».|Para en la «Pausa activa»."], nota: "Al mòbil o la tauleta hi ha botons de fletxa sota l'escenari.|En el móvil o la tableta hay botones de flecha debajo del escenario." },
      { id: 's12', k: 'concepte', t: "Provar i comprovar|Probar y comprobar", punts: ["«Comença»: mous tu el personatge amb el teclat.|«Empieza»: mueves tú el personaje con el teclado.", "«Comprova»: les tecles es premen soles.|«Comprueba»: las teclas se pulsan solas.", "Fes servir «mou-te 10 passos».|Usa «muévete 10 pasos»."], nota: "La prova prem cada tecla un temps fix: amb un altre número de passos pot no arribar.|La prueba pulsa cada tecla un tiempo fijo: con otro número de pasos puede no llegar." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. Cap a la bandera|1. Hacia la bandera", "2. La poma i la cistella|2. La manzana y la cesta", "3. L'ocell missatger (4 fletxes)|3. El pájaro mensajero (4 flechas)", "4. El comandament espatllat|4. El mando estropeado"], nota: "Al 2, si falla, pregunta cap on mira el cavaller quan arriba a la cistella.|En el 2, si falla, pregunta hacia dónde mira el caballero cuando llega a la cesta." },
      { id: 's14', k: 'activitat', t: "Crea: el comandament de la Flama|Crea: el mando de Flama", timer: 5, x: "Quatre fletxes i una sorpresa amb l'espai. Després, prova el del company/a.|Cuatro flechas y una sorpresa con el espacio. Después, prueba el del compañero/a.", nota: "Que diguin quina sorpresa han triat abans de mostrar-la.|Que digan qué sorpresa han elegido antes de mostrarla." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Cada tecla pot tenir el seu guió.|Cada tecla puede tener su guion.", "«Apunta» fa mirar; «mou-te» fa avançar.|«Apunta» hace mirar; «muévete» hace avanzar.", "Mantenir la tecla repeteix el guió.|Mantener la tecla repite el guion."], nota: "Anuncia la setmana vinent: personatges que parlen entre ells.|Anuncia la semana que viene: personajes que hablan entre ellos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin número és l'esquerra? I amunt?|¿Qué número es la izquierda? ¿Y arriba?", "Per què no cal «per sempre» a la fletxa?|¿Por qué no hace falta «por siempre» en la flecha?"], nota: "Anota qui encara confon 0 i 90.|Anota quién todavía confunde 0 y 90." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el comandament humà|Tarjetas: el mando humano", k: 'targetes',
        intro: "Un paquet per parella. Abans de començar, enganxeu els números 0, 90, 180 i -90 a les parets.|Un paquete por pareja. Antes de empezar, pegad los números 0, 90, 180 y -90 en las paredes.",
        items: [
          { t: "→ Fletxa dreta: apunta a 90 i fes un pas ➡️|→ Flecha derecha: apunta a 90 y da un paso ➡️", n: 3 },
          { t: "← Fletxa esquerra: apunta a -90 i fes un pas ⬅️|← Flecha izquierda: apunta a -90 y da un paso ⬅️", n: 3 },
          { t: "↑ Fletxa amunt: apunta a 0 i fes un pas ⬆️|↑ Flecha arriba: apunta a 0 y da un paso ⬆️", n: 3 },
          { t: "↓ Fletxa avall: apunta a 180 i fes un pas ⬇️|↓ Flecha abajo: apunta a 180 y da un paso ⬇️", n: 3 },
          { t: "Espai: saluda i digues «Endavant!» 👋|Espacio: saluda y di «¡Adelante!» 👋", n: 1 },
          { t: "Error: ← Fletxa esquerra: apunta a 90 i fes un pas 🐞|Error: ← Flecha izquierda: apunta a 90 y da un paso 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Missatges entre personatges ---------- */
  'g3-3': {
    obj: [
      "L'alumne/a explica què fan «envia el missatge» i «Quan rebo el missatge» i que tots els personatges senten el missatge.|El alumno/a explica qué hacen «envía el mensaje» y «Al recibir el mensaje» y que todos los personajes oyen el mensaje.",
      "L'alumne/a programa un diàleg per torns: cada personatge parla i després envia un missatge.|El alumno/a programa un diálogo por turnos: cada personaje habla y después envía un mensaje.",
      "L'alumne/a fa que diversos personatges reaccionin a un sol missatge i que un personatge amagat aparegui.|El alumno/a hace que varios personajes reaccionen a un solo mensaje y que un personaje escondido aparezca.",
      "L'alumne/a detecta errors de missatges: un nom que no coincideix o un missatge enviat massa d'hora.|El alumno/a detecta errores de mensajes: un nombre que no coincide o un mensaje enviado demasiado pronto."
    ],
    comp: [
      "Competència digital (CD5): programar la comunicació entre objectes d'un programa|Competencia digital (CD5): programar la comunicación entre objetos de un programa",
      "Pensament computacional: missatges, sincronització i paral·lelisme|Pensamiento computacional: mensajes, sincronización y paralelismo",
      "Llengua: escriure diàlegs breus amb torns de paraula|Lengua: escribir diálogos breves con turnos de palabra",
      "Educació artística (teatre): assajar una escena amb entrades i rèpliques|Educación artística (teatro): ensayar una escena con entradas y réplicas"
    ],
    vocab: [
      ["Missatge|Mensaje", "Un avís amb nom que un personatge envia i que senten tots.|Un aviso con nombre que un personaje envía y que oyen todos."],
      ["Enviar|Enviar", "Fer sonar el missatge perquè els altres el rebin.|Hacer sonar el mensaje para que los demás lo reciban."],
      ["Rebre|Recibir", "Sentir el missatge; si tens un guió amb aquell nom, comença.|Oír el mensaje; si tienes un guion con ese nombre, empieza."],
      ["Diàleg|Diálogo", "Una conversa on cada personatge parla quan li toca.|Una conversación donde cada personaje habla cuando le toca."],
      ["Torn|Turno", "El moment en què li toca parlar a un personatge.|El momento en que le toca hablar a un personaje."],
      ["Mostrar i amagar|Mostrar y esconder", "Fer aparèixer o desaparèixer un personatge de l'escenari.|Hacer aparecer o desaparecer a un personaje del escenario."]
    ],
    mat: {
      aula: ["Ordinadors amb la sessió «Missatges entre personatges»|Ordenadores con la sesión «Mensajes entre personajes»", "Projector i la presentació|Proyector y la presentación", "Les targetes del teatre dels missatges (un paquet per grup de 4)|Las tarjetas del teatro de los mensajes (un paquete por grupo de 4)"],
      imprimir: ["Targetes: el teatre dels missatges|Tarjetas: el teatro de los mensajes"],
      prep: ["Retallar les targetes i separar-les per personatges (Narrador/a, Guida, Tuga, Ocell).|Recortar las tarjetas y separarlas por personajes (Narrador/a, Guida, Tuga, Pájaro).",
        "Preparar un espai lliure davant la pissarra per fer de teatre.|Preparar un espacio libre delante de la pizarra para hacer de teatro.",
        "Provar la demo de la conversa (s6) per saber quan s'il·lumina cada guió.|Probar la demo de la conversación (s6) para saber cuándo se ilumina cada guion."]
    },
    plan: [
      { min: 5, t: "Benvinguda: parlen alhora!|Bienvenida: ¡hablan a la vez!", fase: 'inici',
        fa: "Repassa les direccions. Fes parlar dos alumnes alhora una frase cadascun: no s'entén res. Pregunta com se sap, en una obra de teatre, quan et toca parlar.|Repasa las direcciones. Haz hablar a dos alumnos a la vez una frase cada uno: no se entiende nada. Pregunta cómo se sabe, en una obra de teatro, cuándo te toca hablar.",
        diu: ["Al teatre, com sabeu quan us toca parlar?|En el teatro, ¿cómo sabéis cuándo os toca hablar?", "Avui els personatges aprendran a avisar-se.|Hoy los personajes aprenderán a avisarse."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Enviar i rebre|Enviar y recibir", fase: 'teoria',
        fa: "Explica el missatge amb l'animació: dir un nom en veu alta que tothom sent. Mostra la conversa per torns i la demo. Després, un missatge per a molts (amb mostra't i amaga't) i l'error del nom que no coincideix.|Explica el mensaje con la animación: decir un nombre en voz alta que todos oyen. Muestra la conversación por turnos y la demo. Después, un mensaje para muchos (con muéstrate y escóndete) y el error del nombre que no coincide.",
        diu: ["Qui sent el missatge? I qui hi reacciona?|¿Quién oye el mensaje? ¿Y quién reacciona?", "Per què la Tuga no respon a la demo de l'error?|¿Por qué Tuga no responde en la demo del error?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El teatre dels missatges|El teatro de los mensajes", fase: 'desconnectat',
        fa: "Grups de 4, cadascú amb les targetes d'un personatge. Cada targeta diu «Quan rebo X → dic … i envio Y». El narrador/a comença. Ningú no pot parlar si no ha rebut el seu missatge (dit en veu alta per qui l'envia). Representen l'escena dues vegades. A la tercera, canvia una targeta per la de l'error («envio hola» en lloc de «envio tuga»): l'escena s'encalla i el grup ha de trobar per què.|Grupos de 4, cada uno con las tarjetas de un personaje. Cada tarjeta dice «Cuando recibo X → digo … y envío Y». El narrador/a empieza. Nadie puede hablar si no ha recibido su mensaje (dicho en voz alta por quien lo envía). Representan la escena dos veces. En la tercera, cambia una tarjeta por la del error («envío hola» en lugar de «envío tuga»): la escena se atasca y el grupo tiene que encontrar por qué.",
        diu: ["Digueu el missatge ben fort: és el senyal de l'altre.|Decid el mensaje bien fuerte: es la señal del otro.", "Algú ha parlat sense rebre el seu missatge? Això és un bug!|¿Alguien ha hablado sin recibir su mensaje? ¡Eso es un bug!", "Per què s'ha encallat l'escena?|¿Por qué se ha atascado la escena?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. A l'assaig de la Guida i la Tuga, que obrin les pestanyes i expliquin a un company/a qui envia cada missatge.|Avanzan hasta la pausa activa. En el ensayo de Guida y Tuga, que abran las pestañas y expliquen a un compañero/a quién envía cada mensaje.",
        diu: ["Quin missatge fa que l'ocell es mogui?|¿Qué mensaje hace que el pájaro se mueva?", "Per què parlen alhora a l'«Investiga»?|¿Por qué hablan a la vez en el «Investiga»?"],
        slides: ['s12'], app: "Del recorda fins a «Investiga»: preguntes, història, «Descobreix», ordenar la conversa, «La paraula secreta» (per a casa), l'assaig, la pregunta de qui reacciona i l'«envia» massa d'hora.|Del recuerda hasta «Investiga»: preguntas, historia, «Descubre», ordenar la conversación, «La palabra secreta» (para casa), el ensayo, la pregunta de quién reacciona y el «envía» demasiado pronto.", org: "Individual|Individual" },
      { min: 12, t: "Reptes: converses i sorpreses|Retos: conversaciones y sorpresas", fase: 'ordinador',
        fa: "Pausa activa junts. Després, els quatre reptes. Al de la conversa de tres torns, recomana fer primer la Guida i després la Tuga, i comprovar-ho a cada pas.|Pausa activa juntos. Después, los cuatro retos. En el de la conversación de tres turnos, recomienda hacer primero a Guida y después a Tuga, y comprobarlo en cada paso.",
        diu: ["Quin missatge espera la Tuga? Quin envia la Guida?|¿Qué mensaje espera Tuga? ¿Cuál envía Guida?", "L'Estel és amagada: quin bloc la fa aparèixer?|Estel está escondida: ¿qué bloque la hace aparecer?"],
        slides: ['s13'], app: "«Pausa activa» i els reptes: la Tuga saluda, la conversa de tres torns, la sorpresa del regal i el missatge equivocat.|«Pausa activa» y los retos: Tuga saluda, la conversación de tres turnos, la sorpresa del regalo y el mensaje equivocado.", org: "Individual|Individual" },
      { min: 5, t: "Crea: l'assaig de la funció|Crea: el ensayo de la función", fase: 'crea',
        fa: "Escriuen una conversa de quatre frases o més. Per parelles, un llegeix en veu alta la conversa de l'altre mentre s'executa.|Escriben una conversación de cuatro frases o más. Por parejas, uno lee en voz alta la conversación del otro mientras se ejecuta.",
        diu: ["Cada frase acaba amb un missatge que passa el torn.|Cada frase termina con un mensaje que pasa el turno."],
        slides: ['s14'], app: "Pas «Crea»: L'assaig de la funció.|Paso «Crea»: El ensayo de la función.", org: "Individual i parelles|Individual y parejas" },
      { min: 3, t: "Tancament|Cierre", fase: 'tancament', fa: "Resum, preguntes finals i tiquet.|Resumen, preguntas finales y ticket.",
        diu: ["Qui sent un missatge quan l'envio?|¿Quién oye un mensaje cuando lo envío?"], slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa l'«envia» abans del «digues» i els personatges parlen alhora.|Pone el «envía» antes del «di» y los personajes hablan a la vez.",
        "Que digui la conversa en veu alta: quan avisa la Guida la Tuga, abans o després de parlar?|Que diga la conversación en voz alta: ¿cuándo avisa Guida a Tuga, antes o después de hablar?"],
      ["Envia un missatge amb un nom diferent del que espera l'altre personatge.|Envía un mensaje con un nombre diferente del que espera el otro personaje.",
        "Que posi el dit al nom de l'«envia» i al de la capçalera «Quan rebo» de l'altre: són iguals?|Que ponga el dedo en el nombre del «envía» y en el de la cabecera «Al recibir» del otro: ¿son iguales?"],
      ["Fa servir «digues» sense segons i l'«envia» arriba immediatament.|Usa «di» sin segundos y el «envía» llega inmediatamente.",
        "Fes-li notar el «durant 2 s» del bloc «digues»: sense temps, la frase s'acaba de seguida.|Hazle notar el «durante 2 s» del bloque «di»: sin tiempo, la frase se acaba enseguida."],
      ["Programa la Estel amb «Quan toco aquest personatge», però com que és amagada, ningú no la pot tocar.|Programa a Estel con «Al tocar este personaje», pero como está escondida, nadie la puede tocar.",
        "Pregunta: què ha de passar perquè aparegui? Quin esdeveniment és?|Pregunta: ¿qué tiene que pasar para que aparezca? ¿Qué evento es?"],
      ["Creu que el missatge només el sent el personatge del costat.|Cree que el mensaje solo lo oye el personaje de al lado.",
        "Torna a la demo d'«Un per a tots»: tots el senten, però només reaccionen els que tenen el guió.|Vuelve a la demo de «Uno para todos»: todos lo oyen, pero solo reaccionan los que tienen el guion."]
    ],
    diff: {
      mes: "Afegir un tercer personatge a l'assaig (l'ocell) que parli quan rep un missatge, i acabar amb un missatge «final» perquè tots facin la reverència alhora.|Añadir un tercer personaje al ensayo (el pájaro) que hable cuando recibe un mensaje, y terminar con un mensaje «final» para que todos hagan la reverencia a la vez.",
      menys: "Fer primer la conversa amb les targetes de paper damunt la taula i després copiar-la a blocs. Començar amb només dues frases.|Hacer primero la conversación con las tarjetas de papel sobre la mesa y después copiarla a bloques. Empezar con solo dos frases."
    },
    aval: {
      ticket: ["Què fa el bloc «envia el missatge»? Qui el sent?|¿Qué hace el bloque «envía el mensaje»? ¿Quién lo oye?", "On poses l'«envia» en una frase del diàleg, abans o després del «digues»?|¿Dónde pones el «envía» en una frase del diálogo, antes o después del «di»?"],
      rubric: [
        ["Enviar i rebre|Enviar y recibir", "Fa coincidir els noms dels missatges i explica qui reacciona.|Hace coincidir los nombres de los mensajes y explica quién reacciona.", "Necessita ajuda per relacionar l'«envia» amb el «Quan rebo».|Necesita ayuda para relacionar el «envía» con el «Al recibir»."],
        ["Diàleg per torns|Diálogo por turnos", "Fa una conversa de 4 frases o més sense que se solapin.|Hace una conversación de 4 frases o más sin que se solapen.", "La conversa funciona amb 2 frases o se solapa.|La conversación funciona con 2 frases o se solapa."],
        ["Depuració de missatges|Depuración de mensajes", "Troba sol/a el nom equivocat i l'«envia» massa d'hora.|Encuentra solo/a el nombre equivocado y el «envía» demasiado pronto.", "Els troba amb preguntes guia.|Los encuentra con preguntas guía."]
      ]
    },
    casa: "A casa, feu «La paraula secreta»: cadascú tria una paraula i una acció, i una persona va «enviant» paraules. Proveu que dues persones tinguin la mateixa paraula.|En casa, haced «La palabra secreta»: cada uno elige una palabra y una acción, y una persona va «enviando» palabras. Probad que dos personas tengan la misma palabra.",
    slides: [
      { id: 's1', k: 'portada', t: "Missatges entre personatges|Mensajes entre personajes", x: "La Guida i la Tuga assagen la funció del bosc.|Guida y Tuga ensayan la función del bosque.", nota: "Objectiu: diàlegs per torns amb missatges.|Objetivo: diálogos por turnos con mensajes." },
      { id: 's2', k: 'repas', t: "Recordem les direccions|Recordemos las direcciones", punts: ["90 dreta, -90 esquerra|90 derecha, -90 izquierda", "0 amunt, 180 avall|0 arriba, 180 abajo"], nota: "Tothom dret, giravolt ràpid amb els números de les parets.|Todos de pie, giro rápido con los números de las paredes." },
      { id: 's3', k: 'pregunta', t: "Com se sap quan et toca parlar?|¿Cómo se sabe cuándo te toca hablar?", punts: ["Al teatre|En el teatro", "En una conversa per telèfon|En una conversación por teléfono", "A classe|En clase"], nota: "Hi ha un senyal: l'altre acaba la frase, et mira, et diu el nom…|Hay una señal: el otro termina la frase, te mira, te dice el nombre…" },
      { id: 's4', k: 'anim', t: "Enviar i rebre|Enviar y recibir", anim: 'g3msg', nota: "El sobre és el missatge: el sent tothom, però només respon qui té el guió amb aquell nom.|El sobre es el mensaje: lo oye todo el mundo, pero solo responde quien tiene el guion con ese nombre." },
      { id: 's5', k: 'anim', t: "Parlar per torns|Hablar por turnos", anim: 'g3dialog', nota: "Cada frase acaba amb un missatge que passa el torn.|Cada frase termina con un mensaje que pasa el turno." },
      { id: 's6', k: 'media', t: "Una conversa amb missatges|Una conversación con mensajes",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'guida', art: 'guida', x: -120, y: -60 }, { id: 'tuga', art: 'tuga', x: 120, y: -65 }], time: 8 }, prog: `@guida flag{ say:"Hola, Tuga!|¡Hola, Tuga!",2 send:tuga } msg:guida{ say:"Som-hi!|¡Vamos!",2 } @tuga msg:tuga{ say:"Hola, Guida! Assagem?|¡Hola, Guida! ¿Ensayamos?",2 send:guida }` },
        nota: "Para la demo a cada frase i pregunta: qui parlarà ara? Per què?|Para la demo en cada frase y pregunta: ¿quién hablará ahora? ¿Por qué?" },
      { id: 's7', k: 'anim', t: "Un missatge, molts personatges|Un mensaje, muchos personajes", anim: 'g3many', x: "«Mostra't» fa aparèixer; «amaga't» fa desaparèixer.|«Muéstrate» hace aparecer; «escóndete» hace desaparecer.", nota: "Com el timbre del pati: el senten tots i cadascú fa el que li toca.|Como el timbre del patio: lo oyen todos y cada uno hace lo que le toca." },
      { id: 's8', k: 'media', t: "Compte: el nom!|Cuidado: ¡el nombre!",
        media: { k: 'stage', w: { bg: 'bosc', sprites: [{ id: 'guida', art: 'guida', x: -120, y: -60 }, { id: 'tuga', art: 'tuga', x: 120, y: -65 }], time: 5 }, prog: `@guida flag{ say:"Hola, Tuga!|¡Hola, Tuga!",2 send:hola } @tuga msg:tuga{ say:"Hola, Guida!|¡Hola, Guida!",2 }` },
        nota: "La Tuga no respon: espera «tuga» i li envien «hola».|Tuga no responde: espera «tuga» y le envían «hola»." },
      { id: 's9', k: 'pregunta', t: "Prediu|Predice", x: "La Guida envia «sorpresa». La Tuga té «Quan rebo hola» i l'ocell, «Quan rebo sorpresa». Qui reacciona?|Guida envía «sorpresa». Tuga tiene «Al recibir hola» y el pájaro, «Al recibir sorpresa». ¿Quién reacciona?", nota: "Només l'ocell. Tots dos el senten, però només un té el guió.|Solo el pájaro. Los dos lo oyen, pero solo uno tiene el guion." },
      { id: 's10', k: 'activitat', t: "El teatre dels missatges|El teatro de los mensajes", timer: 12, punts: ["Cadascú, les targetes del seu personatge.|Cada uno, las tarjetas de su personaje.", "Només parles quan reps el teu missatge.|Solo hablas cuando recibes tu mensaje.", "Digues el missatge ben fort quan l'envies.|Di el mensaje bien fuerte cuando lo envíes.", "Feu l'escena dues vegades.|Haced la escena dos veces."], nota: "Si algú parla abans d'hora, para l'escena i pregunta quin missatge ha rebut.|Si alguien habla antes de tiempo, para la escena y pregunta qué mensaje ha recibido." },
      { id: 's11', k: 'activitat', t: "La targeta de l'error|La tarjeta del error", punts: ["Canvieu una targeta per la de l'error.|Cambiad una tarjeta por la del error.", "On s'encalla l'escena?|¿Dónde se atasca la escena?", "Com l'arreglaríeu?|¿Cómo la arreglaríais?"], nota: "L'error és el mateix que el del repte «El missatge equivocat».|El error es el mismo que el del reto «El mensaje equivocado»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Missatges entre personatges».|Abre «Mensajes entre personajes».", "A l'assaig, obre les pestanyes de cada personatge.|En el ensayo, abre las pestañas de cada personaje.", "Para a la «Pausa activa».|Para en la «Pausa activa»."], nota: "«La paraula secreta» és per fer a casa: poden tocar «Ara no».|«La palabra secreta» es para hacer en casa: pueden tocar «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes|Retos", timer: 12, punts: ["1. La Tuga saluda|1. Tuga saluda", "2. La conversa de tres torns|2. La conversación de tres turnos", "3. La sorpresa del regal|3. La sorpresa del regalo", "4. El missatge equivocat|4. El mensaje equivocado"], nota: "Al 2, que comprovin cada torn abans de fer el següent.|En el 2, que comprueben cada turno antes de hacer el siguiente." },
      { id: 's14', k: 'activitat', t: "Crea: l'assaig de la funció|Crea: el ensayo de la función", timer: 5, x: "Una conversa de 4 frases o més, per torns, al teatre del bosc.|Una conversación de 4 frases o más, por turnos, en el teatro del bosque.", nota: "El company/a llegeix les frases en veu alta mentre s'executa.|El compañero/a lee las frases en voz alta mientras se ejecuta." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un missatge el senten tots.|Un mensaje lo oyen todos.", "Reacciona qui té «Quan rebo» amb aquell nom.|Reacciona quien tiene «Al recibir» con ese nombre.", "Parla i, després, passa el torn.|Habla y, después, pasa el turno."], nota: "Anuncia el projecte: el conte interactiu. Que pensin una idea per a la setmana vinent.|Anuncia el proyecto: el cuento interactivo. Que piensen una idea para la semana que viene." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Qui sent un missatge?|¿Quién oye un mensaje?", "L'«envia», abans o després del «digues»?|¿El «envía», antes o después del «di»?"], nota: "Anota qui encara posa l'«envia» al principi.|Anota quién todavía pone el «envía» al principio." }
    ],
    print: [
      { id: 'p1', t: "Targetes: el teatre dels missatges|Tarjetas: el teatro de los mensajes", k: 'targetes',
        intro: "Un paquet per grup de 4. Cada alumne/a agafa les targetes del seu personatge. La targeta de l'error és per a la tercera vegada.|Un paquete por grupo de 4. Cada alumno/a coge las tarjetas de su personaje. La tarjeta del error es para la tercera vez.",
        items: [
          { t: "Narrador/a · Quan comença → dic «Al bosc, la Guida i la Tuga assagen» i envio «guida» 📖|Narrador/a · Al empezar → digo «En el bosque, Guida y Tuga ensayan» y envío «guida» 📖", n: 1 },
          { t: "Guida · Quan rebo «guida» → dic «Hola, Tuga! Assagem?» i envio «tuga» 🦊|Guida · Cuando recibo «guida» → digo «¡Hola, Tuga! ¿Ensayamos?» y envío «tuga» 🦊", n: 1 },
          { t: "Tuga · Quan rebo «tuga» → dic «Sí, però per torns!» i envio «ocell» 🐢|Tuga · Cuando recibo «tuga» → digo «¡Sí, pero por turnos!» y envío «pájaro» 🐢", n: 1 },
          { t: "Ocell · Quan rebo «ocell» → dic «Piu! Bravo!» i envio «final» 🐦|Pájaro · Cuando recibo «pájaro» → digo «¡Pío! ¡Bravo!» y envío «final» 🐦", n: 1 },
          { t: "Tothom · Quan rebo «final» → faig una reverència 🙇|Todos · Cuando recibo «final» → hago una reverencia 🙇", n: 4 },
          { t: "Error · Guida: Quan rebo «guida» → dic «Hola, Tuga!» i envio «hola» 🐞|Error · Guida: Cuando recibo «guida» → digo «¡Hola, Tuga!» y envío «hola» 🐞", n: 1 }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: el conte interactiu ---------- */
  'g3-4': {
    obj: [
      "L'alumne/a planifica un conte interactiu en quatre vinyetes (inici, nus, tria i final).|El alumno/a planifica un cuento interactivo en cuatro viñetas (inicio, nudo, elección y final).",
      "L'alumne/a canvia d'escena amb «canvia el fons» i fa reaccionar personatges amb «Quan el fons canvia a…».|El alumno/a cambia de escena con «cambia el fondo» y hace reaccionar a personajes con «Al cambiar el fondo a…».",
      "L'alumne/a programa dos finals que depenen del que toca el lector/a, amb missatges diferents.|El alumno/a programa dos finales que dependen de lo que toca el lector/a, con mensajes diferentes.",
      "L'alumne/a presenta el seu conte, el fa provar a un company/a i el millora amb els seus comentaris.|El alumno/a presenta su cuento, lo hace probar a un compañero/a y lo mejora con sus comentarios."
    ],
    comp: [
      "Competència digital (CD5): crear un producte digital interactiu complet|Competencia digital (CD5): crear un producto digital interactivo completo",
      "Pensament computacional: descomposició, esdeveniments, missatges i proves|Pensamiento computacional: descomposición, eventos, mensajes y pruebas",
      "Llengua: estructura del conte (inici, nus i final) i escriptura creativa|Lengua: estructura del cuento (inicio, nudo y final) y escritura creativa",
      "Competència personal i social: donar i rebre comentaris amables i útils|Competencia personal y social: dar y recibir comentarios amables y útiles"
    ],
    vocab: [
      ["Conte interactiu|Cuento interactivo", "Una història on qui la mira toca o tria i canvia el que passa.|Una historia donde quien la mira toca o elige y cambia lo que pasa."],
      ["Escena|Escena", "Una part del conte amb el seu fons i els seus personatges.|Una parte del cuento con su fondo y sus personajes."],
      ["Vinyeta|Viñeta", "Cada dibuix del pla del conte.|Cada dibujo del plan del cuento."],
      ["Final alternatiu|Final alternativo", "Una altra manera d'acabar la història, segons el que es tria.|Otra manera de terminar la historia, según lo que se elige."],
      ["Lector/a|Lector/a", "La persona que mira el conte i hi participa.|La persona que mira el cuento y participa."]
    ],
    mat: {
      aula: ["Ordinadors amb la sessió «Projecte: el conte interactiu»|Ordenadores con la sesión «Proyecto: el cuento interactivo»", "Projector i la presentació|Proyector y la presentación", "Llapis i colors|Lápices y colores"],
      imprimir: ["Fitxa: el meu conte en 4 vinyetes|Ficha: mi cuento en 4 viñetas"],
      prep: ["Imprimir una fitxa de vinyetes per alumne/a (i alguna de més per als que vulguin tornar a començar).|Imprimir una ficha de viñetas por alumno/a (y alguna de más para los que quieran volver a empezar).",
        "Provar el conte d'exemple (s7) amb els dos finals.|Probar el cuento de ejemplo (s7) con los dos finales.",
        "Preparar l'ordre de les presentacions: 4 o 5 voluntaris i la resta per parelles.|Preparar el orden de las presentaciones: 4 o 5 voluntarios y el resto por parejas."]
    },
    plan: [
      { min: 5, t: "Benvinguda: el llibre sense final|Bienvenida: el libro sin final", fase: 'inici',
        fa: "Repassa missatges i mostra't/amaga't. Presenta el repte: un llibre on el lector/a tria el final. Pregunta si han llegit mai un llibre on es pot triar què passa.|Repasa mensajes y muéstrate/escóndete. Presenta el reto: un libro donde el lector/a elige el final. Pregunta si han leído alguna vez un libro donde se puede elegir qué pasa.",
        diu: ["Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Com es fa un conte interactiu|Cómo se hace un cuento interactivo", fase: 'teoria',
        fa: "Explica inici, nus i final amb l'animació del conte. Mostra la demo de les escenes (el fons que canvia i el drac que hi reacciona) i la dels dos finals. Acaba amb el pla en vinyetes.|Explica inicio, nudo y final con la animación del cuento. Muestra la demo de las escenas (el fondo que cambia y el dragón que reacciona) y la de los dos finales. Termina con el plan en viñetas.",
        diu: ["Quin esdeveniment fa aparèixer el drac?|¿Qué evento hace aparecer al dragón?", "Si toquen l'estrella en lloc del cor, què canvia?|Si tocan la estrella en lugar del corazón, ¿qué cambia?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El conte en 4 vinyetes|El cuento en 4 viñetas", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa de vinyetes: inici, nus, tria (les dues opcions) i final. Al costat de cada vinyeta, apunta l'esdeveniment o el missatge que la farà començar. Als 8 minuts, cada alumne/a explica el seu pla al company/a en un minut.|Cada alumno/a rellena la ficha de viñetas: inicio, nudo, elección (las dos opciones) y final. Al lado de cada viñeta, apunta el evento o el mensaje que la hará empezar. A los 8 minutos, cada alumno/a explica su plan al compañero/a en un minuto.",
        diu: ["No cal dibuixar bé: n'hi ha prou amb ninots i fletxes.|No hace falta dibujar bien: basta con muñecos y flechas.", "Què ha de tocar el lector/a? Apunta-ho!|¿Qué tiene que tocar el lector/a? ¡Apúntalo!"],
        slides: ['s8'], app: "Cap: activitat amb la fitxa de paper.|Ninguna: actividad con la ficha de papel.", org: "Individual i parelles|Individual y parejas" },
      { min: 10, t: "A l'ordinador: les escenes del conte|En el ordenador: las escenas del cuento", fase: 'ordinador',
        fa: "Fan la primera part de la sessió fins a la pausa activa: el conte d'exemple i les dues primeres escenes. Que provin els dos finals del conte d'exemple.|Hacen la primera parte de la sesión hasta la pausa activa: el cuento de ejemplo y las dos primeras escenas. Que prueben los dos finales del cuento de ejemplo.",
        diu: ["Has provat els dos finals?|¿Has probado los dos finales?"],
        slides: ['s9'], app: "Del recorda fins a la «Pausa activa»: preguntes, història, «Descobreix», ordenar els passos, «El conte en 4 vinyetes» (ja fet), el conte d'exemple, l'escena 1 (el botó) i l'escena 2 (el drac de nit).|Del recuerda hasta la «Pausa activa»: preguntas, historia, «Descubre», ordenar los pasos, «El cuento en 4 viñetas» (ya hecho), el cuento de ejemplo, la escena 1 (el botón) y la escena 2 (el dragón de noche).", org: "Individual|Individual" },
      { min: 18, t: "Crea: el meu conte interactiu|Crea: mi cuento interactivo", fase: 'crea',
        fa: "Després de la pausa activa, fan l'escena dels dos finals i l'investiga. Llavors construeixen el seu conte seguint la fitxa. Passeja amb els criteris a la vista. Als 12 minuts, avisa: tothom ha de tenir un final, encara que sigui senzill. Els últims minuts, el company/a prova el conte sense explicacions i diu una cosa que li agrada i una idea per millorar.|Después de la pausa activa, hacen la escena de los dos finales y el investiga. Entonces construyen su cuento siguiendo la ficha. Pasea con los criterios a la vista. A los 12 minutos, avisa: todos tienen que tener un final, aunque sea sencillo. Los últimos minutos, el compañero/a prueba el cuento sin explicaciones y dice una cosa que le gusta y una idea para mejorar.",
        diu: ["Mira la teva fitxa: quina vinyeta estàs programant?|Mira tu ficha: ¿qué viñeta estás programando?", "Primer que funcioni una versió curta; després, la fas més llarga.|Primero que funcione una versión corta; después, la haces más larga.", "El lector/a sap què ha de tocar? Digues-li-ho amb una frase.|¿El lector/a sabe qué tiene que tocar? Díselo con una frase."],
        slides: ['s10', 's11', 's12', 's13'], app: "«Pausa activa», l'escena 3 (tria el final), l'investiga del drac que no apareix, «El meu conte interactiu» i «Ensenya el teu conte».|«Pausa activa», la escena 3 (elige el final), el investiga del dragón que no aparece, «Mi cuento interactivo» y «Enseña tu cuento».", org: "Individual i parelles|Individual y parejas" },
      { min: 8, t: "Presentacions i tancament|Presentaciones y cierre", fase: 'tancament',
        fa: "4 o 5 voluntaris presenten el conte al projector: la classe fa de lector/a i tria el final en veu alta. Acaba amb el resum de la unitat, les preguntes finals i el tiquet.|4 o 5 voluntarios presentan el cuento en el proyector: la clase hace de lector/a y elige el final en voz alta. Termina con el resumen de la unidad, las preguntas finales y el ticket.",
        diu: ["Quin final voleu? Voteu amb la mà!|¿Qué final queréis? ¡Votad con la mano!", "Quina cosa del conte del company/a us ha agradat?|¿Qué cosa del cuento del compañero/a os ha gustado?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: preguntes i com m'he sentit.|«Cierre»: preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Comença a programar sense pla i s'encalla a mig conte.|Empieza a programar sin plan y se atasca a mitad del cuento.",
        "Torna a la fitxa: quina vinyeta funciona ja? Quina ve ara? Programa-les d'una en una.|Vuelve a la ficha: ¿qué viñeta funciona ya? ¿Cuál viene ahora? Prográmalas de una en una."],
      ["El botó canvia el fons a un lloc i el personatge espera un altre fons.|El botón cambia el fondo a un sitio y el personaje espera otro fondo.",
        "Que compari el fons del bloc «canvia el fons» amb el de la capçalera «Quan el fons canvia a…».|Que compare el fondo del bloque «cambia el fondo» con el de la cabecera «Al cambiar el fondo a…»."],
      ["El drac és amagat i no apareix mai.|El dragón está escondido y no aparece nunca.",
        "Pregunta: quin bloc el fa aparèixer i quin esdeveniment l'ha de fer començar?|Pregunta: ¿qué bloque lo hace aparecer y qué evento lo tiene que hacer empezar?"],
      ["Els dos finals passen alhora o sempre el mateix.|Los dos finales pasan a la vez o siempre el mismo.",
        "Que miri que cada objecte envia un missatge diferent i que cada final és sota el seu «Quan rebo».|Que mire que cada objeto envía un mensaje diferente y que cada final está bajo su «Al recibir»."],
      ["Vol fer un conte molt llarg i no l'acaba.|Quiere hacer un cuento muy largo y no lo termina.",
        "Primer una versió de tres escenes que funcioni. Les idees de més, a la llista de millores.|Primero una versión de tres escenas que funcione. Las ideas de más, a la lista de mejoras."]
    ],
    diff: {
      mes: "Afegir un tercer camí, una escena amb el cavaller mogut amb les fletxes o un efecte de so a cada escena. Escriure el títol del conte amb el narrador al principi.|Añadir un tercer camino, una escena con el caballero movido con las flechas o un efecto de sonido en cada escena. Escribir el título del cuento con el narrador al principio.",
      menys: "Partir del conte d'exemple i canviar-ne les frases i un dels finals. Fer només tres vinyetes: inici, nus i un final.|Partir del cuento de ejemplo y cambiar sus frases y uno de los finales. Hacer solo tres viñetas: inicio, nudo y un final."
    },
    aval: {
      ticket: ["Quin esdeveniment fa reaccionar un personatge quan canvia l'escena?|¿Qué evento hace reaccionar a un personaje cuando cambia la escena?", "Com has fet que el lector/a triï el final?|¿Cómo has hecho que el lector/a elija el final?"],
      rubric: [
        ["Pla i estructura|Plan y estructura", "El conte té inici, nus i final i segueix la fitxa de vinyetes.|El cuento tiene inicio, nudo y final y sigue la ficha de viñetas.", "Hi ha escenes, però falta el final o no segueix el pla.|Hay escenas, pero falta el final o no sigue el plan."],
        ["Interacció|Interacción", "El lector/a toca per continuar i tria entre dos finals.|El lector/a toca para continuar y elige entre dos finales.", "El lector/a toca un sol cop o no té cap tria.|El lector/a toca una sola vez o no tiene ninguna elección."],
        ["Diàleg i missatges|Diálogo y mensajes", "Els personatges parlen per torns amb missatges, sense solapar-se.|Los personajes hablan por turnos con mensajes, sin solaparse.", "Hi ha frases, però se solapen o no fan servir missatges.|Hay frases, pero se solapan o no usan mensajes."]
      ]
    },
    casa: "A casa, ensenyeu el conte a la família amb el mòbil i deixeu que triïn el final. Després, dibuixeu junts una vinyeta nova per a un tercer final.|En casa, enseñad el cuento a la familia con el móvil y dejad que elijan el final. Después, dibujad juntos una viñeta nueva para un tercer final.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: el conte interactiu|Proyecto: el cuento interactivo", x: "Una història amb escenes, diàlegs i un final que tria qui la mira.|Una historia con escenas, diálogos y un final que elige quien la mira.", nota: "Avui tothom acaba un conte: curt, però amb final.|Hoy todos terminan un cuento: corto, pero con final." },
      { id: 's2', k: 'repas', t: "Tot el que sabem fer|Todo lo que sabemos hacer", punts: ["Tocar un personatge|Tocar un personaje", "Les fletxes del teclat|Las flechas del teclado", "Enviar i rebre missatges|Enviar y recibir mensajes", "Mostrar i amagar|Mostrar y esconder"], nota: "Recorda que al conte poden fer servir tot això.|Recuerda que en el cuento pueden usar todo esto." },
      { id: 's3', k: 'pregunta', t: "El llibre sense final|El libro sin final", x: "Si poguéssiu triar el final d'un conte, quin canviaríeu?|Si pudierais elegir el final de un cuento, ¿cuál cambiaríais?", nota: "Recull idees: poden servir de punt de partida.|Recoge ideas: pueden servir de punto de partida." },
      { id: 's4', k: 'anim', t: "Inici, nus i final… i tu tries|Inicio, nudo y final… y tú eliges", anim: 'g3tale', nota: "Connecta amb el que treballen a llengua: l'estructura del conte.|Conecta con lo que trabajan en lengua: la estructura del cuento." },
      { id: 's5', k: 'media', t: "Escenes: el fons canvia|Escenas: el fondo cambia",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'nit'], sprites: [{ id: 'boto', art: 'boto', x: 150, y: -130, size: 70 }, { id: 'drac', art: 'drac', x: 0, y: -40, hidden: true }], input: [{ t: 1.5, click: 'boto' }], time: 6 }, prog: `@boto click{ bg:nit hide } @drac bg:nit{ show say:"Qui m'ha despertat?|¿Quién me ha despertado?",2 }` },
        nota: "El canvi de fons també és un esdeveniment: el drac l'espera per aparèixer.|El cambio de fondo también es un evento: el dragón lo espera para aparecer." },
      { id: 's6', k: 'media', t: "Dos finals|Dos finales",
        media: { k: 'stage', w: { bg: 'nit', bgs: ['nit', 'parc', 'cel'], sprites: [{ id: 'drac', art: 'drac', x: 0, y: -40 }, { id: 'cor', art: 'cor', x: -70, y: 95 }, { id: 'estrella', art: 'estrella', x: 70, y: 95 }], input: [{ t: 1.5, click: 'cor' }], time: 6 }, prog: `@cor click{ send:hola } @estrella click{ send:sorpresa } @drac msg:hola{ next say:"Amics per sempre!|¡Amigos para siempre!",2 bg:parc } msg:sorpresa{ say:"Me l'emporto al cel!|¡Me la llevo al cielo!",2 bg:cel hide }` },
        nota: "A la demo toquen el cor. Pregunta què passaria amb l'estrella i mira-ho als guions.|En la demo tocan el corazón. Pregunta qué pasaría con la estrella y míralo en los guiones." },
      { id: 's7', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g3plan', nota: "Els programadors i els il·lustradors fan esbossos abans de començar.|Los programadores y los ilustradores hacen bocetos antes de empezar." },
      { id: 's8', k: 'activitat', t: "El conte en 4 vinyetes|El cuento en 4 viñetas", timer: 12, punts: ["1. Inici: on i qui?|1. Inicio: ¿dónde y quién?", "2. Nus: què passa?|2. Nudo: ¿qué pasa?", "3. Tria: què toca el lector/a?|3. Elige: ¿qué toca el lector/a?", "4. Final: com acaba?|4. Final: ¿cómo termina?"], nota: "Als 8 minuts, cada alumne/a explica el pla al company/a.|A los 8 minutos, cada alumno/a explica el plan al compañero/a." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Prova el conte d'exemple amb els dos finals.|Prueba el cuento de ejemplo con los dos finales.", "Escena 1: el botó.|Escena 1: el botón.", "Escena 2: el drac de nit.|Escena 2: el dragón de noche."], nota: "Para a la pausa activa: la farem junts.|Para en la pausa activa: la haremos juntos." },
      { id: 's10', k: 'repte', t: "Escena 3: tria el final|Escena 3: elige el final", timer: 5, punts: ["El cor envia «hola».|El corazón envía «hola».", "L'estrella envia «sorpresa».|La estrella envía «sorpresa».", "Cada final, al seu «Quan rebo».|Cada final, en su «Al recibir»."], nota: "Hi ha dues proves: una toca el cor i l'altra l'estrella.|Hay dos pruebas: una toca el corazón y la otra la estrella." },
      { id: 's11', k: 'concepte', t: "Criteris del conte|Criterios del cuento", punts: ["Almenys 2 escenes|Al menos 2 escenas", "Un diàleg amb missatges|Un diálogo con mensajes", "El lector/a toca per continuar|El lector/a toca para continuar", "Té un final: «Fi del conte!»|Tiene un final: «¡Fin del cuento!»"], nota: "Deixa aquesta diapositiva projectada mentre treballen.|Deja esta diapositiva proyectada mientras trabajan." },
      { id: 's12', k: 'activitat', t: "Construeix el teu conte|Construye tu cuento", timer: 13, punts: ["Segueix la fitxa, vinyeta a vinyeta.|Sigue la ficha, viñeta a viñeta.", "Prova cada escena abans de fer la següent.|Prueba cada escena antes de hacer la siguiente.", "Primer curt i que funcioni; després, més llarg.|Primero corto y que funcione; después, más largo."], nota: "Als 12 minuts, avisa que tothom ha de tenir un final.|A los 12 minutos, avisa de que todos tienen que tener un final." },
      { id: 's13', k: 'activitat', t: "Prova-ho amb un company/a|Pruébalo con un compañero/a", punts: ["No li expliquis res: mira què toca.|No le expliques nada: mira qué toca.", "Una cosa que t'agrada.|Una cosa que te gusta.", "Una idea per millorar.|Una idea para mejorar."], nota: "Modela un comentari amable i concret abans de començar.|Modela un comentario amable y concreto antes de empezar." },
      { id: 's14', k: 'activitat', t: "Presentacions|Presentaciones", timer: 5, punts: ["Títol del conte|Título del cuento", "La classe tria el final|La clase elige el final", "Què n'estàs més content/a?|¿De qué estás más contento/a?"], nota: "Un minut per conte. La classe vota el final amb la mà.|Un minuto por cuento. La clase vota el final con la mano." },
      { id: 's15', k: 'resum', t: "La unitat 3 en tres idees|La unidad 3 en tres ideas", punts: ["Els esdeveniments fan començar guions: tocar, tecles, missatges, fons.|Los eventos hacen empezar guiones: tocar, teclas, mensajes, fondos.", "Els missatges fan parlar per torns.|Los mensajes hacen hablar por turnos.", "Un programa interactiu respon a qui el fa servir.|Un programa interactivo responde a quien lo usa."], nota: "Anuncia la unitat 4: coordenades i el laberint.|Anuncia la unidad 4: coordenadas y el laberinto." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quin esdeveniment fa reaccionar quan canvia l'escena?|¿Qué evento hace reaccionar cuando cambia la escena?", "Com has fet que el lector/a triï?|¿Cómo has hecho que el lector/a elija?"], nota: "Recull les fitxes de vinyetes per valorar el pla amb la rúbrica.|Recoge las fichas de viñetas para valorar el plan con la rúbrica." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el meu conte en 4 vinyetes|Ficha: mi cuento en 4 viñetas", k: 'fitxa',
        intro: "Dibuixa cada vinyeta al requadre i apunta, al costat, l'esdeveniment o el missatge que la fa començar.|Dibuja cada viñeta en el recuadro y apunta, al lado, el evento o el mensaje que la hace empezar.",
        items: [
          { q: "Vinyeta 1 · Inici: on passa el conte i qui hi ha? Com comença? (esdeveniment: «Quan comença»)|Viñeta 1 · Inicio: ¿dónde pasa el cuento y quién hay? ¿Cómo empieza? (evento: «Al empezar»)", big: true, sol: "Exemple: al bosc de dia; el narrador presenta el cavaller.|Ejemplo: en el bosque de día; el narrador presenta al caballero." },
          { q: "Vinyeta 2 · Nus: què passa? Qui parla i què diu? Quin missatge passa el torn?|Viñeta 2 · Nudo: ¿qué pasa? ¿Quién habla y qué dice? ¿Qué mensaje pasa el turno?", big: true, sol: "Exemple: es fa de nit i apareix el drac (Quan el fons canvia a nit).|Ejemplo: se hace de noche y aparece el dragón (Al cambiar el fondo a noche)." },
          { q: "Vinyeta 3 · Tria: què pot tocar el lector/a? Dibuixa les dues opcions i el missatge de cadascuna.|Viñeta 3 · Elige: ¿qué puede tocar el lector/a? Dibuja las dos opciones y el mensaje de cada una.", big: true, sol: "Exemple: el cor envia «hola» i l'estrella envia «sorpresa».|Ejemplo: el corazón envía «hola» y la estrella envía «sorpresa»." },
          { q: "Vinyeta 4 · Final: com acaba cada opció? Recorda escriure «Fi del conte!».|Viñeta 4 · Final: ¿cómo termina cada opción? Recuerda escribir «¡Fin del cuento!».", big: true, sol: "Exemple: amb «hola» es fan amics al parc; amb «sorpresa» el drac vola cap al cel.|Ejemplo: con «hola» se hacen amigos en el parque; con «sorpresa» el dragón vuela hacia el cielo." }
        ] }
    ]
  }
});
