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
