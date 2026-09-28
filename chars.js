/* ===== Personatges de Mates amb Numi (SVG amb volum) ===== */
let LANG = 'ca';
const L = (ca, es) => LANG === 'es' ? es : ca;
const tx = v => Array.isArray(v) ? L(v[0], v[1]) : typeof v === 'string' && v.includes('|') ? L(...v.split('|')) : v;
const INK = '#2B1A38';

/* Degradats compartits: s'injecten un cop al document */
const LG = (id, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const RG = (id, a, b) => `<radialGradient id="${id}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
${RG('gNumiHead', '#B98AE0', '#7B3FA0')}${LG('gNumiBody', '#8A4FB0', '#4E1D68')}${RG('gScreen', '#3E2A57', '#150B22')}
${RG('gFox', '#FFB070', '#EE6F1E')}${LG('gFoxTail', '#FF9A4A', '#E0621A')}${RG('gOct', '#FFB3CF', '#EE5C93')}${LG('gTent', '#FF8FB8', '#E24F86')}
${RG('gShell', '#6FD69A', '#23884C')}${RG('gTurtle', '#D2F5CC', '#86CC80')}${RG('gDragon', '#FF9A9D', '#E23C43')}${LG('gWing', '#FFD0CC', '#FF8F95')}
${RG('gStarB', '#FFF3B0', '#FFB915')}${RG('gGold', '#FFE680', '#E8A400')}${RG('gGlow', 'rgba(255,220,90,.9)', 'rgba(255,220,90,0)')}
${LG('gBlue', '#6CC6F5', '#1E86BE')}${LG('gGreen', '#6EDB94', '#27A55A')}${LG('gOrange', '#FFC07A', '#F07F22')}${LG('gYellow', '#FFE070', '#F5B400', 0, 1)}
${LG('gRuler', '#FFF6D2', '#FFE49A')}${LG('gRed', '#FF7A7E', '#E0343B', 1, 0)}${LG('gTeal', '#7FE3D2', '#27B59E')}
${LG('gFlame', '#FFD23F', '#FF5A1F')}${RG('gArmor', '#F1F4F7', '#8E99A6')}${LG('gArmorD', '#C9D1D9', '#6E7A87')}${LG('gCapeT', '#2F8FA6', '#155A6E')}${LG('gPlume', '#FF7A8A', '#D9304A')}${RG('gAura1', 'rgba(95,240,208,.55)', 'rgba(95,240,208,0)')}${RG('gAura2', 'rgba(255,201,60,.65)', 'rgba(255,201,60,0)')}${RG('gAura3', 'rgba(255,122,168,.6)', 'rgba(138,79,176,0)')}${LG('gGem', '#8FE3FF', '#1C8FE0')}${LG('gCape', '#FF6B6B', '#C92A3A')}
</defs></svg>`;

function eyes(x1, x2, y, mood, col = INK) {
  const arc = x => `<path d="M${x - 5.5} ${y + 2} Q${x} ${y - 6} ${x + 5.5} ${y + 2}" stroke="${col}" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
  if (mood === 'happy') return arc(x1) + arc(x2);
  const dot = x => `<g class="eye"><ellipse cx="${x}" cy="${y}" rx="5.4" ry="6.2" fill="${col}"/><circle cx="${x + 1.9}" cy="${y - 2.3}" r="2" fill="#fff"/><circle cx="${x - 1.6}" cy="${y + 2.4}" r=".9" fill="#fff" opacity=".7"/></g>`;
  let s = dot(x1) + dot(x2);
  if (mood === 'sad') s += `<path d="M${x1 - 6} ${y - 8} L${x1 + 4} ${y - 12}" stroke="${col}" stroke-width="3" stroke-linecap="round"/><path d="M${x2 + 6} ${y - 8} L${x2 - 4} ${y - 12}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`;
  if (mood === 'think') s += `<path d="M${x2 - 6} ${y - 10} Q${x2} ${y - 15} ${x2 + 6} ${y - 11}" stroke="${col}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return s;
}
function mouth(x, y, mood, col = INK) {
  if (mood === 'happy') return `<path d="M${x - 9} ${y - 1} Q${x} ${y + 13} ${x + 9} ${y - 1} Z" fill="${col}"/><ellipse cx="${x}" cy="${y + 4.2}" rx="4" ry="2.2" fill="#FF7A8A"/>`;
  if (mood === 'sad') return `<path d="M${x - 6} ${y + 5} Q${x} ${y - 1} ${x + 6} ${y + 5}" stroke="${col}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
  if (mood === 'think') return `<ellipse cx="${x + 2}" cy="${y + 3}" rx="3.2" ry="3.8" fill="${col}"/>`;
  return `<path d="M${x - 7} ${y + 1} Q${x} ${y + 8} ${x + 7} ${y + 1}" stroke="${col}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
}
const blush = (x1, x2, y, c = '#FF7AA8', o = .45) => `<ellipse cx="${x1}" cy="${y}" rx="5.5" ry="3.2" fill="${c}" opacity="${o}"/><ellipse cx="${x2}" cy="${y}" rx="5.5" ry="3.2" fill="${c}" opacity="${o}"/>`;
const shine = (d, o = .35) => `<path d="${d}" fill="#fff" opacity="${o}"/>`;
const ground = (rx = 30) => `<ellipse cx="60" cy="114" rx="${rx}" ry="4.5" fill="${INK}" opacity=".12"/>`;
const star = (cx, cy, r, fill) => {
  let d = '';
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1); }
  return `<path d="${d}Z" fill="${fill}"/>`;
};

const CH = {
  numi: {
    name: 'Numi', price: 0, desc: ['Un robot que ho compta tot. És el guia del camí.', 'Un robot que lo cuenta todo. Es el guía del camino.'], hello: ['Som-hi! Pas a pas, arribarem molt lluny.', '¡Vamos! Paso a paso, llegaremos muy lejos.'],
    a: { hx: 60, hy: 21, ey: 45, eg: 11, ny: 77, hw: 39 },
    draw: m => `${ground(28)}
      <line x1="60" y1="22" x2="60" y2="9" stroke="#4A2060" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="60" cy="8" r="11" fill="url(#gGlow)" class="glow"/><circle cx="60" cy="8" r="5.5" fill="url(#gGold)"/><circle cx="58" cy="6" r="1.8" fill="#fff" opacity=".8"/>
      <rect x="26" y="80" width="13" height="21" rx="6.5" fill="url(#gNumiBody)"/><rect x="81" y="80" width="13" height="21" rx="6.5" fill="url(#gNumiBody)"/>
      <circle cx="32.5" cy="102" r="5" fill="#4A2060"/><circle cx="87.5" cy="102" r="5" fill="#4A2060"/>
      <rect x="36" y="74" width="48" height="37" rx="15" fill="url(#gNumiBody)"/>${shine('M42 80 q6 -3 14 -2 q-9 3 -12 11 z', .25)}
      <circle cx="60" cy="93" r="9" fill="url(#gGold)"/><path d="M55 93h10M60 88v10" stroke="#6B3A00" stroke-width="2.6" stroke-linecap="round"/>
      <rect x="13" y="37" width="13" height="22" rx="5" fill="#4A2060"/><rect x="94" y="37" width="13" height="22" rx="5" fill="#4A2060"/>
      <circle cx="19.5" cy="48" r="2.4" fill="#B98AE0"/><circle cx="100.5" cy="48" r="2.4" fill="#B98AE0"/>
      <rect x="21" y="19" width="78" height="60" rx="21" fill="url(#gNumiHead)"/>
      ${shine('M30 30 q10 -9 30 -8 q-22 4 -26 16 z', .4)}
      <rect x="30" y="28.5" width="60" height="42" rx="14" fill="url(#gScreen)"/><rect x="30" y="28.5" width="60" height="42" rx="14" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="1.5"/>
      <path d="M36 34 q10 -3 20 -2" stroke="#fff" stroke-width="2.5" opacity=".15" stroke-linecap="round" fill="none"/>
      ${blush(40, 80, 55, '#FF7AA8', .55)}${eyes(49, 71, 45, m, '#5FF0D0')}${mouth(60, 56, m, '#5FF0D0')}`
  },
  guida: {
    name: 'Guida', price: 60, desc: ['Una guineu molt espavilada. La reina de la lògica.', 'Una zorra muy espabilada. La reina de la lógica.'], hello: ['Amb una mica de lògica, tot té solució!', '¡Con un poco de lógica, todo tiene solución!'],
    a: { hx: 60, hy: 27, ey: 50, eg: 14, ny: 84, hw: 36 },
    draw: m => `${ground(30)}
      <path d="M82 104 Q118 98 107 64 Q101 86 79 88Z" fill="url(#gFoxTail)"/><path d="M107 64 Q112 77 104 86 Q99 76 107 64Z" fill="#FFF3E6"/>
      <ellipse cx="60" cy="99" rx="24" ry="17" fill="url(#gFox)"/><ellipse cx="60" cy="102" rx="13" ry="12" fill="#FFF3E6"/>
      <ellipse cx="49" cy="113" rx="7" ry="4" fill="#7A3A1A"/><ellipse cx="71" cy="113" rx="7" ry="4" fill="#7A3A1A"/>
      <path d="M27 45 L33 8 L57 30Z" fill="url(#gFox)"/><path d="M33 36 L36 17 L48 30Z" fill="#7A3A1A" opacity=".75"/>
      <path d="M93 45 L87 8 L63 30Z" fill="url(#gFox)"/><path d="M87 36 L84 17 L72 30Z" fill="#7A3A1A" opacity=".75"/>
      <ellipse cx="60" cy="54" rx="36" ry="29" fill="url(#gFox)"/>${shine('M33 42 q8 -13 26 -15 q-17 6 -22 19 z', .35)}
      <path d="M25 57 Q38 85 60 85 Q82 85 95 57 Q78 67 60 61 Q42 67 25 57Z" fill="#FFF3E6"/>
      ${eyes(46, 74, 50, m)}<ellipse cx="60" cy="63" rx="5.2" ry="4" fill="${INK}"/><ellipse cx="58.5" cy="61.8" rx="1.6" ry="1" fill="#fff" opacity=".6"/>
      ${blush(38, 82, 64)}${mouth(60, 69, m)}`
  },
  vuit: {
    name: 'Vuit', price: 100, desc: ['Un pop amb vuit braços per multiplicar més de pressa.', 'Un pulpo con ocho brazos para multiplicar más rápido.'], hello: ['Vuit braços, vuit vegades més ràpid!', '¡Ocho brazos, ocho veces más rápido!'],
    a: { hx: 60, hy: 17, ey: 52, eg: 13, ny: 84, hw: 38 },
    draw: m => {
      let t = '';
      for (let i = 0; i < 8; i++) {
        const x = 25 + i * 10, w = i % 2 ? 7 : -7;
        t += `<path class="tent" d="M${x} 70 C${x - w} 84 ${x + w} 96 ${x} 110" stroke="url(#gTent)" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="${x + w * .3}" cy="98" r="1.6" fill="#FFD2E3"/>`;
      }
      return `${ground(34)}${t}
      <ellipse cx="60" cy="50" rx="38" ry="34" fill="url(#gOct)"/>${shine('M32 36 q10 -18 32 -19 q-22 8 -27 24 z', .4)}
      <circle cx="40" cy="30" r="5" fill="#FFC3DA"/><circle cx="80" cy="26" r="4" fill="#FFC3DA"/><circle cx="89" cy="45" r="3" fill="#FFC3DA"/>
      ${eyes(47, 73, 52, m)}${blush(37, 83, 63, '#E0407E', .4)}${mouth(60, 65, m)}`;
    }
  },
  tuga: {
    name: 'Tuga', price: 150, desc: ['Una tortuga pacient que ho mesura tot.', 'Una tortuga paciente que lo mide todo.'], hello: ["Pas a pas s'arriba lluny.", 'Paso a paso se llega lejos.'],
    a: { hx: 60, hy: 16, ey: 40, eg: 10, ny: 66, hw: 27 },
    draw: m => `${ground(44)}
      <ellipse cx="30" cy="105" rx="11" ry="7" fill="url(#gTurtle)"/><ellipse cx="90" cy="105" rx="11" ry="7" fill="url(#gTurtle)"/>
      <path d="M14 102 Q16 58 60 56 Q104 58 106 102Z" fill="url(#gShell)"/>
      <path d="M44 74 L60 66 L76 74 L76 90 L60 98 L44 90Z" fill="#6FD69A" stroke="#1E7A44" stroke-width="2.5"/>
      <path d="M44 74 L28 70 M76 74 L92 70 M44 90 L25 98 M76 90 L95 98 M60 66 L60 57" stroke="#1E7A44" stroke-width="2.5"/>
      ${shine('M24 86 q4 -20 24 -26 q-14 10 -18 28 z', .3)}
      <rect x="10" y="97" width="100" height="10" rx="5" fill="#1E7A44"/>
      <circle cx="60" cy="42" r="26" fill="url(#gTurtle)"/>${shine('M40 32 q8 -12 22 -11 q-15 4 -18 14 z', .5)}
      ${eyes(50, 70, 40, m)}${blush(42, 78, 50)}${mouth(60, 51, m)}`
  },
  flama: {
    name: 'Flama', price: 250, desc: ["Un drac petit que s'encén amb les ratxes.", 'Un dragón pequeño que se enciende con las rachas.'], hello: ['Encenem aquesta ratxa!', '¡Encendamos esta racha!'],
    a: { hx: 60, hy: 24, ey: 48, eg: 14, ny: 82, hw: 34 },
    draw: m => `${ground(30)}
      <path d="M31 72 Q4 54 9 28 Q22 43 36 50Z" fill="url(#gWing)"/><path d="M89 72 Q116 54 111 28 Q98 43 84 50Z" fill="url(#gWing)"/>
      <path d="M17 38 L30 52 M103 38 L90 52" stroke="#FF8F95" stroke-width="2"/>
      <path d="M80 104 Q104 108 108 92" stroke="#E23C43" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M104 94 Q108 80 116 88 Q112 96 104 94Z" fill="url(#gFlame)"/>
      <ellipse cx="60" cy="97" rx="26" ry="18" fill="url(#gDragon)"/><ellipse cx="60" cy="100" rx="15" ry="12" fill="#FFD9A8"/>
      <path d="M52 94h16M52 100h16M53 106h14" stroke="#F0B878" stroke-width="1.5"/>
      <path d="M40 32 L34 11 L51 27Z" fill="url(#gGold)"/><path d="M80 32 L86 11 L69 27Z" fill="url(#gGold)"/>
      <ellipse cx="60" cy="53" rx="34" ry="28" fill="url(#gDragon)"/>${shine('M36 40 q9 -13 25 -14 q-17 5 -21 17 z', .35)}
      <path d="M53 27 L60 16 L67 27Z" fill="#C92A3A"/>
      <ellipse cx="60" cy="66" rx="17" ry="10" fill="#FF8286"/>
      <circle cx="54" cy="63" r="1.9" fill="${INK}"/><circle cx="66" cy="63" r="1.9" fill="${INK}"/>
      ${eyes(46, 74, 48, m)}${mouth(60, 69, m)}`
  },
  estel: {
    name: 'Estel', price: null, unlock: ['Ratxa de 30 dies', 'Racha de 30 días'], desc: ['Una estrella que només apareix a qui practica cada dia.', 'Una estrella que solo aparece a quien practica cada día.'], hello: ['Has brillat 30 dies seguits! Ara brillem juntes.', '¡Has brillado 30 días seguidos! Ahora brillamos juntas.'],
    a: { hx: 60, hy: 16, ey: 56, eg: 12, ny: 80, hw: 30 },
    draw: m => {
      let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 24 : 50; d += (i ? 'L' : 'M') + (60 + r * Math.cos(a)).toFixed(1) + ' ' + (62 + r * Math.sin(a)).toFixed(1); }
      return `${ground(30)}
      <g class="twinkle">${star(14, 22, 5, '#FFD23F')}${star(106, 30, 4, '#FFD23F')}${star(100, 100, 3.5, '#FFE680')}</g>
      <path d="${d}Z" fill="url(#gStarB)" stroke="#F0A800" stroke-width="3" stroke-linejoin="round"/>
      ${shine('M44 44 q6 -16 16 -30 q-4 18 -10 32 z', .45)}
      ${eyes(48, 72, 56, m)}${blush(40, 80, 66, '#FF8A5C', .5)}${mouth(60, 67, m)}`;
    }
  },
  cavaller: {
    name: ['Cavaller del Codi', 'Caballero del Código'], price: null, unlock: ['Supera 3 unitats', 'Supera 3 unidades'],
    desc: ['El cavaller de la lògica. Diu que tot problema es venç pas a pas.', 'El caballero de la lógica. Dice que todo problema se vence paso a paso.'],
    hello: ['Per la lògica i el codi: endavant!', '¡Por la lógica y el código: adelante!'],
    a: { hx: 60, hy: 22, ey: 50, eg: 10, ny: 80, hw: 28 },
    draw: m => `${ground(28)}
      <path d="M44 72 Q20 84 14 112 Q34 104 50 108 Q56 92 58 76Z" fill="url(#gCapeT)"/><path d="M40 80 Q26 92 22 106" stroke="rgba(255,255,255,.18)" stroke-width="3" fill="none"/>
      <rect x="45" y="96" width="12" height="16" rx="5" fill="url(#gArmorD)"/><rect x="63" y="96" width="12" height="16" rx="5" fill="url(#gArmorD)"/>
      <ellipse cx="50" cy="112" rx="9" ry="4.5" fill="#6E7A87"/><ellipse cx="70" cy="112" rx="9" ry="4.5" fill="#6E7A87"/>
      <rect x="40" y="72" width="40" height="30" rx="12" fill="url(#gArmor)"/>
      <rect x="40" y="90" width="40" height="6" fill="#7A4A2A"/><rect x="57" y="89" width="7" height="8" rx="1.5" fill="url(#gGold)"/>
      <path d="M50 78 L60 84 L70 78" stroke="#9AA5B1" stroke-width="2" fill="none"/>
      <circle cx="37" cy="84" r="8" fill="url(#gArmorD)"/><circle cx="83" cy="84" r="8" fill="url(#gArmorD)"/>
      <path d="M58 20 Q56 4 76 2 Q88 2 94 10 Q82 6 74 12 Q68 18 66 24Z" fill="url(#gPlume)"/>
      <path d="M31 50 Q31 20 60 20 Q89 20 89 50 L89 60 Q89 74 60 74 Q31 74 31 60Z" fill="url(#gArmor)"/>
      ${shine('M38 38 q6 -14 22 -15 q-15 6 -18 18 z', .55)}
      <rect x="36" y="42" width="48" height="16" rx="8" fill="#1C2430"/>
      <path d="M60 22 L60 42" stroke="#AEB8C3" stroke-width="3"/>
      <circle cx="42" cy="66" r="1.8" fill="#8E99A6"/><circle cx="78" cy="66" r="1.8" fill="#8E99A6"/>
      ${eyes(50, 70, 50, m, '#7FE8FF')}
      <path d="M52 66 q8 ${m === 'sad' ? -3 : 4} 16 0" stroke="#6E7A87" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
  }
};

const ACC = {
  llacet: { slot: 'neck', name: ['Llacet', 'Pajarita'], price: 30,
    draw: a => `<path d="M${a.hx} ${a.ny} L${a.hx - 15} ${a.ny - 8} L${a.hx - 15} ${a.ny + 8}Z" fill="#FF5A5F"/><path d="M${a.hx} ${a.ny} L${a.hx + 15} ${a.ny - 8} L${a.hx + 15} ${a.ny + 8}Z" fill="#FF5A5F"/><path d="M${a.hx - 13} ${a.ny - 5} L${a.hx - 5} ${a.ny - 1}" stroke="#fff" stroke-width="1.5" opacity=".5"/><circle cx="${a.hx}" cy="${a.ny}" r="4.5" fill="#D63C42"/>` },
  gorra: { slot: 'head', name: ['Gorra', 'Gorra'], price: 40,
    draw: a => `<path d="M${a.hx - 27} ${a.hy + 9} Q${a.hx - 26} ${a.hy - 20} ${a.hx} ${a.hy - 21} Q${a.hx + 26} ${a.hy - 20} ${a.hx + 27} ${a.hy + 9}Z" fill="url(#gBlue)"/><path d="M${a.hx + 6} ${a.hy + 9} Q${a.hx + 40} ${a.hy + 3} ${a.hx + 44} ${a.hy + 11} L${a.hx + 6} ${a.hy + 13}Z" fill="#1E7FB0"/><circle cx="${a.hx}" cy="${a.hy - 20}" r="3.5" fill="#1E7FB0"/><path d="M${a.hx - 16} ${a.hy - 8} Q${a.hx - 8} ${a.hy - 16} ${a.hx + 2} ${a.hy - 16}" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45" fill="none"/>` },
  ulleres: { slot: 'eyes', name: ['Ulleres', 'Gafas'], price: 50,
    draw: a => { const r = Math.max(8, a.eg * .75); return `<circle cx="${a.hx - a.eg}" cy="${a.ey}" r="${r}" fill="rgba(180,230,255,.28)" stroke="${INK}" stroke-width="3"/><circle cx="${a.hx + a.eg}" cy="${a.ey}" r="${r}" fill="rgba(180,230,255,.28)" stroke="${INK}" stroke-width="3"/><path d="M${a.hx - a.eg + r} ${a.ey - 1} Q${a.hx} ${a.ey - 6} ${a.hx + a.eg - r} ${a.ey - 1}" stroke="${INK}" stroke-width="3" fill="none"/><path d="M${a.hx - a.eg - 4} ${a.ey - 4} l4 -3" stroke="#fff" stroke-width="2" opacity=".8"/>`; } },
  barret: { slot: 'head', name: ['Barret de mag', 'Sombrero de mago'], price: 120,
    draw: a => `<path d="M${a.hx - 20} ${a.hy + 4} L${a.hx + 8} ${a.hy - 40} L${a.hx + 22} ${a.hy + 4}Z" fill="#3A2A8C"/><path d="M${a.hx - 12} ${a.hy + 2} L${a.hx + 4} ${a.hy - 30}" stroke="#5A48B8" stroke-width="4" stroke-linecap="round"/><ellipse cx="${a.hx}" cy="${a.hy + 5}" rx="31" ry="7" fill="#2A1D6B"/>${star(a.hx + 2, a.hy - 12, 6, '#FFC93C')}${star(a.hx + 9, a.hy - 27, 3.5, '#FFC93C')}` },
  corona: { slot: 'head', name: ['Corona', 'Corona'], price: 200,
    draw: a => `<path d="M${a.hx - 22} ${a.hy + 7} L${a.hx - 25} ${a.hy - 15} L${a.hx - 11} ${a.hy - 4} L${a.hx} ${a.hy - 20} L${a.hx + 11} ${a.hy - 4} L${a.hx + 25} ${a.hy - 15} L${a.hx + 22} ${a.hy + 7}Z" fill="url(#gGold)" stroke="#E0A300" stroke-width="2.5" stroke-linejoin="round"/><circle cx="${a.hx}" cy="${a.hy - 2}" r="3.5" fill="#FF5A5F"/><circle cx="${a.hx - 13}" cy="${a.hy + 1}" r="2.6" fill="#36A9E1"/><circle cx="${a.hx + 13}" cy="${a.hy + 1}" r="2.6" fill="#3CC46A"/>` },
  medalla: { slot: 'neck', name: ['Medalla de foc', 'Medalla de fuego'], price: null, unlock: ['Ratxa de 7 dies', 'Racha de 7 días'],
    draw: a => `<path d="M${a.hx - 11} ${a.ny - 9} L${a.hx - 3} ${a.ny + 6} M${a.hx + 11} ${a.ny - 9} L${a.hx + 3} ${a.ny + 6}" stroke="#FF5A5F" stroke-width="5" stroke-linecap="round"/><circle cx="${a.hx}" cy="${a.ny + 11}" r="9" fill="url(#gGold)" stroke="#E0A300" stroke-width="2"/><path d="M${a.hx} ${a.ny + 5} q5 5 0 11 q-5 -4 0 -11z" fill="url(#gFlame)"/>` },
  auriculars: { slot: 'head', name: ['Auriculars', 'Auriculares'], price: null, unlock: ['Ratxa de 14 dies', 'Racha de 14 días'],
    draw: a => `<path d="M${a.hx - a.hw} ${a.ey} Q${a.hx - a.hw} ${a.hy - 14} ${a.hx} ${a.hy - 14} Q${a.hx + a.hw} ${a.hy - 14} ${a.hx + a.hw} ${a.ey}" stroke="#2B1A38" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="${a.hx - a.hw - 8}" y="${a.ey - 12}" width="14" height="24" rx="7" fill="url(#gRed)"/><rect x="${a.hx + a.hw - 6}" y="${a.ey - 12}" width="14" height="24" rx="7" fill="url(#gRed)"/>` },
  coronafoc: { slot: 'head', name: ['Corona de foc', 'Corona de fuego'], price: null, unlock: ['Ratxa de 60 dies', 'Racha de 60 días'],
    draw: a => `<path d="M${a.hx - 22} ${a.hy + 7} L${a.hx - 25} ${a.hy - 15} L${a.hx - 11} ${a.hy - 4} L${a.hx} ${a.hy - 22} L${a.hx + 11} ${a.hy - 4} L${a.hx + 25} ${a.hy - 15} L${a.hx + 22} ${a.hy + 7}Z" fill="url(#gFlame)" stroke="#E0431A" stroke-width="2.5" stroke-linejoin="round"/><path d="M${a.hx} ${a.hy - 8} q6 6 0 13 q-6 -6 0 -13z" fill="#FFF3B0"/>` }
};

/* Nivells dels personatges: l'XP guanyada amb cada company el fa créixer */
const CLV = [0, 60, 180, 400, 800];
const charLvl = xp => CLV.filter(t => (xp || 0) >= t).length;
function lvlDeco(lv, front) {
  if (lv < 2) return '';
  if (!front) {
    const g = lv >= 5 ? 'gAura3' : lv >= 4 ? 'gAura2' : 'gAura1';
    return lv >= 3 ? `<circle class="aura" cx="60" cy="64" r="${46 + lv * 2}" fill="url(#${g})"/>` : '';
  }
  let s = '';
  if (lv >= 2) s += `<g class="lvstar">${star(98, 104, 9, lv >= 5 ? '#FF7AA8' : lv >= 4 ? '#FFC93C' : '#5FF0D0')}<text x="98" y="107.5" text-anchor="middle" font-size="9" font-weight="900" fill="#2B1A38" font-family="Lexend,sans-serif">${lv}</text></g>`;
  if (lv >= 4) s += `<g class="twinkle">${star(16, 40, 4, '#FFD23F')}${star(104, 28, 3.5, '#FFD23F')}${star(12, 84, 3, '#FFE680')}</g>`;
  return s;
}
function charSVG(id, mood = 'idle', acc, cls = '', lv = 1) {
  const c = CH[id] || CH.numi;
  let s = `<svg class="char m-${mood} ${cls}" viewBox="0 0 120 120" aria-hidden="true">${lvlDeco(lv, false)}<g class="cb">${c.draw(mood)}`;
  if (acc) ['neck', 'eyes', 'head'].forEach(sl => { const k = acc[sl]; if (k && ACC[k]) s += ACC[k].draw(c.a); });
  return s + `</g>${lvlDeco(lv, true)}</svg>`;
}

/* Icones (camí, xips) */
const ICON = {
  star: '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" fill="#fff"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="#B3A6C0"/><path d="M8 10.5V8a4 4 0 018 0v2.5" stroke="#B3A6C0" stroke-width="2.6" fill="none"/><circle cx="12" cy="15.3" r="1.6" fill="#E6E0EC"/></svg>',
  crown: '<svg viewBox="0 0 24 24"><path d="M3.5 17.5L2.5 7l5.2 4.2L12 4l4.3 7.2L21.5 7l-1 10.5z" fill="#fff"/><rect x="3.5" y="18.5" width="17" height="2.5" rx="1.2" fill="#fff"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M7 3h10v5a5 5 0 01-10 0z" fill="#fff"/><path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" stroke="#fff" stroke-width="2" fill="none"/><rect x="10.5" y="12" width="3" height="5" fill="#fff"/><rect x="7" y="17" width="10" height="3.5" rx="1.2" fill="#fff"/></svg>',
  gift: '<svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="4" rx="1" fill="#fff"/><rect x="4.5" y="13" width="15" height="8" rx="1" fill="#fff" opacity=".9"/><rect x="10.8" y="9" width="2.4" height="12" fill="rgba(0,0,0,.18)"/><path d="M12 9c-2-4-6-4-6-1.5S10 9 12 9zm0 0c2-4 6-4 6-1.5S14 9 12 9z" fill="#fff"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 2c1 4 6 6 6 12a6 6 0 01-12 0c0-3 1.5-5 3-6 0 2 1 3 2 3-1-3 0-6 1-9z" fill="url(#gFlame)"/><path d="M12 13c1 2 3 3 3 5a3 3 0 01-6 0c0-1.5 1-2.5 2-3 0 1 .5 1.5 1 1.5-.5-1.5-.5-2.5 0-3.5z" fill="#FFF3B0"/></svg>',
  gem: '<svg viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9z" fill="url(#gGem)"/><path d="M2 9h20M8.5 3L7 9l5 12 5-12-1.5-6" stroke="#fff" stroke-width="1.2" fill="none" opacity=".6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="url(#gGold)"/><path d="M13 4l-6 9h4l-1 7 6-9h-4z" fill="#fff"/></svg>'
};
