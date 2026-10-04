/* Tech Robòtica · unitat 6 «Control intel·ligent» · animacions de teoria (TANI)
   Dibuixos propis: el Maqueen Lite V5 vist des de dalt (cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs
   vermells, ultrasons blau amb dos «ulls» platejats), ones d'ultrasons, cinta negra i gràfiques senzilles. SVG + SMIL. */
Object.assign(TANI, (() => {
  const D = 5.5; // durada del cicle (com les classes ta-*)
  const SM = (attr, values, extra = '') => `<animate attributeName="${attr}" values="${values}" dur="${D}s" repeatCount="indefinite" ${extra}/>`;
  // passos discrets: visible només durant [a, b) del cicle (fraccions 0-1)
  const showIn = (a, b) => a <= 0 ? SM('opacity', b >= 1 ? '1' : '1;0', b >= 1 ? '' : `keyTimes="0;${b}" calcMode="discrete"`) : SM('opacity', b >= 1 ? '0;1' : '0;1;0', b >= 1 ? `keyTimes="0;${a}" calcMode="discrete"` : `keyTimes="0;${a};${b}" calcMode="discrete"`);
  const ICON = { none: '00000 00000 00000 00000 00000', heart: '01010 11111 11111 01110 00100', happy: '00000 01010 00000 10001 01110', arrow: '00100 01110 10101 00100 00100' };
  const leds = p => { const r = (ICON[p] || p).split(' '); let o = ''; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) o += `<rect x="${(-8.4 + x * 3.6).toFixed(1)}" y="${(-11.6 + y * 3.6).toFixed(1)}" width="2.2" height="2.2" rx=".5" fill="${r[y][x] === '1' ? '#FF3B30' : '#3A2226'}"/>`; return o; };
  // el Maqueen des de dalt, mirant amunt a a = 0 (a = 90 → mira a la dreta)
  const bot = (x, y, a = 90, s = 1, o = {}) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})">
    ${o.under ? `<ellipse cx="0" cy="2" rx="36" ry="38" fill="${o.under}" opacity=".35">${o.underAnim || ''}</ellipse>` : ''}
    <ellipse cx="2" cy="5" rx="26" ry="27" fill="#0B1430" opacity=".16"/>
    ${[-1, 1].map(k => `<g transform="translate(${k * 23} 3)"><rect x="-4.5" y="-13" width="9" height="26" rx="3.4" fill="#1B1D22"/>${[-8, -3, 2, 7].map(t => `<rect x="-4.5" y="${t}" width="9" height="1.5" fill="#40444F"/>`).join('')}</g>`).join('')}
    <rect x="-18.5" y="-20" width="37" height="41" rx="8" fill="${o.other ? '#5B6478' : '#152238'}" stroke="${o.other ? '#3B4255' : '#F2B21B'}" stroke-width="1.9"/>
    ${[-1, 1].map(k => `<circle cx="${k * 13}" cy="-16.5" r="2.4" fill="${o.car || '#C7CBD6'}">${o.carAnim || ''}</circle>`).join('')}
    <rect x="-13.5" y="-30" width="27" height="9.5" rx="2.6" fill="#1F5FBF"/>
    ${[-1, 1].map(k => `<circle cx="${k * 6.8}" cy="-25.3" r="4.4" fill="#D7DCE6" stroke="#9AA3B5" stroke-width=".8"/><circle cx="${k * 6.8}" cy="-25.3" r="2.1" fill="#5A6070"/>`).join('')}
    <rect x="-12" y="-14" width="24" height="21" rx="2" fill="#121212"/><rect x="-12" y="5.4" width="24" height="2.2" fill="#C9A24A"/>${leds(o.leds || (o.other ? 'arrow' : 'none'))}
    ${o.extra || ''}</g>`;
  // caixa de fusta vista des de dalt (el mur o el carregador)
  const crate = (x, y, w, h) => `<g><rect x="${x + 2}" y="${y + 3}" width="${w}" height="${h}" rx="3" fill="#0B1430" opacity=".15"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#D9A262" stroke="#8A5A2E" stroke-width="2.2"/><path d="M${x + 4} ${y + 4}L${x + w - 4} ${y + h - 4}M${x + w - 4} ${y + 4}L${x + 4} ${y + h - 4}" stroke="#A8743E" stroke-width="2"/></g>`;
  // ones d'ultrasons que surten cap a la dreta des de (x, y)
  // ones d'ultrasons dins del robot (surten cap endavant, és a dir, amunt en el sistema del robot)
  const waves = (n = 3, col = '#14A3B8') => [...Array(n)].map((_, k) => `<path d="M${-8 - k * 3} ${-33 - k * 7}q${8 + k * 3} -${6 + k * 2} ${16 + k * 6} 0" fill="none" stroke="${col}" stroke-width="2.8" stroke-linecap="round" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="1.1s" begin="${k * .25}s" repeatCount="indefinite"/></path>`).join('');
  const pill = (x, y, w, txt, col, cls = 'tat w s') => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="${cls}">${txt}</text>`;
  const ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1FA463"/><path d="M${x - r * .45} ${y}l${r * .32} ${r * .34}l${r * .55} -${r * .62}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ko = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#EF5A5A"/><path d="M${x - r * .38} ${y - r * .38}l${r * .76} ${r * .76}M${x + r * .38} ${y - r * .38}l-${r * .76} ${r * .76}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const floor = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#F8F7F2" stroke="#E2DDCC" stroke-width="2"/>`;
  // un bloc de programa (fitxa de color)
  const chip = (x, y, w, txt, col = '#E2574C', extra = '') => `<g><rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/>${extra}<text x="${x + 10}" y="${y + 19}" class="tat w s">${txt}</text></g>`;

  return {
    // una variable és una capsa amb nom: posa 40 i, a cada volta, canvia en 30 → el robot va cada cop més de pressa
    k6var() {
      const vals = [40, 70, 100, 130];
      const num = vals.map((v, i) => `<text x="80" y="84" text-anchor="middle" style="font:900 34px Lexend,system-ui,sans-serif;fill:#14204A" opacity="${i ? 0 : 1}">${v}${showIn(i / 4, (i + 1) / 4)}</text>`).join('');
      const bar = SM('width', vals.map(v => (v / 255 * 118).toFixed(1)).join(';'), 'keyTimes="0;.25;.5;.75" calcMode="discrete"');
      const plus = [1, 2, 3].map(i => `<text x="138" y="84" class="tat b" style="fill:#1FA463" opacity="0">+30${SM('opacity', '0;0;1;0;0', `keyTimes="0;${(i / 4 - .01).toFixed(2)};${(i / 4).toFixed(2)};${(i / 4 + .14).toFixed(2)};1"`)}</text>`).join('');
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}>
          <path d="M28 50l14 -14h76l14 14z" fill="#E7B877" stroke="#9A6A36" stroke-width="2.2" stroke-linejoin="round"/>
          <rect x="28" y="50" width="104" height="58" rx="6" fill="#F2C98B" stroke="#9A6A36" stroke-width="2.2"/>
          <rect x="44" y="96" width="72" height="22" rx="6" fill="#fff" stroke="#9A6A36" stroke-width="1.8"/>
          <text x="80" y="112" text-anchor="middle" class="tat s">${L('velocitat', 'velocidad')}</text>
          ${num}
        </g>${plus}
        <g ${tA(.5, 'ta-in')}>
          <text x="172" y="44" class="tat s">${L('motors', 'motores')}</text>
          <rect x="172" y="54" width="118" height="20" rx="10" fill="#E6ECFB"/>
          <rect x="172" y="54" width="18" height="20" rx="10" fill="#0FA3A3">${bar}</rect>
          <path d="M172 88h118" stroke="#C9D3EE" stroke-width="2"/><text x="172" y="104" class="tat s" style="fill:#5A6890">0</text><text x="290" y="104" text-anchor="end" class="tat s" style="fill:#5A6890">255</text>
        </g>
        ${chip(8, 132, 172, L('posa velocitat a 40', 'pon velocidad a 40'), '#E2574C')}
        <g>${chip(186, 132, 126, L('canvia en 30', 'cambia en 30'), '#E2574C', `<rect x="184" y="130" width="130" height="32" rx="10" fill="none" stroke="#FFC531" stroke-width="3" opacity="0">${SM('opacity', '0;0;1;0;1;0;1;0', 'keyTimes="0;.24;.27;.36;.52;.6;.77;.86"')}</rect>`)}</g>
        ${floor(10, 170, 300, 38)}
        ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${48 + i * 44}" cy="189" r="2" fill="#2F5BEA" opacity=".35"/>`).join('')}
        <g>${bot(0, 0, 90, .55)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M40 189H292" keyPoints="0;.06;.24;.52;1;1" keyTimes="0;.25;.5;.75;.97;1" calcMode="linear"/></g>`);
    },
    // un comptador: cada línia negra suma 1, una sola vegada
    k6count() {
      const lines = [96, 168, 240], x0 = 28, x1 = 298, front = 15, tHit = lx => (lx - front - x0) / (x1 - x0);
      const cnt = [0, 1, 2, 3].map(i => { const a = i ? tHit(lines[i - 1]) : 0, b = i < 3 ? tHit(lines[i]) : 1; return `<text x="251" y="72" text-anchor="middle" style="font:900 40px Lexend,system-ui,sans-serif;fill:#14204A" opacity="${i ? 0 : 1}">${i}${showIn(a, b)}</text>`; }).join('');
      const pops = lines.map(lx => { const a = tHit(lx); return `<text x="${lx}" y="122" text-anchor="middle" class="tat b" style="fill:#1FA463" opacity="0">+1${SM('opacity', '0;0;1;0;0', `keyTimes="0;${a.toFixed(3)};${(a + .02).toFixed(3)};${(a + .16).toFixed(3)};1"`)}</text>`; }).join('');
      return tSvg(214, `
        <g ${tA(.1, 'ta-in')}><rect x="192" y="14" width="118" height="74" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
          <text x="251" y="34" text-anchor="middle" class="tat s">${L('comptador', 'contador')}</text>${cnt}</g>
        <g ${tA(.3, 'ta-in')}>${chip(8, 18, 176, L('posa comptador a 0', 'pon contador a 0'), '#E2574C')}${chip(8, 56, 176, L('canvia en 1', 'cambia en 1'), '#E2574C')}</g>
        ${floor(10, 128, 300, 72)}
        ${lines.map(lx => `<rect x="${lx - 4}" y="132" width="8" height="64" fill="#121418"/>`).join('')}
        ${pops}
        <g>${bot(0, 0, 90, .62)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M${x0} 164H${x1}"/></g>
        <text x="160" y="212" text-anchor="middle" class="tat s" ${tA(.6, 'ta-fade')}>${L('cada línia, +1 (només una vegada)', 'cada línea, +1 (solo una vez)')}</text>`);
    },
    // control proporcional: com més a prop del mur, més a poc a poc (velocitat = error × k)
    k6prop() {
      const sp = 'keyTimes="0;.78;1" keyPoints="0;1;1" calcMode="spline" keySplines=".15 .75 .35 1;0 0 1 1"';
      return tSvg(214, `
        ${floor(10, 10, 300, 66)}${crate(270, 16, 30, 54)}
        <g>${bot(0, 0, 90, .62, { extra: waves(2) })}<animateMotion dur="${D}s" repeatCount="indefinite" path="M40 43H232" ${sp}/></g>
        <text x="18" y="96" class="tat s">${L('velocitat', 'velocidad')}</text>
        <rect x="104" y="83" width="200" height="18" rx="9" fill="#E6ECFB"/>
        <rect x="104" y="83" width="200" height="18" rx="9" fill="#0FA3A3"><animate attributeName="width" values="200;0;0" dur="${D}s" repeatCount="indefinite" keyTimes="0;.78;1" calcMode="spline" keySplines=".15 .75 .35 1;0 0 1 1"/></rect>
        <g ${tA(.4, 'ta-in')}>
          <path d="M40 200V114M40 200H300" stroke="#5A6890" stroke-width="2.4" stroke-linecap="round"/>
          <text x="46" y="122" class="tat s" style="fill:#5A6890">${L('velocitat', 'velocidad')}</text>
          <text x="300" y="194" text-anchor="end" class="tat s" style="fill:#5A6890">${L('distància', 'distancia')} →</text>
          <path d="M70 200L290 126" stroke="#E2574C" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.6, 'ta-draw')}/>
          <text x="80" y="213" class="tat s" style="fill:#E2574C">10 cm</text>
          <circle r="7" fill="#FFC531" stroke="#14204A" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" path="M290 126L70 200" ${sp}/></circle>
        </g>
        <text x="304" y="116" text-anchor="end" class="tat b" ${tA(1.2, 'ta-fade')}>${L('lluny: de pressa', 'lejos: deprisa')}</text>
        <text x="50" y="168" class="tat b" ${tA(2.4, 'ta-fade')}>${L('a prop: suau', 'cerca: suave')}</text>`);
    },
    // el guany k: petit (frena massa aviat i para lluny) o gran (arriba ràpid i a prop)
    k6gain() {
      const lane = (y, k, endX, ease, good, t) => `
        ${floor(10, y, 300, 62)}${crate(272, y + 6, 28, 50)}
        <text x="22" y="${y + 22}" class="tat b">k = ${k}</text>
        <g>${bot(0, 0, 90, .5)}<animateMotion dur="${D}s" repeatCount="indefinite" path="M42 ${y + 40}H${endX}" keyTimes="0;.8;1" keyPoints="0;1;1" calcMode="spline" keySplines="${ease};0 0 1 1"/></g>
        <g ${tA(t, 'ta-pop')}>${good ? ok(88, y + 18, 10) : ko(88, y + 18, 10)}<text x="104" y="${y + 23}" class="tat s">${good ? L('arriba ràpid i a prop', 'llega rápido y cerca') : L('lent i para lluny', 'lento y para lejos')}</text></g>`;
      return tSvg(214, `${lane(14, 2, 190, '.05 .55 .2 1', false, 4.2)}${lane(98, 10, 246, '.35 0 .25 1', true, 3.6)}
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(.4, 'ta-fade')}>${L('velocitat = error × k', 'velocidad = error × k')}</text>`);
    },
    // la zona morta: per sota de ~30 el motor no es mou, i el robot s'atura abans d'hora
    k6dead() {
      const X = d => 40 + (d - 10) * 5.4, Y = v => 190 - v * .95;   // d de 10 a 60 cm; v fins a 120
      const pts = []; for (let d = 60; d >= 10; d -= 1) pts.push(`${X(d).toFixed(1)} ${Y((d - 10) * 2).toFixed(1)}`);
      return tSvg(214, `
        <rect x="40" y="${Y(30)}" width="272" height="${190 - Y(30)}" fill="#EF5A5A" opacity=".14"/>
        <path d="M40 ${Y(30)}H312" stroke="#EF5A5A" stroke-width="2.4" stroke-dasharray="7 5"/>
        <text x="306" y="${Y(30) + 22}" text-anchor="end" class="tat s" style="fill:#C0392B">${L('zona morta: < 30', 'zona muerta: < 30')}</text>
        <path d="M40 196V70M34 190H312" stroke="#5A6890" stroke-width="2.4" stroke-linecap="round"/>
        <text x="46" y="80" class="tat s" style="fill:#5A6890">${L('velocitat', 'velocidad')}</text>
        <text x="312" y="208" text-anchor="end" class="tat s" style="fill:#5A6890">← ${L('el robot s\'acosta', 'el robot se acerca')}</text>
        <path d="M${pts.join('L')}" fill="none" stroke="#0FA3A3" stroke-width="4" stroke-linecap="round" pathLength="1" ${tA(.3, 'ta-draw')}/>
        <circle r="7" fill="#FFC531" stroke="#14204A" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" path="M${X(60)} ${Y(100)}L${X(25)} ${Y(30)}" keyTimes="0;.7;1" keyPoints="0;1;1" calcMode="linear"/></circle>
        <g ${tA(3.9, 'ta-pop')}><circle cx="${X(25)}" cy="${Y(30)}" r="13" fill="none" stroke="#C0392B" stroke-width="3"/>
          ${pill(204, 68, 150, L('s\'atura a 25 cm!', '¡se para a 25 cm!'), '#C0392B')}</g>
        <path d="M${X(25) + 6} ${Y(30) - 12}L${X(25) + 40} 81" stroke="#C0392B" stroke-width="2.4" ${tA(3.9, 'ta-fade')}/>
        <text x="22" y="30" class="tat b" ${tA(.2, 'ta-in')}>${L('velocitat = error × 2', 'velocidad = error × 2')}</text>`);
    },
    // segueix el líder: el seguidor mira el líder amb l'ultrasò, accelera, frena al semàfor i encén els llums de fre
    k6lead() {
      const kt = 'keyTimes="0;.42;.62;1"';
      const brake = `<animate attributeName="fill" values="#2BD45A;#FF3B30;#2BD45A" dur="${D}s" repeatCount="indefinite" keyTimes="0;.4;.64" calcMode="discrete"/>`;
      return tSvg(214, `
        <rect x="0" y="70" width="320" height="86" fill="#3B4255"/><path d="M0 113H320" stroke="#F8F7F2" stroke-width="3" stroke-dasharray="18 14"/>
        <g ${tA(.1, 'ta-in')}><g transform="translate(270 40)"><rect x="-2" y="0" width="4" height="34" fill="#5A6070"/><rect x="-11" y="-28" width="22" height="34" rx="6" fill="#1B1D22"/>
          <circle cy="-18" r="6" fill="#FF3B30" opacity=".25">${SM('opacity', '.25;1;.25', 'keyTimes="0;.36;.62" calcMode="discrete"')}</circle><circle cy="-4" r="6" fill="#2BD45A">${SM('opacity', '1;.25;1', 'keyTimes="0;.36;.62" calcMode="discrete"')}</circle></g></g>
        <g><g>${bot(0, 0, 90, .62, { other: true })}</g><animateMotion dur="${D}s" repeatCount="indefinite" path="M120 113H250" keyPoints="0;.62;.62;1" ${kt} calcMode="linear"/></g>
        <g><g>${bot(0, 0, 90, .62, { under: '#2BD45A', underAnim: brake, extra: waves(2) })}</g><animateMotion dur="${D}s" repeatCount="indefinite" path="M40 113H170" keyPoints="0;.5;.72;1" ${kt} calcMode="spline" keySplines=".3 .1 .7 1;.2 .6 .4 1;.3 0 .7 1"/></g>
        <g ${tA(.4, 'ta-fade')}><text x="14" y="34" class="tat b">${L('líder', 'líder')}: <tspan style="fill:#5B6478">${L('gris', 'gris')}</tspan></text>
          <text x="14" y="56" class="tat s">${L('seguidor/a: el nostre robot', 'seguidor/a: nuestro robot')}</text></g>
        <g ${tA(2.3, 'ta-pop')}>${pill(118, 178, 196, L('frena: llums vermells', 'frena: luces rojas'), '#C0392B')}</g>
        <text x="160" y="208" text-anchor="middle" class="tat s" ${tA(.8, 'ta-fade')}>${L('velocitat = (distància − 10) × k', 'velocidad = (distancia − 10) × k')}</text>`);
    },
    // el cotxe autònom: tres sensors (línia, ultrasò, llum), un programa, motors i llums; i es fa de nit
    k6car() {
      const night = `<rect x="0" y="0" width="320" height="214" fill="#0A1028" opacity="0" pointer-events="none">${SM('opacity', '0;0;.55;.55;0', 'keyTimes="0;.55;.62;.92;1"')}</rect>`;
      const head = SM('fill', '#C7CBD6;#FFFFFF;#C7CBD6', 'keyTimes="0;.6;.92" calcMode="discrete"');
      const beam = `<path d="M-12 -30L-34 -120H34L12 -30Z" fill="#FFF6C8" opacity="0">${SM('opacity', '0;0;.85;.85;0', 'keyTimes="0;.6;.62;.92;1"')}</path>`;
      const tag = (x, y, w, t1, col, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="9" fill="#fff" stroke="${col}" stroke-width="2.4"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s">${t1}</text></g>`;
      return tSvg(214, `
        <rect x="0" y="0" width="320" height="214" fill="#EEF3E6"/>
        <path d="M-10 150C70 150 90 92 170 92S260 40 330 40" fill="none" stroke="#3B4255" stroke-width="44" stroke-linecap="round"/>
        <path d="M-10 150C70 150 90 92 170 92S260 40 330 40" fill="none" stroke="#121418" stroke-width="5"/>
        ${night}
        <g>${bot(170, 92, 66, .95, { car: '#C7CBD6', carAnim: head, extra: beam + waves(3) })}</g>
        ${tag(184, 128, 130, L('ultrasò: distància', 'ultrasonido: distancia'), '#14A3B8', .3)}
        ${tag(14, 34, 138, L('línia L·R: carretera', 'línea L·R: carretera'), '#14204A', 1)}
        ${tag(14, 172, 126, L('llum: és de nit?', 'luz: ¿es de noche?'), '#F2B21B', 1.7)}
        ${tag(170, 172, 144, L('fars i llums de fre', 'faros y luces de freno'), '#E2574C', 2.4)}
        <g ${tA(3.4, 'ta-pop')}>${pill(236, 18, 132, L('es fa de nit!', '¡se hace de noche!'), '#2F3A8F')}</g>`);
    }
  };
})());
