# Numi Tech — estat i traspàs (04/10/2026, actualitzat al vespre)

4a app de Numi (programació i robòtica per a extraescolars amb classe guiada). Mateix codi que Numi Mates/Pro/Ment (`variant.js`, variant `tech`).
Prova en producció: https://mates-numi.vercel.app/?v=tech (grup 5b amb tot obert). El domini tech.numimates.com encara NO està actiu.

## Fet i publicat
- **Panell** (`profe.html`, `panel.js`, `panel.css`): alta d'alumnes per files (usuari i contrasenya automàtics, targetes d'accés imprimibles), grups amb app Numi Mates / Numi Tech / les dues, cursos del grup, «Obert fins a» i «Obre-ho tot», vista «Material Tech», assistent IA de l'admin (`api/panelai.js`).
- **Alta amb codi de classe** (`api/register.js`, `classe`): l'alumne entra directament al grup (pla `escola`).
- **Robot, unitat 1** (`tech-c1.js`, sessions r1-1..r1-4): contingut complet, guia del professor (`tech-guide-c1.js`), presentacions (`presenta.html`) i imprimibles (`imprimeix.html`).
- **Gràfics 3D** (`scripts/3d/`):
  - `bit3d.mjs` → `tech-3d.js` (món 3D en viu d'en Bit; `node scripts/3d/build.mjs`).
  - `diorama.mjs` + `render-scenes.mjs` → `img/tech/isles/*.webp` (34 illes), `img/tech/scenes/*.webp` (escenes de les històries i capçaleres `hero-<curs>`), `tech-isles.js` (posició de les parades en %).
  - Peces CC0 de Kenney (Nature, City Suburban, Furniture) i cel HDRI CC0 de Poly Haven a `scripts/3d/assets/` (no es despleguen: `scripts` és a `.vercelignore`).
  - Per regenerar: servidor estàtic de `~/mates-numi` a http://127.0.0.1:5190 (ha de servir `.glb` i `.hdr`) i `node scripts/3d/render-scenes.mjs`.
- **Responsive**: mòbil (capçalera amb escena a dalt), tauleta i escriptori (illes en dues columnes a partir de 1180 px).
- **Informes i IA**: `api/_informe.js` (`reportMailTech`), `api/_familia.js` (`techSum`), `api/chat.js` amb context Tech.

## Fet a la branca `claude/eloquent-galileo-fmypbm` (pendent de revisió i de desplegar)
| Curs | Contingut | Validador | Navegador (390 i 1440) |
|---|---|---|---|
| **Robot** (6-8 · 1r-2n, curs d'entrada) | unitats 1-8, 32 sessions (`tech-c1.js`, `tech-guide-c1.js`, TANI a `tech-learn.js`), revisades | 0 errors · 0 avisos (guia completa) | 32/32 bé |
| **Robòtica** (10-12 · 5è-6è) | 8 unitats, 32 sessions (`tech-c2.js`, `tech-anim-c2.js`, `tech-guide-c2.js`), revisades | 0 errors · 0 avisos (guia completa) | 32/32 bé |
| **Creadors** (9-11 · 4t-6è, després de Robot) | 8 unitats, 32 sessions (`tech-c3.js`, `tech-anim-c3.js`, `tech-guide-c3.js`), revisades | 0 errors · 0 avisos (guia completa) | 32/32 bé |
| **Digital** (9-12 · 4t-6è) | 3 unitats, 12 sessions (U3 «Benestar i vida digital»: pantalles, videojocs en línia, IA i autoria, pla digital) (`tech-c5.js`, `tech-anim-c5.js`, `tech-guide-c5.js`), revisades | 0 errors · 0 avisos (guia completa) | 12/12 bé |
| **Web** (12-14) | **aparcat** (per decisió del Moisés): esborranys de les 8 unitats a `scripts/tech-src/web/u1..u8` (no es despleguen: `scripts` és a `.vercelignore`); el curs continua «aviat» a l'app | — | — |

- **Gràfics (05/10)**: un món 3D per curs a les illes (Robot tropical, Robòtica base de proves amb pista de seguir línies, Creadors teatre al capvespre, Digital ciutat connectada; `ONLY=isles node scripts/3d/render-scenes.mjs`), parades com a monedes amb relleu i fitxa en tocar-les, en Bit (o el Maqueen a Robòtica, `scripts/3d/maqueen-portrait.mjs`) a la parada que toca, `tech-polish.js` (cap text no surt de la seva targeta a les 212 animacions i les formes tenen volum), presentador propi a les preguntes (Maqueen a Robòtica, Numi a Creadors). Ajust a pantalla: 0 passos amb scroll als quatre cursos a 390×740 i a 1440×800 (les demos animades ja no bloquegen l'ajust).
- **Edats i itinerari (05/10)**: edats fixades pel Moisés (Robot 6-8, Creadors 9-11, Digital 9-12, Robòtica 10-12, Web 12-14). Robot → Creadors i Digital → Robòtica → Web. L'anàlisi (Creadors repetia des de zero unes 10 sessions de Robot: girs, bucle comptat, esdeveniments, «si», variable, unitat 8) és a l'informe de la sessió; Creadors s'ha reescrit perquè parteixi del que ja saben de Robot. A Tech hi ha lectura en veu alta a cada pas (botó de l'altaveu, si el dispositiu té veu en l'idioma).
- **Revisió completa (04/10, vespre)**: totes les sessions de Robot, Robòtica, Creadors i Digital revisades (llengua, exactitud, coherència, edat). Cada guia té ara «La sessió en breu» (`intro`, `claus`, `prev`), preguntes freqüents (`faq`), «si alguna cosa falla» (`tec`), seguiment i protocol (`seg`), ampliació (`extra`) i transició (`trans`); el pla té el que diu el professor amb les respostes esperades, materials amb quantitats, 5-6 errors típics i rúbrica de 4 criteris. Validador: `GUIDE_FULL=1` avisa si en falta algun camp.
- **Activitats**: classificar arrossegant targetes als calaixos (`dsort`) i ordenar arrossegant (`seq`), amb comprovació, marques i reintent; a les preguntes, una resposta que cita un bloc («…») es veu com la peça de colors.
- **Presentacions**: color de cada curs i de cada fase, formes de fons, entrades animades, insígnia d'unitat, temporitzador amb anell, tiquet de sortida, codi MakeCode a la columna dreta, i cap diapositiva no surt de l'escenari (es redueix si cal). Escaneig de les presentacions sense errors ni desbordaments.
- **Solucionari del professor** (`tech-sol.js`, 108 sessions, ~1.250 respostes): es genera dels mateixos passos amb `PLAYWRIGHT=… node scripts/tech-sol.mjs` (cal el servidor local); surt al panell (secció plegable al final de cada sessió) i a la guia imprimible. **Cal tornar-lo a generar cada cop que es canvien els passos.**
- **Vista d'alumne del professor**: al panell, «Material Tech» (a la llista del curs i a cada sessió) obre l'app com la veu un alumne, amb tots els cursos i sessions oberts (`index.html?v=tech&docent=1&curs=…&s=…`). `tech-revisio.js` comprova el testimoni del docent a `/api/guia?f=me`; el perfil «docent» és local (no es registra ni se sincronitza) i té una barra amb «Comença de nou» i «Panell».
- **Motors**: `tech-bot.js` (en Bit ampliat: funcions, botons, variables, «fins que», illes alternatives, dissenyar reptes, diploma), `tech-robo.js` + `tech-robo3d.js` (simulador del Maqueen Lite V5 amb exportació a MakeCode), `tech-stage.js` + `tech-stage-art.js` (escenari de Creadors), `tech-web.js` (editor HTML/CSS), `tech-dig.js` (laboratori de ciutadania digital). Documentats a `scripts/TECH-CONTRACTE.md`.
- **Il·lustracions de Numi reaprofitades**: icones 3D (`img/ic`, via `icons.js`) i personatges (`img/chars`, via `pro.js` / `chars-img.js`) també a la presentació i els imprimibles; il·lustracions de Numi Ment (`img/ment`) amb el camp `pic` a targetes i diapositives; animals i objectes 3D nous a l'escenari.
- **Com es generen els cursos 2-5**: cada unitat es redacta a `scripts/tech-src/<curs>/uN/{unit,tani,guide}.js` i s'empaqueta amb `node scripts/tech-build-course.mjs <curs> <cN> "<títol>"` (p. ex. `robotica c2 "Tech Robòtica"`). Robot es fusiona a `tech-c1.js`.

## En curs (05/10): «clavar els tipus d'exercici» abans de replicar-los
Petició del Moisés: cada exercici ha de cabre a la pantalla sense baixar (mòbil i ordinador); editors tipus Scratch millors que la competència (estudi a `NUMI-TECH-COMPETENCIA.md`); solucionari per al professor.
- Fet: `tFit` (cada pas es redueix fins que hi cap), classificar d'una en una al mòbil, valoració d'una pregunta en una, privadesa compacta; editors en franges fixes (món · programa · paleta), arrossegar i deixar anar, peces que encaixen; solucionari (`tech-sol.js`).
- **Catàleg de tipus d'exercici** per revisar-los un a un: `?tipus=1` (amb un usuari amb tot obert, o `?v=tech&revisio=1&tipus=1` a la previsualització): cada tipus amb un botó per curs que obre un exemple real; «Següent» en passa a un altre; no desa res.
- Eines de comprovació (scratchpad de la sessió): `fitscan.mjs <curs> <amplada> <alçada>` diu quins passos no hi caben; `dndtest.mjs` prova arrossegar als tres editors.
- Següent (de l'estudi de la competència): desfer sempre visible, pressupost de blocs com a forats buits, pistes que reaccionen al programa, tres estrelles (resolt · sense pistes · pocs blocs), «Pas a pas» i velocitats a tots els editors, error que assenyala el bloc i el món s'alenteix quan falla.

## Pendent
1. **Revisar** Robot, Robòtica, Creadors i Digital (Moisés).
2. **Web**: acabar i revisar els esborranys de `scripts/tech-src/web/` quan es reprengui.
3. Retrats d'en Bit (`img/tech/bit-*.webp`) amb el plàstic brillant de les capçaleres.
4. Política de privacitat (Tech, consentiment a la inscripció, IA del panell). Domini tech.numimates.com: aprovat el 04/10; l'app ja el reconeix (`variant.js`), falta afegir-lo al projecte de Vercel i al DNS.
5. Canviar la contrasenya feble de l'usuari admin `mmora`.

## Desplegament
Vercel CLI (`vercel deploy --prod`) des d'un checkout de `main` amb `.vercel`. No fer `vercel env pull`.
Per revisar aquesta branca sense tocar producció: des d'un checkout de `claude/eloquent-galileo-fmypbm`, `vercel` (sense `--prod`) dona una URL de previsualització.

## Auditoria de contingut aplicada (octubre 2026)
- **MakeCode dins de l'app** (`tech-mc.js`): el botó «MakeCode» del programa de Robòtica obre makecode.microbit.org en mode controlador amb el programa ja en blocs i les extensions maqueen/neopixel; si la xarxa el bloqueja, dona el codi per copiar. CSP `frame-src` i `usb` a `vercel.json`.
- **Laboratori** (`tech-lab.js`): projectes lliures d'escenari, món d'en Bit i pista del Maqueen; es desen al portafoli i el panell els marca.
- **Lectura en veu alta**: llegeix primer la correcció i els missatges d'en Bit, passa a automàtica després del primer toc i avisa si no hi ha veu.
- **Reptes «⭐ extra»** (`extra: true`): opcionals, amb botó «Salta» a la barra de dalt.
- **Robot**: reptes llargs reduïts, desconnectades i explicació oral a cada projecte, benestar digital, vocabulari més senzill.
- **Creadors**: eixos x/y activables a l'escenari, paleta reduïda i «Posa una base» als projectes llargs.
- **Robòtica**: números arrodonits (taula de velocitats i de girs), reptes extra, plantilles, referents (Carme Torras, Katherine Johnson, Helen Greiner, Margaret Hamilton, Grace Hopper), energia i enginyeria responsable.
- **Digital**: unitat 3 nova, edat mínima de les dades, telèfons d'ajuda visibles (116 111, 017, 112).
- Les edats dels cursos no s'han canviat.


## Pla en curs (octubre 2026): «pujar de nivell»
Petició del Moisés (8-10-2026): gràfics més realistes i espectaculars a tots els jocs (sobretot a Tech), acabar tots els
cursos de Tech i crear un curs de disseny 3D en dos nivells. Sense desplegar a producció.
1. **Base** (fet): Tech Web (c4) i Tech 3D · Nivell 1 (`model`, c6) i · Nivell 2 (`modelpro`, c7) registrats; contracte a
   `scripts/TECH-3D.md`.
2. **En marxa**: renderitzador `tech-model3d.js` (scripts/3d/model3d.mjs) · motor `tech-model.js` · acabar Tech Web ·
   gràfics del món 3D d'en Bit (bit3d.mjs) · arena 3D del Maqueen (robo3d.mjs) · art de l'escenari de Creadors.
3. **Després**: contingut de Tech 3D (2 × 32 sessions amb guies), illes i escenes 3D dels cursos nous (món «taller»),
   tornar a renderitzar illes/escenes amb el renderitzador millorat, Laboratori «Taller 3D», panell i solucionari.
4. **Després**: gràfics dels jocs de Numi Mates (batalles, cromos, lliga, missions) i de Numi Ment.

### Estat a 9-10-2026 (abans del desplegament)
- **Fet i provat:** Tech Web (32 sessions); Tech 3D · Nivell 1 (unitats 1, 2, 3, 5 i 7: 20 sessions) i Nivell 2
  (unitats 1, 2, 3, 5, 6 i 7: 24 sessions) amb guies; renderitzador `tech-model3d.js` i motor `tech-model.js`
  (editor amb el dit i editor de codi, també al mòbil); Laboratori «Taller 3D» i «Taller 3D amb codi»; gràfics nous del
  món d'en Bit, de l'arena del Maqueen, de l'escenari de Creadors, de les batalles i cartes de Numi Mates i dels jocs
  de Numi Ment; món 3D «fab» i totes les illes, escenes, capçaleres i retrats tornats a renderitzar; colors de la
  teoria de Numi Pro en fosc.
- **Pendent:** Tech 3D · Nivell 1, unitats 4 (Construir), 6 (Del model a l'objecte) i 8 (El meu disseny); Nivell 2,
  unitats 4 (Variables i paràmetres) i 8 (Producte final). Surten com a «aviat» a l'app. Els agents de contingut
  segueixen `scripts/TECH-3D.md` i `scripts/TECH-3D-PROGRAMA.md`.

