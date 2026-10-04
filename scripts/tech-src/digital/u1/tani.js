/* Tech Digital · unitat 1 «Segur a la xarxa» · animacions de teoria (TANI)
   Dibuixos propis de Numi (SVG de 320 d'ample). Cap marca, app ni web reals: les pantalles i els perfils són inventats.
   d1pass  què fa forta una contrasenya (llargada, varietat)      d1frase  frase de contrasenya amb paraules sense relació
   d1dos   verificació en dos passos (el que saps + el que tens)  d1dades  dades personals i dades que es poden compartir
   d1foto  les pistes del fons d'una foto                          d1rastre l'empremta digital: cada clic deixa una petjada
   d1copia el que es publica es pot copiar (esborrar no ho treu tot) d1norma una norma general → una norma clara
   d1stop  davant d'un desconegut: no contesto, bloquejo i ho explico a un adult */
Object.assign(TANI, (() => {
  // un emoji de Numi (es converteix en la il·lustració 3D) dins d'un grup que porta l'animació
  const em = (x, y, e, fs = 26) => `<text x="${x}" y="${y}" font-size="${fs}" text-anchor="middle">${e}</text>`;
  // un cadenat: obert (vermell) o tancat (verd)
  const lock = (x, y, open, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-7 -2V-9a7 7 0 0 1 14 0${open ? 'V-14' : 'V-2'}" fill="none" stroke="${open ? '#C94A4A' : '#1E8A50'}" stroke-width="3.4" stroke-linecap="round" ${open ? 'transform="translate(5 -4) rotate(18)"' : ''}/><rect x="-10" y="-3" width="20" height="16" rx="4" fill="${open ? '#EF5A5A' : '#3CC47C'}"/><circle cy="4" r="2.6" fill="#fff"/></g>`;
  // una barra que s'omple (SMIL), sincronitzada amb l'entrada del grup
  const bar = (x, y, w, f, col, t) => `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="#EEF1F8"/><rect x="${x}" y="${y}" width="0" height="10" rx="5" fill="${col}"><animate attributeName="width" values="0;0;${(w * f).toFixed(0)};${(w * f).toFixed(0)}" keyTimes="0;.06;.24;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/></rect>`;
  // un mòbil petit
  const phone = (x, y, w, h, inner = '') => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="14" fill="#1B1F2E"/><rect x="5" y="12" width="${w - 10}" height="${h - 24}" rx="6" fill="#F3F6FF"/><rect x="${w / 2 - 9}" y="5" width="18" height="3" rx="1.5" fill="#4A5170"/>${inner}</g>`;
  return {
    // què fa forta una contrasenya: tres contrasenyes, cada vegada més llargues i variades
    d1pass() {
      const rows = [['gat', 'gato', .2, '#EF5A5A', L('Molt feble', 'Muy débil'), 1], ['gat2015', 'gato2015', .42, '#F08A24', L('Feble', 'Débil'), 1], ['Cactus-Núvol-Sopa-Trompeta', 'Cactus-Nube-Sopa-Trompeta', 1, '#1E8A50', L('Molt forta', 'Muy fuerte'), 0]];
      return tSvg(222, `<text x="160" y="22" text-anchor="middle" class="tat b">${L('Com més llarga i variada, més forta', 'Cuanto más larga y variada, más fuerte')}</text>
        ${rows.map(([ca, es, f, col, lab, open], i) => { const y = 36 + i * 62, t = .3 + i * 1.1;
          return `<g ${tA(t, 'ta-in')}><rect x="12" y="${y}" width="296" height="54" rx="14" fill="#fff" stroke="${i === 2 ? '#A8E0C0' : '#DCE4FA'}" stroke-width="2" filter="url(#bwSh)"/>
            <text x="26" y="${y + 23}" class="tat">${L(ca, es)}</text>${bar(26, y + 33, 170, f, col, t)}<text x="206" y="${y + 43}" class="tat s" fill="${col}" style="fill:${col}">${lab}</text>${lock(284, y + 18, open)}</g>`; }).join('')}`);
    },
    // frase de contrasenya: quatre paraules que no tenen res a veure i una imatge absurda per recordar-les
    d1frase() {
      const w = [['🐢', L('tortuga', 'tortuga')], ['🍊', L('taronja', 'naranja')], ['🚀', L('coet', 'cohete')], ['🎈', L('globus', 'globo')]];
      return tSvg(232, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Quatre paraules sense relació', 'Cuatro palabras sin relación')}</text>
        ${w.map(([e, t], i) => { const x = 14 + i * 75; return `<g ${tA(.3 + i * .45)}><rect x="${x}" y="32" width="67" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${em(x + 33.5, 70, e, 28)}<text x="${x + 33.5}" y="96" text-anchor="middle" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(2.2, 'ta-in')}><path d="M160 112v14" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round"/><path d="M152 120l8 8l8 -8" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.5, 'ta-in')}><rect x="12" y="134" width="296" height="52" rx="14" fill="#fff" stroke="#A8E0C0" stroke-width="2.5"/><text x="26" y="156" class="tat">${L('tortuga taronja coet globus', 'tortuga naranja cohete globo')}</text>${bar(26, 166, 190, 1, '#1E8A50', 2.5)}<text x="224" y="176" class="tat s" style="fill:#1E8A50">${L('Molt forta', 'Muy fuerte')}</text>${lock(288, 152, 0)}</g>
        <g ${tA(3.3, 'ta-fade')}><text x="160" y="210" text-anchor="middle" class="tat s">${L('Imagina una tortuga taronja que vola en coet', 'Imagina una tortuga naranja que vuela en cohete')}</text><text x="160" y="226" text-anchor="middle" class="tat s">${L('amb un globus: així no se t\'oblida!', 'con un globo: ¡así no se te olvida!')}</text></g>`);
    },
    // verificació en dos passos: la contrasenya (el que saps) + un codi al mòbil (el que tens)
    d1dos() {
      const notif = `<g ${tA(1.7)}><rect x="10" y="40" width="80" height="58" rx="10" fill="#fff" stroke="#3D7BF4" stroke-width="2"/><text x="50" y="62" text-anchor="middle" class="tat s">${L('El teu codi', 'Tu código')}</text><text x="50" y="86" text-anchor="middle" class="tat b" style="fill:#2F5BEA">482 615</text></g>`;
      return tSvg(224, `<g ${tA(.2, 'ta-in')}><rect x="12" y="14" width="186" height="172" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="12" y="14" width="186" height="34" rx="18" fill="#2F5BEA"/><rect x="12" y="34" width="186" height="14" fill="#2F5BEA"/><text x="105" y="37" text-anchor="middle" class="tat w">${L('Entra al teu compte', 'Entra en tu cuenta')}</text></g>
        <g ${tA(.6, 'ta-in')}><text x="26" y="70" class="tat s">1 · ${L('Contrasenya', 'Contraseña')}</text><rect x="26" y="77" width="158" height="30" rx="9" fill="#F3F6FF" stroke="#C9D6FB" stroke-width="2"/><text x="38" y="98" class="tat">••••••••••</text></g>
        <g ${tA(1.1)}>${lock(168, 88, 0, .8)}</g>
        <g ${tA(2.3, 'ta-in')}><text x="26" y="128" class="tat s">2 · ${L('Codi del mòbil', 'Código del móvil')}</text><rect x="26" y="135" width="158" height="30" rx="9" fill="#F3F6FF" stroke="#C9D6FB" stroke-width="2"/><text x="38" y="156" class="tat">482 615</text></g>
        <g ${tA(2.9)}>${lock(168, 146, 0, .8)}</g>
        ${phone(214, 18, 100, 168, notif)}
        <g ${tA(2.2, 'ta-fade')}><path d="M222 110 Q200 150 190 150" fill="none" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/></g>
        <g ${tA(3.4)}><rect x="12" y="192" width="296" height="28" rx="14" fill="#3CC47C"/><text x="160" y="211" text-anchor="middle" class="tat w s">${L('Dos panys: el que saps i el que tens', 'Dos candados: lo que sabes y lo que tienes')}</text></g>`);
    },
    // dades personals (es guarden) i coses que sí que es poden compartir
    d1dades() {
      const rows = [['👤', L('Nom i cognoms', 'Nombre y apellidos')], ['🏫', L("L'escola", 'El colegio')], ['🗺️', L("L'adreça de casa", 'La dirección de casa')], ['🔢', L('El telèfon', 'El teléfono')], ['🧭', L('On ets ara', 'Dónde estás ahora')]];
      const ok = [['🖍️', L('Color preferit', 'Color favorito')], ['🐢', L('Animal preferit', 'Animal favorito')], ['✏️', L('Un dibuix', 'Un dibujo')]];
      return tSvg(226, `<text x="104" y="20" text-anchor="middle" class="tat b">${L('Dades personals', 'Datos personales')}</text><text x="262" y="20" text-anchor="middle" class="tat b" style="fill:#1E8A50">${L('Es pot dir', 'Se puede decir')}</text>
        <rect x="10" y="30" width="190" height="188" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${rows.map(([e, t], i) => { const y = 38 + i * 35; return `<g ${tA(.3 + i * .35, 'ta-in')}><rect x="18" y="${y}" width="174" height="29" rx="9" fill="#F3F6FF"/>${em(34, y + 22, e, 18)}<text x="52" y="${y + 20}" class="tat s">${t}</text></g>`; }).join('')}
        <g ${tA(2.3)}><rect x="10" y="30" width="190" height="188" rx="16" fill="#2F5BEA" fill-opacity=".08" stroke="#2F5BEA" stroke-width="3"/><circle cx="192" cy="34" r="19" fill="#2F5BEA" stroke="#fff" stroke-width="3"/><g transform="translate(192 32) scale(1.05)"><path d="M-7 -2V-9a7 7 0 0 1 14 0V-2" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><rect x="-10" y="-3" width="20" height="16" rx="4" fill="#fff"/><circle cy="4" r="2.6" fill="#2F5BEA"/></g></g>
        ${ok.map(([e, t], i) => { const y = 34 + i * 62; return `<g ${tA(2.9 + i * .3, 'ta-pop')}><rect x="210" y="${y}" width="104" height="54" rx="14" fill="#E7F7EE" stroke="#A8E0C0" stroke-width="2"/>${em(232, y + 34, e, 20)}<text x="248" y="${y + 24}" class="tat s">${t.split(' ')[0]}</text><text x="248" y="${y + 41}" class="tat s">${t.split(' ').slice(1).join(' ')}</text></g>`; }).join('')}`);
    },
    // una foto pot dir on vius: el carrer, el número de la porta i l'uniforme de l'escola
    d1foto() {
      const kid = `<g transform="translate(120 140)"><path d="M-6 -20v20M6 -20v20" stroke="#34405E" stroke-width="8" stroke-linecap="round"/><rect x="-17" y="-66" width="34" height="50" rx="12" fill="#8B5CF6"/><circle cx="-6" cy="-50" r="6" fill="#FFD54A" stroke="#fff" stroke-width="1.5"/><path d="M-17 -58l-10 22M17 -58l10 22" stroke="#8B5CF6" stroke-width="9" stroke-linecap="round"/><circle cy="-82" r="18" fill="#FFD9B8" stroke="#8E5A3A" stroke-width="2"/><path d="M-18 -86q18 -26 36 0q-5 -14 -18 -14q-13 0 -18 14z" fill="#6B3F20"/><circle cx="-6" cy="-82" r="2.4" fill="#2B1A38"/><circle cx="6" cy="-82" r="2.4" fill="#2B1A38"/><path d="M-6 -74q6 5 12 0" stroke="#2B1A38" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>`;
      const pic = `<rect x="28" y="22" width="190" height="128" rx="6" fill="#BFE6FF"/><path d="M28 120h190v30H28z" fill="#9AD27A"/><path d="M28 132h190v18H28z" fill="#D8C6A4"/>
        <g transform="translate(160 70)"><rect x="0" y="12" width="50" height="50" fill="#F6E3C2" stroke="#B48A55" stroke-width="2"/><path d="M-6 14L25 -10L56 14Z" fill="#E0664F" stroke="#A9302A" stroke-width="2"/><rect x="16" y="32" width="18" height="30" rx="2" fill="#9A6538"/><rect x="18" y="20" width="14" height="10" rx="2" fill="#fff" stroke="#9A6538" stroke-width="1.5"/><text x="25" y="29" text-anchor="middle" style="font:900 9px Lexend,system-ui,sans-serif;fill:#14204A">12</text></g>
        <g transform="translate(62 50)"><rect x="-2" y="24" width="4" height="58" fill="#7A8296"/><rect x="-31" y="2" width="62" height="24" rx="4" fill="#2F7A4A" stroke="#fff" stroke-width="2"/><text x="0" y="19" text-anchor="middle" style="font:800 10.5px Lexend,system-ui,sans-serif;fill:#fff">${L('C/ dels Pins', 'C/ de los Pinos')}</text></g>${kid}`;
      const spots = [[62, 64, 1], [185, 95, 2], [114, 90, 3]], labs = [L('Carrer', 'Calle'), L('Número', 'Número'), L('Uniforme', 'Uniforme')];
      return tSvg(226, `<g ${tA(.1, 'ta-fade')}><rect x="18" y="12" width="210" height="166" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${pic}<text x="123" y="170" text-anchor="middle" class="tat s">${L('Una foto per publicar', 'Una foto para publicar')}</text></g>
        ${spots.map(([x, y, n], i) => `<g ${tA(1 + i * .8)}><circle cx="${x}" cy="${y}" r="${n === 1 ? 33 : 20}" fill="none" stroke="#F2B21B" stroke-width="3.5"/><circle cx="${x + (n === 1 ? 30 : 16)}" cy="${y - (n === 1 ? 22 : 16)}" r="10" fill="#EF5A5A"/><text x="${x + (n === 1 ? 30 : 16)}" y="${y - (n === 1 ? 17 : 11)}" text-anchor="middle" class="tat w s">${n}</text></g>`).join('')}
        ${labs.map((t, i) => `<g ${tA(1.2 + i * .8, 'ta-in')}><circle cx="240" cy="${40 + i * 44}" r="10" fill="#EF5A5A"/><text x="240" y="${45 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="254" y="${45 + i * 44}" class="tat s">${t}</text></g>`).join('')}
        <text x="160" y="208" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('Abans de publicar, mira el fons!', '¡Antes de publicar, mira el fondo!')}</text>`);
    },
    // l'empremta digital: en Bit camina i cada cosa que fa a internet deixa una petjada
    d1rastre() {
      const path = 'M22 184 C80 184 70 122 128 122 S190 80 250 86 S292 72 298 68';
      const steps = [[46, 180], [84, 160], [120, 126], [160, 110], [200, 92], [240, 86], [276, 76]];
      const ico = [[50, 116, '📷', L('una foto', 'una foto')], [128, 72, '💬', L('un comentari', 'un comentario')], [210, 50, '😍', L("un m'agrada", 'un me gusta')], [268, 128, '🔍', L('una cerca', 'una búsqueda')]];
      const icon = (e) => e === '📷' ? `<rect x="-11" y="-8" width="22" height="16" rx="4" fill="#3D7BF4"/><circle r="5" fill="#fff"/><circle r="2.6" fill="#3D7BF4"/><rect x="-5" y="-11" width="8" height="4" rx="1.5" fill="#3D7BF4"/>` : e === '💬' ? `<path d="M-11 -8h22a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-12l-6 5v-5h-4a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3z" fill="#F08A24"/><path d="M-6 -2h12M-6 3h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` : `<text y="9" font-size="24" text-anchor="middle">${e}</text>`;
      return tSvg(222, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Cada clic deixa una petjada', 'Cada clic deja una huella')}</text>
        <path d="${path}" fill="none" stroke="#DCE4FA" stroke-width="16" stroke-linecap="round"/>
        ${steps.map(([x, y], i) => `<g ${tA(.25 + i * .45, 'ta-fade')} transform="translate(${x} ${y}) rotate(${-25 - i * 4})"><ellipse cx="-5" cy="0" rx="4" ry="6.5" fill="#2F5BEA"/><ellipse cx="5" cy="-6" rx="4" ry="6.5" fill="#2F5BEA" opacity=".75"/></g>`).join('')}
        ${ico.map(([x, y, e, t], i) => `<g ${tA(.7 + i * .8)}><circle cx="${x}" cy="${y}" r="21" fill="#fff" stroke="#C9D6FB" stroke-width="2.5" filter="url(#bwSh)"/><g transform="translate(${x} ${y})">${icon(e)}</g><text x="${x}" y="${y + 37}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${path}" keyPoints="0;1;1" keyTimes="0;.75;1" calcMode="linear"/>${tBitMini(0, 4, 2, .36)}</g>
        <text x="160" y="214" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('A internet no hi ha marea que ho esborri', 'En internet no hay marea que lo borre')}</text>`);
    },
    // el que publiques es pot copiar: l'original s'esborra, però les captures es queden
    d1copia() {
      const post = (big) => `<rect x="12" y="${big ? 30 : 22}" width="${big ? 66 : 46}" height="${big ? 50 : 34}" rx="8" fill="#FFE9C7"/><text x="${big ? 45 : 35}" y="${big ? 64 : 46}" font-size="${big ? 26 : 18}" text-anchor="middle">😍</text>`;
      const small = (x, y, t) => `<g ${tA(t, 'ta-pop')}>${phone(x, y, 70, 96, post(false))}<g transform="translate(${x + 56} ${y + 6})"><circle r="11" fill="#F08A24"/><path d="M-5 -2h10v7h-10z M-2 -2v-3h4v3" fill="none" stroke="#fff" stroke-width="2"/></g></g>`;
      return tSvg(232, `<g ${tA(.2, 'ta-in')}>${phone(14, 22, 90, 150, post(true))}<rect x="26" y="86" width="66" height="10" rx="5" fill="#DCE4FA"/><rect x="26" y="102" width="46" height="10" rx="5" fill="#DCE4FA"/><text x="59" y="190" text-anchor="middle" class="tat s">${L('Original', 'Original')}</text></g>
        ${small(128, 8, 1.2)}${small(232, 8, 1.6)}${small(180, 104, 2)}
        <g ${tA(1.1, 'ta-fade')}><path d="M108 80 Q120 60 130 60M108 100 Q170 90 224 60M108 120 Q140 150 178 160" fill="none" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 6" class="ta-dash"/></g>
        <g ${tA(2.8)}><rect x="16" y="24" width="86" height="146" rx="12" fill="#F3F6FF" fill-opacity=".92" stroke="#EF5A5A" stroke-width="3" stroke-dasharray="7 5"/><text x="59" y="96" text-anchor="middle" class="tat s" style="fill:#C94A4A">${L('Esborrat', 'Borrado')}</text><g transform="translate(59 120)"><path d="M-10 -8h20l-2 20h-16z" fill="#EF5A5A"/><rect x="-13" y="-13" width="26" height="5" rx="2" fill="#C94A4A"/><path d="M-4 -4v12M4 -4v12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g></g>
        <g ${tA(3.5, 'ta-in')}><rect x="12" y="206" width="296" height="24" rx="12" fill="#14204A"/><text x="160" y="223" text-anchor="middle" class="tat w s">${L("L'has esborrat… però les captures hi són", 'Lo has borrado… pero las capturas siguen ahí')}</text></g>`);
    },
    // davant d'un desconegut que demana dades, fotos o secrets: no contesto, bloquejo i ho explico a un adult
    d1stop() {
      const bub = (y, w, t) => `<rect x="9" y="${y}" width="${w}" height="24" rx="9" fill="#FFE1E1"/><text x="${9 + w / 2}" y="${y + 17}" text-anchor="middle" style="font:700 11px Lexend,system-ui,sans-serif;fill:#8A2B2B">${t}</text>`;
      const msg = bub(22, 62, L('Foto? 🤫', '¿Foto? 🤫')) + bub(54, 66, L('On vius?', '¿Dónde?'));
      const steps = [['stop', [L('No contesto', 'No contesto')], '#EF5A5A', '#FDEBEB'], ['🔒', [L('El bloquejo', 'Lo bloqueo')], '#2F5BEA', '#EAF0FF'], ['🧑', [L('Ho explico', 'Se lo cuento'), L('a un adult', 'a un adulto')], '#1E8A50', '#E7F7EE']];
      return tSvg(226, `<g ${tA(.1, 'ta-in')}>${phone(12, 14, 84, 150, msg)}<text x="54" y="184" text-anchor="middle" class="tat s">${L('Un desconegut', 'Un desconocido')}</text></g>
        ${steps.map(([ic, t, col, bg], i) => { const y = 14 + i * 56, cy = y + 24;
          const icon = ic === 'stop' ? `<circle cx="130" cy="${cy}" r="15" fill="#EF5A5A"/><rect x="121" y="${cy - 3}" width="18" height="6" rx="3" fill="#fff"/>` : em(130, cy + 9, ic, 24);
          return `<g ${tA(.9 + i * .8, 'ta-in')}><rect x="106" y="${y}" width="204" height="48" rx="14" fill="${bg}" stroke="${col}" stroke-width="2.5"/>${icon}${t.map((l, k) => `<text x="154" y="${cy + 5 + (k - (t.length - 1) / 2) * 17}" class="tat" style="font-weight:800">${k ? '' : (i + 1) + '. '}${l}</text>`).join('')}</g>`; }).join('')}
        <g ${tA(3.4, 'ta-pop')}><rect x="36" y="194" width="248" height="28" rx="14" fill="#14204A"/><text x="160" y="213" text-anchor="middle" class="tat w s">${L('Explicar-ho és el que cal fer', 'Contarlo es lo que hay que hacer')}</text></g>`);
    },
    // una bona norma: de general i en negatiu a concreta i en positiu
    d1norma() {
      const box = (y, h, col, bg, mark, lines, t) => `<g ${tA(t, 'ta-in')}><rect x="14" y="${y}" width="292" height="${h}" rx="14" fill="${bg}" stroke="${col}" stroke-width="2.5"/><circle cx="38" cy="${y + h / 2}" r="13" fill="${col}"/><text x="38" y="${y + h / 2 + 5}" text-anchor="middle" class="tat w">${mark}</text>${lines.map((l, i) => `<text x="60" y="${y + h / 2 + 5 + (i - (lines.length - 1) / 2) * 18}" class="tat s">${l}</text>`).join('')}</g>`;
      const chips = [L('Concreta', 'Concreta'), L('En positiu', 'En positivo'), L('Curta', 'Corta')];
      return tSvg(222, `${box(12, 44, '#EF5A5A', '#FDEBEB', '✗', [L('«Sigues bo a internet»', '«Sé bueno en internet»')], .2)}
        <g ${tA(1, 'ta-fade')}><text x="160" y="76" text-anchor="middle" class="tat s" style="fill:#5A6480">${L('Què vol dir, exactament?', '¿Qué quiere decir, exactamente?')}</text></g>
        <g ${tA(1.5, 'ta-in')}><path d="M160 84v12" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round"/><path d="M152 90l8 8l8 -8" fill="none" stroke="#2F5BEA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${box(104, 58, '#3CC47C', '#E7F7EE', '✓', [L('«Abans de publicar una foto', '«Antes de publicar una foto'), L("d'algú, li demano permís»", 'de alguien, le pido permiso»')], 2)}
        ${chips.map((c, i) => `<g ${tA(2.8 + i * .35)}><rect x="${12 + i * 100}" y="178" width="96" height="30" rx="15" fill="#2F5BEA"/><text x="${60 + i * 100}" y="198" text-anchor="middle" class="tat w s">${c}</text></g>`).join('')}`);
    }
  };
})());
