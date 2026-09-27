/* ===== Personatges de Mates amb Numi (SVG amb volum) ===== */
let LANG = 'ca';
const L = (ca, es) => LANG === 'es' ? es : ca;
const tx = v => Array.isArray(v) ? L(v[0], v[1]) : typeof v === 'string' && v.includes('|') ? L(...v.split('|')) : v;
const INK = '#2B1A38';

/* Degradats compartits: s'injecten un cop al document */
const LG = (id, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const RG = (id, a, b) => `<radialGradient id="${id}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
${RG('gNumiHead', '#8FB0E8', '#3B5BAE')}${LG('gNumiBody', '#4F6FC0', '#233F86')}${RG('gScreen', '#27324D', '#0F1526')}
${RG('gFox', '#FFB070', '#EE6F1E')}${LG('gFoxTail', '#FF9A4A', '#E0621A')}${RG('gOct', '#FFB3CF', '#EE5C93')}${LG('gTent', '#FF8FB8', '#E24F86')}
${RG('gShell', '#6FD69A', '#23884C')}${RG('gTurtle', '#D2F5CC', '#86CC80')}${RG('gDragon', '#FF9A9D', '#E23C43')}${LG('gWing', '#FFD0CC', '#FF8F95')}
${RG('gStarB', '#FFF3B0', '#FFB915')}${RG('gGold', '#FFE680', '#E8A400')}${RG('gGlow', 'rgba(255,220,90,.9)', 'rgba(255,220,90,0)')}
${LG('gBlue', '#6CC6F5', '#1E86BE')}${LG('gGreen', '#6EDB94', '#27A55A')}${LG('gOrange', '#FFC07A', '#F07F22')}${LG('gYellow', '#FFE070', '#F5B400', 0, 1)}
${LG('gRuler', '#FFF6D2', '#FFE49A')}${LG('gRed', '#FF7A7E', '#E0343B', 1, 0)}${LG('gTeal', '#7FE3D2', '#27B59E')}
${LG('gFlame', '#FFD23F', '#FF5A1F')}${RG('gBrass', '#F6DC9A', '#C38A2E')}${LG('gTabard', '#EE8A66', '#CC5236')}${LG('gShield', '#3E63B8', '#22397A')}${RG('gAura1', 'rgba(38,166,154,.4)', 'rgba(38,166,154,0)')}${RG('gAura2', 'rgba(240,180,41,.5)', 'rgba(240,180,41,0)')}${RG('gAura3', 'rgba(232,100,60,.45)', 'rgba(232,100,60,0)')}
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
    name: 'Numi', price: 0, desc: ['Un robot que ho compta tot. És el guia del camí.', 'Un robot que lo cuenta todo. Es el guía del camino.'], hello: ['Farem el camí junts, una lliçó cada vegada.', 'Haremos el camino juntos, una lección cada vez.'],
    a: { hx: 60, hy: 21, ey: 45, eg: 11, ny: 77, hw: 39 },
    draw: m => `${ground(28)}
      <line x1="60" y1="22" x2="60" y2="9" stroke="#1C2F66" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="60" cy="8" r="5.5" fill="#E8643C"/><circle cx="58.2" cy="6.2" r="1.7" fill="#fff" opacity=".7"/>
      <rect x="26" y="80" width="13" height="21" rx="6.5" fill="url(#gNumiBody)"/><rect x="81" y="80" width="13" height="21" rx="6.5" fill="url(#gNumiBody)"/>
      <circle cx="32.5" cy="102" r="5" fill="#1C2F66"/><circle cx="87.5" cy="102" r="5" fill="#1C2F66"/>
      <rect x="36" y="74" width="48" height="37" rx="15" fill="url(#gNumiBody)"/>${shine('M42 80 q6 -3 14 -2 q-9 3 -12 11 z', .2)}
      <circle cx="60" cy="93" r="8.5" fill="#F0B429"/><path d="M55.5 93h9M60 88.5v9" stroke="#7A5200" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="13" y="37" width="13" height="22" rx="5" fill="#1C2F66"/><rect x="94" y="37" width="13" height="22" rx="5" fill="#1C2F66"/>
      <circle cx="19.5" cy="48" r="2.4" fill="#8FB0E8"/><circle cx="100.5" cy="48" r="2.4" fill="#8FB0E8"/>
      <rect x="21" y="19" width="78" height="60" rx="21" fill="url(#gNumiHead)"/>
      ${shine('M30 30 q10 -9 30 -8 q-22 4 -26 16 z', .3)}
      <rect x="30" y="28.5" width="60" height="42" rx="14" fill="url(#gScreen)"/>
      <path d="M36 34 q10 -3 20 -2" stroke="#fff" stroke-width="2.5" opacity=".12" stroke-linecap="round" fill="none"/>
      ${blush(40, 80, 55, '#E8643C', .45)}${eyes(49, 71, 45, m, '#FFD27A')}${mouth(60, 56, m, '#FFD27A')}`
  },
  guida: {
    name: 'Guida', price: 60, desc: ['Una guineu espavilada a qui agraden els enigmes.', 'Una zorra espabilada a la que le gustan los enigmas.'], hello: ["Si t'encalles, ho pensem amb calma.", 'Si te atascas, lo pensamos con calma.'],
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
    name: 'Vuit', price: 100, desc: ['Un pop amb vuit braços per multiplicar més de pressa.', 'Un pulpo con ocho brazos para multiplicar más rápido.'], hello: ['Tinc vuit braços. Els comptem?', 'Tengo ocho brazos. ¿Los contamos?'],
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
    name: 'Flama', price: 250, desc: ["Un drac petit que s'encén amb les ratxes.", 'Un dragón pequeño que se enciende con las rachas.'], hello: ["Una mica cada dia, i la flama no s'apaga.", 'Un poco cada día, y la llama no se apaga.'],
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
    name: 'Estel', price: null, unlock: ['Ratxa de 30 dies', 'Racha de 30 días'], desc: ['Una estrella que arriba després de 30 dies seguits practicant.', 'Una estrella que llega después de 30 días seguidos practicando.'], hello: ['Trenta dies seguits. Ara farem el camí juntes.', 'Treinta días seguidos. Ahora haremos el camino juntas.'],
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
    name: ['Xifra', 'Cifra'], price: null, unlock: ['Supera 3 unitats', 'Supera 3 unidades'],
    desc: ['Una cavallera que parteix els problemes grans en trossos petits.', 'Una caballera que parte los problemas grandes en trozos pequeños.'],
    hello: ['Un problema gran són uns quants de petits. Comencem pel primer.', 'Un problema grande son unos cuantos pequeños. Empecemos por el primero.'],
    a: { hx: 60, hy: 20, ey: 53, eg: 9, ny: 78, hw: 27 },
    draw: m => `${ground(30)}
      <rect x="47" y="98" width="11" height="14" rx="5" fill="#22397A"/><rect x="62" y="98" width="11" height="14" rx="5" fill="#22397A"/>
      <ellipse cx="51" cy="112" rx="8" ry="4" fill="#1A2A5A"/><ellipse cx="69" cy="112" rx="8" ry="4" fill="#1A2A5A"/>
      <path d="M44 76 Q60 71 76 76 L80 102 Q60 107 40 102Z" fill="url(#gTabard)"/>
      <rect x="41" y="91" width="38" height="5" rx="2.5" fill="#8A5A1E"/>
      <path d="M54 83.5h12" stroke="#FFF6E6" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="79.2" r="1.9" fill="#FFF6E6"/><circle cx="60" cy="87.8" r="1.9" fill="#FFF6E6"/>
      <circle cx="84" cy="86" r="6.5" fill="url(#gBrass)"/>
      <path d="M17 73 H41 V87 C41 97 34 103 29 106 C24 103 17 97 17 87Z" fill="url(#gShield)" stroke="#1A2A5A" stroke-width="2"/>
      <path d="M23.5 84h11M23.5 90h11" stroke="#F0B429" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="52" r="24" fill="#F5CFA8"/>
      <path d="M36 50 Q36 22 60 22 Q84 22 84 50 L84 60 Q80 58 79 50 Q77 38 60 38 Q43 38 41 50 Q40 58 36 60Z" fill="url(#gBrass)"/>
      ${shine('M42 32 q7 -8 20 -8 q-14 4 -17 12 z', .45)}
      <rect x="39" y="38" width="42" height="5" rx="2.5" fill="#A8741F"/>
      <path d="M60 22 V8" stroke="#8A5A1E" stroke-width="2.5" stroke-linecap="round"/><path d="M60 8.5 L75 12 L60 16Z" fill="#E8643C"/>
      <path d="M41 50 q-2 6 1 11 M79 50 q2 6 -1 11" stroke="#5A3A24" stroke-width="3" fill="none" stroke-linecap="round"/>
      ${eyes(51, 69, 53, m)}${blush(45, 75, 60, '#E8643C', .35)}${mouth(60, 63, m)}`
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
  if (lv >= 2) s += `<g class="lvstar">${star(98, 104, 9, lv >= 5 ? '#E8643C' : lv >= 4 ? '#F0B429' : '#26A69A')}<text x="98" y="107.5" text-anchor="middle" font-size="9" font-weight="700" fill="#1D2433" font-family="Lexend,sans-serif">${lv}</text></g>`;
  if (lv >= 4) s += `<g class="twinkle">${star(16, 40, 4, '#FFD23F')}${star(104, 28, 3.5, '#FFD23F')}${star(12, 84, 3, '#FFE680')}</g>`;
  return s;
}
function charSVG(id, mood = 'idle', acc, cls = '', lv = 1) {
  const c = CH[id] || CH.numi;
  let s = `<svg class="char m-${mood} ${cls}" viewBox="0 0 120 120" aria-hidden="true">${lvlDeco(lv, false)}<g class="cb">${c.draw(mood)}`;
  if (acc) ['neck', 'eyes', 'head'].forEach(sl => { const k = acc[sl]; if (k && ACC[k]) s += ACC[k].draw(c.a); });
  return s + `</g>${lvlDeco(lv, true)}</svg>`;
}

/* Icones de la interfície: traç de 2 px, extrems arrodonits, color heretat (currentColor).
   Les parts amb .f porten un farciment suau del mateix color. */
const ic = d => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICF = 'fill="currentColor" fill-opacity=".18"';
const ICON = {
  path: ic(`<circle cx="6" cy="18" r="2.2"/><path d="M8.2 17.6c3.3-.6 7.3-1.4 7.3-4.6S9.2 10.3 9.2 7.6 12 4 15.5 4"/><path d="M18 3v7M18 3.5h3l-1 1.7 1 1.8h-3"/>`),
  target: ic(`<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5" ${ICF}/><circle cx="12" cy="12" r=".8" fill="currentColor"/>`),
  cards: ic(`<rect x="8.5" y="3.5" width="11" height="15" rx="2" ${ICF}/><path d="M5.5 6.5v12a2 2 0 0 0 2 2H15"/><circle cx="14" cy="11" r="2.2"/>`),
  bag: ic(`<path d="M5 8.5h14l-1.1 11.2a1.5 1.5 0 0 1-1.5 1.3H7.6a1.5 1.5 0 0 1-1.5-1.3z" ${ICF}/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>`),
  user: ic(`<circle cx="12" cy="8.5" r="3.6" ${ICF}/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>`),
  flame: ic(`<path d="M12 21c-3.8 0-6.5-2.6-6.5-6.3 0-3 1.9-5 3.4-6.6.3 1.7 1.2 2.8 2.4 3.2-.3-3.2.7-6 3-8.3.3 3.1 4.2 5.4 4.2 10.5 0 4.4-2.8 7.5-6.5 7.5z" ${ICF}/><path d="M12 21c-1.5 0-2.6-1.1-2.6-2.7 0-1.8 1.5-2.7 2.6-4.3 1.1 1.6 2.6 2.5 2.6 4.3 0 1.6-1.1 2.7-2.6 2.7z"/>`),
  gem: ic(`<path d="M7 4h10l4 5.5L12 20 3 9.5z" ${ICF}/><path d="M3 9.5h18M9.5 4 8 9.5l4 10.5 4-10.5L14.5 4"/>`),
  bolt: ic(`<path d="M13.5 2.5 5 13.5h6.2l-1 8 8.3-11h-6.3z" ${ICF}/>`),
  star: ic(`<path d="M12 3.3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.6l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" ${ICF}/>`),
  check: ic(`<path d="M5 12.5l4.5 4.5L19 7.5"/>`),
  x: ic(`<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>`),
  lock: ic(`<rect x="5" y="10.5" width="14" height="10" rx="2.5" ${ICF}/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>`),
  crown: ic(`<path d="M4.5 17.5 3.5 7.5l4.8 3.8L12 5l3.7 6.3 4.8-3.8-1 10z" ${ICF}/><path d="M5 20.5h14"/>`),
  trophy: ic(`<path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0z" ${ICF}/><path d="M7.5 6h-3v1.3a3.2 3.2 0 0 0 3.3 3.2M16.5 6h3v1.3a3.2 3.2 0 0 1-3.3 3.2M12 13.5V17M8.5 20.5h7M10 17h4"/>`),
  gift: ic(`<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8" ${ICF}/><path d="M12 8v12M12 8c-1.5-3.4-5.5-3.8-5.5-1.5S10 8 12 8zm0 0c1.5-3.4 5.5-3.8 5.5-1.5S14 8 12 8z"/>`),
  chart: ic(`<path d="M4 4v16h16"/><path d="M7.5 15l4-4.5 3 2.5 5-6"/><circle cx="19.5" cy="7" r="1" fill="currentColor"/>`),
  book: ic(`<path d="M4 5.5c2.6-1 5.4-1 8 .6 2.6-1.6 5.4-1.6 8-.6V19c-2.6-1-5.4-1-8 .6-2.6-1.6-5.4-1.6-8-.6z" ${ICF}/><path d="M12 6.1v13.5"/>`),
  compass: ic(`<circle cx="12" cy="12" r="8.5"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z" ${ICF}/>`),
  clock: ic(`<circle cx="12" cy="13" r="7.5" ${ICF}/><path d="M12 9.5V13l2.5 1.6M10 2.5h4M12 2.5v3"/>`),
  link: ic(`<path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>`),
  repeat: ic(`<path d="M4 11.5V10a3.5 3.5 0 0 1 3.5-3.5H19M16 3.5l3 3-3 3M20 12.5V14a3.5 3.5 0 0 1-3.5 3.5H5M8 20.5l-3-3 3-3"/>`),
  history: ic(`<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M3.5 4.5v4h4"/><path d="M12 8v4.5l3 1.8"/>`),
  key: ic(`<circle cx="8" cy="15.5" r="4" ${ICF}/><path d="M11 12.5l8.5-8.5M16.5 7l2.5 2.5M14.5 9l2 2"/>`),
  cloud: ic(`<path d="M7 18.5h10a4 4 0 0 0 .6-8A5.5 5.5 0 0 0 7 9.2a4.7 4.7 0 0 0 0 9.3z" ${ICF}/>`),
  shield: ic(`<path d="M12 3.5 19 6v5.5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6z" ${ICF}/><path d="M9 12l2 2 4-4"/>`),
  medal: ic(`<path d="M8.5 11 6 3.5h4l2 5 2-5h4L15.5 11"/><circle cx="12" cy="15.5" r="5" ${ICF}/>`),
  headphones: ic(`<path d="M4.5 16v-3.5a7.5 7.5 0 0 1 15 0V16"/><rect x="3.5" y="14" width="4" height="6.5" rx="1.5" ${ICF}/><rect x="16.5" y="14" width="4" height="6.5" rx="1.5" ${ICF}/>`),
  flag: ic(`<path d="M5.5 21V4"/><path d="M5.5 4h11l-2 3.5 2 3.5h-11" ${ICF}/>`),
  flask: ic(`<path d="M9.5 3.5h5M10.5 3.5V9L5 18.5a1.4 1.4 0 0 0 1.2 2h11.6a1.4 1.4 0 0 0 1.2-2L13.5 9V3.5"/><path d="M7.4 14.5h9.2l2.4 4a1.4 1.4 0 0 1-1.2 2H6.2a1.4 1.4 0 0 1-1.2-2z" ${ICF} stroke="none"/>`),
  users: ic(`<circle cx="9" cy="9" r="3.2" ${ICF}/><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8"/><circle cx="16.5" cy="8" r="2.6"/><path d="M16.3 13.2c2.3 0 3.9 1.5 4.4 4"/>`),
  hat: ic(`<path d="M6.5 16.5V9.8C6.5 8.2 7.7 7 9.3 7h5.4c1.6 0 2.8 1.2 2.8 2.8v6.7" ${ICF}/><path d="M3 17c3 1.6 15 1.6 18 0M6.5 13h11"/>`),
  dumbbell: ic(`<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>`),
  cap: ic(`<path d="M2.5 9.5 12 5l9.5 4.5L12 14z" ${ICF}/><path d="M6.5 11.6v4c1.5 1.4 3.5 2.2 5.5 2.2s4-.8 5.5-2.2v-4M21.5 9.5v5"/>`),
  abacus: ic(`<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M4 9h16M4 15h16"/><circle cx="8" cy="9" r="1.4" fill="currentColor"/><circle cx="11.5" cy="9" r="1.4" fill="currentColor"/><circle cx="15" cy="15" r="1.4" fill="currentColor"/>`),
  hash: ic(`<path d="M9.5 4 7.5 20M16.5 4l-2 16M5 9h14.5M4.5 15h14.5"/>`),
  ruler: ic(`<rect x="2.5" y="8" width="19" height="8" rx="1.5" ${ICF}/><path d="M6.5 8v3M10.5 8v4M14.5 8v3M18.5 8v4"/>`),
  shapes: ic(`<path d="M8 3.5l5 8.5H3z" ${ICF}/><circle cx="16.5" cy="16.5" r="4"/><rect x="3.5" y="15" width="6" height="6" rx="1"/>`),
  blocks: ic(`<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" ${ICF}/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" ${ICF}/><path d="M14 7h6M17 4v6M4 17h6"/>`),
  dice: ic(`<rect x="4" y="4" width="16" height="16" rx="3.5" ${ICF}/><circle cx="8.8" cy="8.8" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="15.2" cy="15.2" r="1.2" fill="currentColor"/>`),
  puzzle: ic(`<path d="M5 8h3.3a2 2 0 1 1 3.4 0H15v3.3a2 2 0 1 1 0 3.4V19H5z" ${ICF}/>`),
  search: ic(`<circle cx="10.5" cy="10.5" r="6" ${ICF}/><path d="M15 15l5 5"/>`),
  calc: ic(`<path d="M7.5 4v6M4.5 7h6M13.5 7h6M4.5 17h6M14.5 14.5l4.5 4.5M19 14.5l-4.5 4.5"/>`),
  backspace: ic(`<path d="M9 5h10.5A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5H9l-6-7z"/><path d="M12 9.5l5 5M17 9.5l-5 5"/>`),
  eye: ic(`<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>`),
  right: ic(`<path d="M9 5l7 7-7 7"/>`),
  down: ic(`<path d="M6 9l6 6 6-6"/>`),
  bulb: ic(`<path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1v.1h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3z" ${ICF}/>`),
  plus: ic(`<path d="M12 5v14M5 12h14"/>`),
  face_love: ic(`<circle cx="12" cy="12" r="8.5" ${ICF}/><path d="M8 10.5l1.5-1.5 1.5 1.5M13 10.5l1.5-1.5 1.5 1.5M8 14c1 2 2.4 3 4 3s3-1 4-3z"/>`),
  face_good: ic(`<circle cx="12" cy="12" r="8.5" ${ICF}/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/><path d="M8.5 14.2c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2"/>`),
  face_meh: ic(`<circle cx="12" cy="12" r="8.5" ${ICF}/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/><path d="M9 15h6"/>`),
  face_hard: ic(`<circle cx="12" cy="12" r="8.5" ${ICF}/><circle cx="9" cy="10.5" r=".9" fill="currentColor"/><circle cx="15" cy="10.5" r=".9" fill="currentColor"/><path d="M8.5 16.2c.9-1.3 2.1-2 3.5-2s2.6.7 3.5 2M7.8 7.8l2.2.8M16.2 7.8l-2.2.8"/>`)
};
