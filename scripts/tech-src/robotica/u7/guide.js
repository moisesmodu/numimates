/* Tech Robòtica · unitat 7 «Missions» · guia del professor (k7-1 … k7-4)
   Material propi de Numi. Classe de 60 minuts; mateix esquema que TGUIDE['r1-1']. Fase «robot»: activitat amb el
   Maqueen Lite V5 de veritat (grups de 3-4 per kit). */
Object.assign(TGUIDE, (() => {
  const f1 = v => +v.toFixed(1);
  const rrect = (x0, y0, x1, y1, r, n) => { const p = [], c = [[x1 - r, y0 + r, -90], [x1 - r, y1 - r, 0], [x0 + r, y1 - r, 90], [x0 + r, y0 + r, 180]];
    for (const [cx, cy, a0] of c) for (let i = 0; i <= n; i++) { const a = (a0 + 90 * i / n) * Math.PI / 180; p.push([f1(cx + r * Math.cos(a)), f1(cy + r * Math.sin(a))]); } return p; };
  const CA = { w: 140, h: 80, lines: [{ p: rrect(9, 14, 131, 66, 26, 8), closed: true, w: 2 }, { p: [[40, 9], [40, 19]], w: 2 }], bot: [48, 14, 90], zones: [{ id: 'meta', r: [24, 4, 22, 20], col: 'yellow', label: 'META|META' }] };
  const CA_GOAL = [{ k: 'cps', pts: [[105, 14], [131, 40], [70, 66], [9, 40], [35, 14]], r: 7 }];
  const CURSA = (s, lo, hi) => `start{ until:L=1&&R=1{ if:L=1{ run:L,fwd,${lo} run:R,fwd,${hi} } else{ if:R=1{ run:L,fwd,${hi} run:R,fwd,${lo} } else{ run:all,fwd,${s} } } } stop:all }`;
  const REBOT = (t, s) => `forever{ if:dist<10{ run:L,fwd,100 run:R,back,100 wait:${t} } else{ run:all,fwd,${s} } }`;
  const ZIGZAG = 'start{ set:d,0 } forever{ if:dist<8{ if:$d=0{ run:L,fwd,100 run:R,back,100 wait:590 run:all,fwd,150 wait:450 run:L,fwd,100 run:R,back,100 wait:590 set:d,1 } else{ run:L,back,100 run:R,fwd,100 wait:590 run:all,fwd,150 wait:450 run:L,back,100 run:R,fwd,100 wait:590 set:d,0 } } else{ run:all,fwd,200 } }';
  const SUMO = 'forever{ if:L=1||R=1{ run:all,back,150 wait:200 run:L,fwd,100 run:R,back,100 wait:200 } else{ if:dist<60{ run:all,fwd,255 } else{ run:L,fwd,90 run:R,back,90 } } }';
  const DOHYO = { w: 100, h: 90, ring: { x: 50, y: 45, r: 38 }, border: false };
  const at = (a, r) => [f1(50 + r * Math.sin(a * Math.PI / 180)), f1(40 - r * Math.cos(a * Math.PI / 180))];
  const COVA = a => ({ w: 100, h: 80, bot: [50, 40, 0], objs: [{ x: at(a, 20)[0], y: at(a, 20)[1], r: 3, kind: 'ball' }], zones: [{ id: 'base', c: [...at(a, 33), 11], col: 'blue', label: 'BASE|BASE' }] });
  const BUSCA = 'start{ run:L,fwd,60 run:R,back,60 until:dist<25{ wait:10 } run:all,fwd,120 until:aM>200{ wait:10 } wait:300 stop:all car:all,green icon:yes }';
  const TUNEL = { w: 140, h: 50, bot: [14, 25, 90], objs: [{ x: 32, y: 25, r: 3, kind: 'ball' }], zones: [{ id: 'base', r: [70, 12, 22, 26], col: 'blue', label: 'BASE|BASE' }] };
  const SEG = ["El robot, sempre a terra: res de taules sense vora.|El robot, siempre en el suelo: nada de mesas sin borde.", "Cable USB fora abans d'encendre'l.|Cable USB fuera antes de encenderlo.", "Apaga'l per agafar-lo; mans lluny de les rodes.|Apágalo para cogerlo; manos lejos de las ruedas.", "Només el pilot l'encén i l'apaga.|Solo el piloto lo enciende y lo apaga."];

  return {
  /* ---------- Sessió 1 · El robot aspirador ---------- */
  'k7-1': {
    obj: [
      "L'alumne/a descompon una missió en passos: entendre l'objectiu, triar sensors, pensar una estratègia i provar-la a diverses pistes.|El alumno/a descompone una misión en pasos: entender el objetivo, elegir sensores, pensar una estrategia y probarla en varias pistas.",
      "L'alumne/a programa un aspirador que rebota amb els ultrasons i explica per què cobreix el terra a l'atzar.|El alumno/a programa un aspirador que rebota con los ultrasonidos y explica por qué cubre el suelo al azar.",
      "L'alumne/a fa servir una variable per recordar el costat del gir i programar un recorregut en zig-zag.|El alumno/a usa una variable para recordar el lado del giro y programar un recorrido en zigzag.",
      "L'alumne/a calcula i compara el percentatge de terra net de dues estratègies, al paper i al simulador.|El alumno/a calcula y compara el porcentaje de suelo limpio de dos estrategias, en el papel y en el simulador."
    ],
    comp: [
      "Competència digital (CD5): dissenyar algorismes amb condicions, bucles i variables per resoldre un problema real|Competencia digital (CD5): diseñar algoritmos con condiciones, bucles y variables para resolver un problema real",
      "Competència STEM (STEM2): formular una estratègia, provar-la i comparar-ne els resultats|Competencia STEM (STEM2): formular una estrategia, probarla y comparar sus resultados",
      "Matemàtiques: superfície amb quadrícules i percentatges|Matemáticas: superficie con cuadrículas y porcentajes",
      "Ciències i tecnologia: robots de servei de la vida diària|Ciencias y tecnología: robots de servicio de la vida diaria"
    ],
    vocab: [
      ["Missió|Misión", "Problema gran amb un objectiu clar que es comprova a diverses pistes.|Problema grande con un objetivo claro que se comprueba en varias pistas."],
      ["Estratègia|Estrategia", "Les regles que segueix el robot per complir la missió.|Las reglas que sigue el robot para cumplir la misión."],
      ["Rebotar|Rebotar", "Avançar fins a la paret i girar per anar cap a un lloc nou.|Avanzar hasta la pared y girar para ir hacia un sitio nuevo."],
      ["Zig-zag|Zigzag", "Recórrer el terra fila per fila, girant cada vegada cap a un costat diferent.|Recorrer el suelo fila por fila, girando cada vez hacia un lado diferente."],
      ["Percentatge|Porcentaje", "Quantes parts de cada 100: la meitat és el 50 %.|Cuántas partes de cada 100: la mitad es el 50 %."],
      ["Variable|Variable", "Capsa amb nom que guarda un número; aquí, el costat del gir.|Caja con nombre que guarda un número; aquí, el lado del giro."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «El robot aspirador»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «El robot aspirador»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Per grup: 4-6 llibres grossos o caixes per fer les parets d'una «sala» d'uns 80 × 60 cm, un full de paper i un cronòmetre (o un mòbil)|Por grupo: 4-6 libros grandes o cajas para hacer las paredes de una «sala» de unos 80 × 60 cm, una hoja de papel y un cronómetro (o un móvil)",
        "Llapis de colors|Lápices de colores"
      ],
      imprimir: ["Graella: l'aspirador de llapis (dues per parella)|Cuadrícula: el aspirador de lápiz (dos por pareja)", "Codi: l'aspirador al Maqueen|Código: el aspirador en el Maqueen"],
      prep: [
        "Provar el codi de rebotar amb un kit: el robot ha de girar abans de tocar els llibres. Si toca, augmenteu la distància (de 10 a 15 cm).|Probar el código de rebotar con un kit: el robot tiene que girar antes de tocar los libros. Si toca, aumentad la distancia (de 10 a 15 cm).",
        "Preparar un racó de terra lliure per grup per muntar-hi la sala amb llibres.|Preparar un rincón de suelo libre por grupo para montar la sala con libros.",
        "Imprimir dues graelles per parella i el codi per grup.|Imprimir dos cuadrículas por pareja y el código por grupo.",
        "Deixar MakeCode obert (makecode.microbit.org) en una pestanya de cada ordinador.|Dejar MakeCode abierto (makecode.microbit.org) en una pestaña de cada ordenador."
      ]
    },
    plan: [
      { min: 4, t: "La Setmana de les Missions|La Semana de las Misiones", fase: 'inici',
        fa: "Presenta la unitat: quatre missions, una per sessió, que fan servir tot el que han après. Llança la pregunta de la diapositiva 2 i recull idees sense corregir-les.|Presenta la unidad: cuatro misiones, una por sesión, que usan todo lo que han aprendido. Lanza la pregunta de la diapositiva 2 y recoge ideas sin corregirlas.",
        diu: ["Algú té un robot aspirador a casa? Com sap per on ha passat?|¿Alguien tiene un robot aspirador en casa? ¿Cómo sabe por dónde ha pasado?", "Avui farem el nostre: quins sensors creieu que necessitarà?|Hoy haremos el nuestro: ¿qué sensores creéis que necesitará?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "Dues estratègies per netejar|Dos estrategias para limpiar", fase: 'teoria',
        fa: "Presenta els quatre passos d'una missió. Amb les animacions, explica com es mesura la neteja (quadrets de 5 cm i percentatge). Executa les demos de rebotar i de zig-zag i demana abans quina netejarà més. Acaba amb la demo de la mitja volta exacta: per què queda tan brut?|Presenta los cuatro pasos de una misión. Con las animaciones, explica cómo se mide la limpieza (cuadraditos de 5 cm y porcentaje). Ejecuta las demos de rebotar y de zigzag y pregunta antes cuál limpiará más. Termina con la demo de la media vuelta exacta: ¿por qué queda tan sucio?",
        diu: ["Si el terra té 240 quadrets i en netegem 120, quin percentatge és?|Si el suelo tiene 240 cuadraditos y limpiamos 120, ¿qué porcentaje es?", "Per què el zig-zag necessita recordar alguna cosa?|¿Por qué el zigzag necesita recordar algo?", "Què passa si el robot gira exactament 180° cada vegada?|¿Qué pasa si el robot gira exactamente 180° cada vez?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "L'aspirador de llapis|El aspirador de lápiz", fase: 'desconnectat',
        fa: "Per parelles, amb dues graelles. A la primera, un fa de robot que rebota (diagonal i canvi de direcció a cada paret) i l'altre compta els passos; a la segona, zig-zag fila per fila. Paren als 40 passos, compten els quadrets pintats i calculen el percentatge. Poseu els resultats en comú a la pissarra.|Por parejas, con dos cuadrículas. En la primera, uno hace de robot que rebota (diagonal y cambio de dirección en cada pared) y el otro cuenta los pasos; en la segunda, zigzag fila por fila. Paran a los 40 pasos, cuentan los cuadraditos pintados y calculan el porcentaje. Poned los resultados en común en la pizarra.",
        diu: ["Un pas és passar d'un quadret al del costat (o al de la diagonal).|Un paso es pasar de un cuadradito al de al lado (o al de la diagonal).", "On us heu deixat més quadrets bruts?|¿Dónde os habéis dejado más cuadraditos sucios?", "Quantes vegades heu passat pel mateix quadret?|¿Cuántas veces habéis pasado por el mismo cuadradito?"],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a obre la sessió i avança fins a la pausa activa. Al pas «L'aspirador de llapis», que toquin «Ho hem fet!». Al pas «On acabarà?», que triïn abans d'executar.|Cada alumno/a abre la sesión y avanza hasta la pausa activa. En el paso «El aspirador de lápiz», que toquen «¡Lo hemos hecho!». En el paso «¿Dónde terminará?», que elijan antes de ejecutar.",
        diu: ["Al pas del bloc que cal tocar: quin bloc fa de memòria del robot?|En el paso del bloque que hay que tocar: ¿qué bloque hace de memoria del robot?", "Primer tria la lletra; després comprova-ho.|Primero elige la letra; después compruébalo."],
        slides: ['s10'], app: "De «Recorda» fins a «Investiga»: les dues preguntes, la missió, les cinc targetes, ordenar el zig-zag, l'aspirador de llapis (ja fet), «On acabarà?» i el bloc de la memòria.|De «Recuerda» hasta «Investiga»: las dos preguntas, la misión, las cinco tarjetas, ordenar el zigzag, el aspirador de lápiz (ya hecho), «¿Dónde terminará?» y el bloque de la memoria.", org: "Individual|Individual" },
      { min: 8, t: "Reptes: rebotar i zig-zag|Retos: rebotar y zigzag", fase: 'ordinador',
        fa: "Pausa activa tots junts i, després, els tres reptes. Al de rebotar, que provin diferents temps de gir i comparin el percentatge. Al de zig-zag, que llegeixin la branca que ja funciona abans de completar l'altra.|Pausa activa todos juntos y, después, los tres retos. En el de rebotar, que prueben diferentes tiempos de giro y comparen el porcentaje. En el de zigzag, que lean la rama que ya funciona antes de completar la otra.",
        diu: ["Quin percentatge us ha sortit? I si gireu 200 ms més?|¿Qué porcentaje os ha salido? ¿Y si giráis 200 ms más?", "La branca «si no» ha de fer el mateix que la de dalt, però cap a l'altre costat.|La rama «si no» tiene que hacer lo mismo que la de arriba, pero hacia el otro lado."],
        slides: ['s11'], app: "«Pausa activa» i els reptes: primer aspirador, els mobles i el zig-zag amb memòria.|«Pausa activa» y los retos: primer aspirador, los muebles y el zigzag con memoria.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 12, t: "L'aspirador de veritat|El aspirador de verdad", fase: 'robot',
        fa: "Grups de 3-4 per kit amb papers: programador/a, pilot, cronometrador/a i secretari/ària. Munteu a terra una sala de llibres o caixes d'uns 80 × 60 cm. Descarregueu el programa de rebotar (diapositiva 12) a la micro:bit i deixeu el robot 60 segons dins la sala. El secretari/ària dibuixa al full, de manera aproximada, per on passa. Després proveu un altre temps de gir i compareu els dibuixos. Si queda temps, proveu el zig-zag: al robot de veritat, els girs de 590 ms potser no fan 90° i caldrà calibrar-los.|Grupos de 3-4 por kit con papeles: programador/a, piloto, cronometrador/a y secretario/a. Montad en el suelo una sala de libros o cajas de unos 80 × 60 cm. Descargad el programa de rebotar (diapositiva 12) en la micro:bit y dejad el robot 60 segundos dentro de la sala. El secretario/a dibuja en la hoja, de manera aproximada, por dónde pasa. Después probad otro tiempo de giro y comparad los dibujos. Si queda tiempo, probad el zigzag: en el robot de verdad, los giros de 590 ms quizá no hacen 90° y habrá que calibrarlos.",
        diu: ["El robot gira abans de tocar els llibres? Si no, quin número canviaríeu?|¿El robot gira antes de tocar los libros? Si no, ¿qué número cambiaríais?", "Hi ha algun racó on no arriba mai? Per què?|¿Hay algún rincón donde no llega nunca? ¿Por qué?", "El zig-zag del robot de veritat fa els carrils rectes? Què cal calibrar?|¿El zigzag del robot de verdad hace los carriles rectos? ¿Qué hay que calibrar?"],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit amb papers|Grupos de 3-4 por kit con papeles" },
      { min: 4, t: "Crea: l'aspirador de l'hostal|Crea: el aspirador del hostal", fase: 'crea',
        fa: "De tornada a l'ordinador, el projecte: dues sales amb un sofà, el 40 % net i els llums de sota encesos. Cadascú tria la seva estratègia; que el desin quan funcioni a les dues sales.|De vuelta al ordenador, el proyecto: dos salas con un sofá, el 40 % limpio y las luces de abajo encendidas. Cada uno elige su estrategia; que lo guarden cuando funcione en las dos salas.",
        diu: ["Quina estratègia has triat? Per què?|¿Qué estrategia has elegido? ¿Por qué?"],
        slides: ['s14'], app: "Pas «Crea»: L'aspirador de l'hostal.|Paso «Crea»: El aspirador del hostal.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees del resum i deixa que responguin les preguntes finals. A la porta, una pregunta del tiquet a cada alumne/a.|Repasa las tres ideas del resumen y deja que respondan las preguntas finales. En la puerta, una pregunta del ticket a cada alumno/a.",
        diu: ["Quina estratègia neteja més en el mateix temps? Per què?|¿Qué estrategia limpia más en el mismo tiempo? ¿Por qué?", "Què guarda la variable costat?|¿Qué guarda la variable lado?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["El robot gira tan poc (menys de 400 ms) que torna a veure la paret i fa voltes al mateix racó.|El robot gira tan poco (menos de 400 ms) que vuelve a ver la pared y da vueltas en el mismo rincón.",
        "Que miri la demo i compti quants graus gira. Pregunta: quan acaba el gir, cap on mira? Encara veu la paret?|Que mire la demo y cuente cuántos grados gira. Pregunta: cuando termina el giro, ¿hacia dónde mira? ¿Todavía ve la pared?"],
      ["Al zig-zag, copia la branca de dalt tal qual i el robot gira sempre a la dreta.|En el zigzag, copia la rama de arriba tal cual y el robot gira siempre a la derecha.",
        "Feu el moviment amb el cos: per girar a l'esquerra, quina roda va enrere? I quin valor ha de tenir costat al final?|Haced el movimiento con el cuerpo: para girar a la izquierda, ¿qué rueda va atrás? ¿Y qué valor tiene que tener lado al final?"],
      ["Oblida «posa costat a 0» a «en iniciar» o el posa dins de «per sempre».|Olvida «pon lado a 0» en «al iniciar» o lo pone dentro de «para siempre».",
        "Pregunta: si cada volta de «per sempre» torna a posar costat a 0, quan valdrà 1? Llegiu-ho junts.|Pregunta: si cada vuelta de «para siempre» vuelve a poner lado a 0, ¿cuándo valdrá 1? Leedlo juntos."],
      ["Pensa que passar dues vegades pel mateix lloc compta el doble.|Piensa que pasar dos veces por el mismo sitio cuenta el doble.",
        "Torna a la graella: un quadret ja pintat, es pot pintar més? El percentatge compta quadrets diferents.|Vuelve a la cuadrícula: un cuadradito ya pintado, ¿se puede pintar más? El porcentaje cuenta cuadraditos diferentes."],
      ["Al robot de veritat, el robot xoca amb els llibres i creu que el programa està malament.|En el robot de verdad, el robot choca con los libros y cree que el programa está mal.",
        "Al robot real, l'ultrasò veu pitjor les superfícies de biaix o molt toves. Que proveu de reaccionar abans (15 cm) i amb parets llises.|En el robot real, el ultrasonido ve peor las superficies inclinadas o muy blandas. Que prueben a reaccionar antes (15 cm) y con paredes lisas."]
    ],
    diff: {
      mes: "Inventar una tercera estratègia (per exemple, una espiral amb una variable que fa la corba cada cop més oberta) i comparar el percentatge amb les altres dues. Al robot real, calibrar els girs del zig-zag fins que els carrils quedin rectes.|Inventar una tercera estrategia (por ejemplo, una espiral con una variable que hace la curva cada vez más abierta) y comparar el porcentaje con las otras dos. En el robot real, calibrar los giros del zigzag hasta que los carriles queden rectos.",
      menys: "Fer només rebotar, amb el programa dit en veu alta («si veus la paret, gira; si no, endavant»). Al zig-zag, fer servir la pista per completar la branca de l'esquerra pas a pas.|Hacer solo rebotar, con el programa dicho en voz alta («si ves la pared, gira; si no, adelante»). En el zigzag, usar la pista para completar la rama de la izquierda paso a paso."
    },
    aval: {
      ticket: ["Explica una estratègia d'aspirador i un avantatge que té.|Explica una estrategia de aspirador y una ventaja que tiene.",
        "Si el robot neteja 60 quadrets d'un terra de 120, quin percentatge ha netejat?|Si el robot limpia 60 cuadraditos de un suelo de 120, ¿qué porcentaje ha limpiado?"],
      rubric: [
        ["Estratègia de rebotar|Estrategia de rebotar", "Programa el rebot amb «si … si no» i ajusta el gir comparant el percentatge.|Programa el rebote con «si … si no» y ajusta el giro comparando el porcentaje.", "Fa el rebot amb ajuda o no sap explicar per què gira.|Hace el rebote con ayuda o no sabe explicar por qué gira."],
        ["Variable de memòria|Variable de memoria", "Completa el zig-zag i explica què guarda la variable costat.|Completa el zigzag y explica qué guarda la variable lado.", "Completa la branca amb la pista però no explica el paper de la variable.|Completa la rama con la pista pero no explica el papel de la variable."],
        ["Mesura i comparació|Medida y comparación", "Calcula percentatges i compara dues estratègies amb dades.|Calcula porcentajes y compara dos estrategias con datos.", "Compta quadrets però s'embolica amb el percentatge.|Cuenta cuadraditos pero se lía con el porcentaje."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir la sessió i fer «L'aspirador de llapis» amb algú de la família. Si teniu (o coneixeu) un robot aspirador, observeu-lo cinc minuts: rebota, fa zig-zag o fa una altra cosa?|En casa, con el móvil, podéis repetir la sesión y hacer «El aspirador de lápiz» con alguien de la familia. Si tenéis (o conocéis) un robot aspirador, observadlo cinco minutos: ¿rebota, hace zigzag o hace otra cosa?",
    slides: [
      { id: 's1', k: 'portada', t: "El robot aspirador|El robot aspirador", x: "Missió 1 de la Setmana de les Missions: netejar el menjador de l'hostal.|Misión 1 de la Semana de las Misiones: limpiar el comedor del hostal.",
        nota: "Explica que aquesta unitat no introdueix blocs nous: combina tots els que ja saben per resoldre missions grans.|Explica que esta unidad no introduce bloques nuevos: combina todos los que ya saben para resolver misiones grandes." },
      { id: 's2', k: 'pregunta', t: "Com sap un aspirador per on ha passat?|¿Cómo sabe un aspirador por dónde ha pasado?", punts: ["Té un mapa?|¿Tiene un mapa?", "Quins sensors fa servir?|¿Qué sensores usa?", "Com decideix cap on gira?|¿Cómo decide hacia dónde gira?"],
        nota: "Recull les idees. Molts diran que «ho sap»: la majoria d'aspiradors senzills no ho saben, segueixen unes regles. Hi tornareu en acabar la teoria.|Recoge las ideas. Muchos dirán que «lo sabe»: la mayoría de aspiradores sencillos no lo saben, siguen unas reglas. Volveréis a ello al terminar la teoría." },
      { id: 's3', k: 'concepte', t: "Com s'enfoca una missió|Cómo se enfoca una misión", punts: ["1. Entén la missió: què vol dir «ho he aconseguit»?|1. Entiende la misión: ¿qué quiere decir «lo he conseguido»?", "2. Tria els sensors que t'ajuden.|2. Elige los sensores que te ayudan.", "3. Pensa una estratègia i escriu-la en blocs.|3. Piensa una estrategia y escríbela en bloques.", "4. Prova-la a totes les pistes i millora-la.|4. Pruébala en todas las pistas y mejórala."],
        nota: "Aquests quatre passos tornaran a cada missió de la unitat. Deixa'ls escrits en un racó de la pissarra.|Estos cuatro pasos volverán en cada misión de la unidad. Déjalos escritos en un rincón de la pizarra." },
      { id: 's4', k: 'anim', t: "Dues estratègies|Dos estrategias", anim: 'k7cover', x: "Rebotar cobreix el terra a l'atzar; el zig-zag, fila per fila.|Rebotar cubre el suelo al azar; el zigzag, fila por fila.",
        nota: "Pregunta quina creuen que serà més ràpida i per què. Fixeu-vos en les zones que el rebot deixa sense netejar.|Pregunta cuál creen que será más rápida y por qué. Fijaos en las zonas que el rebote deja sin limpiar." },
      { id: 's5', k: 'anim', t: "Quant ha netejat?|¿Cuánto ha limpiado?", anim: 'k7grid', x: "Terra en quadrets de 5 × 5 cm: net quan el centre del robot hi passa.|Suelo en cuadraditos de 5 × 5 cm: limpio cuando el centro del robot pasa por encima.",
        nota: "Fes un parell de càlculs a la pissarra: 25 de 50 és el 50 %; 30 de 120 és el 25 %. És exactament el que mesura el simulador.|Haz un par de cálculos en la pizarra: 25 de 50 es el 50 %; 30 de 120 es el 25 %. Es exactamente lo que mide el simulador." },
      { id: 's6', k: 'robo', t: "Estratègia 1: rebotar|Estrategia 1: rebotar", x: "Si veu la paret a menys de 10 cm, gira 800 ms; si no, endavant.|Si ve la pared a menos de 10 cm, gira 800 ms; si no, adelante.",
        robo: { w: { w: 100, h: 60, bot: [15, 30, 90], time: 30 }, prog: REBOT(800, 200) }, tip: "Abans d'executar-ho: arribarà a tots els racons?|Antes de ejecutarlo: ¿llegará a todos los rincones?",
        nota: "Deixa-la córrer 30 segons. Fes notar que passa moltes vegades pel mig i poc pels racons.|Déjala correr 30 segundos. Haz notar que pasa muchas veces por el medio y poco por los rincones." },
      { id: 's7', k: 'robo', t: "Estratègia 2: zig-zag amb memòria|Estrategia 2: zigzag con memoria", x: "La variable costat diu si toca girar a la dreta (0) o a l'esquerra (1).|La variable lado dice si toca girar a la derecha (0) o a la izquierda (1).",
        robo: { w: { w: 100, h: 60, bot: [10, 8, 90], time: 45 }, prog: ZIGZAG, varNames: { d: 'costat|lado' } },
        blocks: ["en iniciar: posa costat a 0|al iniciar: pon lado a 0", "si distància < 8|si distancia < 8", "si costat = 0 → gira a la dreta, baixa, gira a la dreta, posa costat a 1|si lado = 0 → gira a la derecha, baja, gira a la derecha, pon lado a 1", "si no → el mateix a l'esquerra, posa costat a 0|si no → lo mismo a la izquierda, pon lado a 0"],
        nota: "Atura la demo a la segona paret i pregunta: com sap ara que ha de girar a l'esquerra? La resposta és la variable.|Para la demo en la segunda pared y pregunta: ¿cómo sabe ahora que tiene que girar a la izquierda? La respuesta es la variable." },
      { id: 's8', k: 'robo', t: "Compte: mitja volta exacta|Cuidado: media vuelta exacta", x: "Gira 1180 ms (180°) cada vegada que veu la paret.|Gira 1180 ms (180°) cada vez que ve la pared.",
        robo: { w: { w: 100, h: 60, bot: [15, 30, 90], time: 20 }, prog: REBOT(1180, 150) },
        nota: "Que predigui on anirà abans d'executar. Va i ve per la mateixa ratlla: girar més no vol dir netejar millor.|Que predigan adónde irá antes de ejecutar. Va y viene por la misma raya: girar más no quiere decir limpiar mejor." },
      { id: 's9', k: 'activitat', t: "L'aspirador de llapis|El aspirador de lápiz", timer: 10, punts: ["Graella 1: rebota en diagonal i canvia de direcció a cada paret.|Cuadrícula 1: rebota en diagonal y cambia de dirección en cada pared.", "Graella 2: zig-zag, fila per fila.|Cuadrícula 2: zigzag, fila por fila.", "Pareu als 40 passos i compteu els quadrets pintats.|Parad a los 40 pasos y contad los cuadraditos pintados.", "Calculeu el percentatge i compareu.|Calculad el porcentaje y comparad."],
        nota: "El menjador fa 12 × 8 = 96 quadrets, menys els 4 de la taula: 92. Escriu a la pissarra els percentatges de cada parella.|El comedor tiene 12 × 8 = 96 cuadraditos, menos los 4 de la mesa: 92. Escribe en la pizarra los porcentajes de cada pareja." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «El robot aspirador».|Abre la sesión «El robot aspirador».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "A «On acabarà?», tria abans d'executar.|En «¿Dónde terminará?», elige antes de ejecutar.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas de l'aspirador de llapis, que toquin «Ho hem fet!»: ja l'han fet a classe.|En el paso del aspirador de lápiz, que toquen «¡Lo hemos hecho!»: ya lo han hecho en clase." },
      { id: 's11', k: 'repte', t: "Reptes de l'aspirador|Retos del aspirador", timer: 8, punts: ["1. Primer aspirador: rebota (20 %)|1. Primer aspirador: rebota (20 %)", "2. Els mobles canvien de lloc (3 pistes)|2. Los muebles cambian de sitio (3 pistas)", "3. Zig-zag amb memòria (58 %, sense xocar)|3. Zigzag con memoria (58 %, sin chocar)"],
        nota: "Al segon repte, el programa del primer ja funciona: és la gràcia dels sensors. Al tercer, la branca buida és la clau.|En el segundo reto, el programa del primero ya funciona: es la gracia de los sensores. En el tercero, la rama vacía es la clave." },
      { id: 's12', k: 'activitat', t: "L'aspirador de veritat|El aspirador de verdad", timer: 12, punts: ["Munteu la sala amb llibres (80 × 60 cm).|Montad la sala con libros (80 × 60 cm).", "Descarregueu el rebot i deixeu-lo 60 segons.|Descargad el rebote y dejadlo 60 segundos.", "Dibuixeu per on passa.|Dibujad por dónde pasa.", "Canvieu el temps del gir i compareu.|Cambiad el tiempo del giro y comparad."],
        code: "Maqueen_V5.I2CInit()\nbasic.forever(function () {\n    if (Maqueen_V5.Ultrasonic() < 10) {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 100)\n        basic.pause(800)\n    } else {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 200)\n    }\n})",
        nota: "Si el robot no veu bé els llibres, que reaccioni abans: canvieu el 10 per un 15. Recorda que cada grup tindrà un dibuix diferent: és normal, el rebot és a l'atzar.|Si el robot no ve bien los libros, que reaccione antes: cambiad el 10 por un 15. Recuerda que cada grupo tendrá un dibujo diferente: es normal, el rebote es al azar." },
      { id: 's13', k: 'concepte', t: "Seguretat amb el robot|Seguridad con el robot", punts: SEG,
        nota: "Deixa-la projectada mentre treballen amb els robots. Els llibres han de fer parets estables: si cauen, el robot pot quedar atrapat.|Déjala proyectada mientras trabajan con los robots. Los libros tienen que hacer paredes estables: si caen, el robot puede quedar atrapado." },
      { id: 's14', k: 'activitat', t: "Crea: l'aspirador de l'hostal|Crea: el aspirador del hostal", timer: 4, x: "Dues sales, el 40 % net i els llums de sota encesos. L'estratègia la tries tu.|Dos salas, el 40 % limpio y las luces de abajo encendidas. La estrategia la eliges tú.",
        nota: "Valora que hi hagi alumnes que triïn estratègies diferents i que sàpiguen explicar-ne el perquè.|Valora que haya alumnos que elijan estrategias diferentes y que sepan explicar el porqué." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Una missió: objectiu, sensors, estratègia i proves a diverses pistes.|Una misión: objetivo, sensores, estrategia y pruebas en varias pistas.", "Rebotar és senzill; el zig-zag neteja més en el mateix temps.|Rebotar es sencillo; el zigzag limpia más en el mismo tiempo.", "Una variable pot recordar una decisió.|Una variable puede recordar una decisión."],
        nota: "Torna a la pregunta del principi: ara ja saben que l'aspirador no necessita saber on és, si té una bona estratègia.|Vuelve a la pregunta del principio: ahora ya saben que el aspirador no necesita saber dónde está, si tiene una buena estrategia." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una estratègia d'aspirador i un avantatge.|Una estrategia de aspirador y una ventaja.", "60 quadrets nets de 120: quin percentatge?|60 cuadraditos limpios de 120: ¿qué porcentaje?"],
        nota: "Anota qui encara no relaciona la variable amb el costat del gir: hi tornareu a la sessió del sumo.|Anota quién todavía no relaciona la variable con el lado del giro: volveréis a ello en la sesión del sumo." }
    ],
    print: [
      { id: 'p1', t: "L'aspirador de llapis|El aspirador de lápiz", k: 'graella', w: 12, h: 8,
        intro: "Una graella per a cada estratègia. Pinteu de negre els 4 quadrets de la taula (2 × 2, al mig). Comenceu a la cantonada de dalt a l'esquerra i pinteu cada quadret per on passeu. Pareu als 40 passos.|Una cuadrícula para cada estrategia. Pintad de negro los 4 cuadraditos de la mesa (2 × 2, en el medio). Empezad en la esquina de arriba a la izquierda y pintad cada cuadradito por donde paséis. Parad a los 40 pasos.",
        legend: [['⬛', 'Taula: no s\'hi pot passar|Mesa: no se puede pasar'], ['↗', 'Rebotar: en diagonal, canvia a cada paret|Rebotar: en diagonal, cambia en cada pared'], ['↔', 'Zig-zag: fila per fila|Zigzag: fila por fila']],
        items: [
          { q: "Estratègia: ________ · Quadrets nets: ____ de 92 · Percentatge: ____ %|Estrategia: ________ · Cuadraditos limpios: ____ de 92 · Porcentaje: ____ %" },
          { q: "Quina estratègia ha netejat més? On han quedat més quadrets bruts?|¿Qué estrategia ha limpiado más? ¿Dónde han quedado más cuadraditos sucios?", big: true }
        ] },
      { id: 'p2', t: "L'aspirador al Maqueen|El aspirador en el Maqueen", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxeu-hi el codi → Descarrega. Després, cable fora i robot a terra, dins la sala de llibres.|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pegad el código → Descarga. Después, cable fuera y robot en el suelo, dentro de la sala de libros.",
        items: [
          { t: "1. Rebotar (canvieu el 800 per provar altres girs)|1. Rebotar (cambiad el 800 para probar otros giros)", prog: REBOT(800, 200) },
          { t: "2. Zig-zag amb memòria (calibreu el 590 perquè giri 90°)|2. Zigzag con memoria (calibrad el 590 para que gire 90°)", prog: ZIGZAG }
        ] }
    ]
  },

  /* ---------- Sessió 2 · Sumo ---------- */
  'k7-2': {
    obj: [
      "L'alumne/a fa servir els sensors de línia per detectar la vora del dohyo (negre o buit = 1) i evitar sortir-ne.|El alumno/a usa los sensores de línea para detectar el borde del dohyo (negro o vacío = 1) y evitar salir.",
      "L'alumne/a programa una cerca del rival amb els ultrasons: girar mentre no veu res i atacar quan el veu.|El alumno/a programa una búsqueda del rival con los ultrasonidos: girar mientras no ve nada y atacar cuando lo ve.",
      "L'alumne/a ordena les condicions segons la prioritat (seguretat, atac, cerca) i explica per què l'ordre importa.|El alumno/a ordena las condiciones según la prioridad (seguridad, ataque, búsqueda) y explica por qué el orden importa.",
      "L'alumne/a participa en una competició de sumo amb el Maqueen de veritat respectant les regles i el treball en equip.|El alumno/a participa en una competición de sumo con el Maqueen de verdad respetando las reglas y el trabajo en equipo."
    ],
    comp: [
      "Competència digital (CD5): algorismes amb condicions niades i prioritats|Competencia digital (CD5): algoritmos con condiciones anidadas y prioridades",
      "Competència STEM (STEM2): fer servir sensors per prendre decisions en temps real|Competencia STEM (STEM2): usar sensores para tomar decisiones en tiempo real",
      "Matemàtiques: el cercle (radi, diàmetre) i les distàncies|Matemáticas: el círculo (radio, diámetro) y las distancias",
      "Competència personal i social: competir amb respecte i acceptar el resultat|Competencia personal y social: competir con respeto y aceptar el resultado"
    ],
    vocab: [
      ["Dohyo|Dohyo", "El cercle de la competició de sumo: blanc amb la vora negra.|El círculo de la competición de sumo: blanco con el borde negro."],
      ["Vora|Borde", "La ratlla negra del dohyo: els sensors de línia hi donen 1.|La raya negra del dohyo: los sensores de línea dan 1 en ella."],
      ["Prioritat|Prioridad", "El que es comprova primer perquè és més important.|Lo que se comprueba primero porque es más importante."],
      ["Condició «o»|Condición «o»", "Es compleix si en passa almenys una: L = 1 o R = 1.|Se cumple si pasa al menos una: L = 1 o R = 1."],
      ["Competició|Competición", "Prova amb regles iguals per a tothom; guanya la millor estratègia.|Prueba con reglas iguales para todos; gana la mejor estrategia."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Sumo»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Sumo»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Per al dohyo: un cartró o paper blanc gran (uns 80 × 80 cm) i cinta aïllant negra de 2 cm; 2-3 llaunes buides o una capsa petita per grup|Para el dohyo: un cartón o papel blanco grande (unos 80 × 80 cm) y cinta aislante negra de 2 cm; 2-3 latas vacías o una caja pequeña por grupo",
        "Una corda o unes quantes bufandes i coixins per a l'activitat sense pantalla|Una cuerda o unas cuantas bufandas y cojines para la actividad sin pantalla"
      ],
      imprimir: ["Targetes d'estratègia del sumo (una tira per grup)|Tarjetas de estrategia del sumo (una tira por grupo)", "Pista: el dohyo a escala|Pista: el dohyo a escala"],
      prep: [
        "Fer un o dos dohyos amb cinta negra sobre cartró blanc, a terra: un cercle de 76 cm de diàmetre (radi 38 cm). Mai sobre una taula.|Hacer uno o dos dohyos con cinta negra sobre cartón blanco, en el suelo: un círculo de 76 cm de diámetro (radio 38 cm). Nunca sobre una mesa.",
        "Provar el programa SUMO amb un kit: a la vora negra, el robot ha de recular. Si se'n surt, el sensor potser necessita més temps: proveu una espera de 300 ms.|Probar el programa SUMO con un kit: en el borde negro, el robot tiene que recular. Si se sale, el sensor quizá necesita más tiempo: probad una espera de 300 ms.",
        "Marcar a terra amb una corda un cercle d'uns 2 m per a l'activitat sense pantalla.|Marcar en el suelo con una cuerda un círculo de unos 2 m para la actividad sin pantalla.",
        "Imprimir i retallar les targetes d'estratègia.|Imprimir y recortar las tarjetas de estrategia."
      ]
    },
    plan: [
      { min: 4, t: "La competició de sumo|La competición de sumo", fase: 'inici',
        fa: "Explica les regles del sumo de robots: dos robots en un cercle, guanya qui treu l'altre sense sortir. Llança la pregunta de la diapositiva 2.|Explica las reglas del sumo de robots: dos robots en un círculo, gana quien saca al otro sin salir. Lanza la pregunta de la diapositiva 2.",
        diu: ["Com pot saber el robot que és a punt de caure?|¿Cómo puede saber el robot que está a punto de caer?", "I com troba el rival si no té ulls?|¿Y cómo encuentra al rival si no tiene ojos?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Vora, rival i prioritats|Borde, rival y prioridades", fase: 'teoria',
        fa: "Amb l'animació del dohyo, recorda que els sensors de línia donen 1 al negre i a l'aire. Executa la demo de la vora. Després, l'animació de la cerca i la demo de l'atac contra el ninot. Acaba amb la demo de l'ordre equivocat: demana abans què passarà.|Con la animación del dohyo, recuerda que los sensores de línea dan 1 en el negro y en el aire. Ejecuta la demo del borde. Después, la animación de la búsqueda y la demo del ataque contra el muñeco. Termina con la demo del orden equivocado: pregunta antes qué pasará.",
        diu: ["Si el dohyo fa 76 cm d'ample, per què diem «si distància < 60»?|Si el dohyo mide 76 cm de ancho, ¿por qué decimos «si distancia < 60»?", "Quin «si» manaríeu primer: el de la vora o el del rival?|¿Qué «si» pondríais primero: el del borde o el del rival?", "Per què l'ha seguit fins a fora?|¿Por qué lo ha seguido hasta fuera?"],
        slides: ['s3', 's4', 's5', 's6', 's7', 's8'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El dohyo de corda|El dohyo de cuerda", fase: 'desconnectat',
        fa: "Grups de 4: <b>robot</b> (ulls tancats, braços endavant, camina a poc a poc), <b>sensor de línia</b> (diu «vora!» si un peu toca la corda), <b>ultrasò</b> (diu «rival!» si el coixí és davant) i <b>cervell</b> (ensenya la targeta d'estratègia que toca). La missió: treure el coixí del cercle sense sortir. Després de cada intent, rotació de papers. A la segona ronda, el cervell ha de seguir l'ordre de les targetes: vora primer.|Grupos de 4: <b>robot</b> (ojos cerrados, brazos adelante, camina despacio), <b>sensor de línea</b> (dice «¡borde!» si un pie toca la cuerda), <b>ultrasonido</b> (dice «¡rival!» si el cojín está delante) y <b>cerebro</b> (enseña la tarjeta de estrategia que toca). La misión: sacar el cojín del círculo sin salir. Después de cada intento, rotación de papeles. En la segunda ronda, el cerebro tiene que seguir el orden de las tarjetas: borde primero.",
        diu: ["Robot, a poc a poc: aquí no guanya qui corre, sinó qui no cau.|Robot, despacio: aquí no gana quien corre, sino quien no cae.", "Què ha passat quan «vora!» i «rival!» han sonat alhora? Quina ordre heu seguit?|¿Qué ha pasado cuando «¡borde!» y «¡rival!» han sonado a la vez? ¿Qué orden habéis seguido?"],
        slides: ['s9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4 amb papers que roten|Grupos de 4 con papeles que rotan" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. Al pas del dohyo de corda, «Ho hem fet!». A «On s'aturarà?», que triïn abans d'executar.|Cada alumno/a avanza hasta la pausa activa. En el paso del dohyo de cuerda, «¡Lo hemos hecho!». En «¿Dónde se parará?», que elijan antes de ejecutar.",
        diu: ["Quin bloc salva el robot de caure?|¿Qué bloque salva al robot de caer?"],
        slides: ['s10'], app: "De «Recorda» fins a «Investiga»: les preguntes, la missió, les cinc targetes, la pregunta de l'ordre, el dohyo de corda (ja fet), «On s'aturarà?» i el bloc que salva el robot.|De «Recuerda» hasta «Investiga»: las preguntas, la misión, las cinco tarjetas, la pregunta del orden, el dohyo de cuerda (ya hecho), «¿Dónde se parará?» y el bloque que salva al robot.", org: "Individual|Individual" },
      { min: 8, t: "Reptes d'entrenament|Retos de entrenamiento", fase: 'ordinador',
        fa: "Pausa activa amb la postura de sumo i, després, els quatre entrenaments. Recorda que per fer «L = 1 o R = 1» cal el botó «Afegeix i / o».|Pausa activa con la postura de sumo y, después, los cuatro entrenamientos. Recuerda que para hacer «L = 1 o R = 1» hace falta el botón «Añade y / o».",
        diu: ["Al ninot, si l'empenta no el treu, què fa el vostre robot?|Con el muñeco, si el empujón no lo saca, ¿qué hace vuestro robot?", "Retrocedir molt o poc: quin funciona millor? Per què?|Retroceder mucho o poco: ¿cuál funciona mejor? ¿Por qué?"],
        slides: ['s11'], app: "«Pausa activa» i els entrenaments 1, 2 i 3 i «Neteja el dohyo».|«Pausa activa» y los entrenamientos 1, 2 y 3 y «Limpia el dohyo».", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 13, t: "La competició amb el Maqueen|La competición con el Maqueen", fase: 'robot',
        fa: "Grups de 3-4 per kit: programador/a, pilot, àrbitre i secretari/ària. Primer, cada grup descarrega el programa SUMO i el prova sol al dohyo amb una llauna (3 minuts): no ha de sortir mai. Després, competició per parelles de grups: els dos robots es posen d'esquena l'un a l'altre al mig del dohyo i els pilots els encenen alhora. Cada combat dura 1 minut com a molt; perd qui surt del cercle. L'àrbitre controla el temps i el secretari/ària apunta els resultats. Entre combat i combat, poden canviar un sol número del programa.|Grupos de 3-4 por kit: programador/a, piloto, árbitro y secretario/a. Primero, cada grupo descarga el programa SUMO y lo prueba solo en el dohyo con una lata (3 minutos): no tiene que salir nunca. Después, competición por parejas de grupos: los dos robots se ponen de espaldas el uno al otro en el medio del dohyo y los pilotos los encienden a la vez. Cada combate dura 1 minuto como mucho; pierde quien sale del círculo. El árbitro controla el tiempo y el secretario/a apunta los resultados. Entre combate y combate, pueden cambiar un solo número del programa.",
        diu: ["Els robots, sempre a terra. Si un robot surt, el pilot l'apaga i l'agafa.|Los robots, siempre en el suelo. Si un robot sale, el piloto lo apaga y lo coge.", "Quin número canvieu per al proper combat? Per què?|¿Qué número cambiáis para el próximo combate? ¿Por qué?", "Felicitem tots els equips: avui hem après de cada combat.|Felicitamos a todos los equipos: hoy hemos aprendido de cada combate."],
        slides: ['s12', 's13'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit, combats entre dos grups|Grupos de 3-4 por kit, combates entre dos grupos" },
      { min: 3, t: "Crea: el meu campió|Crea: mi campeón", fase: 'crea',
        fa: "A l'ordinador, el projecte: guanyar al ninot a les tres pistes amb llums vermells quan ataca. Que el desin quan funcioni.|En el ordenador, el proyecto: ganar al muñeco en las tres pistas con luces rojas cuando ataca. Que lo guarden cuando funcione.",
        diu: ["On va el bloc dels llums vermells: a la branca de la vora, de l'atac o de la cerca?|¿Dónde va el bloque de las luces rojas: en la rama del borde, del ataque o de la búsqueda?"],
        slides: ['s14'], app: "Pas «Crea»: El meu campió de sumo.|Paso «Crea»: Mi campeón de sumo.", org: "Individual|Individual" },
      { min: 2, t: "Tancament|Cierre", fase: 'tancament',
        fa: "Resum ràpid i tiquet de sortida a la porta.|Resumen rápido y ticket de salida en la puerta.",
        diu: ["Quin «si» va primer i per què?|¿Qué «si» va primero y por qué?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa la condició amb «i» (L = 1 i R = 1) i el robot cau quan arriba a la vora de biaix.|Hace la condición con «y» (L = 1 y R = 1) y el robot cae cuando llega al borde de lado.",
        "Pregunta: si només un sensor veu la vora, el robot és en perill? Que provin d'arribar a la vora inclinats a la demo.|Pregunta: si solo un sensor ve el borde, ¿el robot está en peligro? Que prueben a llegar al borde inclinados en la demo."],
      ["Posa el «si distància < 60» abans que el de la vora.|Pone el «si distancia < 60» antes que el del borde.",
        "Torneu a la demo de l'ordre equivocat i a les targetes: quina era la primera?|Volved a la demo del orden equivocado y a las tarjetas: ¿cuál era la primera?"],
      ["Fa que el robot retrocedeixi molt i giri molt: no torna mai a trobar el ninot.|Hace que el robot retroceda mucho y gire mucho: no vuelve nunca a encontrar al muñeco.",
        "Que compari 200 ms amb 800 ms d'espera: amb quin queda més a prop del rival per tornar a atacar?|Que compare 200 ms con 800 ms de espera: ¿con cuál queda más cerca del rival para volver a atacar?"],
      ["Posa un llindar de distància massa gran (500) i el robot ataca sempre, encara que no hi hagi res.|Pone un umbral de distancia demasiado grande (500) y el robot ataca siempre, aunque no haya nada.",
        "Recorda que 500 vol dir «no veig res». Quina mida té el dohyo? Quin número té sentit?|Recuerda que 500 quiere decir «no veo nada». ¿Qué tamaño tiene el dohyo? ¿Qué número tiene sentido?"],
      ["Es frustra quan el seu robot perd un combat.|Se frustra cuando su robot pierde un combate.",
        "Recorda que cada combat dona informació: què ha fet el robot guanyador que el vostre no fa? Quin número canviareu?|Recuerda que cada combate da información: ¿qué ha hecho el robot ganador que el vuestro no hace? ¿Qué número cambiaréis?"]
    ],
    diff: {
      mes: "Fer que el robot alterni el sentit de la cerca (una variable que canvia cada vegada que toca la vora) o que ataqui més fluix quan el rival és lluny i a 255 quan és a prop. Al robot real, provar estratègies diferents en combats.|Hacer que el robot alterne el sentido de la búsqueda (una variable que cambia cada vez que toca el borde) o que ataque más flojo cuando el rival está lejos y a 255 cuando está cerca. En el robot real, probar estrategias diferentes en combates.",
      menys: "Començar només amb la regla de la vora (entrenament 1) i les targetes damunt la taula. Per al ninot, partir de la solució de la pista i canviar un sol número cada vegada.|Empezar solo con la regla del borde (entrenamiento 1) y las tarjetas encima de la mesa. Para el muñeco, partir de la solución de la pista y cambiar un solo número cada vez."
    },
    aval: {
      ticket: ["Quin valor donen els sensors de línia a la vora negra i fora del dohyo?|¿Qué valor dan los sensores de línea en el borde negro y fuera del dohyo?",
        "Digues els tres «si» del sumo en ordre.|Di los tres «si» del sumo en orden."],
      rubric: [
        ["Detectar la vora|Detectar el borde", "Programa la vora amb «L = 1 o R = 1» i el robot no surt mai.|Programa el borde con «L = 1 o R = 1» y el robot no sale nunca.", "Detecta la vora amb un sol sensor o el robot surt de biaix.|Detecta el borde con un solo sensor o el robot sale de lado."],
        ["Cercar i atacar|Buscar y atacar", "Combina la cerca girant i l'atac amb l'ultrasò amb un llindar raonable.|Combina la búsqueda girando y el ataque con el ultrasonido con un umbral razonable.", "Ataca però no busca, o fa servir un llindar que no té sentit.|Ataca pero no busca, o usa un umbral que no tiene sentido."],
        ["Prioritats i competició|Prioridades y competición", "Explica per què la vora va primer i millora el programa entre combats.|Explica por qué el borde va primero y mejora el programa entre combates.", "Ordena els «si» amb ajuda i canvia coses a l'atzar.|Ordena los «si» con ayuda y cambia cosas al azar."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir els entrenaments i fer «El dohyo de corda» amb la família (a poc a poc i en un espai lliure). Penseu quina estratègia faríeu servir si el rival també busqués: giraríeu cap a la dreta o cap a l'esquerra?|En casa, con el móvil, podéis repetir los entrenamientos y hacer «El dohyo de cuerda» con la familia (despacio y en un espacio libre). Pensad qué estrategia usaríais si el rival también buscara: ¿giraríais hacia la derecha o hacia la izquierda?",
    slides: [
      { id: 's1', k: 'portada', t: "Sumo|Sumo", x: "Missió 2: la competició de sumo de robots.|Misión 2: la competición de sumo de robots.",
        nota: "Presenta el sumo com una competició amb regles: guanya la millor estratègia, no el robot més fort. Ningú no toca els robots durant un combat.|Presenta el sumo como una competición con reglas: gana la mejor estrategia, no el robot más fuerte. Nadie toca los robots durante un combate." },
      { id: 's2', k: 'pregunta', t: "Com guanya un robot sense ulls?|¿Cómo gana un robot sin ojos?", punts: ["Com sap que és a la vora?|¿Cómo sabe que está en el borde?", "Com troba el rival?|¿Cómo encuentra al rival?", "Què és més important: atacar o no caure?|¿Qué es más importante: atacar o no caer?"],
        nota: "Deixa les tres preguntes obertes: les respondreu una per una a la teoria.|Deja las tres preguntas abiertas: las responderéis una por una en la teoría." },
      { id: 's3', k: 'anim', t: "El dohyo|El dohyo", anim: 'k7ring', x: "Blanc → 0; vora negra i buit → 1. Si L o R valen 1: enrere!|Blanco → 0; borde negro y vacío → 1. Si L o R valen 1: ¡atrás!",
        nota: "Recorda la unitat 4: el sensor envia llum avall. Al negre i a l'aire no torna: per això tots dos donen 1.|Recuerda la unidad 4: el sensor envía luz abajo. En el negro y en el aire no vuelve: por eso los dos dan 1." },
      { id: 's4', k: 'robo', t: "No surtis mai|No salgas nunca", x: "Si L = 1 o R = 1, enrere i gira; si no, endavant.|Si L = 1 o R = 1, atrás y gira; si no, adelante.",
        robo: { w: { ...DOHYO, bot: [50, 45, 30], time: 20 }, prog: 'forever{ if:L=1||R=1{ run:all,back,150 wait:500 run:L,fwd,100 run:R,back,100 wait:800 } else{ run:all,fwd,150 } }' },
        nota: "Que la classe compti quantes vegades rebota a la vora en 20 segons. Fes notar la «o»: n'hi ha prou que un sensor vegi negre.|Que la clase cuente cuántas veces rebota en el borde en 20 segundos. Haz notar la «o»: basta con que un sensor vea negro." },
      { id: 's5', k: 'anim', t: "Busca i ataca|Busca y ataca", anim: 'k7sumo', x: "Gira com un far fins que l'ultrasò veu alguna cosa a menys de 60 cm.|Gira como un faro hasta que el ultrasonido ve algo a menos de 60 cm.",
        nota: "Pregunta per què 60: el dohyo fa 76 cm, així que una cosa a menys de 60 cm segur que és a dins (o just a la vora).|Pregunta por qué 60: el dohyo mide 76 cm, así que algo a menos de 60 cm seguro que está dentro (o justo en el borde)." },
      { id: 's6', k: 'robo', t: "Contra el ninot|Contra el muñeco", x: "Vora primer, després l'atac i, si no veu res, busca.|Borde primero, después el ataque y, si no ve nada, busca.",
        robo: { w: { ...DOHYO, bot: [50, 45, 0], objs: [{ x: 70, y: 60, r: 4, kind: 'box' }], time: 15 }, prog: SUMO }, tip: "Quant tardarà a trobar-lo?|¿Cuánto tardará en encontrarlo?",
        blocks: ["si L = 1 o R = 1 → enrere 200 ms, gira 200 ms|si L = 1 o R = 1 → atrás 200 ms, gira 200 ms", "si no, si distància < 60 → endavant a 255|si no, si distancia < 60 → adelante a 255", "si no → gira sobre si mateix a 90|si no → gira sobre sí mismo a 90"],
        nota: "Remarca que retrocedeix poc: així torna a atacar de seguida si la primera empenta no l'ha tret.|Remarca que retrocede poco: así vuelve a atacar enseguida si el primer empujón no lo ha sacado." },
      { id: 's7', k: 'robo', t: "Compte: l'ordre equivocat|Cuidado: el orden equivocado", x: "Aquí l'atac va primer i la vora, després.|Aquí el ataque va primero y el borde, después.",
        robo: { w: { ...DOHYO, bot: [50, 45, 0], objs: [{ x: 50, y: 25, r: 3, kind: 'can' }], time: 10 }, prog: 'forever{ if:dist<60{ run:all,fwd,255 } else{ if:L=1||R=1{ run:all,back,150 wait:300 } else{ run:L,fwd,90 run:R,back,90 } } }' },
        nota: "Abans d'executar, que votin: caurà o no? Cau perquè mentre veu la llauna no arriba mai a mirar la vora.|Antes de ejecutar, que voten: ¿caerá o no? Cae porque mientras ve la lata no llega nunca a mirar el borde." },
      { id: 's8', k: 'concepte', t: "L'ordre dels «si» és la prioritat|El orden de los «si» es la prioridad", punts: ["1. Seguretat: la vora.|1. Seguridad: el borde.", "2. Atac: el rival al davant.|2. Ataque: el rival delante.", "3. Cerca: girar quan no veu res.|3. Búsqueda: girar cuando no ve nada."],
        nota: "Compara-ho amb la vida diària: abans de creuar el carrer per anar a saludar algú, mires si ve un cotxe.|Compáralo con la vida diaria: antes de cruzar la calle para ir a saludar a alguien, miras si viene un coche." },
      { id: 's9', k: 'activitat', t: "El dohyo de corda|El dohyo de cuerda", timer: 10, punts: ["Robot: ulls tancats, a poc a poc.|Robot: ojos cerrados, despacio.", "Sensor de línia: «vora!». Ultrasò: «rival!».|Sensor de línea: «¡borde!». Ultrasonido: «¡rival!».", "Cervell: ensenya la targeta que toca.|Cerebro: enseña la tarjeta que toca.", "Treieu el coixí sense sortir. Rotació de papers!|Sacad el cojín sin salir. ¡Rotación de papeles!"],
        nota: "Vigila que el robot camini a poc a poc i amb els braços endavant. A la segona ronda, digues «vora!» i «rival!» alhora i mira quina targeta tria el cervell.|Vigila que el robot camine despacio y con los brazos adelante. En la segunda ronda, di «¡borde!» y «¡rival!» a la vez y mira qué tarjeta elige el cerebro." },
      { id: 's10', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Sumo».|Abre la sesión «Sumo».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "A «On s'aturarà?», tria abans d'executar.|En «¿Dónde se parará?», elige antes de ejecutar.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas del dohyo de corda, que toquin «Ho hem fet!».|En el paso del dohyo de cuerda, que toquen «¡Lo hemos hecho!»." },
      { id: 's11', k: 'repte', t: "Entrenaments|Entrenamientos", timer: 8, punts: ["1. No surtis! (20 s)|1. ¡No salgas! (20 s)", "2. Fora la llauna (3 pistes)|2. Fuera la lata (3 pistas)", "3. Busca el ninot (4 pistes)|3. Busca el muñeco (4 pistas)", "4. Neteja el dohyo (3 llaunes)|4. Limpia el dohyo (3 latas)"],
        nota: "L'entrenament 2 es fa amb «en iniciar» i «repeteix fins que»; el 3 i el 4, amb «per sempre» i tres «si».|El entrenamiento 2 se hace con «al iniciar» y «repite hasta que»; el 3 y el 4, con «para siempre» y tres «si»." },
      { id: 's12', k: 'activitat', t: "Competició amb el Maqueen|Competición con el Maqueen", timer: 13, punts: ["Proveu el robot sol amb una llauna: no ha de sortir.|Probad el robot solo con una lata: no tiene que salir.", "Combat: robots d'esquena al mig, s'encenen alhora.|Combate: robots de espaldas en el medio, se encienden a la vez.", "1 minut com a molt; perd qui surt.|1 minuto como mucho; pierde quien sale.", "Entre combats: canvieu un sol número.|Entre combates: cambiad un solo número."],
        code: "Maqueen_V5.I2CInit()\nbasic.forever(function () {\n    if (Maqueen_V5.readPatrol(Maqueen_V5.Patrol.L) == 1 || Maqueen_V5.readPatrol(Maqueen_V5.Patrol.R) == 1) {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CCW, 150)\n        basic.pause(200)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 100)\n        basic.pause(200)\n    } else if (Maqueen_V5.Ultrasonic() < 60) {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 255)\n    } else {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 90)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 90)\n    }\n})",
        nota: "Al robot real, la cinta aïllant és brillant: si el robot no la veu bé, proveu cinta de pintor negra o un retolador gruixut. Feu una taula de combats a la pissarra.|En el robot real, la cinta aislante es brillante: si el robot no la ve bien, probad cinta de pintor negra o un rotulador grueso. Haced una tabla de combates en la pizarra." },
      { id: 's13', k: 'concepte', t: "Regles i seguretat de la competició|Reglas y seguridad de la competición", punts: ["El dohyo, sempre a terra. Mai sobre una taula.|El dohyo, siempre en el suelo. Nunca sobre una mesa.", "Ningú no toca els robots durant el combat.|Nadie toca los robots durante el combate.", "Si un robot surt, el pilot l'apaga i l'agafa.|Si un robot sale, el piloto lo apaga y lo coge.", "Felicitem el rival en acabar.|Felicitamos al rival al terminar."],
        nota: "Si dos robots s'encallen empenyent-se més de 15 segons, l'àrbitre atura el combat i es torna a començar.|Si dos robots se atascan empujándose más de 15 segundos, el árbitro para el combate y se vuelve a empezar." },
      { id: 's14', k: 'activitat', t: "Crea: el meu campió|Crea: mi campeón", timer: 3, x: "Guanya al ninot a les tres pistes i posa els llums vermells quan ataca.|Gana al muñeco en las tres pistas y pon las luces rojas cuando ataca.",
        nota: "Qui acabi pot afegir una icona o una nota quan el ninot surt.|Quien termine puede añadir un icono o una nota cuando el muñeco sale." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Vora negra i buit → 1: enrere!|Borde negro y vacío → 1: ¡atrás!", "Ultrasons: girar per buscar i atacar quan el veus.|Ultrasonidos: girar para buscar y atacar cuando lo ves.", "L'ordre dels «si» és la prioritat: seguretat primer.|El orden de los «si» es la prioridad: seguridad primero."],
        nota: "Pregunta quin canvi ha fet guanyar més combats a la classe.|Pregunta qué cambio ha hecho ganar más combates en la clase." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què donen els sensors de línia a la vora i fora?|¿Qué dan los sensores de línea en el borde y fuera?", "Els tres «si» del sumo, en ordre.|Los tres «si» del sumo, en orden."],
        nota: "Anota qui confon «i» amb «o» a les condicions.|Anota quién confunde «y» con «o» en las condiciones." }
    ],
    print: [
      { id: 'p1', t: "Targetes d'estratègia del sumo|Tarjetas de estrategia del sumo", k: 'targetes',
        intro: "Una tira per grup. El cervell les té en aquest ordre i mira sempre la primera que es compleix.|Una tira por grupo. El cerebro las tiene en este orden y mira siempre la primera que se cumple.",
        items: [
          { t: "1. Vora! → 2 passos enrere i un quart de volta ⚠️|1. ¡Borde! → 2 pasos atrás y un cuarto de vuelta ⚠️", n: 1 },
          { t: "2. Rival al davant! → endavant fins a empènyer 💥|2. ¡Rival delante! → adelante hasta empujar 💥", n: 1 },
          { t: "3. No noto res → gira a poc a poc sobre el lloc 🔄|3. No noto nada → gira despacio sobre el sitio 🔄", n: 1 },
          { t: "Robot 🤖|Robot 🤖", n: 1 }, { t: "Sensor de línia 👣|Sensor de línea 👣", n: 1 }, { t: "Ultrasò 👂|Ultrasonido 👂", n: 1 }, { t: "Cervell 🧠|Cerebro 🧠", n: 1 }
        ] },
      { id: 'p2', t: "El dohyo a escala|El dohyo a escala", k: 'pista',
        intro: "A terra, sobre un cartró o paper blanc d'uns 80 × 80 cm. Marqueu el centre i, amb un cordill de 38 cm i un llapis, dibuixeu el cercle. Enganxeu-hi la cinta negra (2 cm) per dins de la línia.|En el suelo, sobre un cartón o papel blanco de unos 80 × 80 cm. Marcad el centro y, con un cordel de 38 cm y un lápiz, dibujad el círculo. Pegad la cinta negra (2 cm) por dentro de la línea.",
        w: { ...DOHYO, bot: [50, 45, 0], objs: [{ x: 50, y: 25, r: 3, kind: 'can' }, { x: 70, y: 55, r: 3, kind: 'can' }] },
        items: [
          { q: "Radi: 38 cm · diàmetre: 76 cm · vora negra: 2 cm d'ample.|Radio: 38 cm · diámetro: 76 cm · borde negro: 2 cm de ancho." },
          { q: "El robot comença al centre. Les llaunes, buides i a més de 15 cm del robot.|El robot empieza en el centro. Las latas, vacías y a más de 15 cm del robot." }
        ] }
    ]
  },

  /* ---------- Sessió 3 · Rescat a la cova ---------- */
  'k7-3': {
    obj: [
      "L'alumne/a explica per què un robot sense pinça ha d'empènyer els objectes en línia recta i de cara.|El alumno/a explica por qué un robot sin pinza tiene que empujar los objetos en línea recta y de cara.",
      "L'alumne/a fa servir el valor analògic (ADC) del sensor de línia per detectar una zona de color i aturar-s'hi.|El alumno/a usa el valor analógico (ADC) del sensor de línea para detectar una zona de color y pararse en ella.",
      "L'alumne/a divideix una missió en fases (buscar, empènyer, deixar, avisar) i les programa una darrere l'altra amb «repeteix fins que».|El alumno/a divide una misión en fases (buscar, empujar, dejar, avisar) y las programa una detrás de otra con «repite hasta que».",
      "L'alumne/a calibra el llindar del sensor al robot de veritat mesurant el blanc i el color de la base.|El alumno/a calibra el umbral del sensor en el robot de verdad midiendo el blanco y el color de la base."
    ],
    comp: [
      "Competència digital (CD5): descompondre un problema en fases i programar-les en seqüència|Competencia digital (CD5): descomponer un problema en fases y programarlas en secuencia",
      "Competència STEM (STEM2): forces i moviment en empènyer objectes; mesurar i calibrar un sensor|Competencia STEM (STEM2): fuerzas y movimiento al empujar objetos; medir y calibrar un sensor",
      "Matemàtiques: llindars i comparacions (més gran que, més petit que)|Matemáticas: umbrales y comparaciones (mayor que, menor que)",
      "Ciutadania: robots que ajuden en situacions de risc|Ciudadanía: robots que ayudan en situaciones de riesgo"
    ],
    vocab: [
      ["Rescat|Rescate", "Missió per trobar i portar alguna cosa a un lloc segur.|Misión para encontrar y llevar algo a un sitio seguro."],
      ["Balisa|Baliza", "Objecte de senyal que marca un lloc; aquí, la bola que cal portar a la base.|Objeto de señal que marca un sitio; aquí, la bola que hay que llevar a la base."],
      ["Fase|Fase", "Cada tros d'una missió, que comença quan s'acaba l'anterior.|Cada trozo de una misión, que empieza cuando termina el anterior."],
      ["Llindar|Umbral", "El número que separa dos casos: per sobre de 200, color; per sota, blanc.|El número que separa dos casos: por encima de 200, color; por debajo, blanco."],
      ["ADC|ADC", "El valor analògic del sensor de línia: blanc ~90, color ~360, negre ~900.|El valor analógico del sensor de línea: blanco ~90, color ~360, negro ~900."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Rescat a la cova»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Rescate en la cueva»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas cargadas",
        "Per grup: una pilota de ping-pong o de paper, un full de cartolina de color (blau o verd) per fer la base, llibres per fer un túnel i una capsa de sabates|Por grupo: una pelota de ping-pong o de papel, una hoja de cartulina de color (azul o verde) para hacer la base, libros para hacer un túnel y una caja de zapatos"
      ],
      imprimir: ["Targetes de les fases del rescat (un paquet de cinc per grup)|Tarjetas de las fases del rescate (un paquete de cinco por grupo)", "Codi: el rescat al Maqueen|Código: el rescate en el Maqueen"],
      prep: [
        "Comprovar amb un kit quin valor ADC dona la cartolina de la base (programa «mesura», a l'imprimible). Si no queda clarament per sobre del blanc, canvieu de color.|Comprobar con un kit qué valor ADC da la cartulina de la base (programa «mide», en el imprimible). Si no queda claramente por encima del blanco, cambiad de color.",
        "Preparar per grup un tros de terra blanc (o paper blanc) amb la base de cartolina al fons.|Preparar por grupo un trozo de suelo blanco (o papel blanco) con la base de cartulina al fondo.",
        "Imprimir i retallar les targetes de les fases.|Imprimir y recortar las tarjetas de las fases.",
        "Deixar MakeCode obert a cada ordinador.|Dejar MakeCode abierto en cada ordenador."
      ]
    },
    plan: [
      { min: 4, t: "Alerta a la cova|Alerta en la cueva", fase: 'inici',
        fa: "Explica la història del rescat i llança la pregunta de la diapositiva 2. Ensenya la pilota i un Maqueen: on la podria agafar?|Explica la historia del rescate y lanza la pregunta de la diapositiva 2. Enseña la pelota y un Maqueen: ¿por dónde la podría coger?",
        diu: ["El Maqueen no té mans ni pinça. Com portarà la balisa?|El Maqueen no tiene manos ni pinza. ¿Cómo llevará la baliza?", "Com sabrà que ja és a la base?|¿Cómo sabrá que ya está en la base?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 9, t: "Empènyer, trobar la base i fer fases|Empujar, encontrar la base y hacer fases", fase: 'teoria',
        fa: "Amb l'animació, compara empènyer de cara i de costat. Executa la demo de la base (aM > 200) i la de la cerca a la cova. Presenta les fases amb l'animació. Acaba amb la demo del revolt: per què s'ha quedat enrere la llauna?|Con la animación, compara empujar de cara y de lado. Ejecuta la demo de la base (aM > 200) y la de la búsqueda en la cueva. Presenta las fases con la animación. Termina con la demo de la curva: ¿por qué se ha quedado atrás la lata?",
        diu: ["Al blanc dona uns 90 i al blau uns 360. Quin número posaríeu al mig?|En el blanco da unos 90 y en el azul unos 360. ¿Qué número pondríais en el medio?", "Per què el robot de la cova busca «distància < 25» i no «< 60»?|¿Por qué el robot de la cueva busca «distancia < 25» y no «< 60»?", "Quina fase ve després d'empènyer?|¿Qué fase viene después de empujar?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Empènyer sense pinça|Empujar sin pinza", fase: 'desconnectat',
        fa: "Grups de 3-4 amb una capsa de sabates, una pilota i un full de color com a base. Primer, que empenyin la pilota en recta amb el costat obert de la capsa; després, només amb una cantonada; i després, que intentin girar empenyent. Tanqueu amb les targetes de fases: cada grup les ordena i explica què fa el robot a cada una.|Grupos de 3-4 con una caja de zapatos, una pelota y una hoja de color como base. Primero, que empujen la pelota en recta con el lado abierto de la caja; después, solo con una esquina; y después, que intenten girar empujando. Cerrad con las tarjetas de fases: cada grupo las ordena y explica qué hace el robot en cada una.",
        diu: ["Quan se us escapa la pilota? I quan no?|¿Cuándo se os escapa la pelota? ¿Y cuándo no?", "Quin bloc faríeu servir per a cada fase?|¿Qué bloque usaríais para cada fase?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3-4|Grupos de 3-4" },
      { min: 10, t: "A l'ordinador: descobreix i prova|En el ordenador: descubre y prueba", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A «On s'aturarà?», que pensin on són els sensors del robot.|Cada alumno/a avanza hasta la pausa activa. En «¿Dónde se parará?», que piensen dónde están los sensores del robot.",
        diu: ["Els sensors són al davant: el robot veu la base abans d'entrar-hi.|Los sensores están delante: el robot ve la base antes de entrar."],
        slides: ['s9'], app: "De «Recorda» fins a «Investiga»: les preguntes, la missió, les cinc targetes, ordenar les fases, «Empènyer sense pinça» (ja fet), «On s'aturarà?» i el bloc de la fase buscar.|De «Recuerda» hasta «Investiga»: las preguntas, la misión, las cinco tarjetas, ordenar las fases, «Empujar sin pinza» (ya hecho), «¿Dónde se parará?» y el bloque de la fase buscar.", org: "Individual|Individual" },
      { min: 8, t: "Reptes de rescat|Retos de rescate", fase: 'ordinador',
        fa: "Pausa activa i els quatre reptes. Al primer n'hi ha prou amb el temps; al segon, la base es mou i cal el sensor. Al tercer, que separin les fases en veu alta abans de programar.|Pausa activa y los cuatro retos. En el primero basta con el tiempo; en el segundo, la base se mueve y hace falta el sensor. En el tercero, que separen las fases en voz alta antes de programar.",
        diu: ["Per què el programa amb temps funciona a la primera pista i no a les altres?|¿Por qué el programa con tiempo funciona en la primera pista y no en las otras?", "Quantes fases té el repte de la cova?|¿Cuántas fases tiene el reto de la cueva?"],
        slides: ['s10'], app: "«Pausa activa» i els reptes: la primera balisa, on és la base, busca a la cova i rescat amb avís.|«Pausa activa» y los retos: la primera baliza, dónde está la base, busca en la cueva y rescate con aviso.", org: "Tot el grup i després individual|Todo el grupo y después individual" },
      { min: 12, t: "El rescat de veritat|El rescate de verdad", fase: 'robot',
        fa: "Grups de 3-4 per kit. Pas 1 (calibrar, 4 min): descarregueu el programa «mesura» i apunteu el número que surt a la pantalla al blanc i sobre la base de color; trieu el llindar al mig. Pas 2 (rescat, 8 min): munteu un túnel de llibres d'uns 25 cm d'ample amb la base al fons, poseu la pilota a uns 15 cm davant del robot i descarregueu el programa del túnel amb el vostre llindar. Mesureu si la pilota queda dins la base. Si va bé, proveu la cerca girant (programa de la cova).|Grupos de 3-4 por kit. Paso 1 (calibrar, 4 min): descargad el programa «mide» y apuntad el número que sale en la pantalla en el blanco y sobre la base de color; elegid el umbral en el medio. Paso 2 (rescate, 8 min): montad un túnel de libros de unos 25 cm de ancho con la base al fondo, poned la pelota a unos 15 cm delante del robot y descargad el programa del túnel con vuestro umbral. Medid si la pelota queda dentro de la base. Si va bien, probad la búsqueda girando (programa de la cueva).",
        diu: ["Quin número dona el vostre blanc? I la vostra base?|¿Qué número da vuestro blanco? ¿Y vuestra base?", "La pilota de ping-pong rodola molt: com ho podríeu millorar?|La pelota de ping-pong rueda mucho: ¿cómo lo podríais mejorar?", "Robot a terra i cable fora abans d'encendre'l.|Robot en el suelo y cable fuera antes de encenderlo."],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit|Grupos de 3-4 por kit" },
      { min: 4, t: "Crea: operació balisa|Crea: operación baliza", fase: 'crea',
        fa: "El projecte de la sessió: la missió sencera a la cova, amb un avís inventat per cadascú. Que el desin quan funcioni a les tres pistes.|El proyecto de la sesión: la misión entera en la cueva, con un aviso inventado por cada uno. Que lo guarden cuando funcione en las tres pistas.",
        diu: ["Com avisarà el teu robot? Llums, icona, so…?|¿Cómo avisará tu robot? ¿Luces, icono, sonido…?"],
        slides: ['s13'], app: "Pas «Crea»: Operació balisa.|Paso «Crea»: Operación baliza.", org: "Individual|Individual" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Resum de les tres idees i tiquet de sortida.|Resumen de las tres ideas y ticket de salida.",
        diu: ["Quines són les fases d'un rescat?|¿Cuáles son las fases de un rescate?"],
        slides: ['s14', 's15'], app: "«Tancament»: les dues preguntes i com m'he sentit.|«Cierre»: las dos preguntas y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «línia M = 1» per trobar la base i el robot no s'atura (la base de color no és negra).|Usa «línea M = 1» para encontrar la base y el robot no se para (la base de color no es negra).",
        "Que miri el tauler de sensors sobre la base: quant val M? I M (ADC)? Quina de les dues canvia?|Que mire el panel de sensores sobre la base: ¿cuánto vale M? ¿Y M (ADC)? ¿Cuál de las dos cambia?"],
      ["Posa el llindar massa a prop del blanc (100) i el robot s'atura en qualsevol taca.|Pone el umbral demasiado cerca del blanco (100) y el robot se para en cualquier mancha.",
        "Pregunta: quin número dona el blanc? I el color? El llindar ha de quedar ben bé al mig.|Pregunta: ¿qué número da el blanco? ¿Y el color? El umbral tiene que quedar justo en el medio."],
      ["A la cova, busca amb «distància < 60» i el robot ataca la paret.|En la cueva, busca con «distancia < 60» y el robot ataca la pared.",
        "Que miri a quina distància són les parets des del centre. Quin número només veu la balisa?|Que mire a qué distancia están las paredes desde el centro. ¿Qué número solo ve la baliza?"],
      ["Posa tots els blocs dins de «per sempre» i el robot torna a començar la missió en acabar.|Pone todos los bloques dentro de «para siempre» y el robot vuelve a empezar la misión al terminar.",
        "Torneu a les targetes de fases: la missió es fa una sola vegada. Quin guió fa les coses una vegada?|Volved a las tarjetas de fases: la misión se hace una sola vez. ¿Qué guion hace las cosas una vez?"],
      ["Al robot real, la pilota rodola i s'escapa encara que vagi recte.|En el robot real, la pelota rueda y se escapa aunque vaya recto.",
        "És normal: una pilota lleugera rebota. Que provin a 100 de velocitat o amb una pilota de paper arrugat, que rodola menys.|Es normal: una pelota ligera rebota. Que prueben a 100 de velocidad o con una pelota de papel arrugado, que rueda menos."]
    ],
    diff: {
      mes: "Afegir una fase «tornar»: després de deixar la balisa, el robot recula fins a la zona de sortida. Al robot real, mesurar a quina velocitat la pilota s'escapa menys.|Añadir una fase «volver»: después de dejar la baliza, el robot recula hasta la zona de salida. En el robot real, medir a qué velocidad la pelota se escapa menos.",
      menys: "Fer els reptes 1 i 2 amb les targetes de fases a la taula. Al repte de la cova, partir de la pista i canviar només la velocitat de la cerca.|Hacer los retos 1 y 2 con las tarjetas de fases en la mesa. En el reto de la cueva, partir de la pista y cambiar solo la velocidad de la búsqueda."
    },
    aval: {
      ticket: ["Per què el Maqueen ha d'empènyer la balisa en línia recta?|¿Por qué el Maqueen tiene que empujar la baliza en línea recta?",
        "Si el blanc dona 90 i la base 360, quin llindar triaries? Per què?|Si el blanco da 90 y la base 360, ¿qué umbral elegirías? ¿Por qué?"],
      rubric: [
        ["Empènyer amb control|Empujar con control", "Empeny la balisa de cara i en recta, i explica per què als revolts s'escapa.|Empuja la baliza de cara y en recta, y explica por qué en las curvas se escapa.", "Empeny la balisa però no sap explicar per què de vegades se li escapa.|Empuja la baliza pero no sabe explicar por qué a veces se le escapa."],
        ["Sensor i llindar|Sensor y umbral", "Fa servir el valor ADC amb un llindar ben triat i el calibra al robot real.|Usa el valor ADC con un umbral bien elegido y lo calibra en el robot real.", "Fa servir el sensor amb ajuda o copia el llindar sense entendre'l.|Usa el sensor con ayuda o copia el umbral sin entenderlo."],
        ["Missió per fases|Misión por fases", "Programa les fases en ordre amb «repeteix fins que» i avisa en acabar.|Programa las fases en orden con «repite hasta que» y avisa al terminar.", "Té les fases barrejades o se'n salta alguna.|Tiene las fases mezcladas o se salta alguna."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu repetir els reptes i provar «Empènyer sense pinça» amb una capsa i una taronja. Busqueu informació (amb un adult) sobre algun robot que ajudi en rescats o en llocs perillosos: quins sensors creieu que porta?|En casa, con el móvil, podéis repetir los retos y probar «Empujar sin pinza» con una caja y una naranja. Buscad información (con un adulto) sobre algún robot que ayude en rescates o en sitios peligrosos: ¿qué sensores creéis que lleva?",
    slides: [
      { id: 's1', k: 'portada', t: "Rescat a la cova|Rescate en la cueva", x: "Missió 3: portar les balises fins a la base.|Misión 3: llevar las balizas hasta la base.",
        nota: "Explica que hi ha robots de veritat que entren a llocs on les persones no poden: túnels, edificis després d'un terratrèmol, el fons del mar.|Explica que hay robots de verdad que entran en sitios donde las personas no pueden: túneles, edificios después de un terremoto, el fondo del mar." },
      { id: 's2', k: 'pregunta', t: "Com ho portaríeu sense mans?|¿Cómo lo llevaríais sin manos?", punts: ["El Maqueen no té pinça. Què pot fer?|El Maqueen no tiene pinza. ¿Qué puede hacer?", "Com sap que ja és a la base?|¿Cómo sabe que ya está en la base?", "I si no sap on és la balisa?|¿Y si no sabe dónde está la baliza?"],
        nota: "Escriu les respostes en tres columnes: empènyer, base, buscar. Les completareu a la teoria.|Escribe las respuestas en tres columnas: empujar, base, buscar. Las completaréis en la teoría." },
      { id: 's3', k: 'anim', t: "De cara o de costat|De cara o de lado", anim: 'k7push', x: "De cara, la balisa va recta; de costat, rellisca i s'escapa.|De cara, la baliza va recta; de lado, resbala y se escapa.",
        nota: "Demostra-ho amb un llibre i una pilota damunt la taula abans de mirar l'animació.|Demuéstralo con un libro y una pelota encima de la mesa antes de mirar la animación." },
      { id: 's4', k: 'robo', t: "Com sap que és a la base?|¿Cómo sabe que está en la base?", x: "Empeny fins que línia M (ADC) > 200 i s'atura.|Empuja hasta que línea M (ADC) > 200 y se para.",
        robo: { w: TUNEL, prog: 'start{ run:all,fwd,150 until:aM>200{ wait:10 } wait:300 stop:all }' }, tip: "Mireu el valor del sensor al tauler quan entra a la base.|Mirad el valor del sensor en el panel cuando entra en la base.",
        nota: "Fes notar que els sensors de línia van al davant: el robot veu la base abans que el seu centre hi entri. Per això la balisa queda a dins.|Haz notar que los sensores de línea van delante: el robot ve la base antes de que su centro entre. Por eso la baliza queda dentro." },
      { id: 's5', k: 'robo', t: "Buscar a la cova|Buscar en la cueva", x: "Gira fins que distància < 25, empeny fins a la base i avisa.|Gira hasta que distancia < 25, empuja hasta la base y avisa.",
        robo: { w: COVA(150), prog: BUSCA }, blocks: ["gira: esquerre endavant, dret enrere|gira: izquierdo adelante, derecho atrás", "repeteix fins que distància < 25|repite hasta que distancia < 25", "endavant · repeteix fins que línia M (ADC) > 200|adelante · repite hasta que línea M (ADC) > 200", "atura · llums verds · icona «sí»|para · luces verdes · icono «sí»"],
        nota: "Pregunta per què 25 i no 60: des del centre de la cova, les parets són a més de 30 cm; la balisa, a uns 13.|Pregunta por qué 25 y no 60: desde el centro de la cueva, las paredes están a más de 30 cm; la baliza, a unos 13." },
      { id: 's6', k: 'anim', t: "La missió per fases|La misión por fases", anim: 'k7plan', x: "Busca, empeny, deixa i avisa: cada fase espera que acabi l'anterior.|Busca, empuja, deja y avisa: cada fase espera a que termine la anterior.",
        nota: "Relaciona cada fase amb un bloc: «repeteix fins que» per a les fases que esperen un sensor; «atura» i els llums per a les últimes.|Relaciona cada fase con un bloque: «repite hasta que» para las fases que esperan un sensor; «para» y las luces para las últimas." },
      { id: 's7', k: 'robo', t: "Compte: el revolt|Cuidado: la curva", x: "Segueix la línia empenyent una llauna. Arribarà amb ella?|Sigue la línea empujando una lata. ¿Llegará con ella?",
        robo: { w: { w: 150, h: 80, bot: [14, 60, 90], lines: [{ p: [[12, 60], [50, 60], [70, 40], [110, 40], [128, 22]], w: 2 }], objs: [{ x: 30, y: 60, r: 3, kind: 'can' }], time: 14 }, prog: 'forever{ if:L=1&&R=0{ run:L,fwd,40 run:R,fwd,140 } else{ if:R=1&&L=0{ run:L,fwd,140 run:R,fwd,40 } else{ run:all,fwd,120 } } }' },
        nota: "Que votin abans. La llauna continua recta al primer revolt: el robot no té pinça. Per això a la cova primer apuntem i després empenyem recte.|Que voten antes. La lata sigue recta en la primera curva: el robot no tiene pinza. Por eso en la cueva primero apuntamos y después empujamos recto." },
      { id: 's8', k: 'activitat', t: "Empènyer sense pinça|Empujar sin pinza", timer: 10, punts: ["Empenyeu la pilota en recta amb la capsa.|Empujad la pelota en recta con la caja.", "Ara només amb una cantonada.|Ahora solo con una esquina.", "Ara girant mentre empenyeu.|Ahora girando mientras empujáis.", "Ordeneu les targetes de les fases.|Ordenad las tarjetas de las fases."],
        nota: "Les capses amb el costat obert funcionen com una pala: és una millora que fan alguns robots de rescat.|Las cajas con el lado abierto funcionan como una pala: es una mejora que hacen algunos robots de rescate." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Rescat a la cova».|Abre la sesión «Rescate en la cueva».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "A «On s'aturarà?», pensa on són els sensors.|En «¿Dónde se parará?», piensa dónde están los sensores.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "Al pas «Empènyer sense pinça», que toquin «Ho hem fet!».|En el paso «Empujar sin pinza», que toquen «¡Lo hemos hecho!»." },
      { id: 's10', k: 'repte', t: "Reptes de rescat|Retos de rescate", timer: 8, punts: ["1. La primera balisa (amb temps)|1. La primera baliza (con tiempo)", "2. On és la base? (sensor ADC)|2. ¿Dónde está la base? (sensor ADC)", "3. Busca a la cova (4 pistes)|3. Busca en la cueva (4 pistas)", "4. Rescat amb avís|4. Rescate con aviso"],
        nota: "El segon repte comença amb el programa del primer: que vegin per què el temps fix falla quan la base es mou.|El segundo reto empieza con el programa del primero: que vean por qué el tiempo fijo falla cuando la base se mueve." },
      { id: 's11', k: 'activitat', t: "Calibra i rescata|Calibra y rescata", timer: 12, punts: ["Programa «mesura»: apunteu el blanc i la base.|Programa «mide»: apuntad el blanco y la base.", "Llindar = al mig dels dos números.|Umbral = en el medio de los dos números.", "Túnel de llibres, pilota a 15 cm, base al fons.|Túnel de libros, pelota a 15 cm, base al fondo.", "La pilota queda dins la base?|¿La pelota queda dentro de la base?"],
        code: "Maqueen_V5.I2CInit()\nMaqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 150)\nwhile (!(Maqueen_V5.readPatrolData(Maqueen_V5.Patrol.M) > 200)) {\n    basic.pause(10)\n}\nbasic.pause(300)\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)\nMaqueen_V5.setRgblLed(Maqueen_V5.DirectionType.All, Maqueen_V5.CarLightColors.Green)\nbasic.showIcon(IconNames.Yes)",
        nota: "Canvieu el 200 pel llindar del vostre grup. Si la cartolina dona gairebé el mateix que el blanc, proveu un color més fosc.|Cambiad el 200 por el umbral de vuestro grupo. Si la cartulina da casi lo mismo que el blanco, probad un color más oscuro." },
      { id: 's12', k: 'concepte', t: "Calibrar el llindar|Calibrar el umbral", punts: ["Mesura el blanc: per exemple, 90.|Mide el blanco: por ejemplo, 90.", "Mesura la base: per exemple, 360.|Mide la base: por ejemplo, 360.", "Llindar al mig: (90 + 360) ÷ 2 ≈ 225.|Umbral en el medio: (90 + 360) ÷ 2 ≈ 225.", "Cada terra i cada cartolina són diferents: mesura sempre!|Cada suelo y cada cartulina son diferentes: ¡mide siempre!"],
        nota: "El programa «mesura» de l'imprimible mostra el valor a la pantalla de la micro:bit: només cal posar el robot (apagat de motors) sobre cada superfície.|El programa «mide» del imprimible muestra el valor en la pantalla de la micro:bit: solo hay que poner el robot (con los motores parados) sobre cada superficie." },
      { id: 's13', k: 'activitat', t: "Crea: operació balisa|Crea: operación baliza", timer: 4, x: "Busca, empeny, atura't i avisa a les tres pistes. L'avís el tries tu.|Busca, empuja, párate y avisa en las tres pistas. El aviso lo eliges tú.",
        nota: "Valora que l'avís sigui clar: algú de lluny ha de saber que el rescat s'ha acabat.|Valora que el aviso sea claro: alguien de lejos tiene que saber que el rescate ha terminado." },
      { id: 's14', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Sense pinça: empènyer de cara i en recta.|Sin pinza: empujar de cara y en recta.", "Valor ADC: blanc ~90, color ~360; llindar al mig.|Valor ADC: blanco ~90, color ~360; umbral en el medio.", "Una missió llarga es fa per fases.|Una misión larga se hace por fases."],
        nota: "Torna a les tres columnes de la diapositiva 2 i completeu-les.|Vuelve a las tres columnas de la diapositiva 2 y completadlas." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què cal empènyer en línia recta?|¿Por qué hay que empujar en línea recta?", "Blanc 90 i base 360: quin llindar?|Blanco 90 y base 360: ¿qué umbral?"],
        nota: "Anota qui encara confon el valor 0/1 de la línia amb el valor ADC.|Anota quién todavía confunde el valor 0/1 de la línea con el valor ADC." }
    ],
    print: [
      { id: 'p1', t: "Les fases del rescat|Las fases del rescate", k: 'targetes',
        intro: "Un paquet per grup. Barregeu-les i ordeneu-les; a la part de darrere, escriviu el bloc que fa cada fase.|Un paquete por grupo. Mezcladlas y ordenadlas; en la parte de detrás, escribid el bloque que hace cada fase.",
        items: [
          { t: "Buscar 🔍|Buscar 🔍", n: 1 }, { t: "Empènyer ➡️|Empujar ➡️", n: 1 }, { t: "Arribar a la base 🟦|Llegar a la base 🟦", n: 1 }, { t: "Deixar ✋|Dejar ✋", n: 1 }, { t: "Avisar 🟢|Avisar 🟢", n: 1 }
        ] },
      { id: 'p2', t: "El rescat al Maqueen|El rescate en el Maqueen", k: 'codi',
        intro: "A makecode.microbit.org: nou projecte → Extensions → «maqueen» → JavaScript → enganxeu-hi el codi → Descarrega. Primer el programa «mesura» per triar el vostre llindar.|En makecode.microbit.org: nuevo proyecto → Extensiones → «maqueen» → JavaScript → pegad el código → Descarga. Primero el programa «mide» para elegir vuestro umbral.",
        items: [
          { t: "1. Mesura: mostra el valor ADC del sensor del mig|1. Mide: muestra el valor ADC del sensor del medio", prog: 'forever{ num:aM wait:500 }' },
          { t: "2. El túnel: empeny fins a la base (canvieu el 200 pel vostre llindar)|2. El túnel: empuja hasta la base (cambiad el 200 por vuestro umbral)", prog: 'start{ run:all,fwd,150 until:aM>200{ wait:10 } wait:300 stop:all car:all,green icon:yes }' },
          { t: "3. La cova: busca girant, empeny i avisa|3. La cueva: busca girando, empuja y avisa", prog: BUSCA }
        ] }
    ]
  },

  /* ---------- Sessió 4 · Projecte: la cursa contrarellotge ---------- */
  'k7-4': {
    obj: [
      "L'alumne/a programa un seguidor de línia amb dos sensors que s'atura a la ratlla de meta amb «repeteix fins que L = 1 i R = 1».|El alumno/a programa un seguidor de línea con dos sensores que se para en la raya de meta con «repite hasta que L = 1 y R = 1».",
      "L'alumne/a relaciona la velocitat amb el temps de volta i amb la fiabilitat, i explica l'efecte de la inèrcia en frenar.|El alumno/a relaciona la velocidad con el tiempo de vuelta y con la fiabilidad, y explica el efecto de la inercia al frenar.",
      "L'alumne/a aplica el cicle de millora: canviar una sola cosa, provar, mesurar el temps i comparar.|El alumno/a aplica el ciclo de mejora: cambiar una sola cosa, probar, medir el tiempo y comparar.",
      "L'alumne/a fa servir el temps de la micro:bit i una variable per mostrar el temps de volta a la pantalla.|El alumno/a usa el tiempo de la micro:bit y una variable para mostrar el tiempo de vuelta en la pantalla."
    ],
    comp: [
      "Competència digital (CD5): crear, depurar i optimitzar un programa per complir uns requisits|Competencia digital (CD5): crear, depurar y optimizar un programa para cumplir unos requisitos",
      "Competència STEM (STEM2): mesurar temps, recollir dades i treure'n conclusions|Competencia STEM (STEM2): medir tiempos, recoger datos y sacar conclusiones",
      "Matemàtiques: velocitat, temps i unitats (ms i s); taules de dades|Matemáticas: velocidad, tiempo y unidades (ms y s); tablas de datos",
      "Competència emprenedora: planificar un projecte i millorar-lo per iteracions|Competencia emprendedora: planificar un proyecto y mejorarlo por iteraciones"
    ],
    vocab: [
      ["Contrarellotge|Contrarreloj", "Cursa en què cada robot surt sol i guanya qui tarda menys.|Carrera en la que cada robot sale solo y gana quien tarda menos."],
      ["Punt de control|Punto de control", "Lloc del circuit per on s'ha de passar, en ordre.|Sitio del circuito por donde hay que pasar, en orden."],
      ["Inèrcia|Inercia", "El robot no s'atura en sec: continua uns centímetres després d'«atura».|El robot no se para en seco: sigue unos centímetros después de «para»."],
      ["Iteració|Iteración", "Cada volta del cicle de millora: canvia, prova, mesura i compara.|Cada vuelta del ciclo de mejora: cambia, prueba, mide y compara."],
      ["Temps (ms)|Tiempo (ms)", "Els mil·lisegons que compta la micro:bit des que s'encén.|Los milisegundos que cuenta la micro:bit desde que se enciende."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: la cursa contrarellotge»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: la carrera contrarreloj»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un kit per grup de 3-4: Maqueen Lite V5 amb micro:bit V2, cable USB i piles ben carregades|Un kit por grupo de 3-4: Maqueen Lite V5 con micro:bit V2, cable USB y pilas bien cargadas",
        "Un o dos circuits de cinta negra (2 cm) sobre paper o terra blanc, d'uns 140 × 80 cm, amb la ratlla de meta; cronòmetres o mòbils|Uno o dos circuitos de cinta negra (2 cm) sobre papel o suelo blanco, de unos 140 × 80 cm, con la raya de meta; cronómetros o móviles",
        "Un full, un retolador gruixut i un llapis per alumne/a|Una hoja, un rotulador grueso y un lápiz por alumno/a"
      ],
      imprimir: ["Fitxa: el circuit de llapis i la taula de temps (una per alumne/a)|Ficha: el circuito de lápiz y la tabla de tiempos (una por alumno/a)", "Pista: el circuit del moll a escala|Pista: el circuito del muelle a escala"],
      prep: [
        "Muntar el circuit del moll amb cinta negra seguint l'imprimible: un rectangle de 122 × 52 cm amb les cantonades arrodonides (radi 26 cm) i una ratlla de meta de 10 cm que travessa la recta de dalt.|Montar el circuito del muelle con cinta negra siguiendo el imprimible: un rectángulo de 122 × 52 cm con las esquinas redondeadas (radio 26 cm) y una raya de meta de 10 cm que atraviesa la recta de arriba.",
        "Provar el codi de la cursa amb un kit a velocitat 150: ha de fer la volta i aturar-se a la meta. Si confon un revolt amb la meta, feu les corbes més obertes.|Probar el código de la carrera con un kit a velocidad 150: tiene que dar la vuelta y pararse en la meta. Si confunde una curva con la meta, haced las curvas más abiertas.",
        "Preparar una taula de temps a la pissarra (grup, velocitat, temps, ha acabat?).|Preparar una tabla de tiempos en la pizarra (grupo, velocidad, tiempo, ¿ha terminado?).",
        "Carregar les piles: la velocitat del robot real depèn molt de la bateria.|Cargar las pilas: la velocidad del robot real depende mucho de la batería."
      ]
    },
    plan: [
      { min: 4, t: "La gran cursa del port|La gran carrera del puerto", fase: 'inici',
        fa: "Presenta el projecte de la unitat i les regles de la contrarellotge: una volta, tots els punts de control i aturat a la meta. Llança la pregunta de la diapositiva 2.|Presenta el proyecto de la unidad y las reglas de la contrarreloj: una vuelta, todos los puntos de control y parado en la meta. Lanza la pregunta de la diapositiva 2.",
        diu: ["Què guanya una cursa: anar al màxim o no equivocar-se mai?|¿Qué gana una carrera: ir al máximo o no equivocarse nunca?", "Com sabrà el robot que ha arribat a la meta?|¿Cómo sabrá el robot que ha llegado a la meta?"],
        slides: ['s1', 's2'], app: "Encara no: pantalles apagades.|Todavía no: pantallas apagadas.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "Velocitat, meta i inèrcia|Velocidad, meta e inercia", fase: 'teoria',
        fa: "Amb l'animació, comenta les dades del circuit del port. Executa la demo de la ratlla de meta i la del seguiment del xip, i compara els temps al tauler. Abans de la demo de «per sempre», demana què passarà a la meta. Acaba amb el cronòmetre a la pantalla.|Con la animación, comenta los datos del circuito del puerto. Ejecuta la demo de la raya de meta y la del seguimiento del chip, y compara los tiempos en el panel. Antes de la demo de «para siempre», pregunta qué pasará en la meta. Termina con el cronómetro en la pantalla.",
        diu: ["Per què L i R només són negres alhora a la ratlla de meta?|¿Por qué L y R solo son negros a la vez en la raya de meta?", "Per què el robot de «per sempre» torna a arrencar?|¿Por qué el robot de «para siempre» vuelve a arrancar?", "Temps ÷ 1000: per què dividim?|Tiempo ÷ 1000: ¿por qué dividimos?"],
        slides: ['s3', 's4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 8, t: "El circuit de llapis|El circuito de lápiz", fase: 'desconnectat',
        fa: "Cada alumne/a, amb la fitxa: repassa el circuit amb el llapis tres vegades (a poc a poc, normal i molt de pressa) mentre un company/a cronometra i compta les sortides. Omplen la taula i decideixen quina és la millor velocitat de cursa. Poseu en comú dues o tres conclusions.|Cada alumno/a, con la ficha: repasa el circuito con el lápiz tres veces (despacio, normal y muy deprisa) mientras un compañero/a cronometra y cuenta las salidas. Rellenan la tabla y deciden cuál es la mejor velocidad de carrera. Poned en común dos o tres conclusiones.",
        diu: ["On us heu sortit més?|¿Dónde os habéis salido más?", "Si cada sortida costés 3 segons de penalització, quina velocitat guanyaria?|Si cada salida costara 3 segundos de penalización, ¿qué velocidad ganaría?"],
        slides: ['s8'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Parelles|Parejas" },
      { min: 10, t: "A l'ordinador: prova i primera volta|En el ordenador: prueba y primera vuelta", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la volta de reconeixement (inclosa). Al cicle de millora, que expliquin per què només es canvia una cosa cada vegada.|Cada alumno/a avanza hasta la vuelta de reconocimiento (incluida). En el ciclo de mejora, que expliquen por qué solo se cambia una cosa cada vez.",
        diu: ["Primer segur, després ràpid: la volta de reconeixement no té límit de temps.|Primero seguro, después rápido: la vuelta de reconocimiento no tiene límite de tiempo."],
        slides: ['s9'], app: "De «Recorda» fins a «Volta de reconeixement»: preguntes, missió, targetes, cicle de millora, circuit de llapis (ja fet), la pregunta del bucle, el bloc que atura, la pausa i la primera volta.|De «Recuerda» hasta «Vuelta de reconocimiento»: preguntas, misión, tarjetas, ciclo de mejora, circuito de lápiz (ya hecho), la pregunta del bucle, el bloque que para, la pausa y la primera vuelta.", org: "Individual|Individual" },
      { min: 6, t: "Contra el rellotge|Contra el reloj", fase: 'ordinador',
        fa: "Els reptes de 18 i de 13 segons. Que apuntin a la fitxa la velocitat i el temps de cada intent.|Los retos de 18 y de 13 segundos. Que apunten en la ficha la velocidad y el tiempo de cada intento.",
        diu: ["Quant has guanyat pujant de 150 a 200?|¿Cuánto has ganado subiendo de 150 a 200?", "A 255, funciona als dos circuits?|A 255, ¿funciona en los dos circuitos?"],
        slides: ['s10'], app: "Reptes «Contra el rellotge!» i «Bat el rècord!».|Retos «¡Contra el reloj!» y «¡Bate el récord!».", org: "Individual|Individual" },
      { min: 15, t: "La cursa contrarellotge de veritat|La carrera contrarreloj de verdad", fase: 'robot',
        fa: "Grups de 3-4 per kit: programador/a, pilot, cronometrador/a i secretari/ària. Cada grup descarrega el programa de la cursa a velocitat 150 i fa una volta de prova. Després, tres intents oficials: abans de cada un poden canviar una sola cosa. El robot surt just darrere la ratlla de meta, el pilot l'encén i el cronometrador/a compta fins que s'atura a la ratlla; la pantalla també mostra els segons. Si el robot surt de la línia, l'intent no compta. Apunteu a la pissarra el millor temps de cada grup.|Grupos de 3-4 por kit: programador/a, piloto, cronometrador/a y secretario/a. Cada grupo descarga el programa de la carrera a velocidad 150 y hace una vuelta de prueba. Después, tres intentos oficiales: antes de cada uno pueden cambiar una sola cosa. El robot sale justo detrás de la raya de meta, el piloto lo enciende y el cronometrador/a cuenta hasta que se para en la raya; la pantalla también muestra los segundos. Si el robot se sale de la línea, el intento no cuenta. Apuntad en la pizarra el mejor tiempo de cada grupo.",
        diu: ["Quina cosa canvieu en aquest intent? Què espereu que passi?|¿Qué cosa cambiáis en este intento? ¿Qué esperáis que pase?", "El temps del simulador i el del robot són iguals? Per què no?|¿El tiempo del simulador y el del robot son iguales? ¿Por qué no?", "Robot a terra, cable fora; mans fora del circuit durant la volta.|Robot en el suelo, cable fuera; manos fuera del circuito durante la vuelta."],
        slides: ['s11', 's12'], app: "Cap: MakeCode i el robot de veritat.|Ninguna: MakeCode y el robot de verdad.", org: "Grups de 3-4 per kit, per torns al circuit|Grupos de 3-4 por kit, por turnos en el circuito" },
      { min: 6, t: "Crea: la cursa del port|Crea: la carrera del puerto", fase: 'crea',
        fa: "El projecte final a l'app: el circuit del port amb la xicana, menys de 20 segons i el temps a la pantalla. Que el desin i, si queda temps, que intentin baixar el seu rècord.|El proyecto final en la app: el circuito del puerto con la chicane, menos de 20 segundos y el tiempo en la pantalla. Que lo guarden y, si queda tiempo, que intenten bajar su récord.",
        diu: ["A la xicana, a quina velocitat encara funciona?|En la chicane, ¿a qué velocidad todavía funciona?"],
        slides: ['s13'], app: "Pas «El teu projecte» i «Crea»: La cursa contrarellotge del port.|Paso «Tu proyecto» y «Crea»: La carrera contrarreloj del puerto.", org: "Individual|Individual" },
      { min: 3, t: "Podi i tancament de la unitat|Podio y cierre de la unidad", fase: 'tancament',
        fa: "Felicita tots els equips amb la taula de temps i repassa les quatre missions de la unitat. Tiquet de sortida.|Felicita a todos los equipos con la tabla de tiempos y repasa las cuatro misiones de la unidad. Ticket de salida.",
        diu: ["Quina missió de la setmana us ha agradat més? Per què?|¿Qué misión de la semana os ha gustado más? ¿Por qué?", "Quina millora us ha fet guanyar més temps?|¿Qué mejora os ha hecho ganar más tiempo?"],
        slides: ['s14', 's15'], app: "«Tancament»: la pregunta, la història final i com m'he sentit.|«Cierre»: la pregunta, la historia final y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa servir «per sempre» amb «si L = 1 i R = 1, atura» i el robot torna a arrencar després de la meta.|Usa «para siempre» con «si L = 1 y R = 1, para» y el robot vuelve a arrancar después de la meta.",
        "Que miri la demo de la inèrcia: on és el robot just després d'«atura»? Encara és sobre la ratlla?|Que mire la demo de la inercia: ¿dónde está el robot justo después de «para»? ¿Todavía está sobre la raya?"],
      ["Puja totes les velocitats a 255 alhora i el robot perd la línia.|Sube todas las velocidades a 255 a la vez y el robot pierde la línea.",
        "Torneu al cicle de millora: canvia un sol número, prova i mira el temps. Quin canvi ha fet que es perdés?|Volved al ciclo de mejora: cambia un solo número, prueba y mira el tiempo. ¿Qué cambio ha hecho que se pierda?"],
      ["Fa la condició amb «o» (L = 1 o R = 1) i el robot s'atura al primer revolt.|Hace la condición con «o» (L = 1 o R = 1) y el robot se para en la primera curva.",
        "Pregunta: en un revolt, quants sensors veuen negre? I a la ratlla de meta? Quina paraula ho distingeix?|Pregunta: en una curva, ¿cuántos sensores ven negro? ¿Y en la raya de meta? ¿Qué palabra lo distingue?"],
      ["Mostra el temps sense dividir i la pantalla passa un número molt llarg.|Muestra el tiempo sin dividir y la pantalla pasa un número muy largo.",
        "Quants mil·lisegons té un segon? Què cal fer per passar de 15340 ms a segons?|¿Cuántos milisegundos tiene un segundo? ¿Qué hay que hacer para pasar de 15340 ms a segundos?"],
      ["Al robot real, el temps és diferent del simulador i pensa que ha fet trampa o que s'ha equivocat.|En el robot real, el tiempo es diferente del simulador y piensa que ha hecho trampa o que se ha equivocado.",
        "És normal: les piles, les rodes i el terra canvien la velocitat. El que importa és comparar els intents al mateix circuit.|Es normal: las pilas, las ruedas y el suelo cambian la velocidad. Lo que importa es comparar los intentos en el mismo circuito."]
    ],
    diff: {
      mes: "Fer una zona de frenada: abans de la meta, una zona de color que el robot detecta amb el valor ADC per anar més a poc a poc i aturar-se just a la ratlla. O provar el control proporcional de la unitat 6 per corregir amb més suavitat.|Hacer una zona de frenada: antes de la meta, una zona de color que el robot detecta con el valor ADC para ir más despacio y pararse justo en la raya. O probar el control proporcional de la unidad 6 para corregir con más suavidad.",
      menys: "Fer la volta de reconeixement amb la solució de la pista i, després, canviar només la velocitat de les rectes. Al robot real, fer de cronometrador/a i de secretari/ària abans de programar.|Hacer la vuelta de reconocimiento con la solución de la pista y, después, cambiar solo la velocidad de las rectas. En el robot real, hacer de cronometrador/a y de secretario/a antes de programar."
    },
    aval: {
      ticket: ["Per què el robot s'atura amb «L = 1 i R = 1» i no amb «L = 1 o R = 1»?|¿Por qué el robot se para con «L = 1 y R = 1» y no con «L = 1 o R = 1»?",
        "Digues una millora que has provat i què ha passat amb el temps.|Di una mejora que has probado y qué ha pasado con el tiempo."],
      rubric: [
        ["Seguidor amb meta|Seguidor con meta", "Programa el seguidor dins de «repeteix fins que» i el robot s'atura a la meta als dos circuits.|Programa el seguidor dentro de «repite hasta que» y el robot se para en la meta en los dos circuitos.", "Segueix la línia però no s'atura bé a la meta.|Sigue la línea pero no se para bien en la meta."],
        ["Optimització|Optimización", "Millora el temps canviant una cosa cada vegada i apunta els resultats.|Mejora el tiempo cambiando una cosa cada vez y apunta los resultados.", "Canvia diverses coses alhora i no sap quina ha millorat.|Cambia varias cosas a la vez y no sabe cuál ha mejorado."],
        ["Projecte i dades|Proyecto y datos", "Completa la cursa del port, mostra el temps i compara el simulador amb el robot real.|Completa la carrera del puerto, muestra el tiempo y compara el simulador con el robot real.", "Completa la cursa amb ajuda o no mostra el temps.|Completa la carrera con ayuda o no muestra el tiempo."]
      ]
    },
    casa: "A casa, amb el mòbil, podeu tornar a la cursa del port i intentar baixar el vostre rècord. Expliqueu a algú de la família les quatre missions de la setmana i quin robot de veritat fa una feina semblant a cada una.|En casa, con el móvil, podéis volver a la carrera del puerto e intentar bajar vuestro récord. Explicad a alguien de la familia las cuatro misiones de la semana y qué robot de verdad hace un trabajo parecido a cada una.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: la cursa contrarellotge|Proyecto: la carrera contrarreloj", x: "Missió 4: una volta al circuit, tots els punts de control i aturat a la meta.|Misión 4: una vuelta al circuito, todos los puntos de control y parado en la meta.",
        nota: "Presenta-ho com el projecte de la unitat: en acabar, cada grup tindrà el seu temps al robot de veritat.|Preséntalo como el proyecto de la unidad: al terminar, cada grupo tendrá su tiempo en el robot de verdad." },
      { id: 's2', k: 'pregunta', t: "Velocitat o precisió?|¿Velocidad o precisión?", punts: ["Què guanya una cursa: anar al màxim o no equivocar-se?|¿Qué gana una carrera: ir al máximo o no equivocarse?", "Com sap el robot que és a la meta?|¿Cómo sabe el robot que está en la meta?", "S'atura en sec?|¿Se para en seco?"],
        nota: "Recull opinions i deixa-les a la vista: les comprovareu amb dades.|Recoge opiniones y déjalas a la vista: las comprobaréis con datos." },
      { id: 's3', k: 'anim', t: "Més ràpid… fins que es perd|Más rápido… hasta que se pierde", anim: 'k7trial', x: "Al circuit del port: a 150 uns 24 s, a 200 uns 17 s; a 255 (amb la roda de dins a 60) es confon a la xicana.|En el circuito del puerto: a 150 unos 24 s, a 200 unos 17 s; a 255 (con la rueda de dentro a 60) se confunde en la chicane.",
        nota: "Són dades del simulador. Pregunta quina velocitat triarien i per què: la millor és la més ràpida que sempre funciona.|Son datos del simulador. Pregunta qué velocidad elegirían y por qué: la mejor es la más rápida que siempre funciona." },
      { id: 's4', k: 'robo', t: "La ratlla de meta|La raya de meta", x: "Segueix la línia fins que L = 1 i R = 1; després, atura.|Sigue la línea hasta que L = 1 y R = 1; después, para.",
        robo: { w: { ...CA, goal: CA_GOAL, time: 18 }, prog: CURSA(200, 40, 200) }, tip: "Mireu com es tornen verds els punts de control.|Mirad cómo se vuelven verdes los puntos de control.",
        blocks: ["repeteix fins que L = 1 i R = 1|repite hasta que L = 1 y R = 1", "si L = 1 → esquerre 40, dret 200|si L = 1 → izquierdo 40, derecho 200", "si no, si R = 1 → esquerre 200, dret 40|si no, si R = 1 → izquierdo 200, derecho 40", "si no → els dos a 200 · i al final: atura|si no → los dos a 200 · y al final: para"],
        nota: "Fes notar el temps al tauler quan s'atura: uns 15 segons.|Haz notar el tiempo en el panel cuando se para: unos 15 segundos." },
      { id: 's5', k: 'robo', t: "El seguiment del xip|El seguimiento del chip", x: "Segur, però lent… i no s'atura a la meta.|Seguro, pero lento… y no se para en la meta.",
        robo: { w: { ...CA, goal: CA_GOAL, time: 18 }, prog: 'start{ patrol:on }' },
        nota: "En 18 segons no arriba ni a la meitat del circuit. Per a una cursa, el nostre programa és molt millor.|En 18 segundos no llega ni a la mitad del circuito. Para una carrera, nuestro programa es mucho mejor." },
      { id: 's6', k: 'robo', t: "Compte: frenar no és instantani|Cuidado: frenar no es instantáneo", x: "Amb «per sempre», el robot atura a la ratlla… i torna a arrencar.|Con «para siempre», el robot para en la raya… y vuelve a arrancar.",
        robo: { w: { ...CA, goal: CA_GOAL, time: 22 }, prog: 'forever{ if:L=1&&R=1{ stop:all } else{ if:L=1{ run:L,fwd,40 run:R,fwd,200 } else{ if:R=1{ run:L,fwd,200 run:R,fwd,40 } else{ run:all,fwd,200 } } } }' },
        nota: "Demana una predicció abans. Per la inèrcia, llisca un parell de centímetres i deixa de veure la ratlla: el «per sempre» torna a seguir la línia.|Pide una predicción antes. Por la inercia, se desliza un par de centímetros y deja de ver la raya: el «para siempre» vuelve a seguir la línea." },
      { id: 's7', k: 'robo', t: "El temps a la pantalla|El tiempo en la pantalla", x: "En arribar: segons = temps ÷ 1000 i mostra el número.|Al llegar: segundos = tiempo ÷ 1000 y muestra el número.",
        robo: { w: { ...CA, goal: CA_GOAL, time: 20 }, prog: CURSA(200, 40, 200).replace('stop:all }', 'stop:all calc:s,t,/,1000 num:$s }'), varNames: { s: 'segons|segundos' } },
        code: "let segons = Math.idiv(input.runningTime(), 1000)\nbasic.showNumber(segons)",
        nota: "Explica que la micro:bit compta mil·lisegons des que s'encén. Al robot real, si l'encenen just a la sortida, el número és el temps de la volta.|Explica que la micro:bit cuenta milisegundos desde que se enciende. En el robot real, si lo encienden justo en la salida, el número es el tiempo de la vuelta." },
      { id: 's8', k: 'activitat', t: "El circuit de llapis|El circuito de lápiz", timer: 8, punts: ["Repassa el circuit a poc a poc, normal i molt de pressa.|Repasa el circuito despacio, normal y muy deprisa.", "El company/a cronometra i compta les sortides.|El compañero/a cronometra y cuenta las salidas.", "Omple la taula.|Rellena la tabla.", "Quina és la millor velocitat de cursa?|¿Cuál es la mejor velocidad de carrera?"],
        nota: "Proposa la regla de la penalització (3 segons per sortida): sovint guanya la velocitat normal, no la màxima.|Propón la regla de la penalización (3 segundos por salida): a menudo gana la velocidad normal, no la máxima." },
      { id: 's9', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 10, punts: ["Obre la sessió «Projecte: la cursa contrarellotge».|Abre la sesión «Proyecto: la carrera contrarreloj».", "Mira les demos de «Descobreix».|Mira las demos de «Descubre».", "Fes la volta de reconeixement: primer segur!|Haz la vuelta de reconocimiento: ¡primero seguro!"],
        nota: "Al pas del circuit de llapis, que toquin «Ho hem fet!».|En el paso del circuito de lápiz, que toquen «¡Lo hemos hecho!»." },
      { id: 's10', k: 'repte', t: "Contra el rellotge|Contra el reloj", timer: 6, punts: ["Menys de 18 s, als dos circuits|Menos de 18 s, en los dos circuitos", "Bat el rècord: menys de 13 s al moll|Bate el récord: menos de 13 s en el muelle"],
        nota: "Que apuntin cada intent a la fitxa: velocitat de les rectes, velocitat de la roda de dins i temps.|Que apunten cada intento en la ficha: velocidad de las rectas, velocidad de la rueda de dentro y tiempo." },
      { id: 's11', k: 'activitat', t: "La cursa de veritat|La carrera de verdad", timer: 15, punts: ["Volta de prova a velocitat 150.|Vuelta de prueba a velocidad 150.", "Tres intents oficials; abans de cada un, un sol canvi.|Tres intentos oficiales; antes de cada uno, un solo cambio.", "Si surt de la línia, l'intent no compta.|Si se sale de la línea, el intento no cuenta.", "Apunteu el millor temps a la pissarra.|Apuntad el mejor tiempo en la pizarra."],
        code: "Maqueen_V5.I2CInit()\nlet segons = 0\nwhile (!(Maqueen_V5.readPatrol(Maqueen_V5.Patrol.L) == 1 && Maqueen_V5.readPatrol(Maqueen_V5.Patrol.R) == 1)) {\n    if (Maqueen_V5.readPatrol(Maqueen_V5.Patrol.L) == 1) {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 40)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 150)\n    } else if (Maqueen_V5.readPatrol(Maqueen_V5.Patrol.R) == 1) {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 150)\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 40)\n    } else {\n        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 150)\n    }\n}\nMaqueen_V5.motorStop(Maqueen_V5.Motors.All)\nsegons = Math.idiv(input.runningTime(), 1000)\nbasic.showNumber(segons)",
        nota: "El robot surt just després de la ratlla de meta, perquè no s'aturi en arrencar. Encendre'l a la sortida fa que el número de la pantalla sigui el temps de la volta.|El robot sale justo después de la raya de meta, para que no se pare al arrancar. Encenderlo en la salida hace que el número de la pantalla sea el tiempo de la vuelta." },
      { id: 's12', k: 'concepte', t: "El circuit i la seguretat|El circuito y la seguridad", punts: ["Cinta negra de 2 cm sobre fons blanc, corbes de 26 cm de radi.|Cinta negra de 2 cm sobre fondo blanco, curvas de 26 cm de radio.", "Ratlla de meta de 10 cm que travessa la línia.|Raya de meta de 10 cm que atraviesa la línea.", "El circuit, a terra; mans fora durant la volta.|El circuito, en el suelo; manos fuera durante la vuelta.", "Només el pilot encén i agafa el robot.|Solo el piloto enciende y coge el robot."],
        nota: "Si el robot confon un revolt amb la meta, les corbes són massa tancades o la cinta fa angles: allisa-les.|Si el robot confunde una curva con la meta, las curvas son demasiado cerradas o la cinta hace ángulos: alísalas." },
      { id: 's13', k: 'activitat', t: "Crea: la cursa del port|Crea: la carrera del puerto", timer: 6, x: "5 punts de control, aturat a la meta en menys de 20 s i el temps a la pantalla.|5 puntos de control, parado en la meta en menos de 20 s y el tiempo en la pantalla.",
        nota: "Qui acabi pot afegir llums o una melodia de victòria, i intentar baixar el seu rècord amb el cicle de millora.|Quien termine puede añadir luces o una melodía de victoria, e intentar bajar su récord con el ciclo de mejora." },
      { id: 's14', k: 'resum', t: "La Setmana de les Missions|La Semana de las Misiones", punts: ["Aspirador: estratègia i variable de memòria.|Aspirador: estrategia y variable de memoria.", "Sumo: la vora primer, després el rival.|Sumo: el borde primero, después el rival.", "Rescat: empènyer recte i treballar per fases.|Rescate: empujar recto y trabajar por fases.", "Cursa: seguir fins a la meta i millorar amb dades.|Carrera: seguir hasta la meta y mejorar con datos."],
        nota: "Anuncia la unitat 8: cada alumne/a dissenyarà la seva pròpia missió.|Anuncia la unidad 8: cada alumno/a diseñará su propia misión." },
      { id: 's15', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què «L = 1 i R = 1» i no «o»?|¿Por qué «L = 1 y R = 1» y no «o»?", "Una millora que has provat i què ha passat.|Una mejora que has probado y qué ha pasado."],
        nota: "Felicita tots els equips: el millor temps és important, però encara més haver-lo millorat amb dades.|Felicita a todos los equipos: el mejor tiempo es importante, pero todavía más haberlo mejorado con datos." }
    ],
    print: [
      { id: 'p1', t: "El circuit de llapis i la taula de temps|El circuito de lápiz y la tabla de tiempos", k: 'fitxa',
        intro: "Dibuixa amb retolador un circuit tancat amb dues corbes tancades i una de suau. Repassa'l amb el llapis tres vegades mentre un company/a cronometra.|Dibuja con rotulador un circuito cerrado con dos curvas cerradas y una suave. Repásalo con el lápiz tres veces mientras un compañero/a cronometra.",
        items: [
          { q: "A poc a poc: temps ____ s · sortides ____ · A velocitat normal: temps ____ s · sortides ____ · Molt de pressa: temps ____ s · sortides ____|Despacio: tiempo ____ s · salidas ____ · A velocidad normal: tiempo ____ s · salidas ____ · Muy deprisa: tiempo ____ s · salidas ____", sol: "Normalment, com més de pressa, menys temps però més sortides.|Normalmente, cuanto más deprisa, menos tiempo pero más salidas." },
          { q: "Si cada sortida suma 3 segons, quina velocitat guanya?|Si cada salida suma 3 segundos, ¿qué velocidad gana?", sol: "Sovint la normal: és ràpida i gairebé no surt.|A menudo la normal: es rápida y casi no se sale." },
          { q: "Al simulador i al robot: velocitat ____ → temps ____ s · velocitat ____ → temps ____ s · velocitat ____ → temps ____ s|En el simulador y en el robot: velocidad ____ → tiempo ____ s · velocidad ____ → tiempo ____ s · velocidad ____ → tiempo ____ s", sol: "Al circuit del moll del simulador: 150 → uns 21 s, 200 → uns 15 s, 255 → uns 11 s.|En el circuito del muelle del simulador: 150 → unos 21 s, 200 → unos 15 s, 255 → unos 11 s." }
        ] },
      { id: 'p2', t: "El circuit del moll a escala|El circuito del muelle a escala", k: 'pista',
        intro: "A terra o sobre paper blanc d'uns 140 × 80 cm. Enganxeu la cinta negra (2 cm) seguint el rectangle de cantonades arrodonides i la ratlla de meta. Els cercles numerats són els punts de control.|En el suelo o sobre papel blanco de unos 140 × 80 cm. Pegad la cinta negra (2 cm) siguiendo el rectángulo de esquinas redondeadas y la raya de meta. Los círculos numerados son los puntos de control.",
        w: { ...CA, goal: CA_GOAL },
        items: [
          { q: "Rectangle de 122 × 52 cm; cantonades amb un radi de 26 cm (feu servir un cordill de 26 cm).|Rectángulo de 122 × 52 cm; esquinas con un radio de 26 cm (usad un cordel de 26 cm)." },
          { q: "Ratlla de meta: 10 cm, travessant la recta de dalt a 31 cm de la cantonada esquerra. El robot surt just a la dreta de la ratlla.|Raya de meta: 10 cm, atravesando la recta de arriba a 31 cm de la esquina izquierda. El robot sale justo a la derecha de la raya." }
        ] }
    ]
  }
  };
})());
