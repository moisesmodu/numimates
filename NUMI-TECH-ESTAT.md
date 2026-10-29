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
| **Robot** (6-9 · 1r-3r, curs d'entrada) | unitats 1-8, 32 sessions (`tech-c1.js`, `tech-guide-c1.js`, TANI a `tech-learn.js`), revisades | 0 errors · 0 avisos (guia completa) | 32/32 bé |
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
(revisat el 29-10-2026: Web, Tech 3D N2 U4/U8, els retrats d'en Bit i les millores dels editors de blocs ja estan fets)
1. **Revisar** els cursos (Moisés): Robot, Robòtica, Creadors i Digital; també Web, Tech 3D i Tech IA.
2. Política de privacitat (Tech, consentiment a la inscripció, IA del panell).
3. Domini tech.numimates.com: l'app ja el reconeix (`variant.js`); falta afegir-lo al projecte de Vercel i al DNS (Moisés).
4. Canviar la contrasenya feble de l'usuari admin `mmora` (Moisés).
5. Editors de blocs, si es vol anar més enllà: velocitats a Creadors, pistes que reaccionen al programa.

## Desplegament
Des del 14-10-2026 el projecte de Vercel (mates-numi) està connectat a GitHub: cada push a `main` es publica sol.
Si cal fer-ho a mà: Vercel CLI (`vercel deploy --prod`) des d'un checkout de `main` amb `.vercel`. No fer `vercel env pull`.
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
- **Pendent:** Tech 3D · Nivell 1 ja és complet (32 sessions; unitats 4, 6 i 8 fetes el 15 i el 23-10); Nivell 2,
  unitats 4 (Variables i paràmetres) i 8 (Producte final). Surten com a «aviat» a l'app. Els agents de contingut
  segueixen `scripts/TECH-3D.md` i `scripts/TECH-3D-PROGRAMA.md`.


## Accés i control del professor (14-10-2026)
- **Edats**: l'alumne ja no veu edats ni cursos escolars dels cursos de Tech (inici, xips i catàleg); `TLVL` diu què és el
  curs («Animacions i videojocs»…). Les edats continuen al panell, a la presentació i al dossier.
- **Unitats i sessions obertes**: `opts.tech.obert[curs]` = llista de sessions obertes (la valida `api/profe.js`). Al panell,
  a la fitxa del grup, «Unitats i sessions obertes»: obrir la sessió següent, una unitat sencera, una sessió, tot o res.
  Sense res marcat, en una classe només hi ha oberta la **unitat 1** (abans era tot obert); «Obre-ho tot» ho obre tot.
  `fins` (obert fins a una sessió) es manté per als grups d'abans. Les sessions fetes sempre es poden repetir.
- **De Tech a Mates amb el mateix usuari** (només en aquest sentit): un compte de Tech pot fer mates si l'administrador li
  marca «Pot entrar també a: Numi Mates» o si el grup és «Numi Mates i Numi Tech» (`mathsApp` a variant.js). A l'inici de
  Tech surt el botó «Fes mates amb el mateix usuari»; el primer cop tria el curs que fa i fa la prova de nivell; a Mates hi
  ha «Torna a Numi Tech». A la mateixa adreça (vercel.app) es canvia aquí mateix; a les adreces pròpies obre l'altra app
  amb l'usuari ja escrit (`?entra=usuari`). Els alumnes de Mates no veuen cap botó cap a Tech.
- Arreglat: amb connexió lenta, els cursos que es carreguen després de tech.js (Creadors, Web, 3D…) sortien amb les
  sessions «en preparació» fins a canviar de pantalla; ara es torna a pintar en acabar de carregar.

## Panell del professorat: alumnes, usuaris i contrasenyes (14-10-2026)
- **Usuari i contrasenya a la llista d'alumnes** (i a la fitxa): la contrasenya es demana al servidor quan es vol veure
  (ull a la fila, «Mostra les contrasenyes» per a tota la llista). Dels comptes d'escola (alumnes en un grup) es desa xifrada
  (`mates.alumnes.pass_vista`, `setVista`/`syncVista` a _lib.js): en l'alta (panell o codi de classe), quan es canvia i cada
  vegada que l'alumne entra amb l'usuari (així apareixen les d'abans); s'esborra si surt del grup. Fora d'un grup no es desa.
  Les d'abans que encara no hi són: avís a la llista i «Posa'ls-en de noves» (acció `setpass_bulk`). Llapis a cada fila per
  canviar-la. Accions `passos` i `setpass_bulk` (api/profe.js): només alumnes dels grups del docent (l'admin, tots).
- **Targetes d'accés** quan es vulgui: de tot el grup (fitxa del grup), de la llista, de la selecció o d'un alumne.
- **Grups de Numi Tech**: la llista mostra curs, progrés (sessions fetes) i on és cada alumne (sessió a mitges o la següent),
  sense lliçons, precisió ni porta; el resum mostra sessions fetes, progrés mitjà, projectes, on és cada alumne i com va
  cada unitat. «Sense començar» i «No ha entrat mai» ja compten les sessions de Tech.
- Arreglat: les instruccions, el QR i l'enllaç d'un grup de Tech portaven a Numi Mates; ara porten a Numi Tech.

## Teclat, sense connexió i «Per què?» (14-10-2026)
- **Editors de blocs amb el teclat i lector de pantalla** (`tech-a11y.js`, en Bit, Maqueen, escenari de Creadors i Taller 3D
  amb blocs): tot es fa amb Tab i Retorn; els blocs `div.tbh` passen a ser focusables (`role=button`); amb un bloc triat,
  Supr/Retrocés l'esborra, Alt+↑/↓ el mou, Esc el deixa anar, ↑/↓ passa d'un element del programa al següent. Quan es torna
  a pintar el programa, el focus torna on era. Avisos per al lector (`#tlive`). Només actua si l'última interacció és amb
  el teclat. Contorn de focus visible (tech.css).
- **Sense connexió** (`sw.js`): xarxa primer i, si falla, el que es va desar l'última vegada (portada, scripts, estils,
  imatges, sons). Mai desa `/api` ni el panell. Avís «Sense connexió…» i «Tornes a tenir connexió» (app.js). El progrés ja
  es desava al dispositiu i es puja sol. Per desactivar-lo: obrir amb `?nosw=1` (l'esborra d'aquell navegador) o publicar
  `sw.js` amb `OFF = true` (l'esborra de tothom). `vercel.json`: `/sw.js` sense memòria cau.
- **«Per què?» en fallar** (Mates i Pro, exercicis de triar o d'escriure): botó que demana a l'assistent per què la resposta
  no és bona (2-4 frases, raonament i un truc; `ctx.why` a `api/chat.js`). Només si hi ha assistent: en un grup, si el docent
  l'ha activat (`opts.xat`); fora de grups, Premium. No surt a exàmens, batalles, prova de nivell ni avaluació.
- **Dossier per a centres**: pàgina 6 amb «Pensat per a l'escola» (pantalla, la justa · IA amb criteri · per a tothom ·
  també sense wifi).

## Tech 3D · Nivell 1, unitat 4 «Construir» (15-10-2026)
- m4-1 Alinear · m4-2 Duplicar i repetir · m4-3 Simetria: el mirall · m4-4 Projecte: la casa del futur (portafoli).
  Encàrrec: la maqueta del «Barri del Futur» de la Mireia, l'arquitecta del barri. Guies, 9 animacions, insígnies i
  solucionari. Validador: 188 sessions, 0 errors; cap pas necessita scroll a 390 × 740 ni a 1440 × 800.
- Límits del motor que les sessions tenen en compte: «Duplica» després d'haver mogut la còpia només repeteix el moviment
  fet després de copiar (no tot el desplaçament, com Tinkercad); «Mirall» gira la selecció al seu lloc (no la passa a
  l'altre costat de l'eix); la comprovació de simetria és estricta (1-1,5 mm ja falla). Per això els reptes donen les x.

## Tech 3D · Nivell 1, unitat 6 «Del model a l'objecte» (15-10-2026)
- m6-1 Com treballa una impressora 3D (capes, filament, temps; plastilina per capes) · m6-2 Gruix i base plana (peces
  d'escacs del club del barri: corona que flota, parets de 0,5 mm, con al revés; regla dels 45°) · m6-3 Exportar el fitxer
  STL (triangles, sense color ni unitats, escala) · m6-4 Projecte: el porta-llapis (forats de 9 mm, fons i parets de 2 mm).
  13 animacions, guies, insígnies i solucionari. Validador: 192 sessions, 0 errors; cap pas necessita scroll.
- El motor no comprova voladissos ni que hi càpiguen els llapis: s'ensenya amb vistes laterals, `flatbase`, `count` (6
  forats) i `wall`, i als criteris del projecte l'alumne ho revisa. Les puntes de cons i estrelles compten com a paret prima.

## Només la sessió que obre el professor (21-10-2026)
- Petició del Moisés: als grups de les escoles, l'alumne només pot entrar a la sessió que obre el professor.
- `opts.tech.nomes` (per defecte **activat** a tots els grups de Tech, també els d'abans): l'alumne només pot entrar a les
  sessions de `obert[curs]`; ni les ja fetes. Mentre el professor no ha obert ni tancat res d'un curs (no hi ha
  `obert[curs]`), val la regla d'abans: la unitat 1 oberta (arreglat el 21-10: al Mater els sortia tancada). Si no n'hi ha cap d'oberta, l'inici diu
  «Encara no hi ha cap sessió oberta». Es pot desactivar a la fitxa del grup («Només la sessió que obre el professor»):
  aleshores torna la regla d'abans (obert/fins, unitat 1 per defecte i les fetes es poden repetir). «Obre-ho tot» el desactiva.
- Panell (fitxa del grup, «Sessions obertes»): des del 28-10-2026 (petició del Moisés per al Mater) se'n poden obrir
  diverses: tocar una sessió l'obre o la tanca (ja no tanca la que hi havia), «Obre la unitat» / «Tanca la unitat» per a
  unitats senceres, «Obre la següent: U.N…» (s'afegeix a les obertes; va després de l'última oberta en l'ordre del curs o
  de `opts.tech.ultima[curs]`) i «Tanca-les totes». L'interruptor ara diu «Només les sessions que obre el professor».
- App: en acabar una sessió, si n'hi ha una altra d'oberta i sense fer, surt «Següent sessió →» al costat d'«Inici».
- App: a l'inici, cada 15 s es consulta quina sessió hi ha oberta (`tWatch`); en tocar una sessió tancada, primer es
  pregunta al servidor (potser s'acaba d'obrir). La comprovació és a l'app (com abans); el servidor no bloqueja el progrés.

## Tech 3D · Nivell 1, unitat 8 «El meu disseny» (23-10-2026): el Nivell 1 ja és complet
- m8-1 La idea · m8-2 Modelar-lo · m8-3 Revisar-lo · m8-4 Presentació i diploma. Fira d'Invents de l'escola i el casal; exemple
  guiat: el test de la Jana per a l'hort de P4. El disseny propi passa d'una sessió a la següent (cada `m3free` comença amb
  l'últim model desat a m8; si no n'hi ha, el de la Jana). Revisió entre iguals canviant de lloc, amb rúbrica en paper.
- Diploma amb el pas `diploma` de sempre (com r8-4, k8-4, g8-4) i diploma en paper a la guia. 12 animacions, guies,
  insígnia `m8fira`, solucionari. Validador: 196 sessions, 0 errors; cap pas necessita scroll.
- La versió final no exigeix el gruix de paret (perquè ningú no s'encalli abans del diploma); a la v3 de m8-3 sí.

## Tech 3D · Nivell 2, unitat 4 «Variables i paràmetres» (23-10-2026)
- p4-1 Variables · p4-2 Expressions · p4-3 Disseny paramètric · p4-4 Projecte: la caixa a mida. Clienta: la Noa, del museu
  de ciències naturals. Primera unitat amb l'editor de text (`text: true`, primer amb blocs i després Codi). Comprovacions
  `param` a quasi tots els reptes: escriure números a mà no passa. 10 animacions, guies, solucionari. 200 sessions, 0 errors.
- Límit del motor: `param` fa servir un sol nom de variable (no «ca|es»); per això les variables comprovades es diuen igual
  en català i castellà. Pendent del Nivell 2: unitat 8 (Producte final).
- **Pla següent (petició del Moisés, 23-10):** editor 3D més a l'estil Tinkercad als dos nivells (arrossegar formes, cotes
  editables, barra d'eines, cub de vistes, text en relleu, duplicar i mirall arreglats), sessions pràctiques noves (clauer amb
  nom, suport de mòbil, tallagaletes, organitzador, caixa amb tapa) amb «porta-ho a Tinkercad o a la impressora», Nivell 2
  amb menys blocs (l'editor com a eina principal; el codi en text per a variables, bucles i mòduls) i dossier actualitzat
  (centres i famílies).

## Editor 3D estil Tinkercad (24-10-2026)
- Barra d'eines a dalt de la vista (Desfés/Refés, Duplica, Esborra, Forat/Sòlid, Mirall ▾ amb «Còpia a l'altre costat»,
  Alinea ▾ amb «A terra», Agrupa/Desagrupa, Més peces, Totes, Fantasma, Resultat), cub de vistes, cotes en mm a la vista que es
  poden tocar per escriure-les, formes que s'arrosseguen a la placa (o es toquen i surten al lloc lliure més a prop del centre),
  pestanya Forma (paret del tub, punta del con, puntes de l'estrella, radi de la caixa rodona), dreceres de teclat.
- Duplica repeteix tot el salt des de l'original. Formes noves: **text** (lletra pròpia «Numi 3D», traç de 2,4 mm),
  semiesfera i caixa rodona (també al llenguatge del Nivell 2: `text`, `semiesfera`, `arrodonit`). «Veure el codi» i `.scad`
  de qualsevol model. Al Nivell 2, els passos amb `text: true` s'obren a Codi amb botons que insereixen codi.
- `param` accepta noms bilingües (`mida|medida`). Pistes i guies de les unitats publicades adaptades (cub de vistes, barra
  d'eines, Duplica i Mirall nous). Totes les pistes comprovades amb l'editor real a 390 i 1440.

## Tech 3D més pràctic: tallers i Nivell 2 amb menys blocs (24-10-2026)
- **Tallers** (sessió pràctica extra, `proj: true, taller: true`, clau anglesa al mapa en lloc d'un segon trofeu):
  Nivell 1 (ara 37 sessions): m3-5 suport per al mòbil, m4-5 organitzador de taula, m5-5 rètol de la porta (text en relleu),
  m6-5 de Numi a la impressora (STL → Tinkercad «Importa» → laminador Cura/PrusaSlicer, llista de comprovació; es pot fer
  sense impressora ni internet), m7-5 tallagaletes. El clauer de m5-2 ara porta el nom amb la forma Text.
  Nivell 2 (ara 35 sessions, 31 a punt; falta la U8): p1-5 porta-noms (editor → «Veure el codi»), p3-5 organitzador de
  cables, p7-5 caixa amb tapa que encaixa (tolerància 0,3 mm, paramètrica).
- **Nivell 2 amb menys blocs:** totes les passes de codi de les unitats 1-4 s'obren a la pestanya Codi amb botons que
  insereixen codi (els blocs, com a opció); només p1-1:9 comença amb blocs. Descripció nova del curs.
- Illes 3D tornades a renderitzar amb 5 parades (Nivell 1 unitats 3-7, Nivell 2 unitats 1, 3 i 7).
- Al mòbil, «Proporcional» és el cadenat de la barra de pestanyes quan la pestanya és Mida (abans no es veia al mòbil).
- Solucionari: 208 sessions, 2.435 respostes. Validador: 208 sessions, 0 errors.

## Tech 3D · Nivell 2, unitat 8 «Producte final» (26-10-2026): els dos nivells complets
- p8-1 El repte i les especificacions · p8-2 El prototip paramètric · p8-3 Proves i iteració · p8-4 Presentació i diploma.
  Fira de producte de l'estudi amb encàrrecs reals; exemple guiat: el comptador de pals i anelles de la Sílvia (P5). Prototip
  opcional amb l'editor que passa a codi («Codi»), versions v1-v3 que continuen d'una sessió a la següent, revisió entre
  iguals i diploma. Tech 3D: Nivell 1 37 sessions, Nivell 2 35. Numi Tech: 212 sessions, 0 errors.

## Tech Digital: unitats 4-6, ara 24 sessions (27-10-2026)
- U4 Ciberseguretat (missatges trampa, permisos de les apps, wifi/actualitzacions/còpies, escape room), U5 La IA a fons
  (com es parla amb una IA amb xats simulats, imatges falses i deepfakes, què aprèn la IA de nosaltres, manual de la classe),
  U6 Consumidors digitals (publicitat amagada, compres dins dels videojocs, algoritmes de recomanació, l'anunci honest).
  Exemples inventats; telèfons d'ajuda només 116 111, 017 i 112. Illes 3D de les unitats 4-6.
- El diploma del curs passa de d3-4 a d6-4 (d3-4 i la seva guia ara diuen «unitat acabada»). Mòdul Digital al dossier: 12 €.
- Numi Tech: 224 sessions, solucionari 2.608 respostes, 0 errors.

## Curs nou: Tech IA (12-16 anys, 1r-4t ESO) — 8 unitats, 32 sessions (28-10-2026)
- Contracte: `scripts/TECH-IA.md`. Motor `tech-ia.js`/`tech-ia.css` (curs `ia`, fitxers c8): `iatrain` (entrenar un
  classificador al navegador amb càmera, dibuix, so o conjunts d'exemples propis; res no surt del dispositiu), `iangram`
  (minimodel de llenguatge), `iachat` (xats simulats amb al·lucinacions per caçar; IA real opcional només si el docent ha
  activat l'assistent, màx. 8 preguntes per sessió, mode «NumiLM» a `api/chat.js`), `iaprompt`, `iaagent` (pla, eines,
  permisos, memòria, injecció de prompts), `iavibe` (vibe coding amb l'editor web: pestanya `app.js` i proves `run`),
  `iacard` (fitxes: model, riscos, transparència…). Nivell PRO per a 3r-4t (`pro: {…}`), botó PRO a la barra.
- Unitats: 1 Què hi ha dins una IA? · 2 Entrena la teva IA · 3 Models de llenguatge · 4 Imatge, veu i vídeo generats ·
  5 Crea amb IA (vibe coding) · 6 Agents · 7 IA i societat · 8 Projecte: una IA per al nostre centre (diploma).
  Fets verificats a la web (llei europea d'IA, OIT 2025, AIE 2025, OWASP 2025…), fonts a les guies.
- Altres canvis: `tech.js` (el temporitzador de la pausa ja no reactiva «Continua» en un altre pas), `imprimeix.html`
  (capçalera de la graella), `vercel.json` (guia c8 al servidor), `variant.js`/`middleware.js` (full d'estil `tech-ia`).
- Numi Tech: 256 sessions, solucionari 2.942 respostes, 0 errors.

## Editors de blocs més «Scratch» (28-10-2026) — Robot, Robòtica i Creadors
- En arrossegar: vista prèvia translúcida al lloc on anirà el bloc, el bucle o el «si» que el rebrà s'il·lumina i la paleta
  fa de paperera. Animació del bloc que vola de la paleta al programa, sons de «clic», vibració curta amb el dit.
- Refés (al costat de Desfés; Ctrl+Maj+Z / Ctrl+Y), Duplica al bloc triat, estat buit més clar, la paleta del mòbil
  manté la posició, el programa del mòbil no s'escapa en arrossegar i mostra el bloc nou.
- Robot: números, colors, notes, condicions i funcions es toquen dins del bloc (selector petit); els botons d'abans hi
  continuen. Robòtica: «Pas a pas». Arreglats: classe `tdin` duplicada i text seleccionat en arrossegar amb el ratolí.
- Fet el 29-10-2026: «Pas a pas» a Creadors (`sgStep` i `M.stepBlock` a tech-stage.js: avança fins que comença el bloc
  següent del personatge que s'edita, el temps passa durant les esperes i, en acabar, es judica com «Comprova»).
  El bloc de l'error en vermell: a Robòtica, el bloc de motors que anava quan ha xocat (si el repte demana no tocar
  res) o el bucle penjat; a Creadors, l'últim bloc de moviment quan toca el que no ha de tocar, o el bucle penjat.
  Zoom dels blocs del programa (− / +, surt a partir de 6 blocs, es recorda al dispositiu: `TZ_V`, `--tz`) als tres
  editors; arrossegar funciona igual amb zoom.
