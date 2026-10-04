/* Tech Creadors · unitat 4 «Coordenades» · guia del professorat (sessions g4-1 … g4-4)
   Classe de 60 minuts: presentació projectada, una activitat sense pantalla amb el seu imprimible i l'app a l'ordinador. */
Object.assign(TGUIDE, (() => {
  // demos de l'escenari per a les diapositives (els mateixos mons que a l'app)
  const NUMI_M = { id: 'numi', art: 'numi', x: -175, y: 100, size: 50 }, FLAG = { id: 'bandera', art: 'bandera', x: 172, y: -112, size: 60 };
  const star = (id, x, y, n) => ({ id, art: 'estrella', x, y, size: 80, name: `Estrella ${n}|Estrella ${n}` });
  const D_X = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 80 }] }, prog: '@numi flag{ goto:-150,0 say:"x = -150|x = -150",1.4 goto:0,0 say:"x = 0|x = 0",1.4 goto:150,0 say:"x = 150|x = 150",1.4 }', time: 5 };
  const D_Y = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 80 }] }, prog: '@numi flag{ goto:0,110 say:"y = 110|y = 110",1.4 goto:0,0 say:"y = 0|y = 0",1.4 goto:0,-110 say:"y = -110|y = -110",1.4 }', time: 5 };
  const D_GOTO = { k: 'stage', w: { bg: 'espai', sprites: [{ id: 'numi', art: 'numi', x: 0, y: 0, size: 70 }, star('e1', 150, 100, 1), star('e2', -150, -90, 2)] }, prog: '@numi flag{ wait:0.6 goto:150,100 say:"x: 150, y: 100|x: 150, y: 100",1.6 goto:-150,-90 say:"x: -150, y: -90|x: -150, y: -90",1.6 goto:0,0 }', time: 5 };
  const D_ROUTE = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: -180, y: -120 }, star('e1', -60, 60, 1), star('e2', 80, -40, 2), { id: 'bandera', art: 'bandera', x: 180, y: 110, size: 70 }] }, prog: '@globus flag{ goto:-180,-120 wait:0.5 glide:2,-60,60 glide:1.5,80,-40 glide:2,180,110 }', time: 7 };
  const D_SETCH = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: -180, y: 70, name: 'Globus: posa x|Globo: pon x' }, { id: 'ocell', art: 'ocell', x: -180, y: -80, name: 'Ocell: canvia x|Pájaro: cambia x' }] }, prog: '@globus flag{ rep:6{ setx:-120 wait:0.5 } } @ocell flag{ rep:6{ chx:60 wait:0.5 } }', time: 5 };
  const D_KEYS = { k: 'stage', w: { bg: 'cel', sprites: [{ id: 'globus', art: 'globus', x: 0, y: 0 }], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1.2 }, { t: 2, key: 'up', dur: 1 }, { t: 3.3, key: 'left', dur: 2 }, { t: 5.6, key: 'down', dur: 1.2 }] }, prog: '@globus key:right{ chx:10 } key:left{ chx:-10 } key:up{ chy:10 } key:down{ chy:-10 }', time: 7.5 };
  const D_ARROW = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'fletxa', art: 'fletxa', x: 0, y: 0 }] }, prog: '@fletxa flag{ goto:0,0 point:90 wait:0.6 move:90 wait:0.6 point:0 wait:0.6 move:90 wait:0.6 point:-90 wait:0.6 move:180 wait:0.6 point:180 wait:0.6 move:90 wait:0.6 point:90 wait:0.6 move:90 }', time: 7 };
  const D_BALL = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'pilota', art: 'pilota', x: 0, y: 0 }] }, prog: '@pilota flag{ point:45 forever{ move:6 bounce } }', time: 8 };
  const D_CHASE = { k: 'stage', w: { bg: 'platja', sprites: [{ id: 'cranc', art: 'cranc', x: -170, y: -120 }, { id: 'peix', art: 'peix', x: 150, y: 90, dir: -60 }] }, prog: '@cranc flag{ forever{ pointto:peix move:3 } } @peix flag{ forever{ move:2 bounce } }', time: 8 };
  const D_PLAN = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M, FLAG] }, prog: '@numi flag{ goto:-175,100 wait:0.6 glide:1,-175,-100 glide:1,-60,-100 glide:1,-60,100 glide:1,25,100 glide:1,25,-100 glide:1,170,-100 say:"Sortida!|¡Salida!",1.5 }', time: 9 };
  const D_WALL = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1 }, { t: 2, key: 'down', dur: 2.2 }, { t: 4.6, key: 'right', dur: 1.6 }] }, prog: '@numi flag{ goto:-175,100 forever{ waitu:color:blue goto:-175,100 } } key:right{ chx:10 } key:down{ chy:-10 }', time: 7 };
  const D_NOLOOP = { k: 'stage', w: { bg: 'laberint', sprites: [NUMI_M], keys: ['left', 'right', 'up', 'down'], input: [{ t: .5, key: 'right', dur: 1 }, { t: 2.3, key: 'right', dur: 2.4 }] }, prog: '@numi flag{ goto:-175,100 waitu:color:blue goto:-175,100 } key:right{ chx:10 }', time: 6 };
  return {
    /* ---------- Sessió 1 · x i y: l'escenari és un mapa ---------- */
    'g4-1': {
      obj: [
        "L'alumne/a situa punts a l'escenari amb la x i la y i sap que el (0, 0) és al centre.|El alumno/a sitúa puntos en el escenario con la x y la y y sabe que el (0, 0) está en el centro.",
        "L'alumne/a distingeix la x (esquerra-dreta) de la y (avall-amunt) i interpreta els nombres negatius.|El alumno/a distingue la x (izquierda-derecha) de la y (abajo-arriba) e interpreta los números negativos.",
        "L'alumne/a fa servir «ves a x: y:», «posa x a» i «posa y a» per portar un personatge a un punt concret.|El alumno/a usa «ve a x: y:», «pon x a» y «pon y a» para llevar a un personaje a un punto concreto.",
        "L'alumne/a programa un recorregut per diversos punts en ordre, amb esperes, i corregeix coordenades mal escrites.|El alumno/a programa un recorrido por varios puntos en orden, con esperas, y corrige coordenadas mal escritas."
      ],
      comp: [
        "Competència digital (CD5): crear continguts digitals programant amb blocs|Competencia digital (CD5): crear contenidos digitales programando con bloques",
        "Matemàtiques (sentit espacial i numèric): sistema de coordenades i nombres negatius|Matemáticas (sentido espacial y numérico): sistema de coordenadas y números negativos",
        "Pensament computacional: seqüència d'instruccions i depuració|Pensamiento computacional: secuencia de instrucciones y depuración",
        "Comunicació oral: donar i interpretar indicacions de posició precises|Comunicación oral: dar e interpretar indicaciones de posición precisas"
      ],
      vocab: [
        ["Coordenades|Coordenadas", "Els dos números que diuen on és un punt: primer la x i després la y.|Los dos números que dicen dónde está un punto: primero la x y después la y."],
        ["x|x", "El número que diu si un punt és a l'esquerra (negatiu) o a la dreta (positiu).|El número que dice si un punto está a la izquierda (negativo) o a la derecha (positivo)."],
        ["y|y", "El número que diu si un punt és avall (negatiu) o amunt (positiu).|El número que dice si un punto está abajo (negativo) o arriba (positivo)."],
        ["El centre (0, 0)|El centro (0, 0)", "El punt del mig de l'escenari, d'on comencem a comptar.|El punto del medio del escenario, desde donde empezamos a contar."],
        ["Nombre negatiu|Número negativo", "Un número més petit que zero, amb el signe menys davant: -100.|Un número más pequeño que cero, con el signo menos delante: -100."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «x i y: l'escenari és un mapa»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «x e y: el escenario es un mapa»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Una còpia de «El cel amagat» per alumne/a i un llapis de color|Una copia de «El cielo escondido» por alumno/a y un lápiz de color",
          "Opcional: cinta de pintor per marcar a terra una creu gran (els dos eixos) per a la demostració|Opcional: cinta de pintor para marcar en el suelo una cruz grande (los dos ejes) para la demostración"
        ],
        imprimir: ["El cel amagat (graella de coordenades)|El cielo escondido (cuadrícula de coordenadas)", "Fitxa: on és cada estrella?|Ficha: ¿dónde está cada estrella?"],
        prep: [
          "Imprimir «El cel amagat» (una per alumne/a) i, per als que acabin aviat, la fitxa «On és cada estrella?».|Imprimir «El cielo escondido» (una por alumno/a) y, para los que terminen pronto, la ficha «¿Dónde está cada estrella?».",
          "Si hi ha espai, marcar a terra una creu de cinta: una ratlla de 3 m (x) i una de 2 m (y), amb el (0, 0) al mig.|Si hay espacio, marcar en el suelo una cruz de cinta: una raya de 3 m (x) y una de 2 m (y), con el (0, 0) en el medio.",
          "Mirar abans les demostracions de les diapositives 5, 6 i 12 per saber on va en Numi.|Mirar antes las demostraciones de las diapositivas 5, 6 y 12 para saber adónde va Numi.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión de cada alumno/a iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la Nit de les Estrelles|Bienvenida: la Noche de las Estrellas", fase: 'inici',
          fa: "Presenta la missió: en Numi ha d'anar just on és cada estrella del cel. Pregunta com diríeu a algú on és una cosa sense assenyalar-la i recull respostes («a dalt a la dreta», «al costat de…»). Fes veure que són indicacions poc exactes: avui aprendrem a dir-ho amb dos números.|Presenta la misión: Numi tiene que ir justo donde está cada estrella del cielo. Pregunta cómo diríais a alguien dónde está una cosa sin señalarla y recoge respuestas («arriba a la derecha», «al lado de…»). Haz ver que son indicaciones poco exactas: hoy aprenderemos a decirlo con dos números.",
          diu: ["Com li diríeu a un amic on és la vostra cadira, sense assenyalar?|¿Cómo le diríais a un amigo dónde está vuestra silla, sin señalar?",
            "«A dalt a la dreta» és una pista, però no és exacte. Un ordinador necessita números.|«Arriba a la derecha» es una pista, pero no es exacto. Un ordenador necesita números.",
            "Al cinema, «fila 5, seient 8» és un sol lloc. Avui farem el mateix amb l'escenari.|En el cine, «fila 5, asiento 8» es un solo sitio. Hoy haremos lo mismo con el escenario."],
          slides: ['s1', 's2', 's3'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "L'escenari és un mapa|El escenario es un mapa", fase: 'teoria',
          fa: "Explica l'escenari com un mapa amb el (0, 0) al centre. Amb les demostracions, fes que comprovin com canvia la x quan en Numi va a la dreta o a l'esquerra, i la y quan puja o baixa. Si tens la creu a terra, un voluntari/a es posa al (0, 0) i fa passos: la classe diu si la x o la y creix o es fa negativa. Acaba amb la pregunta dels punts A, B i C i el «compte!» de l'ordre.|Explica el escenario como un mapa con el (0, 0) en el centro. Con las demostraciones, haz que comprueben cómo cambia la x cuando Numi va a la derecha o a la izquierda, y la y cuando sube o baja. Si tienes la cruz en el suelo, un voluntario/a se pone en el (0, 0) y da pasos: la clase dice si la x o la y crece o se hace negativa. Termina con la pregunta de los puntos A, B y C y el «¡cuidado!» del orden.",
          diu: ["On és el (0, 0)? Exacte: al centre, no a la cantonada.|¿Dónde está el (0, 0)? Exacto: en el centro, no en la esquina.",
            "Si vaig cap a l'esquerra, la x es fa negativa, com la temperatura sota zero.|Si voy hacia la izquierda, la x se hace negativa, como la temperatura bajo cero.",
            "Primer el passadís (la x) i després l'ascensor (la y).|Primero el pasillo (la x) y después el ascensor (la y).",
            "On anirà en Numi amb x: -150, y: 100? Assenyaleu-ho abans de veure-ho.|¿Adónde irá Numi con x: -150, y: 100? Señaladlo antes de verlo."],
          slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "El cel amagat|El cielo escondido", fase: 'desconnectat',
          fa: "Per parelles, cada alumne/a té la seva graella. Primer repassen els eixos i numeren les ratlles (de -4 a 4 la x i de -3 a 3 la y). Després cadascú amaga 3 estrelles en creus de ratlles, sense ensenyar-les. Per torns, diuen unes coordenades; el company/a respon «estrella!» o dona una pista («més a la dreta», «més avall»). Qui troba les 3 estrelles de l'altre/a primer, explica com ho ha pensat.|Por parejas, cada alumno/a tiene su cuadrícula. Primero repasan los ejes y numeran las rayas (de -4 a 4 la x y de -3 a 3 la y). Después cada uno esconde 3 estrellas en cruces de rayas, sin enseñarlas. Por turnos, dicen unas coordenadas; el compañero/a responde «¡estrella!» o da una pista («más a la derecha», «más abajo»). Quien encuentra las 3 estrellas del otro/a primero, explica cómo lo ha pensado.",
          diu: ["Digueu sempre primer la x i després la y. Si no, el company/a buscarà en un altre lloc!|Decid siempre primero la x y después la y. Si no, ¡el compañero/a buscará en otro sitio!",
            "Les estrelles van on es creuen dues ratlles, no dins els quadrets.|Las estrellas van donde se cruzan dos rayas, no dentro de los cuadritos.",
            "Una pista bona diu la direcció: més amunt, més a l'esquerra…|Una buena pista dice la dirección: más arriba, más a la izquierda…"],
          slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Passeja per l'aula i, a les preguntes de triar, demana que diguin en veu alta si la x i la y són positives o negatives abans de respondre. A «El tresor amagat» (activitat de casa), que toquin «Ho hem fet!», perquè ja l'hem fet a classe amb la graella.|Cada alumno/a avanza a su ritmo hasta la pausa activa. Pasea por el aula y, en las preguntas de elegir, pide que digan en voz alta si la x y la y son positivas o negativas antes de responder. En «El tesoro escondido» (actividad de casa), que toquen «¡Lo hemos hecho!», porque ya lo hemos hecho en clase con la cuadrícula.",
          diu: ["Abans de triar: la x és positiva o negativa? I la y?|Antes de elegir: ¿la x es positiva o negativa? ¿Y la y?",
            "A la demostració on en Numi diu on és, endevineu-ho abans que ho digui.|En la demostración donde Numi dice dónde está, adivinadlo antes de que lo diga.",
            "«Posa y a» canvia només la y. Què passa amb la x?|«Pon y a» cambia solo la y. ¿Qué pasa con la x?"],
          slides: ['s11'], app: "De «Recorda» fins a la «Pausa activa»: la pregunta de les fletxes, les dues històries, les targetes de «Descobreix», el (0, 0), els punts A-B-C, «El tresor amagat» (ja fet), en Numi que diu on és, el bloc que el porta a la dreta i la pregunta de «posa y a».|De «Recuerda» hasta la «Pausa activa»: la pregunta de las flechas, las dos historias, las tarjetas de «Descubre», el (0, 0), los puntos A-B-C, «El tesoro escondido» (ya hecho), Numi que dice dónde está, el bloque que lo lleva a la derecha y la pregunta de «pon y a».", org: "Individual|Individual" },
        { min: 10, t: "Reptes: anar a les estrelles|Retos: ir a las estrellas", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després mostra la demostració de «ves a» i resol amb la classe el primer repte en veu alta. Deixa'ls fer els altres quatre. Al de la constel·lació, si en Numi no passa per les estrelles, pregunta què li falta entre salt i salt (les esperes).|Haced la pausa activa todos juntos. Después muestra la demostración de «ve a» y resuelve con la clase el primer reto en voz alta. Deja que hagan los otros cuatro. En el de la constelación, si Numi no pasa por las estrellas, pregunta qué le falta entre salto y salto (las esperas).",
          diu: ["L'estrella és a dalt a la dreta: la x serà positiva o negativa?|La estrella está arriba a la derecha: ¿la x será positiva o negativa?",
            "En Numi salta tan de pressa que no el veiem. Com el fem esperar a cada estrella?|Numi salta tan rápido que no lo vemos. ¿Cómo lo hacemos esperar en cada estrella?",
            "Al repte de l'error, llegiu els dos números en veu alta: quin és la x?|En el reto del error, leed los dos números en voz alta: ¿cuál es la x?"],
          slides: ['s12', 's13'], app: "«Pausa activa» i els quatre reptes: l'estrella, posa x i posa y, la constel·lació del Gat i l'error de l'ordre.|«Pausa activa» y los cuatro retos: la estrella, pon x y pon y, la constelación del Gato y el error del orden.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: el meu cel d'estrelles|Crea: mi cielo de estrellas", fase: 'crea',
          fa: "Cada alumne/a programa el viatge d'en Numi per les 4 estrelles, en l'ordre que vulgui. Abans de posar blocs, que escriguin (o diguin) les coordenades de cada estrella. Qui acabi, que ensenyi el programa al company/a i li faci endevinar on anirà en Numi primer.|Cada alumno/a programa el viaje de Numi por las 4 estrellas, en el orden que quiera. Antes de poner bloques, que escriban (o digan) las coordenadas de cada estrella. Quien termine, que enseñe el programa al compañero/a y le haga adivinar adónde irá Numi primero.",
          diu: ["Primer les coordenades, després els blocs.|Primero las coordenadas, después los bloques.",
            "No hi ha un sol ordre bo: el teu viatge pot ser diferent del del company/a.|No hay un solo orden bueno: tu viaje puede ser diferente del del compañero/a."],
          slides: ['s14'], app: "Pas «Crea»: El meu cel d'estrelles.|Paso «Crea»: Mi cielo de estrellas.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una de les preguntes del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una de las preguntas del ticket.",
          diu: ["Qui em diu on és el (0, 0)?|¿Quién me dice dónde está el (0, 0)?",
            "Si una estrella és a baix a l'esquerra, com són la x i la y?|Si una estrella está abajo a la izquierda, ¿cómo son la x y la y?"],
          slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Escriu els números a l'inrevés: posa la y primer i la x després.|Escribe los números al revés: pone la y primero y la x después.",
          "Recorda-li la frase «primer el passadís, després l'ascensor». Que llegeixi el bloc en veu alta: «x… y…» i assenyali amb el dit cap on va cada número.|Recuérdale la frase «primero el pasillo, después el ascensor». Que lea el bloque en voz alta: «x… y…» y señale con el dedo hacia dónde va cada número."],
        ["Creu que el (0, 0) és a la cantonada, com quan dibuixa en un full.|Cree que el (0, 0) está en la esquina, como cuando dibuja en una hoja.",
          "Que provi «ves a x: 0 y: 0» i miri on va en Numi. Després, que compti a partir del centre.|Que pruebe «ve a x: 0 y: 0» y mire adónde va Numi. Después, que cuente a partir del centro."],
        ["Pensa que -100 és més a la dreta que 50 perquè «100 és més gran».|Piensa que -100 está más a la derecha que 50 porque «100 es más grande».",
          "Fes servir el termòmetre o la recta numèrica: el signe menys vol dir «a l'altre costat del zero». Que ho comprovi amb la demostració de la x.|Usa el termómetro o la recta numérica: el signo menos quiere decir «al otro lado del cero». Que lo compruebe con la demostración de la x."],
        ["Posa diversos «ves a» seguits i diu que en Numi no passa per les estrelles.|Pone varios «ve a» seguidos y dice que Numi no pasa por las estrellas.",
          "Pregunta: quant temps es queda en Numi a cada estrella? Que afegeixi un «espera 1 segon» entre salt i salt i ho torni a provar.|Pregunta: ¿cuánto tiempo se queda Numi en cada estrella? Que añada un «espera 1 segundo» entre salto y salto y lo vuelva a probar."],
        ["Prova números a l'atzar fins que encerta.|Prueba números al azar hasta que acierta.",
          "Que estimi abans: l'estrella és a la dreta o a l'esquerra? Llavors la x serà positiva o negativa? I aproximadament, a mig camí de la vora?|Que estime antes: ¿la estrella está a la derecha o a la izquierda? Entonces ¿la x será positiva o negativa? ¿Y aproximadamente, a medio camino del borde?"]
      ],
      diff: {
        mes: "Fer la fitxa «On és cada estrella?» i, a l'app, repetir el projecte fent que en Numi digui les coordenades de cada estrella quan hi arriba. Després, inventar una constel·lació i dictar-ne les coordenades al company/a perquè la dibuixi.|Hacer la ficha «¿Dónde está cada estrella?» y, en la app, repetir el proyecto haciendo que Numi diga las coordenadas de cada estrella cuando llega. Después, inventar una constelación y dictar sus coordenadas al compañero/a para que la dibuje.",
        menys: "Tenir a la taula la graella del cel amagat amb els eixos marcats en colors (x vermella, y verda) i, abans de cada repte, posar-hi el dit: «a la dreta 3, amunt 2». Començar pels reptes on les coordenades ja surten a l'enunciat.|Tener en la mesa la cuadrícula del cielo escondido con los ejes marcados en colores (x roja, y verde) y, antes de cada reto, poner el dedo: «a la derecha 3, arriba 2». Empezar por los retos donde las coordenadas ya salen en el enunciado."
      },
      aval: {
        ticket: ["On és el punt (0, 0) de l'escenari?|¿Dónde está el punto (0, 0) del escenario?",
          "Si en Numi és a baix a l'esquerra, la x i la y són positives o negatives?|Si Numi está abajo a la izquierda, ¿la x y la y son positivas o negativas?"],
        rubric: [
          ["Situar punts|Situar puntos", "Diu on és un punt a partir de la x i la y, també amb nombres negatius.|Dice dónde está un punto a partir de la x y la y, también con números negativos.", "Situa bé els punts positius, però dubta amb els negatius.|Sitúa bien los puntos positivos, pero duda con los negativos."],
          ["L'ordre x, y|El orden x, y", "Escriu sempre primer la x i després la y, i detecta l'error quan estan girades.|Escribe siempre primero la x y después la y, y detecta el error cuando están giradas.", "De vegades gira els dos números.|A veces gira los dos números."],
          ["Programar un recorregut|Programar un recorrido", "Visita diversos punts en ordre amb «ves a» i esperes, pensant les coordenades abans.|Visita varios puntos en orden con «ve a» y esperas, pensando las coordenadas antes.", "Arriba a un punt, però per fer un recorregut prova números a l'atzar.|Llega a un punto, pero para hacer un recorrido prueba números al azar."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer junts «El tresor amagat»: dibuixeu una creu en un full, amagueu un tresor en un punt i busqueu-lo dient coordenades.|En casa, con el móvil, podéis repetir la sesión y hacer juntos «El tesoro escondido»: dibujad una cruz en una hoja, esconded un tesoro en un punto y buscadlo diciendo coordenadas.",
      slides: [
        { id: 's1', k: 'portada', t: "x i y: l'escenari és un mapa|x e y: el escenario es un mapa", x: "Avui aprendrem a dir exactament on és cada cosa amb dos números.|Hoy aprenderemos a decir exactamente dónde está cada cosa con dos números.",
          nota: "Presenta l'objectiu: al final de la classe, tothom portarà en Numi a qualsevol estrella del cel.|Presenta el objetivo: al final de la clase, todos llevarán a Numi a cualquier estrella del cielo." },
        { id: 's2', k: 'pregunta', t: 'On és la teva cadira?|¿Dónde está tu silla?', x: "Explica-li a un amic on seus, sense assenyalar.|Explícale a un amigo dónde te sientas, sin señalar.",
          nota: "Recull respostes i fes notar les que són poc exactes («per allà»). Torna-hi quan expliquis les coordenades.|Recoge respuestas y haz notar las que son poco exactas («por allí»). Vuelve a ello cuando expliques las coordenadas." },
        { id: 's3', k: 'concepte', t: 'La Nit de les Estrelles|La Noche de las Estrellas', punts: ["En Bit ha fet un mapa del cel.|Bit ha hecho un mapa del cielo.", "En Numi ha d'anar just on és cada estrella.|Numi tiene que ir justo donde está cada estrella.", "Per dir on és cada lloc farem servir dos números: la x i la y.|Para decir dónde está cada sitio usaremos dos números: la x y la y."],
          nota: "Explica que l'ordinador no entén «una mica més amunt»: necessita números exactes.|Explica que el ordenador no entiende «un poco más arriba»: necesita números exactos." },
        { id: 's4', k: 'anim', t: "L'escenari és un mapa|El escenario es un mapa", anim: 'g4grid', x: "480 punts d'ample, 360 d'alt i el (0, 0) al centre.|480 puntos de ancho, 360 de alto y el (0, 0) en el centro.",
          nota: "Fes notar les dues ratlles: la vermella és la de la x i la verda, la de la y. La línia discontínua mostra com es llegeixen els dos números.|Haz notar las dos rayas: la roja es la de la x y la verde, la de la y. La línea discontinua muestra cómo se leen los dos números." },
        { id: 's5', k: 'media', t: "La x: esquerra o dreta|La x: izquierda o derecha", x: "Mireu què diu en Numi a cada lloc.|Mirad qué dice Numi en cada sitio.", media: D_X,
          nota: "Abans de cada salt, pregunta: ara la x serà positiva, negativa o zero?|Antes de cada salto, pregunta: ¿ahora la x será positiva, negativa o cero?" },
        { id: 's6', k: 'media', t: 'La y: amunt o avall|La y: arriba o abajo', x: "Amunt, positiva. Avall, negativa.|Arriba, positiva. Abajo, negativa.", media: D_Y,
          nota: "Compara-ho amb un termòmetre: per sota del zero, els números porten el signe menys.|Compáralo con un termómetro: por debajo del cero, los números llevan el signo menos." },
        { id: 's7', k: 'anim', t: 'On anirà en Numi?|¿Adónde irá Numi?', anim: 'g4pts', x: "Amb «ves a x: -150 y: 100», a quin punt anirà: A, B o C?|Con «ve a x: -150 y: 100», ¿a qué punto irá: A, B o C?",
          nota: "Que tothom assenyali abans de respondre. Resposta: B (x negativa, a l'esquerra; y positiva, amunt).|Que todos señalen antes de responder. Respuesta: B (x negativa, a la izquierda; y positiva, arriba)." },
        { id: 's8', k: 'anim', t: 'Compte! Primer la x|¡Cuidado! Primero la x', anim: 'g4xy', x: "(100, 50) i (50, 100) són llocs diferents.|(100, 50) y (50, 100) son sitios diferentes.",
          nota: "Fes servir la frase «primer el passadís (x), després l'ascensor (y)». Escriu tots dos punts a la pissarra i que dos voluntaris els marquin.|Usa la frase «primero el pasillo (x), después el ascensor (y)». Escribe los dos puntos en la pizarra y que dos voluntarios los marquen." },
        { id: 's9', k: 'activitat', t: 'El cel amagat|El cielo escondido', timer: 12, punts: ["Repasseu els eixos i numereu les ratlles.|Repasad los ejes y numerad las rayas.", "Amagueu 3 estrelles en creus de ratlles, sense ensenyar-les.|Esconded 3 estrellas en cruces de rayas, sin enseñarlas.", "Per torns, digueu unes coordenades: (x, y).|Por turnos, decid unas coordenadas: (x, y).", "El company/a respon «estrella!» o dona una pista.|El compañero/a responde «¡estrella!» o da una pista."],
          nota: "Passeja per les taules i comprova que diuen primer la x. Si una parella acaba aviat, que amaguin 5 estrelles.|Pasea por las mesas y comprueba que dicen primero la x. Si una pareja termina pronto, que escondan 5 estrellas." },
        { id: 's10', k: 'activitat', t: 'Les pistes que valen|Las pistas que valen', punts: ["«Més a la dreta» o «més a l'esquerra»: canvia la x.|«Más a la derecha» o «más a la izquierda»: cambia la x.", "«Més amunt» o «més avall»: canvia la y.|«Más arriba» o «más abajo»: cambia la y.", "Les estrelles van on es creuen dues ratlles.|Las estrellas van donde se cruzan dos rayas."],
          nota: "Deixa aquesta diapositiva projectada durant l'activitat perquè la consultin.|Deja esta diapositiva proyectada durante la actividad para que la consulten." },
        { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «x i y: l'escenari és un mapa».|Abre la sesión «x e y: el escenario es un mapa».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «El tresor amagat», toca «Ho hem fet!».|En «El tesoro escondido», toca «¡Lo hemos hecho!».", "Para quan arribis a la «Pausa activa».|Para cuando llegues a la «Pausa activa»."],
          nota: "A les preguntes, demana que justifiquin la resposta amb «la x és… i la y és…».|En las preguntas, pide que justifiquen la respuesta con «la x es… y la y es…»." },
        { id: 's12', k: 'media', t: '«Ves a x: … y: …»|«Ve a x: … y: …»', x: "Un sol bloc i en Numi salta al punt exacte.|Un solo bloque y Numi salta al punto exacto.", media: D_GOTO,
          nota: "Abans de cada salt, que la classe digui en veu alta les coordenades de l'estrella. Fes notar que el salt és instantani.|Antes de cada salto, que la clase diga en voz alta las coordenadas de la estrella. Haz notar que el salto es instantáneo." },
        { id: 's13', k: 'repte', t: 'Reptes: a les estrelles!|Retos: ¡a las estrellas!', timer: 10, punts: ["1. L'estrella de dalt a la dreta|1. La estrella de arriba a la derecha", "2. Posa x i posa y|2. Pon x y pon y", "3. La constel·lació del Gat (amb esperes)|3. La constelación del Gato (con esperas)", "4. L'error de l'ordre|4. El error del orden"],
          nota: "Si algú s'encalla, pregunta: l'estrella és a la dreta o a l'esquerra del centre? Amunt o avall?|Si alguien se atasca, pregunta: ¿la estrella está a la derecha o a la izquierda del centro? ¿Arriba o abajo?" },
        { id: 's14', k: 'activitat', t: "Crea: el meu cel d'estrelles|Crea: mi cielo de estrellas", timer: 5, x: "En Numi visita les 4 estrelles en l'ordre que triïs i diu alguna cosa en acabar.|Numi visita las 4 estrellas en el orden que elijas y dice algo al terminar.",
          nota: "Celebra que hi hagi viatges diferents. Si queda temps, que un alumne/a dicti el seu ordre i la classe digui les coordenades.|Celebra que haya viajes diferentes. Si queda tiempo, que un alumno/a dicte su orden y la clase diga las coordenadas." },
        { id: 's15', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["L'escenari és un mapa amb el (0, 0) al centre.|El escenario es un mapa con el (0, 0) en el centro.", "La x diu esquerra o dreta; la y, avall o amunt.|La x dice izquierda o derecha; la y, abajo o arriba.", "«Ves a x: y:» porta el personatge d'un salt a un punt.|«Ve a x: y:» lleva al personaje de un salto a un punto."],
          nota: "Torna a la pregunta del principi: ara sabeu dir on és la cadira amb dos números?|Vuelve a la pregunta del principio: ¿ahora sabéis decir dónde está la silla con dos números?" },
        { id: 's16', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["On és el punt (0, 0)?|¿Dónde está el punto (0, 0)?", "A baix a l'esquerra, la x i la y són positives o negatives?|Abajo a la izquierda, ¿la x y la y son positivas o negativas?"],
          nota: "Anota qui encara confon el signe dels números: la sessió vinent hi tornarem amb «canvia x en -10».|Anota quién todavía confunde el signo de los números: la próxima sesión volveremos con «cambia x en -10»." }
      ],
      print: [
        { id: 'p1', t: 'El cel amagat|El cielo escondido', k: 'graella', w: 8, h: 6,
          intro: "Per parelles. 1) Repassa amb vermell la ratlla del mig de través (és la x) i amb verd la del mig de dalt a baix (és la y). 2) Numera les ratlles: la x de -4 a 4 i la y de -3 a 3; on es creuen, el (0, 0). 3) Dibuixa 3 estrelles on es creuen dues ratlles, sense que el company/a ho vegi. 4) Per torns, dieu unes coordenades: el company/a respon «estrella!» o dona una pista.|Por parejas. 1) Repasa con rojo la raya del medio horizontal (es la x) y con verde la del medio vertical (es la y). 2) Numera las rayas: la x de -4 a 4 y la y de -3 a 3; donde se cruzan, el (0, 0). 3) Dibuja 3 estrellas donde se cruzan dos rayas, sin que el compañero/a lo vea. 4) Por turnos, decid unas coordenadas: el compañero/a responde «¡estrella!» o da una pista.",
          legend: [['⭐', 'Estrella amagada|Estrella escondida'], ['✖', 'Coordenada provada sense estrella|Coordenada probada sin estrella'], ['➡', "x: cap a la dreta, positiva|x: hacia la derecha, positiva"], ['⬆', 'y: cap amunt, positiva|y: hacia arriba, positiva']],
          items: [{ q: 'Les meves estrelles són a: (___, ___) · (___, ___) · (___, ___)|Mis estrellas están en: (___, ___) · (___, ___) · (___, ___)' },
            { q: "He trobat les estrelles del company/a a: (___, ___) · (___, ___) · (___, ___)|He encontrado las estrellas del compañero/a en: (___, ___) · (___, ___) · (___, ___)" }] },
        { id: 'p2', t: 'On és cada estrella?|¿Dónde está cada estrella?', k: 'fitxa',
          intro: "Recorda: l'escenari fa de -240 a 240 de través (x) i de -180 a 180 de dalt a baix (y). El (0, 0) és al centre.|Recuerda: el escenario va de -240 a 240 de lado (x) y de -180 a 180 de arriba abajo (y). El (0, 0) está en el centro.",
          items: [
            { q: "On és el punt (0, 0) de l'escenari?|¿Dónde está el punto (0, 0) del escenario?", sol: "Al centre de l'escenari.|En el centro del escenario." },
            { q: "En Numi és a x: -150, y: 100. És a la dreta o a l'esquerra? A dalt o a baix?|Numi está en x: -150, y: 100. ¿Está a la derecha o a la izquierda? ¿Arriba o abajo?", sol: "A l'esquerra (x negativa) i a dalt (y positiva).|A la izquierda (x negativa) y arriba (y positiva)." },
            { q: "Quin bloc porta en Numi a baix a la dreta: «ves a x: 200 y: -150» o «ves a x: -200 y: 150»?|¿Qué bloque lleva a Numi abajo a la derecha: «ve a x: 200 y: -150» o «ve a x: -200 y: 150»?", sol: "«Ves a x: 200 y: -150»: x positiva (dreta) i y negativa (baix).|«Ve a x: 200 y: -150»: x positiva (derecha) e y negativa (abajo)." },
            { q: "En Numi és a (100, 50) i fa «posa x a -100». On és ara?|Numi está en (100, 50) y hace «pon x a -100». ¿Dónde está ahora?", sol: "A (-100, 50): només ha canviat la x.|En (-100, 50): solo ha cambiado la x." },
            { q: "Escriu les coordenades de tres llocs: el centre, un punt a dalt a l'esquerra i un punt a baix a la dreta.|Escribe las coordenadas de tres sitios: el centro, un punto arriba a la izquierda y un punto abajo a la derecha.", sol: "(0, 0); per exemple (-150, 100); per exemple (150, -100). Val qualsevol punt amb els signes bons.|(0, 0); por ejemplo (-150, 100); por ejemplo (150, -100). Vale cualquier punto con los signos correctos." }
          ] }
      ]
    },
    /* ---------- Sessió 2 · Lliscar i canviar x i y ---------- */
    'g4-2': {
      obj: [
        "L'alumne/a distingeix «ves a» (un salt) de «llisca» (un moviment suau que dura uns segons).|El alumno/a distingue «ve a» (un salto) de «desliza» (un movimiento suave que dura unos segundos).",
        "L'alumne/a programa un recorregut de diversos trams amb «llisca».|El alumno/a programa un recorrido de varios tramos con «desliza».",
        "L'alumne/a fa servir «canvia x / y» amb números positius i negatius i calcula on acabarà el personatge.|El alumno/a usa «cambia x / y» con números positivos y negativos y calcula dónde terminará el personaje.",
        "L'alumne/a controla un personatge amb les quatre fletxes i explica la diferència entre «posa x» i «canvia x».|El alumno/a controla un personaje con las cuatro flechas y explica la diferencia entre «pon x» y «cambia x»."
      ],
      comp: [
        "Competència digital (CD5): crear animacions i programes interactius amb blocs|Competencia digital (CD5): crear animaciones y programas interactivos con bloques",
        "Matemàtiques: suma i resta amb nombres negatius i multiplicació com a suma repetida|Matemáticas: suma y resta con números negativos y multiplicación como suma repetida",
        "Pensament computacional: posició fixa i moviment relatiu, esdeveniments i bucles|Pensamiento computacional: posición fija y movimiento relativo, eventos y bucles",
        "Treball en equip: predir, comprovar i explicar els moviments en grup|Trabajo en equipo: predecir, comprobar y explicar los movimientos en grupo"
      ],
      vocab: [
        ["Lliscar|Deslizar", "Anar d'un punt a un altre a poc a poc, en un temps que tries.|Ir de un punto a otro poco a poco, en un tiempo que eliges."],
        ["Tram|Tramo", "Cada tros recte d'un camí, entre dos punts.|Cada trozo recto de un camino, entre dos puntos."],
        ["Canviar x / y|Cambiar x / y", "Sumar (o restar, si és negatiu) a la x o a la y que ja té el personatge.|Sumar (o restar, si es negativo) a la x o a la y que ya tiene el personaje."],
        ["Posar x / y|Poner x / y", "Portar el personatge a una x o una y concreta, sigui on sigui.|Llevar al personaje a una x o una y concreta, esté donde esté."],
        ["Esdeveniment|Evento", "Una cosa que passa (prémer una fletxa) i que fa començar un guió.|Algo que pasa (pulsar una flecha) y que hace empezar un guion."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Lliscar i canviar x i y»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Deslizar y cambiar x e y»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Per grup de 3: un paquet de cartes de la cursa, la pista de la cursa impresa i una fitxa o moneda (el globus)|Por grupo de 3: un paquete de cartas de la carrera, la pista de la carrera impresa y una ficha o moneda (el globo)"
        ],
        imprimir: ["Cartes de la cursa de globus|Cartas de la carrera de globos", "La pista de la cursa (graella)|La pista de la carrera (cuadrícula)"],
        prep: [
          "Imprimir i retallar un paquet de cartes per grup; si es plastifiquen, serveixen per a la sessió 4.|Imprimir y recortar un paquete de cartas por grupo; si se plastifican, sirven para la sesión 4.",
          "Imprimir una pista de la cursa per grup i marcar-hi la sortida a (-3, -2) i la meta a (3, 2).|Imprimir una pista de la carrera por grupo y marcar la salida en (-3, -2) y la meta en (3, 2).",
          "Mirar abans les demostracions de les diapositives 4, 7 i 11.|Mirar antes las demostraciones de las diapositivas 4, 7 y 11.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: la cursa de globus|Bienvenida: la carrera de globos", fase: 'inici',
          fa: "Recorda la sessió anterior amb la pregunta de repàs: un voluntari/a assenyala on és (0, 120). Presenta la missió: els globus no salten, volen a poc a poc. Pregunta com s'hauria de veure un globus que va d'un núvol a l'altre.|Recuerda la sesión anterior con la pregunta de repaso: un voluntario/a señala dónde está (0, 120). Presenta la misión: los globos no saltan, vuelan poco a poco. Pregunta cómo se debería ver un globo que va de una nube a otra.",
          diu: ["On és el punt x: 0, y: 120? I el (-150, -100)?|¿Dónde está el punto x: 0, y: 120? ¿Y el (-150, -100)?",
            "Un globus que desapareix i apareix a l'altra banda… us sembla real?|Un globo que desaparece y aparece al otro lado… ¿os parece real?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Lliscar i canviar|Deslizar y cambiar", fase: 'teoria',
          fa: "Compara «ves a» i «llisca» amb l'animació i mostra el camí del globus tram a tram. Explica «canvia x en 10» com «un pas més des d'on ets» i fes la pregunta de l'ocell a x: 50 entre tots, amb la recta a la pissarra. Acaba amb la demostració de «posa x» contra «canvia x».|Compara «ve a» y «desliza» con la animación y muestra el camino del globo tramo a tramo. Explica «cambia x en 10» como «un paso más desde donde estás» y haz la pregunta del pájaro en x: 50 entre todos, con la recta en la pizarra. Termina con la demostración de «pon x» contra «cambia x».",
          diu: ["«Ves a» és un salt de màgia; «llisca» és un vol. Quin bloc fa servir els segons?|«Ve a» es un salto de magia; «desliza» es un vuelo. ¿Qué bloque usa los segundos?",
            "Canvia x en 10: no vol dir «ves al 10», vol dir «10 més del que tenies».|Cambia x en 10: no quiere decir «ve al 10», quiere decir «10 más de lo que tenías».",
            "Per què el globus de dalt no avança, si repeteix el bloc 6 vegades?|¿Por qué el globo de arriba no avanza, si repite el bloque 6 veces?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La cursa de globus de paper|La carrera de globos de papel", fase: 'desconnectat',
          fa: "Grups de 3 amb tres papers que roten a cada torn: pilot/a (agafa una carta), navegant (diu on acabarà el globus abans de moure'l) i jutge/ssa (comprova la posició). El globus surt de (-3, -2) i ha d'arribar a la meta (3, 2). Si una carta el faria sortir de la pista, no es mou. La carta «Ves a x: 0 y: 0» el torna al centre, sigui on sigui: fes notar la diferència amb les cartes «canvia».|Grupos de 3 con tres papeles que rotan en cada turno: piloto (coge una carta), navegante (dice dónde terminará el globo antes de moverlo) y juez/a (comprueba la posición). El globo sale de (-3, -2) y tiene que llegar a la meta (3, 2). Si una carta lo haría salir de la pista, no se mueve. La carta «Ve a x: 0 y: 0» lo devuelve al centro, esté donde esté: haz notar la diferencia con las cartas «cambia».",
          diu: ["Abans de moure el globus, el navegant diu les coordenades on acabarà.|Antes de mover el globo, el navegante dice las coordenadas donde terminará.",
            "La carta «canvia x en -1» el porta un pas cap a on?|La carta «cambia x en -1» lo lleva un paso ¿hacia dónde?",
            "Quina carta fa el mateix sigui on sigui el globus?|¿Qué carta hace lo mismo esté donde esté el globo?"],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 amb papers que roten|Grupos de 3 con papeles que rotan" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. A les preguntes de càlcul, demana que facin la suma en veu alta abans de triar. A «El globus de paper» (activitat de casa), que toquin «Ho hem fet!»: és com la cursa que acabem de fer.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En las preguntas de cálculo, pide que hagan la suma en voz alta antes de elegir. En «El globo de papel» (actividad de casa), que toquen «¡Lo hemos hecho!»: es como la carrera que acabamos de hacer.",
          diu: ["50 menys 20… quant fa? I el signe, què vol dir?|50 menos 20… ¿cuánto da? Y el signo, ¿qué quiere decir?",
            "10 vegades 5: és una multiplicació amagada dins un bucle!|10 veces 5: ¡es una multiplicación escondida dentro de un bucle!"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa»: el punt (0, 120), la història, les targetes de «Descobreix», la diferència entre «ves a» i «llisca», «El globus de paper» (ja fet), les dues preguntes de càlcul i el bloc que fa pujar el globus.|De «Recuerda» hasta la «Pausa activa»: el punto (0, 120), la historia, las tarjetas de «Descubre», la diferencia entre «ve a» y «desliza», «El globo de papel» (ya hecho), las dos preguntas de cálculo y el bloque que hace subir el globo.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: pilots de globus|Retos: pilotos de globos", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després mostra la demostració de les fletxes i explica el botó «Comprova»: les fletxes es premen soles per comprovar el programa. Deixa'ls fer els cinc reptes. Al de l'ocell que no es mou, recorda la demostració de «posa x» i «canvia x».|Haced la pausa activa todos juntos. Después muestra la demostración de las flechas y explica el botón «Comprueba»: las flechas se pulsan solas para comprobar el programa. Deja que hagan los cinco retos. En el del pájaro que no se mueve, recuerda la demostración de «pon x» y «cambia x».",
          diu: ["Primer proveu-ho vosaltres amb les fletxes; quan funcioni, toqueu «Comprova».|Primero probadlo vosotros con las flechas; cuando funcione, tocad «Comprueba».",
            "Per anar a l'esquerra, el número ha de ser positiu o negatiu?|Para ir a la izquierda, ¿el número tiene que ser positivo o negativo?",
            "Quantes vegades s'ha de sumar 10 per arribar a 150?|¿Cuántas veces hay que sumar 10 para llegar a 150?"],
          slides: ['s11', 's12'], app: "«Pausa activa» i els cinc reptes: lliscar fins a la bandera, el camí dels núvols, les quatre fletxes, el globus que s'enlaira i l'ocell que no es mou.|«Pausa activa» y los cinco retos: deslizarse hasta la bandera, el camino de las nubes, las cuatro flechas, el globo que despega y el pájaro que no se mueve.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la cursa de globus|Crea: la carrera de globos", fase: 'crea',
          fa: "Cada alumne/a dissenya el recorregut del seu globus per les tres estrelles fins a la bandera. Anima'ls a provar segons diferents: un tram ràpid, un de lent. Qui acabi, que ensenyi la cursa al company/a i compareu quin globus arriba primer.|Cada alumno/a diseña el recorrido de su globo por las tres estrellas hasta la bandera. Anímalos a probar segundos diferentes: un tramo rápido, uno lento. Quien termine, que enseñe la carrera al compañero/a y comparad qué globo llega primero.",
          diu: ["Quin tram vols que sigui el més ràpid? Quants segons hi poses?|¿Qué tramo quieres que sea el más rápido? ¿Cuántos segundos le pones?",
            "Si sumeu tots els segons, sabreu quant tarda la cursa.|Si sumáis todos los segundos, sabréis cuánto tarda la carrera."],
          slides: ['s13'], app: "Pas «Crea»: La cursa de globus.|Paso «Crea»: La carrera de globos.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quin bloc farieu servir perquè un personatge vagi a poc a poc?|¿Qué bloque usaríais para que un personaje vaya poco a poco?",
            "Si sóc a x: 20 i faig canvia x en -30, on sóc?|Si estoy en x: 20 y hago cambia x en -30, ¿dónde estoy?"],
          slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Fa servir «posa x a 10» dins un bucle i no entén per què el personatge no avança.|Usa «pon x a 10» dentro de un bucle y no entiende por qué el personaje no avanza.",
          "Que digui en veu alta on és el personatge després de cada volta. Quan vegi que sempre és 10, pregunta-li quin bloc suma a la x que ja té.|Que diga en voz alta dónde está el personaje después de cada vuelta. Cuando vea que siempre es 10, pregúntale qué bloque suma a la x que ya tiene."],
        ["A la fletxa esquerra hi posa «canvia x en 10» (sense el signe menys).|En la flecha izquierda pone «cambia x en 10» (sin el signo menos).",
          "Que premi la fletxa i observi cap on va. Pregunta: cap a l'esquerra, la x creix o es fa més petita?|Que pulse la flecha y observe hacia dónde va. Pregunta: hacia la izquierda, ¿la x crece o se hace más pequeña?"],
        ["Confon l'ordre dels números de «llisca» i posa la x on van els segons.|Confunde el orden de los números de «desliza» y pone la x donde van los segundos.",
          "Que llegeixi el bloc sencer en veu alta: «llisca en … segons fins a x … y …». Quin número és un temps?|Que lea el bloque entero en voz alta: «desliza en … segundos hasta x … y …». ¿Qué número es un tiempo?"],
        ["Fa un camí d'un sol tram i el globus no toca les estrelles.|Hace un camino de un solo tramo y el globo no toca las estrellas.",
          "Que dibuixi el camí amb el dit a la pantalla, parant a cada estrella: cada parada és un bloc «llisca».|Que dibuje el camino con el dedo en la pantalla, parando en cada estrella: cada parada es un bloque «desliza»."],
        ["Al repte de les fletxes toca «Comença» i espera que es moguin soles.|En el reto de las flechas toca «Empieza» y espera que se muevan solas.",
          "Explica que amb «Comença» les fletxes les prem ell/a. Quan funcioni, «Comprova» les premerà soles.|Explica que con «Empieza» las flechas las pulsa él/ella. Cuando funcione, «Comprueba» las pulsará solas."]
      ],
      diff: {
        mes: "Repetir la cursa fent que el globus faci un zig-zag amb un bucle (canvia x i canvia y alternats) i que digui els segons totals de la cursa. A la cursa de paper, inventar cartes noves (canvia x en +3, ves a…).|Repetir la carrera haciendo que el globo haga un zigzag con un bucle (cambia x y cambia y alternados) y que diga los segundos totales de la carrera. En la carrera de papel, inventar cartas nuevas (cambia x en +3, ve a…).",
        menys: "Tenir la recta numèrica de -5 a 5 a la taula per fer les sumes amb el dit. Al repte de les fletxes, programar primer només la dreta i l'esquerra i provar-les abans de fer amunt i avall.|Tener la recta numérica de -5 a 5 en la mesa para hacer las sumas con el dedo. En el reto de las flechas, programar primero solo la derecha y la izquierda y probarlas antes de hacer arriba y abajo."
      },
      aval: {
        ticket: ["Quina diferència hi ha entre «ves a» i «llisca»?|¿Qué diferencia hay entre «ve a» y «desliza»?",
          "Un personatge és a x: 20 i fa «canvia x en -30». On és ara?|Un personaje está en x: 20 y hace «cambia x en -30». ¿Dónde está ahora?"],
        rubric: [
          ["Ves a i llisca|Ve a y desliza", "Tria «llisca» quan vol un moviment suau i en controla els segons.|Elige «desliza» cuando quiere un movimiento suave y controla los segundos.", "Fa servir «llisca», però confon on van els segons i les coordenades.|Usa «desliza», pero confunde dónde van los segundos y las coordenadas."],
          ["Canviar x i y|Cambiar x e y", "Calcula on acabarà el personatge, també amb números negatius.|Calcula dónde terminará el personaje, también con números negativos.", "Fa servir «canvia» però s'equivoca amb els signes.|Usa «cambia» pero se equivoca con los signos."],
          ["Les fletxes|Las flechas", "Programa les quatre fletxes amb el signe bo i les prova abans de comprovar.|Programa las cuatro flechas con el signo correcto y las prueba antes de comprobar.", "Programa algunes fletxes; les altres necessiten ajuda.|Programa algunas flechas; las otras necesitan ayuda."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El globus de paper»: amb una moneda i el full de la creu, una persona diu «canvia x en 2», «canvia y en -1»… i l'altra mou la moneda i endevina on acabarà.|En casa, con el móvil, podéis repetir la sesión y hacer «El globo de papel»: con una moneda y la hoja de la cruz, una persona dice «cambia x en 2», «cambia y en -1»… y la otra mueve la moneda y adivina dónde terminará.",
      slides: [
        { id: 's1', k: 'portada', t: 'Lliscar i canviar x i y|Deslizar y cambiar x e y', x: "Avui els personatges no salten: volen a poc a poc i els mourem amb les fletxes.|Hoy los personajes no saltan: vuelan poco a poco y los moveremos con las flechas.",
          nota: "Presenta l'objectiu: al final, cada alumne/a haurà dissenyat la seva cursa de globus.|Presenta el objetivo: al final, cada alumno/a habrá diseñado su carrera de globos." },
        { id: 's2', k: 'repas', t: 'Recordes les coordenades?|¿Recuerdas las coordenadas?', anim: 'g4grid', x: "On és el (0, 120)? I el (-150, -100)?|¿Dónde está el (0, 120)? ¿Y el (-150, -100)?",
          nota: "Dos voluntaris assenyalen els punts a la pantalla. Recorda: primer la x, després la y.|Dos voluntarios señalan los puntos en la pantalla. Recuerda: primero la x, después la y." },
        { id: 's3', k: 'anim', t: '«Ves a» salta, «llisca» vola|«Ve a» salta, «desliza» vuela', anim: 'g4goto', x: "«Llisca» fa servir segons: com més segons, més a poc a poc.|«Desliza» usa segundos: cuantos más segundos, más despacio.",
          nota: "Pregunta quin dels dos faríeu servir per a un globus i quin per a un truc de màgia.|Pregunta cuál de los dos usaríais para un globo y cuál para un truco de magia." },
        { id: 's4', k: 'media', t: 'Un camí, tram a tram|Un camino, tramo a tramo', x: "Tres trams, tres blocs «llisca».|Tres tramos, tres bloques «desliza».", media: D_ROUTE,
          nota: "Fes notar que cada bloc espera que el globus arribi abans de començar el següent.|Haz notar que cada bloque espera a que el globo llegue antes de empezar el siguiente." },
        { id: 's5', k: 'anim', t: '«Canvia x en 10»|«Cambia x en 10»', anim: 'g4chx', x: "Suma 10 a la x que ja tenia. Amb -10, resta.|Suma 10 a la x que ya tenía. Con -10, resta.",
          nota: "Dibuixa una recta a la pissarra i fes saltar un imant: 0, 10, 20, 30… i després -10.|Dibuja una recta en la pizarra y haz saltar un imán: 0, 10, 20, 30… y después -10." },
        { id: 's6', k: 'pregunta', t: "On és l'ocell?|¿Dónde está el pájaro?", x: "Un ocell és a x: 50 i fa «canvia x en -20». On és ara?|Un pájaro está en x: 50 y hace «cambia x en -20». ¿Dónde está ahora?",
          nota: "Resposta: x: 30. Fes-ho amb la recta: des del 50, dos salts de 10 cap a l'esquerra.|Respuesta: x: 30. Hazlo con la recta: desde el 50, dos saltos de 10 hacia la izquierda." },
        { id: 's7', k: 'media', t: '«Posa x» o «canvia x»?|¿«Pon x» o «cambia x»?', x: "Tots dos repeteixen el bloc 6 vegades. Per què només avança l'ocell?|Los dos repiten el bloque 6 veces. ¿Por qué solo avanza el pájaro?", media: D_SETCH,
          nota: "El globus va sempre a x = -120 (lloc fix); l'ocell suma 60 cada vegada. Dins un bucle, per avançar cal «canvia».|El globo va siempre a x = -120 (sitio fijo); el pájaro suma 60 cada vez. Dentro de un bucle, para avanzar hace falta «cambia»." },
        { id: 's8', k: 'activitat', t: 'La cursa de globus de paper|La carrera de globos de papel', timer: 12, punts: ["El globus surt de (-3, -2). La meta és a (3, 2).|El globo sale de (-3, -2). La meta está en (3, 2).", "Pilot/a: agafa una carta.|Piloto: coge una carta.", "Navegant: diu on acabarà el globus.|Navegante: dice dónde terminará el globo.", "Jutge/ssa: comprova-ho. Després, canvieu els papers.|Juez/a: lo comprueba. Después, cambiad los papeles."],
          nota: "Si una carta faria sortir el globus de la pista, aquell torn no es mou. La carta «Ves a x: 0 y: 0» el porta al centre, sigui on sigui.|Si una carta haría salir el globo de la pista, ese turno no se mueve. La carta «Ve a x: 0 y: 0» lo lleva al centro, esté donde esté." },
        { id: 's9', k: 'activitat', t: 'Pensa abans de moure|Piensa antes de mover', punts: ["Canvia x en +1: un pas a la dreta.|Cambia x en +1: un paso a la derecha.", "Canvia x en -1: un pas a l'esquerra.|Cambia x en -1: un paso a la izquierda.", "Canvia y en +1: amunt. Canvia y en -1: avall.|Cambia y en +1: arriba. Cambia y en -1: abajo."],
          nota: "Deixa-la projectada durant l'activitat. Pregunta a cada grup quina carta els ha ajudat més.|Déjala proyectada durante la actividad. Pregunta a cada grupo qué carta les ha ayudado más." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Lliscar i canviar x i y».|Abre la sesión «Deslizar y cambiar x e y».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «El globus de paper», toca «Ho hem fet!».|En «El globo de papel», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "A les preguntes de càlcul, que facin la suma en veu alta o amb el dit a la recta.|En las preguntas de cálculo, que hagan la suma en voz alta o con el dedo en la recta." },
        { id: 's11', k: 'media', t: 'Les fletxes i les coordenades|Las flechas y las coordenadas', x: "Cada fletxa té el seu guió amb un «canvia».|Cada flecha tiene su guion con un «cambia».", media: D_KEYS,
          nota: "Pregunta quina fletxa porta el número negatiu a la x i quina a la y. Explica el botó «Comprova».|Pregunta qué flecha lleva el número negativo en la x y cuál en la y. Explica el botón «Comprueba»." },
        { id: 's12', k: 'repte', t: 'Reptes: pilots de globus|Retos: pilotos de globos', timer: 10, punts: ["1. Llisca fins a la bandera|1. Deslízate hasta la bandera", "2. El camí dels núvols|2. El camino de las nubes", "3. Les quatre fletxes|3. Las cuatro flechas", "4. El globus s'enlaira (2 blocs)|4. El globo despega (2 bloques)", "5. L'ocell que no es mou|5. El pájaro que no se mueve"],
          nota: "Al repte 4, si algú s'encalla, pregunta quantes vegades cal sumar 10 per fer 150.|En el reto 4, si alguien se atasca, pregunta cuántas veces hay que sumar 10 para hacer 150." },
        { id: 's13', k: 'activitat', t: 'Crea: la cursa de globus|Crea: la carrera de globos', timer: 5, x: "Passa per les 3 estrelles amb «llisca» i acaba a la bandera. Tu tries els segons!|Pasa por las 3 estrellas con «desliza» y termina en la bandera. ¡Tú eliges los segundos!",
          nota: "Si queda temps, compareu dues curses: quina tarda més? Sumeu els segons de cada una.|Si queda tiempo, comparad dos carreras: ¿cuál tarda más? Sumad los segundos de cada una." },
        { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["«Llisca» va a poc a poc fins a un punt, en els segons que diguis.|«Desliza» va poco a poco hasta un punto, en los segundos que digas.", "«Canvia x en 10» suma a la x on ja és; amb -10, va a l'esquerra.|«Cambia x en 10» suma a la x donde ya está; con -10, va a la izquierda.", "Amb les fletxes i «canvia», mous el personatge per tot l'escenari.|Con las flechas y «cambia», mueves al personaje por todo el escenario."],
          nota: "Pregunta qui ha fet servir números negatius avui i per a què.|Pregunta quién ha usado números negativos hoy y para qué." },
        { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina diferència hi ha entre «ves a» i «llisca»?|¿Qué diferencia hay entre «ve a» y «desliza»?", "Si sóc a x: 20 i faig «canvia x en -30», on sóc?|Si estoy en x: 20 y hago «cambia x en -30», ¿dónde estoy?"],
          nota: "Resposta de la segona: x: -10. Anota qui encara dubta amb els negatius.|Respuesta de la segunda: x: -10. Anota quién todavía duda con los negativos." }
      ],
      print: [
        { id: 'p1', t: 'Cartes de la cursa de globus|Cartas de la carrera de globos', k: 'targetes',
          intro: "Un paquet per grup de 3. Barregeu les cartes i poseu-les cap per avall. Per torns, el pilot/a n'agafa una, el navegant diu on acabarà el globus i el jutge/ssa ho comprova.|Un paquete por grupo de 3. Barajad las cartas y ponedlas boca abajo. Por turnos, el piloto coge una, el navegante dice dónde terminará el globo y el juez/a lo comprueba.",
          items: [
            { t: 'Canvia x en +1 ➡️|Cambia x en +1 ➡️', n: 5 },
            { t: 'Canvia x en +2 ⏩|Cambia x en +2 ⏩', n: 3 },
            { t: 'Canvia x en -1 ⬅️|Cambia x en -1 ⬅️', n: 3 },
            { t: 'Canvia y en +1 ⬆️|Cambia y en +1 ⬆️', n: 5 },
            { t: 'Canvia y en +2 ⏫|Cambia y en +2 ⏫', n: 3 },
            { t: 'Canvia y en -1 ⬇️|Cambia y en -1 ⬇️', n: 3 },
            { t: 'Ves a x: 0 y: 0 🎯|Ve a x: 0 y: 0 🎯', n: 2 }
          ] },
        { id: 'p2', t: 'La pista de la cursa|La pista de la carrera', k: 'graella', w: 8, h: 6,
          intro: "Repasseu els eixos (la x de -4 a 4 i la y de -3 a 3). Marqueu la sortida a (-3, -2) i la meta a (3, 2). El globus es mou per les creus de les ratlles. Apunteu a sota cada posició on passa.|Repasad los ejes (la x de -4 a 4 y la y de -3 a 3). Marcad la salida en (-3, -2) y la meta en (3, 2). El globo se mueve por los cruces de las rayas. Apuntad debajo cada posición por donde pasa.",
          legend: [['🎈', 'Sortida (-3, -2)|Salida (-3, -2)'], ['🚩', 'Meta (3, 2)|Meta (3, 2)'], ['➡', 'x: cap a la dreta, positiva|x: hacia la derecha, positiva'], ['⬆', 'y: cap amunt, positiva|y: hacia arriba, positiva']],
          items: [{ q: 'Posicions del nostre globus: (-3, -2) → (___, ___) → (___, ___) → (___, ___) → …|Posiciones de nuestro globo: (-3, -2) → (___, ___) → (___, ___) → (___, ___) → …', big: true },
            { q: 'Quina carta ens ha ajudat més a arribar a la meta? Per què?|¿Qué carta nos ha ayudado más a llegar a la meta? ¿Por qué?' }] }
      ]
    },
    /* ---------- Sessió 3 · Rebotar a les vores ---------- */
    'g4-3': {
      obj: [
        "L'alumne/a interpreta la direcció en graus (0 amunt, 90 dreta, 180 avall, -90 esquerra) i la tria amb «apunta en direcció».|El alumno/a interpreta la dirección en grados (0 arriba, 90 derecha, 180 abajo, -90 izquierda) y la elige con «apunta en dirección».",
        "L'alumne/a fa rebotar un personatge posant «si toques la vora, rebota» dins un «per sempre», després de moure's.|El alumno/a hace rebotar a un personaje poniendo «si tocas el borde, rebota» dentro de un «por siempre», después de moverse.",
        "L'alumne/a fa que un personatge en persegueixi un altre amb «apunta cap a».|El alumno/a hace que un personaje persiga a otro con «apunta hacia».",
        "L'alumne/a combina moviment, rebot i canvi de vestit en una escena animada.|El alumno/a combina movimiento, rebote y cambio de disfraz en una escena animada."
      ],
      comp: [
        "Competència digital (CD5): crear animacions amb blocs i depurar-les|Competencia digital (CD5): crear animaciones con bloques y depurarlas",
        "Matemàtiques (mesura i geometria): angles, girs i direccions en graus|Matemáticas (medida y geometría): ángulos, giros y direcciones en grados",
        "Pensament computacional: bucles infinits i on va cada bloc dins un bucle|Pensamiento computacional: bucles infinitos y dónde va cada bloque dentro de un bucle",
        "Educació física i expressió corporal: orientació a l'espai|Educación física y expresión corporal: orientación en el espacio"
      ],
      vocab: [
        ["Direcció|Dirección", "Cap on mira un personatge, en graus: 0 amunt, 90 dreta, 180 avall, -90 esquerra.|Hacia dónde mira un personaje, en grados: 0 arriba, 90 derecha, 180 abajo, -90 izquierda."],
        ["Grau|Grado", "La unitat per mesurar girs: una volta sencera són 360 graus.|La unidad para medir giros: una vuelta entera son 360 grados."],
        ["Vora|Borde", "El límit de l'escenari: dalt, baix, a la dreta i a l'esquerra.|El límite del escenario: arriba, abajo, a la derecha y a la izquierda."],
        ["Rebotar|Rebotar", "Canviar de direcció en tocar una vora per continuar dins l'escenari.|Cambiar de dirección al tocar un borde para seguir dentro del escenario."],
        ["Perseguir|Perseguir", "Apuntar cap a un altre personatge i avançar, una vegada i una altra.|Apuntar hacia otro personaje y avanzar, una y otra vez."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Rebotar a les vores»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Rebotar en los bordes»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Un espai lliure a l'aula per a la brúixola humana i quatre fulls grans amb 0, 90, 180 i -90 per enganxar a les parets|Un espacio libre en el aula para la brújula humana y cuatro hojas grandes con 0, 90, 180 y -90 para pegar en las paredes",
          "Per alumne/a: «El billar de paper», un regle i un llapis de color|Por alumno/a: «El billar de papel», una regla y un lápiz de color"
        ],
        imprimir: ["Cartes de direcció|Cartas de dirección", "El billar de paper (graella)|El billar de papel (cuadrícula)"],
        prep: [
          "Enganxar els fulls de 0, 90, 180 i -90 a les quatre parets de l'aula (el 0 a la paret de la pissarra).|Pegar las hojas de 0, 90, 180 y -90 en las cuatro paredes del aula (el 0 en la pared de la pizarra).",
          "Imprimir un paquet de cartes de direcció per al professor/a i «El billar de paper» per a cada alumne/a.|Imprimir un paquete de cartas de dirección para el profesor/a y «El billar de papel» para cada alumno/a.",
          "Mirar abans les demostracions de les diapositives 4, 5 i 7.|Mirar antes las demostraciones de las diapositivas 4, 5 y 7.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: festa a la platja|Bienvenida: fiesta en la playa", fase: 'inici',
          fa: "Fes la pregunta de repàs sobre «canvia x». Presenta la festa de la platja: una pilota que rebota, un peix que neda i un cranc que el persegueix. Pregunta què necessitem saber d'un personatge, a més d'on és, per fer-lo moure.|Haz la pregunta de repaso sobre «cambia x». Presenta la fiesta de la playa: una pelota que rebota, un pez que nada y un cangrejo que lo persigue. Pregunta qué necesitamos saber de un personaje, además de dónde está, para hacerlo mover.",
          diu: ["Quin bloc mou 10 cap a la dreta, sigui on sigui el personatge?|¿Qué bloque mueve 10 hacia la derecha, esté donde esté el personaje?",
            "Sabem on és en Numi. Però cap on mira?|Sabemos dónde está Numi. Pero ¿hacia dónde mira?"],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "La direcció i el rebot|La dirección y el rebote", fase: 'teoria',
          fa: "Explica la direcció en graus amb l'animació de la brúixola i la fletxa que dibuixa un rectangle. Mostra la pilota que rebota i, amb el «compte!», on va el bloc del rebot. Acaba amb el cranc que persegueix el peix: pregunta per què ha de tornar a apuntar a cada pas.|Explica la dirección en grados con la animación de la brújula y la flecha que dibuja un rectángulo. Muestra la pelota que rebota y, con el «¡cuidado!», dónde va el bloque del rebote. Termina con el cangrejo que persigue al pez: pregunta por qué tiene que volver a apuntar en cada paso.",
          diu: ["Si mires la pissarra, mires al 0. On és el 90? I el 180?|Si miras la pizarra, miras al 0. ¿Dónde está el 90? ¿Y el 180?",
            "La pilota ha de mirar la vora a cada pas. On ha d'anar el bloc, doncs?|La pelota tiene que mirar el borde en cada paso. ¿Dónde tiene que ir el bloque, entonces?",
            "El peix es mou. Si el cranc només l'apunta una vegada, què passarà?|El pez se mueve. Si el cangrejo solo lo apunta una vez, ¿qué pasará?"],
          slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 12, t: "La brúixola humana i el billar de paper|La brújula humana y el billar de papel", fase: 'desconnectat',
          fa: "Primera part (5 min): tothom dret al seu lloc. Treu cartes de direcció i digues «apunta en direcció…»: tothom gira cap al full de la paret que toca. Afegeix «mou-te 2 passos» i «rebota!» (mitja volta). Segona part (7 min): cada alumne/a, amb el regle, dibuixa a «El billar de paper» el camí de la pilota que surt en diagonal i rebota a les vores, i compara el dibuix amb el company/a.|Primera parte (5 min): todos de pie en su sitio. Saca cartas de dirección y di «apunta en dirección…»: todos giran hacia la hoja de la pared que toca. Añade «muévete 2 pasos» y «¡rebota!» (media vuelta). Segunda parte (7 min): cada alumno/a, con la regla, dibuja en «El billar de papel» el camino de la pelota que sale en diagonal y rebota en los bordes, y compara el dibujo con el compañero/a.",
          diu: ["Apunta en direcció 90! I ara -90! I ara 180!|¡Apunta en dirección 90! ¡Y ahora -90! ¡Y ahora 180!",
            "En diagonal, la pilota avança un quadret a la dreta i un amunt cada vegada.|En diagonal, la pelota avanza un cuadrito a la derecha y uno arriba cada vez.",
            "Quan toca una vora, rebota com un mirall: si pujava, ara baixa.|Cuando toca un borde, rebota como un espejo: si subía, ahora baja."],
          slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
          fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. A la pregunta de la pilota que mira a la dreta, demana que la facin amb el dit a l'aire abans de triar. A «La brúixola humana» (activitat de casa), que toquin «Ho hem fet!».|Cada alumno/a avanza a su ritmo hasta la pausa activa. En la pregunta de la pelota que mira a la derecha, pide que la hagan con el dedo en el aire antes de elegir. En «La brújula humana» (actividad de casa), que toquen «¡Lo hemos hecho!».",
          diu: ["Fes amb el dit el camí de la pilota: on toca la vora?|Haz con el dedo el camino de la pelota: ¿dónde toca el borde?",
            "Al programa del cranc, quin bloc el fa girar cap al peix?|En el programa del cangrejo, ¿qué bloque lo hace girar hacia el pez?"],
          slides: ['s10'], app: "De «Recorda» fins a la «Pausa activa»: la pregunta de «canvia x», la història, les targetes de «Descobreix», la direcció 180, «La brúixola humana» (ja fet), la pilota que mira a la dreta i el bloc que fa mirar el cranc cap al peix.|De «Recuerda» hasta la «Pausa activa»: la pregunta de «cambia x», la historia, las tarjetas de «Descubre», la dirección 180, «La brújula humana» (ya hecho), la pelota que mira a la derecha y el bloque que hace mirar al cangrejo hacia el pez.", org: "Individual|Individual" },
        { min: 10, t: "Reptes: pilotes, peixos i crancs|Retos: pelotas, peces y cangrejos", fase: 'ordinador',
          fa: "Fes la pausa activa tots junts. Després fes que la classe predigui què farà la pilota de la diapositiva i deixa'ls fer els cinc reptes. Al del cranc, explica que hi ha tres proves amb el peix en llocs diferents: per això no serveix anar a un punt fix.|Haced la pausa activa todos juntos. Después haz que la clase prediga qué hará la pelota de la diapositiva y deja que hagan los cinco retos. En el del cangrejo, explica que hay tres pruebas con el pez en sitios diferentes: por eso no sirve ir a un punto fijo.",
          diu: ["La pilota s'escapa: el bloc del rebot és dins o fora del bucle?|La pelota se escapa: ¿el bloque del rebote está dentro o fuera del bucle?",
            "Quina direcció hi ha entre 0 i 90? Proveu-ne una!|¿Qué dirección hay entre 0 y 90? ¡Probad una!",
            "Per què el cranc ha de tornar a apuntar el peix a cada pas?|¿Por qué el cangrejo tiene que volver a apuntar al pez en cada paso?"],
          slides: ['s11', 's12'], app: "«Pausa activa» i els cinc reptes: la pilota que va i torna, la pilota que s'escapa, la diagonal, el cranc que persegueix el peix i el peix que mou la cua.|«Pausa activa» y los cinco retos: la pelota que va y vuelve, la pelota que se escapa, la diagonal, el cangrejo que persigue al pez y el pez que mueve la cola.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
        { min: 5, t: "Crea: la festa de la platja|Crea: la fiesta de la playa", fase: 'crea',
          fa: "Cada alumne/a programa dos personatges: la pilota que rebota en diagonal i el cranc que la persegueix. Recorda que es tria el personatge a dalt de l'editor. Qui acabi, que hi afegeixi el seu toc i l'ensenyi al company/a.|Cada alumno/a programa dos personajes: la pelota que rebota en diagonal y el cangrejo que la persigue. Recuerda que se elige el personaje arriba del editor. Quien termine, que añada su toque y lo enseñe al compañero/a.",
          diu: ["Tens dos personatges per programar: mira la pestanya de cadascun.|Tienes dos personajes para programar: mira la pestaña de cada uno.",
            "Què passa si el cranc és més ràpid que la pilota? I si és més lent?|¿Qué pasa si el cangrejo es más rápido que la pelota? ¿Y si es más lento?"],
          slides: ['s13'], app: "Pas «Crea»: La festa de la platja.|Paso «Crea»: La fiesta de la playa.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
          fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals de l'app i, a la porta, fes a cada alumne/a una pregunta del tiquet.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales de la app y, en la puerta, haz a cada alumno/a una pregunta del ticket.",
          diu: ["Quina direcció és avall?|¿Qué dirección es abajo?",
            "On va el bloc del rebot perquè funcioni sempre?|¿Dónde va el bloque del rebote para que funcione siempre?"],
          slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa «si toques la vora, rebota» abans del «per sempre» i la pilota s'escapa.|Pone «si tocas el borde, rebota» antes del «por siempre» y la pelota se escapa.",
          "Pregunta: quantes vegades mira la pilota si toca la vora? Que segueixi el programa amb el dit i vegi que aquell bloc només es fa una vegada.|Pregunta: ¿cuántas veces mira la pelota si toca el borde? Que siga el programa con el dedo y vea que ese bloque solo se hace una vez."],
        ["Confon 0 amb «dreta» perquè pensa que és el punt de partida.|Confunde 0 con «derecha» porque piensa que es el punto de partida.",
          "Que es posi dret mirant la pissarra (el 0) i giri cap al 90. Després, que ho comprovi amb «apunta en direcció 0» a l'app.|Que se ponga de pie mirando la pizarra (el 0) y gire hacia el 90. Después, que lo compruebe con «apunta en dirección 0» en la app."],
        ["Al cranc, posa «apunta cap al peix» fora del bucle i el cranc va recte i no l'atrapa.|En el cangrejo, pone «apunta hacia el pez» fuera del bucle y el cangrejo va recto y no lo atrapa.",
          "Que miri on va el peix mentre el cranc avança. Pregunta: el cranc sap que el peix s'ha mogut? Què ha de fer a cada pas?|Que mire adónde va el pez mientras el cangrejo avanza. Pregunta: ¿el cangrejo sabe que el pez se ha movido? ¿Qué tiene que hacer en cada paso?"],
        ["Per fer la diagonal, prova direccions molt grans (300, 1000).|Para hacer la diagonal, prueba direcciones muy grandes (300, 1000).",
          "Recorda la brúixola: entre amunt (0) i la dreta (90) hi ha la diagonal. Quin número hi ha entre 0 i 90?|Recuerda la brújula: entre arriba (0) y la derecha (90) está la diagonal. ¿Qué número hay entre 0 y 90?"],
        ["Al projecte programa només un personatge i no troba on es programa l'altre.|En el proyecto programa solo un personaje y no encuentra dónde se programa el otro.",
          "Ensenya-li les pestanyes de dalt de l'editor: cada personatge té els seus guions.|Enséñale las pestañas de arriba del editor: cada personaje tiene sus guiones."]
      ],
      diff: {
        mes: "Afegir a la festa un tercer moviment: un ocell que rebota amunt i avall canviant de vestit. Al billar de paper, provar una direcció diferent (per exemple, sortir de dalt a l'esquerra) i predir en quina cantonada acabarà.|Añadir a la fiesta un tercer movimiento: un pájaro que rebota arriba y abajo cambiando de disfraz. En el billar de papel, probar una dirección diferente (por ejemplo, salir de arriba a la izquierda) y predecir en qué esquina terminará.",
        menys: "Tenir a la taula una carta amb la brúixola (0, 90, 180, -90) i començar pel repte de la pilota que va i torna. Al billar de paper, dibuixar només els dos primers rebots amb l'ajuda del regle.|Tener en la mesa una carta con la brújula (0, 90, 180, -90) y empezar por el reto de la pelota que va y vuelve. En el billar de papel, dibujar solo los dos primeros rebotes con la ayuda de la regla."
      },
      aval: {
        ticket: ["Quina direcció fa mirar un personatge avall? I a l'esquerra?|¿Qué dirección hace mirar a un personaje abajo? ¿Y a la izquierda?",
          "On ha d'anar «si toques la vora, rebota» perquè la pilota reboti sempre?|¿Dónde tiene que ir «si tocas el borde, rebota» para que la pelota rebote siempre?"],
        rubric: [
          ["La direcció|La dirección", "Fa servir 0, 90, 180 i -90 sense dubtar i tria una diagonal entre dues direccions.|Usa 0, 90, 180 y -90 sin dudar y elige una diagonal entre dos direcciones.", "Sap 90 i -90, però dubta amb 0 i 180.|Sabe 90 y -90, pero duda con 0 y 180."],
          ["El rebot|El rebote", "Col·loca el rebot dins el bucle, després de moure's, i explica per què.|Coloca el rebote dentro del bucle, después de moverse, y explica por qué.", "Fa rebotar la pilota després de diverses proves, sense saber explicar-ho.|Hace rebotar la pelota después de varias pruebas, sin saber explicarlo."],
          ["Perseguir|Perseguir", "Programa una persecució que funciona en totes les proves.|Programa una persecución que funciona en todas las pruebas.", "La persecució funciona en una prova, però no en totes.|La persecución funciona en una prueba, pero no en todas."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «La brúixola humana»: decidiu quina paret és el 0 i doneu-vos ordres de direcció i de passos per torns.|En casa, con el móvil, podéis repetir la sesión y hacer «La brújula humana»: decidid qué pared es el 0 y daos órdenes de dirección y de pasos por turnos.",
      slides: [
        { id: 's1', k: 'portada', t: 'Rebotar a les vores|Rebotar en los bordes', x: "Avui farem rebotar pilotes, nedar peixos i perseguir crancs.|Hoy haremos rebotar pelotas, nadar peces y perseguir cangrejos.",
          nota: "Presenta l'objectiu: al final, cada alumne/a haurà programat una escena amb dos personatges que es mouen sols.|Presenta el objetivo: al final, cada alumno/a habrá programado una escena con dos personajes que se mueven solos." },
        { id: 's2', k: 'pregunta', t: 'Cap on mira?|¿Hacia dónde mira?', x: "Sabem on és en Numi gràcies a la x i la y. Però com sabem cap on mira?|Sabemos dónde está Numi gracias a la x y la y. Pero ¿cómo sabemos hacia dónde mira?",
          nota: "Recull idees («amb fletxes», «amb punts cardinals»…). Explica que farem servir números: els graus.|Recoge ideas («con flechas», «con puntos cardinales»…). Explica que usaremos números: los grados." },
        { id: 's3', k: 'anim', t: 'La direcció en graus|La dirección en grados', anim: 'g4dir', x: "0 amunt, 90 dreta, 180 avall, -90 esquerra.|0 arriba, 90 derecha, 180 abajo, -90 izquierda.",
          nota: "Assenyala els fulls de les parets: la pissarra és el 0. Tothom assenyala el 90, després el 180 i el -90.|Señala las hojas de las paredes: la pizarra es el 0. Todos señalan el 90, después el 180 y el -90." },
        { id: 's4', k: 'media', t: '«Apunta en direcció»|«Apunta en dirección»', x: "La fletxa apunta, avança, torna a apuntar… i dibuixa un rectangle.|La flecha apunta, avanza, vuelve a apuntar… y dibuja un rectángulo.", media: D_ARROW,
          nota: "Abans de cada gir, pregunta quin número de direcció vindrà ara.|Antes de cada giro, pregunta qué número de dirección vendrá ahora." },
        { id: 's5', k: 'media', t: 'Si toques la vora, rebota|Si tocas el borde, rebota', x: "La pilota surt en direcció 45 i rebota per sempre.|La pelota sale en dirección 45 y rebota por siempre.", media: D_BALL,
          nota: "Fes notar que, en tocar la vora, la pilota canvia la direcció com un mirall: si pujava, ara baixa.|Haz notar que, al tocar el borde, la pelota cambia la dirección como un espejo: si subía, ahora baja." },
        { id: 's6', k: 'anim', t: 'Compte! El rebot va dins el bucle|¡Cuidado! El rebote va dentro del bucle', anim: 'g4bounce', x: "Per sempre: mou-te, si toques la vora, rebota.|Por siempre: muévete, si tocas el borde, rebota.",
          nota: "Escriu a la pissarra les dues versions (rebot fora i dins del bucle) i pregunta quina funciona i per què.|Escribe en la pizarra las dos versiones (rebote fuera y dentro del bucle) y pregunta cuál funciona y por qué." },
        { id: 's7', k: 'media', t: 'El cranc persegueix el peix|El cangrejo persigue al pez', x: "Per sempre: apunta cap al peix, mou-te 3 passos.|Por siempre: apunta hacia el pez, muévete 3 pasos.", media: D_CHASE,
          nota: "Pregunta què passaria si el cranc apuntés el peix només una vegada, al principi.|Pregunta qué pasaría si el cangrejo apuntara al pez solo una vez, al principio." },
        { id: 's8', k: 'activitat', t: 'La brúixola humana|La brújula humana', timer: 5, punts: ["Tothom dret al seu lloc.|Todos de pie en su sitio.", "«Apunta en direcció…»: gira cap al full de la paret.|«Apunta en dirección…»: gira hacia la hoja de la pared.", "«Mou-te 2 passos» i «Rebota!»: mitja volta.|«Muévete 2 pasos» y «¡Rebota!»: media vuelta."],
          nota: "Treu les cartes de direcció a l'atzar. Comença lent i accelera. Fes alguna diagonal (45) per preparar el billar.|Saca las cartas de dirección al azar. Empieza despacio y acelera. Haz alguna diagonal (45) para preparar el billar." },
        { id: 's9', k: 'activitat', t: 'El billar de paper|El billar de papel', timer: 7, punts: ["La pilota surt de baix a l'esquerra en diagonal.|La pelota sale de abajo a la izquierda en diagonal.", "Cada pas: un quadret a la dreta i un amunt.|Cada paso: un cuadrito a la derecha y uno arriba.", "En tocar una vora, rebota com un mirall.|Al tocar un borde, rebota como un espejo.", "On acaba? Compareu-ho amb el company/a.|¿Dónde termina? Comparadlo con el compañero/a."],
          nota: "Fes el primer rebot a la pissarra amb tothom. Si tots dos dibuixos no coincideixen, que busquin on comença la diferència.|Haz el primer rebote en la pizarra con todos. Si los dos dibujos no coinciden, que busquen dónde empieza la diferencia." },
        { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Rebotar a les vores».|Abre la sesión «Rebotar en los bordes».", "Fes la missió, «Descobreix» i les preguntes.|Haz la misión, «Descubre» y las preguntas.", "A «La brúixola humana», toca «Ho hem fet!».|En «La brújula humana», toca «¡Lo hemos hecho!».", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
          nota: "A la pregunta de la pilota, que facin el camí amb el dit abans de triar.|En la pregunta de la pelota, que hagan el camino con el dedo antes de elegir." },
        { id: 's11', k: 'pregunta', t: 'Què farà la pilota?|¿Qué hará la pelota?', x: "La pilota mira a la dreta (90) i fa: per sempre, mou-te 5 passos, si toques la vora, rebota.|La pelota mira a la derecha (90) y hace: por siempre, muévete 5 pasos, si tocas el borde, rebota.",
          nota: "Resposta: va i torna de dreta a esquerra. Pregunta què hauríem de canviar perquè anés amunt i avall (apuntar a 0).|Respuesta: va y vuelve de derecha a izquierda. Pregunta qué tendríamos que cambiar para que fuera arriba y abajo (apuntar a 0)." },
        { id: 's12', k: 'repte', t: 'Reptes de la platja|Retos de la playa', timer: 10, punts: ["1. La pilota que va i torna|1. La pelota que va y vuelve", "2. La pilota que s'escapa|2. La pelota que se escapa", "3. Les quatre vores (diagonal)|3. Los cuatro bordes (diagonal)", "4. El cranc i el peix (3 proves)|4. El cangrejo y el pez (3 pruebas)", "5. El peix que mou la cua|5. El pez que mueve la cola"],
          nota: "Al repte 4, recorda que es comprova tres vegades amb el peix en llocs diferents.|En el reto 4, recuerda que se comprueba tres veces con el pez en sitios diferentes." },
        { id: 's13', k: 'activitat', t: 'Crea: la festa de la platja|Crea: la fiesta de la playa', timer: 5, x: "La pilota rebota en diagonal i el cranc la persegueix. Després, hi afegeixes el teu toc.|La pelota rebota en diagonal y el cangrejo la persigue. Después, añades tu toque.",
          nota: "Recorda les pestanyes dels personatges a dalt de l'editor.|Recuerda las pestañas de los personajes arriba del editor." },
        { id: 's14', k: 'resum', t: 'Què hem après avui|Qué hemos aprendido hoy', punts: ["La direcció diu cap on mira: 0, 90, 180 i -90.|La dirección dice hacia dónde mira: 0, 90, 180 y -90.", "El rebot va dins el «per sempre», després de moure's.|El rebote va dentro del «por siempre», después de moverse.", "«Apunta cap a» dins un bucle fa perseguir un personatge.|«Apunta hacia» dentro de un bucle hace perseguir a un personaje."],
          nota: "Pregunta qui ha aconseguit la diagonal i quin número ha fet servir: hi ha moltes respostes bones.|Pregunta quién ha conseguido la diagonal y qué número ha usado: hay muchas respuestas buenas." },
        { id: 's15', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quina direcció és avall? I a l'esquerra?|¿Qué dirección es abajo? ¿Y a la izquierda?", "On va el bloc del rebot?|¿Dónde va el bloque del rebote?"],
          nota: "La setmana vinent, al laberint, tornarem a fer servir els bucles per vigilar les parets.|La semana que viene, en el laberinto, volveremos a usar los bucles para vigilar las paredes." }
      ],
      print: [
        { id: 'p1', t: 'Cartes de direcció|Cartas de dirección', k: 'targetes',
          intro: "Per al professor/a (o per a cada grup a casa): barregeu-les i traieu-ne una cada vegada per a la brúixola humana.|Para el profesor/a (o para cada grupo en casa): barajadlas y sacad una cada vez para la brújula humana.",
          items: [
            { t: 'Apunta en direcció 0 ⬆️|Apunta en dirección 0 ⬆️', n: 2 },
            { t: 'Apunta en direcció 90 ➡️|Apunta en dirección 90 ➡️', n: 2 },
            { t: 'Apunta en direcció 180 ⬇️|Apunta en dirección 180 ⬇️', n: 2 },
            { t: 'Apunta en direcció -90 ⬅️|Apunta en dirección -90 ⬅️', n: 2 },
            { t: 'Apunta en direcció 45 ↗️|Apunta en dirección 45 ↗️', n: 1 },
            { t: 'Mou-te 2 passos 👣|Muévete 2 pasos 👣', n: 2 },
            { t: 'Si toques la vora, rebota 🔄|Si tocas el borde, rebota 🔄', n: 1 }
          ] },
        { id: 'p2', t: 'El billar de paper|El billar de papel', k: 'graella', w: 8, h: 6,
          intro: "La graella és l'escenari i les vores són les parets del billar. La pilota surt de la cantonada de baix a l'esquerra en direcció 45: a cada pas avança un quadret a la dreta i un amunt. Dibuixa el seu camí amb el regle. Quan toqui una vora, rebota com un mirall i continua.|La cuadrícula es el escenario y los bordes son las paredes del billar. La pelota sale de la esquina de abajo a la izquierda en dirección 45: en cada paso avanza un cuadrito a la derecha y uno arriba. Dibuja su camino con la regla. Cuando toque un borde, rebota como un espejo y sigue.",
          legend: [['⚽', 'On surt la pilota|Donde sale la pelota'], ['↗', 'Direcció 45: dreta i amunt|Dirección 45: derecha y arriba'], ['🔄', 'Rebot en una vora|Rebote en un borde']],
          items: [{ q: 'A quina vora toca primer la pilota? I després?|¿En qué borde toca primero la pelota? ¿Y después?' },
            { q: "Quantes vegades rebota abans d'arribar a una cantonada?|¿Cuántas veces rebota antes de llegar a una esquina?" }] }
      ]
    },
    /* ---------- Sessió 4 · Projecte: el laberint ---------- */
    'g4-4': {
      obj: [
        "L'alumne/a planifica un videojoc senzill: personatge, controls, regles i objectiu.|El alumno/a planifica un videojuego sencillo: personaje, controles, reglas y objetivo.",
        "L'alumne/a programa les quatre fletxes amb «canvia x» i «canvia y» i fa servir les coordenades per situar l'inici i la sortida.|El alumno/a programa las cuatro flechas con «cambia x» y «cambia y» y usa las coordenadas para situar el inicio y la salida.",
        "L'alumne/a programa una regla amb «espera fins que toca el color» dins un «per sempre» i explica per què cal el bucle.|El alumno/a programa una regla con «espera hasta que toca el color» dentro de un «por siempre» y explica por qué hace falta el bucle.",
        "L'alumne/a prova el videojoc d'un company/a i li dona comentaris amables i útils.|El alumno/a prueba el videojuego de un compañero/a y le da comentarios amables y útiles."
      ],
      comp: [
        "Competència digital (CD5): dissenyar i crear un videojoc senzill amb blocs|Competencia digital (CD5): diseñar y crear un videojuego sencillo con bloques",
        "Pensament computacional: esdeveniments, sensors de color, bucles i proves|Pensamiento computacional: eventos, sensores de color, bucles y pruebas",
        "Matemàtiques (sentit espacial): coordenades i recorreguts en un pla|Matemáticas (sentido espacial): coordenadas y recorridos en un plano",
        "Competència personal i social: donar i rebre comentaris per millorar|Competencia personal y social: dar y recibir comentarios para mejorar"
      ],
      vocab: [
        ["Videojoc|Videojuego", "Un programa interactiu amb un personatge, uns controls, unes regles i un objectiu.|Un programa interactivo con un personaje, unos controles, unas reglas y un objetivo."],
        ["Regla|Regla", "El que passa al videojoc quan es compleix una condició (tocar la paret → tornar a l'inici).|Lo que pasa en el videojuego cuando se cumple una condición (tocar la pared → volver al inicio)."],
        ["Tocar un color|Tocar un color", "Quan el personatge és a sobre d'una zona d'aquest color del fons.|Cuando el personaje está encima de una zona de ese color del fondo."],
        ["Esperar fins que|Esperar hasta que", "Aturar el guió fins que passa una cosa; llavors continua.|Parar el guion hasta que pasa algo; entonces sigue."],
        ["Provar|Probar", "Fer servir el programa per trobar errors i idees per millorar-lo.|Usar el programa para encontrar errores e ideas para mejorarlo."]
      ],
      mat: {
        aula: [
          "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: el laberint»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: el laberinto»",
          "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
          "Per parella: «Dissenya el teu laberint», llapis de colors (blau, verd i vermell) i un llapis normal|Por pareja: «Diseña tu laberinto», lápices de colores (azul, verde y rojo) y un lápiz normal",
          "Una còpia de «Prova i millora» per alumne/a|Una copia de «Prueba y mejora» por alumno/a"
        ],
        imprimir: ["Dissenya el teu laberint (graella)|Diseña tu laberinto (cuadrícula)", "Prova i millora (fitxa de comentaris)|Prueba y mejora (ficha de comentarios)"],
        prep: [
          "Imprimir «Dissenya el teu laberint» (una per parella) i «Prova i millora» (una per alumne/a).|Imprimir «Diseña tu laberinto» (una por pareja) y «Prueba y mejora» (una por alumno/a).",
          "Si es van plastificar, tenir a mà les cartes de la cursa de la sessió 2: serveixen per moure's pel laberint de paper.|Si se plastificaron, tener a mano las cartas de la carrera de la sesión 2: sirven para moverse por el laberinto de papel.",
          "Provar abans el repte de les fletxes amb el botó «Comprova» per saber què veuran.|Probar antes el reto de las flechas con el botón «Comprueba» para saber qué verán.",
          "Deixar els ordinadors engegats amb Numi Tech obert i la sessió iniciada.|Dejar los ordenadores encendidos con Numi Tech abierto y la sesión iniciada."
        ]
      },
      plan: [
        { min: 5, t: "Benvinguda: el laberint del far|Bienvenida: el laberinto del faro", fase: 'inici',
          fa: "Presenta el projecte: avui creareu el vostre primer videojoc. Pregunta què té qualsevol videojoc que coneguin (un personatge, uns controls, unes regles, un objectiu) i apunta-ho a la pissarra en quatre columnes. Ho farem servir per planificar el laberint.|Presenta el proyecto: hoy crearéis vuestro primer videojuego. Pregunta qué tiene cualquier videojuego que conozcan (un personaje, unos controles, unas reglas, un objetivo) y apúntalo en la pizarra en cuatro columnas. Lo usaremos para planificar el laberinto.",
          diu: ["Què té un videojoc? Qui es mou, amb què el movem, què no podem fer i què hem d'aconseguir?|¿Qué tiene un videojuego? ¿Quién se mueve, con qué lo movemos, qué no podemos hacer y qué tenemos que conseguir?",
            "Avui no farem servir el videojoc d'algú altre: el crearem nosaltres.|Hoy no usaremos el videojuego de otra persona: lo crearemos nosotros."],
          slides: ['s1', 's2'], app: "Encara no: pantalles apagades o abaixades.|Todavía no: pantallas apagadas o bajadas.", org: "Tot el grup|Todo el grupo" },
        { min: 8, t: "El pla i les regles|El plan y las reglas", fase: 'teoria',
          fa: "Mostra el mapa del laberint amb les coordenades de l'inici i la sortida. Explica la regla de la paret amb l'animació i la demostració: en Numi nota el color blau i torna a l'inici. Acaba amb el «compte!»: sense «per sempre», la regla només funciona una vegada.|Muestra el mapa del laberinto con las coordenadas del inicio y la salida. Explica la regla de la pared con la animación y la demostración: Numi nota el color azul y vuelve al inicio. Termina con el «¡cuidado!»: sin «por siempre», la regla solo funciona una vez.",
          diu: ["On comença en Numi? Quines coordenades té la sortida?|¿Dónde empieza Numi? ¿Qué coordenadas tiene la salida?",
            "La regla diu: espera fins que toquis el blau i, llavors, torna a l'inici.|La regla dice: espera hasta que toques el azul y, entonces, vuelve al inicio.",
            "Per què la segona vegada en Numi travessa la paret?|¿Por qué la segunda vez Numi atraviesa la pared?"],
          slides: ['s3', 's4', 's5', 's6'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
        { min: 10, t: "Dissenya el teu laberint|Diseña tu laberinto", fase: 'desconnectat',
          fa: "Per parelles, dibuixen un laberint a la graella: parets en blau, sortida en verd, una trampa en vermell i l'inici. Escriuen les coordenades de l'inici i de la sortida. Després, un fa de Numi amb la punta del llapis i l'altre li dona ordres («canvia x en 1», «canvia y en -1»…); si toca una paret, torna a l'inici. Al final canvien els papers.|Por parejas, dibujan un laberinto en la cuadrícula: paredes en azul, salida en verde, una trampa en rojo y el inicio. Escriben las coordenadas del inicio y de la salida. Después, uno hace de Numi con la punta del lápiz y el otro le da órdenes («cambia x en 1», «cambia y en -1»…); si toca una pared, vuelve al inicio. Al final cambian los papeles.",
          diu: ["Les parets han de deixar passadissos: si no hi ha camí, ningú no podrà sortir!|Las paredes tienen que dejar pasillos: si no hay camino, ¡nadie podrá salir!",
            "Escriviu les coordenades de l'inici: les necessitareu per programar la regla.|Escribid las coordenadas del inicio: las necesitaréis para programar la regla.",
            "Qui dona les ordres no pot tocar el full: només pot parlar.|Quien da las órdenes no puede tocar la hoja: solo puede hablar."],
          slides: ['s7', 's8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles|Por parejas" },
        { min: 20, t: "A l'ordinador: del pla als blocs|En el ordenador: del plan a los bloques", fase: 'ordinador',
          fa: "Cada alumne/a avança des de «Recorda» fins als reptes. Al camí automàtic, recorda'ls que mirin el mapa i pensin cada revolt com un punt. Fes la pausa activa a mitja estona. Als reptes de les fletxes i de la regla, explica el botó «Comprova»: la fletxa dreta el porta contra la paret i ha de tornar a l'inici.|Cada alumno/a avanza desde «Recuerda» hasta los retos. En el camino automático, recuérdales que miren el mapa y piensen cada curva como un punto. Haced la pausa activa a mitad. En los retos de las flechas y de la regla, explica el botón «Comprueba»: la flecha derecha lo lleva contra la pared y tiene que volver al inicio.",
          diu: ["Cada revolt del laberint és un punt: quines coordenades té?|Cada curva del laberinto es un punto: ¿qué coordenadas tiene?",
            "Primer proveu les fletxes vosaltres; després, «Comprova».|Primero probad las flechas vosotros; después, «Comprueba».",
            "En Numi travessa la paret? Mira què hi ha després de l'«espera fins que».|¿Numi atraviesa la pared? Mira qué hay después del «espera hasta que»."],
          slides: ['s9', 's10'], app: "De «Recorda» fins a la pregunta de les 3 fletxes avall: el bloc «llisca», la història, les targetes de «Descobreix», ordenar els passos d'un videojoc, la sortida al mapa, el camí automàtic, el bloc que vigila la paret, la pregunta del «per sempre», la pausa activa, els reptes de les fletxes i de la regla i la pregunta de les coordenades.|De «Recuerda» hasta la pregunta de las 3 flechas abajo: el bloque «desliza», la historia, las tarjetas de «Descubre», ordenar los pasos de un videojuego, la salida en el mapa, el camino automático, el bloque que vigila la pared, la pregunta del «por siempre», la pausa activa, los retos de las flechas y de la regla y la pregunta de las coordenadas.", org: "Individual|Individual" },
        { min: 12, t: "Crea: el meu laberint i el provem|Crea: mi laberinto y lo probamos", fase: 'crea',
          fa: "Cada alumne/a completa el videojoc del laberint, hi afegeix el seu toc i el desa. Després, canvien d'ordinador amb el company/a: proven el laberint de l'altre/a i omplen «Prova i millora» amb dues coses que els han agradat i una idea per millorar. Torneu al vostre ordinador i, si hi ha temps, apliqueu la idea.|Cada alumno/a completa el videojuego del laberinto, añade su toque y lo guarda. Después, cambian de ordenador con el compañero/a: prueban el laberinto del otro/a y rellenan «Prueba y mejora» con dos cosas que les han gustado y una idea para mejorar. Volved a vuestro ordenador y, si hay tiempo, aplicad la idea.",
          diu: ["Primer dues coses bones i després una idea per millorar: dues estrelles i un desig.|Primero dos cosas buenas y después una idea para mejorar: dos estrellas y un deseo.",
            "Quan proveu el videojoc d'algú, proveu també de fer-lo fallar: així l'ajudeu a millorar-lo.|Cuando probéis el videojuego de alguien, intentad también hacerlo fallar: así le ayudáis a mejorarlo.",
            "Escolteu el comentari sense discutir: després decidiu si el feu servir.|Escuchad el comentario sin discutir: después decidid si lo usáis."],
          slides: ['s11', 's12'], app: "Pas «Crea»: El meu laberint, i la història de provar-lo amb un company/a.|Paso «Crea»: Mi laberinto, y la historia de probarlo con un compañero/a.", org: "Individual i després per parelles|Individual y después por parejas" },
        { min: 5, t: "Tancament: què hem creat?|Cierre: ¿qué hemos creado?", fase: 'tancament',
          fa: "Repassa el que heu fet a la unitat amb el resum. Deixa que responguin les preguntes finals de l'app. Fes el tiquet de sortida i explica què vindrà a la unitat següent: el bloc «si» per prendre decisions.|Repasa lo que habéis hecho en la unidad con el resumen. Deja que respondan las preguntas finales de la app. Haz el ticket de salida y explica qué vendrá en la unidad siguiente: el bloque «si» para tomar decisiones.",
          diu: ["Què heu après en aquesta unitat que heu fet servir al laberint?|¿Qué habéis aprendido en esta unidad que habéis usado en el laberinto?",
            "Quin comentari del company/a us ha ajudat més?|¿Qué comentario del compañero/a os ha ayudado más?"],
          slides: ['s13', 's14', 's15'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
      ],
      errors: [
        ["Posa la regla de la paret sense «per sempre» i només funciona la primera vegada.|Pone la regla de la pared sin «por siempre» y solo funciona la primera vez.",
          "Que provi de tocar la paret dues vegades i miri què passa. Pregunta: quantes vegades es fa aquest bloc? Recorda la demostració del «compte!».|Que pruebe a tocar la pared dos veces y mire qué pasa. Pregunta: ¿cuántas veces se hace este bloque? Recuerda la demostración del «¡cuidado!»."],
        ["Al «ves a» de la regla hi posa unes coordenades diferents de l'inici i en Numi apareix dins una paret.|En el «ve a» de la regla pone unas coordenadas diferentes del inicio y Numi aparece dentro de una pared.",
          "Que busqui al mapa on comença en Numi i compari els números amb els del bloc: primer la x, després la y.|Que busque en el mapa dónde empieza Numi y compare los números con los del bloque: primero la x, después la y."],
        ["Fa en Numi molt gran i toca les parets a cada moment.|Hace a Numi muy grande y toca las paredes a cada momento.",
          "Pregunta: hi cap en Numi pel passadís? Que provi una mida més petita (50) i ho compari.|Pregunta: ¿cabe Numi por el pasillo? Que pruebe un tamaño más pequeño (50) y lo compare."],
        ["Les fletxes amunt i avall mouen en Numi de costat (posa «canvia x» en lloc de «canvia y»).|Las flechas arriba y abajo mueven a Numi de lado (pone «cambia x» en lugar de «cambia y»).",
          "Que premi cada fletxa i digui en veu alta cap on va. Quina coordenada ha de canviar per pujar?|Que pulse cada flecha y diga en voz alta hacia dónde va. ¿Qué coordenada tiene que cambiar para subir?"],
        ["Quan rep un comentari de millora, s'enfada o vol esborrar-ho tot.|Cuando recibe un comentario de mejora, se enfada o quiere borrarlo todo.",
          "Recorda que tots els videojocs es proven i es milloren moltes vegades. Que triï un sol canvi petit i el provi.|Recuerda que todos los videojuegos se prueban y se mejoran muchas veces. Que elija un solo cambio pequeño y lo pruebe."]
      ],
      diff: {
        mes: "Fer el laberint més difícil: canviar la mida d'en Numi, fer les fletxes més ràpides (canvia en 15) o afegir que en Numi digui una frase quan torna a l'inici. Al laberint de paper, afegir-hi una segona trampa i una regla nova.|Hacer el laberinto más difícil: cambiar el tamaño de Numi, hacer las flechas más rápidas (cambia en 15) o añadir que Numi diga una frase cuando vuelve al inicio. En el laberinto de papel, añadir una segunda trampa y una regla nueva.",
        menys: "Fer primer el repte de les fletxes amb només la dreta i l'avall i provar-les. Tenir a la taula un paper amb les coordenades de l'inici (-175, 100) per copiar-les al bloc «ves a».|Hacer primero el reto de las flechas con solo la derecha y abajo y probarlas. Tener en la mesa un papel con las coordenadas del inicio (-175, 100) para copiarlas en el bloque «ve a»."
      },
      aval: {
        ticket: ["Quines regles té el teu laberint?|¿Qué reglas tiene tu laberinto?",
          "Per què la regla de la paret va dins un «per sempre»?|¿Por qué la regla de la pared va dentro de un «por siempre»?"],
        rubric: [
          ["Planificació|Planificación", "Dibuixa un laberint amb camí, situa l'inici i la sortida amb coordenades i explica les regles.|Dibuja un laberinto con camino, sitúa el inicio y la salida con coordenadas y explica las reglas.", "Dibuixa el laberint, però li costa escriure les coordenades o explicar les regles.|Dibuja el laberinto, pero le cuesta escribir las coordenadas o explicar las reglas."],
          ["Programació del videojoc|Programación del videojuego", "Les quatre fletxes i la regla de la paret funcionen; sap explicar per què cal el «per sempre».|Las cuatro flechas y la regla de la pared funcionan; sabe explicar por qué hace falta el «por siempre».", "Les fletxes funcionen, però la regla de la paret necessita ajuda.|Las flechas funcionan, pero la regla de la pared necesita ayuda."],
          ["Provar i comentar|Probar y comentar", "Prova el videojoc del company/a i dona comentaris concrets, amables i útils.|Prueba el videojuego del compañero/a y da comentarios concretos, amables y útiles.", "Dona comentaris generals («m'agrada») sense idees concretes.|Da comentarios generales («me gusta») sin ideas concretas."]
        ]
      },
      casa: "A casa, amb el mòbil, podeu obrir el laberint als «Projectes» i ensenyar-lo a la família: que provin d'arribar a la sortida i que us diguin què hi afegirien.|En casa, con el móvil, podéis abrir el laberinto en «Proyectos» y enseñarlo a la familia: que intenten llegar a la salida y que os digan qué añadirían.",
      slides: [
        { id: 's1', k: 'portada', t: 'Projecte: el laberint|Proyecto: el laberinto', x: "Avui crearem el nostre primer videojoc: un laberint amb fletxes i regles.|Hoy crearemos nuestro primer videojuego: un laberinto con flechas y reglas.",
          nota: "Explica que és el projecte de la unitat: farà servir les coordenades, les fletxes i els bucles de les sessions anteriors.|Explica que es el proyecto de la unidad: usará las coordenadas, las flechas y los bucles de las sesiones anteriores." },
        { id: 's2', k: 'pregunta', t: 'Què té un videojoc?|¿Qué tiene un videojuego?', punts: ["Qui es mou? (el personatge)|¿Quién se mueve? (el personaje)", "Amb què el movem? (els controls)|¿Con qué lo movemos? (los controles)", "Què no podem fer? (les regles)|¿Qué no podemos hacer? (las reglas)", "Què hem d'aconseguir? (l'objectiu)|¿Qué tenemos que conseguir? (el objetivo)"],
          nota: "Apunta les respostes en quatre columnes a la pissarra i omple-les després amb el laberint: Numi, les fletxes, la paret, la sortida.|Apunta las respuestas en cuatro columnas en la pizarra y rellénalas después con el laberinto: Numi, las flechas, la pared, la salida." },
        { id: 's3', k: 'media', t: 'El mapa del laberint|El mapa del laberinto', x: "Inici: (-175, 100). Sortida: cap a (170, -115).|Inicio: (-175, 100). Salida: hacia (170, -115).", media: D_PLAN,
          nota: "Que la classe digui les coordenades de cada revolt mentre en Numi llisca. Les necessitaran al camí automàtic.|Que la clase diga las coordenadas de cada curva mientras Numi se desliza. Las necesitarán en el camino automático." },
        { id: 's4', k: 'anim', t: 'Les regles del laberint|Las reglas del laberinto', anim: 'g4color', x: "Si toca el blau, torna a l'inici. Si arriba al verd, ha sortit!|Si toca el azul, vuelve al inicio. Si llega al verde, ¡ha salido!",
          nota: "Relaciona-ho amb la columna «regles» de la pissarra.|Relaciónalo con la columna «reglas» de la pizarra." },
        { id: 's5', k: 'media', t: 'La regla de la paret|La regla de la pared', x: "Per sempre: espera fins que toca el blau, ves a l'inici.|Por siempre: espera hasta que toca el azul, ve al inicio.", media: D_WALL,
          nota: "Fes notar que en Numi torna a l'inici les dues vegades que toca una paret.|Haz notar que Numi vuelve al inicio las dos veces que toca una pared." },
        { id: 's6', k: 'media', t: 'Compte! Sense «per sempre»|¡Cuidado! Sin «por siempre»', x: "La primera vegada torna a l'inici… i la segona, travessa la paret!|La primera vez vuelve al inicio… ¡y la segunda, atraviesa la pared!", media: D_NOLOOP,
          nota: "Pregunta per què passa. Resposta: la regla es fa una sola vegada; dins un per sempre, vigila tota l'estona.|Pregunta por qué pasa. Respuesta: la regla se hace una sola vez; dentro de un por siempre, vigila todo el rato." },
        { id: 's7', k: 'activitat', t: 'Dissenya el teu laberint|Diseña tu laberinto', timer: 10, punts: ["Parets en blau, sortida en verd, una trampa en vermell.|Paredes en azul, salida en verde, una trampa en rojo.", "Escriviu les coordenades de l'inici i de la sortida.|Escribid las coordenadas del inicio y de la salida.", "Un fa de Numi amb el llapis; l'altre dona ordres.|Uno hace de Numi con el lápiz; el otro da órdenes.", "Si toca una paret, torna a l'inici!|Si toca una pared, ¡vuelve al inicio!"],
          nota: "Comprova que els laberints tenen camí. Si teniu les cartes de la cursa, es poden fer servir per donar les ordres.|Comprueba que los laberintos tienen camino. Si tenéis las cartas de la carrera, se pueden usar para dar las órdenes." },
        { id: 's8', k: 'activitat', t: 'Les regles del meu laberint|Las reglas de mi laberinto', punts: ["Les fletxes mouen el personatge.|Las flechas mueven al personaje.", "Tocar el blau: tornar a l'inici.|Tocar el azul: volver al inicio.", "Arribar al verd: has sortit!|Llegar al verde: ¡has salido!", "La trampa vermella: inventeu-vos què passa!|La trampa roja: ¡inventad qué pasa!"],
          nota: "Deixa-la projectada. La trampa vermella és per a les idees: a la unitat següent aprendran a programar-ne més d'una.|Déjala proyectada. La trampa roja es para las ideas: en la unidad siguiente aprenderán a programar más de una." },
        { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 20, punts: ["Obre la sessió «Projecte: el laberint».|Abre la sesión «Proyecto: el laberinto».", "Fes el camí automàtic amb «llisca».|Haz el camino automático con «desliza».", "Programa les fletxes i la regla de la paret.|Programa las flechas y la regla de la pared.", "Para quan arribis al pas «Crea».|Para cuando llegues al paso «Crea»."],
          nota: "Fes la pausa activa tots junts quan la majoria hi arribi.|Haced la pausa activa todos juntos cuando la mayoría llegue." },
        { id: 's10', k: 'repte', t: 'Reptes del laberint|Retos del laberinto', punts: ["1. El camí automàtic (llisca)|1. El camino automático (desliza)", "2. Les quatre fletxes|2. Las cuatro flechas", "3. La regla de la paret|3. La regla de la pared", "Per comprovar: toca «Comprova»|Para comprobar: toca «Comprueba»"],
          nota: "Explica que «Comprova» prem la fletxa dreta fins a la paret i després la d'avall: en Numi ha de tornar a l'inici i baixar.|Explica que «Comprueba» pulsa la flecha derecha hasta la pared y después la de abajo: Numi tiene que volver al inicio y bajar." },
        { id: 's11', k: 'activitat', t: 'Crea: el meu laberint|Crea: mi laberinto', timer: 7, x: "Fletxes, regla de la paret i el teu toc. Desa'l quan arribis a la sortida!|Flechas, regla de la pared y tu toque. ¡Guárdalo cuando llegues a la salida!",
          nota: "Recorda que el projecte es desa als «Projectes» i es pot obrir a casa.|Recuerda que el proyecto se guarda en «Proyectos» y se puede abrir en casa." },
        { id: 's12', k: 'activitat', t: 'Prova i millora|Prueba y mejora', timer: 5, punts: ["Canvia d'ordinador amb el company/a.|Cambia de ordenador con el compañero/a.", "Prova el seu laberint: arribes a la sortida?|Prueba su laberinto: ¿llegas a la salida?", "Dues estrelles: dues coses que t'agraden.|Dos estrellas: dos cosas que te gustan.", "Un desig: una idea per millorar-lo.|Un deseo: una idea para mejorarlo."],
          nota: "Modela un comentari concret a la pissarra: «M'agrada la frase del començament; afegiria una paret més».|Modela un comentario concreto en la pizarra: «Me gusta la frase del principio; añadiría una pared más»." },
        { id: 's13', k: 'resum', t: 'Què hem après a la unitat|Qué hemos aprendido en la unidad', punts: ["La x i la y diuen on és cada cosa.|La x y la y dicen dónde está cada cosa.", "«Llisca», «canvia x / y», la direcció i el rebot mouen els personatges.|«Desliza», «cambia x / y», la dirección y el rebote mueven a los personajes.", "Una regla dins un «per sempre» vigila tota l'estona.|Una regla dentro de un «por siempre» vigila todo el rato."],
          nota: "Fes que diversos alumnes expliquin quina part del laberint ha estat la més difícil i com l'han resolt.|Haz que varios alumnos expliquen qué parte del laberinto ha sido la más difícil y cómo la han resuelto." },
        { id: 's14', k: 'tiquet', t: 'Tiquet de sortida|Ticket de salida', punts: ["Quines regles té el teu laberint?|¿Qué reglas tiene tu laberinto?", "Per què la regla va dins un «per sempre»?|¿Por qué la regla va dentro de un «por siempre»?"],
          nota: "Fes una pregunta a cada alumne/a a la porta i anota qui necessita repassar els bucles.|Haz una pregunta a cada alumno/a en la puerta y anota quién necesita repasar los bucles." },
        { id: 's15', k: 'pregunta', t: 'I la trampa vermella?|¿Y la trampa roja?', x: "Com faríem que en Numi digui «Ui!» si toca el vermell i torni a l'inici si toca el blau?|¿Cómo haríamos que Numi diga «¡Uy!» si toca el rojo y vuelva al inicio si toca el azul?",
          nota: "Deixa la pregunta oberta: a la unitat següent aprendran el bloc «si», que decideix què fer segons el que passa.|Deja la pregunta abierta: en la unidad siguiente aprenderán el bloque «si», que decide qué hacer según lo que pasa." }
      ],
      print: [
        { id: 'p1', t: 'Dissenya el teu laberint|Diseña tu laberinto', k: 'graella', w: 8, h: 6,
          intro: "Per parelles. Repasseu els eixos (la x de -4 a 4 i la y de -3 a 3). Pinteu les parets de blau, deixant passadissos; la sortida de verd i una trampa de vermell. Marqueu l'inici. Després, un fa de Numi amb la punta del llapis i l'altre li dona ordres: si toca el blau, torna a l'inici.|Por parejas. Repasad los ejes (la x de -4 a 4 y la y de -3 a 3). Pintad las paredes de azul, dejando pasillos; la salida de verde y una trampa de rojo. Marcad el inicio. Después, uno hace de Numi con la punta del lápiz y el otro le da órdenes: si toca el azul, vuelve al inicio.",
          legend: [['🤖', "L'inici d'en Numi|El inicio de Numi"], ['🟦', 'Paret (torna a l\'inici)|Pared (vuelve al inicio)'], ['🟩', 'Sortida|Salida'], ['🟥', 'Trampa (inventeu què passa)|Trampa (inventad qué pasa)']],
          items: [{ q: "Coordenades de l'inici: (___, ___) · Coordenades de la sortida: (___, ___)|Coordenadas del inicio: (___, ___) · Coordenadas de la salida: (___, ___)" },
            { q: 'Les regles del nostre videojoc són…|Las reglas de nuestro videojuego son…', big: true }] },
        { id: 'p2', t: 'Prova i millora|Prueba y mejora', k: 'fitxa',
          intro: "Prova el laberint del teu company/a i omple la fitxa. Primer dues estrelles (el que t'agrada) i després un desig (una idea per millorar).|Prueba el laberinto de tu compañero/a y rellena la ficha. Primero dos estrellas (lo que te gusta) y después un deseo (una idea para mejorar).",
          items: [
            { q: "⭐ Una cosa que m'ha agradat del laberint:|⭐ Una cosa que me ha gustado del laberinto:", sol: "Resposta oberta: valoreu que sigui concreta (una frase, un vestit, el camí…).|Respuesta abierta: valorad que sea concreta (una frase, un disfraz, el camino…)." },
            { q: "⭐ Una altra cosa que m'ha agradat:|⭐ Otra cosa que me ha gustado:", sol: "Resposta oberta.|Respuesta abierta." },
            { q: "He arribat a la sortida? Ha estat fàcil, normal o difícil?|¿He llegado a la salida? ¿Ha sido fácil, normal o difícil?", sol: "Resposta oberta: ajuda a decidir si cal canviar la mida o la velocitat.|Respuesta abierta: ayuda a decidir si hay que cambiar el tamaño o la velocidad." },
            { q: "💡 Un desig: què hi afegiries o canviaries?|💡 Un deseo: ¿qué añadirías o cambiarías?", sol: "Resposta oberta: una idea que el company/a pugui provar (una frase, una mida, una regla nova…).|Respuesta abierta: una idea que el compañero/a pueda probar (una frase, un tamaño, una regla nueva…)." }
          ] }
      ]
    }
  };
})());
