# Batalles per a convidats (oct-2026)

Batalla de mates en directe on hi entra **qualsevol, sense compte**, amb el codi de la pissarra i un nom
(portes obertes, classes de prova, famílies…). El docent la crea al panell i la projecta; veu el rànquing en directe.

## Com funciona
- **Panell → Batalles → «Per a convidats»**. El grup és opcional. Es pot triar el nivell, el tema, el títol i **10 o 20 preguntes** (per defecte, 20). La batalla es tanca sola als 6 minuts per cada 10 preguntes, o quan tothom ha acabat.
- **Sala projectada** (`panel-batalla.js`, també per a la batalla de classe):
  - Sala: codi gegant, QR, avatars que entren. Si es toca un convidat, se'l pot treure de la sala.
  - Compte enrere.
  - Rànquing en directe: les files es reordenen amb animació, amb una fletxa verda quan algú avança posicions, i qui acaba fa un destell i hi surt el seu temps. Les files són tan grans com caben a la pantalla: amb 10-15 jugadors, els noms són ben grans.
  - Podi amb confeti i botó «Una altra batalla».
  - Botó de pantalla completa.
- **Convidats**: `app.numimates.com/juga?c=CODI` (`juga.html`, `juga.js`, `juga.css`). Escriuen el nom i trien personatge, esperen a la sala, fan el compte enrere, juguen i veuen el podi i la seva posició. La pàgina està pensada per al mòbil i per a l'ordinador: a l'ordinador, la pregunta queda a l'esquerra i el rànquing a la dreta, i també funciona amb el teclat. Si es recarrega la pàgina, continua on era (clau a `localStorage`).
- Les preguntes surten del **mateix motor i la mateixa llavor** que a l'app (`battlePlan`/`genEx`), però sense carregar `app.js`.
- Els alumnes de l'app no hi poden entrar: l'app fa sempre 10 preguntes.

## Servidor
- `api/juga.js` (públic): `join`, `state` i `progress`. Límits d'intents per IP. Només s'hi pot entrar mentre la batalla és a la sala.
- Taula nova `mates.batalla_conv`: convidats amb la clau resumida en sha-256. Es crea sola i els convidats s'esborren als 30 dies. Columna nova `mates.batalles.nq`: s'afegeix només si falta.
- `api/profe.js`: `bat_new` amb `kind: 'oberta'` (grup opcional i `nq`). `bat_list`, `bat_start` i `bat_end` també funcionen amb les batalles obertes, i hi ha una acció nova, `bat_kick`.
- Els convidats no compten a informes, estadístiques ni lligues d'alumnes.

## Provat
Amb un servidor local que fa servir les API reals contra Postgres (PGlite) en memòria: panell (crear, sala, començar, directe amb 12 i 28 jugadors, podi), convidats (mòbil i ordinador, 20 preguntes de tots els tipus, recàrrega a mitja partida, resultats), noms amb accents i noms repetits.
