# Numi Tech · Tech 3D (Nivell 1 i Nivell 2): contracte del taller 3D

Llegeix també `scripts/TECH-CONTRACTE.md` (normes de contingut, format de sessions i guies). Aquest document fixa el que
han de compartir el motor (`tech-model.js`), el renderitzador 3D (`tech-model3d.js`) i el contingut (`tech-c6.js`, `tech-c7.js`).

## Els dos cursos
| | **Tech 3D · Nivell 1** (`model`, sessions `m1-1…m8-4`, fitxers c6) | **Tech 3D · Nivell 2** (`modelpro`, sessions `p1-1…p8-4`, fitxers c7) |
|---|---|---|
| Edat | 9-12 (4t-6è) | 12-14 (1r-2n ESO) |
| Com es modela | **Amb el dit**: es posen formes a la placa i es mouen, giren i escalen amb tiradors i amb números (mm) | **Amb blocs i amb codi**: un programa construeix el model (com OpenSCAD, però en blocs; a partir de la U4 també en text) |
| Conceptes | espai 3D, vistes, formes, mesures, alinear, duplicar, mirall, **forats** (restar), impressió 3D, STL, disseny per a persones | paràmetres, transformacions i ordre, **unió / diferència / intersecció**, variables, expressions, bucles i patrons, mòduls, toleràncies i encaixos, fabricació |
| Exporta | STL | STL i `.scad` |

Les unitats i els títols de les sessions són al catàleg `TECH` de `tech-c1.js` (es poden millorar els títols, no els ids).

## Unitats i coordenades
- Tot en **mil·límetres**. Eix **z amunt** (com a les impressores 3D). La placa d'impressió és el pla z = 0, centrada a l'origen,
  de 200 × 200 mm per defecte (`plate`).
- Angles en **graus**. Gir d'Euler en ordre X, després Y, després Z, al voltant del **centre** de la peça.

## El model (format comú)
```js
// una peça (primitiva)
{ id: 'a1', t: 'box', s: [40, 30, 20], p: [0, 0, 10], r: [0, 0, 0], c: '#7C5CFF', hole: false, g: null, top: 1, w: 2, n: 5, cr: 3, txt: 'NOM' }
```
- `t` (tipus) i el significat de `s` (mides de la caixa que l'envolta abans de girar, en mm):
  - `box` caixa · `cyl` cilindre (s.x, s.y diàmetres de l'el·lipse, s.z alçada) · `sph` esfera / el·lipsoide (diàmetres)
  - `cone` con amb base s.x × s.y i alçada s.z; `top` (0-1) fa un tronc (fracció del diàmetre de dalt)
  - `pyr` piràmide de base rectangular s.x × s.y i alçada s.z · `wedge` falca: caixa tallada en diagonal, l'alçada baixa de
    s.z (x mínima) a 0 (x màxima)
  - `torus` anell: diàmetre exterior s.x (i s.y), gruix del tub s.z · `tube` tub buit: com `cyl` amb paret `w` mm
  - `star` estrella de `n` puntes (radi interior 0,5) i `heart` cor, extrudits d'alçada s.z i caixa s.x × s.y
  - `hex` prisma hexagonal (cara plana a ±y)
  - `hsph` **semiesfera** (cúpula): la cara plana a baix i la cúpula a dalt; base el·líptica s.x × s.y, alçada s.z
    (una mitja esfera «rodona» de 30 mm és `s: [30, 30, 15]`)
  - `rbox` **caixa arrodonida**: una caixa amb totes les arestes i cantonades arrodonides de radi `cr` mm (per defecte 3;
    com a molt la meitat del costat més curt). Atenció: el radi és `cr` perquè `r` ja és el gir
  - `text` **text en relleu**: `txt` (com a molt 24 caràcters; les minúscules es fan majúscules) amb la lletra de blocs
    pròpia «Numi 3D». s.x = amplada de tot el text, s.y = alçada de les majúscules, s.z = gruix (el relleu). Els accents
    (À È É Í Ï Ò Ó Ú Ü Á Ñ) sobresurten una mica per dalt de s.y i la ce trencada (Ç) per baix. Lletres: A-Z, Ç, Ñ, les
    vocals accentuades, 0-9 i `. , ! ? - + ' · : / # ♥` i l'espai; qualsevol altre caràcter es dibuixa «?». Mida per
    defecte: lletres de 12 mm i 3 mm de gruix; els traços fan 2 unitats de lletra (2,4 mm amb lletres de 12 mm; amb
    lletres de 10 mm, 2 mm). Per fer-ne la caixa d'un text: `m3TextSize('NOM', alçada, gruix)` → `[amplada, alçada, gruix]`
    (a 12 mm d'alçada, «NOM» fa 30,48 mm d'ample). Una placa amb nom: una `rbox` de 3 mm i el `text` a sobre (p.z = 3 + gruix / 2).
    Comprovacions: `wall` amb `min: 1.2` el passa (els caps dels traços tenen xamfrans); `one` no, si les lletres van soltes.
- `p` = **centre** de la caixa que envolta la peça (abans de girar). «Està sobre la placa» vol dir `p.z - s.z/2 = 0`
  (sense gir).
- `m` (opcional, Nivell 2): matriu afí 4 × 4 en mm (16 nombres, ordre de columnes com three.js `Matrix4.elements`). Si hi
  és, **substitueix** `p` i `r`: la forma canònica centrada a l'origen amb mides `s` es transforma amb `m` (pot incloure
  girs al voltant de l'origen, escales i moviments encadenats del programa). Així `gira`/`mou`/`escala` del codi
  s'apliquen com a OpenSCAD (al voltant de l'origen) sense haver de convertir a angles d'Euler.
- `hole: true` = **forat**: es resta a les peces sòlides. Nivell 1: semàntica de Tinkercad, totes les peces sòlides es
  sumen i tots els forats es resten (dins d'un grup `g`, el forat només resta a les peces del grup).
- Un **model** és `{ parts: [...] }` (Nivell 1) o `{ tree }` (Nivell 2). Tots dos es converteixen en un **arbre CSG**:
  ```js
  { op: 'union' | 'diff' | 'inter', kids: [ ... ] }   // diff = el primer fill menys tots els altres
  { prim: {peça} }                                    // fulla
  ```
  `m3Tree(model)` (a `tech-model.js`) fa la conversió. El Nivell 1 dona `diff(union(sòlides), union(forats))` per grup.

## Pertinença geomètrica (la font de veritat per corregir)
`tech-model.js` té `m3Inside(prim, x, y, z)` i `m3In(tree, x, y, z)` en JavaScript pur (sense three, també en Node):
es desfà el gir i la posició i es mira si el punt és dins la forma canònica. Totes les comprovacions dels reptes es fan
mostrejant punts amb aquestes funcions (no amb la malla de three), de manera que el validador funciona sense navegador.
El renderitzador **ha de dibuixar exactament les mateixes formes** (mateixes mides, mateix centre, mateix ordre de gir).

## Comprovacions dels reptes (`checks`)
Cada repte té una llista de comprovacions que es marquen en directe (com al curs Web). Tipus:
- `{ k: 'match', target: model, th: 0.85 }` semblança (IoU volumètric) amb un model objectiu (el «fantasma»)
- `{ k: 'size', ax: 'x'|'y'|'z', v, tol }` mida total del resultat · `{ k: 'fit', box: [x,y,z] }` cap dins d'una caixa
- `{ k: 'onplate' }` toca la placa i no hi ha res per sota · `{ k: 'flatbase', min: 100 }` base plana d'almenys N mm²
- `{ k: 'hole' }` té almenys un forat que travessa o buida · `{ k: 'count', t?, min?, max? }` nombre de peces (d'un tipus)
- `{ k: 'vol', min?, max? }` volum en cm³ · `{ k: 'one' }` és una sola peça connectada (no hi ha trossos solts)
- `{ k: 'sym', ax: 'x'|'y' }` simètric · `{ k: 'wall', min: 1.2 }` cap paret més prima de N mm (aproximat)
- `{ k: 'uses', b: 'diff'|'rep'|'def'|'var'|… }` (Nivell 2) el programa fa servir aquest bloc
- `{ k: 'param', v: 'mida', vals: [20, 40] }` (Nivell 2) amb aquests valors de la variable el resultat continua complint
  la resta de comprovacions (disseny paramètric de veritat)
Cada comprovació porta `t: "ca|es"` (el text que veu l'alumne) i el motor calcula `m3Check(model, checks)` → `[{ok, t}]`.

## Nivell 2: el llenguatge (blocs i text)
Programa = llista d'instruccions. Les mateixes instruccions es poden veure com a **blocs** o com a **text** (estil OpenSCAD
en català/castellà neutre: `cub`, `cilindre`, `esfera`, `con`, `mou`, `gira`, `escala`, `color`, `uneix`, `resta`,
`interseca`, `repeteix`, `defineix`, i variables). En castellà la paraula clau és la mateixa que en català si és clara, o
s'accepten les dues (`cubo`/`cub`). Exemple (text):
```
mida = 30
resta {
  cub(mida, mida, mida)
  repeteix i de 0 a 3 {
    gira(0, 0, i * 90) mou(mida / 2, 0, 0) cilindre(8, mida + 2)
  }
}
```
- Valors: números, variables i expressions `+ - * / ( )`, `sin`, `cos` (graus), `min`, `max`. Res d'`eval`: analitzador propi.
- `mou/gira/escala/color` afecten la instrucció o el bloc que ve just després (com OpenSCAD).
- Les primitives de codi es col·loquen com a OpenSCAD: `cub` amb una cantonada a l'origen (o `centrat`), `cilindre` amb la
  base a z = 0. El motor les converteix al format de peça d'aquest document.
- Límits de seguretat: màx. 400 peces generades i 10.000 iteracions; si se supera, missatge amable.

## Renderitzador: `tech-model3d.js` (mòdul ES, càrrega diferida)
Font: `scripts/3d/model3d.mjs` → `node scripts/3d/build-model.mjs` (three + three-bvh-csg + three-mesh-bvh, esbuild).
```js
export function ok()                       // hi ha WebGL?
export function create(el, opts)           // → vista
  // opts: { plate: 200, snap: 1, quality: 'auto'|'high'|'low', mode: 'edit'|'result', editable: true,
  //         onPick(id|null), onMove(id, p), onDone(), bg: 'studio'|'workshop' }
vista.set(model)               // model { parts } o { tree }; es recalcula el CSG
vista.mode('edit'|'result')    // edit: cada peça a part, els forats translúcids ratllats; result: el sòlid final (CSG)
vista.select(id|null)          // ressalta la peça i mostra els tiradors (moure en el pla, alçada, girar, escalar)
vista.target(model|null)       // «fantasma» translúcid de l'objectiu
vista.view('iso'|'front'|'top'|'right'|'left'|'back'); vista.fit()
vista.measure(on)              // cotes en mm de la peça seleccionada
vista.snapshot(w, h) → dataURL // captura
vista.stl() → ArrayBuffer      // STL binari del sòlid final, en mm, z amunt
vista.dispose()
// afegits per a l'editor (octubre 2026):
//   opts.dims: true    → amb una sola peça triada es veuen les seves cotes (amplada, fondària, alçada i, si està enlairada,
//                        l'alçada sobre la placa) i es poden tocar: opts.onDim({ k: 's'|'p', ax, v, rect })
//   opts.onCam(az, el) → la càmera ha girat (el cub de vistes del motor la segueix)
//   opts.inset         → { top, bottom } (o una funció) en px tapats per les barres: l'encaix centra el model a la resta
vista.set(model, { still: true })   // sense l'animació de caiguda (arrossegar formes de la paleta)
vista.dropAt(x, y, sense?) → { p: [x, y], z, on }   // on cauria una peça deixada anar en aquest punt de la vista
vista.drop(id)                      // la peça cau una mica (en deixar-la anar) · vista.snap(mm)
export async function thumb(model, w, h) → dataURL   // miniatura (preguntes, portafoli, diapositives, paleta de formes)
```
**Qualitat (obligatori, és el punt fort del curs):** materials PBR de plàstic (com un PLA brillant), entorn d'il·luminació
(PMREM/RoomEnvironment), ombres suaus, oclusió ambiental (GTAO o SSAO) si l'aparell ho permet, una placa d'impressió
realista (vidre/PEI texturat amb quadrícula i marques cada 10 mm), fons d'estudi amb degradat, un «halo» suau a la peça
seleccionada, animacions d'aparició (les peces cauen i reboten una mica), transició suau de la càmera entre vistes, i
qualitat adaptativa (en mòbils fluixos, sense AO ni ombres de gran resolució, però igualment bonic). Controls tàctils:
un dit gira la càmera, dos dits fan zoom i desplacen; tocar una peça la selecciona; arrossegar-la la mou sobre la placa
(amb `snap`). Res de `OrbitControls` per defecte de qualsevol manera: ha de ser suau (amb inèrcia) i amb límits.

## Motor: `tech-model.js` + `tech-model.css` (script global, prefix `m3`)
- Model, `m3Tree`, `m3Inside`, `m3In`, `m3Check`, IoU, volum, caixa, connexió, simetria (Node i navegador).
- **Editor Nivell 1 (`M3ED`)**: un taller «amb el dit», a la manera dels editors de modelatge per blocs:
  - **Barra d'eines a dalt de la vista** (actua sobre la selecció; els noms són els de sempre, perquè les pistes en
    parlen): **Desfés / Refés** · **Duplica** · **Esborra** · **Forat / Sòlid** · **Mirall** ▾ · **Alinea** ▾ ·
    **Agrupa / Desagrupa** · **Més peces** (selecció múltiple) · **Totes** · i, a la dreta, **Fantasma** i **Resultat**.
    Al mòbil la barra només té les eines de la peça; Desfés/Refés, Fantasma i Resultat són a la barra de baix de la vista.
  - **Cub de vistes** (a dalt a l'esquerra de la vista): gira com la càmera; tocar una cara (Davant, Darrere, Dreta,
    Esquerra, Dalt) hi porta la vista amb la transició suau; el botó de sota torna a la perspectiva. Substitueix els
    botons de vistes (també a les vistes de m3look, m3code… ; als m3look amb `lock`, s'amaga).
  - **Cotes a la vista**: amb una peça triada es veuen amplada (vermell, x), fondària (verd, y) i alçada (blau, z) en mm i,
    si està enlairada, «↑ N mm» (alçada sobre la placa). **Tocar una cota obre un camp per escriure el número** (la base
    es queda on era). El botó del regle continua mostrant les mesures de tot el model.
  - **Inspector** (a la dreta a l'ordinador; a sota, compacte, al mòbil): **Sòlid / Forat**, els 12 colors, i les
    pestanyes **Mida** (amb **Proporcional**), **Posició** (x, y del centre i z de la base) i **Gir** (de 15 en 15°); al
    mòbil hi ha també la pestanya **Color** (sòlid/forat i colors). Les formes amb paràmetres tenen la pestanya **Forma**:
    **Paret** del tub (`w`), **Dalt** del con (`top`, en %), **Puntes** de l'estrella (`n`), **Radi** de la caixa
    arrodonida (`cr`); el text té el camp **Text** (a l'ordinador, sempre visible; al mòbil, a la pestanya Text).
    (Ja no hi ha la pestanya «Accions» al mòbil: les eines són a la barra de dalt.)
  - **Formes** (miniatures 3D de veritat): **tocar** una forma la posa en el lloc lliure més a prop del centre de la
    placa (sempre el mateix ordre: el centre, després a la dreta, a davant, a l'esquerra, a darrere, de 5 en 5 mm);
    **arrossegar-la** a la vista la deixa **on es deixa anar** (amb la quadrícula); si es deixa anar a sobre d'una peça
    sòlida, s'hi posa a sobre; els forats sempre van a la placa (z = 0). Al mòbil, la forma s'arrossega cap amunt (de
    costat, la paleta llisca). Formes noves a la paleta per defecte: `hsph`, `rbox`, `text` (els passos amb `palette`
    només tenen les que diuen).
  - **Duplica**: la còpia surt al costat (amplada + 5 mm en x). Si es mou la còpia i es torna a duplicar, la nova còpia
    repeteix **el salt sencer des de l'original** (el de la primera còpia més el que s'ha mogut): duplicar a −12, moure la
    còpia a 0 i tornar a duplicar posa la tercera a 12 sense escriure res.
  - **Mirall** ▾: «Esquerra ↔ dreta (x)» / «Davant ↔ darrere (y)» giren la selecció com en un mirall **on és** (no es mou;
    és el de sempre: després cal posar-la al seu lloc amb Posició). Opció nova: **«Còpia a l'altre costat (x | y)»** en
    fa una còpia emmirallada a l'altre costat de la línia del mig de la placa (x = 0 o y = 0): una ala a x = −12 dona
    la còpia a x = 12 en un sol toc. (Si la peça ja és al mig, avisa.) El text emmirallat es llegeix al revés (és un mirall).
  - **Alinea** ▾: amb una peça, «Al centre de la placa», «A terra (z = 0)» i «A sobre de la peça de sota»; amb diverses,
    X/Y/Z (Esquerra · Centre · Dreta, Davant · Centre · Darrere, A baix · Centre · A dalt) i, nou, **«A terra (z = 0)»**
    (totes juntes, sense desfer l'apilament) i **«Cada peça a terra»**.
  - **Teclat** (amb la vista triada; mai mentre s'escriu en un camp): fletxes = moure (el pas de la quadrícula; Maj = ×10),
    Re Pàg / Av Pàg o Ctrl + ↑/↓ = pujar i baixar, Ctrl + D duplicar, Ctrl + G agrupar, Ctrl + Maj + G desagrupar,
    Supr esborrar, Ctrl + Z / Ctrl + Y desfer / refer, H forat ↔ sòlid, Ctrl + A totes, Esc deixar anar. Cada acció
    s'anuncia al lector de pantalla.
  - **Veure el codi** (botó «Codi» de baix, als `m3free`, als passos amb `code: true` i a tots els passos del curs
    `modelpro`): el model de peces escrit en el llenguatge del Nivell 2 (cada peça amb `mou`, `gira` i la forma
    `centrat`; els forats dins d'un `resta`) i la descàrrega en `.scad`. Per a qualsevol model, `m3PartsProg(parts)`.
  - Tot cap en una pantalla (390 × 740 i 1440 × 800). A l'ordinador gran (≥ 1100 px) l'editor fa servir fins a 1240 px.
- **Editor Nivell 2 (`M3PG`)**: blocs tàctils (inserir amb un toc, com els editors de Robòtica) i, quan el pas ho permet
  (`text: true`), la pestanya **Codi**, que ara és **la que s'obre primer** (si el pas no diu `tab: 'blocks'`); tots dos
  sincronitzats. A la pestanya Codi hi ha una **paleta de fragments**: tocar `cub(20, 20, 20)`, `mou(10, 0, 0)`,
  `resta { }`, `repeteix i de 0 a 3 { }`, `mida = 20`, les variables i els mòduls del programa, o els símbols `( ) { } , + −
  × ÷ =` i `centrat`, els escriu on hi ha el cursor (amb el sagnat) i en deixa triat el primer número, per escriure'l de
  seguida; una forma o un bloc no es posen mai dins d'uns parèntesis (van just després). Els fragments són els dels
  `blocks` del pas (o tots). Els passos sense `text` continuen sent només de blocs. Errors amb línia i explicació en
  català i castellà.
- **Tipus de pas** (registrats a `TSTEP` des de `tech-model.js`):
  - `m3look` explorar un model i respondre (on és, quina vista és, quantes peces…), amb el model en 3D
  - `m3build` (Nivell 1) construir fins que es compleixin les `checks` (sovint `match` amb fantasma): `{ start?, palette?, target?, checks, hint }`
  - `m3code` (Nivell 2) programar fins que es compleixin les `checks`: `{ start?: prog, blocks?: [...], text?: true, checks }`
  - `m3predict` (Nivell 2) quin model fa aquest programa? (opcions amb miniatures 3D)
  - `m3spot` (Nivell 2) troba l'error del programa · `m3fix` (Nivell 1) arregla el model (està mal mesurat, no toca la placa…)
  - `m3free` projecte lliure amb criteris (`crit`) i desar al portafoli (`TPORT.model`, amb miniatura i descàrrega STL)
  - targetes `learn` amb `media: { k: 'model', model, view?, spin? }` (TMEDIA) i diapositives `k: 'media'`
- `TVALID` per a cada tipus: el validador comprova que cada `m3build`/`m3code` té una solució (`sol`) que compleix les
  `checks` i que `start` no les compleix.
- **Laboratori**: una eina «🧊 Taller 3D» a `tech-lab.js` (la integra l'integrador).
- Portafoli: `kind: 'model'` amb `{ model | prog, thumb }`.

## Fitxers de cada agent
- Renderitzador: `scripts/3d/model3d.mjs`, `scripts/3d/build-model.mjs`, `tech-model3d.js`, `package.json` (devDeps).
- Motor: `tech-model.js`, `tech-model.css`, `scripts/tech-src/model/u1`, `scripts/tech-src/modelpro/u1` (unitats de
  mostra per provar), el validador de proves i `scripts/tech-sol.mjs` (només per afegir els tipus nous).
- Contingut: `scripts/tech-src/model/u*` i `scripts/tech-src/modelpro/u*` → `node scripts/tech-build-course.mjs model c6 "Tech 3D · Nivell 1"`
  i `node scripts/tech-build-course.mjs modelpro c7 "Tech 3D · Nivell 2"`.
- Integració (no la toqueu): `tech.js`, `tech.css`, `index.html`, `tech-c1.js`, `tech-lab.js`, `vercel.json`, panell.

## Com s'escriuen els passos (guia per als agents de contingut)
Model de referència: les sessions `m1-1`, `m1-3` (`scripts/tech-src/model/u1`) i `p1-1`, `p1-3` (`scripts/tech-src/modelpro/u1`).
- `p` és el **centre** de la peça: un cub de 20 mm sobre la placa té `p:[x, y, 10]`.
- El text d'una comprovació va a `t: "ca|es"`; a `count` i `part`, `t` és el tipus de peça i el text va a `txt`.
- Els números de les comprovacions poden ser expressions (`'mida+4'`). Comprovacions extra del motor: `part`, `colors`, `zmax`, `nohole`.
- Nivell 1:
  ```js
  { k:'m3build', ph:'repte', q:'Mou el cub fins al fantasma…|…', start:{parts:[{id:'a1',t:'box',s:[20,20,20],p:[0,0,10]}]}, palette:['box'],
    target:{parts:[{t:'box',s:[20,20,20],p:[30,0,10]}]}, checks:[{k:'match',target:{parts:[{t:'box',s:[20,20,20],p:[30,0,10]}]},th:.92,t:'El cub és dins del fantasma|…'},{k:'onplate'}],
    hint:'Posició → x = 30|…', sol:{parts:[{id:'a1',t:'box',s:[20,20,20],p:[30,0,10]}]} }
  { k:'m3look', ph:'prova', q:"Troba l'estrella amagada|…", model:{parts:[…, {id:'estrella',t:'star',…}]}, pick:'estrella', yes:'…|…', ex:'…|…' }   // o opts:['3|3','4|4'], a:1, view:'top', lock:true
  { k:'m3fix', ph:'repte', q:"El pont flota: arregla'l|…", start:{parts:[{id:'a1',t:'box',s:[60,20,10],p:[0,0,20]}]}, fix:['a1'], checks:[{k:'onplate'}], hint:'…|…', sol:{parts:[{id:'a1',t:'box',s:[60,20,10],p:[0,0,5]}]} }
  ```
- Nivell 2 (programes en text; `"ca|es"` per tenir una versió a cada idioma):
  ```js
  { k:'m3code', ph:'repte', q:'…|…', start:'cub(20)', blocks:['cub','esf','mou'], target:'cub(20)\nmou(10, 10, 30) esfera(20)',
    checks:[{k:'match',target:'cub(20)\nmou(10, 10, 30) esfera(20)',th:.85,t:"S'assembla al fantasma|…"},{k:'uses',b:'mou'}], hint:'…|…', sol:'cub(20)\nmou(10, 10, 30) esfera(20)' }
  { k:'m3predict', ph:'prova', q:'Quin model fa?|…', prog:'cub(40, 10, 10)', opts:[{prog:'cub(40, 10, 10)'},{prog:'cub(10, 40, 10)'}], a:0, ex:'…|…' }
  { k:'m3spot', ph:'investiga', q:'…|…', prog:'cub(40, 40, 10)\nmou(20, 20, 70)! esfera(20)', target:'…', ex:'…|…' }   // el ! just després de la instrucció errònia
  // paramètric: checks:[{k:'size',ax:'x',v:'mida'},{k:'param',v:'mida',vals:[20,40]}]
  ```
- Paraules del llenguatge: formes `cub`, `cilindre(d,h)`, `esfera(d)`, `con(d,h,d2)`, `piramide`, `tub(d,h,paret)`,
  `semiesfera(d, h?)`, `arrodonit(x, y, z, radi?)` (es: `redondeado`; radi per defecte 2), `text("NOM", alçada?, gruix?)`
  (es: `texto`; per defecte 10 i 2; com `cub`, la cantonada de baix a l'esquerra a l'origen si no és `centrat`),
  `anell(d,gruix)`, `prisma`, `falca`, `estrella(d,h,n)`, `cor` i l'opció `centrat`; `mou`, `gira`, `escala`,
  `color("blau")`, `uneix`, `resta`, `interseca`; `repeteix i de 0 a 3 [pas n] {…}` (els dos extrems inclosos);
  `defineix nom(a) {…}`; variables `mida = 30`; comentaris `//`.
- Altres: `m3free` (projecte amb `crit`), targetes `learn` amb `media: { k: 'model', model | prog, view? }`, diapositives
  `k: 'media'` amb el mateix `media`. El validador (`validate.mjs --course model|modelpro`) comprova solucions i `start`.

## Canvis de l'editor (octubre 2026) que afecten les pistes
- **Duplica repeteix el salt sencer**: ja no cal escriure la x de cada còpia si les còpies van a la mateixa distància
  (duplicar, posar la primera còpia al seu lloc i tornar a duplicar). Les pistes antigues («Duplica i posa-la a x = …»)
  continuen funcionant, però poden ser més curtes.
- **Mirall → «Còpia a l'altre costat»** fa la còpia emmirallada a l'altre costat de x = 0 (o y = 0) d'un sol toc. «Duplica,
  Mirall → x i posa-la a x = …» continua funcionant igual.
- **Alinea amb diverses peces** té «A terra (z = 0)» i «Cada peça a terra».
- **Al mòbil ja no hi ha la pestanya «Accions»**: Duplica, Mirall, Alinea, Forat, Agrupa, Més peces, Totes i Esborra són a la
  barra de dalt de la vista (també a l'ordinador). Desfés/Refés, Fantasma i Resultat, al mòbil, a la barra de baix.
- **Les formes** van al lloc lliure més a prop del centre (ja no a un lloc «a l'atzar») o on s'arrosseguen.
- **Cotes**: amb una peça triada, tocar «40 mm» a la vista deixa escriure la mida (alternativa a la pestanya Mida).
- **Vistes**: el cub de vistes substitueix els quatre botons (Perspectiva, Davant, Dalt, Costat): «la vista de dalt» és
  tocar la cara «Dalt» del cub; el botó de sota del cub és la perspectiva.
- **Nivell 2**: als passos amb `text: true`, la pestanya **Codi** s'obre primer (es pot tornar a Blocs). Una pista que digui
  «toca el bloc…» en un pas amb text continua sent vàlida, però l'alumne/a ha de passar a la pestanya Blocs.
- Pas nou possible: `m3build` dins del curs `modelpro` (l'editor de peces amb el botó «Codi» per veure'n el programa).
