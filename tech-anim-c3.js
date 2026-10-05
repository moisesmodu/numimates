/* Numi Tech · Tech Creadors · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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

/* ── unitat 2 ── */
/* Tech Creadors · unitat 2 «Animació» · animacions de teoria (TANI)
   Dibuixos propis de Numi. Els personatges són els mateixos de l'escenari (STG_ART), dibuixats dins de l'animació. */
{
  // un personatge de l'escenari (vestit c) centrat a (x, y) amb amplada w
  const g2a = (k, c, x, y, w) => {
    if (typeof STG_ART === 'undefined' || !STG_ART[k]) return `<circle cx="${x}" cy="${y}" r="${w / 3}" fill="#FF9A2E"/>`;
    const s = STG_ART[k].svg(c), vb = (s.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 100 100', p = vb.split(/[\s,]+/).map(Number), h = w * p[3] / p[2];
    return s.replace('<svg ', `<svg x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" `);
  };
  // dos vestits que s'alternen (canvi sec, cada dur/2 segons)
  const g2sw = (a, b, dur) => `<g>${a}<animate attributeName="opacity" values="1;0" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></g><g opacity="0">${b}<animate attributeName="opacity" values="0;1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></g>`;
  // un bloc de l'escenari (color de la categoria), amb el text en blanc
  const g2b = (x, y, w, txt, col = '#C447A8', extra = '') => `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/><rect x="${x}" y="${y + 22}" width="${w}" height="6" rx="3" fill="#000" opacity=".12"/><text x="${x + 10}" y="${y + 19}" class="tat w s" style="font-size:13px">${txt}</text></g>`;
  // un escenari petit (requadre amb fons de mar)
  const g2st = (x, y, w, h, id = 'g2sea') => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD3F7"/><stop offset="1" stop-color="#2E86DE"/></linearGradient></defs>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="url(#${id})" stroke="#1C5FA8" stroke-width="2.5"/><path d="M${x + 2} ${y + h - 14} Q${x + w / 2} ${y + h - 24} ${x + w - 2} ${y + h - 14} V${y + h - 6} Q${x + w - 2} ${y + h - 2} ${x + w - 8} ${y + h - 2} H${x + 8} Q${x + 2} ${y + h - 2} ${x + 2} ${y + h - 6}Z" fill="#F4D58D"/>
    ${[[.18, .7], [.82, .5], [.6, .3]].map(([fx, fy], i) => `<circle cx="${x + w * fx}" cy="${y + h * fy}" r="${3 + i}" fill="#fff" opacity=".55"><animate attributeName="cy" values="${y + h * fy};${y + 10};${y + h * fy}" dur="${3 + i}s" repeatCount="indefinite"/></circle>`).join('')}`;
  const VS = L('vestit següent', 'disfraz siguiente');

  Object.assign(TANI, {
    // un segon partit en trossos iguals (per a les preguntes amb decimals): 2 meitats de 0,5 s o 4 quarts de 0,25 s
    // (a mida real, 230 d'ample: a les preguntes es veu petit)
    g2sec(n = 2) {
      const x0 = 14, w = 202, part = w / n, lab = n === 2 ? '0,5 s' : n === 4 ? '0,25 s' : stgNum(Math.round(100 / n) / 100) + ' s';
      const cols = ['#FFC531', '#FFDF7A'];
      const segs = Array.from({ length: n }, (_, i) => `<rect x="${x0 + i * part + 1.5}" y="40" width="${part - 3}" height="26" rx="7" fill="${cols[i % 2]}" stroke="#B07A00" stroke-width="1.5"/><text x="${x0 + i * part + part / 2}" y="58" text-anchor="middle" class="tat s">${lab}</text>`).join('');
      return `<svg class="tani" viewBox="0 0 230 92" aria-hidden="true"><rect x="60" y="6" width="110" height="26" rx="13" fill="#14204A"/><text x="115" y="24" text-anchor="middle" class="tat s w">${L('Això és 1 segon', 'Esto es 1 segundo')}</text>
        ${segs}<path d="M${x0} 76V86M${x0 + w} 76V86M${x0} 81H${x0 + w}" stroke="#14204A" stroke-width="2" stroke-linecap="round"/><text x="${x0}" y="80" text-anchor="start" dx="4" class="tat s" style="font-size:11px">0</text><text x="${x0 + w}" y="80" text-anchor="end" dx="-4" class="tat s" style="font-size:11px">1 s</text></svg>`;
    },
    // un dibuix animat són molts dibuixos que canvien de pressa (el llibret que es passa amb el dit)
    g2flip() {
      const fish = c => g2a('peix', c, 0, 0, 92);
      const pages = [3, 2, 1, 0].map(k => `<rect x="${14 + k * 4}" y="${14 + k * 4}" width="124" height="100" rx="8" fill="#fff" stroke="#C9D6FB" stroke-width="2"/>`).join('');
      const frames = [0, 1, 0, 1].map((c, i) => `<g ${tA(.4 + i * .45, 'ta-pop')}><rect x="${24 + i * 72}" y="148" width="60" height="44" rx="5" fill="#fff"/><g transform="translate(${54 + i * 72} 170)">${g2a('peix', c, 0, 0, 50)}</g><text x="${30 + i * 72}" y="161" class="tat s" style="font-size:13px;fill:#7C8BB5">${i + 1}</text></g>`).join('');
      const holes = Array.from({ length: 19 }, (_, i) => `<rect x="${16 + i * 16}" y="${i % 2 ? 140 : 140}" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${16 + i * 16}" y="196" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/>`).join('');
      return tSvg(214, `${pages}
        <g transform="translate(76 64)">${g2sw(fish(0), fish(1), .5)}</g>
        <path d="M138 92 L138 114 L116 114 Z" fill="#DCE4FA"><animate attributeName="d" values="M138 92 L138 114 L116 114 Z;M138 66 L138 114 L92 114 Z;M138 92 L138 114 L116 114 Z" dur=".5s" repeatCount="indefinite"/></path>
        <g ${tA(.2, 'ta-in')}><text x="164" y="34" class="tat b">${L('Un dibuix animat', 'Un dibujo animado')}</text><text x="164" y="56" class="tat s">${L('són molts dibuixos', 'son muchos dibujos')}</text><text x="164" y="74" class="tat s">${L('que canvien', 'que cambian')}</text><text x="164" y="92" class="tat s">${L('molt de pressa.', 'muy deprisa.')}</text></g>
        <g ${tA(2.4, 'ta-pop')}><rect x="164" y="100" width="132" height="26" rx="13" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="230" y="118" text-anchor="middle" class="tat s" style="fill:#8A5A00">${L('= moviment!', '= ¡movimiento!')}</text></g>
        <rect x="10" y="134" width="300" height="74" rx="8" fill="#2A2F45"/>${holes}${frames}
        <rect x="21" y="145" width="66" height="50" rx="7" fill="none" stroke="#F2B21B" stroke-width="3.5" ${tA(2.2, 'ta-fade')}><animateTransform attributeName="transform" type="translate" values="0 0;72 0;144 0;216 0" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>`);
    },

    // els vestits d'un personatge: vestit 1, vestit 2… i «vestit següent» passa a l'altre (i del darrer torna al primer)
    g2cost() {
      const ring = (x, on) => `<rect x="${x - 4}" y="124" width="104" height="80" rx="15" fill="none" stroke="#C447A8" stroke-width="4" opacity="${on ? 1 : 0}"><animate attributeName="opacity" values="${on ? '1;0' : '0;1'}" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>`;
      const card = (x, c, n) => `<g ${tA(.3 + n * .4, 'ta-in')}><rect x="${x}" y="128" width="96" height="72" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g transform="translate(${x + 48} 154)">${g2a('peix', c, 0, 0, 62)}</g>
        <text x="${x + 48}" y="194" text-anchor="middle" class="tat s">${L('vestit', 'disfraz')} ${n + 1}</text></g>`;
      return tSvg(214, `${g2st(10, 10, 140, 104)}<g transform="translate(80 58)">${g2sw(g2a('peix', 0, 0, 0, 96), g2a('peix', 1, 0, 0, 96), 2)}</g>
        ${g2b(162, 22, 146, VS, '#C447A8', tA(.8, 'ta-pop'))}
        <g ${tA(1.2, 'ta-in')}><text x="164" y="74" class="tat s">${L('Canvia el dibuix', 'Cambia el dibujo')}</text><text x="164" y="94" class="tat s">${L('pel següent.', 'por el siguiente.')}</text></g>
        ${card(30, 0, 0)}${card(194, 1, 1)}${ring(30, true)}${ring(194, false)}
        <g ${tA(1.6, 'ta-fade')}><path d="M134 152 H184" stroke="#C447A8" stroke-width="3.5" stroke-linecap="round"/><path d="M178 145 L188 152 L178 159" fill="none" stroke="#C447A8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M184 182 Q160 196 136 182" fill="none" stroke="#C447A8" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/><path d="M142 176 L134 182 L143 188" fill="none" stroke="#C447A8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },

    // sense «espera», els vestits canvien tan de pressa que no es veu res; amb «espera», sí
    g2wait() {
      const row = (y, blocks, stage, title, col, t) => `<g ${tA(t, 'ta-in')}><text x="10" y="${y}" class="tat s" style="fill:${col}">${title}</text>${blocks}${stage}</g>`;
      const med = c => g2a('medusa', c, 0, 0, 52);
      const blur = `<g transform="translate(240 64)" opacity=".55">${med(0)}</g><g transform="translate(244 64)" opacity=".55">${med(1)}</g>
        <g stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"><path d="M206 50h-12M206 64h-16M206 78h-12M278 50h12M278 64h16M278 78h12"><animate attributeName="opacity" values="1;.2;1" dur=".25s" repeatCount="indefinite"/></path></g>`;
      const clear = `<g transform="translate(242 162)">${g2sw(med(0), med(1), 1)}</g>`;
      const r1 = row(20, `${g2b(10, 30, 152, VS)}${g2b(10, 62, 152, VS)}`, `${g2st(172, 26, 138, 76, 'g2seaA')}${blur}`, L('Sense espera', 'Sin espera'), '#C0392B', .2);
      const r2 = row(124, `${g2b(10, 134, 152, VS)}${g2b(10, 166, 152, L('espera 0,5 segons', 'espera 0,5 segundos'), '#1FA463')}`, `${g2st(172, 124, 138, 76, 'g2seaB')}${clear}`, L('Amb espera', 'Con espera'), '#147A47', 1.6);
      return tSvg(214, `${r1}${r2}
        <g ${tA(1.2, 'ta-pop')}><rect x="176" y="2" width="128" height="22" rx="11" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="240" y="18" text-anchor="middle" class="tat s" style="font-size:13px;fill:#C0392B">${L('Massa ràpid!', '¡Demasiado rápido!')}</text></g>
        <g ${tA(2.6, 'ta-pop')}><rect x="176" y="100" width="128" height="22" rx="11" fill="#E7F7EE" stroke="#1FA463" stroke-width="2"/><text x="240" y="116" text-anchor="middle" class="tat s" style="font-size:13px;fill:#147A47">${L('Ara es veu ✓', 'Ahora se ve ✓')}</text></g>`);
    },

    // 30 fotogrames per segon: cada volta del «per sempre» és un fotograma, i «mou-te 6» avança 6 punts a cada un
    g2fps() {
      const D = 2.5, kt = 'keyTimes="0;.2;.4;.6;.8" calcMode="discrete"';
      const frames = [0, 1, 2, 3, 4].map(i => `<rect x="${16 + i * 60}" y="128" width="50" height="40" rx="5" fill="#fff"/><g transform="translate(${30 + i * 60 + i * 5} 148)">${g2a('peix', i % 2, 0, 0, 26)}</g><text x="${20 + i * 60}" y="139" class="tat s" style="font-size:11px">${i + 1}</text>`).join('');
      const holes = Array.from({ length: 19 }, (_, i) => `<rect x="${14 + i * 16}" y="120" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/><rect x="${14 + i * 16}" y="171" width="7" height="5" rx="1.5" fill="#fff" opacity=".8"/>`).join('');
      return tSvg(226, `${g2st(8, 8, 150, 100, 'g2seaF')}
        <g><animateTransform attributeName="transform" type="translate" values="40 60;64 60;88 60;112 60;136 60" ${kt} dur="${D}s" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 40)}</g>
        <g ${tA(.3, 'ta-in')}><path d="M170 12 h138 a6 6 0 0 1 6 6 v16 a6 6 0 0 1 -6 6 h-124 v34 h124 a6 6 0 0 1 6 6 v6 a6 6 0 0 1 -6 6 h-138 a6 6 0 0 1 -6 -6 v-68 a6 6 0 0 1 6 -6z" fill="#1FA463"/>
          <text x="176" y="31" class="tat w s" style="font-size:13px">${L('per sempre', 'por siempre')}</text>${g2b(184, 44, 128, L('mou-te 6 passos', 'muévete 6 pasos'), '#3D7BF4')}</g>
        <g ${tA(1, 'ta-pop')}><rect x="174" y="92" width="138" height="22" rx="11" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="243" y="108" text-anchor="middle" class="tat s" style="font-size:12.5px;fill:#8A5A00">${L('1 volta = 1 fotograma', '1 vuelta = 1 fotograma')}</text></g>
        <rect x="8" y="116" width="304" height="64" rx="8" fill="#2A2F45"/>${holes}${frames}
        <rect x="13" y="125" width="56" height="46" rx="7" fill="none" stroke="#F2B21B" stroke-width="3.5"><animateTransform attributeName="transform" type="translate" values="0 0;60 0;120 0;180 0;240 0" ${kt} dur="${D}s" repeatCount="indefinite"/></rect>
        <text x="160" y="201" text-anchor="middle" class="tat b" ${tA(1.8, 'ta-fade')}>${L("30 fotogrames cada segon", '30 fotogramas cada segundo')}</text>
        <text x="160" y="220" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>${L('6 punts × 30 = 180 punts per segon', '6 puntos × 30 = 180 puntos por segundo')}</text>`);
    },

    // «per sempre» torna a començar i no s'acaba mai: el que hi ha a sota no arriba mai
    g2never() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><path d="M14 14 h160 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-142 v64 h142 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-160 a6 6 0 0 1 -6 -6 v-104 a6 6 0 0 1 6 -6z" fill="#1FA463"/>
          <text x="22" y="34" class="tat w s">${L('per sempre', 'por siempre')}</text>${g2b(32, 50, 148, L('mou-te 5 passos', 'muévete 5 pasos'), '#3D7BF4')}${g2b(32, 80, 148, L('rebota a la vora', 'rebota en el borde'), '#3D7BF4')}
          <circle r="5" fill="#FFE27A" stroke="#fff" stroke-width="2"><animateMotion dur="1.6s" repeatCount="indefinite" path="M20 48 V112"/></circle></g>
        <g ${tA(1.4, 'ta-in')} opacity=".55">${g2b(8, 150, 172, L('digues «Adéu!»', 'di «¡Adiós!»'))}</g>
        <g ${tA(2.2, 'ta-pop')}><path d="M14 164 H174" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"/><circle cx="172" cy="152" r="10" fill="#EF5A5A"/><path d="M167 147 l10 10 M177 147 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><text x="94" y="202" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Mai no hi arriba!', '¡Nunca llega aquí!')}</text></g>
        ${g2st(190, 20, 122, 120, 'g2seaN')}
        <g><animateTransform attributeName="transform" type="translate" values="216 78;286 78;216 78" dur="3s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="3s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 48)}</g></g>
        <g ${tA(.8, 'ta-in')}><text x="251" y="166" text-anchor="middle" class="tat s">${L('Neda i neda…', 'Nada y nada…')}</text><text x="251" y="186" text-anchor="middle" class="tat s">${L('i no para mai.', 'y no para nunca.')}</text></g>`);
    },

    // «si toques la vora, rebota»: arriba a la paret i dona la volta (la direcció canvia de 90 a -90)
    g2bounce() {
      const dur = 4;
      return tSvg(214, `${g2st(10, 10, 300, 128, 'g2seaR')}
        <rect x="10" y="10" width="8" height="128" rx="4" fill="#F2B21B" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.94;.97;.99;1" dur="${dur}s" repeatCount="indefinite"/></rect>
        <rect x="302" y="10" width="8" height="128" rx="4" fill="#F2B21B" opacity="0"><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.47;.52;1" dur="${dur}s" repeatCount="indefinite"/></rect>
        <g><animateTransform attributeName="transform" type="translate" values="60 70;262 70;60 70" keyTimes="0;.5;1" dur="${dur}s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 70)}</g></g>
        <g opacity="0"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.48;.6;.64;1" dur="${dur}s" repeatCount="indefinite"/><path d="M286 34 l6 12 l13 2 l-10 8 l3 13 l-12 -7 l-12 7 l3 -13 l-10 -8 l13 -2z" fill="#FFE27A" stroke="#C9780E" stroke-width="2"/><text x="252" y="32" class="tat b" style="fill:#fff">boing!</text></g>
        <g><rect x="20" y="18" width="150" height="26" rx="13" fill="#14204A" opacity=".55"/><text x="32" y="36" class="tat s" style="fill:#fff">${L('direcció', 'dirección')}</text>
          <text x="116" y="36" class="tat b" style="fill:#FFE27A">90 →<animate attributeName="opacity" values="1;0" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></text>
          <text x="116" y="36" class="tat b" style="fill:#FFE27A" opacity="0">← -90<animate attributeName="opacity" values="0;1" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></text></g>
        ${g2b(40, 150, 240, L('si toques la vora, rebota', 'si tocas el borde, rebota'), '#3D7BF4', tA(.4, 'ta-pop'))}
        <text x="160" y="202" text-anchor="middle" class="tat s" ${tA(1, 'ta-in')}>${L('Arriba a la vora i dona la volta.', 'Llega al borde y da la vuelta.')}</text>`);
    },

    // dos guions alhora: la bandera verda els engega tots dos; un mou el peix i l'altre li canvia el vestit
    g2para() {
      const scr = (x, title, b1, b2, c1, c2, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="46" width="146" height="98" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="${x}" y="46" width="146" height="26" rx="12" fill="#FFF3D6"/><text x="${x + 12}" y="64" class="tat s" style="font-size:13px;fill:#8A5A00">${title}</text>
        ${g2b(x + 8, 80, 130, b1, c1)}${g2b(x + 8, 110, 130, b2, c2)}
        <rect x="${x + 6}" y="78" width="134" height="32" rx="9" fill="none" stroke="#F2B21B" stroke-width="3"><animate attributeName="y" values="78;108" dur="1s" calcMode="discrete" repeatCount="indefinite"/></rect></g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}><rect x="96" y="6" width="128" height="30" rx="15" fill="#1FA463"/><path d="M114 30V12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M115 13c5-3 8 2 15 0v10c-7 2-10-3-15 0z" fill="#fff"/><text x="138" y="26" class="tat w s" style="font-size:13px">${L('Comença', 'Empieza')}</text></g>
        <g ${tA(.6, 'ta-fade')}><path d="M120 36 Q90 40 82 46" fill="none" stroke="#1FA463" stroke-width="2.6"/><path d="M200 36 Q230 40 238 46" fill="none" stroke="#1FA463" stroke-width="2.6"/></g>
        ${scr(8, L('Guió 1', 'Guion 1'), L('mou-te 3 passos', 'muévete 3 pasos'), L('rebota a la vora', 'rebota en el borde'), '#3D7BF4', '#3D7BF4', .5)}
        ${scr(166, L('Guió 2', 'Guion 2'), VS, L('espera 0,5 s', 'espera 0,5 s'), '#C447A8', '#1FA463', .9)}
        ${g2st(8, 152, 304, 56, 'g2seaP')}
        <g><animateTransform attributeName="transform" type="translate" values="40 176;280 176;40 176" dur="6s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="6s" calcMode="discrete" repeatCount="indefinite"/>${g2sw(g2a('peix', 0, 0, 0, 52), g2a('peix', 1, 0, 0, 52), 1)}</g></g>
        <g ${tA(1.6, 'ta-pop')}><rect x="104" y="140" width="112" height="22" rx="11" fill="#1FA463"/><text x="160" y="156" text-anchor="middle" class="tat w s" style="font-size:13px">${L('Tots dos alhora!', '¡Los dos a la vez!')}</text></g>`);
    },

    // com es fa un projecte: idea, pla, construir a trossos, provar i millorar (i tornar a provar)
    g2plan() {
      const steps = [['', L('La idea', 'La idea')], ['', L('El pla en paper', 'El plan en papel')], ['', L('Construeix a trossos', 'Construye a trozos')], ['', L('Prova-ho', 'Pruébalo')], ['', L('Millora-ho', 'Mejóralo')]];
      const cards = steps.map(([ic, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="8" y="${8 + i * 41}" width="190" height="34" rx="11" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="28" cy="${25 + i * 41}" r="12" fill="${['#F2B21B', '#3D7BF4', '#C447A8', '#1FA463', '#E0533F'][i]}"/><text x="28" y="${30 + i * 41}" text-anchor="middle" class="tat w s" style="font-size:13px">${i + 1}</text><text x="48" y="${30 + i * 41}" class="tat s">${t}${ic}</text></g>`).join('');
      return tSvg(214, `${cards}
        <g ${tA(2.6, 'ta-pop')}><path d="M200 192 Q214 172 200 152" fill="none" stroke="#1FA463" stroke-width="3" stroke-dasharray="5 5" class="ta-dash"/><path d="M198 160 l2 -9 l8 4" fill="none" stroke="#1FA463" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${g2st(214, 20, 98, 120, 'g2seaJ')}
        <g ${tA(1.3, 'ta-pop')}><g transform="translate(236 114)">${g2sw(g2a('alga', 0, 0, 0, 18), g2a('alga', 1, 0, 0, 18), 1.2)}</g></g>
        <g ${tA(1.8, 'ta-pop')}><g><animateTransform attributeName="transform" type="translate" values="240 54;288 54;240 54" dur="4s" repeatCount="indefinite"/><g><animateTransform attributeName="transform" type="scale" values="-1 1;1 1" dur="4s" calcMode="discrete" repeatCount="indefinite"/>${g2a('peix', 0, 0, 0, 40)}</g></g></g>
        <g ${tA(2.4, 'ta-pop')}><g transform="translate(288 106)">${g2sw(g2a('medusa', 0, 0, 0, 30), g2a('medusa', 1, 0, 0, 30), 1)}</g></g>
        <text x="263" y="164" text-anchor="middle" class="tat s" ${tA(3, 'ta-in')}>${L('A poc a poc,', 'Poco a poco,')}</text><text x="263" y="184" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-in')}>${L('peça a peça.', 'pieza a pieza.')}</text>`);
    }
  });
}

/* ── unitat 3 ── */
/* Tech Creadors · unitat 3 «Interacció» · animacions de teoria (TANI)
   Esdeveniments (tocar un personatge, les tecles), direccions, missatges entre personatges, diàlegs per torns i el conte
   interactiu. Dibuixos propis: els personatges són els mateixos de l'escenari (STG_ART) en petit. */
Object.assign(TANI, (() => {
  // un dibuix SVG (personatge o fons) posat dins un grup escalat: sense <svg> niats, perquè el CSS de les pàgines
  // (p. ex. «.tart svg { width: 100% }») no els faci créixer
  const inl = (sv, cx, cy, s, fit = Math.max) => { const m = /viewBox="([-\d.\s]+)"/.exec(sv), [a, b, c, d] = m ? m[1].trim().split(/\s+/).map(Number) : [0, 0, 100, 100];
    const k = s / fit(c, d), body = sv.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    return `<g transform="translate(${(cx - c * k / 2 - a * k).toFixed(2)} ${(cy - d * k / 2 - b * k).toFixed(2)}) scale(${k.toFixed(4)})">${body}</g>`; };
  // un personatge de l'escenari dins d'un quadrat de costat s, centrat a (cx, cy)
  const spr = (art, c, cx, cy, s) => { const a = typeof STG_ART !== 'undefined' && STG_ART[art]; return a ? inl(a.svg(c % (a.n || 1)), cx, cy, s) : ''; };
  // el mateix, mirant a l'esquerra (com fa l'escenari quan la direcció és negativa)
  const sprL = (art, c, cx, cy, s) => `<g transform="translate(${2 * cx} 0) scale(-1 1)">${spr(art, c, cx, cy, s)}</g>`;
  // un fons de l'escenari en petit (480 × 360 → w × w·0,75), retallat a la vinyeta
  const bg = (n, x, y, w) => { const b = typeof STG_BG !== 'undefined' && STG_BG[n], id = 'g3c' + n + x + y; return `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${w * .75}" rx="6"/></clipPath></defs><g clip-path="url(#${id})">${b ? inl(b.svg(), x + w / 2, y + w * .375, w, Math.min) : `<rect x="${x}" y="${y}" width="${w}" height="${w * .75}" fill="#BFE8FF"/>`}</g>`; };
  // animacions SMIL que es repeteixen
  const SM = (attr, values, kt, dur, calc = 'discrete') => `<animate attributeName="${attr}" values="${values}" keyTimes="${kt}" calcMode="${calc}" dur="${dur}s" repeatCount="indefinite"/>`;
  const show = (vals, kt, dur) => SM('opacity', vals, kt, dur);
  // capçalera d'esdeveniment (com a l'editor: color de mel per a tocar i tecles, taronja per als missatges, verd per a «quan comença»)
  const hat = (x, y, w, lines, col = '#B07A00') => { const h = 14 + lines.length * 17; return `<g filter="url(#bwSh)"><path d="M${x} ${y + 10}q0 -10 10 -10h22q8 -7 26 0h${w - 68}q10 0 10 10v${h - 10}q0 6 -6 6h-${w - 12}q-6 0 -6 -6z" fill="${col}"/></g>${lines.map((t, i) => `<text x="${x + 12}" y="${y + 21 + i * 17}" class="tat w s">${t}</text>`).join('')}`; };
  const blk = (x, y, w, txt, col, dark) => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}" filter="url(#bwSh)"/><text x="${x + 10}" y="${y + 19}" class="tat s${dark ? '' : ' w'}">${txt}</text>`;
  const bub = (x, y, w, txt, tail = 'l') => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="14" fill="#fff" stroke="#20306A" stroke-width="2"/><path d="M${tail === 'l' ? x + 18 : x + w - 18} ${y + 29}l${tail === 'l' ? -6 : 6} 12l${tail === 'l' ? 14 : -14} -12" fill="#fff" stroke="#20306A" stroke-width="2" stroke-linejoin="round"/><rect x="${tail === 'l' ? x + 12 : x + w - 26}" y="${y + 26}" width="14" height="4" fill="#fff"/><text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" class="tat s">${txt}</text>`;
  const env = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-14" y="-10" width="28" height="20" rx="3" fill="#FFF3C4" stroke="#B46A00" stroke-width="2"/><path d="M-14 -9l14 11l14 -11" fill="none" stroke="#B46A00" stroke-width="2" stroke-linejoin="round"/></g>`;
  const finger = `<g><circle cx="0" cy="0" r="9" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2"/><path d="M-6 6q-4 18 4 26h16q8 -10 2 -26z" fill="#FFD9B8" stroke="#8A5A33" stroke-width="2" stroke-linejoin="round"/></g>`;
  const ground = (x, y, w, h, top = '#BFE8FF', bot = '#E9F7FF', gr = '#7CC456') => `<defs><linearGradient id="g3sky${x}${y}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="url(#g3sky${x}${y})" stroke="#DCE4FA" stroke-width="2"/><path d="M${x} ${y + h - 34}q${w / 2} -16 ${w} 0v${18}q0 16 -16 16h-${w - 32}q-16 0 -16 -16z" fill="${gr}"/>`;

  return {
    // «guanya l'últim»: dos guions escriuen a la mateixa bafarada al mateix fotograma i només es veu la darrera frase;
    // amb una espera al segon guió, cada frase té el seu torn
    g3race() {
      const D = 9, vis = (a, b) => show('0;1;0', `0;${a};${b}`, D), HC = '#B07A00', AC = '#C447A8';
      const ring = (x, y, w, a, b) => `<rect x="${x - 3}" y="${y - 3}" width="${w + 6}" height="34" rx="10" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${vis(a, b)}</rect>`;
      const say1 = L('digues «Miau!»', 'di «¡Miau!»'), say2 = L('digues «Bon dia!»', 'di «¡Buenos días!»'), when = L('Quan toco el gat', 'Al tocar al gato');
      return tSvg(236, `<text x="12" y="13" class="tat s" style="fill:#6A78A8">${L('guió 1', 'guion 1')}</text>${hat(10, 18, 176, [when], HC)}${blk(18, 50, 160, say1, AC)}${ring(18, 50, 160, .06, .2)}${ring(18, 50, 160, .55, .7)}
        <text x="12" y="94" class="tat s" style="fill:#6A78A8">${L('guió 2', 'guion 2')}</text>${hat(10, 99, 176, [when], HC)}
        <g>${vis(0, .5)}${blk(18, 131, 160, say2, AC)}</g>${ring(18, 131, 160, .06, .2)}
        <g opacity="0">${vis(.5, 1)}${blk(18, 131, 160, L('espera 1 s', 'espera 1 s'), '#1FA463')}${blk(18, 163, 160, say2, AC)}</g>${ring(18, 163, 160, .74, .88)}
        ${spr('gat', 0, 258, 156, 74)}
        <g opacity="0">${vis(.1, .14)}${bub(200, 74, 112, L('Miau!', '¡Miau!'))}</g><g opacity="0">${vis(.55, .74)}${bub(200, 74, 112, L('Miau!', '¡Miau!'))}</g>
        <g opacity="0">${vis(.14, .5)}${bub(198, 74, 116, L('Bon dia!', '¡Buenos días!'))}<g transform="translate(256 50)"><text x="0" y="0" text-anchor="middle" class="tat s" style="fill:#C2410C">${L('Miau!', '¡Miau!')}</text><path d="M-24 -5H24" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"/></g></g>
        <g opacity="0">${vis(.74, .98)}${bub(198, 74, 116, L('Bon dia!', '¡Buenos días!'))}</g>
        <g opacity="0">${vis(.06, .5)}<rect x="10" y="206" width="300" height="26" rx="13" fill="#FDECEC"/><text x="160" y="224" text-anchor="middle" class="tat s" style="fill:#C2410C">${L('Al mateix fotograma: només es veu l\'última frase', 'En el mismo fotograma: solo se ve la última frase')}</text></g>
        <g opacity="0">${vis(.5, 1)}<rect x="10" y="206" width="300" height="26" rx="13" fill="#E2F6EA"/><text x="160" y="224" text-anchor="middle" class="tat s" style="fill:#1E7A42">${L('Amb «espera 1 s» al guió 2: cada frase, al seu torn', 'Con «espera 1 s» en el guion 2: cada frase, en su turno')}</text></g>`);
    },
    // esdeveniment: toques el gat → el guió «Quan toco aquest personatge» comença → vestit següent i «Miau!»
    g3event() {
      const D = 5.5;
      return tSvg(214, `${ground(10, 10, 140, 150)}
        <g>${show('1;0;1', '0;.4;.94', D)}${spr('gat', 0, 80, 104, 84)}</g><g opacity="0">${show('0;1;0', '0;.4;.94', D)}${spr('gat', 1, 80, 104, 84)}</g>
        <g>${show('1;0;1', '0;.36;.94', D)}<text x="116" y="50" class="tat b" fill="#6A78A8">z</text><text x="128" y="38" class="tat" fill="#8A96C0">z</text><text x="138" y="28" class="tat s" fill="#A9B3D6">z</text></g>
        <g opacity="0">${show('0;1;0', '0;.44;.92', D)}${bub(84, 22, 64, L('Miau!', '¡Miau!'), 'l')}</g>
        <circle cx="78" cy="96" r="4" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${SM('r', '4;4;30;30', '0;.34;.48;1', D, 'linear')}${SM('opacity', '0;.95;0;0', '0;.34;.48;1', D, 'linear')}</circle>
        <g>${SM('opacity', '0;1;1;0;0', '0;.08;.4;.48;1', D, 'linear')}<g><animateTransform attributeName="transform" type="translate" values="140 176;140 176;84 102;84 102;140 176" keyTimes="0;.1;.32;.42;1" dur="${D}s" repeatCount="indefinite"/>${finger}</g></g>
        ${hat(158, 14, 156, [L('Quan toco aquest', 'Al tocar este'), L('personatge', 'personaje')])}
        ${blk(164, 70, 144, L('vestit següent', 'disfraz siguiente'), '#C447A8')}${blk(164, 102, 144, L('digues Miau!', 'di ¡Miau!'), '#C447A8')}
        <rect x="153" y="8" width="164" height="128" rx="14" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${show('0;1;0', '0;.38;.92', D)}</rect>
        <rect x="161" y="67" width="150" height="34" rx="10" fill="none" stroke="#20306A" stroke-width="3" opacity="0">${show('0;1;0', '0;.4;.46', D)}</rect>
        <rect x="161" y="99" width="150" height="34" rx="10" fill="none" stroke="#20306A" stroke-width="3" opacity="0">${show('0;1;0', '0;.46;.92', D)}</rect>
        <g ${tA(.4, 'ta-in')}><rect x="22" y="172" width="80" height="30" rx="15" fill="#B07A00"/><text x="62" y="192" text-anchor="middle" class="tat w s">${L('toc!', '¡toc!')}</text></g>
        <g ${tA(2.2, 'ta-in')}><path d="M110 187h26" stroke="#20306A" stroke-width="4" stroke-linecap="round"/><path d="M130 179l9 8l-9 8" fill="none" stroke="#20306A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="146" y="172" width="162" height="30" rx="15" fill="#1FA463"/><text x="227" y="192" text-anchor="middle" class="tat w s">${L('el guió comença', 'el guion empieza')}</text></g>`);
    },
    // la direcció: 0 amunt, 90 dreta, 180 avall, -90 esquerra (el bloc «apunta en direcció» va canviant)
    g3dir() {
      const D = 5.6, C = [104, 104], R = 74, slots = [['90', 0, 1, 90], ['180', 1, 0, 180], ['-90', 2, -1, 0], ['0', 3, 0, -1]];
      const kt = '0;.25;.5;.75', on = k => [0, 1, 2, 3].map(i => i === k ? 1 : 0).join(';');
      const arrow = (deg, col, w = 7) => `<g transform="rotate(${deg} ${C[0]} ${C[1]})"><path d="M${C[0]} ${C[1] - 40}V${C[1] - R + 8}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/><path d="M${C[0] - 12} ${C[1] - R + 20}L${C[0]} ${C[1] - R + 4}L${C[0] + 12} ${C[1] - R + 20}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const lab = (txt, x, y) => `<text x="${x}" y="${y}" text-anchor="middle" class="tat b">${txt}</text>`;
      return tSvg(214, `<circle cx="${C[0]}" cy="${C[1]}" r="${R + 14}" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${[0, 90, 180, 270].map(d => arrow(d, '#D5DCF0')).join('')}
        ${[[90, 0], [180, 1], [270, 2], [0, 3]].map(([d, k]) => `<g opacity="0">${show(on(k), kt, D)}${arrow(d, '#F08A24', 8)}</g>`).join('')}
        ${lab('0', C[0] + 24, C[1] - R + 22)}${lab('90', C[0] + R - 12, C[1] + 30)}${lab('180', C[0] + 30, C[1] + R - 4)}${lab('-90', C[0] - R + 16, C[1] + 30)}
        <g>${show('1;1;0;1', kt, D)}${spr('cavaller', 0, C[0], C[1], 62)}</g><g opacity="0">${show(on(2), kt, D)}${sprL('cavaller', 0, C[0], C[1], 62)}</g>
        <rect x="196" y="40" width="118" height="92" rx="14" fill="#C9DAFF" opacity=".45"/>
        <text x="255" y="62" text-anchor="middle" class="tat s">${L('apunta en', 'apunta en')}</text><text x="255" y="80" text-anchor="middle" class="tat s">${L('direcció', 'dirección')}</text>
        <rect x="222" y="90" width="66" height="32" rx="16" fill="#3D7BF4"/>
        ${slots.map(([v], k) => `<text x="255" y="112" text-anchor="middle" class="tat w b" opacity="0">${show(on(k), kt, D)}${v}</text>`).join('')}
        <text x="255" y="160" text-anchor="middle" class="tat s">${L('i després', 'y después')}</text>
        <rect x="200" y="168" width="110" height="30" rx="9" fill="#3D7BF4" filter="url(#bwSh)"/><text x="255" y="188" text-anchor="middle" class="tat w s">${L('mou-te 10', 'muévete 10')}</text>`);
    },
    // les fletxes: mentre prems →, el cavaller va a la dreta; amb ←, apunta a l'esquerra i torna
    g3keys() {
      const D = 6, kt6 = '0;.1;.45;.55;.9;1', R = '0;1;0;0;0;0', Lf = '0;0;0;1;0;0';
      const key = (x, y, w, txt, vals) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="7" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><rect x="${x}" y="${y}" width="${w}" height="30" rx="7" fill="#F08A24" opacity="0">${SM('opacity', vals, kt6, D)}</rect><text x="${x + w / 2}" y="${y + 21}" text-anchor="middle" class="tat b">${txt}</text>`;
      return tSvg(222, `${ground(10, 8, 300, 96)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;180 0;180 0;0 0;0 0" keyTimes="${kt6}" dur="${D}s" repeatCount="indefinite"/>
          <g>${show('1;1;1;0;0;1', kt6, D)}${spr('cavaller', 1, 62, 58, 66)}</g><g opacity="0">${show('0;0;0;1;1;0', kt6, D)}${sprL('cavaller', 1, 62, 58, 66)}</g></g>
        <rect x="12" y="116" width="112" height="84" rx="14" fill="#EEF2FB" stroke="#DCE4FA" stroke-width="2"/>
        ${key(52, 124, 32, '↑', '0;0;0;0;0;0')}${key(16, 160, 32, '←', Lf)}${key(52, 160, 32, '↓', '0;0;0;0;0;0')}${key(88, 160, 32, '→', R)}
        <g>${show('1;1;1;0;0;1', kt6, D)}${hat(128, 110, 186, [L('Quan premo la tecla', 'Al pulsar la tecla'), L('→ fletxa dreta', '→ flecha derecha')], '#B07A00')}${blk(132, 162, 182, L('apunta en direcció 90', 'apunta en dirección 90'), '#3D7BF4')}${blk(132, 192, 112, L('mou-te 10', 'muévete 10'), '#3D7BF4')}</g>
        <g opacity="0">${show('0;0;0;1;1;0', kt6, D)}${hat(128, 110, 186, [L('Quan premo la tecla', 'Al pulsar la tecla'), L('← fletxa esquerra', '← flecha izquierda')], '#B07A00')}${blk(132, 162, 182, L('apunta en direcció -90', 'apunta en dirección -90'), '#3D7BF4')}${blk(132, 192, 112, L('mou-te 10', 'muévete 10'), '#3D7BF4')}</g>`);
    },
    // enviar i rebre: la Guida parla, envia «tuga», el sobre vola i la Tuga, que l'esperava, respon
    g3msg() {
      const D = 6;
      return tSvg(214, `${ground(10, 8, 300, 150)}
        ${spr('guida', 1, 68, 104, 84)}${spr('tuga', 0, 252, 108, 80)}
        <g opacity="0">${show('0;1;0;0', '0;.04;.32;1', D)}${bub(22, 16, 112, L('Hola, Tuga!', '¡Hola, Tuga!'), 'l')}</g>
        <g opacity="0">${show('0;1;0', '0;.58;.95', D)}${bub(182, 16, 124, L('Hola, Guida!', '¡Hola, Guida!'), 'r')}</g>
        <g opacity="0">${show('0;1;0', '0;.32;.56', D)}<g><animateMotion dur="${D}s" repeatCount="indefinite" path="M100 76 Q160 18 220 76" keyPoints="0;0;1;1" keyTimes="0;.32;.54;1" calcMode="linear"/>${env(0, 0, 1.15)}</g></g>
        <path d="M100 76 Q160 18 220 76" fill="none" stroke="#B46A00" stroke-width="2" stroke-dasharray="4 6" opacity=".35"/>
        <g ${tA(1.6, 'ta-in')}><rect x="10" y="168" width="150" height="40" rx="9" fill="#F2B21B" filter="url(#bwSh)"/><text x="22" y="185" class="tat s">${L('envia el missatge', 'envía el mensaje')}</text><text x="22" y="201" class="tat b">«tuga»</text></g>
        ${hat(166, 166, 146, [L('Quan rebo el', 'Al recibir el'), L('missatge «tuga»', 'mensaje «tuga»')], '#C26F18')}
        <rect x="161" y="161" width="156" height="50" rx="12" fill="none" stroke="#FFC531" stroke-width="4" opacity="0">${show('0;1;0', '0;.55;.95', D)}</rect>`);
    },
    // un missatge, molts personatges: el regal envia «sorpresa» i tothom hi reacciona alhora (l'Estel, que era amagada, apareix)
    g3many() {
      const D = 5.5, kt = '0;.36;.94';
      const ring = d => `<circle cx="160" cy="54" r="20" fill="none" stroke="#F2B21B" stroke-width="5" opacity="0">${SM('r', '20;20;128;128', `0;${.3 + d};${.52 + d};1`, D, 'linear')}${SM('opacity', `0;.9;0;0`, `0;${.3 + d};${.52 + d};1`, D, 'linear')}</circle>`;
      return tSvg(214, `${ground(10, 8, 300, 168)}
        ${ring(0)}${ring(.06)}
        <g>${show('1;0;1', '0;.3;.94', D)}${spr('regal', 0, 160, 54, 58)}</g>
        <g opacity="0">${show('0;1;0', '0;.3;.94', D)}<rect x="104" y="40" width="112" height="30" rx="15" fill="#F2B21B"/><text x="160" y="60" text-anchor="middle" class="tat s">«sorpresa»</text></g>
        <g>${show('1;0;1', kt, D)}${spr('guida', 0, 52, 130, 74)}</g><g opacity="0">${show('0;1;0', kt, D)}${spr('guida', 1, 52, 130, 74)}</g>
        <g>${show('1;0;1', kt, D)}${spr('tuga', 0, 124, 136, 70)}</g><g opacity="0">${show('0;1;0', kt, D)}${spr('tuga', 1, 124, 136, 70)}</g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -26;0 0;0 -26;0 0;0 0" keyTimes="0;.38;.48;.58;.68;.78;1" dur="${D}s" repeatCount="indefinite"/>${spr('ocell', 0, 204, 132, 62)}</g>
        <g opacity="0">${show('0;1;0', '0;.42;.94', D)}${spr('estel', 1, 274, 120, 70)}</g>
        <g opacity="0">${show('0;1;0', '0;.42;.94', D)}<text x="274" y="176" text-anchor="middle" class="tat s">${L('apareix!', '¡aparece!')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat b">${L('Un missatge, molts personatges', 'Un mensaje, muchos personajes')}</text>`);
    },
    // parlar per torns: cada frase acaba amb un missatge que passa el torn a l'altre personatge
    g3dialog() {
      const row = (y, art, c) => `<rect x="10" y="${y - 24}" width="300" height="48" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${spr(art, c, 36, y, 44)}`;
      const bar = (x, y, w, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y - 14}" width="${w}" height="28" rx="14" fill="#C447A8"/><text x="${x + w / 2}" y="${y + 5}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
      const pass = (x, y1, y2, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x} ${y1}V${y2}" stroke="#B46A00" stroke-width="2.5" stroke-dasharray="4 4"/>${env(x, (y1 + y2) / 2, .8)}</g>`;
      return tSvg(214, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('Parlar per torns', 'Hablar por turnos')}</text>
        ${row(56, 'guida', 1)}${row(124, 'tuga', 0)}
        ${bar(62, 56, 86, L('Hola!', '¡Hola!'), .3)}${pass(158, 70, 110, 1.2)}
        ${bar(150, 124, 102, L('Assagem?', '¿Ensayamos?'), 1.7)}${pass(262, 110, 70, 2.6)}
        ${bar(226, 56, 80, L('Som-hi!', '¡Vamos!'), 3.1)}
        <g ${tA(1.2, 'ta-fade')}><text x="150" y="94" text-anchor="end" class="tat s" fill="#B46A00">«tuga»</text></g><g ${tA(2.6, 'ta-fade')}><text x="256" y="94" text-anchor="end" class="tat s" fill="#B46A00">«guida»</text></g>
        <path d="M62 166H302" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/><path d="M296 160l8 6l-8 6" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="62" y="186" class="tat s" fill="#6A78A8">${L('el temps passa', 'el tiempo pasa')}</text>
        <text x="160" y="206" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('Cada missatge passa el torn', 'Cada mensaje pasa el turno')}</text>`);
    },
    // el conte interactiu: inici → nus → qui el mira tria un dels dos finals
    g3tale() {
      const page = (x, y, w, bgn, inner, t, lbl, col) => `<g ${tA(t, 'ta-in')}><rect x="${x - 3}" y="${y - 3}" width="${w + 6}" height="${w * .75 + 6}" rx="10" fill="${col}"/>${bg(bgn, x, y, w)}${inner}<text x="${x + w / 2}" y="${y + w * .75 + 22}" text-anchor="middle" class="tat s">${lbl}</text></g>`;
      const arr = (x1, y1, x2, y2, t) => `<g ${tA(t, 'ta-fade')}><path d="M${x1} ${y1}L${x2} ${y2}" stroke="#20306A" stroke-width="3.5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="#20306A"/></g>`;
      return tSvg(214, `${page(10, 52, 86, 'bosc', spr('cavaller', 0, 53, 86, 50), .2, L('Inici', 'Inicio'), '#3CC47C')}
        ${arr(100, 84, 112, 84, .9)}
        ${page(116, 52, 86, 'nit', spr('drac', 0, 159, 88, 54), 1.1, L('Nus', 'Nudo'), '#3D7BF4')}
        ${arr(206, 76, 220, 46, 2)}${arr(206, 98, 220, 132, 2)}
        ${page(224, 8, 86, 'parc', spr('cavaller', 1, 248, 44, 40) + spr('drac', 1, 286, 44, 46) + spr('cor', 0, 268, 22, 22), 2.4, '', '#E5489A')}
        ${page(224, 116, 86, 'cel', spr('drac', 1, 280, 140, 44) + spr('estrella', 0, 244, 136, 26), 2.8, '', '#F2B21B')}
        <g ${tA(2.4, 'ta-fade')}><text x="267" y="88" text-anchor="middle" class="tat s">${L('Final 1', 'Final 1')}</text></g>
        <g ${tA(2.8, 'ta-fade')}><text x="267" y="196" text-anchor="middle" class="tat s">${L('Final 2', 'Final 2')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="14" y="10" width="190" height="30" rx="15" fill="#F08A24"/><text x="109" y="30" text-anchor="middle" class="tat w s">${L('Qui el mira tria el final', 'Quien lo mira elige el final')}</text></g>
        <g ${tA(3.6, 'ta-fade')}><g transform="translate(206 166) scale(.8)">${finger}</g></g>`);
    },
    // primer el pla: el conte dibuixat en 4 vinyetes i, després, els guions
    g3plan() {
      const cell = (x, y, n, txt, inner, t) => `<g><rect x="${x}" y="${y}" width="84" height="80" rx="8" fill="#fff" stroke="#20306A" stroke-width="2.5" pathLength="1" ${tA(t, 'ta-draw')}/>
        <g ${tA(t + .3, 'ta-pop')}>${inner}</g><g ${tA(t + .2, 'ta-fade')}><circle cx="${x + 12}" cy="${y + 12}" r="9" fill="#F08A24"/><text x="${x + 12}" y="${y + 17}" text-anchor="middle" class="tat w s">${n}</text><text x="${x + 42}" y="${y + 74}" text-anchor="middle" class="tat s">${txt}</text></g></g>`;
      return tSvg(214, `<rect x="8" y="8" width="190" height="198" rx="12" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/>
        ${cell(14, 16, 1, L('inici', 'inicio'), spr('cavaller', 0, 56, 46, 38), .2)}${cell(106, 16, 2, L('nus', 'nudo'), spr('drac', 0, 148, 46, 44), .8)}
        ${cell(14, 114, 3, L('tria', 'elige'), spr('cor', 0, 44, 144, 26) + spr('estrella', 0, 72, 144, 26), 1.4)}${cell(106, 114, 4, L('final', 'final'), spr('drac', 1, 162, 144, 40) + spr('cavaller', 1, 130, 144, 34), 2)}
        <g ${tA(2.8, 'ta-in')}><path d="M200 106h12" stroke="#20306A" stroke-width="4" stroke-linecap="round"/><path d="M207 98l8 8l-8 8" fill="none" stroke="#20306A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.2, 'ta-in')}>${hat(220, 50, 96, [L('Quan', 'Al'), L('comença', 'empezar')], '#1E7A42')}${blk(224, 104, 84, L('digues', 'di'), '#C447A8')}${blk(224, 136, 84, L('envia', 'envía'), '#F2B21B', true)}</g>
        <text x="268" y="190" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('i ara, blocs', 'y ahora, bloques')}</text>`);
    }
  };
})());

/* ── unitat 4 ── */
/* Tech Creadors · unitat 4 «Coordenades» · animacions de teoria (TANI)
   L'escenari com un mapa (x i y), anar a un punt, lliscar, canviar x i y, la direcció, rebotar i tocar un color. */
Object.assign(TANI, (() => {
  // un personatge de l'escenari dibuixat dins l'animació (centrat a x, y i de w d'ample)
  const spr = (art, c, x, y, w) => typeof STG_ART !== 'undefined' && STG_ART[art] ? STG_ART[art].svg(c).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : `<circle cx="${x}" cy="${y}" r="${w / 3}" fill="#8B5CF6"/>`;
  // un bloc com els de l'editor (una píndola de color amb text blanc)
  const pill = (x, y, w, txt, col = '#3D7BF4', extra = '') => `<g ${extra}><rect x="${x}" y="${y}" width="${w}" height="30" rx="10" fill="${col}"/><rect x="${x}" y="${y + 24}" width="${w}" height="6" rx="3" fill="#000" opacity=".14"/><text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" class="tat w s">${txt}</text></g>`;
  // opacitat per trams: el tram i de n es veu (animació discreta)
  const seg = (i, n, D, on = [i]) => `<animate attributeName="opacity" values="${Array.from({ length: n }, (_, k) => on.includes(k) ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>`;
  // l'escenari en petit: rectangle, quadrícula i eixos (escala s; el (0, 0) a cx, cy)
  const stage = (cx, cy, s, o = {}) => { const w = 480 * s, h = 360 * s, x0 = cx - w / 2, y0 = cy - h / 2, st = 60 * s;
    let g = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="10" fill="${o.bg || '#F7F9FF'}" stroke="#B9C7EE" stroke-width="2"/>`;
    for (let k = 1; k < 8; k++) g += `<path d="M${x0 + k * st} ${y0 + 2}V${y0 + h - 2}" stroke="#E2E8F8" stroke-width="1.2"/>`;
    for (let k = 1; k < 6; k++) g += `<path d="M${x0 + 2} ${y0 + k * st}H${x0 + w - 2}" stroke="#E2E8F8" stroke-width="1.2"/>`;
    if (o.axes !== false) g += `<path d="M${x0 + 4} ${cy}H${x0 + w - 6}" stroke="#E0533F" stroke-width="2.4"/><path d="M${x0 + w - 12} ${cy - 5}l7 5l-7 5" fill="none" stroke="#E0533F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx} ${y0 + h - 4}V${y0 + 6}" stroke="#1FA463" stroke-width="2.4"/><path d="M${cx - 5} ${y0 + 12}l5 -7l5 7" fill="none" stroke="#1FA463" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#14204A"/>`;
    return g; };
  return {
    // l'escenari és un mapa: cada lloc té dos números, x (esquerra-dreta) i y (avall-amunt)
    g4grid() {
      const D = 'dur="8s" repeatCount="indefinite"', cx = 160, cy = 102, s = .5;
      const P1 = [120 * s, -60 * s], P2 = [-180 * s, 90 * s];
      const kt = '0;.1;.25;.5;.62;.9;1', mv = `values="0 0;0 0;${P1[0]} ${P1[1]};${P1[0]} ${P1[1]};${P2[0]} ${P2[1]};${P2[0]} ${P2[1]};0 0" keyTimes="${kt}"`;
      const guide = (P, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .03};${b};${b + .02};1" ${D}/>
        <path d="M${cx + P[0]} ${cy + P[1]}V${cy}" stroke="#1FA463" stroke-width="2.4" stroke-dasharray="5 4"/><path d="M${cx + P[0]} ${cy + P[1]}H${cx}" stroke="#E0533F" stroke-width="2.4" stroke-dasharray="5 4"/>
        <circle cx="${cx + P[0]}" cy="${cy}" r="4" fill="#E0533F"/><circle cx="${cx}" cy="${cy + P[1]}" r="4" fill="#1FA463"/></g>`;
      const lab = (txtx, txty, a, b) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .03};${b};${b + .02};1" ${D}/>
        <rect x="70" y="206" width="180" height="28" rx="14" fill="#14204A"/><text x="160" y="225" text-anchor="middle" class="tat w b"><tspan fill="#FF9C8F">x: ${txtx}</tspan>   <tspan fill="#8EE6B4">y: ${txty}</tspan></text></g>`;
      return tSvg(240, `${stage(cx, cy, s)}
        <text x="${cx + 124}" y="${cy + 18}" text-anchor="end" class="tat s" fill="#E0533F">x</text><text x="${cx + 10}" y="${cy - 74}" class="tat s" fill="#1FA463">y</text>
        <text x="${cx - 116}" y="${cy + 18}" class="tat s">-240</text><text x="${cx + 116}" y="${cy - 6}" text-anchor="end" class="tat s">240</text>
        <text x="${cx - 6}" y="${cy - 76}" text-anchor="end" class="tat s">180</text><text x="${cx - 6}" y="${cy + 86}" text-anchor="end" class="tat s">-180</text>
        ${guide(P1, .25, .5)}${guide(P2, .62, .9)}
        <g><animateTransform attributeName="transform" type="translate" ${mv} ${D}/>${spr('estrella', 0, cx, cy, 30)}</g>
        <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.1;.11;.98;1" ${D}/><rect x="96" y="206" width="128" height="28" rx="14" fill="#14204A"/><text x="160" y="225" text-anchor="middle" class="tat w b">(0, 0) = ${L('el centre', 'el centro')}</text></g>
        ${lab(120, 60, .25, .5)}${lab(-180, -90, .62, .9)}`);
    },
    // x: esquerra-dreta; y: avall-amunt (els números negatius són a l'esquerra i a baix)
    g4xy() {
      const D = 'dur="7s" repeatCount="indefinite"';
      const xs = [-240, -120, 0, 120, 240], X = v => 105 + v / 240 * 78, ys = [180, 0, -180, 0], Y = v => 116 - v / 180 * 66;
      const xMv = `values="${xs.concat([0]).map(v => `${X(v) - 105} 0`).join(';')}" keyTimes="0;.18;.36;.54;.72;.9" calcMode="discrete"`;
      const yMv = `values="${ys.map(v => `0 ${Y(v) - 116}`).join(';')}" keyTimes="0;.25;.5;.75" calcMode="discrete"`;
      return tSvg(214, `<rect x="8" y="10" width="196" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <rect x="214" y="10" width="98" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <text x="106" y="38" text-anchor="middle" class="tat b" fill="#E0533F">x</text><text x="106" y="58" text-anchor="middle" class="tat s">${L('esquerra ↔ dreta', 'izquierda ↔ derecha')}</text>
        <path d="M22 130H192" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/>${xs.map(v => `<path d="M${X(v)} 123v14" stroke="#E0533F" stroke-width="2.4"/><text x="${X(v)}" y="156" text-anchor="middle" class="tat s">${v}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" ${xMv} ${D}/>${spr('numi', 1, 105, 100, 40)}</g>
        ${xs.map((v, i) => `<g opacity="0">${seg(i, 6, D)}<text x="106" y="188" text-anchor="middle" class="tat b">x = ${v}</text></g>`).join('')}<g opacity="0">${seg(5, 6, D)}<text x="106" y="188" text-anchor="middle" class="tat b">x = 0</text></g>
        <text x="263" y="38" text-anchor="middle" class="tat b" fill="#1FA463">y</text>
        <path d="M244 50V182" stroke="#1FA463" stroke-width="3" stroke-linecap="round"/>${[180, 0, -180].map(v => `<path d="M237 ${Y(v)}h14" stroke="#1FA463" stroke-width="2.4"/><text x="300" y="${Y(v) + 5}" text-anchor="end" class="tat s">${v}</text>`).join('')}
        <text x="300" y="74" text-anchor="end" class="tat s" fill="#1FA463">${L('amunt', 'arriba')}</text><text x="300" y="168" text-anchor="end" class="tat s" fill="#1FA463">${L('avall', 'abajo')}</text>
        <g><animateTransform attributeName="transform" type="translate" ${yMv} ${D}/>${spr('estrella', 0, 244, 116, 26)}</g>`);
    },
    // «ves a» salta d'un cop; «llisca» hi va a poc a poc i es veu el camí
    g4goto() {
      const D = 'dur="5s" repeatCount="indefinite"';
      const lane = (y, t) => `<rect x="10" y="${y}" width="300" height="88" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="24" y="${y + 24}" class="tat s">${t}</text>
        <circle cx="62" cy="${y + 58}" r="5" fill="#C9D3EE"/><path d="M262 ${y + 70}v-24l16 6l-16 6" fill="#EF5A5A" stroke="#8E1E14" stroke-width="1.6"/>`;
      return tSvg(214, `${lane(10, '')}${pill(22, 16, 150, L('ves a x: 120 y: 0', 've a x: 120 y: 0'))}
        <g><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.3;.31;.95;1" ${D}/>${spr('numi', 0, 62, 66, 40)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.33;.34;.95;1" ${D}/>${spr('numi', 1, 252, 66, 40)}<text x="196" y="72" text-anchor="middle" class="tat b" fill="#F08A24">${L('zas!', '¡zas!')}</text></g>
        ${lane(116, '')}${pill(22, 122, 244, L('llisca en 2 s fins a x: 120 y: 0', 'desliza en 2 s hasta x: 120 y: 0'))}
        <path d="M62 174H252" stroke="#3D7BF4" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round" pathLength="190" stroke-dashoffset="190"><animate attributeName="stroke-dashoffset" values="190;190;0;0;190" keyTimes="0;.2;.75;.95;1" ${D}/></path>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;190 0;190 0;0 0" keyTimes="0;.2;.75;.95;1" ${D}/>${spr('numi', 0, 62, 172, 40)}</g>`);
    },
    // «canvia x en 10» suma 10 a la x on ja és el personatge (i -10 el porta cap a l'esquerra)
    g4chx() {
      const D = 'dur="7s" repeatCount="indefinite"', X = v => 50 + v * 4.4;
      const pos = [0, 10, 20, 30, 40, 30, 20], n = pos.length;
      return tSvg(214, `<rect x="10" y="10" width="300" height="194" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <path d="M34 150H${X(50)}" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/>${[0, 10, 20, 30, 40, 50].map(v => `<path d="M${X(v)} 143v14" stroke="#E0533F" stroke-width="2.4"/><text x="${X(v)}" y="176" text-anchor="middle" class="tat s">${v}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="${pos.map(v => `${X(v) - X(0)} 0`).join(';')}" keyTimes="${pos.map((_, k) => (k / n).toFixed(3)).join(';')}" calcMode="discrete" ${D}/>${spr('numi', 1, X(0), 118, 44)}</g>
        ${pos.map((v, i) => i ? `<path d="M${X(pos[i - 1])} 92Q${(X(pos[i - 1]) + X(v)) / 2} 70 ${X(v)} 92" fill="none" stroke="${v > pos[i - 1] ? '#3D7BF4' : '#F08A24'}" stroke-width="2.6" stroke-dasharray="4 4" opacity="0">${seg(i, n, D)}</path>` : '').join('')}
        <g>${seg(0, n, D, [1, 2, 3, 4])}${pill(20, 22, 160, L('canvia x en 10', 'cambia x en 10'))}</g>
        <g opacity="0">${seg(0, n, D, [5, 6])}${pill(20, 22, 160, L('canvia x en -10', 'cambia x en -10'), '#F08A24')}</g>
        ${pos.map((v, i) => `<g opacity="0">${seg(i, n, D)}<text x="290" y="42" text-anchor="end" class="tat b">x = ${v}</text></g>`).join('')}
        <text x="160" y="196" text-anchor="middle" class="tat s">${L('Suma a la x que ja tenia', 'Suma a la x que ya tenía')}</text>`);
    },
    // la direcció: 90 dreta, 0 amunt, -90 esquerra, 180 avall
    g4dir() {
      const D = 'dur="8s" repeatCount="indefinite"', cx = 104, cy = 110, R = 72;
      const dirs = [[90, L('dreta', 'derecha')], [0, L('amunt', 'arriba')], [-90, L('esquerra', 'izquierda')], [180, L('avall', 'abajo')]], n = dirs.length;
      const rot = `values="0;0;-90;-90;-180;-180;-270;-270;-360" keyTimes="0;.2;.25;.45;.5;.7;.75;.95;1"`;
      return tSvg(220, `<circle cx="${cx}" cy="${cy}" r="${R + 22}" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><circle cx="${cx}" cy="${cy}" r="${R - 6}" fill="#F3F6FF" stroke="#C9D3EE" stroke-width="2" stroke-dasharray="4 6"/>
        <text x="${cx}" y="${cy - R - 2}" text-anchor="middle" class="tat b">0</text><text x="${cx + R + 6}" y="${cy + 6}" class="tat b">90</text><text x="${cx}" y="${cy + R + 14}" text-anchor="middle" class="tat b">180</text><text x="${cx - R - 6}" y="${cy + 6}" text-anchor="end" class="tat b">-90</text>
        <g transform="translate(${cx} ${cy})"><g><animateTransform attributeName="transform" type="rotate" ${rot} ${D}/>
          <path d="M-8 -12H26V-26L56 0L26 26V12H-8Z" fill="#FFC531" stroke="#B46A00" stroke-width="3" stroke-linejoin="round"/></g><circle r="9" fill="#14204A"/></g>
        ${dirs.map(([d, t], i) => `<g opacity="0">${seg(i, n, D)}${pill(206, 64, 104, `${L('apunta', 'apunta')} ${d}`)}<text x="258" y="126" text-anchor="middle" class="tat b">= ${t}</text></g>`).join('')}
        <text x="258" y="166" text-anchor="middle" class="tat s">${L('Els graus diuen', 'Los grados dicen')}</text><text x="258" y="184" text-anchor="middle" class="tat s">${L('cap on mira', 'hacia dónde mira')}</text>`);
    },
    // rebotar: quan la pilota toca una vora, canvia de direcció i continua
    g4bounce() {
      const D = 'dur="6s" repeatCount="indefinite"', path = 'M60 170L200 30L270 100L190 180L50 40', hits = [[200, 30, .326], [270, 100, .488], [190, 180, .674], [50, 40, .99]];
      return tSvg(214, `<rect x="40" y="20" width="240" height="170" rx="12" fill="#E8F6FF" stroke="#7FB8E8" stroke-width="3"/>
        <path d="${path}" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="3 7" stroke-linecap="round" opacity=".55"/>
        ${hits.map(([x, y, t]) => `<g opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;${(t - .01).toFixed(3)};${t.toFixed(3)};${Math.min(.999, t + .1).toFixed(3)};1" ${D}/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="#F08A24" stroke-width="3"/><text x="${x < 100 ? x + 22 : x > 240 ? x - 22 : x}" y="${y < 60 ? y + 30 : y > 150 ? y - 20 : y + 5}" text-anchor="${x < 100 ? 'start' : x > 240 ? 'end' : 'middle'}" class="tat b" fill="#F08A24">boing!</text></g>`).join('')}
        <g>${spr('pilota', 0, 0, 0, 24)}<animateMotion path="${path}" ${D}/></g>
        <text x="160" y="208" text-anchor="middle" class="tat s">${L('si toques la vora, rebota', 'si tocas el borde, rebota')}</text>`);
    },
    // tocar un color: si en Numi toca la paret blava, torna a l'inici; la sortida és verda
    g4color() {
      const D = 'dur="8s" repeatCount="indefinite"';
      const mv = 'values="0 0;0 0;62 0;62 0;0 0;0 0;0 70;150 70;150 70;0 0" keyTimes="0;.06;.3;.36;.37;.46;.6;.85;.97;1"';
      return tSvg(214, `<rect x="10" y="10" width="300" height="194" rx="16" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="10" y="10" width="300" height="22" rx="8" fill="#3D7BF4"/><rect x="10" y="182" width="300" height="22" rx="8" fill="#3D7BF4"/><rect x="118" y="30" width="24" height="98" rx="6" fill="#3D7BF4"/>
        <rect x="236" y="120" width="64" height="58" rx="8" fill="#3CC47C"/><text x="268" y="154" text-anchor="middle" class="tat w s">${L('sortida', 'salida')}</text>
        <circle cx="66" cy="76" r="20" fill="none" stroke="#9AA9D6" stroke-width="2" stroke-dasharray="4 4"/><text x="66" y="112" text-anchor="middle" class="tat s">${L('inici', 'inicio')}</text>
        <rect x="116" y="28" width="28" height="102" rx="8" fill="none" stroke="#FFC531" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.29;.3;.36;.37;1" ${D}/></rect>
        <g><animateTransform attributeName="transform" type="translate" ${mv} ${D}/>${spr('numi', 0, 66, 76, 38)}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.31;.45;.46;1" ${D}/>${pill(150, 44, 152, L('ha tocat el blau', 'ha tocado el azul'), '#F2B21B')}${pill(150, 80, 152, L("ves a l'inici", 've al inicio'))}</g>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.85;.86;.97;1" ${D}/><text x="200" y="104" text-anchor="middle" class="tat b" fill="#1FA463">${L('Has sortit!', '¡Has salido!')}</text></g>`);
    },
    // un escenari en petit amb tres punts (A, B, C) per a les preguntes «on anirà?»
    g4pts(set = 1) {
      const S = { 1: [['A', 150, 100], ['B', -150, 100], ['C', 150, -100]], 2: [['A', -150, -100], ['B', 0, 120], ['C', 150, -100]], 3: [['A', 175, -115], ['B', -175, 100], ['C', 25, 100]] }[set] || [];
      const cx = 160, cy = 108, s = .56, col = { A: '#3D7BF4', B: '#E5489A', C: '#F08A24' };
      return tSvg(214, `${stage(cx, cy, s)}<text x="${cx + 128}" y="${cy + 18}" text-anchor="end" class="tat s" fill="#E0533F">x</text><text x="${cx + 10}" y="${cy - 82}" class="tat s" fill="#1FA463">y</text>
        ${S.map(([n, x, y]) => `<g><circle cx="${cx + x * s}" cy="${cy - y * s}" r="15" fill="${col[n]}" stroke="#fff" stroke-width="3"/><text x="${cx + x * s}" y="${cy - y * s + 6}" text-anchor="middle" class="tat w b">${n}</text></g>`).join('')}
        <text x="${cx + 8}" y="${cy + 20}" class="tat s">(0, 0)</text>`);
    }
  };
})());

/* ── unitat 5 ── */
/* Tech Creadors · unitat 5 «Condicions» · animacions de teoria (si toca…, si no, colors que avisen, i / o / no) */
Object.assign(TANI, {
  // una condició és una pregunta de sí o no: «Toca la cistella?» canvia de NO a SÍ quan la poma hi arriba
  g5cond() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    return tSvg(200, `<rect x="8" y="8" width="128" height="184" rx="18" fill="#E9F8E4" stroke="#BFE6B0" stroke-width="2"/>
      <path d="M8 160 Q72 148 136 160 V174 Q136 192 118 192 H26 Q8 192 8 174Z" fill="#8FD36C"/>
      <g transform="translate(40 34)"><rect x="-4" y="6" width="8" height="26" fill="#8A5A33"/><circle r="20" fill="#4FAE45"/><circle cx="-12" cy="8" r="12" fill="#62C152"/><circle cx="7" cy="-4" r="5" fill="#EF5A5A"/></g>
      ${art('cistella', 80, 156, 82)}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 98;0 98;0 0" keyTimes="0;.12;.52;.96;1" ${D}/>${art('poma', 80, 44, 38)}</g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.52;.56;.7;1" ${D}/>${[[-26, -10], [24, -14], [-18, -30], [20, -32]].map(([dx, dy]) => `<path d="M${80 + dx} ${132 + dy} l4 -6 l4 6 l-4 6z" fill="#FFC531"/>`).join('')}</g>
      <g ${tA(.2, 'ta-in')}><rect x="150" y="16" width="160" height="72" rx="16" fill="#FFF7E0" stroke="#F2B21B" stroke-width="3"/>
        <text x="230" y="46" text-anchor="middle" class="tat b">${L('Toca la', '¿Toca la')}</text><text x="230" y="72" text-anchor="middle" class="tat b">${L('cistella?', 'cesta?')}</text></g>
      <path d="M230 92 V106" stroke="#F2B21B" stroke-width="4" stroke-linecap="round" ${tA(.5, 'ta-fade')}/>
      <g opacity="1"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.53;.55;.97;1" ${D}/><rect x="176" y="110" width="108" height="46" rx="23" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="3"/>
        <path d="M200 124 l16 16 M216 124 l-16 16" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round"/><text x="250" y="141" text-anchor="middle" class="tat b" style="fill:#C0392B">NO</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.53;.55;.97;1" ${D}/><rect x="176" y="110" width="108" height="46" rx="23" fill="#E7F7EE" stroke="#1FA463" stroke-width="3"/>
        <path d="M198 133 l7 7 l13 -15" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="250" y="141" text-anchor="middle" class="tat b" style="fill:#147A47">${L('SÍ', 'SÍ')}</text></g>
      <text x="230" y="184" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('Només sí o no!', '¡Solo sí o no!')}</text>`);
  },
  // el bloc «si»: si la resposta és no, se salta els blocs de dins; si és sí, els fa
  g5if() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const no = 'M22 37 L22 185', yes = 'M22 37 L62 37 L62 77 L62 113 L22 150 L22 185';
    const lit = (y, from, to) => `<rect x="60" y="${y}" width="170" height="30" rx="9" fill="none" stroke="#fff" stroke-width="4" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;${from};${(from + to) / 2};${to};1" ${D}/></rect>`;
    return tSvg(232, `<g ${tA(.1, 'ta-in')}>
        <path d="M40 20 H280 Q288 20 288 28 V46 Q288 54 280 54 H58 V136 H280 Q288 136 288 144 V150 Q288 158 280 158 H48 Q40 158 40 150 V28 Q40 20 48 20Z" fill="#F2B21B"/>
        <text x="54" y="43" class="tat b" style="fill:#3A2600">${L('si toca la cistella', 'si toca la cesta')}</text>
        <rect x="60" y="62" width="170" height="30" rx="9" fill="#E5489A"/><text x="74" y="83" class="tat w s">${L("amaga't", 'escóndete')}</text>
        <rect x="60" y="98" width="170" height="30" rx="9" fill="#14A3B8"/><text x="74" y="119" class="tat w s">${L('fes el so pop', 'haz el sonido pop')}</text>
        <rect x="40" y="168" width="200" height="30" rx="9" fill="#3D7BF4"/><text x="54" y="189" class="tat w s">${L('canvia y en -5', 'cambia y en -5')}</text></g>
      ${lit(62, .55, .66)}${lit(98, .64, .75)}
      <circle r="9" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${no}" keyPoints="0;0;1;1" keyTimes="0;.1;.36;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.08;.1;.36;.38;1" ${D}/></circle>
      <circle r="9" fill="#fff" stroke="#14204A" stroke-width="3" opacity="0"><animateMotion path="${yes}" keyPoints="0;0;1;1" keyTimes="0;.5;.88;1" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.48;.5;.88;.9;1" ${D}/></circle>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.08;.1;.4;.42;1" ${D}/><circle cx="300" cy="37" r="14" fill="#EF5A5A"/><path d="M294 31 l12 12 M306 31 l-12 12" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
        <text x="160" y="222" text-anchor="middle" class="tat s">${L('No: se salta els blocs de dins', 'No: se salta los bloques de dentro')}</text></g>
      <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.48;.5;.92;.94;1" ${D}/><circle cx="300" cy="37" r="14" fill="#1FA463"/><path d="M293 37 l5 5 l9 -10" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="160" y="222" text-anchor="middle" class="tat s">${L('Sí: fa els blocs de dins', 'Sí: hace los bloques de dentro')}</text></g>`);
  },
  // el «si» dins del «per sempre» pregunta tota l'estona; fora del bucle només pregunta una vegada
  g5loop() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const blk = (x, y, w, txt, col) => `<rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="${col}"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-size:13px">${txt}</text>`;
    const si = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="24" rx="7" fill="#F2B21B"/><text x="${x + 8}" y="${y + 17}" class="tat s" style="font-size:13px;fill:#3A2600">${L('si toca', 'si toca')}</text>${art('cistella', x + 84, y + 12, 30)}`;
    const loop = (x, y, h) => `<path d="M${x + 6} ${y} H${x + 126} Q${x + 132} ${y} ${x + 132} ${y + 6} V${y + 24} H${x + 12} V${y + h} H${x + 132} V${y + h + 4} Q${x + 132} ${y + h + 10} ${x + 126} ${y + h + 10} H${x + 6} Q${x} ${y + h + 10} ${x} ${y + h + 4} V${y + 6} Q${x} ${y} ${x + 6} ${y}Z" fill="#1FA463"/><text x="${x + 8}" y="${y + 17}" class="tat w s" style="font-size:13px">${L('per sempre', 'por siempre')}</text>`;
    const ask = (cx, vals, keys) => `<g opacity="0"><animate attributeName="opacity" values="${vals}" keyTimes="${keys}" calcMode="discrete" ${D}/><rect x="${cx - 32}" y="130" width="64" height="24" rx="12" fill="#FFF7E0" stroke="#F2B21B" stroke-width="2"/><text x="${cx}" y="147" text-anchor="middle" class="tat s" style="font-size:13px">${L('Toco?', '¿Toco?')}</text></g>`;
    return tSvg(232, `<rect x="6" y="6" width="150" height="220" rx="14" fill="#FFF5F5" stroke="#F5C2C2" stroke-width="2"/><rect x="164" y="6" width="150" height="220" rx="14" fill="#F0FBF4" stroke="#B8E6C9" stroke-width="2"/>
      <text x="81" y="26" text-anchor="middle" class="tat b" style="fill:#C0392B">✗ ${L('Fora', 'Fuera')}</text><text x="239" y="26" text-anchor="middle" class="tat b" style="fill:#147A47">✓ ${L('Dins', 'Dentro')}</text>
      <g ${tA(.2, 'ta-in')}>${si(14, 36, 132)}${loop(14, 66, 52)}${blk(26, 92, 112, L('baixa', 'baja'), '#3D7BF4')}</g>
      <g ${tA(.4, 'ta-in')}>${loop(172, 36, 78)}${blk(184, 62, 112, L('baixa', 'baja'), '#3D7BF4')}${si(184, 88, 112)}</g>
      ${ask(81, '1;0;0', '0;.1;1')}${ask(239, '1;0;1;0;1;0;1;0;1;0;1;0', '0;.08;.16;.25;.33;.41;.5;.58;.66;.75;.83;.91')}
      <defs><clipPath id="g5lpL"><rect x="6" y="156" width="150" height="70"/></clipPath><clipPath id="g5lpR"><rect x="164" y="156" width="150" height="70"/></clipPath></defs>
      ${art('cistella', 81, 206, 56)}${art('cistella', 239, 206, 56)}
      <g clip-path="url(#g5lpL)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 80;0 80" keyTimes="0;.75;1" ${D}/>${art('poma', 81, 168, 26)}</g></g>
      <g clip-path="url(#g5lpR)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 26;0 26" keyTimes="0;.3;1" ${D}/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.3;.32;1" ${D}/>${art('poma', 239, 168, 26)}</g></g>
      <text x="239" y="176" text-anchor="middle" class="tat b" style="fill:#147A47" opacity="0">${L('Atrapada!', '¡Atrapada!')}<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.31;.34;.95;1" ${D}/></text>`);
  },
  // «si … si no»: sempre fa una de les dues parts (si plou, paraigua; si no, gorra)
  g5else() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const on = (a, b) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + .02};${b};${b + .02};1" ${D}/>`;
    const glow = (a, b) => `<animate attributeName="stroke-width" values="2;2;5;5;2;2" keyTimes="0;${a};${a + .02};${b};${b + .02};1" ${D}/>`;
    return tSvg(222, `<g opacity="0">${on(.04, .46)}<g transform="translate(160 36)"><ellipse rx="34" ry="14" fill="#B9C3D9"/><ellipse cx="-16" cy="-8" rx="18" ry="13" fill="#C9D2E6"/><ellipse cx="12" cy="-11" rx="20" ry="15" fill="#C9D2E6"/>
        ${[-20, -4, 12, 26].map((x, k) => `<path d="M${x} ${16 + (k % 2) * 4} l-4 10" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round"/>`).join('')}</g></g>
      <g opacity="0">${on(.52, .96)}<g transform="translate(160 36)">${[...Array(8).keys()].map(i => `<rect x="-2" y="-30" width="4" height="9" rx="2" fill="#FFC531" transform="rotate(${i * 45})"/>`).join('')}<circle r="17" fill="#FFD54A" stroke="#F5A623" stroke-width="2"/></g></g>
      <g ${tA(.1, 'ta-in')}><path d="M160 66 L206 92 L160 118 L114 92Z" fill="#F2B21B" stroke="#C98A0B" stroke-width="2.5" stroke-linejoin="round"/><text x="160" y="98" text-anchor="middle" class="tat b" style="fill:#3A2600">${L('Plou?', '¿Llueve?')}</text></g>
      <path d="M114 92 H70 V130" fill="none" stroke="#1FA463" stroke-width="4" stroke-linecap="round" ${tA(.3, 'ta-fade')}/><path d="M206 92 H250 V130" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-linecap="round" ${tA(.3, 'ta-fade')}/>
      <text x="92" y="84" text-anchor="middle" class="tat s" style="fill:#147A47" ${tA(.4, 'ta-fade')}>${L('sí', 'sí')}</text><text x="228" y="84" text-anchor="middle" class="tat s" style="fill:#C0392B" ${tA(.4, 'ta-fade')}>no</text>
      <g ${tA(.5, 'ta-in')}><rect x="12" y="132" width="116" height="62" rx="14" fill="#fff" stroke="#1FA463" stroke-width="2">${glow(.04, .46)}</rect>
        <g transform="translate(38 166) scale(.85)"><path d="M-20 0 Q-20 -22 0 -22 Q20 -22 20 0 Q14 -6 7 0 Q0 -6 -7 0 Q-14 -6 -20 0Z" fill="#E5489A" stroke="#A3205E" stroke-width="2"/><path d="M0 -1 V14 Q0 19 -5 19" fill="none" stroke="#56628A" stroke-width="3" stroke-linecap="round"/></g>
        <text x="92" y="169" text-anchor="middle" class="tat s">${L('paraigua', 'paraguas')}</text></g>
      <g ${tA(.7, 'ta-in')}><rect x="192" y="132" width="116" height="62" rx="14" fill="#fff" stroke="#EF5A5A" stroke-width="2">${glow(.52, .96)}</rect>
        <g transform="translate(226 170)"><path d="M-18 0 Q-18 -20 0 -20 Q18 -20 18 0Z" fill="#3D7BF4" stroke="#1C3FB8" stroke-width="2"/><path d="M8 0 H28 Q30 4 26 6 H-18Z" fill="#3D7BF4" stroke="#1C3FB8" stroke-width="2" stroke-linejoin="round"/></g>
        <text x="282" y="169" text-anchor="middle" class="tat s">${L('gorra', 'gorra')}</text></g>
      <text x="160" y="214" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('Sempre fa una de les dues, mai totes dues', 'Siempre hace una de las dos, nunca las dos')}</text>`);
  },
  // colors que avisen: el cranc puja per la sorra (groc) i, quan toca el blau del mar, torna enrere
  g5color() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    return tSvg(212, `<defs><clipPath id="g5clB"><rect x="8" y="8" width="196" height="196" rx="16"/></clipPath></defs>
      <g clip-path="url(#g5clB)"><rect x="8" y="8" width="196" height="196" fill="#BDE8FF"/><circle cx="46" cy="40" r="18" fill="#FFD54A"/>
        <rect x="8" y="74" width="196" height="50" fill="#3D7BF4"/><path d="M8 80 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#fff" stroke-width="2.5" opacity=".6"/>
        <rect x="8" y="124" width="196" height="80" fill="#FFC531"/><rect x="8" y="124" width="196" height="80" fill="#FBE7B7" opacity=".55"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -44;0 -44;0 0;0 0" keyTimes="0;.35;.5;.8;1" ${D}/>
        ${art('cranc', 106, 176, 58)}
        <circle cx="106" cy="176" r="30" fill="none" stroke="#EF5A5A" stroke-width="3.5" stroke-dasharray="6 5" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.33;.35;.5;.52;1" ${D}/></circle>
        <g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.34;.36;.62;.64;1" ${D}/><rect x="126" y="124" width="72" height="28" rx="14" fill="#fff" stroke="#EF5A5A" stroke-width="2"/><text x="162" y="143" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Aigua!', '¡Agua!')}</text></g></g>
      <g ${tA(.3, 'ta-in')}><rect x="212" y="40" width="102" height="62" rx="14" fill="#fff" stroke="#3D7BF4" stroke-width="2.5"/><rect x="222" y="50" width="20" height="20" rx="5" fill="#3D7BF4"/><text x="250" y="66" class="tat s">${L('blau', 'azul')}</text><text x="222" y="92" class="tat s" style="fill:#C0392B">${L('compte!', '¡cuidado!')}</text></g>
      <g ${tA(.6, 'ta-in')}><rect x="212" y="114" width="102" height="62" rx="14" fill="#fff" stroke="#E2A400" stroke-width="2.5"/><rect x="222" y="124" width="20" height="20" rx="5" fill="#FFC531"/><text x="250" y="140" class="tat s">${L('groc', 'amarillo')}</text><text x="222" y="166" class="tat s" style="fill:#147A47">${L('camina', 'camina')}</text></g>
      <text x="263" y="198" text-anchor="middle" class="tat s" ${tA(.9, 'ta-fade')}>${L('El fons avisa', 'El fondo avisa')}</text>`);
  },
  // l'arbre de decisions del salt: «toca el verd?» → no: cau · sí: «fletxa amunt?» → sí: salta · no: camina
  g5tree() {
    const D = 'dur="6s" repeatCount="indefinite"';
    const q = (cx, cy, w, txt) => `<rect x="${cx - w / 2}" y="${cy - 20}" width="${w}" height="40" rx="14" fill="#FFF7E0" stroke="#F2B21B" stroke-width="3"/><text x="${cx}" y="${cy + 6}" text-anchor="middle" class="tat b">${txt}</text>`;
    const leaf = (cx, cy, w, txt, col, bg) => `<rect x="${cx - w / 2}" y="${cy - 17}" width="${w}" height="34" rx="17" fill="${bg}" stroke="${col}" stroke-width="3"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" class="tat s" style="fill:${col}">${txt}</text>`;
    const tag = (x, y, txt, col) => `<rect x="${x - 17}" y="${y - 11}" width="34" height="22" rx="11" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w s" style="font-size:12px">${txt}</text>`;
    const line = d => `<path d="${d}" fill="none" stroke="#9AA6C8" stroke-width="3" stroke-linecap="round"/>`;
    const tok = (path, kt, okt) => `<circle r="8" fill="#FFC531" stroke="#14204A" stroke-width="2.5" opacity="0"><animateMotion path="${path}" keyPoints="0;0;1;1" keyTimes="${kt}" calcMode="linear" ${D}/><animate attributeName="opacity" values="0;1;0;0" keyTimes="${okt}" calcMode="discrete" ${D}/></circle>`;
    return tSvg(222, `${line('M130 50 L70 84')}${line('M190 50 L230 80')}${line('M200 120 L172 154')}${line('M262 120 L276 154')}
      <g ${tA(.2, 'ta-in')}>${q(160, 30, 168, L('Toca el verd?', '¿Toca el verde?'))}</g>
      <g ${tA(.7, 'ta-pop')}>${tag(92, 64, 'no', '#EF5A5A')}${tag(218, 62, L('sí', 'sí'), '#1FA463')}</g>
      <g ${tA(1, 'ta-in')}>${leaf(66, 102, 104, L('cau ↓', 'cae ↓'), '#C0392B', '#FDEBEB')}</g>
      <g ${tA(1.3, 'ta-in')}>${q(232, 100, 160, L('Fletxa amunt?', '¿Flecha arriba?'))}</g>
      <g ${tA(1.8, 'ta-pop')}>${tag(176, 136, L('sí', 'sí'), '#1FA463')}${tag(282, 136, 'no', '#EF5A5A')}</g>
      <g ${tA(2.1, 'ta-in')}>${leaf(168, 172, 96, L('salta ↑', 'salta ↑'), '#147A47', '#E7F7EE')}${leaf(272, 172, 92, L('camina →', 'camina →'), '#1F5FBF', '#E8F0FF')}</g>
      ${tok('M160 50 L232 80 L232 120 L272 154', '0;.08;.38;1', '0;.08;.5;1')}${tok('M160 50 L66 84', '0;.56;.76;1', '0;.56;.95;1')}
      <text x="160" y="214" text-anchor="middle" class="tat b" ${tA(2.6, 'ta-fade')}>${L("Un «si» dins d'un altre «si»", 'Un «si» dentro de otro «si»')}</text>`);
  },
  // «i» i «o»: el regal s'obre només si hi són tots dos (i); l'estrella s'encén si n'hi ha algun (o)
  g5andor() {
    const D = 'dur="6s" repeatCount="indefinite"';
    const ph = (v) => `<animate attributeName="opacity" values="${v}" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>`;
    const who = (k, x, y, v) => { const a = typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - 22}" y="${y - 24}" width="44" height="48" `) : ''; return `<circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#C3CDE6" stroke-width="2.5" stroke-dasharray="5 5"/><g opacity="0">${ph(v)}${a}</g>`; };
    const row = (y, lab, col, res, txt) => `<rect x="6" y="${y}" width="308" height="96" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
      <circle cx="34" cy="${y + 38}" r="20" fill="${col}"/><text x="34" y="${y + 45}" text-anchor="middle" class="tat w b" style="font-size:19px">${lab}</text>
      ${who('numi', 92, y + 38, '0;1;0;1')}<text x="124" y="${y + 45}" text-anchor="middle" class="tat b">+</text>${who('bit', 156, y + 38, '0;0;1;1')}<text x="198" y="${y + 45}" text-anchor="middle" class="tat b">→</text>
      ${res}<text x="160" y="${y + 86}" text-anchor="middle" class="tat s">${txt}</text>`;
    const gift = y => `<g transform="translate(252 ${y + 40})"><rect x="-22" y="-10" width="44" height="30" rx="5" fill="#3D8BFF" stroke="#1C3FB8" stroke-width="2.4"/><path d="M0 -10 V20" stroke="#FFC531" stroke-width="6"/>
        <g>${`<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 0;0 -16" keyTimes="0;.25;.5;.75" calcMode="discrete" ${D}/>`}<rect x="-25" y="-20" width="50" height="12" rx="4" fill="#5BA0FF" stroke="#1C3FB8" stroke-width="2.4"/></g>
        <g opacity="0">${ph('0;0;0;1')}<path d="M0 -26 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#FFC531" stroke="#C9780E" stroke-width="2" transform="translate(0 -10)"/></g></g>`;
    const lamp = y => `<g transform="translate(252 ${y + 38})"><path d="M0 -24 l7 14 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2z" fill="#E6EAF4" stroke="#B9C3D9" stroke-width="2.4"/>
        <g opacity="0">${ph('0;1;1;1')}<circle r="30" fill="#FFF3A1" opacity=".6"/><path d="M0 -24 l7 14 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2z" fill="#FFC531" stroke="#C9780E" stroke-width="2.4"/></g></g>`;
    return tSvg(212, `${row(6, L('i', 'y'), '#E0533F', gift(6), L("Calen els dos per obrir el regal", 'Hacen falta los dos para abrir el regalo'))}
      ${row(110, 'o', '#8B5CF6', lamp(110), L("N'hi ha prou amb un per encendre-la", 'Basta con uno para encenderla'))}`);
  },
  // «no» gira la resposta: si NO toca la roca, en Bit camina; quan la toca, s'atura
  g5not() {
    const D = 'dur="5.5s" repeatCount="indefinite"';
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const sw = (a, b) => `<animate attributeName="opacity" values="${a}" keyTimes="0;.5;.95" calcMode="discrete" ${D}/>`;
    const pill = (x, y, ok, op) => `<g opacity="${op[0]}">${sw(op, 0)}<rect x="${x}" y="${y}" width="58" height="30" rx="15" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#1FA463' : '#EF5A5A'}" stroke-width="2.5"/><text x="${x + 29}" y="${y + 21}" text-anchor="middle" class="tat b" style="fill:${ok ? '#147A47' : '#C0392B'}">${ok ? L('sí', 'sí') : 'no'}</text></g>`;
    return tSvg(214, `<g ${tA(.1, 'ta-in')}><rect x="8" y="12" width="104" height="54" rx="12" fill="#FFF7E0" stroke="#F2B21B" stroke-width="2.5"/><text x="60" y="35" text-anchor="middle" class="tat s">${L('Toca la', '¿Toca la')}</text><text x="60" y="55" text-anchor="middle" class="tat s">${L('roca?', 'roca?')}</text></g>
      ${pill(31, 74, false, '1;0;1')}${pill(31, 74, true, '0;1;0')}
      <path d="M118 39 H140" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/><path d="M134 33 l7 6 l-7 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/>
      <g ${tA(.3, 'ta-pop')}><rect x="146" y="18" width="62" height="42" rx="12" fill="#E0533F"/><text x="177" y="45" text-anchor="middle" class="tat w b">${L('no', 'no')}</text>
        <path d="M160 70 q17 14 34 0" fill="none" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/><path d="M188 64 l6 6 l-8 3" fill="none" stroke="#E0533F" stroke-width="3" stroke-linecap="round"/></g>
      <path d="M214 39 H236" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/><path d="M230 33 l7 6 l-7 6" fill="none" stroke="#9FB2E6" stroke-width="4" stroke-linecap="round"/>
      <g><rect x="242" y="18" width="72" height="42" rx="12" fill="#3D7BF4"><animate attributeName="fill" values="#3D7BF4;#B9C3D9;#3D7BF4" keyTimes="0;.5;.95" calcMode="discrete" ${D}/></rect><text x="278" y="45" text-anchor="middle" class="tat w s">${L('camina', 'camina')}</text></g>
      ${pill(249, 74, true, '1;0;1')}${pill(249, 74, false, '0;1;0')}
      <rect x="8" y="120" width="306" height="74" rx="14" fill="#E9F8E4"/><rect x="8" y="170" width="306" height="24" rx="0" fill="#8FD36C"/>
      ${art('roca', 250, 152, 56)}
      <g><animateTransform attributeName="transform" type="translate" values="0 0;150 0;150 0;0 0" keyTimes="0;.5;.95;1" ${D}/>${typeof STG_ART !== 'undefined' ? STG_ART.bit.svg(0).replace('<svg ', '<svg x="36" y="118" width="46" height="56" ') : ''}</g>
      <text x="160" y="210" text-anchor="middle" class="tat s">${L('«no» canvia el sí per no i el no per sí', '«no» cambia el sí por no y el no por sí')}</text>`);
  },
  // el pla del videojoc en paper: el dibuix i les regles (cada regla és un «si»)
  g5plan() {
    const art = (k, x, y, w) => typeof STG_ART !== 'undefined' ? STG_ART[k].svg(0).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `) : '';
    const rule = (y, t, txt) => `<g ${tA(t, 'ta-in')}><circle cx="140" cy="${y - 5}" r="9" fill="#1FA463"/><path d="M135 ${y - 5} l3 3 l6 -7" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="155" y="${y}" class="tat s" style="font-size:13px">${txt}</text></g>`;
    return tSvg(224, `<rect x="8" y="8" width="304" height="208" rx="10" fill="#FFFDF5" stroke="#E2D6B5" stroke-width="2"/>${[40, 70, 100, 130, 160, 190].map(y => `<path d="M128 ${y + 6} H302" stroke="#EDE4CC" stroke-width="1.5"/>`).join('')}
      <text x="160" y="32" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>${L('Pla: Atrapa la fruita', 'Plan: Atrapa la fruta')}</text>
      <rect x="16" y="44" width="102" height="160" rx="8" fill="#fff" stroke="#9FB2E6" stroke-width="2" stroke-dasharray="6 4"/>
      <g ${tA(.4)}>${art('poma', 42, 70, 28)}</g><g ${tA(.7)}>${art('platan', 92, 94, 30)}</g><g ${tA(1)}>${art('roca', 58, 128, 28)}</g><g ${tA(1.3)}>${art('cistella', 67, 182, 52)}</g>
      <path d="M38 184 h-14 m0 0 l6 -5 m-6 5 l6 5 M96 184 h14 m0 0 l-6 -5 m6 5 l-6 5" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" ${tA(1.5, 'ta-fade')}/>
      ${rule(66, 1.8, L('← →: mou la cistella', '← →: mueve la cesta'))}${rule(96, 2.4, L("si l'atrapa: pop!", 'si la atrapa: ¡pop!'))}
      ${rule(126, 3, L('si toca terra: a dalt', 'si toca suelo: arriba'))}${rule(156, 3.6, L('si toca la roca: fi', 'si toca la roca: fin'))}
      <text x="216" y="196" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.2, 'ta-fade')}>${L('Cada regla és un «si»', 'Cada regla es un «si»')}</text>`);
  }
});

/* ── unitat 6 ── */
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

/* ── unitat 7 ── */
/* Tech Creadors · unitat 7 «Atzar i dificultat» · animacions de teoria (TANI)
   Dibuixos propis de Numi: el dau, la moneda i el barret de l'atzar, el número que canvia a cada volta, la fàbrica de
   clons, la vida d'un clon, la velocitat que creix, la corba de la dificultat i el pla del videojoc. SVG + SMIL i les
   classes ta-* (bucle de 5,5 s). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const C = { mov: '#3D7BF4', art: '#E5489A', loop: '#1FA463', cond: '#F2B21B', vr: '#E0533F', snd: '#14A3B8', ink: '#14204A', sky: '#14204A', gold: '#FFC531' };
  // un personatge de l'escenari (STG_ART) dins l'animació; si no hi és (proves sense dibuixos), un cercle
  const nest = (svg, x, y, w, h) => String(svg || '').replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${h}" style="width:${w}px;height:${h}px;overflow:visible" `);
  const spr = (art, x, y, w, h, c = 0) => typeof STG_ART !== 'undefined' && STG_ART[art] ? nest(STG_ART[art].svg(c), x, y, w, h) : `<circle cx="${x + w / 2}" cy="${y + h / 2}" r="${w / 3}" fill="#8B5CF6"/>`;
  // un bloc de l'editor (text blanc) i una pastilla de valor dins el bloc
  const blk = (x, y, w, txt, col = C.mov, cls = 'tat w s') => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/><rect x="${x + 6}" y="${y + 6}" width="16" height="16" rx="5" fill="#fff" opacity=".3"/><text x="${x + 29}" y="${y + 19}" class="${cls}">${txt}</text>`;
  const pill = (x, y, w, txt, fill = '#fff', cls = 'tat s') => `<rect x="${x}" y="${y}" width="${w}" height="22" rx="11" fill="${fill}"/><text x="${x + w / 2}" y="${y + 16}" text-anchor="middle" class="${cls}">${txt}</text>`;
  // n elements que es van alternant (un cada tros del bucle): l'element i només es veu al seu torn
  const turn = (i, n, dur = D) => `<animate attributeName="opacity" calcMode="discrete" values="${Array.from({ length: n }, (_, k) => k === i ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" dur="${dur}s" repeatCount="indefinite"/>`;
  // apareix al segon «a» i desapareix al «b» (dins el bucle de 5,5 s)
  const win = (a, b) => `<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${(a / D).toFixed(3)};${(b / D).toFixed(3)}" dur="${D}s" repeatCount="indefinite"/>`;
  const star = (x, y, r = 14, fill = C.gold) => { const p = Array.from({ length: 10 }, (_, k) => { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * .45 : r; return `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)}`; }).join(' ');
    return `<polygon points="${p}" fill="${fill}" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/>`; };
  const PIPS = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
  return {
    // què és l'atzar: el dau, la moneda i el barret (ningú no sap què sortirà)
    g7dau() {
      const faces = [3, 6, 1, 4, 2, 5], n = faces.length;
      const die = faces.map((f, i) => `<g>${turn(i, n)}${PIPS[f].map(([a, b]) => `<circle cx="${a * 15}" cy="${b * 15}" r="6" fill="${C.ink}"/>`).join('')}</g>`).join('');
      const coin = `<g transform="translate(160 92)"><ellipse rx="30" ry="30" fill="#FFC531" stroke="#B57A0E" stroke-width="3"><animate attributeName="rx" values="30;3;30;3;30" dur="1.2s" repeatCount="indefinite"/></ellipse>
        <g><animate attributeName="opacity" calcMode="discrete" values="1;0;1;0" keyTimes="0;.25;.5;.75" dur="1.2s" repeatCount="indefinite"/><circle r="12" fill="none" stroke="#B57A0E" stroke-width="3"/></g>
        <g opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;1" keyTimes="0;.25;.5;.75" dur="1.2s" repeatCount="indefinite"/><path d="M-10 -10l20 20M10 -10l-20 20" stroke="#B57A0E" stroke-width="3.5" stroke-linecap="round"/></g></g>`;
      const slips = ['?', '?', '?'].map((q, i) => `<g ${tA(.8 + i * 1.3)}><g transform="translate(${236 + i * 14} ${62 - i * 6}) rotate(${-14 + i * 14})"><rect x="-13" y="-17" width="26" height="30" rx="4" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><text x="0" y="4" text-anchor="middle" class="tat b">${q}</text></g></g>`).join('');
      return tSvg(214, `<rect x="6" y="10" width="308" height="160" rx="18" fill="#F3F0FF" stroke="#D9D2FB" stroke-width="2"/>
        <g transform="translate(66 92)"><g><animateTransform attributeName="transform" type="rotate" values="0;-14;10;-6;0;0" keyTimes="0;.06;.12;.16;.2;1" dur=".9s" repeatCount="indefinite"/>
          <rect x="-32" y="-32" width="64" height="64" rx="13" fill="#fff" stroke="${C.ink}" stroke-width="3"/>${die}</g></g>
        ${coin}
        <g transform="translate(250 112)"><path d="M-34 0h68l-8 40h-52z" fill="#3A2E7A" stroke="${C.ink}" stroke-width="2.5"/><ellipse cx="0" cy="0" rx="40" ry="9" fill="#5B4BD8" stroke="${C.ink}" stroke-width="2.5"/><rect x="-34" y="22" width="68" height="7" fill="#EF5A5A"/></g>${slips}
        <text x="66" y="158" text-anchor="middle" class="tat s">${L('dau', 'dado')}</text><text x="160" y="158" text-anchor="middle" class="tat s">${L('moneda', 'moneda')}</text><text x="250" y="166" text-anchor="middle" class="tat s">${L('barret', 'sombrero')}</text>
        <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('Ningú no sap què sortirà!', '¡Nadie sabe qué saldrá!')}</text>`);
    },
    // el valor «atzar 1-10»: dins del bucle, cada volta tria un número nou
    g7num() {
      const nums = [3, 8, 1, 6, 10, 4], n = nums.length;
      return tSvg(214, `<rect x="10" y="20" width="186" height="148" rx="14" fill="${C.loop}"/><text x="24" y="44" class="tat w s">${L('per sempre', 'por siempre')}</text>
        <rect x="24" y="54" width="164" height="98" rx="10" fill="#E9F8EF"/>
        <rect x="32" y="62" width="150" height="54" rx="9" fill="${C.vr}"/><rect x="38" y="68" width="16" height="16" rx="5" fill="#fff" opacity=".3"/><text x="61" y="81" class="tat w s">${L('posa número a', 'pon número a')}</text>
        <g class="ta-steam">${pill(46, 88, 122, L('atzar 1-10', 'azar 1-10'), '#fff', 'tat s')}</g>
        ${blk(32, 122, 150, L('digues número', 'di número'), C.art)}
        <path d="M14 160 Q2 94 14 32" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6" class="ta-dash"/>
        <rect x="206" y="22" width="108" height="42" rx="10" fill="#14204A"/><text x="214" y="48" class="tat w s">${L('número', 'número')}</text>
        ${nums.map((v, i) => `<g>${turn(i, n)}<rect x="276" y="30" width="32" height="26" rx="7" fill="${C.vr}"/><text x="292" y="49" text-anchor="middle" class="tat w b">${v}</text>
          <g transform="translate(262 120)"><rect x="-44" y="-30" width="88" height="54" rx="16" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><path d="M-12 24l-8 18 22-18z" fill="#fff" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><rect x="-14" y="21" width="20" height="6" fill="#fff"/><text x="0" y="8" text-anchor="middle" class="tat b" style="font-size:26px">${v}!</text></g></g>`).join('')}
        <text x="160" y="200" text-anchor="middle" class="tat b">${L('Un número nou a cada volta', 'Un número nuevo en cada vuelta')}</text>`);
    },
    // compte: l'atzar abans del bucle es tria una sola vegada; dins del bucle, a cada volta
    g7once() {
      const col = (x, outside, vals, ok) => `<g ${tA(outside ? .2 : 2.5, 'ta-in')}><rect x="${x}" y="8" width="150" height="168" rx="14" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2"/>
        <text x="${x + 75}" y="30" text-anchor="middle" class="tat s">${outside ? L('abans del bucle', 'antes del bucle') : L('dins del bucle', 'dentro del bucle')}</text>
        ${outside ? `<rect x="${x + 12}" y="40" width="126" height="24" rx="7" fill="${C.vr}"/><text x="${x + 20}" y="57" class="tat w s">${L('número ← atzar', 'número ← azar')}</text>` : ''}
        <rect x="${x + 12}" y="${outside ? 70 : 40}" width="126" height="${outside ? 40 : 70}" rx="9" fill="${C.loop}"/><text x="${x + 20}" y="${outside ? 87 : 57}" class="tat w s">${L('per sempre', 'por siempre')}</text>
        ${outside ? '' : `<rect x="${x + 16}" y="64" width="118" height="20" rx="6" fill="${C.vr}"/><text x="${x + 21}" y="79" class="tat w s" style="font-size:13px">${L('número ← atzar', 'número ← azar')}</text>`}
        <rect x="${x + 20}" y="${outside ? 92 : 88}" width="110" height="${outside ? 14 : 18}" rx="5" fill="${C.art}"/>
        ${vals.map((v, i) => `<g ${tA((outside ? .7 : 3) + i * .4)}><rect x="${x + 11 + i * 33}" y="122" width="28" height="28" rx="8" fill="#fff" stroke="${ok ? C.loop : '#EF5A5A'}" stroke-width="2.5"/><text x="${x + 25 + i * 33}" y="142" text-anchor="middle" class="tat b">${v}</text></g>`).join('')}
        <text x="${x + 75}" y="168" text-anchor="middle" class="tat s" ${tA(outside ? 2.1 : 4.5, 'ta-fade')}>${ok ? L('canvia cada volta', 'cambia cada vuelta') : L('sempre el mateix', 'siempre el mismo')}</text></g>`;
      return tSvg(214, `${col(6, true, [4, 4, 4, 4], false)}${col(164, false, [7, 2, 9, 5], true)}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4.7, 'ta-fade')}>${L("L'atzar es tria quan s'arriba al bloc", 'El azar se elige al llegar al bloque')}</text>`);
    },
    // la fàbrica de clons: l'original fa còpies que van cadascuna al seu lloc
    g7clon() {
      const to = [[118, 46], [196, 120], [264, 42], [176, 30], [282, 132]];
      const clones = to.map(([x, y], i) => { const t0 = .5 + i * .7, k0 = (t0 / D).toFixed(3), k1 = ((t0 + .5) / D).toFixed(3);
        return `<g opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k0};.96" dur="${D}s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="translate" values="56 112;56 112;${x} ${y};${x} ${y}" keyTimes="0;${k0};${k1};1" dur="${D}s" repeatCount="indefinite"/>${spr('estrella', -22, -22, 44, 44)}</g>`; }).join('');
      return tSvg(214, `<rect x="4" y="4" width="312" height="170" rx="16" fill="${C.sky}"/>${[[30, 20], [150, 160], [300, 90], [90, 150], [240, 16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff" opacity=".7"/>`).join('')}
        ${clones}<g transform="translate(56 112)">${spr('estrella', -26, -26, 52, 52)}</g>
        <rect x="14" y="146" width="84" height="22" rx="11" fill="#fff"/><text x="56" y="162" text-anchor="middle" class="tat s">${L('original', 'original')}</text>
        <g ${tA(3.4, 'ta-fade')}><rect x="200" y="150" width="104" height="22" rx="11" fill="${C.gold}"/><text x="252" y="166" text-anchor="middle" class="tat s">${L('5 clons', '5 clones')}</text></g>
        <g transform="translate(40 180)">${blk(0, 0, 240, L('crea un clon de mi', 'crea un clon de mí'), C.loop)}</g>`);
    },
    // la vida d'un clon: neix amagat, es col·loca, es mostra, baixa i s'esborra
    g7vida() {
      const lines = [[L('quan començo com a clon', 'al empezar como clon'), C.loop, 0, 1], [L("ves a un lloc a l'atzar", 've a un sitio al azar'), C.mov, 1, 1.8], [L("mostra't", 'muéstrate'), C.art, 1.8, 2.3], [L('baixa fins a baix', 'baja hasta abajo'), C.loop, 2.3, 4.2], [L('esborra aquest clon', 'borra este clon'), C.loop, 4.2, 5.3]];
      const k = t => (t / D).toFixed(3);
      return tSvg(214, `<rect x="6" y="8" width="84" height="196" rx="14" fill="${C.sky}"/>
        <g transform="translate(48 40)" opacity=".55"><circle r="22" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 4"/><text x="0" y="40" text-anchor="middle" class="tat w s">${L('fàbrica', 'fábrica')}</text></g>
        <g><animateTransform attributeName="transform" type="translate" values="48 40;48 40;30 40;30 40;30 176;30 176" keyTimes="0;${k(1)};${k(1.5)};${k(2.3)};${k(4.2)};1" dur="${D}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(1.8)};${k(4.4)}" dur="${D}s" repeatCount="indefinite"/>${spr('meteorit', -20, -20, 40, 40)}</g>
        <g transform="translate(30 176)" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(4.3)};${k(5)}" dur="${D}s" repeatCount="indefinite"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(9 * Math.cos(a)).toFixed(1)} ${(9 * Math.sin(a)).toFixed(1)}L${(20 * Math.cos(a)).toFixed(1)} ${(20 * Math.sin(a)).toFixed(1)}" stroke="${C.gold}" stroke-width="3.5" stroke-linecap="round"/>`; }).join('')}</g>
        ${lines.map(([t, c, a, b], i) => `<g transform="translate(98 ${14 + i * 38})"><rect x="-4" y="-4" width="222" height="36" rx="11" fill="${C.gold}" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(a)};${k(b)}" dur="${D}s" repeatCount="indefinite"/></rect>${blk(0, 0, 216, t, c)}</g>`).join('')}`);
    },
    // la velocitat que creix: cada volta, la caiguda és més ràpida
    g7vel() {
      const cols = [[3, 2.6], [5, 1.6], [7, 1.1]];
      return tSvg(214, cols.map(([v, d], i) => { const x = 10 + i * 104;
        return `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${x}" y="8" width="96" height="150" rx="14" fill="${C.sky}"/><path d="M${x + 6} 150h84" stroke="#3A2E7A" stroke-width="6" stroke-linecap="round"/>
          <g><animateTransform attributeName="transform" type="translate" values="${x + 48} 30;${x + 48} 136" dur="${d}s" repeatCount="indefinite"/>${spr('meteorit', -16, -16, 32, 32)}</g>
          <path d="M${x + 86} 40v${18 + v * 7}" stroke="${C.gold}" stroke-width="5" stroke-linecap="round"/><path d="M${x + 80} ${50 + v * 7}l6 8 6 -8" fill="none" stroke="${C.gold}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="${x + 48}" y="178" text-anchor="middle" class="tat s">${L('volta', 'vuelta')} ${i + 1}</text>
          <rect x="${x + 6}" y="186" width="84" height="24" rx="12" fill="${C.vr}"/><text x="${x + 48}" y="203" text-anchor="middle" class="tat w s">${L('velocitat', 'velocidad')} ${v}</text></g>`; }).join(''));
    },
    // ni massa fàcil ni massa difícil: la dificultat puja a poc a poc dins la zona bona
    g7corba() {
      const face = (x, y, mood, col) => `<g transform="translate(${x} ${y})"><circle r="13" fill="${col}"/><circle cx="-4.5" cy="-3" r="2" fill="${C.ink}"/><circle cx="4.5" cy="-3" r="2" fill="${C.ink}"/>${mood === 'ok' ? '<path d="M-6 4q6 6 12 0" stroke="#14204A" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : mood === 'bad' ? '<path d="M-6 7q6 -6 12 0" stroke="#14204A" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : '<path d="M-6 5h12" stroke="#14204A" stroke-width="2.4" stroke-linecap="round"/>'}</g>`;
      return tSvg(214, `<rect x="40" y="10" width="270" height="50" fill="#FDEBEB"/><rect x="40" y="60" width="270" height="62" fill="#E7F7EE"/><rect x="40" y="122" width="270" height="50" fill="#E8F0FF"/>
        <text x="300" y="30" text-anchor="end" class="tat s">${L('massa difícil', 'demasiado difícil')}</text><text x="300" y="114" text-anchor="end" class="tat s">${L('repte just', 'reto justo')}</text><text x="300" y="164" text-anchor="end" class="tat s">${L('massa fàcil', 'demasiado fácil')}</text>
        ${face(58, 26, 'bad', '#F4B7B7')}${face(58, 92, 'ok', '#A8E0C0')}${face(58, 144, 'meh', '#C9D6FB')}
        <path d="M40 10v162h270" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
        <text x="175" y="194" text-anchor="middle" class="tat s">${L('temps', 'tiempo') } →</text><text x="16" y="96" text-anchor="middle" class="tat s" transform="rotate(-90 16 96)">${L('dificultat', 'dificultad')} →</text>
        <path d="M80 150 L130 20" stroke="#EF5A5A" stroke-width="3" stroke-dasharray="6 5" opacity=".6"/><path d="M80 152 L300 146" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 5" opacity=".6"/>
        <path id="g7cv" d="M80 150 C 120 120, 150 110, 190 96 S 270 72, 300 66" fill="none" stroke="${C.loop}" stroke-width="5" stroke-linecap="round" pathLength="1" class="ta ta-draw" style="--t:.4s"/>
        <circle r="8" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.75;1" calcMode="linear" path="M80 150 C 120 120, 150 110, 190 96 S 270 72, 300 66"/></circle>`);
    },
    // el pla del videojoc: sis peces, una darrere l'altra
    g7pla() {
      const it = [[L('La nau ← →', 'La nave ← →'), C.mov], [L('Els clons', 'Los clones'), C.loop], [L('Xocs i vides', 'Choques y vidas'), C.vr], [L('Els punts', 'Los puntos'), C.vr], [L('Més velocitat', 'Más velocidad'), '#8B5CF6'], [L('Fi de partida', 'Fin de partida'), C.ink]];
      return tSvg(214, `${it.map(([t, c], i) => tCard(6 + (i % 2) * 158, 8 + Math.floor(i / 2) * 58, 150, 48, i + 1, t, .3 + i * .55, c)).join('')}
        <g ${tA(3.8, 'ta-fade')}><rect x="14" y="186" width="292" height="24" rx="12" fill="${C.gold}"/><text x="160" y="203" text-anchor="middle" class="tat s">${L('Fes una peça, prova-la… i la següent!', 'Haz una pieza, pruébala… ¡y la siguiente!')}</text></g>`);
    }
  };
})());

/* ── unitat 8 ── */
/* Tech Creadors · unitat 8 «L'estudi de videojocs» · animacions de teoria (TANI g8…)
   Dibuixos propis: fan servir els personatges de l'escenari (STG_ART) dins d'SVG en bucle de 5,5 s. */
Object.assign(TANI, (() => {
  // un personatge de l'escenari, centrat a (x, y), dins d'un quadre de mida w
  const spr = (art, x, y, w, c = 0) => { const a = typeof STG_ART !== 'undefined' && STG_ART[art]; if (!a) return ''; return a.svg(c).replace('<svg ', `<svg x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" `); };
  const mov = (vals, dur, extra = '') => `<animateTransform attributeName="transform" type="translate" values="${vals}" dur="${dur}s" repeatCount="indefinite" ${extra}/>`;
  const blk = (x, y, w, col, txt, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="22" rx="7" fill="${col}"/><text x="${x + 8}" y="${y + 15.5}" class="tat w s" style="font-size:13px">${txt}</text></g>`;
  const heart = (x, y, s = 1, col = '#E5304F') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 9C-14 0 -10 -11 0 -5C10 -11 14 0 0 9Z" fill="${col}" stroke="#9B1B33" stroke-width="1.6"/>`;
  return {
    // les quatre peces d'un videojoc: protagonista, objectiu, obstacle i regles
    g8parts() {
      const lab = [[L('Protagonista', 'Protagonista'), '#3D7BF4'], [L('Objectiu', 'Objetivo'), '#F2A516'], [L('Obstacle', 'Obstáculo'), '#EF5A5A'], [L('Regles', 'Reglas'), '#1FA463']];
      const chips = lab.map(([t, c], i) => `<g ${tA(.3 + i * .7, 'ta-in')}><rect x="186" y="${16 + i * 40}" width="128" height="32" rx="10" fill="#fff" stroke="${c}" stroke-width="2.4" filter="url(#bwSh)"/><circle cx="202" cy="${32 + i * 40}" r="10" fill="${c}"/><text x="202" y="${37 + i * 40}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="217" y="${37 + i * 40}" class="tat s" style="font-size:13px">${t}</text></g>`).join('');
      const ring = (x, y, r, c, t) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4" ${tA(t, 'ta-pop')}/>`;
      return tSvg(214, `<defs><linearGradient id="g8pSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2F7A"/><stop offset="1" stop-color="#5B4BB8"/></linearGradient></defs>
        <rect x="6" y="10" width="172" height="146" rx="16" fill="#20306A" filter="url(#bwSh)"/><rect x="15" y="20" width="154" height="112" rx="9" fill="url(#g8pSky)"/>
        ${[[34, 34], [150, 30], [120, 64], [44, 76], [160, 100], [88, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff" opacity=".8"/>`).join('')}
        <rect x="70" y="138" width="52" height="8" rx="4" fill="#3A4A8A"/>
        <g>${mov('0 0;56 0;0 0', 3.2)}${spr('gat', 46, 112, 34)}${ring(46, 112, 22, '#3D7BF4', .5)}</g>
        <g>${mov('0 0;0 -6;0 0', 1.2)}${spr('moneda', 150, 44, 22)}${ring(150, 44, 16, '#F2A516', 1.2)}</g>
        <g>${mov('0 -20;0 60', 1.8)}${spr('meteorit', 110, 40, 24)}${ring(110, 40, 18, '#EF5A5A', 1.9)}</g>
        <g ${tA(2.6, 'ta-pop')}><rect x="24" y="24" width="96" height="22" rx="7" fill="#1FA463"/><text x="31" y="39.5" class="tat w s" style="font-size:13px">${L('si toca → +1', 'si toca → +1')}</text></g>
        ${chips}
        <text x="160" y="184" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('4 peces = un videojoc!', '¡4 piezas = un videojuego!')}</text>
        <text x="160" y="205" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3.8, 'ta-fade')}>${L('Si en falta una, no funciona.', 'Si falta una, no funciona.')}</text>`);
    },
    // guanyar i perdre: dues condicions amb variables
    g8win() {
      // un número que canvia (0 → 3 → 6…) durant la primera meitat del bucle i després es queda quiet
      const step = (vals, x, y, col) => vals.map((v, i) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="26" font-weight="900" font-family="Lexend,system-ui,sans-serif" fill="${col}" opacity="0">${v}<animate attributeName="opacity" values="${vals.map((_, j) => j === i ? 1 : 0).join(';')};${i === vals.length - 1 ? 1 : 0}" keyTimes="${vals.map((_, j) => (j * .6 / vals.length).toFixed(3)).join(';')};1" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`).join('');
      const trophy = `<g transform="translate(70 150)"><path d="M-16 -30h32v10a16 16 0 0 1-32 0z" fill="#FFC531" stroke="#B46A00" stroke-width="2.4"/><path d="M-16 -26h-8a8 8 0 0 0 10 12M16 -26h8a8 8 0 0 1-10 12" fill="none" stroke="#B46A00" stroke-width="2.4"/><rect x="-4" y="-6" width="8" height="10" fill="#E8A317"/><rect x="-13" y="4" width="26" height="7" rx="2" fill="#B46A00"/></g>`;
      return tSvg(214, `<rect x="8" y="10" width="146" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="34" class="tat s">${L('punts', 'puntos')}</text>${step(['0', '3', '6', '9', '10'], 116, 54, '#1FA463')}${spr('moneda', 44, 52, 22)}
        <rect x="166" y="10" width="146" height="62" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="180" y="34" class="tat s">${L('vides', 'vidas')}</text>${step(['3', '2', '1', '0'], 276, 54, '#E5304F')}
        ${[0, 1, 2].map(i => `<g opacity="1">${heart(194 + i * 20, 52, 1)}<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;${(.15 + (2 - i) * .15).toFixed(2)};${(.16 + (2 - i) * .15).toFixed(2)};1" dur="5.5s" repeatCount="indefinite"/></g>`).join('')}
        <g ${tA(1.2, 'ta-in')}><rect x="10" y="84" width="142" height="30" rx="9" fill="#F2A516"/><text x="20" y="104" class="tat w s">${L('si punts = 10', 'si puntos = 10')}</text></g>
        <g ${tA(1.6, 'ta-in')}><rect x="168" y="84" width="142" height="30" rx="9" fill="#F2A516"/><text x="178" y="104" class="tat w s">${L('si vides = 0', 'si vidas = 0')}</text></g>
        <g ${tA(3.4, 'ta-pop')}>${trophy}<text x="70" y="182" text-anchor="middle" class="tat b" style="fill:#147A47">${L('Has guanyat!', '¡Has ganado!')}</text></g>
        <g ${tA(3.9, 'ta-pop')}><g transform="translate(250 136)">${heart(0, 0, 2.2, '#B9C1D6')}<path d="M-2 -10l6 8-5 6 4 8" fill="none" stroke="#fff" stroke-width="3"/></g><text x="250" y="182" text-anchor="middle" class="tat b" style="fill:#C0392B">${L('Has perdut!', '¡Has perdido!')}</text></g>
        <text x="160" y="206" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(4.3, 'ta-fade')}>${L('… i el programa s\'atura.', '… y el programa se para.')}</text>`);
    },
    // primer en paper: l'esbós i la llista de guions, després els blocs
    g8plan() {
      const grid = Array.from({ length: 7 }, (_, i) => `<path d="M${30 + i * 16} 34v84" stroke="#DCE4FA" stroke-width="1"/>`).join('') + Array.from({ length: 6 }, (_, i) => `<path d="M24 ${40 + i * 16}h112" stroke="#DCE4FA" stroke-width="1"/>`).join('');
      return tSvg(214, `<g transform="rotate(-3 80 90)"><rect x="16" y="22" width="128" height="150" rx="6" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/>${grid}
          <path d="M40 100c10-8 20-8 30 0" fill="none" stroke="#3D7BF4" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(.3, 'ta-draw')}/><circle cx="44" cy="92" r="8" fill="none" stroke="#3D7BF4" stroke-width="3" ${tA(.5, 'ta-pop')}/>
          <path d="M112 50l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="none" stroke="#F2A516" stroke-width="2.6" stroke-linejoin="round" pathLength="1" ${tA(.9, 'ta-draw')}/>
          <path d="M98 108l14-14M98 94l14 14" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round" ${tA(1.3, 'ta-pop')}/>
          <path d="M44 82 Q80 40 110 58" fill="none" stroke="#56628A" stroke-width="2" stroke-dasharray="4 4" ${tA(1.6, 'ta-fade')}/>
          <text x="26" y="138" class="tat s" ${tA(1.9, 'ta-fade')}>${L('1. Fletxes: moure', '1. Flechas: mover')}</text><text x="26" y="156" class="tat s" ${tA(2.2, 'ta-fade')}>${L('2. Estrella: +1', '2. Estrella: +1')}</text></g>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="M40 100 Q70 70 112 58 L104 100 L60 150" keyPoints="0;1;1" keyTimes="0;.45;1" calcMode="linear"/><g transform="rotate(35)"><rect x="-3" y="-30" width="7" height="28" rx="2" fill="#F2A516" stroke="#B46A00" stroke-width="1.4"/><path d="M-3 -2l3.5 8 3.5-8z" fill="#FFE2B0" stroke="#B46A00" stroke-width="1.2"/></g></g>
        <g ${tA(2.6, 'ta-in')}><path d="M152 96h18" stroke="#1FA463" stroke-width="5" stroke-linecap="round"/><path d="M166 86l10 10-10 10" fill="none" stroke="#1FA463" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.9, 'ta-in')}><rect x="182" y="26" width="134" height="140" rx="12" fill="#20306A" filter="url(#bwSh)"/><rect x="188" y="34" width="122" height="124" rx="6" fill="#F3F6FF"/></g>
        ${blk(192, 44, 114, '#F2A516', L('quan comença', 'al empezar'), 3.1)}${blk(200, 70, 104, '#1FA463', L('per sempre', 'por siempre'), 3.4)}${blk(208, 96, 96, '#3D7BF4', L('si tecla →', 'si tecla →'), 3.7)}${blk(208, 122, 96, '#8B5CF6', L('punts +1', 'puntos +1'), 4)}
        <text x="80" y="200" text-anchor="middle" class="tat s" ${tA(1, 'ta-fade')}>${L('Esbós en paper', 'Boceto en papel')}</text><text x="248" y="200" text-anchor="middle" class="tat s" ${tA(3.1, 'ta-fade')}>${L('Guions', 'Guiones')}</text>`);
    },
    // comença petit: versió 1, 2 i 3, una peça cada vegada
    g8small() {
      const lv = [[L('1. El protagonista es mou', '1. El protagonista se mueve'), '#3D7BF4', 'gat'], [L('2. + estrelles i punts', '2. + estrellas y puntos'), '#F2A516', 'estrella'], [L('3. + enemic i vides', '3. + enemigo y vidas'), '#EF5A5A', 'meteorit']];
      const rows = lv.map(([t, c, a], i) => { const y = 150 - i * 52, t0 = .4 + i * 1.3; return `<g ${tA(t0, 'ta-in')}><rect x="14" y="${y}" width="292" height="42" rx="12" fill="#fff" stroke="${c}" stroke-width="2.6" filter="url(#bwSh)"/>${spr(a, 40, y + 21, 30)}<text x="62" y="${y + 26}" class="tat s">${t}</text></g>
          <g ${tA(t0 + .7, 'ta-pop')}><circle cx="286" cy="${y + 21}" r="11" fill="#1FA463"/><path d="M280 ${y + 21}l4 4 8-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`; }).join('');
      return tSvg(214, `${rows}<text x="160" y="24" text-anchor="middle" class="tat b" ${tA(4.4, 'ta-fade')}>${L('Primer que funcioni; després, més!', '¡Primero que funcione; después, más!')}</text>
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(.2, 'ta-fade')}>${L('Prova cada versió abans de seguir.', 'Prueba cada versión antes de seguir.')}</text>`);
    },
    // cada personatge té els seus guions, i tots comencen alhora amb la bandera
    g8who() {
      const col = [['gat', L('Protagonista', 'Protagonista'), [['#3D7BF4', L('si tecla →', 'si tecla →')], ['#EF5A5A', L('vides −1', 'vidas −1')]]],
        ['moneda', L('Moneda', 'Moneda'), [['#8B5CF6', L('punts +1', 'puntos +1')], ['#3D7BF4', L('a l\'atzar', 'al azar')]]],
        ['meteorit', L('Meteorit', 'Meteorito'), [['#3D7BF4', L('cau', 'cae')], ['#F2A516', L('torna amunt', 'sube otra vez')]]]];
      const cards = col.map(([a, n, bs], i) => { const x = 6 + i * 104, t0 = .8 + i * .5; return `<g ${tA(t0, 'ta-in')}><rect x="${x}" y="50" width="100" height="140" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${spr(a, x + 50, 82, 40)}<text x="${x + 50}" y="122" text-anchor="middle" class="tat s">${n}</text>
          ${bs.map(([c, t], j) => `<rect x="${x + 5}" y="${134 + j * 26}" width="90" height="22" rx="6" fill="${c}"/><text x="${x + 50}" y="${149 + j * 26}" text-anchor="middle" class="tat w s" style="font-size:13px">${t}</text>`).join('')}</g>
          <path d="M160 34 L${x + 50} 50" stroke="#1FA463" stroke-width="2.4" stroke-dasharray="4 4" ${tA(2.6, 'ta-fade')}/>`; }).join('');
      return tSvg(214, `${cards}<g ${tA(.2, 'ta-pop')}><rect x="104" y="6" width="112" height="30" rx="10" fill="#1FA463"/><path d="M118 28V12" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M119 13c4-2 7 2 13 0v8c-6 2-9-2-13 0z" fill="#fff"/><text x="140" y="26" class="tat w s">${L('Comença!', '¡Empieza!')}</text></g>
        <circle cx="160" cy="21" r="20" fill="none" stroke="#1FA463" stroke-width="2"><animate attributeName="r" values="18;34" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="1.4s" repeatCount="indefinite"/></circle>
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#56628A" ${tA(3, 'ta-fade')}>${L('Tots els guions funcionen alhora.', 'Todos los guiones funcionan a la vez.')}</text>`);
    },
    // ajustar la dificultat canviant un número
    g8tune() {
      const face = (x, y, c, m) => `<circle cx="${x}" cy="${y}" r="18" fill="${c}" stroke="#20306A" stroke-width="2"/><circle cx="${x - 6}" cy="${y - 4}" r="2.4" fill="#20306A"/><circle cx="${x + 6}" cy="${y - 4}" r="2.4" fill="#20306A"/><path d="${m}" fill="none" stroke="#20306A" stroke-width="2.4" stroke-linecap="round"/>`;
      const zones = [[L('Massa fàcil', 'Demasiado fácil'), '#9FD8FF', 'M-7 6h14', '2'], [L('Al punt', 'En su punto'), '#8EE07A', 'M-8 4q8 8 16 0', '5'], [L('Massa difícil', 'Demasiado difícil'), '#FF9DA0', 'M-8 9q8 -8 16 0', '9']];
      const kt = '0;.3;.31;.6;.61;1';
      const show = i => { const v = [0, 0, 0, 0, 0, 0]; v[i * 2] = 1; v[i * 2 + 1] = 1; return v.join(';'); };
      return tSvg(214, `<rect x="16" y="24" width="288" height="16" rx="8" fill="#E8EDFB"/><rect x="16" y="24" width="96" height="16" rx="8" fill="#9FD8FF"/><rect x="112" y="24" width="96" height="16" fill="#8EE07A"/><rect x="208" y="24" width="96" height="16" rx="8" fill="#FF9DA0"/>
        ${zones.map(([t, c, m], i) => `<g transform="translate(${64 + i * 96} 76)">${face(0, 0, c, m.replace(/^M/, `M`))}</g><text x="${64 + i * 96}" y="114" text-anchor="middle" class="tat s">${t}</text>`).join('')}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;96 0;96 0;192 0;192 0" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/><circle cx="64" cy="32" r="13" fill="#fff" stroke="#20306A" stroke-width="3"/></g>
        <rect x="56" y="138" width="208" height="40" rx="11" fill="#3D7BF4" filter="url(#bwSh)"/><text x="72" y="164" class="tat w">${L('mou-te', 'muévete')}</text>
        <rect x="140" y="144" width="40" height="28" rx="8" fill="#fff"/>${zones.map(([, , , n], i) => `<text x="160" y="165" text-anchor="middle" class="tat b" opacity="0">${n}<animate attributeName="opacity" values="${show(i)}" keyTimes="${kt}" dur="5.5s" calcMode="discrete" repeatCount="indefinite"/></text>`).join('')}<text x="190" y="164" class="tat w s">${L('passos', 'pasos')}</text>
        <text x="160" y="204" text-anchor="middle" class="tat s" style="fill:#56628A">${L('Un sol número canvia la dificultat.', 'Un solo número cambia la dificultad.')}</text>`);
    },
    // l'informe de prova: dades de les partides + què funciona + un canvi concret
    g8feedback() {
      const bub = (x, y, w, c, s, t1, t2, t0) => `<g ${tA(t0, 'ta-in')}><path d="M${x} ${y}h${w}a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12H${x + 34}l-12 12v-12H${x}a12 12 0 0 1-12-12V${y + 12}a12 12 0 0 1 12-12z" fill="${c}" stroke="${s}" stroke-width="2.4"/><text x="${x + 2}" y="${y + 24}" class="tat s">${t1}</text><text x="${x + 2}" y="${y + 46}" class="tat s" style="fill:#56628A;font-size:13px">${t2}</text></g>`;
      const watch = `<g transform="translate(296 34)"><circle r="15" fill="#fff" stroke="#3D7BF4" stroke-width="2.6"/><rect x="-3" y="-21" width="6" height="5" rx="1.5" fill="#3D7BF4"/><path d="M0 0V-9M0 0l6 4" stroke="#20306A" stroke-width="2.4" stroke-linecap="round"/></g>`;
      return tSvg(214, `${bub(18, 12, 200, '#EAF2FF', '#3D7BF4', L('Dades: 3 partides', 'Datos: 3 partidas'), L('duren 3, 4 i 2 segons', 'duran 3, 4 y 2 segundos'), .3)}
        <g ${tA(.6, 'ta-pop')}>${watch}</g>
        ${bub(96, 96, 200, '#E7F7EE', '#1FA463', L('La pluja funciona!', '¡La lluvia funciona!'), L('Idea: el cranc més lent', 'Idea: el cangrejo más lento'), 1.4)}
        <g ${tA(1.4, 'ta-pop')}><g transform="translate(52 128)"><circle r="14" fill="#FFE27A" stroke="#B46A00" stroke-width="2.2"/><rect x="-6" y="12" width="12" height="8" rx="2" fill="#B9C1D6"/><path d="M-4 -2l4 5 4-5" fill="none" stroke="#B46A00" stroke-width="2"/></g></g>
        <g ${tA(2.8, 'ta-in')}><rect x="20" y="182" width="124" height="26" rx="9" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="30" y="200" class="tat s" style="fill:#C0392B">${L('«És avorrit.»', '«Es aburrido.»')}</text><path d="M24 195h116" stroke="#EF5A5A" stroke-width="3" ${tA(3.4, 'ta-pop')}/></g>
        <text x="236" y="200" text-anchor="middle" class="tat s" style="fill:#147A47" ${tA(3.8, 'ta-fade')}>${L('Dades + una idea!', '¡Datos + una idea!')}</text>`);
    },
    // el document de disseny: cada fila diu quan passa i quina variable canvia (també el final i el nivell 2)
    g8doc() {
      const rows = [[L('Toco el premi', 'Toco el premio'), L('punts +1', 'puntos +1'), '#8B5CF6'], [L("Em toca l'enemic", 'Me toca el enemigo'), L('vides −1', 'vidas −1'), '#EF5A5A'],
        [L('punts = 10', 'puntos = 10'), L('Has guanyat!', '¡Has ganado!'), '#1FA463'], [L('vides = 0', 'vidas = 0'), L('Has perdut!', '¡Has perdido!'), '#C0392B'], [L('Nivell 2: punts > 4', 'Nivel 2: puntos > 4'), L('velocitat 6', 'velocidad 6'), '#F08A24']];
      const row = ([a, b, c], i) => { const y = 62 + i * 30, t0 = .6 + i * .6; return `<g ${tA(t0, 'ta-in')}><rect x="16" y="${y}" width="288" height="26" rx="8" fill="#fff" stroke="#E2D6B4" stroke-width="1.6"/>
          <text x="26" y="${y + 18}" class="tat s" style="font-size:12.5px">${a}</text><rect x="180" y="${y + 3}" width="118" height="20" rx="7" fill="${c}"/><text x="239" y="${y + 17.5}" text-anchor="middle" class="tat w s" style="font-size:12.5px">${b}</text></g>`; };
      return tSvg(232, `<rect x="6" y="6" width="308" height="214" rx="12" fill="#FFFDF5" stroke="#E2D6B4" stroke-width="2" filter="url(#bwSh)"/>
        <text x="20" y="30" class="tat b">${L('Document de disseny', 'Documento de diseño')}</text>
        <text x="26" y="52" class="tat s" style="fill:#8A7A52;font-size:12px" ${tA(.3, 'ta-fade')}>${L('Quan…', 'Cuando…')}</text><text x="239" y="52" text-anchor="middle" class="tat s" style="fill:#8A7A52;font-size:12px" ${tA(.3, 'ta-fade')}>${L('Què canvia', 'Qué cambia')}</text>
        ${rows.map(row).join('')}`);
    },
    // proves amb dades: tres partides, una taula i el número que cal canviar
    g8data() {
      const cols = [[48, L('Partida', 'Partida')], [128, L('Temps', 'Tiempo')], [200, L('Punts', 'Puntos')], [270, L('Vides', 'Vidas')]];
      const data = [['1', '3 s', '0', '0'], ['2', '4 s', '1', '0'], ['3', '2 s', '0', '0']];
      const rows = data.map((r, i) => { const y = 46 + i * 28, t0 = .4 + i * .6; return `<g ${tA(t0, 'ta-in')}><rect x="14" y="${y}" width="292" height="24" rx="7" fill="${i % 2 ? '#F3F6FF' : '#fff'}" stroke="#DCE4FA" stroke-width="1.4"/>
          ${r.map((v, j) => `<text x="${cols[j][0]}" y="${y + 17}" text-anchor="middle" class="tat ${j === 1 ? 'b' : 's'}" style="${j === 1 ? 'fill:#C0392B;' : ''}font-size:13px">${v}</text>`).join('')}</g>`; }).join('');
      return tSvg(232, `<rect x="6" y="6" width="308" height="140" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        ${cols.map(([x, t]) => `<text x="${x}" y="34" text-anchor="middle" class="tat s" style="fill:#56628A;font-size:12.5px">${t}</text>`).join('')}
        ${rows}
        <rect x="98" y="40" width="60" height="96" rx="10" fill="none" stroke="#EF5A5A" stroke-width="2.4" stroke-dasharray="5 4" ${tA(2.3, 'ta-pop')}/>
        <g ${tA(2.7, 'ta-pop')}><rect x="40" y="154" width="240" height="28" rx="9" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="160" y="173" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Duren 3 s: massa difícil!', 'Duran 3 s: ¡demasiado difícil!')}</text></g>
        <g ${tA(3.5, 'ta-in')}><rect x="70" y="190" width="180" height="30" rx="9" fill="#3D7BF4"/><text x="84" y="210" class="tat w s">${L('mou-te', 'muévete')}</text>
          <rect x="${L(140, 158)}" y="195" width="24" height="20" rx="6" fill="#fff"/><text x="${L(152, 170)}" y="210" text-anchor="middle" class="tat s" style="fill:#C0392B">9</text><path d="M${L(143, 161)} 212l18 -14" stroke="#C0392B" stroke-width="2.4" stroke-linecap="round"/>
          <text x="${L(178, 196)}" y="210" class="tat w s">→</text><rect x="${L(196, 214)}" y="195" width="24" height="20" rx="6" fill="#fff"/><text x="${L(208, 226)}" y="210" text-anchor="middle" class="tat b" style="fill:#147A47">4</text></g>`);
    },
    // la fitxa de publicació: títol, controls, objectiu, crèdits i versió
    g8pub() {
      const key = (x, y, d) => `<rect x="${x}" y="${y}" width="22" height="20" rx="5" fill="#fff" stroke="#56628A" stroke-width="1.6"/><path d="${d}" fill="none" stroke="#20306A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
      return tSvg(232, `<rect x="8" y="8" width="304" height="178" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <g ${tA(.2, 'ta-in')}><rect x="20" y="20" width="118" height="96" rx="9" fill="#20306A"/>
          ${[[34, 32], [120, 40], [60, 58], [104, 74], [128, 98]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#fff" opacity=".8"/>`).join('')}
          <g>${mov('0 -30;0 50', 1.6)}${spr('estrella', 62, 40, 18)}</g><g>${mov('0 -20;0 60', 2.1)}${spr('estrella', 104, 30, 16)}</g><g>${mov('-20 0;24 0;-20 0', 3)}${spr('nau', 78, 100, 24)}</g></g>
        <text x="148" y="40" class="tat b" ${tA(.5, 'ta-fade')}>${L("Pluja d'estrelles", 'Lluvia de estrellas')}</text>
        <g ${tA(.9, 'ta-pop')}><rect x="150" y="50" width="44" height="20" rx="7" fill="#1FA463"/><text x="172" y="64.5" text-anchor="middle" class="tat w s" style="font-size:12.5px">v1.1</text></g>
        <g ${tA(1.3, 'ta-in')}>${key(150, 80, 'M166 90h-10m4 -4l-4 4 4 4')}${key(176, 80, 'M182 90h10m-4 -4l4 4 -4 4')}<text x="206" y="95" class="tat s" style="font-size:12.5px">${L('moure la nau', 'mover la nave')}</text></g>
        <text x="150" y="122" class="tat s" style="font-size:12.5px" ${tA(1.8, 'ta-fade')}>${L('Objectiu: 10 estrelles', 'Objetivo: 10 estrellas')}</text>
        <text x="150" y="142" class="tat s" style="font-size:12.5px" ${tA(2.2, 'ta-fade')}>${L('Perds amb 0 vides', 'Pierdes con 0 vidas')}</text>
        <g ${tA(2.7, 'ta-in')}><path d="M20 154h280" stroke="#E8EDFB" stroke-width="2"/><text x="20" y="174" class="tat s" style="fill:#56628A;font-size:12.5px">${L('Fet per: Aina · Provat per: Pol', 'Hecho por: Aina · Probado por: Pol')}</text></g>
        <g ${tA(3.5, 'ta-pop')}><rect x="94" y="194" width="132" height="30" rx="10" fill="#1FA463"/><path d="M108 209l5 5 9-10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="172" y="214" text-anchor="middle" class="tat w s">${L('Publicat!', '¡Publicado!')}</text></g>`);
    },
    // el viatge del curs: vuit illes, de primers passos fins al videojoc
    g8journey() {
      const P = [[34, 170], [94, 140], [50, 98], [118, 70], [190, 92], [244, 132], [290, 96], [250, 40]];
      const ico = [['numi', L('Personatges', 'Personajes')], ['papallona', L('Animació', 'Animación')], ['boto', L('Tecles', 'Teclas')], ['fletxa', L('x i y', 'x e y')], ['bandera', L('Si…', 'Si…')], ['moneda', L('Punts', 'Puntos')], ['meteorit', L('Atzar', 'Azar')], ['estrella', L('Videojoc', 'Videojuego')]];
      const road = P.reduce((d, [x, y], i) => d + (i ? ` L${x} ${y}` : `M${x} ${y}`), '');
      const isle = ([x, y], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><ellipse cx="${x}" cy="${y + 10}" rx="24" ry="9" fill="#5FA841" stroke="#3E7F2A" stroke-width="2"/>${ico[i][0] === 'numi' ? tBitMini(x, y + 8, 2, .28) : spr(ico[i][0], x, y - 4, 28)}<circle cx="${x + 19}" cy="${y - 12}" r="8" fill="#F08A24"/><text x="${x + 19}" y="${y - 7.5}" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" font-family="Lexend,system-ui,sans-serif">${i + 1}</text></g>`;
      return tSvg(214, `<rect width="320" height="214" rx="16" fill="#D9F2FF"/><path d="${road}" fill="none" stroke="#FBE7B7" stroke-width="7" stroke-linecap="round" stroke-dasharray="9 8"/>
        ${P.map(isle).join('')}
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('8 unitats… i ara, el teu videojoc!', '8 unidades… ¡y ahora, tu videojuego!')}</text>
        <g><animateMotion dur="5.5s" repeatCount="indefinite" path="${road}" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"/>${tBitMini(0, 0, 2, .34)}</g>`);
    }
  };
})());
