/* Tech Robot · unitat 8 «El meu projecte» · guia del professorat (r8-1 … r8-4)
   Projecte final del curs: cada alumne/a dissenya un repte propi per a en Bit (r8-1), el programa i el millora (r8-2),
   el fa provar a un company/a i rep comentaris (r8-3) i el presenta a la classe abans de rebre el diploma (r8-4).
   El mapa de cada alumne/a es desa a l'app (editor «Dissenya») i es recupera a totes les sessions de la unitat. */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Dissenya el teu repte ---------- */
  'r8-1': {
    obj: [
      "L'alumne/a explica què fa que un repte sigui bo: un objectiu clar, obstacles, una dificultat ajustada i una solució.|El alumno/a explica qué hace que un reto sea bueno: un objetivo claro, obstáculos, una dificultad ajustada y una solución.",
      "L'alumne/a aplica en reptes curts les eines principals del curs: bucles, condicions, funcions i variables.|El alumno/a aplica en retos cortos las herramientas principales del curso: bucles, condiciones, funciones y variables.",
      "L'alumne/a dibuixa en paper l'esbós d'un repte propi i comprova, amb l'ajuda d'un company/a, que té solució.|El alumno/a dibuja en papel el boceto de un reto propio y comprueba, con la ayuda de un compañero/a, que tiene solución.",
      "L'alumne/a passa l'esbós a l'editor de l'app, li posa un nom i el desa.|El alumno/a pasa el boceto al editor de la app, le pone un nombre y lo guarda."
    ],
    comp: [
      "Competència digital (CD5): dissenyar un artefacte digital senzill (un repte programable) i comprovar-ne el funcionament|Competencia digital (CD5): diseñar un artefacto digital sencillo (un reto programable) y comprobar su funcionamiento",
      "Pensament computacional: abstracció i disseny d'un problema; repàs de bucles, condicions, funcions i variables|Pensamiento computacional: abstracción y diseño de un problema; repaso de bucles, condiciones, funciones y variables",
      "Matemàtiques (sentit espacial): representar recorreguts en una quadrícula i comptar caselles|Matemáticas (sentido espacial): representar recorridos en una cuadrícula y contar casillas",
      "Educació artística: de l'esbós a la versió final d'un disseny|Educación artística: del boceto a la versión final de un diseño"
    ],
    vocab: [
      ["Repte|Reto", "Un problema per resoldre amb un objectiu clar: arribar a la bandera, recollir estrelles, repartir caixes…|Un problema para resolver con un objetivo claro: llegar a la bandera, recoger estrellas, repartir cajas…"],
      ["Objectiu|Objetivo", "El que ha d'aconseguir en Bit perquè el repte estigui resolt.|Lo que tiene que conseguir Bit para que el reto esté resuelto."],
      ["Obstacle|Obstáculo", "Una cosa que fa pensar el camí: roques, aigua, arbres, revolts.|Algo que hace pensar el camino: rocas, agua, árboles, curvas."],
      ["Esbós|Boceto", "Un dibuix ràpid per pensar una idea abans de construir-la.|Un dibujo rápido para pensar una idea antes de construirla."],
      ["Al punt|En su punto", "Un repte que fa pensar però es pot resoldre: ni massa fàcil ni impossible.|Un reto que hace pensar pero se puede resolver: ni demasiado fácil ni imposible."],
      ["Dissenyador/a|Diseñador/a", "La persona que pensa i dibuixa com serà una cosa abans de fer-la.|La persona que piensa y dibuja cómo será algo antes de hacerlo."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Dissenya el teu repte»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Diseña tu reto»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis, goma i colors per a cada alumne/a|Lápiz, goma y colores para cada alumno/a",
        "Una carpeta o un sobre per alumne/a per guardar l'esbós durant tota la unitat|Una carpeta o un sobre por alumno/a para guardar el boceto durante toda la unidad"
      ],
      imprimir: ["Graella del meu repte (dues per alumne/a)|Cuadrícula de mi reto (dos por alumno/a)", "Fitxa: és un bon repte?|Ficha: ¿es un buen reto?"],
      prep: [
        "Imprimir dues graelles per alumne/a (una per a l'esbós i una de recanvi) i unes quantes fitxes «És un bon repte?» per als que acabin abans.|Imprimir dos cuadrículas por alumno/a (una para el boceto y una de recambio) y unas cuantas fichas «¿Es un buen reto?» para los que terminen antes.",
        "Provar abans l'editor «Dissenya» de l'app: les eines, com es gira en Bit tocant-lo dues vegades i què passa quan es dibuixa un camí.|Probar antes el editor «Diseña» de la app: las herramientas, cómo se gira a Bit tocándolo dos veces y qué pasa cuando se dibuja un camino.",
        "Decidir les parelles per a la prova del dit: seran les mateixes que a la sessió 3, quan es provaran els reptes a l'ordinador.|Decidir las parejas para la prueba del dedo: serán las mismas que en la sesión 3, cuando se probarán los retos en el ordenador.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda a la Fira dels Reptes|Bienvenida a la Feria de los Retos", fase: 'inici',
        fa: "Presenta la darrera unitat: durant quatre sessions, cada alumne/a crearà el seu propi repte per a en Bit. Pregunta quin repte del curs els ha agradat més i per què, i apunta a la pissarra les raons (tenia revolts, calia pensar, sortia a la primera…). Explica el pla de les quatre sessions amb la diapositiva 3.|Presenta la última unidad: durante cuatro sesiones, cada alumno/a creará su propio reto para Bit. Pregunta qué reto del curso les ha gustado más y por qué, y apunta en la pizarra las razones (tenía curvas, había que pensar, salía a la primera…). Explica el plan de las cuatro sesiones con la diapositiva 3.",
        diu: ["Quin repte d'en Bit us ha agradat més de tot el curs? Per què?|¿Qué reto de Bit os ha gustado más de todo el curso? ¿Por qué?",
          "Fins ara els reptes els fèiem nosaltres. Ara us toca a vosaltres: sereu els dissenyadors!|Hasta ahora los retos los hacíamos nosotros. Ahora os toca a vosotros: ¡seréis los diseñadores!",
          "Al final de la unitat, el vostre repte el provarà un company/a i el presentareu a tothom.|Al final de la unidad, vuestro reto lo probará un compañero/a y lo presentaréis a todo el mundo."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què fa bo un repte?|¿Qué hace bueno un reto?", fase: 'teoria',
        fa: "Repassa la caixa d'eines del curs: per a cada eina, demana un exemple d'on l'han fet servir. Explica les quatre condicions d'un bon repte amb l'animació i el mesurador «al punt». Projecta les dues demostracions: abans d'executar-les, la classe diu quants blocs calen i si el repte és massa fàcil o està al punt. Acaba amb la idea de l'esbós en paper.|Repasa la caja de herramientas del curso: para cada herramienta, pide un ejemplo de dónde la han usado. Explica las cuatro condiciones de un buen reto con la animación y el medidor «en su punto». Proyecta las dos demostraciones: antes de ejecutarlas, la clase dice cuántos bloques hacen falta y si el reto es demasiado fácil o está en su punto. Termina con la idea del boceto en papel.",
        diu: ["On heu fet servir un bucle? I un «Si…»? I una funció?|¿Dónde habéis usado un bucle? ¿Y un «Si…»? ¿Y una función?",
          "Un repte on la bandera és al costat d'en Bit… és un bon repte? I un on no s'hi pot arribar?|Un reto donde la bandera está al lado de Bit… ¿es un buen reto? ¿Y uno donde no se puede llegar?",
          "Un bon repte és com un regal: l'heu de pensar per a la persona que el resoldrà.|Un buen reto es como un regalo: lo tenéis que pensar para la persona que lo resolverá."],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "L'estudi de disseny: el repte en paper|El estudio de diseño: el reto en papel", fase: 'desconnectat',
        fa: "Cada alumne/a dibuixa l'esbós del seu repte a la graella (7 × 6, la mateixa mida que l'editor de l'app) amb els símbols de la llegenda i respon les preguntes de sota. Després de 7 minuts, fes la prova del dit: cada alumne/a passa la graella al company/a, que segueix el camí amb el dit sense dir res i, al final, diu si li ha semblat massa fàcil, al punt o impossible. L'autor/a pot fer un canvi abans de guardar la graella a la carpeta.|Cada alumno/a dibuja el boceto de su reto en la cuadrícula (7 × 6, el mismo tamaño que el editor de la app) con los símbolos de la leyenda y responde las preguntas de abajo. Después de 7 minutos, haz la prueba del dedo: cada alumno/a pasa la cuadrícula al compañero/a, que sigue el camino con el dedo sin decir nada y, al final, dice si le ha parecido demasiado fácil, en su punto o imposible. El autor/a puede hacer un cambio antes de guardar la cuadrícula en la carpeta.",
        diu: ["Primer decidiu l'objectiu: què haurà de fer en Bit? Escriviu-ho a sota de la graella.|Primero decidid el objetivo: ¿qué tendrá que hacer Bit? Escribidlo debajo de la cuadrícula.",
          "Dibuixeu la fletxa d'en Bit mirant cap on comença.|Dibujad la flecha de Bit mirando hacia donde empieza.",
          "A la prova del dit, el company/a només segueix el camí i diu: massa fàcil, al punt o impossible.|En la prueba del dedo, el compañero/a solo sigue el camino y dice: demasiado fácil, en su punto o imposible."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: descobreix i escalfa motors|En el ordenador: descubre y calienta motores", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança al seu ritme fins a «On acabarà?». Al pas «Un repte per a algú de casa», que toquin «Ara no»: és per fer a casa. Projecta la demostració de la diapositiva 13 quan la majoria hi arribi i deixa que la classe digui la lletra abans d'executar-la.|Cada alumno/a abre la sesión y avanza a su ritmo hasta «¿Dónde terminará?». En el paso «Un reto para alguien de casa», que toquen «Ahora no»: es para hacer en casa. Proyecta la demostración de la diapositiva 13 cuando la mayoría llegue y deja que la clase diga la letra antes de ejecutarla.",
        diu: ["Al quiz dels tres reptes, quin és massa fàcil? I quin és impossible?|En el quiz de los tres retos, ¿cuál es demasiado fácil? ¿Y cuál es imposible?",
          "On acabarà en Bit? Seguiu el bucle amb el dit: dues vegades «Endavant, Endavant, Gira».|¿Dónde terminará Bit? Seguid el bucle con el dedo: dos veces «Adelante, Adelante, Gira»."],
        slides: ['s12', 's13'], app: "De «Recorda» fins a «On acabarà?»: el bloc «fins que», les dues històries de la fira, les targetes de «Descobreix», el quiz del repte ben pensat, ordenar els passos del disseny, el repte per a casa (per més tard) i la predicció del bucle.|De «Recuerda» hasta «¿Dónde terminará?»: el bloque «hasta que», las dos historias de la feria, las tarjetas de «Descubre», el quiz del reto bien pensado, ordenar los pasos del diseño, el reto para casa (para más tarde) y la predicción del bucle.", org: "Individual|Individual" },
      { min: 10, t: "Reptes: una eina, un repte|Retos: una herramienta, un reto", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, cada alumne/a resol els quatre reptes de repàs: el terra de colors (bucle i llapis), les tres illes (condicions i «fins que»), «Salta la roca» (funcions) i el comptador d'estrelles (variables). Qui acabi aviat agafa la fitxa «És un bon repte?».|Haced la pausa activa todos juntos. Después, cada alumno/a resuelve los cuatro retos de repaso: el suelo de colores (bucle y lápiz), las tres islas (condiciones y «hasta que»), «Salta la roca» (funciones) y el contador de estrellas (variables). Quien termine pronto coge la ficha «¿Es un buen reto?».",
        diu: ["Quin tros es repeteix? Aquest va dins del «Repeteix».|¿Qué trozo se repite? Ese va dentro del «Repite».",
          "A les tres illes, el camí canvia: què ha de mirar en Bit a cada pas?|En las tres islas, el camino cambia: ¿qué tiene que mirar Bit en cada paso?",
          "Quan acaba la funció «Salta la roca», cap on mira en Bit?|Cuando termina la función «Salta la roca», ¿hacia dónde mira Bit?"],
        slides: ['s14'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 10, t: "Crea: el teu repte a la pantalla|Crea: tu reto en la pantalla", fase: 'crea',
        fa: "Cada alumne/a té l'esbós al costat i el copia a l'editor «Dissenya»: tria una eina, toca les caselles, posa en Bit (tocant-lo una altra vegada gira) i escriu el nom del repte. L'editor no deixa desar fins que totes les comprovacions són verdes. Passeja per l'aula i pregunta per l'objectiu de cada repte.|Cada alumno/a tiene el boceto al lado y lo copia en el editor «Diseña»: elige una herramienta, toca las casillas, pone a Bit (tocándolo otra vez gira) y escribe el nombre del reto. El editor no deja guardar hasta que todas las comprobaciones están en verde. Pasea por el aula y pregunta por el objetivo de cada reto.",
        diu: ["Si dibuixes un camí, la resta de l'illa es torna bosc. És el que vols?|Si dibujas un camino, el resto de la isla se vuelve bosque. ¿Es lo que quieres?",
          "Quin nom li posaràs? Un bon nom diu de què va el repte.|¿Qué nombre le pondrás? Un buen nombre dice de qué va el reto.",
          "Una comprovació no es posa verda? Llegeix-la: et diu què falta.|¿Una comprobación no se pone verde? Léela: te dice qué falta."],
        slides: ['s15'], app: "Pas «Crea»: l'editor «Dissenya» (es desa el mapa del repte, que es farà servir a les sessions següents).|Paso «Crea»: el editor «Diseña» (se guarda el mapa del reto, que se usará en las sesiones siguientes).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida a la porta. Recull les graelles a les carpetes: les farem servir a la sessió 3.|Repasa las tres ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y haz el ticket de salida en la puerta. Recoge las cuadrículas en las carpetas: las usaremos en la sesión 3.",
        diu: ["Digueu-me una cosa que ha de tenir un bon repte.|Decidme algo que tiene que tener un buen reto.",
          "La setmana vinent programareu el vostre repte. Ja sabeu com el resoldreu?|La semana que viene programaréis vuestro reto. ¿Ya sabéis cómo lo resolveréis?"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Dissenya un repte impossible: la bandera queda tancada entre roques o aigua.|Diseña un reto imposible: la bandera queda encerrada entre rocas o agua.",
        "Demana-li que faci la prova del dit des d'en Bit fins a la bandera. A l'app, que miri la comprovació «En Bit pot arribar a tot» i busqui per on es tanca el camí.|Pídele que haga la prueba del dedo desde Bit hasta la bandera. En la app, que mire la comprobación «Bit puede llegar a todo» y busque por dónde se cierra el camino."],
      ["Fa un repte massa fàcil: la bandera és a una o dues caselles d'en Bit.|Hace un reto demasiado fácil: la bandera está a una o dos casillas de Bit.",
        "Pregunta-li quants blocs caldrien per resoldre'l. Proposa-li allunyar la bandera o posar un obstacle al mig, i que pensi quina eina del curs faria servir el provador/a.|Pregúntale cuántos bloques harían falta para resolverlo. Propónle alejar la bandera o poner un obstáculo en medio, y que piense qué herramienta del curso usaría el probador/a."],
      ["Omple el mapa de coses sense un objectiu clar (estrelles, caixes i bandera barrejades).|Llena el mapa de cosas sin un objetivo claro (estrellas, cajas y bandera mezcladas).",
        "Demana-li que digui l'objectiu en una sola frase: «En Bit ha de…». Si no pot, que triï un objectiu i tregui el que no hi encaixa.|Pídele que diga el objetivo en una sola frase: «Bit tiene que…». Si no puede, que elija un objetivo y quite lo que no encaja."],
      ["Dibuixa un camí a l'editor i no entén per què han aparegut arbres a la resta de caselles.|Dibuja un camino en el editor y no entiende por qué han aparecido árboles en el resto de casillas.",
        "Llegiu junts l'ajuda de l'eina «Camí»: si hi ha camí, en Bit només hi pot anar per dins. Pot fer un mapa tot d'herba (sense camí) o dibuixar el camí sencer.|Leed juntos la ayuda de la herramienta «Camino»: si hay camino, Bit solo puede ir por dentro. Puede hacer un mapa todo de hierba (sin camino) o dibujar el camino entero."],
      ["Al repte «Salta la roca», la funció no acaba mirant cap a la dreta i el segon salt falla.|En el reto «Salta la roca», la función no termina mirando hacia la derecha y el segundo salto falla.",
        "Que executi pas a pas i s'aturi just quan acaba la primera crida: cap on mira en Bit? Què li falta perquè torni a mirar a la dreta?|Que ejecute paso a paso y se pare justo cuando termina la primera llamada: ¿hacia dónde mira Bit? ¿Qué le falta para que vuelva a mirar a la derecha?"]
    ],
    diff: {
      mes: "Fer la fitxa «És un bon repte?» i, després, afegir al seu esbós un segon objectiu (una caixa per repartir o estrelles) que obligui a fer servir una eina diferent. També poden dissenyar una versió «difícil» a la graella de recanvi.|Hacer la ficha «¿Es un buen reto?» y, después, añadir a su boceto un segundo objetivo (una caja para repartir o estrellas) que obligue a usar una herramienta diferente. También pueden diseñar una versión «difícil» en la cuadrícula de recambio.",
      menys: "Començar amb un mapa més petit (fer servir només 5 × 4 caselles de la graella) i un sol objectiu: arribar a la bandera amb un parell de revolts. Als reptes de repàs, fer primer el del terra de colors i el de les estrelles, amb la pista a mà.|Empezar con un mapa más pequeño (usar solo 5 × 4 casillas de la cuadrícula) y un solo objetivo: llegar a la bandera con un par de curvas. En los retos de repaso, hacer primero el del suelo de colores y el de las estrellas, con la pista a mano."
    },
    aval: {
      ticket: ["Digues dues coses que ha de tenir un bon repte.|Di dos cosas que tiene que tener un buen reto.",
        "Quin és l'objectiu del teu repte i quin obstacle hi has posat?|¿Cuál es el objetivo de tu reto y qué obstáculo has puesto?"],
      rubric: [
        ["Criteris d'un bon repte|Criterios de un buen reto", "Explica que un bon repte té objectiu, obstacles i solució, i reconeix un repte massa fàcil o impossible.|Explica que un buen reto tiene objetivo, obstáculos y solución, y reconoce un reto demasiado fácil o imposible.", "Reconeix un bon repte quan el veu, però encara no diu per què.|Reconoce un buen reto cuando lo ve, pero todavía no dice por qué."],
        ["Repàs de les eines|Repaso de las herramientas", "Resol els quatre reptes de repàs triant l'eina adequada (bucle, condició, funció, variable).|Resuelve los cuatro retos de repaso eligiendo la herramienta adecuada (bucle, condición, función, variable).", "Resol dos o tres reptes, o els quatre amb pistes.|Resuelve dos o tres retos, o los cuatro con pistas."],
        ["Disseny propi|Diseño propio", "Dibuixa l'esbós, el passa a l'editor i el desa amb un objectiu clar i un camí possible.|Dibuja el boceto, lo pasa al editor y lo guarda con un objetivo claro y un camino posible.", "Desa un repte a l'editor, però és massa fàcil o li costa explicar-ne l'objectiu.|Guarda un reto en el editor, pero es demasiado fácil o le cuesta explicar su objetivo."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot ensenyar el repte que ha dissenyat i explicar-vos-en l'objectiu. També podeu fer junts l'activitat «Un repte per a algú de casa»: una habitació es converteix en l'illa d'en Bit i una persona fa de robot.|En casa, con el móvil, vuestro hijo o hija os puede enseñar el reto que ha diseñado y explicaros su objetivo. También podéis hacer juntos la actividad «Un reto para alguien de casa»: una habitación se convierte en la isla de Bit y una persona hace de robot.",
    slides: [
      { id: 's1', k: 'portada', t: "Dissenya el teu repte|Diseña tu reto", x: "Comença el projecte final: cada programador/a crearà un repte per a en Bit.|Empieza el proyecto final: cada programador/a creará un reto para Bit.",
        nota: "Explica que aquesta és l'última unitat del curs i que el protagonista serà el repte de cadascú.|Explica que esta es la última unidad del curso y que el protagonista será el reto de cada uno." },
      { id: 's2', k: 'pregunta', t: "El vostre repte preferit|Vuestro reto preferido", x: "Quin repte d'en Bit us ha agradat més de tot el curs? Per què?|¿Qué reto de Bit os ha gustado más de todo el curso? ¿Por qué?",
        nota: "Apunta les raons a la pissarra: les farem servir per definir què fa bo un repte.|Apunta las razones en la pizarra: las usaremos para definir qué hace bueno un reto." },
      { id: 's3', k: 'concepte', t: "La Fira dels Reptes|La Feria de los Retos", punts: ["Sessió 1: dissenyes el teu repte|Sesión 1: diseñas tu reto", "Sessió 2: el programes i el millores|Sesión 2: lo programas y lo mejoras", "Sessió 3: el prova un company/a|Sesión 3: lo prueba un compañero/a", "Sessió 4: el presentes i reps el diploma|Sesión 4: lo presentas y recibes el diploma"],
        nota: "Deixa clar que el repte es guarda a l'app i que el treballaran durant les quatre sessions.|Deja claro que el reto se guarda en la app y que lo trabajarán durante las cuatro sesiones." },
      { id: 's4', k: 'anim', t: "La caixa d'eines|La caja de herramientas", anim: 'u8tools', x: "Tot el que heu après aquest curs, a punt per fer-lo servir.|Todo lo que habéis aprendido este curso, listo para usarlo.",
        nota: "Per a cada eina, demana un exemple: on l'heu fet servir? Quin repte resolia?|Para cada herramienta, pide un ejemplo: ¿dónde la habéis usado? ¿Qué reto resolvía?" },
      { id: 's5', k: 'anim', t: "Un bon repte té…|Un buen reto tiene…", anim: 'u8good', punts: ["Un objectiu clar|Un objetivo claro", "Obstacles que fan pensar|Obstáculos que hacen pensar", "Una dificultat al punt|Una dificultad en su punto", "Una solució|Una solución"],
        nota: "Relaciona cada condició amb les raons que han dit a la diapositiva 2.|Relaciona cada condición con las razones que han dicho en la diapositiva 2." },
      { id: 's6', k: 'anim', t: "Ni massa fàcil ni impossible|Ni demasiado fácil ni imposible", anim: 'u8level', x: "El millor repte fa pensar, però té solució.|El mejor reto hace pensar, pero tiene solución.",
        nota: "Pregunta què senten amb un repte massa fàcil (avorriment) i amb un d'impossible (ràbia). El bon repte està al mig.|Pregunta qué sienten con un reto demasiado fácil (aburrimiento) y con uno imposible (rabia). El buen reto está en medio." },
      { id: 's7', k: 'demo', t: "Aquest repte és bo?|¿Este reto es bueno?", x: "Quants blocs calen per arribar a la bandera?|¿Cuántos bloques hacen falta para llegar a la bandera?",
        demo: { w: { map: ['>F...', '...R.', '.~...'] }, prog: 'f' },
        nota: "Abans d'executar, que diguin quants blocs calen. Resposta: un de sol. És massa fàcil: com el milloraríeu?|Antes de ejecutar, que digan cuántos bloques hacen falta. Respuesta: uno solo. Es demasiado fácil: ¿cómo lo mejoraríais?" },
      { id: 's8', k: 'demo', t: "Un repte al punt|Un reto en su punto", x: "Bandera, estrella, roques i aigua… i es pot resoldre amb bucles.|Bandera, estrella, rocas y agua… y se puede resolver con bucles.",
        demo: { w: { map: ['>##*.', 'R.R#.', '~~.#F'] }, prog: '3{ f } r 2{ f } l f' },
        nota: "Abans d'executar, que la classe digui el camí amb paraules. Fes notar l'objectiu, els obstacles i que té solució.|Antes de ejecutar, que la clase diga el camino con palabras. Haz notar el objetivo, los obstáculos y que tiene solución." },
      { id: 's9', k: 'anim', t: "Primer, en paper|Primero, en papel", anim: 'u8paper', x: "Un esbós ràpid per pensar la idea; després, a la pantalla.|Un boceto rápido para pensar la idea; después, a la pantalla.",
        nota: "Explica que els dissenyadors de veritat també fan esbossos: és més ràpid canviar un dibuix que un programa.|Explica que los diseñadores de verdad también hacen bocetos: es más rápido cambiar un dibujo que un programa." },
      { id: 's10', k: 'activitat', t: "L'estudi de disseny|El estudio de diseño", timer: 12, punts: ["Decideix l'objectiu i escriu-lo a sota.|Decide el objetivo y escríbelo debajo.", "Dibuixa en Bit amb una fletxa cap on mira.|Dibuja a Bit con una flecha hacia donde mira.", "Posa obstacles i, si vols, estrelles o caixes.|Pon obstáculos y, si quieres, estrellas o cajas.", "Quan acabis, passa la graella al company/a.|Cuando termines, pasa la cuadrícula al compañero/a."],
        nota: "Recorda que la graella té la mateixa mida que l'editor de l'app (7 × 6): no cal omplir-la tota.|Recuerda que la cuadrícula tiene el mismo tamaño que el editor de la app (7 × 6): no hace falta llenarla toda." },
      { id: 's11', k: 'activitat', t: "La prova del dit|La prueba del dedo", punts: ["El company/a segueix el camí amb el dit, sense parlar.|El compañero/a sigue el camino con el dedo, sin hablar.", "Després diu: massa fàcil, al punt o impossible.|Después dice: demasiado fácil, en su punto o imposible.", "L'autor/a pot fer un sol canvi.|El autor/a puede hacer un solo cambio."],
        nota: "Insisteix que la prova del dit no és per jutjar: és la primera prova del repte.|Insiste en que la prueba del dedo no es para juzgar: es la primera prueba del reto." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Dissenya el teu repte».|Abre la sesión «Diseña tu reto».", "Fes «Descobreix» i els quizzes.|Haz «Descubre» y los quizzes.", "El repte per a casa: toca «Ara no».|El reto para casa: toca «Ahora no».", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Comprova que tothom ha entès el quiz dels tres reptes: és el resum de la teoria.|Comprueba que todo el mundo ha entendido el quiz de los tres retos: es el resumen de la teoría." },
      { id: 's13', k: 'demo', t: "Escalfem: on acabarà?|Calentamos: ¿dónde terminará?", x: "En Bit mira amunt. Programa: Repeteix 2 vegades { Endavant, Endavant, Gira a la dreta }. A, B o C?|Bit mira arriba. Programa: Repite 2 veces { Adelante, Adelante, Gira a la derecha }. ¿A, B o C?",
        demo: { w: { map: ['A....', '##BC.', '#....', '^....'] }, prog: '2{ f f r }' },
        nota: "Resposta: B. Si algú diu A, potser ha fet el bucle una sola vegada; si diu C, ha comptat una casella de més.|Respuesta: B. Si alguien dice A, quizá ha hecho el bucle una sola vez; si dice C, ha contado una casilla de más." },
      { id: 's14', k: 'repte', t: "Una eina, un repte|Una herramienta, un reto", timer: 10, blocks: ['Repeteix|Repite', 'Si… si no…|Si… si no…', 'Funció|Función', 'Suma 1|Suma 1'],
        punts: ["1. El terra de colors: bucle i llapis|1. El suelo de colores: bucle y lápiz", "2. Les tres illes: condicions i «fins que»|2. Las tres islas: condiciones y «hasta que»", "3. Salta la roca: funcions|3. Salta la roca: funciones", "4. Compta les estrelles: variables|4. Cuenta las estrellas: variables"],
        nota: "Si algú s'encalla, pregunta-li quina eina del curs creu que demana el repte abans de donar-li cap pista.|Si alguien se atasca, pregúntale qué herramienta del curso cree que pide el reto antes de darle ninguna pista." },
      { id: 's15', k: 'activitat', t: "Crea: el teu repte a la pantalla|Crea: tu reto en la pantalla", timer: 10, punts: ["Tria una eina i toca les caselles.|Elige una herramienta y toca las casillas.", "Toca en Bit una altra vegada per girar-lo.|Toca a Bit otra vez para girarlo.", "Escriu el nom del repte.|Escribe el nombre del reto.", "Desa'l quan tot estigui en verd.|Guárdalo cuando todo esté en verde."],
        nota: "Si algú no ha acabat, pot desar-lo igualment (si les comprovacions són verdes) i millorar-lo a la sessió 2.|Si alguien no ha terminado, puede guardarlo igualmente (si las comprobaciones están en verde) y mejorarlo en la sesión 2." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un bon repte té objectiu, obstacles i solució.|Un buen reto tiene objetivo, obstáculos y solución.", "Ni massa fàcil ni impossible: al punt.|Ni demasiado fácil ni imposible: en su punto.", "Primer l'esbós en paper, després la pantalla.|Primero el boceto en papel, después la pantalla."],
        nota: "Avança que la setmana vinent programaran el seu propi repte i el faran encara millor.|Avanza que la semana que viene programarán su propio reto y lo harán todavía mejor." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues dues coses que ha de tenir un bon repte.|Di dos cosas que tiene que tener un buen reto.", "Quin és l'objectiu del teu repte?|¿Cuál es el objetivo de tu reto?"],
        nota: "Anota qui no ha pogut desar el repte: a la sessió 2 l'app li deixa dissenyar-lo abans de programar-lo.|Anota quién no ha podido guardar el reto: en la sesión 2 la app le deja diseñarlo antes de programarlo." }
    ],
    print: [
      { id: 'p1', t: "Graella del meu repte|Cuadrícula de mi reto", k: 'graella', w: 7, h: 6,
        intro: "Dibuixa el teu repte amb els símbols de la llegenda. La graella té la mateixa mida que l'editor de l'app: no cal omplir-la tota.|Dibuja tu reto con los símbolos de la leyenda. La cuadrícula tiene el mismo tamaño que el editor de la app: no hace falta llenarla toda.",
        items: [
          { q: "Quin és l'objectiu? «En Bit ha de…»|¿Cuál es el objetivo? «Bit tiene que…»" },
          { q: "Quins obstacles hi has posat? Per què fan pensar?|¿Qué obstáculos has puesto? ¿Por qué hacen pensar?" },
          { q: "Prova del dit (ho escriu el company/a): massa fàcil, al punt o impossible?|Prueba del dedo (lo escribe el compañero/a): ¿demasiado fácil, en su punto o imposible?" }
        ] },
      { id: 'p2', t: "Fitxa: és un bon repte?|Ficha: ¿es un buen reto?", k: 'fitxa',
        intro: "Mira cada repte i decideix si és massa fàcil, al punt o impossible. Explica per què.|Mira cada reto y decide si es demasiado fácil, en su punto o imposible. Explica por qué.",
        items: [
          { q: "Aquest repte és massa fàcil, al punt o impossible?|¿Este reto es demasiado fácil, en su punto o imposible?", w: { map: ['>F...', '.....', '..R..'] },
            sol: "Massa fàcil: amb un sol «Endavant» ja s'arriba a la bandera.|Demasiado fácil: con un solo «Adelante» ya se llega a la bandera." },
          { q: "I aquest?|¿Y este?", w: { map: ['>##~F', 'R.#~~', '..###'] },
            sol: "Impossible: l'aigua tanca la bandera i en Bit no hi pot arribar.|Imposible: el agua encierra la bandera y Bit no puede llegar." },
          { q: "I aquest? Si està al punt, escriu-ne una solució amb blocs.|¿Y este? Si está en su punto, escribe una solución con bloques.", w: { map: ['>##*.', 'R.R#.', '~~.#F'] }, solProg: '3{ f } r 2{ f } l f',
            sol: "Al punt: té objectiu, obstacles i solució.|En su punto: tiene objetivo, obstáculos y solución." },
          { q: "Tria el repte massa fàcil o l'impossible i explica com el canviaries perquè estigués al punt.|Elige el reto demasiado fácil o el imposible y explica cómo lo cambiarías para que estuviera en su punto.",
            sol: "Resposta oberta. Per exemple: allunyar la bandera i posar-hi una roca pel mig, o treure una casella d'aigua perquè hi hagi camí.|Respuesta abierta. Por ejemplo: alejar la bandera y poner una roca en medio, o quitar una casilla de agua para que haya camino." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Construeix-lo i prova'l ---------- */
  'r8-2': {
    obj: [
      "L'alumne/a programa el seu propi repte fins que en Bit el resol.|El alumno/a programa su propio reto hasta que Bit lo resuelve.",
      "L'alumne/a localitza i corregeix errors fent servir l'execució pas a pas i canviant només el bloc que falla.|El alumno/a localiza y corrige errores usando la ejecución paso a paso y cambiando solo el bloque que falla.",
      "L'alumne/a millora el mapa del seu repte després de provar-lo.|El alumno/a mejora el mapa de su reto después de probarlo.",
      "L'alumne/a escurça un programa amb bucles o funcions sense canviar el que fa.|El alumno/a acorta un programa con bucles o funciones sin cambiar lo que hace."
    ],
    comp: [
      "Competència digital (CD5): crear, provar i depurar un programa propi|Competencia digital (CD5): crear, probar y depurar un programa propio",
      "Pensament computacional: depuració, iteració (dissenya → programa → prova → millora) i abstracció amb bucles i funcions|Pensamiento computacional: depuración, iteración (diseña → programa → prueba → mejora) y abstracción con bucles y funciones",
      "Matemàtiques: comptar i comparar el nombre de blocs de dos programes que fan el mateix|Matemáticas: contar y comparar el número de bloques de dos programas que hacen lo mismo",
      "Aprendre a aprendre: perseverar davant l'error i entendre'l com a part del procés|Aprender a aprender: perseverar ante el error y entenderlo como parte del proceso"
    ],
    vocab: [
      ["Provar|Probar", "Executar el programa per veure si fa el que volíem.|Ejecutar el programa para ver si hace lo que queríamos."],
      ["Depurar|Depurar", "Buscar l'error d'un programa i arreglar-lo.|Buscar el error de un programa y arreglarlo."],
      ["Cicle|Ciclo", "Dissenyar, programar, provar i millorar, i tornar a començar.|Diseñar, programar, probar y mejorar, y volver a empezar."],
      ["Versió|Versión", "Cada vegada que canviem i millorem un programa o un mapa, en fem una versió nova.|Cada vez que cambiamos y mejoramos un programa o un mapa, hacemos una versión nueva."],
      ["Programa més curt|Programa más corto", "Un programa que fa el mateix amb menys blocs, gràcies als bucles i les funcions.|Un programa que hace lo mismo con menos bloques, gracias a los bucles y las funciones."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Construeix-lo i prova'l»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Constrúyelo y pruébalo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La carpeta de cada alumne/a amb la graella de la sessió 1|La carpeta de cada alumno/a con la cuadrícula de la sesión 1",
        "Llapis de color vermell (per marcar bugs) i llapis normal|Lápiz de color rojo (para marcar bugs) y lápiz normal"
      ],
      imprimir: ["Fitxa del depurador/a|Ficha del depurador/a", "Graella: versió 2 del meu repte|Cuadrícula: versión 2 de mi reto"],
      prep: [
        "Imprimir una fitxa del depurador/a per parella i una graella «versió 2» per alumne/a.|Imprimir una ficha del depurador/a por pareja y una cuadrícula «versión 2» por alumno/a.",
        "Comprovar qui no va desar el repte a la sessió 1: a l'app, el primer pas «Dissenya» li deixarà crear-lo ara.|Comprobar quién no guardó el reto en la sesión 1: en la app, el primer paso «Diseña» le dejará crearlo ahora.",
        "Provar abans la demostració de la diapositiva 5 per saber on xoca en Bit.|Probar antes la demostración de la diapositiva 5 para saber dónde choca Bit.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i el laboratori de proves|Recordamos y el laboratorio de pruebas", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre què ha de tenir un bon repte. Explica la missió d'avui: al laboratori de proves de l'illa, els inventors construeixen, proven i milloren. Cada alumne/a té la graella de la sessió 1 a la taula.|Haz la pregunta de repaso sobre qué tiene que tener un buen reto. Explica la misión de hoy: en el laboratorio de pruebas de la isla, los inventores construyen, prueban y mejoran. Cada alumno/a tiene la cuadrícula de la sesión 1 en la mesa.",
        diu: ["Què ha de tenir un bon repte? Digueu-me les quatre coses.|¿Qué tiene que tener un buen reto? Decidme las cuatro cosas.",
          "Avui el vostre repte cobrarà vida: el programareu i el provareu.|Hoy vuestro reto cobrará vida: lo programaréis y lo probaréis."],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El cicle del programador/a|El ciclo del programador/a", fase: 'teoria',
        fa: "Explica el cicle dissenya → programa → prova → millora amb l'animació. Projecta la demostració del bug: abans d'executar-la, la classe prediu on xocarà en Bit. Repassa com es caça un bug i mostra com un bucle i una funció escurcen un programa; a la darrera demostració, compteu quants blocs s'estalvien.|Explica el ciclo diseña → programa → prueba → mejora con la animación. Proyecta la demostración del bug: antes de ejecutarla, la clase predice dónde chocará Bit. Repasa cómo se caza un bug y muestra cómo un bucle y una función acortan un programa; en la última demostración, contad cuántos bloques se ahorran.",
        diu: ["Algú creu que els programadors ho encerten a la primera?|¿Alguien cree que los programadores lo aciertan a la primera?",
          "On xocarà en Bit? A quin bloc és el bug?|¿Dónde chocará Bit? ¿En qué bloque está el bug?",
          "Sense la funció, quants blocs caldrien? I amb la funció?|Sin la función, ¿cuántos bloques harían falta? ¿Y con la función?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "Els depuradors|Los depuradores", fase: 'desconnectat',
        fa: "Per parelles, fan la fitxa del depurador/a: als dos primers exercicis, troben el bug (el marquen en vermell) i escriuen el bloc correcte; al tercer i al quart, escriuen una versió més curta amb un bucle o una funció. Després, cadascú dibuixa a la graella «versió 2» un canvi que vulgui fer al seu repte. Si hi ha temps, un voluntari/ària fa de robot davant la classe i executa un programa de la fitxa.|Por parejas, hacen la ficha del depurador/a: en los dos primeros ejercicios, encuentran el bug (lo marcan en rojo) y escriben el bloque correcto; en el tercero y el cuarto, escriben una versión más corta con un bucle o una función. Después, cada uno dibuja en la cuadrícula «versión 2» un cambio que quiera hacer en su reto. Si hay tiempo, un voluntario/a hace de robot delante de la clase y ejecuta un programa de la ficha.",
        diu: ["Seguiu el programa amb el dit, bloc a bloc. On comença a anar malament?|Seguid el programa con el dedo, bloque a bloque. ¿Dónde empieza a ir mal?",
          "Quin tros es repeteix? Quantes vegades?|¿Qué trozo se repite? ¿Cuántas veces?",
          "Quin canvi faries al teu repte perquè fos més interessant?|¿Qué cambio harías en tu reto para que fuera más interesante?"],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles i després individual|Por parejas y después individual" },
      { min: 15, t: "A l'ordinador: programa el teu repte|En el ordenador: programa tu reto", fase: 'ordinador',
        fa: "Cada alumne/a revisa el mapa (o el crea, si no el té) i el programa fins que en Bit el resol. Després fa la pregunta del bug, la predicció de la funció i els dos exercicis de depuració. Passeja per l'aula i demana a qui xoca que t'ensenyi el bloc on comença el problema amb «Pas a pas».|Cada alumno/a revisa el mapa (o lo crea, si no lo tiene) y lo programa hasta que Bit lo resuelve. Después hace la pregunta del bug, la predicción de la función y los dos ejercicios de depuración. Pasea por el aula y pide a quien choca que te enseñe el bloque donde empieza el problema con «Paso a paso».",
        diu: ["Abans de programar, digues-me el pla: quins trossos té el teu repte?|Antes de programar, dime el plan: ¿qué trozos tiene tu reto?",
          "En Bit ha xocat? Molt bé: ara ja saps on buscar.|¿Bit ha chocado? Muy bien: ahora ya sabes dónde buscar.",
          "Fes «Pas a pas» i atura't al bloc que falla.|Haz «Paso a paso» y párate en el bloque que falla."],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins a «Investiga»: revisar el mapa, programar el propi repte, la pregunta del bug, la predicció de «Puja i gira», el bloc equivocat i el programa del llac.|Desde «Recuerda» hasta «Investiga»: revisar el mapa, programar el propio reto, la pregunta del bug, la predicción de «Sube y gira», el bloque equivocado y el programa del lago.", org: "Individual|Individual" },
      { min: 8, t: "Reptes: fes-ho més curt|Retos: hazlo más corto", fase: 'ordinador',
        fa: "Feu la pausa activa del cicle tots junts. Després, resolen l'escala del far (amb 6 blocs com a molt) i el repartiment amb la funció «Reparteix» (amb 7 blocs com a molt). Qui acabi ajuda un company/a amb preguntes, sense tocar-li el ratolí.|Haced la pausa activa del ciclo todos juntos. Después, resuelven la escalera del faro (con 6 bloques como mucho) y el reparto con la función «Reparte» (con 7 bloques como mucho). Quien termine ayuda a un compañero/a con preguntas, sin tocarle el ratón.",
        diu: ["Quin tros fa pujar un graó? Aquest és el que es repeteix.|¿Qué trozo hace subir un peldaño? Ese es el que se repite.",
          "El comptador de blocs diu que no et queden blocs? Busca el que es repeteix.|¿El contador de bloques dice que no te quedan bloques? Busca lo que se repite."],
        slides: ['s13'], app: "«Pausa activa» i els dos reptes de «Reptes».|«Pausa activa» y los dos retos de «Retos».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 9, t: "Crea: millora'l i fes-lo més curt|Crea: mejóralo y hazlo más corto", fase: 'crea',
        fa: "Amb la graella «versió 2» al costat, cada alumne/a millora el mapa a l'editor (el troba tal com el va desar) i el torna a programar en una versió més curta, amb un bucle, una funció o «Repeteix fins que». L'app no la desa fins que hi ha alguna d'aquestes eines.|Con la cuadrícula «versión 2» al lado, cada alumno/a mejora el mapa en el editor (lo encuentra tal como lo guardó) y lo vuelve a programar en una versión más corta, con un bucle, una función o «Repite hasta que». La app no la guarda hasta que hay alguna de estas herramientas.",
        diu: ["Quin canvi has fet al mapa? Continua tenint solució?|¿Qué cambio has hecho en el mapa? ¿Sigue teniendo solución?",
          "Quants blocs tenia la primera versió? I la nova?|¿Cuántos bloques tenía la primera versión? ¿Y la nueva?"],
        slides: ['s14'], app: "Pas «Crea»: millorar el mapa a l'editor i programar-ne la versió curta (es desa a «Projectes»).|Paso «Crea»: mejorar el mapa en el editor y programar la versión corta (se guarda en «Proyectos»).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el cicle i les idees de la sessió amb el resum. Deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Guardeu la graella «versió 2» a la carpeta.|Repasa el ciclo y las ideas de la sesión con el resumen. Deja que respondan las preguntas finales de la app y haz el ticket de salida. Guardad la cuadrícula «versión 2» en la carpeta.",
        diu: ["Quin bug heu trobat avui al vostre repte?|¿Qué bug habéis encontrado hoy en vuestro reto?",
          "La setmana vinent, el vostre repte el provarà un company/a!|¡La semana que viene, vuestro reto lo probará un compañero/a!"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Quan en Bit xoca, esborra tot el programa i torna a començar.|Cuando Bit choca, borra todo el programa y vuelve a empezar.",
        "Pregunta-li fins on ha anat bé. Que faci «Pas a pas» fins al bloc que falla i canviï només aquell.|Pregúntale hasta dónde ha ido bien. Que haga «Paso a paso» hasta el bloque que falla y cambie solo ese."],
      ["Per resoldre el seu repte, el canvia perquè sigui més fàcil (treu les roques).|Para resolver su reto, lo cambia para que sea más fácil (quita las rocas).",
        "Recorda-li que el repte l'ha de resoldre un company/a: si treu els obstacles, deixa de fer pensar. Millor que busqui el bug al programa.|Recuérdale que el reto lo tiene que resolver un compañero/a: si quita los obstáculos, deja de hacer pensar. Mejor que busque el bug en el programa."],
      ["Posa el bucle però hi deixa a dins blocs de més (o en falten) i en Bit se'n va del camí.|Pone el bucle pero deja dentro bloques de más (o faltan) y Bit se sale del camino.",
        "Que digui en veu alta el tros que es repeteix una sola vegada i el compari amb el que hi ha dins del «Repeteix».|Que diga en voz alta el trozo que se repite una sola vez y lo compare con lo que hay dentro del «Repite»."],
      ["A la funció «Reparteix», oblida «Deixa la caixa» o el posa abans d'arribar a la casa.|En la función «Reparte», olvida «Deja la caja» o lo pone antes de llegar a la casa.",
        "Que descompongui el repartiment en quatre trossos, com a la unitat 1: anar a la caixa, agafar-la, anar a la casa, deixar-la. Cada tros ha de ser dins de la funció.|Que descomponga el reparto en cuatro trozos, como en la unidad 1: ir a la caja, cogerla, ir a la casa, dejarla. Cada trozo tiene que estar dentro de la función."],
      ["El seu repte és tan curt que no sap on posar un bucle a la versió curta.|Su reto es tan corto que no sabe dónde poner un bucle en la versión corta.",
        "És el moment de millorar el mapa: proposa-li allargar el camí amb un tros que es repeteixi (una escala, una recta llarga) i tornar-lo a provar.|Es el momento de mejorar el mapa: propónle alargar el camino con un trozo que se repita (una escalera, una recta larga) y volver a probarlo."]
    ],
    diff: {
      mes: "Fer una tercera versió del seu repte amb el mínim de blocs possible i comparar-la amb la d'un company/a. També poden afegir al mapa un segon objectiu (estrelles o una caixa) i programar-lo amb una funció.|Hacer una tercera versión de su reto con el mínimo de bloques posible y compararla con la de un compañero/a. También pueden añadir al mapa un segundo objetivo (estrellas o una caja) y programarlo con una función.",
      menys: "Programar el repte a trossos: primer només fins al primer revolt, provar-lo i després continuar. A la fitxa, fer els dos exercicis de bugs amb la versió de blocs a la vista i deixar l'escurçament per a més endavant.|Programar el reto a trozos: primero solo hasta la primera curva, probarlo y después continuar. En la ficha, hacer los dos ejercicios de bugs con la versión de bloques a la vista y dejar el acortamiento para más adelante."
    },
    aval: {
      ticket: ["Quins són els quatre passos del cicle del programador/a?|¿Cuáles son los cuatro pasos del ciclo del programador/a?",
        "Com has fet més curt el programa del teu repte?|¿Cómo has hecho más corto el programa de tu reto?"],
      rubric: [
        ["Programa propi|Programa propio", "Programa el seu repte i en Bit el resol sense ajuda.|Programa su reto y Bit lo resuelve sin ayuda.", "Programa el seu repte amb ajuda o el resol només en part.|Programa su reto con ayuda o lo resuelve solo en parte."],
        ["Depuració|Depuración", "Fa servir «Pas a pas» per trobar el bloc que falla i el canvia sense esborrar la resta.|Usa «Paso a paso» para encontrar el bloque que falla y lo cambia sin borrar el resto.", "Troba l'error provant canvis, de vegades sense saber quin bloc fallava.|Encuentra el error probando cambios, a veces sin saber qué bloque fallaba."],
        ["Millora i escurçament|Mejora y acortamiento", "Millora el mapa i en fa una versió més curta amb bucles o funcions que continua funcionant.|Mejora el mapa y hace una versión más corta con bucles o funciones que sigue funcionando.", "Fa un canvi al mapa o al programa, però la versió curta encara no li surt.|Hace un cambio en el mapa o en el programa, pero la versión corta todavía no le sale."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla pot ensenyar-vos el seu repte i les dues versions del programa (la llarga i la curta, a «Projectes»). Pregunteu-li quin bug ha trobat i com l'ha arreglat.|En casa, con el móvil, vuestro hijo o hija puede enseñaros su reto y las dos versiones del programa (la larga y la corta, en «Proyectos»). Preguntadle qué bug ha encontrado y cómo lo ha arreglado.",
    slides: [
      { id: 's1', k: 'portada', t: "Construeix-lo i prova'l|Constrúyelo y pruébalo", x: "Avui el vostre repte cobra vida: el programareu, el provareu i el millorareu.|Hoy vuestro reto cobra vida: lo programaréis, lo probaréis y lo mejoraréis.",
        nota: "Que tothom tingui a la taula la graella de la sessió 1.|Que todo el mundo tenga en la mesa la cuadrícula de la sesión 1." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Què ha de tenir un bon repte?|¿Qué tiene que tener un buen reto?",
        nota: "Resposta: un objectiu clar, obstacles, una dificultat al punt i una solució.|Respuesta: un objetivo claro, obstáculos, una dificultad en su punto y una solución." },
      { id: 's3', k: 'concepte', t: "El laboratori de proves|El laboratorio de pruebas", punts: ["Programar el teu repte|Programar tu reto", "Caçar els bugs|Cazar los bugs", "Millorar el mapa|Mejorar el mapa", "Fer-lo més curt|Hacerlo más corto"],
        nota: "Presenta les quatre feines del dia. Remarca que equivocar-se forma part del procés.|Presenta las cuatro tareas del día. Remarca que equivocarse forma parte del proceso." },
      { id: 's4', k: 'anim', t: "El cicle del programador/a|El ciclo del programador/a", anim: 'u8cycle', punts: ["Dissenya|Diseña", "Programa|Programa", "Prova|Prueba", "Millora… i torna-hi!|Mejora… ¡y vuelve a empezar!"],
        nota: "Pregunta en quin pas del cicle són ara: ja han dissenyat; avui toca programar, provar i millorar.|Pregunta en qué paso del ciclo están ahora: ya han diseñado; hoy toca programar, probar y mejorar." },
      { id: 's5', k: 'demo', t: "On falla?|¿Dónde falla?", x: "En Bit mira a la dreta. Programa: Endavant ×3, Gira a la dreta, Endavant ×2, Gira a l'esquerra, Endavant. On xocarà?|Bit mira a la derecha. Programa: Adelante ×3, Gira a la derecha, Adelante ×2, Gira a la izquierda, Adelante. ¿Dónde chocará?",
        demo: { w: { map: ['>##R', 'R.#R', 'R.#F'] }, prog: 'f f f r f f l f' },
        nota: "Resposta: al tercer «Endavant», contra la roca. El bug és un bloc que sobra. Pregunta com l'arreglarien.|Respuesta: en el tercer «Adelante», contra la roca. El bug es un bloque que sobra. Pregunta cómo lo arreglarían." },
      { id: 's6', k: 'concepte', t: "Com es caça un bug|Cómo se caza un bug", punts: ["Executa i mira on s'atura en Bit.|Ejecuta y mira dónde se para Bit.", "Fes «Pas a pas» fins al bloc que falla.|Haz «Paso a paso» hasta el bloque que falla.", "Canvia només aquell bloc.|Cambia solo ese bloque.", "Torna-ho a provar.|Vuelve a probarlo."],
        nota: "És el mateix mètode de la unitat 1: ara el faran servir amb el seu propi repte.|Es el mismo método de la unidad 1: ahora lo usarán con su propio reto." },
      { id: 's7', k: 'anim', t: "Més curt amb un bucle|Más corto con un bucle", anim: 'u8shrink', x: "8 blocs o 3 blocs: fan exactament el mateix.|8 bloques o 3 bloques: hacen exactamente lo mismo.",
        nota: "Pregunta quin dels dos programes és més fàcil de llegir i d'arreglar.|Pregunta cuál de los dos programas es más fácil de leer y de arreglar." },
      { id: 's8', k: 'demo', t: "Una funció per a cada graó|Una función para cada peldaño", x: "La funció «Esglaó» fa: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta. El programa la crida tres vegades.|La función «Escalón» hace: Adelante, Gira a la izquierda, Adelante, Gira a la derecha. El programa la llama tres veces.",
        demo: { w: { map: ['...F', '..##', '.##.', '>#..'] }, prog: 'A A A', fns: { A: 'f l f r' }, fnName: { A: 'Esglaó|Escalón' } },
        nota: "Compteu els blocs: sense funció, 12; amb funció, 4 a la funció i 3 crides.|Contad los bloques: sin función, 12; con función, 4 en la función y 3 llamadas." },
      { id: 's9', k: 'activitat', t: "Els depuradors|Los depuradores", timer: 12, punts: ["Exercicis 1 i 2: troba el bug i marca'l en vermell.|Ejercicios 1 y 2: encuentra el bug y márcalo en rojo.", "Exercicis 3 i 4: escriu una versió més curta.|Ejercicios 3 y 4: escribe una versión más corta.", "Graella «versió 2»: dibuixa una millora del teu repte.|Cuadrícula «versión 2»: dibuja una mejora de tu reto."],
        nota: "Si alguna parella acaba aviat, que faci de robot davant la classe amb un dels programes de la fitxa.|Si alguna pareja termina pronto, que haga de robot delante de la clase con uno de los programas de la ficha." },
      { id: 's10', k: 'concepte', t: "Escurça'l!|¡Acórtalo!", punts: ["Busca el tros que es repeteix.|Busca el trozo que se repite.", "Compta quantes vegades es repeteix.|Cuenta cuántas veces se repite.", "Posa'l dins d'un «Repeteix» o d'una funció.|Ponlo dentro de un «Repite» o de una función.", "Comprova que fa el mateix.|Comprueba que hace lo mismo."],
        nota: "Deixa aquesta diapositiva projectada mentre fan els exercicis 3 i 4.|Deja esta diapositiva proyectada mientras hacen los ejercicios 3 y 4." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador: el teu repte|Ahora, al ordenador: tu reto", timer: 15, punts: ["Revisa el mapa (o crea'l si no el tens).|Revisa el mapa (o créalo si no lo tienes).", "Programa'l fins que en Bit el resolgui.|Prográmalo hasta que Bit lo resuelva.", "Si falla, «Pas a pas».|Si falla, «Paso a paso».", "Para a la pausa activa.|Para en la pausa activa."],
        nota: "Si algú no va desar el repte a la sessió 1, el primer pas «Dissenya» li permet crear-lo ara.|Si alguien no guardó el reto en la sesión 1, el primer paso «Diseña» le permite crearlo ahora." },
      { id: 's12', k: 'demo', t: "Prediu: Puja i gira|Predice: Sube y gira", x: "La funció «Puja i gira» fa: Endavant, Endavant, Gira a la dreta. El programa la crida dues vegades. A, B o C?|La función «Sube y gira» hace: Adelante, Adelante, Gira a la derecha. El programa la llama dos veces. ¿A, B o C?",
        demo: { w: { map: ['A#B.', '#.#.', '^.C.'] }, prog: 'A A', fns: { A: 'f f r' }, fnName: { A: 'Puja i gira|Sube y gira' } },
        nota: "Resposta: B. Qui diu C ha cridat la funció tres vegades; qui diu A, només una.|Respuesta: B. Quien dice C ha llamado a la función tres veces; quien dice A, solo una." },
      { id: 's13', k: 'repte', t: "Reptes: fes-ho més curt|Retos: hazlo más corto", timer: 8, punts: ["1. L'escala del far: 6 blocs com a molt|1. La escalera del faro: 6 bloques como mucho", "2. Dues caixes, una funció: 7 blocs com a molt|2. Dos cajas, una función: 7 bloques como mucho"],
        nota: "Pista per a l'escala: un graó és «Endavant, Gira a l'esquerra, Endavant, Gira a la dreta».|Pista para la escalera: un peldaño es «Adelante, Gira a la izquierda, Adelante, Gira a la derecha»." },
      { id: 's14', k: 'activitat', t: "Crea: millora'l i fes-lo curt|Crea: mejóralo y hazlo corto", timer: 9, punts: ["Millora el mapa amb la idea de la graella «versió 2».|Mejora el mapa con la idea de la cuadrícula «versión 2».", "Comprova que continua tenint solució.|Comprueba que sigue teniendo solución.", "Programa'l amb un bucle, una funció o «fins que».|Prográmalo con un bucle, una función o «hasta que».", "Compara: quants blocs t'has estalviat?|Compara: ¿cuántos bloques te has ahorrado?"],
        nota: "La versió curta es desa a «Projectes». Si el mapa és molt curt, és millor allargar-lo abans.|La versión corta se guarda en «Proyectos». Si el mapa es muy corto, es mejor alargarlo antes." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Dissenya, programa, prova, millora… i torna-hi.|Diseña, programa, prueba, mejora… y vuelve a empezar.", "«Pas a pas» t'ajuda a trobar el bug.|«Paso a paso» te ayuda a encontrar el bug.", "Bucles i funcions fan programes més curts i clars.|Bucles y funciones hacen programas más cortos y claros."],
        nota: "Avança que a la sessió 3 un company/a provarà el repte de cadascú.|Avanza que en la sesión 3 un compañero/a probará el reto de cada uno." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quins són els quatre passos del cicle?|¿Cuáles son los cuatro pasos del ciclo?", "Com has fet més curt el teu programa?|¿Cómo has hecho más corto tu programa?"],
        nota: "Anota qui encara no ha resolt el seu propi repte: a la sessió 3 el provarà un company/a i ha de tenir solució.|Anota quién todavía no ha resuelto su propio reto: en la sesión 3 lo probará un compañero/a y tiene que tener solución." }
    ],
    print: [
      { id: 'p1', t: "Fitxa del depurador/a|Ficha del depurador/a", k: 'fitxa',
        intro: "Seguiu cada programa amb el dit, bloc a bloc. Marqueu en vermell el bloc que falla i escriviu-ne la versió bona.|Seguid cada programa con el dedo, bloque a bloque. Marcad en rojo el bloque que falla y escribid su versión buena.",
        items: [
          { q: "En Bit hauria d'arribar a la bandera, però se surt del mapa. Quin bloc és el bug?|Bit debería llegar a la bandera, pero se sale del mapa. ¿Qué bloque es el bug?", w: { map: ['..F.', '..#.', '>##.'] }, prog: 'f f r f f', solProg: 'f f l f f',
            sol: "El bug és «Gira a la dreta»: ha de ser «Gira a l'esquerra» per pujar cap a la bandera.|El bug es «Gira a la derecha»: tiene que ser «Gira a la izquierda» para subir hacia la bandera." },
          { q: "A aquest programa li falta un bloc i en Bit xoca. Quin bloc falta i on?|A este programa le falta un bloque y Bit choca. ¿Qué bloque falta y dónde?", w: { map: ['>#R', 'R#R', 'R#F'] }, prog: 'f r f l f', solProg: 'f r f f l f',
            sol: "Falta un «Endavant» després del primer: en Bit ha de baixar dues caselles abans de girar.|Falta un «Adelante» después del primero: Bit tiene que bajar dos casillas antes de girar." },
          { q: "Aquest programa funciona, però és molt llarg. Escriu-lo amb un «Repeteix».|Este programa funciona, pero es muy largo. Escríbelo con un «Repite».", w: { map: ['...F', '..##', '.##.', '>#..'] }, prog: 'f l f r f l f r f l f', solProg: '3{ f l f r }',
            sol: "Repeteix 3 vegades: Endavant, Gira a l'esquerra, Endavant, Gira a la dreta.|Repite 3 veces: Adelante, Gira a la izquierda, Adelante, Gira a la derecha." },
          { q: "Aquí es repeteix el tros de repartir una caixa. Escriu una funció «Reparteix» i el programa que la fa servir.|Aquí se repite el trozo de repartir una caja. Escribe una función «Reparte» y el programa que la usa.", w: { map: ['>bHbH', '.....'] }, prog: 'f p f d f p f d', solProg: 'A A', solFns: { A: 'f p f d' },
            sol: "Funció Reparteix: Endavant, Agafa, Endavant, Deixa. Programa: Reparteix, Reparteix.|Función Reparte: Adelante, Coge, Adelante, Deja. Programa: Reparte, Reparte." },
          { q: "El teu repte: escriu els trossos del pla abans de programar-lo a l'ordinador.|Tu reto: escribe los trozos del plan antes de programarlo en el ordenador.",
            sol: "Resposta oberta. Comproveu que cada tros comença on acaba l'anterior i que el pla arriba a l'objectiu.|Respuesta abierta. Comprobad que cada trozo empieza donde termina el anterior y que el plan llega al objetivo." }
        ] },
      { id: 'p2', t: "Graella: versió 2 del meu repte|Cuadrícula: versión 2 de mi reto", k: 'graella', w: 7, h: 6,
        intro: "Dibuixa com quedarà el teu repte després de millorar-lo. Marca amb un cercle el que has canviat.|Dibuja cómo quedará tu reto después de mejorarlo. Marca con un círculo lo que has cambiado.",
        items: [
          { q: "Què has canviat i per què?|¿Qué has cambiado y por qué?" },
          { q: "Quina eina faràs servir per fer el programa més curt?|¿Qué herramienta usarás para hacer el programa más corto?" }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Que el provi algú altre ---------- */
  'r8-3': {
    obj: [
      "L'alumne/a prova el repte d'un company/a i el resol sense que l'autor/a li digui la solució.|El alumno/a prueba el reto de un compañero/a y lo resuelve sin que el autor/a le diga la solución.",
      "L'alumne/a valora un repte (claredat, dificultat, millores) i fa un comentari amable i útil: una cosa que li ha agradat i una idea per millorar.|El alumno/a valora un reto (claridad, dificultad, mejoras) y hace un comentario amable y útil: algo que le ha gustado y una idea para mejorar.",
      "L'alumne/a escolta els comentaris sobre el seu repte, dona les gràcies i decideix quins canvis hi fa.|El alumno/a escucha los comentarios sobre su reto, da las gracias y decide qué cambios hace.",
      "L'alumne/a millora el seu repte a partir dels comentaris i comprova que continua tenint solució.|El alumno/a mejora su reto a partir de los comentarios y comprueba que sigue teniendo solución."
    ],
    comp: [
      "Competència digital: col·laborar i comunicar-se amb respecte per millorar un producte digital|Competencia digital: colaborar y comunicarse con respeto para mejorar un producto digital",
      "Pensament computacional: provar amb usuaris i iterar un disseny a partir dels resultats|Pensamiento computacional: probar con usuarios e iterar un diseño a partir de los resultados",
      "Comunicació oral: donar i rebre comentaris constructius|Comunicación oral: dar y recibir comentarios constructivos",
      "Competència personal i social: empatia, respecte i acceptació de les opinions dels altres|Competencia personal y social: empatía, respeto y aceptación de las opiniones de los demás"
    ],
    vocab: [
      ["Provador/a|Probador/a", "La persona que prova un repte o un programa per primera vegada.|La persona que prueba un reto o un programa por primera vez."],
      ["Usuari/ària|Usuario/a", "La persona que fa servir el que hem creat.|La persona que usa lo que hemos creado."],
      ["Autor/a|Autor/a", "La persona que ha creat el repte.|La persona que ha creado el reto."],
      ["Comentari|Comentario", "El que diem d'un treball per ajudar a millorar-lo.|Lo que decimos de un trabajo para ayudar a mejorarlo."],
      ["Valorar|Valorar", "Pensar i dir com és una cosa: si és clara, fàcil o difícil, què li falta.|Pensar y decir cómo es algo: si es clara, fácil o difícil, qué le falta."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Que el provi algú altre»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Que lo pruebe otra persona»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "La carpeta de cada alumne/a amb les graelles de les sessions 1 i 2|La carpeta de cada alumno/a con las cuadrículas de las sesiones 1 y 2",
        "Unes quantes fitxes petites o post-its per escriure comentaris|Unas cuantas fichas pequeñas o pósits para escribir comentarios"
      ],
      imprimir: ["Targetes de comentaris|Tarjetas de comentarios", "Full del provador/a|Hoja del probador/a"],
      prep: [
        "Fer les parelles de provadors (les de la prova del dit de la sessió 1). Si el nombre és senar, feu un trio que roti.|Hacer las parejas de probadores (las de la prueba del dedo de la sesión 1). Si el número es impar, haced un trío que rote.",
        "Imprimir i retallar un paquet de targetes de comentaris per taula i un full del provador/a per alumne/a.|Imprimir y recortar un paquete de tarjetas de comentarios por mesa y una hoja del probador/a por alumno/a.",
        "Comprovar que tothom té el repte desat amb solució. Qui no, el pot acabar al primer pas «Dissenya» d'aquesta sessió.|Comprobar que todo el mundo tiene el reto guardado con solución. Quien no, lo puede terminar en el primer paso «Diseña» de esta sesión.",
        "Decidir el senyal per al canvi de lloc (una campaneta, unes palmades) perquè tothom es mogui alhora.|Decidir la señal para el cambio de sitio (una campanita, unas palmadas) para que todo el mundo se mueva a la vez."
      ]
    },
    plan: [
      { min: 5, t: "Recordem i comença la fira|Recordamos y empieza la feria", fase: 'inici',
        fa: "Fes la pregunta de repàs sobre com s'escurça un programa. Explica la missió: avui, a la plaça del poble, cada repte el provarà algú altre. Pregunta com se senten quan algú mira una cosa que han fet i què els agrada que els diguin.|Haz la pregunta de repaso sobre cómo se acorta un programa. Explica la misión: hoy, en la plaza del pueblo, cada reto lo probará otra persona. Pregunta cómo se sienten cuando alguien mira algo que han hecho y qué les gusta que les digan.",
        diu: ["Com podeu fer més curt un programa que repeteix uns blocs?|¿Cómo podéis hacer más corto un programa que repite unos bloques?",
          "Quan feu un dibuix i algú el mira, què us agrada que us diguin?|Cuando hacéis un dibujo y alguien lo mira, ¿qué os gusta que os digan?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Ulls nous i comentaris que ajuden|Ojos nuevos y comentarios que ayudan", fase: 'teoria',
        fa: "Projecta la demostració d'un repte fet per algú altre: la classe el resol en veu alta abans d'executar-lo. Explica per què cal que el provi una altra persona (ulls nous) i com es valora la dificultat. Mostra l'animació dels comentaris i les dues parts d'un bon comentari. Practiqueu-ho: proposa un comentari poc útil i que la classe el transformi en un d'amable i útil.|Proyecta la demostración de un reto hecho por otra persona: la clase lo resuelve en voz alta antes de ejecutarlo. Explica por qué hace falta que lo pruebe otra persona (ojos nuevos) y cómo se valora la dificultad. Muestra la animación de los comentarios y las dos partes de un buen comentario. Practicadlo: propón un comentario poco útil y que la clase lo transforme en uno amable y útil.",
        diu: ["Per què us sembla fàcil el vostre repte? Perquè ja en sabeu la solució!|¿Por qué os parece fácil vuestro reto? ¡Porque ya sabéis la solución!",
          "«És avorrit.» Com ho podríem dir perquè ajudi?|«Es aburrido.» ¿Cómo lo podríamos decir para que ayude?",
          "Parlem del repte, no de la persona.|Hablamos del reto, no de la persona."],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fira de paper|La feria de papel", fase: 'desconnectat',
        fa: "Cada alumne/a deixa a la taula la graella del seu repte (la versió 2, si en té). Les parelles es mouen a una altra taula: resolen el repte de paper amb el dit, i l'escriuen amb paraules o amb targetes d'ordres si en teniu. Després deixen al costat de la graella una targeta de comentari: «M'ha agradat…» i «Una idea…». Feu dues o tres rotacions de 4 minuts; al final, cadascú torna al seu lloc i llegeix els comentaris que ha rebut.|Cada alumno/a deja en la mesa la cuadrícula de su reto (la versión 2, si la tiene). Las parejas se mueven a otra mesa: resuelven el reto de papel con el dedo, y lo escriben con palabras o con tarjetas de órdenes si tenéis. Después dejan al lado de la cuadrícula una tarjeta de comentario: «Me ha gustado…» y «Una idea…». Haced dos o tres rotaciones de 4 minutos; al final, cada uno vuelve a su sitio y lee los comentarios que ha recibido.",
        diu: ["Primer resoleu el repte; després escriviu el comentari.|Primero resolved el reto; después escribid el comentario.",
          "Una idea per millorar ha de ser concreta: què hi posaríeu, què hi trauríeu?|Una idea para mejorar tiene que ser concreta: ¿qué pondríais, qué quitaríais?",
          "Quan llegiu els vostres comentaris, recordeu: vosaltres decidiu què canvieu.|Cuando leáis vuestros comentarios, recordad: vosotros decidís qué cambiáis."],
        slides: ['s9', 's10'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Per parelles que roten per les taules|Por parejas que rotan por las mesas" },
      { min: 12, t: "A l'ordinador: aprèn a fer de provador/a|En el ordenador: aprende a hacer de probador/a", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins als dos reptes «d'altres programadors»: els quizzes dels comentaris, el repte impossible i el massa fàcil, la pausa activa, el moll de les caixes i la roca que canvia de lloc. Atura la classe abans del pas «Deixa el teu repte a punt».|Cada alumno/a hace la sesión hasta los dos retos «de otros programadores»: los quizzes de los comentarios, el reto imposible y el demasiado fácil, la pausa activa, el muelle de las cajas y la roca que cambia de sitio. Para la clase antes del paso «Deja tu reto a punto».",
        diu: ["Al repte de les dues illes, què ha de mirar en Bit abans de cada pas?|En el reto de las dos islas, ¿qué tiene que mirar Bit antes de cada paso?",
          "Abans de programar el repte d'un altre, llegeix bé el mapa: quin és l'objectiu?|Antes de programar el reto de otro, lee bien el mapa: ¿cuál es el objetivo?"],
        slides: ['s11', 's12'], app: "Des de «Recorda» fins als reptes: el bloc «Repeteix», la història de la fira, les targetes de «Descobreix», el comentari que ajuda, ordenar un bon comentari, els dos mapes per valorar, la «Pausa activa», el moll de les caixes i la roca que canvia de lloc.|Desde «Recuerda» hasta los retos: el bloque «Repite», la historia de la feria, las tarjetas de «Descubre», el comentario que ayuda, ordenar un buen comentario, los dos mapas para valorar, la «Pausa activa», el muelle de las cajas y la roca que cambia de sitio.", org: "Individual|Individual" },
      { min: 18, t: "El gran canvi de lloc|El gran cambio de sitio", fase: 'crea',
        fa: "Cada alumne/a deixa el repte a punt i llegeix el pas «Canvi de lloc». Al teu senyal, les parelles canvien d'ordinador. El provador/a resol el repte de l'autor/a (l'autor/a només mira i pot donar una sola pista) i, després, respon la valoració a l'app i omple el full del provador/a. Abans de tornar, el provador/a explica de paraula una cosa que li ha agradat i una idea per millorar. Cadascú torna al seu lloc i millora el repte a l'editor amb els comentaris.|Cada alumno/a deja el reto a punto y lee el paso «Cambio de sitio». A tu señal, las parejas cambian de ordenador. El probador/a resuelve el reto del autor/a (el autor/a solo mira y puede dar una sola pista) y, después, responde la valoración en la app y rellena la hoja del probador/a. Antes de volver, el probador/a explica de palabra algo que le ha gustado y una idea para mejorar. Cada uno vuelve a su sitio y mejora el reto en el editor con los comentarios.",
        diu: ["Autors i autores: mans a la falda! Només podeu donar una pista.|Autores y autoras: ¡manos en el regazo! Solo podéis dar una pista.",
          "Provadors i provadores: llegiu el mapa i feu un pla abans de posar blocs.|Probadores y probadoras: leed el mapa y haced un plan antes de poner bloques.",
          "Quan rebeu un comentari, digueu «gràcies» encara que no hi estigueu d'acord.|Cuando recibáis un comentario, decid «gracias» aunque no estéis de acuerdo."],
        slides: ['s13', 's14', 's15'], app: "Pas «Crea»: deixar el repte a punt, el canvi de lloc, el provador/a resol el repte i el valora, i l'autor/a el millora a l'editor.|Paso «Crea»: dejar el reto a punto, el cambio de sitio, el probador/a resuelve el reto y lo valora, y el autor/a lo mejora en el editor.", org: "Per parelles (canvi d'ordinador) i després individual|Por parejas (cambio de ordenador) y después individual" },
      { min: 5, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Pregunta a tres o quatre alumnes quin canvi han fet al seu repte gràcies als comentaris. Repassa les idees de la sessió, deixa que responguin les preguntes finals de l'app i fes el tiquet de sortida. Recull els fulls del provador/a: els autors els poden tenir a la carpeta per a la presentació.|Pregunta a tres o cuatro alumnos qué cambio han hecho en su reto gracias a los comentarios. Repasa las ideas de la sesión, deja que respondan las preguntas finales de la app y haz el ticket de salida. Recoge las hojas del probador/a: los autores las pueden tener en la carpeta para la presentación.",
        diu: ["Quin comentari us ha ajudat més? Què heu canviat?|¿Qué comentario os ha ayudado más? ¿Qué habéis cambiado?",
          "La setmana vinent presentarem els reptes a tothom!|¡La semana que viene presentaremos los retos a todo el mundo!"],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["L'autor/a no pot evitar dir la solució o tocar el ratolí del provador/a.|El autor/a no puede evitar decir la solución o tocar el ratón del probador/a.",
        "Recorda la norma de la diapositiva 14: mans a la falda i una sola pista. Proposa-li que apunti en un paper on s'encalla el provador/a: és informació valuosa per millorar el repte.|Recuerda la norma de la diapositiva 14: manos en el regazo y una sola pista. Propónle que apunte en un papel dónde se atasca el probador/a: es información valiosa para mejorar el reto."],
      ["El comentari és només «molt bé» o «està malament», sense cap idea concreta.|El comentario es solo «muy bien» o «está mal», sin ninguna idea concreta.",
        "Ajuda'l amb les targetes de comentaris: «M'ha agradat… perquè…» i «I si…?». Pregunta-li què canviaria si el repte fos seu.|Ayúdale con las tarjetas de comentarios: «Me ha gustado… porque…» y «¿Y si…?». Pregúntale qué cambiaría si el reto fuera suyo."],
      ["S'enfada o es posa trist/a quan li diuen que el repte és massa fàcil o massa difícil.|Se enfada o se pone triste cuando le dicen que el reto es demasiado fácil o demasiado difícil.",
        "Recorda-li que el comentari parla del repte, no d'ell o ella, i que és la informació que necessita per millorar-lo. Ell o ella decideix quins canvis fa.|Recuérdale que el comentario habla del reto, no de él o ella, y que es la información que necesita para mejorarlo. Él o ella decide qué cambios hace."],
      ["El provador/a no pot resoldre el repte perquè no té solució o és molt difícil.|El probador/a no puede resolver el reto porque no tiene solución o es muy difícil.",
        "Després d'uns minuts, que l'autor/a doni la pista i, si cal, ensenyi la seva solució. Aquest repte és el que més necessita la millora: que ho apunti a la valoració.|Después de unos minutos, que el autor/a dé la pista y, si hace falta, enseñe su solución. Este reto es el que más necesita la mejora: que lo apunte en la valoración."],
      ["Al repte de les dues illes, programa una solució que només funciona a la primera illa.|En el reto de las dos islas, programa una solución que solo funciona en la primera isla.",
        "Que miri la pestanya de la segona illa: on és la roca ara? Quina pregunta ha de fer en Bit abans de cada pas per saber si l'ha de saltar?|Que mire la pestaña de la segunda isla: ¿dónde está la roca ahora? ¿Qué pregunta tiene que hacer Bit antes de cada paso para saber si la tiene que saltar?"]
    ],
    diff: {
      mes: "Provar el repte d'un segon company/a i comparar les dues experiències. També poden fer una versió «difícil» del seu repte amb dues illes (pensant quina part canviaria) i explicar-la a la presentació.|Probar el reto de un segundo compañero/a y comparar las dos experiencias. También pueden hacer una versión «difícil» de su reto con dos islas (pensando qué parte cambiaría) y explicarla en la presentación.",
      menys: "Fer la valoració de paraula amb el professor/a al costat, triant les respostes de l'app una a una. Per al comentari, completar només la frase «M'ha agradat…» i triar una idea de la llista de la valoració.|Hacer la valoración de palabra con el profesor/a al lado, eligiendo las respuestas de la app una a una. Para el comentario, completar solo la frase «Me ha gustado…» y elegir una idea de la lista de la valoración."
    },
    aval: {
      ticket: ["Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?",
        "Quin canvi has fet al teu repte gràcies als comentaris?|¿Qué cambio has hecho en tu reto gracias a los comentarios?"],
      rubric: [
        ["Provar el repte d'un altre|Probar el reto de otro", "Llegeix el mapa, fa un pla i resol el repte del company/a sense que li diguin la solució.|Lee el mapa, hace un plan y resuelve el reto del compañero/a sin que le digan la solución.", "Resol el repte del company/a amb la pista o amb força ajuda.|Resuelve el reto del compañero/a con la pista o con bastante ayuda."],
        ["Donar comentaris|Dar comentarios", "Fa un comentari amable i útil, amb una cosa concreta que li ha agradat i una idea per millorar.|Hace un comentario amable y útil, con algo concreto que le ha gustado y una idea para mejorar.", "Fa un comentari amable però general («m'agrada», «està bé»).|Hace un comentario amable pero general («me gusta», «está bien»)."],
        ["Rebre comentaris i millorar|Recibir comentarios y mejorar", "Escolta, dona les gràcies i fa almenys un canvi raonat al seu repte.|Escucha, da las gracias y hace al menos un cambio razonado en su reto.", "Escolta els comentaris, però no fa cap canvi o el fa sense saber explicar per què.|Escucha los comentarios, pero no hace ningún cambio o lo hace sin saber explicar por qué."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu fer de provadors del repte del vostre fill o filla: la sessió té un pas pensat perquè un familiar s'assegui al seu lloc i el resolgui. Després, feu-li un comentari amb una cosa que us ha agradat i una idea per millorar.|En casa, con el móvil, podéis hacer de probadores del reto de vuestro hijo o hija: la sesión tiene un paso pensado para que un familiar se siente en su lugar y lo resuelva. Después, hacedle un comentario con algo que os ha gustado y una idea para mejorar.",
    slides: [
      { id: 's1', k: 'portada', t: "Que el provi algú altre|Que lo pruebe otra persona", x: "Avui els reptes canvien de mans: provarem i millorarem.|Hoy los retos cambian de manos: probaremos y mejoraremos.",
        nota: "Explica que avui cada alumne/a farà dos papers: autor/a del seu repte i provador/a del repte d'un company/a.|Explica que hoy cada alumno/a hará dos papeles: autor/a de su reto y probador/a del reto de un compañero/a." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Com podeu fer més curt un programa que repeteix uns blocs?|¿Cómo podéis hacer más corto un programa que repite unos bloques?",
        nota: "Resposta: amb un «Repeteix», una funció o «Repeteix fins que».|Respuesta: con un «Repite», una función o «Repite hasta que»." },
      { id: 's3', k: 'pregunta', t: "Quan algú mira el teu treball…|Cuando alguien mira tu trabajo…", x: "Què us agrada que us diguin? Què no us ajuda gens?|¿Qué os gusta que os digan? ¿Qué no os ayuda nada?",
        nota: "Recull dues o tres respostes de cada tipus. Les farem servir per construir les normes dels comentaris.|Recoge dos o tres respuestas de cada tipo. Las usaremos para construir las normas de los comentarios." },
      { id: 's4', k: 'demo', t: "Un repte d'un altre programador/a|Un reto de otro programador/a", x: "Llegiu el mapa: quin és l'objectiu? Com el resoldríeu?|Leed el mapa: ¿cuál es el objetivo? ¿Cómo lo resolveríais?",
        demo: { w: { map: ['>##R', 'R.#R', 'F##R'] }, prog: '2{ f f r } f f' },
        nota: "Que la classe digui el camí abans d'executar. Fes notar que, sense saber la solució, cal llegir el mapa amb calma: això és tenir ulls nous.|Que la clase diga el camino antes de ejecutar. Haz notar que, sin saber la solución, hay que leer el mapa con calma: eso es tener ojos nuevos." },
      { id: 's5', k: 'anim', t: "Massa fàcil, al punt o massa difícil?|¿Demasiado fácil, en su punto o demasiado difícil?", anim: 'u8level', x: "El provador/a et dirà on queda el teu repte.|El probador/a te dirá dónde queda tu reto.",
        nota: "Recorda que «massa fàcil» o «massa difícil» no és dolent: és una informació per ajustar el repte.|Recuerda que «demasiado fácil» o «demasiado difícil» no es malo: es una información para ajustar el reto." },
      { id: 's6', k: 'anim', t: "Comentaris amables i útils|Comentarios amables y útiles", anim: 'u8feedback', punts: ["1. Una cosa que t'ha agradat|1. Algo que te ha gustado", "2. Una idea per millorar-lo|2. Una idea para mejorarlo"],
        nota: "Compara els dos comentaris de l'animació: quin ajuda l'autor/a a canviar alguna cosa?|Compara los dos comentarios de la animación: ¿cuál ayuda al autor/a a cambiar algo?" },
      { id: 's7', k: 'concepte', t: "Comentaris que ajuden|Comentarios que ayudan", punts: ["Parla del repte, no de la persona.|Habla del reto, no de la persona.", "Primer, el que t'ha agradat.|Primero, lo que te ha gustado.", "Després, una idea concreta.|Después, una idea concreta.", "I sempre amb respecte.|Y siempre con respeto."],
        nota: "Practiqueu-ho: digues «És avorrit» i que la classe ho transformi en un comentari amable i útil.|Practicadlo: di «Es aburrido» y que la clase lo transforme en un comentario amable y útil." },
      { id: 's8', k: 'concepte', t: "Quan reps un comentari|Cuando recibes un comentario", punts: ["Escolta fins al final.|Escucha hasta el final.", "Dona les gràcies.|Da las gracias.", "Tu decideixes què canvies.|Tú decides qué cambias.", "No és res personal: és per millorar.|No es nada personal: es para mejorar."],
        nota: "Remarca que rebre comentaris també s'aprèn i que costa a tothom, també als adults.|Remarca que recibir comentarios también se aprende y que cuesta a todo el mundo, también a los adultos." },
      { id: 's9', k: 'activitat', t: "La fira de paper|La feria de papel", timer: 12, punts: ["Deixa la graella del teu repte a la taula.|Deja la cuadrícula de tu reto en la mesa.", "Amb la parella, resol el repte d'una altra taula.|Con la pareja, resuelve el reto de otra mesa.", "Deixa-hi una targeta: «M'ha agradat…» i «Una idea…».|Deja una tarjeta: «Me ha gustado…» y «Una idea…».", "Al senyal, canvieu de taula.|A la señal, cambiad de mesa."],
        nota: "Rotacions de 4 minuts. Al final, cadascú torna al seu lloc i llegeix els comentaris rebuts.|Rotaciones de 4 minutos. Al final, cada uno vuelve a su sitio y lee los comentarios recibidos." },
      { id: 's10', k: 'concepte', t: "Les targetes de comentaris|Las tarjetas de comentarios", punts: ["M'ha agradat… perquè…|Me ha gustado… porque…", "I si hi posessis…?|¿Y si pusieras…?", "Era al punt? Massa fàcil? Massa difícil?|¿Estaba en su punto? ¿Demasiado fácil? ¿Demasiado difícil?"],
        nota: "Deixa la diapositiva projectada durant la fira de paper per a qui no sàpiga com començar el comentari.|Deja la diapositiva proyectada durante la feria de papel para quien no sepa cómo empezar el comentario." },
      { id: 's11', k: 'activitat', t: "A l'ordinador: aprèn a fer de provador/a|En el ordenador: aprende a hacer de probador/a", timer: 12, punts: ["Obre la sessió «Que el provi algú altre».|Abre la sesión «Que lo pruebe otra persona».", "Fes els quizzes dels comentaris i dels mapes.|Haz los quizzes de los comentarios y de los mapas.", "Resol els dos reptes d'altres programadors.|Resuelve los dos retos de otros programadores.", "Para abans de «Deixa el teu repte a punt».|Para antes de «Deja tu reto a punto»."],
        nota: "És important que tothom s'aturi al mateix pas: el canvi de lloc s'ha de fer alhora.|Es importante que todo el mundo se pare en el mismo paso: el cambio de sitio se tiene que hacer a la vez." },
      { id: 's12', k: 'demo', t: "La roca que canvia de lloc|La roca que cambia de sitio", x: "Repeteix fins que arribis a la bandera: si hi ha un obstacle davant, salta la roca; si no, endavant.|Repite hasta que llegues a la bandera: si hay un obstáculo delante, salta la roca; si no, adelante.",
        demo: { w: { map: ['...###.', '>###R#F', '~~~~~~~'] }, prog: 'until:goal{ if:wall{ A } else{ f } }', fns: { A: 'l f r f f r f l' }, fnName: { A: 'Salta la roca|Salta la roca' } },
        nota: "Projecta-la quan la majoria hagi resolt el repte, per comentar-lo. És l'illa 2 del repte: la roca és més lluny.|Proyéctala cuando la mayoría haya resuelto el reto, para comentarlo. Es la isla 2 del reto: la roca está más lejos." },
      { id: 's13', k: 'activitat', t: "El gran canvi de lloc|El gran cambio de sitio", timer: 18, punts: ["Deixa el teu repte a punt i llegeix «Canvi de lloc».|Deja tu reto a punto y lee «Cambio de sitio».", "Al senyal, canvia d'ordinador amb la parella.|A la señal, cambia de ordenador con la pareja.", "Resol el repte i fes-ne la valoració.|Resuelve el reto y haz su valoración.", "Torna al teu lloc i millora el teu repte.|Vuelve a tu sitio y mejora tu reto."],
        nota: "Dona el senyal perquè tothom canviï alhora. Deixa uns 8 minuts per resoldre, 3 per valorar i parlar i la resta per millorar.|Da la señal para que todo el mundo cambie a la vez. Deja unos 8 minutos para resolver, 3 para valorar y hablar y el resto para mejorar." },
      { id: 's14', k: 'concepte', t: "Normes de la prova|Normas de la prueba", punts: ["Autor/a: mans a la falda i boca tancada.|Autor/a: manos en el regazo y boca cerrada.", "Autor/a: només una pista, si cal.|Autor/a: solo una pista, si hace falta.", "Provador/a: llegeix el mapa i fes un pla.|Probador/a: lee el mapa y haz un plan.", "Provador/a: valora amb sinceritat i amabilitat.|Probador/a: valora con sinceridad y amabilidad."],
        nota: "Deixa les normes projectades durant tota la prova.|Deja las normas proyectadas durante toda la prueba." },
      { id: 's15', k: 'activitat', t: "Torna al teu lloc i millora'l|Vuelve a tu sitio y mejóralo", punts: ["Escolta el que t'explica el provador/a.|Escucha lo que te explica el probador/a.", "Dona les gràcies.|Da las gracias.", "Tria un canvi i fes-lo a l'editor.|Elige un cambio y hazlo en el editor.", "Comprova que continua tenint solució.|Comprueba que sigue teniendo solución."],
        nota: "Les respostes de la valoració es desen a l'app, però l'autor/a no les veu a la pantalla: per això el provador/a les explica de paraula i omple el full del provador/a.|Las respuestas de la valoración se guardan en la app, pero el autor/a no las ve en la pantalla: por eso el probador/a las explica de palabra y rellena la hoja del probador/a." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un repte es prova amb una altra persona: té ulls nous.|Un reto se prueba con otra persona: tiene ojos nuevos.", "Un bon comentari: el que t'agrada i una idea.|Un buen comentario: lo que te gusta y una idea.", "Tu decideixes com millores el teu repte.|Tú decides cómo mejoras tu reto."],
        nota: "Felicita la classe per com han donat i rebut els comentaris: és una de les coses més difícils del curs.|Felicita a la clase por cómo han dado y recibido los comentarios: es una de las cosas más difíciles del curso." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?", "Quin canvi has fet gràcies als comentaris?|¿Qué cambio has hecho gracias a los comentarios?"],
        nota: "Respostes: una cosa que t'ha agradat i una idea per millorar. Anota els canvis: són bons exemples per a la presentació.|Respuestas: algo que te ha gustado y una idea para mejorar. Anota los cambios: son buenos ejemplos para la presentación." }
    ],
    print: [
      { id: 'p1', t: "Targetes de comentaris|Tarjetas de comentarios", k: 'targetes',
        intro: "Un paquet per taula. A la fira de paper, escriviu el comentari a sota de la frase i deixeu la targeta al costat de la graella.|Un paquete por mesa. En la feria de papel, escribid el comentario debajo de la frase y dejad la tarjeta al lado de la cuadrícula.",
        items: [
          { t: "M'ha agradat… 💚|Me ha gustado… 💚", n: 4 },
          { t: "I si hi posessis…? 💡|¿Y si pusieras…? 💡", n: 4 },
          { t: "Era al punt 🎯|Estaba en su punto 🎯", n: 2 },
          { t: "Massa fàcil 🐢|Demasiado fácil 🐢", n: 1 },
          { t: "Massa difícil 🧗|Demasiado difícil 🧗", n: 1 }
        ] },
      { id: 'p2', t: "Full del provador/a|Hoja del probador/a", k: 'fitxa',
        intro: "Omple aquest full després de provar el repte del company/a a l'ordinador. Després, dona'l a l'autor/a.|Rellena esta hoja después de probar el reto del compañero/a en el ordenador. Después, dáselo al autor/a.",
        items: [
          { q: "Nom del repte i de l'autor/a:|Nombre del reto y del autor/a:", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Era clar què havia de fer en Bit? Encercla: sí · més o menys · no gaire|¿Estaba claro qué tenía que hacer Bit? Rodea: sí · más o menos · no mucho", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Com era de difícil? Encercla: massa fàcil · al punt · massa difícil|¿Cómo de difícil era? Rodea: demasiado fácil · en su punto · demasiado difícil", sol: "Resposta oberta.|Respuesta abierta." },
          { q: "Una cosa que m'ha agradat:|Algo que me ha gustado:", sol: "Resposta oberta: ha de ser concreta (el revolt de l'aigua, les estrelles…).|Respuesta abierta: tiene que ser concreta (la curva del agua, las estrellas…)." },
          { q: "Una idea per millorar-lo:|Una idea para mejorarlo:", sol: "Resposta oberta: una proposta que l'autor/a pugui fer a l'editor (posar, treure o moure alguna cosa).|Respuesta abierta: una propuesta que el autor/a pueda hacer en el editor (poner, quitar o mover algo)." }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Presentació i diploma ---------- */
  'r8-4': {
    obj: [
      "L'alumne/a presenta el seu repte a un grup o a la classe explicant què ha fet, què ha après i què li ha costat.|El alumno/a presenta su reto a un grupo o a la clase explicando qué ha hecho, qué ha aprendido y qué le ha costado.",
      "L'alumne/a reconeix i anomena els conceptes del curs: seqüència, bucle, esdeveniment, condició, funció, variable i bucle amb condició.|El alumno/a reconoce y nombra los conceptos del curso: secuencia, bucle, evento, condición, función, variable y bucle con condición.",
      "L'alumne/a resol reptes que combinen eines de diverses unitats.|El alumno/a resuelve retos que combinan herramientas de varias unidades.",
      "L'alumne/a escolta les presentacions dels companys/es i hi fa preguntes o comentaris respectuosos.|El alumno/a escucha las presentaciones de los compañeros/as y hace preguntas o comentarios respetuosos."
    ],
    comp: [
      "Comunicació oral: presentar un projecte propi de manera ordenada davant d'un públic|Comunicación oral: presentar un proyecto propio de manera ordenada delante de un público",
      "Competència digital (CD5): explicar com s'ha creat i depurat un programa|Competencia digital (CD5): explicar cómo se ha creado y depurado un programa",
      "Pensament computacional: síntesi dels conceptes del curs i combinació d'eines en un mateix repte|Pensamiento computacional: síntesis de los conceptos del curso y combinación de herramientas en un mismo reto",
      "Competència personal i social: reconèixer el propi aprenentatge i valorar el dels altres|Competencia personal y social: reconocer el propio aprendizaje y valorar el de los demás"
    ],
    vocab: [
      ["Presentació|Presentación", "Explicar a un públic què hem fet i com ho hem fet.|Explicar a un público qué hemos hecho y cómo lo hemos hecho."],
      ["Públic|Público", "Les persones que escolten una presentació.|Las personas que escuchan una presentación."],
      ["Guió|Guion", "Les idees que direm, en ordre, preparades abans de presentar.|Las ideas que diremos, en orden, preparadas antes de presentar."],
      ["Projecte|Proyecto", "Una feina llarga, feta en diversos passos, on fem servir tot el que hem après.|Un trabajo largo, hecho en varios pasos, donde usamos todo lo que hemos aprendido."],
      ["Programador/a|Programador/a", "Una persona que dissenya, escriu, prova i millora programes.|Una persona que diseña, escribe, prueba y mejora programas."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Presentació i diploma»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Presentación y diploma»",
        "Projector, la presentació d'aquesta sessió i un ordinador connectat per als voluntaris/àries|Proyector, la presentación de esta sesión y un ordenador conectado para los voluntarios/as",
        "La carpeta de cada alumne/a (graelles i full del provador/a)|La carpeta de cada alumno/a (cuadrículas y hoja del probador/a)",
        "Els diplomes impresos, un per alumne/a|Los diplomas impresos, uno por alumno/a"
      ],
      imprimir: ["Guió de la meva presentació|Guion de mi presentación", "Diploma del curs|Diploma del curso"],
      prep: [
        "Imprimir un guió per alumne/a i un diploma per alumne/a. Escriure-hi el nom abans de la classe i signar-los.|Imprimir un guion por alumno/a y un diploma por alumno/a. Escribir el nombre antes de la clase y firmarlos.",
        "Organitzar les taules en grups de 4 per a les presentacions i triar 3 o 4 voluntaris/àries per presentar al projector.|Organizar las mesas en grupos de 4 para las presentaciones y elegir 3 o 4 voluntarios/as para presentar en el proyector.",
        "Provar abans que el repte de cada voluntari/ària s'obre bé a l'ordinador del projector (cadascú entra amb el seu usuari).|Probar antes que el reto de cada voluntario/a se abre bien en el ordenador del proyector (cada uno entra con su usuario).",
        "Si es vol, convidar les famílies als darrers 10 minuts per al lliurament dels diplomes.|Si se quiere, invitar a las familias a los últimos 10 minutos para la entrega de los diplomas."
      ]
    },
    plan: [
      { min: 5, t: "El gran dia de la fira|El gran día de la feria", fase: 'inici',
        fa: "Dona la benvinguda a l'última sessió del curs i explica com anirà: repàs, preparació, presentacions i diplomes. Fes la pregunta de repàs sobre els comentaris. Recorda que avui tothom presentarà, primer al seu grup i alguns també al projector.|Da la bienvenida a la última sesión del curso y explica cómo irá: repaso, preparación, presentaciones y diplomas. Haz la pregunta de repaso sobre los comentarios. Recuerda que hoy todo el mundo presentará, primero en su grupo y algunos también en el proyector.",
        diu: ["Quines dues parts té un bon comentari? Avui en fareu molts!|¿Qué dos partes tiene un buen comentario? ¡Hoy haréis muchos!",
          "Avui és la vostra fira: el vostre repte serà el protagonista.|Hoy es vuestra feria: vuestro reto será el protagonista."],
        slides: ['s1', 's2'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El viatge del curs|El viaje del curso", fase: 'teoria',
        fa: "Recorreu les vuit illes del curs amb l'animació: per a cada unitat, demana una paraula o un bloc que en recordin. Projecta les dues demostracions de repàs («fins que» i els botons) i, abans d'executar-les, que la classe predigui què passarà. Acaba amb la caixa d'eines: cadascú pensa quines eines ha fet servir al seu repte.|Recorred las ocho islas del curso con la animación: para cada unidad, pide una palabra o un bloque que recuerden. Proyecta las dos demostraciones de repaso («hasta que» y los botones) y, antes de ejecutarlas, que la clase prediga qué pasará. Termina con la caja de herramientas: cada uno piensa qué herramientas ha usado en su reto.",
        diu: ["Què recordeu de la primera illa? I de la de les funcions?|¿Qué recordáis de la primera isla? ¿Y de la de las funciones?",
          "Si premo A i després B, de quin color quedarà el llum?|Si pulso A y después B, ¿de qué color quedará la luz?",
          "Quines eines heu fet servir al vostre repte?|¿Qué herramientas habéis usado en vuestro reto?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El guió i l'assaig|El guion y el ensayo", fase: 'desconnectat',
        fa: "Cada alumne/a omple el guió de la presentació amb les tres preguntes (què he fet, què he après, què m'ha costat) i fa servir el full del provador/a de la sessió 3 per recordar els canvis. Després, per parelles, cadascú assaja la presentació en un minut mentre l'altre/a escolta i li diu una cosa que ha fet bé.|Cada alumno/a rellena el guion de la presentación con las tres preguntas (qué he hecho, qué he aprendido, qué me ha costado) y usa la hoja del probador/a de la sesión 3 para recordar los cambios. Después, por parejas, cada uno ensaya la presentación en un minuto mientras el otro/a escucha y le dice algo que ha hecho bien.",
        diu: ["No cal escriure-ho tot: només unes paraules per recordar què direu.|No hace falta escribirlo todo: solo unas palabras para recordar qué diréis.",
          "Què us ha costat més? Un bug, un revolt, una funció? Això també s'explica!|¿Qué os ha costado más? ¿Un bug, una curva, una función? ¡Eso también se explica!"],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 10, t: "A l'ordinador: repàs i repte final|En el ordenador: repaso y reto final", fase: 'ordinador',
        fa: "Cada alumne/a fa la sessió fins al repte final: la història, les targetes, ordenar la presentació, les preguntes de repàs, la predicció, la pausa activa, els llums i botons, la tanca de colors i «La gran desfilada». Qui no l'acabi la pot deixar per a casa: la presentació és més important.|Cada alumno/a hace la sesión hasta el reto final: la historia, las tarjetas, ordenar la presentación, las preguntas de repaso, la predicción, la pausa activa, las luces y botones, la valla de colores y «El gran desfile». Quien no lo termine lo puede dejar para casa: la presentación es más importante.",
        diu: ["Al repte dels botons, cada botó té el seu requadre: què hi ha de fer A? I B?|En el reto de los botones, cada botón tiene su recuadro: ¿qué tiene que hacer A? ¿Y B?",
          "A la desfilada, què es repeteix a cada costat del quadrat?|En el desfile, ¿qué se repite en cada lado del cuadrado?"],
        slides: ['s10', 's11'], app: "Des de «Recorda» fins a «Crea: La gran desfilada».|Desde «Recuerda» hasta «Crea: El gran desfile».", org: "Individual|Individual" },
      { min: 17, t: "Les presentacions|Las presentaciones", fase: 'crea',
        fa: "Cada alumne/a fa els últims retocs al seu repte (pas «Dissenya») i l'obre al pas de presentar. Primer, presentacions als grups de 4: cadascú té 2 minuts per explicar el guió i executar el repte, i el grup li fa un comentari amable i útil. Després, 3 o 4 voluntaris/àries presenten al projector davant de tota la classe.|Cada alumno/a hace los últimos retoques a su reto (paso «Diseña») y lo abre en el paso de presentar. Primero, presentaciones en los grupos de 4: cada uno tiene 2 minutos para explicar el guion y ejecutar el reto, y el grupo le hace un comentario amable y útil. Después, 3 o 4 voluntarios/as presentan en el proyector delante de toda la clase.",
        diu: ["Qui presenta parla; la resta escolta i mira el repte.|Quien presenta habla; el resto escucha y mira el reto.",
          "Abans d'executar-lo, que el públic digui per on creu que anirà en Bit.|Antes de ejecutarlo, que el público diga por dónde cree que irá Bit.",
          "Un aplaudiment per a cada programador/a!|¡Un aplauso para cada programador/a!"],
        slides: ['s12', 's13', 's14'], app: "Pas «Crea»: els últims retocs a l'editor i el pas de presentar el propi repte, projectat des de l'ordinador de cada voluntari/ària.|Paso «Crea»: los últimos retoques en el editor y el paso de presentar el propio reto, proyectado desde el ordenador de cada voluntario/a.", org: "Grups de 4 i després tot el grup|Grupos de 4 y después todo el grupo" },
      { min: 10, t: "Diplomes i comiat|Diplomas y despedida", fase: 'tancament',
        fa: "Repassa el que han après durant el curs amb el resum. Cada alumne/a arriba al pas del diploma a l'app i, mentrestant, lliura el diploma imprès a cadascú amb un aplaudiment. Acaba amb les preguntes finals de l'app, el tiquet de sortida i un comiat.|Repasa lo que han aprendido durante el curso con el resumen. Cada alumno/a llega al paso del diploma en la app y, mientras tanto, entrega el diploma impreso a cada uno con un aplauso. Termina con las preguntas finales de la app, el ticket de salida y una despedida.",
        diu: ["Al setembre no sabíeu què era un algorisme. Ara dissenyeu, programeu i milloreu reptes!|En septiembre no sabíais qué era un algoritmo. ¡Ahora diseñáis, programáis y mejoráis retos!",
          "Què us emporteu d'aquest curs?|¿Qué os lleváis de este curso?"],
        slides: ['s15', 's16', 's17'], app: "«Tancament»: el diploma de l'app (es pot imprimir), el missatge d'en Bit, la pregunta final i com m'he sentit.|«Cierre»: el diploma de la app (se puede imprimir), el mensaje de Bit, la pregunta final y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Té vergonya de presentar i no vol parlar davant dels altres.|Tiene vergüenza de presentar y no quiere hablar delante de los demás.",
        "Que presenti només al seu grup de 4 i que llegeixi el guió. Pot executar el repte i deixar que un company/a llegeixi una de les tres respostes.|Que presente solo en su grupo de 4 y que lea el guion. Puede ejecutar el reto y dejar que un compañero/a lea una de las tres respuestas."],
      ["La presentació és només «aquest és el meu repte» i l'executa.|La presentación es solo «este es mi reto» y lo ejecuta.",
        "Fes-li les tres preguntes del guió una a una: què has fet, quines eines has fet servir, què t'ha costat. Que les respongui mirant el full.|Hazle las tres preguntas del guion una a una: qué has hecho, qué herramientas has usado, qué te ha costado. Que las responda mirando la hoja."],
      ["El repte no funciona just quan l'ha de presentar.|El reto no funciona justo cuando lo tiene que presentar.",
        "Converteix-ho en una oportunitat: que ho expliqui al públic com un bug de veritat i el busqui amb «Pas a pas». Celebra-ho: és el que fan els programadors.|Conviértelo en una oportunidad: que lo explique al público como un bug de verdad y lo busque con «Paso a paso». Celébralo: es lo que hacen los programadores."],
      ["El públic parla mentre algú presenta o fa comentaris que no ajuden.|El público habla mientras alguien presenta o hace comentarios que no ayudan.",
        "Recorda les normes del públic de la diapositiva 13 i les dues parts d'un bon comentari. Dona un paper a cada membre del grup: qui fa la pregunta, qui diu el que li ha agradat…|Recuerda las normas del público de la diapositiva 13 y las dos partes de un buen comentario. Da un papel a cada miembro del grupo: quién hace la pregunta, quién dice lo que le ha gustado…"],
      ["Al repte dels botons, posa tots els blocs al mateix botó o al «Quan comença».|En el reto de los botones, pone todos los bloques en el mismo botón o en el «Al empezar».",
        "Que miri els requadres: cada botó té el seu. Pregunta-li què ha de passar quan es prem A i que ho posi només dins de «Quan premo A».|Que mire los recuadros: cada botón tiene el suyo. Pregúntale qué tiene que pasar cuando se pulsa A y que lo ponga solo dentro de «Al pulsar A»."]
    ],
    diff: {
      mes: "Preparar una pregunta per al públic al final de la presentació («per on creieu que anirà en Bit?») i fer una versió nova del repte que faci servir una eina que encara no hi hagi posat. També poden ajudar a preparar l'ordinador del projector.|Preparar una pregunta para el público al final de la presentación («¿por dónde creéis que irá Bit?») y hacer una versión nueva del reto que use una herramienta que todavía no haya puesto. También pueden ayudar a preparar el ordenador del proyector.",
      menys: "Presentar al grup de 4 amb el guió a la mà i respondre només dues preguntes (què he fet i què m'ha costat). Dels reptes finals, fer el de la tanca de colors i la desfilada amb la pista.|Presentar en el grupo de 4 con el guion en la mano y responder solo dos preguntas (qué he hecho y qué me ha costado). De los retos finales, hacer el de la valla de colores y el desfile con la pista."
    },
    aval: {
      ticket: ["Digues tres eines que has après en aquest curs.|Di tres herramientas que has aprendido en este curso.",
        "Què és el que més t'ha agradat de fer el teu propi repte?|¿Qué es lo que más te ha gustado de hacer tu propio reto?"],
      rubric: [
        ["Presentació|Presentación", "Explica què ha fet, quines eines ha fet servir i què li ha costat, i executa el repte.|Explica qué ha hecho, qué herramientas ha usado y qué le ha costado, y ejecuta el reto.", "Presenta el repte i l'executa, però li cal ajuda per explicar com l'ha fet.|Presenta el reto y lo ejecuta, pero necesita ayuda para explicar cómo lo ha hecho."],
        ["Conceptes del curs|Conceptos del curso", "Anomena i reconeix els conceptes del curs i resol els reptes finals que els combinen.|Nombra y reconoce los conceptos del curso y resuelve los retos finales que los combinan.", "Reconeix alguns conceptes i resol una part dels reptes finals.|Reconoce algunos conceptos y resuelve una parte de los retos finales."],
        ["Escolta i comentaris|Escucha y comentarios", "Escolta les presentacions i fa comentaris amables i concrets.|Escucha las presentaciones y hace comentarios amables y concretos.", "Escolta, però li costa fer un comentari concret.|Escucha, pero le cuesta hacer un comentario concreto."]
      ]
    },
    casa: "A casa, amb el mòbil, el vostre fill o filla us pot presentar el seu repte igual que ho ha fet a classe: què ha fet, què ha après i què li ha costat. A «Projectes» hi trobareu totes les versions que ha programat durant el curs. Enhorabona per aquest curs!|En casa, con el móvil, vuestro hijo o hija os puede presentar su reto igual que lo ha hecho en clase: qué ha hecho, qué ha aprendido y qué le ha costado. En «Proyectos» encontraréis todas las versiones que ha programado durante el curso. ¡Enhorabuena por este curso!",
    slides: [
      { id: 's1', k: 'portada', t: "Presentació i diploma|Presentación y diploma", x: "El gran dia de la Fira dels Reptes: presentem i celebrem!|El gran día de la Feria de los Retos: ¡presentamos y celebramos!",
        nota: "Explica l'ordre de la sessió: repàs, guió, reptes finals, presentacions i diplomes.|Explica el orden de la sesión: repaso, guion, retos finales, presentaciones y diplomas." },
      { id: 's2', k: 'repas', t: "Recordes?|¿Recuerdas?", x: "Quines dues parts té un bon comentari?|¿Qué dos partes tiene un buen comentario?",
        nota: "Resposta: una cosa que t'ha agradat i una idea per millorar. Avui els faran servir a les presentacions.|Respuesta: algo que te ha gustado y una idea para mejorar. Hoy los usarán en las presentaciones." },
      { id: 's3', k: 'anim', t: "El viatge del curs|El viaje del curso", anim: 'u8journey', x: "Vuit illes, vuit unitats… i un programador/a a cada ordinador.|Ocho islas, ocho unidades… y un programador/a en cada ordenador.",
        nota: "Per a cada illa, demana una paraula o un bloc que en recordin.|Para cada isla, pide una palabra o un bloque que recuerden." },
      { id: 's4', k: 'concepte', t: "Les eines del curs|Las herramientas del curso", blocks: ['Endavant|Adelante', 'Repeteix|Repite', 'Llum|Luz', 'Quan premo A|Al pulsar A', 'Si… si no…|Si… si no…', 'Funció|Función', 'Suma 1|Suma 1', 'Repeteix fins que|Repite hasta que'],
        punts: ["Seqüència: ordres en ordre|Secuencia: órdenes en orden", "Bucle: repetir|Bucle: repetir", "Esdeveniment: quan passa alguna cosa|Evento: cuando pasa algo", "Condició: decidir|Condición: decidir"],
        nota: "Assenyala cada fitxa i que la classe digui per a què serveix i en quin repte l'han fet servir.|Señala cada ficha y que la clase diga para qué sirve y en qué reto la han usado." },
      { id: 's5', k: 'demo', t: "Repàs: fins que…|Repaso: hasta que…", x: "Repeteix fins que hi hagi un obstacle davant: Endavant. Després, Gira a la dreta i Endavant ×2. A, B o C?|Repite hasta que haya un obstáculo delante: Adelante. Después, Gira a la derecha y Adelante ×2. ¿A, B o C?",
        demo: { w: { map: ['>###.', '.#.#.', '.C.A.', '...B.'] }, prog: 'until:wall{ f } r 2{ f }' },
        nota: "Resposta: A. El bucle no sap quantes caselles hi ha: avança fins que troba l'obstacle.|Respuesta: A. El bucle no sabe cuántas casillas hay: avanza hasta que encuentra el obstáculo." },
      { id: 's6', k: 'demo', t: "Repàs: llums i botons|Repaso: luces y botones", x: "Quan comença: llum groc. Quan premo A: llum verd i nota do. Quan premo B: llum vermell i nota sol. Premerem A i després B.|Al empezar: luz amarilla. Al pulsar A: luz verde y nota do. Al pulsar B: luz roja y nota sol. Pulsaremos A y después B.",
        demo: { w: { map: ['.....', '..v..', '.....'] }, prog: 'light:y', evs: { A: 'light:g note:do', B: 'light:r note:sol' }, press: 'AB' },
        nota: "Abans d'executar, pregunta de quin color quedarà el llum al final. Resposta: vermell, perquè B és l'últim botó.|Antes de ejecutar, pregunta de qué color quedará la luz al final. Respuesta: rojo, porque B es el último botón." },
      { id: 's7', k: 'anim', t: "Quines eines has fet servir?|¿Qué herramientas has usado?", anim: 'u8tools', x: "Al teu repte, quines eines del curs hi has posat?|En tu reto, ¿qué herramientas del curso has puesto?",
        nota: "Que cadascú en digui una en veu baixa al company/a: serà part de la presentació.|Que cada uno diga una en voz baja al compañero/a: será parte de la presentación." },
      { id: 's8', k: 'activitat', t: "El guió de la presentació|El guion de la presentación", timer: 10, punts: ["Què he fet? El nom i l'objectiu del repte.|¿Qué he hecho? El nombre y el objetivo del reto.", "Què he après? Les eines que he fet servir.|¿Qué he aprendido? Las herramientas que he usado.", "Què m'ha costat? Un bug, un canvi, una millora.|¿Qué me ha costado? Un bug, un cambio, una mejora.", "Assaja-ho amb la parella en un minut.|Ensáyalo con la pareja en un minuto."],
        nota: "Recorda'ls que el full del provador/a de la sessió 3 els pot ajudar a respondre la tercera pregunta.|Recuérdales que la hoja del probador/a de la sesión 3 les puede ayudar a responder la tercera pregunta." },
      { id: 's9', k: 'concepte', t: "Com es presenta|Cómo se presenta", punts: ["Parla a poc a poc i mira el públic.|Habla despacio y mira al público.", "Executa el repte perquè tothom el vegi.|Ejecuta el reto para que todo el mundo lo vea.", "Si alguna cosa falla, explica el bug.|Si algo falla, explica el bug.", "Acaba dient «gràcies».|Termina diciendo «gracias»."],
        nota: "Fes tu una presentació curta d'exemple amb un repte inventat: és la millor manera que vegin com es fa.|Haz tú una presentación corta de ejemplo con un reto inventado: es la mejor manera de que vean cómo se hace." },
      { id: 's10', k: 'activitat', t: "A l'ordinador: repàs i repte final|En el ordenador: repaso y reto final", timer: 10, punts: ["Obre la sessió «Presentació i diploma».|Abre la sesión «Presentación y diploma».", "Respon les preguntes de repàs del curs.|Responde las preguntas de repaso del curso.", "Fes els reptes de llums i del llapis.|Haz los retos de luces y del lápiz.", "Para quan acabis «La gran desfilada».|Para cuando termines «El gran desfile»."],
        nota: "Qui vagi més lent pot saltar-se la desfilada i fer-la a casa: la presentació és la part més important d'avui.|Quien vaya más lento puede saltarse el desfile y hacerlo en casa: la presentación es la parte más importante de hoy." },
      { id: 's11', k: 'repte', t: "La gran desfilada|El gran desfile", x: "Recull les 3 estrelles de les cantonades i acaba a la bandera del mig, amb un bucle, una funció o «fins que».|Recoge las 3 estrellas de las esquinas y termina en la bandera del centro, con un bucle, una función o «hasta que».",
        nota: "Pista: cada costat del quadrat és «Endavant ×4, Gira a la dreta». Es pot fer amb una funció dins d'un bucle.|Pista: cada lado del cuadrado es «Adelante ×4, Gira a la derecha». Se puede hacer con una función dentro de un bucle." },
      { id: 's12', k: 'activitat', t: "Últims retocs|Últimos retoques", timer: 3, punts: ["Obre el teu repte a l'editor.|Abre tu reto en el editor.", "Fes l'últim canvi, si cal, i desa'l.|Haz el último cambio, si hace falta, y guárdalo.", "Obre'l al pas de presentar.|Ábrelo en el paso de presentar."],
        nota: "Que no facin canvis grans: el repte ha d'arribar a la presentació funcionant.|Que no hagan cambios grandes: el reto tiene que llegar a la presentación funcionando." },
      { id: 's13', k: 'activitat', t: "Presentacions als grups|Presentaciones en los grupos", timer: 10, punts: ["2 minuts per persona.|2 minutos por persona.", "Qui presenta: guió i executa el repte.|Quien presenta: guion y ejecuta el reto.", "El públic escolta i, al final, fa un comentari amable i útil.|El público escucha y, al final, hace un comentario amable y útil.", "Aplaudiment!|¡Aplauso!"],
        nota: "Controla el temps en veu alta («canvi de presentador/a!») perquè tothom tingui el seu torn.|Controla el tiempo en voz alta («¡cambio de presentador/a!») para que todo el mundo tenga su turno." },
      { id: 's14', k: 'activitat', t: "Al projector|En el proyector", timer: 4, punts: ["3 o 4 voluntaris/àries.|3 o 4 voluntarios/as.", "Abans d'executar, el públic prediu el camí.|Antes de ejecutar, el público predice el camino.", "Una pregunta o un comentari del públic.|Una pregunta o un comentario del público."],
        nota: "Tria voluntaris/àries amb reptes diferents (amb caixes, amb estrelles, amb un camí llarg) per mostrar la varietat.|Elige voluntarios/as con retos diferentes (con cajas, con estrellas, con un camino largo) para mostrar la variedad." },
      { id: 's15', k: 'resum', t: "Què hem après en aquest curs|Qué hemos aprendido en este curso", punts: ["Ordres en ordre, girs i bugs|Órdenes en orden, giros y bugs", "Bucles, llums, sons i botons|Bucles, luces, sonidos y botones", "Sensors, funcions i variables|Sensores, funciones y variables", "«Fins que»… i el meu propi repte!|«Hasta que»… ¡y mi propio reto!"],
        nota: "Felicita la classe per tot el camí: han après a pensar com programadors i programadores.|Felicita a la clase por todo el camino: han aprendido a pensar como programadores y programadoras." },
      { id: 's16', k: 'concepte', t: "Programadors i programadores de l'illa|Programadores y programadoras de la isla", x: "Cada alumne/a rep el diploma del curs Tech Robot.|Cada alumno/a recibe el diploma del curso Tech Robot.",
        nota: "Lliura els diplomes un a un amb un aplaudiment. A l'app, el pas del diploma també es pot imprimir.|Entrega los diplomas uno a uno con un aplauso. En la app, el paso del diploma también se puede imprimir." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Digues tres eines que has après en aquest curs.|Di tres herramientas que has aprendido en este curso.", "Què t'ha agradat més de fer el teu repte?|¿Qué te ha gustado más de hacer tu reto?"],
        nota: "Escolta les respostes com a avaluació final del curs: qui anomena les eines i qui explica com ha treballat.|Escucha las respuestas como evaluación final del curso: quién nombra las herramientas y quién explica cómo ha trabajado." }
    ],
    print: [
      { id: 'p1', t: "Guió de la meva presentació|Guion de mi presentación", k: 'fitxa',
        intro: "Escriu unes paraules per a cada pregunta: t'ajudaran a recordar què vols dir. No cal escriure frases llargues.|Escribe unas palabras para cada pregunta: te ayudarán a recordar qué quieres decir. No hace falta escribir frases largas.",
        items: [
          { q: "Què he fet? (el nom del repte i què ha de fer en Bit)|¿Qué he hecho? (el nombre del reto y qué tiene que hacer Bit)", sol: "Resposta oberta: el nom i l'objectiu del repte.|Respuesta abierta: el nombre y el objetivo del reto." },
          { q: "Què he après? (quines eines del curs he fet servir)|¿Qué he aprendido? (qué herramientas del curso he usado)", sol: "Resposta oberta: per exemple, un bucle, una funció, una condició o «fins que».|Respuesta abierta: por ejemplo, un bucle, una función, una condición o «hasta que»." },
          { q: "Què m'ha costat? (un bug, un canvi, un comentari que m'ha ajudat)|¿Qué me ha costado? (un bug, un cambio, un comentario que me ha ayudado)", sol: "Resposta oberta: valoreu que expliqui un error o una millora concreta.|Respuesta abierta: valorad que explique un error o una mejora concreta." },
          { q: "Què m'agradaria programar ara que ja sé tot això?|¿Qué me gustaría programar ahora que ya sé todo esto?", sol: "Resposta oberta.|Respuesta abierta." }
        ] },
      { id: 'p2', t: "Diploma del curs|Diploma del curso", k: 'diploma',
        intro: "ha completat el curs Tech Robot de Numi Tech: ha dissenyat, programat, provat i presentat el seu propi repte per a en Bit.|ha completado el curso Tech Robot de Numi Tech: ha diseñado, programado, probado y presentado su propio reto para Bit.",
        items: [
          'Ha après a escriure programes amb ordres en ordre i a depurar-los.|Ha aprendido a escribir programas con órdenes en orden y a depurarlos.',
          'Ha fet servir bucles, llums, sons i botons.|Ha usado bucles, luces, sonidos y botones.',
          'Ha programat decisions amb sensors i condicions.|Ha programado decisiones con sensores y condiciones.',
          'Ha creat funcions i ha fet servir variables.|Ha creado funciones y ha usado variables.',
          'Ha dissenyat, provat i millorat un repte propi.|Ha diseñado, probado y mejorado un reto propio.'
        ] }
    ]
  }
});
