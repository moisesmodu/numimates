/* ===== Numi Ment: entrenament mental per a adults =====
   Mateix motor i mateix compte que Numi Mates; la variant la marca el perfil (P.variant = 'ment').
   · Cada dia, una sessió d'uns 10 minuts amb 3 jocs (rapidesa/atenció · memòria · càlcul, lògica o llenguatge),
     triats pel que fa més dies que no es practica i reforçant la capacitat més fluixa del test.
   · «Edat de la ment»: un test de 4 proves (uns 4 minuts) que compara els resultats amb com canvien de mitjana
     amb l'edat. És orientatiu (no és cap prova mèdica) i es pot repetir cada 14 dies.
   · Constància: objectiu de dies a la setmana, fites, hàbit fora de la pantalla i recordatori al calendari.
   Honestedat: mai diem que prevé el deteriorament ni cap malaltia (RD 1907/1996); vegeu mentCiencia(). */

const MCAP = { vel: 'Rapidesa|Rapidez', ate: 'Atenció|Atención', mem: 'Memòria|Memoria', cal: 'Càlcul|Cálculo', log: 'Lògica|Lógica', llg: 'Llenguatge|Lenguaje' };
const MCAPD = {
  vel: 'Com de ràpid captes el que veus i hi respons.|Lo rápido que captas lo que ves y respondes.',
  ate: 'Fixar-te en el que importa sense deixar-te distreure.|Fijarte en lo que importa sin dejarte distraer.',
  mem: 'Retenir el que acabes de veure o sentir i fer-ho servir.|Retener lo que acabas de ver u oír y usarlo.',
  cal: 'Fer comptes de cap amb soltesa, com a la vida diària.|Hacer cuentas de cabeza con soltura, como en el día a día.',
  log: 'Trobar regles, ordenar i planificar.|Encontrar reglas, ordenar y planificar.',
  llg: 'Paraules, significats i expressions de sempre.|Palabras, significados y expresiones de siempre.'
};
const MG = {
  vel: { cap: 'vel', n: 'Mirada ràpida|Mirada rápida', d: "Què has vist al centre i on era l'estrella?|¿Qué has visto en el centro y dónde estaba la estrella?", unit: 'ms', low: true, lvx: true },
  rfx: { cap: 'vel', n: 'Reflexos|Reflejos', d: 'Toca el costat on apareix el cercle, tan ràpid com puguis.|Toca el lado donde aparece el círculo, lo más rápido que puedas.', unit: 'ms', low: true, lvx: true, nou: true },
  sim: { cap: 'vel', n: 'Símbols i números|Símbolos y números', d: 'Cada símbol té un número. Digues quin és, tan ràpid com puguis.|Cada símbolo tiene un número. Di cuál es, lo más rápido que puedas.', nou: true },
  igu: { cap: 'vel', n: 'Iguals o diferents|Iguales o diferentes', d: 'Compara les dues fileres i digues si són iguals, tan ràpid com puguis.|Compara las dos filas y di si son iguales, lo más rápido que puedas.', nou: true },
  ate: { cap: 'ate', n: 'Colors|Colores', d: 'Toca el color de la tinta, no la paraula.|Toca el color de la tinta, no la palabra.' },
  int: { cap: 'ate', n: "L'intrús|El intruso", d: 'Troba el signe diferent tan ràpid com puguis.|Encuentra el signo diferente lo más rápido que puedas.' },
  uni: { cap: 'ate', n: 'Uneix els punts|Une los puntos', d: 'Toca els cercles en ordre: 1, 2, 3… i, més endavant, 1, A, 2, B…|Toca los círculos en orden: 1, 2, 3… y, más adelante, 1, A, 2, B…', unit: 's', low: true, nou: true },
  atu: { cap: 'ate', n: 'Verd sí, vermell no|Verde sí, rojo no', d: 'Toca els cercles verds i no toquis els quadrats vermells.|Toca los círculos verdes y no toques los cuadrados rojos.', unit: '%', nou: true },
  mem: { cap: 'mem', n: 'Seqüències|Secuencias', d: "Repeteix l'ordre en què s'encenen les caselles.|Repite el orden en que se encienden las casillas.", span: true },
  dig: { cap: 'mem', n: 'Dígits|Dígitos', d: 'Recorda els números en el mateix ordre (i, més endavant, al revés).|Recuerda los números en el mismo orden (y, más adelante, al revés).', span: true, nou: true },
  par: { cap: 'mem', n: 'Parelles|Parejas', d: 'Troba les parelles amb els menys intents possibles.|Encuentra las parejas con los menos intentos posibles.', unit: '%' },
  lli: { cap: 'mem', n: 'Llista de la compra|Lista de la compra', d: 'Memoritza la llista i després reconeix-la entre altres productes.|Memoriza la lista y después reconócela entre otros productos.', unit: '%' },
  nom: { cap: 'mem', n: 'Qui viu on?|¿Quién vive dónde?', d: 'Recorda a quina ciutat viu cada persona.|Recuerda en qué ciudad vive cada persona.', unit: '%', nou: true },
  nbk: { cap: 'mem', n: 'Igual que abans?|¿Igual que antes?', d: "Digues si la lletra és la mateixa que la d'abans.|Di si la letra es la misma que la de antes.", unit: '%', nou: true },
  dir: { cap: 'mem', n: 'Direccions|Direcciones', d: 'Segueix les indicacions i troba on acabes.|Sigue las indicaciones y encuentra dónde acabas.' },
  onn: { cap: 'mem', n: 'On era?|¿Dónde estaba?', d: 'Memoritza on és cada objecte i després digues on era.|Memoriza dónde está cada objeto y después di dónde estaba.', unit: '%', nou: true },
  cal: { cap: 'cal', n: 'Càlcul ràpid|Cálculo rápido', d: 'Un minut de comptes de cap.|Un minuto de cuentas de cabeza.' },
  cad: { cap: 'cal', n: 'Suma en cadena|Suma en cadena', d: 'Van sortint números: porta el total de cap.|Van saliendo números: lleva el total de cabeza.', nou: true },
  com: { cap: 'cal', n: 'La compra|La compra', d: 'Preus, canvi i ofertes: les mates de cada dia.|Precios, cambio y ofertas: las mates de cada día.' },
  est: { cap: 'cal', n: 'A ull|A ojo', d: 'Sense fer el compte exacte: tria el resultat més proper.|Sin hacer la cuenta exacta: elige el resultado más cercano.', nou: true },
  sud: { cap: 'log', n: 'Sudoku|Sudoku', d: 'Cada número una sola vegada per fila, columna i quadre.|Cada número una sola vez por fila, columna y cuadro.', unit: 's', low: true },
  ser: { cap: 'log', n: 'Sèries|Series', d: 'Descobreix la regla i digues quin número ve després.|Descubre la regla y di qué número viene después.', nou: true },
  rel: { cap: 'log', n: 'El rellotge|El reloj', d: "Llegeix l'hora i calcula quina hora serà.|Lee la hora y calcula qué hora será." },
  ded: { cap: 'log', n: 'Qui és el més gran?|¿Quién es el mayor?', d: "Llegeix les pistes i dedueix l'ordre d'edat.|Lee las pistas y deduce el orden de edad.", nou: true },
  pal: { cap: 'llg', n: 'Paraules|Palabras', d: 'Ordena les lletres i troba la paraula.|Ordena las letras y encuentra la palabra.' },
  sin: { cap: 'llg', n: 'Sinònims i contraris|Sinónimos y contrarios', d: 'Tria la paraula que vol dir el mateix, o el contrari.|Elige la palabra que significa lo mismo, o lo contrario.', nou: true },
  ref: { cap: 'llg', n: 'Refranys|Refranes', d: 'Completa el refrany.|Completa el refrán.' },
  sob: { cap: 'llg', n: 'La que sobra|La que sobra', d: 'Troba la paraula que no és del mateix grup.|Encuentra la palabra que no es del mismo grupo.', nou: true }
};
// fora de la pantalla: activitats físiques o socials, senzilles i factibles. Cada persona les rep en un ordre propi
// i no se'n repeteix cap fins que no han sortit totes (vegeu mHabIdx)
const MHAB = [
  'Camina 20 minuts a bon pas.|Camina 20 minutos a buen paso.',
  'Truca a algú que fa temps que no veus.|Llama a alguien a quien hace tiempo que no ves.',
  'Puja i baixa les escales de casa dues vegades.|Sube y baja las escaleras de casa dos veces.',
  'Queda per fer un cafè amb un amic o una amiga.|Queda para tomar un café con un amigo o una amiga.',
  "Aixeca't 10 vegades de la cadira sense ajudar-te amb les mans.|Levántate 10 veces de la silla sin ayudarte con las manos.",
  "Explica a algú una cosa que hagis après avui.|Cuéntale a alguien algo que hayas aprendido hoy.",
  'Balla dues cançons que t\'agradin.|Baila dos canciones que te gusten.',
  'Pregunta a un veí o una veïna com li va.|Pregúntale a un vecino o una vecina cómo le va.',
  "Estira't 5 minuts: coll, espatlles, esquena i cames.|Estírate 5 minutos: cuello, hombros, espalda y piernas.",
  'Juga a cartes, al dòmino o al parxís amb algú.|Juega a las cartas, al dominó o al parchís con alguien.',
  "Fes un encàrrec a peu en lloc d'agafar el cotxe.|Haz un recado a pie en lugar de coger el coche.",
  'Cuina alguna cosa i comparteix-la amb algú.|Cocina algo y compártelo con alguien.',
  "Aguanta't sobre un peu 20 segons, recolzat en una cadira, i canvia de peu.|Aguántate sobre un pie 20 segundos, apoyado en una silla, y cambia de pie.",
  'Proposa a algú de la família un passeig junts.|Propón a alguien de la familia un paseo juntos.',
  "Fes un passeig després de dinar o de sopar.|Da un paseo después de comer o de cenar.",
  'Escriu a mà una postal o una nota a algú que estimis.|Escribe a mano una postal o una nota a alguien a quien quieras.',
  'Rega les plantes o fes una estona de jardí o d\'hort.|Riega las plantas o dedica un rato al jardín o al huerto.',
  'Ensenya a algú de la família una cosa que saps fer.|Enséñale a alguien de la familia algo que sepas hacer.',
  'Camina 10 minuts i, durant 2 minuts, accelera el pas.|Camina 10 minutos y, durante 2 minutos, acelera el paso.',
  "Demana a algú que t'ensenyi una cosa que sap fer i tu no.|Pide a alguien que te enseñe algo que sabe hacer y tú no.",
  "Baixa una parada abans de l'autobús i fes l'últim tros caminant.|Bájate una parada antes del autobús y haz el último tramo andando.",
  'Mira fotos antigues amb algú i expliqueu-vos els records.|Mira fotos antiguas con alguien y contaos los recuerdos.',
  'Surt a prendre el sol 15 minuts, passejant.|Sal a tomar el sol 15 minutos, paseando.',
  'Fes la compra a una botiga del barri i xerra una estona.|Haz la compra en una tienda del barrio y charla un rato.',
  'Camina per un carrer o un parc on no hagis estat mai.|Camina por una calle o un parque donde no hayas estado nunca.',
  'Convida algú a dinar o a berenar a casa.|Invita a alguien a comer o a merendar a casa.',
  "Posa't de puntetes 15 vegades mentre esperes que bulli l'aigua.|Ponte de puntillas 15 veces mientras esperas a que hierva el agua.",
  'Truca a un familiar només per preguntar-li com està.|Llama a un familiar solo para preguntarle cómo está.',
  'Fes un trajecte conegut per un camí diferent.|Haz un trayecto conocido por un camino diferente.',
  "Informa't de les activitats del casal, la biblioteca o el centre cívic.|Infórmate de las actividades del centro cívico, la biblioteca o el hogar del jubilado.",
  "Puja les escales en lloc d'agafar l'ascensor.|Sube las escaleras en lugar de coger el ascensor.",
  'Canta amb algú, encara que sigui a la cuina.|Canta con alguien, aunque sea en la cocina.',
  'Porta la compra a peu, repartint el pes entre les dues mans.|Lleva la compra a pie, repartiendo el peso entre las dos manos.',
  "Fes un petit favor a algú sense que t'ho demani.|Haz un pequeño favor a alguien sin que te lo pida.",
  "Endreça un armari o un calaix: també és moviment.|Ordena un armario o un cajón: también es movimiento.",
  'Explica un acudit o una anècdota divertida a algú.|Cuenta un chiste o una anécdota divertida a alguien.',
  "Fes una volta en bicicleta, encara que sigui curta.|Da una vuelta en bicicleta, aunque sea corta.",
  'Pregunta a algú gran de la família com era la seva infància.|Pregunta a alguien mayor de la familia cómo era su infancia.',
  'Juga a petanca, a pàdel o a qualsevol joc de pilota.|Juega a la petanca, al pádel o a cualquier juego de pelota.',
  'Surt a passejar amb algú i parleu sense mirar el mòbil.|Sal a pasear con alguien y hablad sin mirar el móvil.',
  'Fes girs d\'espatlles i de canells mentre mires la tele.|Haz giros de hombros y de muñecas mientras ves la tele.',
  'Saluda pel nom tres persones del barri.|Saluda por su nombre a tres personas del barrio.',
  "Neda o camina dins l'aigua, si tens una piscina a prop.|Nada o camina dentro del agua, si tienes una piscina cerca.",
  'Proposa un joc de taula o un trencaclosques en família.|Propón un juego de mesa o un rompecabezas en familia.',
  'Camina 10 passes de puntetes i 10 de talons, a prop d\'una paret.|Camina 10 pasos de puntillas y 10 de talones, cerca de una pared.',
  'Truca a algú per felicitar-lo o per donar-li les gràcies.|Llama a alguien para felicitarle o para darle las gracias.',
  'Queda amb algú per caminar junts mitja hora.|Queda con alguien para caminar juntos media hora.',
  'Prepara una recepta de família amb algú i explica-li la seva història.|Prepara una receta de familia con alguien y cuéntale su historia.',
  "Llança i recull una pilota contra la paret 20 vegades.|Lanza y recoge una pelota contra la pared 20 veces.",
  'Ves a una xerrada, un concert o una exposició del poble o del barri.|Ve a una charla, un concierto o una exposición del pueblo o del barrio.',
  'Berena al parc amb amics o amb la família.|Merienda en el parque con amigos o con la familia.',
  "Pregunta a algú què llegeix o què mira i recomana-li alguna cosa.|Pregunta a alguien qué lee o qué ve y recomiéndale algo.",
  'Juga amb un nen o una nena de la família a un joc de carrer: pilota, xarranca, amagar.|Juega con un niño o una niña de la familia a un juego de calle: pelota, rayuela, escondite.',
  'Porta alguna cosa a algú que no pot sortir de casa.|Lleva algo a alguien que no puede salir de casa.',
  'Balla amb algú una cançó de quan éreu joves.|Baila con alguien una canción de cuando erais jóvenes.',
  "Informa't d'alguna entitat del barri on puguis fer de voluntari.|Infórmate de alguna entidad del barrio donde puedas hacer voluntariado."];

/* ---------- Icones (línia, 24×24) ---------- */
const MICO = {
  vel: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  rfx: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  igu: '<rect x="2.5" y="5" width="8" height="14" rx="1.8"/><rect x="13.5" y="5" width="8" height="14" rx="1.8"/><path d="M5 10h3M5 14h3M16 10h3M16 14h3"/>',
  sim: '<path d="M7 3.5 11 10H3z"/><circle cx="17" cy="7" r="3.2"/><path d="M4 15h6v6H4zM15 16.5l1.5-1.5v6M14.5 21h4"/>',
  ate: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1.3-1-1.6-1-2.6 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="10" cy="7" r="1.1"/><circle cx="15" cy="7.5" r="1.1"/>',
  int: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>',
  uni: '<circle cx="5" cy="18" r="2.4"/><circle cx="12" cy="6" r="2.4"/><circle cx="19" cy="15" r="2.4"/><path d="M6.3 15.9 10.7 8.1M13.7 7.9l3.7 5.2"/>',
  atu: '<circle cx="8" cy="12" r="5"/><rect x="15" y="8.5" width="7" height="7" rx="1.2"/><path d="m5.8 12 1.6 1.6 3-3.2"/>',
  mem: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" fill="currentColor"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/>',
  dig: '<path d="M3.5 8 6 6.5V17M9.5 8.3a2.3 2.3 0 0 1 4.3 1.1c0 2.3-4.3 4-4.3 7.6h4.6M16 6.5h4.5l-2.6 4a3 3 0 1 1-2.6 5"/>',
  par: '<rect x="3" y="6" width="10" height="14" rx="2"/><path d="M8 6V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-6"/>',
  lli: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01" stroke-width="3"/>',
  nom: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c.6-3.5 3-5.5 6-5.5s5.4 2 6 5.5"/><path d="M19 3.5a3 3 0 0 1 3 3c0 2.3-3 5-3 5s-3-2.7-3-5a3 3 0 0 1 3-3z"/>',
  nbk: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  dir: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  onn: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" fill="currentColor"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" fill="currentColor"/><path d="M15.3 15.9a1.9 1.9 0 1 1 2.8 1.7c-.6.3-.9.7-.9 1.3M17.2 21h.01"/>',
  cal: '<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" stroke-width="2.2"/>',
  cad: '<path d="M9 15l6-6"/><path d="M10.5 6.5l1.8-1.8a4 4 0 0 1 5.7 5.7l-1.8 1.8M13.5 17.5l-1.8 1.8a4 4 0 0 1-5.7-5.7l1.8-1.8"/>',
  est: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 17 3.5-4.5M4 21h16"/>',
  com: '<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  sud: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
  ser: '<path d="M5 20v-4M10 20v-8M15 20V8"/><path d="M20 20V4" stroke-dasharray="2 2.6"/>',
  rel: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ded: '<circle cx="5.5" cy="11" r="1.8"/><path d="M3.5 21v-5.5a2 2 0 0 1 4 0V21"/><circle cx="12" cy="4.8" r="2"/><path d="M9.8 21V10.8a2.2 2.2 0 0 1 4.4 0V21"/><circle cx="18.5" cy="8.3" r="1.9"/><path d="M16.4 21v-7.6a2.1 2.1 0 0 1 4.2 0V21"/>',
  pal: '<path d="M3 19 7.5 5h1L13 19M4.8 14h6.4"/><circle cx="17.5" cy="15.5" r="3"/><path d="M20.5 12v7"/>',
  sin: '<path d="M4 9c2.5-2 5.5 2 8 0s5.5-2 8 0M4 15c2.5-2 5.5 2 8 0s5.5-2 8 0"/>',
  ref: '<path d="M4 11.5h4.5V17H4v-4c0-3 1.3-5 4-6M14 11.5h4.5V17H14v-4c0-3 1.3-5 4-6"/>',
  sob: '<circle cx="7" cy="7" r="3.3"/><circle cx="17" cy="7" r="3.3"/><circle cx="7" cy="17" r="3.3"/><rect x="13.7" y="13.7" width="6.6" height="6.6" rx="1.2"/>',
  // interfície
  avui: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
  jocs: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
  progres: '<path d="M4 20h16M7 16v-5M12 16V7M17 16v-8"/>',
  perfil: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"/>',
  xat: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z"/><path d="M8.5 9.5h7M8.5 12.5h4.5"/>',
  foc: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 .8-3.3 2-4.5.3 1.7 1.2 2.5 2 2.5-.6-2.8 0-5.6 1-8z"/>',
  ment: '<path d="M9.5 4A3 3 0 0 0 6.5 7a3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 5.5 1.8V5.6A2.5 2.5 0 0 0 9.5 4zM14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-5.5 1.8"/><path d="M12 9h1.5M12 14h2"/>',
  fulla: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
  campana: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  llibre: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5V5.5M8 7.5h8"/>',
  copa: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/>',
  ok: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  seg: '<path d="m9 5 7 7-7 7"/>',
  so: '<path d="M4 9.5v5h4l5 4v-13l-5 4z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>',
  medalla: '<circle cx="12" cy="14.5" r="5.5"/><path d="M8.7 10 6 3h4l2 4 2-4h4l-2.7 7"/><path d="m10 14.5 1.4 1.4 2.8-2.8"/>',
  compartir: '<circle cx="18" cy="5.5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="18.5" r="2.6"/><path d="m8.3 10.8 7.4-4.1M8.3 13.2l7.4 4.1"/>',
  diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>'
};
const mSvg = (k, cls = 'mico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${MICO[k] || ''}</svg>`;
const mGic = g => `<span class="mgic d-${MG[g] ? MG[g].cap : 'cal'}">${mSvg(g)}</span>`;
const mTile = (ic, d) => `<span class="mgic d-${d}">${mSvg(ic)}</span>`;

// atzar amb llavor: als reptes, tothom rep exactament les mateixes preguntes
let MRNG = Math.random;
const mrnd = () => MRNG(), mri = (a, b) => a + Math.floor(mrnd() * (b - a + 1)), mpick = a => a[Math.floor(mrnd() * a.length)];
const mshuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(mrnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const mSeed = seed => { let t = seed >>> 0; return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; };
const mDlv = g => MGA && MGA.duel ? MGA.duel.lv : mLvl(g);
const mDayN = d => Math.floor(new Date(d + 'T12:00') / 864e5);
const mKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const MS = () => { const m = P.ment = P.ment || {}; for (const k of ['lvl', 'best', 'hist', 'days', 'free']) m[k] = m[k] || {}; m.tests = Array.isArray(m.tests) ? m.tests : []; m.goal = m.goal || 5;
  // que el perfil no creixi sense límit: 400 dies d'historial i només el comptador de partides gratis d'avui
  if (!MS.net || MS.net !== today()) { MS.net = today(); const ks = Object.keys(m.days).sort(); ks.slice(0, Math.max(0, ks.length - 400)).forEach(k => delete m.days[k]); Object.keys(m.free).forEach(k => k !== today() && delete m.free[k]); }
  return m; };
const mDay = (d = today()) => { const m = MS(); return m.days[d] = m.days[d] || { s: [], hab: 0 }; };
const mLoc = () => LANG === 'es' ? 'es-ES' : 'ca-ES';
// sessió del dia: un joc de cada grup. No repeteix cap joc de les sessions d'ahir i d'abans d'ahir; després tria el
// que fa més dies que no es juga (la capacitat a reforçar compta com 3 dies més) i, en empat, a l'atzar però fix per a
// cada persona i dia. El tercer grup, a més, canvia de capacitat respecte d'ahir (càlcul → lògica → llenguatge…).
const MSLOT = [['vel', 'rfx', 'sim', 'igu', 'ate', 'int', 'uni', 'atu'], ['mem', 'dig', 'par', 'lli', 'nom', 'nbk', 'dir', 'onn'], ['cal', 'cad', 'com', 'est', 'sud', 'ser', 'rel', 'ded', 'pal', 'sin', 'ref', 'sob']];
const mHash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; };
const mDayBefore = (d, k) => { const x = new Date(d + 'T12:00'); x.setDate(x.getDate() - k); return mKey(x); };
function mSession(d = today()) {
  const m = MS(), dd = m.days[d];
  if (dd && Array.isArray(dd.ses) && dd.ses.length === 3 && dd.ses.every(g => MG[g])) return dd.ses;
  const n = mDayN(d), fo = m.focus, rnd = mSeed(mHash(`${P.code || P.id || ''}:${d}`));
  const prev = [1, 2].map(k => (m.days[mDayBefore(d, k)] || {}).ses).filter(Array.isArray), recent = new Set(prev.flat());
  const capAhir = prev[0] && prev[0][2] && MG[prev[0][2]] ? MG[prev[0][2]].cap : null;
  const score = (g, k) => { const h = m.hist[g], t = h && h.length ? Math.min(14, n - mDayN(h[h.length - 1][0])) : 10;
    return (recent.has(g) ? -100 : 0) + t + (MG[g].cap === fo ? 3 : 0) + (k === 2 && MG[g].cap === capAhir ? -6 : 0) + rnd() * 2.5; };
  const ses = MSLOT.map((sl, k) => sl.map(g => [g, score(g, k)]).sort((a, b) => b[1] - a[1])[0][0]);
  if (d === today()) mDay(d).ses = ses;
  return ses;
}
const mLvl = g => MS().lvl[g] ?? (g === 'vel' ? 500 : g === 'mem' ? 3 : g === 'dig' ? 4 : 1);
const mTime = v => v >= 60 ? `${Math.floor(v / 60)}:${pad(v % 60)}` : `${v} s`;
const mNice = (g, v) => v == null ? '—' : !MG[g] ? String(v) : MG[g].unit === 'ms' ? `${v} ms` : MG[g].unit === '%' ? `${v} %` : MG[g].unit === 's' ? mTime(v) : MG[g].span ? `${v} ${L('seguits', 'seguidos')}` : String(v);
const mHello = () => { const h = new Date().getHours(); return h < 13 ? L('Bon dia', 'Buenos días') : h < 20 ? L('Bona tarda', 'Buenas tardes') : L('Bona nit', 'Buenas noches'); };
// dies entrenats (sessió completa) d'una setmana que comença en dilluns
const mMonday = (d = new Date()) => { const x = new Date(d); x.setHours(12, 0, 0, 0); x.setDate(x.getDate() - (x.getDay() + 6) % 7); return x; };
const mWeekDays = (mon = mMonday()) => [...Array(7).keys()].map(i => { const d = new Date(mon); d.setDate(d.getDate() + i); return d; });
const mDone = k => { const x = MS().days[k]; return x && x.s.length >= 3 ? 2 : x && x.s.length ? 1 : 0; };
const mWeekN = (mon = mMonday()) => mWeekDays(mon).filter(d => mDone(mKey(d)) === 2).length;
const mSessions = () => Object.values(MS().days).filter(x => x.s && x.s.length >= 3).length;

/* ---------- Navegació ---------- */
let MGCUR = null, MGT = null, MGA = null, MGA_TK = null;
function mStop() { mHush(); MRNG = Math.random; clearTimeout(MGT); clearInterval(MGA_TK); if (MGA && MGA.to) clearTimeout(MGA.to); MGT = MGA_TK = null; MGA = null; MGCUR = null; }
function mNav(t) {
  const it = [['home', 'avui', L('Avui', 'Hoy')], ['jocs', 'jocs', L('Entrena', 'Entrena')], ['progres', 'progres', L('Progrés', 'Progreso')], ['profile', 'perfil', L('Perfil', 'Perfil')]];
  return `<nav class="nav mnav">${it.map(([v, i, l]) => `<button class="${v === t ? 'on' : ''}" onclick="go('${v}')"><span class="ni">${mSvg(i)}</span><span>${l}</span></button>`).join('')}<button class="navxat" onclick="xatOpen()" aria-label="${L('Pregunta a en Numi', 'Pregunta a Numi')}"><span class="ni">${mSvg('xat')}</span><span>${L('Pregunta', 'Pregunta')}</span></button></nav>`;
}
function mShell(t, body, dark, hero = '') {
  return `<div class="mpage ${dark ? 'dark' : ''}"><header class="mtop"><img src="${dark ? 'img/brand/logo-ment-negatiu.svg' : VAR.logo}" alt="${VAR.name}"><span class="mchip" title="${L('Dies seguits', 'Días seguidos')}">${mSvg('foc')} ${P.streak || 0}</span></header>${hero}<main class="mmain">${body}</main>${mNav(t)}</div>`;
}
function mentGo(v) {
  if (v === 'home') setTimeout(() => typeof lligaCheck === 'function' && lligaCheck(), 2500);
  mStop(); VIEW = ['home', 'jocs', 'progres', 'profile'].includes(v) ? v : 'home';
  ({ home: mentHome, jocs: mentJocs, progres: mentProgres, profile: mentProfile })[VIEW]();
  window.scrollTo(0, 0);
}
{
  const g0 = go;
  go = function (v) {
    if (P && P.id !== 'tmp' && varOf(P) === 'ment' && !appMismatch(P) && v !== 'profiles' && v !== 'onboard') { LS = null; closeModal(); setVariant('ment'); return mentGo(v); }
    return g0(v);
  };
}

/* ---------- Avui ---------- */
function mRing(k, n) { const C = 2 * Math.PI * 27; return `<div class="mring"><svg viewBox="0 0 64 64"><defs><linearGradient id="mrg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7DE9F"/><stop offset="1" stop-color="#C9912F"/></linearGradient></defs><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="7"/>${k ? `<circle cx="32" cy="32" r="27" fill="none" stroke="url(#mrg)" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(C * k / n).toFixed(1)} ${C.toFixed(1)}"/>` : ''}</svg><b>${k}/${n}</b></div>`; }
function mentHome() {
  const m = MS(), s = mSession(), dd = mDay(), fets = s.filter(g => dd.s.includes(g)).length, nxt = s.find(g => !dd.s.includes(g));
  const hab = MHAB[mHabIdx()], wn = mWeekN(), first = !m.tests.length && !Object.keys(m.hist).length;
  const week = mWeekDays().map(d => { const k = mKey(d), st = mDone(k);
    return `<i class="${st === 2 ? 'on' : st ? 'mid' : ''} ${k === today() ? 'today' : ''}"><em>${st === 2 ? mSvg('ok') : ''}</em><b>${d.toLocaleDateString(mLoc(), { weekday: 'narrow' })}</b></i>`; }).join('');
  const hero = `<section class="mhero"><p class="mdate">${(t => t[0].toUpperCase() + t.slice(1))(new Date().toLocaleDateString(mLoc(), { weekday: 'long', day: 'numeric', month: 'long' }))}</p><h1 class="mh1">${mHello()}, ${esc(P.name)}</h1>
    <div class="mherow">${mRing(fets, 3)}<div><h2>${nxt ? L("La sessió d'avui", 'La sesión de hoy') : L('Sessió feta!', '¡Sesión hecha!')}</h2><p>${nxt ? L('3 jocs · uns 10 minuts', '3 juegos · unos 10 minutos') : L('Demà en tindràs una de nova.', 'Mañana tendrás una nueva.')}</p></div></div>
    ${nxt ? `<button class="btn big mbtn" onclick="mPlay('${nxt}',true)">${fets ? L('Continua la sessió', 'Continúa la sesión') : L('Comença la sessió', 'Empieza la sesión')}</button>` : `<button class="btn big mbtn" onclick="mShare()">${mSvg('compartir')} ${L('Comparteix-ho', 'Compártelo')}</button>`}</section>`;
  const sess = `<section class="mtcard msess mlift"><div class="mgames">${s.map(g => `<button class="mg ${dd.s.includes(g) ? 'done' : ''}" onclick="mPlay('${g}',true)">${mGic(g)}<span><b>${tx(MG[g].n)}</b><span class="mdom d-${MG[g].cap}">${tx(MCAP[MG[g].cap])}</span></span>${dd.s.includes(g) ? `<i class="mok">${mSvg('ok')}</i>` : `<span class="mnext">${mSvg('seg')}</span>`}</button>`).join('')}</div>
    ${nxt ? '' : `<button class="btn ghost mbtn" style="margin-top:8px" onclick="go('jocs')">${L('Juga una estona més', 'Juega un rato más')}</button>`}</section>`;
  app.innerHTML = mShell('home', `${sess}${mAgeCard()}
    <section class="mtcard"><div class="mthead"><b>${L('Aquesta setmana', 'Esta semana')}</b><span>${P.streak > 1 ? L(`${P.streak} dies seguits`, `${P.streak} días seguidos`) : ''}</span></div><div class="mweek">${week}</div>
      <div class="mgoal ${wn >= m.goal ? 'ok' : ''}"><div><b>${L(`${wn} de ${m.goal} dies entrenats`, `${wn} de ${m.goal} días entrenados`)}</b><span>${wn >= m.goal ? L('Objectiu complert!', '¡Objetivo cumplido!') : L('objectiu setmanal', 'objetivo semanal')}</span></div><div class="mprg"><i style="width:${Math.min(100, 100 * wn / m.goal)}%"></i></div></div></section>
    <section class="mtcard mhab ${dd.hab ? 'on' : ''}">${mTile('fulla', 'log')}<h3>${L('Fora de la pantalla', 'Fuera de la pantalla')}</h3><p>${tx(hab)}</p>
      <button class="btn ghost" onclick="mHab()">${dd.hab ? L('Fet! ✓', '¡Hecho! ✓') : L('Ho faré avui', 'Lo haré hoy')}</button>${dd.hab ? '' : `<button class="link mhalt" onclick="mHabAlt()">${L("Proposa-me'n una altra", 'Propónme otra')}</button>`}</section>
    ${first ? '' : `<button class="mlnk" onclick="mShare()">${mTile('compartir', 'gold')}<span><b>${L('Comparteix la teva evolució', 'Comparte tu evolución')}</b><small>${L('Una imatge per enviar per WhatsApp o penjar a Instagram.', 'Una imagen para enviar por WhatsApp o subir a Instagram.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>`}
    ${m.rem == null ? `<button class="mlnk" onclick="mRemind()">${mTile('campana', 'gold')}<span><b>${L('Recorda-m\'ho cada dia', 'Recuérdamelo cada día')}</b><small>${L('Afegeix un avís diari al calendari del mòbil.', 'Añade un aviso diario al calendario del móvil.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>` : ''}
    <button class="mlnk" onclick="mentCiencia()">${mTile('llibre', 'ink')}<span><b>${L('Com entrenar la ment', 'Cómo entrenar la mente')}</b><small>${L('Què diu la ciència i què pots fer cada dia.', 'Qué dice la ciencia y qué puedes hacer cada día.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>`, true, hero);
}
// ordre propi de cada persona (barreja amb llavor): no se'n repeteix cap fins que han sortit totes
function mHabIdx(d = today()) {
  const N = MHAB.length, n = mDayN(d) + (mDay(d).hk || 0), c = Math.floor(n / N), rnd = mSeed(mHash(`hab:${P.code || P.id || ''}:${c}`));
  const o = [...Array(N).keys()]; for (let i = N - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; }
  return o[((n % N) + N) % N];
}
function mHabAlt() { const d = mDay(); d.hk = (d.hk || 0) + 1; save(); mentHome(); }
function mHab() { const d = mDay(); d.hab = d.hab ? 0 : 1; if (d.hab && !d.hxp) { d.hxp = 1; P.xp = (P.xp || 0) + 5; } save(); if (d.hab) { SFX.ok && SFX.ok(); toast(L('Molt bé! La ment també s\'entrena fora de la pantalla.', '¡Muy bien! La mente también se entrena fuera de la pantalla.')); } mentHome(); }
// indicador semicircular de 20 a 90 anys: el punt daurat és l'edat de la ment; la marca blanca, l'edat real
function mGauge(age, real) {
  const a = v => Math.PI * (1 - (Math.max(20, Math.min(90, v)) - 20) / 70), P = (v, r) => [150 + r * Math.cos(a(v)), 150 - r * Math.sin(a(v))], [x, y] = P(age, 118);
  const tick = real ? (() => { const [x1, y1] = P(real, 100), [x2, y2] = P(real, 136), [tx, ty] = P(real, 150); return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#fff" stroke-width="3" stroke-linecap="round"/><text x="${tx.toFixed(1)}" y="${(ty - 2).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="700" fill="#C9C6E6">${L('tu', 'tú')} ${real}</text>`; })() : '';
  return `<svg class="mgauge" viewBox="0 -12 300 176" aria-hidden="true"><defs><linearGradient id="mgg" x1="0" x2="1"><stop offset="0" stop-color="#6FD8BD"/><stop offset=".55" stop-color="#F3D48E"/><stop offset="1" stop-color="#E9967A"/></linearGradient></defs>
    <path d="M32 150A118 118 0 0 1 268 150" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="18" stroke-linecap="round"/><path d="M32 150A118 118 0 0 1 268 150" fill="none" stroke="url(#mgg)" stroke-width="10" stroke-linecap="round" opacity=".9"/>
    ${tick}<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" fill="#F3D48E" stroke="#1C1B3A" stroke-width="4"/>
    <text x="150" y="128" text-anchor="middle" font-family="Schibsted Grotesk,system-ui,sans-serif" font-size="60" font-weight="700" fill="#F3D48E">${age}</text><text x="150" y="152" text-anchor="middle" font-size="15" font-weight="600" fill="#C9C6E6">${L('anys', 'años')}</text>
    <text x="32" y="172" text-anchor="middle" font-size="12" fill="#8E8AB8">20</text><text x="268" y="172" text-anchor="middle" font-size="12" fill="#8E8AB8">90</text></svg>`;
}
// targeta de l'edat de la ment: convida a fer el test, o mostra l'última i quan toca repetir-lo
function mAgeCard() {
  const T = MS().tests, t = T[T.length - 1];
  if (!t) return `<section class="mtcard mage"><div class="mthead"><b>${L('Quina edat té la teva ment?', '¿Qué edad tiene tu mente?')}</b></div>
    <p>${L('Fes el test de 4 proves curtes (uns 4 minuts): rapidesa, atenció i memòria. Sabràs el teu punt de partida i què et convé entrenar.', 'Haz el test de 4 pruebas cortas (unos 4 minutos): rapidez, atención y memoria. Sabrás tu punto de partida y qué te conviene entrenar.')}</p>
    <button class="btn big mbtn" onclick="mTestIntro()">${L('Fes el test', 'Haz el test')}</button></section>`;
  const prev = T[T.length - 2], dif = prev ? prev.age - t.age : 0, left = 14 - (mDayN(today()) - mDayN(t.d));
  return `<section class="mtcard mage"><div class="mthead"><b>${L('Edat de la ment', 'Edad de la mente')}</b><span>${L('orientativa', 'orientativa')}</span></div>
    ${mGauge(t.age, t.real)}
    ${prev ? `<span class="mtrend ${dif > 0 ? 'up' : ''}">${dif > 0 ? L(`${dif} ${dif === 1 ? 'any' : 'anys'} menys que la vegada anterior`, `${dif} ${dif === 1 ? 'año' : 'años'} menos que la vez anterior`) : dif < 0 ? L('Una mica més que la vegada anterior', 'Algo más que la vez anterior') : L('Igual que la vegada anterior', 'Igual que la vez anterior')}</span>` : ''}
    ${left > 0 ? `<p>${L(`Podràs tornar a fer el test d'aquí a ${left} ${left === 1 ? 'dia' : 'dies'}. Mentrestant, entrena cada dia.`, `Podrás volver a hacer el test dentro de ${left} ${left === 1 ? 'día' : 'días'}. Mientras tanto, entrena cada día.`)}</p><button class="btn ghost mbtn" onclick="mAgeInfo()">${L('Veure el detall', 'Ver el detalle')}</button>`
      : `<p>${L('Ja han passat dues setmanes: és hora de tornar-la a mesurar.', 'Ya han pasado dos semanas: es hora de volver a medirla.')}</p><button class="btn big mbtn" onclick="mTestIntro()">${L('Torna a fer el test', 'Vuelve a hacer el test')}</button>`}</section>`;
}

/* ---------- Entrena (tots els jocs, per capacitats) ---------- */
function mentJocs() {
  const m = MS(), prem = isPremium(), fr = m.free[today()] || {}, ses = mSession();
  // rajola: icona, nom, nivell (punts de l'1 al 10) i millor resultat
  const card = g => { const o = MG[g], lv = mLv10(g); return `<button class="mjoc d-${o.cap}" onclick="mPlay('${g}',false)">${o.nou && !m.hist[g] ? `<span class="mnew">${L('Nou', 'Nuevo')}</span>` : ''}${mGic(g)}<b>${tx(o.n)}</b>
    ${lv ? `<span class="mdots" aria-label="${L('nivell', 'nivel')} ${lv}">${[...Array(10).keys()].map(i => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</span>` : ''}
    <span class="mrec">${m.hist[g] ? `${L('Millor', 'Mejor')}: <b>${mNice(g, m.best[g])}</b>` : L('Per estrenar', 'Por estrenar')}${!prem && fr[g] && !ses.includes(g) ? ` · <i>${L('demà més', 'mañana más')}</i>` : ''}</span></button>`; };
  app.innerHTML = mShell('jocs', `<h1 class="mh1">${L('Entrena', 'Entrena')}</h1><p class="mlead">${L('Cada joc té 10 nivells: si et surt bé, puja; si et costa, baixa. Els punts de cada rajola són el teu nivell.', 'Cada juego tiene 10 niveles: si te sale bien, sube; si te cuesta, baja. Los puntos de cada casilla son tu nivel.')} ${prem ? L('Juga tant com vulguis.', 'Juega tanto como quieras.') : L("Els jocs de la sessió d'avui són lliures; de la resta, una partida gratis al dia de cada joc (amb Premium, sense límit).", 'Los juegos de la sesión de hoy son libres; del resto, una partida gratis al día de cada juego (con Premium, sin límite).')}</p>
    <button class="mlnk" onclick="${m.tests.length && 14 - (mDayN(today()) - mDayN(m.tests[m.tests.length - 1].d)) > 0 ? 'mAgeInfo()' : 'mTestIntro()'}">${mTile('ment', 'ink')}<span><b>${L('Test de la ment', 'Test de la mente')}</b><small>${L('4 proves · uns 4 minuts · cada 2 setmanes', '4 pruebas · unos 4 minutos · cada 2 semanas')}</small></span><span class="mnext">${mSvg('seg')}</span></button>
    <button class="mlnk mreptes" onclick="mentReptes()">${mTile('copa', 'gold')}<span><b>${L('Reptes amb amics', 'Retos con amigos')}</b><small>${L('Repta algú o un grup al mateix joc, amb les mateixes preguntes.', 'Reta a alguien o a un grupo al mismo juego, con las mismas preguntas.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>
    ${Object.keys(MCAP).map(c => `<div class="mdomh d-${c}"><i></i><h2>${tx(MCAP[c])}</h2></div><p class="mdomd">${tx(MCAPD[c])}</p><div class="mjocs">${Object.keys(MG).filter(g => MG[g].cap === c).map(card).join('')}</div>`).join('')}`);
}
function mPlay(g, ses) {
  if (!MG[g]) return go('jocs');
  const prem = isPremium(), m = MS(), fr = m.free[today()] = m.free[today()] || {};
  const inSes = mSession().includes(g) && !mDay().s.includes(g);
  if (!ses && !inSes && !prem && fr[g]) return mPremium();
  if (!inSes && !prem) fr[g] = (fr[g] || 0) + 1;
  mStop(); MGCUR = g; MGA = null; VIEW = 'mgame';
  mIntro(g, inSes);
}
function mPremium() {
  modal(`<div class="sheet card cent"><h3>${VAR.name} Premium</h3><p>${L("Avui ja has fet la partida gratis d'aquest joc. Amb Premium pots jugar a tots els jocs tant com vulguis i fer reptes amb amics.", 'Hoy ya has hecho la partida gratis de este juego. Con Premium puedes jugar a todos los juegos tanto como quieras y hacer retos con amigos.')}</p>
    <button class="btn big gold" onclick="closeModal();buyPremium()">${L('Vull Premium', 'Quiero Premium')}</button><button class="btn ghost big" onclick="closeModal()">${L('Demà ho torno a provar', 'Mañana lo vuelvo a probar')}</button></div>`, true);
}
function mGameShell(g, top, body, title) {
  app.innerHTML = `<div class="mgame d-${MG[g] ? MG[g].cap : 'cal'}"><div class="mgtop"><button class="xbtn" onclick="mQuit()" aria-label="${L('Surt', 'Salir')}">✕</button><b>${title || tx(MG[g].n)}</b><span id="mgstat">${top || ''}</span></div><div class="mgbody" id="mgb">${body}</div></div>`;
}
function mQuit() { ask(MGA && MGA.test ? L('Vols deixar el test? Hauràs de tornar a començar.', '¿Quieres dejar el test? Tendrás que volver a empezar.') : L('Vols deixar aquesta partida?', '¿Quieres dejar esta partida?'), L('Surt', 'Salir'), L('Continua', 'Sigue'), () => { mStop(); MT = null; go('home'); }); }
function mIntro(g, inSes) {
  MGA = { ses: inSes };
  mGameShell(g, '', `<div class="mintro">${mGic(g)}<h2>${tx(MG[g].n)}</h2><p class="mdom" style="--dc:var(--c-${MG[g].cap});justify-content:center;display:flex">${tx(MCAP[MG[g].cap])}</p>${mHow(g)}${'speechSynthesis' in window ? `<button class="btn ghost mspeak" onclick="mSpeak('${g}')">${mSvg('so', 'mico')} ${L("Escolta-ho", 'Escúchalo')}</button>` : ''}<button class="btn big mbtn" onclick="mStart('${g}')">${L('Juga', 'Juega')}</button></div>`);
}
function mHow(g) {
  const h = {
    vel: L("Mira el centre. Durant un instant veuràs un cotxe o un camió i, al voltant, una estrella. Després et preguntarem què hi havia i on era l'estrella. Si l'encertes, cada vegada anirà més ràpid.", 'Mira el centro. Durante un instante verás un coche o un camión y, alrededor, una estrella. Después te preguntaremos qué había y dónde estaba la estrella. Si aciertas, cada vez irá más rápido.'),
    rfx: L("Hi ha dos botons grans. Quan en un aparegui el cercle, toca'l tan ràpid com puguis. Els tres primers són d'escalfament. No toquis abans d'hora!", 'Hay dos botones grandes. Cuando en uno aparezca el círculo, tócalo lo más rápido que puedas. Los tres primeros son de calentamiento. ¡No toques antes de tiempo!'),
    igu: L('Surten dues fileres de lletres i números. Si són exactament iguals, toca <b>Iguals</b>; si hi ha res diferent, toca <b>Diferents</b>. Tens 45 segons.', 'Salen dos filas de letras y números. Si son exactamente iguales, toca <b>Iguales</b>; si hay algo diferente, toca <b>Diferentes</b>. Tienes 45 segundos.'),
    sim: L('A dalt tens la clau: cada símbol amb el seu número. Al mig surt un símbol: toca el seu número. Tens un minut.', 'Arriba tienes la clave: cada símbolo con su número. En el centro sale un símbolo: toca su número. Tienes un minuto.'),
    ate: L('Surt una paraula de color escrita amb una tinta d\'un altre color. Toca el botó del color de la <b>tinta</b>. Tens 45 segons.', 'Sale una palabra de color escrita con una tinta de otro color. Toca el botón del color de la <b>tinta</b>. Tienes 45 segundos.'),
    int: L('Totes les lletres són iguals menys una. Toca la diferent. Cada vegada n\'hi haurà més. Tens 45 segons.', 'Todas las letras son iguales menos una. Toca la diferente. Cada vez habrá más. Tienes 45 segundos.'),
    uni: L('Toca els cercles en ordre, tan ràpid com puguis: 1, 2, 3… Quan hi hagi lletres, alterna número i lletra: 1, A, 2, B, 3, C…', 'Toca los círculos en orden, lo más rápido que puedas: 1, 2, 3… Cuando haya letras, alterna número y letra: 1, A, 2, B, 3, C…'),
    atu: L('Aniran sortint figures. Si és un <b>cercle verd</b>, toca-la ràpid. Si és un <b>quadrat vermell</b>, no la toquis.', 'Irán saliendo figuras. Si es un <b>círculo verde</b>, tócala rápido. Si es un <b>cuadrado rojo</b>, no la toques.'),
    mem: L("Les caselles s'encendran una darrere l'altra. Quan acabi, toca-les en el mateix ordre. Cada vegada que l'encertes, n'hi haurà una més.", 'Las casillas se encenderán una detrás de otra. Cuando acabe, tócalas en el mismo orden. Cada vez que aciertes, habrá una más.'),
    dig: L("Sortiran uns números, d'un en un. Després, escriu-los en el mateix ordre. Si l'encertes, la llista s'allarga. Si et diem «al revés», escriu-los del final al principi.", 'Saldrán unos números, de uno en uno. Después, escríbelos en el mismo orden. Si aciertas, la lista se alarga. Si te decimos «al revés», escríbelos del final al principio.'),
    par: L('Gira dues cartes cada vegada. Si són iguals, es queden girades.', 'Gira dos cartas cada vez. Si son iguales, se quedan giradas.'),
    lli: L('Veuràs una llista de la compra durant uns segons. Després, entre molts productes, toca només els que hi eren.', 'Verás una lista de la compra durante unos segundos. Después, entre muchos productos, toca solo los que estaban.'),
    nom: L('Veuràs unes quantes persones i la ciutat on viu cadascuna. Després et preguntarem on viu cada persona.', 'Verás a unas cuantas personas y la ciudad donde vive cada una. Después te preguntaremos dónde vive cada persona.'),
    nbk: L("Aniran sortint lletres, d'una en una. Per a cada lletra, digues si és <b>igual</b> que la d'abans o <b>diferent</b>. Més endavant, la compararàs amb la de fa dues.", 'Irán saliendo letras, de una en una. Para cada letra, di si es <b>igual</b> que la de antes o <b>diferente</b>. Más adelante, la compararás con la de hace dos.'),
    onn: L('Veuràs uns quants objectes en una graella durant uns segons. Després s\'amagaran i et preguntarem on era cadascun. Tres rondes.', 'Verás unos cuantos objetos en una cuadrícula durante unos segundos. Después se esconderán y te preguntaremos dónde estaba cada uno. Tres rondas.'),
    dir: L('Surts de la casella de la casa. Llegeix les indicacions (amunt, avall, dreta, esquerra) i toca la casella on acabes.', 'Sales de la casilla de la casa. Lee las indicaciones (arriba, abajo, derecha, izquierda) y toca la casilla donde acabas.'),
    cal: L('Escriu el resultat amb el teclat. Quan és correcte, passa sol a la següent. Tens un minut.', 'Escribe el resultado con el teclado. Cuando es correcto, pasa solo a la siguiente. Tienes un minuto.'),
    cad: L('Sortirà un número i després unes quantes sumes i restes, d\'una en una. Porta el total de cap i, al final, escriu-lo. Sis rondes.', 'Saldrá un número y después unas cuantas sumas y restas, de una en una. Lleva el total de cabeza y, al final, escríbelo. Seis rondas.'),
    com: L('Vuit preguntes de la compra de cada dia: quant costa tot, quant et tornen, quina oferta surt més a compte. Sense presses.', 'Ocho preguntas de la compra de cada día: cuánto cuesta todo, cuánto te devuelven, qué oferta sale más a cuenta. Sin prisas.'),
    est: L('Vuit comptes per fer <b>a ull</b>, sense calcular-los exactes: tria el resultat més proper. Tens pocs segons per a cadascun, així que arrodoneix!', 'Ocho cuentas para hacer <b>a ojo</b>, sin calcularlas exactas: elige el resultado más cercano. Tienes pocos segundos para cada una, ¡así que redondea!'),
    ded: L('Llegeix les pistes sobre qui és més gran i qui és més jove, i respon la pregunta. Vuit preguntes, sense presses.', 'Lee las pistas sobre quién es mayor y quién es más joven, y responde la pregunta. Ocho preguntas, sin prisas.'),
    sud: L('Toca una casella buida i després el número. Si ho necessites, pots demanar una pista.', 'Toca una casilla vacía y después el número. Si lo necesitas, puedes pedir una pista.'),
    ser: L('Vuit sèries de números. Mira com canvien d\'un a l\'altre i tria el que ve després.', 'Ocho series de números. Mira cómo cambian de uno a otro y elige el que viene después.'),
    rel: L("Vuit rellotges. Digues quina hora marquen i, més endavant, quina hora serà d'aquí a una estona.", 'Ocho relojes. Di qué hora marcan y, más adelante, qué hora será dentro de un rato.'),
    pal: L('Toca les lletres en ordre per formar la paraula. La pista et diu de què va.', 'Toca las letras en orden para formar la palabra. La pista te dice de qué va.'),
    sin: L('Vuit paraules. Tria la que vol dir el mateix (sinònim) o el contrari, segons el que et demanem.', 'Ocho palabras. Elige la que significa lo mismo (sinónimo) o lo contrario, según lo que te pidamos.'),
    ref: L('Vuit refranys de sempre. Tria com acaba cadascun.', 'Ocho refranes de siempre. Elige cómo acaba cada uno.'),
    sob: L('Surten unes quantes paraules: totes són del mateix grup menys una. Toca la que sobra. Vuit rondes.', 'Salen unas cuantas palabras: todas son del mismo grupo menos una. Toca la que sobra. Ocho rondas.')
  }[g];
  return `<p class="mhow">${h}</p>`;
}
// instruccions en veu alta (útil per a qui hi veu poc o prefereix escoltar)
function mSpeak(g) {
  try {
    const t = `${tx(MG[g].n)}. ${typeof xatPlain === 'function' ? xatPlain(mHow(g)) : mHow(g).replace(/<[^>]+>/g, '')}`, u = new SpeechSynthesisUtterance(t);
    u.lang = mLoc(); u.rate = .92;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(LANG === 'es' ? 'es' : 'ca')); if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { }
}
const mHush = () => { try { speechSynthesis.cancel(); } catch (e) { } };
function mStart(g) { mHush(); SFX.tap && SFX.tap(); ({ vel: velGo, ate: ateGo, mem: memGo, par: parGo, cal: calGo, sud: sudGo, pal: palGo, int: intGo, lli: lliGo, dir: dirGo, com: comGo, ref: refGo, rel: relGo, rfx: rfxGo, sim: simGo, uni: uniGo, atu: atuGo, dig: digGo, nbk: nbkGo, nom: nomGo, cad: cadGo, ser: serGo, sin: sinGo, igu: iguGo, onn: onnGo, est: estGo, ded: dedGo, sob: sobGo })[g](); }

// resultat: guarda, adapta el nivell i marca la sessió
function mEnd(g, score, up, msg) {
  if (MGA && MGA.duel) return mDuelEnd(g);
  if (MGA && MGA.test) return mTestStep(g, score);
  const m = MS(), was = m.best[g], lowB = !!MG[g].low, ses = !!(MGA && MGA.ses);
  mStop();
  if (score == null) return go('home');
  const rec = was == null || (lowB ? score < was : score > was);
  if (rec) m.best[g] = score;
  (m.hist[g] = m.hist[g] || []).push([today(), score]); if (m.hist[g].length > 40) m.hist[g].shift();
  const lvA = mLvl(g), adapt = !MG[g].span && !MG[g].lvx; if (adapt) m.lvl[g] = Math.max(1, Math.min(10, lvA + (up || 0)));
  const lvB = adapt ? m.lvl[g] : lvA;
  const d = mDay(); if (ses && !d.s.includes(g) && mSession().includes(g)) d.s.push(g);
  // punts (XP) per a la Lliga: 10 per partida i 20 més en completar la sessió del dia
  P.xp = (P.xp || 0) + 10; if (ses && d.s.length >= 3 && !d.bonus) { d.bonus = 1; P.xp += 20; }
  touchStreak(); save(); syncNow();
  const s = mSession(), left = s.filter(x => !mDay().s.includes(x)), nx = left[0], fita = mFitesNew();
  app.innerHTML = `<div class="mgame"><div class="mgbody"><div class="mres">${mGic(g)}<h2>${rec && was != null ? L('Nou rècord!', '¡Nuevo récord!') : L('Ben fet!', '¡Bien hecho!')}</h2>
    <p class="mscore">${mNice(g, score)}</p><p>${msg || ''}</p>
    ${adapt ? `<p class="mlvl ${lvB > lvA ? 'up' : ''}">${lvB > lvA ? L(`Puges al nivell ${lvB} de 10!`, `¡Subes al nivel ${lvB} de 10!`) : lvB < lvA ? L(`La propera, nivell ${lvB}: una mica més assequible.`, `La próxima, nivel ${lvB}: algo más asequible.`) : L(`Nivell ${lvB} de 10${lvB < 10 ? ' · si ho fas una mica millor, pujaràs' : ''}`, `Nivel ${lvB} de 10${lvB < 10 ? ' · si lo haces un poco mejor, subirás' : ''}`)}</p>` : ''}${was != null && !rec ? `<p class="mmut">${L('El teu millor resultat', 'Tu mejor resultado')}: ${mNice(g, was)}</p>` : ''}
    ${fita ? `<p class="mtcard" style="display:flex;gap:12px;align-items:center;text-align:left">${mTile('medalla', 'gold')}<span><b>${L('Nova fita', 'Nuevo logro')}</b><br>${tx(fita[1])}</span></p>` : ''}
    ${ses && nx ? `<p class="mmut">${L(`Sessió d'avui: ${3 - left.length} de 3`, `Sesión de hoy: ${3 - left.length} de 3`)}</p><button class="btn big mbtn" onclick="mPlay('${nx}',true)">${L('Següent joc', 'Siguiente juego')}: ${tx(MG[nx].n)}</button>` : ''}
    ${ses && !nx ? `<p class="mtdone">${L('Sessió d\'avui completada!', '¡Sesión de hoy completada!')}</p><button class="btn gold big mbtn mshare" onclick="mShare('ratxa')">${mSvg('compartir')} ${L('Comparteix-ho', 'Compártelo')}</button>` : ''}
    <button class="btn ${ses && nx ? 'ghost' : ''} big mbtn" style="margin-top:10px" onclick="go('home')">${L('Torna a l\'inici', 'Vuelve al inicio')}</button></div></div></div>`;
  SFX.win && SFX.win(); if ((rec && was != null || (ses && !nx)) && typeof confetti === 'function') confetti(70);
}
const mSet = h => { const e = $('#mgstat'); if (e) e.innerHTML = h; };
const mSleep = ms => new Promise(r => { MGT = setTimeout(r, ms); });
const mTimer = (secs, onEnd, extra) => { MGA.end = Date.now() + secs * 1000; MGA_TK = setInterval(() => { if (!MGA) return; const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`${s} s${extra ? ' · ' + extra() : ''}`); if (s <= 0) onEnd(); }, 250); };
/* ---------- 1. Mirada ràpida (velocitat de processament, com l'estudi ACTIVE) ---------- */
function velGo() { MGA = { ...MGA, T: mLvl('vel'), n: 0, ok: 0, g: MGCUR }; velTrial(); }
async function velTrial() {
  const A = MGA; if (!A || MGCUR !== 'vel') return;
  if (A.n >= 10) { MS().lvl.vel = A.T; return mEnd('vel', A.T, 0, L(`Has vist bé ${A.ok} de 10. Com més baix és el temps, més ràpid processes el que veus.`, `Has visto bien ${A.ok} de 10. Cuanto más bajo es el tiempo, más rápido procesas lo que ves.`)); }
  A.n++; mSet(`${A.n}/10 · ${A.T} ms`);
  const c = pick(['🚗', '🚚']), p = ri(0, 7), dis = A.T <= 300;
  const pos = i => { const a = i * Math.PI / 4 - Math.PI / 2; return `left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%`; };
  const box = inner => `<div class="velbox">${inner}</div>`;
  $('#mgb').innerHTML = box('<span class="velfix">+</span>'); await mSleep(700); if (MGA !== A) return;
  $('#mgb').innerHTML = box(`<span class="velc">${c}</span>${[...Array(8).keys()].map(i => i === p ? `<span class="velp" style="${pos(i)}">⭐</span>` : dis ? `<span class="velp dis" style="${pos(i)}">▲</span>` : '').join('')}`);
  await mSleep(A.T); if (MGA !== A) return;
  $('#mgb').innerHTML = box(`<span class="velmask"></span>${[...Array(8).keys()].map(i => `<span class="velp mk" style="${pos(i)}">▦</span>`).join('')}`); await mSleep(250); if (MGA !== A) return;
  $('#mgb').innerHTML = `<p class="mtq">${L('Què hi havia al centre?', '¿Qué había en el centro?')}</p><div class="velq"><button class="mopt" onclick="velA1('🚗')">🚗<small>${L('Cotxe', 'Coche')}</small></button><button class="mopt" onclick="velA1('🚚')">🚚<small>${L('Camió', 'Camión')}</small></button></div>`;
  A.c = c; A.p = p;
}
function velA1(x) {
  const A = MGA; A.a1 = x === A.c;
  const pos = i => { const a = i * Math.PI / 4 - Math.PI / 2; return `left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%`; };
  $('#mgb').innerHTML = `<p class="mtq">${L("On era l'estrella?", '¿Dónde estaba la estrella?')}</p><div class="velbox pick">${[...Array(8).keys()].map(i => `<button class="velpos" style="${pos(i)}" onclick="velA2(${i})" aria-label="${i + 1}"></button>`).join('')}<span class="velfix">+</span></div>`;
}
async function velA2(i) {
  const A = MGA, ok = A.a1 && i === A.p;
  if (ok) { A.ok++; A.T = Math.max(34, Math.round(A.T * .85)); SFX.ok && SFX.ok(); } else { A.T = Math.min(1000, Math.round(A.T * 1.2)); SFX.ko && SFX.ko(); }
  $('#mgb').innerHTML = `<div class="mfb ${ok ? 'ok' : 'ko'}">${ok ? '✓' : '✗'}<small>${ok ? L('Molt bé!', '¡Muy bien!') : !A.a1 ? L(`Al centre hi havia ${A.c === '🚗' ? 'un cotxe' : 'un camió'}`, `En el centro había ${A.c === '🚗' ? 'un coche' : 'un camión'}`) : L("L'estrella era en un altre lloc", 'La estrella estaba en otro sitio')}</small></div>`;
  await mSleep(900); if (MGA === A) velTrial();
}

/* ---------- 2. Colors (atenció i control, efecte Stroop) ---------- */
const MCOL = [['VERMELL', 'ROJO', '#D93A3A'], ['BLAU', 'AZUL', '#2166D1'], ['VERD', 'VERDE', '#2A9A4A'], ['GROC', 'AMARILLO', '#E0A800']];
function ateGo() {
  const lv = mDlv('ate'); MGA = { ...MGA, ok: 0, ko: 0, end: Date.now() + 45000, inc: Math.min(.9, .45 + lv * .05) };
  $('#mgb').innerHTML = `<div class="atew" id="atew"></div><div class="ateb">${MCOL.map((c, i) => `<button class="atebtn" style="--c:${c[2]}" onclick="ateA(${i})">${LANG === 'es' ? c[1] : c[0]}</button>`).join('')}</div>`;
  ateNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`${s} s · ✓ ${MGA.ok}`); if (s <= 0) ateEnd(); }, 250);
}
function ateNext() { const A = MGA, w = mri(0, 3); let ink = w; if (mrnd() < A.inc) while (ink === w) ink = mri(0, 3); A.ink = ink; const el = $('#atew'); if (el) { el.textContent = LANG === 'es' ? MCOL[w][1] : MCOL[w][0]; el.style.color = MCOL[ink][2]; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); } }
function ateA(i) { const A = MGA; if (!A || A.ink == null) return; const b = $$('.atebtn')[i]; if (i === A.ink) { A.ok++; SFX.tap && SFX.tap(); } else { A.ko++; SFX.ko && SFX.ko(); const el = $('#atew'); el && (el.classList.remove('shake'), void el.offsetWidth, el.classList.add('shake')); } mFlash(b, i === A.ink); ateNext(); }
const mFlash = (b, ok) => { if (!b) return; b.classList.remove('fok', 'fko'); void b.offsetWidth; b.classList.add(ok ? 'fok' : 'fko'); clearTimeout(b._f); b._f = setTimeout(() => b.classList.remove('fok', 'fko'), 450); };
function ateEnd() {
  clearInterval(MGA_TK); const A = MGA, acc = A.ok + A.ko ? A.ok / (A.ok + A.ko) : 0;
  mEnd('ate', A.ok, acc >= .9 && A.ok >= 20 ? 1 : acc < .7 ? -1 : 0, L(`${A.ok} encerts i ${A.ko} ${A.ko === 1 ? 'error' : 'errors'}. La clau és no deixar-se enganyar per la paraula.`, `${A.ok} aciertos y ${A.ko} ${A.ko === 1 ? 'error' : 'errores'}. La clave es no dejarse engañar por la palabra.`));
}

/* ---------- 3. Seqüències (memòria de treball visoespacial, tipus Corsi) ---------- */
function memGo() { const test = MGA && MGA.test, span = test ? 4 : mLvl('mem'); MGA = { ...MGA, len: Math.max(3, span - 1), fails: 0, best: 0, n: span >= 6 ? 4 : 3 }; memRound(); }
async function memRound() {
  const A = MGA, N = A.n * A.n; if (!A || MGCUR !== 'mem') return;
  A.seq = []; while (A.seq.length < A.len) { const c = ri(0, N - 1); if (c !== A.seq[A.seq.length - 1]) A.seq.push(c); } A.inp = []; A.lock = true;
  mSet(`${L('Llargada', 'Longitud')}: ${A.len}`);
  $('#mgb').innerHTML = `<p class="mtq" id="memq">${L('Mira…', 'Mira…')}</p><div class="memg" style="--n:${A.n}">${[...Array(N).keys()].map(i => `<button class="memc" id="mc${i}" onclick="memTap(${i})"></button>`).join('')}</div>`;
  await mSleep(800);
  for (const c of A.seq) { if (MGA !== A) return; const b = $('#mc' + c); b && b.classList.add('on'); SFX.tap && SFX.tap(); await mSleep(650); b && b.classList.remove('on'); await mSleep(220); }
  if (MGA !== A) return; A.lock = false; const q = $('#memq'); if (q) q.textContent = L('Ara tu: toca-les en el mateix ordre', 'Ahora tú: tócalas en el mismo orden');
}
async function memTap(i) {
  const A = MGA; if (!A || A.lock) return;
  const b = $('#mc' + i); b.classList.add('tap'); setTimeout(() => b.classList.remove('tap'), 250);
  A.inp.push(i); const k = A.inp.length - 1;
  if (A.inp[k] !== A.seq[k]) {
    A.lock = true; A.fails++; SFX.ko && SFX.ko(); $('#memq').textContent = L('Oh! No era aquesta.', '¡Oh! No era esta.');
    await mSleep(900); if (MGA !== A) return;
    if (A.fails >= 2) { if (!A.test) MS().lvl.mem = Math.max(3, A.best || A.len - 1); return mEnd('mem', A.best || A.len - 1, 0, L(`Has recordat seqüències de fins a ${A.best || A.len - 1} caselles.`, `Has recordado secuencias de hasta ${A.best || A.len - 1} casillas.`)); }
    return memRound();
  }
  if (A.inp.length === A.seq.length) { A.lock = true; A.best = A.len; A.fails = 0; A.len++; SFX.ok && SFX.ok(); $('#memq').textContent = L('Perfecte! Una més…', '¡Perfecto! Una más…'); await mSleep(900); if (MGA === A) { if (A.len > 12) { if (!A.test) MS().lvl.mem = 12; return mEnd('mem', 12, 0, ''); } memRound(); } }
}

/* ---------- 4. Parelles (memòria visual) ---------- */
const MPIC = ['🍎', '🍐', '🍋', '🍇', '🍓', '🍒', '🥝', '🍑', '🥕', '🌽', '🌻', '🌷', '🐟', '🦋', '🐞', '🐢', '⚓', '🎈', '🎸', '⏰'];
function parGo() {
  const lv = mLvl('par'), np = lv <= 3 ? 6 : lv <= 6 ? 8 : 10, cols = np === 10 ? 5 : 4;
  const cards = shuffle(shuffle(MPIC).slice(0, np).flatMap(x => [x, x]));
  MGA = { ...MGA, cards, open: [], done: new Set(), moves: 0, np, t0: Date.now() };
  $('#mgb').innerHTML = `<div class="parg" style="--c:${cols}">${cards.map((x, i) => `<button class="parc" id="pc${i}" onclick="parTap(${i})"><span>${x}</span></button>`).join('')}</div>`;
  mSet(`${L('Intents', 'Intentos')}: 0`);
}
function parTap(i) {
  const A = MGA; if (!A || A.done.has(i) || A.open.includes(i) || A.open.length >= 2) return;
  $('#pc' + i).classList.add('up'); A.open.push(i); SFX.tap && SFX.tap();
  if (A.open.length < 2) return;
  A.moves++; mSet(`${L('Intents', 'Intentos')}: ${A.moves}`);
  const [a, b] = A.open;
  if (A.cards[a] === A.cards[b]) { A.done.add(a); A.done.add(b); A.open = []; $('#pc' + a).classList.add('ok'); $('#pc' + b).classList.add('ok'); SFX.ok && SFX.ok();
    if (A.done.size === A.cards.length) { const pct = Math.round(100 * A.np / A.moves); setTimeout(() => mEnd('par', pct, A.moves <= A.np * 1.6 ? 1 : A.moves > A.np * 2.6 ? -1 : 0, L(`${A.np} parelles en ${A.moves} intents (${Math.round((Date.now() - A.t0) / 1000)} s). El percentatge és la teva precisió: 100 % vol dir no fallar mai.`, `${A.np} parejas en ${A.moves} intentos (${Math.round((Date.now() - A.t0) / 1000)} s). El porcentaje es tu precisión: 100 % quiere decir no fallar nunca.`)), 600); }
  } else MGT = setTimeout(() => { $('#pc' + a) && $('#pc' + a).classList.remove('up'); $('#pc' + b) && $('#pc' + b).classList.remove('up'); A.open = []; }, 900);
}

/* ---------- 5. Càlcul ràpid ---------- */
function calQ(lv) {
  const K = lv >= 9 ? mpick(['add2', 'sub2', 'mul', 'div', 'pct', 'two']) : lv >= 7 ? mpick(['add2', 'sub2', 'mul', 'div', 'mul2']) : lv >= 5 ? mpick(['add', 'sub', 'mul', 'div']) : lv >= 3 ? mpick(['add', 'sub', 'mul']) : mpick(['add', 'sub']);
  let a, b;
  switch (K) {
    case 'add': a = mri(2, lv >= 3 ? 60 : 20); b = mri(2, lv >= 3 ? 39 : 10); return [`${a} + ${b}`, a + b];
    case 'sub': a = mri(10, lv >= 3 ? 99 : 20); b = mri(1, a - 1); return [`${a} − ${b}`, a - b];
    case 'add2': a = mri(25, 199); b = mri(15, 99); return [`${a} + ${b}`, a + b];
    case 'sub2': a = mri(60, 250); b = mri(15, a - 10); return [`${a} − ${b}`, a - b];
    case 'mul': a = mri(2, lv >= 5 ? 9 : 5); b = mri(2, 10); return [`${a} × ${b}`, a * b];
    case 'mul2': a = mri(11, 25); b = mri(2, 5); return [`${a} × ${b}`, a * b];
    case 'div': b = mri(2, 9); a = b * mri(2, 10); return [`${a} ÷ ${b}`, a / b];
    case 'pct': a = mpick([10, 25, 50]); b = mpick([40, 60, 80, 120, 200, 360]); return [`${a} % ${L('de', 'de')} ${b}`, b * a / 100];
    default: a = mri(2, 9); b = mri(2, 9); const c = mri(1, 9); return [`${a} × ${b} − ${c}`, a * b - c];
  }
}
function calGo() {
  const lv = mDlv('cal'); MGA = { ...MGA, lv, ok: 0, end: Date.now() + 60000, inp: '' };
  $('#mgb').innerHTML = `<p class="calq" id="calq"></p><div class="calin" id="calin">?</div><div class="mpad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫', 0].map(k => `<button class="${k === 0 ? 'k0' : ''}" onclick="calK('${k}')">${k}</button>`).join('')}</div>`;
  calNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`${s} s · ✓ ${MGA.ok}`); if (s <= 0) calEnd(); }, 250);
}
function calNext() { const A = MGA, [q, r] = calQ(A.lv); A.q = q; A.r = r; A.inp = ''; $('#calq').textContent = q + ' ='; $('#calin').textContent = '?'; $('#calin').className = 'calin'; }
function calK(k) {
  const A = MGA; if (!A || A.r == null) return;
  if (k === '⌫') A.inp = A.inp.slice(0, -1); else if (A.inp.length < 5) A.inp += k;
  const el = $('#calin'); el.textContent = A.inp || '?';
  if (A.inp === String(A.r)) { A.ok++; SFX.ok && SFX.ok(); el.className = 'calin ok'; A.r = null; setTimeout(() => MGA === A && calNext(), 250); }
  else if (A.inp.length >= String(A.r).length && A.inp !== String(A.r).slice(0, A.inp.length)) { A.ko = (A.ko || 0) + 1; SFX.ko && SFX.ko(); el.className = 'calin ko'; el.textContent = `${A.inp} → ${A.r}`; const r = A.r; A.r = null; setTimeout(() => MGA === A && calNext(), 1100); }
}
function calEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('cal', A.ok, A.ok >= 14 ? 1 : A.ok <= 6 ? -1 : 0, L(`${A.ok} comptes en un minut.`, `${A.ok} cuentas en un minuto.`)); }

/* ---------- 6. Sudoku (4×4, 6×6 i 9×9) ---------- */
function sudMake(n, br, bc, holes) {
  const rg = k => [...Array(k).keys()];
  const rows = shuffle(rg(n / br)).flatMap(b => shuffle(rg(br)).map(r => b * br + r)), cols = shuffle(rg(n / bc)).flatMap(s => shuffle(rg(bc)).map(c => s * bc + c)), nums = shuffle(rg(n).map(x => x + 1));
  const sol = rows.map(r => cols.map(c => nums[(bc * (r % br) + Math.floor(r / br) + c) % n]));
  const g = sol.map(r => r.slice());
  const ok = (b, r, c, v) => { for (let i = 0; i < n; i++) if (b[r][i] === v || b[i][c] === v) return false; const r0 = r - r % br, c0 = c - c % bc; for (let i = 0; i < br; i++) for (let j = 0; j < bc; j++) if (b[r0 + i][c0 + j] === v) return false; return true; };
  const count = (b, lim) => { let best = null, bc2 = n + 1; for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (!b[r][c]) { let k = 0; for (let v = 1; v <= n; v++) if (ok(b, r, c, v)) k++; if (k < bc2) { bc2 = k; best = [r, c]; } }
    if (!best) return 1; let t = 0; const [r, c] = best; for (let v = 1; v <= n && t < lim; v++) if (ok(b, r, c, v)) { b[r][c] = v; t += count(b, lim - t); b[r][c] = 0; } return t; };
  let removed = 0;
  for (const k of shuffle(rg(n * n))) { if (removed >= holes) break; const r = Math.floor(k / n), c = k % n, v = g[r][c]; g[r][c] = 0; if (count(g.map(x => x.slice()), 2) !== 1) g[r][c] = v; else removed++; }
  return { n, br, bc, sol, g };
}
function sudGo() {
  const lv = mLvl('sud'), cfg = [[4, 2, 2, 6], [4, 2, 2, 9], [6, 2, 3, 14], [6, 2, 3, 18], [6, 2, 3, 22], [9, 3, 3, 36], [9, 3, 3, 40], [9, 3, 3, 44], [9, 3, 3, 48], [9, 3, 3, 52]][lv - 1];
  const S = sudMake(...cfg);
  MGA = { ...MGA, S, cur: S.g.map(r => r.slice()), fix: S.g.map(r => r.map(v => !!v)), sel: null, hints: 0, t0: Date.now() };
  sudDraw(); MGA_TK = setInterval(() => { const s = Math.floor((Date.now() - MGA.t0) / 1000); mSet(`${Math.floor(s / 60)}:${pad(s % 60)}`); }, 1000);
}
function sudDraw() {
  const A = MGA, { n, br, bc } = A.S, cur = A.cur;
  const bad = (r, c) => { const v = cur[r][c]; if (!v) return false; for (let i = 0; i < n; i++) if ((i !== c && cur[r][i] === v) || (i !== r && cur[i][c] === v)) return true; const r0 = r - r % br, c0 = c - c % bc; for (let i = 0; i < br; i++) for (let j = 0; j < bc; j++) { const R = r0 + i, C = c0 + j; if ((R !== r || C !== c) && cur[R][C] === v) return true; } return false; };
  const [sr, sc] = A.sel || [-1, -1], sv = A.sel ? cur[sr][sc] : 0;
  $('#mgb').innerHTML = `<div class="sudg" style="--n:${n}">${cur.map((row, r) => row.map((v, c) => `<button class="sudc ${A.fix[r][c] ? 'fix' : ''} ${r === sr && c === sc ? 'sel' : ''} ${sv && v === sv ? 'same' : ''} ${bad(r, c) ? 'bad' : ''} ${(c + 1) % bc === 0 && c < n - 1 ? 'br' : ''} ${(r + 1) % br === 0 && r < n - 1 ? 'bb' : ''}" onclick="sudSel(${r},${c})">${v || ''}</button>`).join('')).join('')}</div>
    <div class="sudpad" style="--n:${Math.min(n, 5)}">${[...Array(n).keys()].map(i => `<button onclick="sudK(${i + 1})">${i + 1}</button>`).join('')}<button class="sud0" onclick="sudK(0)">⌫</button><button class="sudh" onclick="sudHint()">💡 ${L('Pista', 'Pista')}</button></div>`;
}
function sudSel(r, c) { MGA.sel = [r, c]; SFX.tap && SFX.tap(); sudDraw(); }
function sudK(v) {
  const A = MGA; if (!A.sel) return toast(L('Primer toca una casella buida.', 'Primero toca una casilla vacía.'));
  const [r, c] = A.sel; if (A.fix[r][c]) return; A.cur[r][c] = v; sudDraw(); sudCheck();
}
function sudHint() {
  const A = MGA, { n, sol } = A.S; let cell = A.sel && !A.fix[A.sel[0]][A.sel[1]] && A.cur[A.sel[0]][A.sel[1]] !== sol[A.sel[0]][A.sel[1]] ? A.sel : null;
  if (!cell) { const e = []; for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (A.cur[r][c] !== sol[r][c]) e.push([r, c]); cell = e.length ? pick(e) : null; }
  if (!cell) return; A.hints++; const [r, c] = cell; A.cur[r][c] = sol[r][c]; A.fix[r][c] = true; A.sel = cell; sudDraw(); sudCheck();
}
function sudCheck() {
  const A = MGA, { sol } = A.S; if (!A.cur.every((row, r) => row.every((v, c) => v === sol[r][c]))) return;
  clearInterval(MGA_TK); const s = Math.round((Date.now() - A.t0) / 1000), n = A.S.n;
  setTimeout(() => mEnd('sud', s, A.hints === 0 ? 1 : A.hints >= 3 ? -1 : 0, L(`Sudoku ${n}×${n} resolt${A.hints ? ` amb ${A.hints} ${A.hints === 1 ? 'pista' : 'pistes'}` : ' sense pistes'}.`, `Sudoku ${n}×${n} resuelto${A.hints ? ` con ${A.hints} ${A.hints === 1 ? 'pista' : 'pistas'}` : ' sin pistas'}.`)), 500);
}

/* ---------- 7. Paraules (anagrames amb pista) ---------- */
const MPAL = {
  ca: { 'Fruita': ['poma', 'figa', 'raïm', 'plàtan', 'cirera', 'préssec', 'síndria', 'maduixa', 'taronja'], 'Animal': ['vaca', 'tigre', 'zebra', 'panda', 'cavall', 'ovella', 'conill', 'girafa', 'elefant', 'tortuga', 'granota', 'cocodril'],
    'Transport': ['tren', 'moto', 'taxi', 'cotxe', 'camió', 'vaixell', 'autobús'], 'A casa': ['llit', 'taula', 'cuina', 'dutxa', 'cadira', 'mirall', 'nevera', 'teulada', 'finestra', 'escombra'],
    'El cos': ['dent', 'boca', 'orella', 'genoll', 'esquena', 'espatlla'], 'Natura': ['bosc', 'flor', 'arbre', 'platja', 'muntanya', 'estrella', 'lluna', 'núvol'], 'Menjar': ['galeta', 'enciam', 'mantega', 'formatge', 'xocolata', 'tomàquet'],
    'Roba': ['camisa', 'bufanda', 'sabates', 'jaqueta', 'mitjons'], 'Estacions': ['estiu', 'hivern', 'tardor'], 'Objectes': ['llibre', 'llapis', 'pinzell', 'rellotge', 'guitarra', 'paraigua'] },
  es: { 'Fruta': ['kiwi', 'lima', 'mango', 'melón', 'cereza', 'ciruela', 'naranja', 'plátano', 'manzana', 'sandía'], 'Animal': ['vaca', 'lobo', 'león', 'tigre', 'cebra', 'panda', 'conejo', 'jirafa', 'caballo', 'tortuga', 'elefante', 'cocodrilo'],
    'Transporte': ['tren', 'moto', 'taxi', 'coche', 'avión', 'camión', 'autobús'], 'En casa': ['cama', 'mesa', 'sofá', 'silla', 'cocina', 'espejo', 'nevera', 'escoba', 'ventana', 'tenedor', 'cuchara'],
    'El cuerpo': ['boca', 'dedo', 'nariz', 'oreja', 'rodilla', 'espalda'], 'Naturaleza': ['flor', 'árbol', 'playa', 'luna', 'montaña', 'estrella', 'bosque'], 'Comida': ['queso', 'tomate', 'patata', 'galleta', 'lechuga', 'chocolate'],
    'Ropa': ['camisa', 'zapato', 'bufanda', 'chaqueta', 'calcetín'], 'Estaciones': ['verano', 'otoño', 'invierno'], 'Objetos': ['libro', 'lápiz', 'reloj', 'pincel', 'guitarra', 'paraguas'] }
};
function palPick(lv, used) {
  const want = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8][lv - 1], all = Object.entries(MPAL[LANG === 'es' ? 'es' : 'ca']).flatMap(([cat, ws]) => ws.map(w => [cat, w]));
  const len = w => [...w].length;
  let c = all.filter(([, w]) => Math.abs(len(w) - want) <= (lv >= 9 ? 2 : 0) && !used.has(w)); if (c.length < 3) c = all.filter(([, w]) => !used.has(w));
  return pick(c);
}
function palGo() { MGA = { ...MGA, lv: mLvl('pal'), ok: 0, n: 0, used: new Set(), end: Date.now() + 120000 }; palNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`${Math.floor(s / 60)}:${pad(s % 60)} · ✓ ${MGA.ok}`); if (s <= 0) palEnd(); }, 250); }
function palNext() {
  const A = MGA; if (A.n >= 6) return palEnd();
  const [cat, w] = palPick(A.lv, A.used); A.used.add(w); A.n++;
  const ls = [...w.toUpperCase()]; let sh; do sh = shuffle(ls.map((l, i) => [l, i])); while (sh.map(x => x[0]).join('') === ls.join('') && ls.length > 1);
  A.w = ls; A.sh = sh; A.pos = []; A.cat = cat; palDraw();
}
function palDraw() {
  const A = MGA;
  $('#mgb').innerHTML = `<p class="palcat">${L('Pista', 'Pista')}: <b>${A.cat}</b> · ${A.w.length} ${L('lletres', 'letras')}</p>
    <div class="palslots">${A.w.map((_, i) => `<button class="pals ${A.pos[i] != null ? 'full' : ''}" onclick="palUndo(${i})">${A.pos[i] != null ? A.sh[A.pos[i]][0] : ''}</button>`).join('')}</div>
    <div class="paltiles">${A.sh.map(([l], i) => `<button class="palt" ${A.pos.includes(i) ? 'disabled' : ''} onclick="palTap(${i})">${l}</button>`).join('')}</div>
    <div class="palbtns"><button class="btn ghost" onclick="palHint()">💡 ${L('Primera lletra', 'Primera letra')}</button><button class="btn ghost" onclick="palSkip()">${L('Salta', 'Salta')} ›</button></div>`;
}
function palTap(i) { const A = MGA; if (A.pos.includes(i)) return; A.pos.push(i); SFX.tap && SFX.tap(); if (A.pos.length === A.w.length) return palCheck(); palDraw(); }
function palUndo(k) { const A = MGA; if (k < A.pos.length) { A.pos = A.pos.slice(0, k); palDraw(); } }
function palHint() { const A = MGA; const i = A.sh.findIndex(([l], j) => l === A.w[0] && !A.pos.includes(j)); A.pos = i >= 0 ? [i] : []; palDraw(); }
function palSkip() { const A = MGA; toast(L(`Era: ${A.w.join('')}`, `Era: ${A.w.join('')}`)); palNext(); }
function palCheck() {
  const A = MGA, got = A.pos.map(i => A.sh[i][0]).join('');
  if (got === A.w.join('')) { A.ok++; SFX.ok && SFX.ok(); palDraw(); $$('.pals').forEach(b => b.classList.add('ok')); setTimeout(() => MGA === A && palNext(), 700); }
  else { SFX.ko && SFX.ko(); palDraw(); const s = $('.palslots'); s && s.classList.add('shake'); setTimeout(() => { if (MGA === A) { A.pos = []; palDraw(); } }, 700); }
}
function palEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('pal', A.ok, A.ok >= 5 ? 1 : A.ok <= 2 ? -1 : 0, L(`Has trobat ${A.ok} de ${A.n} paraules.`, `Has encontrado ${A.ok} de ${A.n} palabras.`)); }

/* ---------- 8. L'intrús (atenció visual: cerca del signe diferent) ---------- */
const MINT = [['O', 'Q'], ['E', 'F'], ['b', 'd'], ['6', '9'], ['M', 'N'], ['p', 'q'], ['C', 'G'], ['V', 'Y'], ['8', 'B'], ['u', 'n']];
function intGo() { MGA = { ...MGA, lv: mDlv('int'), ok: 0, ko: 0, end: Date.now() + 45000 }; intNext(); MGA_TK = setInterval(() => { const s = Math.max(0, Math.ceil((MGA.end - Date.now()) / 1000)); mSet(`${s} s · ✓ ${MGA.ok}${MGA.ko ? ` · ✗ ${MGA.ko}` : ''}`); if (s <= 0) intEnd(); }, 250); }
function intNext() {
  const A = MGA, n = Math.min(8, 4 + Math.floor((A.lv - 1) / 2) + Math.floor(A.ok / 4)), pr = mpick(MINT.slice(0, Math.min(MINT.length, 3 + A.lv))), sw = mrnd() < .5;
  const [base, odd] = sw ? [pr[1], pr[0]] : pr; A.odd = mri(0, n * n - 1);
  $('#mgb').innerHTML = `<p class="mtq">${L('Toca el diferent', 'Toca el diferente')}</p><div class="intg" style="--n:${n}">${[...Array(n * n).keys()].map(i => `<button class="intc" onclick="intTap(${i})">${i === A.odd ? odd : base}</button>`).join('')}</div>`;
}
// en tocar, la casella es marca: verd si és l'intrús, vermell si no ho és (i es veu on era)
function intTap(i) {
  const A = MGA; if (!A || A.lock) return; const c = $$('.intc');
  if (i === A.odd) { A.ok++; SFX.ok && SFX.ok(); A.lock = true; c[i].classList.add('ok'); MGT = setTimeout(() => { if (MGA === A) { A.lock = false; intNext(); } }, 280); }
  else { A.ko++; SFX.ko && SFX.ko(); c[i].classList.remove('ko'); void c[i].offsetWidth; c[i].classList.add('ko'); setTimeout(() => c[i] && c[i].classList.remove('ko'), 700); mSet(`${Math.max(0, Math.ceil((A.end - Date.now()) / 1000))} s · ✓ ${A.ok} · ✗ ${A.ko}`); }
}
function intEnd() { clearInterval(MGA_TK); const A = MGA; mEnd('int', A.ok, A.ok >= 14 && A.ko <= 2 ? 1 : A.ok <= 6 ? -1 : 0, L(`${A.ok} trobats${A.ko ? ` i ${A.ko} ${A.ko === 1 ? 'error' : 'errors'}` : ''} en 45 segons.`, `${A.ok} encontrados${A.ko ? ` y ${A.ko} ${A.ko === 1 ? 'error' : 'errores'}` : ''} en 45 segundos.`)); }

/* ---------- 9. Llista de la compra (memòria verbal: reconeixement) ---------- */
const MPROD = { ca: ['Pa', 'Llet', 'Ous', 'Formatge', 'Tomàquets', 'Pomes', 'Arròs', 'Oli', 'Sucre', 'Cafè', 'Iogurts', 'Pollastre', 'Peix', 'Enciam', 'Cebes', 'Patates', 'Taronges', 'Plàtans', 'Galetes', 'Pernil', 'Mantega', 'Farina', 'Pasta', 'Sal', 'Aigua', 'Suc', 'Xocolata', 'Mongetes', 'Pastanagues', 'Sabó'],
  es: ['Pan', 'Leche', 'Huevos', 'Queso', 'Tomates', 'Manzanas', 'Arroz', 'Aceite', 'Azúcar', 'Café', 'Yogures', 'Pollo', 'Pescado', 'Lechuga', 'Cebollas', 'Patatas', 'Naranjas', 'Plátanos', 'Galletas', 'Jamón', 'Mantequilla', 'Harina', 'Pasta', 'Sal', 'Agua', 'Zumo', 'Chocolate', 'Judías', 'Zanahorias', 'Jabón'] };
function lliGo() { MGA = { ...MGA, lv: mLvl('lli'), round: 0, hits: 0, fals: 0, tot: 0 }; lliRound(); }
async function lliRound() {
  const A = MGA; if (A.round >= 2) return lliEnd();
  A.round++; const N = Math.min(10, 3 + A.lv), all = shuffle([...MPROD[LANG === 'es' ? 'es' : 'ca']]);
  A.list = all.slice(0, N); A.grid = shuffle(all.slice(0, N * 2)); A.sel = new Set(); A.tot += N;
  mSet(`${L('Ronda', 'Ronda')} ${A.round}/2`);
  $('#mgb').innerHTML = `<p class="mtq">${L('Memoritza la llista', 'Memoriza la lista')}</p><div class="llilist">${A.list.map(x => `<span>${x}</span>`).join('')}</div><div class="llibar"><i style="animation-duration:${N * 2.2}s"></i></div>`;
  await mSleep(N * 2200); if (MGA !== A) return;
  $('#mgb').innerHTML = `<p class="mtq">${L(`Toca els ${N} productes que hi havia`, `Toca los ${N} productos que había`)}</p><div class="lligrid">${A.grid.map((x, i) => `<button class="llic" id="lc${i}" onclick="lliTap(${i})">${x}</button>`).join('')}</div><button class="btn big mbtn" onclick="lliCheck()">${L('JA ESTÀ', 'YA ESTÁ')}</button>`;
}
function lliTap(i) { const A = MGA; A.sel.has(i) ? A.sel.delete(i) : A.sel.add(i); $('#lc' + i).classList.toggle('on', A.sel.has(i)); SFX.tap && SFX.tap(); }
async function lliCheck() {
  const A = MGA; let h = 0, f = 0;
  A.grid.forEach((x, i) => { const inL = A.list.includes(x), s = A.sel.has(i), b = $('#lc' + i); if (inL && s) { h++; b.classList.add('okc'); } else if (!inL && s) { f++; b.classList.add('koc'); } else if (inL) b.classList.add('miss'); b.disabled = true; });
  A.hits += h; A.fals += f; (h === A.list.length && !f ? SFX.ok : SFX.ko) && (h === A.list.length && !f ? SFX.ok() : SFX.ko());
  await mSleep(2200); if (MGA === A) lliRound();
}
function lliEnd() { const A = MGA, pct = Math.max(0, Math.round(100 * (A.hits - A.fals) / A.tot)); mEnd('lli', pct, pct >= 90 ? 1 : pct < 60 ? -1 : 0, L(`Has recordat ${A.hits} de ${A.tot} productes${A.fals ? ` (i n'has marcat ${A.fals} que no hi eren)` : ''}.`, `Has recordado ${A.hits} de ${A.tot} productos${A.fals ? ` (y has marcado ${A.fals} que no estaban)` : ''}.`)); }

/* ---------- 10. Direccions (memòria i orientació espacial) ---------- */
function dirGo() { MGA = { ...MGA, lv: mLvl('dir'), q: 0, ok: 0 }; dirNext(); }
async function dirNext() {
  const A = MGA; if (A.q >= 6) return mEnd('dir', A.ok, A.ok >= 6 ? 1 : A.ok <= 3 ? -1 : 0, L(`${A.ok} de 6 recorreguts encertats.`, `${A.ok} de 6 recorridos acertados.`));
  A.q++; const N = 5, k = Math.min(6, 2 + Math.floor(A.lv / 2)), hide = A.lv >= 3;
  let x, y, moves;
  for (let t = 0; t < 200; t++) {
    x = ri(0, N - 1); y = ri(0, N - 1); const sx = x, sy = y; moves = []; let okp = true;
    for (let m = 0; m < k; m++) { const d = pick([[0, -1], [0, 1], [1, 0], [-1, 0]]), st = ri(1, 2); const nx = x + d[0] * st, ny = y + d[1] * st; if (nx < 0 || ny < 0 || nx >= N || ny >= N) { okp = false; break; } moves.push([d, st]); x = nx; y = ny; }
    if (okp && (x !== sx || y !== sy)) { A.start = [sx, sy]; break; }
  }
  A.end = [x, y]; A.lock = hide;
  const arrow = d => d[1] === -1 ? L('↑ amunt', '↑ arriba') : d[1] === 1 ? L('↓ avall', '↓ abajo') : d[0] === 1 ? L('→ dreta', '→ derecha') : L('← esquerra', '← izquierda');
  const steps = moves.map(([d, st]) => `<span>${arrow(d)} <b>${st}</b></span>`).join('');
  const grid = () => `<div class="dirg">${[...Array(N * N).keys()].map(i => { const cx = i % N, cy = Math.floor(i / N), home = cx === A.start[0] && cy === A.start[1]; return `<button class="dirc ${home ? 'home' : ''}" id="dc${i}" onclick="dirTap(${i})">${home ? '🏠' : ''}</button>`; }).join('')}</div>`;
  mSet(`${A.q}/6`);
  $('#mgb').innerHTML = `<p class="mtq">${hide ? L('Memoritza el camí', 'Memoriza el camino') : L('On acabes?', '¿Dónde acabas?')}</p><div class="dirsteps">${steps}</div>${grid()}`;
  if (hide) { await mSleep(2500 + k * 1300); if (MGA !== A) return; const s = $('.dirsteps'); if (s) s.innerHTML = `<span class="mmut">${L('Ara toca on acabes', 'Ahora toca dónde acabas')}</span>`; A.lock = false; }
}
async function dirTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true;
  const N = 5, ok = i === A.end[1] * N + A.end[0];
  $('#dc' + (A.end[1] * N + A.end[0])).classList.add('okc'); if (!ok) $('#dc' + i).classList.add('koc');
  ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1200); if (MGA === A) dirNext();
}

/* ---------- 11. La compra (càlcul de la vida diària) ---------- */
const MPREU = { ca: [['Pa', 1.2], ['Llet', .95], ['Ous (dotzena)', 2.6], ['Formatge', 3.4], ['Pomes (kg)', 1.8], ['Cafè', 4.25], ['Oli', 6.5], ['Iogurts', 1.65], ['Galetes', 1.35], ['Arròs', 1.1], ['Pernil', 2.9], ['Taronges (kg)', 1.45]],
  es: [['Pan', 1.2], ['Leche', .95], ['Huevos (docena)', 2.6], ['Queso', 3.4], ['Manzanas (kg)', 1.8], ['Café', 4.25], ['Aceite', 6.5], ['Yogures', 1.65], ['Galletas', 1.35], ['Arroz', 1.1], ['Jamón', 2.9], ['Naranjas (kg)', 1.45]] };
const mEur = v => v.toFixed(2).replace('.', ',') + ' €';
function comQ(lv) {
  const P_ = mshuf([...MPREU[LANG === 'es' ? 'es' : 'ca']]), r2_ = v => Math.round(v * 100) / 100;
  const kind = lv <= 2 ? 'sum2' : lv <= 4 ? mpick(['sum3', 'change']) : lv <= 6 ? mpick(['sum3', 'change', 'pack']) : mpick(['change', 'pack', 'disc', 'best']);
  let items, q, ans, dis;
  if (kind === 'sum2' || kind === 'sum3') { items = P_.slice(0, kind === 'sum2' ? 2 : 3); ans = r2_(items.reduce((t, [, p]) => t + p, 0)); q = L('Quant pagues en total?', '¿Cuánto pagas en total?'); dis = [ans + .1, ans - .1, ans + 1, ans - 1, ans + .5]; }
  if (kind === 'change') { items = P_.slice(0, mri(2, 3)); const t = r2_(items.reduce((a, [, p]) => a + p, 0)), b = t < 5 ? 5 : t < 10 ? 10 : 20; ans = r2_(b - t); q = L(`Pagues amb un bitllet de ${b} €. Quant et tornen?`, `Pagas con un billete de ${b} €. ¿Cuánto te devuelven?`); dis = [ans + .1, ans - .1, ans + 1, ans - 1, r2_(t)]; }
  if (kind === 'pack') { const [n, p] = P_[0]; items = [[n, p]]; const k = mri(2, 4); ans = r2_(p * k); q = L(`Quant costen ${k} unitats de «${n}»?`, `¿Cuánto cuestan ${k} unidades de «${n}»?`); dis = [ans + p, ans - p, ans + .1, ans + 1]; }
  if (kind === 'disc') { const v = mpick([10, 20, 30, 40, 50]), pc = mpick([10, 20, 25, 50]); items = []; ans = r2_(v * (1 - pc / 100)); q = L(`Una jaqueta de ${v} € té un ${pc} % de descompte. Quant costa ara?`, `Una chaqueta de ${v} € tiene un ${pc} % de descuento. ¿Cuánto cuesta ahora?`); dis = [r2_(v * pc / 100), v - pc, ans + 1, ans - 1]; }
  if (kind === 'best') { const [n, p] = P_[0]; items = [[n, p]]; const a = r2_(p * 2 * mpick([.7, .8, .9])), bb = r2_(p * 3 * .75); ans = null;
    const good = bb / 3 < a / 2 ? 1 : 0; return { items, q: L(`«${n}» a ${mEur(p)}. Què surt més a compte per unitat?`, `«${n}» a ${mEur(p)}. ¿Qué sale más a cuenta por unidad?`), opts: [L(`2 per ${mEur(a)}`, `2 por ${mEur(a)}`), L(`3 amb un 25 % de descompte (${mEur(bb)})`, `3 con un 25 % de descuento (${mEur(bb)})`)], ans: good }; }
  const o = [...new Set([ans, ...shuffle(dis.map(r2_).filter(v => v > 0 && v !== ans))])].slice(0, 4);
  const opts = mshuf(o).map(mEur); return { items, q, opts, ans: opts.indexOf(mEur(ans)) };
}
function comGo() { MGA = { ...MGA, lv: mDlv('com'), q: 0, ok: 0 }; comNext(); }
function comNext() {
  const A = MGA; if (A.q >= 8) return mEnd('com', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  A.q++; A.cur = comQ(A.lv); mSet(`${A.q}/8`);
  const it = A.cur.items.length ? `<div class="tiquet">${A.cur.items.map(([n, p]) => `<div><span>${n}</span><b>${mEur(p)}</b></div>`).join('')}</div>` : '';
  $('#mgb').innerHTML = `${it}<p class="mtq">${A.cur.q}</p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="comTap(${i})">${o}</button>`).join('')}</div>`;
}
async function comTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.cur.ans;
  b[A.cur.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1100); if (MGA === A) { A.lock = false; comNext(); }
}

/* ---------- 12. Refranys (llenguatge i memòria de sempre) ---------- */
const MREF = { ca: [['Qui matina', 'fa farina'], ['A cavall regalat', 'no li miris el dentat'], ['Qui no plora', 'no mama'], ['Més val un ocell a la mà', 'que cent volant'], ['De mica en mica', "s'omple la pica"], ['Qui dia passa', 'any empeny'], ['Qui la fa', 'la paga'], ['Val més prevenir', 'que curar'], ['Qui té un amic', 'té un tresor'], ['Qui sembra vents', 'recull tempestes'], ['Quan el riu sona', 'aigua porta'], ['Poc a poc', "s'hi va lluny"], ['Qui té boca', "s'equivoca"], ['Més val tard', 'que mai'], ['Parlant', "la gent s'entén"], ['Qui avisa', 'no és traïdor'], ['Qui molt abraça', 'poc estreny'], ['Casa on entra el sol', 'no hi entra el metge'], ['Una flor', 'no fa estiu'], ['No diguis blat', 'que no sigui al sac i ben lligat'], ['A la taula i al llit', 'al primer crit'], ['Tal faràs', 'tal trobaràs']],
  es: [['A quien madruga', 'Dios le ayuda'], ['Más vale pájaro en mano', 'que ciento volando'], ['A caballo regalado', 'no le mires el diente'], ['Camarón que se duerme', 'se lo lleva la corriente'], ['No por mucho madrugar', 'amanece más temprano'], ['Dime con quién andas', 'y te diré quién eres'], ['En casa de herrero', 'cuchillo de palo'], ['Perro ladrador', 'poco mordedor'], ['Ojos que no ven', 'corazón que no siente'], ['Más vale tarde', 'que nunca'], ['Quien mucho abarca', 'poco aprieta'], ['A buen entendedor', 'pocas palabras bastan'], ['Del dicho al hecho', 'hay mucho trecho'], ['Quien siembra vientos', 'recoge tempestades'], ['Cuando el río suena', 'agua lleva'], ['Poco a poco', 'se va lejos'], ['Agua que no has de beber', 'déjala correr'], ['Hablando', 'se entiende la gente'], ['Una golondrina', 'no hace verano'], ['Quien avisa', 'no es traidor'], ['Más vale prevenir', 'que curar'], ['Donde fueres', 'haz lo que vieres']] };
function refGo() { MGA = { ...MGA, q: 0, ok: 0, deck: mshuf([...MREF[LANG === 'es' ? 'es' : 'ca']]) }; refNext(); }
function refNext() {
  const A = MGA; if (A.q >= 8) return mEnd('ref', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 refranys.`, `${A.ok} de 8 refranes.`));
  const [a, b] = A.deck[A.q]; A.q++; mSet(`${A.q}/8`);
  const others = mshuf(A.deck.filter(x => x[1] !== b)).slice(0, 3).map(x => x[1]), opts = mshuf([b, ...others]); A.ans = opts.indexOf(b);
  $('#mgb').innerHTML = `<p class="refq">«${a}…»</p><div class="copts list">${opts.map((o, i) => `<button class="mopt copt" onclick="refTap(${i})">…${o}</button>`).join('')}</div>`;
}
async function refTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.ans;
  b[A.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1200); if (MGA === A) { A.lock = false; refNext(); }
}

/* ---------- 13. El rellotge (lectura de l'hora i càlcul de temps) ---------- */
const hhmm = m => { m = ((m % 720) + 720) % 720; const h = Math.floor(m / 60) || 12; return `${h}:${pad(m % 60)}`; };
function mClock(m) {
  const h = (m / 60) % 12, mi = m % 60, ha = h * 30, ma = mi * 6;
  const tick = [...Array(12).keys()].map(i => { const a = i * 30 * Math.PI / 180; return `<line x1="${50 + 38 * Math.sin(a)}" y1="${50 - 38 * Math.cos(a)}" x2="${50 + 44 * Math.sin(a)}" y2="${50 - 44 * Math.cos(a)}" stroke="#1E2A2B" stroke-width="${i % 3 ? 1.6 : 3}" stroke-linecap="round"/>`; }).join('');
  const nums = [12, 3, 6, 9].map((n, i) => { const a = i * 90 * Math.PI / 180; return `<text x="${50 + 30 * Math.sin(a)}" y="${50 - 30 * Math.cos(a) + 4.5}" text-anchor="middle" font-size="12" font-weight="800" fill="#1E2A2B">${n}</text>`; }).join('');
  return `<svg class="relsvg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="#fff" stroke="#1E2A2B" stroke-width="3"/>${tick}${nums}<line x1="50" y1="50" x2="${50 + 22 * Math.sin(ha * Math.PI / 180)}" y2="${50 - 22 * Math.cos(ha * Math.PI / 180)}" stroke="#1E2A2B" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="50" x2="${50 + 34 * Math.sin(ma * Math.PI / 180)}" y2="${50 - 34 * Math.cos(ma * Math.PI / 180)}" stroke="#177E6E" stroke-width="3.2" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#1E2A2B"/></svg>`;
}
function relGo() { MGA = { ...MGA, lv: mDlv('rel'), q: 0, ok: 0 }; relNext(); }
function relNext() {
  const A = MGA; if (A.q >= 8) return mEnd('rel', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  A.q++; mSet(`${A.q}/8`);
  const step = A.lv <= 1 ? 30 : A.lv <= 3 ? 15 : 5, m = mri(1, 12) * 60 + mri(0, 60 / step - 1) * step, calc = A.lv >= 5 && mrnd() < .6;
  const add = calc ? mpick([15, 20, 25, 30, 40, 45, 50, 75, 90]) : 0, ans = m + add;
  const d = [ans + 60, ans - 60, ans + 5 * (step > 5 ? 3 : 1), ans - 15, m + 30, (ans % 60) * 12 + Math.floor(ans / 60) * 5].map(v => hhmm(v)).filter(v => v !== hhmm(ans));
  const opts = mshuf([hhmm(ans), ...shuffle([...new Set(d)]).slice(0, 3)]); A.ans = opts.indexOf(hhmm(ans));
  $('#mgb').innerHTML = `${mClock(m)}<p class="mtq">${calc ? L(`Quina hora serà d'aquí a <b>${add} minuts</b>?`, `¿Qué hora será dentro de <b>${add} minutos</b>?`) : L('Quina hora és?', '¿Qué hora es?')}</p><div class="copts">${opts.map((o, i) => `<button class="mopt copt" onclick="relTap(${i})">${o}</button>`).join('')}</div>`;
}
async function relTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.ans;
  b[A.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1100); if (MGA === A) { A.lock = false; relNext(); }
}
/* ---------- 14. Reflexos (temps de reacció d'elecció entre dos costats) ---------- */
function rfxGo() {
  MGA = { ...MGA, n: 0, N: MGA && MGA.test ? 13 : 15, pr: 3, rts: [], ko: 0, early: 0 };
  $('#mgb').innerHTML = `<p class="mtq" id="rfxq">${L('Escalfament: toca on surti el cercle', 'Calentamiento: toca donde salga el círculo')}</p><div class="rfxb"><button id="rb0" onpointerdown="rfxTap(0)" aria-label="${L('Esquerra', 'Izquierda')}"><i></i></button><button id="rb1" onpointerdown="rfxTap(1)" aria-label="${L('Dreta', 'Derecha')}"><i></i></button></div>`;
  rfxNext();
}
async function rfxNext() {
  const A = MGA; if (!A || MGCUR !== 'rfx') return;
  if (A.n >= A.N) return rfxEnd();
  A.side = null; mSet(A.n < A.pr ? L('Escalfament', 'Calentamiento') : `${A.n - A.pr + 1}/${A.N - A.pr}`);
  if (A.n === A.pr) { const q = $('#rfxq'); if (q) q.textContent = L('Ara de veritat: tan ràpid com puguis', 'Ahora de verdad: lo más rápido que puedas'); }
  await mSleep(900 + mrnd() * 1700); if (MGA !== A) return;
  A.side = mri(0, 1); A.t = performance.now(); $('#rb' + A.side).classList.add('on');
  A.to = setTimeout(() => { if (MGA === A && A.side != null) rfxTap(-1); }, 2500);
}
function rfxTap(i) {
  const A = MGA; if (!A || MGCUR !== 'rfx') return;
  if (A.side == null) { if (i >= 0) { A.early++; const q = $('#rfxq'); if (q) q.textContent = L('Espera que surti el cercle!', '¡Espera a que salga el círculo!'); } return; }
  const rt = performance.now() - A.t, ok = i === A.side; clearTimeout(A.to);
  $('#rb' + A.side).classList.remove('on'); A.side = null;
  if (A.n >= A.pr) { if (ok && rt >= 150) A.rts.push(rt); else if (!ok) A.ko++; }
  A.n++; ok ? SFX.tap && SFX.tap() : SFX.ko && SFX.ko();
  rfxNext();
}
function rfxEnd() {
  const A = MGA, r = [...A.rts].sort((a, b) => a - b), med = r.length ? Math.round(r[Math.floor(r.length / 2)]) : 999;
  mEnd('rfx', med, 0, L(`Temps típic de resposta: ${med} ms${A.ko ? ` (${A.ko} ${A.ko === 1 ? 'error' : 'errors'})` : ''}. Com més baix, més ràpid.`, `Tiempo típico de respuesta: ${med} ms${A.ko ? ` (${A.ko} ${A.ko === 1 ? 'error' : 'errores'})` : ''}. Cuanto más bajo, más rápido.`));
}

/* ---------- 15. Símbols i números (velocitat de processament, com el test de símbols i dígits) ---------- */
const MSYM = ['<path d="M12 4 20.5 19h-17z"/>', '<circle cx="12" cy="12" r="8"/>', '<rect x="4.5" y="4.5" width="15" height="15" rx="1"/>', '<path d="M12 3.5v17M3.5 12h17"/>', '<path d="M5 5l14 14M19 5 5 19"/>',
  '<path d="M12 3l8.5 9-8.5 9-8.5-9z"/>', '<path d="M3 15c3-8 6-8 9 0s6 8 9 0"/>', '<path d="M4 6h16M4 12h16M4 18h16"/>', '<path d="M6 3.5v17h13"/>'];
const mSym = i => `<svg class="msym" viewBox="0 0 24 24">${MSYM[i]}</svg>`;
function simGo() {
  const test = MGA && MGA.test, k = test ? 9 : Math.min(9, 4 + mDlv('sim'));
  const key = mshuf([...Array(9).keys()]).slice(0, k);
  MGA = { ...MGA, k, key, ok: 0, ko: 0, cur: -1 };
  $('#mgb').innerHTML = `<div class="simkey" style="--k:${k}">${key.map((s, i) => `<div>${mSym(s)}<b>${i + 1}</b></div>`).join('')}</div><div class="simbig" id="simb"></div><div class="simpad" style="--c:${k <= 5 ? k : Math.ceil(k / 2)}">${key.map((_, i) => `<button onclick="simTap(${i})">${i + 1}</button>`).join('')}</div>`;
  simNext(); mTimer(60, simEnd, () => `✓ ${MGA.ok}`);
}
function simNext() { const A = MGA; let c; do c = mri(0, A.k - 1); while (c === A.cur && A.k > 1); A.cur = c; const b = $('#simb'); if (b) { b.innerHTML = mSym(A.key[c]); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); } }
function simTap(i) { const A = MGA; if (!A || A.cur < 0) return; const ok = i === A.cur; if (ok) { A.ok++; SFX.tap && SFX.tap(); } else { A.ko++; SFX.ko && SFX.ko(); } mFlash($$('.simpad button')[i], ok); simNext(); }
function simEnd() { clearInterval(MGA_TK); const A = MGA; A.cur = -1; mEnd('sim', A.ok, A.ok >= 32 && A.ko <= 2 ? 1 : A.ok < 16 ? -1 : 0, L(`${A.ok} encerts${A.ko ? ` i ${A.ko} ${A.ko === 1 ? 'error' : 'errors'}` : ''} en un minut.`, `${A.ok} aciertos${A.ko ? ` y ${A.ko} ${A.ko === 1 ? 'error' : 'errores'}` : ''} en un minuto.`)); }

/* ---------- 16. Uneix els punts (atenció i flexibilitat, com el Trail Making) ---------- */
function uniGo() {
  const lv = mLvl('uni'), B = lv >= 4, n = B ? Math.min(16, 8 + (lv - 4) * 2) : [10, 12, 15][lv - 1];
  const lab = [...Array(n).keys()].map(i => B ? (i % 2 ? 'ABCDEFGH'[(i - 1) / 2] : String(i / 2 + 1)) : String(i + 1));
  const pts = [];
  for (let t = 0; pts.length < n && t < 4000; t++) { const p = [mri(9, 91), mri(9, 91)]; if (pts.every(q => Math.hypot(q[0] - p[0], q[1] - p[1]) > 17)) pts.push(p); }
  while (pts.length < n) pts.push([mri(9, 91), mri(9, 91)]);
  MGA = { ...MGA, n, lab, pts, next: 0, err: 0, B, t0: Date.now() };
  $('#mgb').innerHTML = `<p class="mtq">${B ? L('1 → A → 2 → B → 3…', '1 → A → 2 → B → 3…') : L('1 → 2 → 3 → 4…', '1 → 2 → 3 → 4…')}</p><div class="unibox" id="unib"><svg viewBox="0 0 100 100" preserveAspectRatio="none" id="unil"></svg>${pts.map((p, i) => `<button class="unic ${/\d/.test(lab[i]) ? '' : 'let'}" id="uc${i}" style="left:${p[0]}%;top:${p[1]}%" onclick="uniTap(${i})">${lab[i]}</button>`).join('')}</div>`;
  MGA_TK = setInterval(() => { if (MGA) mSet(mTime(Math.floor((Date.now() - MGA.t0) / 1000))); }, 500);
}
function uniTap(i) {
  const A = MGA; if (!A || MGCUR !== 'uni') return; const b = $('#uc' + i);
  if (i < A.next) return;
  if (i !== A.next) { A.err++; SFX.ko && SFX.ko(); b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); return; }
  b.classList.add('done'); SFX.tap && SFX.tap();
  if (i > 0) { const p = A.pts[i - 1], q = A.pts[i]; $('#unil').insertAdjacentHTML('beforeend', `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#177E6E" stroke-width="1.2" stroke-linecap="round" vector-effect="non-scaling-stroke" style="stroke-width:4"/>`); }
  A.next++;
  if (A.next === A.n) { clearInterval(MGA_TK); const s = Math.round((Date.now() - A.t0) / 1000), per = s / A.n;
    setTimeout(() => MGA === A && mEnd('uni', s, per < (A.B ? 2.2 : 1.6) && A.err <= 1 ? 1 : per > (A.B ? 4.5 : 3.2) ? -1 : 0, L(`${A.n} punts en ${mTime(s)}${A.err ? ` amb ${A.err} ${A.err === 1 ? 'error' : 'errors'}` : ' sense errors'}.`, `${A.n} puntos en ${mTime(s)}${A.err ? ` con ${A.err} ${A.err === 1 ? 'error' : 'errores'}` : ' sin errores'}.`)), 500); }
}

/* ---------- 17. Verd sí, vermell no (control de la resposta: go/no-go) ---------- */
function atuGo() {
  const lv = mDlv('atu'); MGA = { ...MGA, N: 30, i: 0, ok: 0, ko: 0, rts: [], dur: Math.max(560, 1300 - lv * 75), cur: null };
  $('#mgb').innerHTML = `<p class="mtq">${L('Verd: toca. Vermell: no.', 'Verde: toca. Rojo: no.')}</p><button class="atubox" id="atub" onpointerdown="atuTap()" aria-label="${L('Toca', 'Toca')}"></button>`;
  atuNext();
}
async function atuNext() {
  const A = MGA; if (!A || MGCUR !== 'atu') return;
  if (A.i >= A.N) { const avg = A.rts.length ? Math.round(A.rts.reduce((a, b) => a + b, 0) / A.rts.length) : 0, pct = Math.round(100 * A.ok / A.N);
    return mEnd('atu', pct, pct >= 94 ? 1 : pct < 78 ? -1 : 0, L(`${A.ok} de ${A.N} bé${avg ? ` · temps mitjà als verds: ${avg} ms` : ''}.`, `${A.ok} de ${A.N} bien${avg ? ` · tiempo medio en los verdes: ${avg} ms` : ''}.`)); }
  mSet(`${A.i + 1}/${A.N}`); const b = $('#atub'); if (b) b.innerHTML = '';
  await mSleep(450 + mrnd() * 650); if (MGA !== A) return;
  A.cur = mrnd() < .3 ? 'no' : 'go'; A.resp = false; A.t = performance.now();
  if (b) b.innerHTML = `<i class="${A.cur}"></i>`;
  await mSleep(A.dur); if (MGA !== A) return;
  if (!A.resp) A.cur === 'go' ? A.ko++ : A.ok++;
  A.cur = null; A.i++; atuNext();
}
function atuTap() {
  const A = MGA; if (!A || MGCUR !== 'atu' || !A.cur || A.resp) return; A.resp = true; const b = $('#atub');
  if (A.cur === 'go') { A.ok++; A.rts.push(performance.now() - A.t); SFX.tap && SFX.tap(); if (b) b.innerHTML = ''; }
  else { A.ko++; SFX.ko && SFX.ko(); if (b) { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); } }
}

/* ---------- 18. Dígits (memòria de treball verbal: amplitud de dígits) ---------- */
function digGo() { const test = MGA && MGA.test; MGA = { ...MGA, len: test ? 3 : Math.max(3, mLvl('dig') - 1), fails: 0, best: 0, rev: false }; digRound(); }
async function digRound() {
  const A = MGA; if (!A || MGCUR !== 'dig') return;
  A.rev = !A.test && mLvl('dig') >= 6 && A.len >= 4 && mrnd() < .4;
  const n = A.rev ? A.len - 1 : A.len; A.seq = []; while (A.seq.length < n) { const d = mri(0, 9); if (d !== A.seq[A.seq.length - 1]) A.seq.push(d); }
  A.inp = ''; A.lock = true; mSet(`${L('Llargada', 'Longitud')}: ${n}`);
  $('#mgb').innerHTML = `<p class="mtq" id="digq">${L('Mira i recorda…', 'Mira y recuerda…')}</p><div class="dignum" id="dign"></div>`;
  await mSleep(700);
  for (const d of A.seq) { if (MGA !== A) return; const e = $('#dign'); if (e) { e.textContent = d; e.classList.remove('pop'); void e.offsetWidth; e.classList.add('pop'); } await mSleep(850); if (e) e.textContent = ''; await mSleep(250); }
  if (MGA !== A) return; A.lock = false;
  $('#mgb').innerHTML = `<p class="mtq">${A.rev ? `<span class="digrev">${L('Al revés', 'Al revés')}</span> ${L('del final al principi', 'del final al principio')}` : L('Escriu-los en el mateix ordre', 'Escríbelos en el mismo orden')}</p><div class="digin" id="digi">&nbsp;</div>
    <div class="mpad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫', 0, 'OK'].map(k => `<button class="${k === 'OK' ? 'kok' : ''}" onclick="digK('${k}')">${k}</button>`).join('')}</div>`;
}
async function digK(k) {
  const A = MGA; if (!A || A.lock) return;
  if (k === '⌫') A.inp = A.inp.slice(0, -1); else if (k !== 'OK' && A.inp.length < A.seq.length) A.inp += k;
  const el = $('#digi'); el.innerHTML = A.inp || '&nbsp;';
  if (k !== 'OK' && A.inp.length < A.seq.length) return;
  if (k !== 'OK') return;
  A.lock = true; const want = (A.rev ? [...A.seq].reverse() : A.seq).join(''), ok = A.inp === want;
  el.className = 'digin ' + (ok ? 'ok' : 'ko'); if (!ok) el.textContent = `${L('Era', 'Era')} ${want}`;
  ok ? SFX.ok && SFX.ok() : SFX.ko && SFX.ko();
  await mSleep(ok ? 800 : 1500); if (MGA !== A) return;
  if (ok) { A.best = Math.max(A.best, A.len); A.fails = 0; A.len++; if (A.len > 12) return digEnd(); }
  else if (++A.fails >= 2) return digEnd();
  digRound();
}
function digEnd() { const A = MGA, b = A.best || Math.max(2, A.len - 1); if (!A.test) MS().lvl.dig = Math.max(3, b); mEnd('dig', b, 0, L(`Has recordat fins a ${b} números seguits.`, `Has recordado hasta ${b} números seguidos.`)); }

/* ---------- 19. Igual que abans? (memòria de treball: 1-back i 2-back) ---------- */
function nbkGo() {
  const lv = mDlv('nbk'), k = lv >= 5 ? 2 : 1, N = 20 + k, pool = mshuf('BCDFGHKLMNPRST'.split('')).slice(0, k === 1 ? 5 : 6), seq = [];
  for (let i = 0; i < N; i++) { if (i >= k && mrnd() < .34) seq.push(seq[i - k]); else { let c; do c = mpick(pool); while (i >= k && c === seq[i - k]); seq.push(c); } }
  MGA = { ...MGA, k, N, seq, i: 0, ok: 0, ko: 0, show: Math.max(1900, 3300 - (lv - 1) * 150) };
  $('#mgb').innerHTML = `<p class="mtq" id="nbkq">${k === 1 ? L("És igual que la d'abans?", '¿Es igual que la de antes?') : L('És igual que la de fa <b>dues</b>?', '¿Es igual que la de hace <b>dos</b>?')}</p><div class="nbkcard" id="nbkc"></div>
    <div class="nbkb"><button class="btn ghost" id="nbk0" onclick="nbkA(0)">${L('Diferent', 'Diferente')}</button><button class="btn" id="nbk1" onclick="nbkA(1)">${L('Igual', 'Igual')}</button></div>`;
  nbkNext();
}
async function nbkNext() {
  const A = MGA; if (!A || MGCUR !== 'nbk') return;
  if (A.i >= A.N) { const pct = Math.round(100 * A.ok / (A.N - A.k)); return mEnd('nbk', pct, pct >= 90 ? 1 : pct < 65 ? -1 : 0, L(`${A.ok} de ${A.N - A.k} respostes bé${A.k === 2 ? ' comparant amb la de fa dues' : ''}.`, `${A.ok} de ${A.N - A.k} respuestas bien${A.k === 2 ? ' comparando con la de hace dos' : ''}.`)); }
  const c = $('#nbkc'); c.className = 'nbkcard'; c.textContent = ''; await mSleep(250); if (MGA !== A) return;
  c.textContent = A.seq[A.i]; c.classList.add('pop'); A.wait = A.i >= A.k;
  mSet(`${A.i + 1}/${A.N}`);
  $$('.nbkb .btn').forEach(b => b.disabled = !A.wait);
  const q = $('#nbkq'); if (q && !A.wait) q.innerHTML = L('Memoritza…', 'Memoriza…'); else if (q) q.innerHTML = A.k === 1 ? L("És igual que la d'abans?", '¿Es igual que la de antes?') : L('És igual que la de fa <b>dues</b>?', '¿Es igual que la de hace <b>dos</b>?');
  await mSleep(A.wait ? A.show : 1500); if (MGA !== A) return;
  if (A.wait) { A.wait = false; A.ko++; c.classList.add('ko'); SFX.ko && SFX.ko(); await mSleep(400); if (MGA !== A) return; }
  A.i++; nbkNext();
}
async function nbkA(same) {
  const A = MGA; if (!A || !A.wait) return; A.wait = false; clearTimeout(MGT);
  const ok = (A.seq[A.i] === A.seq[A.i - A.k]) === !!same, c = $('#nbkc');
  ok ? (A.ok++, SFX.ok && SFX.ok()) : (A.ko++, SFX.ko && SFX.ko()); c.classList.add(ok ? 'ok' : 'ko');
  await mSleep(450); if (MGA !== A) return; A.i++; nbkNext();
}

/* ---------- 20. Qui viu on? (memòria associativa: nom i lloc) ---------- */
const MNOM = { ca: ['Anna', 'Jordi', 'Montse', 'Pere', 'Núria', 'Josep', 'Rosa', 'Joan', 'Carme', 'Ramon', 'Teresa', 'Lluís', 'Pilar', 'Xavier'], es: ['Ana', 'Jorge', 'Carmen', 'Pedro', 'Lucía', 'José', 'Rosa', 'Juan', 'Pilar', 'Ramón', 'Teresa', 'Luis', 'Elena', 'Javier'] };
const MCIU = { ca: ['Lleida', 'Girona', 'Tarragona', 'Reus', 'Vic', 'Manresa', 'Tortosa', 'Balaguer', 'Figueres', 'Sitges', 'Olot', 'Tàrrega', 'Solsona', 'Berga'], es: ['Madrid', 'Sevilla', 'Valencia', 'Bilbao', 'Toledo', 'Cádiz', 'Málaga', 'Salamanca', 'Burgos', 'Granada', 'Zaragoza', 'Oviedo', 'Cuenca', 'Soria'] };
function nomGo() { MGA = { ...MGA, lv: mDlv('nom'), round: 0, ok: 0, tot: 0 }; nomRound(); }
async function nomRound() {
  const A = MGA; if (!A || MGCUR !== 'nom') return;
  if (A.round >= 2) { const pct = Math.round(100 * A.ok / A.tot); return mEnd('nom', pct, pct >= 90 ? 1 : pct < 60 ? -1 : 0, L(`Has encertat ${A.ok} de ${A.tot}.`, `Has acertado ${A.ok} de ${A.tot}.`)); }
  A.round++; const k = Math.min(7, 2 + Math.ceil(A.lv / 2)), lg = LANG === 'es' ? 'es' : 'ca';
  const noms = mshuf([...MNOM[lg]]).slice(0, k), ciu = mshuf([...MCIU[lg]]).slice(0, k);
  A.pairs = noms.map((n, i) => [n, ciu[i]]); A.ask = mshuf([...A.pairs]); A.q = 0; A.tot += k;
  mSet(`${L('Ronda', 'Ronda')} ${A.round}/2`);
  $('#mgb').innerHTML = `<p class="mtq">${L('Recorda on viu cadascú', 'Recuerda dónde vive cada uno')}</p><div class="nomlist">${A.pairs.map(([n, c]) => `<div><b>${n}</b><span>${c}</span></div>`).join('')}</div><div class="llibar"><i style="animation-duration:${k * 3}s"></i></div>`;
  await mSleep(k * 3000); if (MGA !== A) return; nomAsk();
}
function nomAsk() {
  const A = MGA; if (A.q >= A.ask.length) return nomRound();
  const [n] = A.ask[A.q], opts = mshuf(A.pairs.map(p => p[1])); A.opts = opts;
  $('#mgb').innerHTML = `<p class="mtq">${L(`On viu ${/^[AEIOUÀÈÉÍÒÓÚ]/i.test(n) ? "l'" : /^(Anna|Montse|Núria|Rosa|Carme|Teresa|Pilar)$/.test(n) ? 'la ' : 'en '}<b>${n}</b>?`, `¿Dónde vive <b>${n}</b>?`)}</p><div class="copts">${opts.map((o, i) => `<button class="mopt copt" onclick="nomTap(${i})">${o}</button>`).join('')}</div>`;
}
async function nomTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const want = A.ask[A.q][1], b = $$('.copt'), ok = A.opts[i] === want;
  b[A.opts.indexOf(want)].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1000); if (MGA === A) { A.lock = false; A.q++; nomAsk(); }
}

/* ---------- 21. Suma en cadena (càlcul i memòria de treball) ---------- */
function cadGo() { MGA = { ...MGA, lv: mDlv('cad'), q: 0, ok: 0 }; cadNext(); }
async function cadNext() {
  const A = MGA; if (!A || MGCUR !== 'cad') return;
  if (A.q >= 6) return mEnd('cad', A.ok, A.ok >= 5 ? 1 : A.ok <= 2 ? -1 : 0, L(`${A.ok} de 6 totals encertats.`, `${A.ok} de 6 totales acertados.`));
  A.q++; A.lock = true; A.inp = '';
  const lv = A.lv, len = Math.min(8, 3 + Math.floor(lv / 2)), mx = lv <= 3 ? 9 : lv <= 6 ? 15 : 25, sub = lv >= 3;
  let tot = mri(2, mx); const st = [String(tot)];
  for (let i = 1; i < len; i++) { if (sub && tot > 3 && mrnd() < .4) { const v = mri(1, Math.min(mx, tot - 1)); tot -= v; st.push(`− ${v}`); } else { const v = mri(1, mx); tot += v; st.push(`+ ${v}`); } }
  A.r = tot; mSet(`${A.q}/6`);
  $('#mgb').innerHTML = `<p class="mtq" id="cadq">${L('Porta el total de cap', 'Lleva el total de cabeza')}</p><div class="dignum" id="dign"></div>`;
  const t = Math.max(850, 1600 - lv * 70);
  await mSleep(600);
  for (const s of st) { if (MGA !== A) return; const e = $('#dign'); if (e) { e.textContent = s; e.classList.remove('pop'); void e.offsetWidth; e.classList.add('pop'); } await mSleep(t); if (e) e.textContent = ''; await mSleep(200); }
  if (MGA !== A) return; A.lock = false;
  $('#mgb').innerHTML = `<p class="mtq">${L('Quin és el total?', '¿Cuál es el total?')}</p><div class="digin" id="digi">&nbsp;</div><div class="mpad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫', 0, 'OK'].map(k => `<button class="${k === 'OK' ? 'kok' : ''}" onclick="cadK('${k}')">${k}</button>`).join('')}</div>`;
}
async function cadK(k) {
  const A = MGA; if (!A || A.lock) return;
  if (k === '⌫') A.inp = A.inp.slice(0, -1); else if (k !== 'OK' && A.inp.length < 4) A.inp += k;
  const el = $('#digi'); el.innerHTML = A.inp || '&nbsp;'; if (k !== 'OK' || !A.inp) return;
  A.lock = true; const ok = +A.inp === A.r; el.className = 'digin ' + (ok ? 'ok' : 'ko'); if (!ok) el.textContent = `${L('Era', 'Era')} ${A.r}`;
  ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(ok ? 800 : 1500); if (MGA === A) cadNext();
}

/* ---------- 22. Sèries (raonament: trobar la regla) ---------- */
function serQ(lv) {
  const kinds = lv <= 2 ? ['ari'] : lv <= 4 ? ['ari', 'ari', 'geo', 'dec'] : lv <= 6 ? ['ari', 'geo', 'dec', 'inc', 'alt'] : ['geo', 'inc', 'alt', 'sq', 'fib', 'ma'];
  const k = mpick(kinds); let s = [], ans, d;
  if (k === 'ari') { d = mri(2, lv <= 2 ? 5 : 12); const a = mri(1, 20); s = [0, 1, 2, 3].map(i => a + i * d); ans = a + 4 * d; }
  if (k === 'dec') { d = mri(2, 9); const a = mri(40, 90); s = [0, 1, 2, 3].map(i => a - i * d); ans = a - 4 * d; }
  if (k === 'geo') { const r = mpick([2, 2, 3]), a = mri(1, r === 2 ? 6 : 3); s = [0, 1, 2, 3].map(i => a * r ** i); ans = a * r ** 4; d = r; }
  if (k === 'inc') { const a = mri(1, 10), st = mri(1, 3); s = [a]; for (let i = 1; i < 5; i++) s.push(s[i - 1] + st + i - 1); ans = s.pop(); d = 1; }
  if (k === 'alt') { const a = mri(10, 30), u = mri(3, 9), v = mri(1, u - 1); s = [a, a + u, a + u - v, a + 2 * u - v, a + 2 * u - 2 * v]; ans = a + 3 * u - 2 * v; d = u; }
  if (k === 'sq') { const a = mri(1, 5); s = [0, 1, 2, 3].map(i => (a + i) ** 2); ans = (a + 4) ** 2; d = 2 * (a + 4) - 1; }
  if (k === 'fib') { const a = mri(1, 4), b = mri(a, 6); s = [a, b]; while (s.length < 5) s.push(s[s.length - 1] + s[s.length - 2]); ans = s[4] + s[3]; d = s[4] - s[3]; }
  if (k === 'ma') { const a = mri(1, 4), c = mpick([1, -1]); s = [a]; for (let i = 1; i < 4; i++) s.push(s[i - 1] * 2 + c); ans = s[3] * 2 + c; d = 2; }
  const last = s[s.length - 1], dis = [ans + 1, ans - 1, ans + d, ans - d, last + (s[s.length - 1] - s[s.length - 2]), ans + 2, ans * 2].filter(v => v !== ans && v >= 0);
  const opts = mshuf([ans, ...mshuf([...new Set(dis)]).slice(0, 3)]);
  return { s, ans, opts };
}
function serGo() { MGA = { ...MGA, lv: mDlv('ser'), q: 0, ok: 0 }; serNext(); }
function serNext() {
  const A = MGA; if (A.q >= 8) return mEnd('ser', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 sèries.`, `${A.ok} de 8 series.`));
  A.q++; A.cur = serQ(A.lv); mSet(`${A.q}/8`);
  $('#mgb').innerHTML = `<p class="mtq">${L('Quin número ve després?', '¿Qué número viene después?')}</p><p class="serq">${A.cur.s.join(', ')}, <b>?</b></p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="serTap(${i})">${o}</button>`).join('')}</div>`;
}
async function serTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ai = A.cur.opts.indexOf(A.cur.ans), ok = i === ai;
  b[ai].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  const q = $('.serq'); if (q) q.innerHTML = `${A.cur.s.join(', ')}, <b>${A.cur.ans}</b>`;
  await mSleep(ok ? 1000 : 1700); if (MGA === A) { A.lock = false; serNext(); }
}

/* ---------- 23. Sinònims i contraris (vocabulari) ---------- */
const MSIN = {
  ca: [['ràpid', 'veloç'], ['content', 'alegre'], ['començar', 'iniciar'], ['acabar', 'finalitzar'], ['enorme', 'gegantí'], ['bonic', 'formós'], ['ajudar', 'auxiliar'], ['pujar', 'ascendir'], ['mirar', 'observar'], ['tornar', 'regressar'],
    ['trist', 'afligit'], ['vell', 'antic'], ['cansat', 'esgotat'], ['valent', 'coratjós'], ['quiet', 'tranquil'], ['enfadat', 'enutjat'], ['ric', 'adinerat'], ['difícil', 'complicat'], ['escollir', 'triar'], ['amagar', 'ocultar'],
    ['petit', 'menut'], ['fosc', 'obscur'], ['rostre', 'cara'], ['casa', 'llar'], ['feina', 'treball'], ['por', 'temor'], ['parlar', 'conversar'], ['desitjar', 'anhelar']],
  es: [['rápido', 'veloz'], ['contento', 'alegre'], ['empezar', 'comenzar'], ['terminar', 'finalizar'], ['enorme', 'gigantesco'], ['bonito', 'hermoso'], ['ayudar', 'auxiliar'], ['subir', 'ascender'], ['mirar', 'observar'], ['volver', 'regresar'],
    ['triste', 'afligido'], ['viejo', 'antiguo'], ['cansado', 'agotado'], ['valiente', 'valeroso'], ['tranquilo', 'sosegado'], ['enfadado', 'enojado'], ['rico', 'adinerado'], ['difícil', 'complicado'], ['elegir', 'escoger'], ['esconder', 'ocultar'],
    ['pequeño', 'diminuto'], ['oscuro', 'sombrío'], ['rostro', 'cara'], ['casa', 'hogar'], ['trabajo', 'empleo'], ['miedo', 'temor'], ['hablar', 'conversar'], ['desear', 'anhelar']]
};
const MANT = {
  ca: [['alt', 'baix'], ['ple', 'buit'], ['obrir', 'tancar'], ['calent', 'fred'], ['ràpid', 'lent'], ['fort', 'feble'], ['guanyar', 'perdre'], ['entrar', 'sortir'], ['gros', 'prim'], ['dolç', 'amarg'], ['net', 'brut'], ['amic', 'enemic'], ['aviat', 'tard'], ['pujar', 'baixar'], ['recordar', 'oblidar'], ['comprar', 'vendre']],
  es: [['alto', 'bajo'], ['lleno', 'vacío'], ['abrir', 'cerrar'], ['caliente', 'frío'], ['rápido', 'lento'], ['fuerte', 'débil'], ['ganar', 'perder'], ['entrar', 'salir'], ['gordo', 'delgado'], ['dulce', 'amargo'], ['limpio', 'sucio'], ['amigo', 'enemigo'], ['pronto', 'tarde'], ['subir', 'bajar'], ['recordar', 'olvidar'], ['comprar', 'vender']]
};
function sinGo() { const lg = LANG === 'es' ? 'es' : 'ca'; MGA = { ...MGA, q: 0, ok: 0, syn: mshuf([...MSIN[lg]]), ant: mshuf([...MANT[lg]]), lv: mDlv('sin') }; sinNext(); }
function sinNext() {
  const A = MGA; if (A.q >= 8) return mEnd('sin', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  const anti = A.q % 2 === 1, deck = anti ? A.ant : A.syn, [w, r] = deck[Math.floor(A.q / 2)];
  const others = mshuf(deck.filter(x => x[0] !== w && x[1] !== r && x[0] !== r && x[1] !== w).flatMap(x => anti ? [x[0], x[1]] : [x[1]])).slice(0, 3);
  A.q++; A.opts = mshuf([r, ...others]); A.ans = A.opts.indexOf(r); mSet(`${A.q}/8`);
  $('#mgb').innerHTML = `<p class="mtq">${anti ? L('Quin és el <b>contrari</b> de…', '¿Cuál es el <b>contrario</b> de…') : L('Quina paraula vol dir el <b>mateix</b> que…', '¿Qué palabra significa lo <b>mismo</b> que…')}</p><p class="sinw">${w}</p><div class="copts">${A.opts.map((o, i) => `<button class="mopt copt" onclick="sinTap(${i})">${o}</button>`).join('')}</div>`;
}
async function sinTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.ans;
  b[A.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(1100); if (MGA === A) { A.lock = false; sinNext(); }
}

/* ---------- 24. Iguals o diferents (velocitat de comparació, com la «pattern comparison» de Salthouse) ---------- */
const MIGU = 'ABCDEFGHJKLMNPRSTUVXZ2345679'.split('');
function iguGo() {
  MGA = { ...MGA, lv: mLvl('igu'), ok: 0, ko: 0 };
  $('#mgb').innerHTML = `<p class="mtq">${L('Són iguals?', '¿Son iguales?')}</p><div class="igub"><span id="igu1"></span><span id="igu2"></span></div><div class="copts"><button class="mopt copt" onclick="iguA(1)">${L('Iguals', 'Iguales')}</button><button class="mopt copt" onclick="iguA(0)">${L('Diferents', 'Diferentes')}</button></div>`;
  iguNext(); mTimer(45, iguEnd, () => `✓ ${MGA.ok}`);
}
function iguNext() {
  const A = MGA, n = Math.min(8, 3 + Math.floor(A.lv / 2)), a = [...Array(n)].map(() => mpick(MIGU));
  const b = [...a]; A.same = mrnd() < .5;
  if (!A.same) {
    const i = mri(0, n - 1);
    // als nivells alts, de vegades dues lletres canviades d'ordre (costa més de veure)
    if (A.lv >= 5 && mrnd() < .45 && i < n - 1 && a[i] !== a[i + 1]) [b[i], b[i + 1]] = [b[i + 1], b[i]];
    else { let c; do c = mpick(MIGU); while (c === a[i]); b[i] = c; }
  }
  const e1 = $('#igu1'), e2 = $('#igu2'); if (!e1) return;
  e1.textContent = a.join(''); e2.textContent = b.join('');
  [e1, e2].forEach(e => { e.classList.remove('pop'); void e.offsetWidth; e.classList.add('pop'); });
}
function iguA(v) { const A = MGA; if (!A || A.same == null) return; const ok = !!v === A.same; ok ? (A.ok++, SFX.tap && SFX.tap()) : (A.ko++, SFX.ko && SFX.ko()); mFlash($$('.copt')[v ? 0 : 1], ok); iguNext(); }
function iguEnd() { clearInterval(MGA_TK); const A = MGA; A.same = null; mEnd('igu', A.ok, A.ok >= 24 && A.ko <= 2 ? 1 : A.ok <= 11 || A.ko >= 6 ? -1 : 0, L(`${A.ok} encerts${A.ko ? ` i ${A.ko} ${A.ko === 1 ? 'error' : 'errors'}` : ''} en 45 segons.`, `${A.ok} aciertos${A.ko ? ` y ${A.ko} ${A.ko === 1 ? 'error' : 'errores'}` : ''} en 45 segundos.`)); }

/* ---------- 25. On era? (memòria d'objectes i llocs) ---------- */
function onnGo() { MGA = { ...MGA, lv: mLvl('onn'), round: 0, ok: 0, tot: 0 }; onnRound(); }
async function onnRound() {
  const A = MGA; if (!A || MGCUR !== 'onn') return;
  if (A.round >= 3) { const pct = Math.round(100 * A.ok / A.tot); return mEnd('onn', pct, pct >= 90 ? 1 : pct < 60 ? -1 : 0, L(`Has recordat on eren ${A.ok} de ${A.tot} objectes.`, `Has recordado dónde estaban ${A.ok} de ${A.tot} objetos.`)); }
  A.round++; const N = A.lv <= 4 ? 3 : 4, k = Math.min(N * N - 3, 3 + Math.floor(A.lv / 2));
  const cells = mshuf([...Array(N * N).keys()]).slice(0, k), pics = mshuf([...MPIC]).slice(0, k);
  A.N = N; A.at = {}; cells.forEach((c, i) => A.at[c] = pics[i]);
  A.ask = mshuf(cells.map((c, i) => [c, pics[i]])).slice(0, 3); A.q = 0; A.tot += A.ask.length; A.lock = true;
  mSet(`${L('Ronda', 'Ronda')} ${A.round}/3`);
  const t = 2500 + k * 900;
  $('#mgb').innerHTML = `<p class="mtq">${L('Memoritza on és cada cosa', 'Memoriza dónde está cada cosa')}</p><div class="onng" style="--c:${N}">${[...Array(N * N).keys()].map(i => `<div class="onnc">${A.at[i] || ''}</div>`).join('')}</div><div class="llibar"><i style="animation-duration:${t / 1000}s"></i></div>`;
  await mSleep(t); if (MGA === A) onnAsk();
}
function onnAsk() {
  const A = MGA; if (A.q >= A.ask.length) return onnRound();
  A.lock = false;
  $('#mgb').innerHTML = `<p class="mtq">${L('On era…', '¿Dónde estaba…')}</p><p class="onnq">${A.ask[A.q][1]}</p><div class="onng" style="--c:${A.N}">${[...Array(A.N * A.N).keys()].map(i => `<button class="onnc" id="oc${i}" onclick="onnTap(${i})"></button>`).join('')}</div>`;
}
async function onnTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true;
  const [c, pic] = A.ask[A.q], ok = i === c, e = $('#oc' + c);
  e.classList.add('okc'); e.textContent = pic; if (!ok) $('#oc' + i).classList.add('koc');
  ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(ok ? 800 : 1400); if (MGA === A) { A.q++; onnAsk(); }
}

/* ---------- 26. A ull (estimació: arrodonir i calcular aproximadament) ---------- */
const mNum = v => Math.round(v).toLocaleString(mLoc());
function estQ(lv) {
  const t = mpick(lv <= 2 ? ['add', 'add', 'mul'] : lv <= 5 ? ['add', 'mul', 'pct', 'mul'] : lv <= 8 ? ['mul', 'pct', 'mul2', 'div'] : ['mul2', 'pct', 'div', 'mix']);
  let q, v;
  if (t === 'add') { const a = mri(120, 899), b = mri(120, 899); q = `${a} + ${b}`; v = a + b; }
  if (t === 'mul') { const a = mri(12, 99), b = mri(3, 9); q = `${a} × ${b}`; v = a * b; }
  if (t === 'pct') { const p = mpick([10, 15, 20, 25, 30, 75]), b = mri(12, 95) * 10 + mri(1, 9); q = `${p} % ${L('de', 'de')} ${mNum(b)}`; v = p * b / 100; }
  if (t === 'mul2') { const a = mri(21, 98), b = mri(21, 98); q = `${a} × ${b}`; v = a * b; }
  if (t === 'div') { const b = mri(3, 9), a = mri(40, 300) * b + mri(0, b - 1); q = `${mNum(a)} : ${b}`; v = a / b; }
  if (t === 'mix') { const a = mri(21, 89), b = mri(3, 9), c = mri(110, 890); q = `${a} × ${b} + ${c}`; v = a * b + c; }
  // totes les opcions arrodonides igual, perquè no es pugui endevinar per la xifra de les unitats
  const g = v >= 1000 ? 100 : v >= 100 ? 10 : 1, r = x => Math.max(g, Math.round(x / g) * g), ans = r(v);
  const f = lv <= 3 ? [.3, .5, .7] : lv <= 6 ? [.2, .35, .5] : [.12, .22, .35];
  const dis = mshuf([r(v * (1 + f[0])), r(v * (1 - f[0])), r(v * (1 + f[1])), r(v * (1 - f[1])), r(v * (1 + f[2]))]);
  const opts = [ans]; for (const d of dis) if (opts.length < 3 && !opts.includes(d)) opts.push(d);
  return { q, ans, opts: mshuf(opts) };
}
function estGo() { MGA = { ...MGA, lv: mDlv('est'), q: 0, ok: 0 }; estNext(); }
function estNext() {
  const A = MGA; if (A.q >= 8) return mEnd('est', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades a ull.`, `${A.ok} de 8 acertadas a ojo.`));
  A.q++; A.cur = estQ(A.lv); A.lock = false; mSet(`${A.q}/8`);
  const ms = Math.max(4500, 9000 - A.lv * 450);
  $('#mgb').innerHTML = `<p class="mtq">${L('Quin és el resultat més proper?', '¿Cuál es el resultado más cercano?')}</p><p class="serq">${A.cur.q} ≈ <b>?</b></p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="estTap(${i})">${mNum(o)}</button>`).join('')}</div><div class="llibar"><i style="animation-duration:${ms / 1000}s"></i></div>`;
  A.to = setTimeout(() => estTap(-1), ms);
}
async function estTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; clearTimeout(A.to); const bar = $('.llibar i'); if (bar) bar.style.animationPlayState = 'paused';
  const b = $$('.copt'), ai = A.cur.opts.indexOf(A.cur.ans), ok = i === ai;
  b[ai].classList.add('okc'); if (i >= 0 && !ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  if (i < 0) { const q = $('.mtq'); if (q) q.textContent = L('Temps! Era aquesta:', '¡Tiempo! Era esta:'); }
  await mSleep(ok ? 900 : 1600); if (MGA === A) estNext();
}

/* ---------- 27. Qui és el més gran? (raonament: deduir un ordre a partir de comparacions) ---------- */
// als noms de MNOM, els parells són de dona i els senars d'home (per a l'article en català)
const mArt = (i, cap) => { const n = MNOM.ca[i], a = /^[AEIOUÀÈÉÍÒÓÚ]/i.test(n) ? "l'" : i % 2 ? 'en ' : 'la '; return (cap ? a[0].toUpperCase() + a.slice(1) : a) + n; };
function dedQ(lv) {
  const es = LANG === 'es', k = lv <= 3 ? 3 : lv <= 7 ? 4 : 5, p = mshuf([...Array(MNOM.ca.length).keys()]).slice(0, k); // p[0] és el més gran
  const nm = (i, cap) => es ? MNOM.es[i] : mArt(i, cap);
  let pr = [];
  for (let j = 0; j < k - 1; j++) {
    const a = p[j], b = p[j + 1], inv = lv >= 5 && mrnd() < .5;
    pr.push(inv ? (es ? `${nm(b)} es más joven que ${nm(a)}.` : `${nm(b, 1)} és més jove que ${nm(a)}.`) : (es ? `${nm(a)} es mayor que ${nm(b)}.` : `${nm(a, 1)} és més gran que ${nm(b)}.`));
  }
  if (lv >= 3) pr = mshuf(pr);
  const kind = mpick(k >= 4 && lv >= 6 ? ['old', 'young', 'second'] : ['old', 'young']);
  const ans = kind === 'old' ? p[0] : kind === 'young' ? p[k - 1] : p[1];
  const qq = { old: L('Qui és el més gran?', '¿Quién es el mayor?'), young: L('Qui és el més jove?', '¿Quién es el más joven?'), second: L('Qui és el segon més gran?', '¿Quién es el segundo mayor?') }[kind];
  const opts = mshuf([...p]);
  return { pr, qq, opts: opts.map(i => MNOM[es ? 'es' : 'ca'][i]), ans: opts.indexOf(ans) };
}
function dedGo() { MGA = { ...MGA, lv: mDlv('ded'), q: 0, ok: 0 }; dedNext(); }
function dedNext() {
  const A = MGA; if (A.q >= 8) return mEnd('ded', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 deduccions encertades.`, `${A.ok} de 8 deducciones acertadas.`));
  A.q++; A.cur = dedQ(A.lv); A.lock = false; mSet(`${A.q}/8`);
  $('#mgb').innerHTML = `<div class="dedp">${A.cur.pr.map(t => `<p>${t}</p>`).join('')}</div><p class="mtq">${A.cur.qq}</p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="dedTap(${i})">${o}</button>`).join('')}</div>`;
}
async function dedTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.cur.ans;
  b[A.cur.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  await mSleep(ok ? 1000 : 2200); if (MGA === A) dedNext();
}

/* ---------- 28. La que sobra (vocabulari i categories) ---------- */
const MSOB = {
  ca: [['fruites', 'poma pera préssec cirera maduixa taronja meló plàtan raïm albercoc'], ['verdures', 'enciam pastanaga ceba carbassó espinacs bròquil porro api'],
    ['animals de granja', 'vaca porc gallina ovella cabra conill ànec cavall'], ['ocells', 'merla pardal oreneta colom garsa mussol cigonya àguila'],
    ['eines', 'martell tornavís serra alicates trepant escarpra pala tenalles'], ['mobles', 'taula cadira armari sofà llit calaixera prestatgeria tamboret'],
    ['instruments musicals', 'guitarra piano violí flauta trompeta tambor acordió arpa'], ['peces de roba', 'camisa pantalons jaqueta faldilla jersei abric mitjons bufanda'],
    ['oficis', 'fuster pagès forner mestre cuiner pintor lampista bomber'], ['colors', 'vermell blau verd groc morat gris marró blanc'],
    ['parts del cos', 'braç cama genoll colze espatlla turmell canell front'], ['esports', 'futbol tennis bàsquet natació ciclisme golf handbol esquí'],
    ['flors', 'rosa clavell gira-sol tulipa margarida lliri gessamí orquídia'], ['begudes', 'aigua suc cafè te llet vi cervesa orxata'],
    ['vehicles', 'cotxe autobús tren moto bicicleta camió tramvia furgoneta'], ['estris de cuina', 'cassola paella cullera forquilla ganivet colador bol olla']],
  es: [['frutas', 'manzana pera melocotón cereza fresa naranja melón plátano uva albaricoque'], ['verduras', 'lechuga zanahoria cebolla calabacín espinacas brócoli puerro apio'],
    ['animales de granja', 'vaca cerdo gallina oveja cabra conejo pato caballo'], ['pájaros', 'mirlo gorrión golondrina paloma urraca búho cigüeña águila'],
    ['herramientas', 'martillo destornillador sierra alicates taladro cincel pala tenazas'], ['muebles', 'mesa silla armario sofá cama cómoda estantería taburete'],
    ['instrumentos musicales', 'guitarra piano violín flauta trompeta tambor acordeón arpa'], ['prendas de ropa', 'camisa pantalones chaqueta falda jersey abrigo calcetines bufanda'],
    ['oficios', 'carpintero agricultor panadero maestro cocinero pintor fontanero bombero'], ['colores', 'rojo azul verde amarillo morado gris marrón blanco'],
    ['partes del cuerpo', 'brazo pierna rodilla codo hombro tobillo muñeca frente'], ['deportes', 'fútbol tenis baloncesto natación ciclismo golf balonmano esquí'],
    ['flores', 'rosa clavel girasol tulipán margarita lirio jazmín orquídea'], ['bebidas', 'agua zumo café té leche vino cerveza horchata'],
    ['vehículos', 'coche autobús tren moto bicicleta camión tranvía furgoneta'], ['utensilios de cocina', 'cazuela sartén cuchara tenedor cuchillo colador bol olla']]
};
// parelles de grups propers (als nivells alts costa més de veure quina sobra): índexs de MSOB
const MSOBP = [[0, 1], [2, 3], [4, 15], [0, 12], [7, 10], [11, 14], [8, 4], [13, 0]];
function sobQ(lv) {
  const G = MSOB[LANG === 'es' ? 'es' : 'ca'];
  let a, b; if (lv >= 5 && mrnd() < .6) { [a, b] = mpick(MSOBP); if (mrnd() < .5) [a, b] = [b, a]; } else { a = mri(0, G.length - 1); do b = mri(0, G.length - 1); while (b === a); }
  const n = lv >= 7 ? 5 : 3, ws = mshuf(G[a][1].split(' ')).slice(0, n), odd = mpick(G[b][1].split(' ').filter(w => !G[a][1].split(' ').includes(w)));
  const opts = mshuf([...ws, odd]);
  return { opts, ans: opts.indexOf(odd), cat: G[a][0] };
}
function sobGo() { MGA = { ...MGA, lv: mDlv('sob'), q: 0, ok: 0 }; sobNext(); }
function sobNext() {
  const A = MGA; if (A.q >= 8) return mEnd('sob', A.ok, A.ok >= 7 ? 1 : A.ok <= 4 ? -1 : 0, L(`${A.ok} de 8 encertades.`, `${A.ok} de 8 acertadas.`));
  A.q++; A.cur = sobQ(A.lv); A.lock = false; mSet(`${A.q}/8`);
  $('#mgb').innerHTML = `<p class="mtq">${L('Quina paraula sobra?', '¿Qué palabra sobra?')}</p><div class="copts">${A.cur.opts.map((o, i) => `<button class="mopt copt" onclick="sobTap(${i})">${o}</button>`).join('')}</div><p class="mmut sobw" id="sobw"></p>`;
}
async function sobTap(i) {
  const A = MGA; if (!A || A.lock) return; A.lock = true; const b = $$('.copt'), ok = i === A.cur.ans;
  b[A.cur.ans].classList.add('okc'); if (!ok) b[i].classList.add('koc'); ok ? (A.ok++, SFX.ok && SFX.ok()) : SFX.ko && SFX.ko();
  const w = $('#sobw'); if (w) w.textContent = L(`Sobra «${A.cur.opts[A.cur.ans]}»: les altres són ${A.cur.cat}.`, `Sobra «${A.cur.opts[A.cur.ans]}»: las otras son ${A.cur.cat}.`);
  await mSleep(ok ? 1500 : 2400); if (MGA === A) sobNext();
}

/* ---------- Test de la ment: 4 proves i una edat orientativa ----------
   Reflexos (temps de reacció), Símbols i números (velocitat de processament), Dígits (memòria de treball verbal)
   i Seqüències (memòria de treball visoespacial). Cada resultat es compara amb la tendència mitjana per edats
   que descriuen els estudis de normes (vegeu MNORM) i la mitjana de les quatre dona l'edat orientativa. */
let MT = null;
const MTEST = ['rfx', 'sim', 'dig', 'mem'];
function mTestIntro() {
  mStop(); VIEW = 'mgame'; MGCUR = null; const m = MS(), yr = new Date().getFullYear();
  MT = { i: 0, r: {}, born: m.born || null };
  mGameShell('rfx', '', `<div class="mintro">${mTile('ment', 'ink')}<h2>${L('Test de la ment', 'Test de la mente')}</h2>
    <p>${L('Quatre proves curtes, uns 4 minuts: <b>reflexos</b>, <b>símbols i números</b>, <b>dígits</b> i <b>seqüències</b>. Fes-lo tranquil·lament, en un lloc sense distraccions.', 'Cuatro pruebas cortas, unos 4 minutos: <b>reflejos</b>, <b>símbolos y números</b>, <b>dígitos</b> y <b>secuencias</b>. Hazlo con calma, en un sitio sin distracciones.')}</p>
    ${m.born ? '' : `<div class="mbirth"><p class="mmut" style="margin:0">${L("En quin any vas néixer? El farem servir només per comparar el resultat amb la teva edat.", '¿En qué año naciste? Solo lo usaremos para comparar el resultado con tu edad.')}</p><select id="mtborn"><option value="">${L('Prefereixo no dir-ho', 'Prefiero no decirlo')}</option>${[...Array(83).keys()].map(i => yr - 18 - i).map(y => `<option ${y === yr - 60 ? 'selected' : ''}>${y}</option>`).join('')}</select></div>`}
    <p class="mmut">${L('És un resultat orientatiu per seguir la teva evolució; no és cap prova mèdica.', 'Es un resultado orientativo para seguir tu evolución; no es ninguna prueba médica.')}</p>
    <button class="btn big mbtn" onclick="mTestGo()">${L('Comença el test', 'Empieza el test')}</button></div>`, L('Test de la ment', 'Test de la mente'));
}
function mTestGo() { const s = $('#mtborn'); if (s) { MS().born = +s.value || 0; MT.born = MS().born; save(); } mTestNext(); }
function mTestNext() {
  if (!MT) return go('home');
  if (MT.i >= MTEST.length) return mTestFin();
  const g = MTEST[MT.i]; mStop(); MGCUR = g; VIEW = 'mgame';
  mGameShell(g, '', `<div class="mintro"><div class="mtbar" style="margin:0 auto 14px">${MTEST.map((_, i) => `<i class="${i <= MT.i ? 'on' : ''}"></i>`).join('')}</div><p class="mstep">${L(`Prova ${MT.i + 1} de 4`, `Prueba ${MT.i + 1} de 4`)}</p>${mGic(g)}<h2>${tx(MG[g].n)}</h2>${mHow(g)}
    ${'speechSynthesis' in window ? `<button class="btn ghost mspeak" onclick="mSpeak('${g}')">${mSvg('so', 'mico')} ${L("Escolta-ho", 'Escúchalo')}</button>` : ''}<button class="btn big mbtn" onclick="MGA={test:true};mStart('${g}')">${L('Comença', 'Empieza')}</button></div>`, L('Test de la ment', 'Test de la mente'));
  MGA = { test: true };
}
function mTestStep(g, score) {
  mStop(); if (!MT) return go('home');
  MT.r[g] = score; MT.i++; mTestNext();
}
/* Com es calcula (vegeu mentCiencia() per a les fonts):
   1) Cada prova es passa a una puntuació z respecte d'una referència de 60 anys (MAGER: mitjana i desviació a l'app).
   2) Pendents de canvi amb l'edat, en desviacions per any (Park et al. 2002; Kiely et al. 2014 per a la rapidesa després dels 55):
      rapidesa ~0,05, blocs (Corsi) 0,025, dígits 0,013. Edat equivalent = 60 − Σ(b·z)/Σb² (mínims quadrats).
   3) Com que persones de la mateixa edat difereixen molt (error típic de ±15-20 anys), s'acosta a l'edat real a la meitat,
      com a màxim ±12 anys, i es mostra amb una franja. 4) Als tests repetits es descompta la millora que ve només de
      conèixer les proves (efecte pràctica, Bartels 2010; Goldberg 2015).
   Les mitjanes de MAGER són provisionals (adaptades de normes publicades al format del mòbil): quan hi hagi prou
   dades de l'app s'han de substituir per normes pròpies. */
const MAGER = { rfx: { mu: 600, sd: 110, b: .05, low: true }, sim: { mu: 26, sd: 6, b: .05 }, dig: { mu: 5, sd: 1, b: .013 }, mem: { mu: 5, sd: 1, b: .025 } };
function mAgeCalc(r, real, nPrev) {
  const prac = .3 * (1 - Math.exp(-nPrev / 2.5)), z = {};
  let num = 0, den = 0;
  for (const g of MTEST) { const R = MAGER[g]; if (r[g] == null) continue; let v = (r[g] - R.mu) / R.sd; if (R.low) v = -v; v = Math.max(-3, Math.min(3, v - prac)); z[g] = v; num += R.b * v; den += R.b * R.b; }
  const A = den ? 60 - num / den : 60, E = real || 60;
  let age = E + .5 * (A - E); age = Math.max(E - 12, Math.min(E + 12, age)); age = Math.round(Math.max(real ? 20 : 30, Math.min(90, age)));
  const rel = g => z[g] == null ? 0 : z[g] + MAGER[g].b * ((real || age) - 60);
  return { age, z, rel };
}
function mTestFin() {
  const m = MS(), r = MT.r, real = m.born ? new Date().getFullYear() - m.born : null;
  const nPrev = m.tests.filter(x => x.d !== today()).length, { age, z, rel } = mAgeCalc(r, real, nPrev);
  const vel = (rel('rfx') + rel('sim')) / 2, mem = (rel('dig') + rel('mem')) / 2;
  m.focus = vel < mem ? 'vel' : 'mem';
  const t = { d: today(), age, real, r, z };
  const same = m.tests.findIndex(x => x.d === t.d); if (same >= 0) m.tests[same] = t; else m.tests.push(t); if (m.tests.length > 30) m.tests.shift();
  const d = mDay(); d.ses = null; mSession();
  P.xp = (P.xp || 0) + 30; mFitesNew(); touchStreak(); save(); syncNow(); MT = null; MGA = null;
  mAgeInfo(true);
}
// detall de l'últim test (i del primer, per comparar)
function mAgeInfo(fresh) {
  const m = MS(), T = m.tests, t = T[T.length - 1]; if (!t) return mTestIntro();
  mStop(); VIEW = 'mgame';
  const lab = { rfx: L('Reflexos', 'Reflejos'), sim: L('Símbols i números', 'Símbolos y números'), dig: L('Dígits', 'Dígitos'), mem: L('Seqüències', 'Secuencias') };
  const val = { rfx: v => `${v} ms`, sim: v => L(`${v} encerts`, `${v} aciertos`), dig: v => L(`${v} números`, `${v} números`), mem: v => L(`${v} caselles`, `${v} casillas`) };
  const zr = g => t.z && t.z[g] != null ? t.z[g] + MAGER[g].b * ((t.real || t.age) - 60) : 0;
  const cmp = g => { const v = zr(g); return v > .5 ? L(`per sobre de la mitjana ${t.real ? 'de la teva edat' : 'de la teva franja'}`, `por encima de la media ${t.real ? 'de tu edad' : 'de tu franja'}`) : v < -.5 ? L('per sota de la mitjana: bon punt per entrenar', 'por debajo de la media: buen punto para entrenar') : L('dins de la mitjana', 'dentro de la media'); };
  const fo = m.focus, foTxt = { vel: L('la <b>rapidesa</b>', 'la <b>rapidez</b>'), mem: L('la <b>memòria</b>', 'la <b>memoria</b>'), ate: L("l'<b>atenció</b>", 'la <b>atención</b>') }[fo];
  const first = T.length > 1 ? T[0] : null, dif = t.real ? t.real - t.age : null;
  mGameShell('rfx', '', `<div class="mres" style="max-width:520px"><div class="mageres"><p class="mstep" style="color:#8FE3CF">${L('Edat de la ment · orientativa', 'Edad de la mente · orientativa')}</p>${mGauge(t.age, t.real)}<p style="margin:-2px 0 10px;font-weight:700">${L(`Franja orientativa: ${t.age - 5}–${t.age + 5} anys`, `Franja orientativa: ${t.age - 5}–${t.age + 5} años`)}</p>
      <p>${dif == null ? L('Rendiment semblant a la mitjana de les persones d\'aquesta edat.', 'Rendimiento parecido a la media de las personas de esta edad.') : dif >= 3 ? L(`${dif} anys menys que la teva edat real (${t.real}). Molt bé!`, `${dif} años menos que tu edad real (${t.real}). ¡Muy bien!`) : dif <= -3 ? L(`Una mica per sobre de la teva edat real (${t.real}). Entrenant cada dia és normal anar millorant.`, `Algo por encima de tu edad real (${t.real}). Entrenando cada día es normal ir mejorando.`) : L(`Molt a prop de la teva edat real (${t.real}).`, `Muy cerca de tu edad real (${t.real}).`)}</p></div>
    <div class="mtres mtcard" style="margin-top:14px">${MTEST.map(g => `<div class="mdrow2"><b>${lab[g]}</b><span>${val[g](t.r[g])}</span><small class="mmut" style="grid-column:1/3">${cmp(g)}</small></div>`).join('')}</div>
    ${first ? `<p class="mmut">${L(`Primer test (${dayShort(first.d)}): ${first.age} anys.`, `Primer test (${dayShort(first.d)}): ${first.age} años.`)}</p>` : ''}
    <div class="mtcard" style="text-align:left"><b>${L('Com l\'entrenem', 'Cómo la entrenamos')}</b><p style="font-size:17px;margin:6px 0 0">${L(`A les sessions et posarem més jocs per treballar ${foTxt}, sense deixar la resta. Torna a fer el test d'aquí a dues setmanes per veure l'evolució.`, `En las sesiones te pondremos más juegos para trabajar ${foTxt}, sin dejar el resto. Vuelve a hacer el test dentro de dos semanas para ver la evolución.`)}</p></div>
    <p class="mmut" style="font-size:14.5px">${L("Resultat orientatiu: compara les teves proves amb com canvien de mitjana la rapidesa i la memòria amb l'edat. Persones de la mateixa edat poden ser molt diferents, per això et donem una franja. Als tests repetits descomptem la millora que ve només de conèixer les proves. No és cap diagnòstic: si et preocupa la memòria, parla-ho amb el metge.", 'Resultado orientativo: compara tus pruebas con cómo cambian de media la rapidez y la memoria con la edad. Personas de la misma edad pueden ser muy distintas, por eso te damos una franja. En los tests repetidos descontamos la mejora que viene solo de conocer las pruebas. No es ningún diagnóstico: si te preocupa la memoria, háblalo con el médico.')}</p>
    <button class="btn big mbtn" onclick="go('home')">${fresh ? L('Comença a entrenar', 'Empieza a entrenar') : L('Torna', 'Vuelve')}</button>
    <button class="btn ghost big mbtn mshare" style="margin-top:10px" onclick="mShare('edat')">${mSvg('compartir')} ${L('Comparteix el resultat', 'Comparte el resultado')}</button></div>`, L('Edat de la ment', 'Edad de la mente'));
  if (fresh && typeof confetti === 'function') confetti(60);
}
const dayShort = d => new Date(d + 'T12:00').toLocaleDateString(mLoc(), { day: 'numeric', month: 'short' });

/* ---------- Constància: fites i recordatori ---------- */
const MFITES = [
  ['s1', 'Primera sessió completa|Primera sesión completa', m => mSessions() >= 1],
  ['t1', 'Primer test de la ment|Primer test de la mente', m => m.tests.length >= 1],
  ['r3', '3 dies seguits|3 días seguidos', m => (P.best || 0) >= 3],
  ['w1', 'Objectiu setmanal complert|Objetivo semanal cumplido', m => mWeekN() >= m.goal || mWeekN(mMonday(new Date(Date.now() - 7 * 864e5))) >= m.goal],
  ['r7', '7 dies seguits|7 días seguidos', m => (P.best || 0) >= 7],
  ['s10', '10 sessions|10 sesiones', m => mSessions() >= 10],
  ['h10', '10 hàbits fora de la pantalla|10 hábitos fuera de la pantalla', m => Object.values(m.days).filter(x => x.hab).length >= 10],
  ['t2', 'Segon test de la ment|Segundo test de la mente', m => m.tests.length >= 2],
  ['j', 'Has provat tots els jocs|Has probado todos los juegos', m => Object.keys(MG).every(g => m.hist[g])],
  ['r30', '30 dies seguits|30 días seguidos', m => (P.best || 0) >= 30],
  ['s50', '50 sessions|50 sesiones', m => mSessions() >= 50],
  ['s100', '100 sessions|100 sesiones', m => mSessions() >= 100]
];
function mFitesNew() { const m = MS(), seen = m.fit = Array.isArray(m.fit) ? m.fit : []; const nw = MFITES.filter(f => !seen.includes(f[0]) && f[2](m)); nw.forEach(f => seen.push(f[0])); return nw[0] || null; }
// recordatori: un esdeveniment diari al calendari del mòbil (.ics), sense notificacions ni dades al servidor
function mRemind() {
  modal(`<div class="sheet card"><h3>${L('Un recordatori cada dia', 'Un recordatorio cada día')}</h3><p>${L("Et descarregarem un avís per al calendari del mòbil que es repeteix cada dia a l'hora que triïs. L'obres i el calendari te'l guarda.", 'Te descargaremos un aviso para el calendario del móvil que se repite cada día a la hora que elijas. Lo abres y el calendario te lo guarda.')}</p>
    <div class="mseg">${[9, 11, 17, 20].map(h => `<button onclick="mRemindGo(${h})">${h}:00</button>`).join('')}</div></div>`);
}
function mRemindGo(h) {
  const d = new Date(), ymd = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`, uid = `numi-ment-${P.id}@numimates.com`;
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Numi//Numi Ment//CA', 'BEGIN:VEVENT', `UID:${uid}`, `DTSTAMP:${ymd}T000000Z`, `DTSTART:${ymd}T${pad(h)}0000`, `DTEND:${ymd}T${pad(h)}1000`, 'RRULE:FREQ=DAILY',
    `SUMMARY:${L('Numi Ment · 10 minuts per a la ment', 'Numi Ment · 10 minutos para la mente')}`, 'URL:https://ment.numimates.com', `DESCRIPTION:${L('La sessió d\'avui t\'espera', 'La sesión de hoy te espera')}: https://ment.numimates.com`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:Numi Ment`, 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'numi-ment.ics'; document.body.appendChild(a); a.click(); a.remove();
  MS().rem = h; save(); closeModal(); toast(L(`Obre el fitxer per afegir l'avís de les ${h}:00 al calendari.`, `Abre el archivo para añadir el aviso de las ${h}:00 al calendario.`)); if (VIEW === 'home') mentHome(); else if (VIEW === 'profile') mentProfile();
}

/* ---------- Compartir l'evolució (WhatsApp, Instagram…) ----------
   Es dibuixa una imatge amb el mateix estil de l'app (verd fosc i daurat) i es comparteix amb el menú del mòbil;
   si el navegador no pot compartir fitxers, es descarrega i s'obre WhatsApp amb el text. No s'envia res al servidor. */
let MSH = null;
const mShKinds = () => { const m = MS(), k = []; if (m.tests.length) k.push('edat'); if (mSessions() || (P.streak || 0) > 1) k.push('ratxa'); return k.length ? k : ['ratxa']; };
function mShare(kind) {
  const ks = mShKinds(); MSH = { kind: ks.includes(kind) ? kind : ks[0], fmt: (MSH && MSH.fmt) || 'post' };
  modal(`<div class="sheet mcsheet"><h3>${L('Comparteix la teva evolució', 'Comparte tu evolución')}</h3>
    ${ks.length > 1 ? `<div class="mseg mshkind">${ks.map(k => `<button data-k="${k}" class="${k === MSH.kind ? 'on' : ''}" onclick="MSH.kind='${k}';mShDraw()">${k === 'edat' ? L('Edat de la ment', 'Edad de la mente') : L('Constància', 'Constancia')}</button>`).join('')}</div>` : ''}
    <div class="mseg mshkind"><button data-f="post" class="${MSH.fmt === 'post' ? 'on' : ''}" onclick="MSH.fmt='post';mShDraw()">${L('Publicació', 'Publicación')}</button><button data-f="story" class="${MSH.fmt === 'story' ? 'on' : ''}" onclick="MSH.fmt='story';mShDraw()">${L('Història', 'Historia')}</button></div>
    <img class="mshprev" id="mshimg" alt="${L("Imatge per compartir", 'Imagen para compartir')}">
    <button class="btn big mbtn mshare" onclick="mShGo()">${mSvg('compartir')} ${L('Comparteix', 'Compartir')}</button>
    <p class="mmut" style="text-align:center;margin:10px 0 0">${L("Tria WhatsApp, Instagram o on vulguis. Ningú més veu les teves dades.", 'Elige WhatsApp, Instagram o donde quieras. Nadie más ve tus datos.')}</p></div>`);
  mShDraw();
}
let MSH_LOGO = null;
async function mShLogo() {
  if (MSH_LOGO) return MSH_LOGO;
  try { const t = (await (await fetch('img/brand/logo-ment-negatiu.svg')).text()).replace('<svg ', '<svg width="832" height="205" '); const im = new Image();
    im.src = URL.createObjectURL(new Blob([t], { type: 'image/svg+xml' })); await im.decode(); return MSH_LOGO = im; } catch (e) { return null; }
}
async function mShDraw() {
  $$('.mshkind button').forEach(b => b.classList.toggle('on', b.dataset.k ? b.dataset.k === MSH.kind : b.dataset.f === MSH.fmt));
  try { await Promise.all(['600 40px "Schibsted Grotesk"', '700 40px "Schibsted Grotesk"'].map(f => document.fonts.load(f))); } catch (e) { }
  const W = 1080, H = MSH.fmt === 'story' ? 1920 : 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const m = MS(), t = m.tests[m.tests.length - 1], serif = '"Schibsted Grotesk", system-ui, sans-serif', sans = '"Schibsted Grotesk", system-ui, sans-serif';
  // fons
  let g = x.createLinearGradient(0, 0, W * .4, H); g.addColorStop(0, '#0D3B35'); g.addColorStop(1, '#155F54'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(W, 0, 0, W, 0, W * .9); g.addColorStop(0, 'rgba(46,160,138,.45)'); g.addColorStop(1, 'rgba(46,160,138,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(243,212,142,.16)'; x.lineWidth = 3; for (const r of [260, 380, 500]) { x.beginPath(); x.arc(W - 40, 120, r, 0, Math.PI * 2); x.stroke(); }
  const top = MSH.fmt === 'story' ? 200 : 110, lg = await mShLogo(); if (lg) x.drawImage(lg, 90, top, 380, 94); else { x.fillStyle = '#fff'; x.font = `700 70px ${sans}`; x.fillText('numi ment', 90, top + 70); }
  x.textAlign = 'center'; const cxm = W / 2; let y = top + (MSH.fmt === 'story' ? 380 : 260);
  const line = (txt, font, col, dy) => { x.font = font; x.fillStyle = col; x.fillText(txt, cxm, y); y += dy; };
  if (MSH.kind === 'edat' && t) {
    line(L('La meva ment té', 'Mi mente tiene'), `600 54px ${sans}`, '#B9D3CD', 440);
    // arc daurat
    x.lineCap = 'round'; x.lineWidth = 26; x.strokeStyle = 'rgba(255,255,255,.12)'; x.beginPath(); x.arc(cxm, y + 20, 330, Math.PI, 0); x.stroke();
    const ag = x.createLinearGradient(cxm - 330, 0, cxm + 330, 0); ag.addColorStop(0, '#6FD8BD'); ag.addColorStop(.55, '#F3D48E'); ag.addColorStop(1, '#E9967A');
    x.lineWidth = 14; x.strokeStyle = ag; x.beginPath(); x.arc(cxm, y + 20, 330, Math.PI, 0); x.stroke();
    const an = Math.PI * (1 - (Math.max(20, Math.min(90, t.age)) - 20) / 70); x.fillStyle = '#F3D48E'; x.beginPath(); x.arc(cxm + 330 * Math.cos(an), y + 20 - 330 * Math.sin(an), 30, 0, Math.PI * 2); x.fill(); x.lineWidth = 10; x.strokeStyle = '#11493F'; x.stroke();
    line(String(t.age), `500 280px ${serif}`, '#F3D48E', 100); line(L('anys', 'años'), `600 64px ${sans}`, '#fff', 90);
    const dif = t.real ? t.real - t.age : 0; if (dif >= 2) line(L(`${dif} anys menys que la meva edat`, `${dif} años menos que mi edad`), `600 50px ${sans}`, '#9FEAD6', 70);
    line(L('Edat de la ment · test orientatiu', 'Edad de la mente · test orientativo'), `500 38px ${sans}`, '#A9C9C2', 0);
  } else {
    const st = P.streak || 0, big = st > 1 ? st : mSessions(), lab = st > 1 ? L('dies seguits', 'días seguidos') : L(big === 1 ? 'sessió feta' : 'sessions fetes', big === 1 ? 'sesión hecha' : 'sesiones hechas');
    line(L('Entrenant la ment', 'Entrenando la mente'), `600 54px ${sans}`, '#B9D3CD', 330);
    line(String(big), `500 330px ${serif}`, '#F3D48E', 110); line(lab, `600 64px ${sans}`, '#fff', 120);
    const stats = [[mSessions(), L('sessions', 'sesiones')], [Object.values(m.days).filter(d => d.hab).length, L('hàbits', 'hábitos')], [Object.keys(m.hist).length, L('jocs', 'juegos')]];
    stats.forEach(([v, l], i) => { const sx = W / 2 + (i - 1) * 300; x.fillStyle = 'rgba(255,255,255,.08)'; x.beginPath(); x.roundRect ? x.roundRect(sx - 130, y - 20, 260, 190, 28) : x.rect(sx - 130, y - 20, 260, 190); x.fill();
      x.font = `500 96px ${serif}`; x.fillStyle = '#fff'; x.fillText(String(v), sx, y + 90); x.font = `600 34px ${sans}`; x.fillStyle = '#A9C9C2'; x.fillText(l, sx, y + 145); });
  }
  // peu: invitació
  const fy = H - (MSH.fmt === 'story' ? 330 : 210); x.fillStyle = 'rgba(243,212,142,.95)'; x.beginPath(); x.roundRect ? x.roundRect(120, fy, W - 240, 120, 60) : x.rect(120, fy, W - 240, 120); x.fill();
  x.font = `700 40px ${sans}`; x.fillStyle = "#2B1D02"; x.fillText(L('Prova-ho gratis: ment.numimates.com', 'Pruébalo gratis: ment.numimates.com'), cxm, fy + 76);
  x.font = `500 32px ${sans}`; x.fillStyle = '#A9C9C2'; x.fillText(L('10 minuts al dia per mantenir la ment activa', '10 minutos al día para mantener la mente activa'), cxm, fy + 180);
  MSH.canvas = c; const im = $('#mshimg'); if (im) im.src = c.toDataURL('image/jpeg', .9);
}
async function mShGo() {
  if (!MSH || !MSH.canvas) return;
  const txt = L('Estic entrenant la ment cada dia amb Numi Ment. Prova-ho gratis: https://ment.numimates.com', 'Estoy entrenando la mente cada día con Numi Ment. Pruébalo gratis: https://ment.numimates.com');
  const blob = await new Promise(r => MSH.canvas.toBlob(r, 'image/jpeg', .92)), file = new File([blob], 'numi-ment.jpg', { type: 'image/jpeg' });
  try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text: txt }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  // sense compartir fitxers: es desa la imatge i s'obre WhatsApp amb el text
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'numi-ment.jpg'; document.body.appendChild(a); a.click(); a.remove();
  toast(L("Imatge desada. Ara la pots enviar per WhatsApp o penjar-la a Instagram.", 'Imagen guardada. Ahora puedes enviarla por WhatsApp o subirla a Instagram.'));
  setTimeout(() => window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank', 'noopener'), 900);
}

/* ---------- Lliga Numi Ment (rànquing amb àlies; punts = XP: 10 per joc, 20 per sessió completa, 5 per hàbit, 30 pel test) ---------- */
async function mentLliga(period) {
  mStop(); VIEW = 'progres'; period = period === 'm' ? 'm' : 'w';
  if (!P.code) return toast(L('Cal connexió per veure la lliga.', 'Hace falta conexión para ver la liga.'));
  const left = period === 'w' ? daysLeftWeek() : daysLeftMonth();
  app.innerHTML = mShell('progres', `<button class="link mback" onclick="go('progres')">‹ ${L('Progrés', 'Progreso')}</button><h1 class="mh1">${L('Lliga Numi Ment', 'Liga Numi Ment')}</h1>
    <div class="mseg" style="margin-bottom:14px"><button class="${period === 'w' ? 'on' : ''}" onclick="mentLliga('w')">${L('Aquesta setmana', 'Esta semana')}</button><button class="${period === 'm' ? 'on' : ''}" onclick="mentLliga('m')">${L('Aquest mes', 'Este mes')}</button></div>
    <p class="mlead">${L(`Queden ${left} ${left === 1 ? 'dia' : 'dies'}. Cada joc suma 10 punts; la sessió completa, 20 més.`, `Quedan ${left} ${left === 1 ? 'día' : 'días'}. Cada juego suma 10 puntos; la sesión completa, 20 más.`)}</p>
    <section class="mtcard" id="mlg"><p class="mmut">${L('Carregant…', 'Cargando…')}</p></section>
    <section class="mtcard"><div class="mthead"><b>${L('Premis de cada mes', 'Premios de cada mes')}</b></div><p style="margin:0 0 8px;font-size:17px;line-height:1.5">${L("Els 3 primers guanyen una medalla d'or, de plata o de bronze i, si no tenen Premium, <b>un mes de Premium</b>.", 'Los 3 primeros ganan una medalla de oro, de plata o de bronce y, si no tienen Premium, <b>un mes de Premium</b>.')}</p>
      <p class="mmut" style="margin:0">${L('A la lliga surts amb un àlies, mai amb el teu nom. Màxim 1.500 punts al dia.', 'En la liga sales con un alias, nunca con tu nombre. Máximo 1.500 puntos al día.')}</p>
      <button class="link" onclick="P.lliga=P.lliga===false?true:false;save();mentLliga('${period}')">${P.lliga === false ? L('Tornar a sortir a la lliga', 'Volver a salir en la liga') : L('No vull sortir a la lliga', 'No quiero salir en la liga')}</button></section>`);
  let r = {}; try { r = await api('lliga', { code: P.code, period }); } catch (e) { }
  const box = $('#mlg'); if (!box) return;
  if (!r.rows) { box.innerHTML = `<p class="mmut">${L("Ara no s'ha pogut carregar.", 'Ahora no se ha podido cargar.')}</p>`; return; }
  const me = r.me || {};
  box.innerHTML = `<div class="mdrank">${r.rows.length ? r.rows.map((x, i) => `<div class="mdrow ${x.me ? 'me' : ''}"><span class="mdpos">${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}</span><b>${esc(lligaAlias(x.a))}${x.me ? ' · ' + L('tu', 'tú') : ''}</b><span>${x.p}</span></div>`).join('') : `<p class="mmut">${L('Encara ningú no té punts. Fes la sessió i sigues el primer!', 'Todavía nadie tiene puntos. ¡Haz la sesión y sé el primero!')}</p>`}
    ${me.pos && !r.rows.some(x => x.me) ? `<div class="mdrow me" style="margin-top:8px"><span class="mdpos">${me.pos}</span><b>${esc(lligaAlias(me.a))} · ${L('tu', 'tú')}</b><span>${me.p}</span></div>` : ''}</div>
    ${!me.pos && !me.hidden ? `<p class="mmut" style="margin:10px 0 0">${L(`El teu àlies és <b>${esc(lligaAlias(me.a))}</b>.`, `Tu alias es <b>${esc(lligaAlias(me.a))}</b>.`)}</p>` : ''}`;
}

/* ---------- Progrés ---------- */
function mSpark(h, low) {
  if (!h || h.length < 2) return '';
  const v = h.slice(-12).map(x => x[1]), mn = Math.min(...v), mx = Math.max(...v), W = 120, H = 30;
  const pts = v.map((y, i) => `${(i / (v.length - 1) * W).toFixed(1)},${(mx === mn ? H / 2 : low ? 4 + (y - mn) / (mx - mn) * (H - 8) : H - 4 - (y - mn) / (mx - mn) * (H - 8)).toFixed(1)}`).join(' ');
  return `<svg class="mspark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
// nivell d'1 a 10 de cada joc, per fer la mitjana de cada capacitat
function mLv10(g) {
  const m = MS(); if (!m.hist[g]) return null;
  if (g === 'vel') return Math.max(1, Math.min(10, Math.round(10 - 9 * Math.log(mLvl('vel') / 34) / Math.log(1000 / 34))));
  if (g === 'rfx') { const b = m.best.rfx; return b ? Math.max(1, Math.min(10, Math.round(10 - (b - 330) / 40))) : null; }
  if (MG[g].span) return Math.max(1, Math.min(10, (m.lvl[g] || 3) - 2));
  return mLvl(g);
}
function mAgeChart(T) {
  if (T.length < 2) return '';
  const v = T.slice(-8), ys = v.map(t => t.age), mn = Math.min(...ys) - 3, mx = Math.max(...ys) + 3, W = 300, H = 120, x = i => 20 + i * (W - 40) / (v.length - 1), y = a => 12 + (a - mn) / (mx - mn) * (H - 34);
  return `<svg class="magech" viewBox="0 0 ${W} ${H}"><polyline points="${v.map((t, i) => `${x(i)},${y(t.age)}`).join(' ')}" fill="none" stroke="var(--pri)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${v.map((t, i) => `<circle cx="${x(i)}" cy="${y(t.age)}" r="5" fill="#fff" stroke="var(--pri)" stroke-width="3"/><text x="${x(i)}" y="${y(t.age) - 10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1B2323">${t.age}</text><text x="${x(i)}" y="${H - 4}" text-anchor="middle" font-size="11.5" fill="#56615F">${dayShort(t.d)}</text>`).join('')}</svg>`;
}
// gràfic d'aranya de les sis capacitats (nivell mitjà d'1 a 10)
function mRadar(doms) {
  if (!doms.some(([, v]) => v != null)) return '';
  const cx = 180, cy = 150, R = 105, n = doms.length, pt = (i, r) => [cx + r * Math.sin(2 * Math.PI * i / n), cy - r * Math.cos(2 * Math.PI * i / n)];
  const ring = k => doms.map((_, i) => pt(i, R * k / 5).map(v => v.toFixed(1)).join(',')).join(' ');
  const poly = doms.map(([, v], i) => pt(i, R * Math.max(.5, v || 0) / 10).map(x => x.toFixed(1)).join(',')).join(' ');
  return `<svg class="mradar" viewBox="0 0 360 300" aria-hidden="true"><defs><linearGradient id="mrd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#33B79F" stop-opacity=".55"/><stop offset="1" stop-color="#7E52B3" stop-opacity=".45"/></linearGradient></defs>
    ${[1, 2, 3, 4, 5].map(k => `<polygon points="${ring(k)}" fill="${k % 2 ? '#FBF8F2' : '#fff'}" stroke="#E6DECF" stroke-width="1"/>`).reverse().join('')}
    ${doms.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#E6DECF"/>`; }).join('')}
    <polygon points="${poly}" fill="url(#mrd)" stroke="#0E5C50" stroke-width="2.5" stroke-linejoin="round"/>
    ${doms.map(([c, v], i) => { const [x, y] = pt(i, R * Math.max(.5, v || 0) / 10), [lx, ly] = pt(i, R + 26); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="var(--c-${c})" stroke="#fff" stroke-width="2"/><text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--c-${c})">${tx(MCAP[c])}</text>`; }).join('')}</svg>`;
}
function mentProgres() {
  const m = MS(), days = Object.entries(m.days), hab = days.filter(([, x]) => x.hab).length, T = m.tests;
  const now = new Date(), y = now.getFullYear(), mo = now.getMonth(), first = new Date(y, mo, 1), nd = new Date(y, mo + 1, 0).getDate(), off = (first.getDay() + 6) % 7;
  const cal = [...Array(off).fill('<i class="x"></i>'), ...[...Array(nd).keys()].map(i => { const k = `${y}-${pad(mo + 1)}-${pad(i + 1)}`, st = mDone(k); return `<i class="${st === 2 ? 'on' : st ? 'mid' : ''} ${k === today() ? 'today' : ''}">${i + 1}</i>`; })].join('');
  const doms = Object.keys(MCAP).map(c => { const l = Object.keys(MG).filter(g => MG[g].cap === c).map(mLv10).filter(v => v != null); return [c, l.length ? l.reduce((a, b) => a + b, 0) / l.length : null]; });
  const fit = new Set(MFITES.filter(f => f[2](m) || (m.fit || []).includes(f[0])).map(f => f[0]));
  app.innerHTML = mShell('progres', `<h1 class="mh1">${L('El teu progrés', 'Tu progreso')}</h1>
    <button class="mlnk" onclick="mShare()">${mTile('compartir', 'gold')}<span><b>${L('Comparteix la teva evolució', 'Comparte tu evolución')}</b><small>${L('Per WhatsApp, Instagram o on vulguis.', 'Por WhatsApp, Instagram o donde quieras.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>
    <button class="mlnk" onclick="mentLliga('w')">${mTile('copa', 'gold')}<span><b>${L('Lliga Numi Ment', 'Liga Numi Ment')}</b><small>${L('El teu lloc a la setmana i al mes. Els 3 primers de cada mes guanyen premi.', 'Tu puesto en la semana y en el mes. Los 3 primeros de cada mes ganan premio.')}</small></span><span class="mnext">${mSvg('seg')}</span></button>
    <div class="mstats"><div><b>${P.streak || 0}</b><span>${L('dies seguits', 'días seguidos')}</span></div><div><b>${mSessions()}</b><span>${L('sessions fetes', 'sesiones hechas')}</span></div><div><b>${hab}</b><span>${L('hàbits fets', 'hábitos hechos')}</span></div></div>
    <section class="mtcard"><div class="mthead"><b>${L('Edat de la ment', 'Edad de la mente')}</b><span>${T.length ? L(`${T.length} ${T.length === 1 ? 'test' : 'tests'}`, `${T.length} ${T.length === 1 ? 'test' : 'tests'}`) : ''}</span></div>
      ${T.length ? `${mAgeChart(T) || `<p style="margin:0 0 12px">${L(`Última: <b>${T[T.length - 1].age} anys</b> (${dayShort(T[T.length - 1].d)}). Quan facis el segon test veuràs aquí l'evolució.`, `Última: <b>${T[T.length - 1].age} años</b> (${dayShort(T[T.length - 1].d)}). Cuando hagas el segundo test verás aquí la evolución.`)}</p>`}<button class="btn ghost mbtn" onclick="mAgeInfo()">${L('Veure el detall', 'Ver el detalle')}</button>` : `<p style="margin:0 0 12px">${L('Encara no has fet el test.', 'Aún no has hecho el test.')}</p><button class="btn mbtn" onclick="mTestIntro()">${L('Fes el test', 'Haz el test')}</button>`}</section>
    <section class="mtcard"><div class="mthead"><b>${L('Les teves capacitats', 'Tus capacidades')}</b><span>${L('nivell 1–10', 'nivel 1–10')}</span></div>${mRadar(doms)}<div class="mdoms">${doms.map(([c, v]) => `<div class="mdrow2 d-${c}"><b>${tx(MCAP[c])}</b><span>${v == null ? L('sense dades', 'sin datos') : v.toFixed(1).replace('.', LANG === 'es' ? ',' : ',')}</span><div class="mprg"><i style="width:${v == null ? 0 : v * 10}%"></i></div></div>`).join('')}</div></section>
    <section class="mtcard"><div class="mthead"><b>${now.toLocaleDateString(mLoc(), { month: 'long', year: 'numeric' })}</b><span>${L('dies entrenats', 'días entrenados')}</span></div><div class="mcalh">${mWeekDays().map(d => `<b>${d.toLocaleDateString(mLoc(), { weekday: 'narrow' })}</b>`).join('')}</div><div class="mcal">${cal}</div></section>
    <section class="mtcard"><div class="mthead"><b>${L('Fites', 'Logros')}</b><span>${MFITES.filter(f => fit.has(f[0])).length}/${MFITES.length}</span></div><div class="mfites">${MFITES.map(f => `<div class="mfita ${fit.has(f[0]) ? 'on' : ''}"><span>${mSvg('medalla')}</span>${tx(f[1])}</div>`).join('')}</div></section>
    <details class="mdet"><summary class="mh2">${L('Joc a joc', 'Juego a juego')}</summary>
    <div class="mprog">${Object.entries(MG).map(([g, o]) => { const h = m.hist[g] || [], last = h.length ? h[h.length - 1][1] : null;
      return `<div class="mpr">${mGic(g)}<div><b>${tx(o.n)}</b><small>${tx(MCAP[o.cap])}${!o.span && !o.lvx ? ` · ${L('nivell', 'nivel')} ${mLvl(g)}` : ''}</small></div><div class="mprv">${h.length ? `<b>${mNice(g, m.best[g])}</b><small>${L('últim', 'último')}: ${mNice(g, last)}</small>` : `<small>${L('encara no', 'aún no')}</small>`}</div>${mSpark(h, o.low)}</div>`; }).join('')}</div></details>
    <p class="mnote">${L("Compara't només amb tu mateix: cada persona té el seu ritme. El que compta és la constància.", 'Compárate solo contigo: cada persona tiene su ritmo. Lo que cuenta es la constancia.')}</p>`);
}
function mentCiencia() {
  modal(`<div class="sheet mcsheet"><h3>${L('Com entrenar la ment', 'Cómo entrenar la mente')}</h3>
    <h4>${L('El que et proposem cada dia', 'Lo que te proponemos cada día')}</h4>
    <ul><li>${L('<b>Poc i sovint.</b> Deu minuts, cinc dies a la setmana, funcionen millor que una hora de tant en tant. Crear l\'hàbit costa unes setmanes: per això hi ha l\'objectiu setmanal i el recordatori.', '<b>Poco y a menudo.</b> Diez minutos, cinco días a la semana, funcionan mejor que una hora de vez en cuando. Crear el hábito cuesta unas semanas: por eso hay objetivo semanal y recordatorio.')}</li>
    <li>${L('<b>Varietat.</b> Cada sessió combina rapidesa o atenció, memòria i càlcul, lògica o llenguatge.', '<b>Variedad.</b> Cada sesión combina rapidez o atención, memoria y cálculo, lógica o lenguaje.')}</li>
    <li>${L("<b>Un repte a la teva mida.</b> La dificultat puja quan ho fas bé i baixa quan costa: l'esforç és el que entrena.", '<b>Un reto a tu medida.</b> La dificultad sube cuando lo haces bien y baja cuando cuesta: el esfuerzo es lo que entrena.')}</li>
    <li>${L('<b>Fora de la pantalla.</b> Moure\'s, veure gent, dormir bé i cuidar l\'oïda i la tensió són el que més s\'associa amb una ment en forma.', '<b>Fuera de la pantalla.</b> Moverse, ver gente, dormir bien y cuidar el oído y la tensión es lo que más se asocia con una mente en forma.')}</li></ul>
    <h4>${L('Què en sabem', 'Qué sabemos')}</h4>
    <p>${L('Els jocs mentals entrenen sobretot allò que practiques: si fas sudokus, et sortiran millor els sudokus. Que aquesta millora passi a la vida diària encara s\'està estudiant i els experts no hi estan d\'acord del tot.', 'Los juegos mentales entrenan sobre todo lo que practicas: si haces sudokus, te saldrán mejor los sudokus. Que esa mejora pase a la vida diaria todavía se está estudiando y los expertos no se ponen del todo de acuerdo.')}</p>
    <p>${L("A l'estudi ACTIVE (Estats Units, 2.832 persones grans), entrenar la velocitat de processament, com a «Mirada ràpida», va millorar aquesta habilitat i la millora en part es mantenia deu anys després. L'estudi FINGER (Finlàndia) va combinar exercici, alimentació, entrenament mental i control de la salut, i qui el va seguir va obtenir resultats una mica millors en les proves de memòria i raonament.", 'En el estudio ACTIVE (Estados Unidos, 2.832 personas mayores), entrenar la velocidad de procesamiento, como en «Mirada rápida», mejoró esa habilidad y la mejora en parte se mantenía diez años después. El estudio FINGER (Finlandia) combinó ejercicio, alimentación, entrenamiento mental y control de la salud, y quien lo siguió obtuvo resultados algo mejores en las pruebas de memoria y razonamiento.')}</p>
    <p>${L("L'«edat de la ment» compara les teves proves amb com canvien de mitjana la rapidesa i la memòria amb l'edat, segons estudis amb milers de persones. Serveix per seguir la teva evolució, no per diagnosticar res.", 'La «edad de la mente» compara tus pruebas con cómo cambian de media la rapidez y la memoria con la edad, según estudios con miles de personas. Sirve para seguir tu evolución, no para diagnosticar nada.')}</p>
    <p class="mwarn">${L("Numi Ment és una manera agradable de mantenir la ment activa. No és un tractament mèdic ni en substitueix cap. Si et preocupa la memòria, parla-ho amb el teu metge.", 'Numi Ment es una manera agradable de mantener la mente activa. No es un tratamiento médico ni sustituye a ninguno. Si te preocupa la memoria, háblalo con tu médico.')}</p>
    <p class="mrefs">${L('Fonts', 'Fuentes')}: Ball et al., JAMA 2002; Rebok et al., J Am Geriatr Soc 2014 (ACTIVE) · Ngandu et al., Lancet 2015 (FINGER) · Livingston et al., Lancet 2024 (factors de risc modificables) · Simons et al., Psychol Sci Public Interest 2016 · Park et al., Psychol Aging 2002 · Kiely et al. 2014 (HILDA) · Der i Deary, Intelligence 2017 · Bartels et al. 2010 i Goldberg et al. 2015 (efecte pràctica) · Lally et al., Eur J Soc Psychol 2010.</p>
    <button class="btn big" onclick="closeModal()">${L("D'acord", 'De acuerdo')}</button></div>`);
}

/* ---------- Perfil ---------- */
function mentProfile() {
  const m = MS();
  app.innerHTML = mShell('profile', `<h1 class="mh1">${esc(P.name)}</h1>
    <section class="mtcard"><div class="mthead"><b>${L('Objectiu setmanal', 'Objetivo semanal')}</b><span>${L('dies d\'entrenament', 'días de entrenamiento')}</span></div><div class="mseg">${[3, 4, 5, 6, 7].map(n => `<button class="${m.goal === n ? 'on' : ''}" onclick="MS().goal=${n};save();mentProfile()">${n}</button>`).join('')}</div><p class="mmut" style="margin:10px 0 0">${L('Recomanem 5 dies: prou per notar-ho i amb marge per descansar.', 'Recomendamos 5 días: suficiente para notarlo y con margen para descansar.')}</p></section>
    <section class="mtcard"><div class="mthead"><b>${L('Recordatori diari', 'Recordatorio diario')}</b><span>${m.rem != null ? `${m.rem}:00` : ''}</span></div><button class="btn ghost mbtn" onclick="mRemind()">${m.rem != null ? L("Canvia l'hora", 'Cambia la hora') : L('Afegeix-lo al calendari', 'Añádelo al calendario')}</button></section>
    <section class="mtcard"><div class="mthead"><b>${L('Idioma', 'Idioma')}</b></div>${langPill()}</section>
    ${P.code ? `<section class="mtcard"><div class="mthead"><b>${L('El meu compte', 'Mi cuenta')}</b></div>${P.username ? `<p>${L('Usuari', 'Usuario')}: <b>${esc(P.username)}</b></p>` : ''}<p>${L('Codi secret', 'Código secreto')}: <b class="mono">${esc(P.code)}</b></p><p class="mmut">${L("Amb l'usuari i la contrasenya, o amb el codi, pots entrar des de qualsevol mòbil o ordinador. No el comparteixis.", 'Con el usuario y la contraseña, o con el código, puedes entrar desde cualquier móvil u ordenador. No lo compartas.')}</p>${P.username ? '' : `<button class="btn ghost mbtn" onclick="accountModal()">${L('Crea usuari i contrasenya', 'Crea usuario y contraseña')}</button>`}</section>` : ''}
    <section class="mtcard"><div class="mthead"><b>Premium</b></div>${typeof premiumBox === 'function' ? premiumBox() : ''}</section>
    <section class="mtcard"><div class="mthead"><b>${L('So', 'Sonido')}</b></div><button class="btn ghost mbtn" onclick="P.sound=!P.sound;save();mentProfile()">${P.sound ? L('Activat', 'Activado') : L('Desactivat', 'Desactivado')}</button></section>
    <div class="mprofb"><button class="btn ghost mbtn" onclick="renderProfiles()">${L('Canvia de perfil', 'Cambia de perfil')}</button><button class="link" onclick="mentCiencia()">${L('Com entrenar la ment', 'Cómo entrenar la mente')}</button><a class="link" href="https://numimates.com/privacitat" target="_blank" rel="noopener">${L('Privadesa', 'Privacidad')}</a></div>`);
}

/* ---------- Alta: «Altres» a la pantalla de què estudies ---------- */
function onbMent() {
  setVariant('ment');
  app.innerHTML = `<div class="scr varsplash mentsplash"><img class="onb-logo" src="${VAR.logo}" alt="${VAR.name}"><h1>${L('Et donem la benvinguda a Numi Ment', 'Te damos la bienvenida a Numi Ment')}</h1>
    <p class="sub">${L("Deu minuts al dia per mantenir la ment activa: rapidesa, atenció, memòria, càlcul, lògica i llenguatge. Començarem amb un test curt per saber la teva edat de la ment, i la dificultat s'adaptarà a tu.", 'Diez minutos al día para mantener la mente activa: rapidez, atención, memoria, cálculo, lógica y lenguaje. Empezaremos con un test corto para saber la edad de tu mente, y la dificultad se adaptará a ti.')}</p>
    <button class="btn big" onclick="onbMentGo()">${L('Comencem', 'Empecemos')}</button><button class="link" onclick="ONB.stage=null;ONB.variant=null;onb(1)">${L('Tornar', 'Volver')}</button></div>`;
}
function onbMentGo() {
  const id = 'p' + Date.now().toString(36);
  P = { id, name: ONB.name, goal: 20, sound: true, unlockAll: false, lang: LANG, ...freshProgress(), course: 0, baseCourse: 0, maxCourse: 0, holdReg: true, variant: 'ment', ment: {},
    survey: { curs: 'Numi Ment', age: 'adult', date: today() } };
  DB.profiles[id] = P; DB.current = id; saveLocal(); onbAccount();
}

// app.js ja ha pintat la primera pantalla abans que es carregués aquest fitxer
if (P && varOf(P) === 'ment' && !appMismatch(P) && VIEW !== 'onboard') go('home');

/* ---------- Reptes amb amics (duels de 2 o reptes de grup fins a 10, 48 hores) ----------
   Fan servir l'API de batalles de Numi Mates (api/battle.js) amb joc i dificultat fixos: tothom rep les mateixes
   preguntes (llavor comuna) i es classifica per encerts; en empat, menys errors o menys temps. És de Premium. */
const MDUEL = ['cal', 'sim', 'com', 'ser', 'sin', 'ref', 'rel', 'ate', 'int'];
const MTIMED = ['ate', 'int', 'cal', 'sim'];
let MD = null;
const mBat = async (action, extra = {}) => { const r = await fetch('/api/battle', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, code: P.code, name: P.name, ment: true, ...extra }) }); const d = await r.json().catch(() => ({})); return { status: r.status, ...d }; };
const mDuelErr = e => e.status === 402 || e.error === 'premium' ? L('Els reptes amb amics són de Premium.', 'Los retos con amigos son de Premium.') : e.error === 'no-existeix' ? L('No trobem aquest codi. Revisa-ho.', 'No encontramos ese código. Revísalo.') : e.error === 'plena' ? L('Aquest repte ja és ple.', 'Este reto ya está lleno.') : e.error === 'caducada' ? L('Aquest repte ja ha acabat.', 'Este reto ya ha terminado.') : e.error === 'altra-app' ? L('Aquest codi és una batalla de Numi Mates, no un repte de Numi Ment.', 'Este código es una batalla de Numi Mates, no un reto de Numi Ment.') : L("No s'ha pogut fer. Comprova la connexió.", 'No se ha podido hacer. Comprueba la conexión.');
async function mentReptes() {
  mStop(); VIEW = 'reptes';
  app.innerHTML = mShell('jocs', `<button class="link mback" onclick="go('jocs')">‹ ${L('Jocs', 'Juegos')}</button><h1 class="mh1">${L('Reptes amb amics', 'Retos con amigos')}</h1>
    <p class="mlead">${L("Repta algú (o un grup de fins a 10) al mateix joc, amb les mateixes preguntes. Cadascú juga quan vol durant 48 hores i després veieu qui ho ha fet millor.", 'Reta a alguien (o a un grupo de hasta 10) al mismo juego, con las mismas preguntas. Cada uno juega cuando quiere durante 48 horas y después veis quién lo ha hecho mejor.')}</p>
    <div class="mdbtns"><button class="btn big mbtn" onclick="mDuelNew()">${L('Crea un repte', 'Crea un reto')}</button><button class="btn ghost big" onclick="mDuelCode()">${L('Tinc un codi', 'Tengo un código')}</button></div>
    <h2 class="mh2">${L('Els teus reptes', 'Tus retos')}</h2><div id="mdlist" class="mdlist"><p class="mmut">${L('Carregant…', 'Cargando…')}</p></div>`);
  if (!P.code) { $('#mdlist').innerHTML = `<p class="mmut">${L('Primer cal que tinguis el compte creat.', 'Primero necesitas tener la cuenta creada.')}</p>`; return; }
  const r = await mBat('mine'); const el = $('#mdlist'); if (!el) return;
  const list = (r.list || []).filter(Boolean);
  el.innerHTML = list.length ? list.map(st => { const me = st.players.find(p => p.me) || {}, done = st.players.filter(p => p.finished).length;
    return `<button class="mdit" onclick="mDuelOpen('${st.code}')">${MG[st.joc] ? mGic(st.joc) : ''}<span><b>${MG[st.joc] ? tx(MG[st.joc].n) : ''} · ${st.kind === 'repte' ? L('grup', 'grupo') : L('duel', 'duelo')}</b><small>${st.players.length} ${L('participants', 'participantes')} · ${done} ${L('han jugat', 'han jugado')}${!st.over && !st.expired ? ` · ${L('queden', 'quedan')} ${st.hoursLeft} h` : ''}</small></span><span class="mdst ${me.finished ? '' : 'go'}">${me.finished ? (me.pos ? me.pos + 'r' : '✓') : L('Juga', 'Juega')}</span></button>`; }).join('')
    : `<p class="mmut">${L('Encara no en tens cap. Crea el primer!', 'Aún no tienes ninguno. ¡Crea el primero!')}</p>`;
}
function mDuelNew() {
  if (!isPremium()) return mPremium();
  MD = { joc: 'cal', kind: 'duel', lv: 5 };
  mDuelForm();
}
function mDuelForm() {
  const lvs = [[2, L('Fàcil', 'Fácil')], [5, L('Normal', 'Normal')], [8, L('Difícil', 'Difícil')]];
  modal(`<div class="sheet mdform"><h3>${L('Nou repte', 'Nuevo reto')}</h3>
    <p class="mlab">${L('Joc', 'Juego')}</p><div class="mdgrid">${MDUEL.map(g => `<button class="${MD.joc === g ? 'on' : ''}" onclick="MD.joc='${g}';mDuelForm()">${mGic(g)}${tx(MG[g].n)}</button>`).join('')}</div>
    <p class="mlab">${L('Amb qui', 'Con quién')}</p><div class="mdseg"><button class="${MD.kind === 'duel' ? 'on' : ''}" onclick="MD.kind='duel';mDuelForm()">${L('Una persona', 'Una persona')}</button><button class="${MD.kind === 'repte' ? 'on' : ''}" onclick="MD.kind='repte';mDuelForm()">${L('Un grup (fins a 10)', 'Un grupo (hasta 10)')}</button></div>
    <p class="mlab">${L('Dificultat', 'Dificultad')}</p><div class="mdseg">${lvs.map(([v, t]) => `<button class="${MD.lv === v ? 'on' : ''}" onclick="MD.lv=${v};mDuelForm()">${t}</button>`).join('')}</div>
    <p class="err" id="mderr"></p><button class="btn big mbtn" onclick="mDuelCreate()">${L('Crea el repte', 'Crea el reto')}</button></div>`);
}
async function mDuelCreate() {
  const r = await mBat('create', { joc: MD.joc, kind: MD.kind, lv: MD.lv });
  if (!r.code) return $('#mderr').textContent = mDuelErr(r);
  closeModal(); mDuelShare(r);
}
let MD_MSG = '';
function mDuelShare(st) {
  const msg = MD_MSG = L(`Et repto a ${tx(MG[st.joc].n)} a Numi Ment! Entra a ment.numimates.com, ves a Jocs → Reptes amb amics i posa el codi ${st.code}. Tens 48 hores.`, `¡Te reto a ${tx(MG[st.joc].n)} en Numi Ment! Entra en ment.numimates.com, ve a Juegos → Retos con amigos y pon el código ${st.code}. Tienes 48 horas.`);
  modal(`<div class="sheet card cent"><h3>${L('Repte creat', 'Reto creado')}</h3><p>${L('Envia aquest codi a qui vulguis reptar:', 'Envía este código a quien quieras retar:')}</p>
    <div class="codecard big"><div><small>${tx(MG[st.joc].n)}</small><b>${st.code}</b></div></div>
    <a class="btn big mbtn" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${L('Envia per WhatsApp', 'Enviar por WhatsApp')}</a>
    ${navigator.share ? `<button class="btn ghost big" onclick="navigator.share({text:MD_MSG}).catch(()=>{})">${L('Altres maneres', 'Otras formas')}</button>` : ''}
    <button class="btn ghost big" onclick="closeModal();mDuelPlay('${st.code}')">${L('Juga ara', 'Juega ahora')}</button></div>`);
}
function mDuelCode() {
  if (!isPremium()) return mPremium();
  modal(`<div class="sheet card cent"><h3>${L('Entra a un repte', 'Entra en un reto')}</h3><p>${L("Escriu el codi que t'han enviat.", 'Escribe el código que te han enviado.')}</p>
    <input id="mdcode" class="nm" maxlength="14" placeholder="ZEUS-1234" autocapitalize="characters" autocomplete="off" style="text-transform:uppercase;text-align:center;letter-spacing:.08em">
    <p class="err" id="mderr"></p><button class="btn big mbtn" onclick="mDuelJoin()">${L('Entra', 'Entra')}</button></div>`);
  setTimeout(() => { const i = $('#mdcode'); i && i.focus(); }, 60);
}
async function mDuelJoin() {
  const c = ($('#mdcode').value || '').trim().toUpperCase(); if (!c) return;
  const r = await mBat('join', { bcode: c });
  if (!r.code) return $('#mderr').textContent = mDuelErr(r);
  closeModal(); mDuelOpen(r.code, r);
}
async function mDuelOpen(code, st) {
  st = st || await mBat('state', { bcode: code });
  if (!st.code) return toast(mDuelErr(st));
  const me = st.players.find(p => p.me);
  if (me && me.finished) return mDuelResult(st);
  mDuelPlay(code, st);
}
async function mDuelPlay(code, st) {
  st = st || await mBat('state', { bcode: code });
  if (!st.code || !MG[st.joc]) return toast(mDuelErr(st));
  if (st.over || st.expired) return mDuelResult(st);
  mStop(); MGCUR = st.joc; VIEW = 'mgame';
  const g = st.joc, rivals = st.players.filter(p => !p.me).map(p => esc(p.name)).join(', ');
  MGA = { ses: false, duel: { code: st.code, seed: st.seed, lv: st.lv || 5 } };
  mGameShell(g, '', `<div class="mintro">${mGic(g)}<h2>${tx(MG[g].n)}</h2><p class="mdtag">${st.kind === 'repte' ? L('Repte de grup', 'Reto de grupo') : L('Duel', 'Duelo')}${rivals ? ' · ' + L('amb', 'con') + ' ' + rivals : ''}</p>${mHow(g)}
    <p class="mmut">${L('Només tens una oportunitat: quan comencis, compta.', 'Solo tienes una oportunidad: cuando empieces, cuenta.')}</p>
    <button class="btn big mbtn" onclick="mDuelGo()">${L('Comença el repte', 'Empieza el reto')}</button></div>`);
}
async function mDuelGo() {
  const A = MGA; if (!A || !A.duel) return;
  // es marca com a començat perquè no es pugui repetir
  mBat('progress', { bcode: A.duel.code, done: 0, correct: 0, ms: 0, finished: false });
  MRNG = mSeed(A.duel.seed); A.duel.t0 = Date.now();
  mStart(MGCUR);
}
async function mDuelEnd(g) {
  const A = MGA; clearInterval(MGA_TK); const d = A.duel, timed = MTIMED.includes(g);
  const correct = A.ok | 0, errs = timed ? (A.ko | 0) : Math.max(0, (A.q | 0) - correct), done = correct + errs;
  const ms = timed ? errs * 1000 : Date.now() - d.t0;
  mStop(); VIEW = 'mgame';
  app.innerHTML = `<div class="mgame"><div class="mgbody"><div class="mres">${mGic(g)}<h2>${L('Repte fet!', '¡Reto hecho!')}</h2><p class="mscore">${correct}</p><p class="mmut">${L('Enviant el resultat…', 'Enviando el resultado…')}</p></div></div></div>`;
  let st = null;
  for (let t = 0; t < 3 && !(st && st.code); t++) { st = await mBat('progress', { bcode: d.code, done, correct, ms, finished: true }).catch(() => null); if (!(st && st.code)) await new Promise(r => setTimeout(r, 1500)); }
  touchStreak(); save(); syncNow();
  if (st && st.code) mDuelResult(st); else toast(L("No s'ha pogut enviar el resultat. Torna-ho a provar des de Reptes.", 'No se ha podido enviar el resultado. Vuelve a probarlo desde Retos.'));
}
function mDuelResult(st) {
  mStop(); VIEW = 'reptes';
  const timed = MTIMED.includes(st.joc), fin = st.players.filter(p => p.finished).sort((a, b) => b.correct - a.correct || a.ms - b.ms), wait = st.players.filter(p => !p.finished);
  const me = st.players.find(p => p.me) || {}, pos = fin.indexOf(me) + 1;
  const row = (p, i) => `<div class="mdrow ${p.me ? 'me' : ''}"><span class="mdpos">${i + 1}</span><b>${esc(p.name)}${p.me ? ' · ' + L('tu', 'tú') : ''}</b><span>${p.correct} ${L('encerts', 'aciertos')}${timed ? (p.done - p.correct ? ` · ${p.done - p.correct} ${L('errors', 'errores')}` : '') : ` · ${Math.round(p.ms / 1000)} s`}</span></div>`;
  app.innerHTML = mShell('jocs', `<button class="link mback" onclick="mentReptes()">‹ ${L('Reptes', 'Retos')}</button>
    <h1 class="mh1">${MG[st.joc] ? tx(MG[st.joc].n) : ''}</h1>
    <p class="mlead">${st.over || st.expired ? (pos === 1 ? L('Has guanyat el repte! 🏆', '¡Has ganado el reto! 🏆') : L('Repte acabat.', 'Reto terminado.')) : wait.length ? L(`Esperant ${wait.length === 1 ? 'una persona' : wait.length + ' persones'} · queden ${st.hoursLeft} h`, `Esperando a ${wait.length === 1 ? 'una persona' : wait.length + ' personas'} · quedan ${st.hoursLeft} h`) : L('Ja heu jugat tots.', 'Ya habéis jugado todos.')}</p>
    <section class="mtcard"><div class="mdrank">${fin.map(row).join('')}${wait.map(p => `<div class="mdrow wait"><span class="mdpos">·</span><b>${esc(p.name)}</b><span>${L('encara no ha jugat', 'aún no ha jugado')}</span></div>`).join('')}</div></section>
    ${!st.over && !st.expired && st.players.length < st.max ? `<button class="btn big mbtn" onclick="mDuelShare({ code: '${st.code}', joc: '${st.joc}' })">${L('Convida algú més', 'Invita a alguien más')}</button>` : ''}
    <button class="btn ghost big" onclick="mentReptes()">${L('Torna als reptes', 'Vuelve a los retos')}</button>`);
}
