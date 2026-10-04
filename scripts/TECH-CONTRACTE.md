# Numi Tech: contrato para crear cursos (léelo entero antes de empezar)

Numi Tech es la cuarta app de Numi. Es una plataforma para **extraescolares con clase guiada**:
- **Clase:** 60 minutos, una vez por semana, unas 30 sesiones por curso.
- **Aparatos:** ordenadores en clase y móvil en casa. En robótica, kits micro:bit + DFRobot Maqueen Lite V5 en el aula.
- **Quién decide qué se hace:** el profesor asigna los cursos y abre las sesiones desde el panel.

Todo el código está en `~/mates-numi`. Es JavaScript sin *bundler*: scripts globales que comparten variables. La única excepción es el 3D, que es un módulo ES generado con esbuild.

## Normas que no se pueden saltar
1. **Contenido 100 % propio.** No copies nada de Algorithmics, Code.org, Scratch, Innovamat ni de ningún otro sitio: ni textos, ni actividades concretas, ni imágenes. Las ideas pedagógicas generales sí se pueden usar (PRIMM, Parsons, actividades sin pantalla, usar → modificar → crear).
2. **Es una app educativa.** No uses nunca «jugar / juego / juega / play». Se dice aprender, crear, programar, hacer retos o proyectos. Un «videojuego» que crea el alumno se puede llamar «videojoc / videojuego», porque es el producto, no la actividad.
3. **Idiomas.** Todo el texto va en catalán y castellano en una sola cadena: `"català|castellano"`. El catalán es central, con apóstrofos y «comillas latinas».
4. **No inventes estadísticas ni datos.** Usa tono de docente que acompaña: nunca culpes al alumno.
5. **Archivos.** Edita **solo** tus archivos (ver «Archivos de cada agente»). Para cualquier cambio en un archivo compartido, ponlo en tu informe final y lo integraré yo. No hagas `git commit`.
6. **Nombres globales.** Todos los globales nuevos llevan tu prefijo (`robo`, `stg`, `web`, `dig`, `bot2`) para no chocar con otros archivos. Algunos nombres ya están ocupados: MOV, REP, P_, chip, tv, bk, L, tx, TB, TS, P, VIEW…
7. **Calidad gráfica.** Debe ser espectacular y coherente con el resto: el mundo 3D de Bit (three.js) y los retratos 3D de Bit en `img/tech/bit-<idle|happy|win|dance|wave|think|sad>.webp`. Nada de interfaces planas o pobres. Sigue la paleta y los componentes de `tech.css`.
8. **Valida antes de terminar.** Haz un script Node (vm) en tu carpeta del *scratchpad* que cargue tus archivos y compruebe:
   - que cada reto tiene una solución que funciona;
   - que los planes suman 60 minutos;
   - que las diapositivas referenciadas existen;
   - que no aparecen las palabras prohibidas.

   Pasa también `node --check` a cada archivo.

## Cómo está hecho (léelo en el código)
- **`tech.js`.** Pantallas y motor de sesiones. Una sesión es `{ id, t, min, proj?, badge?, learn: [...], steps: [...] }`.
  - Cada paso es `{ k: tipo, ph: fase, ... }`.
  - Fases (TPH): recorda, missio, descobreix, mans, prova, investiga, pausa, repte, crea, tanca.
  - Tipos de paso que ya existen (TSTEP): story (con `scene`, `who`), learn (tarjetas con `anim` de TANI o `demo`), quiz, seq, hand, predict, spot, build, parsons, create, unplug, move, feel.
- **Funciones útiles de `tech.js`:**
  - `tFoot(label, fn, on, extra)` pone el botón de abajo;
  - `tContinue()` activa «Continúa»;
  - `tNext()` pasa al paso siguiente;
  - `tval(v)` traduce `"ca|es"` o una función;
  - `TSS` es la sesión actual (`TSS.st` es el paso);
  - `addXPsafe(n)` suma XP;
  - `tSaveProj(st)` guarda en el portafolio (pensado para el mundo de Bit; si guardas otro tipo de proyecto, haz tu propia versión con el mismo formato y un campo `kind`);
  - `$('#tsb')` es el cuerpo del paso.
- **Tipos de paso nuevos:** se registran desde **tu** archivo, que se carga después de `tech.js`, así: `TSTEP.miTipo = function (st) {...}`.
- **`tech-bot.js`.** El robot Bit en cuadrícula: mundo, intérprete, editor de bloques táctil, `bitChar(pose)` y 3D a través de `tech-3d.js`.
- **`tech-learn.js`.** `TANI`, las animaciones SVG/CSS de los conceptos. Puedes añadir las tuyas con `TANI.miClave = () => tSvg(alto, cuerpo)`, usando las mismas clases `.ta ta-pop/ta-in/ta-fade/ta-draw` con `--t`.
- **`tech-c1.js`.** El catálogo `TECH`: 5 cursos (robot, robotica, creadors, web, digital), cada uno con 8 unidades de 4 sesiones. La 4.ª sesión de cada unidad es proyecto (`proj: true`). Digital solo tiene 2 unidades.
  - **Tu archivo de contenido no reescribe `tech-c1.js`.** Sustituye las unidades de tu curso en tiempo de carga: `const c = TECH.find(x => x.id === 'web'); c.units = [...]; delete c.soon;`.
  - **Mantén los ids de sesión del catálogo:** robotica k1-1…k8-4, creadors g1-1…g8-4, web w1-1…w8-4, digital d1-1…d2-4. Puedes mejorar títulos y descripciones.
- **Guía del profesor: `TGUIDE[idSesión]`.** Es el mismo esquema exacto que `tech-guide-c1.js` (mira r1-1 como modelo): obj, comp, vocab, mat{aula, imprimir, prep}, plan[bloques que suman 60 min: {min, t, fase: inici|teoria|desconnectat|ordinador|crea|tancament, fa, diu[], slides[], app, org}], errors[[error, cómo ayudar]], diff{mes, menys}, aval{ticket[], rubric[[criterio, logrado, en proceso]]}, casa, slides[14-18], print[1-2].
  - Para extender: `Object.assign(TGUIDE, {...})`.
  - **Tipos de diapositiva** (los dibuja `present.js`): portada, pregunta, repas, concepte, anim (con `anim`: clave de TANI), demo (solo para el mundo de cuadrícula de Bit: `{w:{map}, prog:'f l r'}`), activitat (con `timer` en minutos), repte, resum, tiquet, video.
  - **Campos extra que puedes usar en cualquier diapositiva:** `code` (cadena de código a mostrar, p. ej. HTML o Python) y `blocks` (lista de textos `"ca|es"` de bloques a mostrar como fichas de colores). Los añadiré yo a `present.js`.
  - **Imprimibles (`print`):** k = 'targetes' (items `{t, n}`), 'quadricula' (items `{t, w, h, cells, instructions, sol?, prog?}`), 'fitxa' (items `{q, w?, prog?, a?, sol, solProg?}`). Si necesitas una ficha sin mapa, usa 'fitxa' sin `w`.
- **Una buena sesión de alumno** (35-45 min de trabajo en la app) tiene, en este orden:
  1. recorda (1-2 preguntas);
  2. missio (historia con `scene`);
  3. **descobreix** (tarjetas `learn` con animación o demo: la teoría tiene que estar **muy bien explicada**);
  4. mans (actividad sin pantalla o manipulativa);
  5. prova / investiga (predecir, encontrar el error);
  6. pausa;
  7. 3-5 retos escalonados;
  8. crea (proyecto con criterios, que se guarda);
  9. tanca (2 preguntas + feel).

  `learn` es el resumen de la sesión: 3 frases de lo que se ha aprendido. Pon `badge` solo si añades la insignia a `TBADGE`, en tu archivo, con `Object.assign(TBADGE, {...})`.

## Archivos de cada agente
- **Robot (unidades 2-8):** puede editar `tech-bot.js` (ampliar el motor), `tech-c1.js` (`steps` de r2-1…r8-4) y `tech-guide-c1.js` (guías de r2-1…r8-4).
- **Robótica:** solo puede tocar archivos nuevos:
  - `tech-robo.js` y `tech-robo.css`;
  - `tech-c2.js` y `tech-guide-c2.js`;
  - el 3D en `scripts/3d/robo3d.mjs`, empaquetado en `tech-robo3d.js` con `scripts/3d/build-robo.mjs`, siguiendo el modelo de `build.mjs`. three está en `node_modules`.
- **Creadores:** `tech-stage.js`, `tech-stage.css`, `tech-c3.js` y `tech-guide-c3.js`.
- **Web:** `tech-web.js`, `tech-web.css`, `tech-c4.js` y `tech-guide-c4.js`.
- **Digital:** `tech-c5.js`, `tech-guide-c5.js` y, si hace falta, `tech-dig.js` y `tech-dig.css`.

## Pruebas
Hay un servidor estático de `~/mates-numi` en http://127.0.0.1:5190. Para probar con un perfil:
1. Ve a `/?host=tech`.
2. En la consola, crea el perfil:
   ```js
   P = { id: 'pt', name: 'Laia', unlockAll: true, lang: 'ca', ...freshProgress(), variant: 'tech', code: 'T1', consent: 'ok', tech: { c: '<curso>', s: {}, port: [], badges: {} } };
   DB.profiles.pt = P; DB.current = 'pt'; saveLocal(); go('home');
   ```
3. Abre una sesión con `tOpen('<id>')`.
4. Tus archivos todavía no están en `index.html`: para probar, cárgalos con un script inyectado (`page.addScriptTag`).

Puppeteer está en `/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js` y Brave en `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser` (headless 'new'). Haz capturas y míralas: el resultado tiene que ser bonito de verdad, en móvil (390 px) y en ordenador (1440 px).
