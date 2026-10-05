/* Tech Creadors · unitat 6 «Variables» · animacions de teoria (TANI)
   Dibuixos propis: la capsa amb nom, els blocs de variable (vermells), el marcador de l'escenari, les vides en cors,
   la condició que compara, el compte enrere, el cronòmetre i la mascota virtual. SVG + SMIL, cicle de 5,5 s. */
Object.assign(TANI, (() => {
  const D = 5.5, f = t => (t / D).toFixed(3);
  // visible només entre a i b (segons dins del cicle)
  const vis = (a, b = D) => `<animate attributeName="opacity" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="${a > 0 ? '0;1' : '1'}${b < D ? ';0' : ''}" keyTimes="${a > 0 ? `0;${f(a)}` : '0'}${b < D ? `;${f(b)}` : ''}"/>`;
  const show = (a, b, body) => `<g opacity="${a > 0 ? 0 : 1}">${vis(a, b)}${body}</g>`;
  // un element per a cada tram de temps: items[i] es veu de ts[i] a ts[i+1]
  const sw = (items, ts) => items.map((h, i) => show(ts[i], ts[i + 1] ?? D, h)).join('');
  // moviment per punts: [[t, x, y], …]
  const mv = pts => `<animateTransform attributeName="transform" type="translate" dur="${D}s" repeatCount="indefinite" values="${pts.map(p => p[1] + ' ' + p[2]).join(';')}" keyTimes="${pts.map(p => f(p[0])).join(';')}"/>`;
  const num = (x, y, n, size = 40, col = '#E0533F') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}">${n}</text>`;
  const blk = (x, y, w, txt, col = '#E0533F', dark) => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/><text x="${x + 10}" y="${y + 19}" class="tat s${dark ? '' : ' w'}">${txt}</text>`;
  const coin = (x, y, r = 13) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#FFC531" stroke="#B46A00" stroke-width="2.5"/><circle r="${r * .6}" fill="none" stroke="#E8A317" stroke-width="2"/><path d="M-2 -5h4v10h-4z" fill="#B46A00"/></g>`;
  const heart = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 9 C-14 0 -10 -12 0 -6 C10 -12 14 0 0 9Z" fill="#EF4F6B" stroke="#9E1430" stroke-width="2"/>`;
  const badge = (x, y, name, items, ts) => `<rect x="${x}" y="${y}" width="98" height="30" rx="10" fill="#fff" stroke="#E0533F" stroke-width="2.5"/><text x="${x + 10}" y="${y + 20}" class="tat s" fill="#6B7590">${name}</text>${sw(items.map(n => num(x + 78, y + 22, n, 19)), ts)}`;
  const pet = (x, y, w, i) => typeof STG_ART !== 'undefined' && STG_ART.mascota ? STG_ART.mascota.svg(i).replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${w * 110 / 120}" `) : `<circle cx="${x + w / 2}" cy="${y + w / 2}" r="${w / 2.4}" fill="#3CC47C"/>`;
  return {
    // un marcador amb tres variables: cada encert suma punts i ratxa; cada error suma errors i posa la ratxa a 0
    g6board() {
      const ts = [0, 1, 2, 3, 4];
      const hat = (y, txt, col) => `<path d="M14 ${y}h150a8 8 0 0 1 8 8v16h-158z" fill="${col}"/><text x="22" y="${y + 17}" class="tat s w">${txt}</text>`;
      const hl = (y, times) => times.map(t => `<rect x="10" y="${y}" width="180" height="96" rx="12" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${vis(t, t + .7)}</rect>`).join('');
      const mark = (t, ok) => `<g opacity="0">${vis(t, t + .8)}<circle cx="259" cy="172" r="17" fill="${ok ? '#3CC47C' : '#EF5A5A'}" stroke="#fff" stroke-width="2.5"/>${ok ? '<path d="M251 172l6 6l10 -11" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' : '<path d="M252 165l14 14M266 165l-14 14" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'}</g>`;
      return tSvg(226, `<g ${tA(.1, 'ta-in')}><rect x="6" y="6" width="190" height="204" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
          ${hat(14, L('Quan encerta', 'Al acertar'), '#1FA463')}${blk(18, 42, 168, L('suma a punts 2', 'suma a puntos 2'))}${blk(18, 74, 168, L('suma a ratxa 1', 'suma a racha 1'))}
          ${hat(112, L('Quan falla', 'Al fallar'), '#C0392B')}${blk(18, 140, 168, L('suma a errors 1', 'suma a errores 1'))}${blk(18, 172, 168, L('posa ratxa a 0', 'pon racha a 0'))}</g>
        ${hl(10, [1, 2, 4])}${hl(108, [3])}
        <g ${tA(.3, 'ta-in')}><rect x="204" y="6" width="110" height="204" rx="14" fill="#E6F4FF" stroke="#B9DDF7" stroke-width="2"/>
          ${badge(210, 18, L('punts', 'puntos'), [0, 2, 4, 4, 6], ts)}${badge(210, 58, L('errors', 'errores'), [0, 0, 0, 1, 1], ts)}${badge(210, 98, L('ratxa', 'racha'), [0, 1, 2, 0, 1], ts)}</g>
        ${mark(1, true)}${mark(2, true)}${mark(3, false)}${mark(4, true)}
        <text x="160" y="222" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L('Cada variable, les seves regles', 'Cada variable, sus reglas')}</text>`);
    },
    // una variable: una capsa amb nom (punts) i un número que canvia; el marcador de l'escenari diu el mateix
    g6box() {
      const ts = [0, 1.4, 2.6, 3.8];
      const drop = (t) => `<g opacity="0">${vis(t, t + .55)}<g>${mv([[0, 92, -30], [t, 92, -30], [t + .5, 92, 66], [D, 92, 66]])}${coin(0, 0)}</g></g>`;
      return tSvg(214, `
        <ellipse cx="92" cy="186" rx="70" ry="7" fill="#14204A" opacity=".1"/>
        <g ${tA(.2, 'ta-in')}><path d="M30 92h124v90h-124z" fill="#F7C873" stroke="#9A6538" stroke-width="3" stroke-linejoin="round"/>
          <path d="M30 92l-12 -16h148l-12 16z" fill="#FFE1A6" stroke="#9A6538" stroke-width="3" stroke-linejoin="round"/>
          <rect x="52" y="108" width="80" height="58" rx="14" fill="#fff" stroke="#E0533F" stroke-width="4"/></g>
        ${sw([0, 1, 2, 3].map(n => num(92, 152, n, 42)), ts)}
        <g ${tA(.4, 'ta-pop')}><path d="M126 70l26 -26" stroke="#9A6538" stroke-width="2"/><rect x="138" y="22" width="76" height="30" rx="9" fill="#E0533F" transform="rotate(-8 176 37)"/><text x="176" y="43" text-anchor="middle" class="tat w" transform="rotate(-8 176 37)">punts</text></g>
        ${drop(.9)}${drop(2.1)}${drop(3.3)}
        <g ${tA(.5, 'ta-in')}><rect x="196" y="76" width="116" height="94" rx="14" fill="#BFE6FF" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <path d="M196 146h116v10q0 14 -14 14h-88q-14 0 -14 -14z" fill="#7CC456"/>${coin(272, 136, 12)}
          <circle cx="226" cy="144" r="13" fill="#FFB24A" stroke="#C26B00" stroke-width="2"/><circle cx="222" cy="141" r="2.4" fill="#14204A"/><circle cx="231" cy="141" r="2.4" fill="#14204A"/></g>
        <g ${tA(.6, 'ta-in')}>${badge(204, 84, 'punts', [0, 1, 2, 3], ts)}</g>
        <text x="254" y="188" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L("a l'escenari", 'en el escenario')}</text>
        <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(.3, 'ta-fade')}>${L('el nom no canvia; el número, sí', 'el nombre no cambia; el número, sí')}</text>`);
    },
    // «posa» i «suma»: un guió de quatre blocs i el número de la capsa després de cada bloc
    g6setch() {
      const ts = [0, .5, 1.7, 2.9, 4.1], rows = [L('posa punts a 0', 'pon puntos a 0'), L('suma a punts 5', 'suma a puntos 5'), L('suma a punts -2', 'suma a puntos -2'), L('posa punts a 10', 'pon puntos a 10')];
      const notes = ['', L('nou: 0', 'nuevo: 0'), '0 + 5 = 5', '5 − 2 = 3', L('el 3 s\'esborra', 'el 3 se borra')];
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="10" y="10" width="186" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <path d="M22 22h132a10 10 0 0 1 10 10v8h-142z" fill="#F08A24"/><text x="30" y="38" class="tat s w">${L('Quan comença', 'Al empezar')}</text>
          ${rows.map((r, i) => blk(22, 50 + i * 36, 162, r)).join('')}</g>
        <g opacity="0">${vis(.5, 5.2)}<rect x="17" y="45" width="172" height="38" rx="11" fill="none" stroke="#FFC531" stroke-width="4">${''}</rect>${mv([[0, 0, 0], [1.69, 0, 0], [1.7, 0, 36], [2.89, 0, 36], [2.9, 0, 72], [4.09, 0, 72], [4.1, 0, 108], [D, 0, 108]])}</g>
        <g ${tA(.2, 'ta-in')}><rect x="214" y="40" width="96" height="84" rx="18" fill="#fff" stroke="#E0533F" stroke-width="4"/>
          <rect x="226" y="22" width="72" height="26" rx="9" fill="#E0533F"/><text x="262" y="40" text-anchor="middle" class="tat s w">punts</text></g>
        ${sw(['', '0', '5', '3', '10'].map(n => num(262, 100, n, 42)), ts)}
        ${sw(notes.map(n => `<text x="262" y="150" text-anchor="middle" class="tat">${n}</text>`), ts)}
        <text x="262" y="186" text-anchor="middle" class="tat s" ${tA(4.3, 'ta-fade')}>${L('«posa» esborra', '«pon» borra')}</text>
        <text x="262" y="204" text-anchor="middle" class="tat s" ${tA(4.5, 'ta-fade')}>${L('«suma» afegeix', '«suma» añade')}</text>`);
    },
    // compte! tocar la moneda amb «suma 1» fa 1, 2, 3; amb «posa a 1» sempre fa 1
    g6bug() {
      const taps = [1, 2, 3];
      const panel = (x, bg, line, title, seq, ok) => `<g ${tA(.2, 'ta-in')}><rect x="${x}" y="8" width="148" height="196" rx="18" fill="${bg}" stroke="${line}" stroke-width="2"/>
          ${blk(x + 10, 18, 128, title)}
          <rect x="${x + 34}" y="58" width="80" height="62" rx="14" fill="#fff" stroke="#E0533F" stroke-width="3.5"/>${coin(x + 74, 160, 18)}</g>
        ${sw(['0', ...seq].map(n => num(x + 74, 104, n, 38)), [0, ...taps])}
        ${taps.map(t => `<g opacity="0">${vis(t - .15, t + .45)}<circle cx="${x + 74}" cy="160" r="24" fill="none" stroke="#14204A" stroke-width="3" opacity=".5"/><path d="M${x + 84} 170l10 16l4 -6l7 4l3 -5l-7 -4l5 -4z" fill="#fff" stroke="#14204A" stroke-width="2" stroke-linejoin="round"/></g>`).join('')}
        <g opacity="0">${vis(3.6)}<circle cx="${x + 128}" cy="64" r="15" fill="${ok ? '#3CC47C' : '#EF5A5A'}" stroke="#fff" stroke-width="2.5"/>${ok ? `<path d="M${x + 121} 64l5 5l9 -10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M${x + 122} 58l12 12M${x + 134} 58l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>`}</g>`;
      return tSvg(214, `${panel(8, '#E7F7EE', '#A8E0C0', L('suma a punts 1', 'suma a puntos 1'), [1, 2, 3], true)}${panel(164, '#FDEBEB', '#F4B7B7', L('posa punts a 1', 'pon puntos a 1'), [1, 1, 1], false)}
        <text x="82" y="140" text-anchor="middle" class="tat s" ${tA(3.7, 'ta-fade')}>1, 2, 3 ✓</text><text x="238" y="140" text-anchor="middle" class="tat s" ${tA(3.7, 'ta-fade')}>${L('sempre 1', 'siempre 1')} ✗</text>`);
    },
    // les vides: tres cors; a cada xoc del meteorit en desapareix un i, a 0, «Fi de la partida!»
    g6lives() {
      const hits = [1.1, 2.5, 3.9], ts = [0, ...hits];
      const met = hits.map(h => `<g opacity="0">${vis(h - .8, h + .05)}<g>${mv([[0, 160, -10], [h - .8, 160, -10], [h, 160, 120], [D, 160, 120]])}<circle r="17" fill="#8A776A" stroke="#4E3F36" stroke-width="2.5"/><circle cx="-5" cy="-4" r="4" fill="#6B5B52"/><circle cx="6" cy="5" r="3" fill="#6B5B52"/><path d="M-10 -16l-6 -14M2 -18l2 -14M10 -14l8 -12" stroke="#FFB27A" stroke-width="4" stroke-linecap="round" opacity=".8"/></g></g>
        <g opacity="0">${vis(h, h + .45)}<circle cx="160" cy="146" r="26" fill="#FFC531" opacity=".55"/><path d="M140 130l10 8M180 130l-10 8M160 120v10" stroke="#FF8A3D" stroke-width="4" stroke-linecap="round"/></g>`).join('');
      return tSvg(214, `
        <g ${tA(.1, 'ta-fade')}><rect x="8" y="8" width="304" height="198" rx="18" fill="#141A46"/>${[[40, 50], [270, 40], [230, 110], [60, 150], [290, 170], [120, 30], [200, 190]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#fff" opacity=".8"/>`).join('')}</g>
        ${met}
        <g ${tA(.2, 'ta-in')}><path d="M160 128c12 10 14 30 10 48h-20c-4 -18 -2 -38 10 -48z" fill="#F4F7FF" stroke="#8A9AC8" stroke-width="2.5"/><circle cx="160" cy="152" r="6" fill="#3D7BF4"/><path d="M150 170l-12 12h12zM170 170l12 12h-12z" fill="#EF5A5A"/></g>
        <g ${tA(.3, 'ta-in')}><rect x="18" y="18" width="128" height="34" rx="11" fill="#fff" stroke="#E0533F" stroke-width="2.5"/><text x="28" y="40" class="tat s" fill="#6B7590">${L('vides', 'vidas')}</text></g>
        ${sw([3, 2, 1, 0].map(n => num(82, 43, n, 22)), ts)}
        ${[0, 1, 2].map(i => show(0, hits[2 - i], heart(104 + i * 14, 35, .8))).join('')}
        <g opacity="0">${vis(4.2)}<rect x="62" y="74" width="196" height="44" rx="14" fill="#EF5A5A" stroke="#fff" stroke-width="3"/><text x="160" y="102" text-anchor="middle" class="tat b w">${L('Fi de la partida!', '¡Fin de la partida!')}</text></g>`);
    },
    // comparar: la condició «vides = 0?» rep 2, 1 i 0; només amb el 0 diu que sí
    g6cmp() {
      const ts = [.4, 1.7, 3.0];
      const val = (t, n, yes) => `<g opacity="0">${vis(t, yes ? D : t + 1.3)}<g>${mv([[0, -70, 0], [t, -70, 0], [t + .4, 0, 0], [D, 0, 0]])}<rect x="22" y="40" width="70" height="40" rx="12" fill="#fff" stroke="#E0533F" stroke-width="3"/>${num(57, 68, n, 24)}</g>
          <g opacity="0">${vis(t + .5)}<rect x="234" y="40" width="74" height="40" rx="20" fill="${yes ? '#3CC47C' : '#EF5A5A'}"/><text x="271" y="66" text-anchor="middle" class="tat b w">${yes ? L('SÍ', 'SÍ') : 'NO'}</text></g></g>`;
      return tSvg(214, `
        <text x="57" y="30" text-anchor="middle" class="tat s" ${tA(.2, 'ta-fade')}>${L('vides val…', 'vidas vale…')}</text>
        <g ${tA(.2, 'ta-in')}><path d="M98 60h12" stroke="#9AA6C8" stroke-width="4" stroke-linecap="round"/><rect x="112" y="36" width="112" height="48" rx="24" fill="#F2B21B"/><text x="168" y="66" text-anchor="middle" class="tat b" fill="#3A2600">${L('vides', 'vidas')} = 0?</text></g>
        ${val(ts[0], 2, false)}${val(ts[1], 1, false)}${val(ts[2], 0, true)}
        <g opacity="0">${vis(3.7)}<path d="M271 86v14" stroke="#3CC47C" stroke-width="4" stroke-linecap="round"/><path d="M263 96l8 8l8 -8" fill="none" stroke="#3CC47C" stroke-width="4" stroke-linecap="round"/>
          <rect x="196" y="108" width="114" height="34" rx="10" fill="#1FA463"/><text x="253" y="130" text-anchor="middle" class="tat s w">${L('atura tot', 'para todo')}</text></g>
        ${[['=', L('igual a', 'igual a'), 10], ['>', L('més gran que', 'mayor que'), 112], ['<', L('més petit que', 'menor que'), 214]].map(([o, t, x], i) => `<g ${tA(.5 + i * .2, 'ta-in')}><rect x="${x}" y="150" width="96" height="58" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${num(x + 48, 178, o, 26, '#C98A00')}<text x="${x + 48}" y="200" text-anchor="middle" class="tat s" style="font-size:13px">${t}</text></g>`).join('')}`);
    },
    // compte enrere: 5, 4, 3, 2, 1, 0 i «Temps!»; al costat, el bucle que ho fa
    g6count() {
      const ts = [0, .7, 1.4, 2.1, 2.8, 3.5], C = 2 * Math.PI * 58;
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><circle cx="86" cy="104" r="72" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="86" cy="104" r="58" fill="none" stroke="#FDE3DE" stroke-width="12"/></g>
        <circle cx="86" cy="104" r="58" fill="none" stroke="#E0533F" stroke-width="12" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" transform="rotate(-90 86 104)"><animate attributeName="stroke-dashoffset" dur="${D}s" repeatCount="indefinite" values="0;${C.toFixed(1)};${C.toFixed(1)}" keyTimes="0;${f(3.5)};1"/></circle>
        ${sw([5, 4, 3, 2, 1, 0].map(n => num(86, 120, n, 50)), ts)}
        <g opacity="0">${vis(3.6)}<rect x="30" y="160" width="112" height="34" rx="12" fill="#EF5A5A"/><text x="86" y="182" text-anchor="middle" class="tat b w">${L('Temps!', '¡Tiempo!')}</text></g>
        <g ${tA(.3, 'ta-in')}><rect x="168" y="22" width="146" height="150" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          ${blk(176, 32, 130, L('posa temps a 5', 'pon tiempo a 5'))}
          <path d="M176 70h130v26h-116v44h116v12h-130z" fill="#1FA463"/><text x="184" y="88" class="tat s w">${L('repeteix 5', 'repite 5')}</text>
          ${blk(190, 100, 116, L('espera 1 s', 'espera 1 s'), '#1FA463')}<rect x="190" y="100" width="116" height="28" rx="8" fill="none" stroke="#fff" stroke-width="1.5" opacity=".6"/>
          ${blk(190, 131, 116, L('temps −1', 'tiempo −1'))}</g>
        <g opacity="0">${vis(.2, 3.5)}<rect x="186" y="96" width="124" height="36" rx="10" fill="none" stroke="#FFC531" stroke-width="3.5">${''}</rect>${mv([[0, 0, 0], [.35, 0, 0], [.36, 0, 31], [.69, 0, 31], [.7, 0, 0], [1.05, 0, 0], [1.06, 0, 31], [1.39, 0, 31], [1.4, 0, 0], [1.75, 0, 0], [1.76, 0, 31], [2.09, 0, 31], [2.1, 0, 0], [2.45, 0, 0], [2.46, 0, 31], [2.79, 0, 31], [2.8, 0, 0], [3.15, 0, 0], [3.16, 0, 31], [D, 0, 31]])}</g>
        <text x="241" y="196" text-anchor="middle" class="tat s" ${tA(.5, 'ta-fade')}>${L('1 volta = 1 segon', '1 vuelta = 1 segundo')}</text>`);
    },
    // el cronòmetre compta cap amunt: el cotxe surt, el cronòmetre corre i, a la meta, es guarda el temps
    g6timer() {
      const ts = [0, .6, 1.2, 1.8, 2.4, 3.0, 3.6], vals = ['0,0', '0,0', '0,6', '1,2', '1,8', '2,4', '3,0'];
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="304" height="104" rx="16" fill="#FFE3D0"/><rect x="8" y="78" width="304" height="34" fill="#A9B0C0"/><path d="M8 95h304" stroke="#fff" stroke-width="3" stroke-dasharray="14 12"/>
          <path d="M276 34v44" stroke="#6B4E36" stroke-width="4"/><path d="M278 34q14 -6 26 0v18q-12 -6 -26 0z" fill="#3CC47C" stroke="#1E8A50" stroke-width="2"/></g>
        <g>${mv([[0, 26, 64], [.6, 26, 64], [3.6, 222, 64], [D, 222, 64]])}<rect x="0" y="0" width="52" height="20" rx="7" fill="#EF5A5A" stroke="#A9302A" stroke-width="2"/><path d="M10 0l6 -10h20l6 10z" fill="#CDEBFF" stroke="#A9302A" stroke-width="2"/><circle cx="12" cy="20" r="6" fill="#1B1D2E"/><circle cx="40" cy="20" r="6" fill="#1B1D2E"/></g>
        <g ${tA(.2, 'ta-in')}><rect x="20" y="124" width="132" height="80" rx="16" fill="#14204A"/><circle cx="86" cy="136" r="6" fill="#FFC531"/><text x="86" y="198" text-anchor="middle" class="tat s w">${L('cronòmetre', 'cronómetro')} ↑</text></g>
        ${sw(vals.map(v => num(86, 178, v, 34, '#FFC531')), ts)}
        <g opacity="0">${vis(.5, 1)}<text x="86" y="114" text-anchor="middle" class="tat s">${L('a zero!', '¡a cero!')}</text></g>
        <g opacity="0">${vis(3.8)}<rect x="168" y="132" width="140" height="64" rx="16" fill="#fff" stroke="#E0533F" stroke-width="3"/><text x="180" y="156" class="tat s" fill="#6B7590">${L('segons', 'segundos')}</text>${num(238, 186, '3,0', 28)}</g>`);
    },
    // la mascota virtual: la gana puja sola, la poma la fa baixar i la cara canvia segons la regla
    g6pet() {
      const g = [0, 1, 2, 3, 4, 5, 6, 3], ts = [0, .5, 1, 1.5, 2, 2.5, 3, 3.7];
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="8" y="8" width="180" height="198" rx="18" fill="#DFF5FF"/><path d="M8 160h180v28q0 18 -18 18h-144q-18 0 -18 -18z" fill="#8FD36C"/></g>
        ${sw([pet(44, 62, 108, 0), pet(44, 62, 108, 1), pet(44, 62, 108, 0)], [0, 3, 3.9])}
        <g opacity="0">${vis(3.1, 3.75)}<g>${mv([[0, 300, 170], [3.1, 300, 170], [3.7, 98, 130], [D, 98, 130]])}<path d="M0 -4q-10 -8 -15 2q-4 12 5 20q5 4 10 1q5 3 10 -1q9 -8 5 -20q-5 -10 -15 -2z" fill="#EF4F4F" stroke="#8E1E1E" stroke-width="2"/><path d="M0 -4q2 -8 6 -10" stroke="#5A3A1A" stroke-width="2.5"/></g></g>
        <g opacity="0">${vis(3.75, 4.6)}<text x="98" y="56" text-anchor="middle" class="tat b">${L('Ñam!', '¡Ñam!')}</text></g>
        <g ${tA(.2, 'ta-in')}><rect x="200" y="12" width="112" height="70" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="212" y="34" class="tat s">${L('gana', 'hambre')}</text>
          <rect x="212" y="46" width="88" height="16" rx="8" fill="#FDE3DE"/></g>
        <rect x="212" y="46" width="2" height="16" rx="8" fill="#E0533F"><animate attributeName="width" dur="${D}s" repeatCount="indefinite" values="2;84;84;42;42" keyTimes="0;${f(3)};${f(3.7)};${f(3.9)};1"/></rect>
        ${sw(g.map(n => num(290, 36, n, 18)), ts)}
        <g ${tA(.4, 'ta-in')}><rect x="196" y="94" width="118" height="70" rx="14" fill="#F2B21B"/><text x="210" y="116" class="tat s" fill="#3A2600">${L('si gana > 5', 'si hambre > 5')}</text><text x="210" y="134" class="tat s" fill="#3A2600">→ ${L('vestit 2', 'disfraz 2')}</text><text x="206" y="152" class="tat s" fill="#3A2600" style="font-size:13px">${L('si no', 'si no')} → ${L('vestit 1', 'disfraz 1')}</text></g>
        <g ${tA(.6, 'ta-in')}><circle cx="256" cy="186" r="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><path d="M256 182q-6 -5 -9 1q-2 7 3 11q3 2 6 1q3 1 6 -1q5 -4 3 -11q-3 -6 -9 -1z" fill="#EF4F4F"/></g>
        <g opacity="0">${vis(2.8, 3.3)}<circle cx="256" cy="186" r="22" fill="none" stroke="#14204A" stroke-width="3" opacity=".5"/></g>
        <text x="256" y="212" text-anchor="middle" class="tat s" style="font-size:13px" ${tA(.6, 'ta-fade')}>${L('poma: gana -3', 'manzana: hambre -3')}</text>`);
    }
  };
})());
