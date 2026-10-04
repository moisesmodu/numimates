/* Tech Robòtica · unitat 3 «Sensor de distància» · guia del professorat (k3-1 … k3-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1'], amb la fase «robot» (Maqueen de veritat). */
Object.assign(TGUIDE, {
  /* ---------- Sessió 1 · Com mesura un robot? ---------- */
  'k3-1': {
    intro: "Primera sessió amb un sensor: l'alumnat descobre que un robot que només compta temps va «a cegues» i que el sensor d'ultrasons li permet saber on són les coses. Entén com mesura (un xiulet de 40.000 vibracions per segon, l'eco i el temps que tarda a tornar, dividit entre 2), què pot veure (un con estret, de 2 a 400 cm) i què vol dir el 500 (no ha tornat cap eco). També aprèn la diferència entre «en iniciar» (un cop) i «per sempre» (sense parar), que serà la base de totes les decisions del robot. Al robot real, calibra el sensor amb un regle i descobreix que la roba i les superfícies inclinades confonen el so.|Primera sesión con un sensor: el alumnado descubre que un robot que solo cuenta tiempo va «a ciegas» y que el sensor de ultrasonidos le permite saber dónde están las cosas. Entiende cómo mide (un silbido de 40.000 vibraciones por segundo, el eco y el tiempo que tarda en volver, dividido entre 2), qué puede ver (un cono estrecho, de 2 a 400 cm) y qué quiere decir el 500 (no ha vuelto ningún eco). También aprende la diferencia entre «al iniciar» (una vez) y «para siempre» (sin parar), que será la base de todas las decisiones del robot. En el robot real, calibra el sensor con una regla y descubre que la ropa y las superficies inclinadas confunden el sonido.",
    claus: [
      "El sensor d'ultrasons envia un xiulet, escolta l'eco i, amb el temps que tarda, calcula la distància.|El sensor de ultrasonidos envía un silbido, escucha el eco y, con el tiempo que tarda, calcula la distancia.",
      "Com que el so va i torna, la distància és la meitat del camí del so (temps × 34 ÷ 2).|Como el sonido va y vuelve, la distancia es la mitad del camino del sonido (tiempo × 34 ÷ 2).",
      "Només veu just al davant, de 2 a 400 cm; 500 vol dir «no veig res», no «hi ha una cosa a 5 metres».|Solo ve justo delante, de 2 a 400 cm; 500 quiere decir «no veo nada», no «hay algo a 5 metros».",
      "«En iniciar» fa els blocs un cop; «per sempre» els repeteix sense parar, i no comença fins que «en iniciar» ha acabat.|«Al iniciar» hace los bloques una vez; «para siempre» los repite sin parar, y no empieza hasta que «al iniciar» ha terminado."
    ],
    prev: [
      "Distància = velocitat × temps i calcular esperes (unitat 2, sessió 1).|Distancia = velocidad × tiempo y calcular esperas (unidad 2, sesión 1).",
      "Gir de 90° sobre si mateix (unitats 1 i 2).|Giro de 90° sobre sí mismo (unidades 1 y 2).",
      "Saber què és un sensor i un actuador (unitat 1, sessió 1).|Saber qué es un sensor y un actuador (unidad 1, sesión 1).",
      "Multiplicar i dividir per 2 (matemàtiques).|Multiplicar y dividir por 2 (matemáticas)."
    ],
    obj: [
      "L'alumne/a explica amb les seves paraules com mesura el sensor d'ultrasons: xiulet, eco i temps.|El alumno/a explica con sus palabras cómo mide el sensor de ultrasonidos: silbido, eco y tiempo.",
      "L'alumne/a calcula una distància a partir del temps de l'eco (34 cm per ms, i dividit entre 2).|El alumno/a calcula una distancia a partir del tiempo del eco (34 cm por ms, y dividido entre 2).",
      "L'alumne/a interpreta les lectures del sensor, també el 500 (no veu res), i en coneix els límits (con estret, 2-400 cm).|El alumno/a interpreta las lecturas del sensor, también el 500 (no ve nada), y conoce sus límites (cono estrecho, 2-400 cm).",
      "L'alumne/a distingeix «en iniciar» de «per sempre» i fa servir «per sempre» per tenir la mesura sempre al dia.|El alumno/a distingue «al iniciar» de «para siempre» y usa «para siempre» para tener la medida siempre al día."
    ],
    comp: [
      "Competència digital: programar un robot amb blocs i llegir les dades d'un sensor|Competencia digital: programar un robot con bloques y leer los datos de un sensor",
      "Pensament computacional: bucle infinit («per sempre») i diferència entre fer una cosa un cop o repetir-la|Pensamiento computacional: bucle infinito («para siempre») y diferencia entre hacer algo una vez o repetirlo",
      "Competència STEM: el so, l'eco i la velocitat del so; mesurar amb el regle i comparar mesures|Competencia STEM: el sonido, el eco y la velocidad del sonido; medir con la regla y comparar medidas",
      "Matemàtiques: proporcionalitat (distància = velocitat × temps), multiplicar i dividir amb decimals|Matemáticas: proporcionalidad (distancia = velocidad × tiempo), multiplicar y dividir con decimales"
    ],
    vocab: [
      ["Sensor|Sensor", "La part del robot que nota alguna cosa del món (distància, llum, línia…) i la converteix en un número.|La parte del robot que nota algo del mundo (distancia, luz, línea…) y lo convierte en un número."],
      ["Ultrasons|Ultrasonidos", "Sons tan aguts que les persones no els sentim. El sensor del Maqueen en fa servir.|Sonidos tan agudos que las personas no los oímos. El sensor del Maqueen los usa."],
      ["Eco|Eco", "El so que torna després de rebotar en una superfície.|El sonido que vuelve después de rebotar en una superficie."],
      ["Distància (cm)|Distancia (cm)", "El valor que dona el sensor: els centímetres fins a l'obstacle del davant (500 si no veu res).|El valor que da el sensor: los centímetros hasta el obstáculo de delante (500 si no ve nada)."],
      ["Per sempre|Para siempre", "Guió que repeteix els seus blocs sense parar mentre el robot està encès.|Guion que repite sus bloques sin parar mientras el robot está encendido."],
      ["Valor|Valor", "Un número que va dins d'un altre bloc, com «distància», en lloc d'una ordre.|Un número que va dentro de otro bloque, como «distancia», en lugar de una orden."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Com mesura un robot?»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «¿Cómo mide un robot?»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen Lite V5 amb micro:bit V2, piles i cable USB per cada grup de 3-4|Un kit Maqueen Lite V5 con micro:bit V2, pilas y cable USB por cada grupo de 3-4",
        "Per grup: un regle o una cinta mètrica, una capsa de cartró o un llibre gruixut i un jersei o un coixí|Por grupo: una regla o una cinta métrica, una caja de cartón o un libro grueso y un jersey o un cojín"
      ],
      imprimir: ["Targetes: parelles de l'eco|Tarjetas: parejas del eco", "Fitxa: calibrem el sensor|Ficha: calibramos el sensor"],
      prep: [
        "Imprimir i retallar un paquet de targetes de l'eco per grup.|Imprimir y recortar un paquete de tarjetas del eco por grupo.",
        "Preparar a MakeCode un projecte amb l'extensió del Maqueen i el programa «per sempre: mostra el número distància» (el botó &lt;/&gt; del simulador dona el codi).|Preparar en MakeCode un proyecto con la extensión del Maqueen y el programa «para siempre: muestra el número distancia» (el botón &lt;/&gt; del simulador da el código).",
        "Comprovar que les piles dels robots estan carregades i que cada micro:bit es pot connectar per USB.|Comprobar que las pilas de los robots están cargadas y que cada micro:bit se puede conectar por USB.",
        "Provar abans les demos de les diapositives 4 i 10 per saber què passa.|Probar antes las demos de las diapositivas 4 y 10 para saber qué pasa."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el robot a cegues|Bienvenida: el robot a ciegas", fase: 'inici',
        fa: "Presenta la unitat: el port de l'illa, on les caixes canvien de lloc cada nit. Pregunta com sap un ratpenat on és la paret a les fosques i recull respostes sense corregir. Recorda amb la diapositiva de repàs que, fins ara, el robot només sabia comptar temps.|Presenta la unidad: el puerto de la isla, donde las cajas cambian de sitio cada noche. Pregunta cómo sabe un murciélago dónde está la pared a oscuras y recoge respuestas sin corregir. Recuerda con la diapositiva de repaso que, hasta ahora, el robot solo sabía contar tiempo.",
        diu: ["Com pot saber un ratpenat on és la paret si no hi veu?|¿Cómo puede saber un murciélago dónde está la pared si no ve?",
          "Fins ara, el nostre robot sabia on era la caixa? O només comptava segons? (Només comptava segons.)|Hasta ahora, ¿nuestro robot sabía dónde estaba la caja? ¿O solo contaba segundos? (Solo contaba segundos.)",
          "Si el robot tingués «ulls», què li agradaria saber? (On són les caixes i les parets.)|Si el robot tuviera «ojos», ¿qué le gustaría saber? (Dónde están las cajas y las paredes.)"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Com funciona el sensor d'ultrasons|Cómo funciona el sensor de ultrasonidos", fase: 'teoria',
        fa: "Executa la demo del robot a cegues i deixa que la classe expliqui per què xoca. Explica l'eco amb l'animació i fes el càlcul a la pissarra: 2 ms × 34 cm = 68 cm, i com que va i torna, 34 cm. Mostra el con estret i el 500. Acaba amb «en iniciar» i «per sempre»: abans d'executar la demo, que la classe digui si el número de la pantalla canviarà.|Ejecuta la demo del robot a ciegas y deja que la clase explique por qué choca. Explica el eco con la animación y haz el cálculo en la pizarra: 2 ms × 34 cm = 68 cm, y como va y vuelve, 34 cm. Muestra el cono estrecho y el 500. Acaba con «al iniciar» y «para siempre»: antes de ejecutar la demo, que la clase diga si el número de la pantalla cambiará.",
        diu: ["Per què xoca, si el programa és el mateix que ahir?|¿Por qué choca, si el programa es el mismo que ayer?",
          "Si l'eco tarda 4 ms, a quina distància és la caixa?|Si el eco tarda 4 ms, ¿a qué distancia está la caja?",
          "500 vol dir que hi ha una caixa a 5 metres? Què vol dir, doncs?|¿500 quiere decir que hay una caja a 5 metros? ¿Qué quiere decir, entonces?",
          "Abans d'executar-ho: el número canviarà o es quedarà quiet?|Antes de ejecutarlo: ¿el número cambiará o se quedará quieto?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9', 's10'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Parelles de l'eco|Parejas del eco", fase: 'desconnectat',
        fa: "En grups de 3, repartiu les targetes cap per avall: unes diuen quant tarda l'eco i les altres, una distància. Per torns, cada alumne/a gira dues targetes i diu si fan parella (temps × 34 ÷ 2). El grup ho comprova amb paper i llapis. La targeta «No torna cap eco» fa parella amb «500». Guanya punts el grup que explica bé el càlcul, no el que va més de pressa.|En grupos de 3, repartid las tarjetas boca abajo: unas dicen cuánto tarda el eco y las otras, una distancia. Por turnos, cada alumno/a gira dos tarjetas y dice si hacen pareja (tiempo × 34 ÷ 2). El grupo lo comprueba con papel y lápiz. La tarjeta «No vuelve ningún eco» hace pareja con «500». Gana puntos el grupo que explica bien el cálculo, no el que va más deprisa.",
        diu: ["Primer multipliqueu per 34 i després dividiu entre 2: per què entre 2?|Primero multiplicad por 34 y después dividid entre 2: ¿por qué entre 2?",
          "Quina targeta no té cap temps? Amb quina va? (Amb el 500.)|¿Qué tarjeta no tiene ningún tiempo? ¿Con cuál va? (Con el 500.)",
          "Eco de 3 ms: quants centímetres? (3 × 34 = 102, ÷ 2 = 51 cm.)|Eco de 3 ms: ¿cuántos centímetros? (3 × 34 = 102, ÷ 2 = 51 cm.)"],
        slides: ['s11'], app: "Cap: activitat sense pantalla. A l'app, el pas «La pilota eco» queda per fer a casa (toqueu «Ara no»).|Ninguna: actividad sin pantalla. En la app, el paso «La pelota eco» queda para hacer en casa (tocad «Ahora no»).", org: "Grups de 3|Grupos de 3" },
      { min: 15, t: "A l'ordinador: descobreix i mesura|En el ordenador: descubre y mide", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins al repte del racó. Passeja i fixa't en qui posa temps a l'atzar al primer repte: demana-li que llegeixi la distància al tauler i que faci el càlcul en un paper abans de tocar res.|Cada alumno/a avanza a su ritmo hasta el reto del rincón. Pasea y fíjate en quién pone tiempos al azar en el primer reto: pídele que lea la distancia en el tablero y que haga el cálculo en un papel antes de tocar nada.",
        diu: ["Quina distància marca el tauler abans d'executar? Quant ha d'avançar per quedar a 10 cm?|¿Qué distancia marca el tablero antes de ejecutar? ¿Cuánto tiene que avanzar para quedarse a 10 cm?",
          "Al racó, prova primer només la meitat del programa i mira què mesura després de girar.|En el rincón, prueba primero solo la mitad del programa y mira qué mide después de girar.",
          "Per què el robot no s'ha aturat on volies? Has calculat amb tota la distància o només amb el tros que ha d'avançar?|¿Por qué el robot no se ha parado donde querías? ¿Has calculado con toda la distancia o solo con el trozo que tiene que avanzar?"],
        slides: ['s12'], app: "De «Recorda» fins al repte «El racó del magatzem»: les targetes de «Descobreix», el 500, ordenar la mesura, «Mostra el número», «Investiga» i els dos primers reptes.|Desde «Recuerda» hasta el reto «El rincón del almacén»: las tarjetas de «Descubre», el 500, ordenar la medida, «Muestra el número», «Investiga» y los dos primeros retos.", org: "Individual|Individual" },
      { min: 12, t: "Robot de veritat: calibrem el sensor|Robot de verdad: calibramos el sensor", fase: 'robot',
        fa: "Muntatge: per a cada grup, un regle o una cinta mètrica enganxada a la taula davant del robot (el zero just als «ulls» del sensor) i una capsa rígida. En grups de 3-4 per kit: obriu el projecte de MakeCode preparat (per sempre: mostra el número distància) i descarregueu-lo a la micro:bit amb el cable USB. Encengueu el robot: la micro:bit mostra un ✓ quan troba el robot i comença a mostrar números. Aquest programa no mou els motors: el robot es queda quiet a la taula, lluny de la vora. Poseu la capsa a 10, 20 i 40 cm del sensor (mesurant amb el regle des dels «ulls») i apunteu què marca la micro:bit a la fitxa. Després proveu el jersei, la capsa inclinada i apuntar a l'aire. Un alumne/a mesura, un altre llegeix la pantalla, un altre apunta i un altre posa la capsa; canvieu els papers. En acabar, apagueu el robot.|Montaje: para cada grupo, una regla o una cinta métrica pegada a la mesa delante del robot (el cero justo en los «ojos» del sensor) y una caja rígida. En grupos de 3-4 por kit: abrid el proyecto de MakeCode preparado (para siempre: muestra el número distancia) y descargadlo en la micro:bit con el cable USB. Encended el robot: la micro:bit muestra un ✓ cuando encuentra el robot y empieza a mostrar números. Este programa no mueve los motores: el robot se queda quieto en la mesa, lejos del borde. Poned la caja a 10, 20 y 40 cm del sensor (midiendo con la regla desde los «ojos») y apuntad qué marca la micro:bit en la ficha. Después probad el jersey, la caja inclinada y apuntar al aire. Un alumno/a mide, otro lee la pantalla, otro apunta y otro pone la caja; cambiad los papeles. Al terminar, apagad el robot.",
        diu: ["Mesureu des dels «ulls» del sensor, no des de les rodes.|Medid desde los «ojos» del sensor, no desde las ruedas.",
          "El robot de veritat marca exactament el mateix que el regle? Quanta diferència hi ha?|¿El robot de verdad marca exactamente lo mismo que la regla? ¿Cuánta diferencia hay?",
          "Què passa amb el jersei? Per què creieu que costa més de mesurar? (La roba tova s'empassa el so.)|¿Qué pasa con el jersey? ¿Por qué creéis que cuesta más de medir? (La ropa blanda se traga el sonido.)",
          "El número passa per la pantalla xifra a xifra: per què tarda tant? (La micro:bit fa córrer les xifres per la pantalla de 5 × 5.)|El número pasa por la pantalla cifra a cifra: ¿por qué tarda tanto? (La micro:bit hace correr las cifras por la pantalla de 5 × 5.)"],
        slides: ['s13', 's14'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers que roten|Grupos de 3-4 por kit con papeles que rotan" },
      { min: 8, t: "Reptes i crea: la ronda i el radar|Retos y crea: la ronda y el radar", fase: 'crea',
        fa: "Torneu als ordinadors per fer la ronda del vigilant (amb només 5 blocs, cal «per sempre») i el radar del far. Qui acabi, que compari els números del radar amb les mesures del robot de veritat.|Volved a los ordenadores para hacer la ronda del vigilante (con solo 5 bloques, hace falta «para siempre») y el radar del faro. Quien termine, que compare los números del radar con las medidas del robot de verdad.",
        diu: ["Amb 5 blocs no hi cap la ronda sencera: qui la pot repetir per vosaltres?|Con 5 bloques no cabe la ronda entera: ¿quién la puede repetir por vosotros?",
          "Al radar, quin número surt quan mira cap a la paret del fons?|En el radar, ¿qué número sale cuando mira hacia la pared del fondo?",
          "Què passaria si el «mostra el número» fos a «en iniciar»? (Només mesuraria un cop.)|¿Qué pasaría si el «muestra el número» estuviera en «al iniciar»? (Solo mediría una vez.)"],
        slides: ['s15'], app: "«Pausa activa», el repte «La ronda del vigilant» i el projecte «El radar del far» (es desa a Projectes).|«Pausa activa», el reto «La ronda del vigilante» y el proyecto «El radar del faro» (se guarda en Proyectos).", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum, deixa que facin les preguntes finals de l'app i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen, deja que hagan las preguntas finales de la app y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Qui m'explica en tres passos com mesura el sensor?|¿Quién me explica en tres pasos cómo mide el sensor?",
          "On posaries un bloc perquè es repeteixi sense parar? (A «per sempre».)|¿Dónde pondrías un bloque para que se repita sin parar? (En «para siempre».)",
          "La propera sessió el robot farà servir el sensor per decidir sol quan s'atura.|La próxima sesión el robot usará el sensor para decidir solo cuándo se para."],
        slides: ['s16', 's17'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Creu que 500 vol dir que hi ha un obstacle a 5 metres.|Cree que 500 quiere decir que hay un obstáculo a 5 metros.",
        "Pregunta-li fins a quants centímetres mesura el sensor (400). Si el número és més gran, què ha passat amb l'eco? Que ho comprovi apuntant el robot de veritat a l'aire.|Pregúntale hasta cuántos centímetros mide el sensor (400). Si el número es más grande, ¿qué ha pasado con el eco? Que lo compruebe apuntando el robot de verdad al aire."],
      ["Calcula el temps amb tota la distància (66 cm) i el robot xoca.|Calcula el tiempo con toda la distancia (66 cm) y el robot choca.",
        "Que dibuixi una línia del robot a la caixa i hi marqui on s'ha d'aturar: quin tros ha de recórrer de veritat?|Que dibuje una línea del robot a la caja y marque dónde tiene que pararse: ¿qué trozo tiene que recorrer de verdad?"],
      ["Posa «mostra el número» a «en iniciar» i no entén per què el número no canvia.|Pone «muestra el número» en «al iniciar» y no entiende por qué el número no cambia.",
        "Pregunta quantes vegades es fan els blocs d'«en iniciar». Que miri l'animació de les dues columnes i ho provi a «per sempre».|Pregunta cuántas veces se hacen los bloques de «al iniciar». Que mire la animación de las dos columnas y lo pruebe en «para siempre»."],
      ["A la ronda posa una espera llarga a «en iniciar» i «per sempre» no comença.|En la ronda pone una espera larga en «al iniciar» y «para siempre» no empieza.",
        "Recorda-li la targeta «Per sempre espera el seu torn»: què fa «per sempre» mentre «en iniciar» encara no ha acabat?|Recuérdale la tarjeta «Para siempre espera su turno»: ¿qué hace «para siempre» mientras «al iniciar» todavía no ha terminado?"],
      ["Al robot de veritat mesura des de les rodes o des del darrere i les dades no quadren.|En el robot de verdad mide desde las ruedas o desde atrás y los datos no cuadran.",
        "Que toqui amb el dit els dos «ulls» del sensor: d'aquí surt el so i d'aquí s'ha de mesurar.|Que toque con el dedo los dos «ojos» del sensor: de aquí sale el sonido y desde aquí hay que medir."],
      ["Pensa que els «ulls» del sensor són una càmera que veu la caixa.|Piensa que los «ojos» del sensor son una cámara que ve la caja.",
        "Pregunta-li si el sensor sap de quin color és la caixa. Recorda-li que un «ull» és un altaveu i l'altre, un micròfon: només mesuren quant tarda l'eco.|Pregúntale si el sensor sabe de qué color es la caja. Recuérdale que un «ojo» es un altavoz y el otro, un micrófono: solo miden cuánto tarda el eco."]
    ],
    diff: {
      mes: "Calcular quant tarda l'eco per a una paret a 1 metre (200 cm d'anada i tornada ÷ 34 ≈ 6 ms) i fer el radar amb girs més petits per mesurar més direccions. Proposar com es podria fer un mapa del magatzem amb les mesures del radar.|Calcular cuánto tarda el eco para una pared a 1 metro (200 cm de ida y vuelta ÷ 34 ≈ 6 ms) y hacer el radar con giros más pequeños para medir más direcciones. Proponer cómo se podría hacer un mapa del almacén con las medidas del radar.",
      menys: "Fer les parelles de l'eco amb una calculadora i una taula ja començada (1 ms → 17 cm). Al primer repte, donar-li el càlcul a mitges: «ha d'avançar 56 cm; quants segons a 15,6 cm/s?».|Hacer las parejas del eco con una calculadora y una tabla ya empezada (1 ms → 17 cm). En el primer reto, darle el cálculo a medias: «tiene que avanzar 56 cm; ¿cuántos segundos a 15,6 cm/s?»."
    },
    aval: {
      ticket: ["Explica en tres passos com mesura el sensor d'ultrasons.|Explica en tres pasos cómo mide el sensor de ultrasonidos.",
        "Què vol dir que el sensor doni 500? I on poses un bloc perquè es repeteixi sense parar?|¿Qué quiere decir que el sensor dé 500? ¿Y dónde pones un bloque para que se repita sin parar?"],
      rubric: [
        ["Funcionament del sensor|Funcionamiento del sensor", "Explica el xiulet, l'eco i el temps, i calcula una distància dividint entre 2.|Explica el silbido, el eco y el tiempo, y calcula una distancia dividiendo entre 2.", "Sap que el sensor fa servir el so, però no relaciona el temps amb la distància.|Sabe que el sensor usa el sonido, pero no relaciona el tiempo con la distancia."],
        ["Lectures i límits|Lecturas y límites", "Interpreta el 500 i explica per què una superfície tova o inclinada dona mesures dolentes.|Interpreta el 500 y explica por qué una superficie blanda o inclinada da medidas malas.", "Llegeix la distància, però creu que el 500 és una distància de veritat.|Lee la distancia, pero cree que el 500 es una distancia de verdad."],
        ["En iniciar i per sempre|Al iniciar y para siempre", "Tria bé on va cada bloc i resol la ronda amb 5 blocs dins de «per sempre».|Elige bien dónde va cada bloque y resuelve la ronda con 5 bloques dentro de «para siempre».", "Necessita provar els dos guions per saber quin repeteix els blocs.|Necesita probar los dos guiones para saber cuál repite los bloques."],
        ["Calibrar el sensor real|Calibrar el sensor real", "Mesura amb el regle, compara amb la micro:bit i treu una conclusió sobre quan el sensor és fiable.|Mide con la regla, compara con la micro:bit y saca una conclusión sobre cuándo el sensor es fiable.", "Apunta les mesures, però no les compara ni en treu conclusions.|Apunta las medidas, pero no las compara ni saca conclusiones."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer l'activitat «La pilota eco»: feu rodolar una pilota cap a una paret des de 2 i des de 4 passos i compteu quant tarda a tornar.|En casa, con el móvil, podéis repetir la sesión y hacer la actividad «La pelota eco»: haced rodar una pelota hacia una pared desde 2 y desde 4 pasos y contad cuánto tarda en volver.",
    faq: [
      ["Per què no sentim el xiulet?|¿Por qué no oímos el silbido?", "Vibra 40.000 vegades cada segon i les orelles humanes només senten fins a unes 20.000. Els gossos i els ratpenats sí que senten sons tan aguts.|Vibra 40.000 veces cada segundo y los oídos humanos solo oyen hasta unas 20.000. Los perros y los murciélagos sí oyen sonidos tan agudos."],
      ["Per què es divideix entre 2?|¿Por qué se divide entre 2?", "Perquè el so fa el camí dues vegades: d'anada fins a la caixa i de tornada fins al robot. La caixa és a la meitat del camí total.|Porque el sonido hace el camino dos veces: de ida hasta la caja y de vuelta hasta el robot. La caja está a la mitad del camino total."],
      ["El sensor veu els colors?|¿El sensor ve los colores?", "No: no és una càmera. Només sap quant tarda l'eco. Una caixa vermella i una de blava, si són igual de dures i de cara, donen la mateixa distància.|No: no es una cámara. Solo sabe cuánto tarda el eco. Una caja roja y una azul, si son igual de duras y de cara, dan la misma distancia."],
      ["Per què surt 500 si apunto a la paret de l'altra punta de la classe?|¿Por qué sale 500 si apunto a la pared de la otra punta de la clase?", "Perquè és massa lluny (més de 4 metres) o el so rebota cap a un altre costat i l'eco no torna. 500 és el número que dona la llibreria del Maqueen quan no ha rebut cap eco.|Porque está demasiado lejos (más de 4 metros) o el sonido rebota hacia otro lado y el eco no vuelve. 500 es el número que da la librería del Maqueen cuando no ha recibido ningún eco."],
      ["Si «per sempre» es repeteix sempre, quan s'acaba?|Si «para siempre» se repite siempre, ¿cuándo termina?", "Mai, mentre el robot estigui encès. Per parar-lo, s'apaga l'interruptor (o es reinicia la micro:bit).|Nunca, mientras el robot esté encendido. Para pararlo, se apaga el interruptor (o se reinicia la micro:bit)."],
      ["El sensor pot veure una cosa molt prima, com un llapis?|¿El sensor puede ver algo muy fino, como un lápiz?", "Costa molt: el so rebota millor en superfícies grans, dures i de cara. Per això a les pistes fem servir capses i llibres.|Cuesta mucho: el sonido rebota mejor en superficies grandes, duras y de cara. Por eso en las pistas usamos cajas y libros."]
    ],
    tec: [
      ["La micro:bit mostra sempre el mateix número o 0.|La micro:bit muestra siempre el mismo número o 0.", "Comproveu que el programa té el bloc a «per sempre», que el robot és encès (la micro:bit ha mostrat el ✓) i que la micro:bit està ben endollada al robot.|Comprobad que el programa tiene el bloque en «para siempre», que el robot está encendido (la micro:bit ha mostrado el ✓) y que la micro:bit está bien enchufada al robot."],
      ["El número salta molt d'una mesura a l'altra.|El número salta mucho de una medida a otra.", "Poseu la capsa ben de cara al sensor i quieta, i allunyeu mans i jerseis. Una superfície inclinada o tova fa que l'eco es perdi.|Poned la caja bien de cara al sensor y quieta, y alejad manos y jerséis. Una superficie inclinada o blanda hace que el eco se pierda."],
      ["El número triga molt a canviar.|El número tarda mucho en cambiar.", "És normal: mostrar un número de dues o tres xifres a la pantalla de 5 × 5 tarda una estona. Espereu que acabi de passar abans d'apuntar-lo.|Es normal: mostrar un número de dos o tres cifras en la pantalla de 5 × 5 tarda un rato. Esperad a que termine de pasar antes de apuntarlo."],
      ["A MakeCode no trobo el bloc de la distància.|En MakeCode no encuentro el bloque de la distancia.", "És a la categoria «Maqueen v5» (amb l'extensió «maqueen» afegida): «read ultrasonic sensor». Fixeu-vos que sigui el de la v5, no el de la v4.|Está en la categoría «Maqueen v5» (con la extensión «maqueen» añadida): «read ultrasonic sensor» (en castellano, «Leer la distancia del sensor ultrasónico (CM)»). Fijaos en que sea el de la v5, no el de la v4."],
      ["El robot és a la taula i algú el toca: es pot caure.|El robot está en la mesa y alguien lo toca: se puede caer.", "Aquest programa no mou els motors, però deixeu el robot lluny de la vora i apagueu-lo quan acabeu.|Este programa no mueve los motores, pero dejad el robot lejos del borde y apagadlo cuando terminéis."]
    ],
    seg: [
      "A «La pilota eco», feu rodolar la pilota (no llançar-la) i lluny de finestres i coses que es puguin trencar.|En «La pelota eco», haced rodar la pelota (no lanzarla) y lejos de ventanas y cosas que se puedan romper.",
      "Robot quiet a la taula, lluny de la vora; l'interruptor apagat en acabar.|Robot quieto en la mesa, lejos del borde; el interruptor apagado al terminar.",
      "Els ultrasons del Maqueen no fan mal ni a les persones ni als animals: el so és molt fluix.|Los ultrasonidos del Maqueen no hacen daño ni a las personas ni a los animales: el sonido es muy flojo."
    ],
    extra: [
      "Calcular quant tarda l'eco d'una paret a 1 metre (200 cm d'anada i tornada ÷ 34 ≈ 6 ms).|Calcular cuánto tarda el eco de una pared a 1 metro (200 cm de ida y vuelta ÷ 34 ≈ 6 ms).",
      "Fer el radar del far amb girs més petits i dibuixar en un paper un «mapa» del magatzem amb les mesures.|Hacer el radar del faro con giros más pequeños y dibujar en un papel un «mapa» del almacén con las medidas.",
      "Investigar quins materials de l'aula reflecteixen millor el so (cartró, fusta, roba, paper) amb el robot real.|Investigar qué materiales del aula reflejan mejor el sonido (cartón, madera, ropa, papel) con el robot real."
    ],
    trans: [
      "Unitat 2: distància = velocitat × temps. Sessió següent: «si… si no» per aturar-se sol davant del mur.|Unidad 2: distancia = velocidad × tiempo. Sesión siguiente: «si… si no» para pararse solo delante del muro.",
      "Ciències: el so, l'eco i la ecolocalització dels ratpenats i els dofins.|Ciencias: el sonido, el eco y la ecolocalización de los murciélagos y los delfines.",
      "Matemàtiques: multiplicar, dividir entre 2 i comparar mesures (error d'1 o 2 cm).|Matemáticas: multiplicar, dividir entre 2 y comparar medidas (error de 1 o 2 cm)."
    ],
    slides: [
      { id: 's1', k: 'portada', t: "Com mesura un robot?|¿Cómo mide un robot?", x: "Unitat 3 · El sensor de distància: el Maqueen aprèn a «veure» amb el so.|Unidad 3 · El sensor de distancia: el Maqueen aprende a «ver» con el sonido.",
        nota: "Presenta l'objectiu: avui el robot deixarà d'anar a cegues.|Presenta el objetivo: hoy el robot dejará de ir a ciegas." },
      { id: 's2', k: 'pregunta', t: "Com ho fa un ratpenat?|¿Cómo lo hace un murciélago?", x: "Vola a les fosques sense xocar amb les parets. Com sap on són?|Vuela a oscuras sin chocar con las paredes. ¿Cómo sabe dónde están?",
        nota: "Recull idees sense corregir. Hi tornareu en explicar l'eco.|Recoge ideas sin corregir. Volveréis a ello al explicar el eco." },
      { id: 's3', k: 'repas', t: "Fins ara: motors i temps|Hasta ahora: motores y tiempo", punts: ["Distància = velocitat × temps (a 150, uns 15,6 cm cada segon).|Distancia = velocidad × tiempo (a 150, unos 15,6 cm cada segundo).", "Girar 90° sobre si mateix: uns 590 ms a velocitat 100.|Girar 90° sobre sí mismo: unos 590 ms a velocidad 100.", "Però el robot no sap on són les coses: va a cegues.|Pero el robot no sabe dónde están las cosas: va a ciegas."],
        nota: "Connecta amb la unitat 2: els programes de temps fix funcionen només si res no canvia de lloc.|Conecta con la unidad 2: los programas de tiempo fijo solo funcionan si nada cambia de sitio." },
      { id: 's4', k: 'robo', t: "Un robot a cegues|Un robot a ciegas", x: "Ahir la caixa era més lluny. Avui la grua l'ha deixada aquí. Què passarà?|Ayer la caja estaba más lejos. Hoy la grúa la ha dejado aquí. ¿Qué pasará?",
        robo: { w: { w: 120, h: 80, bot: [15, 40, 90], walls: [[70, 22, 10, 36]], time: 6 }, prog: 'start{ run:all,fwd,150 wait:4500 stop:all }' },
        nota: "Que la classe ho predigui abans d'executar. Xoca perquè el programa només compta temps.|Que la clase lo prediga antes de ejecutar. Choca porque el programa solo cuenta tiempo." },
      { id: 's5', k: 'anim', t: "L'eco|El eco", anim: 'k3echo', x: "Xiulet → rebota → torna l'eco. Com més lluny, més tarda.|Silbido → rebota → vuelve el eco. Cuanto más lejos, más tarda.",
        nota: "El xiulet és de 40.000 vibracions per segon: massa agut per a les nostres orelles. Els ratpenats i els dofins fan servir l'eco igual.|El silbido es de 40.000 vibraciones por segundo: demasiado agudo para nuestras orejas. Los murciélagos y los delfines usan el eco igual." },
      { id: 's6', k: 'anim', t: "Del temps als centímetres|Del tiempo a los centímetros", anim: 'k3math', x: "34 cm cada ms. Va i torna: entre 2.|34 cm cada ms. Va y vuelve: entre 2.",
        nota: "Fes a la pissarra un altre exemple: eco de 4 ms → 4 × 34 = 136 → 136 ÷ 2 = 68 cm.|Haz en la pizarra otro ejemplo: eco de 4 ms → 4 × 34 = 136 → 136 ÷ 2 = 68 cm." },
      { id: 's7', k: 'anim', t: "Un con estret|Un cono estrecho", anim: 'k3cone', x: "De 2 a 400 cm, just al davant. Cap eco: 500.|De 2 a 400 cm, justo delante. Ningún eco: 500.",
        nota: "Insisteix: 500 no és una distància, és el codi de «no veig res».|Insiste: 500 no es una distancia, es el código de «no veo nada»." },
      { id: 's8', k: 'concepte', t: "El bloc distància|El bloque distancia", pic: 'img/ment/dig.webp', punts: ["És un valor: un número que va dins d'altres blocs.|Es un valor: un número que va dentro de otros bloques.", "«Mostra el número distància» l'escriu a la pantalla de la micro:bit.|«Muestra el número distancia» lo escribe en la pantalla de la micro:bit.", "Un número de dues xifres tarda una estona a passar per la pantalla.|Un número de dos cifras tarda un rato en pasar por la pantalla."],
        blocks: ["mostra el número distància (cm)|muestra el número distancia (cm)"],
        nota: "Ensenya que la distància també es veu al tauler del simulador, sense cap bloc. A MakeCode, el bloc és «read ultrasonic sensor» de la categoria «Maqueen v5». Al simulador, un número de dues xifres tarda gairebé un segon; a la micro:bit de veritat, encara més, perquè les xifres corren per la pantalla.|Enseña que la distancia también se ve en el tablero del simulador, sin ningún bloque. En MakeCode, el bloque es «read ultrasonic sensor» (en castellano, «Leer la distancia del sensor ultrasónico (CM)») de la categoría «Maqueen v5». En el simulador, un número de dos cifras tarda casi un segundo; en la micro:bit de verdad, todavía más, porque las cifras corren por la pantalla." },
      { id: 's9', k: 'anim', t: "«En iniciar» o «per sempre»?|¿«Al iniciar» o «para siempre»?", anim: 'k3loop', x: "Un cop, o sense parar?|¿Una vez, o sin parar?",
        nota: "Remarca també que «per sempre» no comença fins que «en iniciar» ha acabat.|Remarca también que «para siempre» no empieza hasta que «al iniciar» ha terminado." },
      { id: 's10', k: 'robo', t: "La distància, sempre al dia|La distancia, siempre al día", x: "El robot avança a poc a poc i la micro:bit mostra la distància per sempre. Què veurem?|El robot avanza despacio y la micro:bit muestra la distancia para siempre. ¿Qué veremos?",
        robo: { w: { w: 120, h: 80, bot: [15, 40, 90], walls: [[95, 22, 10, 36]], time: 6 }, prog: 'start{ run:all,fwd,100 } forever{ num:dist }' },
        nota: "El número baixa a mesura que s'acosta. Compara-ho amb el número del tauler.|El número baja a medida que se acerca. Compáralo con el número del tablero." },
      { id: 's11', k: 'activitat', t: "Parelles de l'eco|Parejas del eco", timer: 8, punts: ["Gireu dues targetes: un temps i una distància.|Girad dos tarjetas: un tiempo y una distancia.", "Temps × 34 ÷ 2: fan parella?|Tiempo × 34 ÷ 2: ¿hacen pareja?", "Expliqueu el càlcul en veu alta abans de quedar-vos-les.|Explicad el cálculo en voz alta antes de quedároslas."],
        nota: "Passa pels grups i demana a cada alumne/a que justifiqui una parella. La targeta «No torna cap eco» va amb «500».|Pasa por los grupos y pide a cada alumno/a que justifique una pareja. La tarjeta «No vuelve ningún eco» va con «500»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Com mesura un robot?».|Abre la sesión «¿Cómo mide un robot?».", "Al primer repte, llegeix la distància i calcula abans d'executar.|En el primer reto, lee la distancia y calcula antes de ejecutar.", "Para quan acabis «El racó del magatzem».|Para cuando acabes «El rincón del almacén»."],
        nota: "«La pilota eco» queda per a casa: que toquin «Ara no».|«La pelota eco» queda para casa: que toquen «Ahora no»." },
      { id: 's13', k: 'activitat', t: "Calibrem el sensor de veritat|Calibramos el sensor de verdad", timer: 12, punts: ["Capsa a 10, 20 i 40 cm dels «ulls»: apunteu què marca.|Caja a 10, 20 y 40 cm de los «ojos»: apuntad qué marca.", "Proveu el jersei, la capsa inclinada i l'aire.|Probad el jersey, la caja inclinada y el aire."],
        code: "Maqueen_V5.I2CInit()\nbasic.forever(function () {\n    basic.showNumber(Maqueen_V5.Ultrasonic())\n})",
        nota: "Aquest programa no mou els motors, però el robot ha d'estar lluny de la vora de la taula. En acabar, apagueu l'interruptor.|Este programa no mueve los motores, pero el robot tiene que estar lejos del borde de la mesa. Al terminar, apagad el interruptor." },
      { id: 's14', k: 'concepte', t: "El sensor de veritat|El sensor de verdad", pic: 'img/ic/ruler.webp', punts: ["Pot marcar 1 o 2 cm diferent del regle: per això calibrem.|Puede marcar 1 o 2 cm diferente de la regla: por eso calibramos.", "Les superfícies toves (roba, escuma) s'empassen el so.|Las superficies blandas (ropa, espuma) se tragan el sonido.", "Una superfície inclinada fa rebotar el so cap a un altre costat.|Una superficie inclinada hace rebotar el sonido hacia otro lado."],
        nota: "Posa en comú les fitxes: quin grup ha trobat més diferència i per què?|Poned en común las fichas: ¿qué grupo ha encontrado más diferencia y por qué?" },
      { id: 's15', k: 'repte', t: "La ronda i el radar|La ronda y el radar", timer: 8, punts: ["La ronda del vigilant: només 5 blocs, amb «per sempre».|La ronda del vigilante: solo 5 bloques, con «para siempre».", "El radar del far: gira a trossos i mostra la distància.|El radar del faro: gira a trozos y muestra la distancia."],
        nota: "Si algú s'encalla a la ronda, pregunta-li què ha de fer el robot una sola vegada i què s'ha de repetir.|Si alguien se atasca en la ronda, pregúntale qué tiene que hacer el robot una sola vez y qué se tiene que repetir." },
      { id: 's16', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["El sensor envia un xiulet i escolta l'eco: el temps diu la distància.|El sensor envía un silbido y escucha el eco: el tiempo dice la distancia.", "Mesura de 2 a 400 cm, just al davant; 500 vol dir que no veu res.|Mide de 2 a 400 cm, justo delante; 500 quiere decir que no ve nada.", "«Per sempre» repeteix sense parar: la mesura sempre al dia.|«Para siempre» repite sin parar: la medida siempre al día."],
        nota: "Torna a la pregunta del ratpenat: ara sabeu que fa servir l'eco, com el Maqueen.|Vuelve a la pregunta del murciélago: ahora sabéis que usa el eco, como el Maqueen." },
      { id: 's17', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Com mesura el sensor, en tres passos?|¿Cómo mide el sensor, en tres pasos?", "Què vol dir 500? On poses un bloc perquè es repeteixi?|¿Qué quiere decir 500? ¿Dónde pones un bloque para que se repita?"],
        nota: "Anota qui confon «en iniciar» i «per sempre»: a la sessió 2 és clau.|Anota quién confunde «al iniciar» y «para siempre»: en la sesión 2 es clave." }
    ],
    print: [
      { id: 'p1', t: "Targetes: parelles de l'eco|Tarjetas: parejas del eco", k: 'targetes',
        intro: "Un paquet per grup de 3. Cada targeta de temps fa parella amb una de distància: temps × 34 ÷ 2 (el so fa uns 34 cm cada ms i va i torna).|Un paquete por grupo de 3. Cada tarjeta de tiempo hace pareja con una de distancia: tiempo × 34 ÷ 2 (el sonido hace unos 34 cm cada ms y va y vuelve).",
        items: [
          { t: "Eco: 1 ms ⏱️|Eco: 1 ms ⏱️", n: 1 }, { t: "17 cm 📏|17 cm 📏", n: 1 },
          { t: "Eco: 2 ms ⏱️|Eco: 2 ms ⏱️", n: 1 }, { t: "34 cm 📏|34 cm 📏", n: 1 },
          { t: "Eco: 3 ms ⏱️|Eco: 3 ms ⏱️", n: 1 }, { t: "51 cm 📏|51 cm 📏", n: 1 },
          { t: "Eco: 4 ms ⏱️|Eco: 4 ms ⏱️", n: 1 }, { t: "68 cm 📏|68 cm 📏", n: 1 },
          { t: "Eco: 6 ms ⏱️|Eco: 6 ms ⏱️", n: 1 }, { t: "102 cm 📏|102 cm 📏", n: 1 },
          { t: "No torna cap eco 🔇|No vuelve ningún eco 🔇", n: 1 }, { t: "500 🚫|500 🚫", n: 1 }
        ] },
      { id: 'p2', t: "Fitxa: calibrem el sensor|Ficha: calibramos el sensor", k: 'fitxa',
        intro: "Robot quiet a la taula, lluny de la vora, amb aquest programa a la micro:bit. Mesureu sempre des dels «ulls» del sensor.|Robot quieto en la mesa, lejos del borde, con este programa en la micro:bit. Medid siempre desde los «ojos» del sensor.",
        items: [
          { q: "Capsa a 10 cm (amb el regle). Què marca la micro:bit?|Caja a 10 cm (con la regla). ¿Qué marca la micro:bit?", rprog: 'forever{ num:dist }', sol: "Un número proper a 10 (per exemple, entre 9 i 12).|Un número cercano a 10 (por ejemplo, entre 9 y 12)." },
          { q: "Capsa a 20 cm. Què marca?|Caja a 20 cm. ¿Qué marca?", sol: "Un número proper a 20.|Un número cercano a 20." },
          { q: "Capsa a 40 cm. Què marca? La diferència amb el regle és més gran o més petita que a 10 cm?|Caja a 40 cm. ¿Qué marca? ¿La diferencia con la regla es más grande o más pequeña que a 10 cm?", sol: "Un número proper a 40; la diferència sol ser d'1 o 2 cm.|Un número cercano a 40; la diferencia suele ser de 1 o 2 cm." },
          { q: "Ara poseu un jersei o un coixí a 20 cm. Què passa amb la mesura?|Ahora poned un jersey o un cojín a 20 cm. ¿Qué pasa con la medida?", sol: "Pot ser inestable o massa gran: la roba s'empassa part del so.|Puede ser inestable o demasiado grande: la ropa se traga parte del sonido." },
          { q: "Inclineu la capsa (com una rampa) a 20 cm. I apunteu el robot cap a l'aire. Què marca?|Inclinad la caja (como una rampa) a 20 cm. Y apuntad el robot hacia el aire. ¿Qué marca?", sol: "Amb la capsa inclinada, el so rebota cap a un altre costat i la mesura falla; cap a l'aire, un número molt gran o 500.|Con la caja inclinada, el sonido rebota hacia otro lado y la medida falla; hacia el aire, un número muy grande o 500." },
          { q: "Conclusió del grup: el sensor de veritat és fiable? Quan cal anar amb compte?|Conclusión del grupo: ¿el sensor de verdad es fiable? ¿Cuándo hay que ir con cuidado?", sol: "És fiable amb superfícies dures i de cara; cal compte amb la roba, les superfícies inclinades i les coses de costat.|Es fiable con superficies duras y de cara; hay que ir con cuidado con la ropa, las superficies inclinadas y las cosas de lado." }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Para abans del mur ---------- */
  'k3-2': {
    intro: "L'alumnat fa el gran salt de la unitat: el robot deixa de seguir temps fixos i decideix sol amb el bloc «si… si no». La condició «distància < 15» es pregunta dins de «per sempre» moltes vegades cada segon, i per això el robot s'atura a temps sigui on sigui el contenidor (ho comproven amb pistes alternatives). També descobreixen la frenada: com més de pressa va, més llisca, i cal decidir abans. Els errors típics són el signe girat (> en lloc de <), oblidar el «si no», posar el «si» a «en iniciar» i distreure el robot amb «mostra el número» dins del bucle. Al robot real proven la caixa a tres distàncies amb el mateix programa.|El alumnado da el gran salto de la unidad: el robot deja de seguir tiempos fijos y decide solo con el bloque «si… si no». La condición «distancia < 15» se pregunta dentro de «para siempre» muchas veces cada segundo, y por eso el robot se para a tiempo esté donde esté el contenedor (lo comprueban con pistas alternativas). También descubren la frenada: cuanto más deprisa va, más se desliza, y hay que decidir antes. Los errores típicos son el signo girado (> en lugar de <), olvidar el «si no», poner el «si» en «al iniciar» y distraer al robot con «muestra el número» dentro del bucle. En el robot real prueban la caja a tres distancias con el mismo programa.",
    claus: [
      "«Si… si no» fa una pregunta de sí o no: si és sí, fa uns blocs; si és no, uns altres.|«Si… si no» hace una pregunta de sí o no: si es sí, hace unos bloques; si es no, otros.",
      "El «si» ha d'anar dins de «per sempre» perquè la pregunta es repeteixi mentre el robot avança.|El «si» tiene que ir dentro de «para siempre» para que la pregunta se repita mientras el robot avanza.",
      "Un programa amb sensor funciona sigui on sigui el mur; un de temps fix, no.|Un programa con sensor funciona esté donde esté el muro; uno de tiempo fijo, no.",
      "Com més velocitat, més llisca en frenar: el llindar ha de ser més gran.|Cuanta más velocidad, más se desliza al frenar: el umbral tiene que ser más grande."
    ],
    prev: [
      "El bloc distància i el 500 (sessió anterior).|El bloque distancia y el 500 (sesión anterior).",
      "«En iniciar» i «per sempre» (sessió anterior).|«Al iniciar» y «para siempre» (sesión anterior).",
      "Comparar nombres amb < i > (matemàtiques de primària).|Comparar números con < y > (matemáticas de primaria)."
    ],
    obj: [
      "L'alumne/a fa servir «si… si no» amb una condició sobre la distància (menor que / major que).|El alumno/a usa «si… si no» con una condición sobre la distancia (menor que / mayor que).",
      "L'alumne/a explica per què el «si» ha d'anar dins de «per sempre» per reaccionar a temps.|El alumno/a explica por qué el «si» tiene que ir dentro de «para siempre» para reaccionar a tiempo.",
      "L'alumne/a programa un robot que s'atura sol davant d'un obstacle, sigui on sigui, i ho comprova a diverses pistes.|El alumno/a programa un robot que se para solo delante de un obstáculo, esté donde esté, y lo comprueba en varias pistas.",
      "L'alumne/a relaciona la velocitat amb la distància de frenada i ajusta la distància límit.|El alumno/a relaciona la velocidad con la distancia de frenada y ajusta la distancia límite."
    ],
    comp: [
      "Competència digital: programar decisions amb sensors i depurar programes|Competencia digital: programar decisiones con sensores y depurar programas",
      "Pensament computacional: condicionals, bucles i el bucle de control sensor-decisió-motor|Pensamiento computacional: condicionales, bucles y el bucle de control sensor-decisión-motor",
      "Competència STEM: inèrcia i distància de frenada; fer proves i mesurar|Competencia STEM: inercia y distancia de frenada; hacer pruebas y medir",
      "Matemàtiques: comparar nombres amb < i >, i interpretar una taula de mesures|Matemáticas: comparar números con < y >, e interpretar una tabla de medidas"
    ],
    vocab: [
      ["Condició|Condición", "Una pregunta que només es respon amb sí o no, com «distància < 15?».|Una pregunta que solo se responde con sí o no, como «¿distancia < 15?»."],
      ["Si… si no|Si… si no", "Bloc que fa uns blocs si la condició és certa i uns altres si no ho és.|Bloque que hace unos bloques si la condición es cierta y otros si no lo es."],
      ["Menor que (<) / major que (>)|Menor que (<) / mayor que (>)", "Signes per comparar dos números: 8 < 15 i 20 > 15.|Signos para comparar dos números: 8 < 15 y 20 > 15."],
      ["Llindar|Umbral", "El número de la condició a partir del qual el robot canvia el que fa (per exemple, 12 cm).|El número de la condición a partir del cual el robot cambia lo que hace (por ejemplo, 12 cm)."],
      ["Inèrcia|Inercia", "El robot continua movent-se una mica després d'aturar els motors.|El robot sigue moviéndose un poco después de parar los motores."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Para abans del mur»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Para antes del muro»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen Lite V5 amb micro:bit V2 per grup de 3-4, amb piles carregades|Un kit Maqueen Lite V5 con micro:bit V2 por grupo de 3-4, con pilas cargadas",
        "Per grup: una capsa de cartró rígida (el «mur»), un regle, cinta de pintor i un espai de terra d'1 metre|Por grupo: una caja de cartón rígida (el «muro»), una regla, cinta de pintor y un espacio de suelo de 1 metro"
      ],
      imprimir: ["Fitxa: què fa el robot?|Ficha: ¿qué hace el robot?", "Codi: para abans del mur|Código: para antes del muro"],
      prep: [
        "Marcar a terra, per a cada grup, una línia de sortida i marques a 40, 60 i 80 cm on posar la capsa.|Marcar en el suelo, para cada grupo, una línea de salida y marcas a 40, 60 y 80 cm donde poner la caja.",
        "Preparar a MakeCode el programa «para abans del mur» (diapositiva 12) amb l'extensió del Maqueen.|Preparar en MakeCode el programa «para antes del muro» (diapositiva 12) con la extensión del Maqueen.",
        "Imprimir una fitxa per alumne/a i un full de codi per grup.|Imprimir una ficha por alumno/a y una hoja de código por grupo.",
        "Provar les demos de les diapositives 5, 6 i 8 per saber on acaba el robot.|Probar las demos de las diapositivas 5, 6 y 8 para saber dónde acaba el robot."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el contenidor que es mou|Bienvenida: el contenedor que se mueve", fase: 'inici',
        fa: "Repassa el sensor i «per sempre» amb la diapositiva de repàs. Planteja el problema: la grua deixa el contenidor cada nit en un lloc diferent. Com ho farem perquè el robot s'aturi a 10 cm, sigui on sigui?|Repasa el sensor y «para siempre» con la diapositiva de repaso. Plantea el problema: la grúa deja el contenedor cada noche en un sitio diferente. ¿Cómo lo haremos para que el robot se pare a 10 cm, esté donde esté?",
        diu: ["Si el contenidor canvia de lloc cada nit, serveix un programa amb espera?|Si el contenedor cambia de sitio cada noche, ¿sirve un programa con espera?",
          "Què hauria de pensar el robot mentre avança? (Ja soc a prop?)|¿Qué debería pensar el robot mientras avanza? (¿Ya estoy cerca?)",
          "Quin bloc de la sessió anterior ens dona la distància?|¿Qué bloque de la sesión anterior nos da la distancia?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "«Si… si no» dins de «per sempre»|«Si… si no» dentro de «para siempre»", fase: 'teoria',
        fa: "Explica el «si… si no» amb l'animació i escriu a la pissarra la condició «distància < 15». Executa la demo que s'atura. Després, sense executar-la, ensenya la demo amb el «si» a «en iniciar» i fes que tothom predigui on acabarà (xoca). Acaba amb la frenada i amb l'error del número dins del bucle.|Explica el «si… si no» con la animación y escribe en la pizarra la condición «distancia < 15». Ejecuta la demo que se para. Después, sin ejecutarla, enseña la demo con el «si» en «al iniciar» y haz que todos predigan dónde acabará (choca). Acaba con la frenada y con el error del número dentro del bucle.",
        diu: ["8 és menor que 15? I 40? Què farà el robot a cada cas?|¿8 es menor que 15? ¿Y 40? ¿Qué hará el robot en cada caso?",
          "Si el «si» és a «en iniciar», quantes vegades pregunta?|Si el «si» está en «al iniciar», ¿cuántas veces pregunta?",
          "Per què el robot ràpid s'acosta més a la caixa?|¿Por qué el robot rápido se acerca más a la caja?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Què fa el robot?|¿Qué hace el robot?", fase: 'desconnectat',
        fa: "Cada alumne/a fa la fitxa: hi ha llistes de lectures del sensor i cal escriure què fa el robot a cada lectura amb diferents regles (una de bona, una amb el signe girat i una amb el sensor «adormit»). En parelles, compareu les respostes i expliqueu per què el robot de la regla girada no es mou.|Cada alumno/a hace la ficha: hay listas de lecturas del sensor y hay que escribir qué hace el robot en cada lectura con diferentes reglas (una buena, una con el signo girado y una con el sensor «dormido»). Por parejas, comparad las respuestas y explicad por qué el robot de la regla girada no se mueve.",
        diu: ["Llegiu la regla en veu alta amb cada número.|Leed la regla en voz alta con cada número.",
          "Si el sensor només llegeix un cop cada tres passos, què pot passar? (Pot arribar tard i xocar.)|Si el sensor solo lee una vez cada tres pasos, ¿qué puede pasar? (Puede llegar tarde y chocar.)",
          "Amb la regla B (signe girat), el robot es mou al principi? Per què?|Con la regla B (signo girado), ¿el robot se mueve al principio? ¿Por qué?"],
        slides: ['s10'], app: "Cap. A l'app, l'activitat «El robot i el sensor humans» queda per a casa.|Ninguna. En la app, la actividad «El robot y el sensor humanos» queda para casa.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 15, t: "A l'ordinador: el robot decideix|En el ordenador: el robot decide", fase: 'ordinador',
        fa: "Avancen fins al repte de les 3 pistes. A «On s'aturarà?», que pensin abans de tocar. Si algú resol la primera pista amb esperes, deixa que la segona pista li mostri el problema i pregunta-li qui hauria de decidir quan s'atura.|Avanzan hasta el reto de las 3 pistas. En «¿Dónde se parará?», que piensen antes de tocar. Si alguien resuelve la primera pista con esperas, deja que la segunda pista le muestre el problema y pregúntale quién debería decidir cuándo se para.",
        diu: ["Per afegir el «si no», toca el bloc «si».|Para añadir el «si no», toca el bloque «si».",
          "Funciona a la pista 1… i a la 2? Qui decideix quan s'atura, l'espera o el sensor?|Funciona en la pista 1… ¿y en la 2? ¿Quién decide cuándo se para, la espera o el sensor?",
          "A «On s'aturarà?», el robot s'atura a 20 cm o toca la caixa? Per què?|En «¿Dónde se parará?», ¿el robot se para a 20 cm o toca la caja? ¿Por qué?"],
        slides: ['s11'], app: "De «Recorda» fins al repte «La grua ha mogut el contenidor» (3 pistes).|Desde «Recuerda» hasta el reto «La grúa ha movido el contenedor» (3 pistas).", org: "Individual|Individual" },
      { min: 12, t: "Robot de veritat: para abans del mur|Robot de verdad: para antes del muro", fase: 'robot',
        fa: "Muntatge: per a cada grup, a terra, una línia de sortida amb marques a 40, 60 i 80 cm i una capsa de cartró rígida (el mur) d'almenys 15 cm d'alt. Cada grup descarrega el programa a la micro:bit amb l'interruptor del robot apagat. Robot a terra (no a la taula: ara es mou!), a la línia de sortida, i la capsa a 40 cm. Un alumne/a encén el robot, un altre mesura amb el regle on s'ha aturat, un altre apunta i un altre està preparat per agafar el robot si cal. Proveu la capsa a 40, 60 i 80 cm sense canviar el programa. Després canvieu la velocitat a 255 i torneu a mesurar: s'atura més a prop? Ajusteu el llindar fins que s'aturi a uns 10 cm.|Montaje: para cada grupo, en el suelo, una línea de salida con marcas a 40, 60 y 80 cm y una caja de cartón rígida (el muro) de al menos 15 cm de alto. Cada grupo descarga el programa en la micro:bit con el interruptor del robot apagado. Robot en el suelo (no en la mesa: ¡ahora se mueve!), en la línea de salida, y la caja a 40 cm. Un alumno/a enciende el robot, otro mide con la regla dónde se ha parado, otro apunta y otro está preparado para coger el robot si hace falta. Probad la caja a 40, 60 y 80 cm sin cambiar el programa. Después cambiad la velocidad a 255 y volved a medir: ¿se para más cerca? Ajustad el umbral hasta que se pare a unos 10 cm.",
        diu: ["El mateix programa ha funcionat a les tres distàncies? Per què?|¿El mismo programa ha funcionado en las tres distancias? ¿Por qué?",
          "A 255, quants centímetres més llisca que a 150?|A 255, ¿cuántos centímetros más se desliza que a 150?",
          "Si la capsa és tova o està inclinada, el robot la veu bé?|Si la caja es blanda o está inclinada, ¿el robot la ve bien?",
          "Si traieu la capsa mentre avança, què fa el robot? (Continua endavant: no veu res, 500.) Agafeu-lo abans que arribi a la paret!|Si quitáis la caja mientras avanza, ¿qué hace el robot? (Sigue adelante: no ve nada, 500.) ¡Cogedlo antes de que llegue a la pared!"],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers que roten|Grupos de 3-4 por kit con papeles que rotan" },
      { min: 8, t: "Reptes i crea: el robot del moll|Retos y crea: el robot del muelle", fase: 'crea',
        fa: "A l'ordinador, el repte de l'error (el signe girat), el repte ràpid a 255 i el projecte «El robot del moll», que mostra la distància quan s'atura. Comparen el llindar que han triat al simulador amb el del robot de veritat.|En el ordenador, el reto del error (el signo girado), el reto rápido a 255 y el proyecto «El robot del muelle», que muestra la distancia cuando se para. Comparan el umbral que han elegido en el simulador con el del robot de verdad.",
        diu: ["Llegeix la condició en veu alta: té sentit?|Lee la condición en voz alta: ¿tiene sentido?",
          "On has de posar «mostra el número» perquè no distregui el robot mentre avança? (Dins del «si», quan ja és aturat.)|¿Dónde tienes que poner «muestra el número» para que no distraiga al robot mientras avanza? (Dentro del «si», cuando ya está parado.)",
          "Quin llindar has triat a 255? I al robot de veritat, us ha servit el mateix?|¿Qué umbral has elegido a 255? Y en el robot de verdad, ¿os ha servido el mismo?"],
        slides: ['s14'], app: "«Pausa activa», els reptes «Ui! no es mou» i «Ràpid però segur», i el projecte «El robot del moll».|«Pausa activa», los retos «¡Uy! no se mueve» y «Rápido pero seguro», y el proyecto «El robot del muelle».", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Resum de les tres idees, preguntes finals de l'app i tiquet a la porta.|Resumen de las tres ideas, preguntas finales de la app y ticket en la puerta.",
        diu: ["Per què el «si» va dins de «per sempre»? (Perquè pregunti moltes vegades mentre avança.)|¿Por qué el «si» va dentro de «para siempre»? (Para que pregunte muchas veces mientras avanza.)",
          "Si el robot va més de pressa, el llindar ha de ser més gran o més petit?|Si el robot va más deprisa, ¿el umbral tiene que ser más grande o más pequeño?",
          "La propera sessió: i si en lloc d'aturar-se, el robot girés?|La próxima sesión: ¿y si en lugar de pararse, el robot girara?"],
        slides: ['s15', 's16'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa el «si» a «en iniciar» i el robot xoca.|Pone el «si» en «al iniciar» y el robot choca.",
        "Pregunta quantes vegades es fa la pregunta. Que recordi la predicció de la diapositiva 6.|Pregunta cuántas veces se hace la pregunta. Que recuerde la predicción de la diapositiva 6."],
      ["Gira el signe (> en lloc de <) i el robot no es mou o no s'atura mai.|Gira el signo (> en lugar de <) y el robot no se mueve o no se para nunca.",
        "Que llegeixi la condició amb un número real: «60 és major que 12? Sí → atura». Té sentit al principi del camí?|Que lea la condición con un número real: «¿60 es mayor que 12? Sí → para». ¿Tiene sentido al principio del camino?"],
      ["Oblida el «si no» i el robot no arrenca.|Olvida el «si no» y el robot no arranca.",
        "Pregunta-li: si la caixa és lluny, quin bloc fa avançar el robot? Recorda que el «si no» s'afegeix tocant el bloc «si».|Pregúntale: si la caja está lejos, ¿qué bloque hace avanzar el robot? Recuerda que el «si no» se añade tocando el bloque «si»."],
      ["Posa «mostra el número» o una espera llarga dins del bucle i el robot frena tard.|Pone «muestra el número» o una espera larga dentro del bucle y el robot frena tarde.",
        "Que miri la demo de la diapositiva 8 i pensi què fa el robot mentre la pantalla escriu el número.|Que mire la demo de la diapositiva 8 y piense qué hace el robot mientras la pantalla escribe el número."],
      ["Al robot real, el llindar del simulador no dona exactament la mateixa distància.|En el robot real, el umbral del simulador no da exactamente la misma distancia.",
        "És normal: el terra, les piles i el sensor canvien. Que ho mesuri i ajusti el número, com un enginyer/a.|Es normal: el suelo, las pilas y el sensor cambian. Que lo mida y ajuste el número, como un ingeniero/a."],
      ["Posa una espera després de l'«atura» o del «motor» dins del «si» «perquè vagi millor».|Pone una espera después del «para» o del «motor» dentro del «si» «para que vaya mejor».",
        "Pregunta-li què fa el sensor mentre el robot espera. Al «para abans del mur» no cal cap espera: decideix el sensor a cada volta.|Pregúntale qué hace el sensor mientras el robot espera. En el «para antes del muro» no hace falta ninguna espera: decide el sensor en cada vuelta."]
    ],
    diff: {
      mes: "Fer una taula de velocitats (100, 150, 200, 255) i llindars i trobar, per a cada velocitat, el llindar que deixa el robot a 10 cm. Hi ha alguna regla? Proposar un robot que vagi ràpid lluny i lent a prop (ho farem a la sessió 4).|Hacer una tabla de velocidades (100, 150, 200, 255) y umbrales y encontrar, para cada velocidad, el umbral que deja el robot a 10 cm. ¿Hay alguna regla? Proponer un robot que vaya rápido lejos y lento cerca (lo haremos en la sesión 4).",
      menys: "Treballar amb la regla escrita en una tira de paper («si distància < 12 → atura; si no → endavant») al costat de l'ordinador i començar pel repte d'una sola pista. A la fitxa, fer només la primera regla.|Trabajar con la regla escrita en una tira de papel («si distancia < 12 → para; si no → adelante») al lado del ordenador y empezar por el reto de una sola pista. En la ficha, hacer solo la primera regla."
    },
    aval: {
      ticket: ["Escriu el programa per aturar-se a 10 cm d'una caixa, sigui on sigui.|Escribe el programa para pararse a 10 cm de una caja, esté donde esté.",
        "Si el robot va més de pressa, el llindar ha de ser més gran o més petit? Per què?|Si el robot va más deprisa, ¿el umbral tiene que ser más grande o más pequeño? ¿Por qué?"],
      rubric: [
        ["Condicional|Condicional", "Escriu la condició correcta (distància < llindar) i omple bé el «si» i el «si no».|Escribe la condición correcta (distancia < umbral) y rellena bien el «si» y el «si no».", "Fa servir el «si», però confon el signe o oblida el «si no».|Usa el «si», pero confunde el signo u olvida el «si no»."],
        ["Bucle de control|Bucle de control", "Explica que el «si» va dins de «per sempre» perquè es pregunti moltes vegades.|Explica que el «si» va dentro de «para siempre» para que se pregunte muchas veces.", "Posa el «si» a «per sempre» perquè ho ha vist, però no ho sap explicar.|Pone el «si» en «para siempre» porque lo ha visto, pero no lo sabe explicar."],
        ["Prova i ajust|Prueba y ajuste", "Comprova el programa a diverses pistes i ajusta el llindar segons la velocitat, també al robot real.|Comprueba el programa en varias pistas y ajusta el umbral según la velocidad, también en el robot real.", "Prova una sola pista i canvia els números a l'atzar.|Prueba una sola pista y cambia los números al azar."],
        ["Depurar condicions|Depurar condiciones", "Troba el signe girat llegint la condició en veu alta amb un número real.|Encuentra el signo girado leyendo la condición en voz alta con un número real.", "Canvia el signe provant fins que funciona, sense saber per què.|Cambia el signo probando hasta que funciona, sin saber por qué."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El robot i el sensor humans»: una persona camina cap a una paret i l'altra li diu quants peus falten; el robot segueix la regla «si menys de 3, atura't».|En casa, con el móvil, podéis repetir la sesión y hacer «El robot y el sensor humanos»: una persona camina hacia una pared y la otra le dice cuántos pies faltan; el robot sigue la regla «si menos de 3, párate».",
    faq: [
      ["Per què no cal cap espera en aquest programa?|¿Por qué no hace falta ninguna espera en este programa?", "Perquè ara no decideix el temps sinó el sensor: a cada volta de «per sempre», el robot mira la distància i tria si avança o s'atura.|Porque ahora no decide el tiempo sino el sensor: en cada vuelta de «para siempre», el robot mira la distancia y elige si avanza o se para."],
      ["Quan el robot s'atura, el programa s'acaba?|Cuando el robot se para, ¿el programa termina?", "No: «per sempre» continua preguntant. Si traus la capsa, el robot torna a arrencar, perquè ara la resposta és «no».|No: «para siempre» sigue preguntando. Si quitas la caja, el robot vuelve a arrancar, porque ahora la respuesta es «no»."],
      ["Per què a 255 s'acosta més a la capsa?|¿Por qué a 255 se acerca más a la caja?", "Perquè, quan els motors paren, el robot encara llisca per la inèrcia, i com més de pressa va, més llisca. Per això cal decidir abans (un llindar més gran).|Porque, cuando los motores se paran, el robot todavía se desliza por la inercia, y cuanto más deprisa va, más se desliza. Por eso hay que decidir antes (un umbral más grande)."],
      ["Què vol dir «llindar»?|¿Qué quiere decir «umbral»?", "És el número de la condició, el punt on el robot canvia el que fa: si el llindar és 12, a 13 cm avança i a 11 cm s'atura.|Es el número de la condición, el punto donde el robot cambia lo que hace: si el umbral es 12, a 13 cm avanza y a 11 cm se para."],
      ["Com s'afegeix el «si no»?|¿Cómo se añade el «si no»?", "Al simulador, tocant el bloc «si». A MakeCode, amb el botó + de sota del bloc «si»: apareix la part «si no».|En el simulador, tocando el bloque «si». En MakeCode, con el botón + de debajo del bloque «si»: aparece la parte «si no»."],
      ["El robot de veritat pregunta tan de pressa com el del simulador?|¿El robot de verdad pregunta tan deprisa como el del simulador?", "Una mica menys: cada mesura d'ultrasons tarda unes centèsimes de segon. Pregunta unes 20 vegades cada segon, que és prou per aturar-se a temps si no va massa ràpid.|Un poco menos: cada medida de ultrasonidos tarda unas centésimas de segundo. Pregunta unas 20 veces cada segundo, que es suficiente para pararse a tiempo si no va demasiado rápido."]
    ],
    tec: [
      ["El robot real no s'atura i xoca amb la capsa.|El robot real no se para y choca con la caja.", "Comproveu que la capsa sigui rígida, prou alta i de cara al sensor, i que el «si» sigui dins de «per sempre». Si va a 255, pugeu el llindar.|Comprobad que la caja sea rígida, lo bastante alta y de cara al sensor, y que el «si» esté dentro de «para siempre». Si va a 255, subid el umbral."],
      ["El robot real fa petites arrencades i parades davant de la capsa.|El robot real hace pequeños arranques y paradas delante de la caja.", "La mesura oscil·la al voltant del llindar. És normal; si molesta, baixeu la velocitat o feu que s'aturi una mica abans.|La medida oscila alrededor del umbral. Es normal; si molesta, bajad la velocidad o haced que se pare un poco antes."],
      ["A MakeCode no trobo el bloc «si… si no».|En MakeCode no encuentro el bloque «si… si no».", "És a «Lògica» (Logic): el bloc «si… llavors… si no». La comparació «<» també és a «Lògica»; la distància, a «Maqueen v5».|Está en «Lógica» (Logic): el bloque «si… entonces… si no». La comparación «<» también está en «Lógica»; la distancia, en «Maqueen v5»."],
      ["El robot no arrenca mai al robot real.|El robot no arranca nunca en el robot real.", "Mireu el signe (ha de ser <) i que el «si no» tingui el motor endavant. Si la micro:bit mostra una creu, no troba el robot: interruptor i connector.|Mirad el signo (tiene que ser <) y que el «si no» tenga el motor adelante. Si la micro:bit muestra una cruz, no encuentra el robot: interruptor y conector."],
      ["Al terra hi ha poc espai per a tots els grups.|En el suelo hay poco espacio para todos los grupos.", "Feu servir el passadís o les taules llargues amb vora, i torns de 3 minuts. Amb una sola capsa per grup n'hi ha prou: la moveu de 40 a 60 i a 80 cm.|Usad el pasillo o las mesas largas con borde, y turnos de 3 minutos. Con una sola caja por grupo basta: la movéis de 40 a 60 y a 80 cm."]
    ],
    seg: [
      "Ara el robot es mou: sempre a terra, mai a la taula, i algú preparat per agafar-lo.|Ahora el robot se mueve: siempre en el suelo, nunca en la mesa, y alguien preparado para cogerlo.",
      "Descarregar amb l'interruptor apagat; encendre'l quan és a la línia de sortida i sense cable.|Descargar con el interruptor apagado; encenderlo cuando está en la línea de salida y sin cable.",
      "No poseu mans ni peus davant del robot per «fer-lo parar»: feu servir la capsa.|No pongáis manos ni pies delante del robot para «hacerlo parar»: usad la caja."
    ],
    extra: [
      "Fer una taula de velocitats (100, 150, 200, 255) i llindars i buscar-hi una regla.|Hacer una tabla de velocidades (100, 150, 200, 255) y umbrales y buscar una regla.",
      "Programar un robot que s'atura i, quan treus la capsa, torna a arrencar sol, i explicar per què.|Programar un robot que se para y, cuando quitas la caja, vuelve a arrancar solo, y explicar por qué.",
      "Inventar regles per a la fitxa amb errors amagats perquè les resolgui un company/a.|Inventar reglas para la ficha con errores escondidos para que las resuelva un compañero/a."
    ],
    trans: [
      "Sessió anterior: el sensor i «per sempre». Sessió següent: dins del «si», girar en lloc d'aturar-se (esquivar).|Sesión anterior: el sensor y «para siempre». Sesión siguiente: dentro del «si», girar en lugar de pararse (esquivar).",
      "Matemàtiques: comparar nombres amb < i >, i la idea de llindar.|Matemáticas: comparar números con < y >, y la idea de umbral.",
      "Educació viària: la distància de frenada dels vehicles i per què cal anar més a poc a poc a prop dels obstacles.|Educación vial: la distancia de frenada de los vehículos y por qué hay que ir más despacio cerca de los obstáculos."
    ],
    slides: [
      { id: 's1', k: 'portada', t: "Para abans del mur|Para antes del muro", x: "El robot aprèn a decidir: «si… si no».|El robot aprende a decidir: «si… si no».",
        nota: "Objectiu: al final, el robot s'aturarà sol sigui on sigui el contenidor.|Objetivo: al final, el robot se parará solo esté donde esté el contenedor." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["El sensor mesura la distància amb l'eco (cm).|El sensor mide la distancia con el eco (cm).", "500 = no veu res.|500 = no ve nada.", "«Per sempre» repeteix els blocs sense parar.|«Para siempre» repite los bloques sin parar."],
        nota: "Pregunta a qui va confondre «en iniciar» i «per sempre» al tiquet anterior.|Pregunta a quien confundió «al iniciar» y «para siempre» en el ticket anterior." },
      { id: 's3', k: 'pregunta', t: "El contenidor ballarí|El contenedor bailarín", x: "Cada nit és en un lloc diferent. Com sabrà el robot quan s'ha d'aturar?|Cada noche está en un sitio diferente. ¿Cómo sabrá el robot cuándo tiene que pararse?",
        nota: "Busca la idea: «quan el sensor digui que és a prop». Escriu-la a la pissarra amb les seves paraules.|Busca la idea: «cuando el sensor diga que está cerca». Escríbela en la pizarra con sus palabras." },
      { id: 's4', k: 'anim', t: "«Si… si no»|«Si… si no»", anim: 'k3if', x: "Una pregunta de sí o no: si és sí, atura; si no, endavant.|Una pregunta de sí o no: si es sí, para; si no, adelante.",
        nota: "Practica el signe <: digues números i la classe respon «sí» o «no».|Practica el signo <: di números y la clase responde «sí» o «no»." },
      { id: 's5', k: 'robo', t: "Para abans del mur|Para antes del muro", x: "Sense cap espera. On s'aturarà?|Sin ninguna espera. ¿Dónde se parará?",
        robo: { w: { w: 120, h: 80, bot: [15, 40, 90], walls: [[90, 15, 8, 50]], time: 7 }, prog: 'forever{ if:dist<15{ stop:all } else{ run:all,fwd,150 } }' },
        nota: "Mira amb la classe el tauler: quan la distància baixa de 15, s'atura.|Mira con la clase el tablero: cuando la distancia baja de 15, se para." },
      { id: 's6', k: 'robo', t: "I si el «si» és a «en iniciar»?|¿Y si el «si» está en «al iniciar»?", x: "Prediu abans d'executar: s'aturarà?|Predice antes de ejecutar: ¿se parará?",
        robo: { w: { w: 120, h: 80, bot: [15, 40, 90], walls: [[95, 15, 8, 50]], time: 8 }, prog: 'start{ if:dist<20{ stop:all } else{ run:all,fwd,150 } }' },
        nota: "Xoca: pregunta una sola vegada, al principi, quan la caixa és lluny.|Choca: pregunta una sola vez, al principio, cuando la caja está lejos." },
      { id: 's7', k: 'anim', t: "La frenada|La frenada", anim: 'k3brake', x: "Com més de pressa, més llisca: cal decidir abans.|Cuanto más deprisa, más se desliza: hay que decidir antes.",
        nota: "Exemple: una bicicleta ràpida necessita més espai per frenar que una de lenta.|Ejemplo: una bicicleta rápida necesita más espacio para frenar que una lenta." },
      { id: 's8', k: 'robo', t: "Un número que distreu|Un número que distrae", x: "Hem posat «mostra el número» dins del bucle. Què passarà?|Hemos puesto «muestra el número» dentro del bucle. ¿Qué pasará?",
        robo: { w: { w: 120, h: 80, bot: [15, 40, 90], walls: [[90, 15, 8, 50]], time: 6 }, prog: 'forever{ num:dist if:dist<15{ stop:all } else{ run:all,fwd,200 } }' },
        nota: "Mentre escriu el número, no torna a preguntar i arriba tard.|Mientras escribe el número, no vuelve a preguntar y llega tarde." },
      { id: 's9', k: 'concepte', t: "Comparar números|Comparar números", pic: 'img/ment/est.webp', punts: ["< vol dir «menor que»: 8 < 15.|< quiere decir «menor que»: 8 < 15.", "> vol dir «major que»: 40 > 15.|> quiere decir «mayor que»: 40 > 15.", "La boca del signe s'obre cap al més gran.|La boca del signo se abre hacia el más grande."],
        nota: "Molts errors d'avui seran el signe girat. Deixa aquesta diapositiva a mà.|Muchos errores de hoy serán el signo girado. Deja esta diapositiva a mano." },
      { id: 's10', k: 'activitat', t: "Què fa el robot?|¿Qué hace el robot?", timer: 8, punts: ["Llegiu cada lectura del sensor.|Leed cada lectura del sensor.", "Apliqueu la regla: atura o endavant?|Aplicad la regla: ¿para o adelante?", "Compareu en parelles.|Comparad por parejas."],
        nota: "Fixa't en la regla girada (dist > 12): hi ha alumnes que diran que funciona.|Fíjate en la regla girada (dist > 12): hay alumnos que dirán que funciona." },
      { id: 's11', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Para abans del mur».|Abre la sesión «Para antes del muro».", "A «On s'aturarà?», pensa abans de tocar.|En «¿Dónde se parará?», piensa antes de tocar.", "Para quan acabis el repte de les 3 pistes.|Para cuando acabes el reto de las 3 pistas."],
        nota: "Si algú fa servir esperes, deixa que la pista 2 li mostri el problema.|Si alguien usa esperas, deja que la pista 2 le muestre el problema." },
      { id: 's12', k: 'activitat', t: "El robot de veritat s'atura sol|El robot de verdad se para solo", timer: 12, punts: ["Robot a terra, a la línia de sortida.|Robot en el suelo, en la línea de salida.", "Capsa a 40, 60 i 80 cm: mateix programa.|Caja a 40, 60 y 80 cm: mismo programa.", "Mesureu on s'atura amb el regle.|Medid dónde se para con la regla.", "Proveu a 255: s'atura més a prop? (Codi: imprimible o botó &lt;/&gt;.)|Probad a 255: ¿se para más cerca? (Código: imprimible o botón &lt;/&gt;.)"],
        nota: "Seguretat: el robot sempre a terra, descarregar amb l'interruptor apagat i algú preparat per agafar-lo. Si la capsa és massa tova, el sensor no la veu bé: feu servir cartró rígid. A MakeCode, el «si… si no» és a «Lògica» i la distància, «read ultrasonic sensor», a «Maqueen v5».|Seguridad: el robot siempre en el suelo, descargar con el interruptor apagado y alguien preparado para cogerlo. Si la caja es demasiado blanda, el sensor no la ve bien: usad cartón rígido. En MakeCode, el «si… si no» está en «Lógica» y la distancia, «read ultrasonic sensor» («Leer la distancia del sensor ultrasónico (CM)»), en «Maqueen v5»." },
      { id: 's13', k: 'repte', t: "Repte: la frenada de veritat|Reto: la frenada de verdad", punts: ["Velocitat 150, llindar 12: a quants cm s'atura?|Velocidad 150, umbral 12: ¿a cuántos cm se para?", "Velocitat 255, llindar 12: i ara?|Velocidad 255, umbral 12: ¿y ahora?", "Quin llindar el deixa a 10 cm a 255?|¿Qué umbral lo deja a 10 cm a 255?"],
        nota: "Apunteu els resultats de tots els grups a la pissarra i busqueu la tendència.|Apuntad los resultados de todos los grupos en la pizarra y buscad la tendencia." },
      { id: 's14', k: 'repte', t: "Reptes i crea|Retos y crea", timer: 8, punts: ["L'error: el robot no es mou.|El error: el robot no se mueve.", "Ràpid però segur: a 255 en menys de 4 segons.|Rápido pero seguro: a 255 en menos de 4 segundos.", "El robot del moll: s'atura i mostra la distància.|El robot del muelle: se para y muestra la distancia."],
        nota: "Al projecte, el número va dins del «si», on ja està aturat.|En el proyecto, el número va dentro del «si», donde ya está parado." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["«Si… si no»: una pregunta, dos camins.|«Si… si no»: una pregunta, dos caminos.", "Dins de «per sempre», el robot pregunta moltes vegades i s'atura a temps.|Dentro de «para siempre», el robot pregunta muchas veces y se para a tiempo.", "Més velocitat → frenar abans.|Más velocidad → frenar antes."],
        nota: "Connecta amb la propera sessió: i si en lloc d'aturar-se, gira?|Conecta con la próxima sesión: ¿y si en lugar de pararse, gira?" },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Escriu el programa per aturar-se a 10 cm.|Escribe el programa para pararse a 10 cm.", "Més velocitat: llindar més gran o més petit?|Más velocidad: ¿umbral más grande o más pequeño?"],
        nota: "Anota qui gira el signe: repassa-ho a l'inici de la sessió 3.|Anota quién gira el signo: repásalo al inicio de la sesión 3." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: què fa el robot?|Ficha: ¿qué hace el robot?", k: 'fitxa',
        intro: "Per a cada regla, escriu què fa el robot amb cada lectura del sensor: ATURA o ENDAVANT.|Para cada regla, escribe qué hace el robot con cada lectura del sensor: PARA o ADELANTE.",
        items: [
          { q: "Regla A: si distància < 12 → atura; si no → endavant. Lectures: 60, 35, 18, 11, 7.|Regla A: si distancia < 12 → para; si no → adelante. Lecturas: 60, 35, 18, 11, 7.", rprog: 'forever{ if:dist<12{ stop:all } else{ run:all,fwd,150 } }', sol: "Endavant, endavant, endavant, atura, atura.|Adelante, adelante, adelante, para, para." },
          { q: "Regla B: si distància > 12 → atura; si no → endavant. Lectures: 60, 35, 18. Què li passa a aquest robot?|Regla B: si distancia > 12 → para; si no → adelante. Lecturas: 60, 35, 18. ¿Qué le pasa a este robot?", sol: "Atura, atura, atura: no es mou mai perquè la caixa és lluny. El signe està girat.|Para, para, para: no se mueve nunca porque la caja está lejos. El signo está girado." },
          { q: "Regla A, però el sensor només llegeix un cop cada 3 passos (el robot avança 10 cm per pas). La caixa és a 35 cm. Pot xocar?|Regla A, pero el sensor solo lee una vez cada 3 pasos (el robot avanza 10 cm por paso). La caja está a 35 cm. ¿Puede chocar?", sol: "Sí: llegeix 35 (endavant), fa 3 passos sense mirar (30 cm) i quan torna a llegir ja és a 5 cm o xoca.|Sí: lee 35 (adelante), da 3 pasos sin mirar (30 cm) y cuando vuelve a leer ya está a 5 cm o choca." },
          { q: "Regla C: si distància < 500 → atura; si no → endavant. On hi ha el problema?|Regla C: si distancia < 500 → para; si no → adelante. ¿Dónde está el problema?", sol: "Si hi ha qualsevol cosa a menys de 4 metres, s'atura de seguida; només avança quan no veu res.|Si hay cualquier cosa a menos de 4 metros, se para enseguida; solo avanza cuando no ve nada." },
          { q: "Inventa la teva regla perquè el robot s'aturi a uns 20 cm i prova-la amb les lectures 50, 30, 21, 19.|Inventa tu regla para que el robot se pare a unos 20 cm y pruébala con las lecturas 50, 30, 21, 19.", sol: "Per exemple: si distància < 20 → atura; si no → endavant: endavant, endavant, endavant, atura.|Por ejemplo: si distancia < 20 → para; si no → adelante: adelante, adelante, adelante, para." }
        ] },
      { id: 'p2', t: "Codi: para abans del mur|Código: para antes del muro", k: 'codi',
        intro: "El programa en blocs i en JavaScript de MakeCode (extensió del Maqueen). El segon mostra la distància quan ja s'ha aturat, per mesurar la frenada.|El programa en bloques y en JavaScript de MakeCode (extensión del Maqueen). El segundo muestra la distancia cuando ya se ha parado, para medir la frenada.",
        items: [
          { t: "Para abans del mur|Para antes del muro", prog: 'forever{ if:dist<12{ stop:all } else{ run:all,fwd,150 } }' },
          { t: "Para i mostra la distància|Para y muestra la distancia", prog: 'forever{ if:dist<12{ stop:all num:dist } else{ run:all,fwd,255 } }' }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Esquiva obstacles ---------- */
  'k3-3': {
    intro: "L'alumnat canvia una sola cosa del programa d'aturar-se: dins del «si», en lloc d'«atura», hi posa un gir. Així el robot recorre passadissos sense xocar, i amb una seqüència sencera dins del «si» (girar, apartar-se i tornar a girar) esquiva una caixa i continua la ruta. Descobreix els límits del sensor (només veu just al davant: les cantonades poden tocar) i el perill de les esperes llargues al «si no», que deixen el robot a cegues. Les pistes alternatives demostren que una bona regla funciona sigui on sigui la caixa. Al robot real, primer calibra el gir de 90° al terra de l'aula i després prova el passadís de capses.|El alumnado cambia una sola cosa del programa de pararse: dentro del «si», en lugar de «para», pone un giro. Así el robot recorre pasillos sin chocar, y con una secuencia entera dentro del «si» (girar, apartarse y volver a girar) esquiva una caja y sigue la ruta. Descubre los límites del sensor (solo ve justo delante: las esquinas pueden tocar) y el peligro de las esperas largas en el «si no», que dejan el robot a ciegas. Las pistas alternativas demuestran que una buena regla funciona esté donde esté la caja. En el robot real, primero calibra el giro de 90° en el suelo del aula y después prueba el pasillo de cajas.",
    claus: [
      "Esquivar = la mateixa pregunta que aturar-se, però dins del «si» hi ha un gir o una maniobra.|Esquivar = la misma pregunta que pararse, pero dentro del «si» hay un giro o una maniobra.",
      "Dins del «si» hi pot haver una seqüència sencera: gir, avanç, gir.|Dentro del «si» puede haber una secuencia entera: giro, avance, giro.",
      "Mentre fa la maniobra o una espera, el robot no mira el sensor: cal que sigui curta.|Mientras hace la maniobra o una espera, el robot no mira el sensor: tiene que ser corta.",
      "El sensor només veu al davant: per no tocar amb les cantonades, cal girar abans i apartar-se prou.|El sensor solo ve delante: para no tocar con las esquinas, hay que girar antes y apartarse lo suficiente."
    ],
    prev: [
      "«Per sempre» + «si… si no» amb la distància (sessió anterior).|«Para siempre» + «si… si no» con la distancia (sesión anterior).",
      "Gir de 90° sobre si mateix a esquerra i dreta (unitat 1, sessió 3).|Giro de 90° sobre sí mismo a izquierda y derecha (unidad 1, sesión 3).",
      "Calcular un tram amb distància = velocitat × temps (unitat 2).|Calcular un tramo con distancia = velocidad × tiempo (unidad 2)."
    ],
    obj: [
      "L'alumne/a programa un robot que, quan veu un obstacle a prop, gira en lloc d'aturar-se.|El alumno/a programa un robot que, cuando ve un obstáculo cerca, gira en lugar de pararse.",
      "L'alumne/a posa una seqüència de blocs (girar, apartar-se, tornar a girar) dins del «si» per esquivar una caixa.|El alumno/a pone una secuencia de bloques (girar, apartarse, volver a girar) dentro del «si» para esquivar una caja.",
      "L'alumne/a comprova que el mateix programa funciona en pistes diferents i explica per què els temps fixos no hi funcionen.|El alumno/a comprueba que el mismo programa funciona en pistas diferentes y explica por qué los tiempos fijos no funcionan.",
      "L'alumne/a troba i corregeix errors típics: girar cap al costat equivocat o una espera que deixa el robot a cegues.|El alumno/a encuentra y corrige errores típicos: girar hacia el lado equivocado o una espera que deja el robot a ciegas."
    ],
    comp: [
      "Competència digital: programar comportaments autònoms i depurar-los|Competencia digital: programar comportamientos autónomos y depurarlos",
      "Pensament computacional: seqüències dins de condicionals i regles generals que funcionen en molts casos|Pensamiento computacional: secuencias dentro de condicionales y reglas generales que funcionan en muchos casos",
      "Competència STEM: orientació (90°, esquerra i dreta) i calibratge d'un gir al robot real|Competencia STEM: orientación (90°, izquierda y derecha) y calibración de un giro en el robot real",
      "Competència personal i social: treball en equip amb papers i seguretat a l'aula|Competencia personal y social: trabajo en equipo con papeles y seguridad en el aula"
    ],
    vocab: [
      ["Esquivar|Esquivar", "Evitar un obstacle sense aturar-se: girar, apartar-se i continuar.|Evitar un obstáculo sin pararse: girar, apartarse y seguir."],
      ["Maniobra|Maniobra", "Una seqüència de moviments que es fa sempre igual (per exemple, gir, avanç, gir).|Una secuencia de movimientos que se hace siempre igual (por ejemplo, giro, avance, giro)."],
      ["Regla|Regla", "Una instrucció general que el robot aplica a cada moment: «si hi ha paret, gira».|Una instrucción general que el robot aplica en cada momento: «si hay pared, gira»."],
      ["Pista alternativa|Pista alternativa", "Una altra versió del repte, amb les caixes en un altre lloc, per comprovar que el programa és general.|Otra versión del reto, con las cajas en otro sitio, para comprobar que el programa es general."],
      ["Calibrar|Calibrar", "Ajustar un número del programa (com el temps d'un gir) perquè el robot real faci el que volem.|Ajustar un número del programa (como el tiempo de un giro) para que el robot real haga lo que queremos."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Esquiva obstacles»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Esquiva obstáculos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen Lite V5 amb micro:bit V2 per grup de 3-4|Un kit Maqueen Lite V5 con micro:bit V2 por grupo de 3-4",
        "Capses de cartró rígides, llibres gruixuts i cinta de pintor per fer el passadís a terra|Cajas de cartón rígidas, libros gruesos y cinta de pintor para hacer el pasillo en el suelo"
      ],
      imprimir: ["Pista: el passadís del magatzem|Pista: el pasillo del almacén", "Codi: esquiva obstacles|Código: esquiva obstáculos"],
      prep: [
        "Muntar a terra un o dos passadissos com el de la pista impresa (amb capses o llibres de canto), d'uns 30 cm d'amplada.|Montar en el suelo uno o dos pasillos como el de la pista impresa (con cajas o libros de canto), de unos 30 cm de ancho.",
        "Preparar a MakeCode el programa d'esquivar (diapositiva 11).|Preparar en MakeCode el programa de esquivar (diapositiva 11).",
        "Imprimir una pista per parella i un full de codi per grup.|Imprimir una pista por pareja y una hoja de código por grupo.",
        "Provar les demos de les diapositives 4, 6 i 8.|Probar las demos de las diapositivas 4, 6 y 8."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el magatzem ple|Bienvenida: el almacén lleno", fase: 'inici',
        fa: "Repassa el gir de 90° i el programa d'aturar-se. Planteja el problema: si el robot s'atura davant de cada caixa, no arribarà mai a l'altra punta.|Repasa el giro de 90° y el programa de pararse. Plantea el problema: si el robot se para delante de cada caja, no llegará nunca a la otra punta.",
        diu: ["Què fa una persona que camina i troba una cadira al davant?|¿Qué hace una persona que camina y encuentra una silla delante?",
          "Quin bloc del programa d'aturar-se hauríem de canviar? (L'«atura» de dins del «si».)|¿Qué bloque del programa de pararse deberíamos cambiar? (El «para» de dentro del «si».)",
          "Com gira el Maqueen a l'esquerra sobre si mateix? (Esquerre enrere, dret endavant.)|¿Cómo gira el Maqueen a la izquierda sobre sí mismo? (Izquierdo atrás, derecho adelante.)"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Si hi ha una caixa, gira|Si hay una caja, gira", fase: 'teoria',
        fa: "Executa la demo de la regla «si paret, gira a l'esquerra» i fes que la classe digui on anirà després de cada gir. Explica l'esquiva amb l'animació i executa la maniobra completa. Remarca el límit del con (els costats) i acaba amb la predicció de la diapositiva 8.|Ejecuta la demo de la regla «si pared, gira a la izquierda» y haz que la clase diga adónde irá después de cada giro. Explica la esquiva con la animación y ejecuta la maniobra completa. Remarca el límite del cono (los lados) y acaba con la predicción de la diapositiva 8.",
        diu: ["Quin motor va enrere? Doncs cap a on gira?|¿Qué motor va atrás? Pues ¿hacia dónde gira?",
          "Mentre fa la maniobra, el robot mira el sensor?|Mientras hace la maniobra, ¿el robot mira el sensor?",
          "Per què el robot pot tocar una caixa amb la cantonada?|¿Por qué el robot puede tocar una caja con la esquina?"],
        slides: ['s4', 's5', 's6', 's7', 's8'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Traça el camí|Traza el camino", fase: 'desconnectat',
        fa: "Per parelles, amb la pista impresa i un llapis: un alumne/a llegeix la regla en veu alta i l'altre dibuixa el camí del robot sobre el passadís (cada quadre fa 10 cm). Després ho fan amb la regla «gira a la dreta» i comparen on arriba cada robot. Es poden fer servir tires de paper de 15 cm per saber quan el robot «veu» la paret.|Por parejas, con la pista impresa y un lápiz: un alumno/a lee la regla en voz alta y el otro dibuja el camino del robot sobre el pasillo (cada cuadro mide 10 cm). Después lo hacen con la regla «gira a la derecha» y comparan adónde llega cada robot. Se pueden usar tiras de papel de 15 cm para saber cuándo el robot «ve» la pared.",
        diu: ["On és el robot quan la paret queda a 15 cm? Poseu-hi la tira de paper.|¿Dónde está el robot cuando la pared queda a 15 cm? Poned la tira de papel.",
          "Amb la regla de la dreta, arriba a la meta? Per què? (No: dona voltes pel primer tram.)|Con la regla de la derecha, ¿llega a la meta? ¿Por qué? (No: da vueltas por el primer tramo.)",
          "Si el passadís fos més llarg, caldria canviar la regla?|Si el pasillo fuera más largo, ¿habría que cambiar la regla?"],
        slides: ['s9'], app: "Cap. A l'app, «El laberint de coixins» queda per a casa.|Ninguna. En la app, «El laberinto de cojines» queda para casa.", org: "Parelles|Parejas" },
      { min: 15, t: "A l'ordinador: gira i esquiva|En el ordenador: gira y esquiva", fase: 'ordinador',
        fa: "Avancen fins al passadís de dues corbes. Si algú fa el passadís amb temps fixos, deixa que les pistes 2 i 3 li mostrin el problema. Recorda que poden copiar el gir dels reptes de la unitat 1.|Avanzan hasta el pasillo de dos curvas. Si alguien hace el pasillo con tiempos fijos, deja que las pistas 2 y 3 le muestren el problema. Recuerda que pueden copiar el giro de los retos de la unidad 1.",
        diu: ["Cap a on giren totes les corbes del passadís?|¿Hacia dónde giran todas las curvas del pasillo?",
          "Al repte de les 3 pistes, el programa d'una pista funciona a les altres? Qui decideix quan gira?|En el reto de las 3 pistas, ¿el programa de una pista funciona en las otras? ¿Quién decide cuándo gira?",
          "A «On serà al cap de 10 segons?», mira quin motor va enrere abans de triar.|En «¿Dónde estará al cabo de 10 segundos?», mira qué motor va atrás antes de elegir."],
        slides: ['s10'], app: "De «Recorda» fins al repte «El passadís del magatzem».|Desde «Recuerda» hasta el reto «El pasillo del almacén».", org: "Individual|Individual" },
      { min: 12, t: "Robot de veritat: el passadís|Robot de verdad: el pasillo", fase: 'robot',
        fa: "Muntatge: a terra, un passadís en forma de L (com la pista impresa) amb capses de cartró rígides o llibres de canto d'almenys 10 cm d'alt, d'uns 30 cm d'amplada, ben enganxats perquè no es moguin. Primer, cada grup calibra el gir: amb el robot a terra i descarregant sempre amb l'interruptor apagat, programen només el gir a l'esquerra i ajusten els 590 ms fins que fa un quart de volta en aquell terra. Després descarreguen el programa d'esquivar amb el seu temps i el proven al passadís de capses. Un alumne/a encén el robot, un altre vigila i l'agafa si es queda encallat, un altre canvia el passadís de lloc i un altre apunta què passa.|Montaje: en el suelo, un pasillo en forma de L (como la pista impresa) con cajas de cartón rígidas o libros de canto de al menos 10 cm de alto, de unos 30 cm de ancho, bien pegados para que no se muevan. Primero, cada grupo calibra el giro: con el robot en el suelo y descargando siempre con el interruptor apagado, programan solo el giro a la izquierda y ajustan los 590 ms hasta que hace un cuarto de vuelta en ese suelo. Después descargan el programa de esquivar con su tiempo y lo prueban en el pasillo de cajas. Un alumno/a enciende el robot, otro vigila y lo coge si se queda atascado, otro cambia el pasillo de sitio y otro apunta qué pasa.",
        diu: ["El vostre robot fa 90° amb 590 ms? Quant heu hagut de posar?|¿Vuestro robot hace 90° con 590 ms? ¿Cuánto habéis tenido que poner?",
          "Si toca la paret amb la cantonada, què canviaríeu: el llindar o el temps del gir? (Primer, girar abans: un llindar més gran.)|Si toca la pared con la esquina, ¿qué cambiaríais: el umbral o el tiempo del giro? (Primero, girar antes: un umbral más grande.)",
          "Mans fora del passadís mentre el robot es mou: si cal, l'agafa només qui vigila.|Manos fuera del pasillo mientras el robot se mueve: si hace falta, lo coge solo quien vigila."],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers que roten|Grupos de 3-4 por kit con papeles que rotan" },
      { min: 8, t: "Reptes i crea: l'explorador|Retos y crea: el explorador", fase: 'crea',
        fa: "Tornen a l'app per esquivar la caixa del mig, arreglar el programa de l'espera i crear l'explorador del magatzem. Que provin diferents llindars i girs i en triïn el millor.|Vuelven a la app para esquivar la caja del medio, arreglar el programa de la espera y crear el explorador del almacén. Que prueben diferentes umbrales y giros y elijan el mejor.",
        diu: ["Mentre el robot espera 2 segons, què veu?|Mientras el robot espera 2 segundos, ¿qué ve?",
          "Quina idea ha recorregut més centímetres sense xocar?|¿Qué idea ha recorrido más centímetros sin chocar?",
          "Per què a l'explorador convé girar una mica abans, a 20 cm? (Les caixes del mig poden tocar les cantonades.)|¿Por qué en el explorador conviene girar un poco antes, a 20 cm? (Las cajas del medio pueden tocar las esquinas.)"],
        slides: ['s13'], app: "«Pausa activa», els reptes «Esquiva la caixa» i «El robot xoca» i el projecte «L'explorador del magatzem».|«Pausa activa», los retos «Esquiva la caja» y «El robot choca» y el proyecto «El explorador del almacén».", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet|Cierre y ticket", fase: 'tancament',
        fa: "Resum, preguntes finals de l'app i tiquet a la porta.|Resumen, preguntas finales de la app y ticket en la puerta.",
        diu: ["Quina és l'única diferència entre aturar-se i esquivar? (El que hi ha dins del «si».)|¿Cuál es la única diferencia entre pararse y esquivar? (Lo que hay dentro del «si».)",
          "Per què una espera llarga al «si no» és perillosa?|¿Por qué una espera larga en el «si no» es peligrosa?",
          "La propera sessió és el projecte: un aparcament que frena a poc a poc.|La próxima sesión es el proyecto: un aparcamiento que frena poco a poco."],
        slides: ['s14', 's15'], app: "«Tancament».|«Cierre».", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Gira cap al costat equivocat (confon quin motor va enrere).|Gira hacia el lado equivocado (confunde qué motor va atrás).",
        "Que posi les mans com si fossin les rodes: si la dreta va endavant i l'esquerra enrere, cap on gira el cos?|Que ponga las manos como si fueran las ruedas: si la derecha va adelante y la izquierda atrás, ¿hacia dónde gira el cuerpo?"],
      ["Posa una espera llarga al «si no» i el robot xoca.|Pone una espera larga en el «si no» y el robot choca.",
        "Pregunta-li què fa el sensor durant aquella espera. Que compari amb la regla: «a cada moment, mira i decideix».|Pregúntale qué hace el sensor durante esa espera. Que compare con la regla: «en cada momento, mira y decide»."],
      ["A la maniobra d'esquivar, oblida el segon gir i el robot se'n va de costat.|En la maniobra de esquivar, olvida el segundo giro y el robot se va de lado.",
        "Que faci la maniobra amb el cos (pausa activa): després d'apartar-se, cap on mira? Cap on ha de mirar per anar a la meta?|Que haga la maniobra con el cuerpo (pausa activa): después de apartarse, ¿hacia dónde mira? ¿Hacia dónde tiene que mirar para ir a la meta?"],
      ["Resol el passadís amb temps fixos i no entén per què falla a les altres pistes.|Resuelve el pasillo con tiempos fijos y no entiende por qué falla en las otras pistas.",
        "Mira amb ell/a la pista 2: el passadís és més llarg. Qui pot saber on és la paret, l'espera o el sensor?|Mira con él/ella la pista 2: el pasillo es más largo. ¿Quién puede saber dónde está la pared, la espera o el sensor?"],
      ["Al robot real, el gir de 590 ms no fa exactament 90°.|En el robot real, el giro de 590 ms no hace exactamente 90°.",
        "És normal: depèn del terra i de les piles. Que el calibri provant 500, 600, 700 ms i triï el que s'hi acosta més.|Es normal: depende del suelo y de las pilas. Que lo calibre probando 500, 600, 700 ms y elija el que más se acerca."],
      ["A l'explorador, el robot es queda encallat en un racó girant endavant i enrere.|En el explorador, el robot se queda atascado en un rincón girando adelante y atrás.",
        "Pregunta: després de girar, què veu? Si veu una altra paret, torna a girar. Que provi un gir diferent de 90° (per exemple, 400 ms) o un llindar més gran.|Pregunta: después de girar, ¿qué ve? Si ve otra pared, vuelve a girar. Que pruebe un giro diferente de 90° (por ejemplo, 400 ms) o un umbral más grande."]
    ],
    diff: {
      mes: "Fer un explorador que giri un angle diferent cada vegada (per exemple, 400 ms) i comparar quin recorre més. Pensar una regla per sortir d'un racó sense quedar encallat i provar-la al passadís real.|Hacer un explorador que gire un ángulo diferente cada vez (por ejemplo, 400 ms) y comparar cuál recorre más. Pensar una regla para salir de un rincón sin quedarse atascado y probarla en el pasillo real.",
      menys: "Donar-li els blocs del gir a l'esquerra ja escrits en una tira de paper i començar pel repte d'una sola paret. A la pista impresa, traçar només el primer tram.|Darle los bloques del giro a la izquierda ya escritos en una tira de papel y empezar por el reto de una sola pared. En la pista impresa, trazar solo el primer tramo."
    },
    aval: {
      ticket: ["Escriu la regla per recórrer un passadís on totes les corbes són a l'esquerra.|Escribe la regla para recorrer un pasillo donde todas las curvas son a la izquierda.",
        "Per què una espera llarga al «si no» pot fer xocar el robot?|¿Por qué una espera larga en el «si no» puede hacer chocar el robot?"],
      rubric: [
        ["Gir com a reacció|Giro como reacción", "Posa el gir correcte dins del «si» i el robot recorre el passadís a totes les pistes.|Pone el giro correcto dentro del «si» y el robot recorre el pasillo en todas las pistas.", "Fa girar el robot, però s'equivoca de costat o només funciona a una pista.|Hace girar el robot, pero se equivoca de lado o solo funciona en una pista."],
        ["Maniobra d'esquiva|Maniobra de esquiva", "Construeix la seqüència gir-avanç-gir i explica què fa cada part.|Construye la secuencia giro-avance-giro y explica qué hace cada parte.", "Necessita la pista per ordenar la seqüència.|Necesita la pista para ordenar la secuencia."],
        ["Depuració i calibratge|Depuración y calibración", "Troba l'espera que deixa el robot a cegues i calibra el gir al robot real.|Encuentra la espera que deja el robot a ciegas y calibra el giro en el robot real.", "Arregla l'error provant canvis a l'atzar.|Arregla el error probando cambios al azar."],
        ["Regla general|Regla general", "Explica per què la seva regla funciona a totes les pistes i on fallaria un programa de temps fix.|Explica por qué su regla funciona en todas las pistas y dónde fallaría un programa de tiempo fijo.", "La regla funciona, però no sap dir per què serveix a les altres pistes.|La regla funciona, pero no sabe decir por qué sirve en las otras pistas."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «El laberint de coixins»: un passadís de coixins i una persona que camina a poc a poc amb la regla «si toques alguna cosa, gira a l'esquerra».|En casa, con el móvil, podéis repetir la sesión y hacer «El laberinto de cojines»: un pasillo de cojines y una persona que camina despacio con la regla «si tocas algo, gira a la izquierda».",
    faq: [
      ["Per què el robot gira sempre cap al mateix costat?|¿Por qué el robot gira siempre hacia el mismo lado?", "Perquè la regla diu un sol costat. En un passadís on totes les corbes van a l'esquerra, és perfecte; en un altre, potser caldria girar a la dreta.|Porque la regla dice un solo lado. En un pasillo donde todas las curvas van a la izquierda, es perfecto; en otro, quizá habría que girar a la derecha."],
      ["El robot sap per on és la sortida?|¿El robot sabe por dónde está la salida?", "No: només segueix la regla «si hi ha paret, gira». No té mapa. Per això una bona regla ha de funcionar sense saber on és la meta.|No: solo sigue la regla «si hay pared, gira». No tiene mapa. Por eso una buena regla tiene que funcionar sin saber dónde está la meta."],
      ["Per què ha tocat la caixa, si el sensor la veia?|¿Por qué ha tocado la caja, si el sensor la veía?", "Perquè el sensor mira just al davant i el robot és més ample que el con: una cantonada pot fregar. Gireu una mica abans o aparteu-vos més.|Porque el sensor mira justo delante y el robot es más ancho que el cono: una esquina puede rozar. Girad un poco antes o apartaos más."],
      ["Podria girar a l'atzar, cap a un costat o l'altre?|¿Podría girar al azar, hacia un lado o el otro?", "Sí, alguns robots aspiradors ho fan així. Nosaltres encara no tenim el bloc d'atzar, però podeu provar girs de mides diferents.|Sí, algunos robots aspiradores lo hacen así. Nosotros todavía no tenemos el bloque de azar, pero podéis probar giros de tamaños diferentes."],
      ["Quant s'ha d'apartar per passar la caixa?|¿Cuánto tiene que apartarse para pasar la caja?", "Prou perquè passi tot el robot (uns 8,5 cm d'amplada) i una mica més. A 150, 1,2 segons fan uns 19 cm.|Lo suficiente para que pase todo el robot (unos 8,5 cm de ancho) y un poco más. A 150, 1,2 segundos hacen unos 19 cm."]
    ],
    tec: [
      ["El robot real gira massa o massa poc i se'n va del passadís.|El robot real gira demasiado o demasiado poco y se sale del pasillo.", "Calibreu el gir al mateix terra on hi ha el passadís: proveu 500, 590, 650 ms i quedeu-vos el que fa un quart de volta.|Calibrad el giro en el mismo suelo donde está el pasillo: probad 500, 590, 650 ms y quedaos con el que hace un cuarto de vuelta."],
      ["El sensor no veu les parets del passadís.|El sensor no ve las paredes del pasillo.", "Han de ser rígides, llises i prou altes (més de 8 cm). Els llibres oberts o les motxilles toves no serveixen.|Tienen que ser rígidas, lisas y lo bastante altas (más de 8 cm). Los libros abiertos o las mochilas blandas no sirven."],
      ["El robot empeny les capses i desmunta el passadís.|El robot empuja las cajas y desmonta el pasillo.", "Enganxeu les capses a terra amb cinta i feu-les servir pesades (amb llibres a dins).|Pegad las cajas al suelo con cinta y usadlas pesadas (con libros dentro)."],
      ["A MakeCode, el codi del «si» queda dins de «per sempre» però el robot no gira.|En MakeCode, el código del «si» queda dentro de «para siempre» pero el robot no gira.", "Mireu les direccions del gir: M1 (esquerre) ha d'anar enrere (CCW, «Backward») i M2 (dret) endavant (CW, «Forward») per girar a l'esquerra.|Mirad las direcciones del giro: M1 (izquierdo) tiene que ir atrás (CCW, «Backward») y M2 (derecho) adelante (CW, «Forward») para girar a la izquierda."],
      ["Al simulador, el robot es queda girant en un racó.|En el simulador, el robot se queda girando en un rincón.", "Proveu un gir una mica diferent (per exemple, 650 ms) o un llindar més gran: així surt del racó.|Probad un giro un poco diferente (por ejemplo, 650 ms) o un umbral más grande: así sale del rincón."]
    ],
    seg: [
      "Al laberint de coixins (a casa) i a classe, qui fa de robot camina molt a poc a poc amb les mans endavant; mai obstacles durs a l'alçada del cap.|En el laberinto de cojines (en casa) y en clase, quien hace de robot camina muy despacio con las manos hacia delante; nunca obstáculos duros a la altura de la cabeza.",
      "Si a algú no li agrada tancar els ulls, pot fer de robot mirant a terra.|Si a alguien no le gusta cerrar los ojos, puede hacer de robot mirando al suelo.",
      "Robot a terra, mans i peus fora del passadís mentre es mou, i interruptor apagat en acabar.|Robot en el suelo, manos y pies fuera del pasillo mientras se mueve, e interruptor apagado al terminar."
    ],
    extra: [
      "Fer un explorador que giri un angle diferent cada vegada (400 ms, 700 ms…) i comparar quin recorre més.|Hacer un explorador que gire un ángulo diferente cada vez (400 ms, 700 ms…) y comparar cuál recorre más.",
      "Pensar una regla per sortir d'un racó sense quedar encallat i provar-la al passadís real.|Pensar una regla para salir de un rincón sin quedarse atascado y probarla en el pasillo real.",
      "Dissenyar un passadís nou (amb corbes a l'esquerra) i comprovar si la regla funciona.|Diseñar un pasillo nuevo (con curvas a la izquierda) y comprobar si la regla funciona."
    ],
    trans: [
      "Sessió anterior: aturar-se davant del mur. Sessió següent: tres casos amb un «si» dins d'un altre (aparcament).|Sesión anterior: pararse delante del muro. Sesión siguiente: tres casos con un «si» dentro de otro (aparcamiento).",
      "Unitat 7: el robot aspirador fa servir regles semblants per netejar una habitació.|Unidad 7: el robot aspirador usa reglas parecidas para limpiar una habitación.",
      "Educació física i orientació: laberints, girs i la regla de «la mà a la paret».|Educación física y orientación: laberintos, giros y la regla de «la mano en la pared»."
    ],
    slides: [
      { id: 's1', k: 'portada', t: "Esquiva obstacles|Esquiva obstáculos", x: "El robot ja no s'atura: gira, s'aparta i continua.|El robot ya no se para: gira, se aparta y sigue.",
        nota: "Objectiu: portar el paquet d'una punta a l'altra del magatzem sense xocar.|Objetivo: llevar el paquete de una punta a otra del almacén sin chocar." },
      { id: 's2', k: 'repas', t: "Recordem|Recordemos", punts: ["Gir a l'esquerra: motor esquerre enrere, dret endavant, 590 ms a 100.|Giro a la izquierda: motor izquierdo atrás, derecho adelante, 590 ms a 100.", "Per sempre: si distància < 12 → atura; si no → endavant.|Para siempre: si distancia < 12 → para; si no → adelante."],
        nota: "Fes que algú expliqui amb les mans com gira el robot.|Haz que alguien explique con las manos cómo gira el robot." },
      { id: 's3', k: 'pregunta', t: "Una cadira al mig|Una silla en medio", x: "Camines pel passadís i hi ha una cadira. T'atures per sempre?|Caminas por el pasillo y hay una silla. ¿Te paras para siempre?",
        nota: "Busca la idea de «girar i continuar». Escriu la regla a la pissarra.|Busca la idea de «girar y continuar». Escribe la regla en la pizarra." },
      { id: 's4', k: 'robo', t: "Si hi ha paret, gira|Si hay pared, gira", x: "La mateixa pregunta d'ahir, però dins del «si» hi ha un gir. Cap on anirà?|La misma pregunta de ayer, pero dentro del «si» hay un giro. ¿Hacia dónde irá?",
        robo: { w: { w: 120, h: 80, bot: [15, 62, 90], time: 14 }, prog: 'forever{ if:dist<15{ run:L,back,100 run:R,fwd,100 wait:590 } else{ run:all,fwd,150 } }' },
        nota: "Atura la demo després del primer gir i pregunta on anirà ara.|Para la demo después del primer giro y pregunta adónde irá ahora." },
      { id: 's5', k: 'anim', t: "Esquivar: gira, aparta't i continua|Esquivar: gira, apártate y sigue", anim: 'k3dodge', x: "Dins del «si» hi pot haver una seqüència sencera.|Dentro del «si» puede haber una secuencia entera.",
        nota: "Fes la maniobra amb el cos: quart de volta, dos passos, quart de volta.|Haz la maniobra con el cuerpo: cuarto de vuelta, dos pasos, cuarto de vuelta." },
      { id: 's6', k: 'robo', t: "La maniobra completa|La maniobra completa", x: "Gir a la dreta, endavant 1,2 s, gir a l'esquerra. Passarà pel costat de la caixa?|Giro a la derecha, adelante 1,2 s, giro a la izquierda. ¿Pasará por el lado de la caja?",
        robo: { w: { w: 130, h: 80, bot: [12, 34, 90], walls: [[55, 28, 10, 12]], zones: [{ id: 'meta', r: [108, 4, 22, 72], col: 'green', label: 'META|META' }], time: 10 }, prog: 'forever{ if:dist<15{ run:L,fwd,100 run:R,back,100 wait:590 run:all,fwd,150 wait:1200 run:L,back,100 run:R,fwd,100 wait:590 } else{ run:all,fwd,150 } }' },
        nota: "Fes notar que s'aparta uns 19 cm: prou per passar amb els 8,5 cm d'amplada del robot.|Haz notar que se aparta unos 19 cm: suficiente para pasar con los 8,5 cm de ancho del robot." },
      { id: 's7', k: 'anim', t: "Compte amb els costats|Cuidado con los lados", anim: 'k3cone', x: "Només mira al davant: les cantonades poden tocar.|Solo mira delante: las esquinas pueden tocar.",
        nota: "Solució: girar una mica abans i apartar-se prou.|Solución: girar un poco antes y apartarse lo suficiente." },
      { id: 's8', k: 'robo', t: "Prediu: on serà?|Predice: ¿dónde estará?", x: "Regla: si paret a menys de 15 cm, gira a l'esquerra. On serà al cap de 10 segons?|Regla: si pared a menos de 15 cm, gira a la izquierda. ¿Dónde estará al cabo de 10 segundos?",
        robo: { w: { w: 120, h: 80, bot: [15, 62, 90], time: 10, marks: { A: [104, 62], B: [101, 72], C: [101, 24] } }, prog: 'forever{ if:dist<15{ run:L,back,100 run:R,fwd,100 wait:590 } else{ run:all,fwd,150 } }' },
        nota: "Resposta: C. Qui diu A pensa que el «si» atura; qui diu B s'ha equivocat de costat.|Respuesta: C. Quien dice A piensa que el «si» para; quien dice B se ha equivocado de lado." },
      { id: 's9', k: 'activitat', t: "Traça el camí|Traza el camino", timer: 8, punts: ["Un llegeix la regla, l'altre dibuixa el camí.|Uno lee la regla, el otro dibuja el camino.", "Tira de 15 cm: quan toca la paret, gir!|Tira de 15 cm: cuando toca la pared, ¡giro!", "Repetiu-ho amb la regla de la dreta.|Repetidlo con la regla de la derecha."],
        nota: "Amb la regla de la dreta, el robot dona voltes al primer tram i no arriba a la meta.|Con la regla de la derecha, el robot da vueltas en el primer tramo y no llega a la meta." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió «Esquiva obstacles».|Abre la sesión «Esquiva obstáculos».", "Para quan acabis «El passadís del magatzem».|Para cuando acabes «El pasillo del almacén»."],
        nota: "«El laberint de coixins» queda per a casa.|«El laberinto de cojines» queda para casa." },
      { id: 's11', k: 'activitat', t: "Robot de veritat: calibra i esquiva|Robot de verdad: calibra y esquiva", timer: 12, punts: ["Calibreu el gir de 90° al vostre terra.|Calibrad el giro de 90° en vuestro suelo.", "Descarregueu el programa amb el vostre temps de gir.|Descargad el programa con vuestro tiempo de giro.", "Proveu-lo al passadís de capses i canvieu-lo de lloc. (Codi: imprimible o botó &lt;/&gt;.)|Probadlo en el pasillo de cajas y cambiadlo de sitio. (Código: imprimible o botón &lt;/&gt;.)"],
        nota: "Les parets del passadís han de ser rígides i prou altes perquè el sensor les vegi (més de 8 cm).|Las paredes del pasillo tienen que ser rígidas y lo bastante altas para que el sensor las vea (más de 8 cm)." },
      { id: 's12', k: 'concepte', t: "Seguretat i calibratge|Seguridad y calibración", pic: 'img/ic/shield.webp', punts: ["El robot sempre a terra, i algú preparat per agafar-lo.|El robot siempre en el suelo, y alguien preparado para cogerlo.", "Sense peus ni mans dins del passadís mentre es mou.|Sin pies ni manos dentro del pasillo mientras se mueve.", "Cada terra és diferent: ajusteu el temps del gir.|Cada suelo es diferente: ajustad el tiempo del giro.", "En acabar, apagueu l'interruptor per estalviar piles.|Al terminar, apagad el interruptor para ahorrar pilas."],
        nota: "Comproveu que cada grup apunta el temps de gir que li ha funcionat: el faran servir al projecte.|Comprobad que cada grupo apunta el tiempo de giro que le ha funcionado: lo usarán en el proyecto." },
      { id: 's13', k: 'repte', t: "Reptes i crea|Retos y crea", timer: 8, punts: ["Esquiva la caixa del mig (3 pistes).|Esquiva la caja del medio (3 pistas).", "Arregla el robot que xoca per culpa d'una espera.|Arregla el robot que choca por culpa de una espera.", "L'explorador: 160 cm sense xocar.|El explorador: 160 cm sin chocar."],
        nota: "A l'explorador, celebra que hi hagi solucions diferents que funcionen.|En el explorador, celebra que haya soluciones diferentes que funcionan." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Esquivar: si hi ha caixa, gira; si no, endavant.|Esquivar: si hay caja, gira; si no, adelante.", "Dins del «si» hi pot haver una maniobra sencera.|Dentro del «si» puede haber una maniobra entera.", "Una bona regla funciona a totes les pistes.|Una buena regla funciona en todas las pistas."],
        nota: "Anuncia el projecte: la setmana vinent, l'aparcament automàtic.|Anuncia el proyecto: la semana que viene, el aparcamiento automático." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["La regla del passadís de corbes a l'esquerra.|La regla del pasillo de curvas a la izquierda.", "Per què una espera llarga pot fer xocar?|¿Por qué una espera larga puede hacer chocar?"],
        nota: "Anota qui encara confon el costat del gir.|Anota quién todavía confunde el lado del giro." }
    ],
    print: [
      { id: 'p1', t: "Pista: el passadís del magatzem|Pista: el pasillo del almacén", k: 'pista',
        intro: "El passadís dels reptes, a escala. Feu-lo servir per traçar el camí del robot amb llapis i per muntar-lo a terra amb capses o llibres de canto per al robot de veritat. El robot surt de baix a l'esquerra, mirant a la dreta.|El pasillo de los retos, a escala. Usadlo para trazar el camino del robot con lápiz y para montarlo en el suelo con cajas o libros de canto para el robot de verdad. El robot sale de abajo a la izquierda, mirando a la derecha.",
        w: { w: 120, h: 80, bot: [15, 64, 90], walls: [[0, 44, 88, 5]], zones: [{ id: 'meta', r: [0, 0, 24, 44], col: 'green', label: 'META|META' }] },
        items: [
          { q: "Traça el camí amb la regla «si hi ha paret a menys de 15 cm, gira 90° a l'esquerra; si no, endavant». Arriba a la META?|Traza el camino con la regla «si hay pared a menos de 15 cm, gira 90° a la izquierda; si no, adelante». ¿Llega a la META?" },
          { q: "Ara traça'l amb la regla «gira 90° a la dreta». Què passa?|Ahora trázalo con la regla «gira 90° a la derecha». ¿Qué pasa?" },
          { q: "Si el passadís fos 20 cm més llarg, hauries de canviar la regla? Per què?|Si el pasillo fuera 20 cm más largo, ¿tendrías que cambiar la regla? ¿Por qué?" }
        ] },
      { id: 'p2', t: "Codi: esquiva obstacles|Código: esquiva obstáculos", k: 'codi',
        intro: "Els dos programes en blocs i en JavaScript de MakeCode. Abans de provar-los, calibreu el temps del gir (590 ms) al vostre terra.|Los dos programas en bloques y en JavaScript de MakeCode. Antes de probarlos, calibrad el tiempo del giro (590 ms) en vuestro suelo.",
        items: [
          { t: "Recórrer el passadís (gira a l'esquerra)|Recorrer el pasillo (gira a la izquierda)", prog: 'forever{ if:dist<15{ run:L,back,100 run:R,fwd,100 wait:590 } else{ run:all,fwd,150 } }' },
          { t: "Esquivar una caixa (gir, avanç, gir)|Esquivar una caja (giro, avance, giro)", prog: 'forever{ if:dist<15{ run:L,fwd,100 run:R,back,100 wait:590 run:all,fwd,150 wait:1200 run:L,back,100 run:R,fwd,100 wait:590 } else{ run:all,fwd,150 } }' }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: aparcament automàtic ---------- */
  'k3-4': {
    intro: "Sessió de projecte que tanca la unitat: un aparcament automàtic per als carretons del port. El carretó ha d'anar ràpid quan és lluny, frenar a poc a poc en acostar-se i aturar-se a la distància justa, en places de llargades diferents. Per tenir tres comportaments cal posar un «si» dins del «si no» d'un altre, i l'ordre importa: primer es pregunta pel cas més urgent (molt a prop). L'alumnat segueix el procés d'enginyeria (planificar en paper, programar, provar a diverses pistes i millorar) i acaba passant el projecte al robot real amb un concurs de precisió.|Sesión de proyecto que cierra la unidad: un aparcamiento automático para las carretillas del puerto. La carretilla tiene que ir rápido cuando está lejos, frenar poco a poco al acercarse y pararse a la distancia justa, en plazas de longitudes diferentes. Para tener tres comportamientos hay que poner un «si» dentro del «si no» de otro, y el orden importa: primero se pregunta por el caso más urgente (muy cerca). El alumnado sigue el proceso de ingeniería (planificar en papel, programar, probar en varias pistas y mejorar) y termina pasando el proyecto al robot real con un concurso de precisión.",
    claus: [
      "Un «si» dins del «si no» d'un altre «si» dona tres casos: lluny, a prop i molt a prop.|Un «si» dentro del «si no» de otro «si» da tres casos: lejos, cerca y muy cerca.",
      "El robot pregunta de dalt a baix i fa la primera condició que és certa: el cas més urgent va primer.|El robot pregunta de arriba abajo y hace la primera condición que es cierta: el caso más urgente va primero.",
      "Frenar a poc a poc (anar lent a prop) fa que el robot s'aturi més precís.|Frenar poco a poco (ir lento cerca) hace que el robot se pare más preciso.",
      "Planificar, programar, provar i millorar, canviant un sol número cada vegada.|Planificar, programar, probar y mejorar, cambiando un solo número cada vez."
    ],
    prev: [
      "Mesurar amb el sensor i el 500 (sessió 1).|Medir con el sensor y el 500 (sesión 1).",
      "«Per sempre» + «si… si no» per aturar-se (sessió 2).|«Para siempre» + «si… si no» para pararse (sesión 2).",
      "La frenada i la inèrcia: com més velocitat, més llisca (sessió 2).|La frenada y la inercia: cuanta más velocidad, más se desliza (sesión 2).",
      "Motors endavant i enrere (unitat 1), per a la zona de seguretat.|Motores adelante y atrás (unidad 1), para la zona de seguridad."
    ],
    obj: [
      "L'alumne/a planifica un comportament amb tres casos (lluny, a prop, molt a prop) abans de programar-lo.|El alumno/a planifica un comportamiento con tres casos (lejos, cerca, muy cerca) antes de programarlo.",
      "L'alumne/a programa un «si» dins d'un altre «si» i explica per què el cas més urgent va primer.|El alumno/a programa un «si» dentro de otro «si» y explica por qué el caso más urgente va primero.",
      "L'alumne/a prova el projecte a diverses pistes i al robot de veritat i el millora a partir dels resultats.|El alumno/a prueba el proyecto en varias pistas y en el robot de verdad y lo mejora a partir de los resultados.",
      "L'alumne/a presenta el seu aparcament automàtic i explica les decisions que ha pres.|El alumno/a presenta su aparcamiento automático y explica las decisiones que ha tomado."
    ],
    comp: [
      "Competència digital: crear un projecte de programació complet amb sensors i passar-lo a un robot real|Competencia digital: crear un proyecto de programación completo con sensores y pasarlo a un robot real",
      "Pensament computacional: condicionals niats, ordre de les condicions i disseny iteratiu|Pensamiento computacional: condicionales anidados, orden de las condiciones y diseño iterativo",
      "Competència STEM: procés d'enginyeria (planificar, construir, provar, millorar) i mesura de precisió|Competencia STEM: proceso de ingeniería (planificar, construir, probar, mejorar) y medida de precisión",
      "Competència personal, social i d'aprendre a aprendre: treball en equip i comunicació del projecte|Competencia personal, social y de aprender a aprender: trabajo en equipo y comunicación del proyecto"
    ],
    vocab: [
      ["«Si» niat|«Si» anidado", "Un «si» posat dins d'un altre «si» (normalment a la part «si no») per tenir més de dos casos.|Un «si» puesto dentro de otro «si» (normalmente en la parte «si no») para tener más de dos casos."],
      ["Ordre de les condicions|Orden de las condiciones", "El robot pregunta de dalt a baix i fa la primera que és certa.|El robot pregunta de arriba abajo y hace la primera que es cierta."],
      ["Planificar|Planificar", "Decidir què ha de fer el robot a cada cas abans d'escriure el programa.|Decidir qué tiene que hacer el robot en cada caso antes de escribir el programa."],
      ["Iterar|Iterar", "Provar, mirar què falla, canviar una cosa i tornar a provar.|Probar, mirar qué falla, cambiar una cosa y volver a probar."],
      ["MakeCode|MakeCode", "L'editor de programes de la micro:bit, on enganxem el codi del simulador per passar-lo al robot real.|El editor de programas de la micro:bit, donde pegamos el código del simulador para pasarlo al robot real."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: aparcament automàtic»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: aparcamiento automático»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit Maqueen Lite V5 amb micro:bit V2 per grup de 3-4|Un kit Maqueen Lite V5 con micro:bit V2 por grupo de 3-4",
        "Per grup: llibres o capses per fer la plaça d'aparcament, cinta de pintor, un regle i colors (verd, groc i vermell)|Por grupo: libros o cajas para hacer la plaza de aparcamiento, cinta de pintor, una regla y colores (verde, amarillo y rojo)"
      ],
      imprimir: ["Fitxa: el pla de l'aparcament|Ficha: el plan del aparcamiento", "Pista: l'aparcament del port|Pista: el aparcamiento del puerto"],
      prep: [
        "Marcar a terra una plaça per grup amb cinta (uns 26 cm d'amplada) i una paret al fons feta amb llibres o una capsa rígida.|Marcar en el suelo una plaza por grupo con cinta (unos 26 cm de ancho) y una pared al fondo hecha con libros o una caja rígida.",
        "Marcar tres posicions de la paret del fons (a 80, 95 i 110 cm de la línia de sortida) per provar les tres llargades.|Marcar tres posiciones de la pared del fondo (a 80, 95 y 110 cm de la línea de salida) para probar las tres longitudes.",
        "Imprimir una fitxa del pla per alumne/a i una pista per grup.|Imprimir una ficha del plan por alumno/a y una pista por grupo.",
        "Tenir obert MakeCode amb l'extensió del Maqueen per enganxar-hi el codi del botó &lt;/&gt; de cada alumne/a.|Tener abierto MakeCode con la extensión del Maqueen para pegar el código del botón &lt;/&gt; de cada alumno/a."
      ]
    },
    plan: [
      { min: 4, t: "Benvinguda: el repte d'enginyeria|Bienvenida: el reto de ingeniería", fase: 'inici',
        fa: "Presenta el projecte de la capitana del port i pregunta qui ha sentit mai el «bip-bip» d'un cotxe que aparca. Repassa les tres sessions: mesurar, aturar-se i esquivar.|Presenta el proyecto de la capitana del puerto y pregunta quién ha oído alguna vez el «bip-bip» de un coche que aparca. Repasa las tres sesiones: medir, pararse y esquivar.",
        diu: ["Per què el «bip-bip» del cotxe va més de pressa quan s'acosta a la paret?|¿Por qué el «bip-bip» del coche va más deprisa cuando se acerca a la pared?",
          "Què ha de fer el carretó quan és lluny? I quan és a prop?|¿Qué tiene que hacer la carretilla cuando está lejos? ¿Y cuando está cerca?",
          "Amb un sol «si», quants comportaments pot tenir el robot? (Dos.) I si en volem tres?|Con un solo «si», ¿cuántos comportamientos puede tener el robot? (Dos.) ¿Y si queremos tres?"],
        slides: ['s1', 's2', 's3'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Tres casos: un «si» dins d'un altre|Tres casos: un «si» dentro de otro", fase: 'teoria',
        fa: "Explica el sensor d'aparcament amb l'animació. Executa la demo de tres casos i fes-ne la traça a la pissarra amb tres números (50, 20 i 5 cm). Mostra l'error de l'ordre de les preguntes: abans d'executar la demo, que tothom predigui on acabarà.|Explica el sensor de aparcamiento con la animación. Ejecuta la demo de tres casos y haz su traza en la pizarra con tres números (50, 20 y 5 cm). Muestra el error del orden de las preguntas: antes de ejecutar la demo, que todos predigan dónde acabará.",
        diu: ["Amb 20 cm, quina pregunta diu sí primer?|Con 20 cm, ¿qué pregunta dice sí primero?",
          "I si a dalt hi ha «distància < 30»? Què passa a 5 cm? (També diu sí i no s'atura mai.)|¿Y si arriba está «distancia < 30»? ¿Qué pasa a 5 cm? (También dice sí y no se para nunca.)",
          "Amb 50 cm, quina velocitat tria? I amb 20? I amb 5?|Con 50 cm, ¿qué velocidad elige? ¿Y con 20? ¿Y con 5?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no.|Todavía no.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El pla en paper|El plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuixa la plaça amb les tres franges, tria les velocitats i els llindars i escriu el programa amb paraules. En grups, cadascú explica el seu pla i el grup tria quin provarà primer al robot de veritat.|Cada alumno/a rellena la ficha del plan: dibuja la plaza con las tres franjas, elige las velocidades y los umbrales y escribe el programa con palabras. En grupos, cada uno explica su plan y el grupo elige cuál probará primero en el robot de verdad.",
        diu: ["Quina pregunta escriureu primer? Per què?|¿Qué pregunta escribiréis primero? ¿Por qué?",
          "Si el carretó va a 200 lluny, quan ha de començar a frenar?|Si la carretilla va a 200 lejos, ¿cuándo tiene que empezar a frenar?",
          "La velocitat lenta ha de ser més gran que 30: per què? (Zona morta.)|La velocidad lenta tiene que ser mayor que 30: ¿por qué? (Zona muerta.)"],
        slides: ['s8'], app: "Cap. A l'app, el pas «El pla en paper» ja està fet: toqueu «Ho hem fet!».|Ninguna. En la app, el paso «El plan en papel» ya está hecho: tocad «¡Lo hemos hecho!».", org: "Individual i després en grups|Individual y después en grupos" },
      { min: 15, t: "A l'ordinador: proves i errors|En el ordenador: pruebas y errores", fase: 'ordinador',
        fa: "Avancen fins a la zona de seguretat: la primera prova d'aparcar, la predicció de l'ordre, l'error de l'ordre i el carretó que ha d'anar enrere. Ajuda amb preguntes a qui no troba l'error de l'ordre: que faci la traça amb un número petit.|Avanzan hasta la zona de seguridad: la primera prueba de aparcar, la predicción del orden, el error del orden y la carretilla que tiene que ir atrás. Ayuda con preguntas a quien no encuentra el error del orden: que haga la traza con un número pequeño.",
        diu: ["Fes la traça amb 5 cm: quina pregunta diu sí primer?|Haz la traza con 5 cm: ¿qué pregunta dice sí primero?",
          "A la zona de seguretat, què ha de fer el carretó si comença gairebé tocant? (Anar enrere.)|En la zona de seguridad, ¿qué tiene que hacer la carretilla si empieza casi tocando? (Ir hacia atrás.)",
          "Has provat les tres places? El mateix programa funciona a totes?|¿Has probado las tres plazas? ¿El mismo programa funciona en todas?"],
        slides: ['s9', 's10'], app: "De «Recorda» fins al repte «La zona de seguretat».|Desde «Recuerda» hasta el reto «La zona de seguridad».", org: "Individual|Individual" },
      { min: 14, t: "Robot de veritat: aparca a la plaça|Robot de verdad: aparca en la plaza", fase: 'robot',
        fa: "Muntatge: per a cada grup, una plaça a terra d'uns 26 cm d'amplada amb cinta i una paret al fons rígida (llibres o una capsa amb pes), amb marques a 80, 95 i 110 cm de la línia de sortida per moure la paret. Cada grup passa el pla triat al robot: copien el codi amb el botó &lt;/&gt; del simulador, l'enganxen a MakeCode i el descarreguen amb l'interruptor apagat. Proven la plaça amb la paret a 80, 95 i 110 cm i mesuren amb el regle a quants centímetres s'atura. Després, concurs de precisió: guanya el grup que aparca més a prop de 5 cm a les tres llargades, sense tocar. Si cal, ajusten un número i tornen a provar.|Montaje: para cada grupo, una plaza en el suelo de unos 26 cm de ancho con cinta y una pared al fondo rígida (libros o una caja con peso), con marcas a 80, 95 y 110 cm de la línea de salida para mover la pared. Cada grupo pasa el plan elegido al robot: copian el código con el botón &lt;/&gt; del simulador, lo pegan en MakeCode y lo descargan con el interruptor apagado. Prueban la plaza con la pared a 80, 95 y 110 cm y miden con la regla a cuántos centímetros se para. Después, concurso de precisión: gana el grupo que aparca más cerca de 5 cm en las tres longitudes, sin tocar. Si hace falta, ajustan un número y vuelven a probar.",
        diu: ["Heu canviat un sol número abans de tornar a provar? Quin?|¿Habéis cambiado un solo número antes de volver a probar? ¿Cuál?",
          "El robot real frena igual que el del simulador?|¿El robot real frena igual que el del simulador?",
          "Al concurs, sumeu els centímetres d'error de les tres places: qui en té menys?|En el concurso, sumad los centímetros de error de las tres plazas: ¿quién tiene menos?"],
        slides: ['s11', 's12'], app: "Botó &lt;/&gt; del programa per copiar el codi a MakeCode.|Botón &lt;/&gt; del programa para copiar el código en MakeCode.", org: "Grups de 3-4 per kit amb papers que roten|Grupos de 3-4 por kit con papeles que rotan" },
      { min: 8, t: "Crea: el meu aparcament automàtic|Crea: mi aparcamiento automático", fase: 'crea',
        fa: "Cada alumne/a programa el seu projecte a l'app (tres casos, tres places) i el desa. Dos o tres alumnes presenten el seu en un minut: quines velocitats i quins llindars han triat i per què.|Cada alumno/a programa su proyecto en la app (tres casos, tres plazas) y lo guarda. Dos o tres alumnos presentan el suyo en un minuto: qué velocidades y qué umbrales han elegido y por qué.",
        diu: ["Què has millorat des de la primera prova?|¿Qué has mejorado desde la primera prueba?",
          "Què faries diferent al robot de veritat?|¿Qué harías diferente en el robot de verdad?",
          "Explica'ns el teu pla en un minut: velocitats, llindars i per què.|Explícanos tu plan en un minuto: velocidades, umbrales y por qué."],
        slides: ['s13', 's14'], app: "«Pausa activa» i el projecte «El meu aparcament automàtic» (es desa a Projectes).|«Pausa activa» y el proyecto «Mi aparcamiento automático» (se guarda en Proyectos).", org: "Individual i presentació a tot el grup|Individual y presentación a todo el grupo" },
      { min: 3, t: "Tancament de la unitat|Cierre de la unidad", fase: 'tancament',
        fa: "Resum de la unitat sencera, preguntes finals de l'app i tiquet a la porta.|Resumen de la unidad entera, preguntas finales de la app y ticket en la puerta.",
        diu: ["Què sap fer ara el Maqueen que no sabia fer fa quatre setmanes?|¿Qué sabe hacer ahora el Maqueen que no sabía hacer hace cuatro semanas?",
          "Quina pregunta va primer en un programa de tres casos? (La més urgent.)|¿Qué pregunta va primero en un programa de tres casos? (La más urgente.)",
          "A la unitat 4, el robot farà servir els sensors de sota per seguir una línia.|En la unidad 4, el robot usará los sensores de abajo para seguir una línea."],
        slides: ['s15', 's16'], app: "«Del simulador al robot de veritat», les dues preguntes finals i com m'he sentit.|«Del simulador al robot de verdad», las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa primer «distància < 30» i el robot no s'atura mai.|Pone primero «distancia < 30» y el robot no se para nunca.",
        "Que faci la traça del programa amb el número 5: quina pregunta diu sí primer? Arriba mai a la d'aturar-se?|Que haga la traza del programa con el número 5: ¿qué pregunta dice sí primero? ¿Llega alguna vez a la de pararse?"],
      ["Posa el segon «si» a fora del primer, un darrere l'altre, i els motors es contradiuen.|Pone el segundo «si» fuera del primero, uno detrás de otro, y los motores se contradicen.",
        "Recorda-li que el segon «si» va a dins de la part «si no»: només es pregunta quan la primera resposta és no.|Recuérdale que el segundo «si» va dentro de la parte «si no»: solo se pregunta cuando la primera respuesta es no."],
      ["A la zona de seguretat, oblida el cas d'anar enrere i a la pista 2 el carretó es queda massa a prop.|En la zona de seguridad, olvida el caso de ir atrás y en la pista 2 la carretilla se queda demasiado cerca.",
        "Que miri la pista 2 abans d'executar: on comença el carretó? Què hauria de fer primer?|Que mire la pista 2 antes de ejecutar: ¿dónde empieza la carretilla? ¿Qué debería hacer primero?"],
      ["Canvia molts números alhora i no sap què ha millorat el resultat.|Cambia muchos números a la vez y no sabe qué ha mejorado el resultado.",
        "Proposa la regla dels enginyers: canviar un sol número cada vegada, provar i apuntar.|Propone la regla de los ingenieros: cambiar un solo número cada vez, probar y apuntar."],
      ["Al robot real s'atura més a prop o més lluny que al simulador i es desanima.|En el robot real se para más cerca o más lejos que en el simulador y se desanima.",
        "Explica que és el que passa sempre amb els robots de veritat: el terra, les piles i el sensor canvien. Calibrar és part de la feina.|Explica que es lo que pasa siempre con los robots de verdad: el suelo, las pilas y el sensor cambian. Calibrar es parte del trabajo."],
      ["Posa una velocitat lenta per sota de 30 i el carretó es queda quiet abans d'arribar.|Pone una velocidad lenta por debajo de 30 y la carretilla se queda quieta antes de llegar.",
        "Recorda-li la zona morta de la unitat 1: per sota de ~30 el motor no es mou. Que triï 60 o 70 per a la franja groga.|Recuérdale la zona muerta de la unidad 1: por debajo de ~30 el motor no se mueve. Que elija 60 o 70 para la franja amarilla."]
    ],
    diff: {
      mes: "Afegir un quart cas (per exemple, entre 30 i 50 cm, velocitat mitjana) i mostrar la distància quan aparca. Comparar el temps que tarda a aparcar amb el d'un company/a sense perdre precisió.|Añadir un cuarto caso (por ejemplo, entre 30 y 50 cm, velocidad media) y mostrar la distancia cuando aparca. Comparar el tiempo que tarda en aparcar con el de un compañero/a sin perder precisión.",
      menys: "Començar pel programa d'un sol «si» de la primera prova i afegir el segon «si» amb la fitxa del pla al costat. Donar-li l'ordre de les preguntes escrit en una tira de paper.|Empezar por el programa de un solo «si» de la primera prueba y añadir el segundo «si» con la ficha del plan al lado. Darle el orden de las preguntas escrito en una tira de papel."
    },
    aval: {
      ticket: ["Escriu amb paraules el teu programa d'aparcament amb els tres casos.|Escribe con palabras tu programa de aparcamiento con los tres casos.",
        "Per què la pregunta «distància < 8?» ha d'anar abans que «distància < 30?»?|¿Por qué la pregunta «¿distancia < 8?» tiene que ir antes que «¿distancia < 30?»?"],
      rubric: [
        ["Planificació|Planificación", "El pla té els tres casos amb velocitats i llindars coherents i el segueix en programar.|El plan tiene los tres casos con velocidades y umbrales coherentes y lo sigue al programar.", "Fa el pla, però el programa no hi correspon o hi falta un cas.|Hace el plan, pero el programa no corresponde o falta un caso."],
        ["Condicionals niats|Condicionales anidados", "Programa el «si» dins del «si no» en l'ordre correcte i explica per què.|Programa el «si» dentro del «si no» en el orden correcto y explica por qué.", "Arriba a l'ordre correcte provant, però no ho sap explicar.|Llega al orden correcto probando, pero no lo sabe explicar."],
        ["Prova i millora|Prueba y mejora", "Prova a les tres places i al robot real, canvia un número cada vegada i explica les millores.|Prueba en las tres plazas y en el robot real, cambia un número cada vez y explica las mejoras.", "Prova una sola plaça o canvia molts números alhora.|Prueba una sola plaza o cambia muchos números a la vez."],
        ["Presentació|Presentación", "Explica en un minut les velocitats i els llindars triats i què ha millorat, i escolta els altres amb respecte.|Explica en un minuto las velocidades y los umbrales elegidos y qué ha mejorado, y escucha a los demás con respeto.", "Presenta el projecte amb ajuda o no sap justificar les decisions.|Presenta el proyecto con ayuda o no sabe justificar las decisiones."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir el projecte i ensenyar-lo a la família. Proveu l'«aparcament humà»: lluny, passes llargues; a prop, passes petites; molt a prop, atura't. Fixeu-vos en el sensor d'aparcament d'un cotxe si en teniu l'oportunitat.|En casa, con el móvil, podéis repetir el proyecto y enseñarlo a la familia. Probad el «aparcamiento humano»: lejos, pasos largos; cerca, pasos pequeños; muy cerca, párate. Fijaos en el sensor de aparcamiento de un coche si tenéis la oportunidad.",
    faq: [
      ["Per què no fem que vagi sempre a poc a poc, i així s'atura bé?|¿Por qué no hacemos que vaya siempre despacio, y así se para bien?", "Funcionaria, però tardaria molt. La gràcia és anar ràpid quan és lluny i lent només quan cal precisió, com fa un conductor quan aparca.|Funcionaría, pero tardaría mucho. La gracia es ir rápido cuando está lejos y lento solo cuando hace falta precisión, como hace un conductor cuando aparca."],
      ["Puc posar dos «si» un darrere l'altre en lloc d'un dins de l'altre?|¿Puedo poner dos «si» uno detrás de otro en lugar de uno dentro del otro?", "Es pot, però els dos es fan a cada volta i els motors poden rebre ordres contràries. Amb el segon «si» dins del «si no», només es pregunta quan la primera resposta és no.|Se puede, pero los dos se hacen en cada vuelta y los motores pueden recibir órdenes contrarias. Con el segundo «si» dentro del «si no», solo se pregunta cuando la primera respuesta es no."],
      ["Quins números són els millors?|¿Qué números son los mejores?", "No n'hi ha uns de sols: depèn de la velocitat i del robot. Proveu-ho i apunteu-ho. Una pista: la velocitat lenta ha de ser més de 30 i el llindar de frenar, prou gran perquè tingui temps d'alentir.|No hay unos solos: depende de la velocidad y del robot. Probadlo y apuntadlo. Una pista: la velocidad lenta tiene que ser más de 30 y el umbral de frenar, lo bastante grande para que tenga tiempo de frenar."],
      ["Els cotxes que aparquen sols funcionen així?|¿Los coches que aparcan solos funcionan así?", "La idea és la mateixa (sensors i decisions), però fan servir molts sensors, càmeres i programes molt més complicats, i sempre amb una persona responsable al volant.|La idea es la misma (sensores y decisiones), pero usan muchos sensores, cámaras y programas mucho más complicados, y siempre con una persona responsable al volante."],
      ["Per què a la zona de seguretat el carretó va enrere?|¿Por qué en la zona de seguridad la carretilla va hacia atrás?", "Perquè si comença massa a prop, aturar-se no n'hi ha prou: ha d'allunyar-se fins a la distància bona. Per això hi ha tres casos: enrere, endavant i quiet.|Porque si empieza demasiado cerca, pararse no basta: tiene que alejarse hasta la distancia buena. Por eso hay tres casos: atrás, adelante y quieto."]
    ],
    tec: [
      ["Al robot real, el carretó fa petits salts endavant i enrere a la zona de seguretat.|En el robot real, la carretilla hace pequeños saltos adelante y atrás en la zona de seguridad.", "Les mesures oscil·len una mica. Feu la zona «quiet» més ampla (per exemple, entre 9 i 17 cm) o baixeu la velocitat a 70.|Las medidas oscilan un poco. Haced la zona «quieto» más ancha (por ejemplo, entre 9 y 17 cm) o bajad la velocidad a 70."],
      ["Al robot real s'atura tocant la paret tot i que al simulador no.|En el robot real se para tocando la pared aunque en el simulador no.", "Cada lectura del sensor real tarda una mica i el programa en fa dues a cada volta: baixeu la velocitat lenta o pugeu el llindar d'aturar-se un parell de centímetres.|Cada lectura del sensor real tarda un poco y el programa hace dos en cada vuelta: bajad la velocidad lenta o subid el umbral de pararse un par de centímetros."],
      ["Copiem el codi i a MakeCode el «si» niat queda molt llarg.|Copiamos el código y en MakeCode el «si» anidado queda muy largo.", "És normal: a JavaScript surt com un «if… else { if… }». Si torneu a la vista de blocs, veureu el segon «si» dins del «si no».|Es normal: en JavaScript sale como un «if… else { if… }». Si volvéis a la vista de bloques, veréis el segundo «si» dentro del «si no»."],
      ["Només hi ha una plaça i molts grups.|Solo hay una plaza y muchos grupos.", "Feu torns de 2-3 minuts i, mentre esperen, que preparin el canvi següent al pla de paper.|Haced turnos de 2-3 minutos y, mientras esperan, que preparen el cambio siguiente en el plan de papel."],
      ["La paret del fons es mou quan el robot la toca.|La pared del fondo se mueve cuando el robot la toca.", "Feu-la amb llibres pesats o una capsa plena i marqueu-ne la posició amb cinta per tornar-la al lloc.|Hacedla con libros pesados o una caja llena y marcad su posición con cinta para devolverla a su sitio."]
    ],
    seg: [
      "Robot a terra, descarregar amb l'interruptor apagat i algú preparat per agafar-lo.|Robot en el suelo, descargar con el interruptor apagado y alguien preparado para cogerlo.",
      "Al concurs de precisió, cada grup prova al seu torn; la resta mira des de fora de la cinta.|En el concurso de precisión, cada grupo prueba en su turno; el resto mira desde fuera de la cinta.",
      "A la presentació, comentaris amables i útils: una cosa que agrada i una idea per millorar.|En la presentación, comentarios amables y útiles: una cosa que gusta y una idea para mejorar."
    ],
    extra: [
      "Afegir un quart cas (entre 30 i 50 cm, velocitat mitjana) i mostrar la distància quan aparca.|Añadir un cuarto caso (entre 30 y 50 cm, velocidad media) y mostrar la distancia cuando aparca.",
      "Fer que el carretó encengui els llums o faci un so quan aparca (ho aprendrem a la unitat 5).|Hacer que la carretilla encienda las luces o haga un sonido cuando aparca (lo aprenderemos en la unidad 5).",
      "Comparar quin grup aparca més ràpid sense perdre precisió i explicar per què.|Comparar qué grupo aparca más rápido sin perder precisión y explicar por qué."
    ],
    trans: [
      "Recull tota la unitat: mesurar (sessió 1), aturar-se (sessió 2) i esquivar (sessió 3).|Recoge toda la unidad: medir (sesión 1), pararse (sesión 2) y esquivar (sesión 3).",
      "Unitat 4: els sensors de línia de sota del robot i com seguir un camí de cinta.|Unidad 4: los sensores de línea de debajo del robot y cómo seguir un camino de cinta.",
      "Unitat 6: control proporcional, una manera encara més suau de frenar (velocitat segons la distància).|Unidad 6: control proporcional, una manera todavía más suave de frenar (velocidad según la distancia)."
    ],
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: aparcament automàtic|Proyecto: aparcamiento automático", x: "El carretó del port aparca sol: lluny, ràpid; a prop, a poc a poc; molt a prop, s'atura.|La carretilla del puerto aparca sola: lejos, rápido; cerca, despacio; muy cerca, se para.",
        nota: "Explica que avui és dia de projecte: planificar, programar, provar i presentar.|Explica que hoy es día de proyecto: planificar, programar, probar y presentar." },
      { id: 's2', k: 'pregunta', t: "Bip… bip… bip-bip-bip!|¡Bip… bip… bip-bip-bip!", x: "Per què el sensor d'aparcament d'un cotxe sona més de pressa com més a prop és la paret?|¿Por qué el sensor de aparcamiento de un coche suena más deprisa cuanto más cerca está la pared?",
        nota: "Molts cotxes porten sensors d'ultrasons al para-xocs, com el del Maqueen.|Muchos coches llevan sensores de ultrasonidos en el parachoques, como el del Maqueen." },
      { id: 's3', k: 'repas', t: "La unitat fins ara|La unidad hasta ahora", punts: ["Mesurar: l'eco i el bloc distància.|Medir: el eco y el bloque distancia.", "Aturar-se: per sempre + si… si no.|Pararse: para siempre + si… si no.", "Esquivar: una maniobra dins del «si».|Esquivar: una maniobra dentro del «si»."],
        nota: "Avui ho ajuntem tot en un projecte.|Hoy lo juntamos todo en un proyecto." },
      { id: 's4', k: 'anim', t: "Tres franges|Tres franjas", anim: 'k3park', x: "Lluny: 200 · A prop: 70 · Molt a prop: atura.|Lejos: 200 · Cerca: 70 · Muy cerca: para.",
        nota: "Les velocitats són un exemple: cada grup triarà les seves.|Las velocidades son un ejemplo: cada grupo elegirá las suyas." },
      { id: 's5', k: 'robo', t: "Un «si» dins d'un altre «si»|Un «si» dentro de otro «si»", x: "Mira com frena en entrar a la plaça.|Mira cómo frena al entrar en la plaza.",
        robo: { w: { w: 120, h: 80, bot: [12, 40, 90], walls: [[95, 26, 6, 28], [62, 24, 39, 3], [62, 53, 39, 3]], zones: [{ id: 'p', r: [66, 27, 29, 26], col: 'blue', label: 'P|P' }], time: 9 }, prog: 'forever{ if:dist<8{ stop:all } else{ if:dist<30{ run:all,fwd,70 } else{ run:all,fwd,200 } } }' },
        blocks: ["si distància < 8 → atura|si distancia < 8 → para", "si no, si distància < 30 → 70|si no, si distancia < 30 → 70", "si no → 200|si no → 200"],
        nota: "Fes la traça a la pissarra amb 50, 20 i 5 cm.|Haz la traza en la pizarra con 50, 20 y 5 cm." },
      { id: 's6', k: 'concepte', t: "L'ordre de les preguntes|El orden de las preguntas", pic: 'img/ment/atu.webp', punts: ["El robot pregunta de dalt a baix.|El robot pregunta de arriba abajo.", "Fa la primera que diu sí i se salta les altres.|Hace la primera que dice sí y se salta las demás.", "Primer, el cas més urgent: molt a prop.|Primero, el caso más urgente: muy cerca."],
        nota: "Exemple de la vida: primer mires si el semàfor és vermell, i després si hi ha cotxes.|Ejemplo de la vida: primero miras si el semáforo está rojo, y después si hay coches." },
      { id: 's7', k: 'robo', t: "Prediu: i amb l'ordre canviat?|Predice: ¿y con el orden cambiado?", x: "A dalt hi ha «distància < 30». S'aturarà a la plaça?|Arriba está «distancia < 30». ¿Se parará en la plaza?",
        robo: { w: { w: 120, h: 80, bot: [12, 40, 90], walls: [[95, 26, 6, 28], [62, 24, 39, 3], [62, 53, 39, 3]], zones: [{ id: 'p', r: [66, 27, 29, 26], col: 'blue', label: 'P|P' }], time: 12 }, prog: 'forever{ if:dist<30{ run:all,fwd,70 } else{ if:dist<8{ stop:all } else{ run:all,fwd,200 } } }' },
        nota: "Acaba tocant la paret: la pregunta d'aturar-se no s'arriba a fer mai.|Acaba tocando la pared: la pregunta de pararse no se llega a hacer nunca." },
      { id: 's8', k: 'activitat', t: "El pla en paper|El plan en papel", timer: 8, punts: ["Dibuixa la plaça i les tres franges.|Dibuja la plaza y las tres franjas.", "Tria velocitats i llindars.|Elige velocidades y umbrales.", "Escriu el programa amb paraules.|Escribe el programa con palabras.", "Explica-ho al grup i trieu un pla.|Explícalo al grupo y elegid un plan."],
        nota: "Comprova que tots els plans tenen el cas «molt a prop» primer.|Comprueba que todos los planes tienen el caso «muy cerca» primero." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre la sessió del projecte.|Abre la sesión del proyecto.", "Fes la primera prova i la predicció.|Haz la primera prueba y la predicción.", "Arregla l'ordre de les preguntes.|Arregla el orden de las preguntas."],
        nota: "«El pla en paper» de l'app ja està fet a classe.|«El plan en papel» de la app ya está hecho en clase." },
      { id: 's10', k: 'repte', t: "La zona de seguretat|La zona de seguridad", punts: ["Massa a prop → enrere.|Demasiado cerca → atrás.", "Massa lluny → endavant.|Demasiado lejos → adelante.", "Al mig → quiet.|En medio → quieto."],
        nota: "A la pista 2 el carretó comença gairebé tocant: un sol «si» no n'hi ha prou.|En la pista 2 la carretilla empieza casi tocando: un solo «si» no basta." },
      { id: 's11', k: 'activitat', t: "Al robot de veritat|En el robot de verdad", timer: 14, punts: ["Copieu el codi amb el botó &lt;/&gt; i enganxeu-lo a MakeCode.|Copiad el código con el botón &lt;/&gt; y pegadlo en MakeCode.", "Proveu la paret a 80, 95 i 110 cm.|Probad la pared a 80, 95 y 110 cm.", "Mesureu on s'atura i canvieu un sol número cada vegada.|Medid dónde se para y cambiad un solo número cada vez."],
        nota: "Robot a terra i algú preparat per agafar-lo. La paret del fons ha de ser rígida: amb roba el sensor no la veu bé.|Robot en el suelo y alguien preparado para cogerlo. La pared del fondo tiene que ser rígida: con ropa el sensor no la ve bien." },
      { id: 's12', k: 'repte', t: "Concurs de precisió|Concurso de precisión", punts: ["Objectiu: aparcar a 5 cm de la paret.|Objetivo: aparcar a 5 cm de la pared.", "Tres llargades, sense tocar.|Tres longitudes, sin tocar.", "Suma els centímetres d'error: guanya qui en tingui menys.|Suma los centímetros de error: gana quien tenga menos."],
        nota: "Apunta els resultats a la pissarra i pregunta als millors què han ajustat.|Apunta los resultados en la pizarra y pregunta a los mejores qué han ajustado." },
      { id: 's13', k: 'activitat', t: "Crea: el meu aparcament|Crea: mi aparcamiento", timer: 8, punts: ["Tres casos amb un «si» dins d'un altre.|Tres casos con un «si» dentro de otro.", "Atura't entre 3 i 10 cm a les tres places.|Párate entre 3 y 10 cm en las tres plazas.", "Desa'l a Projectes.|Guárdalo en Proyectos."],
        nota: "Tria dos o tres alumnes amb solucions diferents per presentar.|Elige dos o tres alumnos con soluciones diferentes para presentar." },
      { id: 's14', k: 'concepte', t: "Presenta el teu projecte|Presenta tu proyecto", pic: 'img/ic/trophy.webp', punts: ["Quines velocitats i quins llindars has triat?|¿Qué velocidades y qué umbrales has elegido?", "Què va fallar a la primera prova?|¿Qué falló en la primera prueba?", "Què has millorat?|¿Qué has mejorado?"],
        nota: "Un minut per alumne/a. La resta dona un comentari amable i útil.|Un minuto por alumno/a. El resto da un comentario amable y útil." },
      { id: 's15', k: 'resum', t: "Què hem après en aquesta unitat|Qué hemos aprendido en esta unidad", punts: ["El sensor d'ultrasons mesura amb l'eco.|El sensor de ultrasonidos mide con el eco.", "«Per sempre» + «si» fa que el robot decideixi sol.|«Para siempre» + «si» hace que el robot decida solo.", "Amb «si» niats hi ha més casos, i l'ordre importa.|Con «si» anidados hay más casos, y el orden importa."],
        nota: "Anuncia la unitat següent: el robot aprendrà a seguir una línia amb els sensors de sota.|Anuncia la unidad siguiente: el robot aprenderá a seguir una línea con los sensores de abajo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["El teu programa d'aparcament amb paraules.|Tu programa de aparcamiento con palabras.", "Per què «< 8» va abans que «< 30»?|¿Por qué «< 8» va antes que «< 30»?"],
        nota: "Felicita el grup pel primer projecte amb sensors.|Felicita al grupo por el primer proyecto con sensores." }
    ],
    print: [
      { id: 'p1', t: "Fitxa: el pla de l'aparcament|Ficha: el plan del aparcamiento", k: 'fitxa',
        intro: "Abans de programar, planifica. Omple cada pregunta i ensenya el pla al teu grup.|Antes de programar, planifica. Rellena cada pregunta y enseña el plan a tu grupo.",
        items: [
          { q: "Dibuixa la plaça vista des de dalt, amb la paret del fons, i pinta les tres franges: verd (lluny), groc (a prop) i vermell (molt a prop).|Dibuja la plaza vista desde arriba, con la pared del fondo, y pinta las tres franjas: verde (lejos), amarillo (cerca) y rojo (muy cerca).", big: true, sol: "Un dibuix amb la franja vermella tocant la paret, la groga al mig i la verda a l'entrada.|Un dibujo con la franja roja tocando la pared, la amarilla en medio y la verde en la entrada." },
          { q: "A quina distància comença cada franja? (llindar groc i llindar vermell)|¿A qué distancia empieza cada franja? (umbral amarillo y umbral rojo)", sol: "Per exemple: groc a menys de 30 cm i vermell a menys de 8 cm.|Por ejemplo: amarillo a menos de 30 cm y rojo a menos de 8 cm." },
          { q: "Quina velocitat tria el carretó a la franja verda? I a la groga?|¿Qué velocidad elige la carretilla en la franja verde? ¿Y en la amarilla?", sol: "Per exemple: 200 a la verda i 70 a la groga (més de 30 per vèncer la zona morta).|Por ejemplo: 200 en la verde y 70 en la amarilla (más de 30 para vencer la zona muerta)." },
          { q: "Escriu el programa amb paraules: «per sempre: si… → …; si no, si… → …; si no → …».|Escribe el programa con palabras: «para siempre: si… → …; si no, si… → …; si no → …».", big: true, rprog: 'forever{ if:dist<8{ stop:all } else{ if:dist<30{ run:all,fwd,70 } else{ run:all,fwd,200 } } }', sol: "Per sempre: si distància < 8 → atura; si no, si distància < 30 → endavant a 70; si no → endavant a 200.|Para siempre: si distancia < 8 → para; si no, si distancia < 30 → adelante a 70; si no → adelante a 200." },
          { q: "Després de provar-lo al robot de veritat: on s'ha aturat a cada llargada? Quin número canviaràs?|Después de probarlo en el robot de verdad: ¿dónde se ha parado en cada longitud? ¿Qué número cambiarás?", sol: "Resposta oberta: les mesures del grup i un sol canvi justificat.|Respuesta abierta: las medidas del grupo y un solo cambio justificado." }
        ] },
      { id: 'p2', t: "Pista: l'aparcament del port|Pista: el aparcamiento del puerto", k: 'pista',
        intro: "La plaça d'aparcament dels reptes, a escala. Munteu-la a terra amb cinta i llibres o capses rígides. Proveu també la paret del fons 15 cm més a prop i 15 cm més lluny.|La plaza de aparcamiento de los retos, a escala. Montadla en el suelo con cinta y libros o cajas rígidas. Probad también la pared del fondo 15 cm más cerca y 15 cm más lejos.",
        w: { w: 120, h: 80, bot: [12, 40, 90], walls: [[95, 26, 6, 28], [62, 24, 39, 3], [62, 53, 39, 3]], zones: [{ id: 'p', r: [66, 27, 29, 26], col: 'blue', label: 'P|P' }] },
        items: [
          { q: "Llargada 1 (paret a 95 cm): a quants cm de la paret s'ha aturat?|Longitud 1 (pared a 95 cm): ¿a cuántos cm de la pared se ha parado?" },
          { q: "Llargada 2 (paret a 80 cm): a quants cm s'ha aturat?|Longitud 2 (pared a 80 cm): ¿a cuántos cm se ha parado?" },
          { q: "Llargada 3 (paret a 110 cm): a quants cm s'ha aturat? El mateix programa ha funcionat a les tres?|Longitud 3 (pared a 110 cm): ¿a cuántos cm se ha parado? ¿El mismo programa ha funcionado en las tres?" }
        ] }
    ]
  }
});
