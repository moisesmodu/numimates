# Numi Tech · Tech IA: contracte del curs d'intel·ligència artificial

Llegeix també `scripts/TECH-CONTRACTE.md` (normes de contingut, format de sessions, guies i diapositives). Aquest document
fixa el que comparteixen el motor (`tech-ia.js` + `tech-ia.css`) i el contingut (`scripts/tech-src/ia/uN/` → `tech-c8.js`,
`tech-anim-c8.js`, `tech-guide-c8.js`). La unitat 1 (`scripts/tech-src/ia/u1/`) és la mostra de referència: i1-1 completa.

## El curs
| | |
|---|---|
| id · fitxers | `ia` · c8 (`tech-c8.js`, `tech-anim-c8.js`, `tech-guide-c8.js`) |
| Nom · edat | «Tech IA\|Tech IA» · «12-16 anys\|12-16 años» (1r-4t d'ESO) · color `#A23BEA` · icona `TCI.ia` · 🧠 |
| Sessions | `i1-1 … i8-4` (la 4a de cada unitat, `proj: true`). Tallers opcionals: `iN-5` amb `proj: true, taller: true` |
| Món 3D | illes `ciutat` (temes a `render-scenes.mjs`, `THEMES.ia`), capçalera `estudi` (`img/tech/scenes/hero-ia.webp`) |
| Escenes de les històries | les que ja existeixen (`estudi`, `lab`, `taller`…); el validador les comprova |

Construir: `node scripts/tech-build-course.mjs ia c8 "Tech IA"` i després `node scripts/tech-units.mjs` (panell i informes).
Si s'afegeixen o es treuen sessions d'una unitat, cal tornar a fer-ne l'illa (les parades han de coincidir):
`ONLY=isles COURSES=ia UNITS=3 node scripts/3d/render-scenes.mjs` (cal el servidor local a http://127.0.0.1:5190).
Solucionari: `PLAYWRIGHT=… node scripts/tech-sol.mjs` (ja inclou els passos IA amb `iaSolRows`).

### Unitats (títols al catàleg de `tech-c1.js`; es poden millorar, no canviar els ids)
1. **Què hi ha dins una IA?** regles o dades, probabilitat, un mini model de llenguatge que prediu la paraula següent (`iangram`).
2. **Entrena la teva IA** dades, etiquetes, prova, errors (matriu de confusió), biaix (`iatrain`).
3. **Parlar amb models de llenguatge** com funcionen, al·lucinacions, bons prompts, comprovar, la IA com a tutora i no com a copiadora (`iachat`, `iaprompt`).
4. **Imatge, veu i vídeo generats** com es generen (conceptualment), drets d'autor, deepfakes i com detectar-los, ús creatiu amb autoria declarada (`learn`, `dspot`, `dsort`, `quiz`, `create`…).
5. **Crea amb IA: vibe coding** descriure → la IA escriu el codi → llegir, provar i arreglar; especificació i proves d'acceptació; depurar, versions i regressions; projecte amb fitxa de transparència (`iavibe` amb `checksBy`, `wspot` amb JavaScript, `quiz` amb `art` de codi, `iacard`). Fet: `scripts/tech-src/ia/u5/`.
6. **Agents** objectiu, pla, eines, permisos, memòria, mínim privilegi i confirmació; injecció de prompts i errors en cadena; projecte d'un agent per al centre amb taula de permisos i fitxa de riscos (`iaagent`, `iachat` amb el registre al `tip`, `dspot`, `iacard`). Fet: `scripts/tech-src/ia/u6/`.
7. **IA i societat** feina, energia i aigua, privadesa, la llei europea d'IA (nivells de risc), bons usos (`dsort`, `iachat`, `quiz`).
8. **Projecte: una IA per al nostre centre** idea, fitxa de riscos (model card), prototip, pitch i `diploma`.

## Nivell base i nivell PRO (3r-4t d'ESO): un sol mecanisme
- Qualsevol pas (també `quiz`, `learn`…) pot portar `pro: { …camps }`. Amb el nivell PRO activat, aquests camps **substitueixen**
  els del pas (fusió superficial: un array es canvia sencer). Exemple: `{ k: 'iangram', …, checks: [A], pro: { n: 3, checks: [A, B] } }`.
- L'alumne/a activa o desactiva el PRO amb el botó **PRO** de la barra de dalt (només surt a les sessions de Tech IA que tenen
  algun pas amb `pro`); es desa a `P.tech.iapro`. Si un grup té `opts.tech.iapro: true`, és el valor per defecte.
- Un repte opcional continua sent `extra: true` (botó «Salta»). No feu servir altres marques.
- El validador comprova el pas base i el pas fusionat amb `pro`. A la guia, explica-ho a `diff.mes`.

## Privadesa i IA en directe (obligatori)
- Càmera i micròfon: només en memòria mentre dura el pas; no es desen ni s'envien. Al portafoli només van els noms de les
  classes, quants exemples i l'encert. El pas ho diu sempre (nota 🔒). Si no hi ha permís o aparell, es passa sol al dibuix o
  als exemples (`srcs`), amb un avís.
- Tot es pot fer **sense IA real**: tot és simulat per defecte. La IA en directe (`live: true`, interruptor «IA de veritat»)
  només surt si el docent ha activat l'assistent al grup (`opts.xat === true`) o l'alumne/a té pla amb assistent, i el
  servidor (`/api/chat`, mode `ctx.ia`) torna a comprovar el permís de la família, l'assistent del grup i els límits. Màxim
  8 preguntes en directe per sessió (`IA.cap`), dins del límit diari de sempre.
- Mai no envieu l'alumnat a serveis d'IA externs. Exemples, persones, apps i marques: inventats.

## Tipus de pas (prefix `ia`, `tech-ia.js`)
Tots porten `q` («ca|es», amb `<b>`) i `ph`. Opcionals comuns: `save: true` + `name` (desa al portafoli), `pro`, `extra`, `mood`.
Cada pas té **comprovacions** (`checks`) que es marquen en directe; «Continua» s'activa quan es compleixen totes.

### `iangram` — model de llenguatge de n-grames
```js
{ k: 'iangram', ph: 'repte', q, text: 'ca|es' | texts: [{ n: 'Contes|Cuentos', x: 'ca|es' }], unit: 'word'|'char', n: 2 (mida del n-grama),
  ctx: 'el gat|el gato' (començament inicial), add: ['frase|frase', …] (botons «＋» de dades), edit: true (text editable), orders: [2, 3] (selector «mira N enrere»),
  temp: 1, sol: 'text afegit que fa passar les comprovacions|…' (per al validador si no hi ha add), checks: [...] }
```
Comprovacions: `{ k: 'top', ctx, next }` (la més probable, sense empat) · `{ k: 'prob', ctx, next, min?, max? }` · `{ k: 'vocab', min }` ·
`{ k: 'words', min }` · `{ k: 'gen', min? }` (ha generat) · `{ k: 'temp' }` (ha generat amb temperatura ≤ 0,4 i ≥ 1,4) · `{ k: 'order', min: 3 }`.
`ctx`/`next` són «ca|es». El validador comprova que el text de partida no ho passa tot i que amb `add` (o `sol`) sí.

### `iatrain` — entrena un classificador (k-NN, al navegador)
```js
{ k: 'iatrain', ph: 'repte', q, classes: [{ n: 'Poma|Manzana', ico: '🍎', g: 'apple', bg: 'wood', fix: ['white', 'wood'], c?: '#color' }],
  srcs: ['data', 'cam', 'draw', 'mic'] (fonts que pot triar; la primera és la inicial), free: true (l'alumne/a posa nom a 2-4 classes),
  test: { n: 8, bg: ['white', 'wood'] } (prova generada), kNN: 5, biasq: { q, opts: [...], a, ex } (pregunta del biaix), checks: [...] }
```
- Fonts: **cam** (mantén premut el botó de la classe per gravar; imatge 40×30 → 8×6 colors + tons), **draw** (llenç; traç →
  quadrícula 16×16), **mic** (grava 1 s; 16 bandes de freqüència), **data** (conjunts propis generats: «+5» per classe).
- Generadors `g`: imatges `apple banana grape leaf ball cup` amb fons `bg`: `wood white grass blue dark mix`; dibuixos
  `circle square tri zig cross heart star line`; sons `whistle clap voice hum noise`. Amb `g` a totes les classes, la prova és
  automàtica i el validador comprova que el repte té solució; si no, l'alumne/a fa la prova mostrant N exemples de cada classe.
- **Biaix**: cada classe s'entrena amb un fons (`bg`) i la prova barreja fons → encerta ~50 %. Amb `biasq` respost bé, surt
  «Afegeix exemples variats» (`fix`, 10 per classe) i, en tornar a provar, arriba al mínim.
- Comprovacions: `{ k: 'perclass', min }` · `{ k: 'total', min }` · `{ k: 'acc', min: .8 }` · `{ k: 'test' }` · `{ k: 'bias' }` · `{ k: 'classes', min }` (free).
- Per a classificadors sense biaix amb imatges, feu servir el mateix fons a totes les classes (`bg: 'white'`): amb fons barrejats i
  pocs exemples, el k-NN encerta poc (és realista, però no per a un primer repte).

### `iachat` — conversa amb un model (simulada; en directe si es pot)
```js
{ k: 'iachat', ph: 'investiga', q, bot: { n: 'NumiLM|NumiLM', av: '🤖' }, topic: 'ca|es', live: true, need: 2, tip?,
  nodes: [{ id: 'a', msg: ['text|texto', { t: 'dada falsa|…', bad: 'per què és falsa|…', src?: 'font inventada|…' }, { t, ok: 'per què és certa|…' }],
            opts: [{ t, go: 'b', fb?, good? }], end?: true, fb? }],
  free: true (sense nodes: xat lliure amb replies: [{ if: '/regex/i', t }], fallback, hello, min: 2) }
```
L'alumne/a toca la 🚩 dels missatges que no li quadren: els que tenen `bad` compten com a al·lucinació trobada. Es resol en
arribar a un final amb `need` trobades. El validador comprova que tots els camins fins a un final tenen prou al·lucinacions.

### `iaprompt` — escriu (o munta) un prompt i mira com respon
```js
{ k: 'iaprompt', ph: 'repte', q, task: 'el que vol aconseguir|…', parts?: ['peça per afegir|…'], start?: 'prompt inicial|…', ph?: 'placeholder|…',
  need: 4 (punts de 6), req: ['ctx', 'task', 'fmt'], nocheat: true, answers: ['nivell 0|…', 'nivell 1|…', 'nivell 2|…', 'nivell 3|…'], sol: 'prompt bo|…', live: true }
```
Rúbrica per regles (ca i es): **ctx** context · **task** verb de tasca · **fmt** format · **ex** exemple · **lim** límits · **chk** comprovar
(«si no ho saps, digues-ho», fonts). Avisos: dades personals (correu, telèfon, nom, adreça, contrasenya, DNI, centre) i «fes-me els
deures». La resposta simulada és `answers[nivell]` (0-1 punts → 0, 2-3 → 1, 4 → 2, 5-6 → 3; amb dades personals, com a molt 1).

### `iaagent` — dissenya un agent i mira què fa
```js
{ k: 'iaagent', ph: 'repte', q, goal: 'ca|es',
  tools: [{ id: 'mail', n: 'Correu|Correo', ico: '✉️', perms: ['read', 'send', 'del'] }],     // perms: read write send pay del share web loc book
  acts: [{ id: 'llegir', t, tool: 'mail', perm: 'read', need: true, res?: 'resultat|…', dep?: 'id d'una acció anterior', bad?: 'el mal que fa|…' }],
  inject?: { on: 'llegir', tool: 'mail', perm: 'send', t: 'el text amagat|…', harm: 'què passa si l'agent obeeix|…' },
  mem?: [{ id, t, need?: true, pii?: true }], start: { plan: [], perms: 'all', mem: [...] }, sol: { plan: [...], perms: { mail: { read: 1, send: 2 } }, mem: [...] }, checks: [...] }
```
Permisos: 0 no · 1 sí · 2 sí, però pregunta abans (🙋). Simulació determinista: sense permís → ⛔; `dep` no fet → ⏳; acció `bad` amb 1 → ⚠️
dany, amb 2 → la persona diu que no; la injecció s'executa si l'agent té el permís de `inject` a 1. Comprovacions: `{ k: 'goal' }` ·
`{ k: 'safe' }` · `{ k: 'confirm' }` (send/pay/del/share/book a 2 si es donen) · `{ k: 'least' }` (cap permís que no faci servir) · `{ k: 'mem' }` · `{ k: 'steps', max }`.

### `iavibe` — vibe coding amb l'editor de Tech Web
```js
{ k: 'iavibe', ph: 'crea', q, idea: 'descripció d'exemple|…', kind?: 'count', kindHint?, bug: true (la IA simulada hi posa un error), needQ: 2,
  checks: [...comprovacions de Tech Web, també JavaScript...], sol: { html: { ca, es } | '…', css, js }, hint, q2?, url?, save?: true, live: true }
```
`checksBy: { count: [...], list: [...], … }` (opcional, per a apps lliures sense `kind`): comprovacions que s'afegeixen a `checks` segons la plantilla
que surti de la descripció, amb les proves `run` que destapen l'error típic de cada plantilla. El validador comprova que la plantilla sense
l'error passa les estàtiques i que té els `#id` de les proves. Amb la IA en directe (sense plantilla) i sense `checks`, es fa servir «el codi respon».
1) Descripció amb tres indicadors (què es veu · què passa quan… · detalls) i les funcions que «ha entès» la IA. 2) La IA (simulada:
plantilles pròpies; o en directe) escriu el codi. 3) S'obre l'editor de Tech Web amb les pestanyes `index.html`, `estil.css` i `app.js`.
Plantilles i ids fixos (per a les comprovacions `run`): **count** `#count #btn #reset #msg` (error: suma 2) · **dice** `#roll #dice #face #rolls`
(error: falta `+ 1`) · **timer** `#start #box #time #best` (error: espera × 10) · **list** `#task #add #list #left` (error: afegeix tasques buides) ·
**quiz** `#q #o1 #o2 #o3 #fb #score` (error: resposta bona mal apuntada) · **theme** `#theme`, `body.dark` (error: `add` en lloc de `toggle`) ·
**move** `#field #me #pos #up #down #left #right` (error: surt del camp) · **hello** `#name #greet #hello` (error: `name` en lloc de `name.value`).

Comprovacions noves de l'editor web (també per al curs Web): `{ k: 'js', v: '/regex/' }` · `{ k: 'jsid' }` · i proves de comportament
`{ k: 'run', act: [{ click: '#btn' }, { type: ['#name', 'Laia'] }, { key: 'ArrowRight' }, { wait: 3200 }], see: { sel: '#count', text: '3' | '/regex/',
num: [1, 6], count, cls, not, style: ['color', '/regex/'], visible, exists }, rep: 40 }`. Les `run` s'executen al navegador, cadascuna en una pàgina
amagada i aïllada (sense xarxa); el validador (Node) només comprova les estàtiques. Els errors de JavaScript surten a la barra d'estat amb la línia d'`app.js`.

### `iacard` — una fitxa per omplir que es desa al portafoli (model card, riscos, transparència…)
```js
{ k: 'iacard', ph: 'crea', q, kind: 'model'|'risk'|'transp'|'agent'|'perm'|'spec'|'app' (icona, color i nom del tipus), title: 'ca|es' (títol de la fitxa),
  name?: 'ca|es' (nom al portafoli), intro?: 'ca|es', ico?, col?, kindT?: 'ca|es' (per canviar el nom del tipus), save?: false (no es desa),
  fields: [{ k: 'us', label: 'ca|es', hint?: 'ca|es' (placeholder), min?: 20 (caràcters; 0 = opcional), rows?: 1-8 (1 = una línia), max? },
           { k: 'risc', label, choices: ['ca|es', …], multi?: true, min?: 1 (opcions mínimes), hint? }],
  sol?: { us: 'ca|es', risc: 0 } (exemple per al solucionari i el validador) }
```
Formulari a l'esquerra (al mòbil, pestanyes «Omple / Fitxa») i, al costat, la fitxa tal com quedarà (capçalera amb la icona, camps, autor/a i
data), que s'actualitza mentre s'escriu. Cada camp mostra `n/min` i ✓. «Desa la fitxa i continua» s'activa quan tots els camps tenen el mínim.
Es desa a `TPORT.ia` (`ia: 'card'`, una per pas: si es torna a fer, la substitueix i es pot millorar), es veu al portafoli i s'imprimeix
(🖨️ només la fitxa). L'esborrany es manté si es redibuixa el pas (p. ex. en canviar el nivell PRO). Al solucionari: els camps i l'exemple.

### Motor: comportaments comuns
- Temporitzadors i esperes dels passos IA: `iaTO(fn, ms)`, `iaIV(fn, ms)` i `iaAlive()` (després d'un `await`). Es cancel·len a `tStop`, quan
  canvia el pas: un pas anterior no pot redibuixar el pas nou ni tornar a activar «Continua». Feu-los servir a qualsevol codi nou.
- L'enunciat (`q`) es retalla a 2-3 línies perquè el pas càpiga; si no hi cap, surt «llegir més» (i queda obert en redibuixar el pas).
- `iangram` amb `texts` i `edit`: cada corpus guarda el que s'hi ha escrit i afegit en canviar de corpus.
- Matriu de confusió: capçaleres que no es repeteixen (icones, o el prefix més curt que distingeix les classes; el nom sencer al `title`).
- Imprimibles `graella`: `label: 'ca|es'` canvia «Nom del repte» de la línia del nom (fora del curs Robot, per defecte «Títol»).
- Codi JavaScript per llegir: a un `quiz`, `art: () => '<div class="wcwin iacodeart">…</div>'` (finestra d'editor de Tech Web, només per mirar;
  vegeu `I5C` a `u5/unit.js`); a un `wspot`, el JavaScript dins de `<script>` a `html` amb `preview: false` (es toca la línia).

### Demos de teoria i diapositives
`learn` amb `media: { k: 'ia', demo: 'ngram', text, ctx }` (barres de la paraula següent) · `{ demo: 'knn' }` (els 5 veïns més propers) ·
`{ demo: 'chat', msgs: [['me'|'them', 'ca|es', bad?]] }`. Les mateixes a les diapositives `k: 'media'`. Animacions pròpies a `uN/tani.js` (`TANI`).

## Referències que funcionen
- `IA_SAMPLES` (al final de `tech-ia.js`): un pas de cada tipus amb solució, també `iacard` (també el laboratori i el validador els fan servir).
- `scripts/tech-src/ia/u1/`: sessió i1-1 completa (16 passos, guia de 60 min amb 16 diapositives i un imprimible).
- Laboratori d'IA (`tLab('ia')`, `iaLabSteps()`): els set tipus en mode lliure (l'última, una model card), amb «Eina següent».

## Comprovar abans d'acabar
`node <scratchpad>/t/validate.mjs` (0 errors, 0 avisos; `--course ia`), `node --check` de cada fitxer, i al navegador cada pas a 390×740 i
1440×800 sense scroll (`<scratchpad>/t/ia-engine/browser.mjs` prova els sis tipus, càmera i micròfon falsos i el permís denegat).
