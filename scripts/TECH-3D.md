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
{ id: 'a1', t: 'box', s: [40, 30, 20], p: [0, 0, 10], r: [0, 0, 0], c: '#7C5CFF', hole: false, g: null, top: 1, w: 2, n: 5 }
```
- `t` (tipus) i el significat de `s` (mides de la caixa que l'envolta abans de girar, en mm):
  - `box` caixa · `cyl` cilindre (s.x, s.y diàmetres de l'el·lipse, s.z alçada) · `sph` esfera / el·lipsoide (diàmetres)
  - `cone` con amb base s.x × s.y i alçada s.z; `top` (0-1) fa un tronc (fracció del diàmetre de dalt)
  - `pyr` piràmide de base rectangular s.x × s.y i alçada s.z · `wedge` falca: caixa tallada en diagonal, l'alçada baixa de
    s.z (x mínima) a 0 (x màxima)
  - `torus` anell: diàmetre exterior s.x (i s.y), gruix del tub s.z · `tube` tub buit: com `cyl` amb paret `w` mm
  - `star` estrella de `n` puntes (radi interior 0,5) i `heart` cor, extrudits d'alçada s.z i caixa s.x × s.y
  - `hex` prisma hexagonal (cara plana a ±y)
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
export async function thumb(model, w, h) → dataURL   // miniatura (preguntes, portafoli, diapositives)
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
- **Editor Nivell 1 (`M3ED`)**: paleta de formes (amb dibuix 3D de cada forma), tiradors i camps numèrics (mida, posició,
  gir de 15 en 15°, color), duplicar, eliminar, agrupar, alinear, mirall, forat/sòlid, desfer/refer, vistes, mesures.
  Tot ha de cabre en una pantalla (390 × 740 i 1440 × 800) com la resta d'editors.
- **Editor Nivell 2 (`M3PG`)**: blocs tàctils (inserir amb un toc, com els editors de Robòtica) i, quan el pas ho permet,
  pestanya «Codi» amb text i ressaltat; tots dos sincronitzats. Errors amb línia i explicació en català i castellà.
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
