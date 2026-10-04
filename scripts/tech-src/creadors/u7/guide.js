/* Tech Creadors · unitat 7 «Atzar i dificultat» · guia del professorat (60 minuts per sessió)
   Material propi de Numi. Mateix esquema que TGUIDE['r1-1']: obj, comp, vocab, mat, plan (60 min), errors, diff, aval,
   casa, slides (amb demos de l'escenari: media { k: 'stage' }) i print. */
Object.assign(TGUIDE, (() => {
  const MET = (x = 0, y = 170) => ({ id: 'meteorit', art: 'meteorit', x, y, rot: 'none' });
  const NAU = (x = 0, y = -140) => ({ id: 'nau', art: 'nau', x, y, rot: 'none' });
  const EST = (x = 0, y = 0, more = {}) => ({ id: 'estrella', art: 'estrella', x, y, ...more });
  const VN = { numero: 'número|número', punts: 'punts|puntos', vides: 'vides|vidas', velocitat: 'velocitat|velocidad', caiguts: 'caiguts|caídos' };
  const FALL = n => `gotorand sety:170 until:y<-160{ move:${n} }`;
  const RAIN = (w, v) => `@meteorit flag{ hide point:180 forever{ clone wait:${w} } } clone{ gotorand sety:170 show until:y<-160{ move:${v} } delclone }`;
  const GAME = `@nau flag{ goto:0,-140 setv:vides,3 point:90 forever{ move:5 bounce if:$vides<1{ say:"Fi!|¡Fin!" stop:all } } } @meteorit flag{ hide setv:punts,0 setv:velocitat,4 point:180 forever{ clone wait:0.6 if:$velocitat<12{ chv:velocitat,1 } } } clone{ gotorand sety:170 show until:y<-160{ move:$velocitat if:touch:nau{ chv:vides,-1 sound:xoc delclone } } chv:punts,1 delclone }`;
  const GW = { bg: 'espai', sprites: [NAU(), MET()], vars: ['punts', 'vides', 'velocitat'] };

  /* ---------- Sessió 1 · Nombres a l'atzar ---------- */
  const G1 = {
    obj: [
      "L'alumne/a explica amb les seves paraules què vol dir que una cosa passi a l'atzar i en dona exemples de la vida diària.|El alumno/a explica con sus palabras qué quiere decir que algo pase al azar y da ejemplos de la vida diaria.",
      "L'alumne/a fa servir el valor «atzar 1-10» per guardar un número en una variable i decidir amb un «si… si no».|El alumno/a usa el valor «azar 1-10» para guardar un número en una variable y decidir con un «si… si no».",
      "L'alumne/a fa servir «ves a un lloc a l'atzar» i «posa y a 170» perquè un personatge surti per dalt en una x a l'atzar.|El alumno/a usa «ve a un sitio al azar» y «pon y a 170» para que un personaje salga por arriba en una x al azar.",
      "L'alumne/a sap que, si vol un valor nou a cada volta, el bloc amb l'atzar ha d'anar dins del bucle.|El alumno/a sabe que, si quiere un valor nuevo en cada vuelta, el bloque con el azar tiene que ir dentro del bucle."
    ],
    comp: [
      "Competència digital (CD5): crear animacions interactives amb programació per blocs|Competencia digital (CD5): crear animaciones interactivas con programación por bloques",
      "Pensament computacional: aleatorietat, variables i condicions|Pensamiento computacional: aleatoriedad, variables y condiciones",
      "Matemàtiques (estadística i probabilitat): experiments d'atzar, freqüències i coordenades|Matemáticas (estadística y probabilidad): experimentos de azar, frecuencias y coordenadas",
      "Treball en equip: repartir papers i registrar resultats|Trabajo en equipo: repartir papeles y registrar resultados"
    ],
    vocab: [
      ["Atzar|Azar", "Quan no es pot saber abans què passarà, com quan tires un dau.|Cuando no se puede saber antes qué pasará, como cuando tiras un dado."],
      ["Número a l'atzar|Número al azar", "Un número que tria l'ordinador sense que sapiguem quin serà (aquí, de l'1 al 10).|Un número que elige el ordenador sin que sepamos cuál será (aquí, del 1 al 10)."],
      ["Lloc a l'atzar|Sitio al azar", "Una x i una y que tria l'ordinador dins de l'escenari.|Una x y una y que elige el ordenador dentro del escenario."],
      ["Probabilitat|Probabilidad", "Com de fàcil és que passi una cosa: cara i creu tenen la mateixa.|Lo fácil que es que pase algo: cara y cruz tienen la misma."],
      ["Freqüència|Frecuencia", "Quantes vegades ha sortit un resultat quan ho has provat moltes vegades.|Cuántas veces ha salido un resultado cuando lo has probado muchas veces."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Nombres a l'atzar»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Números al azar»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un dau per grup de 3 o 4 (o papers numerats de l'1 al 6 dins una bossa)|Un dado por grupo de 3 o 4 (o papeles numerados del 1 al 6 dentro de una bolsa)",
        "Una fitxa o un botó per grup, que farà de nau|Una ficha o un botón por grupo, que hará de nave"
      ],
      imprimir: ["La pluja de meteorits amb daus (una graella per grup)|La lluvia de meteoritos con dados (una cuadrícula por grupo)", "Fitxa: l'atzar a l'escenari (una per alumne/a)|Ficha: el azar en el escenario (una por alumno/a)"],
      prep: [
        "Imprimir una graella per grup i una fitxa per alumne/a (la fitxa serveix per als qui acabin abans o per a casa).|Imprimir una cuadrícula por grupo y una ficha por alumno/a (la ficha sirve para quienes acaben antes o para casa).",
        "Preparar a la pissarra una taula gran amb sis columnes (1 a 6) per sumar els resultats de tots els grups.|Preparar en la pizarra una tabla grande con seis columnas (1 a 6) para sumar los resultados de todos los grupos.",
        "Provar abans les demos de les diapositives 7 i 8 (l'estrella i el meteorit) per saber com es veuen.|Probar antes las demos de las diapositivas 7 y 8 (la estrella y el meteorito) para saber cómo se ven.",
        "Deixar els ordinadors engegats amb la sessió de cada alumne/a iniciada.|Dejar los ordenadores encendidos con la sesión de cada alumno/a iniciada."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: la Nit de les Estrelles|Bienvenida: la Noche de las Estrellas", fase: 'inici',
        fa: "Presenta la nova unitat: l'observatori de l'illa ens demana un videojoc per a la Nit de les Estrelles. Pregunta què passaria si els meteorits caiguessin sempre pel mateix lloc i recull respostes. Fes un repàs ràpid de variables i coordenades amb la diapositiva 3.|Presenta la nueva unidad: el observatorio de la isla nos pide un videojuego para la Noche de las Estrellas. Pregunta qué pasaría si los meteoritos cayeran siempre por el mismo sitio y recoge respuestas. Haz un repaso rápido de variables y coordenadas con la diapositiva 3.",
        diu: ["Si un videojoc fa sempre exactament el mateix, què passa a la tercera partida?|Si un videojuego hace siempre exactamente lo mismo, ¿qué pasa en la tercera partida?",
          "Qui recorda on és x = 200 a l'escenari?|¿Quién recuerda dónde está x = 200 en el escenario?",
          "Avui aprendrem a fer que l'ordinador ens sorprengui.|Hoy aprenderemos a hacer que el ordenador nos sorprenda."],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és l'atzar? Dos blocs nous|¿Qué es el azar? Dos bloques nuevos", fase: 'teoria',
        fa: "Tira un dau davant la classe i demana que endevinin el número abans: ningú no pot saber-ho. Explica el valor «atzar 1-10» amb l'animació i després «ves a un lloc a l'atzar» amb la demo de l'estrella. Amb la demo del meteorit, fes notar l'ordre: primer el lloc a l'atzar i després «posa y a 170». Acaba amb el «compte!»: l'atzar dins del bucle.|Tira un dado delante de la clase y pide que adivinen el número antes: nadie puede saberlo. Explica el valor «azar 1-10» con la animación y después «ve a un sitio al azar» con la demo de la estrella. Con la demo del meteorito, haz notar el orden: primero el sitio al azar y después «pon y a 170». Acaba con el «¡cuidado!»: el azar dentro del bucle.",
        diu: ["Qui sap quin número sortirà? Ningú! Això és l'atzar.|¿Quién sabe qué número saldrá? ¡Nadie! Eso es el azar.",
          "On sortirà l'estrella la propera vegada? Assenyaleu-ho… i mirem qui l'encerta.|¿Dónde saldrá la estrella la próxima vez? Señaladlo… y miremos quién lo acierta.",
          "Si «ves a un lloc a l'atzar» anés després de «posa y a 170», on podria sortir el meteorit?|Si «ve a un sitio al azar» fuera después de «pon y a 170», ¿dónde podría salir el meteorito?"],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", fase: 'desconnectat',
        fa: "Grups de 3 o 4 amb un dau, una fitxa (la nau) i la graella. Papers: el llançador/a fa d'ordinador i tira el dau (el número és la columna on cau el meteorit), el pilot/a posa la nau en una columna abans de cada tirada i l'anotador/a marca una creu a la fila de la ronda. Si el meteorit cau a la columna de la nau, el pilot perd una vida. Després de 8 rondes, roten els papers. Al final, sumeu a la pissarra quantes vegades ha caigut a cada columna entre tots els grups.|Grupos de 3 o 4 con un dado, una ficha (la nave) y la cuadrícula. Papeles: el lanzador/a hace de ordenador y tira el dado (el número es la columna donde cae el meteorito), el piloto/a pone la nave en una columna antes de cada tirada y el anotador/a marca una cruz en la fila de la ronda. Si el meteorito cae en la columna de la nave, el piloto pierde una vida. Después de 8 rondas, rotan los papeles. Al final, sumad en la pizarra cuántas veces ha caído en cada columna entre todos los grupos.",
        diu: ["El pilot/a pot saber on caurà el proper meteorit? Per què?|¿El piloto/a puede saber dónde caerá el próximo meteorito? ¿Por qué?",
          "Ha caigut alguna vegada dues vegades seguides a la mateixa columna? Pot passar!|¿Ha caído alguna vez dos veces seguidas en la misma columna? ¡Puede pasar!",
          "Si sumem tots els grups, totes les columnes en tenen uns quants: cap columna no és més «afortunada».|Si sumamos todos los grupos, todas las columnas tienen unos cuantos: ninguna columna es más «afortunada»."],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 amb papers que roten|Grupos de 3 o 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «El dau dels moviments», que toquin «Ara no» si no hi ha dau a l'aula: el faran a casa. A la cursa de naus, demana que expliquin amb paraules per què la nau de baix va a batzegades.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «El dado de los movimientos», que toquen «Ahora no» si no hay dado en el aula: lo harán en casa. En la carrera de naves, pide que expliquen con palabras por qué la nave de abajo va a trompicones.",
        diu: ["L'estrella torna mai al mateix lloc? Com ho sabries?|¿La estrella vuelve alguna vez al mismo sitio? ¿Cómo lo sabrías?",
          "Quin bloc fa que la nau de baix canviï de velocitat a cada pas?|¿Qué bloque hace que la nave de abajo cambie de velocidad a cada paso?",
          "Pot sortir un 12 amb «atzar 1-10»? I un 10?|¿Puede salir un 12 con «azar 1-10»? ¿Y un 10?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta del dau, «El dau dels moviments», l'estrella que salta, la cursa de naus i la pregunta del número 12.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta del dado, «El dado de los movimientos», la estrella que salta, la carrera de naves y la pregunta del número 12.", org: "Individual|Individual" },
      { min: 10, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els quatre reptes: l'estrella que salta per les quatre parts del cel, el número de la sort d'en Numi, cara o creu i el meteorit que ha de caure per llocs diferents. Als reptes amb tocs, recorda que «Comença» és per provar lliurement i «Comprova» fa els tocs sols.|Haced la pausa activa todos juntos. Después, los cuatro retos: la estrella que salta por las cuatro partes del cielo, el número de la suerte de Numi, cara o cruz y el meteorito que tiene que caer por sitios diferentes. En los retos con toques, recuerda que «Empieza» es para probar libremente y «Comprueba» hace los toques solos.",
        diu: ["Al cara o creu, quins números fan dir «Cara!»? Compta'ls: n'hi ha tants com de «Creu!»?|En el cara o cruz, ¿qué números hacen decir «¡Cara!»? Cuéntalos: ¿hay tantos como de «¡Cruz!»?",
          "El meteorit cau sempre pel mig. Quin bloc li falta, i on va?|El meteorito cae siempre por el centro. ¿Qué bloque le falta, y dónde va?",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva nit d'estrelles|Crea: mi noche de estrellas", fase: 'crea',
        fa: "Cada alumne/a crea la seva nit: almenys un personatge amb l'atzar dins d'un bucle. Quan la tinguin, la desen al portafoli i l'ensenyen al company/a del costat, que ha d'endevinar quin personatge fa servir l'atzar.|Cada alumno/a crea su noche: al menos un personaje con el azar dentro de un bucle. Cuando la tengan, la guardan en el portafolio y la enseñan al compañero/a de al lado, que tiene que adivinar qué personaje usa el azar.",
        diu: ["Quin dels teus personatges és el sorprenent? Per què?|¿Cuál de tus personajes es el sorprendente? ¿Por qué?",
          "Hi pots afegir un número a l'atzar, a més d'un lloc?|¿Puedes añadir un número al azar, además de un sitio?"],
        slides: ['s14'], app: "Pas «Crea»: La meva nit d'estrelles (es desa als projectes).|Paso «Crea»: Mi noche de estrellas (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals i com s'han sentit, i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales y cómo se han sentido, y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: ["Digues una cosa de la vida que passi a l'atzar.|Di una cosa de la vida que pase al azar.",
          "On ha d'anar el bloc amb l'atzar perquè canviï a cada volta?|¿Dónde tiene que ir el bloque con el azar para que cambie en cada vuelta?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Posa «posa y a 170» abans de «ves a un lloc a l'atzar» i el meteorit surt pel mig de l'escenari.|Pone «pon y a 170» antes de «ve a un sitio al azar» y el meteorito sale por el centro del escenario.",
        "Pregunta-li què canvia «ves a un lloc a l'atzar»: només la x, o també la y? Que provi els dos ordres i compari on surt.|Pregúntale qué cambia «ve a un sitio al azar»: ¿solo la x, o también la y? Que pruebe los dos órdenes y compare dónde sale."],
      ["Tria el número a l'atzar una sola vegada, abans del bucle, i s'estranya que no canviï.|Elige el número al azar una sola vez, antes del bucle, y se extraña de que no cambie.",
        "Que segueixi el programa amb el dit: quantes vegades passa pel bloc de l'atzar? Torna a mirar l'animació del «compte!».|Que siga el programa con el dedo: ¿cuántas veces pasa por el bloque del azar? Vuelve a mirar la animación del «¡cuidado!»."],
      ["Al «digues», escriu la paraula «número» en lloc de triar la variable, i en Numi diu «número».|En el «di», escribe la palabra «número» en lugar de elegir la variable, y Numi dice «número».",
        "Fes-li notar que al tocar el text del «digues» hi ha un botó amb la variable: el text entre cometes es diu tal qual; la variable diu el que guarda.|Hazle notar que al tocar el texto del «di» hay un botón con la variable: el texto entre comillas se dice tal cual; la variable dice lo que guarda."],
      ["Al cara o creu, posa dos «si» separats i de vegades diu les dues coses o cap.|En el cara o cruz, pone dos «si» separados y a veces dice las dos cosas o ninguna.",
        "Pregunta: hi ha algun número que no sigui ni més gran que 5 ni el contrari? Ensenya-li el botó «Afegeix «si no»» del bloc «si».|Pregunta: ¿hay algún número que no sea ni mayor que 5 ni lo contrario? Enséñale el botón «Añade «si no»» del bloque «si»."],
      ["Creu que l'atzar «s'equivoca» quan surt el mateix número dues vegades seguides.|Cree que el azar «se equivoca» cuando sale el mismo número dos veces seguidas.",
        "Recorda la pluja de daus: també hi va haver repeticions. Amb l'atzar, repetir és normal; el que no es pot és endevinar-ho.|Recuerda la lluvia de dados: también hubo repeticiones. Con el azar, repetir es normal; lo que no se puede es adivinarlo."]
    ],
    diff: {
      mes: "Afegir a la nit d'estrelles un personatge que, en tocar-lo, posi un número a l'atzar i, si és més gran que 7, canviï el fons. Després, comptar en 20 tocs quantes vegades ha canviat i comparar-ho amb el company/a.|Añadir a la noche de estrellas un personaje que, al tocarlo, ponga un número al azar y, si es mayor que 7, cambie el fondo. Después, contar en 20 toques cuántas veces ha cambiado y compararlo con el compañero/a.",
      menys: "Fer primer els reptes amb el professor/a al costat dient en veu alta cada bloc. A l'activitat de daus, fer de llançador/a (només tirar i dir el número). Al meteorit, donar-li la pista de l'ordre: «primer el lloc, després la y».|Hacer primero los retos con el profesor/a al lado diciendo en voz alta cada bloque. En la actividad de dados, hacer de lanzador/a (solo tirar y decir el número). En el meteorito, darle la pista del orden: «primero el sitio, después la y»."
    },
    aval: {
      ticket: ["Digues una cosa de la vida que passi a l'atzar i una que no.|Di una cosa de la vida que pase al azar y una que no.",
        "Quins dos blocs fan que el meteorit surti per dalt, cada vegada en un lloc diferent?|¿Qué dos bloques hacen que el meteorito salga por arriba, cada vez en un sitio diferente?"],
      rubric: [
        ["Concepte d'atzar|Concepto de azar", "Explica que no es pot saber abans i dona exemples propis (dau, moneda…).|Explica que no se puede saber antes y da ejemplos propios (dado, moneda…).", "Reconeix l'atzar en un exemple, però encara no l'explica.|Reconoce el azar en un ejemplo, pero todavía no lo explica."],
        ["Número a l'atzar|Número al azar", "Guarda «atzar 1-10» en una variable, la diu i la fa servir en un «si… si no».|Guarda «azar 1-10» en una variable, la dice y la usa en un «si… si no».", "Posa l'atzar en un bloc, però no el guarda ni el fa servir per decidir.|Pone el azar en un bloque, pero no lo guarda ni lo usa para decidir."],
        ["Lloc a l'atzar|Sitio al azar", "Fa sortir el meteorit per dalt en una x a l'atzar, amb els blocs en l'ordre bo i dins el bucle.|Hace salir el meteorito por arriba en una x al azar, con los bloques en el orden correcto y dentro del bucle.", "Fa servir «ves a un lloc a l'atzar», però s'equivoca d'ordre o el posa fora del bucle.|Usa «ve a un sitio al azar», pero se equivoca de orden o lo pone fuera del bucle."]
      ]
    },
    casa: "A casa, amb un dau i algú de la família, feu «El dau dels moviments»: cada número és un moviment del cos. Abans de tirar, intenteu endevinar el número i apunteu quantes vegades l'encerteu.|En casa, con un dado y alguien de la familia, haced «El dado de los movimientos»: cada número es un movimiento del cuerpo. Antes de tirar, intentad adivinar el número y apuntad cuántas veces lo acertáis.",
    slides: [
      { id: 's1', k: 'portada', t: "Nombres a l'atzar|Números al azar", x: "Unitat 7 · Atzar i dificultat. Avui farem que l'ordinador ens sorprengui.|Unidad 7 · Azar y dificultad. Hoy haremos que el ordenador nos sorprenda.",
        nota: "Presenta l'objectiu: al final, cada alumne/a tindrà un cel on les coses no passen sempre igual.|Presenta el objetivo: al final, cada alumno/a tendrá un cielo donde las cosas no pasan siempre igual." },
      { id: 's2', k: 'pregunta', t: "I si passés sempre el mateix?|¿Y si pasara siempre lo mismo?", x: "Si els meteorits d'un videojoc cauen sempre pel mateix lloc, què passa a la tercera partida?|Si los meteoritos de un videojuego caen siempre por el mismo sitio, ¿qué pasa en la tercera partida?",
        nota: "Recull respostes: ja te l'aprens, és avorrit, és massa fàcil… Torna-hi al final de la teoria.|Recoge respuestas: ya te lo aprendes, es aburrido, es demasiado fácil… Vuelve a ello al final de la teoría." },
      { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["Les variables guarden números: punts, vides…|Las variables guardan números: puntos, vidas…", "«Suma a punts 1» afegeix; «posa punts a 0» canvia.|«Suma a puntos 1» añade; «pon puntos a 0» cambia.", "L'escenari: x de -240 a 240, y de -180 a 180.|El escenario: x de -240 a 240, y de -180 a 180."],
        nota: "Dues preguntes ràpides a mà alçada; avui farem servir variables i coordenades.|Dos preguntas rápidas a mano alzada; hoy usaremos variables y coordenadas." },
      { id: 's4', k: 'concepte', t: "La Nit de les Estrelles|La Noche de las Estrellas", punts: ["L'observatori de l'illa fa una festa per mirar el cel.|El observatorio de la isla hace una fiesta para mirar el cielo.", "Ens demanen un videojoc: esquivar meteorits amb una nau.|Nos piden un videojuego: esquivar meteoritos con una nave.", "Aquesta unitat el construirem peça a peça.|En esta unidad lo construiremos pieza a pieza."],
        nota: "Explica que en quatre sessions faran el videojoc «Esquiva els meteorits»: avui, la peça de l'atzar.|Explica que en cuatro sesiones harán el videojuego «Esquiva los meteoritos»: hoy, la pieza del azar." },
      { id: 's5', k: 'anim', t: "Què és l'atzar?|¿Qué es el azar?", anim: 'g7dau', x: "Una cosa és a l'atzar quan ningú no pot saber abans com acabarà.|Algo es al azar cuando nadie puede saber antes cómo acabará.",
        nota: "Tira un dau de veritat i fes que endevinin el número abans. Demana més exemples: el sorteig d'un equip, una carta…|Tira un dado de verdad y haz que adivinen el número antes. Pide más ejemplos: el sorteo de un equipo, una carta…" },
      { id: 's6', k: 'anim', t: "El valor «atzar 1-10»|El valor «azar 1-10»", anim: 'g7num', x: "Cada vegada que el programa arriba al bloc, tria un número nou de l'1 al 10.|Cada vez que el programa llega al bloque, elige un número nuevo del 1 al 10.",
        nota: "Remarca que l'1 i el 10 també poden sortir, i que el número es pot guardar en una variable.|Remarca que el 1 y el 10 también pueden salir, y que el número se puede guardar en una variable." },
      { id: 's7', k: 'media', t: "Ves a un lloc a l'atzar|Ve a un sitio al azar", x: "L'estrella salta a una x i una y que no sabem.|La estrella salta a una x y una y que no sabemos.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ forever{ gotorand wait:0.8 } }', time: 8 },
        nota: "Abans de cada salt, que tothom assenyali on creu que anirà. Qui l'encerta? Gairebé ningú: és atzar.|Antes de cada salto, que todos señalen dónde creen que irá. ¿Quién lo acierta? Casi nadie: es azar." },
      { id: 's8', k: 'media', t: "Per dalt, però a l'atzar|Por arriba, pero al azar", x: "Primer «ves a un lloc a l'atzar», després «posa y a 170» i avall!|Primero «ve a un sitio al azar», después «pon y a 170» ¡y abajo!",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()] }, prog: `@meteorit flag{ point:180 forever{ ${FALL(8)} } }`, time: 9 },
        nota: "Pregunta què passaria si canviéssim l'ordre dels dos blocs. Resposta: la y també quedaria a l'atzar.|Pregunta qué pasaría si cambiáramos el orden de los dos bloques. Respuesta: la y también quedaría al azar." },
      { id: 's9', k: 'anim', t: "Compte: dins del bucle!|Cuidado: ¡dentro del bucle!", anim: 'g7once', x: "Si tries el número abans del bucle, ja no canvia. Si el vols nou cada vegada, va dins.|Si eliges el número antes del bucle, ya no cambia. Si lo quieres nuevo cada vez, va dentro.",
        nota: "Compara-ho amb tirar el dau una sola vegada al principi del dia i fer-lo servir tot el dia.|Compáralo con tirar el dado una sola vez al principio del día y usarlo todo el día." },
      { id: 's10', k: 'activitat', t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", timer: 12, punts: ["Llançador/a: tira el dau (és la columna on cau el meteorit).|Lanzador/a: tira el dado (es la columna donde cae el meteorito).", "Pilot/a: posa la nau en una columna ABANS de tirar.|Piloto/a: pone la nave en una columna ANTES de tirar.", "Anotador/a: fa una creu a la columna que ha sortit.|Anotador/a: hace una cruz en la columna que ha salido.", "Si cau damunt la nau: una vida menys. Cada 8 rondes, canvieu.|Si cae encima de la nave: una vida menos. Cada 8 rondas, cambiad."],
        nota: "Passeja pels grups i pregunta als pilots com trien la columna. Al final, suma a la pissarra les creus de cada columna.|Pasea por los grupos y pregunta a los pilotos cómo eligen la columna. Al final, suma en la pizarra las cruces de cada columna." },
      { id: 's11', k: 'pregunta', t: "Què hem descobert?|¿Qué hemos descubierto?", punts: ["Algú ha pogut endevinar on cauria?|¿Alguien ha podido adivinar dónde caería?", "Hi ha hagut repeticions seguides?|¿Ha habido repeticiones seguidas?", "Sumant tots els grups, quina columna en té més? Per poc?|Sumando todos los grupos, ¿qué columna tiene más? ¿Por poco?"],
        nota: "Conclusió: no es pot endevinar cada tirada, però amb moltes tirades totes les columnes en tenen. Així funcionaran els meteorits.|Conclusión: no se puede adivinar cada tirada, pero con muchas tiradas todas las columnas tienen. Así funcionarán los meteoritos." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 15, punts: ["Obre «Nombres a l'atzar».|Abre «Números al azar».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Mira l'estrella i la cursa de naus.|Mira la estrella y la carrera de naves.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«El dau dels moviments» es pot deixar per a casa amb «Ara no».|«El dado de los movimientos» se puede dejar para casa con «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de l'atzar|Retos del azar", timer: 10, punts: ["1. L'estrella que salta per tot el cel|1. La estrella que salta por todo el cielo", "2. El número de la sort d'en Numi|2. El número de la suerte de Numi", "3. Cara o creu|3. Cara o cruz", "4. Meteorits per l'esquerra i per la dreta|4. Meteoritos por la izquierda y por la derecha"],
        nota: "Als reptes de tocar, «Comprova» fa els tocs sols. Si algú s'encalla al cara o creu, pregunta quins números són més grans que 5.|En los retos de tocar, «Comprueba» hace los toques solos. Si alguien se atasca en el cara o cruz, pregunta qué números son mayores que 5." },
      { id: 's14', k: 'activitat', t: "Crea: la meva nit d'estrelles|Crea: mi noche de estrellas", timer: 5, x: "Almenys un personatge amb l'atzar dins d'un bucle. Després, el company/a endevina quin és.|Al menos un personaje con el azar dentro de un bucle. Después, el compañero/a adivina cuál es.",
        nota: "Celebra les idees diferents: estrelles que salten, naus amb velocitat a l'atzar, frases que canvien…|Celebra las ideas diferentes: estrellas que saltan, naves con velocidad al azar, frases que cambian…" },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["L'atzar: no se sap abans què sortirà.|El azar: no se sabe antes qué saldrá.", "«Atzar 1-10» tria un número cada vegada que s'hi arriba.|«Azar 1-10» elige un número cada vez que se llega a él.", "«Ves a un lloc a l'atzar» + «posa y a 170»: per dalt, a l'atzar.|«Ve a un sitio al azar» + «pon y a 170»: por arriba, al azar."],
        nota: "Torna a la pregunta del principi: ara ja sabem com fer que no passi sempre el mateix.|Vuelve a la pregunta del principio: ahora ya sabemos cómo hacer que no pase siempre lo mismo." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Una cosa que passa a l'atzar i una que no.|Una cosa que pasa al azar y una que no.", "Quins dos blocs fan sortir el meteorit per dalt a l'atzar?|¿Qué dos bloques hacen salir el meteorito por arriba al azar?"],
        nota: "Anota qui confon l'ordre dels blocs: ho repassareu al «Recorda» de la sessió següent.|Anota quién confunde el orden de los bloques: lo repasaréis en el «Recuerda» de la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", k: 'graella', w: 6, h: 8,
        intro: "Una graella per grup. Cada columna és un número del dau (1 a 6, d'esquerra a dreta) i cada fila, una ronda. Abans de tirar, el pilot/a dibuixa un cercle on posa la nau (fila de la ronda). Després, l'anotador/a fa una creu a la columna que ha sortit. Si la creu cau al cercle, una vida menys!|Una cuadrícula por grupo. Cada columna es un número del dado (1 a 6, de izquierda a derecha) y cada fila, una ronda. Antes de tirar, el piloto/a dibuja un círculo donde pone la nave (fila de la ronda). Después, el anotador/a hace una cruz en la columna que ha salido. Si la cruz cae en el círculo, ¡una vida menos!",
        legend: [['1-6', 'Columna = número del dau|Columna = número del dado'], ['○', 'On el pilot/a posa la nau|Donde el piloto/a pone la nave'], ['✕', 'On cau el meteorit|Donde cae el meteorito'], ['♥', 'Vides: comenceu amb 3|Vidas: empezad con 3']],
        items: [{ q: "Quantes vegades ha caigut el meteorit a cada columna? 1: ___ 2: ___ 3: ___ 4: ___ 5: ___ 6: ___|¿Cuántas veces ha caído el meteorito en cada columna? 1: ___ 2: ___ 3: ___ 4: ___ 5: ___ 6: ___" },
          { q: "Has pogut endevinar on cauria? Per què creus que passa això?|¿Has podido adivinar dónde caería? ¿Por qué crees que pasa esto?", big: true }] },
      { id: 'p2', t: "L'atzar a l'escenari|El azar en el escenario", k: 'fitxa',
        intro: "Respon pensant en els blocs de l'escenari. Pots dibuixar els blocs com a l'app.|Responde pensando en los bloques del escenario. Puedes dibujar los bloques como en la app.",
        items: [
          { q: "Quin bloc porta un personatge a un lloc de l'escenari que no sabem?|¿Qué bloque lleva a un personaje a un sitio del escenario que no sabemos?", sol: "«Ves a un lloc a l'atzar».|«Ve a un sitio al azar»." },
          { q: "Escriu, en ordre, els dos blocs perquè un meteorit surti per dalt en un lloc a l'atzar.|Escribe, en orden, los dos bloques para que un meteorito salga por arriba en un sitio al azar.", sol: "1. Ves a un lloc a l'atzar. 2. Posa y a 170.|1. Ve a un sitio al azar. 2. Pon y a 170." },
          { q: "Amb «atzar 1-10», pot sortir el 0? I l'11? I el 10?|Con «azar 1-10», ¿puede salir el 0? ¿Y el 11? ¿Y el 10?", sol: "El 0 i l'11, no. El 10, sí: surten de l'1 al 10.|El 0 y el 11, no. El 10, sí: salen del 1 al 10." },
          { q: "Cara o creu: si tirada > 5 la moneda diu «Cara!». Quins números fan dir «Cara!»? Quants en fan dir «Creu!»?|Cara o cruz: si tirada > 5 la moneda dice «¡Cara!». ¿Qué números hacen decir «¡Cara!»? ¿Cuántos hacen decir «¡Cruz!»?", sol: "6, 7, 8, 9 i 10 diuen «Cara!». També 5 números (1 a 5) diuen «Creu!».|6, 7, 8, 9 y 10 dicen «¡Cara!». También 5 números (1 a 5) dicen «¡Cruz!»." }
        ] }
    ]
  };

  /* ---------- Sessió 2 · Clons ---------- */
  const G2 = {
    obj: [
      "L'alumne/a explica què és un clon i per què és útil quan calen molts personatges iguals.|El alumno/a explica qué es un clon y por qué es útil cuando hacen falta muchos personajes iguales.",
      "L'alumne/a fa clons amb «crea un clon de mi» dins d'un bucle i programa el guió «quan començo com a clon».|El alumno/a hace clones con «crea un clon de mí» dentro de un bucle y programa el guion «al empezar como clon».",
      "L'alumne/a construeix una fàbrica de clons: l'original amagat, cada clon al seu lloc a l'atzar i «mostra't».|El alumno/a construye una fábrica de clones: el original escondido, cada clon en su sitio al azar y «muéstrate».",
      "L'alumne/a esborra els clons que ja han fet la feina perquè l'escenari no s'ompli.|El alumno/a borra los clones que ya han hecho su trabajo para que el escenario no se llene."
    ],
    comp: [
      "Competència digital (CD5): crear animacions amb molts elements a partir d'un sol personatge programat|Competencia digital (CD5): crear animaciones con muchos elementos a partir de un solo personaje programado",
      "Pensament computacional: abstracció (un model, moltes còpies) i instruccions que segueix cada còpia|Pensamiento computacional: abstracción (un modelo, muchas copias) e instrucciones que sigue cada copia",
      "Matemàtiques: comptar i estimar quantitats, coordenades|Matemáticas: contar y estimar cantidades, coordenadas",
      "Comunicació oral: seguir i donar instruccions precises en grup|Comunicación oral: seguir y dar instrucciones precisas en grupo"
    ],
    vocab: [
      ["Clon|Clon", "Una còpia d'un personatge que el mateix personatge crea mentre funciona el programa.|Una copia de un personaje que el mismo personaje crea mientras funciona el programa."],
      ["Original|Original", "El personatge que fa els clons. Pot estar amagat i fer de fàbrica.|El personaje que hace los clones. Puede estar escondido y hacer de fábrica."],
      ["Guió del clon|Guion del clon", "«Quan començo com a clon»: el que fa cada clon quan neix.|«Al empezar como clon»: lo que hace cada clon cuando nace."],
      ["Esborrar un clon|Borrar un clon", "Treure de l'escenari un clon que ja no serveix.|Quitar del escenario un clon que ya no sirve."],
      ["Fàbrica|Fábrica", "Un personatge amagat que només fa clons, un darrere l'altre.|Un personaje escondido que solo hace clones, uno detrás de otro."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Clons»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Clones»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Un dau per a la fàbrica i sis papers grans numerats de l'1 al 6 enganxats al llarg d'una paret (els llocs del dau)|Un dado para la fábrica y seis papeles grandes numerados del 1 al 6 pegados a lo largo de una pared (los sitios del dado)",
        "Espai lliure davant de la pissarra, que farà de «terra» de l'escenari|Espacio libre delante de la pizarra, que hará de «suelo» del escenario"
      ],
      imprimir: ["Targetes del guió del clon (un paquet per a cada «clon» i una de fàbrica)|Tarjetas del guion del clon (un paquete para cada «clon» y una de fábrica)", "Fitxa: clons sobre paper (una per alumne/a)|Ficha: clones sobre papel (una por alumno/a)"],
      prep: [
        "Imprimir i retallar les targetes. Si es plastifiquen, serveixen per a altres anys.|Imprimir y recortar las tarjetas. Si se plastifican, sirven para otros años.",
        "Enganxar els sis papers numerats a la paret del fons, a l'alçada dels ulls.|Pegar los seis papeles numerados en la pared del fondo, a la altura de los ojos.",
        "Marcar amb cinta un rectangle petit davant la pissarra (hi caben 4 persones dretes): és l'escenari ple.|Marcar con cinta un rectángulo pequeño delante de la pizarra (caben 4 personas de pie): es el escenario lleno.",
        "Provar la demo de la pluja de meteorits (diapositiva 7) i la del «compte!» (diapositiva 9).|Probar la demo de la lluvia de meteoritos (diapositiva 7) y la del «¡cuidado!» (diapositiva 9)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: una pluja de molts meteorits|Bienvenida: una lluvia de muchos meteoritos", fase: 'inici',
        fa: "Recorda el meteorit de la sessió anterior i explica el nou encàrrec: una pluja amb molts meteorits. Pregunta com ho farien i deixa que proposin copiar el personatge vint vegades. Fes el repàs del «Recorda» amb la diapositiva 3.|Recuerda el meteorito de la sesión anterior y explica el nuevo encargo: una lluvia con muchos meteoritos. Pregunta cómo lo harían y deja que propongan copiar el personaje veinte veces. Haz el repaso del «Recuerda» con la diapositiva 3.",
        diu: ["Si volem vint meteorits, cal programar-ne vint? Quanta feina!|Si queremos veinte meteoritos, ¿hay que programar veinte? ¡Cuánto trabajo!",
          "I si volguéssim canviar la velocitat de tots? Hauríem de canviar vint programes…|¿Y si quisiéramos cambiar la velocidad de todos? Tendríamos que cambiar veinte programas…",
          "Avui aprendrem un truc: un sol personatge que en fa molts.|Hoy aprenderemos un truco: un solo personaje que hace muchos."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un clon?|¿Qué es un clon?", fase: 'teoria',
        fa: "Explica el clon amb un segell o amb una plantilla: el mateix dibuix, moltes vegades. Ensenya el guió «quan començo com a clon» amb la demo de les estrelles i la fàbrica amb la pluja de meteorits. Atura't al «compte!»: els clons neixen a sota de l'original i, si l'original està amagat, també neixen amagats. Acaba amb «esborra aquest clon».|Explica el clon con un sello o con una plantilla: el mismo dibujo, muchas veces. Enseña el guion «al empezar como clon» con la demo de las estrellas y la fábrica con la lluvia de meteoritos. Párate en el «¡cuidado!»: los clones nacen debajo del original y, si el original está escondido, también nacen escondidos. Acaba con «borra este clon».",
        diu: ["Quants personatges hi ha programats en aquesta pluja? Mireu els guions: només un!|¿Cuántos personajes hay programados en esta lluvia? Mirad los guiones: ¡solo uno!",
          "Per què la fàbrica s'amaga? I per què el clon fa «mostra't»?|¿Por qué la fábrica se esconde? ¿Y por qué el clon hace «muéstrate»?",
          "Què passaria si mai no esborréssim cap clon?|¿Qué pasaría si nunca borráramos ningún clon?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fàbrica de clons humana|La fábrica de clones humana", fase: 'desconnectat',
        fa: "Tu fas de fàbrica (amagat/ada darrere la taula). Cada pocs segons dius «clon!» i dones una targeta de guió a un alumne/a: aquest clon tira el dau, va al paper del número, s'aixeca (es mostra), camina a poc a poc fins a la pissarra (baixa) i torna a seure (s'esborra). Primera ronda: sense «m'esborro»: els clons s'amunteguen al rectangle de cinta fins que no hi cap ningú més i la fàbrica ha de parar. Segona ronda: amb «m'esborro»: la pluja no s'acaba mai. Si tens temps, fes una ronda en què et «mostres» tu (la fàbrica visible) i comenteu-ho.|Tú haces de fábrica (escondido/a detrás de la mesa). Cada pocos segundos dices «¡clon!» y das una tarjeta de guion a un alumno/a: este clon tira el dado, va al papel del número, se levanta (se muestra), camina despacio hasta la pizarra (baja) y vuelve a sentarse (se borra). Primera ronda: sin «me borro»: los clones se amontonan en el rectángulo de cinta hasta que no cabe nadie más y la fábrica tiene que parar. Segunda ronda: con «me borro»: la lluvia no se acaba nunca. Si tienes tiempo, haz una ronda en la que te «muestras» tú (la fábrica visible) y comentadlo.",
        diu: ["Tots els clons tenen la mateixa targeta. Fan tots exactament el mateix?|Todos los clones tienen la misma tarjeta. ¿Hacen todos exactamente lo mismo?",
          "El dau fa que cada clon vagi a un lloc diferent: això és l'atzar que vam veure!|El dado hace que cada clon vaya a un sitio diferente: ¡eso es el azar que vimos!",
          "Per què s'ha aturat la pluja a la primera ronda?|¿Por qué se ha parado la lluvia en la primera ronda?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup (la fàbrica és el professor/a)|Todo el grupo (la fábrica es el profesor/a)" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa des del «Recorda» fins a la pausa activa. A «Clons de paper», que toquin «Ho hem fet!» si ho han fet a classe; si no, el poden deixar per a casa. A l'ordenació del guió del clon, demana que expliquin per què «mostra't» va després de «posa y a 170».|Cada alumno/a hace desde el «Recuerda» hasta la pausa activa. En «Clones de papel», que toquen «¡Lo hemos hecho!» si lo han hecho en clase; si no, lo pueden dejar para casa. En la ordenación del guion del clon, pide que expliquen por qué «muéstrate» va después de «pon y a 170».",
        diu: ["Si el clon es mostrés abans de posar-se a dalt, què veuríem?|Si el clon se mostrara antes de ponerse arriba, ¿qué veríamos?",
          "Quin bloc fa néixer les estrelles noves? I quin les fa desaparèixer?|¿Qué bloque hace nacer las estrellas nuevas? ¿Y cuál las hace desaparecer?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», ordenar el guió del clon, «Clons de paper», la pluja de meteorits, el bloc que fa néixer estrelles i la pregunta del «mostra't».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», ordenar el guion del clon, «Clones de papel», la lluvia de meteoritos, el bloque que hace nacer estrellas y la pregunta del «muéstrate».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de clons|Pausa activa y retos de clones", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els quatre reptes: 8 clons d'estrella, el guió del clon de la pluja (amb el comptador de caiguts), la pluja que s'atura (falta esborrar els clons) i les estrelles per caçar amb el guió de tocar. Al tercer repte, fes que recordin la primera ronda de la fàbrica humana.|Pausa activa todos juntos. Después, los cuatro retos: 8 clones de estrella, el guion del clon de la lluvia (con el contador de caídos), la lluvia que se para (falta borrar los clones) y las estrellas para cazar con el guion de tocar. En el tercer reto, haz que recuerden la primera ronda de la fábrica humana.",
        diu: ["La pluja s'atura de cop: on s'han quedat tots els clons?|La lluvia se para de golpe: ¿dónde se han quedado todos los clones?",
          "Quan toques una estrella, qui fa el guió de tocar: l'original o el clon?|Cuando tocas una estrella, ¿quién hace el guion de tocar: el original o el clon?"],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva pluja de clons|Crea: mi lluvia de clones", fase: 'crea',
        fa: "Cada alumne/a inventa una pluja: bombolles que pugen, estrelles que s'encenen i s'apaguen, meteorits… Ha de tenir almenys 5 clons, un guió del clon i l'atzar. Quan la desen, s'ensenyen les pluges per parelles.|Cada alumno/a inventa una lluvia: burbujas que suben, estrellas que se encienden y se apagan, meteoritos… Tiene que tener al menos 5 clones, un guion del clon y el azar. Cuando la guarden, se enseñan las lluvias por parejas.",
        diu: ["La teva pluja va cap avall, cap amunt o de costat? Quin bloc ho decideix?|¿Tu lluvia va hacia abajo, hacia arriba o de lado? ¿Qué bloque lo decide?",
          "Els teus clons s'esborren quan ja no serveixen?|¿Tus clones se borran cuando ya no sirven?"],
        slides: ['s14'], app: "Pas «Crea»: La meva pluja de clons (es desa als projectes).|Paso «Crea»: Mi lluvia de clones (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quin guió fa cada clon quan neix?|¿Qué guion hace cada clon cuando nace?", "Per què esborrem els clons?|¿Por qué borramos los clones?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa 5 clons, no els mou i diu que «no surten».|Hace 5 clones, no los mueve y dice que «no salen».",
        "Pregunta-li on neix un clon. Que posi «ves a un lloc a l'atzar» al guió del clon i compti quantes estrelles veu ara.|Pregúntale dónde nace un clon. Que ponga «ve a un sitio al azar» en el guion del clon y cuente cuántas estrellas ve ahora."],
      ["L'original està amagat i el guió del clon no té «mostra't»: no es veu res.|El original está escondido y el guion del clon no tiene «muéstrate»: no se ve nada.",
        "Recorda la demo: el clon copia com és l'original, també si està amagat. Quin bloc el fa visible, i quan l'hauria de fer?|Recuerda la demo: el clon copia cómo es el original, también si está escondido. ¿Qué bloque lo hace visible, y cuándo lo tendría que hacer?"],
      ["Posa «esborra aquest clon» al principi del guió del clon i els meteorits desapareixen abans de caure.|Pone «borra este clon» al principio del guion del clon y los meteoritos desaparecen antes de caer.",
        "Que llegeixi el guió del clon en veu alta, de dalt a baix, com si fos un clon de la fàbrica humana. Quan es tornava a seure?|Que lea el guion del clon en voz alta, de arriba abajo, como si fuera un clon de la fábrica humana. ¿Cuándo se volvía a sentar?"],
      ["Posa els blocs de la caiguda al guió de la bandera verda en lloc del guió del clon: només es mou la fàbrica.|Pone los bloques de la caída en el guion de la bandera verde en lugar del guion del clon: solo se mueve la fábrica.",
        "Pregunta-li quin guió fa cada clon quan neix. Que arrossegui els blocs de la caiguda sota «quan començo com a clon».|Pregúntale qué guion hace cada clon cuando nace. Que lleve los bloques de la caída bajo «al empezar como clon»."],
      ["Posa «crea un clon de mi» dins del guió del clon i en surten massa de cop.|Pone «crea un clon de mí» dentro del guion del clon y salen demasiados de golpe.",
        "Explica que cada clon també faria clons, com si a la fàbrica humana cada clon cridés «clon!». Que deixi la creació de clons només a la bandera verda.|Explica que cada clon también haría clones, como si en la fábrica humana cada clon gritara «¡clon!». Que deje la creación de clones solo en la bandera verde."]
    ],
    diff: {
      mes: "Fer una pluja amb dos tipus de clons: estrelles que pugen i meteorits que baixen, i que cada estrella que toca un meteorit faci un so. Calcular quants clons hi ha alhora si la fàbrica en fa 2 per segon i cada un viu 3 segons.|Hacer una lluvia con dos tipos de clones: estrellas que suben y meteoritos que bajan, y que cada estrella que toque un meteorito haga un sonido. Calcular cuántos clones hay a la vez si la fábrica hace 2 por segundo y cada uno vive 3 segundos.",
      menys: "Tenir la targeta impresa del guió del clon al costat de l'ordinador i anar posant els blocs en el mateix ordre. Fer primer el repte de les 8 estrelles i el de la pluja que s'atura, que només demanen un canvi.|Tener la tarjeta impresa del guion del clon al lado del ordenador e ir poniendo los bloques en el mismo orden. Hacer primero el reto de las 8 estrellas y el de la lluvia que se para, que solo piden un cambio."
    },
    aval: {
      ticket: ["Què és un clon? Explica-ho amb un exemple.|¿Qué es un clon? Explícalo con un ejemplo.",
        "Per què la fàbrica s'amaga i el clon fa «mostra't»?|¿Por qué la fábrica se esconde y el clon hace «muéstrate»?"],
      rubric: [
        ["Concepte de clon|Concepto de clon", "Explica que és una còpia que fa el mateix personatge i que cada clon segueix el seu guió.|Explica que es una copia que hace el mismo personaje y que cada clon sigue su guion.", "Sap que és una còpia, però no distingeix el guió de l'original del del clon.|Sabe que es una copia, pero no distingue el guion del original del del clon."],
        ["La fàbrica|La fábrica", "Amaga l'original, fa clons en un bucle i cada clon es col·loca, es mostra i es mou.|Esconde el original, hace clones en un bucle y cada clon se coloca, se muestra y se mueve.", "Fa clons, però s'oblida de moure'ls o de mostrar-los.|Hace clones, pero se olvida de moverlos o de mostrarlos."],
        ["Esborrar clons|Borrar clones", "Esborra cada clon quan ha acabat i explica per què cal.|Borra cada clon cuando ha terminado y explica por qué hace falta.", "Esborra els clons només quan l'app li ho recorda.|Borra los clones solo cuando la app se lo recuerda."]
      ]
    },
    casa: "A casa, feu «Clons de paper»: ressegueix una tapa sis vegades, inventeu una regla per a tots els clons i tireu un dau per decidir què té de diferent cadascun.|En casa, haced «Clones de papel»: repasa una tapa seis veces, inventad una regla para todos los clones y tirad un dado para decidir qué tiene de diferente cada uno.",
    slides: [
      { id: 's1', k: 'portada', t: 'Clons|Clones', x: "Un sol personatge, molts meteorits: avui aprendrem a fer còpies que es mouen soles.|Un solo personaje, muchos meteoritos: hoy aprenderemos a hacer copias que se mueven solas.",
        nota: "Objectiu: al final, cada alumne/a tindrà la seva pluja de clons.|Objetivo: al final, cada alumno/a tendrá su lluvia de clones." },
      { id: 's2', k: 'pregunta', t: "Vint meteorits?|¿Veinte meteoritos?", x: "Per fer una pluja de vint meteorits, cal programar-ne vint?|Para hacer una lluvia de veinte meteoritos, ¿hay que programar veinte?",
        nota: "Deixa que proposin copiar personatges. Pregunta què passaria si després volguessin canviar alguna cosa a tots.|Deja que propongan copiar personajes. Pregunta qué pasaría si después quisieran cambiar algo a todos." },
      { id: 's3', k: 'repas', t: "Recordem l'atzar|Recordemos el azar", punts: ["«Ves a un lloc a l'atzar» i després «posa y a 170».|«Ve a un sitio al azar» y después «pon y a 170».", "«Atzar 1-10»: de l'1 al 10, mai el 0.|«Azar 1-10»: del 1 al 10, nunca el 0.", "L'atzar, dins del bucle per canviar a cada volta.|El azar, dentro del bucle para cambiar en cada vuelta."],
        nota: "Si a l'últim tiquet algú confonia l'ordre, demana-li que ho expliqui ara.|Si en el último ticket alguien confundía el orden, pídele que lo explique ahora." },
      { id: 's4', k: 'anim', t: "Què és un clon?|¿Qué es un clon?", anim: 'g7clon', x: "Una còpia del personatge: el mateix dibuix, al mateix lloc.|Una copia del personaje: el mismo dibujo, en el mismo sitio.",
        nota: "Ensenya un segell o una plantilla: un sol model, moltes còpies iguals.|Enseña un sello o una plantilla: un solo modelo, muchas copias iguales." },
      { id: 's5', k: 'media', t: "Quan començo com a clon|Al empezar como clon", x: "Cada clon fa aquest guió pel seu compte: aquí, va a un lloc a l'atzar.|Cada clon hace este guion por su cuenta: aquí, va a un sitio al azar.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ rep:6{ clone wait:0.4 } } clone{ gotorand }', time: 5 },
        nota: "Compta amb la classe les estrelles que apareixen: 6 clons i l'original, que es queda al mig.|Cuenta con la clase las estrellas que aparecen: 6 clones y el original, que se queda en el centro." },
      { id: 's6', k: 'concepte', t: "Dos guions per a un personatge|Dos guiones para un personaje", punts: ["Quan comença: el que fa l'original (per exemple, fer clons).|Al empezar: lo que hace el original (por ejemplo, hacer clones).", "Quan començo com a clon: el que fa cada clon quan neix.|Al empezar como clon: lo que hace cada clon cuando nace.", "Tots els clons fan el mateix guió, però cadascun pel seu compte.|Todos los clones hacen el mismo guion, pero cada uno por su cuenta."],
        nota: "Dibuixa a la pissarra els dos guions un al costat de l'altre i fes fletxes de qui fa cada un.|Dibuja en la pizarra los dos guiones uno al lado del otro y haz flechas de quién hace cada uno." },
      { id: 's7', k: 'media', t: "La fàbrica de meteorits|La fábrica de meteoritos", x: "L'original s'amaga i fa clons; cada clon es col·loca, es mostra, baixa i s'esborra.|El original se esconde y hace clones; cada clon se coloca, se muestra, baja y se borra.",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()] }, prog: RAIN(0.4, 6), time: 10 },
        nota: "Remarca que només hi ha un personatge programat. Pregunta per què el clon fa «mostra't».|Remarca que solo hay un personaje programado. Pregunta por qué el clon hace «muéstrate»." },
      { id: 's8', k: 'anim', t: "La vida d'un clon|La vida de un clon", anim: 'g7vida', x: "Neix, es col·loca, es mostra, es mou… i s'esborra.|Nace, se coloca, se muestra, se mueve… y se borra.",
        nota: "Explica que l'escenari només aguanta 40 clons alhora: si no s'esborren, la fàbrica deixa de fer-ne.|Explica que el escenario solo aguanta 40 clones a la vez: si no se borran, la fábrica deja de hacer más." },
      { id: 's9', k: 'media', t: "Compte! On són els clons?|¡Cuidado! ¿Dónde están los clones?", x: "Si els clons no es mouen, queden tots a sota de l'original.|Si los clones no se mueven, quedan todos debajo del original.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0)] }, prog: '@estrella flag{ rep:5{ clone } think:"Som 6, però sembla que només hi sigui jo!|¡Somos 6, pero parece que solo esté yo!",3 }', time: 4 },
        nota: "Pregunta quants clons hi ha. Molts diran «cap». Mostra que n'hi ha cinc a sota i com es mourien.|Pregunta cuántos clones hay. Muchos dirán «ninguno». Muestra que hay cinco debajo y cómo se moverían." },
      { id: 's10', k: 'activitat', t: "La fàbrica de clons humana|La fábrica de clones humana", timer: 12, punts: ["La fàbrica diu «clon!» i dona una targeta.|La fábrica dice «¡clon!» y da una tarjeta.", "El clon tira el dau i va al paper del número.|El clon tira el dado y va al papel del número.", "S'aixeca (es mostra) i camina fins a la pissarra (baixa).|Se levanta (se muestra) y camina hasta la pizarra (baja).", "Ronda 2: torna a seure (s'esborra).|Ronda 2: vuelve a sentarse (se borra)."],
        nota: "A la primera ronda, sense esborrar, el rectangle s'omple i la fàbrica ha de parar: és el que passa a l'escenari.|En la primera ronda, sin borrar, el rectángulo se llena y la fábrica tiene que parar: es lo que pasa en el escenario." },
      { id: 's11', k: 'pregunta', t: "Què ha passat?|¿Qué ha pasado?", punts: ["Tots els clons tenien la mateixa targeta: han fet el mateix?|Todos los clones tenían la misma tarjeta: ¿han hecho lo mismo?", "Per què s'ha aturat la pluja a la primera ronda?|¿Por qué se ha parado la lluvia en la primera ronda?", "Què feia que cada clon anés a un lloc diferent?|¿Qué hacía que cada clon fuera a un sitio diferente?"],
        nota: "Conclusió: mateix guió + atzar = clons diferents; i esborrar-los fa que la pluja no s'acabi.|Conclusión: mismo guion + azar = clones diferentes; y borrarlos hace que la lluvia no se acabe." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre la sessió «Clons».|Abre la sesión «Clones».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Ordena el guió del clon.|Ordena el guion del clon.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Clons de paper» es pot deixar per a casa amb «Ara no».|«Clones de papel» se puede dejar para casa con «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de clons|Retos de clones", timer: 12, punts: ["1. Un cel ple d'estrelles (8 clons)|1. Un cielo lleno de estrellas (8 clones)", "2. El guió del clon de la pluja|2. El guion del clon de la lluvia", "3. La pluja que s'atura|3. La lluvia que se para", "4. Estrelles per caçar|4. Estrellas para cazar"],
        nota: "Al repte 3, recorda la fàbrica humana: on s'han quedat els clons? Al 4, el clon tocat és qui suma el punt.|En el reto 3, recuerda la fábrica humana: ¿dónde se han quedado los clones? En el 4, el clon tocado es quien suma el punto." },
      { id: 's14', k: 'activitat', t: "Crea: la meva pluja de clons|Crea: mi lluvia de clones", timer: 5, x: "Almenys 5 clons, un guió del clon i l'atzar. Bombolles, estrelles, meteorits…|Al menos 5 clones, un guion del clon y el azar. Burbujas, estrellas, meteoritos…",
        nota: "Si algú acaba aviat, que hi afegeixi un guió de tocar perquè els clons es puguin caçar.|Si alguien acaba pronto, que añada un guion de tocar para que los clones se puedan cazar." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Un clon és una còpia que fa el mateix personatge.|Un clon es una copia que hace el mismo personaje.", "Cada clon fa «quan començo com a clon» pel seu compte.|Cada clon hace «al empezar como clon» por su cuenta.", "«Esborra aquest clon» perquè l'escenari no s'ompli.|«Borra este clon» para que el escenario no se llene."],
        nota: "Torna a la pregunta dels vint meteorits: ara, amb un sol personatge en tenim tants com vulguem.|Vuelve a la pregunta de los veinte meteoritos: ahora, con un solo personaje tenemos tantos como queramos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Què és un clon? Un exemple.|¿Qué es un clon? Un ejemplo.", "Per què la fàbrica s'amaga i el clon fa «mostra't»?|¿Por qué la fábrica se esconde y el clon hace «muéstrate»?"],
        nota: "Anota qui confon el guió de l'original amb el del clon: hi tornareu a la sessió següent.|Anota quién confunde el guion del original con el del clon: volveréis a ello en la sesión siguiente." }
    ],
    print: [
      { id: 'p1', t: "Targetes del guió del clon|Tarjetas del guion del clon", k: 'targetes',
        intro: "Un paquet de cinc targetes per a cada alumne/a que farà de clon (en calen uns 8) i una targeta de fàbrica per al professor/a. Retalleu-les; si les plastifiqueu, us serviran més anys.|Un paquete de cinco tarjetas para cada alumno/a que hará de clon (hacen falta unos 8) y una tarjeta de fábrica para el profesor/a. Recortadlas; si las plastificáis, os servirán más años.",
        items: [
          { t: "Fàbrica: estic amagada i dic «clon!» 🏭|Fábrica: estoy escondida y digo «¡clon!» 🏭", n: 1 },
          { t: "Quan començo com a clon… 🧬|Al empezar como clon… 🧬", n: 8 },
          { t: "Tiro el dau i vaig al paper del número 🎲|Tiro el dado y voy al papel del número 🎲", n: 8 },
          { t: "Em mostro: m'aixeco 🙋|Me muestro: me levanto 🙋", n: 8 },
          { t: "Baixo a poc a poc fins a la pissarra ⬇️|Bajo despacio hasta la pizarra ⬇️", n: 8 },
          { t: "M'esborro: torno a seure 🧽|Me borro: vuelvo a sentarme 🧽", n: 8 }
        ] },
      { id: 'p2', t: "Clons sobre paper|Clones sobre papel", k: 'fitxa',
        intro: "Pensa com l'escenari. Pots dibuixar els blocs.|Piensa como el escenario. Puedes dibujar los bloques.",
        items: [
          { q: "L'estrella fa «repeteix 4 vegades: crea un clon de mi». Quantes estrelles hi ha en total?|La estrella hace «repite 4 veces: crea un clon de mí». ¿Cuántas estrellas hay en total?", sol: "5: l'original i 4 clons.|5: el original y 4 clones." },
          { q: "Els 4 clons no tenen cap guió. On són?|Los 4 clones no tienen ningún guion. ¿Dónde están?", sol: "A sota de l'original, al mateix lloc: no es veuen.|Debajo del original, en el mismo sitio: no se ven." },
          { q: "Ordena el guió del clon de la pluja: mostra't · esborra aquest clon · ves a un lloc a l'atzar · baixa fins a baix · posa y a 170|Ordena el guion del clon de la lluvia: muéstrate · borra este clon · ve a un sitio al azar · baja hasta abajo · pon y a 170", sol: "Ves a un lloc a l'atzar · posa y a 170 · mostra't · baixa fins a baix · esborra aquest clon.|Ve a un sitio al azar · pon y a 170 · muéstrate · baja hasta abajo · borra este clon." },
          { q: "Una fàbrica fa 2 clons cada segon i cada clon s'esborra al cap de 3 segons. Quants clons hi ha alhora, més o menys?|Una fábrica hace 2 clones cada segundo y cada clon se borra al cabo de 3 segundos. ¿Cuántos clones hay a la vez, más o menos?", sol: "Uns 6 (2 per segon × 3 segons).|Unos 6 (2 por segundo × 3 segundos)." }
        ] }
    ]
  };

  /* ---------- Sessió 3 · Cada cop més difícil ---------- */
  const ACC = cap => `@meteorit flag{ setv:velocitat,3 point:180 forever{ ${FALL('$velocitat')} ${cap ? `if:$velocitat<${cap}{ chv:velocitat,2 }` : 'chv:velocitat,2'} } }`;
  const G3 = {
    obj: [
      "L'alumne/a explica per què un bon videojoc comença fàcil i es fa difícil a poc a poc.|El alumno/a explica por qué un buen videojuego empieza fácil y se hace difícil poco a poco.",
      "L'alumne/a fa moure un personatge amb la variable velocitat i la fa créixer amb «suma a velocitat».|El alumno/a hace mover un personaje con la variable velocidad y la hace crecer con «suma a velocidad».",
      "L'alumne/a posa un límit a la dificultat amb un «si» que compara la variable.|El alumno/a pone un límite a la dificultad con un «si» que compara la variable.",
      "L'alumne/a calcula el valor d'una variable que creix de 2 en 2 i s'atura en un límit.|El alumno/a calcula el valor de una variable que crece de 2 en 2 y se para en un límite."
    ],
    comp: [
      "Competència digital (CD5): dissenyar reptes digitals equilibrats|Competencia digital (CD5): diseñar retos digitales equilibrados",
      "Pensament computacional: variables que canvien, condicions i límits|Pensamiento computacional: variables que cambian, condiciones y límites",
      "Matemàtiques: sèries numèriques (sumar sempre el mateix) i comparació de nombres|Matemáticas: series numéricas (sumar siempre lo mismo) y comparación de números",
      "Educació física i treball en equip: ritme, coordinació i esforç a poc a poc|Educación física y trabajo en equipo: ritmo, coordinación y esfuerzo poco a poco"
    ],
    vocab: [
      ["Dificultat|Dificultad", "Com de difícil és un repte. Als bons videojocs, puja a poc a poc.|Lo difícil que es un reto. En los buenos videojuegos, sube poco a poco."],
      ["Velocitat|Velocidad", "Quants passos es mou un personatge a cada fotograma. Si és una variable, pot créixer.|Cuántos pasos se mueve un personaje en cada fotograma. Si es una variable, puede crecer."],
      ["Augmentar|Aumentar", "Fer créixer una variable, per exemple amb «suma a velocitat 2».|Hacer crecer una variable, por ejemplo con «suma a velocidad 2»."],
      ["Límit|Límite", "El valor més gran que deixem que tingui la variable.|El valor más grande que dejamos que tenga la variable."],
      ["Nivell|Nivel", "Una etapa del videojoc; a cada nivell, una mica més difícil.|Una etapa del videojuego; en cada nivel, un poco más difícil."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Cada cop més difícil»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Cada vez más difícil»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Una bola de paper (o una pilota tova) per grup de 4 i un cronòmetre (el del projector o un mòbil)|Una bola de papel (o una pelota blanda) por grupo de 4 y un cronómetro (el del proyector o un móvil)",
        "Pissarra amb dues caselles: VELOCITAT i LÍMIT|Pizarra con dos casillas: VELOCIDAD y LÍMITE"
      ],
      imprimir: ["Fitxa: la taula de la velocitat (una per grup i una per alumne/a per als exercicis)|Ficha: la tabla de la velocidad (una por grupo y una por alumno/a para los ejercicios)"],
      prep: [
        "Imprimir la fitxa. Fer bolles de paper fortes (amb cinta) si no hi ha pilotes toves.|Imprimir la ficha. Hacer bolas de papel fuertes (con cinta) si no hay pelotas blandas.",
        "Apartar una mica les taules perquè cada grup de 4 es pugui posar en rotllana.|Apartar un poco las mesas para que cada grupo de 4 se pueda poner en corro.",
        "Provar la demo del meteorit que s'accelera (diapositiva 7) i la del límit (diapositiva 9).|Probar la demo del meteorito que se acelera (diapositiva 7) y la del límite (diapositiva 9).",
        "Deixar la sessió iniciada a cada ordinador.|Dejar la sesión iniciada en cada ordenador."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: massa fàcil o massa difícil?|Bienvenida: ¿demasiado fácil o demasiado difícil?", fase: 'inici',
        fa: "Explica la història de l'Aina, que s'avorreix, i d'en Pol, que ho troba difícil. Pregunta quin videojoc o esport els va costar al principi i com van millorar. Repàs ràpid dels clons amb la diapositiva 3.|Explica la historia de Aina, que se aburre, y de Pol, que lo encuentra difícil. Pregunta qué videojuego o deporte les costó al principio y cómo mejoraron. Repaso rápido de los clones con la diapositiva 3.",
        diu: ["Us heu avorrit mai amb un repte massa fàcil? I us heu enfadat amb un de massa difícil?|¿Os habéis aburrido alguna vez con un reto demasiado fácil? ¿Y os habéis enfadado con uno demasiado difícil?",
          "Com podríem fer un sol videojoc que agradi a l'Aina i a en Pol?|¿Cómo podríamos hacer un solo videojuego que guste a Aina y a Pol?"],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La dificultat que creix|La dificultad que crece", fase: 'teoria',
        fa: "Mostra la corba de la dificultat: començar fàcil i pujar a poc a poc. Explica la variable velocitat i com «mou-te velocitat passos» va més de pressa quan la variable creix. Amb la demo, fes que diguin el número de velocitat en veu alta a cada volta. Ensenya altres maneres (més petit, més clons, menys temps) i acaba amb el límit.|Muestra la curva de la dificultad: empezar fácil y subir poco a poco. Explica la variable velocidad y cómo «muévete velocidad pasos» va más deprisa cuando la variable crece. Con la demo, haz que digan el número de velocidad en voz alta en cada vuelta. Enseña otras maneras (más pequeño, más clones, menos tiempo) y acaba con el límite.",
        diu: ["Velocitat 3, 5, 7… quin número ve després? I després?|Velocidad 3, 5, 7… ¿qué número viene después? ¿Y después?",
          "Si el meteorit fa «mou-te 5 passos», anirà més de pressa quan la variable creixi?|Si el meteorito hace «muévete 5 pasos», ¿irá más deprisa cuando la variable crezca?",
          "Què passaria al cap de deu minuts si la velocitat no tingués límit?|¿Qué pasaría al cabo de diez minutos si la velocidad no tuviera límite?"],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La bola que s'accelera|La bola que se acelera", fase: 'desconnectat',
        fa: "Grups de 4 en rotllana amb una bola. A cada ronda de 10 segons, el grup ha de fer tantes passades com diu la VELOCITAT de la pissarra. Comenceu amb velocitat 3 i, després de cada ronda, sumeu 2 (com al programa). El LÍMIT és 11: quan hi arribeu, ja no puja. Cada grup apunta a la fitxa si ho ha aconseguit i si li ha semblat avorrit, just o massa difícil. Feu 6 rondes.|Grupos de 4 en corro con una bola. En cada ronda de 10 segundos, el grupo tiene que hacer tantos pases como dice la VELOCIDAD de la pizarra. Empezad con velocidad 3 y, después de cada ronda, sumad 2 (como en el programa). El LÍMITE es 11: cuando lleguéis, ya no sube. Cada grupo apunta en la ficha si lo ha conseguido y si le ha parecido aburrido, justo o demasiado difícil. Haced 6 rondas.",
        diu: ["Velocitat 3, sumem 2: quina velocitat toca ara?|Velocidad 3, sumamos 2: ¿qué velocidad toca ahora?",
          "A quina ronda us ha semblat més divertit? Per què?|¿En qué ronda os ha parecido más divertido? ¿Por qué?",
          "I si no hi hagués límit: amb velocitat 25, ho aconseguiríeu?|¿Y si no hubiera límite: con velocidad 25, lo conseguiríais?"],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la pregunta de les 4 voltes, demana que ho calculin amb els dits o a la fitxa. A l'escenari per mirar, que diguin quan deixa de créixer la velocitat i per què.|Cada alumno/a avanza hasta la pausa activa. En la pregunta de las 4 vueltas, pide que lo calculen con los dedos o en la ficha. En el escenario para mirar, que digan cuándo deja de crecer la velocidad y por qué.",
        diu: ["Quan s'atura de créixer la velocitat? Quin bloc ho fa?|¿Cuándo deja de crecer la velocidad? ¿Qué bloque lo hace?",
          "La variable creix, però el meteorit no s'accelera: què li falta al «mou-te»?|La variable crece, pero el meteorito no se acelera: ¿qué le falta al «muévete»?"],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta de les 4 voltes, «Cada cop més lluny», el meteorit que s'accelera, el bloc que fa créixer la velocitat i la pregunta del «mou-te 5 passos».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta de las 4 vueltas, «Cada vez más lejos», el meteorito que se acelera, el bloque que hace crecer la velocidad y la pregunta del «muévete 5 pasos».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de dificultat|Pausa activa y retos de dificultad", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els tres reptes: el meteorit que no s'accelerava (posar la variable al «mou-te»), el cometa sense límit (afegir el «si velocitat < 12») i l'estrella que s'encongeix quan la toques.|Pausa activa todos juntos. Después, los tres retos: el meteorito que no se aceleraba (poner la variable en el «muévete»), el cometa sin límite (añadir el «si velocidad < 12») y la estrella que se encoge cuando la tocas.",
        diu: ["Al cometa, on va el «si»: abans de tocar la vora o dins?|En el cometa, ¿dónde va el «si»: antes de tocar el borde o dentro?",
          "L'estrella que s'encongeix: després de 5 tocs, quina mida té?|La estrella que se encoge: después de 5 toques, ¿qué tamaño tiene?"],
        slides: ['s13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu repte que s'accelera|Crea: mi reto que se acelera", fase: 'crea',
        fa: "Cada alumne/a fa el seu repte amb la variable velocitat, que creix i té un límit. Quan el desin, el prova el company/a i diu si el límit és massa baix, massa alt o just.|Cada alumno/a hace su reto con la variable velocidad, que crece y tiene un límite. Cuando lo guarden, lo prueba el compañero/a y dice si el límite es demasiado bajo, demasiado alto o justo.",
        diu: ["A quina velocitat comença el teu repte? I quin és el límit?|¿A qué velocidad empieza tu reto? ¿Y cuál es el límite?",
          "El company/a s'ha avorrit o s'ha enfadat? Què canviaries?|¿El compañero/a se ha aburrido o se ha enfadado? ¿Qué cambiarías?"],
        slides: ['s14'], app: "Pas «Crea»: El meu repte que s'accelera (es desa als projectes).|Paso «Crea»: Mi reto que se acelera (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Què ha de passar perquè el meteorit vagi cada vegada més ràpid?|¿Qué tiene que pasar para que el meteorito vaya cada vez más rápido?", "Per què hi posem un límit?|¿Por qué le ponemos un límite?"],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Suma a la variable velocitat, però el «mou-te» continua amb un número fix i no s'accelera res.|Suma a la variable velocidad, pero el «muévete» sigue con un número fijo y no se acelera nada.",
        "Pregunta: el «mou-te» sap que la variable ha crescut? Que miri el número del bloc i el número de l'escenari: són el mateix?|Pregunta: ¿el «muévete» sabe que la variable ha crecido? Que mire el número del bloque y el número del escenario: ¿son el mismo?"],
      ["Posa «suma a velocitat» dins del bucle de la caiguda i la velocitat es dispara en pocs segons.|Pone «suma a velocidad» dentro del bucle de la caída y la velocidad se dispara en pocos segundos.",
        "Que miri el número de la velocitat mentre cau: puja un cop per caiguda o a cada pas? On ha d'anar perquè pugi només quan torna a dalt?|Que mire el número de la velocidad mientras cae: ¿sube una vez por caída o a cada paso? ¿Dónde tiene que ir para que suba solo cuando vuelve arriba?"],
      ["Al límit, posa «velocitat > 12» en lloc de «velocitat < 12» i la velocitat no puja mai.|En el límite, pone «velocidad > 12» en lugar de «velocidad < 12» y la velocidad no sube nunca.",
        "Que llegeixi la condició en veu alta amb el número d'ara: «si 4 és més gran que 12…». Es compleix? Quan volem sumar?|Que lea la condición en voz alta con el número de ahora: «si 4 es mayor que 12…». ¿Se cumple? ¿Cuándo queremos sumar?"],
      ["S'oblida de posar la velocitat a 3 al principi i, en tornar a començar, el meteorit ja va molt de pressa (o no es mou, perquè val 0).|Se olvida de poner la velocidad a 3 al principio y, al volver a empezar, el meteorito ya va muy deprisa (o no se mueve, porque vale 0).",
        "Pregunta quant val la variable just quan toques la bandera verda. Quin bloc li dona el valor de començar?|Pregunta cuánto vale la variable justo cuando tocas la bandera verde. ¿Qué bloque le da el valor de empezar?"],
      ["Creu que «més difícil» només vol dir «més ràpid».|Cree que «más difícil» solo quiere decir «más rápido».",
        "Recorda la demo de l'estrella que s'encongeix i pregunta per altres maneres: més clons, menys temps, menys vides…|Recuerda la demo de la estrella que se encoge y pregunta por otras maneras: más clones, menos tiempo, menos vidas…"]
    ],
    diff: {
      mes: "Afegir nivells: una variable «nivell» que puja cada vegada que la velocitat arriba a un múltiple de 4, i un personatge que diu el nivell. Calcular a la fitxa en quina volta s'arriba al límit si es comença a 2 i se suma 3.|Añadir niveles: una variable «nivel» que sube cada vez que la velocidad llega a un múltiplo de 4, y un personaje que dice el nivel. Calcular en la ficha en qué vuelta se llega al límite si se empieza en 2 y se suma 3.",
      menys: "Fer el primer repte amb el professor/a, tocant junts el número del «mou-te». Al cometa, oferir el «si» ja posat dins i demanar només que triï el número del límit. Fer servir la fitxa per escriure la sèrie 3, 5, 7…|Hacer el primer reto con el profesor/a, tocando juntos el número del «muévete». En el cometa, ofrecer el «si» ya puesto dentro y pedir solo que elija el número del límite. Usar la ficha para escribir la serie 3, 5, 7…"
    },
    aval: {
      ticket: ["Per què un videojoc ha de començar fàcil?|¿Por qué un videojuego tiene que empezar fácil?",
        "La velocitat comença a 4 i suma 2 a cada volta, amb límit 10. Quant val després de 5 voltes?|La velocidad empieza en 4 y suma 2 en cada vuelta, con límite 10. ¿Cuánto vale después de 5 vueltas?"],
      rubric: [
        ["Idea de dificultat|Idea de dificultad", "Explica per què cal començar fàcil i pujar a poc a poc, amb exemples.|Explica por qué hay que empezar fácil y subir poco a poco, con ejemplos.", "Diu que ha de ser difícil, però no veu per què ha de començar fàcil.|Dice que tiene que ser difícil, pero no ve por qué tiene que empezar fácil."],
        ["Velocitat variable|Velocidad variable", "Fa moure el personatge amb la variable i la fa créixer al lloc adequat del programa.|Hace mover el personaje con la variable y la hace crecer en el lugar adecuado del programa.", "Fa créixer la variable, però el moviment no la fa servir o creix massa de pressa.|Hace crecer la variable, pero el movimiento no la usa o crece demasiado deprisa."],
        ["Límit|Límite", "Posa un «si» amb la comparació correcta i explica què passa quan s'arriba al límit.|Pone un «si» con la comparación correcta y explica qué pasa cuando se llega al límite.", "Posa el «si», però s'equivoca amb el signo o el número.|Pone el «si», pero se equivoca con el signo o el número."]
      ]
    },
    casa: "A casa, feu «Cada cop més lluny» amb una bola de mitjons: un pas enrere a cada atrapada i un límit de 6 passos. Parleu de quin nivell era el més divertit.|En casa, haced «Cada vez más lejos» con una bola de calcetines: un paso atrás en cada atrapada y un límite de 6 pasos. Hablad de qué nivel era el más divertido.",
    slides: [
      { id: 's1', k: 'portada', t: "Cada cop més difícil|Cada vez más difícil", x: "Com fer un videojoc que no avorreixi ni faci enfadar.|Cómo hacer un videojuego que no aburra ni haga enfadar.",
        nota: "Objectiu: al final, el meteorit anirà cada vegada més ràpid, però amb un límit.|Objetivo: al final, el meteorito irá cada vez más rápido, pero con un límite." },
      { id: 's2', k: 'pregunta', t: "L'Aina i en Pol|Aina y Pol", x: "L'Aina diu «massa fàcil!» i en Pol, «massa difícil!». Com ho podem fer perquè els agradi als dos?|Aina dice «¡demasiado fácil!» y Pol, «¡demasiado difícil!». ¿Cómo lo podemos hacer para que les guste a los dos?",
        nota: "Busca la idea de començar fàcil i anar pujant. Si surt «triar el nivell», també és bona: anota-la.|Busca la idea de empezar fácil e ir subiendo. Si sale «elegir el nivel», también es buena: anótala." },
      { id: 's3', k: 'repas', t: "Recordem els clons|Recordemos los clones", punts: ["«Crea un clon de mi» fa una còpia.|«Crea un clon de mí» hace una copia.", "Cada clon fa «quan començo com a clon».|Cada clon hace «al empezar como clon».", "La fàbrica s'amaga; el clon es mostra i, al final, s'esborra.|La fábrica se esconde; el clon se muestra y, al final, se borra."],
        nota: "Pregunta on va «esborra aquest clon» i per què.|Pregunta dónde va «borra este clon» y por qué." },
      { id: 's4', k: 'anim', t: "Ni massa fàcil ni massa difícil|Ni demasiado fácil ni demasiado difícil", anim: 'g7corba', x: "La dificultat puja a poc a poc, dins la zona del repte just.|La dificultad sube poco a poco, dentro de la zona del reto justo.",
        nota: "Relaciona-ho amb aprendre a anar en bicicleta o a nedar: primer fàcil, després més.|Relaciónalo con aprender a ir en bicicleta o a nadar: primero fácil, después más." },
      { id: 's5', k: 'anim', t: "La velocitat és una variable|La velocidad es una variable", anim: 'g7vel', x: "«Mou-te velocitat passos»: quan la variable creix, va més de pressa.|«Muévete velocidad pasos»: cuando la variable crece, va más deprisa.",
        nota: "Remarca que el «mou-te» ha de tenir la variable, no un número.|Remarca que el «muévete» tiene que tener la variable, no un número." },
      { id: 's6', k: 'concepte', t: "Tres blocs per a la dificultat|Tres bloques para la dificultad", punts: ["Al principi: posa velocitat a 3.|Al principio: pon velocidad a 3.", "Per moure's: mou-te velocitat passos.|Para moverse: muévete velocidad pasos.", "A cada volta: suma a velocitat 2.|En cada vuelta: suma a velocidad 2."],
        nota: "Escriu els tres blocs a la pissarra i deixa'ls tota la sessió.|Escribe los tres bloques en la pizarra y déjalos toda la sesión." },
      { id: 's7', k: 'media', t: "Cada volta, una mica més|Cada vuelta, un poco más", x: "Mireu el número de velocitat: 3, 5, 7, 9…|Mirad el número de velocidad: 3, 5, 7, 9…",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET()], vars: ['velocitat'] }, prog: ACC(0), varNames: VN, time: 9 },
        nota: "Que diguin en veu alta el número de cada volta abans que surti.|Que digan en voz alta el número de cada vuelta antes de que salga." },
      { id: 's8', k: 'media', t: "Més petit també és més difícil|Más pequeño también es más difícil", x: "Altres maneres: més petit, més clons, menys temps.|Otras maneras: más pequeño, más clones, menos tiempo.",
        media: { k: 'stage', w: { bg: 'nit', sprites: [EST(0, 0, { size: 150 })] }, prog: '@estrella flag{ rep:11{ gotorand wait:0.6 chsize:-10 } }', time: 8 },
        nota: "Demana altres idees per fer més difícil un videojoc sense que sigui més ràpid.|Pide otras ideas para hacer más difícil un videojuego sin que sea más rápido." },
      { id: 's9', k: 'media', t: "Compte: posa-hi un límit!|Cuidado: ¡ponle un límite!", x: "Si velocitat < 14, suma-hi 2. Quan arriba a 14, ja no puja.|Si velocidad < 14, súmale 2. Cuando llega a 14, ya no sube.",
        media: { k: 'stage', w: { bg: 'espai', sprites: [MET(0, 0)], vars: ['velocitat'] }, prog: '@meteorit flag{ setv:velocitat,4 point:45 forever{ move:$velocitat if:touch:edge{ if:$velocitat<14{ chv:velocitat,2 } } bounce } }', varNames: VN, time: 10 },
        nota: "Pregunta què passaria sense el «si»: al cap d'una estona, impossible de seguir amb els ulls.|Pregunta qué pasaría sin el «si»: al cabo de un rato, imposible de seguir con los ojos." },
      { id: 's10', k: 'activitat', t: "La bola que s'accelera|La bola que se acelera", timer: 12, punts: ["En rotllana de 4, amb una bola.|En corro de 4, con una bola.", "En 10 segons, tantes passades com la VELOCITAT.|En 10 segundos, tantos pases como la VELOCIDAD.", "Després de cada ronda: velocitat + 2.|Después de cada ronda: velocidad + 2.", "LÍMIT 11: ja no puja més.|LÍMITE 11: ya no sube más."],
        nota: "Escriu la velocitat a la pissarra i actualitza-la entre rondes; fes que un alumne/a faci la suma.|Escribe la velocidad en la pizarra y actualízala entre rondas; haz que un alumno/a haga la suma." },
      { id: 's11', k: 'pregunta', t: "Com ha anat?|¿Cómo ha ido?", punts: ["A quina ronda era avorrit?|¿En qué ronda era aburrido?", "A quina era divertit de veritat?|¿En cuál era divertido de verdad?", "Què hauria passat sense límit?|¿Qué habría pasado sin límite?"],
        nota: "Connecta-ho amb el programa: la velocitat de la pissarra és la variable i el límit, el «si».|Conéctalo con el programa: la velocidad de la pizarra es la variable y el límite, el «si»." },
      { id: 's12', k: 'activitat', t: "Ara, a l'ordinador|Ahora, al ordenador", timer: 13, punts: ["Obre «Cada cop més difícil».|Abre «Cada vez más difícil».", "Fes «Recorda», la missió i «Descobreix».|Haz «Recuerda», la misión y «Descubre».", "Mira el meteorit i troba el bloc que l'accelera.|Mira el meteorito y encuentra el bloque que lo acelera.", "Para a la «Pausa activa».|Para en la «Pausa activa»."],
        nota: "«Cada cop més lluny» es fa a casa: poden tocar «Ara no».|«Cada vez más lejos» se hace en casa: pueden tocar «Ahora no»." },
      { id: 's13', k: 'repte', t: "Reptes de dificultat|Retos de dificultad", timer: 12, punts: ["1. El meteorit que no s'accelerava|1. El meteorito que no se aceleraba", "2. El cometa sense límit|2. El cometa sin límite", "3. L'estrella que s'encongeix|3. La estrella que se encoge"],
        nota: "Al cometa, si algú s'encalla, que llegeixi la condició amb el número d'ara: «si 13 < 12…».|En el cometa, si alguien se atasca, que lea la condición con el número de ahora: «si 13 < 12…»." },
      { id: 's14', k: 'activitat', t: "Crea: el meu repte que s'accelera|Crea: mi reto que se acelera", timer: 5, x: "Velocitat variable, que creix i té un límit. Després, el company/a el prova.|Velocidad variable, que crece y tiene un límite. Después, el compañero/a lo prueba.",
        nota: "Si el company/a diu que és massa fàcil o massa difícil, que provin de canviar només el límit.|Si el compañero/a dice que es demasiado fácil o demasiado difícil, que prueben a cambiar solo el límite." },
      { id: 's15', k: 'resum', t: "Què hem après avui|Qué hemos aprendido hoy", punts: ["Començar fàcil i pujar a poc a poc.|Empezar fácil y subir poco a poco.", "«Mou-te velocitat passos» + «suma a velocitat».|«Muévete velocidad pasos» + «suma a velocidad».", "Un límit: «si velocitat < 12, suma-hi».|Un límite: «si velocidad < 12, súmale»."],
        nota: "Torna a l'Aina i en Pol: ara el videojoc els pot agradar a tots dos.|Vuelve a Aina y Pol: ahora el videojuego les puede gustar a los dos." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Per què ha de començar fàcil?|¿Por qué tiene que empezar fácil?", "Comença a 4, suma 2, límit 10: quant val després de 5 voltes?|Empieza en 4, suma 2, límite 10: ¿cuánto vale después de 5 vueltas?"],
        nota: "Resposta de la segona: 10 (4, 6, 8, 10 i ja no puja).|Respuesta de la segunda: 10 (4, 6, 8, 10 y ya no sube)." }
    ],
    print: [
      { id: 'p1', t: "La taula de la velocitat|La tabla de la velocidad", k: 'fitxa',
        intro: "Primera part, en grup, durant «La bola que s'accelera». Segona part, sol/a, com a exercici.|Primera parte, en grupo, durante «La bola que se acelera». Segunda parte, solo/a, como ejercicio.",
        items: [
          { q: "Ronda 1: velocitat ___ · Ho hem aconseguit? Sí / No · Avorrit / Just / Massa difícil — Ronda 2: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 3: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil|Ronda 1: velocidad ___ · ¿Lo hemos conseguido? Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 2: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 3: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil" },
          { q: "Ronda 4: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 5: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil — Ronda 6: velocitat ___ · Sí / No · Avorrit / Just / Massa difícil|Ronda 4: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 5: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil — Ronda 6: velocidad ___ · Sí / No · Aburrido / Justo / Demasiado difícil", sol: "Velocitats: 3, 5, 7, 9, 11, 11 (el límit és 11).|Velocidades: 3, 5, 7, 9, 11, 11 (el límite es 11)." },
          { q: "Un meteorit comença a velocitat 2 i suma 2 a cada volta, sense límit. Escriu la velocitat de les 6 primeres voltes.|Un meteorito empieza a velocidad 2 y suma 2 en cada vuelta, sin límite. Escribe la velocidad de las 6 primeras vueltas.", sol: "2, 4, 6, 8, 10, 12.|2, 4, 6, 8, 10, 12." },
          { q: "Ara té el límit «si velocitat < 8, suma 2». Quina velocitat té a la volta 6?|Ahora tiene el límite «si velocidad < 8, suma 2». ¿Qué velocidad tiene en la vuelta 6?", sol: "8: 2, 4, 6, 8, 8, 8.|8: 2, 4, 6, 8, 8, 8." },
          { q: "Escriu dues maneres de fer més difícil un videojoc sense fer-lo més ràpid.|Escribe dos maneras de hacer más difícil un videojuego sin hacerlo más rápido.", sol: "Per exemple: objectius més petits, més clons, menys temps, menys vides.|Por ejemplo: objetivos más pequeños, más clones, menos tiempo, menos vidas." }
        ] }
    ]
  };

  /* ---------- Sessió 4 · Projecte: esquiva els meteorits ---------- */
  const G4 = {
    obj: [
      "L'alumne/a planifica un videojoc en peces (nau, fàbrica, xocs, punts, dificultat, fi) abans de programar-lo.|El alumno/a planifica un videojuego en piezas (nave, fábrica, choques, puntos, dificultad, fin) antes de programarlo.",
      "L'alumne/a programa i prova cada peça per separat abans de passar a la següent.|El alumno/a programa y prueba cada pieza por separado antes de pasar a la siguiente.",
      "L'alumne/a fa que un clon que toca la nau resti una vida i s'esborri, i acaba la partida quan no queden vides.|El alumno/a hace que un clon que toca la nave reste una vida y se borre, y acaba la partida cuando no quedan vidas.",
      "L'alumne/a prova el videojoc d'un company/a, li dona una valoració amable i útil i millora el seu amb la que rep.|El alumno/a prueba el videojuego de un compañero/a, le da una valoración amable y útil y mejora el suyo con la que recibe."
    ],
    comp: [
      "Competència digital (CD5): crear un videojoc propi complet amb programació per blocs|Competencia digital (CD5): crear un videojuego propio completo con programación por bloques",
      "Pensament computacional: descomposició, depuració i proves amb usuaris|Pensamiento computacional: descomposición, depuración y pruebas con usuarios",
      "Llengua: explicar un pla per escrit i oralment, donar i rebre opinions amb respecte|Lengua: explicar un plan por escrito y oralmente, dar y recibir opiniones con respeto",
      "Aprendre a aprendre: revisar la pròpia feina i millorar-la|Aprender a aprender: revisar el propio trabajo y mejorarlo"
    ],
    vocab: [
      ["Pla|Plan", "La llista de peces i regles del videojoc, escrita abans de programar.|La lista de piezas y reglas del videojuego, escrita antes de programar."],
      ["Peça|Pieza", "Un tros del videojoc que es pot programar i provar per separat.|Un trozo del videojuego que se puede programar y probar por separado."],
      ["Xoc|Choque", "Quan un clon de meteorit toca la nau.|Cuando un clon de meteorito toca la nave."],
      ["Fi de partida|Fin de partida", "Quan s'acaben les vides: es diu «Fi!» i s'atura tot.|Cuando se acaban las vidas: se dice «¡Fin!» y se para todo."],
      ["Provador/a|Probador/a", "La persona que prova un videojoc que no ha fet i diu què li ha semblat.|La persona que prueba un videojuego que no ha hecho y dice qué le ha parecido."]
    ],
    mat: {
      aula: [
        "Un ordinador per alumne/a amb Numi Tech obert a la sessió «Projecte: esquiva els meteorits»|Un ordenador por alumno/a con Numi Tech abierto en la sesión «Proyecto: esquiva los meteoritos»",
        "Projector i la presentació d'aquesta sessió|Proyector y la presentación de esta sesión",
        "Llapis i colors per al pla en paper|Lápices y colores para el plan en papel",
        "Les targetes de preguntes del provador/a, una per parella|Las tarjetas de preguntas del probador/a, una por pareja"
      ],
      imprimir: ["Fitxa: el pla del meu videojoc (una per alumne/a)|Ficha: el plan de mi videojuego (una por alumno/a)", "Targetes del provador/a (una tira per parella)|Tarjetas del probador/a (una tira por pareja)"],
      prep: [
        "Imprimir la fitxa del pla i retallar les targetes del provador/a.|Imprimir la ficha del plan y recortar las tarjetas del probador/a.",
        "Decidir les parelles de prova creuada (millor que no siguin companys/es de taula).|Decidir las parejas de prueba cruzada (mejor que no sean compañeros/as de mesa).",
        "Provar el videojoc sencer de la diapositiva 6 i el pas «Crea» per saber quins blocs falten al programa de partida.|Probar el videojuego entero de la diapositiva 6 y el paso «Crea» para saber qué bloques faltan en el programa de partida.",
        "Preparar dos o tres ordinadors per ensenyar videojocs al final (o el projector connectat).|Preparar dos o tres ordenadores para enseñar videojuegos al final (o el proyector conectado)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: demà és la Nit de les Estrelles|Bienvenida: mañana es la Noche de las Estrellas", fase: 'inici',
        fa: "Explica que avui acabaran el videojoc per a l'observatori. Fes el repàs de dificultat i clons amb la diapositiva 3 i ensenya el videojoc sencer en marxa perquè vegin on han d'arribar.|Explica que hoy acabarán el videojuego para el observatorio. Haz el repaso de dificultad y clones con la diapositiva 3 y enseña el videojuego entero en marcha para que vean adónde tienen que llegar.",
        diu: ["Quines peces del videojoc ja sabem fer? Quines ens falten?|¿Qué piezas del videojuego ya sabemos hacer? ¿Cuáles nos faltan?",
          "Avui ens ajudarem com un equip de programadors de videojocs: uns fan, uns altres proven.|Hoy nos ayudaremos como un equipo de programadores de videojuegos: unos hacen, otros prueban."],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Les peces del videojoc|Las piezas del videojuego", fase: 'teoria',
        fa: "Presenta les sis peces amb l'animació i el videojoc sencer amb la demo. Atura't als xocs: el clon que toca la nau resta una vida i s'esborra. Explica la fi de partida i la idea de construir i provar tros a tros.|Presenta las seis piezas con la animación y el videojuego entero con la demo. Párate en los choques: el clon que toca la nave resta una vida y se borra. Explica el fin de partida y la idea de construir y probar trozo a trozo.",
        diu: ["Si el clon no s'esborra després de tocar la nau, quantes vides treu?|Si el clon no se borra después de tocar la nave, ¿cuántas vidas quita?",
          "Per què és millor provar cada peça abans de fer la següent?|¿Por qué es mejor probar cada pieza antes de hacer la siguiente?"],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla en paper|El plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuix de l'escenari, regles de punts i vides, velocitat inicial, quant puja i límit, i un toc personal (fons, so, frase final). Als 6 minuts, per parelles, cadascú explica el seu pla i el company/a fa una pregunta de les targetes del provador/a.|Cada alumno/a rellena la ficha del plan: dibujo del escenario, reglas de puntos y vidas, velocidad inicial, cuánto sube y límite, y un toque personal (fondo, sonido, frase final). A los 6 minutos, por parejas, cada uno explica su plan y el compañero/a hace una pregunta de las tarjetas del probador/a.",
        diu: ["Amb quantes vides comença el teu videojoc? Per què aquest número?|¿Con cuántas vidas empieza tu videojuego? ¿Por qué este número?",
          "Quin és el teu límit de velocitat? El provaràs i el podràs canviar.|¿Cuál es tu límite de velocidad? Lo probarás y lo podrás cambiar."],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 18, t: "A l'ordinador: peça a peça|En el ordenador: pieza a pieza", fase: 'ordinador',
        fa: "Cada alumne/a fa el «Recorda», la teoria i les tres peces: la nau amb les fletxes, la fàbrica de meteorits i els xocs amb vides. Fes la pausa activa tots junts quan la majoria hi arribi. Després, el bloc que acaba la partida i la pregunta del clon que no s'esborra. Passeja i pregunta a cada alumne/a quina peça està fent i si l'ha provada.|Cada alumno/a hace el «Recuerda», la teoría y las tres piezas: la nave con las flechas, la fábrica de meteoritos y los choques con vidas. Haced la pausa activa todos juntos cuando la mayoría llegue. Después, el bloque que acaba la partida y la pregunta del clon que no se borra. Pasea y pregunta a cada alumno/a qué pieza está haciendo y si la ha probado.",
        diu: ["Quina peça estàs fent? Ja l'has provada amb «Comença»?|¿Qué pieza estás haciendo? ¿Ya la has probado con «Empieza»?",
          "Als xocs: on va el «si toca la nau», dins o fora del bucle de baixar?|En los choques: ¿dónde va el «si toca la nave», dentro o fuera del bucle de bajar?",
          "Recorda: «Comença» per provar amb les fletxes, «Comprova» perquè les tecles es premin soles.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para que las teclas se pulsen solas."],
        slides: ['s10', 's11'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les quatre targetes de «Descobreix», ordenar les peces, «El pla en paper» (ja fet: «Ho hem fet!»), les peces 1 a 3, la pausa activa, el bloc que acaba la partida i la pregunta del clon que no s'esborra.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cuatro tarjetas de «Descubre», ordenar las piezas, «El plan en papel» (ya hecho: «¡Lo hemos hecho!»), las piezas 1 a 3, la pausa activa, el bloque que acaba la partida y la pregunta del clon que no se borra.", org: "Individual|Individual" },
      { min: 12, t: "Crea i prova creuada|Crea y prueba cruzada", fase: 'crea',
        fa: "Cada alumne/a completa el seu videojoc al pas «Crea»: velocitat variable, límit i fi de partida, i hi posa el seu toc personal. Quan l'app el dona per bo, el desa. Després, les parelles canvien d'ordinador: cadascú prova el videojoc de l'altre dues vegades, sense ajuda, i respon la valoració. Torneu al lloc i que cadascú faci un canvi a partir del que li han dit.|Cada alumno/a completa su videojuego en el paso «Crea»: velocidad variable, límite y fin de partida, y le pone su toque personal. Cuando la app lo da por bueno, lo guarda. Después, las parejas cambian de ordenador: cada uno prueba el videojuego del otro dos veces, sin ayuda, y responde la valoración. Volved al sitio y que cada uno haga un cambio a partir de lo que le han dicho.",
        diu: ["Quan provis el videojoc del company/a, l'autor/a mira i no diu res: és la prova de veritat.|Cuando pruebes el videojuego del compañero/a, el autor/a mira y no dice nada: es la prueba de verdad.",
          "Digues una cosa que t'ha agradat i una que milloraries.|Di una cosa que te ha gustado y una que mejorarías.",
          "Què canviaràs del teu videojoc amb el que t'han dit?|¿Qué cambiarás de tu videojuego con lo que te han dicho?"],
        slides: ['s12', 's13'], app: "Passos «Crea» (Esquiva els meteorits, es desa als projectes) i la valoració del videojoc del company/a.|Pasos «Crea» (Esquiva los meteoritos, se guarda en los proyectos) y la valoración del videojuego del compañero/a.", org: "Individual i després per parelles creuades|Individual y después por parejas cruzadas" },
      { min: 8, t: "Mostra, tancament i tiquet|Muestra, cierre y ticket", fase: 'tancament',
        fa: "Projecta dos o tres videojocs voluntaris: l'autor/a explica una peça i un canvi que ha fet després de la prova. Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Proyecta dos o tres videojuegos voluntarios: el autor/a explica una pieza y un cambio que ha hecho después de la prueba. Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: ["Quin canvi has fet després que el provés el company/a?|¿Qué cambio has hecho después de que lo probara el compañero/a?",
          "Quina part de la unitat t'ha costat més: l'atzar, els clons o la dificultat?|¿Qué parte de la unidad te ha costado más: el azar, los clones o la dificultad?"],
        slides: ['s14', 's15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Ho vol programar tot de cop i, quan no funciona, no sap on és l'error.|Lo quiere programar todo de golpe y, cuando no funciona, no sabe dónde está el error.",
        "Que torni a la fitxa del pla i marqui quines peces ja funcionen. Que provi les peces una a una (pot amagar les altres de moment).|Que vuelva a la ficha del plan y marque qué piezas ya funcionan. Que pruebe las piezas una a una (puede esconder las otras de momento)."],
      ["Quan un meteorit toca la nau, perd totes les vides de cop.|Cuando un meteorito toca la nave, pierde todas las vidas de golpe.",
        "Pregunta què fa el clon després de restar la vida. Continua baixant i tocant? Quin bloc el treu de seguida?|Pregunta qué hace el clon después de restar la vida. ¿Sigue bajando y tocando? ¿Qué bloque lo quita enseguida?"],
      ["La partida s'acaba només començar, perquè la nau mira les vides abans que ningú les posi a 3.|La partida se acaba nada más empezar, porque la nave mira las vidas antes de que nadie las ponga en 3.",
        "Que miri quin guió posa vides a 3 i quin comprova si vides < 1. Si els dos comencen alhora, el valor de començar ha d'anar abans del bucle que comprova, al mateix guió.|Que mire qué guion pone vidas en 3 y cuál comprueba si vidas < 1. Si los dos empiezan a la vez, el valor de empezar tiene que ir antes del bucle que comprueba, en el mismo guion."],
      ["La nau surt de l'escenari per un costat i es perd.|La nave sale del escenario por un lado y se pierde.",
        "Fes-li pensar a quina x és la vora (240). Pot afegir a cada fletxa un «si x > 220, posa x a 220» o tornar-la al mig amb la bandera verda.|Hazle pensar en qué x está el borde (240). Puede añadir en cada flecha un «si x > 220, pon x a 220» o devolverla al centro con la bandera verde."],
      ["Com a provador/a, diu només «m'agrada» o «és dolent».|Como probador/a, dice solo «me gusta» o «es malo».",
        "Dona-li les targetes del provador/a: què has fet primer? On t'has encallat? Què canviaries? Recorda que una opinió útil diu el perquè.|Dale las tarjetas del probador/a: ¿qué has hecho primero? ¿Dónde te has atascado? ¿Qué cambiarías? Recuerda que una opinión útil dice el porqué."]
    ],
    diff: {
      mes: "Afegir una segona fàbrica de clons: estrelles que cauen més a poc a poc i, si la nau les toca, sumen una vida (com a molt 5). O un missatge de «Nivell 2!» quan la velocitat arriba al límit. Després, demanar a dues persones que el provin i comparar-ne les respostes.|Añadir una segunda fábrica de clones: estrellas que caen más despacio y, si la nave las toca, suman una vida (como mucho 5). O un mensaje de «¡Nivel 2!» cuando la velocidad llega al límite. Después, pedir a dos personas que lo prueben y comparar sus respuestas.",
      menys: "Fer les peces amb la fitxa del pla al costat i marcar cada peça quan funcioni. Al pas «Crea», fer primer només la velocitat variable i la fi de partida, i deixar el límit per al final amb ajuda. A la prova creuada, fer de provador/a amb les targetes a la mà.|Hacer las piezas con la ficha del plan al lado y marcar cada pieza cuando funcione. En el paso «Crea», hacer primero solo la velocidad variable y el fin de partida, y dejar el límite para el final con ayuda. En la prueba cruzada, hacer de probador/a con las tarjetas en la mano."
    },
    aval: {
      ticket: ["Digues les peces del teu videojoc en ordre.|Di las piezas de tu videojuego en orden.",
        "Què has canviat després que el provés el company/a, i per què?|¿Qué has cambiado después de que lo probara el compañero/a, y por qué?"],
      rubric: [
        ["El videojoc funciona|El videojuego funciona", "Nau, meteorits a l'atzar, xocs amb vides, punts, velocitat amb límit i fi de partida funcionen junts.|Nave, meteoritos al azar, choques con vidas, puntos, velocidad con límite y fin de partida funcionan juntos.", "Funcionen la nau i els meteorits, però falta o falla alguna regla (vides, límit o fi).|Funcionan la nave y los meteoritos, pero falta o falla alguna regla (vidas, límite o fin)."],
        ["Construir tros a tros|Construir trozo a trozo", "Prova cada peça abans de la següent i troba ell/a mateix/a on és un error.|Prueba cada pieza antes de la siguiente y encuentra él/ella mismo/a dónde está un error.", "Programa diverses peces de cop i necessita ajuda per trobar on falla.|Programa varias piezas de golpe y necesita ayuda para encontrar dónde falla."],
        ["Provar i millorar|Probar y mejorar", "Dona una valoració amable i amb el perquè, i fa un canvi al seu videojoc a partir de la que rep.|Da una valoración amable y con el porqué, y hace un cambio en su videojuego a partir de la que recibe.", "Prova el videojoc del company/a, però la valoració és molt general o no canvia res del seu.|Prueba el videojuego del compañero/a, pero la valoración es muy general o no cambia nada del suyo."]
      ]
    },
    casa: "A casa, ensenyeu el videojoc a algú de la família (és als projectes de l'app). Mireu-lo provar sense ajudar-lo i pregunteu-li què ha estat massa fàcil o massa difícil. Si voleu, canvieu el límit de velocitat o les vides.|En casa, enseñad el videojuego a alguien de la familia (está en los proyectos de la app). Miradlo probar sin ayudarle y preguntadle qué ha sido demasiado fácil o demasiado difícil. Si queréis, cambiad el límite de velocidad o las vidas.",
    slides: [
      { id: 's1', k: 'portada', t: "Projecte: esquiva els meteorits|Proyecto: esquiva los meteoritos", x: "Avui acabem el videojoc per a la Nit de les Estrelles.|Hoy acabamos el videojuego para la Noche de las Estrellas.",
        nota: "Objectiu: cada alumne/a desarà el seu videojoc i un company/a el provarà.|Objetivo: cada alumno/a guardará su videojuego y un compañero/a lo probará." },
      { id: 's2', k: 'pregunta', t: "Què ja sabem fer?|¿Qué ya sabemos hacer?", punts: ["Moure la nau amb les fletxes|Mover la nave con las flechas", "Clons a l'atzar|Clones al azar", "Punts i vides|Puntos y vidas", "Velocitat que creix|Velocidad que crece"],
        nota: "Que diguin en quina sessió van aprendre cada cosa (unitat 3, 6 i aquesta unitat).|Que digan en qué sesión aprendieron cada cosa (unidad 3, 6 y esta unidad)." },
      { id: 's3', k: 'repas', t: "Recordem|Recordemos", punts: ["Velocitat 4, suma 1, límit 12: després de 20 meteorits, 12.|Velocidad 4, suma 1, límite 12: después de 20 meteoritos, 12.", "La fàbrica s'amaga; el clon es mostra quan és al seu lloc.|La fábrica se esconde; el clon se muestra cuando está en su sitio.", "Al final, el clon s'esborra.|Al final, el clon se borra."],
        nota: "Dues preguntes ràpides a mà alçada abans de començar.|Dos preguntas rápidas a mano alzada antes de empezar." },
      { id: 's4', k: 'anim', t: "Les peces del videojoc|Las piezas del videojuego", anim: 'g7pla', x: "Fes una peça, prova-la… i la següent!|Haz una pieza, pruébala… ¡y la siguiente!",
        nota: "Escriu les sis peces a la pissarra; durant la sessió, demana a qui vagi acabant que les vagi marcant a la seva fitxa.|Escribe las seis piezas en la pizarra; durante la sesión, pide a quien vaya acabando que las vaya marcando en su ficha." },
      { id: 's5', k: 'concepte', t: "Les regles del videojoc|Las reglas del videojuego", punts: ["Fletxes: la nau es mou a l'esquerra i a la dreta.|Flechas: la nave se mueve a la izquierda y a la derecha.", "Meteorit esquivat (arriba a baix): +1 punt.|Meteorito esquivado (llega abajo): +1 punto.", "Meteorit que toca la nau: −1 vida.|Meteorito que toca la nave: −1 vida.", "Sense vides: «Fi!» i s'atura tot.|Sin vidas: «¡Fin!» y se para todo."],
        nota: "Deixa-la projectada mentre omplen el pla en paper.|Déjala proyectada mientras rellenan el plan en papel." },
      { id: 's6', k: 'media', t: "Així queda el videojoc|Así queda el videojuego", x: "Aquí la nau es mou sola; al vostre, amb les fletxes.|Aquí la nave se mueve sola; en el vuestro, con las flechas.",
        media: { k: 'stage', w: GW, prog: GAME, varNames: VN, time: 14 },
        nota: "Fes notar els números de punts, vides i velocitat. Pregunta quan creuen que s'acabarà.|Haz notar los números de puntos, vidas y velocidad. Pregunta cuándo creen que se acabará." },
      { id: 's7', k: 'concepte', t: "Compte amb els xocs!|¡Cuidado con los choques!", punts: ["El «si toca la nau» va dins del bucle de baixar.|El «si toca la nave» va dentro del bucle de bajar.", "Si la toca: vides −1, so i esborra aquest clon.|Si la toca: vidas −1, sonido y borra este clon.", "Si no s'esborra, treu una vida a cada pas!|Si no se borra, ¡quita una vida a cada paso!"],
        nota: "Simula-ho: camina tocant una cadira i resta una vida a cada pas en veu alta. Riuran, i no se n'oblidaran.|Simúlalo: camina tocando una silla y resta una vida a cada paso en voz alta. Se reirán, y no se les olvidará." },
      { id: 's8', k: 'activitat', t: "El pla en paper|El plan en papel", timer: 10, punts: ["Dibuixa l'escenari: la nau i per on cauen els meteorits.|Dibuja el escenario: la nave y por dónde caen los meteoritos.", "Regles: punts, vides i fi.|Reglas: puntos, vidas y fin.", "Dificultat: velocitat inicial, quant puja i límit.|Dificultad: velocidad inicial, cuánto sube y límite.", "El teu toc: fons, so, frase final…|Tu toque: fondo, sonido, frase final…"],
        nota: "Als 6 minuts, que expliquin el pla per parelles amb una pregunta de les targetes del provador/a.|A los 6 minutos, que expliquen el plan por parejas con una pregunta de las tarjetas del probador/a." },
      { id: 's9', k: 'pregunta', t: "Preguntes per al pla|Preguntas para el plan", punts: ["Amb quantes vides comença? Per què?|¿Con cuántas vidas empieza? ¿Por qué?", "Quin límit de velocitat posaràs?|¿Qué límite de velocidad pondrás?", "Què el farà diferent dels altres?|¿Qué lo hará diferente de los demás?"],
        nota: "No hi ha respostes bones o dolentes: les comprovaran quan el provin.|No hay respuestas buenas o malas: las comprobarán cuando lo prueben." },
      { id: 's10', k: 'activitat', t: "Peça a peça|Pieza a pieza", timer: 18, punts: ["Peça 1: la nau amb les fletxes.|Pieza 1: la nave con las flechas.", "Peça 2: la fàbrica de meteorits.|Pieza 2: la fábrica de meteoritos.", "Peça 3: els xocs i les vides.|Pieza 3: los choques y las vidas.", "Després: el bloc que acaba la partida.|Después: el bloque que acaba la partida."],
        nota: "A la pausa activa, feu-la tots junts. Passeja preguntant «quina peça fas i l'has provada?».|En la pausa activa, hacedla todos juntos. Pasea preguntando «¿qué pieza haces y la has probado?»." },
      { id: 's11', k: 'repte', t: "Prova cada peça|Prueba cada pieza", punts: ["«Comença»: prova-ho tu amb les fletxes.|«Empieza»: pruébalo tú con las flechas.", "«Comprova»: les tecles es premen soles.|«Comprueba»: las teclas se pulsan solas.", "Si falla, mira només la peça nova.|Si falla, mira solo la pieza nueva."],
        nota: "Si algú s'encalla als xocs, recorda-li la diapositiva 7.|Si alguien se atasca en los choques, recuérdale la diapositiva 7." },
      { id: 's12', k: 'activitat', t: "Crea: el teu videojoc|Crea: tu videojuego", timer: 6, punts: ["Els clons baixen amb la variable velocitat.|Los clones bajan con la variable velocidad.", "La velocitat creix amb un límit.|La velocidad crece con un límite.", "Sense vides: «Fi!» i atura tot.|Sin vidas: «¡Fin!» y para todo.", "Hi poses el teu toc i el desas.|Le pones tu toque y lo guardas."],
        nota: "L'app comprova que hi hagi la velocitat, el límit i la fi. La resta és lliure: anima'ls a personalitzar-lo.|La app comprueba que estén la velocidad, el límite y el fin. El resto es libre: anímalos a personalizarlo." },
      { id: 's13', k: 'activitat', t: "Prova creuada|Prueba cruzada", timer: 6, punts: ["Canvieu d'ordinador amb la vostra parella.|Cambiad de ordenador con vuestra pareja.", "Prova el videojoc dues vegades, sense ajuda.|Prueba el videojuego dos veces, sin ayuda.", "Respon la valoració amb sinceritat i amabilitat.|Responde la valoración con sinceridad y amabilidad.", "Torna al teu lloc i fes un canvi.|Vuelve a tu sitio y haz un cambio."],
        nota: "L'autor/a mira sense parlar: és la part més difícil i la més útil.|El autor/a mira sin hablar: es la parte más difícil y la más útil." },
      { id: 's14', k: 'media', t: "Mostra de videojocs|Muestra de videojuegos", x: "Dos o tres voluntaris ensenyen el seu videojoc i un canvi que hi han fet.|Dos o tres voluntarios enseñan su videojuego y un cambio que le han hecho.",
        media: { k: 'stage', w: GW, prog: GAME, varNames: VN, time: 14 },
        nota: "Si no hi ha voluntaris, deixa aquesta demo en marxa i comenteu-ne les peces entre tots.|Si no hay voluntarios, deja esta demo en marcha y comentad sus piezas entre todos." },
      { id: 's15', k: 'resum', t: "Què hem après a la unitat|Qué hemos aprendido en la unidad", punts: ["L'atzar fa que cada partida sigui diferent.|El azar hace que cada partida sea diferente.", "Els clons: un personatge, molts meteorits.|Los clones: un personaje, muchos meteoritos.", "La dificultat creix amb una variable i un límit.|La dificultad crece con una variable y un límite.", "Un videojoc es fa tros a tros i es prova amb altres.|Un videojuego se hace trozo a trozo y se prueba con otros."],
        nota: "Anuncia la unitat 8: cadascú inventarà el seu propi videojoc des de zero.|Anuncia la unidad 8: cada uno inventará su propio videojuego desde cero." },
      { id: 's16', k: 'tiquet', t: "Tiquet de sortida|Ticket de salida", punts: ["Les peces del teu videojoc, en ordre.|Las piezas de tu videojuego, en orden.", "Què has canviat després de la prova, i per què?|¿Qué has cambiado después de la prueba, y por qué?"],
        nota: "Guarda les fitxes del pla: seran un bon punt de partida per al projecte final.|Guarda las fichas del plan: serán un buen punto de partida para el proyecto final." }
    ],
    print: [
      { id: 'p1', t: "El pla del meu videojoc|El plan de mi videojuego", k: 'fitxa',
        intro: "Omple el pla abans de programar. Després, marca cada peça quan funcioni.|Rellena el plan antes de programar. Después, marca cada pieza cuando funcione.",
        items: [
          { q: "Dibuixa l'escenari: el fons, la nau i per on cauen els meteorits.|Dibuja el escenario: el fondo, la nave y por dónde caen los meteoritos." },
          { q: "Regles: guanyo un punt quan ________. Perdo una vida quan ________. Començo amb ___ vides. Quan no en queden, la nau diu «________».|Reglas: gano un punto cuando ________. Pierdo una vida cuando ________. Empiezo con ___ vidas. Cuando no quedan, la nave dice «________»." },
          { q: "Dificultat: la velocitat comença a ___, puja ___ a cada meteorit i el límit és ___.|Dificultad: la velocidad empieza en ___, sube ___ en cada meteorito y el límite es ___.", sol: "Per exemple: comença a 4, puja 1, límit 12.|Por ejemplo: empieza en 4, sube 1, límite 12." },
          { q: "El meu toc personal (fons, sons, colors, una frase…): ________|Mi toque personal (fondo, sonidos, colores, una frase…): ________" },
          { q: "Peces que funcionen: □ nau □ fàbrica □ xocs i vides □ punts □ velocitat amb límit □ fi de partida|Piezas que funcionan: □ nave □ fábrica □ choques y vidas □ puntos □ velocidad con límite □ fin de partida", sol: "Cada alumne/a marca les seves.|Cada alumno/a marca las suyas." }
        ] },
      { id: 'p2', t: "Targetes del provador/a|Tarjetas del probador/a", k: 'targetes',
        intro: "Una tira per parella. El provador/a les llegeix després de provar el videojoc; l'autor/a escolta sense discutir.|Una tira por pareja. El probador/a las lee después de probar el videojuego; el autor/a escucha sin discutir.",
        items: [
          { t: "Què has entès que havies de fer? 🎯|¿Qué has entendido que tenías que hacer? 🎯", n: 1 },
          { t: "On t'has encallat o t'has equivocat? 🤔|¿Dónde te has atascado o te has equivocado? 🤔", n: 1 },
          { t: "Era massa fàcil, massa difícil o just? ⚖️|¿Era demasiado fácil, demasiado difícil o justo? ⚖️", n: 1 },
          { t: "Què t'ha agradat més? ⭐|¿Qué te ha gustado más? ⭐", n: 1 },
          { t: "Què canviaries, i per què? 🔧|¿Qué cambiarías, y por qué? 🔧", n: 1 }
        ] }
    ]
  };

  return { 'g7-1': G1, 'g7-2': G2, 'g7-3': G3, 'g7-4': G4 };
})());
