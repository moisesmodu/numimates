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
    intro: "Primera sessió de la unitat de l'atzar. L'alumnat descobreix que una cosa passa a l'atzar quan ningú no pot saber abans com acabarà, i que els videojocs l'usen perquè cada partida sigui diferent. Aprèn dos blocs: el valor «atzar 1-10» (un número que es tria cada vegada que el programa hi arriba) i «ves a un lloc a l'atzar». La idea clau és que l'atzar va dins del bucle si el vols nou a cada volta, i el truc del meteorit: primer el lloc a l'atzar i després «posa y a 170». La classe té una pluja de meteorits amb daus i quatre reptes.|Primera sesión de la unidad del azar. El alumnado descubre que algo pasa al azar cuando nadie puede saber antes cómo acabará, y que los videojuegos lo usan para que cada partida sea diferente. Aprende dos bloques: el valor «azar 1-10» (un número que se elige cada vez que el programa llega a él) y «ve a un sitio al azar». La idea clave es que el azar va dentro del bucle si lo quieres nuevo en cada vuelta, y el truco del meteorito: primero el sitio al azar y después «pon y a 170». La clase tiene una lluvia de meteoritos con dados y cuatro retos.",
    claus: [
      "L'atzar és el que no es pot saber abans: el dau, la moneda, una carta.|El azar es lo que no se puede saber antes: el dado, la moneda, una carta.",
      "«Atzar 1-10» tria un número de l'1 al 10 (tots dos inclosos) cada vegada que s'hi arriba.|«Azar 1-10» elige un número del 1 al 10 (los dos incluidos) cada vez que se llega a él.",
      "Si el bloc amb l'atzar és fora del bucle, el número es tria una sola vegada.|Si el bloque con el azar está fuera del bucle, el número se elige una sola vez.",
      "Per sortir per dalt a l'atzar: «ves a un lloc a l'atzar» i després «posa y a 170».|Para salir por arriba al azar: «ve a un sitio al azar» y después «pon y a 170».",
      "Repetir un número és normal amb l'atzar: no vol dir que s'equivoqui.|Repetir un número es normal con el azar: no quiere decir que se equivoque."
    ],
    prev: [
      "Variables: «posa», «suma» i dir-les amb «digues» (unitat 6).|Variables: «pon», «suma» y decirlas con «di» (unidad 6).",
      "Coordenades x i y de l'escenari i «posa y a» (unitat 4).|Coordenadas x e y del escenario y «pon y a» (unidad 4).",
      "«Si… si no» i comparar números (unitats 5 i 6).|«Si… si no» y comparar números (unidades 5 y 6)."
    ],
    faq: [
      ["L'estrella fa sempre els mateixos salts quan torno a començar. No és a l'atzar?|La estrella hace siempre los mismos saltos cuando vuelvo a empezar. ¿No es al azar?", "Dins d'una partida no pots saber on anirà. Però, perquè la comprovació sigui justa, l'app comença sempre amb la mateixa sèrie; als reptes amb tocs o tecles, quan proves lliurement, canvia cada vegada.|Dentro de una partida no puedes saber adónde irá. Pero, para que la comprobación sea justa, la app empieza siempre con la misma serie; en los retos con toques o teclas, cuando pruebas libremente, cambia cada vez."],
      ["Pot sortir el 10 amb «atzar 1-10»? I el 0?|¿Puede salir el 10 con «azar 1-10»? ¿Y el 0?", "El 10 sí, i l'1 també. El 0, no: només surten números entre l'1 i el 10.|El 10 sí, y el 1 también. El 0, no: solo salen números entre el 1 y el 10."],
      ["Puc fer un número a l'atzar del 50 al 100?|¿Puedo hacer un número al azar del 50 al 100?", "Sí: a la finestra del número, a «o un número a l'atzar», escriu 50 i 100 i toca OK.|Sí: en la ventana del número, en «o un número al azar», escribe 50 y 100 y toca OK."],
      ["Per què el meteorit surt pel mig de l'escenari?|¿Por qué el meteorito sale por el centro del escenario?", "Perquè «ves a un lloc a l'atzar» va després de «posa y a 170» i també canvia la y. Posa'l abans.|Porque «ve a un sitio al azar» va después de «pon y a 170» y también cambia la y. Ponlo antes."],
      ["Ha sortit el mateix número dues vegades seguides: està espatllat?|Ha salido el mismo número dos veces seguidas: ¿está estropeado?", "No: amb un dau de veritat també passa. L'atzar no recorda què ha sortit abans.|No: con un dado de verdad también pasa. El azar no recuerda qué ha salido antes."],
      ["Al cara o creu, per què «tirada > 5»?|En el cara o cruz, ¿por qué «tirada > 5»?", "De l'1 al 10 hi ha cinc números més grans que 5 (6, 7, 8, 9, 10) i cinc que no (1 a 5): així cara i creu tenen les mateixes possibilitats.|Del 1 al 10 hay cinco números mayores que 5 (6, 7, 8, 9, 10) y cinco que no (1 a 5): así cara y cruz tienen las mismas posibilidades."]
    ],
    tec: [
      ["L'atzar fa sempre el mateix camí quan toquen «Comença».|El azar hace siempre el mismo camino cuando tocan «Empieza».", "És normal: per comprovar els reptes de manera justa, l'app fa servir sempre la mateixa sèrie d'atzar. Als reptes amb tecles o tocs, quan es prova lliurement amb «Comença», l'atzar canvia cada vegada.|Es normal: para comprobar los retos de forma justa, la app usa siempre la misma serie de azar. En los retos con teclas o toques, cuando se prueba libremente con «Empieza», el azar cambia cada vez."],
      ["No troben el valor «atzar» en tocar un número.|No encuentran el valor «azar» al tocar un número.", "Surt a la finestra del número, a «o un valor» (atzar 1-10) i a «o un número a l'atzar», on es pot escriure de quin a quin. Només surt als reptes que el fan servir.|Sale en la ventana del número, en «o un valor» (azar 1-10) y en «o un número al azar», donde se puede escribir de cuál a cuál. Solo sale en los retos que lo usan."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No hi ha prou daus per a tots els grups.|No hay suficientes dados para todos los grupos.", "Sis papers numerats doblegats dins d'una bossa fan el mateix servei (cal tornar-los a posar a la bossa després de cada tirada).|Seis papeles numerados doblados dentro de una bolsa hacen el mismo servicio (hay que volver a meterlos en la bolsa después de cada tirada)."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Daus: es tiren sobre la taula, no per l'aire. Si l'activitat genera competència, recorda que amb l'atzar ningú no té mèrit ni culpa.|Dados: se tiran sobre la mesa, no por el aire. Si la actividad genera competencia, recuerda que con el azar nadie tiene mérito ni culpa."
    ],
    extra: [
      "Fer un dau digital: en tocar el dau (una moneda o una estrella), posar tirada a atzar 1-6 i dir-la.|Hacer un dado digital: al tocar el dado (una moneda o una estrella), poner tirada a azar 1-6 y decirla.",
      "Llançar la moneda digital 20 vegades i comptar quantes cares i quantes creus surten. Són iguals?|Lanzar la moneda digital 20 veces y contar cuántas caras y cuántas cruces salen. ¿Son iguales?",
      "Fer que una nau es mogui amb «mou-te atzar 1-10 passos» i fer una cursa amb la nau d'un company/a.|Hacer que una nave se mueva con «muévete azar 1-10 pasos» y hacer una carrera con la nave de un compañero/a."
    ],
    trans: [
      "Ve de la unitat 6: les variables ara poden guardar un número a l'atzar.|Viene de la unidad 6: las variables ahora pueden guardar un número al azar.",
      "Sessió següent: els clons, per fer una pluja de molts meteorits amb un sol personatge.|Sesión siguiente: los clones, para hacer una lluvia de muchos meteoritos con un solo personaje.",
      "Matemàtiques: probabilitat i atzar (segur, possible, impossible) i recompte de dades en una taula.|Matemáticas: probabilidad y azar (seguro, posible, imposible) y recuento de datos en una tabla."
    ],
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
        diu: [
          "Si un videojoc fa sempre exactament el mateix, què passa a la tercera partida? (ja te l'aprens i avorreix)|Si un videojuego hace siempre exactamente lo mismo, ¿qué pasa en la tercera partida? (ya te lo aprendes y aburre)",
          "Qui recorda on és x = 200 a l'escenari? (a prop de la vora dreta)|¿Quién recuerda dónde está x = 200 en el escenario? (cerca del borde derecho)",
          "Quin bloc fa pujar 1 punt el marcador? (suma a punts 1)|¿Qué bloque hace subir 1 punto el marcador? (suma a puntos 1)",
          "Avui aprendrem a fer que l'ordinador ens sorprengui.|Hoy aprenderemos a hacer que el ordenador nos sorprenda."
        ],
        slides: ['s1', 's2', 's3', 's4'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és l'atzar? Dos blocs nous|¿Qué es el azar? Dos bloques nuevos", fase: 'teoria',
        fa: "Tira un dau davant la classe i demana que endevinin el número abans: ningú no pot saber-ho. Explica el valor «atzar 1-10» amb l'animació i després «ves a un lloc a l'atzar» amb la demo de l'estrella. Amb la demo del meteorit, fes notar l'ordre: primer el lloc a l'atzar i després «posa y a 170». Acaba amb el «compte!»: l'atzar dins del bucle.|Tira un dado delante de la clase y pide que adivinen el número antes: nadie puede saberlo. Explica el valor «azar 1-10» con la animación y después «ve a un sitio al azar» con la demo de la estrella. Con la demo del meteorito, haz notar el orden: primero el sitio al azar y después «pon y a 170». Acaba con el «¡cuidado!»: el azar dentro del bucle.",
        diu: [
          "Qui sap quin número sortirà? (ningú: això és l'atzar)|¿Quién sabe qué número saldrá? (nadie: eso es el azar)",
          "Amb «atzar 1-10», pot sortir l'1? I el 10? (sí, tots dos)|Con «azar 1-10», ¿puede salir el 1? ¿Y el 10? (sí, los dos)",
          "On sortirà l'estrella la propera vegada? Assenyaleu-ho… i mirem qui l'encerta.|¿Dónde saldrá la estrella la próxima vez? Señaladlo… y miremos quién la acierta.",
          "Si «ves a un lloc a l'atzar» anés després de «posa y a 170», on podria sortir el meteorit? (en qualsevol lloc, també al mig)|Si «ve a un sitio al azar» fuera después de «pon y a 170», ¿dónde podría salir el meteorito? (en cualquier sitio, también en el centro)",
          "Si tries el número abans del bucle, canvia a cada volta? (no)|Si eliges el número antes del bucle, ¿cambia en cada vuelta? (no)"
        ],
        slides: ['s5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La pluja de meteorits amb daus|La lluvia de meteoritos con dados", fase: 'desconnectat',
        fa: "Grups de 3 o 4 amb un dau, una fitxa (la nau) i la graella. Papers: el llançador/a fa d'ordinador i tira el dau (el número és la columna on cau el meteorit), el pilot/a posa la nau en una columna abans de cada tirada i l'anotador/a marca una creu a la fila de la ronda. Si el meteorit cau a la columna de la nau, el pilot perd una vida. Després de 8 rondes, roten els papers. Al final, sumeu a la pissarra quantes vegades ha caigut a cada columna entre tots els grups.|Grupos de 3 o 4 con un dado, una ficha (la nave) y la cuadrícula. Papeles: el lanzador/a hace de ordenador y tira el dado (el número es la columna donde cae el meteorito), el piloto/a pone la nave en una columna antes de cada tirada y el anotador/a marca una cruz en la fila de la ronda. Si el meteorito cae en la columna de la nave, el piloto pierde una vida. Después de 8 rondas, rotan los papeles. Al final, sumad en la pizarra cuántas veces ha caído en cada columna entre todos los grupos.",
        diu: [
          "El pilot/a pot saber on caurà el proper meteorit? Per què? (no: depèn del dau)|¿El piloto/a puede saber dónde caerá el próximo meteorito? ¿Por qué? (no: depende del dado)",
          "Ha caigut alguna vegada dues vegades seguides a la mateixa columna? Pot passar!|¿Ha caído alguna vez dos veces seguidas en la misma columna? ¡Puede pasar!",
          "Si sumem tots els grups, totes les columnes en tenen uns quants: cap columna no és més «afortunada».|Si sumamos todos los grupos, todas las columnas tienen unos cuantos: ninguna columna es más «afortunada».",
          "El llançador/a és com l'ordinador: tria el número. El pilot/a, com la nau del videojoc.|El lanzador/a es como el ordenador: elige el número. El piloto/a, como la nave del videojuego."
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 3 o 4 amb papers que roten|Grupos de 3 o 4 con papeles que rotan" },
      { min: 15, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança al seu ritme fins a la pausa activa. Al pas «El dau dels moviments», que toquin «Ara no» si no hi ha dau a l'aula: el faran a casa. A la cursa de naus, demana que expliquin amb paraules per què la nau de baix va a batzegades.|Cada alumno/a avanza a su ritmo hasta la pausa activa. En el paso «El dado de los movimientos», que toquen «Ahora no» si no hay dado en el aula: lo harán en casa. En la carrera de naves, pide que expliquen con palabras por qué la nave de abajo va a trompicones.",
        diu: [
          "L'estrella torna mai al mateix lloc? Com ho sabries?|¿La estrella vuelve alguna vez al mismo sitio? ¿Cómo lo sabrías?",
          "Quin bloc fa que la nau de baix canviï de velocitat a cada pas? (mou-te atzar 1-10 passos)|¿Qué bloque hace que la nave de abajo cambie de velocidad a cada paso? (muévete azar 1-10 pasos)",
          "Pot sortir un 12 amb «atzar 1-10»? I un 10? (el 12 no; el 10 sí)|¿Puede salir un 12 con «azar 1-10»? ¿Y un 10? (el 12 no; el 10 sí)"
        ],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les dues preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta del dau, «El dau dels moviments», l'estrella que salta, la cursa de naus i la pregunta del número 12.|De «Recuerda» hasta «Investiga»: las dos preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta del dado, «El dado de los movimientos», la estrella que salta, la carrera de naves y la pregunta del número 12.", org: "Individual|Individual" },
      { min: 10, t: "Pausa activa i reptes|Pausa activa y retos", fase: 'ordinador',
        fa: "Feu la pausa activa tots junts. Després, els quatre reptes: l'estrella que salta per les quatre parts del cel, el número de la sort d'en Numi, cara o creu i el meteorit que ha de caure per llocs diferents. Als reptes amb tocs, recorda que «Comença» és per provar lliurement i «Comprova» fa els tocs sols.|Haced la pausa activa todos juntos. Después, los cuatro retos: la estrella que salta por las cuatro partes del cielo, el número de la suerte de Numi, cara o cruz y el meteorito que tiene que caer por sitios diferentes. En los retos con toques, recuerda que «Empieza» es para probar libremente y «Comprueba» hace los toques solos.",
        diu: [
          "L'estrella ha de passar per les quatre parts del cel: per què cal un «per sempre»? (perquè salti moltes vegades)|La estrella tiene que pasar por las cuatro partes del cielo: ¿por qué hace falta un «por siempre»? (para que salte muchas veces)",
          "Al cara o creu, quins números fan dir «Cara!»? Compta'ls: n'hi ha tants com de «Creu!»? (6 a 10 i 1 a 5: cinc i cinc)|En el cara o cruz, ¿qué números hacen decir «¡Cara!»? Cuéntalos: ¿hay tantos como de «¡Cruz!»? (6 a 10 y 1 a 5: cinco y cinco)",
          "El meteorit cau sempre pel mig. Quin bloc li falta, i on va? (ves a un lloc a l'atzar, abans de posa y a 170)|El meteorito cae siempre por el centro. ¿Qué bloque le falta, y dónde va? (ve a un sitio al azar, antes de pon y a 170)",
          "Si ajudes un company/a, fes-li preguntes: no li toquis el ratolí.|Si ayudas a un compañero/a, hazle preguntas: no le toques el ratón."
        ],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva nit d'estrelles|Crea: mi noche de estrellas", fase: 'crea',
        fa: "Cada alumne/a crea la seva nit: almenys un personatge amb l'atzar dins d'un bucle. Quan la tinguin, la desen al portafoli i l'ensenyen al company/a del costat, que ha d'endevinar quin personatge fa servir l'atzar.|Cada alumno/a crea su noche: al menos un personaje con el azar dentro de un bucle. Cuando la tengan, la guardan en el portafolio y la enseñan al compañero/a de al lado, que tiene que adivinar qué personaje usa el azar.",
        diu: [
          "Quin dels teus personatges és el sorprenent? Per què?|¿Cuál de tus personajes es el sorprendente? ¿Por qué?",
          "On és el teu bloc amb l'atzar: dins o fora del bucle? (dins)|¿Dónde está tu bloque con el azar: dentro o fuera del bucle? (dentro)",
          "Hi pots afegir un número a l'atzar, a més d'un lloc?|¿Puedes añadirle un número al azar, además de un sitio?"
        ],
        slides: ['s14'], app: "Pas «Crea»: La meva nit d'estrelles (es desa als projectes).|Paso «Crea»: Mi noche de estrellas (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa les tres idees amb el resum. Deixa que responguin les preguntes finals i com s'han sentit, i fes a cada alumne/a una pregunta del tiquet a la porta.|Repasa las tres ideas con el resumen. Deja que respondan las preguntas finales y cómo se han sentido, y haz a cada alumno/a una pregunta del ticket en la puerta.",
        diu: [
          "Digues una cosa de la vida que passi a l'atzar. (el dau, la moneda, el temps que farà…)|Di una cosa de la vida que pase al azar. (el dado, la moneda, el tiempo que hará…)",
          "On ha d'anar el bloc amb l'atzar perquè canviï a cada volta? (dins del bucle)|¿Dónde tiene que ir el bloque con el azar para que cambie en cada vuelta? (dentro del bucle)",
          "Quins dos blocs fan sortir el meteorit per dalt a l'atzar? (ves a un lloc a l'atzar i posa y a 170)|¿Qué dos bloques hacen salir el meteorito por arriba al azar? (ve a un sitio al azar y pon y a 170)"
        ],
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
        "Recorda la pluja de daus: també hi va haver repeticions. Amb l'atzar, repetir és normal; el que no es pot és endevinar-ho.|Recuerda la lluvia de dados: también hubo repeticiones. Con el azar, repetir es normal; lo que no se puede es adivinarlo."],
      ["Escriu el número a mà (per exemple, 7) en lloc de triar l'atzar, i en Numi diu sempre el mateix.|Escribe el número a mano (por ejemplo, 7) en lugar de elegir el azar, y Numi dice siempre lo mismo.", "Pregunta: qui ha triat aquest 7, tu o l'ordinador? Que toqui el número i triï «atzar 1-10» a «o un valor».|Pregunta: ¿quién ha elegido este 7, tú o el ordenador? Que toque el número y elija «azar 1-10» en «o un valor»."]
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
        ["Lloc a l'atzar|Sitio al azar", "Fa sortir el meteorit per dalt en una x a l'atzar, amb els blocs en l'ordre bo i dins el bucle.|Hace salir el meteorito por arriba en una x al azar, con los bloques en el orden correcto y dentro del bucle.", "Fa servir «ves a un lloc a l'atzar», però s'equivoca d'ordre o el posa fora del bucle.|Usa «ve a un sitio al azar», pero se equivoca de orden o lo pone fuera del bucle."],
        [
          "Raonar amb l'atzar|Razonar con el azar",
          "Explica que no pot endevinar cada tirada, però que amb moltes tirades surten tots els números.|Explica que no puede adivinar cada tirada, pero que con muchas tiradas salen todos los números.",
          "Creu que hi ha números «de la sort» o que l'atzar s'equivoca quan repeteix.|Cree que hay números «de la suerte» o que el azar se equivoca cuando repite."
        ]
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
        nota: "Explica que en quatre sessions faran el videojoc «Esquiva els meteorits»: avui, la peça de l'atzar.|Explica que en cuatro sesiones harán el videojuego «Esquiva los meteoritos»: hoy, la pieza del azar.", pic: "img/ment/vel.webp" },
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
    intro: "Segona sessió de la unitat: els clons. Un clon és una còpia d'un personatge que el mateix personatge crea mentre el programa funciona. Cada clon fa pel seu compte el guió «quan començo com a clon»: neix on és l'original (i com ell, també amagat), així que s'ha de moure i mostrar. Quan ha acabat, «esborra aquest clon» el treu perquè l'escenari no s'ompli (n'aguanta 40). L'alumnat veu la fàbrica de meteorits, fa de clon en una fàbrica humana i programa quatre reptes i una pluja pròpia.|Segunda sesión de la unidad: los clones. Un clon es una copia de un personaje que el mismo personaje crea mientras el programa funciona. Cada clon hace por su cuenta el guion «al empezar como clon»: nace donde está el original (y como él, también escondido), así que se tiene que mover y mostrar. Cuando ha terminado, «borra este clon» lo quita para que el escenario no se llene (aguanta 40). El alumnado ve la fábrica de meteoritos, hace de clon en una fábrica humana y programa cuatro retos y una lluvia propia.",
    claus: [
      "Un clon és una còpia que fa el mateix personatge amb «crea un clon de mi».|Un clon es una copia que hace el mismo personaje con «crea un clon de mí».",
      "Cada clon fa el guió «quan començo com a clon», pel seu compte.|Cada clon hace el guion «al empezar como clon», por su cuenta.",
      "Un clon neix on és l'original i com és l'original (també si està amagat).|Un clon nace donde está el original y como es el original (también si está escondido).",
      "Mateix guió + atzar = clons diferents.|Mismo guion + azar = clones diferentes.",
      "«Esborra aquest clon» quan ja no serveix, perquè l'escenari no s'ompli.|«Borra este clon» cuando ya no sirve, para que el escenario no se llene."
    ],
    prev: [
      "«Ves a un lloc a l'atzar» i «posa y a 170» (sessió anterior).|«Ve a un sitio al azar» y «pon y a 170» (sesión anterior).",
      "Els bucles «per sempre», «repeteix» i «repeteix fins que» (unitats 2 i 4).|Los bucles «por siempre», «repite» y «repite hasta que» (unidades 2 y 4).",
      "Amagar-se i mostrar-se, i el guió «quan toco aquest personatge» (unitats 1 i 3).|Esconderse y mostrarse, y el guion «al tocar este personaje» (unidades 1 y 3)."
    ],
    faq: [
      ["He fet clons i no en veig cap!|¡He hecho clones y no veo ninguno!", "Neixen exactament on és l'original, a sota seu. Mou-los al guió «quan començo com a clon» (per exemple, a un lloc a l'atzar). Si l'original està amagat, cal «mostra't».|Nacen exactamente donde está el original, debajo de él. Muévelos en el guion «al empezar como clon» (por ejemplo, a un sitio al azar). Si el original está escondido, hace falta «muéstrate»."],
      ["Quants clons puc fer?|¿Cuántos clones puedo hacer?", "Fins a 40 alhora. Si no els esborres, quan n'hi ha 40 ja no en surten més: per això cal «esborra aquest clon».|Hasta 40 a la vez. Si no los borras, cuando hay 40 ya no salen más: por eso hace falta «borra este clon»."],
      ["Els clons també fan el guió de la bandera verda?|¿Los clones también hacen el guion de la bandera verde?", "No: el de la bandera verda només el fa l'original. Els clons fan «quan començo com a clon» i, si els toques, «quan toco aquest personatge».|No: el de la bandera verde solo lo hace el original. Los clones hacen «al empezar como clon» y, si los tocas, «al tocar este personaje»."],
      ["Per què la fàbrica s'amaga?|¿Por qué la fábrica se esconde?", "Perquè no volem veure el meteorit original quiet a dalt: només fa clons. Per això cada clon fa «mostra't» quan ja és al seu lloc.|Porque no queremos ver el meteorito original quieto arriba: solo hace clones. Por eso cada clon hace «muéstrate» cuando ya está en su sitio."],
      ["Quan toco una estrella, qui suma el punt?|Cuando toco una estrella, ¿quién suma el punto?", "El clon que has tocat: fa el guió «quan toco aquest personatge» i després s'esborra ell sol.|El clon que has tocado: hace el guion «al tocar este personaje» y después se borra él solo."],
      ["Un clon pot fer clons?|¿Un clon puede hacer clones?", "Sí, però llavors se'n fan molts de cop i l'escenari s'omple. Millor que només l'original faci clons.|Sí, pero entonces se hacen muchos de golpe y el escenario se llena. Mejor que solo el original haga clones."]
    ],
    tec: [
      ["L'atzar fa sempre el mateix camí quan toquen «Comença».|El azar hace siempre el mismo camino cuando tocan «Empieza».", "És normal: per comprovar els reptes de manera justa, l'app fa servir sempre la mateixa sèrie d'atzar. Als reptes amb tecles o tocs, quan es prova lliurement amb «Comença», l'atzar canvia cada vegada.|Es normal: para comprobar los retos de forma justa, la app usa siempre la misma serie de azar. En los retos con teclas o toques, cuando se prueba libremente con «Empieza», el azar cambia cada vez."],
      ["No troben el valor «atzar» en tocar un número.|No encuentran el valor «azar» al tocar un número.", "Surt a la finestra del número, a «o un valor» (atzar 1-10) i a «o un número a l'atzar», on es pot escriure de quin a quin. Només surt als reptes que el fan servir.|Sale en la ventana del número, en «o un valor» (azar 1-10) y en «o un número al azar», donde se puede escribir de cuál a cuál. Solo sale en los retos que lo usan."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No troben el guió «quan començo com a clon».|No encuentran el guion «al empezar como clon».", "Als reptes de clons, cada personatge té les capçaleres «quan comença» i «quan començo com a clon» a la zona de guions: toqueu dins del guió del clon abans d'afegir blocs.|En los retos de clones, cada personaje tiene las cabeceras «al empezar» y «al empezar como clon» en la zona de guiones: tocad dentro del guion del clon antes de añadir bloques."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Fàbrica humana: es camina, no es corre; el rectangle de cinta ha de ser en un lloc sense obstacles i ningú no empeny per entrar-hi.|Fábrica humana: se camina, no se corre; el rectángulo de cinta tiene que estar en un sitio sin obstáculos y nadie empuja para entrar."
    ],
    extra: [
      "Fer una pluja amb dos tipus de clons: estrelles que pugen i meteorits que baixen.|Hacer una lluvia con dos tipos de clones: estrellas que suben y meteoritos que bajan.",
      "Fer que cada clon tingui una mida a l'atzar (mida atzar 50-150) quan neix.|Hacer que cada clon tenga un tamaño al azar (tamaño azar 50-150) cuando nace.",
      "Calcular quants clons hi ha alhora si la fàbrica en fa 2 per segon i cadascun viu 3 segons (6).|Calcular cuántos clones hay a la vez si la fábrica hace 2 por segundo y cada uno vive 3 segundos (6)."
    ],
    trans: [
      "Ve de la sessió 1: cada clon fa servir l'atzar per anar a un lloc diferent.|Viene de la sesión 1: cada clon usa el azar para ir a un sitio diferente.",
      "Sessió següent: fer que la pluja sigui cada vegada més difícil amb una variable de velocitat.|Sesión siguiente: hacer que la lluvia sea cada vez más difícil con una variable de velocidad.",
      "Plàstica: segells, plantilles i patrons repetits; matemàtiques: multiplicar (clons per segon × segons).|Plástica: sellos, plantillas y patrones repetidos; matemáticas: multiplicar (clones por segundo × segundos)."
    ],
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
        diu: [
          "Si volem vint meteorits, cal programar-ne vint? Quanta feina!|Si queremos veinte meteoritos, ¿hay que programar veinte? ¡Cuánto trabajo!",
          "I si volguéssim canviar la velocitat de tots? (hauríem de canviar vint programes)|¿Y si quisiéramos cambiar la velocidad de todos? (tendríamos que cambiar veinte programas)",
          "Recordeu: en quin ordre van «ves a un lloc a l'atzar» i «posa y a 170»? (primer el lloc)|Recordad: ¿en qué orden van «ve a un sitio al azar» y «pon y a 170»? (primero el sitio)",
          "Avui aprendrem un truc: un sol personatge que en fa molts.|Hoy aprenderemos un truco: un solo personaje que hace muchos."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "Què és un clon?|¿Qué es un clon?", fase: 'teoria',
        fa: "Explica el clon amb un segell o amb una plantilla: el mateix dibuix, moltes vegades. Ensenya el guió «quan començo com a clon» amb la demo de les estrelles i la fàbrica amb la pluja de meteorits. Atura't al «compte!»: els clons neixen a sota de l'original i, si l'original està amagat, també neixen amagats. Acaba amb «esborra aquest clon».|Explica el clon con un sello o con una plantilla: el mismo dibujo, muchas veces. Enseña el guion «al empezar como clon» con la demo de las estrellas y la fábrica con la lluvia de meteoritos. Párate en el «¡cuidado!»: los clones nacen debajo del original y, si el original está escondido, también nacen escondidos. Acaba con «borra este clon».",
        diu: [
          "Quants personatges hi ha programats en aquesta pluja? (un: tots els altres són clons)|¿Cuántos personajes hay programados en esta lluvia? (uno: todos los demás son clones)",
          "On neix un clon? (on és l'original)|¿Dónde nace un clon? (donde está el original)",
          "Per què la fàbrica s'amaga? I per què el clon fa «mostra't»? (perquè neix amagat com ella)|¿Por qué la fábrica se esconde? ¿Y por qué el clon hace «muéstrate»? (porque nace escondido como ella)",
          "Què passaria si mai no esborréssim cap clon? (a 40 s'aturaria la pluja)|¿Qué pasaría si nunca borráramos ningún clon? (a los 40 se pararía la lluvia)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La fàbrica de clons humana|La fábrica de clones humana", fase: 'desconnectat',
        fa: "Tu fas de fàbrica (amagat/ada darrere la taula). Cada pocs segons dius «clon!» i dones una targeta de guió a un alumne/a: aquest clon tira el dau, va al paper del número, s'aixeca (es mostra), camina a poc a poc fins a la pissarra (baixa) i torna a seure (s'esborra). Primera ronda: sense «m'esborro»: els clons s'amunteguen al rectangle de cinta fins que no hi cap ningú més i la fàbrica ha de parar. Segona ronda: amb «m'esborro»: la pluja no s'acaba mai. Si tens temps, fes una ronda en què et «mostres» tu (la fàbrica visible) i comenteu-ho.|Tú haces de fábrica (escondido/a detrás de la mesa). Cada pocos segundos dices «¡clon!» y das una tarjeta de guion a un alumno/a: este clon tira el dado, va al papel del número, se levanta (se muestra), camina despacio hasta la pizarra (baja) y vuelve a sentarse (se borra). Primera ronda: sin «me borro»: los clones se amontonan en el rectángulo de cinta hasta que no cabe nadie más y la fábrica tiene que parar. Segunda ronda: con «me borro»: la lluvia no se acaba nunca. Si tienes tiempo, haz una ronda en la que te «muestras» tú (la fábrica visible) y comentadlo.",
        diu: [
          "Tots els clons tenen la mateixa targeta. Fan tots exactament el mateix? (el mateix guió, però el dau els porta a llocs diferents)|Todos los clones tienen la misma tarjeta. ¿Hacen todos exactamente lo mismo? (el mismo guion, pero el dado los lleva a sitios diferentes)",
          "El dau fa que cada clon vagi a un lloc diferent: això és l'atzar que vam veure!|El dado hace que cada clon vaya a un sitio diferente: ¡eso es el azar que vimos!",
          "Per què s'ha aturat la pluja a la primera ronda? (l'escenari era ple: ningú no s'esborrava)|¿Por qué se ha parado la lluvia en la primera ronda? (el escenario estaba lleno: nadie se borraba)",
          "I a la segona ronda, s'acaba mai? (no, perquè els clons s'esborren)|¿Y en la segunda ronda, se acaba alguna vez? (no, porque los clones se borran)"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Tot el grup (la fàbrica és el professor/a)|Todo el grupo (la fábrica es el profesor/a)" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a fa des del «Recorda» fins a la pausa activa. A «Clons de paper», que toquin «Ho hem fet!» si ho han fet a classe; si no, el poden deixar per a casa. A l'ordenació del guió del clon, demana que expliquin per què «mostra't» va després de «posa y a 170».|Cada alumno/a hace desde el «Recuerda» hasta la pausa activa. En «Clones de papel», que toquen «¡Lo hemos hecho!» si lo han hecho en clase; si no, lo pueden dejar para casa. En la ordenación del guion del clon, pide que expliquen por qué «muéstrate» va después de «pon y a 170».",
        diu: [
          "Si el clon es mostrés abans de posar-se a dalt, què veuríem? (un salt de l'original al lloc nou)|Si el clon se mostrara antes de ponerse arriba, ¿qué veríamos? (un salto del original al sitio nuevo)",
          "Quin bloc fa néixer les estrelles noves? (crea un clon de mi) I quin les fa desaparèixer? (esborra aquest clon)|¿Qué bloque hace nacer las estrellas nuevas? (crea un clon de mí) ¿Y cuál las hace desaparecer? (borra este clon)",
          "Sense «mostra't», què es veu? (res: neixen amagats)|Sin «muéstrate», ¿qué se ve? (nada: nacen escondidos)"
        ],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», ordenar el guió del clon, «Clons de paper», la pluja de meteorits, el bloc que fa néixer estrelles i la pregunta del «mostra't».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», ordenar el guion del clon, «Clones de papel», la lluvia de meteoritos, el bloque que hace nacer estrellas y la pregunta del «muéstrate».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de clons|Pausa activa y retos de clones", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els quatre reptes: 8 clons d'estrella, el guió del clon de la pluja (amb el comptador de caiguts), la pluja que s'atura (falta esborrar els clons) i les estrelles per caçar amb el guió de tocar. Al tercer repte, fes que recordin la primera ronda de la fàbrica humana.|Pausa activa todos juntos. Después, los cuatro retos: 8 clones de estrella, el guion del clon de la lluvia (con el contador de caídos), la lluvia que se para (falta borrar los clones) y las estrellas para cazar con el guion de tocar. En el tercer reto, haz que recuerden la primera ronda de la fábrica humana.",
        diu: [
          "Per fer 8 clons, quin bucle fas servir? (repeteix 8 vegades)|Para hacer 8 clones, ¿qué bucle usas? (repite 8 veces)",
          "La pluja s'atura de cop: on s'han quedat tots els clons? (a baix: no s'esborren)|La lluvia se para de golpe: ¿dónde se han quedado todos los clones? (abajo: no se borran)",
          "Quan toques una estrella, qui fa el guió de tocar: l'original o el clon? (el clon)|Cuando tocas una estrella, ¿quién hace el guion de tocar: el original o el clon? (el clon)",
          "On va «suma a caiguts 1»: dins o després del bucle de baixar? (després)|¿Dónde va «suma a caídos 1»: dentro o después del bucle de bajar? (después)"
        ],
        slides: ['s13'], app: "«Pausa activa» i els quatre reptes de «Reptes».|«Pausa activa» y los cuatro retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: la meva pluja de clons|Crea: mi lluvia de clones", fase: 'crea',
        fa: "Cada alumne/a inventa una pluja: bombolles que pugen, estrelles que s'encenen i s'apaguen, meteorits… Ha de tenir almenys 5 clons, un guió del clon i l'atzar. Quan la desen, s'ensenyen les pluges per parelles.|Cada alumno/a inventa una lluvia: burbujas que suben, estrellas que se encienden y se apagan, meteoritos… Tiene que tener al menos 5 clones, un guion del clon y el azar. Cuando la guarden, se enseñan las lluvias por parejas.",
        diu: [
          "La teva pluja va cap avall, cap amunt o de costat? Quin bloc ho decideix?|¿Tu lluvia va hacia abajo, hacia arriba o de lado? ¿Qué bloque lo decide?",
          "Els teus clons s'esborren quan ja no serveixen?|¿Tus clones se borran cuando ya no sirven?",
          "On és l'atzar a la teva pluja?|¿Dónde está el azar en tu lluvia?"
        ],
        slides: ['s14'], app: "Pas «Crea»: La meva pluja de clons (es desa als projectes).|Paso «Crea»: Mi lluvia de clones (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: [
          "Quin guió fa cada clon quan neix? (quan començo com a clon)|¿Qué guion hace cada clon cuando nace? (al empezar como clon)",
          "Per què esborrem els clons? (perquè l'escenari no s'ompli)|¿Por qué borramos los clones? (para que el escenario no se llene)",
          "Amb un sol personatge, quants meteorits podem tenir? (tants com vulguem, fins a 40 alhora)|Con un solo personaje, ¿cuántos meteoritos podemos tener? (tantos como queramos, hasta 40 a la vez)"
        ],
        slides: ['s15', 's16'], app: "«Tancament»: les dues preguntes finals i com m'he sentit.|«Cierre»: las dos preguntas finales y cómo me he sentido.", org: "Tot el grup|Todo el grupo" }
    ],
    errors: [
      ["Fa 5 clons, no els mou i diu que «no surten».|Hace 5 clones, no los mueve y dice que «no salen».",
        "Pregunta-li on neix un clon. Que posi «ves a un lloc a l'atzar» al guió del clon i compti quantes estrelles veu ara.|Pregúntale dónde nace un clon. Que ponga «ve a un sitio al azar» en el guion del clon y cuente cuántas estrellas ve ahora."],
      ["L'original està amagat i el guió del clon no té «mostra't»: no es veu res.|El original está escondido y el guion del clon no tiene «muéstrate»: no se ve nada.",
        "Recorda la demo: el clon copia com és l'original, també si està amagat. Quin bloc el fa visible, i quan l'hauria de fer?|Recuerda la demo: el clon copia cómo es el original, también si está escondido. ¿Qué bloque lo hace visible, y cuándo lo tendría que hacer?"],
      ["Posa «esborra aquest clon» al principi del guió del clon i els meteorits desapareixen abans de caure.|Pone «borra este clon» al principio del guion del clon y los meteoritos desaparecen antes de caer.",
        "Que llegeixi el guió del clon en veu alta, de dalt a baix, com si fos un clon de la fàbrica humana. Quan es tornava a seure?|Que lea el guion del clon en voz alta, de arriba abajo, como si fuera un clon de la fábrica humana. ¿Cuándo se volvía a sentar?"],
      ["Posa els blocs de la caiguda al guió de la bandera verda en lloc del guió del clon: només es mou la fàbrica.|Pone los bloques de la caída en el guion de la bandera verde en lugar del guion del clon: solo se mueve la fábrica.", "Pregunta-li quin guió fa cada clon quan neix. Que esborri aquells blocs i els torni a posar sota «quan començo com a clon».|Pregúntale qué guion hace cada clon cuando nace. Que borre esos bloques y los vuelva a poner bajo «al empezar como clon»."],
      ["Posa «crea un clon de mi» dins del guió del clon i en surten massa de cop.|Pone «crea un clon de mí» dentro del guion del clon y salen demasiados de golpe.",
        "Explica que cada clon també faria clons, com si a la fàbrica humana cada clon cridés «clon!». Que deixi la creació de clons només a la bandera verda.|Explica que cada clon también haría clones, como si en la fábrica humana cada clon gritara «¡clon!». Que deje la creación de clones solo en la bandera verde."],
      ["Fa «crea un clon de mi» una sola vegada i espera una pluja.|Hace «crea un clon de mí» una sola vez y espera una lluvia.", "Pregunta: quants clons fa aquest bloc cada vegada? I quantes vegades s'executa? Que el posi dins d'un bucle amb una espera.|Pregunta: ¿cuántos clones hace este bloque cada vez? ¿Y cuántas veces se ejecuta? Que lo ponga dentro de un bucle con una espera."]
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
        ["Esborrar clons|Borrar clones", "Esborra cada clon quan ha acabat i explica per què cal.|Borra cada clon cuando ha terminado y explica por qué hace falta.", "Esborra els clons només quan l'app li ho recorda.|Borra los clones solo cuando la app se lo recuerda."],
        [
          "Clons i atzar|Clones y azar",
          "Fa que cada clon sigui diferent (lloc, mida o velocitat a l'atzar) i ho explica.|Hace que cada clon sea diferente (sitio, tamaño o velocidad al azar) y lo explica.",
          "Els clons fan el mateix i no sap com fer-los diferents.|Los clones hacen lo mismo y no sabe cómo hacerlos diferentes."
        ]
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
        nota: "Dibuixa a la pissarra els dos guions un al costat de l'altre i fes fletxes de qui fa cada un.|Dibuja en la pizarra los dos guiones uno al lado del otro y haz flechas de quién hace cada uno.", pic: "img/ic/masks.webp" },
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
    intro: "Tercera sessió: la dificultat que creix. Un bon videojoc comença fàcil i es fa difícil a poc a poc, perquè ni avorreixi ni faci enfadar. L'alumnat converteix la velocitat en una variable: el meteorit es mou amb «mou-te velocitat passos» i la variable creix a cada caiguda. Per no arribar a l'impossible, es posa un límit amb un «si velocitat < 12». També veuen altres maneres de fer-ho difícil (més petit, més clons, menys temps). La classe té una activitat de passades de pilota que s'acceleren i tres reptes.|Tercera sesión: la dificultad que crece. Un buen videojuego empieza fácil y se hace difícil poco a poco, para que ni aburra ni haga enfadar. El alumnado convierte la velocidad en una variable: el meteorito se mueve con «muévete velocidad pasos» y la variable crece en cada caída. Para no llegar a lo imposible, se pone un límite con un «si velocidad < 12». También ven otras maneras de hacerlo difícil (más pequeño, más clones, menos tiempo). La clase tiene una actividad de pases de pelota que se aceleran y tres retos.",
    claus: [
      "Un repte ha de començar fàcil i pujar a poc a poc.|Un reto tiene que empezar fácil y subir poco a poco.",
      "Si el «mou-te» fa servir la variable velocitat, quan la variable creix el personatge va més de pressa.|Si el «muévete» usa la variable velocidad, cuando la variable crece el personaje va más deprisa.",
      "La velocitat ha de créixer un cop per volta, no a cada pas.|La velocidad tiene que crecer una vez por vuelta, no en cada paso.",
      "Un límit («si velocitat < 12») evita que sigui impossible.|Un límite («si velocidad < 12») evita que sea imposible.",
      "Més difícil també pot ser més petit, més clons o menys temps.|Más difícil también puede ser más pequeño, más clones o menos tiempo."
    ],
    prev: [
      "Variables que creixen amb «suma» i comparar-les (unitat 6).|Variables que crecen con «suma» y compararlas (unidad 6).",
      "La caiguda del meteorit amb «repeteix fins que y < -160» (sessions 1 i 2).|La caída del meteorito con «repite hasta que y < -160» (sesiones 1 y 2).",
      "Rebotar a la vora (unitat 4).|Rebotar en el borde (unidad 4)."
    ],
    faq: [
      ["La variable velocitat puja, però el meteorit no va més de pressa. Per què?|La variable velocidad sube, pero el meteorito no va más deprisa. ¿Por qué?", "Perquè el «mou-te» té un número fix. Toca'l i tria la variable velocitat: així es mourà el que valgui la variable.|Porque el «muévete» tiene un número fijo. Tócalo y elige la variable velocidad: así se moverá lo que valga la variable."],
      ["Per què cal un límit?|¿Por qué hace falta un límite?", "Sense límit, al cap d'una estona va tan de pressa que ningú no el pot esquivar, i ja no és divertit.|Sin límite, al cabo de un rato va tan deprisa que nadie lo puede esquivar, y ya no es divertido."],
      ["Quin límit és el bo?|¿Qué límite es el bueno?", "El que fa que sigui difícil però possible. Prova'l amb un company/a: si s'enfada, baixa'l; si s'avorreix, puja'l.|El que hace que sea difícil pero posible. Pruébalo con un compañero/a: si se enfada, bájalo; si se aburre, súbelo."],
      ["La velocitat es dispara de cop. Què passa?|La velocidad se dispara de golpe. ¿Qué pasa?", "Segurament el «suma a velocitat» és dins del bucle de baixar i suma a cada pas. Ha d'anar després, perquè sumi un cop per caiguda.|Seguramente el «suma a velocidad» está dentro del bucle de bajar y suma en cada paso. Tiene que ir después, para que sume una vez por caída."],
      ["Per què «velocitat < 12» i no «velocitat > 12»?|¿Por qué «velocidad < 12» y no «velocidad > 12»?", "Volem sumar mentre encara és més petita que el límit. Llegeix-ho amb el número d'ara: «si 4 és més petit que 12, suma». Amb «>», no sumaria mai.|Queremos sumar mientras todavía es menor que el límite. Léelo con el número de ahora: «si 4 es menor que 12, suma». Con «>», no sumaría nunca."],
      ["Al cometa, per què no s'acaba el repte de seguida?|En el cometa, ¿por qué no se acaba el reto enseguida?", "La comprovació espera tota l'estona per veure que la velocitat s'atura exactament a 12 i no la passa.|La comprobación espera todo el rato para ver que la velocidad se para exactamente en 12 y no la pasa."]
    ],
    tec: [
      ["L'atzar fa sempre el mateix camí quan toquen «Comença».|El azar hace siempre el mismo camino cuando tocan «Empieza».", "És normal: per comprovar els reptes de manera justa, l'app fa servir sempre la mateixa sèrie d'atzar. Als reptes amb tecles o tocs, quan es prova lliurement amb «Comença», l'atzar canvia cada vegada.|Es normal: para comprobar los retos de forma justa, la app usa siempre la misma serie de azar. En los retos con teclas o toques, cuando se prueba libremente con «Empieza», el azar cambia cada vez."],
      ["No troben el valor «atzar» en tocar un número.|No encuentran el valor «azar» al tocar un número.", "Surt a la finestra del número, a «o un valor» (atzar 1-10) i a «o un número a l'atzar», on es pot escriure de quin a quin. Només surt als reptes que el fan servir.|Sale en la ventana del número, en «o un valor» (azar 1-10) y en «o un número al azar», donde se puede escribir de cuál a cuál. Solo sale en los retos que lo usan."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No hi ha espai per fer rotllanes de 4.|No hay espacio para hacer corros de 4.", "Es pot fer asseguts a les taules, passant una goma o un tap de mà en mà, o en parelles una davant de l'altra.|Se puede hacer sentados en las mesas, pasando una goma o un tapón de mano en mano, o por parejas una frente a otra."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Activitat de la bola: bola de paper o pilota tova, passades suaus a la mà (no llançaments forts) i sense córrer.|Actividad de la bola: bola de papel o pelota blanda, pases suaves a la mano (no lanzamientos fuertes) y sin correr.",
      "Parla de la frustració: quan un repte és massa difícil, és normal enfadar-se. Es pot respirar, demanar una pista o tornar-hi més tard.|Habla de la frustración: cuando un reto es demasiado difícil, es normal enfadarse. Se puede respirar, pedir una pista o volver a intentarlo más tarde."
    ],
    extra: [
      "Afegir una variable «nivell» que pugi cada vegada que la velocitat arriba a 6, 9 i 12, i que un personatge la digui.|Añadir una variable «nivel» que suba cada vez que la velocidad llega a 6, 9 y 12, y que un personaje la diga.",
      "Fer que la fàbrica de clons esperi cada vegada menys (una variable «espera» que baixa, amb un límit).|Hacer que la fábrica de clones espere cada vez menos (una variable «espera» que baja, con un límite).",
      "Calcular a la fitxa en quina volta s'arriba al límit si es comença a 2 i se suma 3, amb límit 14.|Calcular en la ficha en qué vuelta se llega al límite si se empieza en 2 y se suma 3, con límite 14."
    ],
    trans: [
      "Ve de les sessions 1 i 2: la pluja de clons ara s'accelera.|Viene de las sesiones 1 y 2: la lluvia de clones ahora se acelera.",
      "Sessió següent: el projecte «Esquiva els meteorits», que ho ajunta tot.|Sesión siguiente: el proyecto «Esquiva los meteoritos», que lo junta todo.",
      "Matemàtiques i educació física: sèries numèriques (3, 5, 7…) i l'entrenament progressiu (de fàcil a difícil).|Matemáticas y educación física: series numéricas (3, 5, 7…) y el entrenamiento progresivo (de fácil a difícil)."
    ],
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
        diu: [
          "Us heu avorrit mai amb un repte massa fàcil? I us heu enfadat amb un de massa difícil?|¿Os habéis aburrido alguna vez con un reto demasiado fácil? ¿Y os habéis enfadado con uno demasiado difícil?",
          "Quin esport o videojoc us va costar al principi? Com vau millorar?|¿Qué deporte o videojuego os costó al principio? ¿Cómo mejorasteis?",
          "Com podríem fer un sol videojoc que agradi a l'Aina i a en Pol? (començar fàcil i pujar a poc a poc)|¿Cómo podríamos hacer un solo videojuego que guste a Aina y a Pol? (empezar fácil y subir poco a poco)",
          "Recordeu els clons: on va «esborra aquest clon»? (al final del guió del clon)|Recordad los clones: ¿dónde va «borra este clon»? (al final del guion del clon)"
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "La dificultat que creix|La dificultad que crece", fase: 'teoria',
        fa: "Mostra la corba de la dificultat: començar fàcil i pujar a poc a poc. Explica la variable velocitat i com «mou-te velocitat passos» va més de pressa quan la variable creix. Amb la demo, fes que diguin el número de velocitat en veu alta a cada volta. Ensenya altres maneres (més petit, més clons, menys temps) i acaba amb el límit.|Muestra la curva de la dificultad: empezar fácil y subir poco a poco. Explica la variable velocidad y cómo «muévete velocidad pasos» va más deprisa cuando la variable crece. Con la demo, haz que digan el número de velocidad en voz alta en cada vuelta. Enseña otras maneras (más pequeño, más clones, menos tiempo) y acaba con el límite.",
        diu: [
          "Velocitat 3, 5, 7… quin número ve després? (9) I després? (11)|Velocidad 3, 5, 7… ¿qué número viene después? (9) ¿Y después? (11)",
          "Si el meteorit fa «mou-te 5 passos», anirà més de pressa quan la variable creixi? (no: el 5 no canvia)|Si el meteorito hace «muévete 5 pasos», ¿irá más deprisa cuando la variable crezca? (no: el 5 no cambia)",
          "Quines altres maneres hi ha de fer-ho més difícil? (més petit, més clons, menys temps)|¿Qué otras maneras hay de hacerlo más difícil? (más pequeño, más clones, menos tiempo)",
          "Què passaria al cap de deu minuts si la velocitat no tingués límit? (impossible d'esquivar)|¿Qué pasaría a los diez minutos si la velocidad no tuviera límite? (imposible de esquivar)"
        ],
        slides: ['s4', 's5', 's6', 's7', 's8', 's9'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 12, t: "La bola que s'accelera|La bola que se acelera", fase: 'desconnectat',
        fa: "Grups de 4 en rotllana amb una bola. A cada ronda de 10 segons, el grup ha de fer tantes passades com diu la VELOCITAT de la pissarra. Comenceu amb velocitat 3 i, després de cada ronda, sumeu 2 (com al programa). El LÍMIT és 11: quan hi arribeu, ja no puja. Cada grup apunta a la fitxa si ho ha aconseguit i si li ha semblat avorrit, just o massa difícil. Feu 6 rondes.|Grupos de 4 en corro con una bola. En cada ronda de 10 segundos, el grupo tiene que hacer tantos pases como dice la VELOCIDAD de la pizarra. Empezad con velocidad 3 y, después de cada ronda, sumad 2 (como en el programa). El LÍMITE es 11: cuando lleguéis, ya no sube. Cada grupo apunta en la ficha si lo ha conseguido y si le ha parecido aburrido, justo o demasiado difícil. Haced 6 rondas.",
        diu: [
          "Velocitat 3, sumem 2: quina velocitat toca ara? (5)|Velocidad 3, sumamos 2: ¿qué velocidad toca ahora? (5)",
          "A quina ronda us ha semblat més divertit? Per què?|¿En qué ronda os ha parecido más divertido? ¿Por qué?",
          "Hem arribat al límit, l'11: sumem 2 més? (no: ja no puja)|Hemos llegado al límite, el 11: ¿sumamos 2 más? (no: ya no sube)",
          "I si no hi hagués límit: amb velocitat 25, ho aconseguiríeu? (segurament no)|¿Y si no hubiera límite: con velocidad 25, lo conseguiríais? (seguramente no)"
        ],
        slides: ['s10', 's11'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Grups de 4|Grupos de 4" },
      { min: 13, t: "A l'ordinador: descobreix i investiga|En el ordenador: descubre e investiga", fase: 'ordinador',
        fa: "Cada alumne/a avança fins a la pausa activa. A la pregunta de les 4 voltes, demana que ho calculin amb els dits o a la fitxa. A l'escenari per mirar, que diguin quan deixa de créixer la velocitat i per què.|Cada alumno/a avanza hasta la pausa activa. En la pregunta de las 4 vueltas, pide que lo calculen con los dedos o en la ficha. En el escenario para mirar, que digan cuándo deja de crecer la velocidad y por qué.",
        diu: [
          "3 + 2 + 2 + 2 + 2: quant val després de 4 voltes? (11)|3 + 2 + 2 + 2 + 2: ¿cuánto vale después de 4 vueltas? (11)",
          "Quan s'atura de créixer la velocitat? Quin bloc ho fa? (el «si» del límit)|¿Cuándo deja de crecer la velocidad? ¿Qué bloque lo hace? (el «si» del límite)",
          "La variable creix, però el meteorit no s'accelera: què li falta al «mou-te»? (la variable velocitat)|La variable crece, pero el meteorito no se acelera: ¿qué le falta al «muévete»? (la variable velocidad)"
        ],
        slides: ['s12'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les cinc targetes de «Descobreix», la pregunta de les 4 voltes, «Cada cop més lluny», el meteorit que s'accelera, el bloc que fa créixer la velocitat i la pregunta del «mou-te 5 passos».|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cinco tarjetas de «Descubre», la pregunta de las 4 vueltas, «Cada vez más lejos», el meteorito que se acelera, el bloque que hace crecer la velocidad y la pregunta del «muévete 5 pasos».", org: "Individual|Individual" },
      { min: 12, t: "Pausa activa i reptes de dificultat|Pausa activa y retos de dificultad", fase: 'ordinador',
        fa: "Pausa activa tots junts. Després, els tres reptes: el meteorit que no s'accelerava (posar la variable al «mou-te»), el cometa sense límit (afegir el «si velocitat < 12») i l'estrella que s'encongeix quan la toques.|Pausa activa todos juntos. Después, los tres retos: el meteorito que no se aceleraba (poner la variable en el «muévete»), el cometa sin límite (añadir el «si velocidad < 12») y la estrella que se encoge cuando la tocas.",
        diu: [
          "Al primer repte, què toques per posar-hi la variable? (el 4 del «mou-te»)|En el primer reto, ¿qué tocas para ponerle la variable? (el 4 del «muévete»)",
          "Al cometa, on va el «si velocitat < 12»: abans de tocar la vora o dins? (dins del «si toca la vora»)|En el cometa, ¿dónde va el «si velocidad < 12»: antes de tocar el borde o dentro? (dentro del «si toca el borde»)",
          "L'estrella que s'encongeix: després de 5 tocs, quina mida té? (50)|La estrella que se encoge: después de 5 toques, ¿qué tamaño tiene? (50)",
          "Quin dels tres reptes fa el videojoc més difícil sense anar més de pressa? (l'estrella)|¿Cuál de los tres retos hace el videojuego más difícil sin ir más deprisa? (la estrella)"
        ],
        slides: ['s13'], app: "«Pausa activa» i els tres reptes de «Reptes».|«Pausa activa» y los tres retos de «Retos».", org: "Individual|Individual" },
      { min: 5, t: "Crea: el meu repte que s'accelera|Crea: mi reto que se acelera", fase: 'crea',
        fa: "Cada alumne/a fa el seu repte amb la variable velocitat, que creix i té un límit. Quan el desin, el prova el company/a i diu si el límit és massa baix, massa alt o just.|Cada alumno/a hace su reto con la variable velocidad, que crece y tiene un límite. Cuando lo guarden, lo prueba el compañero/a y dice si el límite es demasiado bajo, demasiado alto o justo.",
        diu: [
          "A quina velocitat comença el teu repte? I quin és el límit?|¿A qué velocidad empieza tu reto? ¿Y cuál es el límite?",
          "On és el teu «suma a velocitat»: un cop per volta o a cada pas?|¿Dónde está tu «suma a velocidad»: una vez por vuelta o en cada paso?",
          "El company/a s'ha avorrit o s'ha enfadat? Què canviaries? (el límit o la velocitat inicial)|¿El compañero/a se ha aburrido o se ha enfadado? ¿Qué cambiarías? (el límite o la velocidad inicial)"
        ],
        slides: ['s14'], app: "Pas «Crea»: El meu repte que s'accelera (es desa als projectes).|Paso «Crea»: Mi reto que se acelera (se guarda en los proyectos).", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 3, t: "Tancament i tiquet de sortida|Cierre y ticket de salida", fase: 'tancament',
        fa: "Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: [
          "Què ha de passar perquè el meteorit vagi cada vegada més ràpid? (que es mogui amb la variable i que la variable creixi)|¿Qué tiene que pasar para que el meteorito vaya cada vez más rápido? (que se mueva con la variable y que la variable crezca)",
          "Per què hi posem un límit? (perquè no sigui impossible)|¿Por qué le ponemos un límite? (para que no sea imposible)",
          "Ara el videojoc pot agradar a l'Aina i a en Pol? Per què?|¿Ahora el videojuego puede gustar a Aina y a Pol? ¿Por qué?"
        ],
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
        "Recorda la demo de l'estrella que s'encongeix i pregunta per altres maneres: més clons, menys temps, menys vides…|Recuerda la demo de la estrella que se encoge y pregunta por otras maneras: más clones, menos tiempo, menos vidas…"],
      ["Al cometa, posa el «si velocitat < 12» fora del «si toca la vora» i la velocitat arriba a 12 en un moment.|En el cometa, pone el «si velocidad < 12» fuera del «si toca el borde» y la velocidad llega a 12 en un momento.", "Pregunta: quan ha de pujar la velocitat, a cada pas o només quan toca la vora? Que posi el «si» del límit dins del «si toca la vora».|Pregunta: ¿cuándo tiene que subir la velocidad, en cada paso o solo cuando toca el borde? Que ponga el «si» del límite dentro del «si toca el borde»."]
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
        [
          "Límit|Límite",
          "Posa un «si» amb la comparació correcta i explica què passa quan s'arriba al límit.|Pone un «si» con la comparación correcta y explica qué pasa cuando se llega al límite.",
          "Posa el «si», però s'equivoca amb el signe o el número.|Pone el «si», pero se equivoca con el signo o el número."
        ],
        [
          "Provar la dificultat|Probar la dificultad",
          "Fa provar el seu repte a un company/a i ajusta la velocitat o el límit segons el que veu.|Hace probar su reto a un compañero/a y ajusta la velocidad o el límite según lo que ve.",
          "Prova el repte només ell/a i no hi canvia res.|Prueba el reto solo él/ella y no cambia nada."
        ]
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
        nota: "Escriu els tres blocs a la pissarra i deixa'ls tota la sessió.|Escribe los tres bloques en la pizarra y déjalos toda la sesión.", pic: "img/ic/racecar.webp" },
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
    intro: "Sessió de projecte: el videojoc «Esquiva els meteorits» per a la Nit de les Estrelles. Ajunta tota la unitat (atzar, clons, dificultat) amb les vides i els punts de la unitat 6. Primer es fa el pla en paper, després es construeix peça a peça (nau, fàbrica, xocs) i, al pas «Crea», cadascú afegeix la velocitat variable, el límit i la fi de partida, i hi posa el seu toc. Al final, una prova creuada amb un company/a i un canvi a partir del que diu. És una sessió llarga d'ordinador: vigila el temps de cada bloc.|Sesión de proyecto: el videojuego «Esquiva los meteoritos» para la Noche de las Estrellas. Junta toda la unidad (azar, clones, dificultad) con las vidas y los puntos de la unidad 6. Primero se hace el plan en papel, después se construye pieza a pieza (nave, fábrica, choques) y, en el paso «Crea», cada uno añade la velocidad variable, el límite y el fin de partida, y le pone su toque. Al final, una prueba cruzada con un compañero/a y un cambio a partir de lo que dice. Es una sesión larga de ordenador: vigila el tiempo de cada bloque.",
    claus: [
      "Un videojoc gran es fa peça a peça, i cada peça es prova abans de la següent.|Un videojuego grande se hace pieza a pieza, y cada pieza se prueba antes de la siguiente.",
      "El clon que toca la nau resta una vida i s'esborra de seguida.|El clon que toca la nave resta una vida y se borra enseguida.",
      "Un meteorit que arriba a baix sense tocar la nau suma un punt.|Un meteorito que llega abajo sin tocar la nave suma un punto.",
      "La velocitat creix amb un límit i la partida s'acaba quan no queden vides.|La velocidad crece con un límite y la partida se acaba cuando no quedan vidas.",
      "La prova d'un company/a mostra el que tu no veus: es mira sense ajudar.|La prueba de un compañero/a muestra lo que tú no ves: se mira sin ayudar."
    ],
    prev: [
      "Atzar, clons i velocitat amb límit (sessions 1-3 d'aquesta unitat).|Azar, clones y velocidad con límite (sesiones 1-3 de esta unidad).",
      "Vides, punts i fi de partida amb «atura tot» (unitat 6).|Vidas, puntos y fin de partida con «para todo» (unidad 6).",
      "Moure un personatge amb les fletxes (unitat 3).|Mover un personaje con las flechas (unidad 3)."
    ],
    faq: [
      ["Perdo totes les vides en un sol xoc!|¡Pierdo todas las vidas en un solo choque!", "El clon continua baixant i tocant la nau. Dins del «si toca la nau», després de restar la vida, posa «esborra aquest clon».|El clon sigue bajando y tocando la nave. Dentro del «si toca la nave», después de restar la vida, pon «borra este clon»."],
      ["La partida s'acaba només començar.|La partida se acaba nada más empezar.", "Mira on poses vides a 3: ha d'anar abans del bucle que pregunta «si vides < 1», al mateix guió de la nau.|Mira dónde pones vidas a 3: tiene que ir antes del bucle que pregunta «si vidas < 1», en el mismo guion de la nave."],
      ["La nau surt de l'escenari.|La nave sale del escenario.", "A cada fletxa, afegeix un «si x > 220, posa x a 220» (i a l'esquerra, «si x < -220, posa x a -220»).|En cada flecha, añade un «si x > 220, pon x a 220» (y en la izquierda, «si x < -220, pon x a -220»)."],
      ["Puc canviar el fons i els sons?|¿Puedo cambiar el fondo y los sonidos?", "Sí! Quan ja funcioni el que demana l'app, personalitza'l: fons, sons, frases, vides inicials, velocitat i límit.|¡Sí! Cuando ya funcione lo que pide la app, personalízalo: fondo, sonidos, frases, vidas iniciales, velocidad y límite."],
      ["Per què «Comprova» mou la nau sola?|¿Por qué «Comprueba» mueve la nave sola?", "Prem les fletxes per tu, sempre igual, per comprovar que el videojoc funciona. Per jutjar si és divertit, cal que el provi una persona.|Pulsa las flechas por ti, siempre igual, para comprobar que el videojuego funciona. Para juzgar si es divertido, hace falta que lo pruebe una persona."],
      ["El meu company/a diu que és massa difícil. L'he de canviar?|Mi compañero/a dice que es demasiado difícil. ¿Lo tengo que cambiar?", "Escolta per què ho diu i tria un canvi petit: més vides, una velocitat inicial més baixa o un límit més baix. Després, torna-ho a provar.|Escucha por qué lo dice y elige un cambio pequeño: más vidas, una velocidad inicial más baja o un límite más bajo. Después, vuelve a probarlo."]
    ],
    tec: [
      ["L'atzar fa sempre el mateix camí quan toquen «Comença».|El azar hace siempre el mismo camino cuando tocan «Empieza».", "És normal: per comprovar els reptes de manera justa, l'app fa servir sempre la mateixa sèrie d'atzar. Als reptes amb tecles o tocs, quan es prova lliurement amb «Comença», l'atzar canvia cada vegada.|Es normal: para comprobar los retos de forma justa, la app usa siempre la misma serie de azar. En los retos con teclas o toques, cuando se prueba libremente con «Empieza», el azar cambia cada vez."],
      ["No troben el valor «atzar» en tocar un número.|No encuentran el valor «azar» al tocar un número.", "Surt a la finestra del número, a «o un valor» (atzar 1-10) i a «o un número a l'atzar», on es pot escriure de quin a quin. Només surt als reptes que el fan servir.|Sale en la ventana del número, en «o un valor» (azar 1-10) y en «o un número al azar», donde se puede escribir de cuál a cuál. Solo sale en los retos que lo usan."],
      ["Un alumne/a s'encalla en un repte.|Un alumno/a se atasca en un reto.", "Després de dos intents apareix «Una pista» i, després, «Mostra una solució». També es pot sortir del pas i tornar-hi: el repte torna a començar.|Después de dos intentos aparece «Una pista» y, después, «Muestra una solución». También se puede salir del paso y volver: el reto vuelve a empezar."],
      ["No s'ha desat el videojoc.|No se ha guardado el videojuego.", "Només es desa quan passa la comprovació i es toca «Desa-ho i continua». Si se surt abans, cal tornar a fer «Comprova».|Solo se guarda cuando pasa la comprobación y se toca «Guárdalo y continúa». Si se sale antes, hay que volver a hacer «Comprueba»."],
      ["A la prova creuada, el company/a no troba el videojoc.|En la prueba cruzada, el compañero/a no encuentra el videojuego.", "Es prova a l'ordinador de l'autor/a: canvieu de cadira, no d'usuari. El videojoc també queda a «Projectes».|Se prueba en el ordenador del autor/a: cambiad de silla, no de usuario. El videojuego también queda en «Proyectos»."]
    ],
    seg: [
      "Pantalles: recorda la pausa activa a mitja sessió i que mirin lluny uns segons quan acabin cada repte.|Pantallas: recuerda la pausa activa a media sesión y que miren a lo lejos unos segundos cuando terminen cada reto.",
      "Prova creuada: es comenta el videojoc, no la persona; primer una cosa bona, després una idea amb el perquè.|Prueba cruzada: se comenta el videojuego, no la persona; primero una cosa buena, después una idea con el porqué.",
      "Pausa activa de la nau: esquivar amb passos curts, sense salts ni empentes.|Pausa activa de la nave: esquivar con pasos cortos, sin saltos ni empujones."
    ],
    extra: [
      "Afegir una segona fàbrica: estrelles que, si la nau les toca, sumen una vida (com a molt 5).|Añadir una segunda fábrica: estrellas que, si la nave las toca, suman una vida (como mucho 5).",
      "Fer que la nau digui «Nivell 2!» quan la velocitat arriba al límit.|Hacer que la nave diga «¡Nivel 2!» cuando la velocidad llega al límite.",
      "Demanar a dues persones que el provin i comparar-ne les respostes: coincideixen?|Pedir a dos personas que lo prueben y comparar sus respuestas: ¿coinciden?"
    ],
    trans: [
      "Recull les unitats 3, 6 i 7: fletxes, vides, punts, atzar, clons i dificultat.|Recoge las unidades 3, 6 y 7: flechas, vidas, puntos, azar, clones y dificultad.",
      "Unitat 8: cadascú inventarà el seu videojoc des de zero, amb un pla i una prova com avui.|Unidad 8: cada uno inventará su videojuego desde cero, con un plan y una prueba como hoy.",
      "Llengua oral: donar i rebre una opinió útil i amable (què m'agrada, què milloraria i per què).|Lengua oral: dar y recibir una opinión útil y amable (qué me gusta, qué mejoraría y por qué)."
    ],
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
        "El dia abans (10 min): imprimir una fitxa del pla per alumne/a i retallar les targetes del provador/a (una tira per parella).|El día antes (10 min): imprimir una ficha del plan por alumno/a y recortar las tarjetas del probador/a (una tira por pareja).",
        "El dia abans (5 min): decidir les parelles de prova creuada (millor que no siguin companys/es de taula).|El día antes (5 min): decidir las parejas de prueba cruzada (mejor que no sean compañeros/as de mesa).",
        "El dia abans (15 min): provar el videojoc sencer de la diapositiva 6 i el pas «Crea» per saber quins blocs falten al programa de partida.|El día antes (15 min): probar el videojuego entero de la diapositiva 6 y el paso «Crea» para saber qué bloques faltan en el programa de partida.",
        "Abans de classe (5 min): preparar dos o tres ordinadors per ensenyar videojocs al final (o el projector connectat).|Antes de clase (5 min): preparar dos o tres ordenadores para enseñar videojuegos al final (o el proyector conectado)."
      ]
    },
    plan: [
      { min: 5, t: "Benvinguda: demà és la Nit de les Estrelles|Bienvenida: mañana es la Noche de las Estrellas", fase: 'inici',
        fa: "Explica que avui acabaran el videojoc per a l'observatori. Fes el repàs de dificultat i clons amb la diapositiva 3 i ensenya el videojoc sencer en marxa perquè vegin on han d'arribar.|Explica que hoy acabarán el videojuego para el observatorio. Haz el repaso de dificultad y clones con la diapositiva 3 y enseña el videojuego entero en marcha para que vean adónde tienen que llegar.",
        diu: [
          "Quines peces del videojoc ja sabem fer? (moure amb fletxes, clons, vides, punts, velocitat) Quines ens falten?|¿Qué piezas del videojuego ya sabemos hacer? (mover con flechas, clones, vidas, puntos, velocidad) ¿Cuáles nos faltan?",
          "Velocitat 4, suma 1, límit 12: després de 20 meteorits, quant val? (12)|Velocidad 4, suma 1, límite 12: después de 20 meteoritos, ¿cuánto vale? (12)",
          "Mireu el videojoc sencer: quan creieu que s'acabarà? (quan no quedin vides)|Mirad el videojuego entero: ¿cuándo creéis que se acabará? (cuando no queden vidas)",
          "Avui treballarem com un equip de programadors de videojocs: uns fan, uns altres proven.|Hoy trabajaremos como un equipo de programadores de videojuegos: unos hacen, otros prueban."
        ],
        slides: ['s1', 's2', 's3'], app: "Encara no: pantalles abaixades.|Todavía no: pantallas bajadas.", org: "Tot el grup|Todo el grupo" },
      { min: 7, t: "Les peces del videojoc|Las piezas del videojuego", fase: 'teoria',
        fa: "Presenta les sis peces amb l'animació i el videojoc sencer amb la demo. Atura't als xocs: el clon que toca la nau resta una vida i s'esborra. Explica la fi de partida i la idea de construir i provar tros a tros.|Presenta las seis piezas con la animación y el videojuego entero con la demo. Párate en los choques: el clon que toca la nave resta una vida y se borra. Explica el fin de partida y la idea de construir y probar trozo a trozo.",
        diu: [
          "Quantes peces té el videojoc? Digueu-les en ordre.|¿Cuántas piezas tiene el videojuego? Decidlas en orden.",
          "Si el clon no s'esborra després de tocar la nau, quantes vides treu? (una a cada pas: totes)|Si el clon no se borra después de tocar la nave, ¿cuántas vidas quita? (una en cada paso: todas)",
          "Quan suma un punt el meteorit? (quan arriba a baix sense tocar la nau)|¿Cuándo suma un punto el meteorito? (cuando llega abajo sin tocar la nave)",
          "Per què és millor provar cada peça abans de fer la següent? (si falla, saps on és l'error)|¿Por qué es mejor probar cada pieza antes de hacer la siguiente? (si falla, sabes dónde está el error)"
        ],
        slides: ['s4', 's5', 's6', 's7'], app: "Encara no: tota l'atenció a la projecció.|Todavía no: toda la atención en la proyección.", org: "Tot el grup|Todo el grupo" },
      { min: 10, t: "El pla en paper|El plan en papel", fase: 'desconnectat',
        fa: "Cada alumne/a omple la fitxa del pla: dibuix de l'escenari, regles de punts i vides, velocitat inicial, quant puja i límit, i un toc personal (fons, so, frase final). Als 6 minuts, per parelles, cadascú explica el seu pla i el company/a fa una pregunta de les targetes del provador/a.|Cada alumno/a rellena la ficha del plan: dibujo del escenario, reglas de puntos y vidas, velocidad inicial, cuánto sube y límite, y un toque personal (fondo, sonido, frase final). A los 6 minutos, por parejas, cada uno explica su plan y el compañero/a hace una pregunta de las tarjetas del probador/a.",
        diu: [
          "Amb quantes vides comença el teu videojoc? Per què aquest número?|¿Con cuántas vidas empieza tu videojuego? ¿Por qué este número?",
          "Quin és el teu límit de velocitat? El provaràs i el podràs canviar.|¿Cuál es tu límite de velocidad? Lo probarás y lo podrás cambiar.",
          "Què farà el teu videojoc diferent dels altres?|¿Qué hará tu videojuego diferente de los demás?",
          "Company/a: fes-li una pregunta de les targetes del provador/a.|Compañero/a: hazle una pregunta de las tarjetas del probador/a."
        ],
        slides: ['s8', 's9'], app: "Cap: activitat sense pantalla.|Ninguna: actividad sin pantalla.", org: "Individual i després per parelles|Individual y después por parejas" },
      { min: 18, t: "A l'ordinador: peça a peça|En el ordenador: pieza a pieza", fase: 'ordinador',
        fa: "Cada alumne/a fa el «Recorda», la teoria i les tres peces: la nau amb les fletxes, la fàbrica de meteorits i els xocs amb vides. Fes la pausa activa tots junts quan la majoria hi arribi. Després, el bloc que acaba la partida i la pregunta del clon que no s'esborra. Passeja i pregunta a cada alumne/a quina peça està fent i si l'ha provada.|Cada alumno/a hace el «Recuerda», la teoría y las tres piezas: la nave con las flechas, la fábrica de meteoritos y los choques con vidas. Haced la pausa activa todos juntos cuando la mayoría llegue. Después, el bloque que acaba la partida y la pregunta del clon que no se borra. Pasea y pregunta a cada alumno/a qué pieza está haciendo y si la ha probado.",
        diu: [
          "Quina peça estàs fent? Ja l'has provada amb «Comença»?|¿Qué pieza estás haciendo? ¿Ya la has probado con «Empieza»?",
          "Als xocs: on va el «si toca la nau», dins o fora del bucle de baixar? (dins, perquè ho miri a cada pas)|En los choques: ¿dónde va el «si toca la nave», dentro o fuera del bucle de bajar? (dentro, para que lo mire en cada paso)",
          "Recorda: «Comença» per provar amb les fletxes, «Comprova» perquè les tecles es premin soles.|Recuerda: «Empieza» para probar con las flechas, «Comprueba» para que las teclas se pulsen solas.",
          "Quin bloc acaba la partida? (atura tot)|¿Qué bloque acaba la partida? (para todo)"
        ],
        slides: ['s10', 's11'], app: "De «Recorda» fins a «Investiga»: les preguntes de repàs, la missió, les quatre targetes de «Descobreix», ordenar les peces, «El pla en paper» (ja fet: «Ho hem fet!»), les peces 1 a 3, la pausa activa, el bloc que acaba la partida i la pregunta del clon que no s'esborra.|De «Recuerda» hasta «Investiga»: las preguntas de repaso, la misión, las cuatro tarjetas de «Descubre», ordenar las piezas, «El plan en papel» (ya hecho: «¡Lo hemos hecho!»), las piezas 1 a 3, la pausa activa, el bloque que acaba la partida y la pregunta del clon que no se borra.", org: "Individual|Individual" },
      { min: 12, t: "Crea i prova creuada|Crea y prueba cruzada", fase: 'crea',
        fa: "Cada alumne/a completa el seu videojoc al pas «Crea»: velocitat variable, límit i fi de partida, i hi posa el seu toc personal. Quan l'app el dona per bo, el desa. Després, les parelles canvien d'ordinador: cadascú prova el videojoc de l'altre dues vegades, sense ajuda, i respon la valoració. Torneu al lloc i que cadascú faci un canvi a partir del que li han dit.|Cada alumno/a completa su videojuego en el paso «Crea»: velocidad variable, límite y fin de partida, y le pone su toque personal. Cuando la app lo da por bueno, lo guarda. Después, las parejas cambian de ordenador: cada uno prueba el videojuego del otro dos veces, sin ayuda, y responde la valoración. Volved al sitio y que cada uno haga un cambio a partir de lo que le han dicho.",
        diu: [
          "Què falta encara al programa de partida? (velocitat variable, límit i fi de partida)|¿Qué falta todavía en el programa de partida? (velocidad variable, límite y fin de partida)",
          "Quan provis el videojoc del company/a, l'autor/a mira i no diu res: és la prova de veritat.|Cuando pruebes el videojuego del compañero/a, el autor/a mira y no dice nada: es la prueba de verdad.",
          "Digues una cosa que t'ha agradat i una que milloraries, amb el perquè.|Di una cosa que te ha gustado y una que mejorarías, con el porqué.",
          "Què canviaràs del teu videojoc amb el que t'han dit?|¿Qué cambiarás de tu videojuego con lo que te han dicho?"
        ],
        slides: ['s12', 's13'], app: "Passos «Crea» (Esquiva els meteorits, es desa als projectes) i la valoració del videojoc del company/a.|Pasos «Crea» (Esquiva los meteoritos, se guarda en los proyectos) y la valoración del videojuego del compañero/a.", org: "Individual i després per parelles creuades|Individual y después por parejas cruzadas" },
      { min: 8, t: "Mostra, tancament i tiquet|Muestra, cierre y ticket", fase: 'tancament',
        fa: "Projecta dos o tres videojocs voluntaris: l'autor/a explica una peça i un canvi que ha fet després de la prova. Repassa el resum, deixa que facin les preguntes finals i fes el tiquet a la porta.|Proyecta dos o tres videojuegos voluntarios: el autor/a explica una pieza y un cambio que ha hecho después de la prueba. Repasa el resumen, deja que hagan las preguntas finales y haz el ticket en la puerta.",
        diu: [
          "Quin canvi has fet després que el provés el company/a?|¿Qué cambio has hecho después de que lo probara el compañero/a?",
          "Quina part de la unitat t'ha costat més: l'atzar, els clons o la dificultat?|¿Qué parte de la unidad te ha costado más: el azar, los clones o la dificultad?",
          "Què vol dir que un videojoc és «difícil però possible»?|¿Qué quiere decir que un videojuego es «difícil pero posible»?"
        ],
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
        "Dona-li les targetes del provador/a: què has fet primer? On t'has encallat? Què canviaries? Recorda que una opinió útil diu el perquè.|Dale las tarjetas del probador/a: ¿qué has hecho primero? ¿Dónde te has atascado? ¿Qué cambiarías? Recuerda que una opinión útil dice el porqué."],
      ["Al pas «Crea», canvia el «mou-te 4» del clon per la variable però s'oblida de fer créixer la velocitat.|En el paso «Crea», cambia el «muévete 4» del clon por la variable pero se olvida de hacer crecer la velocidad.", "Que miri el número de velocitat a l'escenari mentre funciona: canvia? Quin bloc el faria créixer, i on (a la fàbrica, després de cada clon)?|Que mire el número de velocidad en el escenario mientras funciona: ¿cambia? ¿Qué bloque lo haría crecer, y dónde (en la fábrica, después de cada clon)?"]
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
        ["Provar i millorar|Probar y mejorar", "Dona una valoració amable i amb el perquè, i fa un canvi al seu videojoc a partir de la que rep.|Da una valoración amable y con el porqué, y hace un cambio en su videojuego a partir de la que recibe.", "Prova el videojoc del company/a, però la valoració és molt general o no canvia res del seu.|Prueba el videojuego del compañero/a, pero la valoración es muy general o no cambia nada del suyo."],
        [
          "El pla en paper|El plan en papel",
          "El pla té escenari, regles de punts i vides, dificultat (inici, pujada i límit) i un toc propi.|El plan tiene escenario, reglas de puntos y vidas, dificultad (inicio, subida y límite) y un toque propio.",
          "El pla té el dibuix, però li falten regles o la dificultat.|El plan tiene el dibujo, pero le faltan reglas o la dificultad."
        ]
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
        nota: "Deixa-la projectada mentre omplen el pla en paper.|Déjala proyectada mientras rellenan el plan en papel.", pic: "img/ment/lli.webp" },
      { id: 's6', k: 'media', t: "Així queda el videojoc|Así queda el videojuego", x: "Aquí la nau es mou sola; al vostre, amb les fletxes.|Aquí la nave se mueve sola; en el vuestro, con las flechas.",
        media: { k: 'stage', w: GW, prog: GAME, varNames: VN, time: 14 },
        nota: "Fes notar els números de punts, vides i velocitat. Pregunta quan creuen que s'acabarà.|Haz notar los números de puntos, vidas y velocidad. Pregunta cuándo creen que se acabará." },
      { id: 's7', k: 'media', t: "Compte amb els xocs!|¡Cuidado con los choques!", x: "Si el clon toca la nau: vides −1, so i esborra aquest clon.|Si el clon toca la nave: vidas −1, sonido y borra este clon.", media: { k: 'stage', w: { bg: "espai", sprites: [{ id: 'nau', art: "nau", x: 0, y: -140, rot: "none" }, { id: 'meteorit', art: "meteorit", x: 0, y: 170, rot: "none" }], vars: ["punts", "vides"] }, prog: "@meteorit flag{ hide setv:vides,3 setv:punts,0 point:180 setx:0 sety:170 clone wait:1.5 setx:150 clone wait:1.5 setx:-20 clone } clone{ show until:y<-160{ move:6 if:touch:nau{ chv:vides,-1 sound:xoc delclone } } chv:punts,1 delclone }", varNames: { punts: "punts|puntos", vides: "vides|vidas" }, time: 7 }, nota: "Simula-ho: camina tocant una cadira i resta una vida a cada pas en veu alta. Riuran, i no se n'oblidaran. Després, mireu la demo: cada xoc treu una sola vida.|Simúlalo: camina tocando una silla y resta una vida en cada paso en voz alta. Se reirán, y no lo olvidarán. Después, mirad la demo: cada choque quita una sola vida." },
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
