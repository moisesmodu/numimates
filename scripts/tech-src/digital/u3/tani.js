/* Tech Digital · unitat 3 «Benestar i vida digital» · animacions de teoria (TANI)
   Dibuixos propis de Numi: les trampes que fan que no parem (vídeo següent, notificacions), el son i les pantalles,
   les caixes sorpresa dels videojocs, la veu copiada amb IA, buscar amb paraules clau, l'autoria i el pacte digital de casa.
   Cap marca ni cap app reals. */
{
  const d3e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d3ph = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .16}" fill="#1B1F2E"/><rect x="${x + 4}" y="${y + 8}" width="${w - 8}" height="${h - 16}" rx="${w * .08}" fill="#fff"/>`;

  Object.assign(TANI, {
    // les trampes per no parar: el vídeo següent comença sol, arriben notificacions… i tu decideixes aturar-te
    d3trampa() {
      return tSvg(214, `${d3ph(18, 10, 112, 194)}
        <rect x="26" y="22" width="96" height="70" rx="8" fill="#CFE3FF"/><path d="M60 42v30l26-15z" fill="#fff"/>
        <g ${tA(.4, 'ta-in')}><rect x="26" y="98" width="96" height="40" rx="8" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="74" y="114" text-anchor="middle" class="tat s">${L('El següent vídeo', 'El siguiente vídeo')}</text>
          <text x="74" y="131" text-anchor="middle" class="tat b"><tspan>${L('en', 'en')} </tspan><tspan>5<animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></tspan></text></g>
        <g ${tA(1, 'ta-pop')}><circle cx="118" cy="20" r="11" fill="#EF5A5A"/><text x="118" y="25" text-anchor="middle" class="tat w s">9</text></g>
        ${[[0, '🔔', L('Tens 3 missatges nous', 'Tienes 3 mensajes nuevos')], [1, '🔥', L('No perdis la ratxa!', '¡No pierdas la racha!')], [2, '🎁', L('Premi si tornes ara', 'Premio si vuelves ahora')]].map(([i, e, t]) => `<g ${tA(1.4 + i * .5, 'ta-in')}><rect x="146" y="${14 + i * 40}" width="164" height="32" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(162, 36 + i * 40, e, 16)}</g><text x="176" y="${35 + i * 40}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3.2, 'ta-pop')}><rect x="146" y="140" width="164" height="54" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d3e(170, 176, '✋', 24)}</g>
          <text x="188" y="160" class="tat s">${L('Estan fetes perquè', 'Están hechas para que')}</text><text x="188" y="178" class="tat s">${L('no paris.', 'no pares.')} <tspan class="b">${L('Tu decideixes!', '¡Tú decides!')}</tspan></text></g>`);
    },
    // el son: la tauleta es carrega fora de l'habitació i el cos descansa (9-12 hores per a la teva edat)
    d3son() {
      return tSvg(214, `<rect x="10" y="10" width="190" height="194" rx="18" fill="#22306E"/><g ${tA(.2, 'ta-fade')}><circle cx="52" cy="44" r="18" fill="#FFE07A"/><circle cx="60" cy="38" r="16" fill="#22306E"/></g>
        ${[[120, 30], [160, 56], [96, 66], [176, 26]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff" ${tA(.4 + i * .2, 'ta-fade')}/>`).join('')}
        <rect x="30" y="140" width="150" height="38" rx="10" fill="#7C5CFA"/><rect x="30" y="128" width="42" height="20" rx="8" fill="#fff"/><rect x="66" y="132" width="114" height="20" rx="8" fill="#9D74F7"/>
        <g>${d3e(50, 146, '😴', 28)}</g><text x="120" y="112" class="tat w b" ${tA(1.2, 'ta-fade')}>Z<tspan dx="6" dy="-8" font-size="12">z</tspan><tspan dx="4" dy="-6" font-size="9">z</tspan></text>
        <path d="M200 120h18" stroke="#DCE4FA" stroke-width="3" stroke-dasharray="4 4"/>
        <g ${tA(1.8, 'ta-in')}><rect x="222" y="18" width="88" height="122" rx="14" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/><text x="266" y="36" text-anchor="middle" class="tat s">${L('Fora de', 'Fuera de')}</text><text x="266" y="50" text-anchor="middle" class="tat s">${L("l'habitació", 'la habitación')}</text>
          ${d3ph(248, 60, 36, 60)}<path d="M266 120v14" stroke="#5E667A" stroke-width="3"/><g>${d3e(266, 98, '🔋', 16)}</g></g>
        <g ${tA(2.8, 'ta-pop')}><rect x="212" y="150" width="104" height="54" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="264" y="172" text-anchor="middle" class="tat b">9-12 h</text><text x="264" y="192" text-anchor="middle" class="tat s">${L('de son', 'de sueño')}</text></g>`);
    },
    // una caixa sorpresa: les gemmes costen diners de veritat i no saps què hi haurà a dins
    d3caixa() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="20" width="96" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(40, 60, '💶', 24)}</g><text x="66" y="46" class="tat s">${L('Diners', 'Dinero')}</text><text x="66" y="64" class="tat s">${L('de veritat', 'de verdad')}</text></g>
        <path d="M110 51h20" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 4" ${tA(.8, 'ta-fade')}/>
        <g ${tA(1, 'ta-in')}><rect x="132" y="20" width="76" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(170, 60, '💎', 26)}</g><text x="170" y="76" text-anchor="middle" class="tat s">${L('gemmes', 'gemas')}</text></g>
        <path d="M210 51h20" stroke="#F08A24" stroke-width="3" stroke-dasharray="5 4" ${tA(1.5, 'ta-fade')}/>
        <g ${tA(1.7, 'ta-pop')}><rect x="236" y="26" width="72" height="54" rx="10" fill="#9B6CF2"/><rect x="230" y="18" width="84" height="18" rx="6" fill="#7C4DE0"/><text x="272" y="64" text-anchor="middle" class="tat w b" font-size="26">?</text>
          <animateTransform attributeName="transform" type="rotate" values="0 272 50;-4 272 50;4 272 50;0 272 50" dur="1.2s" repeatCount="indefinite"/></g>
        ${[['🧢', 40], ['🥾', 104], ['🐉', 168], ['🧦', 232]].map(([e, x], i) => `<g ${tA(2.4 + i * .3, 'ta-pop')}><rect x="${x}" y="104" width="52" height="52" rx="12" fill="${i === 2 ? '#FFF3D6' : '#F3F6FF'}" stroke="${i === 2 ? '#F2B21B' : '#DCE4FA'}" stroke-width="2"/><g>${d3e(x + 26, 138, e, 24)}</g></g>`).join('')}
        <text x="160" y="178" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('Pots tocar qualsevol cosa… o no la que volies', 'Puede tocarte cualquier cosa… o no la que querías')}</text>
        <g ${tA(4, 'ta-pop')}><rect x="40" y="186" width="240" height="26" rx="13" fill="#3CC47C"/><text x="160" y="204" text-anchor="middle" class="tat w s">${L('Abans de comprar, pregunta a un adult', 'Antes de comprar, pregunta a un adulto')}</text></g>`);
    },
    // una veu copiada amb IA: el missatge de veu sembla de l'àvia, però el fa un programa; es comprova trucant
    d3veu() {
      const wave = (x, y, col, d) => `<g ${tA(d, 'ta-in')}>${[8, 18, 26, 14, 22, 10, 20, 12].map((h, i) => `<rect x="${x + i * 9}" y="${y - h / 2}" width="5" height="${h}" rx="2.5" fill="${col}"><animate attributeName="height" values="${h};${h * .4};${h}" dur="${.8 + i * .07}s" repeatCount="indefinite"/></rect>`).join('')}</g>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="14" width="140" height="70" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d3e(36, 46, '👵', 24)}</g><text x="56" y="40" class="tat b">${L("L'àvia", 'La abuela')}</text></g>${wave(56, 62, '#3CC47C', .5)}
        <g ${tA(1.2, 'ta-pop')}><rect x="168" y="20" width="62" height="58" rx="14" fill="#14204A"/><g>${d3e(199, 56, '🤖', 26)}</g></g>
        <path d="M154 50h12M232 50h12" stroke="#9D74F7" stroke-width="3" stroke-dasharray="4 4" ${tA(1.5, 'ta-fade')}/>
        <g ${tA(1.8, 'ta-in')}><rect x="246" y="14" width="66" height="70" rx="16" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="279" y="40" text-anchor="middle" class="tat s">${L('Còpia', 'Copia')}</text></g>${wave(250, 62, '#EF5A5A', 2)}
        <g ${tA(2.6, 'ta-in')}><rect x="40" y="104" width="240" height="40" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="129" text-anchor="middle" class="tat s">${L('«Envia\'m el codi que t\'ha arribat, ràpid!»', '«¡Envíame el código que te ha llegado, rápido!»')}</text></g>
        <g ${tA(3.6, 'ta-pop')}><rect x="40" y="158" width="240" height="46" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d3e(66, 190, '📞', 22)}</g><text x="86" y="177" class="tat b">${L('Estrany o amb presses?', '¿Raro o con prisas?')}</text><text x="86" y="195" class="tat s">${L('Comprova-ho trucant a la persona', 'Compruébalo llamando a la persona')}</text></g>`);
    },
    // buscar amb cap: paraules clau al cercador, el primer resultat és un anunci i cal mirar més d'una font
    d3cerca() {
      const res = [[L('Anunci', 'Anuncio'), L('Compra prismàtics ara!', '¡Compra prismáticos ya!'), '#EF5A5A'], [L('Museu', 'Museo'), L('Els ocells del riu, amb fotos', 'Las aves del río, con fotos'), '#3CC47C'], [L('Ajuntament', 'Ayuntamiento'), L('Ruta dels ocells del riu', 'Ruta de las aves del río'), '#3CC47C']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="12" y="8" width="296" height="34" rx="17" fill="#fff" stroke="#2F5BEA" stroke-width="2.5"/><g>${d3e(34, 32, '🔍', 17)}</g>
          <text x="52" y="31" class="tat b">${L('ocells riu Vilabit', 'aves río Vilabit')}</text></g>
        <text x="160" y="60" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('Poques paraules, les importants', 'Pocas palabras, las importantes')}</text>
        ${res.map(([k, t, c], i) => `<g ${tA(1.4 + i * .5, 'ta-in')}><rect x="12" y="${68 + i * 40}" width="296" height="34" rx="10" fill="#fff" stroke="${i ? '#DCE4FA' : '#F4B7B7'}" stroke-width="2"/>
          <rect x="18" y="${75 + i * 40}" width="96" height="20" rx="10" fill="${c}"/><text x="66" y="${89 + i * 40}" text-anchor="middle" class="tat w s">${k}</text><text x="122" y="${90 + i * 40}" class="tat s">${t}</text></g>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L("Salta l'anunci i compara dues fonts", 'Sáltate el anuncio y compara dos fuentes')}</text>`);
    },
    // l'autoria: un dibuix té autora; per fer-lo servir, permís o una llicència que ho deixa, i dir de qui és
    d3autor() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="12" width="112" height="150" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="18" y="20" width="96" height="100" rx="6" fill="#EAF4FF"/>
          <circle cx="48" cy="56" r="13" fill="#FFD54A"/><path d="M22 114l30-34 20 20 14-12 24 26z" fill="#7FC97A"/><text x="66" y="146" text-anchor="middle" class="tat s">${L('Dibuix: Laia', 'Dibujo: Laia')}</text></g>
        <g ${tA(1, 'ta-pop')}><circle cx="112" cy="22" r="15" fill="#14204A"/><text x="112" y="28" text-anchor="middle" class="tat w b">©</text></g>
        ${[[0, '✋', L('Demana permís', 'Pide permiso'), '#2F5BEA'], [1, '📄', L('O mira la llicència', 'O mira la licencia'), '#9B6CF2'], [2, '✍️', L('Digues de qui és', 'Di de quién es'), '#3CC47C']].map(([i, e, t, c]) => `<g ${tA(1.6 + i * .6, 'ta-in')}><rect x="134" y="${16 + i * 50}" width="178" height="40" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/><g>${d3e(156, 43 + i * 50, e, 18)}</g><text x="174" y="${41 + i * 50}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3.6, 'ta-pop')}><rect x="14" y="174" width="296" height="32" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2"/><text x="160" y="195" text-anchor="middle" class="tat s">${L('Foto: Laia Puig · llicència CC BY', 'Foto: Laia Puig · licencia CC BY')}</text></g>`);
    },
    // el pacte digital de casa: acords per a tota la família, que es van marcant
    d3pacte() {
      const R = [['⏰', L('Temps i pauses', 'Tiempo y pausas')], ['🛏️', L('Sense pantalles al llit', 'Sin pantallas en la cama')], ['🎮', L('Partides i compres, amb un adult', 'Partidas y compras, con un adulto')], ['🍽️', L('Mengem sense mòbils', 'Comemos sin móviles')], ['🤝', L('Si passa alguna cosa, ho diem', 'Si pasa algo, lo decimos')]];
      return tSvg(214, `<rect x="12" y="6" width="296" height="202" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="30" text-anchor="middle" class="tat b">${L('El pacte digital de casa', 'El pacto digital de casa')}</text>
        ${R.map(([e, t], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><g>${d3e(36, 60 + i * 30, e, 16)}</g><text x="54" y="${59 + i * 30}" class="tat s">${t}</text><g ${tA(.8 + i * .5, 'ta-pop')}><circle cx="288" cy="${54 + i * 30}" r="9" fill="#3CC47C"/><path d="M283 ${54 + i * 30}l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g></g>`).join('')}
        <g ${tA(3.4, 'ta-fade')}><text x="160" y="202" text-anchor="middle" class="tat s">${L('Ho signem tots: també els adults', 'Lo firmamos todos: también los adultos')}</text></g>`);
    }
  });
}
