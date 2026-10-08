/* Tech Web · unitat 3 «Imatges i enllaços» · animacions de teoria (TANI)
   L'anatomia de <img>, el navegador que va a buscar la imatge, per què importa l'alt, com funciona un enllaç, el salt
   a un id, els drets d'autor, les parts d'una cita i l'esbós d'una fitxa. Dibuixos propis: les imatges són les de Numi
   (img/tech/web, img/chars). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const e = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // codi amb colors (com a l'editor): parts [[text, color], …] escrites una darrere l'altra en lletra de màquina
  const C = { tag: '#7FB8FF', at: '#FFB86B', val: '#7DE3A6', txt: '#E8EEFF' };
  const MONO = 'font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700"';
  const code = (x, y, parts, fs = 14) => { let cx = x; return parts.map(([t, c]) => { const s = `<text x="${cx.toFixed(1)}" y="${y}" ${MONO} font-size="${fs}" fill="${c}">${e(t)}</text>`; cx += t.length * fs * .6; return s; }).join(''); };
  const chip = (x, y, w, parts, fs = 13) => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="#14204A"/>${code(x + 9, y + 18, parts, fs)}`;
  // una finestra de navegador amb la barra de l'adreça
  const win = (x, y, w, h, url, id = '') => `<g ${id}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#C9D4F2" stroke-width="2" filter="url(#bwSh)"/>
    <path d="M${x} ${y + 12}q0 -12 12 -12h${w - 24}q12 0 12 12v14h-${w}z" fill="#E3E8F6"/><circle cx="${x + 12}" cy="${y + 13}" r="3.5" fill="#EF5A5A"/><circle cx="${x + 23}" cy="${y + 13}" r="3.5" fill="#FFC531"/><circle cx="${x + 34}" cy="${y + 13}" r="3.5" fill="#3CC47C"/>
    ${url != null ? `<rect x="${x + 44}" y="${y + 4}" width="${w - 52}" height="18" rx="9" fill="#fff"/>` : ''}</g>`;
  const urlTxt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" font-size="13" font-weight="600" fill="#5B6B95" font-family="Lexend,system-ui,sans-serif" ${extra}>${e(t)}</text>`;
  const img = (src, x, y, w, h, extra = '') => `<image href="${src}" x="${x}" y="${y}" width="${w}" height="${h}" ${extra}/>`;
  // opacitat a trossos (SMIL): visible entre a i b (fraccions de 5,5 s)
  const vis = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${(a + .01).toFixed(3)};${b};${(b + .01).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const pill = (x, y, w, txt, col) => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="14" fill="${col}"/><text x="${x + w / 2}" y="${y + 19}" text-anchor="middle" class="tat w s">${txt}</text>`;
  const hand = `<g><path d="M0 0q-3 -14 3 -16q5 -1 6 6l1 8q6 -3 9 1q5 -2 7 3q5 -1 6 5v10q0 10 -9 14h-14q-7 -3 -11 -12l-6 -10q-2 -5 3 -6q3 0 5 4z" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2" stroke-linejoin="round"/></g>`;
  const tick = (x, y, ok) => ok ? `<circle cx="${x}" cy="${y}" r="11" fill="#3CC47C"/><path d="M${x - 5} ${y}l4 4l7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x}" cy="${y}" r="11" fill="#EF5A5A"/><path d="M${x - 4.5} ${y - 4.5}l9 9M${x + 4.5} ${y - 4.5}l-9 9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const W = 'img/tech/web/';

  return {
    // l'etiqueta <img> per dins: l'etiqueta, l'atribut src (on és el fitxer) i l'atribut alt (què hi ha)
    w3attr() {
      const alt = L('Un gat', 'Un gato');
      const line = (y, t) => `<rect x="14" y="${y - 19}" width="182" height="26" rx="7" fill="#FFFFFF" fill-opacity=".13" ${tA(t, 'ta-fade')}/>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="8" width="196" height="96" rx="14" fill="#14204A" filter="url(#bwSh)"/></g>
        ${line(34, .8)}${line(62, 1.5)}${line(90, 2.2)}
        <g ${tA(.3, 'ta-fade')}>${code(20, 34, [['<img', C.tag]])}${code(36, 62, [['src', C.at], ['=', C.txt], ['"gat.svg"', C.val]])}${code(36, 90, [['alt', C.at], ['=', C.txt], [`"${alt}"`, C.val], ['>', C.tag]])}</g>
        <g ${tA(.9)}>${pill(212, 13, 100, L('etiqueta', 'etiqueta'), '#3D7BF4')}</g>
        <g ${tA(1.6)}>${pill(212, 41, 100, L('on és?', '¿dónde está?'), '#F08A24')}</g>
        <g ${tA(2.3)}>${pill(212, 69, 100, L('què és?', '¿qué es?'), '#2FA866')}</g>
        <g ${tA(3, 'ta-in')}>${win(8, 116, 304, 92, '')}${urlTxt(60, 133, 'animalari.numi')}</g>
        <g ${tA(3.5)}>${img(W + 'gat.svg', 28, 144, 70, 60)}</g>
        <g ${tA(3.9, 'ta-in')}><text x="112" y="168" class="tat s">${L('El navegador hi posa', 'El navegador pone')}</text><text x="112" y="188" class="tat s">${L('la imatge del fitxer', 'la imagen del archivo')}</text></g>`);
    },
    // el navegador llegeix src, demana el fitxer al servidor i el dibuixa a la pàgina
    w3src() {
      const req = 'M160 92 C 190 70, 212 70, 236 86', back = 'M236 120 C 212 140, 190 140, 160 122';
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${win(8, 14, 152, 186, '')}${urlTxt(56, 31, 'animalari.numi')}
          <rect x="20" y="46" width="90" height="12" rx="6" fill="#14204A"/><rect x="20" y="66" width="124" height="7" rx="3.5" fill="#D5DCEE"/><rect x="20" y="78" width="100" height="7" rx="3.5" fill="#D5DCEE"/>
          <rect x="26" y="96" width="100" height="76" rx="10" fill="#F3F6FF" stroke="#B8C4E6" stroke-width="2" stroke-dasharray="6 5"/></g>
        <g ${tA(.5, 'ta-pop')}>${chip(10, 168, 148, [['src', C.at], ['=', C.txt], ['"tortuga.svg"', C.val]], 13)}</g>
        <g ${tA(.1, 'ta-in')}><rect x="244" y="44" width="66" height="122" rx="10" fill="#2A3557" filter="url(#bwSh)"/>${[0, 1, 2, 3].map(k => `<rect x="252" y="${54 + k * 26}" width="50" height="18" rx="4" fill="#3B4A73"/><circle cx="292" cy="${63 + k * 26}" r="3" fill="${k % 2 ? '#3CC47C' : '#7FD3F7'}"><animate attributeName="opacity" values="1;.2;1" dur="${1 + k * .3}s" repeatCount="indefinite"/></circle>`).join('')}
          <text x="277" y="186" text-anchor="middle" class="tat s">${L('servidor', 'servidor')}</text></g>
        <path d="${req}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 6" class="ta-dash" opacity=".55"/>
        <path d="${back}" fill="none" stroke="#2FA866" stroke-width="3" stroke-dasharray="6 6" class="ta-dash" opacity=".55"/>
        <g opacity="0">${vis(.18, .42)}<animateMotion dur="${D}s" repeatCount="indefinite" path="${req}" keyPoints="0;0;1;1" keyTimes="0;.18;.4;1" calcMode="linear"/>
          <g transform="translate(-14 -10)"><rect width="28" height="20" rx="3" fill="#FFF3C4" stroke="#B46A00" stroke-width="2"/><path d="M0 1l14 10l14 -10" fill="none" stroke="#B46A00" stroke-width="2"/></g></g>
        <g opacity="0">${vis(.18, .5)}<text x="198" y="62" text-anchor="middle" class="tat s" fill="#2F5BEA">${L('1. demana', '1. pide')}</text></g>
        <g opacity="0">${vis(.46, .7)}<animateMotion dur="${D}s" repeatCount="indefinite" path="${back}" keyPoints="0;0;1;1" keyTimes="0;.46;.68;1" calcMode="linear"/>
          ${img(W + 'tortuga.svg', -22, -16, 44, 30)}</g>
        <g opacity="0">${vis(.46, .94)}<text x="198" y="158" text-anchor="middle" class="tat s" fill="#1E8A50">${L('2. envia', '2. envía')}</text></g>
        <g opacity="0">${vis(.7, .95)}${img(W + 'tortuga.svg', 30, 100, 92, 68)}</g>`);
    },
    // per què importa l'alt: surt quan la imatge no es carrega i el lector de pantalla el llegeix en veu alta
    w3alt() {
      const a = L('Una tortuga verda', 'Una tortuga verde');
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="148" height="160" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <text x="82" y="30" text-anchor="middle" class="tat s">${L('Si no es carrega', 'Si no se carga')}</text></g>
        <g>${vis(0, .3)}${img(W + 'tortuga.svg', 26, 44, 112, 82)}</g>
        <g opacity="0">${vis(.3, .96)}<rect x="22" y="46" width="120" height="84" rx="8" fill="#F3F6FF" stroke="#B8C4E6" stroke-width="2" stroke-dasharray="6 5"/>
          <path d="M30 56h18v14h-18z M33 66l5 -5l4 4l3 -3l3 4" fill="none" stroke="#9AA6C8" stroke-width="2" stroke-linejoin="round"/>
          <text x="82" y="96" text-anchor="middle" class="tat s">${L('Una tortuga', 'Una tortuga')}</text><text x="82" y="114" text-anchor="middle" class="tat s">${L('verda', 'verde')}</text></g>
        <g ${tA(.1, 'ta-in')}><rect x="164" y="8" width="148" height="160" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          <text x="238" y="30" text-anchor="middle" class="tat s">${L('Lector de pantalla', 'Lector de pantalla')}</text></g>
        <g ${tA(1.4, 'ta-pop')}>${img('img/ic/headphones.webp', 180, 112, 52, 52)}</g>
        <g ${tA(1.8, 'ta-pop')}><rect x="174" y="38" width="128" height="66" rx="14" fill="#EAF0FF" stroke="#3D7BF4" stroke-width="2"/><path d="M196 103l-4 10l14 -10" fill="#EAF0FF" stroke="#3D7BF4" stroke-width="2" stroke-linejoin="round"/><rect x="192" y="100" width="16" height="4" fill="#EAF0FF"/>
          <text x="238" y="57" text-anchor="middle" class="tat s">${L('«Imatge:', '«Imagen:')}</text><text x="238" y="75" text-anchor="middle" class="tat s">${L('una tortuga', 'una tortuga')}</text><text x="238" y="93" text-anchor="middle" class="tat s">${L('verda»', 'verde»')}</text></g>
        <g ${tA(2.2, 'ta-fade')}>${[0, 1, 2].map(k => `<path d="M${242 + k * 12} ${122 - k * 4}q8 14 0 ${28 + k * 8}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round"><animate attributeName="opacity" values=".2;1;.2" dur="1.2s" begin="${k * .2}s" repeatCount="indefinite"/></path>`).join('')}</g>
        <g ${tA(.4, 'ta-in')}>${chip(52, 178, 216, [['alt', C.at], ['=', C.txt], [`"${a}"`, C.val]], 13.5)}</g>`);
    },
    // un enllaç: el dit toca «La tortuga» i el navegador va a la pàgina tortuga.html
    w3link() {
      const A = `<g>${vis(0, .46)}${urlTxt(66, 29, 'animalari.numi')}
          <text x="34" y="64" class="tat b">L'Animalari</text><text x="34" y="88" class="tat s" fill="#5B6B95">${L('Tria un animal:', 'Elige un animal:')}</text>
          <circle cx="40" cy="104" r="3.5" fill="#14204A"/><text x="52" y="109" class="tat" fill="#1F5BD8">${L('La tortuga', 'La tortuga')}</text><path d="M52 113h${L('La tortuga', 'La tortuga').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          <circle cx="40" cy="128" r="3.5" fill="#14204A"/><text x="52" y="133" class="tat" fill="#1F5BD8">${L('La guineu', 'El zorro')}</text><path d="M52 137h${L('La guineu', 'El zorro').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          <circle cx="40" cy="152" r="3.5" fill="#14204A"/><text x="52" y="157" class="tat" fill="#1F5BD8">${L('El lloro', 'El loro')}</text><path d="M52 161h${L('El lloro', 'El loro').length * 8.6}" stroke="#1F5BD8" stroke-width="2"/>
          ${chip(34, 172, 168, [['href', C.at], ['=', C.txt], ['"tortuga.html"', C.val]], 13)}</g>`;
      const B = `<g opacity="0">${vis(.48, .97)}${urlTxt(66, 29, 'animalari.numi/tortuga.html')}
          <text x="34" y="64" class="tat b">${L('La tortuga', 'La tortuga')}</text>${img(W + 'tortuga.svg', 34, 76, 120, 88)}
          <text x="172" y="110" class="tat s">${L('Viu molts', 'Vive muchos')}</text><text x="172" y="128" class="tat s">${L('anys.', 'años.')}</text>
          <text x="34" y="190" class="tat s" fill="#1F5BD8">← ${L('Torna a la portada', 'Vuelve a la portada')}</text></g>`;
      return tSvg(214, `${win(16, 8, 288, 198, '')}${A}${B}
        <g opacity="0">${vis(.36, .46)}<circle cx="96" cy="104" r="10" fill="#3D7BF4" opacity=".25"><animate attributeName="r" values="6;18" dur=".6s" repeatCount="indefinite"/></circle></g>
        <g>${vis(.1, .47)}<animateTransform attributeName="transform" type="translate" values="250 200;250 200;96 108;96 108;96 108" keyTimes="0;.12;.32;.47;1" dur="${D}s" repeatCount="indefinite"/>${hand}</g>`);
    },
    // enllaç intern: l'índex té href="#menja" i la pàgina salta fins a l'element amb id="menja"
    w3jump() {
      const page = `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -232;0 -232;0 0" keyTimes="0;.34;.46;.95;1" dur="${D}s" repeatCount="indefinite"/>
          <text x="140" y="62" class="tat b">${L('La balena', 'La ballena')}</text>
          <text x="140" y="86" class="tat s" fill="#1F5BD8">${L('On viu', 'Dónde vive')}</text><path d="M140 90h${L('On viu', 'Dónde vive').length * 7.6}" stroke="#1F5BD8" stroke-width="1.8"/>
          <text x="140" y="108" class="tat s" fill="#1F5BD8">${L('Què menja', 'Qué come')}</text><path d="M140 112h${L('Què menja', 'Qué come').length * 7.6}" stroke="#1F5BD8" stroke-width="1.8"/>
          ${img(W + 'balena.svg', 140, 122, 150, 94)}
          <text x="140" y="240" class="tat">${L('On viu', 'Dónde vive')}</text>${[0, 1, 2].map(k => `<rect x="140" y="${252 + k * 14}" width="${[150, 126, 140][k]}" height="7" rx="3.5" fill="#D5DCEE"/>`).join('')}
          <rect x="132" y="276" width="168" height="34" rx="8" fill="#FFC531" opacity="0"><animate attributeName="opacity" values="0;0;.45;0;0" keyTimes="0;.46;.52;.7;1" dur="${D}s" repeatCount="indefinite"/></rect>
          <text x="140" y="300" class="tat">${L('Què menja', 'Qué come')}</text>${[0, 1, 2, 3].map(k => `<rect x="140" y="${312 + k * 14}" width="${[146, 120, 150, 90][k]}" height="7" rx="3.5" fill="#D5DCEE"/>`).join('')}
          <text x="140" y="396" class="tat">${L('Fonts', 'Fuentes')}</text></g>`;
      return tSvg(214, `<defs><clipPath id="w3jc"><rect x="126" y="34" width="184" height="172" rx="4"/></clipPath></defs>
        ${win(122, 8, 192, 200, '')}${urlTxt(170, 25, 'balena.html')}
        <g clip-path="url(#w3jc)">${page}</g>
        <g>${vis(.08, .4)}<animateTransform attributeName="transform" type="translate" values="290 210;290 210;${152 + L('Què menja', 'Qué come').length * 3} 112;${152 + L('Què menja', 'Qué come').length * 3} 112" keyTimes="0;.1;.28;1" dur="${D}s" repeatCount="indefinite"/>${hand}</g>
        <g opacity="0">${vis(.12, .46)}${chip(2, 92, 118, [['href', C.at], ['=', C.txt], ['"#menja"', C.val]], 13)}<path d="M118 105h12" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/></g>
        <g opacity="0">${vis(.4, .52)}<text x="60" y="80" text-anchor="middle" class="tat b" fill="#F08A24">${L('salta!', '¡salta!')}</text></g>
        <g opacity="0">${vis(.5, .95)}${chip(14, 50, 102, [['id', C.at], ['=', C.txt], ['"menja"', C.val]], 13)}<path d="M118 63h12" stroke="#14204A" stroke-width="2.5" stroke-linecap="round"/>
          <text x="64" y="104" text-anchor="middle" class="tat s">${L('el mateix', 'el mismo')}</text><text x="64" y="122" text-anchor="middle" class="tat s">${L('nom, sense #', 'nombre, sin #')}</text></g>`);
    },
    // drets d'autor: qui crea una obra n'és l'autor/a i decideix com es fa servir
    w3copy() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><path d="M66 98l-16 36M148 98l16 36M107 98v38" stroke="#B57536" stroke-width="5" stroke-linecap="round"/>
          <rect x="40" y="8" width="134" height="96" rx="6" fill="#fff" stroke="#B57536" stroke-width="5"/></g>
        <g ${tA(.5, 'ta-pop')}>${img(W + 'guineu.svg', 56, 14, 102, 70)}</g>
        <g ${tA(1.1, 'ta-in')}><text x="107" y="97" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="13" font-weight="700" fill="#7A4A1E">${L('Dibuix: Guida', 'Dibujo: Guida')}</text></g>
        <g ${tA(.3, 'ta-pop')}>${img('img/chars/guida-happy.webp', 180, 38, 72, 72)}</g>
        <g ${tA(1.6, 'ta-pop')}><circle cx="278" cy="40" r="24" fill="#FFC531" stroke="#B46A00" stroke-width="3"/><text x="278" y="50" text-anchor="middle" font-size="28" font-weight="900" fill="#7A4A00" font-family="Lexend,system-ui,sans-serif">©</text></g>
        <g ${tA(1.9, 'ta-in')}><text x="278" y="86" text-anchor="middle" class="tat s">${L("és d'ella", 'es suyo')}</text></g>
        <g ${tA(2.4, 'ta-in')}>${tick(26, 150, true)}<text x="44" y="155" class="tat s">${L('Demanar permís', 'Pedir permiso')}</text></g>
        <g ${tA(2.9, 'ta-in')}>${tick(26, 174, true)}<text x="44" y="179" class="tat s">${L("Dir qui l'ha fet", 'Decir quién lo hizo')}</text></g>
        <g ${tA(3.5, 'ta-in')}><rect x="12" y="186" width="296" height="24" rx="12" fill="#FDEBEB"/>${tick(26, 198, false)}<text x="44" y="203" class="tat s">${L('Copiar-lo i dir que és teu', 'Copiarlo y decir que es tuyo')}</text></g>`);
    },
    // les quatre preguntes d'una cita: qui, què, on i quan
    // les llicències Creative Commons: cada lletra és una condició de l'autor/a
    w3cc() {
      const row = (y, ab, col, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="8" y="${y}" width="304" height="32" rx="10" fill="#fff" stroke="${col}" stroke-width="2" filter="url(#bwSh)"/><circle cx="28" cy="${y + 16}" r="12.5" fill="${col}"/><text x="28" y="${y + 20.5}" text-anchor="middle" class="tat w" style="font-size:11.5px">${ab}</text><text x="50" y="${y + 21}" class="tat s" style="font-size:13px">${txt}</text></g>`;
      return tSvg(236, `<g ${tA(.1, 'ta-in')}><rect x="78" y="6" width="164" height="36" rx="18" fill="#14204A" filter="url(#bwSh)"/><circle cx="102" cy="24" r="11.5" fill="none" stroke="#fff" stroke-width="2.4"/><text x="102" y="28.5" text-anchor="middle" class="tat w" style="font-size:11px">cc</text><text x="122" y="29" class="tat w" style="font-size:13.5px">Creative Commons</text></g>
        ${row(52, 'BY', '#2F5BEA', L("Cal dir qui l'ha feta", 'Hay que decir quién la ha hecho'), .5)}
        ${row(90, 'NC', '#F08A24', L('No la pots fer servir per vendre', 'No la puedes usar para vender'), 1.0)}
        ${row(128, 'SA', '#1FA463', L('Si la canvies, comparteix-la igual', 'Si la cambias, compártela igual'), 1.5)}
        ${row(166, 'ND', '#8B5CF6', L('No la pots canviar', 'No la puedes cambiar'), 2.0)}
        <g ${tA(2.7, 'ta-in')}><rect x="40" y="204" width="240" height="26" rx="13" fill="#FFF6E5" stroke="#F2D7A6" stroke-width="1.6"/><text x="160" y="221.5" text-anchor="middle" class="tat s" style="font-size:13px">«Foto: Marta Puig · CC BY»</text></g>`);
    },
    w3cite() {
      const rows = [[L('Qui?', '¿Quién?'), 'Club de Naturalistes', '#3D7BF4'], [L('Què?', '¿Qué?'), L("«Les tortugues de l'illa»", '«Las tortugas de la isla»'), '#8B5CF6'],
        [L('On?', '¿Dónde?'), 'exemple.numi/tortugues', '#2FA866'], [L('Quan?', '¿Cuándo?'), L("el 3 d'octubre", 'el 3 de octubre'), '#F08A24']];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="118" y="8" width="196" height="198" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><text x="216" y="30" text-anchor="middle" class="tat b">${L('Font', 'Fuente')}</text></g>
        ${rows.map(([q, a, c], i) => `${tCard(6, 42 + i * 42, 104, 34, i + 1, q, .4 + i * .7, c)}
          <g ${tA(.7 + i * .7, 'ta-in')}><path d="M112 ${59 + i * 42}h12" stroke="${c}" stroke-width="3" stroke-linecap="round"/><text x="130" y="${64 + i * 42}" class="tat s"${i === 2 ? ' fill="#1F5BD8" text-decoration="underline"' : ''}>${a}</text></g>`).join('')}
        <g ${tA(3.7, 'ta-wob')}><circle cx="292" cy="26" r="13" fill="#3CC47C"/><path d="M285 26l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // l'esbós en paper de la fitxa (cada caixa, una part) i la pàgina acabada
    w3plan() {
      const box = (y, h, t, lab, extra = '') => `<g ${tA(t, 'ta-in')}><rect x="22" y="${y}" width="112" height="${h}" rx="5" fill="none" stroke="#6A5A3A" stroke-width="2" stroke-dasharray="${extra ? '0' : '5 3'}"/>${extra}<text x="78" y="${y + h / 2 + 5}" text-anchor="middle" class="tat s" fill="#6A5A3A">${lab}</text></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="10" y="8" width="136" height="198" rx="6" fill="#FFF8E6" stroke="#E6CF9A" stroke-width="2" transform="rotate(-1.5 78 107)"/></g>
        ${box(18, 22, .4, 'h1')}${box(46, 52, .9, 'figure', '<path d="M30 52l96 40M126 52l-96 40" stroke="#C9B48A" stroke-width="1.5"/>')}${box(104, 18, 1.4, L('índex #', 'índice #'))}
        ${box(128, 24, 1.9, 'ul + strong')}${box(158, 18, 2.4, 'h2 id')}${box(182, 18, 2.9, L('fonts', 'fuentes'))}
        <g ${tA(3.3, 'ta-in')}><path d="M154 107h20" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round"/><path d="M170 97l10 10-10 10" fill="none" stroke="#2F5BEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.7, 'ta-pop')}>${win(186, 8, 128, 198, null)}
          <text x="196" y="50" class="tat b">${L('El lloro', 'El loro')}</text>${img(W + 'lloro.svg', 196, 58, 80, 60)}<rect x="196" y="122" width="80" height="6" rx="3" fill="#C9D4F2"/>
          <text x="196" y="146" class="tat s" fill="#1F5BD8">${L('Què menja', 'Qué come')}</text>
          ${[0, 1, 2].map(k => `<circle cx="200" cy="${160 + k * 13}" r="2.5" fill="#14204A"/><rect x="207" y="${157 + k * 13}" width="${[70, 84, 60][k]}" height="6" rx="3" fill="#D5DCEE"/>`).join('')}</g>`);
    }
  };
})());
