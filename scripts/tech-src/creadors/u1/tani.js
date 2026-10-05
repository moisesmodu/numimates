/* Tech Creadors · unitat 1 «Primers passos a l'escenari» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Fan servir els mateixos personatges i fons de l'escenari (STG_ART, STG_BG) dins d'un SVG
   de 320 d'ample, perquè l'alumne/a reconegui a l'animació el que després veurà a l'app. */
Object.assign(TANI, (() => {
  // un SVG de personatge o de fons col·locat dins l'animació
  // (amb style: si la pàgina té una regla «svg {width:100%}», com a les històries, no es fan grossos)
  const nest = (svg, x, y, w, h) => String(svg || '').replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${h}" style="width:${w}px;height:${h}px;overflow:hidden" `);
  const spr = (art, x, y, w, h, c = 0) => typeof STG_ART !== 'undefined' && STG_ART[art] ? nest(STG_ART[art].svg(c), x, y, w, h) : `<circle cx="${x + w / 2}" cy="${y + h / 2}" r="${w / 3}" fill="#8B5CF6"/>`;
  const bgs = (n, x, y, w, h) => typeof STG_BG !== 'undefined' && STG_BG[n] ? nest(STG_BG[n].svg(), x, y, w, h).replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ') : `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#3A1E5A"/>`;
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  // un bloc de l'editor (moviment blau, aspecte rosa) i la capçalera «Quan comença»
  const C = { mov: '#3D7BF4', art: '#C447A8', hat: '#1E7A42', loop: '#1FA463', gold: '#FFC531', ink: '#14204A' };
  const blk = (x, y, w, txt, col = C.mov, ico = true) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="8" fill="${col}"/>${ico ? `<rect x="${x + 6}" y="${y + 6}" width="18" height="18" rx="5" fill="#fff" opacity=".3"/>` : ''}<text x="${x + (ico ? 31 : 11)}" y="${y + 20}" class="tat w s">${txt}</text>`;
  const flagIco = (x, y, s = 1, col = '#fff') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6 9V-9" stroke="${col}" stroke-width="2.6" stroke-linecap="round"/><path d="M-5 -8c4 -2 7 2 12 0v9c-5 2 -8 -2 -12 0z" fill="${col}"/></g>`;
  const hat = (x, y, w, txt) => `<path d="M${x + 8} ${y + 6}q30 -18 60 0z" fill="${C.hat}"/><rect x="${x}" y="${y + 2}" width="${w}" height="34" rx="11" fill="${C.hat}"/>${flagIco(x + 18, y + 18, 1)}<text x="${x + 34}" y="${y + 24}" class="tat w s">${txt}</text>`;
  const SM = (attr, values, dur = 5.5, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;
  const MV = (values, keyTimes, dur = 5.5) => `<animateTransform attributeName="transform" type="translate" values="${values}" keyTimes="${keyTimes}" dur="${dur}s" repeatCount="indefinite"/>`;
  const show = (from, to, dur = 5.5) => SM('opacity', '0;0;1;1;0;0', dur, `keyTimes="0;${(from / dur).toFixed(3)};${(from / dur + .01).toFixed(3)};${(to / dur).toFixed(3)};${(to / dur + .01).toFixed(3)};1"`);
  const bubble = (x, y, w, txt, think) => think
    ? `<g><ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="17" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><circle cx="${x - w / 4}" cy="${y + 22}" r="5" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><circle cx="${x - w / 4 - 6}" cy="${y + 32}" r="3" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s">${txt}</text></g>`
    : `<g><rect x="${x - w / 2}" y="${y - 16}" width="${w}" height="32" rx="12" fill="#fff" stroke="#14204A" stroke-width="2"/><path d="M${x - w / 4} ${y + 15}l-6 12l14 -12" fill="#fff" stroke="#14204A" stroke-width="2" stroke-linejoin="round"/><rect x="${x - w / 4 - 6}" y="${y + 12}" width="18" height="4" fill="#fff"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s">${txt}</text></g>`;
  const ok = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;

  return {
    // l'escenari del teatre: un rectangle de 480 × 360 amb el (0, 0) al centre; x creix cap a la dreta i y cap amunt
    // (plain = només el teatre amb els actors, per a les històries)
    g1stage(plain) {
      const X = v => 160 + v * 280 / 480, Y = v => 116 - v * 210 / 360;
      const stage = `${bgs('escenari', 20, 11, 280, 210)}<rect x="20" y="11" width="280" height="210" rx="6" fill="none" stroke="#1B2B6B" stroke-width="3"/>`;
      if (plain === true) return tSvg(232, `${stage}${spr('guida', X(-140) - 32, Y(-92) - 32, 64, 64, 1)}${spr('numi', X(0) - 34, Y(-88) - 34, 68, 68, 1)}${spr('vuit', X(140) - 32, Y(-92) - 32, 64, 64, 1)}
        <g ${tA(.6)}>${bubble(X(0), 40, 150, L('Benvinguts!', '¡Bienvenidos!'))}</g>`);
      const ax = `<path d="M24 116H296M160 15V217" stroke="#14204A" stroke-width="6" opacity=".35"/><path d="M24 116H292M160 19V217" stroke="#fff" stroke-width="3"/><path d="M286 109l10 7l-10 7M153 25l7 -10l7 10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      return tSvg(232, `${stage}${spr('guida', X(-150) - 28, Y(-95) - 28, 56, 56)}
        <g ${tA(.4, 'ta-fade')}>${ax}<text x="286" y="104" text-anchor="end" class="tat w b">x</text><text x="172" y="34" class="tat w b">y</text></g>
        <g ${tA(.9)}><circle cx="160" cy="116" r="6" fill="${C.gold}" stroke="#14204A" stroke-width="2"/></g>
        <g ${tA(1)}>${pill(122, 96, 64, '0, 0', C.ink)}</g>
        <g ${tA(1.6)}>${pill(258, 140, 70, '240', '#1F5FBF')}</g><g ${tA(1.8)}>${pill(62, 140, 70, '-240', '#1F5FBF')}</g>
        <g ${tA(2)}>${pill(124, 30, 56, '180', '#C26F18')}</g><g ${tA(2.2)}>${pill(124, 204, 62, '-180', '#C26F18')}</g>
        <g>${MV('0 0;0 0;70 0;70 0;0 0', '0;.5;.62;.9;1')}<g transform="translate(160 116)">${spr('numi', -24, -46, 48, 48, 1)}<g opacity="0">${show(3.5, 5)}${pill(0, -58, 104, L('x = 120 →', 'x = 120 →'), C.mov)}</g></g></g>`);
    },
    // el pont per a qui ve de Tech Robot: els blocs d'en Bit i el seu equivalent a l'escenari (+ el bloc nou «apunta en direcció»)
    g1bridge() {
      const fs = 'style="font-size:12.5px"';
      const b = (x, y, w, txt, col) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="8" fill="${col}"/><text x="${x + 9}" y="${y + 20}" class="tat w s" ${fs}>${txt}</text>`;
      const rows = [[L('Endavant', 'Adelante'), L('mou-te 50 passos', 'muévete 50 pasos')], [L('Gira a la dreta', 'Gira a la derecha'), L('gira 90 graus', 'gira 90 grados')], [L("Gira a l'esquerra", 'Gira a la izquierda'), L('gira -90 graus', 'gira -90 grados')]];
      const grid = [0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${10 + i * 22} 40V166" stroke="#C9D6FB" stroke-width="1"/>`).join('') + [0, 1, 2, 3, 4, 5].map(i => `<path d="M6 ${44 + i * 24}H152" stroke="#C9D6FB" stroke-width="1"/>`).join('');
      return tSvg(226, `<rect x="2" y="4" width="154" height="168" rx="12" fill="#EEF3FF" stroke="#C9D6FB" stroke-width="2"/><g opacity=".7">${grid}</g>
        <rect x="164" y="4" width="154" height="168" rx="12" fill="#FFF1E0" stroke="#F4CFA0" stroke-width="2"/>
        <text x="79" y="27" text-anchor="middle" class="tat b">${L('En Bit', 'En Bit')}</text><text x="241" y="27" text-anchor="middle" class="tat b">${L("A l'escenari", 'En el escenario')}</text>
        ${rows.map(([a, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${b(7, 40 + i * 44, 144, a, '#2F5BEA')}<circle cx="160" cy="${55 + i * 44}" r="10" fill="${C.gold}" stroke="#14204A" stroke-width="2"/><path d="M155 ${55 + i * 44}h8m-3 -4l4 4l-4 4" stroke="#14204A" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${b(169, 40 + i * 44, 144, c, C.mov)}</g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}><rect x="6" y="182" width="308" height="38" rx="12" fill="#FFF8E6" stroke="${C.gold}" stroke-width="2.5"/><rect x="12" y="190" width="66" height="22" rx="11" fill="${C.gold}"/><text x="45" y="206" text-anchor="middle" class="tat s">${L('NOU', 'NUEVO')}</text>${b(84, 186, 224, L('apunta en direcció 90', 'apunta en dirección 90'), C.mov)}</g>`);
    },
    // la bandera verda fa començar el guió: els blocs es fan un a un, de dalt a baix
    g1flag() {
      const hl = `<rect x="7" y="18" width="198" height="40" rx="11" fill="none" stroke="${C.gold}" stroke-width="4" opacity="0">${SM('opacity', '0;0;1;1;0', 5.5, 'keyTimes="0;.1;.12;.85;1"')}${SM('y', '18;18;60;96;96', 5.5, 'keyTimes="0;.12;.3;.52;1" calcMode="discrete"')}${SM('height', '40;40;34;34', 5.5, 'keyTimes="0;.12;.3;1" calcMode="discrete"')}</rect>`;
      return tSvg(222, `<rect x="4" y="8" width="204" height="172" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        ${hat(12, 20, 188, L('Quan comença', 'Al empezar'))}<g transform="translate(0 2)">${blk(16, 62, 184, L('mou-te 100 passos', 'muévete 100 pasos'))}${blk(16, 98, 184, L('digues Hola! 2 s', 'di ¡Hola! 2 s'), C.art)}</g>${hl}
        <g ${tA(3.4, 'ta-fade')}><path d="M30 140v22" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/><path d="M24 156l6 8l6 -8" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="44" y="160" class="tat s">${L('de dalt a baix', 'de arriba abajo')}</text></g>
        <g>${bgs('escenari', 214, 34, 102, 77)}<rect x="214" y="34" width="102" height="77" rx="5" fill="none" stroke="#1B2B6B" stroke-width="2.5"/></g>
        <g>${MV('0 0;0 0;50 0;50 0;0 0', '0;.27;.32;.95;1')}${spr('estel', 216, 66, 40, 40, 1)}</g>
        <g opacity="0">${show(1.9, 5)}<g>${MV('0 0;0 0;46 0;46 0;0 0', '0;.27;.32;.95;1')}${bubble(240, 22, 64, L('Hola!', '¡Hola!'))}</g></g>
        <g transform="translate(265 144)"><g ${tA(.2)}><circle r="22" fill="#1FA463" stroke="#155A34" stroke-width="3"/>${flagIco(1, 0, 1.25)}</g></g>
        <text x="265" y="186" text-anchor="middle" class="tat s">${L('bandera verda', 'bandera verde')}</text>
        <text x="160" y="210" text-anchor="middle" class="tat b" ${tA(.4, 'ta-fade')}>${L('Toques la bandera i el guió comença', 'Tocas la bandera y el guion empieza')}</text>`);
    },
    // mou-te: un número positiu fa avançar; un de negatiu, retrocedir (els passos són punts de l'escenari)
    g1move() {
      const X = v => 160 + v * .65, tick = v => `<path d="M${X(v)} 142v12" stroke="#14204A" stroke-width="2.5"/><text x="${X(v)}" y="172" text-anchor="middle" class="tat s">${v}</text>`;
      return tSvg(214, `<rect x="10" y="106" width="300" height="42" rx="10" fill="#F2DDA9" opacity=".6"/><path d="M22 148H298" stroke="#14204A" stroke-width="3" stroke-linecap="round"/>${[-200, -100, 0, 100, 200].map(tick).join('')}
        <g ${tA(.3, 'ta-in')}>${blk(8, 6, 200, L('mou-te 100 passos', 'muévete 100 pasos'))}</g>
        <g ${tA(2.7, 'ta-in')}>${blk(8, 40, 200, L('mou-te -200 passos', 'muévete -200 pasos'))}</g>
        <g ${tA(1.7, 'ta-fade')}><path d="M${X(0)} 100H${X(100) - 6}" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M${X(100) - 12} 93l9 7l-9 7" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${pill(X(100) + 46, 98, 64, '+100', '#1FA463')}</g>
        <g ${tA(3.9, 'ta-fade')}><path d="M${X(100)} 184H${X(-100) + 6}" stroke="#F08A24" stroke-width="5" stroke-linecap="round"/><path d="M${X(-100) + 12} 177l-9 7l9 7" fill="none" stroke="#F08A24" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${pill(160, 201, 120, L('enrere: -200', 'atrás: -200'), '#F08A24')}</g>
        <g>${MV(`0 0;0 0;${X(100) - 160} 0;${X(100) - 160} 0;${X(-100) - 160} 0;${X(-100) - 160} 0;0 0`, '0;.18;.28;.56;.68;.94;1')}${spr('tuga', 132, 92, 56, 56, 1)}</g>`);
    },
    // la recta de la x per a les preguntes: on és l'actor ara (sense dir on acabarà). A l'esquerra del 0, els negatius
    g1line(x0 = 0, art = 'numi') {
      // dibuixada a mida real (230 punts d'ample), perquè a les preguntes es veu petita
      const X = v => 115 + v * 206 / 480, Y = 58;
      let tk = '';
      for (let v = -200; v <= 200; v += 50) tk += `<path d="M${X(v)} ${Y - (v % 100 ? 4 : 7)}V${Y + (v % 100 ? 4 : 7)}" stroke="#14204A" stroke-width="${v ? 2 : 3}" stroke-linecap="round"/>${v % 100 ? '' : `<text x="${X(v)}" y="${Y + 23}" text-anchor="middle" class="tat s"${v < 0 ? ' style="fill:#C2410C"' : v > 0 ? ' style="fill:#1E7A42"' : ''}>${v}</text>`}`;
      const px = Math.max(30, Math.min(200, X(x0) + (X(x0) > 150 ? -46 : 46)));
      return `<svg class="tani" viewBox="0 0 230 88" aria-hidden="true"><rect x="${X(-240)}" y="${Y - 11}" width="${X(0) - X(-240)}" height="22" rx="7" fill="#FFE7D1"/><rect x="${X(0)}" y="${Y - 11}" width="${X(240) - X(0)}" height="22" rx="7" fill="#DDF5E7"/>
        <text x="${X(-236)}" y="${Y + 5}" class="tat b" style="fill:#C2410C">−</text><text x="${X(236)}" y="${Y + 5}" text-anchor="end" class="tat b" style="fill:#1E7A42">+</text>
        <path d="M${X(-216)} ${Y}H${X(222)}" stroke="#E0533F" stroke-width="2.6" stroke-linecap="round"/>${tk}
        ${spr(art, X(x0) - 19, 2, 38, 38, 0)}<path d="M${X(x0)} 40V${Y - 7}" stroke="#14204A" stroke-width="2" stroke-dasharray="3 3"/><circle cx="${X(x0)}" cy="${Y}" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>
        <rect x="${px - 30}" y="10" width="60" height="22" rx="11" fill="#14204A"/><text x="${px}" y="26" text-anchor="middle" class="tat s w">x = ${x0}</text></svg>`;
    },
    // la direcció: 90 mira a la dreta, 180 avall, -90 a l'esquerra i 0 amunt; «gira 90 graus» és un quart de volta cap a la dreta
    g1dir() {
      const cx = 86, cy = 104, R = 64;
      const lab = (x, y, t, k) => `<g><circle cx="${x}" cy="${y}" r="21" fill="#fff" stroke="#C9D6FB" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="21" fill="${C.gold}" opacity="0">${SM('opacity', [0, 1, 2, 3, 0].map(i => i === k ? 1 : 0).join(';'), 5.5, 'keyTimes="0;.2;.4;.6;.8" calcMode="discrete"')}</circle><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat b">${t}</text></g>`;
      return tSvg(222, `<circle cx="${cx}" cy="${cy}" r="${R - 20}" fill="#EEF3FF" stroke="#C9D6FB" stroke-width="3" stroke-dasharray="6 7"/>
        ${lab(cx + R, cy, '90', 0)}${lab(cx, cy + R, '180', 1)}${lab(cx - R, cy, '-90', 2)}${lab(cx, cy - R, '0', 3)}
        <g transform="translate(${cx} ${cy})"><g><animateTransform attributeName="transform" type="rotate" values="0;0;90;90;180;180;270;270;360;360" keyTimes="0;.14;.2;.34;.4;.54;.6;.74;.8;1" dur="5.5s" repeatCount="indefinite"/>${spr('cotxe', -34, -18, 68, 36)}</g></g>
        <g ${tA(.4, 'ta-in')}>${blk(172, 26, 144, L('gira 90 graus', 'gira 90 grados'))}<text x="244" y="78" text-anchor="middle" class="tat s">${L('↻ cap a la dreta', '↻ hacia la derecha')}</text></g>
        <g ${tA(1.6, 'ta-in')}>${blk(172, 100, 144, L('gira -90 graus', 'gira -90 grados'))}<text x="244" y="152" text-anchor="middle" class="tat s">${L("↺ cap a l'esquerra", '↺ hacia la izquierda')}</text></g>
        <g ${tA(2.2, 'ta-pop')}><circle cx="${cx + 45}" cy="${cy - 45}" r="15" fill="#FFF4D6" stroke="#E8C66A" stroke-width="2"/><text x="${cx + 45}" y="${cy - 40}" text-anchor="middle" class="tat s">45</text></g>
        <g ${tA(2.5, 'ta-pop')}><circle cx="${cx - 45}" cy="${cy + 45}" r="17" fill="#FFF4D6" stroke="#E8C66A" stroke-width="2"/><text x="${cx - 45}" y="${cy + 50}" text-anchor="middle" class="tat s">-135</text></g>
        <text x="160" y="214" text-anchor="middle" class="tat b" ${tA(2.8, 'ta-fade')}>${L('Els graus del mig: diagonals', 'Los grados de en medio: diagonales')}</text>`);
    },
    // digues (bafarada) i pensa (núvol); «durant 2 segons»: la frase es veu 2 segons i després va el bloc següent
    g1say() {
      const bar = (x, y, w, from, to) => `<g opacity="0">${show(from, to)}<rect x="${x}" y="${y}" width="${w}" height="8" rx="4" fill="#E3E9FA"/><rect x="${x}" y="${y}" width="0" height="8" rx="4" fill="${C.art}">${SM('width', `0;0;${w};${w}`, 5.5, `keyTimes="0;${(from / 5.5).toFixed(3)};${(to / 5.5).toFixed(3)};1"`)}</rect></g>`;
      return tSvg(222, `<rect x="0" y="118" width="320" height="6" rx="3" fill="#E3E9FA"/>
        ${spr('flama', 46, 56, 70, 70, 1)}${spr('vuit', 214, 56, 70, 70, 2)}
        <g opacity="0">${show(.5, 2.5)}${bubble(96, 30, 92, L('Hola!', '¡Hola!'))}</g>
        <g opacity="0">${show(2.6, 4.6)}${bubble(96, 30, 100, L('Som-hi!', '¡Vamos!'))}</g>
        ${bar(50, 2, 92, .5, 2.5)}${bar(46, 2, 100, 2.6, 4.6)}
        <g opacity="0">${show(1, 5.2)}${bubble(250, 26, 84, 'Mmm…', true)}</g>
        <g ${tA(.4, 'ta-in')}>${blk(6, 134, 190, L('digues Hola! 2 s', 'di ¡Hola! 2 s'), C.art)}</g><g ${tA(2.4, 'ta-in')}>${blk(6, 170, 190, L('digues Som-hi! 2 s', 'di ¡Vamos! 2 s'), C.art)}</g>
        <g ${tA(1, 'ta-in')}>${blk(204, 134, 112, L('pensa Mmm…', 'piensa Mmm…'), C.art, false)}</g>
        <text x="260" y="188" text-anchor="middle" class="tat s" ${tA(1.4, 'ta-fade')}>${L('núvol = pensa', 'nube = piensa')}</text>
        <text x="160" y="214" text-anchor="middle" class="tat s" ${tA(3, 'ta-fade')}>${L('Primer una frase, després l\'altra', 'Primero una frase, después la otra')}</text>`);
    },
    // el fons de l'escenari canvia (bosc → platja → espai → i torna al primer) i els personatges s'hi queden
    g1bg() {
      const L3 = [['bosc', L('bosc', 'bosque')], ['platja', L('platja', 'playa')], ['espai', L('espai', 'espacio')]];
      const op = k => SM('opacity', ['1;0;0;1', '0;1;0;0', '0;0;1;0'][k], 5.5, 'keyTimes="0;.31;.63;.99" calcMode="discrete"');
      return tSvg(244, `<g>${L3.map(([n], k) => `<g opacity="${k ? 0 : 1}">${op(k)}${bgs(n, 70, 8, 180, 135)}</g>`).join('')}<rect x="70" y="8" width="180" height="135" rx="6" fill="none" stroke="#1B2B6B" stroke-width="3"/></g>
        ${spr('numi', 128, 72, 64, 64, 1)}
        ${L3.map(([n, t], k) => `<g>${bgs(n, 46 + k * 82, 158, 64, 44)}<rect x="${46 + k * 82}" y="158" width="64" height="44" rx="5" fill="none" stroke="#9AA6C8" stroke-width="2"/><text x="${78 + k * 82}" y="222" text-anchor="middle" class="tat s">${k + 1} ${t}</text></g>`).join('')}
        <rect x="42" y="154" width="72" height="52" rx="8" fill="none" stroke="${C.gold}" stroke-width="4">${SM('x', '42;124;206;42', 5.5, 'keyTimes="0;.31;.63;.99" calcMode="discrete"')}</rect>
        <g ${tA(.3, 'ta-in')}><rect x="254" y="30" width="62" height="54" rx="10" fill="${C.art}"/><text x="285" y="52" text-anchor="middle" class="tat w s">${L('fons', 'fondo')}</text><text x="285" y="72" text-anchor="middle" class="tat w s">${L('següent', 'siguiente')}</text></g>
        <g ${tA(1.2, 'ta-fade')}><path d="M288 92q10 40 -40 60" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/></g>
        <g ${tA(3.6, 'ta-fade')}><path d="M232 232q-77 14 -150 0" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round"/><path d="M90 225l-9 7l10 5" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // una escena és com una vinyeta de còmic: un fons, uns personatges i el que fan o diuen
    g1scene() {
      const P = [['bosc', 'guida', L('Hola!', '¡Hola!'), L('fons: bosc', 'fondo: bosque')], ['platja', 'guida', L('Calor!', '¡Calor!'), L('fons: platja', 'fondo: playa')], ['nit', null, '', L("amaga't", 'escóndete')]];
      return tSvg(214, P.map(([b, s, t, c], k) => { const x = 8 + k * 104;
        return `<g ${tA(.3 + k * 1.1, 'ta-in')}><rect x="${x - 2}" y="18" width="100" height="96" rx="8" fill="#14204A"/>${bgs(b, x, 20, 96, 92)}
          ${s ? spr(s, x + 26, 62, 44, 44, k ? 1 : 0) : `<g opacity=".35">${spr('guida', x + 26, 62, 44, 44, 3)}</g>`}${t ? `<rect x="${x + 8}" y="28" width="${t.length * 9 + 18}" height="26" rx="10" fill="#fff" stroke="#14204A" stroke-width="1.6"/><text x="${x + 17}" y="46" class="tat s">${t}</text>` : ''}
          <circle cx="${x + 2}" cy="18" r="13" fill="${C.gold}" stroke="#14204A" stroke-width="2"/><text x="${x + 2}" y="23" text-anchor="middle" class="tat b">${k + 1}</text>
          <rect x="${x}" y="124" width="96" height="28" rx="8" fill="${C.art}"/><text x="${x + 48}" y="143" text-anchor="middle" class="tat w s">${c}</text></g>`; }).join('') +
        `<text x="160" y="182" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('Escena = fons + personatges', 'Escena = fondo + personajes')}</text>
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.9, 'ta-fade')}>${L('+ el que fan i diuen', '+ lo que hacen y dicen')}</text>`);
    },
    // el pla de la presentació: què hi posem (i què no hi posem mai a internet ni en un projecte)
    g1plan() {
      const yes = [L('El meu nom', 'Mi nombre'), L("Què m'agrada", 'Lo que me gusta'), L('El meu lloc preferit', 'Mi sitio favorito')], no = [L('Adreça', 'Dirección'), L('Telèfon', 'Teléfono')];
      return tSvg(222, `<rect x="8" y="8" width="196" height="206" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><text x="106" y="32" text-anchor="middle" class="tat b">${L('El meu pla', 'Mi plan')}</text>
        ${yes.map((t, i) => `<g transform="translate(20 ${44 + i * 34})"><rect width="22" height="22" rx="6" fill="#fff" stroke="#C9B48A" stroke-width="2"/><path ${tA(.5 + i * .6, 'ta-draw')} pathLength="1" d="M5 11l5 5l8 -10" stroke="#1FA463" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="32" y="17" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-in')}><rect x="18" y="150" width="176" height="56" rx="10" fill="#FDEBEB" stroke="#F4B7B7" stroke-width="2"/><text x="28" y="168" class="tat s">${L('Mai no hi posis:', 'Nunca pongas:')}</text>
          ${no.map((t, i) => `${ko(36 + i * 84, 190, 8)}<text x="${48 + i * 84}" y="195" class="tat s">${t}</text>`).join('')}</g>
        ${spr('estel', 226, 92, 86, 86, 1)}<g ${tA(3, 'ta-pop')}>${bubble(262, 60, 104, L('Soc l\'Estel!', '¡Soy Estel!'))}</g>
        <g ${tA(3.6, 'ta-pop')}>${ok(296, 196, 12)}</g>`);
    }
  };
})());
