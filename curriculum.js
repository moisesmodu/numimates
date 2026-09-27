/* ===== Temari de primària (1r a 6è) · textos «català|castellano» =====
   Cada lliçó: [títol, [habilitats], nivell]. Una habilitat pot portar paràmetre: 'g.add:20'. */
const UCOL = ['#36A9E1', '#3CC46A', '#FF9A3C', '#FF6FA3', '#8A4FB0', '#22B5A0', '#E08E00', '#FF5A5F'];
const U = (title, desc, guide, lessons) => ({ title, desc, guide, lessons: lessons.map(([t, sk, L_]) => ({ t, sk, L: L_ })) });

const COURSES = [
  { id: 'c1', n: 1, name: '1r|1º', long: '1r de primària|1º de primaria', emoji: '🐣', units: [
    U('Números fins al 20|Números hasta el 20', 'Comptar, ordenar i comparar.|Contar, ordenar y comparar.', 'numi', [
      ['Comptem fins a 10|Contamos hasta 10', ['g.count:10'], 1], ['Comptem fins a 20|Contamos hasta 20', ['g.count:20', 'g.next:20'], 2], ['Abans i després|Antes y después', ['g.next:20', 'g.cmp:20'], 2],
      ['Desenes i unitats|Decenas y unidades', ['g.blocks:20', 'g.cmp:20'], 2], ['Més gran o més petit|Mayor o menor', ['g.cmp:20', 'g.next:20', 'g.count:20'], 3]]),
    U('Sumes fins al 20|Sumas hasta el 20', 'Ajuntar i afegir.|Juntar y añadir.', 'numi', [
      ['Sumes fins a 10|Sumas hasta 10', ['g.add:10'], 1], ['Més sumes fins a 10|Más sumas hasta 10', ['g.add:10'], 2], ['Sumes fins al 20|Sumas hasta el 20', ['g.add:20'], 2],
      ['Fem desena|Hacemos decena', ['g.add:20'], 3], ['El número amagat|El número escondido', ['g.add:20'], 5]]),
    U('Restes fins al 20|Restas hasta el 20', 'Treure i comptar el que queda.|Quitar y contar lo que queda.', 'guida', [
      ['Treure fins a 10|Quitar hasta 10', ['g.sub:10'], 1], ['Restes fins a 10|Restas hasta 10', ['g.sub:10'], 2], ['Restes fins al 20|Restas hasta el 20', ['g.sub:20'], 2],
      ['Passem la desena|Pasamos la decena', ['g.sub:20'], 3], ['Dobles i meitats|Dobles y mitades', ['g.double:10', 'g.sub:20'], 2]]),
    U('Números fins al 100|Números hasta el 100', 'Desenes, unitats i números grans.|Decenas, unidades y números grandes.', 'vuit', [
      ['Les desenes|Las decenas', ['g.blocks:100', 'g.seq:tens'], 1], ['Llegir números|Leer números', ['g.words:100', 'g.blocks:100'], 2], ['Abans i després|Antes y después', ['g.next:100'], 2],
      ['Comparar|Comparar', ['g.cmp:100'], 3], ['Sumes de desenes|Sumas de decenas', ['g.add:100', 'g.cmp:100'], 1]]),
    U('Formes i patrons|Formas y patrones', 'Figures, colors i sèries.|Figuras, colores y series.', 'guida', [
      ['Les formes|Las formas', ['g.shape:simple'], 1], ['Patrons de colors|Patrones de colores', ['l.pattern'], 1], ['De 2 en 2|De 2 en 2', ['g.seq:2'], 1],
      ['Costats i vèrtexs|Lados y vértices', ['g.shape:simple'], 3], ['Sèries i patrons|Series y patrones', ['l.pattern', 'g.seq:tens', 'g.seq:2'], 2]]),
    U('Mesures i diners|Medidas y dinero', 'Hores, centímetres i euros.|Horas, centímetros y euros.', 'tuga', [
      ['Les hores en punt|Las horas en punto', ['g.clock:o'], 1], ['Comptem euros|Contamos euros', ['g.coins:10'], 1], ['Mesurem amb el regle|Medimos con la regla', ['g.ruler:10'], 1],
      ['Més euros|Más euros', ['g.coins:20'], 2], ['Hores i mesures|Horas y medidas', ['g.clock:o', 'g.ruler:15', 'g.coins:20'], 2]]),
    U('Problemes|Problemas', 'Llegeix i pensa: sumo o resto?|Lee y piensa: ¿sumo o resto?', 'flama', [
      ['Problemes de sumar|Problemas de sumar', ['g.prob:add'], 1], ['Problemes de restar|Problemas de restar', ['g.prob:less'], 1], ['Sumar o restar?|¿Sumar o restar?', ['g.prob:add', 'g.prob:less'], 2],
      ['Problemes fins al 20|Problemas hasta el 20', ['g.prob:add', 'g.prob:less'], 3], ['Petits detectius|Pequeños detectives', ['g.prob:add', 'g.prob:less', 'g.prob:cmp'], 3]])
  ] },
  { id: 'c2', n: 2, name: '2n|2º', long: '2n de primària|2º de primaria', emoji: '🐥', units: [
    U('Números fins al 1.000|Números hasta el 1.000', 'Centenes, desenes i unitats.|Centenas, decenas y unidades.', 'numi', [
      ['Les centenes|Las centenas', ['g.blocks:1000'], 1], ['Llegir i escriure|Leer y escribir', ['g.words:1000', 'g.blocks:1000'], 2], ['Valor de posició|Valor de posición', ['n.place:3', 'n.decomp:3'], 1],
      ['Comparar|Comparar', ['g.cmp:1000', 'g.next:1000'], 3], ['Ordenar|Ordenar', ['n.order:3', 'g.cmp:1000'], 3]]),
    U('Sumes i restes|Sumas y restas', 'Càlcul mental i portar-ne.|Cálculo mental y llevadas.', 'numi', [
      ['Sumes de cap|Sumas de cabeza', ['g.add:100'], 2], ['Restes de cap|Restas de cabeza', ['g.sub:100'], 2], ['Sumes portant-ne|Sumas llevando', ['g.add:100'], 4],
      ['Restes portant-ne|Restas llevando', ['g.sub:100'], 4], ['El número amagat|El número escondido', ['g.add:100', 'g.sub:100'], 5]]),
    U('Comencem a multiplicar|Empezamos a multiplicar', 'Grups iguals i primeres taules.|Grupos iguales y primeras tablas.', 'vuit', [
      ['Sumes repetides|Sumas repetidas', ['g.repeat'], 1], ['Files i columnes|Filas y columnas', ['m.array'], 1], ['Taules del 2 i del 10|Tablas del 2 y del 10', ['g.table:2-10'], 1],
      ['Taula del 5|Tabla del 5', ['g.table:5', 'g.table:2-10'], 2], ['Dobles i meitats|Dobles y mitades', ['g.double:50'], 2]]),
    U('Lògica|Lógica', 'Sèries, parells i balances.|Series, pares y balanzas.', 'guida', [
      ['Sèries|Series', ['g.seq:5', 'l.pattern'], 2], ['Parells i senars|Pares e impares', ['l.odd'], 1], ['Sèries amb salts|Series con saltos', ['l.series'], 2],
      ['Balances|Balanzas', ['l.balance'], 1], ['Enigmes|Enigmas', ['l.balance', 'l.series', 'l.odd'], 2]]),
    U('Mesures i formes|Medidas y formas', 'Rellotge, regle, euros i figures.|Reloj, regla, euros y figuras.', 'tuga', [
      ['Hores i mitges|Horas y medias', ['g.clock:h'], 1], ['El regle|La regla', ['g.ruler:15'], 3], ['Metres i centímetres|Metros y centímetros', ['me.units'], 2],
      ['Euros|Euros', ['g.coins:50'], 2], ['Les figures|Las figuras', ['g.shape:all'], 3]]),
    U('Problemes|Problemas', 'Llegeix, pensa i resol.|Lee, piensa y resuelve.', 'flama', [
      ['Problemes de sumar|Problemas de sumar', ['p.add'], 1], ['Problemes de restar|Problemas de restar', ['g.prob:sub', 'p.add'], 3], ['Problemes de multiplicar|Problemas de multiplicar', ['g.prob:mul'], 1],
      ['Quin càlcul faig?|¿Qué cálculo hago?', ['p.add', 'g.prob:mul', 'g.prob:sub'], 3], ['Grans detectius|Grandes detectives', ['p.add', 'g.prob:mul', 'g.prob:sub'], 4]])
  ] },
  { id: 'c3', n: 3, name: '3r|3º', long: '3r de primària|3º de primaria', emoji: '🦊', units: [
    U('Números fins al 9.999|Números hasta el 9.999', 'Unitats de miler i valor de posició.|Unidades de millar y valor de posición.', 'numi', [
      ['Unitats de miler|Unidades de millar', ['n.place:4', 'n.decomp:4'], 2], ['Llegir i escriure|Leer y escribir', ['n.words:4'], 2], ['Comparar i ordenar|Comparar y ordenar', ['n.compare:4', 'n.order:4'], 3],
      ['Arrodonir|Redondear', ['n.round:4'], 4], ['Tot plegat|Todo junto', ['n.place:4', 'n.compare:4', 'n.words:4'], 3]]),
    U('Sumes i restes|Sumas y restas', 'Portant-ne i càlcul mental.|Llevadas y cálculo mental.', 'numi', [
      ['Sumes portant-ne|Sumas llevando', ['a.add'], 3], ['Restes portant-ne|Restas llevando', ['a.sub'], 3], ['Càlcul mental|Cálculo mental', ['a.add', 'a.sub'], 2],
      ['El número amagat|El número escondido', ['a.missing'], 4], ['Estimacions|Estimaciones', ['a.estimate', 'a.add'], 4]]),
    U('Les taules|Las tablas', 'De la taula del 2 a la del 10.|De la tabla del 2 a la del 10.', 'vuit', [
      ['Taules del 2, 5 i 10|Tablas del 2, 5 y 10', ['m.table', 'm.array'], 1], ['Taules del 3, 4 i 6|Tablas del 3, 4 y 6', ['m.table', 'm.array'], 2], ['Taules del 7, 8 i 9|Tablas del 7, 8 y 9', ['m.table'], 3],
      ['Totes les taules|Todas las tablas', ['m.table', 'm.missing'], 4], ['Per 10 i per 100|Por 10 y por 100', ['m.by10'], 4]]),
    U('Dividir|Dividir', 'Repartir a parts iguals.|Repartir a partes iguales.', 'vuit', [
      ['Repartir|Repartir', ['d.share'], 1], ['Divisions fàcils|Divisiones fáciles', ['d.table', 'd.rel'], 2], ['Més divisions|Más divisiones', ['d.table'], 3],
      ['Què sobra?|¿Qué sobra?', ['d.rem'], 4], ['Multiplicar i dividir|Multiplicar y dividir', ['d.rel', 'm.table'], 3]]),
    U('Fraccions|Fracciones', 'Meitats, terços i quarts.|Mitades, tercios y cuartos.', 'tuga', [
      ['Meitats i quarts|Mitades y cuartos', ['f.pie'], 1], ['Terços i més|Tercios y más', ['f.pie'], 2], ['Llegir fraccions|Leer fracciones', ['f.read'], 2],
      ['La meitat de…|La mitad de…', ['f.of'], 3], ['Fraccions|Fracciones', ['f.pie', 'f.read', 'f.of'], 3]]),
    U('Mesures|Medidas', 'Hores, pes, capacitat i diners.|Horas, peso, capacidad y dinero.', 'tuga', [
      ["Quarts d'hora|Cuartos de hora", ['me.clock'], 2], ['Rellotge de 5 en 5|Reloj de 5 en 5', ['me.clock'], 3], ['Pes i capacitat|Peso y capacidad', ['me.units'], 4],
      ['Diners|Dinero', ['me.money'], 4], ['Perímetres|Perímetros', ['me.perim', 'me.shape'], 3]]),
    U('Lògica i problemes|Lógica y problemas', 'Pensa com un detectiu.|Piensa como un detective.', 'flama', [
      ['Sèries|Series', ['l.series'], 3], ['Balances|Balanzas', ['l.balance'], 3], ['Problemes|Problemas', ['p.add', 'p.mul'], 2],
      ['Problemes de dividir|Problemas de dividir', ['p.div'], 3], ['Detectius|Detectives', ['p.add', 'p.mul', 'p.div', 'l.balance'], 3]])
  ] },
  { id: 'c4', n: 4, name: '4t|4º', long: '4t de primària|4º de primaria', emoji: '🐙', units: [
    U('Els grans números|Los números grandes', 'Llegeix, escriu i compara fins al 99.999.|Lee, escribe y compara hasta el 99.999.', 'numi', [
      ['Unitats, desenes i centenes|Unidades, decenas y centenas', ['n.place', 'n.decomp'], 1], ['Fins al 9.999|Hasta el 9.999', ['n.place', 'n.words', 'n.decomp'], 2], ['Fins al 99.999|Hasta el 99.999', ['n.place', 'n.words', 'n.next'], 3],
      ['Comparar i ordenar|Comparar y ordenar', ['n.compare', 'n.order'], 4], ['Arrodonir|Redondear', ['n.round', 'n.compare'], 5]]),
    U('Sumes i restes|Sumas y restas', 'Càlcul mental, portar-ne i el número amagat.|Cálculo mental, llevadas y el número escondido.', 'numi', [
      ['Sumes de cap|Sumas de cabeza', ['a.add'], 1], ['Restes de cap|Restas de cabeza', ['a.sub', 'a.add'], 2], ['Portant-ne|Llevando', ['a.add', 'a.sub'], 3],
      ['El número amagat|El número escondido', ['a.missing', 'a.estimate'], 4], ['Números grans|Números grandes', ['a.add', 'a.sub', 'a.missing'], 5]]),
    U('Multiplicar|Multiplicar', 'Les taules, per 10 i per 100 i multiplicacions grans.|Las tablas, por 10 y por 100 y multiplicaciones grandes.', 'vuit', [
      ['Taules del 2, 5 i 10|Tablas del 2, 5 y 10', ['m.table', 'm.array'], 1], ['Taules del 3, 4 i 6|Tablas del 3, 4 y 6', ['m.table', 'm.array'], 2], ['Taules del 7, 8 i 9|Tablas del 7, 8 y 9', ['m.table', 'm.missing'], 3],
      ['Per 10 i per 100|Por 10 y por 100', ['m.by10', 'm.missing'], 4], ['Multiplicacions grans|Multiplicaciones grandes', ['m.big', 'm.table'], 5]]),
    U('Dividir|Dividir', 'Repartir a parts iguals i saber què sobra.|Repartir a partes iguales y saber qué sobra.', 'vuit', [
      ['Repartir a parts iguals|Repartir a partes iguales', ['d.share'], 1], ['Divisió i multiplicació|División y multiplicación', ['d.table', 'd.rel'], 2], ['Divisions de les taules|Divisiones de las tablas', ['d.table', 'd.rel'], 3],
      ['Què sobra?|¿Qué sobra?', ['d.rem'], 4], ['Dividir números grans|Dividir números grandes', ['d.big', 'd.table'], 5]]),
    U('Lògica|Lógica', 'Sèries, balances i endevinalles de números.|Series, balanzas y adivinanzas de números.', 'guida', [
      ['Sèries i patrons|Series y patrones', ['l.series', 'l.pattern'], 1], ['Parells i senars|Pares e impares', ['l.odd', 'l.series'], 2], ['Balances misterioses|Balanzas misteriosas', ['l.balance', 'l.series'], 3],
      ['Endevinalles|Adivinanzas', ['l.riddle', 'l.balance'], 4], ['Detectius de números|Detectives de números', ['l.series', 'l.riddle', 'l.balance'], 5]]),
    U('Fraccions|Fracciones', 'Meitats, terços, quarts… i molt més!|Mitades, tercios, cuartos… ¡y mucho más!', 'tuga', [
      ['Meitats i quarts|Mitades y cuartos', ['f.pie'], 1], ['Llegir fraccions|Leer fracciones', ['f.read', 'f.pie'], 2], ["La fracció d'un número|La fracción de un número", ['f.of'], 3],
      ['Comparar fraccions|Comparar fracciones', ['f.cmp', 'f.of'], 4], ['Mestres de les fraccions|Maestros de las fracciones', ['f.pie', 'f.read', 'f.of', 'f.cmp'], 5]]),
    U('Mesures i formes|Medidas y formas', 'Rellotges, metres, diners i figures.|Relojes, metros, dinero y figuras.', 'tuga', [
      ['Quina hora és?|¿Qué hora es?', ['me.clock'], 1], ['Metres i centímetres|Metros y centímetros', ['me.units', 'me.clock'], 2], ['Formes i perímetres|Formas y perímetros', ['me.shape', 'me.perim'], 3],
      ['Diners i mesures|Dinero y medidas', ['me.money', 'me.units'], 4], ['Quarts i durades|Cuartos y duraciones', ['me.clock', 'me.perim', 'me.money'], 5]]),
    U('Problemes|Problemas', 'Llegeix, pensa i resol com un detectiu.|Lee, piensa y resuelve como un detective.', 'flama', [
      ['Sumar i restar|Sumar y restar', ['p.add'], 1], ['Multiplicar|Multiplicar', ['p.mul', 'p.add'], 2], ['Dividir|Dividir', ['p.div', 'p.mul'], 3],
      ['Dos passos|Dos pasos', ['p.two'], 4], ['Grans reptes|Grandes retos', ['p.two', 'p.big'], 5]])
  ] },
  { id: 'c5', n: 5, name: '5è|5º', long: '5è de primària|5º de primaria', emoji: '🐢', units: [
    U('Els grans números|Los números grandes', 'Fins al milió i més enllà.|Hasta el millón y más allá.', 'numi', [
      ['Fins al milió|Hasta el millón', ['n.place:6', 'n.words:6'], 3], ['Llegir milions|Leer millones', ['n.words:7', 'n.place:7'], 3], ['Comparar i ordenar|Comparar y ordenar', ['n.compare:6', 'n.order:6'], 4],
      ['Arrodonir|Redondear', ['n.round:6'], 5], ['Tot plegat|Todo junto', ['n.place:7', 'n.compare:6', 'n.round:6'], 5]]),
    U('Nombres decimals|Números decimales', 'Dècimes, centèsimes i la coma.|Décimas, centésimas y la coma.', 'numi', [
      ['Dècimes i centèsimes|Décimas y centésimas', ['dec.read'], 1], ['Comparar decimals|Comparar decimales', ['dec.cmp'], 2], ['Ordenar decimals|Ordenar decimales', ['dec.order'], 3],
      ['Sumar i restar|Sumar y restar', ['dec.add'], 3], ['Per 10, 100 i 1.000|Por 10, 100 y 1.000', ['dec.x10'], 4]]),
    U('Multiplicar i dividir|Multiplicar y dividir', 'Operacions grans i combinades.|Operaciones grandes y combinadas.', 'vuit', [
      ['Multiplicacions grans|Multiplicaciones grandes', ['m.big'], 5], ['Dividir per una xifra|Dividir entre una cifra', ['d.big'], 5], ['Dividir per dues xifres|Dividir entre dos cifras', ['div2'], 3],
      ['Operacions combinades|Operaciones combinadas', ['ops'], 1], ['Tot plegat|Todo junto', ['m.big', 'div2', 'ops'], 4]]),
    U('Múltiples i divisors|Múltiplos y divisores', 'Taules, divisors i nombres primers.|Tablas, divisores y números primos.', 'guida', [
      ['Múltiples|Múltiplos', ['mult.mul'], 1], ['Divisors|Divisores', ['mult.div'], 2], ['Nombres primers|Números primos', ['mult.prime'], 3],
      ['Criteris de divisibilitat|Criterios de divisibilidad', ['mult.crit'], 3], ['Tot plegat|Todo junto', ['mult.mul', 'mult.div', 'mult.prime', 'mult.crit'], 4]]),
    U('Fraccions|Fracciones', 'Equivalents, sumes i simplificar.|Equivalentes, sumas y simplificar.', 'tuga', [
      ['Fraccions equivalents|Fracciones equivalentes', ['fr.eq'], 2], ['Sumar i restar fraccions|Sumar y restar fracciones', ['fr.addS'], 2], ["Fracció d'un número|Fracción de un número", ['f.of'], 5],
      ['Comparar|Comparar', ['f.cmp'], 5], ['Simplificar|Simplificar', ['fr.simp'], 2]]),
    U('Geometria|Geometría', 'Angles, àrees i perímetres.|Ángulos, áreas y perímetros.', 'tuga', [
      ["Tipus d'angles|Tipos de ángulos", ['geo.angle'], 1], ['Graus|Grados', ['geo.angle'], 3], ['Àrea del rectangle|Área del rectángulo', ['geo.area'], 2],
      ['Àrea del triangle|Área del triángulo', ['geo.area'], 5], ['Perímetres i àrees|Perímetros y áreas', ['geo.area', 'me.perim'], 4]]),
    U('Problemes|Problemas', 'Diners, decimals i dos passos.|Dinero, decimales y dos pasos.', 'flama', [
      ['Problemes amb decimals|Problemas con decimales', ['p.dec'], 2], ['Dos passos|Dos pasos', ['p.two'], 4], ['Grans reptes|Grandes retos', ['p.big'], 5],
      ['Diners|Dinero', ['p.dec'], 4], ['Mestres dels problemes|Maestros de los problemas', ['p.two', 'p.big', 'p.dec'], 5]])
  ] },
  { id: 'c6', n: 6, name: '6è|6º', long: '6è de primària|6º de primaria', emoji: '🐉', units: [
    U('Nombres enters|Números enteros', 'Negatius, temperatures i la recta.|Negativos, temperaturas y la recta.', 'numi', [
      ['Temperatures|Temperaturas', ['int'], 1], ['Comparar enters|Comparar enteros', ['int'], 2], ['Puja i baixa|Sube y baja', ['int'], 3],
      ['Sumar i restar enters|Sumar y restar enteros', ['int'], 4], ['Tot plegat|Todo junto', ['int'], 5]]),
    U('Potències i arrels|Potencias y raíces', 'Quadrats, cubs i arrels.|Cuadrados, cubos y raíces.', 'vuit', [
      ['Quadrats|Cuadrados', ['pow'], 1], ['Cubs|Cubos', ['pow'], 2], ['Potències de 10|Potencias de 10', ['pow'], 3],
      ['Arrels quadrades|Raíces cuadradas', ['pow'], 4], ['Tot plegat|Todo junto', ['pow', 'ops'], 5]]),
    U('Decimals i operacions|Decimales y operaciones', 'Multiplicar, dividir i jerarquia.|Multiplicar, dividir y jerarquía.', 'numi', [
      ['Sumar i restar|Sumar y restar', ['dec.add'], 4], ['Multiplicar decimals|Multiplicar decimales', ['dec.mul'], 1], ['Dividir decimals|Dividir decimales', ['dec.mul'], 3],
      ['Per 10, 100 i 1.000|Por 10, 100 y 1.000', ['dec.x10'], 5], ['Jerarquia de les operacions|Jerarquía de las operaciones', ['ops'], 4]]),
    U('Fraccions|Fracciones', 'Simplificar i sumar amb diferent denominador.|Simplificar y sumar con distinto denominador.', 'guida', [
      ['Simplificar|Simplificar', ['fr.simp'], 3], ['Sumar amb diferent denominador|Sumar con distinto denominador', ['fr.addD'], 2], ['Sumar i restar|Sumar y restar', ['fr.addD'], 4],
      ["Fracció d'un número|Fracción de un número", ['f.of'], 5], ['Tot plegat|Todo junto', ['fr.simp', 'fr.addD', 'fr.eq'], 5]]),
    U('Percentatges i proporcions|Porcentajes y proporciones', 'Descomptes, receptes i escales.|Descuentos, recetas y escalas.', 'flama', [
      ['El 50%, el 25% i el 10%|El 50%, el 25% y el 10%', ['pct'], 1], ['Més percentatges|Más porcentajes', ['pct'], 3], ['Descomptes|Descuentos', ['pct'], 5],
      ['Proporcionalitat|Proporcionalidad', ['prop'], 2], ['Escales i receptes|Escalas y recetas', ['prop', 'pct'], 4]]),
    U('Estadística|Estadística', 'Gràfics, moda, mitjana i rang.|Gráficos, moda, media y rango.', 'tuga', [
      ['Llegir gràfics|Leer gráficos', ['stat'], 1], ['La moda|La moda', ['stat'], 2], ['La mitjana|La media', ['stat'], 3],
      ['El rang|El rango', ['stat'], 4], ['Tot plegat|Todo junto', ['stat'], 5]]),
    U('Geometria i volum|Geometría y volumen', 'Angles, àrees i cubs.|Ángulos, áreas y cubos.', 'tuga', [
      ['Angles del triangle|Ángulos del triángulo', ['geo.angle'], 5], ['Àrees|Áreas', ['geo.area'], 5], ['Comptar cubs|Contar cubos', ['vol'], 1],
      ['Volum del prisma|Volumen del prisma', ['vol'], 4], ['Mestres de la geometria|Maestros de la geometría', ['vol', 'geo.area', 'geo.angle'], 5]]),
    U('Grans problemes|Grandes problemas', 'El repte final de primària!|¡El reto final de primaria!', 'flama', [
      ['Problemes amb decimals|Problemas con decimales', ['p.dec'], 5], ['Dos passos|Dos pasos', ['p.two'], 5], ['Grans reptes|Grandes retos', ['p.big'], 5],
      ['Proporcions|Proporciones', ['prop'], 5], ['Mestres de primària|Maestros de primaria', ['p.dec', 'p.big', 'pct', 'prop'], 5]])
  ] }
];
/* Nivell 2 de cada unitat: 5 lliçons més, més difícils, que barregen cada tema amb el següent. */
COURSES.forEach(c => c.units.forEach((u, i) => {
  u.id = `${c.id}-${i + 1}`; u.color = UCOL[i % UCOL.length];
  if (/^Lògica/.test(u.title)) u.guide = 'cavaller';
  const base = u.lessons.slice(0, 5);
  base.forEach((l, k) => {
    const nx = base[Math.min(k + 1, 4)], [ca, es] = l.t.split('|');
    u.lessons.push({ t: `${ca} · nivell 2|${es || ca} · nivel 2`, sk: [...new Set([...l.sk, ...nx.sk])], L: Math.min(5, l.L + 1), lv2: true });
  });
}));
