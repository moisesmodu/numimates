# Il·lustracions dels jocs de Numi Ment

Cada joc té una il·lustració 16:9 (1600×900) que surt a dalt de la pantalla de presentació del joc.
La part de baix (~110 px) queda tapada per una targeta, i a mòbil es veu a uns 350 px d'ample: **l'objecte ha de ser gran i llegible**.

## Com es fa
- Un fitxer per joc: `pieces/<id>.mjs`, que exporta `default () => '<g>…</g>'` (només els objectes; l'escenari —paret crema, taula verda, finestra amb fulles a la dreta, gra— el posa `scene()` de `base.mjs`). Opcionalment `export const opts = { floor: .64, window: true }`.
- Colors: importa `C` de `../base.mjs` (paleta tancada: verd nit, maragda, daurat, crema, corall, fusta, i blau/lila/vermell/verd només si el joc ho demana). Ombra: `shadowEl(cx, cy, rx, ry, opacitat)`.
- Render: `cd ~/mates-numi/scripts/ment-art && PREV=<carpeta> node art.mjs <id> [<id>…]` → `<carpeta>/<id>.png`. **Mira sempre el PNG** (Read) i millora fins que quedi bé.

## Estil (referència: la il·lustració de «La compra», editorial plana amb gra)
- Objecte(s) protagonista(es) **grans**: ocupen ~45–60 % de l'ample, centrats cap a x≈950–1050, recolzats a la taula (la vora de la taula és a y≈576 a l'esquerra i y≈536 a la dreta) o penjats a la paret si té sentit.
- Volum amb 2–3 tons pla per superfície (cara il·luminada, cara a l'ombra), un o dos reflexos blancs suaus, ombra projectada cap a l'esquerra i avall (la llum ve de dalt a la dreta).
- Formes geomètriques netes, arestes arrodonides, cap contorn negre gruixut. Elegant i adult: res infantil ni de dibuixos animats.
- **Sense text, lletres ni números llegibles** excepte quan el joc ho necessita (fitxes amb lletres, números d'un rellotge…), i mai paraules. Sense persones ni cares.
- Una composició clara: 1 objecte principal + 1–2 detalls secundaris petits com a molt.

## Publicar
`PREV=<carpeta> node art.mjs` i convertir a `img/ment/<id>.webp` (1200×675, WebP q78). A l'app, `MIMG` (ment.js) ja inclou tots els jocs de `MG`: si s'afegeix un joc nou, cal fer-ne la il·lustració.
