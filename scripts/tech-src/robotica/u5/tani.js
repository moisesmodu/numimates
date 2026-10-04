/* Tech Robòtica · unitat 5 «Llum, so i LED» · animacions de teoria (TANI)
   Dibuixos propis: el Maqueen Lite V5 vist des de dalt (cos fosc amb vora daurada, rodes negres, micro:bit amb LEDs
   vermells, ultrasons blaus amb dos «ulls» platejats i els dos sensors de llum a les cantonades del davant), focus,
   gràfiques de llum i de temps. SVG + SMIL, en bucle. */
{
  // el Maqueen des de dalt, mirant amunt; mx = icona de la matriu (25 xifres 0/1); eyes = sensors de llum destacats
  const k5Top = (x, y, a = 0, s = 1, o = {}) => { const mx = o.mx || '0101011111111110111000100';
    return `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" ${o.extra || ''}>
    <ellipse cx="2" cy="5" rx="25" ry="26" fill="#0B1430" opacity=".18"/>
    ${o.under ? `<circle cx="0" cy="2" r="34" fill="${o.under}" opacity=".35"/>` : ''}
    <rect x="-28" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/><rect x="20" y="-6" width="8" height="24" rx="3" fill="#1B1D22"/>
    ${[0, 1, 2, 3].map(i => `<rect x="-28" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/><rect x="20" y="${-3 + i * 6}" width="8" height="1.6" fill="#3A3E48"/>`).join('')}
    <path d="M-18 23h36q4 0 4 -4v-29q0 -12 -12 -12h-20q-12 0 -12 12v29q0 4 4 4z" fill="#152238" stroke="#F2B21B" stroke-width="2.2"/>
    <rect x="-14" y="-31" width="28" height="9" rx="2.5" fill="#1F5FBF"/>
    <circle cx="-7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="-7" cy="-26.5" r="2.2" fill="#5A6070"/><circle cx="7" cy="-26.5" r="4.4" fill="#D7DCE6"/><circle cx="7" cy="-26.5" r="2.2" fill="#5A6070"/>
    <rect x="-14" y="-12" width="28" height="23" rx="3" fill="#121212"/><rect x="-14" y="8" width="28" height="3" fill="#C9A24A"/>
    ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${-8.6 + c * 3.6}" y="${-9.4 + r * 3.4}" width="1.8" height="1.8" fill="${mx[r * 5 + c] === '1' ? '#FF3B30' : '#3A2226'}"/>`).join('')).join('')}
    <circle cx="-16" cy="-19" r="${o.eyes ? 3.6 : 2.4}" fill="${o.eyes ? '#FFE27A' : '#9AA3B8'}" stroke="#6B5200" stroke-width="${o.eyes ? 1.2 : .6}"/>
    <circle cx="16" cy="-19" r="${o.eyes ? 3.6 : 2.4}" fill="${o.eyes ? '#FFE27A' : '#9AA3B8'}" stroke="#6B5200" stroke-width="${o.eyes ? 1.2 : .6}"/>
    ${o.car ? `<circle cx="-12" cy="-22" r="7" fill="${o.car}" opacity=".55"/><circle cx="12" cy="-22" r="7" fill="${o.car}" opacity=".55"/>` : ''}
    ${o.inner || ''}
  </g>`; };
  // un focus de llum amb el halo (de dalt)
  const k5Lamp = (x, y, r = 34, extra = '') => `<g transform="translate(${x} ${y})" ${extra}><circle r="${r}" fill="url(#k5halo)"/><circle r="9" fill="#FFD54A" stroke="#8A6A00" stroke-width="2"/><circle r="4" fill="#FFF6C8"/></g>`;
  const k5Defs = `<defs><radialGradient id="k5halo"><stop offset="0" stop-color="#FFE680" stop-opacity=".95"/><stop offset=".45" stop-color="#FFE680" stop-opacity=".45"/><stop offset="1" stop-color="#FFE680" stop-opacity="0"/></radialGradient>
    <linearGradient id="k5sky" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFE9A8"/><stop offset=".3" stop-color="#BFE3FF"/><stop offset=".55" stop-color="#2A3466"/><stop offset=".85" stop-color="#151B3D"/><stop offset="1" stop-color="#FFD9A8"/></linearGradient></defs>`;
  // estats discrets: l'element i de n es veu durant el seu tram (dur D)
  const k5On = (i, n, D) => { const a = i / n, b = (i + 1) / n;
    return i === 0 ? `<animate attributeName="opacity" values="1;0;0;1" keyTimes="0;${b.toFixed(3)};.999;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`
      : `<animate attributeName="opacity" values="0;1;0;0" keyTimes="0;${a.toFixed(3)};${b.toFixed(3)};1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`; };
  const k5Seq = (x, y, vals, D, cls = 'tat b', fill = '#14204A', anchor = 'middle') => vals.map((v, i) => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}" style="fill:${fill}" opacity="${i ? 0 : 1}">${k5On(i, vals.length, D)}${v}</text>`).join('');
  const k5Bubble = (x, y, w, lab, vals, D, col) => `<g><rect x="${x - w / 2}" y="${y - 17}" width="${w}" height="34" rx="10" fill="#fff" stroke="${col}" stroke-width="2.5"/><text x="${x}" y="${y - 3}" text-anchor="middle" class="tat s" style="fill:${col}">${lab}</text>${k5Seq(x, y + 13, vals, D, 'tat b', '#14204A')}</g>`;

  Object.assign(TANI, {
    // els dos sensors de llum: el focus passa d'un costat a l'altre i els números canvien
    k5eyes() {
      const D = 6;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#1A2147"/>
        ${[30, 80, 260, 290, 150].map((x, i) => `<circle cx="${x}" cy="${12 + (i * 7) % 20}" r="1.4" fill="#fff" opacity=".6"/>`).join('')}
        <g>${k5Lamp(0, 0, 40)}<animateTransform attributeName="transform" type="translate" values="70 46;70 46;160 40;160 40;250 46;250 46;160 40;160 40;70 46" keyTimes="0;.2;.25;.45;.5;.7;.75;.95;1" dur="${D}s" repeatCount="indefinite"/></g>
        ${k5Top(160, 150, 0, 1.45, { eyes: true })}
        <path d="M137 122l-26 -26" stroke="#FFE27A" stroke-width="2" stroke-dasharray="4 4" class="ta-dash"/><path d="M183 122l26 -26" stroke="#FFE27A" stroke-width="2" stroke-dasharray="4 4" class="ta-dash"/>
        ${k5Bubble(60, 150, 108, L('llum esquerra', 'luz izquierda'), ['620', '410', '180', '410'], D, '#E0A400')}
        ${k5Bubble(260, 150, 108, L('llum dreta', 'luz derecha'), ['180', '410', '620', '410'], D, '#E0A400')}
        <text x="160" y="206" text-anchor="middle" class="tat s" style="fill:#FFE9A8">${L('de 0 (fosc) a 1023 (molta llum)', 'de 0 (oscuro) a 1023 (mucha luz)')}</text>`);
    },
    // quanta llum: tres situacions i la barra de 0 a 1023
    k5meter() {
      const bar = (x, v, col, t, lab, ico) => { const h = Math.round(v / 1023 * 120); return `<g ${tA(t, 'ta-in')}>
        <rect x="${x - 24}" y="44" width="48" height="122" rx="9" fill="#EEF2FB" stroke="#D3DCF2" stroke-width="2"/>
        <rect x="${x - 21}" y="${165 - h}" width="42" height="${h}" rx="6" fill="${col}"><animate attributeName="height" values="0;${h};${h}" keyTimes="0;.18;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/><animate attributeName="y" values="165;${165 - h};${165 - h}" keyTimes="0;.18;1" dur="5.5s" begin="${t}s" repeatCount="indefinite"/></rect>
        <text x="${x}" y="${Math.min(160, 160 - h) - 6 < 50 ? 64 : 158 - h}" text-anchor="middle" class="tat b">${v}</text>
        <text x="${x}" y="30" text-anchor="middle" font-size="22">${ico}</text>
        <text x="${x}" y="188" text-anchor="middle" class="tat s">${lab}</text></g>`; };
      return tSvg(214, `${bar(64, 25, '#3B4A8C', .2, L('a les fosques', 'a oscuras'), '🌙')}${bar(160, 260, '#5FA8FF', 1.2, L("aula de dia", 'aula de día'), '☀️')}${bar(256, 900, '#FFC531', 2.2, L('focus a prop', 'foco cerca'), '🔦')}
        <text x="160" y="208" text-anchor="middle" class="tat s" style="fill:#5A6890" ${tA(3.2, 'ta-fade')}>${L('com més a prop i més de cara, més llum', 'cuanto más cerca y más de cara, más luz')}</text>`);
    },
    // comparar els dos sensors: el focus és a l'esquerra, el robot gira cap allà
    k5two() {
      const D = 5.5;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#1A2147"/>
        ${k5Lamp(70, 52, 52)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-18 -22;-34 -50;-34 -50" keyTimes="0;.2;.55;.85;1" dur="${D}s" repeatCount="indefinite"/>
          <g transform="translate(170 152)"><g><animateTransform attributeName="transform" type="rotate" values="0;0;-28;-38;-38" keyTimes="0;.2;.55;.85;1" dur="${D}s" repeatCount="indefinite"/>${k5Top(0, 0, 0, 1.2, { eyes: true })}</g></g></g>
        <g transform="translate(250 50)"><rect x="-58" y="-26" width="116" height="74" rx="12" fill="#fff"/>
          <text x="0" y="-6" text-anchor="middle" class="tat s">${L('esquerra', 'izquierda')} <tspan style="fill:#D08A00;font-weight:900">610</tspan></text>
          <text x="0" y="14" text-anchor="middle" class="tat s">${L('dreta', 'derecha')} <tspan style="fill:#5A6890;font-weight:900">210</tspan></text>
          <text x="0" y="36" text-anchor="middle" class="tat b" style="fill:#2F5BEA">E &gt; D → ↰</text></g>
        <text x="236" y="200" text-anchor="middle" class="tat s" style="fill:#FFE9A8" ${tA(1.4, 'ta-fade')}>${L("gira cap a l'esquerra", 'gira hacia la izquierda')}</text>`);
    },
    // quatre maneres d'avisar: llums del cotxe, so, matriu i llums de sota
    k5alarm() {
      const D = 1.2, blink = (a, b) => `<animate attributeName="fill" values="${a};${b};${a}" keyTimes="0;.5;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>`;
      const wave = i => `<path d="M0 -14q9 14 0 28" fill="none" stroke="#2F5BEA" stroke-width="3.5" stroke-linecap="round" opacity="0"><animateTransform attributeName="transform" type="translate" values="0 0;34 0" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="${i * .5}s" repeatCount="indefinite"/></path>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <circle cx="160" cy="108" r="50" fill="#FF3B30" opacity=".18"><animate attributeName="fill" values="#FF3B30;#2F7BFF;#FF3B30" keyTimes="0;.5;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></circle>
        ${k5Top(160, 112, 0, 1.35, { mx: '0101000000001000101000100', inner: `<circle cx="-12" cy="-22" r="6" fill="#FF3B30" opacity=".85">${blink('#FF3B30', '#2F7BFF')}</circle><circle cx="12" cy="-22" r="6" fill="#2F7BFF" opacity=".85">${blink('#2F7BFF', '#FF3B30')}</circle>` })}
        <g transform="translate(206 108)">${[0, 1, 2].map(wave).join('')}</g>
        ${tCard(2, 8, 172, 34, '', L('🚨 llums del cotxe', '🚨 luces del coche'), .2, '#EF5A5A')}${tCard(180, 8, 138, 34, '', L('🔊 brunzidor', '🔊 zumbador'), .9)}
        ${tCard(2, 172, 156, 34, '', L('😮 matriu de LEDs', '😮 matriz de LEDs'), 1.6)}${tCard(162, 172, 156, 34, '', L('💡 llums de sota', '💡 luces de abajo'), 2.3)}`);
    },
    // les notes tarden: una línia de temps amb notes de durades diferents i un capçal que avança
    k5beat() {
      const x0 = 22, px = 104; // 104 px = 1 s
      const blk = (s, d, lab, col, row) => `<g><rect x="${x0 + s * px}" y="${row}" width="${d * px - 4}" height="34" rx="9" fill="${col}"/><text x="${x0 + s * px + (d * px - 4) / 2}" y="${row + 22}" text-anchor="middle" class="tat s w">${lab}</text></g>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <text x="160" y="28" text-anchor="middle" class="tat b">${L('1 temps = 0,5 s', '1 tiempo = 0,5 s')}</text>
        ${blk(0, .5, L('do · 1', 'do · 1'), '#8B5CF6', 48)}${blk(.5, .25, '½', '#2F7BFF', 48)}${blk(.75, 1, L('sol · 2 temps', 'sol · 2 tiempos'), '#3CC47C', 48)}${blk(1.75, .5, L('mi · 1', 'mi · 1'), '#F08A24', 48)}
        ${blk(0, .4, '😊', '#EF5A5A', 96)}${blk(.4, .4, '♥', '#EF5A5A', 96)}<text x="${x0 + .8 * px + 8}" y="118" class="tat s">${L('← cada icona, 0,4 s', '← cada icono, 0,4 s')}</text>
        <path d="M${x0} 150H${x0 + 2.6 * px}" stroke="#14204A" stroke-width="2.5"/>${[0, 1, 2].map(s => `<path d="M${x0 + s * px} 144v12" stroke="#14204A" stroke-width="2.5"/><text x="${x0 + s * px}" y="174" text-anchor="middle" class="tat s">${s} s</text>`).join('')}
        <g><path d="M0 40V156" stroke="#FF3B30" stroke-width="3"/><circle cy="40" r="5" fill="#FF3B30"/><animateTransform attributeName="transform" type="translate" values="${x0} 0;${x0 + 2.5 * px} 0;${x0 + 2.5 * px} 0" keyTimes="0;.85;1" dur="5.5s" repeatCount="indefinite"/></g>
        <text x="160" y="202" text-anchor="middle" class="tat s" style="fill:#5A6890">${L("el bloc següent espera que s'acabi", 'el bloque siguiente espera a que termine')}</text>`);
    },
    // el fanal: la llum d'un dia sencer, el llindar 100 i el fanal que s'encén quan la corba hi passa per sota
    k5lamp() {
      const D = 6, W = 220, X = 20, path = `M${X} 120 C ${X + 30} 40, ${X + 70} 40, ${X + 95} 110 S ${X + 140} 176, ${X + 180} 176 S ${X + 205} 120, ${X + W} 70`;
      return tSvg(214, `${k5Defs}<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        <rect x="${X}" y="24" width="${W}" height="164" rx="8" fill="url(#k5sky)" opacity=".55"/>
        <path d="M${X} 150H${X + W}" stroke="#EF5A5A" stroke-width="2.5" stroke-dasharray="7 5"/><text x="${X + 6}" y="144" class="tat s" style="fill:#C62828">${L('llindar 100', 'umbral 100')}</text>
        <path d="${path}" fill="none" stroke="#14204A" stroke-width="4" stroke-linecap="round"/>
        <text x="${X + 50}" y="40" text-anchor="middle" font-size="18">☀️</text><text x="${X + 160}" y="58" text-anchor="middle" font-size="18">🌙</text>
        <circle r="7" fill="#FF3B30" stroke="#fff" stroke-width="2.5"><animateMotion path="${path}" dur="${D}s" repeatCount="indefinite"/></circle>
        <text x="${X + W / 2}" y="206" text-anchor="middle" class="tat s">${L('llum del sensor durant un dia', 'luz del sensor durante un día')}</text>
        <g transform="translate(282 30)"><rect x="-4" y="40" width="8" height="112" rx="3" fill="#3A4256"/><path d="M-26 40h52l-8 -22h-36z" fill="#3A4256"/>
          <ellipse cx="0" cy="48" rx="24" ry="10" fill="#9AA3B8" opacity=".5"><animate attributeName="fill" values="#9AA3B8;#9AA3B8;#FFE27A;#FFE27A;#9AA3B8" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;.5;1;1;.5" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></ellipse>
          <path d="M-30 58L-40 150H40L30 58z" fill="#FFE27A" opacity="0"><animate attributeName="opacity" values="0;0;.45;.45;0" keyTimes="0;.47;.48;.88;1" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/></path>
          ${[[L('apagat', 'apagada'), '1;0;0;1', '0;.48;.999;1'], [L('encès', 'encendida'), '0;1;0;0', '0;.48;.88;1'], [L('apagat', 'apagada'), '0;1;0;0', '0;.88;.999;1']].map(([v, vs, kt], i) => `<text y="174" text-anchor="middle" class="tat s" opacity="${i ? 0 : 1}"><animate attributeName="opacity" values="${vs}" keyTimes="${kt}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>${v}</text>`).join('')}</g>`);
    },
    // la taula del projecte: funció · sensor · condició · què fa
    k5plan() {
      const cols = [L('funció', 'función'), L('sensor', 'sensor'), L('condició', 'condición'), L('fa', 'hace')], cx = [55, 130, 206, 281];
      const rows = [[L('llum de nit', 'luz de noche'), '☀', L('llum &lt; 100', 'luz &lt; 100'), '💡'], [L('timbre', 'timbre'), 'A', L('prémer A', 'pulsar A'), '🔔'], [L('alarma', 'alarma'), '📏', 'dist &lt; 25', '🚨']];
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/><rect x="10" y="12" width="300" height="190" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <rect x="10" y="12" width="300" height="38" rx="14" fill="#2F5BEA"/>${cols.map((c, i) => `<text x="${cx[i]}" y="37" text-anchor="middle" class="tat s w">${c}</text>`).join('')}
        ${[100, 160, 252].map(x => `<path d="M${x} 50V202" stroke="#DCE4FA" stroke-width="2"/>`).join('')}
        ${rows.map((r, j) => `<g ${tA(.5 + j * 1.1, 'ta-in')}>${j ? `<path d="M10 ${50 + j * 50}H310" stroke="#DCE4FA" stroke-width="2"/>` : ''}${r.map((c, i) => `<text x="${cx[i]}" y="${82 + j * 50}" text-anchor="middle" class="${i === 0 ? 'tat s' : i === 2 ? 'tat s' : 'tat b'}" ${i === 1 && c === 'A' ? 'style="fill:#2F5BEA"' : ''}>${c}</text>`).join('')}</g>`).join('')}`);
    },
    // «i»: l'alarma només sona si és de nit I hi ha algú a prop (quatre casos, un darrere l'altre)
    k5and() {
      const D = 8, n = 4, cases = [[0, 0], [1, 0], [0, 1], [1, 1]];
      const lamp = (x, lab, k) => `<g transform="translate(${x} 70)"><rect x="-56" y="-44" width="112" height="96" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>
        <text x="0" y="-20" text-anchor="middle" class="tat s">${lab}</text>
        ${cases.map((c, i) => `<g opacity="${i ? 0 : 1}">${k5On(i, n, D)}<circle cy="14" r="18" fill="${c[k] ? '#3CC47C' : '#C9D1E6'}"/><text y="20" text-anchor="middle" class="tat b w">${c[k] ? L('SÍ', 'SÍ') : 'NO'}</text></g>`).join('')}</g>`;
      return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="16" fill="#F3F6FF"/>
        ${lamp(66, L('és de nit?', '¿es de noche?'), 0)}${lamp(254, L('algú a prop?', '¿alguien cerca?'), 1)}
        <circle cx="160" cy="84" r="22" fill="#2F5BEA"/><text x="160" y="90" text-anchor="middle" class="tat b w">${L('i', 'y')}</text>
        <path d="M122 84h16M182 84h16" stroke="#2F5BEA" stroke-width="4"/><path d="M160 106v22" stroke="#2F5BEA" stroke-width="4"/>
        ${cases.map((c, i) => { const on = c[0] && c[1]; return `<g opacity="${i ? 0 : 1}">${k5On(i, n, D)}<rect x="90" y="132" width="140" height="44" rx="14" fill="${on ? '#FF3B30' : '#E6EAF5'}"/><text x="160" y="160" text-anchor="middle" class="tat b" style="fill:${on ? '#fff' : '#7A86A8'}">${on ? L('🚨 ALARMA!', '🚨 ¡ALARMA!') : L('tot tranquil', 'todo tranquilo')}</text></g>`; }).join('')}
        <text x="160" y="202" text-anchor="middle" class="tat s" style="fill:#5A6890">${L('només si les dues són certes', 'solo si las dos son ciertas')}</text>`);
    }
  });
}
