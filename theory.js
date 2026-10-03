/* Teoria de cada unitat, en català|castellà.
   Completa: hook (per a què serveix), parts (conceptes amb exemple), words, mistakes, recap i tip.
   Si una unitat només té idea/steps/tip és la versió curta antiga. Es mostra a learn.js. */
const THEORY = {
"c1-1": {
"hook": "Comptes cromos o espelmes del pastís? Fas servir números.|¿Cuentas cromos o velas de la tarta? Usas números.",
"parts": [
{
"t": "Comptar|Contar",
"x": "Per comptar, toca cada cosa <b>una sola vegada</b>. L'últim número que dius et diu quantes n'hi ha.|Para contar, toca cada cosa <b>una sola vez</b>. El último número que dices te dice cuántas hay.",
"ex": [
"Hi ha unes pomes a la taula|Hay unas manzanas en la mesa",
"Toco i dic: 1, 2, 3, 4, 5, 6|Toco y digo: 1, 2, 3, 4, 5, 6",
"Hi ha <span class=\"hl\">6</span> pomes|Hay <span class=\"hl\">6</span> manzanas"
]
},
{
"t": "Abans i després|Antes y después",
"x": "El número de <b>després</b> és un més. El número d'<b>abans</b> és un menys. Pensa en una escala: pujar és un més.|El número de <b>después</b> es uno más. El número de <b>antes</b> es uno menos. Piensa en una escalera: subir es uno más.",
"ex": [
"Abans del 12 va l'<span class=\"hl\">11</span>|Antes del 12 va el <span class=\"hl\">11</span>",
"Després del 12 va el <span class=\"hl\">13</span>|Después del 12 va el <span class=\"hl\">13</span>",
"En ordre: 11, 12, 13|En orden: 11, 12, 13"
]
},
{
"t": "Desenes i unitats|Decenas y unidades",
"x": "Quan tens 10 coses, fas un grup: una <b>desena</b>. Les coses soltes són les <b>unitats</b>. Per això el 14 porta un 1 i un 4.|Cuando tienes 10 cosas, haces un grupo: una <b>decena</b>. Las cosas sueltas son las <b>unidades</b>. Por eso el 14 lleva un 1 y un 4.",
"ex": [
"Tinc 14 cromos|Tengo 14 cromos",
"Faig un grup de 10. En sobren 4.|Hago un grupo de 10. Sobran 4.",
"14 = <span class=\"hl\">1 desena i 4 unitats</span>|14 = <span class=\"hl\">1 decena y 4 unidades</span>"
]
},
{
"t": "Més gran o més petit|Mayor o menor",
"x": "Un número és <b>més gran</b> si va després quan comptes. Primer mira les desenes. Si són iguals, mira les unitats. El signe > vol dir «és més gran que».|Un número es <b>mayor</b> si va después cuando cuentas. Primero mira las decenas. Si son iguales, mira las unidades. El signo > quiere decir «es mayor que».",
"ex": [
"15 o 9?|¿15 o 9?",
"15 té 1 desena. 9 no en té cap.|15 tiene 1 decena. 9 no tiene ninguna.",
"<span class=\"hl\">15 > 9</span>|<span class=\"hl\">15 > 9</span>"
]
}
],
"words": [
[
"desena|decena",
"un grup de 10 unitats|un grupo de 10 unidades"
],
[
"unitat|unidad",
"cada cosa solta, d'una en una|cada cosa suelta, de una en una"
],
[
"més gran que (>)|mayor que (>)",
"que en té més|que tiene más"
],
[
"més petit que (&lt;)|menor que (&lt;)",
"que en té menys|que tiene menos"
],
[
"igual (=)|igual (=)",
"que en té els mateixos|que tiene los mismos"
]
],
"mistakes": [
[
"«He comptat la mateixa poma dues vegades.»|«He contado la misma manzana dos veces.»",
"Toca cada cosa i aparta-la. Així no en repeteixes cap.|Toca cada cosa y apártala. Así no repites ninguna."
],
[
"«12 és més petit que 9, perquè 2 és més petit.»|«12 es menor que 9, porque 2 es menor.»",
"Mira primer les desenes. El 12 en té una i el 9, cap. Per tant, 12 > 9.|Mira primero las decenas. El 12 tiene una y el 9, ninguna. Por tanto, 12 > 9."
],
[
"«Després del 19 va el deu-i-deu.»|«Después del 19 va el diecidiez.»",
"Amb 10 unitats més fas una altra desena. Després del 19 va el 20.|Con 10 unidades más haces otra decena. Después del 19 va el 20."
]
],
"recap": [
"Toca cada cosa una sola vegada.|Toca cada cosa una sola vez.",
"Després: un més. Abans: un menys.|Después: uno más. Antes: uno menos.",
"10 unitats fan 1 desena.|10 unidades hacen 1 decena.",
"Per comparar, mira primer les desenes.|Para comparar, mira primero las decenas."
],
"tip": "Si hi ha moltes coses, compta de 5 en 5: 5, 10, 15... Aniràs més de pressa.|Si hay muchas cosas, cuenta de 5 en 5: 5, 10, 15... Irás más rápido."
},
"c1-2": {
"hook": "Tens 5 cromos i te'n donen 3. Quants en tens ara? Això és sumar.|Tienes 5 cromos y te dan 3. ¿Cuántos tienes ahora? Eso es sumar.",
"parts": [
{
"t": "Sumar és ajuntar|Sumar es juntar",
"x": "<b>Sumar</b> és ajuntar dos grups i comptar-ho tot. El signe + vol dir «més». El signe = vol dir «fa».|<b>Sumar</b> es juntar dos grupos y contarlo todo. El signo + quiere decir «más». El signo = quiere decir «da».",
"ex": [
"3 pomes i 2 pomes més|3 manzanas y 2 manzanas más",
"Les ajunto: 1, 2, 3, 4, 5|Las junto: 1, 2, 3, 4, 5",
"3 + 2 = <span class=\"hl\">5</span>|3 + 2 = <span class=\"hl\">5</span>"
]
},
{
"t": "Compta des del més gran|Cuenta desde el mayor",
"x": "No cal començar per l'1. Comença pel número més gran. Després compta endavant els que falten. L'ordre no canvia el resultat: 4 + 13 = 13 + 4.|No hace falta empezar por el 1. Empieza por el número mayor. Después cuenta hacia delante los que faltan. El orden no cambia el resultado: 4 + 13 = 13 + 4.",
"ex": [
"4 + 13 = ?|4 + 13 = ?",
"Començo pel 13|Empiezo por el 13",
"Compto 4 més: 14, 15, 16, 17|Cuento 4 más: 14, 15, 16, 17",
"4 + 13 = <span class=\"hl\">17</span>|4 + 13 = <span class=\"hl\">17</span>"
]
},
{
"t": "Fem desena|Hacemos decena",
"x": "El 10 és un número molt còmode. Primer completa el 10. Després suma el que sobra. Parelles que fan 10: 1 i 9, 2 i 8, 3 i 7, 4 i 6, 5 i 5.|El 10 es un número muy cómodo. Primero completa el 10. Después suma lo que sobra. Parejas que hacen 10: 1 y 9, 2 y 8, 3 y 7, 4 y 6, 5 y 5.",
"ex": [
"8 + 5 = ?|8 + 5 = ?",
"El 5 és 2 i 3|El 5 es 2 y 3",
"8 + 2 = 10|8 + 2 = 10",
"10 + 3 = 13|10 + 3 = 13",
"8 + 5 = <span class=\"hl\">13</span>|8 + 5 = <span class=\"hl\">13</span>"
]
},
{
"t": "El número amagat|El número escondido",
"x": "De vegades falta un número de la suma. Pregunta't: quant falta per arribar? Compta des del primer número fins al resultat.|A veces falta un número de la suma. Pregúntate: ¿cuánto falta para llegar? Cuenta desde el primer número hasta el resultado.",
"ex": [
"4 + ? = 9|4 + ? = 9",
"Del 4 al 9: 5, 6, 7, 8, 9|Del 4 al 9: 5, 6, 7, 8, 9",
"He comptat 5 números|He contado 5 números",
"4 + <span class=\"hl\">5</span> = 9|4 + <span class=\"hl\">5</span> = 9"
]
}
],
"words": [
[
"sumar|sumar",
"ajuntar i comptar-ho tot|juntar y contarlo todo"
],
[
"signe +|signo +",
"vol dir «més»: afegim|quiere decir «más»: añadimos"
],
[
"signe =|signo =",
"vol dir «fa»: el resultat|quiere decir «da»: el resultado"
],
[
"total|total",
"tot junt, el resultat de la suma|todo junto, el resultado de la suma"
],
[
"fer desena|hacer decena",
"completar el 10 per sumar més fàcil|completar el 10 para sumar más fácil"
]
],
"mistakes": [
[
"«6 + 3: compto 6, 7, 8. Fa 8.»|«6 + 3: cuento 6, 7, 8. Da 8.»",
"El 6 ja el tens. Compta a partir del següent: 7, 8, 9. Fa 9.|El 6 ya lo tienes. Cuenta a partir del siguiente: 7, 8, 9. Da 9."
],
[
"«4 + ? = 9. El número amagat és 13.»|«4 + ? = 9. El número escondido es 13.»",
"Has sumat 4 i 9. Busca quant falta del 4 al 9: són 5.|Has sumado 4 y 9. Busca cuánto falta del 4 al 9: son 5."
]
],
"recap": [
"Sumar és ajuntar i comptar-ho tot.|Sumar es juntar y contarlo todo.",
"Comença sempre pel número més gran.|Empieza siempre por el número mayor.",
"Completa el 10 i suma el que sobra.|Completa el 10 y suma lo que sobra.",
"Número amagat: quant falta per arribar?|Número escondido: ¿cuánto falta para llegar?"
],
"tip": "Aprèn les parelles del 10 amb els dits: si en baixes 3, en queden 7 de pujats.|Aprende las parejas del 10 con los dedos: si bajas 3, quedan 7 levantados."
},
"c1-3": {
"hook": "Si tens 8 caramels i te'n menges 3, quants et queden? Això és restar.|Si tienes 8 caramelos y te comes 3, ¿cuántos te quedan? Eso es restar.",
"parts": [
{
"t": "Restar és treure|Restar es quitar",
"x": "<b>Restar</b> és treure coses i comptar les que queden. El signe − vol dir «menys». Quan restes, en queden menys que al principi.|<b>Restar</b> es quitar cosas y contar las que quedan. El signo − quiere decir «menos». Cuando restas, quedan menos que al principio.",
"ex": [
"Tinc 7 globus. Se n'escapen 2.|Tengo 7 globos. Se escapan 2.",
"Queden: 1, 2, 3, 4, 5|Quedan: 1, 2, 3, 4, 5",
"7 − 2 = <span class=\"hl\">5</span>|7 − 2 = <span class=\"hl\">5</span>"
]
},
{
"t": "Comptar enrere|Contar hacia atrás",
"x": "Comença pel número gran. Fes tants passos enrere com diu el número petit. On t'atures, aquest és el resultat.|Empieza por el número grande. Da tantos pasos atrás como dice el número pequeño. Donde te paras, ese es el resultado.",
"ex": [
"17 − 4 = ?|17 − 4 = ?",
"Des del 17, 4 passos enrere|Desde el 17, 4 pasos atrás",
"16, 15, 14, 13|16, 15, 14, 13",
"17 − 4 = <span class=\"hl\">13</span>|17 − 4 = <span class=\"hl\">13</span>"
]
},
{
"t": "Passem la desena|Pasamos la decena",
"x": "Si has de treure molts, para al 10. Primer baixa fins al 10. Després treu el que falta.|Si tienes que quitar muchos, para en el 10. Primero baja hasta el 10. Después quita lo que falta.",
"ex": [
"14 − 6 = ?|14 − 6 = ?",
"El 6 és 4 i 2|El 6 es 4 y 2",
"14 − 4 = 10|14 − 4 = 10",
"10 − 2 = 8|10 − 2 = 8",
"14 − 6 = <span class=\"hl\">8</span>|14 − 6 = <span class=\"hl\">8</span>"
]
},
{
"t": "Dobles i meitats|Dobles y mitades",
"x": "El <b>doble</b> és sumar un número amb ell mateix. La <b>meitat</b> és partir en dues parts iguals. Una desfà l'altra.|El <b>doble</b> es sumar un número consigo mismo. La <b>mitad</b> es partir en dos partes iguales. Una deshace la otra.",
"ex": [
"Doble de 4: 4 + 4 = 8|Doble de 4: 4 + 4 = 8",
"Meitat de 8: 8 en 2 parts iguals|Mitad de 8: 8 en 2 partes iguales",
"La meitat de 8 és <span class=\"hl\">4</span>|La mitad de 8 es <span class=\"hl\">4</span>"
]
}
],
"words": [
[
"restar|restar",
"treure i comptar el que queda|quitar y contar lo que queda"
],
[
"signe −|signo −",
"vol dir «menys»: traiem|quiere decir «menos»: quitamos"
],
[
"doble|doble",
"un número sumat dues vegades|un número sumado dos veces"
],
[
"meitat|mitad",
"una de dues parts iguals|una de dos partes iguales"
]
],
"mistakes": [
[
"«7 − 2 = 9»|«7 − 2 = 9»",
"Has sumat. Si treus, en queden menys: 7 − 2 = 5.|Has sumado. Si quitas, quedan menos: 7 − 2 = 5."
],
[
"«La meitat de 8 és 16.»|«La mitad de 8 es 16.»",
"16 és el doble. La meitat és més petita: 4.|16 es el doble. La mitad es más pequeña: 4."
],
[
"«14 − ? = 8. El número amagat és 22.»|«14 − ? = 8. El número escondido es 22.»",
"Has sumat 14 i 8. Busca quant hi ha del 8 al 14: 6. Comprova: 14 − 6 = 8.|Has sumado 14 y 8. Busca cuánto hay del 8 al 14: 6. Comprueba: 14 − 6 = 8."
]
],
"recap": [
"Restar és treure: en queden menys.|Restar es quitar: quedan menos.",
"Compta enrere des del número gran.|Cuenta hacia atrás desde el número grande.",
"Per passar la desena, para al 10.|Para pasar la decena, para en el 10.",
"Doble: el número dues vegades. Meitat: partir en dos.|Doble: el número dos veces. Mitad: partir en dos."
],
"tip": "Comprova la resta amb una suma. Si 14 − 6 = 8, 8 + 6 fa 14.|Comprueba la resta con una suma. Si 14 − 6 = 8, 8 + 6 da 14."
},
"c1-4": {
"hook": "A la biblioteca de l'escola hi ha molts contes. Per comptar-ne tants, fem grups de 10.|En la biblioteca del cole hay muchos cuentos. Para contar tantos, hacemos grupos de 10.",
"parts": [
{
"t": "Les desenes|Las decenas",
"x": "Comptem de 10 en 10 fins al 100. Cada grup de 10 és una <b>desena</b>. 10 desenes fan 100.|Contamos de 10 en 10 hasta el 100. Cada grupo de 10 es una <b>decena</b>. 10 decenas hacen 100.",
"ex": [
"10, 20, 30, 40, 50|10, 20, 30, 40, 50",
"60, 70, 80, 90, <span class=\"hl\">100</span>|60, 70, 80, 90, <span class=\"hl\">100</span>",
"10 desenes = 100|10 decenas = 100"
]
},
{
"t": "Llegir i escriure números|Leer y escribir números",
"x": "Els números com el 47 tenen dues xifres. La primera diu les <b>desenes</b>. La segona diu les <b>unitats</b>. Llegim primer les desenes.|Los números como el 47 tienen dos cifras. La primera dice las <b>decenas</b>. La segunda dice las <b>unidades</b>. Leemos primero las decenas.",
"ex": [
"47 = 4 desenes i 7 unitats|47 = 4 decenas y 7 unidades",
"40 + 7 = 47|40 + 7 = 47",
"Es llegeix: <span class=\"hl\">quaranta-set</span>|Se lee: <span class=\"hl\">cuarenta y siete</span>"
]
},
{
"t": "Abans, després i comparar|Antes, después y comparar",
"x": "Després d'un número va un més. Per comparar, mira primer les desenes. Si són iguals, mira les unitats. > vol dir «més gran que». &lt; vol dir «més petit que».|Después de un número va uno más. Para comparar, mira primero las decenas. Si son iguales, mira las unidades. > quiere decir «mayor que». &lt; quiere decir «menor que».",
"ex": [
"Després del 39 va el <span class=\"hl\">40</span>|Después del 39 va el <span class=\"hl\">40</span>",
"52 i 47: 5 desenes i 4 desenes|52 y 47: 5 decenas y 4 decenas",
"5 és més que 4|5 es más que 4",
"<span class=\"hl\">52 > 47</span>|<span class=\"hl\">52 > 47</span>"
]
},
{
"t": "Sumes de desenes|Sumas de decenas",
"x": "Sumar desenes és com sumar unitats. 3 desenes i 4 desenes fan 7 desenes. També pots ajuntar desenes i unitats: 50 + 6 = 56.|Sumar decenas es como sumar unidades. 3 decenas y 4 decenas hacen 7 decenas. También puedes juntar decenas y unidades: 50 + 6 = 56.",
"ex": [
"30 + 40 = ?|30 + 40 = ?",
"3 desenes + 4 desenes = 7 desenes|3 decenas + 4 decenas = 7 decenas",
"30 + 40 = <span class=\"hl\">70</span>|30 + 40 = <span class=\"hl\">70</span>"
]
}
],
"words": [
[
"desena|decena",
"un grup de 10 unitats|un grupo de 10 unidades"
],
[
"unitat|unidad",
"cada cosa solta|cada cosa suelta"
],
[
"xifra|cifra",
"cada signe que fem servir per escriure un número: 0, 1, 2... 9|cada signo que usamos para escribir un número: 0, 1, 2... 9"
],
[
"més gran que (>)|mayor que (>)",
"52 > 47: el 52 en té més|52 > 47: el 52 tiene más"
],
[
"més petit que (&lt;)|menor que (&lt;)",
"47 &lt; 52: el 47 en té menys|47 &lt; 52: el 47 tiene menos"
]
],
"mistakes": [
[
"«Quaranta-set s'escriu 407.»|«Cuarenta y siete se escribe 407.»",
"Són 4 desenes i 7 unitats. S'escriu amb dues xifres: 47.|Son 4 decenas y 7 unidades. Se escribe con dos cifras: 47."
],
[
"«29 és més gran que 31, perquè 9 és més.»|«29 es mayor que 31, porque 9 es más.»",
"Mira primer les desenes: 3 és més que 2. Per tant, 31 > 29.|Mira primero las decenas: 3 es más que 2. Por tanto, 31 > 29."
],
[
"«Després del 49 va el 410.»|«Después del 49 va el 410.»",
"Amb 10 unitats fas una desena nova. Després del 49 va el 50.|Con 10 unidades haces una decena nueva. Después del 49 va el 50."
]
],
"recap": [
"Una desena són 10 unitats.|Una decena son 10 unidades.",
"Primera xifra: desenes. Segona: unitats.|Primera cifra: decenas. Segunda: unidades.",
"Per comparar, mira primer les desenes.|Para comparar, mira primero las decenas.",
"30 + 40 és com 3 + 4, en desenes.|30 + 40 es como 3 + 4, en decenas."
],
"tip": "El signe > és la boca d'un cocodril: sempre s'obre cap al número més gran.|El signo > es la boca de un cocodrilo: siempre se abre hacia el número mayor."
},
"c1-5": {
"hook": "Mira al teu voltant: la finestra és un rectangle i el rellotge, un cercle.|Mira a tu alrededor: la ventana es un rectángulo y el reloj, un círculo.",
"parts": [
{
"t": "Les formes|Las formas",
"x": "Cada figura plana té un nom. Les coneixes pels seus costats. El cercle és rodó i no té costats rectes.|Cada figura plana tiene un nombre. Las conoces por sus lados. El círculo es redondo y no tiene lados rectos.",
"ex": [
"Triangle: 3 costats|Triángulo: 3 lados",
"Quadrat: 4 costats iguals|Cuadrado: 4 lados iguales",
"Rectangle: 2 costats llargs i 2 curts|Rectángulo: 2 lados largos y 2 cortos",
"Cercle: rodó, <span class=\"hl\">sense costats</span>|Círculo: redondo, <span class=\"hl\">sin lados</span>"
]
},
{
"t": "Costats i vèrtexs|Lados y vértices",
"x": "Els <b>costats</b> són les ratlles rectes de la figura. Els <b>vèrtexs</b> són les punxes. Allà s'ajunten dos costats. Per això hi ha tants vèrtexs com costats.|Los <b>lados</b> son las líneas rectas de la figura. Los <b>vértices</b> son las puntas. Allí se juntan dos lados. Por eso hay tantos vértices como lados.",
"ex": [
"Triangle: 3 costats i 3 vèrtexs|Triángulo: 3 lados y 3 vértices",
"Quadrat: 4 costats i 4 vèrtexs|Cuadrado: 4 lados y 4 vértices",
"Cercle: <span class=\"hl\">0</span> costats i 0 vèrtexs|Círculo: <span class=\"hl\">0</span> lados y 0 vértices"
]
},
{
"t": "Patrons|Patrones",
"x": "Un <b>patró</b> és un tros que es repeteix sempre igual. Busca on torna a començar. Així saps què ve després.|Un <b>patrón</b> es un trozo que se repite siempre igual. Busca dónde vuelve a empezar. Así sabes qué viene después.",
"ex": [
"vermell, blau, vermell, blau, ...|rojo, azul, rojo, azul, ...",
"Es repeteix: vermell, blau|Se repite: rojo, azul",
"Ara toca <span class=\"hl\">vermell</span>|Ahora toca <span class=\"hl\">rojo</span>"
]
},
{
"t": "Sèries de 2 en 2 i de 10 en 10|Series de 2 en 2 y de 10 en 10",
"x": "En una <b>sèrie</b> de números sumem sempre el mateix. De 2 en 2, sumem 2 cada vegada. De 10 en 10, canvien les desenes. Les unitats no canvien.|En una <b>serie</b> de números sumamos siempre lo mismo. De 2 en 2, sumamos 2 cada vez. De 10 en 10, cambian las decenas. Las unidades no cambian.",
"ex": [
"De 2 en 2: 2, 4, 6, 8, <span class=\"hl\">10</span>|De 2 en 2: 2, 4, 6, 8, <span class=\"hl\">10</span>",
"De 10 en 10: 13, 23, 33, <span class=\"hl\">43</span>|De 10 en 10: 13, 23, 33, <span class=\"hl\">43</span>",
"Les unitats sempre són 3|Las unidades siempre son 3"
]
}
],
"words": [
[
"costat|lado",
"cada ratlla recta d'una figura|cada línea recta de una figura"
],
[
"vèrtex|vértice",
"la punxa on s'ajunten dos costats|la punta donde se juntan dos lados"
],
[
"patró|patrón",
"un tros que es repeteix sempre igual|un trozo que se repite siempre igual"
],
[
"sèrie|serie",
"números que van sumant sempre el mateix|números que van sumando siempre lo mismo"
]
],
"mistakes": [
[
"«El quadrat i el rectangle són iguals.»|«El cuadrado y el rectángulo son iguales.»",
"Tots dos tenen 4 costats. Però el quadrat té els 4 costats iguals.|Los dos tienen 4 lados. Pero el cuadrado tiene los 4 lados iguales."
],
[
"«El cercle té 1 costat.»|«El círculo tiene 1 lado.»",
"El cercle és rodó. No té costats rectes ni vèrtexs.|El círculo es redondo. No tiene lados rectos ni vértices."
],
[
"«sol, sol, lluna, sol... Ara toca lluna.»|«sol, sol, luna, sol... Ahora toca luna.»",
"El tros és sol, sol, lluna. Després d'un sol en va un altre: toca sol.|El trozo es sol, sol, luna. Después de un sol va otro: toca sol."
]
],
"recap": [
"Triangle 3, quadrat i rectangle 4, cercle 0.|Triángulo 3, cuadrado y rectángulo 4, círculo 0.",
"Una figura té tants vèrtexs com costats.|Una figura tiene tantos vértices como lados.",
"Un patró és un tros que es repeteix.|Un patrón es un trozo que se repite.",
"En una sèrie, sumem sempre el mateix.|En una serie, sumamos siempre lo mismo."
],
"tip": "Passa el dit per les punxes de la figura i compta-les. Així no te'n deixes cap.|Pasa el dedo por las puntas de la figura y cuéntalas. Así no te dejas ninguna."
},
"c1-6": {
"hook": "Saber l'hora, mesurar un llapis o pagar un gelat: cada dia mesures coses.|Saber la hora, medir un lápiz o pagar un helado: cada día mides cosas.",
"parts": [
{
"t": "Les hores en punt|Las horas en punto",
"x": "El rellotge té dues agulles. La <b>petita</b> marca l'hora. La <b>gran</b> marca els minuts. A l'hora en punt, la gran apunta al 12.|El reloj tiene dos agujas. La <b>pequeña</b> marca la hora. La <b>grande</b> marca los minutos. A la hora en punto, la grande apunta al 12.",
"ex": [
"Agulla gran al 12|Aguja grande en el 12",
"Agulla petita al 3|Aguja pequeña en el 3",
"Són les <span class=\"hl\">3 en punt</span> (3:00)|Son las <span class=\"hl\">3 en punto</span> (3:00)"
]
},
{
"t": "Comptem euros|Contamos euros",
"x": "Hi ha monedes d'1 € i 2 €. Hi ha bitllets de 5 € i 10 €. Cada un val el número que porta. Suma'ls tots, començant pel més gran.|Hay monedas de 1 € y 2 €. Hay billetes de 5 € y 10 €. Cada uno vale el número que lleva. Súmalos todos, empezando por el mayor.",
"ex": [
"Un bitllet de 10 € i un de 5 €|Un billete de 10 € y uno de 5 €",
"Dues monedes de 2 €|Dos monedas de 2 €",
"10 + 5 + 2 + 2 = 19|10 + 5 + 2 + 2 = 19",
"Tens <span class=\"hl\">19 €</span>|Tienes <span class=\"hl\">19 €</span>"
]
},
{
"t": "Mesurem amb el regle|Medimos con la regla",
"x": "El <b>centímetre</b> (cm) serveix per mesurar coses petites. Posa el 0 del regle on comença l'objecte. Mira on acaba: aquest número és la llargada.|El <b>centímetro</b> (cm) sirve para medir cosas pequeñas. Pon el 0 de la regla donde empieza el objeto. Mira dónde acaba: ese número es la longitud.",
"ex": [
"El llapis comença al 0|El lápiz empieza en el 0",
"El llapis acaba al 8|El lápiz acaba en el 8",
"Fa <span class=\"hl\">8 cm</span>|Mide <span class=\"hl\">8 cm</span>"
]
},
{
"t": "Si no comença al 0|Si no empieza en el 0",
"x": "De vegades l'objecte no comença al 0. Llavors resta: on acaba menys on comença. També pots comptar els salts d'un número a l'altre.|A veces el objeto no empieza en el 0. Entonces resta: donde acaba menos donde empieza. También puedes contar los saltos de un número a otro.",
"ex": [
"Comença al 2 i acaba al 9|Empieza en el 2 y acaba en el 9",
"9 − 2 = 7|9 − 2 = 7",
"Fa <span class=\"hl\">7 cm</span>|Mide <span class=\"hl\">7 cm</span>"
]
}
],
"words": [
[
"agulla|aguja",
"la fletxa del rellotge que marca l'hora o els minuts|la flecha del reloj que marca la hora o los minutos"
],
[
"en punt|en punto",
"quan l'agulla gran és al 12|cuando la aguja grande está en el 12"
],
[
"euro (€)|euro (€)",
"els diners que fem servir per comprar|el dinero que usamos para comprar"
],
[
"centímetre (cm)|centímetro (cm)",
"cada salt petit del regle|cada salto pequeño de la regla"
]
],
"mistakes": [
[
"«Miro l'agulla gran per saber l'hora.»|«Miro la aguja grande para saber la hora.»",
"L'hora la marca la petita. A l'hora en punt, la gran és al 12.|La hora la marca la pequeña. A la hora en punto, la grande está en el 12."
],
[
"«Tinc 3 monedes, doncs tinc 3 €.»|«Tengo 3 monedas, así que tengo 3 €.»",
"Mira el número de cada moneda: 2 € + 2 € + 1 € = 5 €.|Mira el número de cada moneda: 2 € + 2 € + 1 € = 5 €."
],
[
"«El llapis va de l'1 al 9: fa 9 cm.»|«El lápiz va del 1 al 9: mide 9 cm.»",
"No comença al 0. Resta: 9 − 1 = 8. Fa 8 cm.|No empieza en el 0. Resta: 9 − 1 = 8. Mide 8 cm."
]
],
"recap": [
"Petita: l'hora. Gran al 12: en punt.|Pequeña: la hora. Grande en el 12: en punto.",
"Cada moneda val el número que porta.|Cada moneda vale el número que lleva.",
"Mesura sempre des del 0 del regle.|Mide siempre desde el 0 de la regla.",
"Si no comença al 0, resta.|Si no empieza en el 0, resta."
],
"tip": "Per comptar diners, comença pel bitllet més gran. Després compta endavant: 10, 15, 17, 19.|Para contar dinero, empieza por el billete mayor. Luego cuenta hacia delante: 10, 15, 17, 19."
},
"c1-7": {
"hook": "On és la teva motxilla? Per dir-ho, fas servir dreta, esquerra, a sobre...|¿Dónde está tu mochila? Para decirlo, usas derecha, izquierda, encima...",
"parts": [
{
"t": "Dreta i esquerra|Derecha e izquierda",
"x": "La <b>dreta</b> i l'<b>esquerra</b> són els dos costats del teu cos. En una fila, mira què hi ha a cada costat. També diem <b>a sobre</b> i <b>a sota</b>.|<b>Derecha</b> e <b>izquierda</b> son los dos lados de tu cuerpo. En una fila, mira qué hay a cada lado. También decimos <b>encima</b> y <b>debajo</b>.",
"ex": [
"Fila: poma, gat, pilota|Fila: manzana, gato, pelota",
"A la dreta del gat: la pilota|A la derecha del gato: la pelota",
"A l'esquerra del gat: la <span class=\"hl\">poma</span>|A la izquierda del gato: la <span class=\"hl\">manzana</span>"
]
},
{
"t": "Programar el robot|Programar el robot",
"x": "<b>Programar</b> és donar ordres a una màquina, una darrere l'altra. Cada fletxa mou el robot una casella. L'ordre de les fletxes és molt important.|<b>Programar</b> es dar órdenes a una máquina, una detrás de otra. Cada flecha mueve el robot una casilla. El orden de las flechas es muy importante.",
"ex": [
"Ordres: → → ↑|Órdenes: → → ↑",
"→ → : 2 caselles a la dreta|→ → : 2 casillas a la derecha",
"↑ : 1 casella amunt|↑ : 1 casilla arriba",
"El robot arriba a la <span class=\"hl\">meta</span>|El robot llega a la <span class=\"hl\">meta</span>"
]
},
{
"t": "Segur, possible o impossible|Seguro, posible o imposible",
"x": "Una cosa <b>segura</b> passa sempre. Una cosa <b>impossible</b> no passa mai. Una cosa <b>possible</b> pot passar o no.|Una cosa <b>segura</b> pasa siempre. Una cosa <b>imposible</b> no pasa nunca. Una cosa <b>posible</b> puede pasar o no.",
"ex": [
"Bossa amb 5 boles vermelles|Bolsa con 5 bolas rojas",
"Treure vermella: <span class=\"hl\">segur</span>|Sacar roja: <span class=\"hl\">seguro</span>",
"Treure verda: <span class=\"hl\">impossible</span>|Sacar verde: <span class=\"hl\">imposible</span>"
]
},
{
"t": "Comptem amb ratlletes|Contamos con rayitas",
"x": "Per comptar vots, fem una <b>ratlleta</b> per cada vot. La cinquena travessa les altres quatre. Així fem grups de 5 i comptem més de pressa. Guanya qui en té més.|Para contar votos, hacemos una <b>rayita</b> por cada voto. La quinta cruza las otras cuatro. Así hacemos grupos de 5 y contamos más rápido. Gana quien tiene más.",
"ex": [
"Plàtan: 1 grup de 5 i 3 ratlletes|Plátano: 1 grupo de 5 y 3 rayitas",
"5 + 3 = 8|5 + 3 = 8",
"El plàtan té <span class=\"hl\">8</span> vots|El plátano tiene <span class=\"hl\">8</span> votos"
]
}
],
"words": [
[
"dreta i esquerra|derecha e izquierda",
"els dos costats del teu cos|los dos lados de tu cuerpo"
],
[
"programar|programar",
"donar ordres a una màquina, una darrere l'altra|dar órdenes a una máquina, una detrás de otra"
],
[
"segur|seguro",
"que passa sempre|que pasa siempre"
],
[
"possible|posible",
"que pot passar o no|que puede pasar o no"
],
[
"impossible|imposible",
"que no passa mai|que no pasa nunca"
]
],
"mistakes": [
[
"«Em salto una fletxa per anar més de pressa.»|«Me salto una flecha para ir más rápido.»",
"El robot fa les ordres una a una. Si te'n saltes una, arriba a un altre lloc.|El robot hace las órdenes una a una. Si te saltas una, llega a otro sitio."
],
[
"«Treure una bola verda d'una bossa de vermelles és possible.»|«Sacar una bola verde de una bolsa de rojas es posible.»",
"Si no hi ha cap bola verda, és impossible. Mira sempre què hi ha a la bossa.|Si no hay ninguna bola verde, es imposible. Mira siempre qué hay en la bolsa."
],
[
"«Cada grup ratllat val 4.»|«Cada grupo tachado vale 4.»",
"La ratlleta que travessa també compta. Cada grup ratllat val 5.|La rayita que cruza también cuenta. Cada grupo tachado vale 5."
]
],
"recap": [
"Dreta i esquerra: els dos costats del cos.|Derecha e izquierda: los dos lados del cuerpo.",
"Cada fletxa: una casella, en ordre.|Cada flecha: una casilla, en orden.",
"Segur: sempre. Impossible: mai. Possible: potser.|Seguro: siempre. Imposible: nunca. Posible: quizás.",
"Ratlletes: grups de 5.|Rayitas: grupos de 5."
],
"tip": "Fes el camí del robot amb el dit, fletxa a fletxa. Si dubtes, posa't un gomet a la mà dreta.|Haz el camino del robot con el dedo, flecha a flecha. Si dudas, ponte una pegatina en la mano derecha."
},
"c1-8": {
"hook": "Cada dia resols problemes: quants plats cal posar a taula, quants cromos et falten...|Cada día resuelves problemas: cuántos platos poner en la mesa, cuántos cromos te faltan...",
"parts": [
{
"t": "Llegeix i entén|Lee y entiende",
"x": "Un <b>problema</b> és una història curta amb números. Llegeix-lo a poc a poc. Busca els números i la <b>pregunta</b>. Pensa què passa a la història.|Un <b>problema</b> es una historia corta con números. Léelo despacio. Busca los números y la <b>pregunta</b>. Piensa qué pasa en la historia.",
"ex": [
"La Mia té 6 cromos. Li'n donen 4.|Mía tiene 6 cromos. Le dan 4.",
"Números: 6 i 4|Números: 6 y 4",
"Pregunta: quants en té ara?|Pregunta: ¿cuántos tiene ahora?",
"6 + 4 = <span class=\"hl\">10</span> cromos|6 + 4 = <span class=\"hl\">10</span> cromos"
]
},
{
"t": "Quan sumem|Cuándo sumamos",
"x": "Sumem quan s'ajunta o se n'afegeix. Pistes: «em donen», «n'arriben», «en total». Al final n'hi ha més que al principi.|Sumamos cuando se junta o se añade. Pistas: «me dan», «llegan», «en total». Al final hay más que al principio.",
"ex": [
"Hi ha 8 ocells. N'arriben 5 més.|Hay 8 pájaros. Llegan 5 más.",
"N'arriben més: sumem|Llegan más: sumamos",
"8 + 5 = <span class=\"hl\">13</span> ocells|8 + 5 = <span class=\"hl\">13</span> pájaros"
]
},
{
"t": "Quan restem|Cuándo restamos",
"x": "Restem quan se'n treu, se'n perd o se'n regala. Pistes: «regala», «es menja», «en queden». Al final en queden menys.|Restamos cuando se quita, se pierde o se regala. Pistas: «regala», «se come», «quedan». Al final quedan menos.",
"ex": [
"En Pau té 12 pomes. En regala 5.|Pau tiene 12 manzanas. Regala 5.",
"Regalar és treure: restem|Regalar es quitar: restamos",
"12 − 5 = <span class=\"hl\">7</span> pomes|12 − 5 = <span class=\"hl\">7</span> manzanas"
]
},
{
"t": "Quants més?|¿Cuántos más?",
"x": "Per saber quants <b>més</b> té un que l'altre, restem. Treu el número petit del gran. El que queda és la diferència.|Para saber cuántos <b>más</b> tiene uno que otro, restamos. Quita el número pequeño del grande. Lo que queda es la diferencia.",
"ex": [
"L'Anna té 9 cromos. En Joan, 6.|Ana tiene 9 cromos. Juan, 6.",
"Quants més té l'Anna?|¿Cuántos más tiene Ana?",
"9 − 6 = <span class=\"hl\">3</span> cromos més|9 − 6 = <span class=\"hl\">3</span> cromos más"
]
}
],
"words": [
[
"problema|problema",
"una història curta amb números i una pregunta|una historia corta con números y una pregunta"
],
[
"dades|datos",
"els números que ens dona el problema|los números que nos da el problema"
],
[
"pregunta|pregunta",
"el que hem de descobrir|lo que tenemos que descubrir"
],
[
"diferència|diferencia",
"quant en té un més que l'altre|cuánto tiene uno más que otro"
]
],
"mistakes": [
[
"«Diu “quants més”, doncs sumo.»|«Dice “cuántos más”, así que sumo.»",
"Compte! «Quants més té?» es resol restant: 9 − 6 = 3.|¡Cuidado! «¿Cuántos más tiene?» se resuelve restando: 9 − 6 = 3."
],
[
"«En Pau té 12 pomes i en regala 5. Ara en té 17.»|«Pau tiene 12 manzanas y regala 5. Ahora tiene 17.»",
"Si regala, en té menys, no més. Resta: 12 − 5 = 7.|Si regala, tiene menos, no más. Resta: 12 − 5 = 7."
]
],
"recap": [
"Llegeix a poc a poc i busca la pregunta.|Lee despacio y busca la pregunta.",
"S'ajunta o se n'afegeix: sumem.|Se junta o se añade: sumamos.",
"Se'n treu o se'n perd: restem.|Se quita o se pierde: restamos.",
"«Quants més?»: també restem.|«¿Cuántos más?»: también restamos."
],
"tip": "Fes un dibuix amb boletes. Al final, pensa si el resultat té sentit.|Haz un dibujo con bolitas. Al final, piensa si el resultado tiene sentido."
},
"c2-1": {
"hook": "Quan comptes tots els cromos de l'àlbum, passes de 100. Amb les centenes arribes fins al 1.000.|Cuando cuentas todos los cromos del álbum, pasas de 100. Con las centenas llegas hasta el 1.000.",
"parts": [
{
"t": "Les centenes|Las centenas",
"x": "10 unitats fan 1 <b>desena</b>. 10 desenes fan 1 <b>centena</b>, que són 100. I 10 centenes fan 1.000.|10 unidades hacen 1 <b>decena</b>. 10 decenas hacen 1 <b>centena</b>, que son 100. Y 10 centenas hacen 1.000.",
"ex": [
"10 unitats = 1 desena = 10|10 unidades = 1 decena = 10",
"10 desenes = 1 centena = 100|10 decenas = 1 centena = 100",
"10 centenes = <span class=\"hl\">1.000</span>|10 centenas = <span class=\"hl\">1.000</span>"
]
},
{
"t": "Llegir i escriure|Leer y escribir",
"x": "Primer diem les centenes i després la resta. Si hi ha un <b>zero</b>, aquella part no es diu. Però el zero s'escriu igual.|Primero decimos las centenas y después el resto. Si hay un <b>cero</b>, esa parte no se dice. Pero el cero se escribe igual.",
"ex": [
"347 → tres-cents quaranta-set|347 → trescientos cuarenta y siete",
"508 → cinc-cents vuit|508 → quinientos ocho",
"Nou-cents noranta → <span class=\"hl\">990</span>|Novecientos noventa → <span class=\"hl\">990</span>"
]
},
{
"t": "Valor de posició|Valor de posición",
"x": "Cada xifra val segons el lloc on és. A 245, el 2 és a les centenes. Per això val 200, no 2.|Cada cifra vale según el lugar donde está. En 245, el 2 está en las centenas. Por eso vale 200, no 2.",
"ex": [
"245 = 2 C + 4 D + 5 U|245 = 2 C + 4 D + 5 U",
"245 = 200 + 40 + 5|245 = 200 + 40 + 5",
"El 2 val <span class=\"hl\">200</span>|El 2 vale <span class=\"hl\">200</span>"
]
},
{
"t": "Comparar i ordenar|Comparar y ordenar",
"x": "Mira primer les centenes. Si són iguals, mira les desenes. Si també, les unitats. El número següent és sempre un més.|Mira primero las centenas. Si son iguales, mira las decenas. Si también, las unidades. El número siguiente es siempre uno más.",
"ex": [
"312 o 298? 3 C és més que 2 C|¿312 o 298? 3 C es más que 2 C",
"312 > 298|312 > 298",
"Ordena 320, 298 i 312:|Ordena 320, 298 y 312:",
"<span class=\"hl\">298 &lt; 312 &lt; 320</span>|<span class=\"hl\">298 &lt; 312 &lt; 320</span>",
"Després del 399 ve el 400|Después del 399 viene el 400"
]
}
],
"words": [
[
"centena|centena",
"un grup de 100 unitats, o 10 desenes|un grupo de 100 unidades, o 10 decenas"
],
[
"desena|decena",
"un grup de 10 unitats|un grupo de 10 unidades"
],
[
"xifra|cifra",
"cada signe d'un número: 0, 1, 2… fins al 9|cada signo de un número: 0, 1, 2… hasta el 9"
],
[
"valor de posició|valor de posición",
"el que val una xifra pel lloc on és|lo que vale una cifra por el lugar donde está"
],
[
"més gran que (>)|mayor que (>)",
"el signe que obre la boca cap al número gran|el signo que abre la boca hacia el número grande"
]
],
"mistakes": [
[
"«Cinc-cents vuit s'escriu 5008.»|«Quinientos ocho se escribe 5008.»",
"Té 3 xifres: 5 centenes, 0 desenes i 8 unitats. S'escriu 508.|Tiene 3 cifras: 5 centenas, 0 decenas y 8 unidades. Se escribe 508."
],
[
"«298 és més gran que 312, perquè 9 és més gran.»|«298 es mayor que 312, porque 9 es mayor.»",
"Mira primer les centenes: 3 és més que 2. Per tant, 312 és més gran.|Mira primero las centenas: 3 es más que 2. Por tanto, 312 es mayor."
],
[
"«405 i 45 són el mateix.»|«405 y 45 son lo mismo.»",
"El zero guarda el lloc de les desenes. 405 són 4 centenes; 45, cap.|El cero guarda el sitio de las decenas. 405 son 4 centenas; 45, ninguna."
]
],
"recap": [
"10 desenes fan 1 centena: 100.|10 decenas hacen 1 centena: 100.",
"Cada xifra val segons el seu lloc.|Cada cifra vale según su lugar.",
"Per comparar, comença per les centenes.|Para comparar, empieza por las centenas.",
"El zero també compta: guarda un lloc.|El cero también cuenta: guarda un sitio."
],
"tip": "Els signes > i &lt; són una boca de cocodril. Sempre s'obre cap al número més gran.|Los signos > y &lt; son una boca de cocodrilo. Siempre se abre hacia el número mayor."
},
"c2-2": {
"hook": "Tens 38 cromos i te'n regalen 25. Quants en tens ara? Sumant ho saps en un moment.|Tienes 38 cromos y te regalan 25. ¿Cuántos tienes ahora? Sumando lo sabes en un momento.",
"parts": [
{
"t": "Sumar i restar de cap|Sumar y restar de cabeza",
"x": "Separa el número en desenes i unitats. Primer fes les desenes, després les unitats. És més fàcil que tot de cop.|Separa el número en decenas y unidades. Primero haz las decenas, después las unidades. Es más fácil que todo a la vez.",
"ex": [
"34 + 25: 30 + 20 = 50 i 4 + 5 = 9|34 + 25: 30 + 20 = 50 y 4 + 5 = 9",
"34 + 25 = <span class=\"hl\">59</span>|34 + 25 = <span class=\"hl\">59</span>",
"58 − 23: 58 − 20 = 38|58 − 23: 58 − 20 = 38",
"38 − 3 = <span class=\"hl\">35</span>|38 − 3 = <span class=\"hl\">35</span>"
]
},
{
"t": "Sumes portant-ne|Sumas llevando",
"x": "Suma primer les unitats. Si fan 10 o més, 10 unitats són 1 desena. Aquesta desena te la <b>portes</b> a la columna de les desenes.|Suma primero las unidades. Si hacen 10 o más, 10 unidades son 1 decena. Esa decena te la <b>llevas</b> a la columna de las decenas.",
"ex": [
"38 + 25|38 + 25",
"8 + 5 = 13: escric 3 i en porto 1|8 + 5 = 13: escribo 3 y me llevo 1",
"3 + 2 + 1 = 6 desenes|3 + 2 + 1 = 6 decenas",
"38 + 25 = <span class=\"hl\">63</span>|38 + 25 = <span class=\"hl\">63</span>"
]
},
{
"t": "Restes portant-ne|Restas llevando",
"x": "Si a dalt hi ha menys unitats que a baix, no pots restar. Desfés 1 desena de dalt: tens 10 unitats més.|Si arriba hay menos unidades que abajo, no puedes restar. Deshaz 1 decena de arriba: tienes 10 unidades más.",
"ex": [
"52 − 27: 2 − 7 no es pot|52 − 27: 2 − 7 no se puede",
"Desfem 1 desena: 12 − 7 = 5|Deshacemos 1 decena: 12 − 7 = 5",
"Queden 4 desenes: 4 − 2 = 2|Quedan 4 decenas: 4 − 2 = 2",
"52 − 27 = <span class=\"hl\">25</span>|52 − 27 = <span class=\"hl\">25</span>"
]
},
{
"t": "El número amagat|El número escondido",
"x": "Si falta un número en una suma, fes una resta. La resta desfà la suma. Després comprova-ho sumant.|Si falta un número en una suma, haz una resta. La resta deshace la suma. Después compruébalo sumando.",
"ex": [
"25 + ? = 40|25 + ? = 40",
"40 − 25 = 15|40 − 25 = 15",
"Comprova: 25 + <span class=\"hl\">15</span> = 40|Comprueba: 25 + <span class=\"hl\">15</span> = 40"
]
}
],
"words": [
[
"suma|suma",
"ajuntar quantitats per saber quantes n'hi ha|juntar cantidades para saber cuántas hay"
],
[
"resta|resta",
"treure una quantitat o buscar la diferència|quitar una cantidad o buscar la diferencia"
],
[
"portar-ne|llevarse",
"passar 10 unitats a la columna de les desenes|pasar 10 unidades a la columna de las decenas"
],
[
"resultat|resultado",
"el número que surt en fer el càlcul|el número que sale al hacer el cálculo"
]
],
"mistakes": [
[
"«38 + 25 = 53.»|«38 + 25 = 53.»",
"T'has oblidat la que et portaves. 3 + 2 + 1 = 6. Dona 63.|Te has olvidado de la que te llevabas. 3 + 2 + 1 = 6. Da 63."
],
[
"«52 − 27 = 35, perquè 7 − 2 = 5.»|«52 − 27 = 35, porque 7 − 2 = 5.»",
"No pots girar els números. Desfés una desena: 12 − 7 = 5. Dona 25.|No puedes girar los números. Deshaz una decena: 12 − 7 = 5. Da 25."
],
[
"«25 + ? = 40. Sumo: 65.»|«25 + ? = 40. Sumo: 65.»",
"65 és més que 40, no pot ser. Resta: 40 − 25 = 15.|65 es más que 40, no puede ser. Resta: 40 − 25 = 15."
]
],
"recap": [
"De cap: primer desenes, després unitats.|De cabeza: primero decenas, después unidades.",
"10 unitats fan 1 desena: te la portes.|10 unidades hacen 1 decena: te la llevas.",
"Si no pots restar, desfés una desena.|Si no puedes restar, deshaz una decena.",
"El número amagat es troba restant.|El número escondido se encuentra restando."
],
"tip": "Escriu petita, a dalt, la desena que et portes. Així no se t'oblida mai.|Escribe pequeña, arriba, la decena que te llevas. Así no se te olvida nunca."
},
"c2-3": {
"hook": "Tens 4 paquets amb 5 cromos cada un. Comptar-los un a un és lent. Multiplicar és molt més ràpid.|Tienes 4 paquetes con 5 cromos cada uno. Contarlos uno a uno es lento. Multiplicar es mucho más rápido.",
"parts": [
{
"t": "Grups iguals|Grupos iguales",
"x": "<b>Multiplicar</b> és sumar grups iguals. 3 × 4 vol dir 3 grups de 4. Es llegeix «3 per 4».|<b>Multiplicar</b> es sumar grupos iguales. 3 × 4 quiere decir 3 grupos de 4. Se lee «3 por 4».",
"ex": [
"3 bosses amb 4 pomes cada una|3 bolsas con 4 manzanas cada una",
"4 + 4 + 4 = 12|4 + 4 + 4 = 12",
"3 × 4 = <span class=\"hl\">12</span> pomes|3 × 4 = <span class=\"hl\">12</span> manzanas"
]
},
{
"t": "Files i columnes|Filas y columnas",
"x": "Posa les coses en files iguals. Files per columnes et dona el total. Si ho gires, surt el mateix.|Pon las cosas en filas iguales. Filas por columnas te da el total. Si lo giras, sale lo mismo.",
"ex": [
"2 files de 5 punts: 2 × 5 = 10|2 filas de 5 puntos: 2 × 5 = 10",
"5 files de 2 punts: 5 × 2 = 10|5 filas de 2 puntos: 5 × 2 = 10",
"El total és igual: <span class=\"hl\">10</span>|El total es igual: <span class=\"hl\">10</span>"
]
},
{
"t": "Taules del 2, del 5 i del 10|Tablas del 2, del 5 y del 10",
"x": "Cada taula salta sempre igual. La del 2 salta de 2 en 2. La del 5, de 5 en 5. La del 10, de 10 en 10.|Cada tabla salta siempre igual. La del 2 salta de 2 en 2. La del 5, de 5 en 5. La del 10, de 10 en 10.",
"ex": [
"Del 2: 2, 4, 6, 8, 10…|Del 2: 2, 4, 6, 8, 10…",
"Del 5: 5, 10, 15, 20, 25…|Del 5: 5, 10, 15, 20, 25…",
"Del 10: 10, 20, 30, 40…|Del 10: 10, 20, 30, 40…",
"5 × 6 = <span class=\"hl\">30</span>|5 × 6 = <span class=\"hl\">30</span>"
]
},
{
"t": "Dobles i meitats|Dobles y mitades",
"x": "El <b>doble</b> és tenir-ne dues vegades: multiplicar per 2. La <b>meitat</b> és partir en 2 parts iguals. L'una desfà l'altra.|El <b>doble</b> es tener dos veces: multiplicar por 2. La <b>mitad</b> es partir en 2 partes iguales. Una deshace la otra.",
"ex": [
"El doble de 7: 7 + 7 = 14|El doble de 7: 7 + 7 = 14",
"La meitat de 14 és 7|La mitad de 14 es 7",
"El doble de 25: 25 + 25 = <span class=\"hl\">50</span>|El doble de 25: 25 + 25 = <span class=\"hl\">50</span>"
]
}
],
"words": [
[
"multiplicar|multiplicar",
"sumar grups iguals de pressa|sumar grupos iguales deprisa"
],
[
"per (×)|por (×)",
"el signe de multiplicar|el signo de multiplicar"
],
[
"taula|tabla",
"els resultats de multiplicar un número per 1, 2, 3…|los resultados de multiplicar un número por 1, 2, 3…"
],
[
"doble|doble",
"dues vegades un número|dos veces un número"
],
[
"meitat|mitad",
"una de les dues parts iguals|una de las dos partes iguales"
]
],
"mistakes": [
[
"«3 × 4 = 7.»|«3 × 4 = 7.»",
"Això és sumar. 3 × 4 són 3 grups de 4: 4 + 4 + 4 = 12.|Eso es sumar. 3 × 4 son 3 grupos de 4: 4 + 4 + 4 = 12."
],
[
"«La meitat de 10 és 20.»|«La mitad de 10 es 20.»",
"20 és el doble. La meitat és més petita: 5 + 5 = 10, és 5.|20 es el doble. La mitad es más pequeña: 5 + 5 = 10, es 5."
],
[
"«4 × 5 i 5 × 4 donen diferent.»|«4 × 5 y 5 × 4 dan distinto.»",
"Donen igual, 20. És el mateix rectangle de punts, però girat.|Dan igual, 20. Es el mismo rectángulo de puntos, pero girado."
]
],
"recap": [
"Multiplicar és sumar grups iguals.|Multiplicar es sumar grupos iguales.",
"3 × 4 = 4 × 3: l'ordre no canvia el total.|3 × 4 = 4 × 3: el orden no cambia el total.",
"El doble és × 2; la meitat, partir en 2.|El doble es × 2; la mitad, partir en 2.",
"Taules del 2, del 5 i del 10: salts iguals.|Tablas del 2, del 5 y del 10: saltos iguales."
],
"tip": "La taula del 10 sempre acaba en 0. La del 5 acaba en 0 o en 5. Així veus de seguida si t'has equivocat.|La tabla del 10 siempre acaba en 0. La del 5 acaba en 0 o en 5. Así ves enseguida si te has equivocado."
},
"c2-4": {
"hook": "Els detectius busquen pistes i regles. Tu també: a les sèries, als números i a les balances.|Los detectives buscan pistas y reglas. Tú también: en las series, en los números y en las balanzas.",
"parts": [
{
"t": "Sèries que es repeteixen|Series que se repiten",
"x": "Una <b>sèrie</b> segueix una <b>regla</b>. Troba el tros que es repeteix. Així saps què ve després.|Una <b>serie</b> sigue una <b>regla</b>. Busca el trozo que se repite. Así sabes qué viene después.",
"ex": [
"vermell, blau, blau, vermell, blau, blau…|rojo, azul, azul, rojo, azul, azul…",
"Es repeteix: vermell, blau, blau|Se repite: rojo, azul, azul",
"Després ve: <span class=\"hl\">vermell</span>|Después viene: <span class=\"hl\">rojo</span>"
]
},
{
"t": "Parells i senars|Pares e impares",
"x": "Un número és <b>parell</b> si en pots fer parelles i no en sobra cap. Si en sobra un, és <b>senar</b>. Només cal mirar l'última xifra.|Un número es <b>par</b> si puedes hacer parejas y no sobra ninguno. Si sobra uno, es <b>impar</b>. Solo hay que mirar la última cifra.",
"ex": [
"6 caramels: 3 parelles, no en sobra cap|6 caramelos: 3 parejas, no sobra ninguno",
"7 caramels: 3 parelles i en sobra 1|7 caramelos: 3 parejas y sobra 1",
"Parells acaben en 0, 2, 4, 6 o 8|Los pares acaban en 0, 2, 4, 6 u 8",
"74 acaba en 4: és <span class=\"hl\">parell</span>|74 acaba en 4: es <span class=\"hl\">par</span>"
]
},
{
"t": "Sèries amb salts|Series con saltos",
"x": "Algunes sèries sumen o resten sempre el mateix. Mira quant salta d'un número a l'altre. Aquest salt és la regla.|Algunas series suman o restan siempre lo mismo. Mira cuánto salta de un número al otro. Ese salto es la regla.",
"ex": [
"3, 6, 9, 12, …|3, 6, 9, 12, …",
"Cada vegada suma 3|Cada vez suma 3",
"12 + 3 = <span class=\"hl\">15</span>|12 + 3 = <span class=\"hl\">15</span>",
"20, 18, 16, … resta 2 → 14|20, 18, 16, … resta 2 → 14"
]
},
{
"t": "Balances|Balanzas",
"x": "Una balança està <b>equilibrada</b> si els dos costats valen igual. Per trobar el que falta, iguala els dos costats.|Una balanza está <b>equilibrada</b> si los dos lados valen igual. Para encontrar lo que falta, iguala los dos lados.",
"ex": [
"Costat A: 3 + 4 = 7|Lado A: 3 + 4 = 7",
"Costat B: 5 + ?|Lado B: 5 + ?",
"5 + <span class=\"hl\">2</span> = 7: equilibrada|5 + <span class=\"hl\">2</span> = 7: equilibrada"
]
}
],
"words": [
[
"sèrie|serie",
"una fila de coses o números que segueix una regla|una fila de cosas o números que sigue una regla"
],
[
"regla|regla",
"el que es repeteix o el salt que fa la sèrie|lo que se repite o el salto que da la serie"
],
[
"parell|par",
"es pot fer parelles sense que en sobri cap|se pueden hacer parejas sin que sobre ninguno"
],
[
"senar|impar",
"en fer parelles, en sobra un|al hacer parejas, sobra uno"
],
[
"equilibrada|equilibrada",
"els dos costats de la balança valen igual|los dos lados de la balanza valen igual"
]
],
"mistakes": [
[
"«34 és senar, perquè comença per 3.»|«34 es impar, porque empieza por 3.»",
"Mira només l'última xifra. 34 acaba en 4: és parell.|Mira solo la última cifra. 34 acaba en 4: es par."
],
[
"«2, 4, 6, 8… després ve el 9.»|«2, 4, 6, 8… después viene el 9.»",
"La regla és sumar 2 sempre. 8 + 2 = 10.|La regla es sumar 2 siempre. 8 + 2 = 10."
],
[
"«El costat amb més coses pesa més.»|«El lado con más cosas pesa más.»",
"No compta quantes coses hi ha, sinó quant valen. 3 + 4 val igual que 7.|No cuenta cuántas cosas hay, sino cuánto valen. 3 + 4 vale igual que 7."
]
],
"recap": [
"Tota sèrie té una regla: troba-la.|Toda serie tiene una regla: encuéntrala.",
"Parell o senar? Mira l'última xifra.|¿Par o impar? Mira la última cifra.",
"Balança equilibrada: els dos costats valen igual.|Balanza equilibrada: los dos lados valen igual."
],
"tip": "A sota de cada salt escriu quant ha sumat: +3, +3, +3. La regla apareix sola.|Debajo de cada salto escribe cuánto ha sumado: +3, +3, +3. La regla aparece sola."
},
"c2-5": {
"hook": "Saber quina hora és, mesurar el teu llapis o pagar un gelat: tot això és mesurar.|Saber qué hora es, medir tu lápiz o pagar un helado: todo eso es medir.",
"parts": [
{
"t": "Hores i mitges|Horas y medias",
"x": "L'agulla petita marca l'hora. La gran marca els minuts. Si la gran és al 12, és en punt. Si és al 6, ha passat mitja hora.|La aguja pequeña marca la hora. La grande marca los minutos. Si la grande está en el 12, es en punto. Si está en el 6, ha pasado media hora.",
"ex": [
"Petita al 3, gran al 12 → 3:00|Pequeña en el 3, grande en el 12 → 3:00",
"Són les tres en punt|Son las tres en punto",
"Petita entre el 3 i el 4, gran al 6|Pequeña entre el 3 y el 4, grande en el 6",
"3:30 → <span class=\"hl\">dos quarts de quatre</span>|3:30 → <span class=\"hl\">las tres y media</span>"
]
},
{
"t": "El regle: cm i m|La regla: cm y m",
"x": "Posa l'objecte al <b>0</b> del regle. El número on acaba és la seva mida en centímetres. Per a coses llargues fem servir <b>metres</b>: 1 m són 100 cm.|Pon el objeto en el <b>0</b> de la regla. El número donde acaba es su medida en centímetros. Para cosas largas usamos <b>metros</b>: 1 m son 100 cm.",
"ex": [
"El llapis va del 0 al 12|El lápiz va del 0 al 12",
"Mesura <span class=\"hl\">12 cm</span>|Mide <span class=\"hl\">12 cm</span>",
"1 m = 100 cm|1 m = 100 cm",
"Una porta fa uns 2 m d'alt|Una puerta mide unos 2 m de alto"
]
},
{
"t": "Euros|Euros",
"x": "Pagem amb monedes i bitllets d'<b>euro</b>. Per comptar, comença pel que val més. Després suma els petits.|Pagamos con monedas y billetes de <b>euro</b>. Para contar, empieza por lo que vale más. Después suma los pequeños.",
"ex": [
"20 € + 10 € + 5 € + 2 €|20 € + 10 € + 5 € + 2 €",
"20 + 10 = 30|20 + 10 = 30",
"30 + 5 + 2 = <span class=\"hl\">37 €</span>|30 + 5 + 2 = <span class=\"hl\">37 €</span>"
]
},
{
"t": "Les figures planes|Las figuras planas",
"x": "Les figures es distingeixen pels <b>costats</b>. On s'ajunten dos costats hi ha un <b>vèrtex</b>. Té tants vèrtexs com costats.|Las figuras se distinguen por los <b>lados</b>. Donde se juntan dos lados hay un <b>vértice</b>. Tiene tantos vértices como lados.",
"ex": [
"Triangle: 3 costats|Triángulo: 3 lados",
"Quadrat i rectangle: 4 costats|Cuadrado y rectángulo: 4 lados",
"Pentàgon 5, hexàgon 6, octàgon 8|Pentágono 5, hexágono 6, octágono 8",
"Cercle: <span class=\"hl\">cap</span> costat recte|Círculo: <span class=\"hl\">ningún</span> lado recto"
]
}
],
"words": [
[
"en punt|en punto",
"l'agulla gran és al 12|la aguja grande está en el 12"
],
[
"mitja hora|media hora",
"30 minuts: l'agulla gran és al 6|30 minutos: la aguja grande está en el 6"
],
[
"centímetre (cm)|centímetro (cm)",
"una mida petita, com l'amplada d'una ungla|una medida pequeña, como el ancho de una uña"
],
[
"metre (m)|metro (m)",
"una mida llarga: 100 cm|una medida larga: 100 cm"
],
[
"vèrtex|vértice",
"la punta on s'ajunten dos costats|la punta donde se juntan dos lados"
]
],
"mistakes": [
[
"«Amb el regle començo per l'1.»|«Con la regla empiezo por el 1.»",
"Comença pel 0. Si comences per l'1, et surt 1 cm de més.|Empieza por el 0. Si empiezas por el 1, te sale 1 cm de más."
],
[
"«La gran és al 3, doncs són les 3.»|«La grande está en el 3, así que son las 3.»",
"L'hora la marca la petita. La gran marca els minuts.|La hora la marca la pequeña. La grande marca los minutos."
],
[
"«1 metre són 10 centímetres.»|«1 metro son 10 centímetros.»",
"1 metre són 100 centímetres. Un regle d'escola sol fer 30 cm.|1 metro son 100 centímetros. Una regla de colegio suele medir 30 cm."
]
],
"recap": [
"Petita: hora. Gran: minuts.|Pequeña: hora. Grande: minutos.",
"Mesura sempre des del 0.|Mide siempre desde el 0.",
"1 m = 100 cm.|1 m = 100 cm.",
"Per comptar diners, comença pel que val més.|Para contar dinero, empieza por lo que vale más."
],
"tip": "«Hora» és una paraula curta, com l'agulla petita. «Minuts» és llarga, com l'agulla gran.|«Hora» es una palabra corta, como la aguja pequeña. «Minutos» es larga, como la aguja grande."
},
"c2-6": {
"hook": "Per guiar un robot o dir a un amic on és el tresor, cal donar ordres clares.|Para guiar a un robot o decirle a un amigo dónde está el tesoro, hay que dar órdenes claras.",
"parts": [
{
"t": "Caselles i fletxes|Casillas y flechas",
"x": "Un robot fa les ordres una a una, en ordre. Cada fletxa és un pas d'una casella. Si canvies una fletxa, arriba a un altre lloc.|Un robot hace las órdenes una a una, en orden. Cada flecha es un paso de una casilla. Si cambias una flecha, llega a otro sitio.",
"ex": [
"El tresor és 2 caselles a la dreta|El tesoro está 2 casillas a la derecha",
"i després 1 casella amunt|y después 1 casilla arriba",
"Codi: <span class=\"hl\">→ → ↑</span>|Código: <span class=\"hl\">→ → ↑</span>"
]
},
{
"t": "Simetries|Simetrías",
"x": "Una figura és <b>simètrica</b> si, en plegar-la per una línia, les dues meitats coincideixen. Aquesta línia és l'<b>eix de simetria</b>. És com un mirall.|Una figura es <b>simétrica</b> si, al doblarla por una línea, las dos mitades coinciden. Esa línea es el <b>eje de simetría</b>. Es como un espejo.",
"ex": [
"Una papallona: ala esquerra = ala dreta|Una mariposa: ala izquierda = ala derecha",
"Plegada pel mig, coincideix|Doblada por el medio, coincide",
"És <span class=\"hl\">simètrica</span>|Es <span class=\"hl\">simétrica</span>",
"La lletra F no ho és|La letra F no lo es"
]
},
{
"t": "Cossos geomètrics|Cuerpos geométricos",
"x": "Els <b>cossos</b> no són plans: ocupen lloc i els pots agafar. Els que tenen una part corba poden rodolar.|Los <b>cuerpos</b> no son planos: ocupan sitio y los puedes coger. Los que tienen una parte curva pueden rodar.",
"ex": [
"Un dau és un cub: 6 cares quadrades|Un dado es un cubo: 6 caras cuadradas",
"Una pilota és una esfera: rodola|Una pelota es una esfera: rueda",
"Una llauna és un cilindre|Una lata es un cilindro",
"Un cucurull és un <span class=\"hl\">con</span>|Un cucurucho es un <span class=\"hl\">cono</span>"
]
},
{
"t": "Possibilitats i recomptes|Posibilidades y recuentos",
"x": "<b>Segur</b>: passarà sempre. <b>Possible</b>: pot passar o no. <b>Impossible</b>: no passarà mai. Per comptar dades, fes una ratlleta per cada cosa.|<b>Seguro</b>: pasará siempre. <b>Posible</b>: puede pasar o no. <b>Imposible</b>: no pasará nunca. Para contar datos, haz una rayita por cada cosa.",
"ex": [
"Dau: treure un 6 és possible|Dado: sacar un 6 es posible",
"Dau: treure un 7 és <span class=\"hl\">impossible</span>|Dado: sacar un 7 es <span class=\"hl\">imposible</span>",
"Vots: gats 5 ratlletes, gossos 3|Votos: gatos 5 rayitas, perros 3",
"Guanyen els gats: 5 > 3|Ganan los gatos: 5 > 3"
]
}
],
"words": [
[
"casella|casilla",
"cada quadrat d'una quadrícula|cada cuadrado de una cuadrícula"
],
[
"eix de simetria|eje de simetría",
"la línia que parteix una figura en dues meitats iguals|la línea que parte una figura en dos mitades iguales"
],
[
"cos geomètric|cuerpo geométrico",
"una figura que no és plana, com un cub|una figura que no es plana, como un cubo"
],
[
"possible|posible",
"que pot passar o no|que puede pasar o no"
],
[
"recompte|recuento",
"comptar quantes vegades surt cada cosa|contar cuántas veces sale cada cosa"
]
],
"mistakes": [
[
"«En un dau és possible treure un 7.»|«En un dado es posible sacar un 7.»",
"Un dau només té de l'1 al 6. Treure un 7 és impossible.|Un dado solo tiene del 1 al 6. Sacar un 7 es imposible."
],
[
"«Un cub i un quadrat són el mateix.»|«Un cubo y un cuadrado son lo mismo.»",
"El quadrat és pla. El cub és un cos: té 6 cares, i cada cara és un quadrat.|El cuadrado es plano. El cubo es un cuerpo: tiene 6 caras, y cada cara es un cuadrado."
],
[
"«Poso les fletxes en qualsevol ordre.»|«Pongo las flechas en cualquier orden.»",
"El robot les fa en ordre. Una fletxa canviada el porta a un altre lloc.|El robot las hace en orden. Una flecha cambiada lo lleva a otro sitio."
]
],
"recap": [
"Cada fletxa és un pas d'una casella.|Cada flecha es un paso de una casilla.",
"Simètrica: plegada, les meitats coincideixen.|Simétrica: doblada, las mitades coinciden.",
"Els cossos no són plans; les figures, sí.|Los cuerpos no son planos; las figuras, sí.",
"Segur, possible o impossible: pensa si pot passar.|Seguro, posible o imposible: piensa si puede pasar."
],
"tip": "Al recompte, fes grups de 5: quatre ratlletes i la cinquena les travessa. Així comptes de 5 en 5.|En el recuento, haz grupos de 5: cuatro rayitas y la quinta las cruza. Así cuentas de 5 en 5."
},
"c2-7": {
"hook": "A la vida hi ha problemes de debò: quants caramels queden, quant costa, quants en falten. Ara aprendràs a resoldre'ls.|En la vida hay problemas de verdad: cuántos caramelos quedan, cuánto cuesta, cuántos faltan. Ahora aprenderás a resolverlos.",
"parts": [
{
"t": "Problemes de sumar|Problemas de sumar",
"x": "Llegeix-lo dues vegades. Busca les <b>dades</b> i la <b>pregunta</b>. Si ajuntes o afegeixes coses, sumes.|Léelo dos veces. Busca los <b>datos</b> y la <b>pregunta</b>. Si juntas o añades cosas, sumas.",
"ex": [
"En Pol té 12 cromos i en compra 7|Pol tiene 12 cromos y compra 7",
"Pregunta: quants en té ara?|Pregunta: ¿cuántos tiene ahora?",
"Afegir → suma: 12 + 7 = 19|Añadir → suma: 12 + 7 = 19",
"En Pol té <span class=\"hl\">19 cromos</span>|Pol tiene <span class=\"hl\">19 cromos</span>"
]
},
{
"t": "Problemes de restar|Problemas de restar",
"x": "Si treus, perds o gastes, restes. També restes quan preguntes «quants més» o «quants falten». Vols saber la diferència.|Si quitas, pierdes o gastas, restas. También restas cuando preguntas «cuántos más» o «cuántos faltan». Quieres saber la diferencia.",
"ex": [
"Tinc 45 caramels i en menjo 20|Tengo 45 caramelos y me como 20",
"Treure → resta: 45 − 20 = 25|Quitar → resta: 45 − 20 = 25",
"Em queden <span class=\"hl\">25 caramels</span>|Me quedan <span class=\"hl\">25 caramelos</span>"
]
},
{
"t": "Problemes de multiplicar|Problemas de multiplicar",
"x": "Si hi ha diversos <b>grups iguals</b>, multiplica. Pensa: quants grups hi ha i quants n'hi ha a cada grup.|Si hay varios <b>grupos iguales</b>, multiplica. Piensa: cuántos grupos hay y cuántos hay en cada grupo.",
"ex": [
"3 capses amb 5 llapis cada una|3 cajas con 5 lápices cada una",
"Grups iguals → 3 × 5 = 15|Grupos iguales → 3 × 5 = 15",
"Hi ha <span class=\"hl\">15 llapis</span>|Hay <span class=\"hl\">15 lápices</span>"
]
},
{
"t": "Quin càlcul faig?|¿Qué cálculo hago?",
"x": "No et fixis només en una paraula: pensa què passa. Tria el càlcul, fes-lo i comprova'l. Respon amb una frase.|No te fijes solo en una palabra: piensa qué pasa. Elige el cálculo, hazlo y compruébalo. Responde con una frase.",
"ex": [
"L'Anna té 30 € i en Joan, 18 €|Ana tiene 30 € y Juan, 18 €",
"Quant més té l'Anna? → resta|¿Cuánto más tiene Ana? → resta",
"30 − 18 = 12|30 − 18 = 12",
"Comprova: 18 + 12 = 30|Comprueba: 18 + 12 = 30",
"L'Anna té <span class=\"hl\">12 €</span> més|Ana tiene <span class=\"hl\">12 €</span> más"
]
}
],
"words": [
[
"dades|datos",
"els números que et dona el problema|los números que te da el problema"
],
[
"pregunta|pregunta",
"el que has de descobrir|lo que tienes que descubrir"
],
[
"operació|operación",
"el càlcul que fas: +, − o ×|el cálculo que haces: +, − o ×"
],
[
"solució|solución",
"la resposta, amb una frase i la unitat|la respuesta, con una frase y la unidad"
]
],
"mistakes": [
[
"«Diu més, doncs sumo.»|«Dice más, así que sumo.»",
"«Quant més té?» es resol restant: busques la diferència.|«¿Cuánto más tiene?» se resuelve restando: buscas la diferencia."
],
[
"«La resposta és 15.»|«La respuesta es 15.»",
"15 què? Respon amb frase i unitat: «Hi ha 15 llapis.»|¿15 qué? Responde con frase y unidad: «Hay 15 lápices.»"
],
[
"«Sumo tots els números que veig.»|«Sumo todos los números que veo.»",
"Primer llegeix la pregunta. Després tria el càlcul que la respon.|Primero lee la pregunta. Después elige el cálculo que la responde."
]
],
"recap": [
"Llegeix dues vegades: dades i pregunta.|Lee dos veces: datos y pregunta.",
"Ajuntar: suma. Treure o diferència: resta.|Juntar: suma. Quitar o diferencia: resta.",
"Grups iguals: multiplica.|Grupos iguales: multiplica.",
"Comprova i respon amb una frase.|Comprueba y responde con una frase."
],
"tip": "Imagina el problema com una pel·lícula. Si veus que les coses s'ajunten, sumes; si marxen, restes.|Imagina el problema como una película. Si ves que las cosas se juntan, sumas; si se van, restas."
},
"c3-1": {
"hook": "El comptaquilòmetres d'una bici, els punts d'un videojoc o els alumnes d'una escola sovint passen de 1.000. Per llegir-los bé has de saber què val cada xifra.|El cuentakilómetros de una bici, los puntos de un videojuego o los alumnos de un colegio a menudo pasan de 1.000. Para leerlos bien tienes que saber qué vale cada cifra.",
"parts": [
{
"t": "Unitats de miler|Unidades de millar",
"x": "Quan ajuntem <b>10 centenes</b> tenim <b>1 unitat de miler</b> (UM), que val 1.000. Un número de quatre xifres té, de dreta a esquerra, unitats, desenes, centenes i unitats de miler. Cada xifra val diferent segons el lloc on és: és el <b>valor de posició</b>.|Cuando juntamos <b>10 centenas</b> tenemos <b>1 unidad de millar</b> (UM), que vale 1.000. Un número de cuatro cifras tiene, de derecha a izquierda, unidades, decenas, centenas y unidades de millar. Cada cifra vale diferente según el lugar donde está: es el <b>valor de posición</b>.",
"ex": [
"10 C = 1 UM = 1.000|10 C = 1 UM = 1.000",
"3.752 = 3 UM + 7 C + 5 D + 2 U|3.752 = 3 UM + 7 C + 5 D + 2 U",
"3.752 = 3.000 + 700 + 50 + 2|3.752 = 3.000 + 700 + 50 + 2",
"El 3 val <span class=\"hl\">3.000</span>, no 3|El 3 vale <span class=\"hl\">3.000</span>, no 3"
]
},
{
"t": "Llegir i escriure números|Leer y escribir números",
"x": "Per llegir un número gran, primer dius els milers i després la resta, com si fos un número de tres xifres. Per escriure'l, omple les quatre posicions: si una està buida, hi poses un <b>zero</b>, perquè si no, les altres xifres canvien de lloc.|Para leer un número grande, primero dices los millares y después el resto, como si fuera un número de tres cifras. Para escribirlo, rellena las cuatro posiciones: si una está vacía, pones un <b>cero</b>, porque si no, las otras cifras cambian de lugar.",
"ex": [
"4.608 → quatre mil / sis-cents vuit|4.608 → cuatro mil / seiscientos ocho",
"Tres mil vint: 3 UM, 0 C, 2 D, 0 U|Tres mil veinte: 3 UM, 0 C, 2 D, 0 U",
"S'escriu <span class=\"hl\">3.020</span>|Se escribe <span class=\"hl\">3.020</span>"
]
},
{
"t": "Comparar i ordenar|Comparar y ordenar",
"x": "Si un número té més xifres, és més gran. Si en tenen les mateixes, compara xifra a xifra començant per l'esquerra, perquè les xifres de l'esquerra són les que valen més. El signe <b>&gt;</b> vol dir «més gran que» i <b>&lt;</b>, «més petit que».|Si un número tiene más cifras, es mayor. Si tienen las mismas, compara cifra a cifra empezando por la izquierda, porque las cifras de la izquierda son las que valen más. El signo <b>&gt;</b> quiere decir «mayor que» y <b>&lt;</b>, «menor que».",
"ex": [
"5.382 o 5.328?|¿5.382 o 5.328?",
"UM: 5 = 5. C: 3 = 3|UM: 5 = 5. C: 3 = 3",
"D: 8 és més gran que 2|D: 8 es mayor que 2",
"<span class=\"hl\">5.382 &gt; 5.328</span>|<span class=\"hl\">5.382 &gt; 5.328</span>"
]
},
{
"t": "Arrodonir|Redondear",
"x": "Arrodonir és canviar un número pel número «rodó» més proper, per calcular més fàcil. Mira només la xifra de la dreta del lloc on arrodoneixes: si és 0, 1, 2, 3 o 4, baixes; si és 5, 6, 7, 8 o 9, puges.|Redondear es cambiar un número por el número «redondo» más cercano, para calcular más fácil. Mira solo la cifra de la derecha del lugar donde redondeas: si es 0, 1, 2, 3 o 4, bajas; si es 5, 6, 7, 8 o 9, subes.",
"ex": [
"2.748 a la desena: mira les U (8)|2.748 a la decena: mira las U (8)",
"8 és 5 o més → puja: <span class=\"hl\">2.750</span>|8 es 5 o más → sube: <span class=\"hl\">2.750</span>",
"2.748 a la centena: mira les D (4)|2.748 a la centena: mira las D (4)",
"4 és menys de 5 → baixa: <span class=\"hl\">2.700</span>|4 es menos de 5 → baja: <span class=\"hl\">2.700</span>"
]
}
],
"words": [
[
"unitat de miler|unidad de millar",
"1.000 unitats, o 10 centenes|1.000 unidades, o 10 centenas"
],
[
"valor de posició|valor de posición",
"el que val una xifra segons el lloc on és|lo que vale una cifra según el lugar donde está"
],
[
"descompondre|descomponer",
"separar un número en milers, centenes, desenes i unitats|separar un número en millares, centenas, decenas y unidades"
],
[
"arrodonir|redondear",
"canviar un número pel número rodó més proper|cambiar un número por el número redondo más cercano"
]
],
"mistakes": [
[
"«Tres mil vint s'escriu 320.»|«Tres mil veinte se escribe 320.»",
"Falten zeros. Omple les quatre posicions: 3 UM, 0 C, 2 D, 0 U → 3.020.|Faltan ceros. Rellena las cuatro posiciones: 3 UM, 0 C, 2 D, 0 U → 3.020."
],
[
"«999 és més gran que 1.000 perquè té tres nous.»|«999 es mayor que 1.000 porque tiene tres nueves.»",
"Primer compta les xifres: 1.000 en té quatre i 999 només tres. 1.000 és més gran.|Primero cuenta las cifras: 1.000 tiene cuatro y 999 solo tres. 1.000 es mayor."
],
[
"«2.748 a la centena és 2.800, perquè acaba en 8.»|«2.748 a la centena es 2.800, porque acaba en 8.»",
"A la centena mira les desenes, no les unitats. Hi ha un 4, per tant baixa: 2.700.|A la centena mira las decenas, no las unidades. Hay un 4, así que baja: 2.700."
]
],
"recap": [
"10 centenes = 1 unitat de miler = 1.000.|10 centenas = 1 unidad de millar = 1.000.",
"Una posició buida porta un zero.|Una posición vacía lleva un cero.",
"Per comparar, comença per l'esquerra.|Para comparar, empieza por la izquierda.",
"Per arrodonir, mira la xifra de la dreta: 5 o més, puja.|Para redondear, mira la cifra de la derecha: 5 o más, sube."
],
"tip": "Dibuixa quatre caselles, UM C D U, i posa-hi una xifra a cada una. Si una casella queda buida, un zero!|Dibuja cuatro casillas, UM C D U, y pon una cifra en cada una. Si una casilla queda vacía, ¡un cero!"
},
"c3-2": {
"hook": "Quan sumes el que costen dues coses a la botiga o calcules quants punts li falten al teu equip per guanyar, fas sumes i restes.|Cuando sumas lo que cuestan dos cosas en la tienda o calculas cuántos puntos le faltan a tu equipo para ganar, haces sumas y restas.",
"parts": [
{
"t": "Sumes portant-ne|Sumas llevando",
"x": "Posa els números en columna, unitats sota unitats, i suma començant per la dreta. Si una columna fa 10 o més, 10 unitats formen <b>1 desena</b>: escrius les unitats i te'n portes 1 a la columna següent. Passa el mateix de desenes a centenes.|Pon los números en columna, unidades debajo de unidades, y suma empezando por la derecha. Si una columna da 10 o más, 10 unidades forman <b>1 decena</b>: escribes las unidades y te llevas 1 a la columna siguiente. Pasa lo mismo de decenas a centenas.",
"ex": [
"478 + 256|478 + 256",
"U: 8 + 6 = 14 → escric 4, en porto 1|U: 8 + 6 = 14 → escribo 4, me llevo 1",
"D: 7 + 5 + 1 = 13 → escric 3, en porto 1|D: 7 + 5 + 1 = 13 → escribo 3, me llevo 1",
"C: 4 + 2 + 1 = 7|C: 4 + 2 + 1 = 7",
"478 + 256 = <span class=\"hl\">734</span>|478 + 256 = <span class=\"hl\">734</span>"
]
},
{
"t": "Restes portant-ne|Restas llevando",
"x": "Resta columna per columna des de les unitats. Si la xifra de dalt és més petita, canvia <b>1 desena per 10 unitats</b>: el número és el mateix, només l'has escrit d'una altra manera. Al final, comprova-ho sumant el resultat i el número que has tret.|Resta columna por columna desde las unidades. Si la cifra de arriba es más pequeña, cambia <b>1 decena por 10 unidades</b>: el número es el mismo, solo lo has escrito de otra manera. Al final, compruébalo sumando el resultado y el número que has quitado.",
"ex": [
"532 − 178|532 − 178",
"U: canvio 1 D → 12 − 8 = 4|U: cambio 1 D → 12 − 8 = 4",
"D: queden 2, canvio 1 C → 12 − 7 = 5|D: quedan 2, cambio 1 C → 12 − 7 = 5",
"C: queden 4 → 4 − 1 = 3|C: quedan 4 → 4 − 1 = 3",
"532 − 178 = <span class=\"hl\">354</span> (354 + 178 = 532)|532 − 178 = <span class=\"hl\">354</span> (354 + 178 = 532)"
]
},
{
"t": "Càlcul mental i estimacions|Cálculo mental y estimaciones",
"x": "Per calcular de cap, canvia un número per un de <b>rodó</b> que hi sigui a prop i després arregla la diferència. Per <b>estimar</b>, arrodoneix els dos números: no surt el resultat exacte, però saps si el teu càlcul té sentit.|Para calcular de cabeza, cambia un número por uno <b>redondo</b> que esté cerca y después arregla la diferencia. Para <b>estimar</b>, redondea los dos números: no sale el resultado exacto, pero sabes si tu cálculo tiene sentido.",
"ex": [
"47 + 29 → 47 + 30 = 77|47 + 29 → 47 + 30 = 77",
"He sumat 1 de més: 77 − 1 = <span class=\"hl\">76</span>|He sumado 1 de más: 77 − 1 = <span class=\"hl\">76</span>",
"Estimo 398 + 205 → 400 + 200 = 600|Estimo 398 + 205 → 400 + 200 = 600",
"El resultat exacte, 603, és a prop|El resultado exacto, 603, está cerca"
]
},
{
"t": "El número amagat|El número escondido",
"x": "Si falta un número en una suma o una resta, fes l'<b>operació contrària</b>. La suma i la resta es desfan l'una a l'altra: el que una afegeix, l'altra ho treu.|Si falta un número en una suma o una resta, haz la <b>operación contraria</b>. La suma y la resta se deshacen la una a la otra: lo que una añade, la otra lo quita.",
"ex": [
"25 + ? = 40|25 + ? = 40",
"Quant falta de 25 a 40? 40 − 25 = 15|¿Cuánto falta de 25 a 40? 40 − 25 = 15",
"Comprova: 25 + 15 = 40|Comprueba: 25 + 15 = 40",
"? = <span class=\"hl\">15</span>|? = <span class=\"hl\">15</span>"
]
}
],
"words": [
[
"portar-ne|llevarse",
"passar 1 desena (o centena) a la columna següent|pasar 1 decena (o centena) a la columna siguiente"
],
[
"suma|suma",
"el resultat d'ajuntar números|el resultado de juntar números"
],
[
"diferència|diferencia",
"el resultat d'una resta|el resultado de una resta"
],
[
"estimar|estimar",
"calcular més o menys, amb números rodons|calcular más o menos, con números redondos"
]
],
"mistakes": [
[
"«8 + 6 = 14, doncs escric 14 a les unitats.»|«8 + 6 = 14, pues escribo 14 en las unidades.»",
"A cada columna només hi cap una xifra. Escriu el 4 i porta l'1 a les desenes.|En cada columna solo cabe una cifra. Escribe el 4 y lleva el 1 a las decenas."
],
[
"«2 − 8 no es pot, doncs faig 8 − 2 = 6.»|«2 − 8 no se puede, pues hago 8 − 2 = 6.»",
"No pots girar els números. Canvia 1 desena per 10 unitats i fes 12 − 8 = 4.|No puedes girar los números. Cambia 1 decena por 10 unidades y haz 12 − 8 = 4."
],
[
"«25 + ? = 40, doncs sumo: 25 + 40 = 65.»|«25 + ? = 40, pues sumo: 25 + 40 = 65.»",
"Busques el que falta per arribar a 40: resta 40 − 25 = 15.|Buscas lo que falta para llegar a 40: resta 40 − 25 = 15."
]
],
"recap": [
"Comença sempre per les unitats.|Empieza siempre por las unidades.",
"10 unitats = 1 desena: per això te'n portes una.|10 unidades = 1 decena: por eso te llevas una.",
"La resta es comprova sumant.|La resta se comprueba sumando.",
"Arrodonir t'ajuda a calcular de cap i a estimar.|Redondear te ayuda a calcular de cabeza y a estimar."
],
"tip": "Abans de fer el càlcul, estima el resultat amb números rodons. Si al final et surt una cosa molt diferent, revisa-ho.|Antes de hacer el cálculo, estima el resultado con números redondos. Si al final te sale algo muy diferente, revísalo."
},
"c3-3": {
"hook": "Si un paquet porta 6 iogurts i en compres 4, no cal comptar-los un a un: multiplicant ho saps de seguida.|Si un paquete trae 6 yogures y compras 4, no hace falta contarlos uno a uno: multiplicando lo sabes enseguida.",
"parts": [
{
"t": "Què és multiplicar|Qué es multiplicar",
"x": "Multiplicar és sumar el <b>mateix número</b> diverses vegades. Ho pots veure com files i columnes: 3 files de 5 cadires són 3 × 5. És una manera ràpida d'escriure una suma llarga.|Multiplicar es sumar el <b>mismo número</b> varias veces. Lo puedes ver como filas y columnas: 3 filas de 5 sillas son 3 × 5. Es una manera rápida de escribir una suma larga.",
"ex": [
"3 files de 5 cadires|3 filas de 5 sillas",
"5 + 5 + 5 = 15|5 + 5 + 5 = 15",
"3 × 5 = <span class=\"hl\">15</span> cadires|3 × 5 = <span class=\"hl\">15</span> sillas"
]
},
{
"t": "Taules del 2, 5 i 10|Tablas del 2, 5 y 10",
"x": "Per 2 és fer el <b>doble</b>. Els resultats de la taula del 5 acaben en 0 o en 5, i els de la del 10 acaben en 0. A més, l'ordre no canvia el resultat: 3 × 8 és igual que 8 × 3, perquè les files i les columnes són les mateixes, només girades.|Por 2 es hacer el <b>doble</b>. Los resultados de la tabla del 5 acaban en 0 o en 5, y los de la del 10 acaban en 0. Además, el orden no cambia el resultado: 3 × 8 es igual que 8 × 3, porque las filas y las columnas son las mismas, solo giradas.",
"ex": [
"7 × 2 = 7 + 7 = 14|7 × 2 = 7 + 7 = 14",
"7 × 5 = 35 (acaba en 5)|7 × 5 = 35 (acaba en 5)",
"7 × 10 = 70 (acaba en 0)|7 × 10 = 70 (acaba en 0)",
"3 × 8 = 8 × 3 = <span class=\"hl\">24</span>|3 × 8 = 8 × 3 = <span class=\"hl\">24</span>"
]
},
{
"t": "Trucs per a les altres taules|Trucos para las otras tablas",
"x": "Per 4 és el doble del doble. Per 6 és per 5 i un cop més. Per 9 és per 10 i un cop menys. Si falta un número, com a ? × 6 = 42, busca a la taula del 6 quin fa 42: és el 7.|Por 4 es el doble del doble. Por 6 es por 5 y una vez más. Por 9 es por 10 y una vez menos. Si falta un número, como en ? × 6 = 42, busca en la tabla del 6 cuál da 42: es el 7.",
"ex": [
"6 × 4: doble 12, doble <span class=\"hl\">24</span>|6 × 4: doble 12, doble <span class=\"hl\">24</span>",
"8 × 6 = 8 × 5 + 8 = 40 + 8 = <span class=\"hl\">48</span>|8 × 6 = 8 × 5 + 8 = 40 + 8 = <span class=\"hl\">48</span>",
"7 × 9 = 7 × 10 − 7 = 70 − 7 = <span class=\"hl\">63</span>|7 × 9 = 7 × 10 − 7 = 70 − 7 = <span class=\"hl\">63</span>"
]
},
{
"t": "Per 10 i per 100|Por 10 y por 100",
"x": "Quan multipliques per 10, cada unitat es converteix en una desena: per això el número s'escriu amb <b>un zero</b> al final. Per 100, cada unitat es converteix en una centena i hi afegeixes <b>dos zeros</b>.|Cuando multiplicas por 10, cada unidad se convierte en una decena: por eso el número se escribe con <b>un cero</b> al final. Por 100, cada unidad se convierte en una centena y añades <b>dos ceros</b>.",
"ex": [
"6 × 10 = 60|6 × 10 = 60",
"6 × 100 = 600|6 × 100 = 600",
"25 × 10 = 250|25 × 10 = 250",
"25 × 100 = <span class=\"hl\">2.500</span>|25 × 100 = <span class=\"hl\">2.500</span>"
]
}
],
"words": [
[
"multiplicació|multiplicación",
"una suma del mateix número repetit|una suma del mismo número repetido"
],
[
"factors|factores",
"els números que es multipliquen|los números que se multiplican"
],
[
"producte|producto",
"el resultat d'una multiplicació|el resultado de una multiplicación"
],
[
"doble|doble",
"dues vegades un número: multiplicar per 2|dos veces un número: multiplicar por 2"
]
],
"mistakes": [
[
"«4 × 3 = 7.»|«4 × 3 = 7.»",
"Això és sumar. 4 × 3 vol dir 4 vegades el 3: 3 + 3 + 3 + 3 = 12.|Eso es sumar. 4 × 3 quiere decir 4 veces el 3: 3 + 3 + 3 + 3 = 12."
],
[
"«25 × 10 = 2.500.»|«25 × 10 = 2.500.»",
"Per 10 s'afegeix un sol zero: 250. Dos zeros és per 100.|Por 10 se añade un solo cero: 250. Dos ceros es por 100."
],
[
"«Me n'he d'aprendre 100 de memòria.»|«Me tengo que aprender 100 de memoria.»",
"Com que l'ordre no importa, si saps 3 × 7 ja saps 7 × 3. Són gairebé la meitat.|Como el orden no importa, si sabes 3 × 7 ya sabes 7 × 3. Son casi la mitad."
]
],
"recap": [
"Multiplicar és sumar el mateix número moltes vegades.|Multiplicar es sumar el mismo número muchas veces.",
"L'ordre no canvia el resultat: 3 × 8 = 8 × 3.|El orden no cambia el resultado: 3 × 8 = 8 × 3.",
"Per 4 és el doble del doble; per 9, per 10 menys un cop.|Por 4 es el doble del doble; por 9, por 10 menos una vez.",
"Per 10, un zero. Per 100, dos zeros.|Por 10, un cero. Por 100, dos ceros."
],
"tip": "Truc de la taula del 9: les xifres del resultat sumen 9. A 9 × 6 = 54, 5 + 4 = 9. Si no et surt 9, revisa-ho.|Truco de la tabla del 9: las cifras del resultado suman 9. En 9 × 6 = 54, 5 + 4 = 9. Si no te sale 9, revísalo."
},
"c3-4": {
"hook": "Quan repartiu els cromos entre amics perquè ningú en tingui més, o poseu ous en capses, esteu dividint.|Cuando repartís los cromos entre amigos para que nadie tenga más, o ponéis huevos en cajas, estáis dividiendo.",
"parts": [
{
"t": "Repartir a parts iguals|Repartir a partes iguales",
"x": "<b>Dividir</b> és repartir una quantitat en grups iguals. El signe és ÷. El número que repartim és el <b>dividend</b>, entre quants repartim és el <b>divisor</b> i el que toca a cada un és el <b>quocient</b>.|<b>Dividir</b> es repartir una cantidad en grupos iguales. El signo es ÷. El número que repartimos es el <b>dividendo</b>, entre cuántos repartimos es el <b>divisor</b> y lo que toca a cada uno es el <b>cociente</b>.",
"ex": [
"12 caramels entre 3 amics|12 caramelos entre 3 amigos",
"Dono 1 a cadascú fins que s'acaben|Doy 1 a cada uno hasta que se acaban",
"12 ÷ 3 = <span class=\"hl\">4</span> caramels cadascú|12 ÷ 3 = <span class=\"hl\">4</span> caramelos cada uno"
]
},
{
"t": "Dividir amb les taules|Dividir con las tablas",
"x": "La divisió és l'<b>operació contrària</b> de la multiplicació. Per fer 24 ÷ 6, pregunta't: quin número multiplicat per 6 fa 24? Per això, si saps les taules, saps dividir.|La división es la <b>operación contraria</b> de la multiplicación. Para hacer 24 ÷ 6, pregúntate: ¿qué número multiplicado por 6 da 24? Por eso, si sabes las tablas, sabes dividir.",
"ex": [
"24 ÷ 6 = ?|24 ÷ 6 = ?",
"Quin número × 6 fa 24?|¿Qué número × 6 da 24?",
"4 × 6 = 24|4 × 6 = 24",
"24 ÷ 6 = <span class=\"hl\">4</span>|24 ÷ 6 = <span class=\"hl\">4</span>"
]
},
{
"t": "Quan en sobra: el residu|Cuando sobra: el resto",
"x": "De vegades el repartiment no és exacte i en sobren alguns: és el <b>residu</b>. Busca a la taula el número més gran que no et passi i resta. El residu sempre és <b>més petit que el divisor</b>; si no, encara en podries repartir més.|A veces el reparto no es exacto y sobran algunos: es el <b>resto</b>. Busca en la tabla el número más grande que no te pase y resta. El resto siempre es <b>menor que el divisor</b>; si no, todavía podrías repartir más.",
"ex": [
"14 ÷ 4 = ?|14 ÷ 4 = ?",
"4 × 3 = 12 (4 × 4 = 16, massa)|4 × 3 = 12 (4 × 4 = 16, demasiado)",
"14 − 12 = 2|14 − 12 = 2",
"14 ÷ 4 = <span class=\"hl\">3</span> i en sobren <span class=\"hl\">2</span>|14 ÷ 4 = <span class=\"hl\">3</span> y sobran <span class=\"hl\">2</span>"
]
},
{
"t": "Comprovar una divisió|Comprobar una división",
"x": "Com que multiplicar i dividir són contraris, pots comprovar qualsevol divisió: multiplica el quocient pel divisor i suma-hi el residu. Si et torna a sortir el dividend, està bé.|Como multiplicar y dividir son contrarios, puedes comprobar cualquier división: multiplica el cociente por el divisor y súmale el resto. Si te vuelve a salir el dividendo, está bien.",
"ex": [
"23 ÷ 5 = 4 i en sobren 3|23 ÷ 5 = 4 y sobran 3",
"Comprovo: 4 × 5 = 20|Compruebo: 4 × 5 = 20",
"20 + 3 = <span class=\"hl\">23</span> → està bé|20 + 3 = <span class=\"hl\">23</span> → está bien"
]
}
],
"words": [
[
"dividend|dividendo",
"el número que repartim|el número que repartimos"
],
[
"divisor|divisor",
"entre quants repartim|entre cuántos repartimos"
],
[
"quocient|cociente",
"el que toca a cada grup|lo que toca a cada grupo"
],
[
"residu|resto",
"el que sobra quan el repartiment no és exacte|lo que sobra cuando el reparto no es exacto"
]
],
"mistakes": [
[
"«14 ÷ 4 = 2 i en sobren 6.»|«14 ÷ 4 = 2 y sobran 6.»",
"Si en sobren 6, encara pots fer un altre grup de 4. El residu ha de ser més petit que 4: 3 i en sobren 2.|Si sobran 6, todavía puedes hacer otro grupo de 4. El resto tiene que ser menor que 4: 3 y sobran 2."
],
[
"«24 ÷ 6 és el mateix que 6 ÷ 24.»|«24 ÷ 6 es lo mismo que 6 ÷ 24.»",
"A la divisió l'ordre sí que importa. Repartir 24 entre 6 no és el mateix que repartir 6 entre 24.|En la división el orden sí importa. Repartir 24 entre 6 no es lo mismo que repartir 6 entre 24."
]
],
"recap": [
"Dividir és repartir a parts iguals.|Dividir es repartir a partes iguales.",
"Per dividir, pensa en la taula: quin número × 6 fa 24?|Para dividir, piensa en la tabla: ¿qué número × 6 da 24?",
"El residu sempre és més petit que el divisor.|El resto siempre es menor que el divisor.",
"Comprova: quocient × divisor + residu = dividend.|Comprueba: cociente × divisor + resto = dividendo."
],
"tip": "Cada divisió amaga una multiplicació. Quan vegis 35 ÷ 7, pensa «7 per quant fa 35?» i ja ho tens: 5.|Cada división esconde una multiplicación. Cuando veas 35 ÷ 7, piensa «¿7 por cuánto da 35?» y ya lo tienes: 5."
},
"c3-5": {
"hook": "Quan repartiu una pizza a casa o parteixes una xocolatina amb un amic, estàs fent servir fraccions.|Cuando repartís una pizza en casa o partes una chocolatina con un amigo, estás usando fracciones.",
"parts": [
{
"t": "Parts iguals|Partes iguales",
"x": "Una <b>fracció</b> és un tros d'una cosa que s'ha partit en <b>parts iguals</b>. Si les parts no són iguals, no és una fracció.|Una <b>fracción</b> es un trozo de algo que se ha partido en <b>partes iguales</b>. Si las partes no son iguales, no es una fracción.",
"ex": [
"Una pizza partida en 4 trossos iguals|Una pizza partida en 4 trozos iguales",
"Cada tros és <span class=\"hl\">1/4</span> (un quart)|Cada trozo es <span class=\"hl\">1/4</span> (un cuarto)"
]
},
{
"t": "Llegir una fracció|Leer una fracción",
"x": "El número de sota, el <b>denominador</b>, diu en quantes parts es parteix. El de dalt, el <b>numerador</b>, diu quantes parts agafem. Per llegir-la, diem el numerador i després el nom de les parts: mitjos, terços, quarts, cinquens, sisens, vuitens, desens…|El número de abajo, el <b>denominador</b>, dice en cuántas partes se parte. El de arriba, el <b>numerador</b>, dice cuántas partes cogemos. Para leerla, decimos el numerador y después el nombre de las partes: medios, tercios, cuartos, quintos, sextos, octavos, décimos…",
"ex": [
"3/5 → partim en 5, agafem 3|3/5 → partimos en 5, cogemos 3",
"Es llegeix: <span class=\"hl\">tres cinquens</span>|Se lee: <span class=\"hl\">tres quintos</span>",
"1/2 es llegeix: un mig|1/2 se lee: un medio"
]
},
{
"t": "Meitats, terços i quarts|Mitades, tercios y cuartos",
"x": "Com més parts fem, més petit és cada tros. Per això 1/4 és més petit que 1/2: la mateixa pizza s'ha repartit entre més gent.|Cuantas más partes hacemos, más pequeño es cada trozo. Por eso 1/4 es más pequeño que 1/2: la misma pizza se ha repartido entre más gente.",
"ex": [
"1/2 → 2 parts: meitat|1/2 → 2 partes: mitad",
"1/3 → 3 parts: terç|1/3 → 3 partes: tercio",
"1/4 → 4 parts: quart|1/4 → 4 partes: cuarto",
"<span class=\"hl\">1/2 &gt; 1/3 &gt; 1/4</span>|<span class=\"hl\">1/2 &gt; 1/3 &gt; 1/4</span>"
]
},
{
"t": "La fracció d'un número|La fracción de un número",
"x": "Per calcular la meitat d'un número el dividim entre 2. Per calcular 1/3, entre 3, i per calcular 1/4, entre 4. És repartir a parts iguals i quedar-te una part.|Para calcular la mitad de un número lo dividimos entre 2. Para calcular 1/3, entre 3, y para calcular 1/4, entre 4. Es repartir a partes iguales y quedarte una parte.",
"ex": [
"La meitat de 12 caramels|La mitad de 12 caramelos",
"12 ÷ 2 = <span class=\"hl\">6</span> caramels|12 ÷ 2 = <span class=\"hl\">6</span> caramelos",
"Un quart de 20: 20 ÷ 4 = <span class=\"hl\">5</span>|Un cuarto de 20: 20 ÷ 4 = <span class=\"hl\">5</span>"
]
}
],
"words": [
[
"fracció|fracción",
"un tros d'una cosa partida en parts iguals|un trozo de algo partido en partes iguales"
],
[
"numerador|numerador",
"el número de dalt: les parts que agafem|el número de arriba: las partes que cogemos"
],
[
"denominador|denominador",
"el número de sota: en quantes parts partim|el número de abajo: en cuántas partes partimos"
],
[
"meitat|mitad",
"una de dues parts iguals: 1/2|una de dos partes iguales: 1/2"
]
],
"mistakes": [
[
"«1/4 és més gran que 1/2 perquè 4 és més gran que 2.»|«1/4 es mayor que 1/2 porque 4 es mayor que 2.»",
"Al revés: si partim en més trossos, cada tros és més petit. 1/2 és més gran.|Al revés: si partimos en más trozos, cada trozo es más pequeño. 1/2 es mayor."
],
[
"Comptar trossos que no són iguals.|Contar trozos que no son iguales.",
"Només és una fracció si totes les parts són iguals.|Solo es una fracción si todas las partes son iguales."
],
[
"«La meitat de 12 és 24.»|«La mitad de 12 es 24.»",
"Això és el doble. La meitat és repartir en 2: 12 ÷ 2 = 6.|Eso es el doble. La mitad es repartir en 2: 12 ÷ 2 = 6."
]
],
"recap": [
"Fracció = parts iguals.|Fracción = partes iguales.",
"Sota: en quantes parts. Dalt: quantes n'agafem.|Abajo: en cuántas partes. Arriba: cuántas cogemos.",
"Més parts → trossos més petits.|Más partes → trozos más pequeños.",
"Un quart de 20 és 20 ÷ 4 = 5.|Un cuarto de 20 es 20 ÷ 4 = 5."
],
"tip": "Dibuixa-ho! Un rectangle partit en parts iguals t'ajuda a veure qualsevol fracció.|¡Dibújalo! Un rectángulo partido en partes iguales te ayuda a ver cualquier fracción."
},
"c3-6": {
"hook": "Saber a quina hora comença l'entrenament, quant pesa una bossa de pomes o quant et tornen a la botiga: tot això és mesurar.|Saber a qué hora empieza el entrenamiento, cuánto pesa una bolsa de manzanas o cuánto te devuelven en la tienda: todo eso es medir.",
"parts": [
{
"t": "Llegir el rellotge|Leer el reloj",
"x": "L'agulla petita marca les <b>hores</b> i la gran, els <b>minuts</b>. Una hora té 60 minuts i l'agulla gran fa una volta sencera. Com que hi ha 12 números, de número a número passen <b>5 minuts</b>: per això comptem de 5 en 5.|La aguja pequeña marca las <b>horas</b> y la grande, los <b>minutos</b>. Una hora tiene 60 minutos y la aguja grande da una vuelta entera. Como hay 12 números, de número a número pasan <b>5 minutos</b>: por eso contamos de 5 en 5.",
"ex": [
"Agulla petita: ha passat el 3|Aguja pequeña: ha pasado el 3",
"Agulla gran al 4: 4 × 5 = 20 minuts|Aguja grande en el 4: 4 × 5 = 20 minutos",
"Són les <span class=\"hl\">3:20</span>|Son las <span class=\"hl\">3:20</span>"
]
},
{
"t": "Quarts d'hora|Cuartos de hora",
"x": "Si partim l'hora en 4 parts iguals, cada part és un <b>quart d'hora</b>: 60 ÷ 4 = 15 minuts. Dos quarts són mitja hora (30 minuts) i tres quarts, 45 minuts.|Si partimos la hora en 4 partes iguales, cada parte es un <b>cuarto de hora</b>: 60 ÷ 4 = 15 minutos. Dos cuartos son media hora (30 minutos) y tres cuartos, 45 minutos.",
"ex": [
"Agulla gran al 3 → 15 min: un quart|Aguja grande en el 3 → 15 min: un cuarto",
"Agulla gran al 6 → 30 min: mitja hora|Aguja grande en el 6 → 30 min: media hora",
"Agulla gran al 9 → <span class=\"hl\">45 min</span>: tres quarts|Aguja grande en el 9 → <span class=\"hl\">45 min</span>: tres cuartos"
]
},
{
"t": "Pes, capacitat i diners|Peso, capacidad y dinero",
"x": "El pes es mesura en <b>quilograms</b> (kg) i grams (g); la capacitat, en <b>litres</b> (l) i mil·lilitres (ml). En tots dos casos la unitat gran en val 1.000 de petites. Amb els diners, 1 € = 100 cèntims, i el canvi és el que pagues menys el que costa.|El peso se mide en <b>kilogramos</b> (kg) y gramos (g); la capacidad, en <b>litros</b> (l) y mililitros (ml). En los dos casos la unidad grande vale 1.000 pequeñas. Con el dinero, 1 € = 100 céntimos, y el cambio es lo que pagas menos lo que cuesta.",
"ex": [
"1 kg = 1.000 g → 3 kg = 3.000 g|1 kg = 1.000 g → 3 kg = 3.000 g",
"1 l = 1.000 ml → mig litre = 500 ml|1 l = 1.000 ml → medio litro = 500 ml",
"Llibre de 13 €, pago amb 20 €|Libro de 13 €, pago con 20 €",
"Canvi: 20 − 13 = <span class=\"hl\">7 €</span>|Cambio: 20 − 13 = <span class=\"hl\">7 €</span>"
]
},
{
"t": "Figures i perímetre|Figuras y perímetro",
"x": "Els polígons es diuen segons els costats: triangle (3), quadrat i rectangle (4), pentàgon (5), hexàgon (6) i octàgon (8). El <b>perímetre</b> és el que mesura tota la vora de la figura: se sumen <b>tots</b> els costats.|Los polígonos se llaman según sus lados: triángulo (3), cuadrado y rectángulo (4), pentágono (5), hexágono (6) y octágono (8). El <b>perímetro</b> es lo que mide todo el borde de la figura: se suman <b>todos</b> los lados.",
"ex": [
"Rectangle de 5 cm i 3 cm|Rectángulo de 5 cm y 3 cm",
"Té 4 costats: 5, 3, 5 i 3|Tiene 4 lados: 5, 3, 5 y 3",
"5 + 3 + 5 + 3 = <span class=\"hl\">16 cm</span>|5 + 3 + 5 + 3 = <span class=\"hl\">16 cm</span>"
]
}
],
"words": [
[
"quart d'hora|cuarto de hora",
"15 minuts, la quarta part d'una hora|15 minutos, la cuarta parte de una hora"
],
[
"quilogram|kilogramo",
"unitat de pes: 1 kg = 1.000 g|unidad de peso: 1 kg = 1.000 g"
],
[
"litre|litro",
"unitat de capacitat: 1 l = 1.000 ml|unidad de capacidad: 1 l = 1.000 ml"
],
[
"perímetre|perímetro",
"la suma de tots els costats d'una figura|la suma de todos los lados de una figura"
]
],
"mistakes": [
[
"«L'agulla gran és al 4, doncs són 4 minuts.»|«La aguja grande está en el 4, pues son 4 minutos.»",
"Cada número de l'agulla gran val 5 minuts: 4 × 5 = 20 minuts.|Cada número de la aguja grande vale 5 minutos: 4 × 5 = 20 minutos."
],
[
"«El perímetre del rectangle de 5 cm i 3 cm és 8 cm.»|«El perímetro del rectángulo de 5 cm y 3 cm es 8 cm.»",
"El rectangle té 4 costats, no 2: 5 + 3 + 5 + 3 = 16 cm.|El rectángulo tiene 4 lados, no 2: 5 + 3 + 5 + 3 = 16 cm."
],
[
"«3 kg són 300 g.»|«3 kg son 300 g.»",
"1 kg són 1.000 g, per tant 3 kg són 3.000 g.|1 kg son 1.000 g, por lo tanto 3 kg son 3.000 g."
]
],
"recap": [
"Agulla petita: hores. Agulla gran: minuts, de 5 en 5.|Aguja pequeña: horas. Aguja grande: minutos, de 5 en 5.",
"Un quart = 15 min, mitja hora = 30 min, tres quarts = 45 min.|Un cuarto = 15 min, media hora = 30 min, tres cuartos = 45 min.",
"1 kg = 1.000 g, 1 l = 1.000 ml, 1 € = 100 cèntims.|1 kg = 1.000 g, 1 l = 1.000 ml, 1 € = 100 céntimos.",
"Perímetre = suma de tots els costats.|Perímetro = suma de todos los lados."
],
"tip": "Imagina el rellotge com una pizza tallada en 4 quarts: cada tros són 15 minuts.|Imagina el reloj como una pizza cortada en 4 cuartos: cada trozo son 15 minutos."
},
"c3-7": {
"hook": "Els mapes dels jocs, les papallones i les capses de cereals amaguen geometria. I quan dones ordres a un robot, estàs programant.|Los mapas de los juegos, las mariposas y las cajas de cereales esconden geometría. Y cuando das órdenes a un robot, estás programando.",
"parts": [
{
"t": "Coordenades|Coordenadas",
"x": "En una quadrícula, cada casella té un nom: una <b>lletra</b> per a la columna i un <b>número</b> per a la fila. Primer busques la columna, després la fila, i on es creuen hi ha la casella. Així dos jugadors poden dir exactament on és una cosa.|En una cuadrícula, cada casilla tiene un nombre: una <b>letra</b> para la columna y un <b>número</b> para la fila. Primero buscas la columna, después la fila, y donde se cruzan está la casilla. Así dos jugadores pueden decir exactamente dónde está algo.",
"ex": [
"Casella C2|Casilla C2",
"1r: columna C (la lletra)|1.º: columna C (la letra)",
"2n: baixa fins a la fila 2 (el número)|2.º: baja hasta la fila 2 (el número)",
"On es creuen: <span class=\"hl\">C2</span>|Donde se cruzan: <span class=\"hl\">C2</span>"
]
},
{
"t": "Simetria|Simetría",
"x": "Una figura és <b>simètrica</b> si la pots doblegar per una línia i les dues meitats queden exactament una sobre l'altra, com en un mirall. Aquesta línia és l'<b>eix de simetria</b>.|Una figura es <b>simétrica</b> si la puedes doblar por una línea y las dos mitades quedan exactamente una sobre la otra, como en un espejo. Esa línea es el <b>eje de simetría</b>.",
"ex": [
"Doblega la A per la meitat|Dobla la A por la mitad",
"Les dues parts coincideixen → <span class=\"hl\">simètrica</span>|Las dos partes coinciden → <span class=\"hl\">simétrica</span>",
"Doblega la F: no coincideixen|Dobla la F: no coinciden",
"La F no té eix vertical|La F no tiene eje vertical"
]
},
{
"t": "Cossos geomètrics|Cuerpos geométricos",
"x": "Els cossos no són plans: tenen volum. Els que tenen cares planes tenen <b>cares</b>, <b>arestes</b> (on s'uneixen dues cares) i <b>vèrtexs</b> (les punxes). L'esfera, el cilindre i el con tenen parts corbes i poden rodolar.|Los cuerpos no son planos: tienen volumen. Los que tienen caras planas tienen <b>caras</b>, <b>aristas</b> (donde se unen dos caras) y <b>vértices</b> (las puntas). La esfera, el cilindro y el cono tienen partes curvas y pueden rodar.",
"ex": [
"Cub: 6 cares, 12 arestes, 8 vèrtexs|Cubo: 6 caras, 12 aristas, 8 vértices",
"Esfera: rodola, no té vèrtexs|Esfera: rueda, no tiene vértices",
"Con: base rodona i una punta|Cono: base redonda y una punta"
]
},
{
"t": "Ordres i bucles|Órdenes y bucles",
"x": "Un robot fa les ordres <b>una a una i en ordre</b>: si en canvies l'ordre, arriba a un altre lloc. Quan una ordre es repeteix, fem un <b>bucle</b>: «repeteix 3 vegades» estalvia escriure el mateix tres cops.|Un robot hace las órdenes <b>una a una y en orden</b>: si cambias el orden, llega a otro sitio. Cuando una orden se repite, hacemos un <b>bucle</b>: «repite 3 veces» ahorra escribir lo mismo tres veces.",
"ex": [
"n = 5|n = 5",
"repeteix 3 vegades: n = n + 4|repite 3 veces: n = n + 4",
"5 → 9 → 13 → 17|5 → 9 → 13 → 17",
"Al final, n = <span class=\"hl\">17</span>|Al final, n = <span class=\"hl\">17</span>"
]
}
],
"words": [
[
"coordenades|coordenadas",
"la lletra i el número que diuen on és una casella|la letra y el número que dicen dónde está una casilla"
],
[
"eix de simetria|eje de simetría",
"la línia que parteix una figura en dues meitats iguals|la línea que parte una figura en dos mitades iguales"
],
[
"aresta|arista",
"la línia on s'uneixen dues cares d'un cos|la línea donde se unen dos caras de un cuerpo"
],
[
"vèrtex|vértice",
"la punta on s'uneixen arestes o costats|la punta donde se unen aristas o lados"
],
[
"bucle|bucle",
"una ordre que fa repetir altres ordres|una orden que hace repetir otras órdenes"
]
],
"mistakes": [
[
"«Per trobar B3, busco la fila B i la columna 3.»|«Para encontrar B3, busco la fila B y la columna 3.»",
"La lletra és la columna i el número, la fila. Primer la columna B, després baixes a la fila 3.|La letra es la columna y el número, la fila. Primero la columna B, después bajas a la fila 3."
],
[
"«Repeteix 3 vegades n + 4: 5 + 4 = 9.»|«Repite 3 veces n + 4: 5 + 4 = 9.»",
"Ho has fet només una vegada. Cal sumar 4 tres cops: 5 → 9 → 13 → 17.|Lo has hecho solo una vez. Hay que sumar 4 tres veces: 5 → 9 → 13 → 17."
],
[
"«Qualsevol línia pel mig és un eix de simetria.»|«Cualquier línea por el medio es un eje de simetría.»",
"Només ho és si, en doblegar, les dues meitats coincideixen del tot.|Solo lo es si, al doblar, las dos mitades coinciden del todo."
]
],
"recap": [
"Coordenades: primer la lletra (columna), després el número (fila).|Coordenadas: primero la letra (columna), después el número (fila).",
"Simètrica = les dues meitats coincideixen en doblegar.|Simétrica = las dos mitades coinciden al doblar.",
"El cub té 6 cares, 12 arestes i 8 vèrtexs.|El cubo tiene 6 caras, 12 aristas y 8 vértices.",
"Un bucle repeteix ordres: compta cada volta.|Un bucle repite órdenes: cuenta cada vuelta."
],
"tip": "Amb el robot, fes el camí amb el dit, casella a casella, abans de respondre. Els programadors també ho proven pas a pas.|Con el robot, haz el camino con el dedo, casilla a casilla, antes de responder. Los programadores también lo prueban paso a paso."
},
"c3-8": {
"hook": "Si voleu triar entre tota la classe on anar d'excursió, fareu una votació, comptareu els vots i mirareu quina opció en té més.|Si queréis elegir entre toda la clase adónde ir de excursión, haréis una votación, contaréis los votos y miraréis qué opción tiene más.",
"parts": [
{
"t": "Recomptes|Recuentos",
"x": "Per comptar vots o coses, fes una <b>ratlleta</b> per cadascuna. Quan en tens 4, la cinquena la fas creuada: així queden grups de 5 i comptes molt més de pressa, de 5 en 5.|Para contar votos o cosas, haz una <b>rayita</b> por cada una. Cuando tienes 4, la quinta la haces cruzada: así quedan grupos de 5 y cuentas mucho más deprisa, de 5 en 5.",
"ex": [
"4 ratlletes + 1 creuada = 5|4 rayitas + 1 cruzada = 5",
"Poma: 2 grups de 5 i 3 ratlletes|Manzana: 2 grupos de 5 y 3 rayitas",
"5 + 5 + 3 = <span class=\"hl\">13</span> vots|5 + 5 + 3 = <span class=\"hl\">13</span> votos"
]
},
{
"t": "Gràfics de barres|Gráficos de barras",
"x": "Un <b>gràfic de barres</b> dibuixa les dades: com més alta és la barra, més n'hi ha. Per llegir-lo, segueix el final de la barra fins al número de l'eix. Així pots comparar d'un cop d'ull.|Un <b>gráfico de barras</b> dibuja los datos: cuanto más alta es la barra, más hay. Para leerlo, sigue el final de la barra hasta el número del eje. Así puedes comparar de un vistazo.",
"ex": [
"Barra del futbol: arriba al 8|Barra del fútbol: llega al 8",
"Barra del bàsquet: arriba al 5|Barra del baloncesto: llega al 5",
"8 − 5 = <span class=\"hl\">3</span> vots més per al futbol|8 − 5 = <span class=\"hl\">3</span> votos más para el fútbol"
]
},
{
"t": "La moda i la mitjana|La moda y la media",
"x": "La <b>moda</b> és el valor que surt <b>més vegades</b>. La <b>mitjana</b> és el que tocaria a cadascú si ho repartíssim tot a parts iguals: sumes tots els valors i divideixes entre quants n'hi ha.|La <b>moda</b> es el valor que sale <b>más veces</b>. La <b>media</b> es lo que tocaría a cada uno si lo repartiéramos todo a partes iguales: sumas todos los valores y divides entre cuántos hay.",
"ex": [
"Punts: 2, 5, 2, 7|Puntos: 2, 5, 2, 7",
"Moda: <span class=\"hl\">2</span> (surt 2 vegades)|Moda: <span class=\"hl\">2</span> (sale 2 veces)",
"Suma: 2 + 5 + 2 + 7 = 16|Suma: 2 + 5 + 2 + 7 = 16",
"Mitjana: 16 ÷ 4 = <span class=\"hl\">4</span>|Media: 16 ÷ 4 = <span class=\"hl\">4</span>"
]
},
{
"t": "Més probable|Más probable",
"x": "Una cosa és <b>segura</b> si passarà sempre, <b>impossible</b> si no pot passar mai i <b>possible</b> si pot passar o no. Entre les possibles, és <b>més probable</b> la que té més casos: si hi ha més boles vermelles, és més fàcil treure'n una de vermella.|Algo es <b>seguro</b> si pasará siempre, <b>imposible</b> si no puede pasar nunca y <b>posible</b> si puede pasar o no. Entre las posibles, es <b>más probable</b> la que tiene más casos: si hay más bolas rojas, es más fácil sacar una roja.",
"ex": [
"Bossa: 6 vermelles, 2 blaves, 1 verda|Bolsa: 6 rojas, 2 azules, 1 verde",
"Més probable: <span class=\"hl\">vermella</span>|Más probable: <span class=\"hl\">roja</span>",
"Menys probable: verda|Menos probable: verde",
"Groga: impossible, no n'hi ha cap|Amarilla: imposible, no hay ninguna"
]
}
],
"words": [
[
"recompte|recuento",
"comptar dades fent ratlletes|contar datos haciendo rayitas"
],
[
"moda|moda",
"el valor que es repeteix més vegades|el valor que se repite más veces"
],
[
"mitjana|media",
"la suma de tots els valors dividida entre quants n'hi ha|la suma de todos los valores dividida entre cuántos hay"
],
[
"probable|probable",
"que té moltes possibilitats de passar|que tiene muchas posibilidades de pasar"
],
[
"impossible|imposible",
"que no pot passar mai|que no puede pasar nunca"
]
],
"mistakes": [
[
"«La moda de 2, 5, 2, 7 és 7, perquè és el més gran.»|«La moda de 2, 5, 2, 7 es 7, porque es el mayor.»",
"La moda és el que surt més vegades, no el més gran. El 2 surt dues vegades: la moda és 2.|La moda es lo que sale más veces, no el mayor. El 2 sale dos veces: la moda es 2."
],
[
"«Hi ha més boles vermelles, doncs segur que en surt una de vermella.»|«Hay más bolas rojas, pues seguro que sale una roja.»",
"És més probable, però no segur: també podria sortir una blava o una verda.|Es más probable, pero no seguro: también podría salir una azul o una verde."
],
[
"«Un grup de ratlletes són 4.»|«Un grupo de rayitas son 4.»",
"Compta també la creuada: cada grup són 5.|Cuenta también la cruzada: cada grupo son 5."
]
],
"recap": [
"Recompte: ratlletes en grups de 5.|Recuento: rayitas en grupos de 5.",
"Barra més alta = més vots.|Barra más alta = más votos.",
"Moda = el que més es repeteix. Mitjana = sumar i dividir.|Moda = lo que más se repite. Media = sumar y dividir.",
"Més casos = més probable, però no segur.|Más casos = más probable, pero no seguro."
],
"tip": "En un gràfic de barres, posa el dit al final de la barra i llisca'l fins als números: no t'equivocaràs de línia.|En un gráfico de barras, pon el dedo al final de la barra y deslízalo hasta los números: no te equivocarás de línea."
},
"c3-9": {
"hook": "Un detectiu mira les pistes, busca què es repeteix i treu conclusions. Amb els números pots fer el mateix per resoldre enigmes i problemes.|Un detective mira las pistas, busca qué se repite y saca conclusiones. Con los números puedes hacer lo mismo para resolver enigmas y problemas.",
"parts": [
{
"t": "Sèries|Series",
"x": "Una <b>sèrie</b> és una fila de números que segueix una <b>regla</b>. Mira què passa d'un número al següent: pot ser que se sumi, es resti o es faci el doble. Comprova que la regla funcioni amb tots els números i aplica-la per trobar el que falta.|Una <b>serie</b> es una fila de números que sigue una <b>regla</b>. Mira qué pasa de un número al siguiente: puede que se sume, se reste o se haga el doble. Comprueba que la regla funcione con todos los números y aplícala para encontrar el que falta.",
"ex": [
"3, 7, 11, 15, ?|3, 7, 11, 15, ?",
"De 3 a 7: +4. De 7 a 11: +4|De 3 a 7: +4. De 7 a 11: +4",
"15 + 4 = <span class=\"hl\">19</span>|15 + 4 = <span class=\"hl\">19</span>"
]
},
{
"t": "Balances|Balanzas",
"x": "Una balança <b>equilibrada</b> té el mateix pes als dos costats, com el signe =. Si treus el mateix dels dos costats, continua equilibrada: així pots descobrir quant val cada cosa.|Una balanza <b>equilibrada</b> tiene el mismo peso en los dos lados, como el signo =. Si quitas lo mismo de los dos lados, sigue equilibrada: así puedes descubrir cuánto vale cada cosa.",
"ex": [
"Poma + 5 = 12|Manzana + 5 = 12",
"Poma = 12 − 5 = <span class=\"hl\">7</span>|Manzana = 12 − 5 = <span class=\"hl\">7</span>",
"Pera + Pera + Pera = 12|Pera + Pera + Pera = 12",
"Pera = 12 ÷ 3 = <span class=\"hl\">4</span>|Pera = 12 ÷ 3 = <span class=\"hl\">4</span>"
]
},
{
"t": "Quina operació faig?|¿Qué operación hago?",
"x": "Llegeix el problema i pregunta't què passa: si <b>ajuntes</b>, sumes; si <b>treus</b> o busques la diferència, restes; si <b>repeteixes</b> la mateixa quantitat, multipliques; si <b>reparteixes</b> o fas grups iguals, divideixes.|Lee el problema y pregúntate qué pasa: si <b>juntas</b>, sumas; si <b>quitas</b> o buscas la diferencia, restas; si <b>repites</b> la misma cantidad, multiplicas; si <b>repartes</b> o haces grupos iguales, divides.",
"ex": [
"4 capses amb 6 ous cada una|4 cajas con 6 huevos cada una",
"Repeteixo 6 quatre vegades → ×|Repito 6 cuatro veces → ×",
"4 × 6 = <span class=\"hl\">24 ous</span>|4 × 6 = <span class=\"hl\">24 huevos</span>"
]
},
{
"t": "Problemes de dividir|Problemas de dividir",
"x": "Divideixes quan reparteixes a parts iguals («quants en toca a cadascú?») o quan fas grups («quants grups surten?»). Quan acabis, comprova-ho multiplicant i respon amb la unitat.|Divides cuando repartes a partes iguales («¿cuántos le tocan a cada uno?») o cuando haces grupos («¿cuántos grupos salen?»). Cuando acabes, compruébalo multiplicando y responde con la unidad.",
"ex": [
"30 cromos en sobres de 5|30 cromos en sobres de 5",
"Quants sobres? Faig grups → ÷|¿Cuántos sobres? Hago grupos → ÷",
"30 ÷ 5 = <span class=\"hl\">6 sobres</span>|30 ÷ 5 = <span class=\"hl\">6 sobres</span>",
"Comprovo: 6 × 5 = 30|Compruebo: 6 × 5 = 30"
]
}
],
"words": [
[
"sèrie|serie",
"números en fila que segueixen una regla|números en fila que siguen una regla"
],
[
"regla|regla",
"el que es fa sempre per passar d'un número al següent|lo que se hace siempre para pasar de un número al siguiente"
],
[
"equilibrada|equilibrada",
"una balança amb el mateix pes als dos costats|una balanza con el mismo peso en los dos lados"
],
[
"dades|datos",
"els números i la informació que et dona el problema|los números y la información que te da el problema"
]
],
"mistakes": [
[
"«En Pau té 12 cromos, 5 més que la Laia. Com que diu <i>més</i>, sumo: 17.»|«Pau tiene 12 cromos, 5 más que Laia. Como dice <i>más</i>, sumo: 17.»",
"Pensa qui en té més: en Pau. La Laia en té 5 menys: 12 − 5 = 7.|Piensa quién tiene más: Pau. Laia tiene 5 menos: 12 − 5 = 7."
],
[
"Mirar només els dos primers números d'una sèrie.|Mirar solo los dos primeros números de una serie.",
"Comprova la regla amb tots els números abans de continuar la sèrie.|Comprueba la regla con todos los números antes de continuar la serie."
],
[
"Respondre només «6».|Responder solo «6».",
"Rellegeix la pregunta i digues què són: «6 sobres».|Vuelve a leer la pregunta y di qué son: «6 sobres»."
]
],
"recap": [
"A una sèrie, busca la regla i comprova-la amb tots els números.|En una serie, busca la regla y compruébala con todos los números.",
"Balança equilibrada: el que fas a un costat, fes-ho a l'altre.|Balanza equilibrada: lo que haces en un lado, hazlo en el otro.",
"Ajuntar +, treure −, repetir ×, repartir ÷.|Juntar +, quitar −, repetir ×, repartir ÷.",
"Comprova el resultat i respon amb la unitat.|Comprueba el resultado y responde con la unidad."
],
"tip": "Fes un dibuix ràpid del problema: capses, sobres o boles. Quan ho veus, saps de seguida quina operació toca.|Haz un dibujo rápido del problema: cajas, sobres o bolas. Cuando lo ves, sabes enseguida qué operación toca."
},
"c4-1": {
"hook": "Un estadi pot tenir 45.000 seients i un cotxe pot haver fet 80.000 km. Per llegir números tan grans has de saber què val cada xifra segons el lloc on és.|Un estadio puede tener 45.000 asientos y un coche puede haber hecho 80.000 km. Para leer números tan grandes tienes que saber qué vale cada cifra según el lugar donde está.",
"parts": [
{
"t": "El valor de cada xifra|El valor de cada cifra",
"x": "Una xifra val diferent segons el lloc on és. Cada lloc val <b>10 vegades més</b> que el de la seva dreta: 10 unitats fan 1 desena, 10 desenes fan 1 centena i 10 centenes fan 1 <b>unitat de miler</b> (1.000). Si un lloc està buit, hi escrivim un 0.|Una cifra vale distinto según el lugar donde está. Cada lugar vale <b>10 veces más</b> que el de su derecha: 10 unidades forman 1 decena, 10 decenas forman 1 centena y 10 centenas forman 1 <b>unidad de millar</b> (1.000). Si un lugar está vacío, escribimos un 0.",
"ex": [
"3.407 = 3 UM + 4 C + 0 D + 7 U|3.407 = 3 UM + 4 C + 0 D + 7 U",
"3.000 + 400 + 0 + 7 = <span class=\"hl\">3.407</span>|3.000 + 400 + 0 + 7 = <span class=\"hl\">3.407</span>",
"Es llegeix: tres mil quatre-cents set|Se lee: tres mil cuatrocientos siete"
]
},
{
"t": "Fins al 99.999|Hasta el 99.999",
"x": "Amb 10 unitats de miler fem una <b>desena de miler</b> (DM): 10.000. Així arribem als números de cinc xifres. Per llegir-los, llegeix el tros de davant del punt i afegeix «mil». Quan sumes 1 a un 9, torna a 0 i en passes 1 al lloc de l'esquerra: 29.999 + 1 = 30.000.|Con 10 unidades de millar formamos una <b>decena de millar</b> (DM): 10.000. Así llegamos a los números de cinco cifras. Para leerlos, lee el trozo de delante del punto y añade «mil». Cuando sumas 1 a un 9, vuelve a 0 y pasas 1 al lugar de la izquierda: 29.999 + 1 = 30.000.",
"ex": [
"45.308: quaranta-cinc mil tres-cents vuit|45.308: cuarenta y cinco mil trescientos ocho",
"4 DM + 5 UM + 3 C + 0 D + 8 U|4 DM + 5 UM + 3 C + 0 D + 8 U",
"40.000 + 5.000 + 300 + 8 = <span class=\"hl\">45.308</span>|40.000 + 5.000 + 300 + 8 = <span class=\"hl\">45.308</span>"
]
},
{
"t": "Comparar i ordenar|Comparar y ordenar",
"x": "Primer compta les xifres: el número que en té més és el més gran. Si en tenen les mateixes, compara-les d'esquerra a dreta, una a una, fins que en trobis una de diferent: aquella decideix. Per ordenar una llista, busca el més petit, després el següent, i així fins al final.|Primero cuenta las cifras: el número que tiene más es el mayor. Si tienen las mismas, compáralas de izquierda a derecha, una a una, hasta que encuentres una distinta: esa decide. Para ordenar una lista, busca el menor, después el siguiente, y así hasta el final.",
"ex": [
"52.140 o 52.410?|¿52.140 o 52.410?",
"DM: 5 = 5 · UM: 2 = 2|DM: 5 = 5 · UM: 2 = 2",
"C: 1 és menor que 4|C: 1 es menor que 4",
"<span class=\"hl\">52.140 &lt; 52.410</span>|<span class=\"hl\">52.140 &lt; 52.410</span>"
]
},
{
"t": "Arrodonir|Redondear",
"x": "Arrodonir és canviar un número pel número rodó més proper. Mira la xifra just a la dreta del lloc on arrodoneixes: si és 0, 1, 2, 3 o 4, baixes; si és 5, 6, 7, 8 o 9, puges, perquè ja ets més a prop del de dalt (amb el 5, just al mig, també pugem). Per exemple, 3.482 a la desena és 3.480.|Redondear es cambiar un número por el número redondo más cercano. Mira la cifra justo a la derecha del lugar donde redondeas: si es 0, 1, 2, 3 o 4, bajas; si es 5, 6, 7, 8 o 9, subes, porque ya estás más cerca del de arriba (con el 5, justo en medio, también subimos). Por ejemplo, 3.482 a la decena es 3.480.",
"ex": [
"7.620 a la unitat de miler|7.620 a la unidad de millar",
"És entre 7.000 i 8.000|Está entre 7.000 y 8.000",
"Centenes: 6 → 5 o més, puja|Centenas: 6 → 5 o más, sube",
"7.620 → <span class=\"hl\">8.000</span>|7.620 → <span class=\"hl\">8.000</span>"
]
}
],
"words": [
[
"xifra|cifra",
"cadascun dels signes del 0 al 9 amb què escrivim els números|cada uno de los signos del 0 al 9 con los que escribimos los números"
],
[
"unitat de miler|unidad de millar",
"1.000, és a dir, 10 centenes|1.000, es decir, 10 centenas"
],
[
"desena de miler|decena de millar",
"10.000, és a dir, 10 unitats de miler|10.000, es decir, 10 unidades de millar"
],
[
"valor de posició|valor posicional",
"el que val una xifra segons el lloc on és|lo que vale una cifra según el lugar donde está"
],
[
"arrodonir|redondear",
"canviar un número pel número rodó més proper|cambiar un número por el número redondo más cercano"
]
],
"mistakes": [
[
"«Tres mil quaranta-set s'escriu 3.47.»|«Tres mil cuarenta y siete se escribe 3.47.»",
"No hi ha centenes, però el lloc hi és: s'omple amb un 0. S'escriu 3.047.|No hay centenas, pero el lugar existe: se rellena con un 0. Se escribe 3.047."
],
[
"«9.999 és més gran que 10.000 perquè té xifres més grans.»|«9.999 es mayor que 10.000 porque tiene cifras más grandes.»",
"Primer compta xifres: 10.000 en té cinc i 9.999 només quatre. 10.000 és més gran.|Primero cuenta cifras: 10.000 tiene cinco y 9.999 solo cuatro. 10.000 es mayor."
],
[
"«4.350 arrodonit a la centena és 4.300.»|«4.350 redondeado a la centena es 4.300.»",
"Mira les desenes: hi ha un 5, i amb 5 o més pugem. El resultat és 4.400.|Mira las decenas: hay un 5, y con 5 o más subimos. El resultado es 4.400."
]
],
"recap": [
"Cada lloc val 10 vegades més que el de la dreta.|Cada lugar vale 10 veces más que el de la derecha.",
"Un lloc buit s'omple amb un 0.|Un lugar vacío se rellena con un 0.",
"Per comparar: primer quantes xifres, després d'esquerra a dreta.|Para comparar: primero cuántas cifras, después de izquierda a derecha.",
"Per arrodonir: de 0 a 4 baixes, de 5 a 9 puges.|Para redondear: de 0 a 4 bajas, de 5 a 9 subes."
],
"tip": "Escriu el número dins d'una taula DM · UM · C · D · U: veuràs de cop què val cada xifra i no et deixaràs cap zero.|Escribe el número dentro de una tabla DM · UM · C · D · U: verás de golpe qué vale cada cifra y no te dejarás ningún cero."
},
"c4-2": {
"hook": "Quan vols saber quant pagaràs per dues coses o quants punts et falten per guanyar una partida, estàs sumant i restant, sovint de cap.|Cuando quieres saber cuánto pagarás por dos cosas o cuántos puntos te faltan para ganar una partida, estás sumando y restando, a menudo de cabeza.",
"parts": [
{
"t": "Sumar i restar de cap|Sumar y restar de cabeza",
"x": "De cap és més fàcil treballar per trossos: primer les desenes i després les unitats. Funciona perquè un número és la suma de les seves parts: 27 = 20 + 7. Un altre truc: per sumar 9, suma 10 i treu-ne 1.|De cabeza es más fácil trabajar por trozos: primero las decenas y después las unidades. Funciona porque un número es la suma de sus partes: 27 = 20 + 7. Otro truco: para sumar 9, suma 10 y quita 1.",
"ex": [
"46 + 27 = 46 + 20 + 7|46 + 27 = 46 + 20 + 7",
"66 + 7 = <span class=\"hl\">73</span>|66 + 7 = <span class=\"hl\">73</span>",
"83 − 28 = 83 − 20 − 8|83 − 28 = 83 − 20 − 8",
"63 − 8 = <span class=\"hl\">55</span>|63 − 8 = <span class=\"hl\">55</span>"
]
},
{
"t": "Sumar en columna portant-ne|Sumar en columna llevando",
"x": "Posa unitats sota unitats, desenes sota desenes, i comença per la dreta. Si una columna fa 10 o més, escrius les unitats i te'n portes 1 a la columna següent. És perquè 10 unitats són 1 desena: només la canvies de columna.|Pon unidades bajo unidades, decenas bajo decenas, y empieza por la derecha. Si una columna da 10 o más, escribes las unidades y te llevas 1 a la columna siguiente. Es porque 10 unidades son 1 decena: solo la cambias de columna.",
"ex": [
"1.358 + 2.475|1.358 + 2.475",
"U: 8 + 5 = 13 → 3, en porto 1|U: 8 + 5 = 13 → 3, me llevo 1",
"D: 5 + 7 + 1 = 13 → 3, en porto 1|D: 5 + 7 + 1 = 13 → 3, me llevo 1",
"C: 3 + 4 + 1 = 8 · UM: 1 + 2 = 3|C: 3 + 4 + 1 = 8 · UM: 1 + 2 = 3",
"Resultat: <span class=\"hl\">3.833</span>|Resultado: <span class=\"hl\">3.833</span>"
]
},
{
"t": "Restar en columna portant-ne|Restar en columna llevando",
"x": "També comences per les unitats. Si la xifra de dalt és més petita que la de sota, demana'n 1 a la columna del costat: 1 desena es converteix en 10 unitats. El número no canvia, només el reorganitzes perquè la resta es pugui fer.|También empiezas por las unidades. Si la cifra de arriba es menor que la de abajo, pide 1 a la columna de al lado: 1 decena se convierte en 10 unidades. El número no cambia, solo lo reorganizas para que la resta se pueda hacer.",
"ex": [
"4.742 − 1.358|4.742 − 1.358",
"U: 2 &lt; 8 → demano 1 D: 12 − 8 = 4|U: 2 &lt; 8 → pido 1 D: 12 − 8 = 4",
"D: 3 &lt; 5 → demano 1 C: 13 − 5 = 8|D: 3 &lt; 5 → pido 1 C: 13 − 5 = 8",
"C: 6 − 3 = 3 · UM: 4 − 1 = 3|C: 6 − 3 = 3 · UM: 4 − 1 = 3",
"Resultat: <span class=\"hl\">3.384</span>|Resultado: <span class=\"hl\">3.384</span>"
]
},
{
"t": "El número amagat i estimar|El número escondido y estimar",
"x": "Si falta un número, fes l'operació contrària: la suma i la resta es desfan l'una a l'altra. Per saber si un resultat té sentit, <b>estima</b>: arrodoneix els números i calcula de cap. 398 + 205 ha de donar a prop de 400 + 200 = 600.|Si falta un número, haz la operación contraria: la suma y la resta se deshacen la una a la otra. Para saber si un resultado tiene sentido, <b>estima</b>: redondea los números y calcula de cabeza. 398 + 205 tiene que dar cerca de 400 + 200 = 600.",
"ex": [
"? − 150 = 320|? − 150 = 320",
"Desfem la resta amb una suma|Deshacemos la resta con una suma",
"320 + 150 = <span class=\"hl\">470</span>|320 + 150 = <span class=\"hl\">470</span>",
"Comprova: 470 − 150 = 320|Comprueba: 470 − 150 = 320"
]
}
],
"words": [
[
"sumand|sumando",
"cadascun dels números que sumem|cada uno de los números que sumamos"
],
[
"diferència|diferencia",
"el resultat d'una resta|el resultado de una resta"
],
[
"portar-ne|llevarse",
"passar 1 a la columna de l'esquerra quan en tens 10 o més|pasar 1 a la columna de la izquierda cuando tienes 10 o más"
],
[
"estimar|estimar",
"calcular més o menys, amb números rodons|calcular más o menos, con números redondos"
]
],
"mistakes": [
[
"«A 52 − 17, com que 2 − 7 no es pot, faig 7 − 2.»|«En 52 − 17, como 2 − 7 no se puede, hago 7 − 2.»",
"No pots girar les xifres. Demana 1 desena: 12 − 7 = 5 i 4 − 1 = 3. Resultat: 35.|No puedes girar las cifras. Pide 1 decena: 12 − 7 = 5 y 4 − 1 = 3. Resultado: 35."
],
[
"«58 + 34 = 82.»|«58 + 34 = 82.»",
"T'has oblidat el que portes. 8 + 4 = 12: escrius 2 i en portes 1. 5 + 3 + 1 = 9. Resultat: 92.|Te has olvidado de lo que te llevas. 8 + 4 = 12: escribes 2 y te llevas 1. 5 + 3 + 1 = 9. Resultado: 92."
],
[
"«? + 40 = 100, doncs ? = 140.»|«? + 40 = 100, entonces ? = 140.»",
"Si falta un sumand, has de restar: 100 − 40 = 60. Comprova: 60 + 40 = 100.|Si falta un sumando, tienes que restar: 100 − 40 = 60. Comprueba: 60 + 40 = 100."
]
],
"recap": [
"De cap: primer desenes, després unitats.|De cabeza: primero decenas, después unidades.",
"En columna, sempre des de la dreta.|En columna, siempre desde la derecha.",
"10 unitats = 1 desena: per això en portes o en demanes 1.|10 unidades = 1 decena: por eso te llevas o pides 1.",
"El número amagat es troba amb l'operació contrària.|El número escondido se encuentra con la operación contraria."
],
"tip": "Comprova les restes amb una suma: el resultat més el que has tret ha de donar el número de dalt.|Comprueba las restas con una suma: el resultado más lo que has quitado tiene que dar el número de arriba."
},
"c4-3": {
"hook": "Si un sobre porta 6 cromos i en compres 8 sobres, no cal comptar-los un a un: multiplicant ho saps de seguida.|Si un sobre trae 6 cromos y compras 8 sobres, no hace falta contarlos uno a uno: multiplicando lo sabes enseguida.",
"parts": [
{
"t": "Sumar grups iguals|Sumar grupos iguales",
"x": "Multiplicar és una manera ràpida de sumar el mateix número moltes vegades. Si poses els objectes en files, veuràs que l'ordre no importa: 3 files de 5 són tants com 5 files de 3. Les taules més fàcils: la del 2 són els dobles, la del 5 acaba en 0 o en 5 i la del 10 acaba en 0.|Multiplicar es una forma rápida de sumar el mismo número muchas veces. Si pones los objetos en filas, verás que el orden no importa: 3 filas de 5 son tantos como 5 filas de 3. Las tablas más fáciles: la del 2 son los dobles, la del 5 acaba en 0 o en 5 y la del 10 acaba en 0.",
"ex": [
"3 bosses de 5 caramels|3 bolsas de 5 caramelos",
"5 + 5 + 5 = 15|5 + 5 + 5 = 15",
"3 × 5 = <span class=\"hl\">15</span>|3 × 5 = <span class=\"hl\">15</span>"
]
},
{
"t": "Trucs per a les taules difícils|Trucos para las tablas difíciles",
"x": "Les taules s'ajuden entre elles. La del 4 és el doble de la del 2, la del 6 és el doble de la del 3 i la del 8 és el doble de la del 4. Per a la del 9, multiplica per 10 i treu-ne una vegada. I si falta un número, com a ? × 7 = 56, busca'l a la taula del 7: 8 × 7 = 56.|Las tablas se ayudan entre ellas. La del 4 es el doble de la del 2, la del 6 es el doble de la del 3 y la del 8 es el doble de la del 4. Para la del 9, multiplica por 10 y quita una vez. Y si falta un número, como en ? × 7 = 56, búscalo en la tabla del 7: 8 × 7 = 56.",
"ex": [
"9 × 7 = ?|9 × 7 = ?",
"10 × 7 = 70|10 × 7 = 70",
"70 − 7 = 63|70 − 7 = 63",
"9 × 7 = <span class=\"hl\">63</span>|9 × 7 = <span class=\"hl\">63</span>"
]
},
{
"t": "Per 10 i per 100|Por 10 y por 100",
"x": "Quan multipliques per 10, cada xifra passa al lloc de la seva esquerra i val 10 vegades més: les unitats es tornen desenes. Per això apareix un 0 a la dreta. Multiplicar per 100 és fer-ho dues vegades: dos zeros.|Cuando multiplicas por 10, cada cifra pasa al lugar de su izquierda y vale 10 veces más: las unidades se vuelven decenas. Por eso aparece un 0 a la derecha. Multiplicar por 100 es hacerlo dos veces: dos ceros.",
"ex": [
"34 × 10 = <span class=\"hl\">340</span>|34 × 10 = <span class=\"hl\">340</span>",
"34 × 100 = <span class=\"hl\">3.400</span>|34 × 100 = <span class=\"hl\">3.400</span>",
"? × 10 = 250 → ? = <span class=\"hl\">25</span>|? × 10 = 250 → ? = <span class=\"hl\">25</span>"
]
},
{
"t": "Multiplicacions grans|Multiplicaciones grandes",
"x": "Per multiplicar un número de dues o tres xifres, descompon-lo: multiplica les desenes i les unitats per separat i suma els resultats. En columna es fa igual, començant per les unitats: si surt 10 o més, escrius les unitats i te'n portes les desenes.|Para multiplicar un número de dos o tres cifras, descomponlo: multiplica las decenas y las unidades por separado y suma los resultados. En columna se hace igual, empezando por las unidades: si sale 10 o más, escribes las unidades y te llevas las decenas.",
"ex": [
"36 × 4|36 × 4",
"30 × 4 = 120|30 × 4 = 120",
"6 × 4 = 24|6 × 4 = 24",
"120 + 24 = <span class=\"hl\">144</span>|120 + 24 = <span class=\"hl\">144</span>"
]
}
],
"words": [
[
"factor|factor",
"cadascun dels números que multipliquem|cada uno de los números que multiplicamos"
],
[
"producte|producto",
"el resultat d'una multiplicació|el resultado de una multiplicación"
],
[
"doble|doble",
"el que surt en multiplicar per 2|lo que sale al multiplicar por 2"
],
[
"taula de multiplicar|tabla de multiplicar",
"els resultats de multiplicar un número per 1, 2, 3… fins a 10|los resultados de multiplicar un número por 1, 2, 3… hasta 10"
]
],
"mistakes": [
[
"«3 × 5 = 3 + 5 = 8.»|«3 × 5 = 3 + 5 = 8.»",
"Multiplicar no és sumar els dos números: és sumar 3 vegades el 5. 5 + 5 + 5 = 15.|Multiplicar no es sumar los dos números: es sumar 3 veces el 5. 5 + 5 + 5 = 15."
],
[
"«Per 100 afegeixo un 0: 34 × 100 = 340.»|«Por 100 añado un 0: 34 × 100 = 340.»",
"100 = 10 × 10, així que són dos zeros: 34 × 100 = 3.400.|100 = 10 × 10, así que son dos ceros: 34 × 100 = 3.400."
],
[
"«36 × 4: 3 × 4 = 12 i 6 × 4 = 24, doncs 1.224.»|«36 × 4: 3 × 4 = 12 y 6 × 4 = 24, entonces 1.224.»",
"El 3 són 3 desenes: 30 × 4 = 120. Després suma: 120 + 24 = 144.|El 3 son 3 decenas: 30 × 4 = 120. Después suma: 120 + 24 = 144."
]
],
"recap": [
"Multiplicar és sumar grups iguals.|Multiplicar es sumar grupos iguales.",
"L'ordre dels factors no canvia el producte.|El orden de los factores no cambia el producto.",
"Per 10, un zero; per 100, dos zeros.|Por 10, un cero; por 100, dos ceros.",
"Números grans: descompon i suma els trossos.|Números grandes: descompón y suma los trozos."
],
"tip": "Si t'encalles en una taula, fes servir una que ja saps: 7 × 8 és el doble de 7 × 4. Com que 7 × 4 = 28, 7 × 8 = 56.|Si te atascas en una tabla, usa una que ya sabes: 7 × 8 es el doble de 7 × 4. Como 7 × 4 = 28, 7 × 8 = 56."
},
"c4-4": {
"hook": "Quan reparteixes les cartes d'un joc o fas equips al pati perquè cap no tingui més jugadors, estàs dividint.|Cuando repartes las cartas de un juego o haces equipos en el recreo para que ninguno tenga más jugadores, estás dividiendo.",
"parts": [
{
"t": "Repartir a parts iguals|Repartir a partes iguales",
"x": "Dividir és repartir una quantitat en parts iguals, sense que ningú en tingui més. El número que repartim és el <b>dividend</b>, entre quants repartim és el <b>divisor</b> i el que toca a cadascú és el <b>quocient</b>. També divideixes per saber quants grups pots fer: 12 caramels en bosses de 3 fan 4 bosses.|Dividir es repartir una cantidad en partes iguales, sin que nadie tenga más. El número que repartimos es el <b>dividendo</b>, entre cuántos repartimos es el <b>divisor</b> y lo que toca a cada uno es el <b>cociente</b>. También divides para saber cuántos grupos puedes hacer: 12 caramelos en bolsas de 3 son 4 bolsas.",
"ex": [
"12 caramels entre 3 amics|12 caramelos entre 3 amigos",
"Un per a cadascú, fins que s'acaben|Uno para cada uno, hasta que se acaban",
"12 ÷ 3 = <span class=\"hl\">4</span> caramels cadascú|12 ÷ 3 = <span class=\"hl\">4</span> caramelos cada uno"
]
},
{
"t": "Dividir amb les taules|Dividir con las tablas",
"x": "La divisió és l'operació contrària de la multiplicació: l'una desfà el que fa l'altra. Per resoldre 56 ÷ 8 et preguntes: quin número multiplicat per 8 fa 56? D'una multiplicació en surten dues divisions: 7 × 8 = 56, 56 ÷ 8 = 7 i 56 ÷ 7 = 8.|La división es la operación contraria de la multiplicación: una deshace lo que hace la otra. Para resolver 56 ÷ 8 te preguntas: ¿qué número multiplicado por 8 da 56? De una multiplicación salen dos divisiones: 7 × 8 = 56, 56 ÷ 8 = 7 y 56 ÷ 7 = 8.",
"ex": [
"56 ÷ 8 = ?|56 ÷ 8 = ?",
"Quin número × 8 fa 56?|¿Qué número × 8 da 56?",
"7 × 8 = 56|7 × 8 = 56",
"56 ÷ 8 = <span class=\"hl\">7</span>|56 ÷ 8 = <span class=\"hl\">7</span>"
]
},
{
"t": "Què sobra? El residu|¿Qué sobra? El resto",
"x": "No sempre el repartiment és exacte. El que sobra i no arriba per fer un altre grup és el <b>residu</b>. El residu sempre és més petit que el divisor: si fos igual o més gran, encara podries fer un grup més. Si el residu és 0, la divisió és <b>exacta</b>.|No siempre el reparto es exacto. Lo que sobra y no llega para hacer otro grupo es el <b>resto</b>. El resto siempre es menor que el divisor: si fuera igual o mayor, todavía podrías hacer otro grupo. Si el resto es 0, la división es <b>exacta</b>.",
"ex": [
"29 cromos en sobres de 5|29 cromos en sobres de 5",
"5 × 5 = 25 (6 × 5 = 30 és massa)|5 × 5 = 25 (6 × 5 = 30 es demasiado)",
"29 − 25 = 4|29 − 25 = 4",
"Quocient 5, residu <span class=\"hl\">4</span>|Cociente 5, resto <span class=\"hl\">4</span>"
]
},
{
"t": "Dividir números grans|Dividir números grandes",
"x": "Parteix el dividend en trossos fàcils de dividir, divideix cada tros i suma els resultats. Funciona perquè repartir 96 és el mateix que repartir primer 80 i després els 16 que queden.|Parte el dividendo en trozos fáciles de dividir, divide cada trozo y suma los resultados. Funciona porque repartir 96 es lo mismo que repartir primero 80 y después los 16 que quedan.",
"ex": [
"96 ÷ 4|96 ÷ 4",
"96 = 80 + 16|96 = 80 + 16",
"80 ÷ 4 = 20 i 16 ÷ 4 = 4|80 ÷ 4 = 20 y 16 ÷ 4 = 4",
"20 + 4 = <span class=\"hl\">24</span>|20 + 4 = <span class=\"hl\">24</span>"
]
}
],
"words": [
[
"dividend|dividendo",
"el número que repartim|el número que repartimos"
],
[
"divisor|divisor",
"entre quants repartim|entre cuántos repartimos"
],
[
"quocient|cociente",
"el que toca a cada part|lo que toca a cada parte"
],
[
"residu|resto",
"el que sobra i no arriba per fer un altre grup|lo que sobra y no llega para hacer otro grupo"
],
[
"divisió exacta|división exacta",
"la que té residu 0|la que tiene resto 0"
]
],
"mistakes": [
[
"«29 ÷ 5 = 4 i en sobren 9.»|«29 ÷ 5 = 4 y sobran 9.»",
"Amb 9 encara pots fer un altre grup de 5. El residu ha de ser més petit que el divisor: 29 ÷ 5 = 5 i en sobren 4.|Con 9 todavía puedes hacer otro grupo de 5. El resto tiene que ser menor que el divisor: 29 ÷ 5 = 5 y sobran 4."
],
[
"«12 ÷ 3 i 3 ÷ 12 són el mateix.»|«12 ÷ 3 y 3 ÷ 12 son lo mismo.»",
"A la divisió l'ordre importa: repartir 12 caramels entre 3 no és el mateix que repartir-ne 3 entre 12.|En la división el orden importa: repartir 12 caramelos entre 3 no es lo mismo que repartir 3 entre 12."
]
],
"recap": [
"Dividir és repartir a parts iguals.|Dividir es repartir a partes iguales.",
"La divisió desfà la multiplicació.|La división deshace la multiplicación.",
"El residu sempre és més petit que el divisor.|El resto siempre es menor que el divisor.",
"Números grans: parteix-los en trossos fàcils.|Números grandes: pártelos en trozos fáciles."
],
"tip": "Comprova cada divisió així: quocient × divisor + residu = dividend. A 29 ÷ 5: 5 × 5 + 4 = 29.|Comprueba cada división así: cociente × divisor + resto = dividendo. En 29 ÷ 5: 5 × 5 + 4 = 29."
},
"c4-5": {
"hook": "Els detectius i els programadors fan el mateix: busquen pistes i regles amagades. Aquí aprendràs a descobrir-les en sèries, balances i endevinalles.|Los detectives y los programadores hacen lo mismo: buscan pistas y reglas escondidas. Aquí aprenderás a descubrirlas en series, balanzas y adivinanzas.",
"parts": [
{
"t": "Sèries i patrons|Series y patrones",
"x": "Una <b>sèrie</b> és una fila de números que segueixen una regla. Per trobar-la, mira què passa d'un número al següent: sumem, restem, fem el doble? Comprova la regla amb tots els números abans de continuar. Un <b>patró</b> és un tros que es repeteix sempre igual, també amb colors o formes.|Una <b>serie</b> es una fila de números que siguen una regla. Para encontrarla, mira qué pasa de un número al siguiente: ¿sumamos, restamos, hacemos el doble? Comprueba la regla con todos los números antes de seguir. Un <b>patrón</b> es un trozo que se repite siempre igual, también con colores o formas.",
"ex": [
"5, 9, 13, 17, …|5, 9, 13, 17, …",
"9 − 5 = 4 i 13 − 9 = 4|9 − 5 = 4 y 13 − 9 = 4",
"Regla: cada vegada +4|Regla: cada vez +4",
"17 + 4 = <span class=\"hl\">21</span>|17 + 4 = <span class=\"hl\">21</span>"
]
},
{
"t": "Parells i senars|Pares e impares",
"x": "Un número <b>parell</b> es pot partir en dues meitats iguals sense que en sobri cap; un de <b>senar</b>, no: sempre en sobra 1. Els parells acaben en 0, 2, 4, 6 o 8, i els senars en 1, 3, 5, 7 o 9. Només cal mirar l'última xifra, perquè les desenes, centenes i milers sempre es poden partir per la meitat.|Un número <b>par</b> se puede partir en dos mitades iguales sin que sobre nada; uno <b>impar</b>, no: siempre sobra 1. Los pares acaban en 0, 2, 4, 6 u 8, y los impares en 1, 3, 5, 7 o 9. Solo hay que mirar la última cifra, porque las decenas, centenas y millares siempre se pueden partir por la mitad.",
"ex": [
"358 → acaba en 8 → <span class=\"hl\">parell</span>|358 → acaba en 8 → <span class=\"hl\">par</span>",
"7.415 → acaba en 5 → <span class=\"hl\">senar</span>|7.415 → acaba en 5 → <span class=\"hl\">impar</span>",
"Senar + senar = parell: 3 + 5 = 8|Impar + impar = par: 3 + 5 = 8"
]
},
{
"t": "Balances misterioses|Balanzas misteriosas",
"x": "Una balança equilibrada vol dir que els dos costats pesen igual, com el signe =. Si treus el mateix dels dos costats, continua equilibrada. Així pots deixar sol l'objecte misteriós i descobrir quant val.|Una balanza equilibrada quiere decir que los dos lados pesan igual, como el signo =. Si quitas lo mismo de los dos lados, sigue equilibrada. Así puedes dejar solo el objeto misterioso y descubrir cuánto vale.",
"ex": [
"2 caixes + 4 = 10|2 cajas + 4 = 10",
"Treu 4 de cada costat: 2 caixes = 6|Quita 4 de cada lado: 2 cajas = 6",
"1 caixa = 6 ÷ 2 = <span class=\"hl\">3</span>|1 caja = 6 ÷ 2 = <span class=\"hl\">3</span>"
]
},
{
"t": "Endevinalles de números|Adivinanzas de números",
"x": "Hi ha dos tipus d'endevinalla. En les de pistes, cada pista descarta números fins que només en queda un. En les de «penso un número», fes el camí al revés: comença pel final i desfés cada pas amb l'operació contrària.|Hay dos tipos de adivinanza. En las de pistas, cada pista descarta números hasta que solo queda uno. En las de «pienso un número», haz el camino al revés: empieza por el final y deshaz cada paso con la operación contraria.",
"ex": [
"Penso un número, × 3 i + 2: fa 17|Pienso un número, × 3 y + 2: da 17",
"Desfaig + 2: 17 − 2 = 15|Deshago + 2: 17 − 2 = 15",
"Desfaig × 3: 15 ÷ 3 = <span class=\"hl\">5</span>|Deshago × 3: 15 ÷ 3 = <span class=\"hl\">5</span>"
]
}
],
"words": [
[
"sèrie|serie",
"fila de números que segueixen una regla|fila de números que siguen una regla"
],
[
"patró|patrón",
"tros que es repeteix sempre igual|trozo que se repite siempre igual"
],
[
"parell|par",
"número que es pot partir en dues meitats iguals: 0, 2, 4, 6…|número que se puede partir en dos mitades iguales: 0, 2, 4, 6…"
],
[
"senar|impar",
"número que, partit en dos, sempre deixa 1: 1, 3, 5, 7…|número que, partido en dos, siempre deja 1: 1, 3, 5, 7…"
],
[
"equilibrada|equilibrada",
"balança amb els dos costats iguals|balanza con los dos lados iguales"
]
],
"mistakes": [
[
"«A 2, 4, 8, 16 la regla és +2.»|«En 2, 4, 8, 16 la regla es +2.»",
"Comprova-la amb tots els números: de 4 a 8 hi ha +4. La regla és fer el doble, i el següent és 32.|Compruébala con todos los números: de 4 a 8 hay +4. La regla es hacer el doble, y el siguiente es 32."
],
[
"«358 és senar perquè comença per 3.»|«358 es impar porque empieza por 3.»",
"Mira només l'última xifra: 358 acaba en 8, per tant és parell.|Mira solo la última cifra: 358 acaba en 8, por lo tanto es par."
],
[
"Treure 4 només d'un costat de la balança.|Quitar 4 solo de un lado de la balanza.",
"El que treus d'un costat ho has de treure també de l'altre; si no, la balança es desequilibra.|Lo que quitas de un lado lo tienes que quitar también del otro; si no, la balanza se desequilibra."
]
],
"recap": [
"Una sèrie té una regla: comprova-la amb tots els números.|Una serie tiene una regla: compruébala con todos los números.",
"Parell o senar? Mira l'última xifra.|¿Par o impar? Mira la última cifra.",
"Balança: treu el mateix dels dos costats.|Balanza: quita lo mismo de los dos lados.",
"Endevinalles: desfés els passos al revés.|Adivinanzas: deshaz los pasos al revés."
],
"tip": "Quan una endevinalla explica què li han fet a un número, rebobina com si fos un vídeo: l'últim pas és el primer que desfàs.|Cuando una adivinanza explica qué le han hecho a un número, rebobina como si fuera un vídeo: el último paso es el primero que deshaces."
},
"c4-6": {
"hook": "Quan dius que has llegit la meitat d'un llibre o que falta un quart d'hora per sortir, estàs parlant amb fraccions.|Cuando dices que has leído la mitad de un libro o que falta un cuarto de hora para salir, estás hablando con fracciones.",
"parts": [
{
"t": "Meitats i quarts|Mitades y cuartos",
"x": "Una <b>fracció</b> és una part d'un tot que s'ha partit en <b>parts iguals</b>. Si partim en 2, cada part és una meitat (1/2); si partim en 4, cada part és un quart (1/4). Dos quarts fan una meitat, i quatre quarts fan el tot sencer.|Una <b>fracción</b> es una parte de un todo que se ha partido en <b>partes iguales</b>. Si partimos en 2, cada parte es una mitad (1/2); si partimos en 4, cada parte es un cuarto (1/4). Dos cuartos forman una mitad, y cuatro cuartos forman el todo entero.",
"ex": [
"Una pizza en 4 trossos iguals|Una pizza en 4 trozos iguales",
"Cada tros és 1/4 (un quart)|Cada trozo es 1/4 (un cuarto)",
"2 trossos: 2/4 = <span class=\"hl\">1/2</span>, la meitat|2 trozos: 2/4 = <span class=\"hl\">1/2</span>, la mitad"
]
},
{
"t": "Llegir fraccions|Leer fracciones",
"x": "El número de sota, el <b>denominador</b>, diu en quantes parts iguals hem partit el tot. El de dalt, el <b>numerador</b>, diu quantes parts n'agafem. Segons el denominador, les parts es diuen mitjos, terços, quarts, cinquens, sisens, vuitens o desens.|El número de abajo, el <b>denominador</b>, dice en cuántas partes iguales hemos partido el todo. El de arriba, el <b>numerador</b>, dice cuántas partes cogemos. Según el denominador, las partes se llaman medios, tercios, cuartos, quintos, sextos, octavos o décimos.",
"ex": [
"5/8: partim en 8 i n'agafem 5|5/8: partimos en 8 y cogemos 5",
"Queden 3/8 sense agafar|Quedan 3/8 sin coger",
"Es llegeix: <span class=\"hl\">cinc vuitens</span>|Se lee: <span class=\"hl\">cinco octavos</span>"
]
},
{
"t": "La fracció d'un número|La fracción de un número",
"x": "Per calcular una fracció d'una quantitat, primer troba quant val una part: divideix pel denominador. Després multiplica pel numerador, perquè en vols tantes parts com diu el número de dalt.|Para calcular una fracción de una cantidad, primero averigua cuánto vale una parte: divide entre el denominador. Después multiplica por el numerador, porque quieres tantas partes como dice el número de arriba.",
"ex": [
"3/4 de 20 cromos|3/4 de 20 cromos",
"Una part: 20 ÷ 4 = 5|Una parte: 20 ÷ 4 = 5",
"Tres parts: 5 × 3 = 15|Tres partes: 5 × 3 = 15",
"3/4 de 20 = <span class=\"hl\">15</span> cromos|3/4 de 20 = <span class=\"hl\">15</span> cromos"
]
},
{
"t": "Comparar fraccions|Comparar fracciones",
"x": "Si el denominador és el mateix, els trossos són iguals de grans i guanya la fracció que en té més: 5/8 > 3/8. Si el numerador és 1, guanya la de denominador més petit, perquè amb menys parts cada tros és més gran: 1/3 > 1/5. Si dubtes, calcula les dues fraccions d'un mateix número i compara.|Si el denominador es el mismo, los trozos son igual de grandes y gana la fracción que tiene más: 5/8 > 3/8. Si el numerador es 1, gana la de denominador más pequeño, porque con menos partes cada trozo es más grande: 1/3 > 1/5. Si dudas, calcula las dos fracciones de un mismo número y compara.",
"ex": [
"1/2 o 1/3 de 12 caramels?|¿1/2 o 1/3 de 12 caramelos?",
"1/2 de 12 = 12 ÷ 2 = 6|1/2 de 12 = 12 ÷ 2 = 6",
"1/3 de 12 = 12 ÷ 3 = 4|1/3 de 12 = 12 ÷ 3 = 4",
"6 > 4, per tant <span class=\"hl\">1/2 > 1/3</span>|6 > 4, por lo tanto <span class=\"hl\">1/2 > 1/3</span>"
]
}
],
"words": [
[
"fracció|fracción",
"part d'un tot partit en parts iguals|parte de un todo partido en partes iguales"
],
[
"numerador|numerador",
"el número de dalt: quantes parts agafem|el número de arriba: cuántas partes cogemos"
],
[
"denominador|denominador",
"el número de sota: en quantes parts iguals partim|el número de abajo: en cuántas partes iguales partimos"
],
[
"meitat|mitad",
"cadascuna de les 2 parts iguals d'un tot: 1/2|cada una de las 2 partes iguales de un todo: 1/2"
],
[
"quart|cuarto",
"cadascuna de les 4 parts iguals d'un tot: 1/4|cada una de las 4 partes iguales de un todo: 1/4"
]
],
"mistakes": [
[
"«1/4 és més gran que 1/2 perquè 4 és més gran que 2.»|«1/4 es mayor que 1/2 porque 4 es mayor que 2.»",
"És al revés: si partim en més trossos, cada tros és més petit. 1/2 és més gran que 1/4.|Es al revés: si partimos en más trozos, cada trozo es más pequeño. 1/2 es mayor que 1/4."
],
[
"«3/4 de 20: 20 ÷ 3 × 4.»|«3/4 de 20: 20 ÷ 3 × 4.»",
"Divideix pel de sota (4) i multiplica pel de dalt (3): 20 ÷ 4 × 3 = 15.|Divide entre el de abajo (4) y multiplica por el de arriba (3): 20 ÷ 4 × 3 = 15."
],
[
"Dir que és 1/2 quan els dos trossos no són iguals.|Decir que es 1/2 cuando los dos trozos no son iguales.",
"Només és una fracció si totes les parts són iguals.|Solo es una fracción si todas las partes son iguales."
]
],
"recap": [
"Fracció: parts iguals d'un tot.|Fracción: partes iguales de un todo.",
"Sota, en quantes parts; dalt, quantes n'agafem.|Abajo, en cuántas partes; arriba, cuántas cogemos.",
"Fracció d'un número: divideix pel de sota i multiplica pel de dalt.|Fracción de un número: divide entre el de abajo y multiplica por el de arriba.",
"Més parts vol dir trossos més petits.|Más partes quiere decir trozos más pequeños."
],
"tip": "Dibuixa una barra i parteix-la en parts iguals: veuràs de seguida quina fracció és més gran.|Dibuja una barra y pártela en partes iguales: verás enseguida qué fracción es mayor."
},
"c4-7": {
"hook": "Saber a quina hora comença l'entrenament, quant fa la teva taula o quant et tornaran a la botiga: les mesures t'acompanyen tot el dia.|Saber a qué hora empieza el entrenamiento, cuánto mide tu mesa o cuánto te devolverán en la tienda: las medidas te acompañan todo el día.",
"parts": [
{
"t": "Llegir el rellotge|Leer el reloj",
"x": "L'agulla petita marca les hores i la gran, els minuts. Entre número i número del rellotge passen <b>5 minuts</b>: si la gran és al 4, són 4 × 5 = 20 minuts. Un quart d'hora són 15 minuts. En català diem els <b>quarts</b> mirant l'hora que ve: «un quart de sis» vol dir que ja ha passat un quart d'hora de camí cap a les sis.|La aguja pequeña marca las horas y la grande, los minutos. Entre número y número del reloj pasan <b>5 minutos</b>: si la grande está en el 4, son 4 × 5 = 20 minutos. Un <b>cuarto</b> de hora son 15 minutos: por eso decimos «y cuarto», «y media» y «menos cuarto».",
"ex": [
"Un quart de sis = 5:15|Las cinco y cuarto = 5:15",
"Dos quarts de sis = 5:30|Las cinco y media = 5:30",
"Tres quarts de sis = <span class=\"hl\">5:45</span>|Las seis menos cuarto = <span class=\"hl\">5:45</span>"
]
},
{
"t": "Quant dura?|¿Cuánto dura?",
"x": "Una hora té 60 minuts i mitja hora, 30. Per calcular quant dura una activitat, compta a salts: primer fins a l'hora en punt i després la resta. Així no t'equivoques en passar d'una hora a la següent.|Una hora tiene 60 minutos y media hora, 30. Para calcular cuánto dura una actividad, cuenta a saltos: primero hasta la hora en punto y después el resto. Así no te equivocas al pasar de una hora a la siguiente.",
"ex": [
"Entrenament de 5:15 a 6:30|Entrenamiento de 5:15 a 6:30",
"De 5:15 a 6:00: 45 min|De 5:15 a 6:00: 45 min",
"De 6:00 a 6:30: 30 min|De 6:00 a 6:30: 30 min",
"45 + 30 = 75 min = <span class=\"hl\">1 h 15 min</span>|45 + 30 = 75 min = <span class=\"hl\">1 h 15 min</span>"
]
},
{
"t": "Unitats de mesura i diners|Unidades de medida y dinero",
"x": "Per mesurar fem servir unitats grans i petites: 1 m = 100 cm, 1 km = 1.000 m, 1 kg = 1.000 g i 1 l = 1.000 ml. Per passar de la gran a la petita, multiplica. Amb els diners passa igual: 1 € = 100 cèntims. I per saber el canvi, compta des del preu fins al que pagues: si un llibre fa 13 € i pagues amb 20 €, et tornen 7 €.|Para medir usamos unidades grandes y pequeñas: 1 m = 100 cm, 1 km = 1.000 m, 1 kg = 1.000 g y 1 l = 1.000 ml. Para pasar de la grande a la pequeña, multiplica. Con el dinero pasa igual: 1 € = 100 céntimos. Y para saber el cambio, cuenta desde el precio hasta lo que pagas: si un libro cuesta 13 € y pagas con 20 €, te devuelven 7 €.",
"ex": [
"3 m i 45 cm en centímetres|3 m y 45 cm en centímetros",
"3 m = 3 × 100 = 300 cm|3 m = 3 × 100 = 300 cm",
"300 cm + 45 cm = <span class=\"hl\">345 cm</span>|300 cm + 45 cm = <span class=\"hl\">345 cm</span>"
]
},
{
"t": "Formes i perímetre|Formas y perímetro",
"x": "Els polígons s'anomenen pel nombre de costats: triangle (3), quadrilàter (4), pentàgon (5), hexàgon (6) i octàgon (8). El <b>perímetre</b> és la longitud de la vora, la suma de tots els costats: és el que caminaries si fessis la volta a la figura.|Los polígonos se nombran por el número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6) y octágono (8). El <b>perímetro</b> es la longitud del borde, la suma de todos los lados: es lo que caminarías si dieras la vuelta a la figura.",
"ex": [
"Rectangle de 8 cm i 5 cm|Rectángulo de 8 cm y 5 cm",
"8 + 5 + 8 + 5|8 + 5 + 8 + 5",
"Perímetre = <span class=\"hl\">26 cm</span>|Perímetro = <span class=\"hl\">26 cm</span>"
]
}
],
"words": [
[
"quart d'hora|cuarto de hora",
"15 minuts|15 minutos"
],
[
"durada|duración",
"el temps que passa des que una cosa comença fins que acaba|el tiempo que pasa desde que algo empieza hasta que acaba"
],
[
"quilòmetre|kilómetro",
"1.000 metres|1.000 metros"
],
[
"polígon|polígono",
"figura plana i tancada amb costats rectes|figura plana y cerrada con lados rectos"
],
[
"perímetre|perímetro",
"la suma de tots els costats d'una figura|la suma de todos los lados de una figura"
]
],
"mistakes": [
[
"«Tres quarts de sis són les 6:45.»|«Las seis menos cuarto son las 6:45.»",
"Encara no són les sis: en falta un quart. Són les 5:45.|Todavía no son las seis: falta un cuarto. Son las 5:45."
],
[
"«Una hora té 100 minuts, com un metre té 100 cm.»|«Una hora tiene 100 minutos, como un metro tiene 100 cm.»",
"Una hora en té 60. Per això de 5:45 a 6:15 passen 30 minuts: 15 fins a les 6 i 15 més.|Una hora tiene 60. Por eso de 5:45 a 6:15 pasan 30 minutos: 15 hasta las 6 y 15 más."
],
[
"«Perímetre d'un rectangle de 8 cm i 5 cm: 8 + 5 = 13 cm.»|«Perímetro de un rectángulo de 8 cm y 5 cm: 8 + 5 = 13 cm.»",
"Un rectangle té 4 costats, no 2: 8 + 5 + 8 + 5 = 26 cm.|Un rectángulo tiene 4 lados, no 2: 8 + 5 + 8 + 5 = 26 cm."
]
],
"recap": [
"Cada número del rellotge són 5 minuts.|Cada número del reloj son 5 minutos.",
"1 h = 60 min · 1 m = 100 cm · 1 kg = 1.000 g|1 h = 60 min · 1 m = 100 cm · 1 kg = 1.000 g",
"Abans de sumar, passa-ho tot a la mateixa unitat.|Antes de sumar, pásalo todo a la misma unidad.",
"Perímetre = suma de tots els costats.|Perímetro = suma de todos los lados."
],
"tip": "Abans de sumar mesures, passa-ho tot a la mateixa unitat: 2 m i 30 cm no són 32, són 230 cm.|Antes de sumar medidas, pásalo todo a la misma unidad: 2 m y 30 cm no son 32, son 230 cm."
},
"c4-8": {
"hook": "Els videojocs, els mapes i els robots funcionen amb el que aprendràs aquí: saber on és cada cosa, com és i com donar ordres ben clares.|Los videojuegos, los mapas y los robots funcionan con lo que aprenderás aquí: saber dónde está cada cosa, cómo es y cómo dar órdenes bien claras.",
"parts": [
{
"t": "Coordenades|Coordenadas",
"x": "Una quadrícula té columnes, amb lletres, i files, amb números. Per dir on és una casella donem una <b>coordenada</b>: primer la lletra de la columna i després el número de la fila, com B3. Així cada casella té un nom que no es repeteix, com al joc d'enfonsar vaixells.|Una cuadrícula tiene columnas, con letras, y filas, con números. Para decir dónde está una casilla damos una <b>coordenada</b>: primero la letra de la columna y después el número de la fila, como B3. Así cada casilla tiene un nombre que no se repite, como en el juego de hundir la flota.",
"ex": [
"On és la casella C2?|¿Dónde está la casilla C2?",
"Busca la columna C|Busca la columna C",
"Baixa fins a la fila 2|Baja hasta la fila 2",
"On es creuen, hi ha la <span class=\"hl\">C2</span>|Donde se cruzan está la <span class=\"hl\">C2</span>"
]
},
{
"t": "Simetria|Simetría",
"x": "Una figura és <b>simètrica</b> si una línia, l'<b>eix de simetria</b>, la parteix en dues meitats que coincideixen quan la doblegues, com si hi posessis un mirall. Cada punt té la seva parella a l'altre costat de l'eix, a la mateixa distància. Algunes figures en tenen més d'un: el rectangle en té 2 i el quadrat, 4.|Una figura es <b>simétrica</b> si una línea, el <b>eje de simetría</b>, la parte en dos mitades que coinciden al doblarla, como si le pusieras un espejo. Cada punto tiene su pareja al otro lado del eje, a la misma distancia. Algunas figuras tienen más de uno: el rectángulo tiene 2 y el cuadrado, 4.",
"ex": [
"Doblega un quadrat per la meitat|Dobla un cuadrado por la mitad",
"Vertical i horitzontal: 2 eixos|Vertical y horizontal: 2 ejes",
"Les dues diagonals: 2 eixos més|Las dos diagonales: 2 ejes más",
"El quadrat té <span class=\"hl\">4</span> eixos|El cuadrado tiene <span class=\"hl\">4</span> ejes"
]
},
{
"t": "Cares, vèrtexs i arestes|Caras, vértices y aristas",
"x": "Els <b>cossos geomètrics</b> no són plans: ocupen espai. Les <b>cares</b> són les superfícies planes, les <b>arestes</b> són les línies on es troben dues cares i els <b>vèrtexs</b> són les puntes on es troben les arestes. Un cub té 6 cares, 8 vèrtexs i 12 arestes. L'esfera i el cilindre tenen superfícies corbes i poden rodolar.|Los <b>cuerpos geométricos</b> no son planos: ocupan espacio. Las <b>caras</b> son las superficies planas, las <b>aristas</b> son las líneas donde se juntan dos caras y los <b>vértices</b> son las puntas donde se juntan las aristas. Un cubo tiene 6 caras, 8 vértices y 12 aristas. La esfera y el cilindro tienen superficies curvas y pueden rodar.",
"ex": [
"Piràmide de base quadrada|Pirámide de base cuadrada",
"Cares: 1 base + 4 triangles = 5|Caras: 1 base + 4 triángulos = 5",
"Vèrtexs: 4 a la base + 1 a dalt = 5|Vértices: 4 en la base + 1 arriba = 5",
"Arestes: 4 a la base + 4 laterals = <span class=\"hl\">8</span>|Aristas: 4 en la base + 4 laterales = <span class=\"hl\">8</span>"
]
},
{
"t": "Algorismes i bucles|Algoritmos y bucles",
"x": "Un <b>algorisme</b> és una llista d'ordres, en un ordre concret, per aconseguir una cosa, com les fletxes que segueix un robot: → avança a la dreta, ↑ puja. Si una ordre es repeteix, fem un <b>bucle</b>: «repeteix 4 vegades» ens estalvia escriure-la 4 cops. Per saber què fa un programa, segueix-lo pas a pas.|Un <b>algoritmo</b> es una lista de órdenes, en un orden concreto, para conseguir algo, como las flechas que sigue un robot: → avanza a la derecha, ↑ sube. Si una orden se repite, hacemos un <b>bucle</b>: «repite 4 veces» nos ahorra escribirla 4 veces. Para saber qué hace un programa, síguelo paso a paso.",
"ex": [
"n = 3; repeteix 3 vegades: n = n × 2|n = 3; repite 3 veces: n = n × 2",
"Volta 1: 3 × 2 = 6|Vuelta 1: 3 × 2 = 6",
"Volta 2: 6 × 2 = 12|Vuelta 2: 6 × 2 = 12",
"Volta 3: 12 × 2 = 24|Vuelta 3: 12 × 2 = 24",
"Al final, n = <span class=\"hl\">24</span>|Al final, n = <span class=\"hl\">24</span>"
]
}
],
"words": [
[
"coordenada|coordenada",
"lletra i número que diuen on és una casella|letra y número que dicen dónde está una casilla"
],
[
"eix de simetria|eje de simetría",
"línia que parteix una figura en dues meitats iguals, com un mirall|línea que parte una figura en dos mitades iguales, como un espejo"
],
[
"aresta|arista",
"línia on es troben dues cares d'un cos|línea donde se juntan dos caras de un cuerpo"
],
[
"algorisme|algoritmo",
"llista ordenada d'ordres per aconseguir una cosa|lista ordenada de órdenes para conseguir algo"
],
[
"bucle|bucle",
"ordres que es repeteixen un nombre de vegades|órdenes que se repiten un número de veces"
]
],
"mistakes": [
[
"Buscar primer la fila i després la columna.|Buscar primero la fila y después la columna.",
"A B3, primer la lletra (columna B) i després el número (fila 3). Si ho gires, arribes a una altra casella.|En B3, primero la letra (columna B) y después el número (fila 3). Si lo cambias, llegas a otra casilla."
],
[
"«El rectangle té 4 eixos, com el quadrat.»|«El rectángulo tiene 4 ejes, como el cuadrado.»",
"Si el doblegues per la diagonal, les meitats no coincideixen. El rectangle només en té 2.|Si lo doblas por la diagonal, las mitades no coinciden. El rectángulo solo tiene 2."
],
[
"«Repeteix 3 vegades: avança 2» són 5 passos.|«Repite 3 veces: avanza 2» son 5 pasos.",
"Es repeteix 3 cops el mateix: 2 + 2 + 2 = 3 × 2 = 6 passos.|Se repite 3 veces lo mismo: 2 + 2 + 2 = 3 × 2 = 6 pasos."
]
],
"recap": [
"Coordenada: primer la columna, després la fila.|Coordenada: primero la columna, después la fila.",
"L'eix de simetria parteix la figura en dues meitats iguals.|El eje de simetría parte la figura en dos mitades iguales.",
"Un cub té 6 cares, 8 vèrtexs i 12 arestes.|Un cubo tiene 6 caras, 8 vértices y 12 aristas.",
"Un bucle repeteix ordres: segueix-lo volta a volta.|Un bucle repite órdenes: síguelo vuelta a vuelta."
],
"tip": "Si el robot no arriba on volies, fes el camí amb el dit, ordre per ordre: normalment l'error és en un sol pas.|Si el robot no llega donde querías, haz el camino con el dedo, orden por orden: normalmente el error está en un solo paso."
},
"c4-9": {
"hook": "Quan voteu a classe on anar d'excursió o mires quants gols ha fet el teu equip cada partit, estàs treballant amb dades.|Cuando votáis en clase adónde ir de excursión o miras cuántos goles ha marcado tu equipo en cada partido, estás trabajando con datos.",
"parts": [
{
"t": "Llegir gràfics de barres|Leer gráficos de barras",
"x": "Un <b>gràfic de barres</b> mostra dades perquè es puguin comparar d'un cop d'ull: com més alta és la barra, més gran és el valor. Llegeix el títol, mira què vol dir cada barra i fixa't en l'<b>escala</b>: si cada quadret val 2, una barra de 5 quadrets val 10.|Un <b>gráfico de barras</b> muestra datos para que se puedan comparar de un vistazo: cuanto más alta es la barra, mayor es el valor. Lee el título, mira qué significa cada barra y fíjate en la <b>escala</b>: si cada cuadrito vale 2, una barra de 5 cuadritos vale 10.",
"ex": [
"Esport preferit: futbol 8, bàsquet 5|Deporte preferido: fútbol 8, baloncesto 5",
"Quants més prefereixen el futbol?|¿Cuántos más prefieren el fútbol?",
"8 − 5 = <span class=\"hl\">3</span> més|8 − 5 = <span class=\"hl\">3</span> más"
]
},
{
"t": "Moda i rang|Moda y rango",
"x": "La <b>moda</b> és el valor que surt més vegades; en un gràfic, és la barra més alta. El <b>rang</b> és la diferència entre el valor més gran i el més petit: et diu com de separades estan les dades.|La <b>moda</b> es el valor que sale más veces; en un gráfico, es la barra más alta. El <b>rango</b> es la diferencia entre el valor mayor y el menor: te dice lo separados que están los datos.",
"ex": [
"Gols: 2, 5, 3, 5, 1|Goles: 2, 5, 3, 5, 1",
"Moda: <span class=\"hl\">5</span> (surt 2 vegades)|Moda: <span class=\"hl\">5</span> (sale 2 veces)",
"Rang: 5 − 1 = <span class=\"hl\">4</span>|Rango: 5 − 1 = <span class=\"hl\">4</span>"
]
},
{
"t": "Probabilitat|Probabilidad",
"x": "Una cosa pot ser <b>impossible</b> (no passarà mai), <b>possible</b> (pot passar o no) o <b>segura</b> (passarà sempre). Com més casos l'afavoreixen, més probable és. Ho podem escriure amb una fracció: casos favorables entre casos possibles.|Algo puede ser <b>imposible</b> (no pasará nunca), <b>posible</b> (puede pasar o no) o <b>seguro</b> (pasará siempre). Cuantos más casos lo favorecen, más probable es. Lo podemos escribir con una fracción: casos favorables entre casos posibles.",
"ex": [
"Dau: treure un número parell|Dado: sacar un número par",
"Favorables: 2, 4 i 6 → 3 casos|Favorables: 2, 4 y 6 → 3 casos",
"Possibles: 6 cares|Posibles: 6 caras",
"Probabilitat: <span class=\"hl\">3/6</span>, la meitat|Probabilidad: <span class=\"hl\">3/6</span>, la mitad"
]
},
{
"t": "La mitjana|La media",
"x": "La <b>mitjana</b> és el valor que tindria cada dada si ho repartíssim tot a parts iguals. Per això se sumen totes les dades i es divideix el total entre quantes dades hi ha. La mitjana sempre queda entre el valor més petit i el més gran.|La <b>media</b> es el valor que tendría cada dato si lo repartiéramos todo a partes iguales. Por eso se suman todos los datos y se divide el total entre cuántos datos hay. La media siempre queda entre el valor menor y el mayor.",
"ex": [
"Punts: 4, 7, 6 i 3|Puntos: 4, 7, 6 y 3",
"4 + 7 + 6 + 3 = 20|4 + 7 + 6 + 3 = 20",
"Hi ha 4 dades: 20 ÷ 4 = 5|Hay 4 datos: 20 ÷ 4 = 5",
"Mitjana: <span class=\"hl\">5</span> punts|Media: <span class=\"hl\">5</span> puntos"
]
}
],
"words": [
[
"moda|moda",
"el valor que es repeteix més|el valor que más se repite"
],
[
"rang|rango",
"el valor més gran menys el més petit|el valor mayor menos el menor"
],
[
"mitjana|media",
"la suma de les dades dividida entre quantes dades hi ha|la suma de los datos dividida entre cuántos datos hay"
],
[
"escala|escala",
"el que val cada quadret o ratlla d'un gràfic|lo que vale cada cuadrito o raya de un gráfico"
],
[
"probabilitat|probabilidad",
"com de fàcil és que passi una cosa|lo fácil que es que pase algo"
]
],
"mistakes": [
[
"«La moda és el número més gran.»|«La moda es el número más grande.»",
"La moda és el que es repeteix més. A 7, 2, 4, 2 la moda és el 2, encara que el més gran sigui el 7.|La moda es lo que más se repite. En 7, 2, 4, 2 la moda es el 2, aunque el mayor sea el 7."
],
[
"«Mitjana de 4, 7, 6 i 3: 20 ÷ 2 = 10.»|«Media de 4, 7, 6 y 3: 20 ÷ 2 = 10.»",
"Divideix entre quantes dades hi ha, que són 4: 20 ÷ 4 = 5.|Divide entre cuántos datos hay, que son 4: 20 ÷ 4 = 5."
],
[
"«Si hi ha 1 bola vermella entre 10, és impossible treure-la.»|«Si hay 1 bola roja entre 10, es imposible sacarla.»",
"És poc probable, però possible: hi ha 1 cas favorable de 10.|Es poco probable, pero posible: hay 1 caso favorable de 10."
]
],
"recap": [
"Mira sempre el títol i l'escala del gràfic.|Mira siempre el título y la escala del gráfico.",
"Moda: el que més es repeteix. Rang: el més gran menys el més petit.|Moda: lo que más se repite. Rango: el mayor menos el menor.",
"Probabilitat: casos favorables entre casos possibles.|Probabilidad: casos favorables entre casos posibles.",
"Mitjana: suma-ho tot i divideix entre quantes dades hi ha.|Media: súmalo todo y divide entre cuántos datos hay."
],
"tip": "Per comprovar una mitjana, mira que quedi entre el valor més petit i el més gran. Si no hi queda, t'has equivocat en algun pas.|Para comprobar una media, mira que quede entre el valor menor y el mayor. Si no queda ahí, te has equivocado en algún paso."
},
"c4-10": {
"hook": "Quant costarà el berenar de la festa? Quantes taules caldran per als convidats? Cada dia resols problemes, i aquí aprendràs un mètode per no perdre't mai.|¿Cuánto costará la merienda de la fiesta? ¿Cuántas mesas harán falta para los invitados? Cada día resuelves problemas, y aquí aprenderás un método para no perderte nunca.",
"parts": [
{
"t": "Llegir i triar l'operació|Leer y elegir la operación",
"x": "Llegeix el problema dues vegades. Separa les <b>dades</b> (els números que et donen) de la <b>pregunta</b> (el que has de trobar). Després pensa què passa a la història: si s'ajunta, sumes; si es treu o es compara, restes.|Lee el problema dos veces. Separa los <b>datos</b> (los números que te dan) de la <b>pregunta</b> (lo que tienes que encontrar). Después piensa qué pasa en la historia: si se junta, sumas; si se quita o se compara, restas.",
"ex": [
"Hi ha 1.250 llibres i en presten 380|Hay 1.250 libros y prestan 380",
"Pregunta: quants en queden?|Pregunta: ¿cuántos quedan?",
"Es treuen → restar|Se quitan → restar",
"1.250 − 380 = <span class=\"hl\">870</span> llibres|1.250 − 380 = <span class=\"hl\">870</span> libros"
]
},
{
"t": "Problemes de multiplicar|Problemas de multiplicar",
"x": "Quan hi ha <b>grups iguals</b> i vols saber el total, multiplica el nombre de grups per quants n'hi ha a cada grup. Paraules com «cada», «de … en …» o «vegades» sovint t'hi ajuden, però el que mana és entendre la situació.|Cuando hay <b>grupos iguales</b> y quieres saber el total, multiplica el número de grupos por cuántos hay en cada grupo. Palabras como «cada», «de … en …» o «veces» a menudo te ayudan, pero lo que manda es entender la situación.",
"ex": [
"6 capses de 24 retoladors|6 cajas de 24 rotuladores",
"24 × 6 = 20 × 6 + 4 × 6|24 × 6 = 20 × 6 + 4 × 6",
"120 + 24 = <span class=\"hl\">144</span> retoladors|120 + 24 = <span class=\"hl\">144</span> rotuladores"
]
},
{
"t": "Problemes de dividir|Problemas de dividir",
"x": "Divideix quan has de <b>repartir</b> a parts iguals o vols saber <b>quants grups</b> pots fer. Pensa bé què vol dir el residu: de vegades simplement sobra, però de vegades cal un grup més perquè ningú es quedi fora.|Divide cuando tienes que <b>repartir</b> a partes iguales o quieres saber <b>cuántos grupos</b> puedes hacer. Piensa bien qué significa el resto: a veces simplemente sobra, pero a veces hace falta un grupo más para que nadie se quede fuera.",
"ex": [
"30 convidats, taules de 4|30 invitados, mesas de 4",
"30 ÷ 4 = 7 i en sobren 2|30 ÷ 4 = 7 y sobran 2",
"Els 2 també s'han d'asseure|Los 2 también tienen que sentarse",
"Calen <span class=\"hl\">8</span> taules|Hacen falta <span class=\"hl\">8</span> mesas"
]
},
{
"t": "Problemes de dos passos|Problemas de dos pasos",
"x": "Alguns problemes necessiten dues operacions. Troba primer la dada que falta i després respon la pregunta. Amb números grans, estima abans el resultat per saber si el teu càlcul té sentit.|Algunos problemas necesitan dos operaciones. Busca primero el dato que falta y después responde la pregunta. Con números grandes, estima antes el resultado para saber si tu cálculo tiene sentido.",
"ex": [
"3 samarretes de 12 €, pagues amb 50 €|3 camisetas de 12 €, pagas con 50 €",
"Pas 1: 3 × 12 = 36 €|Paso 1: 3 × 12 = 36 €",
"Pas 2: 50 − 36 = 14 €|Paso 2: 50 − 36 = 14 €",
"Et tornen <span class=\"hl\">14 €</span>|Te devuelven <span class=\"hl\">14 €</span>"
]
}
],
"words": [
[
"dada|dato",
"un número o una informació que et dona el problema|un número o una información que te da el problema"
],
[
"pregunta|pregunta",
"el que has de trobar|lo que tienes que encontrar"
],
[
"operació|operación",
"el càlcul que fas: +, −, × o ÷|el cálculo que haces: +, −, × o ÷"
],
[
"solució|solución",
"la resposta a la pregunta, amb la seva unitat|la respuesta a la pregunta, con su unidad"
]
],
"mistakes": [
[
"Triar l'operació per una sola paraula, com «més».|Elegir la operación por una sola palabra, como «más».",
"Entén la història: «quants més en té l'un que l'altre» és comparar, i es resta.|Entiende la historia: «cuántos más tiene uno que otro» es comparar, y se resta."
],
[
"«30 ÷ 4 = 7, calen 7 taules.»|«30 ÷ 4 = 7, hacen falta 7 mesas.»",
"Llavors 2 convidats es queden drets. Amb el residu cal una taula més: 8 taules.|Entonces 2 invitados se quedan de pie. Con el resto hace falta una mesa más: 8 mesas."
],
[
"«3 × 12 = 36, em tornen 36 €.»|«3 × 12 = 36, me devuelven 36 €.»",
"36 € és el que pagues. Falta el segon pas: 50 − 36 = 14 €.|36 € es lo que pagas. Falta el segundo paso: 50 − 36 = 14 €."
]
],
"recap": [
"Llegeix dues vegades: dades i pregunta.|Lee dos veces: datos y pregunta.",
"Ajuntar, sumar; treure, restar; grups iguals, multiplicar; repartir, dividir.|Juntar, sumar; quitar, restar; grupos iguales, multiplicar; repartir, dividir.",
"Pensa què vol dir el residu.|Piensa qué significa el resto.",
"Respon amb una frase i la unitat.|Responde con una frase y la unidad."
],
"tip": "Si t'embolica, fes un dibuix o un esquema ràpid. I al final, torna a llegir la pregunta: has respost el que et demanaven?|Si te lías, haz un dibujo o un esquema rápido. Y al final, vuelve a leer la pregunta: ¿has respondido lo que te pedían?"
},
"c5-1": {
"hook": "Quants habitants té la teva ciutat? Quant costa un pis? Quants seguidors té el teu youtuber preferit? Per llegir aquestes xifres necessites dominar els milers i els milions.|¿Cuántos habitantes tiene tu ciudad? ¿Cuánto cuesta un piso? ¿Cuántos seguidores tiene tu youtuber favorito? Para leer estas cifras necesitas dominar los miles y los millones.",
"parts": [
{
"t": "El valor de posició|El valor de posición",
"x": "Cada xifra val segons el <b>lloc</b> que ocupa. Cada lloc val <b>10 vegades</b> més que el de la seva dreta: 10 unitats fan 1 desena, 10 centenes de miler fan 1 <b>unitat de milió</b> (1.000.000). Per això un 5 pot valer 5 o 50.000.|Cada cifra vale según el <b>lugar</b> que ocupa. Cada lugar vale <b>10 veces</b> más que el de su derecha: 10 unidades hacen 1 decena, 10 centenas de millar hacen 1 <b>unidad de millón</b> (1.000.000). Por eso un 5 puede valer 5 o 50.000.",
"ex": [
"Nombre: 452.318|Número: 452.318",
"4 CM · 5 DM · 2 UM · 3 C · 1 D · 8 U|4 CM · 5 DM · 2 UM · 3 C · 1 D · 8 U",
"400.000 + 50.000 + 2.000 + 300 + 10 + 8|400.000 + 50.000 + 2.000 + 300 + 10 + 8",
"El 5 val <span class=\"hl\">50.000</span>|El 5 vale <span class=\"hl\">50.000</span>"
]
},
{
"t": "Llegir i escriure milions|Leer y escribir millones",
"x": "Separa el nombre en <b>grups de tres xifres</b> començant per la dreta: unitats, milers i milions. El punt marca on acaba cada grup. Llegeix cada grup com un nombre petit i afegeix-hi «milions» o «mil». Si un grup no arriba a tres xifres, s'omple amb zeros.|Separa el número en <b>grupos de tres cifras</b> empezando por la derecha: unidades, miles y millones. El punto marca dónde acaba cada grupo. Lee cada grupo como un número pequeño y añade «millones» o «mil». Si un grupo no llega a tres cifras, se rellena con ceros.",
"ex": [
"3.205.040 → 3 · 205 · 040|3.205.040 → 3 · 205 · 040",
"3 → tres milions|3 → tres millones",
"205 → dos-cents cinc mil|205 → doscientos cinco mil",
"040 → quaranta|040 → cuarenta",
"<span class=\"hl\">tres milions dos-cents cinc mil quaranta</span>|<span class=\"hl\">tres millones doscientos cinco mil cuarenta</span>"
]
},
{
"t": "Comparar i ordenar|Comparar y ordenar",
"x": "Primer compta les xifres: el nombre que en té més és el més gran. Si en tenen les mateixes, compara-les <b>d'esquerra a dreta</b>, lloc per lloc, fins que en trobis una de diferent. Per ordenar una llista, fes el mateix amb tots els nombres.|Primero cuenta las cifras: el número que tiene más es el mayor. Si tienen las mismas, compáralas <b>de izquierda a derecha</b>, lugar por lugar, hasta encontrar una diferente. Para ordenar una lista, haz lo mismo con todos los números.",
"ex": [
"1.250.000 té 7 xifres; 987.654, 6|1.250.000 tiene 7 cifras; 987.654, 6",
"1.250.000 > 987.654|1.250.000 > 987.654",
"345.912 i 345.219: iguals fins a les C|345.912 y 345.219: iguales hasta las C",
"9 C > 2 C → <span class=\"hl\">345.912 > 345.219</span>|9 C > 2 C → <span class=\"hl\">345.912 > 345.219</span>"
]
},
{
"t": "Arrodonir|Redondear",
"x": "Arrodonir és canviar un nombre per un altre de <b>rodó</b> que hi sigui a prop, per fer càlculs ràpids. Mira la xifra <b>just a la dreta</b> del lloc on arrodoneixes: si és 5 o més, puges; si és 4 o menys, et quedes. Les xifres de la dreta passen a ser zeros.|Redondear es cambiar un número por otro <b>redondo</b> que esté cerca, para hacer cálculos rápidos. Mira la cifra <b>justo a la derecha</b> del lugar donde redondeas: si es 5 o más, subes; si es 4 o menos, te quedas. Las cifras de la derecha pasan a ser ceros.",
"ex": [
"348.617 a les unitats de miler|348.617 a las unidades de millar",
"Mira les centenes: 6 → 5 o més, pugem|Mira las centenas: 6 → 5 o más, subimos",
"348.617 ≈ <span class=\"hl\">349.000</span>|348.617 ≈ <span class=\"hl\">349.000</span>",
"A les desenes de miler: ≈ <span class=\"hl\">350.000</span>|A las decenas de millar: ≈ <span class=\"hl\">350.000</span>"
]
}
],
"words": [
[
"valor de posició|valor de posición",
"el que val una xifra segons el lloc on és|lo que vale una cifra según el lugar donde está"
],
[
"unitat de milió|unidad de millón",
"1.000.000: mil vegades mil|1.000.000: mil veces mil"
],
[
"xifra|cifra",
"cadascun dels signes del 0 al 9 que formen un nombre|cada uno de los signos del 0 al 9 que forman un número"
],
[
"arrodonir|redondear",
"canviar un nombre pel nombre rodó més proper|cambiar un número por el número redondo más cercano"
]
],
"mistakes": [
[
"«Tres milions quaranta mil s'escriu 3.40.000.»|«Tres millones cuarenta mil se escribe 3.40.000.»",
"Cada grup ha de tenir tres xifres: 3.040.000. Els zeros guarden el lloc de les centenes de miler.|Cada grupo tiene que tener tres cifras: 3.040.000. Los ceros guardan el lugar de las centenas de millar."
],
[
"«98.500 és més gran que 102.000 perquè comença per 9.»|«98.500 es mayor que 102.000 porque empieza por 9.»",
"Primer compta les xifres: 102.000 en té 6 i 98.500 només 5. Per tant, 102.000 és més gran.|Primero cuenta las cifras: 102.000 tiene 6 y 98.500 solo 5. Por lo tanto, 102.000 es mayor."
],
[
"«Per arrodonir 348.617 als milers miro l'última xifra, el 7.»|«Para redondear 348.617 a los miles miro la última cifra, el 7.»",
"S'ha de mirar la xifra just a la dreta dels milers, que és la de les centenes (6). Per això surt 349.000.|Hay que mirar la cifra justo a la derecha de los miles, que es la de las centenas (6). Por eso sale 349.000."
]
],
"recap": [
"Cada lloc val 10 vegades més que el de la dreta.|Cada lugar vale 10 veces más que el de la derecha.",
"Llegeix per grups de tres: milions, milers, unitats.|Lee por grupos de tres: millones, miles, unidades.",
"Per comparar: primer quantes xifres, després d'esquerra a dreta.|Para comparar: primero cuántas cifras, después de izquierda a derecha.",
"Per arrodonir, mira la xifra de la dreta: 5 o més, puja.|Para redondear, mira la cifra de la derecha: 5 o más, sube."
],
"tip": "El truc del Cavaller: abans de llegir un nombre llarg, posa-hi els punts cada tres xifres des de la dreta. De seguida veuràs si parles de milers o de milions.|El truco del Caballero: antes de leer un número largo, ponle los puntos cada tres cifras desde la derecha. Enseguida verás si hablas de miles o de millones."
},
"c5-2": {
"hook": "Un suc costa 1,35 €, una atleta corre els 100 metres en 10,85 segons i tens 37,2 °C de febre. Els decimals serveixen per dir quantitats que no són nombres sencers.|Un zumo cuesta 1,35 €, una atleta corre los 100 metros en 10,85 segundos y tienes 37,2 °C de fiebre. Los decimales sirven para decir cantidades que no son números enteros.",
"parts": [
{
"t": "Dècimes i centèsimes|Décimas y centésimas",
"x": "Si parteixes una unitat en 10 parts iguals, cada part és una <b>dècima</b> (0,1). Si la parteixes en 100, cada part és una <b>centèsima</b> (0,01). La <b>coma</b> separa la part entera de la part decimal. Com que 1 dècima són 10 centèsimes, 0,3 i 0,30 valen el mateix.|Si partes una unidad en 10 partes iguales, cada parte es una <b>décima</b> (0,1). Si la partes en 100, cada parte es una <b>centésima</b> (0,01). La <b>coma</b> separa la parte entera de la parte decimal. Como 1 décima son 10 centésimas, 0,3 y 0,30 valen lo mismo.",
"ex": [
"3,47 = 3 U + 4 d + 7 c|3,47 = 3 U + 4 d + 7 c",
"Es llegeix: 3 unitats i 47 centèsimes|Se lee: 3 unidades y 47 centésimas",
"En diners: <span class=\"hl\">3 € i 47 cèntims</span>|En dinero: <span class=\"hl\">3 € y 47 céntimos</span>"
]
},
{
"t": "Comparar i ordenar|Comparar y ordenar",
"x": "Primer compara la <b>part entera</b>. Si és igual, compara les dècimes i després les centèsimes. Truc: afegeix zeros al final perquè tinguin les mateixes xifres decimals; un zero al final no canvia el valor. Per ordenar-ne molts, fes el mateix amb tots.|Primero compara la <b>parte entera</b>. Si es igual, compara las décimas y después las centésimas. Truco: añade ceros al final para que tengan las mismas cifras decimales; un cero al final no cambia el valor. Para ordenar muchos, haz lo mismo con todos.",
"ex": [
"2,5 i 2,38: part entera igual (2)|2,5 y 2,38: parte entera igual (2)",
"Iguala: 2,50 i 2,38|Iguala: 2,50 y 2,38",
"5 dècimes > 3 dècimes|5 décimas > 3 décimas",
"<span class=\"hl\">2,5 > 2,38</span>|<span class=\"hl\">2,5 > 2,38</span>"
]
},
{
"t": "Sumar i restar decimals|Sumar y restar decimales",
"x": "Col·loca els nombres amb la <b>coma sota la coma</b>: així sumes dècimes amb dècimes i centèsimes amb centèsimes. Si falten xifres, omple amb zeros. Opera com sempre i baixa la coma al mateix lloc.|Coloca los números con la <b>coma debajo de la coma</b>: así sumas décimas con décimas y centésimas con centésimas. Si faltan cifras, rellena con ceros. Opera como siempre y baja la coma en el mismo lugar.",
"ex": [
"12,6 + 3,45 → 12,60 + 3,45|12,6 + 3,45 → 12,60 + 3,45",
"12,60 + 3,45 = <span class=\"hl\">16,05</span>|12,60 + 3,45 = <span class=\"hl\">16,05</span>",
"5,2 − 1,75 → 5,20 − 1,75|5,2 − 1,75 → 5,20 − 1,75",
"5,20 − 1,75 = <span class=\"hl\">3,45</span>|5,20 − 1,75 = <span class=\"hl\">3,45</span>"
]
},
{
"t": "Per 10, 100 i 1.000|Por 10, 100 y 1.000",
"x": "Multiplicar per 10 fa cada xifra 10 vegades més gran: la coma es mou <b>1 lloc a la dreta</b>. Per 100, 2 llocs; per 1.000, 3 llocs. Si falten xifres, hi poses zeros. Per <b>dividir</b> passa el contrari: la coma es mou a l'<b>esquerra</b>.|Multiplicar por 10 hace cada cifra 10 veces mayor: la coma se mueve <b>1 lugar a la derecha</b>. Por 100, 2 lugares; por 1.000, 3 lugares. Si faltan cifras, pones ceros. Para <b>dividir</b> pasa lo contrario: la coma se mueve a la <b>izquierda</b>.",
"ex": [
"3,25 × 10 = 32,5|3,25 × 10 = 32,5",
"3,25 × 100 = 325|3,25 × 100 = 325",
"3,25 × 1.000 = <span class=\"hl\">3.250</span>|3,25 × 1.000 = <span class=\"hl\">3.250</span>",
"48,6 ÷ 100 = <span class=\"hl\">0,486</span>|48,6 ÷ 100 = <span class=\"hl\">0,486</span>"
]
}
],
"words": [
[
"dècima|décima",
"cadascuna de les 10 parts iguals d'una unitat: 0,1|cada una de las 10 partes iguales de una unidad: 0,1"
],
[
"centèsima|centésima",
"cadascuna de les 100 parts iguals d'una unitat: 0,01|cada una de las 100 partes iguales de una unidad: 0,01"
],
[
"part entera|parte entera",
"les xifres de l'esquerra de la coma|las cifras a la izquierda de la coma"
],
[
"part decimal|parte decimal",
"les xifres de la dreta de la coma|las cifras a la derecha de la coma"
]
],
"mistakes": [
[
"«0,45 és més gran que 0,5 perquè 45 és més gran que 5.»|«0,45 es mayor que 0,5 porque 45 es mayor que 5.»",
"Iguala les xifres: 0,5 = 0,50. Com que 50 centèsimes són més que 45, el més gran és 0,5.|Iguala las cifras: 0,5 = 0,50. Como 50 centésimas son más que 45, el mayor es 0,5."
],
[
"«3,5 + 1,25 = 1,60», alineant les xifres per la dreta.|«3,5 + 1,25 = 1,60», alineando las cifras por la derecha.",
"Alinea les comes: 3,50 + 1,25 = 4,75. Així sumes dècimes amb dècimes.|Alinea las comas: 3,50 + 1,25 = 4,75. Así sumas décimas con décimas."
],
[
"«3,25 × 10 = 3,250, només cal afegir un zero.»|«3,25 × 10 = 3,250, solo hay que añadir un cero.»",
"Amb decimals, un zero al final no canvia res. Has de moure la coma: 3,25 × 10 = 32,5.|Con decimales, un cero al final no cambia nada. Tienes que mover la coma: 3,25 × 10 = 32,5."
]
],
"recap": [
"Dècima = 0,1; centèsima = 0,01.|Décima = 0,1; centésima = 0,01.",
"Per comparar, iguala les xifres decimals amb zeros.|Para comparar, iguala las cifras decimales con ceros.",
"Per sumar i restar, coma sota coma.|Para sumar y restar, coma debajo de coma.",
"× 10, 100, 1.000: coma a la dreta. ÷: coma a l'esquerra.|× 10, 100, 1.000: coma a la derecha. ÷: coma a la izquierda."
],
"tip": "El truc del Cavaller: pensa en euros. 0,5 € són 50 cèntims i 0,45 € en són 45, així veuràs de seguida quin és més gran.|El truco del Caballero: piensa en euros. 0,5 € son 50 céntimos y 0,45 € son 45, así verás enseguida cuál es mayor."
},
"c5-3": {
"hook": "Si 26 alumnes van d'excursió i cada entrada costa 12 €, o si heu de repartir 396 cromos entre 12 amics, necessites multiplicar i dividir amb nombres grans.|Si 26 alumnos van de excursión y cada entrada cuesta 12 €, o si tenéis que repartir 396 cromos entre 12 amigos, necesitas multiplicar y dividir con números grandes.",
"parts": [
{
"t": "Multiplicacions grans|Multiplicaciones grandes",
"x": "Per multiplicar per un nombre de dues xifres, el separes en <b>desenes i unitats</b> i fas dues multiplicacions més fàcils. Després sumes els resultats. Funciona perquè 26 és el mateix que 20 + 6.|Para multiplicar por un número de dos cifras, lo separas en <b>decenas y unidades</b> y haces dos multiplicaciones más fáciles. Después sumas los resultados. Funciona porque 26 es lo mismo que 20 + 6.",
"ex": [
"234 × 26 = 234 × 6 + 234 × 20|234 × 26 = 234 × 6 + 234 × 20",
"234 × 6 = 1.404|234 × 6 = 1.404",
"234 × 20 = 4.680|234 × 20 = 4.680",
"1.404 + 4.680 = <span class=\"hl\">6.084</span>|1.404 + 4.680 = <span class=\"hl\">6.084</span>"
]
},
{
"t": "Dividir per una xifra|Dividir entre una cifra",
"x": "Dividir és <b>repartir en parts iguals</b>. El <b>dividend</b> és el que reparteixes, el <b>divisor</b> entre quants, el <b>quocient</b> el que toca a cadascú i el <b>residu</b> el que sobra. Es fa d'esquerra a dreta, xifra a xifra, i el residu sempre ha de ser més petit que el divisor.|Dividir es <b>repartir en partes iguales</b>. El <b>dividendo</b> es lo que repartes, el <b>divisor</b> entre cuántos, el <b>cociente</b> lo que toca a cada uno y el <b>resto</b> lo que sobra. Se hace de izquierda a derecha, cifra a cifra, y el resto siempre tiene que ser menor que el divisor.",
"ex": [
"875 ÷ 4: 8 ÷ 4 = 2|875 ÷ 4: 8 ÷ 4 = 2",
"7 ÷ 4 = 1 i sobren 3|7 ÷ 4 = 1 y sobran 3",
"35 ÷ 4 = 8 i sobren 3|35 ÷ 4 = 8 y sobran 3",
"Quocient <span class=\"hl\">218</span>, residu <span class=\"hl\">3</span>|Cociente <span class=\"hl\">218</span>, resto <span class=\"hl\">3</span>"
]
},
{
"t": "Dividir per dues xifres|Dividir entre dos cifras",
"x": "Agafa tantes xifres del dividend com calgui perquè el divisor hi càpiga. Per saber quantes vegades hi cap, <b>estima</b>: prova amb la taula. Al final, fes la prova: divisor × quocient + residu ha de donar el dividend.|Coge tantas cifras del dividendo como haga falta para que el divisor quepa. Para saber cuántas veces cabe, <b>estima</b>: prueba con la tabla. Al final, haz la prueba: divisor × cociente + resto tiene que dar el dividendo.",
"ex": [
"396 ÷ 12: 39 ÷ 12 = 3, sobren 3|396 ÷ 12: 39 ÷ 12 = 3, sobran 3",
"Baixem el 6: 36 ÷ 12 = 3, sobren 0|Bajamos el 6: 36 ÷ 12 = 3, sobran 0",
"Quocient <span class=\"hl\">33</span>, residu 0|Cociente <span class=\"hl\">33</span>, resto 0",
"Prova: 12 × 33 = 396|Prueba: 12 × 33 = 396"
]
},
{
"t": "Operacions combinades|Operaciones combinadas",
"x": "Quan hi ha diverses operacions, cal seguir un <b>ordre</b> perquè tothom obtingui el mateix resultat: primer els <b>parèntesis</b>, després les multiplicacions i divisions, i al final les sumes i restes, d'esquerra a dreta.|Cuando hay varias operaciones, hay que seguir un <b>orden</b> para que todo el mundo obtenga el mismo resultado: primero los <b>paréntesis</b>, después las multiplicaciones y divisiones, y al final las sumas y restas, de izquierda a derecha.",
"ex": [
"20 − 3 × 4 + 6|20 − 3 × 4 + 6",
"= 20 − 12 + 6 = <span class=\"hl\">14</span>|= 20 − 12 + 6 = <span class=\"hl\">14</span>",
"(20 − 3) × 4|(20 − 3) × 4",
"= 17 × 4 = <span class=\"hl\">68</span>|= 17 × 4 = <span class=\"hl\">68</span>"
]
}
],
"words": [
[
"dividend|dividendo",
"el nombre que es reparteix|el número que se reparte"
],
[
"divisor|divisor",
"el nombre entre el qual es divideix|el número entre el que se divide"
],
[
"quocient|cociente",
"el resultat de la divisió|el resultado de la división"
],
[
"residu|resto",
"el que sobra; sempre més petit que el divisor|lo que sobra; siempre menor que el divisor"
],
[
"prioritat|prioridad",
"l'ordre en què es fan les operacions|el orden en que se hacen las operaciones"
]
],
"mistakes": [
[
"«234 × 26: faig 234 × 2 = 468 i ho sumo a 1.404.»|«234 × 26: hago 234 × 2 = 468 y lo sumo a 1.404.»",
"Aquell 2 són 2 desenes, és a dir, 20. Has de fer 234 × 20 = 4.680 (o deixar un zero a la dreta).|Ese 2 son 2 decenas, es decir, 20. Tienes que hacer 234 × 20 = 4.680 (o dejar un cero a la derecha)."
],
[
"«3 + 4 × 2 = 14, perquè vaig d'esquerra a dreta.»|«3 + 4 × 2 = 14, porque voy de izquierda a derecha.»",
"La multiplicació va primer: 4 × 2 = 8 i 3 + 8 = 11.|La multiplicación va primero: 4 × 2 = 8 y 3 + 8 = 11."
],
[
"Deixar un residu més gran que el divisor, com 35 ÷ 4 = 7 i sobren 7.|Dejar un resto mayor que el divisor, como 35 ÷ 4 = 7 y sobran 7.",
"Si sobra més que el divisor, encara hi cap una vegada més: 35 ÷ 4 = 8 i sobren 3.|Si sobra más que el divisor, todavía cabe una vez más: 35 ÷ 4 = 8 y sobran 3."
]
],
"recap": [
"Per multiplicar per dues xifres, separa desenes i unitats.|Para multiplicar por dos cifras, separa decenas y unidades.",
"El residu sempre és més petit que el divisor.|El resto siempre es menor que el divisor.",
"Prova: divisor × quocient + residu = dividend.|Prueba: divisor × cociente + resto = dividendo.",
"Ordre: parèntesis, × i ÷, i al final + i −.|Orden: paréntesis, × y ÷, y al final + y −."
],
"tip": "El truc del Cavaller: abans de calcular, estima. 234 × 26 és a prop de 200 × 30 = 6.000, així que 6.084 té sentit i 1.872 no.|El truco del Caballero: antes de calcular, estima. 234 × 26 está cerca de 200 × 30 = 6.000, así que 6.084 tiene sentido y 1.872 no."
},
"c5-4": {
"hook": "Si vols fer equips iguals amb els 24 alumnes de la classe, o saber cada quants dies coincidiràs amb un amic a la piscina, necessites múltiples i divisors.|Si quieres hacer equipos iguales con los 24 alumnos de la clase, o saber cada cuántos días coincidirás con un amigo en la piscina, necesitas múltiplos y divisores.",
"parts": [
{
"t": "Múltiples|Múltiplos",
"x": "Els <b>múltiples</b> d'un nombre s'obtenen multiplicant-lo per 1, 2, 3, 4... És a dir, són els resultats de la seva taula. Com que pots multiplicar sense parar, un nombre té <b>infinits</b> múltiples.|Los <b>múltiplos</b> de un número se obtienen multiplicándolo por 1, 2, 3, 4... Es decir, son los resultados de su tabla. Como puedes multiplicar sin parar, un número tiene <b>infinitos</b> múltiplos.",
"ex": [
"Múltiples de 6: 6 × 1, 6 × 2, 6 × 3...|Múltiplos de 6: 6 × 1, 6 × 2, 6 × 3...",
"6, 12, 18, 24, 30, 36, 42...|6, 12, 18, 24, 30, 36, 42...",
"42 és múltiple de 6? 6 × 7 = 42 → <span class=\"hl\">sí</span>|¿42 es múltiplo de 6? 6 × 7 = 42 → <span class=\"hl\">sí</span>"
]
},
{
"t": "Divisors|Divisores",
"x": "Un <b>divisor</b> d'un nombre el divideix <b>exactament</b>, amb residu 0. Per trobar-los tots, busca parelles que multiplicades donin el nombre. Fixa't: si 3 és divisor de 18, llavors 18 és múltiple de 3. Un nombre té pocs divisors: mai no són més grans que ell.|Un <b>divisor</b> de un número lo divide <b>exactamente</b>, con resto 0. Para encontrarlos todos, busca parejas que multiplicadas den el número. Fíjate: si 3 es divisor de 18, entonces 18 es múltiplo de 3. Un número tiene pocos divisores: nunca son mayores que él.",
"ex": [
"Divisors de 18: busca parelles|Divisores de 18: busca parejas",
"1 × 18 · 2 × 9 · 3 × 6|1 × 18 · 2 × 9 · 3 × 6",
"Divisors: <span class=\"hl\">1, 2, 3, 6, 9 i 18</span>|Divisores: <span class=\"hl\">1, 2, 3, 6, 9 y 18</span>"
]
},
{
"t": "Nombres primers|Números primos",
"x": "Un nombre <b>primer</b> només té <b>dos divisors</b>: l'1 i ell mateix. Si en té més, és <b>compost</b>. L'1 no és primer, perquè només té un divisor. El 2 és l'únic primer parell: tots els altres parells es poden dividir per 2.|Un número <b>primo</b> solo tiene <b>dos divisores</b>: el 1 y él mismo. Si tiene más, es <b>compuesto</b>. El 1 no es primo, porque solo tiene un divisor. El 2 es el único primo par: todos los demás pares se pueden dividir entre 2.",
"ex": [
"13 → divisors 1 i 13 → primer|13 → divisores 1 y 13 → primo",
"15 → divisors 1, 3, 5, 15 → compost|15 → divisores 1, 3, 5, 15 → compuesto",
"Primers fins a 20:|Primos hasta 20:",
"<span class=\"hl\">2, 3, 5, 7, 11, 13, 17, 19</span>|<span class=\"hl\">2, 3, 5, 7, 11, 13, 17, 19</span>"
]
},
{
"t": "Criteris de divisibilitat|Criterios de divisibilidad",
"x": "Són trucs per saber si una divisió serà exacta sense fer-la. Per <b>2</b>: acaba en 0, 2, 4, 6 o 8. Per <b>5</b>: acaba en 0 o 5. Per <b>10</b>: acaba en 0. Per <b>3</b>: la suma de les xifres és múltiple de 3. Per 2, 5 i 10 n'hi ha prou amb l'última xifra perquè les desenes, centenes... ja són múltiples de 10.|Son trucos para saber si una división será exacta sin hacerla. Entre <b>2</b>: acaba en 0, 2, 4, 6 u 8. Entre <b>5</b>: acaba en 0 o 5. Entre <b>10</b>: acaba en 0. Entre <b>3</b>: la suma de las cifras es múltiplo de 3. Para 2, 5 y 10 basta con la última cifra porque las decenas, centenas... ya son múltiplos de 10.",
"ex": [
"234 és divisible per 3?|¿234 es divisible entre 3?",
"2 + 3 + 4 = 9, i 9 és múltiple de 3|2 + 3 + 4 = 9, y 9 es múltiplo de 3",
"Sí: 234 ÷ 3 = <span class=\"hl\">78</span>|Sí: 234 ÷ 3 = <span class=\"hl\">78</span>",
"235 acaba en 5 → divisible per 5|235 acaba en 5 → divisible entre 5"
]
}
],
"words": [
[
"múltiple|múltiplo",
"el resultat de multiplicar un nombre per 1, 2, 3...|el resultado de multiplicar un número por 1, 2, 3..."
],
[
"divisor|divisor",
"nombre que en divideix un altre de manera exacta|número que divide a otro de forma exacta"
],
[
"nombre primer|número primo",
"només té dos divisors: l'1 i ell mateix|solo tiene dos divisores: el 1 y él mismo"
],
[
"nombre compost|número compuesto",
"té més de dos divisors|tiene más de dos divisores"
],
[
"divisible|divisible",
"que es pot dividir exactament, amb residu 0|que se puede dividir exactamente, con resto 0"
]
],
"mistakes": [
[
"«L'1 és primer perquè només es divideix per 1 i per ell mateix.»|«El 1 es primo porque solo se divide entre 1 y entre sí mismo.»",
"L'1 i ell mateix són el mateix nombre: només té un divisor. Un primer n'ha de tenir exactament dos.|El 1 y él mismo son el mismo número: solo tiene un divisor. Un primo tiene que tener exactamente dos."
],
[
"«Els múltiples de 12 són 1, 2, 3, 4, 6 i 12.»|«Los múltiplos de 12 son 1, 2, 3, 4, 6 y 12.»",
"Aquests són els divisors. Els múltiples surten de la taula: 12, 24, 36, 48...|Esos son los divisores. Los múltiplos salen de la tabla: 12, 24, 36, 48..."
],
[
"«13 és divisible per 3 perquè acaba en 3.»|«13 es divisible entre 3 porque acaba en 3.»",
"Per 3 cal sumar les xifres: 1 + 3 = 4, que no és múltiple de 3. Per tant, 13 no és divisible per 3.|Para el 3 hay que sumar las cifras: 1 + 3 = 4, que no es múltiplo de 3. Por lo tanto, 13 no es divisible entre 3."
]
],
"recap": [
"Múltiples: la taula del nombre. N'hi ha infinits.|Múltiplos: la tabla del número. Hay infinitos.",
"Divisors: divideixen exactament. Busca'ls per parelles.|Divisores: dividen exactamente. Búscalos por parejas.",
"Primer: exactament dos divisors. L'1 no és primer.|Primo: exactamente dos divisores. El 1 no es primo.",
"Per 3, suma les xifres; per 2, 5 i 10, mira l'última.|Para el 3, suma las cifras; para 2, 5 y 10, mira la última."
],
"tip": "El truc del Cavaller: els múltiples són molts i es fan grans (multipliquen); els divisors són pocs i petits (divideixen). Si t'embolices, pensa en la paraula.|El truco del Caballero: los múltiplos son muchos y se hacen grandes (multiplican); los divisores son pocos y pequeños (dividen). Si te lías, piensa en la palabra."
},
"c5-5": {
"hook": "Una recepta demana 3/4 de got de llet, un partit dura 2/3 d'hora i en una botiga hi ha 1/4 de descompte. Les fraccions són a tot arreu quan repartim o mesurem.|Una receta pide 3/4 de vaso de leche, un partido dura 2/3 de hora y en una tienda hay 1/4 de descuento. Las fracciones están por todas partes cuando repartimos o medimos.",
"parts": [
{
"t": "Equivalents i simplificar|Equivalentes y simplificar",
"x": "Dues fraccions són <b>equivalents</b> si representen la mateixa quantitat: 1/2 d'una pizza és el mateix que 2/4. Les obtens <b>multiplicant o dividint</b> el numerador i el denominador pel mateix nombre. <b>Simplificar</b> és dividir tots dos fins que no es pugui més: llavors la fracció és <b>irreductible</b>.|Dos fracciones son <b>equivalentes</b> si representan la misma cantidad: 1/2 de una pizza es lo mismo que 2/4. Las obtienes <b>multiplicando o dividiendo</b> el numerador y el denominador por el mismo número. <b>Simplificar</b> es dividir los dos hasta que no se pueda más: entonces la fracción es <b>irreducible</b>.",
"ex": [
"2/3 → × 4 dalt i baix → 8/12|2/3 → × 4 arriba y abajo → 8/12",
"Simplifica 12/18|Simplifica 12/18",
"÷ 2 → 6/9 · ÷ 3 → 2/3|÷ 2 → 6/9 · ÷ 3 → 2/3",
"12/18 = <span class=\"hl\">2/3</span> (irreductible)|12/18 = <span class=\"hl\">2/3</span> (irreducible)"
]
},
{
"t": "Comparar fraccions|Comparar fracciones",
"x": "Amb el <b>mateix denominador</b>, és més gran la que té el numerador més gran (més trossos iguals). Amb el <b>mateix numerador</b>, és més gran la de denominador més petit (trossos més grans). Si no tenen res igual, busca una fracció equivalent perquè tinguin el mateix denominador.|Con el <b>mismo denominador</b>, es mayor la que tiene el numerador mayor (más trozos iguales). Con el <b>mismo numerador</b>, es mayor la de denominador menor (trozos más grandes). Si no tienen nada igual, busca una fracción equivalente para que tengan el mismo denominador.",
"ex": [
"Compara 3/4 i 5/8|Compara 3/4 y 5/8",
"3/4 = 6/8 (× 2 dalt i baix)|3/4 = 6/8 (× 2 arriba y abajo)",
"6/8 > 5/8|6/8 > 5/8",
"<span class=\"hl\">3/4 > 5/8</span>|<span class=\"hl\">3/4 > 5/8</span>"
]
},
{
"t": "Sumar i restar|Sumar y restar",
"x": "Si dues fraccions tenen el <b>mateix denominador</b>, els trossos són de la mateixa mida i només cal comptar-los: sumes o restes els numeradors i <b>deixes el denominador igual</b>. Al final, simplifica si es pot.|Si dos fracciones tienen el <b>mismo denominador</b>, los trozos son del mismo tamaño y solo hay que contarlos: sumas o restas los numeradores y <b>dejas el denominador igual</b>. Al final, simplifica si se puede.",
"ex": [
"2/9 + 5/9 = <span class=\"hl\">7/9</span>|2/9 + 5/9 = <span class=\"hl\">7/9</span>",
"7/8 − 3/8 = 4/8|7/8 − 3/8 = 4/8",
"4/8 = <span class=\"hl\">1/2</span> (simplificant per 4)|4/8 = <span class=\"hl\">1/2</span> (simplificando entre 4)"
]
},
{
"t": "Fracció d'un nombre|Fracción de un número",
"x": "Per calcular la fracció d'una quantitat, primer la <b>divideixes pel denominador</b> (fas els grups iguals) i després <b>multipliques pel numerador</b> (agafes els grups que diu).|Para calcular la fracción de una cantidad, primero la <b>divides entre el denominador</b> (haces los grupos iguales) y después <b>multiplicas por el numerador</b> (coges los grupos que dice).",
"ex": [
"3/5 de 40 cromos|3/5 de 40 cromos",
"40 ÷ 5 = 8 (cada cinquè)|40 ÷ 5 = 8 (cada quinto)",
"8 × 3 = <span class=\"hl\">24</span> cromos|8 × 3 = <span class=\"hl\">24</span> cromos"
]
}
],
"words": [
[
"numerador|numerador",
"el nombre de dalt: quantes parts agafem|el número de arriba: cuántas partes cogemos"
],
[
"denominador|denominador",
"el nombre de sota: en quantes parts iguals dividim|el número de abajo: en cuántas partes iguales dividimos"
],
[
"fraccions equivalents|fracciones equivalentes",
"fraccions diferents que valen el mateix|fracciones diferentes que valen lo mismo"
],
[
"simplificar|simplificar",
"dividir numerador i denominador pel mateix nombre|dividir numerador y denominador por el mismo número"
],
[
"irreductible|irreducible",
"fracció que ja no es pot simplificar més|fracción que ya no se puede simplificar más"
]
],
"mistakes": [
[
"«2/7 + 3/7 = 5/14.»|«2/7 + 3/7 = 5/14.»",
"El denominador no se suma: diu la mida dels trossos, i aquesta no canvia. 2/7 + 3/7 = 5/7.|El denominador no se suma: dice el tamaño de los trozos, y este no cambia. 2/7 + 3/7 = 5/7."
],
[
"«Per fer una equivalent sumo 1 dalt i baix: 2/3 = 3/4.»|«Para hacer una equivalente sumo 1 arriba y abajo: 2/3 = 3/4.»",
"Només funciona multiplicant o dividint: 2/3 = 4/6 = 6/9. Sumant canvies la quantitat.|Solo funciona multiplicando o dividiendo: 2/3 = 4/6 = 6/9. Sumando cambias la cantidad."
],
[
"«1/5 és més gran que 1/3 perquè 5 és més gran que 3.»|«1/5 es mayor que 1/3 porque 5 es mayor que 3.»",
"Com més parts fas, més petit és cada tros. Per tant, 1/3 és més gran que 1/5.|Cuantas más partes haces, más pequeño es cada trozo. Por lo tanto, 1/3 es mayor que 1/5."
]
],
"recap": [
"Equivalents: multiplica o divideix dalt i baix pel mateix nombre.|Equivalentes: multiplica o divide arriba y abajo por el mismo número.",
"Simplifica fins que la fracció sigui irreductible.|Simplifica hasta que la fracción sea irreducible.",
"Mateix denominador: suma o resta els numeradors.|Mismo denominador: suma o resta los numeradores.",
"Fracció d'un nombre: ÷ denominador i × numerador.|Fracción de un número: ÷ denominador y × numerador."
],
"tip": "El truc del Cavaller: el que facis a dalt, fes-ho a baix. És l'única regla per no trencar una fracció quan la transformes.|El truco del Caballero: lo que hagas arriba, hazlo abajo. Es la única regla para no romper una fracción cuando la transformas."
},
"c5-6": {
"hook": "Per saber quantes rajoles calen per a un terra, quanta tanca envolta un camp de futbol o com d'inclinada és una rampa, fas servir àrees, perímetres i angles.|Para saber cuántas baldosas hacen falta para un suelo, cuánta valla rodea un campo de fútbol o lo inclinada que está una rampa, usas áreas, perímetros y ángulos.",
"parts": [
{
"t": "Tipus d'angles|Tipos de ángulos",
"x": "Un <b>angle</b> és l'obertura entre dues línies que surten d'un mateix punt, el <b>vèrtex</b>. Segons com d'obert és, pot ser <b>agut</b> (menys de 90°), <b>recte</b> (90°, com la cantonada d'un full), <b>obtús</b> (entre 90° i 180°) o <b>pla</b> (180°, una línia recta).|Un <b>ángulo</b> es la abertura entre dos líneas que salen de un mismo punto, el <b>vértice</b>. Según lo abierto que esté, puede ser <b>agudo</b> (menos de 90°), <b>recto</b> (90°, como la esquina de un folio), <b>obtuso</b> (entre 90° y 180°) o <b>llano</b> (180°, una línea recta).",
"ex": [
"35° → <span class=\"hl\">agut</span>|35° → <span class=\"hl\">agudo</span>",
"90° → <span class=\"hl\">recte</span>|90° → <span class=\"hl\">recto</span>",
"120° → <span class=\"hl\">obtús</span>|120° → <span class=\"hl\">obtuso</span>",
"180° → <span class=\"hl\">pla</span>|180° → <span class=\"hl\">llano</span>"
]
},
{
"t": "Mesurar en graus|Medir en grados",
"x": "Els angles es mesuren en <b>graus</b> (°) amb el <b>transportador</b>. Una volta sencera fa 360° i mitja volta, 180°. Els tres angles de qualsevol <b>triangle</b> sumen sempre 180°, i així pots trobar l'angle que falta.|Los ángulos se miden en <b>grados</b> (°) con el <b>transportador</b>. Una vuelta entera mide 360° y media vuelta, 180°. Los tres ángulos de cualquier <b>triángulo</b> suman siempre 180°, y así puedes encontrar el ángulo que falta.",
"ex": [
"Triangle amb angles de 50° i 60°|Triángulo con ángulos de 50° y 60°",
"50° + 60° = 110°|50° + 60° = 110°",
"180° − 110° = <span class=\"hl\">70°</span>|180° − 110° = <span class=\"hl\">70°</span>"
]
},
{
"t": "Perímetre i àrea del rectangle|Perímetro y área del rectángulo",
"x": "El <b>perímetre</b> és la longitud de la vora: sumes tots els costats i ho dones en cm o m. L'<b>àrea</b> és la superfície de dins: quants quadrets d'1 cm² hi caben. En un rectangle hi ha tantes files com l'altura i tants quadrets per fila com la base, per això l'àrea és <b>base × altura</b>.|El <b>perímetro</b> es la longitud del borde: sumas todos los lados y lo das en cm o m. El <b>área</b> es la superficie de dentro: cuántos cuadraditos de 1 cm² caben. En un rectángulo hay tantas filas como la altura y tantos cuadraditos por fila como la base, por eso el área es <b>base × altura</b>.",
"ex": [
"Rectangle de 8 cm per 5 cm|Rectángulo de 8 cm por 5 cm",
"P = 8 + 5 + 8 + 5 = <span class=\"hl\">26 cm</span>|P = 8 + 5 + 8 + 5 = <span class=\"hl\">26 cm</span>",
"A = 8 × 5 = <span class=\"hl\">40 cm²</span>|A = 8 × 5 = <span class=\"hl\">40 cm²</span>"
]
},
{
"t": "Àrea del triangle|Área del triángulo",
"x": "Un triangle és la <b>meitat d'un rectangle</b> amb la mateixa base i la mateixa altura. Per això la seva àrea és <b>base × altura ÷ 2</b>. L'<b>altura</b> és la distància perpendicular des de la base fins al vèrtex de dalt, no el costat inclinat.|Un triángulo es la <b>mitad de un rectángulo</b> con la misma base y la misma altura. Por eso su área es <b>base × altura ÷ 2</b>. La <b>altura</b> es la distancia perpendicular desde la base hasta el vértice de arriba, no el lado inclinado.",
"ex": [
"Base 10 cm, altura 6 cm|Base 10 cm, altura 6 cm",
"10 × 6 = 60 (el rectangle)|10 × 6 = 60 (el rectángulo)",
"60 ÷ 2 = 30|60 ÷ 2 = 30",
"Àrea = <span class=\"hl\">30 cm²</span>|Área = <span class=\"hl\">30 cm²</span>"
]
}
],
"words": [
[
"angle|ángulo",
"obertura entre dues línies que surten del mateix punt|abertura entre dos líneas que salen del mismo punto"
],
[
"grau (°)|grado (°)",
"unitat per mesurar angles; una volta fa 360°|unidad para medir ángulos; una vuelta mide 360°"
],
[
"perímetre|perímetro",
"la suma de tots els costats d'una figura|la suma de todos los lados de una figura"
],
[
"àrea|área",
"la superfície que ocupa una figura, en cm² o m²|la superficie que ocupa una figura, en cm² o m²"
],
[
"altura|altura",
"distància perpendicular de la base al vèrtex oposat|distancia perpendicular de la base al vértice opuesto"
]
],
"mistakes": [
[
"«L'àrea del rectangle de 8 i 5 és 40 cm.»|«El área del rectángulo de 8 y 5 es 40 cm.»",
"L'àrea es dona en unitats quadrades: 40 cm². Els cm sols són per al perímetre.|El área se da en unidades cuadradas: 40 cm². Los cm solos son para el perímetro."
],
[
"«L'àrea del triangle de base 10 i altura 6 és 60 cm².»|«El área del triángulo de base 10 y altura 6 es 60 cm².»",
"Això és el rectangle sencer. El triangle n'és la meitat: 60 ÷ 2 = 30 cm².|Eso es el rectángulo entero. El triángulo es la mitad: 60 ÷ 2 = 30 cm²."
],
[
"Confondre perímetre i àrea: sumar els costats per trobar l'àrea.|Confundir perímetro y área: sumar los lados para encontrar el área.",
"Perímetre = sumar la vora. Àrea = omplir per dins (multiplicar).|Perímetro = sumar el borde. Área = rellenar por dentro (multiplicar)."
]
],
"recap": [
"Agut &lt; 90°, recte = 90°, obtús entre 90° i 180°, pla = 180°.|Agudo &lt; 90°, recto = 90°, obtuso entre 90° y 180°, llano = 180°.",
"Els angles d'un triangle sumen 180°.|Los ángulos de un triángulo suman 180°.",
"Rectangle: P = suma dels costats; A = base × altura.|Rectángulo: P = suma de los lados; A = base × altura.",
"Triangle: A = base × altura ÷ 2.|Triángulo: A = base × altura ÷ 2."
],
"tip": "El truc del Cavaller: el perímetre és la tanca d'un camp i l'àrea és la gespa de dins. La tanca es mesura en metres; la gespa, en metres quadrats.|El truco del Caballero: el perímetro es la valla de un campo y el área es el césped de dentro. La valla se mide en metros; el césped, en metros cuadrados."
},
"c5-7": {
"hook": "Els mapes dels videojocs, les capses que omples, el reflex d'un mirall i les ordres que dones a un robot amaguen matemàtiques. Aquí aprendràs a situar punts, reconèixer cossos i pensar com un programador.|Los mapas de los videojuegos, las cajas que llenas, el reflejo de un espejo y las órdenes que das a un robot esconden matemáticas. Aquí aprenderás a situar puntos, reconocer cuerpos y pensar como un programador.",
"parts": [
{
"t": "Coordenades|Coordenadas",
"x": "Les <b>coordenades</b> diuen on és un punt en una quadrícula amb dos nombres entre parèntesis. El primer és el moviment <b>horitzontal</b> (cap a la dreta) i el segon el <b>vertical</b> (cap amunt), sempre des de l'origen (0, 0). L'ordre importa: canviar-lo porta a un altre punt.|Las <b>coordenadas</b> dicen dónde está un punto en una cuadrícula con dos números entre paréntesis. El primero es el movimiento <b>horizontal</b> (hacia la derecha) y el segundo el <b>vertical</b> (hacia arriba), siempre desde el origen (0, 0). El orden importa: cambiarlo lleva a otro punto.",
"ex": [
"Punt A (4, 2)|Punto A (4, 2)",
"Des del (0, 0): 4 cap a la dreta|Desde el (0, 0): 4 hacia la derecha",
"i després 2 cap amunt|y después 2 hacia arriba",
"(2, 4) és un <span class=\"hl\">altre punt</span>|(2, 4) es <span class=\"hl\">otro punto</span>"
]
},
{
"t": "Cossos geomètrics|Cuerpos geométricos",
"x": "Els cossos ocupen espai. Els <b>poliedres</b> (cub, prisma, piràmide) només tenen cares planes; el cilindre, el con i l'esfera tenen superfícies corbes i poden rodolar. D'un poliedre comptem les <b>cares</b>, les <b>arestes</b> (on es toquen dues cares) i els <b>vèrtexs</b> (les puntes).|Los cuerpos ocupan espacio. Los <b>poliedros</b> (cubo, prisma, pirámide) solo tienen caras planas; el cilindro, el cono y la esfera tienen superficies curvas y pueden rodar. De un poliedro contamos las <b>caras</b>, las <b>aristas</b> (donde se tocan dos caras) y los <b>vértices</b> (las puntas).",
"ex": [
"Cub: 6 cares, 12 arestes, 8 vèrtexs|Cubo: 6 caras, 12 aristas, 8 vértices",
"Piràmide quadrada: 5 C, 8 A, 5 V|Pirámide cuadrada: 5 C, 8 A, 5 V",
"Prisma triangular: 5 C, 9 A, 6 V|Prisma triangular: 5 C, 9 A, 6 V",
"Esfera: <span class=\"hl\">cap vèrtex</span>, roda|Esfera: <span class=\"hl\">ningún vértice</span>, rueda"
]
},
{
"t": "Eixos de simetria|Ejes de simetría",
"x": "Un <b>eix de simetria</b> és una línia que parteix una figura en dues meitats que encaixen perfectament si la plegues, com un mirall. Hi ha figures sense cap eix, amb un o amb molts.|Un <b>eje de simetría</b> es una línea que parte una figura en dos mitades que encajan perfectamente si la doblas, como un espejo. Hay figuras sin ningún eje, con uno o con muchos.",
"ex": [
"Rectangle: <span class=\"hl\">2</span> eixos|Rectángulo: <span class=\"hl\">2</span> ejes",
"Triangle equilàter: <span class=\"hl\">3</span> eixos|Triángulo equilátero: <span class=\"hl\">3</span> ejes",
"Quadrat: <span class=\"hl\">4</span> eixos|Cuadrado: <span class=\"hl\">4</span> ejes",
"Lletra A: 1 eix vertical|Letra A: 1 eje vertical"
]
},
{
"t": "Algorismes, bucles i variables|Algoritmos, bucles y variables",
"x": "Un <b>algorisme</b> és una llista d'ordres en un ordre concret per resoldre una tasca, com les fletxes que guien un robot. Un <b>bucle</b> repeteix unes ordres diverses vegades sense haver-les d'escriure totes. Una <b>variable</b> és una capsa amb nom que guarda un valor que pot anar canviant.|Un <b>algoritmo</b> es una lista de órdenes en un orden concreto para resolver una tarea, como las flechas que guían a un robot. Un <b>bucle</b> repite unas órdenes varias veces sin tener que escribirlas todas. Una <b>variable</b> es una caja con nombre que guarda un valor que puede ir cambiando.",
"ex": [
"n = 5|n = 5",
"repeteix 3 vegades: n = n + 4|repite 3 veces: n = n + 4",
"5 → 9 → 13 → 17|5 → 9 → 13 → 17",
"Al final, n = <span class=\"hl\">17</span>|Al final, n = <span class=\"hl\">17</span>"
]
}
],
"words": [
[
"coordenades|coordenadas",
"parella de nombres que situa un punt: (horitzontal, vertical)|pareja de números que sitúa un punto: (horizontal, vertical)"
],
[
"aresta|arista",
"línia on es troben dues cares d'un cos|línea donde se encuentran dos caras de un cuerpo"
],
[
"eix de simetria|eje de simetría",
"línia que parteix una figura en dues meitats iguals, com un mirall|línea que parte una figura en dos mitades iguales, como un espejo"
],
[
"bucle|bucle",
"ordre que repeteix altres ordres un nombre de vegades|orden que repite otras órdenes un número de veces"
],
[
"variable|variable",
"nom que guarda un valor que pot canviar|nombre que guarda un valor que puede cambiar"
]
],
"mistakes": [
[
"«(3, 2) i (2, 3) són el mateix punt.»|«(3, 2) y (2, 3) son el mismo punto.»",
"Primer va l'horitzontal i després la vertical: (3, 2) és 3 a la dreta i 2 amunt; (2, 3) és un altre lloc.|Primero va la horizontal y después la vertical: (3, 2) es 3 a la derecha y 2 arriba; (2, 3) es otro lugar."
],
[
"«Les diagonals d'un rectangle són eixos de simetria.»|«Las diagonales de un rectángulo son ejes de simetría.»",
"Si el plegues per la diagonal, les meitats no encaixen. El rectangle només en té 2: el vertical i l'horitzontal.|Si lo doblas por la diagonal, las mitades no encajan. El rectángulo solo tiene 2: el vertical y el horizontal."
],
[
"«Amb n = 5 i repeteix 3 vegades n = n + 4, surt 9.»|«Con n = 5 y repite 3 veces n = n + 4, sale 9.»",
"El bucle suma 4 tres vegades, no una: 5 + 4 + 4 + 4 = 17.|El bucle suma 4 tres veces, no una: 5 + 4 + 4 + 4 = 17."
]
],
"recap": [
"Coordenades: primer horitzontal, després vertical.|Coordenadas: primero horizontal, después vertical.",
"Poliedres: cares, arestes i vèrtexs. El cub: 6, 12 i 8.|Poliedros: caras, aristas y vértices. El cubo: 6, 12 y 8.",
"Un eix de simetria parteix la figura en dues meitats que encaixen.|Un eje de simetría parte la figura en dos mitades que encajan.",
"Algorisme = ordres en ordre; bucle = repetir; variable = capsa amb un valor.|Algoritmo = órdenes en orden; bucle = repetir; variable = caja con un valor."
],
"tip": "El truc del Cavaller: per seguir un bucle, apunta el valor de la variable després de cada volta. Així no te'n saltes cap.|El truco del Caballero: para seguir un bucle, apunta el valor de la variable después de cada vuelta. Así no te saltas ninguna."
},
"c5-8": {
"hook": "Quin és l'esport preferit de la teva classe? Quants punts fas de mitjana per partit? Plourà demà? L'estadística ordena les dades i la probabilitat mesura com de fàcil és que passi una cosa.|¿Cuál es el deporte favorito de tu clase? ¿Cuántos puntos haces de media por partido? ¿Lloverá mañana? La estadística ordena los datos y la probabilidad mide lo fácil que es que pase algo.",
"parts": [
{
"t": "Llegir gràfics|Leer gráficos",
"x": "En un <b>gràfic de barres</b>, cada barra és una categoria i la seva alçada, llegida a l'eix dels nombres, diu quantes vegades apareix. Així es comparen les dades d'un cop d'ull. La barra més alta és la <b>moda</b>: el valor que més es repeteix.|En un <b>gráfico de barras</b>, cada barra es una categoría y su altura, leída en el eje de los números, dice cuántas veces aparece. Así se comparan los datos de un vistazo. La barra más alta es la <b>moda</b>: el valor que más se repite.",
"ex": [
"Futbol 9 · Bàsquet 5 · Natació 6|Fútbol 9 · Baloncesto 5 · Natación 6",
"Moda: <span class=\"hl\">futbol</span> (la barra més alta)|Moda: <span class=\"hl\">fútbol</span> (la barra más alta)",
"Diferència: 9 − 5 = 4 alumnes|Diferencia: 9 − 5 = 4 alumnos",
"Total: 9 + 5 + 6 = <span class=\"hl\">20</span> alumnes|Total: 9 + 5 + 6 = <span class=\"hl\">20</span> alumnos"
]
},
{
"t": "La mitjana|La media",
"x": "La <b>mitjana</b> és el valor que tocaria a cadascú si ho repartíssim tot a parts iguals. Per calcular-la, <b>sumes totes les dades</b> i <b>divideixes pel nombre de dades</b>.|La <b>media</b> es el valor que tocaría a cada uno si lo repartiéramos todo a partes iguales. Para calcularla, <b>sumas todos los datos</b> y <b>divides entre el número de datos</b>.",
"ex": [
"Punts: 7, 9, 6, 10 i 8 (5 partits)|Puntos: 7, 9, 6, 10 y 8 (5 partidos)",
"7 + 9 + 6 + 10 + 8 = 40|7 + 9 + 6 + 10 + 8 = 40",
"40 ÷ 5 = 8|40 ÷ 5 = 8",
"Mitjana: <span class=\"hl\">8 punts</span>|Media: <span class=\"hl\">8 puntos</span>"
]
},
{
"t": "Probabilitat|Probabilidad",
"x": "Un fet pot ser <b>segur</b>, <b>possible</b> o <b>impossible</b>. Quan tots els resultats tenen la mateixa oportunitat, la <b>probabilitat</b> és una fracció: <b>casos favorables</b> (els que vols) entre <b>casos possibles</b> (tots). Com més a prop d'1, més fàcil és que passi.|Un suceso puede ser <b>seguro</b>, <b>posible</b> o <b>imposible</b>. Cuando todos los resultados tienen la misma oportunidad, la <b>probabilidad</b> es una fracción: <b>casos favorables</b> (los que quieres) entre <b>casos posibles</b> (todos). Cuanto más cerca de 1, más fácil es que pase.",
"ex": [
"Bossa: 3 boles vermelles i 2 blaves|Bolsa: 3 bolas rojas y 2 azules",
"Casos possibles: 5|Casos posibles: 5",
"Favorables (vermella): 3|Favorables (roja): 3",
"P(vermella) = <span class=\"hl\">3/5</span>|P(roja) = <span class=\"hl\">3/5</span>"
]
},
{
"t": "Probabilitat amb daus|Probabilidad con dados",
"x": "Un dau té <b>6 cares</b> i totes tenen la mateixa oportunitat de sortir, així que hi ha 6 casos possibles. Compta quantes cares compleixen el que demanen i posa-ho sobre 6. Un fet impossible té probabilitat 0 i un de segur, 1.|Un dado tiene <b>6 caras</b> y todas tienen la misma oportunidad de salir, así que hay 6 casos posibles. Cuenta cuántas caras cumplen lo que piden y ponlo sobre 6. Un suceso imposible tiene probabilidad 0 y uno seguro, 1.",
"ex": [
"Treure més de 4 → 5 o 6|Sacar más de 4 → 5 o 6",
"2 favorables de 6 possibles|2 favorables de 6 posibles",
"P = 2/6 = <span class=\"hl\">1/3</span>|P = 2/6 = <span class=\"hl\">1/3</span>",
"Treure un 7 → impossible: 0/6 = 0|Sacar un 7 → imposible: 0/6 = 0"
]
}
],
"words": [
[
"moda|moda",
"el valor que més es repeteix|el valor que más se repite"
],
[
"mitjana|media",
"suma de les dades dividida pel nombre de dades|suma de los datos dividida entre el número de datos"
],
[
"probabilitat|probabilidad",
"casos favorables entre casos possibles|casos favorables entre casos posibles"
],
[
"cas favorable|caso favorable",
"un resultat que compleix el que busquem|un resultado que cumple lo que buscamos"
]
],
"mistakes": [
[
"«La mitjana de 7, 9, 6, 10 i 8 és 40 ÷ 10 = 4», dividint pel valor més gran.|«La media de 7, 9, 6, 10 y 8 es 40 ÷ 10 = 4», dividiendo entre el valor más grande.",
"Es divideix pel nombre de dades, que són 5: 40 ÷ 5 = 8.|Se divide entre el número de datos, que son 5: 40 ÷ 5 = 8."
],
[
"«Treure més de 4 amb un dau: 5 i 6, i també el 4.»|«Sacar más de 4 con un dado: 5 y 6, y también el 4.»",
"«Més de 4» no inclou el 4. Només valen el 5 i el 6: 2/6.|«Más de 4» no incluye el 4. Solo valen el 5 y el 6: 2/6."
],
[
"«Ja han sortit tres 6 seguits, ara és més difícil que en surti un altre.»|«Ya han salido tres 6 seguidos, ahora es más difícil que salga otro.»",
"El dau no té memòria: a cada tirada, la probabilitat de treure un 6 torna a ser 1/6.|El dado no tiene memoria: en cada tirada, la probabilidad de sacar un 6 vuelve a ser 1/6."
]
],
"recap": [
"Moda: la barra més alta, el que més es repeteix.|Moda: la barra más alta, lo que más se repite.",
"Mitjana: suma totes les dades i divideix per quantes n'hi ha.|Media: suma todos los datos y divide entre cuántos hay.",
"Probabilitat = favorables ÷ possibles.|Probabilidad = favorables ÷ posibles.",
"Impossible = 0, segur = 1.|Imposible = 0, seguro = 1."
],
"tip": "El truc del Cavaller: la mitjana sempre queda entre la dada més petita i la més gran. Si et surt fora, has comptat malament les dades.|El truco del Caballero: la media siempre queda entre el dato más pequeño y el más grande. Si te sale fuera, has contado mal los datos."
},
"c5-9": {
"hook": "Quant et tornaran a la botiga? Quants autobusos calen per a l'excursió? A la vida real les matemàtiques arriben en forma de problema, i resoldre'ls bé és el superpoder més útil.|¿Cuánto te devolverán en la tienda? ¿Cuántos autobuses hacen falta para la excursión? En la vida real las matemáticas llegan en forma de problema, y resolverlos bien es el superpoder más útil.",
"parts": [
{
"t": "Llegir i triar l'operació|Leer y elegir la operación",
"x": "Llegeix el problema fins al final i separa les <b>dades</b> (els nombres) de la <b>pregunta</b>. Després pensa què passa: si ajuntes, sumes; si treus o busques la diferència, restes; si es repeteix la mateixa quantitat, multipliques; si reparteixes a parts iguals, divideixes.|Lee el problema hasta el final y separa los <b>datos</b> (los números) de la <b>pregunta</b>. Después piensa qué pasa: si juntas, sumas; si quitas o buscas la diferencia, restas; si se repite la misma cantidad, multiplicas; si repartes a partes iguales, divides.",
"ex": [
"La Laia té 45,60 € i en gasta 18,75 €|Laia tiene 45,60 € y gasta 18,75 €",
"Pregunta: quant li queda? → restar|Pregunta: ¿cuánto le queda? → restar",
"45,60 − 18,75 = <span class=\"hl\">26,85 €</span>|45,60 − 18,75 = <span class=\"hl\">26,85 €</span>"
]
},
{
"t": "Problemes de dos passos|Problemas de dos pasos",
"x": "Molts problemes necessiten <b>dues operacions</b>. El resultat del primer pas és una dada per al segon, i encara no és la resposta. Escriu què vol dir cada resultat perquè no et perdis.|Muchos problemas necesitan <b>dos operaciones</b>. El resultado del primer paso es un dato para el segundo, y todavía no es la respuesta. Escribe qué significa cada resultado para no perderte.",
"ex": [
"3 entrades de 7,50 €; pagues amb 50 €|3 entradas de 7,50 €; pagas con 50 €",
"Pas 1: 3 × 7,50 = 22,50 € (el preu)|Paso 1: 3 × 7,50 = 22,50 € (el precio)",
"Pas 2: 50 − 22,50 = 27,50 €|Paso 2: 50 − 22,50 = 27,50 €",
"Et tornen <span class=\"hl\">27,50 €</span>|Te devuelven <span class=\"hl\">27,50 €</span>"
]
},
{
"t": "Grans reptes|Grandes retos",
"x": "Amb nombres grans, fes un <b>pla</b> abans de calcular: què saps, què et demanen i en quin ordre ho faràs. Pots anotar els passos en frases curtes. Així els nombres grans no et fan por.|Con números grandes, haz un <b>plan</b> antes de calcular: qué sabes, qué te piden y en qué orden lo harás. Puedes anotar los pasos en frases cortas. Así los números grandes no te dan miedo.",
"ex": [
"24 caixes de 150 llapis per a 18 classes|24 cajas de 150 lápices para 18 clases",
"Total: 24 × 150 = 3.600 llapis|Total: 24 × 150 = 3.600 lápices",
"Per classe: 3.600 ÷ 18 = 200|Por clase: 3.600 ÷ 18 = 200",
"<span class=\"hl\">200 llapis</span> per classe|<span class=\"hl\">200 lápices</span> por clase"
]
},
{
"t": "Comprovar la resposta|Comprobar la respuesta",
"x": "Abans d'acabar, <b>estima</b> si el resultat té sentit arrodonint els nombres, i fes l'<b>operació inversa</b>: una resta es comprova sumant i una divisió, multiplicant. Escriu la resposta en una frase i amb la unitat (€, m, llapis...).|Antes de terminar, <b>estima</b> si el resultado tiene sentido redondeando los números, y haz la <b>operación inversa</b>: una resta se comprueba sumando y una división, multiplicando. Escribe la respuesta en una frase y con la unidad (€, m, lápices...).",
"ex": [
"Estima: 46 − 19 ≈ 27 → 26,85 € té sentit|Estima: 46 − 19 ≈ 27 → 26,85 € tiene sentido",
"Inversa: 26,85 + 18,75 = 45,60 ✓|Inversa: 26,85 + 18,75 = 45,60 ✓",
"Resposta: <span class=\"hl\">li queden 26,85 €</span>|Respuesta: <span class=\"hl\">le quedan 26,85 €</span>"
]
}
],
"words": [
[
"dada|dato",
"informació (sovint un nombre) que dona el problema|información (a menudo un número) que da el problema"
],
[
"pregunta|pregunta",
"el que has d'esbrinar; la resposta ha de contestar-la|lo que tienes que averiguar; la respuesta tiene que contestarla"
],
[
"estimar|estimar",
"calcular de manera aproximada amb nombres rodons|calcular de forma aproximada con números redondos"
],
[
"operació inversa|operación inversa",
"la que desfà una altra: suma i resta, multiplicació i divisió|la que deshace otra: suma y resta, multiplicación y división"
]
],
"mistakes": [
[
"«3 entrades de 7,50 € i pago amb 50 €: la resposta és 22,50 €.»|«3 entradas de 7,50 € y pago con 50 €: la respuesta es 22,50 €.»",
"Això és només el primer pas (el que costen). La pregunta és el canvi: 50 − 22,50 = 27,50 €.|Eso es solo el primer paso (lo que cuestan). La pregunta es el cambio: 50 − 22,50 = 27,50 €."
],
[
"«Agafo tots els nombres del problema i els sumo.»|«Cojo todos los números del problema y los sumo.»",
"Primer entén què passa (ajuntar, treure, repetir o repartir) i tria l'operació segons això.|Primero entiende qué pasa (juntar, quitar, repetir o repartir) y elige la operación según eso."
],
[
"Posar la coma malament amb diners: 45,60 − 18,75 = 2.685 €.|Poner mal la coma con dinero: 45,60 − 18,75 = 2.685 €.",
"Alinea les comes i fixa't si té sentit: si tenies 45 €, no et poden quedar 2.685 €. Són 26,85 €.|Alinea las comas y fíjate si tiene sentido: si tenías 45 €, no te pueden quedar 2.685 €. Son 26,85 €."
]
],
"recap": [
"Separa les dades de la pregunta.|Separa los datos de la pregunta.",
"Tria l'operació segons el que passa: ajuntar, treure, repetir o repartir.|Elige la operación según lo que pasa: juntar, quitar, repetir o repartir.",
"Als problemes de dos passos, el primer resultat no és el final.|En los problemas de dos pasos, el primer resultado no es el final.",
"Comprova amb una estimació i amb l'operació inversa.|Comprueba con una estimación y con la operación inversa."
],
"tip": "El truc del Cavaller: torna a llegir la pregunta just abans d'escriure la resposta. Si la teva frase no la contesta, encara et falta un pas.|El truco del Caballero: vuelve a leer la pregunta justo antes de escribir la respuesta. Si tu frase no la contesta, todavía te falta un paso."
},
"c6-1": {
"hook": "A l'hivern el termòmetre pot marcar 5 graus sota zero, i a l'ascensor baixes a la planta −2 del pàrquing. Per dir tot això necessites els nombres negatius.|En invierno el termómetro puede marcar 5 grados bajo cero, y en el ascensor bajas a la planta −2 del aparcamiento. Para decir todo eso necesitas los números negativos.",
"parts": [
{
"t": "Positius, negatius i zero|Positivos, negativos y cero",
"x": "Els <b>nombres enters</b> són els positius (1, 2, 3…), el <b>zero</b> i els <b>negatius</b> (−1, −2, −3…). Els negatius indiquen quantitats per sota d'un punt de referència: sota zero graus, sota la planta baixa o sota el nivell del mar.|Los <b>números enteros</b> son los positivos (1, 2, 3…), el <b>cero</b> y los <b>negativos</b> (−1, −2, −3…). Los negativos indican cantidades por debajo de un punto de referencia: bajo cero grados, bajo la planta baja o bajo el nivel del mar.",
"ex": [
"4 graus sota zero → <span class=\"hl\">−4 °C</span>|4 grados bajo cero → <span class=\"hl\">−4 °C</span>",
"2 plantes sota terra → planta <span class=\"hl\">−2</span>|2 plantas bajo tierra → planta <span class=\"hl\">−2</span>",
"Nivell del mar → <span class=\"hl\">0 m</span>|Nivel del mar → <span class=\"hl\">0 m</span>"
]
},
{
"t": "La recta i comparar|La recta y comparar",
"x": "A la <b>recta numèrica</b> el zero és al mig, els positius a la dreta i els negatius a l'esquerra. Un nombre és més gran com més a la dreta és. Per això, entre dos negatius, és més gran el que és més a prop del zero: −2 °C fa menys fred que −7 °C.|En la <b>recta numérica</b> el cero está en medio, los positivos a la derecha y los negativos a la izquierda. Un número es mayor cuanto más a la derecha está. Por eso, entre dos negativos, es mayor el que está más cerca del cero: −2 °C hace menos frío que −7 °C.",
"ex": [
"−7 és més a l'esquerra que −2|−7 está más a la izquierda que −2",
"Per tant, <span class=\"hl\">−7 &lt; −2</span>|Por lo tanto, <span class=\"hl\">−7 &lt; −2</span>",
"Ordenats: −6 &lt; −2 &lt; 0 &lt; 3 &lt; 5|Ordenados: −6 &lt; −2 &lt; 0 &lt; 3 &lt; 5"
]
},
{
"t": "Puja i baixa|Sube y baja",
"x": "Quan una temperatura <b>puja</b>, avances cap a la dreta de la recta; quan <b>baixa</b>, cap a l'esquerra. Si passes pel zero, compta primer fins al zero i després la resta de passos. Per saber quants graus hi ha entre dues temperatures, compta els passos que les separen.|Cuando una temperatura <b>sube</b>, avanzas hacia la derecha de la recta; cuando <b>baja</b>, hacia la izquierda. Si pasas por el cero, cuenta primero hasta el cero y después el resto de pasos. Para saber cuántos grados hay entre dos temperaturas, cuenta los pasos que las separan.",
"ex": [
"A les 7 h fa −3 °C i puja 8 graus|A las 7 h hace −3 °C y sube 8 grados",
"De −3 a 0: 3 graus. En queden 5.|De −3 a 0: 3 grados. Quedan 5.",
"Al migdia fa <span class=\"hl\">5 °C</span>|Al mediodía hace <span class=\"hl\">5 °C</span>",
"De −4 °C a 6 °C hi ha 4 + 6 = <span class=\"hl\">10 graus</span>|De −4 °C a 6 °C hay 4 + 6 = <span class=\"hl\">10 grados</span>"
]
},
{
"t": "Sumar i restar enters|Sumar y restar enteros",
"x": "Sumar un nombre positiu és moure's cap a la dreta i restar-lo és moure's cap a l'esquerra. Així, 3 − 5 dona un negatiu: fas 3 passos fins al zero i encara te'n falten 2. Si ja ets als negatius i restes, et fas encara més negatiu.|Sumar un número positivo es moverse hacia la derecha y restarlo es moverse hacia la izquierda. Así, 3 − 5 da un negativo: haces 3 pasos hasta el cero y aún te faltan 2. Si ya estás en los negativos y restas, te vuelves aún más negativo.",
"ex": [
"−4 + 6 = <span class=\"hl\">2</span> (6 passos a la dreta)|−4 + 6 = <span class=\"hl\">2</span> (6 pasos a la derecha)",
"3 − 5 = <span class=\"hl\">−2</span> (5 passos a l'esquerra)|3 − 5 = <span class=\"hl\">−2</span> (5 pasos a la izquierda)",
"−2 − 3 = <span class=\"hl\">−5</span>|−2 − 3 = <span class=\"hl\">−5</span>"
]
}
],
"words": [
[
"nombre enter|número entero",
"qualsevol nombre positiu, negatiu o el zero|cualquier número positivo, negativo o el cero"
],
[
"nombre negatiu|número negativo",
"nombre més petit que zero; porta el signe −|número menor que cero; lleva el signo −"
],
[
"recta numèrica|recta numérica",
"línia on els nombres estan ordenats de petit a gran, d'esquerra a dreta|línea donde los números están ordenados de menor a mayor, de izquierda a derecha"
],
[
"oposat|opuesto",
"nombre a la mateixa distància del zero però a l'altre costat: 5 i −5|número a la misma distancia del cero pero al otro lado: 5 y −5"
]
],
"mistakes": [
[
"«−8 és més gran que −2 perquè 8 és més gran que 2.»|«−8 es mayor que −2 porque 8 es mayor que 2.»",
"Amb negatius és al revés: −8 és més a l'esquerra, per tant −8 &lt; −2. A −8 °C fa més fred.|Con negativos es al revés: −8 está más a la izquierda, por lo tanto −8 &lt; −2. A −8 °C hace más frío."
],
[
"«Si fa −2 °C i baixa 3 graus, ara fa 1 °C.»|«Si hace −2 °C y baja 3 grados, ahora hace 1 °C.»",
"Baixar és anar a l'esquerra: −2 − 3 = −5 °C. Fa més fred, no menys.|Bajar es ir a la izquierda: −2 − 3 = −5 °C. Hace más frío, no menos."
],
[
"«−4 + 6 = −10.»|«−4 + 6 = −10.»",
"Sumar 6 és avançar 6 passos a la dreta des de −4: arribes a 2.|Sumar 6 es avanzar 6 pasos a la derecha desde −4: llegas a 2."
]
],
"recap": [
"Enters: positius, zero i negatius.|Enteros: positivos, cero y negativos.",
"Més a la dreta a la recta, més gran.|Más a la derecha en la recta, mayor.",
"Sumar o pujar → dreta. Restar o baixar → esquerra.|Sumar o subir → derecha. Restar o bajar → izquierda.",
"Si passes pel zero, compta en dos trams.|Si pasas por el cero, cuenta en dos tramos."
],
"tip": "Imagina sempre un termòmetre: com més avall, més fred i més petit és el nombre.|Imagina siempre un termómetro: cuanto más abajo, más frío y más pequeño es el número."
},
"c6-2": {
"hook": "Per saber quantes rajoles quadrades calen per a un terra, o quants daus caben en una capsa en forma de cub, fas servir potències.|Para saber cuántas baldosas cuadradas hacen falta para un suelo, o cuántos dados caben en una caja en forma de cubo, usas potencias.",
"parts": [
{
"t": "Quadrats|Cuadrados",
"x": "Una <b>potència</b> és una multiplicació d'un nombre per ell mateix. El nombre gran és la <b>base</b> i el petit de dalt, l'<b>exponent</b>, que diu quantes vegades es repeteix la base. Elevar <b>al quadrat</b> (exponent 2) es diu així perquè dona l'àrea d'un quadrat.|Una <b>potencia</b> es una multiplicación de un número por sí mismo. El número grande es la <b>base</b> y el pequeño de arriba, el <b>exponente</b>, que dice cuántas veces se repite la base. Elevar <b>al cuadrado</b> (exponente 2) se llama así porque da el área de un cuadrado.",
"ex": [
"6² es llegeix «sis al quadrat»|6² se lee «seis al cuadrado»",
"6² = 6 × 6 = <span class=\"hl\">36</span>|6² = 6 × 6 = <span class=\"hl\">36</span>",
"Un quadrat de 6 cm de costat fa 36 cm²|Un cuadrado de 6 cm de lado mide 36 cm²"
]
},
{
"t": "Cubs|Cubos",
"x": "Elevar <b>al cub</b> (exponent 3) és multiplicar la base tres vegades per ella mateixa. Es diu així perquè un cub de costat 3 està format per 3 × 3 × 3 cubets petits: 3 files, 3 columnes i 3 capes.|Elevar <b>al cubo</b> (exponente 3) es multiplicar la base tres veces por sí misma. Se llama así porque un cubo de lado 3 está formado por 3 × 3 × 3 cubitos pequeños: 3 filas, 3 columnas y 3 capas.",
"ex": [
"3³ = 3 × 3 × 3|3³ = 3 × 3 × 3",
"= 9 × 3|= 9 × 3",
"= <span class=\"hl\">27</span> cubets|= <span class=\"hl\">27</span> cubitos",
"I 2³ = 2 × 2 × 2 = <span class=\"hl\">8</span>|Y 2³ = 2 × 2 × 2 = <span class=\"hl\">8</span>"
]
},
{
"t": "Potències de 10|Potencias de 10",
"x": "Cada vegada que multipliques per 10 afegeixes un zero. Per això l'exponent d'una potència de 10 diu quants zeros hi ha darrere de l'1. Serveixen per escriure nombres molt grans de manera curta i per descompondre nombres.|Cada vez que multiplicas por 10 añades un cero. Por eso el exponente de una potencia de 10 dice cuántos ceros hay detrás del 1. Sirven para escribir números muy grandes de forma corta y para descomponer números.",
"ex": [
"10² = 10 × 10 = 100|10² = 10 × 10 = 100",
"10⁴ = <span class=\"hl\">10.000</span> (4 zeros)|10⁴ = <span class=\"hl\">10.000</span> (4 ceros)",
"10⁶ = 1.000.000, un milió|10⁶ = 1.000.000, un millón",
"5 × 10³ = 5 × 1.000 = <span class=\"hl\">5.000</span>|5 × 10³ = 5 × 1.000 = <span class=\"hl\">5.000</span>"
]
},
{
"t": "Arrels quadrades|Raíces cuadradas",
"x": "L'<b>arrel quadrada</b> fa el camí invers del quadrat: √64 pregunta quin nombre multiplicat per ell mateix dona 64. Els nombres com 1, 4, 9, 16, 25, 36, 49, 64, 81 i 100 són <b>quadrats perfectes</b> i tenen arrel exacta. Si no n'és, l'arrel queda entre dos nombres.|La <b>raíz cuadrada</b> hace el camino inverso del cuadrado: √64 pregunta qué número multiplicado por sí mismo da 64. Los números como 1, 4, 9, 16, 25, 36, 49, 64, 81 y 100 son <b>cuadrados perfectos</b> y tienen raíz exacta. Si no lo es, la raíz queda entre dos números.",
"ex": [
"√64 → quin nombre per ell mateix fa 64?|√64 → ¿qué número por sí mismo da 64?",
"8 × 8 = 64, per tant √64 = <span class=\"hl\">8</span>|8 × 8 = 64, por lo tanto √64 = <span class=\"hl\">8</span>",
"√50: 7² = 49 i 8² = 64|√50: 7² = 49 y 8² = 64",
"√50 és entre <span class=\"hl\">7 i 8</span>|√50 está entre <span class=\"hl\">7 y 8</span>"
]
}
],
"words": [
[
"potència|potencia",
"multiplicació d'un nombre per ell mateix diverses vegades|multiplicación de un número por sí mismo varias veces"
],
[
"base|base",
"el nombre que es multiplica: a 5³, el 5|el número que se multiplica: en 5³, el 5"
],
[
"exponent|exponente",
"el nombre petit de dalt: quantes vegades es repeteix la base|el número pequeño de arriba: cuántas veces se repite la base"
],
[
"arrel quadrada|raíz cuadrada",
"el nombre que, elevat al quadrat, dona el que hi ha dins: √25 = 5|el número que, elevado al cuadrado, da lo que hay dentro: √25 = 5"
],
[
"quadrat perfecte|cuadrado perfecto",
"nombre que és el quadrat d'un altre: 49 = 7²|número que es el cuadrado de otro: 49 = 7²"
]
],
"mistakes": [
[
"«5² = 5 × 2 = 10.»|«5² = 5 × 2 = 10.»",
"L'exponent no multiplica: diu quantes vegades es repeteix la base. 5² = 5 × 5 = 25.|El exponente no multiplica: dice cuántas veces se repite la base. 5² = 5 × 5 = 25."
],
[
"«2 + 3² = 5² = 25.»|«2 + 3² = 5² = 25.»",
"Les potències es calculen abans que les sumes: 2 + 3² = 2 + 9 = 11.|Las potencias se calculan antes que las sumas: 2 + 3² = 2 + 9 = 11."
],
[
"«√36 = 18, perquè és la meitat.»|«√36 = 18, porque es la mitad.»",
"L'arrel no és la meitat: busca el nombre que per ell mateix dona 36. 6 × 6 = 36, per tant √36 = 6.|La raíz no es la mitad: busca el número que por sí mismo da 36. 6 × 6 = 36, por lo tanto √36 = 6."
]
],
"recap": [
"Quadrat: dues vegades la base. Cub: tres vegades.|Cuadrado: dos veces la base. Cubo: tres veces.",
"10 elevat a n és un 1 amb n zeros.|10 elevado a n es un 1 con n ceros.",
"L'arrel quadrada desfà el quadrat: √81 = 9.|La raíz cuadrada deshace el cuadrado: √81 = 9.",
"Les potències van abans que ×, ÷, + i −.|Las potencias van antes que ×, ÷, + y −."
],
"tip": "Aprèn de memòria els quadrats de l'1 al 10. Així les arrels quadrades les sabràs al moment.|Apréndete de memoria los cuadrados del 1 al 10. Así las raíces cuadradas las sabrás al momento."
},
"c6-3": {
"hook": "Al súper els preus porten decimals: 1,35 € una barra de pa o 2,49 € un suc. Per saber quant pagaràs i quant et tornaran, has d'operar amb decimals.|En el súper los precios llevan decimales: 1,35 € una barra de pan o 2,49 € un zumo. Para saber cuánto pagarás y cuánto te devolverán, tienes que operar con decimales.",
"parts": [
{
"t": "Sumar i restar decimals|Sumar y restar decimales",
"x": "Per sumar o restar decimals, col·loca <b>coma sota coma</b>: així sumes dècimes amb dècimes i centèsimes amb centèsimes. Si un nombre té menys decimals, afegeix-hi zeros al final; no canvia el seu valor.|Para sumar o restar decimales, coloca <b>coma debajo de coma</b>: así sumas décimas con décimas y centésimas con centésimas. Si un número tiene menos decimales, añádele ceros al final; no cambia su valor.",
"ex": [
"12,5 + 3,75 → 12,50 + 3,75|12,5 + 3,75 → 12,50 + 3,75",
"= <span class=\"hl\">16,25</span>|= <span class=\"hl\">16,25</span>",
"8 − 2,35 → 8,00 − 2,35 = <span class=\"hl\">5,65</span>|8 − 2,35 → 8,00 − 2,35 = <span class=\"hl\">5,65</span>"
]
},
{
"t": "Per 10, 100 i 1.000|Por 10, 100 y 1.000",
"x": "Multiplicar per 10, 100 o 1.000 mou la coma <b>cap a la dreta</b> tants llocs com zeros hi ha, perquè cada xifra val 10 vegades més. Dividir la mou <b>cap a l'esquerra</b>. Si falten xifres, omple amb zeros.|Multiplicar por 10, 100 o 1.000 mueve la coma <b>hacia la derecha</b> tantos lugares como ceros hay, porque cada cifra vale 10 veces más. Dividir la mueve <b>hacia la izquierda</b>. Si faltan cifras, rellena con ceros.",
"ex": [
"3,25 × 100 = <span class=\"hl\">325</span> (2 llocs a la dreta)|3,25 × 100 = <span class=\"hl\">325</span> (2 lugares a la derecha)",
"4,2 ÷ 10 = <span class=\"hl\">0,42</span> (1 lloc a l'esquerra)|4,2 ÷ 10 = <span class=\"hl\">0,42</span> (1 lugar a la izquierda)",
"7 ÷ 1.000 = <span class=\"hl\">0,007</span>|7 ÷ 1.000 = <span class=\"hl\">0,007</span>"
]
},
{
"t": "Multiplicar i dividir decimals|Multiplicar y dividir decimales",
"x": "Per <b>multiplicar</b>, fes-ho com si no hi hagués comes i al final posa tants decimals com sumen els dos factors. Per <b>dividir</b> entre un natural, posa la coma al quocient quan la baixes. Si el divisor té decimals, multiplica els dos nombres per 10 o 100 fins que no en tingui: el resultat no canvia.|Para <b>multiplicar</b>, hazlo como si no hubiera comas y al final pon tantos decimales como suman los dos factores. Para <b>dividir</b> entre un natural, pon la coma en el cociente cuando la bajas. Si el divisor tiene decimales, multiplica los dos números por 10 o 100 hasta que no tenga: el resultado no cambia.",
"ex": [
"2,4 × 1,5 → 24 × 15 = 360|2,4 × 1,5 → 24 × 15 = 360",
"1 + 1 = 2 decimals → <span class=\"hl\">3,60 = 3,6</span>|1 + 1 = 2 decimales → <span class=\"hl\">3,60 = 3,6</span>",
"7,5 ÷ 3 = <span class=\"hl\">2,5</span>|7,5 ÷ 3 = <span class=\"hl\">2,5</span>",
"4,8 ÷ 0,6 = 48 ÷ 6 = <span class=\"hl\">8</span>|4,8 ÷ 0,6 = 48 ÷ 6 = <span class=\"hl\">8</span>"
]
},
{
"t": "Jerarquia de les operacions|Jerarquía de las operaciones",
"x": "Quan hi ha diverses operacions juntes, totes les persones del món les fan en el mateix ordre per obtenir el mateix resultat: primer els <b>parèntesis</b>, després les <b>potències</b>, després <b>× i ÷</b> i al final <b>+ i −</b>. Si n'hi ha de la mateixa categoria, d'esquerra a dreta.|Cuando hay varias operaciones juntas, todo el mundo las hace en el mismo orden para obtener el mismo resultado: primero los <b>paréntesis</b>, después las <b>potencias</b>, después <b>× y ÷</b> y al final <b>+ y −</b>. Si hay varias de la misma categoría, de izquierda a derecha.",
"ex": [
"5 + 2 × 1,5 = 5 + 3 = <span class=\"hl\">8</span>|5 + 2 × 1,5 = 5 + 3 = <span class=\"hl\">8</span>",
"(5 + 2) × 1,5 = 7 × 1,5 = <span class=\"hl\">10,5</span>|(5 + 2) × 1,5 = 7 × 1,5 = <span class=\"hl\">10,5</span>",
"20 − 12 ÷ 4 = 20 − 3 = <span class=\"hl\">17</span>|20 − 12 ÷ 4 = 20 − 3 = <span class=\"hl\">17</span>"
]
}
],
"words": [
[
"dècima|décima",
"cada una de les 10 parts d'una unitat: 0,1|cada una de las 10 partes de una unidad: 0,1"
],
[
"centèsima|centésima",
"cada una de les 100 parts d'una unitat: 0,01|cada una de las 100 partes de una unidad: 0,01"
],
[
"quocient|cociente",
"el resultat d'una divisió|el resultado de una división"
],
[
"jerarquia|jerarquía",
"l'ordre en què es fan les operacions|el orden en que se hacen las operaciones"
],
[
"parèntesi|paréntesis",
"signes ( ) que marquen el que s'ha de calcular primer|signos ( ) que marcan lo que hay que calcular primero"
]
],
"mistakes": [
[
"«3,5 + 1,25 = 4,30», alineant les xifres per la dreta.|«3,5 + 1,25 = 4,30», alineando las cifras por la derecha.",
"Coma sota coma: 3,50 + 1,25 = 4,75.|Coma debajo de coma: 3,50 + 1,25 = 4,75."
],
[
"«0,2 × 0,3 = 0,6.»|«0,2 × 0,3 = 0,6.»",
"2 × 3 = 6 i hi ha 1 + 1 = 2 decimals: 0,06. Una dècima d'una dècima és una centèsima.|2 × 3 = 6 y hay 1 + 1 = 2 decimales: 0,06. Una décima de una décima es una centésima."
],
[
"«6 + 4 × 2 = 20», fent les operacions en ordre.|«6 + 4 × 2 = 20», haciendo las operaciones en orden.",
"La multiplicació va primer: 6 + 8 = 14. Només seria 20 si fos (6 + 4) × 2.|La multiplicación va primero: 6 + 8 = 14. Solo sería 20 si fuera (6 + 4) × 2."
]
],
"recap": [
"Sumar i restar: coma sota coma.|Sumar y restar: coma debajo de coma.",
"Multiplicar: compta els decimals dels dos factors.|Multiplicar: cuenta los decimales de los dos factores.",
"× 10, 100, 1.000: coma a la dreta. ÷: a l'esquerra.|× 10, 100, 1.000: coma a la derecha. ÷: a la izquierda.",
"Ordre: parèntesis, potències, × i ÷, + i −.|Orden: paréntesis, potencias, × y ÷, + y −."
],
"tip": "Abans de calcular, estima: 2,4 × 1,5 és una mica més que 2 × 1,5 = 3. Si et surt 36, la coma està malament.|Antes de calcular, estima: 2,4 × 1,5 es un poco más que 2 × 1,5 = 3. Si te sale 36, la coma está mal."
},
"c6-4": {
"hook": "Si et menges 1/2 pizza i el teu germà 1/3, quanta pizza us heu menjat entre tots dos? Per respondre has de sumar fraccions de denominador diferent.|Si te comes 1/2 pizza y tu hermano 1/3, ¿cuánta pizza os habéis comido entre los dos? Para responder tienes que sumar fracciones de distinto denominador.",
"parts": [
{
"t": "Fraccions equivalents|Fracciones equivalentes",
"x": "Dues fraccions són <b>equivalents</b> si representen la mateixa quantitat. Les obtens multiplicant o dividint el numerador i el denominador <b>pel mateix nombre</b>: fas trossos més petits, però n'agafes més, i la quantitat no canvia.|Dos fracciones son <b>equivalentes</b> si representan la misma cantidad. Las obtienes multiplicando o dividiendo el numerador y el denominador <b>por el mismo número</b>: haces trozos más pequeños, pero coges más, y la cantidad no cambia.",
"ex": [
"1/2 = 2/4 = 3/6 = 4/8|1/2 = 2/4 = 3/6 = 4/8",
"2/5: × 3 a dalt i a baix|2/5: × 3 arriba y abajo",
"2/5 = <span class=\"hl\">6/15</span>|2/5 = <span class=\"hl\">6/15</span>"
]
},
{
"t": "Simplificar|Simplificar",
"x": "<b>Simplificar</b> és trobar una fracció equivalent amb nombres més petits. Divideix el numerador i el denominador per un divisor comú. Quan ja no es poden dividir més pel mateix nombre, la fracció és <b>irreductible</b>.|<b>Simplificar</b> es encontrar una fracción equivalente con números más pequeños. Divide el numerador y el denominador por un divisor común. Cuando ya no se pueden dividir más por el mismo número, la fracción es <b>irreducible</b>.",
"ex": [
"12/18: tots dos es divideixen per 6|12/18: los dos se dividen entre 6",
"12 ÷ 6 = 2 i 18 ÷ 6 = 3|12 ÷ 6 = 2 y 18 ÷ 6 = 3",
"12/18 = <span class=\"hl\">2/3</span>|12/18 = <span class=\"hl\">2/3</span>"
]
},
{
"t": "Sumar i restar amb diferent denominador|Sumar y restar con distinto denominador",
"x": "Només pots sumar trossos de la mateixa mida. Per això, primer converteix les fraccions en equivalents amb un <b>denominador comú</b> (un múltiple dels dos denominadors, millor el mínim). Després sumes o restes els numeradors i mantens el denominador. Al final, simplifica si pots.|Solo puedes sumar trozos del mismo tamaño. Por eso, primero convierte las fracciones en equivalentes con un <b>denominador común</b> (un múltiplo de los dos denominadores, mejor el mínimo). Después sumas o restas los numeradores y mantienes el denominador. Al final, simplifica si puedes.",
"ex": [
"1/2 + 1/3 = 3/6 + 2/6 = <span class=\"hl\">5/6</span>|1/2 + 1/3 = 3/6 + 2/6 = <span class=\"hl\">5/6</span>",
"3/4 − 1/6 = 9/12 − 2/12 = <span class=\"hl\">7/12</span>|3/4 − 1/6 = 9/12 − 2/12 = <span class=\"hl\">7/12</span>",
"1/4 + 5/12 = 3/12 + 5/12 = 8/12|1/4 + 5/12 = 3/12 + 5/12 = 8/12",
"Simplifiquem: 8/12 = <span class=\"hl\">2/3</span>|Simplificamos: 8/12 = <span class=\"hl\">2/3</span>"
]
},
{
"t": "Fracció d'un número|Fracción de un número",
"x": "Per calcular la fracció d'una quantitat, <b>divideix pel denominador</b> (així trobes quant val una part) i <b>multiplica pel numerador</b> (les parts que agafes).|Para calcular la fracción de una cantidad, <b>divide entre el denominador</b> (así encuentras cuánto vale una parte) y <b>multiplica por el numerador</b> (las partes que coges).",
"ex": [
"2/5 de 30 €|2/5 de 30 €",
"Una part: 30 ÷ 5 = 6 €|Una parte: 30 ÷ 5 = 6 €",
"Dues parts: 6 × 2 = <span class=\"hl\">12 €</span>|Dos partes: 6 × 2 = <span class=\"hl\">12 €</span>"
]
}
],
"words": [
[
"fraccions equivalents|fracciones equivalentes",
"fraccions que representen la mateixa quantitat: 1/2 i 3/6|fracciones que representan la misma cantidad: 1/2 y 3/6"
],
[
"simplificar|simplificar",
"dividir numerador i denominador pel mateix nombre|dividir numerador y denominador por el mismo número"
],
[
"fracció irreductible|fracción irreducible",
"fracció que ja no es pot simplificar més: 2/3|fracción que ya no se puede simplificar más: 2/3"
],
[
"denominador comú|denominador común",
"un mateix denominador per a diverses fraccions, múltiple de tots els denominadors|un mismo denominador para varias fracciones, múltiplo de todos los denominadores"
],
[
"mínim comú múltiple|mínimo común múltiplo",
"el múltiple més petit que tenen en comú dos nombres: el de 4 i 6 és 12|el múltiplo más pequeño que tienen en común dos números: el de 4 y 6 es 12"
]
],
"mistakes": [
[
"«1/2 + 1/3 = 2/5», sumant a dalt i a baix.|«1/2 + 1/3 = 2/5», sumando arriba y abajo.",
"Els denominadors no se sumen. Busca un denominador comú: 3/6 + 2/6 = 5/6.|Los denominadores no se suman. Busca un denominador común: 3/6 + 2/6 = 5/6."
],
[
"«1/3 = 1/6», canviant només el denominador.|«1/3 = 1/6», cambiando solo el denominador.",
"Si multipliques el denominador per 2, també ho has de fer amb el numerador: 1/3 = 2/6.|Si multiplicas el denominador por 2, también tienes que hacerlo con el numerador: 1/3 = 2/6."
],
[
"«2/5 de 30 és 30 ÷ 2 × 5 = 75.»|«2/5 de 30 es 30 ÷ 2 × 5 = 75.»",
"Es divideix pel de sota i es multiplica pel de dalt: 30 ÷ 5 × 2 = 12. Una part d'una cosa no pot ser més gran que la cosa sencera.|Se divide entre el de abajo y se multiplica por el de arriba: 30 ÷ 5 × 2 = 12. Una parte de algo no puede ser mayor que el todo."
]
],
"recap": [
"Mateix nombre a dalt i a baix → fracció equivalent.|Mismo número arriba y abajo → fracción equivalente.",
"Simplifica fins que sigui irreductible.|Simplifica hasta que sea irreducible.",
"Per sumar o restar, primer el mateix denominador.|Para sumar o restar, primero el mismo denominador.",
"Fracció d'un número: ÷ denominador, × numerador.|Fracción de un número: ÷ denominador, × numerador."
],
"tip": "Per trobar el denominador comú, prova amb els múltiples del denominador més gran: 6, 12, 18… fins que l'altre també hi càpiga.|Para encontrar el denominador común, prueba con los múltiplos del denominador mayor: 6, 12, 18… hasta que el otro también quepa."
},
"c6-5": {
"hook": "Rebaixes del 30%, una recepta per a 4 que vols fer per a 6 o un plànol de casa teva: tot això es resol amb percentatges i proporcions.|Rebajas del 30%, una receta para 4 que quieres hacer para 6 o un plano de tu casa: todo eso se resuelve con porcentajes y proporciones.",
"parts": [
{
"t": "El 50%, el 25% i el 10%|El 50%, el 25% y el 10%",
"x": "Un <b>percentatge</b> indica quantes parts de cada <b>100</b>: el 30% vol dir 30 de cada 100. Alguns són molt fàcils perquè són fraccions conegudes: el 50% és la meitat (1/2), el 25% és un quart (1/4) i el 10% és una desena part (1/10).|Un <b>porcentaje</b> indica cuántas partes de cada <b>100</b>: el 30% quiere decir 30 de cada 100. Algunos son muy fáciles porque son fracciones conocidas: el 50% es la mitad (1/2), el 25% es un cuarto (1/4) y el 10% es una décima parte (1/10).",
"ex": [
"50% de 80 = 80 ÷ 2 = <span class=\"hl\">40</span>|50% de 80 = 80 ÷ 2 = <span class=\"hl\">40</span>",
"25% de 80 = 80 ÷ 4 = <span class=\"hl\">20</span>|25% de 80 = 80 ÷ 4 = <span class=\"hl\">20</span>",
"10% de 80 = 80 ÷ 10 = <span class=\"hl\">8</span>|10% de 80 = 80 ÷ 10 = <span class=\"hl\">8</span>",
"5% de 80 = la meitat del 10% = <span class=\"hl\">4</span>|5% de 80 = la mitad del 10% = <span class=\"hl\">4</span>"
]
},
{
"t": "Més percentatges i descomptes|Más porcentajes y descuentos",
"x": "Qualsevol percentatge es pot calcular a partir del 10% (o fent × el percentatge i ÷ 100). En un <b>descompte</b>, el percentatge és el que t'estalvies: l'has de <b>restar</b> del preu inicial per saber quant pagues.|Cualquier porcentaje se puede calcular a partir del 10% (o haciendo × el porcentaje y ÷ 100). En un <b>descuento</b>, el porcentaje es lo que ahorras: tienes que <b>restarlo</b> del precio inicial para saber cuánto pagas.",
"ex": [
"Jaqueta de 60 € amb un 30% de descompte|Chaqueta de 60 € con un 30% de descuento",
"10% de 60 = 6 → 30% = 3 × 6 = 18 €|10% de 60 = 6 → 30% = 3 × 6 = 18 €",
"Pagues 60 − 18 = <span class=\"hl\">42 €</span>|Pagas 60 − 18 = <span class=\"hl\">42 €</span>"
]
},
{
"t": "Proporcionalitat|Proporcionalidad",
"x": "Dues quantitats són <b>proporcionals</b> si, quan una es multiplica per un nombre, l'altra es multiplica pel mateix: el doble de persones, el doble d'ingredients. El mètode més segur és la <b>reducció a la unitat</b>: calcula primer quant correspon a 1 i després multiplica.|Dos cantidades son <b>proporcionales</b> si, cuando una se multiplica por un número, la otra se multiplica por el mismo: el doble de personas, el doble de ingredientes. El método más seguro es la <b>reducción a la unidad</b>: calcula primero cuánto corresponde a 1 y después multiplica.",
"ex": [
"4 persones → 200 g de farina|4 personas → 200 g de harina",
"1 persona → 200 ÷ 4 = 50 g|1 persona → 200 ÷ 4 = 50 g",
"6 persones → 50 × 6 = <span class=\"hl\">300 g</span>|6 personas → 50 × 6 = <span class=\"hl\">300 g</span>"
]
},
{
"t": "Escales|Escalas",
"x": "Un plànol o un mapa és un dibuix reduït de la realitat. L'<b>escala</b> 1:200 vol dir que 1 cm del plànol són 200 cm de la realitat. Per passar a la mida real, multiplica per 200; per anar al plànol, divideix.|Un plano o un mapa es un dibujo reducido de la realidad. La <b>escala</b> 1:200 quiere decir que 1 cm del plano son 200 cm de la realidad. Para pasar al tamaño real, multiplica por 200; para ir al plano, divide.",
"ex": [
"Plànol a escala 1:200|Plano a escala 1:200",
"La paret fa 3 cm al plànol|La pared mide 3 cm en el plano",
"3 × 200 = 600 cm = <span class=\"hl\">6 m</span>|3 × 200 = 600 cm = <span class=\"hl\">6 m</span>"
]
}
],
"words": [
[
"percentatge|porcentaje",
"quantitat de cada 100; s'escriu amb el signe %|cantidad de cada 100; se escribe con el signo %"
],
[
"descompte|descuento",
"part del preu que no pagues|parte del precio que no pagas"
],
[
"magnituds proporcionals|magnitudes proporcionales",
"quantitats que augmenten o disminueixen en la mateixa proporció|cantidades que aumentan o disminuyen en la misma proporción"
],
[
"reducció a la unitat|reducción a la unidad",
"calcular primer el valor d'1 per trobar després qualsevol altre|calcular primero el valor de 1 para encontrar después cualquier otro"
],
[
"escala|escala",
"relació entre la mida del plànol i la mida real|relación entre el tamaño del plano y el tamaño real"
]
],
"mistakes": [
[
"«La samarreta de 40 € té un 20% de descompte, per tant pago 8 €.»|«La camiseta de 40 € tiene un 20% de descuento, así que pago 8 €.»",
"Els 8 € són el que t'estalvies. Pagues 40 − 8 = 32 €.|Los 8 € son lo que ahorras. Pagas 40 − 8 = 32 €."
],
[
"«El 25% és dividir per 25.»|«El 25% es dividir entre 25.»",
"El 25% és 25 de cada 100, és a dir, 1/4: es divideix per 4. El 25% de 80 és 20.|El 25% es 25 de cada 100, es decir, 1/4: se divide entre 4. El 25% de 80 es 20."
],
[
"«Si 2 entrades costen 10 €, 6 entrades costen 14 €», sumant 4.|«Si 2 entradas cuestan 10 €, 6 entradas cuestan 14 €», sumando 4.",
"En la proporcionalitat es multiplica: 1 entrada val 5 €, i 6 entrades, 6 × 5 = 30 €.|En la proporcionalidad se multiplica: 1 entrada vale 5 €, y 6 entradas, 6 × 5 = 30 €."
]
],
"recap": [
"Percentatge = parts de cada 100.|Porcentaje = partes de cada 100.",
"50% → ÷ 2; 25% → ÷ 4; 10% → ÷ 10.|50% → ÷ 2; 25% → ÷ 4; 10% → ÷ 10.",
"Descompte: calcula'l i resta'l del preu.|Descuento: calcúlalo y réstalo del precio.",
"Proporcions i escales: passa per la unitat i multiplica.|Proporciones y escalas: pasa por la unidad y multiplica."
],
"tip": "Troba sempre el 10% primer: és només moure la coma. A partir d'aquí, el 20%, el 30% o el 5% surten sols.|Encuentra siempre el 10% primero: es solo mover la coma. A partir de ahí, el 20%, el 30% o el 5% salen solos."
},
"c6-6": {
"hook": "Les notícies, els resultats esportius i les enquestes de classe estan plens de dades. L'estadística t'ajuda a entendre-les d'un cop d'ull i a no deixar-te enganyar.|Las noticias, los resultados deportivos y las encuestas de clase están llenos de datos. La estadística te ayuda a entenderlos de un vistazo y a que no te engañen.",
"parts": [
{
"t": "Llegir gràfics|Leer gráficos",
"x": "Un <b>gràfic</b> mostra dades de manera visual. En un gràfic de <b>barres</b>, cada barra és una categoria i la seva alçada és la quantitat: mira bé l'escala de l'eix. Un gràfic de <b>línies</b> mostra com canvia una dada amb el temps.|Un <b>gráfico</b> muestra datos de forma visual. En un gráfico de <b>barras</b>, cada barra es una categoría y su altura es la cantidad: mira bien la escala del eje. Un gráfico de <b>líneas</b> muestra cómo cambia un dato con el tiempo.",
"ex": [
"Barres de la fruita preferida:|Barras de la fruta preferida:",
"Poma 8 · Plàtan 5 · Maduixa 12|Manzana 8 · Plátano 5 · Fresa 12",
"La més votada: la <span class=\"hl\">maduixa</span>|La más votada: la <span class=\"hl\">fresa</span>",
"Total: 8 + 5 + 12 = <span class=\"hl\">25</span> alumnes|Total: 8 + 5 + 12 = <span class=\"hl\">25</span> alumnos"
]
},
{
"t": "La moda|La moda",
"x": "La <b>moda</b> és el valor que surt més vegades, el que té més <b>freqüència</b>. Pot haver-hi dues modes si dos valors empaten, o cap si tots surten igual. És útil per saber què és el més habitual o el preferit.|La <b>moda</b> es el valor que sale más veces, el que tiene más <b>frecuencia</b>. Puede haber dos modas si dos valores empatan, o ninguna si todos salen igual. Es útil para saber qué es lo más habitual o lo preferido.",
"ex": [
"Gols per partit: 2, 0, 3, 2, 1, 2|Goles por partido: 2, 0, 3, 2, 1, 2",
"El 2 surt 3 vegades; els altres, 1|El 2 sale 3 veces; los demás, 1",
"Moda = <span class=\"hl\">2</span> gols|Moda = <span class=\"hl\">2</span> goles"
]
},
{
"t": "La mitjana|La media",
"x": "La <b>mitjana</b> és el valor que tindria cada dada si ho repartíssim tot a parts iguals. Per calcular-la, <b>suma</b> totes les dades i <b>divideix</b> pel nombre de dades. Pot sortir un nombre decimal que no és cap de les dades.|La <b>media</b> es el valor que tendría cada dato si lo repartiéramos todo a partes iguales. Para calcularla, <b>suma</b> todos los datos y <b>divide</b> entre el número de datos. Puede salir un número decimal que no es ninguno de los datos.",
"ex": [
"Notes: 6, 8, 7 i 9|Notas: 6, 8, 7 y 9",
"Suma: 6 + 8 + 7 + 9 = 30|Suma: 6 + 8 + 7 + 9 = 30",
"Hi ha 4 notes: 30 ÷ 4 = <span class=\"hl\">7,5</span>|Hay 4 notas: 30 ÷ 4 = <span class=\"hl\">7,5</span>"
]
},
{
"t": "El rang|El rango",
"x": "El <b>rang</b> és la diferència entre el valor més gran i el més petit. Diu com d'escampades estan les dades: si el rang és petit, les dades s'assemblen; si és gran, són molt diferents.|El <b>rango</b> es la diferencia entre el valor mayor y el menor. Dice lo dispersos que están los datos: si el rango es pequeño, los datos se parecen; si es grande, son muy distintos.",
"ex": [
"Temperatures: 12, 18, 9 i 15 °C|Temperaturas: 12, 18, 9 y 15 °C",
"Màxima 18 °C, mínima 9 °C|Máxima 18 °C, mínima 9 °C",
"Rang = 18 − 9 = <span class=\"hl\">9 °C</span>|Rango = 18 − 9 = <span class=\"hl\">9 °C</span>"
]
}
],
"words": [
[
"dada|dato",
"cada valor que recollim: una nota, una temperatura…|cada valor que recogemos: una nota, una temperatura…"
],
[
"freqüència|frecuencia",
"quantes vegades surt un valor|cuántas veces sale un valor"
],
[
"moda|moda",
"el valor amb més freqüència|el valor con mayor frecuencia"
],
[
"mitjana|media",
"suma de totes les dades dividida pel nombre de dades|suma de todos los datos dividida entre el número de datos"
],
[
"rang|rango",
"valor més gran menys valor més petit|valor mayor menos valor menor"
]
],
"mistakes": [
[
"«La moda de 3, 7, 7, 9 és 9, perquè és el més gran.»|«La moda de 3, 7, 7, 9 es 9, porque es el mayor.»",
"La moda és el que més es repeteix, no el més gran: aquí és 7.|La moda es lo que más se repite, no lo mayor: aquí es 7."
],
[
"Dividir la suma per un nombre que no és el total de dades.|Dividir la suma entre un número que no es el total de datos.",
"Compta bé quantes dades hi ha, també les repetides i els zeros: 2, 0, 4 són 3 dades i la mitjana és 6 ÷ 3 = 2.|Cuenta bien cuántos datos hay, también los repetidos y los ceros: 2, 0, 4 son 3 datos y la media es 6 ÷ 3 = 2."
],
[
"«El rang de 9, 12, 15 i 18 és 18.»|«El rango de 9, 12, 15 y 18 es 18.»",
"El rang és una resta: el més gran menys el més petit, 18 − 9 = 9.|El rango es una resta: el mayor menos el menor, 18 − 9 = 9."
]
],
"recap": [
"Moda: el que més es repeteix.|Moda: lo que más se repite.",
"Mitjana: suma i divideix pel nombre de dades.|Media: suma y divide entre el número de datos.",
"Rang: el més gran menys el més petit.|Rango: el mayor menos el menor.",
"En un gràfic, mira sempre l'escala de l'eix.|En un gráfico, mira siempre la escala del eje."
],
"tip": "Ordena les dades de petit a gran abans de començar: veuràs de seguida la moda, el màxim i el mínim.|Ordena los datos de menor a mayor antes de empezar: verás enseguida la moda, el máximo y el mínimo."
},
"c6-7": {
"hook": "Quanta pintura necessites per a una paret? Quants litres d'aigua caben en una peixera? Les àrees i els volums responen aquestes preguntes.|¿Cuánta pintura necesitas para una pared? ¿Cuántos litros de agua caben en una pecera? Las áreas y los volúmenes responden estas preguntas.",
"parts": [
{
"t": "Angles del triangle|Ángulos del triángulo",
"x": "Els tres angles de qualsevol triangle sumen sempre <b>180°</b>. Si retalles les tres puntes i les ajuntes, formen un angle pla, mig gir. Així, si en coneixes dos, el tercer és 180° menys la seva suma.|Los tres ángulos de cualquier triángulo suman siempre <b>180°</b>. Si recortas las tres puntas y las juntas, forman un ángulo llano, media vuelta. Así, si conoces dos, el tercero es 180° menos su suma.",
"ex": [
"Angles coneguts: 50° i 75°|Ángulos conocidos: 50° y 75°",
"50 + 75 = 125|50 + 75 = 125",
"180 − 125 = <span class=\"hl\">55°</span>|180 − 125 = <span class=\"hl\">55°</span>"
]
},
{
"t": "Àrees|Áreas",
"x": "L'<b>àrea</b> és la superfície que ocupa una figura, i es mesura en quadrats: cm², m²… Rectangle: <b>base × alçada</b>. Un triangle és la meitat d'un rectangle, per això la seva àrea és <b>base × alçada ÷ 2</b>.|El <b>área</b> es la superficie que ocupa una figura, y se mide en cuadrados: cm², m²… Rectángulo: <b>base × altura</b>. Un triángulo es la mitad de un rectángulo, por eso su área es <b>base × altura ÷ 2</b>.",
"ex": [
"Rectangle 8 cm × 5 cm = <span class=\"hl\">40 cm²</span>|Rectángulo 8 cm × 5 cm = <span class=\"hl\">40 cm²</span>",
"Triangle: base 8 cm, alçada 5 cm|Triángulo: base 8 cm, altura 5 cm",
"8 × 5 ÷ 2 = <span class=\"hl\">20 cm²</span>|8 × 5 ÷ 2 = <span class=\"hl\">20 cm²</span>"
]
},
{
"t": "Comptar cubs|Contar cubos",
"x": "El <b>volum</b> és l'espai que ocupa un cos. Es mesura comptant quants cubets hi caben. En lloc de comptar-los un a un, compta els d'una capa (files × columnes) i multiplica pel nombre de capes.|El <b>volumen</b> es el espacio que ocupa un cuerpo. Se mide contando cuántos cubitos caben. En lugar de contarlos uno a uno, cuenta los de una capa (filas × columnas) y multiplica por el número de capas.",
"ex": [
"Una capa: 4 × 3 = 12 cubets|Una capa: 4 × 3 = 12 cubitos",
"3 capes: 12 × 3 = 36 cubets|3 capas: 12 × 3 = 36 cubitos",
"Si cada cubet és d'1 cm³: <span class=\"hl\">36 cm³</span>|Si cada cubito es de 1 cm³: <span class=\"hl\">36 cm³</span>"
]
},
{
"t": "Volum del prisma|Volumen del prisma",
"x": "Comptar capes és el mateix que fer <b>llargada × amplada × alçada</b>, o àrea de la base × alçada. El volum es mesura en unitats cúbiques: cm³, dm³, m³. Recorda que 1 dm³ = 1.000 cm³ = 1 litre.|Contar capas es lo mismo que hacer <b>largo × ancho × alto</b>, o área de la base × altura. El volumen se mide en unidades cúbicas: cm³, dm³, m³. Recuerda que 1 dm³ = 1.000 cm³ = 1 litro.",
"ex": [
"Capsa de 10 cm × 5 cm × 4 cm|Caja de 10 cm × 5 cm × 4 cm",
"Base: 10 × 5 = 50 cm²|Base: 10 × 5 = 50 cm²",
"Volum: 50 × 4 = <span class=\"hl\">200 cm³</span>|Volumen: 50 × 4 = <span class=\"hl\">200 cm³</span>"
]
}
],
"words": [
[
"grau|grado",
"unitat per mesurar angles; una volta sencera són 360°|unidad para medir ángulos; una vuelta entera son 360°"
],
[
"àrea|área",
"superfície d'una figura plana, en cm², m²…|superficie de una figura plana, en cm², m²…"
],
[
"alçada|altura",
"distància perpendicular de la base al punt més alt|distancia perpendicular de la base al punto más alto"
],
[
"volum|volumen",
"espai que ocupa un cos, en cm³, m³…|espacio que ocupa un cuerpo, en cm³, m³…"
],
[
"prisma|prisma",
"cos amb dues bases iguals i paral·leles i cares laterals rectangulars|cuerpo con dos bases iguales y paralelas y caras laterales rectangulares"
]
],
"mistakes": [
[
"«L'àrea del triangle de base 8 i alçada 5 és 40 cm².»|«El área del triángulo de base 8 y altura 5 es 40 cm².»",
"Aquesta és l'àrea del rectangle. El triangle n'és la meitat: 40 ÷ 2 = 20 cm².|Esa es el área del rectángulo. El triángulo es la mitad: 40 ÷ 2 = 20 cm²."
],
[
"«Volum de 10 × 5 × 4 = 10 + 5 + 4 = 19 cm³.»|«Volumen de 10 × 5 × 4 = 10 + 5 + 4 = 19 cm³.»",
"Les mides es multipliquen, no se sumen: 10 × 5 × 4 = 200 cm³.|Las medidas se multiplican, no se suman: 10 × 5 × 4 = 200 cm³."
],
[
"Escriure el volum en cm o en cm².|Escribir el volumen en cm o en cm².",
"Longitud en cm, àrea en cm² (2 mides) i volum en cm³ (3 mides).|Longitud en cm, área en cm² (2 medidas) y volumen en cm³ (3 medidas)."
]
],
"recap": [
"Angles d'un triangle: sempre 180°.|Ángulos de un triángulo: siempre 180°.",
"Rectangle: b × a. Triangle: b × a ÷ 2.|Rectángulo: b × a. Triángulo: b × a ÷ 2.",
"Volum = cubets d'una capa × nombre de capes.|Volumen = cubitos de una capa × número de capas.",
"Prisma: llargada × amplada × alçada, en cm³.|Prisma: largo × ancho × alto, en cm³."
],
"tip": "Compta les dimensions i sabràs la unitat: una mida és cm, dues són cm² i tres són cm³.|Cuenta las dimensiones y sabrás la unidad: una medida es cm, dos son cm² y tres son cm³."
},
"c6-8": {
"hook": "Els videojocs situen els personatges amb coordenades, els robots segueixen algorismes i els jocs de daus depenen de la probabilitat. Aquí veuràs com funciona tot plegat.|Los videojuegos sitúan a los personajes con coordenadas, los robots siguen algoritmos y los juegos de dados dependen de la probabilidad. Aquí verás cómo funciona todo eso.",
"parts": [
{
"t": "Coordenades|Coordenadas",
"x": "Les <b>coordenades</b> (x, y) diuen on és un punt en una quadrícula. El primer nombre és el moviment <b>horitzontal</b> des de l'origen (0, 0) i el segon, el <b>vertical</b>. L'ordre importa: (4, 1) i (1, 4) són punts diferents.|Las <b>coordenadas</b> (x, y) dicen dónde está un punto en una cuadrícula. El primer número es el movimiento <b>horizontal</b> desde el origen (0, 0) y el segundo, el <b>vertical</b>. El orden importa: (4, 1) y (1, 4) son puntos distintos.",
"ex": [
"Punt A = (4, 1)|Punto A = (4, 1)",
"Des de (0, 0): 4 a la dreta|Desde (0, 0): 4 a la derecha",
"i després <span class=\"hl\">1 amunt</span>|y después <span class=\"hl\">1 arriba</span>"
]
},
{
"t": "Cossos geomètrics|Cuerpos geométricos",
"x": "Els <b>poliedres</b> tenen totes les cares planes: prismes i piràmides. Els <b>cossos rodons</b> tenen alguna superfície corba: cilindre, con i esfera. En un poliedre comptem les <b>cares</b>, les <b>arestes</b> (on es troben dues cares) i els <b>vèrtexs</b> (les puntes).|Los <b>poliedros</b> tienen todas las caras planas: prismas y pirámides. Los <b>cuerpos redondos</b> tienen alguna superficie curva: cilindro, cono y esfera. En un poliedro contamos las <b>caras</b>, las <b>aristas</b> (donde se juntan dos caras) y los <b>vértices</b> (las puntas).",
"ex": [
"Cub: 6 cares, 12 arestes, 8 vèrtexs|Cubo: 6 caras, 12 aristas, 8 vértices",
"Piràmide de base quadrada:|Pirámide de base cuadrada:",
"5 cares, 8 arestes, 5 vèrtexs|5 caras, 8 aristas, 5 vértices",
"Cilindre: <span class=\"hl\">cos rodó</span>, 2 bases circulars|Cilindro: <span class=\"hl\">cuerpo redondo</span>, 2 bases circulares"
]
},
{
"t": "Algorismes, bucles i variables|Algoritmos, bucles y variables",
"x": "Un <b>algorisme</b> és una llista d'instruccions precises i ordenades per resoldre una tasca, com les ordres a un robot. Un <b>bucle</b> repeteix unes instruccions diverses vegades. Una <b>variable</b> és una capsa amb nom que guarda un valor que pot canviar.|Un <b>algoritmo</b> es una lista de instrucciones precisas y ordenadas para resolver una tarea, como las órdenes a un robot. Un <b>bucle</b> repite unas instrucciones varias veces. Una <b>variable</b> es una caja con nombre que guarda un valor que puede cambiar.",
"ex": [
"punts = 0|puntos = 0",
"Repeteix 3 vegades: punts = punts + 5|Repite 3 veces: puntos = puntos + 5",
"0 → 5 → 10 → 15|0 → 5 → 10 → 15",
"Al final, punts = <span class=\"hl\">15</span>|Al final, puntos = <span class=\"hl\">15</span>"
]
},
{
"t": "Probabilitat|Probabilidad",
"x": "La <b>probabilitat</b> mesura com de possible és que passi una cosa. Es calcula dividint els <b>casos favorables</b> (els que volem) entre els <b>casos possibles</b> (tots). Va de 0 (impossible) a 1 (segur).|La <b>probabilidad</b> mide lo posible que es que pase algo. Se calcula dividiendo los <b>casos favorables</b> (los que queremos) entre los <b>casos posibles</b> (todos). Va de 0 (imposible) a 1 (seguro).",
"ex": [
"Bossa: 3 boles vermelles i 2 blaves|Bolsa: 3 bolas rojas y 2 azules",
"Favorables: 3. Possibles: 5.|Favorables: 3. Posibles: 5.",
"P(vermella) = <span class=\"hl\">3/5</span>|P(roja) = <span class=\"hl\">3/5</span>",
"Dau: P(parell) = 3/6 = <span class=\"hl\">1/2</span>|Dado: P(par) = 3/6 = <span class=\"hl\">1/2</span>"
]
}
],
"words": [
[
"coordenades|coordenadas",
"parella de nombres (x, y) que situa un punt|pareja de números (x, y) que sitúa un punto"
],
[
"vèrtex|vértice",
"punt on es troben diverses arestes d'un cos|punto donde se juntan varias aristas de un cuerpo"
],
[
"algorisme|algoritmo",
"seqüència ordenada d'instruccions per resoldre una tasca|secuencia ordenada de instrucciones para resolver una tarea"
],
[
"variable|variable",
"nom que guarda un valor que pot canviar|nombre que guarda un valor que puede cambiar"
],
[
"probabilitat|probabilidad",
"casos favorables dividits entre casos possibles|casos favorables divididos entre casos posibles"
]
],
"mistakes": [
[
"Situar (4, 1) pujant 4 i anant 1 a la dreta.|Situar (4, 1) subiendo 4 y yendo 1 a la derecha.",
"Primer l'horitzontal i després el vertical: 4 a la dreta i 1 amunt.|Primero el horizontal y después el vertical: 4 a la derecha y 1 arriba."
],
[
"«Amb 3 vermelles i 2 blaves, P(vermella) = 3/2.»|«Con 3 rojas y 2 azules, P(roja) = 3/2.»",
"Es divideix entre el total de boles, no entre les altres: 3/5. Una probabilitat mai no passa d'1.|Se divide entre el total de bolas, no entre las otras: 3/5. Una probabilidad nunca pasa de 1."
],
[
"«Repeteix 3 vegades sumar 5: punts = 5.»|«Repite 3 veces sumar 5: puntos = 5.»",
"Cada volta del bucle fa servir el valor nou de la variable: 5, 10 i 15.|Cada vuelta del bucle usa el valor nuevo de la variable: 5, 10 y 15."
]
],
"recap": [
"(x, y): primer horitzontal, després vertical.|(x, y): primero horizontal, después vertical.",
"Poliedres: cares planes. Cossos rodons: alguna corba.|Poliedros: caras planas. Cuerpos redondos: alguna curva.",
"Bucle = repetir. Variable = capsa amb un valor.|Bucle = repetir. Variable = caja con un valor.",
"Probabilitat = favorables ÷ possibles.|Probabilidad = favorables ÷ posibles."
],
"tip": "Per a les coordenades pensa «primer camino, després pujo l'escala»: horitzontal i després vertical.|Para las coordenadas piensa «primero camino, después subo la escalera»: horizontal y después vertical."
},
"c6-9": {
"hook": "Organitzar una excursió, comparar preus o calcular quant et tornen a la botiga són problemes de veritat. Aquí fas servir tot el que has après a primària.|Organizar una excursión, comparar precios o calcular cuánto te devuelven en la tienda son problemas de verdad. Aquí usas todo lo que has aprendido en primaria.",
"parts": [
{
"t": "Problemes amb decimals|Problemas con decimales",
"x": "Molts problemes de la vida real porten decimals, sobretot amb diners i mesures. Llegeix l'enunciat dues vegades, anota les <b>dades</b> i la <b>pregunta</b> i opera amb compte amb la coma. Abans de calcular, fes una <b>estimació</b> per saber si el resultat té sentit.|Muchos problemas de la vida real llevan decimales, sobre todo con dinero y medidas. Lee el enunciado dos veces, anota los <b>datos</b> y la <b>pregunta</b> y opera con cuidado con la coma. Antes de calcular, haz una <b>estimación</b> para saber si el resultado tiene sentido.",
"ex": [
"3 llibretes a 2,40 € cadascuna|3 libretas a 2,40 € cada una",
"3 × 2,40 = 7,20 €|3 × 2,40 = 7,20 €",
"Pagues amb 10 €: 10 − 7,20 = <span class=\"hl\">2,80 €</span>|Pagas con 10 €: 10 − 7,20 = <span class=\"hl\">2,80 €</span>"
]
},
{
"t": "Dos passos|Dos pasos",
"x": "En un problema de dos passos, la primera operació respon una <b>pregunta amagada</b> que necessites per a la segona. Pregunta't: què he de saber primer? El resultat del primer pas encara no és la resposta.|En un problema de dos pasos, la primera operación responde una <b>pregunta escondida</b> que necesitas para la segunda. Pregúntate: ¿qué tengo que saber primero? El resultado del primer paso todavía no es la respuesta.",
"ex": [
"Cinema: 12 files de 15 seients i 134 persones|Cine: 12 filas de 15 asientos y 134 personas",
"Pas 1, seients: 12 × 15 = 180|Paso 1, asientos: 12 × 15 = 180",
"Pas 2, lliures: 180 − 134 = <span class=\"hl\">46</span>|Paso 2, libres: 180 − 134 = <span class=\"hl\">46</span>"
]
},
{
"t": "Proporcions|Proporciones",
"x": "Si el preu o la quantitat és proporcional, fes la <b>reducció a la unitat</b>: divideix per saber quant val 1 i multiplica per la quantitat que et demanen. Funciona amb preus, receptes, velocitats i escales.|Si el precio o la cantidad es proporcional, haz la <b>reducción a la unidad</b>: divide para saber cuánto vale 1 y multiplica por la cantidad que te piden. Funciona con precios, recetas, velocidades y escalas.",
"ex": [
"5 kg de taronges costen 7,50 €|5 kg de naranjas cuestan 7,50 €",
"1 kg: 7,50 ÷ 5 = 1,50 €|1 kg: 7,50 ÷ 5 = 1,50 €",
"8 kg: 1,50 × 8 = <span class=\"hl\">12 €</span>|8 kg: 1,50 × 8 = <span class=\"hl\">12 €</span>"
]
},
{
"t": "Grans reptes|Grandes retos",
"x": "Els problemes grans combinen diverses eines: divisions, percentatges, fraccions… Fes un <b>pla</b>: divideix el problema en preguntes petites, resol-les per ordre i ajunta-ho al final. Després <b>comprova</b> el resultat i escriu la resposta completa amb la unitat.|Los problemas grandes combinan varias herramientas: divisiones, porcentajes, fracciones… Haz un <b>plan</b>: divide el problema en preguntas pequeñas, resuélvelas por orden y júntalo al final. Después <b>comprueba</b> el resultado y escribe la respuesta completa con la unidad.",
"ex": [
"Autocar: 300 € entre 25 alumnes|Autocar: 300 € entre 25 alumnos",
"300 ÷ 25 = 12 € cadascú|300 ÷ 25 = 12 € cada uno",
"Museu: 8 € − 25% = 8 − 2 = 6 €|Museo: 8 € − 25% = 8 − 2 = 6 €",
"Total: 12 + 6 = <span class=\"hl\">18 €</span> per alumne|Total: 12 + 6 = <span class=\"hl\">18 €</span> por alumno"
]
}
],
"words": [
[
"dades|datos",
"la informació numèrica que dona l'enunciat|la información numérica que da el enunciado"
],
[
"pregunta amagada|pregunta escondida",
"el que has de calcular primer per poder respondre|lo que tienes que calcular primero para poder responder"
],
[
"estimació|estimación",
"càlcul aproximat per saber quin resultat esperar|cálculo aproximado para saber qué resultado esperar"
],
[
"reducció a la unitat|reducción a la unidad",
"trobar el valor d'1 per calcular qualsevol altra quantitat|encontrar el valor de 1 para calcular cualquier otra cantidad"
]
],
"mistakes": [
[
"Donar com a resposta el resultat del primer pas: «hi ha 180 seients lliures».|Dar como respuesta el resultado del primer paso: «hay 180 asientos libres».",
"180 són tots els seients. La pregunta demana els lliures: 180 − 134 = 46.|180 son todos los asientos. La pregunta pide los libres: 180 − 134 = 46."
],
[
"Sumar tots els nombres de l'enunciat sense pensar.|Sumar todos los números del enunciado sin pensar.",
"Pregunta't què vol dir cada dada i quina operació respon la pregunta: ajuntar, treure, repetir o repartir.|Pregúntate qué significa cada dato y qué operación responde la pregunta: juntar, quitar, repetir o repartir."
],
[
"Escriure només «46» o no mirar si té sentit.|Escribir solo «46» o no mirar si tiene sentido.",
"Respon amb una frase i la unitat: «Queden 46 seients lliures». Si et tornen més diners dels que pagues, alguna cosa falla.|Responde con una frase y la unidad: «Quedan 46 asientos libres». Si te devuelven más dinero del que pagas, algo falla."
]
],
"recap": [
"Llegeix dues vegades: dades i pregunta.|Lee dos veces: datos y pregunta.",
"Busca la pregunta amagada del primer pas.|Busca la pregunta escondida del primer paso.",
"Proporcions: passa per la unitat.|Proporciones: pasa por la unidad.",
"Estima abans i comprova després.|Estima antes y comprueba después."
],
"tip": "Abans de fer cap compte, digues en veu alta què et demanen. Si ho pots explicar, ja tens mig problema resolt.|Antes de hacer ninguna cuenta, di en voz alta qué te piden. Si lo puedes explicar, ya tienes medio problema resuelto."
},
"c7-1": {
"hook": "La temperatura baixa sota zero, el compte del banc queda en números vermells, un submarí baixa a −200 m: els nombres enters descriuen tot el que pot anar per sobre o per sota d'un punt de referència.|La temperatura baja bajo cero, la cuenta del banco queda en números rojos, un submarino baja a −200 m: los números enteros describen todo lo que puede ir por encima o por debajo de un punto de referencia.",
"parts": [
{
"t": "Multiplicar i dividir amb signes|Multiplicar y dividir con signos",
"x": "Primer operes els números sense signe i després poses el signe amb la <b>regla dels signes</b>: signes iguals donen <b>positiu</b> i signes diferents donen <b>negatiu</b>. Funciona així perquè multiplicar per un negatiu és girar el sentit: si el gires dues vegades, tornes al sentit original.|Primero operas los números sin signo y después pones el signo con la <b>regla de los signos</b>: signos iguales dan <b>positivo</b> y signos distintos dan <b>negativo</b>. Funciona así porque multiplicar por un negativo es girar el sentido: si lo giras dos veces, vuelves al sentido original.",
"ex": [
"(+6) × (−2) = <span class=\"hl\">−12</span>|(+6) × (−2) = <span class=\"hl\">−12</span>",
"(−3) × (−4) = <span class=\"hl\">+12</span>|(−3) × (−4) = <span class=\"hl\">+12</span>",
"(−20) ÷ 4 = <span class=\"hl\">−5</span>|(−20) ÷ 4 = <span class=\"hl\">−5</span>",
"(−18) ÷ (−6) = <span class=\"hl\">+3</span>|(−18) ÷ (−6) = <span class=\"hl\">+3</span>"
]
},
{
"t": "Operacions combinades|Operaciones combinadas",
"x": "Quan hi ha diverses operacions, se segueix sempre la <b>jerarquia</b>: primer els parèntesis, després les potències, després × i ÷ (d'esquerra a dreta) i, al final, + i −. Si canvies l'ordre, el resultat canvia, i per això tothom ha de seguir la mateixa regla.|Cuando hay varias operaciones, se sigue siempre la <b>jerarquía</b>: primero los paréntesis, después las potencias, después × y ÷ (de izquierda a derecha) y, al final, + y −. Si cambias el orden, el resultado cambia, y por eso todo el mundo debe seguir la misma regla.",
"ex": [
"5 − 3 × (−2)|5 − 3 × (−2)",
"Primer el producte: 3 × (−2) = −6|Primero el producto: 3 × (−2) = −6",
"5 − (−6) = 5 + 6 = <span class=\"hl\">11</span>|5 − (−6) = 5 + 6 = <span class=\"hl\">11</span>"
]
},
{
"t": "Parèntesis i signe menys|Paréntesis y signo menos",
"x": "Pots resoldre primer el que hi ha dins del parèntesi o bé treure'l. Si davant del parèntesi hi ha un <b>−</b>, en treure'l <b>canvien de signe</b> tots els termes de dins, perquè restes tot el bloc. Restar un negatiu és el mateix que sumar el positiu.|Puedes resolver primero lo que hay dentro del paréntesis o bien quitarlo. Si delante del paréntesis hay un <b>−</b>, al quitarlo <b>cambian de signo</b> todos los términos de dentro, porque restas todo el bloque. Restar un negativo es lo mismo que sumar el positivo.",
"ex": [
"5 − (2 − 7) = 5 − (−5) = <span class=\"hl\">10</span>|5 − (2 − 7) = 5 − (−5) = <span class=\"hl\">10</span>",
"O bé: 5 − 2 + 7 = <span class=\"hl\">10</span>|O bien: 5 − 2 + 7 = <span class=\"hl\">10</span>",
"−(4 − 9) = −4 + 9 = <span class=\"hl\">5</span>|−(4 − 9) = −4 + 9 = <span class=\"hl\">5</span>"
]
},
{
"t": "Potències de nombres negatius|Potencias de números negativos",
"x": "Una potència de base negativa és un producte de negatius. Cada parella de signes − dona +, així que amb exponent <b>parell</b> el resultat és positiu i amb exponent <b>senar</b> és negatiu. Atenció al parèntesi: només si hi és, el signe forma part de la base.|Una potencia de base negativa es un producto de negativos. Cada pareja de signos − da +, así que con exponente <b>par</b> el resultado es positivo y con exponente <b>impar</b> es negativo. Atención al paréntesis: solo si está, el signo forma parte de la base.",
"ex": [
"(−2)⁴ = (−2)(−2)(−2)(−2) = <span class=\"hl\">16</span>|(−2)⁴ = (−2)(−2)(−2)(−2) = <span class=\"hl\">16</span>",
"(−2)³ = (−2)(−2)(−2) = <span class=\"hl\">−8</span>|(−2)³ = (−2)(−2)(−2) = <span class=\"hl\">−8</span>",
"(−3)² = 9, però −3² = −(3 × 3) = <span class=\"hl\">−9</span>|(−3)² = 9, pero −3² = −(3 × 3) = <span class=\"hl\">−9</span>"
]
}
],
"words": [
[
"nombre enter|número entero",
"els naturals, els seus oposats negatius i el zero: …, −2, −1, 0, 1, 2, …|los naturales, sus opuestos negativos y el cero: …, −2, −1, 0, 1, 2, …"
],
[
"valor absolut|valor absoluto",
"la distància d'un número al zero, sense signe: el de −5 és 5|la distancia de un número al cero, sin signo: el de −5 es 5"
],
[
"oposat|opuesto",
"el mateix número amb el signe canviat: l'oposat de 7 és −7|el mismo número con el signo cambiado: el opuesto de 7 es −7"
],
[
"regla dels signes|regla de los signos",
"en × i ÷, signes iguals donen + i signes diferents donen −|en × y ÷, signos iguales dan + y signos distintos dan −"
],
[
"jerarquia d'operacions|jerarquía de operaciones",
"l'ordre: parèntesis, potències, × i ÷, + i −|el orden: paréntesis, potencias, × y ÷, + y −"
]
],
"mistakes": [
[
"«−3 − 5 = 8, perquè menys per menys és més.»|«−3 − 5 = 8, porque menos por menos es más.»",
"La regla dels signes només serveix per multiplicar i dividir. Aquí deus 3 i en deus 5 més: −3 − 5 = −8.|La regla de los signos solo sirve para multiplicar y dividir. Aquí debes 3 y debes 5 más: −3 − 5 = −8."
],
[
"«(−2)³ = 8, perquè els negatius elevats sempre donen positiu.»|«(−2)³ = 8, porque los negativos elevados siempre dan positivo.»",
"Només amb exponent parell. Amb 3 factors negatius en queda un sense parella: (−2)³ = −8.|Solo con exponente par. Con 3 factores negativos queda uno sin pareja: (−2)³ = −8."
],
[
"«5 − 3 × (−2) = 2 × (−2) = −4.»|«5 − 3 × (−2) = 2 × (−2) = −4.»",
"La multiplicació va abans que la resta: 5 − (−6) = 11.|La multiplicación va antes que la resta: 5 − (−6) = 11."
]
],
"recap": [
"En × i ÷: signes iguals, +; diferents, −.|En × y ÷: signos iguales, +; distintos, −.",
"Ordre: parèntesis, potències, × i ÷, + i −.|Orden: paréntesis, potencias, × y ÷, + y −.",
"Un − davant d'un parèntesi canvia tots els signes de dins.|Un − delante de un paréntesis cambia todos los signos de dentro.",
"Base negativa: exponent parell, +; senar, −.|Base negativa: exponente par, +; impar, −."
],
"tip": "El truc del Cavaller: compta els signes −. Si n'hi ha un nombre parell, el resultat és positiu; si és senar, negatiu. Serveix per a productes llargs i per a potències.|El truco del Caballero: cuenta los signos −. Si hay un número par, el resultado es positivo; si es impar, negativo. Sirve para productos largos y para potencias."
},
"c7-2": {
"hook": "Si un autobús passa cada 12 minuts i un altre cada 18, quan coincidiran a la parada? Si vols tallar dues cintes en trossos iguals i tan llargs com puguis, quina mida triaràs? La divisibilitat respon aquestes preguntes.|Si un autobús pasa cada 12 minutos y otro cada 18, ¿cuándo coincidirán en la parada? Si quieres cortar dos cintas en trozos iguales y lo más largos posible, ¿qué medida elegirás? La divisibilidad responde estas preguntas.",
"parts": [
{
"t": "Múltiples i divisors|Múltiplos y divisores",
"x": "Els <b>múltiples</b> d'un número s'obtenen multiplicant-lo per 1, 2, 3…, i per això n'hi ha infinits. Un <b>divisor</b> d'un número el divideix exactament, amb residu 0, i n'hi ha una quantitat limitada. Són dues cares de la mateixa idea: si 24 és múltiple de 6, llavors 6 és divisor de 24.|Los <b>múltiplos</b> de un número se obtienen multiplicándolo por 1, 2, 3…, y por eso hay infinitos. Un <b>divisor</b> de un número lo divide exactamente, con resto 0, y hay una cantidad limitada. Son dos caras de la misma idea: si 24 es múltiplo de 6, entonces 6 es divisor de 24.",
"ex": [
"Múltiples de 6: 6, 12, 18, 24, …|Múltiplos de 6: 6, 12, 18, 24, …",
"6 × 4 = 24 → 6 és divisor de 24|6 × 4 = 24 → 6 es divisor de 24",
"Divisors de 12: <span class=\"hl\">1, 2, 3, 4, 6, 12</span>|Divisores de 12: <span class=\"hl\">1, 2, 3, 4, 6, 12</span>"
]
},
{
"t": "Criteris de divisibilitat|Criterios de divisibilidad",
"x": "Els criteris et diuen si un número és divisible sense fer la divisió. Per <b>2</b>: acaba en xifra parella. Per <b>3</b>: la suma de xifres és múltiple de 3. Per <b>5</b>: acaba en 0 o 5. Per <b>10</b>: acaba en 0. El del 3 funciona perquè 10, 100, 1.000… són un múltiple de 3 més 1 (9 + 1, 99 + 1…).|Los criterios te dicen si un número es divisible sin hacer la división. Por <b>2</b>: acaba en cifra par. Por <b>3</b>: la suma de cifras es múltiplo de 3. Por <b>5</b>: acaba en 0 o 5. Por <b>10</b>: acaba en 0. El del 3 funciona porque 10, 100, 1.000… son un múltiplo de 3 más 1 (9 + 1, 99 + 1…).",
"ex": [
"312 acaba en 2 → divisible per 2|312 acaba en 2 → divisible por 2",
"3 + 1 + 2 = 6 → divisible per 3|3 + 1 + 2 = 6 → divisible por 3",
"No acaba en 0 ni en 5 → no ho és per 5|No acaba en 0 ni en 5 → no lo es por 5",
"Comprovació: 312 ÷ 3 = <span class=\"hl\">104</span>|Comprobación: 312 ÷ 3 = <span class=\"hl\">104</span>"
]
},
{
"t": "Primers i factorització|Primos y factorización",
"x": "Un <b>nombre primer</b> només té dos divisors: l'1 i ell mateix (2, 3, 5, 7, 11, 13…). Els altres són <b>compostos</b> i es poden escriure com a producte de primers: és la <b>descomposició en factors primers</b>, i és única. Per trobar-la, divideix pel primer més petit possible fins arribar a 1.|Un <b>número primo</b> solo tiene dos divisores: el 1 y él mismo (2, 3, 5, 7, 11, 13…). Los demás son <b>compuestos</b> y se pueden escribir como producto de primos: es la <b>descomposición en factores primos</b>, y es única. Para encontrarla, divide por el primo más pequeño posible hasta llegar a 1.",
"ex": [
"60 ÷ 2 = 30 → 30 ÷ 2 = 15|60 ÷ 2 = 30 → 30 ÷ 2 = 15",
"15 ÷ 3 = 5 → 5 ÷ 5 = 1|15 ÷ 3 = 5 → 5 ÷ 5 = 1",
"60 = <span class=\"hl\">2² × 3 × 5</span>|60 = <span class=\"hl\">2² × 3 × 5</span>"
]
},
{
"t": "M.c.m. i m.c.d.|M.c.m. y m.c.d.",
"x": "El <b>m.c.m.</b> (mínim comú múltiple) és el múltiple comú més petit: agafa <b>tots</b> els factors amb l'exponent <b>més gran</b>. El <b>m.c.d.</b> (màxim comú divisor) és el divisor comú més gran: agafa només els factors <b>comuns</b> amb l'exponent <b>més petit</b>. Als problemes, «tornar a coincidir» és m.c.m. i «el tros més gran possible» és m.c.d.|El <b>m.c.m.</b> (mínimo común múltiplo) es el múltiplo común más pequeño: coge <b>todos</b> los factores con el exponente <b>mayor</b>. El <b>m.c.d.</b> (máximo común divisor) es el divisor común más grande: coge solo los factores <b>comunes</b> con el exponente <b>menor</b>. En los problemas, «volver a coincidir» es m.c.m. y «el trozo más grande posible» es m.c.d.",
"ex": [
"12 = 2² × 3 i 18 = 2 × 3²|12 = 2² × 3 y 18 = 2 × 3²",
"m.c.d. = 2 × 3 = <span class=\"hl\">6</span>|m.c.d. = 2 × 3 = <span class=\"hl\">6</span>",
"m.c.m. = 2² × 3² = <span class=\"hl\">36</span>|m.c.m. = 2² × 3² = <span class=\"hl\">36</span>",
"Busos cada 12 i 18 min → coincideixen als 36|Buses cada 12 y 18 min → coinciden a los 36"
]
}
],
"words": [
[
"múltiple|múltiplo",
"el resultat de multiplicar un número per un natural: 18 és múltiple de 6|el resultado de multiplicar un número por un natural: 18 es múltiplo de 6"
],
[
"divisor|divisor",
"número que en divideix un altre exactament, amb residu 0|número que divide a otro exactamente, con resto 0"
],
[
"nombre primer|número primo",
"número més gran que 1 amb només dos divisors: l'1 i ell mateix|número mayor que 1 con solo dos divisores: el 1 y él mismo"
],
[
"nombre compost|número compuesto",
"número amb més de dos divisors: 9 = 3 × 3|número con más de dos divisores: 9 = 3 × 3"
],
[
"factorització|factorización",
"escriure un número com a producte de primers: 12 = 2² × 3|escribir un número como producto de primos: 12 = 2² × 3"
]
],
"mistakes": [
[
"«L'1 és primer.»|«El 1 es primo.»",
"Un primer ha de tenir exactament dos divisors, i l'1 només en té un. El primer primer és el 2, l'únic parell.|Un primo debe tener exactamente dos divisores, y el 1 solo tiene uno. El primer primo es el 2, el único par."
],
[
"«23 és divisible per 3 perquè acaba en 3.»|«23 es divisible por 3 porque acaba en 3.»",
"Per al 3 mira la suma de xifres: 2 + 3 = 5, que no és múltiple de 3. Per tant, 23 no és divisible per 3.|Para el 3 mira la suma de cifras: 2 + 3 = 5, que no es múltiplo de 3. Por tanto, 23 no es divisible por 3."
],
[
"«El m.c.m. de 12 i 18 és 6.»|«El m.c.m. de 12 y 18 es 6.»",
"El 6 és el m.c.d. El m.c.m. ha de ser múltiple dels dos, i per tant més gran o igual que el més gran: és 36.|El 6 es el m.c.d. El m.c.m. debe ser múltiplo de los dos, y por tanto mayor o igual que el mayor: es 36."
]
],
"recap": [
"Múltiples: infinits. Divisors: limitats.|Múltiplos: infinitos. Divisores: limitados.",
"Primer: només divisible per 1 i per ell mateix.|Primo: solo divisible por 1 y por sí mismo.",
"m.c.m.: tots els factors, exponent més gran.|m.c.m.: todos los factores, exponente mayor.",
"m.c.d.: factors comuns, exponent més petit.|m.c.d.: factores comunes, exponente menor."
],
"tip": "El truc del Cavaller: el m.c.d. mai no pot ser més gran que el número més petit, i el m.c.m. mai no pot ser més petit que el més gran. Si et surt al revés, has intercanviat les regles.|El truco del Caballero: el m.c.d. nunca puede ser mayor que el número más pequeño, y el m.c.m. nunca puede ser menor que el mayor. Si te sale al revés, has intercambiado las reglas."
},
"c7-3": {
"hook": "Una recepta demana 3/4 de tassa de farina i en vols fer la meitat; un mapa diu que ja has fet 2/5 del camí. Operar amb fraccions et permet treballar amb parts exactes, sense arrodonir.|Una receta pide 3/4 de taza de harina y quieres hacer la mitad; un mapa dice que ya has hecho 2/5 del camino. Operar con fracciones te permite trabajar con partes exactas, sin redondear.",
"parts": [
{
"t": "Simplificar|Simplificar",
"x": "Simplificar és dividir el numerador i el denominador pel <b>mateix</b> número. La fracció no canvia de valor, perquè és com agrupar les parts de dues en dues o de tres en tres. Quan ja no es pot dividir més, tens la <b>fracció irreductible</b>; si divideixes pel m.c.d., hi arribes d'un sol cop.|Simplificar es dividir el numerador y el denominador por el <b>mismo</b> número. La fracción no cambia de valor, porque es como agrupar las partes de dos en dos o de tres en tres. Cuando ya no se puede dividir más, tienes la <b>fracción irreducible</b>; si divides por el m.c.d., llegas de una sola vez.",
"ex": [
"12/18: m.c.d.(12, 18) = 6|12/18: m.c.d.(12, 18) = 6",
"12 ÷ 6 = 2 i 18 ÷ 6 = 3|12 ÷ 6 = 2 y 18 ÷ 6 = 3",
"12/18 = <span class=\"hl\">2/3</span>|12/18 = <span class=\"hl\">2/3</span>"
]
},
{
"t": "Sumar i restar|Sumar y restar",
"x": "Només pots sumar parts de la mateixa mida, així que primer cal un <b>denominador comú</b>: el m.c.m. dels denominadors. Converteix cada fracció en una d'equivalent amb aquest denominador i després suma o resta els numeradors. El denominador es manté.|Solo puedes sumar partes del mismo tamaño, así que primero hace falta un <b>denominador común</b>: el m.c.m. de los denominadores. Convierte cada fracción en una equivalente con ese denominador y después suma o resta los numeradores. El denominador se mantiene.",
"ex": [
"1/4 + 1/6: m.c.m.(4, 6) = 12|1/4 + 1/6: m.c.m.(4, 6) = 12",
"3/12 + 2/12 = <span class=\"hl\">5/12</span>|3/12 + 2/12 = <span class=\"hl\">5/12</span>",
"5/6 − 1/4 = 10/12 − 3/12 = <span class=\"hl\">7/12</span>|5/6 − 1/4 = 10/12 − 3/12 = <span class=\"hl\">7/12</span>"
]
},
{
"t": "Multiplicar i dividir|Multiplicar y dividir",
"x": "Per <b>multiplicar</b>, multiplica numeradors entre ells i denominadors entre ells: 2/3 de 3/5 és agafar una part d'una part. Per <b>dividir</b>, multiplica per la <b>inversa</b> de la segona fracció (és el mateix que multiplicar en creu). Dividir entre 4/5 vol dir preguntar quantes vegades hi cap 4/5.|Para <b>multiplicar</b>, multiplica numeradores entre sí y denominadores entre sí: 2/3 de 3/5 es coger una parte de una parte. Para <b>dividir</b>, multiplica por la <b>inversa</b> de la segunda fracción (es lo mismo que multiplicar en cruz). Dividir entre 4/5 significa preguntar cuántas veces cabe 4/5.",
"ex": [
"2/3 × 3/5 = 6/15 = <span class=\"hl\">2/5</span>|2/3 × 3/5 = 6/15 = <span class=\"hl\">2/5</span>",
"2/3 ÷ 4/5 = 2/3 × 5/4|2/3 ÷ 4/5 = 2/3 × 5/4",
"= 10/12 = <span class=\"hl\">5/6</span>|= 10/12 = <span class=\"hl\">5/6</span>"
]
},
{
"t": "Operacions combinades|Operaciones combinadas",
"x": "Amb fraccions la jerarquia és la mateixa que amb enters: parèntesis, potències, × i ÷, i al final + i −. Simplifica cada resultat parcial, així treballes amb números més petits i t'equivoques menys.|Con fracciones la jerarquía es la misma que con enteros: paréntesis, potencias, × y ÷, y al final + y −. Simplifica cada resultado parcial, así trabajas con números más pequeños y te equivocas menos.",
"ex": [
"1/2 + 1/3 × 3/4|1/2 + 1/3 × 3/4",
"Primer ×: 1/3 × 3/4 = 3/12 = 1/4|Primero ×: 1/3 × 3/4 = 3/12 = 1/4",
"1/2 + 1/4 = 2/4 + 1/4 = <span class=\"hl\">3/4</span>|1/2 + 1/4 = 2/4 + 1/4 = <span class=\"hl\">3/4</span>"
]
}
],
"words": [
[
"fraccions equivalents|fracciones equivalentes",
"fraccions que representen la mateixa quantitat: 2/3 = 4/6|fracciones que representan la misma cantidad: 2/3 = 4/6"
],
[
"fracció irreductible|fracción irreducible",
"la que ja no es pot simplificar més: 2/3|la que ya no se puede simplificar más: 2/3"
],
[
"denominador comú|denominador común",
"denominador igual per a totes les fraccions, normalment el m.c.m.|denominador igual para todas las fracciones, normalmente el m.c.m."
],
[
"fracció inversa|fracción inversa",
"la que té numerador i denominador intercanviats: la de 4/5 és 5/4|la que tiene numerador y denominador intercambiados: la de 4/5 es 5/4"
]
],
"mistakes": [
[
"«1/2 + 1/3 = 2/5.»|«1/2 + 1/3 = 2/5.»",
"Els denominadors no se sumen: indiquen la mida de les parts. Iguala'ls: 3/6 + 2/6 = 5/6.|Los denominadores no se suman: indican el tamaño de las partes. Iguálalos: 3/6 + 2/6 = 5/6."
],
[
"«2/3 ÷ 4/5 = 8/15, dividint en línia.»|«2/3 ÷ 4/5 = 8/15, dividiendo en línea.»",
"Això és multiplicar. Per dividir, multiplica per la inversa: 2/3 × 5/4 = 10/12 = 5/6.|Eso es multiplicar. Para dividir, multiplica por la inversa: 2/3 × 5/4 = 10/12 = 5/6."
],
[
"«1/2 + 1/3 × 3/4: primer sumo i dona 5/8.»|«1/2 + 1/3 × 3/4: primero sumo y da 5/8.»",
"El producte va primer: 1/2 + 1/4 = 3/4. Sumar primer només és correcte si hi ha parèntesi.|El producto va primero: 1/2 + 1/4 = 3/4. Sumar primero solo es correcto si hay paréntesis."
]
],
"recap": [
"Simplificar: divideix dalt i baix pel mateix número.|Simplificar: divide arriba y abajo por el mismo número.",
"Sumar i restar: primer, denominador comú.|Sumar y restar: primero, denominador común.",
"Multiplicar en línia; dividir, per la inversa.|Multiplicar en línea; dividir, por la inversa.",
"La jerarquia és la de sempre.|La jerarquía es la de siempre."
],
"tip": "El truc del Cavaller: abans de multiplicar, mira si pots simplificar un numerador amb un denominador. A 2/3 × 3/5 els dos 3 s'anul·len i queda 2/5 directament.|El truco del Caballero: antes de multiplicar, mira si puedes simplificar un numerador con un denominador. En 2/3 × 3/5 los dos 3 se anulan y queda 2/5 directamente."
},
"c7-4": {
"hook": "Una rajola quadrada de 30 cm de costat ocupa 30² cm², i una capsa cúbica de 10 cm té 10³ cm³ de volum. Les potències escriuen curt les multiplicacions llargues, i les arrels fan el camí de tornada.|Una baldosa cuadrada de 30 cm de lado ocupa 30² cm², y una caja cúbica de 10 cm tiene 10³ cm³ de volumen. Las potencias escriben corto las multiplicaciones largas, y las raíces hacen el camino de vuelta.",
"parts": [
{
"t": "Quadrats i cubs|Cuadrados y cubos",
"x": "Una <b>potència</b> és una multiplicació de factors iguals: la <b>base</b> és el número que es repeteix i l'<b>exponent</b> diu quantes vegades. Elevar al quadrat (exponent 2) dona l'àrea d'un quadrat, i elevar al cub (exponent 3), el volum d'un cub. D'aquí els noms.|Una <b>potencia</b> es una multiplicación de factores iguales: la <b>base</b> es el número que se repite y el <b>exponente</b> dice cuántas veces. Elevar al cuadrado (exponente 2) da el área de un cuadrado, y elevar al cubo (exponente 3), el volumen de un cubo. De ahí los nombres.",
"ex": [
"5² = 5 × 5 = <span class=\"hl\">25</span>|5² = 5 × 5 = <span class=\"hl\">25</span>",
"2³ = 2 × 2 × 2 = <span class=\"hl\">8</span>|2³ = 2 × 2 × 2 = <span class=\"hl\">8</span>",
"10³ = 10 × 10 × 10 = <span class=\"hl\">1.000</span>|10³ = 10 × 10 × 10 = <span class=\"hl\">1.000</span>"
]
},
{
"t": "Producte de potències|Producto de potencias",
"x": "Si multipliques potències de la <b>mateixa base</b>, deixes la base i <b>sumes els exponents</b>. És lògic: ajuntes tots els factors iguals i els comptes. La regla només val si la base és la mateixa.|Si multiplicas potencias de la <b>misma base</b>, dejas la base y <b>sumas los exponentes</b>. Es lógico: juntas todos los factores iguales y los cuentas. La regla solo vale si la base es la misma.",
"ex": [
"2³ × 2⁴ = (2·2·2) × (2·2·2·2)|2³ × 2⁴ = (2·2·2) × (2·2·2·2)",
"Són set 2: 2³⁺⁴ = 2⁷|Son siete 2: 2³⁺⁴ = 2⁷",
"2⁷ = <span class=\"hl\">128</span>|2⁷ = <span class=\"hl\">128</span>"
]
},
{
"t": "Quocient de potències|Cociente de potencias",
"x": "Si divideixes potències de la <b>mateixa base</b>, deixes la base i <b>restes els exponents</b> (el de dalt menys el de baix). Funciona perquè els factors iguals de dalt i de baix s'anul·len. Per això qualsevol número (diferent de 0) elevat a 0 val 1.|Si divides potencias de la <b>misma base</b>, dejas la base y <b>restas los exponentes</b> (el de arriba menos el de abajo). Funciona porque los factores iguales de arriba y de abajo se anulan. Por eso cualquier número (distinto de 0) elevado a 0 vale 1.",
"ex": [
"3⁵ ÷ 3² = 3⁵⁻² = 3³|3⁵ ÷ 3² = 3⁵⁻² = 3³",
"3³ = <span class=\"hl\">27</span>|3³ = <span class=\"hl\">27</span>",
"5³ ÷ 5³ = 5⁰ = <span class=\"hl\">1</span>|5³ ÷ 5³ = 5⁰ = <span class=\"hl\">1</span>"
]
},
{
"t": "Arrels quadrades|Raíces cuadradas",
"x": "L'<b>arrel quadrada</b> és l'operació inversa d'elevar al quadrat: √49 = 7 perquè 7² = 49. Els números com 1, 4, 9, 16, 25, 36, 49, 64… tenen arrel exacta i es diuen <b>quadrats perfectes</b>. Si no és exacta, busca els dos quadrats perfectes que l'envolten per saber entre quins enters es troba.|La <b>raíz cuadrada</b> es la operación inversa de elevar al cuadrado: √49 = 7 porque 7² = 49. Los números como 1, 4, 9, 16, 25, 36, 49, 64… tienen raíz exacta y se llaman <b>cuadrados perfectos</b>. Si no es exacta, busca los dos cuadrados perfectos que la rodean para saber entre qué enteros se encuentra.",
"ex": [
"√64 = 8, perquè 8² = 64|√64 = 8, porque 8² = 64",
"√50: 49 &lt; 50 &lt; 64|√50: 49 &lt; 50 &lt; 64",
"7 &lt; √50 &lt; 8 → entre <span class=\"hl\">7 i 8</span>|7 &lt; √50 &lt; 8 → entre <span class=\"hl\">7 y 8</span>"
]
}
],
"words": [
[
"base|base",
"el factor que es repeteix en una potència|el factor que se repite en una potencia"
],
[
"exponent|exponente",
"el número petit de dalt: quantes vegades es multiplica la base|el número pequeño de arriba: cuántas veces se multiplica la base"
],
[
"quadrat perfecte|cuadrado perfecto",
"número que és el quadrat d'un enter: 36 = 6²|número que es el cuadrado de un entero: 36 = 6²"
],
[
"arrel quadrada|raíz cuadrada",
"el número que, elevat al quadrat, dona el de dins: √81 = 9|el número que, elevado al cuadrado, da el de dentro: √81 = 9"
]
],
"mistakes": [
[
"«2³ = 6.»|«2³ = 6.»",
"No és base per exponent, és la base repetida: 2 × 2 × 2 = 8.|No es base por exponente, es la base repetida: 2 × 2 × 2 = 8."
],
[
"«2³ × 2⁴ = 2¹², multiplicant els exponents.»|«2³ × 2⁴ = 2¹², multiplicando los exponentes.»",
"En un producte de la mateixa base els exponents se sumen: 2³ × 2⁴ = 2⁷ = 128.|En un producto de la misma base los exponentes se suman: 2³ × 2⁴ = 2⁷ = 128."
],
[
"«√50 és 25, perquè és la meitat.»|«√50 es 25, porque es la mitad.»",
"L'arrel no és la meitat: 25² = 625. Com que 49 &lt; 50 &lt; 64, √50 és entre 7 i 8.|La raíz no es la mitad: 25² = 625. Como 49 &lt; 50 &lt; 64, √50 está entre 7 y 8."
]
],
"recap": [
"Potència: la base es multiplica tantes vegades com diu l'exponent.|Potencia: la base se multiplica tantas veces como dice el exponente.",
"Mateixa base: multiplicar, sumar exponents.|Misma base: multiplicar, sumar exponentes.",
"Mateixa base: dividir, restar exponents.|Misma base: dividir, restar exponentes.",
"√ desfà el quadrat: √49 = 7.|√ deshace el cuadrado: √49 = 7."
],
"tip": "El truc del Cavaller: aprèn-te de memòria els quadrats de l'1 al 15 (fins a 225). Amb ells trobaràs al moment qualsevol arrel exacta i sabràs entre quins enters cau la resta.|El truco del Caballero: apréndete de memoria los cuadrados del 1 al 15 (hasta 225). Con ellos encontrarás al momento cualquier raíz exacta y sabrás entre qué enteros cae el resto."
},
"c7-5": {
"hook": "Si una entrada de cine val x euros i hi vas amb 3 amics, pagareu 4x. L'àlgebra fa servir lletres per parlar de números que encara no coneixes i descobrir-los amb equacions.|Si una entrada de cine vale x euros y vas con 3 amigos, pagaréis 4x. El álgebra usa letras para hablar de números que todavía no conoces y descubrirlos con ecuaciones.",
"parts": [
{
"t": "Valor numèric|Valor numérico",
"x": "Una <b>expressió algebraica</b> combina números i lletres. Entre un número i una lletra hi ha una multiplicació amagada: 3x vol dir 3 × x. El <b>valor numèric</b> s'obté substituint la lletra per un número i fent les operacions amb la jerarquia de sempre. Si el número és negatiu, posa'l entre parèntesis.|Una <b>expresión algebraica</b> combina números y letras. Entre un número y una letra hay una multiplicación escondida: 3x significa 3 × x. El <b>valor numérico</b> se obtiene sustituyendo la letra por un número y haciendo las operaciones con la jerarquía de siempre. Si el número es negativo, ponlo entre paréntesis.",
"ex": [
"3x + 2 amb x = 4|3x + 2 con x = 4",
"3 × 4 + 2 = 12 + 2 = <span class=\"hl\">14</span>|3 × 4 + 2 = 12 + 2 = <span class=\"hl\">14</span>",
"5a − 1 amb a = −2: 5 × (−2) − 1 = <span class=\"hl\">−11</span>|5a − 1 con a = −2: 5 × (−2) − 1 = <span class=\"hl\">−11</span>"
]
},
{
"t": "Termes semblants|Términos semejantes",
"x": "Cada <b>terme</b> té un <b>coeficient</b> (el número) i una <b>part literal</b> (les lletres). Són <b>semblants</b> si tenen exactament la mateixa part literal, i només aquests es poden sumar o restar: sumes els coeficients i deixes la lletra. És com sumar pomes amb pomes: 5 pomes + 2 pomes = 7 pomes, però pomes i peres no s'ajunten.|Cada <b>término</b> tiene un <b>coeficiente</b> (el número) y una <b>parte literal</b> (las letras). Son <b>semejantes</b> si tienen exactamente la misma parte literal, y solo estos se pueden sumar o restar: sumas los coeficientes y dejas la letra. Es como sumar manzanas con manzanas: 5 manzanas + 2 manzanas = 7 manzanas, pero manzanas y peras no se juntan.",
"ex": [
"5x + 2x − 3 = <span class=\"hl\">7x − 3</span>|5x + 2x − 3 = <span class=\"hl\">7x − 3</span>",
"4a + 3b − a + b|4a + 3b − a + b",
"(4a − a) + (3b + b) = <span class=\"hl\">3a + 4b</span>|(4a − a) + (3b + b) = <span class=\"hl\">3a + 4b</span>"
]
},
{
"t": "Equacions d'un pas|Ecuaciones de un paso",
"x": "Una <b>equació</b> és una igualtat amb una incògnita, i resoldre-la és trobar el valor que la fa certa. Pensa en una balança: si fas la mateixa operació als dos costats, continua equilibrada. Desfàs cada operació amb la seva inversa: una suma amb una resta i un producte amb una divisió.|Una <b>ecuación</b> es una igualdad con una incógnita, y resolverla es encontrar el valor que la hace cierta. Piensa en una balanza: si haces la misma operación en los dos lados, sigue equilibrada. Deshaces cada operación con su inversa: una suma con una resta y un producto con una división.",
"ex": [
"x + 7 = 12 → x = 12 − 7 = <span class=\"hl\">5</span>|x + 7 = 12 → x = 12 − 7 = <span class=\"hl\">5</span>",
"x − 4 = 9 → x = 9 + 4 = <span class=\"hl\">13</span>|x − 4 = 9 → x = 9 + 4 = <span class=\"hl\">13</span>",
"3x = 21 → x = 21 ÷ 3 = <span class=\"hl\">7</span>|3x = 21 → x = 21 ÷ 3 = <span class=\"hl\">7</span>"
]
},
{
"t": "Equacions en dos passos|Ecuaciones en dos pasos",
"x": "Si la x té un número que la multiplica i un altre que se li suma, desfés primer la suma o la resta i després el producte. És l'ordre invers al del valor numèric, com quan et treus primer les sabates i després els mitjons. Al final, comprova-ho substituint.|Si la x tiene un número que la multiplica y otro que se le suma, deshaz primero la suma o la resta y después el producto. Es el orden inverso al del valor numérico, como cuando te quitas primero los zapatos y después los calcetines. Al final, compruébalo sustituyendo.",
"ex": [
"2x + 3 = 11|2x + 3 = 11",
"Restem 3: 2x = 8|Restamos 3: 2x = 8",
"Dividim entre 2: x = <span class=\"hl\">4</span>|Dividimos entre 2: x = <span class=\"hl\">4</span>",
"Comprovació: 2 × 4 + 3 = 11|Comprobación: 2 × 4 + 3 = 11"
]
}
],
"words": [
[
"incògnita|incógnita",
"la lletra que representa el número que busquem|la letra que representa el número que buscamos"
],
[
"coeficient|coeficiente",
"el número que multiplica la lletra: a 7x és 7|el número que multiplica la letra: en 7x es 7"
],
[
"termes semblants|términos semejantes",
"termes amb la mateixa part literal: 3x i −5x|términos con la misma parte literal: 3x y −5x"
],
[
"equació|ecuación",
"igualtat que només és certa per a alguns valors de la incògnita|igualdad que solo es cierta para algunos valores de la incógnita"
],
[
"solució|solución",
"el valor que fa certa l'equació|el valor que hace cierta la ecuación"
]
],
"mistakes": [
[
"«3x + 2 = 5x.»|«3x + 2 = 5x.»",
"3x i 2 no són semblants (un té x i l'altre no), així que no s'ajunten: 3x + 2 es queda així.|3x y 2 no son semejantes (uno tiene x y el otro no), así que no se juntan: 3x + 2 se queda así."
],
[
"«Si x = 4, 3x = 34.»|«Si x = 4, 3x = 34.»",
"3x vol dir 3 × x, no posar les xifres l'una al costat de l'altra: 3 × 4 = 12.|3x significa 3 × x, no poner las cifras una al lado de la otra: 3 × 4 = 12."
],
[
"«3x = 21 → x = 21 − 3 = 18.»|«3x = 21 → x = 21 − 3 = 18.»",
"El 3 multiplica la x, i un producte es desfà dividint: x = 21 ÷ 3 = 7.|El 3 multiplica la x, y un producto se deshace dividiendo: x = 21 ÷ 3 = 7."
]
],
"recap": [
"Valor numèric: substitueix la lletra i opera.|Valor numérico: sustituye la letra y opera.",
"Només se sumen els termes semblants.|Solo se suman los términos semejantes.",
"Equació: la mateixa operació als dos costats.|Ecuación: la misma operación en los dos lados.",
"Dos passos: primer + o −, després × o ÷.|Dos pasos: primero + o −, después × o ÷."
],
"tip": "El truc del Cavaller: acaba sempre substituint la solució a l'equació inicial. Si els dos costats donen el mateix, l'has encertada; si no, busca l'error abans de continuar.|El truco del Caballero: acaba siempre sustituyendo la solución en la ecuación inicial. Si los dos lados dan lo mismo, la has acertado; si no, busca el error antes de seguir."
},
"c7-6": {
"hook": "Rebaixes del 30 %, una pujada de l'IVA, repartir un premi segons el que ha posat cadascú: els percentatges i les proporcions són a les botigues, a les notícies i a les factures de casa.|Rebajas del 30 %, una subida del IVA, repartir un premio según lo que ha puesto cada uno: los porcentajes y las proporciones están en las tiendas, en las noticias y en las facturas de casa.",
"parts": [
{
"t": "Percentatges|Porcentajes",
"x": "Un <b>percentatge</b> diu quantes parts de cada 100 agafes: el 20 % vol dir 20 de cada 100, és a dir, 20/100 = 0,20. Per calcular-lo, multiplica pel percentatge i divideix entre 100, o multiplica directament pel decimal. Referències útils: 50 % és la meitat, 25 % és la quarta part i 10 % és dividir entre 10.|Un <b>porcentaje</b> dice cuántas partes de cada 100 coges: el 20 % significa 20 de cada 100, es decir, 20/100 = 0,20. Para calcularlo, multiplica por el porcentaje y divide entre 100, o multiplica directamente por el decimal. Referencias útiles: 50 % es la mitad, 25 % es la cuarta parte y 10 % es dividir entre 10.",
"ex": [
"20 % de 150 = 150 × 20 ÷ 100 = <span class=\"hl\">30</span>|20 % de 150 = 150 × 20 ÷ 100 = <span class=\"hl\">30</span>",
"O bé: 150 × 0,20 = 30|O bien: 150 × 0,20 = 30",
"10 % de 70 € = 70 ÷ 10 = <span class=\"hl\">7 €</span>|10 % de 70 € = 70 ÷ 10 = <span class=\"hl\">7 €</span>"
]
},
{
"t": "Augments i descomptes|Aumentos y descuentos",
"x": "Si un preu puja un 10 %, pagues el 100 % més el 10 %, és a dir, el 110 %: multiplica per <b>1,10</b>. Si baixa un 25 %, pagues el 100 % menys el 25 %, el 75 %: multiplica per <b>0,75</b>. Aquest número s'anomena <b>índex de variació</b> i et dona el preu final d'un sol pas.|Si un precio sube un 10 %, pagas el 100 % más el 10 %, es decir, el 110 %: multiplica por <b>1,10</b>. Si baja un 25 %, pagas el 100 % menos el 25 %, el 75 %: multiplica por <b>0,75</b>. Este número se llama <b>índice de variación</b> y te da el precio final de un solo paso.",
"ex": [
"Augment del 10 %: 80 € × 1,10 = <span class=\"hl\">88 €</span>|Aumento del 10 %: 80 € × 1,10 = <span class=\"hl\">88 €</span>",
"Descompte del 25 %: 60 € × 0,75 = <span class=\"hl\">45 €</span>|Descuento del 25 %: 60 € × 0,75 = <span class=\"hl\">45 €</span>",
"Comprovació: 60 − 15 = 45 €|Comprobación: 60 − 15 = 45 €"
]
},
{
"t": "Proporcionalitat directa|Proporcionalidad directa",
"x": "Dues magnituds són <b>directament proporcionals</b> si, quan una es multiplica per un número, l'altra es multiplica pel mateix: el doble d'entrades costa el doble. El quocient entre elles és sempre igual, i és la <b>constant de proporcionalitat</b>. La manera més segura de resoldre-ho és la <b>reducció a la unitat</b>: primer quant val 1 i després multipliques.|Dos magnitudes son <b>directamente proporcionales</b> si, cuando una se multiplica por un número, la otra se multiplica por el mismo: el doble de entradas cuesta el doble. El cociente entre ellas es siempre igual, y es la <b>constante de proporcionalidad</b>. La manera más segura de resolverlo es la <b>reducción a la unidad</b>: primero cuánto vale 1 y después multiplicas.",
"ex": [
"4 entrades costen 30 €|4 entradas cuestan 30 €",
"1 entrada: 30 ÷ 4 = 7,50 €|1 entrada: 30 ÷ 4 = 7,50 €",
"6 entrades: 6 × 7,50 = <span class=\"hl\">45 €</span>|6 entradas: 6 × 7,50 = <span class=\"hl\">45 €</span>"
]
},
{
"t": "Repartiments proporcionals|Repartos proporcionales",
"x": "En un <b>repartiment proporcional</b>, qui aporta més rep més. Suma totes les parts, divideix el total entre aquesta suma per saber quant val <b>una part</b> i multiplica pel que li toca a cadascú. Per comprovar-ho, la suma dels resultats ha de donar el total.|En un <b>reparto proporcional</b>, quien aporta más recibe más. Suma todas las partes, divide el total entre esa suma para saber cuánto vale <b>una parte</b> y multiplica por lo que le toca a cada uno. Para comprobarlo, la suma de los resultados debe dar el total.",
"ex": [
"50 € de premi; van posar 2 €, 3 € i 5 €|50 € de premio; pusieron 2 €, 3 € y 5 €",
"Parts: 2 + 3 + 5 = 10 → 50 ÷ 10 = 5 €|Partes: 2 + 3 + 5 = 10 → 50 ÷ 10 = 5 €",
"2 × 5 = 10 · 3 × 5 = 15 · 5 × 5 = 25|2 × 5 = 10 · 3 × 5 = 15 · 5 × 5 = 25",
"Reben <span class=\"hl\">10 €, 15 € i 25 €</span>|Reciben <span class=\"hl\">10 €, 15 € y 25 €</span>"
]
}
],
"words": [
[
"percentatge|porcentaje",
"quantitat de cada 100: 15 % = 15/100 = 0,15|cantidad de cada 100: 15 % = 15/100 = 0,15"
],
[
"índex de variació|índice de variación",
"el número pel qual multipliques: 1,10 per pujar un 10 %, 0,75 per baixar un 25 %|el número por el que multiplicas: 1,10 para subir un 10 %, 0,75 para bajar un 25 %"
],
[
"magnituds directament proporcionals|magnitudes directamente proporcionales",
"si una es duplica, l'altra també; el seu quocient és constant|si una se duplica, la otra también; su cociente es constante"
],
[
"constant de proporcionalitat|constante de proporcionalidad",
"el valor d'una unitat: 7,50 € per entrada|el valor de una unidad: 7,50 € por entrada"
]
],
"mistakes": [
[
"«Si puja un 10 % i després baixa un 10 %, torno al preu inicial.»|«Si sube un 10 % y después baja un 10 %, vuelvo al precio inicial.»",
"El segon 10 % es calcula sobre un preu més gran: 100 € × 1,10 = 110 € i 110 € × 0,90 = 99 €.|El segundo 10 % se calcula sobre un precio mayor: 100 € × 1,10 = 110 € y 110 € × 0,90 = 99 €."
],
[
"«Un descompte del 25 % sobre 60 €: 60 × 0,25 = 15 €, pago 15 €.»|«Un descuento del 25 % sobre 60 €: 60 × 0,25 = 15 €, pago 15 €.»",
"15 € és el que t'estalvies, no el que pagues. Pagues 60 − 15 = 45 €, o directament 60 × 0,75.|15 € es lo que te ahorras, no lo que pagas. Pagas 60 − 15 = 45 €, o directamente 60 × 0,75."
],
[
"«Repartim 50 € entre 3 persones: 50 ÷ 3 per a cadascú.»|«Repartimos 50 € entre 3 personas: 50 ÷ 3 para cada uno.»",
"Això és repartir a parts iguals. Si és proporcional, divideix entre la suma de les parts (10) i multiplica.|Eso es repartir a partes iguales. Si es proporcional, divide entre la suma de las partes (10) y multiplica."
]
],
"recap": [
"p % d'una quantitat = quantitat × p ÷ 100.|p % de una cantidad = cantidad × p ÷ 100.",
"Augment del p %: × (1 + p/100). Descompte: × (1 − p/100).|Aumento del p %: × (1 + p/100). Descuento: × (1 − p/100).",
"Proporcionalitat: troba primer el valor d'1.|Proporcionalidad: halla primero el valor de 1.",
"Repartiment: total ÷ suma de parts = valor d'una part.|Reparto: total ÷ suma de partes = valor de una parte."
],
"tip": "El truc del Cavaller: fes una estimació abans de calcular. Si és un descompte, el preu final ha de ser més petit que l'inicial; si és un augment, més gran. Si no ho és, has triat malament l'índex.|El truco del Caballero: haz una estimación antes de calcular. Si es un descuento, el precio final debe ser menor que el inicial; si es un aumento, mayor. Si no lo es, has elegido mal el índice."
},
"c7-7": {
"hook": "Per saber quanta pintura cal per a una paret, quanta tanca envolta un jardí rodó o on és un punt en un mapa, necessites angles, àrees, el cercle i les coordenades.|Para saber cuánta pintura hace falta para una pared, cuánta valla rodea un jardín redondo o dónde está un punto en un mapa, necesitas ángulos, áreas, el círculo y las coordenadas.",
"parts": [
{
"t": "Els angles del triangle|Los ángulos del triángulo",
"x": "Els tres angles de qualsevol triangle sumen sempre <b>180°</b>. Si retalles les tres puntes d'un triangle de paper i les col·loques una al costat de l'altra, formen un angle pla, que fa 180°. Per trobar l'angle que falta, resta a 180° la suma dels altres dos.|Los tres ángulos de cualquier triángulo suman siempre <b>180°</b>. Si recortas las tres puntas de un triángulo de papel y las colocas una al lado de la otra, forman un ángulo llano, que mide 180°. Para encontrar el ángulo que falta, resta a 180° la suma de los otros dos.",
"ex": [
"Angles de 50° i 70°: 50° + 70° = 120°|Ángulos de 50° y 70°: 50° + 70° = 120°",
"180° − 120° = <span class=\"hl\">60°</span>|180° − 120° = <span class=\"hl\">60°</span>",
"Equilàter: 180° ÷ 3 = 60° cada angle|Equilátero: 180° ÷ 3 = 60° cada ángulo"
]
},
{
"t": "Àrees de polígons|Áreas de polígonos",
"x": "L'<b>àrea</b> mesura la superfície en unitats quadrades (cm², m²). Rectangle i paral·lelogram: base × altura. Un <b>triangle</b> és la meitat d'un paral·lelogram, per això és base × altura ÷ 2. Rombe: D × d ÷ 2. Trapezi: (B + b) × h ÷ 2, perquè dos trapezis iguals formen un paral·lelogram.|El <b>área</b> mide la superficie en unidades cuadradas (cm², m²). Rectángulo y paralelogramo: base × altura. Un <b>triángulo</b> es la mitad de un paralelogramo, por eso es base × altura ÷ 2. Rombo: D × d ÷ 2. Trapecio: (B + b) × h ÷ 2, porque dos trapecios iguales forman un paralelogramo.",
"ex": [
"Triangle b = 6 cm, h = 4 cm|Triángulo b = 6 cm, h = 4 cm",
"A = 6 × 4 ÷ 2 = <span class=\"hl\">12 cm²</span>|A = 6 × 4 ÷ 2 = <span class=\"hl\">12 cm²</span>",
"Trapezi B = 8, b = 4, h = 5 (cm)|Trapecio B = 8, b = 4, h = 5 (cm)",
"A = (8 + 4) × 5 ÷ 2 = <span class=\"hl\">30 cm²</span>|A = (8 + 4) × 5 ÷ 2 = <span class=\"hl\">30 cm²</span>"
]
},
{
"t": "El cercle: longitud i àrea|El círculo: longitud y área",
"x": "En qualsevol circumferència, la longitud dividida pel diàmetre dona sempre el mateix número: <b>π ≈ 3,14</b>. Per això la longitud és <b>L = 2 × π × r</b> (el diàmetre és 2r). L'àrea del cercle, la superfície de dins, és <b>A = π × r²</b>. Si et donen el diàmetre, divideix-lo entre 2 per tenir el radi.|En cualquier circunferencia, la longitud dividida por el diámetro da siempre el mismo número: <b>π ≈ 3,14</b>. Por eso la longitud es <b>L = 2 × π × r</b> (el diámetro es 2r). El área del círculo, la superficie de dentro, es <b>A = π × r²</b>. Si te dan el diámetro, divídelo entre 2 para tener el radio.",
"ex": [
"r = 5 cm: L = 2 × 3,14 × 5 = <span class=\"hl\">31,4 cm</span>|r = 5 cm: L = 2 × 3,14 × 5 = <span class=\"hl\">31,4 cm</span>",
"r = 3 cm: A = 3,14 × 3² = 3,14 × 9|r = 3 cm: A = 3,14 × 3² = 3,14 × 9",
"A = <span class=\"hl\">28,26 cm²</span>|A = <span class=\"hl\">28,26 cm²</span>"
]
},
{
"t": "Coordenades cartesianes|Coordenadas cartesianas",
"x": "Dos eixos perpendiculars, l'<b>eix X</b> (horitzontal) i l'<b>eix Y</b> (vertical), es tallen a l'<b>origen</b> (0, 0). Un punt s'escriu (x, y): primer quant es mou a la dreta (+) o a l'esquerra (−) i després quant puja (+) o baixa (−). Els eixos divideixen el pla en quatre <b>quadrants</b>.|Dos ejes perpendiculares, el <b>eje X</b> (horizontal) y el <b>eje Y</b> (vertical), se cortan en el <b>origen</b> (0, 0). Un punto se escribe (x, y): primero cuánto se mueve a la derecha (+) o a la izquierda (−) y después cuánto sube (+) o baja (−). Los ejes dividen el plano en cuatro <b>cuadrantes</b>.",
"ex": [
"A(3, −2): 3 a la dreta, 2 avall|A(3, −2): 3 a la derecha, 2 abajo",
"B(−4, 1): 4 a l'esquerra, 1 amunt|B(−4, 1): 4 a la izquierda, 1 arriba",
"A és al <span class=\"hl\">4t quadrant</span>, B al 2n|A está en el <span class=\"hl\">4.º cuadrante</span>, B en el 2.º"
]
}
],
"words": [
[
"radi|radio",
"distància del centre a qualsevol punt de la circumferència|distancia del centro a cualquier punto de la circunferencia"
],
[
"diàmetre|diámetro",
"segment que passa pel centre i uneix dos punts de la circumferència: fa 2 radis|segmento que pasa por el centro y une dos puntos de la circunferencia: mide 2 radios"
],
[
"circumferència i cercle|circunferencia y círculo",
"la circumferència és la línia; el cercle, la superfície de dins|la circunferencia es la línea; el círculo, la superficie de dentro"
],
[
"π (pi)|π (pi)",
"la longitud d'una circumferència dividida pel seu diàmetre: 3,14159…|la longitud de una circunferencia dividida por su diámetro: 3,14159…"
],
[
"origen de coordenades|origen de coordenadas",
"el punt (0, 0), on es tallen els eixos|el punto (0, 0), donde se cortan los ejes"
]
],
"mistakes": [
[
"«Diàmetre 10 cm: A = 3,14 × 10² = 314 cm².»|«Diámetro 10 cm: A = 3,14 × 10² = 314 cm².»",
"La fórmula demana el radi: r = 10 ÷ 2 = 5 cm, i A = 3,14 × 25 = 78,5 cm².|La fórmula pide el radio: r = 10 ÷ 2 = 5 cm, y A = 3,14 × 25 = 78,5 cm²."
],
[
"«r² és r × 2: si r = 3, A = 3,14 × 6.»|«r² es r × 2: si r = 3, A = 3,14 × 6.»",
"r² és r × r = 9, així que A = 3,14 × 9 = 28,26 cm².|r² es r × r = 9, así que A = 3,14 × 9 = 28,26 cm²."
],
[
"«El punt (2, 5) és 2 amunt i 5 a la dreta.»|«El punto (2, 5) es 2 arriba y 5 a la derecha.»",
"Primer va l'horitzontal (x) i després la vertical (y): 2 a la dreta i 5 amunt.|Primero va la horizontal (x) y después la vertical (y): 2 a la derecha y 5 arriba."
]
],
"recap": [
"Angles d'un triangle: sumen 180°.|Ángulos de un triángulo: suman 180°.",
"Triangle: base × altura ÷ 2.|Triángulo: base × altura ÷ 2.",
"Circumferència: L = 2πr. Cercle: A = πr².|Circunferencia: L = 2πr. Círculo: A = πr².",
"Punt (x, y): primer horitzontal, després vertical.|Punto (x, y): primero horizontal, después vertical."
],
"tip": "El truc del Cavaller: mira les unitats. La longitud va en cm i l'àrea en cm²; si a la fórmula hi ha r², el resultat és una àrea. Així no confondràs mai 2πr amb πr².|El truco del Caballero: mira las unidades. La longitud va en cm y el área en cm²; si en la fórmula hay r², el resultado es un área. Así nunca confundirás 2πr con πr²."
},
"c7-8": {
"hook": "La nota mitjana del trimestre, el sou més habitual d'una empresa o la probabilitat que plogui demà: l'estadística resumeix moltes dades en un sol número, i la probabilitat mesura com de possible és una cosa.|La nota media del trimestre, el sueldo más habitual de una empresa o la probabilidad de que llueva mañana: la estadística resume muchos datos en un solo número, y la probabilidad mide lo posible que es algo.",
"parts": [
{
"t": "La mitjana|La media",
"x": "La <b>mitjana</b> és el valor que tocaria a cada dada si repartíssim el total a parts iguals. Es calcula sumant totes les dades i dividint pel nombre de dades. Un sol valor molt extrem la pot moure molt.|La <b>media</b> es el valor que tocaría a cada dato si repartiéramos el total a partes iguales. Se calcula sumando todos los datos y dividiendo por el número de datos. Un solo valor muy extremo la puede mover mucho.",
"ex": [
"Notes: 6, 7, 5, 9, 8|Notas: 6, 7, 5, 9, 8",
"Suma: 6 + 7 + 5 + 9 + 8 = 35|Suma: 6 + 7 + 5 + 9 + 8 = 35",
"Mitjana: 35 ÷ 5 = <span class=\"hl\">7</span>|Media: 35 ÷ 5 = <span class=\"hl\">7</span>"
]
},
{
"t": "La mediana i la moda|La mediana y la moda",
"x": "La <b>mediana</b> és el valor del mig quan les dades estan <b>ordenades</b>: la meitat queda per sota i l'altra meitat per sobre. Si el nombre de dades és parell, fes la mitjana dels dos del mig. La <b>moda</b> és el valor que es repeteix més vegades; pot haver-n'hi més d'una.|La <b>mediana</b> es el valor del medio cuando los datos están <b>ordenados</b>: la mitad queda por debajo y la otra mitad por encima. Si el número de datos es par, haz la media de los dos del medio. La <b>moda</b> es el valor que más se repite; puede haber más de una.",
"ex": [
"9, 2, 5 → 2, 5, 9 → mediana <span class=\"hl\">5</span>|9, 2, 5 → 2, 5, 9 → mediana <span class=\"hl\">5</span>",
"3, 8, 4, 10 → 3, 4, 8, 10|3, 8, 4, 10 → 3, 4, 8, 10",
"Mediana: (4 + 8) ÷ 2 = <span class=\"hl\">6</span>|Mediana: (4 + 8) ÷ 2 = <span class=\"hl\">6</span>",
"3, 4, 4, 7 → moda <span class=\"hl\">4</span>|3, 4, 4, 7 → moda <span class=\"hl\">4</span>"
]
},
{
"t": "Probabilitat|Probabilidad",
"x": "En un experiment aleatori amb resultats igual de possibles, la <b>probabilitat</b> d'un esdeveniment és <b>casos favorables ÷ casos possibles</b> (regla de Laplace). Sempre és un número entre 0 (impossible) i 1 (segur). També es pot expressar en percentatge.|En un experimento aleatorio con resultados igual de posibles, la <b>probabilidad</b> de un suceso es <b>casos favorables ÷ casos posibles</b> (regla de Laplace). Siempre es un número entre 0 (imposible) y 1 (seguro). También se puede expresar en porcentaje.",
"ex": [
"Dau: treure un número parell|Dado: sacar un número par",
"Favorables: 2, 4, 6 → 3 de 6 possibles|Favorables: 2, 4, 6 → 3 de 6 posibles",
"P = 3/6 = <span class=\"hl\">1/2</span> = 50 %|P = 3/6 = <span class=\"hl\">1/2</span> = 50 %"
]
},
{
"t": "Dues monedes|Dos monedas",
"x": "Quan hi ha dos experiments junts, primer escriu tots els casos possibles de manera ordenada. Amb dues monedes hi ha <b>4 casos</b>, no 3: CC, CX, XC i XX (C = cara, X = creu). «Una cara i una creu» surt de dues maneres, per això és més probable que «dues cares».|Cuando hay dos experimentos juntos, primero escribe todos los casos posibles de manera ordenada. Con dos monedas hay <b>4 casos</b>, no 3: CC, CX, XC y XX (C = cara, X = cruz). «Una cara y una cruz» sale de dos maneras, por eso es más probable que «dos caras».",
"ex": [
"Casos: CC, CX, XC, XX → 4|Casos: CC, CX, XC, XX → 4",
"Dues cares: <span class=\"hl\">1/4</span>|Dos caras: <span class=\"hl\">1/4</span>",
"Una cara i una creu: 2/4 = <span class=\"hl\">1/2</span>|Una cara y una cruz: 2/4 = <span class=\"hl\">1/2</span>"
]
}
],
"words": [
[
"mitjana|media",
"suma de les dades dividida pel nombre de dades|suma de los datos dividida por el número de datos"
],
[
"mediana|mediana",
"el valor central de les dades ordenades|el valor central de los datos ordenados"
],
[
"moda|moda",
"el valor que es repeteix més vegades|el valor que más se repite"
],
[
"experiment aleatori|experimento aleatorio",
"experiment del qual no pots saber el resultat abans de fer-lo: tirar un dau|experimento del que no puedes saber el resultado antes de hacerlo: tirar un dado"
],
[
"espai mostral|espacio muestral",
"el conjunt de tots els resultats possibles: {1, 2, 3, 4, 5, 6}|el conjunto de todos los resultados posibles: {1, 2, 3, 4, 5, 6}"
]
],
"mistakes": [
[
"«La mediana de 9, 2, 5 és 2, perquè és el del mig.»|«La mediana de 9, 2, 5 es 2, porque es el del medio.»",
"Cal ordenar abans: 2, 5, 9. La mediana és 5.|Hay que ordenar antes: 2, 5, 9. La mediana es 5."
],
[
"«Amb dues monedes hi ha 3 casos: dues cares, dues creus o una de cada.»|«Con dos monedas hay 3 casos: dos caras, dos cruces o una de cada.»",
"«Una de cada» surt de dues maneres (CX i XC). Hi ha 4 casos igual de probables, i P(dues cares) = 1/4, no 1/3.|«Una de cada» sale de dos maneras (CX y XC). Hay 4 casos igual de probables, y P(dos caras) = 1/4, no 1/3."
],
[
"«La probabilitat de treure un 7 amb un dau és 7/6.»|«La probabilidad de sacar un 7 con un dado es 7/6.»",
"Una probabilitat mai no passa d'1. Treure un 7 és impossible: 0 casos favorables, P = 0/6 = 0.|Una probabilidad nunca pasa de 1. Sacar un 7 es imposible: 0 casos favorables, P = 0/6 = 0."
]
],
"recap": [
"Mitjana: suma i divideix pel nombre de dades.|Media: suma y divide por el número de datos.",
"Mediana: ordena i agafa el del mig.|Mediana: ordena y coge el del medio.",
"Moda: el que més es repeteix.|Moda: el que más se repite.",
"Probabilitat: favorables ÷ possibles, entre 0 i 1.|Probabilidad: favorables ÷ posibles, entre 0 y 1."
],
"tip": "El truc del Cavaller: en probabilitat, abans de comptar, escriu la llista completa de casos. Amb dues monedes o dos daus, fes-ho en ordre (primera, segona) i no te'n deixaràs cap.|El truco del Caballero: en probabilidad, antes de contar, escribe la lista completa de casos. Con dos monedas o dos dados, hazlo en orden (primera, segunda) y no te dejarás ninguno."
},
"c8-1": {
"hook": "Un compte de temperatures sota zero, un saldo en números vermells o una recepta per a mitja família: a la vida real els enters i les fraccions apareixen barrejats en una sola operació.|Temperaturas bajo cero, un saldo en números rojos o una receta para media familia: en la vida real los enteros y las fracciones aparecen mezclados en una sola operación.",
"parts": [
{
"t": "Jerarquia i signes|Jerarquía y signos",
"x": "Les operacions tenen un ordre fix: <b>parèntesis</b>, <b>potències</b>, <b>multiplicacions i divisions</b> i, al final, <b>sumes i restes</b>. Existeix perquè tothom obtingui el mateix resultat. Quan multipliques o divideixes enters, signes iguals donen <b>+</b> i signes diferents donen <b>−</b>; restar un negatiu és sumar el seu oposat.|Las operaciones tienen un orden fijo: <b>paréntesis</b>, <b>potencias</b>, <b>multiplicaciones y divisiones</b> y, al final, <b>sumas y restas</b>. Existe para que todo el mundo obtenga el mismo resultado. Al multiplicar o dividir enteros, signos iguales dan <b>+</b> y signos distintos dan <b>−</b>; restar un negativo es sumar su opuesto.",
"ex": [
"5 − 3 × (2 − 6)|5 − 3 × (2 − 6)",
"Parèntesi: 2 − 6 = −4|Paréntesis: 2 − 6 = −4",
"Producte: 3 × (−4) = −12|Producto: 3 × (−4) = −12",
"5 − (−12) = 5 + 12 = <span class=\"hl\">17</span>|5 − (−12) = 5 + 12 = <span class=\"hl\">17</span>"
]
},
{
"t": "Potències de negatius|Potencias de negativos",
"x": "Una potència és una multiplicació repetida. Si la base és negativa, cada parella de signes menys dona un més: amb exponent <b>parell</b> el resultat és positiu i amb exponent <b>senar</b>, negatiu. Compte: el parèntesi decideix quina és la base. A (−3)² la base és −3; a −3² la base és només 3.|Una potencia es una multiplicación repetida. Si la base es negativa, cada pareja de signos menos da un más: con exponente <b>par</b> el resultado es positivo y con exponente <b>impar</b>, negativo. Ojo: el paréntesis decide cuál es la base. En (−3)² la base es −3; en −3² la base es solo 3.",
"ex": [
"(−3)² = (−3) × (−3) = <span class=\"hl\">9</span>|(−3)² = (−3) × (−3) = <span class=\"hl\">9</span>",
"(−2)³ = (−2) × (−2) × (−2) = <span class=\"hl\">−8</span>|(−2)³ = (−2) × (−2) × (−2) = <span class=\"hl\">−8</span>",
"−3² = −(3 × 3) = <span class=\"hl\">−9</span>|−3² = −(3 × 3) = <span class=\"hl\">−9</span>"
]
},
{
"t": "Fraccions combinades|Fracciones combinadas",
"x": "La jerarquia és la mateixa amb fraccions. Per multiplicar, numerador per numerador i denominador per denominador. Per sumar o restar, primer cal el <b>mateix denominador</b> (el m.c.m.), perquè només es poden sumar trossos de la mateixa mida. Simplifica sempre que puguis.|La jerarquía es la misma con fracciones. Para multiplicar, numerador por numerador y denominador por denominador. Para sumar o restar, antes hace falta el <b>mismo denominador</b> (el m.c.m.), porque solo se pueden sumar trozos del mismo tamaño. Simplifica siempre que puedas.",
"ex": [
"2/3 − 1/2 × 4/5|2/3 − 1/2 × 4/5",
"Primer: 1/2 × 4/5 = 4/10 = 2/5|Primero: 1/2 × 4/5 = 4/10 = 2/5",
"m.c.m.(3, 5) = 15|m.c.m.(3, 5) = 15",
"10/15 − 6/15 = <span class=\"hl\">4/15</span>|10/15 − 6/15 = <span class=\"hl\">4/15</span>"
]
},
{
"t": "Potències de fraccions i tot plegat|Potencias de fracciones y todo junto",
"x": "Per elevar una fracció, s'eleven el <b>numerador</b> i el <b>denominador</b>: (a/b)ⁿ = aⁿ/bⁿ. La regla dels signes també hi val: una fracció negativa amb exponent senar continua sent negativa. En una operació llarga, resol la potència abans de multiplicar i sumar.|Para elevar una fracción, se elevan el <b>numerador</b> y el <b>denominador</b>: (a/b)ⁿ = aⁿ/bⁿ. La regla de los signos también vale: una fracción negativa con exponente impar sigue siendo negativa. En una operación larga, resuelve la potencia antes de multiplicar y sumar.",
"ex": [
"(−2/3)³ = −8/27|(−2/3)³ = −8/27",
"(−1/2)² × 8 − 3|(−1/2)² × 8 − 3",
"= 1/4 × 8 − 3|= 1/4 × 8 − 3",
"= 2 − 3 = <span class=\"hl\">−1</span>|= 2 − 3 = <span class=\"hl\">−1</span>"
]
}
],
"words": [
[
"jerarquia|jerarquía",
"l'ordre de les operacions: parèntesis, potències, × i ÷, + i −|el orden de las operaciones: paréntesis, potencias, × y ÷, + y −"
],
[
"oposat|opuesto",
"el mateix número amb el signe canviat: l'oposat de −5 és 5|el mismo número con el signo cambiado: el opuesto de −5 es 5"
],
[
"base i exponent|base y exponente",
"a 2³, la base 2 es multiplica 3 vegades (l'exponent)|en 2³, la base 2 se multiplica 3 veces (el exponente)"
],
[
"fracció irreductible|fracción irreducible",
"fracció que ja no es pot simplificar, com 4/15|fracción que ya no se puede simplificar, como 4/15"
]
],
"mistakes": [
[
"«−3² fa 9, perquè menys per menys és més.»|«−3² da 9, porque menos por menos es más.»",
"Sense parèntesi, la base és 3: −3² = −9. Només (−3)² = 9.|Sin paréntesis, la base es 3: −3² = −9. Solo (−3)² = 9."
],
[
"«2 + 3 × 4 = 20, vaig d'esquerra a dreta.»|«2 + 3 × 4 = 20, voy de izquierda a derecha.»",
"Primer la multiplicació: 3 × 4 = 12 i després 2 + 12 = 14.|Primero la multiplicación: 3 × 4 = 12 y después 2 + 12 = 14."
],
[
"«1/2 + 1/3 = 2/5, sumo dalt i sumo baix.»|«1/2 + 1/3 = 2/5, sumo arriba y sumo abajo.»",
"Cal el mateix denominador: 3/6 + 2/6 = 5/6.|Hace falta el mismo denominador: 3/6 + 2/6 = 5/6."
]
],
"recap": [
"Ordre: parèntesis, potències, × i ÷, + i −.|Orden: paréntesis, potencias, × y ÷, + y −.",
"Signes iguals donen +; signes diferents, −.|Signos iguales dan +; signos distintos, −.",
"Base negativa: exponent parell +, senar −.|Base negativa: exponente par +, impar −.",
"Per sumar fraccions cal el mateix denominador.|Para sumar fracciones hace falta el mismo denominador."
],
"tip": "Abans de calcular res, subratlla l'operació que va primer. Una operació combinada es resol per capes, i cada línia nova ha de ser una mica més curta.|Antes de calcular nada, subraya la operación que va primero. Una operación combinada se resuelve por capas, y cada línea nueva debe ser un poco más corta."
},
"c8-2": {
"hook": "La distància al Sol, la mida d'un virus o la memòria del teu mòbil són números enormes o minúsculs. Les potències permeten escriure'ls i calcular-hi sense perdre't entre zeros.|La distancia al Sol, el tamaño de un virus o la memoria de tu móvil son números enormes o minúsculos. Las potencias permiten escribirlos y calcular con ellos sin perderte entre ceros.",
"parts": [
{
"t": "Propietats de les potències|Propiedades de las potencias",
"x": "Amb la <b>mateixa base</b>, multiplicar vol dir sumar exponents i dividir vol dir restar-los, perquè només compten quants factors hi ha. La <b>potència d'una potència</b> multiplica els exponents: (2³)² vol dir 2³ × 2³, és a dir, sis dosos.|Con la <b>misma base</b>, multiplicar significa sumar exponentes y dividir significa restarlos, porque solo cuentan cuántos factores hay. La <b>potencia de una potencia</b> multiplica los exponentes: (2³)² significa 2³ × 2³, es decir, seis doses.",
"ex": [
"2³ × 2⁴ = 2⁷ = 128|2³ × 2⁴ = 2⁷ = 128",
"5⁶ ÷ 5⁴ = 5² = 25|5⁶ ÷ 5⁴ = 5² = 25",
"(3²)³ = 3⁶ = <span class=\"hl\">729</span>|(3²)³ = 3⁶ = <span class=\"hl\">729</span>"
]
},
{
"t": "Exponent 0 i exponent negatiu|Exponente 0 y exponente negativo",
"x": "Si divideixes un número entre ell mateix obtens 1, i restant exponents surt exponent 0: per això <b>a⁰ = 1</b> (si a ≠ 0). Si al denominador hi ha més factors, surt un exponent negatiu: <b>a⁻ⁿ = 1/aⁿ</b>. Un exponent negatiu fa el número petit, no negatiu.|Si divides un número entre sí mismo obtienes 1, y restando exponentes sale exponente 0: por eso <b>a⁰ = 1</b> (si a ≠ 0). Si en el denominador hay más factores, sale un exponente negativo: <b>a⁻ⁿ = 1/aⁿ</b>. Un exponente negativo hace el número pequeño, no negativo.",
"ex": [
"2³ ÷ 2³ = 2⁰ = 1|2³ ÷ 2³ = 2⁰ = 1",
"2² ÷ 2⁵ = 2⁻³|2² ÷ 2⁵ = 2⁻³",
"2⁻³ = 1/2³ = <span class=\"hl\">1/8</span>|2⁻³ = 1/2³ = <span class=\"hl\">1/8</span>",
"10⁻² = 1/100 = <span class=\"hl\">0,01</span>|10⁻² = 1/100 = <span class=\"hl\">0,01</span>"
]
},
{
"t": "Notació científica|Notación científica",
"x": "Un número en <b>notació científica</b> té la forma a × 10ⁿ, amb <b>a entre 1 i 10</b> (una sola xifra diferent de zero abans de la coma). L'exponent n diu quants llocs has mogut la coma: positiu per a números grans, negatiu per a números més petits que 1.|Un número en <b>notación científica</b> tiene la forma a × 10ⁿ, con <b>a entre 1 y 10</b> (una sola cifra distinta de cero antes de la coma). El exponente n dice cuántos lugares has movido la coma: positivo para números grandes, negativo para números menores que 1.",
"ex": [
"Terra–Sol: 150.000.000 km|Tierra–Sol: 150.000.000 km",
"Coma 8 llocs a l'esquerra|Coma 8 lugares a la izquierda",
"= <span class=\"hl\">1,5 × 10⁸</span> km|= <span class=\"hl\">1,5 × 10⁸</span> km",
"0,00032 = <span class=\"hl\">3,2 × 10⁻⁴</span>|0,00032 = <span class=\"hl\">3,2 × 10⁻⁴</span>"
]
},
{
"t": "De científica a número i arrels|De científica a número y raíces",
"x": "Per tornar al número normal, mou la coma tants llocs com diu l'exponent: a la dreta si és positiu, a l'esquerra si és negatiu. L'<b>arrel quadrada</b> desfà el quadrat: √144 = 12 perquè 12² = 144. Si no és un quadrat perfecte, busca entre quins dos quadrats queda.|Para volver al número normal, mueve la coma tantos lugares como dice el exponente: a la derecha si es positivo, a la izquierda si es negativo. La <b>raíz cuadrada</b> deshace el cuadrado: √144 = 12 porque 12² = 144. Si no es un cuadrado perfecto, busca entre qué dos cuadrados queda.",
"ex": [
"3,2 × 10⁴ = <span class=\"hl\">32.000</span>|3,2 × 10⁴ = <span class=\"hl\">32.000</span>",
"7 × 10⁻³ = <span class=\"hl\">0,007</span>|7 × 10⁻³ = <span class=\"hl\">0,007</span>",
"√144 = 12, perquè 12² = 144|√144 = 12, porque 12² = 144",
"√50: 7² = 49 i 8² = 64|√50: 7² = 49 y 8² = 64",
"√50 és entre 7 i 8: ≈ <span class=\"hl\">7,07</span>|√50 está entre 7 y 8: ≈ <span class=\"hl\">7,07</span>"
]
}
],
"words": [
[
"exponent|exponente",
"quantes vegades es multiplica la base per ella mateixa|cuántas veces se multiplica la base por sí misma"
],
[
"notació científica|notación científica",
"a × 10ⁿ amb a entre 1 i 10|a × 10ⁿ con a entre 1 y 10"
],
[
"arrel quadrada|raíz cuadrada",
"número que elevat al quadrat dona el de dins: √49 = 7|número que elevado al cuadrado da el de dentro: √49 = 7"
],
[
"quadrat perfecte|cuadrado perfecto",
"número que és el quadrat d'un enter: 1, 4, 9, 16, 25…|número que es el cuadrado de un entero: 1, 4, 9, 16, 25…"
]
],
"mistakes": [
[
"«2⁻³ és −8.»|«2⁻³ es −8.»",
"L'exponent negatiu indica una fracció: 2⁻³ = 1/8, positiu i petit.|El exponente negativo indica una fracción: 2⁻³ = 1/8, positivo y pequeño."
],
[
"«(2³)² = 2⁵, sumo els exponents.»|«(2³)² = 2⁵, sumo los exponentes.»",
"A la potència d'una potència es multipliquen: (2³)² = 2⁶ = 64.|En la potencia de una potencia se multiplican: (2³)² = 2⁶ = 64."
],
[
"«45 × 10⁶ ja està en notació científica.»|«45 × 10⁶ ya está en notación científica.»",
"El 45 no és entre 1 i 10. Ha de ser 4,5 × 10⁷.|El 45 no está entre 1 y 10. Debe ser 4,5 × 10⁷."
]
],
"recap": [
"Mateixa base: × suma exponents, ÷ els resta.|Misma base: × suma exponentes, ÷ los resta.",
"Potència d'una potència: es multipliquen.|Potencia de una potencia: se multiplican.",
"a⁰ = 1 i a⁻ⁿ = 1/aⁿ.|a⁰ = 1 y a⁻ⁿ = 1/aⁿ.",
"Notació científica: a × 10ⁿ amb a entre 1 i 10.|Notación científica: a × 10ⁿ con a entre 1 y 10."
],
"tip": "Compta els salts de la coma amb el dit. Número gran, exponent positiu; número més petit que 1, exponent negatiu. Si no quadra, has saltat cap al costat equivocat.|Cuenta los saltos de la coma con el dedo. Número grande, exponente positivo; número menor que 1, exponente negativo. Si no cuadra, has saltado hacia el lado equivocado."
},
"c8-3": {
"hook": "Quants dies trigarà la reforma si vénen més paletes? Quant costava aquella jaqueta abans de les rebaixes? La proporcionalitat respon aquestes preguntes cada dia.|¿Cuántos días tardará la reforma si vienen más albañiles? ¿Cuánto costaba esa chaqueta antes de las rebajas? La proporcionalidad responde estas preguntas cada día.",
"parts": [
{
"t": "Directa o inversa?|¿Directa o inversa?",
"x": "Dues magnitudes són <b>directament proporcionals</b> si, quan una es duplica, l'altra també: el seu <b>quocient</b> és constant. Són <b>inversament proporcionals</b> si, quan una es duplica, l'altra es redueix a la meitat: el seu <b>producte</b> és constant. Pregunta't: si n'hi ha més, en surt més o menys?|Dos magnitudes son <b>directamente proporcionales</b> si, cuando una se duplica, la otra también: su <b>cociente</b> es constante. Son <b>inversamente proporcionales</b> si, cuando una se duplica, la otra se reduce a la mitad: su <b>producto</b> es constante. Pregúntate: ¿si hay más, sale más o menos?",
"ex": [
"3 kg de pomes: 6 €; 6 kg: 12 €|3 kg de manzanas: 6 €; 6 kg: 12 €",
"Més kg, més €: <span class=\"hl\">directa</span>|Más kg, más €: <span class=\"hl\">directa</span>",
"2 aixetes: 6 h; 4 aixetes: 3 h|2 grifos: 6 h; 4 grifos: 3 h",
"Més aixetes, menys hores: <span class=\"hl\">inversa</span>|Más grifos, menos horas: <span class=\"hl\">inversa</span>"
]
},
{
"t": "Resoldre la inversa|Resolver la inversa",
"x": "En la proporcionalitat inversa, multiplica les dues dades conegudes: aquest producte és la <b>feina total</b> (o la distància, o la quantitat de menjar) i no canvia. Després divideix-lo entre el nou valor. Funciona perquè repartir la mateixa feina entre més persones fa que cadascuna en faci menys.|En la proporcionalidad inversa, multiplica los dos datos conocidos: ese producto es el <b>trabajo total</b> (o la distancia, o la cantidad de comida) y no cambia. Después divídelo entre el nuevo valor. Funciona porque repartir el mismo trabajo entre más personas hace que cada una haga menos.",
"ex": [
"A 60 km/h trigues 3 h|A 60 km/h tardas 3 h",
"Distància: 60 × 3 = 180 km|Distancia: 60 × 3 = 180 km",
"A 90 km/h: 180 ÷ 90 = <span class=\"hl\">2 h</span>|A 90 km/h: 180 ÷ 90 = <span class=\"hl\">2 h</span>"
]
},
{
"t": "Augments, descomptes i percentatge invers|Aumentos, descuentos y porcentaje inverso",
"x": "Un augment del 21 % és multiplicar per <b>1,21</b>, i un descompte del 20 % és multiplicar per <b>0,80</b> (pagues el 80 %). Aquest número és l'<b>índex de variació</b>. Si encadenes canvis, multiplica els índexs. Per trobar el preu original (percentatge invers), fes el camí al revés: <b>divideix</b> entre l'índex.|Un aumento del 21 % es multiplicar por <b>1,21</b>, y un descuento del 20 % es multiplicar por <b>0,80</b> (pagas el 80 %). Ese número es el <b>índice de variación</b>. Si encadenas cambios, multiplica los índices. Para hallar el precio original (porcentaje inverso), haz el camino al revés: <b>divide</b> entre el índice.",
"ex": [
"Jaqueta de 40 €, −20 %|Chaqueta de 40 €, −20 %",
"40 × 0,80 = 32 €|40 × 0,80 = 32 €",
"Al revés: pagues 32 € amb −20 %|Al revés: pagas 32 € con −20 %",
"Original: 32 ÷ 0,80 = <span class=\"hl\">40 €</span>|Original: 32 ÷ 0,80 = <span class=\"hl\">40 €</span>"
]
},
{
"t": "Repartiments proporcionals|Repartos proporcionales",
"x": "Repartir de manera <b>directament proporcional</b> vol dir que qui aporta més, rep més. Suma totes les parts, calcula quant val una part i multiplica per les parts de cadascú. Al final, comprova que la suma dona el total.|Repartir de forma <b>directamente proporcional</b> significa que quien aporta más, recibe más. Suma todas las partes, calcula cuánto vale una parte y multiplica por las partes de cada uno. Al final, comprueba que la suma da el total.",
"ex": [
"Premi de 90 € en proporció 2, 3 i 4|Premio de 90 € en proporción 2, 3 y 4",
"Parts: 2 + 3 + 4 = 9|Partes: 2 + 3 + 4 = 9",
"Una part: 90 ÷ 9 = 10 €|Una parte: 90 ÷ 9 = 10 €",
"Toquen <span class=\"hl\">20 €, 30 € i 40 €</span>|Tocan <span class=\"hl\">20 €, 30 € y 40 €</span>"
]
}
],
"words": [
[
"magnitud|magnitud",
"allò que es pot mesurar o comptar: temps, preu, velocitat…|lo que se puede medir o contar: tiempo, precio, velocidad…"
],
[
"proporcionalitat directa|proporcionalidad directa",
"el quocient entre les dues magnituds és constant|el cociente entre las dos magnitudes es constante"
],
[
"proporcionalitat inversa|proporcionalidad inversa",
"el producte entre les dues magnituds és constant|el producto entre las dos magnitudes es constante"
],
[
"índex de variació|índice de variación",
"número pel qual es multiplica: +15 % → 1,15; −15 % → 0,85|número por el que se multiplica: +15 % → 1,15; −15 % → 0,85"
]
],
"mistakes": [
[
"«4 pintors triguen 6 dies, doncs 8 pintors en triguen 12.»|«4 pintores tardan 6 días, así que 8 pintores tardan 12.»",
"Més pintors, menys dies: és inversa. 4 × 6 = 24 i 24 ÷ 8 = 3 dies.|Más pintores, menos días: es inversa. 4 × 6 = 24 y 24 ÷ 8 = 3 días."
],
[
"«Pago 32 € amb un 20 % de descompte: l'original és 32 + 20 % = 38,40 €.»|«Pago 32 € con un 20 % de descuento: el original es 32 + 20 % = 38,40 €.»",
"El 20 % era del preu original, no dels 32 €. Divideix: 32 ÷ 0,80 = 40 €.|El 20 % era del precio original, no de los 32 €. Divide: 32 ÷ 0,80 = 40 €."
],
[
"«Si puja un 10 % i baixa un 10 %, queda igual.»|«Si sube un 10 % y baja un 10 %, se queda igual.»",
"100 × 1,10 = 110 i 110 × 0,90 = 99. El segon 10 % es calcula sobre 110.|100 × 1,10 = 110 y 110 × 0,90 = 99. El segundo 10 % se calcula sobre 110."
]
],
"recap": [
"Directa: quocient constant. Inversa: producte constant.|Directa: cociente constante. Inversa: producto constante.",
"Inversa: multiplica i després divideix.|Inversa: multiplica y después divide.",
"Percentatges: multiplica per l'índex; l'original, divideix.|Porcentajes: multiplica por el índice; el original, divide.",
"Repartiment: total ÷ nombre de parts.|Reparto: total ÷ número de partes."
],
"tip": "Abans de calcular, fes-te una pregunta de sentit comú: el resultat ha de sortir més gran o més petit? Si la resposta no quadra amb la intuïció, revisa si era directa o inversa.|Antes de calcular, hazte una pregunta de sentido común: ¿el resultado debe salir mayor o menor? Si la respuesta no cuadra con la intuición, revisa si era directa o inversa."
},
"c8-4": {
"hook": "Una tarifa de mòbil de 10 € més 2 € per giga, o el preu d'una entrada amb descompte: l'àlgebra escriu aquestes regles amb lletres per poder calcular qualsevol cas.|Una tarifa de móvil de 10 € más 2 € por giga, o el precio de una entrada con descuento: el álgebra escribe estas reglas con letras para poder calcular cualquier caso.",
"parts": [
{
"t": "Treure parèntesis|Quitar paréntesis",
"x": "El número de davant d'un parèntesi multiplica <b>cada terme</b> de dins (propietat distributiva). Si davant hi ha un <b>signe menys</b>, canvien de signe tots els termes. Després agrupa els <b>termes semblants</b>: els que tenen la mateixa part literal.|El número de delante de un paréntesis multiplica <b>cada término</b> de dentro (propiedad distributiva). Si delante hay un <b>signo menos</b>, cambian de signo todos los términos. Después agrupa los <b>términos semejantes</b>: los que tienen la misma parte literal.",
"ex": [
"3(x + 2) = 3x + 6|3(x + 2) = 3x + 6",
"−2(x − 5) = −2x + 10|−2(x − 5) = −2x + 10",
"4 − (x − 3) = 4 − x + 3|4 − (x − 3) = 4 − x + 3",
"= <span class=\"hl\">7 − x</span>|= <span class=\"hl\">7 − x</span>"
]
},
{
"t": "Valor numèric|Valor numérico",
"x": "El <b>valor numèric</b> d'una expressió és el resultat de substituir la lletra per un número i calcular. Posa els negatius entre parèntesis per no equivocar-te amb els signes, i respecta la jerarquia de les operacions.|El <b>valor numérico</b> de una expresión es el resultado de sustituir la letra por un número y calcular. Pon los negativos entre paréntesis para no equivocarte con los signos, y respeta la jerarquía de las operaciones.",
"ex": [
"2x² − 3x per a x = −1|2x² − 3x para x = −1",
"2 × (−1)² − 3 × (−1)|2 × (−1)² − 3 × (−1)",
"= 2 × 1 + 3 = <span class=\"hl\">5</span>|= 2 × 1 + 3 = <span class=\"hl\">5</span>"
]
},
{
"t": "Equacions amb parèntesis i x als dos costats|Ecuaciones con paréntesis y x a los dos lados",
"x": "Una equació és una balança: si fas el mateix als dos costats, continua equilibrada. Primer treu parèntesis. Després passa les x a un costat i els números a l'altre: el que suma passa restant, i al revés. Al final, divideix pel número que acompanya la x i comprova la solució.|Una ecuación es una balanza: si haces lo mismo en los dos lados, sigue equilibrada. Primero quita paréntesis. Después pasa las x a un lado y los números al otro: lo que suma pasa restando, y al revés. Al final, divide por el número que acompaña a la x y comprueba la solución.",
"ex": [
"3(x − 2) = x + 8|3(x − 2) = x + 8",
"3x − 6 = x + 8|3x − 6 = x + 8",
"3x − x = 8 + 6 → 2x = 14|3x − x = 8 + 6 → 2x = 14",
"x = <span class=\"hl\">7</span> (3 × 5 = 15 i 7 + 8 = 15)|x = <span class=\"hl\">7</span> (3 × 5 = 15 y 7 + 8 = 15)"
]
},
{
"t": "Polinomis|Polinomios",
"x": "Un <b>polinomi</b> és una suma de monomis, com 3x² + 2x − 1. El seu <b>grau</b> és l'exponent més gran de la x. Per sumar o restar polinomis, opera només els termes del mateix grau; en restar, canvia el signe de tots els termes del segon.|Un <b>polinomio</b> es una suma de monomios, como 3x² + 2x − 1. Su <b>grado</b> es el exponente mayor de la x. Para sumar o restar polinomios, opera solo los términos del mismo grado; al restar, cambia el signo de todos los términos del segundo.",
"ex": [
"P = 3x² + 2x − 1 (grau 2)|P = 3x² + 2x − 1 (grado 2)",
"Q = x² − 5x + 4|Q = x² − 5x + 4",
"P + Q = <span class=\"hl\">4x² − 3x + 3</span>|P + Q = <span class=\"hl\">4x² − 3x + 3</span>",
"P − Q = <span class=\"hl\">2x² + 7x − 5</span>|P − Q = <span class=\"hl\">2x² + 7x − 5</span>"
]
}
],
"words": [
[
"terme semblant|término semejante",
"terme amb la mateixa part literal: 3x i −5x ho són|término con la misma parte literal: 3x y −5x lo son"
],
[
"valor numèric|valor numérico",
"resultat de substituir la lletra per un número|resultado de sustituir la letra por un número"
],
[
"equació|ecuación",
"igualtat amb una incògnita que només es compleix per a certs valors|igualdad con una incógnita que solo se cumple para ciertos valores"
],
[
"polinomi|polinomio",
"suma de monomis, com 3x² + 2x − 1|suma de monomios, como 3x² + 2x − 1"
],
[
"grau|grado",
"l'exponent més gran de la x en un polinomi|el exponente mayor de la x en un polinomio"
]
],
"mistakes": [
[
"«−(x − 4) = −x − 4.»|«−(x − 4) = −x − 4.»",
"El menys canvia el signe de tots dos termes: −(x − 4) = −x + 4.|El menos cambia el signo de los dos términos: −(x − 4) = −x + 4."
],
[
"«3(x + 2) = 3x + 2.»|«3(x + 2) = 3x + 2.»",
"El 3 multiplica tots els termes de dins: 3x + 6.|El 3 multiplica todos los términos de dentro: 3x + 6."
],
[
"«3x + 2x² = 5x³.»|«3x + 2x² = 5x³.»",
"x i x² no són semblants: no es poden ajuntar. Queda 2x² + 3x.|x y x² no son semejantes: no se pueden juntar. Queda 2x² + 3x."
]
],
"recap": [
"El número de fora multiplica cada terme de dins.|El número de fuera multiplica cada término de dentro.",
"Un menys davant del parèntesi canvia tots els signes.|Un menos delante del paréntesis cambia todos los signos.",
"Equació: x a un costat, números a l'altre.|Ecuación: x a un lado, números al otro.",
"Només es sumen termes semblants.|Solo se suman términos semejantes."
],
"tip": "Comprova sempre la solució substituint-la a l'equació original: si els dos costats donen el mateix, l'has encertada. Són deu segons que et salven un examen.|Comprueba siempre la solución sustituyéndola en la ecuación original: si los dos lados dan lo mismo, has acertado. Son diez segundos que te salvan un examen."
},
"c8-5": {
"hook": "Si dues entrades i un refresc costen 17 € i una entrada i un refresc 10 €, quant val cada cosa? Quan hi ha dues incògnites, necessites dues equacions que treballin juntes.|Si dos entradas y un refresco cuestan 17 € y una entrada y un refresco 10 €, ¿cuánto vale cada cosa? Cuando hay dos incógnitas, necesitas dos ecuaciones que trabajen juntas.",
"parts": [
{
"t": "Què és la solució d'un sistema|Qué es la solución de un sistema",
"x": "Un <b>sistema</b> són dues equacions amb dues incògnites, x i y, que s'han de complir <b>alhora</b>. La <b>solució</b> és la parella de valors (x, y) que fa certes totes dues. Una parella que només en compleix una no és solució.|Un <b>sistema</b> son dos ecuaciones con dos incógnitas, x e y, que se deben cumplir <b>a la vez</b>. La <b>solución</b> es la pareja de valores (x, y) que hace ciertas las dos. Una pareja que solo cumple una no es solución.",
"ex": [
"x + y = 10 i x − y = 2|x + y = 10 y x − y = 2",
"(6, 4): 6 + 4 = 10 i 6 − 4 = 2: <span class=\"hl\">sí</span>|(6, 4): 6 + 4 = 10 y 6 − 4 = 2: <span class=\"hl\">sí</span>",
"(7, 3): 7 + 3 = 10, però 7 − 3 = 4: no|(7, 3): 7 + 3 = 10, pero 7 − 3 = 4: no"
]
},
{
"t": "Suma i diferència|Suma y diferencia",
"x": "Si una equació té +y i l'altra −y, en <b>sumar-les</b> la y desapareix, perquè y − y = 0. Queda una equació amb només x, que ja saps resoldre. Després substitueix la x en qualsevol de les dues equacions per trobar la y.|Si una ecuación tiene +y y la otra −y, al <b>sumarlas</b> la y desaparece, porque y − y = 0. Queda una ecuación solo con x, que ya sabes resolver. Después sustituye la x en cualquiera de las dos ecuaciones para hallar la y.",
"ex": [
"Dos números sumen 20 i es diferencien en 6|Dos números suman 20 y se diferencian en 6",
"x + y = 20 i x − y = 6|x + y = 20 y x − y = 6",
"Sumant: 2x = 26 → x = 13|Sumando: 2x = 26 → x = 13",
"y = 20 − 13 = <span class=\"hl\">7</span>|y = 20 − 13 = <span class=\"hl\">7</span>"
]
},
{
"t": "Mètode de reducció|Método de reducción",
"x": "Si cap incògnita no desapareix directament, multiplica una equació (o les dues) per un número perquè una incògnita tingui el <b>mateix coeficient</b>. Llavors resta-les i s'elimina. Multiplicar tota una equació per un número no canvia les seves solucions.|Si ninguna incógnita desaparece directamente, multiplica una ecuación (o las dos) por un número para que una incógnita tenga el <b>mismo coeficiente</b>. Entonces réstalas y se elimina. Multiplicar toda una ecuación por un número no cambia sus soluciones.",
"ex": [
"2x + 3y = 12 i x + y = 5|2x + 3y = 12 y x + y = 5",
"2a × 2: 2x + 2y = 10|2ª × 2: 2x + 2y = 10",
"Restem: (2x + 3y) − (2x + 2y) = 12 − 10|Restamos: (2x + 3y) − (2x + 2y) = 12 − 10",
"y = 2 i x + 2 = 5 → x = 3|y = 2 y x + 2 = 5 → x = 3",
"Solució: <span class=\"hl\">x = 3, y = 2</span>|Solución: <span class=\"hl\">x = 3, y = 2</span>"
]
},
{
"t": "Problemes amb sistemes|Problemas con sistemas",
"x": "Per resoldre un problema: decideix què és x i què és y, tradueix cada frase de l'enunciat en una equació, resol el sistema i respon amb una frase. Comprova que la solució té sentit: no hi pot haver 2,5 conills.|Para resolver un problema: decide qué es x y qué es y, traduce cada frase del enunciado en una ecuación, resuelve el sistema y responde con una frase. Comprueba que la solución tiene sentido: no puede haber 2,5 conejos.",
"ex": [
"x gallines, y conills: 20 caps, 56 potes|x gallinas, y conejos: 20 cabezas, 56 patas",
"x + y = 20 i 2x + 4y = 56|x + y = 20 y 2x + 4y = 56",
"1a × 2 i restem: 2y = 16 → y = 8|1ª × 2 y restamos: 2y = 16 → y = 8",
"<span class=\"hl\">12 gallines i 8 conills</span>|<span class=\"hl\">12 gallinas y 8 conejos</span>"
]
}
],
"words": [
[
"sistema d'equacions|sistema de ecuaciones",
"dues equacions que s'han de complir alhora|dos ecuaciones que se deben cumplir a la vez"
],
[
"incògnita|incógnita",
"valor desconegut que representem amb una lletra|valor desconocido que representamos con una letra"
],
[
"solució d'un sistema|solución de un sistema",
"la parella (x, y) que compleix les dues equacions|la pareja (x, y) que cumple las dos ecuaciones"
],
[
"coeficient|coeficiente",
"el número que multiplica una incògnita: a 3y és 3|el número que multiplica una incógnita: en 3y es 3"
],
[
"mètode de reducció|método de reducción",
"sumar o restar equacions per eliminar una incògnita|sumar o restar ecuaciones para eliminar una incógnita"
]
],
"mistakes": [
[
"«Ja tinc x = 13, he acabat.»|«Ya tengo x = 13, he terminado.»",
"La solució és una parella: falta calcular la y substituint la x.|La solución es una pareja: falta calcular la y sustituyendo la x."
],
[
"«Resto les equacions però només canvio el signe del primer terme.»|«Resto las ecuaciones pero solo cambio el signo del primer término.»",
"En restar, es resten tots els termes, també el de després de l'igual.|Al restar, se restan todos los términos, también el de después del igual."
],
[
"«La comprovo a la primera equació i quadra: ja està.»|«La compruebo en la primera ecuación y cuadra: ya está.»",
"Ha de complir les dues. Moltes parelles en compleixen només una.|Debe cumplir las dos. Muchas parejas cumplen solo una."
]
],
"recap": [
"La solució és una parella (x, y).|La solución es una pareja (x, y).",
"Ha de complir les dues equacions alhora.|Debe cumplir las dos ecuaciones a la vez.",
"Reducció: iguala coeficients i suma o resta.|Reducción: iguala coeficientes y suma o resta.",
"Trobada una incògnita, substitueix per a l'altra.|Hallada una incógnita, sustituye para la otra."
],
"tip": "Mira els signes abans de començar: si una incògnita té signes contraris, suma; si té el mateix signe, resta. Així tries el camí curt.|Mira los signos antes de empezar: si una incógnita tiene signos contrarios, suma; si tiene el mismo signo, resta. Así eliges el camino corto."
},
"c8-6": {
"hook": "El preu d'un taxi segons els quilòmetres o l'aigua que queda al dipòsit segons el temps: una funció diu com canvia una cosa quan en canvia una altra, i la gràfica t'ho mostra d'un cop d'ull.|El precio de un taxi según los kilómetros o el agua que queda en el depósito según el tiempo: una función dice cómo cambia una cosa cuando cambia otra, y la gráfica te lo muestra de un vistazo.",
"parts": [
{
"t": "Coordenades|Coordenadas",
"x": "Cada punt del pla s'escriu (x, y). La <b>x</b> és el moviment horitzontal (dreta +, esquerra −) i la <b>y</b>, el vertical (amunt +, avall −). Els eixos divideixen el pla en quatre <b>quadrants</b>, numerats en sentit contrari a les agulles del rellotge.|Cada punto del plano se escribe (x, y). La <b>x</b> es el movimiento horizontal (derecha +, izquierda −) y la <b>y</b>, el vertical (arriba +, abajo −). Los ejes dividen el plano en cuatro <b>cuadrantes</b>, numerados en sentido contrario a las agujas del reloj.",
"ex": [
"A(3, −2): 3 a la dreta, 2 avall|A(3, −2): 3 a la derecha, 2 abajo",
"B(−4, 1): 4 a l'esquerra, 1 amunt|B(−4, 1): 4 a la izquierda, 1 arriba",
"A és al <span class=\"hl\">4t</span> quadrant; B, al <span class=\"hl\">2n</span>|A está en el <span class=\"hl\">4.º</span> cuadrante; B, en el <span class=\"hl\">2.º</span>"
]
},
{
"t": "Valor d'una funció|Valor de una función",
"x": "Una <b>funció</b> assigna a cada valor de x <b>un únic</b> valor de y. S'escriu f(x) = 3x − 2, i f(4) vol dir: substitueix la x per 4 i calcula. El resultat és la y del punt de la gràfica que té x = 4.|Una <b>función</b> asigna a cada valor de x <b>un único</b> valor de y. Se escribe f(x) = 3x − 2, y f(4) significa: sustituye la x por 4 y calcula. El resultado es la y del punto de la gráfica que tiene x = 4.",
"ex": [
"f(x) = 3x − 2|f(x) = 3x − 2",
"f(4) = 3 × 4 − 2 = <span class=\"hl\">10</span>|f(4) = 3 × 4 − 2 = <span class=\"hl\">10</span>",
"f(−1) = 3 × (−1) − 2 = <span class=\"hl\">−5</span>|f(−1) = 3 × (−1) − 2 = <span class=\"hl\">−5</span>"
]
},
{
"t": "El pendent|La pendiente",
"x": "En una recta y = mx + n, el <b>pendent</b> m és quant canvia la y quan la x augmenta 1. Si m és positiu, la recta puja; si és negatiu, baixa. La n és l'<b>ordenada a l'origen</b>: on talla l'eix vertical. Amb dos punts, m = canvi de y ÷ canvi de x.|En una recta y = mx + n, la <b>pendiente</b> m es cuánto cambia la y cuando la x aumenta 1. Si m es positiva, la recta sube; si es negativa, baja. La n es la <b>ordenada en el origen</b>: donde corta el eje vertical. Con dos puntos, m = cambio de y ÷ cambio de x.",
"ex": [
"Punts (1, 3) i (4, 9)|Puntos (1, 3) y (4, 9)",
"m = (9 − 3) ÷ (4 − 1)|m = (9 − 3) ÷ (4 − 1)",
"m = 6 ÷ 3 = <span class=\"hl\">2</span>: puja|m = 6 ÷ 3 = <span class=\"hl\">2</span>: sube",
"y = −2x + 5: m = −2 (baixa), n = 5|y = −2x + 5: m = −2 (baja), n = 5"
]
},
{
"t": "Taules de valors i punts d'una recta|Tablas de valores y puntos de una recta",
"x": "Per dibuixar una recta, tria uns quants valors de x, calcula la y de cadascun i marca els punts: n'hi ha prou amb dos, però un tercer serveix de comprovació. Un punt és de la recta si, en substituir la seva x, obtens exactament la seva y.|Para dibujar una recta, elige unos cuantos valores de x, calcula la y de cada uno y marca los puntos: basta con dos, pero un tercero sirve de comprobación. Un punto es de la recta si, al sustituir su x, obtienes exactamente su y.",
"ex": [
"y = 2x − 1|y = 2x − 1",
"x: −1, 0, 1, 2 → y: −3, −1, 1, 3|x: −1, 0, 1, 2 → y: −3, −1, 1, 3",
"(3, 5)? 2 × 3 − 1 = 5: <span class=\"hl\">sí</span>|¿(3, 5)? 2 × 3 − 1 = 5: <span class=\"hl\">sí</span>",
"(2, 4)? 2 × 2 − 1 = 3: <span class=\"hl\">no</span>|¿(2, 4)? 2 × 2 − 1 = 3: <span class=\"hl\">no</span>"
]
}
],
"words": [
[
"funció|función",
"relació que assigna a cada x un únic valor de y|relación que asigna a cada x un único valor de y"
],
[
"coordenades|coordenadas",
"la parella (x, y) que situa un punt al pla|la pareja (x, y) que sitúa un punto en el plano"
],
[
"pendent|pendiente",
"quant puja o baixa la y quan la x augmenta 1|cuánto sube o baja la y cuando la x aumenta 1"
],
[
"ordenada a l'origen|ordenada en el origen",
"la n de y = mx + n: on la recta talla l'eix y|la n de y = mx + n: donde la recta corta el eje y"
],
[
"funció afí|función afín",
"funció y = mx + n; si n = 0 es diu lineal|función y = mx + n; si n = 0 se llama lineal"
]
],
"mistakes": [
[
"«El punt (2, 5) està 2 amunt i 5 a la dreta.»|«El punto (2, 5) está 2 arriba y 5 a la derecha.»",
"Primer va sempre la x (horitzontal): 2 a la dreta i 5 amunt.|Primero va siempre la x (horizontal): 2 a la derecha y 5 arriba."
],
[
"«El pendent entre (1, 3) i (4, 9) és 3 ÷ 6.»|«La pendiente entre (1, 3) y (4, 9) es 3 ÷ 6.»",
"Dalt va el canvi de y i a sota el de x: 6 ÷ 3 = 2.|Arriba va el cambio de y y abajo el de x: 6 ÷ 3 = 2."
],
[
"«A y = 5 − 2x el pendent és 5.»|«En y = 5 − 2x la pendiente es 5.»",
"El pendent és el número que multiplica la x: −2. El 5 és l'ordenada a l'origen.|La pendiente es el número que multiplica la x: −2. El 5 es la ordenada en el origen."
]
],
"recap": [
"Punt (x, y): primer horitzontal, després vertical.|Punto (x, y): primero horizontal, después vertical.",
"f(a): substitueix la x per a i calcula.|f(a): sustituye la x por a y calcula.",
"Pendent: canvi de y ÷ canvi de x.|Pendiente: cambio de y ÷ cambio de x.",
"Un punt és de la recta si compleix l'equació.|Un punto es de la recta si cumple la ecuación."
],
"tip": "Per recordar l'ordre de les coordenades, pensa en un edifici: primer camines pel carrer fins al portal (x) i després puges l'escala (y).|Para recordar el orden de las coordenadas, piensa en un edificio: primero caminas por la calle hasta el portal (x) y después subes la escalera (y)."
},
"c8-7": {
"hook": "Quina diagonal té la pantalla de la tele? Quanta aigua cap en una piscina o en una llauna? Amb Pitàgores, Tales i els volums calcules mides que no pots mesurar directament.|¿Qué diagonal tiene la pantalla de la tele? ¿Cuánta agua cabe en una piscina o en una lata? Con Pitágoras, Tales y los volúmenes calculas medidas que no puedes medir directamente.",
"parts": [
{
"t": "Teorema de Pitàgores|Teorema de Pitágoras",
"x": "En un <b>triangle rectangle</b>, el quadrat de la <b>hipotenusa</b> és igual a la suma dels quadrats dels <b>catets</b>: a² = b² + c². Vol dir que el quadrat dibuixat sobre la hipotenusa té la mateixa àrea que els dos quadrats dels catets junts. Només funciona si hi ha un angle recte.|En un <b>triángulo rectángulo</b>, el cuadrado de la <b>hipotenusa</b> es igual a la suma de los cuadrados de los <b>catetos</b>: a² = b² + c². Significa que el cuadrado dibujado sobre la hipotenusa tiene la misma área que los dos cuadrados de los catetos juntos. Solo funciona si hay un ángulo recto.",
"ex": [
"Catets de 6 cm i 8 cm|Catetos de 6 cm y 8 cm",
"a² = 6² + 8² = 36 + 64 = 100|a² = 6² + 8² = 36 + 64 = 100",
"a = √100 = <span class=\"hl\">10 cm</span>|a = √100 = <span class=\"hl\">10 cm</span>"
]
},
{
"t": "Calcular un catet|Calcular un cateto",
"x": "Si coneixes la hipotenusa i un catet, aïlla el que falta: <b>b² = a² − c²</b>. Es resta perquè la hipotenusa és la suma de les dues àrees, i en treus una. El resultat ha de ser més petit que la hipotenusa; si no, alguna cosa ha fallat.|Si conoces la hipotenusa y un cateto, despeja el que falta: <b>b² = a² − c²</b>. Se resta porque la hipotenusa es la suma de las dos áreas, y quitas una. El resultado debe ser menor que la hipotenusa; si no, algo ha fallado.",
"ex": [
"Escala de 13 m, peu a 5 m de la paret|Escalera de 13 m, pie a 5 m de la pared",
"b² = 13² − 5² = 169 − 25 = 144|b² = 13² − 5² = 169 − 25 = 144",
"Arriba a b = √144 = <span class=\"hl\">12 m</span> d'alçada|Llega a b = √144 = <span class=\"hl\">12 m</span> de altura"
]
},
{
"t": "Triangles semblants (Tales)|Triángulos semejantes (Tales)",
"x": "Dos triangles són <b>semblants</b> si tenen els mateixos angles; aleshores els costats corresponents són <b>proporcionals</b>. El quocient entre costats corresponents és la <b>raó de semblança</b>. Per això els objectes i les seves ombres, a la mateixa hora, formen triangles semblants.|Dos triángulos son <b>semejantes</b> si tienen los mismos ángulos; entonces los lados correspondientes son <b>proporcionales</b>. El cociente entre lados correspondientes es la <b>razón de semejanza</b>. Por eso los objetos y sus sombras, a la misma hora, forman triángulos semejantes.",
"ex": [
"Pal de 2 m, ombra de 3 m|Palo de 2 m, sombra de 3 m",
"Arbre: ombra de 12 m|Árbol: sombra de 12 m",
"Raó: 12 ÷ 3 = 4|Razón: 12 ÷ 3 = 4",
"Alçada: 2 × 4 = <span class=\"hl\">8 m</span>|Altura: 2 × 4 = <span class=\"hl\">8 m</span>"
]
},
{
"t": "Volum del prisma i del cilindre|Volumen del prisma y del cilindro",
"x": "El <b>volum</b> d'un prisma o d'un cilindre és l'<b>àrea de la base per l'altura</b>: és com apilar capes iguals a la base. En el cilindre la base és un cercle, d'àrea π × r². El volum es mesura en unitats cúbiques: cm³, m³… i 1 dm³ = 1 L.|El <b>volumen</b> de un prisma o de un cilindro es el <b>área de la base por la altura</b>: es como apilar capas iguales a la base. En el cilindro la base es un círculo, de área π × r². El volumen se mide en unidades cúbicas: cm³, m³… y 1 dm³ = 1 L.",
"ex": [
"Prisma: base 4 cm × 5 cm, h = 3 cm|Prisma: base 4 cm × 5 cm, h = 3 cm",
"V = 20 × 3 = <span class=\"hl\">60 cm³</span>|V = 20 × 3 = <span class=\"hl\">60 cm³</span>",
"Cilindre: r = 2 cm, h = 5 cm|Cilindro: r = 2 cm, h = 5 cm",
"V = π × 2² × 5 ≈ 3,14 × 20|V = π × 2² × 5 ≈ 3,14 × 20",
"V ≈ <span class=\"hl\">62,8 cm³</span>|V ≈ <span class=\"hl\">62,8 cm³</span>"
]
}
],
"words": [
[
"hipotenusa|hipotenusa",
"el costat més llarg del triangle rectangle, oposat a l'angle recte|el lado más largo del triángulo rectángulo, opuesto al ángulo recto"
],
[
"catet|cateto",
"cadascun dels dos costats que formen l'angle recte|cada uno de los dos lados que forman el ángulo recto"
],
[
"triangles semblants|triángulos semejantes",
"mateixos angles i costats proporcionals|mismos ángulos y lados proporcionales"
],
[
"raó de semblança|razón de semejanza",
"el quocient entre dos costats corresponents|el cociente entre dos lados correspondientes"
],
[
"volum|volumen",
"l'espai que ocupa un cos, en cm³, m³…|el espacio que ocupa un cuerpo, en cm³, m³…"
]
],
"mistakes": [
[
"«Si els catets fan 6 i 8, la hipotenusa fa 14.»|«Si los catetos miden 6 y 8, la hipotenusa mide 14.»",
"Se sumen els quadrats, no els costats: √(36 + 64) = √100 = 10.|Se suman los cuadrados, no los lados: √(36 + 64) = √100 = 10."
],
[
"«Per trobar el catet sumo: 13² + 5².»|«Para hallar el cateto sumo: 13² + 5².»",
"Per al catet es resta: 169 − 25 = 144, i √144 = 12.|Para el cateto se resta: 169 − 25 = 144, y √144 = 12."
],
[
"«Volum del cilindre: 3,14 × 2 × 5.»|«Volumen del cilindro: 3,14 × 2 × 5.»",
"El radi va al quadrat: 3,14 × 2² × 5 = 3,14 × 20 = 62,8.|El radio va al cuadrado: 3,14 × 2² × 5 = 3,14 × 20 = 62,8."
]
],
"recap": [
"Pitàgores: a² = b² + c², només amb angle recte.|Pitágoras: a² = b² + c², solo con ángulo recto.",
"Hipotenusa: sumes quadrats. Catet: restes.|Hipotenusa: sumas cuadrados. Cateto: restas.",
"Semblants: costats proporcionals, mateixa raó.|Semejantes: lados proporcionales, misma razón.",
"Volum = àrea de la base × altura.|Volumen = área de la base × altura."
],
"tip": "Aprèn-te les ternes pitagòriques 3-4-5 i 5-12-13 (i els seus dobles, com 6-8-10): apareixen a molts problemes i et deixen comprovar el resultat de seguida.|Apréndete las ternas pitagóricas 3-4-5 y 5-12-13 (y sus dobles, como 6-8-10): aparecen en muchos problemas y te permiten comprobar el resultado enseguida."
},
"c8-8": {
"hook": "Quina nota necessites a l'últim examen per treure un 7 de mitjana? I quina suma és més fàcil que surti al parxís? L'estadística i la probabilitat responen amb números.|¿Qué nota necesitas en el último examen para sacar un 7 de media? ¿Y qué suma es más fácil que salga en el parchís? La estadística y la probabilidad responden con números.",
"parts": [
{
"t": "Mitjana i mediana|Media y mediana",
"x": "La <b>mitjana</b> és la suma de totes les dades dividida pel nombre de dades. La <b>mediana</b> és el valor del mig amb les dades <b>ordenades</b>. Si hi ha un nombre parell de dades, no hi ha un únic valor al mig: es fa la mitjana dels dos centrals. La mediana no es deixa enganyar per un valor extrem.|La <b>media</b> es la suma de todos los datos dividida entre el número de datos. La <b>mediana</b> es el valor del medio con los datos <b>ordenados</b>. Si hay un número par de datos, no hay un único valor en el medio: se hace la media de los dos centrales. La mediana no se deja engañar por un valor extremo.",
"ex": [
"Dades: 7, 2, 9, 4, 12, 6|Datos: 7, 2, 9, 4, 12, 6",
"Mitjana: 40 ÷ 6 ≈ <span class=\"hl\">6,67</span>|Media: 40 ÷ 6 ≈ <span class=\"hl\">6,67</span>",
"Ordenades: 2, 4, 6, 7, 9, 12|Ordenados: 2, 4, 6, 7, 9, 12",
"Mediana: (6 + 7) ÷ 2 = <span class=\"hl\">6,5</span>|Mediana: (6 + 7) ÷ 2 = <span class=\"hl\">6,5</span>"
]
},
{
"t": "El valor que falta|El valor que falta",
"x": "Si coneixes la mitjana, pots saber quant han de sumar totes les dades: <b>mitjana × nombre de dades</b>. Resta-hi les dades que ja tens i obtindràs la que falta. Funciona perquè la mitjana és repartir el total a parts iguals.|Si conoces la media, puedes saber cuánto deben sumar todos los datos: <b>media × número de datos</b>. Réstale los datos que ya tienes y obtendrás el que falta. Funciona porque la media es repartir el total a partes iguales.",
"ex": [
"Vols un 7 de mitjana en 4 exàmens|Quieres un 7 de media en 4 exámenes",
"Han de sumar 7 × 4 = 28|Deben sumar 7 × 4 = 28",
"Tens 6, 8 i 5: sumen 19|Tienes 6, 8 y 5: suman 19",
"Et cal un 28 − 19 = <span class=\"hl\">9</span>|Necesitas un 28 − 19 = <span class=\"hl\">9</span>"
]
},
{
"t": "Dues monedes|Dos monedas",
"x": "Si tots els resultats són igual de probables, la <b>regla de Laplace</b> diu: P = casos favorables ÷ casos possibles. Amb dues monedes, fes la llista completa (l'<b>espai mostral</b>): distingeix la primera moneda de la segona, perquè CX i XC són casos diferents.|Si todos los resultados son igual de probables, la <b>regla de Laplace</b> dice: P = casos favorables ÷ casos posibles. Con dos monedas, haz la lista completa (el <b>espacio muestral</b>): distingue la primera moneda de la segunda, porque CX y XC son casos distintos.",
"ex": [
"C = cara, X = creu|C = cara, X = cruz",
"Casos: CC, CX, XC, XX → 4|Casos: CC, CX, XC, XX → 4",
"Una cara i una creu: CX, XC → 2|Una cara y una cruz: CX, XC → 2",
"P = 2/4 = <span class=\"hl\">1/2</span>|P = 2/4 = <span class=\"hl\">1/2</span>"
]
},
{
"t": "Dos daus|Dos dados",
"x": "Cada dau té 6 resultats, i cadascun es pot combinar amb els 6 de l'altre: hi ha <b>6 × 6 = 36</b> casos possibles, igual de probables. No totes les sumes són igual de fàcils: el 7 es pot fer de sis maneres, però el 12 només d'una (6 i 6).|Cada dado tiene 6 resultados, y cada uno se puede combinar con los 6 del otro: hay <b>6 × 6 = 36</b> casos posibles, igual de probables. No todas las sumas son igual de fáciles: el 7 se puede hacer de seis maneras, pero el 12 solo de una (6 y 6).",
"ex": [
"Casos possibles: 6 × 6 = 36|Casos posibles: 6 × 6 = 36",
"Suma 7: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1|Suma 7: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1",
"P(suma 7) = 6/36 = <span class=\"hl\">1/6</span>|P(suma 7) = 6/36 = <span class=\"hl\">1/6</span>",
"P(suma 12) = <span class=\"hl\">1/36</span>|P(suma 12) = <span class=\"hl\">1/36</span>"
]
}
],
"words": [
[
"mitjana|media",
"suma de les dades dividida pel nombre de dades|suma de los datos dividida entre el número de datos"
],
[
"mediana|mediana",
"valor central de les dades ordenades|valor central de los datos ordenados"
],
[
"espai mostral|espacio muestral",
"la llista de tots els resultats possibles|la lista de todos los resultados posibles"
],
[
"cas favorable|caso favorable",
"resultat que compleix el que busques|resultado que cumple lo que buscas"
],
[
"regla de Laplace|regla de Laplace",
"P = casos favorables ÷ casos possibles|P = casos favorables ÷ casos posibles"
]
],
"mistakes": [
[
"«La mediana de 7, 2, 9 és 2, que és el del mig.»|«La mediana de 7, 2, 9 es 2, que es el del medio.»",
"Primer s'ordena: 2, 7, 9. La mediana és 7.|Primero se ordena: 2, 7, 9. La mediana es 7."
],
[
"«Amb dues monedes hi ha 3 casos: dues cares, dues creus o una de cada. P = 1/3.»|«Con dos monedas hay 3 casos: dos caras, dos cruces o una de cada. P = 1/3.»",
"«Una de cada» surt de dues maneres (CX i XC). Hi ha 4 casos i P = 2/4 = 1/2.|«Una de cada» sale de dos maneras (CX y XC). Hay 4 casos y P = 2/4 = 1/2."
],
[
"«Per treure un 7 de mitjana, faig la mitjana de les notes que tinc.»|«Para sacar un 7 de media, hago la media de las notas que tengo.»",
"Calcula el total necessari (7 × 4 = 28) i resta-hi el que ja tens.|Calcula el total necesario (7 × 4 = 28) y réstale lo que ya tienes."
]
],
"recap": [
"Mitjana: suma ÷ nombre de dades.|Media: suma ÷ número de datos.",
"Mediana: ordena; si són parells, mitjana dels dos del mig.|Mediana: ordena; si son pares, media de los dos del medio.",
"Valor que falta: mitjana × n menys el que ja tens.|Valor que falta: media × n menos lo que ya tienes.",
"Laplace: favorables ÷ possibles; dos daus fan 36 casos.|Laplace: favorables ÷ posibles; dos dados dan 36 casos."
],
"tip": "Amb dos daus, dibuixa una taula de 6 × 6 amb les sumes: tindràs els 36 casos a la vista i no te'n deixaràs cap.|Con dos dados, dibuja una tabla de 6 × 6 con las sumas: tendrás los 36 casos a la vista y no te dejarás ninguno."
},
"c9-1": {
"hook": "La Terra és a uns 150.000.000 km del Sol i una bactèria fa uns 0,000002 m. La notació científica escriu tots dos números en poc espai i sense comptar zeros.|La Tierra está a unos 150.000.000 km del Sol y una bacteria mide unos 0,000002 m. La notación científica escribe ambos números en poco espacio y sin contar ceros.",
"parts": [
{
"t": "Exponent zero i negatiu|Exponente cero y negativo",
"x": "Quan divideixes potències de la mateixa base, restes els exponents. Per això 10³ ÷ 10³ = 10⁰, i com que un número dividit per ell mateix fa 1, <b>a⁰ = 1</b>. De la mateixa manera, 10² ÷ 10⁵ = 10⁻³ = 1/10³: un <b>exponent negatiu</b> vol dir «1 partit per» la potència positiva.|Cuando divides potencias de la misma base, restas los exponentes. Por eso 10³ ÷ 10³ = 10⁰, y como un número dividido entre sí mismo da 1, <b>a⁰ = 1</b>. Del mismo modo, 10² ÷ 10⁵ = 10⁻³ = 1/10³: un <b>exponente negativo</b> quiere decir «1 partido por» la potencia positiva.",
"ex": [
"5⁰ = 1|5⁰ = 1",
"2⁻² = 1/2² = 1/4|2⁻² = 1/2² = 1/4",
"10⁻³ = 1/1.000 = <span class=\"hl\">0,001</span>|10⁻³ = 1/1.000 = <span class=\"hl\">0,001</span>"
]
},
{
"t": "Notació científica|Notación científica",
"x": "Un número en <b>notació científica</b> té la forma a × 10ⁿ, amb <b>1 ≤ a &lt; 10</b> (una sola xifra no nul·la davant de la coma). Mous la coma fins que quedi una xifra davant i comptes quants llocs l'has moguda: aquest és l'exponent. Si el número és gran, l'exponent és positiu; si és més petit que 1, és negatiu.|Un número en <b>notación científica</b> tiene la forma a × 10ⁿ, con <b>1 ≤ a &lt; 10</b> (una sola cifra no nula delante de la coma). Mueves la coma hasta que quede una cifra delante y cuentas cuántos lugares la has movido: ese es el exponente. Si el número es grande, el exponente es positivo; si es menor que 1, es negativo.",
"ex": [
"32.000.000 → coma 7 llocs a l'esquerra|32.000.000 → coma 7 lugares a la izquierda",
"32.000.000 = 3,2 × 10⁷|32.000.000 = 3,2 × 10⁷",
"0,00045 → coma 4 llocs a la dreta|0,00045 → coma 4 lugares a la derecha",
"0,00045 = <span class=\"hl\">4,5 × 10⁻⁴</span>|0,00045 = <span class=\"hl\">4,5 × 10⁻⁴</span>"
]
},
{
"t": "Operar en notació científica|Operar en notación científica",
"x": "Per multiplicar, multipliques els números d'un costat i les potències de 10 de l'altre: com que 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ, <b>sumes els exponents</b>. Per dividir, divideixes els números i <b>restes els exponents</b>. Al final, si el número no queda entre 1 i 10, l'ajustes.|Para multiplicar, multiplicas los números por un lado y las potencias de 10 por otro: como 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ, <b>sumas los exponentes</b>. Para dividir, divides los números y <b>restas los exponentes</b>. Al final, si el número no queda entre 1 y 10, lo ajustas.",
"ex": [
"(5 × 10³) × (4 × 10²)|(5 × 10³) × (4 × 10²)",
"= (5 × 4) × 10³⁺² = 20 × 10⁵|= (5 × 4) × 10³⁺² = 20 × 10⁵",
"20 = 2 × 10: l'exponent puja 1|20 = 2 × 10: el exponente sube 1",
"= <span class=\"hl\">2 × 10⁶</span>|= <span class=\"hl\">2 × 10⁶</span>"
]
},
{
"t": "Aproximar i simplificar arrels|Aproximar y simplificar raíces",
"x": "Si un número no és un <b>quadrat perfecte</b>, la seva arrel no és exacta: √30 té infinits decimals sense període, és un <b>nombre irracional</b>. Per situar-la, busca els quadrats perfectes que té a banda i banda. Per simplificar, fes servir que √(a × b) = √a × √b: descompon el número en un quadrat perfecte per un altre factor i treu l'arrel del quadrat.|Si un número no es un <b>cuadrado perfecto</b>, su raíz no es exacta: √30 tiene infinitos decimales sin periodo, es un <b>número irracional</b>. Para situarla, busca los cuadrados perfectos que tiene a cada lado. Para simplificar, usa que √(a × b) = √a × √b: descompón el número en un cuadrado perfecto por otro factor y saca la raíz del cuadrado.",
"ex": [
"25 &lt; 30 &lt; 36 → 5 &lt; √30 &lt; 6|25 &lt; 30 &lt; 36 → 5 &lt; √30 &lt; 6",
"√72 = √(36 × 2) = √36 × √2|√72 = √(36 × 2) = √36 × √2",
"√72 = <span class=\"hl\">6√2</span>|√72 = <span class=\"hl\">6√2</span>"
]
}
],
"words": [
[
"notació científica|notación científica",
"escriptura a × 10ⁿ amb 1 ≤ a &lt; 10|escritura a × 10ⁿ con 1 ≤ a &lt; 10"
],
[
"exponent negatiu|exponente negativo",
"a⁻ⁿ = 1/aⁿ; per exemple, 10⁻² = 0,01|a⁻ⁿ = 1/aⁿ; por ejemplo, 10⁻² = 0,01"
],
[
"quadrat perfecte|cuadrado perfecto",
"número que és el quadrat d'un enter: 1, 4, 9, 16, 25…|número que es el cuadrado de un entero: 1, 4, 9, 16, 25…"
],
[
"nombre irracional|número irracional",
"té infinits decimals no periòdics, com √2 o π|tiene infinitos decimales no periódicos, como √2 o π"
],
[
"nombres reals|números reales",
"tots els racionals i els irracionals junts|todos los racionales y los irracionales juntos"
]
],
"mistakes": [
[
"«0,0007 = 7 × 10⁴»|«0,0007 = 7 × 10⁴»",
"0,0007 és més petit que 1, així que l'exponent ha de ser negatiu: 7 × 10⁻⁴.|0,0007 es menor que 1, así que el exponente tiene que ser negativo: 7 × 10⁻⁴."
],
[
"«(3 × 10⁴) × (2 × 10⁵) = 6 × 10²⁰»|«(3 × 10⁴) × (2 × 10⁵) = 6 × 10²⁰»",
"Els exponents se sumen, no es multipliquen: 6 × 10⁹.|Los exponentes se suman, no se multiplican: 6 × 10⁹."
],
[
"«√(9 + 16) = √9 + √16 = 7»|«√(9 + 16) = √9 + √16 = 7»",
"L'arrel no es reparteix en una suma. Primer suma: √25 = 5. Només es reparteix en un producte.|La raíz no se reparte en una suma. Primero suma: √25 = 5. Solo se reparte en un producto."
]
],
"recap": [
"a⁰ = 1 i a⁻ⁿ = 1/aⁿ.|a⁰ = 1 y a⁻ⁿ = 1/aⁿ.",
"Notació científica: a × 10ⁿ amb a entre 1 i 10.|Notación científica: a × 10ⁿ con a entre 1 y 10.",
"Multiplicar: sumes exponents. Dividir: els restes.|Multiplicar: sumas exponentes. Dividir: los restas.",
"Per simplificar una arrel, busca-hi un quadrat perfecte a dins.|Para simplificar una raíz, busca un cuadrado perfecto dentro."
],
"tip": "Abans de posar l'exponent, pregunta't si el número és més gran o més petit que 1: gran, exponent positiu; petit, negatiu.|Antes de poner el exponente, pregúntate si el número es mayor o menor que 1: grande, exponente positivo; pequeño, negativo."
},
"c9-2": {
"hook": "Si un jardí quadrat de costat x metres creix 3 m per cada costat, la seva àrea passa a ser (x + 3)². Els polinomis et permeten treballar amb aquesta àrea per a qualsevol x.|Si un jardín cuadrado de lado x metros crece 3 m por cada lado, su área pasa a ser (x + 3)². Los polinomios te permiten trabajar con esa área para cualquier x.",
"parts": [
{
"t": "Polinomis i termes semblants|Polinomios y términos semejantes",
"x": "Un <b>polinomi</b> és una suma de monomis, com 2x² + 3x − 1. El <b>grau</b> és l'exponent més gran de la x. Només pots sumar <b>termes semblants</b> (la mateixa part literal): 3x² + 2x² = 5x², igual que 3 pomes i 2 pomes fan 5 pomes. Per restar, canvia el signe de <b>tots</b> els termes del segon polinomi.|Un <b>polinomio</b> es una suma de monomios, como 2x² + 3x − 1. El <b>grado</b> es el mayor exponente de la x. Solo puedes sumar <b>términos semejantes</b> (la misma parte literal): 3x² + 2x² = 5x², igual que 3 manzanas y 2 manzanas son 5 manzanas. Para restar, cambia el signo de <b>todos</b> los términos del segundo polinomio.",
"ex": [
"(2x² + 3x − 1) + (x² − 5x + 4)|(2x² + 3x − 1) + (x² − 5x + 4)",
"= (2 + 1)x² + (3 − 5)x + (−1 + 4)|= (2 + 1)x² + (3 − 5)x + (−1 + 4)",
"= <span class=\"hl\">3x² − 2x + 3</span>|= <span class=\"hl\">3x² − 2x + 3</span>"
]
},
{
"t": "Valor numèric|Valor numérico",
"x": "El <b>valor numèric</b> P(a) és el que dona el polinomi quan hi poses x = a. Substitueix la x <b>entre parèntesis</b>, sobretot si el número és negatiu, i respecta la jerarquia: primer potències, després productes i al final sumes. Si P(a) = 0, diem que a és una <b>arrel</b> del polinomi.|El <b>valor numérico</b> P(a) es lo que da el polinomio cuando pones x = a. Sustituye la x <b>entre paréntesis</b>, sobre todo si el número es negativo, y respeta la jerarquía: primero potencias, después productos y al final sumas. Si P(a) = 0, decimos que a es una <b>raíz</b> del polinomio.",
"ex": [
"P(x) = x² − 3x + 1|P(x) = x² − 3x + 1",
"P(−2) = (−2)² − 3 × (−2) + 1|P(−2) = (−2)² − 3 × (−2) + 1",
"= 4 + 6 + 1 = <span class=\"hl\">11</span>|= 4 + 6 + 1 = <span class=\"hl\">11</span>"
]
},
{
"t": "Multiplicar polinomis|Multiplicar polinomios",
"x": "Fas servir la propietat distributiva: <b>cada terme</b> del primer multiplica <b>cada terme</b> del segon. En multiplicar potències de x, sumes els exponents: x × x = x² i 3x × 2x = 6x². Al final, agrupa els termes semblants.|Usas la propiedad distributiva: <b>cada término</b> del primero multiplica <b>cada término</b> del segundo. Al multiplicar potencias de x, sumas los exponentes: x × x = x² y 3x × 2x = 6x². Al final, agrupa los términos semejantes.",
"ex": [
"3x × (2x − 5) = 6x² − 15x|3x × (2x − 5) = 6x² − 15x",
"(x + 3)(x − 2) = x² − 2x + 3x − 6|(x + 3)(x − 2) = x² − 2x + 3x − 6",
"= <span class=\"hl\">x² + x − 6</span>|= <span class=\"hl\">x² + x − 6</span>"
]
},
{
"t": "Identitats notables|Identidades notables",
"x": "Són productes tan freqüents que val la pena saber-los de memòria:<br><b>(a + b)² = a² + 2ab + b²</b><br><b>(a − b)² = a² − 2ab + b²</b><br><b>(a + b)(a − b) = a² − b²</b><br>El terme 2ab surt perquè en fer (a + b)(a + b) el producte ab apareix dues vegades. A la suma per diferència, els termes del mig s'anul·len.|Son productos tan frecuentes que vale la pena saberlos de memoria:<br><b>(a + b)² = a² + 2ab + b²</b><br><b>(a − b)² = a² − 2ab + b²</b><br><b>(a + b)(a − b) = a² − b²</b><br>El término 2ab sale porque al hacer (a + b)(a + b) el producto ab aparece dos veces. En la suma por diferencia, los términos del medio se anulan.",
"ex": [
"(x + 5)² = x² + 2 × x × 5 + 5²|(x + 5)² = x² + 2 × x × 5 + 5²",
"= <span class=\"hl\">x² + 10x + 25</span>|= <span class=\"hl\">x² + 10x + 25</span>",
"(x − 3)² = <span class=\"hl\">x² − 6x + 9</span>|(x − 3)² = <span class=\"hl\">x² − 6x + 9</span>",
"(x + 4)(x − 4) = <span class=\"hl\">x² − 16</span>|(x + 4)(x − 4) = <span class=\"hl\">x² − 16</span>"
]
}
],
"words": [
[
"polinomi|polinomio",
"suma de monomis, com 4x³ − x + 7|suma de monomios, como 4x³ − x + 7"
],
[
"grau|grado",
"l'exponent més gran de la x al polinomi|el mayor exponente de la x en el polinomio"
],
[
"termes semblants|términos semejantes",
"termes amb la mateixa part literal, com 5x² i −2x²|términos con la misma parte literal, como 5x² y −2x²"
],
[
"valor numèric|valor numérico",
"el resultat de substituir la x per un número|el resultado de sustituir la x por un número"
],
[
"identitat notable|identidad notable",
"producte que sempre es desenvolupa igual, com (a + b)²|producto que siempre se desarrolla igual, como (a + b)²"
]
],
"mistakes": [
[
"«(x + 5)² = x² + 25»|«(x + 5)² = x² + 25»",
"Falta el doble producte: (x + 5)² = x² + 10x + 25. Elevar al quadrat és multiplicar (x + 5)(x + 5).|Falta el doble producto: (x + 5)² = x² + 10x + 25. Elevar al cuadrado es multiplicar (x + 5)(x + 5)."
],
[
"«x × x = 2x»|«x × x = 2x»",
"x × x = x². En canvi, x + x = 2x. Multiplicar suma exponents; sumar suma coeficients.|x × x = x². En cambio, x + x = 2x. Multiplicar suma exponentes; sumar suma coeficientes."
],
[
"«(3x² + 2x) − (x² − 4x) = 2x² − 2x»|«(3x² + 2x) − (x² − 4x) = 2x² − 2x»",
"El menys canvia el signe de tots els termes: 3x² + 2x − x² + 4x = 2x² + 6x.|El menos cambia el signo de todos los términos: 3x² + 2x − x² + 4x = 2x² + 6x."
]
],
"recap": [
"Només se sumen els termes semblants.|Solo se suman los términos semejantes.",
"Valor numèric: substitueix la x entre parèntesis.|Valor numérico: sustituye la x entre paréntesis.",
"Multiplicar: cada terme per cada terme.|Multiplicar: cada término por cada término.",
"(a ± b)² = a² ± 2ab + b² i (a + b)(a − b) = a² − b².|(a ± b)² = a² ± 2ab + b² y (a + b)(a − b) = a² − b²."
],
"tip": "Dubtes d'un resultat? Prova-ho amb x = 1: (x + 5)² dona 36 i x² + 10x + 25 també, però x² + 25 dona 26. Així detectes l'error.|¿Dudas de un resultado? Pruébalo con x = 1: (x + 5)² da 36 y x² + 10x + 25 también, pero x² + 25 da 26. Así detectas el error."
},
"c9-3": {
"hook": "Vols fer un quadrat de gespa de 49 m². Quin costat ha de tenir? Aquesta pregunta ja és una equació de segon grau: x² = 49.|Quieres hacer un cuadrado de césped de 49 m². ¿Qué lado debe tener? Esta pregunta ya es una ecuación de segundo grado: x² = 49.",
"parts": [
{
"t": "Repàs: primer grau|Repaso: primer grado",
"x": "Una equació és una balança: si fas el mateix als dos costats, continua equilibrada. Per això pots passar termes d'un costat a l'altre canviant l'operació. Agrupa les x a un costat i els números a l'altre, i al final divideix pel coeficient de la x.|Una ecuación es una balanza: si haces lo mismo a los dos lados, sigue equilibrada. Por eso puedes pasar términos de un lado a otro cambiando la operación. Agrupa las x a un lado y los números al otro, y al final divide entre el coeficiente de la x.",
"ex": [
"5x + 3 = 2x + 15|5x + 3 = 2x + 15",
"5x − 2x = 15 − 3|5x − 2x = 15 − 3",
"3x = 12|3x = 12",
"x = 12 ÷ 3 = <span class=\"hl\">4</span>|x = 12 ÷ 3 = <span class=\"hl\">4</span>"
]
},
{
"t": "Equacions del tipus x² = k|Ecuaciones del tipo x² = k",
"x": "Una <b>equació de segon grau</b> té la forma ax² + bx + c = 0 i pot tenir 0, 1 o 2 solucions. Si només hi ha x², aïlla-la i fes l'arrel: hi ha <b>dues solucions</b>, x = ±√k, perquè un número i el seu oposat tenen el mateix quadrat (7² = 49 i (−7)² = 49). Si k és negatiu, no hi ha solució real.|Una <b>ecuación de segundo grado</b> tiene la forma ax² + bx + c = 0 y puede tener 0, 1 o 2 soluciones. Si solo hay x², despéjala y haz la raíz: hay <b>dos soluciones</b>, x = ±√k, porque un número y su opuesto tienen el mismo cuadrado (7² = 49 y (−7)² = 49). Si k es negativo, no hay solución real.",
"ex": [
"3x² − 12 = 0|3x² − 12 = 0",
"3x² = 12 → x² = 4|3x² = 12 → x² = 4",
"x = ±√4|x = ±√4",
"<span class=\"hl\">x = 2</span> o <span class=\"hl\">x = −2</span>|<span class=\"hl\">x = 2</span> o <span class=\"hl\">x = −2</span>"
]
},
{
"t": "Producte igual a zero|Producto igual a cero",
"x": "Si un producte val 0, algun dels factors ha de valer 0, perquè cap parell de números diferents de zero multiplicats dona zero. Per això, si l'equació està factoritzada, iguala <b>cada factor</b> a zero. Si no hi ha terme independent, com x² − 6x = 0, treu factor comú: x(x − 6) = 0, i surt x = 0 o x = 6.|Si un producto vale 0, alguno de los factores tiene que valer 0, porque ningún par de números distintos de cero multiplicados da cero. Por eso, si la ecuación está factorizada, iguala <b>cada factor</b> a cero. Si no hay término independiente, como x² − 6x = 0, saca factor común: x(x − 6) = 0, y sale x = 0 o x = 6.",
"ex": [
"(x − 3)(x + 5) = 0|(x − 3)(x + 5) = 0",
"x − 3 = 0 → <span class=\"hl\">x = 3</span>|x − 3 = 0 → <span class=\"hl\">x = 3</span>",
"x + 5 = 0 → <span class=\"hl\">x = −5</span>|x + 5 = 0 → <span class=\"hl\">x = −5</span>"
]
},
{
"t": "Suma i producte|Suma y producto",
"x": "Com que (x − r)(x − s) = x² − (r + s)x + rs, per resoldre x² + bx + c = 0 busca dos números r i s que <b>sumin −b</b> i que <b>multiplicats donin c</b>: aquests són les solucions. Si no els trobes, fes servir la fórmula x = (−b ± √(b² − 4ac)) ÷ (2a).|Como (x − r)(x − s) = x² − (r + s)x + rs, para resolver x² + bx + c = 0 busca dos números r y s que <b>sumen −b</b> y que <b>multiplicados den c</b>: esas son las soluciones. Si no los encuentras, usa la fórmula x = (−b ± √(b² − 4ac)) ÷ (2a).",
"ex": [
"x² + 2x − 15 = 0|x² + 2x − 15 = 0",
"Suma −2, producte −15: 3 i −5|Suma −2, producto −15: 3 y −5",
"(x − 3)(x + 5) = 0|(x − 3)(x + 5) = 0",
"<span class=\"hl\">x = 3</span> o <span class=\"hl\">x = −5</span>|<span class=\"hl\">x = 3</span> o <span class=\"hl\">x = −5</span>"
]
}
],
"words": [
[
"equació de segon grau|ecuación de segundo grado",
"equació ax² + bx + c = 0 amb a ≠ 0|ecuación ax² + bx + c = 0 con a ≠ 0"
],
[
"solució o arrel|solución o raíz",
"valor de x que fa certa l'equació|valor de x que hace cierta la ecuación"
],
[
"factoritzar|factorizar",
"escriure una expressió com un producte de factors|escribir una expresión como un producto de factores"
],
[
"terme independent|término independiente",
"el terme sense x; a ax² + bx + c és c|el término sin x; en ax² + bx + c es c"
],
[
"discriminant|discriminante",
"b² − 4ac: diu si hi ha 2, 1 o cap solució|b² − 4ac: dice si hay 2, 1 o ninguna solución"
]
],
"mistakes": [
[
"«x² = 49, així que x = 7.»|«x² = 49, así que x = 7.»",
"Hi ha dues solucions: x = 7 i x = −7, perquè (−7)² també fa 49.|Hay dos soluciones: x = 7 y x = −7, porque (−7)² también da 49."
],
[
"«(x − 3)(x + 5) = 0 → x = −3 o x = 5.»|«(x − 3)(x + 5) = 0 → x = −3 o x = 5.»",
"Iguala cada factor a zero: x − 3 = 0 dona x = 3, i x + 5 = 0 dona x = −5. El signe canvia.|Iguala cada factor a cero: x − 3 = 0 da x = 3, y x + 5 = 0 da x = −5. El signo cambia."
],
[
"«x² = 6x; divideixo per x i surt x = 6.»|«x² = 6x; divido entre x y sale x = 6.»",
"Si divideixes per x perds la solució x = 0. Passa-ho tot a un costat: x(x − 6) = 0, i surt x = 0 o x = 6.|Si divides entre x pierdes la solución x = 0. Pásalo todo a un lado: x(x − 6) = 0, y sale x = 0 o x = 6."
]
],
"recap": [
"Primer grau: x a un costat, números a l'altre.|Primer grado: x a un lado, números al otro.",
"x² = k té dues solucions: ±√k (si k > 0).|x² = k tiene dos soluciones: ±√k (si k > 0).",
"Si A × B = 0, llavors A = 0 o B = 0.|Si A × B = 0, entonces A = 0 o B = 0.",
"x² + bx + c = 0: dos números que sumin −b i multiplicats donin c.|x² + bx + c = 0: dos números que sumen −b y multiplicados den c."
],
"tip": "Comprova sempre les solucions a l'equació original: amb x = −5, (−5)² + 2 × (−5) − 15 = 25 − 10 − 15 = 0. Si surt 0, és correcta.|Comprueba siempre las soluciones en la ecuación original: con x = −5, (−5)² + 2 × (−5) − 15 = 25 − 10 − 15 = 0. Si sale 0, es correcta."
},
"c9-4": {
"hook": "Dues entrades de cinema i unes crispetes costen 19 €, i una entrada i unes crispetes, 12 €. Quant val cada cosa? Quan tens dues incògnites i dues condicions, tens un sistema.|Dos entradas de cine y unas palomitas cuestan 19 €, y una entrada y unas palomitas, 12 €. ¿Cuánto vale cada cosa? Cuando tienes dos incógnitas y dos condiciones, tienes un sistema.",
"parts": [
{
"t": "Què és un sistema|Qué es un sistema",
"x": "Un <b>sistema</b> són dues equacions amb dues incògnites que s'han de complir <b>alhora</b>. La solució no és un número sol, sinó un <b>parell (x, y)</b>. Per saber si un parell és la solució, substitueix-lo a les dues equacions: ha de funcionar a totes dues.|Un <b>sistema</b> son dos ecuaciones con dos incógnitas que deben cumplirse <b>a la vez</b>. La solución no es un número solo, sino un <b>par (x, y)</b>. Para saber si un par es la solución, sustitúyelo en las dos ecuaciones: tiene que funcionar en ambas.",
"ex": [
"x + y = 10 i x − y = 4|x + y = 10 y x − y = 4",
"Prova (6, 4): 6 − 4 = 2 ≠ 4 → no|Prueba (6, 4): 6 − 4 = 2 ≠ 4 → no",
"Prova (7, 3): 10 i 4 → sí|Prueba (7, 3): 10 y 4 → sí",
"Solució: <span class=\"hl\">(7, 3)</span>|Solución: <span class=\"hl\">(7, 3)</span>"
]
},
{
"t": "Resoldre per reducció|Resolver por reducción",
"x": "La idea és fer desaparèixer una incògnita. Multiplica una equació (o les dues) perquè una incògnita tingui coeficients oposats i suma-les: queda una equació amb una sola incògnita. Després substitueix el valor per trobar l'altra. També pots aïllar una incògnita i substituir-la a l'altra equació (<b>substitució</b>).|La idea es hacer desaparecer una incógnita. Multiplica una ecuación (o las dos) para que una incógnita tenga coeficientes opuestos y súmalas: queda una ecuación con una sola incógnita. Después sustituye el valor para hallar la otra. También puedes despejar una incógnita y sustituirla en la otra ecuación (<b>sustitución</b>).",
"ex": [
"3x + 2y = 12 i x − y = −1|3x + 2y = 12 y x − y = −1",
"Segona × 2: 2x − 2y = −2|Segunda × 2: 2x − 2y = −2",
"Sumem: 5x = 10 → x = 2|Sumamos: 5x = 10 → x = 2",
"2 − y = −1 → y = 3: <span class=\"hl\">(2, 3)</span>|2 − y = −1 → y = 3: <span class=\"hl\">(2, 3)</span>"
]
},
{
"t": "Inequacions|Inecuaciones",
"x": "Una <b>inequació</b> compara amb &lt;, >, ≤ o ≥. Es resol com una equació: pots sumar o restar el mateix als dos costats, i multiplicar o dividir per un número positiu sense que canviï res. La solució no és un sol número sinó <b>infinits</b>: tot un interval.|Una <b>inecuación</b> compara con &lt;, >, ≤ o ≥. Se resuelve como una ecuación: puedes sumar o restar lo mismo a los dos lados, y multiplicar o dividir por un número positivo sin que cambie nada. La solución no es un solo número sino <b>infinitos</b>: todo un intervalo.",
"ex": [
"2x − 3 > 7|2x − 3 > 7",
"2x > 10|2x > 10",
"<span class=\"hl\">x > 5</span>|<span class=\"hl\">x > 5</span>",
"Hi entren 5,1 o 100, però no el 5|Valen 5,1 o 100, pero no el 5"
]
},
{
"t": "Dividir per un negatiu|Dividir entre un negativo",
"x": "Si multipliques o divideixes els dos costats per un número <b>negatiu</b>, la desigualtat <b>canvia de sentit</b>. Mira-ho amb números: 2 &lt; 5, però −2 > −5. Per saber si un valor compleix una inequació, substitueix-lo i mira si la desigualtat és certa.|Si multiplicas o divides los dos lados por un número <b>negativo</b>, la desigualdad <b>cambia de sentido</b>. Míralo con números: 2 &lt; 5, pero −2 > −5. Para saber si un valor cumple una inecuación, sustitúyelo y mira si la desigualdad es cierta.",
"ex": [
"−3x > 12|−3x > 12",
"x &lt; 12 ÷ (−3) (el signe es gira)|x &lt; 12 ÷ (−3) (el signo se gira)",
"<span class=\"hl\">x &lt; −4</span>|<span class=\"hl\">x &lt; −4</span>",
"Prova x = −5: 15 > 12 → sí|Prueba x = −5: 15 > 12 → sí"
]
}
],
"words": [
[
"sistema d'equacions|sistema de ecuaciones",
"diverses equacions que s'han de complir alhora|varias ecuaciones que deben cumplirse a la vez"
],
[
"solució d'un sistema|solución de un sistema",
"el parell (x, y) que compleix totes les equacions|el par (x, y) que cumple todas las ecuaciones"
],
[
"reducció|reducción",
"mètode que elimina una incògnita sumant equacions|método que elimina una incógnita sumando ecuaciones"
],
[
"inequació|inecuación",
"desigualtat amb incògnites: &lt;, >, ≤ o ≥|desigualdad con incógnitas: &lt;, >, ≤ o ≥"
],
[
"interval|intervalo",
"conjunt de tots els números entre dos límits|conjunto de todos los números entre dos límites"
]
],
"mistakes": [
[
"«−2x &lt; 6, doncs x &lt; −3.»|«−2x &lt; 6, luego x &lt; −3.»",
"Has dividit per −2: el signe es gira. La solució és x > −3. Comprova-ho amb x = 0: −2 × 0 = 0 &lt; 6.|Has dividido entre −2: el signo se gira. La solución es x > −3. Compruébalo con x = 0: −2 × 0 = 0 &lt; 6."
],
[
"«La solució del sistema és x = 2.»|«La solución del sistema es x = 2.»",
"Falta la y. La solució d'un sistema és un parell: (2, 3).|Falta la y. La solución de un sistema es un par: (2, 3)."
],
[
"«x > 5, així que el 5 també hi va.»|«x > 5, así que el 5 también vale.»",
"Amb > el 5 no hi entra. Només amb ≥ s'inclou el límit.|Con > el 5 no entra. Solo con ≥ se incluye el límite."
]
],
"recap": [
"La solució d'un sistema és un parell (x, y).|La solución de un sistema es un par (x, y).",
"Reducció: fes oposats els coeficients i suma les equacions.|Reducción: haz opuestos los coeficientes y suma las ecuaciones.",
"Una inequació té infinites solucions.|Una inecuación tiene infinitas soluciones.",
"Per un negatiu, la desigualtat es gira.|Por un negativo, la desigualdad se gira."
],
"tip": "Acaba sempre comprovant: substitueix el resultat a les dues equacions del sistema, o prova un valor de l'interval a la inequació.|Termina siempre comprobando: sustituye el resultado en las dos ecuaciones del sistema, o prueba un valor del intervalo en la inecuación."
},
"c9-5": {
"hook": "Un teatre té 20 seients a la primera fila i 2 més a cada fila següent. Quants n'hi ha a la fila 15? Amb les progressions ho saps sense comptar fila per fila: 20 + 14 × 2 = 48.|Un teatro tiene 20 asientos en la primera fila y 2 más en cada fila siguiente. ¿Cuántos hay en la fila 15? Con las progresiones lo sabes sin contar fila por fila: 20 + 14 × 2 = 48.",
"parts": [
{
"t": "Successions i termes|Sucesiones y términos",
"x": "Una <b>successió</b> és una llista ordenada de números. Cada número és un <b>terme</b> i s'escriu amb la seva posició: a₁ és el primer, a₂ el segon i aₙ el que ocupa el lloc n. Per trobar el terme següent, has de descobrir la regla que els uneix.|Una <b>sucesión</b> es una lista ordenada de números. Cada número es un <b>término</b> y se escribe con su posición: a₁ es el primero, a₂ el segundo y aₙ el que ocupa el lugar n. Para hallar el término siguiente, tienes que descubrir la regla que los une.",
"ex": [
"3, 7, 11, 15, …|3, 7, 11, 15, …",
"a₁ = 3, a₂ = 7, a₄ = 15|a₁ = 3, a₂ = 7, a₄ = 15",
"Regla: sumar 4. a₅ = <span class=\"hl\">19</span>|Regla: sumar 4. a₅ = <span class=\"hl\">19</span>"
]
},
{
"t": "Progressió aritmètica|Progresión aritmética",
"x": "En una <b>progressió aritmètica</b> cada terme s'obté sumant sempre el mateix número, la <b>diferència</b> d. La calcules restant un terme menys l'anterior: d = a₂ − a₁. Si la successió baixa, d és negativa.|En una <b>progresión aritmética</b> cada término se obtiene sumando siempre el mismo número, la <b>diferencia</b> d. La calculas restando un término menos el anterior: d = a₂ − a₁. Si la sucesión baja, d es negativa.",
"ex": [
"20, 17, 14, 11, …|20, 17, 14, 11, …",
"d = 17 − 20 = <span class=\"hl\">−3</span>|d = 17 − 20 = <span class=\"hl\">−3</span>",
"Següent: 11 + (−3) = 8|Siguiente: 11 + (−3) = 8"
]
},
{
"t": "Terme general|Término general",
"x": "El <b>terme general</b> aₙ = a₁ + (n − 1) × d et dona qualsevol terme sense escriure'ls tots. Per què n − 1? Perquè per anar del primer terme al terme n fas n − 1 salts de mida d. Si simplifiques l'expressió, obtens una fórmula en n.|El <b>término general</b> aₙ = a₁ + (n − 1) × d te da cualquier término sin escribirlos todos. ¿Por qué n − 1? Porque para ir del primer término al término n das n − 1 saltos de tamaño d. Si simplificas la expresión, obtienes una fórmula en n.",
"ex": [
"3, 7, 11, 15, … (a₁ = 3, d = 4)|3, 7, 11, 15, … (a₁ = 3, d = 4)",
"aₙ = 3 + (n − 1) × 4 = <span class=\"hl\">4n − 1</span>|aₙ = 3 + (n − 1) × 4 = <span class=\"hl\">4n − 1</span>",
"a₂₀ = 4 × 20 − 1 = <span class=\"hl\">79</span>|a₂₀ = 4 × 20 − 1 = <span class=\"hl\">79</span>"
]
},
{
"t": "Progressió geomètrica|Progresión geométrica",
"x": "En una <b>progressió geomètrica</b> cada terme s'obté <b>multiplicant</b> l'anterior pel mateix número, la <b>raó</b> r = a₂ ÷ a₁. El terme general és aₙ = a₁ × rⁿ⁻¹, per la mateixa raó dels salts: n − 1 multiplicacions per r. Si r > 1, creix molt de pressa.|En una <b>progresión geométrica</b> cada término se obtiene <b>multiplicando</b> el anterior por el mismo número, la <b>razón</b> r = a₂ ÷ a₁. El término general es aₙ = a₁ × rⁿ⁻¹, por el mismo motivo de los saltos: n − 1 multiplicaciones por r. Si r > 1, crece muy deprisa.",
"ex": [
"2, 6, 18, 54, …|2, 6, 18, 54, …",
"r = 6 ÷ 2 = 3|r = 6 ÷ 2 = 3",
"Següent: 54 × 3 = <span class=\"hl\">162</span>|Siguiente: 54 × 3 = <span class=\"hl\">162</span>",
"a₆ = 2 × 3⁵ = 2 × 243 = <span class=\"hl\">486</span>|a₆ = 2 × 3⁵ = 2 × 243 = <span class=\"hl\">486</span>"
]
}
],
"words": [
[
"successió|sucesión",
"llista ordenada de números|lista ordenada de números"
],
[
"terme general|término general",
"fórmula aₙ que dona el terme de la posició n|fórmula aₙ que da el término de la posición n"
],
[
"diferència (d)|diferencia (d)",
"el que se suma a cada pas en una progressió aritmètica|lo que se suma en cada paso en una progresión aritmética"
],
[
"raó (r)|razón (r)",
"el que es multiplica a cada pas en una progressió geomètrica|lo que se multiplica en cada paso en una progresión geométrica"
]
],
"mistakes": [
[
"«a₂₀ = 3 + 20 × 4 = 83»|«a₂₀ = 3 + 20 × 4 = 83»",
"Del terme 1 al 20 hi ha 19 salts: a₂₀ = 3 + 19 × 4 = 79.|Del término 1 al 20 hay 19 saltos: a₂₀ = 3 + 19 × 4 = 79."
],
[
"«2, 4, 8, … el següent és 10.»|«2, 4, 8, … el siguiente es 10.»",
"No suma sempre el mateix (2, després 4): multiplica per 2. El següent és 16.|No suma siempre lo mismo (2, después 4): multiplica por 2. El siguiente es 16."
],
[
"«20, 17, 14, … la diferència és 3.»|«20, 17, 14, … la diferencia es 3.»",
"Resta sempre terme menys anterior: 17 − 20 = −3. Si baixa, d és negativa.|Resta siempre término menos anterior: 17 − 20 = −3. Si baja, d es negativa."
]
],
"recap": [
"Aritmètica: sumes sempre d. Geomètrica: multipliques sempre per r.|Aritmética: sumas siempre d. Geométrica: multiplicas siempre por r.",
"d = un terme menys l'anterior; r = un terme entre l'anterior.|d = un término menos el anterior; r = un término entre el anterior.",
"aₙ = a₁ + (n − 1) × d.|aₙ = a₁ + (n − 1) × d.",
"aₙ = a₁ × rⁿ⁻¹.|aₙ = a₁ × rⁿ⁻¹."
],
"tip": "Comprova el terme general amb n = 1: ha de sortir el primer terme. Si aₙ = 4n − 1, a₁ = 3, i quadra.|Comprueba el término general con n = 1: tiene que salir el primer término. Si aₙ = 4n − 1, a₁ = 3, y cuadra."
},
"c9-6": {
"hook": "El preu d'un taxi (una baixada de bandera fixa més un tant per quilòmetre) es dibuixa com una recta, i la trajectòria d'una pilota llançada, com una paràbola.|El precio de un taxi (una bajada de bandera fija más un tanto por kilómetro) se dibuja como una recta, y la trayectoria de una pelota lanzada, como una parábola.",
"parts": [
{
"t": "La recta y = mx + n|La recta y = mx + n",
"x": "A la recta y = mx + n, el <b>pendent</b> m diu quant canvia y cada vegada que x augmenta 1, i l'<b>ordenada a l'origen</b> n diu on talla l'eix y, al punt (0, n). Un punt (a, b) és de la recta si, en substituir x = a, surt y = b.|En la recta y = mx + n, la <b>pendiente</b> m dice cuánto cambia y cada vez que x aumenta 1, y la <b>ordenada en el origen</b> n dice dónde corta el eje y, en el punto (0, n). Un punto (a, b) es de la recta si, al sustituir x = a, sale y = b.",
"ex": [
"y = 3x + 1. És (2, 7) de la recta?|y = 3x + 1. ¿Es (2, 7) de la recta?",
"3 × 2 + 1 = 7 → <span class=\"hl\">sí</span>|3 × 2 + 1 = 7 → <span class=\"hl\">sí</span>",
"I (1, 5)? 3 × 1 + 1 = 4 ≠ 5 → <span class=\"hl\">no</span>|¿Y (1, 5)? 3 × 1 + 1 = 4 ≠ 5 → <span class=\"hl\">no</span>"
]
},
{
"t": "Equació de la recta per dos punts|Ecuación de la recta por dos puntos",
"x": "El pendent és el que puja y dividit pel que avança x: m = (y₂ − y₁) ÷ (x₂ − x₁). Quan ja tens m, substitueix un dels punts a y = mx + n i aïlla n. Si un dels punts té x = 0, la seva y ja és directament n.|La pendiente es lo que sube y dividido entre lo que avanza x: m = (y₂ − y₁) ÷ (x₂ − x₁). Cuando ya tienes m, sustituye uno de los puntos en y = mx + n y despeja n. Si uno de los puntos tiene x = 0, su y ya es directamente n.",
"ex": [
"Passa per (1, 3) i (3, 7)|Pasa por (1, 3) y (3, 7)",
"m = (7 − 3) ÷ (3 − 1) = 4 ÷ 2 = 2|m = (7 − 3) ÷ (3 − 1) = 4 ÷ 2 = 2",
"3 = 2 × 1 + n → n = 1|3 = 2 × 1 + n → n = 1",
"<span class=\"hl\">y = 2x + 1</span>|<span class=\"hl\">y = 2x + 1</span>"
]
},
{
"t": "La paràbola|La parábola",
"x": "La funció f(x) = ax² + bx + c es dibuixa com una <b>paràbola</b>: oberta cap amunt si a > 0 i cap avall si a &lt; 0. Per calcular un valor, substitueix la x entre parèntesis. On talla l'eix y? Allà x = 0, i tots els termes amb x s'anul·len: el tall és sempre <b>(0, c)</b>.|La función f(x) = ax² + bx + c se dibuja como una <b>parábola</b>: abierta hacia arriba si a > 0 y hacia abajo si a &lt; 0. Para calcular un valor, sustituye la x entre paréntesis. ¿Dónde corta el eje y? Allí x = 0, y todos los términos con x se anulan: el corte es siempre <b>(0, c)</b>.",
"ex": [
"f(x) = x² − 4x + 3|f(x) = x² − 4x + 3",
"f(−1) = (−1)² − 4 × (−1) + 3 = 8|f(−1) = (−1)² − 4 × (−1) + 3 = 8",
"f(0) = 3 → talla l'eix y a <span class=\"hl\">(0, 3)</span>|f(0) = 3 → corta el eje y en <span class=\"hl\">(0, 3)</span>"
]
},
{
"t": "El vèrtex|El vértice",
"x": "El <b>vèrtex</b> és el punt més baix (o més alt) de la paràbola. La paràbola és simètrica respecte de la recta vertical que hi passa, i la seva x és <b>x = −b ÷ (2a)</b>. La y del vèrtex la trobes substituint aquesta x a la funció.|El <b>vértice</b> es el punto más bajo (o más alto) de la parábola. La parábola es simétrica respecto a la recta vertical que pasa por él, y su x es <b>x = −b ÷ (2a)</b>. La y del vértice la encuentras sustituyendo esa x en la función.",
"ex": [
"f(x) = x² − 4x + 3 (a = 1, b = −4)|f(x) = x² − 4x + 3 (a = 1, b = −4)",
"x = −(−4) ÷ (2 × 1) = 2|x = −(−4) ÷ (2 × 1) = 2",
"f(2) = 4 − 8 + 3 = −1|f(2) = 4 − 8 + 3 = −1",
"Vèrtex: <span class=\"hl\">(2, −1)</span>|Vértice: <span class=\"hl\">(2, −1)</span>"
]
}
],
"words": [
[
"pendent|pendiente",
"el que canvia y quan x augmenta 1; és la m|lo que cambia y cuando x aumenta 1; es la m"
],
[
"ordenada a l'origen|ordenada en el origen",
"on la recta talla l'eix y; és la n|donde la recta corta el eje y; es la n"
],
[
"paràbola|parábola",
"la gràfica de f(x) = ax² + bx + c|la gráfica de f(x) = ax² + bx + c"
],
[
"vèrtex|vértice",
"el punt més alt o més baix de la paràbola|el punto más alto o más bajo de la parábola"
],
[
"eix de simetria|eje de simetría",
"la recta vertical que passa pel vèrtex|la recta vertical que pasa por el vértice"
]
],
"mistakes": [
[
"«f(−1) = −1² − 4 × (−1) + 3 = 6»|«f(−1) = −1² − 4 × (−1) + 3 = 6»",
"Posa el negatiu entre parèntesis: (−1)² = 1, i surt 1 + 4 + 3 = 8.|Pon el negativo entre paréntesis: (−1)² = 1, y sale 1 + 4 + 3 = 8."
],
[
"«El vèrtex de x² − 4x + 3 és a x = −2.»|«El vértice de x² − 4x + 3 está en x = −2.»",
"La fórmula és −b ÷ (2a), i aquí b = −4: −(−4) ÷ 2 = 2.|La fórmula es −b ÷ (2a), y aquí b = −4: −(−4) ÷ 2 = 2."
],
[
"«El punt (7, 2) és de y = 3x + 1 perquè 3 × 2 + 1 = 7.»|«El punto (7, 2) es de y = 3x + 1 porque 3 × 2 + 1 = 7.»",
"En un punt (x, y) primer va la x. Has de provar x = 7: 3 × 7 + 1 = 22, i no és 2.|En un punto (x, y) primero va la x. Tienes que probar x = 7: 3 × 7 + 1 = 22, y no es 2."
]
],
"recap": [
"Recta y = mx + n: m és el pendent, n el tall amb l'eix y.|Recta y = mx + n: m es la pendiente, n el corte con el eje y.",
"Un punt és de la recta si compleix l'equació.|Un punto es de la recta si cumple la ecuación.",
"La paràbola y = ax² + bx + c talla l'eix y a (0, c).|La parábola y = ax² + bx + c corta el eje y en (0, c).",
"Vèrtex: x = −b ÷ (2a), i després calcules la y.|Vértice: x = −b ÷ (2a), y después calculas la y."
],
"tip": "Si dubtes, fes una taula de valors petita (x = −1, 0, 1, 2, 3): veuràs el pendent de la recta o on gira la paràbola.|Si dudas, haz una tabla de valores pequeña (x = −1, 0, 1, 2, 3): verás la pendiente de la recta o dónde gira la parábola."
},
"c9-7": {
"hook": "Un paleta comprova si una cantonada fa angle recte mesurant 3, 4 i 5 unitats, i amb l'ombra d'un pal pots saber l'altura d'un arbre sense enfilar-t'hi.|Un albañil comprueba si una esquina forma un ángulo recto midiendo 3, 4 y 5 unidades, y con la sombra de un palo puedes saber la altura de un árbol sin subirte a él.",
"parts": [
{
"t": "Teorema de Pitàgores|Teorema de Pitágoras",
"x": "En un triangle rectangle, la <b>hipotenusa</b> c és el costat oposat a l'angle recte, i els <b>catets</b> a i b són els altres dos. Sempre es compleix <b>a² + b² = c²</b>. Per trobar la hipotenusa, sumes quadrats; per trobar un catet, restes: b² = c² − a².|En un triángulo rectángulo, la <b>hipotenusa</b> c es el lado opuesto al ángulo recto, y los <b>catetos</b> a y b son los otros dos. Siempre se cumple <b>a² + b² = c²</b>. Para hallar la hipotenusa, sumas cuadrados; para hallar un cateto, restas: b² = c² − a².",
"ex": [
"Escala de 5 m, peu a 3 m de la paret|Escalera de 5 m, pie a 3 m de la pared",
"L'escala és la hipotenusa|La escalera es la hipotenusa",
"h² = 5² − 3² = 25 − 9 = 16|h² = 5² − 3² = 25 − 9 = 16",
"h = √16 = <span class=\"hl\">4 m</span>|h = √16 = <span class=\"hl\">4 m</span>"
]
},
{
"t": "És rectangle?|¿Es rectángulo?",
"x": "El teorema també funciona al revés: si el quadrat del costat <b>més llarg</b> és igual a la suma dels quadrats dels altres dos, el triangle és rectangle. Si no coincideix, no ho és. Fixa't sempre a posar el costat més llarg sol a un costat de l'igual.|El teorema también funciona al revés: si el cuadrado del lado <b>más largo</b> es igual a la suma de los cuadrados de los otros dos, el triángulo es rectángulo. Si no coincide, no lo es. Fíjate siempre en poner el lado más largo solo a un lado del igual.",
"ex": [
"Costats 6, 8 i 10: 36 + 64 = 100|Lados 6, 8 y 10: 36 + 64 = 100",
"10² = 100 → <span class=\"hl\">sí</span> és rectangle|10² = 100 → <span class=\"hl\">sí</span> es rectángulo",
"Costats 5, 6 i 8: 25 + 36 = 61|Lados 5, 6 y 8: 25 + 36 = 61",
"8² = 64 ≠ 61 → <span class=\"hl\">no</span> ho és|8² = 64 ≠ 61 → <span class=\"hl\">no</span> lo es"
]
},
{
"t": "Tales i les ombres|Tales y las sombras",
"x": "Dos triangles són <b>semblants</b> si tenen els mateixos angles; aleshores els seus costats són <b>proporcionals</b>. A la mateixa hora, els raigs del sol arriben paral·lels, així que un pal i la seva ombra formen un triangle semblant al d'un arbre i la seva ombra. Això és el que diu el <b>teorema de Tales</b>.|Dos triángulos son <b>semejantes</b> si tienen los mismos ángulos; entonces sus lados son <b>proporcionales</b>. A la misma hora, los rayos del sol llegan paralelos, así que un palo y su sombra forman un triángulo semejante al de un árbol y su sombra. Esto es lo que dice el <b>teorema de Tales</b>.",
"ex": [
"Pal de 2 m → ombra de 3 m|Palo de 2 m → sombra de 3 m",
"Arbre → ombra de 15 m|Árbol → sombra de 15 m",
"h/15 = 2/3 → h = 15 × 2 ÷ 3|h/15 = 2/3 → h = 15 × 2 ÷ 3",
"h = <span class=\"hl\">10 m</span>|h = <span class=\"hl\">10 m</span>"
]
},
{
"t": "Volum del con i de l'esfera|Volumen del cono y de la esfera",
"x": "Un <b>con</b> ocupa exactament un terç del cilindre que té la mateixa base i la mateixa altura: <b>V = π × r² × h ÷ 3</b>. El volum de l'<b>esfera</b> és <b>V = 4/3 × π × r³</b>. Totes dues donen unitats cúbiques (cm³, m³). Aquí fem servir π ≈ 3,14.|Un <b>cono</b> ocupa exactamente un tercio del cilindro que tiene la misma base y la misma altura: <b>V = π × r² × h ÷ 3</b>. El volumen de la <b>esfera</b> es <b>V = 4/3 × π × r³</b>. Las dos dan unidades cúbicas (cm³, m³). Aquí usamos π ≈ 3,14.",
"ex": [
"Con: r = 3 cm, h = 4 cm|Cono: r = 3 cm, h = 4 cm",
"V = 3,14 × 9 × 4 ÷ 3 = <span class=\"hl\">37,68 cm³</span>|V = 3,14 × 9 × 4 ÷ 3 = <span class=\"hl\">37,68 cm³</span>",
"Esfera: r = 3 cm|Esfera: r = 3 cm",
"V = 4/3 × 3,14 × 27 = <span class=\"hl\">113,04 cm³</span>|V = 4/3 × 3,14 × 27 = <span class=\"hl\">113,04 cm³</span>"
]
}
],
"words": [
[
"hipotenusa|hipotenusa",
"el costat oposat a l'angle recte; el més llarg|el lado opuesto al ángulo recto; el más largo"
],
[
"catet|cateto",
"cadascun dels dos costats que formen l'angle recte|cada uno de los dos lados que forman el ángulo recto"
],
[
"triangles semblants|triángulos semejantes",
"mateixos angles i costats proporcionals|mismos ángulos y lados proporcionales"
],
[
"raó de semblança|razón de semejanza",
"el número pel qual es multipliquen tots els costats|el número por el que se multiplican todos los lados"
],
[
"volum|volumen",
"l'espai que ocupa un cos; es mesura en unitats cúbiques|el espacio que ocupa un cuerpo; se mide en unidades cúbicas"
]
],
"mistakes": [
[
"«Si la hipotenusa fa 13 i un catet 5, l'altre és √(13² + 5²).»|«Si la hipotenusa mide 13 y un cateto 5, el otro es √(13² + 5²).»",
"Per a un catet es resta: √(169 − 25) = √144 = 12. El catet ha de ser més curt que la hipotenusa.|Para un cateto se resta: √(169 − 25) = √144 = 12. El cateto tiene que ser más corto que la hipotenusa."
],
[
"«El con de r = 3 i h = 4 fa 3,14 × 9 × 4 = 113,04 cm³.»|«El cono de r = 3 y h = 4 mide 3,14 × 9 × 4 = 113,04 cm³.»",
"Això és el cilindre. El con és un terç: 113,04 ÷ 3 = 37,68 cm³.|Eso es el cilindro. El cono es un tercio: 113,04 ÷ 3 = 37,68 cm³."
],
[
"«Esfera de radi 3: 4/3 × 3,14 × 9.»|«Esfera de radio 3: 4/3 × 3,14 × 9.»",
"A l'esfera el radi va al cub: r³ = 27, no r² = 9.|En la esfera el radio va al cubo: r³ = 27, no r² = 9."
]
],
"recap": [
"a² + b² = c², amb c la hipotenusa.|a² + b² = c², con c la hipotenusa.",
"Si el quadrat del costat més llarg és la suma dels altres, és rectangle.|Si el cuadrado del lado más largo es la suma de los otros, es rectángulo.",
"Triangles semblants: costats proporcionals (Tales).|Triángulos semejantes: lados proporcionales (Tales).",
"Con = π × r² × h ÷ 3; esfera = 4/3 × π × r³.|Cono = π × r² × h ÷ 3; esfera = 4/3 × π × r³."
],
"tip": "Aprèn-te les ternes 3-4-5, 6-8-10 i 5-12-13: surten tant que, si les reconeixes, t'estalvies les arrels.|Apréndete las ternas 3-4-5, 6-8-10 y 5-12-13: salen tanto que, si las reconoces, te ahorras las raíces."
},
"c9-8": {
"hook": "Amb dos daus, el 7 és la suma que surt més sovint. Saber-ho t'ajuda a prendre millors decisions a molts jocs de taula, i a entendre què vol dir que alguna cosa sigui probable.|Con dos dados, el 7 es la suma que sale más a menudo. Saberlo te ayuda a tomar mejores decisiones en muchos juegos de mesa, y a entender qué quiere decir que algo sea probable.",
"parts": [
{
"t": "Comptar casos|Contar casos",
"x": "Si una tria es fa en diversos passos, el nombre total de possibilitats és el <b>producte</b> de les opcions de cada pas: és el <b>principi de multiplicació</b>. Funciona perquè cada opció del primer pas es pot combinar amb totes les del segon. Amb dos daus, cada un dels 6 resultats del primer va amb 6 del segon.|Si una elección se hace en varios pasos, el número total de posibilidades es el <b>producto</b> de las opciones de cada paso: es el <b>principio de multiplicación</b>. Funciona porque cada opción del primer paso se puede combinar con todas las del segundo. Con dos dados, cada uno de los 6 resultados del primero va con 6 del segundo.",
"ex": [
"3 primers, 4 segons i 2 postres|3 primeros, 4 segundos y 2 postres",
"Menús: 3 × 4 × 2 = <span class=\"hl\">24</span>|Menús: 3 × 4 × 2 = <span class=\"hl\">24</span>",
"Dos daus: 6 × 6 = <span class=\"hl\">36</span> resultats|Dos dados: 6 × 6 = <span class=\"hl\">36</span> resultados"
]
},
{
"t": "Laplace i succés contrari|Laplace y suceso contrario",
"x": "Si tots els resultats són igual de probables, <b>P = casos favorables ÷ casos possibles</b> (regla de Laplace). El <b>succés contrari</b> d'A és «no passa A», i P(no A) = 1 − P(A). És molt útil quan et demanen «almenys un»: és més fàcil comptar els casos en què no n'hi ha cap.|Si todos los resultados son igual de probables, <b>P = casos favorables ÷ casos posibles</b> (regla de Laplace). El <b>suceso contrario</b> de A es «no ocurre A», y P(no A) = 1 − P(A). Es muy útil cuando te piden «al menos uno»: es más fácil contar los casos en que no hay ninguno.",
"ex": [
"Suma 7: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1)|Suma 7: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1)",
"P(suma 7) = 6/36 = <span class=\"hl\">1/6</span>|P(suma 7) = 6/36 = <span class=\"hl\">1/6</span>",
"Cap 6: 5 × 5 = 25 casos de 36|Ningún 6: 5 × 5 = 25 casos de 36",
"P(almenys un 6) = 1 − 25/36 = <span class=\"hl\">11/36</span>|P(al menos un 6) = 1 − 25/36 = <span class=\"hl\">11/36</span>"
]
},
{
"t": "Sense reemplaçament|Sin reemplazo",
"x": "Si treus objectes <b>sense tornar-los</b>, cada extracció canvia la bossa: hi ha un objecte menys. Per això la segona probabilitat es calcula amb el que queda, i les probabilitats de cada pas es <b>multipliquen</b>. Si els tornessis, la bossa no canviaria i seria 3/5 × 3/5.|Si sacas objetos <b>sin devolverlos</b>, cada extracción cambia la bolsa: hay un objeto menos. Por eso la segunda probabilidad se calcula con lo que queda, y las probabilidades de cada paso se <b>multiplican</b>. Si los devolvieras, la bolsa no cambiaría y sería 3/5 × 3/5.",
"ex": [
"3 vermelles i 2 blaves. Dues vermelles?|3 rojas y 2 azules. ¿Dos rojas?",
"Primera: 3/5. Queden 2 vermelles de 4|Primera: 3/5. Quedan 2 rojas de 4",
"P = 3/5 × 2/4 = 6/20 = <span class=\"hl\">3/10</span>|P = 3/5 × 2/4 = 6/20 = <span class=\"hl\">3/10</span>"
]
},
{
"t": "Mitjana, mediana i moda|Media, mediana y moda",
"x": "La <b>mitjana</b> és la suma de les dades dividida pel nombre de dades; per tant, suma = mitjana × nombre de dades, i així pots trobar un valor que falta. La <b>mediana</b> és el valor del mig amb les dades <b>ordenades</b>; si n'hi ha un nombre parell, és la mitjana dels dos centrals. La <b>moda</b> és el valor que més es repeteix.|La <b>media</b> es la suma de los datos dividida entre el número de datos; por tanto, suma = media × número de datos, y así puedes hallar un valor que falta. La <b>mediana</b> es el valor del medio con los datos <b>ordenados</b>; si hay un número par, es la media de los dos centrales. La <b>moda</b> es el valor que más se repite.",
"ex": [
"Punts: 10, 3, 9, 5, 8, 1|Puntos: 10, 3, 9, 5, 8, 1",
"Mitjana: 36 ÷ 6 = <span class=\"hl\">6</span>|Media: 36 ÷ 6 = <span class=\"hl\">6</span>",
"Ordenats: 1, 3, 5, 8, 9, 10|Ordenados: 1, 3, 5, 8, 9, 10",
"Mediana: (5 + 8) ÷ 2 = <span class=\"hl\">6,5</span>|Mediana: (5 + 8) ÷ 2 = <span class=\"hl\">6,5</span>"
]
}
],
"words": [
[
"espai mostral|espacio muestral",
"tots els resultats possibles d'un experiment|todos los resultados posibles de un experimento"
],
[
"succés contrari|suceso contrario",
"el que passa quan A no passa; P = 1 − P(A)|lo que ocurre cuando A no ocurre; P = 1 − P(A)"
],
[
"sense reemplaçament|sin reemplazo",
"treure sense tornar, i la bossa canvia|sacar sin devolver, y la bolsa cambia"
],
[
"principi de multiplicació|principio de multiplicación",
"total de casos = producte de les opcions de cada pas|total de casos = producto de las opciones de cada paso"
],
[
"mediana|mediana",
"el valor central de les dades ordenades|el valor central de los datos ordenados"
]
],
"mistakes": [
[
"«Amb dos daus, (2,5) i (5,2) són el mateix cas.»|«Con dos dados, (2,5) y (5,2) son el mismo caso.»",
"Són casos diferents: el primer dau fa 2 en un i 5 en l'altre. Per això hi ha 36 casos i la suma 7 en té 6.|Son casos distintos: el primer dado saca 2 en uno y 5 en el otro. Por eso hay 36 casos y la suma 7 tiene 6."
],
[
"«Sense tornar-les, dues vermelles: 3/5 × 3/5.»|«Sin devolverlas, dos rojas: 3/5 × 3/5.»",
"Després de la primera queden 4 boles i només 2 de vermelles: 3/5 × 2/4 = 3/10.|Después de la primera quedan 4 bolas y solo 2 rojas: 3/5 × 2/4 = 3/10."
],
[
"«La mediana de 10, 3, 9, 5, 8, 1 és (9 + 5) ÷ 2 = 7.»|«La mediana de 10, 3, 9, 5, 8, 1 es (9 + 5) ÷ 2 = 7.»",
"Primer s'ordenen: 1, 3, 5, 8, 9, 10. La mediana és (5 + 8) ÷ 2 = 6,5.|Primero se ordenan: 1, 3, 5, 8, 9, 10. La mediana es (5 + 8) ÷ 2 = 6,5."
]
],
"recap": [
"Principi de multiplicació: multiplica les opcions de cada pas.|Principio de multiplicación: multiplica las opciones de cada paso.",
"P = favorables ÷ possibles, i P(no A) = 1 − P(A).|P = favorables ÷ posibles, y P(no A) = 1 − P(A).",
"Sense reemplaçament, el segon pas té un objecte menys.|Sin reemplazo, el segundo paso tiene un objeto menos.",
"Mediana: ordena primer; amb un nombre parell, mitjana dels dos del mig.|Mediana: ordena primero; con un número par, media de los dos del medio."
],
"tip": "Quan vegis «almenys un», pensa en el contrari: calcula la probabilitat de «cap» i resta-la d'1.|Cuando veas «al menos uno», piensa en el contrario: calcula la probabilidad de «ninguno» y réstala de 1."
},
"c10-1": {
"hook": "Calcular a quina velocitat pots anar per arribar a temps o quants productes has de vendre per no perdre diners es resol amb equacions i inequacions.|Calcular a qué velocidad puedes ir para llegar a tiempo o cuántos productos tienes que vender para no perder dinero se resuelve con ecuaciones e inecuaciones.",
"parts": [
{
"t": "Quantes solucions? El discriminant|¿Cuántas soluciones? El discriminante",
"x": "Una equació de segon grau té la forma <b>ax² + bx + c = 0</b> i es resol amb x = (−b ± √Δ) ÷ (2a), on <b>Δ = b² − 4ac</b> és el <b>discriminant</b>. Com que no existeix l'arrel quadrada d'un nombre negatiu, Δ decideix: si Δ > 0 hi ha dues solucions, si Δ = 0 n'hi ha una (doble) i si Δ &lt; 0 no n'hi ha cap.|Una ecuación de segundo grado tiene la forma <b>ax² + bx + c = 0</b> y se resuelve con x = (−b ± √Δ) ÷ (2a), donde <b>Δ = b² − 4ac</b> es el <b>discriminante</b>. Como no existe la raíz cuadrada de un número negativo, Δ decide: si Δ > 0 hay dos soluciones, si Δ = 0 hay una (doble) y si Δ &lt; 0 no hay ninguna.",
"ex": [
"x² − 5x + 6 = 0 → a = 1, b = −5, c = 6|x² − 5x + 6 = 0 → a = 1, b = −5, c = 6",
"Δ = (−5)² − 4 × 1 × 6 = 25 − 24 = 1|Δ = (−5)² − 4 × 1 × 6 = 25 − 24 = 1",
"x = (5 ± 1) ÷ 2|x = (5 ± 1) ÷ 2",
"x₁ = <span class=\"hl\">3</span>, x₂ = <span class=\"hl\">2</span>|x₁ = <span class=\"hl\">3</span>, x₂ = <span class=\"hl\">2</span>"
]
},
{
"t": "Suma i producte de les solucions|Suma y producto de las soluciones",
"x": "Si x₁ i x₂ són les solucions, l'equació es pot escriure (x − x₁)(x − x₂) = 0, que desenvolupada dona x² − (x₁ + x₂)x + x₁ · x₂ = 0. Per això, quan a = 1, les solucions <b>sumen −b</b> i <b>multipliquen c</b>. En general: suma = −b/a i producte = c/a.|Si x₁ y x₂ son las soluciones, la ecuación se puede escribir (x − x₁)(x − x₂) = 0, que desarrollada da x² − (x₁ + x₂)x + x₁ · x₂ = 0. Por eso, cuando a = 1, las soluciones <b>suman −b</b> y <b>multiplican c</b>. En general: suma = −b/a y producto = c/a.",
"ex": [
"x² − 7x + 10 = 0|x² − 7x + 10 = 0",
"Sumen 7 i multipliquen 10|Suman 7 y multiplican 10",
"2 + 5 = 7 i 2 × 5 = 10|2 + 5 = 7 y 2 × 5 = 10",
"Solucions: x = <span class=\"hl\">2</span> i x = <span class=\"hl\">5</span>|Soluciones: x = <span class=\"hl\">2</span> y x = <span class=\"hl\">5</span>"
]
},
{
"t": "Inequacions i canvi de signe|Inecuaciones y cambio de signo",
"x": "Una <b>inequació</b> compara amb &lt;, >, ≤ o ≥, i la solució és un <b>interval</b> de valors, no un sol nombre. Es resol com una equació, amb una excepció: si multipliques o divideixes per un <b>negatiu</b>, el signe es gira. Passa perquè canviar el signe inverteix l'ordre: 2 &lt; 5, però −2 > −5.|Una <b>inecuación</b> compara con &lt;, >, ≤ o ≥, y la solución es un <b>intervalo</b> de valores, no un solo número. Se resuelve como una ecuación, con una excepción: si multiplicas o divides por un <b>negativo</b>, el signo se invierte. Pasa porque cambiar el signo invierte el orden: 2 &lt; 5, pero −2 > −5.",
"ex": [
"2x − 3 &lt; 7 → 2x &lt; 10 → x &lt; 5|2x − 3 &lt; 7 → 2x &lt; 10 → x &lt; 5",
"−3x ≥ 12 → x ≤ 12 ÷ (−3)|−3x ≥ 12 → x ≤ 12 ÷ (−3)",
"<span class=\"hl\">x ≤ −4</span>, és a dir, (−∞, −4]|<span class=\"hl\">x ≤ −4</span>, es decir, (−∞, −4]"
]
},
{
"t": "Sistemes d'equacions|Sistemas de ecuaciones",
"x": "Un <b>sistema</b> busca els valors que compleixen totes les equacions alhora. Per <b>reducció</b>, sumes o restes les equacions perquè desaparegui una incògnita; per <b>substitució</b>, aïlles una incògnita i la col·loques a l'altra equació. Comprova sempre la solució a les dues equacions.|Un <b>sistema</b> busca los valores que cumplen todas las ecuaciones a la vez. Por <b>reducción</b>, sumas o restas las ecuaciones para que desaparezca una incógnita; por <b>sustitución</b>, despejas una incógnita y la colocas en la otra ecuación. Comprueba siempre la solución en las dos ecuaciones.",
"ex": [
"x + y = 9 i x − y = 3|x + y = 9 y x − y = 3",
"Sumem: 2x = 12 → x = 6|Sumamos: 2x = 12 → x = 6",
"6 + y = 9 → y = 3|6 + y = 9 → y = 3",
"Solució: <span class=\"hl\">x = 6, y = 3</span>|Solución: <span class=\"hl\">x = 6, y = 3</span>"
]
}
],
"words": [
[
"discriminant|discriminante",
"Δ = b² − 4ac; indica quantes solucions té l'equació de segon grau|Δ = b² − 4ac; indica cuántas soluciones tiene la ecuación de segundo grado"
],
[
"arrel d'una equació|raíz de una ecuación",
"cada valor de x que fa certa l'equació|cada valor de x que hace cierta la ecuación"
],
[
"inequació|inecuación",
"desigualtat amb incògnita: &lt;, >, ≤ o ≥|desigualdad con incógnita: &lt;, >, ≤ o ≥"
],
[
"interval|intervalo",
"conjunt de tots els nombres entre dos extrems, com (−∞, 5)|conjunto de todos los números entre dos extremos, como (−∞, 5)"
],
[
"sistema d'equacions|sistema de ecuaciones",
"grup d'equacions que s'han de complir alhora|grupo de ecuaciones que deben cumplirse a la vez"
]
],
"mistakes": [
[
"«−3x ≥ 12, així que x ≥ −4.»|«−3x ≥ 12, así que x ≥ −4.»",
"En dividir per −3 el signe es gira: x ≤ −4. Prova-ho amb x = −5: −3 × (−5) = 15 ≥ 12, sí que funciona.|Al dividir entre −3 el signo se invierte: x ≤ −4. Pruébalo con x = −5: −3 × (−5) = 15 ≥ 12, sí funciona."
],
[
"«Si b = −5, llavors b² = −25.»|«Si b = −5, entonces b² = −25.»",
"(−5)² = 25: un nombre al quadrat mai és negatiu. Posa sempre els negatius entre parèntesis.|(−5)² = 25: un número al cuadrado nunca es negativo. Pon siempre los negativos entre paréntesis."
],
[
"«A x² − 7x + 10 = 0 les solucions sumen −7.»|«En x² − 7x + 10 = 0 las soluciones suman −7.»",
"Sumen −b, i aquí b = −7, per tant sumen 7.|Suman −b, y aquí b = −7, por tanto suman 7."
]
],
"recap": [
"Δ = b² − 4ac: positiu, dues solucions; zero, una; negatiu, cap.|Δ = b² − 4ac: positivo, dos soluciones; cero, una; negativo, ninguna.",
"Amb a = 1, les solucions sumen −b i multipliquen c.|Con a = 1, las soluciones suman −b y multiplican c.",
"Multiplicar o dividir per un negatiu gira la desigualtat.|Multiplicar o dividir por un negativo invierte la desigualdad.",
"Un sistema es resol per reducció o substitució, i es comprova.|Un sistema se resuelve por reducción o sustitución, y se comprueba."
],
"tip": "Abans de fer la fórmula sencera, calcula Δ: si és negatiu, ja has acabat, no hi ha solució.|Antes de hacer la fórmula entera, calcula Δ: si es negativo, ya has terminado, no hay solución."
},
"c10-2": {
"hook": "Una tarifa de mòbil amb quota fixa és una recta, i la trajectòria d'una pilota de bàsquet és una paràbola: saber llegir-les et diu quant pagaràs o on caurà la pilota.|Una tarifa de móvil con cuota fija es una recta, y la trayectoria de un balón de baloncesto es una parábola: saber leerlas te dice cuánto pagarás o dónde caerá el balón.",
"parts": [
{
"t": "L'equació de la recta|La ecuación de la recta",
"x": "Una recta és <b>y = mx + n</b>. El <b>pendent</b> m diu quant puja y quan x augmenta 1, i es calcula m = (y₂ − y₁) ÷ (x₂ − x₁). L'<b>ordenada a l'origen</b> n és on la recta talla l'eix y. Si m > 0 la recta puja; si m &lt; 0, baixa.|Una recta es <b>y = mx + n</b>. La <b>pendiente</b> m dice cuánto sube y cuando x aumenta 1, y se calcula m = (y₂ − y₁) ÷ (x₂ − x₁). La <b>ordenada en el origen</b> n es donde la recta corta el eje y. Si m > 0 la recta sube; si m &lt; 0, baja.",
"ex": [
"Passa per (1, 5) i (3, 9)|Pasa por (1, 5) y (3, 9)",
"m = (9 − 5) ÷ (3 − 1) = 4 ÷ 2 = 2|m = (9 − 5) ÷ (3 − 1) = 4 ÷ 2 = 2",
"5 = 2 × 1 + n → n = 3|5 = 2 × 1 + n → n = 3",
"Recta: <span class=\"hl\">y = 2x + 3</span>|Recta: <span class=\"hl\">y = 2x + 3</span>"
]
},
{
"t": "Valors d'una paràbola|Valores de una parábola",
"x": "Una <b>paràbola</b> és y = ax² + bx + c. Té forma d'U oberta cap amunt si a > 0 i cap avall si a &lt; 0. Per trobar un punt, substitueix x pel seu valor, amb els negatius entre parèntesis, i respecta la jerarquia: primer potències, després productes i al final sumes.|Una <b>parábola</b> es y = ax² + bx + c. Tiene forma de U abierta hacia arriba si a > 0 y hacia abajo si a &lt; 0. Para hallar un punto, sustituye x por su valor, con los negativos entre paréntesis, y respeta la jerarquía: primero potencias, después productos y al final sumas.",
"ex": [
"f(x) = x² − 2x − 3|f(x) = x² − 2x − 3",
"f(−2) = (−2)² − 2 × (−2) − 3|f(−2) = (−2)² − 2 × (−2) − 3",
"f(−2) = 4 + 4 − 3 = <span class=\"hl\">5</span>|f(−2) = 4 + 4 − 3 = <span class=\"hl\">5</span>"
]
},
{
"t": "El vèrtex|El vértice",
"x": "El <b>vèrtex</b> és el punt on la paràbola gira: el mínim si a > 0 i el màxim si a &lt; 0. La paràbola és simètrica respecte de la recta vertical que hi passa, l'<b>eix de simetria</b>. La seva x és <b>x = −b ÷ (2a)</b>; la y s'obté substituint aquesta x a la funció.|El <b>vértice</b> es el punto donde la parábola gira: el mínimo si a > 0 y el máximo si a &lt; 0. La parábola es simétrica respecto de la recta vertical que pasa por él, el <b>eje de simetría</b>. Su x es <b>x = −b ÷ (2a)</b>; la y se obtiene sustituyendo esa x en la función.",
"ex": [
"f(x) = x² − 2x − 3 → a = 1, b = −2|f(x) = x² − 2x − 3 → a = 1, b = −2",
"x = −(−2) ÷ (2 × 1) = 2 ÷ 2 = 1|x = −(−2) ÷ (2 × 1) = 2 ÷ 2 = 1",
"f(1) = 1 − 2 − 3 = −4|f(1) = 1 − 2 − 3 = −4",
"Vèrtex: <span class=\"hl\">V(1, −4)</span>, és un mínim|Vértice: <span class=\"hl\">V(1, −4)</span>, es un mínimo"
]
},
{
"t": "Talls amb els eixos|Cortes con los ejes",
"x": "El tall amb l'<b>eix y</b> és sempre a x = 0, així que val f(0) = c: el terme independent. Els talls amb l'<b>eix x</b> són on y = 0, i es troben resolent ax² + bx + c = 0. Amb el vèrtex, els talls i el signe d'a ja pots dibuixar la paràbola sencera.|El corte con el <b>eje y</b> es siempre en x = 0, así que vale f(0) = c: el término independiente. Los cortes con el <b>eje x</b> son donde y = 0, y se hallan resolviendo ax² + bx + c = 0. Con el vértice, los cortes y el signo de a ya puedes dibujar la parábola entera.",
"ex": [
"f(x) = x² − 2x − 3|f(x) = x² − 2x − 3",
"Eix y: f(0) = −3 → <span class=\"hl\">(0, −3)</span>|Eje y: f(0) = −3 → <span class=\"hl\">(0, −3)</span>",
"Eix x: x² − 2x − 3 = 0 → x = −1, x = 3|Eje x: x² − 2x − 3 = 0 → x = −1, x = 3",
"Talls: <span class=\"hl\">(−1, 0)</span> i <span class=\"hl\">(3, 0)</span>|Cortes: <span class=\"hl\">(−1, 0)</span> y <span class=\"hl\">(3, 0)</span>"
]
}
],
"words": [
[
"pendent|pendiente",
"el que puja y per cada unitat que augmenta x|lo que sube y por cada unidad que aumenta x"
],
[
"ordenada a l'origen|ordenada en el origen",
"el valor n on la recta talla l'eix y|el valor n donde la recta corta el eje y"
],
[
"paràbola|parábola",
"gràfica de y = ax² + bx + c, amb forma d'U|gráfica de y = ax² + bx + c, con forma de U"
],
[
"vèrtex|vértice",
"punt on la paràbola arriba al mínim o al màxim|punto donde la parábola alcanza el mínimo o el máximo"
],
[
"eix de simetria|eje de simetría",
"recta vertical pel vèrtex que divideix la paràbola en dues meitats iguals|recta vertical por el vértice que divide la parábola en dos mitades iguales"
]
],
"mistakes": [
[
"«f(−2) = −2² − 2 × (−2) − 3 = −4 + 4 − 3 = −3.»|«f(−2) = −2² − 2 × (−2) − 3 = −4 + 4 − 3 = −3.»",
"Sense parèntesis només eleves el 2. Cal fer (−2)² = 4, i surt f(−2) = 5.|Sin paréntesis solo elevas el 2. Hay que hacer (−2)² = 4, y sale f(−2) = 5."
],
[
"«El vèrtex és a x = b ÷ (2a).»|«El vértice está en x = b ÷ (2a).»",
"Hi ha un signe menys: x = −b ÷ (2a). Amb b = −2, surt x = 1, no −1.|Hay un signo menos: x = −b ÷ (2a). Con b = −2, sale x = 1, no −1."
],
[
"«El pendent és (x₂ − x₁) ÷ (y₂ − y₁).»|«La pendiente es (x₂ − x₁) ÷ (y₂ − y₁).»",
"És al revés: el canvi de y dividit pel canvi de x, m = (y₂ − y₁) ÷ (x₂ − x₁).|Es al revés: el cambio de y dividido entre el cambio de x, m = (y₂ − y₁) ÷ (x₂ − x₁)."
]
],
"recap": [
"Recta: y = mx + n; m és el pendent i n el tall amb l'eix y.|Recta: y = mx + n; m es la pendiente y n el corte con el eje y.",
"Paràbola: a > 0 oberta amunt, a &lt; 0 oberta avall.|Parábola: a > 0 abierta hacia arriba, a &lt; 0 abierta hacia abajo.",
"Vèrtex a x = −b ÷ (2a).|Vértice en x = −b ÷ (2a).",
"Tall amb l'eix y: (0, c). Talls amb l'eix x: resol f(x) = 0.|Corte con el eje y: (0, c). Cortes con el eje x: resuelve f(x) = 0."
],
"tip": "Comprova el vèrtex amb la simetria: queda just al mig dels dos talls amb l'eix x. Entre −1 i 3, el mig és 1.|Comprueba el vértice con la simetría: queda justo en medio de los dos cortes con el eje x. Entre −1 y 3, el centro es 1."
},
"c10-3": {
"hook": "Rebaixes, pujades de preu, l'IVA, els interessos d'un compte d'estalvi o repartir un premi entre amics: tot això són percentatges i proporcions.|Rebajas, subidas de precio, el IVA, los intereses de una cuenta de ahorro o repartir un premio entre amigos: todo esto son porcentajes y proporciones.",
"parts": [
{
"t": "Augments i baixades encadenats|Subidas y bajadas encadenadas",
"x": "Canviar un preu en un percentatge és <b>multiplicar</b> per l'<b>índex de variació</b>: pujar un 20 % és × 1,20 (el 100 % més el 20 %) i baixar un 15 % és × 0,85. Si hi ha diversos canvis seguits, multipliques els índexs: cada percentatge s'aplica sobre el preu que ja ha canviat, no sobre l'inicial.|Cambiar un precio en un porcentaje es <b>multiplicar</b> por el <b>índice de variación</b>: subir un 20 % es × 1,20 (el 100 % más el 20 %) y bajar un 15 % es × 0,85. Si hay varios cambios seguidos, multiplicas los índices: cada porcentaje se aplica sobre el precio que ya ha cambiado, no sobre el inicial.",
"ex": [
"200 €, puja un 10 % i baixa un 10 %|200 €, sube un 10 % y baja un 10 %",
"200 × 1,1 = 220 €|200 × 1,1 = 220 €",
"220 × 0,9 = <span class=\"hl\">198 €</span>|220 × 0,9 = <span class=\"hl\">198 €</span>",
"1,1 × 0,9 = 0,99 → un 1 % menys|1,1 × 0,9 = 0,99 → un 1 % menos"
]
},
{
"t": "Percentatge invers|Porcentaje inverso",
"x": "Si coneixes el preu <b>final</b> i vols el <b>inicial</b>, has de desfer la multiplicació: divideix entre l'índex de variació. No restes el percentatge del preu final, perquè aquell percentatge es va calcular sobre el preu inicial, que és un altre número.|Si conoces el precio <b>final</b> y quieres el <b>inicial</b>, tienes que deshacer la multiplicación: divide entre el índice de variación. No restes el porcentaje al precio final, porque ese porcentaje se calculó sobre el precio inicial, que es otro número.",
"ex": [
"Amb un 15 % de descompte pagues 68 €|Con un 15 % de descuento pagas 68 €",
"Inicial × 0,85 = 68|Inicial × 0,85 = 68",
"Inicial = 68 ÷ 0,85 = <span class=\"hl\">80 €</span>|Inicial = 68 ÷ 0,85 = <span class=\"hl\">80 €</span>",
"Comprova: 80 × 0,85 = 68 €|Comprueba: 80 × 0,85 = 68 €"
]
},
{
"t": "Interès simple|Interés simple",
"x": "Quan deixes un <b>capital</b> C al banc a un <b>tipus d'interès</b> r anual, cada any guanyes el mateix: C × r. En t anys l'<b>interès simple</b> és <b>I = C × r × t</b>, amb r en forma decimal (3 % = 0,03). El capital final és C + I.|Cuando dejas un <b>capital</b> C en el banco a un <b>tipo de interés</b> r anual, cada año ganas lo mismo: C × r. En t años el <b>interés simple</b> es <b>I = C × r × t</b>, con r en forma decimal (3 % = 0,03). El capital final es C + I.",
"ex": [
"2.000 € al 3 % durant 4 anys|2.000 € al 3 % durante 4 años",
"I = 2.000 × 0,03 × 4 = 240 €|I = 2.000 × 0,03 × 4 = 240 €",
"Final: 2.000 + 240 = <span class=\"hl\">2.240 €</span>|Final: 2.000 + 240 = <span class=\"hl\">2.240 €</span>"
]
},
{
"t": "Repartiments proporcionals|Repartos proporcionales",
"x": "Repartir en <b>proporció directa</b> vol dir que qui aporta més, rep més. Suma les parts, divideix la quantitat total entre aquesta suma per saber quant val una part, i multiplica per les parts de cadascú. Al final, la suma dels trossos ha de donar el total.|Repartir en <b>proporción directa</b> quiere decir que quien aporta más, recibe más. Suma las partes, divide la cantidad total entre esa suma para saber cuánto vale una parte, y multiplica por las partes de cada uno. Al final, la suma de los trozos debe dar el total.",
"ex": [
"900 € en proporció 2 : 3 : 4|900 € en proporción 2 : 3 : 4",
"2 + 3 + 4 = 9 parts → 900 ÷ 9 = 100 €|2 + 3 + 4 = 9 partes → 900 ÷ 9 = 100 €",
"<span class=\"hl\">200 €</span>, <span class=\"hl\">300 €</span> i <span class=\"hl\">400 €</span>|<span class=\"hl\">200 €</span>, <span class=\"hl\">300 €</span> y <span class=\"hl\">400 €</span>",
"Comprova: 200 + 300 + 400 = 900 €|Comprueba: 200 + 300 + 400 = 900 €"
]
}
],
"words": [
[
"índex de variació|índice de variación",
"nombre pel qual multipliques: 1 + r si puja, 1 − r si baixa|número por el que multiplicas: 1 + r si sube, 1 − r si baja"
],
[
"capital|capital",
"diners que diposites o demanes en préstec|dinero que depositas o pides prestado"
],
[
"tipus d'interès|tipo de interés",
"percentatge que guanyes o pagues cada any|porcentaje que ganas o pagas cada año"
],
[
"interès simple|interés simple",
"I = C × r × t: el mateix guany cada any|I = C × r × t: la misma ganancia cada año"
],
[
"repartiment proporcional|reparto proporcional",
"dividir una quantitat segons unes parts donades|dividir una cantidad según unas partes dadas"
]
],
"mistakes": [
[
"«Després de pujar un 20 % costa 60 €, doncs abans en costava 60 − 12 = 48.»|«Después de subir un 20 % cuesta 60 €, así que antes costaba 60 − 12 = 48.»",
"El 20 % era del preu inicial. Divideix: 60 ÷ 1,2 = 50 €. Comprova: 50 × 1,2 = 60.|El 20 % era del precio inicial. Divide: 60 ÷ 1,2 = 50 €. Comprueba: 50 × 1,2 = 60."
],
[
"«Pujar un 10 % i baixar un 10 % et deixa igual.»|«Subir un 10 % y bajar un 10 % te deja igual.»",
"La baixada s'aplica sobre un preu més gran: 1,1 × 0,9 = 0,99, perds un 1 %.|La bajada se aplica sobre un precio mayor: 1,1 × 0,9 = 0,99, pierdes un 1 %."
],
[
"«I = 2.000 × 3 × 4 = 24.000 €.»|«I = 2.000 × 3 × 4 = 24.000 €.»",
"El tipus va en decimal: 3 % = 0,03. Surt 240 €, una xifra raonable.|El tipo va en decimal: 3 % = 0,03. Sale 240 €, una cifra razonable."
]
],
"recap": [
"Pujar r % és × (1 + r); baixar r % és × (1 − r).|Subir r % es × (1 + r); bajar r % es × (1 − r).",
"Canvis encadenats: multiplica els índexs.|Cambios encadenados: multiplica los índices.",
"Preu inicial = preu final ÷ índex.|Precio inicial = precio final ÷ índice.",
"Interès simple: I = C × r × t.|Interés simple: I = C × r × t."
],
"tip": "Fes el control de sentit comú: si ha pujat, l'inicial ha de ser més petit; si és un repartiment, les parts han de sumar el total.|Haz el control de sentido común: si ha subido, el inicial debe ser menor; si es un reparto, las partes deben sumar el total."
},
"c10-4": {
"hook": "Amb un sol angle i una distància pots saber l'altura d'un edifici, d'un arbre o d'una muntanya sense pujar-hi: és el que fan els topògrafs i els GPS.|Con un solo ángulo y una distancia puedes saber la altura de un edificio, de un árbol o de una montaña sin subir: es lo que hacen los topógrafos y los GPS.",
"parts": [
{
"t": "El sinus|El seno",
"x": "En un triangle rectangle, el <b>sinus</b> d'un angle agut α és <b>catet oposat ÷ hipotenusa</b>. Tots els triangles rectangles amb el mateix angle α són semblants, així que aquesta divisió dona sempre el mateix: només depèn de l'angle. Com que la hipotenusa és el costat més llarg, el sinus està entre 0 i 1.|En un triángulo rectángulo, el <b>seno</b> de un ángulo agudo α es <b>cateto opuesto ÷ hipotenusa</b>. Todos los triángulos rectángulos con el mismo ángulo α son semejantes, así que esta división da siempre lo mismo: solo depende del ángulo. Como la hipotenusa es el lado más largo, el seno está entre 0 y 1.",
"ex": [
"Triangle de costats 3, 4 i 5|Triángulo de lados 3, 4 y 5",
"α és l'angle oposat al costat 3|α es el ángulo opuesto al lado 3",
"sin α = 3 ÷ 5 = <span class=\"hl\">0,6</span>|sen α = 3 ÷ 5 = <span class=\"hl\">0,6</span>"
]
},
{
"t": "El cosinus|El coseno",
"x": "El <b>cosinus</b> de α és <b>catet contigu ÷ hipotenusa</b>. El catet contigu és el que toca l'angle i no és la hipotenusa. Per Pitàgores es compleix sempre <b>sin² α + cos² α = 1</b>, que et permet trobar una raó a partir de l'altra.|El <b>coseno</b> de α es <b>cateto contiguo ÷ hipotenusa</b>. El cateto contiguo es el que toca el ángulo y no es la hipotenusa. Por Pitágoras se cumple siempre <b>sen² α + cos² α = 1</b>, que te permite hallar una razón a partir de la otra.",
"ex": [
"Mateix triangle 3, 4, 5|Mismo triángulo 3, 4, 5",
"cos α = 4 ÷ 5 = <span class=\"hl\">0,8</span>|cos α = 4 ÷ 5 = <span class=\"hl\">0,8</span>",
"0,6² + 0,8² = 0,36 + 0,64 = 1|0,6² + 0,8² = 0,36 + 0,64 = 1"
]
},
{
"t": "La tangent|La tangente",
"x": "La <b>tangent</b> de α és <b>catet oposat ÷ catet contigu</b>, i també es pot calcular com sin α ÷ cos α. Mesura la inclinació, com el pendent d'una rampa. A diferència del sinus i el cosinus, pot ser més gran que 1.|La <b>tangente</b> de α es <b>cateto opuesto ÷ cateto contiguo</b>, y también se puede calcular como sen α ÷ cos α. Mide la inclinación, como la pendiente de una rampa. A diferencia del seno y el coseno, puede ser mayor que 1.",
"ex": [
"Mateix triangle 3, 4, 5|Mismo triángulo 3, 4, 5",
"tan α = 3 ÷ 4 = <span class=\"hl\">0,75</span>|tan α = 3 ÷ 4 = <span class=\"hl\">0,75</span>",
"També: 0,6 ÷ 0,8 = 0,75|También: 0,6 ÷ 0,8 = 0,75"
]
},
{
"t": "Angles especials i problemes|Ángulos especiales y problemas",
"x": "Convé saber de memòria: sin 30° = cos 60° = 1/2; sin 60° = cos 30° = √3/2 ≈ 0,866; sin 45° = cos 45° = √2/2 ≈ 0,707; tan 45° = 1. Per resoldre un problema, dibuixa el triangle, marca l'angle, identifica quins costats coneixes i tria la raó que els relaciona.|Conviene saber de memoria: sen 30° = cos 60° = 1/2; sen 60° = cos 30° = √3/2 ≈ 0,866; sen 45° = cos 45° = √2/2 ≈ 0,707; tan 45° = 1. Para resolver un problema, dibuja el triángulo, marca el ángulo, identifica qué lados conoces y elige la razón que los relaciona.",
"ex": [
"Rampa de 8 m inclinada 30°|Rampa de 8 m inclinada 30°",
"Rampa = hipotenusa; altura = oposat|Rampa = hipotenusa; altura = opuesto",
"altura = 8 × sin 30° = 8 × 0,5|altura = 8 × sen 30° = 8 × 0,5",
"altura = <span class=\"hl\">4 m</span>|altura = <span class=\"hl\">4 m</span>"
]
}
],
"words": [
[
"hipotenusa|hipotenusa",
"costat oposat a l'angle recte; és el més llarg|lado opuesto al ángulo recto; es el más largo"
],
[
"catet oposat|cateto opuesto",
"el catet que queda davant de l'angle|el cateto que queda enfrente del ángulo"
],
[
"catet contigu|cateto contiguo",
"el catet que forma l'angle amb la hipotenusa|el cateto que forma el ángulo con la hipotenusa"
],
[
"raó trigonomètrica|razón trigonométrica",
"divisió entre dos costats que només depèn de l'angle: sinus, cosinus o tangent|división entre dos lados que solo depende del ángulo: seno, coseno o tangente"
],
[
"angle d'elevació|ángulo de elevación",
"angle entre l'horitzontal i la línia de mirada cap amunt|ángulo entre la horizontal y la línea de mirada hacia arriba"
]
],
"mistakes": [
[
"«He obtingut sin α = 1,25.»|«Me ha salido sen α = 1,25.»",
"Impossible: la hipotenusa és el costat més llarg, així que sinus i cosinus mai passen d'1. Segurament has dividit al revés.|Imposible: la hipotenusa es el lado más largo, así que seno y coseno nunca pasan de 1. Seguramente has dividido al revés."
],
[
"Confondre el catet oposat amb el contigu.|Confundir el cateto opuesto con el contiguo.",
"Depèn de quin angle mires: l'oposat no toca l'angle, el contigu sí. Marca'ls al dibuix abans de calcular.|Depende de qué ángulo mires: el opuesto no toca el ángulo, el contiguo sí. Márcalos en el dibujo antes de calcular."
],
[
"«La calculadora diu sin 30 = −0,988.»|«La calculadora dice sen 30 = −0,988.»",
"Està en radians. Posa-la en graus (DEG) i sortirà 0,5.|Está en radianes. Ponla en grados (DEG) y saldrá 0,5."
]
],
"recap": [
"sin = oposat ÷ hipotenusa.|sen = opuesto ÷ hipotenusa.",
"cos = contigu ÷ hipotenusa.|cos = contiguo ÷ hipotenusa.",
"tan = oposat ÷ contigu = sin ÷ cos.|tan = opuesto ÷ contiguo = sen ÷ cos.",
"sin² α + cos² α = 1, i sinus i cosinus mai passen d'1.|sen² α + cos² α = 1, y seno y coseno nunca pasan de 1."
],
"tip": "Recorda SOH-CAH-TOA: Sinus = Oposat/Hipotenusa, Cosinus = Adjacent/Hipotenusa, Tangent = Oposat/Adjacent (adjacent vol dir contigu).|Recuerda SOH-CAH-TOA: Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente (adyacente significa contiguo)."
},
"c10-5": {
"hook": "Saber quanta pintura cal per a un dipòsit, quant d'aire té una pilota o quina altura fa un edifici a partir de la seva ombra són problemes reals de mesura.|Saber cuánta pintura hace falta para un depósito, cuánto aire tiene un balón o qué altura tiene un edificio a partir de su sombra son problemas reales de medida.",
"parts": [
{
"t": "Teorema de Pitàgores|Teorema de Pitágoras",
"x": "En un triangle rectangle, el quadrat de la hipotenusa és igual a la suma dels quadrats dels catets: <b>a² = b² + c²</b>. Serveix per trobar un costat si coneixes els altres dos. Per trobar un catet, resta: b² = a² − c².|En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos: <b>a² = b² + c²</b>. Sirve para hallar un lado si conoces los otros dos. Para hallar un cateto, resta: b² = a² − c².",
"ex": [
"Catets de 5 cm i 12 cm|Catetos de 5 cm y 12 cm",
"a² = 5² + 12² = 25 + 144 = 169|a² = 5² + 12² = 25 + 144 = 169",
"a = √169 = <span class=\"hl\">13 cm</span>|a = √169 = <span class=\"hl\">13 cm</span>",
"Catet: √(10² − 6²) = √64 = 8|Cateto: √(10² − 6²) = √64 = 8"
]
},
{
"t": "Àrea total i volum|Área total y volumen",
"x": "L'<b>àrea total</b> és la suma de totes les cares: és el que caldria per embolicar el cos. En un cilindre són dues bases circulars i un rectangle que fa la volta: A = 2πr² + 2πrh. El <b>volum</b> de prismes i cilindres és àrea de la base × altura: V = πr²h.|El <b>área total</b> es la suma de todas las caras: es lo que haría falta para envolver el cuerpo. En un cilindro son dos bases circulares y un rectángulo que da la vuelta: A = 2πr² + 2πrh. El <b>volumen</b> de prismas y cilindros es área de la base × altura: V = πr²h.",
"ex": [
"Cilindre: r = 2 cm, h = 5 cm|Cilindro: r = 2 cm, h = 5 cm",
"A = 2π × 2² + 2π × 2 × 5 = 8π + 20π|A = 2π × 2² + 2π × 2 × 5 = 8π + 20π",
"A = 28π ≈ <span class=\"hl\">87,96 cm²</span>|A = 28π ≈ <span class=\"hl\">87,96 cm²</span>",
"V = π × 2² × 5 = 20π ≈ <span class=\"hl\">62,83 cm³</span>|V = π × 2² × 5 = 20π ≈ <span class=\"hl\">62,83 cm³</span>"
]
},
{
"t": "Semicercles i esferes|Semicírculos y esferas",
"x": "Un <b>semicercle</b> és mig cercle: àrea πr² ÷ 2 i perímetre πr + 2r (l'arc més el diàmetre). Una <b>esfera</b> de radi r té àrea <b>4πr²</b> (quatre vegades el cercle del mig) i volum <b>4/3 · πr³</b>. Totes aquestes fórmules fan servir el radi.|Un <b>semicírculo</b> es medio círculo: área πr² ÷ 2 y perímetro πr + 2r (el arco más el diámetro). Una <b>esfera</b> de radio r tiene área <b>4πr²</b> (cuatro veces el círculo central) y volumen <b>4/3 · πr³</b>. Todas estas fórmulas usan el radio.",
"ex": [
"Semicercle r = 4: π × 4² ÷ 2 = 8π|Semicírculo r = 4: π × 4² ÷ 2 = 8π",
"8π ≈ <span class=\"hl\">25,13 cm²</span>|8π ≈ <span class=\"hl\">25,13 cm²</span>",
"Esfera r = 6: A = 4π × 6² = 144π|Esfera r = 6: A = 4π × 6² = 144π",
"V = 4/3 × π × 6³ = 288π|V = 4/3 × π × 6³ = 288π",
"A ≈ 452,39 cm², V ≈ <span class=\"hl\">904,78 cm³</span>|A ≈ 452,39 cm², V ≈ <span class=\"hl\">904,78 cm³</span>"
]
},
{
"t": "Teorema de Tales|Teorema de Tales",
"x": "Si dues rectes es tallen amb rectes <b>paral·leles</b>, els segments que s'hi formen són <b>proporcionals</b>. Per això dos triangles en posició de Tales són semblants i els seus costats mantenen la mateixa raó. Així es mesuren altures amb ombres: el sol fa raigs paral·lels.|Si dos rectas se cortan con rectas <b>paralelas</b>, los segmentos que se forman son <b>proporcionales</b>. Por eso dos triángulos en posición de Tales son semejantes y sus lados mantienen la misma razón. Así se miden alturas con sombras: el sol da rayos paralelos.",
"ex": [
"Pal d'1 m → ombra de 0,8 m|Palo de 1 m → sombra de 0,8 m",
"Edifici → ombra de 12 m|Edificio → sombra de 12 m",
"h ÷ 12 = 1 ÷ 0,8 → h = 12 ÷ 0,8|h ÷ 12 = 1 ÷ 0,8 → h = 12 ÷ 0,8",
"h = <span class=\"hl\">15 m</span>|h = <span class=\"hl\">15 m</span>"
]
}
],
"words": [
[
"hipotenusa|hipotenusa",
"costat més llarg d'un triangle rectangle, oposat a l'angle recte|lado más largo de un triángulo rectángulo, opuesto al ángulo recto"
],
[
"àrea total|área total",
"suma de les àrees de totes les cares d'un cos|suma de las áreas de todas las caras de un cuerpo"
],
[
"volum|volumen",
"espai que ocupa un cos; es mesura en unitats cúbiques|espacio que ocupa un cuerpo; se mide en unidades cúbicas"
],
[
"radi|radio",
"distància del centre a la vora; és la meitat del diàmetre|distancia del centro al borde; es la mitad del diámetro"
],
[
"segments proporcionals|segmentos proporcionales",
"segments que mantenen la mateixa raó entre ells|segmentos que mantienen la misma razón entre ellos"
]
],
"mistakes": [
[
"«Catets 5 i 12: la hipotenusa fa 5 + 12 = 17.»|«Catetos 5 y 12: la hipotenusa mide 5 + 12 = 17.»",
"Se sumen els quadrats i després es fa l'arrel: √(25 + 144) = 13.|Se suman los cuadrados y después se hace la raíz: √(25 + 144) = 13."
],
[
"Fer servir el diàmetre a la fórmula.|Usar el diámetro en la fórmula.",
"Totes les fórmules van amb el radi. Diàmetre de 12 cm → r = 6 cm.|Todas las fórmulas van con el radio. Diámetro de 12 cm → r = 6 cm."
],
[
"«El perímetre del semicercle és πr.»|«El perímetro del semicírculo es πr.»",
"Això només és l'arc. Falta el costat recte, el diàmetre: πr + 2r.|Eso solo es el arco. Falta el lado recto, el diámetro: πr + 2r."
]
],
"recap": [
"Pitàgores: a² = b² + c², i al final fes l'arrel.|Pitágoras: a² = b² + c², y al final haz la raíz.",
"Cilindre: A = 2πr² + 2πrh, V = πr²h.|Cilindro: A = 2πr² + 2πrh, V = πr²h.",
"Esfera: A = 4πr², V = 4/3 · πr³.|Esfera: A = 4πr², V = 4/3 · πr³.",
"Tales: paral·leles → segments proporcionals.|Tales: paralelas → segmentos proporcionales."
],
"tip": "Mira les unitats: una àrea sempre va en cm² i un volum en cm³. Si la fórmula té r², és àrea; si té r³, és volum.|Mira las unidades: un área siempre va en cm² y un volumen en cm³. Si la fórmula tiene r², es área; si tiene r³, es volumen."
},
"c10-6": {
"hook": "La distància a una estrella, la mida d'un virus o l'estalvi que creix cada mes s'escriuen i es calculen amb potències, successions i expressions algebraiques.|La distancia a una estrella, el tamaño de un virus o el ahorro que crece cada mes se escriben y se calculan con potencias, sucesiones y expresiones algebraicas.",
"parts": [
{
"t": "Identitats notables|Identidades notables",
"x": "Són productes que surten tan sovint que convé saber-los de memòria: <b>(a + b)² = a² + 2ab + b²</b>, <b>(a − b)² = a² − 2ab + b²</b> i <b>(a + b)(a − b) = a² − b²</b>. Surten d'aplicar la propietat distributiva: (a + b)² = (a + b)(a + b), i el terme 2ab ve de sumar ab dues vegades.|Son productos que salen tan a menudo que conviene saberlos de memoria: <b>(a + b)² = a² + 2ab + b²</b>, <b>(a − b)² = a² − 2ab + b²</b> y <b>(a + b)(a − b) = a² − b²</b>. Salen de aplicar la propiedad distributiva: (a + b)² = (a + b)(a + b), y el término 2ab viene de sumar ab dos veces.",
"ex": [
"(x + 3)² = x² + 6x + 9|(x + 3)² = x² + 6x + 9",
"(x − 3)² = x² − 6x + 9|(x − 3)² = x² − 6x + 9",
"(x + 4)(x − 4) = x² − 16|(x + 4)(x − 4) = x² − 16",
"21 × 19 = 20² − 1² = <span class=\"hl\">399</span>|21 × 19 = 20² − 1² = <span class=\"hl\">399</span>"
]
},
{
"t": "Progressions i terme general|Progresiones y término general",
"x": "En una <b>progressió aritmètica</b> se suma sempre la mateixa <b>diferència</b> d: <b>aₙ = a₁ + (n − 1) · d</b>, perquè fins al terme n hi ha n − 1 salts. En una <b>progressió geomètrica</b> es multiplica sempre per la mateixa <b>raó</b> r: <b>aₙ = a₁ · rⁿ⁻¹</b>. El terme general et dona qualsevol terme sense escriure'ls tots.|En una <b>progresión aritmética</b> se suma siempre la misma <b>diferencia</b> d: <b>aₙ = a₁ + (n − 1) · d</b>, porque hasta el término n hay n − 1 saltos. En una <b>progresión geométrica</b> se multiplica siempre por la misma <b>razón</b> r: <b>aₙ = a₁ · rⁿ⁻¹</b>. El término general te da cualquier término sin escribirlos todos.",
"ex": [
"5, 8, 11… → d = 3|5, 8, 11… → d = 3",
"a₂₀ = 5 + 19 × 3 = <span class=\"hl\">62</span>|a₂₀ = 5 + 19 × 3 = <span class=\"hl\">62</span>",
"3, 6, 12… → r = 2|3, 6, 12… → r = 2",
"a₆ = 3 × 2⁵ = 3 × 32 = <span class=\"hl\">96</span>|a₆ = 3 × 2⁵ = 3 × 32 = <span class=\"hl\">96</span>"
]
},
{
"t": "Propietats de les potències|Propiedades de las potencias",
"x": "Amb la mateixa base: en multiplicar, els exponents <b>se sumen</b> (aᵐ × aⁿ = aᵐ⁺ⁿ); en dividir, <b>es resten</b> (aᵐ ÷ aⁿ = aᵐ⁻ⁿ); i una potència d'una potència <b>es multiplica</b>: (a³)² = a⁶. D'aquí surt que a⁰ = 1 i que un exponent negatiu és una fracció: a⁻ⁿ = 1/aⁿ.|Con la misma base: al multiplicar, los exponentes <b>se suman</b> (aᵐ × aⁿ = aᵐ⁺ⁿ); al dividir, <b>se restan</b> (aᵐ ÷ aⁿ = aᵐ⁻ⁿ); y una potencia de una potencia <b>se multiplica</b>: (a³)² = a⁶. De aquí sale que a⁰ = 1 y que un exponente negativo es una fracción: a⁻ⁿ = 1/aⁿ.",
"ex": [
"2³ × 2⁴ = 2⁷ = 128|2³ × 2⁴ = 2⁷ = 128",
"(2³)² = 2⁶ = 64|(2³)² = 2⁶ = 64",
"2³ ÷ 2⁵ = 2⁻² = <span class=\"hl\">1/4</span>|2³ ÷ 2⁵ = 2⁻² = <span class=\"hl\">1/4</span>",
"Comprova: 8 ÷ 32 = 1/4|Comprueba: 8 ÷ 32 = 1/4"
]
},
{
"t": "Notació científica|Notación científica",
"x": "Un nombre en <b>notació científica</b> s'escriu a × 10ⁿ, amb <b>1 ≤ a &lt; 10</b>. L'exponent n compta quantes posicions es mou la coma: positiu per a nombres grans i negatiu per a nombres petits. Per multiplicar, multiplica les a i suma els exponents; si a surt 10 o més, reajusta.|Un número en <b>notación científica</b> se escribe a × 10ⁿ, con <b>1 ≤ a &lt; 10</b>. El exponente n cuenta cuántas posiciones se mueve la coma: positivo para números grandes y negativo para números pequeños. Para multiplicar, multiplica las a y suma los exponentes; si a sale 10 o más, reajusta.",
"ex": [
"350.000 = 3,5 × 10⁵|350.000 = 3,5 × 10⁵",
"0,00072 = 7,2 × 10⁻⁴|0,00072 = 7,2 × 10⁻⁴",
"(6 × 10⁵) × (3 × 10⁴) = 18 × 10⁹|(6 × 10⁵) × (3 × 10⁴) = 18 × 10⁹",
"18 × 10⁹ = <span class=\"hl\">1,8 × 10¹⁰</span>|18 × 10⁹ = <span class=\"hl\">1,8 × 10¹⁰</span>"
]
}
],
"words": [
[
"identitat notable|identidad notable",
"igualtat algebraica que es compleix sempre, com (a + b)² = a² + 2ab + b²|igualdad algebraica que se cumple siempre, como (a + b)² = a² + 2ab + b²"
],
[
"terme general|término general",
"fórmula aₙ que dona el terme de la posició n|fórmula aₙ que da el término de la posición n"
],
[
"diferència|diferencia",
"el que se suma cada vegada en una progressió aritmètica|lo que se suma cada vez en una progresión aritmética"
],
[
"raó|razón",
"el que es multiplica cada vegada en una progressió geomètrica|lo que se multiplica cada vez en una progresión geométrica"
],
[
"notació científica|notación científica",
"forma a × 10ⁿ amb 1 ≤ a &lt; 10|forma a × 10ⁿ con 1 ≤ a &lt; 10"
]
],
"mistakes": [
[
"«(x + 3)² = x² + 9.»|«(x + 3)² = x² + 9.»",
"Falta el doble producte: (x + 3)² = x² + 6x + 9. Prova amb x = 1: 4² = 16, i 1 + 9 = 10 no quadra.|Falta el doble producto: (x + 3)² = x² + 6x + 9. Prueba con x = 1: 4² = 16, y 1 + 9 = 10 no cuadra."
],
[
"«2³ × 2⁴ = 2¹².»|«2³ × 2⁴ = 2¹².»",
"Els exponents se sumen: 2⁷ = 128. Es multipliquen només a (2³)⁴ = 2¹².|Los exponentes se suman: 2⁷ = 128. Se multiplican solo en (2³)⁴ = 2¹²."
],
[
"«2⁻³ = −8.»|«2⁻³ = −8.»",
"L'exponent negatiu no fa el nombre negatiu, en fa l'invers: 2⁻³ = 1/8.|El exponente negativo no hace el número negativo, hace su inverso: 2⁻³ = 1/8."
]
],
"recap": [
"(a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b².|(a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b².",
"Aritmètica: aₙ = a₁ + (n − 1) · d. Geomètrica: aₙ = a₁ · rⁿ⁻¹.|Aritmética: aₙ = a₁ + (n − 1) · d. Geométrica: aₙ = a₁ · rⁿ⁻¹.",
"Mateixa base: multiplicar suma exponents, dividir els resta.|Misma base: multiplicar suma exponentes, dividir los resta.",
"Notació científica: a × 10ⁿ amb 1 ≤ a &lt; 10.|Notación científica: a × 10ⁿ con 1 ≤ a &lt; 10."
],
"tip": "Quan dubtis d'una regla, prova-la amb números petits: si 2³ × 2⁴ = 8 × 16 = 128 = 2⁷, ja saps que els exponents se sumen.|Cuando dudes de una regla, pruébala con números pequeños: si 2³ × 2⁴ = 8 × 16 = 128 = 2⁷, ya sabes que los exponentes se suman."
},
"c10-7": {
"hook": "Les notes de la classe, les enquestes de les notícies o les possibilitats de guanyar un sorteig es llegeixen amb estadística i probabilitat.|Las notas de la clase, las encuestas de las noticias o las posibilidades de ganar un sorteo se leen con estadística y probabilidad.",
"parts": [
{
"t": "Mitjana i mediana|Media y mediana",
"x": "La <b>mitjana</b> és la suma de les dades dividida pel nombre de dades: és el valor que tindria cadascú si ho repartíssim a parts iguals. La <b>mediana</b> és el valor del mig quan les dades estan ordenades; si n'hi ha un nombre parell, és la mitjana dels dos centrals. Un valor extrem mou molt la mitjana però gairebé no la mediana.|La <b>media</b> es la suma de los datos dividida entre el número de datos: es el valor que tendría cada uno si lo repartiéramos a partes iguales. La <b>mediana</b> es el valor central cuando los datos están ordenados; si hay un número par, es la media de los dos centrales. Un valor extremo mueve mucho la media pero casi no la mediana.",
"ex": [
"Dades: 3, 5, 7, 9, 21|Datos: 3, 5, 7, 9, 21",
"Mitjana = 45 ÷ 5 = <span class=\"hl\">9</span>|Media = 45 ÷ 5 = <span class=\"hl\">9</span>",
"Mediana = el del mig = <span class=\"hl\">7</span>|Mediana = el central = <span class=\"hl\">7</span>"
]
},
{
"t": "El valor que falta|El valor que falta",
"x": "Si coneixes la mitjana, coneixes el total: <b>total = mitjana × nombre de dades</b>. Resta-hi les dades que ja tens i el que queda és el valor que falta. Funciona perquè la mitjana només és el total repartit.|Si conoces la media, conoces el total: <b>total = media × número de datos</b>. Réstale los datos que ya tienes y lo que queda es el valor que falta. Funciona porque la media solo es el total repartido.",
"ex": [
"4, 5, 8 i x tenen mitjana 6|4, 5, 8 y x tienen media 6",
"Total = 6 × 4 = 24|Total = 6 × 4 = 24",
"x = 24 − (4 + 5 + 8) = 24 − 17|x = 24 − (4 + 5 + 8) = 24 − 17",
"x = <span class=\"hl\">7</span>|x = <span class=\"hl\">7</span>"
]
},
{
"t": "Extraccions sense reemplaçament|Extracciones sin reemplazo",
"x": "Si treus un objecte i <b>no el tornes</b>, la segona extracció té un objecte menys i les probabilitats canvien. La probabilitat que passin dues coses seguides és el <b>producte</b> de les probabilitats de cada pas, tenint en compte com ha quedat la bossa.|Si sacas un objeto y <b>no lo devuelves</b>, la segunda extracción tiene un objeto menos y las probabilidades cambian. La probabilidad de que pasen dos cosas seguidas es el <b>producto</b> de las probabilidades de cada paso, teniendo en cuenta cómo ha quedado la bolsa.",
"ex": [
"4 boles blanques i 6 negres; en trec 2|4 bolas blancas y 6 negras; saco 2",
"1a blanca: 4/10. 2a blanca: 3/9|1.ª blanca: 4/10. 2.ª blanca: 3/9",
"P = 4/10 × 3/9 = 12/90|P = 4/10 × 3/9 = 12/90",
"P = <span class=\"hl\">2/15</span> ≈ 0,13|P = <span class=\"hl\">2/15</span> ≈ 0,13"
]
},
{
"t": "Combinacions|Combinaciones",
"x": "Una <b>combinació</b> és triar un grup on l'<b>ordre no importa</b>. Primer comptes les tries ordenades (6 × 5 × 4) i després divideixes entre les maneres d'ordenar el grup (3 × 2 × 1 = 3! = 6), perquè cada grup s'ha comptat 6 vegades. Així pots calcular probabilitats de casos favorables entre casos possibles.|Una <b>combinación</b> es elegir un grupo donde el <b>orden no importa</b>. Primero cuentas las elecciones ordenadas (6 × 5 × 4) y después divides entre las maneras de ordenar el grupo (3 × 2 × 1 = 3! = 6), porque cada grupo se ha contado 6 veces. Así puedes calcular probabilidades de casos favorables entre casos posibles.",
"ex": [
"Triar 3 amics d'un grup de 6|Elegir 3 amigos de un grupo de 6",
"Amb ordre: 6 × 5 × 4 = 120|Con orden: 6 × 5 × 4 = 120",
"Sense ordre: 120 ÷ 6 = <span class=\"hl\">20</span> grups|Sin orden: 120 ÷ 6 = <span class=\"hl\">20</span> grupos",
"P(un grup concret) = 1/20|P(un grupo concreto) = 1/20"
]
}
],
"words": [
[
"mitjana|media",
"suma de les dades dividida pel nombre de dades|suma de los datos dividida entre el número de datos"
],
[
"mediana|mediana",
"valor central de les dades ordenades|valor central de los datos ordenados"
],
[
"sense reemplaçament|sin reemplazo",
"extreure sense tornar l'objecte: el total baixa a cada pas|sacar sin devolver el objeto: el total baja en cada paso"
],
[
"combinació|combinación",
"grup triat on l'ordre no importa|grupo elegido donde el orden no importa"
],
[
"factorial|factorial",
"producte de tots els naturals fins a n: 3! = 3 × 2 × 1 = 6|producto de todos los naturales hasta n: 3! = 3 × 2 × 1 = 6"
]
],
"mistakes": [
[
"«La mediana de 9, 3, 21, 5, 7 és 21, que és el del mig.»|«La mediana de 9, 3, 21, 5, 7 es 21, que es el del centro.»",
"Primer s'ordena: 3, 5, 7, 9, 21. La mediana és 7.|Primero se ordena: 3, 5, 7, 9, 21. La mediana es 7."
],
[
"«Sense reemplaçament: 4/10 × 4/10.»|«Sin reemplazo: 4/10 × 4/10.»",
"Després de treure'n una, en queden 9 i només 3 de blanques: 4/10 × 3/9.|Después de sacar una, quedan 9 y solo 3 blancas: 4/10 × 3/9."
],
[
"«Hi ha 120 maneres de triar 3 amics de 6.»|«Hay 120 maneras de elegir 3 amigos de 6.»",
"120 compta cada grup 6 vegades, una per cada ordre. Sense ordre: 120 ÷ 6 = 20.|120 cuenta cada grupo 6 veces, una por cada orden. Sin orden: 120 ÷ 6 = 20."
]
],
"recap": [
"Mitjana = total ÷ nombre de dades; mediana = el del mig, amb les dades ordenades.|Media = total ÷ número de datos; mediana = el central, con los datos ordenados.",
"Total = mitjana × nombre de dades.|Total = media × número de datos.",
"Sense reemplaçament, el denominador baixa a cada pas.|Sin reemplazo, el denominador baja en cada paso.",
"Si l'ordre no importa, divideix entre les maneres d'ordenar el grup.|Si el orden no importa, divide entre las maneras de ordenar el grupo."
],
"tip": "Pregunta't sempre: l'ordre importa? Un podi (or, plata, bronze) sí; un equip de tres, no.|Pregúntate siempre: ¿importa el orden? Un podio (oro, plata, bronce) sí; un equipo de tres, no."
}
};
