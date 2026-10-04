# Numi Tech: com dissenyen els exercicis els competidors (i com superar-los)

Data: 04/10/2026. Abast: tipus d'exercici, UX de l'editor de blocs, disposició de la pantalla, feedback i motivació, eines per al docent, simuladors de robòtica.

## 0. Nota de mètode (llegir primer)

- **Fonts.** L'intermediari de xarxa d'aquesta sessió bloquejava gairebé totes les webs dels competidors (code.org, makecode, scratch, vex, smartick, codelearn, etc.). Per això he fet servir dues vies:
  1. **Codi font i documentació oficials a GitHub**, que sí que eren accessibles. És la font **més fiable** de l'informe: les cadenes de text reals que veu l'alumne a Code.org, Blockly Games, MakeCode i Scratch. Les marco amb **[codi]** i en cito la clau o el fitxer.
  2. **Resultats del cercador** (fragments de les pàgines oficials, ressenyes de Common Sense, botigues d'apps, notícies). Els marco amb l'URL.
- El que ve del meu **coneixement general** del producte i no he pogut verificar aquí ho marco amb **[CG]**. Convé comprovar-ho a mà abans de fer-ne una afirmació pública.
- **Novetats del 2026 rellevants:** Code.org s'ha rebatejat **CodeAI**, i l'Hour of Code ara és **Hour of AI** ([GeekWire](https://www.geekwire.com/2026/solidifying-its-shift-to-ai-education-code-org-rebrands-as-codeai/), [code.org/codeai](https://code.org/codeai)). Les cadenes del seu codi ja diuen «CodeAI». LEGO Education ha anunciat **Computer Science & AI** (es distribueix des de l'abril del 2026) amb l'app **Coding Canvas**, i diverses fonts diuen que SPIKE es deixa de fabricar ([LEGO](https://www.lego.com/en-us/aboutus/news/2026/january/lego-education-cs-ai), [The Brick Fan](https://www.thebrickfan.com/lego-education-computer-science-ai-announced-spike-discontinued/)).

### Qui és «smartkcs»?

- **Hipòtesi principal: Smartick** (Màlaga). És una empresa espanyola de mètode extraescolar i en línia, de 15 minuts al dia, i té un mòdul de programació per a nens, **Smartick Coding**: Blockly, robot «Robby» en una quadrícula isomètrica i IA adaptativa. «smartkcs» s'assembla molt a «smartick(s)», i és l'únic «Smart…» espanyol que fa programació i robòtica per a nens. El cobreixo a fons.
- **Alternatives descartades:**
  - **SmartKids de Yogome** és una app mexicana d'assignatures variades, no una acadèmia ([The Manufacturer](https://www.themanufacturer.com/articles/smartkids-app-educativa/)).
  - **SmartyKids** és una franquícia europea d'àbac i càlcul mental, sense programació ([franchising.eu](https://franchising.eu/article/426/the-future-of-afterschool-education/)).
  - No he trobat cap acadèmia «SmartKids» de robòtica a Espanya ([directori juegosrobotica.es](https://juegosrobotica.es/robotica-para-ninos/)).
- **Recomanació:** confirmar-ho amb el propietari del producte. Si es refereix a una acadèmia local, el patró serà el de Codelearn o Robotix (vegeu més avall): classe presencial, Scratch, LEGO o micro:bit i una plataforma pròpia ludificada.

---

## 1. Fitxes per competidor

### 1.1 Code.org / CodeAI: CS Fundamentals (A-F), Hour of Code/AI, Sprite Lab, Dance Party, Minecraft

**Tipus de nivell**
- Les lliçons alternen quatre tipus de nivell ([suport de Code.org](https://support.code.org/hc/en-us/articles/26001058366093-Teaching-Computer-Science-Fundamentals-Courses-A-F)):
  - **skill-building**: puzles curts, cadascun amb un concepte nou;
  - **challenge**: «intencionadament difícils», per treballar la perseverança;
  - **free play**: no hi ha resposta incorrecta o n'hi ha moltes de bones;
  - **teacher-led**: el professor els fa amb tota la classe alhora.
- **Predicció [codi]:** `predictionInstructions` = «Make a prediction before you run the program.» i `predictQuestionRunPrompt` = «Click the Run button to submit your answer and continue.» L'alumne respon (opció múltiple) i, en prémer Executar, veu si ho havia encertat.
- **Nivells contenidors (contained) [codi]:** `containedLevelRunDisabledTooltip` = «You need to answer the question before you can run the code». És a dir, una pregunta incrustada bloqueja el botó d'executar fins que la contestes.
- **Nivells d'elecció (bubble choice) [codi]:** `progressLegendDetailsChoiceLevels` = «students choose to complete at least one task from multiple options».
- **Nivells d'avaluació [codi]:** es marquen amb una estrella perquè el docent els revisi (`progressLegendDetailsAssessmentLevels`).
- **Lliçons desconnectades (unplugged) [codi]:** `unpluggedLesson`, `unpluggedActivity`, `progressLegendDetailsNoOnlineWork`.
- **Mons temàtics de CSF:** Maze, Artist (tortuga), Collector, Harvester i Bee (abella amb nèctar i mel), més Sprite Lab i Play Lab ([pla de lliçó de Course D](https://curriculum.code.org/csf-20/coursed/2/)).
- **Dance Party:** uns 15 nivells. Primer s'introdueixen els esdeveniments («after N measures»), després la interactivitat (nivells 4-5) i la sincronització amb la música (7-8). L'últim nivell és **joc lliure**, amb botó de compartir que obre el projecte en un «mòbil simulat» sense el codi ([pla de l'Hour of Code](https://curriculum.code.org/hoc/plugged/8/), [guia de la WPI](https://users.wpi.edu/~ataricco/csq/Documents/DanceParty.pdf)).
- **Sprite Lab:** programació per esdeveniments amb **comportaments**, accions que un sprite repeteix fins que s'aturen ([documentació](https://curriculum.code.org/docs/spritelab/codestudio_defining-behaviors/)).

**Feedback (cadenes reals) [codi]** ([common/en_us.json](https://raw.githubusercontent.com/code-dot-org/code-dot-org/staging/apps/i18n/common/en_us.json), [maze/en_us.json](https://raw.githubusercontent.com/code-dot-org/code-dot-org/staging/apps/i18n/maze/en_us.json))
- **Èxit:**
  - `nextLevel` «Congratulations! You completed Puzzle N.»
  - Èxit no òptim: `numBlocksNeeded` «…(However, you could have used only N blocks.)»
  - `completedWithoutRecommendedBlock` «(But you could use a different block for stronger code.)»
  - Repte superat però no òptim: `challengeLevelPassText` «you could've done it with only N blocks. Can you make your program even better?»
  - `betterThanPerfectDescription` «WOW!» (millor que la solució de referència)
  - `tooManyBlocksDescription` «Too Many!»
- **Errors que expliquen per què:**
  - `levelIncompleteError` «Keep coding! Something's not quite right yet.»
  - `extraTopBlocks` «You have unattached blocks.»
  - `emptyBlocksErrorMsg` «The "Repeat" or "If" block needs to have other blocks inside it…»
  - `missingRequiredBlocksErrorMsg` «You have to use a block you aren't using yet.»
  - `errorExceededLimitedBlocks` «You did it! Now go find the pattern… You can only use {limit} of these blocks» (**límit per tipus de bloc**)
  - `nestedForSameVariable` (bucles niats amb la mateixa variable)
- **Errors específics del món (Maze):**
  - `notAtFlowerError` «You can only get nectar from a flower.»
  - `didNotCollectEverything` «Make sure you don't leave any nectar or honey behind!»
  - `uncheckedCloudError` «Make sure to check all clouds…» (nivells amb incògnita, que obliguen a fer servir condicionals)
  - `repeatCarefullyError` «think carefully about the pattern of two moves and one turn…» (és una **pista conceptual dins l'error**)
  - `ifInRepeatError`, `collectorTooManyBlocks` «You can only use {blockLimit} blocks.»
- **Pistes progressives [codi]:**
  - `hintPrompt` «Need help?», `hintRequest` «See hint», `hintHeader` «Here's a tip:», `hintSelectNewHint` «Get a new hint», `hintReviewTitle` «Review Your Hints»
  - Són pistes redactades per l'autor, que es desbloquegen d'una en una i queden registrades; el docent veu quantes se n'han fet servir [CG].
  - Vídeo: `watchVideo` «Watch the Video».
- **Controls [codi]:**
  - `runProgram` «Run», `reset` «Reset», `clearPuzzle` «Start Over» (amb confirmació que esborra els canvis), `decreaseSpeed` (control lliscant de velocitat)
  - `stepIn/stepOver/stepOut` (Game Lab / App Lab)
  - `numBlocksUsedLabel` «Blocks» (comptador de blocs de l'espai de treball)
  - `showCodeHeader` «Show Code» (mostra el JavaScript que ha generat)
  - `playTextToSpeech` (lectura de l'enunciat en veu alta per als qui encara no llegeixen)
  - `puzzleTitle` «Puzzle N of M»
  - Navegació per teclat amb Blockly (`blocklyKBNavOn`).
- **Personatges:** Angry Birds, Frozen, Minecraft, Star Wars i Dance Party amb artistes famosos. Les llicències atrauen molt.

**UX de l'editor [CG]**
- Blockly verticals amb encaixos de trencaclosques i blocs C (repeat/if).
- La caixa d'eines és un desplegable a l'esquerra sense categories en els primers cursos, i amb categories a Sprite Lab.
- Per esborrar, s'arrossega el bloc cap a la caixa d'eines o a la paperera. El bloc que s'executa es ressalta. Hi ha blocs ja col·locats i bloquejats per l'autor.
- Disposició a l'escriptori en tres columnes: escenari i botons a l'esquerra, caixa d'eines al mig, espai de treball a la dreta, i enunciat a dalt amb el personatge.
- **No està pensat per a mòbil.** Els requisits parlen d'una pantalla mínima d'uns 1024 px. Al mòbil només es comparteixen els resultats.

**Docent [codi]**
- Llegenda de progrés amb estats: no començat, en curs, enviat, validat, «keep working», «needs feedback», «feedback given».
- `teacherFeedbackKeepWorkingTooltip`: el docent pot tornar un nivell a l'estat «en curs» amb un comentari.
- Plans de lliçó descarregables (`downloadUnitLessonPlans`).
- Avaluació amb **assistent d'IA i rúbrica** (`rubricTour…`, «AI Teaching Assistant»), amb nivell de confiança i evidències.
- Lliçons desconnectades amb fulls de treball. Presentacions per lliçó [CG].

**Què en copiem / millorem**
- Copiar:
  - la tipologia (skill → challenge → free play);
  - els nivells de predicció;
  - el límit per tipus de bloc;
  - els errors específics del món;
  - les pistes progressives amb registre;
  - el docent que retorna un nivell amb «keep working».
- Millorar:
  - que funcioni bé al mòbil;
  - que l'error assenyali **on** ha fallat a la traça, no només un text;
  - pistes que reaccionin a l'estat del programa de l'alumne (vegeu Blockly Games).

### 1.2 Blockly Games (Google)

- **Jocs:** Puzzle → Maze → Bird → Turtle → Movie → Music → Pond Tutor → Pond. La progressió passa de blocs a JavaScript.
  - En acabar, mostra «You solved this level with N lines of JavaScript» **[codi]** ([en.json](https://raw.githubusercontent.com/google/blockly-games/master/json/en.json)).
- **Límit de blocs per nivell [codi]:** `MAX_BLOCKS = [∞, ∞, 2, 5, 5, 5, 5, 10, 7, 10]` ([maze/src/main.js](https://github.com/google/blockly-games/blob/master/appengine/maze/src/main.js)).
  - Bombolla de capacitat: «You have N blocks left.»
  - Quan s'esgoten: «You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.»
- **Ajuda contextual segons l'estat (la millor idea de tota la recerca) [codi]:** la funció `levelHelp()` s'executa a cada canvi de l'espai de treball (mai mentre s'arrossega) i mostra una bombolla que apunta a l'element que cal:
  - si hi ha menys de 2 blocs: «Stack a couple of 'move forward' blocks together», apuntant al primer bloc de la caixa d'eines;
  - si hi ha 2 piles separades: «you need to stack together all of the blocks», amb un **exemple de només lectura incrustat a la bombolla**;
  - si encara no s'ha executat: «Run your program to see what happens», apuntant al botó Executar;
  - al nivell 3, sense bucle i sense capacitat: la bombolla apunta al comptador de capacitat;
  - un cop superat el nivell, les ajudes desapareixen («They are just playing around»).
- **Execució:** primer es calcula tota la traça i després s'anima. **Si el resultat és correcte, l'animació va ràpida (100 ms); si falla, va lenta (150 ms) perquè es vegi l'error [codi].**
  - En xocar, el personatge s'atura, gira o cau, i sona un so de fallada.
- **Feedback de Puzzle [codi]:** «Perfect! All N blocks are correct.» / «Almost! One block is incorrect.» / «The highlighted block is not correct.» (**ressalta el bloc incorrecte**).
- **Turtle [codi]:** «Your solution works, but you can do better.» / «Draw the star with just four blocks.» (eficiència amb un objectiu explícit).
  - El nivell 10 és lliure, amb galeria.
- **Sortida d'emergència [codi]:** `Games.helpAbort` «This level is extremely difficult. Would you like to skip it…?»
- **Pells (skins) [codi]:** l'alumne tria el personatge (Pegman, astronauta, panda), cadascun amb una animació de xoc diferent.
- **Què en copiem:**
  - ajuda que reacciona a l'estat i apunta a l'element;
  - animació lenta quan falla;
  - ressaltar el bloc incorrecte;
  - poder saltar un nivell molt difícil;
  - en acabar, mostrar el codi en text.

### 1.3 Scratch 3

- **Tipus:** creació lliure, remix (botó «Remix» a cada projecte compartit), tutorials integrats i **Coding Cards** imprimibles ([guia d'inici](https://resources.scratch.mit.edu/www/guides/en/scratch-getting-started-guide.pdf)).
  - El tutorial s'obre en una **targeta flotant per passos** dins l'editor, amb vídeo, botons «Expand», «Shrink» i «Close», i al final «More things to try!» **[codi]** ([scratch-gui cards.jsx](https://github.com/scratchfoundation/scratch-gui/blob/develop/src/components/cards/cards.jsx)).
- **Editor [CG]:**
  - Formes de bloc: barret (hat), pila, C, final (cap), informador arrodonit (reporter) i booleà hexagonal.
  - Les categories són cercles de colors en una columna a l'esquerra i el desplegable fa scroll fins a la categoria triada.
  - Quan s'arrossega, una ombra grisa (insertion marker) mostra on encaixarà el bloc.
  - Per esborrar, s'arrossega a la paleta. Clic dret per «Clean up». Ctrl+Z.
  - El guió que s'executa brilla amb un contorn groc. Fer clic a un guió l'executa.
- **Disposició [codi]:** escenari estàndard de 480×360. El mode «small stage» el redueix al 0,5×. L'amplada mínima per a la mida completa és `fullSizeMinWidth: 1096` px i l'escala inicial dels blocs és 0,675 ([layout-constants.js](https://github.com/scratchfoundation/scratch-gui/blob/develop/src/lib/layout-constants.js)).
  - **No permet crear projectes al mòbil, només a la tauleta** ([Siegel Endowment](https://www.siegelendowment.org/insights/scratch-3-0-is-here/)).
- **Docent:** comptes de classe, Scratch Educator Guides i ScratchEd.
- **Què en copiem:** la previsualització d'on encaixarà el bloc, el ressaltat del guió en marxa, el remix i la targeta de tutorial plegable.
- **Què millorem:** el mòbil, i que no sigui un llenç infinit on els nens perden blocs.

### 1.4 ScratchJr (5-7 anys)

- **Blocs horitzontals amb icones i sense paraules,** perquè siguin «friendlier for beginning programmers but also better suited for devices with small screens» ([MIT Media Lab](https://medium.com/mit-media-lab/scratch-google-next-generation-of-programming-blocks-for-kids-5f377ec9ff0), [Designing ScratchJr, IDC 2013](https://dl.acm.org/doi/10.1145/2485760.2485785)).
- **Interfície** ([guia d'interfície de la Tufts/BC](https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2024/08/scratchjr-interface-guide.pdf), [pàgina de referència](https://scratched.gse.harvard.edu/sites/default/files/scratchjr-reference-page.pdf)):
  - La **paleta és a baix** i a la seva esquerra hi ha 6 categories de colors: disparadors (groc), moviment (blau), aspecte (lila), so (verd), control (taronja) i finals (vermell).
  - L'escenari és a dalt al centre, amb la llista de personatges a l'esquerra i les pàgines a la dreta.
  - Botons de **Desfer i Refer**, quadrícula activable i bandera verda.
  - **«Tap anywhere on a script to make it run»**, i per **esborrar, s'arrossega fora de l'àrea de programació**.
  - Els disparadors són bandera verda, toc al personatge, xoc amb un altre i missatge de color.
  - Els números s'editen amb un teclat numèric propi a la pantalla [CG].
- **Què en copiem:** gramàtica horitzontal per a la franja de 7-8 anys, icones en lloc de text, executar el guió amb un toc, i desfer/refer sempre visibles.

### 1.5 Tynker

- **Lliçons de 5 tipus:** vídeo, puzle, tutorial pas a pas, DIY (projecte lliure guiat) i qüestionari d'opció múltiple ([curs Starter de Tynker](https://camps.tynker.com/camps/courses/camps-100?plan=all)).
- **Puzles:** 3 estrelles. Recompensen fer servir el mínim de blocs. Si el codi no coincideix, surt un missatge «Oops» amb una pista ([ALEX: Tynker Debugger](https://alex.alsde.edu/LR/CR/57869/printer_friendly)).
  - Té aventures de depuració («fight bugs») i l'app d'iPad té més de 130 puzles ([premsa de Tynker](https://www.tynker.com/about/press/2014/03-tynker-launches-ipad-app)).
- **Docent:** autocorrecció de tutorials, puzles, projectes i qüestionaris, i un **Gradebook** ([blog de Tynker](https://www.tynker.com/blog/?p=11017)).
- **Què en copiem:** l'estructura fixa de la lliçó (vídeo → puzle → tutorial → DIY → qüestionari), molt fàcil de replicar en tots els cursos.

### 1.6 CodeMonkey

- **Coding Adventure:** CoffeeScript o Python **amb fragments que s'arrosseguen** («step 10», «turn right»), sobre un mapa de dalt a baix. Les estrelles depenen de l'eficiència: menys línies, més estrelles ([Tech & Learning](https://www.techlearning.com/how-to/codemonkey-how-to-use-it-to-teach-coding), [Common Sense](https://www.commonsense.org/education/reviews/codemonkey)).
- **Eina de regle i transportador** dins el món per mesurar distàncies i angles: es practiquen les matemàtiques del codi ([EdTech Impact](https://www.edtechimpact.com/products/codemonkey/)).
- **Cursos per blocs:**
  - **CodeMonkey Jr.** (P4-P5, pre-lectors);
  - **Beaver Achiever** (1r-2n): 115 reptes **amb qüestionaris**, 23 lliçons de 45 minuts ([Educators Technology](https://www.educatorstechnology.com/2022/05/codemonkey-helps-kids-learn-coding.html), [Cube for Teachers](https://cubeforteachers.com/post/Beaver-Achiever-BlockBased-Coding-Game-so4c0p8xgjczcm6r)).
- **Docent:** tauler amb **el codi real de cada alumne**, **les solucions perfectes de tots els reptes**, autocorrecció i plans de lliçó amb ordinador i desconnectats.
- **Què en copiem:**
  - el regle per mesurar dins el món d'en Bit, perfecte per a «avança N»;
  - les solucions de referència visibles al docent;
  - un qüestionari breu cada pocs reptes.

### 1.7 Kodable (5-8 anys)

- **Mecànica:** l'alumne arrossega **fletxes a caselles** d'una barra. El «fuzz» rodola pel laberint i recull monedes. Les condicions són caselles de colors al terra («if fuzz on pink, then roll») ([Macworld](https://www.macworld.com/article/666998/kodable-for-ipad-review.html), [Common Sense Media](https://www.commonsensemedia.org/app-reviews/kodable)).
  - S'obté d'1 a 3 estrelles segons les monedes recollides.
- **Mons:**
  - Smeeborg: seqüència, condició, bucle, 45 laberints;
  - Function Junction: funcions de 3 passos;
  - **Bugs Below**: un món sencer de depuració («Buggy Basics, Loopy Bugs, Funky Bugs, Infestation!»). L'alumne rep un programa que no funciona i l'ha d'arreglar; en fer-ho, el fuzz aixafa un insecte de debò ([GSU](https://sites.gsu.edu/bestpractices/2015/07/01/kodable-computer-programming-for-little-ones)).
- **Docent:** comptes de classe i lliçons que expliquen els conceptes. Activitats a Seesaw.
- **Què en copiem:** les caselles fixes (la longitud màxima del programa es veu abans de començar), les condicions al terra de colors per als petits, i un món dedicat a la depuració amb una metàfora visual (l'insecte).

### 1.8 Lightbot

- **Comandes:** endavant, encendre, girar a l'esquerra/dreta, saltar, P1 i P2. **Main + Proc1 + Proc2 amb caselles limitades.** Al bucle s'hi arriba per recursivitat ([StrategyWiki](https://strategywiki.org/wiki/Lightbot/Gameplay), [Lightbot PDF](https://www.lightbot.com/Lightbot_HowDoesLightbotTeachProgramming.pdf)).
  - Main té 12 caselles i P1/P2 en tenen 8 [CG].
- L'**eficiència no és opcional**: el límit de caselles obliga a trobar el patró. Ressenyes: «there's no room for inefficiency» ([Common Sense](https://www.commonsense.org/education/reviews/lightbot-programming-puzzles)).
- **Interacció [CG]:** es toca una icona i s'afegeix a la franja activa. Es toca una casella per treure-la. Mentre s'executa, es ressalta la casella actual i la casella de P1 quan s'hi salta.
- **Què en copiem:** les caselles visibles (el pressupost es veu, no és un número abstracte) i el ressaltat sincronitzat entre el programa principal i el procediment.

### 1.9 codeSpark Academy (The Foos)

- **Sense paraules,** apte per a pre-lectors i per a qualsevol idioma. Més de 40 puzles i 3 zones de creació. Més endavant, el **creador de jocs** (Foo Studio: plataformes, personatges, pel·lícules) ([App Store](https://apps.apple.com/app/foos-code-for-hour-free-educational/id938016211)).
- **Pistes:** una **mà a la pantalla** mostra el gest (on arrossegar). Moltes ressenyes es queixen que costa sortir-se'n si t'encalles, i hi ha una guia de solucions fora de l'app ([Common Sense](https://www.commonsense.org/education/reviews/codespark-academy), [blog de codeSpark](https://blog.codespark.com/posts/solution-guide-coding-puzzles-in-donut-detective)).
- **Motivació:** monedes per comprar objectes per als jocs propis i compartir jocs amb la comunitat.
- **Què en copiem:** la mà animada que fa el gest com a pista nivell 0.
- **Què millorem:** pistes progressives dins l'app, de manera que mai et quedis encallat.

### 1.10 Smartick Coding (hipòtesi «smartkcs»)

- Blockly, sessions diàries de 15 minuts i IA que adapta el ritme. L'alumne només avança quan domina el nivell. Robot **Robby** en una **quadrícula isomètrica**, amb **codi horitzontal sobre la quadrícula** ([Smartick](https://www.smartick.es/blog/educacion/coding/smartick-coding/), [ajuda de Smartick](https://support.smartickmethod.com/en/articles/2761327-smartick-coding)).
- **4 tipus d'exercici explícits: Llegir codi, Depurar, Refactoritzar, Escriure codi** ([tipus d'exercicis](https://www.smartick.es/blog/programacion/tipos-de-ejercicios-de-programacion/)).
- **«Tableros»** (unitats avançades) és un marc modular amb tauler, robots i objectes. Planteja missions realistes: classificar residus en una platja, fer l'inventari d'un magatzem, gestionar comandes de cuina, jocs de taula, xifrar i desxifrar ([juego de programación](https://www.smartick.es/blog/programacion/juego-de-programacion/)).
- **Motivació:** recompenses, minijocs que es desbloquegen i avatar personalitzable. Hi ha tutorials interactius.
- **Què en copiem:** la taxonomia llegir / depurar / refactoritzar / escriure i les missions amb dades del món real, que encaixen amb Digital i Robòtica.
- **Què millorem:** Smartick és individual. Nosaltres tenim **classe guiada**, i això ens dona l'avantatge del docent en directe.

### 1.11 Acadèmies extraescolars: Codelearn, Algorithmics, Kodland, Robotix

- **Codelearn** (Manresa, unes 30 acadèmies). Plataforma pròpia ludificada amb **un univers de personatges i còmics**: els reptes ajuden els personatges a derrotar enemics. Els punts serveixen per pujar de nivell, desbloquejar funcions i gastar-los en una **botiga de punts**. Format híbrid (es pot treballar 24/7 des de casa). Scratch, Python, robòtica, 3D i Minecraft. A partir de 7 anys ([Codelearn: el mètode](https://codelearn.com/our-method/), [codelearn.com](https://codelearn.com/)).
- **Algorithmics** (més de 80 països). Classes de 90 minuts amb 6 alumnes en línia o 12 presencials. LMS propi amb «thousands of tasks» i un programa individual per alumne. Al final de cada mòdul l'alumne presenta un projecte. El curs de Visual Programming és Scratch de 8 a 11 anys, en 5 mòduls ([Algorithmics](https://cz.alg.academy/visual-programming), [franchise-uk](https://www.franchise-uk.co.uk/block/algorithmics-content/)).
- **Kodland**. Classe en directe per Zoom (8 alumnes, 90 minuts) i plataforma amb tasques interactives, enregistraments, anàlisi del rendiment i deures que corregeix el tutor ([kodland.org](https://www.kodland.org/)).
- **Robotix** (soci de LEGO Education a Espanya). LEGO, Scratch i impressió 3D per edats. Metodologia pròpia provada amb més de 15.000 alumnes. Professors certificats per LEGO ([dossier de Robotix](https://www.colegionazaret.es/sites/colegionazaret.es/files/recursos/web/noticias/003%20Dossier%20Robotix.pdf)).
- **Lectura:** el valor diferencial d'aquestes acadèmies no és l'editor (quasi tots fan servir Scratch o MakeCode), sinó el **currículum, el docent i la plataforma de seguiment**. Si nosaltres també tenim el millor editor per a mòbil i tauleta, guanyem en tots dos fronts.

### 1.12 LEGO Education: SPIKE i Computer Science & AI

- **SPIKE:** blocs d'icones horitzontals (Essential), blocs de paraules basats en Scratch (Prime) i Python. Unitats amb instruccions de muntatge integrades a l'app ([LEGO Community](https://community.legoeducation.com/blogs/29/156), [Microsoft Store](https://apps.microsoft.com/detail/9nfqz9rdnd2q)).
- **CS & AI (2026):** grups de 4 alumnes. **Coding Canvas** (web i iOS) amb blocs de paraules i d'icones, **sense inici de sessió de l'alumne i amb les dades desades només localment**. Portal docent gratuït amb notes de facilitació, presentacions per a l'aula i lliçons ([LEGO](https://www.lego.com/en-us/aboutus/news/2026/january/lego-education-cs-ai)).
- **Què en copiem:**
  - dos nivells de bloc (icones per als petits, paraules per als grans) sobre el mateix model;
  - rols dins del grup;
  - «notes de facilitació», un format que la nostra guia del docent ja gairebé té.

### 1.13 Microsoft MakeCode per a micro:bit (tutorials i simulador)

- **Tutorials** ([documentació de pxt](https://raw.githubusercontent.com/microsoft/pxt/master/docs/writing-docs/tutorials.md), [basics](https://raw.githubusercontent.com/microsoft/pxt/master/docs/writing-docs/tutorials/basics.md), [control-options](https://raw.githubusercontent.com/microsoft/pxt/master/docs/writing-docs/tutorials/control-options.md), [activities](https://raw.githubusercontent.com/microsoft/pxt/master/docs/writing-docs/tutorials/activities.md)):
  - Cada `##` és un pas. El text anterior al primer bloc va a la **capçalera del pas**, i la resta (el bloc d'exemple) va al **diàleg de pista** (bombeta / «Click to show a hint!» **[codi]**).
  - **La caixa d'eines es filtra als blocs de l'exemple del pas.** Els «ghost blocks» afegeixen opcions extra.
  - `@diffs` ressalta la diferència de codi respecte al pas anterior. `@showdialog` mostra un pas modal d'introducció. `@unifiedToolbox` i `@hideToolbox` controlen la caixa d'eines.
  - **Validació:** `BlocksExistValidator` comprova que hi hagi els blocs marcats amb `@highlight`/`@validate-exists`, però **no comprova els paràmetres**.
  - **Missatge de validació [codi]:** «This code doesn't look the way we expected.» amb els botons «Show Hint», «Continue Anyway» i una icona d'**escarabat (Ladybug)** «Is there a bug?» ([TutorialValidationErrorMessage.tsx](https://github.com/microsoft/pxt/blob/master/webapp/src/components/tutorial/TutorialValidationErrorMessage.tsx)).
  - Comptador «Step {0} of {1}», Back/Next/Done, Immersive Reader per llegir en veu alta **[codi]**.
  - Tutorials amb diverses activitats (`@activities`) i `lockedEditor` (l'alumne no pot sortir del tutorial).
- **Simulador [codi]:**
  - Barra amb iniciar/aturar, reiniciar, so, pantalla completa, captura, consola i **mode de depuració** ([simtoolbar.tsx](https://github.com/microsoft/pxt/blob/master/webapp/src/simtoolbar.tsx)).
  - La barra de depuració té **«Slow-Mo»** (execució lenta amb ressaltat de blocs), pausa/continua, step into/over/out i reiniciar ([debuggerToolbar.tsx](https://github.com/microsoft/pxt/blob/master/webapp/src/debuggerToolbar.tsx)).
  - Panell de variables «Variables / Globals / Current value for…» ([debuggerVariables.tsx](https://github.com/microsoft/pxt/blob/master/webapp/src/debuggerVariables.tsx)).
  - El micro:bit simulat té els botons A i B clicables, sacsejada, inclinació i controls de llum i temperatura que apareixen quan el codi fa servir aquests sensors [CG].
- **Extensió oficial microbit-robot** ([README a GitHub](https://github.com/microsoft/microbit-robot), [pàgina de l'extensió](https://makecode.microbit.org/pkg/microsoft/microbit-robot)):
  - blocs comuns per a 13 robots, **inclòs el DFRobot Maqueen**;
  - **el simulador es carrega sol** quan es fa servir un bloc de robot;
  - simula els **sensors de línia i els detectors d'obstacles**;
  - **el robot s'arrossega amb el ratolí per reiniciar-lo**;
  - amb ràdio, diversos robots en un sol simulador;
  - «On a small screen, click on the full screen icon»;
  - **la matriu 5×5 mostra l'estat del robot**: les columnes laterals són els sensors de línia, la central la distància en múltiples de 5 cm i la 2a i la 4a l'accelerador dels motors;
  - adverteix de les diferències amb el robot real (desgast, bateria, fricció);
  - els blocs `tank` i `steer` no fan servir angles, perquè el robot no té encoders.
- **Què en copiem:**
  - la caixa d'eines filtrada per pas;
  - la pista amb el bloc exacte;
  - «Continue Anyway»;
  - Slow-Mo;
  - les variables en viu;
  - la matriu LED com a quadre de sensors;
  - arrossegar el robot per reiniciar-lo.
- **Què millorem:**
  - validar també els paràmetres;
  - que el simulador no quedi amagat al mòbil;
  - més pistes de recorregut.

### 1.14 VEXcode VR

- Robot virtual al navegador. **15 playgrounds gratuïts** de 2000×2000 mm: Castle Crasher, **Dynamic Castle Crasher (la disposició canvia a cada execució)**, Coral Reef Cleanup (recollir escombraries abans que s'acabi la bateria), Rover Rescue, Wall Maze, Art Canvas (amb **llapis**) i d'altres ([playgrounds gratuïts](https://api.vex.com/vr/home/playgrounds/free.html), [VEX](https://www.vexrobotics.com/vexcode/vr)).
- **Botó Step:** «a green highlight appears around the "when started" block and immediately moves to highlight the first block… stays until the step button is selected again» ([Stepping Through a Project](https://kb.vex.com/hc/en-us/articles/360042389732-Stepping-Through-a-Project-in-VEXcode-VR)).
- **Dashboard:** mostra tots els valors dels sensors del robot en directe ([Understanding the Dashboard](https://kb.vex.com/hc/en-us/articles/360041790771-Understanding-the-Dashboard-in-VEXcode-VR)).
- **Càmeres:** «Chase Camera» darrere del robot (per defecte) i vista aèria, amb els botons a baix a la dreta. **Reset a baix a l'esquerra** ([Playground Features](https://kb.vex.com/hc/en-us/articles/360041342392-Using-the-Playground-Features-in-VEXcode-VR)).
- **«Switch»** de blocs a Python (el bloc mostra el text equivalent). STEM Labs i VR Activities amb fitxes per a l'alumne i notes per al docent ([VR Activities](https://education.vex.com/stemlabs/vr/activities)).
- **Què en copiem:** el pas a pas amb ressaltat, el dashboard de sensors, la càmera de seguiment o de dalt, el llapis per veure el recorregut i els mons dinàmics (que obliguen a fer servir sensors en lloc de memoritzar el camí).

### 1.15 Bee-Bot / Blue-Bot (TTS)

- **App Bee-Bot:** 12 nivells en un jardí 3D més mons extra. Endavant, enrere i girs de 90°. **Cada nivell té temps i com més ràpid, més estrelles** ([K20](https://learn.k20center.ou.edu/tech-tool/606), [App Store](https://apps.apple.com/app/id500131639)).
- **App Blue-Bot** ([Stemfinity](https://stemfinity.com/products/tts-blue-bot%C2%AE-bluetooth-programmable-floor-robot-single)):
  - **Explore mode**: «step by step programming allows Blue-Bot to move when a button is pressed, with the instruction added to the list» (mode immediat); també es pot arrossegar a la barra d'algorisme, a l'esquerra;
  - **Challenge mode**: obstacles aleatoris i **reptes que treuen 1 o 2 botons de direcció**;
  - girs de 45°;
  - es pot triar una catifa que coincideixi amb la física de l'aula.
- **Què en copiem:**
  - el mode immediat (cada toc mou en Bit i s'apunta al programa), ideal per a 7 anys;
  - els reptes de controls limitats;
  - la catifa física igual a la digital (imprimible).
- **Què evitem:** les estrelles per velocitat, que castiguen el qui pensa.

---

## 2. Síntesi

### (a) Tipus d'exercici que val la pena tenir

| # | Tipus | Millor implementació vista | Com fer-ho millor a Numi Tech |
|---|---|---|---|
| 1 | **Tutorial guiat pas a pas** | MakeCode: caixa d'eines filtrada per pas, pista amb el bloc, validació, «Continue Anyway» | Un **bloc fantasma** a la posició exacta de l'espai de treball i una **mà animada** que fa el gest (codeSpark). Validar també els **paràmetres** (MakeCode no ho fa). Passar al pas següent automàticament quan el pas és correcte. Indicador «pas 2/5» a dalt. |
| 2 | **Puzle amb blocs limitats** | Blockly Games Maze (`MAX_BLOCKS` i «You have N blocks left») i Lightbot (caixetes) | Mostrar el pressupost com a **caselles buides** (Kodable/Lightbot) i no com un número. **Límit per tipus de bloc** (Code.org `errorExceededLimitedBlocks`) per forçar el bucle. |
| 3 | **Repte d'eficiència (estrelles)** | Lightbot, CodeMonkey, Code.org `numBlocksNeeded`, Turtle «works, but you can do better» | **3 estrelles independents**: ★ ho has resolt · ★ sense pistes · ★ amb el mínim de blocs. A la pantalla d'èxit: «Ho has fet amb 7. Es pot fer amb 5. Ho tornes a provar?», amb el teu codi a la vista. «WOW» si superes la solució de referència. |
| 4 | **Depura (arregla l'error)** | Kodable Bugs Below, Smartick Depurar, Tynker Debugger | Començar amb el programa trencat i dir quants errors hi ha («hi ha 1 bloc equivocat»). L'alumne **toca el bloc sospitós** abans de canviar-lo. La traça mostra en vermell on es desvia el recorregut del camí esperat. Recompensa visual: l'insecte aixafat. |
| 5 | **Prediu la sortida** | Code.org (prediction levels, Run envia la resposta) | El nen **toca la casella on creu que acabarà en Bit** (o tria A/B/C). L'animació ho revela, comparant la predicció amb el resultat. És el millor exercici per als minuts de classe guiada. |
| 6 | **Llegeix i segueix la traça** | Smartick «Llegir codi» | Pas a pas manual: l'alumne prem «següent» i ha d'encertar cada posició. Serveix com a avaluació ràpida. |
| 7 | **Refactoritza** | Smartick, Lightbot (P1/P2), Code.org (límit per tipus) | Es dona un programa llarg que funciona i es demana «fes-lo igual amb ≤ N blocs». Un comptador de blocs viu i un indicador «encara funciona ✓» que es comprova automàticament a cada canvi. |
| 8 | **Ordena els blocs (Parsons)** | Cap competidor infantil el fa bé dins l'editor. Numi ja té `seq` | Fer el Parsons **dins l'editor real**: els blocs barrejats a la caixa d'eines, amb 1-2 distractors, i l'alumne els encaixa. Així s'aprèn la sintaxi i no només l'ordre. |
| 9 | **Completa el forat** | Code.org (blocs ja col·locats i bloquejats), Blockly Games Bird | El programa és fix i bloquejat, i hi ha 1-2 forats amb vora discontínua on s'ha de posar el bloc o el número que falta. Molt ràpid al mòbil. |
| 10 | **Mode immediat / explora** | Blue-Bot Explore mode | Cada toc mou en Bit **i** afegeix el bloc al programa. Després, «Ara fes-ho tot de cop». Ideal per a la primera sessió amb 7 anys. |
| 11 | **Controls limitats** | Blue-Bot Challenge (treure botons) | «Sense girar a l'esquerra»: ensenya equivalències (3 girs a la dreta = 1 a l'esquerra). Barat de fer i molt reutilitzable. |
| 12 | **Generalització (món aleatori o diversos mons)** | VEXcode VR Dynamic Castle Crasher, Code.org (núvols i flors desconegudes, `uncheckedCloudError`) | **El mateix programa s'ha de superar en 3 mons** que es mostren en miniatures, cadascuna amb ✓/✗. Obliga a fer servir condicionals i sensors i fa impossible memoritzar el camí. També per al Maqueen: 3 pistes diferents. |
| 13 | **Lliure / sandbox amb objectius opcionals** | Code.org free play, Dance Party (últim nivell), ScratchJr | Joc lliure amb **3 «idees per provar»** que es marquen soles quan es detecten (com «More things to try!» de Scratch). |
| 14 | **Remix** | Scratch Remix, Sprite Lab | Projecte d'exemple a l'escenari de Creadors: «canvia-hi 2 coses». El docent veu la diferència respecte a l'original. |
| 15 | **Tria el teu repte** | Code.org bubble choice | Al final de la unitat: 3 reptes de dificultat 1-2-3 estrelles i n'has de fer un com a mínim. Atén la diversitat de la classe. |
| 16 | **Qüestionari incrustat** | Code.org contained levels, CodeMonkey (quizzes cada pocs reptes), Tynker quiz | Una pregunta curta **dins el nivell** que bloqueja «Executa» fins que es respon. Les respostes amb blocs es mostren com a peces de colors (Numi ja ho fa). |
| 17 | **Dissenya un nivell per a un company** | codeSpark Game Maker (Numi ja té «dissenyar reptes») | Codi QR o codi de classe per compartir el repte. Abans de publicar-lo, l'autor l'ha de resoldre (garanteix que té solució). |
| 18 | **Desconnectat** | Code.org unplugged, Bee-Bot (catifes), CodeMonkey | Imprimible amb **la mateixa quadrícula** que el nivell digital, perquè la sessió física i la digital es responguin. Numi ja té els imprimibles: cal lligar-los nivell a nivell. |
| 19 | **Pont blocs → text** | Blockly Games (N línies de JS), Code.org Show Code, VEX Switch, MakeCode JS/Python | A l'èxit, mostrar «el teu programa en text» (JS o Python), i per al Maqueen el codi MakeCode exportat (ja el tenim). Per als de 11-14, «mode híbrid»: el bloc mostra el text. |
| 20 | **Mesura al món** | CodeMonkey (regle i transportador) | Un regle que s'arrossega sobre la quadrícula d'en Bit i sobre la pista del Maqueen (cm i graus): connecta amb les matemàtiques de Numi Mates. |

**Plantilla de sessió replicable a tots els cursos** (inspirada en Tynker i CSF): introducció en vídeo o animació → tutorial guiat (1) → 3-5 puzles de pràctica (2/9/10) → predicció (5) → depuració (4) → repte d'eficiència o de generalització (3/12) → qüestionari incrustat (16) → lliure o tria el teu repte (13/15) → tiquet de sortida.

### (b) Les 15 regles d'UX per a l'editor de blocs (mòbil de 390 px i tauleta, tot en una pantalla)

1. **Disposició fixa en tres franges, sense scroll de pàgina.**
   - Mòbil vertical (390×~700 útils): **escenari a dalt** (quadrat, ≤ 42 % de l'alçada), **programa al mig** (el que sobri) i **caixa d'eines a baix** (una franja de ~76 px, com a ScratchJr) amb **Executa** fix a la cantonada, al costat del polze.
   - Tauleta horitzontal: escenari a l'esquerra, programa a la dreta i la caixa d'eines sota el programa.
   - L'enunciat és **una sola línia amb icona** sobre l'escenari, i el detall s'obre en un full inferior (bottom sheet).
   - Scratch (amplada mínima de 1096 px) i Code.org (~1024 px) no ho resolen. És el nostre principal avantatge.
2. **Tocar per afegir, i arrossegar com a alternativa.** Un toc a un bloc de la caixa d'eines l'afegeix al **cursor d'inserció** (una línia parpellejant, que per defecte va al final). Tocar entre dos blocs mou el cursor. L'arrossegament continua funcionant per als qui el prefereixen. Al mòbil, arrossegar amb precisió és el que més falla (ressenyes de Scratch al mòbil).
3. **Objectius de toc ≥ 44-48 px i blocs grans.** Els blocs fan ≥ 44 px d'alt i hi ha ≥ 8 px entre peces de la caixa d'eines. Res de blocs de 0,675× com a Scratch.
4. **La caixa d'eines mostra només els blocs del nivell** (com el filtre per pas de MakeCode). Sense categories si n'hi ha ≤ 8. Si n'hi ha més, pestanyes de color amb icona. El bloc nou de la sessió porta l'etiqueta «NOU» i brilla una vegada.
5. **Pressupost visible.** Si hi ha límit, el programa mostra **caselles buides** (estil Kodable/Lightbot) o un comptador «4/6» al costat de la caixa d'eines. Si un tipus de bloc té límit propi, el número es veu sobre la mateixa peça (×2). En arribar al límit, la peça s'enfosqueix i surt una bombolla que diu **per què**, com «You have used up all the blocks… delete one first» de Blockly Games.
6. **Previsualització d'on encaixarà.** Quan s'arrossega, una ombra mostra on anirà el bloc (insertion marker, com a Scratch i Blockly) i els blocs de sota s'aparten. Encaix magnètic generós, amb un radi ≥ 24 px.
7. **Gramàtica i formes coherents i poques.**
   - Peces de trencaclosques. **Bloc C** per a repetir/si, que es plega i es desplega. **Barret** per als esdeveniments. Números en «pastilla» arrodonida.
   - Per a 7-8 anys, **blocs horitzontals amb icones** (ScratchJr, Smartick), que aprofiten l'amplada del mòbil i poden passar a una segona línia.
   - Per a 9-14 anys, blocs verticals amb text curt.
   - El mateix motor i la mateixa semàntica en tots dos casos.
8. **Entrades sense teclat del sistema.**
   - Números: selector amb **− / +** i valors ràpids (1-2-3-4-5).
   - Direccions i colors: **selector d'icones** (fletxes, colors), no un desplegable de text.
   - El teclat del mòbil tapa mitja pantalla i trenca la regla 1.
9. **Esborrar sense por i desfer sempre visible.**
   - Per esborrar, s'arrossega a la caixa d'eines (que es converteix en paperera) o es fa un toc llarg i es tria «✕».
   - **Desfer i Refer** són botons fixos, com a ScratchJr.
   - «Torna a començar» demana confirmació (Code.org `clearPuzzleConfirm`).
10. **Executa / Pas a pas / Velocitat / Reinicia, sempre al mateix lloc.**
    - Executa és el botó gran.
    - **Pas** ressalta el bloc actual amb un contorn verd, com a VEX («the highlight stays until the step button is selected again»).
    - **3 velocitats** (tortuga, normal, llebre).
    - Reiniciar és **automàtic quan s'edita el programa**, perquè ningú hagi de buscar «Reset» (en el primer nivell de Blockly Games cal una pista per trobar-lo).
11. **Ressaltat sincronitzat de bloc i món.** Mentre s'executa, el bloc actiu s'il·lumina i en Bit (o el Maqueen) fa l'acció alhora. Dins d'un bucle, un comptador sobre el bloc C (2/4). En una funció, es ressalta la crida i el cos (Lightbot). **Si falla, la reproducció es fa més lenta** (Blockly Games, 100 vs 150 ms) i s'atura **sobre el bloc culpable**.
12. **Errors que diuen què i on, en llenguatge del món.** Mai «error». Exemples: «En Bit ha xocat amb l'arbre al pas 4», «La bateria s'ha acabat abans de recollir les 3 ampolles», «El bloc *repeteix* està buit», «Tens blocs solts» (`extraTopBlocks`). Cada error **apunta amb una fletxa** al bloc o a la casella. Es poden llegir en veu alta per als de 7 anys (TTS, com Code.org i l'Immersive Reader de MakeCode).
13. **Pistes progressives i conscients de l'estat.**
    - Nivell 0: bombolla contextual automàtica segons l'estat (Blockly Games `levelHelp`: «ajunta les dues piles», «prova d'executar»).
    - Nivell 1: pista conceptual («fixa't en el patró: 2 passos i 1 gir», Code.org `repeatCarefullyError`).
    - Nivell 2: mà animada que fa el gest (codeSpark).
    - Nivell 3: bloc fantasma del següent pas (MakeCode).
    - Nivell 4: «salta el nivell» (Blockly Games `helpAbort`).
    - Totes les pistes queden registrades per al docent.
    - Les pistes automàtiques **desapareixen un cop superat** el nivell.
14. **Èxit breu i útil.** Una animació de 1-2 s amb en Bit, les 3 estrelles independents, «Ho has fet amb N blocs (es pot amb M)», «Continua» i «Millora-ho». Un toc per veure el codi en text. **No tapar l'escenari més de 2 s** ni posar diàlegs que s'hagin de tancar per tornar a provar.
15. **El programa mai es perd i sempre es veu sencer.**
    - Desat automàtic a cada canvi.
    - L'espai de programa **s'escala o passa a la línia següent** perquè tot el programa sigui visible sense scroll fins a uns 12-15 blocs. Si n'hi ha més, es pleguen els blocs C i les funcions.
    - Mai un llenç infinit on els nens perden blocs.
    - Si l'alumne gira la tauleta o canvia de pantalla, el programa es conserva.

**Regla extra de classe guiada** (el que les apps no tenen):
- El docent pot fer «**Atenció**» (congela totes les pantalles) i «**Mostra a la pissarra**» (projecta la solució d'un alumne de manera anònima).
- El docent veu en directe qui porta més de 2 minuts encallat i en quin bloc.

### (c) Simuladors de robòtica: què copiar i què millorar (Maqueen i en Bit)

**Copiar**
1. **Pas a pas amb ressaltat del bloc** (VEX Step) i **Slow-Mo** (MakeCode), junt amb el panell de variables en viu.
2. **Quadre de sensors en directe** (VEX Dashboard, la matriu 5×5 de microbit-robot). Per al Maqueen: indicadors L/R del sensor de línia (blanc/negre), la distància de l'ultrasò en cm amb **un con dibuixat davant del robot**, la potència de cada motor i els LEDs RGB.
3. **Càmeres:** de seguiment i de dalt (VEX), amb un toc per canviar.
4. **Llapis o rastre** (VEX Art Canvas): el recorregut queda dibuixat i es pot comparar amb el camí objectiu.
5. **Arrossegar el robot per reiniciar-lo o recol·locar-lo** (microbit-robot).
6. **Mons dinàmics** (VEX Dynamic Castle Crasher): la pista o els obstacles canvien a cada execució, de manera que només funciona un programa que faci servir els sensors.
7. **Fidelitat honesta** (microbit-robot): blocs sense angles exactes perquè el robot no té encoders, i un avís de la diferència entre la simulació i la realitat. El nostre exportador a MakeCode ja limita la velocitat i va en aquesta línia.
8. **Pont a text** (VEX Switch, JavaScript i Python de MakeCode) i **exportar a MakeCode** amb l'extensió oficial `microsoft/microbit-robot` o la del Maqueen. Així el codi del simulador es pot provar al simulador de MakeCode i al robot real.

**Millorar (on podem guanyar)**
1. **Pensat per al mòbil:** el simulador del MakeCode al mòbil queda a «pantalla completa». El nostre ha de compartir pantalla amb el programa (regla 1), amb escenari de dalt a baix en 2D per defecte i 3D com a opció.
2. **Objectius verificables** sobre el simulador: arribar a la zona, seguir la línia ≥ 90 % del recorregut, no tocar l'obstacle, temps màxim. Barra d'objectius amb ✓ en directe. Ni MakeCode ni VEX lliure ho tenen per a cada nivell.
3. **Banc de proves de 3 pistes** (generalització, tipus 12) amb miniatures ✓/✗.
4. **Botó «Soroll real»** (activat o no): petita desviació dels motors i soroll dels sensors per preparar el pas al robot físic i explicar per què el robot real «no fa el mateix».
5. **Línia de temps per anar enrere i endavant** de l'última execució: tornar al moment del xoc i veure quin bloc s'executava i què llegien els sensors.
6. **Editor de pista per al docent i l'alumne** (cinta negra, obstacles) que s'imprimeix a escala 1:1 o en A3 per a la catifa física: el mateix nivell en digital i en físic (Bee-Bot).
7. **Mode comparació:** el fantasma de la solució de referència al costat del robot de l'alumne (ara només ho veu el docent, com les solucions de CodeMonkey).
8. **Mode de reptes de classe:** cronometrar i comparar «menys blocs» entre equips (els desafiaments de VEX), amb el docent com a àrbitre al panell.

---

## 3. Funcions per al docent: resum comparatiu

| Funció | Qui ho fa millor | Estat a Numi Tech (segons NUMI-TECH-ESTAT.md) | Proposta |
|---|---|---|---|
| Progrés per nivell amb estats | Code.org (llegenda: en curs, validat, keep working, needs feedback) | Panell amb grups i obertura de cursos | Afegir estats per nivell: «perfecte / massa blocs / amb pistes». |
| Veure el codi de cada alumne i la solució perfecta | CodeMonkey | — | Visualitzador del programa de l'alumne i de la solució al panell. |
| Tornar un nivell amb comentari | Code.org «keep working» | — | Botó al panell, i l'alumne veu el missatge. |
| Plans de lliçó, presentacions, desconnectat | Code.org, LEGO (notes de facilitació), VEX STEM Labs | **Ja ho tenim** (guies, presentacions, imprimibles) | Lligar cada imprimible al seu nivell digital. |
| Autocorrecció i Gradebook | Tynker, CodeMonkey | Validadors de contingut | Nota automàtica per sessió (estrelles, qüestionari, tiquet de sortida). |
| IA per avaluar amb rúbrica | Code.org (AI Teaching Assistant amb confiança i evidències) | Assistent d'IA al panell i rúbrica de 4 criteris a la guia | Proposta de puntuació de la rúbrica per alumne, que el docent valida. |
| Classe en directe | Kodland i Algorithmics (tutor en directe) | Classe guiada | «Atenció» (congelar pantalles), «Mostra a la pissarra», alerta d'alumnes encallats. |
| Sense inici de sessió i dades locals | LEGO Coding Canvas | Codi de classe | Mantenir l'accés per codi de classe; és un bon argument de privacitat. |

---

## 4. Fonts principals

**Codi i documentació (verificats)**
- Code.org/CodeAI, cadenes: https://raw.githubusercontent.com/code-dot-org/code-dot-org/staging/apps/i18n/common/en_us.json · https://raw.githubusercontent.com/code-dot-org/code-dot-org/staging/apps/i18n/maze/en_us.json
- Blockly Games: https://raw.githubusercontent.com/google/blockly-games/master/json/en.json · https://github.com/google/blockly-games/blob/master/appengine/maze/src/main.js
- MakeCode: https://github.com/microsoft/pxt (docs/writing-docs/tutorials*, webapp/src/simtoolbar.tsx, debuggerToolbar.tsx, debuggerVariables.tsx, components/tutorial/*) · https://github.com/microsoft/microbit-robot
- Scratch GUI: https://github.com/scratchfoundation/scratch-gui (src/lib/layout-constants.js, src/components/cards/cards.jsx)
- Blockly, navegació per teclat: https://developers.google.com/blockly/guides/configure/web/keyboard-nav

**Pàgines oficials i ressenyes (via cercador)**
- Code.org: https://support.code.org/hc/en-us/articles/26001058366093 · https://code.org/en-US/curriculum/computer-science-fundamentals · https://curriculum.code.org/hoc/plugged/8/ · https://curriculum.code.org/docs/spritelab/codestudio_defining-behaviors/ · https://www.geekwire.com/2026/solidifying-its-shift-to-ai-education-code-org-rebrands-as-codeai/
- ScratchJr: https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2024/08/scratchjr-interface-guide.pdf · https://scratched.gse.harvard.edu/sites/default/files/scratchjr-reference-page.pdf · https://dl.acm.org/doi/10.1145/2485760.2485785
- Scratch al mòbil: https://www.siegelendowment.org/insights/scratch-3-0-is-here/
- Tynker: https://camps.tynker.com/camps/courses/camps-100?plan=all · https://alex.alsde.edu/LR/CR/57869/printer_friendly · https://www.tynker.com/blog/?p=11017
- CodeMonkey: https://www.techlearning.com/how-to/codemonkey-how-to-use-it-to-teach-coding · https://www.edtechimpact.com/products/codemonkey/ · https://www.educatorstechnology.com/2022/05/codemonkey-helps-kids-learn-coding.html
- Kodable: https://www.macworld.com/article/666998/kodable-for-ipad-review.html · https://sites.gsu.edu/bestpractices/2015/07/01/kodable-computer-programming-for-little-ones
- Lightbot: https://strategywiki.org/wiki/Lightbot/Gameplay · https://www.commonsense.org/education/reviews/lightbot-programming-puzzles
- codeSpark: https://www.commonsense.org/education/reviews/codespark-academy · https://apps.apple.com/app/foos-code-for-hour-free-educational/id938016211
- Smartick: https://www.smartick.es/blog/programacion/tipos-de-ejercicios-de-programacion/ · https://www.smartick.es/blog/programacion/juego-de-programacion/ · https://support.smartickmethod.com/en/articles/2761327-smartick-coding
- Codelearn: https://codelearn.com/our-method/ · Algorithmics: https://cz.alg.academy/visual-programming · Kodland: https://www.kodland.org/ · Robotix: https://www.colegionazaret.es/sites/colegionazaret.es/files/recursos/web/noticias/003%20Dossier%20Robotix.pdf
- LEGO: https://www.lego.com/en-us/aboutus/news/2026/january/lego-education-cs-ai · https://community.legoeducation.com/blogs/29/156
- VEX: https://kb.vex.com/hc/en-us/articles/360042389732 · https://kb.vex.com/hc/en-us/articles/360041790771 · https://kb.vex.com/hc/en-us/articles/360041342392 · https://api.vex.com/vr/home/playgrounds/free.html
- Bee-Bot/Blue-Bot: https://learn.k20center.ou.edu/tech-tool/606 · https://stemfinity.com/products/tts-blue-bot%C2%AE-bluetooth-programmable-floor-robot-single
