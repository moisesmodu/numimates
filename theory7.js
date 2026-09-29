/* Teoria de les unitats noves d'ESO (Decret 175/2022), en català|castellà.
   Mateix format que theory.js (hook, parts, words, mistakes, recap i tip); s'hi afegeix sense tocar les existents. */
Object.assign(THEORY, {
"c7-9": {
"hook": "Un problema d'edats, de preus o de monedes és com un enigma amb pistes. L'àlgebra et deixa escriure totes les pistes en una sola línia i resoldre-les amb un mètode que funciona sempre.|Un problema de edades, de precios o de monedas es como un enigma con pistas. El álgebra te deja escribir todas las pistas en una sola línea y resolverlas con un método que funciona siempre.",
"parts": [
{
"t": "Del text a l'àlgebra|Del texto al álgebra",
"x": "La <b>incògnita</b>, x, és el nombre que no coneixes. Tradueix l'enunciat a trossos: «el doble» és 2x, «tres més» és x + 3, «la meitat» és x/2 i «el nombre següent» és x + 1. Compte amb l'ordre: «el doble de la suma d'un nombre i 3» és 2(x + 3), perquè primer se suma i després es duplica.|La <b>incógnita</b>, x, es el número que no conoces. Traduce el enunciado a trozos: «el doble» es 2x, «tres más» es x + 3, «la mitad» es x/2 y «el número siguiente» es x + 1. Cuidado con el orden: «el doble de la suma de un número y 3» es 2(x + 3), porque primero se suma y después se duplica.",
"ex": [
"«El triple d'un nombre menys 4»|«El triple de un número menos 4»",
"Triple: 3x. Menys 4: 3x − 4|Triple: 3x. Menos 4: 3x − 4",
"Resultat: <span class=\"hl\">3x − 4</span>|Resultado: <span class=\"hl\">3x − 4</span>"
]
},
{
"t": "Els quatre passos|Los cuatro pasos",
"x": "<b>1.</b> Decideix què és x i escriu-ho. <b>2.</b> Escriu les altres quantitats a partir de x. <b>3.</b> Planteja l'equació: dues maneres de dir el mateix valor, unides per un =. <b>4.</b> Resol-la, contesta la pregunta i comprova que la solució té sentit.|<b>1.</b> Decide qué es x y escríbelo. <b>2.</b> Escribe las otras cantidades a partir de x. <b>3.</b> Plantea la ecuación: dos maneras de decir el mismo valor, unidas por un =. <b>4.</b> Resuélvela, contesta la pregunta y comprueba que la solución tiene sentido.",
"ex": [
"En Pau té 4 anys més que la Júlia i sumen 30|Pau tiene 4 años más que Júlia y suman 30",
"Júlia: x · Pau: x + 4|Júlia: x · Pau: x + 4",
"x + (x + 4) = 30 → 2x = 26 → x = 13|x + (x + 4) = 30 → 2x = 26 → x = 13",
"La Júlia té <span class=\"hl\">13 anys</span> i en Pau, 17: 13 + 17 = 30 ✓|Júlia tiene <span class=\"hl\">13 años</span> y Pau, 17: 13 + 17 = 30 ✓"
]
},
{
"t": "Preus i monedes|Precios y monedas",
"x": "Si compres diverses unitats iguals, el preu total és el nombre d'unitats per x. Amb monedes (o entrades) de dos tipus, si n'hi ha x d'un tipus, de l'altre n'hi ha «total − x». Treballa sempre amb la mateixa unitat: tot en euros o tot en cèntims.|Si compras varias unidades iguales, el precio total es el número de unidades por x. Con monedas (o entradas) de dos tipos, si hay x de un tipo, del otro hay «total − x». Trabaja siempre con la misma unidad: todo en euros o todo en céntimos.",
"ex": [
"15 monedes de 2 € i d'1 €, en total 22 €|15 monedas de 2 € y de 1 €, en total 22 €",
"x de 2 € i 15 − x d'1 €|x de 2 € y 15 − x de 1 €",
"2x + (15 − x) = 22 → x = <span class=\"hl\">7</span>|2x + (15 − x) = 22 → x = <span class=\"hl\">7</span>",
"7 de 2 € i 8 d'1 €: 14 + 8 = 22 ✓|7 de 2 € y 8 de 1 €: 14 + 8 = 22 ✓"
]
},
{
"t": "Perímetres i angles|Perímetros y ángulos",
"x": "Fes un dibuix i escriu la mida de cada costat amb x. El <b>perímetre</b> és la suma de tots els costats, i els tres angles d'un triangle sumen <b>180°</b>.|Haz un dibujo y escribe la medida de cada lado con x. El <b>perímetro</b> es la suma de todos los lados, y los tres ángulos de un triángulo suman <b>180°</b>.",
"ex": [
"Rectangle: el llarg fa 3 cm més que l'ample; P = 26 cm|Rectángulo: el largo mide 3 cm más que el ancho; P = 26 cm",
"Costats: x, x + 3, x i x + 3|Lados: x, x + 3, x y x + 3",
"2x + 2(x + 3) = 26 → 4x = 20|2x + 2(x + 3) = 26 → 4x = 20",
"Ample: <span class=\"hl\">5 cm</span>; llarg: 8 cm|Ancho: <span class=\"hl\">5 cm</span>; largo: 8 cm"
]
}
],
"words": [
["incògnita|incógnita", "el valor que no coneixem i que anomenem x|el valor que no conocemos y que llamamos x"],
["plantejar|plantear", "escriure l'equació que diu el mateix que l'enunciat|escribir la ecuación que dice lo mismo que el enunciado"],
["consecutius|consecutivos", "nombres que van seguits: x, x + 1, x + 2|números que van seguidos: x, x + 1, x + 2"],
["comprovar|comprobar", "posar la solució a l'enunciat per veure si hi encaixa|poner la solución en el enunciado para ver si encaja"],
["perímetre|perímetro", "la suma de tots els costats d'una figura|la suma de todos los lados de una figura"]
],
"mistakes": [
["«El doble de la suma d'un nombre i 5 és 2x + 5.»|«El doble de la suma de un número y 5 es 2x + 5.»", "Primer se suma i després es duplica: 2(x + 5) = 2x + 10.|Primero se suma y después se duplica: 2(x + 5) = 2x + 10."],
["«Hi ha 15 monedes: x de 2 € i x d'1 €.»|«Hay 15 monedas: x de 2 € y x de 1 €.»", "Si n'hi ha x d'un tipus, de l'altre n'hi ha 15 − x.|Si hay x de un tipo, del otro hay 15 − x."],
["«He trobat x = 13 i ja està.»|«He encontrado x = 13 y ya está.»", "Llegeix què et pregunten: potser volen l'edat de l'altra persona (x + 4 = 17). I comprova-ho amb l'enunciat.|Lee qué te preguntan: quizá quieren la edad de la otra persona (x + 4 = 17). Y compruébalo con el enunciado."]
],
"recap": [
"Decideix què és x i escriu-ho.|Decide qué es x y escríbelo.",
"Escriu totes les quantitats a partir de x.|Escribe todas las cantidades a partir de x.",
"Equació: dues maneres de dir el mateix valor.|Ecuación: dos maneras de decir el mismo valor.",
"Resol, contesta la pregunta i comprova.|Resuelve, contesta la pregunta y comprueba."
],
"tip": "Si dubtes, prova-ho amb un nombre. Si x fos 10, quant valdria cada cosa? Si l'expressió funciona amb el 10, està ben plantejada; després ja la resols amb la x.|Si dudas, pruébalo con un número. Si x fuera 10, ¿cuánto valdría cada cosa? Si la expresión funciona con el 10, está bien planteada; después ya la resuelves con la x."
},
"c8-9": {
"hook": "Quan tindrà la mare el doble d'anys que tu? Quantes entrades d'adult s'han venut? Amb una equació o amb un sistema pots respondre preguntes que semblen endevinalles.|¿Cuándo tendrá tu madre el doble de años que tú? ¿Cuántas entradas de adulto se han vendido? Con una ecuación o con un sistema puedes responder preguntas que parecen adivinanzas.",
"parts": [
{
"t": "Plantejar amb una incògnita|Plantear con una incógnita",
"x": "Tria què és x, escriu-hi al costat què vol dir i expressa totes les quantitats a partir de x. L'equació iguala dues maneres de calcular el mateix: el total de diners, el total d'anys, el perímetre…|Elige qué es x, escribe a su lado qué significa y expresa todas las cantidades a partir de x. La ecuación iguala dos maneras de calcular lo mismo: el total de dinero, el total de años, el perímetro…",
"ex": [
"Si compro 5 pastissos em sobren 2 €; per comprar-ne 7 me'n falten 4|Si compro 5 pasteles me sobran 2 €; para comprar 7 me faltan 4",
"Diners: 5x + 2 i també 7x − 4|Dinero: 5x + 2 y también 7x − 4",
"5x + 2 = 7x − 4 → 6 = 2x → x = <span class=\"hl\">3 €</span>|5x + 2 = 7x − 4 → 6 = 2x → x = <span class=\"hl\">3 €</span>"
]
},
{
"t": "Edats: passat i futur|Edades: pasado y futuro",
"x": "Amb el temps, <b>tothom</b> es fa gran igual: d'aquí a n anys cada persona en té n més, i fa n anys cada persona en tenia n menys. Escriu les edats de cada moment en una taula petita abans de plantejar.|Con el tiempo, <b>todo el mundo</b> se hace mayor igual: dentro de n años cada persona tiene n más, y hace n años cada persona tenía n menos. Escribe las edades de cada momento en una tabla pequeña antes de plantear.",
"ex": [
"Pare: 40 anys. Fill: 10. Quan tindrà el triple?|Padre: 40 años. Hijo: 10. ¿Cuándo tendrá el triple?",
"D'aquí a x anys: 40 + x i 10 + x|Dentro de x años: 40 + x y 10 + x",
"40 + x = 3(10 + x) → 40 + x = 30 + 3x|40 + x = 3(10 + x) → 40 + x = 30 + 3x",
"10 = 2x → x = <span class=\"hl\">5 anys</span>|10 = 2x → x = <span class=\"hl\">5 años</span>"
]
},
{
"t": "Problemes amb dues incògnites|Problemas con dos incógnitas",
"x": "Si hi ha dues quantitats desconegudes i dues pistes, anomena-les x i y i escriu una equació per a cada pista. Les dues equacions formen un <b>sistema</b>.|Si hay dos cantidades desconocidas y dos pistas, llámalas x e y y escribe una ecuación para cada pista. Las dos ecuaciones forman un <b>sistema</b>.",
"ex": [
"Gallines i conills: 20 caps i 56 potes|Gallinas y conejos: 20 cabezas y 56 patas",
"Caps: x + y = 20|Cabezas: x + y = 20",
"Potes: 2x + 4y = 56|Patas: 2x + 4y = 56",
"y = 8 conills i x = <span class=\"hl\">12 gallines</span>|y = 8 conejos y x = <span class=\"hl\">12 gallinas</span>"
]
},
{
"t": "Resoldre i comprovar|Resolver y comprobar",
"x": "Resol el sistema per <b>substitució</b> (aïlles una incògnita i la substitueixes a l'altra equació) o per <b>reducció</b> (sumes o restes les equacions perquè en desaparegui una). Després comprova la solució amb l'<b>enunciat</b>, no només amb les equacions: potser les has plantejat malament.|Resuelve el sistema por <b>sustitución</b> (despejas una incógnita y la sustituyes en la otra ecuación) o por <b>reducción</b> (sumas o restas las ecuaciones para que desaparezca una). Después comprueba la solución con el <b>enunciado</b>, no solo con las ecuaciones: quizá las has planteado mal.",
"ex": [
"x + y = 20 → x = 20 − y|x + y = 20 → x = 20 − y",
"2(20 − y) + 4y = 56 → 2y = 16 → y = 8|2(20 − y) + 4y = 56 → 2y = 16 → y = 8",
"Comprova: 12 + 8 = 20 caps; 24 + 32 = <span class=\"hl\">56 potes</span> ✓|Comprueba: 12 + 8 = 20 cabezas; 24 + 32 = <span class=\"hl\">56 patas</span> ✓"
]
}
],
"words": [
["sistema d'equacions|sistema de ecuaciones", "dues equacions amb les mateixes incògnites que s'han de complir alhora|dos ecuaciones con las mismas incógnitas que se deben cumplir a la vez"],
["substitució|sustitución", "aïllar una incògnita i posar-la a l'altra equació|despejar una incógnita y ponerla en la otra ecuación"],
["reducció|reducción", "sumar o restar les equacions perquè desaparegui una incògnita|sumar o restar las ecuaciones para que desaparezca una incógnita"],
["plantejar|plantear", "traduir l'enunciat a equacions|traducir el enunciado a ecuaciones"]
],
"mistakes": [
["«D'aquí a 5 anys, el pare en tindrà 45 i el fill, 10.»|«Dentro de 5 años, el padre tendrá 45 y el hijo, 10.»", "Tots dos es fan grans: el fill en tindrà 10 + 5 = 15.|Los dos se hacen mayores: el hijo tendrá 10 + 5 = 15."],
["«Caps i potes: x + y = 56 i 2x + 4y = 20.»|«Cabezas y patas: x + y = 56 y 2x + 4y = 20.»", "Els caps compten animals (x + y = 20) i les potes són 2 per gallina i 4 per conill (2x + 4y = 56).|Las cabezas cuentan animales (x + y = 20) y las patas son 2 por gallina y 4 por conejo (2x + 4y = 56)."],
["«x = 12 i y = 8. No cal comprovar-ho.»|«x = 12 e y = 8. No hace falta comprobarlo.»", "Sempre val la pena: 12 + 8 = 20 caps i 24 + 32 = 56 potes. Ara sí que és segur.|Siempre vale la pena: 12 + 8 = 20 cabezas y 24 + 32 = 56 patas. Ahora sí que es seguro."]
],
"recap": [
"Una incògnita: una equació. Dues incògnites: un sistema.|Una incógnita: una ecuación. Dos incógnitas: un sistema.",
"Amb el temps, totes les edats canvien igual.|Con el tiempo, todas las edades cambian igual.",
"Cada pista de l'enunciat és una equació.|Cada pista del enunciado es una ecuación.",
"Comprova sempre amb l'enunciat.|Comprueba siempre con el enunciado."
],
"tip": "Fes una taula: una fila per a cada persona o cosa, i una columna per a cada moment o característica (ara, d'aquí a 5 anys; nombre, preu…). Les equacions surten gairebé soles de la taula.|Haz una tabla: una fila para cada persona o cosa, y una columna para cada momento o característica (ahora, dentro de 5 años; número, precio…). Las ecuaciones salen casi solas de la tabla."
},
"c9-9": {
"hook": "Les àrees, els productes de nombres i moltes situacions reals porten a sistemes o a equacions de segon grau. Saber-les plantejar és el pas que converteix un enunciat en una solució.|Las áreas, los productos de números y muchas situaciones reales llevan a sistemas o a ecuaciones de segundo grado. Saber plantearlas es el paso que convierte un enunciado en una solución.",
"parts": [
{
"t": "Plantejar un sistema|Plantear un sistema",
"x": "Anomena x i y les dues quantitats desconegudes (escriu què és cada una) i converteix cada pista de l'enunciat en una equació. Si hi ha un total d'objectes i un total de diners o de punts, sol sortir una equació per a cada total.|Llama x e y a las dos cantidades desconocidas (escribe qué es cada una) y convierte cada pista del enunciado en una ecuación. Si hay un total de objetos y un total de dinero o de puntos, suele salir una ecuación para cada total.",
"ex": [
"20 preguntes: +3 per encert, −1 per error; 36 punts|20 preguntas: +3 por acierto, −1 por error; 36 puntos",
"x + y = 20 i 3x − y = 36|x + y = 20 y 3x − y = 36",
"Sumem: 4x = 56 → x = <span class=\"hl\">14 encerts</span>|Sumamos: 4x = 56 → x = <span class=\"hl\">14 aciertos</span>"
]
},
{
"t": "Edats en dos moments|Edades en dos momentos",
"x": "Quan l'enunciat parla del passat i del futur, escriu les edats de cada moment: fa a anys (x − a, y − a) i d'aquí a b anys (x + b, y + b). Cada frase dona una equació.|Cuando el enunciado habla del pasado y del futuro, escribe las edades de cada momento: hace a años (x − a, y − a) y dentro de b años (x + b, y + b). Cada frase da una ecuación.",
"ex": [
"Fa 5 anys la mare tenia el triple que la filla; d'aquí a 5, el doble|Hace 5 años la madre tenía el triple que la hija; dentro de 5, el doble",
"x − 5 = 3(y − 5) i x + 5 = 2(y + 5)|x − 5 = 3(y − 5) y x + 5 = 2(y + 5)",
"Filla: <span class=\"hl\">15 anys</span>; mare: 35|Hija: <span class=\"hl\">15 años</span>; madre: 35"
]
},
{
"t": "Problemes de segon grau|Problemas de segundo grado",
"x": "Quan la incògnita es multiplica per ella mateixa (l'àrea d'un rectangle, el producte de dos nombres seguits…), surt una equació de <b>segon grau</b>. Passa-ho tot a un costat, ax² + bx + c = 0, i resol-la amb la fórmula o buscant dos nombres que sumin i multipliquin el que cal.|Cuando la incógnita se multiplica por sí misma (el área de un rectángulo, el producto de dos números seguidos…), sale una ecuación de <b>segundo grado</b>. Pásalo todo a un lado, ax² + bx + c = 0, y resuélvela con la fórmula o buscando dos números que sumen y multipliquen lo que hace falta.",
"ex": [
"Rectangle 3 cm més llarg que ample; àrea 40 cm²|Rectángulo 3 cm más largo que ancho; área 40 cm²",
"x(x + 3) = 40 → x² + 3x − 40 = 0|x(x + 3) = 40 → x² + 3x − 40 = 0",
"x = 5 o x = −8|x = 5 o x = −8",
"Ample: <span class=\"hl\">5 cm</span>|Ancho: <span class=\"hl\">5 cm</span>"
]
},
{
"t": "Quina solució serveix?|¿Qué solución sirve?",
"x": "Una equació de segon grau pot tenir dues solucions, però no totes tenen sentit. Una longitud, una edat o un nombre de persones no poden ser negatius: descarta les solucions que no encaixen amb l'enunciat.|Una ecuación de segundo grado puede tener dos soluciones, pero no todas tienen sentido. Una longitud, una edad o un número de personas no pueden ser negativos: descarta las soluciones que no encajan con el enunciado.",
"ex": [
"Un nombre positiu pel seu següent fa 56|Un número positivo por su siguiente da 56",
"x(x + 1) = 56 → x = 7 o x = −8|x(x + 1) = 56 → x = 7 o x = −8",
"Com que és positiu: <span class=\"hl\">x = 7</span>|Como es positivo: <span class=\"hl\">x = 7</span>"
]
}
],
"words": [
["equació de segon grau|ecuación de segundo grado", "equació en què la x apareix elevada al quadrat: ax² + bx + c = 0|ecuación en la que la x aparece elevada al cuadrado: ax² + bx + c = 0"],
["sistema|sistema", "dues equacions que s'han de complir alhora|dos ecuaciones que se deben cumplir a la vez"],
["solució vàlida|solución válida", "la que té sentit en el problema (per exemple, positiva)|la que tiene sentido en el problema (por ejemplo, positiva)"],
["àrea|área", "la superfície que ocupa una figura, en unitats quadrades|la superficie que ocupa una figura, en unidades cuadradas"]
],
"mistakes": [
["«Àrea 40 i un costat 3 cm més llarg: 2x + 2(x + 3) = 40.»|«Área 40 y un lado 3 cm más largo: 2x + 2(x + 3) = 40.»", "Això és el perímetre. L'àrea és ample per llarg: x(x + 3) = 40.|Eso es el perímetro. El área es ancho por largo: x(x + 3) = 40."],
["«La solució és x = −8.»|«La solución es x = −8.»", "Una longitud no pot ser negativa: la solució del problema és x = 5.|Una longitud no puede ser negativa: la solución del problema es x = 5."],
["«Un camí d'1 m al voltant: el costat gran fa x + 1.»|«Un camino de 1 m alrededor: el lado grande mide x + 1.»", "El camí hi és als dos costats: x + 2.|El camino está a los dos lados: x + 2."]
],
"recap": [
"Dues incògnites i dues pistes: sistema.|Dos incógnitas y dos pistas: sistema.",
"Àrees i productes porten a equacions de segon grau.|Áreas y productos llevan a ecuaciones de segundo grado.",
"Passa-ho tot a un costat: ax² + bx + c = 0.|Pásalo todo a un lado: ax² + bx + c = 0.",
"Queda't només amb les solucions que tenen sentit.|Quédate solo con las soluciones que tienen sentido."
],
"tip": "Abans de resoldre, estima: si l'àrea és 40 cm² i els costats s'assemblen, el costat serà a prop de √40 ≈ 6. Si et surt 50, alguna cosa ha fallat.|Antes de resolver, estima: si el área es 40 cm² y los lados se parecen, el lado estará cerca de √40 ≈ 6. Si te sale 50, algo ha fallado."
}
});

/* ---------- 1r d'ESO (c7) ---------- */
Object.assign(THEORY, {
"c7-10": {
"hook": "Una enquesta a la classe, els resultats d'unes eleccions o les notícies amb gràfics: les taules de freqüències i els gràfics de sectors resumeixen moltes respostes d'un sol cop d'ull.|Una encuesta en clase, los resultados de unas elecciones o las noticias con gráficos: las tablas de frecuencias y los gráficos de sectores resumen muchas respuestas de un solo vistazo.",
"parts": [
{ "t": "Freqüència absoluta|Frecuencia absoluta", "x": "La <b>freqüència absoluta</b> d'un valor és quantes vegades apareix. A la taula de freqüències, cada fila és un valor i la seva freqüència; totes les freqüències sumen el <b>total</b> de dades.|La <b>frecuencia absoluta</b> de un valor es cuántas veces aparece. En la tabla de frecuencias, cada fila es un valor y su frecuencia; todas las frecuencias suman el <b>total</b> de datos.",
  "ex": ["Germans de 10 alumnes: 1, 0, 2, 1, 1, 3, 0, 1, 2, 1|Hermanos de 10 alumnos: 1, 0, 2, 1, 1, 3, 0, 1, 2, 1", "El valor 1 surt 5 vegades|El valor 1 sale 5 veces", "Freqüència absoluta de 1: <span class=\"hl\">5</span>|Frecuencia absoluta de 1: <span class=\"hl\">5</span>"] },
{ "t": "Freqüència relativa i percentatge|Frecuencia relativa y porcentaje", "x": "La <b>freqüència relativa</b> és la freqüència absoluta dividida pel total: diu quina part de les dades té aquell valor. Si la multipliques per 100, tens el <b>percentatge</b>.|La <b>frecuencia relativa</b> es la frecuencia absoluta dividida por el total: dice qué parte de los datos tiene ese valor. Si la multiplicas por 100, tienes el <b>porcentaje</b>.",
  "ex": ["8 de 20 alumnes prefereixen el bàsquet|8 de 20 alumnos prefieren el baloncesto", "8 ÷ 20 = 0,4|8 ÷ 20 = 0,4", "0,4 × 100 = <span class=\"hl\">40 %</span>|0,4 × 100 = <span class=\"hl\">40 %</span>"] },
{ "t": "Gràfics de sectors|Gráficos de sectores", "x": "En un <b>gràfic de sectors</b>, el cercle sencer és el 100 % de les dades i cada categoria n'ocupa un tros proporcional. Mig cercle és el 50 %; un quart, el 25 %. Tots els sectors junts sumen el 100 %.|En un <b>gráfico de sectores</b>, el círculo entero es el 100 % de los datos y cada categoría ocupa un trozo proporcional. Medio círculo es el 50 %; un cuarto, el 25 %. Todos los sectores juntos suman el 100 %.",
  "ex": ["Futbol 45 %, bàsquet 30 %, natació ?|Fútbol 45 %, baloncesto 30 %, natación ?", "100 − 45 − 30 = 25|100 − 45 − 30 = 25", "Natació: <span class=\"hl\">25 %</span>, un quart del cercle|Natación: <span class=\"hl\">25 %</span>, un cuarto del círculo"] },
{ "t": "Els graus de cada sector|Los grados de cada sector", "x": "El cercle fa <b>360°</b>. Per saber quants graus fa un sector, calcula el seu percentatge de 360°, o bé 360° ÷ total × freqüència.|El círculo mide <b>360°</b>. Para saber cuántos grados mide un sector, calcula su porcentaje de 360°, o bien 360° ÷ total × frecuencia.",
  "ex": ["El 25 % de 360° = 90°|El 25 % de 360° = 90°", "12 de 40 alumnes: 360 ÷ 40 = 9° cada alumne|12 de 40 alumnos: 360 ÷ 40 = 9° cada alumno", "12 × 9 = <span class=\"hl\">108°</span>|12 × 9 = <span class=\"hl\">108°</span>"] }
],
"words": [
["freqüència absoluta|frecuencia absoluta", "nombre de vegades que surt un valor|número de veces que sale un valor"],
["freqüència relativa|frecuencia relativa", "freqüència absoluta ÷ total; sempre entre 0 i 1|frecuencia absoluta ÷ total; siempre entre 0 y 1"],
["total|total", "quantes dades hi ha en total; és la suma de totes les freqüències|cuántos datos hay en total; es la suma de todas las frecuencias"],
["sector circular|sector circular", "tros de cercle entre dos radis, com un tros de pizza|trozo de círculo entre dos radios, como un trozo de pizza"]
],
"mistakes": [
["«La freqüència relativa de 8 de 20 és 8.»|«La frecuencia relativa de 8 de 20 es 8.»", "8 és l'absoluta. La relativa és 8 ÷ 20 = 0,4 (un 40 %).|8 es la absoluta. La relativa es 8 ÷ 20 = 0,4 (un 40 %)."],
["«El sector del 25 % fa 25°.»|«El sector del 25 % mide 25°.»", "Els graus es calculen sobre 360°: el 25 % de 360° són 90°.|Los grados se calculan sobre 360°: el 25 % de 360° son 90°."],
["«Els percentatges del gràfic sumen 110 %.»|«Los porcentajes del gráfico suman 110 %.»", "Si sumen més de 100 %, hi ha un error: tot el cercle és el 100 %.|Si suman más de 100 %, hay un error: todo el círculo es el 100 %."]
],
"recap": ["Absoluta: quantes vegades. Relativa: absoluta ÷ total.|Absoluta: cuántas veces. Relativa: absoluta ÷ total.", "Percentatge = relativa × 100.|Porcentaje = relativa × 100.", "Els sectors sumen el 100 % (360°).|Los sectores suman el 100 % (360°).", "Graus = percentatge de 360°.|Grados = porcentaje de 360°."],
"tip": "Abans de calcular, mira el gràfic: si un sector ocupa gairebé mig cercle, el resultat ha de ser a prop del 50 % (180°). Si et surt un 10 %, revisa el càlcul.|Antes de calcular, mira el gráfico: si un sector ocupa casi medio círculo, el resultado debe estar cerca del 50 % (180°). Si te sale un 10 %, revisa el cálculo."
},
"c7-11": {
"hook": "Els jocs, les apps i els robots segueixen instruccions escrites per persones. Aprendre a llegir un programa i predir què farà és el primer pas per programar.|Los juegos, las apps y los robots siguen instrucciones escritas por personas. Aprender a leer un programa y predecir qué hará es el primer paso para programar.",
"parts": [
{ "t": "Variables|Variables", "x": "Una <b>variable</b> és una capsa amb nom que guarda un valor. «a = 5» vol dir «posa 5 dins de a». Si després fas «a = a + 2», la capsa passa a guardar 7: el valor antic se'n va. En Python, * és multiplicar i print() escriu a la pantalla.|Una <b>variable</b> es una caja con nombre que guarda un valor. «a = 5» quiere decir «pon 5 dentro de a». Si después haces «a = a + 2», la caja pasa a guardar 7: el valor antiguo se va. En Python, * es multiplicar y print() escribe en la pantalla.",
  "ex": ["a = 5|a = 5", "b = a * 3 → b val 15|b = a * 3 → b vale 15", "a = b - 4 → a val <span class=\"hl\">11</span>|a = b - 4 → a vale <span class=\"hl\">11</span>"] },
{ "t": "Condicionals: if i else|Condicionales: if y else", "x": "Amb <b>if</b> (si) el programa pren decisions: si la condició és certa, fa les instruccions de dins de l'if; si és falsa, fa les de l'<b>else</b> (si no). Les instruccions de dins van <b>sagnades</b> (amb espais al davant).|Con <b>if</b> (si) el programa toma decisiones: si la condición es verdadera, hace las instrucciones de dentro del if; si es falsa, hace las del <b>else</b> (si no). Las instrucciones de dentro van <b>sangradas</b> (con espacios delante).",
  "ex": ["n = 7|n = 7", "if n > 5: print(\"gran\")|if n > 5: print(\"grande\")", "7 > 5 és cert: escriu <span class=\"hl\">gran</span>|7 > 5 es verdadero: escribe <span class=\"hl\">grande</span>"] },
{ "t": "Bucles: for i range|Bucles: for y range", "x": "Un <b>bucle</b> repeteix instruccions. «for i in range(5)» fa 5 voltes amb i = 0, 1, 2, 3, 4. «range(1, 6)» va de l'1 al 5: el número de la dreta <b>no</b> hi entra.|Un <b>bucle</b> repite instrucciones. «for i in range(5)» da 5 vueltas con i = 0, 1, 2, 3, 4. «range(1, 6)» va del 1 al 5: el número de la derecha <b>no</b> entra.",
  "ex": ["s = 0|s = 0", "for i in range(1, 5): s = s + i|for i in range(1, 5): s = s + i", "1 + 2 + 3 + 4 = <span class=\"hl\">10</span>|1 + 2 + 3 + 4 = <span class=\"hl\">10</span>"] },
{ "t": "Seguir un programa pas a pas|Seguir un programa paso a paso", "x": "Per saber què fa un programa, fes com l'ordinador: una taula amb una columna per variable i una fila per cada pas. Així també trobaràs els <b>errors</b>: la línia on el valor ja no és el que hauria de ser.|Para saber qué hace un programa, haz como el ordenador: una tabla con una columna por variable y una fila por cada paso. Así también encontrarás los <b>errores</b>: la línea donde el valor ya no es el que debería ser.",
  "ex": ["x = 3; tres vegades x = x * 2|x = 3; tres veces x = x * 2", "x: 3 → 6 → 12 → 24|x: 3 → 6 → 12 → 24", "print(x) escriu <span class=\"hl\">24</span>|print(x) escribe <span class=\"hl\">24</span>"] }
],
"words": [
["variable|variable", "nom que guarda un valor que pot canviar|nombre que guarda un valor que puede cambiar"],
["condició|condición", "pregunta que pot ser certa (True) o falsa (False)|pregunta que puede ser verdadera (True) o falsa (False)"],
["bucle|bucle", "instruccions que es repeteixen|instrucciones que se repiten"],
["algorisme|algoritmo", "llista ordenada de passos per resoldre un problema|lista ordenada de pasos para resolver un problema"],
["sagnat|sangría", "espais a l'esquerra que diuen quines línies van dins de l'if o del bucle|espacios a la izquierda que dicen qué líneas van dentro del if o del bucle"]
],
"mistakes": [
["«range(1, 5) va de l'1 al 5.»|«range(1, 5) va del 1 al 5.»", "El número final no hi entra: 1, 2, 3 i 4.|El número final no entra: 1, 2, 3 y 4."],
["«Després de a = 5 i a = a + 1, a val 5 i 6.»|«Después de a = 5 y a = a + 1, a vale 5 y 6.»", "Una variable només guarda l'últim valor: a val 6.|Una variable solo guarda el último valor: a vale 6."],
["«Si l'if és cert, també s'executa l'else.»|«Si el if es verdadero, también se ejecuta el else.»", "O l'un o l'altre: l'else només es fa quan la condició és falsa.|O uno u otro: el else solo se hace cuando la condición es falsa."]
],
"recap": ["= guarda un valor dins d'una variable.|= guarda un valor dentro de una variable.", "if/else: fa una cosa o una altra segons la condició.|if/else: hace una cosa u otra según la condición.", "range(a, b) va d'a fins a b − 1.|range(a, b) va de a hasta b − 1.", "Segueix el programa amb una taula de valors.|Sigue el programa con una tabla de valores."],
"tip": "Fes de «ordinador humà»: escriu les variables en una columna i ratlla i actualitza cada valor a cada línia. Els programadors professionals també ho fan quan busquen errors.|Haz de «ordenador humano»: escribe las variables en una columna y tacha y actualiza cada valor en cada línea. Los programadores profesionales también lo hacen cuando buscan errores."
},
"c7-12": {
"hook": "Un 25 % de descompte, tres quarts d'hora o 0,75 litres: la mateixa quantitat es pot escriure de maneres diferents. Saber passar d'una a l'altra i situar-les a la recta et deixa comparar-les.|Un 25 % de descuento, tres cuartos de hora o 0,75 litros: la misma cantidad se puede escribir de maneras distintas. Saber pasar de una a otra y situarlas en la recta te deja compararlas.",
"parts": [
{ "t": "De fracció a decimal|De fracción a decimal", "x": "Una fracció és una <b>divisió</b>: 3/4 = 3 ÷ 4 = 0,75. Si el denominador només té els factors 2 i 5 (2, 4, 5, 8, 10, 20…), el decimal s'acaba; si no, té decimals que es repeteixen.|Una fracción es una <b>división</b>: 3/4 = 3 ÷ 4 = 0,75. Si el denominador solo tiene los factores 2 y 5 (2, 4, 5, 8, 10, 20…), el decimal se acaba; si no, tiene decimales que se repiten.",
  "ex": ["7/20 = 7 ÷ 20|7/20 = 7 ÷ 20", "= <span class=\"hl\">0,35</span>|= <span class=\"hl\">0,35</span>", "1/3 = 0,333… (no s'acaba)|1/3 = 0,333… (no se acaba)"] },
{ "t": "Decimal, fracció i percentatge|Decimal, fracción y porcentaje", "x": "Un percentatge és una fracció sobre 100: 35 % = 35/100 = 0,35. Per passar de decimal a percentatge, multiplica per 100; de percentatge a decimal, divideix per 100. També hi ha percentatges més grans que 100 % (més que el total) i més petits que 1 %.|Un porcentaje es una fracción sobre 100: 35 % = 35/100 = 0,35. Para pasar de decimal a porcentaje, multiplica por 100; de porcentaje a decimal, divide por 100. También hay porcentajes mayores que 100 % (más que el total) y menores que 1 %.",
  "ex": ["0,6 × 100 = 60 %|0,6 × 100 = 60 %", "40 % = 40/100 = <span class=\"hl\">2/5</span>|40 % = 40/100 = <span class=\"hl\">2/5</span>", "150 % = 1,5 = 3/2|150 % = 1,5 = 3/2"] },
{ "t": "Ordenar i comparar|Ordenar y comparar", "x": "Per comparar fraccions, decimals i percentatges, passa-ho tot a <b>decimal</b> i compara xifra a xifra. Escriure tots els decimals amb les mateixes xifres (0,40 i 0,35) ajuda.|Para comparar fracciones, decimales y porcentajes, pásalo todo a <b>decimal</b> y compara cifra a cifra. Escribir todos los decimales con las mismas cifras (0,40 y 0,35) ayuda.",
  "ex": ["2/5, 0,38 i 35 %|2/5, 0,38 y 35 %", "0,40 · 0,38 · 0,35|0,40 · 0,38 · 0,35", "De petit a gran: <span class=\"hl\">35 % < 0,38 < 2/5</span>|De menor a mayor: <span class=\"hl\">35 % < 0,38 < 2/5</span>"] },
{ "t": "La recta numèrica|La recta numérica", "x": "A la <b>recta numèrica</b> els nombres creixen cap a la dreta; els negatius són a l'esquerra del 0. Per saber què val una marca, mira quantes parts iguals hi ha entre dos nombres coneguts: si una unitat està partida en 4, cada marca val 1/4.|En la <b>recta numérica</b> los números crecen hacia la derecha; los negativos están a la izquierda del 0. Para saber qué vale una marca, mira cuántas partes iguales hay entre dos números conocidos: si una unidad está partida en 4, cada marca vale 1/4.",
  "ex": ["Del 0 a l'1 hi ha 4 parts: cada una val 1/4|Del 0 al 1 hay 4 partes: cada una vale 1/4", "El punt és 3 marques a la dreta del 1|El punto está 3 marcas a la derecha del 1", "1 + 3/4 = <span class=\"hl\">7/4</span> = 1,75|1 + 3/4 = <span class=\"hl\">7/4</span> = 1,75"] }
],
"words": [
["fracció irreductible|fracción irreducible", "fracció que ja no es pot simplificar, com 2/5|fracción que ya no se puede simplificar, como 2/5"],
["percentatge|porcentaje", "fracció amb denominador 100: 35 % = 35/100|fracción con denominador 100: 35 % = 35/100"],
["recta numèrica|recta numérica", "línia on els nombres estan ordenats i separats per distàncies iguals|línea donde los números están ordenados y separados por distancias iguales"],
["nombre negatiu|número negativo", "nombre més petit que 0, a l'esquerra del 0 a la recta|número menor que 0, a la izquierda del 0 en la recta"]
],
"mistakes": [
["«0,5 és més petit que 0,35 perquè 5 és més petit que 35.»|«0,5 es menor que 0,35 porque 5 es menor que 35.»", "Compara xifra a xifra: 0,50 i 0,35. Les dècimes: 5 > 3, així que 0,5 > 0,35.|Compara cifra a cifra: 0,50 y 0,35. Las décimas: 5 > 3, así que 0,5 > 0,35."],
["«3/4 = 3,4.»|«3/4 = 3,4.»", "La fracció és una divisió: 3 ÷ 4 = 0,75.|La fracción es una división: 3 ÷ 4 = 0,75."],
["«A la recta, −3 és més gran que −1.»|«En la recta, −3 es mayor que −1.»", "−3 és més a l'esquerra: −3 < −1.|−3 está más a la izquierda: −3 < −1."]
],
"recap": ["Fracció → decimal: divideix.|Fracción → decimal: divide.", "Decimal → percentatge: × 100.|Decimal → porcentaje: × 100.", "Per comparar, passa-ho tot a decimal.|Para comparar, pásalo todo a decimal.", "A la recta, compta les parts iguals entre dos nombres.|En la recta, cuenta las partes iguales entre dos números."],
"tip": "Aprèn de memòria les parelles més útils: 1/2 = 0,5 = 50 %, 1/4 = 0,25 = 25 %, 3/4 = 0,75 = 75 %, 1/5 = 0,2 = 20 %, 1/10 = 0,1 = 10 %. Amb aquestes, moltes comparacions surten de cap.|Aprende de memoria las parejas más útiles: 1/2 = 0,5 = 50 %, 1/4 = 0,25 = 25 %, 3/4 = 0,75 = 75 %, 1/5 = 0,2 = 20 %, 1/10 = 0,1 = 10 %. Con estas, muchas comparaciones salen de cabeza."
},
"c7-13": {
"hook": "Les escaires, les rodes, els senyals de trànsit i les rajoles del terra: tot és ple d'angles, triangles, quadrilàters i cercles. Conèixer-ne els noms i les propietats et deixa descriure'ls i calcular-ne mides.|Las escuadras, las ruedas, las señales de tráfico y las baldosas del suelo: todo está lleno de ángulos, triángulos, cuadriláteros y círculos. Conocer sus nombres y propiedades te deja describirlos y calcular medidas.",
"parts": [
{ "t": "Angles complementaris, suplementaris i oposats|Ángulos complementarios, suplementarios y opuestos", "x": "Dos angles són <b>complementaris</b> si sumen 90° i <b>suplementaris</b> si sumen 180°. Quan dues rectes es tallen, els angles <b>oposats pel vèrtex</b> són iguals i els del costat sumen 180°.|Dos ángulos son <b>complementarios</b> si suman 90° y <b>suplementarios</b> si suman 180°. Cuando dos rectas se cortan, los ángulos <b>opuestos por el vértice</b> son iguales y los de al lado suman 180°.",
  "ex": ["Complementari de 35°: 90 − 35 = 55°|Complementario de 35°: 90 − 35 = 55°", "Suplementari de 35°: 180 − 35 = <span class=\"hl\">145°</span>|Suplementario de 35°: 180 − 35 = <span class=\"hl\">145°</span>"] },
{ "t": "Classificar triangles|Clasificar triángulos", "x": "Segons els <b>costats</b>: equilàter (3 iguals), isòsceles (2 iguals) i escalè (tots diferents). Segons els <b>angles</b>: acutangle (3 aguts), rectangle (un de 90°) i obtusangle (un de més de 90°). Els tres angles sempre sumen 180°.|Según los <b>lados</b>: equilátero (3 iguales), isósceles (2 iguales) y escaleno (todos distintos). Según los <b>ángulos</b>: acutángulo (3 agudos), rectángulo (uno de 90°) y obtusángulo (uno de más de 90°). Los tres ángulos siempre suman 180°.",
  "ex": ["Costats 5, 5 i 7 cm → isòsceles|Lados 5, 5 y 7 cm → isósceles", "Angles 30°, 60° i 90° → <span class=\"hl\">rectangle</span>|Ángulos 30°, 60° y 90° → <span class=\"hl\">rectángulo</span>"] },
{ "t": "Classificar quadrilàters|Clasificar cuadriláteros", "x": "Els <b>paral·lelograms</b> tenen dos parells de costats paral·lels: quadrat (4 costats iguals i 4 angles rectes), rectangle (4 angles rectes), rombe (4 costats iguals) i romboide. El <b>trapezi</b> només té un parell de costats paral·lels i el <b>trapezoide</b>, cap.|Los <b>paralelogramos</b> tienen dos pares de lados paralelos: cuadrado (4 lados iguales y 4 ángulos rectos), rectángulo (4 ángulos rectos), rombo (4 lados iguales) y romboide. El <b>trapecio</b> solo tiene un par de lados paralelos y el <b>trapezoide</b>, ninguno.",
  "ex": ["4 costats iguals, sense angles rectes|4 lados iguales, sin ángulos rectos", "És un <span class=\"hl\">rombe</span>|Es un <span class=\"hl\">rombo</span>"] },
{ "t": "El cercle i els polígons|El círculo y los polígonos", "x": "Elements del cercle: <b>centre</b>, <b>radi</b>, <b>diàmetre</b> (2 radis), <b>corda</b>, <b>arc</b>, <b>sector</b> i <b>segment</b> circular. Els angles interiors d'un polígon de n costats sumen <b>(n − 2) × 180°</b>; si és regular, cada angle en fa la n-èsima part.|Elementos del círculo: <b>centro</b>, <b>radio</b>, <b>diámetro</b> (2 radios), <b>cuerda</b>, <b>arco</b>, <b>sector</b> y <b>segmento</b> circular. Los ángulos interiores de un polígono de n lados suman <b>(n − 2) × 180°</b>; si es regular, cada ángulo mide la n-ésima parte.",
  "ex": ["Hexàgon: (6 − 2) × 180 = 720°|Hexágono: (6 − 2) × 180 = 720°", "Hexàgon regular: 720 ÷ 6 = <span class=\"hl\">120°</span> cada angle|Hexágono regular: 720 ÷ 6 = <span class=\"hl\">120°</span> cada ángulo"] }
],
"words": [
["angle recte|ángulo recto", "angle de 90°, com la cantonada d'un full|ángulo de 90°, como la esquina de una hoja"],
["paral·leles|paralelas", "rectes que no es tallen mai, sempre a la mateixa distància|rectas que no se cortan nunca, siempre a la misma distancia"],
["polígon regular|polígono regular", "polígon amb tots els costats i tots els angles iguals|polígono con todos los lados y todos los ángulos iguales"],
["corda|cuerda", "segment que uneix dos punts de la circumferència; la més llarga és el diàmetre|segmento que une dos puntos de la circunferencia; la más larga es el diámetro"],
["recta tangent|recta tangente", "recta que toca la circumferència en un sol punt|recta que toca la circunferencia en un solo punto"]
],
"mistakes": [
["«Complementaris vol dir que sumen 180°.»|«Complementarios quiere decir que suman 180°.»", "Complementaris sumen 90°; suplementaris, 180°.|Complementarios suman 90°; suplementarios, 180°."],
["«Un quadrat no és un rectangle.»|«Un cuadrado no es un rectángulo.»", "Sí que ho és: té 4 angles rectes. És un rectangle especial amb els 4 costats iguals.|Sí que lo es: tiene 4 ángulos rectos. Es un rectángulo especial con los 4 lados iguales."],
["«Els angles d'un pentàgon sumen 180°.»|«Los ángulos de un pentágono suman 180°.»", "Només els del triangle sumen 180°. Pentàgon: (5 − 2) × 180 = 540°.|Solo los del triángulo suman 180°. Pentágono: (5 − 2) × 180 = 540°."]
],
"recap": ["Complementaris: 90°. Suplementaris: 180°.|Complementarios: 90°. Suplementarios: 180°.", "Triangles: per costats i per angles.|Triángulos: por lados y por ángulos.", "Paral·lelograms, trapezis i trapezoides.|Paralelogramos, trapecios y trapezoides.", "Polígon de n costats: (n − 2) × 180°.|Polígono de n lados: (n − 2) × 180°."],
"tip": "Per recordar la suma d'angles d'un polígon, divideix-lo en triangles des d'un vèrtex: surten n − 2 triangles, i cada un aporta 180°.|Para recordar la suma de ángulos de un polígono, divídelo en triángulos desde un vértice: salen n − 2 triángulos, y cada uno aporta 180°."
}
});

/* ---------- 2n d'ESO (c8) ---------- */
Object.assign(THEORY, {
"c8-10": {
"hook": "La freqüència acumulada diu quants alumnes treuen com a màxim un 5; el rang, si les notes són semblants o molt diferents. Amb poques mesures entens un grup de dades.|La frecuencia acumulada dice cuántos alumnos sacan como máximo un 5; el rango, si las notas son parecidas o muy distintas. Con pocas medidas entiendes un grupo de datos.",
"parts": [
{ "t": "Freqüència acumulada|Frecuencia acumulada", "x": "La <b>freqüència acumulada</b> d'un valor és la suma de les freqüències d'aquest valor i de tots els més petits. Respon preguntes com «quants tenen 2 o menys?». La de l'últim valor és el total.|La <b>frecuencia acumulada</b> de un valor es la suma de las frecuencias de ese valor y de todos los menores. Responde preguntas como «¿cuántos tienen 2 o menos?». La del último valor es el total.",
  "ex": ["Germans 0, 1, 2, 3 amb freqüències 4, 9, 5, 2|Hermanos 0, 1, 2, 3 con frecuencias 4, 9, 5, 2", "Acumulades: 4, 13, 18, 20|Acumuladas: 4, 13, 18, 20", "Més de 1 germà: 20 − 13 = <span class=\"hl\">7</span>|Más de 1 hermano: 20 − 13 = <span class=\"hl\">7</span>"] },
{ "t": "El rang|El rango", "x": "El <b>rang</b> (o recorregut) és la diferència entre el valor més gran i el més petit. És la mesura de <b>dispersió</b> més senzilla: diu com d'escampades estan les dades.|El <b>rango</b> (o recorrido) es la diferencia entre el valor mayor y el menor. Es la medida de <b>dispersión</b> más sencilla: dice lo dispersos que están los datos.",
  "ex": ["Temperatures: 14, 18, 21, 16, 25, 19|Temperaturas: 14, 18, 21, 16, 25, 19", "Rang = 25 − 14 = <span class=\"hl\">11 °C</span>|Rango = 25 − 14 = <span class=\"hl\">11 °C</span>"] },
{ "t": "Mateixa mitjana, diferent dispersió|Misma media, distinta dispersión", "x": "Dues sèries poden tenir la mateixa mitjana i ser molt diferents. La que té <b>menys dispersió</b> és més regular: les dades són més a prop de la mitjana i la mitjana les representa millor.|Dos series pueden tener la misma media y ser muy distintas. La que tiene <b>menos dispersión</b> es más regular: los datos están más cerca de la media y la media los representa mejor.",
  "ex": ["A: 5, 6, 5, 4 · B: 1, 9, 2, 8 (mitjana 5)|A: 5, 6, 5, 4 · B: 1, 9, 2, 8 (media 5)", "Rang A = 2; rang B = 8|Rango A = 2; rango B = 8", "A és <span class=\"hl\">més regular</span>|A es <span class=\"hl\">más regular</span>"] },
{ "t": "Graus i freqüències|Grados y frecuencias", "x": "En un gràfic de sectors, cada dada val 360° ÷ total. Al revés: si un sector fa a graus, representa total × a ÷ 360 dades.|En un gráfico de sectores, cada dato vale 360° ÷ total. Al revés: si un sector mide a grados, representa total × a ÷ 360 datos.",
  "ex": ["Sector de 90° amb 60 respostes|Sector de 90° con 60 respuestas", "60 × 90 ÷ 360 = <span class=\"hl\">15</span> respostes|60 × 90 ÷ 360 = <span class=\"hl\">15</span> respuestas"] }
],
"words": [
["freqüència acumulada|frecuencia acumulada", "suma de les freqüències fins a un valor|suma de las frecuencias hasta un valor"],
["dispersió|dispersión", "com d'escampades o d'agrupades estan les dades|lo dispersos o agrupados que están los datos"],
["rang o recorregut|rango o recorrido", "valor més gran menys valor més petit|valor mayor menos valor menor"],
["regular|regular", "amb poca dispersió: dades semblants entre elles|con poca dispersión: datos parecidos entre sí"]
],
"mistakes": [
["«La freqüència acumulada del 2 és la freqüència del 2.»|«La frecuencia acumulada del 2 es la frecuencia del 2.»", "S'hi sumen també les del 0 i l'1: és la de «2 o menys».|Se suman también las del 0 y el 1: es la de «2 o menos»."],
["«El rang és el valor que més es repeteix.»|«El rango es el valor que más se repite.»", "Això és la moda. El rang és màxim − mínim.|Eso es la moda. El rango es máximo − mínimo."],
["«Si tenen la mateixa mitjana, són iguals.»|«Si tienen la misma media, son iguales.»", "Poden tenir dispersions molt diferents: mira també el rang.|Pueden tener dispersiones muy distintas: mira también el rango."]
],
"recap": ["Acumulada: suma fins a aquell valor.|Acumulada: suma hasta ese valor.", "«Més de n» = total − acumulada de n.|«Más de n» = total − acumulada de n.", "Rang = màxim − mínim.|Rango = máximo − mínimo.", "Menys dispersió = més regular.|Menos dispersión = más regular."],
"tip": "Quan comparis dos grups, dona sempre dos números: la mitjana (on són) i el rang (com d'escampats estan). Un sol número amaga la meitat de la història.|Cuando compares dos grupos, da siempre dos números: la media (dónde están) y el rango (lo dispersos que están). Un solo número esconde la mitad de la historia."
},
"c8-11": {
"hook": "Una gràfica explica una història: com s'omple una piscina, com es mou un ciclista o quant costa un taxi. Llegir-la bé és tan important com saber fer comptes.|Una gráfica cuenta una historia: cómo se llena una piscina, cómo se mueve un ciclista o cuánto cuesta un taxi. Leerla bien es tan importante como saber hacer cuentas.",
"parts": [
{ "t": "De la gràfica a la taula|De la gráfica a la tabla", "x": "Cada punt de la gràfica és una parella (x, y). Per saber quant val y per a una x, busca la x a l'eix horitzontal, puja o baixa fins a la gràfica i mira l'altura a l'eix vertical.|Cada punto de la gráfica es una pareja (x, y). Para saber cuánto vale y para una x, busca la x en el eje horizontal, sube o baja hasta la gráfica y mira la altura en el eje vertical.",
  "ex": ["x = 2 → la recta és a l'altura 5|x = 2 → la recta está a la altura 5", "Punt <span class=\"hl\">(2, 5)</span>|Punto <span class=\"hl\">(2, 5)</span>"] },
{ "t": "Pendent i ordenada a l'origen|Pendiente y ordenada en el origen", "x": "En una recta y = mx + n, <b>n</b> és l'<b>ordenada a l'origen</b>: on talla l'eix y. <b>m</b> és el <b>pendent</b>: quant puja (o baixa, si és negatiu) la y quan la x avança 1.|En una recta y = mx + n, <b>n</b> es la <b>ordenada en el origen</b>: donde corta el eje y. <b>m</b> es la <b>pendiente</b>: cuánto sube (o baja, si es negativa) la y cuando la x avanza 1.",
  "ex": ["Talla l'eix y a (0, −1)|Corta el eje y en (0, −1)", "Per cada pas a la dreta, puja 2|Por cada paso a la derecha, sube 2", "<span class=\"hl\">y = 2x − 1</span>|<span class=\"hl\">y = 2x − 1</span>"] },
{ "t": "Pendents fraccionaris|Pendientes fraccionarias", "x": "Si la recta no passa per punts de la quadrícula a cada pas, busca dos punts clars i calcula <b>pendent = canvi de y ÷ canvi de x</b>. Pot ser una fracció.|Si la recta no pasa por puntos de la cuadrícula en cada paso, busca dos puntos claros y calcula <b>pendiente = cambio de y ÷ cambio de x</b>. Puede ser una fracción.",
  "ex": ["Punts (0, 1) i (3, 3)|Puntos (0, 1) y (3, 3)", "y canvia 2 quan x canvia 3|y cambia 2 cuando x cambia 3", "Pendent = <span class=\"hl\">2/3</span>|Pendiente = <span class=\"hl\">2/3</span>"] },
{ "t": "Gràfiques de la vida real|Gráficas de la vida real", "x": "En una gràfica distància–temps, un tram <b>horitzontal</b> vol dir que està aturat; un tram que <b>puja</b>, que s'allunya; i un que <b>baixa</b>, que torna. Com més inclinat és un tram, més de pressa va: velocitat = distància ÷ temps.|En una gráfica distancia–tiempo, un tramo <b>horizontal</b> quiere decir que está parado; un tramo que <b>sube</b>, que se aleja; y uno que <b>baja</b>, que vuelve. Cuanto más inclinado es un tramo, más deprisa va: velocidad = distancia ÷ tiempo.",
  "ex": ["Del minut 0 al 10 passa de 0 a 800 m|Del minuto 0 al 10 pasa de 0 a 800 m", "800 ÷ 10 = <span class=\"hl\">80 m/min</span>|800 ÷ 10 = <span class=\"hl\">80 m/min</span>"] }
],
"words": [
["pendent|pendiente", "quant canvia la y quan la x augmenta 1|cuánto cambia la y cuando la x aumenta 1"],
["ordenada a l'origen|ordenada en el origen", "valor de y quan x = 0; on la recta talla l'eix y|valor de y cuando x = 0; donde la recta corta el eje y"],
["tram|tramo", "tros de gràfica entre dos punts on canvia la manera de moure's|trozo de gráfica entre dos puntos donde cambia la manera de moverse"],
["velocitat|velocidad", "distància recorreguda ÷ temps|distancia recorrida ÷ tiempo"]
],
"mistakes": [
["«La recta baixa, però el pendent és positiu.»|«La recta baja, pero la pendiente es positiva.»", "Si baixa d'esquerra a dreta, el pendent és negatiu.|Si baja de izquierda a derecha, la pendiente es negativa."],
["«El tram que baixa vol dir que va més a poc a poc.»|«El tramo que baja quiere decir que va más despacio.»", "Vol dir que torna cap a casa (la distància disminueix). La velocitat depèn de la inclinació.|Quiere decir que vuelve hacia casa (la distancia disminuye). La velocidad depende de la inclinación."],
["«En el tram pla ha recorregut molt camí.»|«En el tramo plano ha recorrido mucho camino.»", "Si la distància no canvia, està aturat: no recorre res.|Si la distancia no cambia, está parado: no recorre nada."]
],
"recap": ["Punt (x, y): primer horitzontal, després vertical.|Punto (x, y): primero horizontal, después vertical.", "n: on talla l'eix y. m: quant puja per cada pas.|n: donde corta el eje y. m: cuánto sube por cada paso.", "Pendent = canvi de y ÷ canvi de x.|Pendiente = cambio de y ÷ cambio de x.", "Pla: aturat. Més inclinat: més ràpid.|Plano: parado. Más inclinado: más rápido."],
"tip": "Abans de calcular res, explica la gràfica amb paraules: «surt, va de pressa, s'atura, torna a poc a poc». Si la història té sentit, els números també en tindran.|Antes de calcular nada, explica la gráfica con palabras: «sale, va deprisa, se para, vuelve despacio». Si la historia tiene sentido, los números también lo tendrán."
},
"c8-12": {
"hook": "Els videojocs decideixen constantment: si el jugador té vides i toca la clau, obre la porta. Els operadors lògics (i, o, no) i els bucles amb condicions són el cervell de qualsevol programa.|Los videojuegos deciden constantemente: si el jugador tiene vidas y toca la llave, abre la puerta. Los operadores lógicos (y, o, no) y los bucles con condiciones son el cerebro de cualquier programa.",
"parts": [
{ "t": "Operacions a Python|Operaciones en Python", "x": "A Python, <b>*</b> és multiplicar, <b>/</b> dividir, <b>//</b> la divisió entera, <b>%</b> el residu i <b>**</b> la potència. Es respecta la jerarquia: parèntesis, potències, multiplicacions i divisions, i al final sumes i restes.|En Python, <b>*</b> es multiplicar, <b>/</b> dividir, <b>//</b> la división entera, <b>%</b> el resto y <b>**</b> la potencia. Se respeta la jerarquía: paréntesis, potencias, multiplicaciones y divisiones, y al final sumas y restas.",
  "ex": ["17 // 5 = 3 i 17 % 5 = 2|17 // 5 = 3 y 17 % 5 = 2", "2 + 3 * 2 ** 2 = 2 + 3 × 4 = <span class=\"hl\">14</span>|2 + 3 * 2 ** 2 = 2 + 3 × 4 = <span class=\"hl\">14</span>"] },
{ "t": "I, O, NO|Y, O, NO", "x": "Les condicions valen <b>True</b> (cert) o <b>False</b> (fals). <b>and</b> (i) és cert només si les dues ho són; <b>or</b> (o) és cert si almenys una ho és; <b>not</b> (no) canvia cert per fals i al revés.|Las condiciones valen <b>True</b> (verdadero) o <b>False</b> (falso). <b>and</b> (y) es verdadero solo si las dos lo son; <b>or</b> (o) es verdadero si al menos una lo es; <b>not</b> (no) cambia verdadero por falso y al revés.",
  "ex": ["a = 5, b = 2|a = 5, b = 2", "a > 4 and b > 4 → True and False → False|a > 4 and b > 4 → True and False → False", "a > 4 or b > 4 → <span class=\"hl\">True</span>|a > 4 or b > 4 → <span class=\"hl\">True</span>"] },
{ "t": "if, elif i else|if, elif y else", "x": "Amb <b>elif</b> es poden encadenar condicions: el programa les mira de dalt a baix i executa només la <b>primera</b> que és certa. Si cap no ho és, fa l'else. Dos <b>if</b> separats, en canvi, es miren tots dos.|Con <b>elif</b> se pueden encadenar condiciones: el programa las mira de arriba abajo y ejecuta solo la <b>primera</b> que es verdadera. Si ninguna lo es, hace el else. Dos <b>if</b> separados, en cambio, se miran los dos.",
  "ex": ["nota = 7|nota = 7", "if nota >= 9 … elif nota >= 7 … elif nota >= 5 …|if nota >= 9 … elif nota >= 7 … elif nota >= 5 …", "Escriu <span class=\"hl\">Notable</span> i ja no mira més|Escribe <span class=\"hl\">Notable</span> y ya no mira más"] },
{ "t": "Bucles amb condicions|Bucles con condiciones", "x": "<b>while</b> repeteix mentre la condició sigui certa: cal que alguna cosa canviï a dins, o no s'acabarà mai. Dins d'un <b>for</b> hi pot haver un if per comptar o sumar només alguns valors.|<b>while</b> repite mientras la condición sea verdadera: hace falta que algo cambie dentro, o no terminará nunca. Dentro de un <b>for</b> puede haber un if para contar o sumar solo algunos valores.",
  "ex": ["n = 50; while n > 10: n = n - 15|n = 50; while n > 10: n = n - 15", "50 → 35 → 20 → 5|50 → 35 → 20 → 5", "Escriu <span class=\"hl\">5</span>|Escribe <span class=\"hl\">5</span>"] }
],
"words": [
["True i False|True y False", "cert i fals, els dos valors d'una condició|verdadero y falso, los dos valores de una condición"],
["operador lògic|operador lógico", "and, or i not: combinen condicions|and, or y not: combinan condiciones"],
["residu (%)|resto (%)", "el que sobra d'una divisió entera; n % 2 == 0 vol dir que n és parell|lo que sobra de una división entera; n % 2 == 0 quiere decir que n es par"],
["bucle infinit|bucle infinito", "bucle que no s'acaba mai perquè la condició sempre és certa|bucle que no termina nunca porque la condición siempre es verdadera"]
],
"mistakes": [
["«a > 4 and b > 4 és cert si una de les dues ho és.»|«a > 4 and b > 4 es verdadero si una de las dos lo es.»", "Això és or. Amb and cal que ho siguin totes dues.|Eso es or. Con and hace falta que lo sean las dos."],
["«Amb if/elif, si en compleix dues, les fa totes dues.»|«Con if/elif, si cumple dos, hace las dos.»", "Només fa la primera que és certa; si són if separats, sí que es miren tots.|Solo hace la primera que es verdadera; si son if separados, sí que se miran todos."],
["«7 / 2 i 7 // 2 donen el mateix.»|«7 / 2 y 7 // 2 dan lo mismo.»", "7 / 2 = 3,5 i 7 // 2 = 3 (divisió entera).|7 / 2 = 3,5 y 7 // 2 = 3 (división entera)."]
],
"recap": ["// divisió entera, % residu, ** potència.|// división entera, % resto, ** potencia.", "and: totes certes. or: alguna certa. not: al revés.|and: todas verdaderas. or: alguna verdadera. not: al revés.", "elif: només la primera condició certa.|elif: solo la primera condición verdadera.", "while: mentre la condició sigui certa.|while: mientras la condición sea verdadera."],
"tip": "Per trobar un error, busca la primera línia on el valor ja és incorrecte. Normalment l'error és en aquesta línia o en la condició just de sobre.|Para encontrar un error, busca la primera línea donde el valor ya es incorrecto. Normalmente el error está en esa línea o en la condición justo de encima."
},
"c8-13": {
"hook": "Cada tiquet de compra porta IVA, cada nòmina porta una retenció d'IRPF i cada viatge a l'estranger demana canviar moneda. Entendre aquests percentatges et fa un consumidor més llest.|Cada tique de compra lleva IVA, cada nómina lleva una retención de IRPF y cada viaje al extranjero pide cambiar moneda. Entender estos porcentajes te hace un consumidor más listo.",
"parts": [
{ "t": "L'IVA|El IVA", "x": "L'<b>IVA</b> és un impost que se suma al preu dels productes i serveis. A Espanya hi ha tres tipus: el general (21 %), el reduït (10 %) i el superreduït (4 %). Preu amb IVA = preu sense IVA × (1 + tipus).|El <b>IVA</b> es un impuesto que se suma al precio de los productos y servicios. En España hay tres tipos: el general (21 %), el reducido (10 %) y el superreducido (4 %). Precio con IVA = precio sin IVA × (1 + tipo).",
  "ex": ["Mòbil de 300 € sense IVA, al 21 %|Móvil de 300 € sin IVA, al 21 %", "IVA: 300 × 0,21 = 63 €|IVA: 300 × 0,21 = 63 €", "Total: 300 × 1,21 = <span class=\"hl\">363 €</span>|Total: 300 × 1,21 = <span class=\"hl\">363 €</span>"] },
{ "t": "Preu sense IVA|Precio sin IVA", "x": "Si et donen el preu <b>amb</b> IVA, no restis el 21 % del total: el preu amb IVA és el 121 % del preu sense IVA. Per tornar enrere, <b>divideix</b> entre 1,21.|Si te dan el precio <b>con</b> IVA, no restes el 21 % del total: el precio con IVA es el 121 % del precio sin IVA. Para volver atrás, <b>divide</b> entre 1,21.",
  "ex": ["Pagues 242 € amb l'IVA del 21 %|Pagas 242 € con el IVA del 21 %", "242 ÷ 1,21 = <span class=\"hl\">200 €</span> sense IVA|242 ÷ 1,21 = <span class=\"hl\">200 €</span> sin IVA"] },
{ "t": "L'IRPF|El IRPF", "x": "L'<b>IRPF</b> és l'impost sobre la renda. L'empresa en <b>reté</b> un percentatge del sou brut cada mes i el paga a Hisenda: el que cobres és el sou net. En una factura d'un autònom se suma l'IVA i es resta la retenció d'IRPF.|El <b>IRPF</b> es el impuesto sobre la renta. La empresa <b>retiene</b> un porcentaje del sueldo bruto cada mes y lo paga a Hacienda: lo que cobras es el sueldo neto. En una factura de un autónomo se suma el IVA y se resta la retención de IRPF.",
  "ex": ["Sou brut 2.000 €, retenció del 15 %|Sueldo bruto 2.000 €, retención del 15 %", "Retenció: 300 €|Retención: 300 €", "Net (només amb l'IRPF): <span class=\"hl\">1.700 €</span>|Neto (solo con el IRPF): <span class=\"hl\">1.700 €</span>"] },
{ "t": "Quin surt més a compte? Divises|¿Qué sale más a cuenta? Divisas", "x": "Per comparar paquets, calcula el <b>preu per unitat</b> (o per quilo). Per canviar moneda, multiplica pel canvi: si 1 € = 1,08 $, 50 € són 54 $; i per tornar a euros, divideix.|Para comparar paquetes, calcula el <b>precio por unidad</b> (o por kilo). Para cambiar moneda, multiplica por el cambio: si 1 € = 1,08 $, 50 € son 54 $; y para volver a euros, divide.",
  "ex": ["6 iogurts per 2,40 € → 0,40 € cadascun|6 yogures por 2,40 € → 0,40 € cada uno", "4 iogurts per 1,80 € → 0,45 € cadascun|4 yogures por 1,80 € → 0,45 € cada uno", "Surt més a compte el <span class=\"hl\">de 6</span>|Sale más a cuenta el <span class=\"hl\">de 6</span>"] }
],
"words": [
["base imposable|base imponible", "preu abans d'afegir-hi l'IVA|precio antes de añadir el IVA"],
["sou brut i net|sueldo bruto y neto", "brut: abans de les retencions; net: el que cobres de veritat|bruto: antes de las retenciones; neto: lo que cobras de verdad"],
["retenció|retención", "part del sou que l'empresa paga a Hisenda en nom teu|parte del sueldo que la empresa paga a Hacienda en tu nombre"],
["divisa|divisa", "moneda d'un altre país: dòlar, lliura, franc suís…|moneda de otro país: dólar, libra, franco suizo…"]
],
"mistakes": [
["«Pagues 121 € amb IVA; sense IVA són 121 − 21 % = 95,59 €.»|«Pagas 121 € con IVA; sin IVA son 121 − 21 % = 95,59 €.»", "El 21 % es calcula sobre el preu sense IVA: 121 ÷ 1,21 = 100 €.|El 21 % se calcula sobre el precio sin IVA: 121 ÷ 1,21 = 100 €."],
["«El paquet gran sempre surt més barat.»|«El paquete grande siempre sale más barato.»", "No sempre: compara el preu per unitat.|No siempre: compara el precio por unidad."],
["«Un descompte del 20 % i l'IVA del 21 % s'anul·len.»|«Un descuento del 20 % y el IVA del 21 % se anulan.»", "S'apliquen un darrere l'altre: × 0,80 × 1,21 = × 0,968.|Se aplican uno detrás de otro: × 0,80 × 1,21 = × 0,968."]
],
"recap": ["Amb IVA: × (1 + tipus). Sense IVA: ÷ (1 + tipus).|Con IVA: × (1 + tipo). Sin IVA: ÷ (1 + tipo).", "Net = brut − retenció d'IRPF.|Neto = bruto − retención de IRPF.", "Factura: base + IVA − IRPF.|Factura: base + IVA − IRPF.", "Compara sempre el preu per unitat.|Compara siempre el precio por unidad."],
"tip": "Quan vagis a comprar, fixa't en l'etiqueta petita del preu per quilo o per litre: la botiga ja ha fet el càlcul per tu i així compares al moment.|Cuando vayas a comprar, fíjate en la etiqueta pequeña del precio por kilo o por litro: la tienda ya ha hecho el cálculo por ti y así comparas al momento."
}
});

/* ---------- 3r d'ESO (c9) ---------- */
Object.assign(THEORY, {
"c9-10": {
"hook": "Les alçades d'una classe, els temps d'una cursa o les notes d'un examen: amb histogrames, quartils i la desviació típica es pot descriure un grup sencer amb pocs números i un dibuix.|Las alturas de una clase, los tiempos de una carrera o las notas de un examen: con histogramas, cuartiles y la desviación típica se puede describir un grupo entero con pocos números y un dibujo.",
"parts": [
{ "t": "Histogrames|Histogramas", "x": "Quan les dades són contínues (alçades, temps…), s'agrupen en <b>intervals</b>. L'interval [160, 170) inclou el 160 però no el 170. En un <b>histograma</b>, les barres van enganxades i l'altura de cada una és la freqüència. La <b>marca de classe</b> és el punt del mig de l'interval.|Cuando los datos son continuos (alturas, tiempos…), se agrupan en <b>intervalos</b>. El intervalo [160, 170) incluye el 160 pero no el 170. En un <b>histograma</b>, las barras van pegadas y la altura de cada una es la frecuencia. La <b>marca de clase</b> es el punto medio del intervalo.",
  "ex": ["Interval [160, 170) amb 8 alumnes|Intervalo [160, 170) con 8 alumnos", "Marca de classe: (160 + 170) ÷ 2 = <span class=\"hl\">165</span>|Marca de clase: (160 + 170) ÷ 2 = <span class=\"hl\">165</span>", "Mitjana aproximada: suma de marca × freqüència, ÷ total|Media aproximada: suma de marca × frecuencia, ÷ total"] },
{ "t": "Quartils|Cuartiles", "x": "Amb les dades <b>ordenades</b>, la mediana les parteix en dues meitats. El <b>primer quartil (Q1)</b> és la mediana de la meitat de sota i el <b>tercer (Q3)</b>, la de la meitat de dalt. Q1, la mediana i Q3 parteixen les dades en quatre parts del 25 %.|Con los datos <b>ordenados</b>, la mediana los parte en dos mitades. El <b>primer cuartil (Q1)</b> es la mediana de la mitad de abajo y el <b>tercero (Q3)</b>, la de la mitad de arriba. Q1, la mediana y Q3 parten los datos en cuatro partes del 25 %.",
  "ex": ["2, 4, 4, 6, 7, 9, 9|2, 4, 4, 6, 7, 9, 9", "Mediana: 6. Q1: 4. Q3: 9|Mediana: 6. Q1: 4. Q3: 9", "Rang interquartílic: 9 − 4 = <span class=\"hl\">5</span>|Rango intercuartílico: 9 − 4 = <span class=\"hl\">5</span>"] },
{ "t": "Diagrama de caixa|Diagrama de caja", "x": "El <b>diagrama de caixa</b> dibuixa cinc números: el mínim, Q1, la mediana, Q3 i el màxim. La caixa va de Q1 a Q3 i conté el 50 % central de les dades; els bigotis arriben fins al mínim i el màxim.|El <b>diagrama de caja</b> dibuja cinco números: el mínimo, Q1, la mediana, Q3 y el máximo. La caja va de Q1 a Q3 y contiene el 50 % central de los datos; los bigotes llegan hasta el mínimo y el máximo.",
  "ex": ["Caixa de 4 a 7 i mediana 6|Caja de 4 a 7 y mediana 6", "El 50 % de les dades és entre 4 i 7|El 50 % de los datos está entre 4 y 7", "El 25 % és per sota de <span class=\"hl\">4</span>|El 25 % está por debajo de <span class=\"hl\">4</span>"] },
{ "t": "Variància i desviació típica|Varianza y desviación típica", "x": "La <b>variància</b> és la mitjana dels quadrats de les distàncies de cada dada a la mitjana. La <b>desviació típica</b> (σ) és la seva arrel quadrada: indica quant s'allunyen les dades de la mitjana, de mitjana. Com més petita, més agrupades.|La <b>varianza</b> es la media de los cuadrados de las distancias de cada dato a la media. La <b>desviación típica</b> (σ) es su raíz cuadrada: indica cuánto se alejan los datos de la media, de media. Cuanto más pequeña, más agrupados.",
  "ex": ["4, 6, 8, 6 → mitjana 6|4, 6, 8, 6 → media 6", "Variància: ((−2)² + 0² + 2² + 0²) ÷ 4 = 2|Varianza: ((−2)² + 0² + 2² + 0²) ÷ 4 = 2", "σ = √2 ≈ <span class=\"hl\">1,41</span>|σ = √2 ≈ <span class=\"hl\">1,41</span>"] }
],
"words": [
["interval|intervalo", "grup de valors, com [160, 170): del 160 fins a menys de 170|grupo de valores, como [160, 170): del 160 hasta menos de 170"],
["marca de classe|marca de clase", "punt del mig d'un interval|punto medio de un intervalo"],
["quartils|cuartiles", "valors que parteixen les dades ordenades en quatre parts iguals|valores que parten los datos ordenados en cuatro partes iguales"],
["rang interquartílic|rango intercuartílico", "Q3 − Q1: l'amplada del 50 % central|Q3 − Q1: la anchura del 50 % central"],
["desviació típica|desviación típica", "arrel de la variància; mesura la dispersió|raíz de la varianza; mide la dispersión"]
],
"mistakes": [
["«Q1 és la primera dada.»|«Q1 es el primer dato.»", "La primera dada és el mínim. Q1 deixa el 25 % de les dades per sota.|El primer dato es el mínimo. Q1 deja el 25 % de los datos por debajo."],
["«La variància de 4, 6, 8 és (−2 + 0 + 2) ÷ 3 = 0.»|«La varianza de 4, 6, 8 es (−2 + 0 + 2) ÷ 3 = 0.»", "Les distàncies s'eleven al quadrat perquè no s'anul·lin: (4 + 0 + 4) ÷ 3.|Las distancias se elevan al cuadrado para que no se anulen: (4 + 0 + 4) ÷ 3."],
["«Els quartils es calculen sense ordenar.»|«Los cuartiles se calculan sin ordenar.»", "Com la mediana, cal ordenar primer.|Como la mediana, hay que ordenar primero."]
],
"recap": ["Histograma: barres enganxades, una per interval.|Histograma: barras pegadas, una por intervalo.", "Q1, mediana i Q3 parteixen en quatre parts.|Q1, mediana y Q3 parten en cuatro partes.", "Caixa: de Q1 a Q3, el 50 % central.|Caja: de Q1 a Q3, el 50 % central.", "σ = √variància; més petita, més agrupades.|σ = √varianza; más pequeña, más agrupados."],
"tip": "Abans de calcular σ, fes-te'n una idea: si les dades s'allunyen 1 o 2 unitats de la mitjana, σ ha de ser a prop d'1 o 2. Si et surt 15, has oblidat dividir o fer l'arrel.|Antes de calcular σ, hazte una idea: si los datos se alejan 1 o 2 unidades de la media, σ debe estar cerca de 1 o 2. Si te sale 15, has olvidado dividir o hacer la raíz."
},
"c9-11": {
"hook": "Si hi ha el doble de pintors, la paret es pinta en la meitat de temps. Aquesta relació, la proporcionalitat inversa, té una gràfica molt especial: la hipèrbola.|Si hay el doble de pintores, la pared se pinta en la mitad de tiempo. Esta relación, la proporcionalidad inversa, tiene una gráfica muy especial: la hipérbola.",
"parts": [
{ "t": "Proporcionalitat inversa|Proporcionalidad inversa", "x": "Dues magnituds són <b>inversament proporcionals</b> si, quan una es multiplica per un nombre, l'altra es divideix pel mateix nombre. El seu producte és sempre el mateix: <b>x × y = k</b>.|Dos magnitudes son <b>inversamente proporcionales</b> si, cuando una se multiplica por un número, la otra se divide por el mismo número. Su producto es siempre el mismo: <b>x × y = k</b>.",
  "ex": ["2 aixetes → 12 h; 4 aixetes → 6 h|2 grifos → 12 h; 4 grifos → 6 h", "2 × 12 = 4 × 6 = 24|2 × 12 = 4 × 6 = 24", "k = <span class=\"hl\">24</span>|k = <span class=\"hl\">24</span>"] },
{ "t": "L'expressió y = k/x|La expresión y = k/x", "x": "Si x × y = k, llavors <b>y = k/x</b>. Per trobar un valor que falta en una taula, calcula k amb una parella coneguda i divideix-lo entre la x.|Si x × y = k, entonces <b>y = k/x</b>. Para encontrar un valor que falta en una tabla, calcula k con una pareja conocida y divídelo entre la x.",
  "ex": ["x: 2, 3, 6 · y: 9, 6, ?|x: 2, 3, 6 · y: 9, 6, ?", "k = 2 × 9 = 18|k = 2 × 9 = 18", "y = 18 ÷ 6 = <span class=\"hl\">3</span>|y = 18 ÷ 6 = <span class=\"hl\">3</span>"] },
{ "t": "La hipèrbola|La hipérbola", "x": "La gràfica de y = k/x és una <b>hipèrbola</b>: dues branques que s'acosten als eixos sense tocar-los mai (x no pot valer 0). Si k és positiu, les branques són al 1r i al 3r quadrant; si és negatiu, al 2n i al 4t.|La gráfica de y = k/x es una <b>hipérbola</b>: dos ramas que se acercan a los ejes sin tocarlos nunca (x no puede valer 0). Si k es positivo, las ramas están en el 1.er y el 3.er cuadrante; si es negativo, en el 2.º y el 4.º.",
  "ex": ["y = 6/x passa per (1, 6), (2, 3), (3, 2), (6, 1)|y = 6/x pasa por (1, 6), (2, 3), (3, 2), (6, 1)", "i per (−2, −3), a l'altra branca|y por (−2, −3), en la otra rama"] },
{ "t": "Quin tipus de funció és?|¿Qué tipo de función es?", "x": "Una <b>recta</b> és una funció lineal (y = mx + n); una <b>paràbola</b>, una funció quadràtica (y = ax² + bx + c); i dues branques que s'acosten als eixos, una <b>hipèrbola</b> (y = k/x).|Una <b>recta</b> es una función lineal (y = mx + n); una <b>parábola</b>, una función cuadrática (y = ax² + bx + c); y dos ramas que se acercan a los ejes, una <b>hipérbola</b> (y = k/x).",
  "ex": ["Forma de U o de U capgirada → paràbola|Forma de U o de U invertida → parábola", "Línia recta → lineal|Línea recta → lineal", "Dues branques → <span class=\"hl\">proporcionalitat inversa</span>|Dos ramas → <span class=\"hl\">proporcionalidad inversa</span>"] }
],
"words": [
["constant de proporcionalitat inversa|constante de proporcionalidad inversa", "el producte fix k = x × y|el producto fijo k = x × y"],
["hipèrbola|hipérbola", "gràfica de y = k/x, amb dues branques|gráfica de y = k/x, con dos ramas"],
["asímptota|asíntota", "recta a la qual la gràfica s'acosta sense tocar-la mai (aquí, els eixos)|recta a la que la gráfica se acerca sin tocarla nunca (aquí, los ejes)"],
["funció lineal|función lineal", "funció de la forma y = mx + n; la seva gràfica és una recta|función de la forma y = mx + n; su gráfica es una recta"]
],
"mistakes": [
["«Si un augmenta i l'altre disminueix, ja és proporcionalitat inversa.»|«Si uno aumenta y el otro disminuye, ya es proporcionalidad inversa.»", "Cal que el producte sigui constant: 2 × 12 = 3 × 8 = 4 × 6.|Hace falta que el producto sea constante: 2 × 12 = 3 × 8 = 4 × 6."],
["«La hipèrbola talla els eixos.»|«La hipérbola corta los ejes.»", "Mai: x no pot ser 0 i y tampoc no arriba a 0.|Nunca: x no puede ser 0 e y tampoco llega a 0."],
["«y = 12/x amb x = 3 dona 36.»|«y = 12/x con x = 3 da 36.»", "Es divideix, no es multiplica: 12 ÷ 3 = 4.|Se divide, no se multiplica: 12 ÷ 3 = 4."]
],
"recap": ["Inversa: x × y = k sempre.|Inversa: x × y = k siempre.", "y = k/x.|y = k/x.", "Gràfica: hipèrbola de dues branques.|Gráfica: hipérbola de dos ramas.", "Recta, paràbola o hipèrbola: mira la forma.|Recta, parábola o hipérbola: mira la forma."],
"tip": "Per saber si una taula és de proporcionalitat inversa, multiplica cada parella. Si totes donen el mateix, ja tens k i l'expressió y = k/x.|Para saber si una tabla es de proporcionalidad inversa, multiplica cada pareja. Si todas dan lo mismo, ya tienes k y la expresión y = k/x."
},
"c9-12": {
"hook": "Per què 1/3 fa 0,333… per sempre i 1/4 s'acaba en 0,25? I com pot un ordinador fer milers de càlculs repetits sense equivocar-se? Aquí es troben els nombres i els algorismes.|¿Por qué 1/3 da 0,333… para siempre y 1/4 se acaba en 0,25? ¿Y cómo puede un ordenador hacer miles de cálculos repetidos sin equivocarse? Aquí se encuentran los números y los algoritmos.",
"parts": [
{ "t": "Tipus de nombres decimals|Tipos de números decimales", "x": "Una fracció irreductible dona un decimal <b>exacte</b> si el denominador només té factors 2 i 5; <b>periòdic pur</b> si no en té cap (el període comença just després de la coma); i <b>periòdic mixt</b> si en té i també d'altres.|Una fracción irreducible da un decimal <b>exacto</b> si el denominador solo tiene factores 2 y 5; <b>periódico puro</b> si no tiene ninguno (el período empieza justo después de la coma); y <b>periódico mixto</b> si tiene y también otros.",
  "ex": ["7/20: 20 = 2² × 5 → exacte (0,35)|7/20: 20 = 2² × 5 → exacto (0,35)", "5/11: 11 → periòdic pur (0,4545…)|5/11: 11 → periódico puro (0,4545…)", "1/6: 6 = 2 × 3 → <span class=\"hl\">periòdic mixt</span> (0,1666…)|1/6: 6 = 2 × 3 → <span class=\"hl\">periódico mixto</span> (0,1666…)"] },
{ "t": "Fracció generatriu: exactes i periòdics purs|Fracción generatriz: exactos y periódicos puros", "x": "Un decimal exacte és una fracció amb denominador 10, 100, 1.000… Per a un periòdic pur: (nombre sense coma − part entera) ÷ tants 9 com xifres té el període. Després, simplifica.|Un decimal exacto es una fracción con denominador 10, 100, 1.000… Para un periódico puro: (número sin coma − parte entera) ÷ tantos 9 como cifras tiene el período. Después, simplifica.",
  "ex": ["0,45 = 45/100 = 9/20|0,45 = 45/100 = 9/20", "1,272727… = (127 − 1) ÷ 99|1,272727… = (127 − 1) ÷ 99", "= 126/99 = <span class=\"hl\">14/11</span>|= 126/99 = <span class=\"hl\">14/11</span>"] },
{ "t": "Fracció generatriu: periòdics mixtos|Fracción generatriz: periódicos mixtos", "x": "Per a un periòdic mixt: (nombre sense coma − la part que no es repeteix) ÷ un nombre fet de tants 9 com xifres té el període seguits de tants 0 com xifres no periòdiques hi ha després de la coma.|Para un periódico mixto: (número sin coma − la parte que no se repite) ÷ un número hecho de tantos 9 como cifras tiene el período seguidos de tantos 0 como cifras no periódicas hay después de la coma.",
  "ex": ["0,1666… (no periòdica: 1; període: 6)|0,1666… (no periódica: 1; período: 6)", "(16 − 1) ÷ 90 = 15/90|(16 − 1) ÷ 90 = 15/90", "= <span class=\"hl\">1/6</span>|= <span class=\"hl\">1/6</span>"] },
{ "t": "Bucles niats i algorismes|Bucles anidados y algoritmos", "x": "Un <b>bucle niat</b> és un bucle dins d'un altre: per cada volta del de fora, el de dins les fa totes. Si el de fora fa 3 voltes i el de dins 4, l'interior s'executa 3 × 4 = 12 vegades. Combinant bucles i condicions es poden comptar parelles, recórrer taules o provar tots els casos d'un problema.|Un <b>bucle anidado</b> es un bucle dentro de otro: por cada vuelta del de fuera, el de dentro las da todas. Si el de fuera da 3 vueltas y el de dentro 4, el interior se ejecuta 3 × 4 = 12 veces. Combinando bucles y condiciones se pueden contar parejas, recorrer tablas o probar todos los casos de un problema.",
  "ex": ["for i in range(1, 4): for j in range(i): c = c + 1|for i in range(1, 4): for j in range(i): c = c + 1", "i = 1: 1 volta; i = 2: 2; i = 3: 3|i = 1: 1 vuelta; i = 2: 2; i = 3: 3", "c = <span class=\"hl\">6</span>|c = <span class=\"hl\">6</span>"] }
],
"words": [
["període|período", "xifres que es repeteixen per sempre; s'indica amb un arc a sobre|cifras que se repiten para siempre; se indica con un arco encima"],
["fracció generatriu|fracción generatriz", "fracció irreductible que dona un decimal|fracción irreducible que da un decimal"],
["nombre racional|número racional", "nombre que es pot escriure com a fracció: enters, exactes i periòdics|número que se puede escribir como fracción: enteros, exactos y periódicos"],
["bucle niat|bucle anidado", "bucle que va dins d'un altre bucle|bucle que va dentro de otro bucle"]
],
"mistakes": [
["«0,333… = 333/1000.»|«0,333… = 333/1000.»", "Aquest és 0,333 exacte. El periòdic és 3/9 = 1/3.|Ese es 0,333 exacto. El periódico es 3/9 = 1/3."],
["«A 0,1666… posem 16/99.»|«En 0,1666… ponemos 16/99.»", "És periòdic mixt: (16 − 1) ÷ 90 = 1/6.|Es periódico mixto: (16 − 1) ÷ 90 = 1/6."],
["«Dos bucles de 3 i 4 voltes fan 7 voltes.»|«Dos bucles de 3 y 4 vueltas dan 7 vueltas.»", "Si un és dins de l'altre, es multipliquen: 3 × 4 = 12.|Si uno está dentro del otro, se multiplican: 3 × 4 = 12."]
],
"recap": ["Denominador amb 2 i 5: exacte.|Denominador con 2 y 5: exacto.", "Periòdic pur: ÷ 9, 99…|Periódico puro: ÷ 9, 99…", "Periòdic mixt: ÷ 90, 990…|Periódico mixto: ÷ 90, 990…", "Bucles niats: les voltes es multipliquen.|Bucles anidados: las vueltas se multiplican."],
"tip": "Comprova sempre la fracció generatriu fent la divisió amb la calculadora: si 14 ÷ 11 dona 1,2727…, ho tens bé.|Comprueba siempre la fracción generatriz haciendo la división con la calculadora: si 14 ÷ 11 da 1,2727…, lo tienes bien."
}
});

/* ---------- 4t d'ESO (c10) ---------- */
Object.assign(THEORY, {
"c10-8": {
"hook": "Estudiar més fa treure millors notes? La calor fa vendre més gelats? Amb dues variables i un núvol de punts es veu si estan relacionades, i amb simulacions l'ordinador ens ajuda a entendre l'atzar.|¿Estudiar más hace sacar mejores notas? ¿El calor hace vender más helados? Con dos variables y una nube de puntos se ve si están relacionadas, y con simulaciones el ordenador nos ayuda a entender el azar.",
"parts": [
{ "t": "Núvol de punts i correlació|Nube de puntos y correlación", "x": "Cada individu és un punt (x, y). Si els punts pugen cap a la dreta, la correlació és <b>positiva</b>; si baixen, <b>negativa</b>; si estan escampats sense direcció, <b>no n'hi ha</b> (nul·la).|Cada individuo es un punto (x, y). Si los puntos suben hacia la derecha, la correlación es <b>positiva</b>; si bajan, <b>negativa</b>; si están dispersos sin dirección, <b>no la hay</b> (nula).",
  "ex": ["Hores d'estudi i nota: pugen junts|Horas de estudio y nota: suben juntos", "Hores de mòbil i hores de son: una puja, l'altra baixa|Horas de móvil y horas de sueño: una sube, la otra baja", "Positiva i <span class=\"hl\">negativa</span>|Positiva y <span class=\"hl\">negativa</span>"] },
{ "t": "Forta o feble: el coeficient r|Fuerte o débil: el coeficiente r", "x": "Si els punts són molt a prop d'una recta, la correlació és <b>forta</b>; si estan escampats, <b>feble</b>. El <b>coeficient de correlació</b> r va de −1 a 1: a prop d'1, positiva i forta; a prop de −1, negativa i forta; a prop de 0, no n'hi ha.|Si los puntos están muy cerca de una recta, la correlación es <b>fuerte</b>; si están dispersos, <b>débil</b>. El <b>coeficiente de correlación</b> r va de −1 a 1: cerca de 1, positiva y fuerte; cerca de −1, negativa y fuerte; cerca de 0, no la hay.",
  "ex": ["r = 0,95: positiva i forta|r = 0,95: positiva y fuerte", "r = −0,5: negativa i feble|r = −0,5: negativa y débil", "r = 0,03: <span class=\"hl\">sense correlació</span>|r = 0,03: <span class=\"hl\">sin correlación</span>"] },
{ "t": "La recta de regressió|La recta de regresión", "x": "La <b>recta de regressió</b> és la que passa més a prop de tots els punts. Serveix per fer <b>previsions</b>: substitueixes la x i obtens la y esperada. És una previsió, no una certesa, i només és fiable si la correlació és forta.|La <b>recta de regresión</b> es la que pasa más cerca de todos los puntos. Sirve para hacer <b>previsiones</b>: sustituyes la x y obtienes la y esperada. Es una previsión, no una certeza, y solo es fiable si la correlación es fuerte.",
  "ex": ["y = 0,6x + 3 (hores d'estudi → nota)|y = 0,6x + 3 (horas de estudio → nota)", "x = 5 → y = 0,6 × 5 + 3|x = 5 → y = 0,6 × 5 + 3", "Nota prevista: <span class=\"hl\">6</span>|Nota prevista: <span class=\"hl\">6</span>"] },
{ "t": "Simular l'atzar|Simular el azar", "x": "Un ordinador pot repetir un experiment milers de vegades: random.randint(1, 6) simula un dau. La <b>freqüència relativa</b> (vegades que passa ÷ proves) s'acosta a la <b>probabilitat</b> com més proves es fan: és la <b>llei dels grans nombres</b>.|Un ordenador puede repetir un experimento miles de veces: random.randint(1, 6) simula un dado. La <b>frecuencia relativa</b> (veces que pasa ÷ pruebas) se acerca a la <b>probabilidad</b> cuantas más pruebas se hacen: es la <b>ley de los grandes números</b>.",
  "ex": ["6.000 tirades d'un dau|6.000 tiradas de un dado", "Sisos esperats: 6.000 × 1/6 = 1.000|Seises esperados: 6.000 × 1/6 = 1.000", "Surt un número <span class=\"hl\">a prop de 1.000</span>, no exacte|Sale un número <span class=\"hl\">cerca de 1.000</span>, no exacto"] }
],
"words": [
["variable bidimensional|variable bidimensional", "parella de dades de cada individu (x, y)|pareja de datos de cada individuo (x, y)"],
["correlació|correlación", "relació entre dues variables: positiva, negativa o nul·la|relación entre dos variables: positiva, negativa o nula"],
["previsió|previsión", "valor esperat que dona la recta de regressió|valor esperado que da la recta de regresión"],
["simulació|simulación", "experiment fet amb l'ordinador amb nombres a l'atzar|experimento hecho con el ordenador con números al azar"]
],
"mistakes": [
["«Correlació forta vol dir que una cosa causa l'altra.»|«Correlación fuerte quiere decir que una cosa causa la otra.»", "No necessàriament: les vendes de gelats i les cremades solars van juntes perquè totes dues depenen de la calor.|No necesariamente: las ventas de helados y las quemaduras solares van juntas porque ambas dependen del calor."],
["«r = −0,9 és una correlació feble perquè és negativa.»|«r = −0,9 es una correlación débil porque es negativa.»", "El signe diu la direcció; la força és a prop de 1 o −1: és forta.|El signo dice la dirección; la fuerza está cerca de 1 o −1: es fuerte."],
["«Amb 1.000 tirades sortiran exactament 500 cares.»|«Con 1.000 tiradas saldrán exactamente 500 caras.»", "En sortiran unes 500; el resultat varia cada vegada.|Saldrán unas 500; el resultado varía cada vez."]
],
"recap": ["Pugen: positiva. Baixen: negativa. Escampats: nul·la.|Suben: positiva. Bajan: negativa. Dispersos: nula.", "r a prop de ±1: forta.|r cerca de ±1: fuerte.", "Recta de regressió: per fer previsions.|Recta de regresión: para hacer previsiones.", "Moltes proves: freqüència relativa ≈ probabilitat.|Muchas pruebas: frecuencia relativa ≈ probabilidad."],
"tip": "Dibuixa mentalment una recta pel mig del núvol: si la pots traçar i els punts hi queden a prop, la correlació és forta; si no saps cap on anar, no n'hi ha.|Dibuja mentalmente una recta por el medio de la nube: si la puedes trazar y los puntos quedan cerca, la correlación es fuerte; si no sabes hacia dónde ir, no la hay."
},
"c10-9": {
"hook": "Els bacteris que es dupliquen, un virus que s'estén o els diners que creixen al banc: quan una quantitat es multiplica sempre pel mateix nombre, creix de manera exponencial, cada cop més de pressa.|Las bacterias que se duplican, un virus que se extiende o el dinero que crece en el banco: cuando una cantidad se multiplica siempre por el mismo número, crece de manera exponencial, cada vez más deprisa.",
"parts": [
{ "t": "La funció exponencial|La función exponencial", "x": "Una funció <b>exponencial</b> té la x a l'exponent: <b>y = a · bˣ</b>. El valor a és el valor inicial (quan x = 0) i b és la <b>base</b>: cada vegada que x augmenta 1, la y es multiplica per b.|Una función <b>exponencial</b> tiene la x en el exponente: <b>y = a · bˣ</b>. El valor a es el valor inicial (cuando x = 0) y b es la <b>base</b>: cada vez que x aumenta 1, la y se multiplica por b.",
  "ex": ["f(x) = 3 · 2ˣ|f(x) = 3 · 2ˣ", "f(0) = 3 · 1 = 3; f(1) = 6; f(2) = 12|f(0) = 3 · 1 = 3; f(1) = 6; f(2) = 12", "f(4) = 3 · 16 = <span class=\"hl\">48</span>|f(4) = 3 · 16 = <span class=\"hl\">48</span>"] },
{ "t": "Creixement i decreixement|Crecimiento y decrecimiento", "x": "Si la base és <b>més gran que 1</b>, la funció és creixent; si és <b>entre 0 i 1</b>, és decreixent. Un augment del 10 % anual és multiplicar per 1,1; una pèrdua del 20 %, multiplicar per 0,8.|Si la base es <b>mayor que 1</b>, la función es creciente; si está <b>entre 0 y 1</b>, es decreciente. Un aumento del 10 % anual es multiplicar por 1,1; una pérdida del 20 %, multiplicar por 0,8.",
  "ex": ["500 bacteris que es dupliquen cada hora|500 bacterias que se duplican cada hora", "Al cap de 4 h: 500 · 2⁴|Al cabo de 4 h: 500 · 2⁴", "= <span class=\"hl\">8.000</span> bacteris|= <span class=\"hl\">8.000</span> bacterias"] },
{ "t": "Creix o decreix? Màxims i mínims|¿Crece o decrece? Máximos y mínimos", "x": "Mirant la gràfica d'esquerra a dreta, una funció és <b>creixent</b> on puja i <b>decreixent</b> on baixa. Els intervals s'escriuen amb les x: (−4, 1). El <b>màxim</b> és el punt més alt i el <b>mínim</b>, el més baix.|Mirando la gráfica de izquierda a derecha, una función es <b>creciente</b> donde sube y <b>decreciente</b> donde baja. Los intervalos se escriben con las x: (−4, 1). El <b>máximo</b> es el punto más alto y el <b>mínimo</b>, el más bajo.",
  "ex": ["Baixa de x = −6 a x = −2 i puja fins a x = 3|Baja de x = −6 a x = −2 y sube hasta x = 3", "Decreixent a (−6, −2), creixent a (−2, 3)|Decreciente en (−6, −2), creciente en (−2, 3)", "Mínim a <span class=\"hl\">x = −2</span>|Mínimo en <span class=\"hl\">x = −2</span>"] },
{ "t": "Reconèixer les gràfiques|Reconocer las gráficas", "x": "y = 2ˣ passa per (0, 1), creix cada vegada més de pressa i a l'esquerra s'acosta a 0 sense arribar-hi. y = (1/2)ˣ és la seva imatge en un mirall: també passa per (0, 1), però decreix. Una recta creix sempre al mateix ritme; una paràbola té un vèrtex.|y = 2ˣ pasa por (0, 1), crece cada vez más deprisa y a la izquierda se acerca a 0 sin llegar. y = (1/2)ˣ es su imagen en un espejo: también pasa por (0, 1), pero decrece. Una recta crece siempre al mismo ritmo; una parábola tiene un vértice.",
  "ex": ["y = 2ˣ: 1, 2, 4, 8, 16…|y = 2ˣ: 1, 2, 4, 8, 16…", "y = 2x: 0, 2, 4, 6, 8…|y = 2x: 0, 2, 4, 6, 8…", "L'exponencial <span class=\"hl\">guanya</span> aviat|La exponencial <span class=\"hl\">gana</span> pronto"] }
],
"words": [
["funció exponencial|función exponencial", "funció y = a · bˣ, amb la x a l'exponent|función y = a · bˣ, con la x en el exponente"],
["base|base", "nombre que es multiplica a cada pas (b)|número que se multiplica en cada paso (b)"],
["creixent i decreixent|creciente y decreciente", "que puja o que baixa d'esquerra a dreta|que sube o que baja de izquierda a derecha"],
["màxim i mínim|máximo y mínimo", "punt més alt i punt més baix de la gràfica|punto más alto y punto más bajo de la gráfica"]
],
"mistakes": [
["«2ˣ i 2x són el mateix.»|«2ˣ y 2x son lo mismo.»", "2x suma 2 a cada pas; 2ˣ multiplica per 2: 2⁵ = 32, però 2 · 5 = 10.|2x suma 2 en cada paso; 2ˣ multiplica por 2: 2⁵ = 32, pero 2 · 5 = 10."],
["«Perdre un 20 % cada any és multiplicar per 0,2.»|«Perder un 20 % cada año es multiplicar por 0,2.»", "En queda el 80 %: es multiplica per 0,8.|Queda el 80 %: se multiplica por 0,8."],
["«Un interval creixent és (2, −4) perquè la y va de 2 a −4.»|«Un intervalo creciente es (2, −4) porque la y va de 2 a −4.»", "Els intervals es donen amb les x i d'esquerra a dreta.|Los intervalos se dan con las x y de izquierda a derecha."]
],
"recap": ["y = a · bˣ: a inicial, b la base.|y = a · bˣ: a inicial, b la base.", "b > 1 creix; 0 < b < 1 decreix.|b > 1 crece; 0 < b < 1 decrece.", "Intervals amb les x, d'esquerra a dreta.|Intervalos con las x, de izquierda a derecha.", "Màxim: el més alt. Mínim: el més baix.|Máximo: el más alto. Mínimo: el más bajo."],
"tip": "Per saber si una taula és exponencial, divideix cada valor entre l'anterior. Si sempre dona el mateix, aquest número és la base.|Para saber si una tabla es exponencial, divide cada valor entre el anterior. Si siempre da lo mismo, ese número es la base."
},
"c10-10": {
"hook": "Si estalvies, els bancs et paguen interessos; si demanes un préstec, els pagues tu. Amb l'interès compost, els interessos també generen interessos, i al cap dels anys la diferència és enorme.|Si ahorras, los bancos te pagan intereses; si pides un préstamo, los pagas tú. Con el interés compuesto, los intereses también generan intereses, y al cabo de los años la diferencia es enorme.",
"parts": [
{ "t": "Interès compost|Interés compuesto", "x": "Amb interès <b>compost</b>, cada any els interessos s'afegeixen al capital i l'any següent també guanyen interessos. Capital final: <b>C · (1 + r)ᵗ</b>, amb r el tant per u i t els anys.|Con interés <b>compuesto</b>, cada año los intereses se añaden al capital y el año siguiente también ganan intereses. Capital final: <b>C · (1 + r)ᵗ</b>, con r el tanto por uno y t los años.",
  "ex": ["1.000 € al 5 % durant 2 anys|1.000 € al 5 % durante 2 años", "1.000 · 1,05² = 1.102,50 €|1.000 · 1,05² = 1.102,50 €", "Interessos: <span class=\"hl\">102,50 €</span>|Intereses: <span class=\"hl\">102,50 €</span>"] },
{ "t": "Simple o compost?|¿Simple o compuesto?", "x": "Amb interès <b>simple</b>, cada any es cobra el mateix (sobre el capital inicial): C · (1 + r · t). Amb el <b>compost</b> es cobra cada any una mica més. Com més anys, més diferència.|Con interés <b>simple</b>, cada año se cobra lo mismo (sobre el capital inicial): C · (1 + r · t). Con el <b>compuesto</b> se cobra cada año un poco más. Cuantos más años, más diferencia.",
  "ex": ["1.000 € al 10 % durant 3 anys|1.000 € al 10 % durante 3 años", "Simple: 1.300 €. Compost: 1.000 · 1,1³ = 1.331 €|Simple: 1.300 €. Compuesto: 1.000 · 1,1³ = 1.331 €", "Diferència: <span class=\"hl\">31 €</span>|Diferencia: <span class=\"hl\">31 €</span>"] },
{ "t": "Quants anys calen?|¿Cuántos años hacen falta?", "x": "Per saber quan se supera una quantitat, calcula el capital any a any (multiplicant cada vegada per 1 + r) fins que la passi.|Para saber cuándo se supera una cantidad, calcula el capital año a año (multiplicando cada vez por 1 + r) hasta que la pase.",
  "ex": ["2.000 € al 10 %: quan passaran de 2.500 €?|2.000 € al 10 %: ¿cuándo pasarán de 2.500 €?", "2.200 → 2.420 → 2.662|2.200 → 2.420 → 2.662", "Al cap de <span class=\"hl\">3 anys</span>|Al cabo de <span class=\"hl\">3 años</span>"] },
{ "t": "TAE i depreciació|TAE y depreciación", "x": "Si l'interès es calcula cada mes, en un any es guanya una mica més que 12 vegades el mensual: aquest percentatge anual equivalent és la <b>TAE</b>. La <b>depreciació</b> funciona igual però baixant: un cotxe que perd el 15 % cada any es multiplica per 0,85.|Si el interés se calcula cada mes, en un año se gana algo más que 12 veces el mensual: este porcentaje anual equivalente es la <b>TAE</b>. La <b>depreciación</b> funciona igual pero bajando: un coche que pierde el 15 % cada año se multiplica por 0,85.",
  "ex": ["1 % mensual: 1,01¹² = 1,1268|1 % mensual: 1,01¹² = 1,1268", "TAE ≈ <span class=\"hl\">12,68 %</span>|TAE ≈ <span class=\"hl\">12,68 %</span>", "Cotxe de 20.000 € al cap de 2 anys: 20.000 · 0,85² = 14.450 €|Coche de 20.000 € al cabo de 2 años: 20.000 · 0,85² = 14.450 €"] }
],
"words": [
["capital|capital", "diners que s'estalvien o es demanen prestats|dinero que se ahorra o se pide prestado"],
["tant per u|tanto por uno", "el percentatge dividit per 100: 5 % → 0,05|el porcentaje dividido por 100: 5 % → 0,05"],
["TAE|TAE", "taxa anual equivalent: el que guanyes (o pagues) de veritat en un any|tasa anual equivalente: lo que ganas (o pagas) de verdad en un año"],
["depreciació|depreciación", "pèrdua de valor d'un bé amb el temps|pérdida de valor de un bien con el tiempo"]
],
"mistakes": [
["«1.000 € al 5 % durant 2 anys: 1.000 · 1,05 · 2.»|«1.000 € al 5 % durante 2 años: 1.000 · 1,05 · 2.»", "Els anys van a l'exponent: 1.000 · 1,05² = 1.102,50 €.|Los años van en el exponente: 1.000 · 1,05² = 1.102,50 €."],
["«Un 1 % al mes és un 12 % a l'any.»|«Un 1 % al mes es un 12 % al año.»", "Amb interès compost és una mica més: 12,68 %.|Con interés compuesto es algo más: 12,68 %."],
["«Si perd un 10 % dos anys, perd un 20 %.»|«Si pierde un 10 % dos años, pierde un 20 %.»", "0,9² = 0,81: perd un 19 %.|0,9² = 0,81: pierde un 19 %."]
],
"recap": ["Compost: C · (1 + r)ᵗ.|Compuesto: C · (1 + r)ᵗ.", "Simple: C · (1 + r · t).|Simple: C · (1 + r · t).", "Interessos = capital final − capital inicial.|Intereses = capital final − capital inicial.", "Depreciació: × (1 − r) cada any.|Depreciación: × (1 − r) cada año."],
"tip": "La regla del 72: divideix 72 entre el percentatge anual i sabràs, aproximadament, en quants anys es duplicarà el capital. Al 6 %, uns 12 anys.|La regla del 72: divide 72 entre el porcentaje anual y sabrás, aproximadamente, en cuántos años se duplicará el capital. Al 6 %, unos 12 años."
},
"c10-11": {
"hook": "Els GPS, els videojocs i els programes de disseny guarden les posicions amb coordenades i els moviments amb vectors. Amb uns quants càlculs saps la distància entre dos llocs o si dos camins es tallaran.|Los GPS, los videojuegos y los programas de diseño guardan las posiciones con coordenadas y los movimientos con vectores. Con unos cuantos cálculos sabes la distancia entre dos lugares o si dos caminos se cortarán.",
"parts": [
{ "t": "Vectors|Vectores", "x": "Un <b>vector</b> és una fletxa: té direcció, sentit i longitud. El vector que va d'A a B es calcula restant: <b>AB = B − A</b>. Les coordenades diuen quant es mou en horitzontal i en vertical.|Un <b>vector</b> es una flecha: tiene dirección, sentido y longitud. El vector que va de A a B se calcula restando: <b>AB = B − A</b>. Las coordenadas dicen cuánto se mueve en horizontal y en vertical.",
  "ex": ["A(1, 2) i B(4, −2)|A(1, 2) y B(4, −2)", "AB = (4 − 1, −2 − 2)|AB = (4 − 1, −2 − 2)", "AB = <span class=\"hl\">(3, −4)</span>|AB = <span class=\"hl\">(3, −4)</span>"] },
{ "t": "Mòdul i distància|Módulo y distancia", "x": "El <b>mòdul</b> d'un vector (x, y) és la seva longitud: √(x² + y²), per Pitàgores. La <b>distància</b> entre dos punts és el mòdul del vector que els uneix.|El <b>módulo</b> de un vector (x, y) es su longitud: √(x² + y²), por Pitágoras. La <b>distancia</b> entre dos puntos es el módulo del vector que los une.",
  "ex": ["∣(3, −4)∣ = √(9 + 16)|∣(3, −4)∣ = √(9 + 16)", "= √25 = <span class=\"hl\">5</span>|= √25 = <span class=\"hl\">5</span>"] },
{ "t": "Punt mitjà i operacions|Punto medio y operaciones", "x": "El <b>punt mitjà</b> d'un segment és la mitjana de les coordenades dels extrems. Els vectors se sumen i es multipliquen per un nombre coordenada a coordenada.|El <b>punto medio</b> de un segmento es la media de las coordenadas de los extremos. Los vectores se suman y se multiplican por un número coordenada a coordenada.",
  "ex": ["A(2, 5) i B(6, −1) → M((2 + 6) ÷ 2, (5 − 1) ÷ 2) = <span class=\"hl\">(4, 2)</span>|A(2, 5) y B(6, −1) → M((2 + 6) ÷ 2, (5 − 1) ÷ 2) = <span class=\"hl\">(4, 2)</span>", "u = (1, 3), v = (2, −1) → 2u − v = (0, 7)|u = (1, 3), v = (2, −1) → 2u − v = (0, 7)"] },
{ "t": "Equacions de la recta|Ecuaciones de la recta", "x": "El pendent entre dos punts és m = (y₂ − y₁) ÷ (x₂ − x₁). Una recta es pot escriure de diverses maneres: <b>explícita</b> y = mx + n, <b>punt-pendent</b> y − y₀ = m(x − x₀) i <b>general</b> ax + by + c = 0 (pendent −a/b). Dues rectes amb el mateix pendent són <b>paral·leles</b>; si el producte dels pendents és −1, són <b>perpendiculars</b>.|La pendiente entre dos puntos es m = (y₂ − y₁) ÷ (x₂ − x₁). Una recta se puede escribir de varias maneras: <b>explícita</b> y = mx + n, <b>punto-pendiente</b> y − y₀ = m(x − x₀) y <b>general</b> ax + by + c = 0 (pendiente −a/b). Dos rectas con la misma pendiente son <b>paralelas</b>; si el producto de las pendientes es −1, son <b>perpendiculares</b>.",
  "ex": ["Per P(1, 3) amb m = 2: y − 3 = 2(x − 1)|Por P(1, 3) con m = 2: y − 3 = 2(x − 1)", "y = 2x + 1 i y = −½x + 4: 2 × (−½) = −1|y = 2x + 1 e y = −½x + 4: 2 × (−½) = −1", "Són <span class=\"hl\">perpendiculars</span>|Son <span class=\"hl\">perpendiculares</span>"] }
],
"words": [
["vector|vector", "fletxa amb direcció, sentit i longitud; AB = B − A|flecha con dirección, sentido y longitud; AB = B − A"],
["mòdul|módulo", "longitud d'un vector: √(x² + y²)|longitud de un vector: √(x² + y²)"],
["punt mitjà|punto medio", "punt que parteix un segment en dues meitats|punto que parte un segmento en dos mitades"],
["vector director|vector director", "vector que marca la direcció d'una recta; per a y = mx + n, (1, m)|vector que marca la dirección de una recta; para y = mx + n, (1, m)"]
],
"mistakes": [
["«AB = A − B.»|«AB = A − B.»", "És al revés: final menys origen, B − A.|Es al revés: final menos origen, B − A."],
["«∣(3, −4)∣ = 3 + (−4) = −1.»|«∣(3, −4)∣ = 3 + (−4) = −1.»", "El mòdul és una longitud: √(3² + (−4)²) = 5, sempre positiu.|El módulo es una longitud: √(3² + (−4)²) = 5, siempre positivo."],
["«y = 2x + 1 i y = −2x + 3 són perpendiculars.»|«y = 2x + 1 e y = −2x + 3 son perpendiculares.»", "2 × (−2) = −4, no −1. Perpendicular a pendent 2 és pendent −1/2.|2 × (−2) = −4, no −1. Perpendicular a pendiente 2 es pendiente −1/2."]
],
"recap": ["AB = B − A.|AB = B − A.", "Mòdul: √(x² + y²).|Módulo: √(x² + y²).", "Punt mitjà: mitjana de les coordenades.|Punto medio: media de las coordenadas.", "Paral·leles: mateix pendent. Perpendiculars: producte −1.|Paralelas: misma pendiente. Perpendiculares: producto −1."],
"tip": "Fes sempre un dibuix ràpid: si el vector AB va cap a l'esquerra i avall, les dues coordenades han de ser negatives. El dibuix t'avisa dels errors de signe.|Haz siempre un dibujo rápido: si el vector AB va hacia la izquierda y abajo, las dos coordenadas deben ser negativas. El dibujo te avisa de los errores de signo."
},
"c10-12": {
"hook": "Hi ha nombres que no es poden escriure com una fracció, com π o √2, i conjunts que no tenen fi, com «tots els nombres més grans que 3». Els nombres reals i els intervals ho ordenen tot.|Hay números que no se pueden escribir como una fracción, como π o √2, y conjuntos que no tienen fin, como «todos los números mayores que 3». Los números reales y los intervalos lo ordenan todo.",
"parts": [
{ "t": "Conjunts de nombres|Conjuntos de números", "x": "<b>ℕ</b>, naturals (0, 1, 2…); <b>ℤ</b>, enters (també els negatius); <b>ℚ</b>, racionals (els que es poden escriure com a fracció: exactes i periòdics); i <b>ℝ</b>, reals (els racionals més els <b>irracionals</b>). Cada conjunt conté l'anterior.|<b>ℕ</b>, naturales (0, 1, 2…); <b>ℤ</b>, enteros (también los negativos); <b>ℚ</b>, racionales (los que se pueden escribir como fracción: exactos y periódicos); y <b>ℝ</b>, reales (los racionales más los <b>irracionales</b>). Cada conjunto contiene al anterior.",
  "ex": ["√49 = 7 → natural|√49 = 7 → natural", "−3 → enter; 2/5 = 0,4 → racional|−3 → entero; 2/5 = 0,4 → racional", "√2 = 1,41421… → <span class=\"hl\">irracional</span>|√2 = 1,41421… → <span class=\"hl\">irracional</span>"] },
{ "t": "Nombres irracionals|Números irracionales", "x": "Un nombre <b>irracional</b> té infinites xifres decimals sense cap període: π, √2, √3, √5… L'arrel quadrada d'un nombre que no és un quadrat perfecte és irracional; la d'un quadrat perfecte, no (√16 = 4).|Un número <b>irracional</b> tiene infinitas cifras decimales sin ningún período: π, √2, √3, √5… La raíz cuadrada de un número que no es un cuadrado perfecto es irracional; la de un cuadrado perfecto, no (√16 = 4).",
  "ex": ["√10 ≈ 3,162… → irracional|√10 ≈ 3,162… → irracional", "0,333… = 1/3 → racional (té període)|0,333… = 1/3 → racional (tiene período)"] },
{ "t": "Intervals|Intervalos", "x": "Un <b>interval</b> és un tros de la recta real. El claudàtor [ ] vol dir que l'extrem hi entra (≤) i el parèntesi ( ), que no (<). Si no té fi s'escriu amb ∞, sempre amb parèntesi: x > 3 és (3, +∞).|Un <b>intervalo</b> es un trozo de la recta real. El corchete [ ] quiere decir que el extremo entra (≤) y el paréntesis ( ), que no (<). Si no tiene fin se escribe con ∞, siempre con paréntesis: x > 3 es (3, +∞).",
  "ex": ["−2 ≤ x &lt; 5 → [−2, 5)|−2 ≤ x &lt; 5 → [−2, 5)", "A la recta: punt ple al −2, punt buit al 5|En la recta: punto lleno en el −2, punto vacío en el 5", "x ≤ 1 → <span class=\"hl\">(−∞, 1]</span>|x ≤ 1 → <span class=\"hl\">(−∞, 1]</span>"] },
{ "t": "Ordenar i aproximar reals|Ordenar y aproximar reales", "x": "Per ordenar reals, escriu-los tots amb decimals (π ≈ 3,142; √8 ≈ 2,828). Per aproximar una arrel, busca entre quins nombres és el seu quadrat, o arrodoneix el decimal a les xifres que et demanen.|Para ordenar reales, escríbelos todos con decimales (π ≈ 3,142; √8 ≈ 2,828). Para aproximar una raíz, busca entre qué números está su cuadrado, o redondea el decimal a las cifras que te piden.",
  "ex": ["√2: 1,4² = 1,96 i 1,5² = 2,25|√2: 1,4² = 1,96 y 1,5² = 2,25", "√2 és entre 1,4 i 1,5|√2 está entre 1,4 y 1,5", "√2 ≈ <span class=\"hl\">1,41</span> (a les centèsimes)|√2 ≈ <span class=\"hl\">1,41</span> (a las centésimas)"] }
],
"words": [
["nombre racional|número racional", "el que es pot escriure com a fracció|el que se puede escribir como fracción"],
["nombre irracional|número irracional", "decimal infinit sense període, com π o √2|decimal infinito sin período, como π o √2"],
["interval obert i tancat|intervalo abierto y cerrado", "obert (a, b): sense els extrems; tancat [a, b]: amb els extrems|abierto (a, b): sin los extremos; cerrado [a, b]: con los extremos"],
["intersecció (∩)|intersección (∩)", "els nombres que són a tots dos intervals alhora|los números que están en los dos intervalos a la vez"]
],
"mistakes": [
["«√16 és irracional perquè porta arrel.»|«√16 es irracional porque lleva raíz.»", "√16 = 4, que és natural. Només són irracionals les arrels que no són exactes.|√16 = 4, que es natural. Solo son irracionales las raíces que no son exactas."],
["«0,5555… és irracional perquè no s'acaba.»|«0,5555… es irracional porque no se acaba.»", "Té període: és 5/9, racional.|Tiene período: es 5/9, racional."],
["«x > 3 és [3, +∞].»|«x > 3 es [3, +∞].»", "El 3 no hi entra i l'infinit mai: (3, +∞).|El 3 no entra y el infinito nunca: (3, +∞)."]
],
"recap": ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.|ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.", "Irracional: infinites xifres sense període.|Irracional: infinitas cifras sin período.", "[ ] hi entra; ( ) no hi entra; ∞ sempre amb ( ).|[ ] entra; ( ) no entra; ∞ siempre con ( ).", "Per ordenar, passa-ho tot a decimal.|Para ordenar, pásalo todo a decimal."],
"tip": "Recorda tres valors de memòria: √2 ≈ 1,41, √3 ≈ 1,73 i π ≈ 3,14. Amb aquests, moltes comparacions es fan de cap.|Recuerda tres valores de memoria: √2 ≈ 1,41, √3 ≈ 1,73 y π ≈ 3,14. Con estos, muchas comparaciones se hacen de cabeza."
}
});
