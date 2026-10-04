# Numi Tech — estat i traspàs (04/10/2026)

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

## Pendent
1. **Contingut de cursos** (el van començar agents en segon pla, que es van aturar pel límit d'ús; els fitxers a mig fer NO estan pujats i s'han de revisar abans):
   - Robot unitats 2–8 (`tech-c1.js`, `tech-bot.js`, `tech-guide-c1.js`).
   - Robòtica (`tech-robo.js/.css`, `tech-c2.js`, `tech-guide-c2.js`, `scripts/3d/robo3d.mjs` → `tech-robo3d.js`).
   - Creadors (`tech-stage.js/.css`, `tech-c3.js`, `tech-guide-c3.js`).
   - Web (`tech-web.js/.css`, `tech-c4.js`, `tech-guide-c4.js`, `img/tech/web/`).
   - Digital (`tech-dig.js/.css`, `tech-c5.js`, `tech-guide-c5.js`).
   - Contracte comú per a tots els cursos: `scripts/TECH-CONTRACTE.md`.
2. Integrar cada curs: etiquetes `<script>`/CSS a `index.html`, `presenta.html`, `imprimeix.html`, `profe.html`; afegir `TANI_*` a `TANI`; camps `code`/`blocks` a `present.js`; `node scripts/tech-units.mjs`; validar i desplegar.
3. Retrats d'en Bit (`img/tech/bit-*.webp`) amb el plàstic brillant de les capçaleres.
4. Política de privacitat (Tech, consentiment a la inscripció, IA del panell) i domini tech.numimates.com (només amb l'OK del Moisés).
5. Canviar la contrasenya feble de l'usuari admin `mmora`.

## Desplegament
Vercel CLI (`vercel deploy --prod`) des d'un checkout de `main` amb `.vercel`. No fer `vercel env pull`.
