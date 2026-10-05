/* Tech Creadors · unitat 1 «Primers passos a l'escenari» · guia del professor (g1-1 … g1-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Les demostracions de les
   diapositives (k: 'media') fan servir el motor de l'escenari (tech-stage.js): fons, personatges i guions SQ. */
Object.assign(TGUIDE, (() => {
  const T = (sprites, o = {}) => ({ bg: 'escenari', sprites, ...o });
  return {
  /* ---------- Sessió 1 · D'en Bit a l'escenari ---------- */
  'g1-1': {
    intro: "Nivell: Cicle superior (5è-6è, 10-12 anys) · Recomanat després de Tech Robot. Primera sessió del curs: fa de pont entre el món de caselles d'en Bit i l'escenari de Creadors. L'alumnat tradueix els blocs que ja coneix (Endavant → mou-te, Gira → gira 90 graus) i descobreix el que és nou a aquesta edat: un món de 480 × 360 punts amb el (0, 0) al centre, passos negatius que fan recular i diversos actors amb guions que comencen alhora. La classe comença amb demostracions projectades, continua amb el marcatge de l'escena en una recta numèrica al terra i acaba a l'ordinador amb quatre reptes i una petita creació. Si algú no ha fet Tech Robot, la targeta del pont i les demostracions n'hi ha prou per seguir.|Nivel: Ciclo superior (5º-6º, 10-12 años) · Recomendado después de Tech Robot. Primera sesión del curso: hace de puente entre el mundo de casillas de Bit y el escenario de Creadors. El alumnado traduce los bloques que ya conoce (Adelante → muévete, Gira → gira 90 grados) y descubre lo que es nuevo a esta edad: un mundo de 480 × 360 puntos con el (0, 0) en el centro, pasos negativos que hacen retroceder y varios actores con guiones que empiezan a la vez. La clase empieza con demostraciones proyectadas, sigue con el marcaje de la escena en una recta numérica en el suelo y termina en el ordenador con cuatro retos y una pequeña creación. Si alguien no ha hecho Tech Robot, la tarjeta del puente y las demostraciones bastan para seguir.",
    claus: [
      "Els blocs d'en Bit tenen equivalent: Endavant → mou-te N passos; Gira a la dreta → gira 90 graus; Gira a l'esquerra → gira -90 graus.|Los bloques de Bit tienen equivalente: Adelante → muévete N pasos; Gira a la derecha → gira 90 grados; Gira a la izquierda → gira -90 grados.",
      "L'escenari no té caselles: fa 480 × 360 punts, amb el (0, 0) al centre, la x positiva a la dreta i la y positiva amunt.|El escenario no tiene casillas: mide 480 × 360 puntos, con el (0, 0) en el centro, la x positiva a la derecha y la y positiva arriba.",
      "«Mou-te» amb un número negatiu fa recular sense girar-se; on acaba l'actor es calcula sumant (-100 + 150 = 50).|«Muévete» con un número negativo hace retroceder sin girarse; dónde termina el actor se calcula sumando (-100 + 150 = 50).",
      "Cada actor té el seu guió i, amb la bandera verda, tots els guions «Quan comença» arrenquen alhora; dins de cada guió, els blocs van de dalt a baix.|Cada actor tiene su guion y, con la bandera verde, todos los guiones «Al empezar» arrancan a la vez; dentro de cada guion, los bloques van de arriba abajo.",
      "Predir on acabarà un actor abans de tocar la bandera, provar i ajustar és la manera normal de treballar.|Predecir dónde terminará un actor antes de tocar la bandera, probar y ajustar es la manera normal de trabajar."
    ],
    prev: [
      "Recomanat: haver fet Tech Robot (seqüències, girs, bucles i «si»). Si no, la targeta del pont i les demostracions ho expliquen tot.|Recomendado: haber hecho Tech Robot (secuencias, giros, bucles y «si»). Si no, la tarjeta del puente y las demostraciones lo explican todo.",
      "Sumar i restar amb nombres enters en una recta numèrica, també per sota de zero (matemàtiques de cicle superior).|Sumar y restar con números enteros en una recta numérica, también por debajo de cero (matemáticas de ciclo superior).",
      "Llegir enunciats curts amb autonomia i fer servir el ratolí o la pantalla tàctil.|Leer enunciados cortos con autonomía y usar el ratón o la pantalla táctil."
    ],
    faq: [
      ["Per què el personatge gairebé no es mou si he posat «mou-te 10»?|¿Por qué el personaje casi no se mueve si he puesto «muévete 10»?",
        "Sí que es mou, però 10 punts és un trosset: l'escenari en fa 480 d'ample. Una casella d'en Bit serien uns 50 punts; prova amb 100 o 200.|Sí que se mueve, pero 10 puntos es un trocito: el escenario mide 480 de ancho. Una casilla de Bit serían unos 50 puntos; prueba con 100 o 200."],
      ["Què vol dir un número negatiu a «mou-te»?|¿Qué quiere decir un número negativo en «muévete»?",
        "Que l'actor recula sense girar-se. Per saber on acaba, suma: si és a x = 50 i fa -100, acaba a x = -50.|Que el actor retrocede sin girarse. Para saber dónde termina, suma: si está en x = 50 y hace -100, termina en x = -50."],
      ["En Bit tenia un sol programa. Aquí quants n'hi ha?|Bit tenía un solo programa. ¿Aquí cuántos hay?",
        "Un guió per a cada actor (i més endavant, diversos per actor). Amb la bandera verda comencen tots alhora: per això cal pensar què fa cadascun al mateix temps.|Un guion para cada actor (y más adelante, varios por actor). Con la bandera verde empiezan todos a la vez: por eso hay que pensar qué hace cada uno al mismo tiempo."],
      ["Puc escriure jo la frase del «digues»?|¿Puedo escribir yo la frase del «di»?",
        "Sí: toca el text del bloc i escriu una frase curta, o tria'n una de les que ofereix l'app.|Sí: toca el texto del bloque y escribe una frase corta, o elige una de las que ofrece la app."],
      ["On és el bloc «Gira a la dreta» d'en Bit?|¿Dónde está el bloque «Gira a la derecha» de Bit?",
        "Avui encara no surt als reptes: l'estrenarem a la sessió 2, amb graus (gira 90, gira 45…) i amb «apunta en direcció».|Hoy aún no sale en los retos: lo estrenaremos en la sesión 2, con grados (gira 90, gira 45…) y con «apunta en dirección»."],
      ["He esborrat un bloc sense voler. Què faig?|He borrado un bloque sin querer. ¿Qué hago?",
        "Torna'l a afegir des de la paleta. El botó de la fletxa rodona només torna els actors al lloc del principi: els blocs no s'esborren.|Vuelve a añadirlo desde la paleta. El botón de la flecha redonda solo devuelve a los actores al sitio del principio: los bloques no se borran."]
    ],
    tec: [
      ["Toco la bandera i no passa res.|Toco la bandera y no pasa nada.",
        "Comproveu que els blocs pengen de la capçalera «Quan comença» i que, a dalt, està seleccionat l'actor que s'ha programat.|Comprobad que los bloques cuelgan de la cabecera «Al empezar» y que, arriba, está seleccionado el actor que se ha programado."],
      ["El repte diu que no funciona, però el personatge sembla que arriba a la marca.|El reto dice que no funciona, pero el personaje parece que llega a la marca.",
        "La zona de la marca és petita: que mirin si s'ha quedat curt o s'ha passat i ajustin el número de 10 en 10.|La zona de la marca es pequeña: que miren si se ha quedado corto o se ha pasado y ajusten el número de 10 en 10."],
      ["Al mòbil, l'escenari i els blocs no hi caben bé.|En el móvil, el escenario y los bloques no caben bien.",
        "Gireu el mòbil en horitzontal o feu servir l'ordinador; a l'aula, poseu la finestra del navegador a pantalla completa.|Girad el móvil en horizontal o usad el ordenador; en el aula, poned la ventana del navegador a pantalla completa."],
      ["No es pot escriure el número del bloc.|No se puede escribir el número del bloque.",
        "Cal tocar el número del bloc: s'obre una finestra amb un requadre; s'hi escriu el número (també amb «-») i es toca OK o es prem Retorn.|Hay que tocar el número del bloque: se abre una ventana con un recuadro; se escribe el número (también con «-») y se toca OK o se pulsa Intro."],
      ["La demostració de la presentació no es mou.|La demostración de la presentación no se mueve.",
        "Les demostracions es tornen a fer soles al cap d'uns segons. Si està aturada, recarregueu la pàgina (F5) i torneu a la diapositiva.|Las demostraciones se repiten solas al cabo de unos segundos. Si está parada, recargad la página (F5) y volved a la diapositiva."],
      ["Un alumne/a veu el nom d'un altre o no troba la sessió.|Un alumno/a ve el nombre de otro o no encuentra la sesión.",
        "Que surti i torni a entrar amb el seu perfil; comproveu al panell que la sessió és oberta per al grup.|Que salga y vuelva a entrar con su perfil; comprobad en el panel que la sesión está abierta para el grupo."]
    ],
    seg: [
      "Recta del terra sense motxilles ni cadires a prop; es camina, no es corre, i els passos enrere es fan a poc a poc mirant que no hi hagi ningú darrere.|Recta del suelo sin mochilas ni sillas cerca; se camina, no se corre, y los pasos hacia atrás se dan despacio mirando que no haya nadie detrás.",
      "Davant la pantalla: ben asseguts i a un braç de distància; a la pausa activa, que mirin lluny uns segons per descansar la vista.|Delante de la pantalla: bien sentados y a un brazo de distancia; en la pausa activa, que miren lejos unos segundos para descansar la vista.",
      "Ningú no està obligat a fer d'actor/actriu davant de tothom: els papers de director/a i de calculador/a també compten.|Nadie está obligado a hacer de actor/actriz delante de todos: los papeles de director/a y de calculador/a también cuentan."
    ],
    extra: [
      "Fer que el Cavaller vagi a la dreta, torni enrere i acabi exactament on ha començat: la suma dels números ha de donar 0.|Hacer que el Caballero vaya a la derecha, vuelva hacia atrás y termine exactamente donde ha empezado: la suma de los números tiene que dar 0.",
      "Al marcatge del terra, afegir un tercer actor que comenci a x = 200 i acabi exactament entre els altres dos: quin número li cal?|En el marcaje del suelo, añadir un tercer actor que empiece en x = 200 y termine exactamente entre los otros dos: ¿qué número le hace falta?",
      "Traduir un programa curt d'en Bit (Endavant, Endavant, Gira a la dreta, Endavant) a blocs de l'escenari, amb 50 punts per casella.|Traducir un programa corto de Bit (Adelante, Adelante, Gira a la derecha, Adelante) a bloques del escenario, con 50 puntos por casilla."
    ],
    trans: [
      "Matemàtiques: la recta numèrica amb nombres enters, sumes amb negatius i estimació de distàncies.|Matemáticas: la recta numérica con números enteros, sumas con negativos y estimación de distancias.",
      "Teatre: el marcatge (on es col·loca cada actor i on es mou) i el guió de cada paper.|Teatro: el marcaje (dónde se coloca cada actor y dónde se mueve) y el guion de cada papel.",
      "Sessió següent: direccions en graus (0, 90, 180, -90 i les diagonals), «apunta» i «gira», i diàlegs amb temps.|Sesión siguiente: direcciones en grados (0, 90, 180, -90 y las diagonales), «apunta» y «gira», y diálogos con tiempo."
    ],
    obj: [
      "L'alumne/a tradueix els blocs de moviment d'en Bit als de l'escenari i explica què hi ha de nou.|El alumno/a traduce los bloques de movimiento de Bit a los del escenario y explica qué hay de nuevo.",
      "L'alumne/a situa punts a l'escenari de 480 × 360 i calcula on acaba un actor després de moure's amb números positius i negatius.|El alumno/a sitúa puntos en el escenario de 480 × 360 y calcula dónde termina un actor después de moverse con números positivos y negativos.",
      "L'alumne/a explica que cada actor té el seu guió i que, amb la bandera verda, tots comencen alhora.|El alumno/a explica que cada actor tiene su guion y que, con la bandera verde, todos empiezan a la vez.",
      "L'alumne/a programa un actor que arriba a una marca i diu una frase al públic.|El alumno/a programa a un actor que llega a una marca y dice una frase al público."
    ],
    comp: [
      "Competència digital (CD5): crear un programa de blocs per animar diversos actors en un escenari|Competencia digital (CD5): crear un programa de bloques para animar a varios actores en un escenario",
      "Pensament computacional: transferència d'un llenguatge de blocs a un altre, seqüència i execució simultània de guions|Pensamiento computacional: transferencia de un lenguaje de bloques a otro, secuencia y ejecución simultánea de guiones",
      "Matemàtiques: nombres enters a la recta, sumes amb negatius i estimació de distàncies|Matemáticas: números enteros en la recta, sumas con negativos y estimación de distancias",
      "Expressió artística: el marcatge i el guió d'una escena de teatre|Expresión artística: el marcaje y el guion de una escena de teatro"
    ],
    vocab: [
      ["Escenari|Escenario", "El món de 480 × 360 punts on passa tot, amb el (0, 0) al centre.|El mundo de 480 × 360 puntos donde pasa todo, con el (0, 0) en el centro."],
      ["Actor o personatge|Actor o personaje", "Un element de l'escenari amb dibuix propi i els seus guions.|Un elemento del escenario con dibujo propio y sus guiones."],
      ["Guió|Guion", "Els blocs d'un actor, sota una capçalera com «Quan comença».|Los bloques de un actor, bajo una cabecera como «Al empezar»."],
      ["Alhora|A la vez", "Dos guions que funcionen al mateix temps, sense esperar-se l'un a l'altre.|Dos guiones que funcionan al mismo tiempo, sin esperarse el uno al otro."],
      ["Punts (passos)|Puntos (pasos)", "La unitat de l'escenari: en fa 480 d'ample i 360 d'alt.|La unidad del escenario: mide 480 de ancho y 360 de alto."],
      ["Marcatge|Marcaje", "Al teatre, on es col·loca cada actor i com es mou per l'escenari.|En el teatro, dónde se coloca cada actor y cómo se mueve por el escenario."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «D'en Bit a l'escenari»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «De Bit al escenario»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 rotllo de cinta de pintor per marcar al terra una recta de 4 metres amb una creu al mig (x = 0) i una marca cada pam (cada 50 punts)|1 rollo de cinta de pintor para marcar en el suelo una recta de 4 metros con una cruz en el medio (x = 0) y una marca cada palmo (cada 50 puntos)",
        "Retoladors per escriure els números de la recta (-200, -150… 150, 200) i 1 full verd (la bandera)|Rotuladores para escribir los números de la recta (-200, -150… 150, 200) y 1 hoja verde (la bandera)"
      ],
      imprimir: [
        "1 full de marcatge per grup de 4 (imprimible 1)|1 hoja de marcaje por grupo de 4 (imprimible 1)",
        "1 paquet de targetes de blocs per grup (imprimible 2), opcional per a qui necessiti tenir els blocs a la mà|1 paquete de tarjetas de bloques por grupo (imprimible 2), opcional para quien necesite tener los bloques en la mano"
      ],
      prep: [
        "El dia abans (10 min): imprimir els fulls de marcatge i, si cal, retallar les targetes de blocs.|El día antes (10 min): imprimir las hojas de marcaje y, si hace falta, recortar las tarjetas de bloques.",
        "Abans de la classe (10 min): marcar la recta al terra amb cinta, la creu del 0 i les marques cada pam amb el seu número.|Antes de la clase (10 min): marcar la recta en el suelo con cinta, la cruz del 0 y las marcas cada palmo con su número.",
        "Provar abans les demostracions de les diapositives 6, 7 i 8 per saber què fa cada actor.|Probar antes las demostraciones de las diapositivas 6, 7 y 8 para saber qué hace cada actor.",
        "Deixar els ordinadors encesos amb Numi Tech obert i el perfil de cada alumne/a iniciat.|Dejar los ordenadores encendidos con Numi Tech abierto y el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda a l'estudi del teatre|Bienvenida al estudio del teatro", fase: 'inici',
        fa: "Presenta el curs: durant l'any crearan animacions, històries interactives i, al final, el seu propi videojoc. Pregunta qui ha fet Tech Robot i què recorda d'en Bit. Projecta la pregunta de la diapositiva 2 i recull hipòtesis sobre què canviarà sense corregir-les.|Presenta el curso: durante el año crearán animaciones, historias interactivas y, al final, su propio videojuego. Pregunta quién ha hecho Tech Robot y qué recuerda de Bit. Proyecta la pregunta de la diapositiva 2 y recoge hipótesis sobre qué cambiará sin corregirlas.",
        diu: ["Qui recorda els blocs d'en Bit? Quins feia servir més?|¿Quién recuerda los bloques de Bit? ¿Cuáles usaba más?",
          "En Bit anava de casella en casella. I si no hi hagués caselles?|Bit iba de casilla en casilla. ¿Y si no hubiera casillas?", "Avui sereu directors i directores d'escena: els actors seran a l'ordinador.|Hoy seréis directores y directoras de escena: los actores estarán en el ordenador."],
        slides: ['s1', 's2'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pont i el món de 480 × 360|El puente y el mundo de 480 × 360", fase: 'teoria',
        fa: "Fes la traducció dels blocs amb la diapositiva del pont: que la classe digui l'equivalent abans que surti. Presenta l'escenari com una recta (i un pla) de punts amb el (0, 0) al centre. Fes que tothom calculi on acabarà en Numi abans de tocar la bandera i acaba amb els tres actors que es mouen alhora.|Haz la traducción de los bloques con la diapositiva del puente: que la clase diga el equivalente antes de que salga. Presenta el escenario como una recta (y un plano) de puntos con el (0, 0) en el centro. Haz que todos calculen dónde terminará Numi antes de tocar la bandera y termina con los tres actores que se mueven a la vez.",
        diu: ["Endavant, en Bit, era una casella. Quants punts creieu que és aquí? (Uns 50.)|Adelante, en Bit, era una casilla. ¿Cuántos puntos creéis que es aquí? (Unos 50.)",
          "Si en Numi és a -150 i avança 150 punts, on acaba? (Al centre, al 0.)|Si Numi está en -150 y avanza 150 puntos, ¿dónde termina? (En el centro, en el 0.)",
          "I si és a 50 i fa -100? (A -50: ha passat a l'altre costat del zero.)|¿Y si está en 50 y hace -100? (En -50: ha pasado al otro lado del cero.)", "Tres actors, tres guions: en quin ordre comencen? (Tots alhora.)|Tres actores, tres guiones: ¿en qué orden empiezan? (Todos a la vez.)"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El marcatge de l'escena a la recta del terra|El marcaje de la escena en la recta del suelo", fase: 'desconnectat',
        fa: "Grups de 4: un director/a, dos actors i un calculador/a. El director/a omple el full de marcatge (on comença cada actor i dues ordres per a cadascun). Abans de començar, el calculador/a escriu on acabarà cada actor. Quan s'aixeca el full verd, els dos actors fan el seu guió alhora sobre la recta (cada pam són 50 punts) i el grup comprova el càlcul. Després de cada escena, els papers roten.|Grupos de 4: un director/a, dos actores y un calculador/a. El director/a rellena la hoja de marcaje (dónde empieza cada actor y dos órdenes para cada uno). Antes de empezar, el calculador/a escribe dónde terminará cada actor. Cuando se levanta la hoja verde, los dos actores hacen su guion a la vez sobre la recta (cada palmo son 50 puntos) y el grupo comprueba el cálculo. Después de cada escena, los papeles rotan.",
        diu: ["Els actors només fan el que diu el full, encara que vegin que no arriben.|Los actores solo hacen lo que dice la hoja, aunque vean que no llegan.",
          "Els passos negatius es fan enrere sense girar-se.|Los pasos negativos se dan hacia atrás sin girarse.",
          "Calculador/a: on havies dit que acabaria? Ha coincidit?|Calculador/a: ¿dónde habías dicho que terminaría? ¿Ha coincidido?", "Els dos actors comencen alhora: algú ha hagut d'esperar l'altre? (No: cadascú té el seu guió.)|Los dos actores empiezan a la vez: ¿alguien ha tenido que esperar al otro? (No: cada uno tiene su guion.)"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «El marcatge de l'escena», que toquin «Ho hem fet!», perquè ja l'han fet a classe. Passeja i, a l'assaig de tres actors, demana que expliquin què fa cada actor abans de mirar-ne els blocs. A la pregunta de la Tuga, que facin el càlcul en veu baixa abans de triar.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «El marcaje de la escena», que toquen «¡Lo hemos hecho!», porque ya lo han hecho en clase. Pasea y, en el ensayo de tres actores, pide que expliquen qué hace cada actor antes de mirar sus bloques. En la pregunta de Tuga, que hagan el cálculo en voz baja antes de elegir.",
        diu: ["Toca un actor de la llista: quin guió té?|Toca un actor de la lista: ¿qué guion tiene?",
          "On acabarà la Tuga? Fes la resta: 50 - 100.|¿Dónde terminará Tuga? Haz la resta: 50 - 100.", "Abans de mirar els blocs: què ha fet cada actor? (Una avança, l'altra parla i l'altre va enrere, tots alhora.)|Antes de mirar los bloques: ¿qué ha hecho cada actor? (Una avanza, otra habla y el otro va hacia atrás, todos a la vez.)", "On ha anat a parar la Guida amb -240? (A -360, fora de l'escenari.)|¿Dónde ha ido a parar Guida con -240? (A -360, fuera del escenario.)"],
        slides: ['s11'], app: "De «La missió» fins a «Investiga»: les històries, les 5 targetes de teoria (el pont, el món, mou-te, el repartiment i digues), la pregunta d'en Numi, ordenar els passos, «El marcatge de l'escena» (ja fet), l'assaig, la pregunta de la Tuga i la Guida que va enrere.|De «La misión» hasta «Investiga»: las historias, las 5 tarjetas de teoría (el puente, el mundo, muévete, el reparto y di), la pregunta de Numi, ordenar los pasos, «El marcaje de la escena» (ya hecho), el ensayo, la pregunta de Tuga y Guida que va hacia atrás.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: les marques dels actors|Retos: las marcas de los actores", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després resol amb la classe el primer repte (en Numi fins a la marca): primer estimeu la distància amb la recta (de -160 a uns 60) i després proveu. Deixa'ls fer la resta. Remarca que estimar, provar i ajustar és una manera de treballar molt bona.|Haced la pausa activa todos juntos. Después resuelve con la clase el primer reto (Numi hasta la marca): primero estimad la distancia con la recta (de -160 a unos 60) y después probad. Deja que hagan el resto. Remarca que estimar, probar y ajustar es una manera de trabajar muy buena.",
        diu: ["De -160 a 60, quants punts hi ha? (220.)|De -160 a 60, ¿cuántos puntos hay? (220.)",
          "Per què la Guida necessita una frase amb segons quan arriba al regal?|¿Por qué Guida necesita una frase con segundos cuando llega al regalo?", "La marca d'en Vuit és a l'esquerra: el número serà positiu o negatiu? (Negatiu.)|La marca de Vuit está a la izquierda: ¿el número será positivo o negativo? (Negativo.)"],
        slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: en Numi a la marca, en Vuit enrere, la Flama que saluda i la Guida que va i torna.|«Pausa activa» y los cuatro retos: Numi a la marca, Vuit hacia atrás, Flama que saluda y Guida que va y vuelve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: el meu primer personatge|Crea: mi primer personaje", fase: 'crea',
        fa: "Cada alumne/a programa l'entrada del Cavaller com vulgui (moure's i dir alguna cosa) i el desa. Qui acabi ensenya el seu al company/a i li demana que predigui on acabarà abans de tocar la bandera.|Cada alumno/a programa la entrada del Caballero como quiera (moverse y decir algo) y lo guarda. Quien termine enseña el suyo al compañero/a y le pide que prediga dónde terminará antes de tocar la bandera.",
        diu: ["No hi ha una sola resposta bona: cada cavaller pot entrar diferent.|No hay una sola respuesta buena: cada caballero puede entrar diferente.", "Abans de tocar la bandera, el company/a diu a quina x acabarà el teu cavaller.|Antes de tocar la bandera, el compañero/a dice en qué x terminará tu caballero.", "Es pot llegir la frase? Si desapareix de pressa, posa-hi més segons.|¿Se puede leer la frase? Si desaparece deprisa, ponle más segundos."],
        slides: ['s14'], app: "Pas «Crea»: El meu primer personatge.|Paso «Crea»: Mi primer personaje.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals de l'app i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales de la app y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Què té l'escenari que no tenia el món d'en Bit?|¿Qué tiene el escenario que no tenía el mundo de Bit?", "Si un actor és a x = -100 i fa mou-te 250 i mou-te -50, on acaba? (A x = 100.)|Si un actor está en x = -100 y hace muévete 250 y muévete -50, ¿dónde termina? (En x = 100.)", "Recordeu les hipòtesis del principi: què ha canviat de debò?|Recordad las hipótesis del principio: ¿qué ha cambiado de verdad?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa números molt petits (mou-te 10) com si fossin caselles d'en Bit.|Pone números muy pequeños (muévete 10) como si fueran casillas de Bit.",
        "Recorda-li que no hi ha caselles: l'escenari fa 480 punts d'ample i una casella serien uns 50. On és la marca: a la meitat? A un quart? Que estimi abans de provar.|Recuérdale que no hay casillas: el escenario mide 480 puntos de ancho y una casilla serían unos 50. ¿Dónde está la marca: en la mitad? ¿En un cuarto? Que estime antes de probar."],
      ["Per anar a l'esquerra busca un bloc «esquerra» o vol girar el personatge.|Para ir a la izquierda busca un bloque «izquierda» o quiere girar al personaje.",
        "Recorda la recta del terra: com anàveu enrere sense girar-vos? Quin signe porta aquell número?|Recuerda la recta del suelo: ¿cómo ibais hacia atrás sin giraros? ¿Qué signo lleva ese número?"],
      ["Calcula malament quan passa de positiu a negatiu (de 50, fa -100 i diu que acaba a -100).|Calcula mal cuando pasa de positivo a negativo (desde 50, hace -100 y dice que termina en -100).",
        "Que ho faci amb el dit sobre la recta del full de marcatge: 100 punts enrere des del 50, comptant de 50 en 50.|Que lo haga con el dedo sobre la recta de la hoja de marcaje: 100 puntos atrás desde el 50, contando de 50 en 50."],
      ["Creu que els actors es fan per torns: primer un guió i després l'altre.|Cree que los actores se hacen por turnos: primero un guion y después el otro.",
        "Torna a l'assaig de tres actors: tots es mouen alhora. Cadascú té el seu guió i la bandera els fa arrencar junts.|Vuelve al ensayo de tres actores: todos se mueven a la vez. Cada uno tiene su guion y la bandera los hace arrancar juntos."],
      ["Posa els blocs fora del guió (no queden sota «Quan comença») i no passa res.|Pone los bloques fuera del guion (no quedan bajo «Al empezar») y no pasa nada.",
        "Que miri on diu «els blocs nous van aquí» i comprovi que els blocs pengen de la capçalera verda.|Que mire dónde dice «los bloques nuevos van aquí» y compruebe que los bloques cuelgan de la cabecera verde."],
      ["Esborra tot el guió quan no arriba a la marca.|Borra todo el guion cuando no llega a la marca.",
        "Que miri si s'ha quedat curt o s'ha passat i canviï només el número.|Que mire si se ha quedado corto o se ha pasado y cambie solo el número."]
    ],
    diff: {
      mes: "Fer que el Cavaller vagi a la dreta, torni a l'esquerra i torni al mig, dient una frase a cada lloc, i que acabi exactament on ha començat (la suma dels números ha de donar 0). Traduir després un programa d'en Bit de quatre blocs a l'escenari.|Hacer que el Caballero vaya a la derecha, vuelva a la izquierda y vuelva al centro, diciendo una frase en cada sitio, y que termine exactamente donde ha empezado (la suma de los números tiene que dar 0). Traducir después un programa de Bit de cuatro bloques al escenario.",
      menys: "Tenir el full de marcatge al costat de l'ordinador per comptar sobre la recta. Començar pel repte d'en Numi i provar números de 50 en 50, com si fossin caselles.|Tener la hoja de marcaje al lado del ordenador para contar sobre la recta. Empezar por el reto de Numi y probar números de 50 en 50, como si fueran casillas."
    },
    aval: {
      ticket: ["Una diferència entre el món d'en Bit i l'escenari.|Una diferencia entre el mundo de Bit y el escenario.",
        "Un actor és a x = 50 i fa mou-te -100: on acaba?|Un actor está en x = 50 y hace muévete -100: ¿dónde termina?"],
      rubric: [
        ["Del Bit a l'escenari|De Bit al escenario", "Tradueix els blocs d'en Bit als de l'escenari i explica què és nou (punts, negatius, diversos guions).|Traduce los bloques de Bit a los del escenario y explica qué es nuevo (puntos, negativos, varios guiones).", "Reconeix alguns blocs, però encara pensa en caselles.|Reconoce algunos bloques, pero aún piensa en casillas."],
        ["Endavant i enrere|Adelante y atrás", "Calcula on acaba un actor amb positius i negatius, també quan passa pel zero.|Calcula dónde termina un actor con positivos y negativos, también cuando pasa por el cero.", "Necessita provar molts números o ajuda per anar enrere.|Necesita probar muchos números o ayuda para ir hacia atrás."],
        ["Guions alhora|Guiones a la vez", "Explica que cada actor té el seu guió i que tots comencen amb la bandera.|Explica que cada actor tiene su guion y que todos empiezan con la bandera.", "Creu que els guions es fan per torns.|Cree que los guiones se hacen por turnos."],
        ["Predir, provar i ajustar|Predecir, probar y ajustar",
          "Prediu on acabarà, prova el programa i canvia el número fins que arriba.|Predice dónde terminará, prueba el programa y cambia el número hasta que llega.",
          "Esborra i torna a començar, o espera que algú li digui el número.|Borra y vuelve a empezar, o espera a que alguien le diga el número."]
      ]
    },
    casa: "A casa podeu fer «El marcatge de l'escena» al passadís: una tira de paper amb el 0 al mig i marques de 50 en 50; una persona escriu dues ordres per a cada actor i l'altra calcula on acabarà abans de fer-les.|En casa podéis hacer «El marcaje de la escena» en el pasillo: una tira de papel con el 0 en el medio y marcas de 50 en 50; una persona escribe dos órdenes para cada actor y la otra calcula dónde terminará antes de hacerlas.",
    slides: [
      { id: 's1', k: 'portada', t: "D'en Bit a l'escenari|De Bit al escenario", x: "A l'estudi del Teatre de l'illa, els actors són digitals… i tu en seràs el director/a.|En el estudio del Teatro de la isla, los actores son digitales… y tú serás su director/a.",
        nota: "Presenta el curs i l'objectiu d'avui: passar del món de caselles d'en Bit a un escenari de punts amb molts actors.|Presenta el curso y el objetivo de hoy: pasar del mundo de casillas de Bit a un escenario de puntos con muchos actores." },
      { id: 's2', k: 'pregunta', t: "Què canviarà d'en Bit a l'escenari?|¿Qué cambiará de Bit al escenario?", punts: ["Caselles… o punts?|¿Casillas… o puntos?", "Un programa… o un guió per a cada actor?|¿Un programa… o un guion para cada actor?", "Girar a la dreta… o mirar a 90 graus?|¿Girar a la derecha… o mirar a 90 grados?"],
        nota: "Recull hipòtesis sense corregir. Hi tornareu al tancament per veure quines s'han complert.|Recoge hipótesis sin corregir. Volveréis a ellas en el cierre para ver cuáles se han cumplido." },
      { id: 's3', k: 'anim', t: "El diccionari: d'en Bit a l'escenari|El diccionario: de Bit al escenario", anim: 'g1bridge', x: "Endavant → mou-te · Gira a la dreta → gira 90 graus · I un bloc nou: apunta en direcció.|Adelante → muévete · Gira a la derecha → gira 90 grados · Y un bloque nuevo: apunta en dirección.",
        nota: "Abans que surti cada fila, que la classe digui l'equivalent. Qui no ha fet Tech Robot pot seguir la traducció igualment.|Antes de que salga cada fila, que la clase diga el equivalente. Quien no ha hecho Tech Robot puede seguir la traducción igualmente." },
      { id: 's4', k: 'anim', t: "Un món de 480 × 360 punts|Un mundo de 480 × 360 puntos", anim: 'g1stage', x: "El (0, 0) al centre: la x creix cap a la dreta i la y, cap amunt.|El (0, 0) en el centro: la x crece hacia la derecha y la y, hacia arriba.",
        nota: "Les coordenades es treballen a fons a la unitat 4. Avui n'hi ha prou amb la x: on és el 0 i on són els negatius.|Las coordenadas se trabajan a fondo en la unidad 4. Hoy basta con la x: dónde está el 0 y dónde están los negativos." },
      { id: 's5', k: 'anim', t: "Mou-te: punts endavant i enrere|Muévete: puntos adelante y atrás", anim: 'g1move', x: "Positiu: endavant. Negatiu: enrere, sense girar-se.|Positivo: adelante. Negativo: atrás, sin girarse.",
        nota: "Fes que la classe calculi on acabarà la Tuga abans de cada moviment (de 0 a 100 i de 100 a -100).|Haz que la clase calcule dónde terminará Tuga antes de cada movimiento (de 0 a 100 y de 100 a -100)." },
      { id: 's6', k: 'media', t: "Prediu: on acabarà?|Predice: ¿dónde terminará?", x: "En Numi és a x = -150, fa mou-te 150 passos i després digues. On acabarà?|Numi está en x = -150, hace muévete 150 pasos y después di. ¿Dónde terminará?",
        media: { k: 'stage', w: T([{ id: 'numi', art: 'numi', x: -150, y: -95, costume: 1 }]), prog: '@numi flag{ say:"Vinc!|¡Voy!",1 move:150 say:"Bon dia, públic!|¡Buenos días, público!",3 }', time: 5 },
        nota: "Abans que es mogui, que tothom escrigui la x final en un paper. Acaba al centre: -150 + 150 = 0.|Antes de que se mueva, que todos escriban la x final en un papel. Termina en el centro: -150 + 150 = 0." },
      { id: 's7', k: 'media', t: "Molts actors, alhora|Muchos actores, a la vez", x: "Cada actor té el seu guió, i la bandera els fa començar tots junts.|Cada actor tiene su guion, y la bandera los hace empezar a todos juntos.",
        media: { k: 'stage', w: T([{ id: 'vuit', art: 'vuit', x: -160, y: -95 }, { id: 'numi', art: 'numi', x: -20, y: -95, costume: 1 }, { id: 'guida', art: 'guida', x: 130, y: -95 }]), prog: '@guida flag{ point:-90 } @vuit flag{ think:"Quins nervis!|¡Qué nervios!",3 } @numi flag{ move:20 say:"Benvinguts!|¡Bienvenidos!",3 }', time: 4 },
        nota: "Compara-ho amb en Bit, que tenia un sol programa. Aquí, tres guions funcionen al mateix temps.|Compáralo con Bit, que tenía un solo programa. Aquí, tres guiones funcionan al mismo tiempo." },
      { id: 's8', k: 'media', t: "Endavant i enrere, alhora|Adelante y atrás, a la vez", x: "La Guida avança, en Vuit recula i la Tuga parla, tot a la vegada.|Guida avanza, Vuit retrocede y Tuga habla, todo a la vez.",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: -170, y: -95 }, { id: 'tuga', art: 'tuga', x: 0, y: -95 }, { id: 'vuit', art: 'vuit', x: 170, y: -95 }]), prog: '@guida flag{ move:100 say:"Ja hi soc!|¡Ya estoy!",2 } @tuga flag{ say:"Bon dia a tothom!|¡Buenos días a todos!",3 } @vuit flag{ move:-90 say:"Jo vaig enrere!|¡Yo voy hacia atrás!",2 }', time: 4 },
        nota: "Pregunta on acaba cadascú: la Guida a -70 i en Vuit a 80.|Pregunta dónde termina cada uno: Guida en -70 y Vuit en 80." },
      { id: 's9', k: 'activitat', t: "El marcatge de l'escena|El marcaje de la escena", timer: 12, punts: ["Director/a: omple el full de marcatge per a dos actors.|Director/a: rellena la hoja de marcaje para dos actores.", "Calculador/a: escriu on acabarà cada actor.|Calculador/a: escribe dónde terminará cada actor.", "Bandera verda: els dos actors fan el seu guió alhora sobre la recta.|Bandera verde: los dos actores hacen su guion a la vez sobre la recta.", "Comproveu el càlcul i canvieu els papers.|Comprobad el cálculo y cambiad los papeles."],
        nota: "Cada pam de la recta són 50 punts. Els negatius, enrere i sense girar-se. Ningú no corre.|Cada palmo de la recta son 50 puntos. Los negativos, hacia atrás y sin girarse. Nadie corre." },
      { id: 's10', k: 'activitat', t: "El full de marcatge|La hoja de marcaje", punts: ["Cada actor: on comença (x) i dues ordres.|Cada actor: dónde empieza (x) y dos órdenes.", "Predicció: on acabarà? (-100 + 150 = 50)|Predicción: ¿dónde terminará? (-100 + 150 = 50)", "Si no coincideix, busqueu l'ordre que falla.|Si no coincide, buscad la orden que falla."],
        blocks: [{ t: "Quan comença|Al empezar", c: 'loop' }, { t: "mou-te 150 passos|muévete 150 pasos", c: 'mov' }, { t: "mou-te -100 passos|muévete -100 pasos", c: 'mov' }, { t: "digues «Bon dia!»|di «¡Buenos días!»", c: 'art' }],
        nota: "Deixa-la projectada mentre treballen a terra.|Déjala proyectada mientras trabajan en el suelo." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «D'en Bit a l'escenari».|Abre «De Bit al escenario».", "Fes la missió i les targetes de «Descobreix».|Haz la misión y las tarjetas de «Descubre».", "A «El marcatge de l'escena», toca «Ho hem fet!».|En «El marcaje de la escena», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A l'assaig de tres actors, demana que expliquin què farà cada actor abans de tocar la bandera.|En el ensayo de tres actores, pide que expliquen qué hará cada actor antes de tocar la bandera." },
      { id: 's12', k: 'media', t: "Fem el primer repte junts|Hagamos el primer reto juntos", x: "En Numi és a x = -160 i la marca, a uns x = 60. Quants punts calen?|Numi está en x = -160 y la marca, en unos x = 60. ¿Cuántos puntos hacen falta?",
        media: { k: 'stage', w: T([{ id: 'numi', art: 'numi', x: -160, y: -95 }, { id: 'marca', art: 'estrella', x: 60, y: -150, size: 60 }]), prog: '@numi flag{ say:"Hi arribaré?|¿Llegaré?",2 move:220 say:"Sí!|¡Sí!",2 }', time: 5 },
        nota: "Que facin la resta abans de provar: 60 - (-160) = 220. Si algú diu 100, proveu-ho i mireu que es queda curt.|Que hagan la resta antes de probar: 60 - (-160) = 220. Si alguien dice 100, probadlo y mirad que se queda corto." },
      { id: 's13', k: 'repte', t: "Reptes: les marques dels actors|Retos: las marcas de los actores", timer: 10, punts: ["1. En Numi a la seva marca|1. Numi en su marca", "2. En Vuit va enrere|2. Vuit va hacia atrás", "3. La Flama saluda el públic|3. Flama saluda al público", "4. La Guida va al regal i torna|4. Guida va al regalo y vuelve"],
        nota: "Qui acabi ajuda un company/a fent preguntes, sense tocar-li el ratolí.|Quien termine ayuda a un compañero/a haciendo preguntas, sin tocarle el ratón." },
      { id: 's14', k: 'activitat', t: "Crea: el meu primer personatge|Crea: mi primer personaje", timer: 5, x: "El Cavaller surt a escena: que es mogui i digui alguna cosa al públic.|El Caballero sale a escena: que se mueva y diga algo al público.",
        nota: "Celebra que cada cavaller entri d'una manera diferent i que el company/a encerti on acaba.|Celebra que cada caballero entre de una manera diferente y que el compañero/a acierte dónde termina." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Els blocs d'en Bit tenen equivalent a l'escenari.|Los bloques de Bit tienen equivalente en el escenario.", "Un món de 480 × 360 punts: positius i negatius.|Un mundo de 480 × 360 puntos: positivos y negativos.", "Cada actor, el seu guió; tots comencen alhora.|Cada actor, su guion; todos empiezan a la vez."],
        nota: "Torna a les hipòtesis del principi: quines s'han complert?|Vuelve a las hipótesis del principio: ¿cuáles se han cumplido?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una diferència entre en Bit i l'escenari.|Una diferencia entre Bit y el escenario.", "A x = 50, mou-te -100: on acaba?|En x = 50, muévete -100: ¿dónde termina?"],
        nota: "Anota qui s'equivoca en passar pel zero: ho repassareu a la sessió 2.|Anota quién se equivoca al pasar por el cero: lo repasaréis en la sesión 2." }
    ],
    print: [
      { id: 'p1', t: "Full de marcatge de l'escena|Hoja de marcaje de la escena", k: 'fitxa',
        intro: "Un full per grup. La recta del terra va de -200 a 200 i cada pam són 50 punts. Ompliu-lo abans de la «bandera verda» i comproveu-lo després.|Una hoja por grupo. La recta del suelo va de -200 a 200 y cada palmo son 50 puntos. Rellenadla antes de la «bandera verde» y comprobadla después.",
        items: [
          { q: "Actor 1 · comença a x = ___ · ordre 1: ________ · ordre 2: ________|Actor 1 · empieza en x = ___ · orden 1: ________ · orden 2: ________", sol: "Exemple: comença a x = -100 · mou-te 150 · digues «Bon dia!».|Ejemplo: empieza en x = -100 · muévete 150 · di «¡Buenos días!»." },
          { q: "Actor 2 · comença a x = ___ · ordre 1: ________ · ordre 2: ________|Actor 2 · empieza en x = ___ · orden 1: ________ · orden 2: ________", sol: "Exemple: comença a x = 150 · mou-te -100 · digues «Hola!».|Ejemplo: empieza en x = 150 · muévete -100 · di «¡Hola!»." },
          { q: "Predicció del calculador/a: l'actor 1 acabarà a x = ___ i l'actor 2, a x = ___.|Predicción del calculador/a: el actor 1 terminará en x = ___ y el actor 2, en x = ___.", sol: "Amb l'exemple: -100 + 150 = 50 i 150 - 100 = 50. Tots dos acaben al 50!|Con el ejemplo: -100 + 150 = 50 y 150 - 100 = 50. ¡Los dos terminan en el 50!" },
          { q: "Ha coincidit? Si no, quina ordre canviaríeu i per quin número?|¿Ha coincidido? Si no, ¿qué orden cambiaríais y por qué número?", big: true, sol: "Resposta oberta: cal canviar el número de l'ordre «mou-te» que fa quedar curt o llarg l'actor.|Respuesta abierta: hay que cambiar el número de la orden «muévete» que hace quedar corto o largo al actor." }
        ] },
      { id: 'p2', t: "Targetes de blocs de l'escenari|Tarjetas de bloques del escenario", k: 'targetes',
        intro: "Opcional: un paquet per grup, per a qui vulgui tenir els blocs a la mà. Les targetes en blanc són per inventar números o frases.|Opcional: un paquete por grupo, para quien quiera tener los bloques en la mano. Las tarjetas en blanco son para inventar números o frases.",
        items: [
          { t: "Quan comença 🚩|Al empezar 🚩", n: 2 },
          { t: "Mou-te 50 passos ➡️|Muévete 50 pasos ➡️", n: 2 },
          { t: "Mou-te 100 passos ➡️|Muévete 100 pasos ➡️", n: 2 },
          { t: "Mou-te 150 passos ➡️|Muévete 150 pasos ➡️", n: 2 },
          { t: "Mou-te -50 passos ⬅️|Muévete -50 pasos ⬅️", n: 2 },
          { t: "Mou-te -100 passos ⬅️|Muévete -100 pasos ⬅️", n: 2 },
          { t: "Digues «Bon dia!» 👋|Di «¡Buenos días!» 👋", n: 2 },
          { t: "Mou-te … passos / Digues «…»|Muévete … pasos / Di «…»", n: 3 }
        ] }
    ]
  },
  /* ---------- Sessió 2 · Graus i diàlegs ---------- */
  'g1-2': {
    intro: "En aquesta sessió els actors s'orienten amb graus. A Tech Robot girar era sempre un quart de volta; aquí la direcció és un número: 0 amunt, 90 dreta, 180 avall, -90 esquerra i també les diagonals (45, -135…). La idea nova és la diferència entre «apunta en direcció», que és absolut (fixa la direcció), i «gira», que és relatiu (suma graus a la que ja té, i 180 + 90 = 270 = -90). També fan servir «digues» i «pensa» amb segons perquè les frases es llegeixin una darrere l'altra. Comencen amb la brúixola de graus (fulls a les parets), fan la brúixola del teatre en grups i acaben a l'ordinador amb camins en forma de L i un petit diàleg.|En esta sesión los actores se orientan con grados. En Tech Robot girar era siempre un cuarto de vuelta; aquí la dirección es un número: 0 arriba, 90 derecha, 180 abajo, -90 izquierda y también las diagonales (45, -135…). La idea nueva es la diferencia entre «apunta en dirección», que es absoluto (fija la dirección), y «gira», que es relativo (suma grados a la que ya tiene, y 180 + 90 = 270 = -90). También usan «di» y «piensa» con segundos para que las frases se lean una detrás de otra. Empiezan con la brújula de grados (hojas en las paredes), hacen la brújula del teatro en grupos y terminan en el ordenador con caminos en forma de L y un pequeño diálogo.",
    claus: [
      "La direcció diu cap on mira el personatge: 90 dreta, 180 avall, -90 esquerra i 0 amunt.|La dirección dice hacia dónde mira el personaje: 90 derecha, 180 abajo, -90 izquierda y 0 arriba.",
      "Els graus del mig també valen: 45 és la diagonal amunt i a la dreta, i -135, avall i a l'esquerra.|Los grados de en medio también valen: 45 es la diagonal arriba y a la derecha, y -135, abajo y a la izquierda.",
      "«Apunta en direcció» és absolut (fixa la direcció); «gira» és relatiu (suma graus a la que ja té: 90 + 45 = 135; 180 + 90 = 270, que s'escriu -90).|«Apunta en dirección» es absoluto (fija la dirección); «gira» es relativo (suma grados a la que ya tiene: 90 + 45 = 135; 180 + 90 = 270, que se escribe -90).",
      "«Digues» fa una bafarada i «pensa», un núvol; amb segons, les frases es llegeixen una darrere l'altra.|«Di» hace un bocadillo y «piensa», una nube; con segundos, las frases se leen una detrás de otra."
    ],
    prev: [
      "Fer un guió «Quan comença» amb «mou-te» i «digues» i tocar la bandera verda (sessió 1).|Hacer un guion «Al empezar» con «muévete» y «di» y tocar la bandera verde (sesión 1).",
      "Calcular on acaba un actor amb números positius i negatius (sessió 1).|Calcular dónde termina un actor con números positivos y negativos (sesión 1).",
      "Saber que una volta sencera són 360 graus i un quart de volta, 90 (matemàtiques de cicle superior; a Tech Robot, el gir de Bit).|Saber que una vuelta entera son 360 grados y un cuarto de vuelta, 90 (matemáticas de ciclo superior; en Tech Robot, el giro de Bit)."
    ],
    faq: [
      ["Per què 90 és la dreta i no amunt?|¿Por qué 90 es la derecha y no arriba?",
        "És com una brúixola: el 0 és a dalt i, girant cap a la dreta, el número creix. Un quart de volta són 90 graus, i per això la dreta és el 90.|Es como una brújula: el 0 está arriba y, girando hacia la derecha, el número crece. Un cuarto de vuelta son 90 grados, y por eso la derecha es el 90."],
      ["Quina diferència hi ha entre «gira» i «apunta en direcció»?|¿Qué diferencia hay entre «gira» y «apunta en dirección»?",
        "«Gira» suma un gir a la direcció que ja té; «apunta» el fa mirar directament cap a una direcció, miri on miri abans.|«Gira» suma un giro a la dirección que ya tiene; «apunta» lo hace mirar directamente hacia una dirección, mire donde mire antes."],
      ["El cotxe gira cap per avall. És normal?|El coche gira boca abajo. ¿Es normal?",
        "Sí: el cotxe gira tot ell, com si el veiéssim des de dalt. Els personatges de Numi, en canvi, només es giren de costat perquè no surtin cap per avall.|Sí: el coche gira entero, como si lo viéramos desde arriba. Los personajes de Numi, en cambio, solo se giran de lado para que no salgan boca abajo."],
      ["Per què només es veu la meva última frase?|¿Por qué solo se ve mi última frase?",
        "Perquè les altres no tenen segons: desapareixen de seguida. Toca cada «digues» i posa-hi «durant 2 s».|Porque las otras no tienen segundos: desaparecen enseguida. Toca cada «di» y ponle «durante 2 s»."],
      ["Puc fer que dos personatges parlin alhora?|¿Puedo hacer que dos personajes hablen a la vez?",
        "Sí, però el públic no ho entendria. Per fer torns, un pensa o espera mentre l'altre parla, com a l'assaig d'en Vuit i la Guida.|Sí, pero el público no lo entendería. Para hacer turnos, uno piensa o espera mientras el otro habla, como en el ensayo de Vuit y Guida."],
      ["I si la suma passa de 180? Per exemple, 180 + 90.|¿Y si la suma pasa de 180? Por ejemplo, 180 + 90.",
        "Dona 270, que és tres quarts de volta des d'amunt: mirar a l'esquerra. L'escenari ho escriu com -90, perquè les direccions van de -180 a 180.|Da 270, que son tres cuartos de vuelta desde arriba: mirar a la izquierda. El escenario lo escribe como -90, porque las direcciones van de -180 a 180."]
    ],
    tec: [
      ["El personatge gira però no arriba a la bandera.|El personaje gira pero no llega a la bandera.",
        "Falta un «mou-te» després del gir, o el número és massa petit. Que mirin cap on mira i quant falta.|Falta un «muévete» después del giro, o el número es demasiado pequeño. Que miren hacia dónde mira y cuánto falta."],
      ["El cotxe se'n va fora de l'escenari i no es veu.|El coche se sale del escenario y no se ve.",
        "El número és massa gran o el gir és cap al costat contrari. Toqueu la fletxa rodona per tornar-lo al principi i proveu un número més petit.|El número es demasiado grande o el giro es hacia el lado contrario. Tocad la flecha redonda para devolverlo al principio y probad un número más pequeño."],
      ["Una frase escrita per l'alumne/a es talla.|Una frase escrita por el alumno/a se corta.",
        "El requadre admet 40 lletres: que escrigui frases curtes o en faci dues.|El recuadro admite 40 letras: que escriba frases cortas o haga dos."],
      ["Els fulls de les parets es despengen.|Las hojas de las paredes se despegan.",
        "Feu servir cinta de pintor i escriviu els números ben grossos; si no hi ha parets lliures, enganxeu-los al terra a cada costat de la creu.|Usad cinta de pintor y escribid los números bien grandes; si no hay paredes libres, pegadlos en el suelo a cada lado de la cruz."],
      ["El programa no fa res i surt el missatge que un bucle no espera.|El programa no hace nada y sale el mensaje de que un bucle no espera.",
        "En aquesta sessió no hi ha bucles: segurament s'ha tocat un bloc d'un altre repte. Que torni a obrir el pas.|En esta sesión no hay bucles: seguramente se ha tocado un bloque de otro reto. Que vuelva a abrir el paso."]
    ],
    seg: [
      "A la brúixola del cos, que girin a poc a poc i amb els braços a prop del cos per no tocar ningú.|En la brújula del cuerpo, que giren despacio y con los brazos cerca del cuerpo para no tocar a nadie.",
      "Si algú es mareja girant, que s'assegui i faci els girs amb la mà.|Si alguien se marea girando, que se siente y haga los giros con la mano."
    ],
    extra: [
      "Fer que el cotxe faci la volta a un quadrat (4 trossos i 4 girs) i torni al lloc d'inici, dient una frase a cada cantonada.|Hacer que el coche dé la vuelta a un cuadrado (4 tramos y 4 giros) y vuelva al sitio de inicio, diciendo una frase en cada esquina.",
      "Escriure un diàleg de quatre frases entre en Vuit i la Guida en què cadascun pensi mentre l'altre parla.|Escribir un diálogo de cuatro frases entre Vuit y Guida en el que cada uno piense mientras el otro habla.",
      "Fer un camí en zig-zag amb girs de 45 i -90 graus i predir, abans de cada gir, la direcció on acabarà el cotxe.|Hacer un camino en zigzag con giros de 45 y -90 grados y predecir, antes de cada giro, la dirección donde terminará el coche."
    ],
    trans: [
      "Matemàtiques: angles en graus (45, 90, 180, 360), sumes d'angles i orientació en el pla.|Matemáticas: ángulos en grados (45, 90, 180, 360), sumas de ángulos y orientación en el plano.",
      "Llengua: el diàleg, els torns de paraula i la diferència entre dir i pensar (com als còmics).|Lengua: el diálogo, los turnos de palabra y la diferencia entre decir y pensar (como en los cómics).",
      "Sessió anterior: «mou-te» endavant i enrere. Sessió següent: fons, escenes i personatges que surten de l'escena.|Sesión anterior: «muévete» adelante y atrás. Sesión siguiente: fondos, escenas y personajes que salen de la escena."
    ],
    obj: [
      "L'alumne/a relaciona les direccions 0, 90, 180, -90 i les diagonals (45, -135…) amb cap on mira l'actor.|El alumno/a relaciona las direcciones 0, 90, 180, -90 y las diagonales (45, -135…) con hacia dónde mira el actor.",
      "L'alumne/a distingeix «apunta en direcció» (absolut) de «gira» (relatiu) i calcula la direcció final després d'un gir.|El alumno/a distingue «apunta en dirección» (absoluto) de «gira» (relativo) y calcula la dirección final después de un giro.",
      "L'alumne/a distingeix «digues» de «pensa» i fa servir els segons perquè les frases es llegeixin una darrere l'altra.|El alumno/a distingue «di» de «piensa» y usa los segundos para que las frases se lean una detrás de otra.",
      "L'alumne/a programa un petit paper amb moviment, gir i dues frases.|El alumno/a programa un pequeño papel con movimiento, giro y dos frases."
    ],
    comp: [
      "Competència digital (CD5): combinar blocs de moviment i de diàleg en un programa|Competencia digital (CD5): combinar bloques de movimiento y de diálogo en un programa",
      "Pensament computacional: seqüència, estat (la direcció) i temps d'execució|Pensamiento computacional: secuencia, estado (la dirección) y tiempo de ejecución",
      "Matemàtiques: angles en graus, sumes d'angles i orientació en el pla|Matemáticas: ángulos en grados, sumas de ángulos y orientación en el plano",
      "Llengua: diàleg, torns de paraula i diferència entre dir i pensar|Lengua: diálogo, turnos de palabra y diferencia entre decir y pensar"
    ],
    vocab: [
      ["Direcció|Dirección", "El número que diu cap on mira un personatge: 90 dreta, 180 avall, -90 esquerra, 0 amunt.|El número que dice hacia dónde mira un personaje: 90 derecha, 180 abajo, -90 izquierda, 0 arriba."],
      ["Grau|Grado", "La mida d'un gir: una volta sencera són 360 graus; un quart de volta, 90.|La medida de un giro: una vuelta entera son 360 grados; un cuarto de vuelta, 90."],
      ["Absolut i relatiu|Absoluto y relativo", "«Apunta» fixa una direcció (absolut); «gira» la canvia a partir de la que ja hi ha (relatiu).|«Apunta» fija una dirección (absoluto); «gira» la cambia a partir de la que ya hay (relativo)."],
      ["Bafarada|Bocadillo", "El globus amb el que diu un personatge (bloc «digues»).|El globo con lo que dice un personaje (bloque «di»)."],
      ["Núvol de pensament|Nube de pensamiento", "El globus amb el que pensa però no diu (bloc «pensa»).|El globo con lo que piensa pero no dice (bloque «piensa»)."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Graus i diàlegs»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Grados y diálogos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "4 fulls DIN A4 amb els números 0, 90, 180 i -90 ben grossos, per a les quatre parets, i 4 fulls més petits amb 45, 135, -45 i -135 per als racons|4 hojas DIN A4 con los números 0, 90, 180 y -90 bien grandes, para las cuatro paredes, y 4 hojas más pequeñas con 45, 135, -45 y -135 para las esquinas",
        "La recta del terra de la sessió 1, amb la creu del 0 (o 1 rotllo de cinta per tornar-la a fer), i 1 objecte petit per grup com a meta|La recta del suelo de la sesión 1, con la cruz del 0 (o 1 rollo de cinta para volver a hacerla), y 1 objeto pequeño por grupo como meta"
      ],
      imprimir: [
        "1 paquet de targetes de la brúixola i del diàleg per grup de 3, per afegir al de la sessió 1 (imprimible 1)|1 paquete de tarjetas de la brújula y del diálogo por grupo de 3, para añadir al de la sesión 1 (imprimible 1)"
      ],
      prep: [
        "El dia abans (15 min): imprimir i retallar un paquet de targetes per grup de 3 i els 4 fulls de les direccions.|El día antes (15 min): imprimir y recortar un paquete de tarjetas por grupo de 3 y las 4 hojas de las direcciones.",
        "Abans de la classe (5 min): enganxar el 0 a la paret de la pissarra, el 90 a la dreta, el 180 al fons i el -90 a l'esquerra; les diagonals, als racons.|Antes de la clase (5 min): pegar el 0 en la pared de la pizarra, el 90 a la derecha, el 180 al fondo y el -90 a la izquierda; las diagonales, en las esquinas.",
        "Provar les demostracions de les diapositives 5, 7 i 11 i saber dir la direcció del cotxe després de cada gir de la 5 (0, 45, 90).|Probar las demostraciones de las diapositivas 5, 7 y 11 y saber decir la dirección del coche después de cada giro de la 5 (0, 45, 90).",
        "Deixar els ordinadors amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i l'assaig general|Recordamos y el ensayo general", fase: 'inici',
        fa: "Repassa «mou-te» amb un número negatiu fent que dos alumnes ho representin. Explica que avui és l'assaig: els actors han de mirar cap a angles exactes, en graus, i dir el seu paper.|Repasa «muévete» con un número negativo haciendo que dos alumnos lo representen. Explica que hoy es el ensayo: los actores tienen que mirar hacia ángulos exactos, en grados, y decir su papel.",
        diu: ["Què fa mou-te -100 passos?|¿Qué hace muévete -100 pasos?", "En Bit girava sempre un quart de volta. I si l'actor ha de mirar en diagonal?|Bit giraba siempre un cuarto de vuelta. ¿Y si el actor tiene que mirar en diagonal?", "Quants graus té una volta sencera? I mitja volta?|¿Cuántos grados tiene una vuelta entera? ¿Y media vuelta?"],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Direcció, girs i frases|Dirección, giros y frases", fase: 'teoria',
        fa: "Presenta la brúixola de graus amb els fulls de les parets: tothom es gira cap al 90, cap al 180, cap al 45… Amb la demostració del cotxe, compara «apunta» (absolut) amb «gira» (relatiu) i feu en veu alta les sumes: 0 + 45, 45 + 45. Explica «digues» i «pensa» i la importància dels segons amb la demostració de la Tuga: compareu-la amb un guió sense segons.|Presenta la brújula de grados con las hojas de las paredes: todos se giran hacia el 90, hacia el 180, hacia el 45… Con la demostración del coche, compara «apunta» (absoluto) con «gira» (relativo) y haced en voz alta las sumas: 0 + 45, 45 + 45. Explica «di» y «piensa» y la importancia de los segundos con la demostración de Tuga: comparadla con un guion sin segundos.",
        diu: ["Tothom dret: mireu cap al 90. Ara gireu 90 graus. On mireu?|Todos de pie: mirad hacia el 90. Ahora girad 90 grados. ¿Dónde miráis?",
          "El cotxe mira a 45 i fa apunta en direcció 0: on mira? I si fa gira 45? (A 0; a 90.)|El coche mira a 45 y hace apunta en dirección 0: ¿dónde mira? ¿Y si hace gira 45? (A 0; a 90.)",
          "Si no poso segons, quina frase es veurà?|Si no pongo segundos, ¿qué frase se verá?", "Pensa és un núvol i digues, una bafarada. Què pensaria un actor nerviós? (Respostes lliures.)|Piensa es una nube y di, un bocadillo. ¿Qué pensaría un actor nervioso? (Respuestas libres.)"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup, drets|Todo el grupo, de pie" },
      { min: 12, t: "La brúixola del teatre|La brújula del teatro", fase: 'desconnectat',
        fa: "Grups de 3 amb les targetes: el director/a fa un guió per portar l'actor/actriu de la creu del centre fins a un objecte de l'aula, amb girs, passos i una frase (comptant els segons en veu alta). El revisor/a comprova cada targeta. Després de cada guió, roten. Repte final: un diàleg de dues frases entre dos actors, cadascun amb el seu guió.|Grupos de 3 con las tarjetas: el director/a hace un guion para llevar al actor/actriz desde la cruz del centro hasta un objeto del aula, con giros, pasos y una frase (contando los segundos en voz alta). El revisor/a comprueba cada tarjeta. Después de cada guion, rotan. Reto final: un diálogo de dos frases entre dos actores, cada uno con su guion.",
        diu: ["Apunta: mira cap al número, siguis on siguis. Gira: suma graus a on mires.|Apunta: mira hacia el número, estés donde estés. Gira: suma grados a donde miras.", "Compteu els segons de la frase abans de la targeta següent.|Contad los segundos de la frase antes de la tarjeta siguiente.", "Cap a quin número de la paret mira ara l'actor?|¿Hacia qué número de la pared mira ahora el actor?", "Si l'actor ha de tornar enrere mirant la porta, primer gira o primer camina? (Primer gira.)|Si el actor tiene que volver mirando la puerta, ¿primero gira o primero camina? (Primero gira.)"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Passeja per les taules: a la pregunta del cotxe, demana que facin el gir amb la mà o amb el cos abans de triar. A l'assaig d'en Vuit i la Guida, que diguin qui parla primer i què fa l'altra mentrestant. Al cotxe que baixa, que expliquin l'error amb paraules abans de triar el bloc.|Avanzan hasta la pausa activa. Pasea por las mesas: en la pregunta del coche, pide que hagan el giro con la mano o con el cuerpo antes de elegir. En el ensayo de Vuit y Guida, que digan quién habla primero y qué hace la otra mientras tanto. En el coche que baja, que expliquen el error con palabras antes de elegir el bloque.",
        diu: ["Fes la suma: si mira a 180 i gira 90, quant dona? I com ho escriu l'escenari? (270, és a dir, -90.)|Haz la suma: si mira a 180 y gira 90, ¿cuánto da? ¿Y cómo lo escribe el escenario? (270, es decir, -90.)", "Per què la Guida pensa mentre en Vuit parla?|¿Por qué Guida piensa mientras Vuit habla?", "El cotxe ha baixat en lloc de pujar: quin bloc ho ha fet? (El gir de 90 graus.)|El coche ha bajado en lugar de subir: ¿qué bloque lo ha hecho? (El giro de 90 grados.)"],
        slides: ['s10'], app: "De «Recorda» fins a «Investiga»: la pregunta de la Guida (x = -50), l'assaig, les 4 targetes de teoria, el gir del cotxe, ordenar el guió de la Flama, «La brúixola del teatre» (ja fet), el diàleg i el cotxe que baixa.|De «Recuerda» hasta «Investiga»: la pregunta de Guida (x = -50), el ensayo, las 4 tarjetas de teoría, el giro del coche, ordenar el guion de Flama, «La brújula del teatro» (ya hecho), el diálogo y el coche que baja.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: girar i parlar|Retos: girar y hablar", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Projecta el camí en forma de L (diapositiva 11) i, abans de mostrar-lo, demana els tres trossos (recte, gir, recte) i escriu-los a la pissarra. Després deixa'ls fer els quatre reptes. Recorda que hi ha dues maneres de mirar amunt: «gira -90 graus» o «apunta en direcció 0».|Haced la pausa activa todos juntos. Proyecta el camino en forma de L (diapositiva 11) y, antes de mostrarlo, pide los tres trozos (recto, giro, recto) y escríbelos en la pizarra. Después deja que hagan los cuatro retos. Recuerda que hay dos maneras de mirar arriba: «gira -90 grados» o «apunta en dirección 0».",
        diu: ["Primer recte, després gir, després recte. Quants passos a cada tros?|Primero recto, después giro, después recto. ¿Cuántos pasos en cada trozo?", "En Vuit ha de tornar mirant a l'esquerra: quin bloc el fa mirar-hi?|Vuit tiene que volver mirando a la izquierda: ¿qué bloque lo hace mirar allí?", "Per mirar amunt, quin gir cal: 90 o -90? (-90.)|Para mirar arriba, ¿qué giro hace falta: 90 o -90? (-90.)"],
        slides: ['s11', 's12'], app: "«Pausa activa» i els quatre reptes: el cotxe amunt, el cotxe en L, el paper de la Flama i en Vuit que entra i surt.|«Pausa activa» y los cuatro retos: el coche arriba, el coche en L, el papel de Flama y Vuit que entra y sale.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: l'assaig del Cavaller|Crea: el ensayo del Caballero", fase: 'crea',
        fa: "Cada alumne/a programa un paper per al Cavaller amb moviment, gir i dues frases. En parelles, un llegeix el guió en veu alta i l'altre el representa.|Cada alumno/a programa un papel para el Caballero con movimiento, giro y dos frases. Por parejas, uno lee el guion en voz alta y el otro lo representa.",
        diu: ["Es poden llegir les dues frases?|¿Se pueden leer las dos frases?", "On és el gir del teu cavaller? Abans o després del «mou-te»?|¿Dónde está el giro de tu caballero? ¿Antes o después del «muévete»?", "Quina frase diu en veu alta i quina pensa?|¿Qué frase dice en voz alta y cuál piensa?"],
        slides: ['s13'], app: "Pas «Crea»: L'assaig del Cavaller.|Paso «Crea»: El ensayo del Caballero.", org: "Individual i per parelles|Individual y por parejas" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum fent una última ronda de brúixola amb tota la classe. Deixa que facin les dues preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una de les preguntes del tiquet i anota qui confon 90 i -90.|Repasa las tres ideas con el resumen haciendo una última ronda de brújula con toda la clase. Deja que hagan las dos preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una de las preguntas del ticket y anota quién confunde 90 y -90.",
        diu: ["Quina direcció és mirar a l'esquerra?|¿Qué dirección es mirar a la izquierda?", "Per què posem segons a les frases?|¿Por qué ponemos segundos en las frases?", "Vuit girs de 45 graus: on acabes mirant? (On miraves al principi: 8 × 45 = 360.)|Ocho giros de 45 grados: ¿dónde acabas mirando? (Donde mirabas al principio: 8 × 45 = 360.)"],
        slides: ['s14', 's15'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Confon «gira 90» amb «apunta en direcció 90» i creu que tots dos deixen mirant a la dreta.|Confunde «gira 90» con «apunta en dirección 90» y cree que los dos dejan mirando a la derecha.",
        "Que parteixi d'una direcció que no sigui 0 (per exemple, 180) i faci la suma en veu alta: on acaba amb cada bloc?|Que parta de una dirección que no sea 0 (por ejemplo, 180) y haga la suma en voz alta: ¿dónde termina con cada bloque?"],
      ["Confon el gir a la dreta i a l'esquerra (90 i -90).|Confunde el giro a la derecha y a la izquierda (90 y -90).",
        "Que s'imagini que és el personatge i giri el cos cap a la dreta: els números creixen com les agulles del rellotge.|Que se imagine que es el personaje y gire el cuerpo hacia la derecha: los números crecen como las agujas del reloj."],
      ["Fa servir «mou-te» negatiu en lloc de girar quan el repte demana que miri cap a l'esquerra.|Usa «muévete» negativo en lugar de girar cuando el reto pide que mire hacia la izquierda.",
        "Pregunta: el personatge va de cara o d'esquena? Mira la cara del personatge a l'escenari.|Pregunta: ¿el personaje va de cara o de espaldas? Mira la cara del personaje en el escenario."],
      ["Posa dues frases sense segons i només se'n veu una.|Pone dos frases sin segundos y solo se ve una.",
        "Que llegeixi el guió en veu alta comptant els segons: quan desapareix la primera frase?|Que lea el guion en voz alta contando los segundos: ¿cuándo desaparece la primera frase?"],
      ["Gira el cotxe però no l'avança i no arriba a la bandera.|Gira el coche pero no lo avanza y no llega a la bandera.",
        "Recorda la idea clau: després d'un gir, gairebé sempre cal un «mou-te».|Recuerda la idea clave: después de un giro, casi siempre hace falta un «muévete»."],
      ["Al repte d'en Vuit, fa servir «gira 90 graus» des de la dreta i en Vuit acaba mirant avall.|En el reto de Vuit, usa «gira 90 grados» desde la derecha y Vuit acaba mirando abajo.",
        "Que faci el gir amb el cos des de la dreta: quants quarts de volta calen per mirar a l'esquerra? (Dos, o «apunta en direcció -90».)|Que haga el giro con el cuerpo desde la derecha: ¿cuántos cuartos de vuelta hacen falta para mirar a la izquierda? (Dos, o «apunta en dirección -90».)"]
    ],
    diff: {
      mes: "Fer que el cotxe faci la volta a un quadrat (4 trossos rectes i 4 girs) i torni al lloc on ha començat, dient una frase a cada cantonada.|Hacer que el coche dé la vuelta a un cuadrado (4 tramos rectos y 4 giros) y vuelva al sitio donde ha empezado, diciendo una frase en cada esquina.",
      menys: "Fer servir «apunta en direcció» en lloc de «gira», amb els fulls de les parets a la vista. Fer primer el repte del cotxe que només puja.|Usar «apunta en dirección» en lugar de «gira», con las hojas de las paredes a la vista. Hacer primero el reto del coche que solo sube."
    },
    aval: {
      ticket: ["Un personatge mira avall (180) i gira 90 graus: cap on mira?|Un personaje mira abajo (180) y gira 90 grados: ¿hacia dónde mira?",
        "Quina diferència hi ha entre «digues» i «pensa»?|¿Qué diferencia hay entre «di» y «piensa»?"],
      rubric: [
        ["Direccions|Direcciones", "Relaciona les quatre direccions i les diagonals amb els seus números sense ajuda.|Relaciona las cuatro direcciones y las diagonales con sus números sin ayuda.", "Necessita els fulls de la paret o provar per saber-les.|Necesita las hojas de la pared o probar para saberlas."],
        ["Girar i avançar|Girar y avanzar", "Combina girs i «mou-te» per fer un camí en forma de L.|Combina giros y «muévete» para hacer un camino en forma de L.", "Gira bé, però de vegades oblida el «mou-te» o el sentit del gir.|Gira bien, pero a veces olvida el «muévete» o el sentido del giro."],
        ["Diàleg amb temps|Diálogo con tiempo", "Les seves frases es llegeixen una darrere l'altra i distingeix dir i pensar.|Sus frases se leen una detrás de otra y distingue decir y pensar.", "Escriu frases però encara no controla els segons.|Escribe frases pero aún no controla los segundos."],
        ["Explicar el gir|Explicar el giro",
          "Explica la diferència entre apuntar i girar i calcula la direcció final (180 + 90 = -90).|Explica la diferencia entre apuntar y girar y calcula la dirección final (180 + 90 = -90).",
          "Encerta el gir provant, però encara no sap explicar per què.|Acierta el giro probando, pero aún no sabe explicar por qué."]
      ]
    },
    casa: "A casa podeu fer «La brúixola del teatre»: trieu la paret 0 i doneu-vos ordres de girar, avançar i dir frases comptant els segons.|En casa podéis hacer «La brújula del teatro»: elegid la pared 0 y daos órdenes de girar, avanzar y decir frases contando los segundos.",
    slides: [
      { id: 's1', k: 'portada', t: "Graus i diàlegs|Grados y diálogos", x: "L'assaig general: mirar cap a angles exactes i dir el paper, frase a frase.|El ensayo general: mirar hacia ángulos exactos y decir el papel, frase a frase.",
        nota: "Explica que avui els actors s'orientaran amb graus i parlaran per torns.|Explica que hoy los actores se orientarán con grados y hablarán por turnos." },
      { id: 's2', k: 'repas', t: "Recordem|Recordamos", punts: ["Què fa la bandera verda?|¿Qué hace la bandera verde?", "Què fa «mou-te -100 passos»?|¿Qué hace «muévete -100 pasos»?"], blocks: [{ t: "mou-te -100 passos|muévete -100 pasos", c: 'mov' }],
        nota: "Que dos alumnes ho representin davant de la classe.|Que dos alumnos lo representen delante de la clase." },
      { id: 's3', k: 'anim', t: "Una brúixola de graus|Una brújula de grados", anim: 'g1dir', x: "0 amunt · 90 dreta · 180 avall · -90 esquerra · 45 i -135 en diagonal|0 arriba · 90 derecha · 180 abajo · -90 izquierda · 45 y -135 en diagonal",
        nota: "Tothom dret: mireu el full del 90, ara el del 180, ara el racó del 45… Feu-ho cada vegada més de pressa.|Todos de pie: mirad la hoja del 90, ahora la del 180, ahora la esquina del 45… Hacedlo cada vez más deprisa." },
      { id: 's4', k: 'concepte', t: "Apunta o gira?|¿Apunta o gira?", punts: ["Apunta en direcció: absolut, miris on miris abans.|Apunta en dirección: absoluto, mires donde mires antes.", "Gira: relatiu, suma graus a la direcció que tens.|Gira: relativo, suma grados a la dirección que tienes.", "Si passa de 180: 180 + 90 = 270, que s'escriu -90.|Si pasa de 180: 180 + 90 = 270, que se escribe -90."],
        nota: "Feu-ho amb el cos: tothom mira el 180 i gira 90 cap a la dreta. On mireu? Després, apunteu al 90: tothom acaba igual, mirés on mirés.|Hacedlo con el cuerpo: todos miran el 180 y giran 90 hacia la derecha. ¿Dónde miráis? Después, apuntad al 90: todos terminan igual, miraran donde miraran." },
      { id: 's5', k: 'media', t: "Apunta i després gira|Apunta y después gira", x: "Apunta a 0 i després dos girs de 45: quina direcció té al final?|Apunta a 0 y después dos giros de 45: ¿qué dirección tiene al final?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'cotxe', art: 'cotxe', x: -150, y: -110 }] }, prog: '@cotxe flag{ point:0 say:"Apunto a 0|Apunto a 0",1 move:70 turn:45 say:"0 + 45 = 45|0 + 45 = 45",1.5 move:90 turn:45 say:"45 + 45 = 90|45 + 45 = 90",1.5 move:90 say:"Ja hi soc!|¡Ya estoy!",2 }', time: 8 },
        nota: "Abans de cada gir, que la classe digui la direcció nova. El cotxe acaba mirant a la dreta (90).|Antes de cada giro, que la clase diga la dirección nueva. El coche termina mirando a la derecha (90)." },
      { id: 's6', k: 'anim', t: "Digues i pensa|Di y piensa", anim: 'g1say', x: "Bafarada: el que diu. Núvol: el que pensa.|Bocadillo: lo que dice. Nube: lo que piensa.",
        nota: "Demana un exemple: què diria i què pensaria un actor nerviós abans de sortir?|Pide un ejemplo: ¿qué diría y qué pensaría un actor nervioso antes de salir?" },
      { id: 's7', k: 'media', t: "Una frase darrere l'altra|Una frase detrás de otra", x: "Amb segons, cada frase es queda a la pantalla i després ve la següent.|Con segundos, cada frase se queda en la pantalla y después viene la siguiente.",
        media: { k: 'stage', w: T([{ id: 'tuga', art: 'tuga', x: 0, y: -95 }]), prog: '@tuga flag{ say:"Hola!|¡Hola!",2 say:"Soc la Tuga.|Soy Tuga.",2 think:"Ho he dit bé?|¿Lo he dicho bien?",2 }', time: 7 },
        nota: "Pregunta què passaria si la primera frase no tingués segons (desapareixeria de seguida).|Pregunta qué pasaría si la primera frase no tuviera segundos (desaparecería enseguida)." },
      { id: 's8', k: 'activitat', t: "La brúixola del teatre|La brújula del teatro", timer: 12, punts: ["L'actor/actriu comença a la creu, mirant el 90.|El actor/actriz empieza en la cruz, mirando el 90.", "El director/a fa un guió amb girs, passos i una frase fins a un objecte.|El director/a hace un guion con giros, pasos y una frase hasta un objeto.", "El revisor/a comprova cada targeta.|El revisor/a comprueba cada tarjeta.", "Final: un diàleg de dues frases entre dos actors.|Final: un diálogo de dos frases entre dos actores."],
        nota: "Recorda que els segons de les frases es compten en veu alta abans de la targeta següent.|Recuerda que los segundos de las frases se cuentan en voz alta antes de la tarjeta siguiente." },
      { id: 's9', k: 'activitat', t: "Les targetes de l'assaig|Las tarjetas del ensayo", blocks: [{ t: "gira 90 graus ↻|gira 90 grados ↻", c: 'mov' }, { t: "gira 45 graus ↗|gira 45 grados ↗", c: 'mov' }, { t: "apunta en direcció 0|apunta en dirección 0", c: 'mov' }, { t: "digues … durant 2 s|di … durante 2 s", c: 'art' }, { t: "pensa … durant 2 s|piensa … durante 2 s", c: 'art' }],
        nota: "Deixa-la projectada perquè recordin què fa cada targeta.|Déjala proyectada para que recuerden qué hace cada tarjeta." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Moure i parlar».|Abre «Mover y hablar».", "Fes el gir amb la mà abans de respondre.|Haz el giro con la mano antes de responder.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "A l'assaig de dos actors, demana que expliquin el torn de paraula.|En el ensayo de dos actores, pide que expliquen el turno de palabra." },
      { id: 's11', k: 'media', t: "El camí en forma de L|El camino en forma de L", x: "Quants passos fins a sota la bandera? Quin gir? Quants passos amunt?|¿Cuántos pasos hasta debajo de la bandera? ¿Qué giro? ¿Cuántos pasos arriba?",
        media: { k: 'stage', w: { bg: 'parc', sprites: [{ id: 'cotxe', art: 'cotxe', x: -180, y: -120 }, { id: 'bandera', art: 'bandera', x: 130, y: 120, size: 70 }] }, prog: '@cotxe flag{ say:"Primer tros!|¡Primer trozo!",1 move:310 say:"Giro!|¡Giro!",1 turn:-90 move:220 say:"Ja hi soc!|¡Ya estoy!",2 }', time: 6 },
        nota: "Escriu a la pissarra els tres trossos que proposen abans de mostrar la demostració.|Escribe en la pizarra los tres trozos que proponen antes de mostrar la demostración." },
      { id: 's12', k: 'repte', t: "Reptes: girar i parlar|Retos: girar y hablar", timer: 10, punts: ["1. El cotxe puja a la bandera|1. El coche sube a la bandera", "2. El cotxe en forma de L|2. El coche en forma de L", "3. La Flama diu i pensa|3. Flama dice y piensa", "4. En Vuit entra, saluda i surt|4. Vuit entra, saluda y sale"],
        nota: "Si algú s'encalla, pregunta: cap on mira ara? Cap on ha de mirar?|Si alguien se atasca, pregunta: ¿hacia dónde mira ahora? ¿Hacia dónde tiene que mirar?" },
      { id: 's13', k: 'activitat', t: "Crea: l'assaig del Cavaller|Crea: el ensayo del Caballero", timer: 5, x: "Moviment, un gir i dues frases que es puguin llegir.|Movimiento, un giro y dos frases que se puedan leer.",
        nota: "En parelles, un llegeix el guió i l'altre el representa.|Por parejas, uno lee el guion y el otro lo representa." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["La direcció diu cap on mira.|La dirección dice hacia dónde mira.", "Apunta fixa la direcció; gira hi suma graus.|Apunta fija la dirección; gira le suma grados.", "Amb segons, les frases van una darrere l'altra.|Con segundos, las frases van una detrás de otra."],
        nota: "Feu una última ronda de brúixola amb tota la classe.|Haced una última ronda de brújula con toda la clase." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Mira avall (180) i gira 90 graus: cap on mira?|Mira abajo (180) y gira 90 grados: ¿hacia dónde mira?", "Diferència entre «digues» i «pensa».|Diferencia entre «di» y «piensa»."],
        nota: "Anota qui confon 90 i -90 per repassar-ho la setmana vinent.|Anota quién confunde 90 y -90 para repasarlo la semana que viene." }
    ],
    print: [
      { id: 'p1', t: "Targetes de la brúixola i del diàleg|Tarjetas de la brújula y del diálogo", k: 'targetes',
        intro: "Un paquet per grup de 3, per afegir a les targetes de la sessió 1. Els quatre números grans són per a les parets.|Un paquete por grupo de 3, para añadir a las tarjetas de la sesión 1. Los cuatro números grandes son para las paredes.",
        items: [
          { t: "Gira 90 graus ↻|Gira 90 grados ↻", n: 2 },
          { t: "Gira -90 graus ↺|Gira -90 grados ↺", n: 2 },
          { t: "Gira 45 graus ↗|Gira 45 grados ↗", n: 2 },
          { t: "Apunta en direcció 0 ⬆️|Apunta en dirección 0 ⬆️", n: 1 },
          { t: "Apunta en direcció 90 ➡️|Apunta en dirección 90 ➡️", n: 1 },
          { t: "Apunta en direcció 180 ⬇️|Apunta en dirección 180 ⬇️", n: 1 },
          { t: "Apunta en direcció -90 ⬅️|Apunta en dirección -90 ⬅️", n: 1 },
          { t: "Digues «…» durant 2 s 👋|Di «…» durante 2 s 👋", n: 3 },
          { t: "Pensa «…» durant 2 s 🧠|Piensa «…» durante 2 s 🧠", n: 2 }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Fons i escenes ---------- */
  'g1-3': {
    intro: "Les històries comencen a viatjar: l'alumnat canvia el fons de l'escenari amb «canvia el fons a» i amb «fons següent», i fa entrar i sortir personatges amb «mostra't» i «amaga't». La idea central és l'escena: un lloc (el fons), uns personatges i el que fan i diuen. Abans de programar, dibuixen un guió gràfic de tres vinyetes, que després els servirà per al pas «Crea». La classe alterna demostracions, el guió gràfic en paper, reptes a l'ordinador i una història pròpia de dues escenes o més.|Las historias empiezan a viajar: el alumnado cambia el fondo del escenario con «cambia el fondo a» y con «fondo siguiente», y hace entrar y salir personajes con «muéstrate» y «escóndete». La idea central es la escena: un lugar (el fondo), unos personajes y lo que hacen y dicen. Antes de programar, dibujan un guion gráfico de tres viñetas, que después les servirá para el paso «Crea». La clase alterna demostraciones, el guion gráfico en papel, retos en el ordenador y una historia propia de dos escenas o más.",
    claus: [
      "El fons és el decorat: quan canvia, els personatges es queden on són.|El fondo es el decorado: cuando cambia, los personajes se quedan donde están.",
      "«Fons següent» segueix l'ordre de la llista i, després de l'últim, torna al primer.|«Fondo siguiente» sigue el orden de la lista y, después del último, vuelve al primero.",
      "«Amaga't» fa desaparèixer el personatge sense esborrar-lo; «mostra't» el torna a fer veure.|«Escóndete» hace desaparecer al personaje sin borrarlo; «muéstrate» lo vuelve a hacer visible.",
      "Una escena és un fons, uns personatges i el que fan i diuen; una història és una sèrie d'escenes en ordre.|Una escena es un fondo, unos personajes y lo que hacen y dicen; una historia es una serie de escenas en orden."
    ],
    prev: [
      "Fer guions amb «digues» i «pensa» amb segons (sessió 2).|Hacer guiones con «di» y «piensa» con segundos (sesión 2).",
      "Saber que els blocs es fan de dalt a baix i que l'ordre importa (sessió 1).|Saber que los bloques se hacen de arriba abajo y que el orden importa (sesión 1).",
      "Explicar una història curta amb inici, desenvolupament i final (llengua).|Explicar una historia corta con inicio, desarrollo y final (lengua)."
    ],
    faq: [
      ["On és el personatge quan s'amaga?|¿Dónde está el personaje cuando se esconde?",
        "Continua al mateix lloc, però no es veu, com un actor darrere el teló. Amb «mostra't» torna a sortir.|Sigue en el mismo sitio, pero no se ve, como un actor detrás del telón. Con «muéstrate» vuelve a salir."],
      ["Per què «fons següent» torna al bosc?|¿Por qué «fondo siguiente» vuelve al bosque?",
        "Perquè la llista de fons és com un cercle: després de l'últim, torna a començar pel primer, com els dies de la setmana.|Porque la lista de fondos es como un círculo: después del último, vuelve a empezar por el primero, como los días de la semana."],
      ["Puc dibuixar el meu propi fons?|¿Puedo dibujar mi propio fondo?",
        "A l'app, no: hi ha fons preparats. Però al guió gràfic pots dibuixar el que vulguis i després triar el fons que s'hi assembli més.|En la app, no: hay fondos preparados. Pero en el guion gráfico puedes dibujar lo que quieras y después elegir el fondo que más se parezca."],
      ["Quan torno a tocar la bandera, el personatge amagat torna a sortir. Per què?|Cuando vuelvo a tocar la bandera, el personaje escondido vuelve a salir. ¿Por qué?",
        "Perquè la bandera fa començar la història des del principi, amb tot com estava al començament.|Porque la bandera hace empezar la historia desde el principio, con todo como estaba al comienzo."],
      ["Quina diferència hi ha entre «canvia el fons a» i «fons següent»?|¿Qué diferencia hay entre «cambia el fondo a» y «fondo siguiente»?",
        "«Canvia el fons a» va directament al fons que tries; «fons següent» passa al que ve després a la llista.|«Cambia el fondo a» va directamente al fondo que eliges; «fondo siguiente» pasa al que viene después en la lista."],
      ["He de dibuixar bé al guió gràfic?|¿Tengo que dibujar bien en el guion gráfico?",
        "No: valen ninots i paraules. El guió gràfic serveix per pensar l'ordre de les escenes, no per fer un dibuix bonic.|No: valen monigotes y palabras. El guion gráfico sirve para pensar el orden de las escenas, no para hacer un dibujo bonito."]
    ],
    tec: [
      ["El fons no canvia quan toco la bandera.|El fondo no cambia cuando toco la bandera.",
        "Que comprovi que el bloc de fons és dins el guió «Quan comença» i que el fons triat és diferent del que ja es veu.|Que compruebe que el bloque de fondo está dentro del guion «Al empezar» y que el fondo elegido es diferente del que ya se ve."],
      ["El fons canvia tan de pressa que no es veu la primera escena.|El fondo cambia tan deprisa que no se ve la primera escena.",
        "Falta temps entre escenes: que posi segons al «digues» d'abans del canvi de fons.|Falta tiempo entre escenas: que ponga segundos en el «di» de antes del cambio de fondo."],
      ["Al repte de «fons següent» diu que el fons no és el bo.|En el reto de «fondo siguiente» dice que el fondo no es el bueno.",
        "Que compti quants «fons següent» hi ha: del bosc a l'espai en calen dos (bosc → platja → espai).|Que cuente cuántos «fondo siguiente» hay: del bosque al espacio hacen falta dos (bosque → playa → espacio)."],
      ["La fitxa del guió gràfic surt massa petita en imprimir.|La ficha del guion gráfico sale demasiado pequeña al imprimir.",
        "Imprimiu-la en DIN A4 sense ajustar a la pàgina, o en DIN A3 si teniu impressora gran.|Imprimidla en DIN A4 sin ajustar a la página, o en DIN A3 si tenéis impresora grande."],
      ["El personatge ha desaparegut i ja no el trobo.|El personaje ha desaparecido y ya no lo encuentro.",
        "S'ha amagat: toqueu la fletxa rodona o la bandera i tornarà a sortir. Si cal, afegiu «mostra't».|Se ha escondido: tocad la flecha redonda o la bandera y volverá a salir. Si hace falta, añadid «muéstrate»."]
    ],
    seg: [
      "A la pausa activa dels decorats, deixeu espai entre les taules i feu els moviments sense saltar.|En la pausa activa de los decorados, dejad espacio entre las mesas y haced los movimientos sin saltar.",
      "Si en una història algú explica una situació real que el preocupa, escolta'l amb calma, no en parlis davant del grup i comenta-ho amb la tutoria o l'equip del centre.|Si en una historia alguien explica una situación real que le preocupa, escúchale con calma, no hables de ello delante del grupo y coméntalo con la tutoría o el equipo del centro."
    ],
    extra: [
      "Fer una història de 4 escenes en què el personatge s'amaga en una escena i torna a sortir (mostra't) a la següent.|Hacer una historia de 4 escenas en la que el personaje se esconde en una escena y vuelve a salir (muéstrate) en la siguiente.",
      "Fer servir «fons següent» per fer passar el temps: dia (parc) i nit, i que el personatge digui «Bon dia!» i «Bona nit!».|Usar «fondo siguiente» para hacer pasar el tiempo: día (parque) y noche, y que el personaje diga «¡Buenos días!» y «¡Buenas noches!».",
      "Intercanviar el guió gràfic amb un company/a i programar la història de l'altre.|Intercambiar el guion gráfico con un compañero/a y programar la historia del otro."
    ],
    trans: [
      "Llengua: l'estructura d'un relat (inici, desenvolupament i final) i la narració oral.|Lengua: la estructura de un relato (inicio, desarrollo y final) y la narración oral.",
      "Educació artística: el guió gràfic, les vinyetes del còmic i el decorat del teatre.|Educación artística: el guion gráfico, las viñetas del cómic y el decorado del teatro.",
      "Sessió següent: el projecte «Presenta't», on el lloc preferit serà un canvi de fons.|Sesión siguiente: el proyecto «Preséntate», donde el sitio favorito será un cambio de fondo."
    ],
    obj: [
      "L'alumne/a canvia el fons de l'escenari amb «canvia el fons a» i amb «fons següent».|El alumno/a cambia el fondo del escenario con «cambia el fondo a» y con «fondo siguiente».",
      "L'alumne/a explica que «fons següent» segueix l'ordre de la llista i torna al primer després de l'últim.|El alumno/a explica que «fondo siguiente» sigue el orden de la lista y vuelve al primero después del último.",
      "L'alumne/a fa sortir un personatge de l'escena amb «amaga't» i el fa tornar amb «mostra't».|El alumno/a hace salir a un personaje de la escena con «escóndete» y lo hace volver con «muéstrate».",
      "L'alumne/a planifica una història en escenes (guió gràfic) i la programa amb almenys dos fons.|El alumno/a planifica una historia en escenas (guion gráfico) y la programa con al menos dos fondos."
    ],
    comp: [
      "Competència digital (CD5): crear una història digital amb diverses escenes|Competencia digital (CD5): crear una historia digital con varias escenas",
      "Pensament computacional: descomposició d'una història en escenes i ordre de les instruccions|Pensamiento computacional: descomposición de una historia en escenas y orden de las instrucciones",
      "Llengua: estructura d'un relat (inici, desenvolupament i final) i narració oral|Lengua: estructura de un relato (inicio, desarrollo y final) y narración oral",
      "Educació artística: el guió gràfic i la composició d'una escena|Educación artística: el guion gráfico y la composición de una escena"
    ],
    vocab: [
      ["Fons|Fondo", "El dibuix de darrere de tot de l'escenari, com el decorat del teatre.|El dibujo de detrás de todo del escenario, como el decorado del teatro."],
      ["Fons següent|Fondo siguiente", "El fons que ve després a la llista; després de l'últim torna el primer.|El fondo que viene después en la lista; después del último vuelve el primero."],
      ["Escena|Escena", "Un tros de la història en un lloc: fons, personatges i el que fan i diuen.|Un trozo de la historia en un lugar: fondo, personajes y lo que hacen y dicen."],
      ["Guió gràfic|Guion gráfico", "La història dibuixada en vinyetes abans de programar-la.|La historia dibujada en viñetas antes de programarla."],
      ["Amagar-se|Esconderse", "Desaparèixer de l'escenari sense deixar d'existir.|Desaparecer del escenario sin dejar de existir."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Fons i escenes»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Fondos y escenas»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 fitxa del guió gràfic per alumne/a (imprimible 1) i llapis de colors (1 capsa per taula)|1 ficha del guion gráfico por alumno/a (imprimible 1) y lápices de colores (1 caja por mesa)",
        "Opcional: 3 cartolines de colors (verd, groc i blau fosc) per fer de «decorats» a la pausa activa|Opcional: 3 cartulinas de colores (verde, amarillo y azul oscuro) para hacer de «decorados» en la pausa activa"
      ],
      imprimir: [
        "1 fitxa «El meu guió gràfic» per alumne/a i 2-3 de recanvi (imprimible 1)|1 ficha «Mi guion gráfico» por alumno/a y 2-3 de recambio (imprimible 1)"
      ],
      prep: [
        "El dia abans (10 min): imprimir una fitxa del guió gràfic per alumne/a i alguna de recanvi.|El día antes (10 min): imprimir una ficha del guion gráfico por alumno/a y alguna de recambio.",
        "El dia abans (10 min): dibuixar un guió gràfic propi de 3 vinyetes (ninots i paraules) per ensenyar-lo com a exemple.|El día antes (10 min): dibujar un guion gráfico propio de 3 viñetas (monigotes y palabras) para enseñarlo como ejemplo.",
        "Provar les demostracions de les diapositives 4, 5, 6 i 10.|Probar las demostraciones de las diapositivas 4, 5, 6 y 10.",
        "Deixar els ordinadors amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el taller de decorats|Recordamos y el taller de decorados", fase: 'inici',
        fa: "Fes una ronda ràpida de brúixola. Després pregunta com canvia de lloc una obra de teatre (es canvia el decorat) i presenta el repte del dia: històries que viatgen.|Haz una ronda rápida de brújula. Después pregunta cómo cambia de sitio una obra de teatro (se cambia el decorado) y presenta el reto del día: historias que viajan.",
        diu: ["Mira a la dreta i gira -90 graus: on mires?|Mira a la derecha y gira -90 grados: ¿dónde miras?", "Com sabem, al teatre, que l'obra ara passa en un bosc?|¿Cómo sabemos, en el teatro, que la obra ahora pasa en un bosque?", "Al teatre, com sabem que l'obra ha canviat de lloc? (Canvien el decorat.)|En el teatro, ¿cómo sabemos que la obra ha cambiado de sitio? (Cambian el decorado.)", "Avui les vostres històries viatjaran del bosc a la platja, a l'espai…|Hoy vuestras historias viajarán del bosque a la playa, al espacio…"],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Fons, fons següent i amagar-se|Fondos, fondo siguiente y esconderse", fase: 'teoria',
        fa: "Mostra el canvi de fons i fes notar que el personatge es queda on és. Explica «fons següent» amb la demostració i pregunta què passa després de l'últim. Presenta «amaga't» i «mostra't». Acaba amb la idea d'escena i ensenya el teu guió gràfic de 3 vinyetes.|Muestra el cambio de fondo y haz notar que el personaje se queda donde está. Explica «fondo siguiente» con la demostración y pregunta qué pasa después del último. Presenta «escóndete» y «muéstrate». Termina con la idea de escena y enseña tu guion gráfico de 3 viñetas.",
        diu: ["Quan canvia el fons, en Numi s'ha mogut?|Cuando cambia el fondo, ¿Numi se ha movido?", "Després de l'espai, quin fons vindrà?|Después del espacio, ¿qué fondo vendrá?", "Quines tres coses té cada escena?|¿Qué tres cosas tiene cada escena?", "Després de l'espai, quin fons ve amb «fons següent»? (El primer: el bosc.)|Después del espacio, ¿qué fondo viene con «fondo siguiente»? (El primero: el bosque.)"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "El guió gràfic|El guion gráfico", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa a la fitxa una història de 3 escenes: a cada vinyeta, el fons, el personatge i què diu, i a sota, els blocs que caldrien. Després, en parelles, s'expliquen la història l'un a l'altre. Aquest guió el podran fer servir al pas «Crea».|Cada alumno/a dibuja en la ficha una historia de 3 escenas: en cada viñeta, el fondo, el personaje y qué dice, y debajo, los bloques que harían falta. Después, por parejas, se explican la historia el uno al otro. Este guion lo podrán usar en el paso «Crea».",
        diu: ["No cal dibuixar bé: n'hi ha prou amb ninots i paraules.|No hace falta dibujar bien: basta con monigotes y palabras.", "Quin bloc farà que passem de la vinyeta 1 a la 2?|¿Qué bloque hará que pasemos de la viñeta 1 a la 2?", "A cada vinyeta: on passa, qui hi surt i què diu.|En cada viñeta: dónde pasa, quién sale y qué dice.", "Explica la teva història al company/a: s'entén l'ordre de les escenes?|Explica tu historia al compañero/a: ¿se entiende el orden de las escenas?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Avancen fins a la pausa activa. Al pas «El guió gràfic», que toquin «Ho hem fet!», perquè ja l'han fet en paper. Al viatge de la Tuga, que comptin els fons en veu baixa i després en mirin el guió. A la història d'en Numi que acaba en una platja fosca, que diguin quin bloc està malament abans de triar-lo.|Avanzan hasta la pausa activa. En el paso «El guion gráfico», que toquen «¡Lo hemos hecho!», porque ya lo han hecho en papel. En el viaje de Tuga, que cuenten los fondos en voz baja y después miren su guion. En la historia de Numi que acaba en una playa oscura, que digan qué bloque está mal antes de elegirlo.",
        diu: ["Quants fons has comptat? Quins blocs els canvien?|¿Cuántos fondos has contado? ¿Qué bloques los cambian?", "On acaba la història d'en Numi i per què?|¿Dónde termina la historia de Numi y por qué?", "Quin bloc fa que la platja surti fosca? (El que canvia el fons a l'espai.)|¿Qué bloque hace que la playa salga oscura? (El que cambia el fondo al espacio.)", "Si una història té tres fons, quants blocs de fons calen? (Normalment, un per escena.)|Si una historia tiene tres fondos, ¿cuántos bloques de fondo hacen falta? (Normalmente, uno por escena.)"],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: la pregunta del gir, els decorats, les 5 targetes, «fons següent», ordenar el guió de la Guida, «El guió gràfic» (ja fet), el viatge de la Tuga, quin fons es veu al final i la platja que surt fosca.|De «Recuerda» hasta «Investiga»: la pregunta del giro, los decorados, las 5 tarjetas, «fondo siguiente», ordenar el guion de Guida, «El guion gráfico» (ya hecho), el viaje de Tuga, qué fondo se ve al final y la playa que sale oscura.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: canvis de decorat|Retos: cambios de decorado", fase: 'ordinador',
        fa: "Feu la pausa activa dels decorats tots junts. Després projecta el repte de les escenes en mal ordre (diapositiva 10): que trobin els dos blocs de fons intercanviats, però sense resoldre'l del tot. Deixa'ls fer els quatre reptes i passeja preguntant quin fons hi ha a cada escena.|Haced la pausa activa de los decorados todos juntos. Después proyecta el reto de las escenas en mal orden (diapositiva 10): que encuentren los dos bloques de fondo intercambiados, pero sin resolverlo del todo. Deja que hagan los cuatro retos y pasea preguntando qué fondo hay en cada escena.",
        diu: ["Quants «fons següent» calen del bosc a l'espai?|¿Cuántos «fondo siguiente» hacen falta del bosque al espacio?", "Quins dos blocs estan intercanviats?|¿Qué dos bloques están intercambiados?", "L'Estel ha de dir «Adéu!» i després amagar-se. Per què en aquest ordre? (Si s'amaga primer, ningú no veu la frase.)|Estel tiene que decir «¡Adiós!» y después esconderse. ¿Por qué en este orden? (Si se esconde primero, nadie ve la frase.)", "En una història desordenada, cal esborrar-ho tot? (No: només canviar els blocs que fallen.)|En una historia desordenada, ¿hay que borrarlo todo? (No: solo cambiar los bloques que fallan.)"],
        slides: ['s10', 's11'], app: "«Pausa activa» i els quatre reptes: la platja, el viatge amb fons següent, el comiat de l'Estel i les escenes en mal ordre.|«Pausa activa» y los cuatro retos: la playa, el viaje con fondo siguiente, la despedida de Estel y las escenas en mal orden.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 5, t: "Crea: la meva escena|Crea: mi escena", fase: 'crea',
        fa: "Cada alumne/a programa la història del seu guió gràfic (o una de nova) amb la Flama: almenys dos fons i una frase a cada escena.|Cada alumno/a programa la historia de su guion gráfico (o una nueva) con Flama: al menos dos fondos y una frase en cada escena.",
        diu: ["Mira la teva fitxa: quin és el primer fons?|Mira tu ficha: ¿cuál es el primer fondo?", "Cada escena comença amb el seu fons i després ve la frase.|Cada escena empieza con su fondo y después viene la frase.", "Vols que la Flama surti de l'escena al final? Quin bloc ho fa? («Amaga't».)|¿Quieres que Flama salga de la escena al final? ¿Qué bloque lo hace? («Escóndete».)"],
        slides: ['s12', 's15'], app: "Pas «Crea»: La meva escena.|Paso «Crea»: Mi escena.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum i pregunta qui ha fet una història de més de dues escenes. Deixa que facin les preguntes finals de l'app i com s'han sentit. A la porta, fes a cada alumne/a una pregunta del tiquet i recull les fitxes del guió gràfic: les poden fer servir d'idea per al projecte.|Repasa las tres ideas con el resumen y pregunta quién ha hecho una historia de más de dos escenas. Deja que hagan las preguntas finales de la app y cómo se han sentido. En la puerta, haz a cada alumno/a una pregunta del ticket y recoge las fichas del guion gráfico: las pueden usar como idea para el proyecto.",
        diu: ["Què passa amb els personatges quan canvia el fons?|¿Qué pasa con los personajes cuando cambia el fondo?", "Quin bloc fa sortir un personatge de l'escena?|¿Qué bloque hace salir a un personaje de la escena?", "Quines tres coses té una escena? (Fons, personatges i el que fan i diuen.)|¿Qué tres cosas tiene una escena? (Fondo, personajes y lo que hacen y dicen.)"],
        slides: ['s13', 's14'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el canvi de fons després de totes les frases i la història sembla que passi tota al primer lloc.|Pone el cambio de fondo después de todas las frases y la historia parece que pase toda en el primer sitio.",
        "Que segueixi el guió gràfic: cada vinyeta comença amb el seu fons i després ve la frase.|Que siga el guion gráfico: cada viñeta empieza con su fondo y después viene la frase."],
      ["No entén per què «fons següent» torna al bosc.|No entiende por qué «fondo siguiente» vuelve al bosque.",
        "Que digui la llista en veu alta i compti amb els dits: després de l'últim, es torna a començar, com els dies de la setmana.|Que diga la lista en voz alta y cuente con los dedos: después del último, se vuelve a empezar, como los días de la semana."],
      ["Amaga el personatge abans que digui la frase de comiat i no es veu.|Esconde al personaje antes de que diga la frase de despedida y no se ve.",
        "Pregunta: el públic pot llegir una frase d'un personatge invisible? Quin bloc ha d'anar primer?|Pregunta: ¿el público puede leer una frase de un personaje invisible? ¿Qué bloque tiene que ir primero?"],
      ["Creu que el personatge amagat s'ha esborrat i el vol tornar a crear.|Cree que el personaje escondido se ha borrado y lo quiere volver a crear.",
        "Que toqui la bandera una altra vegada: tot torna a començar i el personatge torna a ser-hi.|Que toque la bandera otra vez: todo vuelve a empezar y el personaje vuelve a estar."],
      ["A les escenes en mal ordre, esborra tot el guió.|En las escenas en mal orden, borra todo el guion.",
        "Que llegeixi el guió en veu alta i trobi on diu «nit» i on diu «bosc»: només cal canviar aquests dos blocs.|Que lea el guion en voz alta y encuentre dónde dice «noche» y dónde dice «bosque»: solo hay que cambiar esos dos bloques."],
      ["Posa «fons següent» però el fons que vol no és el següent de la llista.|Pone «fondo siguiente» pero el fondo que quiere no es el siguiente de la lista.",
        "Que digui la llista de fons en veu alta i assenyali on és ara: si en vol un de concret, és millor «canvia el fons a».|Que diga la lista de fondos en voz alta y señale dónde está ahora: si quiere uno concreto, es mejor «cambia el fondo a»."]
    ],
    diff: {
      mes: "Fer una història de 4 escenes en què el personatge s'amaga en una escena i torna a sortir (mostra't) en la següent, amb un pensament i una frase a cada escena.|Hacer una historia de 4 escenas en la que el personaje se esconde en una escena y vuelve a salir (muéstrate) en la siguiente, con un pensamiento y una frase en cada escena.",
      menys: "Fer una història de només 2 escenes seguint la fitxa pas a pas: fons 1, frase, fons 2, frase. Fer servir «canvia el fons a» en lloc de «fons següent».|Hacer una historia de solo 2 escenas siguiendo la ficha paso a paso: fondo 1, frase, fondo 2, frase. Usar «cambia el fondo a» en lugar de «fondo siguiente»."
    },
    aval: {
      ticket: ["Els fons són bosc, platja i espai. Ara és l'espai: què fa «fons següent»?|Los fondos son bosque, playa y espacio. Ahora es el espacio: ¿qué hace «fondo siguiente»?",
        "Digues les tres coses que té una escena.|Di las tres cosas que tiene una escena."],
      rubric: [
        ["Canviar el fons|Cambiar el fondo", "Fa servir «canvia el fons a» i «fons següent» i preveu quin fons es veurà.|Usa «cambia el fondo a» y «fondo siguiente» y prevé qué fondo se verá.", "Canvia el fons però li costa preveure l'ordre de «fons següent».|Cambia el fondo pero le cuesta prever el orden de «fondo siguiente»."],
        ["Escenes|Escenas", "Planifica 3 escenes al guió gràfic amb fons, personatge i frase.|Planifica 3 escenas en el guion gráfico con fondo, personaje y frase.", "Dibuixa les escenes però sense relacionar-les amb els blocs.|Dibuja las escenas pero sin relacionarlas con los bloques."],
        ["Història programada|Historia programada", "La seva història té almenys dos fons i una frase a cada escena, en l'ordre bo.|Su historia tiene al menos dos fondos y una frase en cada escena, en el orden correcto.", "Té dos fons, però les frases no coincideixen amb l'escena.|Tiene dos fondos, pero las frases no coinciden con la escena."],
        ["Guió gràfic|Guion gráfico",
          "Dibuixa tres escenes en ordre amb el fons, el personatge i el que diu a cadascuna.|Dibuja tres escenas en orden con el fondo, el personaje y lo que dice en cada una.",
          "Dibuixa les escenes, però hi falta el lloc o el que diu el personatge.|Dibuja las escenas, pero falta el lugar o lo que dice el personaje."]
      ]
    },
    casa: "A casa, inventeu junts una història de 3 escenes i expliqueu-la com si fos una obra de teatre, canviant de lloc de la casa a cada escena (la cuina és la platja, el passadís és el bosc…).|En casa, inventad juntos una historia de 3 escenas y explicadla como si fuera una obra de teatro, cambiando de sitio de la casa en cada escena (la cocina es la playa, el pasillo es el bosque…).",
    slides: [
      { id: 's1', k: 'portada', t: "Fons i escenes|Fondos y escenas", x: "Al taller del teatre pintem decorats: avui les històries viatgen.|En el taller del teatro pintamos decorados: hoy las historias viajan.",
        nota: "Explica que avui faran històries amb diversos llocs.|Explica que hoy harán historias con varios lugares." },
      { id: 's2', k: 'pregunta', t: "Com canvia de lloc una obra?|¿Cómo cambia de sitio una obra?", punts: ["Canvia el decorat|Cambia el decorado", "Els actors surten i entren|Los actores salen y entran", "Canvia la llum|Cambia la luz"],
        nota: "Relaciona les respostes amb els blocs d'avui: fons, amaga't i mostra't.|Relaciona las respuestas con los bloques de hoy: fondo, escóndete y muéstrate." },
      { id: 's3', k: 'anim', t: "El fons de l'escenari|El fondo del escenario", anim: 'g1bg', x: "El fons canvia; els personatges es queden on són.|El fondo cambia; los personajes se quedan donde están.",
        nota: "Fes notar que en Numi no es mou mentre canvien els fons.|Haz notar que Numi no se mueve mientras cambian los fondos." },
      { id: 's4', k: 'media', t: "Canvia el fons a…|Cambia el fondo a…", x: "Entre frase i frase, la història canvia de lloc.|Entre frase y frase, la historia cambia de sitio.",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'platja', 'espai'], sprites: [{ id: 'numi', art: 'numi', x: 0, y: -60, costume: 1 }] }, prog: `@numi flag{ say:"Som al bosc.|Estamos en el bosque.",2 bg:platja say:"Ara, a la platja!|¡Ahora, a la playa!",2 bg:espai say:"I ara, a l'espai!|¡Y ahora, al espacio!",2 }`, time: 7 },
        nota: "Pregunta quants blocs de fons hi ha al guió (dos).|Pregunta cuántos bloques de fondo hay en el guion (dos)." },
      { id: 's5', k: 'media', t: "Fons següent|Fondo siguiente", x: "Un darrere l'altre… i després de l'últim, el primer.|Uno detrás de otro… y después del último, el primero.",
        media: { k: 'stage', w: { bg: 'bosc', bgs: ['bosc', 'platja', 'espai'], sprites: [{ id: 'guida', art: 'guida', x: 0, y: -60 }] }, prog: '@guida flag{ say:"1|1",1 nextbg say:"2|2",1 nextbg say:"3|3",1 nextbg say:"I tornem al primer!|¡Y volvemos al primero!",2 }', time: 6 },
        nota: "Abans del tercer canvi, pregunta quin fons vindrà.|Antes del tercer cambio, pregunta qué fondo vendrá." },
      { id: 's6', k: 'media', t: "Amaga't i mostra't|Escóndete y muéstrate", x: "L'Estel s'acomiada i s'amaga: continua allà, però no es veu.|Estel se despide y se esconde: sigue allí, pero no se ve.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [{ id: 'estel', art: 'estel', x: 90, y: -40 }, { id: 'numi', art: 'numi', x: -100, y: -60, costume: 2 }] }, prog: '@estel flag{ say:"Adéu, me\'n vaig!|¡Adiós, me voy!",2 hide } @numi flag{ think:"…|…",2 say:"On és l\'Estel?|¿Dónde está Estel?",3 }', time: 6 },
        nota: "Demana: primer la frase de comiat i després amaga't, o al revés? Per què?|Pide: ¿primero la frase de despedida y después escóndete, o al revés? ¿Por qué?" },
      { id: 's7', k: 'anim', t: "Una història feta d'escenes|Una historia hecha de escenas", anim: 'g1scene', x: "Escena = fons + personatges + el que fan i diuen.|Escena = fondo + personajes + lo que hacen y dicen.",
        nota: "Ensenya el teu guió gràfic d'exemple de 3 vinyetes.|Enseña tu guion gráfico de ejemplo de 3 viñetas." },
      { id: 's8', k: 'activitat', t: "El meu guió gràfic|Mi guion gráfico", timer: 12, punts: ["Dibuixa 3 escenes a la fitxa.|Dibuja 3 escenas en la ficha.", "A cada una: fons, personatge i què diu.|En cada una: fondo, personaje y qué dice.", "A sota, els blocs que caldrien.|Debajo, los bloques que harían falta.", "Explica la història al company/a.|Explica la historia al compañero/a."],
        nota: "Recorda que no es valora el dibuix: valen ninots i paraules.|Recuerda que no se valora el dibujo: valen monigotes y palabras." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Fons i escenes».|Abre «Fondos y escenas».", "A «El guió gràfic», toca «Ho hem fet!».|En «El guion gráfico», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al viatge de la Tuga, que comptin els fons.|En el viaje de Tuga, que cuenten los fondos." },
      { id: 's10', k: 'media', t: "Escenes en mal ordre|Escenas en mal orden", x: "Havia de començar al bosc i acabar de nit. Què falla?|Tenía que empezar en el bosque y terminar de noche. ¿Qué falla?",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: 0, y: -80 }], { bgs: ['escenari', 'bosc', 'nit'] }), prog: '@guida flag{ say:"Comença la funció!|¡Empieza la función!",2 bg:nit say:"Bon dia, bosc!|¡Buenos días, bosque!",2 bg:bosc say:"Bona nit a tothom!|¡Buenas noches a todos!",2 }', time: 7 },
        nota: "Que trobin els dos blocs de fons intercanviats sense resoldre-ho del tot: ho faran a l'app.|Que encuentren los dos bloques de fondo intercambiados sin resolverlo del todo: lo harán en la app." },
      { id: 's11', k: 'repte', t: "Reptes: canvis de decorat|Retos: cambios de decorado", timer: 10, punts: ["1. Anem a la platja|1. Vamos a la playa", "2. El viatge amb fons següent|2. El viaje con fondo siguiente", "3. El comiat de l'Estel|3. La despedida de Estel", "4. Les escenes en mal ordre|4. Las escenas en mal orden"],
        nota: "Si algú s'encalla, que llegeixi el guió en veu alta, escena a escena.|Si alguien se atasca, que lea el guion en voz alta, escena a escena." },
      { id: 's12', k: 'activitat', t: "Crea: la meva escena|Crea: mi escena", timer: 5, x: "Programa el teu guió gràfic: almenys dos fons i una frase a cada escena.|Programa tu guion gráfico: al menos dos fondos y una frase en cada escena.",
        nota: "Qui acabi pot afegir una escena on el personatge s'amagui.|Quien termine puede añadir una escena donde el personaje se esconda." },
      { id: 's15', k: 'concepte', t: "Escena a escena|Escena a escena", pic: 'img/ment/cad.webp', punts: ["Primer, canvia el fons.|Primero, cambia el fondo.", "Després, el personatge parla.|Después, el personaje habla.", "Fons nou, frase nova…|Fondo nuevo, frase nueva…"],
        nota: "Com les fitxes de dòmino: cada escena va darrere l'altra. Demana a dos alumnes que llegeixin en veu alta l'ordre dels blocs del seu guió gràfic.|Como las fichas de dominó: cada escena va detrás de la otra. Pide a dos alumnos que lean en voz alta el orden de los bloques de su guion gráfico." },
      { id: 's13', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El fons és el decorat i es pot canviar.|El fondo es el decorado y se puede cambiar.", "Fons següent segueix la llista i torna al primer.|Fondo siguiente sigue la lista y vuelve al primero.", "Amaga't fa sortir de l'escena.|Escóndete hace salir de la escena."],
        nota: "Pregunta qui ha fet una història de més de dues escenes.|Pregunta quién ha hecho una historia de más de dos escenas." },
      { id: 's14', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Ara és l'espai (l'últim): què fa «fons següent»?|Ahora es el espacio (el último): ¿qué hace «fondo siguiente»?", "Les tres coses d'una escena.|Las tres cosas de una escena."],
        nota: "Recull les fitxes del guió gràfic: les podeu fer servir com a idea per al projecte.|Recoge las fichas del guion gráfico: las podéis usar como idea para el proyecto." }
    ],
    print: [
      { id: 'p1', t: "El meu guió gràfic|Mi guion gráfico", k: 'fitxa',
        intro: "Dibuixa una història de 3 escenes. A cada escena: el fons, el personatge i el que diu. A sota, escriu els blocs.|Dibuja una historia de 3 escenas. En cada escena: el fondo, el personaje y lo que dice. Debajo, escribe los bloques.",
        items: [
          { q: "Escena 1: on passa (fons)? Qui hi surt? Què diu?|Escena 1: ¿dónde pasa (fondo)? ¿Quién sale? ¿Qué dice?", big: true, sol: "Resposta oberta: un fons, un personatge i una frase.|Respuesta abierta: un fondo, un personaje y una frase." },
          { q: "Escena 2: on passa ara? Què diu o pensa el personatge?|Escena 2: ¿dónde pasa ahora? ¿Qué dice o piensa el personaje?", big: true, sol: "Resposta oberta: un fons diferent del de l'escena 1.|Respuesta abierta: un fondo diferente del de la escena 1." },
          { q: "Escena 3: com s'acaba la història? El personatge s'amaga?|Escena 3: ¿cómo termina la historia? ¿El personaje se esconde?", big: true, sol: "Resposta oberta: pot acabar amb «amaga't».|Respuesta abierta: puede terminar con «escóndete»." },
          { q: "Escriu els blocs de la història, en ordre (canvia el fons a…, digues…, amaga't…).|Escribe los bloques de la historia, en orden (cambia el fondo a…, di…, escóndete…).", sol: "Exemple: canvia el fons a bosc · digues «Hola!» 2 s · canvia el fons a platja · digues «Quina calor!» 2 s · amaga't.|Ejemplo: cambia el fondo a bosque · di «¡Hola!» 2 s · cambia el fondo a playa · di «¡Qué calor!» 2 s · escóndete." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: presenta't ---------- */
  'g1-4': {
    intro: "Sessió de projecte que tanca la unitat: cada alumne/a programa un personatge que es presenta parlant d'ell/a (nom de pila, què li agrada fer i lloc preferit). Treballen els quatre passos d'un projecte (pensar el pla, programar, provar i millorar) i construeixen el programa a trossos, provant després de cada tros. També aprenen quines dades es poden compartir i quines són privades. La classe comença amb un exemple, segueix amb el pla en paper, els tres trossos guiats a l'app i la creació lliure, i acaba amb una estrena amb comentaris amables.|Sesión de proyecto que cierra la unidad: cada alumno/a programa un personaje que se presenta hablando de él/ella (nombre de pila, qué le gusta hacer y sitio favorito). Trabajan los cuatro pasos de un proyecto (pensar el plan, programar, probar y mejorar) y construyen el programa a trozos, probando después de cada trozo. También aprenden qué datos se pueden compartir y cuáles son privados. La clase empieza con un ejemplo, sigue con el plan en papel, los tres trozos guiados en la app y la creación libre, y termina con un estreno con comentarios amables.",
    claus: [
      "Un projecte es fa en quatre passos: pla, programar, provar i millorar.|Un proyecto se hace en cuatro pasos: plan, programar, probar y mejorar.",
      "Es construeix a trossos: una part, es prova, i després la següent.|Se construye a trozos: una parte, se prueba, y después la siguiente.",
      "El nom de pila i els gustos es poden compartir; l'adreça, el telèfon, els cognoms o l'escola, no.|El nombre de pila y los gustos se pueden compartir; la dirección, el teléfono, los apellidos o el colegio, no.",
      "Provar-ho com si fossis el públic ajuda a trobar errors, com una frase sense segons.|Probarlo como si fueras el público ayuda a encontrar errores, como una frase sin segundos."
    ],
    prev: [
      "Moure, girar i apuntar un personatge (sessions 1 i 2).|Mover, girar y apuntar a un personaje (sesiones 1 y 2).",
      "Dir i pensar frases amb segons (sessió 2).|Decir y pensar frases con segundos (sesión 2).",
      "Canviar el fons i amagar un personatge (sessió 3).|Cambiar el fondo y esconder a un personaje (sesión 3)."
    ],
    faq: [
      ["Puc posar el meu cognom?|¿Puedo poner mi apellido?",
        "Millor que no: en un projecte que veuran altres persones, n'hi ha prou amb el nom de pila. El cognom, l'adreça o el telèfon són dades privades.|Mejor que no: en un proyecto que verán otras personas, basta con el nombre de pila. El apellido, la dirección o el teléfono son datos privados."],
      ["El meu lloc preferit no és a la llista de fons.|Mi sitio favorito no está en la lista de fondos.",
        "Tria el fons que s'hi assembli més (el parc per a un camp de futbol, la ciutat per al teu barri) i explica-ho amb una frase.|Elige el fondo que más se parezca (el parque para un campo de fútbol, la ciudad para tu barrio) y explícalo con una frase."],
      ["Puc programar els tres personatges?|¿Puedo programar a los tres personajes?",
        "Sí! N'hi ha prou que un es presenti, però en pots fer parlar més d'un. Recorda tocar cada personatge a dalt per veure els seus blocs.|¡Sí! Basta con que uno se presente, pero puedes hacer hablar a más de uno. Recuerda tocar cada personaje arriba para ver sus bloques."],
      ["L'app diu que funciona però que falta alguna cosa. Què vol dir?|La app dice que funciona pero que falta algo. ¿Qué quiere decir?",
        "El teu personatge ha de dir almenys tres frases (nom, què t'agrada i lloc preferit) i moure's o girar. Mira la llista de criteris.|Tu personaje tiene que decir al menos tres frases (nombre, lo que te gusta y sitio favorito) y moverse o girar. Mira la lista de criterios."],
      ["On queda desat el projecte?|¿Dónde queda guardado el proyecto?",
        "Quan toques «Desa-ho i continua», queda a «Projectes»: el podràs ensenyar a casa des del mòbil.|Cuando tocas «Guárdalo y continúa», queda en «Proyectos»: lo podrás enseñar en casa desde el móvil."],
      ["I si a algú no li agrada la meva presentació?|¿Y si a alguien no le gusta mi presentación?",
        "Els comentaris de l'estrena són amables: dues coses bones i una idea per millorar. Les idees serveixen per fer-la encara millor.|Los comentarios del estreno son amables: dos cosas buenas y una idea para mejorar. Las ideas sirven para hacerla todavía mejor."]
    ],
    tec: [
      ["L'alumne/a no troba el projecte desat.|El alumno/a no encuentra el proyecto guardado.",
        "Ha de tocar «Desa-ho i continua» quan el projecte funciona; després surt a la secció «Projectes» del seu perfil.|Tiene que tocar «Guárdalo y continúa» cuando el proyecto funciona; después sale en la sección «Proyectos» de su perfil."],
      ["Per ensenyar-ho a la pantalla gran no es veu l'escenari sencer.|Para enseñarlo en la pantalla grande no se ve el escenario entero.",
        "Feu servir el zoom del navegador (Ctrl i -) fins que l'escenari hi càpiga, o passegeu per les taules.|Usad el zoom del navegador (Ctrl y -) hasta que el escenario quepa, o pasead por las mesas."],
      ["Ha programat un personatge i n'ha mirat un altre.|Ha programado a un personaje y ha mirado a otro.",
        "Que toqui el seu personatge a la llista de dalt: cada un té els seus blocs.|Que toque su personaje en la lista de arriba: cada uno tiene sus bloques."],
      ["La presentació dura tant que la prova s'acaba abans.|La presentación dura tanto que la prueba se acaba antes.",
        "La prova dura uns 16 segons: que facin frases de 2 segons i no gaires més de sis blocs de frases.|La prueba dura unos 16 segundos: que hagan frases de 2 segundos y no muchos más de seis bloques de frases."],
      ["Un alumne/a ha escrit una dada privada en una frase.|Un alumno/a ha escrito un dato privado en una frase.",
        "Que toqui el text del bloc i el canviï abans de desar; parleu-ne en privat, sense posar-lo en evidència.|Que toque el texto del bloque y lo cambie antes de guardar; hablad de ello en privado, sin ponerle en evidencia."]
    ],
    seg: [
      "Dades personals: abans de desar, cada parella revisa que no hi hagi cognoms, adreces, telèfons ni el nom de l'escola.|Datos personales: antes de guardar, cada pareja revisa que no haya apellidos, direcciones, teléfonos ni el nombre del colegio.",
      "A l'estrena, ningú no està obligat a sortir; es poden ensenyar els projectes passejant per les taules.|En el estreno, nadie está obligado a salir; se pueden enseñar los proyectos paseando por las mesas.",
      "Si algú comparteix una informació personal delicada (família, salut, un problema), atura-ho amb tacte, parla-hi en privat i comenta-ho amb la tutoria.|Si alguien comparte una información personal delicada (familia, salud, un problema), páralo con tacto, habla con él/ella en privado y coméntalo con la tutoría."
    ],
    extra: [
      "Afegir una segona escena: el personatge s'amaga, canvia el fons a un altre lloc i torna a sortir (mostra't) per explicar-ne alguna cosa.|Añadir una segunda escena: el personaje se esconde, cambia el fondo a otro sitio y vuelve a salir (muéstrate) para explicar algo de él.",
      "Fer que dos personatges es presentin l'un a l'altre per torns, com un diàleg.|Hacer que dos personajes se presenten el uno al otro por turnos, como un diálogo.",
      "Gravar una narració oral de la presentació i comparar-la amb la que fa el personatge.|Grabar una narración oral de la presentación y compararla con la que hace el personaje."
    ],
    trans: [
      "Unitat 1 sencera: moure (sessió 1), girar i parlar (sessió 2) i fons i escenes (sessió 3) s'ajunten en un projecte.|Unidad 1 entera: mover (sesión 1), girar y hablar (sesión 2) y fondos y escenas (sesión 3) se juntan en un proyecto.",
      "Tutoria i ciutadania digital: les dades personals i com donar comentaris amables.|Tutoría y ciudadanía digital: los datos personales y cómo dar comentarios amables.",
      "Unitat 2: els personatges es mouran sols amb vestits, esperes i bucles.|Unidad 2: los personajes se moverán solos con disfraces, esperas y bucles."
    ],
    obj: [
      "L'alumne/a planifica una presentació personal (nom, què li agrada i lloc preferit) abans de programar.|El alumno/a planifica una presentación personal (nombre, qué le gusta y sitio favorito) antes de programar.",
      "L'alumne/a construeix un programa a trossos i el prova després de cada tros.|El alumno/a construye un programa a trozos y lo prueba después de cada trozo.",
      "L'alumne/a combina moure, girar, dir, canviar el fons i amagar-se en un sol projecte.|El alumno/a combina mover, girar, decir, cambiar el fondo y esconderse en un solo proyecto.",
      "L'alumne/a distingeix les dades que es poden compartir (nom de pila, gustos) de les privades (adreça, telèfon).|El alumno/a distingue los datos que se pueden compartir (nombre de pila, gustos) de los privados (dirección, teléfono)."
    ],
    comp: [
      "Competència digital (CD5 i CD4): crear un projecte digital propi i protegir les dades personals|Competencia digital (CD5 y CD4): crear un proyecto digital propio y proteger los datos personales",
      "Pensament computacional: planificar, descompondre en trossos, provar i depurar|Pensamiento computacional: planificar, descomponer en trozos, probar y depurar",
      "Competència personal i social: parlar de si mateix/a i donar i rebre comentaris amables|Competencia personal y social: hablar de sí mismo/a y dar y recibir comentarios amables",
      "Comunicació oral: presentar un treball davant del grup|Comunicación oral: presentar un trabajo delante del grupo"
    ],
    vocab: [
      ["Projecte|Proyecto", "Un treball més gran que es planifica, es fa, es prova i es millora.|Un trabajo más grande que se planifica, se hace, se prueba y se mejora."],
      ["Pla|Plan", "El que decidim abans de programar: què passarà i en quin ordre.|Lo que decidimos antes de programar: qué pasará y en qué orden."],
      ["Provar|Probar", "Executar el programa i mirar-lo com si fóssim el públic.|Ejecutar el programa y mirarlo como si fuéramos el público."],
      ["Millorar|Mejorar", "Canviar el que no funciona o no s'entén bé.|Cambiar lo que no funciona o no se entiende bien."],
      ["Dada privada|Dato privado", "Una informació que no es comparteix: adreça, telèfon, contrasenyes…|Una información que no se comparte: dirección, teléfono, contraseñas…"]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: presenta't»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: preséntate»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "1 fitxa «El meu pla» per alumne/a (imprimible 1) i 1 llapis|1 ficha «Mi plan» por alumno/a (imprimible 1) y 1 lápiz",
        "1 tira de 3 targetes «Dues estrelles i un desig» per alumne/a (imprimible 2)|1 tira de 3 tarjetas «Dos estrellas y un deseo» por alumno/a (imprimible 2)",
        "Opcional: una «estora vermella» (2 metres de cinta al terra) per a l'estrena final|Opcional: una «alfombra roja» (2 metros de cinta en el suelo) para el estreno final"
      ],
      imprimir: [
        "1 fitxa «El meu pla» per alumne/a (imprimible 1)|1 ficha «Mi plan» por alumno/a (imprimible 1)",
        "1 tira de targetes de comentaris per alumne/a (imprimible 2)|1 tira de tarjetas de comentarios por alumno/a (imprimible 2)"
      ],
      prep: [
        "El dia abans (15 min): imprimir una fitxa del pla i una tira de targetes de comentaris per alumne/a, i retallar les tires.|El día antes (15 min): imprimir una ficha del plan y una tira de tarjetas de comentarios por alumno/a, y recortar las tiras.",
        "Provar la presentació de la Tuga (diapositiva 4), la de la diapositiva 6 i la de la 9.|Probar la presentación de Tuga (diapositiva 4), la de la diapositiva 6 y la de la 9.",
        "Decidir com s'ensenyaran els projectes al final (voluntaris a la pantalla gran o passejant per les taules) i preparar l'ordinador del projector.|Decidir cómo se enseñarán los proyectos al final (voluntarios en la pantalla grande o paseando por las mesas) y preparar el ordenador del proyector.",
        "Deixar els ordinadors amb el perfil de cada alumne/a iniciat.|Dejar los ordenadores con el perfil de cada alumno/a iniciado."
      ]
    },
    plan: [
      { min: 4, t: "La gran estrena|El gran estreno", fase: 'inici',
        fa: "Explica que avui és l'estrena: cada alumne/a farà un personatge que es presenta parlant d'ell/a. Presenta els quatre passos d'un projecte: pla, programar, provar i millorar.|Explica que hoy es el estreno: cada alumno/a hará un personaje que se presenta hablando de él/ella. Presenta los cuatro pasos de un proyecto: plan, programar, probar y mejorar.",
        diu: ["Si un personatge parlés de tu, què diria?|Si un personaje hablara de ti, ¿qué diría?", "Avui no improvisarem: primer farem el pla.|Hoy no improvisaremos: primero haremos el plan.", "Quins són els quatre passos? (Pla, programar, provar i millorar.)|¿Cuáles son los cuatro pasos? (Plan, programar, probar y mejorar.)", "Al final farem una estrena amb aplaudiments!|¡Al final haremos un estreno con aplausos!"],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Un exemple i les dades privades|Un ejemplo y los datos privados", fase: 'teoria',
        fa: "Mostra la presentació de la Tuga i descomponeu-la en trossos a la pissarra. Parla de les dades privades: el nom de pila i els gustos es poden dir; l'adreça, el telèfon o l'escola, no. Ensenya un error habitual (una frase sense segons) i com es detecta provant.|Muestra la presentación de Tuga y descomponedla en trozos en la pizarra. Habla de los datos privados: el nombre de pila y los gustos se pueden decir; la dirección, el teléfono o el colegio, no. Enseña un error habitual (una frase sin segundos) y cómo se detecta probando.",
        diu: ["Quins trossos té la presentació de la Tuga?|¿Qué trozos tiene la presentación de Tuga?", "Per què no posem l'adreça en un projecte que veuran altres persones?|¿Por qué no ponemos la dirección en un proyecto que verán otras personas?", "Què pot dir la Tuga de si mateixa i què no hauria de dir mai? (El nom i els gustos sí; l'adreça o el telèfon, no.)|¿Qué puede decir Tuga de sí misma y qué no debería decir nunca? (El nombre y los gustos sí; la dirección o el teléfono, no.)", "La Guida diu «Hola!» però no es veu. Què li falta? (Segons.)|Guida dice «¡Hola!» pero no se ve. ¿Qué le falta? (Segundos.)"],
        slides: ['s3', 's4', 's5', 's6'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El meu pla|Mi plan", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa «El meu pla»: nom de pila, què li agrada, lloc preferit (un dels fons de l'app), quin personatge triarà i com entrarà i sortirà. En parelles, es llegeixen el pla en veu alta i comproven que no hi ha cap dada privada.|Cada alumno/a rellena la ficha «Mi plan»: nombre de pila, qué le gusta, sitio favorito (uno de los fondos de la app), qué personaje elegirá y cómo entrará y saldrá. Por parejas, se leen el plan en voz alta y comprueban que no hay ningún dato privado.",
        diu: ["El teu lloc preferit no hi és? Tria el fons que s'hi assembli més.|¿Tu sitio favorito no está? Elige el fondo que se le parezca más.", "Revisa el pla del company/a: hi ha alguna dada privada?|Revisa el plan del compañero/a: ¿hay algún dato privado?", "Revisor/a: al pla del company/a hi ha alguna dada privada?|Revisor/a: ¿en el plan del compañero/a hay algún dato privado?", "Com entrarà el teu personatge? I com se n'anirà?|¿Cómo entrará tu personaje? ¿Y cómo se irá?"],
        slides: ['s7'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: investiga i els tres trossos|En el ordenador: investiga y los tres trozos", fase: 'ordinador',
        fa: "Avancen per l'app: la pregunta de les dades privades, en Vuit que no es llegeix, la pausa activa i els tres reptes que construeixen la presentació de la Guida a trossos. Remarca que després de cada tros es prova.|Avanzan por la app: la pregunta de los datos privados, Vuit que no se lee, la pausa activa y los tres retos que construyen la presentación de Guida a trozos. Remarca que después de cada trozo se prueba.",
        diu: ["Has provat el tros abans d'afegir-ne un altre?|¿Has probado el trozo antes de añadir otro?", "Quin bloc falta perquè la Guida se'n vagi mirant la porta?|¿Qué bloque falta para que Guida se vaya mirando la puerta?", "Cada repte continua el guió de l'anterior: no esborris el que ja funciona.|Cada reto continúa el guion del anterior: no borres lo que ya funciona.", "En Vuit diu dues frases però només se'n llegeix una. Quin bloc cal arreglar?|Vuit dice dos frases pero solo se lee una. ¿Qué bloque hay que arreglar?"],
        slides: ['s8', 's9', 's10'], app: "De «Recorda» fins als tres reptes de la Guida: «El meu pla» (ja fet), la pregunta de les dades privades, en Vuit, la pausa activa i els trossos 1, 2 i 3.|De «Recuerda» hasta los tres retos de Guida: «Mi plan» (ya hecho), la pregunta de los datos privados, Vuit, la pausa activa y los trozos 1, 2 y 3.", org: "Individual|Individual" },
      { min: 15, t: "Crea: presenta't!|Crea: ¡preséntate!", fase: 'crea',
        fa: "Cada alumne/a tria un personatge i programa la seva presentació seguint el pla. Passeja i pregunta en quin tros són. Quan la tinguin, la desen. Qui acabi abans fa de «provador/a» d'un company/a.|Cada alumno/a elige un personaje y programa su presentación siguiendo el plan. Pasea y pregunta en qué trozo están. Cuando la tengan, la guardan. Quien termine antes hace de «probador/a» de un compañero/a.",
        diu: ["Mira el pla: quin és el tros següent?|Mira el plan: ¿cuál es el trozo siguiente?", "Prova-ho com si fossis el públic: es llegeix tot?|Pruébalo como si fueras el público: ¿se lee todo?", "Has provat el primer tros? Ara afegeix el segon.|¿Has probado el primer trozo? Ahora añade el segundo.", "Mira els criteris: quin et falta?|Mira los criterios: ¿cuál te falta?", "Si acabes, fes de provador/a d'un company/a: es llegeixen totes les frases?|Si terminas, haz de probador/a de un compañero/a: ¿se leen todas las frases?"],
        slides: ['s11', 's12'], app: "Pas «Crea»: Presenta't (i el missatge per ensenyar-ho a un company/a).|Paso «Crea»: Preséntate (y el mensaje para enseñarlo a un compañero/a).", org: "Individual|Individual" },
      { min: 10, t: "L'estrena: dues estrelles i un desig|El estreno: dos estrellas y un deseo", fase: 'tancament',
        fa: "Feu l'estrena: alguns voluntaris mostren la presentació a la pantalla gran (o es passeja per les taules). Cada alumne/a omple una targeta per a un company/a: dues coses que li han agradat i una millora. Acaba amb les preguntes finals de l'app, el tiquet i un aplaudiment per a tots els creadors.|Haced el estreno: algunos voluntarios muestran la presentación en la pantalla grande (o se pasea por las mesas). Cada alumno/a rellena una tarjeta para un compañero/a: dos cosas que le han gustado y una mejora. Termina con las preguntas finales de la app, el ticket y un aplauso para todos los creadores.",
        diu: ["Comentaris amables: primer el que t'agrada, després la millora.|Comentarios amables: primero lo que te gusta, después la mejora.", "Quins passos hem seguit per fer el projecte?|¿Qué pasos hemos seguido para hacer el proyecto?", "Què t'ha agradat de la presentació? Digues-ho amb detall: «m'ha agradat que…».|¿Qué te ha gustado de la presentación? Dilo con detalle: «me ha gustado que…».", "La millora ha de ser una idea, no una crítica: «podries afegir…».|La mejora tiene que ser una idea, no una crítica: «podrías añadir…»."],
        slides: ['s13', 's14', 's15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup i per parelles|Todo el grupo y por parejas" },
      { min: 3, t: "Comiat de la unitat|Despedida de la unidad", fase: 'tancament',
        fa: "Repassa amb la diapositiva final què han après a la unitat: personatges i guions, moure endavant i enrere, girar, dir i pensar, fons i escenes. Felicita el grup per l'estrena i anuncia la unitat 2: els personatges es mouran sols, amb vestits i bucles. Recorda que poden ensenyar el projecte a casa des de «Projectes».|Repasa con la diapositiva final qué han aprendido en la unidad: personajes y guiones, mover adelante y atrás, girar, decir y pensar, fondos y escenas. Felicita al grupo por el estreno y anuncia la unidad 2: los personajes se moverán solos, con disfraces y bucles. Recuerda que pueden enseñar el proyecto en casa desde «Proyectos».",
        diu: ["La setmana vinent: animacions que no s'aturen mai!|La semana que viene: ¡animaciones que no se paran nunca!", "Què és el que més us ha agradat de la unitat?|¿Qué es lo que más os ha gustado de la unidad?", "Recordeu: a casa podeu ensenyar el projecte des de «Projectes».|Recordad: en casa podéis enseñar el proyecto desde «Proyectos»."],
        slides: ['s17'], app: "Cap.|Ninguna.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Vol posar el nom i els cognoms, o el nom de l'escola, a la presentació.|Quiere poner el nombre y los apellidos, o el nombre del colegio, en la presentación.",
        "Recorda la diferència entre dada pública i privada i pregunta: ho diries a algú que no coneixes pel carrer?|Recuerda la diferencia entre dato público y privado y pregunta: ¿se lo dirías a alguien que no conoces por la calle?"],
      ["Programa tota la presentació de cop sense provar-la i, quan falla, no sap on.|Programa toda la presentación de golpe sin probarla y, cuando falla, no sabe dónde.",
        "Que torni al pla i provi tros a tros: fins a quin tros funciona?|Que vuelva al plan y pruebe trozo a trozo: ¿hasta qué trozo funciona?"],
      ["Programa un personatge però mira l'escenari esperant que en faci un altre.|Programa un personaje pero mira el escenario esperando que haga otro.",
        "Que miri a la llista de dalt quin personatge té seleccionat: els blocs són del personatge triat.|Que mire en la lista de arriba qué personaje tiene seleccionado: los bloques son del personaje elegido."],
      ["Canvia el fons al principi i la resta de frases ja passen al lloc preferit.|Cambia el fondo al principio y el resto de frases ya pasan en el sitio favorito.",
        "Pregunta: en quin moment de la presentació parles del lloc preferit? Que hi posi el canvi de fons just abans.|Pregunta: ¿en qué momento de la presentación hablas del sitio favorito? Que ponga el cambio de fondo justo antes."],
      ["S'encalla buscant la frase perfecta i no avança.|Se atasca buscando la frase perfecta y no avanza.",
        "Que faci servir una frase de les que ofereix l'app i la millori al final, si té temps.|Que use una frase de las que ofrece la app y la mejore al final, si tiene tiempo."],
      ["Posa totes les frases sense segons i, en provar, només es veu l'última.|Pone todas las frases sin segundos y, al probar, solo se ve la última.",
        "Que miri la presentació com si fos el públic i compti quantes frases ha pogut llegir; després, que afegeixi «durant 2 s» a cadascuna.|Que mire la presentación como si fuera el público y cuente cuántas frases ha podido leer; después, que añada «durante 2 s» a cada una."]
    ],
    diff: {
      mes: "Afegir una segona escena: el personatge s'amaga, canvia el fons a un altre lloc que li agradi, torna a sortir (mostra't) i explica per què li agrada. O fer que dos personatges es presentin l'un a l'altre per torns.|Añadir una segunda escena: el personaje se esconde, cambia el fondo a otro sitio que le guste, vuelve a salir (muéstrate) y explica por qué le gusta. O hacer que dos personajes se presenten el uno al otro por turnos.",
      menys: "Fer la presentació mínima: entrar, tres frases i un canvi de fons, copiant l'estructura dels trossos de la Guida. Fer servir les frases que ofereix l'app i completar-les en veu alta.|Hacer la presentación mínima: entrar, tres frases y un cambio de fondo, copiando la estructura de los trozos de Guida. Usar las frases que ofrece la app y completarlas en voz alta."
    },
    aval: {
      ticket: ["Quins són els quatre passos d'un projecte?|¿Cuáles son los cuatro pasos de un proyecto?",
        "Digues una dada que es pot posar en una presentació i una que no.|Di un dato que se puede poner en una presentación y uno que no."],
      rubric: [
        ["Pla|Plan", "Omple el pla complet i el segueix en programar.|Rellena el plan completo y lo sigue al programar.", "Fa el pla però programa sense mirar-lo.|Hace el plan pero programa sin mirarlo."],
        ["Projecte programat|Proyecto programado", "La presentació té nom, gustos, lloc preferit (fons) i moviment, i es llegeix bé.|La presentación tiene nombre, gustos, sitio favorito (fondo) y movimiento, y se lee bien.", "Té algunes parts, però falta el fons o alguna frase no es llegeix.|Tiene algunas partes, pero falta el fondo o alguna frase no se lee."],
        ["Dades i comentaris|Datos y comentarios", "No posa dades privades i dona comentaris amables i útils.|No pone datos privados y da comentarios amables y útiles.", "Necessita que li recordin què és privat o dona comentaris poc concrets.|Necesita que le recuerden qué es privado o da comentarios poco concretos."],
        ["Provar i millorar|Probar y mejorar",
          "Prova el projecte tros a tros i fa almenys una millora a partir del que veu o li diuen.|Prueba el proyecto trozo a trozo y hace al menos una mejora a partir de lo que ve o le dicen.",
          "Prova el projecte al final, però no canvia res quan alguna cosa no es llegeix bé.|Prueba el proyecto al final, pero no cambia nada cuando algo no se lee bien."]
      ]
    },
    casa: "A casa, ensenyeu la presentació a la família des del mòbil (és a «Projectes»). Demaneu-los dues coses que els hagin agradat i una idea per millorar-la.|En casa, enseñad la presentación a la familia desde el móvil (está en «Proyectos»). Pedidles dos cosas que les hayan gustado y una idea para mejorarla.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: presenta't|Proyecto: preséntate", x: "L'estrena del Teatre de l'illa: un personatge que parla de tu.|El estreno del Teatro de la isla: un personaje que habla de ti.",
        nota: "Crea expectació: al final hi haurà una estrena amb aplaudiments.|Crea expectación: al final habrá un estreno con aplausos." },
      { id: 's2', k: 'concepte', t: "Els passos d'un projecte|Los pasos de un proyecto", punts: ["1. Pensar el pla|1. Pensar el plan", "2. Programar-lo a trossos|2. Programarlo a trozos", "3. Provar-lo|3. Probarlo", "4. Millorar-lo|4. Mejorarlo"], pic: 'img/ment/ser.webp',
        nota: "Deixa-ho escrit a la pissarra: hi tornareu al final.|Déjalo escrito en la pizarra: volveréis a ello al final." },
      { id: 's3', k: 'repas', t: "Què sabem fer?|¿Qué sabemos hacer?", blocks: [{ t: "mou-te|muévete", c: 'mov' }, { t: "gira / apunta|gira / apunta", c: 'mov' }, { t: "digues / pensa|di / piensa", c: 'art' }, { t: "canvia el fons|cambia el fondo", c: 'art' }, { t: "amaga't|escóndete", c: 'art' }],
        nota: "Que diguin per a què serveix cada bloc en una presentació.|Que digan para qué sirve cada bloque en una presentación." },
      { id: 's4', k: 'media', t: "La presentació de la Tuga|La presentación de Tuga", x: "Entra, diu el nom i què li agrada, canvia el fons i se'n va.|Entra, dice su nombre y qué le gusta, cambia el fondo y se va.",
        media: { k: 'stage', w: T([{ id: 'tuga', art: 'tuga', x: -170, y: -95 }], { bgs: ['escenari', 'platja'] }), prog: `@tuga flag{ move:170 say:"Hola! Em dic Tuga.|¡Hola! Me llamo Tuga.",2 say:"M'agrada nedar a poc a poc.|Me gusta nadar despacito.",2 bg:platja say:"El meu lloc preferit és la platja!|¡Mi sitio favorito es la playa!",2 point:-90 move:170 hide }`, time: 9 },
        nota: "Escriu a la pissarra els trossos que identifiquen: entrada, nom, gustos, lloc, comiat.|Escribe en la pizarra los trozos que identifican: entrada, nombre, gustos, sitio, despedida." },
      { id: 's5', k: 'anim', t: "Primer, el pla|Primero, el plan", anim: 'g1plan', x: "El meu nom, què m'agrada i el meu lloc preferit. Mai l'adreça ni el telèfon.|Mi nombre, lo que me gusta y mi sitio favorito. Nunca la dirección ni el teléfono.",
        nota: "Pregunta per què no posem dades privades en un projecte que veuran altres persones.|Pregunta por qué no ponemos datos privados en un proyecto que verán otras personas." },
      { id: 's6', k: 'media', t: "Prova-ho com si fossis el públic|Pruébalo como si fueras el público", x: "Es llegeixen totes les frases?|¿Se leen todas las frases?",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: 0, y: -95 }]), prog: '@guida flag{ say:"Hola!|¡Hola!" say:"Em dic Guida.|Me llamo Guida.",2 say:"M\'agrada córrer.|Me gusta correr.",2 }', time: 5 },
        nota: "El primer «Hola!» no té segons i no es veu. Pregunta com ho arreglarien.|El primer «¡Hola!» no tiene segundos y no se ve. Pregunta cómo lo arreglarían." },
      { id: 's7', k: 'activitat', t: "El meu pla|Mi plan", timer: 10, punts: ["Nom de pila i què t'agrada fer.|Nombre de pila y qué te gusta hacer.", "El teu lloc preferit: quin fons?|Tu sitio favorito: ¿qué fondo?", "Quin personatge i com entra i surt.|Qué personaje y cómo entra y sale.", "Revisa el pla del company/a: res de dades privades!|Revisa el plan del compañero/a: ¡nada de datos privados!"],
        nota: "Passeja i comprova que ningú escriu adreces, telèfons ni cognoms.|Pasea y comprueba que nadie escribe direcciones, teléfonos ni apellidos." },
      { id: 's8', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre «Projecte: presenta't».|Abre «Proyecto: preséntate».", "A «El meu pla», toca «Ho hem fet!».|En «Mi plan», toca «¡Lo hemos hecho!».", "Fes els tres trossos de la Guida i prova cada tros.|Haz los tres trozos de Guida y prueba cada trozo."],
        nota: "Remarca que cada repte continua el guió de l'anterior: així es construeix a trossos.|Remarca que cada reto continúa el guion del anterior: así se construye a trozos." },
      { id: 's9', k: 'media', t: "Tros a tros|Trozo a trozo", x: "La presentació de la Guida, acabada.|La presentación de Guida, terminada.",
        media: { k: 'stage', w: T([{ id: 'guida', art: 'guida', x: -180, y: -95 }], { bgs: ['escenari', 'bosc'] }), prog: `@guida flag{ move:180 say:"Hola! Em dic Guida.|¡Hola! Me llamo Guida.",2 say:"M'agrada córrer pel bosc.|Me gusta correr por el bosque.",2 bg:bosc point:-90 move:150 hide }`, time: 7 },
        nota: "Assenyala on acaba cada tros (entrada i nom · gustos i fons · comiat).|Señala dónde termina cada trozo (entrada y nombre · gustos y fondo · despedida)." },
      { id: 's10', k: 'repte', t: "Els tres trossos|Los tres trozos", timer: 10, punts: ["1. Entra i diu el nom|1. Entra y dice el nombre", "2. Què li agrada i el fons|2. Qué le gusta y el fondo", "3. Es gira, se'n va i s'amaga|3. Se gira, se va y se esconde"],
        nota: "Si algú s'encalla, que digui en veu alta quin tros li falta.|Si alguien se atasca, que diga en voz alta qué trozo le falta." },
      { id: 's11', k: 'activitat', t: "Crea: presenta't!|Crea: ¡preséntate!", timer: 15, punts: ["Tria el teu personatge a la llista.|Elige tu personaje en la lista.", "Segueix el pla, tros a tros.|Sigue el plan, trozo a trozo.", "Prova-ho després de cada tros.|Pruébalo después de cada trozo.", "Quan funcioni, desa-ho.|Cuando funcione, guárdalo."],
        nota: "Passeja i pregunta: en quin tros del pla ets? Què provaràs ara?|Pasea y pregunta: ¿en qué trozo del plan estás? ¿Qué probarás ahora?" },
      { id: 's12', k: 'concepte', t: "Els criteris del projecte|Los criterios del proyecto", punts: ["Diu el teu nom (només el de pila).|Dice tu nombre (solo el de pila).", "Diu què t'agrada fer.|Dice lo que te gusta hacer.", "Canvia el fons al teu lloc preferit.|Cambia el fondo a tu sitio favorito.", "Es mou o gira almenys una vegada.|Se mueve o gira al menos una vez."], pic: 'img/ment/lli.webp',
        nota: "Deixa-la projectada durant el «Crea» com a llista de comprovació.|Déjala proyectada durante el «Crea» como lista de comprobación." },
      { id: 's13', k: 'activitat', t: "L'estrena|El estreno", timer: 6, x: "Voluntaris a la pantalla gran. El públic aplaudeix al final!|Voluntarios en la pantalla grande. ¡El público aplaude al final!",
        nota: "Ningú no està obligat a sortir: també es pot passejar per les taules.|Nadie está obligado a salir: también se puede pasear por las mesas." },
      { id: 's14', k: 'activitat', t: "Dues estrelles i un desig|Dos estrellas y un deseo", punts: ["⭐ Una cosa que m'ha agradat…|⭐ Una cosa que me ha gustado…", "⭐ Una altra cosa que m'ha agradat…|⭐ Otra cosa que me ha gustado…", "💡 Una idea per millorar-ho…|💡 Una idea para mejorarlo…"],
        nota: "Modela un exemple de comentari amable i concret abans que escriguin.|Modela un ejemplo de comentario amable y concreto antes de que escriban." },
      { id: 's15', k: 'resum', t: "Què hem après en aquest projecte|Qué hemos aprendido en este proyecto", punts: ["Pla → programar → provar → millorar.|Plan → programar → probar → mejorar.", "Es construeix a trossos i es prova cada tros.|Se construye a trozos y se prueba cada trozo.", "Les dades privades no es comparteixen.|Los datos privados no se comparten."],
        nota: "Torna als quatre passos de la pissarra i marqueu-los com a fets.|Vuelve a los cuatro pasos de la pizarra y marcadlos como hechos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Els quatre passos d'un projecte.|Los cuatro pasos de un proyecto.", "Una dada que es pot dir i una que no.|Un dato que se puede decir y uno que no."],
        nota: "Anota qui ha acabat el projecte i qui l'haurà d'acabar a casa.|Anota quién ha terminado el proyecto y quién tendrá que terminarlo en casa." },
      { id: 's17', k: 'resum', t: "Unitat 1 acabada!|¡Unidad 1 terminada!", punts: ["Personatges i escenari|Personajes y escenario", "Moure, girar i parlar|Mover, girar y hablar", "Fons i escenes|Fondos y escenas", "Pròxima unitat: animació!|Próxima unidad: ¡animación!"],
        nota: "Felicita el grup i anuncia que a la unitat 2 els personatges es mouran sols, amb vestits i bucles.|Felicita al grupo y anuncia que en la unidad 2 los personajes se moverán solos, con disfraces y bucles." }
    ],
    print: [
      { id: 'p1', t: "El meu pla|Mi plan", k: 'fitxa',
        intro: "Omple el pla abans de programar. Recorda: només el nom de pila, res d'adreces, telèfons ni escola.|Rellena el plan antes de programar. Recuerda: solo el nombre de pila, nada de direcciones, teléfonos ni colegio.",
        items: [
          { q: "Com em dic? (només el nom de pila)|¿Cómo me llamo? (solo el nombre de pila)", sol: "Resposta oberta: el nom de pila.|Respuesta abierta: el nombre de pila." },
          { q: "Què m'agrada fer?|¿Qué me gusta hacer?", sol: "Resposta oberta: una afició o activitat.|Respuesta abierta: una afición o actividad." },
          { q: "El meu lloc preferit (bosc, platja, espai, ciutat, parc o nit):|Mi sitio favorito (bosque, playa, espacio, ciudad, parque o noche):", sol: "Un dels fons de l'app.|Uno de los fondos de la app." },
          { q: "Quin personatge triaré? Com entrarà i com se n'anirà?|¿Qué personaje elegiré? ¿Cómo entrará y cómo se irá?", big: true, sol: "Exemple: la Flama entra amb «mou-te 100», es gira amb «apunta en direcció -90» i s'amaga.|Ejemplo: Flama entra con «muévete 100», se gira con «apunta en dirección -90» y se esconde." },
          { q: "Revisió del company/a: hi ha alguna dada privada? Sí / No|Revisión del compañero/a: ¿hay algún dato privado? Sí / No", sol: "Ha de ser «No».|Tiene que ser «No»." }
        ] },
      { id: 'p2', t: "Dues estrelles i un desig|Dos estrellas y un deseo", k: 'targetes',
        intro: "Una targeta per alumne/a: escriu dues coses que t'han agradat de la presentació del company/a i una idea per millorar-la.|Una tarjeta por alumno/a: escribe dos cosas que te han gustado de la presentación del compañero/a y una idea para mejorarla.",
        items: [
          { t: "M'ha agradat… ⭐|Me ha gustado… ⭐", n: 6 },
          { t: "També m'ha agradat… ⭐|También me ha gustado… ⭐", n: 3 },
          { t: "Una idea per millorar… 💡|Una idea para mejorar… 💡", n: 3 }
        ] }
    ]
  }
  };
})());
