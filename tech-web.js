/* ===== Numi Tech · Tech Web: editor d'HTML i CSS, vista prèvia, comprovador i passos propis =====
   Material propi de Numi. Tots els globals porten el prefix «web» (o WEB_).
   · Editor: textarea + capa acolorida (sense dependències), números de línia, sagnat automàtic, tancament
     d'etiquetes, suggeriments (etiquetes, atributs, propietats, valors, selectors, imatges), barra de símbols per al
     mòbil, pestanyes index.html / estil.css i desfer/refer propis.
   · Vista prèvia: <iframe sandbox="" srcdoc> (sense scripts, origen opac) + una CSP dins el document que bloqueja
     qualsevol petició externa; les imatges són fitxers propis de img/tech/web/ que es passen com a data: URI.
   · Comprovador: DOMParser + un analitzador de CSS senzill amb cascada (especificitat, herència, @media) per validar
     objectius («hi ha un h1», «el títol és vermell», «fa servir flex»…), amb pistes amables.
   · Passos nous: TSTEP.web (editar i comprovar / crear i desar), TSTEP.webquiz (troba l'error, prediu el resultat,
     tria el codi), TSTEP.webbox (model de caixa), TSTEP.webfake (detectiu de webs falses), TSTEP.webtrip (el viatge
     d'una pàgina) i TSTEP.webdiploma.

   ESQUEMA DELS PASSOS (contingut a tech-c4.js; tots els textos "català|castellano"; entre `cometes inverses` es
   mostra com a codi: `<h1>` → <code>&lt;h1&gt;</code>)
   { k:'web', ph, q, html, css?, goals:[GOAL], sol:{html, css?}, hint?, snip?:['<li></li>'], tab?:'css',
     device?:'mobile'|'tablet'|'desktop', free?:true (sense objectius: explorar), save?:true, name?, crit?, proj?:'clau' }
   GOAL = { t:'criteri visible', h?:'pista si falla', … una regla:
     sel:'ul > li' [n|min|max] [text|textMin|notext|attr|attrv]      (element/s a l'HTML)
     css:'h1', prop:'color' [val|any|not|min|max|oneOf|color] [media:'mobile'|'desktop'] [state:'hover'] [all]
     link:'estil.css' · media:true · rule:/:hover/ (algun selector) · clean:true (sense errors d'etiquetes)
     before:['h1','p'] · fn:(ctx)=>bool }
   { k:'webquiz', mode:'bug', q, code, lang:'html'|'css', a:índexLínia, ex, fix? }
   { k:'webquiz', mode:'render'|'code', q, html, css?, wrong:[{html?, css?}, …], ex }
   { k:'webbox', q, box?:{padding, border, margin}, goal?:{padding?, border?, margin?} }
   { k:'webfake', q, url, lock, urlBad?, lockBad?, real?, parts:[{k:'logo'|'banner'|'text'|'form'|'button'|'price'|'timer'|'img'|'foot', t, …, bad?|ok?}] }
   { k:'webtrip', q } · { k:'webdiploma' } */

/* ---------- Dades ---------- */
const WEB_VOID = new Set('area base br col embed hr img input link meta source track wbr'.split(' '));
const WEB_KNOWN = new Set(('html head body title meta link style script noscript base h1 h2 h3 h4 h5 h6 p br hr b strong i em u s small mark span div ul ol li dl dt dd img a figure figcaption ' +
  'header nav main section article footer aside table tr td th thead tbody tfoot caption colgroup col button blockquote cite q code pre sup sub form input label textarea select option optgroup ' +
  'fieldset legend iframe details summary time address abbr del ins kbd var samp picture source audio video track canvas svg wbr data output progress meter dialog template center font marquee').split(' '));
// suggeriments d'etiquetes (el que un alumne/a fa servir de veritat)
const WEB_TAGS = [
  ['h1', 'Títol principal|Título principal'], ['h2', 'Subtítol|Subtítulo'], ['h3', 'Títol petit|Título pequeño'], ['p', 'Paràgraf|Párrafo'],
  ['ul', 'Llista amb punts|Lista con puntos'], ['ol', 'Llista numerada|Lista numerada'], ['li', 'Element d\'una llista|Elemento de una lista'],
  ['img', 'Imatge|Imagen'], ['a', 'Enllaç|Enlace'], ['b', 'Negreta|Negrita'], ['strong', 'Important (negreta)|Importante (negrita)'], ['i', 'Cursiva|Cursiva'], ['em', 'Èmfasi (cursiva)|Énfasis (cursiva)'],
  ['br', 'Salt de línia|Salto de línea'], ['hr', 'Línia horitzontal|Línea horizontal'], ['div', 'Caixa per agrupar|Caja para agrupar'], ['span', 'Tros de text|Trozo de texto'],
  ['header', 'Capçalera|Cabecera'], ['nav', 'Menú|Menú'], ['main', 'Contingut principal|Contenido principal'], ['section', 'Secció|Sección'], ['article', 'Article|Artículo'], ['footer', 'Peu de pàgina|Pie de página'],
  ['figure', 'Imatge amb peu|Imagen con pie'], ['figcaption', 'Peu de la imatge|Pie de la imagen'], ['table', 'Taula|Tabla'], ['tr', 'Fila|Fila'], ['th', 'Cel·la de títol|Celda de título'], ['td', 'Cel·la|Celda'],
  ['button', 'Botó|Botón'], ['blockquote', 'Cita|Cita'], ['small', 'Text petit|Texto pequeño'], ['mark', 'Subratllador|Subrayador'], ['h4', 'Títol més petit|Título más pequeño'],
  ['title', 'Nom de la pestanya|Nombre de la pestaña'], ['meta', 'Informació de la pàgina|Información de la página'], ['link', 'Enllaça un fitxer CSS|Enlaza un archivo CSS'], ['style', 'CSS dins l\'HTML|CSS dentro del HTML']
];
const WEB_ATTRS = { img: ['src', 'alt', 'width'], a: ['href', 'target'], link: ['rel', 'href'], meta: ['name', 'content', 'charset'], td: ['colspan'], th: ['colspan'], html: ['lang'], '*': ['class', 'id', 'style', 'title'] };
// propietats CSS conegudes (per al corrector i els suggeriments)
const WEB_PROPS_ALL = ('color background background-color background-image background-size background-position background-repeat border border-top border-right border-bottom border-left border-width border-style border-color ' +
  'border-radius border-top-left-radius border-top-right-radius border-bottom-left-radius border-bottom-right-radius border-collapse border-spacing box-shadow text-shadow box-sizing margin margin-top margin-right margin-bottom margin-left ' +
  'padding padding-top padding-right padding-bottom padding-left width height min-width max-width min-height max-height display flex flex-direction flex-wrap flex-flow flex-grow flex-shrink flex-basis ' +
  'justify-content align-items align-content align-self gap row-gap column-gap order grid grid-template-columns grid-template-rows grid-template-areas grid-template grid-column grid-row grid-area place-items place-content ' +
  'font font-family font-size font-weight font-style font-variant line-height letter-spacing word-spacing text-align text-decoration text-decoration-line text-decoration-color text-transform text-indent white-space ' +
  'list-style list-style-type list-style-position list-style-image vertical-align opacity visibility overflow overflow-x overflow-y position top right bottom left z-index float clear cursor transition ' +
  'transition-property transition-duration transition-timing-function transition-delay transform transform-origin animation filter outline outline-color outline-style outline-width outline-offset object-fit aspect-ratio ' +
  'content quotes caption-side table-layout empty-cells accent-color caret-color user-select pointer-events resize scroll-behavior inset text-overflow word-break overflow-wrap hyphens columns column-count').split(' ');
const WEB_PROPS = [
  ['color', 'Color del text|Color del texto'], ['background-color', 'Color de fons|Color de fondo'], ['background', 'Fons|Fondo'], ['font-size', 'Mida de la lletra|Tamaño de la letra'],
  ['font-family', 'Tipus de lletra|Tipo de letra'], ['font-weight', 'Gruix de la lletra|Grosor de la letra'], ['font-style', 'Cursiva|Cursiva'], ['text-align', 'Alineació del text|Alineación del texto'],
  ['text-decoration', 'Subratllat|Subrayado'], ['text-transform', 'Majúscules o minúscules|Mayúsculas o minúsculas'], ['line-height', 'Espai entre línies|Espacio entre líneas'], ['letter-spacing', 'Espai entre lletres|Espacio entre letras'],
  ['width', 'Amplada|Anchura'], ['height', 'Alçada|Altura'], ['max-width', 'Amplada màxima|Anchura máxima'], ['margin', 'Marge (espai de fora)|Margen (espacio de fuera)'], ['padding', 'Farciment (espai de dins)|Relleno (espacio de dentro)'],
  ['border', 'Vora|Borde'], ['border-radius', 'Cantonades rodones|Esquinas redondas'], ['box-shadow', 'Ombra de la caixa|Sombra de la caja'], ['text-shadow', 'Ombra del text|Sombra del texto'],
  ['display', 'Com es col·loca|Cómo se coloca'], ['flex-direction', 'Fila o columna|Fila o columna'], ['justify-content', 'Repartir en horitzontal|Repartir en horizontal'], ['align-items', 'Alinear en vertical|Alinear en vertical'],
  ['flex-wrap', 'Saltar de línia|Saltar de línea'], ['gap', 'Espai entre elements|Espacio entre elementos'], ['grid-template-columns', 'Columnes de la graella|Columnas de la rejilla'],
  ['list-style-type', 'Pics de la llista|Viñetas de la lista'], ['cursor', 'Forma del ratolí|Forma del ratón'], ['transition', 'Canvi suau|Cambio suave'], ['transform', 'Moure, girar o fer gran|Mover, girar o agrandar'],
  ['opacity', 'Transparència|Transparencia'], ['border-collapse', 'Vores de taula juntes|Bordes de tabla juntos'], ['object-fit', 'Com omple la imatge|Cómo llena la imagen'], ['margin-top', 'Marge de dalt|Margen de arriba'],
  ['margin-bottom', 'Marge de baix|Margen de abajo'], ['padding-left', 'Farciment esquerre|Relleno izquierdo'], ['border-bottom', 'Vora de baix|Borde de abajo'], ['background-image', 'Imatge de fons|Imagen de fondo']
];
const WEB_VALS = {
  display: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'], 'text-align': ['left', 'center', 'right', 'justify'], 'font-weight': ['bold', 'normal', '300', '700', '900'], 'font-style': ['italic', 'normal'],
  'font-family': ['Arial, sans-serif', 'Georgia, serif', "'Courier New', monospace", "'Comic Sans MS', cursive", 'Verdana, sans-serif', "'Trebuchet MS', sans-serif", 'Impact, sans-serif'],
  'text-decoration': ['none', 'underline', 'line-through', 'overline'], 'text-transform': ['uppercase', 'lowercase', 'capitalize', 'none'],
  'flex-direction': ['row', 'column', 'row-reverse', 'column-reverse'], 'flex-wrap': ['wrap', 'nowrap'], 'justify-content': ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
  'align-items': ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'], 'list-style-type': ['none', 'disc', 'circle', 'square', 'decimal', 'upper-roman', 'lower-alpha'], cursor: ['pointer', 'default', 'help', 'not-allowed', 'grab'],
  'border-collapse': ['collapse', 'separate'], 'object-fit': ['cover', 'contain', 'fill'], border: ['2px solid black', '3px dashed', '4px dotted', '5px double'], 'border-style': ['solid', 'dashed', 'dotted', 'double', 'none'],
  transition: ['0.3s', 'all 0.5s', 'transform 0.3s'], transform: ['scale(1.1)', 'rotate(5deg)', 'translateY(-5px)'], 'grid-template-columns': ['1fr 1fr', '1fr 1fr 1fr', 'repeat(3, 1fr)', '200px 1fr'],
  'box-shadow': ['0 4px 10px gray', '2px 2px 0 black', '0 0 15px gold'], 'text-shadow': ['2px 2px 0 black', '0 0 8px yellow'], width: ['100%', '50%', '300px', 'auto'], 'max-width': ['100%', '600px', '900px'],
  'font-size': ['16px', '20px', '24px', '32px', '2em', '1.5rem'], margin: ['0', '10px', '20px', '0 auto', '10px 20px'], padding: ['10px', '20px', '10px 20px'], 'border-radius': ['8px', '15px', '50%'], gap: ['10px', '20px'],
  opacity: ['0.5', '0.8', '1'], 'line-height': ['1.5', '2', '24px'], 'letter-spacing': ['1px', '2px', '5px'], height: ['100px', '200px', 'auto']
};
const WEB_COLOR_PROPS = new Set(['color', 'background-color', 'border-color', 'outline-color', 'text-decoration-color', 'accent-color', 'caret-color', 'border-top-color', 'border-bottom-color', 'border-left-color', 'border-right-color']);
const WEB_LEN_PROPS = new Set('width height min-width max-width min-height max-height margin margin-top margin-right margin-bottom margin-left padding padding-top padding-right padding-bottom padding-left font-size border-width border-radius gap row-gap column-gap top right bottom left letter-spacing word-spacing text-indent outline-width outline-offset flex-basis'.split(' '));
// els 148 colors amb nom de CSS
const WEB_NAMED = (() => {
  const s = 'aliceblue f0f8ff antiquewhite faebd7 aqua 00ffff aquamarine 7fffd4 azure f0ffff beige f5f5dc bisque ffe4c4 black 000000 blanchedalmond ffebcd blue 0000ff blueviolet 8a2be2 brown a52a2a burlywood deb887 cadetblue 5f9ea0 ' +
    'chartreuse 7fff00 chocolate d2691e coral ff7f50 cornflowerblue 6495ed cornsilk fff8dc crimson dc143c cyan 00ffff darkblue 00008b darkcyan 008b8b darkgoldenrod b8860b darkgray a9a9a9 darkgreen 006400 darkgrey a9a9a9 ' +
    'darkkhaki bdb76b darkmagenta 8b008b darkolivegreen 556b2f darkorange ff8c00 darkorchid 9932cc darkred 8b0000 darksalmon e9967a darkseagreen 8fbc8f darkslateblue 483d8b darkslategray 2f4f4f darkslategrey 2f4f4f ' +
    'darkturquoise 00ced1 darkviolet 9400d3 deeppink ff1493 deepskyblue 00bfff dimgray 696969 dimgrey 696969 dodgerblue 1e90ff firebrick b22222 floralwhite fffaf0 forestgreen 228b22 fuchsia ff00ff gainsboro dcdcdc ' +
    'ghostwhite f8f8ff gold ffd700 goldenrod daa520 gray 808080 grey 808080 green 008000 greenyellow adff2f honeydew f0fff0 hotpink ff69b4 indianred cd5c5c indigo 4b0082 ivory fffff0 khaki f0e68c lavender e6e6fa ' +
    'lavenderblush fff0f5 lawngreen 7cfc00 lemonchiffon fffacd lightblue add8e6 lightcoral f08080 lightcyan e0ffff lightgoldenrodyellow fafad2 lightgray d3d3d3 lightgreen 90ee90 lightgrey d3d3d3 lightpink ffb6c1 ' +
    'lightsalmon ffa07a lightseagreen 20b2aa lightskyblue 87cefa lightslategray 778899 lightslategrey 778899 lightsteelblue b0c4de lightyellow ffffe0 lime 00ff00 limegreen 32cd32 linen faf0e6 magenta ff00ff maroon 800000 ' +
    'mediumaquamarine 66cdaa mediumblue 0000cd mediumorchid ba55d3 mediumpurple 9370db mediumseagreen 3cb371 mediumslateblue 7b68ee mediumspringgreen 00fa9a mediumturquoise 48d1cc mediumvioletred c71585 midnightblue 191970 ' +
    'mintcream f5fffa mistyrose ffe4e1 moccasin ffe4b5 navajowhite ffdead navy 000080 oldlace fdf5e6 olive 808000 olivedrab 6b8e23 orange ffa500 orangered ff4500 orchid da70d6 palegoldenrod eee8aa palegreen 98fb98 ' +
    'paleturquoise afeeee palevioletred db7093 papayawhip ffefd5 peachpuff ffdab9 peru cd853f pink ffc0cb plum dda0dd powderblue b0e0e6 purple 800080 rebeccapurple 663399 red ff0000 rosybrown bc8f8f royalblue 4169e1 ' +
    'saddlebrown 8b4513 salmon fa8072 sandybrown f4a460 seagreen 2e8b57 seashell fff5ee sienna a0522d silver c0c0c0 skyblue 87ceeb slateblue 6a5acd slategray 708090 slategrey 708090 snow fffafa springgreen 00ff7f ' +
    'steelblue 4682b4 tan d2b48c teal 008080 thistle d8bfd8 tomato ff6347 turquoise 40e0d0 violet ee82ee wheat f5deb3 white ffffff whitesmoke f5f5f5 yellow ffff00 yellowgreen 9acd32';
  const o = {}, a = s.split(' '); for (let i = 0; i < a.length; i += 2) o[a[i]] = '#' + a[i + 1]; return o;
})();
const WEB_COLORS_KID = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'gray', 'gold', 'navy', 'teal', 'tomato', 'skyblue', 'hotpink', 'limegreen', 'crimson', 'coral', 'turquoise', 'lavender', 'brown', 'darkgreen', 'orchid'];
// colors escrits en català o castellà → el nom en anglès que entén el navegador
const WEB_COLOR_CA = { vermell: 'red', vermella: 'red', rojo: 'red', roja: 'red', blau: 'blue', blava: 'blue', azul: 'blue', verd: 'green', verda: 'green', verde: 'green', groc: 'yellow', groga: 'yellow', amarillo: 'yellow',
  negre: 'black', negra: 'black', negro: 'black', blanc: 'white', blanca: 'white', blanco: 'white', gris: 'gray', rosa: 'pink', lila: 'purple', morat: 'purple', morada: 'purple', morado: 'purple', taronja: 'orange', naranja: 'orange',
  marro: 'brown', 'marró': 'brown', marron: 'brown', 'marrón': 'brown', daurat: 'gold', dorado: 'gold', celeste: 'skyblue', plata: 'silver', violeta: 'violet', turquesa: 'turquoise', granate: 'maroon', grana: 'maroon' };
// imatges pròpies (il·lustracions originals de Numi) que els alumnes poden fer servir: <img src="img/gat.svg">
const WEB_IMGS = ['gat', 'gos', 'tortuga', 'lloro', 'guineu', 'balena', 'pizza', 'pastis', 'galetes', 'fruita', 'muntanya', 'platja', 'seu-vella', 'pont', 'coet', 'planeta', 'robot', 'consola', 'pilota', 'llibre', 'guitarra', 'avatar', 'estrella'];

/* ---------- Petites eines ---------- */
const webE = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const webNorm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const webLev = (a, b) => { const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]); for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; };
const webNear = (w, list, max = 2) => { let best = null, bd = 99; for (const x of list) { const d = webLev(w, x); if (d < bd) { bd = d; best = x; } } return bd <= max ? best : null; };
const webLineOf = (code, pos) => code.slice(0, pos).split('\n').length;   // 1-based
const webT = (ca, es) => typeof L === 'function' ? L(ca, es) : ca;
const webTv = v => typeof tval === 'function' ? tval(v) : typeof v === 'string' ? v.split('|')[0] : v;
// text de contingut amb `codi` → <code>
const webCodeTxt = s => String(s).replace(/`([^`]+)`/g, (_, c) => `<code class="wc">${webE(c)}</code>`);

/* ---------- Tokenitzadors (per acolorir, corregir i suggerir) ---------- */
// HTML → [{t:'tag'|'tagname'|'attr'|'eq'|'str'|'text'|'cm'|'ent'|'css…', s, a, b}]
function webTokHTML(code) {
  const out = [], n = code.length; let i = 0;
  const push = (t, a, b, x) => { if (b > a) out.push({ t, a, b, s: code.slice(a, b), ...(x || {}) }); };
  while (i < n) {
    if (code.startsWith('<!--', i)) { const e = code.indexOf('-->', i + 4), j = e < 0 ? n : e + 3; push('cm', i, j); i = j; continue; }
    if (code[i] === '<' && /[a-zA-Z\/!]/.test(code[i + 1] || '')) {
      const st = i; let j = i + 1; const close = code[j] === '/'; if (close) j++;
      if (code[j] === '!') { const e = code.indexOf('>', j), k = e < 0 ? n : e + 1; push('doc', i, k); i = k; continue; }
      const nm = /^[a-zA-Z][a-zA-Z0-9-]*/.exec(code.slice(j)); const name = nm ? nm[0].toLowerCase() : '';
      push('tag', i, j, { open: !close, close }); push('tagname', j, j + (nm ? nm[0].length : 0), { name, close });
      j += nm ? nm[0].length : 0;
      let ended = false, selfc = false;
      while (j < n) {
        const c = code[j];
        if (c === '>') { push('tag', j, j + 1, { end: 1 }); j++; ended = true; break; }
        if (c === '/' && code[j + 1] === '>') { push('tag', j, j + 2, { end: 1 }); j += 2; ended = true; selfc = true; break; }
        if (c === '<') break;   // falta el «>»
        if (/\s/.test(c)) { let k = j; while (k < n && /\s/.test(code[k])) k++; push('ws', j, k); j = k; continue; }
        if (c === '=') { push('eq', j, j + 1); j++; continue; }
        if (c === '"' || c === "'") { let k = code.indexOf(c, j + 1); const unc = k < 0 || code.slice(j + 1, k).includes('\n') && code.slice(j + 1, k).includes('>'); if (k < 0) k = n - 1;
          push('str', j, k + 1, unc ? { unc: 1 } : null); j = k + 1; continue; }
        let k = j; while (k < n && !/[\s=>"'<]/.test(code[k]) && !(code[k] === '/' && code[k + 1] === '>')) k++;
        if (k === j) k++;
        const prev = out[out.length - 1]; push(prev && prev.t === 'eq' ? 'str' : 'attr', j, k); j = k;
      }
      const tagTok = { t: 'el', a: st, b: j, name, close, ended, selfc };
      out.push(tagTok);
      i = j;
      // contingut de <style>: CSS
      if (!close && ended && name === 'style') { const e = code.toLowerCase().indexOf('</style', i), k = e < 0 ? n : e; webTokCSS(code.slice(i, k)).forEach(t => out.push({ ...t, a: t.a + i, b: t.b + i, css: 1 })); i = k; }
      continue;
    }
    if (code[i] === '&') { const m = /^&[#a-zA-Z0-9]{1,10};/.exec(code.slice(i, i + 12)); if (m) { push('ent', i, i + m[0].length); i += m[0].length; continue; } }
    let k = i + 1; while (k < n && code[k] !== '<' && code[k] !== '&') k++;
    push('text', i, k); i = k;
  }
  return out;
}
// CSS → tokens; tracks context (selector / property / value) amb una pila de blocs
function webTokCSS(code) {
  const out = [], n = code.length, stack = []; let i = 0, mode = 'sel';
  const push = (t, a, b, x) => { if (b > a) out.push({ t, a, b, s: code.slice(a, b), ...(x || {}) }); };
  while (i < n) {
    const c = code[i];
    if (code.startsWith('/*', i)) { const e = code.indexOf('*/', i + 2), j = e < 0 ? n : e + 2; push('cm', i, j); i = j; continue; }
    if (/\s/.test(c)) { let k = i; while (k < n && /\s/.test(code[k])) k++; push('ws', i, k); i = k; continue; }
    if (c === '{') { const pre = out.filter(t => t.t === 'sel' || t.t === 'at').slice(-1)[0]; const isAt = pre && pre.t === 'at' && /^@(media|supports|layer|container)/i.test(pre.s);
      stack.push(isAt ? 'at' : 'decl'); push('brace', i, i + 1); mode = isAt ? 'sel' : 'prop'; i++; continue; }
    if (c === '}') { stack.pop(); push('brace', i, i + 1); mode = stack[stack.length - 1] === 'decl' ? 'prop' : 'sel'; i++; continue; }
    if (mode === 'sel') {
      if (c === '@') { let k = i; while (k < n && code[k] !== '{' && code[k] !== ';') k++; push('at', i, k); i = code[k] === ';' ? k + 1 : k; continue; }
      let k = i; while (k < n && code[k] !== '{' && code[k] !== '}' && !code.startsWith('/*', k)) k++;
      let e = k; while (e > i && /\s/.test(code[e - 1])) e--; push('sel', i, e); i = e; continue;
    }
    if (mode === 'prop') {
      if (c === ';') { push('punc', i, i + 1); i++; continue; }
      let k = i; while (k < n && !/[:;{}\n]/.test(code[k])) k++;
      let e = k; while (e > i && /\s/.test(code[e - 1])) e--; push('prop', i, e);
      i = e;
      if (code[k] === ':' && e === k) { push('colon', k, k + 1); i = k + 1; mode = 'val'; }
      else if (code[k] === ':') { push('ws', e, k); push('colon', k, k + 1); i = k + 1; mode = 'val'; }
      continue;
    }
    if (mode === 'val') {
      if (c === ';') { push('punc', i, i + 1); i++; mode = 'prop'; continue; }
      let k = i; while (k < n && code[k] !== ';' && code[k] !== '}' && !(code[k] === '\n' && /^\s*[a-z-]+\s*:/i.test(code.slice(k + 1, k + 60)) && !/[,(]\s*$/.test(code.slice(i, k)))) k++;
      let e = k; while (e > i && /\s/.test(code[e - 1])) e--; push('val', i, e); i = e;
      if (code[k] === '\n') mode = 'prop';
      continue;
    }
  }
  return out;
}

/* ---------- Acolorir el codi ---------- */
function webHLCSSVal(s) {
  // números amb unitat, colors (amb una ratlla del mateix color), cadenes i !important
  return s.replace(/("[^"]*"?|'[^']*'?)|(#[0-9a-fA-F]{3,8}\b)|(-?\d*\.?\d+)(px|em|rem|%|vh|vw|s|ms|deg|fr)?|([a-zA-Z-]+)(\()?|([^"'#a-zA-Z\d-]+)/g, (m, str, hex, num, unit, word, paren, rest) => {
    if (str) return `<span class="w-str">${webE(str)}</span>`;
    if (hex) return `<span class="w-col" style="--c:${hex}">${webE(hex)}</span>`;
    if (num !== undefined && num !== '') return `<span class="w-num">${webE(num)}${unit ? `<span class="w-unit">${unit}</span>` : ''}</span>`;
    if (word) { const lw = word.toLowerCase(); if (WEB_NAMED[lw]) return `<span class="w-col" style="--c:${WEB_NAMED[lw]}">${webE(word)}</span>${paren || ''}`; return `<span class="${paren ? 'w-fn' : 'w-kw'}">${webE(word)}</span>${paren || ''}`; }
    return webE(m);
  });
}
function webHL(code, lang, bad) {
  const toks = lang === 'css' ? webTokCSS(code) : webTokHTML(code);
  let out = '', pos = 0;
  const cls = { tag: 'w-tag', tagname: 'w-tn', attr: 'w-at', eq: 'w-eq', str: 'w-str', cm: 'w-cm', ent: 'w-ent', doc: 'w-doc', sel: 'w-sel', at: 'w-atr', prop: 'w-prop', colon: 'w-p', punc: 'w-p', brace: 'w-br' };
  for (const t of toks) {
    if (t.t === 'el') continue;
    if (t.a < pos) continue;
    if (t.a > pos) out += webE(code.slice(pos, t.a));
    let h = t.t === 'val' ? webHLCSSVal(t.s) : t.t === 'sel' ? webE(t.s).replace(/([.#][\w-]+)/g, '<span class="w-cls">$1</span>').replace(/(:{1,2}[\w-]+)/g, '<span class="w-ps">$1</span>') : webE(t.s);
    if (cls[t.t]) h = `<span class="${cls[t.t]}${t.unc ? ' w-bad' : ''}">${h}</span>`;
    out += h; pos = t.b;
  }
  if (pos < code.length) out += webE(code.slice(pos));
  // línies amb error: es marquen amb una ona vermella (sense canviar l'amplada del text)
  if (bad && bad.size) out = out.split('\n').map((l, i) => bad.has(i + 1) ? `<span class="w-errl">${l || ' '}</span>` : l).join('\n');
  return out;
}

/* ---------- Corrector amable (errors amb número de línia) ---------- */
const WEB_NONEST = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'b', 'strong', 'i', 'em', 'title', 'button', 'td', 'th', 'tr']);
function webLintHTML(code) {
  const errs = [], stack = [], toks = webTokHTML(code), add = (pos, ca, es) => errs.push({ line: webLineOf(code, pos), msg: ca + '|' + es });
  let inSvg = 0;
  for (const t of toks) {
    if (t.t === 'str' && t.unc) add(t.a, 'Hi ha unes cometes " sense tancar.', 'Hay unas comillas " sin cerrar.');
    if (t.t !== 'el') continue;
    const nm = t.name;
    if (!nm) { add(t.a, "Després de «<» hi ha d'anar el nom de l'etiqueta.", 'Después de «<» tiene que ir el nombre de la etiqueta.'); continue; }
    if (!t.ended) add(t.a, `Falta el «>» per tancar l'etiqueta «${t.close ? '/' : ''}${nm}».`, `Falta el «>» para cerrar la etiqueta «${t.close ? '/' : ''}${nm}».`);
    if (nm === 'svg') { inSvg += t.close ? -1 : t.selfc ? 0 : 1; continue; }
    if (inSvg > 0) continue;
    if (!WEB_KNOWN.has(nm)) { const s = webNear(nm, [...WEB_KNOWN]); add(t.a, `No conec l'etiqueta «${nm}»${s ? `: potser volies dir «${s}»?` : '.'}`, `No conozco la etiqueta «${nm}»${s ? `: ¿quizá querías decir «${s}»?` : '.'}`); continue; }
    if (WEB_VOID.has(nm)) { if (t.close && nm !== 'br') add(t.a, `«${nm}» no es tanca: no porta «</${nm}>».`, `«${nm}» no se cierra: no lleva «</${nm}>».`); continue; }
    if (!t.close) {
      if (t.selfc) continue;
      const top = stack[stack.length - 1];
      if (top && top.name === nm && WEB_NONEST.has(nm)) add(t.a, `Has obert un altre «${nm}» sense tancar el de la línia ${top.line}. Potser hi falta la barra: «</${nm}>».`, `Has abierto otro «${nm}» sin cerrar el de la línea ${top.line}. Quizá falta la barra: «</${nm}>».`);
      stack.push({ name: nm, line: webLineOf(code, t.a) });
    } else {
      const k = stack.map(s => s.name).lastIndexOf(nm);
      if (k < 0) { add(t.a, `Aquest «</${nm}>» tanca un «${nm}» que no s'ha obert.`, `Este «</${nm}>» cierra un «${nm}» que no se ha abierto.`); continue; }
      for (let j = stack.length - 1; j > k; j--) { const s = stack[j]; if (!['html', 'head', 'body', 'tbody', 'thead'].includes(s.name)) errs.push({ line: s.line, msg: `Falta tancar «${s.name}» (amb «</${s.name}>») abans de «</${nm}>».|Falta cerrar «${s.name}» (con «</${s.name}>») antes de «</${nm}>».` }); }
      stack.length = k;
    }
  }
  stack.filter(s => !['html', 'head', 'body', 'tbody', 'thead'].includes(s.name)).forEach(s => errs.push({ line: s.line, msg: `Falta tancar «${s.name}»: escriu «</${s.name}>» on acaba.|Falta cerrar «${s.name}»: escribe «</${s.name}>» donde termina.` }));
  // un error per línia, en ordre
  const seen = new Set(); return errs.sort((a, b) => a.line - b.line).filter(e => !seen.has(e.line) && seen.add(e.line));
}
function webLintCSS(code, base = 0, full) {
  const errs = [], src = full || code, add = (pos, ca, es) => errs.push({ line: webLineOf(src, pos + base), msg: ca + '|' + es });
  const toks = webTokCSS(code); let depth = 0; const opens = [];
  toks.forEach((t, k) => {
    if (t.t === 'brace') { if (t.s === '{') { depth++; opens.push(t.a); } else { depth--; opens.pop(); if (depth < 0) { add(t.a, 'Aquesta clau «}» sobra: no hi ha cap «{» obert.', 'Esta llave «}» sobra: no hay ninguna «{» abierta.'); depth = 0; } } }
    if (t.t === 'prop') {
      const p = t.s.trim().toLowerCase(), nx = toks.slice(k + 1).find(x => x.t !== 'ws');
      if (!nx || nx.t !== 'colon') {
        if (/^[a-z-]+\s*=/.test(t.s)) add(t.a, `Entre la propietat i el valor van els dos punts «:», no «=».`, `Entre la propiedad y el valor van los dos puntos «:», no «=».`);
        else if (/^[a-z-]+\s+[^\s]/.test(p) || /^[a-z-]+$/.test(p)) add(t.a, `Falten els dos punts «:» després de «${p.split(/\s/)[0]}».`, `Faltan los dos puntos «:» después de «${p.split(/\s/)[0]}».`);
        return;
      }
      if (p.startsWith('--')) return;
      if (!WEB_PROPS_ALL.includes(p) && !p.startsWith('-webkit-')) { const s = webNear(p, WEB_PROPS_ALL, p.length > 6 ? 3 : 2) || (p === 'colour' ? 'color' : null);
        add(t.a, `No conec la propietat «${p}»${s ? `: potser volies dir «${s}»?` : '.'}`, `No conozco la propiedad «${p}»${s ? `: ¿quizá querías decir «${s}»?` : '.'}`); }
      const v = toks.slice(k + 1).find(x => x.t === 'val');
      const after = v && toks[toks.indexOf(v) + 1];
      if (v) {
        const val = v.s.trim().toLowerCase();
        if (WEB_COLOR_PROPS.has(p) && /^[a-zà-ú]+$/.test(val) && !WEB_NAMED[val] && !['transparent', 'inherit', 'initial', 'currentcolor', 'unset'].includes(val)) {
          const en = WEB_COLOR_CA[val] || webNear(val, Object.keys(WEB_NAMED), 2);
          add(v.a, `«${val}» no és un color que entengui el navegador${en ? `. Prova «${en}»` : ''}: els noms dels colors van en anglès.`, `«${val}» no es un color que entienda el navegador${en ? `. Prueba «${en}»` : ''}: los nombres de los colores van en inglés.`);
        }
        if (/\d\s+(px|em|rem|%)\b/.test(val)) add(v.a, 'El número i la unitat van junts, sense espai: «20px».', 'El número y la unidad van juntos, sin espacio: «20px».');
        else if (WEB_LEN_PROPS.has(p) && /(^|\s)[1-9]\d*(\.\d+)?(\s|$)/.test(val) && p !== 'line-height') add(v.a, `Al número de «${p}» li falta la unitat: per exemple «${val.match(/[1-9]\d*(\.\d+)?/)[0]}px».`, `Al número de «${p}» le falta la unidad: por ejemplo «${val.match(/[1-9]\d*(\.\d+)?/)[0]}px».`);
        if (after && after.t === 'ws' && after.s.includes('\n')) { const nx2 = toks[toks.indexOf(v) + 2]; if (nx2 && nx2.t === 'prop') add(v.b, `Falta el punt i coma «;» al final de la línia.`, `Falta el punto y coma «;» al final de la línea.`); }
        else if (!after || after.t === 'prop') { if (after) add(v.b, `Falta el punt i coma «;» al final de la línia.`, `Falta el punto y coma «;» al final de la línea.`); }
      }
    }
    if (t.t === 'sel' && depth === 0 && /[;:]\s*$/.test(t.s) && !t.s.includes('{')) add(t.a, 'Aquí sembla que falta la clau «{» que obre la regla.', 'Aquí parece que falta la llave «{» que abre la regla.');
  });
  if (depth > 0) add(opens[opens.length - 1], 'Falta tancar la regla amb la clau «}».', 'Falta cerrar la regla con la llave «}».');
  const seen = new Set(); return errs.sort((a, b) => a.line - b.line).filter(e => !seen.has(e.line) && seen.add(e.line));
}

/* ---------- Analitzador de CSS senzill + cascada ---------- */
function webParseCSS(css, origin = 'css') {
  const rules = [], toks = webTokCSS(css || ''), stack = [];
  let sel = null, media = null, order = 0, prop = null, cur = null;
  for (const t of toks) {
    if (t.t === 'at') { sel = t.s.trim(); continue; }
    if (t.t === 'sel') { sel = t.s.trim(); continue; }
    if (t.t === 'brace' && t.s === '{') {
      if (sel && sel[0] === '@') { stack.push({ k: 'at', media }); media = /^@media/i.test(sel) ? sel.replace(/^@media\s*/i, '') : media; sel = null; continue; }
      stack.push({ k: 'decl' }); cur = { sel: sel || '', decls: [], media, origin }; rules.push(cur); sel = null; continue;
    }
    if (t.t === 'brace' && t.s === '}') { const s = stack.pop(); if (s && s.k === 'at') media = s.media; cur = null; continue; }
    if (t.t === 'prop' && cur) { prop = t.s.trim().toLowerCase(); continue; }
    if (t.t === 'val' && cur && prop) { let v = t.s.trim(); const imp = /!\s*important\s*$/i.test(v); v = v.replace(/!\s*important\s*$/i, '').trim(); cur.decls.push({ p: prop, v, imp, o: order++ }); prop = null; }
  }
  return rules.filter(r => r.sel);
}
const webSplitSel = s => { const out = []; let d = 0, cur = ''; for (const c of s) { if (c === '(') d++; if (c === ')') d--; if (c === ',' && !d) { out.push(cur.trim()); cur = ''; } else cur += c; } if (cur.trim()) out.push(cur.trim()); return out; };
function webSpec(sel) {
  const s = sel.replace(/::?[a-z-]+\([^)]*\)/gi, m => /^:not|^:is/i.test(m) ? ' ' + m.replace(/^:\w+\(|\)$/g, '') : ':x');
  const a = (s.match(/#[\w-]+/g) || []).length, b = (s.match(/\.[\w-]+|\[[^\]]*\]|:(?!:)[\w-]+/g) || []).length, c = (s.replace(/#[\w-]+|\.[\w-]+|\[[^\]]*\]|:+[\w-]+/g, ' ').match(/(^|[\s>+~])[a-z][\w-]*/gi) || []).length + (s.match(/::[\w-]+/g) || []).length;
  return a * 10000 + b * 100 + c;
}
// @media (max-width: 600px) and … → s'aplica amb aquesta amplada de pantalla?
function webMediaOk(m, width) {
  if (!m) return true;
  return m.split(',').some(part => {
    const p = part.trim().toLowerCase(); if (/^not\b/.test(p)) return false; if (/^print\b/.test(p)) return false;
    const conds = [...p.matchAll(/\(\s*(min|max)-width\s*:\s*([\d.]+)\s*(px|em|rem)?\s*\)/g)];
    return conds.every(([, mm, v, u]) => { const px = +v * (u === 'em' || u === 'rem' ? 16 : 1); return mm === 'min' ? width >= px : width <= px; });
  });
}
const WEB_INHERIT = new Set('color font font-family font-size font-weight font-style font-variant line-height text-align letter-spacing word-spacing text-transform text-indent white-space visibility list-style list-style-type list-style-position cursor'.split(' '));
const WEB_SHORT = { 'background-color': ['background'], 'background-image': ['background'], 'border-color': ['border'], 'border-style': ['border'], 'border-width': ['border'], 'font-size': ['font'], 'font-family': ['font'],
  'font-weight': ['font'], 'font-style': ['font'], 'line-height': ['font'], 'flex-direction': ['flex-flow'], 'flex-wrap': ['flex-flow'], 'list-style-type': ['list-style'], 'text-decoration-line': ['text-decoration'],
  'grid-template-columns': ['grid-template', 'grid'], 'grid-template-rows': ['grid-template', 'grid'], 'transition-duration': ['transition'], 'transition-property': ['transition'], 'row-gap': ['gap'], 'column-gap': ['gap'] };
['top', 'right', 'bottom', 'left'].forEach(s => { WEB_SHORT['margin-' + s] = ['margin']; WEB_SHORT['padding-' + s] = ['padding']; WEB_SHORT['border-' + s] = ['border'];
  ['color', 'width', 'style'].forEach(k => WEB_SHORT[`border-${s}-${k}`] = [`border-${s}`, `border-${k}`, 'border']); });
['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(s => WEB_SHORT[`border-${s}-radius`] = ['border-radius']);
// propietats relacionades: la mateixa, les abreujades que la contenen i les llargues que conté
function webRelated(p) { const r = new Set([p, ...(WEB_SHORT[p] || [])]); for (const [k, v] of Object.entries(WEB_SHORT)) if (v.includes(p)) r.add(k); return r; }
// declaració guanyadora d'una propietat per a un element (o null). o = {width, state}
function webStyleOf(el, prop, rules, o = {}) {
  const width = o.width || 1200, state = o.state, rel = webRelated(prop);
  let best = null, bk = null;
  const better = (k) => { if (!bk) return true; for (let i = 0; i < k.length; i++) { if (k[i] !== bk[i]) return k[i] > bk[i]; } return true; };
  const consider = (d, spec, ord, st) => { const k = [d.imp ? 1 : 0, spec, ord]; if (better(k)) { bk = k; best = { ...d, st }; } };
  rules.forEach((r, ri) => {
    if (!webMediaOk(r.media, width)) return;
    let st = false;
    const hit = webSplitSel(r.sel).filter(s => {
      let ss = s;
      if (/:(hover|focus|active|focus-visible|focus-within)\b/.test(ss)) { if (!state || !ss.includes(':' + state)) return false; ss = ss.replace(/:(hover|focus|active|focus-visible|focus-within)\b/g, ''); st = true; }
      if (/::?(before|after|first-letter|first-line|placeholder|marker|selection)\b/.test(ss)) return false;
      if (!ss.trim()) ss = '*';
      try { return el.matches(ss); } catch (e) { return false; }
    });
    if (!hit.length) return;
    const spec = Math.max(...hit.map(webSpec));
    r.decls.forEach((d, di) => { if (rel.has(d.p)) consider(d, spec, ri * 1000 + di, st); });
  });
  const inl = el.getAttribute && el.getAttribute('style');
  if (inl) webParseCSS(`x{${inl}}`).forEach(r => r.decls.forEach((d, di) => { if (rel.has(d.p)) consider(d, 1e6, di, false); }));
  if (!best && WEB_INHERIT.has(prop) && !o.noInherit && el.parentElement) return webStyleOf(el.parentElement, prop, rules, o);
  return best ? { ...best, rel: best.p !== prop } : null;
}

/* ---------- Colors i mides ---------- */
function webColor(v) {
  if (!v) return null; v = String(v).trim().toLowerCase();
  if (WEB_NAMED[v]) return WEB_NAMED[v];
  let m = /^#([0-9a-f]{3,8})$/.exec(v);
  if (m) { let h = m[1]; if (h.length === 3 || h.length === 4) h = h.slice(0, 3).split('').map(c => c + c).join(''); return h.length >= 6 ? '#' + h.slice(0, 6) : null; }
  m = /^rgba?\(\s*([\d.]+%?)[\s,]+([\d.]+%?)[\s,]+([\d.]+%?)/.exec(v);
  if (m) return '#' + [m[1], m[2], m[3]].map(x => Math.round(x.endsWith('%') ? parseFloat(x) * 2.55 : +x)).map(x => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0')).join('');
  m = /^hsla?\(\s*([\d.]+)(?:deg)?[\s,]+([\d.]+)%[\s,]+([\d.]+)%/.exec(v);
  if (m) { const h = +m[1] / 360, s = +m[2] / 100, l = +m[3] / 100, f = n => { const k = (n + h * 12) % 12, a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
    return '#' + [f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join(''); }
  return null;
}
const webPx = v => { const m = /^(-?[\d.]+)(px|em|rem|%)?$/.exec(String(v).trim()); if (!m) return NaN; return +m[1] * (m[2] === 'em' || m[2] === 'rem' ? 16 : 1); };
const webValNorm = v => String(v).trim().toLowerCase().replace(/\s*,\s*/g, ',').replace(/\s+/g, ' ').replace(/["']/g, '');
// un valor (o un dels trossos d'una abreujada) coincideix?
function webValMatch(decl, want, prop) {
  const v = webValNorm(decl.v), w = webValNorm(want);
  if (v === w) return true;
  const cw = webColor(w); if (cw) return v.split(' ').some(x => webColor(x) === cw) || webColor(v) === cw;
  const parts = v.split(/[\s,]+/);
  if (parts.includes(w)) return true;
  if (decl.p !== prop || decl.rel) return v.includes(w);
  return false;
}

/* ---------- Comprovador d'objectius ---------- */
// files = {html, css}; retorna {res:[{ok, t, h}], lint:[...], ctx}
function webCtx(files) {
  const html = files.html || '', css = files.css || '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const linked = [...doc.querySelectorAll('link')].some(l => /stylesheet/i.test(l.getAttribute('rel') || '') && /(^|\/)estil\.css$/i.test((l.getAttribute('href') || '').trim()));
  let rules = [];
  [...doc.querySelectorAll('style')].forEach(s => { rules = rules.concat(webParseCSS(s.textContent, 'style')); });
  const cssRules = webParseCSS(css, 'css');
  if (linked) rules = cssRules.concat(rules);
  return { doc, html, css, rules, cssRules, linked, hasCssFile: files.css !== undefined && files.css !== null };
}
function webGoal(g, x) {
  const { doc, rules } = x;
  const els = s => { try { return [...doc.querySelectorAll(s)]; } catch (e) { return []; } };
  if (g.fn) { try { return !!g.fn(x); } catch (e) { return false; } }
  if (g.link) return x.linked;
  if (g.clean) return !webLintHTML(x.html).length && (!x.css || !webLintCSS(x.css).length);
  if (g.media && !g.css) return rules.some(r => r.media && (g.media === true || webMediaOk(r.media, g.media === 'mobile' ? 375 : g.media === 'desktop' ? 1200 : +g.media)) && r.decls.length);
  if (g.rule && !g.css) return rules.some(r => (g.rule instanceof RegExp ? g.rule.test(r.sel) : r.sel.includes(g.rule)) && r.decls.length && (!g.prop || r.decls.some(d => webRelated(g.prop).has(d.p))));
  if (g.before) { const [a, b] = g.before.map(s => els(s)[0]); if (!a || !b) return false; const all = [...doc.querySelectorAll('*')]; return all.indexOf(a) < all.indexOf(b); }
  if (g.sel) {
    const list = els(g.sel);
    const nm = s => s === '$name' ? (typeof P !== 'undefined' && P && P.name) || '' : s;
    const okEl = e => {
      const tx = webNorm(e.textContent);
      if (g.text !== undefined && !(g.text instanceof RegExp ? g.text.test(e.textContent) : tx.includes(webNorm(nm(g.text))))) return false;
      if (g.textMin !== undefined && tx.replace(/\s/g, '').length < g.textMin) return false;
      if (g.notext !== undefined && tx === webNorm(g.notext)) return false;
      if (g.attr && !(e.getAttribute(g.attr) || '').trim()) return false;
      if (g.attrv) for (const [k, v] of Object.entries(g.attrv)) { const a = (e.getAttribute(k) || '').trim(); if (!(v instanceof RegExp ? v.test(a) : a === v)) return false; }
      return true;
    };
    const good = list.filter(okEl).length, need = g.text !== undefined || g.textMin !== undefined || g.notext !== undefined || g.attr || g.attrv;
    const cnt = need ? (g.all ? (good === list.length ? good : 0) : good) : list.length;
    if (g.n !== undefined) return cnt === g.n && (!need || !g.all || good === list.length);
    if (g.min !== undefined || g.max !== undefined) return cnt >= (g.min ?? 1) && cnt <= (g.max ?? 1e9);
    return cnt >= 1;
  }
  if (g.css) {
    const list = els(g.css); if (!list.length) return false;
    const width = g.media === 'mobile' ? 375 : g.media === 'tablet' ? 768 : 1200;
    const okEl = e => {
      const d = webStyleOf(e, g.prop, rules, { width, state: g.state, noInherit: g.own });
      if (g.state && d && !d.st) return false;
      if (!d) return false;
      if (g.val !== undefined) return [].concat(g.val).some(w => webValMatch(d, w, g.prop));
      if (g.oneOf) return g.oneOf.some(w => webValMatch(d, w, g.prop));
      if (g.not !== undefined) return !webValMatch(d, g.not, g.prop);
      if (g.color) return d.v.split(/\s+(?![^(]*\))/).some(t => webColor(t));
      if (g.min !== undefined || g.max !== undefined) { const n = Math.max(...d.v.split(/\s+/).map(webPx).filter(n => !isNaN(n))); return n >= (g.min ?? -1e9) && n <= (g.max ?? 1e9); }
      return !!d.v && !['initial', 'unset'].includes(d.v.toLowerCase());
    };
    return g.all ? list.every(okEl) : list.some(okEl);
  }
  return false;
}
// pistes automàtiques quan falla un objectiu de CSS
function webWhy(g, x) {
  if (g.css && x.hasCssFile && !x.linked && x.cssRules.length) return webT("El fitxer estil.css no s'aplica: falta l'etiqueta «link» que l'enllaça a l'index.html.", 'El archivo estil.css no se aplica: falta la etiqueta «link» que lo enlaza en el index.html.');
  if (g.css) {
    const bare = x.rules.find(r => webSplitSel(r.sel).some(s => /^[a-z][\w-]*$/i.test(s) && !WEB_KNOWN.has(s.toLowerCase()) && (x.doc.querySelector('.' + s) || x.doc.querySelector('#' + s))));
    if (bare) { const s = webSplitSel(bare.sel).find(s => /^[a-z][\w-]*$/i.test(s) && !WEB_KNOWN.has(s.toLowerCase())); const dot = x.doc.querySelector('.' + s) ? '.' : '#';
      return webT(`Al CSS, davant de «${s}» hi ha d'anar «${dot}»: «${dot}${s}».`, `En el CSS, delante de «${s}» tiene que ir «${dot}»: «${dot}${s}».`); }
    let none = true; try { none = !x.doc.querySelector(g.css); } catch (e) { }
    if (none) return webT('Encara no hi ha cap element a qui aplicar aquest estil.', 'Todavía no hay ningún elemento al que aplicar este estilo.');
  }
  return '';
}
function webCheck(files, goals) {
  const x = webCtx(files);
  const res = (goals || []).map(g => { const ok = webGoal(g, x); return { ok, t: g.t, h: g.h, why: ok ? '' : webWhy(g, x) }; });
  const lint = webLintHTML(x.html).map(e => ({ ...e, f: 'html' })).concat(x.hasCssFile ? webLintCSS(x.css).map(e => ({ ...e, f: 'css' })) : []);
  return { res, lint, ok: res.every(r => r.ok), x };
}

/* ---------- Document de la vista prèvia (sense xarxa, sense scripts) ---------- */
const WEB_IMGC = {};      // nom → data: URI
let WEB_IMGP = null;
function webImgLoad() {
  if (WEB_IMGP) return WEB_IMGP;
  if (typeof fetch !== 'function') return (WEB_IMGP = Promise.resolve());
  return (WEB_IMGP = Promise.all(WEB_IMGS.map(n => fetch(`img/tech/web/${n}.svg`).then(r => r.ok ? r.text() : '').then(t => { if (t) WEB_IMGC[n] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(t); }).catch(() => { }))));
}
const webImgURL = src => { const m = /(?:^|\/)([\w-]+)\.svg$/i.exec(String(src).trim()); if (!m) return null; const n = m[1].toLowerCase(); return WEB_IMGC[n] || (WEB_IMGS.includes(n) ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' : null); };
const WEB_XRAY = `*{outline:2px dashed rgba(229,72,154,.55)!important;outline-offset:-1px}` + ['h1', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'a', 'div', 'span', 'header', 'nav', 'main', 'section', 'article', 'footer', 'figure', 'table', 'button', 'strong', 'em', 'b', 'i'].map(t => `${t}::before{content:"<${t}>";font:700 10px/1.4 ui-monospace,Menlo,monospace;color:#fff;background:#E5489A;border-radius:4px;padding:0 4px;margin-right:4px;vertical-align:middle;display:inline-block;text-transform:none;letter-spacing:0;text-shadow:none}`).join('') + 'img{outline:3px solid #14A3B8!important}';
function webDoc(files, o = {}) {
  let html = files.html || '';
  const css = files.css || '';
  // l'estil.css enllaçat es posa dins el document
  html = html.replace(/<link\b[^>]*>/gi, tag => /stylesheet/i.test(tag) && /href\s*=\s*["']?(?:\.\/)?estil\.css["']?/i.test(tag) ? `<style>\n${css.replace(/<\/style/gi, '<\\/style')}\n</style>` : /stylesheet/i.test(tag) ? '' : tag);
  // imatges pròpies → data: URI (les altres no es carreguen)
  html = html.replace(/(<img\b[^>]*?\bsrc\s*=\s*)(["'])([^"']*)\2/gi, (m, a, q, src) => { const u = webImgURL(src); return u ? `${a}${q}${u}${q}` : m; });
  html = html.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi, (m, q, src) => { const u = webImgURL(src); return u ? `url("${u}")` : m; });
  // els enllaços no surten de la vista prèvia (es veu on anirien passant-hi el ratolí)
  html = html.replace(/(<a\b[^>]*?)\bhref\s*=\s*(["'])([^"']*)\2/gi, (m, a, q, h) => h.startsWith('#') ? m : `${a}href="#" title="→ ${webE(h)}"`);
  html = html.replace(/<(iframe|object|embed|script|base)\b[^>]*>(<\/\1>)?/gi, '');
  const head = `<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; font-src data:">`;
  const extra = (o.xray ? `<style>${WEB_XRAY}</style>` : '') + (o.base ? `<style>${o.base}</style>` : '');
  if (/<!doctype[^>]*>/i.test(html)) html = html.replace(/<!doctype[^>]*>/i, d => d + head);
  else html = '<!DOCTYPE html>' + head + html;
  return html + extra;
}
// una sola pàgina per descarregar (CSS dins i imatges incrustades)
const webExport = files => webDoc(files).replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/, '').replace(/title="→ ([^"]*)" href="#"|href="#" title="→ ([^"]*)"/g, (m, a, b) => `href="${a || b}"`);

/* ---------- Contingut: `codi` → <code>, i targetes de teoria amb codi ---------- */
const WEB_CODEKEYS = new Set(['html', 'css', 'code', 'sol', 'wrong', 'fix', 'goals', 'snip', 'id', 'k', 'ph', 'mode', 'lang', 'url', 'parts', 'box', 'goal', 'device', 'tab', 'proj', 'scene', 'who', 'mood', 'anim', 'w', 'ico']);
let WEB_DYN = 0;
function webMark(o, key) {
  if (typeof o === 'string') return o.includes('`') ? webCodeTxt(o) : o;
  if (Array.isArray(o)) return o.map(v => webMark(v, key));
  if (o && typeof o === 'object' && !(o instanceof RegExp) && typeof o !== 'function') {
    for (const k of Object.keys(o)) {
      if (k === 'goals' && Array.isArray(o.goals)) { o.goals.forEach(g => { if (g.t) g.t = webMark(g.t); if (g.h) g.h = webMark(g.h); }); continue; }
      if (k === 'parts' && Array.isArray(o.parts)) { o.parts.forEach(p => ['bad', 'ok'].forEach(f => { if (p[f]) p[f] = webMark(p[f]); })); continue; }
      if (WEB_CODEKEYS.has(k) && !(k === 'k' && typeof o[k] === 'string' && o[k].includes('|'))) continue;
      o[k] = webMark(o[k], k);
    }
    // targeta de teoria amb codi: es converteix en una animació (codi + resultat)
    if (o.code && (o.x !== undefined) && o.t && !o.k?.startsWith?.('web') && !o.ph) {
      const key = 'webdyn' + (++WEB_DYN), card = o, prev = o.anim;
      const fn = () => webCodeCard(card.code, card.css, prev, card.lang, card.render);
      if (typeof TANI !== 'undefined') TANI[key] = fn;
      if (typeof TANI_WEB !== 'undefined') TANI_WEB[key] = fn;
      o.anim = key;
    }
  }
  return o;
}

/* ---------- Animacions de concepte de Tech Web (claus que es poden fer servir a «learn» i a les diapositives) ---------- */
const WEB_ANIMS = ['wtrip', 'wdns', 'wpackets', 'wurl', 'wclient', 'wfiles', 'wsource', 'wtag', 'wnest', 'whead', 'wlist', 'wimg', 'wlink', 'wcite', 'wrule', 'wlinkcss', 'wcolor', 'wfont',
  'wbox', 'wblock', 'wclass', 'wflex', 'wgrid', 'wtable', 'wresp', 'whover', 'wfake', 'wpublish', 'wplan', 'walt', 'wdevice'];

/* ======================================================================================================
   INTERFÍCIE
   ====================================================================================================== */
const WEB_IC = {
  undo: '<svg viewBox="0 0 24 24"><path d="M9 14L4 9l5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9h10a6 6 0 0 1 0 12h-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  redo: '<svg viewBox="0 0 24 24"><path d="M15 14l5-5-5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 9H10a6 6 0 0 0 0 12h3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  html: '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  css: '<svg viewBox="0 0 24 24"><path d="M12 3c-5 0-9 3.6-9 8.2 0 4.4 4 6.6 6.2 5.3 1.4-.8.3-2.6 1.6-3.4 1.6-1 4.4 1 6.6-.6C19.6 11 21 9.7 21 8c0-3-4-5-9-5z" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="8" cy="9" r="1.5" fill="currentColor"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/><circle cx="16" cy="9" r="1.5" fill="currentColor"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/></svg>',
  fit: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M3 9h18" stroke="currentColor" stroke-width="2.2"/></svg>',
  desktop: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  tablet: '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="18.5" r="1.1" fill="currentColor"/></svg>',
  mobile: '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M11 5h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  xray: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="3 3"/><path d="M8 9l-2 3 2 3M16 9l2 3-2 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2.5" fill="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>',
  warn: '<svg viewBox="0 0 24 24"><path d="M12 3L2 20h20z" fill="currentColor"/><path d="M12 10v4M12 17v.5" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>',
  ok: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dl: '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 20h16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',
  full: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};
const webUser = () => { const n = (typeof P !== 'undefined' && P && P.name) ? webNorm(P.name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : ''; return n || 'la-meva-web'; };
const webTitleOf = html => { const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html || ''); return m ? m[1].replace(/<[^>]*>/g, '').trim() : ''; };
const webSrcdoc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/* ---------- Codi estàtic acolorit (preguntes, targetes) ---------- */
function webCodeBox(code, lang = 'html', o = {}) {
  const lines = webHL(code, lang).split('\n');
  return `<div class="wcode ${o.tap ? 'tap' : ''} ${o.cls || ''}">${o.label ? `<div class="wcode-h"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span><b>${o.label}</b></div>` : ''}<div class="wcode-b">${lines.map((l, i) => o.tap
    ? `<button class="wcl" data-i="${i}"><span class="wln">${i + 1}</span><span class="wlc">${l || ' '}</span></button>` : `<div class="wcl"><span class="wln">${i + 1}</span><span class="wlc">${l || ' '}</span></div>`).join('')}</div></div>`;
}
// un resultat en miniatura (iframe aïllat i escalat a l'amplada del contenidor)
function webMini(files, o = {}) {
  const w = o.w || 520, h = o.h || 300;
  return `<div class="wmini ${o.cls || ''}" data-w="${w}" data-h="${h}" style="aspect-ratio:${w}/${h}"><iframe sandbox="" tabindex="-1" title="${webT('Resultat', 'Resultado')}" srcdoc="${webSrcdoc(webDoc(files))}" style="width:${w}px;height:${h}px"></iframe></div>`;
}
let WEB_RO = null;
function webFit(root = document) {
  const fit = m => { const f = m.querySelector('iframe'); if (!f) return; const k = m.clientWidth / +m.dataset.w; f.style.transform = `scale(${k})`; };
  root.querySelectorAll('.wmini').forEach(m => { fit(m); if (typeof ResizeObserver !== 'undefined') { WEB_RO = WEB_RO || new ResizeObserver(es => es.forEach(e => fit(e.target))); WEB_RO.observe(m); } });
}
// targeta de teoria: codi + resultat real
function webCodeCard(code, css, anim, lang, render) {
  setTimeout(() => { webImgLoad().then(() => document.querySelectorAll('.wcard .wmini').forEach(m => { const f = m.querySelector('iframe'); if (f && !m.dataset.img) { m.dataset.img = 1; f.srcdoc = webDoc({ html: m.dataset.html ? decodeURIComponent(m.dataset.html) : '', css: m.dataset.css ? decodeURIComponent(m.dataset.css) : '' }); } })); webFit(); }, 0);
  const isCss = lang === 'css' || (!code && css), htmlCode = isCss && !code ? '' : code;
  const files = { html: css && !/estil\.css/.test(htmlCode) ? `<link rel="stylesheet" href="estil.css">\n${htmlCode}` : htmlCode, css: css || '' };
  const top = anim && typeof TANI !== 'undefined' && TANI[anim] ? `<div class="wcard-ani">${TANI[anim]()}</div>` : '';
  const showRender = render !== false && htmlCode;
  return `${top}<div class="wcard ${showRender ? '' : 'solo'}"><div class="wcard-code">${code ? webCodeBox(code, 'html', { label: 'index.html' }) : ''}${css ? webCodeBox(css, 'css', { label: 'estil.css' }) : ''}</div>
    ${showRender ? `<div class="wcard-out"><div class="wcard-lab">${WEB_IC.eye}<span>${webT('Resultat', 'Resultado')}</span></div><div class="wbrow"><div class="wbrow-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span></div>${webMini(files, { w: 420, h: 250 }).replace('<div class="wmini', `<div data-html="${encodeURIComponent(files.html)}" data-css="${encodeURIComponent(files.css)}" class="wmini`)}</div></div>` : ''}</div>`;
}
// per posar codi a l'art d'una pregunta: art: webArt('<p>Hola</p>')
const webArt = (code, lang = 'html') => () => webCodeBox(code, lang, { label: lang === 'css' ? 'estil.css' : 'index.html' });

/* ---------- Editor ---------- */
function webEditor(host, o) {
  const tabs = o.css !== undefined ? ['html', 'css'] : ['html'];
  const ed = { files: { html: o.html || '', ...(o.css !== undefined ? { css: o.css } : {}) }, init: { html: o.html || '', ...(o.css !== undefined ? { css: o.css } : {}) }, tab: o.tab && tabs.includes(o.tab) ? o.tab : 'html', hist: {}, bad: {}, ac: null };
  tabs.forEach(t => ed.hist[t] = { s: [{ v: ed.files[t], a: 0, b: 0, t: 0 }], i: 0 });
  const fname = t => t === 'css' ? 'estil.css' : 'index.html';
  host.innerHTML = `<div class="wedbox">
    <div class="wtabs" role="tablist">${tabs.map(t => `<button class="wtab t-${t}" data-t="${t}" role="tab">${WEB_IC[t]}<span>${fname(t)}</span></button>`).join('')}
      ${o.preview !== false ? `<button class="wtab t-pv" data-t="pv" role="tab">${WEB_IC.eye}<span>${webT('Resultat', 'Resultado')}</span></button>` : ''}
      <span class="wtabs-r"><button class="wib" data-a="undo" title="${webT('Desfés', 'Deshacer')}" aria-label="${webT('Desfés', 'Deshacer')}">${WEB_IC.undo}</button><button class="wib" data-a="redo" title="${webT('Refés', 'Rehacer')}" aria-label="${webT('Refés', 'Rehacer')}">${WEB_IC.redo}</button><button class="wib" data-a="reset" title="${webT('Torna a començar', 'Vuelve a empezar')}" aria-label="${webT('Torna a començar', 'Vuelve a empezar')}">${WEB_IC.reset}</button></span></div>
    <div class="wed"><div class="wed-sc"><div class="wed-in"><div class="wed-gut" aria-hidden="true"></div><div class="wed-code"><pre class="wed-pre" aria-hidden="true"></pre>
      <textarea class="wed-ta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" wrap="off" aria-label="${webT('Editor de codi', 'Editor de código')}"></textarea></div></div></div><div class="wed-ac" hidden></div></div>
    <div class="wlint" aria-live="polite"></div><div class="wsnip"></div></div>`;
  const $q = s => host.querySelector(s), ta = $q('.wed-ta'), pre = $q('.wed-pre'), gut = $q('.wed-gut'), sc = $q('.wed-sc'), acEl = $q('.wed-ac');
  ed.ta = ta;
  const lang = () => ed.tab === 'css' ? 'css' : 'html';
  const paint = () => {
    const v = ta.value, bad = ed.bad[ed.tab] || new Set();
    pre.innerHTML = webHL(v, lang(), bad) + '\n ';
    const n = v.split('\n').length; let g = ''; for (let i = 1; i <= n; i++) g += bad.has(i) ? `<b>${i}</b>` : `<span>${i}</span>`; gut.innerHTML = g;
  };
  const snipBar = () => {
    const base = lang() === 'css' ? ['{ }', ':', ';', '#', '.', 'px', '%', '"'] : ['<', '>', '/', '"', '=', '</>'];
    const extra = (o.snip || []).filter(s => lang() === 'css' ? !/^</.test(s) : /^</.test(s) || !/[{:;]/.test(s));
    $q('.wsnip').innerHTML = [...extra.map(s => `<button class="wsn x" data-s="${webE(s)}">${webE(s.replace('|', ''))}</button>`), ...base.map(s => `<button class="wsn" data-s="${webE(s)}">${webE(s)}</button>`)].join('');
  };
  const setTab = t => {
    if (t === 'pv') { host.closest('.wstep')?.classList.add('pvon'); host.querySelectorAll('.wtab').forEach(b => b.classList.toggle('on', b.dataset.t === 'pv')); o.onTab && o.onTab('pv'); return; }
    host.closest('.wstep')?.classList.remove('pvon');
    if (ed.ready) ed.files[ed.tab] = ta.value; ed.ready = true; ed.tab = t; ta.value = ed.files[t];
    host.querySelector('.wed').dataset.lang = lang();
    host.querySelectorAll('.wtab').forEach(b => b.classList.toggle('on', b.dataset.t === t)); acHide(); paint(); snipBar(); sc.scrollTop = 0; o.onTab && o.onTab(t);
  };
  ed.setTab = setTab;
  const changed = (kind) => {
    const h = ed.hist[ed.tab], v = ta.value, now = Date.now(), top = h.s[h.i];
    if (top.v !== v) {
      if (kind === 'type' && top.k === 'type' && now - top.t < 900) { top.v = v; top.a = ta.selectionStart; top.t = now; }
      else { h.s.length = h.i + 1; h.s.push({ v, a: ta.selectionStart, b: ta.selectionEnd, t: now, k: kind }); if (h.s.length > 200) h.s.shift(); h.i = h.s.length - 1; }
    }
    ed.files[ed.tab] = v; paint(); caretIn(); o.onChange && o.onChange(ed.get());
  };
  const ins = (text, a = ta.selectionStart, b = ta.selectionEnd, caretAt) => { ta.setRangeText(text, a, b, 'end'); if (caretAt !== undefined) ta.selectionStart = ta.selectionEnd = a + caretAt; };
  const lineStart = p => ta.value.lastIndexOf('\n', p - 1) + 1;
  const openTags = (upto) => { const st = []; for (const t of webTokHTML(ta.value.slice(0, upto))) { if (t.t !== 'el' || !t.name || WEB_VOID.has(t.name) || t.selfc || !t.ended) continue; if (!t.close) st.push(t.name); else { const k = st.lastIndexOf(t.name); if (k >= 0) st.length = k; } } return st; };
  // mantenir el cursor visible dins el requadre
  const caretIn = () => {
    const p = ta.selectionStart, before = ta.value.slice(0, p), line = before.split('\n').length - 1, col = p - lineStart(p);
    const lh = parseFloat(getComputedStyle(pre).lineHeight) || 22, cw = ed.cw || (ed.cw = measure()), top = 10 + line * lh, left = gut.offsetWidth + 12 + col * cw;
    if (top < sc.scrollTop) sc.scrollTop = top - 4; else if (top + lh > sc.scrollTop + sc.clientHeight) sc.scrollTop = top + lh - sc.clientHeight + 6;
    if (left < sc.scrollLeft + gut.offsetWidth + 4) sc.scrollLeft = Math.max(0, left - gut.offsetWidth - 20); else if (left > sc.scrollLeft + sc.clientWidth - 16) sc.scrollLeft = left - sc.clientWidth + 40;
    return { x: left - sc.scrollLeft, y: top - sc.scrollTop + lh, lh };
  };
  const measure = () => { const s = document.createElement('span'); s.textContent = 'x'.repeat(40); s.style.visibility = 'hidden'; pre.appendChild(s); const w = s.getBoundingClientRect().width / 40; s.remove(); return w || 8.4; };
  /* --- suggeriments --- */
  const acHide = () => { ed.ac = null; acEl.hidden = true; };
  const acShow = (items, from) => {
    if (!items.length) return acHide();
    ed.ac = { items: items.slice(0, 7), from, i: 0 };
    const pos = caretIn(), W = host.querySelector('.wed').clientWidth;
    acEl.innerHTML = ed.ac.items.map((it, i) => `<button class="wac ${i ? '' : 'on'}" data-i="${i}">${it.sw ? `<i class="wsw" style="background:${it.sw}"></i>` : it.img ? `<img src="img/tech/web/${it.img}.svg" alt="">` : ''}<code>${webE(it.label)}</code>${it.d ? `<small>${webE(webTv(it.d))}</small>` : ''}</button>`).join('');
    acEl.hidden = false;
    const w = Math.min(300, W - 16); acEl.style.width = w + 'px';
    acEl.style.left = Math.max(8, Math.min(pos.x, W - w - 8)) + 'px';
    const below = pos.y + 4, h = acEl.offsetHeight, H = host.querySelector('.wed').clientHeight;
    acEl.style.top = (below + h > H && pos.y - pos.lh - h - 4 > 0 ? pos.y - pos.lh - h - 4 : below) + 'px';
  };
  const acPick = i => {
    const it = ed.ac && ed.ac.items[i]; if (!it) return;
    const p = ta.selectionStart; let after = it.ins, caret = it.caret ?? after.length;
    // si darrere ja hi ha el tancament, no el dupliquem
    ins(after, ed.ac.from, p, caret);
    acHide(); changed('ac'); ta.focus();
  };
  const htmlCtx = () => {
    const v = ta.value, p = ta.selectionStart, before = v.slice(0, p), lt = before.lastIndexOf('<'), gt = before.lastIndexOf('>');
    if (lt <= gt) return null;
    const inside = before.slice(lt + 1); let m;
    if ((m = /^\/([a-zA-Z0-9]*)$/.exec(inside))) { const open = openTags(lt).reverse(); return { from: p - m[1].length, items: [...new Set(open)].filter(n => n.startsWith(m[1].toLowerCase())).map(n => ({ label: '</' + n + '>', ins: n + '>', d: webT('tanca', 'cierra') + ' ' + n + '|' })) }; }
    if ((m = /^([a-zA-Z][a-zA-Z0-9]*)?$/.exec(inside))) {
      const pre_ = (m[1] || '').toLowerCase(), nx = v.slice(p, p + 1);
      return { from: p - pre_.length, items: WEB_TAGS.filter(([t]) => t.startsWith(pre_)).map(([t, d]) => {
        if (t === 'img') return { label: '<img>', d, ins: 'img src="img/" alt="">', caret: 13 };
        if (t === 'a') return { label: '<a>', d, ins: 'a href=""></a>', caret: 8 };
        if (t === 'link') return { label: '<link>', d, ins: 'link rel="stylesheet" href="estil.css">' };
        if (t === 'meta') return { label: '<meta>', d, ins: 'meta name="viewport" content="width=device-width, initial-scale=1">' };
        if (WEB_VOID.has(t)) return { label: `<${t}>`, d, ins: t + '>' };
        return { label: `<${t}>`, d, ins: `${t}></${t}>`, caret: t.length + 1 };
      }).filter(x => !(nx === '>' && false)) };
    }
    const tagName = (/^([a-zA-Z][a-zA-Z0-9]*)/.exec(inside) || [])[1]?.toLowerCase();
    if ((m = /([a-zA-Z-]+)\s*=\s*"([^"]*)$/.exec(inside))) {
      const at = m[1].toLowerCase(), val = m[2];
      if (at === 'src') return { from: p - val.length, items: WEB_IMGS.filter(n => ('img/' + n + '.svg').includes(val.replace(/^img\//, '')) || ('img/' + n).startsWith(val)).map(n => ({ label: `img/${n}.svg`, ins: `img/${n}.svg`, img: n })) };
      if (at === 'class' && o.classes) { const cs = o.classes(); return { from: p - val.length, items: cs.filter(c => c.startsWith(val)).map(c => ({ label: c, ins: c })) }; }
      if (at === 'rel') return { from: p - val.length, items: [{ label: 'stylesheet', ins: 'stylesheet' }] };
      if (at === 'target') return { from: p - val.length, items: [{ label: '_blank', ins: '_blank', d: 'Obre una pestanya nova|Abre una pestaña nueva' }] };
      if (at === 'href' && tagName === 'link') return { from: p - val.length, items: [{ label: 'estil.css', ins: 'estil.css' }] };
      return null;
    }
    if ((m = /\s([a-zA-Z-]*)$/.exec(inside)) && (inside.split('"').length % 2 === 1) && tagName) {
      const list = [...(WEB_ATTRS[tagName] || []), ...WEB_ATTRS['*']];
      return { from: p - m[1].length, items: list.filter(a => a.startsWith(m[1].toLowerCase())).map(a => ({ label: a + '=""', ins: a + '=""', caret: a.length + 2 })) };
    }
    return null;
  };
  const cssCtx = () => {
    const v = ta.value, p = ta.selectionStart, before = v.slice(0, p).replace(/\/\*[\s\S]*?\*\//g, m => ' '.repeat(m.length));
    let depth = 0, lastOpen = -1; for (let i = 0; i < before.length; i++) { if (before[i] === '{') { depth++; lastOpen = i; } else if (before[i] === '}') depth--; }
    const atOpen = lastOpen >= 0 && /@media[^{]*$/.test(before.slice(0, lastOpen));
    const inDecl = depth > 0 && !(depth === 1 && atOpen) && before.lastIndexOf('}') < lastOpen || (depth >= 2);
    if (!inDecl) {
      const m = /([.#]?[a-zA-Z][\w-]*)$/.exec(before); if (!m || /[:@]/.test(before.slice(lineStart(p), p - m[1].length))) return null;
      const cands = o.selectors ? o.selectors() : [];
      return { from: p - m[1].length, items: cands.filter(s => s.startsWith(m[1]) && s !== m[1]).map(s => ({ label: s + ' { }', ins: `${s} {\n  \n}`, caret: s.length + 5 })) };
    }
    const seg = before.slice(Math.max(before.lastIndexOf(';'), before.lastIndexOf('{'), before.lastIndexOf('\n')) + 1);
    if (!seg.includes(':')) {
      const pf = seg.trim().toLowerCase(); if (!pf) return null;
      const main = WEB_PROPS.filter(([pp]) => pp.startsWith(pf)), more = WEB_PROPS_ALL.filter(pp => pp.startsWith(pf) && !main.some(([q]) => q === pp)).map(pp => [pp, '']);
      const nx = v.slice(p).match(/^[a-z-]*\s*:/) ? '' : null;
      return { from: p - seg.trimStart().length, items: [...main, ...more].map(([pp, d]) => ({ label: pp, d: d || null, ins: nx === '' ? pp : `${pp}: ;`, caret: nx === '' ? pp.length : pp.length + 2 })) };
    }
    const prop = seg.split(':')[0].trim().toLowerCase(), valPart = seg.split(':').slice(1).join(':'), m = /([#\w-]*)$/.exec(valPart), pf = m[1].toLowerCase();
    const semi = v[p] === ';' || /^[\w-]*;/.test(v.slice(p)) ? '' : ';';
    let items = [];
    if (WEB_COLOR_PROPS.has(prop) || prop === 'background' || prop === 'border') items = WEB_COLORS_KID.filter(c => c.startsWith(pf) && c !== pf).map(c => ({ label: c, sw: c, ins: c + (prop === 'border' ? '' : semi) }));
    if (!pf && !items.length && !(WEB_VALS[prop])) return null;
    items = items.concat((WEB_VALS[prop] || []).filter(x => x.startsWith(pf) && x !== pf).map(x => ({ label: x, ins: x + semi })));
    if (pf.length >= 2 && !WEB_COLOR_PROPS.has(prop)) items = items.concat(WEB_COLORS_KID.filter(c => c.startsWith(pf) && c !== pf && prop.includes('color')).map(c => ({ label: c, sw: c, ins: c + semi })));
    return { from: p - pf.length, items };
  };
  const acUpdate = () => { const c = lang() === 'css' ? cssCtx() : htmlCtx(); if (c && c.items.length) acShow(c.items, c.from); else acHide(); };
  /* --- escriure --- */
  ta.addEventListener('input', e => {
    const v = ta.value, p = ta.selectionStart, d = e.data, it = e.inputType || '';
    let kind = it === 'insertText' && d && d !== ' ' ? 'type' : 'other';
    if (it === 'insertText' && d) {
      if (d === '>' && lang() === 'html') {
        const lt = v.lastIndexOf('<', p - 1), tag = v.slice(lt, p), m = /^<([a-zA-Z][a-zA-Z0-9-]*)(\s[^<>]*)?>$/.exec(tag);
        if (m && !/\/>$/.test(tag) && !WEB_VOID.has(m[1].toLowerCase()) && (tag.split('"').length % 2 === 1) && !v.slice(p).startsWith('</' + m[1])) { ins(`</${m[1]}>`, p, p, 0); kind = 'other'; }
      }
      if (d === '{' && lang() === 'css' && !/^\s*\}/.test(v.slice(p, p + 3))) { ins('}', p, p, 0); kind = 'other'; }
      if (d === '"' && v[p] === '"' && v[p - 2] !== '=') { ta.setRangeText('', p, p + 1, 'start'); }
      else if (d === '"' && v[p - 2] === '=' && v[p] !== '"') { ins('"', p, p, 0); }
      if (d === '}' && v[p] === '}') ta.setRangeText('', p, p + 1, 'start');
      if (d === ';' && v[p] === ';') ta.setRangeText('', p, p + 1, 'start');
    }
    if (it === 'insertLineBreak' || (it === 'insertText' && d === null) || (it === 'insertParagraph')) {
      const v2 = ta.value, q = ta.selectionStart, prevStart = v2.lastIndexOf('\n', q - 2) + 1, prev = v2.slice(prevStart, q - 1), ind = /^\s*/.exec(prev)[0];
      let more = '';
      if (lang() === 'css' && /\{\s*$/.test(prev)) more = '  ';
      if (lang() === 'html') { const m = /<([a-zA-Z][a-zA-Z0-9]*)[^<>]*>\s*$/.exec(prev); if (m && !WEB_VOID.has(m[1].toLowerCase()) && !new RegExp(`</${m[1]}>`, 'i').test(prev.slice(prev.lastIndexOf('<' + m[1])))) more = '  '; }
      ins(ind + more, q, q);
      const after = ta.value.slice(ta.selectionStart);
      if (more && (lang() === 'html' ? /^<\//.test(after) : /^\}/.test(after))) { const c = ta.selectionStart; ta.setRangeText('\n' + ind, c, c, 'start'); }
    }
    changed(kind);
    if (it === 'insertText' && d) acUpdate(); else if (it.startsWith('delete')) { if (ed.ac) acUpdate(); } else acHide();
  });
  ta.addEventListener('keydown', e => {
    const k = e.key, mod = e.metaKey || e.ctrlKey;
    if (ed.ac) {
      if (k === 'ArrowDown' || k === 'ArrowUp') { e.preventDefault(); ed.ac.i = (ed.ac.i + (k === 'ArrowDown' ? 1 : ed.ac.items.length - 1)) % ed.ac.items.length; acEl.querySelectorAll('.wac').forEach((b, i) => b.classList.toggle('on', i === ed.ac.i)); return; }
      if (k === 'Enter' || k === 'Tab') { e.preventDefault(); acPick(ed.ac.i); return; }
      if (k === 'Escape') { e.preventDefault(); acHide(); return; }
    }
    if (mod && (k === 'z' || k === 'Z')) { e.preventDefault(); e.shiftKey ? ed.redo() : ed.undo(); return; }
    if (mod && (k === 'y' || k === 'Y')) { e.preventDefault(); ed.redo(); return; }
    if (k === 'Tab' && !e.altKey) {
      e.preventDefault(); const p = ta.selectionStart, ls = lineStart(p);
      if (e.shiftKey) { if (ta.value.slice(ls, ls + 2) === '  ') { ta.setRangeText('', ls, ls + 2, 'end'); ta.selectionStart = ta.selectionEnd = Math.max(ls, p - 2); changed('other'); } }
      else { ins('  '); changed('other'); }
    }
  });
  ['click', 'blur'].forEach(ev => ta.addEventListener(ev, () => setTimeout(acHide, ev === 'blur' ? 150 : 0)));
  sc.addEventListener('scroll', () => ed.ac && acHide());
  acEl.addEventListener('pointerdown', e => { e.preventDefault(); const b = e.target.closest('.wac'); if (b) acPick(+b.dataset.i); });
  host.querySelector('.wsnip').addEventListener('pointerdown', e => {
    const b = e.target.closest('.wsn'); if (!b) return; e.preventDefault();
    let s = b.dataset.s;
    if (s === '</>') { const op = openTags(ta.selectionStart); if (!op.length) return; s = `</${op[op.length - 1]}>`; }
    if (s === '{ }') { ins('{\n  \n}', undefined, undefined, 4); changed('other'); ta.focus(); return; }
    const blk = /^(<([a-z0-9]+)[^>]*>)\s*\n\s*(<\/\2>)$/i.exec(s);
    if (blk) { const ind = /^\s*/.exec(ta.value.slice(lineStart(ta.selectionStart), ta.selectionStart))[0]; s = `${blk[1]}\n${ind}  |\n${ind}${blk[3]}`; }
    const k = s.indexOf('|'); if (k >= 0) s = s.replace('|', '');
    const auto = /^<([a-z0-9]+)[^>]*><\/\1>$/i.exec(s);
    ins(s, undefined, undefined, k >= 0 ? k : auto ? s.indexOf('>') + 1 : s.length); changed('other'); ta.focus();
  });
  host.querySelector('.wtabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.t) return setTab(b.dataset.t);
    if (b.dataset.a === 'undo') ed.undo(); if (b.dataset.a === 'redo') ed.redo();
    if (b.dataset.a === 'reset' && confirm(webT('Vols tornar al codi del principi? Perdràs els canvis.', '¿Quieres volver al código del principio? Perderás los cambios.'))) ed.set(ed.init, true);
  });
  ed.undo = () => { const h = ed.hist[ed.tab]; if (h.i <= 0) return; h.i--; const s = h.s[h.i]; ta.value = s.v; ta.selectionStart = ta.selectionEnd = Math.min(s.a, s.v.length); ed.files[ed.tab] = s.v; paint(); o.onChange && o.onChange(ed.get()); };
  ed.redo = () => { const h = ed.hist[ed.tab]; if (h.i >= h.s.length - 1) return; h.i++; const s = h.s[h.i]; ta.value = s.v; ta.selectionStart = ta.selectionEnd = Math.min(s.a, s.v.length); ed.files[ed.tab] = s.v; paint(); o.onChange && o.onChange(ed.get()); };
  ed.get = () => { ed.files[ed.tab] = ta.value; return { ...ed.files }; };
  ed.set = (f, hist) => { tabs.forEach(t => { if (f[t] === undefined) return; ed.files[t] = f[t]; const h = ed.hist[t]; h.s.length = h.i + 1; h.s.push({ v: f[t], a: 0, b: 0, t: 0 }); h.i = h.s.length - 1; }); ta.value = ed.files[ed.tab]; paint(); o.onChange && o.onChange(ed.get()); };
  ed.mark = (byTab) => { ed.bad = byTab; paint(); };
  ed.goLine = (t, line) => { if (t !== ed.tab) setTab(t); const ls = ta.value.split('\n'); let p = 0; for (let i = 0; i < line - 1 && i < ls.length; i++) p += ls[i].length + 1; ta.focus(); ta.selectionStart = ta.selectionEnd = p + (ls[line - 1] || '').length; caretIn(); };
  setTab(ed.tab);
  return ed;
}

/* ---------- Vista prèvia dins un aparell ---------- */
const WEB_DEV = { fit: { w: 0, h: 0 }, desktop: { w: 1100, h: 700 }, tablet: { w: 768, h: 1024 }, mobile: { w: 390, h: 760 } };
function webPreview(host, o = {}) {
  const pv = { dev: o.device || 'fit', xray: false, files: { html: '' } };
  const devs = o.devices || ['fit', 'mobile', 'tablet', 'desktop'];
  const dname = { fit: webT('Ajustada', 'Ajustada'), mobile: webT('Mòbil', 'Móvil'), tablet: webT('Tauleta', 'Tablet'), desktop: webT('Ordinador', 'Ordenador') };
  host.innerHTML = `<div class="wpv"><div class="wpv-bar"><div class="wseg" role="group" aria-label="${webT('Mida de pantalla', 'Tamaño de pantalla')}">${devs.map(d => `<button data-d="${d}" title="${dname[d]}" aria-label="${dname[d]}">${WEB_IC[d]}</button>`).join('')}</div>
      <span class="wpv-size"></span>${o.xray === false ? '' : `<button class="wxr" aria-pressed="false">${WEB_IC.xray}<span>${webT('Raigs X', 'Rayos X')}</span></button>`}</div>
    <div class="wpv-stage"><div class="wdev"><div class="wdev-top"><div class="wdev-tab"><i class="wfav"></i><span class="wdev-title">index.html</span></div><div class="wdev-url">${WEB_IC.lock}<span>https://${webUser()}.web.numi/</span></div></div>
      <div class="wdev-notch"></div><div class="wdev-scr"><div class="wdev-sc"></div></div><div class="wdev-home"></div></div></div></div>`;
  const stage = host.querySelector('.wpv-stage'), dev = host.querySelector('.wdev'), scr = host.querySelector('.wdev-scr'), box = host.querySelector('.wdev-sc');
  let cur = null;
  const layout = () => {
    const d = WEB_DEV[pv.dev], W = stage.clientWidth - (pv.dev === 'fit' || pv.dev === 'desktop' ? 0 : 24), maxH = o.maxH ? o.maxH() : Math.max(260, Math.min(window.innerHeight * .62, 640));
    dev.className = 'wdev d-' + pv.dev;
    const chrome = pv.dev === 'mobile' ? 26 : pv.dev === 'tablet' ? 30 : 0, top = pv.dev === 'fit' || pv.dev === 'desktop' ? 38 : 0;
    let w = d.w, h = d.h, k = 1;
    if (pv.dev === 'fit') { w = Math.max(280, W); h = Math.max(220, maxH - top); }
    else { k = Math.min(1, (W - chrome) / w, (maxH - top - chrome) / h); }
    box.style.width = w + 'px'; box.style.height = h + 'px'; box.style.transform = `scale(${k})`;
    scr.style.width = w * k + 'px'; scr.style.height = h * k + 'px';
    host.querySelector('.wpv-size').textContent = pv.dev === 'fit' ? `${Math.round(w)} px` : `${w} × ${h}${k < 1 ? ` · ${Math.round(k * 100)} %` : ''}`;
    host.querySelectorAll('.wseg button').forEach(b => b.classList.toggle('on', b.dataset.d === pv.dev));
  };
  const render = () => {
    const f = document.createElement('iframe'); f.setAttribute('sandbox', ''); f.title = webT('Vista prèvia de la teva web', 'Vista previa de tu web'); f.className = 'wfr';
    f.srcdoc = webDoc(pv.files, { xray: pv.xray });
    const old = cur; cur = f; f.style.opacity = old ? '0' : '1';
    f.onload = () => { if (cur !== f) return f.remove(); f.style.opacity = '1'; setTimeout(() => { box.querySelectorAll('iframe').forEach(x => x !== f && x.remove()); }, 60); };
    box.appendChild(f);
    host.querySelector('.wdev-title').textContent = webTitleOf(pv.files.html) || 'index.html';
  };
  let t = null;
  pv.update = (files, now) => { pv.files = files; clearTimeout(t); if (now) render(); else t = setTimeout(render, 260); };
  pv.setDevice = d => { pv.dev = d; layout(); };
  host.querySelector('.wseg').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { pv.setDevice(b.dataset.d); SFX.tap && SFX.tap(); } });
  const xb = host.querySelector('.wxr'); if (xb) xb.onclick = () => { pv.xray = !pv.xray; xb.classList.toggle('on', pv.xray); xb.setAttribute('aria-pressed', pv.xray); render(); };
  if (typeof ResizeObserver !== 'undefined') { pv.ro = new ResizeObserver(() => layout()); pv.ro.observe(stage); }
  pv.layout = layout;
  layout();
  return pv;
}

/* ---------- Pas «web»: editar, veure i comprovar ---------- */
const webZoom = () => { const e = document.querySelector('.tsess>.tsbody'); const z = e ? parseFloat(getComputedStyle(e).zoom) : 1; return z > 0 ? z : 1; };
const webStepName = () => (typeof P !== 'undefined' && P && P.name) || '';
function webSolFiles(st) { const s = st.sol || {}; const f = { html: (s.html || '').replace(/\$name/g, webStepName() || 'Laia') }; if (s.css !== undefined) f.css = s.css; return f; }
const webDrafts = () => { const t = TS_(); t.wd = t.wd || {}; return t.wd; };
TSTEP.web = function (st) {
  const hasCss = st.css !== undefined;
  let start = { html: st.html || '', ...(hasCss ? { css: st.css } : {}) };
  const key = st.proj;
  if (key) { const d = webDrafts()[key]; if (d && d.html) start = { html: d.html, ...(hasCss || d.css !== undefined ? { css: d.css !== undefined ? d.css : st.css || '' } : {}) }; }
  start.html = start.html.replace(/\$name/g, webStepName());
  const goals = st.free ? [] : (st.goals || []);
  const who = st.who === 'bit' ? bitChar('idle') : charSVG('numi', 'idle');
  const tag = st.extra ? `<span class="wtagx">${webT('Repte extra · opcional', 'Reto extra · opcional')}</span>` : st.save ? `<span class="wtagx c">${webT('Projecte', 'Proyecto')}</span>` : st.free ? `<span class="wtagx f">${webT('Laboratori', 'Laboratorio')}</span>` : '';
  const b = $('#tsb'); b.classList.add('wide');
  b.innerHTML = `<div class="wstep ${hasCss ? 'hascss' : ''}">
    <div class="wq"><span class="wqc">${who}</span><div class="wqt">${tag}<p>${tval(st.q)}</p>${st.crit && !goals.length ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}
      ${goals.length ? `<div class="wgoals" id="wgoals"><span class="wgh"><span id="wgn">0/${goals.length}</span></span><ul>${goals.map((g, i) => `<li data-i="${i}"><span class="wgi">${WEB_IC.ok}</span><span class="wgt">${tval(g.t)}</span></li>`).join('')}</ul></div>` : ''}</div></div>
    <div class="wsay" id="wsay"></div>
    <div class="wgrid"><div class="wcol-ed" id="wedh"></div><div class="wcol-pv"><div id="wpvh"></div></div></div></div>`;
  { const wq = b.querySelector('.wq'); b.querySelector('.wstep').style.setProperty('--wqh', wq.offsetHeight + 'px'); }
  let files = start, tries = 0, done = false;
  const pv = webPreview($('#wpvh'), { device: st.device || 'fit', maxH: () => { const z = webZoom(); return window.innerWidth >= 900 ? Math.max(260, Math.min(window.innerHeight / z - 330 - (document.querySelector('.wq')?.offsetHeight || 90), 620)) : Math.max(300, window.innerHeight * .56); } });
  const classes = () => { const s = new Set(); (files.html.match(/class\s*=\s*"([^"]*)"/g) || []).forEach(m => m.replace(/class\s*=\s*"|"/g, '').split(/\s+/).forEach(c => c && s.add(c))); return [...s]; };
  const selectors = () => { const tags = new Set(); (files.html.match(/<([a-z][a-z0-9]*)/gi) || []).forEach(m => tags.add(m.slice(1).toLowerCase())); ['html', 'head', 'meta', 'link', 'title', 'style', '!doctype'].forEach(x => tags.delete(x));
    const ids = (files.html.match(/id\s*=\s*"([^"]*)"/g) || []).map(m => '#' + m.replace(/id\s*=\s*"|"/g, '')); return ['body', ...tags, ...classes().map(c => '.' + c), ...ids].filter((v, i, a) => a.indexOf(v) === i); };
  let lintT = null, saveT = null;
  const live = () => {
    const r = webCheck(files, goals);
    if (goals.length) { r.res.forEach((x, i) => { const li = document.querySelector(`#wgoals li[data-i="${i}"]`); if (li) { if (x.ok && !li.classList.contains('ok')) { li.classList.add('ok', 'pop'); setTimeout(() => li.classList.remove('pop'), 500); } else if (!x.ok) li.classList.remove('ok', 'pop'); } });
      const n = r.res.filter(x => x.ok).length; $('#wgn').textContent = `${n}/${goals.length}`; $('#wgoals').classList.toggle('all', n === goals.length); }
    const by = {}; r.lint.forEach(e => { (by[e.f] = by[e.f] || new Set()).add(e.line); }); ed.mark(by);
    const e0 = r.lint.find(e => e.f === ed.tab) || r.lint[0];
    const le = document.querySelector('#wedh .wlint');
    if (le) le.innerHTML = e0 ? `<button class="wlintb" data-f="${e0.f}" data-l="${e0.line}">${WEB_IC.warn}<span><b>${e0.f === 'css' ? 'estil.css' : 'index.html'} · ${webT('línia', 'línea')} ${e0.line}.</b> ${tx(e0.msg)}</span></button>` : '';
    if (le && e0) le.querySelector('button').onclick = () => ed.goLine(e0.f, e0.line);
    return r;
  };
  const ed = webEditor($('#wedh'), { html: start.html, css: start.css, tab: st.tab, snip: st.snip, classes, selectors,
    onChange: f => { files = f; pv.update(f); clearTimeout(lintT); lintT = setTimeout(live, 380); if (!done && st.free) tFoot(webT('Continua', 'Continúa'), tNext); if (done && !st.free) { /* segueix podent millorar */ }
      if (key) { clearTimeout(saveT); saveT = setTimeout(() => { webDrafts()[key] = { ...f }; save(); }, 1200); } },
    onTab: t => { if (t === 'pv') setTimeout(() => pv.layout(), 30); } });
  ed.init = { ...start };
  webImgLoad().then(() => pv.update(ed.get(), true));
  pv.update(ed.get(), true); setTimeout(live, 50);
  const say = (html, cls) => { const e = $('#wsay'); e.className = 'wsay ' + (cls || ''); e.innerHTML = html; };
  const succeed = () => {
    done = true; TSS.ready = true;
    if (!st.extra && !TSS.webOk?.[TSS.i]) { TSS.ok++; (TSS.webOk = TSS.webOk || {})[TSS.i] = 1; }
    SFX.ok && SFX.ok(); typeof confetti === 'function' && st.save && confetti(90);
    say(`<span class="wsayb">${bitChar(st.save ? 'win' : 'happy')}</span><div><b>${st.save ? webT('Quina pàgina! Està llesta.', '¡Qué página! Está lista.') : webT('Ho has aconseguit!', '¡Lo has conseguido!')}</b> ${st.after ? tval(st.after) : st.save ? webT('Desa-la al teu portafoli o continua millorant-la.', 'Guárdala en tu portafolio o sigue mejorándola.') : webT('Tots els objectius estan complerts.', 'Todos los objetivos están cumplidos.')}</div>`, 'ok');
    if (st.save) tFoot(webT('Desa-ho i continua', 'Guárdalo y continúa'), () => { webSaveProj(st, ed.get()); tNext(); }, true, `<button class="btn ghost" id="wmore">${webT('El milloro', 'Lo mejoro')}</button>`);
    else tContinue();
    const m = document.getElementById('wmore'); if (m) m.onclick = () => { say(webT('Continua editant. Quan acabis, torna a tocar «Comprova».', 'Sigue editando. Cuando termines, vuelve a tocar «Comprueba».'), ''); foot(); };
  };
  const check = () => {
    const r = live(); tries++;
    if (r.ok) return succeed();
    SFX.ko && SFX.ko();
    const fail = r.res.map((x, i) => ({ ...x, i })).filter(x => !x.ok);
    document.querySelectorAll('#wgoals li').forEach(li => li.classList.toggle('no', fail.some(f => f.i === +li.dataset.i)));
    const f0 = fail[0], why = f0.why || (f0.h ? tval(f0.h) : '');
    const lint = r.lint[0];
    say(`<span class="wsayb">${bitChar('think')}</span><div><b>${webT('Encara no.', 'Todavía no.')}</b> ${webT('Et falta:', 'Te falta:')} <em>${tval(f0.t)}</em>${why ? `<br>💡 ${why}` : ''}${lint && !why ? `<br>💡 ${webT('Mira l\'avís de sota l\'editor', 'Mira el aviso de debajo del editor')}: ${tx(lint.msg)}` : ''}</div>`, 'bad');
    foot();
  };
  const foot = () => {
    let extra = '';
    if (st.extra) extra += `<button class="btn ghost" id="wskip">${webT('Salta-te\'l', 'Sáltatelo')}</button>`;
    if (tries >= 2 && (st.hint || st.sol)) extra += `<button class="btn ghost" id="whint">${st.hint && !TSS.wHint ? webT('Una pista', 'Una pista') : webT('Solució', 'Solución')}</button>`;
    tFoot(webT('Comprova', 'Comprueba'), check, true, extra);
    const sk = document.getElementById('wskip'); if (sk) sk.onclick = () => tNext();
    const hb = document.getElementById('whint'); if (hb) hb.onclick = () => {
      if (st.hint && !TSS.wHint) { TSS.wHint = 1; say(`<span class="wsayb">${charSVG('numi', 'happy')}</span><div>💡 ${tval(st.hint)}</div>`, ''); foot(); return; }
      if (st.sol && confirm(webT('Vols veure una solució? Es posarà a l\'editor i podràs estudiar-la.', '¿Quieres ver una solución? Se pondrá en el editor y podrás estudiarla.'))) { ed.set(webSolFiles(st)); say(webT('Aquí tens una solució. Llegeix-la línia a línia i mira què fa cada etiqueta a la vista prèvia.', 'Aquí tienes una solución. Léela línea a línea y mira qué hace cada etiqueta en la vista previa.'), ''); setTimeout(live, 50); }
    };
  };
  TSS.wHint = 0;
  if (st.free) { tFoot(webT('Continua', 'Continúa'), tNext, true); return; }
  foot();
};

/* ---------- Pas «webquiz»: troba l'error · prediu el resultat · tria el codi ---------- */
TSTEP.webquiz = function (st) {
  const b = $('#tsb'); b.classList.add('wide');
  const head = `<div class="tqh wqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>`;
  let pick = null;
  const done = (ok, extraHTML = '') => {
    TSS.ready = true; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko();
    $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? webT('Molt bé!', '¡Muy bien!') : webT('No ben bé.', 'No exactamente.')}</b> ${st.ex ? tval(st.ex) : ''}${extraHTML}</div>`;
    tContinue();
  };
  if (st.mode === 'bug') {
    b.innerHTML = `<div class="tcol wqz">${head}<div class="wqrow"><div class="wqleft">${webCodeBox(st.code, st.lang || 'html', { tap: true, label: st.lang === 'css' ? 'estil.css' : 'index.html', cls: 'big' })}<p class="wqhint">${webT('Toca la línia que té l\'error.', 'Toca la línea que tiene el error.')}</p></div>${st.lang !== 'css' || st.html ? `<div class="wqnow"><div class="wcard-lab">${WEB_IC.eye}<span>${webT('Així es veu ara', 'Así se ve ahora')}</span></div><div class="wbrow"><div class="wbrow-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span></div>${webMini(st.lang === 'css' ? { html: '<link rel="stylesheet" href="estil.css">\n' + st.html, css: st.code } : { html: st.code }, { w: 440, h: 230 })}</div></div>` : ''}</div><div class="tfb" id="tfb"></div></div>`;
    webFit(b); webImgLoad().then(() => b.querySelectorAll('.wqnow iframe').forEach(f => { f.srcdoc = webDoc(st.lang === 'css' ? { html: '<link rel="stylesheet" href="estil.css">\n' + st.html, css: st.code } : { html: st.code }); }));
    const good = [].concat(st.a);
    b.querySelectorAll('.wcl').forEach(l => l.onclick = () => { if (TSS.ready) return; pick = +l.dataset.i; b.querySelectorAll('.wcl').forEach(x => x.classList.toggle('on', x === l)); SFX.tap && SFX.tap(); tFoot(webT('Comprova', 'Comprueba'), check); });
    const check = () => { if (pick === null) return; const ok = good.includes(pick);
      b.querySelectorAll('.wcl').forEach(x => { x.disabled = true; const i = +x.dataset.i; if (good.includes(i)) x.classList.add('ok'); else if (i === pick) x.classList.add('ko'); });
      done(ok, st.fix ? `<div class="wfix"><small>${webT('Així queda bé:', 'Así queda bien:')}</small>${webCodeBox(st.fix, st.lang || 'html')}</div>` : ''); };
    tFoot(webT('Comprova', 'Comprueba'), check, false);
    return;
  }
  const right = { html: st.html || '', ...(st.css !== undefined ? { css: st.css } : {}) };
  const withLink = f => f.css !== undefined && !/estil\.css/.test(f.html) ? { ...f, html: '<link rel="stylesheet" href="estil.css">\n' + f.html } : f;
  const opts = shuffle([{ f: right, ok: 1 }, ...(st.wrong || []).map(w => ({ f: { html: w.html ?? right.html, ...(right.css !== undefined || w.css !== undefined ? { css: w.css ?? right.css } : {}) } }))]);
  const codeOf = f => `${webCodeBox(f.html, 'html', { label: 'index.html' })}${f.css !== undefined ? webCodeBox(f.css, 'css', { label: 'estil.css' }) : ''}`;
  const L3 = 'ABC';
  const draw = () => {
    if (st.mode === 'render') b.innerHTML = `<div class="tcol wqz">${head}<div class="wqcode">${codeOf(right)}</div><div class="wqopts r">${opts.map((o, i) => `<button class="wqo" data-i="${i}"><span class="tol">${L3[i]}</span><div class="wbrow"><div class="wbrow-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span></div>${webMini(withLink(o.f), { w: 360, h: 230 })}</div></button>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
    else b.innerHTML = `<div class="tcol wqz">${head}<div class="wqshow"><div class="wbrow big"><div class="wbrow-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span></div>${webMini(withLink(right), { w: 460, h: 250 })}</div></div><div class="wqopts c">${opts.map((o, i) => `<button class="wqo" data-i="${i}"><span class="tol">${L3[i]}</span>${codeOf(o.f)}</button>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
    webFit(b);
    b.querySelectorAll('.wqo').forEach(x => x.onclick = () => { if (TSS.ready) return; pick = +x.dataset.i; b.querySelectorAll('.wqo').forEach(y => y.classList.toggle('on', y === x)); SFX.tap && SFX.tap(); tFoot(webT('Comprova', 'Comprueba'), check); });
  };
  const check = () => { if (pick === null) return; const ok = !!opts[pick].ok; b.querySelectorAll('.wqo').forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add('ok'); else if (i === pick) x.classList.add('ko'); }); done(ok); };
  draw();
  webImgLoad().then(() => { if (!TSS || TSS.st !== st) return; const keep = pick; draw(); if (keep !== null) { pick = keep; b.querySelectorAll('.wqo')[keep]?.classList.add('on'); } });
  tFoot(webT('Comprova', 'Comprueba'), check, false);
};

/* ---------- Pas «webbox»: el model de caixa, amb lliscadors ---------- */
TSTEP.webbox = function (st) {
  const v = { padding: 16, border: 6, margin: 20, ...(st.box || {}) }, goal = st.goal;
  const b = $('#tsb'); b.classList.add('wide');
  const lab = { margin: webT('Marge', 'Margen'), border: webT('Vora', 'Borde'), padding: webT('Farciment', 'Relleno') };
  const tip = { margin: webT("L'espai de fora: separa la caixa de les altres.", 'El espacio de fuera: separa la caja de las demás.'), border: webT('La línia que envolta la caixa.', 'La línea que rodea la caja.'), padding: webT("L'espai de dins: entre la vora i el contingut.", 'El espacio de dentro: entre el borde y el contenido.') };
  b.innerHTML = `<div class="wstep wbx"><div class="wq"><span class="wqc">${charSVG('numi', 'idle')}</span><div class="wqt"><span class="wtagx f">${webT('Laboratori de caixes', 'Laboratorio de cajas')}</span><p>${tval(st.q)}</p>
      ${goal ? `<ul class="tcrit">${Object.entries(goal).map(([k, n]) => `<li>${lab[k]}: ${n}px</li>`).join('')}</ul>` : ''}</div></div>
    <div class="wbx-grid"><div class="wbx-vis"><div class="wbx-m" id="wbm"><span class="wbx-l">margin</span><div class="wbx-b" id="wbb"><span class="wbx-l">border</span><div class="wbx-p" id="wbp"><span class="wbx-l">padding</span><div class="wbx-c">${webT('contingut', 'contenido')}<small>200 × 60</small></div></div></div></div></div>
      <div class="wbx-side"><div class="wbx-sl">${['padding', 'border', 'margin'].map(k => `<label class="wbx-r k-${k}"><span><b>${lab[k]}</b> <code>${k}</code><em id="wv-${k}">${v[k]}px</em></span><input type="range" min="0" max="40" step="1" value="${v[k]}" data-k="${k}"><small>${tip[k]}</small></label>`).join('')}</div>
      <div class="wbx-out"><div id="wbcode"></div><div class="wbx-sum" id="wbsum"></div></div></div></div>
    <div class="wbx-live"><div class="wcard-lab">${WEB_IC.eye}<span>${webT('Així es veu en una pàgina de debò', 'Así se ve en una página de verdad')}</span></div><div class="wbrow"><div class="wbrow-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span></div><div id="wbmini"></div></div></div>
    <div class="wsay" id="wsay"></div></div>`;
  let touched = false, okd = false;
  const draw = () => {
    const sc = 1;
    $('#wbm').style.padding = v.margin * sc + 'px'; $('#wbb').style.borderWidth = Math.max(v.border, 0) * sc + 'px'; $('#wbb').style.padding = 0; $('#wbp').style.padding = v.padding * sc + 'px';
    ['padding', 'border', 'margin'].forEach(k => $('#wv-' + k).textContent = v[k] + 'px');
    const css = `.caixa {\n  width: 200px;\n  padding: ${v.padding}px;\n  border: ${v.border}px solid #14A3B8;\n  margin: ${v.margin}px;\n}`;
    $('#wbcode').innerHTML = webCodeBox(css, 'css', { label: 'estil.css' });
    const tot = 200 + 2 * v.padding + 2 * v.border + 2 * v.margin;
    $('#wbsum').innerHTML = `<b>${webT('Espai total que ocupa', 'Espacio total que ocupa')}:</b> <span class="wsum">200 + 2×${v.padding} + 2×${v.border} + 2×${v.margin} = <b>${tot}px</b></span>`;
    const html = `<style>body{font-family:Arial,sans-serif;margin:0;padding:10px;background:#F3F6FF}.caixa{width:200px;padding:${v.padding}px;border:${v.border}px solid #14A3B8;margin:${v.margin}px;background:#fff;border-radius:6px}.altra{background:#FFE3EF;padding:8px;width:200px;border-radius:6px}</style><div class="altra">${webT('Una altra caixa', 'Otra caja')}</div><div class="caixa"><b>${webT('La meva caixa', 'Mi caja')}</b><br>${webT('Text de dins', 'Texto de dentro')}</div><div class="altra">${webT('Una altra caixa', 'Otra caja')}</div>`;
    $('#wbmini').innerHTML = webMini({ html }, { w: 420, h: 260 }); webFit($('#wbmini'));
    if (goal && !okd && Object.entries(goal).every(([k, n]) => v[k] === n)) { okd = true; TSS.ok++; SFX.ok && SFX.ok(); $('#wsay').className = 'wsay ok'; $('#wsay').innerHTML = `<span class="wsayb">${bitChar('happy')}</span><div><b>${webT('Exacte!', '¡Exacto!')}</b> ${webT(`La caixa ocupa ${tot}px d'amplada en total.`, `La caja ocupa ${tot}px de ancho en total.`)}</div>`; tContinue(); }
  };
  b.querySelectorAll('input[type=range]').forEach(r => r.oninput = () => { v[r.dataset.k] = +r.value; draw(); if (!touched && !goal) { touched = true; tContinue(); } });
  draw();
  tFoot(webT('Continua', 'Continúa'), tNext, !goal && false);
  if (!goal) setTimeout(() => { const n = document.getElementById('tnext'); if (n) n.disabled = false; }, 6000);
};

/* ---------- Pas «webfake»: detectiu de webs falses ---------- */
TSTEP.webfake = function (st) {
  const b = $('#tsb'); b.classList.add('wide');
  const clues = [];
  if (st.urlBad) clues.push('url'); if (st.lockBad) clues.push('lock');
  st.parts.forEach((p, i) => { if (p.bad) clues.push('p' + i); });
  const found = new Set();
  const part = (p, i) => {
    const t = p.t ? tval(p.t) : '', id = 'p' + i;
    const inner = p.k === 'logo' ? `<div class="wf-logo"><span class="wf-lm">${(t || '?').trim()[0]}</span>${t}</div>`
      : p.k === 'banner' ? `<div class="wf-banner">${t}</div>`
      : p.k === 'timer' ? `<div class="wf-timer">⏱ ${t}</div>`
      : p.k === 'price' ? `<div class="wf-price">${p.old ? `<s>${tval(p.old)}</s>` : ''}<b>${t}</b></div>`
      : p.k === 'form' ? `<div class="wf-form">${t ? `<p>${t}</p>` : ''}${(p.fields || []).map(f => `<label>${tval(f)}<span class="wf-in"></span></label>`).join('')}</div>`
      : p.k === 'button' ? `<div class="wf-btnw"><span class="wf-btn">${t}</span></div>`
      : p.k === 'img' ? `<div class="wf-img"><img src="img/tech/web/${p.src || 'estrella'}.svg" alt="">${t ? `<span>${t}</span>` : ''}</div>`
      : p.k === 'foot' ? `<div class="wf-foot">${t}</div>` : `<p class="wf-text">${t}</p>`;
    return `<button class="wf-part k-${p.k}" data-id="${id}">${inner}</button>`;
  };
  const host = st.url.replace(/^https?:\/\//, '').split('/')[0], path = st.url.replace(/^https?:\/\/[^/]+/, '');
  b.innerHTML = `<div class="wstep wfk"><div class="wq"><span class="wqc">${bitChar('think')}</span><div class="wqt"><span class="wtagx d">${webT('Detectiu web', 'Detective web')}</span><p>${tval(st.q)}</p></div></div>
    <div class="wfk-grid"><div class="wfk-win"><div class="wfk-top"><span class="wdot"></span><span class="wdot"></span><span class="wdot"></span>
      <div class="wfk-bar"><button class="wf-part wfk-lock ${st.lock ? 'on' : 'off'}" data-id="lock" aria-label="${webT('Cadenat', 'Candado')}">${st.lock ? WEB_IC.lock : '⚠'}</button><button class="wf-part wfk-url" data-id="url"><span class="wfk-proto">${st.url.startsWith('https') ? 'https://' : 'http://'}</span><b>${webE(host)}</b><span>${webE(path)}</span></button></div></div>
      <div class="wfk-page">${st.parts.map(part).join('')}</div></div>
      <div class="wfk-side"><div class="wfk-count"><b id="wfn">0</b> / ${clues.length || 0}<span>${webT('pistes trobades', 'pistas encontradas')}</span></div><div class="wfk-log" id="wflog"><p class="mut">${webT('Toca qualsevol part de la web que et faci sospitar: l\'adreça, el cadenat, els textos, els botons…', 'Toca cualquier parte de la web que te haga sospechar: la dirección, el candado, los textos, los botones…')}</p></div></div></div>
    <div class="wsay" id="wsay"></div></div>`;
  const log = (html, cls) => { const l = $('#wflog'); if (l.querySelector('.mut')) l.innerHTML = ''; l.insertAdjacentHTML('afterbegin', `<div class="wfk-e ${cls}">${html}</div>`); };
  const finish = () => {
    TSS.ready = true; TSS.ok++; SFX.ok && SFX.ok();
    $('#wsay').className = 'wsay ok';
    $('#wsay').innerHTML = `<span class="wsayb">${bitChar('win')}</span><div><b>${st.real ? webT('Ben observat!', '¡Bien observado!') : webT('Cas resolt!', '¡Caso resuelto!')}</b> ${st.real ? webT('Aquesta web té una adreça clara, cadenat, dades de contacte i no et demana res estrany.', 'Esta web tiene una dirección clara, candado, datos de contacto y no te pide nada extraño.') : webT('Si una web et fa sospitar: no hi escriguis res, tanca-la i explica-ho a un adult.', 'Si una web te hace sospechar: no escribas nada, ciérrala y explícaselo a un adulto.')}</div>`;
    tContinue();
  };
  b.querySelectorAll('.wf-part').forEach(el => el.onclick = e => {
    e.stopPropagation(); if (TSS.ready) return; const id = el.dataset.id;
    const why = id === 'url' ? st.urlBad : id === 'lock' ? st.lockBad : st.parts[+id.slice(1)].bad;
    const okt = id === 'url' ? st.urlOk : id === 'lock' ? st.lockOk : st.parts[+id.slice(1)]?.ok;
    if (why) { if (found.has(id)) return; found.add(id); el.classList.add('clue'); SFX.ok && SFX.ok(); log(`🔎 ${tval(why)}`, 'bad'); $('#wfn').textContent = found.size; if (found.size === clues.length) finish(); }
    else { el.classList.add('fine'); setTimeout(() => el.classList.remove('fine'), 900); SFX.tap && SFX.tap(); log(`✓ ${okt ? tval(okt) : webT('Això sembla normal.', 'Esto parece normal.')}`, 'ok'); }
  });
  if (st.real || !clues.length) tFoot(webT('No hi veig res sospitós', 'No veo nada sospechoso'), () => { if (TSS.ready) return tNext(); finish(); });
  else tFoot(webT('Continua', 'Continúa'), tNext, false, `<button class="btn ghost" id="wfgive">${webT('Pistes', 'Pistas')}</button>`);
  const g = document.getElementById('wfgive'); if (g) g.onclick = () => { clues.forEach(id => { if (!found.has(id)) b.querySelector(`.wf-part[data-id="${id}"]`)?.click(); }); };
};

/* ---------- Pas «webtrip»: el viatge d'una pàgina (interactiu i animat) ---------- */
const WEB_SITES = [
  { url: 'www.museu-robots.numi', ip: '203.0.113.7', t: 'Museu dels Robots|Museo de los Robots', img: 'robot', c: '#2F6BFF' },
  { url: 'www.receptes-avia.numi', ip: '198.51.100.24', t: "Les receptes de l'àvia|Las recetas de la abuela", img: 'pastis', c: '#F08A24' },
  { url: 'www.club-estels.numi', ip: '192.0.2.61', t: "Club d'astronomia|Club de astronomía", img: 'planeta', c: '#8B5CF6' }
];
TSTEP.webtrip = function (st) {
  const b = $('#tsb'); b.classList.add('wide');
  const sites = st.sites || WEB_SITES;
  b.innerHTML = `<div class="wstep wtr"><div class="wq"><span class="wqc">${charSVG('numi', 'idle')}</span><div class="wqt"><span class="wtagx f">${webT('Simulador', 'Simulador')}</span><p>${tval(st.q || "Tria una adreça i mira, pas a pas, què passa des que prems Intro fins que veus la pàgina.|Elige una dirección y mira, paso a paso, qué pasa desde que pulsas Intro hasta que ves la página.")}</p></div></div>
    <div class="wtr-pick">${sites.map((s, i) => `<button class="wtr-s" data-i="${i}" style="--c:${s.c}">${WEB_IC.lock}<span>${s.url}</span></button>`).join('')}</div>
    <div class="wtr-grid"><div class="wtr-scene" id="wtrs"></div><ol class="wtr-log" id="wtrl"><li class="mut">${webT('Tria una adreça de dalt.', 'Elige una dirección de arriba.')}</li></ol></div><div class="wsay" id="wsay"></div></div>`;
  let busy = false, runs = 0, timers = [];
  const scene = (s, stage) => {
    const pk = (cls, label, col) => `<g class="wtr-pk ${cls}"><rect x="-26" y="-14" width="52" height="28" rx="7" fill="${col}"/><path d="M-26 -12l26 14 26-14" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/><text y="30" text-anchor="middle" class="wtr-pt">${label}</text></g>`;
    return `<svg viewBox="0 0 640 330" class="wtr-svg s${stage}" aria-hidden="true">
      <defs><linearGradient id="wtrbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF6FF"/><stop offset="1" stop-color="#F6FBFF"/></linearGradient><filter id="wtrsh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#1B2B6B" flood-opacity=".18"/></filter></defs>
      <rect width="640" height="330" rx="22" fill="url(#wtrbg)"/>
      <path class="wtr-ln l1" d="M150 215 C 240 215, 250 90, 318 90"/><path class="wtr-ln l2" d="M150 225 C 300 240, 380 230, 488 220"/>
      <g class="wtr-cloud" transform="translate(320 220)"><ellipse rx="70" ry="30" fill="#fff" opacity=".9"/><ellipse cx="-40" cy="-12" rx="32" ry="24" fill="#fff" opacity=".9"/><ellipse cx="30" cy="-18" rx="38" ry="28" fill="#fff" opacity=".9"/><text y="8" text-anchor="middle" class="wtr-t s">Internet</text></g>
      <g transform="translate(40 140)" filter="url(#wtrsh)"><g class="wtr-node n-pc"><rect width="118" height="86" rx="10" fill="#1B2B6B"/><rect x="7" y="7" width="104" height="66" rx="5" fill="#fff"/>
        <rect x="7" y="7" width="104" height="13" rx="4" fill="#E3E9FA"/><rect x="18" y="10" width="80" height="7" rx="3.5" fill="#fff"/>
        <g class="wtr-page"><rect x="12" y="24" width="94" height="44" rx="4" fill="${s.c}" opacity=".14"/><image href="img/tech/web/${s.img}.svg" x="14" y="26" width="40" height="30"/><rect x="58" y="30" width="44" height="6" rx="3" fill="${s.c}"/><rect x="58" y="40" width="36" height="4" rx="2" fill="#B9C3E3"/><rect x="58" y="47" width="40" height="4" rx="2" fill="#B9C3E3"/></g>
        <path d="M-6 92h130l-8 8H2z" fill="#9AA7CF"/><text x="59" y="122" text-anchor="middle" class="wtr-t">${webT('El teu navegador', 'Tu navegador')}</text></g></g>
      <g transform="translate(270 22)" filter="url(#wtrsh)"><g class="wtr-node n-dns"><rect width="100" height="66" rx="12" fill="#fff" stroke="#8B5CF6" stroke-width="3"/><rect x="0" y="0" width="100" height="20" rx="10" fill="#8B5CF6"/><text x="50" y="15" text-anchor="middle" class="wtr-t w">DNS</text>
        <rect x="12" y="28" width="50" height="5" rx="2.5" fill="#D9CCFB"/><rect x="66" y="28" width="22" height="5" rx="2.5" fill="#8B5CF6"/><rect x="12" y="39" width="44" height="5" rx="2.5" fill="#D9CCFB"/><rect x="60" y="39" width="28" height="5" rx="2.5" fill="#8B5CF6"/><rect x="12" y="50" width="54" height="5" rx="2.5" fill="#D9CCFB"/><rect x="70" y="50" width="18" height="5" rx="2.5" fill="#8B5CF6"/>
        <text x="50" y="86" text-anchor="middle" class="wtr-t s">${webT('l\'agenda d\'adreces', 'la agenda de direcciones')}</text></g></g>
      <g transform="translate(490 140)" filter="url(#wtrsh)"><g class="wtr-node n-srv">${[0, 1, 2].map(k => `<rect y="${k * 30}" width="104" height="26" rx="6" fill="#24398C"/><circle cx="14" cy="${k * 30 + 13}" r="4" fill="${k === 1 ? '#7DF3FF' : '#3CC47C'}" class="wtr-led" style="--d:${k * .3}s"/><rect x="28" y="${k * 30 + 10}" width="60" height="6" rx="3" fill="#3D55B0"/>`).join('')}
        <text x="52" y="112" text-anchor="middle" class="wtr-t">${webT('El servidor', 'El servidor')}</text><text x="52" y="128" text-anchor="middle" class="wtr-t s ip">${s.ip}</text></g></g>
      <g class="wtr-pk-wrap">${pk('k1', '?', '#8B5CF6')}${pk('k2', s.ip, '#8B5CF6')}${pk('k3', 'GET /', '#14A3B8')}${pk('k4', 'index.html', '#E5489A')}${pk('k5', 'estil.css', '#2F6BFF')}${pk('k6', s.img + '.svg', '#F08A24')}</g>
      <g transform="translate(40 108)" class="wtr-bar"><rect width="250" height="26" rx="13" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><text x="14" y="18" class="wtr-t s"><tspan class="wtr-type">${s.url}</tspan></text></g>
    </svg>`;
  };
  const steps = s => [
    [webT(`Escrius <b>${s.url}</b> a la barra d'adreces i prems Intro.`, `Escribes <b>${s.url}</b> en la barra de direcciones y pulsas Intro.`), 1],
    [webT(`El navegador pregunta al <b>DNS</b>: «Quin número té ${s.url}?». Els ordinadors es troben per números, no per noms.`, `El navegador pregunta al <b>DNS</b>: «¿Qué número tiene ${s.url}?». Los ordenadores se encuentran por números, no por nombres.`), 2],
    [webT(`El DNS respon amb l'<b>adreça IP</b>: <code class="wc">${s.ip}</code>.`, `El DNS responde con la <b>dirección IP</b>: <code class="wc">${s.ip}</code>.`), 3],
    [webT(`El navegador envia una <b>petició</b> al servidor ${s.ip}: «Envia'm la pàgina, si us plau».`, `El navegador envía una <b>petición</b> al servidor ${s.ip}: «Envíame la página, por favor».`), 4],
    [webT('El servidor <b>respon</b> amb els fitxers: <code class="wc">index.html</code>, <code class="wc">estil.css</code> i les imatges. Viatgen trossejats en <b>paquets</b>.', 'El servidor <b>responde</b> con los archivos: <code class="wc">index.html</code>, <code class="wc">estil.css</code> y las imágenes. Viajan troceados en <b>paquetes</b>.'), 5],
    [webT(`El navegador ho ajunta tot i <b>dibuixa la pàgina</b>. Tot plegat ha passat en menys d'un segon!`, `El navegador lo junta todo y <b>dibuja la página</b>. ¡Todo ha pasado en menos de un segundo!`), 6]
  ];
  const run = i => {
    if (busy) return; busy = true; timers.forEach(clearTimeout); timers = [];
    const s = sites[i]; b.querySelectorAll('.wtr-s').forEach((x, k) => x.classList.toggle('on', k === i));
    $('#wtrs').innerHTML = scene(s, 0); $('#wtrl').innerHTML = '';
    steps(s).forEach(([txt, stg], k) => timers.push(setTimeout(() => {
      if (!document.getElementById('wtrs')) return;
      const svg = $('#wtrs svg'); svg.setAttribute('class', 'wtr-svg s' + stg);
      $('#wtrl').insertAdjacentHTML('beforeend', `<li class="in"><span class="wtr-n">${k + 1}</span><span>${txt}</span></li>`);
      SFX.tap && SFX.tap();
      if (k === 5) { busy = false; runs++; SFX.ok && SFX.ok(); tContinue(); $('#wsay').className = 'wsay ok'; $('#wsay').innerHTML = `<span class="wsayb">${bitChar('happy')}</span><div>${runs < 2 ? webT('Prova una altra adreça: el camí és el mateix, però el número del servidor canvia.', 'Prueba otra dirección: el camino es el mismo, pero el número del servidor cambia.') : webT('Ara ja saps què passa cada vegada que obres una web.', 'Ahora ya sabes qué pasa cada vez que abres una web.')}</div>`; }
    }, 300 + k * 2300)));
  };
  b.querySelectorAll('.wtr-s').forEach(x => x.onclick = () => run(+x.dataset.i));
  $('#wtrs').innerHTML = scene(sites[0], 0);
  tFoot(webT('Continua', 'Continúa'), tNext, false);
};

/* ---------- Pas «webdiploma» ---------- */
function webDiplomaSVG() {
  const name = webE(webStepName() || 'Laia'), d = typeof today === 'function' ? today().split('-').reverse().join('/') : '';
  return `<svg viewBox="0 0 800 560" xmlns="http://www.w3.org/2000/svg" class="wdip-svg"><defs><linearGradient id="wdg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14A3B8"/><stop offset=".5" stop-color="#8B5CF6"/><stop offset="1" stop-color="#E5489A"/></linearGradient>
    <pattern id="wdp" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="#14A3B8" opacity=".18"/></pattern></defs>
    <rect width="800" height="560" rx="26" fill="url(#wdg)"/><rect x="18" y="18" width="764" height="524" rx="18" fill="#FFFDF7"/><rect x="18" y="18" width="764" height="524" rx="18" fill="url(#wdp)"/>
    <rect x="38" y="38" width="724" height="484" rx="12" fill="none" stroke="#E7D9A8" stroke-width="2" stroke-dasharray="2 6"/>
    <g transform="translate(400 108)"><circle r="46" fill="#1B2B6B"/><path d="M-18 -10l-12 10 12 10M18 -10l12 10-12 10M6 -16l-12 32" stroke="#7DF3FF" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
    <text x="400" y="200" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="20" font-weight="800" letter-spacing="6" fill="#8B5CF6">${webT('DIPLOMA', 'DIPLOMA')}</text>
    <text x="400" y="238" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="17" fill="#56628A">${webT('Numi Tech certifica que', 'Numi Tech certifica que')}</text>
    <text x="400" y="300" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="50" font-weight="900" fill="#14204A">${name}</text>
    <path d="M220 320h360" stroke="url(#wdg)" stroke-width="4" stroke-linecap="round"/>
    <text x="400" y="360" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="18" fill="#14204A">${webT('ha completat el curs', 'ha completado el curso')} <tspan font-weight="900">Tech Web</tspan></text>
    <text x="400" y="388" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="15" fill="#56628A">${webT('Internet · HTML · CSS · Caixes · Flex i graelles · Disseny per al mòbil · La meva web', 'Internet · HTML · CSS · Cajas · Flex y rejillas · Diseño para el móvil · Mi web')}</text>
    <g transform="translate(640 440)"><circle r="46" fill="#F2B21B"/><circle r="38" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="4 4"/><path d="M0 -20l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" fill="#fff"/></g>
    <text x="150" y="470" text-anchor="middle" font-family="Lexend,Arial,sans-serif" font-size="15" fill="#56628A">${d}</text><path d="M80 448h140" stroke="#C9D6FB" stroke-width="2"/>
  </svg>`;
}
TSTEP.webdiploma = function (st) {
  const b = $('#tsb'); b.classList.add('wide');
  const fin = TS_().port.filter(p => p.kind === 'web').slice(-1)[0];
  b.innerHTML = `<div class="tcol wdip"><div class="wdip-card">${webDiplomaSVG()}</div>
    <div class="wdip-act"><button class="btn" id="wdipd">${WEB_IC.dl} ${webT('Descarrega el diploma', 'Descarga el diploma')}</button>${fin ? `<button class="btn ghost" id="wdips">${WEB_IC.dl} ${webT('Descarrega la meva web', 'Descarga mi web')}</button>` : ''}</div>
    <p class="wdip-p">${tval(st.t || "La teva web es pot descarregar en un sol fitxer <b>.html</b>. Per publicar-la a internet, el teu professor/a o la teva família la poden pujar a un servidor.|Tu web se puede descargar en un solo archivo <b>.html</b>. Para publicarla en internet, tu profesor/a o tu familia la pueden subir a un servidor.")}</p></div>`;
  $('#wdipd').onclick = () => webDownload(webDiplomaSVG(), 'diploma-tech-web.svg', 'image/svg+xml');
  const s = document.getElementById('wdips'); if (s) s.onclick = () => webDownload(webExport(fin), (webUser() || 'web') + '.html', 'text/html');
  typeof confetti === 'function' && confetti(160); SFX.win && SFX.win();
  tContinue();
};
function webDownload(text, name, type) { try { const u = URL.createObjectURL(new Blob([text], { type })); const a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(u); a.remove(); }, 500); } catch (e) { toast(webT('No s\'ha pogut descarregar.', 'No se ha podido descargar.')); } }

/* ---------- Portafoli: projectes web (kind:'web') ---------- */
function webSaveProj(st, files) {
  const t = TS_(), key = st.proj;
  const ent = { id: 'pj' + Date.now().toString(36), sid: TSS.id, t: st.name || TSS.s.t, kind: 'web', html: files.html, ...(files.css !== undefined ? { css: files.css } : {}), d: today(), ...(key ? { key } : {}) };
  const old = key ? t.port.findIndex(p => p.kind === 'web' && p.key === key) : -1;
  if (old >= 0) { ent.id = t.port[old].id; t.port[old] = ent; } else t.port.push(ent);
  if (t.port.length > 60) t.port.shift();
  if (key) webDrafts()[key] = { ...files };
  save(); toast(webT('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!'));
}
if (typeof techProjectes === 'function') {
  const webProj0 = techProjectes;
  techProjectes = function () {
    const t = TS_(), all = t.port, web = all.filter(p => p.kind === 'web');
    t.port = all.filter(p => p.kind !== 'web');
    try { webProj0(); } finally { t.port = all; }
    if (!web.length) return;
    const main = document.querySelector('.tmain'); if (!main) return;
    const empty = main.querySelector('.tempty2'); if (empty) empty.remove();
    main.insertAdjacentHTML('afterbegin', `<h2 class="wph">${TCI && TCI.web ? `<span>${TCI.web}</span>` : ''}${webT('Les meves webs', 'Mis webs')}</h2><div class="tports wports">${web.slice().reverse().map(p => `<button class="tport wport" onclick="webPortOpen('${p.id}')"><span class="wpimg">${webMini(p, { w: 520, h: 380 })}</span><b>${esc(tx(p.t))}</b><small>${typeof dayShort === 'function' ? dayShort(p.d) : p.d} · ${esc(webTitleOf(p.html) || 'index.html')}</small></button>`).join('')}</div>`);
    webImgLoad().then(() => main.querySelectorAll('.wport').forEach((btn, i) => { const p = web.slice().reverse()[i], f = btn.querySelector('iframe'); if (f) f.srcdoc = webDoc(p); }));
    webFit(main);
  };
}
if (typeof tPortOpen === 'function') {
  const webPort0 = tPortOpen;
  tPortOpen = function (id) { const p = TS_().port.find(x => x.id === id); if (p && p.kind === 'web') return webPortOpen(id); return webPort0(id); };
}
function webPortOpen(id, edit) {
  const p = TS_().port.find(x => x.id === id); if (!p) return;
  VIEW = 'tport';
  app.innerHTML = `<div class="tsess wportv"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${webT('Tanca', 'Cierra')}">✕</button><b class="tsph">${esc(tx(p.t))}</b><span></span></div>
    <div class="tsbody wide"><div class="wstep ${edit ? '' : 'view'}">${edit ? '<div class="wgrid"><div class="wcol-ed" id="wedh"></div><div class="wcol-pv"><div id="wpvh"></div></div></div>' : '<div id="wpvh" class="wpv-big"></div>'}</div></div>
    <div class="tsfoot">${edit ? `<button class="btn ghost" onclick="webPortOpen('${id}')">${webT('Cancel·la', 'Cancela')}</button><button class="btn big" id="wpsave">${webT('Desa els canvis', 'Guarda los cambios')}</button>`
      : `<button class="link" onclick="tPortDel('${id}')">${webT('Esborra', 'Borra')}</button><button class="btn ghost" onclick="webDownload(webExport(TS_().port.find(x=>x.id==='${id}')),'${webUser()}.html','text/html')">${WEB_IC.dl} ${webT('Descarrega', 'Descarga')}</button><button class="btn" onclick="webPortOpen('${id}',1)">${WEB_IC.edit} ${webT('Edita', 'Edita')}</button>`}</div></div>`;
  const pv = webPreview($('#wpvh'), { device: 'fit', maxH: () => window.innerHeight * (edit ? .55 : .74) });
  const files = { html: p.html, ...(p.css !== undefined ? { css: p.css } : {}) };
  pv.update(files, true); webImgLoad().then(() => pv.update(files, true));
  if (edit) {
    let cur = files;
    const ed = webEditor($('#wedh'), { html: p.html, css: p.css, onChange: f => { cur = f; pv.update(f); }, onTab: t => t === 'pv' && setTimeout(() => pv.layout(), 30) });
    void ed;
    $('#wpsave').onclick = () => { Object.assign(p, cur, { d: today() }); if (p.key) webDrafts()[p.key] = { ...cur }; save(); toast(webT('Desat!', '¡Guardado!')); webPortOpen(id); };
  }
}

/* ---------- Escenes de les històries (web-taller, web-ciutat, web-mobil) ---------- */
function webScene(kind, who, mood) {
  let bg = '';
  if (kind === 'web-taller') bg = `<defs><linearGradient id="wsk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9F1FF"/><stop offset="1" stop-color="#D6E4FF"/></linearGradient></defs><rect width="320" height="180" fill="url(#wsk1)"/>
    <rect x="18" y="16" width="70" height="52" rx="6" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><path d="M26 56l14-16 10 10 8-8 22 14z" fill="#9FD7E0"/><circle cx="72" cy="30" r="6" fill="#FFD54A"/>
    <rect x="0" y="132" width="320" height="48" fill="#C98A4B"/><rect x="0" y="132" width="320" height="7" fill="#A86A33"/>
    <g transform="translate(196 46)"><rect x="-4" y="76" width="18" height="12" fill="#5B6693"/><rect x="-26" y="86" width="62" height="6" rx="3" fill="#5B6693"/><rect x="-60" y="0" width="130" height="80" rx="9" fill="#1B2B6B"/><rect x="-54" y="6" width="118" height="68" rx="5" fill="#121A3D"/>
      ${[['#E5489A', 12, 30], ['#7DF3FF', 22, 44], ['#FFC531', 22, 36], ['#7DF3FF', 22, 50], ['#E5489A', 12, 26], ['#A9C1FF', 12, 40]].map(([c, x, w], i) => `<rect class="wsc-code" style="--d:${i * .35}s" x="${-48 + x}" y="${12 + i * 10}" width="${w}" height="5" rx="2.5" fill="${c}"/>`).join('')}
      <rect class="wsc-caret" x="${-48 + 12 + 40 + 3}" y="61" width="2" height="7" fill="#fff"/></g>
    <g transform="translate(286 112)"><rect x="-14" y="0" width="28" height="22" rx="4" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><path d="M14 6q8 0 8 6t-8 6" fill="none" stroke="#C9D6FB" stroke-width="2.5"/><path class="wsc-steam" d="M-4 -4q-3 -6 0 -10M4 -4q-3 -6 0 -10" stroke="#B9B9B9" stroke-width="2" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(266 118) scale(.7)"><rect x="-10" y="-2" width="44" height="16" rx="3" fill="#2F6BFF"/><rect x="-6" y="-12" width="40" height="12" rx="3" fill="#F08A24"/><rect x="-2" y="-21" width="34" height="10" rx="3" fill="#1FA463"/></g>`;
  else if (kind === 'web-ciutat') bg = `<defs><linearGradient id="wsk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2B6B"/><stop offset="1" stop-color="#3D55B0"/></linearGradient></defs><rect width="320" height="180" fill="url(#wsk2)"/>
    ${[[30, 20], [90, 36], [150, 14], [210, 30], [280, 18], [250, 50], [60, 54]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff" class="wsc-tw" style="--d:${i * .4}s"/>`).join('')}
    ${[[10, 90, 40, 90], [52, 70, 34, 110], [92, 100, 46, 80], [236, 80, 40, 100], [280, 60, 34, 120]].map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#24398C"/>${Array.from({ length: Math.floor(h / 16) }, (_, r) => Array.from({ length: Math.floor(w / 12) }, (_, c) => `<rect x="${x + 5 + c * 12}" y="${y + 6 + r * 16}" width="5" height="7" rx="1" fill="${(r + c + x) % 3 ? '#FFD54A' : '#3D55B0'}" opacity=".85"/>`).join('')).join('')}`).join('')}
    <g transform="translate(160 64)"><rect x="-40" y="0" width="80" height="116" rx="6" fill="#121A3D" stroke="#7DF3FF" stroke-width="2"/>${[0, 1, 2, 3, 4].map(k => `<rect x="-32" y="${10 + k * 20}" width="64" height="14" rx="3" fill="#24398C"/><circle cx="-24" cy="${17 + k * 20}" r="3" fill="#3CC47C" class="wtr-led" style="--d:${k * .25}s"/>`).join('')}<path d="M0 0v-20" stroke="#7DF3FF" stroke-width="3"/><circle cy="-24" r="5" fill="#7DF3FF" class="wsc-tw"/></g>
    <path class="wsc-wire" d="M30 180 Q90 140 120 150 T160 160" /><path class="wsc-wire w2" d="M300 180 Q240 140 210 150 T160 160"/>
    <rect y="170" width="320" height="10" fill="#121A3D"/>`;
  else bg = `<defs><linearGradient id="wsk3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE9F2"/><stop offset="1" stop-color="#E8EEFF"/></linearGradient></defs><rect width="320" height="180" fill="url(#wsk3)"/>
    <g transform="translate(232 14)"><rect width="72" height="152" rx="14" fill="#1B2B6B"/><rect x="5" y="12" width="62" height="128" rx="6" fill="#fff"/><rect x="26" y="5" width="20" height="4" rx="2" fill="#3D55B0"/>
      <rect x="10" y="18" width="52" height="30" rx="4" fill="#14A3B8" opacity=".25"/><rect x="10" y="54" width="40" height="6" rx="3" fill="#E5489A"/><rect x="10" y="66" width="52" height="4" rx="2" fill="#C9D6FB"/><rect x="10" y="74" width="46" height="4" rx="2" fill="#C9D6FB"/>
      <rect x="10" y="86" width="52" height="20" rx="4" fill="#F08A24" opacity=".3"/><rect x="10" y="112" width="52" height="20" rx="4" fill="#8B5CF6" opacity=".3"/></g>
    <g transform="translate(24 30)" opacity=".9"><rect width="120" height="80" rx="8" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><rect x="8" y="8" width="104" height="24" rx="4" fill="#14A3B8" opacity=".25"/>${[0, 1, 2].map(k => `<rect x="${8 + k * 36}" y="40" width="32" height="32" rx="4" fill="${['#E5489A', '#F08A24', '#8B5CF6'][k]}" opacity=".3"/>`).join('')}</g>
    <path d="M150 70 q30 -10 70 6" fill="none" stroke="#E5489A" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/><path d="M212 70l10 6-10 6" fill="none" stroke="#E5489A" stroke-width="3" stroke-linecap="round"/>`;
  const numi = who !== 'bit' ? `<svg x="${who === 'both' ? 34 : kind === 'web-mobil' ? 110 : 40}" y="62" width="104" height="104" viewBox="0 0 120 120">${charSVG('numi', mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  const bit = who === 'bit' || who === 'both' ? `<svg x="${who === 'both' ? 116 : 80}" y="${who === 'both' ? 66 : 54}" width="${who === 'both' ? 80 : 92}" height="${who === 'both' ? 98 : 112}" viewBox="-64 -78 128 156">${bitChar(mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  return `<div class="tscene k-${kind}"><svg viewBox="0 0 320 180" aria-hidden="true">${bg}<g class="tactors">${numi}${bit}</g></svg></div>`;
}
if (typeof tScene === 'function') {
  const webScene0 = tScene;
  tScene = function (kind, who, mood) { return /^web-/.test(kind) ? webScene(kind, who, mood) : webScene0(kind, who, mood); };
}

/* ---------- Dibuixos petits reutilitzables per a les animacions ---------- */
const wA = (t, cls = 'ta-pop') => `class="ta ${cls}" style="--t:${t}s"`;
const wMv = (t, x0, y0, x1, y1) => `class="wa-move" style="--t:${t}s;--x0:${x0}px;--y0:${y0}px;--x1:${x1}px;--y1:${y1}px"`;
const wWin = (x, y, w, h, body = '', title = '') => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="9" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><rect width="${w}" height="16" rx="8" fill="#E3E9F7"/><rect y="8" width="${w}" height="8" fill="#E3E9F7"/>
  <circle cx="9" cy="8" r="2.6" fill="#FF6B6B"/><circle cx="17" cy="8" r="2.6" fill="#FFD166"/><circle cx="25" cy="8" r="2.6" fill="#3CC47C"/>${title ? `<rect x="33" y="3.5" width="${w - 40}" height="9" rx="4.5" fill="#fff"/><text x="38" y="11" font-size="7" font-family="ui-monospace,Menlo,monospace" fill="#56628A">${title}</text>` : ''}${body}</g>`;
const wLap = (x, y, s = 1, screen = '') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-44" y="-34" width="88" height="58" rx="6" fill="#1B2B6B"/><rect x="-39" y="-29" width="78" height="48" rx="3" fill="#fff"/>${screen}<path d="M-54 26h108l-6 7H-48z" fill="#9AA7CF"/></g>`;
const wSrv = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${[0, 1, 2].map(k => `<rect x="-30" y="${-40 + k * 26}" width="60" height="22" rx="5" fill="#24398C"/><circle cx="-20" cy="${-29 + k * 26}" r="3.2" fill="${k === 1 ? '#7DF3FF' : '#3CC47C'}" class="wa-blink" style="--t:${k * .3}s"/><rect x="-10" y="${-31 + k * 26}" width="30" height="4" rx="2" fill="#3D55B0"/>`).join('')}</g>`;
const wPhone = (x, y, s = 1, screen = '') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-17" y="-32" width="34" height="64" rx="7" fill="#1B2B6B"/><rect x="-14" y="-26" width="28" height="50" rx="3" fill="#fff"/>${screen}</g>`;
const wEnv = (col, lab = '') => `<g><rect x="-15" y="-10" width="30" height="20" rx="4" fill="${col}"/><path d="M-15 -8l15 9 15-9" fill="none" stroke="#fff" stroke-width="1.8" opacity=".8"/>${lab ? `<text y="22" text-anchor="middle" class="tat s">${lab}</text>` : ''}</g>`;
const wCode = (x, y, w, lines, o = {}) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${lines.length * 17 + 14}" rx="10" fill="#0F1633"/>${lines.map((l, i) => `<text x="10" y="${20 + i * 17}" class="wat"${o.fs ? ` style="font-size:${o.fs}px"` : ''}>${l}</text>`).join('')}${o.extra || ''}</g>`;
// <tspan> acolorits: wTs('pk','<p>')
const wTs = (c, s) => `<tspan class="wat ${c}">${webE(s)}</tspan>`;
const wMiniPage = (x, y, w, h, c = '#14A3B8') => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h * .3}" rx="3" fill="${c}" opacity=".25"/><rect y="${h * .38}" width="${w * .7}" height="${h * .1}" rx="2" fill="${c}"/><rect y="${h * .56}" width="${w}" height="${h * .07}" rx="2" fill="#C9D6FB"/><rect y="${h * .7}" width="${w * .85}" height="${h * .07}" rx="2" fill="#C9D6FB"/><rect y="${h * .84}" width="${w * .6}" height="${h * .07}" rx="2" fill="#C9D6FB"/></g>`;
const wLbl = (x, y, txt, col, t, anchor = 'middle') => `<g ${wA(t, 'ta-in')}><text x="${x}" y="${y}" text-anchor="${anchor}" class="tat s" fill="${col}" style="fill:${col}">${txt}</text></g>`;

const TANI_WEB = {
  // el viatge: navegador → DNS → servidor → i tornada
  wtrip() {
    return tSvg(220, `${wLap(52, 128, 1, `<g ${wA(4.1, 'ta-fade')}>${wMiniPage(-33, -24, 66, 38, '#E5489A')}</g>`)}${wSrv(268, 128)}
      <g transform="translate(160 34)"><rect x="-34" y="-20" width="68" height="40" rx="9" fill="#fff" stroke="#8B5CF6" stroke-width="2.5"/><text y="-6" text-anchor="middle" class="tat s" style="fill:#8B5CF6">DNS</text><text y="10" text-anchor="middle" class="tat s">${webT('agenda', 'agenda')}</text></g>
      <path d="M90 100 Q120 50 126 44M194 44 Q236 60 250 92M96 140 H232" fill="none" stroke="#C9D6FB" stroke-width="2.5" stroke-dasharray="5 6" class="ta-dash"/>
      <g ${wMv(.3, 90, 100, 128, 46)}>${wEnv('#8B5CF6', '?')}</g><g ${wMv(1.1, 128, 52, 92, 106)}>${wEnv('#8B5CF6', '203.0.113.7')}</g>
      <g ${wMv(2, 100, 140, 232, 140)}>${wEnv('#14A3B8', webT('petició', 'petición'))}</g><g ${wMv(2.9, 232, 150, 100, 150)}>${wEnv('#E5489A', 'index.html')}</g>
      <text x="52" y="186" text-anchor="middle" class="tat s">${webT('navegador', 'navegador')}</text><text x="268" y="186" text-anchor="middle" class="tat s">${webT('servidor', 'servidor')}</text>
      <text x="160" y="212" text-anchor="middle" class="tat b" ${wA(3.8, 'ta-fade')}>${webT('Pregunta, demana… i la pàgina arriba!', 'Pregunta, pide… ¡y la página llega!')}</text>`);
  },
  // el DNS: com una agenda de telèfons, de noms a números
  wdns() {
    const rows = [['museu-robots.numi', '203.0.113.7'], ['receptes-avia.numi', '198.51.100.24'], ['club-estels.numi', '192.0.2.61']];
    return tSvg(210, `<rect x="40" y="12" width="240" height="132" rx="14" fill="#fff" stroke="#D9CCFB" stroke-width="2.5"/><rect x="40" y="12" width="240" height="28" rx="14" fill="#8B5CF6"/><rect x="40" y="28" width="240" height="12" fill="#8B5CF6"/>
      <text x="160" y="31" text-anchor="middle" class="tat w b">DNS · ${webT('agenda d\'internet', 'agenda de internet')}</text>
      ${rows.map(([n, ip], i) => `<g ${wA(.3 + i * .35, 'ta-in')}><rect x="52" y="${50 + i * 30}" width="216" height="24" rx="7" fill="${i === 1 ? '#F3EEFF' : '#F8F9FE'}" class="${i === 1 ? 'wa-pulse' : ''}" style="--t:2s"/><text x="60" y="${66 + i * 30}" class="wat d" style="font-size:10px">${n}</text><text x="260" y="${66 + i * 30}" text-anchor="end" class="wat" style="fill:#8B5CF6;font-size:10px">${ip}</text></g>`).join('')}
      <g ${wA(1.6, 'ta-in')}><rect x="22" y="158" width="128" height="28" rx="14" fill="#E2F7FA"/><text x="86" y="176" text-anchor="middle" class="wat d" style="font-size:10px">receptes-avia.numi</text></g>
      <path d="M154 172h24" stroke="#8B5CF6" stroke-width="3" ${wA(2.1, 'ta-fade')}/><path d="M174 166l8 6-8 6" fill="none" stroke="#8B5CF6" stroke-width="3" ${wA(2.1, 'ta-fade')}/>
      <g ${wA(2.5)}><rect x="186" y="158" width="112" height="28" rx="14" fill="#8B5CF6"/><text x="242" y="176" text-anchor="middle" class="wat">198.51.100.24</text></g>`);
  },
  // la pàgina viatja trossejada en paquets i es torna a muntar
  wpackets() {
    const nodes = [[110, 60], [160, 30], [160, 110], [210, 70], [130, 150], [200, 150]];
    const cols = ['#E5489A', '#14A3B8', '#F08A24', '#8B5CF6'];
    return tSvg(214, `${[[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [4, 5], [5, 3], [0, 4]].map(([a, b]) => `<path d="M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}" stroke="#D5DEF7" stroke-width="2.5"/>`).join('')}
      ${nodes.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#9FB4F2" stroke-width="2.5"/>`).join('')}
      <g transform="translate(14 64)"><rect width="56" height="70" rx="6" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>${cols.map((c, i) => `<rect x="${6 + (i % 2) * 23}" y="${6 + Math.floor(i / 2) * 30}" width="21" height="27" rx="3" fill="${c}" opacity=".85"/>`).join('')}</g>
      ${cols.map((c, i) => `<g ${wMv(.3 + i * .35, 30 + (i % 2) * 23, 80 + Math.floor(i / 2) * 30, 262 + (i % 2) * 23, 80 + Math.floor(i / 2) * 30)}><rect x="-10" y="-13" width="21" height="27" rx="3" fill="${c}"/><text y="5" text-anchor="middle" class="tat w s">${i + 1}</text></g>`).join('')}
      <g transform="translate(250 64)"><rect width="56" height="70" rx="6" fill="none" stroke="#3CC47C" stroke-width="2.5" stroke-dasharray="4 4"/></g>
      <text x="42" y="156" text-anchor="middle" class="tat s">${webT('servidor', 'servidor')}</text><text x="278" y="156" text-anchor="middle" class="tat s">${webT('el teu aparell', 'tu aparato')}</text>
      <text x="160" y="200" text-anchor="middle" class="tat b" ${wA(2.4, 'ta-fade')}>${webT('Cada paquet va per on pot. Al final s\'ajunten!', 'Cada paquete va por donde puede. ¡Al final se juntan!')}</text>`);
  },
  // les parts d'una adreça
  wurl() {
    const parts = [['https://', '#1FA463', webT('protocol (segur)', 'protocolo (seguro)')], ['www.biblio-numi.cat', '#8B5CF6', webT('domini', 'dominio')], ['/llibres/gats.html', '#F08A24', webT('camí a la pàgina', 'camino a la página')]];
    let x = 14; const w = [62, 140, 116];
    return tSvg(200, `<rect x="6" y="40" width="308" height="40" rx="20" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>
      ${parts.map(([t, c, l], i) => { const x0 = x; x += w[i]; return `<g ${wA(.4 + i * .8, 'ta-in')}><rect x="${x0}" y="46" width="${w[i] - 4}" height="28" rx="14" fill="${c}" opacity=".14"/><text x="${x0 + (w[i] - 4) / 2}" y="65" text-anchor="middle" class="wat" style="fill:${c};font-size:10.5px">${t}</text>
        <path d="M${x0 + (w[i] - 4) / 2} 80v${22 + i * 22}" stroke="${c}" stroke-width="2"/><circle cx="${x0 + (w[i] - 4) / 2}" cy="${104 + i * 22}" r="4" fill="${c}"/><text x="${x0 + (w[i] - 4) / 2 + (i === 2 ? -8 : 8)}" y="${108 + i * 22}" text-anchor="${i === 2 ? 'end' : 'start'}" class="tat s" style="fill:${c}">${l}</text></g>`; }).join('')}
      <g ${wA(3, 'ta-fade')}><text x="160" y="24" text-anchor="middle" class="tat b">${webT('Una adreça té parts, com una adreça postal', 'Una dirección tiene partes, como una dirección postal')}</text></g>`);
  },
  // molts clients, un servidor
  wclient() {
    const cl = [[54, 50, 'lap'], [54, 160, 'ph'], [266, 50, 'ph'], [266, 160, 'lap']];
    return tSvg(214, `${wSrv(160, 118, 1.1)}<text x="160" y="190" text-anchor="middle" class="tat s">${webT('servidor', 'servidor')}</text>
      ${cl.map(([x, y], i) => `<path d="M${x} ${y}L160 ${105}" stroke="#C9D6FB" stroke-width="2.5" stroke-dasharray="5 6" class="ta-dash"/>`).join('')}
      ${cl.map(([x, y, k], i) => `<g ${wA(.2 + i * .3)}>${k === 'lap' ? wLap(x, y, .62, wMiniPage(-30, -24, 60, 36)) : wPhone(x, y, .8, wMiniPage(-11, -20, 22, 36, '#E5489A'))}</g>`).join('')}
      ${cl.map(([x, y], i) => `<g ${wMv(1 + i * .5, x, y, 160, 105)}>${wEnv('#14A3B8')}</g>`).join('')}
      <text x="160" y="16" text-anchor="middle" class="tat b" ${wA(2.8, 'ta-fade')}>${webT('Els clients demanen, el servidor serveix', 'Los clientes piden, el servidor sirve')}</text>`);
  },
  // una web són fitxers
  wfiles() {
    const f = [['index.html', '#E5489A', '</>'], ['estil.css', '#2F6BFF', '{ }'], ['img/gat.svg', '#F08A24', '🖼']];
    return tSvg(214, `<g ${wA(.2)}><path d="M14 30h40l8 9h60v120H14z" fill="#FFD166"/><path d="M14 46h108v113H14z" fill="#FFC531"/><text x="68" y="104" text-anchor="middle" class="tat b">${webT('la-meva-web/', 'mi-web/')}</text></g>
      ${f.map(([n, c, ic], i) => `<g ${wA(.8 + i * .5, 'ta-in')}><g transform="translate(132 ${26 + i * 52})"><path d="M0 0h30l10 10v34H0z" fill="#fff" stroke="${c}" stroke-width="2.5"/><text x="20" y="31" text-anchor="middle" class="tat s" style="fill:${c}">${ic}</text><text x="48" y="27" class="wat d">${n}</text></g></g>`).join('')}
      <path d="M236 100h18" stroke="#14A3B8" stroke-width="3" ${wA(2.6, 'ta-fade')}/>
      <g ${wA(3)}>${wWin(258, 54, 58, 92, `<image href="img/tech/web/gat.svg" x="6" y="22" width="48" height="36"/><rect x="6" y="64" width="40" height="6" rx="3" fill="#E5489A"/><rect x="6" y="76" width="48" height="4" rx="2" fill="#C9D6FB"/>`)}</g>
      <text x="160" y="206" text-anchor="middle" class="tat s" ${wA(3.3, 'ta-fade')}>${webT('El navegador els ajunta i dibuixa la pàgina', 'El navegador los junta y dibuja la página')}</text>`);
  },
  // codi endreçat vs desendreçat
  wsource() {
    const messy = [`${wTs('g', '<')}${wTs('pk', 'ul')}${wTs('g', '><')}${wTs('pk', 'li')}${wTs('g', '>')}Pa${wTs('g', '</')}${wTs('pk', 'li')}${wTs('g', '><')}${wTs('pk', 'li')}${wTs('g', '>')}Llet`, `${wTs('g', '</')}${wTs('pk', 'li')}${wTs('g', '></')}${wTs('pk', 'ul')}${wTs('g', '>')}`];
    const tidy = [`${wTs('g', '<')}${wTs('pk', 'ul')}${wTs('g', '>')}`, `  ${wTs('g', '<')}${wTs('pk', 'li')}${wTs('g', '>')}Pa${wTs('g', '</')}${wTs('pk', 'li')}${wTs('g', '>')}`, `  ${wTs('g', '<')}${wTs('pk', 'li')}${wTs('g', '>')}Llet${wTs('g', '</')}${wTs('pk', 'li')}${wTs('g', '>')}`, `${wTs('g', '</')}${wTs('pk', 'ul')}${wTs('g', '>')}`];
    return tSvg(210, `<g class="wa-swap1">${wCode(20, 30, 280, messy.map(l => l.replace(/ /g, ' ')))}<text x="160" y="120" text-anchor="middle" class="tat b" style="fill:#B42318">${webT('Funciona… però costa de llegir', 'Funciona… pero cuesta de leer')}</text></g>
      <g class="wa-swap2">${wCode(60, 14, 200, tidy.map(l => l.replace(/^  /, '    ')))}<path d="M76 46v34" stroke="#7DF3FF" stroke-width="2" stroke-dasharray="3 3"/><text x="160" y="118" text-anchor="middle" class="tat b" style="fill:#1D6B3A">${webT('Amb sagnat, es veu què hi ha dins de què', 'Con sangría, se ve qué hay dentro de qué')}</text></g>
      <g transform="translate(110 140)">${wWin(0, 0, 100, 60, `<circle cx="14" cy="32" r="3" fill="#14204A"/><rect x="22" y="29" width="30" height="6" rx="3" fill="#C9D6FB"/><circle cx="14" cy="46" r="3" fill="#14204A"/><rect x="22" y="43" width="36" height="6" rx="3" fill="#C9D6FB"/>`)}</g>`);
  },
  // un element: obrir + contingut + tancar
  wtag() {
    return tSvg(214, `<g ${wMv(.2, -80, 0, 0, 0)}><rect x="34" y="48" width="74" height="40" rx="10" fill="#FFE3EF" stroke="#E5489A" stroke-width="2.5"/><text x="71" y="74" text-anchor="middle" class="wat" style="fill:#C2185B;font-size:16px">&lt;p&gt;</text></g>
      <g ${wA(.9)}><rect x="116" y="48" width="88" height="40" rx="10" fill="#fff" stroke="#C9D6FB" stroke-width="2.5"/><text x="160" y="74" text-anchor="middle" class="tat b">Hola!</text></g>
      <g ${wMv(1.3, 80, 0, 0, 0)}><rect x="212" y="48" width="78" height="40" rx="10" fill="#FFE3EF" stroke="#E5489A" stroke-width="2.5"/><text x="251" y="74" text-anchor="middle" class="wat" style="fill:#C2185B;font-size:16px">&lt;/p&gt;</text></g>
      ${[[71, webT('obrir', 'abrir')], [160, webT('contingut', 'contenido')], [251, webT('tancar', 'cerrar')]].map(([x, l], i) => `<g ${wA(2 + i * .3, 'ta-in')}><path d="M${x - 30} 98q30 12 60 0" fill="none" stroke="#8B5CF6" stroke-width="2.5"/><text x="${x}" y="124" text-anchor="middle" class="tat s" style="fill:#8B5CF6">${l}</text></g>`).join('')}
      <g ${wA(2.4, 'ta-fade')}><circle cx="251" cy="32" r="12" fill="#FFD166"/><text x="251" y="37" text-anchor="middle" class="wat d" style="font-size:14px">/</text><path d="M240 40l-6 6" stroke="#F2B21B" stroke-width="2"/></g>
      <g ${wA(3.2, 'ta-in')}><rect x="24" y="142" width="272" height="56" rx="14" fill="none" stroke="#14A3B8" stroke-width="3" stroke-dasharray="6 5"/><text x="160" y="176" text-anchor="middle" class="tat b" style="fill:#0E7383">${webT('= un element (un paràgraf)', '= un elemento (un párrafo)')}</text></g>`);
  },
  // etiquetes niades: com nines russes
  wnest() {
    const box = (x, y, w, h, c, n, t) => `<g ${wA(t, 'ta-grow')}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.5"/><text x="${x + 8}" y="${y + 15}" class="wat" style="fill:${c};font-size:11px">&lt;${n}&gt;</text></g>`;
    return tSvg(214, `${box(10, 10, 300, 194, '#1B2B6B', 'body', .2)}${box(24, 34, 272, 40, '#E5489A', 'h1', .7)}${box(24, 84, 272, 104, '#14A3B8', 'p', 1.2)}${box(40, 108, 120, 44, '#F08A24', 'b', 1.7)}
      <text x="70" y="62" class="tat b" ${wA(.9, 'ta-fade')}>${webT('El meu gat', 'Mi gato')}</text><text x="50" y="140" class="tat" ${wA(1.9, 'ta-fade')}>Mixa</text><text x="170" y="140" class="tat s" ${wA(2.1, 'ta-fade')}>${webT('és molt curiosa', 'es muy curiosa')}</text>
      <text x="160" y="178" text-anchor="middle" class="tat s" style="fill:#0E7383;font-size:11.5px" ${wA(2.6, 'ta-fade')}>${webT('l\'última que obres, la primera que tanques', 'la última que abres, la primera que cierras')}</text>`);
  },
  // de h1 a h6
  whead() {
    const s = [30, 25, 20, 17, 15, 13];
    let y = 8; return tSvg(214, s.map((f, i) => { y += f + 10; return `<g ${wA(.2 + i * .35, 'ta-in')}><text x="20" y="${y}" class="wat" style="fill:#C2185B;font-size:11px">&lt;h${i + 1}&gt;</text><text x="70" y="${y}" class="tat" style="font-size:${f}px;font-weight:900">${webT('Títol', 'Título')} ${i + 1}</text></g>`; }).join('') +
      `<g ${wA(2.8, 'ta-in')}><path d="M262 30v150" stroke="#8B5CF6" stroke-width="3"/><path d="M256 172l6 10 6-10" fill="#8B5CF6"/><text x="276" y="100" class="tat s" style="fill:#8B5CF6" transform="rotate(90 276 100)">${webT('menys important', 'menos importante')}</text></g>`);
  },
  // ul i ol
  wlist() {
    const it = [webT('Pa', 'Pan'), webT('Llet', 'Leche'), webT('Pomes', 'Manzanas')];
    const col = (x, tag, c, mark) => `<g ${wA(.2, 'ta-in')}><rect x="${x}" y="16" width="136" height="176" rx="16" fill="#fff" stroke="${c}" stroke-width="2.5"/><text x="${x + 68}" y="42" text-anchor="middle" class="wat" style="fill:${c};font-size:14px">&lt;${tag}&gt;</text></g>
      ${it.map((t, i) => `<g ${wA(.7 + i * .45, 'ta-in')}><rect x="${x + 12}" y="${58 + i * 42}" width="112" height="32" rx="9" fill="${c}" fill-opacity=".1"/>${mark(x + 30, 79 + i * 42, i)}<text x="${x + 46}" y="${79 + i * 42}" class="tat">${t}</text></g>`).join('')}`;
    return tSvg(206, col(14, 'ul', '#E5489A', (x, y) => `<circle cx="${x}" cy="${y - 5}" r="5" fill="#E5489A"/>`) + col(170, 'ol', '#14A3B8', (x, y, i) => `<text x="${x}" y="${y}" text-anchor="middle" class="tat b" style="fill:#14A3B8">${i + 1}.</text>`));
  },
  // la imatge: src i alt
  wimg() {
    return tSvg(214, `${wCode(10, 10, 300, [`${wTs('g', '<')}${wTs('pk', 'img')} ${wTs('at', 'src')}${wTs('g', '=')}${wTs('st', '"img/gat.svg"')}`, `     ${wTs('at', 'alt')}${wTs('g', '=')}${wTs('st', '"Un gat taronja"')}${wTs('g', '>')}`])}
      <g class="wa-swap1"><g ${wA(.6)}><rect x="70" y="72" width="180" height="128" rx="12" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><image href="img/tech/web/gat.svg" x="78" y="80" width="164" height="112"/></g></g>
      <g class="wa-swap2"><rect x="70" y="72" width="180" height="128" rx="12" fill="#F8F9FE" stroke="#F5A3A3" stroke-width="2" stroke-dasharray="6 5"/><path d="M146 112h28v22h-28z M150 128l7-8 6 6 4-4 5 6" fill="none" stroke="#B9C3E3" stroke-width="2"/><text x="160" y="160" text-anchor="middle" class="tat s">${webT('Un gat taronja', 'Un gato naranja')}</text><text x="160" y="182" text-anchor="middle" class="tat s" style="fill:#B42318">${webT('si la imatge falla, surt l\'alt', 'si la imagen falla, sale el alt')}</text></g>`);
  },
  // un enllaç porta a una altra pàgina
  wlink() {
    return tSvg(214, `${wWin(10, 30, 130, 120, `<rect x="10" y="26" width="80" height="9" rx="4" fill="#14204A"/><rect x="10" y="44" width="110" height="5" rx="2.5" fill="#C9D6FB"/><text x="10" y="70" class="tat s" style="fill:#2F6BFF;text-decoration:underline">${webT('Mira els gats', 'Mira los gatos')}</text><rect x="10" y="84" width="96" height="5" rx="2.5" fill="#C9D6FB"/>`, 'index.html')}
      ${wWin(180, 30, 130, 120, `<image href="img/tech/web/gat.svg" x="10" y="24" width="72" height="54"/><rect x="10" y="86" width="90" height="8" rx="4" fill="#F08A24"/><rect x="10" y="100" width="110" height="5" rx="2.5" fill="#C9D6FB"/>`, 'gats.html')}
      <g class="wa-cur" style="animation-duration:5.5s"><g transform="translate(70 102)"><path d="M0 0l0 18 5-5 4 9 4-2-4-9 7 0z" fill="#14204A" stroke="#fff" stroke-width="1.5"/></g></g>
      <path d="M130 96 Q160 60 186 86" fill="none" stroke="#2F6BFF" stroke-width="3" stroke-dasharray="6 5" ${wA(1.6, 'ta-fade')}/><path d="M180 80l8 7-10 3" fill="none" stroke="#2F6BFF" stroke-width="3" ${wA(1.6, 'ta-fade')}/>
      <rect x="180" y="30" width="130" height="120" rx="9" fill="none" stroke="#3CC47C" stroke-width="4" ${wA(2.2, 'ta-fade')}/>
      <g ${wA(2.6, 'ta-in')}>${wCode(40, 162, 240, [`${wTs('g', '<')}${wTs('pk', 'a')} ${wTs('at', 'href')}${wTs('g', '=')}${wTs('st', '"gats.html"')}${wTs('g', '>')}Mira…${wTs('g', '</')}${wTs('pk', 'a')}${wTs('g', '>')}`])}</g>`);
  },
  // citar: autor, llicència, font
  wcite() {
    return tSvg(214, `<g ${wA(.2)}><rect x="20" y="14" width="150" height="186" rx="14" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><image href="img/tech/web/guineu.svg" x="30" y="24" width="130" height="98"/></g>
      ${[['👤', webT('Autor: Numi', 'Autor: Numi')], ['📜', webT('Llicència: lliure', 'Licencia: libre')], ['🔗', webT('Font: d\'on surt', 'Fuente: de dónde sale')]].map(([e, t], i) => `<g ${wA(.9 + i * .6, 'ta-in')}><text x="32" y="${146 + i * 20}" class="tat s">${e} ${t}</text></g>`).join('')}
      <g ${wA(2.9)}><circle cx="252" cy="80" r="40" fill="#E4F7EC"/><path d="M234 80l12 12 24-26" fill="none" stroke="#3CC47C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>
      <text x="252" y="148" text-anchor="middle" class="tat b" ${wA(3.2, 'ta-fade')}>${webT('Dona el crèdit', 'Da el crédito')}</text><text x="252" y="168" text-anchor="middle" class="tat s" ${wA(3.4, 'ta-fade')}>${webT('a qui ho ha fet', 'a quien lo ha hecho')}</text>`);
  },
  // anatomia d'una regla CSS
  wrule() {
    return tSvg(214, `<g transform="translate(20 20)"><rect width="280" height="54" rx="12" fill="#0F1633"/><text x="16" y="34" class="wat" style="font-size:17px">${wTs('cy', 'h1')} ${wTs('g', '{')} ${wTs('bl', 'color')}${wTs('g', ':')} <tspan class="wat at">tomato</tspan>${wTs('g', ';')} ${wTs('g', '}')}</text></g>
      ${[[30, webT('selector: a qui', 'selector: a quién'), '#0E7383'], [112, webT('propietat: què', 'propiedad: qué'), '#2F6BFF'], [196, webT('valor: com', 'valor: cómo'), '#D9772A']].map(([x, l, c], i) => `<g ${wA(.5 + i * .6, 'ta-in')}><path d="M${x} 78v${56 - i * 20}" stroke="${c}" stroke-width="2.5"/><circle cx="${x}" cy="${136 - i * 20}" r="4" fill="${c}"/><text x="${x + 8}" y="${140 - i * 20}" class="tat s" style="fill:${c}">${l}</text></g>`).join('')}
      <g ${wA(2.6)}><rect x="40" y="160" width="240" height="44" rx="12" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><text x="160" y="190" text-anchor="middle" style="font:900 22px Lexend,system-ui,sans-serif" class="wa-col2" fill="tomato">${webT('Hola, món!', '¡Hola, mundo!')}</text></g>`);
  },
  // link: uneix l'HTML i el CSS
  wlinkcss() {
    return tSvg(214, `<g ${wA(.2, 'ta-in')}>${wCode(8, 14, 148, [`${wTs('g', '<')}${wTs('pk', 'link')} ${wTs('at', 'rel')}${wTs('g', '=')}${wTs('st', '"stylesheet"')}`, `  ${wTs('at', 'href')}${wTs('g', '=')}${wTs('st', '"estil.css"')}${wTs('g', '>')}`, `${wTs('g', '<')}${wTs('pk', 'h1')}${wTs('g', '>')}Hola${wTs('g', '</')}${wTs('pk', 'h1')}${wTs('g', '>')}`], { fs: 10.5 })}<text x="82" y="96" text-anchor="middle" class="tat s">index.html</text></g>
      <g ${wA(.7, 'ta-in')}>${wCode(176, 14, 136, [`${wTs('cy', 'h1')} ${wTs('g', '{')}`, `  ${wTs('bl', 'color')}${wTs('g', ':')} ${wTs('at', 'teal')}${wTs('g', ';')}`, `${wTs('g', '}')}`])}<text x="244" y="96" text-anchor="middle" class="tat s">estil.css</text></g>
      <path d="M150 36 C166 36 162 36 178 36" stroke="#FFD166" stroke-width="4" stroke-linecap="round" class="wa-pulse" ${wA(1.3, 'ta-fade')}/>
      <g ${wA(1.3)}><circle cx="164" cy="36" r="9" fill="#FFD166"/><text x="164" y="40" text-anchor="middle" style="font:900 11px sans-serif">🔗</text></g>
      <g ${wA(2.2)}>${wWin(90, 112, 140, 92, `<text x="70" y="62" text-anchor="middle" style="font:900 24px Lexend,system-ui,sans-serif;fill:teal">Hola</text>`, 'index.html')}</g>`);
  },
  // colors: noms, hex i rgb
  wcolor() {
    const ch = [['R', '#EF5A5A', 1], ['G', '#3CC47C', .55], ['B', '#2F6BFF', .2]];
    return tSvg(214, `${ch.map(([n, c, v], i) => `<g transform="translate(20 ${24 + i * 40})"><text y="16" class="tat b" style="fill:${c}">${n}</text><rect x="20" width="150" height="20" rx="10" fill="#EEF1FA"/><rect x="20" width="${150 * v}" height="20" rx="10" fill="${c}" ${wA(.3 + i * .4, 'ta-grow')} style="--t:${.3 + i * .4}s;transform-origin:0 50%"/><text x="178" y="15" class="wat d">${Math.round(v * 255)}</text></g>`).join('')}
      <g ${wA(1.7)}><circle cx="262" cy="64" r="40" fill="rgb(255,140,51)"/><circle cx="262" cy="64" r="40" fill="none" stroke="#fff" stroke-width="4"/></g>
      <g ${wA(2.3, 'ta-in')}><rect x="20" y="150" width="88" height="30" rx="10" fill="#0F1633"/><text x="64" y="170" text-anchor="middle" class="wat at">#FF8C33</text></g>
      <g ${wA(2.7, 'ta-in')}><rect x="116" y="150" width="128" height="30" rx="10" fill="#0F1633"/><text x="180" y="170" text-anchor="middle" class="wat vi">rgb(255,140,51)</text></g>
      <g ${wA(3.1, 'ta-in')}><rect x="252" y="150" width="56" height="30" rx="10" fill="#0F1633"/><text x="280" y="170" text-anchor="middle" class="wat st">orange</text></g>
      <text x="160" y="206" text-anchor="middle" class="tat s" ${wA(3.4, 'ta-fade')}>${webT('vermell + verd + blau = tots els colors', 'rojo + verde + azul = todos los colores')}</text>`);
  },
  // tipus de lletra
  wfont() {
    const f = [['Georgia, serif', 'serif', 'Aa'], ['Arial, sans-serif', 'sans-serif', 'Aa'], ['Menlo, monospace', 'monospace', 'Aa']];
    return tSvg(214, `${f.map(([ff, n, t], i) => `<g ${wA(.3 + i * .45)}><rect x="${14 + i * 100}" y="14" width="92" height="96" rx="14" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><text x="${60 + i * 100}" y="74" text-anchor="middle" style="font:700 40px ${ff};fill:#14204A">${t}</text><text x="${60 + i * 100}" y="100" text-anchor="middle" class="wat d" style="font-size:10px">${n}</text></g>`).join('')}
      ${[12, 16, 22, 30].map((s, i) => `<g ${wA(1.8 + i * .3, 'ta-in')}><text x="${20 + [0, 40, 90, 156][i]}" y="168" style="font:700 ${s}px Lexend,system-ui,sans-serif;fill:#8B5CF6">A</text><text x="${20 + [0, 40, 90, 156][i]}" y="190" class="wat d" style="font-size:9px">${s}px</text></g>`).join('')}
      ${[300, 600, 900].map((w, i) => `<g ${wA(3 + i * .3, 'ta-in')}><text x="${236 + i * 28}" y="168" style="font:${w} 24px Lexend,system-ui,sans-serif;fill:#E5489A">a</text></g>`).join('')}<text x="262" y="190" text-anchor="middle" class="wat d" style="font-size:9px" ${wA(3.6, 'ta-fade')}>font-weight</text>`);
  },
  // model de caixa
  wbox() {
    const L = [['margin', '#FBD3A5', '#D9772A', 14, 14, 292, 176, .2], ['border', '#F2B21B', '#8A6200', 44, 40, 232, 124, .9], ['padding', '#C9E5A6', '#3E7A1E', 54, 50, 212, 104, 1.6], ['content', '#9DD6E2', '#0E4C57', 86, 76, 148, 52, 2.3]];
    return tSvg(206, L.map(([n, f, c, x, y, w, h, t]) => `<g ${wA(t, 'ta-grow')}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${n === 'margin' ? 10 : 4}" fill="${f}" ${n === 'margin' ? 'stroke="#E39A4A" stroke-dasharray="6 5" stroke-width="2"' : ''}/><text x="${x + 6}" y="${y + 13}" class="wat" style="fill:${c};font-size:10.5px">${n}</text></g>`).join('') +
      `<text x="160" y="108" text-anchor="middle" class="tat b" style="fill:#0E4C57" ${wA(2.5, 'ta-fade')}>${webT('el contingut', 'el contenido')}</text>
      <text x="160" y="202" text-anchor="middle" class="tat s" ${wA(3, 'ta-fade')}>${webT('farciment a dins · vora · marge a fora', 'relleno dentro · borde · margen fuera')}</text>`);
  },
  // bloc vs en línia
  wblock() {
    return tSvg(214, `<text x="80" y="20" text-anchor="middle" class="tat b">${webT('bloc', 'bloque')}</text><text x="240" y="20" text-anchor="middle" class="tat b">${webT('en línia', 'en línea')}</text>
      <rect x="10" y="30" width="140" height="170" rx="12" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><rect x="170" y="30" width="140" height="170" rx="12" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>
      ${['h1', 'p', 'div'].map((t, i) => `<g ${wA(.3 + i * .4, 'ta-in')}><rect x="20" y="${42 + i * 50}" width="120" height="40" rx="7" fill="#14A3B8" fill-opacity=".18" stroke="#14A3B8" stroke-width="2"/><text x="30" y="${66 + i * 50}" class="wat" style="fill:#0E7383">&lt;${t}&gt;</text></g>`).join('')}
      ${[['b', 40], ['a', 34], ['span', 52], ['em', 36], ['b', 30]].map(([t, w], i) => { const xs = [180, 224, 262, 180, 220], ys = [52, 52, 52, 82, 82]; return `<g ${wA(1.6 + i * .3, 'ta-in')}><rect x="${xs[i]}" y="${ys[i] - 14}" width="${w}" height="22" rx="5" fill="#E5489A" fill-opacity=".18" stroke="#E5489A" stroke-width="2"/><text x="${xs[i] + 5}" y="${ys[i] + 2}" class="wat" style="fill:#C2185B;font-size:10.5px">&lt;${t}&gt;</text></g>`; }).join('')}
      <text x="240" y="140" text-anchor="middle" class="tat s" ${wA(3.2, 'ta-fade')}>${webT('van seguits,', 'van seguidos,')}</text><text x="240" y="158" text-anchor="middle" class="tat s" ${wA(3.2, 'ta-fade')}>${webT('com les paraules', 'como las palabras')}</text>`);
  },
  // classe vs id
  wclass() {
    const el = (x, y, lab, c, t, star) => `<g ${wA(t)}><rect x="${x}" y="${y}" width="130" height="40" rx="10" fill="${c}" fill-opacity=".16" stroke="${c}" stroke-width="2.5"/><text x="${x + 10}" y="${y + 25}" class="wat" style="fill:${c};font-size:11px">${lab}</text>${star ? `<text x="${x + 116}" y="${y + 26}" text-anchor="middle">⭐</text>` : ''}</g>`;
    return tSvg(214, `${el(14, 20, 'class="destacat"', '#E5489A', .3)}${el(14, 70, 'class="destacat"', '#E5489A', .6)}${el(14, 120, 'class="destacat"', '#E5489A', .9)}${el(176, 70, 'id="portada"', '#14A3B8', 1.6, 1)}
      <g ${wA(2.2, 'ta-in')}><rect x="14" y="170" width="130" height="30" rx="9" fill="#0F1633"/><text x="24" y="190" class="wat">${wTs('cls', '.destacat')} { }</text></g><g ${wA(2.6, 'ta-in')}><rect x="176" y="170" width="130" height="30" rx="9" fill="#0F1633"/><text x="186" y="190" class="wat">${wTs('cy', '#portada')} { }</text></g>
      <text x="241" y="40" text-anchor="middle" class="tat s" ${wA(1.9, 'ta-fade')}>${webT('id: només un', 'id: solo uno')}</text><text x="241" y="140" text-anchor="middle" class="tat s" ${wA(1.2, 'ta-fade')}>${webT('classe: tants com vulguis', 'clase: tantos como quieras')}</text>`);
  },
  // flex: en fila i repartits
  wflex() {
    const st = [['flex-start', [24, 82, 140]], ['center', [100, 158, 216]], ['space-between', [24, 158, 268]]];
    return tSvg(214, `<text x="160" y="18" text-anchor="middle" class="wat d" style="font-size:12px">display: flex;</text><rect x="14" y="30" width="292" height="92" rx="14" fill="#fff" stroke="#2F6BFF" stroke-width="2.5" stroke-dasharray="6 5"/>
      ${st.map(([n, xs], k) => `<g class="wa-s3 s${k}">${xs.map((x, i) => `<rect x="${x}" y="46" width="${i === 1 ? 50 : 50}" height="60" rx="10" fill="${['#E5489A', '#F08A24', '#14A3B8'][i]}"/><text x="${x + 25}" y="82" text-anchor="middle" class="tat w b">${i + 1}</text>`).join('')}
        <rect x="40" y="140" width="240" height="32" rx="10" fill="#0F1633"/><text x="160" y="161" text-anchor="middle" class="wat">${wTs('bl', 'justify-content')}${wTs('g', ':')} ${wTs('at', n)}${wTs('g', ';')}</text></g>`).join('')}
      <text x="160" y="200" text-anchor="middle" class="tat s">${webT('el contenidor col·loca els fills en fila', 'el contenedor coloca a los hijos en fila')}</text>`);
  },
  // graella
  wgrid() {
    return tSvg(214, `<text x="160" y="18" text-anchor="middle" class="wat d" style="font-size:11.5px">grid-template-columns: 1fr 1fr 1fr;</text>
      ${[0, 1, 2].map(c => `<g ${wA(.2 + c * .2, 'ta-fade')}><rect x="${18 + c * 98}" y="28" width="90" height="16" rx="5" fill="#2F6BFF" fill-opacity=".14"/><text x="${63 + c * 98}" y="40" text-anchor="middle" class="wat" style="fill:#2F6BFF;font-size:10px">1fr</text></g>`).join('')}
      ${['gat', 'gos', 'lloro', 'guineu', 'tortuga', 'balena'].map((n, i) => `<g ${wA(.9 + i * .3)}><rect x="${18 + (i % 3) * 98}" y="${52 + Math.floor(i / 3) * 74}" width="90" height="66" rx="10" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><image href="img/tech/web/${n}.svg" x="${22 + (i % 3) * 98}" y="${56 + Math.floor(i / 3) * 74}" width="82" height="58"/></g>`).join('')}
      <text x="160" y="208" text-anchor="middle" class="tat s" ${wA(3, 'ta-fade')}>${webT('files i columnes, com un tauler', 'filas y columnas, como un tablero')}</text>`);
  },
  // taula
  wtable() {
    const rows = [[webT('Dia', 'Día'), webT('Activitat', 'Actividad')], [webT('Dilluns', 'Lunes'), 'Web'], [webT('Dimecres', 'Miércoles'), webT('Bàsquet', 'Baloncesto')], [webT('Divendres', 'Viernes'), webT('Música', 'Música')]];
    return tSvg(214, rows.map((r, i) => `<g ${wA(.3 + i * .45, 'ta-in')}>${r.map((c, j) => `<rect x="${30 + j * 130}" y="${16 + i * 40}" width="130" height="40" fill="${i === 0 ? '#2F6BFF' : i % 2 ? '#fff' : '#EEF3FF'}" stroke="#C9D6FB" stroke-width="2"/><text x="${95 + j * 130}" y="${41 + i * 40}" text-anchor="middle" class="tat ${i === 0 ? 'w b' : 's'}">${c}</text>`).join('')}<text x="22" y="${41 + i * 40}" text-anchor="end" class="wat" style="fill:#2F6BFF;font-size:10px">tr</text></g>`).join('') +
      `<g ${wA(2.4, 'ta-fade')}><text x="95" y="196" text-anchor="middle" class="wat" style="fill:#2F6BFF">th · td</text><text x="225" y="196" text-anchor="middle" class="tat s">${webT('cada casella és una cel·la', 'cada casilla es una celda')}</text></g>`);
  },
  // disseny adaptable
  wresp() {
    const cols = ['#E5489A', '#F08A24', '#14A3B8'];
    return tSvg(214, `<g class="wa-swap1"><rect x="20" y="16" width="280" height="170" rx="12" fill="#fff" stroke="#1B2B6B" stroke-width="5"/><rect x="34" y="30" width="252" height="26" rx="5" fill="#1B2B6B" fill-opacity=".15"/>
        ${cols.map((c, i) => `<rect x="${34 + i * 86}" y="66" width="78" height="104" rx="8" fill="${c}" fill-opacity=".8"/>`).join('')}<text x="160" y="206" text-anchor="middle" class="tat b">${webT('Ordinador: 3 columnes', 'Ordenador: 3 columnas')}</text></g>
      <g class="wa-swap2"><rect x="112" y="6" width="96" height="190" rx="16" fill="#fff" stroke="#1B2B6B" stroke-width="5"/><rect x="122" y="22" width="76" height="16" rx="4" fill="#1B2B6B" fill-opacity=".15"/>
        ${cols.map((c, i) => `<rect x="122" y="${44 + i * 48}" width="76" height="42" rx="7" fill="${c}" fill-opacity=".8"/>`).join('')}<text x="160" y="210" text-anchor="middle" class="tat b">${webT('Mòbil: una columna', 'Móvil: una columna')}</text></g>`);
  },
  // botó amb :hover
  whover() {
    return tSvg(214, `<g class="wa-hov"><rect x="90" y="40" width="140" height="52" rx="16" class="wa-col" fill="#2F6BFF"/><text x="160" y="72" text-anchor="middle" class="tat w b">${webT('Envia', 'Envía')}</text></g>
      <g class="wa-cur"><g transform="translate(168 76)"><path d="M0 0l0 22 6-6 5 11 5-2-5-11 9 0z" fill="#14204A" stroke="#fff" stroke-width="1.6"/></g></g>
      ${wCode(50, 124, 220, [`${wTs('cy', 'button')}${wTs('pk', ':hover')} ${wTs('g', '{')}`, `  ${wTs('bl', 'background')}${wTs('g', ':')} ${wTs('at', 'hotpink')}${wTs('g', ';')}`, `  ${wTs('bl', 'transform')}${wTs('g', ':')} ${wTs('vi', 'scale(1.1)')}${wTs('g', ';')}`, `${wTs('g', '}')}`], { fs: 11.5 })}`);
  },
  // detectiu de webs falses
  wfake() {
    return tSvg(214, `${wWin(14, 10, 292, 196, `<rect x="40" y="3" width="200" height="11" rx="5.5" fill="#fff"/><text x="46" y="11.5" font-size="8" font-family="ui-monospace,Menlo,monospace" fill="#B42318">⚠ http://www.bancc-numi.xyz/premi</text>
        <rect x="14" y="28" width="264" height="34" rx="8" fill="#FFD23F"/><text x="146" y="50" text-anchor="middle" style="font:900 13px Lexend,system-ui,sans-serif;fill:#4A1D00">${webT('HAS GUANYAT UN MÒBIL!!!', '¡¡¡HAS GANADO UN MÓVIL!!!')}</text>
        <rect x="14" y="70" width="264" height="22" rx="6" fill="#FFECEC"/><text x="146" y="85" text-anchor="middle" class="wat" style="fill:#B42318;font-size:10px">${webT('Només queden 00:59 segons', 'Solo quedan 00:59 segundos')}</text>
        <text x="14" y="112" class="tat s">${webT('Usuari', 'Usuario')}</text><rect x="14" y="116" width="160" height="16" rx="5" fill="#F8FAFF" stroke="#C9D6FB"/><text x="14" y="148" class="tat s">${webT('Contrasenya', 'Contraseña')}</text><rect x="14" y="152" width="160" height="16" rx="5" fill="#F8FAFF" stroke="#C9D6FB"/>`)}
      <g class="ta-lupa2"><circle r="20" fill="#E8F4FF" fill-opacity=".5" stroke="#20306A" stroke-width="4.5"/><path d="M14 14l16 16" stroke="#20306A" stroke-width="7" stroke-linecap="round"/></g>
      ${[[60, 20], [276, 44], [270, 88], [190, 140]].map(([x, y], i) => `<g ${wA(.8 + i * .9)}><circle cx="${x}" cy="${y}" r="10" fill="#EF5A5A"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="tat w b" style="font-size:13px">!</text></g>`).join('')}`, 'loop5');
  },
  // publicar: pujar els fitxers a un servidor
  wpublish() {
    return tSvg(214, `${wLap(56, 120, 1, `<g>${wMiniPage(-33, -24, 66, 38, '#F2B21B')}</g>`)}${wSrv(264, 112)}
      ${['index.html', 'estil.css', 'img/'].map((n, i) => `<g ${wMv(.3 + i * .5, 96, 100, 236, 96)}><path d="M-10 -12h14l6 6v18h-20z" fill="#fff" stroke="${['#E5489A', '#2F6BFF', '#F08A24'][i]}" stroke-width="2"/></g>`).join('')}
      <path d="M100 100 H232" stroke="#C9D6FB" stroke-width="2.5" stroke-dasharray="5 6" class="ta-dash"/>
      <g ${wA(2.4, 'ta-in')}><rect x="40" y="168" width="240" height="30" rx="15" fill="#fff" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="188" text-anchor="middle" class="wat d">🔒 https://la-meva-web.numi</text></g>
      ${[[200, 32], [240, 22], [280, 36]].map(([x, y], i) => `<g ${wA(3 + i * .25)}>${wPhone(x, y, .45, wMiniPage(-11, -20, 22, 36, '#F2B21B'))}</g>`).join('')}
      <text x="56" y="30" text-anchor="middle" class="tat s" ${wA(3.4, 'ta-fade')}>${webT('ara tothom la pot veure', 'ahora todos la pueden ver')}</text>`);
  },
  // de l'esbós a la pàgina
  wplan() {
    const sk = `stroke="#56628A" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="1 0"`;
    return tSvg(214, `<g class="wa-swap1"><rect x="60" y="10" width="200" height="190" rx="6" fill="#FFFDF2" stroke="#E7D9A8" stroke-width="2"/>
        <path d="M74 24h172v26H74z" ${sk}/><text x="160" y="42" text-anchor="middle" class="tat s">${webT('capçalera', 'cabecera')}</text><path d="M74 58h172v14H74z" ${sk}/><text x="160" y="69" text-anchor="middle" class="tat s" style="font-size:10px">menú</text>
        <path d="M74 80h80v70H74z M74 80l80 70M154 80l-80 70" ${sk}/><path d="M164 84h80M164 98h70M164 112h76M164 126h60" ${sk}/><path d="M74 160h172v28H74z" ${sk}/><text x="160" y="178" text-anchor="middle" class="tat s">${webT('peu', 'pie')}</text></g>
      <g class="wa-swap2">${wWin(60, 10, 200, 190, `<rect x="10" y="22" width="180" height="26" rx="5" fill="#F2B21B"/><text x="20" y="40" class="tat b">${webT('La meva web', 'Mi web')}</text>
        ${[0, 1, 2].map(i => `<rect x="${12 + i * 48}" y="54" width="42" height="12" rx="6" fill="#1B2B6B" fill-opacity=".14"/>`).join('')}<image href="img/tech/web/consola.svg" x="10" y="72" width="82" height="62"/><rect x="100" y="78" width="80" height="8" rx="4" fill="#E5489A"/><rect x="100" y="94" width="88" height="5" rx="2.5" fill="#C9D6FB"/><rect x="100" y="104" width="80" height="5" rx="2.5" fill="#C9D6FB"/><rect x="100" y="114" width="86" height="5" rx="2.5" fill="#C9D6FB"/><rect x="10" y="150" width="180" height="28" rx="5" fill="#1B2B6B"/>`)}</g>`);
  },
  // el lector de pantalla llegeix l'alt
  walt() {
    return tSvg(214, `<g ${wA(.2)}><rect x="16" y="20" width="130" height="100" rx="12" fill="#fff" stroke="#C9D6FB" stroke-width="2"/><image href="img/tech/web/gos.svg" x="22" y="26" width="118" height="88"/></g>
      ${wCode(16, 132, 140, [`${wTs('at', 'alt')}${wTs('g', '=')}${wTs('st', '"Un gos que')}`, `${wTs('st', ' salta al riu"')}`])}
      <g ${wA(1, 'ta-in')}><path d="M190 80h12l14-12v44l-14-12h-12z" fill="#14A3B8"/>${[0, 1, 2].map(i => `<path d="M${224 + i * 8} ${74 - i * 6}q${8 + i * 4} ${16 + i * 6} 0 ${32 + i * 12}" fill="none" stroke="#14A3B8" stroke-width="3" stroke-linecap="round" class="wa-blink" style="--t:${i * .3}s"/>`).join('')}</g>
      <g ${wA(1.8, 'ta-in')}><rect x="170" y="140" width="140" height="56" rx="16" fill="#E2F7FA"/><text x="240" y="164" text-anchor="middle" class="tat s" style="fill:#0E7383">${webT('«Imatge: un gos', '«Imagen: un perro')}</text><text x="240" y="184" text-anchor="middle" class="tat s" style="fill:#0E7383">${webT('que salta al riu»', 'que salta al río»')}</text></g>
      <text x="240" y="30" text-anchor="middle" class="tat s" ${wA(2.6, 'ta-fade')}>${webT('per a qui no hi veu', 'para quien no ve')}</text>`);
  },
  // mides de pantalla
  wdevice() {
    return tSvg(214, `<g ${wA(.2)}>${wPhone(48, 110, 1.6, wMiniPage(-11, -20, 22, 36, '#E5489A'))}<text x="48" y="190" text-anchor="middle" class="wat d">390 px</text></g>
      <g ${wA(.8)}><rect x="104" y="44" width="80" height="112" rx="10" fill="#1B2B6B"/><rect x="110" y="50" width="68" height="100" rx="4" fill="#fff"/>${wMiniPage(116, 58, 56, 60, '#F08A24')}<text x="144" y="190" text-anchor="middle" class="wat d">768 px</text></g>
      <g ${wA(1.4)}>${wLap(250, 118, 1.15, wMiniPage(-33, -24, 66, 38, '#14A3B8'))}<text x="250" y="190" text-anchor="middle" class="wat d">1280 px</text></g>
      <text x="160" y="22" text-anchor="middle" class="tat b" ${wA(2.2, 'ta-fade')}>${webT('La mateixa web, pantalles diferents', 'La misma web, pantallas diferentes')}</text>`);
  }
};
if (typeof TANI !== 'undefined') Object.assign(TANI, TANI_WEB);
